# CS Churn Risk (Next.js + Supabase)

Portfolio demo that scores churn risk from CSVs and suggests next best actions.

## Features
- Next.js 14 (App Router), Tailwind UI
- Supabase Auth (GitHub OAuth)
- Protected dashboard for CSV upload & scoring
- Tunable risk weights, charts, export
- Case study page for recruiters

## Quickstart
1. Create a Supabase project and enable GitHub OAuth
2. Copy `.env.example` -> `.env.local` and fill keys
3. `npm i && npm run dev` -> open http://localhost:3000

## Deploy
- Push to GitHub, import to Vercel, add env vars (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`), deploy.
- In Supabase: set Site URL to your deployed domain; add OAuth callback `/auth/callback`.

## License
MIT