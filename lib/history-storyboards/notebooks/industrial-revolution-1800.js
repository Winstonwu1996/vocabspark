// ─── 同伴笔记本架构 v1 · Industrial Revolution 1760-1840 ──────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系（3 lens）：
//   - arkwright (perpetrator-actor)                 — 工厂制度发明者，钟 + 童工班
//   - robert-owen (lonely-mediator)                 — New Lanark 改革实验，silent monitor，乌托邦社会主义源头
//   - manchester-child-worker-receiving-end (Ellen) — composite 童工，Sadler 报告，1833 Factory Act
//   故事强在情感锚定 (factory system / 童工 / enclosure / Owen)，
//   notebook 补完 AP 考点闭环 (spinning jenny/water frame 纺织机械、steam engine/Watt、
//   capitalism vs socialism/Marx)。
//
// 课纲对齐：
//   - AP World History Modern Unit 5 (5.1-5.4 Industrialization)
//   - AP European History (Industrial Revolution)
//   - California HSS 10.3
//   - 弥补 industrial-revolution 课纲覆盖率到 ~95%
//
// 事实对账：lib/history-narratives/industrial-revolution-1800-factledger.md（已核实）
//   注：Owen 早年曼彻斯特厂为"几百人"，非上千（红旗 #19 已修正）。
//
// schemaVersion: 1 · notebookVersion: industrial-revolution-1800-v1

export var notebook = {
  topicId: 'industrial-revolution-1800',
  topicNameCn: '工业革命',
  topicNameEn: 'The Industrial Revolution',
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
    cn: `今天老师说要学工业革命（1760-1840，主要在英国）。她在白板上画了一张表，写了这些名字：

Richard Arkwright（阿克莱特）、Robert Owen（欧文）、James Watt（瓦特）、Karl Marx（马克思）

还有一串词，老师说每一个都可能考：
factory system（工厂制度）、enclosure（圈地）、spinning jenny（多锭纺纱机）、
steam engine（蒸汽机）、urbanization（城市化）、Sadler Report（Sadler 报告）、
Factory Act（工厂法）、capitalism / socialism（资本主义 / 社会主义）

我先把这张单子抄下来。等下我要读三个故事——一个工厂主（Arkwright）、一个改革者（Owen）、
一个曼彻斯特的九岁童工（Ellen，她是用上百个真孩子的证词拼出来的）。读完我再回来对照，
看我能不能解释每一个词。

老师还说了一句我写在第一页的话："工业革命不是一个'好'或'坏'的故事。它同时是人类生产力的
大爆发，和一群孩子用脊柱、手指、童年付掉的账单。AP 要你两面一起拿，不准只写一面。"`,
    en: `Today my teacher said we're learning the Industrial Revolution (1760-1840, mostly
in Britain). She drew a chart on the whiteboard with these names:

Richard Arkwright, Robert Owen, James Watt, Karl Marx

Plus a list of terms she said could all show up on the test:
factory system, enclosure, spinning jenny, steam engine, urbanization,
Sadler Report, Factory Act, capitalism / socialism

Let me copy this list down. I'm about to read three stories — a factory owner
(Arkwright), a reformer (Owen), and a nine-year-old child worker in Manchester
(Ellen, who is built from the testimony of hundreds of real children). After I read,
I'll come back and check whether I can explain each term.

Teacher also said one thing I wrote on the first page: "The Industrial Revolution
is not a 'good' or 'bad' story. It is at the same time the great explosion of human
productivity, and a bill that a generation of children paid with their spines, their
fingers, their childhoods. AP wants you to hold both sides — you're not allowed to
write only one."`,
    keyTerms: [
      { cn: '工厂制度', en: 'factory system' },
      { cn: '圈地（运动）', en: 'enclosure' },
      { cn: '城市化', en: 'urbanization' },
      { cn: '家庭手工业', en: 'cottage industry' },
      { cn: '自由放任', en: 'laissez-faire' },
      { cn: '资本主义', en: 'capitalism' },
      { cn: '社会主义', en: 'socialism' },
      { cn: '工人阶级 / 无产阶级', en: 'working class / proletariat' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '理查德·阿克莱特',
        nameEn: 'Richard Arkwright',
        ipa: '/ˈrɪtʃərd ˈɑːrkraɪt/',
        roleCn: '英国实业家，工厂制度的发明者，1771 年建 Cromford 水力纺纱厂',
        roleEn: 'British industrialist, inventor of the factory system, built Cromford water-powered mill 1771',
        mustKnow: true,
        audioKey: 'richard-arkwright',
      },
      {
        nameCn: '罗伯特·欧文',
        nameEn: 'Robert Owen',
        ipa: '/ˈrɒbərt ˈoʊɪn/',
        roleCn: '工厂主转改革者，New Lanark 模范工厂，乌托邦社会主义先驱',
        roleEn: 'mill owner turned reformer, New Lanark model factory, pioneer of utopian socialism',
        mustKnow: true,
        audioKey: 'robert-owen',
      },
      {
        nameCn: '詹姆斯·瓦特',
        nameEn: 'James Watt',
        ipa: '/dʒeɪmz wɒt/',
        roleCn: '苏格兰工程师，大幅改良蒸汽机，让蒸汽动力普及',
        roleEn: 'Scottish engineer, greatly improved the steam engine, made steam power practical',
        mustKnow: true,
        audioKey: 'james-watt',
      },
      {
        nameCn: '卡尔·马克思',
        nameEn: 'Karl Marx',
        ipa: '/kɑːrl mɑːrks/',
        roleCn: '德国哲学家·经济学家，批判工业资本主义，社会主义理论奠基人',
        roleEn: 'German philosopher and economist, critic of industrial capitalism, founder of socialist theory',
        mustKnow: true,
        audioKey: 'karl-marx',
      },
      {
        nameCn: '詹姆斯·哈格里夫斯',
        nameEn: 'James Hargreaves',
        ipa: '/dʒeɪmz ˈhɑːrɡriːvz/',
        roleCn: '多锭纺纱机（spinning jenny）发明者，1764 年前后',
        roleEn: 'inventor of the spinning jenny, around 1764',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '迈克尔·萨德勒',
        nameEn: 'Michael Sadler',
        ipa: '/ˈmaɪkəl ˈsædlər/',
        roleCn: '改革派议员，1832 年牵头议会童工调查，催生 Sadler 报告',
        roleEn: 'reformist MP, led the 1832 parliamentary inquiry into child labor, produced the Sadler Report',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '艾伦（合成童工）',
        nameEn: 'Ellen (composite child worker)',
        ipa: null,
        roleCn: '曼彻斯特棉纺厂九岁童工，基于 1832 Sadler 报告上百名真童工证词拼合，非真名实姓某人',
        roleEn: 'nine-year-old Manchester mill worker, composite built from the testimony of hundreds of real children in the 1832 Sadler Report, not a single named person',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'factory-system',
      termCn: '工厂制度',
      termEn: 'Factory System',
      standardRef: ['AP World KC-5.1', 'AP World CED 5.1', 'CA HSS 10.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'arkwright',
        nodeIds: ['ark-n1', 'ark-n3', 'ark-n6'],
        xiaoweiNote: {
          cn: `这个我读过！在 Arkwright 那一遍。1771 年他在 Cromford 建了一栋五层石楼，
里面几百个纱锭靠水车日夜不停地转——人们后来给这种楼起了个名字：工厂。

但我记笔记的时候发现一个特别容易错的点：工厂制度的核心**不是机器有多快**，
是 Arkwright 在 N3 干的那件事——他把钟挂上墙。乡下人本来按天、按季节、按心情干活，
他用钟、罚款、锁门、监工，把他们改造成"按分钟过日子的工人"。

考点关键句：factory system = 把动力 + 机器 + 工人组织进同一栋楼、按钟点纪律生产
（time-discipline 时间纪律）。它真正改变世界的不是某一台机器，是这套**组织人的方式**。

careful framing：Arkwright 不是个咬牙切齿的坏人，他是个聪明、勤奋、相信自己在创造进步的人。
正是这种人，能心安理得地把童工写进一套高效的制度里（N5、N6）。AP 喜欢考这种"进步与代价
同体"的角度。`,
          en: `I read this! In the Arkwright pass. In 1771 he built a five-story stone
building at Cromford, where hundreds of spindles turned day and night by water power —
later people gave this kind of building a name: a factory.

But while taking notes I found the point that's easiest to get wrong: the heart of the
factory system is **not how fast the machine is.** It's the thing Arkwright did in N3 —
he hung a clock on the wall. Country folk used to work by the day, by the season, by their
mood; with the clock, fines, locked gates, and overlookers, he turned them into "workers
who lived by the minute."

Key exam sentence: factory system = organizing power + machines + workers into one building,
producing under clock discipline (time-discipline). What truly changed the world wasn't any
one machine — it was this **way of organizing people.**

Careful framing: Arkwright wasn't a villain gritting his teeth. He was a clever, hardworking
man who believed he was creating progress. It's exactly such a person who can write child labor
into an efficient system with a clear conscience (N5, N6). AP loves this "progress and cost in
the same body" angle.`,
        },
      },
    },

    {
      id: 'enclosure-urbanization',
      termCn: '圈地 / 城市化',
      termEn: 'Enclosure / Urbanization',
      standardRef: ['AP World KC-5.1', 'AP World CED 5.1', 'CA HSS 10.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'arkwright',
        nodeIds: ['ark-n9'],
        mentionedIn: [
          { lens: 'manchester-child-worker-receiving-end', nodeId: 'mc-n2', context: 'Ellen 一家就是被圈地 + 机器 + 低工钱挤进曼彻斯特的' },
        ],
      },
      standaloneText: null,
      xiaoweiNote: {
        cn: `Arkwright N9 把这两个词串成了一条因果链，我觉得这是这一课最该背的一条逻辑。

**enclosure（圈地）**：从 Arkwright 之前几代起，英国地主把原本大家共用的公地（commons）
圈起来归自己私有。失去公地的农民种不了地，只能往城里走。

**urbanization（城市化）**：工厂要把人集中到机器边，于是成千上万的人离开土地，挤进
曼彻斯特、利兹这些工厂城市——几十年里人口翻好几倍。

小薇的口诀："**圈地把人从土地上赶下来，工厂在城里接住他们**"——一头一尾，重排了几百万人
的活法。这正好就是 Ellen 一家的故事（童工那一遍 N2）：他们不是想进厂，是被这一整套挤进去的。

careful framing（AP 常考）：城市长得太快、没人管——一家挤一间没窗的屋、污水横流、霍乱、煤烟，
工业城市工人的平均寿命比乡下还短。所以"城市化"不等于"生活变好"。`,
        en: `Arkwright N9 strings these two words into one causal chain, and I think it's the
single most important logic to memorize in this whole topic.

**Enclosure**: from a few generations before Arkwright, English landlords fenced in the common
land (the commons) that everyone had once shared, taking it as private property. Farmers who lost
the commons couldn't farm and had nowhere to go but the city.

**Urbanization**: the factory had to gather people to the machines, so tens of thousands left the
land and crowded into factory cities like Manchester and Leeds — populations multiplied several
times over in a few decades.

Xiaowei's mnemonic: "**Enclosure drove people off the land; the factory caught them in the city**" —
two ends of one chain that rearranged how millions lived. This is exactly Ellen's family's story
(child-worker pass, N2): they didn't want to enter the mill; they were pushed in by this whole system.

Careful framing (AP tests this): cities grew too fast with no one minding them — a family in one
windowless room, sewage in the streets, cholera, coal smoke; the average lifespan of city workers
was shorter than in the countryside. So "urbanization" does not equal "life got better."`,
      },
    },

    {
      id: 'textile-machines',
      termCn: '纺织机械 / 多锭纺纱机',
      termEn: 'Textile Machines / Spinning Jenny',
      standardRef: ['AP World KC-5.1', 'AP World CED 5.3', 'CA HSS 10.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'arkwright', nodeId: 'ark-n2', context: 'Arkwright 提到 1764 前后几样新机器先后出来，他把它们拼成一个系统' },
        ],
      },
      standaloneText: {
        cn: `工业革命为什么先在**棉纺织业**爆发？因为有一个"瓶颈"。

几百年里，纺纱是 cottage industry（家庭手工业）——一家人在屋里摇纺车，一根线一根线地纺。
慢。可是织布的机器越来越快，纺出来的线总是不够用。英国从印度、北美殖民地运来大量棉花，
纺纱却跟不上。这个"织布快、纺纱慢"的瓶颈，逼出了一连串新机器：

- **spinning jenny（多锭纺纱机）**：James Hargreaves 在 1764 年前后发明，一个人能同时纺
  好几根线（后来能纺几十根），靠手摇。
- **water frame（水力纺纱机）**：把水力接上去，机器自己转，不靠人手——这是 Arkwright 1769 年
  申请的专利。

⚠️ 一个特别容易错的考点：**Arkwright 真正的贡献不是"发明了纺纱机"**。他的 water frame 专利
后来还被法院判无效（1785）。他真正发明的，是把这些零碎的机器组织成一整套**工厂制度**
（看回第 1 张卡）。考试如果问"Arkwright 发明了什么"，答"factory system"比答"机器"更稳。

🔗 故事连接：Arkwright 在 N2 说，"单是一架快机器，改变不了世界。把机器、动力和人，按一套规矩
组织进同一栋楼里——这才是真正改变世界的东西。"那一节就是这张卡的源头。`,
        en: `Why did the Industrial Revolution explode first in the **cotton textile industry**?
Because of a bottleneck.

For centuries, spinning was cottage industry — a family turning a spinning wheel at home,
drawing out one thread at a time. Slow. But the weaving machines grew faster and faster, and
there was never enough thread for them. Britain shipped in huge amounts of cotton from India and
the North American colonies, but spinning couldn't keep up. This "fast weaving, slow spinning"
bottleneck forced out a string of new machines:

- **Spinning jenny**: invented by James Hargreaves around 1764, letting one person spin several
  threads at once (later dozens), turned by hand.
- **Water frame**: hooked up to water power so the machine turned on its own, not by hand — this
  was the patent Arkwright filed in 1769.

⚠️ A point that's easy to miss: **Arkwright's real contribution was NOT "inventing a spinning
machine."** His water frame patent was actually ruled invalid by a court (1785). What he truly
invented was organizing these scattered machines into a whole **factory system** (see Card 1).
If the test asks "what did Arkwright invent," answering "factory system" is safer than "machines."

🔗 Story link: in N2, Arkwright says, "One fast machine alone does not change the world.
Organizing machines, power, and people into one building under one set of rules — that is the thing
that truly changes the world." That node is the source of this card.`,
      },
      xiaoweiNote: {
        cn: `老师强调记两个名字 + 两台机器：**Hargreaves → spinning jenny（手摇、多锭）**，
**Arkwright → water frame（水力、自己转）**。我的口诀："**jenny 用手，frame 用水**"。
再加一句保命句：Arkwright 最该记的不是机器，是 factory system。`,
        en: `Teacher said memorize two names + two machines: **Hargreaves → spinning jenny
(hand-cranked, many spindles)**, **Arkwright → water frame (water-powered, turns itself)**.
My mnemonic: "**jenny by hand, frame by water.**" Plus a survival line: the thing to remember
about Arkwright isn't the machine, it's the factory system.`,
      },
    },

    {
      id: 'steam-engine-watt',
      termCn: '蒸汽机 / 瓦特',
      termEn: 'Steam Engine / James Watt',
      standardRef: ['AP World KC-5.1', 'AP World CED 5.3', 'CA HSS 10.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'arkwright', nodeId: 'ark-n7', context: 'Arkwright 说能量源头是人懂得驯服自然力（水→蒸汽），蒸汽机站在科学革命的肩膀上' },
        ],
      },
      standaloneText: {
        cn: `如果工业革命只让你记一台机器，那就是 **steam engine（蒸汽机）**。它是把"工厂"从河边
解放出来、搬进城市的钥匙。

为什么是钥匙？Arkwright 的第一批工厂靠**水力**，所以必须建在河谷边（Cromford 就在河边）。
水力有限制：没河的地方建不了，旱季水少机器就慢。

**James Watt（詹姆斯·瓦特，1736-1819）**，苏格兰工程师，在 1769 年和 1781 年前后大幅
**改良**了蒸汽机（注意：不是"发明"——更早的 Newcomen 蒸汽机已经存在，瓦特让它效率高得多、
能转动各种机器）。蒸汽机烧煤就能出力，不挑地方。于是工厂不再被绑在河边，可以搬进城市、靠近
煤矿、靠近劳动力和市场。蒸汽还推动了火车、轮船。

🔗 跨课连接（Arkwright N7 亲口说的）：蒸汽机不是凭空冒出来的——它站在科学革命
（scientific-revolution）那一代人的肩膀上：有人先搞清了力、压强、运动的规律，瓦特们才能把这些
规律变成机器。这条"科学搞懂自然 → 自然推动机器"的链子，是 AP 跨单元的高频连接。

⚠️ 高频纠错：**"工业革命 = 瓦特发明蒸汽机"是错的**。(1) 工业革命的核心是 factory system，
不是单一机器；(2) 最早的工厂用的是水力（Cromford 1771），蒸汽是后来才普及的；(3) 瓦特是
"改良者"不是"发明者"。这三点 AP 都爱挖坑。`,
        en: `If the Industrial Revolution lets you memorize only one machine, make it the
**steam engine.** It's the key that freed "the factory" from the riverbank and moved it into
the city.

Why a key? Arkwright's first mills ran on **water power**, so they had to be built in river valleys
(Cromford sits by a river). Water power has limits: you can't build where there's no river, and in
dry seasons the machines slow.

**James Watt (1736-1819)**, a Scottish engineer, greatly **improved** the steam engine around 1769
and 1781 (note: not "invented" — the earlier Newcomen engine already existed; Watt made it far more
efficient and able to drive all kinds of machines). A steam engine makes power by burning coal and
isn't picky about location. So factories were no longer tied to rivers — they could move into cities,
near coal mines, near labor and markets. Steam also drove trains and steamships.

🔗 Cross-topic link (Arkwright says it himself in N7): the steam engine didn't appear out of nowhere —
it stood on the shoulders of the scientific-revolution generation, who first worked out the laws of
force, pressure, and motion, so that people like Watt could turn those laws into machines. This chain,
"science understands nature → nature drives the machine," is a high-frequency AP cross-unit connection.

⚠️ High-frequency correction: **"Industrial Revolution = Watt invented the steam engine" is wrong.**
(1) The heart of the Industrial Revolution is the factory system, not a single machine; (2) the
earliest factories ran on water power (Cromford 1771), and steam spread later; (3) Watt was an
"improver," not the "inventor." AP loves to set traps on all three.`,
      },
      xiaoweiNote: {
        cn: `这是老师说的工业革命**最高频考点之一**。我把它和水力对着记：
**水力 = 工厂绑在河边（Arkwright/Cromford）；蒸汽 = 工厂自由进城（Watt）**。
保命句三连："瓦特是改良不是发明；最早是水力不是蒸汽；核心是制度不是机器。"`,
        en: `Teacher said this is **one of the most frequently tested** Industrial Revolution points.
I memorize it against water power: **water = factory tied to the river (Arkwright/Cromford);
steam = factory free to enter the city (Watt).** Survival triple: "Watt improved, didn't invent;
water came first, not steam; the core is the system, not the machine."`,
      },
    },

    {
      id: 'child-labor-factory-acts',
      termCn: '童工 / Sadler 报告 / 工厂法',
      termEn: 'Child Labor / Sadler Report / Factory Acts',
      standardRef: ['AP World KC-5.1.II', 'AP World CED 5.4', 'CA HSS 10.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'manchester-child-worker-receiving-end',
        nodeIds: ['mc-n4', 'mc-n5', 'mc-n8', 'mc-n9'],
        mentionedIn: [
          { lens: 'arkwright', nodeId: 'ark-n8', context: 'Arkwright 死后几十年，1832 议会派 Sadler 委员会调查童工' },
          { lens: 'robert-owen', nodeId: 'ro-n9', context: 'Owen 游说促成 1819 Factory Act' },
        ],
      },
      xiaoweiNote: {
        cn: `Ellen 那一整遍就是这张卡，我读的时候手心是凉的。

**童工的真实条件**（mc-n3、n4、n5）：她是 piecer（接线工），纺纱机几百根线一直在断，她整天弯腰
或钻到飞转的机器底下接线，早 5:30 到晚 8:00，中间约 40 分钟吃饭，每天机器边十三小时以上。最难的
不是累是困——一打盹，监工（overlooker）的皮带（strap）就抽下来"叫醒"她。机器还会咬掉手指、
卷进整只手。出事工厂不赔，"机器坏了花钱修，孩子伤了再招一个"。

**两个必背名词 + 一条法律链**（mc-n8、n9）：
- **Sadler Report（Sadler 报告，1832）**：议会派 Sadler 议员牵头，把工人、医生、童工一个个叫去
  作证，一字不漏记下来。它第一次把童工当"证人"而不是"财产"——这个动作本身改变了历史。
- **Factory Act（工厂法）**：1819 年那部（Owen 推动的）软弱、几乎没人执行；**1833 年那部更硬：
  禁九岁以下进纺织厂、九到十三岁限工时，最关键是首次派 inspector（视察员）进厂执法**。法律第一次
  真正进了厂门。

考点关键句：让童工状况变好的，**不是哪个厂主突然良心发现，是被记录的证词逼出来的法律**
（mc-n9 原话）。这是 AP 最爱的论点：靠制度，不是靠个人善意。

⚠️ careful framing（AP 常考的两个 nuance）：(1) 工业革命**之前**穷人孩子也在田里、矿里干活——
革命改变的是劳作的**形式与强度**，不是"儿童劳动"本身，别把工厂前的农村浪漫化。(2) Sadler 本人是
改革派议员，征集证词有推动立法的政治目的——一手史料的立场要纳入解读。证词是真的，但它不是"中立"的。`,
        en: `Ellen's whole pass is this card, and my palms were cold while reading it.

**The real conditions of child labor** (mc-n3, n4, n5): she's a piecer, the spinning frame's hundreds
of threads keep breaking, and all day she bends or reaches under the spinning machine to join them,
5:30 a.m. to 8:00 p.m., about 40 minutes to eat, more than thirteen hours a day at the machine. The
hardest part isn't exhaustion, it's drowsiness — one nod off, and the overlooker's strap comes down to
"wake" her. The machine also bites off fingers, pulls in a whole hand. When something happens the factory
doesn't pay: "a broken machine costs money to fix; an injured child, you just hire another."

**Two must-know terms + one chain of laws** (mc-n8, n9):
- **Sadler Report (1832)**: Parliament sent a committee led by MP Sadler to call in workers, doctors,
  and child workers one by one to testify, set down word for word. For the first time it treated child
  workers as "witnesses," not "property" — that act itself changed history.
- **Factory Act**: the 1819 one (pushed by Owen) was weak, barely enforced; **the 1833 one was harder:
  banned children under nine from textile mills, limited the hours of nine-to-thirteen-year-olds, and most
  importantly sent inspectors into the mills to enforce it for the first time.** The law truly came through
  the mill gate at last.

Key exam sentence: what made child labor better was **not some owner's sudden change of heart, it was the
law forced out by recorded testimony** (mc-n9's own words). This is AP's favorite argument: through
institutions, not individual goodwill.

⚠️ Careful framing (two nuances AP tests): (1) **Before** the Industrial Revolution, poor children already
worked in the fields and mines — the revolution changed the **form and intensity** of labor, not "child
labor" itself; don't romanticize the pre-factory countryside. (2) Sadler himself was a reformist MP, and
gathering the testimony had the political aim of pushing legislation — the stance of a primary source must
enter your reading. The testimony is real, but it isn't "neutral."`,
      },
    },

    {
      id: 'robert-owen-utopian-socialism',
      termCn: 'Robert Owen / 乌托邦社会主义',
      termEn: 'Robert Owen / Utopian Socialism',
      standardRef: ['AP World KC-5.4', 'AP World CED 5.4', 'CA HSS 10.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'robert-owen',
        nodeIds: ['ro-n1', 'ro-n5', 'ro-n6', 'ro-n7', 'ro-n9'],
        xiaoweiNote: {
          cn: `Owen 那一整遍。我最喜欢他，因为他站的位置最难——他自己也是个靠工厂赚钱的厂主，
却想证明"不压榨童工照样能赚钱"。

**他在 New Lanark 做了什么**（ro-n5、n6、n7）：1800 年接手苏格兰 New Lanark 厂（两千多工人、
五百多孩子）。他把工时从十三、四小时砍到十小时半，规定十岁以下不进车间，盖了世界上最早的工厂
子弟学校之一，禁皮带，发明 **silent monitor（无声的监工）**——一个四面不同颜色的小木块，按前一天
表现翻面，用激励代替体罚。结果 New Lanark **照样赚大钱**，成了全欧洲来参观的模范。

**两个 AP 考点**：
1. Owen 证明的是"善待工人和盈利不矛盾"——他**首先是个追求利润的厂主**，不是慈善家。
   （别答成"Owen 是好心慈善家"，这是常见错误。）
2. 别的厂主不学他（ro-n8）。Owen 醒悟："靠个人良心救不了系统，必须立法。"于是去推动 1819
   Factory Act，晚年到美国建乌托邦社区 **New Harmony**——失败散伙。

考点关键句：Owen 被视为**乌托邦社会主义（utopian socialism）思想最早的源头之一**。"乌托邦"
是后来 Marx 那派给的标签，意思是"靠建模范社区、靠善意去示范"，区别于 Marx 主张的"靠阶级斗争
和革命"（看下一张卡）。

careful framing（ro-n11、n12）：Owen 救得了自己一家厂的两千人，救不了墙外的几十万人；他活着时
几乎样样输。但他输的那些仗，定义了后两百年劳工保护的方向。AP 经典问法："一个在改不动的系统里
做一点好事的改革者，到底值多少分？"`,
          en: `Owen's whole pass. He's my favorite, because his seat is the hardest — he's a mill owner
making money from the factory himself, yet he wants to prove "you can profit without squeezing child
workers."

**What he did at New Lanark** (ro-n5, n6, n7): in 1800 he took over the New Lanark mill in Scotland
(over two thousand workers, over five hundred children). He cut hours from thirteen or fourteen down to
ten and a half, banned children under ten from the workroom, built one of the world's earliest factory
schools, banned the strap, and invented the **silent monitor** — a small wooden block with a different
color on each of its four faces, turned each day by the previous day's showing, replacing beatings with
encouragement. The result: New Lanark **still made big money** and became a model that all of Europe came
to see.

**Two AP points**:
1. What Owen proved is "treating workers well and making a profit aren't enemies" — he was **first of all
   a profit-seeking owner**, not a charity giver. (Don't answer "Owen was a kindhearted philanthropist" —
   that's the common mistake.)
2. Other owners didn't copy him (ro-n8). Owen realized: "Individual conscience can't save the system; you
   must legislate." So he pushed the 1819 Factory Act, and late in life went to America to build a utopian
   community, **New Harmony** — which failed and broke apart.

Key exam sentence: Owen is seen as **one of the earliest sources of utopian socialism.** "Utopian" is a
label later given by Marx's camp, meaning "through model communities, through goodwill and demonstration,"
as opposed to Marx's call for "class struggle and revolution" (see the next card).

Careful framing (ro-n11, n12): Owen could save the two thousand in his own mill, not the hundreds of
thousands beyond the wall; while he lived he lost at nearly everything. But the battles he lost defined the
direction of labor protection for two centuries. Classic AP question: "A reformer who does a little good
inside a system he can't change — how much is that worth?"`,
        },
      },
    },

    {
      id: 'capitalism-socialism-marx',
      termCn: '资本主义 vs 社会主义 / 马克思',
      termEn: 'Capitalism vs Socialism / Marx',
      standardRef: ['AP World KC-5.4', 'AP World CED 5.4', 'CA HSS 10.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'robert-owen', nodeId: 'ro-n10', context: 'Owen 的 New Harmony 梦被视为社会主义思想最早源头之一' },
        ],
      },
      standaloneText: {
        cn: `工业革命造出了两个全新的阶级，也造出了一场关于"这套系统公不公平"的大辩论。这场辩论
直到今天还没停，AP World Unit 5 几乎必考。

**先认清两个阶级**：工厂主（拥有工厂、机器、资本的人）vs 工厂工人（只有自己一双手、靠工钱
吃饭的人，也叫 working class / proletariat 无产阶级）。

**capitalism（资本主义）**：生产资料（工厂、机器）私人拥有，靠市场和竞争决定生产什么、给多少工钱。
支持者（如 Adam Smith 的"看不见的手"思路）认为它最有效率、创造最多财富。这就是 Arkwright 那套
工厂制度背后的经济逻辑：laissez-faire（自由放任）——"工厂是私人的，老板爱怎么用工人是老板的事"。

**socialism（社会主义）**：批评资本主义让少数厂主暴富、多数工人受穷，主张生产资料应该由社会
共同拥有或控制，让成果分得更公平。社会主义内部又分两大路线：
- **utopian socialism（乌托邦社会主义）**：像 Owen，靠建模范社区、靠善意去示范一个更好的社会
  （看上一张卡，New Harmony 就是）。
- **Karl Marx（卡尔·马克思，1818-1883）那一派**：认为靠善意和模范社区改不了系统。他说历史是
  一部**阶级斗争**史，工业资本主义必然让资本家和工人对立，最终要靠工人阶级**革命**推翻它。
  他和 Engels 1848 年写了《共产党宣言》（The Communist Manifesto）。

⚠️ AP 高频区分：**Owen = utopian（靠示范）；Marx = "scientific"/revolutionary（靠阶级斗争和革命）**。
Marx 那派正是用"乌托邦"这个词来跟 Owen 们划清界限的。

🔗 故事连接：Owen 那一遍 N10 说，他失败的 New Harmony"那个'大家平分成果'的梦，后来被人称作
社会主义思想最早的源头之一"。这张卡就是接着那句往下讲——从 Owen 的善意示范，到 Marx 的阶级革命，
是同一场"工业革命公不公平"辩论的两条岔路。`,
        en: `The Industrial Revolution created two brand-new classes, and a great debate over whether this
system is fair. That debate still hasn't stopped today, and AP World Unit 5 tests it almost every time.

**First, the two classes**: factory owners (who own the factories, machines, and capital) vs factory
workers (who have only their own two hands and live on wages — also called the working class / proletariat).

**Capitalism**: the means of production (factories, machines) are privately owned, and markets and
competition decide what is produced and how much workers are paid. Supporters (like Adam Smith's
"invisible hand" reasoning) argue it's the most efficient and creates the most wealth. This is the economic
logic behind Arkwright's factory system: laissez-faire — "the factory is private property, and how the
owner uses his workers is the owner's own affair."

**Socialism**: criticizes capitalism for making a few owners rich while most workers stay poor, and argues
the means of production should be owned or controlled by society in common, so the fruits are shared more
fairly. Socialism itself splits into two main paths:
- **Utopian socialism**: like Owen, building model communities and using goodwill to demonstrate a better
  society (see the previous card; New Harmony is one).
- **Karl Marx's camp (1818-1883)**: argues goodwill and model communities can't change the system. He said
  history is a story of **class struggle**, that industrial capitalism inevitably sets capitalists and
  workers against each other, and that in the end the working class must **overthrow** it by revolution. He
  and Engels wrote *The Communist Manifesto* in 1848.

⚠️ High-frequency AP distinction: **Owen = utopian (by demonstration); Marx = "scientific"/revolutionary
(by class struggle and revolution).** Marx's camp used the very word "utopian" to set themselves apart from
people like Owen.

🔗 Story link: in Owen's pass, N10 says that his failed New Harmony, "that dream of 'fruits shared equally,'
was later called one of the earliest sources of socialist thought." This card picks up right from that line —
from Owen's goodwill demonstration to Marx's class revolution are two forks of the same "is the Industrial
Revolution fair?" debate.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 Unit 5 的**最高频考点之一**，因为它把工业革命连到后面 100 年的世界历史。
我的口诀："**capitalism 私有 + 市场；socialism 共有 + 公平**。Owen 靠示范（utopian），
Marx 靠革命（class struggle）。"两人都批评同一套工厂制度，开的药方不一样。`,
        en: `Teacher said this is **one of the highest-frequency points** in Unit 5, because it connects the
Industrial Revolution to the next 100 years of world history. My mnemonic: "**capitalism = private +
market; socialism = common + fair.** Owen by demonstration (utopian), Marx by revolution (class struggle)."
Both criticize the same factory system; they prescribe different cures.`,
      },
    },

    {
      id: 'progress-and-its-cost',
      termCn: '进步与代价（生活水平之争）',
      termEn: 'Progress and Its Cost (Standard of Living Debate)',
      standardRef: ['AP World KC-5.1.II', 'AP DBQ rubric', 'CA HSS 10.3'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ark-n10', 'ark-n11', 'ro-n11', 'mc-n10', 'mc-n11'],
        xiaoweiNote: {
          cn: `这张卡是把三个故事缝起来的那根线，老师说 **DBQ 一定会用到这个角度**。

三个视角各自在 N10-N11 把镜头拉到今天，说的其实是同一件事的不同面：
- **Arkwright（N10、N11）**："你穿的衣服、用的手机、家里每样东西都来自工厂这套系统……可第一代
  工厂工人，用他们的肺、脊柱、孩子的童年，付了这套系统的开办费。"
- **Owen（N11）**：善意能照亮一点，但光靠善意远远不够。
- **Ellen（N10、N11）**："同一根线，一头是我没了的手指，一头是你今天的生活。"

**核心考点：standard of living debate（生活水平之争）**——历史学家到今天还在吵：工业革命到底
让工人生活变好了还是变差了？
- **乐观派**：长期看，工业革命大幅提高了所有人的生活水平（更多商品、更便宜、更长寿命……最终）。
- **悲观派**：至少**头几代**工厂工人的生活水平是**下降**的（寿命缩短、城市卫生差、童工）。
- 证据两边都有，关键看你选哪个时段、哪个指标。**这就是为什么没有标准答案。**

写 essay 的模板（小薇版）：
1. 承认工业革命的进步面（生产力爆炸、长期物质丰裕）。
2. 列出代价面（童工、寿命缩短、贫民窟、enclosure 让人失地）。
3. 拒绝单线 Whig 叙事（"技术进步 = 必然繁荣"是错的，至少头几代不是）。
4. 结论：评价工业革命**必须两面一起拿**——进步和代价不是两本账，是同一项发明的同一页
   （Arkwright N12 原话）。

🔗 transfer（三个视角都点了）：今天你随手买的便宜东西，背后那根线另一头，可能还连着某个看不见的
低薪长时劳动者。工业革命的童工问题没消失，只是转移到了全球供应链的另一端。`,
          en: `This card is the thread that sews the three stories together, and teacher said the **DBQ will
definitely use this angle.**

Each of the three lenses pulls the camera to today in N10-N11, all saying different faces of one thing:
- **Arkwright (N10, N11)**: "The clothes on your back, the phone you use, everything in your home comes from
  this factory system… but the first generation of factory workers paid its startup cost with their lungs,
  their spines, their children's childhoods."
- **Owen (N11)**: goodwill can light a little, but goodwill alone is nowhere near enough.
- **Ellen (N10, N11)**: "The same thread, one end my missing finger, the other end your life today."

**Core exam point: the standard of living debate** — historians still argue today: did the Industrial
Revolution make workers' lives better or worse?
- **Optimists**: in the long run it greatly raised everyone's standard of living (more goods, cheaper, longer
  lives… eventually).
- **Pessimists**: at least the **first few generations** of factory workers saw their standard of living
  **fall** (shorter lifespans, bad city sanitation, child labor).
- Both sides have evidence; it depends which period and which indicator you pick. **That's why there's no
  standard answer.**

Essay template (Xiaowei version):
1. Acknowledge the progress side (productivity explosion, long-run material plenty).
2. List the cost side (child labor, shorter lifespans, slums, enclosure stripping people of land).
3. Reject the single-line Whig narrative ("technological progress = inevitable prosperity" is wrong, at least
   for the first generations).
4. Conclusion: judging the Industrial Revolution **must hold both sides** — progress and cost aren't two
   ledgers, they're the same page of the same invention (Arkwright N12's own words).

🔗 Transfer (all three lenses point to it): the cheap thing you buy without thinking today may still have a
thread whose other end connects to some unseen low-paid, long-hours worker. The Industrial Revolution's child
labor problem didn't vanish; it just moved to the other end of the global supply chain.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Arkwright 真心相信自己在创造进步，也真心觉得"我给了童工饭吃、有宿舍、有工钱寄回家，
比在乡下挨饿强"。这些话每一句都是真的。

可同样真的是：他每天用上百个九岁孩子，让他们在机器边站十几个小时。一个相信自己在做好事的人，
能不能同时在做巨大的恶？`,
      en: `Arkwright sincerely believed he was creating progress, and sincerely felt "I gave the
child workers food, dormitories, wages to send home — better than starving in the countryside." Every one
of these statements is true.

But equally true: he worked hundreds of nine-year-olds twelve hours a day at the machines. Can a person
who believes he is doing good be doing enormous harm at the same time?`,
      hintCn: `提示：可以从两个角度想——(1) Arkwright 那些"真话"确实在帮一些孩子（比起饿死），
但它们同时有一个用处：让他自己心安理得，把"用童工"包装成"做好事"（看 ark-n5）。一句真话被用来
让自己好过时，它还算诚实吗？(2) 那个时代穷孩子本来也在田里、矿里干活——"儿童劳动"不是 Arkwright
发明的，他改变的是劳作的形式和强度。

进阶思考：今天有没有类似的人——公开主张一种价值，靠着"我也做了点好事"让自己对更大的代价视而不见？
这是个人问题，还是时代结构的问题？`,
      hintEn: `Hint: think from two angles — (1) Arkwright's "true statements" did help some children
(versus starving), but they also have a use: to keep his own conscience clear, wrapping "using child labor"
in "doing good" (see ark-n5). When a true statement is used to make oneself feel better, is it still honest?
(2) In that era, poor children already worked in fields and mines — Arkwright didn't invent "child labor";
he changed its form and intensity.

Going deeper: is there a similar person today — publicly advocating a value, while using "I did some good
too" to look away from a much larger cost? Is this a personal failing, or a structural feature of the era?`,
      conceptsActivated: ['factory-system', 'child-labor-factory-acts', 'progress-and-its-cost'],
    },
    {
      id: 'q2',
      cn: `Owen 在 New Lanark 救得了自己一家厂的两千人，却救不了墙外曼彻斯特的几十万童工。
别的厂主冷静拒绝学他："你赚'够多'就满足，我们要赚'最多'。"于是 Owen 醒悟：靠个人良心救不了系统，
必须立法。

让童工状况真正变好的，到底是"好人多一点"，还是"改规则"？如果你只能押一边，你押哪边？为什么？`,
      en: `Owen could save the two thousand in his own New Lanark mill, but not the hundreds of
thousands of child workers in Manchester beyond the wall. Other owners calmly refused to copy him: "You're
satisfied earning 'enough'; we want to earn 'the most.'" So Owen realized: individual conscience can't save
the system; you must legislate.

What actually made child labor better — "more good people," or "changing the rules"? If you could only bet
on one side, which would you bet on, and why?`,
      hintCn: `提示：故事给了你证据两边都有。"好人"那边：Owen 真的把 New Lanark 那两千人的生活改好了，
silent monitor 真的换掉了皮带。"改规则"那边：1819 软法几乎没人执行，直到 1833 派了 inspector
进厂执法，事情才真正变了（mc-n9："让事情变好的，不是哪个厂主突然良心发现，是被记录的证词逼出的法律"）。

进阶思考：这个问题不只关于工厂。今天你身边有没有"明明不对、但大家都这么干"的事？要改它，是劝大家
"做个好人"更有效，还是改一条规则更有效？两者能不能配合？`,
      hintEn: `Hint: the story gives you evidence on both sides. The "good people" side: Owen really did
improve life for those two thousand at New Lanark, and the silent monitor really did replace the strap. The
"change the rules" side: the weak 1819 law was barely enforced, and only when inspectors were sent in under
the 1833 act did things truly change (mc-n9: "what made things better was not some owner's sudden change of
heart, it was the law forced out by recorded testimony").

Going deeper: this isn't only about factories. Is there something around you today that's "clearly wrong but
everyone does it"? To fix it, is it more effective to urge people to "be good," or to change a rule? Can the
two work together?`,
      conceptsActivated: ['robert-owen-utopian-socialism', 'child-labor-factory-acts', 'capitalism-socialism-marx'],
    },
    {
      id: 'q3',
      cn: `课本常说"工业革命让生活变好了"。可 Ellen 说："同一根线，一头是我没了的手指，
一头是你今天的生活。"历史学家到今天还在吵这件事（这叫 standard of living debate 生活水平之争）。

如果让你出一道 DBQ 题，请别人回答"工业革命到底让人生活变好了还是变差了"，你会怎么提问？
你会给学生哪几份不同的材料，逼他们两面都看？`,
      en: `Textbooks often say "the Industrial Revolution made life better." But Ellen says: "The
same thread, one end my missing finger, the other end your life today." Historians still argue about this
today (it's called the standard of living debate).

If you were writing a DBQ asking someone "did the Industrial Revolution make life better or worse," how
would you phrase the question? Which different sources would you give students to force them to see both
sides?`,
      hintCn: `提示：好的 DBQ 不会问"工业革命好不好"（太大、太单线），它会逼你**限定时段和指标**，
并给互相打架的材料。比如：
- 一份显示长期 GDP、商品产量、识字率暴涨的图表（乐观派证据）；
- 一份 Sadler 报告证词 + 城乡儿童死亡率对比（悲观派证据：曼彻斯特工人阶级儿童 5 岁前死亡率远高于乡下）；
- 提醒：Sadler 是改革派议员，证词的采集有政治目的（一手史料的立场要纳入解读）。

进阶思考：为什么"两面一起拿"比"选一边"更难，却更接近真相？拒绝单线 Whig 叙事（"技术进步 = 必然繁荣"）
为什么是 AP 的核心要求？`,
      hintEn: `Hint: a good DBQ won't ask "was the Industrial Revolution good" (too big, too single-line) —
it forces you to **fix a time period and an indicator**, and gives sources that fight each other. For example:
- a chart showing long-run GDP, goods output, and literacy soaring (optimist evidence);
- a piece of Sadler Report testimony plus a city-vs-countryside child mortality comparison (pessimist
  evidence: Manchester working-class children's under-five mortality was far higher than the countryside);
- a reminder: Sadler was a reformist MP, and the testimony was gathered with a political aim (a primary
  source's stance must enter your reading).

Going deeper: why is "holding both sides" harder than "picking one side," yet closer to the truth? Why is
rejecting the single-line Whig narrative ("technological progress = inevitable prosperity") a core AP
requirement?`,
      conceptsActivated: ['progress-and-its-cost', 'child-labor-factory-acts', 'enclosure-urbanization'],
    },
  ],
};

export default notebook;
