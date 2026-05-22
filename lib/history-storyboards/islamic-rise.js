// ─── Islamic Rise 622-1258 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 伊斯兰文明兴起 · Islamic Rise 622-1258
// HSS-7.2 · AP World 2.1 (post-classical Islamic world)
//
// 3 lens 设计 (per Sarah Chen audit + 王老师 curriculum sequence):
//   - al-mamun         (perpetrator-actor / nation-builder-via-knowledge) — 786-833 第七任哈里发
//   - al-khwarizmi     (lonely-mediator / cross-civilization-translator) — 780-850 数学家
//   - fatima-al-fihri  (receiving-end / female-knowledge-carrier) — 800-880 al-Qarawiyyin 大学创办者
//
// 跨 lens micro-detail (per Sarah audit revised, 825 单时刻不是 445 年广义):
//   825 al-Khwarizmi 在 Bait al-Hikma 写《Kitab al-Jabr》:
//   - al-Mamun N6: 资助者 — 高薪 + 翻译指令 + Mihna 时期未受波及
//   - al-Khwarizmi N5: 写者 — 数学家 + 印度数字 + algebra 字源
//   - Fatima al-Fihri N6: 跨 50 年后裔 — 859 Fez al-Qarawiyyin 教学用 al-Khwarizmi 传统
//
// 5 Topic information preservation 五面体 (Islamic Rise 第 6 边):
//   Renaissance 印刷 / Reformation 95 Theses / AoE 1493 信 / Mali al-Sa'di 沙漠藏书 /
//   Tang-Song 1126 翰林图画院反例 / Islamic Rise: Bait al-Hikma 翻译运动 (9-10c)
//   + 1258 Hulagu 屠 Baghdad 大部毁但部分提前转 Cairo + Damascus + Cordoba 保存
//
// defaultLens = 'fatima-al-fihri' (per Sarah audit + 7thgrader pattern:
//   女性 + 同龄 anchor + cross-lens info preservation closing)
//
// 4-agent review (5-7+ TBD)
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N11+N12 only true)
//
// 来源 staging (5-7+ lens-author):
//   - islamic-rise-al-mamun.staging.js        (12 nodes / 420-543 CN chars / N6 cross-lens / 0 violations)
//   - islamic-rise-al-khwarizmi.staging.js    (12 nodes / 537-743 main / lint PASS)
//   - islamic-rise-fatima-al-fihri.staging.js (12 nodes / 422-632 / N8 source-gap careful framing)

// ─── Islamic Rise · LENS 1: Caliph al-Mamun (perpetrator-actor) ───────
//
// Topic: Islamic Rise 622-1258 · 伊斯兰黄金时代
// HSS-7.2 · AP World 1.2 / 2.1 (Dar al-Islam intellectual networks)
//
// Lens 1 设计 (per Sarah Chen audit revised — al-Mamun over al-Mansur):
//   - id: 'al-mamun'
//   - role: 'perpetrator-actor'
//   - perspectiveTag: 'nation-builder-via-knowledge'
//
// 不是「黄金时代英雄」也不是「原教旨退化原因」——是极致 cosmopolitan 帝国
// + 强制信仰 (Mihna 异端审讯) 同体的复杂角色。813-833 第七任 caliph，
// 通过 Bait al-Hikma 扩张 + Mu'tazilite 理性主义国教化 + 翻译运动建国。
//
// 跨 lens micro-detail (per Sarah audit revised):
//   825 al-Khwarizmi 写《Kitab al-Jabr》在 Bait al-Hikma — 3 lens cross-detail:
//   - Lens 1 (al-Mamun) N6: 资助者 — 高薪 + 翻译指令 + Mihna 时期未受波及
//   - Lens 2 (al-Khwarizmi) N?: 写者本人 — 数学家 + 印度数字 + algebra 字源
//   - Lens 3 (Fatima al-Fihri) N?: 跨 50 年后裔受影响 — 859 Fez 建大学时
//     用 al-Khwarizmi 数学传统
//
// 严格规则 (per AoE / Mali / Tang-Song 教训):
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..." (EN), 严禁 «...»
//   - em-dash 「——」 ≤ 3 per 段
//   - 每 node 350-550 CN chars (强控)
//   - anti-fab: 翻译运动 / Bait al-Hikma / Mihna 异端审讯 / Ahmad ibn Hanbal /
//     地球周长 40,250 km vs 今值 40,075 km 误差 0.4% / Hunayn ibn Ishaq 高薪制
//     不是「按译稿等重黄金」(19c Orientalist 浪漫化, Gutas 1998 否定)
//   - expectsRealAnswer 默认 false, 只 N11+N12 设 true (per 第 12 条铁律)

export var alMamunLens = {
  id: 'al-mamun',
  name: 'Caliph al-Mamun',
  nameCn: '马蒙 (阿巴斯王朝第七任哈里发)',
  role: 'perpetrator-actor',
  perspectiveTag: 'nation-builder-via-knowledge',
  description: {
    en: 'You are Abu al-Abbas Abdallah al-Mamun (786-833), seventh Abbasid caliph. From 813 to 833 you ran the most ambitious state-funded knowledge project of the pre-modern world — expanding Bait al-Hikma (House of Wisdom) into a translation, astronomy, and cartography institution; commissioning the measurement of the Earth\'s circumference; bringing Greek, Persian, Indian, and Syriac texts into Arabic. You were not a "golden-age hero" — you also ran the Mihna inquisition, forcing scholars to accept Mu\'tazilite doctrine and having Ahmad ibn Hanbal flogged. Cosmopolitan empire and coerced belief lived inside the same ruler.',
    cn: '你是 Abu al-Abbas Abdallah al-Mamun（马蒙，786-833）——阿巴斯王朝第七任 caliph（哈里发）。813-833 在位 20 年，你做了前现代世界最有 ambition 的国家级知识工程——把 Bait al-Hikma（智慧馆）扩成翻译 + 天文 + 测绘综合机构；派人测地球周长；把希腊、波斯、印度、叙利亚文献译成阿拉伯文。但你不是「黄金时代英雄」——你也搞 Mihna（异端审讯），强迫学者接受 Mu\'tazilite（穆尔太齐勒派）教义，把 Ahmad ibn Hanbal 鞭打。极致 cosmopolitan 帝国 + 强制信仰——在同一个统治者身上同时存在。',
  },
  storyboard: [
    {
      id: 'mamun-n1',
      type: 'narrative',
      content: {
        cn: '786 年我出生在 Baghdad。\n\n我父亲是 Harun al-Rashid——你可能听过他的名字——《一千零一夜》（One Thousand and One Nights）里那位夜里微服私访 Baghdad 的传奇 caliph (哈里发——伊斯兰帝国最高统治者)，故事原型就是他。\n\n但我母亲不是阿拉伯人。她叫 Marajil——一位波斯出身的妾。我同父异母的兄长 al-Amin 比我小 6 个月——他母亲 Zubayda 是阿拉伯贵族 + Harun 正妻，血统纯阿拉伯。\n\n这一点 21 世纪的你可能觉得无所谓——但在 8 世纪末的 Abbasid 宫廷，「阿拉伯母 vs 波斯母」是一道真正的政治断层线。\n\n少年时我跟兄长 al-Amin 同受教育——Quran (伊斯兰圣典) 经学、阿拉伯文学、希腊哲学（已译进阿拉伯文的部分）。但宫廷内的人都看得出来——我对波斯文化、希腊理性传统更亲近；al-Amin 更靠阿拉伯诗歌 + 部落传统。\n\n两兄弟血统的差——是后来内战的根。',
        en: 'I was born in 786 in Baghdad.\n\nMy father was Harun al-Rashid — you may have heard the name. The legendary caliph (the Islamic empire\'s supreme ruler) who walks through Baghdad in disguise at night in One Thousand and One Nights — that is him.\n\nBut my mother was not Arab. Her name was Marajil — a Persian concubine. My half-brother al-Amin was born six months after me — his mother Zubayda was Arab nobility and Harun\'s legal wife, pure Arab lineage.\n\nIn your 21st century this may seem trivial — but in the late-8th-century Abbasid court, "Arab mother vs Persian mother" was a real political fault line.\n\nAs boys al-Amin and I shared the same tutors — Quranic studies (study of Islam\'s holy book), Arabic literature, Greek philosophy (the parts already translated into Arabic). But everyone at court could see it: I leaned toward Persian culture and the Greek rational tradition; al-Amin leaned toward Arab poetry and tribal custom.\n\nThe difference in our maternal blood — was the root of the civil war that came later.',
      },
      deliverGoal: 'N1 hook — 786 出生 / 父 Harun al-Rashid 一千零一夜原型 / 母 Persian 妾 / 兄弟血统差是后来内战根 / 4 Topic visual-anchor 锚 (一千零一夜)',
      engagementHook: '你家里如果两个孩子背景差很大——同父不同母——他们成年后会争吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n2',
      type: 'narrative',
      content: {
        cn: '802 年我 16 岁——父亲 Harun al-Rashid 在 Mecca 朝圣时做了一件事：他立兄长 al-Amin 为第一继承人，立我为第二继承人。\n\n但他没把我闲置——他把帝国东半给我治理。\n\n东半是什么？Khurasan（呼罗珊，今伊朗东北部 + 中亚 + 阿富汗北部）——加 Merv（今土库曼斯坦马雷）作我的总督府。这是 Abbasid 王朝的「波斯心脏」——Sassanid 帝国 800 年的旧地——人口、税源、军事重要性丝毫不亚于 Baghdad。\n\n父亲为什么这么分？\n\n一种解释：兼顾两个母系的政治势力——al-Amin 拿阿拉伯传统中心 Baghdad，我拿波斯东半。\n\n另一种解释：父亲已经预感兄弟会争——给我一个根据地。\n\n我在 Merv 的 7 年（802-809）——学习行政、军事、税收，结识波斯出身的官僚集团。我身边最重要的顾问是 al-Fadl ibn Sahl——一位刚改宗 Islam 的波斯贵族，后来主导我把 Mu\'tazilite 引为国家神学。',
        en: 'In 802 I was 16. My father Harun al-Rashid, during his pilgrimage to Mecca, did one thing: he named al-Amin first heir, and me second heir.\n\nBut he did not sideline me — he handed me the eastern half of the empire to govern.\n\nThe eastern half: Khurasan (today\'s northeast Iran + Central Asia + northern Afghanistan) — with Merv (today\'s Mary, Turkmenistan) as my governor\'s seat. This was the "Persian heart" of the Abbasid world — 800 years of former Sassanid territory — its population, tax base, and military weight rivaled Baghdad.\n\nWhy did my father split it that way?\n\nOne reading: balance the two maternal-political factions — al-Amin held Arab-traditional Baghdad, I held the Persian east.\n\nAnother reading: my father already sensed the brothers would clash — and wanted me to have a base.\n\nMy seven years in Merv (802-809) — administration, military, taxation, and cultivating the Persian bureaucratic class. My most important adviser was al-Fadl ibn Sahl — a Persian noble who had recently converted to Islam, and the man who later pushed me to adopt Mu\'tazilite as state theology.',
      },
      deliverGoal: 'N2 父分兄弟 — 802 立兄为第一继承 / 自己为副 + 拿东波斯部分 / Merv 总督 / al-Fadl ibn Sahl 影响',
      engagementHook: '父亲把帝国分两半给两个儿子——你觉得这是公平还是埋雷？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n3',
      type: 'narrative',
      content: {
        cn: '809 年父亲 Harun al-Rashid 死。al-Amin 在 Baghdad 即位 caliph——我留 Merv 任副。\n\n810 年 al-Amin 做了一件让我没法退的事——他把自己的儿子立为继承人，把我从继承顺位删掉。\n\n这违反了父亲 802 年立的契约。\n\n811 年我宣布拒认 al-Amin 是合法 caliph。813 年 4 月我自 Khurasan 起兵，4 年内战开始——史称 Civil War of the Four Caliphates（虽然实际只两兄弟，但叙利亚 + Egypt 各有地方 caliph 自立——总数 4）。\n\n我的将军 Tahir ibn Husayn 率波斯军 8 月底合围 Baghdad。\n\n813 年 9 月 25 日 Baghdad 城破——我兄长 al-Amin 想从底格里斯河乘船逃，被士兵抓住——当夜处决。\n\n我赢了。27 岁我成 caliph。\n\n但这场内战毁了 Baghdad 大半街区——围城期间 Tahir 用投石机打城墙，民居烧了一片又一片。我赢的是一座半残的首都。',
        en: '809 my father Harun al-Rashid died. al-Amin took the throne in Baghdad — I remained in Merv as second.\n\n810 al-Amin did the thing I could not retreat from — he named his own son as heir, removing me from the line of succession.\n\nThis violated the contract our father set in 802.\n\n811 I publicly refused to recognize al-Amin as legitimate caliph. April 813 I marched out of Khurasan, and the four-year civil war began — historians call it the Civil War of the Four Caliphates (though really it was two brothers, with regional caliphs self-declaring in Syria and Egypt, totaling four).\n\nMy general Tahir ibn Husayn led the Persian army and closed the siege of Baghdad in late August.\n\nSeptember 25, 813, Baghdad fell — my brother al-Amin tried to flee by boat down the Tigris, was caught by soldiers, and executed that night.\n\nI won. At 27 I was caliph.\n\nBut the civil war destroyed half of Baghdad\'s neighborhoods — the siege engines burned residential blocks one after another. What I won was a half-ruined capital.',
      },
      deliverGoal: 'N3 兄弟内战 — 809 父死 / 810 兄破契约 / 811-813 4 年内战 / 813.9.25 Baghdad 围城 / al-Amin 死 / 27 岁即位',
      engagementHook: '为帝位杀亲兄长——你觉得我有别的路可走吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n4',
      type: 'narrative',
      content: {
        cn: '813-819 我做了一件让 Baghdad 阿拉伯老贵族瞠目的事——我没回 Baghdad。\n\n我留在 Merv 6 年。\n\n这 6 年我的首席大臣 al-Fadl ibn Sahl（波斯人）实际管帝国——Baghdad 在他手下变得边缘化，Merv 成了真正的政治中心。Baghdad 的阿拉伯部落老贵族对我恨意越来越深——他们觉得我是「波斯化的 caliph」，背叛了 Abbasid 阿拉伯根源。\n\n这 6 年我还在做另一件更安静、影响更深的事——我开始系统支持一支被称作「理性主义派」的伊斯兰神学新流派。它的核心立场之一是「caliph 有权仲裁神学」——这给我一个在宗教权威上盖过 ulama（宗教学者集团）的法理工具。\n\n至于这派叫什么、它三条具体主张是什么、我后来怎么用它发动 Mihna 异端审讯——14 年后那一节（N8）我会跟你完整摊开。\n\n这一刻你只需要记住一点：我留 Merv 6 年同时做了两件事——把帝国行政中心从阿拉伯移向波斯 + 给自己手里加一根「裁神学」的杠杆。\n\n两件事合起来——是 14 年后那场 inquisition 的引信。',
        en: '813-819 I did something that stunned the old Arab nobility in Baghdad — I did not return to Baghdad.\n\nI stayed in Merv for six years.\n\nIn those six years my chief minister al-Fadl ibn Sahl (the Persian) effectively ran the empire — Baghdad shrank into the periphery under him, and Merv became the real political center. The Arab tribal nobility in Baghdad came to hate me more and more — they saw me as a "Persianized caliph" who had betrayed the Arab roots of the Abbasids.\n\nIn those same six years I quietly began something with a longer fuse — I started backing a rationalist current in Islamic theology. One of its core positions: "the caliph has the authority to arbitrate theological questions." That gave me a legal tool to override the ulama (the scholarly clergy class) on religious authority.\n\nThe specific name of that school, its three core doctrines, and how I later used it to launch an inquisition — I will lay out fully fourteen years from now (N8).\n\nFor this moment, hold one thing: in those six years at Merv I did two things at once — moved the empire\'s administrative center from Arab toward Persian, and put a "theology-arbitration" lever in my own hand.\n\nTaken together — these were the fuse of the inquisition that came fourteen years later.',
      },
      deliverGoal: 'N4 留 Merv 6 年 / al-Fadl ibn Sahl 影响 / 静悄悄支持「理性主义派」+「caliph 仲裁神学」杠杆 (派名 + 三条具体主张 deferred 到 N8 与 Mihna 同段揭) / 两件事合起来 = 14 年后 inquisition 引信',
      engagementHook: '我留 Merv 同时移帝国中心 + 给自己加一根「裁神学」的杠杆——你觉得这种「悄悄铺路」14 年后会爆什么样的雷？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n5',
      type: 'narrative',
      content: {
        cn: '819 年我终于回 Baghdad。33 岁。\n\n回来第一件大事——扩 Bait al-Hikma（智慧馆，House of Wisdom）。\n\nBait al-Hikma 不是我建的。前身两条线：Sassanid 王室图书馆传统（波斯 6 世纪起的 royal-library 体制）+ 父亲 Harun al-Rashid 786-809 年间初设的小翻译机构。\n\n我把它扩成综合性国家研究院，4 个部门：翻译部（希腊、波斯、印度、叙利亚文献译成阿拉伯文）、抄写部（量产副本）、天文台（观测 + 编历）、测绘部（地图 + 大地测量）。\n\n经费走 caliph 私库，不走国库——意味着不需要 ulama 或财政官员批。\n\n我直接资助翻译家。最重要的是 Hunayn ibn Ishaq（809-873）——一位 Nestorian 基督徒（叙利亚出身），主持希腊医学翻译团队（含他儿子 Ishaq 和外甥 Hubaysh），每月领固定高薪，配抄写员。\n\n澄清：「按译稿等重黄金付酬」是 19 世纪欧洲东方学（Orientalist）浪漫化叙述。现代学界 Gutas 1998《Greek Thought, Arabic Culture》基本否定——实际是制度化的高薪职业。',
        en: '819 I finally returned to Baghdad. I was 33.\n\nFirst major act on returning — expand Bait al-Hikma (House of Wisdom).\n\nI did not found Bait al-Hikma. Two lineages predate it: 1. The Sassanid royal-library tradition (Persia had had royal libraries since the 6th century); 2. My father Harun al-Rashid had set up a small translation workshop sometime between 786 and 809.\n\nWhat I did was expand it into a comprehensive state research institution with four departments:\n\n1. Translation: Greek, Persian, Indian, Syriac texts into Arabic;\n2. Copying: mass production of manuscripts;\n3. Observatory: astronomical observation and calendar work;\n4. Cartography: maps and geodetic survey.\n\nFunding flowed from the caliph\'s private treasury — not the state treasury — meaning no ulama or fiscal-officer approval was required.\n\nI personally sponsored individual translators. The most important was Hunayn ibn Ishaq (809-873) — a Nestorian Christian from Syria — who led the Greek-medical translation team (including his son Ishaq and nephew Hubaysh). He drew a fixed monthly high salary with copyists assigned to him.\n\nA correction: "paid in gold equal to the weight of the manuscript" is a 19th-century European Orientalist fantasy. Modern scholarship — Gutas 1998, Greek Thought, Arabic Culture — has essentially refuted it. The reality was institutionalized high-salary employment, not spectacle pay.',
      },
      deliverGoal: 'N5 819 入 Baghdad / Bait al-Hikma 扩 4 部门 / Hunayn ibn Ishaq 高薪制 / 反 Orientalist 浪漫化 (cross-lens N5)',
      engagementHook: '我建国家级研究院走 caliph 私库——不走国库——这跟 21 世纪比尔盖茨基金会模式像吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n6',
      type: 'narrative',
      content: {
        cn: '825 年——Bait al-Hikma 里出了一本书。\n\n作者 al-Khwarizmi（约 780-850）波斯出身，可能生于 Khwarazm 地区（今乌兹别克斯坦花剌子模一带），后入 Baghdad。我让他主管 Bait al-Hikma 的天文与数学部分。\n\n那本书叫《Kitab al-Jabr》(《代数与平衡运算简明书》)。「al-Jabr」就是 algebra（代数）字源。书里系统讨论一次和二次方程标准解法，引入「移项」「合并同类项」概念，是世界数学史上第一部独立代数著作。\n\n约 830 年他又写《印度数学之书》，首次把印度十进制位值数字（含 0 的位值概念）引入阿拉伯学术圈。这书 12 世纪传入欧洲，拉丁标题《Algoritmi de numero Indorum》——「Algoritmi」是他名字的拉丁化，algorithm（算法）字源。\n\n你注意——al-Khwarizmi 不是孤独天才。他是 Bait al-Hikma 制度产物：固定高薪 + 专业团队 + 跨文明文献库 + caliph 直接资助。\n\n21 世纪你听过的「印度数字 → 阿拉伯数字 → 欧洲数字」三步——第二步是 825 年在 Baghdad 我桌子上完成的。',
        en: 'In 825 — a book came out of Bait al-Hikma.\n\nThe author was al-Khwarizmi (~780-850) — Persian, probably born in the Khwarazm region (modern-day Khwarezm in Uzbekistan), later moved to Baghdad. I had placed him in charge of the astronomy and mathematics section of Bait al-Hikma.\n\nThe book was Kitab al-Mukhtasar fi Hisab al-Jabr wa-l-Muqabala (The Compendious Book on Calculation by Completion and Balancing) — "al-Jabr" is the etymological root of the word algebra.\n\nIn it he systematically treated standard solutions of linear and quadratic equations, introducing concepts like transposition and combining like terms — the world\'s first standalone algebra treatise.\n\nAround 830 he wrote Kitab al-Hisab al-Hindi (The Book of Indian Calculation) — the first systematic introduction of the Indian decimal place-value numeral system (including positional zero) into Arabic scholarship. The Latin translation reached Europe in the 12th century as Algoritmi de numero Indorum — "Algoritmi" being the Latinization of his name, and the etymological root of algorithm.\n\nNotice this — al-Khwarizmi was not a lone-genius archetype. He was a product of the Bait al-Hikma system: fixed high salary, specialist team, cross-civilizational text library, caliph as direct sponsor.\n\nThe three-step chain you may have heard — "Indian numerals → Arabic numerals → European numerals" — step two was completed in 825 on my desk in Baghdad.',
      },
      deliverGoal: 'N6 cross-lens micro-detail — 825 al-Khwarizmi 写 Kitab al-Jabr / al-Mamun 资助者视角 / algebra + algorithm 字源 / Bait al-Hikma 制度产物 (lone-genius myth 修正)',
      engagementHook: '21 世纪你用的数字 1 2 3 4 5——从印度经我桌子在 825 年 Baghdad 走过——这个传播链你之前知道吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n7',
      type: 'narrative',
      content: {
        cn: '827 年——我做了一件极致 ambitious 的事。\n\n我派 al-Khwarizmi + Habash al-Hasib（另一位 Bait al-Hikma 天文学家）+ 一个测量队——去 Mesopotamia 北部 Sinjar 平原的沙漠——测地球周长。\n\n方法：在沙漠选两个点，南北方向相距约 1 度纬度（即在天空中北极星高度差 1 度）。地面距离用两组人同时步测——一组向北走，一组向南走，直到双方独立测出北极星高度差恰好 1 度——记下走过的阿拉伯英里数。\n\n两组得出的结果取平均：1 度纬度 ≈ 56.6 阿拉伯英里。\n\n推算：地球周长 = 360 × 56.6 ≈ 20,400 阿拉伯英里 ≈ 40,250 公里。\n\n现代值：40,075 公里。\n\n误差：0.4%。\n\n827 年——9 世纪 Baghdad，没有 GPS，没有卫星，没有现代天文仪器。拿步测和北极星——把地球周长测到误差 0.4%。\n\n这不是孤立成就。这是 Bait al-Hikma 体制——希腊几何（Eratosthenes 公元前 240 年也测过）+ 印度三角法 + 波斯天文表——三个文明的工具同时摆在一张桌子上的结果。',
        en: '827 — I did something extremely ambitious.\n\nI dispatched al-Khwarizmi + Habash al-Hasib (another Bait al-Hikma astronomer) + a survey team to the Sinjar plain desert in northern Mesopotamia — to measure the Earth\'s circumference.\n\nMethod: pick two points in the desert separated north-to-south by approximately 1 degree of latitude (i.e., 1 degree of difference in Polaris\' altitude). The ground distance was paced by two teams simultaneously — one walking north, one walking south, until each independently measured a Polaris altitude difference of exactly 1 degree — counting Arabic miles traveled.\n\nThe two teams\' results were averaged: 1 degree of latitude ≈ 56.6 Arabic miles.\n\nDerivation: Earth\'s circumference = 360 × 56.6 ≈ 20,400 Arabic miles ≈ 40,250 km.\n\nModern value: 40,075 km.\n\nError: 0.4%.\n\n827 — 9th-century Baghdad. No GPS, no satellite, no modern instruments. Pacing and Polaris — and the Earth\'s circumference measured to within 0.4%.\n\nThis was not an isolated feat. It was the Bait al-Hikma system at work — Greek geometry (Eratosthenes had measured it around 240 BCE), Indian trigonometry, Persian astronomical tables — three civilizations\' tools sitting on the same desk at once.',
      },
      deliverGoal: 'N7 827 测地球周长 / Sinjar 平原 / 1 度纬度 = 56.6 阿拉伯英里 / 推算 40,250 km / 现代值 40,075 km / 误差 0.4% / 三文明工具同桌',
      engagementHook: '827 年没有任何现代仪器——把地球周长测到 0.4% 误差——你觉得这件事的难度跟今天 SpaceX 登月比，哪个更难？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n8',
      type: 'narrative',
      content: {
        cn: '833 年——我做了一件让我后世名声翻面的事。\n\n我下令开始 Mihna（异端审讯，inquisition）。命令：所有 ulama、qadi（伊斯兰法官）、出庭证人，必须公开签字承认 Mu\'tazilite 教义「Quran 是受造的」（the Quran is created）。拒签者下狱、夺职、鞭打。\n\n最有名的拒签者是 Ahmad ibn Hanbal（780-855）——Baghdad 最受敬重的 hadith 学者，后来 Hanbali 法学派开创者。我的人抓他下牢鞭打，他没签。同年 8 月我死后他出狱，成了 Sunni 抵抗 Mihna 的英雄。\n\nMihna 持续了我儿子 al-Mu\'tasim、孙 al-Wathiq 两代，一直到 al-Mutawakkil 847 年废止。前后 14 年（833-847）。\n\n你看出来矛盾没——同一个我，827 年派学者测地球周长 + 给 Hunayn ibn Ishaq 高薪翻译希腊医学；833 年命令鞭打不肯签字的学者。\n\n这不是「先开明后专制」的两阶段——这是同一年同一个人。极致 cosmopolitan 帝国知识赞助 + 强制信仰，共生于一具身体。\n\n反 Whig 钢筋：「黄金时代」不等于「自由开放」。',
        en: '833 — I did the thing that flipped my reputation in posterity.\n\nI ordered the start of the Mihna (inquisition).\n\nThe order: all ulama, qadis (Islamic judges), and court witnesses must publicly sign assent to the Mu\'tazilite doctrine that "the Quran is created."\n\nThose who refused — were jailed, stripped of office, flogged.\n\nThe most famous refuser was Ahmad ibn Hanbal (780-855) — Baghdad\'s most respected hadith scholar, later founder of the Hanbali school of law. My men took him to prison and flogged him — he did not sign. Later I died (the same year, August 833), he was released, and he became the Sunni hero of resistance against the Mihna.\n\nThe Mihna outlasted me through my son al-Mu\'tasim and grandson al-Wathiq — until al-Mutawakkil ended it in 847. Fourteen years total (833-847).\n\nDo you see the contradiction —\n\nSame me — in 827 sending scholars to measure the Earth\'s circumference, paying Hunayn ibn Ishaq a high salary to translate Greek medicine; in 833 ordering the flogging of scholars who would not sign.\n\nThis is not a two-phase "liberal then authoritarian" arc — it is the same year, the same man. Cosmopolitan imperial knowledge-patronage + coerced belief — co-resident in one body.\n\nAnti-Whig rebar: "Golden Age" does not mean "liberal and open."',
      },
      deliverGoal: 'N8 833 Mihna 异端审讯 / Mu\'tazilite「Quran 受造」强制 / Ahmad ibn Hanbal 拒签被鞭打 / 反 Whig 钢筋 (cosmopolitan + 强制信仰同体)',
      engagementHook: '同一个我 6 年里既资助希腊医学翻译又鞭打不签字的学者——这两件事在你看是矛盾的，还是同一种逻辑？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n9',
      type: 'narrative',
      content: {
        cn: '833 年 8 月——我在征拜占庭的边境路上死了。47 岁。\n\n死因：发烧。可能是疟疾，可能是饮水中毒。\n\n我没看到 Mihna 的后续——没看到我亲弟 al-Mu\'tasim 接位（833-842）继续 Mihna，也没看到孙子 al-Wathiq（842-847），更没看到 847 年 al-Mutawakkil 反转——废 Mihna，转向反 Mu\'tazilite，把 Ahmad ibn Hanbal 这一系 Sunni 传统主义抬起来。\n\nMihna 14 年——结果是它催生了它要打压的那个东西：\n\n1. Ahmad ibn Hanbal 因为拒签，地位升到圣徒级别，他创立的 Hanbali 法学派成了后世 Sunni 四大法学派之一；\n2. 后世 Sunni 主流——因为反弹 Mihna——转向更保守、更看 hadith、更不信任 caliph 干预神学的方向；\n3. Mu\'tazilite 理性主义——9 世纪后逐步边缘化，到 13 世纪基本消失。\n\n21 世纪 Sunni 世界主流神学——是 Ahmad ibn Hanbal 那一系的继承——不是我的。\n\n我用国家强制推「理性主义」——结果让理性主义在伊斯兰主流里输了。\n\n这是历史给我的反讽。',
        en: 'August 833 — I died on the road campaigning at the Byzantine border. Age 47.\n\nCause: fever. Possibly malaria, possibly contaminated water.\n\nI did not see what came after the Mihna — did not see my full brother al-Mu\'tasim succeed me (833-842) and continue it, did not see my grandson al-Wathiq (842-847), and certainly did not see al-Mutawakkil\'s reversal in 847 — abolishing the Mihna, turning anti-Mu\'tazilite, elevating Ahmad ibn Hanbal\'s Sunni traditionalist line.\n\nThe Mihna lasted 14 years — and produced exactly the thing it was meant to suppress:\n\n1. Ahmad ibn Hanbal, because he refused to sign, rose to near-sainthood; the Hanbali school he founded became one of the four canonical Sunni schools of law;\n2. Mainstream Sunni Islam — reacting against the Mihna — drifted toward stricter traditionalism, heavier reliance on hadith, deeper distrust of caliphal interference in theology;\n3. Mu\'tazilite rationalism — increasingly marginalized after the 9th century, essentially gone by the 13th.\n\nMainstream Sunni theology in the 21st century — descends from the Ahmad ibn Hanbal line, not from mine.\n\nI used state coercion to push rationalism — and made rationalism lose inside mainstream Islam.\n\nHistory\'s irony, served back to me.',
      },
      deliverGoal: 'N9 833.8 死于拜占庭边境 / 弟 al-Mu\'tasim 继 / Mihna 14 年至 847 / 强制信仰反弹 → Sunni 主流转保守 / Mu\'tazilite 衰 / 反讽',
      engagementHook: '我用国家力量推「理性主义」反而让理性主义输——你听过 21 世纪有类似 backfire 的政策吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n10',
      type: 'synthesis',
      content: {
        cn: '我 813-833 在位 20 年，给世界两份遗产：\n\n第一份——极致 cosmopolitan 知识赞助：Bait al-Hikma 4 部门扩建 + Hunayn ibn Ishaq 高薪翻译希腊医学 + al-Khwarizmi 825《Kitab al-Jabr》(algebra 字源) + 830 印度数字 (algorithm 字源) + 827 测地球周长 40,250 km 误差 0.4%。\n\n第二份——强制信仰：833 Mihna 异端审讯 + Ahmad ibn Hanbal 拒签被鞭打 + caliph 用国家暴力裁神学。\n\n两份都真，都是同一 20 年里我做的。\n\n21 世纪学者三派评：\n\n1. 传统 Sunni：我是 Mu\'tazilite 罪人，Mihna 是污点；翻译运动只是副产品。\n\n2. 19c 西方 Orientalist：浪漫化我为「开明 caliph」，淡化 Mihna。\n\n3. 21c globalist 修正（Hodgson 1974 / Gutas 1998）：knowledge 跟 imperial 强制是 sibling 不是 opposite——同一集权机器既能做翻译也能做 Mihna。\n\n两面都站得住。想 30 秒。',
        en: 'My 20-year reign 813-833 — left the world two legacies:\n\nLegacy one — extreme cosmopolitan knowledge patronage:\n- Bait al-Hikma expanded into four departments\n- Hunayn ibn Ishaq\'s high-salary Greek-medical translation team\n- al-Khwarizmi 825 Kitab al-Jabr (etymological root of algebra) + 830 Indian Numerals (root of algorithm)\n- 827 measurement of Earth\'s circumference at 40,250 km, 0.4% error\n- Greek (Aristotle, Plato, Ptolemy, Euclid, Galen) + Persian (Pahlavi) + Indian (Brahmagupta) sources brought into Arabic.\n\nLegacy two — coerced belief:\n- 833 Mihna inquisition\n- Ahmad ibn Hanbal flogged for refusing to sign\n- caliph using state violence to arbitrate theology.\n\nBoth legacies are real — both are mine — inside the same 20 years.\n\nHow do 21st-century scholars read this?\n- Traditional Sunni view: I am the Mu\'tazilite offender, the Mihna is a stain; the translation movement was an incidental side effect.\n- Western Orientalist view (19th to early 20th c.): romanticizing me as "the enlightened caliph," softening the Mihna.\n- 21st-century globalist revision (Hodgson 1974, Gutas 1998, El-Hibri 1999): knowledge and imperial coercion are siblings, not opposites — the same centralized machinery can fund a translation movement and run an inquisition.\n\nBoth sides stand. Think for 30 seconds.',
      },
      deliverGoal: 'N10 synthesis 双 view (cosmopolitan 知识赞助 vs 强制信仰审讯) / 3 派学者评 (Sunni / Orientalist / globalist Hodgson Gutas) / AP DBQ hold contradiction 30 seconds',
      engagementHook: '两份遗产都是我同一个 20 年做的——你的 30 秒过去了——你怎么评我？',
      expectsRealAnswer: false,
    },
    {
      id: 'mamun-n11',
      type: 'synthesis',
      content: {
        cn: '我 833 死后 1192 年——21 世纪的你身边——还能看到「knowledge 跟 imperial 强制是 sibling」这件事吗？\n\n4 个候选：\n\n1. 中国 21c：政府投资 AI 实验室 + 「双一流」高校 + 中科院；同时推「核心价值观」教育 + 互联网内容审查。\n\n2. 美国冷战 1950-60s：NASA 阿波罗（1969）+ DARPA 早期 internet（1969 ARPANET）；同时 McCarthy 1950-1956 反共审讯 + 好莱坞 blacklist + 学者忠诚誓词。\n\n3. 苏联 Stalin 1930s：核物理 + 数学 + 文学翻译国家工程；同时 Great Purge 1936-1938 学者被枪决。\n\n4. 沙特 21c：KAUST（阿卜杜拉国王科技大学，2009 建，全球招聘，男女同校）；同时 2018 处死 Khashoggi（记者）。\n\n你注意——这不是「专制国家也能做点科研」的窄命题。是更深的东西：能集中资源做大规模知识工程的国家机器，往往同时拥有强制思想统一的能力，两者用同一套机制（资金 + 法律 + 监控）。\n\n我 833 年的事——21 世纪没有过去，只是换了名字。',
        en: '1192 years after my death in 833 — in your 21st century — can you still see "knowledge and imperial coercion are siblings"?\n\nSome candidates:\n\n1. 21st-century China — state investment in AI labs, "Double First-Class" universities, Chinese Academy of Sciences; simultaneously "core values" education in curricula and internet content censorship. Same state apparatus, both at once.\n\n2. Cold War US 1950s-60s — NASA\'s Apollo Moon landing (1969), DARPA\'s early internet (1969 ARPANET); simultaneously the McCarthy era 1950-1956 anti-communist hearings — Hollywood blacklist, faculty loyalty oaths. Same country.\n\n3. Stalin\'s USSR 1930s — nuclear physics, mathematics, literary translation as state projects; simultaneously the Great Purge 1936-1938, scholars executed. Same Stalin.\n\n4. 21st-century Saudi Arabia — KAUST (King Abdullah University of Science and Technology, founded 2009, global hiring, mixed-gender campus); simultaneously the 2018 killing of Khashoggi (the journalist). Same royal family.\n\nNotice — this is not the narrow claim "even authoritarian states can do some research." It is something deeper: state machinery powerful enough to mount large-scale knowledge projects also tends to possess the capacity for ideological enforcement — both run on the same mechanism (funding + law + surveillance).\n\nWhat I did in 833 — has not gone away in the 21st century. It only changed names.',
      },
      deliverGoal: 'N11 cross-time synthesis — al-Mamun 833 / 21c China / Cold War US / Stalin USSR / Saudi KAUST — knowledge + 强制思想统一 700-1200 年 sibling pattern',
      engagementHook: '4 个候选里——你最能感同身受的那个国家 / 时代——是怎么处理这种 knowledge + 强制信仰共存的？',
      expectsRealAnswer: true,
    },
    {
      id: 'mamun-n12',
      type: 'synthesis',
      content: {
        cn: '关于我 21 世纪 4 派评价——希望你区分清楚：\n\n1. 传统 Sunni（847 al-Mutawakkil 反转后成型）：我是 Mu\'tazilite 异端最大推手，Mihna 是污点。Ibn Taymiyya（13-14c Hanbali 复兴）+ 21c Salafi 派从这角度看我。\n\n2. Shia：中性但复杂。817 年我曾立 Shia 第八 Imam Ali al-Rida 为继承人（1 年后被 Baghdad 阿拉伯派逼撤）。818 年 al-Rida 死于 Tus（疑似毒杀，Shia 怀疑是我）。\n\n3. 19c 欧洲 Orientalist：浪漫化我为「开明 caliph」，强调翻译运动 +「按译稿等重黄金」伪故事，淡化 Mihna。已基本被学界批判。\n\n4. 21c globalist 修正（Hodgson 1974 / Gutas 1998）：把我放回 9c Abbasid 国家机器真实运作里。结论：knowledge 跟 imperial 强制是 sibling 不是 opposite。\n\n4 派不是 1 对 3 错——是同一个我从 4 角度看的 4 副肖像。21 世纪读史训练，是学会拿哪派 lens 看一个人，不是信「一定有一派是对的」。',
        en: 'Four 21st-century evaluations of me — I would like you to keep them distinct:\n\n1. Traditional Sunni view (gradually consolidated after al-Mutawakkil\'s 847 reversal):\n   I am the chief promoter of Mu\'tazilite heresy, the Mihna is a stain on the caliphate. Ibn Taymiyya (13th-14th-c. Hanbali revival) inherits this. 21st-century Salafi currents read me roughly this way.\n\n2. Shia view:\n   Relatively neutral. My relationship with the 8th Shia Imam Ali al-Rida is delicate — in 817 I named al-Rida as my heir (the Arab faction in Baghdad violently opposed it, and I withdrew it after a year). In 818 al-Rida died in Tus (suspected poisoning, with Shia tradition suspecting me). This complicates Shia evaluation — gratitude for the brief recognition of an Imam, suspicion that I had him killed.\n\n3. 19th-century European Orientalist view (Edward Pococke 17th c. → Carl Brockelmann early 20th c.):\n   Romanticized me as the "enlightened Eastern caliph," foregrounded the translation movement and the "manuscripts paid in their weight in gold" (false story), softened the Mihna. This school has been largely critiqued out of mainstream.\n\n4. 21st-century globalist revision (Marshall Hodgson 1974, The Venture of Islam; Dimitri Gutas 1998, Greek Thought, Arabic Culture; Tayeb El-Hibri 1999):\n   Re-embeds me in the actual workings of the 9th-century Abbasid state. Conclusion: knowledge and imperial coercion are siblings, not opposites — this is the 21st-century mainstream consensus in Islamic studies.\n\nFour views — not "one is right and three are wrong." Four portraits of the same me, seen from four angles.\n\nThe historical training you need in the 21st century — is learning which lens to use when reading a person — not believing that exactly one lens is the correct one.',
      },
      deliverGoal: 'N12 closing meta — 4 派评价 (传统 Sunni / Shia / 19c Orientalist / 21c globalist Hodgson Gutas El-Hibri) / source-criticism 训练 / 反「一派对一派错」二元化',
      engagementHook: '4 副不同肖像——你最能接受的那个版本——是哪一派的视角？为什么？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Islamic Rise · LENS 2: al-Khwarizmi (lonely-mediator) ────────
//
// Topic: Islamic Rise 622-1258 · 伊斯兰兴起
// HSS-7.2 · AP World 1.2 · AP World 1.3
//
// Lens 2 设计:
//   - id: 'al-khwarizmi'
//   - role: 'lonely-mediator'
//   - perspectiveTag: 'cross-civilization-translator'
//
// 不是「天才发明家」也不是「无名翻译者」二元化 —
// al-Khwarizmi 是「翻译者也是创作者」: 希腊 (Euclid/Ptolemy) + 印度 (Brahmagupta) + 波斯 (Zij-i-Shah) → 阿拉伯文
// 825《Kitab al-Jabr》创代数 algebra 字源 + 引印度数字 0 给阿拉伯世界 + 算法 algorithm 字源
//
// Cross-lens micro-detail (主推):
//   825 年在 Bait al-Hikma 案前写《Kitab al-Jabr》⭐ N5 — 阿拉伯文 + 引希腊 Euclid + 印度 Brahmagupta + 商业题
//   ↔ Lens 1 al-Mamun N6 (资助者视角) ↔ Lens 3 Fatima al-Fihri N? (859 Fez 用 al-Khwarizmi 数学传统)
//
// 严格规则:
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..."  (EN), 严禁 «...»
//   - em-dash 「——」 ≤ 3 per 段
//   - 每 node 350-550 CN chars
//   - anti-fab: Robert of Chester 1145 拉丁译 + Fibonacci 1202《Liber Abaci》/
//     地球周长 40,250 km (今 40,075, 误差 0.4%) /
//     Hunayn ibn Ishaq 高薪非「等重黄金」(Gutas 1998 否定) /
//     780 生 / 825 al-Jabr / 827 测地球 / 830 地球图 / 850 死

// ═══════════════════════════════════════════════════
// LENS 2: Muhammad ibn Musa al-Khwarizmi 花剌子米 (lonely-mediator)
// ═══════════════════════════════════════════════════

export var alKhwarizmiLens = {
  id: 'al-khwarizmi',
  name: 'Muhammad ibn Musa al-Khwarizmi',
  nameCn: '花剌子米',
  role: 'lonely-mediator',
  perspectiveTag: 'cross-civilization-translator',
  description: {
    en: 'You are Abu Abdallah Muhammad ibn Musa al-Khwarizmi (c. 780-850), Persian mathematician at Baghdad\'s Bait al-Hikma (House of Wisdom). In c. 825 you wrote "Kitab al-Mukhtasar fi Hisab al-Jabr wa-l-Muqabala" — the world\'s first independent treatise on algebra; the word "al-jabr" became "algebra," and the Latinized form of your name, "Algorismi," became "algorithm." You translated Greek (Euclid, Ptolemy), Indian (Brahmagupta), and Persian (Zij-i-Shah) sources into Arabic — but you did not merely translate. You rebuilt their methods around practical Arabic problems: inheritance, commerce, surveying. You stood between Mu\'tazilite rationalists and Hanbali traditionalists during the Mihna inquisition (833-848) without taking sides — mathematics, you said, needs no caliph\'s approval. You are not a "transmitter" or an "originator." You are the lonely-mediator translator who turned three civilizations into a single mathematical language.',
    cn: '你是 Abu Abdallah Muhammad ibn Musa al-Khwarizmi（约 780-850）——波斯数学家，Baghdad 智慧馆（Bait al-Hikma）核心成员。约 825 年你写《Kitab al-Mukhtasar fi Hisab al-Jabr wa-l-Muqabala》（《代数与平衡运算简明书》）——世界数学史上第一部独立代数著作；「al-jabr」一词成为 algebra（代数）字源，你名字的拉丁化「Algorismi」成为 algorithm（算法）字源。你翻译希腊（Euclid、Ptolemy）+ 印度（Brahmagupta）+ 波斯（Zij-i-Shah）资料进阿拉伯文——但你不只是翻译。你把这些方法重组在阿拉伯实用问题上：遗产分割 + 商业 + 测量。Mihna 异端审讯（833-848）期间，你站在 Mu\'tazilite 理性主义者跟 Hanbali 保守派中间——你不站队——数学不需要哈里发批准。你不是「转手人」也不是「孤独天才」——你是「翻译者也是创作者」——把三个文明的知识熔成一种数学语言的孤独调停者。',
  },
  storyboard: [
    {
      id: 'kw-n1',
      type: 'narrative',
      content: {
        cn: '约 780 年——我生于 Khwarezm（花剌子模——今乌兹别克斯坦阿姆河下游一带）——\n\n这一点学界至今有争议。9 世纪史家 al-Tabari 称我「al-Qutrubbulli」,意思是 Baghdad 郊外 Qutrubbull 人——所以也有人认为我生于 Baghdad——\n\n两种说法都有证据。我自己留下的署名只有「al-Khwarizmi」,意为「来自 Khwarezm」——这不一定是出生地——也可能是祖籍——\n\n我童年在波斯文化圈长大——\n\n8 世纪末的 Khwarezm 是波斯-中亚文化交叉点：\n- Sassanid 波斯传统（Zoroastrian 天文学 + Pahlavi 文献）\n- 希腊化遗产（Alexander 东征后的天文学传统）\n- 印度商队带来的 Brahmagupta 数学\n- 阿拉伯-伊斯兰新政权（751 年怛罗斯之战后中亚伊斯兰化加速）\n\n我从小学波斯语 + 阿拉伯语——后来又学希腊语跟梵文残篇——\n\nAbbasid 革命（750 年）后——非阿拉伯穆斯林（mawali）也能进入学术圈——这给我这种波斯出身的人一条路——\n\n这一刻——我还不知道——50 年后我会在 Baghdad 智慧馆——把这四种语言熔成一本书。',
        en: 'I was born around 780 in Khwarezm (modern Khorezm, Uzbekistan, on the lower Amu Darya) —\n\nThis is contested. The 9th-century historian al-Tabari called me "al-Qutrubbulli" — a man of Qutrubbull, a Baghdad suburb — so some scholars place my birth in Baghdad —\n\nBoth claims have evidence. The signature I left is simply "al-Khwarizmi" — "the one from Khwarezm" — which may mark birthplace or only ancestry —\n\nI grew up inside Persian culture.\n\nLate-8th-century Khwarezm sat where four traditions crossed:\n- Sassanid Persian heritage (Zoroastrian astronomy, Pahlavi texts)\n- Hellenistic remnants (astronomy left from Alexander\'s eastern campaigns)\n- Indian caravans carrying Brahmagupta\'s mathematics\n- The new Arab-Islamic order (after 751, the Battle of Talas, Central Asia accelerated toward Islam)\n\nFrom childhood I learned Persian and Arabic — later Greek and fragments of Sanskrit —\n\nAfter the Abbasid revolution (750), non-Arab Muslims (mawali) could enter the scholarly class — that opened a road for a Persian boy like me —\n\nIn that moment I did not know that fifty years later, in the House of Wisdom at Baghdad, I would fuse those four languages into a single book.',
      },
      deliverGoal: 'N1 c.780 Khwarezm 出生 (contested fact: 也可能 Baghdad — al-Tabari 称 al-Qutrubbulli) / 童年波斯-中亚四语境 (波斯 + 希腊 + 印度 + 阿拉伯) / Abbasid 革命后 mawali 入学术圈',
      engagementHook: '你跨多种语言/文化长大吗？这种「夹在中间」的童年是优势还是负担？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n2',
      type: 'narrative',
      content: {
        cn: '800 年代初——我大约 20 多岁——离开 Khwarezm 到 Baghdad——\n\n那时是 Harun al-Rashid（786-809）的盛世。Baghdad 已是 50 年的新都,人口约 50 万。朝东走 800 公里就是中亚商路——朝西走就是大马士革跟拜占庭——\n\n我入 Bait al-Hikma（智慧馆）——\n\n这个机构起源 Sassanid 王室图书馆传统——前任 caliph al-Mansur（754-775）跟 Harun al-Rashid 已经在收集翻译希腊跟波斯典籍——但还没系统化——\n\n我的同事是一个跨族群混合班子：\n- Hunayn ibn Ishaq（809-873）——Nestorian 基督徒——主译希腊医学（Galen + Hippocrates）\n- 他儿子 Ishaq + 外甥 Hubaysh——也是 Nestorian——\n- Yahya ibn al-Bitriq——希腊-拜占庭背景——译 Plato 跟 Aristotle\n- al-Hajjaj ibn Yusuf——译 Euclid《几何原本》\n- 还有几个 Sassanid 波斯老学者——主译 Pahlavi 天文\n\n这个班子里——基督徒跟穆斯林同桌 + 波斯人跟阿拉伯人同薪 + 大家薪水来自 caliph 私库——\n\n19 世纪欧洲东方学家说我们「按译稿等重黄金付酬」。这是浪漫化。Gutas 1998《Greek Thought, Arabic Culture》考据后:实际是制度化高薪职业——不是奇观——\n\n我是这个班子里的数学-天文家——不是医学也不是哲学。',
        en: 'Around the early 800s — in my mid-twenties — I left Khwarezm for Baghdad —\n\nThis was the high tide of Harun al-Rashid (r. 786-809). Baghdad had been the new capital for fifty years — perhaps 500,000 people — eight hundred kilometers east lay the Central Asian caravan routes, west lay Damascus and Byzantium —\n\nI entered Bait al-Hikma — the House of Wisdom —\n\nIt grew out of the Sassanid royal library tradition. The earlier caliph al-Mansur (r. 754-775) and Harun al-Rashid had already been collecting and translating Greek and Persian texts — but not yet systematically.\n\nMy colleagues were a mixed crew across faiths and peoples:\n- Hunayn ibn Ishaq (809-873) — Nestorian Christian — chief translator of Greek medicine (Galen, Hippocrates)\n- His son Ishaq, his nephew Hubaysh — also Nestorians —\n- Yahya ibn al-Bitriq — Greek-Byzantine background — translated Plato and Aristotle\n- al-Hajjaj ibn Yusuf — translated Euclid\'s Elements\n- And several old Sassanid Persian astronomers — who handled the Pahlavi star tables\n\nIn this team Christians and Muslims sat at the same table; Persians and Arabs drew the same wage; salaries came from the caliph\'s private treasury —\n\n19th-century European Orientalists wrote that we were paid "the weight of our manuscript in gold." That is romance. Gutas 1998 (Greek Thought, Arabic Culture) shows the truth: a regularized, well-paid profession — not spectacle.\n\nWithin this team I was a mathematician-astronomer — not a doctor and not a philosopher.',
      },
      deliverGoal: 'N2 800 年代到 Baghdad / 入 Bait al-Hikma / Harun al-Rashid 时期 / 同事跨族群 (Hunayn 基督徒 + Yahya 拜占庭 + al-Hajjaj 希腊 + 波斯老学者) / Gutas 1998 否定「按译稿等重黄金」浪漫化叙事',
      engagementHook: '一个跨宗教 + 跨民族同桌的研究团队——9 世纪 Baghdad 做到了——21 世纪你的学校做到了吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n3',
      type: 'narrative',
      content: {
        cn: '809 年 Harun al-Rashid 死——他两个儿子开始内战——\n\n哥哥 al-Amin 留 Baghdad——弟弟 al-Mamun（786-833）在 Khurasan（今伊朗东北至中亚）——这正是我老家方向——\n\n813 年 9 月,al-Mamun 攻入 Baghdad。al-Amin 战死——al-Mamun 27 岁即位——\n\n但他没立刻回 Baghdad。他留在 Merv（今土库曼斯坦）,把行政中心暂设那里——直到 819 年才回迁——\n\n这 6 年——Bait al-Hikma 在动荡里勉强运转——\n\n我做学者——不站队——\n\nal-Mamun 是 Mu\'tazilite,伊斯兰理性主义派。主张「Quran 是被造的」（不是永恒不变的）,也主张「真理由理性证明，不需要传统权威」——这立场跟 Hanbali 保守派彻底冲突——\n\n827 年 al-Mamun 把 Mu\'tazilite 立为官方教义——833 年起 Mihna（异端审讯）——所有学者必须公开承认「Quran 是被造的」——\n\n我在审讯风暴里——\n\n但我是数学家——不是神学家——\n\n方程的解不需要哈里发批准——一次方程的标准解法在 Mu\'tazilite 跟 Hanbali 那里都一样——\n\n我做的是「中性学问」——这给我一个躲避点——\n\n但「中性」不等于安全——风暴里站不住脚的人——任何方向都会被卷走——\n\n你 21 世纪也面对类似选择吗？「专业中性」是真正的中立——还是另一种立场？',
        en: 'In 809 Harun al-Rashid died — and his two sons fell into civil war —\n\nThe elder, al-Amin, held Baghdad. The younger, al-Mamun (786-833), held Khurasan (modern northeast Iran into Central Asia) — exactly the direction of my homeland —\n\nIn September 813 al-Mamun stormed Baghdad — al-Amin was killed — al-Mamun, 27, became caliph —\n\nBut he did not at once return to Baghdad. He stayed in Merv (modern Turkmenistan), set up an administrative center there, and only moved back in 819 —\n\nFor six years Bait al-Hikma kept barely going through the turbulence —\n\nI worked as a scholar. I did not take sides.\n\nal-Mamun was a Mu\'tazilite — the Islamic rationalist school — who held that "the Quran is created" (not eternal and uncreated) and that "truth is proved by reason, not by inherited authority." This collided head-on with the Hanbali traditionalists —\n\nIn 827 al-Mamun made Mu\'tazilism the official doctrine — and from 833 came the Mihna, the inquisition — every scholar had to publicly affirm that "the Quran is created" —\n\nI was in the storm.\n\nBut I was a mathematician — not a theologian.\n\nThe solution of an equation needs no caliph\'s approval. The standard method for solving a linear equation looks the same to a Mu\'tazilite and to a Hanbali —\n\nI did "neutral knowledge." It gave me a place to stand.\n\nBut "neutral" is not safe. In a storm the man who has no footing in any direction is the man who gets swept away —\n\nDo you face similar choices in the 21st century? Is "professional neutrality" real neutrality — or another stance?',
      },
      deliverGoal: 'N3 813-819 al-Amin/al-Mamun 内战 + 819 al-Mamun 回 Baghdad / 827 Mu\'tazilite 官方化 → 833 Mihna 起 / al-Khwarizmi 数学家不是神学家 — 方程不需哈里发批准 / 但「专业中性」不等于安全',
      engagementHook: '「专业中性」是真正的中立——还是另一种立场？你 21 世纪面对类似选择吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n4',
      type: 'narrative',
      content: {
        cn: '820 年代,al-Mamun 回 Baghdad 后,大幅扩建 Bait al-Hikma——加翻译部 + 抄写部 + 天文台 + 地图测绘部——\n\n我参加翻译运动——\n\n我读两本书最久：\n\n第一本——Brahmagupta《Brahmasphutasiddhanta》（《婆罗摩历算书》——628 年印度）——\n\n这本书带来一个我从没见过的东西。「shunya」,梵文「空」「无」——一个可以放在数字里、参与运算的「零」——\n\n罗马数字没有零（Ⅰ Ⅱ Ⅲ Ⅳ）——希腊数字也没有零（α β γ δ）——\n\n但 Brahmagupta 写：「a + 0 = a」「a × 0 = 0」「0 ÷ 0 = 0」（最后一条后来被证明错——但他敢写 0 ÷ 0 这件事本身——是数学史上的大事）——\n\n第二本——Euclid《Elements》（《几何原本》——公元前 300 年希腊）——\n\nEuclid 用公理 + 定理 + 证明——一步一步——任何人都能跟着走——\n\n这种「形式证明」逻辑结构,Brahmagupta 没有。印度数学多用「我看出来」「显然如此」——直觉跳跃——\n\n两套传统在我面前：\n- 印度——有 0 + 位值 + 大胆抽象——但缺形式证明\n- 希腊——有严密公理化——但没有 0 + 没有代数符号\n\n我手里只有阿拉伯文——这种语言此前没有承担过这种数学——\n\n我得自己造一种新写法。',
        en: 'In the 820s — after al-Mamun came back to Baghdad — Bait al-Hikma was rebuilt at scale: a translation bureau, a copyist bureau, an observatory, a cartography bureau —\n\nI joined the translation movement.\n\nTwo books held me longest.\n\nFirst, Brahmagupta\'s Brahmasphutasiddhanta (628 CE, India) —\n\nThis book carried something I had never seen — "shunya" — Sanskrit for "void" or "emptiness" — a zero you can place inside a number and use in calculation —\n\nRoman numerals had no zero (I, II, III, IV). Greek numerals had no zero (α, β, γ, δ).\n\nBut Brahmagupta wrote: "a + 0 = a," "a × 0 = 0," and "0 ÷ 0 = 0" (this last rule was later shown wrong — but the fact that he dared to write 0 ÷ 0 at all is a watershed in the history of mathematics) —\n\nSecond, Euclid\'s Elements (c. 300 BCE, Greece) —\n\nEuclid built axiom + theorem + proof — step by step — anyone can follow the chain —\n\nThis "formal proof" structure was missing in Brahmagupta. Indian mathematics tended to say "I see it" or "this is plain" — intuitive leaps —\n\nTwo traditions stood before me:\n- India: zero, place-value, bold abstraction — but no formal proof\n- Greece: strict axiomatics — but no zero, no algebraic notation\n\nIn my hand I had only Arabic — a language that had never before carried mathematics of this kind —\n\nI had to build a new way of writing.',
      },
      deliverGoal: 'N4 820 年代 Bait al-Hikma 翻译运动 / Brahmagupta《Brahmasphutasiddhanta》带来 0 + 位值 / Euclid《Elements》带来形式证明 / 两套传统对照 — 印度有 0 但缺证明 + 希腊有公理但无 0 / 阿拉伯文此前没有承担过这种数学',
      engagementHook: '两个文明的知识在你面前——你怎么决定哪个保留 + 哪个改写 + 哪个放弃？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n5',
      type: 'narrative',
      content: {
        cn: '约 825 年——我在 Bait al-Hikma 一张木案前——\n\n案上摊三种东西：\n- 一卷 Brahmagupta 印度梵文残页——已经被先前译者抄成阿拉伯文——\n- 一卷 Euclid 希腊文——al-Hajjaj ibn Yusuf 译的阿拉伯版——\n- 一摞当时 Baghdad 商人来咨询的实际问题：「父亲死了——遗产 100 dinar——三个儿子两个女儿怎么分？」「布匹 7 匹换 12 匹丝——价怎么算？」\n\n我用阿拉伯文写——\n\n我的书叫《Kitab al-Mukhtasar fi Hisab al-Jabr wa-l-Muqabala》——《关于复原与平衡运算的简明书》——\n\n「al-jabr」,意思是「复原」。把方程一边的负项移到另一边变正——比如 x − 3 = 7 → x = 7 + 3 = 10——\n\n「al-muqabala」——意思是「平衡」——把方程两边相同的项相消——\n\n这两个词——是阿拉伯文里日常用语——但我用它们命名一种新的运算——\n\n书的结构——我故意做三层：\n第一层——理论（采希腊形式证明结构——每条规则都有几何证明）——\n第二层——一次跟二次方程的标准解法（采印度位值数字 + 我自己设计的符号）——\n第三层——实用问题（遗产 + 商业 + 测量——阿拉伯生活）——\n\n300 年后,1145 年,英国译者 Robert of Chester 在 Segovia 把这本书译成拉丁文——书名《Liber Algebrae et Almucabola》——欧洲数学第一次有了「algebra」这个词——\n\n我没活到看见这一天——但这本书——是我一辈子做的最重要的事。',
        en: 'Around 825 — at a wooden desk in Bait al-Hikma —\n\nThree things were spread on the desk:\n- A scroll of Brahmagupta in Sanskrit fragments, already copied into Arabic by earlier hands —\n- A scroll of Euclid in Greek, in al-Hajjaj ibn Yusuf\'s Arabic version —\n- A stack of practical questions Baghdad merchants and judges had brought: "A father died, inheritance 100 dinars, three sons and two daughters — how do we divide?" "Seven bolts of cloth for twelve of silk — what is the price?"\n\nI wrote in Arabic.\n\nMy book was called Kitab al-Mukhtasar fi Hisab al-Jabr wa-l-Muqabala — "The Compendious Book on Calculation by Restoration and Balancing" —\n\n"al-jabr" means "restoration" — taking a negative term to the other side of the equation and turning it positive: x − 3 = 7 becomes x = 7 + 3 = 10 —\n\n"al-muqabala" means "balancing" — cancelling identical terms on both sides —\n\nThese were ordinary Arabic words. I used them to name a new operation.\n\nThe book\'s structure I built deliberately in three layers:\n- First, theory (using Greek-style formal proof — every rule has a geometric demonstration)\n- Second, the standard solutions of linear and quadratic equations (using Indian place-value numerals and notation I designed myself)\n- Third, applied problems (inheritance, commerce, surveying — the life of Arab cities)\n\nThree centuries later — in 1145 — the English translator Robert of Chester, working in Segovia, rendered this book into Latin: "Liber Algebrae et Almucabola." For the first time, European mathematics had the word "algebra."\n\nI did not live to see that day. But this book — is the most important thing I ever did.',
      },
      deliverGoal: 'N5 cross-lens micro-detail (825 写《Kitab al-Jabr》主推) / 在 Bait al-Hikma 案前 + 三种素材 (Brahmagupta + Euclid + 商业实题) / 用阿拉伯文 / 三层结构 (希腊证明 + 印度位值 + 阿拉伯实用) / 1145 Robert of Chester 拉丁译 → algebra 字源',
      engagementHook: '825 年我用阿拉伯文做了希腊文跟梵文都没做过的事——你 21 世纪有这种「跨工具创新」机会吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n6',
      type: 'narrative',
      content: {
        cn: '约 825-830 年,我又写一本短书,《Kitab al-Hisab al-Hindi》——《印度数学之书》——\n\n这本书把印度数字系统系统性引入阿拉伯学术圈——\n\n印度数字——9 世纪时还在用 Brahmi 字符（不是今天看到的形状）——但核心概念已成形：\n- 9 个符号（1 到 9）+ 一个零（shunya 0）——一共 10 个\n- 位值——同一个符号在不同位置代表不同数（个位 + 十位 + 百位）\n- 任何数都可以用这 10 个符号写出——不管多大\n\n对比阿拉伯当时通用的两种系统：\n\n第一,abjad 字母数字（用阿拉伯字母代数,alif=1，ba=2，jim=3...）。天文学家用——但加减乘除极不方便——\n\n第二,商人用的「指节计数」（finger-reckoning）,心算工具。但不能写——大数算到一半就乱——\n\n印度数字三个优点：可写下 + 位值简洁 + 0 让位值系统不出错——\n\n这本书的阿拉伯文原本佚失——\n\n但 12 世纪有人把它译成拉丁文——拉丁版书名《Algoritmi de numero Indorum》——「Algoritmi」是我名字「al-Khwarizmi」的拉丁化——\n\n这就是 algorithm（算法）这个词的字源——\n\n1202 年——意大利 Pisa 商人 Leonardo Fibonacci 写《Liber Abaci》（《算盘书》）——把印度-阿拉伯数字介绍给欧洲商业界——\n\n13-15 世纪——印度-阿拉伯数字逐步取代罗马数字——\n\n你 21 世纪写「2026」这四个字——是 1200 年前印度 + 阿拉伯 + 拉丁链条的产物。',
        en: 'Around 825-830, I wrote a shorter book — Kitab al-Hisab al-Hindi — "On Calculation with Indian Numerals" —\n\nThis book brought the Indian numeral system into Arabic scholarship in a systematic way.\n\nIndian numerals were then still written in Brahmi-derived shapes (not the forms you see today), but the core ideas were already in place:\n- nine symbols for 1-9, plus a zero (shunya, 0) — ten total\n- place value — the same symbol means a different number depending on its position (units, tens, hundreds)\n- any number, however large, can be written with just these ten symbols\n\nCompare the two systems the Arab world was using:\n\nFirst, abjad letter-numerals (Arabic letters used as digits — alif = 1, ba = 2, jim = 3 …) — used by astronomers — but addition, subtraction, multiplication, and division were extremely awkward.\n\nSecond, merchant finger-reckoning — a mental tool — but you cannot write it down, and big numbers tangle midway.\n\nIndian numerals had three advantages: they could be written, place value made them compact, and the zero kept the place-value system from collapsing.\n\nThe Arabic original of this book is lost.\n\nBut in the 12th century someone translated it into Latin under the title "Algoritmi de numero Indorum" — "Algoritmi" is the Latinization of my name al-Khwarizmi —\n\nThis is the etymological root of the word "algorithm."\n\nIn 1202 the Pisan merchant Leonardo Fibonacci wrote his Liber Abaci — "Book of Calculation" — and introduced Hindu-Arabic numerals to European commerce —\n\nThrough the 13th, 14th, and 15th centuries, Hindu-Arabic numerals slowly displaced Roman numerals.\n\nWhen you write "2026" in the 21st century, you are using a chain that runs through India, my Baghdad, and Latin Europe across 1200 years.',
      },
      deliverGoal: 'N6 c.825-830《Kitab al-Hisab al-Hindi》引印度数字 + 0 / 对比阿拉伯 abjad 字母数字 + 商人指节计数 / 12c 拉丁译《Algoritmi de numero Indorum》→ algorithm 字源 / 1202 Fibonacci《Liber Abaci》引欧洲',
      engagementHook: '你写「2026」这四个数字——是印度 + 阿拉伯 + 拉丁 1200 年的产物——你今天用的工具有多少是这种长链？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n7',
      type: 'narrative',
      content: {
        cn: '约 827 年——al-Mamun 给我跟另一位天文家 Habash al-Hasib 一个任务——\n\n「测地球周长。」\n\n希腊人 Eratosthenes（公元前 240 年）已经做过——用 Alexandria 跟 Syene（今 Aswan）夏至日影差——估计地球周长约 39,375 公里——\n\nal-Mamun 想知道——希腊人对不对——\n\n我跟 Habash 带学者队去 Sinjar 平原（今伊拉克北部）——\n\n方法：\n- 选两点——纬度差正好 1 度——\n- 用恒星观测确认这两点的纬度差——\n- 然后实地测两点之间的直线距离——用绳子 + 测杆——\n- 最后乘 360——得地球周长——\n\n我们测出 1 度 = 56.6 阿拉伯英里（约 111.8 公里）——\n\n地球周长 = 56.6 × 360 = 20,376 阿拉伯英里 ≈ 40,250 公里——\n\n现代值是 40,075 公里——误差约 0.4%——\n\n9 世纪用绳子跟测杆——结果误差 0.4%——\n\n这件事意义不只是数字——而是「证明希腊人不一定全对——我们可以独立验证」——\n\n这跟 Mihna 风暴里 al-Mamun 的态度同源：「权威需要被理性检验。」\n\n但讽刺的是,他在神学上推 Mu\'tazilite 时也用强迫。异端审讯把不肯说「Quran 是被造的」的学者关押 + 鞭打——「理性主义」的实践方式跟它的口号矛盾——\n\n我没参与神学辩论——我只测地球——\n\n但我心里清楚：理性化的国家工程——也可能不理性。',
        en: 'Around 827 — al-Mamun gave me, together with the astronomer Habash al-Hasib, a single task —\n\n"Measure the circumference of the Earth."\n\nThe Greek Eratosthenes (c. 240 BCE) had already done this — using the difference in shadow length between Alexandria and Syene (modern Aswan) on the summer solstice — estimating the Earth\'s circumference at about 39,375 km —\n\nal-Mamun wanted to know — were the Greeks right?\n\nHabash and I led a team to the plain of Sinjar (modern northern Iraq).\n\nMethod:\n- pick two points exactly one degree of latitude apart\n- confirm the latitude difference by stellar observation\n- physically measure the straight-line distance between the two points, using rope and surveying poles\n- multiply by 360 — and you have the Earth\'s circumference\n\nWe measured 1° = 56.6 Arabic miles (about 111.8 km).\n\nEarth\'s circumference = 56.6 × 360 = 20,376 Arabic miles ≈ 40,250 km.\n\nThe modern figure is 40,075 km — error about 0.4%.\n\nIn the 9th century, with rope and pole, we landed within 0.4% of the truth.\n\nThe meaning of this work is not just the number. It is the principle: "the Greeks are not necessarily right — we can verify independently."\n\nThis sat at the same root as al-Mamun\'s posture in the Mihna storm: "authority must be tested by reason."\n\nBut here was the irony — when al-Mamun pushed Mu\'tazilism in theology, he used compulsion: the inquisition jailed and flogged scholars who refused to affirm "the Quran is created." The practice of rationalism contradicted its slogan.\n\nI did not enter the theological debate. I only measured the Earth.\n\nBut I knew, in private: a state project of rationalization can itself be unreasonable.',
      },
      deliverGoal: 'N7 c.827 al-Mamun 命我 + Habash al-Hasib 测地球周长 / Sinjar 平原方法 (1 度纬度差 + 绳子测杆) / 1 度 = 56.6 阿拉伯英里 → 地球 ~40,250 km (现代 40,075, 误差 0.4%) / Eratosthenes 对比 / Mihna 矛盾「理性化国家工程也可能不理性」',
      engagementHook: '9 世纪用绳子测地球——误差 0.4%——你 21 世纪有这种「相信能验证」的勇气吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n8',
      type: 'narrative',
      content: {
        cn: '约 830 年——我写《Kitab Surat al-Ard》——《地球图像之书》——\n\n这本书是给 al-Mamun 资助的「世界地图」（al-Mamun\'s World Map）做底稿数据——\n\n我用 Ptolemy（约公元 150 年希腊-埃及）《Geographia》当起点——但我做了三件事：\n\n第一,修正 Ptolemy 的错。他把地中海长度估为 62 度经度,实际只有 42 度——我修正到接近实际——\n\n第二,加新地。Ptolemy 不知道阿拉伯半岛南部 + 北非内陆 + 中亚北部 + 印度南部 + 中国——我加了 826 处地名 + 经纬度 + 山川河流——\n\n第三,重组结构。按「7 个 climates」（希腊 klimata 系统,按纬度分 7 带）+ 每带列地名——\n\n这本书的精度,比 Ptolemy 高一档。但比 Ptolemy 多了什么真实的现场观察?老实说——大部分新地名来自商人 + 朝圣者 + 军队报告——不是我亲测——\n\n9 世纪伊斯兰世界的优势：\n- 商队覆盖 Bukhara → Baghdad → Cairo → Cordoba → Timbuktu\n- 朝圣者每年从西非 + 北非 + 中亚 + 印度涌到 Mecca\n- 军队从 Atlantic 大西洋一直打到 Indus 印度河\n\n我坐在 Baghdad 的图书馆里——但我手里有从 5000 公里以外送来的报告——\n\n这就是「网络中心」的优势——你不必亲历——但你可以汇总——\n\n这种「中心化的数据汇总」——是 9 世纪伊斯兰文明能做希腊跟印度都做不到的事——\n\n你 21 世纪 Google Maps 也是「中心化数据汇总」——只是规模大了 1000 万倍。',
        en: 'Around 830 I wrote Kitab Surat al-Ard — "The Image of the Earth" —\n\nThe book provided ground data for the World Map al-Mamun had commissioned —\n\nI started from Ptolemy (c. 150 CE, Greek-Egyptian) and his Geographia — but I did three things:\n\nFirst — I corrected Ptolemy. He had given the Mediterranean a length of 62 degrees of longitude — the truth is closer to 42 degrees — I pulled it back toward reality.\n\nSecond — I added what he had not known: southern Arabia, North African interior, the northern steppe of Central Asia, southern India, China — 826 place-names with latitude, longitude, mountains, rivers.\n\nThird — I reorganized the structure: by the seven "climates" (the Greek klimata system — latitude bands) — each climate listed with its places.\n\nThe accuracy of this book is one notch above Ptolemy. But how much of that comes from my own field observation? Honestly — most of the new place-names came from merchants, pilgrims, and military reports — not from my own measurement.\n\nThe advantage of the 9th-century Islamic world:\n- caravans linked Bukhara → Baghdad → Cairo → Cordoba → Timbuktu\n- pilgrims arrived in Mecca every year from West Africa, North Africa, Central Asia, and India\n- armies pushed from the Atlantic all the way to the Indus\n\nI sat in a Baghdad library — but in my hands lay reports from five thousand kilometers away —\n\nThis is the advantage of being the network\'s center. You do not need to walk it; you only need to gather it.\n\nThis kind of "centralized data aggregation" was something 9th-century Islamic civilization could do that Greek and Indian scholarship could not.\n\nYour 21st-century Google Maps is also centralized data aggregation — only ten million times larger in scale.',
      },
      deliverGoal: 'N8 c.830《Kitab Surat al-Ard》给 al-Mamun\'s World Map 数据 / Ptolemy 起点 + 三件事 (修正地中海经度 + 加 826 处地名 + 7 climates 重组) / 9c 伊斯兰网络中心优势 (商队 + 朝圣者 + 军队 5000 km 报告) / 21c Google Maps 类比',
      engagementHook: '「网络中心」让 9 世纪 Baghdad 知道 5000 公里外的事——21 世纪你的「中心位置」是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n9',
      type: 'narrative',
      content: {
        cn: '833 年 8 月——al-Mamun 在拜占庭边境战役途中卒——47 岁——\n\n他临终前刚发动 Mihna（异端审讯）——指定他弟弟 al-Mu\'tasim（833-842）继位——\n\nal-Mu\'tasim 续推 Mu\'tazilite 政策 + 续推 Mihna——\n\n伊斯兰著名传统派学者 Ahmad ibn Hanbal（780-855，跟我同年生）拒绝说「Quran 是被造的」。他被关押 + 鞭打——但他坚持——他成了 Hanbali 学派的精神象征——\n\n我跟 Ibn Hanbal 同年生——同在 Baghdad——但我们走了完全不同的路——\n\n他选「为信仰受难」——\n他选「为知识隐忍」——\n\n我没站 Mu\'tazilite——也没反——\n\n我做的是数学——\n\n但 21 世纪有学者批评我：「你享受 al-Mamun 的资助 + 沉默地接受 Mihna——这不是中立——这是默许暴力。」\n\n我无法反驳。\n\n我能说的只是,「真理由理性证明,不需要哈里发批准」。但我没把这句话用来反对 al-Mamun 的强迫——只用来证明我自己写的方程式——\n\n这是我一辈子的限度——\n\n我做了我能做的最大——但我不是 Ibn Hanbal——\n\n你 21 世纪——「专业人士在政治风暴里保持专业」是负责任——还是逃避？',
        en: 'In August 833 — al-Mamun died on the Byzantine frontier campaign — at 47 —\n\nHe had launched the Mihna in his last months and named his brother al-Mu\'tasim (r. 833-842) heir.\n\nal-Mu\'tasim continued the Mu\'tazilite line and continued the Mihna.\n\nThe great traditionalist Ahmad ibn Hanbal (780-855 — born the same year as me) refused to declare "the Quran is created." He was jailed and flogged. He held. He became the spiritual symbol of the Hanbali school —\n\nIbn Hanbal and I were born in the same year, lived in the same Baghdad — but we walked entirely different roads.\n\nHe chose "to suffer for the faith."\nI chose "to endure for knowledge."\n\nI did not align with the Mu\'tazilites. I did not speak against them.\n\nI worked on mathematics.\n\nBut 21st-century scholars charge me: "You took al-Mamun\'s patronage and stayed silent during the Mihna. That is not neutrality — that is consent to violence."\n\nI cannot refute it.\n\nThe most I can say is — "truth is proved by reason, not by the caliph\'s approval" — but I did not turn that line against al-Mamun\'s coercion. I used it only to prove the equations in my own books.\n\nThat is the limit of my life.\n\nI did the most I could. But I was not Ibn Hanbal.\n\nIn the 21st century — when a professional "stays professional" inside a political storm — is that responsibility? Or evasion?',
      },
      deliverGoal: 'N9 833 al-Mamun 死 / al-Mu\'tasim 继位 + 续 Mihna / Ahmad ibn Hanbal (同 780 生) 受难成 Hanbali 象征 / al-Khwarizmi 不站不反 — 数学 / 21c 批评「沉默接受暴力」/ 自己承认「我不是 Ibn Hanbal」',
      engagementHook: '「专业人士在政治风暴里保持专业」——是负责任——还是逃避？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n10',
      type: 'narrative',
      content: {
        cn: '842 年,al-Mu\'tasim 死。其子 al-Wathiq（842-847）续 5 年——继续 Mu\'tazilite 路线——\n\n847 年——al-Wathiq 弟弟 al-Mutawakkil（847-861）即位——\n\n他立刻反向——\n- 848 年废 Mihna 异端审讯——释放 Ibn Hanbal\n- 851 年宣布 Mu\'tazilite 立场为异端\n- 转向 Hanbali 保守传统派路线\n- 翻译运动经费砍——Bait al-Hikma 不再是国家工程\n\n伊斯兰理性主义国家化的 24 年（827-851）——结束——\n\n我没活到看见这一切的全部——850 年我死于 Baghdad——大约 70 岁——\n\n临终前几年,我感觉风向变了。年轻一代学者不再来 Bait al-Hikma 翻译希腊典籍了——他们去清真寺学传统经学——\n\n但我留下了——\n- 825《Kitab al-Jabr》——已写完 25 年——抄本散在 Baghdad + Cordoba + Cairo——\n- 830《Kitab al-Hisab al-Hindi》——印度数字介绍——\n- 830《Kitab Surat al-Ard》——地理 826 处地名——\n- Zij al-Sindhind——天文表整合印度 + 波斯 + 希腊——\n\n这些书——会在我死后跨越文明——\n\n300 年后到欧洲——700 年后到美洲——1200 年后还在你 21 世纪的代数课本里——\n\n但我活着的时候——我看到的只是——一个国家工程结束了——\n\n你做的事——可能要等几百年才显出意义——这个等待——你愿意吗？',
        en: 'In 842 al-Mu\'tasim died — his son al-Wathiq (r. 842-847) ruled five more years on the Mu\'tazilite line —\n\nIn 847 al-Wathiq\'s brother al-Mutawakkil (r. 847-861) took the throne.\n\nHe reversed everything —\n- 848: abolished the Mihna inquisition; Ibn Hanbal was released\n- 851: declared Mu\'tazilism heresy\n- turned toward the Hanbali traditionalist line\n- cut funding for the translation movement; Bait al-Hikma was no longer a state project\n\nThe twenty-four years (827-851) of state-backed Islamic rationalism ended.\n\nI did not live to see all of it — I died in Baghdad in 850, around seventy —\n\nIn my last years I felt the wind change. The younger generation no longer came to Bait al-Hikma to translate Greek. They went to the mosques to study traditional scripture.\n\nBut what I left stayed —\n- 825 Kitab al-Jabr — twenty-five years old; copies in Baghdad, Cordoba, Cairo —\n- 830 Kitab al-Hisab al-Hindi — the introduction of Indian numerals —\n- 830 Kitab Surat al-Ard — geography, 826 place-names —\n- Zij al-Sindhind — astronomical tables fusing Indian, Persian, and Greek data —\n\nAfter my death these books would cross civilizations.\n\nThree centuries on, they reached Europe. Seven centuries on, the Americas. Twelve centuries on, they sit in your 21st-century algebra textbook.\n\nBut while I was alive, what I saw was simpler — a state project had ended.\n\nWhat you build may take centuries to show its meaning. Are you willing to wait?',
      },
      deliverGoal: 'N10 842 al-Mu\'tasim 死 + 847 al-Mutawakkil 上 / 848 废 Mihna + 释 Ibn Hanbal + 851 宣 Mu\'tazilite 异端 / 翻译运动经费砍 / al-Khwarizmi 850 死 c.70 岁 / 留下 4 本书会跨文明 / 「等几百年才显意义」',
      engagementHook: '你做的事——可能要等几百年才显出意义——这个等待——你愿意吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'kw-n11',
      type: 'synthesis',
      content: {
        cn: '关于我，21 世纪两种说法——\n\n一种：我是「跨文明翻译者英雄」——独力把希腊 + 印度 + 波斯三大传统熔成阿拉伯数学——algebra + algorithm 字源 + 0 引入 + 地球周长测——一个人撑起伊斯兰黄金时代核心。\n\n另一种：我不是英雄——\n\n我没独力做任何一件——\n- Bait al-Hikma 是 al-Mansur + Harun al-Rashid + al-Mamun 三代 caliph 资助 + 几十名翻译家协作——我只是其中一个\n- Hunayn ibn Ishaq + 他儿子 + 他外甥的希腊医学翻译团队——比我团队大\n- 印度数字早在 8 世纪已经从印度商队进入波斯——我不是首发——我是系统化整理者\n- Mihna 风暴里我沉默——这种沉默有 21 世纪学者批为「享受资助而默许暴力」\n\n我不是「孤独天才」。我是「制度内一员,做了系统整理的一员——但同时也是政治默许的一员」——\n\n两件事同时成立。\n\n21 世纪你看我——\n\n如果只看「algebra + algorithm 字源」,你会觉得我是改变世界的天才。错——我是 50 个翻译家里的一个——\n\n如果只看「Mihna 沉默」,你会觉得我是政治懦夫。错——我做了「中性专业」的最大值——\n\n真相在中间——\n\n「我是孤独调停者,既站在三大文明知识中间,也站在两大神学派别中间——既保留了一些独立 + 也接受了体制饭碗——这两件事我没法分开」——\n\n想 30 秒。\n\n这跟你 21 世纪「天才英雄 vs 体制帮凶」二元化——是不是一样的简化？',
        en: 'In the 21st-century academy, two views of me —\n\nOne: I am the "cross-civilization translator hero" — single-handedly fusing Greek, Indian, and Persian traditions into Arabic mathematics — etymological root of "algebra" and "algorithm," introducer of zero, measurer of the Earth — the man who held up the core of the Islamic Golden Age.\n\nThe other: I am no hero.\n\nI did none of it alone —\n- Bait al-Hikma was funded by three caliphs (al-Mansur, Harun al-Rashid, al-Mamun) and run by dozens of translators in collaboration — I was one of them\n- Hunayn ibn Ishaq, his son, and his nephew ran a Greek-medicine team larger than mine\n- Indian numerals had already entered Persia through 8th-century caravans — I was not the first contact — I was the systematizer\n- During the Mihna I stayed silent — and 21st-century scholars charge that silence as "consent to coercion in exchange for patronage"\n\nI was not a "lone genius." I was "a member of an institution — who did the work of systematic synthesis — and at the same time a member of a political consent." Both are true at once.\n\nIf you read me from the 21st century —\n\nLook only at "algebra + algorithm + zero + Earth\'s circumference" — and I look like the genius who changed the world — wrong — I was one of fifty translators —\n\nLook only at "silence during the Mihna" — and I look like a political coward — wrong — I pushed "neutral professionalism" as far as it could go —\n\nThe truth is in the middle —\n\n"I am the lonely-mediator — standing between three civilizations of knowledge and between two theological camps — preserving some independence + accepting the institutional bowl — these two cannot be separated in me."\n\nThink for thirty seconds.\n\nIs that the same simplification as your 21st-century "genius hero vs system collaborator" binary?',
      },
      deliverGoal: 'N11 synthesis 双 view (跨文明翻译者英雄 vs 制度内默许者) — anti-binary 真相在中间 / hold 矛盾真相 30 秒 / AP DBQ source-criticism 训练',
      engagementHook: '21 世纪「天才英雄 vs 体制帮凶」二元化——是不是跟你评价历史人物的方式一样简化？',
      expectsRealAnswer: true,
    },
    {
      id: 'kw-n12',
      type: 'synthesis',
      content: {
        cn: '我已死 1176 年——你 21 世纪 7 年级跟我做完 lonely-mediator 这一段——\n\n21 世纪你每天用我——但你不知道——\n\n- 你写「2026」——印度位值 + 0——经我 c.830《Kitab al-Hisab al-Hindi》→ 12c 拉丁《Algoritmi de numero Indorum》→ 1202 Fibonacci《Liber Abaci》→ 13-15c 欧洲商业 → 21c 全球——\n- 你做「代数题」(algebra),「al-jabr」我 825 年从阿拉伯日常词「复原」造出——经 1145 年 Robert of Chester 拉丁译——\n- 你打开「algorithm」一词,你的名字 Algorismi 拉丁化——经中世纪欧洲数学家——到 20 世纪计算机科学——\n- 你用 Google Maps 看地球——我 c.830《Kitab Surat al-Ard》826 处地名——是同一种「中心化数据汇总」的祖先——\n\n横向看三个同类型的「跨文明翻译者-创作者」：\n\n- 玄奘（602-664 唐高僧）,629-645 年印度求法 17 年,带 657 部经回长安,译 75 部。但他不只是翻译——他在《大唐西域记》写下印度地理 + 政治 + 风俗——「翻译者也是创作者」结构同。\n\n- 利玛窦（Matteo Ricci 1552-1610 意大利耶稣会士）,1582 年到澳门,1601 年到北京。他把 Euclid《几何原本》前 6 卷译为中文（1607）——同时把中国《四书》介绍给欧洲——双向翻译,「中道孤独」16 世纪原型。\n\n- Fatima al-Fihri（800-880）,859 年在 Fez 建 al-Qarawiyyin 大学。她不是「翻译者」——但她建了一个「让翻译者代代传承」的机构——这个机构 9-13 世纪用我的数学传统教学,一直运作到 2026 年。\n\n四个我们——印度 + 波斯-阿拉伯 + 中国 + 西班牙-中国——都是 lonely-mediator 翻译者-创作者——\n\n21 世纪你——能在身边找到一个 lonely-mediator translator 吗？\n\n不是英雄，不是叛徒，是「卡在两个文明 / 两个语言 / 两个传统中间——把它们熔成第三种东西」的那种人。\n\n那个人是谁？',
        en: 'I have been dead 1,176 years — at 21st-century 7th grade you have walked this lonely-mediator stretch with me —\n\nIn the 21st century you use me every day, but you don\'t know it —\n\n- You write "2026" — Indian place-value plus zero — passed through my c. 830 Kitab al-Hisab al-Hindi → 12th-century Latin Algoritmi de numero Indorum → 1202 Fibonacci\'s Liber Abaci → 13th-15th-century European commerce → 21st-century global —\n- You solve an "algebra" problem — al-jabr — the everyday Arabic word for "restoration," which I turned into a discipline in 825, transmitted by Robert of Chester in 1145 —\n- You open the word "algorithm" — Algorismi, the Latinization of my name — running through medieval European mathematicians to 20th-century computer science —\n- You open Google Maps to look at Earth — and my c. 830 Kitab Surat al-Ard, with its 826 place-names, is an ancestor of the same idea: centralized data aggregation —\n\nLook across to three more cross-civilization translator-creators:\n\n- Xuanzang (602-664, Tang Buddhist monk) — 17 years in India (629-645) — brought 657 sutras back to Chang\'an, translated 75 — but he was not only a translator: in his Records of the Western Regions of the Great Tang he set down India\'s geography, politics, and customs — "translator is also creator," structurally the same as me.\n\n- Matteo Ricci (1552-1610, Italian Jesuit) — arrived in Macao 1582 — Beijing 1601 — translated the first six books of Euclid\'s Elements into Chinese (1607) — and at the same time introduced China\'s Four Books to Europe — two-way translation — the 16th-century prototype of "middle-way loneliness."\n\n- Fatima al-Fihri (800-880) — founded the al-Qarawiyyin University at Fez in 859 — she was not herself a translator — but she built an institution that lets translators pass the work generation to generation. From the 9th to the 13th century it taught my mathematical tradition. It is still teaching in 2026.\n\nFour of us — India-China + Persia-Arabia + Italy-China + Morocco — all lonely-mediator translator-creators —\n\nIn the 21st century — can you find a lonely-mediator translator near you?\n\nNot a hero, not a traitor — the kind of person "stuck between two civilizations, two languages, two traditions — fusing them into a third thing."\n\nWho is that person?',
      },
      deliverGoal: 'N12 closing meta cross-civilization 4 lonely-mediator translators (al-Khwarizmi 9C + Xuanzang 7C + Ricci 16-17C + Fatima al-Fihri 9C) / 21c 你每天用我 (2026 数字 + algebra + algorithm + Google Maps) / 21c 你身边找一个',
      engagementHook: '你 21 世纪身边——「卡在两个文明 / 两个语言 / 两个传统中间——把它们熔成第三种东西」——这种人是谁？',
      expectsRealAnswer: true,
    },
  ],
};

// 默认 export 兼容(给 staging 测试用)

// ─── Islamic Rise · Lens 3 · Fatima al-Fihri (staging) ──────────
//
// Topic: Islamic Rise 622-1258 · al-Mamun + al-Khwarizmi + Fatima al-Fihri
// HSS-7.2 · AP World 1.3 · receiving-end / female-knowledge-carrier
//
// Lens 3: Fatima al-Fihri — receiving-end / female-knowledge-carrier
//   - 800-880 摩洛哥 Fez 商人之女 (Tunisia Kairouan 出生)
//   - 859 用父亲遗产建 al-Qarawiyyin 大学 (Guinness 世界最古连续运营大学)
//   - 比 Bologna (1088) 早 229 年, 比 Oxford (1096) 早 237 年
//   - al-Mamun 833 死 26 年后 / al-Khwarizmi 825《Kitab al-Jabr》34 年后
//
// 真实历史人物 disclaimer:
//   - 跟 Aisha-1413 / Sister Agnes / Anacaona Jr 不同 — Fatima 是真实人物
//   - 但史料稀薄: 主要史料 Ibn Abi Zar 14c《Rawd al-Qirtas》— 距她 500 年后
//   - 我们对她个人生活知道少, 对她建的东西知道多
//   - careful framing: 「机构留下名字 + 遗产但个人故事消失」是 receiving-end
//     女性的典型 pattern
//
// Cross-lens micro-detail:
//   - N5 859 al-Qarawiyyin 物理建造 (Fez Wadi 河边, 4 年监工) ⭐ cross-lens scene
//   - N6 al-Khwarizmi 825《Kitab al-Jabr》→ 34 年后进 al-Qarawiyyin 数学课
//   - N6 al-Mamun Bait al-Hikma 翻译运动 → 知识西传至 al-Qarawiyyin 课程
//   - N7 Pope Sylvester II (Gerbert of Aurillac, 999-1003) 来过
//   - N7 Maimonides 12c 来过 / Ibn Khaldun 14c 研究过
//
// 7thgrader careful framing:
//   - N8 史料缺口 (Ibn Abi Zar 14c 距 Fatima 500 年后写 — 我们怎么知道她?)
//   - N9 1985 才收女学生 (Fatima 自己建的学校 1100 年禁女) — 不浪漫化
//   - careful: 让孩子坐 30 秒思考「保存」vs「创新」哪种更难
//
// 风格规则 (per AUTHORING_PIPELINE 12 条):
//   - 不用 *italic* markdown
//   - em-dash 「——」 ≤ 3 per 段
//   - 第 11 条 quote nesting: outer JS '...', 内嵌 「」(CN) / "..."(EN)
//     严禁 «...»
//   - 每 node 350-550 CN chars
//   - 数学一致: 800 生 / 820s 迁 Fez / 850s 父死继承 / 859 建 / 880 死
//   - anti-fab: Ibn Abi Zar 14c / 1985 现代化 / 2014 dirham 纸币 /
//     Bologna 1088 / Oxford 1096 / Pope Sylvester II 999-1003 都真
//   - expectsRealAnswer 默认 false, 只 N11+N12 设 true

// ═══════════════════════════════════════════════════
// LENS 3 storyboard: Fatima al-Fihri (12 nodes)
// ═══════════════════════════════════════════════════

var fatimaAlFihriStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 800 出生 Kairouan / Aghlabid 王朝 / 童年
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n1',
    type: 'narrative',
    phase: 'hook',
    cosplay: 'Fatima',
    narrativeRef: '§3.8 line 481-488 Fatima al-Fihri 出生 Kairouan',
    content: {
      cn:
        '我叫 Fatima al-Fihri。我大约 800 年生于 Kairouan——那是今天突尼斯的一座古城,9 世纪是 Aghlabid 王朝的首都。\n\n' +
        '父亲 Mohammed al-Fihri 是富商,家族 al-Fihri 来自更早的部族传统。母亲我记不太清——史书也没写。我有一个妹妹叫 Mariam。\n\n' +
        'Kairouan 在 9 世纪是伊斯兰世界的西部重镇——670 年阿拉伯军队建城,Aghlabid 王朝是 Abbasid 的西部附庸,以 Maliki 法学派为主流。城里有 Uqba 大清真寺 (670 年初建),周围围着泥砖城墙,街市上能听到阿拉伯语、柏柏尔语、几种地中海方言混在一起。\n\n' +
        '我童年在 Kairouan 度过。父亲让我跟妹妹 Mariam 一起读《古兰经》、学阿拉伯文、听 hadith (圣训)——9 世纪富商家庭让女儿受宗教教育不算稀奇。\n\n' +
        '我 13 岁那一年,在 Kairouan 的家里——清晨跟 Mariam 坐在父亲书房地毯上读《古兰经》,下午背阿拉伯文法,傍晚听家里请的老师讲 hadith。城外是 670 年建的 Uqba 大清真寺塔影,街市的阿拉伯语柏柏尔语混着传进窗户。9 世纪富商家女儿 13 岁在做的事——你 21 世纪 13 岁现在做的事——比一比。\n\n' +
        '但接下来发生的事——会让我和我妹妹的名字活到 21 世纪。\n\n' +
        '接下来 12 节——你跟我走 80 年。从 Kairouan 童年,到 Fez 建一所 1200 年后还在招生的大学。',
      en:
        'My name is Fatima al-Fihri. I was born around the year 800 in Kairouan — an old city in what is today Tunisia, in the ninth century the capital of the Aghlabid dynasty.\n\n' +
        'My father is Mohammed al-Fihri, a wealthy merchant. The family name al-Fihri comes from an older tribal lineage. My mother I do not remember well — the chronicles do not record her. I have a younger sister, Mariam.\n\n' +
        'In the ninth century Kairouan is a major city of the western Islamic world. Arab armies founded it in 670. The Aghlabids are western vassals of the Abbasids, and Maliki jurisprudence dominates here. The city has the Great Mosque of Uqba (begun 670), mud-brick walls around it, and in the markets you hear Arabic, Berber, and a few Mediterranean tongues mixed together.\n\n' +
        'I spent my childhood here. My father had Mariam and me read the Quran, study Arabic, listen to hadith. A wealthy merchant family in the ninth century educating its daughters religiously was not strange.\n\n' +
        'When I was thirteen — picture it. Morning, sitting on the carpet in my father\'s study with Mariam, reading the Quran. Afternoon, drilling Arabic grammar. Evening, listening to the household tutor recite hadith. Outside, the shadow of the Great Mosque of Uqba (founded 670). In through the window, the markets — Arabic, Berber, a few Mediterranean dialects layered together. What a wealthy merchant\'s daughter does at thirteen in the ninth century, against what you do at thirteen in the twenty-first — hold them up next to each other for a moment.\n\n' +
        'But what comes next — keeps my name and my sister\'s name alive into the twenty-first century.\n\n' +
        'Over twelve sections — walk eighty years with me. From a childhood in Kairouan, to founding a university in Fez that is still enrolling students twelve hundred years later.',
    },
    deliverGoal: {
      cn: '我叫 Fatima al-Fihri,约 800 生于 Kairouan (今突尼斯,Aghlabid 王朝首都)。父 Mohammed 富商,妹 Mariam。Kairouan 670 年建,Maliki 法学派主流。童年读古兰经 + 阿拉伯文 + hadith。',
      en: 'I am Fatima al-Fihri, born around 800 in Kairouan (today\'s Tunisia, capital of the Aghlabid dynasty). Father Mohammed a wealthy merchant; sister Mariam. Kairouan founded 670, Maliki jurisprudence dominant. Childhood spent reading Quran, studying Arabic and hadith.',
    },
    engagementHook: {
      cn: '我 800 年生于 Kairouan。父富商,妹 Mariam,读古兰经 + 阿拉伯文。下一节:820 年代家族迁 Fez——摩洛哥的新都城。',
      en: 'Born around 800 in Kairouan. Wealthy merchant father, sister Mariam, learning Quran and Arabic. Next: in the 820s the family moves to Fez — a new capital in Morocco.',
    },
    expectedLength: '420-470 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 820s 家族迁 Fez (Idrisid 王朝)
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n2',
    type: 'narrative',
    phase: 'setup',
    cosplay: 'Fatima',
    narrativeRef: '§3.8 line 484-486 family moved to Fez early 9c',
    content: {
      cn:
        '我大约 20 多岁的时候——820 年代——父亲带全家从 Kairouan 西迁到 Fez。\n\n' +
        'Fez 是新城。Idrisid 王朝 (789-974) 第二代君主 Idris II 在 808 年正式建 Fez 作为首都——那时距我家迁来不到 20 年。城分东西两岸,中间夹着 Wadi Fez 河 (Fez 河)。东岸住着从 Kairouan 来的阿拉伯移民,西岸住着从 Cordoba 安达卢西亚迁来的安达卢西亚移民——两群人讲不同的方言,守不同的礼俗。\n\n' +
        'Idrisid 是西部独立的 Sunni 政权,跟 Baghdad 的 Abbasid 不正面对抗——但也不臣服。这点跟我童年的 Kairouan 不同——Kairouan 是 Abbasid 西部附庸,Fez 是独立王国。\n\n' +
        '父亲在 Fez 经商——我猜是跨地中海贸易或者撒哈拉商队。Mohammed al-Fihri 这个名字在 Fez 城里逐渐有了分量。我跟妹妹 Mariam 继续读书——但已经从 Kairouan 的童年生活,变成 Fez 这座新城的青年生活。\n\n' +
        '这一搬,后来证明是关键。如果我们留在 Kairouan,我大概不会建任何东西——是 Fez 这座新城给了我空间。',
      en:
        'When I was in my twenties — sometime in the 820s — my father moved the whole family west, from Kairouan to Fez.\n\n' +
        'Fez was a new city. The Idrisid dynasty (789-974), under its second ruler Idris II, formally established Fez as its capital in 808. We arrived less than twenty years after the founding. The city sat on both banks of the Wadi Fez (the Fez river). Arab immigrants from Kairouan settled the east bank; Andalusi immigrants from Cordoba settled the west bank. Two communities, two dialects, two sets of customs.\n\n' +
        'The Idrisid was an independent Sunni polity in the west, not openly opposed to the Abbasids in Baghdad but not subject to them either. This was different from the Kairouan of my childhood. Kairouan was an Abbasid western vassal; Fez was an independent kingdom.\n\n' +
        'My father did business in Fez — I believe trans-Mediterranean trade or trans-Saharan caravans. The name Mohammed al-Fihri came to carry weight in the city. Mariam and I continued our studies, but our lives shifted from a childhood in Kairouan to young adulthood in this new city.\n\n' +
        'In retrospect, that move was decisive. If we had stayed in Kairouan, I would probably have built nothing. Fez, a new city, gave me room.',
    },
    deliverGoal: {
      cn: '820s 家族西迁 Fez (摩洛哥)。Idrisid 王朝 789-974,Idris II 808 建 Fez。东岸 Kairouan 阿拉伯移民,西岸 Cordoba 安达卢西亚移民。Idrisid 独立 Sunni 不臣服 Abbasid——跟 Kairouan 的附庸地位不同。父在 Fez 经商。',
      en: '820s family moves west to Fez (Morocco). Idrisid dynasty 789-974, Idris II founded Fez 808. East bank Kairouan Arab immigrants, west bank Cordoba Andalusi immigrants. Idrisid an independent Sunni polity, not subject to Abbasids — different from Kairouan\'s vassal position. Father trades in Fez.',
    },
    engagementHook: {
      cn: '820s 迁 Fez (Idrisid 808 建,新城)。东岸阿拉伯人,西岸安达卢西亚人,Wadi Fez 河中间。下一节:840-850s 父和兄弟死,我和妹妹继承遗产。',
      en: '820s move to Fez (Idrisid, founded 808, a new city). Arab east bank, Andalusi west bank, Wadi Fez between. Next: 840s-850s father and brothers die, my sister and I inherit.',
    },
    expectedLength: '420-470 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 840-850s 父和兄弟死 / Maliki 继承法
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n3',
    type: 'narrative',
    phase: 'setup',
    cosplay: 'Fatima',
    narrativeRef: '§3.8 line 487 父死继承大笔遗产',
    content: {
      cn:
        '850 年代——具体年份我记不清,史书也没写——父亲 Mohammed 去世。几乎同时,我的兄弟们也相继离世。家里剩下的成年继承人,只有我和妹妹 Mariam。\n\n' +
        '按 Maliki 法学派的继承规则,女性可以继承——但份额只有男性继承人的一半。在父和兄弟都已不在的情况下,Mariam 跟我成为家族财产的主要继承人。父亲多年商业积累的财富,一笔不小的数目,落到我们两姐妹手里。\n\n' +
        '这一点很关键——9 世纪伊斯兰世界并非每个地方都允许女性独立处置大笔财产。Maliki 法学派允许、Idrisid 王朝默认、Fez 城里的 qadi (法官) 接受。这三条同时成立,我才能做接下来要做的事。\n\n' +
        '我跟 Mariam 商量——这笔钱我们打算怎么花?当时富商遗孀 + 女儿的常规选择:再嫁、置地、放贷、捐给清真寺。我们选了最后一种,但选得更彻底——不是捐,是亲手建。\n\n' +
        '我决定建一座清真寺,附设教学。Mariam 决定建一座清真寺,叫 al-Andalus——给西岸安达卢西亚移民那群人。两座清真寺,两姐妹,同一时期,同一座城。',
      en:
        'In the 850s — the exact year is uncertain, the chronicles do not record it — my father Mohammed died. Within a short time, my brothers died as well. The only adult heirs left in the household were Mariam and me.\n\n' +
        'Under Maliki rules of inheritance, women could inherit — at half the share of male heirs. With father and brothers gone, Mariam and I became the principal heirs to the family wealth. Years of merchant accumulation, a substantial sum, came into our hands.\n\n' +
        'This part matters. Not every corner of the ninth-century Islamic world allowed a woman to dispose of large sums independently. Maliki jurisprudence permitted it; the Idrisid dynasty did not interfere; the qadi (judges) of Fez accepted it. These three conditions had to hold at once before what I did next was possible.\n\n' +
        'Mariam and I talked. What do we do with this money? The conventional options for a wealthy widow or daughter — remarry, buy land, lend at interest, donate to a mosque. We chose the last, but pushed it further. Not donate — build, hands-on.\n\n' +
        'I decided to build a mosque with a teaching function attached. Mariam decided to build a separate mosque called al-Andalus, for the Andalusi community on the west bank. Two mosques, two sisters, the same period, the same city.',
    },
    deliverGoal: {
      cn: '850s 父 Mohammed + 兄弟相继死。Maliki 法学派允许女性继承 (份额是男性一半)。我和 Mariam 成主要继承人。三条同时成立: Maliki 法 + Idrisid 默认 + Fez qadi 接受——女性能独立处置大笔财产。我决定建清真寺 + 教学;Mariam 建 al-Andalus 清真寺给西岸安达卢西亚人。',
      en: '850s father Mohammed and brothers die. Maliki jurisprudence allowed women to inherit (half a male share). Mariam and I became principal heirs. Three conditions simultaneously: Maliki law, Idrisid acquiescence, Fez qadi acceptance — a woman could dispose of large sums independently. I decided to build a mosque with a teaching wing; Mariam decided to build the al-Andalus mosque for the Andalusi west-bank community.',
    },
    engagementHook: {
      cn: '850s 父和兄弟死,我和 Mariam 继承大笔遗产。Maliki 法允许女性继承。我决定建清真寺 + 学校,Mariam 决定建 al-Andalus 清真寺。下一节:859 动工。',
      en: '850s father and brothers die. Mariam and I inherit. Maliki law permits female inheritance. I decide to build a mosque with a school; Mariam decides to build the al-Andalus mosque. Next: 859 construction begins.',
    },
    expectedLength: '440-490 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — TURN: 859 决定建 al-Qarawiyyin / 命名
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n4',
    type: 'narrative',
    phase: 'turn',
    cosplay: 'Fatima',
    narrativeRef: '§3.8 line 488 859 al-Qarawiyyin 始建 + 命名 Kairouan',
    content: {
      cn:
        '859 年初,我 59 岁。动工那一天我亲自到工地。地点选在 Fez 东岸,Wadi Fez 河边一块买下的地。东岸是 Kairouan 阿拉伯移民区,也就是我家族的同乡群——也是我成年后大半生活的那一岸。\n\n' +
        '我给这座清真寺起名 al-Qarawiyyin——意思是「来自 Kairouan 的人的清真寺」。命名是有意识的: 我不再住 Kairouan,但我和我家族的根在那里。给一座新建筑取一个回望童年故乡的名字——是 9 世纪移民第一代和第二代常做的事。\n\n' +
        '当时我没想着要建一所大学。我想建的是一座供 Kairouan 移民礼拜的清真寺,附带 madrasa (经学院) 让年轻人来读《古兰经》、学 Maliki fiqh (法学)、读阿拉伯文。这种「清真寺 + 学校」的组合,9 世纪在伊斯兰世界很常见——但通常由王朝或男性贵族出资。\n\n' +
        '由一个女商人之女,用自己继承的钱,亲自买地、亲自规划、亲自督工——这一点,9 世纪 Fez 不算革命,但也不寻常。Idrisid 政府不阻止、qadi 同意立 waqf (宗教捐赠基金) 文书、城里居民接受——这就够了。\n\n' +
        '我没想过 1200 年后还有人记得我的名字。',
      en:
        'Early 859 — I was fifty-nine — I went to the construction site on the day work began. The plot was on the east bank of Fez, beside the Wadi Fez river, on land we had bought. The east bank was the Kairouan-immigrant quarter, my family\'s community, the bank where I had lived most of my adult life.\n\n' +
        'I named the mosque al-Qarawiyyin — meaning "the mosque of the people from Kairouan." The naming was deliberate. I no longer lived in Kairouan, but my family\'s root was there. Giving a new building a name that looked back to a childhood city was something first- and second-generation immigrants in the ninth century often did.\n\n' +
        'I was not, at that point, trying to build a university. What I was building was a mosque for the Kairouan immigrant community to pray in, with an attached madrasa (a religious school) where young people could read the Quran, study Maliki fiqh (jurisprudence), and learn Arabic. That mosque-plus-school combination was common in the ninth-century Islamic world — usually funded by dynasties or male nobles.\n\n' +
        'A merchant\'s daughter, using inherited money, buying the land herself, planning the building herself, supervising the construction herself — in ninth-century Fez that was not revolutionary, but it was uncommon. The Idrisid government did not stop me; the qadi approved the waqf (religious endowment) document; the city accepted it. That was enough.\n\n' +
        'I did not imagine anyone twelve hundred years later would remember my name.',
    },
    deliverGoal: {
      cn: '859 初动工。东岸 Wadi Fez 河边,Kairouan 移民区。命名 al-Qarawiyyin (「来自 Kairouan 的人的清真寺」) 纪念家族故乡。当时只想建清真寺 + madrasa (经学院) — 教 Quran + Maliki fiqh + 阿拉伯文。Idrisid 不阻止、qadi 同意 waqf、城里接受。',
      en: 'Early 859 construction begins. East bank, Wadi Fez river, Kairouan immigrant quarter. Named al-Qarawiyyin ("the mosque of the people from Kairouan") in memory of family origin. At the time only a mosque-and-madrasa — teaching Quran, Maliki fiqh, Arabic. Idrisid did not interfere, qadi approved the waqf, the city accepted it.',
    },
    engagementHook: {
      cn: '859 初动工。命名 al-Qarawiyyin 纪念 Kairouan。当时只想建清真寺 + 经学院,不想建大学。下一节:4 年监工 + 建造细节。',
      en: '859 construction begins. Named al-Qarawiyyin after Kairouan. At the time only a mosque-and-school, not a university. Next: four years of personal supervision and construction details.',
    },
    expectedLength: '440-490 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — CRITICAL: 859-861 物理建造 / 4 年监工 ⭐ cross-lens scene
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n5',
    type: 'narrative',
    phase: 'critical',
    cosplay: 'Fatima',
    narrativeRef: '§3.8 building 4 年监工 ⭐ cross-lens visual scene',
    content: {
      cn:
        '建造从 859 持续到大约 863 年,前后大约 4 年。我每天去工地。\n\n' +
        '我亲自挑选石料——Wadi Fez 河滩上能取到的灰白色石灰岩,质地比泥砖耐久。我请的工匠主要是 Fez 本地的安达卢西亚石匠——西岸那群从 Cordoba 来的人——他们带来了 8 世纪安达卢西亚清真寺的拱门和马蹄形门洞样式。建筑的中庭设了一口井,直接打到 Wadi Fez 河的地下水层。\n\n' +
        '据传我斋戒了整个建造期。这条传说也来自 Ibn Abi Zar——可信度不高,但流传很广。我自己的真实日常更可能是: 早晨去工地查进度、看石匠砌拱门、批工程款、跟 qadi 确认 waqf 文书、下午回家继续读《古兰经》和 hadith。\n\n' +
        '建到第 4 年完工时,主清真寺有一个能容纳 22000 人礼拜的大殿——超过 Idrisid 王朝当时 Fez 任何一座建筑。北侧附设 madrasa 区,带教室和宿舍。\n\n' +
        '清真寺的西侧是 Wadi Fez 河——你站在拱门下能听见河水声。这是我亲手挑的位置。建到这里已经看不清当初的小目标——但石头落在地上,水声落在耳里,这就是我留下的事实。',
      en:
        'Construction ran from 859 to about 863, roughly four years. I went to the site every day.\n\n' +
        'I chose the stone myself — pale grey limestone we could quarry from the Wadi Fez riverbed, more durable than mud brick. The masons I hired were mostly Andalusi craftsmen from the west bank, the community out of Cordoba. They brought eighth-century Andalusi arch shapes — the horseshoe arch, the deep doorway. The courtyard centered on a well that reached down to the river\'s groundwater layer.\n\n' +
        'Tradition says I fasted for the entire building period. That comes from Ibn Abi Zar too — low credibility, widely repeated. My actual day was probably more ordinary: morning at the site checking progress, watching masons set arches, approving payments, confirming waqf documents with the qadi; afternoon at home, continuing my reading in Quran and hadith.\n\n' +
        'By the time the building was finished, the main mosque held a prayer hall for around twenty-two thousand people — larger than anything else in Idrisid Fez at the time. The north side had the madrasa wing, with classrooms and lodgings.\n\n' +
        'On the west side ran the Wadi Fez. Stand in one of the arches and you could hear the river. I picked that spot myself. By that point you can\'t see the small original goal — but the stone is on the ground, the water is in your ears, and that is what I left.',
    },
    deliverGoal: {
      cn: '859-863 建 4 年。每天去工地 (Ibn Abi Zar 14c《Rawd al-Qirtas》记,500 年后传说)。Wadi Fez 灰白色石灰岩 + 安达卢西亚石匠 (Cordoba 来) + 马蹄形拱门 + 中庭井打地下水。传说斋戒整个建造期 (Ibn Abi Zar,可信度低)。完工:大殿 22000 人 + 北侧 madrasa + 西侧紧邻 Wadi Fez 河听水声。',
      en: '859-863 four years construction. Site visits daily (recorded in Ibn Abi Zar\'s 14c Rawd al-Qirtas, 500 years after, part legend). Wadi Fez pale grey limestone, Andalusi masons from Cordoba, horseshoe arches, courtyard well to groundwater. Legend says I fasted the whole period (Ibn Abi Zar, low credibility). When finished: prayer hall for 22,000, north-side madrasa, west wall along Wadi Fez river within hearing.',
    },
    engagementHook: {
      cn: '4 年监工。Wadi Fez 灰白石灰岩 + 安达卢西亚石匠 + 马蹄形拱门。完工大殿 22000 人。Ibn Abi Zar 14c 写斋戒整 4 年传说。下一节:9-11c 课程怎么从 al-Khwarizmi 数学传到这里。',
      en: 'Four years of supervision. Wadi Fez limestone, Andalusi masons, horseshoe arches. Prayer hall for 22,000. Ibn Abi Zar in the 14c records the fasting legend. Next: how 9-11c curriculum carried al-Khwarizmi mathematics into the school.',
    },
    expectedLength: '460-510 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — DEVELOP: 9-11c 课程体系 ⭐ cross-lens (al-Mamun + al-Khwarizmi)
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n6',
    type: 'narrative',
    phase: 'develop',
    cosplay: 'narrator',
    narrativeRef: '§3.8 line 490 + cross-lens al-Mamun Bait al-Hikma + al-Khwarizmi',
    content: {
      cn:
        'Fatima 死后的几代人里,al-Qarawiyyin 慢慢从「清真寺 + 经学院」长成一所更宽的学校。\n\n' +
        '9 到 11 世纪的课程清单里,除了《古兰经》、hadith、Maliki fiqh、阿拉伯文法这些宗教科目,还加进来一批「外来知识」: 数学、天文学、医学、自然哲学。\n\n' +
        '这些科目从哪儿来?——从 Baghdad。\n\n' +
        '34 年前的 825 年,Baghdad Bait al-Hikma (智慧宫) 学者 al-Khwarizmi 写完《Kitab al-Jabr》——algebra (代数) 这个词从这里来。再早 24 年,830 年代 al-Mamun 哈里发主持翻译运动,希腊、波斯、印度文献成批译成阿拉伯文。这些手稿沿着伊斯兰世界的商队路线西传——从 Baghdad 到 Cairo,从 Cairo 到 Kairouan,从 Kairouan 到 Fez。\n\n' +
        '想象一下——al-Khwarizmi 当年在 Baghdad 那张木案前,用芦苇笔蘸黑墨写完《Kitab al-Jabr》最后一页的那一刻。10 年后副本被驼队驮过 5000 公里沙漠 + 山口——经 Cairo、经 Kairouan——最后放在 Fez 我学校的书架上。10 年。一本书。5000 公里。\n\n' +
        '到 10 世纪,al-Qarawiyyin 的数学课已经在用 al-Khwarizmi 的代数文本。天文课用 Ptolemy《Almagest》的阿拉伯译本——al-Mamun 翻译运动的产物。医学课用 al-Razi 和 Ibn Sina 的著作。\n\n' +
        '这是一条很长的传送链: al-Mamun 的钱 + al-Khwarizmi 的笔 + 商队骆驼 + Fatima 859 砌的石头 = 10 世纪 Fez 的孩子能学代数。Fatima 自己不是数学家——她可能根本没读过《Kitab al-Jabr》。但她建的学校,是这条链最后一节。',
      en:
        'In the generations after Fatima\'s death, al-Qarawiyyin slowly grew from a mosque-and-madrasa into something wider.\n\n' +
        'By the ninth-to-eleventh century, the curriculum included not just Quran, hadith, Maliki fiqh, and Arabic grammar — the religious subjects — but also a body of "imported knowledge": mathematics, astronomy, medicine, natural philosophy.\n\n' +
        'Where did these come from? From Baghdad.\n\n' +
        'Thirty-four years before al-Qarawiyyin was founded, in 825, al-Khwarizmi at the Bait al-Hikma (House of Wisdom) in Baghdad finished his Kitab al-Jabr — the book that gave Europe the word algebra. Earlier still, in the 830s, the caliph al-Mamun ran a translation movement that turned Greek, Persian, and Indian texts into Arabic by the wagonload. These manuscripts traveled west along the caravan routes — Baghdad to Cairo, Cairo to Kairouan, Kairouan to Fez.\n\n' +
        'Picture this. al-Khwarizmi, in Baghdad, at his wooden writing desk, dipping a reed pen in black ink, finishing the last page of Kitab al-Jabr. Ten years later a copy of that book is loaded onto a caravan, ridden five thousand kilometers across desert and mountain pass — through Cairo, through Kairouan — and set down on a shelf at my school in Fez. Ten years. One book. Five thousand kilometers.\n\n' +
        'By the tenth century, al-Qarawiyyin\'s mathematics class was using al-Khwarizmi\'s algebra. Its astronomy class used the Arabic Ptolemy — Almagest — produced by al-Mamun\'s translation movement. Its medicine class used al-Razi and Ibn Sina.\n\n' +
        'It is a long chain. Al-Mamun\'s money plus al-Khwarizmi\'s pen plus camel caravans plus the stones Fatima laid in 859 equals: a child in tenth-century Fez learning algebra. Fatima herself was no mathematician — she likely never read Kitab al-Jabr. But the school she built was the last link in that chain.',
    },
    deliverGoal: {
      cn: '9-11c 课程从「清真寺 + 经学院」长成更宽: 古兰经 + hadith + Maliki fiqh + 阿拉伯文法 + 数学 + 天文 + 医学 + 自然哲学。外来知识从 Baghdad 来——al-Khwarizmi 825《Kitab al-Jabr》(34 年前) + al-Mamun 830s 翻译运动。商队 Baghdad→Cairo→Kairouan→Fez。10c al-Qarawiyyin 数学用 al-Khwarizmi、天文用 Ptolemy 阿拉伯译本、医学用 al-Razi + Ibn Sina。Fatima 不是数学家但她建的学校是这条链最后一节。',
      en: '9-11c curriculum widens from mosque-and-madrasa: Quran, hadith, Maliki fiqh, Arabic grammar plus mathematics, astronomy, medicine, natural philosophy. Imported knowledge came from Baghdad — al-Khwarizmi 825 Kitab al-Jabr (34 years earlier) plus al-Mamun 830s translation movement. Caravans Baghdad-Cairo-Kairouan-Fez. By 10c al-Qarawiyyin\'s math used al-Khwarizmi, astronomy the Arabic Ptolemy, medicine al-Razi and Ibn Sina. Fatima was no mathematician but her school was the last link in the chain.',
    },
    engagementHook: {
      cn: '9-11c 课程加进数学 + 天文 + 医学 + 哲学。来自 Baghdad: al-Khwarizmi 825 + al-Mamun 830s 翻译运动→沿商队西传到 Fez。Fatima 不是数学家但她建的学校教这些。下一节:11-13c 黄金时代,Pope + Maimonides + Ibn Khaldun。',
      en: '9-11c the curriculum adds math, astronomy, medicine, philosophy. From Baghdad: al-Khwarizmi 825 plus al-Mamun 830s translation movement, traveling west by caravan to Fez. Fatima no mathematician but her school taught these. Next: 11-13c golden age, Pope Sylvester II, Maimonides, Ibn Khaldun.',
    },
    expectedLength: '460-510 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — DEVELOP: 11-13c 黄金时代 (Pope Sylvester II + Maimonides + Ibn Khaldun)
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n7',
    type: 'narrative',
    phase: 'develop',
    cosplay: 'narrator',
    narrativeRef: '§3.8 line 491 黄金时代 + cross-civilizational visitors',
    content: {
      cn:
        '11 到 13 世纪——Fatima 死后 200 到 400 年——al-Qarawiyyin 是北非最重要的学术中心。\n\n' +
        '999 到 1003 年,法国 Auvergne 一个叫 Gerbert of Aurillac 的神职人员在西班牙安达卢西亚一带学阿拉伯数学——他在 al-Qarawiyyin 学过。返回欧洲后,他把阿拉伯数字 (今天通行的 0-9) 引进西方,然后做了 Pope (教皇),改名 Sylvester II。一个法国人,9 世纪 Fatima 用突尼斯继承的钱在摩洛哥建的学校里学算术——10 世纪末成为罗马教皇——把阿拉伯数字带回基督教欧洲。\n\n' +
        '12 世纪后期,西班牙犹太哲学家 Maimonides——《迷途指津》的作者——逃避 Almohad 王朝迫害,在 Fez 住过几年,期间在 al-Qarawiyyin 出入。他后来去 Cairo 当 Saladin 苏丹的御医。\n\n' +
        '14 世纪,北非历史学家 Ibn Khaldun——《Muqaddimah》的作者、世界上第一个写「社会学方法」的人——在 al-Qarawiyyin 受过基础教育。\n\n' +
        'Pope + 犹太哲人 + Arab 历史学家——三大文明的代表人物,都从 Fatima 859 留下的拱门下走过。\n\n' +
        '这种「跨文明 funnel」在中世纪极少。Bologna 1088 没有这样的访客名单——它建得太晚,而且 11 世纪欧洲基督教大学不收 Muslim 也不收 Jewish 学生。Fatima 9 世纪建的这所,把 Pope 和 Maimonides 同时装进去——是 11-13 世纪伊斯兰世界知识开放性的一个 snapshot。',
      en:
        'In the eleventh through thirteenth centuries — two to four hundred years after Fatima\'s death — al-Qarawiyyin was the most important academic center in North Africa.\n\n' +
        'From 999 to 1003, a French cleric from Auvergne named Gerbert of Aurillac studied Arab mathematics in Andalusia, including time at al-Qarawiyyin. When he returned to Europe he carried Arabic numerals (the 0-9 we now use everywhere) into the West, then became Pope as Sylvester II. A Frenchman who learned arithmetic at a school built by Fatima with Tunisian inherited money in ninth-century Morocco — and ended up Pope of Rome and bringing Arabic numerals into Christian Europe.\n\n' +
        'In the late twelfth century, the Spanish-Jewish philosopher Maimonides — author of the Guide for the Perplexed — fled Almohad persecution, lived in Fez for several years, and frequented al-Qarawiyyin. He later went to Cairo as Saladin\'s personal physician.\n\n' +
        'In the fourteenth century, the North African historian Ibn Khaldun — author of the Muqaddimah, the first writer of what we now call sociological method — was educated at al-Qarawiyyin in his youth.\n\n' +
        'A Pope, a Jewish philosopher, an Arab historian — three civilizations\' great figures all walked under arches Fatima had laid in 859.\n\n' +
        'A cross-civilizational funnel like that is rare in the medieval record. Bologna in 1088 had no comparable visitor list — it was founded too late, and in any case eleventh-century European Christian universities admitted neither Muslims nor Jews. The school Fatima founded in the ninth century held a Pope and Maimonides at the same address — a snapshot of how open Islamic-world knowledge was in the eleventh through thirteenth centuries.',
    },
    deliverGoal: {
      cn: '11-13c 黄金时代,北非最重要学术中心。Gerbert of Aurillac 999-1003 在 al-Qarawiyyin 学阿拉伯数学,后做 Pope Sylvester II,把阿拉伯数字带回基督教欧洲。12c 后期 Maimonides 逃 Almohad 在 Fez 几年。14c Ibn Khaldun 早年在 al-Qarawiyyin 受教育。Pope + 犹太哲人 + Arab 历史学家三文明都从 Fatima 859 拱门下走过。Bologna 1088 不收 Muslim/Jewish。',
      en: '11-13c golden age, most important academic center in North Africa. Gerbert of Aurillac 999-1003 studied Arabic math at al-Qarawiyyin, became Pope Sylvester II, brought Arabic numerals to Christian Europe. Late 12c Maimonides fled Almohads, lived in Fez. 14c Ibn Khaldun received early education at al-Qarawiyyin. Pope, Jewish philosopher, Arab historian — three civilizations through Fatima\'s 859 arches. Bologna 1088 admitted neither Muslims nor Jews.',
    },
    engagementHook: {
      cn: '11-13c 黄金时代。Gerbert 999-1003 学 → Pope Sylvester II 把阿拉伯数字带回欧洲。Maimonides 12c 来过。Ibn Khaldun 14c 受教育。三文明都过 Fatima 859 拱门。下一节:史料缺口——我们怎么知道 Fatima?',
      en: '11-13c golden age. Gerbert 999-1003 learns there, becomes Pope Sylvester II, brings Arabic numerals back to Europe. Maimonides 12c stays. Ibn Khaldun 14c educated there. Three civilizations under Fatima\'s 859 arches. Next: source gap — how do we know Fatima at all?',
    },
    expectedLength: '460-510 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — REFLECT: 史料缺口 ⭐ careful framing (历史"被遮蔽女性")
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n8',
    type: 'narrative',
    phase: 'reflect',
    cosplay: 'narrator',
    narrativeRef: '§3.8 史料缺口 + Ibn Abi Zar 14c《Rawd al-Qirtas》',
    content: {
      cn:
        '现在停一下。你需要面对一个问题: 我们对 Fatima al-Fihri 个人,到底知道多少?\n\n' +
        '答案是: 知道得很少。\n\n' +
        '主要史料是 Ibn Abi Zar 写的《Rawd al-Qirtas》,14 世纪初,大约 1320 年代,距 Fatima 859 建校 460 多年、距她 880 年去世 440 多年。这本书一半是历史一半是地方传说。Fatima 出生年份不确,史家估「约 800」是基于建校时她应该已成年。她什么时候死、葬在哪,也是 Ibn Abi Zar 14 世纪记的——可信度有限。她的母亲叫什么,丈夫是谁,有没有子女,基本没记。\n\n' +
        '我们对她的「事实」(building)知道得很多——主清真寺还在、22000 人大殿还能进去看、4 年监工的故事流传——但对她的「人」(person)几乎一无所知。\n\n' +
        '这是历史学的一个老问题: 9 世纪一个女人建了一座一千多年还在运行的大学——但她本人作为「有性格、有日常、有童年记忆、有失败时刻」的活人——基本被遮蔽。Idrisid 没有给她立传,Maliki 史官没有写她的列传,后世 Ibn Abi Zar 写她也是写「她做的事」不是「她这个人」。\n\n' +
        '机构留下名字 + 遗产,个人故事消失——这是 receiving-end 女性在历史里的典型 pattern。Anacaona Jr 这种 Aisha 1413 这种是因为没记录,Fatima 是因为只记她做的事不记她本人。两种「没声音」,不一样,但结果接近。',
      en:
        'Pause here. You need to face one question: how much do we actually know about Fatima al-Fihri as a person?\n\n' +
        'The answer is: very little.\n\n' +
        'The main source is Ibn Abi Zar\'s Rawd al-Qirtas, written in the early fourteenth century, around the 1320s, roughly 460 years after Fatima\'s 859 founding and 440 years after her 880 death. The book is part history and part local legend. Her birth year is uncertain; historians estimate "around 800" by working backward from her age at construction. When she died, where she was buried — also recorded by Ibn Abi Zar in the fourteenth century, of limited reliability. Her mother\'s name, whether she married, whether she had children: essentially not recorded.\n\n' +
        'We know a great deal about what she did. The mosque stands. The 22,000-capacity prayer hall is still there. The four-year supervision story has traveled. But of her as a person — temperament, daily life, childhood memory, moments of failure — we know almost nothing.\n\n' +
        'This is a familiar problem in historical writing. A ninth-century woman founded a university that has run for over a thousand years — but the living person, with personality and routine and remembered childhood and lost battles, is largely erased. The Idrisids did not commission a biography. Maliki chroniclers did not write her into the standard biographical dictionaries. When Ibn Abi Zar finally wrote her down four hundred years later, he wrote what she did, not who she was.\n\n' +
        'The institution keeps the name and the legacy. The person disappears. That is the typical receiving-end pattern for women in the historical record. Anacaona Jr or the composite Aisha of 1413 stand in for the unrecorded; Fatima is something different — what she did is recorded, who she was is not. Two kinds of silence, not the same, but close in effect.',
    },
    deliverGoal: {
      cn: '我们对 Fatima 知道得少。主要史料 Ibn Abi Zar《Rawd al-Qirtas》14c 初(1320s),距 Fatima 460 年,半历史半传说。出生年份估「约 800」是建校时倒推。母亲名字、丈夫、子女——基本没记。我们知道她「做的事」很多但「她这个人」几乎一无所知。机构留名字 + 遗产,个人故事消失——receiving-end 女性典型 pattern。两种「没声音」: Anacaona Jr/Aisha 1413 没记录,Fatima 只记事不记人。',
      en: 'We know little about Fatima personally. Main source Ibn Abi Zar\'s Rawd al-Qirtas, early 14c (1320s), 460 years after, part history part legend. Birth year "around 800" estimated by working back from construction. Mother\'s name, husband, children — essentially not recorded. We know much of what she did, almost nothing of who she was. Institution keeps the name and legacy, the person disappears — typical receiving-end pattern for women. Two silences: Anacaona Jr / Aisha 1413 unrecorded, Fatima recorded as deeds not as person.',
    },
    engagementHook: {
      cn: '我们对 Fatima 个人知道少。主史料 Ibn Abi Zar 14c《Rawd al-Qirtas》距她 460 年,半传说。出生年份是建校倒推。机构留名字,人消失——receiving-end 女性典型。下一节:1985 才收女学生 + 2014 dirham 纪念。',
      en: 'We know little of Fatima as a person. Main source Ibn Abi Zar\'s 14c Rawd al-Qirtas, 460 years after, part legend. Birth year inferred from construction. Institution keeps the name, person disappears — typical receiving-end. Next: 1985 first admitted women, 2014 dirham commemoration.',
    },
    expectedLength: '480-530 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — REFLECT: 21c 重新评价 ⭐ careful (1985 才收女学生)
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n9',
    type: 'narrative',
    phase: 'reflect',
    cosplay: 'narrator',
    narrativeRef: '§3.8 line 495 + 1985 现代化 + 2014 dirham 纸币',
    content: {
      cn:
        '20 到 21 世纪,al-Qarawiyyin 走过两个重要的现代化节点。\n\n' +
        '1947 年,摩洛哥还是法国保护国时,al-Qarawiyyin 课程开始正式纳入现代学科。1963 年摩洛哥独立后,al-Qarawiyyin 被纳入国家高等教育体系。\n\n' +
        '1985 年——Fatima 859 建校 1126 年之后——al-Qarawiyyin 第一次正式收女学生。\n\n' +
        '停一下。你需要坐 30 秒。\n\n' +
        '一所女人 9 世纪用自己的钱建的大学,运营了 1126 年才让女学生进来。Fatima 自己读得过《古兰经》、能唱 hadith、亲手监工——但她建的这所学校,从她死后到 1985 年,女性不能正式入学。这中间有 1100 多年。\n\n' +
        '这不是浪漫的故事。我不打算让你「庆祝」Fatima。我也不打算让你「同情」她。我打算让你看清: 一个机构能活 1100 年,跟它一直对建它的人保持平等,是两件事。一个建立者的性别,跟这个机构后续怎么对待这个性别的人,也是两件事。\n\n' +
        '2014 年,摩洛哥发行 200 dirham (摩洛哥货币) 纸币,Fatima al-Fihri 的名字印在上面——是摩洛哥第一张以女性命名的纸币。Bologna 那张纸币——意大利没发过这种。Oxford——英国镑也没发过这种。\n\n' +
        '机构活下来。荣誉迟到 1100 年。这是 21 世纪我们看 Fatima 的角度。',
      en:
        'In the twentieth and twenty-first centuries, al-Qarawiyyin passed through two important modernizing moments.\n\n' +
        'In 1947, while Morocco was still a French protectorate, al-Qarawiyyin\'s curriculum was formally integrated with modern subjects. After Moroccan independence in 1963, the institution joined the national higher-education system.\n\n' +
        'In 1985 — 1,126 years after Fatima built it — al-Qarawiyyin admitted its first formal female students.\n\n' +
        'Pause. Sit with that for thirty seconds.\n\n' +
        'A university a woman built with her own money in the ninth century operated for 1,126 years before it admitted women students. Fatima herself read the Quran, recited hadith, supervised the construction in person — and the school she built, from her death to 1985, did not formally enroll women. That is more than eleven hundred years.\n\n' +
        'This is not a romantic story. I am not asking you to celebrate Fatima. I am not asking you to pity her. I am asking you to see clearly: an institution lasting 1,100 years, and that institution treating women equally throughout, are two different things. The gender of a founder and how the institution later treats people of that gender are also two different things.\n\n' +
        'In 2014, Morocco issued a 200-dirham banknote with Fatima al-Fihri\'s name printed on it — the first Moroccan banknote named after a woman. Bologna does not have one. Oxford does not have one. Italy and the UK have not issued such a note for their oldest universities\' founders.\n\n' +
        'The institution survives. The honor arrives eleven hundred years late. That is how the twenty-first century looks at Fatima.',
    },
    deliverGoal: {
      cn: '20-21c 两次现代化: 1947 法国保护国时课程纳入现代学科,1963 独立后入国家高等教育体系。1985 (建校 1126 年后) 第一次正式收女学生——careful framing 不浪漫化。机构活 1100 年 ≠ 一直对建它的人保持平等。2014 摩洛哥发 200 dirham 纸币——第一张以女性命名的纸币。Bologna/Oxford 没有同等纸币。荣誉迟到 1100 年。',
      en: '20-21c two modernizing moments: 1947 under French protectorate curriculum integrates modern subjects, 1963 after independence joins national higher-ed. 1985 (1,126 years after founding) first formally admits women — careful, not romanticized. An institution lasting 1,100 years ≠ treating women equally throughout. 2014 Morocco issues 200-dirham banknote — first Moroccan banknote named after a woman. Bologna and Oxford lack the equivalent. Honor 1,100 years late.',
    },
    engagementHook: {
      cn: '1985 (建校 1126 年后) 第一次收女学生。Fatima 9c 用自己钱建,1100 年禁女。坐 30 秒——机构活 1100 年 ≠ 平等。2014 摩洛哥 200 dirham 第一张女性纸币。下一节:880 Fatima 死,葬在 al-Qarawiyyin 内。',
      en: '1985 (1,126 years after founding) first admits women. Fatima built it with her own money in the 9c, women banned for 1,100 years. Sit thirty seconds — institution lasting 1,100 years ≠ equality. 2014 Morocco 200 dirham, first banknote named for a woman. Next: 880 Fatima dies, buried within al-Qarawiyyin.',
    },
    expectedLength: '480-530 字 CN + careful framing',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — RESOLVE: 880 Fatima 死 / 葬于 al-Qarawiyyin 内
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n10',
    type: 'narrative',
    phase: 'resolve',
    cosplay: 'Fatima',
    narrativeRef: '§3.8 880 Fatima 死估算 + 葬于 al-Qarawiyyin',
    content: {
      cn:
        '我大约 880 年去世——具体年份史书也不确,Ibn Abi Zar 14 世纪估算的。我那时大约 80 岁。\n\n' +
        '葬在哪儿——传说葬在 al-Qarawiyyin 清真寺的院落里。具体墓址今天看不到——1100 多年里建筑反复扩建、加建、重修,我的墓如果在原位,早被覆盖在层层建筑下面。这就是 9 世纪一个普通女商人之女的下场: 你建的东西活下来,你的墓地连标记都没留。\n\n' +
        '建校到我死之间,有 21 年。这 21 年我看着自己 59 岁动工的清真寺从一片工地变成 Fez 的精神中心。我看着第一批 madrasa 的学生开始读《古兰经》。我看着妹妹 Mariam 的 al-Andalus 清真寺也建起来,西岸住户去那儿礼拜。\n\n' +
        '我没看到的——al-Khwarizmi 的代数进入我的学校 (那是 10 世纪的事)、Pope Sylvester II 在 999 年来这里学算术 (那是 140 年后)、Maimonides 12 世纪逃来 Fez (那是 320 年后)、2014 年摩洛哥用我的名字印纸币 (那是 1134 年后)。\n\n' +
        '这都是我死后的事。880 年我合上眼睛的时候,只看到一座 21 年前还是空地、现在 22000 人能在里面礼拜的清真寺。\n\n' +
        '一个建筑物。这就是我留下的全部——也是我能留的全部。',
      en:
        'I died around the year 880 — the exact year is not certain, estimated by Ibn Abi Zar in the fourteenth century. I was about eighty.\n\n' +
        'Where I am buried — tradition says I was laid in the courtyard of al-Qarawiyyin itself. The exact grave is not visible today. Over 1,100 years the building has been expanded, rebuilt, renovated repeatedly. If my grave is still in its original spot, it lies under layer upon layer of later construction. That is the ordinary fate of a ninth-century merchant\'s daughter: what you built outlives you, your grave is not even marked.\n\n' +
        'Twenty-one years between the founding and my death. In that time I watched a mosque I started at fifty-nine grow from a building site into the spiritual center of Fez. I watched the first madrasa students begin reading the Quran. I watched my sister Mariam\'s al-Andalus mosque rise across the river, the west-bank households going there to pray.\n\n' +
        'What I did not see — al-Khwarizmi\'s algebra entering my school (that was the tenth century), Pope Sylvester II coming to study arithmetic in 999 (that was 140 years later), Maimonides fleeing to Fez in the twelfth century (320 years later), Morocco printing my name on a banknote in 2014 (1,134 years later).\n\n' +
        'All of that came after I was gone. When I closed my eyes in 880, I saw a mosque that twenty-one years earlier had been empty land, and where now twenty-two thousand people could pray.\n\n' +
        'One building. That is everything I left — and everything I could leave.',
    },
    deliverGoal: {
      cn: '约 880 死 (Ibn Abi Zar 14c 估算),约 80 岁。传葬 al-Qarawiyyin 院落,但 1100 年扩建覆盖,今天看不到。建校到死有 21 年,看 22000 人大殿成为 Fez 精神中心 + 第一批 madrasa 学生 + Mariam al-Andalus 清真寺。没看到: al-Khwarizmi 数学进课程、Pope Sylvester II 999、Maimonides 12c、2014 dirham 纸币。880 我看到的: 21 年前空地变成现在的清真寺。一个建筑物——全部。',
      en: 'Died around 880 (Ibn Abi Zar\'s 14c estimate), about 80. Tradition: buried in al-Qarawiyyin courtyard, but 1,100 years of expansion has covered it, not visible today. 21 years from founding to death — saw 22,000-capacity prayer hall become Fez\'s spiritual center, first madrasa students, Mariam\'s al-Andalus mosque rise. Did not see: al-Khwarizmi math entering the curriculum, Pope Sylvester II in 999, Maimonides 12c, the 2014 dirham. In 880 I saw: empty ground 21 years earlier, now a mosque. One building — all I left.',
    },
    engagementHook: {
      cn: '约 880 死 80 岁。葬 al-Qarawiyyin 院落,1100 年扩建覆盖看不到。21 年看大殿建起来。没看到 al-Khwarizmi 代数 + Pope Sylvester II + Maimonides + 2014 dirham。一个建筑物——全部。下一节:reflection,机构 vs 个人。',
      en: 'Died around 880 at 80. Buried in al-Qarawiyyin courtyard, 1,100 years of expansion has covered it. 21 years to see the hall built. Did not see al-Khwarizmi algebra, Pope Sylvester II, Maimonides, 2014 dirham. One building — all. Next: reflection, institution vs person.',
    },
    expectedLength: '460-510 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N11 — SYNTHESIS: female-knowledge-carrier + 机构 vs 个人 trade-off
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n11',
    type: 'narrative',
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: 'female-knowledge-carrier synthesis + 机构 vs 个人 trade-off',
    content: {
      cn:
        '你跟 Fatima 走了 80 年——从 800 年 Kairouan 童年,到 880 年 Fez al-Qarawiyyin 院落里那座没标记的墓。\n\n' +
        '现在停一下,坐 30 秒,跟自己谈一个问题。\n\n' +
        '——\n\n' +
        '1200 年后她建的大学还在,21 世纪还在招生。但她个人的生活——母亲叫什么、有没有结婚、有没有孩子、最快乐的一天是哪天、最后悔的事是什么——史书几乎没有。我们知道她「做了什么」很多,知道「她是谁」几乎一无所知。\n\n' +
        '这种「机构留下名字 + 遗产,但个人故事消失」是 receiving-end 女性在历史记录里的典型 pattern。Aisha 1413 那种是「事和人都消失」,Anacaona Jr 那种是「连名字都没留」,Fatima 是「事记下来人没记」——三种不同的「没声音」。\n\n' +
        '——\n\n' +
        '现在轮到你想 30 秒。问题没标准答案,你需要自己想清楚。\n\n' +
        '问题是: 如果你必须二选一——\n\n' +
        '(A) 你的个人故事被记下来——童年、性格、失败、爱情、最后悔的事——但你做的事很快被遗忘。\n\n' +
        '(B) 你做的事影响 1200 年——但你这个人作为一个有性格的活人,几乎不留痕迹。\n\n' +
        '你选哪个?为什么?\n\n' +
        '想 30 秒。再回答。',
      en:
        'You walked eighty years with Fatima — from a childhood in Kairouan in 800 to an unmarked grave in the courtyard of al-Qarawiyyin in 880.\n\n' +
        'Pause now. Sit with this for thirty seconds. Ask yourself one question.\n\n' +
        '——\n\n' +
        'Twelve hundred years later the university she built is still there, still enrolling students in the twenty-first century. But her personal life — her mother\'s name, whether she married, whether she had children, which day of her life was happiest, what she most regretted — the chronicles do not say. We know much about what she did, almost nothing about who she was.\n\n' +
        '"The institution keeps the name and legacy; the person disappears" is the typical receiving-end pattern for women in the historical record. Aisha 1413 represents "deeds and person both vanish." Anacaona Jr represents "even the name was not preserved." Fatima represents "deeds are recorded, person is not." Three different kinds of silence.\n\n' +
        '——\n\n' +
        'Now you sit for thirty seconds. There is no standard answer. You need to think this through yourself.\n\n' +
        'The question is: if you had to choose one of two —\n\n' +
        '(A) Your personal story is preserved — your childhood, your personality, your failures, your loves, your deepest regrets — but the things you accomplished are quickly forgotten.\n\n' +
        '(B) The things you accomplished shape the next 1,200 years — but you as a living person with a personality leave almost no trace.\n\n' +
        'Which would you choose? Why?\n\n' +
        'Think for thirty seconds. Then answer.',
    },
    deliverGoal: {
      cn: '走 80 年从 800 Kairouan 到 880 al-Qarawiyyin 无标记墓。1200 年后大学还在,但她个人生活几乎没记。「机构留名字 + 遗产,个人故事消失」是 receiving-end 女性典型。三种「没声音」: Aisha 1413 事和人都消失 / Anacaona Jr 连名字都没留 / Fatima 事记下人没记。问题(A)个人故事被记但事被忘 vs (B)事影响 1200 年但人没痕迹——你选哪个?想 30 秒。',
      en: 'Walked 80 years from 800 Kairouan to 880 unmarked al-Qarawiyyin grave. University still here 1,200 years later, her personal life mostly unrecorded. "Institution keeps the name and legacy, person disappears" — typical receiving-end pattern. Three silences: Aisha 1413 deeds and person both vanish, Anacaona Jr name not preserved, Fatima deeds recorded but not person. Question (A) personal story preserved but deeds forgotten vs (B) deeds shape 1,200 years but person leaves no trace — which would you choose? Think 30 seconds.',
    },
    engagementHook: {
      cn: '机构活 1200 年,个人没声音——receiving-end 女性典型。三种「没声音」对照。问题: (A) 故事被记事被忘 vs (B) 事 1200 年但人没痕迹——你选哪个?想 30 秒。',
      en: 'Institution lasts 1,200 years, person silent — typical receiving-end. Three silences compared. Question: (A) story preserved deeds forgotten vs (B) deeds for 1,200 years but no person — which? Think 30 seconds.',
    },
    expectedLength: '480-530 字 CN + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META: closing — 你的大学跟 Fatima 859 Fez 的连续性 ⭐
  // ═══════════════════════════════════════════════════
  {
    id: 'fatima-n12',
    type: 'narrative',
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§3.8 line 498 + 1825 Q4 你的大学连续性',
    content: {
      cn:
        '你跟一个 9 世纪 13 岁在 Kairouan 读《古兰经》、20 多岁迁 Fez、59 岁监工砌石头、80 岁葬在一座没有标记的墓里的女人——走过了 80 年。最后一节,我们把镜头拉到现在。\n\n' +
        'al-Qarawiyyin 859 至今——2026 年——已经连续运营 1167 年。Guinness 世界纪录认证它是世界最古老的连续运营大学。UNESCO 也以 859 为其建校年。\n\n' +
        '比较一下:\n\n' +
        'Bologna 1088 年建,比 al-Qarawiyyin 晚 229 年。\n\n' +
        'Oxford 大约 1096 年建,比 al-Qarawiyyin 晚 237 年。\n\n' +
        'Paris 大学 12 世纪初,比 al-Qarawiyyin 晚约 250 年。\n\n' +
        'Harvard 1636 年,比 al-Qarawiyyin 晚 777 年——快 800 年。\n\n' +
        '你 21 世纪上的任何一所大学——哪一所最古?跟 Fatima 859 在 Fez 那座清真寺学校,有没有什么真实的连续性?\n\n' +
        '——\n\n' +
        '现实点想这个问题。al-Qarawiyyin 1100 多年里改过课程、停过一阵又重启、1985 才收女学生、2010 才完全数字化图书馆。它不是「冻在 9 世纪」的活化石——它是「不断更新但建筑根基没换过」的实体。\n\n' +
        '北宋以后的中国书院,改朝换代多次停办或重建。欧洲大多数中世纪大学,在宗教改革或法国大革命被打断过。al-Qarawiyyin 是少数几所跨越文明剧变还在招生的机构。\n\n' +
        '——\n\n' +
        '一个真问题——「保存」一所机构 1100 年,跟「创新」一所新大学,哪种更难?为什么?\n\n' +
        '没有标准答案。你需要自己想清楚。准备记忆考核?',
      en:
        'You walked 80 years with a woman who, in the ninth century, read the Quran at thirteen in Kairouan, moved to Fez in her twenties, oversaw masons laying stone at fifty-nine, and was buried at eighty in an unmarked grave. For the last section, pull the camera back to now.\n\n' +
        'Al-Qarawiyyin from 859 to 2026 has run continuously for 1,167 years. Guinness World Records lists it as the oldest continuously operating university. UNESCO also dates the founding to 859.\n\n' +
        'Compare:\n\n' +
        'Bologna founded 1088 — 229 years later than al-Qarawiyyin.\n\n' +
        'Oxford founded around 1096 — 237 years later than al-Qarawiyyin.\n\n' +
        'The University of Paris, early twelfth century — about 250 years later than al-Qarawiyyin.\n\n' +
        'Harvard founded 1636 — 777 years later than al-Qarawiyyin, nearly eight hundred years.\n\n' +
        'Whatever university you might attend in the twenty-first century — which is oldest? Is there any real continuity with the mosque-school Fatima built in Fez in 859?\n\n' +
        '——\n\n' +
        'Think realistically. Al-Qarawiyyin has changed its curriculum across 1,100 years, paused and restarted, did not formally admit women until 1985, did not fully digitize its library until the 2010s. It is not a "frozen ninth-century artifact" — it is "an institution that keeps changing while the architectural root is not replaced."\n\n' +
        'Chinese post-Song academies often closed or were rebuilt across dynastic changes. Most medieval European universities were interrupted by the Reformation or the French Revolution. Al-Qarawiyyin is among the few institutions that have continued enrolling students across major civilizational upheavals.\n\n' +
        '——\n\n' +
        'A real question — preserving an institution for 1,100 years, or founding a new university — which is harder? Why?\n\n' +
        'No standard answer. You have to think it through yourself. Ready for the mastery check?',
    },
    deliverGoal: {
      cn: 'al-Qarawiyyin 859→2026 连续 1167 年,Guinness + UNESCO 认证最古连续运营大学。Bologna 1088 晚 229 年,Oxford ~1096 晚 237 年,Paris 12c 初晚 250 年,Harvard 1636 晚 777 年。21c 你的大学哪所最古?有什么连续性?al-Qarawiyyin 改过课程、1985 才收女、2010 数字化——「不断更新但根基没换」。北宋以后中国书院 + 欧洲中世纪大学多次中断。问题: 「保存」1100 年 vs「创新」新大学哪种更难?',
      en: 'Al-Qarawiyyin 859 to 2026 = 1,167 continuous years, Guinness and UNESCO recognized as oldest continuously operating university. Bologna 1088, 229 years later; Oxford c. 1096, 237 years later; Paris early 12c, 250 years later; Harvard 1636, 777 years later. In 21c which of your universities is oldest? Any continuity? Al-Qarawiyyin changed curriculum, admitted women only 1985, digitized 2010 — "always updating but root unchanged." Post-Song Chinese academies and medieval European universities interrupted many times. Question: preserving 1,100 years vs founding new — which harder?',
    },
    engagementHook: {
      cn: 'al-Qarawiyyin 1167 年。Bologna 1088 晚 229,Oxford ~1096 晚 237,Harvard 1636 晚 777。你的大学哪所最古?「保存」1100 年 vs「创新」新大学哪种更难?想 30 秒。准备考核?',
      en: 'Al-Qarawiyyin 1,167 years. Bologna 1088 = 229 later, Oxford c.1096 = 237 later, Harvard 1636 = 777 later. Which of your universities is oldest? Preserving 1,100 years vs founding new — which harder? Think 30 seconds. Ready for mastery check?',
    },
    expectedLength: '500-560 字 CN closing + 真问题',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lens (Fatima al-Fihri 顶层包装)
// ═══════════════════════════════════════════════════

export var fatimaAlFihriLens = {
  id: 'fatima-al-fihri',
  icon: '📖',
  name: { en: 'Fatima al-Fihri', cn: '法蒂玛·菲赫里' },
  nameCn: '法蒂玛·菲赫里 (al-Qarawiyyin 大学创办者)',
  role: {
    cn: 'Islamic Rise 800-880 摩洛哥 Fez / receiving-end / female-knowledge-carrier (女性知识载体) 视角',
    en: 'Islamic Rise 800-880 Morocco Fez / receiving-end / female-knowledge-carrier lens',
  },
  description: {
    cn: '你是 Fatima al-Fihri,约 800 年生于 Kairouan (今突尼斯,Aghlabid 王朝首都),约 820 年代家族迁 Fez (摩洛哥 Idrisid 王朝首都,Idris II 808 建)。850 年代父亲 Mohammed 和兄弟相继去世,你和妹妹 Mariam 按 Maliki 法学派继承大笔遗产——9 世纪伊斯兰世界少数允许女性独立处置财产的法系之一。859 年 (你 59 岁) 你用遗产建 al-Qarawiyyin 清真寺 + madrasa (经学院),命名取自家族故乡 Kairouan;妹妹 Mariam 同时建 al-Andalus 清真寺给 Fez 西岸安达卢西亚移民。你亲自买地、亲自督工 4 年、亲自挑灰白石灰岩、亲自跟安达卢西亚石匠对接。9-11 世纪 al-Qarawiyyin 课程从清真寺 + 经学院长成更宽——加进 al-Khwarizmi 825《Kitab al-Jabr》代数 + al-Mamun 830s 翻译运动产物的天文医学哲学。11-13 世纪黄金时代——Pope Sylvester II (Gerbert of Aurillac, 999-1003) 来这里学阿拉伯数字,Maimonides 12 世纪逃 Almohad 在 Fez 几年期间出入这里,Ibn Khaldun 14 世纪早年受教育这里。约 880 年你去世 (Ibn Abi Zar 14 世纪估算),葬 al-Qarawiyyin 院落但今天看不到。1985 (建校 1126 年后) al-Qarawiyyin 才正式收女学生;2014 摩洛哥发 200 dirham 纸币——第一张以女性命名的摩洛哥纸币。Guinness 认证 al-Qarawiyyin 是世界最古连续运营大学——比 Bologna 1088 早 229 年、比 Oxford 1096 早 237 年、比 Harvard 1636 早 777 年。',
    en: 'You are Fatima al-Fihri, born around 800 in Kairouan (today\'s Tunisia, capital of the Aghlabid dynasty), moving with your family to Fez in the 820s (capital of the Moroccan Idrisid dynasty, founded 808 by Idris II). In the 850s your father Mohammed and brothers died, leaving you and your sister Mariam to inherit substantial wealth under Maliki jurisprudence — one of few ninth-century Islamic legal traditions allowing women to dispose of large sums independently. In 859 (you were 59) you used the inheritance to build the al-Qarawiyyin mosque-and-madrasa, named for the family\'s home of Kairouan; Mariam concurrently built the al-Andalus mosque for the Andalusi west-bank community. You bought the land yourself, supervised the four-year construction yourself, chose pale grey limestone yourself, and worked with Andalusi masons from Cordoba. By the 9-11c, al-Qarawiyyin\'s curriculum widened from mosque-school to include al-Khwarizmi\'s 825 Kitab al-Jabr algebra and the astronomy, medicine, and philosophy produced by al-Mamun\'s 830s translation movement. The 11-13c golden age brought Pope Sylvester II (Gerbert of Aurillac, 999-1003) to learn Arabic numerals, Maimonides during his 12c flight from Almohad persecution, and Ibn Khaldun for early 14c education. You died around 880 (Ibn Abi Zar\'s 14c estimate), buried in the al-Qarawiyyin courtyard, the grave invisible today. In 1985 — 1,126 years after the founding — al-Qarawiyyin first formally admitted women students; in 2014 Morocco issued a 200-dirham banknote, the first Moroccan note named after a woman. Guinness World Records recognizes al-Qarawiyyin as the oldest continuously operating university — 229 years older than Bologna (1088), 237 years older than Oxford (1096), 777 years older than Harvard (1636).',
  },
  perspectiveTag: 'female-knowledge-carrier',
  historicalNote: {
    cn: 'Fatima al-Fihri 是真实历史人物——跟 AoE Anacaona Jr / Reformation Sister Agnes / Mali Aisha-1413 这些虚构合成 receiving-end 角色不同。但史料稀薄: 主要史料是 Ibn Abi Zar 14 世纪初《Rawd al-Qirtas》(约 1320s),距 Fatima 859 建校已 460 余年,半历史半地方传说。她出生年份「约 800」是史家从建校时倒推的估算。她母亲名字、是否结婚、是否有子女——史书几乎无记。Maliki 继承法 + Idrisid 政治默认 + Fez qadi 接受三条同时成立,女性独立处置大笔财产才可能。al-Qarawiyyin 859 至今 1167 年连续运营 (Guinness + UNESCO 认证最古连续运营大学),比 Bologna 1088 早 229 年、比 Oxford 1096 早 237 年。1985 才正式收女学生 (Fatima 自己建的学校禁女 1126 年),2014 摩洛哥 200 dirham 纸币第一张以女性命名——careful framing 不浪漫化。Pope Sylvester II (Gerbert of Aurillac 999-1003) + Maimonides 12c + Ibn Khaldun 14c 都跟此校有真实历史关联。这一 lens 是 Islamic Rise Topic 三 lens 中的「receiving-end / female-knowledge-carrier」——配合 Lens 1 al-Mamun (producer) + Lens 2 al-Khwarizmi (interpreter) 形成 producer/interpreter/carrier 三视角。',
    en: 'Fatima al-Fihri is a real historical figure — unlike the fictional composite receiving-end characters in AoE (Anacaona Jr), the Reformation (Sister Agnes), or Mali (Aisha 1413). But the sources are thin. The principal source is Ibn Abi Zar\'s early-fourteenth-century Rawd al-Qirtas (around the 1320s), written more than 460 years after Fatima\'s 859 founding, part history and part local legend. Her birth year "around 800" is an inference, working backward from her age at construction. Her mother\'s name, whether she married, whether she had children — essentially unrecorded. Maliki inheritance law plus Idrisid political acquiescence plus the Fez qadi\'s acceptance had to all hold at once for a woman to dispose of large sums independently. Al-Qarawiyyin from 859 to today is 1,167 years of continuous operation (recognized by both Guinness World Records and UNESCO as the oldest continuously operating university) — 229 years older than Bologna (1088), 237 years older than Oxford (1096). It admitted women only in 1985 (1,126 years after Fatima built it); in 2014 Morocco issued the first Moroccan banknote named after a woman. The framing is deliberately careful, not romanticized. Pope Sylvester II (Gerbert of Aurillac, 999-1003), Maimonides in the twelfth century, and Ibn Khaldun in the fourteenth all have real historical ties to the institution. This lens is the receiving-end / female-knowledge-carrier of the Islamic Rise Topic\'s three-lens set — pairing with Lens 1 al-Mamun (producer) and Lens 2 al-Khwarizmi (interpreter) to form a producer / interpreter / carrier triad.',
  },
  storyboard: fatimaAlFihriStoryboard,
};


// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'al-mamun':         alMamunLens,
  'al-khwarizmi':     alKhwarizmiLens,
  'fatima-al-fihri':  fatimaAlFihriLens,
};

export var defaultLens = 'fatima-al-fihri';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'islamic-rise',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: { 'al-mamun': 35, 'al-khwarizmi': 35, 'fatima-al-fihri': 32 },
};
