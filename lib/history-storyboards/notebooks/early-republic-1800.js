// ─── 同伴笔记本架构 v1 · The Early Republic 1800-1828 ──────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 10 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点
//   - notebook 提供考点闭环（Louisiana Purchase / Lewis and Clark / War of 1812 / market revolution /
//     Missouri Compromise / Monroe Doctrine / strict-vs-loose construction / Tecumseh's confederacy /
//     slavery's westward expansion / Era of Good Feelings + corrupt bargain — 补完 APUSH Period 4 课纲）
//
// 课纲对齐：
//   - APUSH Period 4 (1800-1848)：Louisiana Purchase / War of 1812 / market revolution /
//     Missouri Compromise / Monroe Doctrine / first party system 改组
//   - California HSS Grade 8.4（早期共和国发展）/ 8.5（西进运动开端）
//
// 事实地基：对账 early-republic-1800-factledger.md（28 claim 全 ✅verified，4 红旗均已透明标注/框定）
//   - 路易斯安那购地 828,000 平方英里 / 1500 万美元（账本 #1）
//   - Erie Canal 363 英里 / 运费 100→6 美元（账本 #20-21）
//   - 36°30′ 线 / Missouri 蓄奴 + Maine 自由（账本 #16）
//   - Tippecanoe 1811.11.7（Tecumseh 当时外出招募盟友，对手是 Harrison vs 弟弟 Tenskwatawa，账本 #11）
//   - Thames 1813.10.5 Tecumseh 战死（账本 #12）
//   - "sold down the river" 为真实术语；两个 DEFAULT 角色为透明标注的合成桥接人物（账本 红旗 #1）
//
// schemaVersion: 1 · notebookVersion: early-republic-1800-v1

export var notebook = {
  topicId: 'early-republic-1800',
  topicNameCn: '早期共和国 1800-1828',
  topicNameEn: 'The Early Republic 1800-1828',
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
    cn: `今天老师说我们要学"早期共和国"——从 1801 年 Jefferson 上任，
到 1828 年 Jackson 当选，整整一代人。她说这是 APUSH Period 4 的核心，
路易斯安那购地、1812 战争、市场革命、密苏里妥协、门罗主义，全是反复考的点。

她给了一张纸，上面写着这些名字：

Thomas Jefferson（杰斐逊）、Tecumseh（特库姆塞）、
Meriwether Lewis & William Clark、Sacagawea（萨卡加维亚）、
Henry Clay（克莱）、James Monroe（门罗）、John Quincy Adams（小亚当斯）

还有一串词：Louisiana Purchase（路易斯安那购地）、War of 1812（1812 战争）、
market revolution（市场革命）、Erie Canal（伊利运河）、
Missouri Compromise（密苏里妥协）、Monroe Doctrine（门罗主义）、
strict vs loose construction（严格 vs 宽松解释宪法）。

我先记下来，等下读三个故事——Jefferson（买下半个大陆的掌权者）、
Tecumseh（想把几十个原住民民族联起来的孤独战略家）、
被推走的母亲和被卖往西的少年（被这段"成长"碾过去的人）——
读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页："同一片'新得到的'土地，
是另一群人'正在失去的'家。读这二十八年，要同时看见成长和代价。"`,
    en: `Today my teacher said we're learning "the Early Republic" — from Jefferson taking
office in 1801 to Jackson's election in 1828, a full generation. She said it's the core
of APUSH Period 4: the Louisiana Purchase, the War of 1812, the market revolution, the
Missouri Compromise, and the Monroe Doctrine are all tested again and again.

She gave us a sheet with these names:

Thomas Jefferson, Tecumseh,
Meriwether Lewis & William Clark, Sacagawea,
Henry Clay, James Monroe, John Quincy Adams

Plus a string of terms: Louisiana Purchase, War of 1812, market revolution, Erie Canal,
Missouri Compromise, Monroe Doctrine, strict vs loose construction.

Let me write these down. After I read the three stories — Jefferson (the man in power who
bought half a continent), Tecumseh (the lonely strategist who tried to unite dozens of
Native nations), and the mother pushed off her land plus the boy sold west (the people this
"growth" rolled over) — I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The same 'newly gained'
land is another people's 'home being lost.' To read these twenty-eight years, you have to
see the growth and the cost at the same time."`,
    keyTerms: [
      { cn: '路易斯安那购地', en: 'Louisiana Purchase' },
      { cn: '探索军团 / 刘易斯与克拉克探险', en: 'Corps of Discovery / Lewis and Clark Expedition' },
      { cn: '1812 战争（第二次独立战争）', en: 'War of 1812' },
      { cn: '强征水手', en: 'impressment' },
      { cn: '根特和约', en: 'Treaty of Ghent' },
      { cn: '新奥尔良之战', en: 'Battle of New Orleans' },
      { cn: '市场革命', en: 'market revolution' },
      { cn: '伊利运河', en: 'Erie Canal' },
      { cn: '工厂女孩', en: 'mill girls' },
      { cn: '1819 大恐慌', en: 'Panic of 1819' },
      { cn: '密苏里妥协', en: 'Missouri Compromise' },
      { cn: '好感时代', en: 'Era of Good Feelings' },
      { cn: '门罗主义', en: 'Monroe Doctrine' },
      { cn: '肮脏交易', en: 'corrupt bargain' },
      { cn: '严格 vs 宽松解释宪法', en: 'strict vs loose construction' },
      { cn: '被卖下河（内部奴隶贸易）', en: 'sold down the river' },
      { cn: '蒂珀卡努之战', en: 'Battle of Tippecanoe' },
    ],
    keyFigures: [
      {
        nameCn: '托马斯·杰斐逊',
        nameEn: 'Thomas Jefferson',
        ipa: '/ˈtɒməs ˈdʒɛfərsən/',
        roleCn: '第三任总统；写"人人生而平等"却终身蓄奴；主张严格解释宪法却买下半个大陆',
        roleEn: 'Third president; wrote "all men are created equal" yet enslaved people his whole life; championed strict construction yet bought half a continent',
        mustKnow: true,
        audioKey: 'thomas-jefferson',
      },
      {
        nameCn: '特库姆塞',
        nameEn: 'Tecumseh',
        ipa: '/təˈkʌmsə/',
        roleCn: 'Shawnee 领袖，想把几十个原住民民族联成一个跨民族联盟对抗西进，1813 战死于 Thames',
        roleEn: 'Shawnee leader who tried to forge dozens of Native nations into a cross-tribal confederacy against westward expansion; killed at the Thames in 1813',
        mustKnow: true,
        audioKey: 'tecumseh',
      },
      {
        nameCn: '萨卡加维亚',
        nameEn: 'Sacagawea',
        ipa: '/ˌsækədʒəˈwiːə/',
        roleCn: 'Shoshone 妇女，Lewis and Clark 探险的向导与翻译，没有她探险走不通',
        roleEn: 'Shoshone woman, guide and interpreter of the Lewis and Clark Expedition; without her the expedition could not have gotten through',
        mustKnow: true,
        audioKey: 'sacagawea',
      },
      {
        nameCn: '亨利·克莱',
        nameEn: 'Henry Clay',
        ipa: '/ˈhɛnri kleɪ/',
        roleCn: '密苏里妥协的促成者、American System 推手、1824"肮脏交易"的关键人',
        roleEn: 'Broker of the Missouri Compromise, promoter of the American System, key figure in the 1824 "corrupt bargain"',
        mustKnow: true,
        audioKey: 'henry-clay',
      },
      {
        nameCn: '詹姆斯·门罗',
        nameEn: 'James Monroe',
        ipa: '/ˈdʒeɪmz mənˈroʊ/',
        roleCn: '第五任总统，"好感时代"与门罗主义都以他命名',
        roleEn: 'Fifth president; both the "Era of Good Feelings" and the Monroe Doctrine bear his name',
        mustKnow: true,
        audioKey: 'james-monroe',
      },
      {
        nameCn: '约翰·昆西·亚当斯',
        nameEn: 'John Quincy Adams',
        ipa: '/dʒɒn ˈkwɪnzi ˈædəmz/',
        roleCn: '门罗主义真正的设计者（任国务卿时）；1824 经"肮脏交易"之争当选总统',
        roleEn: 'The real architect of the Monroe Doctrine (as Secretary of State); won the presidency in 1824 amid the "corrupt bargain" dispute',
        mustKnow: true,
        audioKey: 'john-quincy-adams',
      },
      {
        nameCn: '安德鲁·杰克逊',
        nameEn: 'Andrew Jackson',
        ipa: '/ˈændruː ˈdʒæksən/',
        roleCn: '新奥尔良之战英雄；1824 落选、1828 当选，开启杰克逊时代',
        roleEn: 'Hero of the Battle of New Orleans; lost in 1824, won in 1828, opening the Jacksonian era',
        mustKnow: true,
        audioKey: 'andrew-jackson',
      },
      {
        nameCn: '梅里韦瑟·刘易斯',
        nameEn: 'Meriwether Lewis',
        ipa: '/ˈmɛrɪwɛðər ˈluːɪs/',
        roleCn: '探索军团联合指挥之一，溯密苏里河、翻落基山、抵太平洋',
        roleEn: 'One of the two commanders of the Corps of Discovery, up the Missouri, over the Rockies, to the Pacific',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '威廉·克拉克',
        nameEn: 'William Clark',
        ipa: '/ˈwɪljəm klɑːrk/',
        roleCn: '探索军团联合指挥之一，画出西部第一张地图',
        roleEn: 'One of the two commanders of the Corps of Discovery, who drew the first map of the West',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '威廉·亨利·哈里森',
        nameEn: 'William Henry Harrison',
        ipa: '/ˈwɪljəm ˈhɛnri ˈhærɪsən/',
        roleCn: '印第安纳准州州长，Tippecanoe 之战美方指挥，后成为总统',
        roleEn: 'Governor of the Indiana Territory, U.S. commander at Tippecanoe, later president',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '滕斯克瓦塔瓦（"先知"）',
        nameEn: 'Tenskwatawa ("the Prophet")',
        ipa: '/tɛnˈskwɑːtəwɑː/',
        roleCn: 'Tecumseh 之弟，从精神信仰一面号召原住民回到祖先的生活方式',
        roleEn: "Tecumseh's brother, who called Native peoples back to the ancestors' ways on the spiritual side",
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'louisiana-purchase',
      termCn: '路易斯安那购地',
      termEn: 'Louisiana Purchase',
      defCn: '1803 年美国花 1500 万美元从法国买下路易斯安那这片大陆，面积约 828,000 平方英里，一夜让美国面积翻倍。这是考试里"原则 vs 现实"最爱用的例子。',
      defEn: 'In 1803 the U.S. bought the Louisiana territory from France for $15 million — about 828,000 square miles — doubling the nation\'s size overnight. It\'s the go-to exam example of "principle vs. reality."',
      standardRef: ['APUSH Period 4 — Louisiana Purchase', 'CA HSS 8.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'jefferson-actor',
        nodeIds: ['er-jefferson-n4', 'er-jefferson-n5', 'er-removed-n4'],
        xiaoweiNote: {
          cn: `Jefferson 那条故事线里讲得最完整。
本来 Jefferson 只想花至多 1000 万美元买 New Orleans（控制密西西比河出海口）。
结果法国人甩卖整块 Louisiana——**828,000 平方英里，1500 万美元**，国家面积一夜翻倍。

必背三个数：**828,000 平方英里 / 1500 万美元 / 面积翻倍**（每英亩才几美分）。

考点关键句：Jefferson 一向主张"严格解释宪法"（strict construction）——意思是宪法没写的，政府就不能做。
可是买下半个大陆这件事，宪法压根没提过。他还是签了字。
他后来说，这是"在国家利益面前，把对宪法的顾虑咽了下去"。
AP 最爱考这个"原则 vs 现实"的张力——记住这句话。

别忘了另一面（被推走的母亲那条故事线）：那片地不是空的。
上面住着几十个原住民民族。巴黎签字的屋里，没有一个原住民在场。
**"史上最划算的买卖"，是从别人的家上压过去的。**`,
          en: `Jefferson's story thread covers this most fully.
Jefferson only meant to spend at most $10 million to buy New Orleans (to control the
Mississippi outlet). Instead the French sold the whole of Louisiana — **828,000 square
miles, $15 million** — doubling the nation's size in a night.

Three must-memorize numbers: **828,000 sq mi / $15 million / size doubled** (a few cents per acre).

Key exam sentence: Jefferson always argued "strict construction" — meaning the government
can't do what the Constitution doesn't spell out. Buying half a continent isn't in the
Constitution. He signed anyway. He later said he "swallowed his constitutional doubts for
the good of the country." AP loves this "principle vs. reality" tension — memorize that line.

Don't forget the other side (the mother's story thread): the land was not empty.
Dozens of Native nations lived on it, and not one was in the Paris room.
**The "best bargain in history" was pressed down on someone else's home.**`,
        },
      },
    },

    {
      id: 'lewis-and-clark',
      termCn: '探索军团 / 刘易斯与克拉克探险',
      termEn: 'Corps of Discovery (Lewis and Clark)',
      defCn: '1804-1806 年，Jefferson 派 Meriwether Lewis 和 William Clark 带队从圣路易出发，一路走到太平洋，画出西部第一张地图。向导 Sacagawea 是探险成功的关键。',
      defEn: 'From 1804 to 1806, Jefferson sent Lewis and Clark\'s team from St. Louis all the way to the Pacific, mapping the West for the first time. Guide Sacagawea was key to the expedition\'s success.',
      standardRef: ['APUSH Period 4 — westward exploration', 'CA HSS 8.5'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'jefferson-actor',
        nodeIds: ['er-jefferson-n6'],
        xiaoweiNote: {
          cn: `Jefferson 那条故事线里有这一段。买完地，Jefferson 派 Meriwether Lewis 和 William Clark
带"探索军团"(Corps of Discovery) 去看到底买了什么：**1804 年 5 月**从圣路易附近出发，
溯密苏里河、翻落基山、抵太平洋，**1806 年 9 月**返回，画出西部第一张地图。

老师反复纠正的**误解陷阱**：
① 误："Lewis and Clark 是孤胆英雄，自己一路走通的。"
② 正：没有 **Sacagawea**（萨卡加维亚，Shoshone/肖肖尼族妇女）做向导和翻译、
没有沿途多个原住民民族帮助，这趟探险根本走不通。

记忆锚：**地图往西画一寸 = 替白人小农往西钉一根木桩**。
探险不只是"知识"——它给白人移民铺了往西的路，也踩在别人的家上。`,
          en: `Jefferson's story thread covers this segment. After buying the land, Jefferson
sent Meriwether Lewis and William Clark with the "Corps of Discovery" to see what he had
bought: out from near St. Louis in **May 1804**, up the Missouri, over the Rockies, to the
Pacific, returning in **September 1806**, drawing the first map of the West.

The **misconception trap** my teacher kept correcting:
① Misconception: "Lewis and Clark were lone heroes who got through on their own."
② Correction: without **Sacagawea** (a Shoshone woman) as guide and interpreter, and the help
of several Native nations along the way, the expedition could not have gotten through.

Memory anchor: **every inch of map drawn west = one stake driven west for white small farmers.**
The expedition wasn't just "knowledge" — it paved the westward road for white settlers,
standing on top of someone's home.`,
        },
      },
    },

    {
      id: 'war-of-1812',
      termCn: '1812 战争（第二次独立战争）',
      termEn: 'War of 1812',
      defCn: '1812-1815 年美国和英国打的一场战争。起因是英国在海上拦截美国船、强征（impressment）水手。战后双方签约"恢复战前原状"，谁也没多得。',
      defEn: 'A war fought between the U.S. and Britain from 1812 to 1815. It started because Britain seized American ships and forced American sailors into their navy (impressment). The peace treaty restored the prewar status quo — neither side gained much.',
      standardRef: ['APUSH Period 4 — War of 1812', 'CA HSS 8.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'jefferson-actor',
        nodeIds: ['er-jefferson-n7'],
        xiaoweiNote: {
          cn: `Jefferson 那条故事线里有这一段。起因有三点：
① 英国在海上拦截美国船、**强征水手**（impressment，把美国水手强拉去替英国打仗）。
② 英国被疑在背后撑原住民抵抗。

**1812 年 6 月**美国对英宣战（那时 Jefferson 已卸任，继任 Madison）。
后人叫它"第二次独立战争"。
**1814 年 8 月**英军一把火烧了华盛顿，连白宫都烧了。
**1814 年 12 月**双方在比利时 Ghent（根特）签和约——基本"恢复战前原状"，谁也没多得。

老师反复纠正的**误解陷阱**：
① 误："1812 战争美国大胜英国。"
② 正：和约是"恢复战前原状"，没人多得。让全国记住"美国赢了"的 **Battle of New Orleans
（新奥尔良之战，1815 年 1 月，Jackson 指挥）其实打在和约签完之后**——消息还没漂过大西洋。

考点关键句：**一场严格说"不必要"的胜仗，喂大了全国自豪感，也喂出了一位未来总统（Jackson）。**`,
          en: `Jefferson's story thread covers this segment. Three causes:
① Britain seized American ships and **forced sailors into service** (impressment — dragging
American sailors to fight for Britain).
② Britain was suspected of backing Native resistance.

In **June 1812** the U.S. declared war on Britain (Jefferson had already left office, succeeded
by Madison) — later called the "second war of independence."
In **August 1814** British troops burned Washington, even the White House.
In **December 1814** the two sides signed peace at Ghent (Belgium) — essentially "restoring
the prewar status quo" — neither gained much.

The **misconception trap** my teacher kept correcting:
① Misconception: "America won the War of 1812 decisively."
② Correction: the treaty restored the status quo; no one gained much. The **Battle of New
Orleans (January 1815, commanded by Jackson) that made the nation remember "America won"
was actually fought after the peace was signed** — the news hadn't crossed the Atlantic.

Key exam sentence: **a strictly "unnecessary" victory fed national pride and fed a future
president (Jackson).**`,
        },
      },
    },

    {
      id: 'market-revolution',
      termCn: '市场革命（运河 + 工厂 + 全国市场）',
      termEn: 'Market Revolution',
      defCn: '1810-1820 年代美国发生的一场大变化：运河和蒸汽船把全国连起来，工厂大规模雇工，西部、南方、东北形成一个全国市场。这是 APUSH Period 4 的主框架。',
      defEn: 'A major transformation in the U.S. during the 1810s-1820s: canals and steamboats linked the country, factories hired workers at scale, and the West, South, and Northeast formed one national market. This is the main framework for APUSH Period 4.',
      standardRef: ['APUSH Period 4 — market revolution', 'CA HSS 8.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'jefferson-actor',
        nodeIds: ['er-jefferson-n9', 'er-removed-n8'],
        xiaoweiNote: {
          cn: `Jefferson 那条故事线的第 9 节和被卖少年那条故事线的第 8 节都有讲。
**market revolution（市场革命）** 是 APUSH Period 4 的主框架，三根线同时拉起：

① **交通**：运河、蒸汽船让货物第一次能快速跨越整个国家。
② **工厂**：New England 河边纺织厂，首次大规模雇用 **mill girls**（工厂女孩）——15 到 35 岁的年轻女性第一次成批离开农场、拿工资。
③ **市场扩张**：西部种粮、南方种棉、东北做工，三者靠运河连成全国市场。

必背数字：**1825 年 Erie Canal（伊利运河，363 英里）通航，一吨货运费从约 100 美元暴跌到约 6 美元**——一个数字就解释了为什么这是"革命"。

老师反复纠正的**误解陷阱**：
① 误："市场革命让奴隶制慢慢消失了。"
② 正：恰恰相反。运河让棉花卖得更远更贵 → 棉花更赚钱 → 开更多棉田 → 卖更多像那个少年一样的人去种。
**市场革命和奴隶制是互相喂养的。**

记忆锚：连成一张网 = 一处崩、处处疼 → 直接引出 **Panic of 1819**（见下一张卡）。`,
          en: `Jefferson's story thread (node 9) and the sold boy's story thread (node 8) both cover this.
The **market revolution** is the main framework of APUSH Period 4, with three threads pulled tight at once:

① **Transportation**: canals and steamboats let goods move fast across the whole country for the first time.
② **Factories**: New England riverside textile mills hired **mill girls** at scale — young women ages 15-35 left farms in large numbers to earn wages for the first time.
③ **Market expansion**: the West grew grain, the South grew cotton, the Northeast made goods — all linked into one national market by canals.

Must-memorize number: **in 1825 the Erie Canal (363 miles) opened, and freight for a ton of
goods crashed from about $100 to about $6** — one number explains why this is a "revolution."

The **misconception trap** my teacher kept correcting:
① Misconception: "The market revolution made slavery slowly fade."
② Correction: the very opposite. Canals let cotton sell farther and dearer → cotton made more
money → more cotton fields → more people like that boy sold to work them.
**The market revolution and slavery fed each other.**

Memory anchor: linking into one net = one crash hurts everywhere → leads straight into the
**Panic of 1819** (see the next card).`,
        },
      },
    },

    {
      id: 'missouri-compromise',
      termCn: '密苏里妥协（36°30′ 线）',
      termEn: 'Missouri Compromise (36°30′ line)',
      defCn: '1820 年国会通过的一个妥协方案。Missouri 以蓄奴州入盟、Maine 以自由州入盟，同时画一条北纬 36°30′（地图上的一条纬线）——线以北今后禁止蓄奴。这条线把矛盾"冻住"了四十年，却没解决。',
      defEn: 'A compromise Congress passed in 1820. Missouri entered as a slave state, Maine as a free state, and a line was drawn at latitude 36°30\' (a horizontal line on the map) — slavery banned north of that line in the Louisiana Purchase. The line "froze" the conflict for forty years but didn\'t solve it.',
      standardRef: ['APUSH Period 4 — Missouri Compromise', 'CA HSS 8.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'jefferson-actor',
        nodeIds: ['er-jefferson-n8'],
        xiaoweiNote: {
          cn: `Jefferson 那条故事线里有这一段。**1820 年** Missouri（密苏里）申请以蓄奴州身份入盟，
打破自由州 vs 蓄奴州的平衡，国会吵翻。**Henry Clay** 牵头拼出 **Missouri Compromise**：

必背三件套：
① **Missouri 蓄奴州 + Maine（缅因）自由州**一起入盟（保住平衡，一边加一个）。
② 画一条线——路易斯安那购地内 **北纬 36°30′（地图上的一条纬线）以北今后禁止蓄奴**。
③ 这条线把 Jefferson 买的那片地，一刀劈成"自由"和"蓄奴"两半。

考点关键句（DBQ 高频）：Jefferson 听到这条线**没有欢呼，而是恐惧**——他在私信里写它
"像深夜里的一声火警钟，把我惊醒、吓坏"（fire bell in the night）。他看出：
国家一旦沿一条地理线劈成两半，裂缝就再也合不上。**四十年后的内战**证明他没听错。

老师强调：
① 误："密苏里妥协解决了奴隶制问题。"
② 正：它只是把矛盾沿 36°30′ 线**冻起来**、换来四十年和平，却把"奴隶制能往哪扩"变成全国政治的中心。妥协 = 把引信加长，不是拆掉。`,
          en: `Jefferson's story thread covers this segment. In **1820** Missouri applied to join as a slave state,
breaking the free-vs-slave balance, and Congress erupted. **Henry Clay** brokered the
**Missouri Compromise**:

Must-memorize trio:
① **Missouri enters slave + Maine enters free** together (keeps the balance, one for each side).
② A line is drawn — within the Louisiana Purchase, **slavery banned north of latitude 36°30′ (a horizontal line on the map)** from now on.
③ That line cut the very land Jefferson bought into "free" and "slave" halves.

Key exam sentence (high-frequency DBQ): hearing the line, Jefferson **did not cheer — he
was afraid** — he wrote in a private letter that it was "like a fire bell in the night,"
that it "awakened and filled me with terror." He saw it: once a nation splits along a
geographic line, the crack can never close. The **Civil War forty years later** proved him right.

Teacher stressed:
① Misconception: "the Missouri Compromise solved slavery."
② Correction: it only **froze** the conflict along the 36°30′ line, bought forty years of peace,
and turned "where can slavery expand" into the center of national politics.
Compromise = lengthening the fuse, not pulling it.`,
        },
      },
    },

    {
      id: 'tecumseh-confederacy',
      termCn: 'Tecumseh 的跨民族联盟与崩塌',
      termEn: "Tecumseh's Confederacy & Its Collapse",
      defCn: 'Shawnee 领袖 Tecumseh 试图把几十个原住民民族联合成一个跨民族联盟（confederacy），守住一条底线：土地是共有的，不能卖。联盟在 1811 年蒂珀卡努之战受重创，1813 年 Tecumseh 战死后瓦解。',
      defEn: 'Shawnee leader Tecumseh tried to unite dozens of Native nations into a cross-tribal confederacy (confederacy = a united alliance), holding the line that land was shared and could not be sold. The confederacy was badly hurt at Tippecanoe in 1811 and collapsed after Tecumseh was killed in 1813.',
      standardRef: ['APUSH Period 4 — Native American resistance', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'tecumseh-mediator',
        nodeIds: ['er-tecumseh-n5', 'er-tecumseh-n6', 'er-tecumseh-n7', 'er-tecumseh-n8'],
        xiaoweiNote: {
          cn: `Tecumseh 那条故事线整个就是在讲这个。他看清了一件事：白人一个民族一个民族地买地、骗地、抢地，
**只要原住民各打各的，就一定一个个被吃掉**。所以他走遍五大湖到南方，去说服几十个有世仇的民族联合，
守一条底线：**土地是所有原住民共有的，任何单个民族都无权卖给白人**。

必记三个节点（背时间）：
① **联盟中心** Prophetstown（先知镇），他弟弟 **Tenskwatawa（"先知"）** 一文一武（精神号召）。
② **1811 年 11 月 7 日 Battle of Tippecanoe（蒂珀卡努之战）**：Tecumseh 外出招募盟友时，
   Harrison 率军逼近，联盟受重创、Prophetstown 被烧。（注意：对手是 Harrison vs 弟弟，Tecumseh 不在场。）
③ **1813 年 10 月 5 日 Battle of the Thames（泰晤士河之战，今加拿大安大略）**：1812 战争里 Tecumseh
   与英国结盟、继续抵抗，**战死于此**，联盟随之瓦解。

考点关键句：被推走的一方**不是被动等死**的——
他们里面有最清醒的战略家。Tecumseh 失败，不一定是想法错，可能是时间不够、大势太猛。
这正是"原住民能动性"(Native agency) 的核心论点——AP 越来越爱考这个角度。`,
          en: `Tecumseh's whole story thread is about this. He saw one thing: white people bought, tricked,
and seized land one nation at a time, and **as long as Native nations fought alone, they
would be eaten one by one**. So he traveled from the Great Lakes to the South to persuade
dozens of feuding nations to unite and hold one line: **the land belongs to all Native
peoples in common; no single nation has the right to sell it to whites**.

Three nodes to remember (memorize the dates):
① **Confederacy center** Prophetstown, with his brother **Tenskwatawa ("the Prophet")** —
   one word, one war (the spiritual call).
② **Nov 7, 1811 Battle of Tippecanoe**: while Tecumseh was away recruiting allies, Harrison
   marched in; the confederacy was badly hurt and Prophetstown burned.
   (Note: the opponent was Harrison vs the brother — Tecumseh was not there.)
③ **Oct 5, 1813 Battle of the Thames (in today's Ontario, Canada)**: in the War of 1812
   Tecumseh allied with Britain and kept resisting, was **killed here**, and the confederacy
   fell apart with him.

Key exam sentence: the side pushed off was **not passively waiting to die** —
it held the clearest strategist of its age. Tecumseh's failure may not mean the idea was
wrong, but that there wasn't enough time and the tide was too strong.
This is the core of "Native agency" — an angle AP tests more and more.`,
        },
      },
    },

    {
      id: 'slavery-westward-expansion',
      termCn: '奴隶制西扩与"被卖下河"',
      termEn: "Slavery's Westward Expansion & 'Sold Down the River'",
      defCn: '市场革命让棉花暴利，奴隶制随棉花向西扩张。被奴役者被从东边旧庄园卖往西南方的新棉田，这叫"被卖下河"（sold down the river）——意味着更重的劳作和与家人永远的分离。',
      defEn: 'The market revolution made cotton hugely profitable, and slavery expanded west with cotton. Enslaved people were sold from old eastern plantations to new southwestern cotton fields — called "sold down the river" — meaning harsher labor and permanent separation from family.',
      standardRef: ['APUSH Period 4 — domestic slave trade', 'AP DBQ rubric', 'CA HSS 8.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'removed-nation-and-the-enslaved',
        nodeIds: ['er-removed-n3', 'er-removed-n7'],
        xiaoweiNote: {
          cn: `被卖少年那条故事线的第 3 节和第 7 节。这是 AP 越来越爱考的"市场革命的暗面"。

背景：那个少年小时候，南方很多人以为奴隶制会**慢慢自己消失**（烟草把地种穷，养奴隶快不划算）。
可一样东西改变一切——**南方大种棉花，棉花变成印钞机**。棉花一暴利，像他这样的人一夜又变"值钱财产"。

必记术语：**"sold down the river"（被卖下河）**——这是被奴役者自己的真实叫法。
顺着密西西比河往南，就是从东边旧庄园（弗吉尼亚烟草庄园）被卖往西南方的**新棉田**
（阿拉巴马、密西西比），意味着更狠的劳作和**和家人永远的分离**。这就是"内部奴隶贸易"。

考点关键句：**"向西扩张"对白人农民是改命的方向，对被奴役者是被卖得更深、离家更远的方向**。
同一个"向西"，两个相反的世界——这正是 DBQ 要的"同一证据，两面读法"。

记忆锚：**新国家越往西"长大"、越富，他这样的人就被卖得越远。繁荣和被卖，是同一股力量。**`,
          en: `The sold boy's story thread, nodes 3 and 7. This is the "dark side of the market
revolution" that AP increasingly tests.

Background: when he was small, many in the South believed slavery would **fade on its own**
(tobacco wore out the soil, the enslaved seemed about to lose their worth). But one thing
changed everything — **the South grew cotton at scale, and cotton became a money-printing
machine**. Once cotton turned hugely profitable, people like him became "valuable property"
again overnight.

Must-memorize term: **"sold down the river"** — the enslaved people's own real name for it.
Down the Mississippi, south, meant being sold from the old eastern plantations (Virginia
tobacco) to the **new cotton fields** of the southwest (Alabama, Mississippi), meaning
harsher labor and **permanent separation from family**. This is the "domestic slave trade."

Key exam sentence: **"westward expansion" was a fate-changing direction for white farmers,
but for the enslaved it was the direction of being sold deeper, farther from home**.
The same "west," two opposite worlds — exactly the DBQ "same evidence, two readings."

Memory anchor: **the more the young nation "grew" west and grew rich, the farther people like
him were sold. Prosperity and being sold were one and the same force.**`,
        },
      },
    },

    {
      id: 'panic-of-1819',
      termCn: '1819 大恐慌（第一次全国经济危机）',
      termEn: 'Panic of 1819',
      defCn: '美国第一次全国性经济危机。战后投机、土地泡沫、第二合众国银行猛收贷款，三者叠加，引发地价崩、银行倒、城市大批失业。它告诉所有人：连成一张全国市场网，意味着一处崩就处处疼。',
      defEn: "America's first nationwide economic crisis. Postwar speculation, a land bubble, and the Second Bank of the United States suddenly tightening credit all hit at once — land values crashed, banks failed, and cities filled with the jobless. It showed everyone: link into one national market and one crash hurts everywhere.",
      standardRef: ['APUSH Period 4 — Panic of 1819', 'CA HSS 8.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'jefferson-actor', nodeId: 'er-jefferson-n9', context: '市场革命"连成一张网、一处崩处处疼"的具体爆点' },
          { lens: 'removed-nation-and-the-enslaved', nodeId: 'er-removed-n8', context: '危机一来，账本上的被奴役者最先被卖掉抵债' },
        ],
      },
      standaloneText: {
        cn: `**Panic of 1819（1819 大恐慌）** 是**美国第一次全国性经济危机**。
故事里只点了它的爆发，没单独展开——但它是市场革命"网越大、越脆弱"的活教材，要单独掌握。

**起因——三件事叠在一起：**
① **战后繁荣 + 投机**：1812 战争后欧洲恢复，对美国棉花和粮食的需求回落。
② **土地投机**：西部地价被炒高，借钱买地的人一大片。
③ **第二合众国银行（1816 年成立）先放水、后猛收贷**：信贷一收紧，泡沫就破了。

**后果：**
地价崩、银行倒、城市大批人失业——这是美国人第一次集体发现：
**连在一张全国市场网上，意味着一处崩、处处疼**。一个地方的危机会顺着网传遍全国。

**和奴隶制的连锁：**
危机一来，最先被当成"省钱的东西"卖掉抵债的，还是账本上的被奴役者。
繁荣时被卖得越远，崩塌时也照样第一个被推出去。

考点关键句：**Panic of 1819 = 美国第一次全国性经济萧条，是市场革命"系统性脆弱"的第一次显形**；
它也激化了关于第二合众国银行、联邦经济角色的争论，为后来的政党重组埋下情绪。`,
        en: `The **Panic of 1819** was **America's first nationwide economic crisis**.
The story only marks its outbreak without unpacking it — but it's a live lesson in the market
revolution's "the bigger the net, the more fragile," so master it separately.

**Causes — three things hitting at once:**
① **Postwar boom + speculation**: after the War of 1812, Europe recovered and demand for American cotton and grain fell.
② **Land speculation**: western land prices were bid up; many people borrowed to buy.
③ The **Second Bank of the United States (chartered 1816) first eased then sharply tightened credit**: when credit tightened, the bubble burst.

**Effects:**
Land values collapsed, banks failed, cities filled with the jobless — the first time Americans
collectively discovered that **being linked into one national market net means one crash hurts everywhere**.
A local crisis spreads nationwide along the net.

**The chain with slavery:**
When the crisis hit, the first "things to be sold off to pay debts" were still the enslaved on the ledger.
Sold ever farther in good times, pushed out first in the crash.

Key exam sentence: **the Panic of 1819 = America's first nationwide depression, the first
appearance of the market revolution's "systemic fragility"**; it also sharpened debate over
the Second Bank and the federal role in the economy, seeding the mood for later party realignment.`,
      },
      xiaoweiNote: {
        cn: `老师说这条 AP 不一定每年考，但它是把"市场革命"从"好消息"翻成"双刃剑"的关键证据。
记忆锚：**网越大 → 一处崩、处处疼**。这是"连接"的代价。

最容易得分的连锁：
繁荣（市场革命）→ 投机 + 银行放水 → 1819 年银行收贷 → 全国崩。
再加上"危机里被奴役者最先被卖掉抵债"这一句，就能在 DBQ 里同时拿住"繁荣"和"代价"两面。`,
        en: `Teacher said AP doesn't test this every year, but it's the key evidence that
flips the "market revolution" from "good news" to "double-edged sword."
Memory anchor: **bigger net → one crash hurts everywhere.** That's the cost of "connection."

The easiest-scoring chain:
Boom (market revolution) → speculation + easy bank credit → 1819 credit tightening → nationwide crash.
Add "in the crisis the enslaved were sold off first to pay debts," and you can hold both
"prosperity" and "cost" at once in a DBQ.`,
      },
    },

    {
      id: 'monroe-doctrine',
      termCn: '门罗主义',
      termEn: 'Monroe Doctrine',
      defCn: '1823 年 12 月 Monroe 总统宣布的外交原则：欧洲列强不能再把美洲当殖民对象，美洲的事美洲自己管。真正的设计者是国务卿 John Quincy Adams，不是 Monroe。当时美国海军太弱，靠英国海军的默契才有效。',
      defEn: 'A foreign-policy principle President Monroe announced in December 1823: European powers may not treat the Americas as colonies, and the Americas manage their own affairs. The real designer was Secretary of State John Quincy Adams, not Monroe. The U.S. navy was too weak to enforce it — it worked because the British navy quietly agreed.',
      standardRef: ['APUSH Period 4 — Monroe Doctrine', 'CA HSS 8.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'jefferson-actor', nodeId: 'er-jefferson-n9', context: '与市场革命、McCulloch 并列，作为这二十八年"外交一根线"被点到' },
        ],
      },
      standaloneText: {
        cn: `**Monroe Doctrine（门罗主义）** 是 APUSH Period 4 必考的**外交原则**，
故事里只点了一句，要单独掌握。

**是什么：**
**1823 年 12 月**，Monroe 总统在国情咨文里宣布——
**美洲不再是欧洲列强的殖民对象，美洲的事美洲自己管，美欧互不干涉**。
原文关键句："美洲大陆……从今往后，不能再被任何欧洲国家当作殖民的对象。"

**为什么这时提：**
拉美各国刚刚纷纷独立，眼看欧洲列强可能想趁机插手美洲。

**两个最常考的"反直觉"点：**
① **真正的设计者不是 Monroe，是国务卿 John Quincy Adams（小亚当斯）**——他后来当了总统。
   课本以 Monroe 命名，但主笔是 Adams。
② **1823 年的美国其实没实力执行它**——美国海军很弱。真正让它有效的，
   是当时**英国皇家海军**也不希望别国插手美洲（英美利益碰巧一致）。
   所以它更像一份"长期意向声明"，而非当下就能落地的硬实力。

考点关键句：**门罗主义定下了美国此后一个多世纪"把整个西半球视为自己后院"的外交基调。**`,
        en: `The **Monroe Doctrine** is a required **foreign-policy principle** in APUSH Period 4.
The story only mentions it briefly, so master it separately.

**What it is:**
In **December 1823**, President Monroe announced in his annual message —
**the Americas are no longer objects of European colonization; the affairs of the Americas
are for the Americas to manage; America and Europe should not interfere with each other.**
Key original line: "The American continents... are henceforth not to be considered as
subjects for future colonization by any European powers."

**Why now:**
The nations of Latin America had just been winning independence, and European powers looked
likely to try to step into the Americas.

**Two most-tested "counterintuitive" points:**
① **The real architect was not Monroe but Secretary of State John Quincy Adams** — who
   later became president. The textbook names it for Monroe, but Adams drafted it.
② **The U.S. in 1823 actually lacked the power to enforce it** — its navy was weak. What
   truly made it effective was that the **British Royal Navy** also did not want others
   stepping into the Americas (British and American interests happened to align). So it was
   more a "long-term statement of intent" than hard power that could act at once.

Key exam sentence: **the Monroe Doctrine set America's foreign-policy tone for over a century —
treating the whole Western Hemisphere as its own backyard.**`,
      },
      xiaoweiNote: {
        cn: `老师说门罗主义最爱出的陷阱题就是"谁设计的"——答案是 **John Quincy Adams**，不是 Monroe。
还有一个高频点："1823 年美国能执行它吗？"——不能，靠的是英国海军的默契。

记忆口诀：
**① 门罗主义 = 美洲是美国后院**
**② 真正作者是国务卿 Adams**
**③ 当时是空头支票（靠英国海军兜底）**`,
        en: `Teacher said the favorite trap question on the Monroe Doctrine is "who designed it" —
the answer is **John Quincy Adams**, not Monroe. Another high-frequency point: "could the
U.S. enforce it in 1823?" — no, it relied on the tacit backing of the British navy.

Mnemonic:
**① Monroe Doctrine = Americas are America's backyard**
**② Real author is Secretary of State Adams**
**③ At the time it was a blank check (backed by the British navy)**`,
      },
    },

    {
      id: 'eog-corrupt-bargain',
      termCn: '好感时代、肮脏交易与 1828 政党改组',
      termEn: 'Era of Good Feelings, Corrupt Bargain & the 1828 Realignment',
      defCn: '"好感时代"（约 1817-1825）是 1812 战争后表面上一团和气、一党独大的时期，底下其实是旧政党解体的过渡期。1824 年"肮脏交易"：Jackson 票最多却落选，Congress 选了 Adams，Clay 当上国务卿。Jackson 1828 年卷土重来当选，第一次政党体系彻底改组。',
      defEn: '"Era of Good Feelings" (c. 1817-1825) was a surface-calm, one-party period after the War of 1812 — underneath, old parties were dissolving. In the 1824 "corrupt bargain," Jackson got the most votes but lost; Congress chose Adams, and Clay became Secretary of State. Jackson won in 1828, and the first party system was thoroughly realigned.',
      standardRef: ['APUSH Period 4 — first party system collapse', 'CA HSS 8.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'jefferson-actor', nodeId: 'er-jefferson-n7', context: '新奥尔良大胜"喂出了一位未来总统"——埋下 Jackson 1828 当选的伏笔' },
        ],
      },
      standaloneText: {
        cn: `这张卡把"好感时代"到 1828 政党改组**一条政治线**连起来。
故事没展开这条线（它聚焦土地、战争、市场），但 APUSH 把它当 Period 4 收尾的关键转折，要单独掌握。

**① Era of Good Feelings（好感时代，约 1817-1825）：**
1812 战争后，联邦党（Federalists）声望扫地、几近消失，全国进入"一党独大"的表面和气。
1820 年 Monroe 几乎无人竞争地连任。但**"好感"是假象**——底下密苏里之争已经第一次
把国家按地理线劈成两半；旧政党在解体，新政党还没成形。这是"第一次政党体系"的瓦解期。

**② corrupt bargain（肮脏交易，1824-1825）：**
1824 大选四人混战，**Andrew Jackson 拿到最多普选票和选举人票却没过半数**。
按宪法第 12 修正案，由众议院从前三名里选。众议院议长 **Henry Clay 把票投给 John Quincy Adams**，
Adams 当选后又任命 Clay 当国务卿。Jackson 阵营大骂这是 **"corrupt bargain"（肮脏交易）**，
撕碎了"好感时代"的假和气。

**③ 1828 政党改组：**
憋着一口气的 Jackson 在 **1828 年**卷土重来、当选总统。
**第一次政党体系彻底改组**，围绕 Jackson 的新民主党登场——
这一代"站稳、长大"的故事，交棒给下一代"杰克逊时代"。

考点关键句：从 Jefferson（1801）到 Jackson（1828）整整一代人，结尾是**政党政治的重生**——
表面的"无党之和"（好感时代）其实是旧体系崩塌、新体系孕育的过渡期。`,
        en: `This card connects "Era of Good Feelings" through the 1828 realignment as **one
political thread**. The story doesn't unpack it (it focuses on land, war, market), but APUSH
treats it as the key turning point closing Period 4, so master it separately.

**① Era of Good Feelings (c. 1817-1825):**
After the War of 1812, the Federalists collapsed in reputation and nearly vanished, and the
country entered a surface harmony of "one-party dominance." Monroe won reelection in 1820
almost unopposed. But the **"good feelings" were an illusion** — beneath them the Missouri
fight had already split the nation along a geographic line; old parties were dissolving and
new ones not yet formed. This is the collapse phase of the "first party system."

**② Corrupt bargain (1824-1825):**
The 1824 election was a four-way scramble; **Andrew Jackson won the most popular and
electoral votes but no majority**. Under the **12th Amendment**, the House chose from the top
three. House Speaker **Henry Clay threw his support to John Quincy Adams**, and Adams, once
elected, appointed Clay Secretary of State. Jackson's camp denounced it as the **"corrupt
bargain,"** shredding the false harmony of the Era of Good Feelings.

**③ The 1828 realignment:**
Nursing his grievance, Jackson came roaring back and won the presidency in **1828**.
The **first party system was thoroughly realigned**, and a new Jacksonian Democratic Party
took the stage — this generation's "standing up, growing up" story handing off to the next,
the "Jacksonian era."

Key exam sentence: from Jefferson (1801) to Jackson (1828), a full generation, ends with the
**rebirth of party politics** — the surface "no-party harmony" (Era of Good Feelings) was
really a transition in which the old system collapsed and a new one was born.`,
      },
      xiaoweiNote: {
        cn: `老师说这条 AP 喜欢考"好感时代到底好不好感"——答案：表面和气，底下密苏里之争已经劈开国家，是假象。
还有"肮脏交易"是高频名词：Jackson 最多票却没过半 → 众议院选 Adams → Clay 当国务卿 → Jackson 骂。

记忆锚：
**① Era of Good Feelings = 假和气**
**② corrupt bargain = Clay 投 Adams、换来国务卿**
**③ 1828 = Jackson 复仇当选、政党重组**
这条线把整个 Period 4 收口。`,
        en: `Teacher said AP likes to ask "how good were the Era of Good Feelings" — answer:
surface harmony, but beneath it the Missouri fight had already split the nation; it was an
illusion. "Corrupt bargain" is a high-frequency term: Jackson had the most votes but no
majority → House chose Adams → Clay became Secretary of State → Jackson cried foul.

Memory anchor:
**① Era of Good Feelings = false harmony**
**② corrupt bargain = Clay backs Adams, gets Secretary of State**
**③ 1828 = Jackson's revenge win, party realignment**
This thread closes out all of Period 4.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `一向主张"宪法没写的，政府就不能做"的 Jefferson，
做了宪法压根没写的最大一件事——花 1500 万美元买下整块路易斯安那，让国家面积一夜翻倍。

你觉得这是"伟大的、负责任的政治家手笔"，还是"用国家利益给打破自己原则找了个体面台阶"？
用至少两条具体证据支持你的判断。`,
      en: `Jefferson, who always argued "government cannot do what the Constitution does not
say," did the single biggest thing the Constitution never authorized —
spending $15 million to buy all of Louisiana, doubling the nation's size in a night.

Do you see this as "the stroke of a great, responsible statesman," or as "using the good of
the country to find a respectable step down from breaking his own principle"?
Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `这题没有标准答案，考试评分看你**用证据**的能力，不看你站哪边。

"成熟担当"这边的证据：
① 机会百年难逢、错过就没。
② 1500 万买半个大陆、每英亩才几美分。
③ 原则死板到让国家错失生路才是失职。

"破例借口"这边的证据：
① 他自己承认"咽下了对宪法的顾虑"。
② 今天能为大义破一次，明天就能再破。
③ 他买的不只是"自由帝国"，还是奴隶制能西扩的地、几十个原住民正在失去的家。

高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（同时拿住两面的复杂性）。`,
      hintEn: `No standard answer — exam scoring looks at your ability to **use evidence**,
not which side you pick.

Evidence for "mature responsibility":
① The chance came once in a century and would be gone.
② $15 million for half a continent, a few cents per acre.
③ A principle so rigid it makes the nation miss its way out is the real dereliction of duty.

Evidence for "an excuse for an exception":
① He admitted he "swallowed his constitutional doubts."
② Break the rule once today and you can break it again tomorrow.
③ What he bought was not only an "empire of liberty" but land where slavery could spread west
   and the home dozens of Native nations were losing.

High-scoring move: acknowledge both sides stand, then explain why you lean one way —
that's complexity (holding both sides at once).`,
      conceptsActivated: ['louisiana-purchase', 'slavery-westward-expansion'],
    },
    {
      id: 'q2',
      cn: `课本里"向西扩张""市场繁荣"听起来全是好消息：领土翻倍、运费暴跌、机会遍地。
可对被推走的原住民母亲，那是"家一年比一年小"；对被卖往西的少年，那是"被卖得离家更远"。

如果你是 AP 老师，要出一道题考"一个国家的'成长'，必须踩着另一群人的'失去'时，
这个'成长'该怎么讲才算诚实"，你会怎么提问？写出你的题目，并说明它想逼学生看见什么。`,
      en: `In the textbook, "westward expansion" and "market prosperity" sound like all good
news: doubled territory, crashed freight, opportunity everywhere. But to the Native mother
pushed off, it was "home growing smaller year by year"; to the boy sold west, it was "being
sold farther from home."

If you were an AP teacher writing a question on "when a nation's 'growth' must stand on
another people's 'loss,' how should that 'growth' be told to be honest," how would you phrase
it? Write your question and explain what it's meant to make students see.`,
      hintCn: `好的考题通常逼学生**同时看见两件事**，而不是二选一。
你可以让学生比较"同一片地"的两种讲法：

讲法一：以"成长"为主语——购地让面积翻倍、运河让千万人更富。
讲法二：以"失去的人"为主语——被划走的玉米地、那条 36°30′ 线、"被卖下河"。

关键不是问"该不该承认进步"，而是问"把大多数受害者写成一行脚注的历史，缺了哪半真相"。
你的题目可以要求学生**各用一条具体证据**支撑两面——这正是 AP 要的"看见沉默的大多数"。`,
      hintEn: `A good exam question forces students to **see two things at once**, not pick one.
Have students compare two tellings of "the same land":

Telling 1: with "growth" as the subject — the purchase doubled territory, canals made millions richer.
Telling 2: with "the people who lost" as the subject — the cornfield marked away,
the 36°30′ line, "sold down the river."

The point isn't "should we admit progress," but "what half of the truth is missing from a
history that writes most of its victims as one footnote." Your question can require students
to support **both sides with one specific piece of evidence each** — exactly the AP
"see the silent majority."`,
      conceptsActivated: ['slavery-westward-expansion', 'missouri-compromise', 'market-revolution'],
    },
    {
      id: 'q3',
      cn: `Tecumseh 看清了"原住民不联合，就会被一个个吃掉"，拼尽一生想让几十个有世仇的民族
放下旧怨、先做一个共同体。他失败了：绳没拼成，他战死，联盟散了。

你觉得他失败，是因为这个"联合"的想法从一开始就太理想、根本做不到？
还是因为他看得对、只是来得太早、大势太猛？用至少一条具体证据支持你的看法。`,
      en: `Tecumseh saw clearly that "if Native nations do not unite, they will be eaten one by
one," and spent his whole life trying to get dozens of feuding nations to set down old
grudges and become one community first. He failed: the rope was never finished, he was
killed, the confederacy fell apart.

Do you think he failed because the idea of "union" was too ideal from the start, simply
undoable? Or because he saw rightly and only came too early, with the tide too strong?
Support your view with at least one specific piece of evidence.`,
      hintCn: `先把这题和"他是不是英雄"分开——考试不是让你给他打分，是让你分析"失败说明了什么"。

"想法太理想"这边的证据：
① 要几十个有世仇的民族放下几代旧怨、交出"我自己说了算"的权力，违背人性。
② 他一离开 Prophetstown，弟弟就没忍住开战（Tippecanoe）——联盟连一次外出都扛不住。

"看得对、只是太早"这边的证据：
① 他说"不联合就被一个个吃掉"，后来几十年东南原住民真的被一个个推走、被迫西迁，一一应验。
② Thames 一战他死、联盟散，正说明它太依赖一个人、还没长成。

高分写法：两面都拿住，再说明你为什么更倾向某一边。`,
      hintEn: `First separate this from "was he a hero" — the exam isn't asking you to grade him,
but to analyze "what the failure shows."

Evidence for "too ideal":
① Asking dozens of feuding nations to set down generations of grudges and hand over
  "I decide for myself" runs against human nature.
② The moment he left Prophetstown, his brother couldn't hold back from fighting (Tippecanoe)
   — the confederacy couldn't survive a single absence.

Evidence for "right but too early":
① He said "do not unite and you are eaten one by one," and in the decades that followed
   Southeastern Native nations really were pushed off one by one and forced west, borne out.
② That his death at the Thames scattered the confederacy shows it leaned too much on one man
   and hadn't matured.

High-scoring move: hold both sides, then explain why you lean one way.`,
      conceptsActivated: ['tecumseh-confederacy', 'louisiana-purchase'],
    },
  ],
};

export default notebook;
