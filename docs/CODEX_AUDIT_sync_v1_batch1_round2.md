# Codex 复审 (Round 2)：Sync v1 第一批 P1 修复

## 背景
你上一轮审计第一批给出 **No-Go**，列了 3 个 P1 + 若干 P2。Claude 已按你的建议修复（分支 `sync-stabilization-v1`，修复 commit `2b44314`，在第一批 commit `45fa75c` 之上）。请复审修复是否正确、有无新风险，并重新给 go/no-go。

**不要改代码。** 出结论即可。

## P1 修复详情（请逐条验证）

### P1-1：meaning-only 更新错误赢过真实复习
- **拆出独立字段 `srsUpdatedAt`** 作为 SRS recency 的唯一依据。
- `entryRecency` ([lib/progressMergePolicy.js](../lib/progressMergePolicy.js) `entryRecency`)：优先级改为 `srsUpdatedAt > max(reviewHistory.date) > nextReviewDate > fallback`，**完全不看通用 `updatedAt`**。
- `upsertReviewWordData` ([pages/vocab.js](../pages/vocab.js))：通用 `updatedAt` 仍每次刷新（meta），但 `srsUpdatedAt` **仅当 patch 含 `reviewLevel` / `nextReviewDate` / `reviewHistory`** 才刷新。meaning/phonetic 懒加载只刷 `updatedAt`，不动 `srsUpdatedAt`。
- 回归测试："P1 meaning-only 旧 SRS 不覆盖真实复习 → level 3"。

### P1-3：mergeReviewEntry 写回 updatedAt 取 max 掩盖 history recency
- `mergeReviewEntry` 返回的 `srsUpdatedAt` **只取 winner**（`srsUpdatedAt: winner.srsUpdatedAt`），不再 maxISO。winner 无 `srsUpdatedAt` 时留空（undefined），让下轮 `entryRecency` fallback 到 history。
- 通用 `updatedAt` 仍 `maxISO`，但它不参与 recency，无害。
- 回归测试："P1 merged.srsUpdatedAt 不是 loser 的 5-10" + "merged 重算 recency = winner history（未被旧 srs 掩盖）"。

### P1-2：/api/sync 忽略 Supabase 读取错误
- [pages/api/sync.js](../pages/api/sync.js) 读云端后新增：`if (readErr && readErr.code !== 'PGRST116') return res.status(500)`。
- `PGRST116` = `.single()` 在无记录时的 code（首次用户，正常）；其余错误 fail closed，绝不当 cloud=null 放行守卫。

### 顺带（约束6）
- "云端恢复" 按钮原 `cd > ld` 字符串比较改为 `toTime(ce.nextReviewDate) > toTime(le.nextReviewDate)`，并在修正时写 `srsUpdatedAt`。

## 请复审

1. **P1-1/P1-3 是否真修好**：srsUpdatedAt 方案能否彻底阻断"meaning-only 翻盘"与"loser srsUpdatedAt 掩盖 winner history"？有无残留路径。
2. **新写入点遗漏**：是否还有写 reviewWordData 的 SRS 字段却没经过 `upsertReviewWordData`、因而漏写 `srsUpdatedAt` 的地方？（已检查：`setReviewWordData` 直接调用点有 5 处，学习完成走 upsert ✓，云端恢复已补 srsUpdatedAt ✓，_applyCloudData 走 mergeReviewEntry ✓，加载/重置不算 SRS 事件。请独立复核。）
3. **迁移期风险**：存量 reviewWordData 全部无 `srsUpdatedAt`，靠 history/nextReviewDate fallback。chompcloud 573 词 / 815 history events（多数有 history）。用未来 `nextReviewDate` 当 recency 代理（无 srs 无 history 的少数词）是否会在首次 409 merge 误判？严重度？
4. **客户端时钟**：`srsUpdatedAt` 仍是客户端 `new Date()`。跨设备时钟漂移的风险是否仍在？v1 是否可接受、还是必须服务端时间戳？
5. **P1-2 fail-closed**：`PGRST116` 判断是否正确覆盖"无记录"语义？fail closed 会不会误伤正常首次用户（应不会，因为 PGRST116 被放行）。
6. **重新 go/no-go**：第一批是否可合并 main 部署？（注意：首次救援同步仍需第二批闸门 pull-merge-repush，本批不触发 chompcloud 救援。）

## 测试现状
- `node scripts/test-progress-merge-policy.mjs`：**65/65 通过**（含 2 个 P1 回归 + entryRecency 忽略 updatedAt）。
- `npm run build`：通过。

## 仍未做（明确范围）
- P2-4：wordStatusMap/stats/pet/session 仍未统一到 policy（仅 reviewWordData）。
- P2-5：rejectedFields 后 React/localStorage 一致性，留第二批 `recoverBlockedSync` 统一。
- 第二批：闸门活锁 pull-merge-repush、intent 绑 payload、loadFromCloud 结构化返回。
- 第三批：canonicalize 三层、下游 distinct、可观测性。
