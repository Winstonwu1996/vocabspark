// ─── 同伴笔记本架构 v2 · Mesopotamia & Sumer 3500 BCE ──────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 10 张核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//          —— standaloneText / xiaoweiNote 必须在卡顶层，绝不嵌进 storyAnchor
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 课纲对齐：
//   - CA HSS Grade 6 · 6.2（美索不达米亚 / 早期河谷文明）
//   - AP World History · Foundations（国家与城市的兴起）
//
// schemaVersion: 2 · notebookVersion: mesopotamia-3500bce-v2

export var notebook = {
  topicId: 'mesopotamia-3500bce',
  topicNameCn: '美索不达米亚·苏美尔 3500 BCE',
  topicNameEn: 'Mesopotamia & Sumer · The First Cities',
  schemaVersion: 2,
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
    cn: '今天老师说，我们要学整个世界史的"第一课"——美索不达米亚和苏美尔。\n\n她说几乎所有世界史课本都从这里开篇，因为这是"城市革命"和"文明四要素"最干净的案例。CA HSS 六年级 6.2 就考它。\n\n她在黑板上写了一串新词，全是两河流域的术语，我先把它们记下来：\n\nMesopotamia（美索不达米亚）、Sumer（苏美尔）、Uruk（乌鲁克）、\ncuneiform（楔形文字）、ziggurat（神庙塔）、city-state（城邦）、\nSargon（萨尔贡）、Enheduanna（恩赫杜安娜）、Gilgamesh（吉尔伽美什）。\n\n老师让我们一定记住一句话，因为这是整门课**最反直觉的考点**：\n"文字最早是用来记账的，不是用来写诗的。"\n\n等下读三个故事——神庙书吏那条线（发明文字、记账的人）、\n早期王那条线（把权力从神庙攥进宫殿的人）、神庙劳工那条线（被写进账本、\n却看不懂账本的人）——读完再回来对照这张单子，看我能不能讲清楚。\n\n老师说了一句我抄在笔记本第一页的话：\n"苏美尔常被讲成「文明的光荣起点」。\n但同一套发明，也第一次把人分成了「被记进账本的人」和「写账本的人」。\n读它，要同时看见它的光荣和它的代价。"',
    en: 'Today my teacher said we\'re learning the "first lesson" of all of world history — Mesopotamia and Sumer.\n\nShe said almost every world history textbook opens here, because it\'s the cleanest case of the "urban revolution" and the "building blocks of civilization." CA HSS Grade 6, Standard 6.2 tests it.\n\nShe wrote a string of new words on the board. I\'m writing them down first:\n\nMesopotamia, Sumer, Uruk,\ncuneiform, ziggurat, city-state,\nSargon, Enheduanna, Gilgamesh.\n\nAnd one sentence she told us we must remember, because it\'s the **most counter-intuitive exam point** in the whole topic:\n"Writing was first used to keep accounts, not to write poetry."\n\nI\'ll read the three story lines — the temple scribe\'s line (the person who invented writing and kept accounts), the early king\'s line (the person who squeezed power from the temple into the palace), and the temple laborer\'s line (the person who was written into the ledger but couldn\'t read it). Then I\'ll come back and check whether I can explain each term.\n\nTeacher said one line I copied onto the first page of my notebook:\n"Sumer is often told as \'the glorious beginning of civilization.\'\nBut the same inventions also, for the first time, sorted people into\n\'those written into the ledger\' and \'those who write the ledger.\'\nTo read it, you have to see both its glory and its cost."',
    keyTerms: [
      { cn: '美索不达米亚（两河之间的土地）', en: 'Mesopotamia (the land between the rivers)' },
      { cn: '苏美尔', en: 'Sumer' },
      { cn: '底格里斯河 / 幼发拉底河', en: 'Tigris / Euphrates' },
      { cn: '乌鲁克（世界第一座大城）', en: 'Uruk (the first great city)' },
      { cn: '城邦', en: 'city-state' },
      { cn: '城市革命', en: 'urban revolution' },
      { cn: '文明四要素', en: 'building blocks of civilization' },
      { cn: '剩余粮食', en: 'surplus grain' },
      { cn: '楔形文字', en: 'cuneiform' },
      { cn: '神庙塔', en: 'ziggurat' },
      { cn: '神庙经济', en: 'temple economy' },
      { cn: '盐碱化', en: 'salinization' },
      { cn: '书吏', en: 'dub-sar (scribe)' },
      { cn: 'lugal（大人物 → 王）', en: 'lugal ("big man" → king)' },
      { cn: '阿卡德帝国 / 萨尔贡', en: 'Akkadian Empire / Sargon' },
      { cn: '苏美尔王表', en: 'Sumerian King List' },
    ],
    // mustKnow: true = 课纲/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '萨尔贡（阿卡德的萨尔贡）',
        nameEn: 'Sargon of Akkad',
        ipa: '/ˈsɑːrɡɒn/',
        roleCn: '约前 2334 年征服苏美尔各城邦，建立人类已知第一个帝国（阿卡德帝国）',
        roleEn: 'Around 2334 BCE conquered the Sumerian city-states and founded humanity\'s first known empire (the Akkadian Empire)',
        mustKnow: true,
        audioKey: 'sargon-of-akkad',
      },
      {
        nameCn: '恩赫杜安娜',
        nameEn: 'Enheduanna',
        ipa: '/ˌɛnhɛduˈɑːnə/',
        roleCn: 'Sargon 之女、Ur 月神最高女祭司；署名写诗，被普遍视为史上第一位留名的作者',
        roleEn: 'Sargon\'s daughter, high priestess of the moon god at Ur; signed her poems, widely regarded as the first named author in history',
        mustKnow: true,
        audioKey: 'enheduanna',
      },
      {
        nameCn: '吉尔伽美什',
        nameEn: 'Gilgamesh',
        ipa: '/ˈɡɪlɡəmɛʃ/',
        roleCn: 'Uruk 传说国王、史诗主角（可能有真实原型，但流传的史诗是文学传说，不能当档案史实）',
        roleEn: 'Legendary king of Uruk and hero of the epic (may have had a real basis, but the surviving epic is literature and legend, not archival fact)',
        mustKnow: true,
        audioKey: 'gilgamesh',
      },
      {
        nameCn: '库辛',
        nameEn: 'Kushim',
        ipa: '/ˈkuːʃɪm/',
        roleCn: '出现在已知最早泥板之一上的标记（约前 3300），很可能是个机构职位或管仓库、记账的人',
        roleEn: 'A mark on one of the earliest known tablets (c. 3300 BCE), very likely an institutional title or a person who managed a storehouse and its accounts',
        mustKnow: true,
        audioKey: 'kushim',
      },
      {
        nameCn: '乌尔-纳姆',
        nameEn: 'Ur-Nammu',
        ipa: '/ʊr ˈnæmuː/',
        roleCn: 'Ur 第三王朝开创者（约前 2112-2095），建大 ziggurat、留下早于汉谟拉比的法典',
        roleEn: 'Founder of the Third Dynasty of Ur (c. 2112-2095 BCE); built a great ziggurat and left a law code earlier than Hammurabi\'s',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '汉谟拉比',
        nameEn: 'Hammurabi',
        ipa: '/ˌhæməˈrɑːbi/',
        roleCn: '巴比伦王（约前 1792-1750）、汉谟拉比法典——成文法传统的一环，另课详讲',
        roleEn: 'King of Babylon (c. 1792-1750 BCE), Hammurabi\'s Code — a link in the written-law tradition, a separate lesson',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'urban-revolution-four-blocks',
      termCn: '城市革命与文明四要素',
      termEn: 'Urban Revolution & the Building Blocks of Civilization',
      defCn: '文明四要素指城市、剩余粮食、文字、分工与阶层这四样东西同时出现，第一次让很多陌生人组织在一起生活。考古学家 V. Gordon Childe 把这个过程叫"城市革命（urban revolution）"。',
      defEn: 'The "building blocks of civilization" are four things that appeared together for the first time: cities, surplus grain, writing, and division of labor with social classes. These let large groups of strangers live and work together. Archaeologist V. Gordon Childe called this process the "urban revolution."',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        nodeIds: ['meso-scribe-n3', 'meso-laborer-n3'],
        xiaoweiNote: {
          cn: '书吏那条线和劳工那条线都在讲这个，第 3 节最清楚。\n老师说这是整门课的"骨架"——所有后面的考点都挂在这条因果链上，我把它背成一条锁链：\n\n**灌溉 → 剩余粮食 → 分工 → 阶层 → 文字 → 国家**\n（一环扣一环，背不出第一个，后面全掉）\n\n关键起点是"剩余粮食（surplus grain）"。\n粮食多了才能养活一批**不用下田的人**——祭司、书吏、工匠、士兵——这才有了分工和阶层。\n\n四要素是什么：① 城市 ② 剩余粮食 ③ 文字 ④ 分工与阶层。\n\nAP 要你讲出一个更深的角度：**每一要素都"既解决旧问题，又制造新不平等"**。\n劳工那条线最戳——同样四个词，对祭司是"文明成就"，对底层劳工是"我出了力却几乎没分到"。\n别只背"四要素是进步"，要会讲它的两面，这叫 complexity（复杂性），AP 最爱这个。',
          en: 'Both the scribe\'s and the laborer\'s story lines cover this — is the clearest.\nTeacher said this is the "skeleton" of the whole topic. Every later exam point hangs on this causal chain. I memorize it like a chain of links:\n\n**irrigation → surplus grain → division of labor → classes → writing → the state**\n(miss the first link, the rest fall off)\n\nThe key starting point is "surplus grain." Only with extra food can you feed people who **don\'t farm** — priests, scribes, craftsmen, soldiers — and only then do you get division of labor and classes.\n\nThe four building blocks: ① cities ② surplus grain ③ writing ④ division of labor and classes.\n\nFor AP, you need a deeper angle: **every building block "solved an old problem AND created a new inequality."**\nThe laborer\'s story hits hardest — the same four words are "achievements of civilization" for the priest, but "I gave my labor and got almost nothing" for the laborer at the bottom.\nDon\'t just memorize "the four blocks are progress." Learn to tell both faces — that\'s complexity, and AP loves it.',
        },
      },
    },

    {
      id: 'writing-was-for-accounts',
      termCn: '文字最早是为记账（楔形文字的管理本质）',
      termEn: 'Writing Began for Accounts (the Managerial Nature of Cuneiform)',
      defCn: '楔形文字（cuneiform）是人类最早的一种文字系统。用削尖的芦苇杆在湿泥板上压出楔形笔画。它最早不是用来写诗的——已知最早的泥板里 85-90% 是神庙账目，记粮食、羊群、劳工和债务。',
      defEn: 'Cuneiform is one of humanity\'s earliest writing systems. A sharpened reed was pressed into wet clay to make wedge-shaped marks. It was not invented for poetry — about 85-90% of the earliest known tablets are temple accounting records tracking grain, livestock, workers, and debts.',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations (writing as a tool of power)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        nodeIds: ['meso-scribe-n2', 'meso-scribe-n4'],
        xiaoweiNote: {
          cn: '这是整门课**最反直觉、也最爱考**的一条。书吏那条线第 2、4 节就是它。\n\n误解陷阱（老师反复纠）：\n误："楔形文字是发明来写诗、写神话的。"\n正：它最早是**用来记账**的。\n神庙要管成千劳工、海量大麦，光靠脑子记不住，才逼出了文字。\n已知最早的泥板里，**约 85-90% 是行政账目**（粮、羊、劳工、欠债）。\n\n必背关键句："文字最早是管理与权力的工具，不是文学。"\n\n答 AP 论证题用这三条证据：\n① 85-90% 早期泥板是账目\n② 最早留名的 Kushim 很可能是会计不是诗人\n③ Gilgamesh 史诗那种文学，是文字成熟**几百年后**才出现的（先有账本，后有史诗）\n\ncuneiform 这个词本身来自拉丁文"楔形"，用削尖的芦苇杆（stylus）压在湿泥板上，笔画像一个个小楔子。这个词的来历也常考。',
          en: 'This is the **most counter-intuitive and most tested** point in the whole topic. The scribe\'s story line,, is all about this.\n\nMisconception trap (teacher keeps correcting):\nMisconception: "Cuneiform was invented to write poems and myths."\nCorrection: it was first used **to keep accounts.**\nThe temple had to manage thousands of workers and mountains of barley — too much to hold in your head — and that pressure forced writing into being.\nOf the earliest known tablets, **about 85-90% are administrative records** (grain, sheep, workers, debts).\n\nMust-memorize line: "Writing began as a tool of management and power, not literature."\n\nThree pieces of evidence for an AP argument:\n① 85-90% of early tablets are accounts\n② The earliest named figure, Kushim, was very likely an accountant, not a poet\n③ Literature like the Epic of Gilgamesh appeared **centuries after** writing matured (ledger first, epic later)\n\nThe word "cuneiform" comes from the Latin for "wedge-shaped." A sharpened reed (a stylus) was pressed into wet clay, and the marks look like little wedges. The origin of this word is also tested.',
        },
      },
    },

    {
      id: 'kushim-first-name',
      termCn: 'Kushim：最早留名的很可能是个会计',
      termEn: 'Kushim: The Earliest Named Figure Was Very Likely an Accountant',
      defCn: 'Kushim 是出现在已知最早泥板之一（约前 3300 年）上的一个标记，旁边记着一笔大麦账。多数学者认为这很可能是个机构职位，或者是管仓库、经手这笔账的人，不是诗人或国王。',
      defEn: 'Kushim is a mark found on one of the earliest known clay tablets (around 3300 BCE), next to a barley account. Most scholars think it was very likely an institutional title, or the person who managed the storehouse and handled the account — not a poet or a king.',
      standardRef: ['AP World History — Foundations (sourcing)', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['meso-scribe-n6', 'meso-lugal-n6', 'meso-laborer-n6'],
        xiaoweiNote: {
          cn: '这块泥板是三条故事线共用的节点，三条线各从一个角度看它。\n\n事实地基（老师特别提醒别讲死）：\nKushim 是出现在**已知最早泥板之一**（约前 3300）上的一个标记，旁边记着一笔大麦账。\n但"Kushim 到底是谁"史料**没有确切答案**——\n多数学者认为它**很可能**是个机构职位，或者是经手这笔账的人，大概是管仓库、记账的。\n\n所以答题别写死成"Kushim 是人类第一个人名"，要用：\n"已知最早被写下的名字**之一**、**很可能**是会计"\n（两个关键词：「之一」和「很可能」）\n\n**为什么这条有意思（写 DBQ 用）：**\n人类最早被"永远记住"的名字之一，不是国王、不是英雄、不是诗人，而是个**记账的**。\n这把"文字一出生就站在管理者那边"这条主线，钉死在一个具体证据上。\n\n三条故事线看同一块泥（最难忘）：\n书吏那条线看到"文字的荣耀"；王那条线看到"权力的家底"；\n田里的劳工看到"本该有我的名字，却只有一个被发出去的数目"。',
          en: 'This tablet is a shared node across all three story lines — each one looks at it from a different angle.\n\nFactual base (teacher specifically warns: don\'t overstate):\nKushim is a mark on **one of the earliest known tablets** (c. 3300 BCE), beside a barley account.\nBut "who Kushim actually was" the records give **no certain answer** — most scholars think it was **very likely** an institutional title, or the person handling the account, probably a storehouse manager and bookkeeper.\n\nSo don\'t write "Kushim is humanity\'s first personal name." Use:\n"**One of** the earliest names ever written down, **very likely** an accountant."\n(Two key words: "one of" and "very likely")\n\n**Why this is interesting (for DBQ):**\nOne of the earliest names humanity ever "remembered forever" was not a king, hero, or poet, but a **bookkeeper.**\nThat pins the through-line "writing stood on the managers\' side from birth" to a concrete piece of evidence.\n\nThree story lines, one tablet (most memorable):\nThe scribe sees "the glory of writing"; the king sees "the assets of power";\nthe laborer in the field sees "there should have been my name — instead there\'s only a number issued."',
        },
      },
    },

    {
      id: 'city-states-not-one-empire',
      termCn: '苏美尔是城邦，不是统一帝国',
      termEn: 'Sumer Was City-States, Not One Empire',
      defCn: '城邦（city-state）指一座城加上它附近的土地，自己有守护神、神庙和统治者，是独立运作的政治单位。苏美尔大部分时间是一堆互相竞争的城邦，不是统一帝国。',
      defEn: 'A city-state is one city plus the land around it, with its own patron god, temple, and ruler — an independent political unit. For most of its history, Sumer was a collection of competing city-states, not a unified empire.',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        nodeIds: ['meso-lugal-n2'],
        xiaoweiNote: {
          cn: '王那条故事线第 2 节讲到了。这是个常见误解陷阱：\n\n误："苏美尔是一个统一的大帝国。"\n正：大部分时间，苏美尔是**一堆互相竞争、常常打仗的城邦**\n（Uruk、Ur、Eridu、Lagash、Nippur……），每座城有自己的**守护神、神庙、统治者**。\n\n城邦之间为什么打？争**水**、争**地**。\n这正好接回灌溉那条线——水是命，抢水就是抢命。\n正因为常打仗，才需要战时统帅 lugal，王权才有机会冒出来。\n\n关键句：苏美尔 = 竞争的城邦体系。\n第一个**帝国**要等到约前 2334 年 Sargon 才出现。\n别把"城邦（city-state）"和"帝国（empire）"搞混——两种完全不同的政治形态。',
          en: 'The king\'s story line,, covers this. It\'s a common misconception trap:\n\nMisconception: "Sumer was one unified great empire."\nCorrection: for most of its history, Sumer was **a cluster of competing, often warring city-states** (Uruk, Ur, Eridu, Lagash, Nippur…), each with its own **patron god, temple, and ruler.**\n\nWhy did city-states fight? Over **water** and **land.**\nThis loops straight back to the irrigation line — water is life, and fighting over water is fighting over survival.\nPrecisely because they fought so often, they needed a wartime commander (the lugal), and that is how kingship got its chance to emerge.\n\nKey line: Sumer = a system of competing city-states.\nThe first **empire** waited until around 2334 BCE with Sargon.\nDon\'t mix up "city-state" and "empire" — two completely different political forms.',
        },
      },
    },

    {
      id: 'from-priest-to-king',
      termCn: '从祭司到王（en → lugal）',
      termEn: 'From Priest to King (en → lugal)',
      defCn: '苏美尔最早的城里，管事的是神庙祭司（en）。后来战时临时统帅 lugal（意思就是"大人物"）权力越攥越紧，变成世袭的王，建起跟神庙并立的宫殿。这是"国家"从无到有的经典过程。',
      defEn: 'In the earliest Sumerian cities, the temple priest (en) was in charge. Over time, the wartime commander called the lugal — which literally means "big man" — held onto power more and more, became a hereditary king, and built a palace to rival the temple. This is the classic process of how "the state" came from nothing.',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations (state formation)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['meso-lugal-n1', 'meso-lugal-n5', 'meso-lugal-n8'],
        xiaoweiNote: {
          cn: '王那条故事线整条都在讲这个，第 1、5、8 节最关键。讲的是"国家"怎么从无到有。\n\n权力转移的链条（必背）：\n**祭司（en）→ lugal（王）→ Sargon（帝国）**\n\n① 最早城里说了算的是神庙**祭司（en / ensi）**。\n② **lugal**（字面"大人物"）本是**战时临时统帅**，仗打多了，权力从临时变世袭 → 成了**王**，盖起跟神庙并立、甚至压过神庙的宫殿。\n③ 王还让书吏把"王权从天降下"写进泥里，让自己的权力显得"神授、不可挑战"——这就接上苏美尔王表那张卡了。\n\n考点关键句：苏美尔的权力，从"神庙（祭司）"一步步转移到"宫殿（王）"，再被 Sargon 放大成"帝国"。\n这是"国家如何形成"的经典案例。\n（Gilgamesh 就锚在"神庙权力 → 王权"这个转折点上——记得标"传说"。）',
          en: 'The king\'s story line is all about this — are key. It\'s about how "the state" came from nothing.\n\nThe chain of power transfer (must memorize):\n**priest (en) → lugal (king) → Sargon (empire)**\n\n① The earliest city was run by the temple **priest (en / ensi).**\n② The **lugal** (literally "big man") began as a **temporary wartime commander.** With enough war, power went from temporary to hereditary → he became a **king**, building a palace that stood beside — and eventually above — the temple.\n③ The king also had scribes write "kingship descended from heaven" into clay, making his power look "heaven-given, beyond challenge" — that connects directly to the Sumerian King List card.\n\nKey line: Sumerian power moved step by step from "the temple (priests)" to "the palace (king)," then Sargon enlarged it into "empire."\nThis is a classic case of how the state forms.\n(Gilgamesh is anchored on this "temple power → kingship" turn — remember to label it "legend.")',
        },
      },
    },

    {
      id: 'sargon-first-empire',
      termCn: 'Sargon 与人类第一个帝国',
      termEn: 'Sargon and Humanity\'s First Empire',
      defCn: '约前 2334 年，萨尔贡（Sargon）征服了苏美尔各城邦，第一次把许多城拢到同一个统治者之下，建立了人类已知第一个帝国——阿卡德帝国（Akkadian Empire）。帝国和城邦的区别：帝国用一套制度管许多城。',
      defEn: 'Around 2334 BCE, Sargon conquered the Sumerian city-states and gathered many cities under one ruler for the first time — founding humanity\'s first known empire, the Akkadian Empire. The difference between an empire and a city-state: an empire runs many cities under one system.',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        nodeIds: ['meso-lugal-n8'],
        xiaoweiNote: {
          cn: '王那条故事线第 8 节讲到，作为"攥权之路的终点"。这是个高频名词考点。\n\n关键事实：约前 2334 年，来自北边的 **Sargon（萨尔贡）** 征服了苏美尔各城邦，第一次把许多城拢到**同一个统治者**之下——这就是人类**已知第一个帝国（阿卡德帝国）**。\n\n他不只是占地，还把统治**制度化**：\n① 派总督去各地管理\n② 统一度量衡\n③ 推行阿卡德语\n\n这就是"帝国"和"城邦"的区别——帝国是把很多城用一套制度管起来。\n\n必背链条：**城邦（互相打）→ Sargon → 第一个帝国**\n\n答题两个注意：\n① 用"约前 2334 年"（上古日期是估算区间，别写精确的某一年）\n② 用"人类**已知**第一个帝国"（这个"已知"留余地，是标准表述）',
          en: 'The king\'s story line,, covers this — it\'s the "end of the road of gripping power." This is a high-frequency term.\n\nKey facts: around 2334 BCE, **Sargon**, from the north, conquered the Sumerian city-states and gathered many cities under **one ruler** for the first time — humanity\'s **first known empire (the Akkadian Empire).**\n\nHe didn\'t just take land. He **institutionalized** rule:\n① Sent governors to manage different regions\n② Standardized weights and measures\n③ Spread the Akkadian language\n\nThat\'s what makes an empire different from a city-state — an empire runs many cities under one system.\n\nMust-memorize chain: **city-states (fighting each other) → Sargon → the first empire**\n\nTwo exam notes:\n① Use "around 2334 BCE" (ancient dates are estimate-ranges — don\'t write an exact single year)\n② Use "humanity\'s **first known** empire" — that word "known" is the standard hedged phrasing; keep it',
        },
      },
    },

    {
      id: 'enheduanna-first-author',
      termCn: 'Enheduanna：史上第一位留名的作者',
      termEn: 'Enheduanna: The First Named Author in History',
      defCn: 'Enheduanna（恩赫杜安娜）是 Sargon 的女儿、Ur 月神最高女祭司。约前 2285 年，她写下献给女神 Inanna 的赞美诗，并署上自己的名字，被普遍视为人类历史上第一位留下姓名的作者。',
      defEn: 'Enheduanna was Sargon\'s daughter and the high priestess of the moon god at Ur. Around 2285 BCE she wrote hymns to the goddess Inanna and signed her own name on them. She is widely regarded as the first author in history whose name we know.',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['meso-scribe-n9'],
        xiaoweiNote: {
          cn: '书吏那条故事线第 9 节讲到，作为"文字从账本长成文学"的转折。\n\n关键事实：约前 2285 年，**Sargon 的女儿 Enheduanna（恩赫杜安娜）** 被任命为 **Ur 月神最高女祭司**，她写下献给女神 **Inanna** 的赞美诗，并**署上了自己的名字**。她**被普遍视为**人类历史上**第一位留下姓名的作者**。\n（答题用"被普遍视为"——这是学界广泛但非绝对的表述。）\n\n为什么这条好记（也很容易答）：\n文字诞生几百年来，一直是**匿名的账房工具**（泥板上只有数目和货物，没有"我"）。\n直到 Enheduanna，才第一次有一个**具体的人**用文字说"这是我写的"。\n\n记忆锚：\nKushim（最早留名，很可能是个会计）→ 几百年后 → Enheduanna（第一个署名的作者）\n从"账"到"我"，文字走了几百年。',
          en: 'The scribe\'s story line,, covers this — it\'s the turn where "writing grows from ledger into literature."\n\nKey facts: around 2285 BCE, **Sargon\'s daughter Enheduanna** was appointed **high priestess of the moon god at Ur.** She wrote hymns to the goddess **Inanna** and **signed her own name.** She is **widely regarded as the first author in history whose name we know.**\n(Use "widely regarded as" on the exam — this is a broad but not absolute scholarly statement.)\n\nWhy it\'s easy to remember and answer:\nFor centuries since its birth, writing had been an **anonymous accountant\'s tool** — only numbers and goods on the tablets, no "I."\nOnly with Enheduanna did a **specific person** first use writing to say "I wrote this."\n\nMemory anchor:\nKushim (earliest name, very likely an accountant) → centuries later → Enheduanna (first signed author)\nFrom "the account" to "I," writing took centuries.',
        },
      },
    },

    {
      id: 'ziggurat-not-tomb',
      termCn: 'Ziggurat 神庙塔（不是坟墓）',
      termEn: 'Ziggurat (NOT a Tomb)',
      defCn: 'Ziggurat（神庙塔）是苏美尔城市里阶梯状的神庙基座，一层层往上收，顶上是献给城市守护神的神殿，是城市的宗教和经济中心。它不是坟墓——坟墓是埃及金字塔（pyramid）。',
      defEn: 'A ziggurat is a stepped temple platform in a Sumerian city — terraces that narrow as they rise, with a shrine on top for the city\'s patron god. It is the city\'s religious and economic center. It is NOT a tomb — the tomb is the Egyptian pyramid.',
      standardRef: ['CA HSS 6.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'meso-scribe-n1', context: '城中央越垒越高、像人造山一样的神庙塔' },
          { nodeId: 'meso-lugal-n5', context: '城里最高最气派的建筑是 ziggurat，是祭司的地盘' },
        ],
      },
      standaloneText: {
        cn: '**Ziggurat（神庙塔）** 是苏美尔城市最显眼的地标。故事里多次提到城中央那座"越垒越高、像人造山一样"的塔，但没单独展开，这里补一张卡，因为它是 CA HSS 高频考点，**也是最常被答错的一个**。\n\n**它是什么：**\nziggurat 是一座**阶梯状的神庙基座**——一层层往上收的平台，顶上是一座给城市**守护神**的神殿。它是城市的**宗教中心**，也和神庙经济连在一起（神庙 = 仓库 + 银行 + 工厂 + 田产总管）。\n\n**最常考的误解陷阱：**\n误："ziggurat 是坟墓，跟埃及金字塔一样。"\n正：ziggurat **不是坟墓**！它是阶梯状的**神庙平台**，顶上有神殿，是给活人拜神、给神庙办事用的。\n埃及金字塔（pyramid）才是**陵墓**——埋法老的地方。两者长得有点像，用途完全不同，别混。\n\n**记忆口诀：**\nziggurat = "阶梯神庙"（往上爬到神殿）；pyramid = "尖顶坟墓"（埋法老）\n一个给神，一个给死人。',
        en: 'The **ziggurat** is the most visible landmark of a Sumerian city. The stories mention the tower at the city center "built higher and higher like a man-made mountain" several times but never explain it on its own, so here\'s a dedicated card — because it\'s a high-frequency CA HSS point and **one of the most commonly misanswered.**\n\n**What it is:**\nA ziggurat is a **stepped temple platform** — terraces that narrow as they rise, with a shrine on top for the city\'s **patron god.** It is the city\'s **religious center**, tied to the temple economy (temple = storehouse + bank + workshop + landlord).\n\n**The most common misconception trap:**\nMisconception: "A ziggurat is a tomb, like the Egyptian pyramids."\nCorrection: a ziggurat is **NOT a tomb.** It is a stepped **temple platform** with a shrine on top, used by the living to worship and for temple business.\nThe Egyptian **pyramid** is the **tomb** — that\'s where pharaohs were buried. They look somewhat alike but serve completely different purposes. Don\'t mix them up.\n\n**Memory trick:**\nziggurat = "stepped temple" (climb up to the shrine); pyramid = "pointed tomb" (buries a pharaoh)\nOne is for the god, the other for the dead.',
      },
      xiaoweiNote: {
        cn: '老师说每次考两河，几乎都会用 ziggurat 来设这个"坟墓陷阱"。\n我的口诀：**ziggurat = 给神的阶梯塔；pyramid = 给死人的坟。**\n看到"阶梯状""神殿在顶上""宗教中心"就是 ziggurat；看到"陵墓""埋法老"就是埃及金字塔。',
        en: 'Teacher said almost every Mesopotamia test uses the ziggurat to set this "tomb trap."\nMy mnemonic: **ziggurat = a stepped tower for the god; pyramid = a tomb for the dead.**\nSee "stepped," "shrine on top," "religious center" → ziggurat. See "tomb," "buries a pharaoh" → Egyptian pyramid.',
      },
    },

    {
      id: 'temple-economy',
      termCn: '神庙经济',
      termEn: 'The Temple Economy',
      defCn: '神庙经济（temple economy）是早期苏美尔最主导的经济形态。神庙不只是拜神的地方——它同时是仓库、银行、工厂、大地主，管着大片土地、成千的劳工和巨量粮食，是整座城市的运营核心。',
      defEn: 'The temple economy was the most dominant economic form in early Sumer. The temple was not only a place of worship — it was simultaneously a storehouse, a bank, a workshop, and a large landlord. It controlled vast fields, thousands of workers, and enormous amounts of grain, and it was the operational hub of the whole city.',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'meso-scribe-n2', context: '神庙是城里最大的"公司"——仓库+银行+工厂+田产总管，逼出了文字' },
          { nodeId: 'meso-laborer-n5', context: '神庙按天发口粮、记在账本上，只记"发了多少"不记"人是谁"' },
        ],
      },
      standaloneText: {
        cn: '**神庙经济（temple economy）** 是早期苏美尔最主导的经济形态。书吏和劳工两条故事线都靠它撑着，但没单独讲，这里补一张卡。\n\n**它是什么：**\n在苏美尔的城里，**神庙不只是拜神的地方**，它是这座城最大的机构：\n- **仓库**：囤大麦、油、羊毛等\n- **银行**：借出粮食、记录债务\n- **工厂**：作坊里织布、做陶、搓泥砖\n- **田产总管**：管着大片大麦田和成千的劳工\n\n名义上，这一切属于城市的**守护神**；实际上，是祭司和书吏在替神"管家"。\n神庙**发口粮、收贡赋、组织挖渠灌溉**——它是把整座城组织起来的中枢。\n\n**为什么重要（接两条主线）：**\n① 正是神庙要管成千劳工、海量大麦，**逼出了文字**（记账需求 → 楔形文字诞生）\n② 也正是神庙的账本，把底层劳工变成了"配额表上的一个数字"\n\n**一个学界提醒（别讲死）：**\n早期有学者认为神庙几乎"拥有一切"，但后来研究发现私人土地、王室经济也很重要。\n稳妥说法是"神庙是早期最主导的机构**之一**"，别写成"神庙拥有一切"。',
        en: 'The **temple economy** was the most dominant economic form in early Sumer. Both the scribe\'s and the laborer\'s story lines lean on it, but it\'s never explained on its own — so here\'s a dedicated card.\n\n**What it is:**\nIn a Sumerian city, **the temple was not only a place of worship** — it was the city\'s largest institution:\n- **Storehouse**: stockpiling barley, oil, wool, and more\n- **Bank**: lending out grain and recording debts\n- **Workshop**: weaving, pottery, pressing mud bricks\n- **Landlord**: controlling vast barley fields and thousands of workers\n\nIn name, all of this belonged to the city\'s **patron god.** In reality, priests and scribes were "keeping house" for the god.\nThe temple **handed out rations, collected tribute, and organized canal-digging and irrigation** — it was the hub that held the whole city together.\n\n**Why it matters (two connections):**\n① It was the temple\'s need to manage thousands of workers and mountains of barley that **forced writing into being** (accounting need → cuneiform)\n② It was also the temple\'s ledgers that turned laborers at the bottom into "a number on a ration list"\n\n**A scholarly caution (don\'t overstate):**\nEarly historians thought the temple owned almost everything. Later research showed private land and royal economies also mattered a lot.\nThe safe phrasing: "the temple was **one of** the most dominant early institutions" — don\'t write "the temple owned everything."',
      },
      xiaoweiNote: {
        cn: '我一开始以为"神庙"就是个庙。错了——它是城里的仓库 + 银行 + 工厂 + 大地主，四合一。\n记忆锚：**神庙 = 城市的总管（仓库 + 银行 + 工厂 + 田产）**\n最重要的考点连接：神庙要管账 → 逼出了楔形文字。这条因果一定要会说。',
        en: 'At first I thought "temple" just meant a place of worship. Wrong — it was the city\'s storehouse + bank + workshop + big landlord, four in one.\nMemory anchor: **temple = the city\'s manager (storehouse + bank + workshop + land)**\nMost important exam connection: the temple needed to keep accounts → that forced cuneiform into being. Be able to say this causal chain.',
      },
    },

    {
      id: 'salinization',
      termCn: '盐碱化（灌溉的隐患）',
      termEn: 'Salinization (the Hidden Cost of Irrigation)',
      defCn: '盐碱化（salinization）是指干热气候下长期灌溉导致土地越来越咸的过程。渠水蒸发后，水里溶的盐分留在土里，年复一年土越来越咸，庄稼越来越少。这是苏美尔部分城邦衰落的结构性原因之一。',
      defEn: 'Salinization is the process where long-term irrigation in a hot, dry climate makes soil increasingly salty. When canal water evaporates, the salt dissolved in it stays in the soil. Year after year the soil gets saltier and crops yield less. This was one of the structural reasons some Sumerian city-states declined.',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations (environment & decline)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'meso-lugal-n9', context: '让城强大的灌溉，渠水蒸发把盐留在土里，大麦越收越少' },
        ],
      },
      standaloneText: {
        cn: '**盐碱化（salinization）** 是这门课一个高级、也很有"AP 味"的考点：一项让文明崛起的技术，怎么同时埋下衰落的种子。王那条故事线第 9 节点了一下，这里补全。\n\n**机制（一条因果链）：**\n苏美尔在又干又热的地方，几乎不下雨，种地全靠**灌溉**（从河里引水）。\n在这种气候下，渠里的水会**大量蒸发**。\n水蒸发了，水里溶的**盐分却留在土里**。\n年复一年，土壤越来越咸，**大麦越收越少**。\n\n**为什么重要：**\n这是一个漂亮的"反讽"——**让苏美尔强大的灌溉，也在慢慢毁掉它**。\n粮食减产，是后来**一些城邦衰落、人口迁移**的**结构性原因之一**。\n（注意"之一"——别写成单一原因。衰落通常是多因的，AP 奖励不单因论。）\n\n**误解陷阱：**\n误："灌溉只有好处，是纯粹的进步。"\n正：灌溉是生死线，但长期灌溉在干热气候下会导致盐碱化——**技术埋着它自己的隐患**。',
        en: '**Salinization** is an advanced, very "AP-flavored" point in this topic: how a technology that made a civilization rise also planted the seed of its decline. The king\'s story line touches it briefly in — here\'s the full version.\n\n**The mechanism (a causal chain):**\nSumer was in a dry, hot place with almost no rain, so farming depended entirely on **irrigation** (water led in from the river).\nIn that climate, canal water **evaporates heavily.**\nWhen the water evaporates, the **salt dissolved in it stays in the soil.**\nYear after year, the soil grows saltier and **barley yields fall.**\n\n**Why it matters:**\nA neat "irony" — **the irrigation that made Sumer strong was also slowly destroying it.**\nFalling yields were **one of the structural reasons** some city-states later declined and populations moved.\n(Note "one of" — don\'t write it as the single cause. Decline is usually multi-causal, and AP rewards non-single-cause arguments.)\n\n**Misconception trap:**\nMisconception: "Irrigation only had benefits — it was pure progress."\nCorrection: irrigation was a lifeline, but long-term irrigation in a hot, dry climate caused salinization — **the technology carried the seed of its own trouble.**',
      },
      xiaoweiNote: {
        cn: '这条我觉得最像"高分点"——因为它逼你讲"一项技术的两面"。\n记忆链：**灌溉 → 水蒸发 → 盐留在土里 → 土变咸 → 大麦减产 → 部分城邦衰落（之一）**\n老师说 AP 爱用它考"环境与文明衰落"，还能跟今天的环境问题联系（比如过度灌溉、土地退化）。\n答题别忘了"之一"两个字——衰落是多因的。',
        en: 'This one feels like a "high-score point" — because it forces you to tell "the two faces of a technology."\nMemory chain: **irrigation → water evaporates → salt stays in soil → soil turns salty → barley yields fall → some city-states decline (one of the reasons)**\nTeacher said AP likes using this for "environment and the decline of civilization," and you can link it to today\'s environmental problems (over-irrigation, land degradation).\nDon\'t forget "one of" when you write your answer — decline is multi-causal.',
      },
    },

    {
      id: 'writing-invented-independently',
      termCn: '文字至少独立发明三次（两河 vs 中国）',
      termEn: 'Writing Was Invented Independently at Least Three Times (Two Rivers vs China)',
      defCn: '学界普遍认为，文字在世界上至少独立发明了三次：近东（楔形文字）、中国（甲骨文）、中美洲。苏美尔楔形文字和中国甲骨文原理和形态都不同，是各自独立的发明，不是谁抄谁。',
      defEn: 'Scholars generally agree that writing was invented independently at least three times in the world: in the Near East (cuneiform), in China (oracle-bone script), and in Mesoamerica. Sumerian cuneiform and Chinese oracle-bone script differ in principle and form — they are separate, independent inventions, not one copying the other.',
      standardRef: ['CA HSS 6.2', 'AP World History — Foundations (comparison)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['meso-laborer-n9', 'meso-lugal-n9'],
        xiaoweiNote: {
          cn: '劳工那条故事线第 9 节和王那条故事线第 9 节都讲到——这是"同时代的中国"对照段。作为 ABC 学生，我特别想搞清楚。\n\n关键事实（别讲成谁抄谁）：\n当 Uruk 在约前 3500-3100 成为世界第一大城、楔形文字在约前 3350-3200 诞生时，中国的黄河流域**还没有城、没有文字**。\n\n① 中国最早的国家级社会——**二里头（Erlitou）文化**——约前 1900-1500 年才出现。这比 Uruk 晚了约**一千五百年**，常被视为传说中**夏朝**的物质对应。\n② 中国最早**确凿**的文字——商代**甲骨文**——约前 1250 年才出现。\n\n必背关键句：**文字在世界上至少独立发明了三次**（近东、中国、中美洲）。\n苏美尔楔形字和中国甲骨文，**原理、形态都不同，是各自独立的发明，不是谁抄谁。**\n\n两个常考对照：\n① 文字最初用途——苏美尔楔形字 = **记账**（神庙账本）；中国甲骨文 = **占卜**（商王问祖先神灵）\n② 王权从哪来——苏美尔王表说"王权从天降下"；中国后来有"天命"观。\n   两者**各自独立产生**，都在回答"凭什么是你来统治"这个问题。\n\n规则 0 提醒（老师特别强调）：\n"早"和"晚"只是时间，不是高下。别写"两河更先进"或"中国更落后"，也别反过来抬中国。\n两条大河各自回应各自的环境。',
          en: 'The laborer\'s story line and the king\'s story line both cover this in their final node — it\'s the "China at the same time" comparison section. As an ABC student, I especially wanted to get this straight.\n\nKey facts (don\'t say one copied the other):\nWhen Uruk became the world\'s first great city around 3500-3100 BCE and cuneiform was born around 3350-3200 BCE, China\'s Yellow River valley **had no cities and no writing yet.**\n\n① China\'s earliest state-level society — the **Erlitou culture** — appeared only around 1900-1500 BCE. That\'s about **1,500 years** after Uruk, and it\'s often seen as the material counterpart of the legendary **Xia dynasty.**\n② China\'s earliest **certain** writing — the Shang **oracle-bone script** — appeared only around 1250 BCE.\n\nMust-memorize line: **writing was invented independently at least three times in the world** (Near East, China, Mesoamerica). Sumerian cuneiform and Chinese oracle-bone script **differ in principle and form — separate, independent inventions, not one copying the other.**\n\nTwo tested contrasts:\n① First use of writing — Sumerian cuneiform = **accounts** (temple ledgers); Chinese oracle-bone script = **divination** (the Shang king asking ancestors and spirits)\n② Where does kingship come from — the Sumerian King List says "kingship descended from heaven"; China later developed the "Mandate of Heaven." The two **arose independently**, both answering the same question: "by what right is it you who rules?"\n\nRule 0 reminder (teacher stressed this):\n"Early" and "late" are only time, not rank. Don\'t write "the two rivers were more advanced" or "China was more backward" — and don\'t flip it to elevate China either.\nEach river answered its own environment.',
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: '历史课总说苏美尔是"文明的光荣起点"——人类第一座城、第一种文字。可那个名字只在账本上出现一行（"领了多少粮"）的劳工，和写下那块泥板的书吏，活在同一座城，却像两个世界。\n\n一座城的"伟大"，到底该用谁的尺子来量？是用它造出了多了不起的东西（城墙、文字、神庙），还是用它最底层的人过得怎么样？用至少两条具体证据支持你的判断。',
      en: 'History class always calls Sumer "the glorious beginning of civilization" — humanity\'s first city, its first writing. Yet the laborer whose name appears on a ledger as a single line ("received this much grain") and the scribe who wrote that tablet lived in the same city, but as if in two different worlds.\n\nBy whose measure should a city\'s "greatness" be judged? By how remarkable the things it built were (walls, writing, temples), or by how its people at the very bottom lived? Support your judgment with at least two specific pieces of evidence.',
      hintCn: '提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。\n\n"看成就"这边的证据：\n- 世界第一座大城 Uruk（约 4 万人）\n- 人类第一种文字 cuneiform\n- 第一个帝国（Sargon）\n- 六十进制（今天的 1 小时 60 分就来自这里）\n\n"看底层"这边的证据：\n- 85-90% 早期泥板是行政账目\n- 劳工只作为口粮配额上的一个数字进入历史\n- 最早留名的 Kushim 很可能是会计而不是劳动者\n- 墙是劳工垒的，但刻的是王的名字\n\n高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。',
      hintEn: 'Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which side you pick.\n\nEvidence for "by achievements":\n- Uruk, the world\'s first great city (about 40,000 people)\n- Humanity\'s first writing, cuneiform\n- The first empire (Sargon)\n- Base-60 counting (today\'s 60-minute hour comes from here)\n\nEvidence for "by the bottom":\n- 85-90% of early tablets are administrative records\n- Laborers entered history only as a number on a ration list\n- The earliest named figure, Kushim, was very likely an accountant, not a laborer\n- The wall was stacked by laborers but carries the king\'s name\n\nHigh-scoring move: acknowledge both sides stand, then explain why you lean one way — that\'s complexity.',
      conceptsActivated: ['urban-revolution-four-blocks', 'kushim-first-name', 'writing-was-for-accounts'],
    },
    {
      id: 'q2',
      cn: '人类发明文字，最初不是为了写诗或记住英雄，而是为了记清楚"谁欠神庙多少大麦"——已知最早泥板里 85-90% 是账目，最早留名的 Kushim 很可能是个会计。\n\n如果你是 AP 老师，要出一道题考"文字到底是为谁服务的"，你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。',
      en: 'Humans invented writing not to write poems or remember heroes, but to keep track of "who owed the temple how much barley" — 85-90% of the earliest tablets are accounts, and the earliest named figure, Kushim, was very likely an accountant.\n\nIf you were an AP teacher writing a question on "whom did writing actually serve," how would you phrase it? Write your question and explain what it\'s meant to make students see.',
      hintCn: '提示：好的题通常会逼学生**同时看见两件事**，而不是二选一。\n\n你可以让学生比较"文字的两种用途"：\n- **最初**的用途：神庙记账、替王权写"天授"，都是为管理和权力服务\n- **后来**的用途：Enheduanna 署名写诗、Gilgamesh 史诗写人对死亡的恐惧，开始承载人心\n\n关键的逼问：为什么是"先有账本、几百年后才有史诗"这个顺序？这个顺序说明了什么？\n\nAP 看的是你能不能让学生用具体证据，去论证一个反直觉的观点。',
      hintEn: 'Hint: a good question forces students to **see two things at once**, not just pick one.\n\nYou can have students compare "two uses of writing":\n- Its **original** use: temple accounting, writing "heaven-given" for kingship — both serving management and power\n- Its **later** use: Enheduanna signing her poems, the Epic of Gilgamesh on the fear of death — beginning to carry the human heart\n\nThe key push: why the order "ledger first, epic only centuries later"? What does that order reveal?\n\nAP wants to see whether you can have students use concrete evidence to argue a counter-intuitive claim.',
      conceptsActivated: ['writing-was-for-accounts', 'enheduanna-first-author', 'kushim-first-name'],
    },
    {
      id: 'q3',
      cn: '让苏美尔强大的灌溉，也在用盐碱化一点点毁掉它的土地——一项技术，既是一个文明崛起的原因，又埋着它衰落的种子。\n\n你同意"任何一项让生活变好的强大技术，都同时埋着我们当时看不见的代价"这个说法吗？这是对技术的清醒，还是过度悲观？用苏美尔的盐碱化（或你能想到的今天的一个例子）来支持你的看法。',
      en: 'The irrigation that made Sumer strong was also slowly destroying its land through salinization — a technology that is both the cause of a civilization\'s rise AND the seed of its decline.\n\nDo you agree with the idea that "any powerful technology that improves life also carries a cost we can\'t see at the time"? Is this clear-eyed about technology, or overly pessimistic? Support your view with Sumerian salinization (or one example you can think of from today).',
      hintCn: '提示：先把盐碱化这条因果链讲顺——\n**灌溉 → 水蒸发 → 盐留在土里 → 土变咸 → 大麦减产 → 部分城邦衰落（之一）**\n\n注意"之一"：衰落通常是多因的，别写成单一原因（AP 奖励不单因论）。\n\n进阶思考：今天有没有类似的"双刃技术"？\n（比如：能让产量暴增、却让土地退化的农业方式；很方便、却带来某种长期代价的技术。）\n\n高分写法：不站极端的"技术全是好/全是坏"，而是论证"技术的代价往往是延迟出现、当时看不见的"——这正是 AP 要的、能区分"短期好处"和"长期结构性后果"的思维。',
      hintEn: 'Hint: first get the salinization causal chain straight —\n**irrigation → water evaporates → salt stays in soil → soil turns salty → barley yields fall → some city-states decline (one of the reasons)**\n\nNote "one of": decline is usually multi-causal; don\'t write it as the single cause (AP rewards non-single-cause arguments).\n\nGoing deeper: is there a similar "double-edged technology" today? (E.g., farming methods that spike yields but degrade the land; technologies that are convenient but carry some long-term cost.)\n\nHigh-scoring move: don\'t take the extreme "technology is all good / all bad," but argue that "a technology\'s cost often appears with delay, invisible at the time" — exactly the AP-level thinking that distinguishes "short-term benefit" from "long-term structural consequence."',
      conceptsActivated: ['salinization', 'urban-revolution-four-blocks'],
    },
  ],
};

export default notebook;
