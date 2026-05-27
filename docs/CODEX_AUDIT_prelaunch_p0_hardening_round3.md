# Codex 复看 Round 3：推广前 P0 加固上线阻断 hotfix（cron 频率 + JSDoc syntax）

## 背景
Round 2 你已 GO，部署阶段踩到两个 Vercel 侧问题，已修 + 已部署到 production。**这次审计是 post-deploy 复核**，确认 hotfix 没引入新问题 + live production 实际行为符合 Round 2 GO 的内容。

## 部署过程发生了什么

### 现象
Round 2 push（main 到 `f36fc34`）后 Vercel **完全没产出新 deployment**——production alias 还指 `a6ab622`（其它 agent 的 history EN polish）。我误以为是 webhook 延迟，先加了空 commit `b96764a` retrigger，仍无效。后来用 `vercel deploy --prod --yes` 走 CLI 才看到真实 build error。

### 根因 #1：cron 频率违反 Hobby plan 限制
[vercel.json](../vercel.json) 我写了 `"schedule": "*/30 * * * *"`（每 30 分钟）。Vercel Hobby plan 限制 cron 每天最多 1 次，Webhook 触发的 build 在 setup 阶段就 `deploy_failed`：
> `Hobby accounts are limited to daily cron jobs. This cron expression (*/30 * * * *) would run more than once per day.`

这种"deploy 失败 + 不进 list_deployments + 也不通过任何渠道告警"是 silent degradation 的活教材（讽刺地发生在 silent degradation 防御战的部署里）。

**修**：commit `0ed1717` 把 schedule 改成 `0 9 * * *`（每日 UTC 9am 一次）。
**Trade-off 留 backlog**：daily 探针潜伏窗口 24h，对推广期不够细——code 注释里写了升 Pro plan 后改回每 30 分钟，或在 UptimeRobot 免费层另配一个 5 分钟 ping 这个 endpoint 兜底（endpoint 本身受 `CRON_SECRET` 保护，外部 ping 也能用）。

### 根因 #2：JSDoc 块注释里写 `*/30` 触发 syntax error
我在 `pages/api/cron/health-probe.js` 顶部 JSDoc 里加了一句说明"升级后改回 `*/30 * * * *`"。`*/` 在块注释 `/* ... */` 里**提前闭合注释**→ 后面 `30 ...` 变成裸代码 → webpack syntax error。

**修**：commit `0ed1717` 同一笔，注释改成「"星号 / 30 星号 星号 星号 星号"」（中文叙述形式，避免 `*/` 序列）。

### 部署方式
CLI 手动 deploy（`vercel deploy --prod --yes`），不是 git webhook。原因：webhook 已 stuck（每次 push 都失败但 silent）；CLI 直接上传 working tree，绕过 webhook。
- 部署前用 `git stash push -u` 把另一 agent 在工作区的 history WIP 安全停一边（不入 deploy）。
- 部署后 `git stash pop` 恢复。
- 部署产物 `dpl_ANRdr2Y5WwHND4kjf6q7GE6F7MQ5`：source=`cli`, gitDirty=1, base commit=`b96764a`, 工作区含未提交的 cron+注释 fix。
- 部署完成后才把 fix 提交为 `0ed1717` 并 push，所以 commit `0ed1717` 的 tree = 当前 production 的内容（modulo 那个 retrigger 空 commit `b96764a` 内容上等同 `f36fc34`）。

## 请重点验证
1. **commit `0ed1717` ↔ production 一致**：`git diff 0ed1717..b96764a -- vercel.json pages/api/cron/health-probe.js` 应该恰好就是 cron schedule 改回 + 注释里那一行的差，无其它意外。证实 live prod 就是这套代码。
2. **cron 频率改动不影响 Round 2 已 GO 的安全前提**：daily 探针仍保留所有 P0-4 性质——只读、`CRON_SECRET` 在 prod 强制（参考 [health-probe.js](../pages/api/cron/health-probe.js) line ~34 那段），变化仅是触发频率。
3. **`0 9 * * *` 是合法 cron 表达式 + 符合 Vercel Hobby 限制（每日 1 次）**。
4. **注释 fix 没引入其它误伤**：JSDoc 块注释里只改了我加的那一行，其它结构未动。
5. **CLI deploy + stash-pop 流程没污染 main**：当前 main 的工作区还原到 stash 弹出后的状态（只剩另一 agent 的 history WIP + `.claude/scheduled_tasks.lock` 删除，跟 deploy 前一致）。

## Smoke test（已跑）
- `GET https://knowulearning.com/api/cron/health-probe` 无 `Authorization` 头 → `{"error":"unauthorized"}` 401。
  - 意义：endpoint 在 prod alive ✓ + `CRON_SECRET` env 已配 ✓（如果没配会是 503 "probe disabled"）+ 鉴权按 Round 2 设计强制 ✓。

## 回归测试（与 Round 2 一致）
- `npm run build`：本地通过；prod 也 build 成功（CLI deploy 已确认 READY）。
- merge-policy 97/97、sync-api 14/14、learn-status 28/28、guess-sanitize 21/21、auth-userid 14/14、realdata 11/11——本轮未触代码路径，沿用 Round 2 验证。

## 范围
相对 Round 2 GO 的范围，本轮只动了 2 个文件（vercel.json + pages/api/cron/health-probe.js JSDoc 一句），无任何运行时代码改动。不动 sync/auth/storage/守卫/Sentry 告警逻辑。

## 请给结论
hotfix 是否落实到位 + production 当前状态是否 OK + 是否需要补什么后续动作（比如把 webhook 卡住问题反馈给 Vercel，或 upgrade Pro plan 节奏）。
