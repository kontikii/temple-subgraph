# TempleDAO subgraph

Currently fetching of on-chain data related to temple is fetched from the brilliant [dune analytics dashboard](https://dune.xyz/ethpanda/TempleDAO) made by @ethpanda. This has some limitations, for example no api is yet available. Let's index those in a subgraph instead.

## List of things to index/keep in mind:

*contract abi:s to include in subgraph.yml*
- TempleStaking, TempleTreasury, OGTemple, TempleERC20Token, LockedOGTemple, Exitque, ITreasuryAllocation

*entities we'll need in schema.graphql*
- Templer, Sacrifice, Stake, Unstake (queue?), mechanics (defend, offence harvest) 

*on mappings*
We might not need all the logic that's found in the /utils directory of the ohm subgraph. Not as much logic around bonding & price calculations is needed.

> A templeDAO members' initiative.

