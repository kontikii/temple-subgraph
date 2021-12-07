// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class JoinQueue extends ethereum.Event {
  get params(): JoinQueue__Params {
    return new JoinQueue__Params(this);
  }
}

export class JoinQueue__Params {
  _event: JoinQueue;

  constructor(event: JoinQueue) {
    this._event = event;
  }

  get exiter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Withdrawal extends ethereum.Event {
  get params(): Withdrawal__Params {
    return new Withdrawal__Params(this);
  }
}

export class Withdrawal__Params {
  _event: Withdrawal;

  constructor(event: Withdrawal) {
    this._event = event;
  }

  get exiter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ExitQueue__userDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class ExitQueue extends ethereum.SmartContract {
  static bind(address: Address): ExitQueue {
    return new ExitQueue("ExitQueue", address);
  }

  TEMPLE(): Address {
    let result = super.call("TEMPLE", "TEMPLE():(address)", []);

    return result[0].toAddress();
  }

  try_TEMPLE(): ethereum.CallResult<Address> {
    let result = super.tryCall("TEMPLE", "TEMPLE():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  currentEpoch(): BigInt {
    let result = super.call("currentEpoch", "currentEpoch():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentEpoch(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("currentEpoch", "currentEpoch():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentEpochAllocation(_exiter: Address, _epoch: BigInt): BigInt {
    let result = super.call(
      "currentEpochAllocation",
      "currentEpochAllocation(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_exiter),
        ethereum.Value.fromUnsignedBigInt(_epoch)
      ]
    );

    return result[0].toBigInt();
  }

  try_currentEpochAllocation(
    _exiter: Address,
    _epoch: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentEpochAllocation",
      "currentEpochAllocation(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_exiter),
        ethereum.Value.fromUnsignedBigInt(_epoch)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  epochSize(): BigInt {
    let result = super.call("epochSize", "epochSize():(uint256)", []);

    return result[0].toBigInt();
  }

  try_epochSize(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("epochSize", "epochSize():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  firstBlock(): BigInt {
    let result = super.call("firstBlock", "firstBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_firstBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("firstBlock", "firstBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxPerAddress(): BigInt {
    let result = super.call("maxPerAddress", "maxPerAddress():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxPerAddress(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxPerAddress",
      "maxPerAddress():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxPerEpoch(): BigInt {
    let result = super.call("maxPerEpoch", "maxPerEpoch():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxPerEpoch(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxPerEpoch", "maxPerEpoch():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextUnallocatedEpoch(): BigInt {
    let result = super.call(
      "nextUnallocatedEpoch",
      "nextUnallocatedEpoch():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_nextUnallocatedEpoch(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextUnallocatedEpoch",
      "nextUnallocatedEpoch():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalPerEpoch(param0: BigInt): BigInt {
    let result = super.call(
      "totalPerEpoch",
      "totalPerEpoch(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_totalPerEpoch(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalPerEpoch",
      "totalPerEpoch(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userData(param0: Address): ExitQueue__userDataResult {
    let result = super.call(
      "userData",
      "userData(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new ExitQueue__userDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_userData(
    param0: Address
  ): ethereum.CallResult<ExitQueue__userDataResult> {
    let result = super.tryCall(
      "userData",
      "userData(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ExitQueue__userDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _TEMPLE(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _maxPerEpoch(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _maxPerAddress(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _epochSize(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class JoinCall extends ethereum.Call {
  get inputs(): JoinCall__Inputs {
    return new JoinCall__Inputs(this);
  }

  get outputs(): JoinCall__Outputs {
    return new JoinCall__Outputs(this);
  }
}

export class JoinCall__Inputs {
  _call: JoinCall;

  constructor(call: JoinCall) {
    this._call = call;
  }

  get _exiter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class JoinCall__Outputs {
  _call: JoinCall;

  constructor(call: JoinCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetEpochSizeCall extends ethereum.Call {
  get inputs(): SetEpochSizeCall__Inputs {
    return new SetEpochSizeCall__Inputs(this);
  }

  get outputs(): SetEpochSizeCall__Outputs {
    return new SetEpochSizeCall__Outputs(this);
  }
}

export class SetEpochSizeCall__Inputs {
  _call: SetEpochSizeCall;

  constructor(call: SetEpochSizeCall) {
    this._call = call;
  }

  get _epochSize(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetEpochSizeCall__Outputs {
  _call: SetEpochSizeCall;

  constructor(call: SetEpochSizeCall) {
    this._call = call;
  }
}

export class SetMaxPerAddressCall extends ethereum.Call {
  get inputs(): SetMaxPerAddressCall__Inputs {
    return new SetMaxPerAddressCall__Inputs(this);
  }

  get outputs(): SetMaxPerAddressCall__Outputs {
    return new SetMaxPerAddressCall__Outputs(this);
  }
}

export class SetMaxPerAddressCall__Inputs {
  _call: SetMaxPerAddressCall;

  constructor(call: SetMaxPerAddressCall) {
    this._call = call;
  }

  get _maxPerAddress(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxPerAddressCall__Outputs {
  _call: SetMaxPerAddressCall;

  constructor(call: SetMaxPerAddressCall) {
    this._call = call;
  }
}

export class SetMaxPerEpochCall extends ethereum.Call {
  get inputs(): SetMaxPerEpochCall__Inputs {
    return new SetMaxPerEpochCall__Inputs(this);
  }

  get outputs(): SetMaxPerEpochCall__Outputs {
    return new SetMaxPerEpochCall__Outputs(this);
  }
}

export class SetMaxPerEpochCall__Inputs {
  _call: SetMaxPerEpochCall;

  constructor(call: SetMaxPerEpochCall) {
    this._call = call;
  }

  get _maxPerEpoch(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxPerEpochCall__Outputs {
  _call: SetMaxPerEpochCall;

  constructor(call: SetMaxPerEpochCall) {
    this._call = call;
  }
}

export class SetStartingBlockCall extends ethereum.Call {
  get inputs(): SetStartingBlockCall__Inputs {
    return new SetStartingBlockCall__Inputs(this);
  }

  get outputs(): SetStartingBlockCall__Outputs {
    return new SetStartingBlockCall__Outputs(this);
  }
}

export class SetStartingBlockCall__Inputs {
  _call: SetStartingBlockCall;

  constructor(call: SetStartingBlockCall) {
    this._call = call;
  }

  get _firstBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetStartingBlockCall__Outputs {
  _call: SetStartingBlockCall;

  constructor(call: SetStartingBlockCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get epoch(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}