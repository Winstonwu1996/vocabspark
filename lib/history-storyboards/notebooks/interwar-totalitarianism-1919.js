// ─── 同伴笔记本架构 v1 · Interwar Years & Rise of Totalitarianism 1919-1939 ───
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）- 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）- 核心考点卡（覆盖卡 + 独立卡）
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）- 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（强人 actor / 民主派 mediator / 普通人 receiving-end 三条线）
//   - notebook 提供考点闭环（极权配方、合法夺权三级台阶、第48条、授权法案、大萧条传导、
//     斯大林五年计划、日本军国、凡尔赛/五四对照、totalitarianism vs fascism、能动性 vs 结构）
//
// 课纲对齐（取自 narrative §0）：
//   - AP World History Modern · Unit 7（1900-present · Global Conflict）Topic 7.3-7.5
//     （Causation in the Interwar Period / Economy in the Interwar Period /
//      Unresolved Tensions After WWI）
//   - California HSS Grade 10.7-10.8（两次世界大战之间 / 极权主义）
//
// 事实地基：对账 interwar-totalitarianism-1919-factledger.md
//   - 「极权配方/强人」标注为合成类型角色（比较框架，非单一史实）
//   - Niemöller「First they came」标注战后追述 / 多版本 / 非战间期档案
//   - Holodomor / 大清洗死亡数用区间口径（数百万）
//   - 纳粹 1932 成第一大党但从未过半（合法≠多数授权）
//
// schemaVersion: 1 · notebookVersion: interwar-totalitarianism-1919-v1

export var notebook = {
  topicId: 'interwar-totalitarianism-1919',
  topicNameCn: '战间期与极权主义兴起 1919-1939',
  topicNameEn: 'The Interwar Years & the Rise of Totalitarianism 1919-1939',
  schemaVersion: 1,
  companion: {
    nameCn: '小 U',
    nameEn: 'Xiao U',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小 U 的预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师说我们要学「战间期」（the Interwar Years）：一战结束（1919）到二战爆发（1939）
之间的那二十年。她说这是 AP World History Unit 7 的硬骨头，最爱考的就是
「极权为什么会在好几个国家同时冒出来」。

她说这门课最不一样的地方是：它问的不是「为什么会有第二次世界大战」，
而是更让人发毛的那个：当时世界上识字率最高、文化最深的几个国家里，
普通人是怎么一步步、常常是用合法的选票和欢呼，把自由亲手交给独裁者的？

她给了一张纸，上面写着这些词：

Treaty of Versailles（凡尔赛条约）、the Great Depression（大萧条）、
totalitarianism（极权主义）、fascism（法西斯主义）、Article 48（魏玛宪法第48条）、
Enabling Act（授权法案）、Five-Year Plan（五年计划）、五四运动（May Fourth Movement）。

我先记下来，等下读三个故事：强人（许诺让国家重新伟大的人）、
想守住共和却失败的民主派、又冷又饿投了是票或只是沉默的普通人。
读完再回来对照这张单子，看我能不能解释。

老师抄给我一句话，我记在笔记本第一页：「极权很少靠一夜政变，
它更常踩着合法的台阶、借着民众的欢呼，一级一级走上来。这才是它最可怕的地方。」`,
    en: `Today my teacher said we're learning the Interwar Years: the twenty years between the
end of WWI (1919) and the start of WWII (1939). She said it's the hard bone of AP World
History Unit 7, and the favorite exam question is "why did totalitarian regimes rise in
several countries at the same time."

She said the special thing about this topic is the question it asks. Not "why was there a
Second World War," but the more unsettling one: in some of the most literate, most cultured
countries in the world at the time, how did ordinary people, step by step and often with legal
votes and cheers, hand their freedom over to dictators?

She gave us a sheet with these terms:

Treaty of Versailles, the Great Depression, totalitarianism, fascism, Article 48 (Weimar
constitution), Enabling Act, Five-Year Plan, and the May Fourth Movement.

Let me write these down. After I read the three stories: the strongman (the man who promised
to make the nation great again), the democrat who tried and failed to save the republic, and
the ordinary person, cold and hungry, who voted yes or just stayed silent. Then I'll come
back and check whether I can explain each.

Teacher copied one line for me, on the first page of my notebook: "Totalitarianism rarely
comes by a one-night coup. Far more often it climbs the legal staircase, carried by the
cheers of the crowd, one step at a time. That is the most frightening thing about it."`,
    keyTerms: [
      { cn: '战间期', en: 'the Interwar Years (1919-1939)' },
      { cn: '凡尔赛条约 / 战争罪责条款', en: 'Treaty of Versailles / war guilt clause (Art. 231)' },
      { cn: '赔款', en: 'reparations' },
      { cn: '大萧条', en: 'the Great Depression' },
      { cn: '金本位', en: 'gold standard' },
      { cn: '极权主义', en: 'totalitarianism' },
      { cn: '法西斯主义', en: 'fascism' },
      { cn: '向罗马进军', en: 'March on Rome' },
      { cn: '魏玛宪法第 48 条', en: 'Article 48 (Weimar constitution)' },
      { cn: '国会大厦 / 国会纵火法令', en: 'Reichstag / Reichstag Fire Decree' },
      { cn: '授权法案', en: 'Enabling Act' },
      { cn: '五年计划', en: 'Five-Year Plan' },
      { cn: '集体化 / 乌克兰大饥荒', en: 'collectivization / Holodomor' },
      { cn: '大清洗', en: 'the Great Purge' },
      { cn: '关东军 / 九一八事变', en: 'Kwantung Army / Mukden Incident' },
      { cn: '五四运动', en: 'May Fourth Movement' },
      { cn: '能动性 vs 结构', en: 'agency vs structure' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '强人（类型角色）',
        nameEn: 'The Strongman (type figure)',
        ipa: null,
        roleCn: '不指某一个独裁者，而是 1920-30 年代在多国反复出现的同一种人物：在危机中指认「敌人」、许诺秩序与荣光、踩着合法台阶夺权（合成类型角色，比较框架）',
        roleEn: 'Not one dictator but the same kind of figure recurring across countries in the 1920s-30s: names an enemy in crisis, promises order and glory, climbs legal steps to power (a synthetic type figure, a comparison frame)',
        mustKnow: true,
        audioKey: null,
      },
      {
        nameCn: '阿道夫·希特勒',
        nameEn: 'Adolf Hitler',
        ipa: '/ˈædɒlf ˈhɪtlər/',
        roleCn: '1933.1.30 被总统兴登堡合法任命为德国总理，后经国会纵火法令 + 授权法案建立一党独裁',
        roleEn: 'Legally appointed German chancellor by President Hindenburg on Jan 30 1933, then built a one-party dictatorship via the Reichstag Fire Decree and the Enabling Act',
        mustKnow: true,
        audioKey: 'adolf-hitler',
      },
      {
        nameCn: '贝尼托·墨索里尼',
        nameEn: 'Benito Mussolini',
        ipa: '/bɛˈniːtoʊ ˌmʊsəˈliːni/',
        roleCn: '意大利法西斯领袖，1922 年 March on Rome（大半虚张声势）后被国王任命为首相，第一个法西斯样板',
        roleEn: 'Italian Fascist leader, made prime minister by the king after the 1922 March on Rome (largely a bluff); the first Fascist model',
        mustKnow: true,
        audioKey: 'benito-mussolini',
      },
      {
        nameCn: '约瑟夫·斯大林',
        nameEn: 'Joseph Stalin',
        ipa: '/ˈdʒoʊzəf ˈstɑːlɪn/',
        roleCn: '苏联领袖，五年计划 + 强制集体化 + 大清洗，以巨大人命代价把农业国造成工业强国',
        roleEn: 'Soviet leader; the Five-Year Plan, forced collectivization, and the Great Purge turned a farming country into an industrial power at an enormous human cost',
        mustKnow: true,
        audioKey: 'joseph-stalin',
      },
      {
        nameCn: '保罗·冯·兴登堡',
        nameEn: 'Paul von Hindenburg',
        ipa: '/paʊl fɒn ˈhɪndənbɜːrɡ/',
        roleCn: '魏玛德国总统，1933 任命希特勒、依第 48 条签署国会纵火法令:民主滑落的关键节点',
        roleEn: 'President of Weimar Germany; appointed Hitler in 1933 and signed the Reichstag Fire Decree under Article 48, a key node in democracy\'s slide',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '民主派议员（虚构桥接人物）',
        nameEn: 'The Democrat (fictional bridging figure)',
        ipa: null,
        roleCn: '魏玛德国一位无名的温和民主派议员，代表试图用议会与法律守住共和、最终失败的一代守门人（虚构，处境写实）',
        roleEn: 'An unnamed moderate Weimar deputy standing for a generation of gatekeepers who tried to hold the republic with parliament and law, and failed (fictional, realistic situation)',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '沉默 / 投是票的普通人（虚构桥接人物）',
        nameEn: 'The Ordinary Person (fictional bridging figure)',
        ipa: null,
        roleCn: '大萧条里一个又冷又饿又怕的普通德国年轻人，在集会里找到归属、投票或沉默（虚构，DEFAULT 视角，处境写实）',
        roleEn: 'A cold, hungry, frightened young German in the Depression who found belonging at the rallies and voted or stayed silent (fictional, the DEFAULT lens, realistic situation)',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'treaty-of-versailles',
      termCn: '凡尔赛条约与战争罪责条款',
      termEn: 'Treaty of Versailles & the War Guilt Clause',
      standardRef: ['AP World Unit 7.5 (Unresolved Tensions After WWI)', 'CA HSS 10.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'strongman-actor',
        nodeIds: ['iwt-strongman-n2', 'iwt-democrat-n2', 'iwt-citizen-n2'],
        xiaoweiNote: {
          cn: `三个视角的第 2 节都从这里开始。一战 1918 年结束，1919 年战胜国逼德国签《凡尔赛条约》。
我把它的「三件痛」背成一句：**罪责 + 领土 + 赔款**。
- **第 231 条（war guilt clause，战争罪责条款）**：白纸黑字写「这场战争全是德国的错」。
- 割走德国领土与殖民地。
- 索要天文数字赔款（1921 年定约 1320 亿金马克）。

考点关键句：凡尔赛条约埋下的**怨恨**是极权兴起的**远因之一**（注意「之一」，别写成单一原因）:
它没有发动下一场战争，但它**喂养了那些想发动战争的人**。

老师反复纠正一个误解：误「凡尔赛条约直接导致了二战」→ 正：怨恨是远因，
还要叠加大萧条、民主制度漏洞、和具体去利用怨恨的人，才走到二战。是多因素，不是一条直线。`,
          en: `Node 2 of all three lenses starts here. WWI ended in 1918; in 1919 the victors forced
Germany to sign the Treaty of Versailles. I memorize its "three pains" in one line:
**blame + territory + reparations**.
- **Article 231 (the war guilt clause)**: in black and white, "this war was all Germany's fault."
- Stripped away German territory and colonies.
- Demanded an astronomical reparations bill (set at ~132 billion gold marks in 1921).

Key exam sentence: the resentment Versailles planted was **one of the deep causes** of the rise
of totalitarianism (note "one of": don't write it as the single cause). It did not start the
next war, but it **fed the men who wanted to start one**.

Teacher keeps correcting a misconception: "the Treaty of Versailles directly caused WWII" -
in fact resentment was a distant cause; it took the Great Depression, the flaws in democracy,
and specific people who exploited the resentment to reach WWII. Many causes, not a straight line.`,
        },
      },
    },

    {
      id: 'great-depression-transmission',
      termCn: '大萧条与全球传导（金本位）',
      termEn: 'The Great Depression & Global Transmission (gold standard)',
      standardRef: ['AP World Unit 7.4 (Economy in the Interwar Period)', 'CA HSS 10.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'democrat-mediator',
        nodeIds: ['iwt-strongman-n2', 'iwt-democrat-n4', 'iwt-citizen-n2'],
        xiaoweiNote: {
          cn: `民主派那一遍第 4 节讲得最清楚：大萧条是「把全球点着的那根火柴」。
1929 年 10 月华尔街股市崩盘。为什么美国崩盘会烧到德国？因为 **gold standard（金本位）**
把各国经济紧紧绑在一起:美国一抽回贷款，德国经济瞬间塌方。到 1932 年，德国失业约 **600 万**。

我把因果链背顺：**华尔街崩盘 →（沿金本位）→ 美国抽回德国贷款 → 德国失业 600 万 → 选民抛弃中间派 → 倒向强人**。

考点关键句：大萧条是极权兴起的**催化剂/导火索**:它把凡尔赛埋下的怨恨**点着了**。
AP 爱考「经济危机怎么变成政治崩溃」，这条金本位传导链就是标准答案。

记忆锚：**饥饿和绝望，是极权主义最好的肥料。**（这是三个视角反复出现的一句话。）`,
          en: `The democrat's Node 4 is clearest: the Depression was "the match that lit the whole world."
In October 1929 the Wall Street stock market crashed. Why did an American crash burn all the way
to Germany? Because the **gold standard** tied national economies tightly together: the moment
America pulled back its loans, the German economy collapsed. By 1932, German unemployment hit
about **6 million**.

I memorize the chain in order: **Wall Street Crash → (via the gold standard) → America pulls
German loans → 6 million German unemployed → voters abandon the center → swing to the strongman**.

Key exam sentence: the Depression was the **catalyst / trigger** of the rise of totalitarianism -
it **set fire** to the resentment Versailles had planted. AP loves "how an economic crisis becomes
a political collapse," and this gold-standard transmission chain is the standard answer.

Memory anchor: **hunger and despair are the best fertilizer for totalitarianism.** (A line that
recurs across all three lenses.)`,
        },
      },
    },

    {
      id: 'legal-staircase-to-power',
      termCn: '合法夺权的三级台阶',
      termEn: 'The Legal Staircase to Power',
      standardRef: ['AP World Unit 7.3 (Causation in the Interwar Period)', 'AP DBQ rubric', 'CA HSS 10.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'strongman-actor',
        nodeIds: ['iwt-strongman-n4', 'iwt-strongman-n5', 'iwt-strongman-n6', 'iwt-strongman-n7'],
        xiaoweiNote: {
          cn: `强人那一遍第 4-7 节整条线就是这个，也是这门课**最该被看见的画面**。
极权不是靠一夜政变，是踩着「合法」的台阶一级级走上来的。我把它背成**三级台阶**：

**① 合法上台**：1933.1.30 希特勒被总统兴登堡**合法任命**为总理（不是政变！1932 纳粹靠选票成第一大党，但**从没过半**）。
**② 借危机发紧急法令**：1933.2.27 国会大厦（Reichstag）失火 → 第二天依第 48 条签《国会纵火法令》→ 一夜中止言论/集会/新闻自由。
**③ 议会自交立法权**：1933.3.23《授权法案》（Enabling Act）:议会用合法投票把立法权交给希特勒内阁，**自己投票结束了自己**。

考点关键句：**每一步都「合法」**:这正是极权最可怕的地方。
误「希特勒靠暴力政变夺权」→ 正：他是被合法任命的，之后才一步步把民主拆掉。
这条「合法台阶」是 AP DBQ 论证「能动性 vs 结构」时最有力的证据。`,
          en: `The strongman's Nodes 4-7 are this whole through-line, and it's the **picture this topic
most wants you to see**. Totalitarianism didn't come by a one-night coup; it climbed a "legal"
staircase one step at a time. I memorize it as **three steps**:

**1. Take power legally**: Jan 30 1933 Hitler was **legally appointed** chancellor by President
Hindenburg (not a coup! In 1932 the Nazis became the largest party by votes, but **never won a
majority**).
**2. Use a crisis for an emergency decree**: Feb 27 1933 the Reichstag caught fire → the next day,
under Article 48, the Reichstag Fire Decree was signed → speech, assembly, and press suspended overnight.
**3. Parliament hands over lawmaking**: Mar 23 1933 the Enabling Act: parliament voted, legally,
to give lawmaking power to Hitler's cabinet, **voting itself out of existence**.

Key exam sentence: **every step was "legal"**: that's the most frightening thing about it.
Misconception: "Hitler seized power by a violent coup" → in fact he was legally appointed, then
dismantled democracy step by step. This "legal staircase" is the strongest evidence for an AP DBQ
on "agency vs structure."`,
        },
      },
    },

    {
      id: 'article-48-emergency-power',
      termCn: '魏玛宪法第 48 条（紧急权力的陷阱）',
      termEn: 'Article 48 (the Emergency-Power Trap)',
      standardRef: ['AP World Unit 7.3', 'AP DBQ rubric (primary source)', 'CA HSS 10.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'strongman-actor',
        nodeIds: ['iwt-strongman-n5', 'iwt-democrat-n6'],
        xiaoweiNote: {
          cn: `强人第 5 节和民主派第 6 节都盯着这一条。魏玛宪法的 **Article 48（第 48 条）**
给了总统一个「紧急按钮」：遇到紧急状态，可以绕过议会、直接发法令、暂停一些公民自由。

写它的人是**好意**:本意是应急。但它最致命的破绽，老师让我记死：
**「紧急状态」由谁来认定？条文没说清。** 这就成了拆毁民主的钥匙。

考点关键句：一个**为保护民主而设计**的条款，成了**拆毁民主的工具**:
这是本课最经典的「primary source 反讽」，DBQ 常拿它考「制度漏洞如何被利用」。

迁移钩子（老师特别强调）：**警惕那些以「紧急」为名要求特别权力的人。**
人在害怕的时候最容易点头说「拿去吧，只要你能让我安全」:这正是危险的入口。`,
          en: `The strongman's Node 5 and the democrat's Node 6 both fix on this clause. The Weimar
constitution's **Article 48** gave the president an "emergency button": in a state of emergency he
could bypass parliament, issue decrees directly, and suspend some civil liberties.

Its authors meant **well**: it was designed for emergencies. But its fatal flaw, which teacher made
me memorize: **who decides what counts as an "emergency"? The text never made it clear.** That became
the key to dismantling democracy.

Key exam sentence: a clause **designed to protect democracy** became a **tool to dismantle it** -
the classic "primary-source irony" of this topic, and DBQs use it to test "how a structural flaw
gets exploited."

Transfer hook (teacher stressed it): **beware anyone who demands special power in the name of an
"emergency."** A frightened person most easily nods "take it, as long as you keep me safe": and that
is exactly the dangerous doorway.`,
        },
      },
    },

    {
      id: 'enabling-act',
      termCn: '授权法案（民主的自杀）',
      termEn: 'The Enabling Act (Democracy\'s Suicide)',
      standardRef: ['AP World Unit 7.3', 'AP DBQ rubric (primary source)', 'CA HSS 10.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'democrat-mediator',
        nodeIds: ['iwt-strongman-n7', 'iwt-democrat-n7'],
        xiaoweiNote: {
          cn: `强人第 7 节和民主派第 7 节是同一个时刻的两个视角:这是全课最戳人的一幕。
1933 年 3 月 23 日，在逮捕和恐吓的气氛里，议会表决 **《授权法案》（Enabling Act）**：
今后政府可以**不经议会、甚至违反宪法**地立法。

说白了：**一个民主议会，用一次完全合法的投票，亲手结束了自己。**
民主派那一遍让我站在投反对票的少数那一边:你举手投「不」，可抬头一看：不够，远远不够。

考点关键句：民主的崩溃**不一定**伴随坦克和枪声:它可以发生在一间**挂着宪法的议事厅**里，
由**穿西装的人举手通过**。这是 AP 最爱的 primary-source 反讽，常和第 48 条配套考。

记忆锚：**第 48 条是钥匙，授权法案是把门焊死。** 两步连起来 = 合法台阶的②和③。`,
          en: `The strongman's Node 7 and the democrat's Node 7 are two views of the same moment: the most
piercing scene in the topic. On March 23 1933, in an atmosphere of arrests and intimidation,
parliament voted on the **Enabling Act**: from then on the government could make laws **without
parliament, even against the constitution**.

In plain words: **a democratic parliament, by a completely legal vote, ended itself with its own
hands.** The democrat's lens puts you among the minority who voted no: you raise your hand to vote
"no," but look up and see: not enough, far from enough.

Key exam sentence: democracy's collapse **need not** come with tanks and gunfire: it can happen in
a **hall with the constitution on the wall**, passed by **men in suits raising their hands**. This is
AP's favorite primary-source irony, often tested alongside Article 48.

Memory anchor: **Article 48 is the key; the Enabling Act welds the door shut.** The two steps together
= steps 2 and 3 of the legal staircase.`,
        },
      },
    },

    {
      id: 'stalin-five-year-plan',
      termCn: '斯大林五年计划（成就与代价同体）',
      termEn: 'Stalin\'s Five-Year Plan (achievement and cost in one)',
      standardRef: ['AP World Unit 7.3 (comparison)', 'AP DBQ rubric', 'CA HSS 10.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'strongman-actor',
        nodeIds: ['iwt-strongman-n8'],
        xiaoweiNote: {
          cn: `强人第 8 节的比较框架里讲到苏联。斯大林用 **Five-Year Plan（五年计划）**
把一个农业国硬推成工业强国。这是真的:苏联确实工业化了。

但老师反复纠正一个误区：误「五年计划是纯粹的成功 / 纯粹的灾难」→
正：**「成就」与「浩劫」同体，不能只讲一面。** 代价是：
- **强制集体化（collectivization）** + 征粮 → **大饥荒**（如乌克兰 **Holodomor**，数百万人活活饿死）。
- **大清洗（Great Purge，1936-38）**：斯大林处决「可疑敌人」，又是数百万人死。

考点关键句（Rule 0 中性）：斯大林证明极权可以**真的**建起工业强国，
但它的「成就」是**用无数生命堆出来的**:AP DBQ 要的就是这种「既不美化也不全盘否定」的复杂分析。

提醒：苏联（左翼）和纳粹（右翼）被放进同一个「极权」框子，是**比较框架**，不是说它们一模一样。`,
          en: `The strongman's Node 8 comparison frame covers the USSR. Stalin used the **Five-Year Plan**
to push a farming country into being an industrial power. That part is true: the USSR did industrialize.

But teacher keeps correcting a trap: "the Five-Year Plan was a pure success / a pure disaster" →
in fact **achievement and catastrophe sit in one body; you can't tell only one side.** The cost:
- **Collectivization** + grain seizures → **mass famine** (e.g. the Ukraine **Holodomor**, millions
  starved to death).
- The **Great Purge (1936-38)**: Stalin executing "suspected enemies," again millions dead.

Key exam sentence (Rule 0, neutral): Stalin proved totalitarianism could **actually** build an
industrial power, but its "achievement" was **piled on countless lives**: exactly the "neither
whitewash nor wholesale condemnation" complexity an AP DBQ rewards.

Reminder: putting the USSR (left) and Nazi Germany (right) in one "totalitarian" box is a **comparison
frame**, not a claim that they were identical.`,
        },
      },
    },

    {
      id: 'japan-militarism-china',
      termCn: '日本军国主义与对中国的侵略',
      termEn: 'Japanese Militarism & the Invasion of China',
      standardRef: ['AP World Unit 7.3 (comparison)', 'CA HSS 10.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'strongman-actor',
        nodeIds: ['iwt-strongman-n8', 'iwt-democrat-n9', 'iwt-citizen-n9'],
        xiaoweiNote: {
          cn: `强人第 8 节、民主派和普通人各自的第 9 节都讲到日本:这条线对华裔的我们最有共鸣。
日本是一战战胜国、跻身列强，却在大萧条里农村破产。一批认为「文官软弱」的青年军官，
相信只有军队和对外扩张才能救日本，目光投向中国。

我把日本侵华的两个标志事件背牢：
- **1931 九一八事变（Mukden Incident）**：关东军（Kwantung Army，日本驻在中国的军队）
  自导自演、炸自家铁路嫁祸，借口强占中国东北，扶植伪满洲国。
- **1937 卢沟桥事变（Marco Polo Bridge Incident）**：日本发动**全面侵华**，中国进入艰苦抗战。

考点关键句：日本军国不是「孤立的远方事件」:它和欧洲法西斯**同源**
（大萧条 + 军部压倒文官 + 对外扩张找出路），最终汇入同一场二战。
**欧洲极权引爆欧洲战场，日本军国引爆中国战场:同一场全球灾难的两个引信。**`,
          en: `The strongman's Node 8 and the democrat's and ordinary person's Node 9 all cover Japan: the
line that resonates most for those of us with Chinese heritage. Japan was a WWI victor and a great
power, yet the Depression bankrupted its countryside. A group of young officers who thought "the
civilians were weak" believed only the army and expansion could save Japan, and turned their eyes
to China.

I memorize the two landmark events of Japan's invasion:
- **1931 Mukden Incident**: the Kwantung Army (Japan's army stationed in China) staged it, blew up its
  own railway to lay the blame, used it as a pretext to seize northeast China, and set up the puppet
  state of Manchukuo.
- **1937 Marco Polo Bridge Incident**: Japan launched its **full invasion of China**, and China entered
  its bitter war of resistance.

Key exam sentence: Japanese militarism was not an "isolated faraway event": it shared the **same roots**
as European fascism (Depression + military overriding civilians + expansion as a way out), and flowed
into the same WWII. **European totalitarianism lit the European theater; Japanese militarism lit the
Chinese theater: two fuses of one global catastrophe.**`,
        },
      },
    },

    {
      id: 'versailles-and-may-fourth',
      termCn: '同一份凡尔赛，两个方向（德国 vs 五四）',
      termEn: 'One Versailles, Two Directions (Germany vs the May Fourth Movement)',
      standardRef: ['AP World Unit 7.5', 'CA HSS 10.6 / 10.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'democrat-mediator',
        nodeIds: ['iwt-democrat-n9', 'iwt-citizen-n9'],
        xiaoweiNote: {
          cn: `民主派和普通人各自的第 9 节都把镜头转向中国，这是全课最好的「全球对照」考点。
关键史实：**同一份《凡尔赛条约》**，把战败国德国在**山东**的权益不还给中国、反而判给日本。
消息传到北京，**1919 年 5 月 4 日**学生涌上街头:这就是 **五四运动（May Fourth Movement）**，
最终迫使中国代表团**拒签**条约。

我把对照背成一句：**同一份屈辱，在德国点燃了复仇（走向极权），在中国点燃了觉醒（走向救亡）。**

但老师特别提醒一个 Rule 0 红线（这条要记死）：**不能把中国一侧浪漫化成「唯一清醒的受害者」、
也不能把德国一侧简化成「集体疯狂」。** 故事里普通人那一遍说得很准：「不是哪边的人更清醒，
是同一股怒火，在不同的社会里被引向了完全不同的方向。」两边都是普通人，只是被引向了不同的路。

考点关键句：这是「同一场全球危机的两面性」的最佳对照:AP 比较题、全球史视角都爱考。`,
          en: `The democrat's and ordinary person's Node 9 both turn the camera to China, the topic's best
"global contrast" point. Key fact: the **same Treaty of Versailles** refused to return defeated
Germany's rights in **Shandong** to China and handed them to Japan instead. When the news reached
Beijing, on **May 4, 1919**, students flooded the streets: the **May Fourth Movement**: and finally
forced the Chinese delegation to **refuse to sign** the treaty.

I memorize the contrast in one line: **the same humiliation lit revenge in Germany (toward
totalitarianism) and awakening in China (toward national salvation).**

But teacher flagged a Rule 0 red line (memorize this one): **do not romanticize the Chinese side as
"the only clear-eyed victim," and do not flatten the German side into "collective madness."** The
ordinary person's lens says it well: "it was not that one side was more clear-eyed; it was the same
fire of anger, steered in two completely different directions by two different societies." Both sides
were ordinary people, just steered onto different roads.

Key exam sentence: this is the best contrast for "the two faces of one global crisis": AP comparison
questions and global-history framing love it.`,
        },
      },
    },

    {
      id: 'totalitarianism-vs-fascism',
      termCn: '极权主义 vs 法西斯主义（概念辨析）',
      termEn: 'Totalitarianism vs Fascism (concept distinction)',
      standardRef: ['AP World Unit 7.3', 'AP World: historiography'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'strongman-actor', nodeId: 'iwt-strongman-n8', context: '强人把墨/希/斯/日放进同一个「比较框架」，明说不是一模一样' },
        ],
      },
      standaloneText: {
        cn: `这两个词故事里反复用到，但没单独定义过，AP 考你能不能**分清**它们，所以单列一张卡。

**极权主义（totalitarianism）** = 一种更**宽**的概念：国家试图控制社会与个人生活的
**几乎所有方面**（政治、经济、文化、思想、私人领域）。靠单一政党、领袖崇拜、
秘密警察、宣传、消灭异见来实现。**纳粹德国和斯大林苏联都算极权**:
哪怕一个是右翼、一个是左翼。

**法西斯主义（fascism）** = 一种更**窄**、更**具体**的意识形态，属于**右翼**：
极端民族主义 + 强人独裁 + 军国主义 + 反对自由民主与共产主义。
**意大利（墨索里尼）和纳粹德国是法西斯**；**苏联不是法西斯**（它是共产主义/左翼），
但苏联**是**极权。

一句话记牢：**所有法西斯政权都是极权，但不是所有极权政权都是法西斯**（苏联就不是）。

**历史学界的争论（historiography，AP 高阶考点）**：把纳粹和苏联放进同一个「极权」
框子比较，本身就有争议。一派（如 Hannah Arendt 路径）强调它们的**共同结构**；
另一派强调**左翼 vs 右翼**在意识形态和社会基础上的根本差异，警告这个框架可能
模糊重要区别。故事里强人说「这是比较框架，不是说他们一模一样」，就是在小心处理这个争论。

考点关键句：totalitarianism 是控制范围的概念（宽），fascism 是意识形态的概念（窄、右翼）；
能正确归类四个政权（德=法西斯+极权 / 意=法西斯+极权 / 苏=极权非法西斯 / 日=军国主义）= AP 加分。`,
        en: `These two words appear all over the story but are never defined on their own; AP tests whether
you can **tell them apart**, so here's a dedicated card.

**Totalitarianism** = the **broader** concept: the state tries to control **almost every aspect** of
social and personal life (political, economic, cultural, intellectual, private). Achieved through a
single party, a leader cult, secret police, propaganda, and the crushing of dissent. **Both Nazi
Germany and Stalin's USSR count as totalitarian**: even though one is right-wing and the other left.

**Fascism** = a **narrower, more specific** ideology, on the **right**: extreme nationalism +
strongman dictatorship + militarism + opposition to liberal democracy and communism. **Italy
(Mussolini) and Nazi Germany are fascist**; **the USSR is not fascist** (it's communist / left), but
the USSR **is** totalitarian.

One line to lock in: **all fascist regimes are totalitarian, but not all totalitarian regimes are
fascist** (the USSR isn't).

**The historiography debate (an advanced AP point)**: comparing the Nazis and the USSR in one
"totalitarian" box is itself contested. One camp (e.g. the Hannah Arendt approach) stresses their
**shared structure**; another stresses the fundamental **left vs right** differences in ideology and
social base, warning the frame can blur important distinctions. When the story's strongman says "this
is a comparison frame, not a claim they're identical," he is carefully handling that debate.

Key exam sentence: totalitarianism is a concept about the scope of control (broad); fascism is an
ideological concept (narrow, right-wing); correctly classifying the four regimes (Germany = fascist +
totalitarian / Italy = fascist + totalitarian / USSR = totalitarian, not fascist / Japan = militarist)
= AP points.`,
      },
      xiaoweiNote: {
        cn: `这张卡我一开始最容易搞混，因为故事里两个词混着用。老师的口诀帮了我：
**「极权」看控制多广，「法西斯」看是不是右翼那套（民族主义+强人+反共反自由）。**
苏联是反例:极权但不是法西斯。考试一旦让你「比较纳粹和苏联」，
先点共同点（都是极权：单一政党/宣传/恐怖），再点不同（右 vs 左），就稳了。`,
        en: `This card confused me at first because the story mixes the two words. Teacher's tip helped:
**"totalitarian" = how broad the control is; "fascist" = whether it's that right-wing package
(nationalism + strongman + anti-communist, anti-liberal).** The USSR is the counterexample -
totalitarian but not fascist. On the exam, when asked to "compare the Nazis and the USSR," first name
the common ground (both totalitarian: single party / propaganda / terror), then the difference (right
vs left), and you're solid.`,
      },
    },

    {
      id: 'march-on-rome',
      termCn: '向罗马进军（法西斯的第一个样板）',
      termEn: 'The March on Rome (the first Fascist model)',
      standardRef: ['AP World Unit 7.3', 'CA HSS 10.7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'strongman-actor',
        nodeIds: ['iwt-strongman-n4'],
        xiaoweiNote: {
          cn: `强人第 4 节用意大利当「合法夺权」的样板。1922 年 10 月，墨索里尼搞了一场
**March on Rome（向罗马进军）**。听上去像千军万马攻城，其实**大半是虚张声势**。
可意大利国王为了避免流血，**主动**请他出任首相。

老师纠正的误解：误「墨索里尼真的率军攻占了罗马」→ 正：他**没打垮国家**，
是**国家不肯自卫**、把权力递了过来。这是史上著名的「政治讹诈」之一。

考点关键句：March on Rome 证明了一件事:极权常常不是**被夺取**的，是**被让出去**的。
它和希特勒 1933 被合法任命，是「合法台阶」母题的**两个国家的版本**（意大利样板在前，德国跟上）。`,
          en: `The strongman's Node 4 uses Italy as the model of "legal" power-grabs. In October 1922
Mussolini staged a **March on Rome**. It sounds like a great army storming the city, but **most of it
was a bluff**. Yet the Italian king, to avoid bloodshed, **invited him** to be prime minister.

Misconception teacher corrected: "Mussolini really marched an army and took Rome" → in fact he **did
not defeat the state**; the **state refused to defend itself** and handed the power over. It's one of
history's famous "political bluffs."

Key exam sentence: the March on Rome proved one thing: totalitarianism is often not **seized** but
**handed over**. Together with Hitler's legal appointment in 1933, it's the "legal staircase" motif in
**two countries' versions** (the Italian model first, Germany following).`,
        },
      },
    },

    {
      id: 'agency-vs-structure',
      termCn: '能动性 vs 结构（本课核心 DBQ 考点）',
      termEn: 'Agency vs Structure (the topic\'s core DBQ point)',
      standardRef: ['AP World Unit 7.3 (Causation)', 'AP DBQ rubric (complexity)', 'AP World: historiography'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ordinary-citizen-who-said-yes',
        nodeIds: ['iwt-strongman-n10', 'iwt-democrat-n10', 'iwt-citizen-n10'],
        xiaoweiNote: {
          cn: `三个视角的第 10 节（synthesis）问的是**同一个**大问题，这就是本课最 load-bearing 的考点。
**极权兴起，是少数恶魔强加的（结构 / structure），还是千万普通人在恐惧中选择/默许的结果（能动性 / agency）？**

老师让我背三条「能动性」证据（DEFAULT 普通人视角服务的就是这个）：
- **纳粹靠选票成议会第一大党**（不是政变，是千万选民自己投的）。
- **March on Rome 是国王主动让权**（国家不肯自卫）。
- **授权法案是议会自己投票通过的**（民主自我了断）。

考点关键句（AP 评分最看重的 complexity）：**这不是二选一。**
极权的兴起，既有深层**结构条件**（战败、和约、大萧条、第 48 条这类制度漏洞），
也离不开领袖的**能动性**和千万普通人的选择/默许:**单靠任何一个都解释不了**。
故事里那句话最精炼：「有漏洞的制度，和踩着漏洞往上爬的人，缺一条都摔不下来。」

写 DBQ 时承认**两边都站得住**、再说明你更倾向哪边并配证据 = 拿高分的「复杂性」。`,
          en: `Node 10 (synthesis) of all three lenses asks the **same** big question: the most load-bearing
point of the topic.
**Was the rise of totalitarianism imposed by a few monsters (structure), or the result of millions of
ordinary people choosing/acquiescing in fear (agency)?**

Teacher had me memorize three "agency" pieces of evidence (what the DEFAULT ordinary-person lens serves):
- **The Nazis became the largest party in parliament by votes** (not a coup; millions of voters cast them).
- **The March on Rome was the king handing power over** (the state refused to defend itself).
- **The Enabling Act was passed by parliament's own vote** (democracy ending itself).

Key exam sentence (the complexity AP scoring most rewards): **this is not either/or.** The rise of
totalitarianism had deep **structural conditions** (defeat, the treaty, the Depression, flaws like
Article 48) AND depended on leaders' **agency** and millions of ordinary people's choices/acquiescence -
**no single factor explains it**. The story's tightest line: "a flawed system, and a man who climbs the
flaw: without either leg it would not have fallen."

In a DBQ, acknowledge **both sides stand**, then explain which way you lean with evidence = the high-
scoring "complexity."`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `德国:欧洲识字率最高、文化最深厚的国家之一:它的民主不是被外敌打垮的，
是被它自己的选票和宪法程序（第 48 条 + 授权法案）亲手结束的。

你觉得极权的兴起，更应该归咎于「有漏洞的制度」，还是「踩着漏洞往上爬的人」？
用至少两条具体证据支持你的判断。`,
      en: `Germany: one of the most literate, most cultured countries in Europe: saw its democracy
ended not by a foreign enemy but by its own votes and constitutional procedures (Article 48 + the
Enabling Act).

Do you think the rise of totalitarianism should be blamed more on "a flawed system" or on "the man
who climbs the flaw"? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**和承认**复杂性**的能力，不看你站哪边。
- 「结构/制度」这边的证据：魏玛第 48 条的漏洞、大萧条的全球冲击（金本位传导）、凡尔赛埋下的怨恨。
- 「能动性/个人」这边的证据：纳粹靠选票成第一大党、March on Rome 国王主动让权、授权法案议会自己投票通过。
高分写法：先承认两条腿「缺一条都摔不下来」，再说明你为什么更倾向某一边:这叫 complexity。`,
      hintEn: `Hint: no standard answer: AP scoring looks at your ability to **use evidence** and admit
**complexity**, not which side you pick.
- Evidence for "structure/system": the Article 48 loophole, the Depression's global shock (gold-standard
  transmission), the resentment Versailles planted.
- Evidence for "agency/the individual": the Nazis became the largest party by votes, the king handed
  power over in the March on Rome, parliament passed the Enabling Act by its own vote.
High-scoring move: first admit both legs are needed ("without either it would not have fallen"), then
explain why you lean one way: that's complexity.`,
      conceptsActivated: ['legal-staircase-to-power', 'agency-vs-structure', 'article-48-emergency-power'],
    },
    {
      id: 'q2',
      cn: `斯大林的五年计划把苏联从农业国变成了工业强国:这是真的；
可它的代价是强制集体化、大饥荒（如 Holodomor）和大清洗里数百万人的死。

如果你是 AP 老师，要出一道题考「极权的『成就』能不能为它的代价辩护」，
你会怎么提问？写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `Stalin's Five-Year Plan turned the USSR from a farming country into an industrial power: that's
true; yet its cost was forced collectivization, mass famine (e.g. the Holodomor), and millions of deaths
in the Great Purge.

If you were an AP teacher writing a question on "can a totalitarian regime's 'achievements' justify its
costs," how would you phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题会逼学生**同时看见两件事**，而不是二选一。
这正是本课 Rule 0 的硬规则：误「五年计划是纯粹的成功/纯粹的灾难」→ 正：「成就」与「浩劫」同体。
你的题目可以让学生**称一称**：工业化（救了苏联打赢二战的工业底子）vs 数百万人的死:
谁有资格替死者「划算不划算」？也可以让学生比较「我们今天怎么评价用人命换来的发展」。
AP 要的是「既不美化也不全盘否定」的中立分析，不是简单选「好」或「坏」。`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one. That's exactly
this topic's Rule 0: "the Five-Year Plan was a pure success / a pure disaster" → in fact achievement and
catastrophe sit in one body. Your question could have students **weigh** industrialization (the industrial
base that helped the USSR win WWII) against millions of deaths: who has the right to call it "worth it"
for the dead? Or have students compare "how we judge development bought with human lives today." AP wants
"neither whitewash nor wholesale condemnation," not a simple "good" or "bad."`,
      conceptsActivated: ['stalin-five-year-plan', 'totalitarianism-vs-fascism'],
    },
    {
      id: 'q3',
      cn: `那个又冷又饿、去听集会的普通德国年轻人:他不是恶人，他只是害怕、愤怒、想要归属感。
而同一份《凡尔赛条约》，在中国点燃的却是五四的觉醒，年轻人涌上街头救国。

如果你站在那个德国年轻人的处境里，你确定自己一定会做出不同的选择吗？
「理解他」和「为他开脱」之间的界线在哪？用故事里的一个具体细节支持你的看法。`,
      en: `That cold, hungry young German who went to the rallies: he was not an evil man; he was just
afraid, angry, and wanted to belong. Yet the same Treaty of Versailles lit the May Fourth awakening in
China, where young people flooded the streets to save their country.

If you stood in that German youth's situation, are you sure you would make a different choice? Where is
the line between "understanding him" and "excusing him"? Support your view with one specific detail from
the story.`,
      hintCn: `提示：这题考的是本课最微妙的边界:「理解 ≠ 认同」。
故事里普通人那一遍点得很准：「不是哪边的人更清醒，是同一股怒火被引向了不同的方向」:
注意这条 Rule 0 红线：别把中国一侧浪漫化成「唯一清醒的人」，也别把德国一侧说成「集体疯狂」。
具体细节可以举：他在集会里第一次觉得「不再孤独」、把所有苦算到「他们」头上很「解气」、
邻居被抓他选择沉默（「跟我没关系」）。
进阶：「理解」是为了**认得出**下一次那套声音再响起:这不是替他开脱，而是给你自己一面镜子。`,
      hintEn: `Hint: this tests the topic's most delicate line: "understanding ≠ endorsing." The ordinary
person's lens nails it: "it was not that one side was more clear-eyed; the same fire was steered in
different directions": note this Rule 0 red line: don't romanticize the Chinese side as "the only
clear-eyed ones," and don't call the German side "collective madness." Specific details to cite: feeling
"not alone" for the first time at the rally; how pinning all his pain on "them" felt good; staying silent
("nothing to do with me") when a neighbor was taken. Going deeper: "understanding" is so you can
**recognize** that voice next time it rises: that's not excusing him, it's a mirror for yourself.`,
      conceptsActivated: ['agency-vs-structure', 'versailles-and-may-fourth'],
    },
  ],
};

export default notebook;
