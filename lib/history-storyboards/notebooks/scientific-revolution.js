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
    cn: `今天老师让我们学"科学革命"——大概是 1500 到 1700 年发生的事。

她把这些名字写在黑板上：
哥白尼（Copernicus）、伽利略（Galileo）、开普勒（Kepler）、
牛顿（Newton）、培根（Francis Bacon）、笛卡尔（Descartes）

还有几个词：
日心说（heliocentric model）、地心说（geocentric model）、
科学方法（scientific method）、万有引力定律（law of universal gravitation）、
归纳法（inductive reasoning）、演绎法（deductive reasoning）

我先把这些记下来。等下读三个故事——
① 牛顿那条故事线
② 梅森那条故事线（他是欧洲科学通信网络的中心人物）
③ 温克尔曼那条故事线（她发现了一颗彗星，但发现成果被剥夺署名权）

读完再回来对照这张单子，看我能不能用自己的话解释每个词。

老师说了一句话让我有点吃惊："牛顿一直到死都在研究炼金术和神学，
他不是我们想象中那种'纯粹的科学家'。" 这个等读完故事再想。`,
    en: `Today my teacher assigned us the Scientific Revolution — roughly 1500 to 1700.

She wrote these names on the board:
Copernicus, Galileo, Kepler, Newton, Francis Bacon, René Descartes

And some key terms:
heliocentric model, geocentric model, scientific method,
law of universal gravitation, inductive reasoning, deductive reasoning.

I'm writing these down first. Then I'll read three stories:
① Newton's story line
② Mersenne's story line (he was the hub of Europe's science letter network)
③ Winckelmann's story line (she discovered a comet but was denied credit for it)

After reading, I'll come back and check whether I can explain each term in my own words.

Teacher said something that surprised me: "Newton spent his whole life
studying alchemy and theology — he wasn't the 'pure scientist' we picture."
I'll think about that after the stories.`,
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
      {
        nameCn: '玛丽亚·温克尔曼',
        nameEn: 'Maria Winckelmann',
        ipa: '/məˈriːə ˈvɪŋkəlmæn/',
        roleCn: '德国女天文学家，1702年发现彗星，被柏林科学院拒绝署名',
        roleEn: 'German female astronomer, discovered a comet in 1702, denied credit by the Berlin Academy of Sciences',
        mustKnow: true,
        audioKey: 'maria-winckelmann',
      },
      {
        nameCn: '马兰·梅森',
        nameEn: 'Marin Mersenne',
        ipa: '/məˈræ̃ mɛʁˈsɛn/',
        roleCn: '法国神父，17世纪欧洲科学通信网络中枢',
        roleEn: 'French friar, central hub of Europe\'s 17th-century science letter network',
        mustKnow: false,
        audioKey: 'marin-mersenne',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'newton-gravity',
      termCn: '牛顿 / 万有引力定律',
      termEn: 'Newton / Law of Universal Gravitation',
      defCn: '万有引力定律说：宇宙中任意两个有质量的物体都会互相吸引。牛顿1687年在《自然哲学的数学原理》里用数学证明了这一点，是科学革命最重要的成果之一。',
      defEn: 'The law of universal gravitation says every two objects with mass pull toward each other. Newton proved this with math in his 1687 Principia — one of the most important results of the Scientific Revolution.',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'newton',
        nodeIds: ['newton-N1', 'newton-N6', 'newton-N10'],
        xiaoweiNote: {
          cn: `牛顿那条故事线里读到了！牛顿（Isaac Newton）1687年出版
《自然哲学的数学原理》（Principia Mathematica）。这本书最厉害的地方是：
它第一次用数学证明了"苹果掉落到地上"和"月亮绕地球转"是**同一个力**在起作用。

考点关键句：**万有引力定律**说，宇宙里任意两个有质量的东西都会互相吸引。
1. 引力跟两个物体的质量成正比——越重，吸引力越大。
2. 引力跟距离的平方成反比——越远，吸引力越小。
公式是 F = Gm₁m₂/r²，7年级不考公式，但要记住：这是**把天上和地上的物理统一**的定律。

我在故事里还注意到一件事：牛顿直到死都在研究炼金术和圣经密码——
他把科学和宗教混在一起，不是我们想象中的那种"纯粹理性科学家"。
考试写分析题时，这个细节很有用。`,
          en: `I read this in Newton's story line! Newton published the Principia Mathematica
in 1687. What's amazing about it: for the first time, math proved that "an apple
falling to the ground" and "the Moon orbiting Earth" are powered by the **same force**.

Key exam sentence: the **law of universal gravitation** says every two objects with mass
pull toward each other.
1. The force is stronger when the objects are heavier.
2. The force gets weaker as the objects get farther apart.
The formula is F = Gm₁m₂/r² — you don't need that for Grade 7, but remember:
this law **unified the physics of the sky and the physics of the ground**.

One thing I noticed in the story: Newton studied alchemy and Bible codes until he
died — he mixed science with religion, not the "purely rational scientist" we picture.
That detail is really useful for written analysis questions on the exam.`,
        },
      },
    },

    {
      id: 'science-communication-network',
      termCn: '科学通信网络 / 知识共享',
      termEn: 'Scientific Communication Networks / Knowledge Sharing',
      defCn: '科学通信网络（也叫"学者共和国"，republic of letters）是17世纪学者们靠写信互相分享实验数据和想法的跨国系统。它让科学发现能跨越国界传播，是科学革命扩散的关键通道。',
      defEn: 'The science communication network — also called the "republic of letters" — was a system where 17th-century scholars shared experimental data and ideas through letters across countries. It was the main channel that spread Scientific Revolution discoveries beyond borders.',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'mersenne',
        nodeIds: ['mersenne-N3', 'mersenne-N7', 'mersenne-N10'],
        xiaoweiNote: {
          cn: `梅森那条故事线里，主角梅森是17世纪欧洲科学通信网络的中心人物——
他是一位法国神父，靠写信把伽利略、笛卡尔、帕斯卡、费马这些人连在一起。
这个故事让我想通了一件事：科学革命不是几个天才单打独斗——
是一张**遍布欧洲的通信网络**在互相传递实验数据、挑战对方的结论。

17世纪没有期刊、没有学术数据库。梅森每周收发上百封信：
1. 把伽利略在意大利的望远镜数据传给荷兰的天文学家。
2. 把笛卡尔在法国的数学问题转给费马。
他等于是那个年代的"人肉互联网"。

**考点关键句**：科学革命能跨越国界传播，靠两样东西：
① 学者通信网络（republic of letters，学者共和国）
② 后来成立的科学学会（英国皇家学会1660年，法国科学院1666年）`,
          en: `In Mersenne's story line, the main character Mersenne was the hub of Europe's
17th-century science network — a French friar who connected Galileo, Descartes,
Pascal, and Fermat through letters. The story helped me understand something:
the Scientific Revolution wasn't a few geniuses working alone — it was a
**pan-European letter network** passing experimental data and pushing back on each other's conclusions.

The 17th century had no journals and no online databases. Mersenne handled hundreds
of letters every week:
1. He relayed Galileo's telescope data from Italy to astronomers in Holland.
2. He passed Descartes's math problems in France to Fermat.
He was basically the "human internet" of his era.

**Key exam sentence:** the Scientific Revolution spread across borders through two things:
① A scholar letter network (the "republic of letters")
② Later, formal scientific societies (Royal Society 1660, French Academy of Sciences 1666)`,
        },
      },
    },

    {
      id: 'women-in-science-barriers',
      termCn: '女性参与科学的障碍',
      termEn: 'Barriers to Women in Science',
      defCn: '科学革命时期，皇家学会、法国科学院、柏林科学院等正式科学机构不接受女性会员。这意味着女性做出的发现经常被忽视，或者被归功于她们的丈夫或父亲。',
      defEn: 'During the Scientific Revolution, major scientific societies like the Royal Society and Berlin Academy barred women from membership. This meant women\'s discoveries were often ignored or credited to their husbands or fathers instead.',
      standardRef: ['AP World KC-4.5', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'winckelmann',
        nodeIds: ['winckelmann-N4', 'winckelmann-N8', 'winckelmann-N10'],
        xiaoweiNote: {
          cn: `温克尔曼那条故事线的主角就是她——玛丽亚·温克尔曼，德国女天文学家。
她的故事让我有点生气：1702年她发现了一颗新彗星，
但柏林科学院把功劳归给了她丈夫——因为那时候的学术机构不接受女性会员。
她丈夫去世后，她申请接替他的职位，也被拒绝了。

**考点关键句**：科学革命的"理性时代"对女性参与科学设置了制度性障碍。
1. 各大科学学会（皇家学会、法国科学院、柏林科学院）不接受女性会员。
2. 女性的发现被忽视，或者归功于她们的男性亲属。
这是科学革命内部的结构性不平等——"理性"和"客观"的承诺，对女性来说根本没兑现。

AP考试会问：科学革命让知识更"客观"了吗？
温克尔曼的案例说明：数据本身可以是客观的，但**谁的发现被承认**从来都不客观。`,
          en: `The main character of Winckelmann's story line is Maria Winckelmann, a German
female astronomer. Her story made me a little angry: in 1702 she discovered a new comet,
but the Berlin Academy of Sciences credited her husband — because scientific institutions
of that era didn't accept female members. After her husband died, she applied for his
position and was rejected too.

**Key exam sentence:** the Scientific Revolution's "Age of Reason" created institutional
barriers to women's participation in science.
1. Major scientific societies (Royal Society, French Academy, Berlin Academy) barred female members.
2. Women's discoveries were ignored or credited to their male relatives.
This is a structural inequality inside the Scientific Revolution — the promise of
"reason" and "objectivity" simply wasn't kept for women.

AP may ask: did the Scientific Revolution make knowledge more "objective"?
Winckelmann's case shows: data itself can be objective, but **whose discovery gets recognized**
was never objective.`,
        },
      },
    },

    {
      id: 'copernicus-heliocentric',
      termCn: '哥白尼 / 日心说',
      termEn: 'Copernicus / Heliocentric Model',
      defCn: '日心说（heliocentric model）认为太阳是宇宙的中心，地球和其他行星都绕太阳转。哥白尼1543年在《天体运行论》里第一次把这个想法做成了完整的数学系统，是科学革命的起点。',
      defEn: 'The heliocentric model says the Sun is the center of the universe, with Earth and other planets orbiting it. Copernicus built the first complete mathematical version of this idea in his 1543 book — marking the start of the Scientific Revolution.',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'newton', nodeId: 'newton-N2', context: '牛顿在剑桥读到哥白尼，称其为"推翻天空秩序的人"' },
        ],
      },
      standaloneText: {
        cn: `Nicolaus Copernicus（哥白尼，1473-1543），波兰天主教神父兼天文学家。

1543年，他在去世那一年出版了《天体运行论》
（De revolutionibus orbium coelestium，英文叫 On the Revolutions of the Celestial Spheres）。
这本书提出了一个在当时极其危险的观点：**太阳，不是地球，才是宇宙的中心。**

在他之前，**地心说**（geocentric model）已经统治了一千多年——
这是古希腊学者 Ptolemy（托勒密）在公元2世纪建立的体系。它说：
地球是宇宙中心，太阳、月亮、行星都绕地球转。
教会把这套宇宙观写进神学：地球在中心 = 人类在上帝创造中占据最重要的位置。

哥白尼说：不对。**太阳在中心（heliocentric），地球和其他行星都绕太阳转。**

他为什么等到死才发表？两个原因：
1. 他知道这会惹麻烦——他把书的序言献给教皇，试图降低风险。
2. 他自己也不完全确定——他仍然认为行星轨道是完美圆形。这是错的，后来开普勒才纠正。

哥白尼的贡献是**打开了一扇门**——他让后来的伽利略、开普勒、牛顿
有了"可以挑战古老宇宙观"的起点。

**考点关键句**：哥白尼1543年《天体运行论》= **日心说的起点，也是科学革命的起点**。
地心说（Ptolemy）→ 日心说（Copernicus）是课纲必考的"宇宙观革命"。`,
        en: `Nicolaus Copernicus (1473-1543), Polish Catholic priest and astronomer.

In 1543 — the year he died — he published On the Revolutions of the Celestial Spheres
(De revolutionibus orbium coelestium). The book proposed something extremely dangerous
at the time: **the Sun, not Earth, is the center of the universe.**

Before him, the **geocentric model** had ruled for over a thousand years — a system
built by Greek scholar Ptolemy in the 2nd century CE. It said:
Earth is the center of the universe, with the Sun, Moon, and planets orbiting it.
The Church wove this into theology: Earth at center = humanity holds the most important
place in God's creation.

Copernicus said: wrong. **The Sun is at the center (heliocentric), and Earth
and the other planets orbit it.**

Why did he wait until death to publish? Two reasons:
1. He knew it would cause trouble — he dedicated the preface to the Pope to reduce the risk.
2. He wasn't fully confident himself — he still assumed orbits were perfect circles. Kepler later corrected that.

Copernicus's contribution was **opening a door** — he gave Galileo, Kepler, and Newton
a starting point: the idea that the ancient cosmic order could be challenged.

**Key exam sentence:** Copernicus's 1543 De Revolutionibus = **the starting point of heliocentrism and of the Scientific Revolution**.
Geocentric (Ptolemy) → heliocentric (Copernicus) is the tested "cosmological revolution."`,
      },
      xiaoweiNote: {
        cn: `老师给了个超好的记忆口诀：**"Cope（哥白尼）让地球动起来了，1543"**。
选择题如果问"谁第一个提出日心说"，答案是 Copernicus，不是 Galileo——
伽利略是后来**用望远镜观测证明了**哥白尼的想法，他不是第一个提出的人。
这个区别很多同学搞混，记住：哥白尼=提出，伽利略=用望远镜证明。`,
        en: `Teacher gave a great mnemonic: **"Cope (Copernicus) made Earth move, 1543."**
On multiple choice, if the question asks "who first proposed heliocentrism," the answer is
Copernicus, NOT Galileo — Galileo later **proved** Copernicus's idea with telescopic observation.
Many students mix this up. Remember: Copernicus = proposed it; Galileo = proved it with the telescope.`,
      },
    },

    {
      id: 'galileo-church-conflict',
      termCn: '伽利略 / 与教会冲突',
      termEn: 'Galileo / Conflict with the Church',
      defCn: '伽利略（1564-1642）是意大利天文学家，用改进后的望远镜发现了支持日心说的证据。1633年他被教会的宗教裁判所（Inquisition）审判，被迫放弃日心说，终身软禁。他的案例是科学与宗教权威冲突的最经典例子。',
      defEn: 'Galileo (1564-1642) was an Italian astronomer who used an improved telescope to find evidence for heliocentrism. In 1633 he was tried by the Church\'s Inquisition, forced to renounce heliocentrism, and placed under house arrest for life. His case is the most famous example of science clashing with religious authority.',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'mersenne', nodeId: 'mersenne-N5', context: '梅森写信给伽利略，得知伽利略1633年被软禁' },
          { lens: 'mersenne', nodeId: 'mersenne-N8', context: '梅森秘密传阅被教会查禁的伽利略手稿' },
        ],
      },
      standaloneText: {
        cn: `Galileo Galilei（伽利略，1564-1642），意大利天文学家和物理学家。

**第一步：望远镜**
1609年，伽利略把荷兰发明的望远镜改良了10倍，对准了夜空。他看到了三件事：
1. 月亮表面有山脉和陨石坑——不是"完美的天球"。
2. 木星旁边有四颗卫星在绕木星转——说明不是所有天体都绕地球转！
3. 金星有像月亮一样的"相位变化"——只有绕太阳运行才会出现这种现象。

这三条观测直接支持了哥白尼的日心说。

**第二步：书与麻烦**
1632年，伽利略出版《关于两种世界体系的对话》
（Dialogue Concerning the Two Chief World Systems）。
他用对话体让支持地心说的角色（叫"Simplicio"，意思就是"笨蛋"）显得很蠢。
教皇之前还是他朋友，看出来被嘲讽了，大怒。

**第三步：审判**
1633年，伽利略被**宗教裁判所**（Inquisition）传唤到罗马审判——
罪名是"宣扬异端学说"（支持日心说违背圣经）。
他被迫公开放弃日心说，被判终身软禁在佛罗伦萨郊外。
注意：伽利略从未被判火刑——那个说法混淆了布鲁诺（Giordano Bruno）1600年被烧死一事，是错误流传。

传说他低头认罪后小声嘟囔："Eppur si muove"——"但它（地球）还是在动的。"
历史上无法证实，但这句话成了"科学不屈服于权威"的象征。

**考点关键句**：伽利略案（1633）= **科学 vs 宗教权威**的标志性对决，
是 AP World KC-4.5 和 CA HSS 7.7 最常考的具体案例。

补充：教会直到1992年才正式向伽利略道歉，比审判晚了359年。`,
        en: `Galileo Galilei (1564-1642), Italian astronomer and physicist.

**Step 1: The telescope**
In 1609, Galileo improved the Dutch-invented telescope by 10x and pointed it at the sky.
He saw three things:
1. Mountains and craters on the Moon's surface — not a "perfect celestial sphere."
2. Four moons orbiting Jupiter — meaning not everything in the universe orbits Earth!
3. Venus showing phases like the Moon — this only happens if it orbits the Sun.

These three observations directly supported Copernicus's heliocentric model.

**Step 2: The book and the trouble**
In 1632, Galileo published Dialogue Concerning the Two Chief World Systems.
He used a dialogue format where the character defending geocentrism is named "Simplicio"
(meaning "simpleton") and looks foolish throughout. The Pope — previously his friend —
recognized the mockery and was furious.

**Step 3: The trial**
In 1633, the **Inquisition** summoned Galileo to Rome on charges of "promoting heretical
doctrine" (supporting heliocentrism as contrary to Scripture). He was forced to publicly
renounce heliocentrism. He spent the rest of his life under house arrest outside Florence.
Note: Galileo was never sentenced to burning — that myth comes from confusion with
Giordano Bruno, who was burned in 1600.

Legend says that after bowing his head to recant, he muttered: "Eppur si muove" —
"And yet it moves." Historically unverifiable, but this phrase became the symbol of
"science refusing to submit to authority."

**Key exam sentence:** the Galileo Affair (1633) = the landmark clash of **science vs. religious authority**, and the most-tested specific case for AP KC-4.5 and CA HSS 7.7.

One more note: the Church didn't formally apologize to Galileo until 1992 — 359 years after the trial.`,
      },
      xiaoweiNote: {
        cn: `记忆法：**"伽利略 1633年被审判——用望远镜证明了哥白尼是对的，
但被迫说'我错了'"**。考试经常出"谁用望远镜支持了日心说"——答案是伽利略，
不是哥白尼（哥白尼那个年代还没望远镜）。

另外，"Eppur si muove"这个梗，老师说AP短答题里写进去会让阅卷老师加分——
前提是你能解释它为什么重要。意思是：即使被迫说"我错了"，科学事实不会因此改变。`,
        en: `Memory trick: **"Galileo, 1633 trial — telescope proved Copernicus right,
but was forced to say 'I was wrong.'"** Tests often ask "who used the telescope
to support heliocentrism" — the answer is Galileo, not Copernicus
(telescopes didn't exist in Copernicus's time).

Also: the "Eppur si muove" quote — teacher says using it in an AP short-answer
response impresses graders, as long as you explain why it matters: even if you're
forced to say "I was wrong," scientific facts don't change.`,
      },
    },

    {
      id: 'scientific-method',
      termCn: '科学方法 / 培根归纳法 / 笛卡尔演绎法',
      termEn: 'Scientific Method / Bacon Induction / Descartes Deduction',
      defCn: '科学方法是一套"怎么发现真相"的步骤：提出问题→形成假设→做实验→分析数据→得出结论。科学革命期间，培根强调用实验收集证据（归纳法），笛卡尔强调从确定的起点一步步推理（演绎法）。两者合起来奠定了现代科学的基础。',
      defEn: 'The scientific method is a set of steps for finding truth: question → hypothesis → experiment → data → conclusion. During the Scientific Revolution, Bacon stressed gathering evidence through experiment (induction), while Descartes stressed reasoning step by step from a certain starting point (deduction). Together they laid the foundation for modern science.',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'mersenne', nodeId: 'mersenne-N6', context: '梅森写信给笛卡尔讨论"方法论"，触发笛卡尔写《方法论》' },
        ],
      },
      standaloneText: {
        cn: `科学革命最重要的贡献之一不是某个具体发现——而是发明了一套**做科学的方法**。

**① 培根（Francis Bacon，1561-1626）和归纳法（inductive reasoning）**

英国哲学家培根在《新工具》（Novum Organum，1620）里说：
以前的学者只会读古希腊的书，然后推理——这叫演绎法，从原则推到结论。
但他说这不对，真正的知识要靠**归纳法**：
先做大量观察和实验，收集数据，再从数据里总结出规律。

口诀：**Bacon = 先观察，再总结**。（"培根先煎好了再看效果"）

**② 笛卡尔（René Descartes，1596-1650）和演绎法（deductive reasoning）**

法国哲学家笛卡尔在《方法论》（Discourse on the Method，1637）里说：
他要怀疑一切，直到找到一个不可能再怀疑的基础。
他找到的基础是：**"我思，故我在"**（Cogito, ergo sum，英文：I think, therefore I am）——
只要我在思考，我存在这件事就是确定的。

他的方法：先确立清晰的起点，再用数学式的逻辑一步步往前推——这叫**演绎法**。

口诀：**Descartes = 先确定原则，再推论**。（"笛卡尔先搞清楚规则再下棋"）

**③ 现代科学方法 = 培根 + 笛卡尔的结合**

今天学校教的科学方法（**提出问题 → 形成假设 → 做实验 → 分析数据 → 得出结论**）
其实是培根归纳和笛卡尔演绎的合体：
- 实验和数据收集 = 培根归纳
- 假设的逻辑推演 = 笛卡尔演绎

**考点关键句**：科学革命用**假设-实验-验证**的循环，取代了"引用亚里士多德/圣经就是正确"的老方法——这是人类认识世界方式的根本转变。`,
        en: `One of the Scientific Revolution's most important contributions wasn't any specific
discovery — it was inventing a **method for doing science.**

**① Francis Bacon (1561-1626) and inductive reasoning**

English philosopher Bacon wrote in Novum Organum (1620): previous scholars only read
ancient Greek books and reasoned from them — that's deduction, moving from principles
to conclusions. Wrong approach, Bacon said. Real knowledge requires **inductive reasoning**:
first run many observations and experiments, collect data, then pull patterns out of the data.

Mnemonic: **Bacon = observe first, summarize second.** ("Fry the bacon first, then see how it turned out.")

**② René Descartes (1596-1650) and deductive reasoning**

French philosopher Descartes wrote in Discourse on the Method (1637): he would doubt
everything until he found something he could not possibly doubt. What he found:
**"I think, therefore I am"** (Cogito, ergo sum) — as long as I'm thinking, my existence is certain.

His method: establish a clear starting point, then reason step by step with mathematical
logic — that's **deductive reasoning.**

Mnemonic: **Descartes = fix the principle first, then reason from it.**
("Descartes figures out the rules before playing the game.")

**③ Modern scientific method = Bacon + Descartes combined**

The scientific method you learn in school (**question → hypothesis → experiment → data → conclusion**)
is actually both fused together:
- Running experiments and collecting data = Bacon's induction
- Logical reasoning from your hypothesis = Descartes's deduction

**Key exam sentence:** the Scientific Revolution replaced "quoting Aristotle or Scripture = truth"
with the **hypothesis-experiment-verification** cycle — a fundamental shift in how
humans figure out what is true.`,
      },
      xiaoweiNote: {
        cn: `老师说这个考点在选择题里会出一段话，让你判断它是"培根式"还是"笛卡尔式"。
方法：
- "我做了实验，发现规律" → **培根归纳**
- "我从这个原理出发，推导出结论" → **笛卡尔演绎**

还有一个常考角度："科学方法最重要的特征是什么"——标准答案是**可重复验证**
（reproducibility）。意思是：别人也能重复你的实验，得到同样的结果，才算科学。`,
        en: `Teacher said this shows up on multiple choice as a passage to classify as
"Baconian" or "Cartesian." Here's the method:
- "I ran experiments and found a pattern" → **Bacon induction**
- "Starting from this principle, I logically derived a conclusion" → **Descartes deduction**

Another common test angle: "What is the most important feature of the scientific method?"
Standard answer: **reproducibility** — someone else can repeat your experiment and get
the same result. That's what makes it science, not just one person's opinion.`,
      },
    },

    {
      id: 'kepler-planetary-laws',
      termCn: '开普勒 / 行星运动三定律',
      termEn: 'Kepler / Three Laws of Planetary Motion',
      defCn: '开普勒（1571-1630）是德国天文学家，发现了行星运动的三条规律。最重要的一条：行星绕太阳的轨道是椭圆形（ellipse），不是圆形。这推翻了2000年来"天体轨道必须是完美圆形"的假设。',
      defEn: 'Kepler (1571-1630) was a German astronomer who discovered three laws describing how planets move. The most important: planetary orbits are ellipses, not circles — overturning a 2,000-year assumption about perfect circular orbits.',
      standardRef: ['AP World KC-4.5', 'CA HSS 7.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'newton', nodeId: 'newton-N4', context: '牛顿在剑桥笔记本上研究开普勒的三定律，发展出引力理论' },
        ],
      },
      standaloneText: {
        cn: `Johannes Kepler（开普勒，1571-1630），德国天文学家和数学家。

哥白尼说太阳在中心——但他的模型有一个问题：他认为行星轨道是完美圆形。
这个预测和实际观测数据对不上。开普勒拿到了他的老师第谷·布拉赫（Tycho Brahe）
积累20年的天文观测数据，用数学一遍遍算，算了几年，找到了真相。

**开普勒三大定律（1609-1619年发表）**：

**① 第一定律（椭圆轨道定律）**：
行星绕太阳的轨道是**椭圆形**（ellipse），太阳在椭圆的一个焦点上，不在正中心。
这打破了从古希腊沿用了2000年的假设："天体轨道必须是完美圆形"。

**② 第二定律（面积定律）**：
行星和太阳的连线在相等时间内扫过相等面积。
用大白话说：**离太阳近的时候，行星跑得快；离太阳远的时候，跑得慢**。
例子：地球在1月份离太阳最近，跑得最快——所以北半球冬天比夏天短一点点！

**③ 第三定律（周期定律）**：
简单说：**离太阳越远的行星，绕一圈越慢**。
例子：冥王星要248年才绕太阳一圈，水星只要88天。

开普勒和牛顿的关系：牛顿后来用万有引力定律**从数学上解释了为什么**开普勒三定律成立——
开普勒发现了规律，牛顿找到了背后的原因。这是科学革命的"接力"方式。

**考点关键句**：开普勒三定律推翻了"圆形轨道"假设，用**椭圆轨道**精确描述行星运动——
是日心说从"哲学主张"变成"数学证明"的关键一步。`,
        en: `Johannes Kepler (1571-1630), German astronomer and mathematician.

Copernicus said the Sun is at the center — but his model had a problem: he assumed
planetary orbits were perfect circles. That prediction didn't match the actual data.
Kepler obtained 20 years of observations from his mentor Tycho Brahe and spent years
doing mathematical calculations until he found the truth.

**Kepler's Three Laws of Planetary Motion (published 1609-1619):**

**① First Law (Law of Ellipses):**
Planets orbit the Sun in **ellipses**, with the Sun at one focus — not at the center.
This shattered a 2,000-year assumption held since ancient Greece: that celestial orbits
must be perfect circles.

**② Second Law (Law of Equal Areas):**
In plain terms: **planets move faster when close to the Sun and slower when far away.**
Example: Earth is closest to the Sun in January and moves fastest — that's why winter
in the Northern Hemisphere is slightly shorter than summer!

**③ Third Law (Law of Periods):**
In plain terms: **the farther a planet is from the Sun, the slower it completes one orbit.**
Example: Pluto takes 248 years to orbit the Sun once; Mercury takes only 88 days.

The Kepler-Newton connection: Newton later used the law of universal gravitation to
**mathematically explain why** Kepler's three laws hold — Kepler discovered the patterns,
Newton found the reason behind them. That's the "relay race" of the Scientific Revolution.

**Key exam sentence:** Kepler's three laws demolished the "circular orbit" assumption, using **elliptical orbits** to precisely describe planetary motion — the key step that turned heliocentric astronomy from "philosophical claim" to "mathematical proof."`,
      },
      xiaoweiNote: {
        cn: `7年级不用记三定律的公式，但要记住这三个关键词：
**椭圆（ellipse）、面积（area）、周期（period）**——对应三条定律。

考试里最常考第一定律——选择题会问"行星轨道是什么形状"，
答案是**椭圆（ellipse）**，不是圆。哥白尼说圆，开普勒纠正成椭圆——这个对比经常考。

记忆口诀：**"开普勒把圆改成椭圆，牛顿解释了为什么"**。`,
        en: `Grade 7 doesn't need the formulas — just memorize these three keywords:
**ellipse, area, period** — they match the three laws in order.

Tests most often ask about the First Law: "What shape is a planetary orbit?"
Answer: **ellipse**, not a circle.
Copernicus said circle; Kepler corrected it to ellipse — this contrast shows up a lot.

Mnemonic: **"Kepler changed circles to ellipses; Newton explained why."**`,
      },
    },

    {
      id: 'scientific-revolution-to-enlightenment',
      termCn: '科学革命→启蒙运动：同一套思路用在社会政治上',
      termEn: 'Scientific Revolution to Enlightenment: Same Questioning Applied to Society',
      defCn: '启蒙运动（约1680-1800）把科学革命的核心思路——"不接受权威，要求证据和理性"——用到了社会和政治上。启蒙哲学家用这套思路质问：君主的权力凭什么是合法的？教会的权威凭什么不能被质疑？',
      defEn: 'The Enlightenment (ca. 1680-1800) took the core idea of the Scientific Revolution — "don\'t accept authority, demand evidence and reason" — and applied it to society and government. Enlightenment thinkers asked: what makes a monarch\'s power legitimate? Why can\'t the Church\'s authority be questioned?',
      standardRef: ['AP World KC-4.5', 'AP World KC-5.3', 'CA HSS 7.7', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'mersenne', nodeId: 'mersenne-N6', context: '梅森与笛卡尔通信讨论"怀疑一切权威"的方法论' },
          { lens: 'newton', nodeId: 'newton-N10', context: '牛顿晚年被启蒙哲学家奉为"理性力量"的象征' },
        ],
      },
      standaloneText: {
        cn: `这张卡连接两门课：科学革命（约1500-1700）和启蒙运动（约1680-1800）。
AP World KC-4.5考科学革命，KC-5.3考启蒙运动——两者之间的因果关系，
是AP最爱考的"原因与结果"和"延续与变化"题型。

**核心逻辑：同一套思路，换了目标**

科学革命时期，笛卡尔说："我怀疑一切权威，直到找到不可推翻的基础。"
培根说："别引用权威，去做实验，让事实说话。"
伽利略被审判，但他坚持"地球还是在动"——用观测证据对抗宗教权威。

这套"不接受权威，要求证据和理性"的思路，17世纪被用来研究自然世界。
启蒙哲学家做了一件事：**把同一套思路用到了社会和政治上**。

**因果链（AP必背）**：

① 科学革命确立：自然世界由理性规律支配，人类能用理性发现这些规律。

② 启蒙哲学家推论：既然自然世界有理性规律，人类社会也应该有——
君主的权力、教会的权威、贵族的特权，不是"天然正确"的，应该用理性检验。

③ 洛克（John Locke）说：人生来有自然权利（生命、自由、财产）。
政府的权力来自被统治者同意。这是科学革命"用实验检验权威"的社会版本。

④ 孟德斯鸠（Montesquieu）研究了大量国家的政治制度，得出"三权分立"。
他在做的事，就是对政治制度做"科学分析"。

⑤ 美国《独立宣言》（1776）和法国《人权宣言》（1789）：
把启蒙运动的"自然权利+理性政府"变成了政治现实。

**关键对照（选择题高频）**：

科学革命怎么做 → 启蒙运动怎么用
- 观察/实验取代引用权威 → 理性质疑君主制和教会
- 普遍自然规律 → 普遍人权（natural rights）
- 哥白尼推翻宇宙中心论 → 启蒙推翻"君权神授"
- 伽利略被审判仍坚持证据 → 启蒙思想家批评宗教不宽容

**考点关键句**：启蒙运动不是从天而降的——它把科学革命的"用理性挑战权威"
从研究自然世界，迁移到批判社会政治秩序。同一套工具，不同的目标。`,
        en: `This card bridges two topics: the Scientific Revolution (ca. 1500-1700) and
the Enlightenment (ca. 1680-1800). AP World KC-4.5 tests the Scientific Revolution;
KC-5.3 tests the Enlightenment. The cause-and-effect link between them is exactly
what AP loves to test as "causation" and "continuity and change" questions.

**Core logic: same thinking, new target**

During the Scientific Revolution, Descartes said: "I doubt every accepted authority
until I find something unshakeable." Bacon said: "Stop quoting authorities — run
experiments, let the facts speak." Galileo was tried but held that "the Earth still
moves" — using observed evidence against religious authority.

This way of thinking — "don't accept authority, demand evidence and reason" — was
used on the natural world in the 17th century. Enlightenment philosophers did one thing:
**they applied the same thinking to society and government.**

**The cause-and-effect chain (AP must-memorize):**

① The Scientific Revolution established: the natural world is governed by rational laws
that human reason can discover.

② Enlightenment philosophers reasoned: if the natural world has rational laws, human
society should too — a monarch's power, the Church's authority, the nobility's privileges
are not "naturally correct." They should be tested by reason.

③ John Locke said: people are born with natural rights (life, liberty, property).
Government power comes from the consent of the governed. This is the social-political
version of the Scientific Revolution's "test authority with experiment."

④ Montesquieu studied governments across many countries and derived the idea of
separation of powers — he was applying "scientific analysis" to political systems.

⑤ The U.S. Declaration of Independence (1776) and France's Declaration of the Rights of Man (1789):
Enlightenment "natural rights + rational government" became political reality.

**Key concept comparison (high-frequency multiple choice):**

Scientific Revolution approach → Enlightenment application
- Observation/experiment replaces citing authority → Reason challenges monarchy and the Church
- Universal natural laws → Universal natural rights
- Copernicus overturns geocentrism → Enlightenment overturns divine-right monarchy
- Galileo faces trial but holds to evidence → Enlightenment thinkers criticize religious intolerance

**Key exam sentence:** the Enlightenment didn't appear out of nowhere — it moved the
Scientific Revolution's "challenge authority with reason" from studying the natural world
to criticizing the social and political order. Same tool, different target.`,
      },
      xiaoweiNote: {
        cn: `AP最爱出的因果题之一就是："科学革命怎么导致了启蒙运动？"
我的记法：**科学方法 = 用证据挑战权威。启蒙 = 把同一招用在国王和教会上。**

选择题常考：洛克的"自然权利"和牛顿的"自然规律"有什么共同的思维基础？
答案：两者都相信存在普遍的、用理性能发现的规律——人类不需要靠传统权威才能理解世界。

还有一个记忆钩子：孟德斯鸠写《论法的精神》时研究了大量国家的政治制度，
就像科学家做比较实验——他自己说受到了牛顿方法论的启发。这不是巧合。`,
        en: `One of AP's most common cause-and-effect questions: "How did the Scientific Revolution
lead to the Enlightenment?" My version: **scientific method = use evidence to challenge authority.
Enlightenment = apply that same move to kings and the Church.**

Multiple choice often asks: what shared thinking connects Locke's "natural rights" and Newton's
"natural laws"? Answer: both assume that universal, rationally discoverable principles exist,
and that humans don't need traditional authority to understand the world.

One more memory hook: Montesquieu wrote The Spirit of the Laws by studying political systems
across many countries, like a scientist running comparative experiments. He said himself that
Newton's methodology inspired him. That's not a coincidence.`,
      },
    },

    {
      id: 'scientific-revolution-legacy',
      termCn: '科学革命的遗产与矛盾',
      termEn: 'Legacy and Contradictions of the Scientific Revolution',
      defCn: '科学革命最重要的遗产不是某个具体发现，而是改变了"怎么知道一件事是真的"：从"因为权威这么说"变成"因为实验证明了"。但它也有内部矛盾：科学学会系统性排除女性，而它的主要人物——比如牛顿——同时相信炼金术和宗教。',
      defEn: 'The Scientific Revolution\'s most important legacy was changing how we know something is true — from "because an authority said so" to "because experiments proved it." But it also had contradictions: scientific societies systematically excluded women, and its leading figures — like Newton — still believed in alchemy and religion.',
      standardRef: ['AP World KC-4.5', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'all three story lines',
        nodeIds: ['newton-N12', 'mersenne-N10', 'winckelmann-N10'],
        xiaoweiNote: {
          cn: `三条故事线加在一起，让我看到了科学革命的全貌——不只是一张"天才名单"。

**科学革命真正改变的东西**：
它让"凭什么相信这个"这个问题的答案，从"因为亚里士多德说的"/"因为圣经上说的"
变成了"因为实验证明了"/"因为数学推导出来了"。
这不只是天文学的进步，而是**人类认识世界方式的根本转变**。

**科学革命的内部矛盾**（AP分析题高频素材）：
1. 牛顿同时做炼金术、研究圣经密码——科学革命的关键人物并没有放弃宗教，
   他们是**新旧框架之间的过渡人物**。
2. 各大科学学会宣扬"理性客观"，却系统性地排除女性——
   温克尔曼（德国女天文学家，发现彗星，被柏林科学院拒绝署名）的案例就是证明。
3. 科学方法强调"观察事实"，但"谁来做观察"、"谁的结论被记录"
   从来都不是客观的社会过程。

这不是说科学革命是骗局——是说它的"理性"和"客观"承诺，
在当时对所有人实现的程度并不平等，就像启蒙运动的"自然权利"一样。

考试写分析题的框架：
1. 承认科学革命的贡献：用实验取代了引用权威。
2. 列出具体成就：哥白尼日心说、伽利略望远镜、开普勒椭圆轨道、牛顿万有引力。
3. 指出内部矛盾：女性被排除、牛顿炼金术、宗教审判。
4. 结论：科学革命开启了一个**未完成的项目**——它发明了追求客观的工具，
   但没有自动保证这个工具被所有人平等使用。`,
          en: `The three story lines together let me see the full picture of the Scientific
Revolution — not just a "list of geniuses."

**What the Scientific Revolution actually changed:**
It shifted the answer to "why should we believe this?" from
"because Aristotle said so" / "because the Bible says so"
to "because experiments proved it" / "because mathematics derived it."
This isn't just progress in astronomy — it's a **fundamental shift in how humans know things.**

**Internal contradictions of the Scientific Revolution** (high-frequency AP analysis material):
1. Newton practiced alchemy and decoded Bible prophecy at the same time — the key figures
   didn't abandon religion. They were **transitional people between old and new frameworks.**
2. Scientific societies preached "rational objectivity" but systematically excluded women —
   Winckelmann's case (German female astronomer, discovered a comet, denied credit by the
   Berlin Academy) proves this.
3. The scientific method emphasizes "observing facts," but "who gets to observe" and
   "whose conclusions get recorded" were never an objective social process.

This doesn't mean the Scientific Revolution was a fraud — it means its promises of
"reason" and "objectivity" were not realized equally for everyone at the time,
just like the Enlightenment's "natural rights."

Essay framework for analysis questions:
1. Acknowledge the contribution: experiment replaced citing authority.
2. List specific achievements: Copernicus heliocentrism, Galileo telescope,
   Kepler ellipses, Newton gravity.
3. Note the contradictions: women excluded, Newton's alchemy, the Inquisition trial.
4. Conclusion: the Scientific Revolution launched an **unfinished project** — it invented
   tools for pursuing objectivity, but didn't automatically guarantee equal access
   to those tools for everyone.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `科学革命常被描述为"科学打败了宗教"——但牛顿一生花了大量时间研究炼金术和圣经预言；
哥白尼自己是天主教神父，把《天体运行论》献给了教皇。

你怎么看"科学 vs 宗教"这个说法？科学革命的这些科学家们，
是在"对抗宗教"，还是在做别的什么更复杂的事？`,
      en: `The Scientific Revolution is often described as "science defeating religion" —
but Newton spent enormous time on alchemy and biblical prophecy;
Copernicus was a Catholic priest who dedicated his book to the Pope.

What do you think of the "science vs. religion" framing?
Were the scientists of the Scientific Revolution "opposing religion,"
or were they doing something more complicated?`,
      hintCn: `两个角度：
① 伽利略的审判（1633年）是真实的冲突——新科学确实威胁到了教会权威。
② 但牛顿认为自己是在理解上帝的创造。他的引力定律不是攻击上帝，
而是用数学描述"上帝设计宇宙的规律"。

所以科学革命不是一场有意识的"反宗教运动"——它只是想更准确地描述世界，
但它的方法（用实验和数学检验一切）最终和宗教权威产生了摩擦。

进一步想一想：今天还有"科学 vs 权威"的摩擦吗？
（气候科学、进化论在某些地区的争议）
这些跟伽利略的案子有什么相似？又有什么不同？`,
      hintEn: `Two angles:
① Galileo's trial (1633) was a real conflict — new science genuinely threatened Church authority.
② But Newton believed he was understanding God's creation. His law of gravitation wasn't an
attack on God — it was a mathematical description of "the rules God used to design the universe."

So the Scientific Revolution wasn't a conscious "anti-religion movement" — it just wanted
to describe the world more accurately, but its method (testing everything with experiment
and math) eventually clashed with religious authority.

Dig deeper: are there still "science vs. authority" frictions today?
(Climate science, evolution in certain communities.)
What do those share with Galileo's case? What's different?`,
      conceptsActivated: ['newton-gravity', 'galileo-church-conflict', 'copernicus-heliocentric'],
    },
    {
      id: 'q2',
      cn: `玛丽亚·温克尔曼1702年发现了一颗新彗星，但那个发现被归功于她的丈夫，
因为柏林科学院不接受女性会员。

科学方法的核心原则是"观察到的事实就是事实，跟观察者是谁无关"——
但温克尔曼的故事说明，在实践中"谁的观察被承认"这个问题并不中立。

你认为今天的科学机构在这件事上做得更好了吗？用你知道的例子来支持你的观点。`,
      en: `Maria Winckelmann discovered a new comet in 1702, but the discovery was credited
to her husband because the Berlin Academy of Sciences didn't accept female members.

The core principle of the scientific method is "an observed fact is a fact,
regardless of who made the observation" — but Winckelmann's story shows that
in practice, the question of "whose observation gets recognized" is not neutral.

Do you think today's scientific institutions handle this better?
Use an example you know to support your view.`,
      hintCn: `两个方向都可以论证：
① 更好了：诺贝尔奖越来越多地颁给女性科学家（比如屠呦呦2015年）；
   很多大学和研究机构现在有专门的多元化项目。
② 还没完全解决：2022年的研究显示，同样质量的论文，第一作者是女性的引用量
   比第一作者是男性的少约10%。"马太效应"（已经有名气的人更容易得到认可）依然存在。

这道题没有"标准答案"——重要的是用具体事实支持你的立场，
同时承认对方的观点也有根据。`,
      hintEn: `You can argue in both directions:
① Better now: the Nobel Prize has increasingly gone to female scientists (Tu Youyou in 2015);
   many universities have dedicated diversity programs.
② Not fully resolved: 2022 research found that papers with female first authors receive about
   10% fewer citations than those with male first authors at the same quality level.
   The "Matthew effect" (already-famous people get more credit) still exists.

There's no "standard answer" — what matters is supporting your position with specific
facts while acknowledging the other side has evidence too.`,
      conceptsActivated: ['women-in-science-barriers', 'scientific-revolution-legacy'],
    },
    {
      id: 'q3',
      cn: `哥白尼和伽利略那个年代，"什么是真理"这个问题是由教会权威来裁定的。
伽利略因为主张"地球绕太阳转"被裁定为"异端"，被迫公开认罪。

今天，"什么是真理"由谁来裁定？
如果伽利略活在今天，他可能面对的阻力是什么形式的？`,
      en: `In Copernicus's and Galileo's time, the question of "what is truth" was
decided by Church authority. Galileo was declared a heretic for claiming
"Earth orbits the Sun" and was forced to publicly recant.

Today, who decides "what is truth"?
If Galileo were alive today, what form might the resistance he faces take?`,
      hintCn: `几个值得想的角度：
- 今天"裁定真理"的机构有：同行评审期刊、政府资助机构、
  科技公司（算法决定什么内容被传播）、社交媒体舆论。
- 今天的"伽利略时刻"是什么样子？一个科学家发表了主流学界不接受的发现，会遭遇什么？
  可以想想1980年代 Barry Marshall 喝幽门螺旋杆菌，证明胃溃疡是细菌感染——
  被主流嘲笑多年，后来得了诺贝尔奖。
- 关键问题：裁定真理的机构从"宗教权威"换成"同行评审"，
  是变得更客观了，还是只是换了一种权威？
  同行评审系统本身有没有可能压制正确但非主流的观点？`,
      hintEn: `Some angles worth exploring:
- Institutions that "decide truth" today include: peer-reviewed journals,
  government funding bodies, tech companies (whose algorithms decide what content spreads),
  and social media opinion.
- What would a "Galileo moment" look like today? A scientist publishes a finding
  the mainstream rejects — what happens? Think about Barry Marshall in the 1980s,
  who drank H. pylori to prove stomach ulcers are bacterial — mocked for years,
  then won the Nobel Prize.
- Key question: did switching the "truth-deciding authority" from the Church to peer review
  make us more objective, or just exchange one type of authority for another?
  Can the peer review system itself suppress correct-but-non-mainstream ideas?`,
      conceptsActivated: ['copernicus-heliocentric', 'galileo-church-conflict', 'scientific-method', 'scientific-revolution-legacy'],
    },
  ],
};

export default notebook;
