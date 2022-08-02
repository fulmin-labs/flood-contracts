/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BookSingleChain,
  BookSingleChainInterface,
} from "../../BookSingleChain.sol/BookSingleChain";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeBlockThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_disputeBondPct",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tradeRebatePct",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerRefundPct",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BookSingleChain__AmountOutTooLow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blocksLeft",
        type: "uint256",
      },
    ],
    name: "BookSingleChain__DisputePeriodNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__DisputePeriodOver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "BookSingleChain__FeePctTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__InvalidFeeCombination",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__InvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "BookSingleChain__InvalidToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "BookSingleChain__MaliciousCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__SameToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__SentToBlackHole",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
    ],
    name: "BookSingleChain__TradeAlreadyFilled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
    ],
    name: "BookSingleChain__TradeNotInFilledState",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "BookSingleChain__UnsafeTokenToWhitelist",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__ZeroAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeBondPct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tradeRebatePct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "relayerRefundPct",
        type: "uint256",
      },
    ],
    name: "FeeCombinationSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newSafeBlockThreshold",
        type: "uint256",
      },
    ],
    name: "SafeBlockThresholdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
    ],
    name: "TokenWhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "disputeId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "answer",
        type: "bool",
      },
    ],
    name: "TradeDisputeSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "disputeId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "filledAtBlock",
        type: "uint256",
      },
    ],
    name: "TradeDisputed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "TradeFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
    ],
    name: "TradeRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "filledAtBlock",
        type: "uint256",
      },
    ],
    name: "TradeSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFeePct",
        type: "uint256",
      },
    ],
    name: "UpdatedFeeForTrade",
    type: "event",
  },
  {
    inputs: [],
    name: "disputeBondPct",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
    ],
    name: "disputeTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToSend",
        type: "uint256",
      },
    ],
    name: "fillTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToSend",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newFeePct",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "traderSignature",
        type: "bytes",
      },
    ],
    name: "fillTradeWithUpdatedFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "filledAtBlock",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "filledBy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfTrades",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "requester",
            type: "address",
          },
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "address",
            name: "disputer",
            type: "address",
          },
          {
            internalType: "contract ERC20",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bond",
            type: "uint256",
          },
          {
            internalType: "enum RequestState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "answer",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Request",
        name: "request",
        type: "tuple",
      },
    ],
    name: "onPriceSettled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract AllKnowingOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "relayerRefundPct",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "requestTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "safeBlockThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
    ],
    name: "settleTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tradeRebatePct",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newFeePct",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "traderSignature",
        type: "bytes",
      },
    ],
    name: "updateFeeForTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
    ],
    name: "whitelistToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61012060405260006001553480156200001757600080fd5b5060405162001f8938038062001f898339810160408190526200003a9162000156565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506001600160a01b0385166101005260808490526040518481527f882885d0e4612a71677644a9d70e58ca05fc5a1ea1b0875f6e46c315241bfe149060200160405180910390a180620000ce8385620001ad565b620000da9190620001ad565b606414620000fb5760405163bcf1e5b360e01b815260040160405180910390fd5b60a083905260c082905260e081905260408051848152602081018490529081018290527ff33486d12ebec978385318eaf8163e096679d7eab14d4def8f26b7a5fda0f5829060600160405180910390a15050505050620001d4565b600080600080600060a086880312156200016f57600080fd5b85516001600160a01b03811681146200018757600080fd5b602087015160408801516060890151608090990151929a91995097965090945092505050565b60008219821115620001cf57634e487b7160e01b600052601160045260246000fd5b500190565b60805160a05160c05160e05161010051611d1c6200026d60003960008181610214015281816103ce0152818161068c015281816106b501528181610798015261081c0152600081816101c701528181610d630152610fc5015260008181610299015261088a0152600081816101a0015261064c01526000818161012b015281816105ce01528181610c910152610cdf0152611d1c6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80638da5cb5b116100ad578063cb7b1ec811610071578063cb7b1ec8146102ce578063cd805d5e146102e1578063d70e3dfd146102ea578063daf9c21014610313578063ee35a4f91461034657600080fd5b80638da5cb5b1461024e5780639501325f14610261578063ad3e762514610281578063c16402bb14610294578063c3f6f431146102bb57600080fd5b8063391fe4e2116100f4578063391fe4e21461019b57806353906a59146101c257806369cf50c1146101e9578063734d1627146101fc5780637dc0d1d01461020f57600080fd5b80630ff0c00e146101265780630ffb1d8b1461016057806313af4035146101755780631655b32314610188575b600080fd5b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61017361016e3660046116df565b610359565b005b610173610183366004611718565b6104c3565b61017361019636600461173c565b610557565b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b6101736101f73660046117b6565b610587565b61017361020a366004611828565b610811565b6102367f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610157565b600054610236906001600160a01b031681565b61014d61026f36600461186c565b60036020526000908152604090205481565b61017361028f366004611885565b610985565b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b6101736102c936600461192e565b610b4a565b6101736102dc3660046117b6565b610c4a565b61014d60015481565b6102366102f836600461186c565b6004602052600090815260409020546001600160a01b031681565b610336610321366004611718565b60026020526000908152604090205460ff1681565b6040519015158152602001610157565b6101736103543660046119f2565b610e03565b6000546001600160a01b031633146103a75760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b80801561043b5750604051630daf9c2160e41b81526001600160a01b0383811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063daf9c21090602401602060405180830381865afa158015610415573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104399190611ac2565b155b15610464576040516313c42eef60e21b81526001600160a01b038316600482015260240161039e565b6001600160a01b038216600081815260026020908152604091829020805460ff191685151590811790915591519182527fef81a9943b96c8df4ef243401c9bf5159146166211356898b52d382086168d92910160405180910390a25050565b6000546001600160a01b0316331461050c5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161039e565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b600061056889898989898989610e44565b905061057c89898989898989888a33610eb2565b505050505050505050565b600061059888888888888888610e44565b60008181526003602052604081205491925081136105cc57604051635c8aa24760e11b81526004810183905260240161039e565b7f00000000000000000000000000000000000000000000000000000000000000006105f78243611af5565b1061061557604051632c02744560e11b815260040160405180910390fd5b61061e81611b0c565b60008381526003602090815260408083209390935560049052908120546001600160a01b03169060646106717f00000000000000000000000000000000000000000000000000000000000000008b611b28565b61067b9190611b47565b90506106b16001600160a01b038c167f000000000000000000000000000000000000000000000000000000000000000083611017565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f7d3b58b84338f868f8d8d604051602001610715939291909283526001600160a01b03919091166020830152604082015260600190565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401610744959493929190611b69565b6020604051808303816000875af1158015610763573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107879190611bea565b90506107be6001600160a01b038d167f00000000000000000000000000000000000000000000000000000000000000006000611017565b8086846001600160a01b03167f3ce24c6eab720bcebe9baf9d21eee3175218126f896eb40e25675b054f19a40f876040516107fb91815260200190565b60405180910390a4505050505050505050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461085c5760405163179a2eb160e01b815233600482015260240161039e565b6000808061086d60e0850185611c03565b81019061087a9190611c4a565b91945092509050600060646108af7f000000000000000000000000000000000000000000000000000000000000000086611b28565b6108b99190611b47565b90506108cb60e0860160c08701611c82565b15610909576109046108e36040870160208801611718565b826108f46080890160608a01611718565b6001600160a01b03169190611094565b61091e565b61091e83826108f46080890160608a01611718565b85826109306040880160208901611718565b6001600160a01b03167f5346d9dd24f7f5e01b23ca4dada136d909acecf7ff9e4ed41474140d5d1319f661096a60e08a0160c08b01611c82565b604051901515815260200160405180910390a4505050505050565b6001600160a01b03861660009081526002602052604090205460ff166109c95760405163f602627d60e01b81526001600160a01b038716600482015260240161039e565b6001600160a01b03851660009081526002602052604090205460ff16610a0d5760405163f602627d60e01b81526001600160a01b038616600482015260240161039e565b846001600160a01b0316866001600160a01b031603610a3f57604051631d2792fb60e31b815260040160405180910390fd5b6703782dace9d90000821115610a6b576040516305bf279d60e41b81526004810183905260240161039e565b831580610a76575082155b15610a945760405163abc5ee6f60e01b815260040160405180910390fd5b6001600160a01b038116610abb57604051631feef77d60e01b815260040160405180910390fd5b60015460408051868152602081018690529081018490526001600160a01b03838116606083015280881691908916907ff4650f30e27746417929b97bf256a6022b15957ffef5971ddbe48867d9e01d459060800160405180910390a460018054906000610b2783611c9f565b90915550610b4290506001600160a01b03871633308761110c565b505050505050565b6000610b5b8c8c8c8c8c8c8c610e44565b90506703782dace9d90000841115610b89576040516305bf279d60e41b81526004810185905260240161039e565b6000818152600360205260408120541215610bba57604051635c8aa24760e11b81526004810182905260240161039e565b6000818152600360205260408120541315610beb576040516304daa62560e21b81526004810182905260240161039e565b610bf88582868686611196565b85856001600160a01b03167f6ab91dbc42f726b630639350395426be048c50255f12e82d28e2dffac417459386604051610c3491815260200190565b60405180910390a3505050505050505050505050565b6000610c5b88888888888888610e44565b6000818152600360205260408120549192508113610c8f57604051635c8aa24760e11b81526004810183905260240161039e565b7f0000000000000000000000000000000000000000000000000000000000000000610cba8243611af5565b1015610d2257600082815260036020526040812054610cd99043611af5565b610d03907f0000000000000000000000000000000000000000000000000000000000000000611af5565b9050806040516325797e0360e11b815260040161039e91815260200190565b60008281526004602081815260408084208054600384529185208590559290915281546001600160a01b0319169091556001600160a01b0316906064610d887f000000000000000000000000000000000000000000000000000000000000000082611af5565b610d92908b611b28565b610d9c9190611b47565b9050610db26001600160a01b038c168383611094565b84826001600160a01b03167f32b1eeadbe2d36ad64238ef29d8064aedff6d8150cf1f0c4d6617bae1c00d92685604051610dee91815260200190565b60405180910390a35050505050505050505050565b6000610e148d8d8d8d8d8d8d610e44565b9050610e238582868686611196565b610e358d8d8d8d888d8d888e33610eb2565b50505050505050505050505050565b604080516bffffffffffffffffffffffff196060998a1b8116602080840191909152988a1b81166034830152604882019790975260688101959095526088850193909352951b90921660a882015260bc808201949094528151808203909401845260dc019052815191012090565b6000838152600360205260408120541215610ee357604051635c8aa24760e11b81526004810184905260240161039e565b6000838152600360205260408120541315610f14576040516304daa62560e21b81526004810184905260240161039e565b86821015610f355760405163a53754a760e01b815260040160405180910390fd5b6000838152600360209081526040808320439055600482529182902080546001600160a01b0319166001600160a01b0385169081179091558251898152918201859052869290917f942417ccf4f356e8d909c054f8a8147622647605cbeafd9c63b4fc3cc1dd2a53910160405180910390a3610fbc6001600160a01b038a1682878561110c565b60006064610fea7f00000000000000000000000000000000000000000000000000000000000000008b611b28565b610ff49190611b47565b905061100a6001600160a01b038c168383611094565b5050505050505050505050565b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061108e5760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b604482015260640161039e565b50505050565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061108e5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015260640161039e565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061118f5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b604482015260640161039e565b5050505050565b6703782dace9d900008311156111c2576040516305bf279d60e41b81526004810184905260240161039e565b60008481526003602052604081205412156111f357604051635c8aa24760e11b81526004810185905260240161039e565b6000848152600360205260408120541315611224576040516304daa62560e21b81526004810185905260240161039e565b604080517f582b2ba4cf2b931b2e1a054db15a958a1d2222e9e884ffc3c15f79da7d0177ba6020808301919091528183018790526060808301879052835180840390910181526080830184528051908201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060a084015260bc8084018290528451808503909101815260dc909301909352815191012060006112fd8286868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061133b92505050565b9050876001600160a01b0316816001600160a01b031614611331576040516324a0dbd760e21b815260040160405180910390fd5b5050505050505050565b600080600061134a858561135f565b91509150611357816113cd565b509392505050565b60008082516041036113955760208301516040840151606085015160001a61138987828585611586565b945094505050506113c6565b82516040036113be57602083015160408401516113b3868383611673565b9350935050506113c6565b506000905060025b9250929050565b60008160048111156113e1576113e1611cb8565b036113e95750565b60018160048111156113fd576113fd611cb8565b0361144a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161039e565b600281600481111561145e5761145e611cb8565b036114ab5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161039e565b60038160048111156114bf576114bf611cb8565b036115175760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161039e565b600481600481111561152b5761152b611cb8565b036115835760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161039e565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156115bd575060009050600361166a565b8460ff16601b141580156115d557508460ff16601c14155b156115e6575060009050600461166a565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561163a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166116635760006001925092505061166a565b9150600090505b94509492505050565b6000806001600160ff1b0383168161169060ff86901c601b611cce565b905061169e87828885611586565b935093505050935093915050565b6001600160a01b038116811461158357600080fd5b80356116cc816116ac565b919050565b801515811461158357600080fd5b600080604083850312156116f257600080fd5b82356116fd816116ac565b9150602083013561170d816116d1565b809150509250929050565b60006020828403121561172a57600080fd5b8135611735816116ac565b9392505050565b600080600080600080600080610100898b03121561175957600080fd5b8835611764816116ac565b97506020890135611774816116ac565b965060408901359550606089013594506080890135935060a0890135611799816116ac565b979a969950949793969295929450505060c08201359160e0013590565b600080600080600080600060e0888a0312156117d157600080fd5b87356117dc816116ac565b965060208801356117ec816116ac565b955060408801359450606088013593506080880135925060a0880135611811816116ac565b8092505060c0880135905092959891949750929550565b6000806040838503121561183b57600080fd5b82359150602083013567ffffffffffffffff81111561185957600080fd5b8301610100818603121561170d57600080fd5b60006020828403121561187e57600080fd5b5035919050565b60008060008060008060c0878903121561189e57600080fd5b86356118a9816116ac565b955060208701356118b9816116ac565b945060408701359350606087013592506080870135915060a08701356118de816116ac565b809150509295509295509295565b60008083601f8401126118fe57600080fd5b50813567ffffffffffffffff81111561191657600080fd5b6020830191508360208285010111156113c657600080fd5b60008060008060008060008060008060006101408c8e03121561195057600080fd5b8b3561195b816116ac565b9a5060208c013561196b816116ac565b995060408c0135985060608c0135975060808c0135965060a08c0135611990816116ac565b955060c08c0135945060e08c01356119a7816116ac565b93506101008c013592506101208c013567ffffffffffffffff8111156119cc57600080fd5b6119d88e828f016118ec565b915080935050809150509295989b509295989b9093969950565b6000806000806000806000806000806000806101608d8f031215611a1557600080fd5b611a1f8d356116ac565b8c359b50611a3060208e01356116ac565b60208d01359a5060408d0135995060608d0135985060808d01359750611a5860a08e016116c1565b965060c08d0135955060e08d01359450611a756101008e016116c1565b93506101208d0135925067ffffffffffffffff6101408e01351115611a9957600080fd5b611aaa8e6101408f01358f016118ec565b81935080925050509295989b509295989b509295989b565b600060208284031215611ad457600080fd5b8151611735816116d1565b634e487b7160e01b600052601160045260246000fd5b600082821015611b0757611b07611adf565b500390565b6000600160ff1b8201611b2157611b21611adf565b5060000390565b6000816000190483118215151615611b4257611b42611adf565b500290565b600082611b6457634e487b7160e01b600052601260045260246000fd5b500490565b600060018060a01b038088168352602081881681850152818716604085015285606085015260a06080850152845191508160a085015260005b82811015611bbe5785810182015185820160c001528101611ba2565b82811115611bd057600060c084870101525b5050601f01601f19169190910160c0019695505050505050565b600060208284031215611bfc57600080fd5b5051919050565b6000808335601e19843603018112611c1a57600080fd5b83018035915067ffffffffffffffff821115611c3557600080fd5b6020019150368190038213156113c657600080fd5b600080600060608486031215611c5f57600080fd5b833592506020840135611c71816116ac565b929592945050506040919091013590565b600060208284031215611c9457600080fd5b8135611735816116d1565b600060018201611cb157611cb1611adf565b5060010190565b634e487b7160e01b600052602160045260246000fd5b60008219821115611ce157611ce1611adf565b50019056fea2646970667358221220d4b04807a9b92af316f64575d8e0c355adb8979067c87ce0ab86bdfe7a5f7c6964736f6c634300080f0033";

type BookSingleChainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BookSingleChainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BookSingleChain__factory extends ContractFactory {
  constructor(...args: BookSingleChainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _oracle: PromiseOrValue<string>,
    _safeBlockThreshold: PromiseOrValue<BigNumberish>,
    _disputeBondPct: PromiseOrValue<BigNumberish>,
    _tradeRebatePct: PromiseOrValue<BigNumberish>,
    _relayerRefundPct: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BookSingleChain> {
    return super.deploy(
      _oracle,
      _safeBlockThreshold,
      _disputeBondPct,
      _tradeRebatePct,
      _relayerRefundPct,
      overrides || {}
    ) as Promise<BookSingleChain>;
  }
  override getDeployTransaction(
    _oracle: PromiseOrValue<string>,
    _safeBlockThreshold: PromiseOrValue<BigNumberish>,
    _disputeBondPct: PromiseOrValue<BigNumberish>,
    _tradeRebatePct: PromiseOrValue<BigNumberish>,
    _relayerRefundPct: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _oracle,
      _safeBlockThreshold,
      _disputeBondPct,
      _tradeRebatePct,
      _relayerRefundPct,
      overrides || {}
    );
  }
  override attach(address: string): BookSingleChain {
    return super.attach(address) as BookSingleChain;
  }
  override connect(signer: Signer): BookSingleChain__factory {
    return super.connect(signer) as BookSingleChain__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BookSingleChainInterface {
    return new utils.Interface(_abi) as BookSingleChainInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BookSingleChain {
    return new Contract(address, _abi, signerOrProvider) as BookSingleChain;
  }
}
