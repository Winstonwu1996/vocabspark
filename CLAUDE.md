# VocabSpark / Know U. Learning — Project CLAUDE.md

## Task Planning Rules

- **MVP first**: break tasks into the simplest path that works. Ship, then refine. Do NOT over-engineer.
- When planning multi-step work, default to 3-5 concrete sub-tasks. If you produce 8+ steps, you're probably over-designing — simplify.
- Each sub-task should be completable in 2-10 minutes. If it's longer, split it.

## Project Context

- **Framework**: Next.js 14.2 Pages Router (NOT App Router). Edge + Node mixed runtime.
- **Database**: Supabase (Postgres 17). Auth via OTP email (Resend SMTP).
- **Cache**: Upstash Redis REST (no SDK, pure fetch for Edge compat).
- **AI providers**: DeepSeek (primary, multi-key rotation) + Google Gemini (fallback).
- **Hosting**: Vercel auto-deploy on `main` push. Domain: `knowulearning.com`.
- **Modules**: `vocab` (word learning) + `history` (story-first pedagogy with storyboards).

## Coding Conventions

- Plain JavaScript (no TypeScript). ES modules in lib/, CommonJS-compatible API routes.
- Variable naming: camelCase. File naming: kebab-case for lib/, camelCase for components.
- Minimal comments — code should be self-explanatory. Comment only for "why", never "what".
- Error handling: fail-open for non-critical paths (rate limit, cache), fail-closed for auth/payment.
- No unused imports. No `console.log` in committed code (use Sentry for errors).

## Available Utilities (lib/)

Use ONLY these existing modules. Do NOT invent helper functions that don't exist.

### Core Infrastructure
- `lib/supabase.js` — Supabase client (browser + server)
- `lib/auth-server.js` — Server-side auth verification
- `lib/ratelimit.js` — Upstash sliding window rate limiter
- `lib/email.js` — Resend email sending
- `lib/stripe-prices.js` — Stripe price IDs and plan mapping
- `lib/llm-providers.js` — DeepSeek/Gemini multi-key rotation + per-instance circuit breaker
- `lib/teachCache.js` — Upstash Redis cache for teach content (30d TTL, prefix `tc:`)
- `lib/analytics.js` — Event tracking

### Vocab Module
- `lib/api.js` — API client helpers
- `lib/learnStatus.js` — Word learning status logic
- `lib/learningTimer.js` — Session timing
- `lib/onboarding-state.js` — Onboarding flow state
- `lib/progressMergePolicy.js` — Progress merge strategy (field-level)
- `lib/syncMerge.js` — Client-server sync merge logic
- `lib/guessSanitize.js` — Input sanitization for word guessing
- `lib/preset-us-life-1000.js` — Preset word list
- `lib/curriculum-data.js` — Curriculum structure
- `lib/theme.js` — UI theme tokens

### History Module
- `lib/history-runtime.js` — Storyboard step execution engine
- `lib/history-topics.js` — Topic registry and metadata
- `lib/history-prompts.js` — AI prompt templates for sidekick/teach
- `lib/history-storage.js` — History progress persistence
- `lib/history-glossary.js` — Term glossary rendering
- `lib/history-grade-map.js` — Grade-to-topic mapping
- `lib/history-translate.js` — Chinese bridge translation
- `lib/china-dynasty-map.js` — Dynasty timeline data
- `lib/causal-cache.js` — Causal chain caching
- `lib/wikidata.js` — Wikidata entity lookup

### Atlas (Topic Map Visualization)
- `lib/atlas-projection.js` — Map projection math
- `lib/atlas-renderer.js` — Canvas/SVG rendering
- `lib/atlas-templating.js` — Template system
- `lib/atlas-views.js` — View configurations

### Parent Features
- `lib/parent-email-aggregator.js` — Weekly report data aggregation
- `lib/parent-email-templates.js` — Email HTML templates

## Key Architecture Decisions

- **Three-layer sync defense**: L1 field guards (server) + L2 history snapshots + L3 client intent markers. See `docs/INFRA.md` section 10.
- **Soft auth**: `X-User-Id` header for rate limiting, not strict token verify. Strict verify only for payments/account changes.
- **Storyboard-driven pedagogy**: History lessons are JSON storyboard files in `data/history/`, NOT free-form AI conversations. AI sidekick operates within structured steps.

## Reference Docs

- `docs/OPS.md` — Operations runbook (service accounts, DNS, deployment)
- `docs/INFRA.md` — Full infrastructure reference (patterns, integrations, gotchas)
- `docs/HANDOFF.md` — Module handoff context
