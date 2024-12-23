# MFE nuxt x nuxt

MFE with Nuxt being the Host and Remote

## Initial setup

```
cp .env.example .env
```

## Development

```
cd remote
pnpm i
pnpm build
pnpm serve
```

```
cd host
pnpm i
pnpm dev
```

Open http://localhost:3000

## Deployment

```
cd remote
pnpm i
pnpm build
pnpm serve

cd host
pnpm i
pnpm build
pnpm serve
```

## TODO

- Build-mode works but Dev-mode not works (fixed)
- Enable CORS on remote JS assets (fixed)
- Scoped style still not works (fixed)
