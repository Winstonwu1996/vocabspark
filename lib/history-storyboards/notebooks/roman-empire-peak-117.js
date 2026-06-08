// ─── 同伴笔记本架构 v1 · Roman Empire at Its Peak 117 CE ──────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点
//   - notebook 提供考点闭环（Pax Romana、罗马法与公民权、道路工程、Trajan 最大版图、
//     奴隶制经济地基、共和→帝国转型、汉罗对照 — 补完 CA HSS 6.7 + AP World U1 课纲）
//
// 课纲对齐：
//   - California HSS Grade 6.7（古罗马 · 共和到帝国）
//   - AP World History (CED) Unit 1：古典帝国 state-building / administration / labor systems
//   - 远端连接：罗马法 / rule of law / 公民概念 → constitutional-convention-1787 + magna-carta-1215
//
// 事实地基：对账 lib/history-narratives/roman-empire-peak-117.md
//   - Pax Romana 约前 27-公元 180；Trajan 公元 117 最大版图（narrative §1/§2/附录 A）
//   - 意大利被奴役者约 100 万-150 万，约占意大利人口 15%-25%（约 1/6 到 1/4）（narrative §5 D）
//   - Caracalla 公民权敕令 = 212 年，是 Trajan 之后约一百年的事（narrative §2 L3 / §10 #4）
//   - Augustus 前 27 终结共和成首位皇帝（与共和国 44 BCE 的崩溃是不同 topic，绝不混淆）
//   - Colosseum 公元 80 由 Vespasian/Titus 建成，早 Trajan 一代（narrative §10 #5）
//
// HARD RULES：
//   - cultural-ban：罗马非中国，正文不用中国特定概念词；§8 汉朝段落用真实中国术语 OK
//   - 无 *italic* 强调标记；中文不出现英文 "lens"（用"视角 / 这一遍"）
//   - em-dash 每句 ≤1；第 11 条：单引号字符串里不嵌 ASCII 直引号（用「」，EN 撇号转义）
//
// schemaVersion: 1 · notebookVersion: roman-empire-peak-117-v1

export var notebook = {
  topicId: 'roman-empire-peak-117',
  topicNameCn: '罗马帝国的巅峰',
  topicNameEn: 'The Roman Empire at Its Peak (117 CE)',
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
    cn: `今天老师说我们要学罗马帝国的巅峰，时间钉在公元 117 年。
她说这是两条课纲的交叉点：加州六年级的古罗马（HSS 6.7），还有 AP World 第一单元的"古典帝国"。

她先帮我纠正了一个我一直搞混的点：**罗马共和国和罗马帝国不是一回事。**
共和国早在公元前 27 年就被 Augustus（奥古斯都）终结了，他成了第一位罗马皇帝。
我们这次学的是帝国——是它最强、版图最大的那一刻，不是共和国怎么崩的。

她给了一张纸，上面写着这些名字：

Trajan（图拉真）、Augustus（奥古斯都）、Hadrian（哈德良）、Decebalus（德凯巴卢斯）

还有一串词：Pax Romana（罗马和平）、emperor（皇帝）、Senate（元老院）、
province（行省）、legion（军团）、citizen（公民）、aqueduct（输水道）、
gladiator（角斗士）、Colosseum（斗兽场）、Latin（拉丁文）。

我先记下来，等下读三个故事，从三个完全不同的人看同一个帝国：
Trajan（把版图推到最大的皇帝）、一个行省精英（被罗马收编、心甘情愿变成罗马人的人）、
还有一个被掳的达契亚人（这份"和平"最底下、变成奴隶的人）。读完再回来对照这张单子。

老师说了一句我抄在笔记本第一页："罗马的伟大是真的，路、法律、近两百年的太平都是真的。
可这份伟大，是踩着征服和奴隶建起来的。读它，要同时看见塔尖的荣耀和塔基底下没有名字的人。"`,
    en: `Today my teacher said we are learning the Roman Empire at its peak, pinned to the year 117 CE.
She said it sits where two course outlines cross: California sixth-grade ancient Rome (HSS 6.7),
and AP World Unit 1 on "classical empires."

First she fixed something I kept mixing up: **the Roman Republic and the Roman Empire are not the same thing.**
The Republic was ended back in 27 BCE by Augustus, who became the first Roman emperor.
What we are studying is the Empire — at its strongest and largest moment, not how the Republic fell.

She gave us a sheet with these names:

Trajan, Augustus, Hadrian, Decebalus

Plus a string of terms: Pax Romana, emperor, Senate, province, legion, citizen, aqueduct,
gladiator, Colosseum, Latin.

Let me write these down. Soon I will read three stories, seeing one empire through three very
different people: Trajan (the emperor who pushed the map to its largest), a provincial elite
(co-opted by Rome, willingly becoming Roman), and a captured Dacian (the one at the very
bottom of this "peace," turned into a slave). Then I will come back and check against this list.

Teacher said one line I copied onto the first page of my notebook: "Rome's greatness is real —
the roads, the law, nearly two centuries of peace are all real. Yet that greatness was built by
treading on conquest and slavery. To read it, you have to see the glory at the tip and the
nameless people at the base at the same time."`,
    keyTerms: [
      { cn: '罗马和平', en: 'Pax Romana' },
      { cn: '罗马皇帝', en: 'emperor' },
      { cn: '元老院', en: 'Senate' },
      { cn: '行省', en: 'province' },
      { cn: '军团', en: 'legion' },
      { cn: '公民 / 公民权', en: 'citizen / citizenship' },
      { cn: '输水道', en: 'aqueduct' },
      { cn: '角斗士', en: 'gladiator' },
      { cn: '斗兽场', en: 'Colosseum' },
      { cn: '拉丁文', en: 'Latin' },
      { cn: '罗马法', en: 'Roman law' },
      { cn: '面包与竞技', en: 'bread and circuses' },
    ],
    keyFigures: [
      {
        nameCn: '图拉真',
        nameEn: 'Trajan',
        ipa: '/ˈtreɪdʒən/',
        roleCn: '罗马皇帝，在位公元 98 到 117 年。他在西班牙行省出生，是第一个不出生在意大利本土的罗马皇帝。公元 117 年，他把帝国版图推到历史上最大的那一刻——既是建设者，也是征服者。',
        roleEn: 'Roman emperor who ruled from 98 to 117 CE. Born in a Spanish province, he was the first emperor not born in Italy itself. In 117 CE he pushed the empire to its largest extent in history — both a builder and a conqueror.',
        mustKnow: true,
        audioKey: 'trajan',
      },
      {
        nameCn: '奥古斯都',
        nameEn: 'Augustus',
        ipa: '/ɔːˈɡʌstəs/',
        roleCn: '第一位罗马皇帝。公元前 27 年，他终结了内战不断的罗马共和，开启了帝国时代，也开启了 Pax Romana（罗马和平）。注意：他是帝国的开端，不是共和国崩溃那个故事里的人。',
        roleEn: 'The first Roman emperor. In 27 BCE he ended the Republic and its endless civil wars, starting the Empire and the Pax Romana. Note: he marks the beginning of the Empire, not the fall of the Republic.',
        mustKnow: true,
        audioKey: 'augustus',
      },
      {
        nameCn: '哈德良',
        nameEn: 'Hadrian',
        ipa: '/ˈheɪdriən/',
        roleCn: 'Trajan 的继任者，在位公元 117 到 138 年。他做了一个和 Trajan 完全相反的决定：放弃刚打下的两河流域、把边界往回收、重点巩固——还在不列颠北部修了一道横贯全岛的长墙。',
        roleEn: "Trajan's successor, who ruled 117 to 138 CE. He made the opposite choice from Trajan: gave up the newly taken Mesopotamia, pulled the borders back, and focused on holding them — and built a wall all the way across northern Britain.",
        mustKnow: true,
        audioKey: 'hadrian',
      },
      {
        nameCn: '德凯巴卢斯',
        nameEn: 'Decebalus',
        ipa: '/dɛˈsɛbələs/',
        roleCn: '达契亚（Dacia）的国王。他两次抵抗 Trajan 的入侵，公元 106 年城破时选择自尽——不愿被罗马活捉。',
        roleEn: 'King of Dacia. He resisted two of Trajan\'s invasions and took his own life in 106 CE when his stronghold fell, rather than let Rome capture him alive.',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '小普林尼',
        nameEn: 'Pliny the Younger',
        ipa: '/ˈplɪni/',
        roleCn: 'Bithynia 行省的总督，和 Trajan 的真实来往书信留存至今。这批信是一手史料，让我们看见罗马怎么靠"路、法律、皇帝肯处理小事"治理庞大帝国。',
        roleEn: 'Governor of the province of Bithynia. His real letters back and forth with Trajan survive today. These letters are a primary source showing how Rome governed its vast empire through roads, law, and an emperor willing to handle everyday problems.',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '阿波罗多罗斯',
        nameEn: 'Apollodorus',
        ipa: '/əˌpɒləˈdɔːrəs/',
        roleCn: 'Trajan 的工程师。他在多瑙河上设计了当时世界最长的石桥之一，还参与了图拉真广场等工程。',
        roleEn: "Trajan's engineer. He designed one of the longest stone bridges of his time across the Danube River, and also worked on projects like Trajan's Forum.",
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '卡拉卡拉',
        nameEn: 'Caracalla',
        ipa: '/ˌkærəˈkælə/',
        roleCn: '后来的罗马皇帝。公元 212 年，他下敕令把罗马公民权扩及帝国境内几乎所有自由人。注意：这是 Trajan 之后约一百年的事。',
        roleEn: 'A later Roman emperor. In 212 CE he issued an edict extending Roman citizenship to nearly all free people in the empire. Note: this happened about a century after Trajan.',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '斯巴达克斯',
        nameEn: 'Spartacus',
        ipa: '/ˈspɑːrtəkəs/',
        roleCn: '角斗士出身的奴隶，公元前 73 到 71 年领导了一次大规模奴隶起义。他是共和国晚期的人，比 Trajan 早约 170 年。课里提到他是为了说明"奴隶也会反抗"这一点。',
        roleEn: 'A gladiator-slave who led a major slave revolt in 73 to 71 BCE. He lived in the late Republic, about 170 years before Trajan. He is mentioned in this topic to show that enslaved people resisted too.',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'pax-romana',
      termCn: 'Pax Romana（罗马和平）',
      termEn: 'Pax Romana (The Roman Peace)',
      defCn: '拉丁文，意思是"罗马的和平"。指从公元前 27 年 Augustus 当上第一位皇帝，到公元 180 年 Marcus Aurelius 去世，这段约两百年的相对稳定期。道路四通八达，商队安全往来，法律管着整个帝国——但这份"和平"只属于线内的人，被征服者和奴隶不算在里面。',
      defEn: 'Latin for "Roman Peace." It names the roughly 200-year stretch of relative stability from 27 BCE, when Augustus became the first emperor, to 180 CE, when Marcus Aurelius died. Roads ran everywhere, trade flowed safely, and one law covered the empire — but this "peace" only belonged to those inside the line; conquered peoples and slaves were not counted in.',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — classical empires', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        mentionedIn: [
          { storyLine: 'Trajan 那条故事线', nodes: '第 1 节和第 7 节' },
        ],
        xiaoweiNote: {
          cn: `三条故事线都在讲 Pax Romana。Trajan 那条故事线第 1 节就抛出来：公元 117 年帝国版图最大，人们管这个时代叫 Pax Romana，据说道路通到天边、商队走遍帝国、法律一视同仁。

我把它压成一句必背：
**Pax Romana = 约公元前 27 年（Augustus）到公元 180 年（Marcus Aurelius 去世）的长期相对太平。**
里头"秩序、太平、能安心做生意"那一面是真的——Trajan 那条故事线第 7 节修八万公里路、认真回总督的信就是证明。

但老师反复敲黑板的考点陷阱，比记时间还重要：
① 错："Pax Romana 是所有人的和平。"
② 对：它是线内（公民、城市、商路）的太平；对被征服民族是征服，对奴隶是奴役。

考点关键句：**Pax Romana 的"和平"建在征服和奴隶制之上，从一开始就没把最底层算进去。**
AP World 最爱用这条考"谁享和平、谁付代价"。`,
          en: `All three story lines touch Pax Romana. In Trajan\'s story line, the first section opens with it: in 117 CE the empire\'s map was at its largest, and people called this age the Pax Romana, saying roads ran to the horizon, caravans crossed the whole empire, and the law treated all alike.

I compress it into one must-memorize line:
**Pax Romana = the long stretch of relative peace from about 27 BCE (Augustus) to 180 CE (the death of Marcus Aurelius).**
The side of order, peace, and safe business is real — proven in Trajan\'s story line section 7, where he builds eighty thousand kilometers of road and answers governors\' letters.

But the exam trap my teacher kept underlining matters more than the dates:
① Wrong: "the Pax Romana was peace for everyone."
② Right: it was peace inside the line (citizens, cities, trade routes); for conquered peoples it was conquest, and for slaves it was bondage.

Key exam sentence: **the Pax Romana\'s "peace" was built on conquest and slavery, and never counted the bottom layer in from the start.**
AP World loves using this to ask "who enjoyed peace, who paid the cost."`,
        },
      },
    },

    {
      id: 'republic-to-empire-augustus',
      termCn: '从共和到帝国（Augustus 首位皇帝）',
      termEn: 'From Republic to Empire (Augustus, the First Emperor)',
      defCn: '公元前 27 年，Augustus（奥古斯都）终结了罗马共和国，成为第一位罗马皇帝，帝国时代就此开始。元老院和执政官这些共和的"外壳"继续保留，但真正说了算的变成了一个人。',
      defEn: 'In 27 BCE, Augustus ended the Roman Republic and became the first Roman emperor, starting the age of the Empire. The Senate and consuls — the "shell" of the Republic — were kept in place, but one man now held the real power.',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — state-building', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        mentionedIn: [
          { storyLine: 'Trajan 那条故事线', nodes: '第 2 节' },
        ],
        xiaoweiNote: {
          cn: `Trajan 那条故事线第 2 节专门讲："我不是开国者，罗马早就不是共和国了。"

这是我之前最容易搞混的，老师说 AP 也最爱在这里设陷阱，所以单列一张卡：
公元前 27 年，Augustus（奥古斯都）终结了内战不断的罗马共和，自己成了第一位罗马皇帝。
从他开始，元老院（Senate）还在，执政官还选，但真正说了算的是一个人。

我背成一条时间轴：
**共和国（约前 509—前 27）→ Augustus 前 27 终结共和、开启帝国 → Trajan（98—117）是帝国巅峰期的皇帝。**

考点陷阱（必清）：
① 错："Trajan 是共和时期的人"或"罗马帝国就是罗马共和国"。
② 对：Trajan 比 Augustus 晚一百多年，他接手的是一台已经造好的帝国机器（行省、军团、道路、罗马法）。

还有一个常错点：共和国怎么崩（Caesar 那一代，公元前 44 年）是另一个故事——别跟这次混。
这次学的是帝国怎么运转，不是共和怎么死。`,
          en: `Trajan\'s story line devotes the second section to this: "I was no founder. Rome had long ceased to be a republic."

This is what I most easily mixed up before, and teacher said AP loves to set a trap here, so it gets its own card:
In 27 BCE, Augustus ended the Republic and its endless civil wars, making himself the first Roman emperor.
From him on, the Senate still met and consuls were still elected, but the one who truly decided was a single man.

I memorize it as a timeline:
**Republic (about 509—27 BCE) → Augustus ends the Republic and begins the Empire in 27 BCE → Trajan (98—117) is the emperor at the Empire\'s peak.**

Exam trap (must clear):
① Wrong: "Trajan was from the Republic" or "the Roman Empire is the same as the Roman Republic."
② Right: Trajan came more than a century after Augustus; he inherited an empire-machine already built (provinces, legions, roads, Roman law).

Another common slip: how the Republic fell (Caesar\'s generation, 44 BCE) is a different story — do not mix it into this one.
This topic is how the Empire ran, not how the Republic died.`,
        },
      },
    },

    {
      id: 'trajan-maximum-extent-117',
      termCn: 'Trajan 与最大版图（公元 117）',
      termEn: 'Trajan and the Maximum Extent (117 CE)',
      defCn: '公元 117 年，皇帝 Trajan 把罗马帝国的版图推到了历史上最大的一刻。那一年他在回程的路上病死，继任者 Hadrian 随即放弃了新打下的土地，版图永远定格在 117 年。',
      defEn: 'In 117 CE, Emperor Trajan pushed the Roman Empire to its largest size in history. That same year he died of illness on his way home, and his successor Hadrian immediately gave up the newly taken land. The record for largest extent stopped at 117 CE forever.',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — empires maintain & expand'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        mentionedIn: [
          { storyLine: 'Trajan 那条故事线', nodes: '第 3、4、8、9 节' },
        ],
        xiaoweiNote: {
          cn: `Trajan 那条故事线整条线就是他怎么把版图推到最大的。我把它拆成三步背：

**第一步，征服 Dacia（达契亚，在多瑙河北、今罗马尼亚一带）。**
两次达契亚战争：公元 101—102 年，以及公元 105—106 年。对手是国王 Decebalus，他城破时选择自尽。
Dacia 成了罗马新行省，山里的黄金从此流向罗马。（第 3、4 节）

**第二步，东征帕提亚（Parthia，今伊朗伊拉克一带）。**
公元 113 年起，Trajan 拿下 Mesopotamia（美索不达米亚，两河流域），打到波斯湾。
这一刻版图历史最大。（第 8 节）

**第三步，公元 117 年 Trajan 在回程病死，继任者 Hadrian 反向操作。**
Hadrian 放弃两河流域、收缩边界。所以"最大版图"这个纪录，**永远停在公元 117 年**。（第 9 节）

考点关键句：**罗马版图的顶点 = 公元 117 年 = Trajan。** 这是这一课的招牌时间点，一定要钉死。
还有一句老师爱考的话（第 8 节）："最大，常常也是极限。"
版图越大，边境越长、花钱越多、远地越难管，刚拿下的东边转头就叛乱。`,
          en: `Trajan\'s whole story line is about how he pushed the map to its largest. I break it into three steps:

**Step one, conquer Dacia (north of the Danube River, around today\'s Romania).**
Two Dacian wars: 101—102 CE, then 105—106 CE. Against King Decebalus, who killed himself when his stronghold fell.
Dacia became a new Roman province, and its mountain gold flowed to Rome. (Sections 3 and 4)

**Step two, march east against Parthia (today\'s Iran and Iraq).**
From 113 CE, Trajan took Mesopotamia (the land between the two rivers) and reached the Persian Gulf.
This is the moment the map was largest in all of history. (Section 8)

**Step three, in 117 CE Trajan died on the way home, and his successor Hadrian did the opposite.**
Hadrian gave up Mesopotamia and pulled the borders back. So the record of "largest extent" stops **forever at 117 CE**. (Section 9)

Key exam sentence: **the peak of Rome\'s map = 117 CE = Trajan.** This is the signature date of this topic — nail it down.
Also a line teacher loves to test (section 8): "largest is often also the limit."
The bigger the map, the longer the borders, the more money needed, the harder to rule distant places, and the east he just took broke into revolt almost at once.`,
        },
      },
    },

    {
      id: 'roads-aqueducts-engineering',
      termCn: '道路、输水道与工程',
      termEn: 'Roads, Aqueducts, and Engineering',
      defCn: '罗马帝国用大规模的工程建设把庞大的帝国黏在一起。最重要的是：遍布全境的硬化大道（让军队和商队快速移动）、把山里的水引进城市的输水道（aqueduct），以及大型公共建筑。这些工程是 Pax Romana"秩序"一面的实体证明。',
      defEn: 'The Roman Empire used large-scale engineering to hold its vast territory together. The most important pieces were: a network of paved highways across the whole empire (letting armies and traders move fast), aqueducts that carried mountain water into cities, and large public buildings. These projects are the physical proof of the "order" side of the Pax Romana.',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — administration / infrastructure'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        mentionedIn: [
          { storyLine: 'Trajan 那条故事线', nodes: '第 7 节' },
        ],
        xiaoweiNote: {
          cn: `Trajan 那条故事线第 7 节讲治理面，其中工程这块是 CA HSS 六年级最爱直接考的硬知识。

**道路：** 帝国最盛时全境约有八万公里的硬化大道，从罗马城像血管一样伸到每个行省。
路修好了，军团能快速调动，商队能安全往来，消息能传得飞快。有句老话：条条大路通罗马。

我顺手补上故事里没细讲、但课本常一起考的工程清单：
① 输水道（aqueduct）把山里的水引进城市，供澡堂和喷泉用。
② 斗兽场（Colosseum）能容几万人看角斗士（gladiator）和野兽表演。
③ 图拉真广场和大市场是 Trajan 在罗马城留下的新地标。

**考点提醒：** 斗兽场（Colosseum）是公元 80 年 Vespasian 和 Titus 建的，比 Trajan 早一代——别记成 Trajan 建的。
Trajan 的标志建筑是图拉真广场、大市场和图拉真纪功柱。

考点关键句：**罗马靠工程（路 + 水 + 公共建筑）把一个庞大帝国黏在一起，这是 Pax Romana"秩序与太平"真实的一面。**
可同一条路，对商队是繁荣，对被锁的奴隶是通往拍卖台的传送带——达契亚人那条故事线第 4 节会让你亲眼看见这一面。`,
          en: `Trajan\'s story line section 7 covers governance, and the engineering part is the kind of hard fact CA HSS sixth grade tests directly.

**Roads:** at the empire\'s height there were about eighty thousand kilometers of paved highway across the whole realm, reaching from the city of Rome like veins to every province.
With roads built, legions moved fast, caravans traveled safely, and news flew. There is an old saying: all roads lead to Rome.

Let me add the engineering list the story does not detail but textbooks often test together:
① Aqueducts carried mountain water into cities for baths and fountains.
② The Colosseum held tens of thousands to watch gladiators and beast shows.
③ Trajan\'s Forum and Market are the new landmarks Trajan left in the city of Rome.

**Exam reminder:** the Colosseum was built in 80 CE by Vespasian and Titus, a generation before Trajan — do not record it as Trajan\'s.
Trajan\'s signature buildings are the Forum, the Market, and Trajan\'s Column.

Key exam sentence: **Rome held a vast empire together by engineering (roads, water, public buildings) — the real side of the Pax Romana\'s "order and peace."**
Yet the same road is prosperity to a caravan and a conveyor belt to the auction block for a chained slave — the Dacian captive\'s story line section 4 shows you that face firsthand.`,
        },
      },
    },

    {
      id: 'slavery-economic-foundation',
      termCn: '奴隶制：罗马经济的地基',
      termEn: 'Slavery as the Foundation of Rome\'s Economy',
      defCn: '奴隶制不是罗马的边角料，而是整个经济的结构性地基。意大利被奴役的人约有 100 万到 150 万，约占意大利人口的六分之一到四分之一（大约 15% 到 25%）。奴隶来自战争俘虏，在矿山、农庄、家务、手工等几乎所有生产环节工作。在罗马法里，奴隶不是"人"，是"物"——可以买卖、出租、惩罚。',
      defEn: 'Slavery was not a side detail of Rome — it was the structural foundation of the whole economy. About one million to one and a half million people were enslaved in Italy, roughly one-sixth to one-quarter of Italy\'s population (about 15 to 25 percent). Enslaved people came mainly from war captives and worked in mines, farms, households, and crafts — almost every part of production. Under Roman law a slave was not a "person" but a "thing" — buyable, rentable, punishable.',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — labor systems', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        mentionedIn: [
          { storyLine: '达契亚人那条故事线', nodes: '第 5、7、8 节' },
        ],
        xiaoweiNote: {
          cn: `达契亚人那条故事线整条线就是它，第 5、7、8 节最关键。这是 AP World"labor systems"（劳动制度）的硬考点，老师说一定要会。

**规模先背死：** 罗马城里大约每三四个人就有一个是奴隶；整个意大利被奴役的人约 100 万到 150 万，约占意大利人口的六分之一到四分之一（约 15%—25%）。（第 5 节）

**来源：** 战争俘虏（主要来源）、债务、人口贩卖、奴隶所生子女。一场场边疆征服，源源不断地把战俘变成奴隶运进帝国市场。

**罗马法怎么看奴隶（第 7 节，DBQ 高频）：** 在罗马法里，奴隶不是"人"，是"物（财产）"。
① 可被买卖、出租、惩罚。
② 所生子女一出生即归主人。
③ 无权缔结法律承认的婚姻，无权拥有财产。

考点关键句（必背）：**奴隶制不是罗马的"小瑕疵"，是它经济与社会的结构性地基，与征服循环互为因果。** Pax Romana 的繁荣，就建在这块地基上。

第 8 节还有一个高级点：释奴（manumission，意思是主人把奴隶放归自由）。少数城里的奴隶能攒钱、被主人放归变自由人，释奴的孩子甚至能成公民。但这条窄缝既是真出路，也是让多数人"为希望而顺从"的最高明的锁链。`,
          en: `The Dacian captive\'s whole story line is about this, with sections 5, 7, and 8 the key ones. This is the hard point of AP World "labor systems," and teacher said you must know it.

**Memorize the scale first:** in the city of Rome perhaps one in every three or four people was a slave; across all of Italy the enslaved numbered about one million to one and a half million, roughly one-sixth to one-quarter of Italy\'s population (about 15—25%). (Section 5)

**Sources:** war captives (the main one), debt, human trafficking, children born to the enslaved. War after war on the frontier turned captives into slaves shipped into the markets without end.

**How Roman law saw a slave (Section 7, high-frequency DBQ point):** in Roman law a slave was not a "person" but a "thing," property.
① They could be bought, sold, rented, and punished.
② A child they bore was the master\'s from birth.
③ They had no right to a legally recognized marriage or to own anything.

Key exam sentence (must memorize): **slavery was not a "small flaw" of Rome — it was the structural foundation of its economy and society, in mutual cause-and-effect with the cycle of conquest.** The Pax Romana\'s prosperity was built on this foundation.

Section 8 also has an advanced point: manumission (meaning a master freeing an enslaved person). A few city slaves could save money and be freed, and a freed slave\'s child could even become a citizen. But this narrow crack is both a real way out and the cleverest of chains, keeping the majority obedient for the sake of hope.`,
        },
      },
    },

    {
      id: 'roman-law-and-the-line',
      termCn: '罗马法与那道「人」的线',
      termEn: 'Roman Law and the Line Around "Person"',
      defCn: '罗马法是一套写下来的、成文的法律，理论上所有公民都要守、也都能援引。它管程序、证据、合同、财产，精巧而系统，深刻影响了后世西方的法律传统。但关键在那道线：罗马法对"人（person）"很公道，可它第一件事就是把奴隶划出"人"的范围，把他们定义为"物（财产）"。线内的人享受法治，线外的人支撑这一切。',
      defEn: 'Roman law was a written, codified set of rules that every citizen was supposed to follow and could call on. It covered procedure, evidence, contracts, and property — elegant and systematic, shaping Western legal traditions for two thousand years. But the key is the line: Roman law was fair to "persons," yet the first thing it did was draw enslaved people outside the circle of "persons," defining them as "things" (property). People inside the line enjoyed rule of law; people outside the line held the whole system up.',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1', 'cross-topic: rule of law'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: 'Trajan 那条故事线', nodes: '第 2 节', context: 'Trajan 接手的帝国机器里有"一套写下来人人要守的罗马法"' },
          { storyLine: '达契亚人那条故事线', nodes: '第 7 节', context: '罗马法第一件事是把奴隶划到「人」的圈子外，划成「物」' },
        ],
      },
      standaloneText: {
        cn: `罗马法（Roman law）是 CA HSS 和 AP World 都会点到的硬概念，也是西方法律传统的源头之一。故事里多处提到，但没单独展开，所以单列一张卡。

**罗马法是什么？先记三点：**
① 它是写下来的、成文的法律，理论上所有公民都要守，也都能援引。
② 它管程序、证据、合同和财产，精巧而系统，影响延续了两千年。
③ 它是欧洲大陆法系的远祖；"公民权 / rule of law（法律凌驾于个人意志，所有人受同一套规则约束）/ 法律面前的身份"这套概念，深刻影响了后世西方的法律和政治传统。

**为什么它跨课这么重要？**
美国国父和更早的英国传统都借鉴过罗马。rule of law——法律高于个人意志、人人受同一套规则约束——这个理念，远端连到 Magna Carta（大宪章，1215 年）和美国宪法。你跑过那两段历史会认得这条线。

**但这张卡最要命的考点（DBQ 最爱），来自达契亚人那条故事线第 7 节：**
罗马法最精巧、最公道的那一面，是对"人（person）"说的。
而它做的第一件事，是先把奴隶划到"人"的圈子外面，划成"物（财产）"。
所以问题从来不在罗马法好不好，而在那道线划在哪里：
线里面的人享受法治与公道；线外面的人，是支撑这一切的财产。

**记忆锚：** 罗马法 = 写下来的规则 + 那道"谁算人"的线。两件事得一起记，缺一不可。`,
        en: `Roman law is a hard concept that both CA HSS and AP World touch, and one of the roots of the Western legal tradition. The story mentions it in several places but never unpacks it on its own, so it gets its own card.

**What is Roman law? Three points first:**
① It was written, codified law that every citizen was supposed to follow and could invoke.
② It dealt with procedure, evidence, contracts, and property — elegant and systematic, with an influence lasting two thousand years.
③ It is the ancestor of continental Europe\'s legal systems; the ideas of "citizenship, rule of law (law above any person\'s will, everyone bound by the same rules), and one\'s legal standing" deeply shaped later Western legal and political traditions.

**Why does it matter across topics?**
The American founders and the older English tradition both drew on Rome. The idea of rule of law — law above any one person\'s will, everyone bound by the same rules — connects far downstream to Magna Carta (1215) and the U.S. Constitution. You will recognize this thread when you study those topics.

**But this card\'s deadliest exam point (a DBQ favorite) comes from the Dacian captive\'s story line, section 7:**
The most elegant, fairest side of Roman law was spoken to "persons."
And the first thing it did was draw enslaved people outside the circle of "persons," making them a "thing" — property.
So the question was never whether Roman law was good, but where that line was drawn:
inside the line, people enjoy rule of law and fairness; outside the line, people are the property that holds it all up.

**Memory anchor:** Roman law = written rules + the line of "who counts as a person." Hold both at once — neither alone is the whole picture.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡最容易被写成"罗马法证明罗马把所有人当平等的人"，这是 AP 最爱抓的错。
我的口诀：**罗马法不是没有公道，是它先画了一道线，把奴隶划到"人"外面，公道只对线内的人生效。**
还有一句跨课的对应记下来："罗马法 = 西方 rule of law 的远祖，远端连到 Magna Carta 和美国宪法。"`,
        en: `Teacher said this card is most often miswritten as "Roman law proves Rome treated everyone as an equal person" — exactly the error AP loves to catch.
My mnemonic: **Roman law is not without fairness — it first draws a line putting slaves outside "person," and the fairness only applies inside the line.**
Also memorize this cross-topic link: "Roman law = the distant ancestor of Western rule of law, connecting downstream to Magna Carta and the U.S. Constitution."`,
      },
    },

    {
      id: 'citizenship-extension',
      termCn: '公民权与它的扩展',
      termEn: 'Citizenship and Its Extension',
      defCn: '罗马公民权（citizenship）是一个法律身份：拿到它，你在法律上和一个生在罗马城里的人是平等的。你走遍帝国受罗马法保护，你的儿子可以争取进元老院。公民权早期很稀缺，慢慢扩展，到公元 212 年 Caracalla（卡拉卡拉）才把它扩及帝国境内几乎所有自由人——但奴隶始终被排除在外。',
      defEn: 'Roman citizenship was a legal status: having it meant you were equal before the law to someone born in the city of Rome itself. You could travel the whole empire under the protection of Roman law, and your son could aim for a seat in the Senate. Citizenship was scarce at first and slowly expanded, until 212 CE when Caracalla extended it to nearly all free people in the empire — but enslaved people were always excluded.',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — integration of conquered peoples', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        mentionedIn: [
          { storyLine: '行省精英那条故事线', nodes: '第 2、5、9 节' },
        ],
        xiaoweiNote: {
          cn: `行省精英那条故事线把公民权讲得最透，第 2、5、9 节。这是 AP World"帝国怎么整合被征服者"的核心考点。

**公民权（citizenship）是什么（第 2 节）：** 拿到罗马公民权，意味着你在法律上和一个生在罗马城里的人是平等的公民。你能走遍帝国受罗马法保护，你的儿子甚至可以争取进元老院。

**罗马最厉害的一手（第 5 节）：** 它不像有些征服者永远把被征服的人按在底层，它对"肯变成罗马人"的精英几乎敞开门。证据就在眼前：皇帝 Trajan 本人就是西班牙行省出身。一个行省小城的家族，三代之内能出公民、出官员、甚至出皇帝。

**扩展的终点（第 9 节，必清的时间点）：** 公元 212 年，Caracalla（卡拉卡拉）下敕令，把罗马公民权扩及帝国境内几乎所有自由人。
考点陷阱：
① 错——"罗马公民权一直对所有人开放"。
② 对——它早期稀缺、逐步扩展，212 年才扩及几乎所有自由人，而且**奴隶始终被排除在外**。注意 212 年是 Trajan 之后约一百年。

考点关键句：**罗马用"公民身份"而不是血统来黏合多民族，这是它最深远的遗产之一。但那道线划得再宽，线外永远站着不被算进去的奴隶。**`,
          en: `The provincial elite\'s story line explains citizenship most fully, in sections 2, 5, and 9. This is the core exam point of AP World "how empires integrate the conquered."

**What citizenship is (Section 2):** holding Roman citizenship meant that in law you were an equal citizen with a person born in the city of Rome. You could travel the whole empire under Roman law\'s protection, and your son could even strive for a seat in the Senate.

**Rome\'s greatest move (Section 5):** unlike some conquerors who forever press the conquered into the bottom, Rome left an almost open door to elites willing to "become Roman." The proof is right there: the emperor Trajan himself was born in a Spanish province. A family from a small provincial town could produce citizens, officials, even an emperor within three generations.

**The end point of the extension (Section 9, a must-clear date):** in 212 CE, Caracalla issued an edict extending Roman citizenship to nearly all free people in the empire.
Exam trap:
① Wrong — "Roman citizenship was always open to everyone."
② Right — it was scarce early and extended step by step, reaching nearly all free people only in 212, and **enslaved people were always excluded.** Note 212 is about a century after Trajan.

Key exam sentence: **Rome bound many peoples together by "citizen status" rather than blood — one of its most far-reaching legacies. But however wide that line was drawn, outside it forever stood the enslaved, never counted in.**`,
        },
      },
    },

    {
      id: 'ccot-republic-to-empire',
      termCn: '从共和国到帝国，变了什么、延续了什么',
      termEn: 'Republic to Empire — What Changed, What Continued',
      defCn: 'AP World 最爱考的写作技能之一叫"延续与变化"（Continuity and Change Over Time，简称 CCOT）。从罗马共和国到帝国的转变，是这个技能的标准练习案例。简单说：变了的是谁掌权（一个人代替了元老院）；延续的是外壳（元老院还开，执政官还选）、罗马法、行省制度、奴隶制经济地基。',
      defEn: 'One of AP World\'s most-tested writing skills is called Continuity and Change Over Time (CCOT). The shift from Roman Republic to Empire is a standard case to practice this skill. In short: what changed was who held power (one man replaced the Senate\'s shared control); what continued was the shell (the Senate still met, consuls were still elected), Roman law, the provincial system, and the slave-based economic foundation.',
      standardRef: ['AP World Unit 1 — CCOT core skill', 'CA HSS 6.7', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: 'Trajan 那条故事线', nodes: '第 2 节', context: 'Trajan 自述接手一台已经造好的帝国机器，暗示延续性' },
          { storyLine: '行省精英那条故事线', nodes: '第 2 节', context: '行省精英谈公民权扩展，涉及变化' },
        ],
      },
      standaloneText: {
        cn: `从共和国到帝国的转变，是练习"延续与变化（CCOT）"技能的标准案例。

**变了什么**

① **最高权力的来源：** 共和国由元老院（Senate）和两名执政官（consuls）轮流掌权，任期一年、互相制衡。帝国改成一个人（皇帝）实际说了算，终身制，权力来自军团效忠和个人威望，而不是法律授权。
② **合法性叙事：** 共和国以"公民共同体自治"为合法性基础。帝国用"最高统帅为公民服务"来包装——奥古斯都始终拒绝"国王（rex）"称号，用"第一公民（princeps civium）"掩盖实质上的独裁。
③ **军事指挥权：** 共和国执政官在任期内指挥军队，任期一结束权力即终止。帝国皇帝是永久的最高统帅，军团直接向他宣誓效忠。

**延续了什么**

① 元老院依然开会，执政官头衔依然选出——但都成了形式，真正的权力已经转移。这是刻意保留的"外壳"，帮助皇帝维持共和国的合法性形象。
② 罗马法体系延续，仍是帝国治理的骨干；公民权概念延续（只是后来逐步扩展）。
③ 行省制度、军团结构、道路工程体系——这些共和晚期发展成熟的治理工具，帝国全部继承并扩大。
④ 社会阶层：元老阶层、骑士阶层（equestrians）、平民、奴隶的基本等级结构延续；奴隶制作为经济地基延续。

**考试写法口诀（四步）**

第一步，点时间跨度和背景：从共和国（前 509）到帝国（前 27 Augustus）。
第二步，写变化：最高权力由多人共享变为一人独揽，合法性叙事转型。
第三步，写延续：元老院外壳、罗马法、行省-军团-道路体系全部延续。
第四步，写分析：为什么延续这么多？因为奥古斯都懂得"换汤不换药"是最稳的权力策略——彻底革命反而会触发元老阶层的全面反抗。

考点陷阱：不能说"共和国变成帝国所以一切都变了"，也不能说"元老院还在所以没有变"。
**分数来自同时抓住两面，并能解释"为什么变""为什么不变"。**`,
        en: `The shift from Republic to Empire is a standard case for practicing the "Continuity and Change Over Time (CCOT)" skill.

**What Changed**

① **The source of supreme power:** the Republic\'s power rotated among two consuls and the Senate, each checked for one-year terms. The Empire had one man holding power for life, based on army loyalty and personal authority — not a legal mandate.
② **The legitimacy story:** the Republic claimed "self-governance by the citizen community." The Empire wrapped power in "the first citizen serving the people" — Augustus refused the title "king (rex)" and used "first citizen (princeps civium)" to cover what was in effect one-man rule.
③ **Military command:** Republican consuls commanded armies during their term, then surrendered that power when the term ended. The emperor was the permanent supreme commander, with legions swearing loyalty directly to him.

**What Continued**

① The Senate still met, consuls were still elected — but both became ceremonial. This was a deliberately preserved "shell" to let emperors claim the Republic\'s legitimacy.
② The Roman law system continued as the backbone of governance; the concept of citizenship continued (though extended later).
③ The provincial system, the legionary structure, and the road engineering network — all governing tools that matured in the late Republic — were inherited and enlarged by the Empire.
④ Social order: the senatorial class, the equestrian class, commoners, and slaves — the core hierarchy continued; slavery as the economic foundation continued.

**CCOT Writing Steps (four steps)**

Step 1, frame the span and context: Republic (509 BCE) to Empire (27 BCE, Augustus).
Step 2, name the changes: supreme power moved from shared to one-man, legitimacy story shifted.
Step 3, name the continuities: the Senate shell, Roman law, the province-legion-road system.
Step 4, analyze: why so much continuity? Because Augustus understood that "changing the substance while keeping the form" was the most stable power strategy — outright revolution would have triggered an all-out backlash from the senatorial class.

Exam trap: do not write "the Republic became the Empire so everything changed," and do not write "the Senate still existed so nothing changed."
**Points come from holding both sides at once and explaining "why it changed" and "why it did not."**`,
      },
      xiaoweiNote: {
        cn: `老师说 AP 的 CCOT 题最容易丢分的地方不是背不出事实，是只写变化忘了延续，或者只写延续忘了变化。
我的口诀：**"CCOT = 变了一半，留了一半，全都要说清楚为什么。"**

还有一个经典考题变种："奥古斯都是在结束共和制还是在延续共和制的外壳？"
标准答案是两者兼有——他实质上结束了共和制，但刻意保留共和形式以维持合法性。
这种"形变而实不变"的分析，就是 AP 要的复杂性（complexity）。`,
        en: `Teacher said the most common way to lose CCOT points is not forgetting facts — it is writing only change and forgetting continuity, or only continuity and forgetting change.
My mnemonic: **"CCOT = half changed, half stayed, explain both."**

A classic question variant: "Was Augustus ending the Republic or continuing its shell?"
The standard answer is both: he effectively ended the Republic but deliberately kept its forms to maintain legitimacy.
That analysis of "form preserved, substance replaced" is exactly the complexity AP rewards.`,
      },
    },

    {
      id: 'han-china-parallel',
      termCn: '同代对照：汉帝国',
      termEn: 'A Contemporary Parallel: Han China',
      defCn: 'AP World 要你把同代的罗马帝国和汉帝国放在一起比。两个都是古典大帝国，同一时代，一个在欧洲，一个在中国。Trajan 在位（公元 98—117）正好是中国东汉时期。两个帝国都要回答"怎么长久统治庞大、多民族的疆域"这个难题，但用了不同的方法。',
      defEn: 'AP World asks you to compare the Roman Empire and the Han Empire of China as contemporaries. Both were classical mega-empires, in the same era, one in Europe and one in China. Trajan\'s reign (98—117 CE) falls during China\'s Eastern Han period. Both empires had to answer the hard question "how do you rule a vast, multi-ethnic territory for a long time?" — but they used different methods.',
      standardRef: ['AP World Unit 1 — comparison (core skill)', 'CA HSS 6.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: 'Trajan 那条故事线', nodes: '第 2 节', context: 'Trajan 接手的帝国机器（行省/军团/道路/罗马法）可与汉的治理工具对照' },
        ],
      },
      standaloneText: {
        cn: `这张卡是 AP World 的比较技能（comparison）专属。三条故事线都没有展开（它们都聚焦罗马内部），但 AP World 第一单元一定会让你把罗马和同代的汉帝国放一起比，所以单列。

**时间对得上吗？对得死死的：**
Trajan 在位（公元 98—117）正值中国东汉（汉和帝、汉殇帝、汉安帝那几代）。
汉帝国（公元前 206—公元 220）和罗马帝国，是同一时代、欧亚大陆两端的两个古典巨型帝国。

**真实历史连接（不是类比，是史实）：**
① 公元 97 年（Trajan 登基前一年），东汉的甘英奉班超之命出使"大秦"（罗马），抵达波斯湾一带，因故未能继续西行。两大帝国彼此知道对方存在。
② 丝绸之路把汉的丝绸经中亚、帕提亚转运到罗马，罗马贵族对中国丝绸的追捧，甚至引发元老对"白银外流"的抱怨。两个帝国通过一条商路间接相连。

**结构对照（并列，不褒贬）：**
① **怎么统治庞大疆域：** 罗马靠军团 + 道路 + 罗马法 + 公民权（把被征服精英变成罗马人）；汉靠郡县制 + 官僚科层 + 察举 + 儒术（以文教与官僚整合地方）。罗马的整合工具偏"法律身份"，汉偏"文化教化 + 行政编户"。
② **社会底座：** 罗马高度依赖奴隶制（战俘为主，约占意大利人口 15%—25%，即约六分之一到四分之一）；汉的基础是编户齐民的自耕农 + 豪强庄园的依附民、部分奴婢，奴婢存在但不是经济主干。
③ **谁算"政治人"：** 罗马公民权逐步扩展（212 年扩及几乎所有自由人），但奴隶永远在线外；汉的"编户齐民"理论上覆盖广大平民，但实际权力集中于皇室、外戚、士大夫。

**考点底线（Rule 0）：** 不能说罗马"先进"、汉"落后"，或反过来；也不能贴"罗马自由 vs 中国专制"这种标签。两套帝国都在回应"如何长久统治庞大多元疆域"这个共同难题，各有智慧也各有盲点。`,
        en: `This card belongs to AP World\'s core skill of comparison. The three story lines do not unpack it (they all focus inside Rome), but AP World Unit 1 will certainly ask you to compare Rome with the contemporary Han Empire, so it gets its own card.

**Do the dates line up? Exactly:**
Trajan\'s reign (98—117 CE) falls in China\'s Eastern Han period (the reigns of Emperors He, Shang, and An).
The Han Empire (206 BCE—220 CE) and the Roman Empire were two classical mega-empires of the same era, at opposite ends of Eurasia.

**Real historical connection (not analogy, but fact):**
① In 97 CE (the year before Trajan took the throne), the Eastern Han envoy Gan Ying, sent by Ban Chao, traveled toward "Da Qin" (Rome), reaching the area of the Persian Gulf but unable to go further. Each empire knew the other existed.
② The Silk Road carried Han silk through Central Asia and Parthia to Rome, and Roman nobles\' demand for Chinese silk even drew complaints from senators about "silver flowing out." The two empires were indirectly linked by one trade route.

**Structural comparison (side by side, no ranking):**
① **How to rule a vast territory:** Rome by legions, roads, Roman law, and citizenship (turning conquered elites into Romans); Han by the commandery-county system, a bureaucratic hierarchy, recommendation-based official selection, and Confucian ideology (integrating regions through education and bureaucracy). Rome\'s integration tool leaned toward "legal status," Han toward "cultural teaching plus administrative household registration."
② **The social base:** Rome relied heavily on slavery (war captives mainly, about 15—25% of Italy\'s population, roughly one-sixth to one-quarter); Han rested on registered free farmers plus dependents of great estates and some bondservants — bondservants existed but were not the economic mainstay.
③ **Who counts as a "political person":** Roman citizenship extended step by step (reaching nearly all free people in 212), but enslaved people were forever outside the line; Han\'s "registered commoners" covered the broad populace in theory, but real power concentrated in the imperial house, consort families, and the scholar-officials.

**Exam bottom line (Rule 0):** you cannot say Rome was "advanced" and Han "backward," or vice versa, nor stick on labels like "free Rome vs despotic China." Both empires answered the shared hard problem of "how to rule a vast, diverse realm for a long time," each with its own wisdom and blind spots.`,
      },
      xiaoweiNote: {
        cn: `老师说 AP World 几乎一定会考"罗马 vs 汉"的比较，最常考"两个帝国怎么统治、底座靠谁"。
我的对照口诀：**罗马靠"法律身份 + 公民权 + 奴隶地基"；汉靠"官僚科举雏形 + 儒术 + 编户自耕农"。**
最重要的是结尾那条底线：不准说谁先进谁落后，只比"各自怎么解决同一道难题"。
甘英出使大秦（公元 97 年）是个超好用的记忆钩子，证明这俩帝国是真的同代、还彼此知道对方。`,
        en: `Teacher said AP World will almost certainly test the "Rome vs Han" comparison, most often asking "how the two empires ruled, and who their base rested on."
My contrast mnemonic: **Rome by "legal status + citizenship + slave foundation"; Han by "a proto-bureaucratic selection path + Confucianism + registered free farmers."**
Most important is the closing bottom line: never say who was advanced or backward — only compare "how each solved the same hard problem."
Gan Ying\'s mission to Da Qin (97 CE) is a great memory hook, proving these two empires were truly contemporaries who knew of each other.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `公元 117 年的罗马，道路、法律、近两百年的太平，样样真实、样样了不起。
可这份"伟大"，是靠不断征服别人、把约占意大利六分之一到四分之一的人变成奴隶，喂出来的。

你觉得这个"最伟大的罗马"，应该被看成一台"靠征服和奴役喂养的机器"，
还是一份"真实的文明遗产"？用至少两条具体证据支持你的判断。`,
      en: `Rome in 117 CE had roads, law, and nearly two centuries of peace — all real, all remarkable.
Yet this "greatness" was fed by conquering others without end and turning about one-sixth to
one-quarter of Italy\'s people (about 15 to 25 percent) into slaves.

Should this "greatest Rome" be seen as a "machine fed on conquest and slavery," or as a "real
heritage of civilization"? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你会不会用证据，不看你站哪边。
① "机器"这边的证据：意大利约 15%—25%（六分之一到四分之一）人口被奴役；罗马法把奴隶划成"物"；图拉真纪功柱把毁掉 Dacia 的战争刻成荣耀；最骄傲的大道也把奴隶运向拍卖台。
② "文明遗产"这边的证据：八万公里道路、成文罗马法、公民权逐步扩展（212 年扩及几乎所有自由人）、影响后世两千年的法律传统。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边。最强的一句是"它能成为文明遗产，恰恰是踩着征服与奴役"——这种"两者同体"的分析，就是 AP 要的复杂性（complexity）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at whether you use evidence, not which side you pick.
① Evidence for "machine": about 15—25% of Italy enslaved (roughly one-sixth to one-quarter), Roman law drawing slaves as "things," Trajan\'s Column carving the war that destroyed Dacia as glory, the proudest roads also carrying slaves to the auction block.
② Evidence for "heritage of civilization": eighty thousand kilometers of road, codified Roman law, citizenship extended step by step (reaching nearly all free people in 212), a legal tradition shaping two thousand years.
High-scoring move: acknowledge both sides stand, then explain why you lean one way. The strongest line is "the very way it became a heritage was by treading on conquest and slavery" — that "both at once" analysis is the complexity AP wants.`,
      conceptsActivated: ['pax-romana', 'slavery-economic-foundation'],
    },
    {
      id: 'q2',
      cn: `罗马征服一个地方，靠的不只是军团。那个行省精英没人拿刀逼他，
是他自己掏钱把家乡修得像罗马，自愿交出了自己的语言和身份，还心甘情愿地觉得"我也是罗马人"。

如果你是 AP 老师，要出一道题考"自愿的同化和被迫的征服，哪个更彻底"，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `Rome conquered a place with more than legions. That provincial elite was forced by no one —
he paid out of his own pocket to make his hometown look like Rome, willingly handed over his
language and identity, and came to feel, gladly, "I too am a Roman."

If you were an AP teacher writing a question on "which goes deeper, willing assimilation or forced
conquest," how would you phrase it? Write your question and explain what it is meant to make
students see.`,
      hintCn: `提示：好的 DBQ 题通常逼学生同时看见两件事，而不是二选一。
可以从行省精英的角度切入——他在故事里说："最难的从来不是被强迫，是你自愿走的那条路确实给了你想要的东西，可它同时在悄悄改写你是谁。"这句话点出"自愿"的可怕：用刀征服会激起反抗，把人变成"自己人"反而不会，因为他自己愿意。
你的题目可以让学生比较"军团征服 Dacia（看得见的暴力）"和"用公民权和好处收编行省精英（看不见的同化）"——为什么后者反而是罗马"最高明"的一手？哪一种让被征服者更难翻身？`,
      hintEn: `Hint: a good DBQ forces students to see two things at once, not pick one.
You can come at it through the provincial elite, who says in the story: "the hardest thing was never being forced; it is that the road you walked willingly really gave you what you wanted, and at the same time quietly rewrote who you are." That line names the danger of "willing": conquest by the sword provokes resistance, turning people into "your own" does not, because they want it themselves.
Your question could have students compare "legions conquering Dacia (visible violence)" with "co-opting provincial elites through citizenship and benefits (invisible assimilation)," and ask why the latter was Rome\'s "cleverest" move, and which leaves the conquered less able to recover.`,
      conceptsActivated: ['citizenship-extension', 'roman-law-and-the-line', 'pax-romana'],
    },
    {
      id: 'q3',
      cn: `AP World 会让你把同代的罗马和汉，这两个欧亚大陆两端的古典巨型帝国放在一起比。
它们都要回答同一个难题：怎么长久统治一片庞大、多民族的疆域？

你觉得罗马用"法律身份 + 公民权"黏合多民族，和汉用"文化教化 + 编户官僚"整合地方，
哪一套更适合统治一个庞大帝国？还是说这个问题本身就提错了？
请用每个帝国的一个具体制度来支持你的看法。`,
      en: `AP World will have you compare contemporary Rome and Han China, two classical mega-empires at
the two ends of Eurasia. Both had to answer the same hard problem: how to rule a vast,
multi-ethnic realm for a long time.

Do you think Rome\'s binding of many peoples by "legal status plus citizenship," or Han\'s
integration of regions by "cultural teaching plus registered bureaucracy," better suited ruling a
vast empire? Or is the question itself wrongly posed?
Support your view with one specific institution from each empire.`,
      hintCn: `提示：先记住这条底线——不准说谁"先进"、谁"落后"，也别贴"罗马自由 vs 中国专制"这种标签。AP 不要你选出"赢家"，要你比"各自怎么解决同一道难题"。
具体制度可以举：罗马的公民权（212 年 Caracalla 敕令扩及几乎所有自由人）、罗马法、军团 + 道路；汉的郡县制、察举、儒术。
进阶思考：两套都把多数生产者压在底层（罗马靠奴隶、汉靠自耕农和依附民），"谁算完整的政治人"两个文明都没真正解决。这道题最好的答案，可能是先拆穿"哪个更好"这个提法本身——它们是两种不同的设计智慧，各有盲点。AP 看的是你能不能用真实制度把抽象论点钉在证据上。`,
      hintEn: `Hint: first remember the bottom line — no saying who was "advanced" or "backward," no labels like "free Rome vs despotic China." AP does not want you to crown a "winner" — it wants you to compare "how each solved the same hard problem."
For specific institutions, try: Rome\'s citizenship (the Caracalla edict of 212 extending it to nearly all free people), Roman law, legions plus roads; Han\'s commandery-county system, recommendation-based selection, Confucianism.
Going deeper: both pressed most producers into the bottom (Rome by slaves, Han by free farmers and dependents), and "who counts as a full political person" was unsolved in both civilizations. The best answer may first take apart the very framing of "which is better," since they are two different designs of wisdom, each with blind spots. AP wants you to pin the abstract claim to evidence with real institutions.`,
      conceptsActivated: ['han-china-parallel', 'citizenship-extension', 'republic-to-empire-augustus'],
    },
  ],
};

export default notebook;
