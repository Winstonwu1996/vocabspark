// ─── 同伴笔记本架构 v1 · Protestant Reformation 1517 ────────────────────────
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
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Luther / Erasmus / Sister Agnes 三条线）
//   - notebook 提供考点闭环（Calvin / Council of Trent / Henry VIII / 宗教战争 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP Euro KC-2.1, 2.1.I, 2.1.II, 2.1.III; AP World KC-4.1
//   - California HSS 7.9
//   - 弥补 reformation-1517 课纲覆盖率从 72% → ~96%
//
// schemaVersion: 1 · notebookVersion: reformation-1517-v1

export var notebook = {
  topicId: 'reformation-1517',
  topicNameCn: '宗教改革',
  topicNameEn: 'The Protestant Reformation',
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
    cn: `今天老师要我们学 1517 年的宗教改革（Protestant Reformation）。
她给了一张纸，上面写了这些名字：

Martin Luther（马丁·路德）、John Calvin（约翰·加尔文）、
Erasmus（伊拉斯谟）、Henry VIII（亨利八世）

还有几个词：sola fide（因信称义）、predestination（预定论）、
indulgence（赎罪券）、Council of Trent（天特会议）

我先把它们抄下来。等一会儿读三个故事——路德、伊拉斯谟、还有一个修道院里的修女——
读完再回来对照这张单子，看我能不能用自己的话解释每一个词。

老师说这次考试会有一道 DBQ，问：
"宗教改革让人们得到了'宗教自由'吗？"
我先把这个问题写在本子第一行，带着这个问题去读故事。`,
    en: `Today my teacher told us we're learning the Protestant Reformation (1517).
She gave us a sheet with these names:

Martin Luther, John Calvin, Erasmus, Henry VIII

Plus some terms: sola fide (faith alone), predestination,
indulgence, Council of Trent.

Let me write these down. After I read the three stories
(Luther, Erasmus, and a nun in a monastery),
I'll come back and check whether I can explain each one.

My teacher says the test will have a DBQ:
"Did the Reformation give people 'religious freedom'?"
I wrote that question on line one of my notebook —
I'll read the stories with that question in mind.`,
    keyTerms: [
      { cn: '因信称义', en: 'sola fide (faith alone)' },
      { cn: '圣经权威', en: 'sola scriptura (scripture alone)' },
      { cn: '赎罪券', en: 'indulgence' },
      { cn: '预定论', en: 'predestination' },
      { cn: '反宗教改革', en: 'Counter-Reformation' },
      { cn: '宗教宽容/奥格斯堡和约', en: 'Peace of Augsburg / cuius regio eius religio' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '马丁·路德',
        nameEn: 'Martin Luther',
        ipa: '/ˈmɑːrtɪn ˈluːθər/',
        roleCn: '德意志神学家，九十五条作者，新教改革奠基人',
        roleEn: 'German theologian, author of the 95 Theses, founder of Protestantism',
        mustKnow: true,
        audioKey: 'martin-luther',
      },
      {
        nameCn: '约翰·加尔文',
        nameEn: 'John Calvin',
        ipa: '/dʒɒn ˈkælvɪn/',
        roleCn: '法国-瑞士神学家，预定论与日内瓦神权政治创立者',
        roleEn: 'French-Swiss theologian, founder of Calvinist predestination doctrine',
        mustKnow: true,
        audioKey: 'john-calvin',
      },
      {
        nameCn: '伊拉斯谟',
        nameEn: 'Erasmus of Rotterdam',
        ipa: '/ɪˈræzməs/',
        roleCn: '荷兰人文主义者，《愚人颂》作者，中间路线代表',
        roleEn: 'Dutch humanist, author of In Praise of Folly, voice of the middle path',
        mustKnow: true,
        audioKey: 'erasmus',
      },
      {
        nameCn: '亨利八世',
        nameEn: 'Henry VIII',
        ipa: '/ˈhɛnri ðə ˈeɪtθ/',
        roleCn: '英格兰国王，为政治目的推行英国宗教改革',
        roleEn: 'King of England, launched the English Reformation for political reasons',
        mustKnow: true,
        audioKey: 'henry-viii',
      },
      {
        nameCn: '威腾堡',
        nameEn: 'Wittenberg',
        ipa: '/ˈvɪtənbɜːrɡ/',
        roleCn: '路德张贴九十五条的德意志城市',
        roleEn: 'German city where Luther posted the 95 Theses',
        mustKnow: true,
        audioKey: 'wittenberg',
      },
      {
        nameCn: '沃尔姆斯',
        nameEn: 'Worms',
        ipa: '/vɔːrmz/',
        roleCn: '1521 年帝国议会所在地，路德拒绝认错之处',
        roleEn: 'Site of the 1521 Diet where Luther refused to recant',
        mustKnow: true,
        audioKey: 'worms',
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'luther-95-theses',
      termCn: '路德 / 九十五条与因信称义',
      termEn: 'Luther / 95 Theses and Sola Fide',
      standardRef: ['AP Euro KC-2.1.I', 'CA HSS 7.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'luther-agonistic-prophet',
        nodeIds: ['luther-N1', 'luther-N4', 'luther-N7'],
        xiaoweiNote: {
          cn: `路德的故事从头到尾讲了这个。1517 年 10 月 31 日，他在威腾堡（Wittenberg）
大教堂门上张贴《九十五条》（95 Theses），主要是在批判赎罪券（indulgence）——
也就是教会收钱帮人"减轻罪的惩罚"。他说：这是骗人的，因为只有上帝能赦免罪。

他的神学核心是 sola fide（因信称义）：人得救靠的是对上帝的信仰，
不是靠做善事、不是靠交钱给教会。这直接挑战了教皇的权威。

1521 年沃尔姆斯帝国议会（Diet of Worms），神圣罗马帝国皇帝 Charles V 要他认错，
路德说了那句名言："我的良心被上帝的话语所束缚，我不能也不会撤回任何东西。
这是我的立场，我别无选择，愿上帝助我。"

考点关键句：印刷机（printing press）让路德的九十五条在几个月内传遍德意志，
这是宗教改革得以快速传播的关键技术条件。`,
          en: `Luther's story covers this from start to finish. On October 31, 1517,
he posted the 95 Theses on the door of the Wittenberg Castle Church, attacking
indulgences — the Church's practice of collecting money to "reduce punishment for sins."
He said: this is fraud, because only God can forgive sins.

His theological core: sola fide (faith alone). Salvation comes from faith in God,
not from good works or paying money to the Church. This directly challenged papal authority.

At the 1521 Diet of Worms, Holy Roman Emperor Charles V demanded he recant.
Luther replied with his famous words: "Here I stand, I can do no other."

Key exam sentence: The printing press spread Luther's 95 Theses across Germany
within months — this was the critical technological factor that made the
Reformation spread so rapidly.`,
        },
      },
    },

    {
      id: 'printing-press-reformation',
      termCn: '印刷机与宗教改革传播',
      termEn: 'Printing Press and the Spread of the Reformation',
      standardRef: ['AP Euro KC-2.1.I', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'luther-agonistic-prophet',
        nodeIds: ['luther-N3', 'luther-N5'],
        xiaoweiNote: {
          cn: `故事里有讲到印刷机（Gutenberg press，约 1450 年发明）如何让路德
的德文圣经（1534 年完成翻译）和他的小册子变成"爆款内容"——
普通德意志老百姓第一次可以自己读圣经，不必通过神职人员。

考点要把"印刷机"和"宗教改革"绑在一起记：
没有印刷机，路德就是一个地方神学家；有了印刷机，他成了整个欧洲的事。

AP 题经常问：哪项技术最有助于宗教改革的传播？答案：印刷机。
顺带要记的配套概念：路德把圣经翻译成德语（vernacular），
让识字的平民绕过拉丁语垄断直接读经文——这本身就是一场文化革命。`,
          en: `The story covers how the Gutenberg press (invented around 1450) turned
Luther's German Bible (translation completed 1534) and pamphlets into "viral content" —
for the first time, ordinary Germans could read Scripture themselves
without going through a clergyman.

Key concept: pair "printing press" with "Reformation" in your memory.
Without the press, Luther stays a local theologian; with it, he becomes a European event.

AP often asks: what technology most helped spread the Reformation?
Answer: the printing press.
Related concept: Luther translated the Bible into German (the vernacular),
letting literate laypeople bypass the Latin monopoly — itself a cultural revolution.`,
        },
      },
    },

    {
      id: 'erasmus-humanism',
      termCn: '伊拉斯谟 / 人文主义批判',
      termEn: 'Erasmus / Humanist Critique',
      standardRef: ['AP Euro KC-2.1.I', 'CA HSS 7.9'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'erasmus-lonely-mediator',
        nodeIds: ['erasmus-N2', 'erasmus-N6', 'erasmus-N9'],
        xiaoweiNote: {
          cn: `伊拉斯谟（Erasmus of Rotterdam）的故事讲透了他的两难处境：
他用《愚人颂》（In Praise of Folly，1511 年）讽刺了教皇、主教、僧侣的贪腐——
但当路德真的站出来要分裂教会时，伊拉斯谟却退缩了，不愿意彻底决裂。

他说："我不认识任何一个教皇因为吃得太好而堕落，但我认识许多人因为过分热忱而堕落。"
这句话很妙——他批评体制腐败，但也警惕过激的改革者。

AP 经典考法：把伊拉斯谟和路德对比——
- 两人都批评教会腐败
- 但伊拉斯谟要"从内部改革"，路德要"推倒重来"
- 伊拉斯谟被两边夹击：天主教说他"孵化了路德这颗蛋"，
  新教徒说他是懦夫

考点关键句：伊拉斯谟代表了人文主义批判（humanist critique）——
用理性和道德标准评判教会，而不是诉诸神学分裂。`,
          en: `The Erasmus story covers his dilemma completely: he mocked popes,
bishops, and corrupt monks in In Praise of Folly (1511) — but when Luther actually
stood up to split the Church, Erasmus pulled back, unwilling to break completely.

AP classic comparison: Erasmus vs Luther:
- Both criticized Church corruption
- But Erasmus wanted "reform from within," Luther wanted to start over
- Erasmus got attacked from both sides: Catholics said he "hatched the egg Luther
  came from"; Protestants called him a coward

Key exam sentence: Erasmus represents the humanist critique — judging the Church
by standards of reason and morality, not by pushing theological schism.`,
        },
      },
    },

    {
      id: 'women-reformation',
      termCn: '女性与宗教改革',
      termEn: 'Women and the Reformation',
      standardRef: ['AP Euro KC-2.1.III', 'CA HSS 7.9'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'agnes-receiving-end',
        nodeIds: ['agnes-N3', 'agnes-N7', 'agnes-N10'],
        xiaoweiNote: {
          cn: `那位修女的故事讲了宗教改革对女性的双重冲击：

一方面，新教（Protestant）强调"万民皆祭司"（priesthood of all believers）——
理论上每个基督徒都可以直接和上帝沟通，不需要神父中介。
这给了一些女性读经、发言的新空间。

另一方面，新教关闭了修道院，女性失去了原本作为修女的独立生活空间。
路德本人主张"婚姻是女性的天职"，新教婚姻观（Protestant model of marriage）
把女性的角色重新固定在"妻子-母亲"的框架里。

AP 题会问："宗教改革对女性是进步还是倒退？"
答案是：两者都有，取决于看哪个方面——标准的"复杂因果"题型。
写 DBQ 一定要两边都写，再给自己的判断。`,
          en: `The story of the nun covers the double impact of the Reformation on women:

On one hand, Protestantism emphasized the "priesthood of all believers" —
in theory every Christian could communicate with God directly, without a priest.
This opened new space for some women to read Scripture and speak in worship.

On the other hand, Protestantism closed convents, destroying the independent
space that convent life had provided for women.
Luther himself taught that "marriage is a woman's calling." The Protestant model
of marriage re-anchored women's roles in the wife-mother framework.

AP question: "Was the Reformation progress or regression for women?"
Answer: both, depending on which aspect you examine.
Classic "complex causation" format — write both sides, then state your own judgment.`,
        },
      },
    },

    {
      id: 'calvin-predestination',
      termCn: '约翰·加尔文 / 预定论与日内瓦',
      termEn: 'John Calvin / Predestination and Geneva',
      standardRef: ['AP Euro KC-2.1.II', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `John Calvin（约翰·加尔文，1509-1564），法国神学家，宗教改革第二代领袖。

他在瑞士日内瓦（Geneva）建立了自己的神学体系——加尔文主义（Calvinism）。

核心主张：
1. 预定论（predestination）：上帝在创世之前就已经决定了哪些人得救、哪些人下地狱。
   人无法通过善行或信仰"改变"这个结局——一切在宇宙诞生前就已经定好。
2. 日内瓦神权政治：加尔文把日内瓦变成一个由宗教长老（consistory）管理的"圣城"。
   跳舞、赌博、亵渎上帝的言论都是罪行，他的批评者 Servetus 因为神学异见
   被烧死在日内瓦的广场上（1553 年）。

预定论的文化后果：如果你不知道自己是不是"被选中的人"（the elect），
怎么办？一个解答是：努力工作，生活节俭，将财富积累看作上帝眷顾的外在信号。
这套逻辑后来被学者称为新教伦理（Protestant ethic）与早期资本主义精神的连接。

加尔文主义的传播路线：
- 法国：胡格诺派（Huguenots）
- 苏格兰：长老制（Presbyterianism，Knox 建立）
- 英格兰：清教徒（Puritans）——后来就是五月花号去美洲的那批人
- 荷兰：Dutch Reformed Church（荷兰共和国的国教基础）

AP 考法：路德和加尔文有什么不同？
路德：因信称义，圣经权威，反对赎罪券；没有建立严密的神权政体。
加尔文：在路德的基础上加了预定论，并且真正把日内瓦变成了神权统治的实验场。`,
        en: `John Calvin (1509-1564), French theologian, second-generation leader of
the Reformation.

He built his theological system in Geneva, Switzerland — Calvinism.

Core arguments:
1. Predestination: God decided before creation which people would be saved (the elect)
   and which would be damned. No amount of good works or faith can alter this outcome —
   everything was fixed before the universe existed.
2. Geneva theocracy: Calvin turned Geneva into a "holy city" governed by religious
   elders (the consistory). Dancing, gambling, and blasphemy were crimes. His critic
   Servetus was burned alive in Geneva's main square for theological dissent (1553).

Cultural consequence of predestination: if you don't know whether you're among
the elect, what do you do? One answer: work hard, live frugally, and treat accumulated
wealth as an outward sign of God's favor. This logic later became what scholars called
the Protestant ethic — a link to the spirit of early capitalism.

Spread of Calvinism:
- France: Huguenots
- Scotland: Presbyterianism (established by John Knox)
- England: Puritans — the group who sailed the Mayflower to America
- Netherlands: Dutch Reformed Church (foundation of the Dutch Republic's state religion)

AP exam comparison — Luther vs Calvin:
Luther: faith alone, scripture alone, anti-indulgences; did not build a tight theocracy.
Calvin: added predestination to Luther's foundations, and actually turned Geneva
into a working experiment in theocratic rule.`,
      },
      xiaoweiNote: {
        cn: `我的记忆口诀：Calvin = Calvinism = 预定论 + 日内瓦 + 清教徒祖宗。
"清教徒祖宗"这个锚最好用——美国五月花号就是从 Calvinism 来的，
很多美国人一边过感恩节一边不知道感谢的是 Calvin 的精神传人。

另一个常考点：预定论和路德的 sola fide 的关系——
sola fide 说"靠信仰得救"，predestination 说"你信不信也是上帝早就决定好的"。
两者的关系有点绕，但 AP 选择题通常不考这层，只考"谁提出了 predestination"。`,
        en: `My mnemonic: Calvin = Calvinism = predestination + Geneva + Puritan ancestors.
"Puritan ancestors" is the most useful anchor — the Mayflower came from Calvinism.
Many Americans celebrate Thanksgiving without knowing they're honoring Calvin's spiritual descendants.

Another common test point: the relationship between predestination and Luther's sola fide.
Sola fide says "you're saved by faith"; predestination says "whether you have faith
was decided by God before you were born." The relationship is a bit circular,
but AP multiple choice usually only asks "who proposed predestination" — not the loop.`,
      },
    },

    {
      id: 'council-of-trent-counter-reformation',
      termCn: '天特会议 / 反宗教改革',
      termEn: 'Council of Trent / Counter-Reformation',
      standardRef: ['AP Euro KC-2.1.III', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'agnes-receiving-end', nodeId: 'agnes-N11', context: '修道院院长提到天特会议的传言，担心修道院命运' },
        ],
      },
      standaloneText: {
        cn: `天特会议（Council of Trent，1545-1563），天主教回应新教挑战的最重要会议。

会议开了 18 年，断断续续，在意大利北部小城 Trento 召开。结论有两类：

一、坚守传统——明确拒绝新教的主张：
- 坚持圣经和教会传统（tradition）双重权威（拒绝路德的"sola scriptura"）
- 坚持七项圣礼（sacraments）全部有效（新教只承认 2 项）
- 坚持因行称义（works + faith）而不是单独 sola fide
- 坚持赎罪券原则，但规定不得滥用（不得直接卖钱）

二、内部改革——清除腐败：
- 禁止神职人员同时兼任多个职位（absenteeism/pluralism）
- 建立神学院（seminary）系统，培训神父——结束了"文盲神父"现象
- 加强宗教裁判所（Inquisition）查禁异端书籍
- 颁布禁书目录（Index of Forbidden Books）

耶稣会（Society of Jesus / Jesuits）：
天特会议的配套力量。1534 年由 Ignatius of Loyola 创立，是反宗教改革的核心武装。
他们是最优秀的天主教传教士——把天主教传到亚洲（中国、日本）、非洲、美洲。

AP 考法：天特会议的意义=既是"反改革"又是"真改革"，
反的是神学立场，改的是内部腐败。不能只说"保守"，要说"选择性改革"。`,
        en: `The Council of Trent (1545-1563) was the Catholic Church's most important
response to the Protestant challenge.

The council met on and off for 18 years in Trento, northern Italy. Its conclusions
fall into two categories:

One — Hold firm: explicitly reject Protestant claims:
- Affirm the dual authority of Scripture and Church tradition (rejecting Luther's sola scriptura)
- Affirm all seven sacraments (Protestants recognized only 2)
- Affirm salvation by both works and faith (not sola fide alone)
- Affirm the principle of indulgences, but ban their direct sale for money

Two — Reform from within: clean house:
- Ban clergy from holding multiple church offices simultaneously (absenteeism/pluralism)
- Establish a seminary system to train priests — ending the "illiterate priest" era
- Strengthen the Inquisition to suppress heretical books
- Issue the Index of Forbidden Books

The Society of Jesus (Jesuits):
The Council's enforcement arm. Founded in 1534 by Ignatius of Loyola, the Jesuits
were Catholicism's frontline in the Counter-Reformation. They were the Church's
most effective missionaries — carrying Catholicism to Asia (China, Japan),
Africa, and the Americas.

AP framing: The Council of Trent's significance = both "counter-reform" AND "genuine reform."
It countered Protestant theology while cleaning up internal corruption.
Don't just call it "conservative" — call it "selective reform."`,
      },
      xiaoweiNote: {
        cn: `考点记忆：Council of Trent = 天主教的"亡羊补牢"——
神学上一步不退，内部管理大整顿。

两个配套名词绑定：
- Jesuits（耶稣会）= 反宗教改革的"精英部队"，传教到中国的利玛窦（Matteo Ricci）就是耶稣会士
- Index of Forbidden Books（禁书目录）= 包括伽利略的天文学、马基雅维利的《君主论》
  ——这也是 AP 科学革命和启蒙运动单元的背景知识

AP 选择题常把 Council of Trent 和"Protestant Reformation 开始年份（1517）"
配合问"天主教在新教之前/之后做了什么"——注意时间顺序。`,
        en: `Exam memory: Council of Trent = Catholicism's "closing the stable door" —
no theological retreat, but major internal restructuring.

Two linked terms to memorize:
- Jesuits = Counter-Reformation's "elite corps"; Matteo Ricci, the Jesuit who
  brought Catholicism to China, is the most famous example
- Index of Forbidden Books = included Galileo's astronomy and Machiavelli's The Prince —
  background knowledge for AP's Scientific Revolution and Enlightenment units

AP multiple choice often pairs Council of Trent with "1517 start of Reformation"
and asks "what did Catholicism do before/after Protestantism" — watch the timeline.`,
      },
    },

    {
      id: 'henry-viii-english-reformation',
      termCn: '亨利八世 / 英国宗教改革',
      termEn: 'Henry VIII / English Reformation',
      standardRef: ['AP Euro KC-2.1.II', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `Henry VIII（亨利八世，1491-1547），英格兰国王，史上最有名的婚姻失败案例。

他和路德、加尔文的宗教改革不同：路德是因为神学分歧，亨利八世是因为政治和婚姻。

起因：1527 年，亨利八世想和第一任妻子 Catherine of Aragon 离婚，
理由是没生出儿子。但教皇（Clement VII）不批准离婚——
因为 Catherine 是神圣罗马帝国皇帝 Charles V 的姑母，
而 Charles V 的军队刚在 1527 年洗劫了罗马，教皇不敢得罪他。

亨利的解决方案：干脆自己当教会最高领袖。

1534 年《至尊法案》（Act of Supremacy）：
英格兰国王是英格兰教会（Church of England/Anglican Church）的最高首脑，
不受罗马教皇管辖。英国宗教改革就这样完成了——国王凌驾教皇。

英国国教（Anglicanism）的特点：
- 在仪式（liturgy）和教义（doctrine）上介于天主教和新教之间
- 保留了主教制度（bishops），但拒绝教皇权威
- 亨利八世的宗教动机是政治的，但英国国教后来发展出了自己的神学体系

对比路德：
- 路德：神学驱动的改革，关键词 sola fide, sola scriptura
- 亨利八世：政治驱动的改革，关键词 royal supremacy（君权至上）

AP 考法：亨利八世经常作为"宗教改革的多元动机"的例子——
宗教改革不只是神学问题，也是政治权力的重新分配。`,
        en: `Henry VIII (1491-1547), King of England, and history's most famous marriage failure.

His Reformation differed from Luther's and Calvin's: Luther was driven by theology,
Henry VIII by politics and marriage.

The trigger: in 1527, Henry wanted to divorce his first wife, Catherine of Aragon,
claiming she had failed to produce a male heir. Pope Clement VII refused to annul
the marriage — because Catherine was the aunt of Holy Roman Emperor Charles V,
and Charles's armies had just sacked Rome in 1527. The Pope couldn't afford to offend him.

Henry's solution: declare himself the Church's supreme head.

The 1534 Act of Supremacy:
The King of England is the Supreme Head of the Church of England (Anglican Church),
outside the jurisdiction of the Pope in Rome.
The English Reformation was complete — the king above the pope.

Characteristics of Anglicanism:
- Sits between Catholicism and Protestantism in ritual and doctrine
- Keeps the bishop system (episcopacy), but rejects papal authority
- Henry's religious motivation was political, but Anglicanism later developed its own theology

Contrast with Luther:
- Luther: theologically driven reform; key terms: sola fide, sola scriptura
- Henry VIII: politically driven reform; key term: royal supremacy

AP framing: Henry VIII is often used as an example of the "multiple motivations
for Reformation" — the Reformation wasn't only a theological event, but a
redistribution of political power.`,
      },
      xiaoweiNote: {
        cn: `亨利八世考试必记两件事：
1. 《至尊法案》（Act of Supremacy，1534）——英国国教（Anglican Church）成立的法律依据
2. 动机是"婚姻+政治"，不是神学信仰——这是和路德最大的区别

记忆连接：他一共结婚 6 次，有 2 个妻子被砍头。这个"6 次婚姻"太出名了，
AP 老师经常用来引出"英国宗教改革的非神学动机"这个考点。
从历史轨迹看：英国国教后来孕育出清教徒（Puritans），
清教徒逃往美洲建立了普利茅斯殖民地——所以亨利八世的婚姻危机间接推动了美国的诞生。`,
        en: `Two things you must memorize about Henry VIII for the exam:
1. Act of Supremacy (1534) — the legal foundation of the Church of England (Anglicanism)
2. His motivation was "marriage + politics," not theological belief — this is his
   biggest difference from Luther

Memory link: he married 6 times total, and 2 wives were executed.
This "6 marriages" fact is so famous that AP teachers regularly use it to introduce
"the non-theological motivations for the English Reformation."

Historical trajectory: Anglicanism later produced the Puritans, who fled to America
and founded Plymouth Colony — so Henry VIII's marriage crisis indirectly contributed
to the founding of the United States.`,
      },
    },

    {
      id: 'religious-wars-peace-westphalia',
      termCn: '宗教战争与威斯特伐利亚和约',
      termEn: 'Religious Wars and the Peace of Westphalia',
      standardRef: ['AP Euro KC-2.1.III', 'AP World KC-4.1', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'luther-agonistic-prophet', nodeId: 'luther-N12', context: '路德故事尾声提到宗教分裂埋下战争种子' },
        ],
      },
      standaloneText: {
        cn: `宗教改革最昂贵的代价：一百三十年的宗教战争。

关键时间线：
1. 1555 年奥格斯堡和约（Peace of Augsburg）：
   神圣罗马帝国内部的天主教和路德宗诸侯达成停火。
   原则是 cuius regio eius religio（谁的地盘谁的宗教）——
   意思是领主信什么，领土上的人就信什么，老百姓没有个人宗教选择权。
   注意：这个和约只承认天主教和路德派，不承认加尔文派。

2. 1618-1648 年三十年战争（Thirty Years' War）：
   欧洲历史上破坏性最大的战争之一。从德意志内部的宗教冲突开始，
   逐渐演变成法国、瑞典、西班牙、神圣罗马帝国全面卷入的欧洲大战。
   估计德意志地区人口因战争减少了 1/4 到 1/3。

3. 1648 年威斯特伐利亚和约（Peace of Westphalia）：
   结束三十年战争。这是 AP 欧洲史和世界史的超级重要考点，原因是：
   - 正式承认天主教、路德派、加尔文派三者的合法地位
   - 奠定了现代国家主权（state sovereignty）体系：
     各国政府有权在自己领土内处理内政，其他国家不得干涉
   - 被很多学者视为"现代国际体系的起点"

AP 考法：威斯特伐利亚和约最常以两个角度考——
(1) 宗教改革的政治后果：新教被正式承认，欧洲宗教地图固定下来；
(2) 国际关系史：主权国家体系（Westphalian system）= 今天联合国体系的祖先。`,
        en: `The most expensive price of the Reformation: 130 years of religious warfare.

Key timeline:
1. Peace of Augsburg (1555):
   A ceasefire between Catholic and Lutheran princes inside the Holy Roman Empire.
   Principle: cuius regio eius religio (whose realm, his religion) —
   meaning whatever the ruler believes, everyone on their land follows.
   Ordinary people had no individual right to choose their religion.
   Note: this treaty only recognized Catholicism and Lutheranism, not Calvinism.

2. Thirty Years' War (1618-1648):
   One of the most destructive wars in European history. It began as a religious
   conflict within Germany, then escalated into a Europe-wide war involving France,
   Sweden, Spain, and the Holy Roman Empire. Germany's population is estimated
   to have declined by one-quarter to one-third.

3. Peace of Westphalia (1648):
   Ended the Thirty Years' War. This is a major AP Euro and World History exam point:
   - Formally recognized Catholicism, Lutheranism, and Calvinism as legitimate
   - Established the modern system of state sovereignty:
     each government has supreme authority within its borders; other states may not interfere
   - Many historians consider this "the starting point of the modern international system"

AP exam framing: The Peace of Westphalia is most often tested from two angles:
(1) Political consequences of the Reformation: Protestantism officially recognized,
    Europe's religious map fixed;
(2) International relations history: the Westphalian system = the ancestor of
    today's United Nations-based international order.`,
      },
      xiaoweiNote: {
        cn: `四个词组必须配对记：
- 1555 / 奥格斯堡和约 / cuius regio eius religio（领主的宗教 = 领土宗教）
- 1648 / 威斯特伐利亚和约 / state sovereignty（国家主权体系）

老师说 AP 世界史大题里"现代国家主权体系从哪里来"——
答案就是威斯特伐利亚，1648 年，三十年战争结束。

一个记忆钩：威斯特伐利亚（Westphalia）在德语里有"西法伦"的意思，
但更好记的是：W=1648，这个年份结束了欧洲最长的宗教战争，
也创造了"国家"这个现代概念。`,
        en: `Four phrase pairs to memorize together:
- 1555 / Peace of Augsburg / cuius regio eius religio (ruler's religion = territory's religion)
- 1648 / Peace of Westphalia / state sovereignty (the modern sovereignty system)

My teacher says AP World History long-answer questions on "where did modern state
sovereignty come from" — the answer is always Westphalia, 1648, end of the Thirty Years' War.

Memory hook: Westphalia ends the longest religious war in European history
and invents "the state" as we know it today. W = 1648.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `路德 1517 年贴出九十五条，喊出"宗教自由"的先声：
个人凭信仰和圣经直接面对上帝，不需要教皇做中间人。
但 30 年后，加尔文在日内瓦建起了另一种神权统治——
跳舞违法、神学异见者被烧死、老百姓的精神生活被宗教长老监控。

两个都叫"新教"。那么，新教带来的"宗教自由"，
到底是对谁的自由？对什么的自由？`,
      en: `Luther posted the 95 Theses in 1517, sounding the opening note of
"religious freedom": each person could face God through faith and Scripture,
without the Pope as middleman. But 30 years later, Calvin built a different
kind of theocracy in Geneva — dancing was illegal, theological dissenters
were burned alive, and religious elders monitored the spiritual life of all citizens.

Both were called "Protestant." So: the "religious freedom" that Protestantism
introduced — freedom for whom? Freedom from what?`,
      hintCn: `提示：可以从三个层面分析——
(1) 神学自由（theological freedom）：平信徒可以自己读圣经，不必通过神父——这是真自由。
(2) 政治自由（political freedom）：各地领主决定信什么，老百姓跟着信——1555年奥格斯堡原则，这不是自由。
(3) 个人良知自由（freedom of conscience）：路德在沃尔姆斯说"我的良心只属于上帝"，
   但加尔文在日内瓦把"良心"交给了宗教法庭。

进阶思考：如果一个人从天主教的"教皇专制"逃到加尔文的"宗教法庭专制"，
他到底自由了吗？这个问题对所有的"解放运动"都适用。`,
      hintEn: `Hint: analyze from three levels —
(1) Theological freedom: laypeople could read Scripture themselves without a priest — genuine freedom.
(2) Political freedom: local rulers decided the religion; ordinary people had to follow —
    this is the 1555 Augsburg principle. Not freedom.
(3) Freedom of conscience: Luther at Worms said "my conscience belongs to God alone" —
    but Calvin in Geneva handed "conscience" over to the consistory court.

Going deeper: if a person fled from "papal tyranny" into "consistory tyranny" under Calvin,
were they actually freer? This question applies to every liberation movement in history.`,
      conceptsActivated: ['luther-95-theses', 'calvin-predestination'],
    },
    {
      id: 'q2',
      cn: `伊拉斯谟用讽刺写作批评了腐败的教会，被后来的人称为"孵化了路德这颗蛋的鸡"。
但当路德真的站出来要分裂教会时，伊拉斯谟却退缩了，选择留在天主教内部。

有人说他是懦夫，没有勇气为自己的批评承担后果；
有人说他更聪明，知道激进分裂只会带来战争而不是改革。

你怎么看？留在体制内慢慢改变，和站出来彻底打破——哪个更有力量？`,
      en: `Erasmus used satirical writing to criticize a corrupt Church, and later generations
called him "the hen that laid the egg Luther hatched." But when Luther actually
stepped forward to split the Church, Erasmus pulled back — he chose to stay
inside Catholicism.

Some say he was a coward, unwilling to bear the consequences of his own critique.
Others say he was wiser, knowing that radical schism would produce war rather than reform.

What do you think? Which has more power: changing a system from the inside, slowly —
or stepping outside and breaking it altogether?`,
      hintCn: `提示：这道题没有标准答案，但 AP DBQ 会要求你用历史证据支持立场。

支持"从内部改变更有力"的证据：
- 天特会议（Counter-Reformation）确实清除了很多腐败
- 耶稣会的传教成就——对外影响力远超分裂出去的新教小派系

支持"打破重来更有力"的证据：
- 如果没有路德的决裂，天特会议根本不会召开
- 伊拉斯谟一辈子批评，但他没有改变过一条具体的教义

进阶思考：今天还有没有类似的争论？
（比如：推动变革，是该从体制内参与，还是在体制外施压？）`,
      hintEn: `Hint: no standard answer, but AP DBQ requires you to support a position
with historical evidence.

Evidence for "changing from inside has more power":
- The Counter-Reformation (Council of Trent) did eliminate significant corruption
- Jesuit missionary achievements — far greater global reach than most breakaway Protestant sects

Evidence for "breaking away has more power":
- Without Luther's rupture, the Council of Trent would never have convened
- Erasmus spent a lifetime criticizing but never changed a single specific doctrine

Going deeper: does a similar debate exist today?
(For example: to drive change, is it better to work inside an institution or apply pressure from outside?)`,
      conceptsActivated: ['erasmus-humanism', 'council-of-trent-counter-reformation'],
    },
    {
      id: 'q3',
      cn: `1517 年宗教改革让信仰变得"个人化"——每个人直接对上帝负责，
不需要教会当中间人。听起来是自由的开始。

但是 1618 到 1648 年，欧洲打了三十年宗教战争；估计德意志地区有 1/3 的人口死亡。
战争以 1648 年威斯特伐利亚和约结束，确立的原则是：
国家主权——宗教是内政，别国不能干涉。

如果你是 1648 年的一个普通德意志农民，刚刚从三十年战争里活下来，
你会觉得宗教改革是一件好事吗？你会感谢路德吗？`,
      en: `The 1517 Reformation made faith "personal" — each individual accountable
directly to God, without the Church as middleman. It sounds like the beginning of freedom.

But from 1618 to 1648, Europe fought the Thirty Years' War. An estimated one-third
of Germany's population died. The war ended with the 1648 Peace of Westphalia,
establishing the principle of state sovereignty: religion is a domestic matter,
and other nations cannot intervene.

If you were an ordinary German peasant in 1648, having just survived the Thirty Years' War,
would you think the Reformation was a good thing? Would you thank Luther?`,
      hintCn: `提示：这道题逼着你思考"意图"和"后果"的分离——
路德的意图是神学改革，后果之一是一百多年的宗教战争。

几个思考角度：
(1) 路德该为战争负责吗？他只是提出神学问题，是诸侯利用宗教打政治仗。
(2) 如果没有宗教改革，天主教的腐败会继续多久？那个代价算不算？
(3) 威斯特伐利亚和约创造了"国家主权"——这个贡献算不算抵消了战争的代价？

AP 写作技巧：这类题最容易犯的错误是只写"好处"或只写"坏处"。
DBQ 要求你写"复杂性"：改革带来了神学解放 + 个人信仰自由，
但过渡期的代价是大规模战争和人口损失。两者都是真实的历史后果。`,
      hintEn: `Hint: this question forces you to think about the separation between
"intent" and "consequence" — Luther's intent was theological reform;
one consequence was 130 years of religious warfare.

Angles to consider:
(1) Is Luther responsible for the wars? He only raised theological questions —
    it was princes who used religion to fight political battles.
(2) If there had been no Reformation, how much longer would Catholic corruption
    have continued? Does that cost count too?
(3) Westphalia created "state sovereignty" — does that contribution offset
    the cost of the wars?

AP writing tip: the most common mistake on this type of question is writing only
"benefits" or only "costs." DBQ requires complexity: the Reformation brought
theological liberation and personal religious freedom, but the transition cost
was large-scale war and massive population loss. Both are real historical consequences.`,
      conceptsActivated: ['luther-95-theses', 'religious-wars-peace-westphalia', 'calvin-predestination'],
    },
  ],
};

export default notebook;
