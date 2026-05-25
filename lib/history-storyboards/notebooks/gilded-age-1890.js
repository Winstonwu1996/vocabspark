// ─── 同伴笔记本架构 v1 · Gilded Age 1870-1900 ───────────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆 + 提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Carnegie / Gompers / Homestead striker 三条线）
//   - notebook 提供考点闭环（industrialization / trusts / Rockefeller-captains vs robber barons /
//     Knights of Labor / Pullman / laissez-faire & Sherman Act / political machines 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 6 (1865-1898), KC-6.1, 6.1.II, 6.2, 6.3; CED Topic 6.3-6.6
//   - California HSS 8.12.1, 8.12.2, 8.12.3
//   - 弥补 gilded-age 课纲机制类考点（trust 怎么形成、robber baron vs captain 双叙事、
//     劳工运动两条线、政府从 laissez-faire 到反垄断的转折、political machines）
//
// 劳资 framing 中立：robber barons vs captains of industry 双叙事并置，不下结论。
// 工会种族排斥：黑人工人用结构性措辞（craft 体系 + 各加盟工会实践），不个人化为 Gompers 一人主动排斥。
// 事实对账本：lib/history-narratives/gilded-age-1890-factledger.md（州民兵非联邦正规军 / 舆论分裂 / 7-3 死亡数主流但有出入）。
//
// schemaVersion: 1 · notebookVersion: gilded-age-1890-v1

export var notebook = {
  topicId: 'gilded-age-1890',
  topicNameCn: '镀金时代与劳工',
  topicNameEn: 'The Gilded Age — Robber Barons & Labor',
  schemaVersion: 1,
  companion: {
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师说我们要学"镀金时代"（Gilded Age，大概 1870-1900）。
她先讲了一个我没想到的事："镀金"（gilded）不是夸它好——是马克·吐温起的讽刺名字，
意思是表面镀一层金，里面其实是廉价金属。光鲜底下藏着腐败和苦难。

她给了一张纸，上面写着这些名字：
Andrew Carnegie（卡内基，钢铁）、John D. Rockefeller（洛克菲勒，石油）、
Samuel Gompers（龚帕斯，AFL 工会创始人）、Henry Frick（弗里克，卡内基的厂长）

还有一串词：industrialization（工业化）、trust / monopoly（托拉斯/垄断）、
robber barons vs captains of industry（强盗大亨 vs 工业巨头）、
Social Darwinism（社会达尔文主义）、Gospel of Wealth（财富的福音）、
laissez-faire（自由放任）、Homestead / Pullman strikes（两场大罢工）、
Knights of Labor / AFL（两个工会）、political machines（政治机器）。

我先记下来，等下读三个故事——卡内基、龚帕斯、还有一个 Homestead 罢工的钢厂工人——
读完再回来对照这张单子。

老师那句"don't just memorize names and dates"这次换了说法：
"每学一个人、一件事，问自己——这场被叫做'进步'的繁荣，代价是谁付的？"
我把这句写在笔记本第一页。`,
    en: `Today my teacher said we're learning the "Gilded Age" (roughly 1870-1900).
She started with something I didn't expect: "gilded" isn't praise — it's a sarcastic
name from Mark Twain, meaning a thin layer of gold over cheap metal underneath.
Corruption and suffering hidden beneath the shine.

She gave us a sheet with these names:
Andrew Carnegie (steel), John D. Rockefeller (oil),
Samuel Gompers (founder of the AFL union), Henry Frick (Carnegie's plant manager).

Plus a string of terms: industrialization, trust / monopoly,
robber barons vs captains of industry, Social Darwinism, Gospel of Wealth,
laissez-faire, the Homestead / Pullman strikes,
Knights of Labor / AFL, political machines.

Let me write these down. After I read the three stories — Carnegie, Gompers,
and a steel worker in the Homestead strike — I'll come back and check this list.

Teacher's usual "don't just memorize names and dates" got a new version this time:
"For every person and event, ask yourself — this prosperity called 'progress,'
who paid the price for it?" I wrote that on the first page of my notebook.`,
    keyTerms: [
      { cn: '工业化', en: 'industrialization' },
      { cn: '托拉斯 / 垄断', en: 'trust / monopoly' },
      { cn: '横向兼并 / 纵向兼并', en: 'horizontal / vertical integration' },
      { cn: '强盗大亨 vs 工业巨头', en: 'robber barons vs captains of industry' },
      { cn: '社会达尔文主义', en: 'Social Darwinism' },
      { cn: '财富的福音', en: 'Gospel of Wealth' },
      { cn: '自由放任', en: 'laissez-faire' },
      { cn: '集体谈判', en: 'collective bargaining' },
      { cn: '政治机器', en: 'political machines' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '安德鲁·卡内基',
        nameEn: 'Andrew Carnegie',
        ipa: '/ˈkɑːrnɪɡi/',
        roleCn: '钢铁大王 + 慈善家，《财富的福音》作者；1892 Homestead 镇压罢工',
        roleEn: 'Steel king and philanthropist, author of the Gospel of Wealth; crushed the 1892 Homestead strike',
        mustKnow: true,
        audioKey: 'andrew-carnegie',
      },
      {
        nameCn: '约翰·D·洛克菲勒',
        nameEn: 'John D. Rockefeller',
        ipa: '/ˈrɒkəfɛlər/',
        roleCn: '石油大王，Standard Oil 创始人，托拉斯/垄断的代表人物',
        roleEn: 'Oil king, founder of Standard Oil, the face of the trust/monopoly',
        mustKnow: true,
        audioKey: 'john-d-rockefeller',
      },
      {
        nameCn: '塞缪尔·龚帕斯',
        nameEn: 'Samuel Gompers',
        ipa: '/ˈɡɒmpərz/',
        roleCn: '犹太移民雪茄工，AFL（劳工联合会）创始人，务实工会路线',
        roleEn: 'Jewish immigrant cigar maker, founder of the AFL, "pure and simple" unionism',
        mustKnow: true,
        audioKey: 'samuel-gompers',
      },
      {
        nameCn: '亨利·弗里克',
        nameEn: 'Henry Clay Frick',
        ipa: '/frɪk/',
        roleCn: '卡内基的硬手厂长，Homestead 锁厂 + 雇 Pinkerton 的现场执行者',
        roleEn: "Carnegie's hard-line plant manager, ran the Homestead lockout and hired the Pinkertons",
        mustKnow: true,
        audioKey: 'henry-frick',
      },
      {
        nameCn: '赫伯特·斯宾塞',
        nameEn: 'Herbert Spencer',
        ipa: '/ˈspɛnsər/',
        roleCn: '英国思想家，"适者生存"短语提出者（背景人物）',
        roleEn: 'English thinker who coined "survival of the fittest" (background figure)',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '威廉·格雷厄姆·萨姆纳',
        nameEn: 'William Graham Sumner',
        ipa: '/ˈsʌmnər/',
        roleCn: 'Social Darwinism 在美国的主要鼓吹者（背景人物）',
        roleEn: "Social Darwinism's main American advocate (background figure)",
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1（独立 mini-lesson）：工业化 + trust/monopoly + 横向纵向兼并 ──
    {
      id: 'industrialization-trusts',
      termCn: '工业化 / 托拉斯 / 垄断',
      termEn: 'Industrialization / Trusts / Monopoly',
      standardRef: ['APUSH KC-6.1', 'APUSH CED 6.3', 'CA HSS 8.12.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'andrew-carnegie', nodeId: 'carn-n2', context: 'Carnegie 1870s 用最新炼钢法压成本、把对手一个个挤垮（横向兼并的缩影）' },
          { lens: 'andrew-carnegie', nodeId: 'carn-n9', context: 'Carnegie 说同代巨头把钢、石油、铁路攥在极少数人手里，富可敌国' },
        ],
      },
      standaloneText: {
        cn: `1870-1900 年，美国从一个农业国，一跃成了世界第一工业强国。
钢产量翻番再翻番，铁路织成网，城市拔地而起。这就是 industrialization（工业化）。

这背后有两件事必须搞懂——不然这个 Topic 的选择题你会丢分：

**1. trust（托拉斯）/ monopoly（垄断）是什么？**
当一个行业的控制权，被集中到极少数人（甚至一个人）手里，竞争对手几乎没了——
这就是垄断。trust 是当时实现垄断的一种法律形式。代表是 John D. Rockefeller
（洛克菲勒）的 Standard Oil（标准石油），它一度控制了全美九成的炼油。

**2. 巨头是怎么做大的？两个核心机制：**
- **横向兼并（horizontal integration）**：吃掉同行对手。比如把所有炼油厂买下来或挤垮，
  自己一家说了算。Rockefeller 走的就是这条。
- **纵向兼并（vertical integration）**：从原料、运输到销售，整条产业链自己掌控。
  比如自己挖铁矿、自己运、自己炼钢、自己卖。Carnegie 走的就是这条。

记法：**横向 = 吃掉对手（同一环节）；纵向 = 吃掉上下游（整条链）。**

🔗 故事连接：卡内基在视角一说他"用最新炼钢法把成本压到全行业最低，把对手一个个挤垮"——
那就是工业化 + 兼并在他身上的样子。他没用 trust 这个词，但他做的就是把一个行业攥进自己手里。`,
        en: `From 1870 to 1900, America vaulted from a farming country to the first industrial
power in the world. Steel output doubled and doubled again, railroads wove into a net,
cities rose from the ground. This is industrialization.

Two things behind it you must understand, or you'll lose points on this topic's
multiple choice:

**1. What are a trust and a monopoly?**
When control of an entire industry is concentrated into very few hands (sometimes one
person's), and competitors are nearly wiped out — that's a monopoly. A trust was one
legal form used to achieve monopoly back then. The classic case is John D. Rockefeller's
Standard Oil, which at one point controlled about 90% of American oil refining.

**2. How did the giants grow so large? Two core mechanisms:**
- **Horizontal integration**: eat your competitors. Buy up or crush all the other
  oil refiners, so you alone call the shots. This was Rockefeller's path.
- **Vertical integration**: control the whole supply chain from raw material to
  transport to sale — mine your own iron, ship it, make your own steel, sell it.
  This was Carnegie's path.

Memory hook: **horizontal = eat your rivals (same stage); vertical = eat the chain
above and below you (the whole pipeline).**

🔗 Story link: In Lens 1 Carnegie says he "used the newest steelmaking method to drive
costs to the lowest in the industry and crushed rivals one by one" — that's
industrialization and integration in person. He never says the word "trust," but what
he did was grip a whole industry in his own hands.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是镀金时代**最高频考点**——几乎一定考。
两个坑要记牢：(1) 别把 horizontal 和 vertical 搞反；
(2) Rockefeller = 石油 + 横向 + trust，Carnegie = 钢铁 + 纵向。两个人别张冠李戴。

我的记忆口诀："横着吃同行，竖着吃上下游。"`,
        en: `Teacher said this card is the **most frequently tested** of the Gilded Age —
almost guaranteed. Two traps: (1) don't flip horizontal and vertical;
(2) Rockefeller = oil + horizontal + trust, Carnegie = steel + vertical. Don't mix
the two men up.

My mnemonic: "horizontal eats your rivals, vertical eats up-and-down the chain."`,
      },
    },

    // ── 卡 2（独立 mini-lesson）：robber barons vs captains of industry（双叙事） ──
    {
      id: 'robber-barons-vs-captains',
      termCn: '强盗大亨 vs 工业巨头（双叙事）',
      termEn: 'Robber Barons vs Captains of Industry',
      standardRef: ['APUSH KC-6.1.II', 'APUSH CED 6.3', 'CA HSS 8.12.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'andrew-carnegie', nodeId: 'carn-n10', context: 'Carnegie 自己 N10 synthesis 把"了不起的慈善家"和"把剥削漂白成慈善的人"并置——正是这张卡的双叙事' },
        ],
      },
      standaloneText: {
        cn: `这张卡考的不是"哪个对"，而是"你知不知道有两种看法"——这是 AP 的核心技能。

同一批工业巨头（Carnegie 钢铁、Rockefeller 石油、Vanderbilt 铁路），
历史学家有两种完全相反的叫法：

**叫法 A：robber barons（强盗大亨）= 批判派叙事**
他们靠剥削工人、垄断市场、操纵政治来攫取财富。工人在 1500 度高炉边玩命，
他们却富可敌国。"barons"（贵族）是讽刺——他们像中世纪靠抢夺收租的封建领主。

**叫法 B：captains of industry（工业巨头）= 辩护派叙事**
他们是组织生产、提升效率、把美国建成工业强国的英雄。他们创造了几百万个工作，
推动了技术进步，还（像 Carnegie）把财富回馈社会。工人的苦，是工业化不可避免的过渡代价。

**叫法 C：modern synthesis（综合派）= 现代主流**
这两种叙事是同一现象的两面——同一个人，既是高效的组织者，也是无情的剥削者；
既造了繁荣，也造了苦难。不该在"英雄"和"强盗"之间二选一。

考点关键句：robber baron 和 captain of industry **不是两批人，是看同一批人的两个角度**。
AP 题目经常给你一段材料，问"作者用的是哪种叙事，证据是什么"。

🔗 故事连接：视角一卡内基自己的 N10 就是活的双叙事——
一种说法他是了不起的慈善家，另一种说法他是把剥削漂白成慈善的人，"两边都站得住"。`,
        en: `This card doesn't test "which is right" — it tests "do you know there are two
views." That's a core AP skill.

The same set of industrial giants (Carnegie in steel, Rockefeller in oil, Vanderbilt
in railroads) gets two completely opposite labels from historians:

**Label A: robber barons = the critical narrative**
They seized wealth by exploiting workers, monopolizing markets, and manipulating
politics. Workers risked their lives beside 1,500-degree furnaces while these men grew
rich enough to rival nations. "Barons" is sarcasm — they're like medieval feudal lords
who grabbed and collected rent.

**Label B: captains of industry = the defending narrative**
They were heroes who organized production, raised efficiency, and built America into an
industrial power. They created millions of jobs, drove technology forward, and (like
Carnegie) gave wealth back to society. Workers' suffering was the unavoidable transition
cost of industrialization.

**Label C: modern synthesis = today's mainstream**
The two narratives are two faces of one phenomenon — the same man was both an efficient
organizer and a ruthless exploiter, building prosperity and suffering at once. You
shouldn't have to choose between "hero" and "robber."

Key exam sentence: robber baron and captain of industry are **not two groups of people,
but two angles on the same people.** AP questions often give you a source and ask "which
narrative is the author using, and what's the evidence?"

🔗 Story link: Carnegie's own N10 in Lens 1 IS the living double narrative — one view, a
great philanthropist; the other, a man who bleached exploitation into charity. "Both
sides stand."`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是 DBQ 和选择题都爱考的"框架题"。
最大的坑：以为 robber barons 和 captains of industry 是两批不同的人。**错！是同一批人，两个视角。**

记忆口诀："robber = 强盗（批判），captain = 船长/巨头（夸奖），synthesis = 同一双手两面。"
写 essay 时两边都要提，再用 synthesis 收尾——这是高分套路。`,
        en: `Teacher said this is a "framing" card that both DBQ and multiple choice love.
Biggest trap: thinking robber barons and captains of industry are two different groups.
**Wrong! Same people, two angles.**

Mnemonic: "robber = robber (critical), captain = captain/giant (praise), synthesis =
two faces of one pair of hands." In essays mention both sides, then close with the
synthesis — that's the high-score move.`,
      },
    },

    // ── 卡 3（故事覆盖）：Carnegie / Gospel of Wealth + 慈善 vs 剥削 ──
    {
      id: 'carnegie-gospel-of-wealth',
      termCn: '卡内基 / 财富的福音',
      termEn: 'Carnegie / The Gospel of Wealth',
      standardRef: ['APUSH KC-6.3', 'APUSH CED 6.6', 'CA HSS 8.12.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'andrew-carnegie',
        nodeIds: ['carn-n3', 'carn-n4', 'carn-n8', 'carn-n10'],
        xiaoweiNote: {
          cn: `这个我整条视角一都读过！卡内基自己讲的。

考点提炼（《财富的福音》The Gospel of Wealth, 1889）：
- 富人的多余财富"只是托管"（held in trust）——他有责任在**活着的时候**，
  亲手把它"明智地"用回公众（图书馆、大学、公共设施）。
- 但只帮"肯自助的人"（the deserving poor），反对直接发钱给穷人——他怕养懒汉，
  主张"造梯子"让人自己爬。
- 数字记牢：他捐建了 **2500 多座图书馆**，1901 年卖掉钢铁帝国后捐出约**九成**财富。

careful framing（DBQ 一定用）：同一个卡内基，1889 写《财富的福音》讲富人要仁慈回报社会，
1892 年却下令把 Homestead 钢厂的工人组织赶出去，私兵的子弹打死了他自己的工人。
慈善和剥削，是从他**同一双手**里同时长出来的。

最难也最重要的一点（视角一 N8）：他**真心相信**自己在做时代最大的善事，
不觉得这两件事矛盾。这不是"伪善"——难就难在慈善与剥削在他身上**同体**。
老师说，写 essay 千万别简单骂他"伪君子"，那是过度简化，会扣分。`,
          en: `I read this across all of Lens 1! Carnegie tells it himself.

Exam takeaways (The Gospel of Wealth, 1889):
- The rich man's surplus wealth is only "held in trust" — he has a duty, **while still
  alive**, to return it "wisely" to the public with his own hands (libraries,
  universities, public works).
- But help only "the deserving poor"; he opposed handing money straight to the poor for
  fear of breeding idlers, and favored "building ladders" so people climb on their own.
- Numbers to lock in: he funded **more than 2,500 libraries**, and after selling his
  steel empire in 1901 gave away about **ninety percent** of his fortune.

Careful framing (DBQ uses this): the same Carnegie wrote the Gospel of Wealth in 1889
about the rich mercifully giving back, yet in 1892 ordered the workers' organization
driven out of the Homestead mill, where private rifles shot dead his own workers.
Charity and exploitation grew from **the same pair of hands** at once.

The hardest and most important point (Lens 1 N8): he **truly believed** he was doing
the greatest good of his age, and saw no contradiction. This isn't "hypocrisy" — the
hard part is that charity and exploitation were **one body** in him. Teacher said: never
just call him a "hypocrite" in an essay; that's oversimplifying and loses points.`,
        },
      },
    },

    // ── 卡 4（故事覆盖）：Social Darwinism + Gospel of Wealth 的意识形态 ──
    {
      id: 'social-darwinism',
      termCn: '社会达尔文主义',
      termEn: 'Social Darwinism',
      standardRef: ['APUSH KC-6.3', 'APUSH CED 6.6', 'CA HSS 8.12.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['carn-n6', 'gomp-n6', 'hs-n6'],
        xiaoweiNote: {
          cn: `这个三个视角的 N6 都讲到了，是这个 Topic 设计得最巧的一处——同一句"适者生存"，
三个人三个方向。

考点提炼：
- **Social Darwinism（社会达尔文主义）**：把生物界的"适者生存"（survival of the fittest）
  **误用**到人类社会，说强者爬顶、弱者沉底是自然规律，给贫富不平等找"科学"正当性。
- "survival of the fittest"这个短语是英国思想家 **Spencer（斯宾塞）**提出的；
  美国主要鼓吹者是学者 **Sumner（萨姆纳）**。卡内基是斯宾塞的信徒。
- **大坑**：Social Darwinism **不等于**达尔文真正的进化论！达尔文讲的是生物，
  没主张把它用到社会上为不平等辩护。这一点选择题最爱考。

跨视角对位（这个我超喜欢）：
- Carnegie（视角一 N6）用"适者生存"证明"我该富"；
- Gompers（视角二 N6）一边恨它替富人撑腰，一边用它的逻辑给工人划"保得住/放弃"的门槛；
- Homestead 工人（视角三 N6）躺在血泊里看清：在河岸边，"适者"就是手里握枪的那一方。

同一句话，能同时替强者、弱者、握枪者说话——这就是它最阴险的地方。`,
          en: `All three lenses cover this in their N6 — it's the cleverest piece of this
topic's design: the same line "survival of the fittest," three people, three directions.

Exam takeaways:
- **Social Darwinism**: **misapplying** biology's "survival of the fittest" to human
  society, claiming the strong rising and the weak sinking is a law of nature, giving
  inequality a "scientific" justification.
- The phrase "survival of the fittest" was coined by the English thinker **Spencer**;
  its main American advocate was the scholar **Sumner**. Carnegie was Spencer's disciple.
- **Big trap**: Social Darwinism is **NOT** the same as Darwin's actual theory of
  evolution! Darwin wrote about biology and never argued for applying it to society to
  defend inequality. Multiple choice loves this distinction.

Cross-lens pairing (I love this one):
- Carnegie (Lens 1 N6) uses "survival of the fittest" to prove "I deserve to be rich";
- Gompers (Lens 2 N6) both hates it for propping up the rich AND uses its logic to draw
  a "protect / abandon" threshold around workers;
- The Homestead worker (Lens 3 N6), lying in his own blood, sees clearly: on the
  riverbank, the "fit" is whoever holds the gun.

One line that speaks at once for the strong, the weak, and the armed — that's the most
insidious thing about it.`,
        },
      },
    },

    // ── 卡 5（故事覆盖）：Homestead Strike 1892 + Pinkerton + 州民兵 ──
    {
      id: 'homestead-strike-1892',
      termCn: 'Homestead 罢工 1892',
      termEn: 'Homestead Strike 1892',
      standardRef: ['APUSH KC-6.2', 'APUSH CED 6.5', 'CA HSS 8.12.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'homestead-striker-receiving-end',
        nodeIds: ['hs-n4', 'hs-n5', 'hs-n7', 'hs-n8'],
        xiaoweiNote: {
          cn: `视角三整条线就是这场罢工，我从工人那一头读的。

考点时间线（背熟四个 beat）：
1. 1892 合同到期，卡内基（人在苏格兰）让厂长 **Frick** 把 Homestead 钢厂变成"没有工人组织"的厂。
2. Frick 锁厂、拉高墙架铁丝网（工人叫它"Fort Frick"）。
3. **1892 年 7 月 6 日**：约 300 名 **Pinkerton（平克顿）私兵**坐船沿 Monongahela 河来强行进厂，
   和工人交火。打了大半天（约 13 小时）。
4. 工人**打退了私兵**，但厂方一告状，**宾州州长派来州里的军队（宾夕法尼亚国民警卫队/州民兵）**，
   罢工被彻底压垮。

考点关键句 + 两个大坑：
- **Pinkerton 是私人保安公司（私兵），不是政府军队！** 后来开进去的**州国民警卫队**才是政府武装。
  "枪杆子从老板的私兵，升级成政府派来的军队"——这是这场罢工的关键。注意是**州**民兵，
  不是联邦正规军（这个区别老师专门强调过）。
- 死伤数字主流记法：**工人 7 死、Pinkerton 3 死**（不同记载略有出入，但 7/3 是标准答案）。

reverse twist（很会考）：工人**打赢**了私兵那一仗，反而招来更强的州军队，输得更彻底。
另外舆论是**分裂**的——有报纸把工人写成"暴民"，也有不少报纸和公众同情工人、痛骂 Frick 和 Pinkerton。`,
          en: `Lens 3 is this whole strike, read from the worker's end.

Exam timeline (memorize the four beats):
1. 1892 contract expires; Carnegie (in Scotland) tells manager **Frick** to make the
   Homestead mill a "no workers' organization" plant.
2. Frick locks out the workers, builds high walls and barbed wire (workers call it
   "Fort Frick").
3. **July 6, 1892**: about 300 **Pinkerton private guards** come up the Monongahela
   River by boat to force their way in, and exchange fire with the workers. The fight
   lasts most of the day (about 13 hours).
4. The workers **drive off the Pinkertons**, but once the company complains, the
   **governor of Pennsylvania sends in the state's troops (the Pennsylvania National
   Guard / state militia)**, and the strike is utterly crushed.

Key sentence + two big traps:
- **The Pinkertons were a private security firm (private guards), NOT government
  troops!** The **state National Guard** that marched in afterward was the government's
  force. "The gun passed from the boss's private guards up to the army the government
  sent" — that's the key to this strike. Note it's the **state** militia, not the
  federal regular army (teacher stressed this distinction).
- Casualty numbers, the standard version: **7 workers dead, 3 Pinkertons dead** (sources
  vary slightly, but 7/3 is the textbook answer).

Reverse twist (often tested): the workers **won** the fight against the Pinkertons,
which only brought in the stronger state army — they lost more completely.
Also, opinion was **divided** — some papers called the workers a "mob," but plenty of
papers and the public sympathized with workers and damned Frick and the Pinkertons.`,
        },
      },
    },

    // ── 卡 6（故事覆盖 + 部分独立）：劳工运动两条线 — Knights of Labor / AFL / Gompers ──
    {
      id: 'labor-movement-afl-knights',
      termCn: '劳工运动 / AFL / 劳工骑士团',
      termEn: 'Labor Movement / AFL / Knights of Labor',
      standardRef: ['APUSH KC-6.2', 'APUSH CED 6.5', 'CA HSS 8.12.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'samuel-gompers',
        nodeIds: ['gomp-n3', 'gomp-n5', 'gomp-n7', 'gomp-n9'],
        xiaoweiNote: {
          cn: `Gompers 那条视角二讲透了 AFL，我把另一个必考工会（Knights of Labor）补在下面。

考点提炼——**两个工会要分清**（AP 选择题最爱对比）：

**AFL（American Federation of Labor，劳工联合会，1886）— Gompers 创立：**
- 走"务实工会"（pure and simple unionism）：不谈推翻制度，只争眼前能拿到手的——
  更高工钱、更短工时、更安全车间。口号"我们要什么？要更多。（More.）"
- 主要由**有技术的熟练工**（craft union 行业工会）组成。Gompers 的算计是：
  熟练工不易被替换，有讨价还价的本钱，"打得赢"。
- **代价**（careful framing）：这套以熟练工/行业为骨架的体系，把没技术的移民、女工挡在门外；
  Gompers 自己是移民，却公开支持限制移民（尤其排华）。**至于黑人工人，**
  **主要是被这套 craft 工会体系的实践和种族门槛挡在外面**——不是 Gompers 一人一时的主动排斥。

**Knights of Labor（劳工骑士团，1869，鼎盛 1880s）— 对比项：**
- 跟 AFL 相反，它想把**所有**工人都拉进来——熟练的、没技术的、女工、黑人工人，
  都欢迎（华工是个例外，仍被排斥）。理想更大，但也更松散。
- 1886 年 Haymarket（干草市场）事件后名声受损，很快衰落，被 AFL 取代。

记法：**Knights = 谁都要（包容但松散）；AFL = 只要熟练工（排外但能赢）。**`,
          en: `Lens 2 (Gompers) covers the AFL thoroughly; I'll add the other must-know
union (Knights of Labor) below.

Exam takeaways — **tell the two unions apart** (AP multiple choice loves this contrast):

**AFL (American Federation of Labor, 1886) — founded by Gompers:**
- "Pure and simple unionism": don't talk of overthrowing the system, win only what can
  be gotten now — higher wages, shorter hours, safer workshops. Slogan: "What do we
  want? More."
- Made up mainly of **skilled workers** (craft unions). Gompers' calculation: skilled
  workers are hard to replace, have bargaining chips, can "win."
- **The price** (careful framing): this system built on skilled trades shut unskilled
  immigrants and women out the door; Gompers was himself an immigrant yet openly backed
  immigration limits (especially anti-Chinese). **As for Black workers, they were kept
  out mainly by the practices and racial barriers of this craft-union system** — not by
  Gompers alone actively excluding them at one moment.

**Knights of Labor (1869, peak in the 1880s) — the contrast:**
- Opposite of the AFL: it tried to bring in **all** workers — skilled, unskilled, women,
  Black workers all welcome (Chinese workers were an exception, still excluded). Bigger
  ideal, but looser.
- Its reputation suffered after the 1886 Haymarket affair, and it declined fast,
  replaced by the AFL.

Memory hook: **Knights = wants everyone (inclusive but loose); AFL = wants only skilled
workers (exclusionary but can win).**`,
        },
      },
    },

    // ── 卡 7（独立 mini-lesson）：Pullman Strike 1894（对比 Homestead，联邦军队） ──
    {
      id: 'pullman-strike-1894',
      termCn: 'Pullman 罢工 1894',
      termEn: 'Pullman Strike 1894',
      standardRef: ['APUSH KC-6.2', 'APUSH CED 6.5', 'CA HSS 8.12.2'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'homestead-striker-receiving-end', nodeId: 'hs-n9', context: 'Homestead 工人 N9 说"一代又一代工人接着我们没走完的路往下走"——Pullman 就是紧接着的下一场大罢工' },
        ],
      },
      standaloneText: {
        cn: `Homestead（1892）之后两年，又来了一场更大的罢工——Pullman Strike（1894）。
AP 经常把这两场**成对**考，因为它们一起展示了"政府站在谁那边"。

发生了什么：
- Pullman 是芝加哥附近一家造火车卧铺车厢的公司。它建了一座"公司城"（company town），
  工人住公司的房、买公司的东西。1893 年经济危机，公司大砍工钱，**却不降房租**。
- 工人忍无可忍，1894 年罢工。**Eugene V. Debs（德布斯）**领导的铁路工会
  （American Railway Union）支援，全国铁路工人拒绝挂 Pullman 车厢——铁路运输瘫痪了一大片。
- 因为瘫痪影响了**邮件运输**（federal mail），**联邦政府**找到了介入的理由：
  总统 Cleveland 派来**联邦军队**镇压罢工。法院还发了禁令禁止罢工。罢工被压垮，Debs 入狱。

**和 Homestead 的关键对比（这是考点）：**
- Homestead 1892：先是**私兵**（Pinkerton），后是**州民兵**（宾州国民警卫队）。
- Pullman 1894：直接出动**联邦军队**（因为牵涉跨州铁路 + 联邦邮件）。
- 两场都说明同一件事：这个时代，**政府的枪，是站在资本那一边的**。

考点关键句：Pullman 罢工是联邦政府第一次大规模用军队 + 法院禁令镇压罢工的标志性事件。`,
        en: `Two years after Homestead (1892) came an even bigger strike — the Pullman Strike
(1894). AP often tests these **as a pair**, because together they show "whose side the
government was on."

What happened:
- Pullman was a company near Chicago that built railroad sleeping cars. It built a
  "company town" where workers lived in company houses and bought from company stores.
  In the 1893 depression the company slashed wages **but did not cut the rent**.
- Pushed past their limit, workers struck in 1894. The railway union (American Railway
  Union), led by **Eugene V. Debs**, backed them — railway workers nationwide refused to
  handle Pullman cars, and rail transport seized up across much of the country.
- Because the paralysis disrupted the **federal mail**, the **federal government** found
  its reason to step in: President Cleveland sent in **federal troops** to crush the
  strike. A court also issued an injunction banning it. The strike was crushed; Debs
  went to prison.

**Key contrast with Homestead (this is the exam point):**
- Homestead 1892: first **private guards** (Pinkertons), then the **state militia**
  (Pennsylvania National Guard).
- Pullman 1894: **federal troops** straight away (because it involved interstate
  railroads + federal mail).
- Both show the same thing: in this era, **the government's gun stood on capital's side.**

Key exam sentence: the Pullman Strike is the landmark case of the federal government
first using troops plus a court injunction on a large scale to crush a strike.`,
      },
      xiaoweiNote: {
        cn: `老师说 Homestead 和 Pullman 一定要会**对比**：
- 谁出兵？Homestead 是**私兵 → 州民兵**；Pullman 是**联邦军队**。
- 为什么联邦能插手 Pullman？因为牵涉**跨州铁路 + 联邦邮件**。
记一个人名：**Eugene V. Debs**——他坐牢后变成社会主义者，后来还选过总统。`,
        en: `Teacher said you must be able to **contrast** Homestead and Pullman:
- Who sent troops? Homestead: **private guards → state militia**; Pullman: **federal
  troops**.
- Why could the feds step into Pullman? Because it involved **interstate railroads +
  federal mail**.
One name to remember: **Eugene V. Debs** — after prison he became a socialist and later
even ran for president.`,
      },
    },

    // ── 卡 8（独立 mini-lesson）：laissez-faire → Sherman Act + political machines ──
    {
      id: 'laissez-faire-government-role',
      termCn: '自由放任 / 政府角色的转折（含政治机器）',
      termEn: 'Laissez-Faire, Sherman Act & Political Machines',
      standardRef: ['APUSH KC-6.1.II', 'APUSH KC-6.3', 'APUSH CED 6.10', 'CA HSS 8.12.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'andrew-carnegie', nodeId: 'carn-n9', context: 'Carnegie N9 说 1890 年国会通过法律拆分大到能左右市场的巨头——这是政府第一次伸手管财富集中' },
        ],
      },
      standaloneText: {
        cn: `这张卡讲一个时代的"底色"和它的"转折"：政府该不该管？

**1. laissez-faire（自由放任）= 镀金时代的底色**
法语，意思是"让它去做"。这个时代政府基本**不管**经济：没有最低工资、没有工时上限、
没有工伤保障、没有保护工会的法律，工厂还能雇私兵对付罢工。
为什么不管？一部分就是被 Social Darwinism 撑着——"市场是自然竞争，政府别插手"。

**2. Sherman Antitrust Act（谢尔曼反托拉斯法，1890）= 政府第一次伸手**
1890 年国会通过**第一部联邦反垄断法**，授权拆分那些大到能左右整个市场的 trust（托拉斯）。
这是政府从"完全放任"转向"开始约束财富集中"的**第一步**。
（早期它执行得软，后来 Theodore Roosevelt 的"拆 trust"才动真格——那是进步时代的事了。）

**3. political machines（政治机器）= 镀金时代政治腐败的代表**
城市里有一种组织，靠给穷人/移民一点好处（工作、过节火鸡、帮你入籍）换选票，
再用控制的选票垄断市政权力、捞油水。最有名的是纽约的 **Tammany Hall（坦慕尼协会）**
和它的老大 **Boss Tweed（特威德）**。这正是"镀金"二字的活注脚——表面是民主选举，
里面是金钱与权力的交易。

记法把三个串起来：**laissez-faire（不管）→ 出了 trust 垄断 + political machines 腐败 →
Sherman Act（开始管）。** 政府角色从"放任"到"约束"的转折，是这个 Topic 的长线。`,
        en: `This card covers an era's "baseline" and its "turning point": should government
intervene?

**1. laissez-faire = the Gilded Age baseline**
French for "let it do." In this era the government basically **stayed out** of the
economy: no minimum wage, no cap on hours, no injury protection, no laws protecting
unions, and factories could even hire private guards against strikes.
Why hands-off? Partly because Social Darwinism propped it up — "the market is natural
competition, government shouldn't interfere."

**2. Sherman Antitrust Act (1890) = the government's first reach**
In 1890 Congress passed the **first federal antitrust law**, authorizing the breakup of
trusts grown large enough to bend an entire market. This was the **first step** from
"total hands-off" toward "starting to restrain the concentration of wealth."
(Early on it was enforced weakly; only later did Theodore Roosevelt's "trust-busting"
get serious — that's Progressive Era material.)

**3. political machines = the face of Gilded Age political corruption**
In cities there were organizations that traded small favors to the poor/immigrants
(jobs, a holiday turkey, help getting naturalized) for votes, then used the controlled
votes to monopolize city power and skim money. The most famous was New York's **Tammany
Hall** and its boss, **Boss Tweed**. This is a living footnote to the word "gilded" —
democratic elections on the surface, deals of money and power underneath.

String all three together: **laissez-faire (hands-off) → produced trust monopolies +
political-machine corruption → Sherman Act (starting to intervene).** The shift in the
government's role from "hands-off" to "restraint" is this topic's long arc.`,
      },
      xiaoweiNote: {
        cn: `老师说三个词常常一起考，因为它们是"政府角色"这条线的三个点：
**laissez-faire**（不管）、**Sherman Act 1890**（第一次管，第一部反垄断法）、
**political machines / Tammany Hall / Boss Tweed**（不管之下的政治腐败）。

我的记忆口诀："放任出垄断和腐败，谢尔曼法第一次出手。"
注意年份：**Sherman Act = 1890**，跟 Homestead（1892）就差两年，常被放一起考。`,
        en: `Teacher said these three terms often appear together because they're three
points on the "government's role" line: **laissez-faire** (hands-off), **Sherman Act
1890** (the first reach, the first antitrust law), and **political machines / Tammany
Hall / Boss Tweed** (the political corruption that grew under hands-off rule).

My mnemonic: "hands-off breeds monopoly and corruption; Sherman makes the first move."
Watch the year: **Sherman Act = 1890**, just two years before Homestead (1892), so
they're often tested together.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `卡内基一辈子捐建了 2500 多座图书馆，还捐出约九成财富——但这些钱，
最初是从 Homestead 高炉边、一天干 12 小时的工人身上一分一分省出来的；
1892 年他还下令把工人组织赶出工厂，私兵的子弹打死了他自己的工人。

历史学家有人叫他"captain of industry（工业巨头/英雄）"，有人叫他"robber baron（强盗大亨）"。
你觉得这两个标签，能二选一吗？如果不能，你会怎么向同学解释"同一个人为什么需要两个相反的名字"？`,
      en: `Carnegie funded more than 2,500 libraries and gave away about ninety percent of
his fortune — but that money was saved penny by penny off the workers at the Homestead
furnaces who worked twelve hours a day; and in 1892 he ordered the workers' organization
driven out of the mill, where private rifles shot dead his own workers.

Some historians call him a "captain of industry"; others call him a "robber baron." Do
you think you can choose just one of these labels? If not, how would you explain to a
classmate "why the same person needs two opposite names"?`,
      hintCn: `提示：可以从"同一个事实，两种角度"想——
(1) captain 派看的是：他创造工业、提升效率、回馈社会（图书馆、捐九成财富）；
(2) robber baron 派看的是：财富从哪来（榨工人）、他怎么对待罢工（私兵镇压）。
这两套不是在说不同的事实，是在**强调同一批事实里不同的部分**。

进阶思考：现代综合派（synthesis）说"同一双手既造繁荣也造苦难，不必二选一"——
你觉得"拒绝二选一"是更诚实，还是更像逃避？写 DBQ 时，两边证据都摆，再亮出你的判断，
才是高分。`,
      hintEn: `Hint: think "same fact, two angles" —
(1) the captain camp sees: he created industry, raised efficiency, gave back (libraries,
ninety percent of his fortune);
(2) the robber-baron camp sees: where the wealth came from (squeezing workers) and how
he handled the strike (private-guard repression).
These two aren't describing different facts — they're **stressing different parts of the
same set of facts.**

Going deeper: the modern synthesis says "one pair of hands built both prosperity and
suffering; you needn't choose." Do you think "refusing to choose" is more honest, or
more like dodging? In a DBQ, lay out evidence for both sides, then state your own
judgment — that's the high-score move.`,
      conceptsActivated: ['robber-barons-vs-captains', 'carnegie-gospel-of-wealth'],
    },
    {
      id: 'q2',
      cn: `1892 年 Homestead 罢工里，工人**打退了**卡内基雇来的 Pinkerton 私兵——
可厂方一告状，宾州州长就派来州里的军队（宾夕法尼亚国民警卫队/州民兵），把罢工彻底压垮。
两年后的 Pullman 罢工，连**联邦军队**都出动了。

如果你是 AP 老师，要出一道 DBQ 题，让学生分析"镀金时代的政府到底站在哪一边"，
你会怎么提问？你会给学生哪些不同立场的材料？`,
      en: `In the 1892 Homestead strike, the workers **drove off** the Pinkerton private
guards Carnegie had hired — but once the company complained, the governor of Pennsylvania
sent in the state's troops (the Pennsylvania National Guard / state militia) and crushed
the strike completely. Two years later, in the Pullman strike, even **federal troops**
were deployed.

If you were an AP teacher writing a DBQ to have students analyze "whose side the Gilded
Age government was actually on," how would you phrase the question? What sources from
different viewpoints would you give students?`,
      hintCn: `提示：好的 DBQ 会给**多方材料**让学生自己拼出复杂图景，例如——
- 厂方/政府的说法（"维护秩序、保护私有财产、保障邮件运输"）；
- 工人的说法（"我们只想守住养家工钱，政府却用枪帮老板"）；
- 当时**分裂的舆论**（有报纸骂工人是暴民，也有报纸同情工人、痛骂 Pinkerton 和 Frick）。

注意一个精确度的坑：Homestead 出动的是**州**民兵，Pullman 才是**联邦**军队——
区分"州"和"联邦"是这道题能不能拿满分的关键。

进阶思考：政府说自己只是"中立地维护秩序"。可如果每次"维护秩序"的结果，
都是罢工被压垮、老板赢——这样的"中立"，真的中立吗？`,
      hintEn: `Hint: a good DBQ gives **multi-sided sources** and lets students assemble
the complex picture, e.g. —
- the company/government view ("maintaining order, protecting private property, securing
  the mail");
- the workers' view ("we only wanted to hold a wage to feed our families, and the
  government used guns to help the boss");
- the **divided opinion** of the time (some papers called workers a mob, others
  sympathized with workers and damned the Pinkertons and Frick).

Watch a precision trap: Homestead brought in the **state** militia, while Pullman
brought **federal** troops — telling "state" from "federal" apart is the key to a full
score here.

Going deeper: the government says it was just "neutrally maintaining order." But if every
time "order is maintained" the strike is crushed and the boss wins — is that "neutrality"
really neutral?`,
      conceptsActivated: ['homestead-strike-1892', 'pullman-strike-1894', 'laissez-faire-government-role'],
    },
    {
      id: 'q3',
      cn: `Gompers 的 AFL 走"务实工会"路线，专门组织有技术的熟练工，靠"打得赢的仗"
真的把工钱抬上去、工时压下来。代价是：没技术的移民、女工被挡在门外（Gompers 自己是移民，
却支持限制移民）；黑人工人也大多被这套以行业工会为骨架的体系挡在外面。

而另一个工会 Knights of Labor（劳工骑士团）想把**所有**工人都拉进来，理想更大，却更松散，
很快就衰落了。

在资源有限的时候，Gompers 这种"只为争得动的人争取、放弃其余"——
是务实的智慧，还是变相的背叛？`,
      en: `Gompers' AFL took the "pure and simple unionism" road, organizing skilled
workers specifically, and by fighting "winnable fights" really did lift wages and cut
hours. The price: unskilled immigrants and women were shut out (Gompers was an immigrant
himself, yet backed immigration limits); Black workers, too, were largely kept out by
this system built on a skeleton of craft unions.

Meanwhile the other union, the Knights of Labor, tried to bring in **all** workers — a
bigger ideal, but looser, and it declined fast.

When resources are limited, is Gompers' approach — "fight only for those you can win for,
give up the rest" — practical wisdom, or betrayal in disguise?`,
      hintCn: `提示：可以从两头想——
(1) 务实派会说：空想救不了等米下锅的家。AFL 真的为一部分工人抠出了 8 小时工作制、
集体谈判这些**实在**的东西；Knights 什么都想要，结果什么都没守住。先救能救的，错了吗？
(2) 批判派会说：当你把人分成"保得住的"和"放弃的"，你其实在用富人那套"适者生存"的逻辑
对待自己的同类。被你关在门外的女工、黑人、移民，他们的苦谁来管？

注意框架精度：移民/女工"被 Gompers 个人主动挡门外"是有据的；但黑人工人那条，
更准确的说法是"被 craft 工会体系的实践和种族门槛挡在外面"，**不是 Gompers 一人主动排斥**——
DBQ 里把"个人选择"和"结构性排斥"分开，是成熟的分析。

进阶思考：今天你身边有没有"为我们这群人争利益、却把别人排在外面"的小圈子？
"务实地只顾自己人"和"背叛了更大的团结"，界线到底在哪？`,
      hintEn: `Hint: think from both ends —
(1) the pragmatist says: daydreams can't save a family waiting for rice. The AFL really
did pry out **concrete** things for some workers — the eight-hour day, collective
bargaining; the Knights wanted everything and held nothing. Save who you can first — is
that wrong?
(2) the critic says: when you sort people into "protectable" and "abandoned," you're
using the rich man's "survival of the fittest" logic on your own kind. The women, Black
workers, and immigrants you shut out — who tends to their suffering?

Watch the framing precision: it's documented that Gompers personally shut out
immigrants/women; but for Black workers, the more accurate phrasing is "kept out by the
practices and racial barriers of the craft-union system" — **not Gompers alone actively
excluding them.** Separating "personal choice" from "structural exclusion" in a DBQ is
mature analysis.

Going deeper: is there a small circle in your own life that "fights for the interests of
us, this lot" while shutting others out? Where exactly is the line between "practically
looking after your own" and "betraying a larger solidarity"?`,
      conceptsActivated: ['labor-movement-afl-knights', 'social-darwinism'],
    },
  ],
};

export default notebook;
