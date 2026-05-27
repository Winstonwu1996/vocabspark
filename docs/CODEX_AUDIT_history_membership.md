# Codex 审核 prompt — History 模块会员体系 v1（实施前规划复核）

你是独立产品 + 代码审核员。请审核 VocabSpark **history 模块会员体系规划 v1**（`docs/HISTORY_MEMBERSHIP_PLAN.md`），目标是给出 **Go / No-Go** 判定。这是「实施前」规划审核，不是代码 diff 审核 —— 重点是 tier 划分合理性、机制设计安全性、与既有基础设施的契合度、以及 9 步实施工程清单的可行性。

## 背景：要做什么、为什么

现状：history 模块从首页 hero 到 51 门课全程**完全免费**，带来 2 个核心问题：
1. **游客学习记录不能跨设备保存**（只在 localStorage，关浏览器/换设备就丢）
2. **拉不开会员级别**（vocab 已有 Basic/Pro tier 跑了一年，history 这边吃白食，没办法把 history 转成付费产品）

规划目标：在 **不动既有 Stripe / Sync / Supabase 基础设施** 的前提下，给 history 加 paywall + 引流到 vocab 词本闭环。零新表、零新 sync 路由、零新 webhook。

核心约束（实施时铁律，请验证规划已符合）：
- 复用 `user_subscriptions` 表 + `/api/sync.js` + `vocabspark_v1` localStorage blob
- 不碰 `user_progress` / `backups/`（PII）
- 不新建 schema migration
- 不破坏现在 history 模块正常课程播放器逻辑（player 已有 21 个 commits 在线上稳定跑）

## 审核范围（单文件）

```
docs/HISTORY_MEMBERSHIP_PLAN.md      # 唯一审核对象，~206 行
```

辅助参考（**只读，不要让我改这些**）：
- `lib/stripe-prices.js` — 现有 Stripe 价位 + tier 映射（basic / pro + BYO 半价变体）
- `pages/api/stripe/webhook.js` — 现有 `user_subscriptions` 写入逻辑
- `pages/api/sync.js` + `lib/progressMergePolicy.js` + `lib/syncMerge.js` — 现有同步基础设施
- `lib/history-storage.js` — `historyData` 已在 `vocabspark_v1` 内、已被 sync 覆盖
- `lib/history-grade-map.js` — `getGradeTags(id).grade === 'HS'` 用于 AP Pro-only 判断
- `pages/vocab.js` + `lib/learnStatus.js` — vocab `wordInput`/`wordList` 现状
- `lib/history-topics.js` — 51 门 topic 注册表

## 我已经验证过的（不必重复，请聚焦设计正确性）

- 现有 `user_subscriptions` 已有 `tier`（`basic` / `pro`）+ `billing_cycle` + `expires_at` + `status='active'` 字段，**无需 schema 改动**
- `vocabspark_v1.historyData` 已在 sync blob 内，注册用户已被同步覆盖
- 8 门免费白名单课在 `lib/history-topics.js` 全部 `available: true`，可立即使用
- 10 门 Pro-only HS 课通过 `getGradeTags(id).grade === 'HS'` 精确匹配
- Stripe 价位在 `lib/stripe-prices.js`：basic $20/月、pro $50/月，BYO 半价；webhook 已落 `user_subscriptions`

## 请重点审核（按风险排序）

### **P0 — 设计正确性 + 安全性（最高风险，影响是否能 ship）**

**P0-1 Tier 矩阵合理性（§2）**
- 三视角永远开放、按「每日视角配额」付费墙 —— 这个设计是否真的能拉开 Free / Basic 差距？Free 3 视角/天 是否过于宽松？参考点：8 门免费课 × 平均 3 视角 = 24 视角 ≈ 8 天能学完，之后必须付钱或停学。
- 课程数维度（8 / 41 / 51）与视角配额维度（1 / 3 / 无限）独立 —— 这两个限流维度叠加是否会出现「我付了 Basic 但还是被某个机制挡住」的反直觉情况？请走一遍 Basic 用户的 user journey 找有没有隐藏卡点。
- Sidekick 配额（5 / 20 / 无限）独立第三维 —— 三个独立配额会不会复杂到用户算不清自己能用啥？是否需要在升级 modal 里画清楚 3 个维度对照。
- **关键质疑**：把「每日视角配额」作为付费拉差距的主轴，本质是限制「学习强度」。如果一个免费用户特别勤奋（每天用满 3 视角），他在 8 天内学完所有免费内容，转化触发点设计是否在 8 天这个节点上有清晰 CTA？

**P0-2 8 门免费课白名单的均衡性（§3）**
- 2 G6 + 3 G7 + 3 G8 = 8，中国 2 + 西方古代 1 + 中世纪 2 + 美国史 3。这个比例是否会让某个年级家长感觉「我家娃这级别没东西可学」？
- 8 门没有任何 HS / AP 课 —— 11 年级 APUSH 决战家长试用免费版会感觉「全是初中内容」直接弃用，这会不会卡死最高价 Pro 转化漏斗的入口？
- 是否应该把 1-2 门「Pro 课程的简化预览版」也放免费区做诱饵（vs 现在「Pro 内容完全看不到」）？

**P0-3 AP 课 Pro-only 的判定 + 公平性（§4）**
- 用 `getGradeTags(t).grade === 'HS'` 做单一判断 —— 跑一遍 `lib/history-grade-map.js` 数据，确认这 10 门确实是 HS 标签、且没有遗漏（比如某门标了 `grade: 'HS'` 但不属于这 10 门 AP 课的）。
- 若 `lib/history-grade-map.js` 后续有新增 HS 课，是否会自动归入 Pro-only？这是否是预期行为？
- HS 标签里有没有可能存在「严格说 HS 但内容偏入门」的课，把它锁在 Pro 是否会让 G8 跳级生家长抱怨？
- 反之，G8 标签里是否有内容深度其实够得上 HS 的课，把它放在 Basic 是否让 Pro 价值打折？

**P0-4 每日视角配额机制的设计漏洞（§6 + §9 风险 B）**
- 跨日重置用 `device localTime` —— 规划已承认「改时钟可绕」但判断「成本高于付费」。**请挑战这个判断**：用户其实只需要改一次手机时区（不是真改时间），就能瞬间获得跨日重置。若中学生在自家手机操作零成本，这个口子有多严重？
- `usedLensIds` 去重逻辑：「同一 lens 反复进只算一次」。攻击场景：用户进了 Luther 视角学完，第二天想换 Erasmus，但 `usedLensIds` 还在；如果用户**清 localStorage** 也能重置，规划是否考虑过？这跟改时钟是同一类绕过。
- 配额写入时机「进入 conversation phase 第一次到达时」—— 如果用户进了 conversation 然后秒退（误点），是否会扣配额？规划没说，这会被用户抱怨。
- 多 tab 竞态：用户在两个 tab 同时进入两个不同 lens，两次写入 `usedLensIds` 是否有 race（数组追加非原子）？
- 注册用户的 `dailyLensUsage` 走 sync，会带来「设备 A 用了，设备 B 也算用了」—— 这是预期还是 bug？跨设备共享配额对家庭账号是好事，对个人多设备用户是坏事。请判断这个行为对目标用户群的影响方向。
- 游客（无登录、无 sync）的 `dailyLensUsage` 只在 localStorage —— 注册 hook 上线后，从「游客时 1 视角/天」迁移到「注册免费 3 视角/天」时，已用配额如何继承？规划没说。

**P0-5 vocab 词本 schema 不匹配（§5 + §9 风险 E）**
- **严重发现**：vocab 现状 `wordInput` 是 newline-separated 的纯字符串（见 `pages/vocab.js:2704-2716`，处理 `d.wordInput.split(/\n/)`），`wordList` 是 `string[]`。**没有任何 tag / source / meta 字段**。
- 规划说「新词 tag 为 `history-<topicId>`（便于将来分组复习）」—— 这个 tag 没地方写。Codex 必须给出具体存储方案推荐，至少 3 个候选：
  - (a) 加平行 map `historyWordTags: {[word]: topicId}` 在 `vocabspark_v1` 顶层
  - (b) 在 `wordInput` 行末加注释（如 `prelate // history-reformation-1517`），但要改 splitter
  - (c) 加独立 `historyImportedWords: [{word, topicId, ts}]` 数组（导入历史）
  - 评估每个方案对 sync / progress merge / 历史用户兼容的影响
- **次级风险**：`wordInput` 有 L3 sync intent (`user_edit_wordInput`)，自动导入需要正确触发这个 intent，否则会被 `lib/progressMergePolicy.js` 的字段守卫拒绝 / 回滚。规划只字未提，但这是上线必踩。
- Pro「一键全 51 门 ~850 词预加载」会让 `wordInput` 瞬间变成 850 行（vs 现在用户可能只有 20-50 行）—— 这对 vocab 现有 UI（词表展示、删词确认 modal 阈值 ≥3 弹窗）会有什么副作用？现有「删 ≥3 弹 ConfirmModal」会不会因为用户后悔批量导入而频繁触发？

**P0-6 复用 user_subscriptions 表的隐含假设**
- 规划假设「`useUserTier()` 直接读 `user_subscriptions` active 行返回 tier」。但 user_subscriptions 写入是 webhook 异步的，**未登录用户 / 已退费用户 / 订阅过期但未 webhook 同步用户** 的 tier 该返回什么？规划只说返 `'guest'/'free'/'basic'/'pro'`，没说降级路径。
- vocab 已有等价 hook 吗（请 grep `useUserTier` / `useTier` / `useSubscription`）？history 这边要复用还是新建？复用风险（vocab 改 hook 行为会连带影响 history）vs 新建风险（两套 tier 判断逻辑漂移）哪个高？

### **P1 — 实施工程清单可行性（§8，9 步 6 天）**

**P1-1 工程估时合理性**
- 每步估时是否合理？特别是：
  - 步 3「每日视角配额」1 天 —— 含 sync 集成、跨日重置、UI 显示、配额扣减、race 处理，1 天够吗？
  - 步 6「Upgrade modal 0.5 天」—— 含 3 种 contextual 文案（课锁 / 配额满 / Free 词本提示）+ 复用 /plan 跳转，0.5 天够吗？
  - 步 8「词本 import pipeline 1 天」—— 含 schema 设计（P0-5 未解决）+ 自动调用 + 升级提示 + 设置开关，1 天够吗？
- 6 天总估时是否偏乐观 50%？根据 vocab 类似规模 feature 的历史耗时给个对比。

**P1-2 分两波 ship 的风险（§10）**
- 波 1（步 1-7，4.5 天）= 「能开始收钱」 —— 但此时词本入库还没做，Basic 用户付了 $20 但拿不到「必考词自动入库」承诺。规划没说 Basic 介绍页 / 升级 modal 在波 1 期间是否要隐藏这个承诺。如果不隐藏，是虚假宣传；如果隐藏，波 1 vs 波 2 用户看到不同 Basic 描述会引起客服困惑。
- 波 2（步 8-9，1.5 天）的 buffer 是否够吸收 P0-5 的 schema 设计 + 兼容性测试？如果 Codex 判定 P0-5 需要 1 天单独设计，波 2 就要扩到 2.5+ 天。
- 是否应该有「波 0：上线前数据预热」—— 现有所有 8 门免费白名单课的 notebook 是否真的有 mustKnow keyTerms（如果某门 notebook 没 keyTerms，自动导入会写空数组，触发 UX bug）？请采样 3 门免费课 notebook 验证。

**P1-3 与现在 in-flight 工作的冲突**
- 当前 main 有未 commit 的工作（`docs/HISTORY_MEMBERSHIP_PLAN.md` 本身 + `.claude/scheduled_tasks.lock` 删除）。实施前应该 commit 啥状态、波 1 起步 commit 应该长啥样？
- 若实施期间有别的紧急 bug 修，会不会污染 9 步的 commit history（建议是否分支化）？

### **P1 — UX / 文案 / 转化**

**P1-4 Upgrade modal 文案合理性（§7）**
- 现有模板太短，没有「为什么这门课值 Basic 价值」的产品说明。用户从「点了锁课」到「升级」的转化漏斗里，这个 modal 是关键转化点 —— 它的信息密度够吗？
- 「先看看其他课」按钮把用户引回选课页，是否给 sales 致命打击？应该改成「先看 Sidekick 演示 / 看 1 分钟课程预告」？
- 三 tier 价位对比是否在 modal 里就该出现，还是只在 /plan 页才有？

**P1-5 游客 → 注册引导（步 7）**
- 游客只玩 magna-carta 一门，「玩完弹注册」—— 但 magna-carta 是 G7 唯一旗舰，对 G6 / G8 / HS 兴趣点的家长都不对口。游客试用门是否应该按推断的来访动机改一改（例如来自 Atlas Lab 进入的用户、来自首页 Pro hero 进入的用户分别给不同试用门）？过度复杂还是必要分流？
- 「通关时弹注册」vs「学到一半弹」哪个转化更高？规划选了「通关」可能错过疲劳掉线的用户（这些用户根本到不了通关）。

**P1-6 必考词导入对 vocab 体验的冲击（§5）**
- Basic 自动导入每门课 12 词 —— 用户从「我的词本是我自己加的」突然变成「平台往我词本塞东西」，心智冲击是否被低估？应该默认 OFF + 提示用户开，还是默认 ON + 提示用户关？
- Pro 一键 850 词预加载 —— 这是 Pro 价位的核心卖点之一，但同时也是「最破坏 vocab 词本干净度」的功能。是否应该写到一个 sandbox 子集（如 `historyImportedWords`）而非主 `wordInput`，用户在 vocab 端可以选择「混入主词表 / 单独学」？

### **P2 — 路径完整性 + 边界**

**P2-1 Atlas Lab 入口的 tier 判断**
- Atlas Lab chip 锁定后用户怎么知道哪门可学？灰底锁标够吗？是否要按 tier 过滤地图视图（vs 全显示 + 锁标）？
- 用户从 Atlas Lab 进入锁定课，是否能正确触发 modal 而不是先 redirect 再 toast（双跳跃感很差）？

**P2-2 跨 module（vocab/history/atlas）tier 一致性**
- vocab 现有 tier 行为如果与 history 新增 tier 行为有冲突（例如 vocab 每日单词数限制 vs history 每日视角限制可能给同一用户不一致的「今日剩余」体验），怎么协调？

**P2-3 未来扩展性**
- 若后续要加「年度优惠」「家庭账号」「学校批量」，9 步规划是否提前留口？还是会硬性返工？
- 课程数（8/41/51）若 6 个月后增加到 70 门，免费白名单 8 门是否需要重选？规划是否有 routine review 计划？

### **安全/回归基线**

- 无 PII 新接触；无新表；无新 sync 路由；无新 webhook
- 不破坏 vocab 现有付费流程（vocab 用户付费仍然走原 webhook，history 只读 tier 不写）
- 不破坏 history 现有播放器逻辑（21 个 commit 已在线上跑）
- 游客现在能用的 51 门**学过的进度**在 paywall 上线时如何处理（强迫归零 vs 继承已学，规划没说）

## 输出格式

请返回结构化判定：

```
## VERDICT
[ ] Go — 9 步规划方向正确，按文档实施
[ ] Go with adjustments — 方向正确但需要在实施前修补这些点
[ ] No-Go — 有结构性问题，规划需要重写

## P0 决断（必须解决才 ship）
1. [P0-X] <短标题>
   - 风险:
   - 推荐改法:
   - 工程影响（增加几天）:
2. ...

## P1 调整建议（强烈建议但可上线后迭代）
...

## P2 备注（nice-to-have）
...

## 你认为规划遗漏的角度
（任何上述大纲没覆盖的视角，特别是产品 / 法务 / 客服 / 长期路线）
```

## 关键提示

- 这是「实施前」规划审核，请尽量在**真正写代码前**抓出设计缺陷，节省返工
- 请明确区分「这点必须改否则会出 bug」vs「这点是品味选择，创始人可以坚持当前方向」
- vocab 模块是单人 ops 跑了一年的，请尊重既有抽象（`wordInput` schema 不动是硬约束 —— 但如果你判断必须破例，请明确论证）
- 若 P0 项超过 3 个，倾向给 No-Go；3 个以内可以 Go with adjustments
