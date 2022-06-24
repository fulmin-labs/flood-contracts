/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  AllKnowingOracle,
  AllKnowingOracleInterface,
} from "../../AllKnowingOracle.sol/AllKnowingOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "AllKnowingOracle__AlreadySettled",
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
    name: "AllKnowingOracle__NotWhitelisted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "AllKnowingOracle__RequestAlreadyExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newPct",
        type: "uint256",
      },
    ],
    name: "BondPctChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "disputer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bondToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bond",
        type: "uint256",
      },
    ],
    name: "NewRequest",
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
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "answer",
        type: "bool",
      },
    ],
    name: "RequestSettled",
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
        name: "enabled",
        type: "bool",
      },
    ],
    name: "TokenWhitelisted",
    type: "event",
  },
  {
    inputs: [
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
        internalType: "address",
        name: "bondToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
    ],
    name: "ask",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
    ],
    name: "bondForStake",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requests",
    outputs: [
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
        internalType: "address",
        name: "bondToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bond",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "answer",
        type: "bool",
      },
      {
        internalType: "enum RequestState",
        name: "state",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pct",
        type: "uint256",
      },
    ],
    name: "setBondPct",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "answer",
        type: "bool",
      },
    ],
    name: "settle",
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
        name: "enabled",
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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a350601960038190556040519081527fa2e09ae7caa0e84bcfe806d931934b92bf11ce67ffcaa3033af9a1e0319969519060200160405180910390a1610c578061009b6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b1461010d5780639d86698514610138578063af5899fc146101ab578063daf9c210146101be578063fc361c38146101f157600080fd5b806307de99f6146100a35780630ffb1d8b146100c957806313af4035146100de578063391fe4e2146100f15780638945bd28146100fa575b600080fd5b6100b66100b13660046109e4565b610204565b6040519081526020015b60405180910390f35b6100dc6100d7366004610a2a565b610215565b005b6100dc6100ec366004610a61565b610273565b6100b660035481565b6100dc6101083660046109e4565b6102e8565b600054610120906001600160a01b031681565b6040516001600160a01b0390911681526020016100c0565b6101986101463660046109e4565b60016020819052600091825260409091208054918101546002820154600383015460048401546005909401546001600160a01b0395861695938416949390921692909160ff8082169161010090041687565b6040516100c09796959493929190610a99565b6100b66101b9366004610aff565b61034d565b6101e16101cc366004610a61565b60026020526000908152604090205460ff1681565b60405190151581526020016100c0565b6100dc6101ff366004610b4a565b6105ee565b600061020f8261093e565b92915050565b6000546001600160a01b031633146102485760405162461bcd60e51b815260040161023f90610b6f565b60405180910390fd5b6001600160a01b03919091166000908152600260205260409020805460ff1916911515919091179055565b6000546001600160a01b0316331461029d5760405162461bcd60e51b815260040161023f90610b6f565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6000546001600160a01b031633146103125760405162461bcd60e51b815260040161023f90610b6f565b60038190556040518181527fa2e09ae7caa0e84bcfe806d931934b92bf11ce67ffcaa3033af9a1e0319969519060200160405180910390a150565b6001600160a01b03821660009081526002602052604081205460ff166103915760405163010d7e6160e11b81526001600160a01b038416600482015260240161023f565b600061039c8361093e565b604080516001600160a01b03808a1660208301528089169282019290925290861660608201526080810185905260a0810182905290915060009060c00160408051601f19818403018152919052805160209091012090506001600082815260016020526040902060050154610100900460ff16600281111561042057610420610a83565b036104415760405163d5e880e960e01b81526004810182905260240161023f565b60006040518060e00160405280896001600160a01b03168152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001848152602001600015158152602001600160028111156104a3576104a3610a83565b9052600083815260016020818152604092839020845181546001600160a01b03199081166001600160a01b03928316178355928601519382018054841694821694909417909355928401516002808501805490931691909316179055606083015160038301556080830151600483015560a083015160058301805460ff198116921515928317825560c0860151959650869593919261ffff1990911661ff0019909116179061010090849081111561055d5761055d610a83565b021790555061057a9150506001600160a01b03871688308661095a565b61058f6001600160a01b03871633308861095a565b604080516001600160a01b03888116825260208201889052918101859052818916918a169084907fb10e0c42d0d8cd4a999f95c50d18109fb205fdf5e55a8ed89121cab7f9f65f699060600160405180910390a4509695505050505050565b6000546001600160a01b031633146106185760405162461bcd60e51b815260040161023f90610b6f565b6000828152600160208181526040808420815160e08101835281546001600160a01b03908116825294820154851693810193909352600280820154909416918301919091526003810154606083015260048101546080830152600581015460ff808216151560a08501529293919260c085019261010090920416908111156106a2576106a2610a83565b60028111156106b3576106b3610a83565b905250905060028160c0015160028111156106d0576106d0610a83565b036106f15760405163b677167760e01b81526004810184905260240161023f565b81151560010361079c5780604001516001600160a01b031663a9059cbb8260000151836060015184608001516107279190610bab565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610772573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107969190610bc3565b50610839565b80604001516001600160a01b031663a9059cbb8260200151836060015184608001516107c89190610bab565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610813573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108379190610bc3565b505b600260c0820181815283151560a08401908152600086815260016020818152604092839020875181546001600160a01b039182166001600160a01b0319918216178355928901519382018054948216948416949094179093559287015183870180549190931691161790556060850151600382015560808501516004820155905160058201805491151560ff198316811782559351869593949093919261ff001990911661ffff1990911617906101009084908111156108fb576108fb610a83565b02179055505060405183151581528491507fdbed7580b9c2829ee6b384e3833f10b16f9885601c98a01c40fd705b543e9c669060200160405180910390a2505050565b60006064600354836109509190610be0565b61020f9190610bff565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806109dd5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b604482015260640161023f565b5050505050565b6000602082840312156109f657600080fd5b5035919050565b80356001600160a01b0381168114610a1457600080fd5b919050565b8015158114610a2757600080fd5b50565b60008060408385031215610a3d57600080fd5b610a46836109fd565b91506020830135610a5681610a19565b809150509250929050565b600060208284031215610a7357600080fd5b610a7c826109fd565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b038881168252878116602083015286166040820152606081018590526080810184905282151560a082015260e0810160038310610aed57634e487b7160e01b600052602160045260246000fd5b8260c083015298975050505050505050565b60008060008060808587031215610b1557600080fd5b610b1e856109fd565b9350610b2c602086016109fd565b9250610b3a604086016109fd565b9396929550929360600135925050565b60008060408385031215610b5d57600080fd5b823591506020830135610a5681610a19565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bbe57610bbe610b95565b500190565b600060208284031215610bd557600080fd5b8151610a7c81610a19565b6000816000190483118215151615610bfa57610bfa610b95565b500290565b600082610c1c57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212205bdec491885dcc1ed8f1a4dbb49b3f7c52371c21a2e5f51f7e6207c148789ec264736f6c634300080d0033";

type AllKnowingOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AllKnowingOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AllKnowingOracle__factory extends ContractFactory {
  constructor(...args: AllKnowingOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AllKnowingOracle> {
    return super.deploy(overrides || {}) as Promise<AllKnowingOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AllKnowingOracle {
    return super.attach(address) as AllKnowingOracle;
  }
  override connect(signer: Signer): AllKnowingOracle__factory {
    return super.connect(signer) as AllKnowingOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AllKnowingOracleInterface {
    return new utils.Interface(_abi) as AllKnowingOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllKnowingOracle {
    return new Contract(address, _abi, signerOrProvider) as AllKnowingOracle;
  }
}
