# Codex 复审 Round 3：第一批 — 409 修复 + 分支清洁

## 背景
Round 2 你给 **No-Go for direct merge**，两个阻塞点：
1. **[P1]** 409 冲突重推路径 (`r2.ok`) 没消费 `rejectedFields`，会让"谎报 synced"在冲突路径复活。
2. **[P2]** 分支混着 `.gitignore` + `lib/history-storyboards/*`，部署范围不干净。

两点 + P2(recency 脆弱)均已修复。请确认并重新 go/no-go。

## 修复

### P1：409 重推消费 rejectedFields（阻塞项）
- 抽出共用 helper `_applySyncSuccess(result)`（[pages/vocab.js](../pages/vocab.js)，`_doSync` 之前定义）。
- 正常 push 路径 (`r.ok`) 与 409 重推路径 (`r2.ok`) **都改为调用同一个 helper**。
- helper 统一逻辑：`result.rejectedFields?.length > 0` → `doSave(serverData)` + `_applyCloudData(serverData)` + `setSyncStatus("error")`（不 setSyncSynced）；否则才 `setSyncSynced()`。
- 这样 409 重推时服务端拒字段不再谎报 synced。

### P2：recency 用 max 而非硬优先（你 Round 2 的建议）
- `entryRecency`（[lib/progressMergePolicy.js](../lib/progressMergePolicy.js)）改为
  `max(srsUpdatedAt, max(reviewHistory.date)) > nextReviewDate > fallback`。
- 解决"旧 srsUpdatedAt + 更新 reviewHistory 时 history 被忽略"。
- 新增 2 个回归测试覆盖两个方向。

### P2：分支清洁
- 新建 **`sync-v1-clean`** from `origin/main`，cherry-pick **仅 sync commits**，排除混入的 history commit。
- 已核实 `main` 在分叉点 (2fbe994) 之后**完全没碰** sync 文件（vocab.js / sync.js / syncMerge.js 各 0 次改动），所以零冲突。
- 相对 `origin/main` 的 diff 仅 8 个文件，**无 `lib/history-storyboards/*`**：
  - `.gitignore`（backups/）
  - `docs/CODEX_AUDIT_sync_v1_batch1.md` / `_round2.md`
  - `lib/progressMergePolicy.js`（新）
  - `lib/syncMerge.js`（→ 薄 wrapper）
  - `pages/api/sync.js`
  - `pages/vocab.js`
  - `scripts/test-progress-merge-policy.mjs`

## 请确认
1. P1 的 `_applySyncSuccess` helper 是否真正让两条路径行为一致、彻底消除 409 重推谎报 synced。
2. P2 recency `max` 是否正确（含新测试覆盖）。
3. 分支 `sync-v1-clean` 是否干净可合并。
4. 重新 go/no-go（合并 `sync-v1-clean` → main）。

## 测试现状
- `node scripts/test-progress-merge-policy.mjs`：**67/67 通过**。
- `npm run build`：通过。
- 分支：`sync-v1-clean`（取代 `sync-stabilization-v1`）。

## 仍未做（范围确认）
- 第一批合并后仅"合并逻辑安全可部署"；**chompcloud version 1127 解冻仍需第二批**（闸门 fail-silent 活锁 pull-merge-repush）。合并第一批后**不要**让 chompcloud 触发救援同步。
- P2-4（统一 wordStatusMap/stats/pet/session）、P2-5（rejectedFields React/localStorage 一致性）留后续批次。
