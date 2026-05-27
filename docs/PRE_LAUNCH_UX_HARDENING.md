# 推广前 UX 加固清单 — "Silent Degradation" 防御战

最后更新：2026-05-27（X-User-Id 漏发修复部署后）

> **核心判断**：这一周修的 7 个 bug 是同一类——**silent degradation**：不报错、不崩溃，只是"慢/少/重复/错"。
> 用户只能用"感觉"反馈，靠创始人盯到才发现。**推广后用户量上来，新人不会反馈、直接流失**。
> 这份清单是为了把这类 bug "变 loud"——出问题立即知道、量化、能处理。

---

## 一、这周修过的 bug 谱系（看 pattern）

| 类别 | bug | 共同点 |
|---|---|---|
| Auth/Identity | X-User-Id 漏发 → 100/h IP 限被打穿 | 客户端直读 Supabase localStorage，vendor 内部结构升级后挂掉 |
| Auth/Identity | onAuthStateChange 死锁（vocab.js authfix） | Supabase v2 回调内 await 同模块方法触发内部锁 |
| Sync/State | 多设备 session 回退（活跃设备被闲置拉回） | `_applyCloudData` 无脑覆盖，没"正在使用中"概念 |
| Sync/State | detectSyncGate 误判（rwd<wsm*0.3） | 客户端拍脑袋的绝对阈值启发式 |
| Sync/State | error 回收循环（猜错新词被当未学重学） | 状态语义混用：error 既给"忘记"用又给"猜错"用 |
| LLM 内容 | 猜词选项含 "(this is correct)" 泄题 | LLM 抽风产物没校验，UI 直接展示 |
| Rate Limit | 100/h IP 限对家庭/学校共享 NAT 过紧 | 阈值设得保守、没人量化验证 |

**共同 pattern**：
1. **跨源契约漂移**：同一份数据多个读法（如 user id：localStorage 扫 vs supabase.auth）→ vendor 一升级，旧路径默默失效。
2. **静默退化**：错误不 throw，只是降级（变慢 / 数据少 / 状态回退）→ 客户端往往还会 silent retry，用户感觉只是"卡"。
3. **缺告警**：日志里早有信号（429、guard rejected、session idx 不动），没人在盯。
4. **阈值未被验证**：100/h、30% rwd 比例、5 词 batch 并发等都是"应该够"的猜测，真实用量一压就破。
5. **缺用户反馈通道**：用户只能用"今天有点慢"这种感觉描述，无法定位。

---

## 二、还没踩到、但推广后必踩的同类风险

### 高风险 🔴
1. **IP-level 限流对中国/学校 NAT 太紧**（100/h）。一个家庭 5 口人 / 一个班 30 学生共享一个 NAT 出口 IP，没登录态时半小时就烧光。**推广后大量新用户首次体验就被拦**——这是 P0 的 P0。
2. **LLM provider key 配额黑盒**：没仪表盘，不知道哪个 key 接近月度上限、什么时候 burst 限会被触发。推广带来流量阶跃，**可能某天突然集体 429** 还查不出哪个 key 烧了。
3. **Supabase / Next.js / LLM 厂商任何升级都可能再制造 X-User-Id 这类 bug**：我们再 audit 了一遍，目前干净，但**没有持续监控机制**。
4. **没 synthetic 监控**：所有 bug 都是用户报+创始人查。推广后 founders 不可能盯所有用户，需要"机器替你学几个词、出问题立刻报警"。

### 中风险 🟡
5. **客户端 429/503/timeout 都走 silent retry**：用户只看到加载条转圈，不知道为什么慢、要等多久。流失率会显著高于"明确告诉用户'服务繁忙，30 秒后重试'"。
6. **多设备并发场景的服务端 session 守卫缺位**（SYNC_BACKLOG.md 的 BACKLOG-1）：客户端 guard 堵住了用户体验，但云端仍 last-writer-wins。规模化后 2 台设备同步学习冲突可见度会上升。
7. **没有简单的 BYO key UI**：BYO 已在代码里支持（绕过 rate limit），但用户不知道/不会配。重度用户被限流时没出口。

### 低风险但要注意 🟢
8. **历史 storyboard / vocab 内容生成抽风**（如 cloze 题题干漏答案、teach 内容偏题）：靠 Codex 内容审 + 用户反馈通道。
9. **数据库行数 + 单 user progress_data 大小膨胀**：chompcloud 已 361 KB，长期可能撑到 MB 级；reviewWordData 几千 entry 后客户端合并 cost 上升。

---

## 三、推广前 P0（必做，要不就别推）

### P0-1：客户端 429 / 服务繁忙的可见性 UX
**现状**：429 来了 callWithClientRetry 静默重试，超限后 UI 只显示"题目暂时没准备好"或一直转圈。用户不知道是限流、还是网络挂、还是要等多久。
**最低成本干预**：
- `callWithClientRetry` 命中 429 → 抛出特定错误类型 → UI 顶部 toast"⏳ 服务繁忙，正在排队…大约 30 秒后自动恢复"。
- 多次 429 → 引导到 BYO key 设置页（"想立刻继续？用你自己的 DeepSeek key"）。
**收益**：用户从"不明所以卡住"变成"明确知道在排队"——churn 显著降。

### P0-2：服务端 429 / 5xx 的 Sentry 告警
**现状**：日志里能看到，没人盯。
**最低成本干预**：
- Sentry alert rule：`/api/chat` 5 分钟内 429 数 > 30 → ping 邮件/短信。
- 同上 5xx > 10。
- `[sync][guard] rejected` 任何出现 → low-priority alert。
**收益**：silent degradation 变 loud——重大问题 30 分钟内必知道，不用等用户反馈。

### P0-3：IP-level 限流阈值复检 + 兜底
**现状**：100/h IP 是 chompcloud 14700 次事件后压下来的保守值，对家庭/学校 NAT 过紧。
**最低成本干预**：
- IP 限 100/h → **300/h**（家庭 5 口 + 短爆发够用，恶意脚本仍打不过 200/min user limit）。
- 同时把 user limit 200/min → **300/min**（X-User-Id 修好后正常学习也可能贴 200，留余量）。
- 加临时白名单机制：创始人 / 关键测试账号的 user id 直接 bypass（lib/ratelimit.js 加 ADMIN_UIDS env）。
**收益**：推广首小时新用户体验不卡，同时保留对真 bot 的拦截。

### P0-4：Synthetic 学习探针（机器人代用户学）
**现状**：无。
**最低成本干预**：
- 一个 Vercel cron（每 30 分钟）跑：登录测试账号 → 学 3 个词 → 校验进度同步 → 报时延。
- 失败/超时 / 429 → Sentry alert。
- 数据：写一行到 logs（latency + ok/fail），可后续做仪表盘。
**收益**：用户没用的时候也能发现退化；早 30 分钟到几小时发现问题。

---

## 四、推广前 P1（应做，最好别拖到爆发后）

### P1-1：LLM provider key 健康仪表盘
- 至少：DeepSeek 多 key + Gemini 各自的"近 1h 成功率 / p95 延迟 / 429 数"。
- 实现：每次 chat.js 调用记一行到 console.log，结构化字段；Sentry breadcrumb 已有的可以拿来。
- 仪表盘可以是 Vercel logs query + 一个静态 admin 页。

### P1-2：BYO key 设置 UI 入口
- 现在 `localStorage.knowu_byo_keys` 可手工配，但用户不知道。
- 在限流 toast 旁边给一个"用我自己的 key"按钮 → 弹设置层（粘贴 DeepSeek key）→ localStorage → 全局生效，绕过限流。

### P1-3：客户端 batch 并发降一档
- 当前 dynamicCap=5（最多 5 并发），单个 batch 起步打 ~10 个 /api/chat。
- 改成 Cap=3 + soft pacing（每个 task 之间最少 200ms），把 burst 平摊。
- trade-off：first-word 慢 1-2 秒，但稳定性显著好（不出现集中 429 风暴）。

### P1-4：推广前 load test
- 用 [k6](https://k6.io/) 或简单 Node 脚本：50 并发模拟用户、每用户每分钟学 5 词，跑 10 分钟。
- 看 429 触发、provider 失败、p95 延迟。
- 输出报告 → 决定是否在推广前加 keys / 调阈值。

---

## 五、推广后 P2（规模上来再回头做）

- **服务端 session 字段守卫**（SYNC_BACKLOG.md BACKLOG-1）：多设备同时学不同 batch 时仍 last-writer-wins。
- **userId 持续 audit lint**：写一个 `scripts/audit-userid-readers.mjs`，每周/PR 时跑一次，发现新冒出来的"绕开 supabase.auth"路径就告警。
- **每用户 progress_data 大小水位**：定期看 95 分位用户数据有多大，规划分表/分子段加载策略（reviewWordData 几千行后客户端 merge cost 显著）。
- **数据归档**：超过 N 天没活动的用户 progress_data 归档到 cold storage。

---

## 六、识别同类 bug 的 playbook（团队备查）

下次再出"用户感觉慢/卡/数据不对"的时候，按这个顺序查：

1. **是 silent degradation 吗？**——用户看到 error 提示吗？没看到、只是"慢"——一律按 silent degradation 优先级。
2. **Vercel runtime logs**：过去 1h，filter source=serverless, level=error|warning, statusCode=4xx/5xx。看主路径（`/api/chat` `/api/sync` `/api/load` `/api/chat-stream`）。
3. **看日志 JSON 字段**：`hasUid` `rejected` `version_conflict` `circuit OPEN` `cloud read failed`——这五个关键字一看就懂。
4. **如果 429**：进一步看 `hasUid:true/false`——决定是 user limit 还是 IP limit。
5. **如果 sync 异常**：查 Supabase `user_progress` 当前 version + `user_progress_history` 最近 20 条快照，看 wsm/rwd/session.idx 时间线。
6. **跨源契约漂移自查**：怀疑某 vendor 升级时——grep 所有直读该 vendor 内部数据的位置（localStorage / cookie / window），用 SDK 方法替换。
7. **判 risk**：影响所有用户 / 只影响重度用户 / 只影响某一类用户？影响范围决定上线节奏。

---

## 七、一句话总结

**推广不是部署，是把用户体验暴露在 100 倍流量下。**
silent degradation 在小规模下是创始人能盯到的"偶发反馈"；上 100 倍后是用户**直接流失，不会反馈**。
这份清单的全部意义就是：**让用户的"慢"在我们这边变成具体的指标、具体的告警、具体的下一步动作。**
