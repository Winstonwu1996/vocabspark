# VocabSpark / Knowly Handoff

_Last updated: 2026-03-24 (America/Los_Angeles)_

## 1) Project location & repo

- **Local path:** `~/projects/vocabspark` (Next.js Pages Router)
- **Remote repo:** `https://github.com/Winstonwu1996/vocabspark` (`main`)
- **Deploy target:** Vercel (scope typically `winstonwu1996s-projects`)

## 2) Where to inspect change history

```bash
cd ~/projects/vocabspark
git log --oneline -30
git show <commit>
git log -1 --name-only
git diff <old>..<new> --stat
```

Cursor transcript path (if needed):

`~/.cursor/projects/Users-williamai-openclaw-workspace/agent-transcripts/`

Suggested search keywords: `vocabspark`, `Supabase`, `PROFILE_MAX`.

## 3) Core code map

- `pages/index.js`: Main UI + most business logic (learning flow, auth UI, limit modal, share, profile, photo upload, styles `S`, colors `C`)
- `pages/api/chat.js`: AI chat proxy (DeepSeek primary + Gemini fallback)
- `pages/api/tts.js`: Server-side TTS proxy
- `pages/api/describe-photo.js`: Gemini vision photo description
- `lib/supabase.js`: Supabase client
- `styles/globals.css`: Global styles
- `pages/_app.js`: App shell + `@vercel/analytics/react`

## 4) Environment variables & secret policy

**Do not commit keys into repo.**

### App runtime keys (verified)
The following keys are present and non-empty for runtime:

- `DEEPSEEK_API_KEY`
- `GOOGLE_AI_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### GitHub / Vercel auth (verified)
Current machine check result:

- `GITHUB_TOKEN`: available (non-empty)
- `VERCEL_TOKEN`: available (non-empty)

Not currently detected (optional aliases / IDs):

- `GH_TOKEN`
- `GITHUB_PAT`
- `VERCEL_PROJECT_ID`
- `VERCEL_ORG_ID`
- `VERCEL_SCOPE`

Notes:
- `GITHUB_TOKEN` / `VERCEL_TOKEN` are **not** in `vocabspark/.env.local`; they are currently available via system-level environment.
- Keep using variable names only in docs/chat; never paste secret values.

## 5) Product logic already landed

- Guest daily cap: 10 words (`localStorage` + `DAILY_LIMIT`)
- Registration/login: Supabase Magic Link; progress sync to cloud
- Student profile:
  - `PROFILE_MAX = 1000`
  - frontend count + save-disable guard
  - truncate in `buildSys`
  - logged-in photo upload cap `PHOTO_LIMIT = 5`
- Header UI: `BrandSparkIcon` + `AppHeroHeader` with stats capsules

## 6) Conventions

- User-facing copy: Simplified Chinese first
- Public-facing product name currently mostly **VocabSpark**
- Keep edits scoped; `pages/index.js` is large, split components only when needed and keep style/state conventions consistent

## 7) Recommended workflow

1. `git pull`
2. inspect latest commits
3. search related state before editing (`showLimitModal`, `AppHeroHeader`, `PHOTO_LIMIT`, etc.)
4. if API behavior changes, verify both `pages/api/*` and frontend `fetch` path
5. pre-release local check: `npm run build`
6. merge to `main` and deploy via Vercel auto deploy or CLI

## 8) Deferred items

- Stripe payment + server-side hard limit validation: **planned, not implemented yet**

## 9) Security operating rule

- Secrets are callable from env when needed
- Do not store secret plaintext in memory files, docs, chat logs, or commits
- Report only presence/non-empty status for verification
