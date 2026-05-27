# Codex 复核 prompt — History 会员体系 v1.1 delta(P0 closure check)

你是独立代码审核员。这是 **v1.1 delta 复核**,不是商业模型重审。**唯一问题**:commit `a177a65` 是否真正关闭上轮 Codex 复核给出的 4 个 P0,使项目可以进入 Step 0 实施。

不要重新讨论 tier 矩阵 / 8 门白名单 / Pro 价格等 v1.1 没改的设计决定 —— 那些上轮已 Go with adjustments,本轮只关心 P0 是否实质关闭、文档措辞是否还有 implementation contract 模糊处。

## 审核范围(单 commit diff)

```bash
git diff 43d9d83..a177a65 -- docs/HISTORY_MEMBERSHIP_PLAN.md
```

辅助参考(只读,验证 v1.1 的技术假设是否成立):
- `pages/vocab.js` — sync 客户端逻辑现状(`_doSync` / `_markIntent` / BroadcastChannel / `_cloudReadyRef`)
- `lib/history-storage.js` — `saveAll()` + `bridgeReviewToVocab()` 既有实现
- `lib/progressMergePolicy.js` — sync 字段守卫,验证 `historyData.dailyLensUsage` 等新字段是否会被 merge 策略接受
- `lib/history-grade-map.js` — 验证 HS 标签 10 门覆盖是否仍正确

## 上轮 4 个 P0 速览(只为定位,不必复述)

- **P0-1** history 注册同步不成立:`pages/history.js` 只 `saveAll()` 写本地,完整 sync client 只在 `pages/vocab.js`
- **P0-2** 词本 import 写错模型:不能写 `wordList + tag`;应该复用 `bridgeQueue.history`
- **P0-3** daily lens + Sidekick 配额不完整:游客 localStorage 可容忍,注册用户应入 synced `historyData`;Sidekick 5/20/无限在 v1 9 步清单根本没实现
- **P0-4** tier gate 生命周期未定义:`loading/active/free/error`,付费 gate 不能信 localStorage cache,直链 + Atlas embed 必须在播放器渲染前 gate

## 复核问题(请逐条回答)

### Q1 — P0-1 sync client 抽离方案是否足够
查 v1.1 §1(修正现状)+ §9 步 0(抽 `lib/sync-client.js` 2 天 + 3 天观察期)+ §10 风险 E(回归风险)。

判定要点:
- 步 0 是否被列为**阻断步骤**(任何后续步依赖它,且 vocab 不能回归)
- 「vocab 先用、确认 ≥3 天无回归再开 history」是否真的写进了实施合同(不是只放在风险章)
- 抽 lib 时 `pages/vocab.js` 那些时序关键的引用(`_cloudReadyRef` / intent payload-binding / BroadcastChannel cross-tab)是否被点名要求保留语义不变
- 若 sync client 抽出后 vocab 出现任何回归,v1.1 的 revert 路径是否清晰
- **是否还可能在文档其它地方残留「注册即同步 history」的虚假承诺**(请 grep 全文)

→ 输出:**closed / partially closed / not closed**,附 1 句理由 + 必须改的具体段落(若有)

### Q2 — P0-2 bridgeQueue 复用是否彻底
查 v1.1 §1(`bridgeQueue.history` 行)+ §2 矩阵词本行 + §5 完全重写 + §9 步 9 / 步 10。

判定要点:
- 全文是否**完全不再出现** `wordList + tag` / `wordInput` 直接写入这类 v1 错误模型(grep `wordList` / `tag` / `wordInput` 在 §5 上下文)
- §5 是否准确引用 `bridgeReviewToVocab()` 签名(`{topicId, priority}`)和已就绪 vocab 端 UX(用户主动接受)
- Basic 自动 push + Pro 一键 850 词 push 是否都明确说**只 push 到 bridgeQueue**,不直接进 wordInput
- §10 风险 D 估接受率 30-50% 是否合理(若 <20% 备选方案是否描述清楚)
- 是否需要在 §5 / §9 步 9 显式声明「不需触发 `user_edit_wordInput` intent」—— v1.1 提了一句,够不够清晰

→ 输出:**closed / partially closed / not closed** + 必须改的段落(若有)

### Q3 — P0-3 双配额是否完整且 sync 集成
查 v1.1 §2 矩阵(每日视角 + Sidekick 两行)+ §6 配额机制(含 Sidekick)+ §9 步 3(`lib/daily-quota.js` 1.5 天双配额)+ §9 步 5(UI 含 Sidekick 剩余次数)。

判定要点:
- Sidekick 配额是否在**矩阵 / 机制 / 工程 / UI 四处都有对应**(v1 在矩阵有但工程清单漏)
- 注册用户 `dailyLensUsage` + `dailySidekickUsage` 写入 synced `historyData` 这条是否清楚依赖步 0 完成
- 扣减时机定义「conversation phase 首次到达且产生第一次有效对话」—— 「第一次有效对话」的判定标准在文档里是否够具体(避免实施时歧义)
- **多 tab 竞态 / localStorage 清空绕过 / 游客→注册迁移配额继承** 三个 v1 漏点是否在 v1.1 解了 / 显式接受风险了 / 还是仍漏
- `lib/progressMergePolicy.js` 的字段守卫策略是否允许 `historyData.dailyLensUsage` / `dailySidekickUsage` 这两个新字段直接 merge(请实地检查 progressMergePolicy,若需新增字段允许 list 应写进步 3 任务)

→ 输出:**closed / partially closed / not closed** + 仍需补的实施合同条目

### Q4 — P0-4 tier gate 生命周期是否 fail-closed
查 v1.1 §7 新增章节(5 状态表)+ §8 单课页 mount tier gate + §9 步 1 hook + §9 步 4 单课 mount。

判定要点:
- 5 状态 `loading/active/free/guest/error` 在 hook / UI / 直链 / Atlas embed **四个层面**是否都有对应行为(尤其 `error` 降级到 `free` 是否一致 fail-closed —— 即「错误不放行 Pro 内容,但不卡免费用户」)
- `loading` 期 skeleton「绝不放行」是否在所有付费 gate 路径(CourseBrowser 卡 / Atlas chip / 单课 mount / Lens 选择)都被强制
- 「localStorage `vocabspark_tier` 仅 UI cache 不当付费判定依据」是否在文档里明确到任何工程师读了不会误用
- 直链 `/history/<HS-course>` 和 Atlas embed iframe 进入 HS 课的 gate 路径是否分别描述(不是只说一句「同理」)
- 是否需要补:tier 从 `active` 切到 `free`(退费 / 过期 webhook 到达)时,用户**正在学的 Pro 课**该如何处理(继续允许学完当前 session?立刻踢出?)

→ 输出:**closed / partially closed / not closed** + 必须补的状态转换边界

### Q5 — 是否还有新的 P0
v1.1 新增内容(§7 tier gate 章 / §9 步 0 sync 抽离 / §10 风险 E F G / §3 HS preview)是否引入新结构性问题:

- 步 0 抽 sync lib 本身是否风险 > 收益(2 天 + 3 天观察 = 5 天硬阻断;若失败需要 revert)
- §10 风险 G 老用户 grandfather「完成记录可见但 replay 按 tier gate」—— 数据模型是否支持(`completedTopics` / `learningReceipts` 是否能区分「完成过的 lens」vs「未完成的 lens」)
- §3 HS 5 分钟样章「end-of-preview 强制 Pro CTA」是否会破坏 `lib/history-runtime.js` 的 step engine 状态机(中途强制中断)
- §10 风险 F 建议不分波 ship 8.5-10 天 —— 若一次性 ship,11 步任何一步阻断会卡整盘,vs 分波各自风险

→ 输出:有新 P0 / 无新 P0;若有,列出新 P0 详情

## 输出格式(严格遵守)

```md
## VERDICT
[ ] Go to Step 0
[ ] Go with minor doc adjustments
[ ] No-Go

## P0 Closure Check
P0-1: closed / partially closed / not closed — <1 句理由>
P0-2: closed / partially closed / not closed — <1 句理由>
P0-3: closed / partially closed / not closed — <1 句理由>
P0-4: closed / partially closed / not closed — <1 句理由>

## New P0 Found (if any)
- ...

## Remaining Required Edits Before Implementation
- §X: <具体改什么、改成什么>
- ...

## Implementation Contract Ambiguities
（implementation contract 仍模糊的措辞,需要写得更硬,但不阻塞 Go）
- §X 第 N 段:「<原文>」→ 建议改成「<更硬的措辞>」
- ...
```

## 关键提示

- 这是 P0 closure check,不是重新挑刺。**「partially closed」必须给出明确的「补这句话就 closed」**,不要泛泛而谈
- 若 4 个 P0 全 closed + 无新 P0 → 必须 Go to Step 0;不要因为措辞不够硬就降到 Go with minor adjustments(那些归入 Implementation Contract Ambiguities 即可)
- 若有任何 1 个 P0「not closed」→ 必须 No-Go,并明确说要回 v1.2
- 「Go with minor doc adjustments」适用情况:4 个 P0 全 closed,但某段措辞松到会让实施工程师踩坑,**改文档就能 Go**(不需要重新跑商业讨论)
