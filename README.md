# memecash (CASH) — 2026.cash

memecash is an experimental on-chain flywheel on Solana:
- claim creator rewards (adapter)
- buy a “random coin of the day”
- airdrop purchased tokens to top CASH holders (snapshot-based)

Website: 2026.cash  
Ticker: CASH  
Twitter: [x.com/2026Cash](https://x.com/2026Cash)
Office Ca: uHLt9XoKqpMMSjzRkhEZUCJ2NdUU9sxNQQcj5NJCash
Status: prototype / experimental

## Repo layout
- `programs/memecash` Anchor program (constraints + event records)
- `services/keeper` automation (claim → swap → snapshot → airdrop)
- `services/api` read-only API for dashboard
- `apps/web` public dashboard
- `packages/sdk` client SDK

## Quickstart (mock mode)
```bash
pnpm -r install
cp .env.example .env
pnpm --filter @memecash/api dev
pnpm --filter @memecash/keeper dev
pnpm --filter @memecash/web dev
```

## Security
See SECURITY.md

## License
MIT
