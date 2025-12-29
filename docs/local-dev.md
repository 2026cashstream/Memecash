# Local development

## Install
```bash
pnpm -r install
```

## Run API + Keeper
```bash
pnpm --filter @memecash/api dev
pnpm --filter @memecash/keeper dev
```

## Run Web
```bash
pnpm --filter @memecash/web dev
```

Environment:
- API_PORT (default 8787)
- NEXT_PUBLIC_API_BASE (default http://localhost:8787)
