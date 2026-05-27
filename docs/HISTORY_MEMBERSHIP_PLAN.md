# History 模块 · 会员体系规划 v1

**日期**:2026-05-26
**作者**:Claude(创始人审定味道与权益分布)
**目标**:在不动既有 Stripe / Sync / Supabase 基础设施的前提下,给 history 模块加 paywall + 引流 vocab 词本闭环。
**核心约束**:零新基础设施。复用 `user_subscriptions` 表、`/api/sync.js`、`vocabspark_v1` localStorage blob。

---

## 1. 现状摸清

| 模块 | 现状 |
|---|---|
| **会员体系** | 已就绪:`user_subscriptions` 表(`tier` `basic`/`pro` + `billing_cycle` + `expires_at`)+ Stripe checkout + webhook。3 tier 价位:游客 / Basic ($20 月) / Pro ($50 月);BYO key 半价 |
| **同步系统** | `/api/sync.js` 已运转。**关键发现:history 数据本来就存 `vocabspark_v1.historyData`,跟 vocab 共用同一 blob,已被 sync 同步**;游客只有 localStorage,关浏览器/换设备会丢 |
| **单词本** | 跟 history 共用 `vocabspark_v1`,通过 vocab 接口写入 `wordList`,已被 sync 同步 |
| **history paywall** | **完全没有**。任何人(游客 / Basic / Pro)都能学全 51 门 + 4 即将上线 |
| **缺的轮子** | tier 判断 hook / 章节限流 / 每日视角配额 / vocab 词本 import pipeline / 未登录引导 UI |

**结论**:基础设施 100% 复用,3 张新表 0 个,只在 history 加 3 个薄层。

---

## 2. 三 Tier 权益矩阵(锁定)

| | **游客** | **注册免费** | **Basic** ($20/月) | **Pro** ($50/月) |
|---|---|---|---|---|
| 可学课程数 | **1 门**(magna-carta 试用) | **8 门** G5-G8 白名单 | **41 门**(全 G5-G8) | **51 门**(+ 10 HS/AP 课) |
| 三视角(3 lens)访问 | ✅ 全 3 视角可选 | ✅ 全 3 视角可选 | ✅ 全 3 视角可选 | ✅ 全 3 视角可选 |
| **每日视角配额** | **1 视角/天** | **3 视角/天** | **无限** | **无限** |
| 跨设备同步学习记录 | ❌ 仅本设备 | ✅ 自动 | ✅ 自动 | ✅ 自动 |
| **必考词自动入 Vocab 词本** | ❌ | ❌ | ✅ 已学课自动 | ✅ + 一键全 51 门 ~850 词预加载 |
| Sidekick 自由追问 | 5 次/天 | 20 次/天 | ✅ 无限 | ✅ 无限 |
| 笔记 + Mastery Gate + 地图 + 朝代锚点 + EN/中切换 | ✅ 全开 | ✅ | ✅ | ✅ |
| PDF 考前 1 小时速览卡(路线图) | ❌ | ❌ | ✅ | ✅ |

### 关键设计原则
1. **三视角永远可选**(创始人本轮调整):tier 不限制视角种类,只限制**每日访问数量**。这样付费门槛是「想多学」,不是「想完整学」,跟教学价值观一致(三视角是产品核心,不能阉割)。
2. **AP/HS 课 Pro-only**(创始人本轮调整):10 门 HS 级别的世界史/APUSH 高阶课(scientific-revolution / enlightenment / french-revolution / industrial-revolution / scramble-for-africa / world-war-one / world-war-two / cold-war / decolonization / globalization)只对 Pro 开放;APUSH/AP World 决战年家长付高价,这是真实付费意愿差异。
3. **每日配额 vs 课程数 两个独立限流维度**:课程数是「内容覆盖」付费墙,每日视角是「学习强度」付费墙。Free 用户 3 视角/天 = 大约能在 1 周内把 8 门免费课的默认视角全过一遍,过完想要 41 门 + 无限视角 = Basic。

---

## 3. 8 门免费课白名单(均衡覆盖 + 中国主场 + 美国必学)

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

**分布**:2 G6 + 3 G7 + 3 G8 = 8;**中国主场 2 + 西方古代 1 + 中世纪 2 + 美国史 3**。注册的家长立刻感受到平台课纲全覆盖。

**升级钩子**:
- 8 门学完想要剩 33 门 G7/G8 → Basic ($20)
- 11 年级 APUSH 决战年家长想要 cold-war / WWI / WWII → Pro ($50)
- AP World 5 分要 french-revolution / scientific-revolution → Pro

---

## 4. 10 门 Pro-only 课(HS / AP 高阶)

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

---

## 5. 必考词自动入 Vocab 词本(Basic+ 专享)

**数据基础(已就绪)**:
- 每门 notebook `preview.keyTerms: [{cn, en}]` 平均 8-12 词/课
- 每门 notebook `preview.keyFigures: [{nameCn, nameEn, ipa, audioKey, mustKnow}]` 平均 5-7 角色
- 全 51 门 ≈ 600+ 考点词 + 250+ 历史人名(带 IPA + 真人发音 audio key)

**写入路径**:复用 vocab 的 `vocabspark_v1.wordList` 结构,新词 tag 为 `history-<topicId>`(便于将来分组复习)

### 触发机制
- **Basic**:
  - 课程通关进 CompletionScreen 时,自动调 `importTopicWords(topicId)`:把 `mustKnow:true` 的 keyTerms + keyFigures.nameEn 推到 `wordList`(去重)
  - 通关画面顶部 banner「✅ 本课 12 个考点词已加入 Vocab 词本」
  - 可在设置里关掉「自动入库」(默认开)
- **Pro 额外**:
  - 设置页一键按钮「📚 把全 51 门历史考点词加入 Vocab 词本」,~850 词直接进词本待学
  - 适合 11 年级 APUSH 决战年家长「我女儿暑假 60 天要刷完全部考点词」
- **Free 用户**:CompletionScreen 显示「想把这门课的 12 个考点词自动加入 Vocab 词本?升级 Basic 解锁」+ 一键升级按钮

---

## 6. 每日视角配额机制

**Storage**:`vocabspark_v1.historyData.dailyLensUsage = { date: 'YYYY-MM-DD', usedLensIds: [...] }`

**规则**:
- 进入 `/history/<topicId>` 选某个 lens 进入 conversation phase 时(`phase === 'conversation'` 第一次到达),把 `<topicId>:<lensId>` 加入 `usedLensIds`(去重 — 同一 lens 反复进只算一次)
- 配额检查:`usedLensIds.length` >= tier 配额 → 升级 modal「你今天的 N 视角配额用完了,升级 Basic 解锁无限」+ 「明天 0 点(本地时区)重置」
- 跨日重置:每次检查时比对 `date` !== 今日 → 重置 `usedLensIds = []` + 更新 `date`
- 时区:用 device localTime,不强同步服务端(简单,游客也能用)

**UI 显示**:
- TopicHero 右上角 EN/中 toggle 旁边加一个小 chip「今日 2/3 视角」(免费/游客可见;Basic+ 不显示)
- LensSelector 选 lens 时,如果选这个会爆配额,显示「⚠️ 这是你今天第 4 个视角,升级 Basic 才能继续」

---

## 7. 锁定课程的 UI 表现

### CourseBrowser(首页 51 课列表)
- 课卡上 tier 锁标:
  - 🔒 灰底:超出当前 tier(对 Free 用户:33 门 Basic + 10 门 Pro;对 Basic 用户:10 门 Pro)
  - 锁标右下角小字「Basic」/「Pro」
- 点 🔒 卡 → 弹 Upgrade modal(contextual:「这门课需要 Basic,$20/月解锁 41 门 G5-G8 + 跨设备同步 + 词本入库」)

### Atlas Lab chip + 单课页
- Atlas 时间轴 chip 同样灰底锁标
- 单课页 mount 时检查 tier:不够则 redirect 到 `/history` + toast「这门课需要 Basic」

### 升级 modal 文案模板
```
🔒 这门课需要 {Basic / Pro}

{Basic}:$20/月,解锁:
· 全 41 门 G5-G8 课程 (现在你只能学 8 门)
· 跨设备同步学习记录
· 必考词自动加入 Vocab 词本
· Sidekick 无限追问

{Pro}:$50/月,Basic 全部 + 额外:
· 10 门 AP World / APUSH 高阶课
· 一键全 51 门 ~850 历史词预加载到 Vocab

[去 /plan 升级]    [先看看其他课]
```

---

## 8. 实施工程清单(零新基础设施)

| 步 | 改动 | 工程 |
|---|---|---|
| 1 | `lib/membership.js` — `useUserTier()` hook:从 `user_subscriptions` 拿 active tier;返回 `'guest'/'free'/'basic'/'pro'` | 0.5 天 |
| 2 | `lib/history-tiers.js` — `getTopicAccessTier(topicId)` (Pro/Basic/Free) + `FREE_TOPIC_WHITELIST` 8 门 + `GUEST_TRIAL_TOPIC` = `'magna-carta-1215'` + `canAccessTopic(topicId, userTier)` | 0.5 天 |
| 3 | **每日视角配额**:`lib/daily-lens-quota.js` — `getTierLensQuota(tier)` / `recordLensUsage(topicId, lensId)` / `getRemainingLenses(tier)` + storage 读写 + 跨日重置 | 1 天 |
| 4 | CourseBrowser / Atlas chip / 单课 mount **加 tier gate + 锁标 UI** | 1 天 |
| 5 | LensSelector 加配额检查 + TopicHero 显示「今日 N/M 视角」chip | 0.5 天 |
| 6 | **Upgrade modal** 组件 + 复用 `/plan` 跳转 | 0.5 天 |
| 7 | **游客 → 注册 引导**:游客学完 magna-carta 通关弹「注册免费拿 7 门新课 + 同步」banner;CompletionScreen 末尾「想换设备继续?注册免费同步」按钮 | 0.5 天 |
| 8 | `lib/history-to-vocab.js` — `importTopicWords(topicId)` 读 notebook → 写 vocab wordList(打 tag);CompletionScreen 自动调用(Basic+)+ preview 顶部「一键加进 Vocab 词本」按钮(Free 显示升级提示) | 1 天 |
| 9 | **Pro 一键全 51 门词预加载** + 设置开关「自动入库」 | 0.5 天 |
| **总** | | **6 天** |

---

## 9. 风险 + 决策点

### A. 「试用 1 门 + 必须注册」会否太严
- **风险**:游客 8 秒决定离开率高;转化漏斗顶部窄
- **缓解**:游客玩 magna-carta 那门用产品最完整体验(地图 + 角色 + 三视角全开,无配额限),让试用门完整体验「Wow」;通关时弹注册而非中途
- **回滚预案**:跑 2 周数据,若游客→注册转化 <15% 改为「试用 2 门」

### B. 每日视角配额跨日重置 — 用 device localTime 是否会被恶意改时钟绕过
- **风险**:用户改本机时钟可重置配额
- **判断**:**不阻塞**。免费用户改时钟绕配额的成本(每天改时钟)远高于注册账号付 $20 直接买;这类用户也不是付费转化对象;企业级再考虑服务端校验
- **若要严**:配额走 sync (写 user_progress.dailyLensUsage),登录用户走云端;游客留 localStorage 容忍

### C. AP 课 Pro-only 会否伤 G7/G8 家长(他们有时家里有兄/姐在备 AP)
- **判断**:`getGradeTags(t).grade === 'HS'` 这 10 门确实是 HS 高阶。G7/G8 学生用 Free/Basic 已能学到主力 41 门,涵盖 G6/G7/G8 全部课纲。家长想给孩子提前接触 AP 就升 Pro,合理

### D. 必考词自动入库 — Basic+ 才能开,Free 是否会觉得不公平
- **判断**:Free 8 门免费 + 跨设备同步已经是合理价值。词本闭环是 history → vocab 引流核心,Basic+ 专享让用户感觉付费值。Free 通关画面有「升级 Basic 解锁词本入库」按钮 → 转化触发点

### E. 复用 vocab `wordList` 结构 — 现有 schema 能否承接
- **待 Codex 验证**:`wordList` 是否有「来源 tag / 不可手动加 / 标 history」的字段空间;若没有,加在 `meta` 子字段;若结构紧绷,加 `customWords` 平行字段

---

## 10. 下一步

- [ ] 创始人 + Codex 审核本规划(`docs/CODEX_AUDIT_history_membership.md`)
- [ ] Codex Go 后按 9 步顺序实施
- [ ] **建议分两波 ship**:
  - 波 1(第 1-7 步,~4.5 天):tier gate + 配额 + UI 锁标 + 升级 modal + 游客引导。**第一波就能上线开始收钱**
  - 波 2(第 8-9 步,~1.5 天):词本入库 + Pro 预加载。**留存 / 复购功能**

---

**最后更新**:2026-05-26(创始人调整:三视角不限制 / AP Pro-only / 每日视角配额限流)
