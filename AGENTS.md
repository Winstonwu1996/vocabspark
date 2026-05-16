# VocabSpark — AGENTS.md

> 项目级 canonical 启动手册. 任何 AI 编程工具 (Claude Code / Codex CLI / Cursor / Continue / Aider) 进入这个 repo 时**第一个该读的文件**.
> 业界事实标准: [agents.md](https://agents.md/) (OpenAI / Cursor / Sourcegraph / Factory 等共同背书, 20K+ repos).
> v12.2-mvp v3 Day 2 落地 (2026-05-16).

---

## 项目是什么 / Project Overview

VocabSpark 是 William 的 SaaS 学习产品 (knowulearning.com 旗下), 同一仓库内**两个子模块共存**:
- **vocab** — 英语单词背诵 + 智能复习 (主产品)
- **history** — U.S. History 学习 (子产品, 共享 Vercel / Supabase / Stripe 基础设施)

**用户**: 个人学习者 (家长 + 学生), 含部分海外华人家庭. 不是 to-B / to-team.

**状态**: 活跃生产 (Stripe Live mode, 真用户付费). **任何 deploy / migration / Stripe ops 必须走严肃模式** (见下方 Boundaries).

---

## 技术栈 (pin 版本, 不可乱升)

```
Framework:    Next.js 14 (Pages Router) — 不要升 App Router (架构改造工程量大)
Runtime:      React 18 / Node 20+
Database:     Supabase Postgres + Auth (project id: pzadkflzktvppwkezwxu)
Deploy:       Vercel (project: vocabspark, team: winstonwu1996s-projects)
Payment:      Stripe (LIVE mode, 8 个 Price IDs)
Errors:       Sentry v8 (锁 v8, **不要升 v10** — 已知不兼容 Pages Router + SSG, 见 #1)
Email:        Resend (sender: noreply@knowulearning.com)
AI providers: DeepSeek (主, 多 key 轮询) + Google AI Gemini (fallback)
Cache/RL:     Upstash Redis REST (project: logical-anteater-107597)
Visualization (history 子模块): d3-geo, topojson-client, xlsx
```

---

## 边界 / Boundaries (3 层)

按业界事实标准 (Augment Code / Addy Osmani spec template), 分三类:

### Must (必须保持)

- **API 兼容性**: `/api/sync` / `/api/chat-stream` / `/api/auth/*` 等现有路由的响应 schema 不可破坏 (移动 web + 已发布版客户端都依赖)
- **vocab + history 同仓库**: 不可拆分 (共享 Vercel project / Supabase tables / Stripe Customer)
- **Edge Runtime SSE**: 流式响应 (`/api/chat-stream`) 必须用 Edge (`export const config = { runtime: 'edge', maxDuration: 180 }`), Pages Router Node Runtime 会 buffer (见 #2)
- **3 层同步防御** (`pages/api/sync.js`): L1 字段守卫 + L2 历史快照 (`user_progress_history`) + L3 客户端 intent 标记 — 任何 sync 路径改动必须保留这 3 层 (见 INFRA.md §10.1)
- **Sentry 锁 v8**: 不升 v10 (已知 SSG 不兼容)
- **Vercel Pages Router**: 不切 App Router
- **`AbortSignal.timeout(25000)` 不可用在 SSE** (会切断流, 见 #3)

### Ask First (问 William 才动)

- 改 Supabase schema / 跑新 migration
- 加 npm 依赖 (任何 package)
- 改 Stripe 配置 / 加/改 Price ID / 改 webhook
- 改 user-facing pricing 文案 / 改 marketing 文案
- 改 `next.config.js` / `tsconfig.json` 等根配置
- 改 `pages/api/auth/*` 任何认证流
- 改 Sentry / Vercel / Cloudflare 任何 platform 配置
- 升级 Next.js / React / Supabase SDK 主版本

### Never (绝对不动)

- **提交 secrets**: `.env.local` / `.env.production.local` / `credentials/` 任何 key 进 git
- 改 `vendor/` / `node_modules/`
- 直接 push main (必须 PR, 且至少 Vercel preview 通过)
- 删 / 改 `user_progress_history` 表 (L2 快照, 用户数据保护)
- 跑 `npm publish` (这不是 npm package)
- 改 Stripe live mode 任何已生效的 Subscription (会影响真用户付费)

---

## 常用命令 / Commands

```bash
# 开发
pnpm dev               # 标准 dev server
npm run dev:fresh      # 删 .next 后启动
npm run dev:lan        # 本地局域网 (手机调试)
npm run dev:nuclear    # 杀进程 + 清缓存 + 重启 (最后手段)

# 构建 / 部署
pnpm build             # 生产构建
pnpm preview           # 本地预览生产构建
# Vercel 自动 deploy on push to main (注意 Boundary: 不要直接 push)

# 验证 / 测试 (history 子模块工具)
npm run validate:atlas         # 验证地图数据
npm run validate:narratives    # 验证叙事数据
npm run test:atlas             # 测试地图渲染
npm run test:willow            # Willow (女儿) 模拟器
npm run kb:fact-check          # 知识库 fact-check (单 topic)
npm run kb:fact-check:all      # 全部 topic
```

---

## 状态 + 记忆指针 (Pointers, **深背景在这些文件里**)

| 内容 | 路径 |
|------|------|
| **项目状态** (上次到哪了) | `~/ObsidianVault/10-Projects/VocabSpark/STATE.md` (v12.2 待建, 暂参考 docs/HANDOFF.md) |
| **session 交接棒** | `~/ObsidianVault/10-Projects/VocabSpark/CONTINUITY.md` (v12.2 待建) |
| **已知坑** (8 条 VocabSpark 相关 + 通用) | `~/ObsidianVault/20-Knowledge/wiki/concepts/known-gotchas.md` (#1-#8 直接相关) |
| **失败账本** | `~/ObsidianVault/20-Knowledge/wiki/failures/` |
| **OPS** (运维) | `docs/OPS.md` |
| **INFRA** (架构 + 可复用模式) | `docs/INFRA.md` §10 (3 层同步防御 / Rate Limit / Edge SSE / 软认证 / 多 key 轮询 / etc) |
| **history 模块** | `docs/HANDOFF_HISTORY_MODULE.md` + `HISTORY_MERGE_STRATEGY.md` |
| **共享记忆查询** (Vault 全文 + 实体图) | `python3 ~/.openclaw/workspace/scripts/l2-search.py "query"` |
| **机器能力清单** (这台 Mac 装了什么) | `~/ObsidianVault/00-Winston/MACHINE_CAPABILITIES.md` |

**重要**: 不要假设 / 不要猜. 不确定就用 l2-search.py 查 Vault, 或读上面的 docs.

---

## Reminders (常规纪律)

- **改完跑 `pnpm test:atlas` 或相关验证脚本**, 没专门 test suite 时至少 `pnpm build` 看能不能编
- **失败必入账本**: `~/ObsidianVault/20-Knowledge/wiki/failures/YYYY-MM-DD-slug.md`, 含 现象 / 根因 / 解决过程 / 沉淀的改变 (P7 反脆弱)
- **新发现的坑入 known-gotchas** (如果是普适规律) 或 wiki-suggestions (如果只是项目内)
- **不可逆动作走严肃模式**: deploy / migration / Stripe Live ops / 客户邮件 / incident 响应 → 用 `workon task new <id>` 创建 Task Pack, 走完成判定 hook (v12.2 Task Pack)
- **简单 bug fix / UI 调整 / 文案改动**: 直接 vibe coding, 不需要 Task Pack
- **每个 session 结束**: 把"这次做了什么 / 下次该做什么"写到 CONTINUITY.md (≤1K token, P2 最小高信号)

---

## 协议层 (跨工具)

本文件是 **vendor-neutral 启动契约**:
- Claude Code 会自动读本文件 (boot 时)
- Codex CLI 同理 (符合 agents.md spec)
- Cursor / Continue / Aider 等也读 (业界事实标准)

**工具特有的额外指令**在 shim 文件里, 但都引用本文件作 source of truth:
- `.claude/CLAUDE.md` (Claude Code 特定)
- `.codex/AGENTS.md` (Codex CLI 特定, 如有差异)
- `.cursor/rules` (Cursor 特定)

如果发现 shim 跟本文件有冲突, **以本文件为准**.

---

*VocabSpark AGENTS.md · v12.2-mvp v3 Day 2 落地 · 2026-05-16*
*维护: 这是项目级元数据, William 偶尔 review, AI 工具自动读. 如果项目结构有大变 (例如 vocab/history 拆分, 切 App Router 等), 必须同步更新本文件.*
