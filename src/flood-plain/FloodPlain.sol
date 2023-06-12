// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// Inheritances
import {IFloodPlain} from "./IFloodPlain.sol";
import {ReentrancyGuard} from "@openzeppelin/security/ReentrancyGuard.sol";

// Libraries
import {OrderHash} from "./libraries/OrderHash.sol";

// Interfaces
import {IFulfiller} from "../fulfiller/IFulfiller.sol";
import {IZone} from "../zone/IZone.sol";
import {IERC20} from "@openzeppelin/token/ERC20/IERC20.sol";
import {ISignatureTransfer} from "permit2/src/interfaces/ISignatureTransfer.sol";

contract FloodPlain is IFloodPlain, ReentrancyGuard {
    using OrderHash for Order;

    ISignatureTransfer public immutable PERMIT2;

    constructor(address permit2) {
        if (permit2.code.length == 0) {
            revert NotAContract();
        }

        PERMIT2 = ISignatureTransfer(permit2);
    }

    function fulfillOrder(Order calldata order, bytes calldata signature, address fulfiller, bytes calldata extraData)
        external
        nonReentrant
    {
        // Retrieve the order hash for order.
        bytes32 orderHash = order.hash();

        // Check zone restrictions.
        address zone = order.zone;
        if (zone != address(0)) {
            IZone(zone).validateOrder({
                order: order,
                book: address(this),
                fulfiller: fulfiller,
                caller: msg.sender,
                orderHash: orderHash,
                context: extraData
            });
        }

        // Transfer each offer item to fulfiller using Permit2.
        _permitTransferOffer({order: order, signature: signature, orderHash: orderHash, to: fulfiller});

        // Transfer consideration items from fulfiller to offerer.
        _transferConsideration({order: order, fulfiller: fulfiller, extraData: extraData});

        // Emit an event signifying that the order has been fulfilled.
        emit OrderFulfilled(orderHash, order.offerer, fulfiller);
    }

    function getPermitHash(Order calldata order) external pure returns (bytes32 /* permitHash */ ) {
        // Derive permit2 hash with order hash as witness by supplying order parameters.
        return order.hashAsWitness();
    }

    function getOrderHash(Order calldata order) external pure returns (bytes32 /* orderHash */ ) {
        // Derive order hash by supplying order parameters.
        return order.hash();
    }

    function getOrderValidity(Order calldata order, address fulfiller, address caller, bytes calldata extraData)
        external
        view
        returns (bool /* isValid */ )
    {
        if (!getOrderStatus({order: order})) {
            return false;
        }

        if (order.zone == address(0)) {
            return true;
        } else {
            try IZone(order.zone).validateOrder({
                book: address(this),
                order: order,
                fulfiller: fulfiller,
                caller: caller,
                orderHash: order.hash(),
                context: extraData
            }) {
                return true;
            } catch {
                return false;
            }
        }
    }

    function getOrderStatus(Order calldata order) public view returns (bool /* isValid */ ) {
        if (block.timestamp > order.deadline) {
            return false;
        }
        if (!getNonceStatus({user: order.offerer, nonce: order.nonce})) {
            return false;
        }
        return true;
    }

    function getNonceStatus(address user, uint256 nonce) public view returns (bool /* isValid */ ) {
        uint256 wordPos = uint248(nonce >> 8);
        uint256 bitPos = uint8(nonce);
        return PERMIT2.nonceBitmap(user, wordPos) & (1 << bitPos) == 0;
    }

    function _permitTransferOffer(Order calldata order, bytes calldata signature, bytes32 orderHash, address to)
        internal
    {
        Item[] calldata offer = order.offer;
        uint256 itemsLength = offer.length;

        ISignatureTransfer.TokenPermissions[] memory permitted = new ISignatureTransfer.TokenPermissions[](itemsLength);
        ISignatureTransfer.SignatureTransferDetails[] memory transferDetails =
        new ISignatureTransfer.SignatureTransferDetails[](
                itemsLength
            );

        {
            Item calldata item;
            uint256 amount;
            for (uint256 i = 0; i < itemsLength;) {
                item = offer[i];
                amount = item.amount;

                permitted[i] = ISignatureTransfer.TokenPermissions({token: item.token, amount: amount});
                transferDetails[i] = ISignatureTransfer.SignatureTransferDetails({to: to, requestedAmount: amount});

                unchecked {
                    ++i;
                }
            }
        }

        PERMIT2.permitWitnessTransferFrom({
            permit: ISignatureTransfer.PermitBatchTransferFrom({
                permitted: permitted,
                nonce: order.nonce,
                deadline: order.deadline
            }),
            transferDetails: transferDetails,
            owner: order.offerer,
            witness: orderHash,
            witnessTypeString: OrderHash._WITNESS_TYPESTRING,
            signature: signature
        });
    }

    function _transferConsideration(Order calldata order, address fulfiller, bytes calldata extraData) internal {
        Item[] calldata items = order.consideration;
        Item calldata item;
        Item memory deduplicatedItem;
        uint256 itemsLength = items.length;

        Item[] memory deduplicatedItems = new Item[](itemsLength);
        uint256 dedupCount;
        // For each consideration item...
        for (uint256 i = 0; i < itemsLength;) {
            item = items[i];
            bool isFound;
            // Check if it is the same as a previous consideration item in the array.
            for (uint256 j = 0; j < dedupCount;) {
                deduplicatedItem = deduplicatedItems[j];
                if (deduplicatedItem.token == item.token) {
                    // And add the amounts of the two consideration items with identical tokens.
                    deduplicatedItem.amount += item.amount;
                    isFound = true;
                    break;
                }

                unchecked {
                    ++j;
                }
            }

            // If the consideration item is encountered the first time...
            if (!isFound) {
                // Add it to the deduplicated consideration items array.
                deduplicatedItems[dedupCount] = item;

                // And increase the actual length of the array.
                unchecked {
                    ++dedupCount;
                }
            }
        }

        // Get the minimum required final balances of the consideration items.
        uint256[] memory requiredAmounts = new uint256[](dedupCount);
        address to = order.offerer;
        for (uint256 i = 0; i < dedupCount;) {
            deduplicatedItem = deduplicatedItems[i];

            requiredAmounts[i] = deduplicatedItem.token == address(0)
                ? deduplicatedItem.amount + to.balance
                : deduplicatedItem.amount + IERC20(deduplicatedItem.token).balanceOf(to);

            unchecked {
                ++i;
            }
        }

        assembly {
            // Trim the array to its actual size. TODO: Test to ensure it works.
            mstore(deduplicatedItems, dedupCount)
        }

        // Call fulfiller with order data and the caller address to source consideration items.
        // Contracts implementing Fulfiller interface could get all their tokens drained, hence
        // they should restrict who can call them directly or indirectly.
        IFulfiller(payable(fulfiller)).sourceConsideration({
            order: order,
            requestedItems: deduplicatedItems,
            caller: msg.sender,
            context: extraData
        });

        // Check the offerer has received necessary amounts of all the consideration items.
        uint256 newBalance;
        for (uint256 i = 0; i < dedupCount;) {
            deduplicatedItem = deduplicatedItems[i];
            newBalance = deduplicatedItem.token == address(0) ? to.balance : IERC20(deduplicatedItem.token).balanceOf(to);
            if (newBalance < requiredAmounts[i]) {
                revert InsufficientAmountPulled();
            }

            unchecked {
                ++i;
            }
        }
    }
}