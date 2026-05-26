// ─── 同伴笔记本架构 v1 · Scientific Revolution ────────────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
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
//   - 视角1 提供情感锚点（牛顿 / 万有引力 / 皇家学会权力争斗）
//   - 视角2 提供情感锚点（梅森 / 科学通信网络中枢）
//   - 视角3 提供情感锚点（温克尔曼 / 彗星发现 / 被拒署名）
//   - notebook 补完课纲：哥白尼、伽利略、科学方法、开普勒
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-4.5
//   - California HSS 7.7
//   - 覆盖率从 ~63% → ~95%
//
// schemaVersion: 1 · notebookVersion: scientific-revolution-v1

export var notebook = {
  topicId: 'scientific-revolution',
  topicNameCn: '科学革命',
  topicNameEn: 'The Scientific Revolution',
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
    cn: `今天老师让我们学"科学革命"（大概 1500-1700 年）。

她把这些名字写在黑板上：
哥白尼（Copernicus）、伽利略（Galileo）、开普勒（Kepler）、
牛顿（Newton）、培根（Francis Bacon）、笛卡尔（Descartes）

还有几个词：
heliocentric model（日心说）、geocentric model（地心说）、
scientific method（科学方法）、law of universal gravitation（万有引力定律）、
inductive reasoning（归纳法）、deductive reasoning（演绎法）

我先把这些记下来。等下读三个故事——牛顿、梅森（科学通信中枢）、
温克尔曼（被拒署名的女天文学家）——读完再回来对照这张单子。

老师说了一句话让我有点吃惊："牛顿一直到死都在研究炼金术和神学，
他不是我们想象中那种'纯粹的科学家'。" 这个等读完故事再想。`,
    en: `Today my teacher assigned us the Scientific Revolution (roughly 1500-1700).

She wrote these names on the board:
Copernicus, Galileo, Kepler, Newton, Francis Bacon, René Descartes

Plus some terms:
heliocentric model, geocentric model, scientific method,
law of universal gravitation, inductive reasoning, deductive reasoning.

I'm writing these down before reading the three stories —
Newton, Mersenne (the science communication hub), and
Winckelmann (the female astronomer who was denied credit).
I'll come back and check whether I can explain each term.

Teacher said something that surprised me: "Newton spent his life
studying alchemy and theology — he wasn't the 'pure scientist'
we picture." Something to think about after the stories.`,
    keyTerms: [
      { cn: '日心说', en: 'heliocentric model' },
      { cn: '地心说', en: 'geocentric model' },
      { cn: '科学方法', en: 'scientific method' },
      { cn: '万有引力定律', en: 'law of universal gravitation' },
      { cn: '归纳法', en: 'inductive reasoning' },
      { cn: '演绎法', en: 'deductive reasoning' },
      { cn: '椭圆轨道', en: 'elliptical orbit' },
      { cn: '假设-实验-验证', en: 'hypothesis-experiment-verification' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '艾萨克·牛顿',
        nameEn: 'Isaac Newton',
        ipa: '/ˈaɪzək ˈnjuːtən/',
        roleCn: '英国物理学家，万有引力定律奠基人',
        roleEn: 'English physicist, founder of law of universal gravitation',
        mustKnow: true,
        audioKey: 'isaac-newton',
      },
      {
        nameCn: '哥白尼',
        nameEn: 'Nicolaus Copernicus',
        ipa: '/ˌnɪkəˈleɪəs kəˈpɜːrnɪkəs/',
        roleCn: '波兰天文学家，日心说提出者',
        roleEn: 'Polish astronomer, proposed the heliocentric model',
        mustKnow: true,
        audioKey: 'copernicus',
      },
      {
        nameCn: '伽利略',
        nameEn: 'Galileo Galilei',
        ipa: '/ˌɡælɪˈleɪoʊ ˌɡælɪˈleɪi/',
        roleCn: '意大利天文学家，望远镜观测，被教会审判',
        roleEn: 'Italian astronomer, telescopic observation, tried by the Inquisition',
        mustKnow: true,
        audioKey: 'galileo-galilei',
      },
      {
        nameCn: '约翰内斯·开普勒',
        nameEn: 'Johannes Kepler',
        ipa: '/joʊˈhænɪs ˈkɛplər/',
        roleCn: '德国天文学家，行星运动三定律',
        roleEn: 'German astronomer, three laws of planetary motion',
        mustKnow: true,
        audioKey: 'johannes-kepler',
      },
      {
        nameCn: '弗朗西斯·培根',
        nameEn: 'Francis Bacon',
        ipa: '/ˈfrænsɪs ˈbeɪkən/',
        roleCn: '英国哲学家，归纳法，科学方法奠基人之一',
        roleEn: 'English philosopher, inductive method, co-founder of scientific method',
        mustKnow: true,
        audioKey: 'francis-bacon',
      },
      {
        nameCn: '勒内·笛卡尔',
        nameEn: 'René Descartes',
        ipa: '/rəˈneɪ deɪˈkɑːrt/',
        roleCn: '法国哲学家，演绎法，"我思故我在"',
        roleEn: 'French philosopher, deductive method, "I think therefore I am"',
        mustKnow: true,
        audioKey: 'rene-descartes',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'newton-gravity',
      termCn: '牛顿 / 万有引力定律',
      termEn: 'Newton / Law of Universal Gravitation',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'newton-perpetrator',
        nodeIds: ['newton-N1', 'newton-N6', 'newton-N10'],
        xiaoweiNote: {
          cn: `这个在视角1里读到了！牛顿（万有引力，《原理》作者）1687年发表
《自然哲学的数学原理》（Principia Mathematica）——这本书有个超厉害的地方：
它第一次用数学公式证明了"地球上苹果掉落"和"月亮绕地球转"是同一个力在起作用。

考点关键句：万有引力定律说，宇宙中任意两个有质量的物体之间都有引力，
引力大小和质量成正比，和距离的平方成反比（F = Gm₁m₂/r²）。
7年级不考公式，但要记住这是"把天上和地上的物理统一"的定律。

还有一个我在故事里注意到的事：牛顿直到死都在研究炼金术和圣经密码——
他其实把科学和宗教/神秘学混在一起，不是我们想象的那种"纯粹理性科学家"。
这是考试 careful framing 的素材。`,
          en: `I read this in the first story! Newton (universal gravitation, author of
the Principia) published the *Principia Mathematica* in 1687. The impressive thing
about this book: it was the first time mathematics proved that "an apple falling
on Earth" and "the Moon orbiting Earth" are driven by the same force.

Key exam sentence: the law of universal gravitation says every two objects with
mass attract each other — force is proportional to their masses and inversely
proportional to the square of the distance (F = Gm₁m₂/r²). Grade 7 doesn't test
the formula, but remember this is the law that "unified celestial and terrestrial physics."

Something I noticed in the story: Newton studied alchemy and Bible codes until he
died — he actually mixed science with religion and mysticism, not the "purely
rational scientist" we imagine. Useful careful-framing material for essays.`,
        },
      },
    },

    {
      id: 'science-communication-network',
      termCn: '科学通信网络 / 知识共享',
      termEn: 'Scientific Communication Networks / Knowledge Sharing',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'mersenne-mediator',
        nodeIds: ['mersenne-N3', 'mersenne-N7', 'mersenne-N10'],
        xiaoweiNote: {
          cn: `视角2是梅森（17世纪科学通信网络中枢，连接伽利略/笛卡尔/帕斯卡/费马
的那位神父信使）。这个故事让我想通了一件事：科学革命不是几个天才单打独斗——
是一张**遍布欧洲的通信网络**在互相传递实验数据、挑战对方的结论。

17世纪没有期刊、没有学术数据库。梅森那位中间人/神父通过写信，
每周收发上百封信，把伽利略在意大利的望远镜数据传给荷兰的天文学家，
把笛卡尔在法国的数学问题抛给费马，等于是"人肉互联网"。

考点关键句：科学革命能跨越国界传播，靠的是学者通信网络（republic of letters）
和后来的科学学会（皇家学会1660年，法国科学院1666年）。`,
          en: `The second story is about Mersenne — that priest-messenger who was the hub
of the 17th-century science communication network, connecting Galileo, Descartes,
Pascal, and Fermat. The story made me understand something: the Scientific Revolution
wasn't a few geniuses working alone — it was a **pan-European communication network**
exchanging experimental data and challenging each other's conclusions.

The 17th century had no journals, no academic databases. That middleman-priest
handled hundreds of letters per week, relaying Galileo's telescope data in Italy
to astronomers in Holland, throwing Descartes's math problems in France at Fermat —
basically a "human internet."

Key exam sentence: the Scientific Revolution spread across borders through the
scholars' communication network (the "republic of letters") and later through
scientific societies (Royal Society 1660, French Academy of Sciences 1666).`,
        },
      },
    },

    {
      id: 'women-in-science-barriers',
      termCn: '女性参与科学的障碍',
      termEn: 'Barriers to Women in Science',
      standardRef: ['AP World KC-4.5', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'winckelmann-receiving',
        nodeIds: ['winckelmann-N4', 'winckelmann-N8', 'winckelmann-N10'],
        xiaoweiNote: {
          cn: `视角3就是温克尔曼（德国女天文学家，发现彗星，被柏林科学院拒绝署名）。
她的故事让我有点生气：1702年她发现了一颗新彗星，
但柏林科学院把发现归功于她丈夫——因为那个时代的学术机构不接受女性会员。
她丈夫去世后，她申请接替他的职位，也被拒绝了。

考点关键句：科学革命的"理性时代"对女性参与科学设置了制度性障碍——
科学学会（皇家学会、法国科学院、柏林科学院）不接受女性会员，
女性的发现被忽视或归功于男性亲属，这是科学革命内部的结构性不平等。

AP 考试会问：科学革命让知识更"客观"了吗？温克尔曼的案例说明：
即使数据和观测本身是客观的，**谁的发现被承认**这个问题从来都不客观。`,
          en: `The third story is Winckelmann — German female astronomer, discovered a comet,
was denied credit by the Berlin Academy of Sciences. Her story made me a little angry:
in 1702 she discovered a new comet, but the Berlin Academy credited her husband —
because academic institutions of that era didn't accept female members.
After her husband died, she applied for his position and was also rejected.

Key exam sentence: The Scientific Revolution's "Age of Reason" created institutional
barriers to women's participation — scientific societies (Royal Society, French
Academy, Berlin Academy) barred female membership, and women's discoveries were
ignored or credited to male relatives. This is a structural inequality inside the
Scientific Revolution itself.

AP may ask: Did the Scientific Revolution make knowledge more "objective"?
Winckelmann's case shows: even if data and observation are objective, the question
of **whose discovery gets recognized** was never objective.`,
        },
      },
    },

    {
      id: 'copernicus-heliocentric',
      termCn: '哥白尼 / 日心说',
      termEn: 'Copernicus / Heliocentric Model',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'newton-perpetrator', nodeId: 'newton-N2', context: '牛顿在剑桥读到哥白尼，称其为"推翻天空秩序的人"' },
        ],
      },
      standaloneText: {
        cn: `Nicolaus Copernicus（哥白尼，1473-1543），波兰天主教神父兼天文学家。

1543 年，他在去世那一年出版了《天体运行论》
（De revolutionibus orbium coelestium / On the Revolutions of the Celestial Spheres）。
这本书提出了一个在当时极其危险的观点：**太阳，不是地球，才是宇宙的中心。**

在他之前统治了一千多年的是**地心说**（geocentric model）——
古希腊学者 Ptolemy（托勒密）在公元2世纪建立的体系，认为地球是宇宙中心，
太阳、月亮、行星都绕地球转。教会把这套宇宙观写进神学：
地球在中心 = 人类在上帝创造中占据最重要的位置。

哥白尼说：不对。**太阳在中心（heliocentric），地球和其他行星都绕太阳转。**

他为什么等到死才发表？有几个原因：
一、他知道这会惹麻烦——书的序言里他把它献给教皇，试图降低风险。
二、他自己也不完全确定（他仍然认为行星轨道是完美圆形，这是错的，
后来开普勒才纠正）。

哥白尼的贡献是**打开了一扇门**——他让之后的伽利略、开普勒、牛顿
有了"可以挑战古老宇宙观"的起点。

考点关键句：哥白尼1543年《天体运行论》= **日心说的起点，
也是科学革命的起点**。地心说（Ptolemy）→ 日心说（Copernicus）
是课纲必考的"宇宙观革命"。`,
        en: `Nicolaus Copernicus (1473-1543), Polish Catholic priest and astronomer.

In 1543 — the year he died — he published *On the Revolutions of the Celestial Spheres*
(De revolutionibus orbium coelestium). The book proposed something
extremely dangerous at the time: **the Sun, not Earth, is the center of the universe.**

Before him, the ruling model for over a thousand years was the **geocentric model** —
a system built by Greek scholar Ptolemy in the 2nd century CE, which placed Earth
at the center with the Sun, Moon, and planets orbiting it. The Church wrote this
cosmology into theology: Earth at center = humanity holds the most important place
in God's creation.

Copernicus said: wrong. **The Sun is at the center (heliocentric), and Earth and
the other planets orbit it.**

Why did he wait until death to publish? Several reasons:
First, he knew it would cause trouble — his preface dedicated the book to the Pope,
trying to reduce the risk.
Second, he wasn't entirely confident himself (he still assumed planetary orbits
were perfect circles — which was wrong; Kepler later corrected this).

Copernicus's contribution was **opening a door** — he gave the later Galileo,
Kepler, and Newton a starting point: the idea that the ancient cosmic order
could be challenged.

Key exam sentence: Copernicus's 1543 *De Revolutionibus* = **the starting point of
heliocentrism, and of the Scientific Revolution**. Geocentric (Ptolemy) →
heliocentric (Copernicus) is the tested "cosmological revolution."`,
      },
      xiaoweiNote: {
        cn: `老师给了个超好的记忆口诀：**"Cope（哥白尼）让地球动起来了，1543"**。
选择题如果问"谁第一个提出日心说"，答案是 Copernicus，不是 Galileo——
伽利略是后来**用望远镜观测证明了**哥白尼的想法，不是第一个提出的人。
这个区别很多同学搞混。`,
        en: `Teacher gave a great mnemonic: **"Cope (Copernicus) made Earth move, 1543."**
On multiple choice, if the question asks "who first proposed heliocentrism," the answer is
Copernicus, NOT Galileo — Galileo later **proved** Copernicus's idea with telescopic
observation; he didn't originate it. Many students mix this up.`,
      },
    },

    {
      id: 'galileo-church-conflict',
      termCn: '伽利略 / 与教会冲突',
      termEn: 'Galileo / Conflict with the Church',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'mersenne-mediator', nodeId: 'mersenne-N5', context: '梅森写信给伽利略，得知伽利略1633年被软禁' },
          { lens: 'mersenne-mediator', nodeId: 'mersenne-N8', context: '梅森秘密传阅被教会查禁的伽利略手稿' },
        ],
      },
      standaloneText: {
        cn: `Galileo Galilei（伽利略，1564-1642），意大利天文学家和物理学家。

**第一步：望远镜**
1609年，伽利略把当时荷兰发明的望远镜改良了10倍，对准了夜空。他看到了：
- 月亮表面有山脉和陨石坑（不是"完美的天球"）
- 木星旁边有四颗卫星在绕木星转（不是所有天体都绕地球转！）
- 金星也有像月亮一样的"相位变化"（只有在绕太阳运行时才会产生这种现象）

这些观测直接支持了哥白尼的日心说。

**第二步：书与麻烦**
1632年，伽利略出版《关于两种世界体系的对话》（Dialogue Concerning the Two Chief World Systems），
用对话体让支持地心说的角色（叫"Simplicio"，意思就是"笨蛋"）显得很蠢。
教皇（之前还是他朋友）看出来被嘲讽了，大怒。

**第三步：审判**
1633年，伽利略被**宗教裁判所**（Inquisition）传唤到罗马审判——
审判罪名是"宣扬异端学说"（支持日心说违背圣经）。
他被迫公开宣布放弃日心说，才免于火刑。余生被软禁在佛罗伦萨郊外。

传说他在低头认罪后小声嘟囔："Eppur si muove"——"但它（地球）还是在动的。"
历史上无法证实，但这句话成了"科学不屈服于权威"的象征。

考点关键句：伽利略案（1633）= **科学 vs 宗教权威**的标志性对决，
也是 AP KC-4.5 和 CA HSS 7.7 最常考的具体案例。

careful framing：教会1992年才正式向伽利略道歉（比审判晚了359年）。`,
        en: `Galileo Galilei (1564-1642), Italian astronomer and physicist.

**Step 1: The telescope**
In 1609, Galileo improved the Dutch-invented telescope by 10x and pointed it at the sky. He saw:
- Mountains and craters on the Moon's surface (not a "perfect celestial sphere")
- Four moons orbiting Jupiter (not all celestial objects orbit Earth!)
- Venus showing phases like the Moon (only possible if it orbits the Sun)

These observations directly supported Copernicus's heliocentric model.

**Step 2: The book and the trouble**
In 1632, Galileo published *Dialogue Concerning the Two Chief World Systems*,
using a dialogue format that made the geocentric-supporting character (named "Simplicio,"
meaning "simpleton") look foolish. The Pope — previously his friend — recognized
the mockery and was furious.

**Step 3: The trial**
In 1633, Galileo was summoned to Rome by the **Inquisition** on charges of
"promoting heretical doctrine" (supporting heliocentrism as contrary to Scripture).
He was forced to publicly recant the heliocentric view to avoid being burned at the stake.
He spent the rest of his life under house arrest outside Florence.

Legend says that after bowing his head to recant, he muttered: "Eppur si muove" —
"And yet it moves." Historically unverifiable, but this phrase became the symbol of
"science refusing to submit to authority."

Key exam sentence: The Galileo Affair (1633) = the landmark clash of
**science vs. religious authority**, and the most-tested specific case
for AP KC-4.5 and CA HSS 7.7.

Careful framing: The Church didn't formally apologize to Galileo until 1992 —
359 years after the trial.`,
      },
      xiaoweiNote: {
        cn: `记忆法：**"伽利略 1633 年被审判，用望远镜证明了哥白尼是对的，
但被迫说'我错了'"**。考试经常出"谁用望远镜支持了日心说"——答案是伽利略，
不是哥白尼（哥白尼那个年代还没望远镜）。

另外，"Eppur si muove"这个梗，老师说 AP 短答题写进去会让阅卷老师加分——
前提是你能解释它为什么重要。`,
        en: `Memory trick: **"Galileo, 1633 trial, telescope proved Copernicus right,
but was forced to say 'I was wrong.'"** Tests often ask "who used the telescope
to support heliocentrism" — the answer is Galileo, not Copernicus
(telescopes didn't exist yet in Copernicus's day).

Also: the "Eppur si muove" quote — teacher says dropping it into an AP short-answer
response earns extra credit from graders, provided you can explain why it matters.`,
      },
    },

    {
      id: 'scientific-method',
      termCn: '科学方法 / 培根归纳法 / 笛卡尔演绎法',
      termEn: 'Scientific Method / Bacon Induction / Descartes Deduction',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'mersenne-mediator', nodeId: 'mersenne-N6', context: '梅森写信给笛卡尔讨论"方法论"，触发笛卡尔写《方法论》' },
        ],
      },
      standaloneText: {
        cn: `科学革命最重要的贡献之一不是某个具体发现——而是发明了一套**做科学的方法**。

**培根（Francis Bacon，1561-1626）和归纳法**

英国哲学家培根在《新工具》（Novum Organum，1620）里说：
以前的学者只会读古希腊书、然后推理——这叫"演绎法"，从原则推到结论。
但他说这不对，真正的知识要靠**归纳法**：
先做大量观察和实验，收集数据，然后从数据中总结出规律。

口诀：**Bacon = 先观察，再总结**。（"培根先煎好了再看效果"）

**笛卡尔（René Descartes，1596-1650）和演绎法**

法国哲学家笛卡尔在《方法论》（Discourse on the Method，1637）里说：
他要怀疑一切，直到找到不可怀疑的基础。
他找到的基础是：**"我思，故我在"（Cogito, ergo sum / I think, therefore I am）**——
只要我在思考，我的存在就是确定的。

他的方法：先确立清晰的起点，再用数学式的逻辑一步步推理——这叫**演绎法**。

口诀：**Descartes = 先确定原则，再推论**。（"笛卡尔先搞清楚规则再下棋"）

**现代科学方法 = 培根 + 笛卡尔的结合**

今天学校教的科学方法（**提出问题 → 形成假设 → 做实验 → 分析数据 → 得出结论**）
其实是培根归纳 + 笛卡尔演绎的合体：
- 实验和数据收集 = 培根归纳
- 假设的逻辑推演 = 笛卡尔演绎

考点关键句：科学革命用**假设-实验-验证**循环取代了"引用亚里士多德/圣经就是正确"
的知识权威模式——这是人类认识世界的方式的根本转变。`,
        en: `One of the Scientific Revolution's most important contributions wasn't any
specific discovery — it was inventing a **method for doing science.**

**Francis Bacon (1561-1626) and inductive reasoning**

English philosopher Bacon said in *Novum Organum* (1620):
Previous scholars only read ancient Greek books and reasoned from them —
that's deduction, moving from principles to conclusions.
Wrong approach, Bacon said. Real knowledge requires **inductive reasoning**:
first make many observations and experiments, collect data, then extract patterns
from that data.

Mnemonic: **Bacon = observe first, summarize second.** ("Fry the bacon first, then see how it turned out.")

**René Descartes (1596-1650) and deductive reasoning**

French philosopher Descartes said in *Discourse on the Method* (1637):
he would doubt everything until he found something beyond doubt.
What he found: **"I think, therefore I am" (Cogito, ergo sum)** —
as long as I'm thinking, my existence is certain.

His method: first establish a clear foundation, then reason step by step
using mathematical logic — this is **deductive reasoning.**

Mnemonic: **Descartes = fix the principle first, then reason from it.**
("Descartes figures out the rules before playing the game.")

**Modern scientific method = Bacon + Descartes combined**

The scientific method taught in school today
(**question → hypothesis → experiment → data analysis → conclusion**)
is actually Baconian induction + Cartesian deduction fused:
- Experiments and data collection = Bacon's induction
- Logical reasoning from hypothesis = Descartes's deduction

Key exam sentence: The Scientific Revolution replaced "citing Aristotle or Scripture
equals truth" with the **hypothesis-experiment-verification** cycle —
a fundamental shift in how humans know what they know.`,
      },
      xiaoweiNote: {
        cn: `老师说这个考点选择题里会给你一段话，让你判断它是"培根式"还是"笛卡尔式"。
方法：如果那段话是"我做了实验，发现规律" → 培根归纳。
如果是"我从这个原理出发，推导出结论" → 笛卡尔演绎。

还有一个考法："科学方法最重要的是什么"——标准答案是**可重复验证**
（reproducibility）：别人能重复你的实验，得到同样结果，才算科学。`,
        en: `Teacher said this appears on multiple choice as a passage you have to
classify as "Baconian" or "Cartesian."
Method: if the passage says "I ran experiments and found a pattern" → Bacon induction.
If it says "starting from this principle, I logically derived a conclusion" →
Descartes deduction.

Another test angle: "What is the most important feature of the scientific method?"
Standard answer: **reproducibility** — someone else can repeat your experiment and
get the same result. That's what makes it science.`,
      },
    },

    {
      id: 'kepler-planetary-laws',
      termCn: '开普勒 / 行星运动三定律',
      termEn: 'Kepler / Three Laws of Planetary Motion',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'newton-perpetrator', nodeId: 'newton-N4', context: '牛顿在剑桥笔记本上研究开普勒的三定律，发展出引力理论' },
        ],
      },
      standaloneText: {
        cn: `Johannes Kepler（开普勒，1571-1630），德国天文学家和数学家。

哥白尼说太阳在中心——但他的模型有一个问题：他认为行星轨道是完美的圆形。
这个预测和实际观测数据对不上。开普勒拿到了他老师第谷·布拉赫（Tycho Brahe）
积累20年的天文观测数据，开始用数学硬算，算了几年，发现了真相。

**开普勒三大定律（1609-1619年发表）**：

**第一定律（椭圆轨道定律）**：
行星绕太阳的轨道是**椭圆形**，太阳在椭圆的一个焦点上，不是在中心。
（打破了"天体轨道必须是完美圆形"这个从古希腊沿用了2000年的假设。）

**第二定律（面积定律）**：
行星和太阳的连线在相等时间内扫过相等面积。
简单说：**离太阳近的时候，行星跑得快；离太阳远的时候，跑得慢**。
（地球在1月份离太阳最近，跑得最快——所以北半球冬天比夏天短！）

**第三定律（周期定律）**：
行星公转周期的平方和轨道半长轴的立方成正比。
简单说：**离太阳越远的行星，绕一圈越慢**。
（冥王星要248年才绕太阳一圈，水星只要88天。）

开普勒和牛顿的关系：牛顿后来用万有引力定律**从数学上解释了为什么**开普勒三定律成立——
开普勒发现了规律，牛顿找到了背后的原因。这就是科学革命的接力方式。

考点关键句：开普勒三定律推翻了"圆形轨道"假设，用**椭圆轨道**精确描述行星运动，
是太阳中心天文学从"哲学主张"变成"数学证明"的关键一步。`,
        en: `Johannes Kepler (1571-1630), German astronomer and mathematician.

Copernicus said the Sun is at the center — but his model had a problem: he assumed
planetary orbits were perfect circles. This prediction didn't match actual observation
data. Kepler obtained 20 years of astronomical data his mentor Tycho Brahe had
accumulated, and began brute-force mathematical calculations. After years of work,
he found the truth.

**Kepler's Three Laws of Planetary Motion (published 1609-1619):**

**First Law (Law of Ellipses):**
Planets orbit the Sun in **ellipses**, with the Sun at one focus of the ellipse,
not at the center.
(This shattered the assumption — held for 2000 years since ancient Greece —
that celestial orbits must be perfect circles.)

**Second Law (Law of Equal Areas):**
A line connecting a planet to the Sun sweeps equal areas in equal time intervals.
Simply put: **planets move faster when close to the Sun, slower when far away.**
(Earth is closest to the Sun in January and moves fastest — that's why winter
in the Northern Hemisphere is shorter than summer!)

**Third Law (Law of Periods):**
The square of a planet's orbital period is proportional to the cube of its
semi-major axis. Simply put: **the farther a planet is from the Sun, the slower it orbits.**
(Pluto takes 248 years to complete one orbit; Mercury takes only 88 days.)

The Kepler-Newton connection: Newton later used the law of universal gravitation
to **mathematically explain why** Kepler's three laws hold — Kepler discovered
the patterns, Newton found the underlying cause. This is how the Scientific
Revolution's relay race worked.

Key exam sentence: Kepler's three laws demolished the "circular orbit" assumption,
using **elliptical orbits** to precisely describe planetary motion — the key step
that turned heliocentric astronomy from "philosophical claim" to "mathematical proof."`,
      },
      xiaoweiNote: {
        cn: `7年级不用记三定律的公式，但要记住这三个关键词：
**椭圆（ellipse）、面积（area）、周期（period）**——这三个词对应三条定律。

考试里最常考第一定律——选择题里会问"行星轨道是什么形状"，
答案是**ellipse（椭圆）**，不是圆。哥白尼说圆，开普勒纠正成椭圆——这个对比经常考。

记忆口诀：**"开普勒把圆改椭圆，牛顿解释了为什么"**。`,
        en: `Grade 7 doesn't need the formulas, but memorize these three keywords:
**ellipse, area, period** — they map to the three laws.

Tests most often ask about the First Law — multiple choice will ask "what shape
is a planetary orbit?" Answer: **ellipse**, not a circle.
Copernicus said circle; Kepler corrected it to ellipse — this contrast is frequently tested.

Mnemonic: **"Kepler changed circles to ellipses; Newton explained why."**`,
      },
    },

    {
      id: 'scientific-revolution-legacy',
      termCn: '科学革命的遗产与矛盾',
      termEn: 'Legacy and Contradictions of the Scientific Revolution',
      standardRef: ['AP World KC-4.5', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['newton-N12', 'mersenne-N10', 'winckelmann-N10'],
        xiaoweiNote: {
          cn: `三个故事加在一起，让我看到了科学革命的全貌——不只是一张"天才名单"。

**科学革命真正改变的东西**：
它让"凭什么相信这个"这个问题的答案从"因为亚里士多德说的"/"因为圣经上说的"
变成了"因为实验证明了"/"因为数学推导出来了"。
这是人类认识世界的方式的根本转变，不只是天文学的进步。

**科学革命的内部矛盾**（AP DBQ 高频素材）：
- 牛顿（万有引力，《原理》作者）同时做炼金术、研究圣经密码——
  科学革命的英雄人物并非放弃了宗教，他们是在**新旧框架之间的过渡人物**
- 科学学会（皇家学会等）宣扬"理性客观"，但系统性地排除了女性——
  温克尔曼（德国女天文学家，发现彗星，被拒署名）的案例就是证明
- 科学方法强调"观察事实"，但"谁来做观察"、"谁的结论被记录"
  从来都不是客观的社会过程

这不是说科学革命是骗局——是说它的"理性"和"客观"承诺，
在当时对所有人的实现程度并不平等，就像启蒙运动的"自然权利"一样。

考试写 essay 模板：
1. 承认科学革命的知识论贡献（以实验取代权威）
2. 列举具体成就（哥白尼日心说、伽利略望远镜、开普勒椭圆轨道、牛顿万有引力）
3. 指出内部矛盾（女性排除 + 牛顿炼金术 + 宗教审判）
4. 结论：科学革命开启了一个**未完成的项目**——它发明了追求客观的工具，
   但没有自动保证这个工具被所有人平等使用。`,
          en: `The three stories together let me see the full picture of the Scientific
Revolution — not just a "list of geniuses."

**What the Scientific Revolution actually changed:**
It shifted the answer to "why should we believe this?" from
"because Aristotle said so" / "because the Bible says so"
to "because experiments proved it" / "because mathematics derived it."
This is a fundamental transformation in how humans know things —
not just progress in astronomy.

**Internal contradictions of the Scientific Revolution** (high-frequency AP DBQ material):
- Newton (universal gravitation, Principia author) simultaneously practiced alchemy
  and decoded Bible prophecy — the Revolution's heroes didn't abandon religion;
  they were **transitional figures between old and new frameworks**
- Scientific societies (Royal Society, etc.) preached "rational objectivity"
  but systematically excluded women — Winckelmann's case (German female astronomer,
  discovered a comet, denied credit) proves it
- The scientific method emphasizes "observing facts," but "who gets to observe"
  and "whose conclusions get recorded" were never an objective social process

This doesn't mean the Scientific Revolution was a fraud — it means its promises of
"reason" and "objectivity" were realized unequally for different people at the time,
just like the Enlightenment's "natural rights."

Essay template for exams:
1. Acknowledge the Scientific Revolution's epistemological contribution
   (replacing authority with experiment)
2. List specific achievements (Copernicus heliocentrism, Galileo telescope,
   Kepler ellipses, Newton gravity)
3. Note internal contradictions (exclusion of women + Newton's alchemy +
   Inquisition trial)
4. Conclusion: the Scientific Revolution launched an **unfinished project** —
   it invented the tools for pursuing objectivity, but didn't automatically
   guarantee equal access to those tools for everyone.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `科学革命常被描述为"科学打败了宗教"——但牛顿（万有引力，《原理》作者）
一生花了大量时间研究炼金术和圣经预言；哥白尼自己是天主教神父，
把《天体运行论》献给了教皇。

你怎么看"科学 vs 宗教"这个说法？科学革命的科学家们，
是在"对抗宗教"，还是在做别的什么？`,
      en: `The Scientific Revolution is often described as "science defeating religion" —
but Newton (universal gravitation, Principia author) spent enormous time on alchemy
and biblical prophecy; Copernicus was a Catholic priest who dedicated
*De Revolutionibus* to the Pope.

What do you make of the "science vs. religion" framing?
Were the scientists of the Scientific Revolution "opposing religion,"
or were they doing something more complicated?`,
      hintCn: `提示：可以从两个角度想——
(1) 伽利略的审判（1633年）是真实的冲突，说明新科学确实威胁到了教会权威。
(2) 但牛顿本人认为自己是在理解上帝的创造，他的引力定律不是对上帝的攻击，
而是对"上帝设计宇宙的规律"的数学描述。

这说明科学革命不是一场有意识的"反宗教运动"——它开始只是想更准确地描述世界，
但它的方法论（用实验和数学检验权威）最终和宗教权威产生了摩擦。

进阶思考：今天还有"科学 vs 权威"的摩擦吗？（气候科学、进化论在某些地区的争议）
这些摩擦和伽利略的案子有什么相似之处？又有什么不同？`,
      hintEn: `Hint: think from two angles —
(1) Galileo's trial (1633) was a real conflict, showing that new science genuinely
threatened Church authority.
(2) But Newton himself believed he was understanding God's creation; his law of
gravitation wasn't an attack on God but a mathematical description of
"the rules God used to design the universe."

This suggests the Scientific Revolution wasn't a conscious "anti-religion movement" —
it started simply as a desire to describe the world more accurately, but its methodology
(using experiment and math to verify authority) eventually clashed with religious authority.

Going deeper: are there still "science vs. authority" frictions today?
(Climate science, evolution in certain communities.) What do those frictions share
with Galileo's case? How are they different?`,
      conceptsActivated: ['newton-gravity', 'galileo-church-conflict', 'copernicus-heliocentric'],
    },
    {
      id: 'q2',
      cn: `温克尔曼（德国女天文学家，发现彗星，被柏林科学院拒绝署名）
1702年发现了一颗新彗星，但那个发现被归功于她的丈夫，
因为柏林科学院不接受女性会员。

科学方法的核心原则是"观察事实就是事实，跟观察者是谁无关"——
但温克尔曼的故事说明，在实践中"谁的观察被承认"这个问题并不中立。

你认为今天的科学机构在这件事上做得更好了吗？用你知道的例子支持你的观点。`,
      en: `Winckelmann (German female astronomer, discovered a comet, denied credit
by the Berlin Academy of Sciences) discovered a new comet in 1702,
but the discovery was credited to her husband because the Berlin Academy
didn't accept female members.

The core principle of the scientific method is "an observed fact is a fact,
regardless of who made the observation" — but Winckelmann's story shows that
in practice, the question of "whose observation gets recognized" is not neutral.

Do you think today's scientific institutions handle this better?
Use an example you know to support your view.`,
      hintCn: `提示：可以从两个方向论证——
(1) 更好了：诺贝尔奖越来越多地颁给女性科学家（屠呦呦2015年）；
    很多大学、研究机构现在有专门的多元化项目。
(2) 还没解决：2022年研究显示，同样质量的论文，第一作者是女性的引用量比
    第一作者是男性的少约10%；"马太效应"（已经有名气的人更容易得到信用）依然存在。

这道题没有"标准答案"——重要的是用具体事实支持你的立场，
同时承认对方的观点也有根据。`,
      hintEn: `Hint: you can argue in both directions —
(1) Better now: the Nobel Prize has increasingly gone to female scientists
    (Tu Youyou 2015); many universities and research institutions have dedicated
    diversity programs.
(2) Not fully resolved: 2022 research found that papers with female first authors
    receive about 10% fewer citations than those with male first authors at the same
    quality level; the "Matthew effect" (already-famous people get more credit) still exists.

There's no "standard answer" for this question — what matters is supporting your
position with specific facts while acknowledging the opposing view has evidence too.`,
      conceptsActivated: ['women-in-science-barriers', 'scientific-revolution-legacy'],
    },
    {
      id: 'q3',
      cn: `哥白尼（日心说提出者）和伽利略（望远镜天文学，被教会审判）所在的年代，
"什么是真理"这个问题是由教会权威来裁定的。
伽利略因为主张"地球绕太阳转"被裁定为"异端"，被迫公开认罪。

今天，"什么是真理"由谁来裁定？
如果伽利略活在今天，他可能面对的阻力是什么形式的？`,
      en: `In the era of Copernicus (who proposed heliocentrism) and Galileo
(telescopic astronomy, tried by the Inquisition), the question of
"what is truth" was decided by Church authority.
Galileo was declared a heretic for claiming "Earth orbits the Sun"
and was forced to publicly recant.

Today, who decides "what is truth"?
If Galileo were alive today, what form might the resistance he faces take?`,
      hintCn: `提示：几个值得想的角度——
- 今天"裁定真理"的机构包括：同行评审期刊、政府资助机构、
  科技公司（控制算法决定什么内容被传播）、社交媒体舆论
- 今天的"伽利略时刻"可能是什么样子？某个科学家发表了一个
  被主流学界不接受的发现，他会遭遇什么？（可以想想1980年代
  Barry Marshall喝幽门螺旋杆菌证明胃溃疡是细菌感染——被主流嘲笑多年，
  后来得了诺贝尔奖）
- 关键思考：裁定真理的机构从"宗教权威"换成"同行评审"，
  是变得更客观了，还是只是换了一种权威？
  "同行评审"系统本身有没有可能压制正确但非主流的观点？`,
      hintEn: `Hint: some angles worth exploring —
- Institutions that "decide truth" today include: peer-reviewed journals,
  government funding bodies, tech companies (whose algorithms determine
  what content spreads), social media opinion
- What would a "Galileo moment" look like today? A scientist publishes a finding
  the mainstream rejects — what happens? (Consider Barry Marshall in the 1980s,
  who drank H. pylori to prove stomach ulcers are bacterial — mocked for years,
  then won the Nobel Prize.)
- Key question: did switching "truth-deciding authority" from the Church to peer review
  make us more objective, or just exchange one form of authority for another?
  Can the peer review system itself suppress correct-but-non-mainstream ideas?`,
      conceptsActivated: ['copernicus-heliocentric', 'galileo-church-conflict', 'scientific-method', 'scientific-revolution-legacy'],
    },
  ],
};

export default notebook;
