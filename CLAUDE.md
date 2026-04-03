# Web Dev Config — localboostnetworking.com

## Project Overview
Public-facing website for Local Boost Networking (LBN) + Vera product landing page.
Two main routes in one React SPA:
- `localboostnetworking.com/` → `src/pages/Home.tsx`
- `localboostnetworking.com/vera` → `src/pages/Vera.tsx`

## Tech Stack
- React 19 + TypeScript
- Vite (build tool) — `npm run dev` to preview, `npm run build` to compile
- Tailwind CSS v4
- Framer Motion (animations)
- Spline (3D visuals)
- React Router v7
- shadcn UI components in `src/components/ui/`

## File Structure
- `src/pages/` — page-level components (Home, Vera, PrivacyPolicy, TermsOfService)
- `src/components/` — reusable components, shadcn UI in `ui/` subfolder
- `src/assets/` — static assets
- `public/` — images, video, logos served as-is
- `dist/` — compiled output (what gets deployed to server)

## Hosting & Deployment
- Domain registered: Squarespace
- DNS managed: Cloudflare
- Current host: DreamHost (being migrated off)
- Target host: Cloudflare Pages (free)
- Vera SaaS app: `app.vera.localboostnetworking.com` already on Cloudflare Pages

## Workflow
1. Edit files in `src/`
2. `npm run dev` to preview locally
3. `npm run build` to compile to `dist/`
4. Upload `dist/` to server (or auto-deploy via Cloudflare Pages)

## Goals
- Migrate hosting from DreamHost to Cloudflare Pages
- Add/swap components easily using 21st.dev components
- Keep both Home and Vera pages easy to edit
