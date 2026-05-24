# Codex 审计：detectSyncGate 绝对启发式误判 → 合法用户同步被永久卡死

## 线上事故（实测）
`chompcloudusa@gmail.com`（华为平板 Chrome，今天 17:02 登录）：**数据能加载，但同步永久失败，手动重试也失败**，version 卡在 139 已 13 分钟没动。`chompcloud@gmail.com`（另一设备）同步正常（v1220）—— 是**账号特定**问题，非设备/浏览器。

## 根因
客户端反丢失闸门 `detectSyncGate`（[lib/progressMergePolicy.js](../lib/progressMergePolicy.js)）用两个**绝对启发式**判断本地是否"看起来危险"，二者都误伤正常用户：

1. `wsmCount > 20 && rwdCount < wsmCount * 0.3` → `reviewWordData_too_small`
   - chompcloudusa 实测 **wsm 45 / rwd 7**：`45>20 && 7<13.5` → blocked。
   - 为何合法：Active Recall「✅ 能」按钮 + 快筛跳过 **只写 wordStatusMap，不写 reviewWordData**，所以"学很多词但 rwd 很低"是真实使用模式。
   - 死循环：`_doSync` 见 gate.blocked → `recoverBlockedSync` 拉云端（云端也是 45/7）→ merge（仍 45/7）→ reGate 仍 blocked → "真 block" → `setSyncStatus("error")` → 永久失败。
2. `petLooksDefault && stats.total > 50` → `pet_looks_default`
   - 不玩宠物的用户 pet 永远 default → 同类误伤（本用户 total 46 未触发，但是潜在雷）。

时间线印证：v138 wsm 15（<20 阈值）同步正常 → 这几天学到 wsm 45 过线、rwd 仍低 → 永久卡死。**pre-existing**，使用量增长触发，与近期改动无关。

## 修复
`detectSyncGate` **移除两个绝对启发式，恒放行**（仅保留 null guard）。理由：
- 客户端没有云端基线，任何"绝对比例/默认值"猜测都会误判合法分布。
- 真正可靠的反丢失是**与云端逐字段对比**，已有两道权威防线：
  - 服务端 `applyProgressGuards`：本地各字段 < 云端 → 保留云端（authoritative）。
  - 客户端 `_cloudReadyRef`：云端没加载完不许推（防 mount race，post-authfix 可靠）。
- `recoverBlockedSync` / `_doSync` 里 `if (gate.blocked)` 分支成为不触发的死路（保留无害）。

## 请重点验证
1. **不再误拦合法用户**：wsm45/rwd7、纯"只点能"用户、不玩宠物用户都能正常同步。
2. **真·数据丢失仍被挡**：移除客户端闸门后，本地某字段真比云端少时，服务端 `applyProgressGuards` 是否仍能挡住（返回 200 + rejectedFields + serverData，客户端 `_applySyncSuccess` 应用 serverData 不显示 synced）。请确认服务端守卫覆盖了原客户端闸门关心的所有字段（wordStatusMap/reviewWordData/pet/stats）。
3. **mount race**：`_cloudReadyRef` 是否足以防"云端没加载完就推空本地"。若 race 仍偶发，最坏情况是 push→服务端 reject→应用 serverData→闪一下 error→下轮成功（自愈），可接受？
4. **chompcloudusa 解冻路径**：部署后客户端刷新 → 不再 gate → 推 45/7 → 服务端比云端 45/7 不缩水 → 放行 → 同步成功。数据无损坏、无需清理。确认。
5. 是否建议**彻底删除** `detectSyncGate` + `recoverBlockedSync` 死代码（本次保守保留），还是留作未来"云端基线感知"版本的占位。

## 测试
- `node scripts/test-progress-merge-policy.mjs`：79/79（gate 用例改为"不再误拦"，含 wsm45/rwd7 回归）
- `node scripts/verify-sync-realdata.mjs`：11/11（闸门不拦 + mergeProgress 仍恢复数据）
- `node scripts/test-learn-status.mjs`：22/22
- `node scripts/test-sync-api.mjs`：14/14（服务端守卫决策未改）
- `npm run build`：通过
- 注：`_doSync`/`recoverBlockedSync` 是 React 运行时，纯函数已覆盖 gate 判定；服务端守卫由 sync-api 测试覆盖。

## 范围
分支 `fix-sync-gate-falsepositive`，相对 origin/main 仅这一个 feat commit（+本审计文档）。不动服务端守卫、不动存储层。

## 请给结论
移除客户端绝对启发式闸门是否认可（重点 #2 服务端守卫是否真能兜底）+ 整体 go/no-go + 是否顺手删死代码。
