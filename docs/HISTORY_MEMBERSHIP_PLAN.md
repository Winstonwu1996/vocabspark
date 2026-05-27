# History 模块 · 会员体系规划 v1.1

**日期**:2026-05-26(v1.1 修订)
**作者**:Claude(创始人审定味道 + 权益分布;v1.1 吸收 Codex 4 个 P0 修订)
**v1 → v1.1 变更**:
- ❌ v1 写错:「history 注册即跨设备同步」—— 实际 history 页**没有自己的 sync client**,只 `saveAll()` 到 localStorage,完整 sync 链路在 `pages/vocab.js`。修:先抽 sync client 才能兑现承诺。
- ❌ v1 写错:词本 import 写 `wordList` + tag —— vocab 主资产是 `wordInput` 纯文本行,`wordList` 是学习 session。修:**复用既有 `bridgeQueue.history`** 推荐机制,用户在 vocab 端主动接受。
- ❌ v1 漏:`dailyLensUsage`/`sidekickUsage` 注册用户应进 synced `historyData`(依赖 P0-1 sync client);Sidekick 5/20/无限在 9 步清单里**根本没实现**。
- ❌ v1 漏:tier gate 生命周期 `loading/active/free/error` 未定义,直链 + Atlas embed 在播放器渲染前 gate。
- ❌ v1 估时偏乐观:6 天 → **8.5-10 天**。

**目标**:在不动既有 Stripe / Sync / Supabase 基础设施的前提下,给 history 加 paywall + 引流 vocab 词本闭环。
**核心约束**:零新表 / 零新 sync 路由 / 零新 webhook。**但可以抽既有 sync 客户端逻辑成共享 lib**(不算新基础设施,是去重)。

---

## 1. 现状摸清(v1.1 修正)

| 模块 | 现状 |
|---|---|
| **会员体系** | 已就绪:`user_subscriptions` 表(`tier` `basic`/`pro` + `billing_cycle` + `expires_at`)+ Stripe checkout + webhook。3 tier 价位:游客 / Basic ($20 月) / Pro ($50 月);BYO key 半价 |
| **同步系统(关键修正)** | 服务端 `/api/sync.js` + `/api/load.js` 已运转 ✅;**但客户端 sync 链路 ONLY in `pages/vocab.js`**(debounce + intent + retry + BroadcastChannel 全在那里)。**history 页只 `saveAll()` 写本地,从不主动 push 云端**。所以「注册即跨设备同步 history」目前**不成立** —— 用户只有在打开 vocab 页时才会触发同步推送。 |
| **`bridgeQueue.history`(v1 漏掉!)** | 已就绪。`lib/history-storage.js:405 bridgeReviewToVocab(words, {topicId, priority})` 把推荐词写入 `bridgeQueue.history[topicId]`,在 vocab 端**用户主动接受才合并到 `wordInput`**。设计原则明确:**绝不污染用户主词单**。 |
| **单词本(vocab 主资产)** | `wordInput`(newline-separated 纯文本)是用户主资产;`wordList` 是学习 session 子集;**没有 tag / source / meta 字段**。v1 写错。 |
| **history paywall** | **完全没有**。任何人(游客 / Basic / Pro)都能学全 51 门 |
| **缺的轮子** | (a) **共享 sync client** / history 薄 sync client(P0-1)<br>(b) tier 判断 hook 含完整生命周期(P0-4)<br>(c) 章节限流 + 每日视角配额 + Sidekick 配额(三维)<br>(d) bridgeQueue push 集成(P0-2,推送本身已就绪,只缺 history 端调用)<br>(e) 未登录引导 UI + Upgrade modal |

**结论**:基础设施 ~80% 复用,但 sync 客户端必须先抽出来,否则注册价值卖不掉。

---

## 2. 三 Tier 权益矩阵(锁定 + v1.1 矫正)

| | **游客** | **注册免费** | **Basic** ($20/月) | **Pro** ($50/月) |
|---|---|---|---|---|
| 可学课程数 | **1 门**(magna-carta 试用) | **8 门** G5-G8 白名单 | **41 门**(全 G5-G8) | **51 门**(+ 10 HS/AP 课) |
| 三视角(3 lens)访问 | ✅ 全 3 视角可选 | ✅ 全 3 视角可选 | ✅ 全 3 视角可选 | ✅ 全 3 视角可选 |
| **每日视角配额** | **1 视角/天** | **3 视角/天** | **无限** | **无限** |
| **Sidekick 自由追问配额(v1.1 列入正式实现)** | **5 次/天** | **20 次/天** | ✅ 无限 | ✅ 无限 |
| 跨设备同步学习记录 | ❌ 仅本设备 | ✅ 自动(**依赖 P0-1 sync client 抽出**) | ✅ 自动 | ✅ 自动 |
| **推荐词进 Vocab `bridgeQueue`(v1.1 大改:不写 wordInput!)** | ❌ | ❌ | ✅ 已学课自动 push 到 bridgeQueue,vocab 端用户主动接受 | ✅ + 一键全 51 门 ~850 词全部 push 到 bridgeQueue |
| 笔记 + Mastery Gate + 地图 + 朝代锚点 + EN/中切换 | ✅ 全开 | ✅ | ✅ | ✅ |
| PDF 考前 1 小时速览卡(路线图) | ❌ | ❌ | ✅(波 2) | ✅(波 2) |

### 关键设计原则(v1.1 整理)
1. **三视角永远可选**:tier 不限制视角种类,只限制每日访问数量。
2. **AP/HS 课 Pro-only**:10 门 HS 标签的 AP World U5+ / APUSH 高阶课 Pro-only。
3. **三维独立配额**:课程数 + 每日视角 + Sidekick 三个独立维度。Upgrade modal 必须画清楚三维对照表(Codex P1 强调)。
4. **词本引流 = 推荐,不是导入**(v1.1 核心修正):推到 `bridgeQueue.history`,vocab 端用户**主动接受才合并 wordInput**。这跟 vocab 模块**绝不污染主词单**的既有设计原则一致。
5. **付费 gate 信源唯一**:只信 `user_subscriptions` active 行,localStorage `vocabspark_tier` 只当 UI cache,不当付费判定依据(Codex P0-4)。

---

## 3. 8 门免费课白名单(v1.1 加 1 门 HS preview)

| # | topicId | 年级 | 选它的理由 |
|---|---|---|---|
| 1 | `magna-carta-1215` | G7 | 游客已学的旗舰课,注册后继续解锁 |
| 2 | `tang-song-china` | G7 | **中国主场**,新移民家长最有共鸣 |
| 3 | `ancient-greece-480bce` | G6 | 民主入门,所有路线必学 |
| 4 | `qin-china-221bce` | G6 | **中国主场**,与希腊民主对照 |
| 5 | `mali-empire-1235` | G7 | 非洲帝国,补全大陆视野 |
| 6 | `constitutional-convention-1787` | G8 | US 8 年级核心 |
| 7 | `american-revolution-1776` | G8 | US 8 年级核心 |
| 8 | `civil-war-1861` | G8 | US 8 年级核心 |

**v1.1 新增 · HS/AP 5 分钟样章**:从 `cold-war-1962` 或 `french-revolution-1789` 抽 N1-N3 节点做 5 分钟体验,Free 用户可在课列表里点「试看 5 分钟」按钮预览 HS 内容,end-of-preview 强制升级 Pro。**作用**:让 11 年级 APUSH 家长试用时能摸到「这平台真的有 AP 课」,堵 Pro 漏斗顶部断点(Codex P1)。

**升级钩子**:
- 8 门学完想要剩 33 门 G7/G8 → Basic ($20)
- 试看 cold-war 5 分钟样章触发 Pro 升级 CTA → Pro ($50)
- 11 年级 APUSH 决战年家长想要 cold-war / WWI / WWII → Pro ($50)
- AP World 5 分要 french-revolution / scientific-revolution → Pro

---

## 4. 10 门 Pro-only 课(HS / AP 高阶 + v1.1 未来扩展声明)

按 `lib/history-grade-map.js` 标 `grade: 'HS'` 的 10 门:

| topicId | AP World | APUSH | 备注 |
|---|---|---|---|
| `scientific-revolution` | U5 | — | AP World U5 高频 |
| `enlightenment` | U5 | P3 | AP World + APUSH 双覆盖 |
| `french-revolution-1789` | U5 | — | AP World U5 旗舰 |
| `industrial-revolution-1800` | U5 | — | AP World U5 |
| `scramble-for-africa-1884` | U6 | — | AP World U6 |
| `world-war-one-1914` | U7 | P7 | 双覆盖 |
| `world-war-two-1942` | U7 | P7 | 双覆盖 |
| `cold-war-1962` | U8 | P8 | APUSH 决战课 |
| `decolonization-1960` | U8 | — | AP World U8 |
| `globalization-1995` | U9 | P9 | AP World U9 + APUSH P9 |

判断逻辑:`getGradeTags(topicId).grade === 'HS'` → Pro tier 才能进。

**v1.1 声明(Codex P1 要求)**:未来 `lib/history-grade-map.js` 新增 `grade: 'HS'` 的课**自动归入 Pro-only**。若某门 HS 课内容偏入门,要么改它的 `grade` 标签,要么显式 override(此时需在 `lib/history-tiers.js` 维护 override list)。

---

## 5. 推荐词进 Vocab(v1.1 完全重写 — 复用 bridgeQueue,不污染 wordInput)

**v1 错误**:写 `wordList` + 自定义 tag —— vocab 无此 schema,且会触发 L3 sync guard。

**v1.1 正确路径**:**复用 `lib/history-storage.js:405 bridgeReviewToVocab()`** 既有实现:

```js
bridgeReviewToVocab(words, { topicId, priority: 'must-memorize' });
// → 写入 vocabspark_v1.bridgeQueue.history[topicId]
// → words: [{ word, source: { module:'history', topicId }, contextSentence, priority }]
// → 已在 wordInput 主词单的词不重复推
```

### 触发机制(v1.1 整理)
- **Basic 触发点**:课程通关进 CompletionScreen 时,自动调:
  ```js
  bridgeReviewToVocab(getMustKnowKeyTermsAndFigures(topicId), { topicId, priority: 'must-memorize' });
  ```
  CompletionScreen 顶部 banner:「✅ 本课 12 个考点词已推荐到 Vocab 待选区,下次进 Vocab 主动加入主词单」
- **Pro 触发点**:设置页一键按钮「📚 把全 51 门历史考点词推荐到 Vocab 待选区」,~850 词全部 push 到 `bridgeQueue.history[*]`,**不直接进 wordInput**
- **vocab 端 UX**(已就绪 — 这是既有设计,只需上线时确认 banner 还在):用户进 vocab 页看到「📚 来自 history 的词(N)」提示,可选「加入主词单 / 跳过 / 稍后再说」
- **Free 用户**:CompletionScreen 显示「想把这门课的 12 个考点词推荐到 Vocab 待选区?升级 Basic 解锁」+ 一键升级按钮

### 为什么这是对的
- 跟 vocab 模块**绝不污染主词单**的既有设计原则一致(`lib/history-storage.js:412-415` 设计原则注释)
- 不需改 `wordInput` schema(沿用 string newlines)
- 不需触发 `user_edit_wordInput` intent(用户主动接受时由 vocab 端处理 intent)
- 用户感受:**平台提供推荐,我决定背什么** —— 这才是 history → vocab 引流的正确叙事

---

## 6. 每日视角配额机制(v1.1 整理 + sync 集成)

**Storage(v1.1 加分层)**:
- **游客**:`vocabspark_v1.historyData.dailyLensUsage = { date, usedLensIds }` 仅 localStorage,改时钟可绕(容忍)
- **注册用户**:同字段写入 `historyData`,**走 P0-1 抽出的 sync client 推到云端** —— 跨设备共享配额(家庭账号是好事,多设备个人用户接受)
- **Sidekick 配额同结构**:`historyData.dailySidekickUsage = { date, count }`

**规则**:
- 进入 `/history/<topicId>` 选某个 lens 进入 conversation phase 时(`phase === 'conversation'` **首次到达且产生第一次有效对话** —— 避免秒退误扣),把 `<topicId>:<lensId>` 加入 `usedLensIds`(去重)
- 配额检查:`usedLensIds.length` >= tier 配额 → 升级 modal「你今天的 N 视角配额用完了,升级 Basic 解锁无限」+ 「明天 0 点(本地时区)重置」
- 跨日重置:每次检查时比对 `date` !== 今日 → 重置 `usedLensIds = []` + 更新 `date`
- 时区:用 device localTime(游客易绕但成本意识);注册用户走 sync 后,服务端可加 `last_quota_reset_at` 二次校验(留 P2)

**UI 显示**:
- TopicHero 右上角 EN/中 toggle 旁边加一个小 chip「今日 2/3 视角 · Sidekick 8/20」(免费/游客可见;Basic+ 不显示)
- LensSelector 选 lens 时配额预检
- Sidekick 输入框上方显示剩余次数(每用一次更新)

---

## 7. Tier Gate 生命周期(v1.1 新增 — Codex P0-4)

`useUserTier()` hook 返回 4 状态,UI 必须分别处理:

| 状态 | 触发条件 | UI 行为 |
|---|---|---|
| `loading` | hook 初始化 / `user_subscriptions` 查询 in-flight | **付费 gate 显示骨架屏,绝不放行** |
| `active` | 查到 active 行,返回 `{tier, expiresAt, billingCycle}` | 按 tier 放行 |
| `free` | 已登录但无 active 订阅(或过期) | 按免费 tier gate |
| `guest` | 未登录 | 按游客 tier gate(1 门 + 1 视角/天) |
| `error` | 查询失败(网络 / Supabase 500) | **降级到 `free`(不放过订阅,不卡用户)** + Sentry 告警 |

**绝不能信 `localStorage.vocabspark_tier` 做付费判定**:它只能当 UI cache(首屏 skeleton 期间显示「上次的 tier」减少闪烁),但 mount 后必须以 `user_subscriptions` 实时查询为准。

**直链 + Atlas embed 必须在播放器渲染前 gate**:
- `pages/history/[topicId].js` mount effect:tier `loading` → skeleton;tier 不够 → redirect `/history` + Upgrade modal
- `pages/atlas-lab/[viewId].js` 同理,iframe embed 进 history 同理

---

## 8. 锁定课程的 UI 表现

### CourseBrowser(首页 51 课列表)
- 课卡上 tier 锁标:
  - 🔒 灰底:超出当前 tier
  - 锁标右下角小字「Basic」/「Pro」
- 点 🔒 卡 → 弹 Upgrade modal(contextual 三维对照)
- HS 课的「试看 5 分钟」按钮(Free 用户专享,Codex P1)

### Atlas Lab chip + 单课页
- Atlas 时间轴 chip 同样灰底锁标
- 单课页 mount 时检查 tier:不够则 redirect 到 `/history` + Upgrade modal(不是 toast — 太弱)

### 升级 modal 文案模板(v1.1 三维对照)
```
🔒 这门课需要 {Basic / Pro}

           游客    Free    Basic($20)   Pro($50)
课程数:     1      8       41           51
今日视角:   1      3       无限         无限
Sidekick:   5      20      无限         无限
跨设备同步: ❌    ✅      ✅           ✅
词推荐到 Vocab: ❌  ❌    ✅自动       ✅+一键全套
HS/AP 课:   ❌    ❌      ❌          ✅

[去 /plan 升级 Basic]   [去 /plan 升级 Pro]   [先看 1 分钟课程预告]
```

---

## 9. 实施工程清单(v1.1 重排:8.5-10 天)

| 步 | 改动 | 工程 |
|---|---|---|
| 0 | **抽共享 sync client**(P0-1):从 `pages/vocab.js` 提取 `_doSync` / `_markIntent` / debounce / BroadcastChannel 到 `lib/sync-client.js`;vocab 改用此 lib(确保不回归);history 引入此 lib | 2 天(含 vocab 回归冒烟) |
| 1 | `lib/membership.js` — `useUserTier()` hook 含 5 状态生命周期(`loading/active/free/guest/error`),query `user_subscriptions`,`localStorage.vocabspark_tier` 仅 UI cache | 0.5 天 |
| 2 | `lib/history-tiers.js` — `getTopicAccessTier(topicId)` + `FREE_TOPIC_WHITELIST` 8 门 + `GUEST_TRIAL_TOPIC = 'magna-carta-1215'` + `HS_OVERRIDE_LIST` 空数组留扩展 + `canAccessTopic(topicId, userTier)` | 0.5 天 |
| 3 | `lib/daily-quota.js` — 每日视角 + Sidekick **双配额**统一管理;`getRemainingLenses(tier)` / `getRemainingSidekick(tier)` / `recordLensUsage` / `recordSidekickUsage`;集成 P0-1 sync client(注册用户写入 historyData 走云端) | 1.5 天 |
| 4 | CourseBrowser / Atlas chip / 单课 mount **加 tier gate + 锁标 UI**(含 `loading` skeleton + redirect 防绕过) | 1 天 |
| 5 | LensSelector 配额检查 + TopicHero「今日 N/M 视角 · Sidekick X/Y」chip;Sidekick 输入框上方剩余次数 + 超额拦截 | 1 天 |
| 6 | **Upgrade modal** 组件(三维对照表)+ 复用 `/plan` 跳转 + 「先看 1 分钟预告」按钮 | 0.5 天 |
| 7 | **游客 → 注册引导**:游客学完 magna-carta 通关弹「注册免费拿 7 门新课 + 同步」banner;CompletionScreen 末尾「想换设备继续?注册免费同步」按钮 | 0.5 天 |
| 8 | **HS 5 分钟样章**(Codex P1):cold-war-1962 抽 N1-N3 节点;Free 用户「试看 5 分钟」入口;end-of-preview 强制 Pro CTA | 0.5 天 |
| 9 | `lib/history-to-vocab.js` — `bridgeMustKnowToVocab(topicId)` 调 `bridgeReviewToVocab()`;CompletionScreen 自动调用(Basic+)+ Free 显示升级提示 | 0.5 天 |
| 10 | **Pro 一键全 51 门 push 到 bridgeQueue** + 设置开关「自动推荐」 | 0.5 天 |
| **总** | | **8.5 天**(buffer 到 10 天) |

---

## 10. 风险 + 决策点(v1.1 新增 4 项)

### A. 「试用 1 门 + 必须注册」会否太严
- **风险**:游客 8 秒决定离开率高
- **缓解**:游客玩 magna-carta 完整体验;通关弹注册
- **回滚预案**:跑 2 周数据,游客→注册转化 <15% 改试用 2 门

### B. 每日配额跨日重置 — device localTime 可被改时钟绕
- **判断**:不阻塞。游客绕配额成本高于付费;注册用户走 sync 后服务端可加 `last_quota_reset_at` 二次校验(留 P2)

### C. AP 课 Pro-only 是否伤 G7/G8 家长
- **判断**:HS 标签 10 门确实是高阶。G7/G8 用 Free/Basic 已覆盖主力 41 门 G6-G8 课纲。家长想给孩子提前接触 AP 升 Pro 合理

### D. Bridge 推荐 → Vocab 用户接受率风险(v1.1 新增)
- **风险**:用户从 history 通关到 vocab 主动接受词的转化漏斗会有衰减(可能 30-50%)
- **判断**:这是产品诚实付出的成本。比污染主词单导致用户卸载 vocab 模块的代价低
- **观测**:统计 `bridgeQueue.history` 推送数 vs 用户接受数,若 <20% 接受率,Sidekick 通关时增加「点击直接加入主词单」一步快捷路径

### E. sync client 抽离对 vocab 的回归风险(v1.1 新增 — Codex P0-1 最关键)
- **风险**:`pages/vocab.js` 现有 sync 逻辑跑了一年,有 BroadcastChannel + intent payload-binding + retry + _cloudReadyRef 等微妙时序。抽到 `lib/sync-client.js` 后任何漂移都会破坏 vocab 付费用户体验
- **缓解**:步 0 必须含 vocab 全流程冒烟回归测试(登录 / 多 tab / 删词 / 离线缓存恢复 / 跨设备首次 push 时序);**先 PR 抽出 lib 让 vocab 用,确认 ≥3 天线上无投诉再开 history 集成**
- **回滚**:`lib/sync-client.js` 抽出时保留 `pages/vocab.js` 的原方法注释为兜底;若抽出后出问题立即 revert 步 0,history 步 3 配额降级到仅本地(注册用户跨设备同步功能延后)

### F. 波 1 不能宣传波 2 权益(v1.1 新增 — Codex P1)
- **风险**:若波 1(步 0-7)4 天就上线,但波 2(步 8-10)1.5 天还没做,Basic 用户付了 $20 但拿不到「推荐词到 Vocab」承诺 → 虚假宣传
- **解决**:`/plan` 页 + Upgrade modal 在波 1 期间**完全不显示词本入库 / PDF 速览卡条目**;波 2 上线后再加进去 + 给波 1 用户邮件通知「新功能已上线」
- **替代**:**不分两波,8.5-10 天一次性 ship** —— 用户体验更连贯,推荐这条

### G. 老用户已完成的 history 记录 grandfather(v1.1 新增 — Codex P1)
- **场景**:paywall 上线时已有用户学了 N 门 history(免费时代),其中可能包含未来收费的课
- **规则**:
  - 已完成记录(进度 + 笔记 + completion receipt)**永久可见**
  - 但「重新学(replay)」/ 新视角(尚未学过的 lens) 按当前 tier gate(不够升级)
  - completion 数据不删,通关画面可看,只是无法再次进入对话
- **实现**:`canAccessTopic` 增加分支:`hasCompletedAnyLens(topicId) ? 'view-only' : applyTierGate()`

---

## 11. 下一步

- [ ] 创始人审 v1.1 → 决定是否再轮 Codex 复核 / 直接开工
- [ ] Codex Go 后按 **0 → 10 步顺序实施**(步 0 是阻断,必须先做)
- [ ] **强烈建议不分两波 ship**(避免风险 F)。8.5-10 天整体 ship 一次,Basic / Pro 用户拿到完整承诺权益。若必须先收钱,则 `/plan` + Upgrade modal 在波 1 隐藏波 2 条目

---

**最后更新**:2026-05-26(v1.1 吸收 Codex 4 个 P0:sync client 抽离 / bridgeQueue 复用 / 双配额含 Sidekick / tier gate 生命周期;估时 6 天 → 8.5-10 天)
