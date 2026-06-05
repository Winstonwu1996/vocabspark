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
//   - storyboard 提供情感锚点（Trajan 征服者+建设者 / 行省精英被收编的中间人 / Dacia 奴隶受影响方三条线）
//   - notebook 提供考点闭环（Pax Romana、罗马法与公民权、道路工程、Trajan 最大版图、
//     奴隶制经济地基、共和→帝国转型、汉罗对照 — 补完 CA HSS 6.7 + AP World U1 课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
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
// HARD RULES（对账 AUTHORING_PIPELINE 第 7/11 条）：
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

她先纠正了一个我一直搞混的点：罗马共和国和罗马帝国不是一回事。
共和国早在公元前 27 年就被 Augustus（奥古斯都）终结了，他成了第一位罗马皇帝。
我们这次学的是帝国，是它最强、版图最大的那一刻，不是共和国怎么崩的。

她给了一张纸，上面写着这些名字：

Trajan（图拉真）、Augustus（奥古斯都）、Hadrian（哈德良）、
Decebalus（德凯巴卢斯）

还有一串词：Pax Romana（罗马和平）、emperor（皇帝）、Senate（元老院）、
province（行省）、legion（军团）、citizen（公民）、aqueduct（输水道）、
gladiator（角斗士）、Colosseum（斗兽场）、Latin（拉丁文）。

我先记下来，等下读三个故事，从三个完全不同的人看同一个帝国：
Trajan（把版图推到最大的皇帝）、一个行省精英（被罗马收编、心甘情愿变成罗马人的人）、
还有一个被掳的达契亚人（这份"和平"最底下、变成奴隶的人）。读完再回来对照这张单子。

老师说了一句我抄在笔记本第一页："罗马的伟大是真的，路、法律、近两百年的太平都是真的。
可这份伟大，是踩着征服和奴隶建起来的。读它，要同时看见塔尖的荣耀和塔基底下没有名字的人。"`,
    en: `Today my teacher said we're learning the Roman Empire at its peak, pinned to the year 117 CE.
She said it sits where two course outlines cross: California sixth-grade ancient Rome (HSS 6.7),
and AP World Unit 1 on "classical empires."

First she fixed something I kept mixing up: the Roman Republic and the Roman Empire are not the
same thing. The Republic was ended back in 27 BCE by Augustus, who became the first Roman emperor.
What we're studying is the Empire, at its strongest and largest moment, not how the Republic fell.

She gave us a sheet with these names:

Trajan, Augustus, Hadrian, Decebalus

Plus a string of terms: Pax Romana, emperor, Senate, province, legion, citizen, aqueduct,
gladiator, Colosseum, Latin.

Let me write these down. Soon I'll read three stories, seeing one empire through three very
different people: Trajan (the emperor who pushed the map to its largest), a provincial elite
(co-opted by Rome, willingly becoming Roman), and a captured Dacian (the one at the very
bottom of this "peace," turned into a slave). Then I'll come back and check against this list.

Teacher said one line I copied onto the first page of my notebook: "Rome's greatness is real,
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
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '图拉真',
        nameEn: 'Trajan',
        ipa: '/ˈtreɪdʒən/',
        roleCn: '罗马皇帝（在位公元 98-117），西班牙行省出身、第一个非意大利本土的皇帝；公元 117 年把帝国版图推到历史最大，既是建设者也是征服者',
        roleEn: 'Roman emperor (ruled 98-117 CE), born in a Spanish province, the first emperor not born in Italy; pushed the empire to its largest extent in 117 CE, both a builder and a conqueror',
        mustKnow: true,
        audioKey: 'trajan',
      },
      {
        nameCn: '奥古斯都',
        nameEn: 'Augustus',
        ipa: '/ɔːˈɡʌstəs/',
        roleCn: '第一位罗马皇帝，公元前 27 年终结罗马共和、开启帝国与 Pax Romana；注意他是帝国的开端，不是共和国崩溃故事里的人',
        roleEn: 'The first Roman emperor, who ended the Roman Republic in 27 BCE and began the Empire and the Pax Romana; note he marks the start of the Empire, not the fall of the Republic',
        mustKnow: true,
        audioKey: 'augustus',
      },
      {
        nameCn: '哈德良',
        nameEn: 'Hadrian',
        ipa: '/ˈheɪdriən/',
        roleCn: 'Trajan 的继任者（在位公元 117-138），做了相反的决定：放弃新占的两河流域、收缩并巩固边界，还修了横贯不列颠北部的长墙',
        roleEn: "Trajan's successor (ruled 117-138 CE), who made the opposite choice: gave up the newly taken Mesopotamia, pulled the borders back and held them, and built a wall across northern Britain",
        mustKnow: true,
        audioKey: 'hadrian',
      },
      {
        nameCn: '德凯巴卢斯',
        nameEn: 'Decebalus',
        ipa: '/dɛˈsɛbələs/',
        roleCn: '达契亚（Dacia）的国王，两次抵抗 Trajan 的入侵，公元 106 年城破时自尽，不让罗马活捉',
        roleEn: 'King of Dacia, who resisted two of Trajan\'s invasions and took his own life in 106 CE when his stronghold fell, rather than let Rome capture him alive',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '小普林尼',
        nameEn: 'Pliny the Younger',
        ipa: '/ˈplɪni/',
        roleCn: 'Bithynia 行省总督，与 Trajan 往来的真实书信留存至今，是罗马「靠路、靠法、靠皇帝肯处理琐事」治理帝国的一手史料',
        roleEn: 'Governor of the province of Bithynia, whose real letters with Trajan survive, a primary source for how Rome governed by roads, law, and an emperor willing to handle small affairs',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '阿波罗多罗斯',
        nameEn: 'Apollodorus',
        ipa: '/əˌpɒləˈdɔːrəs/',
        roleCn: 'Trajan 的工程师，在多瑙河上设计了当时世界最长的石桥之一，也参与图拉真广场等工程',
        roleEn: "Trajan's engineer, who designed one of the longest stone bridges in the world at the time across the Danube, and worked on projects like Trajan's Forum",
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '卡拉卡拉',
        nameEn: 'Caracalla',
        ipa: '/ˌkærəˈkælə/',
        roleCn: '后来的罗马皇帝，公元 212 年下敕令把公民权扩及帝国境内几乎所有自由人；注意这是 Trajan 之后约一百年的事',
        roleEn: 'A later Roman emperor who, in 212 CE, issued an edict extending citizenship to nearly all free people in the empire; note this came about a century after Trajan',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '斯巴达克斯',
        nameEn: 'Spartacus',
        ipa: '/ˈspɑːrtəkəs/',
        roleCn: '角斗士奴隶，公元前 73-71 年领导大规模奴隶起义；属共和国晚期，比 Trajan 早约一百七十年，用作「奴隶也反抗」的对照',
        roleEn: 'A gladiator slave who led a major slave revolt in 73-71 BCE; from the late Republic, about 170 years before Trajan, used as a contrast showing "slaves resisted too"',
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
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — classical empires', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'trajan',
        nodeIds: ['tr-n1', 'tr-n7'],
        xiaoweiNote: {
          cn: `这个三个视角都在讲。Trajan 这一遍第 1 节就抛出来：公元 117 年帝国版图最大，
人们管这个时代叫 Pax Romana（罗马和平），据说道路通到天边、商队走遍帝国、法律一视同仁。

我把它压成一句必背：
Pax Romana = 约公元前 27 年（Augustus）到公元 180 年（Marcus Aurelius 去世）的长期相对太平。
里头"秩序、太平、能安心做生意"那一面是真的，Trajan 第 7 节修八万公里路、认真回总督的信就是证明。

但老师反复敲黑板的考点陷阱，比记时间还重要：
错："Pax Romana 是所有人的和平。"
对：它是线内（公民、城市、商路）的太平；对被征服民族是征服，对奴隶是奴役。

考点关键句：Pax Romana 的"和平"建在征服 + 奴隶制之上，从一开始就没把最底层算进去。
AP World 最爱用这条考"谁享和平、谁付代价"。`,
          en: `All three lenses touch this. Trajan's pass throws it out in Node 1: in 117 CE the
empire's map was largest, and people called this age the Pax Romana, the Roman Peace, saying
the roads ran to the horizon, caravans crossed the whole empire, and the law treated all alike.

I compress it into one must-memorize line:
Pax Romana = the long stretch of relative peace from about 27 BCE (Augustus) to 180 CE (the
death of Marcus Aurelius). The side of order, peace, and safe business is real, proven by
Trajan Node 7, where he builds eighty thousand kilometers of road and answers governors' letters.

But the exam trap my teacher kept underlining matters more than the dates:
Wrong: "the Pax Romana was peace for everyone."
Right: it was peace inside the line (citizens, cities, trade routes); for conquered peoples it
was conquest, and for slaves it was bondage.

Key exam sentence: the Pax Romana's "peace" was built on conquest and slavery, and never counted
the bottom layer in from the start. AP World loves using this to ask "who enjoyed peace, who paid."`,
        },
      },
    },

    {
      id: 'republic-to-empire-augustus',
      termCn: '从共和到帝国（Augustus 首位皇帝）',
      termEn: 'From Republic to Empire (Augustus, the First Emperor)',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — state-building', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'trajan',
        nodeIds: ['tr-n2'],
        xiaoweiNote: {
          cn: `Trajan 这一遍第 2 节专门讲："我不是开国者，罗马早就不是共和国了。"

这是我之前最容易搞混的，老师说 AP 也最爱在这里设陷阱，所以单列一张卡：
公元前 27 年，Augustus（奥古斯都）终结了内战不断的罗马共和，自己成了第一位罗马皇帝。
从他开始，元老院（Senate）还在，执政官还选，但真正说了算的是一个人。

我背成一条时间轴：
共和国（约前 509-前 27）→ Augustus 前 27 终结共和、开启帝国 → Trajan（98-117）是帝国巅峰期的皇帝。

考点陷阱（必清）：
错："Trajan 是共和时期的人 / 罗马帝国就是罗马共和国。"
对：Trajan 比 Augustus 晚一百多年，他接手的是一台已经造好的帝国机器（行省、军团、道路、罗马法）。

还有一个常错点：共和国怎么崩（Caesar 那一代，公元前 44 年）是另一个故事，别跟这次混。
这次学的是帝国怎么运转，不是共和怎么死。`,
          en: `Trajan's pass devotes Node 2 to this: "I was no founder. Rome had long ceased to be
a republic."

This is what I most easily mixed up before, and teacher said AP loves to set a trap here, so it
gets its own card:
In 27 BCE, Augustus ended the republic's endless civil wars and made himself the first Roman
emperor. From him on, the Senate still met and consuls were still elected, but the one who truly
decided was a single man.

I memorize it as a timeline:
Republic (about 509-27 BCE) → Augustus ends the Republic and begins the Empire in 27 BCE →
Trajan (98-117) is the emperor of the Empire's peak.

Exam trap (must clear):
Wrong: "Trajan was from the Republic / the Roman Empire is the same as the Roman Republic."
Right: Trajan came more than a century after Augustus; he inherited an empire-machine already
built (provinces, legions, roads, Roman law).

Another common slip: how the Republic fell (Caesar's generation, 44 BCE) is a different story,
don't mix it into this one. This topic is how the Empire ran, not how the Republic died.`,
        },
      },
    },

    {
      id: 'trajan-maximum-extent-117',
      termCn: 'Trajan 与最大版图（公元 117）',
      termEn: 'Trajan and the Maximum Extent (117 CE)',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — empires maintain & expand'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'trajan',
        nodeIds: ['tr-n3', 'tr-n4', 'tr-n8', 'tr-n9'],
        xiaoweiNote: {
          cn: `Trajan 这一遍整条线就是他怎么把版图推到最大的。我把它拆成三步背：

第一步，征服 Dacia（达契亚，在多瑙河北、今罗马尼亚一带）。
两次达契亚战争（公元 101-102、105-106），对手是国王 Decebalus，他城破自尽。
Dacia 成了罗马新行省，山里的金子流向罗马。（第 3、4 节）

第二步，东征帕提亚（Parthia，今伊朗伊拉克一带），公元 113 年起，拿下 Mesopotamia
（美索不达米亚，两河流域），推到波斯湾。这一刻版图历史最大。（第 8 节）

第三步，公元 117 年 Trajan 在回程病死；继任者 Hadrian 反向操作，放弃两河流域、收缩边界。
所以"最大版图"这个纪录，永远停在公元 117 年。（第 9 节）

考点关键句：罗马版图的顶点 = 公元 117 年 = Trajan。这是这一课的招牌时间点，一定要钉死。
还有一句老师爱考的金句（Trajan 第 8 节）："最大，常常也是极限。"
版图越大，边境越长、花钱越多、远地越难管，刚拿下的东边转头就叛乱。`,
          en: `Trajan's whole pass is about how he pushed the map to its largest. I break it into
three steps:

Step one, conquer Dacia (north of the Danube, around today's Romania).
Two Dacian wars (101-102 and 105-106 CE) against King Decebalus, who killed himself when his
stronghold fell. Dacia became a new Roman province, and its mountain gold flowed to Rome.
(Nodes 3 and 4)

Step two, march east against Parthia (today's Iran and Iraq), from 113 CE, taking Mesopotamia
(the land between the rivers) and reaching the Persian Gulf. This is the moment the map was
largest in history. (Node 8)

Step three, in 117 CE Trajan died on the way home; his successor Hadrian reversed it, giving up
Mesopotamia and pulling the borders back. So the record of "largest extent" stops forever at
117 CE. (Node 9)

Key exam sentence: the peak of Rome's map = 117 CE = Trajan. This is the signature date of this
topic, nail it down. Also a line teacher loves to test (Trajan Node 8): "largest is often also
limit." The bigger the map, the longer the borders, the more money, the harder to rule far
places, and the east he just took broke into revolt almost at once.`,
        },
      },
    },

    {
      id: 'roads-aqueducts-engineering',
      termCn: '道路、输水道与工程',
      termEn: 'Roads, Aqueducts, and Engineering',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — administration / infrastructure'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'trajan',
        nodeIds: ['tr-n7'],
        xiaoweiNote: {
          cn: `Trajan 第 7 节讲治理面，其中工程这块最像 CA HSS 六年级会直接考的硬知识。

道路：帝国最盛时全境约有八万公里的硬化大道，从罗马城像血管一样伸到每个行省。
路修好了，军团能快速调动、商队能安全往来、消息能传得飞快。有句老话：条条大路通罗马。

我顺手补上故事里没细讲、但课本常一起考的工程清单：
输水道（aqueduct）把山里的水引进城市供澡堂和喷泉；
斗兽场（Colosseum）能容几万人看角斗士（gladiator）和野兽表演；
图拉真广场和大市场是 Trajan 在罗马城留下的新地标。

考点提醒：斗兽场（Colosseum）是公元 80 年 Vespasian 和 Titus 建的，比 Trajan 早一代，
别记成 Trajan 建的。Trajan 的标志建筑是图拉真广场、大市场和图拉真纪功柱。

考点关键句：罗马靠工程（路 + 水 + 公共建筑）把一个庞大帝国黏在一起，这是 Pax Romana
"秩序与太平"真实的一面。可同一条路，对商队是繁荣，对被锁的奴隶是通往拍卖台的传送带
（Dacia 奴隶第 4 节会让你亲眼看见这一面）。`,
          en: `Trajan Node 7 covers governance, and the engineering part is the kind of hard fact
CA HSS sixth grade tests directly.

Roads: at the empire's height there were about eighty thousand kilometers of paved highway across
the whole realm, reaching out from the city of Rome like veins to every province. With roads
built, legions moved fast, caravans traveled safely, and news flew. There's an old saying: all
roads lead to Rome.

Let me add the engineering list the story doesn't detail but textbooks often test together:
the aqueduct carried mountain water into cities for baths and fountains;
the Colosseum held tens of thousands to watch gladiators and beast shows;
Trajan's Forum and Market are the new landmarks Trajan left in the city of Rome.

Exam reminder: the Colosseum was built in 80 CE by Vespasian and Titus, a generation before
Trajan, don't record it as Trajan's. Trajan's signature buildings are the Forum, the Market,
and Trajan's Column.

Key exam sentence: Rome held a vast empire together by engineering (roads, water, public
buildings), the real side of the Pax Romana's "order and peace." Yet the same road is prosperity
to a caravan and a conveyor belt to the auction block for a chained slave (the Dacian captive's
Node 4 shows you that face firsthand).`,
        },
      },
    },

    {
      id: 'slavery-economic-foundation',
      termCn: '奴隶制：罗马经济的地基',
      termEn: 'Slavery as the Foundation of Rome\'s Economy',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — labor systems', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'enslaved-dacian-receiving-end',
        nodeIds: ['ed-n5', 'ed-n7', 'ed-n8'],
        xiaoweiNote: {
          cn: `Dacia 奴隶这一遍整条线就是它，第 5、7、8 节最关键。这是 AP World "labor systems"
（劳动制度）的硬考点，老师说一定要会。

规模先背死：罗马城里大约每三四个人就有一个是奴隶；整个意大利被奴役的人约 100 万到 150 万，
约占意大利人口的六分之一到四分之一（约 15%-25%）。（第 5 节）

来源：战争俘虏（主要来源）、债务、人口贩卖、奴隶所生子女。一场场边疆征服，
源源不断地把战俘变成奴隶运进帝国市场。

罗马法怎么看奴隶（第 7 节，DBQ 高频）：在罗马法里，奴隶不是"人（person）"，是"物（财产）"。
可被买卖、出租、惩罚；所生子女一出生即归主人；无权缔结法律承认的婚姻、无权拥有财产。

考点关键句（必背）：奴隶制不是罗马的"小瑕疵"，是它经济与社会的结构性地基，
与征服循环互为因果。Pax Romana 的繁荣，就建在这块地基上。

第 8 节还有一个高级点：释奴（manumission）。少数城里的奴隶能攒钱、被主人放归变自由人，
释奴的孩子甚至能成公民。但这条窄缝既是真出路，也是让多数人"为希望而顺从"的最高明的锁链。`,
          en: `The Dacian captive's whole pass is about this, with Nodes 5, 7, and 8 the key ones.
This is the hard point of AP World "labor systems," and teacher said you must know it.

Memorize the scale: in the city of Rome perhaps one in every three or four people was a slave;
across all of Italy the enslaved numbered about one million to one and a half million, roughly a
sixth to a quarter of Italy's population (about 15-25%). (Node 5)

Sources: war captives (the main one), debt, human trafficking, children born to the enslaved.
War after war on the frontier turned captives into slaves shipped into the markets without end.

How Roman law saw a slave (Node 7, high-frequency DBQ): in Roman law a slave was not a "person"
but a "thing," property. They could be bought, sold, rented, and punished; a child they bore was
the master's from birth; they had no right to a legally recognized marriage or to own anything.

Key exam sentence (must memorize): slavery was not a "small flaw" of Rome but the structural
foundation of its economy and society, in mutual cause-and-effect with the cycle of conquest.
The Pax Romana's prosperity was built on this foundation.

Node 8 also has an advanced point: manumission. A few city slaves could save money and be freed,
and a freed slave's child could even become a citizen. But this narrow crack is both a real way
out and the cleverest of chains, keeping the majority obedient "for the sake of hope."`,
        },
      },
    },

    {
      id: 'roman-law-and-the-line',
      termCn: '罗马法与那道「人」的线',
      termEn: 'Roman Law and the Line Around "Person"',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1', 'cross-topic: rule of law'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'trajan', nodeId: 'tr-n2', context: 'Trajan 接手的机器里有「一套写下来人人要守的罗马法」' },
          { lens: 'enslaved-dacian-receiving-end', nodeId: 'ed-n7', context: '罗马法第一件事是把奴隶划到「人」的圈子外，划成「物」' },
        ],
      },
      standaloneText: {
        cn: `罗马法（Roman law）是 CA HSS 和 AP World 都会点到、也是西方法律传统母题的硬概念，
故事里多处提到但没单独展开，所以单列一张卡。

罗马法是什么，先记三点：
- 它是写下来的、成文的法律，理论上人人（至少是公民）都要守、也都能援引。
- 它讲程序、讲证据、讲合同与财产，精巧而系统，影响延续了两千年。
- 它是欧洲大陆法系的远祖；"公民权 / rule of law（法治）/ 法律面前的身份"这套概念，
  深刻影响了后世西方的法律与政治传统。

为什么它跨课这么重要？
美国国父和更早的英国传统都借鉴过罗马：rule of law（法律高于个人意志、人人受同一套规则约束）
这个理念，远端连到 Magna Carta（大宪章 1215）和美国宪法。你跑过那两段历史会认得这条线。

但这张卡最要命的考点（DBQ 最爱），来自 Dacia 奴隶第 7 节：
罗马法最精巧、最公道的那一面，是对"人（person）"说的。
而它做的第一件事，是先把奴隶划到"人"的圈子外面，划成"物（财产）"。
所以问题从来不在罗马法好不好，而在那道线划在哪里：
线里面的人享受法治与公道；线外面的人，是支撑这一切的财产。

记忆锚：罗马法 = 写下来的规则 + 那道"谁算人"的线。两件事得一起记，缺一不可。`,
        en: `Roman law is a hard concept that both CA HSS and AP World touch, and a root of the
Western legal tradition. The story mentions it in several places but never unpacks it on its own,
so it gets its own card.

What is Roman law? Three points first:
- It was written, codified law that, in theory, everyone (at least every citizen) had to keep
  and could invoke.
- It dealt with procedure, evidence, contracts, and property, elegant and systematic, with an
  influence lasting two thousand years.
- It is the ancestor of continental Europe's legal systems; the ideas of "citizenship,
  rule of law, and one's legal standing before the law" deeply shaped later Western legal and
  political traditions.

Why does it matter across topics?
The American founders and the older English tradition both drew on Rome: the idea of rule of law
(law above any one person's will, everyone bound by the same rules) connects, far downstream, to
Magna Carta (1215) and the U.S. Constitution. You'll recognize this thread if you ran those topics.

But this card's deadliest exam point (a DBQ favorite) comes from the Dacian captive's Node 7:
the most elegant, fairest side of Roman law was spoken to "persons."
And the first thing it did was draw a slave outside the circle of "persons," draw them as a
"thing," property.
So the question was never whether Roman law was good, but where that line was drawn:
inside the line, people enjoy rule of law and fairness; outside the line, people are the property
that holds it all up.

Memory anchor: Roman law = written rules + the line of "who counts as a person." Hold both at
once, neither alone is the whole picture.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡最容易被写成"罗马法证明罗马把所有人当平等的人"，这是 AP 最爱抓的错。
我的口诀：罗马法不是没有公道，是它先画了一道线，把奴隶划到"人"外面，公道只对线内的人生效。
还有一句跨课的对应记下来："罗马法 = 西方 rule of law 的远祖，远端连到 Magna Carta 和美国宪法。"`,
        en: `Teacher said this card is most often miswritten as "Roman law proves Rome treated
everyone as an equal person," exactly the error AP loves to catch. My mnemonic: Roman law isn't
without fairness, it first draws a line putting slaves outside "person," and the fairness only
applies inside the line. Also memorize this cross-topic mapping: "Roman law = the distant ancestor
of Western rule of law, connecting downstream to Magna Carta and the U.S. Constitution."`,
      },
    },

    {
      id: 'citizenship-extension',
      termCn: '公民权与它的扩展',
      termEn: 'Citizenship and Its Extension',
      standardRef: ['CA HSS 6.7', 'AP World Unit 1 — integration of conquered peoples', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'provincial-elite',
        nodeIds: ['pe-n2', 'pe-n5', 'pe-n9'],
        xiaoweiNote: {
          cn: `行省精英这一遍把公民权讲得最透，第 2、5、9 节。这是 AP World"帝国怎么整合被征服者"
的核心考点。

公民权（citizenship）是什么（第 2 节）：拿到罗马公民权，意味着你在法律上和一个生在罗马城里的人
是平等的公民。你能走遍帝国受罗马法保护，你的儿子甚至可以争取进元老院。

罗马最厉害的一手（第 5 节）：它不像有些征服者永远把被征服的人按在底层，
它对"肯变成罗马人"的精英几乎敞开门。证据就在眼前：皇帝 Trajan 本人就是西班牙行省出身。
一个行省小城的家族，三代之内能出公民、出官员、甚至出皇帝。

扩展的终点（第 9 节，必清的时间点）：公元 212 年，Caracalla（卡拉卡拉）下敕令，
把罗马公民权扩及帝国境内几乎所有自由人。
考点陷阱：错——"罗马公民权一直对所有人开放"。对——它早期稀缺、逐步扩展，
212 年才扩及几乎所有自由人，而且奴隶始终被排除在外。注意 212 年是 Trajan 之后约一百年。

考点关键句：罗马用"公民身份"而不是血统来黏合多民族，这是它最深远的遗产之一。
但那道线划得再宽，线外永远站着不被算进去的奴隶。`,
          en: `The provincial elite's pass explains citizenship most fully, in Nodes 2, 5, and 9.
This is the core exam point of AP World "how empires integrate the conquered."

What citizenship is (Node 2): holding Roman citizenship meant that in law you were an equal citizen
with a man born in the city of Rome. You could travel the whole empire under Roman law's
protection, and your son could even strive for a seat in the Senate.

Rome's greatest move (Node 5): unlike some conquerors who forever press the conquered into the
bottom, Rome left an almost open door to elites willing to "become Roman." The proof is right
there: the emperor Trajan himself was born in a Spanish province. A family from a small provincial
town could produce citizens, officials, even an emperor within three generations.

The end point of the extension (Node 9, a must-clear date): in 212 CE, Caracalla issued an edict
extending Roman citizenship to nearly all free people in the empire.
Exam trap: Wrong, "Roman citizenship was always open to everyone." Right, it was scarce early and
extended step by step, reaching nearly all free people only in 212, and slaves were always
excluded. Note 212 is about a century after Trajan.

Key exam sentence: Rome bound many peoples together by "citizen status" rather than blood, one of
its most far-reaching legacies. But however wide that line was drawn, outside it forever stood the
slaves, never counted in.`,
        },
      },
    },

    {
      id: 'han-china-parallel',
      termCn: '同代对照：汉帝国',
      termEn: 'A Contemporary Parallel: Han China',
      standardRef: ['AP World Unit 1 — comparison (core skill)', 'CA HSS 6.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'trajan', nodeId: 'tr-n2', context: 'Trajan 接手的是一台靠行省/军团/道路/罗马法运转的帝国机器 — 可与汉的治理工具对照' },
        ],
      },
      standaloneText: {
        cn: `这张卡是 AP World 的核心技能 comparison（比较）专属，故事三个视角都没展开
（它们都聚焦罗马内部），但 AP World 第一单元一定会让你把罗马和同代的汉帝国放一起比，所以单列。

时间对得上吗？对得死死的：
Trajan 在位（公元 98-117）正值中国东汉（汉和帝、汉殇帝、汉安帝那几代）。
汉帝国（公元前 206-公元 220）和罗马帝国，是同一时代、欧亚大陆两端的两个古典巨型帝国。

真实历史连接（不是类比，是史实）：
- 公元 97 年（Trajan 登基前一年），东汉的甘英奉班超之命出使"大秦"（罗马），
  抵达波斯湾一带，因故未能继续西行。两大帝国彼此知道对方存在。
- 丝绸之路把汉的丝绸经中亚、帕提亚转运到罗马，罗马贵族对中国丝绸的追捧，
  甚至引发元老对"白银外流"的抱怨。两个帝国通过一条商路间接相连。

结构对照（这是 AP 要的比较框架，并列不褒贬）：
- 怎么统治庞大疆域：罗马靠军团 + 道路 + 罗马法 + 公民权（把被征服精英变成罗马人）；
  汉靠郡县制 + 官僚科层 + 察举 + 儒术（以文教与官僚整合地方）。
  罗马的整合工具偏"法律身份"，汉偏"文化教化 + 行政编户"。
- 社会底座：罗马高度依赖奴隶制（战俘为主，约占意大利人口 15%-25%，即约 1/6 到 1/4）；
  汉的基础是编户齐民的自耕农 + 豪强庄园的依附民、部分奴婢，奴婢存在但不是经济主干。
- 谁算"政治人"：罗马公民权逐步扩展（212 年扩及几乎所有自由人），但奴隶永远在线外；
  汉的"编户齐民"理论上覆盖广大平民，但实际权力集中于皇室、外戚、士大夫。

考点底线（Rule 0）：不能说罗马"先进"、汉"落后"，或反过来；也不能贴"罗马自由 vs 中国专制"
这种标签。两套帝国都在回应"如何长久统治庞大多元疆域"这个共同难题，各有智慧也各有盲点。`,
        en: `This card belongs to AP World's core skill of comparison. The story's three lenses don't
unpack it (they all focus inside Rome), but AP World Unit 1 will certainly have you compare Rome
with the contemporary Han Empire, so it gets its own card.

Do the dates line up? Exactly:
Trajan's reign (98-117 CE) falls in China's Eastern Han (the reigns of Emperors He, Shang, and An).
The Han Empire (206 BCE-220 CE) and the Roman Empire were two classical mega-empires of the same
age, at the two ends of Eurasia.

Real historical connection (not analogy, but fact):
- In 97 CE (the year before Trajan took the throne), the Eastern Han envoy Gan Ying, sent by Ban
  Chao, traveled toward "Da Qin" (Rome), reaching the area of the Persian Gulf but unable to go
  further. Each empire knew the other existed.
- The Silk Road carried Han silk through Central Asia and Parthia to Rome, and Roman nobles'
  craving for Chinese silk even drew complaints from senators about "silver flowing out." The two
  empires were indirectly linked by one trade route.

Structural comparison (the framework AP wants, set side by side without ranking):
- How to rule vast territory: Rome by legions, roads, Roman law, and citizenship (turning
  conquered elites into Romans); Han by the commandery-county system, a bureaucratic hierarchy,
  recommendation-based selection, and Confucian ideology (integrating regions through education
  and bureaucracy). Rome's tool leans toward "legal status," Han toward "cultural teaching plus
  administrative household registration."
- The social base: Rome relied heavily on slavery (war captives mainly, about 15-25% of Italy's
  population, roughly a sixth to a quarter); Han rested on registered free farmers plus dependents of great estates
  and some bondservants, who existed but were not the economic mainstay.
- Who counts as a "political person": Roman citizenship extended step by step (reaching nearly all
  free people in 212), but slaves were forever outside the line; Han's "registered commoners"
  covered the broad populace in theory, but real power concentrated in the imperial house, consort
  families, and the scholar-officials.

Exam bottom line (Rule 0): you cannot say Rome was "advanced" and Han "backward," or vice versa,
nor stick on labels like "free Rome vs despotic China." Both empires answered the shared hard
problem of "how to rule a vast, diverse realm for a long time," each with its own wisdom and blind
spots.`,
      },
      xiaoweiNote: {
        cn: `老师说 AP World 几乎一定会考"罗马 vs 汉"的比较，最常考"两个帝国怎么统治、底座靠谁"。
我的对照口诀：罗马靠"法律身份 + 公民权 + 奴隶地基"；汉靠"官僚科举雏形 + 儒术 + 编户自耕农"。
最重要的是结尾那条底线：不准说谁先进谁落后，只比"各自怎么解决同一道难题"。
甘英出使大秦（公元 97）是个超好用的记忆钩子，证明这俩帝国是真的同代、还彼此知道对方。`,
        en: `Teacher said AP World will almost certainly test the "Rome vs Han" comparison, most often
"how the two empires ruled, and who their base rested on." My contrast mnemonic: Rome by "legal
status + citizenship + slave foundation"; Han by "a proto-bureaucratic exam path + Confucianism +
registered free farmers." Most important is the closing bottom line: never say who was advanced or
backward, only compare "how each solved the same hard problem." Gan Ying's mission to Da Qin (97
CE) is a great memory hook, proving these two empires were truly contemporaries who knew of each
other.`,
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
      en: `Rome in 117 CE had roads, law, and nearly two centuries of peace, all real, all
remarkable. Yet this "greatness" was fed by conquering others without end and turning about a
sixth to a quarter of Italy's people (about 15-25%) into slaves.

Should this "greatest Rome" be seen as a "machine fed on conquest and slavery," or as a "real
heritage of civilization"? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你会不会用证据，不看你站哪边。
- "机器"这边的证据：意大利约 15%-25%（1/6 到 1/4）人口被奴役、罗马法把奴隶划成"物"、
  图拉真纪功柱把毁掉 Dacia 的战争刻成荣耀、最骄傲的大道也把奴隶运向拍卖台。
- "文明遗产"这边的证据：八万公里道路、成文罗马法、公民权逐步扩展（212 年扩及几乎所有自由人）、
  影响后世两千年的法律传统。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边。最强的一句是"它能成为文明遗产，
恰恰是踩着征服与奴役"——这种"两者同体"的分析，就是 AP 要的 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer, AP scoring looks at whether you use evidence, not which
side you pick.
- Evidence for "machine": about 15-25% of Italy enslaved (roughly a sixth to a quarter), Roman law drawing slaves
  as "things," Trajan's Column carving the war that destroyed Dacia as glory, the proudest roads
  also carrying slaves to the auction block.
- Evidence for "heritage of civilization": eighty thousand kilometers of road, codified Roman law,
  citizenship extended step by step (reaching nearly all free people in 212), a legal tradition
  shaping two thousand years.
High-scoring move: acknowledge both sides stand, then explain why you lean one way. The strongest
line is "the very way it became a heritage was by treading on conquest and slavery," that "both at
once" analysis is the complexity AP wants.`,
      conceptsActivated: ['pax-romana', 'slavery-economic-foundation'],
    },
    {
      id: 'q2',
      cn: `罗马征服一个地方，靠的不只是军团。那个行省精英没人拿刀逼他，
是他自己掏钱把家乡修得像罗马，自愿交出了自己的语言和身份，还心甘情愿地觉得"我也是罗马人"。

如果你是 AP 老师，要出一道题考"自愿的同化和被迫的征服，哪个更彻底"，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `Rome conquered a place with more than legions. That provincial elite was forced by no one;
he paid out of his own pocket to make his hometown look like Rome, willingly handed over his
language and identity, and came to feel, gladly, "I too am a Roman."

If you were an AP teacher writing a question on "which goes deeper, willing assimilation or forced
conquest," how would you phrase it? Write your question and explain what it's meant to make
students see.`,
      hintCn: `提示：好的 DBQ 题通常逼学生同时看见两件事，而不是二选一。
可以从行省精英的角度切入——他在故事里说："最难的从来不是被强迫，是你自愿走的那条路确实给了你
想要的东西，可它同时在悄悄改写你是谁。"这句话点出"自愿"的可怕：用刀征服会激起反抗，
把人变成"自己人"反而不会，因为他自己愿意。
你的题目可以让学生比较"军团征服 Dacia（看得见的暴力）"和"用公民权和好处收编行省精英
（看不见的同化）"——为什么后者反而是罗马"最高明"的一手？哪一种让被征服者更难翻身？`,
      hintEn: `Hint: a good DBQ forces students to see two things at once, not pick one.
You can come at it through the provincial elite, who says in the story: "the hardest thing was
never being forced; it's that the road you walked willingly really gave you what you wanted, and at
the same time quietly rewrote who you are." That line names the danger of "willing": conquest by
the sword provokes resistance, turning people into "your own" does not, because they want it
themselves. Your question could have students compare "legions conquering Dacia (visible violence)"
with "co-opting provincial elites through citizenship and benefits (invisible assimilation)," and
ask why the latter was Rome's "cleverest" move, and which leaves the conquered less able to recover.`,
      conceptsActivated: ['citizenship-extension', 'roman-law-and-the-line', 'pax-romana'],
    },
    {
      id: 'q3',
      cn: `AP World 会让你把同代的罗马和汉，这两个欧亚大陆两端的古典巨型帝国放在一起比。
它们都要回答同一个难题：怎么长久统治一片庞大、多民族的疆域？

你觉得罗马用"法律身份 + 公民权"黏合多民族，和汉用"文化教化 + 编户官僚"整合地方，
哪一套更适合统治一个庞大帝国？还是说这个问题本身就提错了？
请用每个帝国的一个具体制度来支持你的看法。`,
      en: `AP World will have you compare contemporary Rome and Han, two classical mega-empires at
the two ends of Eurasia. Both had to answer the same hard problem: how to rule a vast,
multi-ethnic realm for a long time.

Do you think Rome's binding of many peoples by "legal status plus citizenship," or Han's
integration of regions by "cultural teaching plus registered bureaucracy," better suited ruling a
vast empire? Or is the question itself wrongly posed? Support your view with one specific
institution from each empire.`,
      hintCn: `提示：先记住 Rule 0 这条底线——不准说谁"先进"、谁"落后"，也别贴"罗马自由 vs 中国专制"
这种标签。AP 不要你选出"赢家"，要你比"各自怎么解决同一道难题"。
具体制度可以举：罗马的公民权（212 年 Caracalla 敕令扩及几乎所有自由人）、罗马法、军团 + 道路；
汉的郡县制、察举、儒术。
进阶思考：两套都把多数生产者压在底层（罗马靠奴隶、汉靠自耕农和依附民），
"谁算完整的政治人"两个文明都没真正解决。这道题最好的答案，可能是先拆穿"哪个更好"这个提法本身
——它们是两种不同的设计智慧，各有盲点。AP 看的是你能不能用真实制度把抽象论点钉在证据上。`,
      hintEn: `Hint: first remember Rule 0, the bottom line, no saying who was "advanced" or
"backward," no labels like "free Rome vs despotic China." AP doesn't want you to crown a "winner,"
it wants you to compare "how each solved the same hard problem."
For specific institutions, try: Rome's citizenship (the Caracalla edict of 212 extending it to
nearly all free people), Roman law, legions plus roads; Han's commandery-county system,
recommendation-based selection, Confucianism.
Going deeper: both pressed most producers into the bottom (Rome by slaves, Han by free farmers and
dependents), and "who counts as a full political person" was unsolved in both civilizations. The
best answer may first take apart the very framing of "which is better," since they are two
different designs of wisdom, each with blind spots. AP wants you to pin the abstract claim to
evidence with real institutions.`,
      conceptsActivated: ['han-china-parallel', 'citizenship-extension', 'republic-to-empire-augustus'],
    },
  ],
};

export default notebook;
