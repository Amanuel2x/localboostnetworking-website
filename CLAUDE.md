# Web Dev Config — localboostnetworking.com

## Project Overview
Public-facing website for Local Boost Networking (LBN) + Vera product landing page.
Two main routes in one React SPA:
- `localboostnetworking.com/` → `src/pages/Home.tsx`
- `localboostnetworking.com/vera` → `src/pages/Vera.tsx`

## Tech Stack
- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- Framer Motion (animations)
- Spline (3D visuals)
- React Router v7
- shadcn UI components in `src/components/ui/`
- 21st.dev Magic MCP for UI components (available in Claude Code)

## File Structure
- `src/pages/` — page-level components (Home, Vera, PrivacyPolicy, TermsOfService)
- `src/components/ui/` — reusable shadcn + 21st.dev components
- `src/assets/` — static assets
- `public/` — images, video, logos served as-is
- `dist/` — compiled output (do not edit manually, do not commit)

## Hosting & Infrastructure
- Domain registered: Squarespace
- DNS managed: Cloudflare
- Hosting: Cloudflare Pages (free) — migrated off DreamHost
- GitHub repo: Amanuel2x/localboostnetworking-website
- Vera SaaS app: `app.vera.localboostnetworking.com` → separate Cloudflare Pages project

## Standard Workflow
1. Create a new branch for changes
   ```
   git checkout -b feature/your-change
   ```
2. Edit files in `src/`
3. Preview locally — `npm run dev` → `http://localhost:5173`
4. When ready, merge to `main`
   ```
   git checkout main && git merge feature/your-change && git push origin main
   ```
5. Cloudflare Pages auto-deploys on push to `main` only

## Branch Rules
- `main` → auto-deploys to production
- All other branches → local only, no auto-deploy
- Never push directly to `main` for experimental changes

## Adding UI Components (21st.dev)
- 21st.dev Magic MCP is configured in Claude Code
- Just describe the component you want and Claude will pull it from 21st.dev and wire it in
- Components go in `src/components/ui/`
- No manual copy-paste needed

## Do Not
- Edit files in `dist/` directly
- Commit `node_modules` or `dist/`
- Push directly to `main` without testing locally first
- Use `npx wrangler deploy` — Cloudflare Pages handles deployment automatically
