// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {IDecoder} from "src/decoders/IDecoder.sol";
import {IFloodPlain} from "src/flood-plain/IFloodPlain.sol";

contract MockDecoder is IDecoder {
    fallback(bytes calldata data) external returns (bytes memory) {
        // Start from the first byte. In decoders with other external functions, first byte
        // would have to be skipped, as it should be a unique byte to bypass all other function
        // signatures. However, this is a simple decoder with only a fallback, so we can start from
        // the first byte.


        // A decoder should have a single feature. This decoder is for decoding to
        // `FloodPlain.fulfillOrder`, to reduce the calldata size. Note, this is not an optimal
        // decoder, but just something to portray the idea.

        // Scheme:
        // 20 bytes - offerer address
        // 20 bytes - zone address (this would be retrieved with a single byte in a production decoder)
        // 3 bytes - nonce (technically permit2 nonce can be anything, but let UI do not use nonce words larger than 2^16)
        // 4 bytes - deadline (this decoder does not need to be functional for more than a century)
        // 20 bytes - fulfiller (this would have been retrieved with a single byte in a production decoder)
        // 1 byte - signature v
        // 32 bytes - signature r
        // 32 bytes - signature s
        // 1 byte - num of offer items and num of consideration items, each in a nibble
        // 20+14 bytes - each item address and amount (in production decoder bytes reserved to amount would be dynamic)
        // ?? bytes - extraData

        IFloodPlain.Order memory order;
        bytes memory signature;
        address fulfiller;
        bytes memory context;

        uint256 ptr = 0;

        // TODO: This decoding doesn't work! Will be replaced with assembly.
        unchecked {
            // Decode instructions based on the above-described scheme.
            order.offerer = abi.decode(data[ptr:ptr += 20], (address));
            order.zone = abi.decode(data[ptr:ptr += 20], (address));
            order.nonce = uint256(abi.decode(data[ptr:ptr += 3], (uint24)));
            order.deadline = uint256(abi.decode(data[ptr:ptr += 4], (uint32)));
            fulfiller = abi.decode(data[ptr:ptr += 20], (address));
            bytes1 v = abi.decode(data[ptr:++ptr], (bytes1));
            bytes32 r = abi.decode(data[ptr:ptr += 32], (bytes32));
            bytes32 s = abi.decode(data[ptr:ptr += 32], (bytes32));
            signature = bytes.concat(r, s, v);
        }

        unchecked {
            uint256 itemCounts = abi.decode(data[ptr:++ptr], (uint256));
            uint256 offerCount = (itemCounts >> 4);
            uint256 considerationCount = (itemCounts & 0x0f);

            IFloodPlain.Item[] memory offer = new IFloodPlain.Item[](offerCount);
            IFloodPlain.Item[] memory consideration = new IFloodPlain.Item[](considerationCount);

            for (uint256 i = 0; i < offerCount; ++i) {
                offer[i].token = abi.decode(data[ptr:ptr += 20], (address));
                offer[i].amount = uint256(abi.decode(data[ptr:ptr += 14], (uint112)));
            }
            for (uint256 i = 0; i < considerationCount; ++i) {
                consideration[i].token = abi.decode(data[ptr:ptr += 20], (address));
                consideration[i].amount = uint256(abi.decode(data[ptr:ptr += 14], (uint112)));
            }

            order.offer = offer;
            order.consideration = consideration;

            context = data[ptr:];
        }

        return abi.encodeWithSelector(IFloodPlain.fulfillOrder.selector, order, signature, fulfiller, context);
    }
}
