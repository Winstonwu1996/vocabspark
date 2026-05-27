# History 模块 · 会员体系规划 v1.2

**日期**:2026-05-26(v1.2 修订)
**作者**:Claude(创始人审定味道 + 权益分布;v1.2 吸收 Codex v1.1 delta 复核的 6 必改 + 4 小歧义)

**v1 → v1.1 变更**(吸收 Codex 4 个 P0):
- ❌ v1 写错:「history 注册即跨设备同步」—— 实际 history 页**没有自己的 sync client**,只 `saveAll()` 到 localStorage,完整 sync 链路在 `pages/vocab.js`。修:先抽 sync client 才能兑现承诺。
- ❌ v1 写错:词本 import 写 `wordList` + tag —— vocab 主资产是 `wordInput` 纯文本行,`wordList` 是学习 session。修:**复用既有 `bridgeQueue.history`** 推荐机制,用户在 vocab 端主动接受。
- ❌ v1 漏:`dailyLensUsage`/`sidekickUsage` 注册用户应进 synced `historyData`(依赖 P0-1 sync client);Sidekick 5/20/无限在 9 步清单里**根本没实现**。
- ❌ v1 漏:tier gate 生命周期 `loading/active/free/error` 未定义,直链 + Atlas embed 在播放器渲染前 gate。
- ❌ v1 估时偏乐观:6 天 → **8.5-10 天**。

**v1.1 → v1.2 变更**(Codex v1.1 delta 复核 partially closed 收紧):
- 🔧 §9 Step 0 拆成 **0A vocab-only 抽离 + 0B 观察 ≥3 天无异常后 history 接入**,回归即 revert,history sync 不上线(P0-1 partially closed → closed)
- 🔧 §6 / §9 Step 3 写 **quota merge 规则**:`usedLensIds` 同日 union;Sidekick 改 `sidekickEventIds[]` 事件 ID 列表(去重 union 安全),由长度派生 count;**多 tab 用 BroadcastChannel + localStorage CAS 防双扣**;游客清 localStorage / 改时钟显式接受;游客注册当天 quota union 继承(P0-3 partially closed → closed)
- 🔧 §6 硬定义 **「第一次有效对话」**= 第一条非 fallback AI bubble 写入 `conversationLog`,或用户首次有效输入(`expectsRealAnswer` 节点提交非空 input),先到者扣一次(P0-3 partially closed → closed)
- 🔧 §7 / §8 / §9 Step 4 写硬 **Atlas iframe gate**:父页 `AtlasLabPage` 在 `setEmbedUrl()` 前 gate;iframe 子页 mount 后二次 gate;`loading` 只 skeleton,不创建播放器(P0-4 partially closed → closed)
- 🔧 §7 补 `active → free/guest/error` 转换:若当前 topic/lens 超出新 tier,**立刻暂停后续推进 + 弹 upgrade**;已生成 transcript view-only 可见,但**不再生成 Pro 内容**(P0-4 partially closed → closed)
- 🔧 §7 「4 状态」→「5 状态」措辞修
- 🔧 §10 D 改为「由 vocab resolver 接受 bridgeQueue,history 不直接写 `wordInput`」(原文「点击直接加入主词单」与 §5 原则矛盾)
- 🔧 §10 G 用 `learningReceipts[topicId][lensId]` 判定 lens 完成,`completedTopics` 不替代 lens-level gate
- 🔧 §3 / §9 Step 8 HS 5 分钟样章改为 **preview-only truncated `effectiveTurns`**,走正常 `allDone → CTA`,**不用计时器中途强切 runtime**(避免破坏 step engine 状态机)

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

**v1.2 修正 · HS/AP 5 分钟样章**(走正常 runtime,不破坏 step engine):从 `cold-war-1962` 或 `french-revolution-1789` 抽 N1-N3 节点,**预生成 preview-only 截断版 `effectiveTurns`**(储存在 `previewStoryboards/cold-war-1962-preview.js`,只含 3 节点),Free 用户进「试看 5 分钟」走标准 history-runtime,正常 `allDone → CompletionScreen`,CompletionScreen 文案改为「这是 5 分钟样章 — 想看完整 14 节?升级 Pro 解锁」+ Pro CTA 按钮。**不用计时器中途强切 runtime**(避免破坏状态机)。**作用**:让 11 年级 APUSH 家长试用时能摸到「这平台真的有 AP 课」,堵 Pro 漏斗顶部断点(Codex P1)。

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

## 6. 每日视角配额机制(v1.2 收紧 merge / multi-tab / 扣减时机)

### Storage 结构(v1.2 改 Sidekick 为事件 ID 列表)
- **游客**:`vocabspark_v1.historyData.dailyLensUsage = { date, usedLensIds: [] }` 仅 localStorage
- **注册用户**:同字段写入 `historyData`,**走 P0-1 抽出的 sync client 推到云端** —— 跨设备共享配额(家庭账号是好事,多设备个人用户接受)
- **Sidekick 配额(v1.2 改结构)**:`historyData.dailySidekickUsage = { date, eventIds: [] }`,**count 由 `eventIds.length` 派生**。理由:`{date,count}` 是非幂等 counter,sync merge 双端各 +1 时会丢一次扣减;`eventIds[]` 同日 union 安全幂等。
  - 每次 Sidekick 调用前生成 `eventId = uuid()` 写入 `eventIds`,sync merge 用 union;若用户开始打字但取消提交,事件 ID 不写入

### Quota merge 规则(v1.2 新增 — Codex P0-3 必改)
在 `lib/progressMergePolicy.js` 加 `historyData.dailyLensUsage` + `dailySidekickUsage` 的字段允许 list,merge 函数:
```js
mergeDailyQuota(local, remote) {
  // 跨日:date 不同时取较新 date 的全量(本地若更新 → 重置,远端若更新 → 替换)
  if (local.date !== remote.date) {
    return local.date > remote.date ? local : remote;
  }
  // 同日:usedLensIds / eventIds 取 union(去重)
  return {
    date: local.date,
    usedLensIds: [...new Set([...local.usedLensIds, ...remote.usedLensIds])],
  };
}
```

### 扣减时机(v1.2 硬定义 — Codex P0-3 必改)
「**第一次有效对话**」= 以下二者**先到者扣一次**:
1. `conversationLog` 出现第一条**非 fallback** AI bubble(`bubble.fallback !== true`)
2. 用户在 `expectsRealAnswer=true` 节点提交**非空** input(`input.trim().length > 0` 且非纯 emoji)

二者满足任一即扣 `<topicId>:<lensId>` 一次,后续节点不再重复扣。
**避免秒退误扣**:用户进 conversation phase 但 0.5s 内退出(无 AI bubble 写入、无用户输入)→ 不扣。

### Multi-tab 防双扣(v1.2 新增 — Codex P0-3 必改)
- **本地 lock**:扣减前调 `navigator.locks.request('history-quota', async () => {...})`(现代浏览器原生 API);不支持的浏览器 fallback 到 `localStorage` CAS(check-and-set,读 → 比较 → 写)
- **跨 tab 广播**:扣减成功后通过 `BroadcastChannel('history-quota')` 广播 `{type: 'lens-used', topicId, lensId, date}`;其它 tab 收到后更新内存 state,**不重复扣减 storage**(去重靠 `usedLensIds` 本身的 set 语义)

### 跨日重置
- 每次检查前比对 `dailyLensUsage.date` !== 今日(`new Date().toLocaleDateString('sv-SE')` 得 `YYYY-MM-DD`)→ 重置 `usedLensIds = []` + 更新 `date`(Sidekick 同)
- 时区:用 device localTime(游客易绕但成本意识);注册用户走 sync 后,服务端可加 `last_quota_reset_at` 二次校验(留 P2)

### 显式接受的绕过路径(v1.2 — Codex P0-3 必改)
- **游客清 localStorage 重置**:接受。游客本身就是无身份,清 storage 等价开新游客 session
- **游客改时钟跨日重置**:接受。改时区零成本但目标用户(中学生)很少这么做,且改了也没真用满配额的强度
- **注册用户**:同设备改时钟 / 清 storage 后,下次 sync pull 会拿到云端 `dailyLensUsage`(merge 取较新 date 全量 = 拒绝旧客户端的「重置」)→ 服务端口子默认堵住

### 游客 → 注册当天配额继承(v1.2 — Codex P0-3 必改)
注册成功后第一次 sync 时:
- 拉取云端 `historyData.dailyLensUsage`(老用户可能有,新用户为空)
- 与本地游客的 `usedLensIds` **同日 union**(同 `mergeDailyQuota`)
- 推送 union 结果到云端
- **效果**:游客今天用了 1 视角注册后立刻有 3 视角 quota,但已用的 1 视角不重置 → 还剩 2 视角

### UI 显示
- TopicHero 右上角 EN/中 toggle 旁边加一个小 chip「今日 2/3 视角 · Sidekick 8/20」(免费/游客可见;Basic+ 不显示)
- LensSelector 选 lens 时配额预检
- Sidekick 输入框上方显示剩余次数(每用一次广播 + 更新)

---

## 7. Tier Gate 生命周期(v1.2 收紧 — Codex P0-4)

`useUserTier()` hook 返回 **5 状态**,UI 必须分别处理:

| 状态 | 触发条件 | UI 行为 |
|---|---|---|
| `loading` | hook 初始化 / `user_subscriptions` 查询 in-flight | **付费 gate 显示骨架屏,绝不创建播放器,绝不放行**(包括 Atlas iframe — 父页在 `setEmbedUrl()` 前必须等到 `active`) |
| `active` | 查到 active 行,返回 `{tier, expiresAt, billingCycle}` | 按 tier 放行 |
| `free` | 已登录但无 active 订阅(或过期) | 按免费 tier gate |
| `guest` | 未登录 | 按游客 tier gate(1 门 + 1 视角/天) |
| `error` | 查询失败(网络 / Supabase 500) | **fail-closed**:Pro 课不放行(显示「订阅状态确认中,稍后重试」),但 Free 内容正常放行 + Sentry 告警 |

**绝不能信 `localStorage.vocabspark_tier` 做付费判定**:它只能当 UI cache(首屏 skeleton 期间显示「上次的 tier」减少闪烁),但 mount 后必须以 `user_subscriptions` 实时查询为准。

### Atlas iframe gate(v1.2 硬定义 — Codex P0-4)
**两层 gate,父页 + iframe 子页双保险**:

1. **父页 `components/AtlasLabPage.js`**:在 `setEmbedUrl()` 前调用 `useUserTier()`,**tier `loading` 时显示 skeleton 不创建 iframe**;tier `active/free/guest` 后比对 `canAccessTopic(viewTopicId, tier)`,不够 → 不调 `setEmbedUrl`,改弹 Upgrade modal
2. **iframe 子页 `pages/history/[topicId].js`**:mount effect 内**独立**调 `useUserTier()` + `canAccessTopic` 二次 gate;tier 不够时 `postMessage` 告诉父页 + 渲染「这门课需要 Pro,请回 Atlas 主页」(不靠父页阻止,自己也阻止 — 防直链绕过父页)
3. **直链 `/history/<HS-course>`(非 iframe)**:同 mount effect 路径,tier 不够 → `router.replace('/history')` + Upgrade modal

### `active → free/guest/error` 状态切换处理(v1.2 新增 — Codex P0-4)
用户正在学 Pro 课时(`/history/cold-war-1962` conversation phase),tier 突然变化(退费 webhook 到达 / token 过期 / 网络断):
- **检测**:hook 内置 `useEffect` 监听 `user_subscriptions` 实时变化(Supabase realtime channel 或 30s 轮询),tier 降级时触发
- **正在学 transcript**:
  - **保留 view-only 可读**:已生成的 conversation bubble + 笔记保留显示,用户能看完之前学到哪
  - **暂停后续推进**:`history-runtime` 收到 `tierLost` 信号 → `expectsRealAnswer` 输入框禁用 + 显示「订阅已结束,无法继续生成新内容」
  - **弹 Upgrade modal**(non-dismissable):「订阅已结束 — 想继续学完?重新订阅 Pro」+ 「先回到目录」按钮
- **`error` 状态特例**:不踢出,显示「订阅状态确认中,5 秒后重试」+ 自动重试 3 次;3 次都失败才降级处理

---

## 8. 锁定课程的 UI 表现

### CourseBrowser(首页 51 课列表)
- 课卡上 tier 锁标:
  - 🔒 灰底:超出当前 tier
  - 锁标右下角小字「Basic」/「Pro」
- 点 🔒 卡 → 弹 Upgrade modal(contextual 三维对照)
- HS 课的「试看 5 分钟」按钮(Free 用户专享,Codex P1)

### Atlas Lab chip + 单课页(v1.2 — 走 §7 双层 gate)
- Atlas 时间轴 chip 同样灰底锁标
- 父页 `AtlasLabPage` 点 chip → `useUserTier` `loading` 时显示 skeleton,**绝不调 `setEmbedUrl()` 创建 iframe**;`active/free/guest` 后比对 `canAccessTopic`,不够 → 弹 Upgrade modal,**不创建 iframe**
- 单课页(iframe 子 + 直链)mount effect 二次 gate;不够则 redirect `/history` + Upgrade modal(不是 toast — 太弱)
- **永远不能出现「iframe 已加载 Pro 课内容,事后才发现 tier 不够」** —— gate 必须在 `setEmbedUrl` / 播放器渲染前

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

## 9. 实施工程清单(v1.2 拆 Step 0 + 加 quota merge:9-11 天)

| 步 | 改动 | 工程 |
|---|---|---|
| **0A** | **vocab-only sync client 抽离**(P0-1 前半):从 `pages/vocab.js` 提取 `_doSync` / `_markIntent` / debounce / BroadcastChannel / `_cloudReadyRef` 时序到 `lib/sync-client.js`;**vocab 改用此 lib**;含全流程冒烟回归(登录 / 多 tab / 删词 ≥3 / 离线缓存恢复 / 跨设备首次 push 时序);**vocab 端 ship 上线** | 2 天 |
| **0B-gate** | **观察 ≥3 天 vocab 线上无异常**(Sentry 0 新 sync 错;客服 0 投诉)— 任何回归 → **revert 0A,history sync 不上线,history 配额降级到仅本地**(注册用户跨设备同步功能延后) | 阻断 buffer 3 天(不算开发) |
| **0B** | **history 接入 sync client**:`lib/history-storage.js` 的 `saveAll()` 调用走 `lib/sync-client.js` push;`historyData.dailyLensUsage` + `dailySidekickUsage` 字段在 `lib/progressMergePolicy.js` 注册允许 list,merge 函数走 §6 `mergeDailyQuota`(usedLensIds union / eventIds union / 跨日取较新 date) | 0.5 天 |
| 1 | `lib/membership.js` — `useUserTier()` hook 含 **5 状态**生命周期(`loading/active/free/guest/error`),query `user_subscriptions`,`localStorage.vocabspark_tier` 仅 UI cache;含 **`active → free/guest/error` 监听 + tierLost 信号**(Supabase realtime 或 30s 轮询) | 0.75 天 |
| 2 | `lib/history-tiers.js` — `getTopicAccessTier(topicId)` + `FREE_TOPIC_WHITELIST` 8 门 + `GUEST_TRIAL_TOPIC = 'magna-carta-1215'` + `HS_OVERRIDE_LIST` 空数组留扩展 + `canAccessTopic(topicId, userTier)`;**lens-level gate** 走 `hasCompletedLens(topicId, lensId)` 读 `learningReceipts[topicId][lensId]`(grandfather 见 §10 G) | 0.5 天 |
| 3 | `lib/daily-quota.js` — 双配额统一管理;`getRemainingLenses(tier)` / `getRemainingSidekick(tier)` / `recordLensUsage(topicId, lensId)` / `recordSidekickUsage()`;**「第一次有效对话」扣减触发**(见 §6 硬定义);**multi-tab 用 `navigator.locks` + fallback CAS + `BroadcastChannel`**;集成 sync client | 1.5 天 |
| 4 | CourseBrowser / **Atlas 父页 + iframe 双层 gate**(见 §7 Atlas iframe gate) / 单课 mount tier gate;含 `loading` skeleton + `active → free/guest/error` 切换时暂停推进 + 非 dismissable Upgrade modal;**永远不能出现 iframe 已加载 Pro 内容事后才发现 tier 不够** | 1.5 天 |
| 5 | LensSelector 配额检查 + TopicHero「今日 N/M 视角 · Sidekick X/Y」chip;Sidekick 输入框上方剩余次数 + 超额拦截 | 1 天 |
| 6 | **Upgrade modal** 组件(三维对照表)+ 复用 `/plan` 跳转 + 「先看 1 分钟预告」按钮;**`active → free/guest/error` non-dismissable 变体**(订阅已结束 — 无法继续生成新内容) | 0.5 天 |
| 7 | **游客 → 注册引导**:游客学完 magna-carta 通关弹「注册免费拿 7 门新课 + 同步」banner;**注册后首次 sync 走 §6 当天 quota union 继承**;CompletionScreen 末尾「想换设备继续?注册免费同步」按钮 | 0.5 天 |
| 8 | **HS 5 分钟样章**(Codex P1 v1.2 修正):cold-war-1962 抽 N1-N3 节点 → **预生成 `previewStoryboards/cold-war-1962-preview.js`**(只含 3 节点的 truncated `effectiveTurns`);Free 用户「试看 5 分钟」入口走标准 runtime,**正常 `allDone → CompletionScreen`** 渲染「这是 5 分钟样章 — 想看完整 14 节?升级 Pro」+ Pro CTA;**不用计时器中途强切 runtime** | 0.75 天 |
| 9 | `lib/history-to-vocab.js` — `bridgeMustKnowToVocab(topicId)` 调 `bridgeReviewToVocab()`;CompletionScreen 自动调用(Basic+)+ Free 显示升级提示;**push 后绝不直接写 `wordInput`,等 vocab resolver 接受** | 0.5 天 |
| 10 | **Pro 一键全 51 门 push 到 bridgeQueue** + 设置开关「自动推荐」 | 0.5 天 |
| **开发总** | | **9 天**(含 0A 2 + 0B 0.5 + 1-10) |
| **+ buffer** | | **+ 3 天 0B-gate 观察期 = 12 个日历日**;若 0A 顺利无回归,实际可缩到 10-11 个工作日 |

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

### D. Bridge 推荐 → Vocab 用户接受率风险(v1.2 收紧 — Codex 小歧义修正)
- **风险**:用户从 history 通关到 vocab 主动接受词的转化漏斗会有衰减(可能 30-50%)
- **判断**:这是产品诚实付出的成本。比污染主词单导致用户卸载 vocab 模块的代价低
- **观测**:统计 `bridgeQueue.history` 推送数 vs 用户接受数,若 <20% 接受率,在 history CompletionScreen 加更明显的入口提示(「Vocab 待选区有 12 个词等你接收」+ 直跳 vocab 待选区页面);**绝不让 history 端直接写 `wordInput`** —— 接受动作由 vocab resolver 唯一负责,history 只 push 到 `bridgeQueue`

### E. sync client 抽离对 vocab 的回归风险(v1.1 新增 — Codex P0-1 最关键)
- **风险**:`pages/vocab.js` 现有 sync 逻辑跑了一年,有 BroadcastChannel + intent payload-binding + retry + _cloudReadyRef 等微妙时序。抽到 `lib/sync-client.js` 后任何漂移都会破坏 vocab 付费用户体验
- **缓解**:步 0 必须含 vocab 全流程冒烟回归测试(登录 / 多 tab / 删词 / 离线缓存恢复 / 跨设备首次 push 时序);**先 PR 抽出 lib 让 vocab 用,确认 ≥3 天线上无投诉再开 history 集成**
- **回滚**:`lib/sync-client.js` 抽出时保留 `pages/vocab.js` 的原方法注释为兜底;若抽出后出问题立即 revert 步 0,history 步 3 配额降级到仅本地(注册用户跨设备同步功能延后)

### F. 波 1 不能宣传波 2 权益(v1.1 新增 — Codex P1)
- **风险**:若波 1(步 0-7)4 天就上线,但波 2(步 8-10)1.5 天还没做,Basic 用户付了 $20 但拿不到「推荐词到 Vocab」承诺 → 虚假宣传
- **解决**:`/plan` 页 + Upgrade modal 在波 1 期间**完全不显示词本入库 / PDF 速览卡条目**;波 2 上线后再加进去 + 给波 1 用户邮件通知「新功能已上线」
- **替代**:**不分两波,8.5-10 天一次性 ship** —— 用户体验更连贯,推荐这条

### G. 老用户已完成的 history 记录 grandfather(v1.2 收紧 — Codex 小歧义修正:lens-level 判定)
- **场景**:paywall 上线时已有用户学了 N 门 history(免费时代),其中可能包含未来收费的课
- **规则(v1.2 修:lens 级别,不是 topic 级别)**:
  - 已完成的 lens(`learningReceipts[topicId][lensId]` 存在)**永久可见 + 可读 transcript**
  - 同一 topic 内**未完成的 lens** 按当前 tier gate(不够升级)
  - **不能用 `completedTopics` 整门 grandfather** —— 用户当时可能只学了 3 lens 中的 1 个,另外 2 lens 仍按 tier gate
- **实现**:
  ```js
  // canAccessLens(topicId, lensId, userTier)
  if (hasCompletedLens(topicId, lensId)) return 'view-only-grandfathered';
  return applyTierGate(topicId, userTier);
  // hasCompletedLens(topicId, lensId) = !!learningReceipts[topicId][lensId]
  ```
- **UI**:已完成 lens 在 LensSelector 上显示 「✅ 已学过(可重看)」标记;点进去渲染 view-only transcript + 「重新学需要 Basic/Pro」按钮

---

## 11. 下一步

- [ ] 创始人审 v1.2 → Codex v1.2 closure check(可选,若 v1.1 delta 已 Go with minor 可省)
- [ ] 按 **0A → 0B-gate(3 天观察) → 0B → 1 → ... → 10** 顺序实施(0A 是阻断,0B-gate 是质保期)
- [ ] **强烈建议不分两波 ship**(避免风险 F)。9 天开发 + 3 天 0B 观察 = 12 个日历日整体 ship 一次,Basic / Pro 用户拿到完整承诺权益
- [ ] 若 0A vocab 抽离失败回归,**立即 revert,history sync 不上线**,配额降级到仅本地(注册用户跨设备同步功能延后);此时 §1 「注册即跨设备同步」承诺**必须从 `/plan` + Upgrade modal + landing page 全部移除**,直到 sync 真正打通

---

**最后更新**:2026-05-26
- v1.0 创始人三点调整(三视角不限制 / AP Pro-only / 每日视角配额)
- v1.1 吸收 Codex 4 个 P0(sync client 抽离 / bridgeQueue 复用 / 双配额含 Sidekick / tier gate 生命周期;估时 6 天 → 8.5-10 天)
- **v1.2 吸收 Codex v1.1 delta 复核**(Go with minor adjustments):Step 0 拆 0A+0B-gate+0B / quota merge 规则 + 多 tab 防双扣 + 「第一次有效对话」硬定义 + 游客→注册当天 quota union 继承 / Atlas iframe 双层 gate + `active → 降级` 暂停推进 / §10 D bridgeQueue resolver 路径 + §10 G lens-level grandfather / HS preview 走 truncated effectiveTurns 不计时器中断;估时 8.5-10 天 → 9 天开发 + 3 天 0B 质保 = 12 个日历日
