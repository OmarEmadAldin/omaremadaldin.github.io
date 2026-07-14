# Deployment Guide

Two good free options. Pick one — GitHub Pages if you want everything in your GitHub
ecosystem, Vercel if you want zero-config auto-deploys and a slightly nicer default URL.

---

## Option A: GitHub Pages (auto-deploy via GitHub Actions)

This repo already includes `.github/workflows/deploy.yml`, which rebuilds and deploys
the site automatically every time you push to `main`.

1. Create a new repo on GitHub, e.g. `portfolio` (or `omaremadaldin.github.io` if you
   want it at the root of your GitHub domain — see note below).
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/OmarEmadAldin/portfolio.git
   git push -u origin main
   ```
3. In the GitHub repo: **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**. That's it — the workflow handles the rest.
4. After the Action finishes (check the **Actions** tab), your site is live at:
   - `https://omaremadaldin.github.io/portfolio/` (project repo), or
   - `https://omaremadaldin.github.io/` (if the repo is literally named
     `omaremadaldin.github.io` — GitHub treats that repo name as your root site)

**Note on `vite.config.js`:** it's currently set with `base: './'`, which works for
both a root site and a project subpath (e.g. `/portfolio/`) without changes needed.

**Manual alternative** (no GitHub Actions) — from your machine:
```bash
npm run deploy
```
This uses the `gh-pages` package (already in `devDependencies`) to push the built
`dist/` folder straight to a `gh-pages` branch. Enable Pages on that branch under
**Settings → Pages → Source → Deploy from a branch → gh-pages**.

---

## Option B: Vercel (recommended if you want the simplest flow)

1. Push this project to a GitHub repo (same `git init`/`push` steps as above).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New →
   Project**, and import the repo.
3. Vercel auto-detects Vite. Leave defaults (Build command: `vite build`, Output
   directory: `dist`) and click **Deploy**.
4. You get a live URL immediately (`portfolio-xyz.vercel.app`). Every future push to
   `main` redeploys automatically — no extra config needed.

---

## Custom domain (optional, but recommended for a resume)

A domain like `omarfahmy.dev` (~$10-15/yr from Namecheap, Google Domains, etc.) looks
more professional than a `.vercel.app` or `.github.io` URL.

- **Vercel:** Project → Settings → Domains → add your domain → follow the DNS
  instructions it gives you (usually one CNAME record).
- **GitHub Pages:** Settings → Pages → Custom domain → enter your domain → add the DNS
  records GitHub shows you → also commit a `CNAME` file with your domain name into the
  `public/` folder so it survives rebuilds.

## After deploying

- Add the live URL to: your resume header, LinkedIn headline/Featured section, GitHub
  profile README, email signature.
- Update `resumeUrl` in `src/data/content.js` once you have a hosted PDF link, so the
  "Resume" button (if you add one) works.
