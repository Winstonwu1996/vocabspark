// ─── 同伴笔记本架构 v1 · Renaissance 1500 ────────────────────────
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
//   - storyboard 提供情感锚点（Lorenzo / Savonarola / Lucia 三条线）
//   - notebook 提供考点闭环（人文主义定义 / Michelangelo / 透视法 / Leonardo 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-4.6
//   - California HSS 7.8.1, 7.8.3
//   - 弥补 renaissance-1500 课纲覆盖率从 ~58% → ~95%
//
// schemaVersion: 1 · notebookVersion: renaissance-1500-v1

export var notebook = {
  topicId: 'renaissance-1500',
  topicNameCn: '文艺复兴',
  topicNameEn: 'The Renaissance',
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
    cn: `今天我们要学文艺复兴（Renaissance，大约 1300s–1600s）。

老师说这个单元的关键词是"以人为中心"——听起来很抽象，但读完今天的三个故事，
我会知道这具体是什么意思。

先把老师要求背的人名和术语记下来：

**人名：**
洛伦佐·德·美第奇（Lorenzo de' Medici）——佛罗伦萨实际统治者、艺术赞助人
米开朗基罗（Michelangelo）——雕塑家、画家
莱昂纳多·达·芬奇（Leonardo da Vinci）——全才艺术家兼科学家
彼特拉克（Petrarch）——人文主义之父
拉斐尔（Raphael）——文艺复兴绘画三巨头之一

**术语：**
人文主义（Humanism）、赞助制度（patronage）、透视法（linear perspective）、
sfumato（晕涂法）、"Renaissance Man"（文艺复兴式人才）

老师强调："不要只记作品名，要记'这个人/这件作品改变了什么，为什么是突破'。"

我把这句话写在笔记本第一页，等下读三个视角——洛伦佐、萨佛纳罗拉、卢西亚——
读完再回来对照这张单子，看我能不能解释这些词。`,
    en: `Today we're learning about the Renaissance (roughly 1300s–1600s).

My teacher said the key phrase for this unit is "human-centered" — sounds abstract,
but after reading today's three stories, I'll know exactly what that means.

Let me write down the names and terms teacher wants us to know:

**People:**
Lorenzo de' Medici — ruler of Florence, art patron
Michelangelo — sculptor and painter
Leonardo da Vinci — artist and scientist
Petrarch — "father of humanism"
Raphael — one of the three great Renaissance painters

**Terms:**
Humanism, patronage, linear perspective, sfumato, "Renaissance Man"

Teacher said: "Don't just memorize artwork titles — memorize 'what did this
person or work change, and why was it a breakthrough?'"

I wrote that on the first page of my notebook. Now I'll read the three stories
(Lorenzo, Savonarola, Lucia) and come back to check whether I can explain these.`,
    keyTerms: [
      { cn: '人文主义', en: 'Humanism' },
      { cn: '赞助制度', en: 'patronage' },
      { cn: '线性透视法', en: 'linear perspective' },
      { cn: '晕涂法', en: 'sfumato' },
      { cn: '文艺复兴式人才', en: 'Renaissance Man' },
      { cn: '印刷机', en: 'printing press' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '洛伦佐·德·美第奇',
        nameEn: "Lorenzo de' Medici",
        ipa: "/ˈloʊrɛntso deɪ ˈmɛdɪtʃi/",
        roleCn: '佛罗伦萨实际统治者·艺术赞助人',
        roleEn: 'de facto ruler of Florence, patron of the arts',
        mustKnow: true,
        audioKey: 'lorenzo-de-medici',
      },
      {
        nameCn: '米开朗基罗',
        nameEn: 'Michelangelo',
        ipa: '/ˌmaɪkəlˈændʒəloʊ/',
        roleCn: '雕塑家兼画家，大卫像+西斯廷天顶画作者',
        roleEn: 'sculptor and painter, creator of David and Sistine Chapel ceiling',
        mustKnow: true,
        audioKey: 'michelangelo',
      },
      {
        nameCn: '莱昂纳多·达·芬奇',
        nameEn: 'Leonardo da Vinci',
        ipa: '/liːəˈnɑːrdoʊ də ˈvɪntʃi/',
        roleCn: '文艺复兴式全才，蒙娜丽莎+最后的晚餐作者',
        roleEn: 'Renaissance Man, creator of Mona Lisa and The Last Supper',
        mustKnow: true,
        audioKey: 'leonardo-da-vinci',
      },
      {
        nameCn: '彼特拉克',
        nameEn: 'Petrarch',
        ipa: '/ˈpiːtrɑːrk/',
        roleCn: '人文主义之父，首倡以人为中心的学问',
        roleEn: 'father of humanism, pioneer of human-centered scholarship',
        mustKnow: true,
        audioKey: 'petrarch',
      },
      {
        nameCn: '拉斐尔',
        nameEn: 'Raphael',
        ipa: '/ˈræfiəl/',
        roleCn: '文艺复兴画家，《雅典学院》作者',
        roleEn: 'Renaissance painter, creator of The School of Athens',
        mustKnow: true,
        audioKey: 'raphael',
      },
      {
        nameCn: '萨佛纳罗拉',
        nameEn: 'Girolamo Savonarola',
        ipa: '/dʒɪˈrɒləmoʊ ˌsævəˈnærələ/',
        roleCn: '多明我会修士，1497年篝火焚书主导者',
        roleEn: 'Dominican friar, led the 1497 Bonfire of the Vanities',
        mustKnow: false,
        audioKey: 'savonarola',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：美第奇赞助制度（storyAnchor covered） ──────────
    {
      id: 'medici-patronage',
      termCn: '美第奇家族 / 赞助制度',
      termEn: "Medici Family / Patronage System",
      standardRef: ['AP World KC-4.6', 'CA HSS 7.8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'lorenzo-perpetrator',
        nodeIds: ['lorenzo-N2', 'lorenzo-N5', 'lorenzo-N8'],
        xiaoweiNote: {
          cn: `这个在洛伦佐视角里讲得很清楚了。

核心逻辑：美第奇家族靠银行业积累财富（他们是教皇的银行家！），
然后用这笔钱**赞助（patronage）**艺术家——也就是给薪水、提供工作室、包吃包住，
换取艺术家为美第奇家族创作作品。

赞助制度为什么重要？因为在这之前，绝大部分艺术品都是教会订制的——教堂壁画、圣母像、圣经场景。
当一个有钱的家族开始资助"非宗教主题"的艺术，艺术家才有自由画古希腊神话、画世俗人物、画真实的人体。
这就是文艺复兴从"神的世界"转向"人的世界"的物质基础。

**考点关键句**：美第奇家族是文艺复兴赞助制度的典范——没有赞助人，
就没有波提切利（Botticelli）的《春》和《维纳斯的诞生》，
也没有米开朗基罗早期的雕塑练习机会。

注意：美第奇是银行家，不是国王——他们的权力来自财富和人脉，不是世袭头衔。
Pazzi 阴谋（1478 年）试图刺杀洛伦佐，正是因为其他家族眼红这种"非正式统治权"。`,
          en: `The Lorenzo lens covers this thoroughly.

Core logic: the Medici family accumulated wealth through banking (they were the pope's bankers!)
then used that wealth to **patronize** artists — paying salaries, providing studios,
covering living costs, in exchange for artwork celebrating the Medici.

Why does patronage matter? Before this, almost all art was commissioned by the Church —
chapel frescoes, Madonna icons, biblical scenes. When a wealthy family began funding
"non-religious" themes, artists gained the freedom to paint Greek mythology, secular
subjects, and realistic human bodies. This is the material foundation of the
Renaissance's shift from "God's world" to "human world."

**Key exam sentence**: The Medici family is the model of Renaissance patronage —
without patrons, there's no Botticelli's Primavera and Birth of Venus, and no opportunity
for Michelangelo's early sculpting practice.

Note: the Medici were bankers, not kings — their power came from wealth and connections,
not hereditary titles. The Pazzi Conspiracy (1478) tried to assassinate Lorenzo precisely
because rival families resented this "informal rule."`,
        },
      },
    },

    // ── 卡 2：Pazzi 阴谋 / 1478（storyAnchor covered） ───────
    {
      id: 'pazzi-conspiracy',
      termCn: 'Pazzi 阴谋 1478',
      termEn: 'Pazzi Conspiracy 1478',
      standardRef: ['AP World KC-4.6', 'CA HSS 7.8.1'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'lorenzo-perpetrator',
        nodeIds: ['lorenzo-N6', 'lorenzo-N7'],
        xiaoweiNote: {
          cn: `洛伦佐视角第 6、7 节讲过了——1478 年 4 月 26 日，佛罗伦萨大教堂弥撒期间，
Pazzi 家族刺客刺杀洛伦佐兄弟。弟弟朱利亚诺当场死亡，洛伦佐受伤逃脱。

为什么考这个？因为它展示了文艺复兴时期意大利城邦政治的残酷现实：
表面是艺术和学术的黄金时代，背后是家族之间你死我活的权力斗争。

考点关键句：Pazzi 阴谋由教皇西克斯图斯四世（Pope Sixtus IV）暗中支持——
连罗马教廷都卷入了佛罗伦萨的家族厮杀，说明文艺复兴的"文雅外衣"下是赤裸裸的政治。

AP DBQ 可能用这个作为"赞助制度代价"的例子：
洛伦佐资助艺术，同时也是一个铁腕统治者，他的政敌付出了生命的代价。`,
          en: `Covered in the Lorenzo lens, nodes 6 and 7 — April 26, 1478, during Mass at
Florence Cathedral, Pazzi family assassins stabbed Lorenzo and his brother.
Brother Giuliano died; Lorenzo was wounded but escaped.

Why does this appear on tests? It shows the brutal reality of Renaissance Italian
city-state politics: on the surface, a golden age of art and scholarship;
underneath, deadly power struggles between families.

**Key exam sentence**: The Pazzi Conspiracy was backed by Pope Sixtus IV —
even the papacy was entangled in Florentine family violence, showing that beneath
the Renaissance's "cultured exterior" was naked politics.

AP DBQ might use this as an example of "the cost of the patronage system":
Lorenzo funded arts while also ruling with an iron fist, and his political
enemies paid with their lives.`,
        },
      },
    },

    // ── 卡 3：人文主义定义（standaloneText） ─────────────────
    {
      id: 'humanism-definition',
      termCn: '人文主义 / Humanism',
      termEn: 'Humanism',
      standardRef: ['AP World KC-4.6', 'CA HSS 7.8.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'lorenzo-perpetrator', nodeId: 'lorenzo-N3', context: '洛伦佐在书房讨论 Petrarch 对古典文本的复原' },
          { lens: 'savonarola-mediator', nodeId: 'savonarola-N4', context: '萨佛纳罗拉怒斥人文主义是异端' },
        ],
      },
      standaloneText: {
        cn: `**人文主义（Humanism）**是文艺复兴的核心思想，也是 AP 和 CA 州考最高频考点。

先说一个误区：人文主义不是"不信上帝"。大多数人文主义者还是基督徒，只是他们认为：
**研究人类的历史、语言、文学和成就，和信仰上帝同样重要**——甚至更紧迫，因为教会已经
研究了一千年神学，但古希腊罗马的智慧几乎被中世纪遗忘了。

**彼特拉克（Petrarch，1304-1374）**——这个人必须记。他被称为"人文主义之父"，
因为他是第一个系统整理古罗马文学（尤其是西塞罗 Cicero 的书信）、
并且主张"从古人的写作中学习怎么做人"的学者。

他的名言方向是：**人是万物的尺度（Man is the measure of all things）**——
这句话实际上是古希腊普罗泰戈拉（Protagoras）说的，但文艺复兴人文主义者把它当成旗帜。
意思是：评价一件事好不好，标准是"对人类有没有价值"，而不是"神允不允许"。

人文主义的四个特征，考试经常出选择题：
1. **以人为中心**（human-centered）：关注人的能力、尊严、潜力，而不只是灵魂得救
2. **复兴古典**（classical revival）：重新挖掘古希腊罗马的文学、哲学、艺术
3. **世俗主题**（secular subjects）：艺术和学术可以讨论非宗教的话题
4. **个人成就**（individual achievement）：鼓励一个人在文学、艺术、政治上都有建树——这就是后来"Renaissance Man"概念的来源

故事连接：洛伦佐视角里，他资助的学者在"柏拉图学院"（Platonic Academy）
翻译古希腊文本，就是人文主义运动的现场。萨佛纳罗拉视角里，他把人文主义书籍
扔进篝火——因为他认为"以人为中心"就是把上帝挤到一边。`,
        en: `**Humanism** is the core idea of the Renaissance — and the highest-frequency
exam topic in both AP and CA state tests.

First, clear up a misconception: humanism does not mean "rejecting God."
Most humanists were still Christians. Their claim was: **studying human history,
language, literature, and achievement matters just as much as theology** —
and was more urgent, because the Church had studied theology for a thousand years,
while the wisdom of ancient Greece and Rome had been nearly forgotten in the Middle Ages.

**Petrarch (1304-1374)** — this name is required. He is called the "father of humanism"
because he was the first to systematically collect ancient Roman literature
(especially Cicero's letters) and argue "we should learn how to be human from
what the ancients wrote."

The phrase associated with his era: **"Man is the measure of all things"** —
actually said by ancient Greek Protagoras, but Renaissance humanists adopted it
as their banner. The meaning: to evaluate whether something is good, the standard
is "does it have value for humans," not "does God permit it."

Four hallmarks of humanism — multiple choice loves these:
1. **Human-centered**: focus on human ability, dignity, and potential, not just saving souls
2. **Classical revival**: rediscovering ancient Greek and Roman literature, philosophy, art
3. **Secular subjects**: art and scholarship can address non-religious themes
4. **Individual achievement**: one person can excel in literature, art, and politics —
   this is where "Renaissance Man" comes from

Story link: in the Lorenzo lens, scholars at the Platonic Academy translate ancient
Greek texts — that's humanism in action. In the Savonarola lens, he throws humanist
books into the bonfire — because he believes "centering humans" means pushing God aside.`,
      },
      xiaoweiNote: {
        cn: `老师说"人文主义"是 7 年级历史**第一高频选择题**，
几乎每年都考。我的记忆口诀：

**神→人**：中世纪是"以神为中心"，文艺复兴是"以人为中心"——就这一个转变。

记住彼特拉克 = 人文主义之父 = 挖古罗马文学的那个人。
不需要背他的作品名，但要记他**做了什么**：找回了古人的智慧。`,
        en: `Teacher said "humanism" is the single most-tested multiple choice topic
in 7th grade history — almost every year.

My mnemonic: **God → Human**. Middle Ages = God-centered; Renaissance = Human-centered.
Just that one shift.

Remember: Petrarch = father of humanism = the guy who dug up ancient Roman literature.
Don't need to memorize his book titles, just what **he did**: recovered ancient wisdom.`,
      },
    },

    // ── 卡 4：人文主义 vs 宗教保守主义（storyAnchor covered） ─
    {
      id: 'humanism-vs-religion',
      termCn: '人文主义 vs 宗教保守主义',
      termEn: 'Humanism vs. Religious Conservatism',
      standardRef: ['AP World KC-4.6', 'CA HSS 7.8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'savonarola-mediator',
        nodeIds: ['savonarola-N3', 'savonarola-N7', 'savonarola-N9'],
        xiaoweiNote: {
          cn: `萨佛纳罗拉视角整条线就是讲这个张力的。

关键事件：**1497 年篝火焚书（Bonfire of the Vanities）**——
萨佛纳罗拉在佛罗伦萨广场点起巨型篝火，烧掉镜子、化妆品、扑克牌、
世俗绘画、人文主义书籍。他认为这些东西让人远离上帝。

但是要注意 careful framing：萨佛纳罗拉不只是"坏人"。他也批评美第奇家族的腐败，
批评教皇的奢靡，批评穷人被剥削——在那个年代有很多普通佛罗伦萨人真心支持他。
他最后被烧死（1498 年），是因为教皇亚历山大六世（Alexander VI）把他视为威胁。

**考点关键句**：萨佛纳罗拉代表了文艺复兴内部的反力——
不是所有人都欢迎"以人为中心"，传统宗教力量对人文主义的挑战贯穿整个文艺复兴时期。

这个张力后来演变成**宗教改革（Protestant Reformation）**——马丁·路德（Luther）
1517 年的批评和萨佛纳罗拉的批评有相似的起点：教会太腐败，太世俗化。`,
          en: `The Savonarola lens is entirely about this tension.

Key event: **1497 Bonfire of the Vanities** — Savonarola lit a massive bonfire in
Florence's central square, burning mirrors, cosmetics, playing cards, secular
paintings, and humanist books. He believed these things led people away from God.

Careful framing: Savonarola wasn't just a "villain." He also criticized Medici
corruption, papal luxury, and the exploitation of the poor — many ordinary
Florentines genuinely supported him. He was ultimately burned at the stake (1498)
because Pope Alexander VI saw him as a threat.

**Key exam sentence**: Savonarola represents the counter-force within the Renaissance
itself — not everyone welcomed "human-centered" thinking; religious traditionalists
challenged humanism throughout the Renaissance.

This tension later evolved into the **Protestant Reformation** — Luther's 1517 critiques
had a similar starting point as Savonarola's: the Church was too corrupt, too worldly.`,
        },
      },
    },

    // ── 卡 5：Michelangelo 代表作（standaloneText） ───────────
    {
      id: 'michelangelo-works',
      termCn: '米开朗基罗 / 大卫像 + 西斯廷教堂',
      termEn: 'Michelangelo / David + Sistine Chapel',
      standardRef: ['CA HSS 7.8.3', 'AP World KC-4.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'lorenzo-perpetrator', nodeId: 'lorenzo-N5', context: '洛伦佐资助年轻米开朗基罗在雕塑花园练习' },
        ],
      },
      standaloneText: {
        cn: `**米开朗基罗（Michelangelo，1475-1564）**——必考人物，CA HSS 7.8.3 明确要求。

他有两件作品你必须能说出来，出题必出：

**第一件：大卫像（David，1501-1504）**
- 地点：佛罗伦萨，今藏佛罗伦萨美术学院（Galleria dell'Accademia）
- 材质：整块白色卡拉拉大理石，高 5.17 米
- 内容：圣经人物大卫，刺杀巨人歌利亚（Goliath）之前一刻，手持投石器，眼神专注
- 为什么是突破：中世纪雕塑大多是宗教圣像，形象僵硬。大卫像展现了**真实人体的肌肉、
  比例、情绪张力**——这是人文主义"人的尊严"的最直接视觉表达。
- 考点：大卫像完成于 **1504 年**（不是 1500 年，不要记错），当时米开朗基罗 29 岁。

**第二件：西斯廷教堂天顶画（Sistine Chapel ceiling，1508-1512）**
- 地点：梵蒂冈（Vatican），教皇礼拜堂
- 委托人：教皇儒略二世（Pope Julius II）
- 内容：《创世记》九个场景，加上先知、女预言家、以色列祖先——总共约 300 个人物
- 最著名的局部：**《创造亚当》（The Creation of Adam）**——上帝伸手，指尖与亚当的指尖
  几乎相触，象征神赐予人生命。这个画面今天仍然是世界上被复制最多的艺术图像之一。
- 工作条件：米开朗基罗仰面朝天躺在脚手架上作画，历时四年，颈椎受损。
  他后来在信里写："这工作正在毁掉我。"
- 为什么是突破：为**宗教空间**创作了**人文主义式**的人体——神和人的手指相触，
  人的身体被刻画得和神一样壮美，这在一千年前的中世纪艺术里是不可想象的。

记忆口诀：**大卫 1504，西斯廷 1508–1512**——两个年份、两件作品、一个人。`,
        en: `**Michelangelo (1475-1564)** — required exam figure; CA HSS 7.8.3 specifies him.

Two works you must be able to name — both are tested:

**First: David (1501-1504)**
- Location: Florence; now in the Galleria dell'Accademia
- Material: single block of white Carrara marble, 5.17 meters tall
- Subject: the biblical David, the moment before he kills the giant Goliath —
  sling in hand, gaze focused
- Why it's a breakthrough: medieval sculpture was mostly rigid religious icons.
  David shows **realistic muscle, proportion, and emotional tension** — the most
  direct visual expression of humanism's "human dignity."
- Exam note: David was completed in **1504** (not 1500 — don't mix them up);
  Michelangelo was 29 years old.

**Second: Sistine Chapel ceiling (1508-1512)**
- Location: Vatican, the pope's private chapel
- Commissioner: Pope Julius II
- Content: nine scenes from Genesis, plus prophets, sibyls, and ancestors of Israel —
  roughly 300 figures total
- Most famous detail: **The Creation of Adam** — God's hand reaches toward Adam's,
  fingertips nearly touching, symbolizing the divine gift of life. This image is
  still one of the most reproduced artworks in the world.
- Working conditions: Michelangelo painted lying on his back on scaffolding for four years,
  damaging his neck. He later wrote in a letter: "This work is destroying me."
- Why it's a breakthrough: humanist-style human bodies in a **religious space** —
  God and human nearly touch; the human body is depicted as magnificent as the divine.
  Unimaginable in medieval art a thousand years earlier.

Mnemonic: **David 1504, Sistine 1508–1512** — two dates, two works, one person.`,
      },
      xiaoweiNote: {
        cn: `老师说 Michelangelo 的两件作品是州考**必考题**之一，绝对不能空。

我的双重记忆钩：
- **大卫** = 手持投石器 + **1504**（比西斯廷早一点）
- **西斯廷** = 仰天作画四年 + **"创造亚当"那幅**（上帝和人的指尖）

只要记住这两幅"打过广告"的作品，选择题里 Michelangelo 那道题就稳了。`,
        en: `Teacher said Michelangelo's two works are **definite state exam questions** —
never leave them blank.

My double memory hook:
- **David** = sling in hand + **1504** (slightly before Sistine)
- **Sistine** = four years painting on his back + **"Creation of Adam"** (God and human fingertips)

Memorize these two "famous-in-advertising" works and the Michelangelo multiple-choice
question is locked in.`,
      },
    },

    // ── 卡 6：透视法 & sfumato（standaloneText） ─────────────
    {
      id: 'perspective-sfumato',
      termCn: '线性透视法 & 晕涂法（sfumato）',
      termEn: 'Linear Perspective & Sfumato',
      standardRef: ['CA HSS 7.8', 'AP World KC-4.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'lorenzo-perpetrator', nodeId: 'lorenzo-N4', context: '洛伦佐赞助布鲁内列斯基设计圣母百花大教堂圆顶' },
          { lens: 'lucia-receiving', nodeId: 'lucia-N5', context: '卢西亚在新圣母大殿看到一幅透视法壁画，感到不寻常' },
        ],
      },
      standaloneText: {
        cn: `文艺复兴艺术技术有两项必考：**线性透视法**和**sfumato（晕涂法）**。

**线性透视法（Linear Perspective）**——布鲁内列斯基发明，阿尔贝蒂理论化

发明者：**菲利波·布鲁内列斯基（Filippo Brunelleschi，1377-1446）**，
佛罗伦萨建筑师，圣母百花大教堂（Duomo）圆顶的设计者。

线性透视法的核心原理：
- 设定一个**消失点（vanishing point）**——画面最深处的一个点
- 所有平行线向消失点汇聚——就像你站在铁路上往前看，两条铁轨越来越近
- 近处物体画大，远处物体画小，比例有数学公式

效果：画面产生真实的**三维深度感**，看的人觉得画里有空间可以走进去。

在透视法发明之前，中世纪绘画里的人物是"平铺"的——重要的人画大，不重要的人画小，
没有空间感可言。

**sfumato（晕涂法）**——达芬奇的发明

"sfumato"是意大利语"烟雾弥漫"（like smoke）的意思。

达芬奇的技法：用极薄的颜料层层叠加，让轮廓线**故意模糊**——
没有清晰的边界线，色彩和阴影在不知不觉中过渡。

效果：人物看起来像是真的有呼吸一样，皮肤有质感，表情有神秘感。
**蒙娜丽莎**（Mona Lisa）的微笑之所以"说不清楚是笑还是不笑"，
正是因为嘴角和脸颊的边界被 sfumato 处理得模糊不清。

两个技术一起记：
- **透视法** = 让画有**深度**（前后远近）
- **sfumato** = 让人有**呼吸感**（边缘模糊柔和）`,
        en: `Two Renaissance art techniques appear on every exam: **linear perspective** and **sfumato**.

**Linear Perspective** — invented by Brunelleschi, theorized by Alberti

Inventor: **Filippo Brunelleschi (1377-1446)**, Florentine architect and designer
of the Florence Cathedral dome (the Duomo).

Core principle:
- Set a single **vanishing point** — the deepest point of the picture
- All parallel lines converge toward the vanishing point — like railroad tracks
  appearing to meet in the distance
- Objects closer = drawn larger; objects farther = drawn smaller; ratios follow math

Effect: the painting creates a genuine sense of **three-dimensional depth** —
viewers feel as if they could walk into the picture.

Before linear perspective, medieval figures were "flat" — important figures were drawn
larger, less important figures smaller, with no spatial logic.

**Sfumato** — Leonardo da Vinci's invention

"Sfumato" is Italian for "like smoke" or "hazy."

Leonardo's technique: layer extremely thin paint coats so that outlines are
**deliberately blurred** — no sharp boundary lines; color and shadow transition
so gradually you can't see the shift.

Effect: figures appear as if they are actually breathing; skin has texture; expressions
carry mystery. The **Mona Lisa**'s smile seems neither clearly smiling nor not smiling
precisely because the corners of her mouth and cheeks are sfumato-blurred.

Remember the pair:
- **Perspective** = gives a painting **depth** (near and far)
- **Sfumato** = gives figures a **living quality** (soft, breathable edges)`,
      },
      xiaoweiNote: {
        cn: `这两个技术名词考试几乎必出一个。

记忆法：
- **透视法** → 想"消失点"→ 铁路交汇→ 深度感
- **sfumato** → 发音像"smoke"→ 蒙娜丽莎那神秘的微笑

如果选择题问"文艺复兴艺术和中世纪艺术最大的区别"，答案几乎一定涉及
**透视法带来的真实深度感**和**对人体的写实描绘**——这两点都和人文主义"以人为中心"直接挂钩。`,
        en: `One of these two technique terms appears on almost every test.

Memory trick:
- **Perspective** → think "vanishing point" → railroad tracks → depth
- **Sfumato** → sounds like "smoke" → Mona Lisa's mysterious smile

If a question asks "what most distinguishes Renaissance art from medieval art,"
the answer almost always involves **realistic depth from perspective** and **lifelike
depiction of the human body** — both directly tied to humanism's "human-centered" focus.`,
      },
    },

    // ── 卡 7：Leonardo da Vinci 多才多艺（standaloneText） ─────
    {
      id: 'leonardo-renaissance-man',
      termCn: '莱昂纳多·达·芬奇 / 文艺复兴式人才',
      termEn: 'Leonardo da Vinci / Renaissance Man',
      standardRef: ['CA HSS 7.8.3', 'AP World KC-4.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'lorenzo-perpetrator', nodeId: 'lorenzo-N5', context: '洛伦佐资助年轻的达芬奇，让他进入韦罗基奥工坊' },
        ],
      },
      standaloneText: {
        cn: `**莱昂纳多·达·芬奇（Leonardo da Vinci，1452-1519）**是文艺复兴最典型的人物，
也是"Renaissance Man"这个概念的活体标本。

先解释"Renaissance Man"是什么意思：
**在文学、艺术、科学多个领域都有卓越成就的全才**。
人文主义鼓励"全面发展的人（universal man / uomo universale）"——
不只做一件事，而是把人类的所有潜能都发挥出来。

达芬奇的成就横跨两个世界：

**艺术家身份**（CA HSS 7.8.3 明确要求）：
- **《最后的晚餐》（The Last Supper，1495-1498）**——米兰，圣母感恩教堂食堂墙壁。
  画面：耶稣和十二门徒共进最后一餐的瞬间，耶稣刚说"你们中间有一个人要出卖我"，
  每个门徒的反应都不同。这幅画完美运用了线性透视法——消失点就在耶稣头部后方。
- **《蒙娜丽莎》（Mona Lisa，约 1503-1519）**——今藏卢浮宫（Louvre），法国巴黎。
  全世界观看人次最多的画。sfumato 技法的代表作。

**科学家/工程师身份**（人文主义"全面发展"的证明）：
- **解剖学手稿**：达芬奇亲手解剖了约 30 具尸体，画出了极度精确的人体解剖图，
  包括心脏、子宫、胎儿的细节——当时这些是第一手科学记录。
- **工程设计草图**：飞行器（像鸟翼一样的"扑翼机"）、坦克、太阳能聚光器、
  起重机——很多设计在结构原理上是正确的，只是那个时代没有材料实现。
- **地质和水文观察**：他观察化石、描述河流侵蚀、预测洪水路径。

为什么他能同时做到这些？因为在他的时代，**艺术家和科学家没有严格分界**——
观察人体、研究比例、理解光影，在他看来是同一件事的不同角度。

**考点关键句**：达芬奇是"Renaissance Man"的最佳例证——
艺术成就（蒙娜丽莎、最后的晚餐）和科学观察（解剖学手稿）并驾齐驱，
体现了人文主义"发挥人类全部潜能"的核心理念。`,
        en: `**Leonardo da Vinci (1452-1519)** is the Renaissance's most iconic figure
and the living definition of "Renaissance Man."

What does "Renaissance Man" mean? **A person of broad excellence across literature,
art, and science.** Humanism encouraged the "universal man (uomo universale)" —
not specializing in just one thing, but realizing all of human potential.

Leonardo's achievements span two worlds:

**As an artist** (specified in CA HSS 7.8.3):
- **The Last Supper (1495-1498)** — Milan, refectory of Santa Maria delle Grazie.
  Scene: Jesus and twelve disciples at their final meal; Jesus has just said
  "one of you will betray me," and every disciple reacts differently.
  Perfect use of linear perspective — the vanishing point is directly behind Jesus's head.
- **Mona Lisa (c. 1503-1519)** — now in the Louvre, Paris. The most-visited painting
  in the world. The definitive example of sfumato technique.

**As a scientist and engineer** (proof of humanism's "full development"):
- **Anatomy notebooks**: Leonardo personally dissected roughly 30 corpses and produced
  extraordinarily precise anatomical drawings — hearts, uteruses, fetuses in detail.
  These were first-hand scientific records.
- **Engineering design sketches**: flying machines (bird-wing ornithopters), tanks,
  solar concentrators, cranes — many structurally correct in principle, just lacking
  the materials to build.
- **Geology and hydrology observations**: he documented fossils, described river erosion,
  predicted flood paths.

Why could he do all this? Because in his time, **there was no strict divide between
artist and scientist** — studying the human body, understanding proportion, analyzing
light and shadow were, to him, different angles on the same thing.

**Key exam sentence**: Leonardo is the best example of "Renaissance Man" —
his artistic achievements (Mona Lisa, Last Supper) and scientific observations
(anatomy notebooks) stand equal, embodying humanism's core ideal of
"realizing the full potential of humanity."`,
      },
      xiaoweiNote: {
        cn: `考达芬奇的题通常是两个方向：
1. "下面哪个词最能形容达芬奇？" → 答案永远是 **Renaissance Man** 或 **uomo universale**
2. "达芬奇的哪幅画最先使用了透视法？" → **最后的晚餐**（消失点在耶稣头后）

记忆双钩：
- **蒙娜丽莎** = sfumato + 神秘微笑（每个人第一个知道的达芬奇作品）
- **最后的晚餐** = 线性透视 + 12 门徒各有反应（考技术题用这幅）`,
        en: `Exam questions about Leonardo usually go two directions:
1. "Which term best describes Leonardo?" → always **Renaissance Man** or **uomo universale**
2. "Which Leonardo painting best exemplifies linear perspective?" → **The Last Supper**
   (vanishing point behind Jesus's head)

Double memory hook:
- **Mona Lisa** = sfumato + mysterious smile (everyone's first Leonardo)
- **The Last Supper** = linear perspective + 12 disciples each reacting differently
  (use this one for technique questions)`,
      },
    },

    // ── 卡 8：印刷机传播文艺复兴（storyAnchor covered） ────────
    {
      id: 'printing-press-spread',
      termCn: '印刷机与文艺复兴传播',
      termEn: 'Printing Press & the Spread of the Renaissance',
      standardRef: ['AP World KC-4.6', 'CA HSS 7.8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'lorenzo-perpetrator',
        nodeIds: ['lorenzo-N9', 'lorenzo-N10'],
        xiaoweiNote: {
          cn: `洛伦佐视角里提到了——古腾堡印刷机（Gutenberg press，约 1440 年）出现后，
书籍价格从"一本书等于一个农民五年工资"变成了普通受教育者负担得起的水平。

关键逻辑链：
印刷机 → 书本便宜 → 人文主义文本（古典作品、学者论文）大量流通 →
越来越多的人读到这些思想 → 文艺复兴从意大利北部扩散到整个欧洲

这个"传播机制"在 AP 题目里经常以"哪项技术最加速了文艺复兴和宗教改革的传播？"
的形式出现——答案永远是**印刷机**。

注意一个细节：印刷机不是文艺复兴**发明**的——古腾堡是德国人，在意大利文艺复兴
已经开始之后才发明的印刷机（约 1440 年代）。但印刷机是让文艺复兴**走出意大利**
的关键工具。两件事发生在同一个世纪，相互加强。

也别忘了：印刷机后来也帮助了**萨佛纳罗拉**——他的布道稿被印刷传播，
说明技术本身是中性的，关键看谁用它。`,
          en: `Mentioned in the Lorenzo lens. After Gutenberg's printing press (c. 1440),
book prices dropped from "one book equals five years of a peasant's wages"
to something educated people could afford.

Key chain of logic:
Printing press → cheaper books → humanist texts (classical works, scholarly essays)
circulate widely → more people read these ideas → Renaissance spreads from
northern Italy across all of Europe.

This "mechanism of spread" often appears on AP as: "Which technology most
accelerated the spread of the Renaissance and Reformation?" — the answer is
always the **printing press**.

One detail: the printing press wasn't **invented by** the Renaissance — Gutenberg
was German, inventing it (c. 1440s) after the Italian Renaissance was already
underway. But the press was the key tool that let the Renaissance **leave Italy**.
The two things happened in the same century and reinforced each other.

Also: the press later helped **Savonarola** too — his sermons were printed and
distributed. Technology is neutral; what matters is who uses it and how.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `洛伦佐·德·美第奇（Lorenzo de' Medici，佛罗伦萨实际统治者）用银行家的钱资助了
波提切利、米开朗基罗、达芬奇这些天才艺术家——让他们不用为钱发愁，
专心创作出了文艺复兴最重要的作品。

但是也有人说：这些艺术家其实是在为美第奇家族服务——画美第奇喜欢的主题，
不能随便批评赞助人，本质上还是"被雇用的工具"。

你觉得美第奇的赞助制度，给了艺术家真正的自由，还是换了一种形式的控制？
用你读过的故事和今天学的内容支持你的观点。`,
      en: `Lorenzo de' Medici (de facto ruler of Florence) used banking wealth to support
genius artists like Botticelli, Michelangelo, and Leonardo da Vinci —
freeing them from financial worry so they could focus on creating the
Renaissance's most important works.

But critics argue these artists were essentially serving the Medici — painting
themes the patron approved of, unable to freely criticize their sponsors,
fundamentally "hired tools."

Do you think the Medici patronage system gave artists genuine freedom,
or was it just a different form of control? Use evidence from the stories
and today's concepts to support your view.`,
      hintCn: `提示：可以从两个角度思考——

**"真正自由"的证据**：达芬奇在美第奇赞助下研究解剖学、设计飞行器，
这些明显不是赞助人"要求"的；米开朗基罗在西斯廷教堂天顶画里的设计远远超出
教皇儒略二世的原始要求，很多是他自己的艺术选择。

**"换了形式的控制"的证据**：洛伦佐资助的艺术品几乎都美化了美第奇形象或符合
美第奇品位（古希腊神话主题、贵族肖像）；萨佛纳罗拉接管佛罗伦萨后，
这些艺术家要么逃走，要么改变风格——说明他们的创作一直在政治气候里生存。

进阶思考：今天的艺术家和创作者（YouTuber、音乐人、设计师）是否也面临类似的
"平台赞助 vs 创作自由"的矛盾？`,
      hintEn: `Hint: consider both angles —

**Evidence for "genuine freedom"**: Leonardo studied anatomy and designed flying machines
under Medici patronage — clearly not what the patron "required."
Michelangelo's Sistine ceiling design far exceeded Pope Julius II's original brief;
many choices were entirely his own artistic decisions.

**Evidence for "a different form of control"**: nearly all art Lorenzo funded glorified
the Medici image or fit Medici taste (Greek mythology themes, aristocratic portraits).
After Savonarola took Florence, artists either fled or changed their style — suggesting
their work was always living within a political climate.

Going deeper: do today's creators (YouTubers, musicians, designers) face a similar
"platform patronage vs creative freedom" tension?`,
      conceptsActivated: ['medici-patronage', 'pazzi-conspiracy', 'humanism-definition'],
    },
    {
      id: 'q2',
      cn: `1497 年，萨佛纳罗拉（Girolamo Savonarola，多明我会修士）在佛罗伦萨发起
"篝火焚书"——把镜子、化妆品、人文主义书籍、世俗画作统统烧掉，
理由是这些东西让人沉迷于肉体和欲望，远离上帝。

1498 年，他被教皇下令逮捕，并被烧死在同一个广场。

有人说萨佛纳罗拉是文明的倒退者；也有人说他对美第奇腐败的批评是正确的，
他的问题只是"方式太极端"。

你怎么看？萨佛纳罗拉的"篝火焚书"，是历史的倒退，还是另一种对文艺复兴的有效批判？`,
      en: `In 1497, Girolamo Savonarola (Dominican friar) launched the Bonfire of the
Vanities in Florence — burning mirrors, cosmetics, humanist books, and secular
art, arguing that these objects led people into bodily obsession and away from God.

In 1498, he was arrested on papal orders and burned to death in the same square.

Some say Savonarola was a force of civilizational regression.
Others say his criticism of Medici corruption was correct — his only problem
was going too far.

What do you think? Was Savonarola's Bonfire of the Vanities a step backward for history,
or a legitimate critique of the Renaissance?`,
      hintCn: `提示：可以从三个角度分析——

**"历史倒退"的理由**：他烧掉了无法复原的文化作品（有学者估计损失了可能价值难以估量的
中世纪和文艺复兴早期画作），他用宗教热情代替理性辩论，他的统治只维持了约四年
就被自己的追随者抛弃——说明这条路不可持续。

**"有效批判"的理由**：他批评的腐败（教会卖官鬻爵、美第奇垄断权力）是真实存在的；
他的运动在佛罗伦萨底层获得了真实的民众支持；二十年后马丁·路德的宗教改革批评了
几乎同样的问题，历史学家认为萨佛纳罗拉是"宗教改革的先声"。

**矛盾点**：萨佛纳罗拉最终也被他批评的那个教廷（教皇亚历山大六世）判了死刑——
这说明什么？

进阶思考：历史上还有什么"以道德/宗教/革命的名义销毁文化"的案例？
（提示：秦始皇焚书坑儒、文化大革命、ISIS 销毁古代文物）它们和萨佛纳罗拉有什么共同点
和不同点？`,
      hintEn: `Hint: analyze from three angles —

**Case for "historical regression"**: he burned cultural works that couldn't be recovered
(scholars estimate incalculable losses of medieval and early Renaissance paintings);
he substituted religious fervor for rational debate; his rule lasted only about four years
before his own followers abandoned him — suggesting this path was unsustainable.

**Case for "legitimate critique"**: the corruption he attacked (simony in the Church,
Medici monopoly on power) was real; his movement had genuine popular support among
ordinary Florentines; twenty years later Martin Luther criticized nearly identical
problems — historians consider Savonarola a "forerunner of the Reformation."

**Tension**: Savonarola was ultimately condemned to death by the very papacy he criticized
(Pope Alexander VI) — what does that tell us?

Going deeper: what other historical cases involved "destroying culture in the name
of morality, religion, or revolution"? (Hint: Qin Shi Huang's burning of books,
Cultural Revolution, ISIS destroying ancient artifacts.) What do these have in common
with Savonarola, and where do they differ?`,
      conceptsActivated: ['humanism-vs-religion', 'humanism-definition', 'medici-patronage'],
    },
    {
      id: 'q3',
      cn: `文艺复兴的口号之一是"以人为中心"——人文主义者说，人的理性、创造力和尊严
是最重要的价值。米开朗基罗的大卫像展现了完美的人体，达芬奇的手稿研究人类
自己的身体构造，彼特拉克说"人是万物的尺度"。

但是，这里说的"人"——具体是哪些人？
佛罗伦萨的女性（比如卢西亚这样的寡妇）有没有被"以人为中心"包括进去？
非基督徒？没有财产的穷人？

你认为文艺复兴的"人文主义"，到底是真正普遍的人道主义，
还是一种特定阶层的人——白人、男性、有钱人——的自我颂扬？`,
      en: `One slogan of the Renaissance was "human-centered" — humanists said that human
reason, creativity, and dignity are the most important values.
Michelangelo's David showed the perfect human body; Leonardo's notebooks studied
human anatomy; Petrarch said "man is the measure of all things."

But which humans, exactly?
Were Florence's women (like Lucia, the widow in one of today's stories) included
in "human-centered"? Non-Christians? Propertyless poor people?

Do you think Renaissance humanism was a genuinely universal humanism —
or was it the self-celebration of a specific group: white, male, wealthy?`,
      hintCn: `提示：这是 AP DBQ 经典题型——考的是"表面上普遍的理念，实际覆盖了哪些人？"

**不包括的证据**：
- 佛罗伦萨女性不能进大学（大学是人文主义学术的中心）
- 文艺复兴艺术里的女性形象几乎都是男性艺术家眼中的理想女性（维纳斯/圣母）
- 奥斯曼帝国、印度、中国的艺术和学术传统被人文主义者完全忽视——"古典"只指
  希腊罗马，不指其他文明
- 卢西亚视角里，1494 年美第奇家族被驱逐之后，普通女性承受了最直接的社会动荡

**包括的证据**：
- 文艺复兴时期确实出现了女性人文主义学者，如伊莎贝拉·德·埃斯特（Isabella d'Este）
- 对人体（包括女性人体）的描绘和研究，在中世纪是被压制的，文艺复兴把它
  变成了合法的艺术主题——这是一种进步

进阶思考：这种"局部的普遍主义"（partial universalism）在历史上很常见——
美国《独立宣言》"人人平等"，但奴隶不算人；法国《人权宣言》"人人生而自由"，
但不包括女性和殖民地居民。文艺复兴的人文主义是同一个模式的更早版本吗？`,
      hintEn: `Hint: this is a classic AP DBQ structure — "an apparently universal idea:
who did it actually cover?"

**Evidence of exclusion**:
- Florentine women couldn't attend universities (the center of humanist scholarship)
- Female figures in Renaissance art are almost always idealized women seen through
  male artists' eyes (Venus / the Madonna)
- Ottoman, Indian, and Chinese artistic and scholarly traditions were completely
  ignored by humanists — "classical" meant only Greece and Rome, not other civilizations
- In the Lucia lens, after the Medici expulsion of 1494, ordinary women bore the most
  direct impact of social upheaval

**Evidence of inclusion**:
- Female humanist scholars did emerge in the Renaissance period, like Isabella d'Este
- Depicting and studying the human body (including female bodies), suppressed in the
  Middle Ages, became a legitimate artistic subject in the Renaissance — that's progress

Going deeper: this "partial universalism" is common in history — the US Declaration
of Independence says "all men are created equal" but excluded enslaved people;
the French Declaration of the Rights of Man said "all are born free" but excluded women
and colonized peoples. Is Renaissance humanism an earlier version of the same pattern?`,
      conceptsActivated: ['humanism-definition', 'humanism-vs-religion', 'michelangelo-works', 'leonardo-renaissance-man'],
    },
  ],
};

export default notebook;
