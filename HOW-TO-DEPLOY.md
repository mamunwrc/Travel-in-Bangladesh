# Travel in Bangladesh — How to run and deploy

This website is built with React (JavaScript/JSX) using Vite + TanStack Start.

## Run it on your own computer

1. Install Node.js 20+ from https://nodejs.org
2. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open http://localhost:3000 in your browser.

## Build it for a real server

```bash
npm install
npm run build
```

The production files are created in the `dist/` (or `.output/`) folder.

## Deploy options (no domain needed)

- **Easiest (free):** upload this folder to https://app.netlify.com/drop or
  run `npx vercel` — they give you a free public link instantly.
- **Your own server/VPS:** run `npm run build`, then serve the output with
  any Node server or static host. You do not need to configure an IP or
  port 80 yourself — the hosting service handles that and gives you a URL.
- **Lovable (recommended):** just click Publish in the Lovable editor and
  your site goes live on a free lovable.app address.

## Adding your own domain later

Buy a domain (e.g. from Namecheap/GoDaddy), then connect it in your hosting
provider's settings (Netlify/Vercel/Lovable all have a "Domains" section).
