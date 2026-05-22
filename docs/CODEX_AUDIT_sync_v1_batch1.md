# Codex 审计任务：Sync Stabilization v1 — 第一批实现 + 测试

## 你的角色

你是数据一致性 / 离线同步审计专家。上一轮你已对 VocabSpark 的同步链路做过系统性审计，并产出施工蓝图 `docs/SYNC_STABILIZATION_v1.md`（含关键约束 1–6、三批拆分、回归测试清单）。Claude 已实现**第一批**，现在请你审计这批**实现与测试**：是否正确落地了蓝图、是否真正修复根因、是否引入新风险、测试是否充分。

**不要改代码。** 先出审计结论 + 风险清单 + 测试补充建议，由人 review 后再决定动手。

## 代码位置

- 分支：`sync-stabilization-v1`（未合并 main，未部署）
- 提交：第一批为单个 commit（feat(sync): Sync Stabilization v1 第一批）
- 蓝图：`docs/SYNC_STABILIZATION_v1.md`（你上轮产出，Claude 已补强约束 6 + 澄清约束 4）

## 第一批改了什么（请逐一核对实现）

### 新建 `lib/progressMergePolicy.js`（纯函数，客户端/服务端/测试共用）
- `toTime(x)` (L19)：日期→毫秒，非法/缺失=0。**约束 6 核心**：统一所有日期比较，杜绝字符串比较误判（`nextReviewDate` 历史数据混合 `YYYY-MM-DD` 与完整 ISO）。
- `entryRecency(e, fallbackTime)` (L59)：recency 优先级 `updatedAt > max(reviewHistory.date) > nextReviewDate > fallback`。
- `mergeReviewEntry(local, server, ctx)` (L86)：**核心修复** — recency 更新的一方赢（含 reviewLevel + nextReviewDate），允许 forgot 合法降级；旧逻辑 `reviewLevel max` 会让旧云端日期盖回本地、due 反复弹回。reviewHistory 始终并集。平局取较高 level。
- `mergeProgress(local, server)` (L120)：顶层合并，复刻原 `mergeStates` 全部字段策略（stats max / pet totalFed max + unlocked union / wordStatusMap 方向 merge / session / wordInput 取长 / settings / targetDate / completedWords union），**仅** reviewWordData 换成新 `mergeReviewEntry`。
- `validateProgressMerge(merged, server)`：复刻原 `validateMerged`。
- `applyProgressGuards(incoming, cloud, intent)`：从 `pages/api/sync.js` 的 `applyFieldGuards` 原样抽出（只增不减守卫 + wordInput intent 放行）。
- `canonicalizeProgress(data, options)` / `dedupeWordsStable(words)`：第一批仅提供能力，默认不改写数据（约束 4：去重 key 用 lowercase，保留首次出现原始大小写）；三层接入留第三批。

### `lib/syncMerge.js` → 薄 wrapper
委托 policy，re-export `mergeStates = mergeProgress` / `validateMerged = validateProgressMerge` / `mergeReviewEntry`，保持 `import { mergeStates, validateMerged } from '../lib/syncMerge'` 向后兼容。

### `pages/api/sync.js`
- 加 `import { applyProgressGuards }` (L3)
- 删除内联 `applyFieldGuards` + helper，改 `var applyFieldGuards = applyProgressGuards` (L23)，调用点不变 (L132)。
- 服务端响应已返回 `rejectedFields` / `serverData`（本批未改这部分，沿用旧实现）。

### `pages/vocab.js`
- 加 `import { mergeReviewEntry, toTime }` (L12)
- `upsertReviewWordData`：写词条时补 `updatedAt: now` (L4349) —— recency 权威依据。
- `_applyCloudData` 的 reviewWordData 合并改用 `mergeReviewEntry`，`ctx = { localFallback: 0, serverFallback: toTime(d.updatedAt) }` (L3656)。
- `_doSync` 成功分支 (L3553)：消费 `result.rejectedFields` / `result.serverData` —— 有拒绝时 `await doSave(serverData)` + `_applyCloudData(serverData)` 把权威数据应用回本地，且**不再显示 synced**（暂用 error 态）。打破"客户端以为成功、diverged 数据实则没上云"的循环。

### 测试 `scripts/test-progress-merge-policy.mjs`
59 个纯函数单测，`node scripts/test-progress-merge-policy.mjs` 全绿。覆盖 recency 合并、forgot 降级、混合日期格式、NaN、history union、守卫拒绝、字段保留、wordStatusMap 方向、session、wordInput 取长/取新、canonicalize 等。

## 请重点审计

### 1. 实现正确性
- `mergeProgress` 是否**完整**复刻了旧 `mergeStates` 的所有字段行为？逐字段比对，找漏掉或改错的（除 reviewWordData 的有意改变）。
- `mergeReviewEntry` 的 recency 语义、fallback 链、平局处理是否正确？有没有"较旧数据意外胜出"的路径？
- `applyProgressGuards` 与原 `applyFieldGuards` 是否逐行等价？守卫强度有无被削弱。
- `toTime` 规范化是否覆盖了**所有**日期比较点？仓库里是否还残留字符串比较 `nextReviewDate` 的地方（例如"云端恢复"按钮 `cd > ld`，本批未改，确认是否该一并纳入）。

### 2. 新风险（重点）
- `_doSync` 消费 rejectedFields 时 `_applyCloudData(serverData)` 的**副作用**：会不会 `setWordInput` 打断用户正在编辑、`setWordList/setIdx` 打断当前学习 session？serverData 的 session 字段来源是什么（守卫是否动过它）？
- recency 依赖客户端 `updatedAt`（本地时钟）。**时钟不准/跨设备时钟漂移**会不会导致 recency 误判、旧数据胜出？需要服务端时间戳兜底吗？
- **迁移期**：存量 reviewWordData 没有 `updatedAt`，靠 history/nextReviewDate fallback。chompcloud 573 词大多有 history，但少数只有 nextReviewDate（未来日期）。用未来 nextReviewDate 当 recency 代理是否会误判？
- `mergeProgress` 是否可能在 409 merge 时丢失 `mergeStates` 原本保留的字段（导致字段比 server 少 → 触发新一轮守卫拒绝 → 活锁）？
- wrapper re-export 的兼容性、ESM 在 Next.js API route 与前端 bundle 的双向可用性。

### 3. 部署后首次同步安全性（最高优先）
chompcloud version 冻结 1127、本地 diverge（大量过去日期 due）。修复部署后**第一次成功同步**会怎样？
- 走 409 merge（`mergeProgress`）还是直接 push？
- 本地的 forgot/新日期会不会正确保留，云端旧日期会不会正确让位？
- 有没有可能这次 merge 反而把本地正确数据搞坏？给出这次同步的预期数据流与风险点。
- 数据已三层备份（`backups/` + `~/vocabspark-backups/` + 云端 history 41 条）。

### 4. 测试充分性
- 59 个纯函数单测漏了哪些 case？（特别是 recency 边界、混合格式的真实误判 case、守卫与 intent 组合）
- 集成层（`_doSync` rejectedFields 消费、`_applyCloudData` 的 React setState 编排）**没有自动化测试**，仅靠纯函数单测 + 代码审查覆盖。这个测试边界是否可接受？若要补，建议用什么方式（不引入重型测试框架）？
- 蓝图第一批"验证标准"清单是否都被覆盖？逐条对照。

### 5. 符合蓝图约束
逐条核对约束 1–6 是否落地（约束 1 闸门 pull-merge-repush 属第二批，本批未做；其余应在本批体现）。

## 约束
- **只审计第一批**。第二批（闸门活锁 / intent 绑 payload / loadFromCloud 结构化返回）、第三批（canonicalize 三层 / 下游 distinct / 可观测性）尚未实现，不在本次范围。
- 不改代码，输出：① 实现正确性结论 ② 风险清单（按严重度）③ 测试补充建议 ④ 首次同步安全评估 ⑤ 是否可合并部署的 go/no-go 建议。
- 硬边界：prompt 文案 / ratelimit / Stripe / Sentry config 不在范围。

## 关键背景数据（生产实测）
- chompcloud: user_id `d3906a86...`, version 1127 (冻结 2026-05-17), reviewWordData 573 词 / 815 history events, wordInput 108KB, progress_data 0.32MB（远低于 4MB limit，故 version 冻结**不是** payload 问题，疑为客户端 fail-silent 闸门活锁 —— 属第二批）。
- 共 3 个生产用户，已全部三层备份。
