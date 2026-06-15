# AGENTS.md

## Cursor Cloud specific instructions

This repo is the **Veralogix Smart Mining HUB**, a **Next.js 15 (App Router, Turbopack) + React 19 + TypeScript** web app. It is NOT the static GitHub Pages site that `README.md` describes — ignore the README's `python -m http.server` / Jekyll instructions and rely on `package.json` scripts.

### Services
There is a single service: the Next.js web app. There is no database, cache, or auth backend — all data is mock/placeholder and login is a mock role-picker (selecting a role just routes to that dashboard). Standard commands live in `package.json` `scripts`.

- Run (dev): `npm run dev` → serves on port 3000 (Turbopack). Root `/` redirects to `/login`.
- Build: `npm run build`; start prod: `npm run start`.

### Non-obvious caveats
- `next.config.ts` sets `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`, so `npm run build` succeeds even if TS/ESLint errors are (re)introduced — always run `npm run typecheck` and `npm run lint` separately, the build will not catch these.
- `npm run typecheck` (`tsc --noEmit`) is clean (0 errors).
- `npm run lint` (`next lint`) is configured via `.eslintrc.json` (`next/core-web-vitals`) and runs non-interactively; it should report no warnings or errors. `next lint` prints a deprecation notice (removed in Next 16) — harmless for now.
- AI features (natural-language query box, AI shift-handover report) use Google Genkit (`googleai/gemini-2.5-flash`) via Next server actions and require a `GEMINI_API_KEY` (also accepts `GOOGLE_API_KEY`/`GOOGLE_GENAI_API_KEY`) in a git-ignored `.env`. All non-AI dashboards work without it. Optional Genkit dev UI: `npm run genkit:dev` (port ~4000).
- The `firebase` npm dependency and `.idx/dev.nix` Firebase emulators are unused (no `firebase.json`); safe to ignore.
- Node 20 is the declared target (`.idx/dev.nix`), but the app runs fine on Node 22.
