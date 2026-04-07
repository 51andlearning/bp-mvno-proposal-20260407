# Deployment

## Overview

The site is deployed to **Vercel** directly from a GitHub repository. Vercel auto-deploys on every push to `main`.

---

## 1. GitHub Repository Setup

```bash
# From inside the bp-mvno-proposal directory:
git init
git add .
git commit -m "Initial build: bp-mvno-proposal proposal site"
gh repo create bp-mvno-proposal --public --source=. --remote=origin --push
```

Or manually:
1. Create repo at github.com/new
2. `git remote add origin https://github.com/<org>/bp-mvno-proposal.git`
3. `git push -u origin main`

---

## 2. Vercel Project Setup

1. Go to vercel.com → Add New Project
2. Import the GitHub repo `bp-mvno-proposal`
3. Configure:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `.` (project root) |
| Build Command | `pnpm build` |
| Install Command | `pnpm install` |
| Output Directory | *(leave blank — Next.js default)* |

4. Click Deploy

---

## 3. Root Directory Rules

- The repo root **is** the Next.js project root.
- Do **not** set root directory to a subdirectory.
- Do **not** create a `vercel.json` unless custom headers/redirects are needed.

---

## 4. Environment Variables

Currently no environment variables are required.

If analytics is added:

| Variable | Example | Where to Add |
|----------|---------|--------------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Vercel dashboard → Settings → Environment Variables |

Never commit `.env.local` to the repository.

---

## 5. Redeploying

Vercel redeploys automatically on every push to `main`.

To force a manual redeploy:
```bash
# Via Vercel CLI
npx vercel --prod
```

Or trigger from the Vercel dashboard → Deployments → Redeploy.

---

## 6. Preview Deployments

Every pull request or branch push creates an isolated preview URL automatically. Share preview URLs for review before merging to `main`.

---

## 7. Custom Domain (Optional)

To add a custom domain:
1. Vercel dashboard → Project → Settings → Domains
2. Add domain and follow DNS configuration instructions
3. Vercel provisions SSL automatically
