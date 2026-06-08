// ─── 同伴笔记本架构 v1 · Protestant Reformation 1517 ────────────────────────
// schemaVersion: 1 · notebookVersion: reformation-1517-v2

export var notebook = {
  topicId: 'reformation-1517',
  topicNameCn: '宗教改革',
  topicNameEn: 'The Protestant Reformation',
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
    cn: `今天老师说我们要学 1517 年的宗教改革（Protestant Reformation）。

她给了我一张名单，上面有这些人：
马丁·路德（Martin Luther）、约翰·加尔文（John Calvin）、
伊拉斯谟（Erasmus）、亨利八世（Henry VIII）

还有几个要搞懂的词：
因信称义（sola fide）、预定论（predestination）、赎罪券（indulgence）、天特会议（Council of Trent）

我先把这些抄下来。等一会儿读三条故事——路德那条、伊拉斯谟那条、还有修道院里一个修女那条——读完再回来，试着用自己的话解释每个词，看看记住了多少。

老师说考试会有一道 DBQ（就是用历史材料写论文的题）：
"宗教改革让人们得到了'宗教自由'吗？"
我先把这个问题写在笔记本第一行，带着它去读故事。`,
    en: `Today my teacher said we're studying the Protestant Reformation (1517).

She gave us a list of names:
Martin Luther, John Calvin, Erasmus, Henry VIII

Plus some words we need to understand:
sola fide (faith alone), predestination, indulgence, Council of Trent.

Let me write these down. After I read the three stories — Luther's, Erasmus's, and a nun's inside a monastery — I'll come back and try to explain each word in my own words.

My teacher says the test will have a DBQ (that's the essay where you use historical sources):
"Did the Reformation give people 'religious freedom'?"
I wrote that question on line one of my notebook. I'll carry it with me through all three stories.`,
    keyTerms: [
      { cn: '因信称义', en: 'sola fide (faith alone)' },
      { cn: '圣经权威', en: 'sola scriptura (scripture alone)' },
      { cn: '赎罪券', en: 'indulgence' },
      { cn: '预定论', en: 'predestination' },
      { cn: '反宗教改革', en: 'Counter-Reformation' },
      { cn: '宗教宽容/奥格斯堡和约', en: 'Peace of Augsburg / cuius regio eius religio' },
    ],
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
      {
        nameCn: '塞尔维特',
        nameEn: 'Servetus',
        ipa: '/sərˈviːtəs/',
        roleCn: '因神学异见被加尔文在日内瓦处以火刑（1553 年）',
        roleEn: 'Burned alive in Geneva for theological dissent by Calvin\'s court (1553)',
        mustKnow: true,
        audioKey: 'servetus',
      },
      {
        nameCn: '依纳爵·罗耀拉',
        nameEn: 'Ignatius of Loyola',
        ipa: '/ɪɡˈneɪʃəs əv lɔɪˈoʊlə/',
        roleCn: '耶稣会创始人，反宗教改革核心人物',
        roleEn: 'Founder of the Jesuits, central figure of the Counter-Reformation',
        mustKnow: true,
        audioKey: 'ignatius-loyola',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'luther-95-theses',
      termCn: '路德 / 九十五条与因信称义',
      termEn: 'Luther / 95 Theses and Sola Fide',
      defCn: '马丁·路德是 16 世纪德意志的神父，他写了九十五条反对赎罪券的意见，贴到教堂门上，引发了整个新教改革运动。他最核心的主张叫"因信称义"——人靠信仰上帝得救，不是靠花钱或做好事。',
      defEn: 'Martin Luther was a 16th-century German priest who wrote 95 criticisms of indulgences and posted them on a church door, sparking the Protestant Reformation. His core idea, "sola fide" (faith alone), said people are saved by believing in God — not by paying money or doing good deeds.',
      standardRef: ['AP Euro KC-2.1.I', 'CA HSS 7.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        nodeIds: ['luther-N1', 'luther-N4', 'luther-N7'],
        xiaoweiNote: {
          cn: `路德那条故事线从头到尾都在讲这个。

**1517 年 10 月 31 日**，路德在威腾堡（Wittenberg）大教堂门上贴出《九十五条》（95 Theses）。他主要是在批赎罪券（indulgence）——就是教会收钱说能帮人"减轻罪的惩罚"。他的意见是：这是骗人的，因为只有上帝能赦免罪，不是教会。

他最核心的神学主张叫 sola fide（因信称义）。翻成大白话就是：人得救靠的是对上帝的信仰，不是靠做善事、也不是靠给教会交钱。这一条直接踩了教皇的权威。

1521 年，神圣罗马帝国皇帝 Charles V 在沃尔姆斯（Worms）帝国议会上要他收回说过的话。路德的回答变成了历史名言：

"我的良心被上帝的话语所束缚。我不能也不会撤回任何东西。这是我的立场，我别无选择，愿上帝助我。"

**考试必背：** 印刷机（printing press）把路德的九十五条在几个月内传遍整个德意志——没有印刷机，路德就只是一个地方神学家，宗教改革不会发生。`,
          en: `Luther's story covers this from start to finish.

On **October 31, 1517**, Luther posted the 95 Theses on the door of the Wittenberg Castle Church. He was mainly attacking indulgences — the Church's practice of collecting money to "reduce punishment for sins." His argument: this is fraud, because only God can forgive sins — not the Church.

His central theological idea is sola fide (faith alone). In plain terms: you are saved by believing in God, not by doing good deeds or paying money to the Church. This went straight at the Pope's authority.

In 1521, Holy Roman Emperor Charles V summoned Luther to the Diet of Worms and demanded he take back everything he'd said. Luther's answer became one of history's most famous lines:

"Here I stand, I can do no other."

**Must-know for the exam:** The printing press spread Luther's 95 Theses across Germany within months. Without the printing press, Luther stays a local theologian — the Reformation doesn't happen.`,
        },
      },
    },

    {
      id: 'printing-press-reformation',
      termCn: '印刷机与宗教改革传播',
      termEn: 'Printing Press and the Spread of the Reformation',
      defCn: '古腾堡印刷机（约 1450 年发明）让书和小册子可以大量复制。有了它，路德的九十五条能在几个月内传遍整个欧洲，普通老百姓也第一次能读到用自己语言写的圣经。',
      defEn: 'The Gutenberg printing press (invented around 1450) allowed books and pamphlets to be copied in large numbers. With it, Luther\'s 95 Theses spread across Europe in months, and ordinary people could — for the first time — read a Bible written in their own language.',
      standardRef: ['AP Euro KC-2.1.I', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        nodeIds: ['luther-N3', 'luther-N5'],
        xiaoweiNote: {
          cn: `路德那条故事线里讲到了这件事：古腾堡印刷机（Gutenberg press，约 1450 年发明）怎么把路德的德文圣经（1534 年翻译完成）和各种小册子变成了"全欧洲病毒式传播"的内容。普通德意志老百姓**第一次**可以自己读圣经，不必依赖神父念给他们听。

记忆法：把"印刷机"和"宗教改革"绑在一起。没有印刷机，路德就是地方神学家；有了印刷机，他成了整个欧洲的事。

AP 选择题常问：哪项技术最有助于宗教改革的传播？答案：印刷机。

一个配套知识点：路德把圣经翻成德语，叫"白话文翻译"（vernacular）。这让识字的普通人可以绕过拉丁文直接读圣经——本身就是一场文化革命。`,
          en: `Luther's story shows how the Gutenberg press (invented around 1450) turned Luther's German Bible (translation completed 1534) and his pamphlets into viral content across Europe. For the **first time**, ordinary Germans could read Scripture themselves — without a priest reading it aloud for them.

Memory rule: always pair "printing press" with "Reformation." Without the press, Luther stays a local theologian; with it, he becomes a European event.

AP often asks: which technology most helped the Reformation spread? Answer: the printing press.

One related point: Luther translated the Bible into German (this is called a vernacular translation). It let literate laypeople read Scripture without knowing Latin — which was itself a cultural revolution.`,
        },
      },
    },

    {
      id: 'erasmus-humanism',
      termCn: '伊拉斯谟 / 人文主义批判',
      termEn: 'Erasmus / Humanist Critique',
      defCn: '伊拉斯谟（Erasmus of Rotterdam）是 16 世纪的荷兰学者。他写讽刺文章批评教会腐败，但选择留在天主教内部推动改革，而不是像路德那样彻底决裂。这种"从体制内改变"的立场叫人文主义批判（humanist critique）。',
      defEn: 'Erasmus of Rotterdam was a 16th-century Dutch scholar. He wrote satirical works criticizing Church corruption but chose to stay inside the Catholic Church and push for change from within — rather than break away like Luther. This "change from inside" position is called the humanist critique.',
      standardRef: ['AP Euro KC-2.1.I', 'CA HSS 7.9'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['erasmus-N2', 'erasmus-N6', 'erasmus-N9'],
        xiaoweiNote: {
          cn: `伊拉斯谟那条故事线把他的两难讲得很透：他用《愚人颂》（In Praise of Folly，1511 年）讽刺了教皇、主教、僧侣的腐败——但当路德真的站出来要分裂教会时，伊拉斯谟退缩了，不愿彻底决裂。

他说过一句很妙的话：
"我不认识任何一个教皇因为吃得太好而堕落，但我认识许多人因为过分热忱而堕落。"
意思是：他批评腐败，但也警惕走极端的改革者。

**AP 经典考法——把伊拉斯谟和路德对比：**
① 两人都批教会腐败。
② 但伊拉斯谟要"从内部改革"，路德要"推倒重来"。
③ 结果伊拉斯谟被两边夹击：天主教说他"孵化了路德这颗蛋"；新教徒说他是懦夫。

**考点关键句：** 伊拉斯谟代表人文主义批判（humanist critique）——用理性和道德标准评判教会，而不是靠神学分裂来解决问题。`,
          en: `Erasmus's story covers his dilemma completely. He mocked popes, bishops, and corrupt monks in In Praise of Folly (1511). But when Luther actually stood up to split the Church, Erasmus pulled back — he wasn't willing to go that far.

He said something memorable:
"I don't know any pope who became corrupt from eating too well — but I know many people who became corrupt from excessive zeal."
In other words: he criticized corruption, but he also distrusted radical reformers.

**AP classic comparison — Erasmus vs Luther:**
① Both criticized Church corruption.
② But Erasmus wanted "reform from within," Luther wanted to start over completely.
③ Erasmus got hit from both sides: Catholics said he "hatched the egg Luther came from"; Protestants called him a coward.

**Key exam sentence:** Erasmus represents the humanist critique — judging the Church by standards of reason and morality, not by pushing for a theological split.`,
        },
      },
    },

    {
      id: 'women-reformation',
      termCn: '女性与宗教改革',
      termEn: 'Women and the Reformation',
      defCn: '宗教改革对女性的影响是双面的。一方面，新教强调每个人都能直接和上帝沟通，给了部分女性更多读经和发声的空间。另一方面，新教关闭了修道院，让原本以修女身份独立生活的女性失去了这条出路，同时路德把"妻子和母亲"定为女性的主要角色。',
      defEn: 'The Reformation\'s impact on women cut both ways. On one hand, Protestantism taught that every person could talk directly to God — giving some women more space to read Scripture and speak in worship. On the other hand, Protestantism shut down convents (where women could live independently as nuns) and Luther taught that being a wife and mother was the central role for women.',
      standardRef: ['AP Euro KC-2.1.III', 'CA HSS 7.9'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['agnes-N3', 'agnes-N7', 'agnes-N10'],
        xiaoweiNote: {
          cn: `修女那条故事线讲了宗教改革对女性的双重冲击。

**好的那一面：** 新教强调"万民皆祭司"（priesthood of all believers）——理论上每个基督徒都可以直接和上帝沟通，不需要神父中间人。这给了一些女性读经、发声的新空间。

**坏的那一面：** 新教关闭了修道院，女性失去了原本作为修女的独立生活空间。路德本人主张"婚姻是女性的天职"，把女性角色重新固定在"妻子-母亲"的框架里。

**AP 题常问：** "宗教改革对女性是进步还是倒退？"
答案：两者都有——取决于你看哪个方面。这是标准的"复杂因果"题型。
写 DBQ 一定要两边都写，再给出自己的判断。`,
          en: `The nun's story covers the double impact of the Reformation on women.

**The upside:** Protestantism emphasized the "priesthood of all believers" — in theory every Christian could talk directly to God without a priest in between. This opened new space for some women to read Scripture and speak in worship.

**The downside:** Protestantism shut down convents, taking away the independent space that convent life had offered women. Luther himself taught that "marriage is a woman's calling," re-anchoring women's roles inside the wife-and-mother framework.

**AP often asks:** "Was the Reformation progress or regression for women?"
Answer: both — depending on which aspect you look at. This is a classic "complex causation" question.
On a DBQ, always argue both sides, then commit to your own judgment.`,
        },
      },
    },

    {
      id: 'calvin-predestination',
      termCn: '约翰·加尔文 / 预定论与日内瓦',
      termEn: 'John Calvin / Predestination and Geneva',
      defCn: '约翰·加尔文是宗教改革的第二代领袖。他提出了"预定论"——上帝在创世之前就已经决定好谁得救、谁下地狱，人无法改变这个结局。他把瑞士城市日内瓦变成了一个由宗教规则管理一切的"圣城"，加尔文主义后来传到法国、苏格兰、英格兰和美洲。',
      defEn: 'John Calvin was the second-generation leader of the Reformation. He introduced "predestination" — the idea that God decided before creation who would be saved and who would be damned, and nothing humans do can change that outcome. He turned the Swiss city of Geneva into a "holy city" ruled by religious laws, and Calvinism later spread to France, Scotland, England, and the Americas.',
      standardRef: ['AP Euro KC-2.1.II', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `约翰·加尔文（John Calvin，1509-1564），法国神学家，宗教改革第二代领袖。他在瑞士日内瓦（Geneva）建立了自己的神学体系——加尔文主义（Calvinism）。

**核心主张 ①：预定论（predestination）**
上帝在创世之前就已经决定了哪些人得救（称为"选民"，the elect）、哪些人下地狱。人无法通过善行或信仰"改变"这个结局——一切在宇宙诞生前就定好了。

**核心主张 ②：日内瓦神权政治**
加尔文把日内瓦变成一个由宗教长老（consistory，就像宗教法庭）管理的"圣城"。跳舞、赌博、说亵渎上帝的话都算罪行。他的批评者塞尔维特（Servetus）因为在神学上不同意他，1553 年被烧死在日内瓦广场上。

**预定论带来了一个有趣的文化后果：**
如果你不知道自己是不是"选民"，你会怎么办？有一种回答是：努力工作、生活节俭，把成功和积累财富看作上帝眷顾你的外在信号。后来有学者把这套逻辑和早期资本主义的兴起联系在一起，叫"新教伦理"（Protestant ethic）。

**加尔文主义的传播路线：**
① 法国 → 胡格诺派（Huguenots）
② 苏格兰 → 长老制（Presbyterianism，由 Knox 创立）
③ 英格兰 → 清教徒（Puritans）——就是后来坐五月花号去美洲的那批人
④ 荷兰 → 荷兰改革宗教会（Dutch Reformed Church）

**AP 考法——路德 vs 加尔文：**
路德：因信称义、圣经权威、反赎罪券；没有建立严密的神权政体。
加尔文：在路德基础上加了预定论，还把日内瓦变成了真正的神权统治实验场。`,
        en: `John Calvin (1509-1564), French theologian, second-generation leader of the Reformation. He built his theological system in Geneva, Switzerland — this system is called Calvinism.

**Core idea ①: Predestination**
God decided before creation who would be saved (called "the elect") and who would be damned. No amount of good works or faith can change this outcome — everything was fixed before the universe existed.

**Core idea ②: Geneva theocracy**
Calvin turned Geneva into a "holy city" run by religious elders called the consistory (a kind of religious court). Dancing, gambling, and blasphemy were crimes. His critic Servetus was burned alive in Geneva's main square in 1553 for disagreeing with Calvin on theology.

**Predestination created an interesting cultural side effect:**
If you don't know whether you're among the elect, what do you do? One answer: work hard, live simply, and treat financial success as an outward sign of God's favor. Some historians later connected this logic to the rise of early capitalism — they called it the "Protestant ethic."

**Where Calvinism spread:**
① France → Huguenots
② Scotland → Presbyterianism (founded by John Knox)
③ England → Puritans — the group who sailed the Mayflower to America
④ Netherlands → Dutch Reformed Church

**AP comparison — Luther vs Calvin:**
Luther: faith alone, scripture alone, anti-indulgences; did not build a tight theocracy.
Calvin: added predestination to Luther's foundation, and actually turned Geneva into a working experiment in theocratic rule.`,
      },
      xiaoweiNote: {
        cn: `记忆口诀：Calvin = 加尔文主义 = 预定论 + 日内瓦 + 清教徒的老祖宗。

**"清教徒老祖宗"这个锚最好用：** 美国五月花号（Mayflower）就是加尔文主义来的——很多美国人一边过感恩节，一边不知道背后是谁的精神传人。

另一个常考对比：sola fide（因信称义）说"靠信仰得救"；predestination（预定论）说"你信不信、信多少，其实上帝早就决定好了"。这层关系有点绕，但 AP 选择题通常只问"谁提出了 predestination"，不考这个绕圈。`,
        en: `Memory shortcut: Calvin = Calvinism = predestination + Geneva + Puritan ancestors.

**"Puritan ancestors" is the most useful anchor:** The Mayflower traced back to Calvinism — many Americans celebrate Thanksgiving without knowing whose spiritual tradition they're honoring.

Another common exam pairing: sola fide says "you're saved by faith"; predestination says "whether you have faith at all was decided by God before you were born." That loop is tricky, but AP multiple choice usually only asks "who came up with predestination" — not the circular logic itself.`,
      },
    },

    {
      id: 'council-of-trent-counter-reformation',
      termCn: '天特会议 / 反宗教改革',
      termEn: 'Council of Trent / Counter-Reformation',
      defCn: '天特会议（Council of Trent，1545-1563）是天主教回应新教挑战的大会议，在意大利北部小城 Trento 开了 18 年。它做了两件事：一是坚持天主教的神学立场，拒绝新教的主张；二是整顿内部腐败，建立神学院训练神父。这段历史叫"反宗教改革"（Counter-Reformation）。',
      defEn: 'The Council of Trent (1545-1563) was the Catholic Church\'s major conference responding to the Protestant challenge. It met on and off for 18 years in the northern Italian city of Trento. It did two things: defended Catholic theology against Protestant claims, and cleaned up internal corruption by building seminaries to train priests. This period is called the Counter-Reformation.',
      standardRef: ['AP Euro KC-2.1.III', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'agnes-N11', context: '修女那条故事线里，修道院院长提到天特会议的传言，担心修道院的命运' },
        ],
      },
      standaloneText: {
        cn: `天特会议（Council of Trent，1545-1563），天主教回应新教挑战的最重要会议。断断续续开了 18 年，在意大利北部小城 Trento 召开。结论分两类：

**① 坚守立场——拒绝新教的主张：**
- 坚持圣经和教会传统双重权威（拒绝路德的"sola scriptura，圣经唯一"）
- 坚持七项圣礼全部有效（新教只承认 2 项）
- 坚持因行称义（works + faith，行为加信仰），而不是单独 sola fide（因信称义）
- 坚持赎罪券原则，但规定不得直接卖钱

**② 内部整顿——清除腐败：**
- 禁止神职人员同时担任多个职位
- 建立神学院（seminary）系统，专门培训神父——结束了"文盲神父"现象
- 加强宗教裁判所（Inquisition）查禁异端书籍
- 颁布禁书目录（Index of Forbidden Books）——包括后来伽利略的天文学著作和马基雅维利的《君主论》

**耶稣会（Society of Jesus / Jesuits）：**
1534 年由依纳爵·罗耀拉（Ignatius of Loyola）创立，是反宗教改革的行动力量。他们是天主教最优秀的传教士——把天主教传到亚洲（中国、日本）、非洲和美洲。其中最有名的是在中国的利玛窦（Matteo Ricci）。

**AP 考法：**天特会议的意义=既是"反改革"又是"真改革"——反的是神学立场，改的是内部腐败。写题时不能只说"保守"，要说"选择性改革"。`,
        en: `The Council of Trent (1545-1563) was the Catholic Church's most important response to the Protestant challenge. It met on and off for 18 years in Trento, northern Italy. Its conclusions fall into two categories:

**① Hold firm — reject Protestant claims:**
- Affirm the dual authority of Scripture and Church tradition (rejecting Luther's sola scriptura — Scripture alone)
- Affirm all seven sacraments (Protestants recognized only 2)
- Affirm salvation by both works and faith — not sola fide (faith alone) by itself
- Affirm the principle of indulgences, but ban the direct sale of them for money

**② Clean house — eliminate corruption:**
- Ban clergy from holding multiple church positions at the same time
- Build a seminary system to train priests — ending the era of the "illiterate priest"
- Strengthen the Inquisition to suppress heretical books
- Issue the Index of Forbidden Books — which later included Galileo's astronomy and Machiavelli's The Prince

**The Society of Jesus (Jesuits):**
Founded in 1534 by Ignatius of Loyola, the Jesuits were the Counter-Reformation's action arm. They were the Church's most effective missionaries — bringing Catholicism to Asia (China, Japan), Africa, and the Americas. The most famous was Matteo Ricci, who worked in China.

**AP framing:** The Council of Trent's significance = both "counter-reform" AND "genuine reform." It countered Protestant theology while cleaning up internal corruption. Don't just call it "conservative" — call it "selective reform."`,
      },
      xiaoweiNote: {
        cn: `考试记忆：Council of Trent = 天主教的"亡羊补牢"——神学上一步不退，内部管理大整顿。

**两个配套名词要绑定一起记：**
① Jesuits（耶稣会）= 反宗教改革的"精英部队"；利玛窦（Matteo Ricci）就是耶稣会士，他把天主教带进了中国。
② Index of Forbidden Books（禁书目录）= 这也是 AP 科学革命单元的背景知识——伽利略的书就在禁书名单里。

AP 选择题常把天特会议和"新教改革开始年份（1517）"配合来问"天主教在新教之前/之后做了什么"——注意时间顺序，别搞反了。`,
        en: `Exam memory: Council of Trent = Catholicism's "closing the stable door after the horse bolted" — no theological retreat, but major internal restructuring.

**Two terms to memorize together:**
① Jesuits = the Counter-Reformation's "elite force"; Matteo Ricci, the Jesuit who brought Catholicism to China, is the most famous example.
② Index of Forbidden Books = background knowledge for AP's Scientific Revolution unit — Galileo's works ended up on that list.

AP multiple choice often pairs Council of Trent with "1517, start of the Reformation" and asks "what did Catholicism do before/after Protestantism emerged" — watch the timeline, don't get it backwards.`,
      },
    },

    {
      id: 'henry-viii-english-reformation',
      termCn: '亨利八世 / 英国宗教改革',
      termEn: 'Henry VIII / English Reformation',
      defCn: '亨利八世（Henry VIII）是 16 世纪的英格兰国王。他想和第一任妻子离婚，但教皇不批准。他的解决办法是让英格兰脱离罗马教皇管辖，自己成为英格兰教会（Anglican Church）的最高领袖。这件事的驱动力是政治和婚姻，不是神学信仰——这是和路德最大的区别。',
      defEn: 'Henry VIII was the 16th-century King of England. He wanted to divorce his first wife, but the Pope refused to approve it. His solution: break England away from the Pope\'s authority and make himself the Supreme Head of the Church of England (Anglican Church). The driving force was politics and marriage — not theological belief. This is his biggest difference from Luther.',
      standardRef: ['AP Euro KC-2.1.II', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `亨利八世（Henry VIII，1491-1547），英格兰国王，历史上最有名的婚姻失败案例。

他和路德、加尔文的宗教改革不同：**路德是因为神学分歧，亨利八世是因为政治和婚姻。**

**起因：**
1527 年，亨利八世想和第一任妻子 Catherine of Aragon 离婚，理由是她没生出儿子。但教皇 Clement VII 不批准——因为 Catherine 是神圣罗马帝国皇帝 Charles V 的姑母，而 Charles V 的军队刚在 1527 年洗劫了罗马（这件事叫 Sack of Rome）。教皇不敢得罪 Charles V。

**亨利的解决方案：** 干脆自己当教会最高领袖。

**1534 年《至尊法案》（Act of Supremacy）：**
英格兰国王是英格兰教会（Church of England，也叫 Anglican Church）的最高首脑，不再受罗马教皇管辖。英国宗教改革就这样完成了——国王凌驾于教皇之上。

**英国国教（Anglicanism）的特点：**
① 在仪式和教义上介于天主教和新教之间
② 保留了主教制度（bishops），但拒绝教皇权威
③ 亨利八世的动机是政治的，但英国国教后来发展出了自己的神学体系

**AP 考法：**
路德→神学驱动的改革，关键词 sola fide、sola scriptura。
亨利八世→政治驱动的改革，关键词是君权至上（royal supremacy）。
亨利八世经常作为"宗教改革多元动机"的例子：宗教改革不只是神学问题，也是政治权力的重新分配。`,
        en: `Henry VIII (1491-1547), King of England, and history's most famous marriage failure.

His Reformation was different from Luther's and Calvin's. **Luther was driven by theology. Henry VIII was driven by politics and marriage.**

**The trigger:**
In 1527, Henry wanted to divorce his first wife, Catherine of Aragon, claiming she had failed to produce a male heir. Pope Clement VII refused to approve it — because Catherine was the aunt of Holy Roman Emperor Charles V, and Charles's armies had just sacked Rome in 1527 (an event called the Sack of Rome). The Pope couldn't afford to offend Charles V.

**Henry's solution:** declare himself the Church's supreme head.

**The 1534 Act of Supremacy:**
The King of England is the Supreme Head of the Church of England (also called the Anglican Church), outside the Pope's jurisdiction. The English Reformation was complete — the king above the pope.

**Characteristics of Anglicanism:**
① Sits between Catholicism and Protestantism in ritual and doctrine
② Keeps the bishop system (episcopacy), but rejects papal authority
③ Henry's motivation was political, but Anglicanism later developed its own theology

**AP exam comparison:**
Luther → theologically driven reform; key terms: sola fide, sola scriptura.
Henry VIII → politically driven reform; key term: royal supremacy.
Henry VIII is often used as an example of the "multiple motivations for Reformation" — the Reformation wasn't only a theological event; it was also a redistribution of political power.`,
      },
      xiaoweiNote: {
        cn: `亨利八世考试必记两件事：
① 《至尊法案》（Act of Supremacy，1534）——英国国教（Anglican Church）成立的法律依据。
② 动机是"婚姻 + 政治"，不是神学信仰——这是和路德最大的区别。

**记忆连接：** 他一共结婚 6 次，有 2 个妻子被砍头。这个"6 次婚姻"太有名了，AP 老师经常用它来引出"英国宗教改革的非神学动机"这个考点。

**历史链条：** 英国国教后来孕育了清教徒（Puritans）——清教徒逃往美洲建立了普利茅斯殖民地（Plymouth Colony）——所以亨利八世的婚姻危机，间接推动了美国的诞生。`,
        en: `Two things you must know about Henry VIII for the exam:
① Act of Supremacy (1534) — the legal foundation of the Church of England (Anglicanism).
② His motivation was "marriage + politics," not theological belief — this is the biggest difference from Luther.

**Memory link:** He married 6 times total, and 2 wives were executed. This "6 marriages" fact is so well-known that AP teachers regularly use it to introduce "the non-theological motivations for the English Reformation."

**The historical chain:** Anglicanism later produced the Puritans — the Puritans fled to America and founded Plymouth Colony — so Henry VIII's marriage crisis indirectly contributed to the founding of the United States.`,
      },
    },

    {
      id: 'religious-wars-peace-westphalia',
      termCn: '宗教战争与威斯特伐利亚和约',
      termEn: 'Religious Wars and the Peace of Westphalia',
      defCn: '宗教改革之后，欧洲天主教和新教国家之间爆发了长达一百三十年的宗教战争。最惨烈的是 1618-1648 年的三十年战争，德意志地区估计有 1/4 到 1/3 的人口死亡。战争最终以 1648 年威斯特伐利亚和约（Peace of Westphalia）结束，确立了现代国家主权的概念——各国在自己领土内有最高权力，其他国家不得干涉。',
      defEn: 'After the Reformation, Catholic and Protestant nations in Europe fought religious wars for about 130 years. The most devastating was the Thirty Years\' War (1618-1648), during which an estimated one-quarter to one-third of Germany\'s population died. The wars ended with the Peace of Westphalia (1648), which established the modern concept of state sovereignty — each nation has supreme authority within its own borders, and other nations may not interfere.',
      standardRef: ['AP Euro KC-2.1.III', 'AP World KC-4.1', 'CA HSS 7.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'luther-N12', context: '路德那条故事线的结尾提到宗教分裂埋下了战争的种子' },
        ],
      },
      standaloneText: {
        cn: `宗教改革最昂贵的代价：一百三十年的宗教战争。

**关键时间线：**

**① 1555 年奥格斯堡和约（Peace of Augsburg）**
神圣罗马帝国内部的天主教和路德宗诸侯达成停火。
原则叫 cuius regio eius religio（拉丁文，读"谁的地盘谁的宗教"）——意思是领主信什么，他领土上的人就信什么。老百姓没有个人宗教选择权。
注意：这个和约只承认天主教和路德派，不承认加尔文派。

**② 1618-1648 年三十年战争（Thirty Years' War）**
欧洲历史上破坏性最大的战争之一。从德意志内部的宗教冲突开始，逐渐演变成法国、瑞典、西班牙、神圣罗马帝国全面卷入的欧洲大战。估计德意志地区人口因战争减少了 1/4 到 1/3。

**③ 1648 年威斯特伐利亚和约（Peace of Westphalia）**
结束三十年战争。这是 AP 欧洲史和世界史的超级重要考点，原因是：
- 正式承认天主教、路德派、加尔文派三者的合法地位
- 奠定了现代国家主权（state sovereignty）体系：各国政府在自己领土内有最高权力，其他国家不得干涉内政
- 很多历史学家把它视为"现代国际体系的起点"

**AP 考法：** 威斯特伐利亚和约最常从两个角度考——
① 宗教改革的政治后果：新教被正式承认，欧洲宗教地图从此固定。
② 国际关系史：威斯特伐利亚主权体系（Westphalian system）= 今天联合国体系的起源。`,
        en: `The most expensive price of the Reformation: 130 years of religious warfare.

**Key timeline:**

**① Peace of Augsburg (1555)**
A ceasefire between Catholic and Lutheran princes inside the Holy Roman Empire.
The principle: cuius regio eius religio (Latin, meaning "whose realm, his religion") — whatever the ruler believes, everyone on their land must follow. Ordinary people had no individual right to choose their religion.
Note: this treaty only recognized Catholicism and Lutheranism — not Calvinism.

**② Thirty Years' War (1618-1648)**
One of the most destructive wars in European history. It began as a religious conflict inside Germany, then escalated into a Europe-wide war pulling in France, Sweden, Spain, and the Holy Roman Empire. Germany's population is estimated to have dropped by one-quarter to one-third.

**③ Peace of Westphalia (1648)**
Ended the Thirty Years' War. This is a major AP Euro and World History exam point because:
- It formally recognized Catholicism, Lutheranism, and Calvinism as all legitimate
- It established the modern system of state sovereignty: each government has supreme authority within its own borders; other states may not interfere in its internal affairs
- Many historians call it "the starting point of the modern international system"

**AP exam framing:** The Peace of Westphalia is tested most often from two angles:
① Political consequences of the Reformation: Protestantism officially recognized; Europe's religious map fixed.
② International relations history: the Westphalian system = the ancestor of today's United Nations-based international order.`,
      },
      xiaoweiNote: {
        cn: `四个词组必须配对记：
- **1555 / 奥格斯堡和约 / cuius regio eius religio（领主的宗教 = 领土宗教）**
- **1648 / 威斯特伐利亚和约 / state sovereignty（国家主权体系）**

老师说 AP 世界史大题里"现代国家主权体系从哪里来"——答案就是威斯特伐利亚，1648 年，三十年战争结束。

记忆钩：威斯特伐利亚和约（Peace of Westphalia）结束了欧洲历史上最长的宗教战争，同时创造了"国家主权"这个现代概念。W = 1648。`,
        en: `Four phrase pairs to memorize together:
- **1555 / Peace of Augsburg / cuius regio eius religio (ruler's religion = territory's religion)**
- **1648 / Peace of Westphalia / state sovereignty (the modern sovereignty system)**

My teacher says AP World History long-answer questions about "where modern state sovereignty came from" — the answer is always Westphalia, 1648, end of the Thirty Years' War.

Memory hook: the Peace of Westphalia ended the longest religious war in European history and created "state sovereignty" as we know it today. W = 1648.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `路德 1517 年贴出九十五条，喊出了"宗教自由"的先声——每个人凭信仰和圣经直接面对上帝，不需要教皇做中间人。

但 30 年后，加尔文在日内瓦建起了另一种神权统治。跳舞违法。神学异见者被烧死。老百姓的精神生活被宗教长老一条条监控。

两个都叫"新教"。那么，新教带来的"宗教自由"，到底是对谁的自由？对什么的自由？`,
      en: `In 1517, Luther posted the 95 Theses — sounding the opening note of "religious freedom." Each person could face God through faith and Scripture, with no Pope in between.

But 30 years later, Calvin built a different kind of rule in Geneva. Dancing was illegal. Theological dissenters were burned alive. Religious elders monitored the spiritual life of every citizen.

Both were called "Protestant." So: the "religious freedom" that Protestantism introduced — freedom for whom? Freedom from what?`,
      hintCn: `提示：试着从三个层面分析——
① **神学自由（theological freedom）：** 平信徒可以自己读圣经，不必通过神父——这是真实的自由。
② **政治自由（political freedom）：** 各地领主决定信什么，老百姓跟着信——这是 1555 年奥格斯堡和约的原则，不是自由。
③ **个人良知自由（freedom of conscience）：** 路德在沃尔姆斯说"我的良心只属于上帝"——但加尔文在日内瓦把"良心"交给了宗教法庭。

进阶思考：如果一个人从天主教教皇的管控，跑到加尔文日内瓦宗教长老的管控，他到底自由了多少？这个问题对所有的"解放运动"都适用。`,
      hintEn: `Hint: try analyzing from three levels —
① **Theological freedom:** Laypeople could read Scripture themselves without a priest — genuine freedom.
② **Political freedom:** Local rulers decided the religion; ordinary people had to follow — that's the 1555 Augsburg rule. Not freedom.
③ **Freedom of conscience:** Luther at Worms said "my conscience belongs to God alone" — but Calvin in Geneva handed "conscience" over to the consistory court.

Going deeper: if someone escaped the Pope's authority only to land under Calvin's Geneva consistory, how much freer were they really? This question applies to every liberation movement in history.`,
      conceptsActivated: ['luther-95-theses', 'calvin-predestination'],
    },
    {
      id: 'q2',
      cn: `伊拉斯谟用讽刺写作批评了腐败的教会，被后来的人称为"孵化了路德这颗蛋的鸡"。但当路德真的站出来要分裂教会时，伊拉斯谟退缩了，选择留在天主教内部。

有人说他是懦夫，没有勇气为自己的批评承担后果。有人说他更聪明，知道激进分裂只会带来战争，而不是改革。

你怎么看？留在体制内慢慢改变，和站出来彻底打破——哪个更有力量？`,
      en: `Erasmus used satirical writing to criticize a corrupt Church, and later generations called him "the hen that laid the egg Luther hatched." But when Luther actually stepped forward to split the Church, Erasmus pulled back — he chose to stay inside Catholicism.

Some say he was a coward, unwilling to face the consequences of his own criticism. Others say he was wiser — he understood that radical schism would bring war, not reform.

What do you think? Which has more power: changing a system from the inside, slowly — or stepping outside and breaking it altogether?`,
      hintCn: `提示：这道题没有标准答案，但 DBQ 要求你用历史证据支持你的立场。

**支持"从内部改变更有力"的证据：**
- 天特会议（Counter-Reformation）确实清除了很多内部腐败
- 耶稣会的传教成就——影响力远超许多分裂出去的新教小派系

**支持"打破重来更有力"的证据：**
- 如果没有路德的决裂，天特会议根本不会召开
- 伊拉斯谟写了一辈子批评，但从未改变过一条具体的教义

进阶思考：今天还有没有类似的争论？推动变革，是该从体制内参与，还是在体制外施压？`,
      hintEn: `Hint: no standard answer here — but DBQ requires you to support a position with historical evidence.

**Evidence for "changing from inside has more power":**
- The Counter-Reformation (Council of Trent) did eliminate significant corruption
- Jesuit missionary achievements — far greater global reach than most breakaway Protestant sects

**Evidence for "breaking away has more power":**
- Without Luther's rupture, the Council of Trent would never have been called
- Erasmus spent a lifetime writing criticism but never changed a single specific Church doctrine

Going deeper: does this debate exist today? To drive change, is it better to work inside an institution or apply pressure from outside?`,
      conceptsActivated: ['erasmus-humanism', 'council-of-trent-counter-reformation'],
    },
    {
      id: 'q3',
      cn: `1517 年宗教改革让信仰变得"个人化"——每个人直接对上帝负责，不需要教会当中间人。听起来是自由的开始。

但是 1618 到 1648 年，欧洲打了三十年宗教战争。估计德意志地区有 1/3 的人口死亡。战争以 1648 年威斯特伐利亚和约结束，确立的原则是：国家主权——宗教是内政，别国不能干涉。

如果你是 1648 年的一个普通德意志农民，刚刚从三十年战争里活下来，你会觉得宗教改革是一件好事吗？你会感谢路德吗？`,
      en: `The 1517 Reformation made faith "personal" — each individual accountable directly to God, without the Church as a middleman. It sounds like the beginning of freedom.

But from 1618 to 1648, Europe fought the Thirty Years' War. An estimated one-third of Germany's population died. The war ended with the 1648 Peace of Westphalia, establishing state sovereignty: religion is a domestic matter, and other nations cannot intervene.

If you were an ordinary German peasant in 1648, having just survived the Thirty Years' War, would you think the Reformation was a good thing? Would you thank Luther?`,
      hintCn: `提示：这道题逼着你思考"意图"和"后果"的分离——路德的意图是神学改革，后果之一是一百多年的宗教战争。

几个思考角度：
① 路德该为战争负责吗？他只是提出了神学问题，是诸侯利用宗教打政治仗。
② 如果没有宗教改革，天主教的腐败会继续多久？那个代价算不算？
③ 威斯特伐利亚和约创造了"国家主权"概念——这个贡献算不算抵消了战争的代价？

**AP 写作技巧：** 这类题最容易犯的错误是只写"好处"或只写"坏处"。DBQ 要求你写出复杂性：宗教改革带来了神学解放和个人信仰自由，但过渡期的代价是大规模战争和人口损失。两者都是真实的历史后果，都要写。`,
      hintEn: `Hint: this question forces you to think about the gap between "intent" and "consequence" — Luther's intent was theological reform; one consequence was 130 years of religious warfare.

Angles to consider:
① Is Luther responsible for the wars? He only raised theological questions — it was princes who used religion to fight political battles.
② If there had been no Reformation, how much longer would Catholic corruption have continued? Does that cost count?
③ Westphalia created the concept of "state sovereignty" — does that achievement offset the cost of the wars?

**AP writing tip:** The most common mistake on this type of question is writing only "benefits" or only "costs." DBQ requires complexity: the Reformation brought theological liberation and personal religious freedom, but the transition cost was large-scale war and massive population loss. Both are real historical consequences — include both.`,
      conceptsActivated: ['luther-95-theses', 'religious-wars-peace-westphalia', 'calvin-predestination'],
    },
  ],
};

export default notebook;
