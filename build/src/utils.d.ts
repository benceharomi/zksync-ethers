import { BigNumber, BigNumberish, BytesLike, ethers } from "ethers";
import { SignatureLike } from "@ethersproject/bytes";
import { Address, DeploymentInfo, PriorityOpTree, PriorityQueueType } from "./types";
import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { Provider } from "./provider";
export * from "./paymaster-utils";
export { EIP712_TYPES } from "./signer";
export declare const ZKSYNC_MAIN_ABI: ethers.utils.Interface;
export declare const BRIDGEHUB_ABI: ethers.utils.Interface;
export declare const CONTRACT_DEPLOYER: ethers.utils.Interface;
export declare const L1_MESSENGER: ethers.utils.Interface;
export declare const IERC20: ethers.utils.Interface;
export declare const IERC1271: ethers.utils.Interface;
export declare const L1_BRIDGE_ABI: ethers.utils.Interface;
export declare const L2_BRIDGE_ABI: ethers.utils.Interface;
export declare const NONCE_HOLDER_ABI: ethers.utils.Interface;
export declare const ETH_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const ETH_ADDRESS_IN_CONTRACTS = "0x0000000000000000000000000000000000000001";
export declare const BOOTLOADER_FORMAL_ADDRESS = "0x0000000000000000000000000000000000008001";
export declare const CONTRACT_DEPLOYER_ADDRESS = "0x0000000000000000000000000000000000008006";
export declare const L1_MESSENGER_ADDRESS = "0x0000000000000000000000000000000000008008";
export declare const L2_ETH_TOKEN_ADDRESS = "0x000000000000000000000000000000000000800a";
export declare const NONCE_HOLDER_ADDRESS = "0x0000000000000000000000000000000000008003";
export declare const ZERO_HASH = "0x0000000000000000000000000000000000000000000000000000000000000000";
export declare const L1_TO_L2_ALIAS_OFFSET = "0x1111000000000000000000000000000000001111";
export declare const EIP1271_MAGIC_VALUE = "0x1626ba7e";
export declare const EIP712_TX_TYPE = 113;
export declare const PRIORITY_OPERATION_L2_TX_TYPE = 255;
export declare const MAX_BYTECODE_LEN_BYTES: number;
export declare const L1_FEE_ESTIMATION_COEF_NUMERATOR: BigNumber;
export declare const L1_FEE_ESTIMATION_COEF_DENOMINATOR: BigNumber;
export declare const L1_RECOMMENDED_MIN_ERC20_DEPOSIT_GAS_LIMIT = 400000;
export declare const L1_RECOMMENDED_MIN_ETH_DEPOSIT_GAS_LIMIT = 200000;
export declare const DEFAULT_GAS_PER_PUBDATA_LIMIT = 50000;
export declare const REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT = 800;
export declare function isETH(token: Address): boolean;
export declare function sleep(millis: number): Promise<unknown>;
export declare function layer1TxDefaults(): {
    queueType: PriorityQueueType;
    opTree: PriorityOpTree;
};
export declare function getHashedL2ToL1Msg(sender: Address, msg: BytesLike, txNumberInBlock: number): string;
export declare function getDeployedContracts(receipt: ethers.providers.TransactionReceipt): DeploymentInfo[];
export declare function create2Address(sender: Address, bytecodeHash: BytesLike, salt: BytesLike, input?: BytesLike): string;
export declare function createAddress(sender: Address, senderNonce: BigNumberish): string;
export declare function checkBaseCost(baseCost: ethers.BigNumber, value: ethers.BigNumberish | Promise<ethers.BigNumberish>): Promise<void>;
export declare function serialize(transaction: ethers.providers.TransactionRequest, signature?: SignatureLike): string;
export declare function hashBytecode(bytecode: ethers.BytesLike): Uint8Array;
export declare function parseTransaction(payload: ethers.BytesLike): ethers.Transaction;
export declare function getL2HashFromPriorityOp(txReceipt: ethers.providers.TransactionReceipt, zkSyncAddress: Address): string;
export declare function applyL1ToL2Alias(address: string): string;
export declare function undoL1ToL2Alias(address: string): string;
export declare function getERC20DefaultBridgeData(l1TokenAddress: string, provider: ethers.providers.Provider): Promise<string>;
export declare function getERC20BridgeCalldata(l1TokenAddress: string, l1Sender: string, l2Receiver: string, amount: BigNumberish, bridgeData: BytesLike): Promise<string>;
export declare function isMessageSignatureCorrect(provider: Provider, address: string, message: ethers.Bytes | string, signature: SignatureLike): Promise<boolean>;
export declare function isTypedDataSignatureCorrect(provider: Provider, address: string, domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, any>, signature: SignatureLike): Promise<boolean>;
export declare function estimateDefaultBridgeDepositL2Gas(providerL1: ethers.providers.Provider, providerL2: Provider, token: Address, amount: BigNumberish, to: Address, from?: Address, gasPerPubdataByte?: BigNumberish): Promise<BigNumber>;
export declare function scaleGasLimit(gasLimit: BigNumber): BigNumber;
export declare function estimateCustomBridgeDepositL2Gas(providerL2: Provider, l1BridgeAddress: Address, l2BridgeAddress: Address, token: Address, amount: BigNumberish, to: Address, bridgeData: BytesLike, from?: Address, gasPerPubdataByte?: BigNumberish, l2Value?: BigNumberish): Promise<BigNumber>;
