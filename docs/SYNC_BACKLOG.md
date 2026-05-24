# Sync Backlog — 非阻断残余项（Codex 审计留底）

记录已上线修复留下的、Codex 评为**非阻断**的后续项，避免遗忘。每项含：背景、位置、建议改法、为何当前不阻断。

最后更新：2026-05-24

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

## BACKLOG-2：服务端 pet 守卫改对象级合并（P2）
- **来源**：`fix-sync-gate-falsepositive` 的 Codex 审计 P2（移除客户端 pet 启发式后留下）。
- **现状**：`applyProgressGuards` 的 pet 守卫（[lib/progressMergePolicy.js](../lib/progressMergePolicy.js) ~line 375-385）只比较 `totalFed` 和 `unlocked.length`，触发时**整字段回退**到 `cloud.pet`。
- **残余风险**：云端只更新 `name/happiness/hunger/equipped/species/createdAt` 而 `totalFed/unlocked` 没变时，一个默认/陈旧 pet 快照理论上仍可能覆盖这些非空字段。
- **为何当前不阻断**：不影响词库/复习/状态数据；喂养次数和解锁配饰仍被挡住。非同步卡死主路径。
- **建议改法**：pet 守卫从"整字段回退"改为**对象级合并**——保留 cloud 的非空 `name/happiness/hunger/equipped/species/createdAt`，同时仍挡 `totalFed` 倒退 + `unlocked` 缩水（复用 `mergeProgress` 里 pet 的 max/并集思路）。
- **WIP 备注**：本项已有起草 WIP，临时存于 `git stash`（`pet-guard P2 WIP` / `pet-guard P2 WIP tests`）+ 一个后台任务 chip。重做时建议从最新 `origin/main` 起干净分支，别直接 pop 旧 stash（基线已变，会冲突）。补 `applyProgressGuards` pet 分支回归用例（云端只改 name/happiness 不被默认 pet 覆盖 / totalFed 倒退仍挡 / unlocked 缩水仍挡）。

---

## 通用流程提醒
- 这两项都是 **sync 安全相关**，按既有规矩：独立分支 → 测试（merge-policy / sync-api / realdata / learn-status + build）→ Codex 审计 → 部署 → 等 Vercel READY。
- 共享仓库多 agent：commit 用**显式 `git add <file>`**，别 `git add -A`（会卷入别人未提交的 history WIP）。
