import { BigDecimal, BigInt, Address} from '@graphprotocol/graph-ts'
import { Templar, TemplarBalance } from '../../generated/schema'
import { dayFromTimestamp } from './Dates';

export function loadOrCreateTemplarBalance(templar: Templar, timestamp: BigInt): TemplarBalance{
    let id = timestamp.toString()+templar.id

    let templarBalance = TemplarBalance.load(id)
    if (templarBalance == null) {
        templarBalance = new TemplarBalance(id)
        templarBalance.templar = templar.id
        templarBalance.timestamp = timestamp
        templarBalance.templeBalance = BigDecimal.fromString("0")
        templarBalance.ogTempleBalance = BigDecimal.fromString("0")
        templarBalance.bondBalance = BigDecimal.fromString("0")
        templarBalance.dollarBalance = BigDecimal.fromString("0")
        templarBalance.stakes = []
        templarBalance.bonds = []
        templarBalance.save()
    }
    return templarBalance as TemplarBalance
}
