# Architecture

## Overview

```mermaid
flowchart TD
  A[Pump creator rewards] -->|claim (adapter)| B[Treasury]
  B -->|daily cap| C[Swap (aggregator adapter)]
  C --> D[Random mint of day]
  B -->|snapshot| E[Top 50 CASH holders]
  D -->|airdrop pro-rata| E
  F[On-chain program] <-->|record event| G[Keeper]
  G -->|reads| H[API]
  H -->|renders| I[Web dashboard]
```

## Components

### On-chain program (Anchor)
- Records daily events (day, mint, spent, received, airdrop tx)
- Enforces keeper/admin roles
- Enforces max daily spend cap

### Keeper (automation)
- claims rewards (adapter)
- chooses daily mint (deterministic seed)
- swaps SOL → mint (aggregator adapter)
- snapshots top holders
- executes airdrop transfers
- writes event record to chain

### API + Web
- API is read-only aggregation for UI
- Web displays daily events, totals, and tx links
