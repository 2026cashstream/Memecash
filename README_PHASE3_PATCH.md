# README patch notes (Phase 3)

Add to README.md near top:
- Dashboard: `apps/web`
- SDK: `packages/sdk`

Add a "Local dev" section:

```bash
pnpm -r install
pnpm --filter @memecash/api dev
pnpm --filter @memecash/keeper dev
pnpm --filter @memecash/web dev
```

Mention env:
- `NEXT_PUBLIC_API_BASE` for the web app (defaults to http://localhost:8787)
