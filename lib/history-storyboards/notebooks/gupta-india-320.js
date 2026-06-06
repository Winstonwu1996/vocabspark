// ─── 同伴笔记本 · Gupta India 320 · 印度黄金时代 ─────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），与 reader 同龄，"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语 + 关键人物，不剧透
//   2. mainConcepts（出口复习笔记）— 10 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson) + xiaoweiNote
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Aryabhata 发光者 / 抄经少年 传光者 / 种田人 受影响方三条线）
//   - notebook 提供考点闭环（位值制与零、π、地球自转、samanta 封建 vs 孔雀集权、Huna 衰亡、
//     印度数字西传链、中国桥祖冲之、agency & silence — 补完 CA HSS 6.5 / AP World）
//
// 课纲对齐：CA HSS Grade 6.5（古代印度·黄金时代）/ AP World History (early·跨文明传播)
//
// 事实地基：对账 gupta-india-320-factledger.md（26 claim，4 红旗均已透明标注）
//   - 零：占位（笈多成熟）→ 可运算的数（Brahmagupta 628）分层（账本 #9/#10，误解 #3）
//   - 年代多为「约数 / 史学区间」（账本红旗 #1）
//   - 印度数字 vs 中国算筹「形式决定传播」= 史学解释口径（账本红旗 #4）
//
// schemaVersion: 1 · notebookVersion: gupta-india-320-v1

export var notebook = {
  topicId: 'gupta-india-320',
  topicNameCn: '笈多王朝 · 印度黄金时代',
  topicNameEn: 'Gupta India · The Golden Age',
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
    cn: `今天老师说我们要学笈多王朝（Gupta，约 320-550）——古印度的"黄金时代"。
她说很多课本讲古印度，讲到孔雀王朝（阿育王）就断了，根本没讲到这个真正发光的时代，
所以这一节是补一个大洞。

她在白板上写了几个名字：

Aryabhata（阿里亚哈塔，天文数学家）、Chandragupta I / II（旃陀罗笈多）、
Samudragupta（海护王）、Kalidasa（迦梨陀娑，大诗人）、
祖冲之（同一个世纪、地球另一端，也在算圆周率的中国人）

还有一串词：decimal place-value（十进制位值制）、zero（零）、pi（圆周率）、
samanta（地方封建领主）、varna / jati（种姓）、Huna（嚈哒/白匈奴）、
"Hindu-Arabic numerals"（印度-阿拉伯数字）。

老师说一件特别有意思的事我先记下来：我们今天全世界用的"阿拉伯数字"，
老家其实是印度——它从印度，经过阿拉伯，才传到欧洲，名字被叫错了。

我先读三个故事——Aryabhata（发光的天才）、抄棕榈叶的少年（传光的人）、
恒河平原种地的人（被光照不到的人）——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页："说一个时代是'黄金的'，
要同时问一句——金子，到底落在谁手里？"`,
    en: `Today my teacher said we're learning the Gupta dynasty (c. 320-550) — ancient India's
"Golden Age." She said many textbooks on ancient India stop at the Mauryan empire (Ashoka)
and never reach this truly shining age, so this lesson fills a big hole.

She wrote some names on the board:

Aryabhata (an astronomer-mathematician), Chandragupta I / II,
Samudragupta, Kalidasa (a great poet),
Zu Chongzhi (a Chinese man, the same century, the other end of the Earth, also computing pi)

Plus a string of terms: decimal place-value, zero, pi,
samanta (a local feudal lord), varna / jati (caste), Huna (the White Huns / Hephthalites),
"Hindu-Arabic numerals."

Teacher said one fascinating thing I'll write down first: the "Arabic numerals" the whole
world uses today actually come from India — they traveled from India, through the Arab world,
and only then reached Europe, and the name got it wrong.

Let me read the three stories first — Aryabhata (the shining genius), the boy copying palm
leaves (the one who passes the light on), and the cultivator on the Ganges plain (the one the
light never reaches) — then come back to this sheet and see if I can explain each.

Teacher said one line I copied onto the first page of my notebook: "To call an age 'golden,'
you have to ask at the same time — the gold, into whose hands did it actually fall?"`,
    keyTerms: [
      { cn: '笈多王朝（约 320-550）', en: 'Gupta dynasty (c. 320-550)' },
      { cn: '黄金时代', en: 'Golden Age' },
      { cn: '十进制位值制', en: 'decimal place-value system' },
      { cn: '零（梵语 śūnya，意为"空"）', en: 'zero (Sanskrit śūnya, "empty")' },
      { cn: '圆周率（π）', en: 'pi (π)' },
      { cn: '地球自转', en: "Earth's rotation" },
      { cn: 'samanta（地方封建领主/藩属）', en: 'samanta (local feudal lord)' },
      { cn: 'varna / jati（种姓秩序）', en: 'varna / jati (caste order)' },
      { cn: '季风', en: 'monsoon' },
      { cn: 'Huna / 嚈哒 / 白匈奴', en: 'Huna / Hephthalites / White Huns' },
      { cn: '棕榈叶手稿', en: 'palm-leaf manuscript' },
      { cn: '印度-阿拉伯数字', en: 'Hindu-Arabic numerals' },
      { cn: '德里铁柱', en: 'Iron Pillar of Delhi' },
      { cn: 'Nalanda（那烂陀大学）', en: 'Nalanda (university)' },
      { cn: '算筹（中国对照）', en: 'counting rods (China comparison)' },
      { cn: '能动性与沉默（谁被史书记住）', en: 'agency & silence (who the histories remember)' },
    ],
    // mustKnow: true = 课纲/AP 必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '阿里亚哈塔',
        nameEn: 'Aryabhata',
        ipa: '/ˌɑːrjəˈbʌtə/',
        roleCn: '天文数学家（476-约550），499 年 23 岁写成《Aryabhatiya》：十进制位值、圆周率约 3.1416、主张地球自转',
        roleEn: 'Astronomer-mathematician (476-c.550); at 23, wrote the Aryabhatiya in 499 — decimal place-value, pi ≈ 3.1416, and the claim that the Earth rotates',
        mustKnow: true,
        audioKey: 'aryabhata',
      },
      {
        nameCn: '祖冲之',
        nameEn: 'Zu Chongzhi',
        ipa: '/dzuː tʃʊŋˈdʒiː/',
        roleCn: '同代中国数学家（429-500），用算筹把圆周率算到小数点后七位，纪录领先世界约八百年（§8 中国桥）',
        roleEn: 'Contemporary Chinese mathematician (429-500); using counting rods, computed pi to seven decimal places, a record leading the world by about 800 years (the China bridge)',
        mustKnow: true,
        audioKey: 'zu-chongzhi',
      },
      {
        nameCn: '旃陀罗笈多二世（超日王）',
        nameEn: 'Chandragupta II (Vikramaditya)',
        ipa: '/ˌtʃʌndrəˈɡʊptə/',
        roleCn: '约 380-415 在位，黄金时代鼎盛期君主，供养大诗人 Kalidasa，立德里铁柱（≠ 孔雀王朝的 Chandragupta Maurya）',
        roleEn: 'Reigned c. 380-415, the peak of the Golden Age; patron of the poet Kalidasa, builder of the Iron Pillar (not the Mauryan Chandragupta Maurya)',
        mustKnow: true,
        audioKey: 'chandragupta-ii',
      },
      {
        nameCn: '海护王',
        nameEn: 'Samudragupta',
        ipa: '/səˌmʊdrəˈɡʊptə/',
        roleCn: '约 335-380 在位，大扩张君主，因军事天才被称"印度的拿破仑"，Allahabad 石柱记其武功',
        roleEn: 'Reigned c. 335-380, the great expander, called the "Indian Napoleon" for his military genius; the Allahabad pillar records his conquests',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '迦梨陀娑',
        nameEn: 'Kalidasa',
        ipa: '/ˌkɑːlɪˈdɑːsə/',
        roleCn: '笈多宫廷供养的梵语第一大诗人/剧作家，名作《沙恭达罗》是梵语文学巅峰',
        roleEn: 'The greatest Sanskrit poet-playwright patronized by the Gupta court; his Shakuntala is the peak of Sanskrit literature',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '婆罗摩笈多',
        nameEn: 'Brahmagupta',
        ipa: '/ˌbrɑːməˈɡʊptə/',
        roleCn: '7 世纪数学家（笈多之后），628 年在《Brahmasphutasiddhanta》中第一个把"零"明确当成可运算的数',
        roleEn: 'A 7th-century mathematician (after the Guptas) who, in 628, was the first to define "zero" clearly as a number you can compute with',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '塞建陀笈多',
        nameEn: 'Skandagupta',
        ipa: '/ˌskʌndəˈɡʊptə/',
        roleCn: '约 455-467 在位，苦战北方游牧 Huna，连年战争把帝国国库掏空',
        roleEn: 'Reigned c. 455-467; fought the northern nomadic Huna hard, but years of war emptied the treasury',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'decimal-place-value-and-zero',
      termCn: '十进制位值制与"零"',
      termEn: 'Decimal Place-Value & "Zero"',
      standardRef: ['CA HSS 6.5（古印度·数学成就）', 'AP World — cross-civilization science'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'aryabhata-actor',
        nodeIds: ['gup-aryabhata-n3'],
        xiaoweiNote: {
          cn: `这个 Aryabhata 那一遍第 3 节专门讲了，是整门课的"地基卡"。

**位值制（place-value）**：同一个符号，放在不同位置就代表不同大小——
个位是 1，十位是 10，百位是 100。**位置，决定大小。**

老师反复纠正一个**误解陷阱**：
误："零从一开始就是一个数。"
正：零经历了**两步**——
1. 笈多时代成熟的，是"**空位占位**"：写「307」时中间那个 0，认真地占住十位，
   告诉你这是三百零七，不是三十七。
2. 真正把"零"当成一个**能加减乘的数**，要等到约两百年后、笈多之后的
   **Brahmagupta（628 年）**才说清楚。

考点关键句：占位的"空"（笈多成熟）→ 零作为可运算的数（Brahmagupta 628），
**别把这两步压成一步**——这正是 AP 在跨文明传播里奖励的精确区分。

记忆锚：位值制 = 印度黄金时代留给全人类的"算术地基"，没有它就没有现代科学。`,
          en: `Aryabhata's Lens Node 3 is all about this — it's the "foundation card" of the
whole topic.

**Place-value**: the same symbol in a different position means a different size —
1 in the ones, 10 in the tens, 100 in the hundreds. **Position decides size.**

Teacher kept correcting a **misconception trap**:
Misconception: "Zero was a number from the very start."
Correction: zero went through **two steps** —
1. What matured in the Gupta age was the "**empty slot / placeholder**": in "307," the
   middle 0 firmly holds the tens slot, telling you it's three hundred and seven, not thirty-seven.
2. Treating "zero" as a number you can **add, subtract, multiply** waited until about two
   hundred years later — **Brahmagupta (628)**, after the Guptas, spelled it out.

Key exam sentence: placeholder "empty" (Gupta) → zero as a usable number (Brahmagupta 628) —
**don't collapse the two steps into one.** That's exactly the precise distinction AP rewards
in cross-civilization transmission.

Memory anchor: place-value = the Indian Golden Age's "arithmetic foundation" for all
humankind; without it, no modern science.`,
        },
      },
    },

    {
      id: 'aryabhata-pi-and-rotation',
      termCn: 'Aryabhata：圆周率与地球自转',
      termEn: 'Aryabhata: Pi and the Earth\'s Rotation',
      standardRef: ['CA HSS 6.5（古印度·天文/数学）', 'AP World — early science'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'aryabhata-actor',
        nodeIds: ['gup-aryabhata-n4', 'gup-aryabhata-n5', 'gup-aryabhata-n6'],
        xiaoweiNote: {
          cn: `Aryabhata 那一遍第 4-6 节，是整课最亮的一段。我记三件事：

1. **圆周率 ≈ 3.1416**：他没有计算器，靠位值制和"零"一笔笔算到约 3.1416，
   还用梵语词 āsanna（"逼近的"）暗示这个值**算不尽**——这是惊人的数学直觉。
2. **地球自转**：在所有人都以为"天在转"的年代，他说是**大地在转**。
   他的证据是一个**坐船的比喻**：坐顺流的船，觉得是岸上的树往后退，而不是船在前进；
   站在自转的地球上，就觉得本来不动的星星在往西移。
   （注意：这个比喻是**后人从梵语转述的通行说法**，不是他逐字原话——别当档案原文引。）
3. **了不起的不是"全对"**：他的天文模型今天看仍有不少错的地方。
   真正了不起的是他**敢用观察质疑"天经地义"**——这是"科学"的种子。

考点关键句：Aryabhata 的价值不在"句句正确"，在于**用观察和类比挑战公认常识**。`,
          en: `Aryabhata's Lens Nodes 4-6 are the brightest stretch of the lesson. I remember
three things:

1. **Pi ≈ 3.1416**: with no calculator, using place-value and "zero" stroke by stroke, he
   reached about 3.1416, and used the Sanskrit word asanna ("approaching") to hint that the
   value **can't be reached exactly** — a stunning mathematical instinct.
2. **Earth's rotation**: in an age when everyone assumed "the sky turns," he said **the
   ground turns.** His evidence was a **boat comparison**: on a downstream boat you feel the
   trees on the bank slide back, not the boat move forward; standing on a rotating Earth, you
   feel the fixed stars drift west. (Note: this comparison is a **common later rendering from
   the Sanskrit**, not his word-for-word original — don't cite it as an archival quote.)
3. **What's remarkable isn't being "all right"**: his model still has many parts we'd call
   wrong today. What's truly remarkable is that he **dared to use observation to question what
   everyone took for granted** — the seed of "science."

Key exam sentence: Aryabhata's value isn't "being correct line by line," it's **challenging
accepted common sense with observation and analogy.**`,
        },
      },
    },

    {
      id: 'gupta-feudal-vs-mauryan-central',
      termCn: '笈多封建式 vs 孔雀集权（samanta）',
      termEn: 'Gupta Feudal vs Mauryan Centralized (samanta)',
      standardRef: ['CA HSS 6.5（古印度·政治制度）', 'AP World — state-building / continuity & change'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'village-cultivator-receiving-end',
        nodeIds: ['gup-cultivator-n3'],
        xiaoweiNote: {
          cn: `种田人那一遍第 3 节用最接地气的方式讲了这个：他交粮，不是交给远在华氏城的皇帝，
是交给身边一个叫 **samanta（萨曼塔，地方封建领主）**的人。这就是笈多的运转方式。

必背对照表：
- **孔雀王朝（Mauryan，约前 4-2 世纪）**：**高度中央集权**——皇帝靠庞大官僚、密探，
  一竿子直管到底。
- **笈多王朝（约 320-550）**：**相对去中心的封建式**——皇帝让各地 samanta 替他管，
  samanta 向皇帝称臣、纳贡、出兵，但在自己地盘说了算。

考点关键句：同样统一北印度，孔雀靠"集权"，笈多靠"一层层地方领主松松连在一起"。
这套弹性制度平时省成本，可**中央一弱，地方就散**——所以 Huna 入侵时，
samanta 纷纷自立，反而**加速了帝国瓦解**（连到衰亡那张卡）。

别搞混：笈多的 Chandragupta ≠ 孔雀的 Chandragupta Maurya，差约六百年，只是名字像。`,
          en: `The cultivator's Lens Node 3 explains this in the most down-to-earth way: he hands
his grain not to the emperor far off in Pataliputra, but to a nearby man called a **samanta
(a local feudal lord)**. That's how the Gupta state ran.

Must-memorize comparison:
- **Mauryan empire (c. 4th-2nd c. BCE)**: **highly centralized** — the emperor ruled all the
  way down through a vast bureaucracy and spies.
- **Gupta dynasty (c. 320-550)**: **relatively decentralized, feudal** — the emperor let local
  samanta govern for him; the samanta bowed, paid tribute, and supplied troops, but ran his
  own territory.

Key exam sentence: both unified north India, but Mauryan relied on "central power," Gupta on
"a loose chain of local lords." This flexible system saved cost in peacetime, but **when the
center weakened, the regions scattered** — so when the Huna invaded, the samanta broke away
and actually **sped up the empire's collapse** (links to the decline card).

Don't mix up: the Gupta Chandragupta is NOT the Mauryan Chandragupta Maurya — about 600 years
apart, just similar names.`,
        },
      },
    },

    {
      id: 'varna-jati-caste',
      termCn: '种姓秩序（varna / jati）',
      termEn: 'The Caste Order (varna / jati)',
      standardRef: ['CA HSS 6.5（古印度·社会）', 'AP World — social hierarchies'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'village-cultivator-receiving-end',
        nodeIds: ['gup-cultivator-n5', 'gup-aryabhata-n7'],
        xiaoweiNote: {
          cn: `种田人那一遍第 5 节最戳人，Aryabhata 第 7 节也从上层视角讲了同一套秩序。

**varna（瓦尔纳）** = 四大种姓：婆罗门（祭司）→ 刹帝利（武士）→ 吠舍（平民）→ 首陀罗（劳动者），
再往下还有被排在四大种姓之外、做最被嫌弃工作的人。
**jati（迦提）** = 更细的世袭职业群体。

这套秩序在笈多时代进一步**固化**：很多人一出生就被钉死在固定位置——
婆罗门的儿子生下来是婆罗门，种地人的儿子生下来还是种地人。

老师强调一个 AP 高分点（也是种田人第 5 节那句话）：这套秩序**不只是用刀枪压人**，
它还让最底层的人**自己觉得"我本来就该在这儿"**——这是比刀枪更深的控制。

考点关键句：能读书、被史书记住的是上层极少数（Aryabhata 自己也承认"我的星空踩在他们的稻田上"）；
绝大多数人没名字、没声音——这正是 agency & silence 那张卡的根。`,
          en: `The cultivator's Lens Node 5 hits hardest, and Aryabhata's Node 7 covers the same
order from the top.

**varna** = the four castes: Brahmin (priests) → Kshatriya (warriors) → Vaishya (commoners)
→ Shudra (laborers), and below them people ranked outside the four castes doing the most
despised work.
**jati** = finer hereditary occupational groups.

This order **hardened** in the Gupta age: many were pinned to a fixed place from birth — a
Brahmin's son is born a Brahmin, a cultivator's son is born a cultivator.

Teacher stressed a high-scoring AP point (also the cultivator's line in Node 5): this order
**doesn't press people with blades alone** — it makes those at the very bottom **feel "this is
simply where I belong"** — a control deeper than blades.

Key exam sentence: the literate, the ones histories remember, are a tiny upper few (even
Aryabhata admits "my starry sky stands on their rice fields"); the great majority have no name,
no voice — the root of the agency & silence card.`,
        },
      },
    },

    {
      id: 'monsoon-and-agrarian-life',
      termCn: '季风与农业生活',
      termEn: 'The Monsoon & Agrarian Life',
      standardRef: ['CA HSS 6.5（古印度·地理/气候）', 'AP World — environment & society'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'village-cultivator-receiving-end',
        nodeIds: ['gup-cultivator-n2', 'gup-cultivator-n6'],
        xiaoweiNote: {
          cn: `这是全课的"跨视角彩蛋"——同一场**季风（monsoon）**的雨，在三个人那里意思完全不同：
- **Aryabhata**：雨停了，天洗干净，夜里能看星（好事）。
- **抄经少年**：太潮，棕榈叶烂得快，字消失得快（麻烦）。
- **种田人**：雨准就有饭，雨晚就是饥荒（生死）。

考点关键句：南亚的命脉是**夏季西南季风**——它决定稻米和小麦的收成。
对底层农人来说，星空的奇迹再大，也比不上"今年的雨会不会准"。

我自己的理解：这一个细节，就把"黄金时代"的不平等讲透了——
同一片天、同一场雨，落在不同的人头上，是诗意、是麻烦、还是一家人的生死。`,
          en: `This is the lesson's "cross-lens easter egg" — the same **monsoon** rain means
completely different things to three people:
- **Aryabhata**: rain stops, sky washed clean, stars visible at night (a good thing).
- **The copyist boy**: too damp, palm leaves rot faster, letters vanish faster (trouble).
- **The cultivator**: rain on time means food, rain late means famine (life and death).

Key exam sentence: South Asia's lifeline is the **summer southwest monsoon** — it decides the
rice and wheat harvest. For a cultivator at the bottom, no marvel of the stars matters more
than "will this year's rain be on time."

My own take: this one detail nails the inequality of the "Golden Age" — the same sky, the same
rain, falling on different heads, is poetry, or trouble, or a family's life and death.`,
        },
      },
    },

    {
      id: 'huna-and-decline',
      termCn: 'Huna 入侵与帝国衰亡',
      termEn: 'The Huna Invasion & the Empire\'s Decline',
      standardRef: ['CA HSS 6.5（古印度·王朝兴衰）', 'AP World — causes of decline'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'aryabhata-actor',
        nodeIds: ['gup-aryabhata-n8', 'gup-cultivator-n8'],
        xiaoweiNote: {
          cn: `Aryabhata 第 8 节和种田人第 8 节都讲到帝国怎么垮的。我背成"外因 + 内因"：

**外因**：北方游牧的 **Huna（嚈哒/白匈奴，Hephthalites）**一波波南下。
约 455 年起，**Skandagupta** 苦战挡过他们，但连年战争把国库掏空；
约 480 年代起 Huna 突破西北防线，深入北印度。约公元 550 年，笈多帝国瓦解。

**内因**：中央一弱，那些 samanta 地方领主**纷纷自立**——
平时"靠地方领主管地方"的弹性制度，这时反过来**加速了瓦解**（连到封建那张卡）。

老师强调一个 AP 答题习惯：问"衰亡主因"时，别只写一个——
标准答案是 **外患（Huna）引爆了制度本身的内部弱点（samanta 离心 + 经济压力）**。

种田人那句最冷峻：帝国垮了，对他"几乎什么都没变"——他从没真正"属于"过那个帝国。`,
          en: `Aryabhata's Node 8 and the cultivator's Node 8 both cover how the empire fell. I
memorize it as "external + internal":

**External**: the northern nomadic **Huna (Hephthalites / White Huns)** pushed down wave after
wave. From around 455, **Skandagupta** fought them off hard, but years of war emptied the
treasury; from the 480s the Huna broke through the northwest defenses into north India. Around
550 CE, the Gupta empire fell apart.

**Internal**: once the center weakened, the samanta local lords **broke away one by one** — the
flexible "let local lords govern" system now **sped up the collapse** (links to the feudal card).

Teacher stressed an AP habit: when asked for "the main cause of decline," don't write just one —
the standard answer is **an external shock (the Huna) that detonated the system's own internal
weaknesses (samanta breakaway + economic strain).**

The cultivator's line is the coldest: when the empire fell, "almost nothing changed" for him —
he never truly "belonged" to that empire.`,
        },
      },
    },

    {
      id: 'indian-numerals-transmission',
      termCn: '印度数字西传链（"阿拉伯数字"其实是印度的）',
      termEn: 'How Indian Numerals Traveled West',
      standardRef: ['CA HSS 6.5（古印度·成就的世界影响）', 'AP World — cross-civilization transmission'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'aryabhata-actor',
        nodeIds: ['gup-aryabhata-n8', 'gup-copyist-n8'],
        xiaoweiNote: {
          cn: `Aryabhata 第 8 节和抄经少年第 8 节都讲了这条传播链——这是 AP **最爱考**的跨文明传播主线。

必背时间链（一定要能按顺序说顺）：
**印度（笈多，约 500）→ 阿拉伯/巴格达（Al-Khwarizmi 花拉子米，约 825 年写《印度数字算术》）
→ 欧洲（Fibonacci 斐波那契《Liber Abaci》，1202 年）→ 今天全世界。**

考点关键句（高频纠错）：我们叫"**阿拉伯数字**"其实是叫错了——
它的**老家是印度**，阿拉伯人只是把它**传到**欧洲的中转站。更准确的名字是"**印度-阿拉伯数字**"。

我的口诀：**印 → 阿 → 欧**，名字却只记住了中间那一站。
这正好回答 AP 那道题："为什么现代世界的工具不是某一个文明独自造的？"——它是**接力传出来的**。`,
          en: `Aryabhata's Node 8 and the copyist's Node 8 both cover this chain — it's AP's
**most-tested** cross-civilization transmission thread.

Must-memorize timeline (be able to say it in order):
**India (Gupta, ~500) → the Arab world / Baghdad (Al-Khwarizmi, ~825, wrote "On the Calculation
with Hindu Numerals") → Europe (Fibonacci, "Liber Abaci," 1202) → the whole world today.**

Key exam sentence (high-frequency correction): calling them "**Arabic numerals**" is actually
wrong — their **home is India**; the Arab world was just the relay that **carried** them to
Europe. The more accurate name is "**Hindu-Arabic numerals.**"

My mnemonic: **India → Arab → Europe**, but the name only remembers the middle stop. This
answers AP's question: "why aren't the tools of the modern world built by one civilization
alone?" — they were **passed down in a relay.**`,
        },
      },
    },

    {
      id: 'china-bridge-zu-chongzhi',
      termCn: '§8 中国桥：祖冲之 vs Aryabhata（形式决定传播）',
      termEn: 'China Bridge: Zu Chongzhi vs Aryabhata (form decides transmission)',
      standardRef: ['AP World — comparison / historiography', 'CA HSS（中国魏晋南北朝对照）'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'copyist-mediator',
        nodeIds: ['gup-copyist-n9', 'gup-cultivator-n9'],
        xiaoweiNote: {
          cn: `这张是给华裔同学的"惊喜卡"——抄经少年第 9 节和种田人第 9 节都讲了。
作为 ABC，我读到这一段特别有共鸣：同一个世纪，地球两端都在算同一个圆周率。

并列对照（**Rule 0：不褒贬，谁也不更聪明**）：
- **印度 Aryabhata（499）**：圆周率约 3.1416，用**十进制位值制 + 写在棕榈叶上的符号**。
- **中国祖冲之（429-500）**：圆周率精确到**小数点后七位**（3.1415926~3.1415927），
  纪录领先世界约八百年，用**算筹（counting rods，小棍在算板上摆）**。
  （时间背景：中国正处魏晋南北朝大分裂，约 220-589。）

关键论点（老师说这是**需要小心理解**的一句）：
传遍世界的是印度数字、不是中国算筹——**不是因为谁更聪明**（祖冲之精度还更高），
而是因为**形式适不适合传播**：印度那套是能抄、能传的**书写符号**；
中国算筹是**操作工具**，算完就收走，没法一片叶子一片叶子地传下去。

考点关键句：**"更聪明"和"更能传"是两回事。**一项发明能不能传遍世界，
靠的是它的**形式**适不适合被复制和带走。
（注意：这是一个**史学解释**，也有学者强调贸易/翻译运动等别的原因——别写成铁定唯一原因。）`,
          en: `This is the "surprise card" for Chinese-heritage classmates — the copyist's Node 9
and the cultivator's Node 9 both cover it. As an ABC, this stretch really resonated with me:
the same century, both ends of the Earth computing the same pi.

Side-by-side (**Rule 0: no ranking, neither is smarter**):
- **India's Aryabhata (499)**: pi ≈ 3.1416, using **decimal place-value + symbols written on
  palm leaf.**
- **China's Zu Chongzhi (429-500)**: pi to **seven decimal places** (3.1415926-3.1415927), a
  record leading the world by ~800 years, using **counting rods (sticks laid on a board)**.
  (Context: China was in the Wei-Jin-Northern-Southern division, c. 220-589.)

Core argument (teacher said this is a line to **read carefully**):
what spread across the world was Indian numbers, not Chinese counting rods — **not because
either was smarter** (Zu Chongzhi's precision was even higher), but because of **whether the
form suits transmission**: India's was a **written symbol** that could be copied and carried;
China's counting rods were an **operating tool**, swept away after the sum, that couldn't be
passed on leaf by leaf.

Key exam sentence: **"smarter" and "more transmissible" are two different things.** Whether an
invention spreads worldwide depends on whether its **form** can be copied and carried.
(Note: this is a **historical interpretation**; some scholars stress trade/translation movements
too — don't write it as the single, fixed cause.)`,
        },
      },
    },

    {
      id: 'iron-pillar-and-anonymous-labor',
      termCn: '德里铁柱与无名工匠',
      termEn: 'The Iron Pillar & the Anonymous Artisans',
      standardRef: ['CA HSS 6.5（古印度·冶金/工艺成就）', 'AP World — agency & silence'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'village-cultivator-receiving-end', nodeId: 'gup-cultivator-n7', context: '种田人用铁柱铭文记国王不记工匠，类比自己也是无名的手' },
        ],
      },
      standaloneText: {
        cn: `**德里铁柱（Iron Pillar of Delhi，又称 Mehrauli 铁柱）**是笈多黄金时代
**冶金技术**的标志性成就，故事里种田人第 7 节点到过，但值得单独掌握。

**硬数据：**
- 高约 **7.2 米**，由 Chandragupta II（约 380-415）时期立起。
- 历经约 **1600 年几乎不生锈**——这套抗腐蚀的冶铁技术，连现代科学家都要研究。

**它为什么是个 AP 考点（agency & silence）：**
铁柱上的梵语铭文，记住了下令立柱的国王 **Chandra（一般定为 Chandragupta II）**的名字，
却**没有记住任何一个真正炼出这根铁、一锤一锤把它打起来的工匠的名字**。

故事连接：种田人第 7 节就拿这根铁柱当镜子——他说"我和那个工匠是一类人：
我们的手造出了黄金时代的一切，名字一个都没留"。这正好是这一课"良心"视角的核心：
辉煌是真的，可扛着辉煌的人是沉默、无名的，也是真的。

考点关键句：德里铁柱 = 黄金时代工艺的奇迹 + "成就记在国王名下、造它的工匠却无名"的
典型 DBQ 素材（理念辉煌 vs 谁真正付出劳动）。`,
        en: `The **Iron Pillar of Delhi (the Mehrauli pillar)** is a signature achievement of the
Gupta Golden Age's **metallurgy**. The cultivator's Node 7 touches it, but it's worth knowing
on its own.

**Hard facts:**
- About **7.2 meters** tall, raised under Chandragupta II (c. 380-415).
- Barely rusted in about **1600 years** — a rust-resistant ironworking technique modern
  scientists still study.

**Why it's an AP point (agency & silence):**
The Sanskrit inscription on the pillar remembers the name of the king who ordered it, **Chandra
(generally identified as Chandragupta II)**, but **does not remember a single name of the
artisans who actually made the iron and hammered it up, blow by blow.**

Story link: the cultivator's Node 7 uses the pillar as a mirror — he says "I and that artisan
are one kind of people: our hands made everything of the Golden Age, not one of our names was
kept." That's the heart of this lesson's "conscience" lens: the brilliance is real, and the
people carrying it on their backs are silent and nameless — also real.

Key exam sentence: the Iron Pillar = a marvel of Golden Age craft + classic DBQ material for
"the achievement credited to the king, the artisans who built it left nameless" (the brilliance
of an idea vs. who actually did the labor).`,
      },
      xiaoweiNote: {
        cn: `老师说这根铁柱是个完美的 DBQ"小切口"——一个具体的物，就能问出大问题：
"谁的名字被记住了，谁的没有？"

我的记忆锚：**铁柱 = 1600 年不锈 + 记住国王、忘了工匠**。
考"agency & silence"（谁被史书沉默）时，这是最好用的一个具体例子。`,
        en: `Teacher said this pillar is a perfect DBQ "small entry point" — one concrete object
can raise a big question: "whose name got remembered, whose didn't?"

My memory anchor: **Iron Pillar = rust-free for 1600 years + remembers the king, forgets the
artisans.** When testing "agency & silence" (who the histories silence), it's the handiest
concrete example.`,
      },
    },

    {
      id: 'golden-age-agency-and-silence',
      termCn: '"黄金时代"标签与能动性/沉默',
      termEn: 'The "Golden Age" Label & Agency / Silence',
      standardRef: ['AP World — historiography', 'AP DBQ rubric（complexity）'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'village-cultivator-receiving-end',
        nodeIds: ['gup-cultivator-n10', 'gup-aryabhata-n10', 'gup-copyist-n10'],
        xiaoweiNote: {
          cn: `三个视角的第 10 节（synthesis）都在掂量同一个问题——这是整门课的"压轴卡"。
默认视角（种田人）那一节问得最直接：**到底该不该叫笈多那个时代"黄金时代"？**

老师说这是一个**史学（historiography）**问题——"Golden Age"是后人贴的**标签**，
不是中性事实。它**突出了什么、又遮蔽了什么**？

必背两面（AP 要你**同时**说出来，这叫 complexity）：
- **该叫**：算出地球自转、算不尽的圆、千年不锈的铁柱、最美的梵语诗——
  成就实打实，是全人类的财富，不能因为有人没分到金子就否认它真发过光。
- **遮蔽**：它把一个"十个人里八九个没名字、靠天吃饭、被钉最底层"的社会，
  说成金光灿灿的盛世；给极不均的时代镀金，对沉默的大多数是一种**二次抹去**。

考点关键句：**伟大是真的，不均也是真的，两件事是同一个时代。**
这正是 AP DBQ 最想要的"既不洗白、也不全盘否定"的中立分析（agency & silence 核心角度）。

记忆锚：听到任何"黄金时代/盛世"，先问一句——**金子落在谁手里？谁有名字，谁被沉默？**`,
          en: `All three lenses' Node 10 (synthesis) weigh the same question — this is the
"capstone card" of the topic. The default lens (the cultivator) asks it most directly:
**should we, after all, call the Gupta age a "Golden Age"?**

Teacher said this is a **historiography** question — "Golden Age" is a **label** later people
pasted on, not a neutral fact. What does it **highlight, and what does it hide**?

Must-memorize, both sides (AP wants you to say **both at once** — that's complexity):
- **Yes, it deserves it**: it calculated the Earth's rotation, a circle with no end, a pillar
  rust-free for a thousand years, the most beautiful Sanskrit poetry — solid, real achievements,
  the wealth of all humankind; you can't deny it truly shone just because some got no gold.
- **It hides**: it calls a society where eight or nine of ten have no name, live at the mercy of
  the weather, and are pinned to the bottom, a glittering high age; gilding a steeply unequal age
  is a **second erasure** of the silent majority.

Key exam sentence: **the greatness is real, the inequality is real, and they are the same age.**
That's exactly the neutral, "neither whitewash nor wholesale condemnation" analysis AP DBQ wants
(the core agency & silence angle).

Memory anchor: whenever you hear "Golden Age / high age," ask first — **into whose hands did the
gold fall? Who has a name, who is silenced?**`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `一个王朝的疆土只撑了约两百三十年就碎了，可它发展成熟的那套数字和"零"，
活到了今天、传遍了全球——比任何疆界都活得久、传得远。

你觉得一项发明的"不朽"，和一个国家的"强大"，是同一回事吗？
请用这一课里至少两个具体证据，支持你的判断。`,
      en: `A dynasty's territory lasted only about two hundred and thirty years before it
shattered, yet the numbers and "zero" it brought to maturity survive today and have spread
across the whole globe — outliving and outreaching any border.

Do you think an invention's "immortality" and a nation's "strength" are the same thing?
Support your judgment with at least two specific pieces of evidence from this lesson.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "不是同一回事"的证据：笈多帝国约 550 年瓦解，但印度数字经阿拉伯（约 825）、
  欧洲（1202）传遍世界，至今全人类在用；最不朽的恰恰是"谁都没署名的数字本身"。
- "有关系"的证据：正是笈多相对稳定、富裕、肯供养学者的环境，才让 Aryabhata 能安心算星星——
  没有那个"强大"的土壤，发明未必长得出来。
高分写法：承认两边都站得住，再说明你更倾向哪边、为什么——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**,
not which side you pick.
- Evidence for "not the same thing": the Gupta empire fell around 550, yet Indian numerals
  spread worldwide via the Arab world (~825) and Europe (1202) and are used by all humankind
  today; the most immortal part is "the unsigned numbers themselves."
- Evidence for "they're connected": it was the Guptas' relatively stable, wealthy environment,
  willing to support scholars, that let Aryabhata calmly study the stars — without that "strong"
  soil, the invention might not have grown.
High-scoring move: acknowledge both sides stand, then explain which you lean toward and why —
that's complexity.`,
      conceptsActivated: ['indian-numerals-transmission', 'decimal-place-value-and-zero', 'huna-and-decline'],
    },
    {
      id: 'q2',
      cn: `我们把笈多那个时代叫"黄金时代"，可金子主要落在宫廷和学者手里，
养活这一切的村庄农人，连名字都没在史书里留下。

如果你是 AP 老师，要出一道题，逼学生**同时**看见"黄金时代的伟大"和"它脚下沉默的大多数"，
你会怎么提问？写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `We call the Gupta age a "Golden Age," yet the gold fell mainly into the hands of the
court and the scholars, while the village cultivators who fed it all left not even a name in the
histories.

If you were an AP teacher writing a question to force students to see, **at the same time**, both
"the greatness of the Golden Age" and "the silent majority beneath it," how would you phrase it?
Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题逼学生**同时看见两件事**，而不是二选一。
可以从种田人那句话切入——他说"金子照亮了天才和他的星，可金子是从我背对着的、黑黢黢的
恒河平原上来的"。这句点出"黄金时代"标签遮蔽了谁。
你的题目可以让学生比较"Aryabhata（有名字、被记住）"和"造铁柱的工匠/种田人（无名、被沉默）"——
为什么前者进了史书，后者没有？这种不对称，本身能告诉我们什么关于"历史是谁写的"？`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through the cultivator's line — "the gold lit up the genius and his stars, but
the gold came from that dark Ganges plain I have my back turned to." That names whom the "Golden
Age" label hides.
Your question could have students compare "Aryabhata (named, remembered)" with "the artisans who
built the Iron Pillar / the cultivator (nameless, silenced)" — why did the first enter the
histories and the second didn't? What does that asymmetry itself tell us about "who writes
history"?`,
      conceptsActivated: ['golden-age-agency-and-silence', 'iron-pillar-and-anonymous-labor', 'varna-jati-caste'],
    },
    {
      id: 'q3',
      cn: `同一个世纪，印度的 Aryabhata 和中国的祖冲之都在算圆周率，祖冲之算得还更准。
可最终传遍世界、变成全人类语言的，是印度的数字，不是中国的算筹。

你同意"一项发明能不能传遍世界，靠的不是它'更聪明'，而是它的'形式适不适合传播'"
这个说法吗？请用印度数字和中国算筹的具体差别，支持你的看法。`,
      en: `In the same century, India's Aryabhata and China's Zu Chongzhi were both computing pi,
and Zu Chongzhi's was even more precise. Yet what finally spread across the world and became all
humankind's language was India's numbers, not China's counting rods.

Do you agree with the claim "whether an invention spreads worldwide depends not on its being
'smarter' but on whether its 'form suits transmission'"? Support your view with the specific
difference between Indian numbers and Chinese counting rods.`,
      hintCn: `提示：先把两个事实摆稳——祖冲之精度更高（小数点后七位、领先约八百年），
Aryabhata 的位值符号最终成了全人类的语言。这两件事**同时为真**，不矛盾。
支持"形式决定传播"：印度数字是**写在叶上的符号**，能抄、能印、能随手运算、能被带走；
中国算筹是**摆在板上的小棍**，算完就收，是操作工具，不是一套能向外传的书写系统。
进阶/反驳：也有学者说，传播还靠**贸易路线、翻译运动**（阿拉伯把它译介给欧洲）等因素——
所以"形式"不是唯一原因。能说出"形式很关键，但不是唯一"，AP 会给 complexity 分。
（记住 Rule 0：这不是说哪个文明更聪明。）`,
      hintEn: `Hint: first set the two facts firmly — Zu Chongzhi was more precise (seven decimals,
~800-year lead), and Aryabhata's place-value symbols became all humankind's language. Both are
**true at once** and don't contradict.
Support "form decides transmission": Indian numbers were **symbols written on leaves** — copyable,
printable, easy to compute with by hand, carryable; Chinese counting rods were **sticks on a
board**, swept away after the sum, an operating tool, not a writing system that travels outward.
Going deeper / counter: some scholars say transmission also relied on **trade routes and
translation movements** (the Arab world rendering it to Europe) — so "form" isn't the only cause.
Saying "form is key, but not the only cause" earns AP complexity points.
(Remember Rule 0: this is not about which civilization was smarter.)`,
      conceptsActivated: ['china-bridge-zu-chongzhi', 'indian-numerals-transmission', 'decimal-place-value-and-zero'],
    },
  ],
};

export default notebook;
