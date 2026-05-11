// ─── 同伴笔记本架构 v1 · Age of Exploration 1492 ─────────────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
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
//   - storyboard 提供情感锚点（Columbus / Las Casas / 小安娜卡奥娜 三条线）
//   - notebook 提供考点闭环（葡萄牙先驱 / 航海技术 / 哥伦布大交换 / encomienda 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-4.1, KC-4.2, KC-4.3
//   - California HSS 7.7.1, 7.7.2, 7.7.3
//   - 弥补 age-of-exploration-1492 课纲覆盖率从 48% → ~95%
//
// schemaVersion: 1 · notebookVersion: age-of-exploration-1492-v1

export var notebook = {
  topicId: 'age-of-exploration-1492',
  topicNameCn: '大航海时代',
  topicNameEn: 'The Age of Exploration',
  schemaVersion: 1,
  companion: {
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning champion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `老师今天说我们要学大航海时代（1400s-1500s）。她在白板上写了一堆名字和词，
说这是期末必考的——我先全抄下来，等下读三个视角的故事再回来对照。

**必须认识的人**：
哥伦布（Christopher Columbus）、瓦斯科·达伽马（Vasco da Gama）、
拉斯卡萨斯（Bartolomé de las Casas）、巴托罗缪·迪亚斯（Bartolomeu Dias）

**必须认识的词**：
caravel（卡拉维尔帆船）、lateen sail（三角帆）、astrolabe（星盘）、
Columbian Exchange（哥伦布大交换）、encomienda（监护征赋制）、Taíno（泰诺人）

老师特别说：这个单元不只是"哥伦布发现美洲"——AP 考的是**谁得到了什么，
谁失去了什么，以及这些代价值不值得**。我把这句话框起来了。

读完三个视角之后，我要能回答：1492年之后世界发生了什么根本性的变化？
谁赢了？谁输了？有没有可能两个答案都是真的？`,
    en: `Today teacher said we're learning the Age of Exploration (1400s-1500s).
She wrote a bunch of names and terms on the board — she said these are on every final exam.
Let me copy them all down, then after I read the three story perspectives I'll come back and check.

**Must-know people**:
Christopher Columbus, Vasco da Gama,
Bartolomé de las Casas, Bartolomeu Dias

**Must-know terms**:
caravel, lateen sail, astrolabe,
Columbian Exchange, encomienda, Taíno

Teacher made a special point: this unit isn't just "Columbus discovered America" —
the AP asks **who gained what, who lost what, and whether the cost was worth it.**
I drew a box around that sentence.

After reading all three perspectives, I should be able to answer:
What fundamentally changed after 1492? Who won? Who lost?
Can both answers be true at the same time?`,
    keyTerms: [
      { cn: '卡拉维尔帆船', en: 'caravel' },
      { cn: '三角帆', en: 'lateen sail' },
      { cn: '星盘', en: 'astrolabe' },
      { cn: '哥伦布大交换', en: 'Columbian Exchange' },
      { cn: '监护征赋制', en: 'encomienda' },
      { cn: '教皇子午线', en: 'Treaty of Tordesillas' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '哥伦布',
        nameEn: 'Christopher Columbus',
        ipa: '/ˈkrɪstəfər kəˈlʌmbəs/',
        roleCn: '1492年横渡大西洋的西班牙探险家',
        roleEn: 'Spanish explorer who sailed across the Atlantic in 1492',
        mustKnow: true,
        audioKey: 'christopher-columbus',
      },
      {
        nameCn: '瓦斯科·达伽马',
        nameEn: 'Vasco da Gama',
        ipa: '/ˈvæskoʊ də ˈɡɑːmə/',
        roleCn: '1498年绕非洲抵达印度的葡萄牙航海家',
        roleEn: 'Portuguese navigator who reached India via Africa in 1498',
        mustKnow: true,
        audioKey: 'vasco-da-gama',
      },
      {
        nameCn: '拉斯卡萨斯',
        nameEn: 'Bartolomé de las Casas',
        ipa: '/bɑːrtoʊloʊˈmeɪ deɪ lɑːs ˈkɑːsɑːs/',
        roleCn: '从奴隶主转变为原住民保护者的西班牙神父',
        roleEn: 'Spanish priest who transformed from enslaver to Indigenous rights advocate',
        mustKnow: true,
        audioKey: 'bartolome-de-las-casas',
      },
      {
        nameCn: '巴托罗缪·迪亚斯',
        nameEn: 'Bartolomeu Dias',
        ipa: '/bɑːrˈtɒlɵmeʊ ˈdiːəs/',
        roleCn: '1488年绕过好望角的葡萄牙探险家',
        roleEn: 'Portuguese explorer who rounded the Cape of Good Hope in 1488',
        mustKnow: true,
        audioKey: 'bartolomeu-dias',
      },
      {
        nameCn: '泰诺人',
        nameEn: 'Taíno',
        ipa: '/ˈtaɪnoʊ/',
        roleCn: '加勒比地区原住民，哥伦布最初接触的族群',
        roleEn: 'Indigenous Caribbean people, the first group Columbus encountered',
        mustKnow: true,
        audioKey: 'taino',
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    // ── storyAnchor 卡（故事已覆盖）──────────────────────────
    {
      id: 'columbus-1492-voyage',
      termCn: '哥伦布 / 1492年航行',
      termEn: 'Columbus / The 1492 Voyage',
      standardRef: ['AP World KC-4.1', 'CA HSS 7.7.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'columbus-perpetrator-actor',
        nodeIds: ['columbus-N1', 'columbus-N4', 'columbus-N6', 'columbus-N10'],
        xiaoweiNote: {
          cn: `这整条视角就是讲 1492 年的航行。几个关键细节我记下来：

哥伦布（1492年航行的西班牙探险家）以为自己到了亚洲（"印度"），
所以叫当地人"Indians"——这个命名错误沿用了 500 年。
他一共去了 4 次，死前都不知道自己到了一个"新大陆"。

西班牙王室（伊莎贝拉女王 + 斐迪南国王）资助这次航行，
作为交换，哥伦布允诺把发现的土地都献给西班牙王室。

考点关键句：哥伦布 1492 年 10 月 12 日登陆今天的巴哈马群岛——
这一天欧洲人把它叫做"哥伦布日"，原住民把它叫做"殖民入侵的开始"。
这两种命名都是真实历史的一部分。

记忆口诀：**"1492 哥伦布航行过蓝色大洋"**
（"In 1492, Columbus sailed the ocean blue"——美国每个小学生都背这句。）`,
          en: `This entire perspective is about the 1492 voyage. Key details I'm noting down:

Columbus (the Spanish explorer who sailed across the Atlantic in 1492) thought he'd reached Asia
("the Indies"), so he called the people there "Indians" — that naming mistake lasted 500 years.
He made 4 voyages total and died still not knowing he'd found a "new continent."

The Spanish crown (Queen Isabella + King Ferdinand) funded the voyage.
In exchange, Columbus promised all discovered lands to the Spanish crown.

Key exam sentence: Columbus landed in what is now the Bahamas on October 12, 1492 —
Europeans call this "Columbus Day," Indigenous peoples call it "the beginning of colonial invasion."
Both names describe the same real historical event.

Mnemonic: **"In 1492, Columbus sailed the ocean blue"** —
every American elementary school student memorizes this.`,
        },
      },
    },

    {
      id: 'indigenous-perspective-taino',
      termCn: '原住民视角 / 泰诺人（Taíno）',
      termEn: 'Indigenous Perspective / Taíno People',
      standardRef: ['AP World KC-4.2', 'CA HSS 7.7.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'taino-girl-receiving-end',
        nodeIds: ['taino-N1', 'taino-N4', 'taino-N7', 'taino-N10'],
        xiaoweiNote: {
          cn: `小安娜卡奥娜这条视角是接触开始后的真实代价——
我读完很难受，但老师说这些内容是 AP 必考的。

泰诺人（Taíno，加勒比地区原住民）1492 年接触时人口约 30-50 万（海地岛）。
到 1548 年，当地人口减少了超过 90%。
原因：天花等疾病（原住民没有免疫力）+ 强制劳动 + 直接暴力。

考点关键句：欧洲人带来的**疾病**是人口崩溃最大的原因——
不是武器或军队，是病菌。这也是哥伦布大交换的一部分（考点卡 5 会详细讲）。

AP 还考：为什么原住民对欧洲疾病没有免疫力？
因为美洲大陆没有大规模饲养牛/猪/鸡等牲畜——这些牲畜是天花等疾病的原始宿主。
美洲原住民从来没有接触过这些病菌，所以完全没有免疫力。`,
          en: `The little Anacaona perspective shows the real cost after first contact —
I felt really sad reading it, but teacher said this material is tested on the AP.

The Taíno people (Indigenous Caribbean people) had a population of approximately
300,000-500,000 on Hispaniola (modern Haiti/Dominican Republic) at the time of contact in 1492.
By 1548, the local population had declined by over 90%.
Causes: smallpox and other diseases (Indigenous people had no immunity) + forced labor + direct violence.

Key exam sentence: **Disease** was the single biggest cause of population collapse —
not weapons or armies, but germs. This is also part of the Columbian Exchange (Concept Card 5 covers this in detail).

AP also asks: why did Indigenous peoples have no immunity to European diseases?
Because the Americas had no large-scale domesticated livestock (cattle/pigs/chickens) —
these animals were the original hosts for diseases like smallpox.
Indigenous Americans had never been exposed to these pathogens, so they had zero immunity.`,
        },
      },
    },

    {
      id: 'las-casas-reform',
      termCn: '拉斯卡萨斯 / 1542年新法',
      termEn: 'Las Casas / New Laws of 1542',
      standardRef: ['AP World KC-4.2', 'CA HSS 7.7.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'las-casas-lonely-mediator',
        nodeIds: ['lascasas-N3', 'lascasas-N7', 'lascasas-N10', 'lascasas-N12'],
        xiaoweiNote: {
          cn: `拉斯卡萨斯这条视角最让我思考——他一开始自己也是奴隶主，
然后良心发现变成了保护者。这种转变在历史上不多见。

拉斯卡萨斯（从奴隶主转变为原住民保护者的西班牙神父）花了几十年
写《西印度毁灭述略》记录殖民暴行，最终推动了 1542 年《新法》颁布——
西班牙王室名义上禁止对原住民奴役。

careful framing：但是《新法》没有被严格执行。
殖民者太多，王室管不住；而且拉斯卡萨斯为了保护原住民，
曾经提议从非洲进口奴隶代替他们劳动——后来他意识到这是错误的，
但那个历史时刻已经发生了。

考点关键句：拉斯卡萨斯是欧洲历史上最早系统性批判殖民暴力的人，
但他的"解决方案"本身也包含另一种剥削逻辑。AP 考题会让你评估：
他的倡导是进步还是不彻底的进步？`,
          en: `The Las Casas perspective made me think the most — he started as
an enslaver himself, then had a change of conscience. That kind of transformation
is rare in history.

Las Casas (Spanish priest who transformed from enslaver to Indigenous rights advocate)
spent decades writing accounts of colonial atrocities, eventually pushing for the 1542
New Laws — the Spanish crown nominally prohibited the enslavement of Indigenous peoples.

Careful framing: but the New Laws weren't strictly enforced.
There were too many colonists and the crown couldn't control them.
Also, to protect Indigenous peoples, Las Casas once proposed importing enslaved Africans
as a replacement labor force — he later recognized this was wrong, but that historical
moment already happened.

Key exam sentence: Las Casas was one of the earliest Europeans to systematically critique
colonial violence, but his own "solution" embedded another logic of exploitation.
AP questions will ask you to evaluate: was his advocacy progress, or only incomplete progress?`,
        },
      },
    },

    {
      id: 'columbian-exchange',
      termCn: '哥伦布大交换 / Columbian Exchange',
      termEn: 'The Columbian Exchange',
      standardRef: ['AP World KC-4.3', 'CA HSS 7.7.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'columbus-perpetrator-actor', nodeId: 'columbus-N10', context: '哥伦布船队带回西班牙的金、棉花、鹦鹉，以及偷带上船的泰诺人' },
          { lens: 'taino-girl-receiving-end', nodeId: 'taino-N4', context: '村子里出现从未见过的奇怪病症，小安娜卡奥娜的祖母最先倒下' },
        ],
      },
      standaloneText: {
        cn: `**哥伦布大交换（Columbian Exchange）**：1492 年后，欧洲和美洲之间
大规模交换动植物、疾病、人口的过程。这个词由历史学家 Alfred Crosby 1972 年命名。

**欧洲 → 美洲（带来的）**：
- 动物：马、猪、牛、鸡（美洲从来没有这些！）
  · 马改变了北美原住民的战争和狩猎方式
  · 猪等牲畜带来了天花、流感、麻疹
- 作物：小麦、甘蔗、大麦
- 疾病：**天花（smallpox）是最致命的**——某些地区原住民人口减少 90%
  · 原住民没有任何免疫力，因为他们从未接触过这些病菌

**美洲 → 欧洲（带走的）**：
- 作物：玉米（corn）、土豆（potato）、番茄（tomato）、辣椒、可可、烟草、花生
  · 土豆养活了 1700-1800 年代的欧洲穷人——爱尔兰大饥荒 (1845) 就是土豆病害引起的
  · 玉米传入中国和非洲后推动了人口爆炸
  · 番茄传入意大利 → 今天的"意大利番茄酱"其实来自美洲

**考点关键句**：哥伦布大交换对世界人口的影响是双向的——
欧洲人口因为新的粮食作物大幅增长；美洲原住民人口因为疾病大幅崩溃。
同一个"交换"，两边的体验是截然相反的。

记忆方法：**欧洲给美洲"三害"（马+猪+天花）；美洲给欧洲"三宝"（玉米+土豆+番茄）**
——当然这是简化版，但选择题常考这个框架。`,
        en: `**Columbian Exchange**: the large-scale transfer of plants, animals, diseases,
and people between Europe and the Americas after 1492. The term was coined by
historian Alfred Crosby in 1972.

**Europe → Americas (brought over)**:
- Animals: horses, pigs, cattle, chickens (the Americas had none of these!)
  · Horses transformed North American Indigenous warfare and hunting
  · Pigs and other livestock carried smallpox, influenza, measles
- Crops: wheat, sugarcane, barley
- Diseases: **smallpox was the deadliest** — Indigenous populations in some regions
  declined by 90%
  · Indigenous peoples had zero immunity because they had never encountered these pathogens

**Americas → Europe (taken back)**:
- Crops: corn (maize), potato, tomato, chili pepper, cocoa, tobacco, peanut
  · The potato fed Europe's poor in the 1700s-1800s — the Irish Famine (1845)
    was caused by a potato blight
  · Corn spread to China and Africa, driving massive population growth
  · The tomato reached Italy → today's "Italian tomato sauce" is actually American

**Key exam sentence**: the Columbian Exchange had opposite effects on world population —
European populations grew significantly thanks to new food crops; Indigenous American
populations collapsed dramatically due to disease. The same "exchange," two completely
opposite experiences on each side.

Mnemonic: **Europe gave the Americas "three curses" (horses + pigs + smallpox);
Americas gave Europe "three treasures" (corn + potato + tomato)** —
simplified, but this framework shows up constantly in multiple-choice questions.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是 AP 最高频考点之一——每届 SAT II 历史和 AP World 都有。
我的记法：画一张 T 形表格，左边欧→美，右边美→欧。
天花永远在欧→美那边，土豆永远在美→欧那边——记反了就扣分。`,
        en: `Teacher said this is one of the highest-frequency AP topics — every AP World
exam and SAT II History has it. My method: draw a T-chart, left side Europe→Americas,
right side Americas→Europe. Smallpox always goes Europe→Americas, potato always
goes Americas→Europe. Getting these backwards costs points.`,
      },
    },

    {
      id: 'portuguese-pioneers',
      termCn: '葡萄牙航海先驱',
      termEn: 'Portuguese Maritime Pioneers',
      standardRef: ['AP World KC-4.1', 'CA HSS 7.7.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `很多人以为大航海时代从哥伦布开始——其实**葡萄牙比西班牙早走了至少 50 年**。

**恩里克王子（Henry the Navigator，1394-1460）**：
葡萄牙王子，从来没有亲自出海，却是整个葡萄牙航海扩张的幕后推手。
他在萨格里什（葡萄牙最西南角）建了一所"航海学校"，
招募地图师、天文学家、阿拉伯领航员，系统研究非洲海岸线。
他推动葡萄牙从 1418 年开始沿非洲西海岸南下探索，目标是绕过非洲直接到亚洲。

**巴托罗缪·迪亚斯（Bartolomeu Dias，~1450-1500）**：
1488 年，他的船队成为**第一批绕过非洲最南端（好望角/Cape of Good Hope）的欧洲人**。
这意味着从欧洲绕非洲到亚洲的航线在理论上是通的——但迪亚斯的水手怕了，
不肯继续，他只好掉头返回葡萄牙。

**瓦斯科·达伽马（Vasco da Gama，~1469-1524）**：
1498 年，他完成了迪亚斯没走完的路——从葡萄牙出发，
绕好望角，**抵达印度卡利卡特（Calicut）**。
这是欧洲和亚洲之间第一条全程海路，打破了阿拉伯商人对香料贸易的垄断。

考点关键句：葡萄牙的策略是**绕非洲往东走**到亚洲；
西班牙雇用哥伦布的策略是**往西走**到亚洲——结果哥伦布撞上了美洲大陆。
两条路线、两个王国、两种结果，这是 AP 最爱考的对比。`,
        en: `Many people think the Age of Exploration started with Columbus — actually
**Portugal was at least 50 years ahead of Spain.**

**Henry the Navigator (1394-1460)**:
A Portuguese prince who never sailed himself, yet was the driving force behind
Portugal's entire maritime expansion. At Sagres (Portugal's southwest tip), he established
a "school of navigation," recruiting cartographers, astronomers, and Arab navigators
to systematically study the African coastline. He pushed Portugal to begin exploring
southward along Africa's west coast from 1418, aiming to reach Asia by sailing around Africa.

**Bartolomeu Dias (~1450-1500)**:
In 1488, his fleet became **the first Europeans to round Africa's southern tip
(the Cape of Good Hope)**. This proved that a sea route from Europe around Africa
to Asia was theoretically possible — but Dias's sailors panicked and refused to continue.
He had no choice but to turn back to Portugal.

**Vasco da Gama (~1469-1524)**:
In 1498, he completed the journey Dias couldn't finish — sailing from Portugal,
rounding the Cape of Good Hope, and **arriving at Calicut, India.**
This was the first complete sea route between Europe and Asia, breaking the Arab
merchants' monopoly on the spice trade.

Key exam sentence: Portugal's strategy was to **sail east around Africa** to Asia;
Spain hired Columbus to **sail west** to Asia — and Columbus ran into the American continent instead.
Two routes, two kingdoms, two outcomes — this contrast is one of the AP's favorite setups.`,
      },
      xiaoweiNote: {
        cn: `时间线一定要记顺序：
**1418** 葡萄牙开始沿非洲南下 → **1488** 迪亚斯绕过好望角 →
**1492** 哥伦布到达加勒比 → **1498** 达伽马到达印度。

选择题最爱考：谁第一个绕过好望角？答案是**迪亚斯**，不是达伽马。
达伽马是第一个到达印度的，不一样！`,
        en: `The timeline sequence is essential:
**1418** Portugal starts moving south along Africa → **1488** Dias rounds the Cape →
**1492** Columbus reaches the Caribbean → **1498** da Gama reaches India.

Multiple choice favorite: who was the first to round the Cape of Good Hope?
Answer: **Dias**, NOT da Gama. Da Gama was the first to reach India — different thing!`,
      },
    },

    {
      id: 'maritime-technology',
      termCn: '航海技术：caravel / lateen sail / astrolabe',
      termEn: 'Maritime Technology: Caravel / Lateen Sail / Astrolabe',
      standardRef: ['AP World KC-4.1', 'CA HSS 7.7.1'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'columbus-perpetrator-actor', nodeId: 'columbus-N2', context: '哥伦布站在圣玛利亚号（caravel）的甲板上，用星盘测量纬度' },
        ],
      },
      standaloneText: {
        cn: `1400 年代的欧洲人为什么突然能跨越大洋？不是因为他们更勇敢——
是因为他们得到了三样关键技术，这些技术大部分来自阿拉伯和中国。

**caravel（卡拉维尔帆船）**：
15 世纪葡萄牙人改进的新型帆船，比之前的船更小、更灵活，
吃水浅（可以进入浅海岸线探索），同时能抗风浪。
哥伦布的旗舰"圣玛利亚号"是 caravel，另外两艘"尼尼亚号"和"平塔号"也是。

**lateen sail（三角帆）**：
来自阿拉伯世界的帆型技术。传统欧洲方帆只能顺风行驶；
三角帆可以让船逆风行驶（利用侧向风力），
大幅扩大了帆船可以到达的海域范围。
这是阿拉伯文明对大航海时代最关键的技术贡献之一。

**astrolabe（星盘）**：
用于在海上测量星星的高度角，从而计算出船的纬度（南北位置）。
来自伊斯兰天文学，欧洲人从阿拉伯商人那里学来的。
没有星盘，船长不知道自己在哪条纬度线上，远洋导航几乎不可能。

考点关键句：大航海时代的技术基础是**跨文明的知识积累**——
caravel 是欧洲工程，lateen sail 来自阿拉伯，astrolabe 来自伊斯兰天文学，
指南针来自中国。欧洲人把这些技术整合在一起，不是"发明"了大航海，
而是"集成"了它。`,
        en: `Why could Europeans suddenly cross oceans in the 1400s? Not because they
were braver — but because they acquired three key technologies, most of which
came from the Arab world and China.

**Caravel**:
A new type of sailing ship improved by the Portuguese in the 15th century.
Smaller and more maneuverable than earlier ships, with a shallow draft (good for
exploring coastlines) but still capable of handling rough seas.
Columbus's flagship, the Santa María, was a caravel;
so were the Niña and the Pinta.

**Lateen sail**:
A triangular sail design from the Arab world. Traditional European square sails
could only sail downwind; lateen sails allowed ships to sail against the wind
(by harnessing crosswind forces), dramatically expanding the range of ocean
a sailing ship could navigate.
This was one of Arab civilization's most critical technological contributions
to the Age of Exploration.

**Astrolabe**:
Used at sea to measure the angle of stars above the horizon, allowing calculation
of the ship's latitude (north-south position). Derived from Islamic astronomy,
learned by Europeans from Arab traders.
Without an astrolabe, a captain had no idea what latitude line he was on —
deep-ocean navigation was nearly impossible.

Key exam sentence: the technological foundation of the Age of Exploration was
**cross-civilizational knowledge accumulation** — the caravel was European
engineering, the lateen sail came from the Arab world, the astrolabe from
Islamic astronomy, and the compass from China. Europeans didn't "invent"
ocean exploration — they **integrated** it.`,
      },
      xiaoweiNote: {
        cn: `老师强调：考试不会直接问"三角帆是谁发明的"，
而是问"为什么 15 世纪欧洲人能开始远洋航行"——
答题要提三样技术，顺序我记 **C-L-A**（Caravel-Lateen-Astrolabe）。

还有一个陷阱题：astrolabe 测的是**纬度**，不是经度。
经度在 18 世纪才能精确测量，1492 年哥伦布根本不知道自己的经度。`,
        en: `Teacher emphasized: the test won't ask "who invented the lateen sail."
It will ask "why could Europeans begin ocean navigation in the 15th century" —
answers need all three technologies. I remember them as **C-L-A**
(Caravel-Lateen-Astrolabe).

Trick question warning: the astrolabe measures **latitude**, not longitude.
Longitude couldn't be accurately measured until the 18th century —
Columbus in 1492 had no idea what his longitude was.`,
      },
    },

    {
      id: 'encomienda',
      termCn: '监护征赋制 / encomienda',
      termEn: 'Encomienda System',
      standardRef: ['AP World KC-4.2', 'CA HSS 7.7.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'las-casas-lonely-mediator', nodeId: 'lascasas-N3', context: '拉斯卡萨斯作为 encomendero 看着自己庄园里的 Taíno 人一批批死去' },
          { lens: 'taino-girl-receiving-end', nodeId: 'taino-N7', context: '小安娜卡奥娜的叔叔被分配到矿山，三个月后再没有回来' },
        ],
      },
      standaloneText: {
        cn: `**encomienda（监护征赋制）**：西班牙殖民政府在美洲建立的劳役制度，
1503 年由西班牙王室正式颁布。

运作方式：西班牙王室把一块土地和土地上的原住民"托管"给一个西班牙殖民者
（叫 encomendero）。这个 encomendero 有权强制要求原住民为他劳动——
挖金矿、种甘蔗、建筑——作为回报，他名义上有责任教化原住民成为基督徒。

实际发生了什么：
- 强制劳动条件极度恶劣，矿山中死亡率极高
- "教化基督徒"的承诺几乎从来没有兑现
- 原住民人口在 encomienda 制度下继续崩溃
- 拉斯卡萨斯本人就曾经是 encomendero，
  亲眼看到自己的 Taíno 工人一批批死去，才决心转变立场

1542 年《新法》名义上废除了 encomienda 的最恶劣形式，
但类似的强制劳动体系（**mita 制度**）在其他地区继续存在到 1800 年代。

考点关键句：encomienda 是**西班牙美洲殖民经济的核心劳动力制度**——
没有它，金银矿山无法运转，西班牙无法积累让欧洲权力格局改变的财富。

careful framing：encomienda 不是奴隶制，在法律定义上——
原住民名义上有人身自由，只是被要求"提供劳役"。
但在实际效果上与奴隶制几乎没有区别。
AP 考题经常让学生比较 encomienda（美洲原住民劳役）
和非洲奴隶贸易，找异同。`,
        en: `**Encomienda**: the labor tribute system established by the Spanish colonial
government in the Americas, formally decreed by the Spanish crown in 1503.

How it worked: the Spanish crown "entrusted" a parcel of land and the Indigenous people
living on it to a Spanish colonist (called an encomendero). This encomendero had the
right to compel Indigenous people to work for him — mining gold, growing sugarcane,
construction — in exchange, he was nominally responsible for converting the
Indigenous people to Christianity.

What actually happened:
- Forced labor conditions were extremely harsh; mine mortality was extremely high
- The promise of Christian conversion was almost never fulfilled
- Indigenous populations continued to collapse under the encomienda system
- Las Casas himself had been an encomendero, and watched his Taíno workers
  die in waves — that's what drove his transformation

The 1542 New Laws nominally abolished the worst forms of encomienda,
but similar forced labor systems (**the mita system**) continued in other
regions into the 1800s.

Key exam sentence: encomienda was the **core labor system of Spanish America's
colonial economy** — without it, gold and silver mines couldn't operate, and Spain
couldn't accumulate the wealth that reshaped Europe's power structure.

Careful framing: encomienda was technically not slavery in the legal definition —
Indigenous people nominally retained personal freedom; they were only "required to
provide labor tribute." But in practical effect, it was barely distinguishable from
slavery. AP questions frequently ask students to compare encomienda (Indigenous
labor tribute) with the African slave trade, analyzing similarities and differences.`,
      },
      xiaoweiNote: {
        cn: `AP 考过一道题："比较 encomienda 和大西洋奴隶贸易的异同"——
不能只写"都是强迫劳动"，要写具体区别：
- encomienda = 针对美洲原住民，名义上保留人身自由
- 大西洋奴隶贸易 = 针对非洲人，被当作财产买卖

还有一个细节：西班牙为什么后来改用非洲奴隶？
因为原住民被疾病杀死太快了，不够用了。这就是两个系统之间的历史连接。`,
        en: `AP has tested this: "Compare encomienda and the Atlantic slave trade" —
you can't just write "both used forced labor"; you need specific differences:
- encomienda = targeting Indigenous Americans, nominally retaining personal freedom
- Atlantic slave trade = targeting Africans, treated as property to be bought and sold

One more detail: why did Spain eventually shift to African enslaved labor?
Because disease was killing Indigenous peoples too fast — there weren't enough workers.
That's the historical link between the two systems.`,
      },
    },

    {
      id: 'spain-portugal-rivalry',
      termCn: '西葡竞争与教皇条约',
      termEn: 'Spain-Portugal Rivalry & Treaty of Tordesillas',
      standardRef: ['AP World KC-4.1', 'CA HSS 7.7.1'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'columbus-perpetrator-actor', nodeId: 'columbus-N12', context: '哥伦布回到西班牙后，葡萄牙国王立刻抗议：那片土地在我们的划线以内' },
        ],
      },
      standaloneText: {
        cn: `哥伦布 1492 年回到西班牙之后，麻烦来了：
葡萄牙国王声称那些新发现的土地按照他们之前的协议属于葡萄牙。
西班牙女王反驳。谁来裁判？教皇。

**1494 年《托尔德西里亚斯条约》（Treaty of Tordesillas）**：
教皇亚历山大六世（本人是西班牙人）主持，
在大西洋上画了一条南北分界线（位于佛得角群岛以西 370 里格处）：
- **分界线以西** → 西班牙的势力范围
- **分界线以东** → 葡萄牙的势力范围

结果：
- 整个美洲（除了巴西突出部分）归西班牙
- 非洲海岸、印度洋航线归葡萄牙
- 巴西位于分界线以东，所以今天巴西讲葡萄牙语；其余拉美讲西班牙语

careful framing：这条线是两个欧洲国家和教皇在地图上画的，
根本没有问过美洲或非洲任何原住民的意见。
法国、英国、荷兰后来都拒绝承认这条线，在 1500 年代开始各自殖民扩张。

考点关键句：《托尔德西里亚斯条约》是世界上**第一次把整个地球的主权在谈判桌上瓜分**的条约——
它的逻辑前提是：教皇有权把他从来没有去过的土地给任何他想给的人。`,
        en: `After Columbus returned to Spain in 1492, trouble started:
the Portuguese king claimed the newly discovered lands belonged to Portugal under
their prior agreements. The Spanish queen disputed this. Who would be the judge? The Pope.

**Treaty of Tordesillas (1494)**:
Pope Alexander VI (himself a Spaniard) presided over the process,
drawing a north-south dividing line across the Atlantic
(370 leagues west of the Cape Verde Islands):
- **West of the line** → Spain's sphere of influence
- **East of the line** → Portugal's sphere of influence

Results:
- All of the Americas (except the bulge of Brazil) went to Spain
- Africa's coastline and Indian Ocean routes went to Portugal
- Brazil fell east of the line, which is why Brazilians today speak Portuguese;
  the rest of Latin America speaks Spanish

Careful framing: this line was drawn on a map by two European countries and a Pope
without asking a single Indigenous person in the Americas or Africa.
France, England, and the Netherlands all later refused to recognize the line,
and began their own colonial expansions in the 1500s.

Key exam sentence: The Treaty of Tordesillas was the first treaty in history to
**divide sovereignty over the entire globe at a negotiating table** —
its underlying logic was that the Pope had the right to give away lands he had
never visited to anyone he chose.`,
      },
      xiaoweiNote: {
        cn: `这张卡最容易考"巴西为什么讲葡萄牙语"——答案就是 Tordesillas 条约。
我第一次搞错过，以为巴西是西班牙殖民地。

记忆口诀：**条约画线 370 里，线西归西，线东归葡**。
然后记：巴西的"突出部"刚好在线东边，所以葡萄牙语。`,
        en: `This card is most often tested through "why does Brazil speak Portuguese?" —
the answer is the Treaty of Tordesillas. I got this wrong the first time,
thinking Brazil was a Spanish colony.

Mnemonic: **The line is 370 leagues from the Cape Verde Islands, west goes to Spain,
east goes to Portugal.** Then remember: Brazil's "bulge" lands just east of the line
— so Portuguese.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `"哥伦布大交换"这个词听起来很中立——好像就是双方各给了对方一些东西。
但欧洲得到的是玉米和番茄；美洲得到的是天花，以及人口减少 90% 的代价。

你觉得"哥伦布大交换"这个词用得准确吗？
如果让你重新命名这段历史，你会叫它什么？为什么？`,
      en: `"Columbian Exchange" sounds neutral — as if both sides simply gave each other some things.
But Europe got corn and tomatoes; the Americas got smallpox, and populations that
declined by up to 90%.

Do you think the term "Columbian Exchange" is accurate?
If you could rename this period of history, what would you call it? Why?`,
      hintCn: `提示：历史学家对这个命名一直有争议。

一种观点：叫"交换"是回避了权力不对等的现实——
这不是两个平等方之间的贸易，而是一方在不知情的情况下失去了几乎一切。

另一种观点：从地球生态系统的角度看，确实是"交换"——
动植物跨越了隔绝亿年的大洋，这个生物学意义上的混合是双向的，
无论有没有帝国扩张都可能最终发生（只是速度会不同）。

进阶思考：命名本身有没有政治含义？谁在命名，站在谁的立场上命名？
（提示：Alfred Crosby 是 1972 年命名的，那个时代美国正在重新思考殖民历史。）`,
      hintEn: `Hint: historians have debated this naming for decades.

One view: calling it an "exchange" avoids the reality of power imbalance —
this wasn't trade between two equal parties; it was one side unknowingly losing
almost everything.

Another view: from an Earth ecosystem perspective, it really was an "exchange" —
plants and animals crossed oceans that had separated them for millions of years.
This biological mixing was bidirectional, and might eventually have happened
regardless of imperial expansion (just at a different speed).

Going deeper: does naming itself carry political meaning? Who is doing the naming,
and from whose standpoint?
(Hint: Alfred Crosby coined the term in 1972, when America was reconsidering
its colonial history.)`,
      conceptsActivated: ['columbian-exchange', 'indigenous-perspective-taino'],
    },
    {
      id: 'q2',
      cn: `拉斯卡萨斯（从奴隶主转变为原住民保护者的西班牙神父）用了几十年时间记录
殖民暴行，推动了 1542 年《新法》——但他早期曾经建议用非洲奴隶替代原住民的劳动力。

他的倡导，是真正帮助了原住民，还是只是用一种剥削替换了另一种剥削？
拉斯卡萨斯算"进步人物"还是"不彻底的改革者"？两者都可以是对的吗？`,
      en: `Las Casas (Spanish priest who transformed from enslaver to Indigenous rights advocate)
spent decades documenting colonial atrocities and helped push through the New Laws of 1542 —
but in his earlier years he suggested using enslaved Africans to replace Indigenous labor.

Did his advocacy genuinely help Indigenous peoples, or did it just replace one form
of exploitation with another?
Is Las Casas a "progressive figure" or an "incomplete reformer"?
Can both be true at the same time?`,
      hintCn: `提示：历史人物很少是"全好"或"全坏"的——AP 写 essay 要求你能持有矛盾的观点。

拉斯卡萨斯确实减少了部分暴行：《新法》在某些地区真的被执行，
救了一些原住民的命。但他的提议引入了大西洋奴隶贸易的逻辑，
而那个体系造成了更大规模的痛苦。

进阶思考：如果你处在 1520 年代的历史情境里，
你能想到一个"更好的方案"吗？还是说任何个人在当时的权力结构里
都只能做"两害相权取其轻"的选择？`,
      hintEn: `Hint: historical figures are rarely purely good or purely bad —
AP essays require you to hold contradictory judgments simultaneously.

Las Casas did reduce some atrocities: the New Laws were actually enforced in some
regions and saved some Indigenous lives. But his suggestion introduced the logic
of the Atlantic slave trade, and that system caused suffering on an even larger scale.

Going deeper: if you were living in the 1520s, could you imagine a "better solution"?
Or was any individual within that power structure limited to choosing "the lesser of two evils"?`,
      conceptsActivated: ['las-casas-reform', 'encomienda', 'indigenous-perspective-taino'],
    },
    {
      id: 'q3',
      cn: `1494 年，两个欧洲国家（西班牙和葡萄牙）和教皇在谈判桌上把整个地球瓜分了——
画了一条线，线左边是西班牙的，线右边是葡萄牙的。

这条线背后的权威是什么？教皇有权这样做吗？
如果不是教皇，还有什么机构或逻辑可以"合法地"把地球瓜分？
如果你是 1494 年的一个泰诺人（Taíno）或非洲人，你会怎么看这件事？`,
      en: `In 1494, two European countries (Spain and Portugal) and the Pope divided the entire
globe at a negotiating table — drawing a line where everything left of it was Spain's
and everything right of it was Portugal's.

What authority was behind this line? Did the Pope have the right to do this?
If not the Pope, what institution or logic could "legitimately" divide up the globe?
If you were a Taíno person or an African in 1494, how would you see this?`,
      hintCn: `提示：这道题挑战的是"合法性"这个概念——谁给了谁什么权力。

教皇的逻辑：教会代表上帝在地球上的权威，
"未开化"的土地属于教会来"文明化"，所以教皇有权分配。

现代国际法的逻辑：土地主权属于已经在上面生活的人民——
按这个逻辑，1494 年的条约从一开始就是非法的。

进阶思考：法国和英国后来说"我们不承认这条线"——
他们能进入美洲，靠的是什么逻辑？（提示：他们说"实际占领和开发"才是主权依据。）
这个逻辑，和"原住民已经在这里几千年了"的事实之间，有什么矛盾？`,
      hintEn: `Hint: this question challenges the concept of "legitimacy" — who gave whom what authority.

The Pope's logic: the Church represents God's authority on Earth;
"uncivilized" lands belong to the Church to "civilize," so the Pope can allocate them.

Modern international law's logic: land sovereignty belongs to the people already
living on it — by this logic, the 1494 treaty was illegal from the start.

Going deeper: France and England later said "we don't recognize this line" —
what logic did they use to enter the Americas?
(Hint: they argued that "actual occupation and development" was the basis of sovereignty.)
What contradiction exists between this logic and the fact that Indigenous peoples
had already been living there for thousands of years?`,
      conceptsActivated: ['spain-portugal-rivalry', 'columbus-1492-voyage', 'indigenous-perspective-taino'],
    },
  ],
};

export default notebook;
