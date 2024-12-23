# vite-nuxt-mfe

Vite-based Nuxt 3 starter with Micro-frontend enabled.

## Demo

- Demo Web: https://demo-ab-nuxt-mfe-host.netlify.app/
- Repo Host: https://github.com/antonybudianto/demo-nuxt-mfe1
- Repo Remote: https://github.com/antonybudianto/demo-nuxt-mfe-rmt1

## How to use

- It's recommended to split the repository for Host and Remote, and deploy separately
- If you want to go with monorepo approach, make sure to setup a monorepo package manager (Pnpm workspace, Nx, etc.)
- This repo is still evolving, and might not be production-ready yet 

## Initial setup

```
cd host
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

## Links

- https://github.com/originjs/vite-plugin-federation/
