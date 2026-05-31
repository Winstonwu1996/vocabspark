# Sync Backlog — 非阻断残余项（Codex 审计留底）

记录已上线修复留下的、Codex 评为**非阻断**的后续项，避免遗忘。每项含：背景、位置、建议改法、为何当前不阻断。

最后更新：2026-05-31

---

## 已上线 — 2026-05-31：会话被动失效静默锁死同步（chompcloud 事故根因）
经 **Workflow 多维度审查（16 agent，安全/竞态/回归/边界 + 对抗式验证）** + 真实数据复原，已部署：

- **事故**：用户 chompcloud@gmail（uid `d3906a86…`）云端进度冻结在 5/28 06:13（version 1527），3 天未上云。
  数据库确认：唯一 session 5/28 创建后从未刷新（access token 1h 过期、refresh 一直失败）。
- **根因链**：token 刷新失败/被吊销 → Supabase 发 `SIGNED_OUT` → `setUser(null)` →
  导航栏同步徽章（`user && syncStatus` 才渲染）整块消失 + 推云闸门锁死 → 用户无感继续本地学习、永不上云。
  叠加"旧标签页跑旧 bundle"（已由 UpdateBanner `50edd30` 缓解）= 完整成因。
- **复原**：指导用户**原 tab 重新登录**（不登出/不清缓存）→ 既有 SIGNED_IN 并集合并路径把本地 3 天进度推云：
  version 1527→1528、wordStatusMap 816→926（+110，只增不减）。
- **修复**（`74c4080` 初版 + `9fd4682` 审查后）：
  - 新增 `sessionExpired` 状态 + `_userLogoutRef`/`_sessionExpiredRef`/`vs_was_logged_in`/`vs_active_logout`。
  - 被动失效（非主动登出的 SIGNED_OUT，或**启动期 INITIAL_SESSION 拿到 null 且曾登录** ← Workflow P1）→
    学习页弹"登录已过期，云同步已暂停 · 重新登录"横幅（只引导安全重登，不提供破坏性操作）。
  - **Workflow P2（丢数据）**：重登并集合并被 5min 阈值挡住 → 失效后 <5min 学的词会被云端覆盖。
    改为从失效恢复时**无条件走 mergeStates 并集**（绕过阈值，validateMerged 仍防缩水）。
  - **Workflow P3**：多 tab 主动登出经广播误弹横幅（`vs_active_logout` 跨 tab 吃掉）；
    `signOut` 包 try/catch + 拿到有效 user 时复位 `_userLogoutRef`（防 ref 卡死吃掉后续真实过期）。

---

## 已上线（背景，供理解 backlog 来由）
本轮修复了三个多设备/学习流同步根因，均已部署 + Codex Go + 数据复原：
1. **新词猜错→error 反复重学**（`cc8466b`）：新词猜错被标 `error` → 被当未学回收重学。改为 `learning`；error 只来自复习 forgot。抽 `lib/learnStatus.js` 纯函数 + 测试。
2. **detectSyncGate 绝对启发式误判**（`dcf2056`）：`rwd<wsm*0.3` / `pet default && 学过>50` 把合法低-rwd / 不玩宠物用户同步永久卡死。移除两个绝对启发式，恒放行；反丢失交给服务端守卫 + `_cloudReadyRef`。
3. **多设备 session 进度回退**（`e447364`/`2a4662f`）：闲置设备的陈旧 `session.idx=0` 覆盖活跃设备进度。`_applyCloudData` 学习中不回退 session（`screenRef`+`activeSessionRef`）+ `sanitizeResumeSession` 恢复时剔除已学词。

---

## BACKLOG-1：服务端不守卫/合并 `session` 字段（P2）
- **来源**：`fix-session-multidevice` 的 Codex 审计 P2。
- **现状**：服务端 `pages/api/sync.js` → `applyProgressGuards`（[lib/progressMergePolicy.js](../lib/progressMergePolicy.js)）守卫 wordStatusMap / reviewWordData / pet / stats / wordInput / historyData，但**不碰 `session`**。客户端 `mergeProgress` 的 session 合并：同词表取较大 idx，不同词表按 updatedAt 取舍。
- **残余风险**：两台设备**同时主动学习不同 batch** 时，云端 `session` 仍是 last-writer-wins（后写的覆盖）。
- **为何当前不阻断**：本轮事故（活跃设备被闲置设备拉回）已由客户端 **active-session guard**（学习中 `_applyCloudData` 不回退）+ **resume sanitize**（恢复时剔除已学词）堵死，用户体验不受影响。各设备本地进度不会被拉回。
- **建议改法（若将来要做）**：给服务端 / 合并层的 session 也加"取更有进度一方"语义——同词表取较大 idx（已有）；不同词表按 idx/learned 多者优先，updatedAt 仅做平局 tiebreak。注意"已完成 batch → 新 batch idx0"的边界（别让旧高-idx batch 盖掉新 batch）；优先复用客户端 active guard 的判断而非纯服务端重构。
- **测试**：补 `mergeProgress` session 合并的跨词表用例 + sync-api 决策用例。

## ~~BACKLOG-2：服务端 pet 守卫改对象级合并（P2）~~ ✅ 已完成（2026-05-24）
- **来源**：`fix-sync-gate-falsepositive` 的 Codex 审计 P2（移除客户端 pet 启发式后留下）。
- **已解决**：`c047ee1` "pet 服务端守卫改对象级合并 — 默认/陈旧快照不再覆盖云端非空标量" + `260abb4` "pet 守卫保留字段补 lastFeedAt/evolvedAt"（均 Codex P2，已合 main 部署）。pet 守卫已从"整字段回退"改为对象级合并：保留 cloud 非空标量字段，同时仍挡 totalFed 倒退 + unlocked 缩水。
- **遗留清理**：早期起草 WIP 还在 `git stash`（`pet-guard P2 WIP` / `...tests`），现已被上述提交取代，**可 `git stash drop` 删除**（基线已变，别 pop）。

---

## 通用流程提醒
- 这两项都是 **sync 安全相关**，按既有规矩：独立分支 → 测试（merge-policy / sync-api / realdata / learn-status + build）→ Codex 审计 → 部署 → 等 Vercel READY。
- 共享仓库多 agent：commit 用**显式 `git add <file>`**，别 `git add -A`（会卷入别人未提交的 history WIP）。
