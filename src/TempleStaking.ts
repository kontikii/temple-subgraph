import { Address } from '@graphprotocol/graph-ts'
import { Stake, Unstake } from '../generated/schema'

import {  StakeCall, UnstakeCall  } from '../generated/TempleStaking/TempleStaking'
import { toDecimal } from "./utils/Decimals"
import { loadOrCreateTemplar, updateTemplarBalance } from "./utils/Templar"
import { loadOrCreateTransaction } from "./utils/Transactions"
import { updateProtocolMetrics } from './utils/ProtocolMetrics'

export function handleStake(call: StakeCall): void {
    let templar = loadOrCreateTemplar(call.from as Address)
    let transaction = loadOrCreateTransaction(call.transaction, call.block)
    let value = toDecimal(call.inputs._amountTemple, 18)

    let stake = new Stake(transaction.id)
    stake.transaction = transaction.id
    stake.templar = templar.id
    stake.amount = value
    stake.timestamp = transaction.timestamp;
    stake.save()

    updateTemplarBalance(templar, transaction)
    updateProtocolMetrics(transaction)
}

export function handleUnstake(call: UnstakeCall): void {
    let templar = loadOrCreateTemplar(call.from as Address)
    let transaction = loadOrCreateTransaction(call.transaction, call.block)
    let value = toDecimal(call.inputs._amountOgTemple, 18)

    let unstake = new Unstake(transaction.id)
    unstake.transaction = transaction.id
    unstake.templar = templar.id
    unstake.amount = value
    unstake.timestamp = transaction.timestamp;
    unstake.save()

    updateTemplarBalance(templar, transaction)
    updateProtocolMetrics(transaction)
}
