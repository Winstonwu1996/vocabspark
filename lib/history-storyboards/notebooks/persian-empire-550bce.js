// ─── 同伴笔记本架构 v1 · Persian (Achaemenid) Empire 550-330 BCE ─────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演「学习同伴」
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 11 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + 卡顶层 xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + 卡顶层 standaloneText (mini-lesson) + xiaoweiNote
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（居鲁士 / 一名 satrap / 被放归犹太人 三条线）
//   - notebook 提供考点闭环（satrapy/分权制衡、标准化 daric/Aramaic、Royal Road、宗教宽容作治理术、
//     Cyrus Cylinder anachronism、Behistun、来源对照 POV、波斯 vs 秦对照 — 补完 AP World 古典帝国行政课纲）
//
// 课纲对齐：
//   - CA HSS Grade 6（古代文明）· 西亚 / 波斯单元
//   - AP World History — 古典帝国行政（satrapy / 标准化 / 道路 / 宗教治理 / 跨文明对位）
//   - AP DBQ rubric — POV/purpose 来源对照
//
// 事实地基：对账 narrative 附录 A/B/C + §2/§3/§5
//   - 立国约 220 年（约前 550 → 前 330）
//   - Bessus：前 330 杀大流士三世，前 329 被亚历山大处死（账本年代分层）
//   - Cyrus Cylinder「人权宣言」= 20 世纪现代标签，本质前 6 世纪王家宣传文书（清坑）
//   - 波斯 vs 秦：秦统一前 221，距居鲁士建国约三百年（已与 storyboard / narrative §8 统一口径）
//
// schemaVersion: 1 · notebookVersion: persian-empire-550bce-v1

export var notebook = {
  topicId: 'persian-empire-550bce',
  topicNameCn: '波斯帝国（阿契美尼德）550-330 BCE',
  topicNameEn: 'The Persian (Achaemenid) Empire 550-330 BCE',
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
    cn: `今天老师说我们要学波斯帝国（阿契美尼德，约公元前 550-330）。
她说这是 AP World「古典帝国怎么管一大片多民族的地」的最经典案例。考点不是背日期，是「行政技术」——就是「用什么方法让几千万不同的人都听你的」。

她在白板上写了一串名字：

Cyrus the Great（居鲁士大帝）、Darius I（大流士一世）、
Xerxes I（薛西斯）、Bessus（贝苏斯）

还有一串词：satrap / satrapy（总督 / 行省）、checks and balances（分权制衡）、
daric（达里克金币）、Aramaic（阿拉米语）、Royal Road（御道）、
Ahura Mazda（阿胡拉·马兹达）、Cyrus Cylinder（居鲁士圆柱）、Behistun（贝希斯敦铭文）。

我先记下来，等下读三个故事——居鲁士（开国之王）、一名总督（夹在中间的地方长官）、一个被放回家的犹太人（被帝国攥在手心的小人物）。读完再回来对照这张单子，看我能不能解释每个词。

老师说了一句我抄在笔记本第一页：「波斯不是希腊故事里的专制反派背景板，它是当时世界最大、最先进的帝国。它证明了：统治一个又大又杂的天下，不一定要把所有人都变成同一种人。」`,
    en: `Today my teacher said we're learning the Persian (Achaemenid) Empire (c. 550-330 BCE).
She said it's AP World's most classic case of "how a classical empire runs a vast multi-ethnic land." The exam isn't about memorizing dates — it's about "administrative technique," meaning what methods you use to get tens of millions of different people to follow you.

She wrote a string of names on the board:

Cyrus the Great, Darius I, Xerxes I, Bessus

Plus a string of terms: satrap / satrapy, checks and balances, daric, Aramaic,
Royal Road, Ahura Mazda, Cyrus Cylinder, Behistun.

Let me write these down. After I read the three stories — Cyrus (the founding king), a governor (the local official caught in the middle), and a freed Jewish exile (a small person held in the palm of the empire) — I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page: "Persia is not the despotic villain backdrop of the Greek story — it was the largest, most advanced empire of its time. It proved that ruling a huge and mixed realm does not require turning everyone into one kind of person."`,
    keyTerms: [
      { cn: '阿契美尼德（波斯第一帝国王朝）', en: 'Achaemenid' },
      { cn: '众王之王 / shahanshah', en: 'King of Kings / shahanshah' },
      { cn: '总督 / 行省', en: 'satrap / satrapy' },
      { cn: '分权制衡', en: 'checks and balances' },
      { cn: '王的「眼睛和耳朵」', en: "the king's eyes and ears" },
      { cn: '达里克（金币）/ 西格罗斯（银币）', en: 'daric / siglos' },
      { cn: '阿拉米语（行政通用语）', en: 'Aramaic' },
      { cn: '御道', en: 'Royal Road' },
      { cn: '阿胡拉·马兹达（琐罗亚斯德教至高善神）', en: 'Ahura Mazda' },
      { cn: '琐罗亚斯德教', en: 'Zoroastrianism' },
      { cn: '居鲁士圆柱', en: 'Cyrus Cylinder' },
      { cn: '贝希斯敦铭文', en: 'Behistun inscription' },
      { cn: '巴比伦之囚', en: 'Babylonian Exile' },
      { cn: '波斯波利斯 / 帕萨尔加德', en: 'Persepolis / Pasargadae' },
      { cn: '波希战争（马拉松 / 萨拉米斯）', en: 'Greco-Persian Wars (Marathon / Salamis)' },
      { cn: '郡县制（秦的对照）', en: 'commandery-county system (Qin contrast)' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '居鲁士大帝',
        nameEn: 'Cyrus the Great',
        ipa: '/ˈsaɪrəs/',
        roleCn: '阿契美尼德开国之王，把「宽容」当成征服武器，放归被掳犹太人、敬奉巴比伦的神 Marduk',
        roleEn: 'Founder of the Achaemenid Empire, who made tolerance a weapon of conquest — freed the exiled Jews and honored Babylon\'s god Marduk',
        mustKnow: true,
        audioKey: 'cyrus-the-great',
      },
      {
        nameCn: '大流士一世',
        nameEn: 'Darius I',
        ipa: '/dəˈraɪəs/',
        roleCn: '帝国「总工程师」，行省制、分权制衡、daric 金币、Aramaic 行政语、Royal Road、Behistun 三语铭文都是他建的',
        roleEn: 'The empire\'s "chief engineer" — he built the satrapy system, checks and balances, the daric, Aramaic administration, the Royal Road, and the trilingual Behistun inscription',
        mustKnow: true,
        audioKey: 'darius-i',
      },
      {
        nameCn: '薛西斯一世',
        nameEn: 'Xerxes I',
        ipa: '/ˈzɜːrksiːz/',
        roleCn: '大流士之子，前 480 年亲征希腊，Salamis 海战大败。从波斯帝国的尺度看，这只是西北边境一场没打赢的远征',
        roleEn: 'Darius\'s son, who led the 480 BCE Greek campaign and lost the naval battle at Salamis — on the empire\'s scale, only a failed northwest border campaign',
        mustKnow: true,
        audioKey: 'xerxes-i',
      },
      {
        nameCn: '贝苏斯',
        nameEn: 'Bessus',
        ipa: '/ˈbɛsəs/',
        roleCn: 'Bactria 的总督（satrap），前 330 杀死末代王大流士三世——灭波斯的最后一刀恰恰来自一个总督。前 329 被亚历山大处死',
        roleEn: 'Governor (satrap) of Bactria who killed the last king Darius III in 330 BCE — the death blow to Persia came from one of its own governors (he was executed by Alexander in 329 BCE)',
        mustKnow: true,
        audioKey: 'bessus',
      },
      {
        nameCn: '亚历山大大帝',
        nameEn: 'Alexander the Great',
        ipa: '/ˌælɪɡˈzændər/',
        roleCn: '马其顿王，前 331 Gaugamela 灭波斯，却大量继承了波斯的行省制、御道与「众王之王」姿态',
        roleEn: 'King of Macedon who destroyed Persia at Gaugamela (331 BCE) but inherited much of its satrapy system, Royal Road, and "King of Kings" posture',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '冈比西斯二世',
        nameEn: 'Cambyses II',
        ipa: '/kæmˈbaɪsiːz/',
        roleCn: '居鲁士之子，前 525 征服埃及，把最古老的文明也纳入帝国',
        roleEn: 'Cyrus\'s son, who conquered Egypt in 525 BCE, folding even that oldest civilization into the empire',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '大流士三世',
        nameEn: 'Darius III',
        ipa: '/dəˈraɪəs/',
        roleCn: '末代波斯王，败于 Gaugamela，败逃中被自己的总督 Bessus 所杀',
        roleEn: 'The last Persian king, defeated at Gaugamela and killed in flight by his own governor Bessus',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'satrapy-checks-and-balances',
      termCn: 'satrapy 行省制与分权制衡',
      termEn: 'The Satrapy System & Checks and Balances',
      defCn: '大流士把帝国分成约 20 个行省（satrapy），每个行省派一名总督（satrap）管理。为了防止总督离王太远、权力太大而造反，大流士同时派了军事指挥官和监察官在旁边互相牵制。这套「一权配三盯」的设计叫分权制衡（checks and balances）。',
      defEn: 'Darius divided the empire into about 20 provinces (satrapies), each run by a governor (satrap) with tax, military, and judicial power. To stop governors from rebelling while thousands of miles from the king, Darius also placed a military commander and an inspector alongside each one to watch each other. This "one authority watched by three" design is called checks and balances.',
      standardRef: ['AP World — classical empire administration', 'CA HSS 6.x (Persia)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'satrap-mediator',
        nodeIds: ['per-satrap-n2', 'per-satrap-n3'],
        xiaoweiNote: {
          cn: `总督那条故事线里整段就是讲这个。大流士把帝国分成约 20 个行省（satrapy），每个派一个总督（satrap）管。收税、征兵、司法权全在他手里——在本地人眼里他几乎就是王。

可问题立刻来了：权力给了他、他又离王几千里，怎么防他造反？大流士的答案叫**分权制衡（checks and balances）**。我把它背成「一权配三盯」：
1. **军事指挥官**，管驻军，军队不完全听总督的；
2. **直接对王负责的书记 / 监察官**；
3. 王的**「眼睛和耳朵（the king's eyes and ears）」**，随时来巡查的官员。

考点关键句：分权制衡的目的 = **让总督有足够权去替王干活，又没足够权去背叛王**。

注意别搞混——总督（satrap）是**世袭、半自治、权力极大**的「本地小王」，不是秦那种随时能撤换的流官。这个区别正是波斯 vs 秦对照的核心，另有一张卡专门讲。`,
          en: `The governor storyline, nodes 2 and 3, is all about this. Darius divided the empire into about 20 provinces (satrapies), each run by a governor (satrap) — tax, troops, and justice all in his hands; to the locals he is almost the king.

The problem comes at once: with that power, and thousands of miles from the king, how do you stop him from rebelling? Darius's answer is **checks and balances**. I memorize it as "one power watched by three":
1. A **military commander** whose garrison does not fully obey the governor;
2. A **secretary / inspector** who reports straight to the king;
3. The king's **"eyes and ears"** — roving officials who may audit at any time.

Key exam sentence: the aim of checks and balances = **give the governor enough power to do the king's work, and not enough to betray him.**

Don't mix it up — a governor (satrap) was a **hereditary, semi-autonomous, immensely powerful "little local king,"** not a swappable rotating official like Qin's. That difference is the core of the Persia-vs-Qin contrast — it has its own card.`,
        },
      },
    },

    {
      id: 'standardization-daric-aramaic',
      termCn: '标准化：daric 货币与 Aramaic 行政语',
      termEn: 'Standardization: the Daric & Aramaic',
      defCn: '大流士让全帝国用同一种金币（daric，达里克）收税、发军饷，又选了一种各地商人本来都懂的语言——阿拉米语（Aramaic）——作为全帝国公文的通用语。这两样合在一起叫标准化：不要求大家生活方式一样，只统一最关键的几样，让几十个行省能像零件一样咬合进同一台机器。',
      defEn: 'Darius made the whole empire use one gold coin (the daric) for taxes and soldiers\' pay, and chose a language merchants across the region already knew — Aramaic — as the official language for all government documents. Together these are called standardization: not demanding everyone live the same way, just unifying the most critical pieces so dozens of provinces can fit together like parts of one machine.',
      standardRef: ['AP World — classical empire administration', 'CA HSS 6.x (Persia)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'satrap-mediator',
        nodeIds: ['per-satrap-n5'],
        xiaoweiNote: {
          cn: `总督那条故事线「把杂乱的地连进帝国」靠的就是大流士的标准化。两样：
1. **钱**——统一金币 **daric（达里克）**，配银币 **siglos**，主要在 Susa、Sardis 王家铸币地铸。从前各地各用各的钱，现在收税、付军饷都用同一套。
2. **字**——**Aramaic（阿拉米语）** 作帝国行政通用语。

这里有个老师反复强调的**关键点**：王**没有强迫所有人说波斯语**。他选了一门本就在近东到处流通的「商用通用语」。从埃及到印度河，所有行省的公文都能看懂、能往上递。

考点关键句：标准化（统一货币 + 通用行政语）是**「不强求大家变一样、只统一最关键的几样」**的高明统一术。几十个原本各过各的行省，才能像零件一样咬合进同一台机器。`,
          en: `The governor storyline, the part about "connecting the jumbled land into the empire," rests on Darius's standardization. Two things:
1. **Money** — a unified gold coin, the **daric**, with a silver **siglos**, minted mainly at royal centers like Susa and Sardis. Where each land once used its own money, now tax and soldiers' pay are reckoned in one coinage.
2. **Script** — **Aramaic** as the empire's administrative language.

A key point my teacher kept stressing: the king **did not force everyone to speak Persian** — he chose a "business language" already circulating across the Near East. From Egypt to the Indus, every province's documents could be read and passed up the line.

Key exam sentence: standardization (one currency + one administrative language) is the clever art of **"not demanding everyone be the same, only standardizing the few most critical things"** — so dozens of provinces that once went their own way could mesh, like parts, into one machine.`,
        },
      },
    },

    {
      id: 'royal-road',
      termCn: 'Royal Road 御道与驿传',
      termEn: 'The Royal Road & Relay System',
      defCn: '大流士修了一条从首都 Susa 一直通到小亚细亚 Sardis 的大路，约 2500 公里，沿途设驿站换马。一道加急消息据说约一周就能跑完全程。这条路叫御道（Royal Road），是帝国把政令、军令、情报快速送到边疆的「神经系统」。',
      defEn: 'Darius built a road running from the capital Susa all the way to Sardis in Asia Minor, about 2,500 km, with relay stations to change horses along the way. An urgent message could reportedly cross it in about a week. This road, called the Royal Road, was the empire\'s "nervous system" for getting orders, troops, and intelligence to the frontier fast.',
      standardRef: ['AP World — infrastructure / connectivity', 'CA HSS 6.x (Persia)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'satrap-mediator',
        nodeIds: ['per-cyrus-n6', 'per-satrap-n6', 'per-exile-n6'],
        xiaoweiNote: {
          cn: `这条暗线三个故事都碰到了——**Royal Road（御道）** 从 **Susa** 一直通到小亚细亚的 **Sardis**，约 **2500 公里**，沿途设驿站换马，一道加急消息据说约**一周**就能跑完全程。

我最喜欢的是同一条路在三个故事里的三种意义：
- **居鲁士那条线**：一道令要跑遍帝国、跑到每个总督手里才算数，路是「帝国的神经」。
- **总督那条线**：王的来信顺路而来，一半是授权、一半是监视——既是命脉，也是套脖子的绳。
- **被放归犹太人那条线**：他用两条腿沿这条路走几个月回家。同一条路，载着王的权力，也载着他的命运。

⚠️ **注意**：那套最完整的御道驿传，其实是居鲁士**之后的大流士**才修完整的——居鲁士那条故事线里特意标了这一点。

考点关键句：Royal Road = 帝国把政令 / 军令 / 情报快速送达边疆的「神经系统」。大帝国的命，系在「信息和军队能多快到达边疆」上。`,
          en: `This is a thread all three stories touch. The **Royal Road** ran from **Susa** all the way to **Sardis** in Asia Minor, about **2,500 km**, with relay stations to change horses; an urgent message, they say, could cross it in about **a week**.

My favorite part is what the same road means in each story:
- **In Cyrus's story**: one order must run across the empire into every governor's hand to count — the road is "the empire's nerve."
- **In the governor's story**: the king's letter arrives down the road, half authorization, half surveillance — both a lifeline and a rope around the neck.
- **In the freed Jew's story**: he walks home along it for months on his own two legs — the same road carries the king's power and his fate.

⚠️ **Note**: the fully built relay system was actually completed by **Darius, after Cyrus** — Cyrus's storyline flags this specifically.

Key exam sentence: the Royal Road = the "nervous system" that sped orders, troops, and intelligence to the frontier — a great empire's life rests on "how fast information and armies can reach the edge."`,
        },
      },
    },

    {
      id: 'religious-tolerance-as-governance',
      termCn: '宗教/文化宽容作为治理术',
      termEn: 'Religious & Cultural Tolerance as a Tool of Rule',
      defCn: '波斯王自己信奉一种叫琐罗亚斯德教（Zoroastrianism）的宗教，至高善神叫 Ahura Mazda。但他不强迫被征服的人改信，反而出钱修各地的神庙，尊重各族自己的神和法律。这种做法叫「宗教宽容」。它既是一种文明价值，也是精算过的统治策略——让被征服者感恩、各安其位，比强压省钱好管。',
      defEn: 'The Persian king followed a religion called Zoroastrianism, whose supreme good god is Ahura Mazda. But he did not force conquered peoples to convert — instead he funded local temples and respected each people\'s gods and laws. This practice is called religious tolerance. It was both a civilizational value and a calculated governing strategy: a grateful, settled population is cheaper and easier to rule than one that is held down and hates you.',
      standardRef: ['AP World — religion and state', 'AP DBQ rubric', 'CA HSS 6.x (Persia)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'cyrus-actor',
        nodeIds: ['per-cyrus-n5', 'per-cyrus-n7', 'per-cyrus-n10'],
        xiaoweiNote: {
          cn: `居鲁士那条故事线里有几节整段就是讲这个——这是本课**最高频、最像 AP DBQ**的考点。

波斯王自己奉 Ahura Mazda，但**不强迫被征服者改信**，反而资助、修复各地神庙，尊重各族的神和法。为什么？居鲁士自己算过一笔账：帝国里几十个民族、几十种神、几十种法，硬把所有人捏成波斯人，得花多少兵、多少钱去镇压？会把每个被征服者都逼成敌人。所以反过来——「保留你的神、你的法、你的家，只要认我这个王」。

老师反复纠正的**两面思辨**（AP 不让你 0/1 回答）：
- 一面：宽容是**真实的文明价值**——第一个证明可以靠尊重、而不是抹平，统治几千万人。
- 另一面：宽容是**精算过的统治成本账**——感恩、各安其位的被征服者比被压着、恨你的人省钱好管。

考点关键句：最好的答案是**「两者同时为真」**。一种真实的文明价值 + 一套真实的统治算计，长在同一个居鲁士身上，分不开。这正是 AP 要的 complexity（复杂性）。`,
          en: `Several nodes in Cyrus's storyline are entirely about this — the **highest-frequency, most DBQ-like** point in the topic.

The Persian king honored Ahura Mazda but **did not force the conquered to convert**; instead he funded and repaired local temples and respected each people's gods and laws. Why? Cyrus did the arithmetic: the empire held dozens of peoples, gods, and laws — how many soldiers and how much money would it cost to crush them all into Persians? It would turn every conquered person into an enemy. So he reversed it: "keep your god, your law, your home, as long as you accept me as king."

The two-sided thinking my teacher kept correcting (AP forbids a 0/1 answer):
- One side: tolerance was a **real civilizational value** — the first proof that you can rule tens of millions through respect rather than erasure.
- Other side: tolerance was a **carefully calculated cost ledger** — a grateful, settled people is cheaper and easier to rule than one held down and hating you.

Key exam sentence: the best answer is **"both are true at once"** — a real civilizational value plus a real calculation of rule, grown on the same Cyrus, inseparable. That's exactly the complexity AP rewards.`,
        },
      },
    },

    {
      id: 'cyrus-jewish-return-ezra',
      termCn: '放归犹太人与来源对照（《以斯拉记》）',
      termEn: 'The Jewish Return & Source Comparison (Book of Ezra)',
      defCn: '前 539 年居鲁士攻下巴比伦后下诏：被掳的犹太人可以回家，可以回耶路撒冷重建圣殿，连被抢走的圣殿器物都归还。这件事的主要史料是犹太人自己的《以斯拉记》，所以居鲁士被写成「上帝拣选的解放者」。读史料时先问「这是谁在讲、为什么这么讲」，叫 POV/purpose（来源视角与目的）分析，是 AP 考试反复奖励的技能。',
      defEn: 'After taking Babylon in 539 BCE, Cyrus decreed that the exiled Jews could go home, rebuild the Temple in Jerusalem, and even get back the Temple vessels that had been taken. The main source for this event is the Jews\' own Book of Ezra, which is why Cyrus is written there as a "liberator chosen by God." Asking "who is telling this, and why this way" when reading a source is called POV/purpose analysis — a skill AP repeatedly rewards.',
      standardRef: ['AP World — religion and state', 'AP DBQ rubric (POV/purpose)', 'CA HSS 6.x'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'conquered-subject-receiving-end',
        nodeIds: ['per-exile-n4', 'per-exile-n5', 'per-exile-n10'],
        xiaoweiNote: {
          cn: `被放归的犹太人那条故事线里有几节最戳人。前 539 年居鲁士攻下巴比伦后下诏：被掳的犹太人**愿意回去的可以回去，还可以回耶路撒冷重建圣殿**，连被抢走的圣殿器物都归还。这是「巴比伦之囚」的转折点（接 ancient-israel 那一课）。

这张卡的 AP **核心技能是 POV / 来源对照**——老师说这是 DBQ 反复奖励的功夫：
- 这道令的主要史料是**犹太人自己的《以斯拉记》**，所以居鲁士被写成「上帝拣选的解放者」，是少数被称「受膏者」的外邦人。这很自然，因为这是「**我们**对救我们的人」的记忆。
- 同一个居鲁士，从**波斯官方**（Cyrus Cylinder，只讲巴比伦和 Marduk，根本没单独提犹太人）看、从**希腊人**（希罗多德）看，是另外两张完全不同的脸。

考点关键句：读到关于一个人的「事实」，先问一句**「这是谁在讲、为什么这么讲」（POV/purpose）**——这是 AP 读史最要紧的功夫。同一个居鲁士，三种来源、三张脸。`,
          en: `Several nodes in the freed Jew's storyline hit hardest. In 539 BCE, after taking Babylon, Cyrus decreed that the exiled Jews **who wished to go home might go, and might return to Jerusalem and rebuild the Temple**, even returning the looted Temple vessels. This is the turning point of the "Babylonian Exile" (it follows the ancient-israel lesson).

This card's AP **core skill is POV / source comparison** — the move DBQs reward again and again:
- The main source for this decree is the Jews' **own Book of Ezra** — so Cyrus is written as a "liberator chosen by God," one of the few foreigners called "anointed." Natural, because it is "**our** memory of the one who saved us."
- The same Cyrus, seen from the **Persian official** side (the Cyrus Cylinder, which speaks of Babylon and Marduk and never singles out the Jews) or from the **Greeks** (Herodotus), is two wholly different faces.

Key exam sentence: when you read a "fact" about a person, first ask **"who is telling this, and why this way" (POV/purpose)** — the most important skill in AP source reading. One Cyrus, three sources, three faces.`,
        },
      },
    },

    {
      id: 'greco-persian-wars-perspective',
      termCn: '波希战争与「视角决定重要性」',
      termEn: 'The Greco-Persian Wars & "Perspective Sets Importance"',
      defCn: '前 490 年和前 480 年，波斯两次远征希腊城邦，在 Marathon（马拉松）和 Salamis（萨拉米斯）接连受挫。希腊人把这两场战役写成「自由战胜专制」的史诗。但从波斯帝国的尺度看，希腊只是西北边境一场没打赢的远征——帝国主体几乎没受伤，之后又繁荣了约一个半世纪。同一场战争，视角不同，「重要性」就完全不一样，这叫 perspective（视角）。',
      defEn: 'In 490 BCE and 480 BCE, Persia twice campaigned against the Greek city-states and failed — checked at Marathon and then at Salamis. The Greeks wrote these battles as an epic of "freedom defeating tyranny." But on the Persian empire\'s scale, Greece was just one failed border campaign in the far northwest — the empire\'s core was barely scratched, and it prospered for another century and a half. The same war looks completely different depending on your perspective.',
      standardRef: ['AP World — conflict and perspective', 'AP DBQ rubric', 'CA HSS 6.x'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'satrap-mediator',
        nodeIds: ['per-satrap-n8'],
        xiaoweiNote: {
          cn: `总督那条故事线里讲到它，而且角度很特别。前 490、前 480 年，大流士和薛西斯两次远征希腊城邦都没打下来（**Marathon 马拉松、Salamis 萨拉米斯**接连受挫）。

老师说这张卡最有用的不是背战役，是**「视角决定同一场战争的重要性」**：
- **希腊人**笔下：这是「自由战胜专制」的**史诗**、文明存亡之战。
- **波斯帝国**尺度看：希腊只是西北角一场**没打赢的边境战事**——帝国主体几乎毫发无损，之后又繁荣了约一个半世纪。

考点关键句：帝国真正的内伤**从来不在边境，在内部**——总督叛乱、宫廷继承斗争、行省离心，才是慢慢蛀空它的东西。

❌ 清坑：「波希战争后波斯元气大伤从此衰落」→ ✅ 那只是边境一场没打赢的远征。波斯直到前 330 才亡于亚历山大。`,
          en: `The governor's storyline covers this — from an unusual angle. In 490 and 480 BCE, Darius and Xerxes twice campaigned against the Greek city-states and failed both times (checked at **Marathon**, then **Salamis**).

Teacher said the most useful thing here isn't memorizing battles, it's **"perspective sets the importance of the same war"**:
- In **Greek** writing: an **epic** of "freedom defeating tyranny," a war for civilization's survival.
- On the **Persian empire's** scale: Greece was one **failed border campaign** in the far northwest — the core barely scratched, and it prospered for another century and a half.

Key exam sentence: the empire's real wound was **never at the border, but inside** — governor revolts, succession fights, and provincial drift were what slowly hollowed it out.

❌ Misconception to clear: "after the Greco-Persian Wars Persia was crippled and declined" — ✅ that was just one failed border expedition. Persia did not fall until 330 BCE, to Alexander.`,
        },
      },
    },

    {
      id: 'persia-vs-qin-comparison',
      termCn: '波斯 vs 秦：大一统的两条路',
      termEn: 'Persia vs Qin: Two Roads to "Unified Rule"',
      defCn: '同一道难题——「怎么统治一个又大又杂的天下」——波斯和秦给出了截然相反的答案。波斯让地方总督世袭、半自治，靠分权盯住他们；秦废除世家，中央派「流官」随时可换。波斯靠宗教宽容接受差异；秦靠「书同文」推动文化统一。这种跨文明的对照，是 AP 比较题的黄金素材。',
      defEn: 'The same hard question — "how to rule a huge and mixed realm" — Persia and Qin answered in opposite ways. Persia let local governors be hereditary and semi-autonomous, watching them with checks and balances; Qin abolished hereditary rulership and sent centrally appointed "rotating officials" who could be replaced at any time. Persia used religious tolerance to accept difference; Qin used a unified writing system to push cultural integration. This cross-civilization comparison is the gold standard for AP comparison questions.',
      standardRef: ['AP World — comparative empire (cross-civilization)', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'conquered-subject-receiving-end',
        nodeIds: ['per-satrap-n11', 'per-exile-n9'],
        xiaoweiNote: {
          cn: `总督那条线和被放归犹太人那条线都讲了这个对照——这是 AP 跨文明比较题的**黄金素材**，也是给我们华裔学生最有共鸣的一张卡。阿契美尼德波斯（前 550-330）大致对应中国**春秋晚期到战国**，约**三百年后**秦统一六国（前 221）给出了截然相反的答案。

三组对照，我背成一张表：
| 维度 | 波斯 | 秦 |
|---|---|---|
| **地方** | 总督：世袭 / 半自治的「本地小王」+ 分权盯住 | 郡县：中央任免、有任期、可调动的「流官」，随时换 |
| **连通** | Royal Road 御道 + 驿传 | 驰道 + 驿传 + 车同轨 |
| **文化** | 宗教宽容（多元拼盘，接受差异） | 书同文（熔炉，让大家更一样） |

考点关键句：波斯的逻辑是「**你保留你的，只要认我这个王**」；秦的逻辑是「**我们要变成同一种'我们'**」。

⚠️ **中性原则**：不能说哪条更文明 / 更专制——两条路各有智慧也各有死穴。波斯宽容换灵活却埋离心，约前 330 亡于亚历山大；秦整合换强控制却极度依赖中央，统一后很快二世而亡。两条路最后都没长生，只是死法不同。`,
          en: `The governor's storyline and the freed Jew's storyline both draw this contrast — the **gold standard** for AP cross-civilization comparison, and the card that resonates most for us Chinese-heritage students. Achaemenid Persia (550-330 BCE) roughly maps onto China's **late Spring and Autumn into the Warring States**, and about **three centuries later** Qin unified the warring states (221 BCE) with the opposite answer.

Three contrasts, which I memorize as a table:
| Dimension | Persia | Qin |
|---|---|---|
| **Localities** | governors: hereditary/semi-autonomous "little local kings" + watched by checks | commanderies/counties: centrally appointed, term-limited, transferable "rotating officials," swapped at will |
| **Connectivity** | the Royal Road + relays | the imperial highways + relays + standardized axle widths |
| **Culture** | religious tolerance (a mosaic, accepting difference) | one script for all (a melting pot, making everyone more alike) |

Key exam sentence: Persia's logic is "**keep what is yours, as long as you accept me as king**"; Qin's logic is "**we must become one same 'us.'**"

⚠️ **Neutrality rule**: don't say which is more civilized/tyrannical — each road has wisdom and a fatal weakness. Persia's tolerance bought flexibility but planted drift, falling to Alexander around 330 BCE; Qin's integration bought strong control but leaned heavily on the center, falling within two generations of unifying. Both failed to live forever; only the manner of death differed.`,
        },
      },
    },

    {
      id: 'cyrus-cylinder-anachronism',
      termCn: 'Cyrus Cylinder 与「人权宣言」时代错置',
      termEn: 'The Cyrus Cylinder & the "Human Rights" Anachronism',
      defCn: '居鲁士圆柱（Cyrus Cylinder，约前 539，巴比伦楔形文字）是居鲁士进入巴比伦后刻的一块泥柱，记录了他恢复神庙、让被迁走的人回家的政策。现代有人叫它「世界第一份人权宣言」——这是时代错置（anachronism）。它本质是一份前 6 世纪的王家官方宣传文书，目的是给居鲁士的统治找合法性，不是现代意义上的人权文件。它记录的宽容政策是真的，但「人权宣言」这个标签是 20 世纪才贴上去的。',
      defEn: 'The Cyrus Cylinder (c. 539 BCE, Babylonian cuneiform) is a clay cylinder Cyrus had made after entering Babylon, recording his policy of restoring temples and letting displaced people return home. Some modern people call it "the world\'s first declaration of human rights" — that is anachronism, meaning reading a modern concept back into the wrong time period. At its core it is a 6th-century BCE official royal propaganda text aimed at legitimizing Cyrus\'s rule, not a modern human-rights document. The tolerant policy it records is real; the "human rights" label was added in the 20th century.',
      standardRef: ['AP World — primary source analysis', 'AP DBQ rubric (POV/purpose)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'cyrus-actor', nodeId: 'per-cyrus-n3', context: '居鲁士入巴比伦敬奉 Marduk、重立 Nabonidus 冷落的神庙、被迁者神像各归其位（圆柱记的政策）' },
        ],
      },
      standaloneText: {
        cn: `**Cyrus Cylinder（居鲁士圆柱，约前 539，巴比伦楔形文字）** 是一件超高频的 AP 文物题素材。居鲁士那条故事线里只在他入巴比伦那一段顺带提了它记录的政策，没单独展开——所以单独掌握。

**它写了什么**：圆柱用巴比伦文记述居鲁士进城后恢复被前王 Nabonidus 冷落的神庙、让被强迁的人和神像各归其位、安顿百姓。它**记录的宽容政策是真的**。

**最重要的清坑（AP 必考陷阱）**：
- ❌「Cyrus Cylinder 是世界第一份人权宣言。」
- ✅ 它本质是一份**前 6 世纪的波斯王家官方宣传文书**，用的是两河地区君王「我恢复秩序、敬神安民」的传统套话，目的是给居鲁士的统治**找合法性**。「人权宣言」是 **20 世纪**（联合国、现代伊朗都用过）贴上的**现代标签**。用现代「人权」框架去读前 6 世纪文物 = **时代错置（anachronism）**。

为什么 AP 爱考这条？因为它逼你区分**「文物记录的内容（宽容政策，真）」**和**「后人贴的标签（人权宣言，错置）」**——这正是 POV/purpose 分析的硬功夫。它也提醒我们：历史总在被当下重新使用。`,
        en: `The **Cyrus Cylinder** (c. 539 BCE, Babylonian cuneiform) is a very high-frequency AP artifact source. In Cyrus's storyline it only gets a passing mention when he enters Babylon — so master it separately.

**What it says**: in Babylonian, the cylinder records that, on entering the city, Cyrus restored temples that the former king Nabonidus had neglected, returned resettled people and divine statues to their places, and settled the populace. **The tolerant policy it records is real.**

**The most important correction (an AP trap)**:
- ❌ "The Cyrus Cylinder is the world's first declaration of human rights."
- ✅ It is essentially a **6th-century BCE official Persian royal propaganda text**, using the traditional Mesopotamian royal formula "I restored order, honored the gods, settled the people," to **legitimize** Cyrus's rule. "Declaration of human rights" is a **20th-century** label (used by the UN and modern Iran) — reading a 6th-century BCE artifact through a modern "human rights" frame is **anachronism**.

Why does AP love this? Because it forces you to separate **"what the artifact records (a tolerant policy — true)"** from **"the label later ages stuck on it (human-rights declaration — anachronistic)"** — the hard core of POV/purpose analysis. It also reminds us: history is always being re-used by the present.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 AP 文物题最爱挖的坑——看到「居鲁士圆柱 = 人权宣言」立刻警觉。

我的口诀：**「政策是真的，标签是后贴的」**。圆柱记的宽容是真，「人权宣言」是 20 世纪的现代帽子。答题时点出「这是王家宣传文书、目的是找统治合法性」，能直接拿 POV 分。`,
        en: `Teacher said this is AP's favorite artifact trap — the moment you see "Cyrus Cylinder = human rights declaration," be on guard.

My mnemonic: **"the policy is real, the label was added later"** — the tolerance the cylinder records is real, "human rights declaration" is a 20th-century hat. On the exam, noting "this is a royal propaganda text aimed at legitimizing rule" earns direct POV points.`,
      },
    },

    {
      id: 'behistun-inscription',
      termCn: 'Behistun 铭文与王权合法性',
      termEn: 'The Behistun Inscription & Royal Legitimacy',
      defCn: '大流士在一处几乎没人爬得上去的悬崖高处，用三种文字（古波斯文、埃兰文、巴比伦文）刻下自己如何平定叛乱、受善神 Ahura Mazda 命令成为「众王之王」。这块刻在悬崖上的大铭文叫贝希斯敦铭文（Behistun inscription，约前 520）。它把宗教（我是神选的王）和王权焊在一起，是大流士**自己写的**统治合法性宣言。三语并刻，后来也成了破解古波斯楔形文字的关键钥匙。',
      defEn: 'High on a cliff almost no one could climb, Darius carved in three languages (Old Persian, Elamite, and Babylonian) how he put down rebellions and became "King of Kings" by the will of the good god Ahura Mazda. This massive cliff carving is called the Behistun inscription (c. 520 BCE). It welds religion ("I am king by divine will") to royal power — a legitimacy declaration Darius wrote himself. Being trilingual, it later also became the key to deciphering Old Persian cuneiform.',
      standardRef: ['AP World — primary source analysis', 'CA HSS 6.x (Persia)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'cyrus-actor', nodeId: 'per-cyrus-n8', context: '居鲁士交棒大流士：大流士在 Behistun 悬崖刻三语铭文，宣告受 Ahura Mazda 命为王、平定叛乱' },
        ],
      },
      standaloneText: {
        cn: `**Behistun 铭文（大流士，约前 520，三语：古波斯文 / 埃兰文 / 巴比伦文）** 在故事里只在居鲁士交棒大流士那一刻点了一句。值得单独掌握——它是「王自己写的统治合法性宣言」的范本。

**内容**：大流士在一处几乎没人爬得上去的悬崖高处，刻下自己如何**平定众多叛乱、受 Ahura Mazda 之命成为「众王之王」**，并警告后人不要说谎（「谎言」/ drauga 是琐罗亚斯德教里的大恶）。

**两个考点角度**：
1. **王权与宗教焊在一起**：它把「我当王是善神 Ahura Mazda 的旨意」和「我反对谎言」与王权绑死——宗教成了统治合法性的来源。和居鲁士入巴比伦敬 Marduk 一样，都是**用宗教为统治背书**。
2. **POV/purpose**：刻在没人看得见的悬崖上——它不是给路人看的，是**给历史和神看的**官方定本。

**冷知识**：Behistun 三语并刻，后来成了**破解古波斯楔形文字的「罗塞塔石碑」级钥匙**。

考点关键句：Behistun = 大流士**自己写的**王权合法性宣言，把宗教（Ahura Mazda、反「谎言」）与王权焊在一起。读它要问「谁写的、为什么写、写给谁看」。`,
        en: `The **Behistun inscription** (Darius, c. 520 BCE, trilingual: Old Persian / Elamite / Babylonian) is mentioned only once in the story, at the moment Cyrus passes power to Darius — worth mastering separately as the model of "a legitimacy declaration the king wrote himself."

**Content**: high on a cliff almost no one could climb, Darius carved how he **put down many rebellions and became "King of Kings" by the will of Ahura Mazda**, warning posterity not to lie ("the Lie" / drauga is the great evil in Zoroastrianism).

**Two exam angles**:
1. **Kingship welded to religion**: it binds "I am king by the will of the good god Ahura Mazda" and "I oppose the Lie" to royal power — religion becomes the source of legitimacy. Like Cyrus honoring Marduk in Babylon, it is **using religion to back rule.**
2. **POV/purpose**: carved where no passerby can see it, it was meant **for history and the gods** — an official record, not public messaging.

**Bonus fact**: being trilingual, Behistun later became the **"Rosetta Stone"-level key** to deciphering Old Persian cuneiform.

Key exam sentence: Behistun = a legitimacy declaration **Darius wrote himself**, welding religion (Ahura Mazda, anti-"Lie") to kingship — read it by asking "who wrote it, why, and for whom."`,
      },
      xiaoweiNote: {
        cn: `老师说 Behistun 和 Cyrus Cylinder 经常被放一起考，共同点是「王亲自写、为统治找合法性」，都要做 POV 分析。

我的记忆锚：**Behistun = 大流士刻在悬崖上的「我是天命之王」声明 + 破解古波斯文的钥匙**。

别和 Cyrus Cylinder 搞混——圆柱是居鲁士、巴比伦文、写巴比伦；Behistun 是大流士、三语、写自己。`,
        en: `Teacher said Behistun and the Cyrus Cylinder are often tested together — both are "the king wrote it himself to legitimize rule," and both need POV analysis.

My memory anchor: **Behistun = Darius's cliff-carved "I am king by divine mandate" + the key to Old Persian.**

Don't confuse it with the Cyrus Cylinder — the cylinder is Cyrus, Babylonian script, about Babylon; Behistun is Darius, trilingual, about himself.`,
      },
    },

    {
      id: 'zoroastrianism-ahura-mazda',
      termCn: '琐罗亚斯德教与 Ahura Mazda',
      termEn: 'Zoroastrianism & Ahura Mazda',
      defCn: '琐罗亚斯德教（Zoroastrianism）是波斯王室所奉的宗教。它的核心观念叫善恶二元（dualism）：世界是善神 Ahura Mazda（代表秩序、真实、光明）和恶（混乱、「谎言」）之间的持续斗争，人必须选善。这套观念里还有最终审判、救世主、来世赏罚等元素，被认为影响了后来的犹太教、基督教、伊斯兰教。重要：波斯王信这个，但从不强迫被征服者改信。',
      defEn: 'Zoroastrianism was the religion of the Persian royal house. Its core idea is called ethical dualism: the world is a continuous struggle between the good god Ahura Mazda (representing order, truth, and light) and evil (chaos, "the Lie"), and people must choose the good side. The system also includes a final judgment, a savior figure, and afterlife reward and punishment — ideas scholars think influenced later Judaism, Christianity, and Islam. Important: the Persian king followed this faith but never forced conquered peoples to convert.',
      standardRef: ['AP World — belief systems', 'CA HSS 6.x (Persia)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'cyrus-actor', nodeId: 'per-cyrus-n5', context: '波斯王室所奉至高善神 Ahura Mazda；但不强迫被征服者改信' },
        ],
      },
      standaloneText: {
        cn: `**琐罗亚斯德教（Zoroastrianism）** 是波斯王室所奉的信仰，至高善神叫 **Ahura Mazda（阿胡拉·马兹达）**。故事里多次提到这个名字（居鲁士奉它、大流士在 Behistun 刻它），但没单独讲这门宗教——值得补一张卡。

**核心特征：善恶二元（dualism）**
世界被理解为**善神 Ahura Mazda（秩序、真实、光明）** 与恶（混乱、「谎言」/ drauga）之间的持续斗争。人要在两边之间**选边、行善**。这套观念里还有**最终审判、救世主、来世赏罚**等元素。

⚠️ **关键清坑**：波斯王虽然自己奉 Ahura Mazda，却**不强迫被征服者改信**——这正是「宗教宽容作治理术」那张卡的根。别把波斯写成「强推国教的神权帝国」。

**长期影响（高频长时段考点）**：学者认为琐罗亚斯德教的**善恶二元、最终审判、救世主**等观念，影响了后来的**犹太教、基督教、伊斯兰教**的部分思想。

考点关键句：Ahura Mazda = 波斯王室所奉的至高善神；琐罗亚斯德教**善恶二元**，这套观念对后世三大一神教有深远影响。但波斯**从不强迫被征服者改信**——宽容是它的统治招牌。`,
        en: `**Zoroastrianism** was the faith of the Persian royal house, whose supreme good god is **Ahura Mazda**. The name appears repeatedly in the stories (Cyrus honors it; Darius carves it at Behistun) but the religion itself is never unpacked — worth a card.

**Core feature: ethical dualism**
The world is understood as a continuous struggle between **the good god Ahura Mazda (order, truth, light)** and evil (chaos, "the Lie" / drauga). People must **choose a side and do good.** The system also includes **a final judgment, a savior figure, and afterlife reward and punishment.**

⚠️ **Key correction**: although the Persian king honored Ahura Mazda himself, he **did not force the conquered to convert** — this is the root of the "tolerance as a tool of rule" card. Don't write Persia as "a theocratic empire forcing a state religion."

**Long-term impact (a high-frequency long-duration point)**: scholars hold that Zoroastrian ideas of **dualism, final judgment, and a savior** influenced parts of later **Judaism, Christianity, and Islam.**

Key exam sentence: Ahura Mazda = the supreme good god of the Persian royal house; Zoroastrianism's **ethical dualism** deeply influenced the three later monotheisms, yet Persia **never forced the conquered to convert** (tolerance was its hallmark of rule).`,
      },
      xiaoweiNote: {
        cn: `老师说 AP 长时段题爱问「波斯宗教对后世的影响」——记住「善恶二元 + 最终审判 + 救世主 → 影响犹太教 / 基督教 / 伊斯兰教」这条链。

我的记忆锚：**Ahura Mazda = 光明那一边的善神，对手是「谎言」**。

最容易答错的点：波斯**不强推**自己的教——这反而是它宽容统治的根，别写反了。`,
        en: `Teacher said AP long-duration questions love "Persian religion's influence on later ages" — remember the chain "dualism + final judgment + savior → influenced Judaism / Christianity / Islam."

My memory anchor: **Ahura Mazda = the good god on the side of light, opposed to "the Lie."**

The most commonly missed point: Persia **did not force** its faith on others — that is the root of its tolerant rule, so don't get it backwards.`,
      },
    },

    {
      id: 'achaemenid-rise-and-fall',
      termCn: '阿契美尼德的兴亡与「操作系统活下来」',
      termEn: 'The Rise and Fall — and "the OS Survived"',
      defCn: '阿契美尼德波斯帝国从约前 550 年居鲁士打败米底王建国，到前 330 年亡于亚历山大，立国约 220 年。但亚历山大灭了波斯，却大量继承了波斯的行省制、御道、行政语言和「众王之王」的统治姿态。这叫「帝国被灭了，操作系统活了下来」——一个大帝国的制度和做法，可以比王朝本身活得更久，影响后来的希腊化世界乃至罗马。',
      defEn: 'The Achaemenid Persian Empire began around 550 BCE when Cyrus defeated the Median king, and fell in 330 BCE to Alexander — about 220 years. But Alexander destroyed Persia and then inherited much of it: its satrapy system, Royal Road, administrative language, and "King of Kings" posture. This is called "the empire fell, the OS survived" — an empire\'s institutions and methods can outlive the dynasty itself, shaping the Hellenistic world and even Rome afterward.',
      standardRef: ['AP World — continuity and change', 'CA HSS 6.x (Persia)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'cyrus-actor', nodeId: 'per-cyrus-n2', context: '约前 550 居鲁士打败米底王 Astyages，帝国起点' },
          { lens: 'satrap-mediator', nodeId: 'per-satrap-n9', context: '前 331 Gaugamela、前 330 Persepolis 被焚、Bessus 杀大流士三世' },
        ],
      },
      standaloneText: {
        cn: `这张卡帮你把整条**时间线**串起来。三条故事线碎着讲，这里一次理清（AP continuity & change 题需要）。

**兴（约前 550-525）**
- 约前 **550**：居鲁士打败米底王 Astyages——波斯从附庸翻身，**阿契美尼德帝国起点**。
- 前 **539**：攻下巴比伦、放归犹太人。
- 前 **525**：其子冈比西斯二世征服埃及。

**盛（前 522-前 5 世纪）**
- 前 **522**：继承危机后大流士一世上台——行省制、daric、Aramaic、Royal Road、Behistun。
- 前 **490 / 480**：两次远征希腊受挫（Marathon / Salamis）——但帝国主体几乎无损。

**亡（前 334-330）**
- 前 **331**：亚历山大在 **Gaugamela** 击溃末代王大流士三世。
- 前 **330**：**Persepolis 被焚**；大流士三世被自己的总督 **Bessus** 所杀——阿契美尼德王朝终结，立国约 **220 年**（前 329 Bessus 被亚历山大处死）。

⚠️ **反讽 + 最高频长时段考点：「帝国被灭，操作系统活下来」**
亚历山大灭了波斯，却**大量继承**了波斯的**行省制、御道、行政通用语、「众王之王」的姿态**——他甚至穿波斯王袍、用波斯礼仪。波斯「怎么统治大帝国」这套答案，被它的征服者继承，影响了希腊化世界乃至罗马。

考点关键句：从居鲁士征服（前 550）到亚历山大继承制度（前 330 后）——**变了**的是统治者（波斯人→马其顿人），**没变甚至被继承**的是「操作系统」（行省制、御道、行政语、众王之王）。`,
        en: `This card threads the whole **timeline** — the three stories tell it in fragments, so here it is in one place (needed for AP continuity & change).

**Rise (c. 550-525 BCE)**
- c. **550**: Cyrus beats the Median king Astyages — Persia turns from vassal to ruler, the **start of the Achaemenid Empire.**
- **539**: takes Babylon, frees the Jews.
- **525**: his son Cambyses II conquers Egypt.

**Height (522 - 5th century BCE)**
- **522**: after a succession crisis Darius I takes the throne — satrapy system, daric, Aramaic, Royal Road, Behistun.
- **490 / 480**: two failed Greek campaigns (Marathon / Salamis) — but the core barely scratched.

**Fall (334-330 BCE)**
- **331**: Alexander shatters the last king Darius III at **Gaugamela.**
- **330**: **Persepolis is burned**; Darius III is killed by his own governor **Bessus** — the Achaemenid dynasty ends, after about **220 years** (Bessus himself executed by Alexander in 329).

⚠️ **Irony + the highest-frequency long-duration point: "the empire fell, the OS survived"**
Alexander destroyed Persia but **inherited much of it** — the **satrapy system, the Royal Road, the administrative language, the "King of Kings" posture**; he even wore Persian royal dress and used Persian ceremony. Persia's answer to "how to rule a great empire" was carried on by its conqueror, shaping the Hellenistic world and even Rome.

Key exam sentence: from Cyrus's conquest (550 BCE) to Alexander inheriting the system (after 330 BCE), what **changed** was the rulers (Persians → Macedonians); what **stayed and was inherited** was the "operating system" (satrapy, Royal Road, administrative language, King of Kings).`,
      },
      xiaoweiNote: {
        cn: `老师说 AP continuity & change 题最爱考「帝国被灭了，什么活了下来」——波斯是最好的例子。

记忆锚：**前 550 居鲁士起 → 前 330 亡于亚历山大，立国约 220 年；但「操作系统」（行省 / 御道 / 行政语 / 众王之王）被亚历山大继承**。

还有反讽彩蛋：防总督造反防了一辈子，最后杀末代王的恰恰是个总督（Bessus）。`,
        en: `Teacher said AP continuity & change questions love "the empire fell — what survived," and Persia is the best example.

Memory anchor: **550 BCE Cyrus begins → 330 BCE falls to Alexander, about 220 years; but the "OS" (satrapy / Royal Road / administrative language / King of Kings) was inherited by Alexander.**

Plus the ironic Easter egg: they guarded against governor revolt all along, yet the one who killed the last king was a governor (Bessus).`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `波斯王自己奉 Ahura Mazda，却不强迫被征服者改信，反而出钱修各地的神庙、放归被掳的犹太人。

你觉得波斯的「宗教宽容」，更应该被看成一种**真心的文明价值**，还是一笔**精算过的统治成本账**？用至少两条具体证据支持你的判断。`,
      en: `The Persian king honored Ahura Mazda himself, yet did not force the conquered to convert — instead funding local temples and freeing the exiled Jews.

Should Persia's "religious tolerance" be seen more as a **sincere civilizational value** or as a **carefully calculated cost ledger of rule**? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边——而且最高分往往是「两者同时为真」。

- 「价值」这边的证据：放归犹太人是真实让利、资助修复各地神庙、第一个证明可以靠尊重而非抹平统治多民族。
- 「算计」这边的证据：感恩的被征服者比被压着的省兵省钱、Cyrus Cylinder 是找合法性的王家宣传文书、帝国同时仍强制纳贡征兵镇压叛乱。

高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which side you pick, and the highest-scoring answer is often "both are true at once."
- Evidence for "value": freeing the Jews was a real concession; funding and repairing local temples; the first proof you can rule many peoples through respect rather than erasure.
- Evidence for "calculation": a grateful conquered people saves soldiers and money; the Cyrus Cylinder is a royal propaganda text seeking legitimacy; the empire still forced tribute, drafts, and crushed revolts.

High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['religious-tolerance-as-governance', 'cyrus-cylinder-anachronism'],
    },
    {
      id: 'q2',
      cn: `同一道「怎么统治一个又大又杂的天下」的难题，波斯用总督制（世袭半自治的本地小王 + 分权盯住）回答，约三百年后的秦用郡县（中央任免、可随时调动的流官）回答。

如果你是 AP 老师，要出一道题考「这两条路各自的强项和致命弱点」，你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `The same hard question — "how to rule a huge and mixed realm" — Persia answered with governors (hereditary, semi-autonomous "little local kings" + watched by checks), and about three centuries later Qin answered with commanderies and counties (centrally appointed, freely transferable "rotating officials").

If you were an AP teacher writing a question on "each road's strengths and fatal weaknesses," how would you phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的比较题会逼学生**两条路都拿证据**，而不是夸一条贬一条（这正是中性原则）。

- 波斯一侧：强项 = 灵活、尊重地方、统治成本低；死穴 = 总督离心、叛乱——灭波斯的最后一刀（Bessus）恰恰来自一个总督。
- 秦一侧：强项 = 中央控制强、地方割据的根被铲掉；死穴 = 行政成本高、极度依赖中央能力，统一后很快二世而亡。

你的题目可以让学生分别为两条路各找一个「这套设计的天才之处，恰恰也是它的死穴」的例子——这才是 AP 要的 complexity。⚠️ 提醒学生：别写成「波斯更文明 / 秦更专制」，两条路最后都没长生，只是死法不同。`,
      hintEn: `Hint: a good comparison forces students to **bring evidence for both roads**, not praise one and condemn the other (that's the neutrality rule).
- Persia: strength = flexible, respects locality, low cost of rule; fatal weakness = governor drift and revolt — the death blow to Persia (Bessus) came from a governor.
- Qin: strength = strong central control, the root of regional warlordism removed; fatal weakness = high administrative load, heavy dependence on the center, fell within two generations of unifying.

Your question could have students find, for each road, an example where "the genius of the design is exactly its fatal weakness" — that's the complexity AP wants. ⚠️ Remind students: don't write "Persia more civilized / Qin more tyrannical"; both roads failed to live forever, only the manner of death differed.`,
      conceptsActivated: ['persia-vs-qin-comparison', 'satrapy-checks-and-balances'],
    },
    {
      id: 'q3',
      cn: `同一个居鲁士，在犹太人的《以斯拉记》里是「上帝拣选的解放者」，在波斯官方的 Cyrus Cylinder 里是「敬奉 Marduk、恢复秩序的巴比伦明君」，在希腊人希罗多德笔下又是另一张脸。

当你读到关于一个人或一个帝国的「事实」时，先问一句「这是谁在讲、为什么这么讲」（POV/purpose）——你觉得这个习惯重要吗？用居鲁士的三种来源，说明「不问来源」可能让你得出什么错误结论。`,
      en: `The same Cyrus is a "liberator chosen by God" in the Jews' Book of Ezra, a "Marduk-honoring, order-restoring good king of Babylon" in the Persian official Cyrus Cylinder, and another face again in the Greek Herodotus.

When you read a "fact" about a person or an empire, first asking "who is telling this, and why this way" (POV/purpose) — do you think that habit matters? Using Cyrus's three sources, explain what wrong conclusion "not asking about the source" might lead you to.`,
      hintCn: `提示：这题考的是 AP DBQ 反复奖励的 POV/purpose 功夫。

- 只读《以斯拉记》→ 你可能以为居鲁士是个一心解放被压迫者的圣人（其实那是「我们对救我们的人」的记忆）。
- 只读 Cyrus Cylinder → 你可能以为他主要关心巴比伦和 Marduk，根本想不到犹太人（圆柱没单独提他们）。
- 只读希罗多德 → 你会带上「希腊 vs 波斯」的滤镜。

高分写法：指出每份史料**是谁、为什么写、写给谁**，再说明把三者**对照**才能拼出更接近真实的居鲁士。

进阶：想想今天你刷到一条关于某人 / 某国的「事实」，是谁发的、为什么发——同一个 POV 习惯，照样能用。`,
      hintEn: `Hint: this tests the POV/purpose skill DBQs reward again and again.
- Reading only Ezra → you might think Cyrus a saint bent on freeing the oppressed (really it's "our memory of the one who saved us").
- Reading only the Cyrus Cylinder → you might think he cared mainly about Babylon and Marduk and never imagine the Jews (the cylinder never singles them out).
- Reading only Herodotus → you'd carry a "Greek vs Persian" filter.

High-scoring move: name **who** each source is, **why** it was written, and **for whom**, then show that only by **comparing** the three can you assemble a Cyrus closer to the truth.

Going deeper: think of a "fact" about a person or country you saw online today — who posted it, and why? The same POV habit applies.`,
      conceptsActivated: ['cyrus-jewish-return-ezra', 'cyrus-cylinder-anachronism'],
    },
  ],
};

export default notebook;
