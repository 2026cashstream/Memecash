# Threat Model (Draft)

## Assets
- Treasury funds
- Keeper authority
- Snapshot correctness (top holder list)

## Threats
- Keeper key compromise
- Bad swap routing / malicious venues
- Snapshot manipulation (indexer bugs, RPC inconsistencies)
- Randomness manipulation (if seed is not fixed / verifiable)

## Mitigations (planned)
- On-chain spend caps
- Allowlisted venues / slippage limits
- Deterministic daily seed
- Transparent event logs + reproducible snapshots
