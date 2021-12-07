import { Address, BigDecimal, BigInt, log } from '@graphprotocol/graph-ts'
import { Templar, Transaction } from '../../generated/schema'

import { loadOrCreateTemplarBalance } from './TemplarBalances'
import { LockedOGTemple } from '../../generated/TempleStaking/LockedOGTemple'
import { TempleStaking } from '../../generated/TempleStaking/TempleStaking'

import { LOCKED_OG_CONTRACT, TEMPLE_STAKING_CONTRACT, OG_TEMPLE_CONTRACT } from '../utils/Constants'

import { loadOrCreateContractInfo } from './ContractInfo'
import { toDecimal } from './Decimals'
import { getOHMUSDRate } from './Price'
import { getHolderAux } from './Extra'


export function loadOrCreateTemplar(addres: Address): Templar{
    let templar = Templar.load(addres.toHex())
    if (templar == null) {
        let holders = getHolderAux()
        holders.value = holders.value.plus(BigInt.fromI32(1))
        holders.save()

        templar = new Templar(addres.toHex())
        templar.active = true
        templar.save()
    }
    return templar as Templar
}


export function updateTemplarBalance(templar: Templar, transaction: Transaction): void{

    let balance = loadOrCreateTemplarBalance(templar, transaction.timestamp)

    let lockedOgContract = LockedOGTemple.bind(Address.fromString(LOCKED_OG_CONTRACT))
    let templarAddr = Address.fromString(templar.id)
    let ogTemple = BigInt.fromI32(0)
    let numLocks = lockedOgContract.numLocks(templarAddr).toI32()

    for (let i = 0; i < numLocks; i++) {
        let lockedOgTemple = lockedOgContract.locked(templarAddr, BigInt.fromI32(i))
        ogTemple.plus(lockedOgTemple.value0)
    }

    let templeStakingContract = TempleStaking.bind(Address.fromString(TEMPLE_STAKING_CONTRACT))
    let stakedTemple = templeStakingContract.balance(ogTemple)

    balance.templeBalance = toDecimal(stakedTemple, 18)
    let ogTempleBalance = toDecimal(ogTemple, 18)
    balance.ogTempleBalance = ogTempleBalance

    let stakes = balance.stakes

    let cinfoOgTempleBalance_v1 = loadOrCreateContractInfo(templar.id + transaction.timestamp.toString() + "OGTemple")
    cinfoOgTempleBalance_v1.name = "OG_TEMPLE"
    cinfoOgTempleBalance_v1.contract = OG_TEMPLE_CONTRACT
    cinfoOgTempleBalance_v1.amount = ogTempleBalance
    cinfoOgTempleBalance_v1.save()
    stakes.push(cinfoOgTempleBalance_v1.id)

    balance.stakes = stakes

    //Price
    //let usdRate = getOHMUSDRate()
    //balance.dollarBalance = balance.ohmBalance.times(usdRate).plus(balance.sohmBalance.times(usdRate)).plus(balance.bondBalance.times(usdRate))
    balance.save()

    templar.lastBalance = balance.id;
    templar.save()
}
