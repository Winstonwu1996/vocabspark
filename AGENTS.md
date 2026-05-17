# VocabSpark — AGENTS.md

> 项目级 canonical 启动手册. 任何 AI 编程工具 (Claude Code / Codex CLI / Cursor) 进入这个 repo 时第一个该读的文件.

## Project Overview

VocabSpark 是 William 的 SaaS 学习产品 (knowulearning.com 旗下). **生产中** (Stripe Live, 真用户付费). 同仓库两个子模块:

- **vocab** — 英语单词背诵 + 智能复习 (主产品)
- **history** — U.S. History 学习 (子产品, 共享基础设施)

用户: 个人学习者 (家长 + 学生, 含海外华人家庭). 不是 to-B.

## Tech Stack (pin 版本, 不可乱升)

```
Next.js 14 (Pages Router)         — 不升 App Router
React 18 / Node 20+
Supabase Postgres + Auth          (id: pzadkflzktvppwkezwxu)
Vercel                            (project: vocabspark)
Stripe LIVE mode                  (8 个 Price IDs)
Sentry v8                         — 不升 v10 (Pages Router + SSG 不兼容)
Resend                            (sender: noreply@knowulearning.com)
DeepSeek (主, 多 key) + Google AI Gemini (fallback)
Upstash Redis REST                (logical-anteater-107597)
d3-geo / topojson-client / xlsx   (history 模块)
```

## Boundaries (3 层)

### Must (必须保持)
- **API 兼容**: `/api/sync` / `/api/chat-stream` / `/api/auth/*` 响应 schema 不可破坏
- **vocab + history 同仓库**, 不拆分
- **Edge Runtime SSE**: `/api/chat-stream` 必须 Edge (Node Runtime 会 buffer)
- **3 层同步防御**: L1 字段守卫 + L2 `user_progress_history` 快照 + L3 客户端 intent (见 docs/INFRA.md §10.1)
- **Sentry 锁 v8**, Pages Router 不切 App Router
- **不要用** `AbortSignal.timeout()` 切 SSE 流

### Ask First (问 William 才动)
- Supabase schema / migration
- 加 npm 依赖
- Stripe 配置 / Price ID / webhook
- 定价 / marketing 文案
- `next.config.js` / `tsconfig.json` / `pages/api/auth/*`
- Next.js / React / Supabase SDK 主版本升级
- Sentry / Vercel / Cloudflare 平台配置

### Never (绝对不动)
- 提交 secrets (`.env.local` / `.env.production.local` / 任何 key)
- 改 `vendor/` / `node_modules/`
- 直接 push main (必须 PR + Vercel preview 通过)
- 删 / 改 `user_progress_history` 表
- `npm publish`
- 改 Stripe Live 已生效的 Subscription

## Commands

```bash
# Dev
pnpm dev                  # 标准
npm run dev:fresh         # 删 .next 重启
npm run dev:lan           # 局域网 (手机调试)
npm run dev:nuclear       # 杀进程+清缓存+重启 (最后手段)

# Build
pnpm build                # 生产构建
pnpm preview              # 本地预览

# History 模块验证
npm run validate:atlas / validate:narratives
npm run test:atlas / test:narrative-batch / test:willow
npm run kb:fact-check / kb:fact-check:all
```

## Pointers (深背景在这些文件)

| 内容 | 路径 |
|------|------|
| 项目状态 (上次到哪了) | `~/ObsidianVault/10-Projects/VocabSpark/STATE.md` (v12.2 Day 2 stub, 待充实) |
| Session 交接棒 | `~/ObsidianVault/10-Projects/VocabSpark/CONTINUITY.md` (v12.2 Day 2 stub) |
| 已知坑 (#1-#8 直接相关) | `~/ObsidianVault/20-Knowledge/wiki/concepts/known-gotchas.md` |
| 失败账本 | `~/ObsidianVault/20-Knowledge/wiki/failures/` |
| 运维 | `docs/OPS.md` |
| 架构 + 可复用模式 | `docs/INFRA.md` §10 |
| History 模块设计 | `docs/HANDOFF_HISTORY_MODULE.md` + `docs/HISTORY_MERGE_STRATEGY.md` |
| 共享记忆查询 | `python3 ~/.openclaw/workspace/scripts/l2-search.py "query"` |
| 机器能力清单 | `~/ObsidianVault/00-Winston/MACHINE_CAPABILITIES.md` |

**重要**: 不要猜. 不确定就 l2-search.py 查 Vault, 或读上面的 docs.

**STATE.md / CONTINUITY.md fallback**: 文件可能是 stub (v12.2 Day 2 起步). 真实状态优先看 `docs/HANDOFF.md` + 最近 git log + `~/ObsidianVault/00-Winston/MEMORY.md`.

## Reminders

- 改完跑相关 `validate:*` / `test:*` 脚本, 没专门 test 时至少 `pnpm build`
- 失败入账本: `~/ObsidianVault/20-Knowledge/wiki/failures/YYYY-MM-DD-slug.md`
- 新坑入 `known-gotchas.md` (普适) 或 `wiki-suggestions/` (项目内)
- **不可逆动作** (deploy / migration / Stripe Live / 客户邮件 / incident) → 走严肃模式 (`workon task new <id>`), **不直接 vibe**
- 简单 bug fix / UI 调整 / 文案改动 → 直接 vibe coding, 不需要 Task Pack

## Decision Log (★ v12.2 Day 6 Observation Quick Win 1 — 硬约束)

> **AI 重要决定后必须主动写 Decision Log**, 否则 William 看不见, 等于讨论白费.
> William 不需要记路径, AI 负责写.

**什么算"重要决定"** (任何一个就写):
- 选了某方案 (vs 另一方案)
- 拍板要做 X / 推迟 Y / 不做 Z
- 改设计 / 改架构 / 改 schema
- 关键 trade-off (例: 性能 vs 简洁选了简洁)
- 关键失败教训 (例: 试了 X 不 work)
- 跨多次对话的关键节点 (例: "今天讨论完, 下一步明确了")

**写到哪**:
- `~/ObsidianVault/10-Projects/VocabSpark/STATE.md` 的 `## last_5_decisions` section
- 如有 `~/AI-OS/DECISIONS.md` (全局聚合) 也同步写 — 检查文件是否存在再写, 不存在就跳过

**格式** (严格一行一条, parser 简单):
```
- YYYY-MM-DD HH:MM — 决定 X (一句话 context, 可选触发原因)
```

**例**:
```
- 2026-05-16 22:00 — 决定 v13 优先做人类操作层, 不是再扩 Steward
- 2026-05-16 16:33 — 决定 P8.1 强化版人话默认硬规则生效
```

**session 结束时**: 在 RESULT.md 或最后一条回复里, 加一段 "**本次新增决定**" 列出本次会话写过的决定 (即使 0 条也要明示), 让 William 一眼看到。

**Dashboard 自动聚合**: System Center "📜 最近决定" 区域从所有 STATE.md 聚合显示, 不需要你做额外动作, 只要按上面格式写。

## 协议层

本文件是 **vendor-neutral 启动契约** (agents.md spec). 工具特有的额外指令在 shim 文件 (`.claude/CLAUDE.md` / `.codex/AGENTS.md` / `.cursor/rules`), 都引用本文件作 source of truth. **冲突以本文件为准**.

---

*v12.2-mvp Day 2 落地 · 2026-05-16 · v12.2 Day 6 Observation Quick Win 1 (Decision Log) 强约束已加*
