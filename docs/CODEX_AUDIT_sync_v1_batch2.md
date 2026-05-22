# Codex 审计：Sync Stabilization v1 — 第二批（打破同步活锁）

## 你的角色
你已审计并放行第一批（合并逻辑）。第二批实现"打破活锁"——这是真正解冻 chompcloud version 1127 的关键。请审计实现 + 测试，给 go/no-go。**不要改代码**，出结论。

- 分支：`sync-v1-batch2`（基于含第一批的 `origin/main`）
- 蓝图：`docs/SYNC_STABILIZATION_v1.md` 第二批

## 背景：version 冻结的真正元凶
chompcloud version 自 2026-05-17 冻结在 1127。第一批确认 payload 仅 0.32MB（非 413）。真正原因：`_doSync` 的两个反数据丢失闸门（`reviewWordData < wsm*0.3`、`pet default && stats.total>50`）触发后**静默 `setSyncStatus("error") + return`** → 永久不同步（活锁）。

## 第二批改了什么

### 1. `detectSyncGate(fullData)` — 闸门判定抽成纯函数
[lib/progressMergePolicy.js](../lib/progressMergePolicy.js)。返回 `{blocked, reason}`，逻辑与原内联闸门等价（保护1 rwd 太少、保护2 pet default）。可单测（policy 测试新增 7 个 case）。

### 2. `recoverBlockedSync(reason, localData, intent)` — pull-merge-repush 解冻
[pages/vocab.js](../pages/vocab.js)。闸门触发后：
- 拉云端（`loadFromCloud`）。
- **拉云失败** → 保持 blocked（`setSyncStatus("error")`），**不强推**（避免覆盖云端）。
- **云端无数据** → 没有可保护数据，闸门是误判，直接推本地。
- **有云端数据** → `mergeStates(local, cloud)` → merged。
  - merged **仍触发闸门**（`detectSyncGate(merged).blocked`）→ 真 block，但把云端合并进本地（不丢），`setSyncStatus("error")`。
  - 否则 → `doSave(merged)` + `_applyCloudData(merged)` + `_pushSnapshot(merged)`。merged 含云端数据，rwd/pet 不会少 → 不再触发闸门 → 推送成功 → **解冻**。
- `_recoveringRef` 防 reentrant。

### 3. `_pushSnapshot(dataToPush, intent)` — 抽出推送逻辑（正常路径 + recover 共用）
含 fetch + 409 冲突合并 + 重推 + `_applySyncSuccess`。**409 重推现在带 intent**（Codex round2：避免重推丢 intent 导致合法缩减被守卫拦截）。

### 4. `loadFromCloud` 结构化返回
`{ok:true, data, version, hasData}` | `{ok:false, error}`。修复 `handleAuthUser`：原先把读取失败返回的 null 当"云端无数据 → 解锁 `_cloudReadyRef` + 推本地" → **读失败会覆盖云端**（你 round1 的 P2）。现在读失败不解锁、不推。`_maybePullCloud` / cloud-restore 按钮同步适配。

### 5. intent 成功才清
原 `_doSync` 在 fetch 前 `_intentRef.current = null` → 失败/重试/409 丢 intent。现在仅在 `_applySyncSuccess` 成功且无 reject 时清；重试/reject/error 保留。

## 请重点审计

1. **`_doSync` 重构等价性**：新流程 `loadSave → detectSyncGate → (recover | _pushSnapshot)` 是否覆盖原所有路径？`_syncInFlightRef`/`finally`/重试是否仍正确（闸门触发走 recover 后 `return`，finally 会清 inFlight + 处理 pending）。

2. **recoverBlockedSync 的安全性 / 终止性**：
   - 会不会循环？（recover → _pushSnapshot 抛错 → _doSync catch 重试 → 又 recover）。有重试上限 MAX_SYNC_RETRIES，`_recoveringRef` 防并发。请确认不会活锁/死循环。
   - 拉云失败保持 blocked 是否正确（宁可不同步不覆盖）。
   - merged 仍 blocked 时把云端合进本地 + error，是否合理。

3. **chompcloud 首次同步（解冻时刻）**：本地 diverge（大量过去日期 due）+ version 落后云端 1127。第一次 sync 会怎样？
   - 若本地触发闸门 → recover 拉云 1127 + mergeProgress + 推 → version 1128？
   - 若不触发闸门 → _pushSnapshot → 可能 409（clientVersion < 1127）→ merge 重推。
   - 给出预期数据流，确认 forgot/新进度保留、云端旧数据正确让位、version 恢复增长。
   - 数据已三层备份。

4. **intent 成功才清**：并发 sync（多 tab）会不会让 intent 串台？（`_syncInFlightRef` 锁 + debounce 是否足够，还是必须绑 payload）。

5. **loadFromCloud 4 个调用点**适配是否都正确（handleAuthUser / _maybePullCloud / cloud-restore 按钮 / 去重按钮）。

6. **测试充分性**：detectSyncGate 7 纯函数 case + 真实数据"闸门触发→合并→解冻"验证。集成层（recover/loadFromCloud 的 React 异步）仍无自动化测试，靠代码审查——是否可接受。

## 测试现状
- `node scripts/test-progress-merge-policy.mjs`：75/75（含 detectSyncGate 7）
- `node scripts/test-sync-api.mjs`：14/14
- `node scripts/verify-sync-realdata.mjs`：12/12（含第二批"模拟 race → 触发闸门 → 合并云端 → 解冻"真实数据验证）
- `npm run build`：通过

## go/no-go
请评估第二批是否可合并 `main` 部署。合并后 chompcloud 应可正常同步（闸门自动 pull-merge-repush 解冻 version 1127）。建议合并后实测 chompcloud 一次同步，确认 version 从 1127 恢复增长。

## 仍未做
第三批：canonicalize 三层 + 下游 distinct（getDailyPlan/startLearning/startScreening）+ 可观测性（sync 状态/breadcrumb/diverge 检测）。
