# Codex 复看 Round 2：第三批 — 二次 409 收敛 P1 修复

## 背景
你第三批结论：前 2 项 + breadcrumb **Go**；二次 409 union-merge **No-Go**（P1：merged2 只落地本地未推云，却 setSyncSynced + clearIntent → 假"已同步"、intent 丢、autosave 因本地已一致不再触发 → 云端永远缺这次 union）。已修，请确认 + 重新 go/no-go。分支 `sync-v1-batch3`（在原 commit 上多一个 fix commit `be2f579`）。

## P1 修复（采纳你的"更稳"方向 + 复用既有重试机制）
[pages/vocab.js](../pages/vocab.js) `_pushSnapshot` 二次 409 分支（`r2.status === 409`）：

```js
} else if (r2.status === 409) {
  var conflict2 = await r2.json();
  trackFunnel('sync_conflict_409', { client_version, server_version, attempt: 2 });
  if (conflict2.serverData) {
    // union-merge 保住用户本轮 merged 的改动到本地（不丢词）
    merged2 = mergeStates(merged, conflict2.serverData);
    if (!validateMerged(merged2, conflict2.serverData)) merged2 = conflict2.serverData;
    syncVersionRef.current = conflict2.serverVersion;
    await doSave(merged2);
    _applyCloudData(merged2);
  }
  // merged2 还没推上云 → 绝不 setSyncSynced / clearIntent
  throw new Error('re-merge still 409 (max contention) — retry scheduled');
}
```

关键点：
1. **不再 setSyncSynced / clearIntent**（直接删掉这两行）。
2. **改为 throw** → 命中 `_doSync` 的 catch（行 3650 附近）：`_syncRetryCountRef.current++` + 指数退避 `setTimeout(_doSync, 1000*2^n)`，状态保持 `syncing`；耗尽 `MAX_SYNC_RETRIES` 才 `setSyncStatus("error")`（徽章可手动重试）。
3. **throw 跳过了** `_pushSnapshot` 末尾的 `_syncRetryCountRef.current = 0`（行 3567）→ 重试计数正常累积；最终成功时 `_applySyncSuccess` 内 `_syncRetryCountRef.current = 0` 复位。
4. **intent 不清** → `_doSync` 重试时行 3639 `var intent = _intentRef.current` 重新读到原 intent，merged2（已 doSave 落地）被重新 loadSave → 带 intent 重推。竞态是瞬态，通常下一轮即成功。

## 请确认
1. 这条 throw 是否确实只被 `_doSync` 的 catch 接（`_pushSnapshot` 仅由 `_doSync` 直接 await、及 `recoverBlockedSync` await 后再被 `_doSync` await）→ 两条链都回到 `_doSync` catch。无"未捕获 promise"。
2. throw 后 `merged2` 已 `doSave` 落地本地 + `_applyCloudData` 应用 state → 重试 loadSave 能读到含用户改动的 merged2，重推语义正确；不会出现"本地一致但云端缺数据且永不重试"。
3. 不再有"未推云却显示已同步"的语义。耗尽重试 → error（非 synced），符合你要求。
4. 边界：首轮 `r2.ok` 成功路径（行 3537-3539）未动，仍 `_applySyncSuccess` + `_clearIntentIfMine`；正常 `r.ok` 路径未动。确认本次只改二次 409 这一分支。

## 你上轮已 Go 的项（未改动，供回归确认）
- mergeProgress 合并层 wordInput 去重（不改胜出方，只清重复）
- parseWordsFromInput 全局 distinct（index<=idx 已废，消费者按 word key）
- breadcrumb（无 PII）
- 跳过 mountedRef / diverge detection
- P2 确认项：上传路径 [pages/vocab.js:5091](../pages/vocab.js) `finalWordInput = _dedupeWordInputStr(finalWordInput)` 在 [行 5095](../pages/vocab.js) `d.wordInput = finalWordInput` **之前** → 持久化的是去重版（72ec7a4 patch 已在本分支）。

## 测试
- `node scripts/test-progress-merge-policy.mjs`：80/80
- `node scripts/test-sync-api.mjs`：14/14
- `node scripts/verify-sync-realdata.mjs`：12/12
- `npm run build`：通过
- 注：二次 409 + 重试是 React 运行时多次往返，纯函数测不到；靠代码审查。

## 请给结论
二次 409 P1 修复的 go/no-go + 整体第三批合并部署 go/no-go。
