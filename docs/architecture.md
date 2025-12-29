# Architecture (Draft)

## Daily flow
1) claim creator rewards (adapter)
2) choose daily random mint (deterministic seed)
3) swap treasury into mint
4) snapshot top 50 CASH holders
5) airdrop purchased tokens pro-rata

## Components
- Anchor program: constraints + daily event records
- Keeper: automation + adapters
- API: read-only aggregation for UI
- Web: dashboard
