# ADR 0001: Flywheel automation runs off-chain (keeper)

Date: 2025-12-29  
Status: Accepted (prototype)

## Context
memecash needs a daily flow:
- claim creator rewards (adapter)
- pick a random mint of the day
- swap treasury into that mint
- snapshot top 50 CASH holders
- airdrop purchased tokens pro-rata

Some steps (claiming, swapping, snapshotting) are operational and integrate with external systems.

## Decision
We run the daily flow in an off-chain keeper service:
- On-chain program records daily events + enforces caps/roles.
- Keeper performs integrations, then writes event results on-chain.

## Consequences
Pros:
- Faster iteration on adapters (pump, swap, snapshot)
- Lower on-chain complexity and compute cost
- Easier to add monitoring and rate-limits

Cons:
- Keeper key becomes a privileged asset (requires hardening, cap limits, observability)
