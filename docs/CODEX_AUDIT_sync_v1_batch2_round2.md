# Codex 复看 Round 2：第二批 — intent payload-binding 修复

## 背景
第二批你给 No-Go，1 个 P1（intent 仍非 payload-bound，会被 in-flight sync 误清）+ 1 个 P2（recover 拉云失败不自动重试）。两个都修了，请确认 + 重新 go/no-go。分支 `sync-v1-batch2`。

## P1 修复：intent 对象身份（token）

**你指出的翻车时序**：sync A 在飞（捕获 intent=null）→ 用户去重设 `_intentRef='user_edit_wordInput'` 触发 sync B → sync A 成功无条件清全局 `_intentRef` → sync B 发缩短 wordInput 但 intent 已被清 → 守卫拒绝 → 去重被还原。

**修复**（[pages/vocab.js](../pages/vocab.js)）：
- 新增 `_intentSeqRef` + `_markIntent(type)`：intent 设为带唯一 id 的对象 `{ type, id: ++seq }`。三处设置点（删词 / upload / 去重按钮）改用 `_markIntent`。
- `_doSync` 捕获**整个对象** `var intent = _intentRef.current`，传给 `_pushSnapshot`。
- `_pushSnapshot`：发给服务端的是 `intent.type` 字符串；定义 `_clearIntentIfMine = () => { if (_intentRef.current === intent) _intentRef.current = null; }`（**对象身份比较**，非字符串）。
- `_applySyncSuccess` 改为返回 boolean（true=干净成功，false=有 reject）。`_pushSnapshot` 仅在 `clean === true` 时调 `_clearIntentIfMine()`。
- 现在 sync A 成功只清"自己捕获的那个 intent 对象"；若期间用户新设 intent（不同 id 的新对象），`_intentRef.current !== intent`（A 捕获的）→ **不清** → sync B 仍带 intent。

请确认：
1. 对象身份比较是否真正堵住了你描述的时序（A 不再误清 B 的 intent）。
2. 三处 `_markIntent` 调用点是否都正确。
3. 边界：intent=null（普通 sync）时 `_clearIntentIfMine` 的行为（`_intentRef.current === null` 且无新 intent → 清 null no-op；有新 intent → 不清）是否正确。
4. `_applySyncSuccess` 返回值在两条调用路径（r.ok / 409 r2.ok）是否都被正确消费。

## P2 修复：recover 拉云失败自动重试
`recoverBlockedSync` 拉云失败原先 `setSyncStatus("error") + return`（需等用户操作）。改为 `throw` → 进入 `_doSync` catch 的重试逻辑（指数退避 + MAX_SYNC_RETRIES 上限）。`/api/load` 短暂失败可自动恢复。`_recoveringRef` 在 finally 清，重试时可再 recover。请确认不会死循环（有 MAX 上限）。

## 你已确认通过的（未改动）
- detectSyncGate 等价抽取
- recoverBlockedSync pull-merge-repush 核心 + merged 后再检测闸门
- loadFromCloud 结构化修复读失败覆盖云端
- chompcloud 解冻主链路

## 测试
- `node scripts/test-progress-merge-policy.mjs`：75/75
- `node scripts/test-sync-api.mjs`：14/14
- `node scripts/verify-sync-realdata.mjs`：12/12（含闸门 recover 解冻）
- `npm run build`：通过

注：intent 对象身份是 React 异步逻辑，纯函数测不到，靠代码审查。如认为需要，可建议一个轻量集成测试方式（不引入重型框架）。

## go/no-go
请评估第二批是否可合并 `main` 部署。合并后建议实测 chompcloud 一次同步，确认 version 从 1127 恢复增长。
