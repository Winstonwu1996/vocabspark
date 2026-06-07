// ─── 同伴笔记本架构 v1 · Gilded Age 1870-1900 ───────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆 + 提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 课纲对齐：
//   - APUSH Period 6 (1865-1898), KC-6.1, 6.1.II, 6.2, 6.3; CED Topic 6.3-6.6
//   - California HSS 8.12.1, 8.12.2, 8.12.3
//
// schemaVersion: 1 · notebookVersion: gilded-age-1890-v1

export var notebook = {
  topicId: 'gilded-age-1890',
  topicNameCn: '镀金时代与劳工',
  topicNameEn: 'The Gilded Age — Robber Barons & Labor',
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
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+audio
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
        nameCn: '尤金·德布斯',
        nameEn: 'Eugene V. Debs',
        ipa: '/diːbz/',
        roleCn: '铁路工会（American Railway Union）领袖，领导 1894 年 Pullman 罢工，后因此入狱，成为社会主义者',
        roleEn: 'Leader of the American Railway Union; led the 1894 Pullman Strike, jailed afterward, became a socialist',
        mustKnow: true,
        audioKey: 'eugene-v-debs',
      },
      {
        nameCn: '威廉·詹宁斯·布莱恩',
        nameEn: 'William Jennings Bryan',
        ipa: '/ˈbraɪən/',
        roleCn: '1896 年民主党候选人，接受人民党背书，发表"黄金十字架"演说，代表民粹主义顶峰',
        roleEn: 'Democratic candidate in 1896, backed by the People\'s Party, delivered the "Cross of Gold" speech; the peak of Populism',
        mustKnow: true,
        audioKey: 'william-jennings-bryan',
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

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1（独立 mini-lesson）：工业化 + trust/monopoly + 横向纵向兼并 ──
    {
      id: 'industrialization-trusts',
      termCn: '工业化 / 托拉斯 / 垄断',
      termEn: 'Industrialization / Trusts / Monopoly',
      defCn: '工业化是一个国家从种地农业转向工厂大规模生产的过程。托拉斯（trust）是把整个行业的控制权集中到极少数人手里的垄断安排，竞争对手几乎被消灭干净。',
      defEn: 'Industrialization is the shift from farming to large-scale factory production. A trust is a monopoly arrangement that concentrates control of an entire industry in very few hands, eliminating nearly all competition.',
      standardRef: ['APUSH KC-6.1', 'APUSH CED 6.3', 'CA HSS 8.12.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: '卡内基那条故事线里', context: 'Carnegie 1870s 用最新炼钢法压成本、把对手一个个挤垮（横向兼并的缩影）' },
          { storyLine: '卡内基那条故事线里', context: 'Carnegie 说同代巨头把钢、石油、铁路攥在极少数人手里，富可敌国' },
        ],
      },
      standaloneText: {
        cn: `1870-1900 年，美国从一个农业国，一跃成了世界第一工业强国。
钢产量翻番再翻番，铁路织成网，城市拔地而起。这就是 industrialization（工业化）。

这背后有两件事必须搞懂——不然这一课的选择题你会丢分：

**1. trust（托拉斯）/ monopoly（垄断）是什么？**
当一个行业的控制权，被集中到极少数人甚至一个人手里，竞争对手几乎没了——这就是垄断。
Trust 是当时实现垄断的一种法律形式。
代表是 John D. Rockefeller（洛克菲勒）的 Standard Oil（标准石油），它一度控制了全美九成的炼油。

**2. 巨头是怎么做大的？两个核心机制：**
- **横向兼并（horizontal integration）**：吃掉同行对手。比如把所有炼油厂买下来或挤垮，自己一家说了算。Rockefeller 走的就是这条。
- **纵向兼并（vertical integration）**：从原料、运输到销售，整条产业链自己掌控。比如自己挖铁矿、自己运、自己炼钢、自己卖。Carnegie 走的就是这条。

记法：**横向 = 吃掉对手（同一环节）；纵向 = 吃掉上下游（整条链）。**

故事连接：卡内基那条故事线里，他说"用最新炼钢法把成本压到全行业最低，把对手一个个挤垮"——那就是工业化 + 兼并在他身上的样子。`,
        en: `From 1870 to 1900, America went from a farming country to the number one industrial
power in the world. Steel output doubled and doubled again, railroads wove into a net,
cities rose from nothing. This is industrialization.

Two things behind it you must understand, or you'll lose points on multiple choice:

**1. What are a trust and a monopoly?**
When control of an entire industry is concentrated into very few hands — sometimes one
person's — and competitors are nearly wiped out, that's a monopoly. A trust was one
legal form used to achieve monopoly back then. The classic case is John D. Rockefeller's
Standard Oil, which at one point controlled about 90% of American oil refining.

**2. How did the giants grow so large? Two core moves:**
- **Horizontal integration**: eat your competitors. Buy up or crush all the other
  oil refiners so you alone call the shots. This was Rockefeller's path.
- **Vertical integration**: control the whole supply chain from raw material to
  transport to sale — mine your own iron, ship it, make your own steel, sell it.
  This was Carnegie's path.

Memory hook: **horizontal = eat your rivals (same stage); vertical = eat the chain
above and below you (the whole pipeline).**

Story link: In Carnegie's story, he says he "used the newest steelmaking method to drive
costs to the lowest in the industry and crushed rivals one by one" — that's
industrialization and integration in person.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是镀金时代**最高频考点**——几乎一定考。
两个坑要记牢：
1. 别把 horizontal 和 vertical 搞反；
2. Rockefeller = 石油 + 横向 + trust，Carnegie = 钢铁 + 纵向。两个人别张冠李戴。

我的记忆口诀："横着吃同行，竖着吃上下游。"`,
        en: `Teacher said this card is the **most frequently tested** topic in the Gilded Age —
almost guaranteed to show up. Two traps:
1. Don't flip horizontal and vertical;
2. Rockefeller = oil + horizontal + trust, Carnegie = steel + vertical. Don't mix the two men up.

My mnemonic: "horizontal eats your rivals, vertical eats up-and-down the chain."`,
      },
    },

    // ── 卡 2（独立 mini-lesson）：robber barons vs captains of industry（双叙事） ──
    {
      id: 'robber-barons-vs-captains',
      termCn: '强盗大亨 vs 工业巨头（双叙事）',
      termEn: 'Robber Barons vs Captains of Industry',
      defCn: '"强盗大亨"（robber barons）是批评工业巨头靠剥削工人和垄断市场致富的叫法；"工业巨头"（captains of industry）是称赞他们创造就业、推动进步的叫法。这两个词说的是同一批人，只是角度不同。',
      defEn: '"Robber barons" is the critical label for industrialists who got rich by exploiting workers and monopolizing markets; "captains of industry" is the praising label for their role in creating jobs and driving progress. Both terms describe the same people from different angles.',
      standardRef: ['APUSH KC-6.1.II', 'APUSH CED 6.3', 'CA HSS 8.12.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: '卡内基那条故事线里', context: '卡内基故事结尾把"了不起的慈善家"和"把剥削漂白成慈善的人"两种说法并列——正是这张卡的双叙事' },
        ],
      },
      standaloneText: {
        cn: `这张卡考的不是"哪个对"，而是"你知不知道有两种看法"——这是 AP 的核心技能。

同一批工业巨头（Carnegie 钢铁、Rockefeller 石油、Vanderbilt 铁路），
历史学家有两种完全相反的叫法：

**叫法 A：robber barons（强盗大亨）= 批判派叙事**
他们靠剥削工人、垄断市场、操纵政治来攫取财富。
工人在 1500 度高炉边玩命，他们却富可敌国。
"barons"（贵族）是讽刺——他们像中世纪靠抢夺收租的封建领主。

**叫法 B：captains of industry（工业巨头）= 辩护派叙事**
他们是组织生产、提升效率、把美国建成工业强国的英雄。
他们创造了几百万个工作，推动了技术进步，还像 Carnegie 那样把财富回馈社会。
工人的苦，是工业化不可避免的过渡代价。

**叫法 C：modern synthesis（综合派）= 现代主流**
这两种叙事是同一现象的两面。
同一个人，既是高效的组织者，也是无情的剥削者；既造了繁荣，也造了苦难。
不该在"英雄"和"强盗"之间二选一。

**考点关键句：robber baron 和 captain of industry 不是两批人，是看同一批人的两个角度。**
AP 题目经常给你一段材料，问"作者用的是哪种叙事，证据是什么"。

故事连接：卡内基那条故事线的结尾就是活的双叙事——
一种说法他是了不起的慈善家，另一种说法他是把剥削漂白成慈善的人，"两边都站得住"。`,
        en: `This card doesn't test "which is right" — it tests "do you know there are two
views?" That's a core AP skill.

The same set of industrial giants (Carnegie in steel, Rockefeller in oil, Vanderbilt
in railroads) gets two completely opposite labels from historians:

**Label A: robber barons = the critical narrative**
They seized wealth by exploiting workers, monopolizing markets, and manipulating
politics. Workers risked their lives beside 1,500-degree furnaces while these men grew
richer than some nations. "Barons" is sarcasm — like medieval feudal lords who grabbed
and collected rent.

**Label B: captains of industry = the defending narrative**
They were heroes who organized production, raised efficiency, and built America into an
industrial power. They created millions of jobs, drove technology forward, and gave
wealth back to society (like Carnegie). Workers' suffering was the unavoidable transition
cost of industrialization.

**Label C: modern synthesis = today's mainstream**
The two narratives are two faces of one thing. The same man was both an efficient
organizer and a ruthless exploiter, building prosperity and suffering at once. You
don't have to choose between "hero" and "robber."

**Key exam sentence: robber baron and captain of industry are not two groups of people —
they're two angles on the same people.** AP questions often give you a source and ask
"which narrative is the author using, and what's the evidence?"

Story link: the ending of Carnegie's story line IS the living double narrative — one
view, a great philanthropist; the other, a man who bleached exploitation into charity.
"Both sides stand."`,
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
      defCn: '《财富的福音》是 Carnegie 1889 年写的文章，主张富人应该在活着的时候亲手把多余财富用回公众（如图书馆），而不是留给子孙或者死后才捐。',
      defEn: 'The Gospel of Wealth is Carnegie\'s 1889 essay arguing that the rich should personally give away their surplus wealth while still alive — for public goods like libraries — rather than leaving it to heirs or waiting to die.',
      standardRef: ['APUSH KC-6.3', 'APUSH CED 6.6', 'CA HSS 8.12.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'andrew-carnegie',
        nodeIds: ['carn-n3', 'carn-n4', 'carn-n8', 'carn-n10'],
        xiaoweiNote: {
          cn: `这个我整条卡内基故事线都读过了！他自己讲的。

考点提炼（《财富的福音》The Gospel of Wealth, 1889）：
- 富人的多余财富"只是托管"（held in trust）——他有责任在**活着的时候**，
  亲手把它"明智地"用回公众（图书馆、大学、公共设施）。
- 但只帮"肯自助的人"（the deserving poor），反对直接发钱给穷人——他怕养懒汉，
  主张"造梯子"让人自己爬。
- 数字记牢：他捐建了 **2500 多座图书馆**，1901 年卖掉钢铁帝国后捐出约**九成**财富。

考试要注意（DBQ 一定用）：同一个卡内基，1889 年写《财富的福音》讲富人要仁慈回报社会，
1892 年却下令把 Homestead 钢厂的工人组织赶出去，私兵的子弹打死了他自己的工人。
慈善和剥削，是从他**同一双手**里同时长出来的。

最难也最重要的一点：他**真心相信**自己在做时代最大的善事，
不觉得这两件事矛盾。这不是"伪善"——难就难在慈善与剥削在他身上同体。
老师说，写 essay 千万别简单骂他"伪君子"，那是过度简化，会扣分。`,
          en: `I read all of Carnegie's story line! He tells it himself.

Exam takeaways (The Gospel of Wealth, 1889):
- The rich man's surplus wealth is only "held in trust" — he has a duty, **while still
  alive**, to return it "wisely" to the public with his own hands (libraries,
  universities, public works).
- But help only "the deserving poor." He opposed handing money straight to the poor —
  he feared breeding idlers — and favored "building ladders" so people climb on their own.
- Numbers to lock in: he funded **more than 2,500 libraries**, and after selling his
  steel empire in 1901 gave away about **ninety percent** of his fortune.

Watch this for the DBQ: the same Carnegie wrote the Gospel of Wealth in 1889
about the rich mercifully giving back, yet in 1892 ordered the workers' organization
driven out of the Homestead mill, where private rifles shot dead his own workers.
Charity and exploitation grew from **the same pair of hands** at the same time.

The hardest and most important point: he **truly believed** he was doing
the greatest good of his age, and saw no contradiction. This isn't "hypocrisy" —
the hard part is that charity and exploitation were one thing in him.
Teacher said: never just call him a "hypocrite" in an essay. That's oversimplifying and loses points.`,
        },
      },
    },

    // ── 卡 4（故事覆盖）：Social Darwinism + Gospel of Wealth 的意识形态 ──
    {
      id: 'social-darwinism',
      termCn: '社会达尔文主义',
      termEn: 'Social Darwinism',
      defCn: '社会达尔文主义是把生物学里的"适者生存"（survival of the fittest）搬到人类社会，说强者爬顶、弱者沉底是"自然规律"，用来替贫富不平等找"科学"借口。注意：这是对达尔文进化论的误用，达尔文本人讲的是生物，没主张把这套用到社会上。',
      defEn: 'Social Darwinism is the misuse of biology\'s "survival of the fittest" in human society, claiming that the strong rising and the weak sinking is a "law of nature" — used to justify wealth inequality. Important: this is a misapplication of Darwin\'s actual theory of evolution, which was about biology, not human society.',
      standardRef: ['APUSH KC-6.3', 'APUSH CED 6.6', 'CA HSS 8.12.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['carn-n6', 'gomp-n6', 'hs-n6'],
        xiaoweiNote: {
          cn: `这门课三条故事线都讲到了，是这一课最精彩的设计——同一句"适者生存"，
三个人三个方向。

考点提炼：
- **Social Darwinism（社会达尔文主义）**：把生物界的"适者生存"（survival of the fittest）
  **误用**到人类社会，说强者爬顶、弱者沉底是自然规律，给贫富不平等找"科学"正当性。
- "survival of the fittest"这个短语是英国思想家 **Spencer（斯宾塞）**提出的；
  美国主要鼓吹者是学者 **Sumner（萨姆纳）**。卡内基是斯宾塞的信徒。
- **大坑**：Social Darwinism **不等于**达尔文真正的进化论！达尔文讲的是生物，
  没主张把它用到社会上为不平等辩护。这一点选择题最爱考。

三条故事线对比着看：
- 卡内基那条故事线：用"适者生存"证明"我该富"；
- 龚帕斯那条故事线：一边恨它替富人撑腰，一边用它的逻辑给工人划"保得住/放弃"的门槛；
- 罢工工人那条故事线：躺在血泊里看清——在河岸边，"适者"就是手里握枪的那一方。

同一句话，能同时替强者、弱者、握枪者说话——这就是它最阴险的地方。`,
          en: `All three story lines in this topic cover this — it's the most clever part of
the whole course: the same phrase "survival of the fittest," three people, three directions.

Exam takeaways:
- **Social Darwinism**: **misapplying** biology's "survival of the fittest" to human
  society, claiming the strong rising and the weak sinking is a law of nature, giving
  inequality a "scientific" justification.
- The phrase "survival of the fittest" was coined by the English thinker **Spencer**;
  its main American advocate was the scholar **Sumner**. Carnegie was Spencer's disciple.
- **Big trap**: Social Darwinism is **NOT** the same as Darwin's actual theory of
  evolution! Darwin wrote about biology and never argued for applying it to society to
  defend inequality. Multiple choice loves this distinction.

Compare the three story lines side by side:
- Carnegie's story: uses "survival of the fittest" to prove "I deserve to be rich";
- Gompers' story: both hates it for propping up the rich AND uses its logic to draw
  a "protect / abandon" line around workers;
- The Homestead striker's story: lying in his own blood, he sees clearly — on the
  riverbank, the "fit" is whoever holds the gun.

One phrase that speaks at once for the strong, the weak, and the armed — that's the most
insidious thing about it.`,
        },
      },
    },

    // ── 卡 5（故事覆盖）：Homestead Strike 1892 + Pinkerton + 州民兵 ──
    {
      id: 'homestead-strike-1892',
      termCn: 'Homestead 罢工 1892',
      termEn: 'Homestead Strike 1892',
      defCn: '1892 年 Homestead 罢工是卡内基钢厂工人反对降薪和清除工会的一场对抗。厂方先雇了 Pinkerton 私人武装，被工人打退后又来了宾州州里的军队，把罢工彻底压垮。',
      defEn: 'The 1892 Homestead Strike was a standoff at Carnegie\'s steel mill where workers resisted wage cuts and the removal of their union. The company first hired Pinkerton private guards — workers drove them off — then the Pennsylvania state militia arrived and crushed the strike completely.',
      standardRef: ['APUSH KC-6.2', 'APUSH CED 6.5', 'CA HSS 8.12.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'homestead-striker',
        nodeIds: ['hs-n4', 'hs-n5', 'hs-n7', 'hs-n8'],
        xiaoweiNote: {
          cn: `那条工人故事线整条就是这场罢工，我从工人那一头读的。

考点时间线（背熟四个 beat）：
1. 1892 合同到期，卡内基（人在苏格兰）让厂长 **Frick** 把 Homestead 钢厂变成"没有工人组织"的厂。
2. Frick 锁厂、拉高墙架铁丝网（工人叫它"Fort Frick"）。
3. **1892 年 7 月 6 日**：约 300 名 **Pinkerton（平克顿）私兵**坐船沿 Monongahela 河来强行进厂，
   和工人交火。打了大半天（约 13 小时）。
4. 工人**打退了私兵**，但厂方一告状，**宾州州长派来宾夕法尼亚国民警卫队（州民兵）**，
   罢工被彻底压垮。

考点关键句 + 两个大坑：
- **Pinkerton 是私人保安公司（私兵），不是政府军队！** 后来开进去的**宾州国民警卫队**才是政府武装。
  "枪杆子从老板的私兵，升级成政府派来的军队"——这是这场罢工的关键。
  注意是**州**民兵，不是联邦正规军（这个区别老师专门强调过）。
- 死伤数字：**工人 7 死、Pinkerton 3 死**（不同记载略有出入，但 7/3 是标准答案）。

一个意外的结局（很会考）：工人**打赢**了私兵那一仗，反而招来更强的州军队，输得更彻底。
另外舆论是**分裂**的——有报纸把工人写成"暴民"，也有不少报纸和公众同情工人、痛骂 Frick 和 Pinkerton。`,
          en: `The entire worker story line is this strike, read from the worker's end.

Exam timeline (memorize the four beats):
1. 1892 contract expires; Carnegie (in Scotland) tells manager **Frick** to make the
   Homestead mill a "no workers' organization" plant.
2. Frick locks out the workers, builds high walls and barbed wire (workers call it
   "Fort Frick").
3. **July 6, 1892**: about 300 **Pinkerton private guards** come up the Monongahela
   River by boat to force their way in, and exchange fire with the workers. The fight
   lasts most of the day (about 13 hours).
4. The workers **drive off the Pinkertons**, but once the company complains, the
   **governor of Pennsylvania sends in the Pennsylvania National Guard (state militia)**,
   and the strike is utterly crushed.

Key sentence + two big traps:
- **The Pinkertons were a private security firm (private guards), NOT government
  troops!** The **Pennsylvania National Guard** that marched in afterward was the
  government's force. "The gun passed from the boss's private guards up to the army the
  government sent" — that's the key to this strike. Note it's the **state** militia,
  not the federal regular army (teacher stressed this distinction).
- Casualty numbers, the standard version: **7 workers dead, 3 Pinkertons dead** (sources
  vary slightly, but 7/3 is the textbook answer).

A surprising twist (often tested): the workers **won** the fight against the Pinkertons,
which only brought in the stronger state army — they lost more completely.
Also, opinion was **divided** — some papers called workers a "mob," but plenty of
papers and the public sympathized with workers and damned Frick and the Pinkertons.`,
        },
      },
    },

    // ── 卡 6（故事覆盖 + 部分独立）：劳工运动两条线 — Knights of Labor / AFL / Gompers ──
    {
      id: 'labor-movement-afl-knights',
      termCn: '劳工运动 / AFL / 劳工骑士团',
      termEn: 'Labor Movement / AFL / Knights of Labor',
      defCn: 'AFL（劳工联合会）是 1886 年 Gompers 创立的全国工会，专门组织有技术的熟练工，只争工钱、工时等具体权益。劳工骑士团（Knights of Labor）是另一个更早的工会，想把所有工人包括女性和黑人都拉进来，但很快衰落了。',
      defEn: 'The AFL (American Federation of Labor), founded by Gompers in 1886, was a national union for skilled workers focused on winning concrete gains like wages and hours. The Knights of Labor was an earlier union that aimed to include all workers — women and Black workers too — but declined rapidly.',
      standardRef: ['APUSH KC-6.2', 'APUSH CED 6.5', 'CA HSS 8.12.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'samuel-gompers',
        nodeIds: ['gomp-n3', 'gomp-n5', 'gomp-n7', 'gomp-n9'],
        xiaoweiNote: {
          cn: `龚帕斯那条故事线讲透了 AFL，我把另一个必考工会（Knights of Labor）补在下面。

考点提炼——**两个工会要分清**（AP 选择题最爱对比）：

**AFL（American Federation of Labor，劳工联合会，1886）— Gompers 创立：**
- 走"务实工会"（pure and simple unionism）：不谈推翻制度，只争眼前能拿到手的——
  更高工钱、更短工时、更安全车间。口号"我们要什么？要更多。（More.）"
- 主要由**有技术的熟练工**（craft union 行业工会）组成。Gompers 的算计是：
  熟练工不易被替换，有讨价还价的本钱，"打得赢"。
- **代价**：这套以熟练工/行业为骨架的体系，把没技术的移民、女工挡在门外；
  Gompers 自己是移民，却公开支持限制移民（尤其排华）。**至于黑人工人，**
  **主要是被这套行业工会体系的实践和种族门槛挡在外面**——不是 Gompers 一人一时的主动排斥。

**Knights of Labor（劳工骑士团，1869，鼎盛 1880s）— 对比项：**
- 跟 AFL 相反，它想把**所有**工人都拉进来——熟练的、没技术的、女工、黑人工人，
  都欢迎（华工是个例外，仍被排斥）。理想更大，但也更松散。
- 1886 年 Haymarket（干草市场）事件后名声受损，很快衰落，被 AFL 取代。

记法：**Knights = 谁都要（包容但松散）；AFL = 只要熟练工（排外但能赢）。**`,
          en: `Gompers' story line covers the AFL thoroughly; I'll add the other must-know
union (Knights of Labor) here.

Exam takeaways — **tell the two unions apart** (AP multiple choice loves this contrast):

**AFL (American Federation of Labor, 1886) — founded by Gompers:**
- "Pure and simple unionism": don't talk of overthrowing the system, win only what can
  be gotten now — higher wages, shorter hours, safer workshops. Slogan: "What do we
  want? More."
- Made up mainly of **skilled workers** (craft unions). Gompers' calculation: skilled
  workers are hard to replace, have bargaining chips, and can "win."
- **The price**: this system built on skilled trades shut unskilled immigrants and women
  out the door; Gompers was himself an immigrant yet openly backed immigration limits
  (especially anti-Chinese). **As for Black workers, they were kept out mainly by the
  practices and racial barriers of this craft-union system** — not by Gompers alone
  actively excluding them at one moment.

**Knights of Labor (1869, peak in the 1880s) — the contrast:**
- Opposite of the AFL: it tried to bring in **all** workers — skilled, unskilled,
  women, Black workers all welcome (Chinese workers were an exception, still excluded).
  Bigger ideal, but looser.
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
      defCn: '1894 年 Pullman 罢工是芝加哥附近一家火车公司的工人因被降薪但不降租金而罢工，引发全国铁路工人声援。联邦政府以保障邮件运输为由派来联邦军队镇压，工会领袖 Debs 入狱。',
      defEn: 'The 1894 Pullman Strike was a walkout by railroad-car workers near Chicago who were given pay cuts but no rent cuts. Nationwide railway workers joined in. The federal government sent federal troops — citing disruption to the mail — to crush the strike, and union leader Debs went to prison.',
      standardRef: ['APUSH KC-6.2', 'APUSH CED 6.5', 'CA HSS 8.12.2'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: '罢工工人那条故事线里', context: '工人说"一代又一代工人接着我们没走完的路往下走"——Pullman 就是紧接着的下一场大罢工' },
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

**考点关键句**：Pullman 罢工是联邦政府第一次大规模用军队 + 法院禁令镇压罢工的标志性事件。`,
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
  strike. A court also issued an injunction banning the strike. The strike was crushed;
  Debs went to prison.

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
记一个人名：**Eugene V. Debs（德布斯）**——他坐牢后变成社会主义者，后来还选过总统。`,
        en: `Teacher said you must be able to **contrast** Homestead and Pullman:
- Who sent troops? Homestead: **private guards → state militia**; Pullman: **federal
  troops**.
- Why could the feds step into Pullman? Because it involved **interstate railroads +
  federal mail**.
One name to remember: **Eugene V. Debs** — after prison he became a socialist and later
even ran for president.`,
      },
    },

    // ── 卡 9（独立 mini-lesson）：Populism / People's Party / Bryan 1896 ──
    {
      id: 'populism-peoples-party',
      termCn: '民粹主义 / 人民党',
      termEn: 'Populism / People\'s Party',
      defCn: '民粹主义（Populism）是 1880-1890 年代农民对镀金时代不平等发起的政治运动，组成人民党（People\'s Party），要求政府管住铁路、增加货币供给、向富人征更多税。',
      defEn: 'Populism was a political movement of farmers in the 1880s-1890s pushing back against Gilded Age inequality. They formed the People\'s Party and demanded railroad regulation, expanded money supply, and higher taxes on the wealthy.',
      standardRef: ['APUSH KC-6.3', 'APUSH CED 6.8', 'CA HSS 8.12.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `谁是 Populist？1870-1890 年代，铁路公司对农民收取高运费，银行利息压死小农，棉花粮食价格持续跌。农民没法翻身——他们爆发了。

**1892 年 Omaha 纲领（Omaha Platform）** 是人民党（People's Party）的宣言，核心诉求：
- 货币政策：用白银铸币（free silver）增加货币供应，让债务贬值、农民喘气；
- 铁路国有化：政府接管铁路，不让垄断商家收高价；
- 累进所得税：富人多交税。

**1896 年大选** 是决战。民主党候选人 **William Jennings Bryan（布莱恩）** 接受人民党背书，发表震动全场的"黄金十字架"演说（Cross of Gold Speech）："你们不能把人类钉在黄金十字架上！"

结果：共和党 McKinley 靠工业资本胜选，金本位维持，人民党随后瓦解。但它的诉求——累进税、铁路监管、直选参议员——后来在进步时代全部实现。

**考点关键句**：Populism 是农民对镀金时代不平等的直接政治反击；1896 是第一次真正的"穷人 vs 金融资本"全国大选。`,
        en: `Who were the Populists? In the 1870s-1890s, railroad companies charged farmers high
freight rates, bank interest crushed small farms, and crop prices kept falling. Farmers
could not get back on their feet — they erupted.

The **1892 Omaha Platform** was the People's Party's manifesto. Core demands:
- Monetary policy: free coinage of silver to expand the money supply, letting farm debts
  shrink and giving farmers breathing room;
- Railroad nationalization: government takeover to stop monopoly pricing;
- A graduated income tax: the rich pay more.

The **1896 election** was the showdown. Democratic candidate **William Jennings Bryan**
ran with People's Party backing and delivered the thundering "Cross of Gold" speech:
"You shall not crucify mankind upon a cross of gold!"

Result: Republican McKinley, backed by industrial capital, won; the gold standard held;
the People's Party dissolved. But its demands — graduated tax, railroad regulation,
direct election of senators — were all enacted in the Progressive Era.

Key exam sentence: Populism was farmers' direct political pushback against Gilded Age
inequality; 1896 was the first true "poor vs. financial capital" national election.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是 Period 6 必考压轴之一。两个必背的锚：
- **Omaha Platform 1892**：人民党纲领（自由铸银 + 铁路国有化 + 累进税）。
- **Bryan 1896 + "Cross of Gold"**：民粹主义的顶峰，也是它的终点。

记忆口诀："农民怒了 → Omaha 写纲领 → Bryan 高喊十字架 → McKinley 赢了 → 进步时代把愿望实现。"
AP 题常问：人民党最大的历史影响是什么？答：诉求虽败，但政策遗产全进了 20 世纪改革。`,
        en: `Teacher said this is one of the must-know capstone cards for Period 6. Two anchors to lock in:
- **Omaha Platform 1892**: People's Party manifesto (free silver + railroad nationalization + graduated tax).
- **Bryan 1896 + "Cross of Gold"**: peak and endpoint of Populism.

Mnemonic: "Farmers rage → Omaha writes the platform → Bryan shouts the cross → McKinley wins → Progressive Era delivers the wish list."
AP often asks: what was the People's Party's biggest historical impact? Answer: they lost,
but their policy demands all became 20th-century law.`,
      },
    },

    // ── 卡 10（独立 mini-lesson）：New South & Jim Crow（种族隔离制度兴起） ──
    {
      id: 'new-south-jim-crow',
      termCn: '新南方 / 吉姆·克劳法',
      termEn: 'New South & Jim Crow',
      defCn: '"新南方"是重建时代结束后南方精英的口号，声称南方要向前发展。吉姆·克劳法（Jim Crow）是一整套州法律，把种族隔离写进公共生活，同时用选举门槛剥夺黑人投票权。1896 年的 Plessy v. Ferguson 判决让最高法院给这套制度背书。',
      defEn: '"New South" was a slogan of Southern elites after Reconstruction ended, claiming the region would move forward. Jim Crow laws were a set of state laws that enforced racial segregation in public life and stripped Black men of the vote. The 1896 Supreme Court ruling in Plessy v. Ferguson gave federal backing to this system.',
      standardRef: ['APUSH KC-6.4', 'APUSH CED 6.4', 'CA HSS 8.11.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `重建时代（Reconstruction）1877 年结束，联邦军队撤出南方。之后发生了什么？

**"新南方"（New South）** 是南方精英的宣传词，声称南方要工业化、向前看。
现实是：棉花仍主导，佃农制（sharecropping）把黑人和白人穷人都困在债务循环里，
旧的种族等级换了法律外壳重新巩固。

**Jim Crow（吉姆·克劳法）** 是一整套州法律，把种族隔离强制写进公共生活：
- 公共场所（学校、火车、餐馆）黑白分开；
- 识字测试、人头税、"祖父条款"等手段剥夺黑人选举权；
- 私刑（lynching）作为恐怖手段在背后撑场。

**关键判例 Plessy v. Ferguson（1896）**：最高法院裁定"隔离但平等"（separate but equal）合宪，
给 Jim Crow 体系提供了联邦背书，直到 1954 年 Brown v. Board 才推翻。

**考点关键句**：Jim Crow 不是内战前的延续，而是重建失败之后**重新建造**的种族压迫制度；
Plessy 1896 是它的法律基石。`,
        en: `Reconstruction ended in 1877 and federal troops left the South. What followed?

"New South" was a slogan of Southern elites claiming the region would industrialize and
move forward. The reality: cotton still dominated, the sharecropping system trapped Black
and poor white farmers in debt cycles, and the old racial hierarchy was rebuilt with a
legal shell.

Jim Crow was a set of state laws that wrote racial segregation into public life:
- Public spaces (schools, trains, restaurants) separated by race;
- Literacy tests, poll taxes, and "grandfather clauses" stripped Black men of the vote;
- Lynching operated as a tool of terror behind it all.

Key case Plessy v. Ferguson (1896): the Supreme Court ruled "separate but equal"
constitutional, giving federal backing to the Jim Crow system — until Brown v. Board
overturned it in 1954.

Key exam sentence: Jim Crow was not a continuation of pre-Civil War slavery — it was a
system of racial oppression rebuilt after Reconstruction's failure; Plessy 1896 is its
legal cornerstone.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡打通了 reconstruction → gilded age → civil rights 的长线，必须记牢。
三个锚：
- **Sharecropping（佃农制）**：重建后困住黑人经济的债务链条；
- **Jim Crow 法**：隔离一切公共场所 + 投票权剥夺手段清单；
- **Plessy v. Ferguson 1896**："隔离但平等"合宪——这一判例要背年份！

大坑：Jim Crow **不是**奴隶制的直接延续，而是一套重建失败后新立的制度——这个区别 DBQ 会考。
记忆口诀："重建结束 → 联邦撤手 → 各州立 Jim Crow → Plessy 背书 → 1954 才打破。"`,
        en: `Teacher said this card connects the long arc from Reconstruction through the Gilded Age
to Civil Rights — must know cold. Three anchors:
- **Sharecropping**: the debt chain that trapped Black economic life after Reconstruction;
- **Jim Crow laws**: segregated every public space + the full menu of disenfranchisement tools;
- **Plessy v. Ferguson 1896**: "separate but equal" ruled constitutional — memorize this year!

Big trap: Jim Crow was not a direct continuation of slavery — it was a new system built
after Reconstruction collapsed. That distinction shows up in DBQs.
Mnemonic: "Reconstruction ends → feds pull out → states build Jim Crow → Plessy rubber-stamps it → Brown 1954 breaks it."`,
      },
    },

    // ── 卡 8（独立 mini-lesson）：laissez-faire → Sherman Act + political machines ──
    {
      id: 'laissez-faire-government-role',
      termCn: '自由放任 / 政府角色的转折（含政治机器）',
      termEn: 'Laissez-Faire, Sherman Act & Political Machines',
      defCn: '自由放任（laissez-faire）是镀金时代政府"基本不管经济"的态度。Sherman Antitrust Act（谢尔曼反托拉斯法，1890）是政府第一次开始用法律约束垄断。政治机器（political machines）是城市里靠给穷人/移民小恩惠换选票、把持市政权力的腐败组织。',
      defEn: 'Laissez-faire ("let it do") was the Gilded Age government\'s hands-off approach to the economy. The Sherman Antitrust Act (1890) was the first federal law to restrain monopolies. Political machines were urban organizations that traded small favors to poor and immigrant voters for votes, then used those votes to control city government and pocket money.',
      standardRef: ['APUSH KC-6.1.II', 'APUSH KC-6.3', 'APUSH CED 6.10', 'CA HSS 8.12.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: '卡内基那条故事线里', context: '1890 年国会通过法律拆分大到能左右市场的巨头——这是政府第一次伸手管财富集中' },
        ],
      },
      standaloneText: {
        cn: `这张卡讲一个时代的"底色"和它的"转折"：政府该不该管？

**1. laissez-faire（自由放任）= 镀金时代的底色**
法语，意思是"让它去做"。这个时代政府基本**不管**经济：
没有最低工资、没有工时上限、没有工伤保障、没有保护工会的法律，
工厂还能雇私兵对付罢工。
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
Sherman Act（开始管）。** 政府角色从"放任"到"约束"的转折，是这一课的长线。`,
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
In cities there were organizations that traded small favors to the poor and immigrants
(jobs, a holiday turkey, help getting naturalized) for votes, then used the controlled
votes to monopolize city power and skim money. The most famous was New York's
**Tammany Hall** and its boss, **Boss Tweed**. This is a living footnote to the word
"gilded" — democratic elections on the surface, deals of money and power underneath.

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
        en: `Teacher said these three terms often appear together because they're three points on
the "government's role" line: **laissez-faire** (hands-off), **Sherman Act 1890** (the
first reach, the first antitrust law), and **political machines / Tammany Hall / Boss
Tweed** (the political corruption that grew under hands-off rule).

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

进阶思考：现代综合派说"同一双手既造繁荣也造苦难，不必二选一"——
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
      hintEn: `Hint: a good DBQ gives **multi-sided sources** and lets students assemble the complex
picture, for example —
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
更准确的说法是"被行业工会体系的实践和种族门槛挡在外面"，**不是 Gompers 一人主动排斥**——
把"个人选择"和"结构性排斥"分开，是写 DBQ 时成熟的分析。

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
excluding them.** Separating "personal choice" from "structural exclusion" is mature
analysis in a DBQ.

Going deeper: is there a small circle in your own life that "fights for the interests of
us, this lot" while shutting others out? Where exactly is the line between "practically
looking after your own" and "betraying a larger solidarity"?`,
      conceptsActivated: ['labor-movement-afl-knights', 'social-darwinism'],
    },
  ],
};

export default notebook;
