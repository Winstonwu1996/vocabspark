# History Topic Authoring Pipeline — 12 步流程（2026-04-27 锁定）

每个新 Topic（38 个 G7-K12）必须走完这 **12 步**才能 ship。任何一步不通过 → 回到对应步骤，**不能跳过**。

---

## 设计哲学

**七个不可妥协的原则**（所有 Topic 共享）：

1. **教材为锚** — narrative 建在教材之上，不替代教材。第 0 节明示教材出处（页码、章节）
2. **Rule 0 中性** — "我作为一个中国人认为西方有其制度优势，但东方也有其制度优势。" Whig / 反向 essentialism 都拒
3. **每轮 Anti-Guessing** — 13 岁能用具体表态/预测/角色共情答 provoke 问题，不是瞎猜
4. **3 层架构各司其职**（2026-04-28 钉死）— Atlas（抽象）/ 对话（VIVID）/ Mastery（抽象）
5. **明朝那些事儿密度**（2026-04-28 钉死）— 累不累跟字数无关跟抽象度有关；§3-§5 写作硬约束
6. **VIVID always 不上状态机**（2026-04-29 钉死）— AI 自动诊断学生状态不可靠（DeepSeek 搞不定 nuance）；改用用户主动按钮 + 家长报告
7. **⛔ 文化对应硬禁**（2026-05-02 加，根因）— 描述非中国历史时绝对不可用中国概念词类比翻译——这是 LLM 经典 culturalization bug——会篡改历史事实

---

## ⛔ 第 7 条详解：文化对应硬禁（写 narrative + 写 storyboard + runtime prompt 三处必须执行）

**问题**：LLM 倾向把外国术语翻译成中国读者熟悉概念，但这是**类别错误**（category error）。

**事故案例**：
- ❌ Magna Carta 1215 narrative 把 wax seal / Great Seal 翻译成"玉玺"——历史事实是青铜印模 + 红蜡，不是玉——AI 经过 7 处自我强化，下游 storyboard + runtime 都污染。修复成本高。

**禁用对照表**（写 narrative / storyboard / 改 prompt 时必须扫此表）：

| ❌ 错误（中国化）| ✅ 正确（保留异域） | 错误后果 |
|---|---|---|
| 玉玺 / 御印 | 王室印玺 / Great Seal / wax seal / 蜡封印 | 篡改物质文化（玉 vs 青铜+蜡）|
| 龙袍 | 王室袍 / 加冕袍 / coronation robe | 篡改服饰文化 |
| 金銮殿 / 御书房 | 王座厅 / audience hall / Westminster Hall | 篡改建筑文化 |
| 翰林 / 起居注 | 修士 / 编年史家 / chronicler / scribe | 篡改职业文化 |
| 庙 / 宝刹 | 大教堂 / cathedral / 清真寺 / mosque | 篡改宗教文化 |
| 朕 / 卿 / 圣上 | 国王 / 陛下 / King Y | 篡改语用文化 |
| 太子 | 王储 / heir apparent / Crown Prince | 西方有自己 inheritance 体系 |
| 宰相 / 丞相 | 大法官 / Chancellor / 大主教 / Archbishop | 西方分权体系不同 |
| 皇后 | 王后 / Queen consort / Queen regent | 不是所有 Queen 都对应皇后 |
| 圣旨 | 王令 / royal writ / charter / 教皇敕令 | 政教文化不同 |
| 锦衣卫 / 东厂 | 私人卫队 / 御林军 / household guard | 中国特殊机构不可类比 |
| 通宝 / 银两 | 金币 / 银马克 silver mark / dinar / shilling | 货币体系不同 |
| 四书五经 / 八股 | 经院哲学 / Latin grammar / Aristotle | 教育体系不同 |
| 江山 / 社稷 | 王国 / kingdom / realm | 中国"江山"不可对应 |

**写作 + 修改约束**：
- 写新 narrative 时——草稿完成后必须 grep 此表所有关键词
- 写 storyboard / 改 prompt 时同样必须 grep
- 任何 agent 协助生成时——prompt 必须包含此表（不是参考——是硬约束）
- pre-commit lint 脚本 `scripts/check-narrative-cultural-fit.mjs` 自动扫描（待实现）

**例外**：
- 用户**明确**做中欧对照时——可以**并列**说"中国玉玺 vs 欧洲 Great Seal"——但**不能**把 Great Seal 单独叫"玉玺"
- 同时代中国部分（§8）描述中国时——可以正常用玉玺/龙袍等——这是**真的中国**

**根因解释**（给写 narrative 的人理解为什么这条重要）：
LLM 经过中文文学语料训练——"皇帝盖印"自动联想"玉玺"——这是**统计偏差**不是**事实**——
我们的产品对历史**事实**精确度比"流畅 metaphor"重要 100x——
如果让中国孩子从 narrative 学到"1215 英国有玉玺"——我们就是在**教错的历史**——
这违反第 1 条"教材为锚"原则——产品价值崩塌。

---

## ⛔ 第 8 条：Lens 写作 9 类硬规则（多轮 4-agent review 总结，2026-05-04 加；G/H 5-3 加；I 5-4 加）

经过 Magna Carta + Crusades + Black Death 三个 Topic 的 4-agent review（每个 Topic 7thgrader / AP teacher / ESL teacher / Chinese teacher 各跑一遍）后总结。**所有规则都来自具体事故**——事故已修，规则防再发。

写 lens / storyboard / agent prompt 时——这 6 类规则与第 7 条文化禁用**同级硬约束**——不是建议，是必须。

### A. Anti-fabrication 显式化（防 Alexios 私人日记 + Agnolo una fossa 事故）

**事故**：
- Crusades Alexios lens 5 处伪造"私人日记"+ 假《Alexiad》卷数引证（N8/N10/N11/N12 散布）
- Black Death Agnolo lens 把 documented "in una fossa"（一个坑）戏剧化为"5 separate pits in own field"，没显式标合成

**规则**：
1. 戏剧化人物 internal thought / 没在 source record 里的细节时——**必须**用"this lens lets you hear what was turning in [X]'s mind"或"这一段是 lens 让你听见——他没写下来，也没说出口——但他自己知道"框架
2. **禁止**伪造 documented quote / journal / archive citation 让戏剧化看起来"有据"
3. documented quote **必须完整**引用——要缩短用 ellipsis "..." 标记，不要砍头去尾让 quote 看起来像独立短句
4. lens 内合成细节（虚构人物名/年龄/场景）——**显式**标"this is dramatic interior monologue / lens invention; the documented record is X"

### B. Synthesis 节点纪律（防 Konrad N10 学者堆 + N11 道德懦夫 + Tyerman 错位事故）

**事故**：
- Black Death Konrad N10 一节堆 4 个学者（Arendt + Milgram + Aristotle + Williams）—— 12 岁 ESL 直接 skip
- Black Death Konrad N11 标签 "moral-coward reading" 预判答案 —— DBQ 中立性丢失
- Crusades Roger N10 把 Tyerman 归为"organized murder"立场 —— Tyerman 实际是 synthesizing 派，不接受这个归位

**规则**：
1. **每个 synthesis 节点最多 1-2 个 named scholar**——其余用学派通称（"modern critical reading" / "trauma-aware historiography" / "structural-victim reading"）
2. **学派归属必须精确**——不要用某学者名字代言他实际不持有的立场。Cohn 不是道德派 / Tyerman 不是 organized-murder 派 / Norwich 不是 critical-of-Alexios 派
3. **Synthesis 标签必须中立**——用 neutral school name（"transitional-justice reading"）而**不是**预判性形容词（"moral-coward reading"）
4. **"两边都站得住" + "想 30 秒。" 收尾**——不预判用户答案

### C. Voice 标杆对齐（防 Crusades 读法 A/B 不一致事故）

**事故**：
- Crusades 全 lens 用「读法 A / 读法 B」+「想 30 秒答」，与 Magna Carta sign-off 后的标杆「一种说法 / 另一种说法 / 想 30 秒。」不一致
- Black Death lens 1 inherited 同样旧 voice，Chinese reviewer 直接抓

**规则**（lens 起草必须遵守）：
- **CN**：「**一种说法**」+「**另一种说法**」+「想 30 秒。」（句号收尾）
- **EN**：「**One view —**」+「**The other view —**」+「Take thirty seconds.」+「Both sides stand.」
- **禁止**：「读法 A / B」/「Reading A / B」/「论点 A / B」/「想 30 秒答」/「你的论证比结论重要」/「Your reasoning matters more」
- 此规则**所有 lens** 必须遵守，不论 Topic

### D. Dev-note 严格隔离（防 Konrad N6 narrative kernel §3 泄漏事故）

**事故**：Black Death Konrad N6 EN 字段："The narrative kernel §3 chapter on Rachel confirms it" —— 开发笔记字面泄漏到学生 EN 内容

**规则**：
- 学生 facing 的 `cn:` / `en:` 字段**绝对禁止**出现以下 dev-meta：
  - "narrative kernel §X" / "per spec" / "see lens design"
  - "narrativeRef" 字段值的字面引用
  - 任何 lens 设计 brief 里的内部术语
- "lens 让你..." / "this lens lets you hear..." **是允许的**（这是面向学生的元说明，不是 dev-note）

### E. 角色称谓 + 语言一致性（防 Devorah Aba 滑回 + abstract code-mix + 世界观事故）

**事故**：
- Black Death Devorah lens *Aba* 滑回"我爸" 2 处（半夜 Hans 节）—— voice break
- Black Death Devorah N7 "不是 abstract" 中英 code-mix —— 14 岁角色对白不会用英文术语
- Black Death Devorah N5 "心里第一次有了一个不简单的世界观" —— "世界观" 14 岁不会用

**规则**：
1. **家庭称谓在 lens 内一致**：*Aba* / *Ima* / *Bubbe* / *baba* / *ummi* / *父亲* —— 用一种就一直用一种，**不滑回**中文常规称谓
2. **Cultural ban 14 词** + 中国家庭称谓（娘亲 / 相公 / 父亲大人 / 舅舅 / 姨夫）+ 中国官职（宰相 / 丞相 / 尚书 / 将军）严禁出现在非中国 lens
3. **角色对白禁止中英 code-mix**（"不是 abstract" / "我 confused"）—— narrator 可以用术语 + gloss，**角色不能**
4. **角色 vocabulary 与角色年龄/身份匹配**：14 岁女孩不说"世界观" / "意识形态" / "结构性" —— 用她那个年龄会说的话

### I. 外语术语最少化 + 不用 `*italic*` markdown markup（5-4 加，5-4 第二轮加 markup 部分）

**事故 1**：用户 5-4 反馈："除非不得不写出来的无法对应的术语，否则尽量少用希腊文这些，只要英语和中文。其他的语言灌输是认知负担。"

**事故 2**（5-4 第二轮）：用户测 Black Death，反馈"`*` 这个符号也太多了，一样要去掉，干扰阅读。"

**根因发现**：`components/history-engine/bilingual.js` 渲染器只处理 `**bold**`，**不处理** `*italic*`。所以 `*Aba*` 在 UI 渲染成字面的 "*Aba*"——asterisks 全部可见，认知噪音。

**根因**：lens 内容里大量 italic 外语术语（拉丁文 / 希腊文 / 阿拉伯文 / 希伯来文 / 意第绪文 / 德文 / 意大利文）—— 一段话 5+ 外语 italic word 时，12 岁 ESL 学生认知负载超额。一些 italic 是必要的（家庭称谓 / 不可译制度），但很多是装饰性的。

**规则**：

#### I.1 — 不用 `*italic*` markdown markup（绝对硬规则）

**禁止**：lens 内容字段（`cn:` / `en:`）中**任何位置**使用 `*X*` 单星号 markdown italic 语法。

**理由**：渲染器只处理 `**bold**`，不处理 `*italic*`——`*Aba*` 在 UI 直接显示字面 asterisks，是视觉噪音。

**保留 `**bold**`（双星号）的场景**：
- 关键词强调（每段 250 字 CN 最多 2-3 个 bold）
- Synthesis 节点的"**一种说法**" / "**另一种说法**"框架
- 其他不要滥用

#### I.2 — 默认只用中文 + 英文两种语言

所有非中英术语都需要"必须保留"的理由。

**保留外语原文的合理场景**（写作 bare 形式，**不加** `*` markup）：
- **家庭称谓**（已经选定一致用）：Aba / baba / Ima / Bubbe / ummi —— 这些是身份标识，"爸爸"丢失文化具体性
- **真实历史专有名词 / 书名**：Cronaca senese (书名) / Palazzo Pubblico (建筑名) / Alexiad / Decameron / Tehillim（诗篇希伯来名）—— 这些是 proper noun
- **文化制度术语没有英中一对一翻译**：podestà / Bürgermeister / fossa comune / Judengasse —— 这些有具体制度内涵
- **真实历史引文 + 仪式语**：Deus vult / Pater Noster / Adonai roi lo echsar —— 文化具体性的核心

**删除外语原文的场景**（直接换中文）：
- 有完全对应中英文的：il Grasso "胖子 Agnolo" → "胖子 Agnolo"（外号意义中文已 carry）
- bookkeeper → "记账员"（普通职业名）
- da Genova → "来自 Genoa" 或 "热那亚商人"（普通来源标识）
- Cronaca notebook → "编年史笔记本"（除非作书名 *Cronaca senese* 标——但仍 no asterisks）

**每段（约 250 字 CN）最多 2-3 个外语 token**——超过就是认知超负荷。

**首次出现 inline gloss 后续直接用中文**：第一次"podestà（市长）"，后续就用"市长"。不要重复给 token。

**反例**（一段 5+ 外语 token + asterisk 全可见）：
> 我叫 Agnolo di Tura，人家叫我 *il Grasso*——"胖子 Agnolo"——这是我自己写在 *Cronaca* 笔记本第一页的称呼。我在 Siena 鞋匠工会（*Arte dei Calzolai*）做 *bookkeeper*——记账员——每周二早上去 *Palazzo Pubblico*（市政厅）查档案。

5 个 italic markup + 5 个 inline gloss = 一段消化 10 个外语 token + 满屏 asterisks。

**正例**（保留必要的外语 bare 形式，删 asterisks，删装饰性 italic）：
> 我叫 Agnolo di Tura，人家叫我"胖子 Agnolo"。这是我自己写在编年史笔记本第一页的称呼。我在 Siena 鞋匠工会（Arte dei Calzolai）做记账员：每周二、周五早上去 Palazzo Pubblico（市政厅）查档案、做账。

2 个外语保留（工会名 + 建筑名 proper nouns）+ 0 个 asterisk markup = 同样信息，视觉清爽。

**自检**：
- `grep -n "\\*[^*]" <file>.js` —— 必须空（除 `**bold**` 双星号）
- 每段 250 字 CN 数外语 token，**＞ 3 个就要砍**

---

### G. Em-dash 密度预算（防 Black Death "—" 蔓延事故）

**事故**：
- Magna Carta 已收过一轮"em-dash 太多"用户反馈，但**修复没回流到全局规则**
- Crusades + Black Death lens 又重复同样问题——Agnolo lens N1 hook 一段约 12 个 em-dash 链
- 用户反馈："长破折号还是使用太多。这个问题我们在大宪章那里应该已经修复过了，为什么后面生成的还是有，是不是我们在大宪章部分的修改没有反向优化到我们的策略里"

**根因**：LLM 中文生成偏好用 "——" 替代逗号 + 句号 + 括号——单个 OK，连成 "X——Y——Z——A——B" 是节奏 tic 不是 voice

**规则**：
1. **每句最多 1 个 em-dash**（中文 "——" / 英文 "—"）；用 em-dash **替代** comma 是 OK，**串联** 是不 OK
2. **绝不**出现 "X——Y——Z——A" 4 段以上的 em-dash 链
3. **lens card description 字段**禁止 em-dash（用句号）—— 这是用户第一眼看见的 UI，密度敏感
4. 用 em-dash 预算的 mental model：把它当成 *英文 em-dash* —— 一段最多 1-2 个，正常 prose 应主要用句号 / 逗号 / 括号

**自检**：lens 写完后 grep "——.*——.*——" 看 3-em-dash 连接的句子，**这种基本是要拆**

### H. Lens card description 字段 schema（防 LensSelector "你扮演 X" 重复事故）

**事故**：
- LensSelector 卡片 description 字段被写成"故事概括"——"你扮演 X——他 Y——他 Z——他 ABCDE"——
- 用户反馈："不够简洁，比如每一个开头都是你扮演谁谁谁，但其实只要在整个板块上表明角色扮演，下面就不用啰嗦的每一个都重复一遍。类似的，这部分应该类似一个人物简介一样，清晰明快的介绍，而不是这里就表达的像讲故事一样。讲故事是在正文部分的任务。"

**规则**——`description` 字段写作 schema：
1. **不要**前缀 "你扮演 X"——LensSelector 卡片 header 已经有 "选个视角进入这段历史" 总说明
2. **3-4 句**完整中文句子，**句号收尾**，不用 em-dash
3. 句子结构（character profile 模式）：
   - **句 1**：角色身份 + 一句关键设定（年龄/职业/家族）
   - **句 2**：一个具体的开场钩子时刻或细节（具体时间 + 动作 + 物，不展开 plot）
   - **句 3**：这个 lens 让用户经历什么（不剧透 emotional payoff，不展开后半段细节）
4. **禁止**：
   - 罗列整个 plot timeline 的"X 然后 Y 然后 Z 然后 ABC"
   - 揭示跨 lens 对位 echo（如 Devorah lens 不要预先告诉用户"Yitzhak 跟 Konrad lens 是同一人"——让用户自己发现）
   - 长 em-dash 链
   - "**你会经历**" / "**你会发现**" 这种重复 voice marker

**正例**（Magna Carta King John lens 5-3 修订版）：
> 英格兰国王，在位 17 年丢掉了诺曼底、和教皇打了 6 年、被自己贵族打输一场内战。1215 年 6 月 15 日被逼盖印 Magna Carta，但当晚就在写信请求教皇废掉它。这个 lens 让你从 perpetrator-loser 内部看这张纸是怎么诞生的。

3 句、1 个 em-dash 都没有、character profile 不是 plot summary。

**反例**（Devorah lens 旧版）：
> 你扮演 Devorah bat Yitzhak——一个虚构的 14 岁 Strasbourg 犹太女孩（与用户女儿 Willow 同龄段代入设计）——她父亲 Yitzhak ben Abraham 是 *Judengasse* 的银匠——1348 年 11 月某日早上 8 岁基督徒邻居 Klara 走过她家窗户没看她——她 14 岁第一次懂"邻居会变"——1349 年 2 月 13 日晚基督徒邻居 Brigitta 冒生命危险藏她家 5 口在地窖——2 月 14 日地窖里念 *Tehillim* 第 23 篇 30 多遍——半夜父亲跪给 Hans...

15 个 em-dash 串联、罗列整个 plot、揭示 cross-lens echo、有 "你扮演" 前缀、有 "你会经历" 重复——**5 项 schema 违反**。

---

### F. 数学 + 年代自检（防 664/564 + Bohemond 42/43 + Kristallnacht 1933/1938 事故）

**事故**：
- Magna Carta 664 → 564 数学错（1215 - 651 = 564，不是 664）—— Willow 抓出来
- Crusades Bohemond 1097 年 "42 岁" → 43（1054 生 + 1097 = 43）；Anna 1099 "16 岁" → 15（1083/12 生 + 1099/8 = 15 岁 8 月）
- Black Death Kristallnacht "1933 年" → 1938（实际 1938/11/9-10）；Wannsee Conference 1942（不是 1933）

**规则**：
1. **所有"X 年前 / X 年后"算术**自检：`(event_year - reference_year)` 必须等于声明的差值
2. **所有人物年龄**自检：`(event_year - birth_year)` 必须等于声明的年龄；月份精度（生日是否过）影响结果时显式说明
3. **重要事件年份**写完后对照标准 reference（维基 / AP textbook）：Kristallnacht 1938 / Wannsee 1942 / Strasbourg massacre 1349/02/14 / Nicaea 1097/05/19 / Magna Carta 1215/06/15 等
4. lens 草稿写完后**必须 grep 所有具体数字 + 年份**，与 narrative kernel + 维基对照

---

## ⚠️ Pre-prompt vs Case-by-Case 决策表

经验：**不是所有 review 反馈都能 pre-prompt 化**。前置规则只能覆盖**确定性 + 可执行 + 跨 Topic 一致**的内容。

**可前置（已加入第 8 条 A-F）**：
- ✅ Anti-fabrication framing（A）
- ✅ Synthesis 学者密度 + 中立标签（B）
- ✅ Voice 标杆对齐（C）
- ✅ Dev-note 隔离（D）
- ✅ 角色称谓一致 + 中英 code-mix 禁（E）
- ✅ 数学 + 年代自检（F）
- ✅ Em-dash 密度预算（G）—— 5-3 加
- ✅ Lens card description schema（H）—— 5-3 加
- ✅ 外语术语最少化（I）—— 5-4 加
- ✅ Cultural ban 14 词（第 7 条）

**不能前置（必须 case-by-case 跑 4-agent review）**：
- ❌ 具体事实精度（具体年份/数字/名字/引文）—— 每 Topic 不一样，需 AP teacher 真实 review
- ❌ Counter-frame essentialism risk —— synthesis 节点 framing 是否塌成单一答案，需要专家判断
- ❌ ESL Lexile 800-1000 实测 —— 需要 ESL teacher 真实评估
- ❌ Cultural sensitivity nuance（如 Devorah "let go" vs "recognize" 是否反映 Jewish memory tradition / 拉丁兵屠 Aisha 父亲场景的文化精度）—— 需要文化专家
- ❌ 角色心理 plausibility（14 岁创伤性否认是否成立 / 12 岁穆斯林神学疑问是否过早）—— 需要儿童心理学/阅读专家

**结论**：第 8 条 A-F 防的是"低层 systemic 错误"（事故重复发生 + 跨 Topic 一致 + 可机械检测）。**4-agent review 仍然必跑**——它防的是"高层 substantive 错误"（具体事实 + 文化 + 教学法判断）。

---

## 产品 3 层架构

```
┌─────────────────────────────────────────┐
│  Layer 1: Atlas / 概念图（已有）         │ ← 抽象 + 术语化 + 脑图
│  目标：识别 + 检索 + 课前/课中扫一眼      │   像 AP 备考思维导图
│  取材：narrative §2 制度层 + §7 DBQ 训练  │   "短而密，公式表式"
│        + §9 historiography 抽象框架      │
├─────────────────────────────────────────┤
│  Layer 2: 对话学习（核心）                │ ← 生动 + 画面 + 故事化
│  目标：体验 + 共情 + 锚定情绪记忆          │   像明朝那些事儿 / 罗马帝国 podcast
│  取材：narrative §1 锚点 + §3 主角 +      │   "字数自由，画面密度优先"
│        §4 故事 + §5 一手史料 + §6 影响    │   永远 VIVID 模式
│        + §8 同时代中国（结构对照）         │
│  ⚠️ 禁取：§7 / §9 / §10 / §11（留给 1+3）  │
├─────────────────────────────────────────┤
│  Layer 3: Mastery 通关 / 复习            │ ← 抽象 + 专业 + 评估
│  目标：迁移 + AP rigor + 掌握度            │   像 SAT/AP 题 + 评分点
│  取材：narrative §10 误解 + §11 思考问题  │   "回到术语和论证"
│        + §7 DBQ 训练 + §9 historiography  │
└─────────────────────────────────────────┘
```

**3 层无缝衔接 — Synthesis 桥**：
对话最后一轮（T13 = move=seal）**不再是"留白开放题"**——是**升华整理**。
"用你自己的话整理今天学的"——这一轮把 Layer 2 的体验**带上 Layer 3 的语境**，
让接下来的 Mastery 测试不突兀。

---

## 用户主动按钮（不上 AI 自动状态机）

对话界面 3 个按钮，**用户主动声明状态 = 100% 准确，无 AI 误诊**：

| 按钮 | AI 行为 |
|---|---|
| 😴 我累了，听就好 | 切纯讲故事模式（VIVID 风格，不问问题） |
| 🤔 我没懂 | **换角度重讲**——更具象、更生动、信息更全面 |
| ⏭️ 跳过这部分 | 1 句话总结进下一轮 |

**关键 — "我没懂" 不是更短**（用户 2026-04-29 钉死）：
> 重讲不是更简单更短。更短不意味着用户能懂——和字数无关，和**形象生动 + 信息全面**相关。

**正例**（"我没懂" 后 AI 应该这么做）：
> 用户："我没懂教权 vs 王权这个概念"
>
> AI（**换更具体的人物 + 更全的场景**重讲）：
> "1077 年冬天，神圣罗马帝国的皇帝 Henry IV 跑到意大利北部一个叫 Canossa 的山堡——
> 在雪地里光脚跪了 3 天 3 夜，求里面的教皇 Gregory VII 原谅。皇帝跪教皇——这场面
> 1100 年欧洲只有这一次。这就是教权（教皇这边）和王权（皇帝这边）的张力——
> 它俩谁也吃不下谁，互相瞪了几百年。
>
> Magna Carta 那年（1215），离 Canossa 跪那次只过了 138 年。教皇 Innocent III 和
> John 国王背后是同一种张力。"

**反例**（错的"我没懂" 处理）：
> "教权 = 教皇的权力，王权 = 国王的权力，两个互相牵制。" ← 更短了但更抽象，13 岁还是没懂

---

## 真分心的真解 — 家长报告

15% 真分心案例 AI 救不回，**真解是家长**。每个 Topic 完成后生成报告：

```
Willow 今天 Crusades 学习记录
==============================
完成度: 100%（13 轮全跑完）
平均回答字数: 11 字（往常 ~25 字）
状态信号: 中段 5 轮答得短促，可能不在状态

📌 给爸妈的晚饭桌问题（看她能不能答出来）：

① 1095 年法国老头喊一嗓子 10 万人就走 4000 公里——什么承诺最关键？
   （目标答案：罪全免 / plenary indulgence）

② Saladin 1187 不屠耶路撒冷只是政治算计还是真有"骑士风度"？
   （没标准答案 — 看她能不能给两边视角）

⚠️ 她在"哈里发 vs 苏丹"卡了——你可以说：
   "Caliph 是名义上的，Sultan 是实际管事的——
    像我们公司董事长 vs 总经理"
   再问她："那如果董事长和总经理意见不一样会怎样？"
```

**这是 Chinese 家长会 buy 的产品**：
- 知道**孩子在学什么**——不是抽象"今天学了什么"，是**具体可问的题**
- 自己**能补位**——AI 给"剧本"知道怎么问
- 接受**外部监督孩子**——不是美式"放手让她自己学"

---

## 12 步流程

### 第 1 步：选 Topic（中美课纲交叉痛点）

**判断标准**（按优先级）：
- 中国课纲不教 + 美国课纲核心 + 长尾意义清晰
- 中国家长辅导不了（家长盲区 = 真痛点）
- 7-12 年级孩子在加州 / 德州 / 纽约课堂会遇到

**反例**：
- ❌ 美国独立战争（中国课纲也讲，家长辅导得了）
- ✅ Magna Carta（中国课纲不讲，家长不熟，AP 反复考）
- ✅ Crusades（中国课纲不讲，家长不熟，现代地缘政治持续投射）

### 第 2 步：决定 qaTemplate（问答模板）

**3 种已有模板**：

| 模板 | 复杂度 | 轮数 | 例 |
|---|---|---|---|
| `simple-binary` | 单文件单时刻 / 二元冲突 | **9-13** | Magna Carta / Bill of Rights / Declaration of Independence |
| `multi-faction` | 3+ 势力 / 长跨度 | **13-15** | Crusades / 30 Years' War / WWI |
| `long-arc` | 200+ 年长时段 / 多次转折 | **13-17** | 工业革命 / Civil Rights Movement |

**轮次原则（用户 2026-04-27 钉死）**：
> 轮次跟着内容走，密度跟着思考走。
> **轮多不一定好——可能给信息不够让用户瞎猜**。
> **轮少不一定好——可能塞太多让用户消化不了**。
> 找平衡：**每轮 Deliver 段 30-60 字够她想，Provoke 锚定在那个 Deliver 上**。

### 第 3 步：KB 拉相关实体

```bash
# 编辑 data/history-knowledge-base/_manifest.json 加入新实体
# 然后跑：
npm run kb:fetch
```

每个 person / event / place 必须有 Wikidata QID 校验过（防 AI 幻觉伪 QID — 见 [marketing dev-log Wikidata disaster entry](../../marketing/dev-log/entries/2026-04-15-wikidata-hallucination-disaster.md)）。

### 第 4 步：Opus 写 narrative

**用 Anthropic Claude Opus**（最强模型）写。**不要用 DeepSeek 写 narrative**——之前实验证明 DeepSeek 在长结构化历史教学内容上比 Opus 弱一档。

参考 [magna-carta-1215.md](magna-carta-1215.md) / [crusades-1099.md](crusades-1099.md) 模板。

#### narrative §3-§5 写作约束："明朝那些事儿密度"（2026-04-28 钉死）

**核心公理**：累不累跟字数无关，跟**抽象度**有关。
- 100K 字的明朝那些事儿看完不累（**故事密度高**）
- 1K 字的康德导读第一段就睡着（**抽象密度高**）

**对话层取材自 §3 主角 / §4 故事 / §5 一手史料**——这三节必须满足"明朝那些事儿密度"：

**抽象三件套** — 每出现一个抽象概念（如"教权 vs 王权"/"政教合一"/"封建合同"），**立刻**挂上：
1. **1 个具体人物名**（不能是"教皇"——要是"Gregory VII"；不能是"国王"——要是"Henry IV"）
2. **1 个具体时间**（年/月/日精度递增；冬天/雪地/夜里 也算细节）
3. **1 个具体感官细节**（雪地 / 3 天 / 光脚 / 跪 / 5 万人 / 4000 公里 / 血及马腹 / 40 公斤）

**反例 vs 正例**：

❌ 抽象密度过高（13 岁脑子要解压 4 个概念，累）：
> "1077 年 Canossa：教权 vs 王权高潮"（13 字，0 画面）

✅ 明朝那些事儿密度（直接看见，不需要解压）：
> "1077 年冬天，神圣罗马帝国皇帝 Henry IV 跑到意大利北部一个叫 Canossa 的山堡——
> 在雪地里光脚跪了 3 天 3 夜，求里面的教皇 Gregory VII 原谅。皇帝跪教皇——
> 这场面 1100 年欧洲只有这一次。"（85 字，5 个具体画面）

**字数 6.5 倍，13 岁读起来反而轻松 10 倍。**

§3-§5 写或拓展时按这个 checklist 自检：
- [ ] 每个主要人物有不少于 200 字 bio，含**至少 3 个感官细节**（外貌/动作/口头禅/具体场景）
- [ ] 每个 plot beat 有不少于 150 字场景，含**具体时间 + 地点 + 人物动作 + 感官细节**
- [ ] 每段 primary source 引语**配场景** + **配现代化解读**
- [ ] 趣味反讽细节散布（Crown Jewels in The Wash / Anna Komnene 软禁中写完巨著 / Urban II 死前 14 天）
- [ ] 现代用语穿插（"奇耻大辱" / "国王败家天花板" / "投机派 vs 真信派"）让中文流畅

§7 DBQ + §9 historiography + §11 思考题——**这三节可以保持抽象**，因为它们服务 Atlas / Mastery 不服务对话。对话 prompt 显式禁止从这三节取材（见 buildNarrativeSystemPrompt 实现）。

**12 节 + 4 附录结构（严格遵循）**：

```
0. 教材锚点 — 明示 publisher/series/chapter/lesson/page
1. 一句话锚点 — 抓 13 岁注意力，多势力 Topic 必须三方视角并列开场
2. 舞台 — L0 地理 / L1 气候 / L2 社会 / L3 制度 / L4 事件
3. 主角们 — 3-7 个，多元（含至少 1 个无权方 / 对立面 / 虚构桥接）
4. 故事（plot beats）— 时间线 + 转折 + 反讽细节
5. 文件深读（primary source）— 原文 + Lexile 7 年级简化版 + 多视角并读
6. 影响（短/中/长期）— 长尾连到现代
7. AP DBQ 思维训练 — stakeholder grid + Annales 5 层 + continuity/change
8. 同时代的中国 — 结构对照（Rule 0 一票否决维度）
9. 历史学家在争什么（historiography）— 多派并列 + 方法论
10. 常见误解（清坑专区）— 5-8 个被广泛流传的错
11. 思考问题 — 5-7 题开放式，**不下结论**

附录 A: 关键时间线
附录 B: 核心词汇
附录 C: 人物 cheat sheet
附录 D: 可视化提示（给 atlas / quiz / reading 模块取材用）
```

**写作 voice 约束**：
- 教科书 rigor + 7 年级可读性
- 趣味细节（"Lackland"/沼泽丢皇冠/Anna Komnene 软禁里写完巨著）必须有
- 中文为主导，英文术语带中文释义
- 价值观引导思考、不下结论

### 第 5 步：跑 narrative 结构验证

```bash
npm run validate:narratives
```

检查项：
- frontmatter 合法（topicId/title/textbookAnchor 完整）
- body > 1000 字符
- frontmatter.topicId 跟文件名匹配

任何 fail = 不能进下一步。

### 第 6 步：Sarah Chen reviewer audit

跑 Sarah Chen agent（`docs/HISTORY_REVIEWER_PERSONA.md`）做 8 维度评审：

1. Historical Accuracy ⭐ 一票否决（错史实必删）
2. Narrative Coherence
3. Inquiry Density
4. **China-Bridging Quality** ⭐ Rule 0 一票否决（任何 Whig / 反向 essentialism = 拒）
5. Cosplay Figures
6. Mastery Checks
7. Source Materials
8. Engagement Design

**输出 verdict**：SHIP / SHIP-WITH-FIXES / REWRITE

任何 SHIP-WITH-FIXES → 第 7 步。
REWRITE → 回第 4 步重写 narrative。

### 第 7 步：应用 Sarah 修订建议

按她列出的"必修"逐条改 narrative。**不要 cherry-pick** —— 必修就是必修。

修完重新跑第 5 步（结构验证）+ 第 6 步（Sarah 二审）。

### 第 8 步：跑 KB fact-check

```bash
npm run kb:fact-check {topicId}
```

检查：
- mustMemorize.vocab 词条年代不矛盾 KB
- 提到的人名是否在 KB 中且 commonMisconceptions 没被违反
- primarySources.attribution 标了 paraphrase / simplified

0 high / 0 medium fail → 进下一步。任何 high → 修。

### 第 9 步：跑 Willow simulator（4 persona）

```bash
DEEPSEEK_API_KEY=... npm run test:willow {topicId} all
```

4 persona × 13 轮 ≈ 52 grade。每 persona ≥ 80% pass。

**6 个 grade 维度**：
- A. single-action（4-slot 节奏算 1 个动作不算 4）
- B. empathy-first（用户答完后先共情再过渡）
- C. no-hallucination（细节都在 narrative 里）
- D. no-ui-promise（不说"去看地图"/"点开"等）
- E. neutrality（无 Whig / 无反向 essentialism）
- F. anti-guessing（用 deliver 信息能系统推理答 provoke 问题）

任何 persona < 80% → 回第 4 / 7 步看是 narrative 问题还是 turn 设计问题。

### 第 10 步：浏览器 5 分钟实测

founder（或孩子直接）真打开 `/history?topicId={id}` 走 5 分钟。

**Anti-Guessing 实测**：
- 走到 T3-T5 时停下来，问自己 / 孩子："如果我现在没看 AI 之前说的，能答这个问题吗？"
- 答得出 = 通过
- 只能瞎猜 = 回第 4 步加厚 narrative deliver 段

**Voice 实测**：
- AI 说话像不像"用心的老师"？
- 有没有套话 / 鸡汤 / 让看 UI 的指令？

任何"我女儿觉得别扭"= 回到对应步骤。

### 第 11 步：任何环节 fail → 回到对应步骤

不能跳过。**Crusades 4-27 就是因为我跳了第 9 步（Willow simulator）+ 第 10 步（实测）才翻车的**——所有自动检查全过，13 岁打开 5 分钟说"它说话好乱"。

### 第 12 步：全过 → ship

```js
// lib/history-topics.js
TOPIC_REGISTRY = [
  { id: '{topicId}', available: true, narrativeRequired: true, ... }
]
```

```bash
git add lib/history-narratives/{topicId}.md lib/history-topics.js
git commit -m "feat(history): {topicId} ships ..."
git push
```

---

## 流水线诊断（哪一步出问题修哪步）

| 症状 | 哪一步出问题 |
|---|---|
| 史实错误（人名/年代/数字） | 第 4 步（Opus 写 narrative）+ 第 6 步（Sarah audit） |
| AI 编造细节（hallucination） | 第 4 步（narrative 不够全）→ Willow simulator C 维度抓 |
| AI 让用户去看 UI | buildNarrativeSystemPrompt 硬禁令 + Willow simulator D 维度 |
| AI 一句话塞 5 件事 | buildNarrativeTurnPrompt 4-slot 纪律 + Willow A 维度 |
| 中国对照偏 Whig | Sarah Rule 0 + Willow E 维度 |
| 用户答得出"瞎猜" | narrative deliver 不够厚 + Willow F 维度（Anti-Guessing） |
| 用户答不上来"信息过载" | turn 设计太密集 → 拆成更多轮 |

---

## 不可妥协的硬门槛（任何一条 fail 必拦）

1. ❌ Sarah 给"REWRITE"verdict
2. ❌ KB fact-check 任何 high severity
3. ❌ Willow simulator 任何 persona < 60% pass
4. ❌ Willow E 维度（neutrality）跨 persona 平均 < 4/4
5. ❌ Willow F 维度（anti-guessing）跨 persona 平均 < 80%
6. ❌ 第 10 步实测 founder / 孩子说"别扭"

通过所有硬门槛 + 4 persona 平均 ≥ 80% → SHIP。

---

## 写作时间预估（38 个 Topic 总计）

每个 Topic：
- 第 4 步 Opus narrative：~3-4 小时（含查资料 + 写 12 节 + 4 附录）
- 第 6 + 7 步 Sarah review + apply：~1-2 小时
- 第 8-10 步验证：~1 小时
- **总：~5-7 小时 / Topic**

38 个 Topic = ~190-260 小时 = **5-7 周全职工作**（可分散到 3-6 个月）。

成本：
- Opus narrative tokens：~$0.50 / Topic × 38 ≈ **$20**
- Willow simulator 验证：~$1 / Topic × 38 ≈ **$40**
- DeepSeek runtime（用户层）：~$0.01 / 用户 / Topic（同行 1/10）

---

## 流程演化历史

| 日期 | 变更 |
|---|---|
| 2026-04-27 | **流程锁定 v1**：本文档发布。从 Crusades 翻车 + 二层架构升级总结而来 |
| 2026-04-28 | **流程升级 v2**：3 层架构（Atlas/对话/Mastery 各司其职）+ 明朝那些事儿密度 + Synthesis turn 桥接 |
| 2026-04-29 | **流程升级 v3**：VIVID always 不上 AI 自动状态机（DeepSeek 搞不定 nuance）；改用 3 用户主动按钮（累/没懂/跳过）+ 家长报告兜底真分心；"我没懂"重讲规则锁定（更具象更全面，不是更短） |

---

**任何修改这个流程的提议必须经过：① 在一个真实 Topic 上跑通 + ② founder approve**。流程是产品的护城河，不是写一遍就完。
