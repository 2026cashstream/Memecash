# 2026CashSteam (CASH) — 2026.cash

[Website](https://2026.cash) · [Twitter / X](https://x.com/2026Cash) · **Ticker:** CASH · **Office CA:** `Az33Sc9XY1JZUri4AEtBdKgX8YYareNoNSGmNNnCash`

> **Status:** Prototype / experimental.  
> This repository is a public engineering scaffold for a Solana meme flywheel. Nothing here is financial advice.

![CI](https://github.com/2026cashstream/Memecash/actions/workflows/ci.yml/badge.svg)
![CodeQL](https://github.com/2026cashstream/Memecash/actions/workflows/codeql.yml/badge.svg)

---

## What is memecash?

memecash is an experimental on-chain flywheel on Solana:

1. **Claim** creator rewards (adapter)
2. **Buy** a “random coin of the day”
3. **Airdrop** purchased tokens to the **top 50 CASH holders** (snapshot-based, pro-rata)

Goal: turn creator rewards into transparent, repeatable daily distribution events.

---

## Quick links

- Dashboard (local): `apps/web` (Next.js)
- Automation / Keeper: `services/keeper`
- Read API: `services/api`
- SDK: `packages/sdk`
- Docs: `docs/` (architecture, threat model, ops)

---

## Local dev (mock mode)

### Requirements
- Node.js 20+
- pnpm 9+

### Install

```bash
pnpm -r install
cp .env.example .env
```

### Run API + Keeper

```bash
pnpm --filter @memecash/api dev
pnpm --filter @memecash/keeper dev
```

### Run Web

```bash
pnpm --filter @memecash/web dev
```

### Environment

- `API_PORT` (default `8787`)
- `NEXT_PUBLIC_API_BASE` (default `http://localhost:8787`)

---

## How it works (high level)

### Keeper daily loop (prototype)

- reads claimable rewards (adapter)
- applies a daily spend cap
- selects a deterministic “random mint of the day” (seeded by date)
- swaps treasury → selected mint (adapter)
- snapshots top holders of CASH
- distributes purchased tokens to top 50 holders

### On-chain program (planned)

- enforce roles (admin / keeper)
- enforce daily spend cap
- record daily event data for public audit

---

## Transparency & safety rails

- Prototype first: adapters are stubbed / mocked initially.
- Spend cap (config): limits how much is used per day.
- Public logs: daily events are designed to be observable and reproducible.

See:
- `SECURITY.md`
- `docs/threat-model.md`
- `docs/architecture.md`
- `docs/ops.md`

---

## Contributing

PRs welcome. See `CONTRIBUTING.md`.

---

## License

MIT
