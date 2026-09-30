# robertfish.dev

Personal site for Robert Fish, Full Stack Engineer in Brisbane.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Check

```bash
npm run lint
npm run build
```

`lint` runs ESLint and `scripts/check-copy.mjs`, which rejects titles and claims this site does not publish.

## Deploy

The app is a Next.js App Router project. Vercel builds it with `next build` and no environment variables.
