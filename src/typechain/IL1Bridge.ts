/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type L2TransactionRequestTwoBridgesInnerStruct = {
  magicValue: BytesLike;
  l2Contract: AddressLike;
  l2Calldata: BytesLike;
  factoryDeps: BytesLike[];
  txDataHash: BytesLike;
};

export type L2TransactionRequestTwoBridgesInnerStructOutput = [
  magicValue: string,
  l2Contract: string,
  l2Calldata: string,
  factoryDeps: string[],
  txDataHash: string
] & {
  magicValue: string;
  l2Contract: string;
  l2Calldata: string;
  factoryDeps: string[];
  txDataHash: string;
};

export interface IL1BridgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bridgehub"
      | "bridgehubConfirmL2Transaction"
      | "bridgehubDeposit"
      | "bridgehubDepositBaseToken"
      | "claimFailedDeposit"
      | "deposit"
      | "depositHappened"
      | "finalizeWithdrawal"
      | "isWithdrawalFinalizedShared"
      | "l2BridgeAddress"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BridgehubDepositFinalized"
      | "BridgehubDepositInitiatedSharedBridge"
      | "ClaimedFailedDepositSharedBridge"
      | "DepositInitiatedSharedBridge"
      | "WithdrawalFinalizedSharedBridge"
  ): EventFragment;

  encodeFunctionData(functionFragment: "bridgehub", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bridgehubConfirmL2Transaction",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgehubDeposit",
    values: [BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgehubDepositBaseToken",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFailedDeposit",
    values: [
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositHappened",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeWithdrawal",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isWithdrawalFinalizedShared",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "l2BridgeAddress",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "bridgehub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bridgehubConfirmL2Transaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bridgehubDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bridgehubDepositBaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFailedDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositHappened",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWithdrawalFinalizedShared",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2BridgeAddress",
    data: BytesLike
  ): Result;
}

export namespace BridgehubDepositFinalizedEvent {
  export type InputTuple = [
    chainId: BigNumberish,
    txDataHash: BytesLike,
    l2DepositTxHash: BytesLike
  ];
  export type OutputTuple = [
    chainId: bigint,
    txDataHash: string,
    l2DepositTxHash: string
  ];
  export interface OutputObject {
    chainId: bigint;
    txDataHash: string;
    l2DepositTxHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BridgehubDepositInitiatedSharedBridgeEvent {
  export type InputTuple = [
    chainId: BigNumberish,
    txDataHash: BytesLike,
    from: AddressLike,
    to: AddressLike,
    l1Token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    chainId: bigint,
    txDataHash: string,
    from: string,
    to: string,
    l1Token: string,
    amount: bigint
  ];
  export interface OutputObject {
    chainId: bigint;
    txDataHash: string;
    from: string;
    to: string;
    l1Token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimedFailedDepositSharedBridgeEvent {
  export type InputTuple = [
    chainId: BigNumberish,
    to: AddressLike,
    l1Token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    chainId: bigint,
    to: string,
    l1Token: string,
    amount: bigint
  ];
  export interface OutputObject {
    chainId: bigint;
    to: string;
    l1Token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositInitiatedSharedBridgeEvent {
  export type InputTuple = [
    chainId: BigNumberish,
    l2DepositTxHash: BytesLike,
    from: AddressLike,
    to: AddressLike,
    l1Token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    chainId: bigint,
    l2DepositTxHash: string,
    from: string,
    to: string,
    l1Token: string,
    amount: bigint
  ];
  export interface OutputObject {
    chainId: bigint;
    l2DepositTxHash: string;
    from: string;
    to: string;
    l1Token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalFinalizedSharedBridgeEvent {
  export type InputTuple = [
    chainId: BigNumberish,
    to: AddressLike,
    l1Token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    chainId: bigint,
    to: string,
    l1Token: string,
    amount: bigint
  ];
  export interface OutputObject {
    chainId: bigint;
    to: string;
    l1Token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IL1Bridge extends BaseContract {
  connect(runner?: ContractRunner | null): IL1Bridge;
  waitForDeployment(): Promise<this>;

  interface: IL1BridgeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  bridgehub: TypedContractMethod<[], [string], "view">;

  bridgehubConfirmL2Transaction: TypedContractMethod<
    [_chainId: BigNumberish, _txDataHash: BytesLike, _txHash: BytesLike],
    [void],
    "nonpayable"
  >;

  bridgehubDeposit: TypedContractMethod<
    [_chainId: BigNumberish, _prevMsgSender: AddressLike, _data: BytesLike],
    [L2TransactionRequestTwoBridgesInnerStructOutput],
    "payable"
  >;

  bridgehubDepositBaseToken: TypedContractMethod<
    [
      _chainId: BigNumberish,
      _prevMsgSender: AddressLike,
      _l1Token: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "payable"
  >;

  claimFailedDeposit: TypedContractMethod<
    [
      _chainId: BigNumberish,
      _depositSender: AddressLike,
      _l1Token: AddressLike,
      _amount: BigNumberish,
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  deposit: TypedContractMethod<
    [
      _chainId: BigNumberish,
      _l2Receiver: AddressLike,
      _l1Token: AddressLike,
      _mintValue: BigNumberish,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      _refundRecipient: AddressLike
    ],
    [string],
    "payable"
  >;

  depositHappened: TypedContractMethod<
    [_chainId: BigNumberish, _l2TxHash: BytesLike],
    [string],
    "view"
  >;

  finalizeWithdrawal: TypedContractMethod<
    [
      _chainId: BigNumberish,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  isWithdrawalFinalizedShared: TypedContractMethod<
    [
      _chainId: BigNumberish,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish
    ],
    [boolean],
    "view"
  >;

  l2BridgeAddress: TypedContractMethod<
    [_chainId: BigNumberish],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bridgehub"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bridgehubConfirmL2Transaction"
  ): TypedContractMethod<
    [_chainId: BigNumberish, _txDataHash: BytesLike, _txHash: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bridgehubDeposit"
  ): TypedContractMethod<
    [_chainId: BigNumberish, _prevMsgSender: AddressLike, _data: BytesLike],
    [L2TransactionRequestTwoBridgesInnerStructOutput],
    "payable"
  >;
  getFunction(
    nameOrSignature: "bridgehubDepositBaseToken"
  ): TypedContractMethod<
    [
      _chainId: BigNumberish,
      _prevMsgSender: AddressLike,
      _l1Token: AddressLike,
      _amount: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "claimFailedDeposit"
  ): TypedContractMethod<
    [
      _chainId: BigNumberish,
      _depositSender: AddressLike,
      _l1Token: AddressLike,
      _amount: BigNumberish,
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [
      _chainId: BigNumberish,
      _l2Receiver: AddressLike,
      _l1Token: AddressLike,
      _mintValue: BigNumberish,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      _refundRecipient: AddressLike
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositHappened"
  ): TypedContractMethod<
    [_chainId: BigNumberish, _l2TxHash: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "finalizeWithdrawal"
  ): TypedContractMethod<
    [
      _chainId: BigNumberish,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isWithdrawalFinalizedShared"
  ): TypedContractMethod<
    [
      _chainId: BigNumberish,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "l2BridgeAddress"
  ): TypedContractMethod<[_chainId: BigNumberish], [string], "view">;

  getEvent(
    key: "BridgehubDepositFinalized"
  ): TypedContractEvent<
    BridgehubDepositFinalizedEvent.InputTuple,
    BridgehubDepositFinalizedEvent.OutputTuple,
    BridgehubDepositFinalizedEvent.OutputObject
  >;
  getEvent(
    key: "BridgehubDepositInitiatedSharedBridge"
  ): TypedContractEvent<
    BridgehubDepositInitiatedSharedBridgeEvent.InputTuple,
    BridgehubDepositInitiatedSharedBridgeEvent.OutputTuple,
    BridgehubDepositInitiatedSharedBridgeEvent.OutputObject
  >;
  getEvent(
    key: "ClaimedFailedDepositSharedBridge"
  ): TypedContractEvent<
    ClaimedFailedDepositSharedBridgeEvent.InputTuple,
    ClaimedFailedDepositSharedBridgeEvent.OutputTuple,
    ClaimedFailedDepositSharedBridgeEvent.OutputObject
  >;
  getEvent(
    key: "DepositInitiatedSharedBridge"
  ): TypedContractEvent<
    DepositInitiatedSharedBridgeEvent.InputTuple,
    DepositInitiatedSharedBridgeEvent.OutputTuple,
    DepositInitiatedSharedBridgeEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawalFinalizedSharedBridge"
  ): TypedContractEvent<
    WithdrawalFinalizedSharedBridgeEvent.InputTuple,
    WithdrawalFinalizedSharedBridgeEvent.OutputTuple,
    WithdrawalFinalizedSharedBridgeEvent.OutputObject
  >;

  filters: {
    "BridgehubDepositFinalized(uint256,bytes32,bytes32)": TypedContractEvent<
      BridgehubDepositFinalizedEvent.InputTuple,
      BridgehubDepositFinalizedEvent.OutputTuple,
      BridgehubDepositFinalizedEvent.OutputObject
    >;
    BridgehubDepositFinalized: TypedContractEvent<
      BridgehubDepositFinalizedEvent.InputTuple,
      BridgehubDepositFinalizedEvent.OutputTuple,
      BridgehubDepositFinalizedEvent.OutputObject
    >;

    "BridgehubDepositInitiatedSharedBridge(uint256,bytes32,address,address,address,uint256)": TypedContractEvent<
      BridgehubDepositInitiatedSharedBridgeEvent.InputTuple,
      BridgehubDepositInitiatedSharedBridgeEvent.OutputTuple,
      BridgehubDepositInitiatedSharedBridgeEvent.OutputObject
    >;
    BridgehubDepositInitiatedSharedBridge: TypedContractEvent<
      BridgehubDepositInitiatedSharedBridgeEvent.InputTuple,
      BridgehubDepositInitiatedSharedBridgeEvent.OutputTuple,
      BridgehubDepositInitiatedSharedBridgeEvent.OutputObject
    >;

    "ClaimedFailedDepositSharedBridge(uint256,address,address,uint256)": TypedContractEvent<
      ClaimedFailedDepositSharedBridgeEvent.InputTuple,
      ClaimedFailedDepositSharedBridgeEvent.OutputTuple,
      ClaimedFailedDepositSharedBridgeEvent.OutputObject
    >;
    ClaimedFailedDepositSharedBridge: TypedContractEvent<
      ClaimedFailedDepositSharedBridgeEvent.InputTuple,
      ClaimedFailedDepositSharedBridgeEvent.OutputTuple,
      ClaimedFailedDepositSharedBridgeEvent.OutputObject
    >;

    "DepositInitiatedSharedBridge(uint256,bytes32,address,address,address,uint256)": TypedContractEvent<
      DepositInitiatedSharedBridgeEvent.InputTuple,
      DepositInitiatedSharedBridgeEvent.OutputTuple,
      DepositInitiatedSharedBridgeEvent.OutputObject
    >;
    DepositInitiatedSharedBridge: TypedContractEvent<
      DepositInitiatedSharedBridgeEvent.InputTuple,
      DepositInitiatedSharedBridgeEvent.OutputTuple,
      DepositInitiatedSharedBridgeEvent.OutputObject
    >;

    "WithdrawalFinalizedSharedBridge(uint256,address,address,uint256)": TypedContractEvent<
      WithdrawalFinalizedSharedBridgeEvent.InputTuple,
      WithdrawalFinalizedSharedBridgeEvent.OutputTuple,
      WithdrawalFinalizedSharedBridgeEvent.OutputObject
    >;
    WithdrawalFinalizedSharedBridge: TypedContractEvent<
      WithdrawalFinalizedSharedBridgeEvent.InputTuple,
      WithdrawalFinalizedSharedBridgeEvent.OutputTuple,
      WithdrawalFinalizedSharedBridgeEvent.OutputObject
    >;
  };
}
