// ─── 同伴笔记本架构 v1 · Gunpowder Empires 1600 ─────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演「学习同伴」
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Akbar 宽容实验者 / Janissary 夹缝中人 / 印度教农民 受影响方三条线）
//   - notebook 提供考点闭环（三大火药帝国、火药+官僚集权、宗教合法性、devshirme/Janissary、
//     萨非什叶国教、Akbar 宽容→Aurangzeb 复 jizya、苏莱曼大帝、明朝结构对照 — 补完 AP World U3 + CA HSS-7.2）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - AP World History Modern Unit 3（土地帝国，约 1450-1750）：3.1 帝国扩张 / 3.2 帝国治理 / 3.3 信仰体系
//   - CA HSS Grade 7.2（伊斯兰文明晚期：奥斯曼 / 萨非 / 莫卧儿）
//
// 事实地基：对账 lib/history-narratives/gunpowder-empires-1600.md
//   - Akbar 1556-1605 在位（1542 生，13 岁继位）；1564 废 jizya；曾孙 Aurangzeb 1679 复 jizya
//   - Din-i Ilahi 极小、几乎无人追随（核心信徒据记载十几人），死后即散 — 显式不夸大
//   - Babur 1526 帕尼帕特立莫卧儿；Suleiman 1520-66；Ismail 1501 立什叶国教；君士坦丁堡 1453
//   - 「火药帝国」框架是历史学家 Marshall Hodgson 提出（学者归属不进对话正文，进考点卡）
//
// HARD RULES（per AUTHORING_PIPELINE 12 铁律）：
//   第7 cultural-ban: 非中国帝国 — 用 Sultan/Shah/Padishah/Janissary/devshirme/jizya/sulh-i-kul/millet/mansabdari,
//     绝不用「皇帝/丞相/太子」类中国词; §8 明朝结构对照才用真正的中国词（神机营/科举/内阁/六部/土司）
//   第8I.1 no *italic* / 第8K no "lens" in CN 用「视角/这一遍」/ 第8G em-dash ≤1/sent
//   第11 no ASCII straight quotes nested in single-quoted strings: 用「」+ escape apostrophes
//
// schemaVersion: 1 · notebookVersion: gunpowder-empires-1600-v1

export var notebook = {
  topicId: 'gunpowder-empires-1600',
  topicNameCn: '火药帝国 1600',
  topicNameEn: 'The Gunpowder Empires 1600',
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
    cn: `今天老师说我们要学「火药帝国」（Gunpowder Empires）。
1600 年前后，从巴尔干一直到孟加拉，横跨欧亚有三个穆斯林大帝国：奥斯曼（Ottoman）、萨非（Safavid）、莫卧儿（Mughal）。

老师说这是 AP World History 第三单元「土地帝国」的主菜，加州七年级历史也考。
中国课本对这三个帝国几乎不教，所以这整块对我们来说是全新的。

她给了一张纸，上面写着这些名字：

Akbar（阿克巴）、Suleiman（苏莱曼）、Shah Abbas（阿巴斯）、
Shah Ismail（伊斯玛仪）、Babur（巴布尔）、Aurangzeb（奥朗则布）

还有一串词：gunpowder empire（火药帝国）、Sultan（苏丹）、Shah（沙阿）、
Janissary（耶尼切里）、devshirme（童子征募制）、jizya（非穆斯林人头税）、
sulh-i-kul（普遍宽容）、millet（米利特制）。

我先把它们记下来。等一下读三个人的故事——Akbar（拿宽容当赌注的君主）、
一个 Janissary（被夺走又被抬起的人）、一个印度教农民（被这些政策压在底下的人）。
读完再回来对照这张单子，看我能不能把每个词都解释清楚。

老师说了一句话，我抄在笔记本第一页：「这三个帝国的「黄金时代」，是从上往下看的故事。
从下往上看，稳定是别人定的，宽容是别人赏的，代价是自己付的。读它，两头都要看见。」`,
    en: `Today my teacher said we\'re learning the "Gunpowder Empires."
Around 1600, three great Muslim empires stretched across Eurasia from the Balkans to Bengal: the Ottomans, the Safavids, and the Mughals.

She said this is the centerpiece of AP World History Unit 3, "Land-Based Empires," and the California 7th-grade history exam covers it too.
Chinese textbooks barely teach these three empires, so this is completely new ground for us.

She handed out a sheet with these names:

Akbar, Suleiman, Shah Abbas, Shah Ismail, Babur, Aurangzeb

Plus a list of terms: gunpowder empire, Sultan, Shah, Janissary, devshirme (the levy of children), jizya (the head tax on non-Muslims), sulh-i-kul (universal tolerance), and millet.

I\'m writing them down now. Next I\'ll read three people\'s stories — Akbar (the ruler who staked his rule on tolerance), a Janissary (a man taken away and then raised up), and a Hindu farmer (one of the people pressed down by these policies).
After I finish, I\'ll come back and check if I can explain every term.

Teacher said one line I copied onto the first page of my notebook: "These three empires\' \'golden ages\' are a story told from the top looking down. From the bottom looking up, stability is set by someone else, tolerance is granted by someone else, and the price is paid by yourself. To read it, you have to see both ends."`,
    keyTerms: [
      { cn: '火药帝国', en: 'gunpowder empire' },
      { cn: '奥斯曼 / 萨非 / 莫卧儿', en: 'Ottoman / Safavid / Mughal' },
      { cn: '苏丹', en: 'Sultan' },
      { cn: '沙阿', en: 'Shah' },
      { cn: '耶尼切里', en: 'Janissary' },
      { cn: '童子征募制', en: 'devshirme' },
      { cn: '非穆斯林人头税', en: 'jizya' },
      { cn: '普遍宽容', en: 'sulh-i-kul' },
      { cn: '米利特制', en: 'millet' },
      { cn: '官阶军功制', en: 'mansabdari' },
      { cn: '什叶派 / 逊尼派', en: "Shi'a / Sunni" },
      { cn: '受保护的非穆斯林', en: 'dhimmi' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: 'Akbar 阿克巴',
        nameEn: 'Akbar',
        ipa: '/ˈækbɑːr/',
        roleCn: '莫卧儿第三代君主（Padishah，1556-1605 在位）。1564 年废掉非穆斯林人头税 jizya，推行 sulh-i-kul 宽容政策，靠宽容把一个八成是印度教徒的帝国黏在一起',
        roleEn: 'The third Mughal ruler (Padishah, r. 1556-1605). He abolished the non-Muslim head tax (jizya) in 1564 and practiced sulh-i-kul tolerance, holding together an empire eighty percent Hindu',
        mustKnow: true,
        audioKey: 'akbar',
      },
      {
        nameCn: 'Suleiman 苏莱曼',
        nameEn: 'Suleiman the Magnificent',
        ipa: '/ˌsuːleɪˈmɑːn/',
        roleCn: '奥斯曼苏丹（1520-1566 在位），帝国黄金期的代表。在土耳其被叫「立法者（Kanuni）」，因为他整理编定了帝国法典',
        roleEn: 'Ottoman Sultan (r. 1520-1566), the face of the empire\'s golden age. Called "the Lawgiver" (Kanuni) in Turkish because he codified the empire\'s legal system',
        mustKnow: true,
        audioKey: 'suleiman',
      },
      {
        nameCn: 'Shah Abbas 阿巴斯',
        nameEn: 'Shah Abbas',
        ipa: '/ʃɑː əˈbæs/',
        roleCn: '萨非最强的统治者（1588-1629 在位）。他把首都迁到伊斯法罕——当时人称「半个世界」——并把丝绸和地毯卖到欧洲',
        roleEn: "The Safavids' strongest ruler (r. 1588-1629). He moved the capital to Isfahan — called \"half the world\" by people of his day — and exported silk and carpets to Europe",
        mustKnow: true,
        audioKey: 'shah-abbas',
      },
      {
        nameCn: 'Shah Ismail 伊斯玛仪',
        nameEn: 'Shah Ismail',
        ipa: '/ʃɑː ɪsˈmaɪl/',
        roleCn: '萨非开国者。1501 年起把十二伊玛目什叶派定为国教，强制把波斯从逊尼改宗成什叶',
        roleEn: 'Founder of the Safavids. From 1501 he made Twelver Shi\'a the state religion and forcibly converted Persia from Sunni to Shi\'a',
        mustKnow: true,
        audioKey: 'shah-ismail',
      },
      {
        nameCn: 'Babur 巴布尔',
        nameEn: 'Babur',
        ipa: '/ˈbɑːbər/',
        roleCn: '莫卧儿开国者。1526 年在帕尼帕特（Panipat）用火炮以少胜多，打下印度北部',
        roleEn: 'Founder of the Mughals. In 1526 he used cannon to win against larger forces at Panipat and took northern India',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: 'Aurangzeb 奥朗则布',
        nameEn: 'Aurangzeb',
        ipa: '/ˈɔːrəŋzɛb/',
        roleCn: 'Akbar 的曾孙。1679 年重征 jizya、推行更严的伊斯兰法，和印度教诸侯长期打仗——他死后莫卧儿迅速碎裂',
        roleEn: "Akbar's great-grandson. In 1679 he reimposed the jizya and enforced stricter Islamic law, then warred for decades with Hindu princes; after his death the Mughals cracked apart fast",
        mustKnow: true,
        audioKey: 'aurangzeb',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'three-gunpowder-empires',
      termCn: '三大火药帝国',
      termEn: 'The Three Gunpowder Empires',
      defCn: '1600 年前后，奥斯曼、萨非、莫卧儿三个穆斯林大帝国横跨欧亚。它们都靠火炮和常备军建起庞大的陆上帝国，被历史学家打包叫「火药帝国（Gunpowder Empires）」。',
      defEn: 'Around 1600, three great Muslim empires — the Ottomans, Safavids, and Mughals — stretched across Eurasia. All three built vast land empires on cannon and standing armies, which is why historians group them as the "Gunpowder Empires."',
      standardRef: ['AP World — Unit 3 (Land-Based Empires)', 'AP-WHAP-3.1', 'CA HSS 7.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'akbar',
        nodeIds: ['akb-n9'],
        xiaoweiNote: {
          cn: `Akbar 那条故事线的第 9 节把三个帝国一起放进画面。
我把它们的「地理 + 立国 + 君主称号」压成一张速记表：

- **奥斯曼**：安纳托利亚 + 巴尔干，君主叫 Sultan（苏丹）。1453 年用巨炮轰开君士坦丁堡的城墙。
- **萨非**：伊朗高原（波斯），君主叫 Shah（沙阿）。1501 年起把波斯强制改成什叶派。
- **莫卧儿**：印度次大陆北部，君主称 Padishah 或 Shah。1526 年 Babur 在帕尼帕特用火炮立国。

**考点关键句**：历史学家把这三个帝国打包叫「Gunpowder Empires（火药帝国）」。
共同点是都靠**火炮 + 常备军**建起庞大的陆上帝国，而且统治的绝大多数人**不是穆斯林**。

老师反复强调的误解陷阱——
❌「都是穆斯林帝国，所以都一个样、都不宽容。」
✅ 三家处理「不一样的人」的办法完全不同。Akbar 废税示宽容，奥斯曼分而治之，萨非强制改宗。
AP 最爱考「比较三大帝国」，别把它们当成一个东西。`,
          en: `In the Akbar storyline, puts all three empires in one frame.
I compress their "geography + founding + ruler title" into one cheat table:

- **Ottomans**: Anatolia + the Balkans; the ruler is the Sultan. In 1453 they broke open Constantinople\'s walls with giant cannon.
- **Safavids**: the Iranian plateau (Persia); the ruler is the Shah. From 1501 they forcibly converted Persia to Shi\'a.
- **Mughals**: the northern subcontinent of India; the ruler is the Padishah or Shah. In 1526 Babur founded it with cannon at Panipat.

**Key exam sentence**: historians bundle these three as the "Gunpowder Empires." What they share: all built vast land empires on **cannon + standing armies**, and all ruled populations that were mostly **not Muslim**.

The misconception trap my teacher kept flagging —
❌ "They\'re all Muslim empires, so they\'re all the same and all intolerant."
✅ Each handled "people who are different" in completely different ways. Akbar abolished a tax to show tolerance, the Ottomans divided and ruled, the Safavids converted by force.
AP loves "compare the three empires," so don\'t treat them as one thing.`,
        },
      },
    },

    {
      id: 'gunpowder-and-centralized-bureaucracy',
      termCn: '火药、火炮与中央集权官僚',
      termEn: 'Gunpowder, Artillery & Centralized Bureaucracy',
      defCn: '三大火药帝国靠火炮打下疆土（AP 3.1 帝国扩张），再靠官僚、税收、精英招募来管理（AP 3.2 帝国治理）。这两步分开——打天下用火炮，坐天下用制度。',
      defEn: 'The three Gunpowder Empires used cannon to conquer territory (AP 3.1, expansion), then used bureaucracy, taxation, and elite recruitment to govern it (AP 3.2, administration). These are two separate steps — you win with cannon, you rule with institutions.',
      standardRef: ['AP World — Topic 3.1 / 3.2', 'AP-WHAP-3.1', 'AP-WHAP-3.2', 'CA HSS 7.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'akbar',
        nodeIds: ['akb-n2'],
        xiaoweiNote: {
          cn: `Akbar 那条故事线的第 2 节讲他祖父 Babur 在 1526 年「带着火炮打进印度」。
火药和火炮是莫卧儿家族的**起家本钱**，靠它以少打多。
我把这条逻辑链背下来：

**火药 + 火炮 + 常备军 → 中央集权征服 → 庞大的陆上帝国。**

这正好对应 AP World 的两个主题：

**① AP 3.1 帝国怎么扩张**：火药 + 火炮 + 常备军。
三家都靠这个站起来——君士坦丁堡的巨炮、帕尼帕特的火炮。

**② AP 3.2 帝国怎么治理**：光打下来不够，还得管。靠**官僚 + 税收 + 精英招募**。
- 莫卧儿：mansabdari（官阶军功制）+ zabt（土地丈量定税）——一套用数字管帝国的系统。
- 奥斯曼：devshirme（从基督徒家庭征募精英）。

记忆锚（故事里 Akbar 自己的话）：「**武力能打下一片土地，焐不热一片土地。**」
打天下靠火炮（3.1），坐天下靠官僚（3.2）——这两步别混。`,
          en: `In the Akbar storyline, tells how his grandfather Babur "marched into India with cannon" in 1526.
Gunpowder and cannon were the Mughal family\'s **founding capital** — they let him beat larger forces.
I memorize this chain:

**Gunpowder + cannon + standing army → centralized conquest → a vast land empire.**

This maps exactly onto AP World\'s two topics:

**① AP 3.1 — how empires expand**: gunpowder + cannon + standing armies.
All three rose on this — the giant cannon at Constantinople, the cannon at Panipat.

**② AP 3.2 — how empires govern**: winning isn\'t enough; you have to administer. This runs on **bureaucracy + taxation + elite recruitment**.
- Mughals: mansabdari (a rank-and-merit service system) + zabt (land surveyed and taxed by the numbers).
- Ottomans: devshirme (levying elites from Christian families).

Memory anchor (Akbar\'s own line in the story): "**Force can win a realm, but force cannot keep a realm warm.**"
You conquer with cannon (3.1) and you rule with bureaucracy (3.2) — don\'t mix the two steps.`,
        },
      },
    },

    {
      id: 'jizya-and-religious-legitimacy',
      termCn: 'jizya 与宗教合法性',
      termEn: 'The Jizya & Religious Legitimacy',
      defCn: 'jizya（人头税）是穆斯林政权向非穆斯林（dhimmi，「受保护者」）收的一笔钱。交了钱，就换来「你可以继续信你的教」这个受保护的身份。废不废 jizya，是判断一个穆斯林君主拿什么给自己统治找依据的温度计。',
      defEn: 'The jizya was a head tax that Muslim rulers collected from non-Muslims (dhimmi, "the protected"). Pay it, and you bought the right to keep your own faith under protected status. Whether a ruler abolished or kept the jizya is like a thermometer showing where he found the legitimacy for his rule.',
      standardRef: ['AP World — Topic 3.3', 'AP-WHAP-3.3', 'CA HSS 7.2', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'non-muslim-subject-receiving-end',
        nodeIds: ['nms-n2', 'nms-n4'],
        xiaoweiNote: {
          cn: `三条故事线都绕着 jizya 转，但农民那条故事线的第 2 节最戳人。

**jizya = 穆斯林政权向非穆斯林（dhimmi，受保护者）征的人头税。**
交了这笔钱，换一个「你可以继续信你的教」的受保护身份。

这里有一个老师反复纠正的**误解陷阱**：
❌「jizya 是宗教迫害，是强制改宗的工具。」
✅ 它是一笔**换取受保护地位的人头税**。地位虽不平等，但不等于逼你改信。
故事里农民那句点睛我记下来了：「它不看你种多少地，只看你是不是穆斯林。」

**考点关键句**（AP 3.3 + DBQ 高频）：jizya 是一个穆斯林帝国对「非穆斯林算不算完整一员」的态度温度计。
废不废 jizya，关系到君主拿什么给自己的统治找**合法性**——
是靠「我对所有人公平」（Akbar），还是靠「我是虔诚正统的穆斯林君主」（Aurangzeb）。

记忆锚（故事用的比喻）：jizya **是温度计，不是火刑架**。`,
          en: `All three storylines circle the jizya, but the Hindu farmer\'s hits hardest.

**Jizya = the head tax a Muslim ruler levied on non-Muslims (dhimmi, the protected).** Pay it and you bought a protected status that let you keep your faith.

Here\'s a **misconception trap** my teacher kept correcting:
❌ "The jizya was religious persecution — a tool for forcing people to convert."
✅ It was a **head tax for protected status**. Unequal, yes, but not the same as forcing you to change your religion.
I wrote down the farmer\'s clinching line from the story: "It doesn\'t look at how much land you till, only whether you\'re a Muslim."

**Key exam sentence** (high-frequency for AP 3.3 + DBQ): the jizya is a thermometer of a Muslim empire\'s attitude toward whether non-Muslims count as full members.
Whether a ruler abolishes it or keeps it is tied to where he finds his **legitimacy** — in "I am fair to everyone" (Akbar) or in "I am a pious, orthodox Muslim ruler" (Aurangzeb).

Memory anchor (the story\'s metaphor): the jizya is **a thermometer, not a stake for burning**.`,
        },
      },
    },

    {
      id: 'ottoman-devshirme-janissary',
      termCn: '奥斯曼 devshirme 与 Janissary',
      termEn: 'Ottoman Devshirme & the Janissaries',
      defCn: 'devshirme（童子征募制）：奥斯曼每隔几年从巴尔干的基督徒家庭征走男孩，让他们改信伊斯兰，训练成 Janissary（耶尼切里）精锐步兵，法律上是苏丹的奴隶。这套制度既是夺走出身的强制，也是罕见的社会上升通道。',
      defEn: 'Devshirme (the levy of children): every few years the Ottomans took boys from Christian families in the Balkans, converted them to Islam, and trained them into Janissary elite infantry who were legally the Sultan\'s slaves. This system was both a forced removal from one\'s origins and — unusually for the era — a channel for social rise.',
      standardRef: ['AP World — Topic 3.2', 'AP-WHAP-3.2', 'CA HSS 7.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'janissary',
        nodeIds: ['jan-n2', 'jan-n3', 'jan-n5'],
        xiaoweiNote: {
          cn: `Janissary 那整条故事线就是讲这个的。我把两个词分清楚：

**① devshirme（童子征募制）**：奥斯曼每隔几年，从巴尔干（有时安纳托利亚）的**基督徒家庭**里挑走健壮聪明的男孩。

**② Janissary（耶尼切里）**：这些男孩皈依伊斯兰、受训后成为的**精锐步兵**。
法律上是苏丹的奴隶，不许结婚、没有家庭，但绝对忠诚、待遇优厚，是帝国最能打的部队。

**考点关键句**（AP 最爱考的「真正复杂」点）：devshirme **既是强夺，也是上升的阶梯**。
- 强夺：从一个基督徒孩子手里夺走出身、信仰、家人——站在父母这边看，是丧子。
- 阶梯：一个农家子靠这条路能爬到帝国最高位之一。不少**大维齐尔**（帝国首席行政官，相当于首相）就是 devshirme 出身的奴隶。

老师强调的误解陷阱：
❌「devshirme 就是单纯的绑架奴役。」
✅ 它同时是当时罕见的上升通道。只说「绑架」或只说「机会」，都砍掉了一半史实。

记忆锚（故事里的话）：在奥斯曼，「**最被压的**」和「**最有权的**」，有时是同一批人。`,
          en: `The whole Janissary storyline is about this. I keep the two terms straight:

**① devshirme (the levy of children)**: every few years the Ottomans took strong, smart boys from **Christian families** in the Balkans (sometimes Anatolia).

**② Janissary**: what those boys became after converting to Islam and training — **elite infantry**, slaves of the Sultan in law, forbidden to marry, with no families, yet absolutely loyal, well paid, and the empire\'s most formidable troops.

**Key exam sentence** (AP\'s favorite "genuinely complex" point): devshirme was **both a violent seizure and a ladder up**.
- Seizure: it stripped a Christian boy of his birth, faith, and family — from the parents\' side, it\'s a lost son.
- Ladder: a farmer\'s son could climb to one of the empire\'s highest seats. Many **grand viziers** (the empire\'s chief administrators, similar to a prime minister) were slaves of devshirme origin.

The misconception trap my teacher flagged:
❌ "Devshirme was just kidnapping and enslavement."
✅ It was also a rare channel for rising. Saying only "kidnapping" or only "opportunity" cuts half the history away.

Memory anchor (a line from the story): in the Ottoman state, "**the most oppressed**" and "**the most powerful**" were sometimes the same people.`,
        },
      },
    },

    {
      id: 'safavid-shia-state-religion',
      termCn: '萨非的什叶国教',
      termEn: "The Safavid Shi'a State Religion",
      defCn: '1501 年，萨非开国者 Shah Ismail 征服波斯后，把十二伊玛目什叶派定为国教，强制改宗。这是史上罕见的国家级强制改宗——波斯原本是逊尼派为主，经过几代人的法令和教化，硬是变成了什叶派，并划出了与奥斯曼之间的宗教分界线。',
      defEn: 'In 1501, Safavid founder Shah Ismail conquered Persia and made Twelver Shi\'a the state religion by force. This was a rare state-level forced conversion — Persia had been mostly Sunni, and through decades of laws and teaching it was turned Shi\'a, drawing a lasting religious dividing line with the Sunni Ottomans.',
      standardRef: ['AP World — Topic 3.3', 'AP-WHAP-3.3', 'CA HSS 7.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'akbar', nodeId: 'akb-n9', context: 'Akbar 在三帝国收尾里点萨非「1501 年起把波斯从逊尼强制改成什叶，五百年后成今天伊朗最真实的认同」' },
          { lens: 'non-muslim-subject-receiving-end', nodeId: 'nms-n9', context: '农民结尾把「靠强制建立的什叶身份五百年成伊朗真认同」当成「被赏被逼的东西够久长成真根」的例子' },
        ],
      },
      standaloneText: {
        cn: `这张考点卡的内容在三条故事线里只被带过两句（Akbar 那条第 9 节、农民那条第 9 节），
所以要单独掌握。

**关键史实：**

**① 1501 年**，年轻的萨非开国者 **Shah Ismail（伊斯玛仪）** 征服波斯，把**十二伊玛目什叶派（Twelver Shi'a）**定为国教，并**强制改宗**。

**② 这是史上罕见的国家级强制改宗**。波斯原本以**逊尼派（Sunni）**为主。经过一道道命令、请来的什叶派学者（ulama）一代代教化，波斯硬是从逊尼变成了什叶。

**③ 这划出了一道宗教断层线**，把波斯和周围的逊尼世界（尤其逊尼的奥斯曼）分开。
1514 年的 Chaldiran（查尔迪兰）之战，奥斯曼的火炮打败了萨非的骑兵——逊尼奥斯曼 vs 什叶萨非的长期分界，就此画下。

**一个常考的误解：**
❌「萨非的什叶身份，是波斯人自古就有的。」
✅ 它是 **1501 年起被强制造出来的**。可历史最妙的反转是：五百年过去，这个「被造出来的认同」，成了**今天伊朗最真实的身份**——伊朗至今是世界什叶派的核心。

**故事连接**：Akbar 那条的第 9 节用它对比三家「处理不一样的人」的不同路（萨非走「强制统一」）。
农民那条的第 9 节用它说明「被赏的、被逼的东西，过了足够长的时间，有时会长成真的根」。`,
        en: `This card gets only a passing mention in two places — the Akbar storyline and the farmer storyline — so master it here on its own.

**Key facts:**

**① In 1501**, the young Safavid founder **Shah Ismail** conquered Persia and made **Twelver Shi\'a** the state religion, **converting by force**.

**② This was a rare state-level forced conversion.** Persia had been mostly **Sunni**. Through order after order and imported Shi\'a scholars (ulama) teaching generation after generation, it was driven from Sunni to Shi\'a.

**③ This carved a religious fault line** between Persia and the surrounding Sunni world — especially the Sunni Ottomans.
At the Battle of **Chaldiran** in 1514, Ottoman cannon beat the Safavid cavalry, drawing the long Sunni-Ottoman vs. Shi\'a-Safavid divide.

**A common misconception, and the exam loves it:**
❌ "The Safavids\' Shi\'a identity was something Persians always had."
✅ It was **manufactured by force from 1501**. Yet history\'s neatest reversal: five centuries on, this "manufactured identity" became **Iran\'s most real identity today** — Iran is still the heart of the Shi\'a world.

**Story connections**: the Akbar storyline\'s uses this to contrast the three empires\' different roads for "handling people who are different" (the Safavids chose forced unity). The farmer storyline\'s uses it to show that "the granted and the compelled, given long enough, can sometimes grow into real roots."`,
      },
      xiaoweiNote: {
        cn: `这张卡三条故事线里都没有正面演，一开始最容易漏。
老师说 AP 3.3 爱考「三家靠什么给统治找合法性」——萨非的答案就是**什叶国教**（我是真信的捍卫者）。

我的口诀：
**1501 = Ismail = 强制改宗成什叶派。**
逊尼-什叶分界 = 1514 年 Chaldiran 之战。
还有一句必背的反转：「被强制造出来的传统，五百年后成了最真的认同。」`,
        en: `This card isn\'t acted out in any of the three storylines, so I missed it at first.
Teacher said AP 3.3 loves "where does each empire find its legitimacy" — the Safavid answer is the **Shi\'a state religion** (defender of the one true faith).

My mnemonic:
**1501 = Ismail = Shi\'a by force.**
The Sunni-Shi\'a divide = the 1514 Battle of Chaldiran.
And one must-memorize reversal: "an identity manufactured by force became, five centuries later, the most real identity of all."`,
      },
    },

    {
      id: 'akbar-tolerance-sulh-i-kul',
      termCn: 'Akbar 的宽容（sulh-i-kul，1564 废 jizya）',
      termEn: "Akbar's Tolerance (Sulh-i-Kul, Jizya Abolished 1564)",
      defCn: 'sulh-i-kul 是阿拉伯语，意思是「与所有人和平」。Akbar 的宽容政策有三个实招：1564 年废 jizya、让各教人士当高官（本事决定你爬多高，不是信仰）、开设 Ibadat Khana（信仰之厅）让各宗教学者夜辩。这是 AP 3.3「宗教政策 = 合法性工具」的王牌案例。',
      defEn: 'Sulh-i-kul means "peace with all" in Arabic. Akbar\'s tolerance policy had three concrete moves: abolishing the jizya in 1564, appointing officials of any faith (ability, not belief, decided how high you rose), and opening the Ibadat Khana (House of Worship) for scholars of every religion to debate. This is AP 3.3\'s ace case for "religious policy as a tool of imperial legitimacy."',
      standardRef: ['AP World — Topic 3.3', 'AP-WHAP-3.3', 'CA HSS 7.2', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'akbar',
        nodeIds: ['akb-n4', 'akb-n5', 'akb-n3'],
        xiaoweiNote: {
          cn: `Akbar 那整条故事线就是讲他的。我把他的「宽容套装」背成三件实事：

**① 1564 年废 jizya**（第 4 节）：一笔勾掉非穆斯林人头税。
在伊斯兰世界，这几乎是离经叛道。
等于当众宣布：在我的帝国里，印度教徒不再是「需要被额外标记的外人」。

**② sulh-i-kul（普遍宽容 / 与所有人和平）**（第 5 节）：不是口号，是实打实的人事。
娶印度教 Rajput 公主、用印度教徒当高官财政大臣甚至将领。**本事决定你爬多高，不是信仰。**

**③ Ibadat Khana（信仰之厅）**（第 3 节）：把各教学者请来夜辩，谁也不偏。
（彩蛋：Akbar 一辈子不识字，靠听、靠辩治国。）

**考点关键句**（AP 3.3 必考）：Akbar 用宽容黏住了一个**八成是印度教徒**的帝国，把它做成当时世界最稳的政权之一。这是 AP 论证「宗教政策 = 帝国合法性工具」的王牌案例。

⚠️ 别和 Din-i Ilahi 搞混（下一张卡）：真支柱是 **sulh-i-kul + 废 jizya**，不是那个失败的小信条。
记忆锚：**1564 = Akbar 废 jizya = 把宽容从姿态变成制度。**`,
          en: `The whole Akbar storyline is about him. I memorize his "tolerance kit" as three concrete acts:

**① Abolished the jizya in 1564** (Node 4): struck out the non-Muslim head tax.
In the Islamic world, this was almost unheard-of.
A public declaration: in my empire, Hindus are no longer "outsiders who must be specially marked."

**② sulh-i-kul (universal tolerance / peace with all)** (Node 5): not a slogan — real appointments.
He married a Hindu Rajput princess and made Hindus his high officials, finance ministers, even commanders. **Your ability, not your faith, decided how high you climbed.**

**③ Ibadat Khana (House of Worship)** (Node 3): he brought scholars of every faith to argue through the night and favored none.
(Fun fact: Akbar couldn\'t read his whole life and ruled by listening and debating.)

**Key exam sentence** (a must for AP 3.3): Akbar used tolerance to bind an empire **eighty percent Hindu** into one of the steadiest powers in the world. This is AP\'s ace case for "religious policy as a tool of imperial legitimacy."

⚠️ Don\'t confuse this with Din-i Ilahi (next card): the real pillar was **sulh-i-kul + abolishing the jizya**, not that failed little creed.
Memory anchor: **1564 = Akbar abolishes the jizya = turning tolerance from a gesture into a policy.**`,
        },
      },
    },

    {
      id: 'din-i-ilahi-misconception',
      termCn: 'Din-i Ilahi（清坑：不是「新国教」）',
      termEn: 'Din-i Ilahi (Myth-Buster: Not a "New State Religion")',
      defCn: 'Din-i Ilahi（神圣宗教）是 Akbar 晚年搞的一套糅合各教元素的小圈子信条。核心信徒据记载不超过十几个人，Akbar 一死就散了。它不是国教，不是他治国的支柱，更像是他个人晚年宗教探索的一个失败的尾声。',
      defEn: 'Din-i Ilahi (the Divine Faith) was a small-circle creed Akbar created in his later years, blending elements of several religions. The core believers were reportedly no more than a dozen people, and it dissolved the moment he died. It was not a state religion and not a pillar of his rule — more like the failed end note of one man\'s personal religious searching.',
      standardRef: ['AP World — Topic 3.3', 'AP-WHAP-3.3', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'akbar',
        nodeIds: ['akb-n7'],
        xiaoweiNote: {
          cn: `Akbar 那条故事线的第 7 节专门讲这个，而且是来「清坑」的，所以我单列一张卡。

**Din-i Ilahi（神圣宗教）** = Akbar 晚年搞的一套**糅合各教元素的小圈子信条**，让最亲近的几个臣子信奉。

这里有 AP 最爱埋的**误解陷阱**：
❌「Akbar 创立了一个新宗教 Din-i Ilahi，并推广到全国。」
✅ 它**极小、几乎没人信**——核心信徒据记载**不过十几个人**，他**一死就散了**。
故事里 Akbar 自己说的：「后人传我「创了个新宗教」……其实它极小，我一死它就散了。」

**考点关键句**：Din-i Ilahi **不是**他治国的支柱，更像是他一个人晚年宗教探索的**失败的尾声**。
真正的支柱是 **sulh-i-kul + 废 jizya**（上一张卡）。

为什么单独记？因为如果你在 DBQ 里把 Din-i Ilahi 写成「Akbar 的宗教政策核心」，就**事实错误**了——这正是 AP 阅卷会扣分的「夸大史料」。记住一句：**它是个失败的小实验，不是国教。**`,
          en: `In the Akbar storyline, is specifically about this, and it\'s there to bust a myth — so I give it its own card.

**Din-i Ilahi (the Divine Faith)** = a **small-circle creed blending elements of several religions** that Akbar made in his later years, professed by a few of his closest courtiers.

Here\'s AP\'s favorite buried **misconception trap**:
❌ "Akbar founded a new religion, Din-i Ilahi, and spread it nationwide."
✅ It was **tiny, with almost no followers** — the core believers were reportedly **no more than a dozen men**, and it **dissolved the moment he died**. Akbar says it himself in the story: "Later ages tell tall tales that I \'founded a new religion\'... in truth it was tiny, and it dissolved the moment I died."

**Key exam sentence**: Din-i Ilahi was **not** a pillar of his rule — it was more the **failed tail end** of one man\'s late religious searching.
The real pillar was **sulh-i-kul + abolishing the jizya** (the previous card).

Why memorize it separately? Because if you write Din-i Ilahi as "the core of Akbar\'s religious policy" in a DBQ, that\'s a **factual error** — exactly the "overstating the evidence" that costs points in AP grading. Remember one line: **it was a failed little experiment, not a state religion.**`,
        },
      },
    },

    {
      id: 'akbar-to-aurangzeb-reversal',
      termCn: 'Akbar→Aurangzeb 的宽容反转',
      termEn: "Akbar→Aurangzeb: The Tolerance Reversal",
      defCn: 'Akbar（1564 废 jizya，行宽容）和他曾孙 Aurangzeb（1679 复 jizya，行严格伊斯兰法）是同一个帝国的两个极端。这段从宽容到强硬的弧线，是 AP「延续与变化（Continuity & Change）」最常出题的核心张力。',
      defEn: 'Akbar (abolished the jizya in 1564, practiced tolerance) and his great-grandson Aurangzeb (reimposed the jizya in 1679, enforced strict Islamic law) represent two poles of the same empire. The arc from tolerance to hardness is the central tension AP\'s "Continuity & Change" questions return to most often.',
      standardRef: ['AP World — Continuity & Change (Topic 3.3)', 'AP-WHAP-3.3', 'CA HSS 7.2', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'akbar',
        nodeIds: ['akb-n8'],
        xiaoweiNote: {
          cn: `Akbar 那条故事线的第 8 节亲口讲了这整段反转（农民那条的第 6 节从下往上又印证了一次）。
这是同一根「温度计」的两头，也是整门课**最关键的张力**。
AP 的「延续与变化」必从这里出题。

一张对照表，必背：

| | Akbar（1564） | Aurangzeb（1679，Akbar 曾孙） |
|---|---|---|
| 对 jizya 的做法 | **废掉** | **恢复** |
| 宗教政策 | sulh-i-kul，各教人士同进朝廷 | 严施伊斯兰法，与印度教诸侯长期战争 |
| 押的是 | 「**宽容能换稳定**」 | 「**强硬能立威**」 |
| 结果 | 莫卧儿在他治下到顶峰 | 他死后（1707）帝国迅速碎裂 |

**老师反复纠正的误解陷阱**（DBQ 高频）：
❌「宽容 = 好，强硬 = 坏，Aurangzeb 是葬送一切的暴君。」
✅ Aurangzeb **不傻、有他的逻辑**——朝廷缺钱、要证明自己虔诚正统、边疆压力大。
AP 要的是「两路都给逻辑，不替历史人物下道德判决」——这正是评分要的复杂性（complexity）。

**什么变了 / 什么没变**（AP 标准设问）：
- **变了**：宗教政策、对非穆斯林的姿态（jizya 废→复）。
- **没变**：mansabdari 官僚、火药军队、王朝逻辑。`,
          en: `In the Akbar storyline, tells this whole reversal in his own voice. The farmer storyline\'s confirms it again from below.
These are the two ends of one "thermometer" — and the **central tension** of the whole topic.
This is where AP\'s "Continuity & Change" questions come from.

A compare table, must-memorize:

| | Akbar (1564) | Aurangzeb (1679, Akbar\'s great-grandson) |
|---|---|---|
| Stance on jizya | **Abolished it** | **Reimposed it** |
| Religious policy | sulh-i-kul, officials of all faiths welcome | Enforced stricter Islamic law, warred with Hindu princes |
| His bet | "**Tolerance buys stability**" | "**Hardness builds authority**" |
| Result | Mughals reached their peak under him | Empire cracked apart fast after his death (1707) |

**The misconception trap my teacher kept correcting** (high-frequency DBQ):
❌ "Tolerance = good, hardness = bad, and Aurangzeb was the tyrant who buried it all."
✅ Aurangzeb **wasn\'t a fool — he had his logic**: a treasury short of money, a wish to prove himself pious and orthodox, heavy frontier pressure.
AP wants "give both roads their logic, pass no moral verdict on the historical figure" — that\'s exactly the complexity grading rewards.

**What changed / what stayed** (the standard AP prompt):
- **Changed**: religious policy, the stance toward non-Muslims (jizya abolished then restored).
- **Stayed**: the mansabdari bureaucracy, the gunpowder army, the dynastic logic.`,
        },
      },
    },

    // ── 卡 9（新增）：苏莱曼大帝（Suleiman the Magnificent）— 独立 mini-lesson ──
    {
      id: 'suleiman-the-magnificent',
      termCn: '苏莱曼大帝（Suleiman the Magnificent）/ 立法者 Kanuni',
      termEn: 'Suleiman the Magnificent / the Lawgiver (Kanuni)',
      defCn: '奥斯曼苏丹苏莱曼（1520-1566 在位）是 AP World 考频最高的奥斯曼人物。土耳其人叫他「立法者（Kanuni）」，因为他整理编定了完善的帝国法典；欧洲人叫他「大帝（Magnificent）」，强调他的军威和财富。两个外号 = 两种视角，是 AP 比较题的切入口。',
      defEn: 'Ottoman Sultan Suleiman (r. 1520-1566) is the highest-frequency Ottoman figure in AP World. Turks called him "the Lawgiver (Kanuni)" because he codified the empire\'s legal system; Europeans called him "the Magnificent" for his military power and wealth. Two nicknames = two perspectives, which is AP\'s natural entry point for multiple-viewpoint questions.',
      standardRef: ['AP World — Topic 3.1 / 3.2', 'AP-WHAP-3.1', 'AP-WHAP-3.2', 'CA HSS 7.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'akbar', nodeId: 'akb-n9', context: 'Akbar 把三帝国并列时一句话带过奥斯曼黄金期，未展开苏莱曼' },
        ],
      },
      standaloneText: {
        cn: `三条故事线都只用一句话带过他。他是 AP World 3.1 / 3.2 最高频的奥斯曼人物，要单独掌握。

**关键事实：**

**① 在位 1520-1566**（46 年），奥斯曼版图在他治下达到顶峰，横跨东南欧、中东、北非。
1529 年围攻维也纳，虽未攻克，令基督教欧洲震动。

**② 两个外号，两种视角**：土耳其称他「立法者（Kanuni）」，因为他编订完善的帝国法典；
欧洲称他「大帝（Magnificent）」，强调军威财富。
AP 多视角考题就从这里切入——同一个人，看的角度不同，描述完全不同。

**③ 治理**：大维齐尔主持政务；devshirme 制度输送精英官僚与 Janissary 步兵。

**考点关键句**：苏莱曼是「**靠火药打天下、靠法典坐天下**」的最佳代表。
军事扩张（3.1）+ 法律官僚集权（3.2），两个 AP 主题都有他的具体证据。

**AP 高频比较**：苏莱曼「立法者法典」 vs Akbar「sulh-i-kul 宽容」。
同代两位最强君主，各用不同办法稳住宗教多元的大帝国。
别把他只记成军事家——AP 考点核心是**治理制度**。`,
        en: `All three storylines mention him in only one line. He\'s the highest-frequency Ottoman figure in AP World 3.1/3.2, so master this card on its own.

**Key facts:**

**① He reigned 1520-1566** (46 years). Under him, Ottoman territory reached its peak, stretching across southeastern Europe, the Middle East, and North Africa.
The 1529 Siege of Vienna — though unsuccessful — shook Christian Europe.

**② Two nicknames, two viewpoints**: Turks called him "the Lawgiver (Kanuni)" because he codified a comprehensive imperial legal system; Europeans called him "the Magnificent" for his military power and wealth.
AP multiple-perspective questions cut in right here — same person, different angle, completely different description.

**③ Governance**: a grand vizier ran affairs at the center; the devshirme system fed elite officials and Janissary troops to the empire.

**Key exam sentence**: Suleiman is the best model of the pattern "**won by gunpowder, governed by legal codes**."
Military expansion (3.1) + law-based bureaucratic centralization (3.2) — both AP topics have very concrete evidence in him.

**A frequent AP comparison**: Suleiman\'s Lawgiver legal codes vs. Akbar\'s sulh-i-kul tolerance.
The two greatest rulers of the same generation each stabilized a religiously diverse empire by a different method.
Don\'t remember Suleiman only as a military man — his AP exam core is **governing institutions**.`,
      },
      xiaoweiNote: {
        cn: `Suleiman 在三条故事线里都只被一笔带过——所以这张卡是纯靠自己记的。
老师说 AP 选择题爱把苏莱曼和 Akbar 混出来考「谁用了什么办法稳住多元帝国」。

我的口诀：
**苏莱曼 = 奥斯曼 1520-1566 = 两个外号（大帝 / 立法者）= 两种视角 = 法典 + Janissary = AP 3.2 治理核心。**`,
        en: `Suleiman only gets a passing mention in all three storylines — so this card is pure self-study.
Teacher said AP multiple choice loves mixing up Suleiman and Akbar to test "which ruler used which method to hold a diverse empire together."

My mnemonic:
**Suleiman = Ottoman 1520-1566 = two nicknames (Magnificent / Lawgiver) = two viewpoints = legal codes + Janissaries = AP 3.2 governance core.**`,
      },
    },

    // ── 卡 10（新增）：明清对照 — 中国桥并置（Rule 0 同期比较）— 独立 mini-lesson ──
    {
      id: 'ming-qing-china-bridge',
      termCn: '明清对照：同期「火药帝国」，走向不同',
      termEn: 'Ming-Qing Parallel: Contemporaneous "Gunpowder Empires," Divergent Paths',
      defCn: '1600 年的明朝万历年间，和三大火药帝国是同一个时代的大型陆上集权帝国。明朝也靠火药（有专用火器部队神机营）支撑集权，但在「怎么管庞大人口、怎么对待不一样的人」上，走了一套完全不同的制度路线。AP 比较题最爱把它们并排放。',
      defEn: 'Ming-dynasty China in 1600 (the Wanli era) was a large land-based centralized empire of the same generation as the three Gunpowder Empires. The Ming also used gunpowder (they had dedicated firearms units, the Shenji battalions) to prop up central authority, but built entirely different institutions for governing a vast population and handling diversity. AP comparison questions love placing them side by side.',
      standardRef: ['AP World — Topic 3.1 / 3.2 (Comparison)', 'AP-WHAP-3.1', 'AP-WHAP-3.2', 'CA HSS 7.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'akbar', nodeId: 'akb-n9', context: 'Akbar 思考全球同代帝国时带出中国作为结构对照，未展开' },
        ],
      },
      standaloneText: {
        cn: `AP 比较题爱把同一个时代的不同文明并排放。1600 年明朝万历年间，和三大火药帝国是同代的「大型陆上集权帝国」。我们把这个比较做成一张看得见的考点卡。

**共同点：都靠火药撑集权**
火药是中国发明的。明朝有专用火器部队**神机营**，靠火炮扩张版图（北伐蒙古、经略西南）。
和三大伊斯兰帝国一样，火药是中央集权的底层支撑——这是 AP 比较题「找共同点」的切入口。

**关键差异：如何统治多元人口**

| 维度 | 明朝 | 三大火药帝国 |
|---|---|---|
| 精英来源 | **科举**（儒家经典选官） | devshirme / mansabdari / 什叶 ulama |
| 「异己」是谁 | 主要是**地域 / 族群**（土司、草原） | 主要是**宗教**（非穆斯林多数） |
| 处理方式 | 羁縻 / 土司制（名义效忠 + 地方自治） | jizya 或废 jizya；强制改宗 |

**走向不同（AP 延续与变化考点）**：
明清走向海禁 + 朝贡体系，退出欧洲人正在建的全球贸易网络，18-19 世纪被从外部打开。
三大帝国则各自被欧洲列强蚕食（英属印度、奥斯曼「欧洲病夫」、萨非 1722 年崩溃）。
都衰落，路径不同。

**Rule 0 提醒**：不能说伊斯兰帝国「宽容先进」或明朝「封闭落后」——各自有各自的难题和设计，各有各的智慧和盲点。`,
        en: `AP comparison questions love placing different civilizations from the same era side by side. China in 1600 was the Ming dynasty\'s Wanli era — a large land-based centralized empire of the same generation as the three Gunpowder Empires. Let\'s turn that comparison into a visible exam card.

**What they share: all used gunpowder to prop up central authority**
Gunpowder was invented in China. The Ming had dedicated firearms units — the **Shenji battalions** — using cannon for territorial expansion (northern campaigns against the Mongols, control of the southwest).
Like the three Islamic empires, gunpowder was the backbone of centralized rule — this is the "find a similarity" entry point for AP comparison questions.

**Key difference: how they governed a diverse population**

| | Ming (China) | The Three Gunpowder Empires |
|---|---|---|
| Elite recruitment | **Civil-service exam** (officials chosen through Confucian classics) | devshirme / mansabdari / Shi\'a ulama |
| Who counts as "different" | Mainly **regional / ethnic** (southwestern chieftaincies, northern steppes) | Mainly **religious** (Muslim rulers vs. non-Muslim majority) |
| Method | Loose-rein / native chieftaincy system (nominal loyalty + local autonomy) | jizya or its abolition; forced conversion |

**Divergent paths (AP Continuity & Change exam point)**:
The Ming and Qing moved toward maritime prohibition and the tribute system, stepping back from the global trade networks Europeans were building. By the 18th-19th centuries they were forced open from outside.
The three Islamic empires were each picked apart by European powers (British India, the "sick man of Europe" Ottoman, the Safavid collapse in 1722).
All declined — by different roads.

**Rule 0 reminder**: you cannot say the Islamic empires were "tolerant and advanced" or the Ming "closed and backward" — each civilization responded to its own structural constraints with its own wisdom and blind spots.`,
      },
      xiaoweiNote: {
        cn: `老师说这个是「对华裔学生最有价值」的比较卡——因为我们能把自己知道的明朝知识直接对准这三个帝国找异同，比其他同学多一个真实参照点。

AP 比较框架——用这三步组织答案：
**① 先找 1 个共同点**（都用火药撑集权）
**② 再找 2 个制度差**（科举 vs devshirme；羁縻 vs jizya）
**③ 结论用「相同难题、不同设计」收**

不要把比较做成「评高下」——那会丢分。`,
        en: `Teacher said this is "the most valuable comparison card for Chinese-heritage students" — because we can directly aim what we already know about the Ming at these three empires to find similarities and differences, giving us one extra real reference point.

AP comparison framework — organize your answer in three steps:
**① First find 1 similarity** (all used gunpowder to prop up centralized rule)
**② Then find 2 institutional differences** (civil-service exam vs. devshirme; loose-rein system vs. jizya)
**③ Close with "same problem, different designs"**

Don\'t make the comparison into a ranking — that costs points.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Akbar 1564 年废了 jizya，让一个八成是印度教徒的帝国头一回觉得自己被当人看。
可这宽容是他一人「赏」的，没有写成任何人都不能拿走的权利。
他曾孙 Aurangzeb 1679 年一句话又把 jizya 加了回来。

你觉得「宽容」是更聪明的治理，还是 Akbar 只是运气好、赶上了好时候？
用至少两条具体证据支持你的判断。`,
      en: `In 1564 Akbar abolished the jizya, making an empire eighty percent Hindu feel, for the first time, treated as full members. Yet that tolerance was his alone to "grant" — it was never written as a right that anyone could take away. His great-grandson Aurangzeb brought the jizya back with a word in 1679.

Do you think "tolerance" was the smarter way to govern, or was Akbar just lucky to catch a good moment? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案。AP 评分看你**用证据**的能力，不看你站哪边。

「宽容更聪明」这边的证据：
- 废 jizya + sulh-i-kul 让八成印度教徒的帝国成了当时最稳的政权之一。
- 印度教将领守边疆、印度教大臣管财政，帝国没散。

「只是运气好 / 宽容靠不住」这边的证据：
- 这宽容是「赏」的，没写死成权利。
- 曾孙 Aurangzeb 一句话（1679 复 jizya）就全收回了，之后帝国迅速碎裂。

进阶提醒：别把 Aurangzeb 简单写成「暴君」——他有他的逻辑（缺钱、要证明虔诚正统、边疆压力）。

高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性），是 AP 评分给高分的关键动作。`,
      hintEn: `Hint: no standard answer here. AP scoring looks at your ability to **use evidence**, not which side you pick.

Evidence for "tolerance was smarter":
- Abolishing the jizya + sulh-i-kul made an empire eighty percent Hindu one of the steadiest powers of its time.
- Hindu commanders guarded the frontier, Hindu ministers ran the treasury, and the empire held.

Evidence for "just luck / tolerance can\'t be relied on":
- The tolerance was "granted," never written as a right anyone could count on.
- Aurangzeb took it all back with a word (the 1679 reimposition of the jizya), after which the empire cracked apart fast.

Going deeper: don\'t reduce Aurangzeb to "tyrant" — he had his logic (short of money, needing to prove piety, frontier pressure).

High-scoring move: acknowledge both sides stand, then explain why you lean one way — that\'s complexity, and it\'s what earns top marks on AP.`,
      conceptsActivated: ['akbar-tolerance-sulh-i-kul', 'akbar-to-aurangzeb-reversal'],
    },
    {
      id: 'q2',
      cn: `奥斯曼的 devshirme，从一个基督徒孩子手里夺走了出身、信仰、家人。
可它也可能把这个农家子，抬到帝国最高位之一——不少帝国首席行政官就是这样出身的。

如果你是 AP 老师，要出一道题考「devshirme 是暴行，还是机会」，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `The Ottoman devshirme stripped a Christian boy of his birth, his faith, his family. Yet it could also raise that farmer\'s son to one of the empire\'s highest seats — many of the empire\'s chief administrators came up exactly this way.

If you were an AP teacher writing a question on "was the devshirme an atrocity, or an opportunity," how would you phrase it? Write your question and explain what it\'s meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。

故事里那个 Janissary 自己说：「我的「光宗耀祖」，是从我父母的「丧子」里长出来的。」
这句话点出 devshirme 的两面：
- 对那个男孩——是登天梯子。
- 对站在门口的母亲——是永远失去孩子。

你的题目可以让学生**比较同一件 devshirme 在两个人眼里的样子**（被征走的男孩 vs 被夺走孩子的父母），逼他们看见：**「荣耀」和「丧子」是同一件事的两面，看你站在谁的位置上。**

高分提醒：别让学生只选「暴行」或只选「机会」——AP 要的是「两面都是史实，不砍掉一半」。`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.

In the story the Janissary himself says: "My \'honor to the family\' grew out of my parents\' \'loss of a child.\'"
That line names the two faces of the devshirme:
- To the boy — a ladder to the heavens.
- To the mother in the doorway — losing her child forever.

Your question could have students **compare how the same devshirme looks to two people** (the boy levied away vs. the parents whose child was taken), forcing them to see: **"glory" and "lost son" are two faces of the one thing, depending on whose place you stand in.**

High-scoring reminder: don\'t let students pick only "atrocity" or only "opportunity" — AP wants "both faces are history, don\'t cut half away."`,
      conceptsActivated: ['ottoman-devshirme-janissary', 'jizya-and-religious-legitimacy'],
    },
    {
      id: 'q3',
      cn: `1600 年的中国是明朝万历年间。明朝和三大火药帝国是同一个时代的「大型陆上集权帝国」——都用火药（火药本就是中国发明的，明朝有神机营），都得回答「怎么管庞大人口、怎么对待不一样的人」。

把明朝和三大火药帝国放在一起对照，你觉得「同一道难题，不同的答案」体现在哪些地方？

注意：这题不是要分高下，是要你看见各文明各有各的设计与盲点。`,
      en: `China in 1600 was the Ming dynasty\'s Wanli era. The Ming and the three Gunpowder Empires were "large land-based centralized empires" of the same generation — all used gunpowder (gunpowder was China\'s invention, and the Ming had their Shenji firearms units), and all had to answer "how to govern a vast population, how to treat people who are different."

Setting the Ming beside the three Gunpowder Empires, where do you see "the same hard problem, different answers"?

Note: this isn\'t about ranking them, but about seeing that each civilization had its own design and its own blind spots.`,
      hintCn: `提示：这题练的是 AP 的比较（Comparison）技能，先把对照的几个轴拎清楚：

**① 火药**：明朝靠神机营、城防火炮；三大火药帝国靠火炮 + 常备军。都用火药撑大一统集权，路径不同。

**② 怎么管庞大人口**：
- 明朝靠科举选官、文官官僚、内阁 + 六部。
- 奥斯曼靠 devshirme + millet，莫卧儿靠 mansabdari，萨非靠什叶 ulama。
人事制度完全不同。

**③ 怎么对待「不一样的人」**：
- 明朝的「多元」更多是地域族群（如西南土司、北方边疆），用羁縻、土司、华夷秩序处理。
- 三大伊斯兰帝国的「多元」核心是宗教（穆斯林君主 vs 非穆斯林多数），用 jizya 或废 jizya 处理。

中立提醒（Rule 0）：不能说伊斯兰帝国「宽容先进」、明朝「封闭落后」，也不能反过来——每个文明各自回应各自的难题，各有其设计的智慧与盲点。AP 看的是你能不能**用具体制度**把比较钉在证据上。`,
      hintEn: `Hint: this trains AP\'s Comparison skill. Start by pinning down a few axes to compare on:

**① Gunpowder**: the Ming relied on the Shenji firearms units and fortress cannon; the three Gunpowder Empires relied on cannon + standing armies. All used gunpowder to prop up centralized unity, by different paths.

**② Governing a vast population**:
- The Ming used the civil-service exam, a scholar-official bureaucracy, and the Grand Secretariat plus the Six Ministries.
- The Ottomans used devshirme + millet, the Mughals used mansabdari, the Safavids used the Shi\'a ulama.
Completely different personnel systems.

**③ Treating "the people who are different"**:
- Ming "diversity" was more regional/ethnic (e.g. southwestern native chieftaincies, the northern frontier), handled through loose-rein control, native chieftaincies, and the Hua-Yi order.
- The three Islamic empires\' "diversity" was chiefly religious (Muslim ruler vs. non-Muslim majority), handled through the jizya or its abolition.

Neutrality reminder (Rule 0): you can\'t say the Islamic empires were "tolerant and advanced" and the Ming "closed and backward," or the reverse — each civilization answered its own structural problem with its own wisdom and blind spots. AP wants you to **pin the comparison to evidence with specific institutions.**`,
      conceptsActivated: ['gunpowder-and-centralized-bureaucracy', 'three-gunpowder-empires'],
    },
  ],
};

export default notebook;
