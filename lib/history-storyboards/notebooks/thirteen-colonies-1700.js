// ─── 同伴笔记本架构 v1 · Thirteen Colonies c.1700 ─────────────────
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
//   - storyboard 提供情感锚点（种植园主设计者 / 契约奴夹中间 / 被奴役非洲人受影响方三条线）
//   - notebook 提供考点闭环（三大区 + 经济、契约奴→终身奴隶转向、Bacon\'s Rebellion 1676、
//     cash crop、原住民被推走 King Philip\'s War、重商主义/Navigation Acts、宗教多样、
//     Middle Passage、康熙同代对照 — 补完 CA HSS-5.3/5.4 + APUSH Period 2 课纲）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - California HSS Grade 5.3 / 5.4（殖民地建立与三大区差异）
//   - APUSH Period 2（1607-1754）：Topic 2.2-2.7（区域发展、跨大西洋贸易、劳动制度、Bacon\'s Rebellion）
//   - AP World History：跨大西洋奴隶贸易 / Middle Passage / 种植园经济
//
// 事实地基：对账 thirteen-colonies-1700.md narrative kernel
//   - 三大区经济准确（新英格兰小农渔业造船 / 中部面包篮 / 南部 cash crop）
//   - 契约奴→终身奴隶转向在 Bacon\'s Rebellion 1676 之后（账本 §4 plot beat 4）
//   - King Philip\'s War / Metacom\'s War 1675-76（账本附录 A 时间线）
//   - 被奴役人口 1700 约 2.7 万 → 1750 约 24 万（账本 L2 / 附录 A）
//   - 真实人物作背景：William Penn / Metacom（King Philip）/ Olaudah Equiano；三主角是合成人物（已标注）
//   - 无虚构引文（Equiano / 1705 弗吉尼亚法典为真实史料，不逐字塞进 note）
//   - 不与独立战争（1775）/ 制宪（1787）重叠
//
// schemaVersion: 1 · notebookVersion: thirteen-colonies-1700-v1

export var notebook = {
  topicId: 'thirteen-colonies-1700',
  topicNameCn: '北美十三殖民地 约 1700',
  topicNameEn: 'The Thirteen Colonies c.1700',
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
    cn: `今天老师说我们要学约 1700 年的北美十三殖民地（the Thirteen Colonies）。
她说这是 CA HSS 五年级和 APUSH Period 2 都要考的一块——重点不是「英国压迫殖民地」，
而是殖民地内部长成的三种社会，和一个很黑的转向：从契约奴变成终身奴隶。

她给了一张纸，上面写着这些名字：

William Penn（佩恩）、Metacom / King Philip（菲利普王）、
Olaudah Equiano（艾奎亚诺）

还有一串词：New England / Middle / Southern colonies（三大区）、
indentured servant（契约奴）、chattel slavery（终身奴隶制）、cash crop（经济作物）、
mercantilism（重商主义）、Middle Passage（中段航程）、Bacon's Rebellion（培根起义）。

我先记下来，等下读三个故事——种植园主（设计这套制度的人）、契约奴（夹在中间的人）、
被奴役的非洲人（被钉在最底下的人）——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「这片殖民地的「机会」和「繁荣」是真的，
可它建在从原住民手里夺来的地、和被奴役者无偿的劳动上。读它，要同时看见它的机会和它的代价。」`,
    en: `Today my teacher said we're learning the Thirteen Colonies around 1700.
She said it's tested in both CA HSS Grade 5 and APUSH Period 2 — and the point isn't
"England oppressed the colonies," but the three different societies that grew up inside
the colonies, and one very dark turn: from indentured servants to slaves for life.

She gave us a sheet with these names:

William Penn, Metacom / King Philip, Olaudah Equiano

Plus a string of terms: New England / Middle / Southern colonies, indentured servant,
chattel slavery, cash crop, mercantilism, Middle Passage, Bacon's Rebellion.

Let me write these down. After I read the three stories — the planter (who designed the
system), the indentured servant (caught in the middle), and the enslaved African (nailed
to the very bottom) — I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "This colony's
'opportunity' and 'prosperity' were real, but they were built on land taken from native
peoples and on the unpaid labor of the enslaved. To read it, you have to see its
opportunity and its cost at the same time."`,
    keyTerms: [
      { cn: '三大区（新英格兰 / 中部 / 南部）', en: 'the three regions (New England / Middle / Southern colonies)' },
      { cn: '契约奴', en: 'indentured servant' },
      { cn: '终身奴隶制（动产奴隶制）', en: 'chattel slavery' },
      { cn: '经济作物', en: 'cash crop' },
      { cn: '烟草 / 稻米', en: 'tobacco / rice' },
      { cn: '种植园', en: 'plantation' },
      { cn: '清教徒', en: 'Puritan' },
      { cn: '贵格会', en: 'Quaker' },
      { cn: '重商主义 / 航海条例', en: 'mercantilism / Navigation Acts' },
      { cn: '培根起义', en: 'Bacon\'s Rebellion' },
      { cn: '中段航程', en: 'Middle Passage' },
      { cn: '自由补偿', en: 'freedom dues' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '威廉·佩恩',
        nameEn: 'William Penn',
        ipa: '/ˈwɪljəm pɛn/',
        roleCn: '贵格会（Quaker）教徒，1682 年前后把宾夕法尼亚办成宗教宽容、与原住民相对和平的「神圣实验」',
        roleEn: 'A Quaker who, around 1682, founded Pennsylvania as a "holy experiment" of religious tolerance and relatively peaceful relations with native peoples',
        mustKnow: true,
        audioKey: 'william-penn',
      },
      {
        nameCn: 'Metacom / 菲利普王',
        nameEn: 'Metacom / King Philip',
        ipa: '/ˈmɛtəkɒm/ /kɪŋ ˈfɪlɪp/',
        roleCn: '新英格兰原住民领袖，1675-76 年联合多个部落反抗殖民扩张（King Philip\'s War），战败后原住民被大批杀戮、卖为奴、驱离土地',
        roleEn: 'A New England native leader who united several peoples to resist colonial expansion in 1675-76 (King Philip\'s War); after the defeat, native peoples were killed in large numbers, sold into slavery, and driven from their land',
        mustKnow: true,
        audioKey: 'metacom-king-philip',
      },
      {
        nameCn: '奥劳达·艾奎亚诺',
        nameEn: 'Olaudah Equiano',
        ipa: '/oʊˈlaʊdə ˌɛkwiˈɑːnoʊ/',
        roleCn: '少数留下 Middle Passage 第一手记述的被奴役者之一；其自传是研究跨大西洋奴隶航程的核心史料',
        roleEn: 'One of the few enslaved people who left a firsthand account of the Middle Passage; his autobiography is a core source on the transatlantic slave voyage',
        mustKnow: true,
        audioKey: 'olaudah-equiano',
      },
      {
        nameCn: '弗吉尼亚烟草种植园主（合成人物）',
        nameEn: 'Virginia Tobacco Planter (composite)',
        ipa: null,
        roleCn: '叙事性合成人物，代表南部种植园精英：既是「老板」又坐在 House of Burgesses 立法，把契约奴转成终身奴隶制的设计者之一',
        roleEn: 'A composite narrative figure standing for the southern planter elite: both a "boss" and a lawmaker in the House of Burgesses, one of the architects of the shift from indenture to chattel slavery',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '从英国来的契约奴（合成人物）',
        nameEn: 'English Indentured Servant (composite)',
        ipa: null,
        roleCn: '叙事性合成人物，代表契约奴群体：卖几年身换横渡大西洋的船票，卡在「契约奴→终身奴隶」的历史拐弯上',
        roleEn: 'A composite narrative figure standing for indentured servants: sold a few years of labor for passage across the Atlantic, caught on the historical bend from indenture to lifelong slavery',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '被奴役的西非人（合成人物）',
        nameEn: 'Enslaved West African (composite)',
        ipa: null,
        roleCn: '叙事性合成人物，代表被奴役非洲人群体：经 Middle Passage 被掳到南卡稻米种植园；其从西非带来的种稻知识让主人致富',
        roleEn: 'A composite narrative figure standing for enslaved Africans: dragged through the Middle Passage to a South Carolina rice plantation; the rice-growing knowledge he brought from West Africa made the master rich',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '纳撒尼尔·培根',
        nameEn: 'Nathaniel Bacon',
        ipa: '/nəˈθænjəl ˈbeɪkən/',
        roleCn: '1676 年弗吉尼亚起义的领头人；起义里穷白人与黑奴联手，吓坏了种植园精英',
        roleEn: 'Leader of the 1676 Virginia revolt; in the rebellion poor whites and enslaved blacks joined forces, terrifying the planter elite',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'three-colonial-regions',
      termCn: '三大区与各自的经济',
      termEn: 'The Three Colonial Regions & Their Economies',
      standardRef: ['CA HSS 5.3 / 5.4', 'APUSH KC-2.2 (regional development)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'indentured-servant',
        nodeIds: ['is-n8'],
        xiaoweiNote: {
          cn: `这个我读过！契约奴那一遍第 8 节专门把三块地讲清楚了。
同一面英国国旗下，地理不一样，经济就不一样，长出了三种完全不同的社会。

我背成一张对照表（CA HSS 几乎年年考）：
- New England（新英格兰：马萨诸塞、康涅狄格那一带）→ 土薄、冬天长，养不起大农场。
  靠小农场、捕鱼、造船、海运、做生意。围着 town（镇）和 church（教会）转，Puritan（清教徒）当家。
- Middle colonies（中部：纽约、宾州、新泽西、特拉华）→ 地肥、河流通航，是 breadbasket（面包篮），
  种小麦、玉米。人最杂、最宽容多元（Quaker、荷兰人后裔、各国移民混居）。
- Southern colonies（南部：弗吉尼亚、马里兰、南北卡、佐治亚）→ 气候湿热、土地广，
  靠 cash crop（经济作物）发财：烟草、稻米。最吃廉价劳力，所以契约奴和奴隶最多，那道肤色线划得最狠。

考点关键句：**地理 → 经济 → 劳动制度 → 社会结构**，一环扣一环。
别犯那个常见错误：❌「13 个殖民地都差不多」→ ✅ 三种完全不同的社会。`,
          en: `I read this! The indentured servant's Lens Node 8 lays out the three lands clearly.
Under the same English flag, the geography differed, so the economy differed, and three
completely different societies grew up.

I memorize it as a compare table (CA HSS tests it almost every year):
- New England (Massachusetts, Connecticut, etc.) → thin soil, long winters, can't support
  big farms. Lives by small farms, fishing, shipbuilding, shipping, and trade. Turns around
  the town and the church, with Puritans in charge.
- Middle colonies (New York, Pennsylvania, New Jersey, Delaware) → rich land, navigable
  rivers, the breadbasket, growing wheat and corn. The most mixed and tolerant (Quakers,
  descendants of the Dutch, migrants from many lands living side by side).
- Southern colonies (Virginia, Maryland, the Carolinas, Georgia) → hot, humid climate, wide
  land, grows rich on cash crops: tobacco and rice. Hungriest for cheap labor, so the most
  indentured servants and slaves, and the color line drawn the hardest.

Key exam sentence: **geography to economy to labor system to social structure** — one link
pulls the next. Don't make the common mistake: "the 13 colonies were all alike" is wrong;
they were three completely different societies.`,
        },
      },
    },

    {
      id: 'indenture-to-slavery-shift',
      termCn: '从契约奴到终身奴隶（Bacon\'s Rebellion 与分而治之）',
      termEn: 'The Shift from Indenture to Chattel Slavery (Bacon\'s Rebellion & Divide-and-Rule)',
      standardRef: ['CA HSS 5.4', 'APUSH KC-2.2 (labor systems)', 'APUSH Causation', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'colonial-elite',
        nodeIds: ['ce-n4', 'ce-n5', 'ce-n9'],
        xiaoweiNote: {
          cn: `这是整门课最重的一张卡，种植园主那一遍第 4、5、9 节从「设计者」内部讲了全过程。
三个视角都从各自一面碰到它，但精英这条线最完整。

先记住起点 **indentured servant（契约奴）**：英国的穷人签一张合同，白干 5 到 7 年、不给工钱，
换主人管吃管住 + 一张横渡大西洋的船票；到期发衣服、工具、有时一小块地——这叫 **freedom dues（自由补偿）**。
误解陷阱：❌「契约奴 = 奴隶」→ ✅ 契约奴**有年限、到期能翻身、法律上还是「人」**；
奴隶是**终身、可继承、被记成财产**。历史的拐弯，正是从前者滑向后者。

时间线我背成三步：
1. **1676 Bacon's Rebellion（培根起义）**：穷白人（很多是干完契约却没分到好地的前契约奴）
   和被奴役的黑人**联手**造反，烧了首府詹姆斯敦。底层不分肤色站到一起——这是精英最怕的画面。
2. **精英的对策不是改善底层，而是「分而治之」**：用一连串法律把「白人穷人」和「黑人」硬分两类。
   给穷白人一点甜头（你是「白的」、能有枪、能作证、将来或许有地）；
   把终身的、可继承的、按肤色划定的奴役（**chattel slavery**）全压到黑人身上。
3. **结果**：那道按肤色划的线成了南部经济的地基。被奴役人口 **1700 约 2.7 万 → 1750 约 24 万**。

考点关键句（APUSH Causation 高频）：**Bacon's Rebellion 1676 是「契约奴→种族奴隶制」转向的催化剂。**
误解陷阱：❌「殖民地从一开始就是黑人奴隶制」→ ✅ 早期主力是契约奴（很多是白人），
终身的、按种族划定的 chattel slavery 是 17 世纪后半叶被法律一步步**造出来**的。`,
          en: `This is the heaviest card in the whole topic. The planter's Lens Nodes 4, 5, and 9
tell the whole process from inside the "designer." All three lenses touch it from their own
side, but the elite's line is the most complete.

First, the starting point, the **indentured servant**: a poor person from England signs a
contract, working for nothing for five to seven years in exchange for food, lodging, and
passage across the Atlantic; at term's end, clothes, tools, and sometimes a small plot — called
**freedom dues**. Misconception trap: "indentured servant = slave" is wrong; an indentured
servant **has a term, can rise when it ends, and is still a "person" in law**, while a slave is
**for life, inheritable, recorded as property**. The bend of history is the slide from the former
into the latter.

I memorize the timeline in three steps:
1. **Bacon's Rebellion (1676)**: poor whites (many former indentured servants who served
   their terms but got no good land) and enslaved blacks **joined forces**, rose in revolt,
   and burned the capital, Jamestown. The bottom stood together regardless of color — the
   sight the elite feared most.
2. **The elite's answer wasn't to better the bottom but "divide and rule"**: a string of
   laws forced "poor whites" and "blacks" into two kinds. Poor whites got a sweetener (you
   are "white," may own a gun, give testimony, maybe one day hold land); all the lifelong,
   inheritable, color-defined servitude (**chattel slavery**) was pressed onto blacks.
3. **Result**: that color line became the foundation of the southern economy. The enslaved
   population rose **from about 27,000 in 1700 to about 240,000 in 1750**.

Key exam sentence (high-frequency APUSH Causation): **Bacon's Rebellion 1676 was the catalyst
of the shift from indenture to racial slavery.** Misconception trap: "the colonies were Black
slavery from the start" is wrong; the early mainstay was indentured servants (many white), and
lifelong, race-defined chattel slavery was **built** law by law in the later 1600s.`,
        },
      },
    },

    {
      id: 'cash-crops',
      termCn: '经济作物（烟草与稻米）',
      termEn: 'Cash Crops (Tobacco & Rice)',
      standardRef: ['CA HSS 5.4', 'APUSH KC-2.2 (regional development / Atlantic economy)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'colonial-elite',
        nodeIds: ['ce-n2'],
        xiaoweiNote: {
          cn: `种植园主那一遍第 2 节把这桩生意讲透了。
**cash crop（经济作物）** = 不是自己吃，是装船卖去英国换钱的作物。整个南部就靠它发财：
- 弗吉尼亚、马里兰种 **tobacco（烟草）**；
- 南卡种 **rice（稻米）**（稻米这门精细手艺，被奴役者那一遍的第 3 节讲得最透——
  靠的是西非人带来的治水、育苗知识）。

考点逻辑链（背熟）：**cash crop 累、吃人手 → 需要海量廉价劳力 → 雇不起、付不起工钱
→「谁来干、什么身份干」成核心问题 →（接上一张卡）契约奴转向终身奴隶。**

记忆锚：cash crop = 「为卖而种」。它是南部和新英格兰（小农自给+渔业）最大的区别，
也是南部为什么会一步步走向 chattel slavery 的经济**根**。`,
          en: `The planter's Lens Node 2 lays this business out fully.
A **cash crop** = a crop you don't eat yourself but load onto ships and sell to England for
money. The whole South grew rich on it:
- Virginia and Maryland grew **tobacco**;
- South Carolina grew **rice** (the fine craft of rice is best explained in the enslaved
  African's Node 3 — it rested on the water-management and seedling knowledge West Africans
  brought).

Exam logic chain (memorize it): **cash crops are brutal and devour hands → they need vast
cheap labor → planters can't afford wages → "who works, under what status" becomes the
central question → (link to the previous card) indenture turns into slavery for life.**

Memory anchor: cash crop = "grown to be sold." It is the biggest difference between the South
and New England (small subsistence farms + fishing), and the economic **root** of why the
South slid step by step into chattel slavery.`,
        },
      },
    },

    {
      id: 'native-displacement-king-philips-war',
      termCn: '原住民被推走（King Philip\'s War 1675-76）',
      termEn: 'Native Displacement (King Philip\'s War 1675-76)',
      standardRef: ['CA HSS 5.3', 'APUSH KC-2.4 (conflict with native peoples)', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'colonial-elite',
        nodeIds: ['ce-n7'],
        xiaoweiNote: {
          cn: `种植园主那一遍第 7 节讲「地是从哪来的」，最戳人。
主角说：都说殖民者来到一片「空地」、先到先得——这话不对，那地一点都不空，是被**清空**的。

考点关键事件：**King Philip's War（菲利普王之战，1675-76，新英格兰）**。
原住民领袖 **Metacom**（英国人叫他 **King Philip**）联合多个部落，反抗殖民者一步步往他们土地上挤。
打了一年多，原住民惨败——被大批杀戮、卖为奴隶、赶离世代居住的土地。
南部没有这么大的仗，但路数一样：用条约、枪、酒、病，一块块把原住民推向西边。

误解陷阱：❌「殖民地是一片空地，先到先得」→ ✅ 这片土地早住着原住民，
「空地」是通过**战争、疾病、驱离**被清空的。
记忆锚：种植园主那句「地从原住民手里，劳力从非洲——两样我都不是买来的，是拿来的」。`,
          en: `The planter's Lens Node 7, on "where the land came from," hits hardest.
The narrator says: people claim the settlers came to an "empty land," first come first
served — that's false. The land wasn't empty at all; it was **emptied**.

Key exam event: **King Philip's War (1675-76, New England)**. The native leader **Metacom**
(the English called him **King Philip**) united several peoples to resist the settlers
pressing onto their land. After more than a year the native side was crushed — killed in
great numbers, sold into slavery, driven from land held for generations. The South had no war
so large, but the method was the same: by treaty, gun, liquor, and disease, pushing native
peoples westward plot by plot.

Misconception trap: "the colonies were empty land, first come first served" is wrong; native
peoples already lived there, and the "empty land" was emptied through **war, disease, and
expulsion**. Memory anchor: the planter's line — "the land from native hands, the labor from
Africa; neither did I buy, I took."`,
        },
      },
    },

    {
      id: 'middle-passage-atlantic-slave-trade',
      termCn: 'Middle Passage 与跨大西洋奴隶贸易',
      termEn: 'The Middle Passage & the Transatlantic Slave Trade',
      standardRef: ['CA HSS 5.4', 'APUSH KC-2.2 (Atlantic trade)', 'AP World History', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'enslaved-african-receiving-end',
        nodeIds: ['ea-n2', 'ea-n5'],
        xiaoweiNote: {
          cn: `被奴役非洲人那一遍第 2、5 节，从船底舱里讲。这是 DBQ 高频，必须单独掌握。
**Middle Passage（中段航程）** = 被奴役非洲人横渡大西洋的那一段航程。
锁在船底舱、舱矮直不起腰、几个星期不见天日、闷热、病（痢疾高烧）、死者被解锁扔进海里。
死亡率极高——大概每六到七个里就有一个没活着到岸（约 15% 上下）。

它在更大的一圈里，叫**跨大西洋奴隶贸易（三角贸易）**（第 5 节）：
欧洲船装布、枪、酒 → 到西非换走人 →（Middle Passage）运到加勒比/北美种植园 →
劳动产出糖、烟草、稻米 → 运回欧洲变钱。每个环节都有人赚钱，唯一不被当人的是被奴役者——
故事里那句「我们是这套机器的燃料」。

考点关键句：Middle Passage 不是「倒霉」，是一整套**精心设计、靠它发财的制度**的一环。
误解陷阱：很多「机会之地」的故事，船一靠岸就从「拍卖」讲起，好像被奴役者是凭空出现的货物——
✅ 他们是从船底舱活着爬出来的人。（真实史料：Olaudah Equiano 留下第一手 Middle Passage 记述。）`,
          en: `The enslaved African's Lens Nodes 2 and 5, told from the hold of the ship. This is a
high-frequency DBQ — master it separately. The **Middle Passage** = the stretch of voyage in
which enslaved Africans were carried across the Atlantic. Locked in the hold, too low to
straighten the back, weeks without sky, stifling, sick (dysentery, high fever), the dead
unchained and thrown into the sea. The death rate was very high — perhaps more than one in
every six did not reach the shore alive.

Within the larger circle it is called the **transatlantic slave trade (triangular trade)**
(Node 5): European ships carry cloth, guns, liquor → to West Africa to trade for people →
(Middle Passage) to plantations in the Caribbean and North America → labor yields sugar,
tobacco, rice → shipped back to Europe and turned into money. At every link someone profits;
the only thing not treated as human is the enslaved — the story's line, "we are the fuel of
this machine."

Key exam sentence: the Middle Passage wasn't "bad luck" but one link in a whole **carefully
designed institution that grew rich on it**. Misconception trap: many "land of opportunity"
stories begin at "the auction" the moment the ship lands, as if the enslaved appeared as goods
out of nowhere — they were people who climbed out alive from the hold. (Real source: Olaudah
Equiano left a firsthand account of the Middle Passage.)`,
        },
      },
    },

    {
      id: 'mercantilism-navigation-acts',
      termCn: '重商主义与航海条例',
      termEn: 'Mercantilism & the Navigation Acts',
      standardRef: ['CA HSS 5.4', 'APUSH KC-2.2 (Atlantic economy / mercantilism)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'colonial-elite',
        nodeIds: ['ce-n8'],
        xiaoweiNote: {
          cn: `种植园主那一遍第 8 节讲到了——连「赢家」头上也压着英国这道天花板。
**mercantilism（重商主义）** = 殖民地是给母国服务的：你给我供原料、买我的成品、不许跟别国做生意。
落到纸上，是一连串 **Navigation Acts（航海条例，1651 年起）**：
殖民地的货只能用英国船运、主要卖给英国。种植园主赚的钱有一大块是替英国赚的。

考点关键句：**mercantilism = 母国控制殖民地经济（原料供应地 + 成品市场）。**
⚠️ AVOID 越界：这股「憋屈」要几十年后才发酵成大事（通向 1775 独立战争）——
故事里第 8 节明确说「这是后话，约 1700 还远没到跟母国翻脸」。
**这一课只讲约 1700 的殖民地社会，不碰独立战争。** 别写串了。

记忆锚：种植园主的话——「连我这个赢家，头上也有一道天花板；这片地每一层，都被压在另一层底下。」`,
          en: `The planter's Lens Node 8 covers this — even the "winner" has England as a ceiling
overhead. **Mercantilism** = the colony serves the mother country: you supply raw materials,
buy finished goods, and may not trade with other nations. On paper it was a string of
**Navigation Acts** (from 1651): the colony's goods could only be carried in English ships
and sold mainly to England. A large share of what the planter earned, he earned for England.

Key exam sentence: **mercantilism = the mother country controlling the colonial economy (raw-
material supplier + market for finished goods).** ⚠️ Don't overreach: this "resentment" only
fermented into something large decades later (toward the 1775 Revolution) — Node 8 explicitly
says "that's for later; around 1700 we were nowhere near falling out with the mother country."
**This topic covers only colonial society around 1700, not the Revolution.** Don't mix them up.

Memory anchor: the planter's line — "even I, a winner, have a ceiling over my head; every
layer of this colony is pressed beneath another."`,
        },
      },
    },

    {
      id: 'religious-diversity',
      termCn: '殖民地的宗教多样（Puritan / Quaker / 天主教徒）',
      termEn: 'Religious Diversity (Puritans / Quakers / Catholics)',
      standardRef: ['CA HSS 5.3', 'APUSH KC-2.1 (motives for migration)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'indentured-servant', nodeId: 'is-n8', context: '契约奴讲三大区时点到：宾州的 Quaker、新英格兰 Puritan 当家、中部各教派混居最宽容' },
          { lens: 'colonial-elite', nodeId: 'ce-n10', context: '种植园主自评里提到自己「守法、上教堂」——殖民地精英生活围着教会转' },
        ],
      },
      standaloneText: {
        cn: `**殖民地的宗教多样**，故事在讲三大区时点到了 Quaker、Puritan，
但没单独展开马里兰天主教徒和「宗教自由」这个被夸大的说法，所以单独补一张卡。

常见说法是「殖民者都是为宗教自由来的」——这话只对一部分人：
- **Puritan（清教徒）**：1630 年代大批迁入 **马萨诸塞**，想建一个「山巅之城」的纯净教会社会；
  他们围着 town（镇）和 church（教会）过日子，是新英格兰的当家人。
  （注：更早 1620 年 **Pilgrim / 清教分离派** 乘五月花号到普利茅斯——和 Puritan 同源但更激进地要「分离」。）
- **Quaker（贵格会）**：**William Penn** 1682 年前后把 **宾夕法尼亚** 办成宗教宽容、
  与原住民相对和平的「holy experiment（神圣实验）」。中部殖民地是三区里最宽容、最多元的一块。
- **天主教徒（Catholics）**：**马里兰（1634 建）** 成为天主教徒的避难地。

⚠️ 两个重要的「但是」（DBQ 爱考）：
1. 更多人其实是为**地、活路、发财**来的，不是为宗教。被奴役者更是被**强行掳来**的，根本谈不上「自由」。
2. 「宽容」也有**边界**——它主要针对不同教派的白人移民，**并不延伸到被奴役者和原住民**。

考点关键句：殖民地宗教多样是真的（Puritan / Quaker / 天主教徒各有去处），
但「都为宗教自由而来」是被夸大的叙事，且这份「自由/宽容」从一开始就有种族和身份的边界。

🔗 故事连接：契约奴那一遍第 8 节讲三大区时点到 Quaker 和 Puritan；
种植园主那一遍第 10 节自评里提到自己「守法、上教堂」——殖民地精英的生活围着教会转。`,
        en: `**Religious diversity in the colonies** — the story touches Quakers and Puritans when
covering the three regions, but doesn't unpack Maryland's Catholics or the overstated "religious
freedom" claim, so here's a separate card.

The common claim is "the settlers all came for religious freedom" — true only for some:
- **Puritans**: migrated in great numbers into **Massachusetts** in the 1630s, wanting to build
  a pure church society, a "city upon a hill"; they lived around the town and the church and were
  New England's ruling people. (Note: earlier, in 1620, the **Pilgrims / Separatists** sailed on
  the Mayflower to Plymouth — same roots as the Puritans but more radically set on "separating.")
- **Quakers**: **William Penn**, around 1682, founded **Pennsylvania** as a "holy experiment" of
  religious tolerance and relatively peaceful relations with native peoples. The Middle colonies
  were the most tolerant and diverse of the three regions.
- **Catholics**: **Maryland (founded 1634)** became a refuge for Catholics.

⚠️ Two important "buts" (DBQ favorites):
1. More people actually came for **land, a living, and wealth**, not religion. The enslaved were
   **forcibly dragged over**, with no "freedom" to speak of.
2. "Tolerance" had **limits** — it was mainly for white migrants of different sects and **did not
   extend to the enslaved or to native peoples**.

Key exam sentence: colonial religious diversity was real (Puritans / Quakers / Catholics each had
their place), but "all came for religious freedom" is an overstated narrative, and this
"freedom/tolerance" had racial and status limits from the start.

🔗 Story link: the indentured servant's Lens Node 8 touches Quakers and Puritans when covering the
three regions; the planter's Lens Node 10 mentions, in his self-judgment, that he "obeyed the law
and went to church" — the life of the colonial elite turned around the church.`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里只点到没展开，我一开始容易只记「殖民者为宗教自由来」就完事。
老师说 DBQ 爱抓那两个「但是」：①更多人是为地、为发财来的，被奴役者是被掳来的；
②宽容有边界，不及被奴役者和原住民。
我的口诀：**Puritan→麻省、Quaker→宾州、Catholic→马里兰**；再加一句「自由有边界」。`,
        en: `This card is only touched in the story, not unpacked, so at first I tended to stop at
"settlers came for religious freedom." Teacher said DBQs love the two "buts": ① more people came
for land and wealth, and the enslaved were dragged over; ② tolerance had limits and didn't reach
the enslaved or native peoples.
My mnemonic: **Puritan → Massachusetts, Quaker → Pennsylvania, Catholic → Maryland**; then add
"freedom had limits."`,
      },
    },

    {
      id: 'partus-sequitur-ventrem-1662',
      termCn: 'Partus sequitur ventrem（1662 母系决定奴隶身份法）',
      termEn: 'Partus sequitur ventrem — Virginia\'s 1662 Law on Inherited Slave Status',
      standardRef: ['APUSH Period 2 — Topic 2.2 (labor systems / racial slavery)', 'CA HSS 5.4', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'colonial-elite', nodeId: 'ce-n5', context: '种植园主讲一连串把 chattel slavery 写进法律的条文时背景提到' },
          { lens: 'enslaved-african-receiving-end', nodeId: 'ea-n4', context: '被奴役非洲人视角讲孩子一出生身份就被锁死的现实' },
        ],
      },
      standaloneText: {
        cn: `**Partus sequitur ventrem**（拉丁文，意为「子随母腹」）是 1662 年弗吉尼亚殖民地通过的一条法律，
AP 把它列为将种族奴隶制**写入法律**、使其可以自我繁殖的关键机制。

**法律说了什么**：
英国普通法里，孩子的身份随父亲。殖民地精英把这一规则**翻转**：
弗吉尼亚 1662 年立法规定，一个孩子的自由或奴役身份，**跟随母亲**来决定——
母亲是被奴役者，孩子生下来就是被奴役者，无论父亲是谁。

**为什么精英要翻转规则？两层动机**：
1. **经济上**：很多种植园主和监工强奸被奴役的女性——如果按父亲算，这些孩子将是自由人，
   主人就没法把自己的亲生子女当财产。翻转规则后，主人既犯了罪又获利——孩子生来是他的财产。
2. **制度上**：chattel slavery 因此变成**自我繁殖的制度**——不需要持续从非洲进口，
   被奴役人口靠自然出生就能增长，这正是 1700→1750 年奴隶人口从 2.7 万暴增到 24 万的法律基础之一。

**考点关键句（APUSH Causation 高频）**：
弗吉尼亚 1662 年法律将 **"子随母腹"** 写入殖民地法典，是把奴役身份变成**终身、可继承、自我繁殖**
的 chattel slavery 的关键一步——是制度"被造出来"而非自然形成的直接证据。

⚠️ 和 Bacon's Rebellion 的关系：两者是同一个立法风暴的组成部分——
1660-70s 弗吉尼亚精英密集立法，把 chattel slavery 从事实变为法律；
1676 年 Bacon's Rebellion 是这些法律的社会土壤，也是精英更快完成法律锁定的催化剂。`,
        en: `**Partus sequitur ventrem** (Latin: "the offspring follows the womb") is a 1662 Virginia colonial law. AP treats it as the legal mechanism that made racial chattel slavery **self-reproducing**.

**What the law said**:
English common law gave a child the status of the father. The colonial elite **flipped** this rule: Virginia's 1662 statute said a child's free or enslaved status follows the **mother** — if the mother was enslaved, the child was born enslaved, regardless of who the father was.

**Why the elite flipped the rule — two motives**:
1. **Economic**: many planters and overseers raped enslaved women. Under the old rule (father determines status), those children would be free, and a master could not treat his own children as property. With the rule flipped, the master both committed the crime and profited — the child was born as his property.
2. **Institutional**: chattel slavery thus became **self-reproducing**. No need to keep importing from Africa; the enslaved population could grow through natural birth. This is one of the legal foundations of the surge from about 27,000 enslaved in 1700 to 240,000 by 1750.

**Key exam sentence (high-frequency APUSH Causation)**:
Virginia's 1662 law embedding "the offspring follows the womb" into colonial law was a critical step in turning enslavement into **lifelong, inheritable, self-reproducing** chattel slavery — direct evidence that the institution was **constructed**, not naturally formed.

⚠️ Relationship to Bacon's Rebellion: both are part of the same legislative storm. Virginia's elite legislated intensively through the 1660s-70s to convert chattel slavery from practice to law; Bacon's Rebellion (1676) was both the social soil for these laws and a catalyst that pushed the elite to complete the legal lockdown faster.`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里只埋了背景，但 AP Causation 题爱单独问它。
我把它压成一句必背：**弗吉尼亚 1662 年 = 子随母腹 = 奴役身份跟着妈传。**
考点关键：为什么要翻转父系规则？因为精英想把自己侵犯被奴役女性生下的孩子也变成财产。
这一条法律让 chattel slavery 变成可以自我繁殖的制度——不用一直进口，生出来就是奴隶。
DBQ 连接：这是「chattel slavery 是被造出来的」这个论点最强的法律证据之一。`,
        en: `The story buries this only in background, but AP Causation questions ask about it on its own.
I compress it: **Virginia 1662 = offspring follows womb = enslaved status passes through the mother.**
Key point: why flip the paternal rule? Because the elite wanted to turn children born of enslaved women (even by themselves) into property. This one law made chattel slavery self-reproducing — no need to keep importing; children were born enslaved.
DBQ link: this is one of the strongest pieces of legal evidence for the argument that "chattel slavery was deliberately constructed."`,
      },
    },

    {
      id: 'headright-system',
      termCn: 'Headright system（人头权地制）',
      termEn: 'The Headright System',
      standardRef: ['APUSH Period 2 — Topic 2.2 (labor systems / colonial economy)', 'CA HSS 5.3 / 5.4', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'colonial-elite', nodeId: 'ce-n3', context: '种植园主讲怎么扩地时点到用这套制度攒土地的逻辑' },
          { lens: 'indentured-servant', nodeId: 'is-n1', context: '契约奴解释自己为什么被招募跨洋时背景出现' },
        ],
      },
      standaloneText: {
        cn: `**Headright system（人头权地制）** 是弗吉尼亚公司 1618 年推行、后被多个南部殖民地沿用的土地分配制度，
AP 用它解释"为什么种植园主拼命进口劳力"的经济激励机制。

**规则**：每付钱把一个人运到弗吉尼亚，就能得到 **50 英亩**土地——
不管这个人是你自己、你的家属、雇来的工人，还是**你买来的契约奴或被奴役者**，都算。
把一船 20 个契约奴运到弗吉尼亚？那就是 **1000 英亩**。

**为什么重要（AP 逻辑链）**：
1. **激励进口劳力**：进口的劳动力越多，地越多——这直接推动了大量契约奴和被奴役非洲人的引入，
   是跨大西洋劳动力贸易的经济引擎之一。
2. **越来越多的土地集中在精英手里**：能付得起运输费的人才能得到地——穷人付不起，所以地不断流向有钱人。
   弗吉尼亚的土地越来越集中，也是 Bacon's Rebellion 里穷白人（很多是满了期的前契约奴）没地分的根源。
3. **因果链**：Headright → 大量进口劳力（先是契约奴，后是被奴役非洲人）→ 土地集中 → 穷人无地 → Bacon's Rebellion → chattel slavery 制度加速落地。

**考点关键句**：
Headright system 是理解「为什么南部种植园主不停引进廉价劳力」的经济机制——它把进口人口和获得土地**直接挂钩**，既推高了跨大西洋劳动力贸易，也加剧了土地不平等。

记忆锚：**Headright = 每个"头"（head）换 50 英亩地（right to land）。**
Headright + Bacon's Rebellion + partus 1662 = 种族奴隶制从经济激励、社会压力、法律三个方向同时被"建"起来的完整链条。`,
        en: `**The headright system** was introduced by the Virginia Company in 1618 and adopted by several other Southern colonies. AP uses it to explain the economic incentive for why planters imported labor so aggressively.

**The rule**: for every person you paid to transport to Virginia you received **50 acres** of land — whether that person was yourself, a family member, a hired worker, or an **indentured servant or enslaved person you bought**. Transport 20 indentured servants on one ship? That is **1,000 acres**.

**Why it matters (AP logic chain)**:
1. **Incentivized labor imports**: more imported labor = more land — this directly drove the large-scale arrival of indentured servants and enslaved Africans, and was one of the economic engines of the transatlantic labor trade.
2. **Land concentrating in elite hands**: only those who could pay transport costs got land — the poor could not, so land flowed steadily to the wealthy. Virginia's increasing land concentration is also the root of why poor whites (many former indentured servants who had served their terms) had no land to get during Bacon's Rebellion.
3. **Causal chain**: headright → mass labor imports (first indentured servants, then enslaved Africans) → land concentration → the landless poor → Bacon's Rebellion → chattel slavery institutionalized faster.

**Key exam sentence**:
The headright system is the economic mechanism for understanding "why Southern planters kept importing cheap labor" — it directly linked importing people to gaining land, simultaneously inflating the transatlantic labor trade and deepening land inequality.

Memory anchor: **headright = each "head" earns a "right" to 50 acres.**
Headright + Bacon's Rebellion + Virginia 1662 (partus) = the complete chain of chattel slavery being "constructed" simultaneously from economic incentive, social pressure, and law.`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里点到没展开，但 AP 爱问"为什么种植园主拼命进口劳力"的机制。
我用一句话背：**Headright = 运一个人过来换 50 英亩地，运的人越多、地越多。**
考点连接：① 它解释了为什么精英不停引进契约奴/被奴役者（有地赚）；
② 地越来越集中在精英手里，满了期的前契约奴没地分，才有了 Bacon's Rebellion。
三张卡连一起背：Headright（经济激励）→ Bacon's Rebellion（社会压力）→ partus 1662（法律锁定）。`,
        en: `The story touches this but doesn't unpack it, yet AP often asks about the mechanism of "why planters kept importing labor."
One-line memory: **headright = transport one person over, get 50 acres; transport more, get more land.**
Exam links: ① explains why the elite kept importing indentured servants and enslaved people (land to gain); ② land kept concentrating in elite hands, so former servants who served their terms had no land — hence Bacon's Rebellion.
Memorize three cards together: headright (economic incentive) → Bacon's Rebellion (social pressure) → Virginia 1662 / partus (legal lock).`,
      },
    },

    {
      id: 'salutary-neglect',
      termCn: 'Salutary neglect（有益的忽视）',
      termEn: 'Salutary Neglect',
      standardRef: ['APUSH Period 2 — Topic 2.7 (colonial governance)', 'CA HSS 5.4', 'APUSH Period 3 causation'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'colonial-elite', nodeId: 'ce-n8', context: '种植园主讲重商主义和航海条例时点到英国管得严与不严的摆动' },
        ],
      },
      standaloneText: {
        cn: `**Salutary neglect（有益的忽视）** 是英国对北美殖民地约 1607-1763 年间实际执行的非正式政策：
重商主义法律（航海条例等）写在纸上，英国却**有意不严格执法**，让殖民地在贸易和自治上获得相当大的自由空间。

**为什么英国要"忽视"？**
- 17 世纪末到 18 世纪初，英国国内政治动荡（光荣革命、王位继承战争、南海泡沫等），
  无力也无心精细管控几千英里外的殖民地。
- 首相 **Robert Walpole**（1720s-40s 任期）把这变成半明文政策：
  「让殖民地赚钱，只要税收回来，不必太在意他们怎么做生意。」

**殖民地层面的后果（AP 考点）**：
1. 各殖民地议会（如弗吉尼亚 **House of Burgesses**，1619 年建立）趁此发展出真实的自治习惯——
   立法、征税、自定规矩，一代代人习惯了「自己管自己」。
2. 违反航海条例的走私贸易公开进行，没人认真管。
3. **宗教和经济多样性**在管制宽松中繁荣（贵格会宾州、多元中部殖民地）。

**为什么 AP 重考它（Period 2→Period 3 因果链）**：
salutary neglect 是「美国独立革命的深层原因」的教科书式答案——
英国 1763 年（七年战争后）突然开始严格执法（印花税法、汤森法案等）时，
殖民地人的反应是「凭什么！我们几十年都自己管自己！」
没有 salutary neglect 打下的自治习惯，就没有 1775 独立战争的那种理直气壮。

⚠️ 边界提示（同这门课的 mercantilism 那张卡）：
约 1700 年的殖民地还在 salutary neglect 阶段，「与英国翻脸」是后话（1763 年之后）。
这门课只讲约 1700 的殖民地社会，别写串到独立战争。`,
        en: `**Salutary neglect** was Britain's informal practice toward its North American colonies from roughly 1607 to 1763: mercantilist laws (the Navigation Acts and others) were on the books, but Britain **deliberately refrained from strictly enforcing them**, giving the colonies considerable freedom in trade and self-governance.

**Why did Britain "neglect"?**
- From the late 1600s through the early 1700s, British domestic politics were turbulent (the Glorious Revolution, wars of succession, the South Sea Bubble), leaving little energy or ability to micro-manage colonies thousands of miles away.
- Prime Minister **Robert Walpole** (in office through the 1720s-40s) made this a semi-explicit policy: "Let the colonies make money; as long as revenue comes back, don't worry too much about how they do business."

**Consequences at the colonial level (AP exam points)**:
1. Colonial assemblies (such as Virginia's **House of Burgesses**, established 1619) used this space to develop genuine habits of self-governance — legislating, taxing, making their own rules; generations grew up accustomed to "governing themselves."
2. Smuggling in violation of the Navigation Acts ran openly, with no serious enforcement.
3. **Religious and economic diversity** flourished in the slack of loose regulation (Quaker Pennsylvania, the diverse Middle colonies).

**Why AP stresses it (Period 2 → Period 3 causal chain)**:
Salutary neglect is the textbook answer for the "deep cause of the American Revolution" — when Britain abruptly began strict enforcement after 1763 (the Seven Years' War), with the Stamp Act, Townshend Acts, and others, the colonial reaction was "on what grounds! We have governed ourselves for decades!" Without the habits of self-governance built under salutary neglect, the confident outrage of 1775 would not have been possible.

⚠️ Boundary note (same as the mercantilism card in this topic):
Around 1700 the colonies were still in the salutary neglect era; falling out with Britain is a later story (after 1763). This topic covers colonial society around 1700 only — don't run it into the Revolution.`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里点到了重商主义，但 salutary neglect 没单独展开——这是 AP Period 2 的独立考点。
我的一句话背法：**Salutary neglect = 英国有法不严执 → 殖民地几十年自治习惯 → 1763 英国突然严执 → 独立战争的导火索之一。**
记忆锚：想象父母制定了规矩但从来不管——等他们突然严管时，你当然要反抗。
⚠️ 这门课只讲约 1700，别写到独立战争，老师会扣分（课程边界！）。`,
        en: `The story touches mercantilism, but salutary neglect is not unpacked — it's a standalone AP Period 2 exam point.
My one-line memory: **salutary neglect = Britain had laws but didn't enforce them → decades of self-governance habit in the colonies → Britain suddenly enforced strictly after 1763 → one trigger of the Revolution.**
Memory anchor: imagine parents who set rules but never enforce them — of course you resist when they suddenly crack down.
⚠️ This topic covers only around 1700; don't run it into the Revolution — that's an exam boundary error.`,
      },
    },

    {
      id: 'qing-kangxi-parallel',
      termCn: '同时代的中国（清康熙，结构对照）',
      termEn: 'China at the Same Time (Qing under Kangxi — a Structural Parallel)',
      standardRef: ['AP World History (comparison)', 'cross-civilization context'],
      examFrequency: 'low',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这张卡故事里完全没讲，是给你一个**同时代的坐标**——约 1700 年的世界另一头在发生什么。
（这是结构对照，不是比谁先进；两套社会各自回应各自的处境。）

约 1700 年是**清康熙三十九年**。中国此时是高度中央集权的大一统帝国，正处「康熙盛世」——
康熙帝在位，平三藩、收台湾、定边疆，人口与农业在恢复扩张。

放在一起看三个对照（并列，不褒贬）：
1. **谁来开垦土地**：北美殖民地靠跨大西洋运来的契约奴和被奴役非洲人开垦；
   同时期清朝靠本土的自耕农、佃农，以及向边疆（如四川、台湾）的移民垦荒——
   「湖广填四川」这类大规模人口迁徙就发生在这前后。一个靠跨洋掳人，一个靠本土农民迁徙。
2. **底层劳动者的身份**：北美最底层是按种族划定、终身可继承的 chattel slavery；
   清朝底层是佃农、雇工，以及法律上的「贱籍」（如乐户、惰民），但这不是按肤色、不是横跨大洋掳来、
   原则上也不世代锁死为可买卖的财产——两种「不自由」性质不同，不可简单对应。
3. **谁被算进「政治共同体」**：两边都把绝大多数人排除在权力之外——
   北美排除被奴役者、原住民、女性、无地白人；清朝绝大多数平民也无缘参政，权力在皇帝与士大夫官僚手中。

考点关键句：约 1700 北美用「跨洋掳人」、清朝用「本土农民迁徙」解决同一个「谁来种地」的问题；
两套社会各有其设计的逻辑与盲点，**不能说谁比谁先进**。`,
        en: `This card isn't in the story at all — it gives you a **same-era coordinate**: what was
happening on the other side of the world around 1700. (This is a structural parallel, not a contest
of who was more advanced; each society answered its own situation.)

Around 1700 was the **39th year of the Kangxi reign (Qing dynasty)**. China was then a highly
centralized unified empire in its "Kangxi golden age" — the Kangxi Emperor on the throne, having
put down the Three Feudatories, taken Taiwan, and settled the frontiers, with population and
agriculture recovering and expanding.

Three parallels side by side (neutral, no ranking):
1. **Who clears the land**: the North American colonies relied on indentured servants and enslaved
   Africans brought across the Atlantic; the contemporaneous Qing relied on its own freeholders and
   tenant farmers, plus migrant reclamation toward the frontier (such as Sichuan and Taiwan) — the
   large migration known as "Huguang filling Sichuan" happened around this time. One relied on
   seizing people across the ocean, the other on the migration of its own farmers.
2. **The status of the lowest laborers**: at the bottom of North America was race-defined,
   inheritable, lifelong chattel slavery; at the bottom of the Qing were tenant farmers, hired
   hands, and the legal "debased registers" (such as the yuehu musician households and the duomin),
   but this was not by skin color, not seized across an ocean, and not in principle locked across
   generations as sellable property — two kinds of "unfreedom" of different natures, not simply
   equatable.
3. **Who counts in the "political community"**: both excluded the vast majority from power — North
   America excluded the enslaved, native peoples, women, and landless whites; in the Qing the vast
   majority of commoners also had no part in rule, with power held by the emperor and the
   scholar-official bureaucracy.

Key exam sentence: around 1700 North America used "seizing people across the ocean" and the Qing
used "the migration of its own farmers" to solve the same "who farms the land" problem; each
society had its own design logic and blind spots, and **neither can be called more advanced than
the other.**`,
      },
      xiaoweiNote: {
        cn: `这张卡是老师特意加的「同代坐标」，故事里一点没讲，所以我背的时候单独拎出来。
重点不是「比谁好」，是看同一时间两边怎么解决「谁来种地、谁算政治人」。
我的口诀：**约 1700 = 北美 chattel slavery，中国 = 清康熙盛世**；
一个靠跨洋掳人，一个靠本土农民迁徙（湖广填四川）。两边都把大多数人排除在权力外。`,
        en: `This card is a "same-era coordinate" the teacher added on purpose; the story doesn't cover
it at all, so I pull it out separately when reviewing. The point isn't "who was better," but seeing
how the two sides solved "who farms the land, who counts as a political person" at the same moment.
My mnemonic: **around 1700 = North America's chattel slavery, China = the Qing Kangxi golden age**;
one relied on seizing people across the ocean, the other on its own farmers migrating ("Huguang
filling Sichuan"). Both excluded most people from power.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `约 1700 年，这片殖民地被叫作「机会之地」——穷契约奴真能熬到期、分块地、翻身。
可同一片土地，把几十万被奴役的非洲人掳过大西洋、记成财产、钉在最底层，
最赚钱的烟草和稻米，靠的正是最不自由的人。

你觉得「机会之地」这四个字，应该被看成「一句谎」，还是「一座建在别人身上的真实繁荣」？
用至少两条具体证据支持你的判断。`,
      en: `Around 1700, this colony was called a "land of opportunity" — a poor indentured servant
truly could serve out the term, get a plot, and rise. Yet the same land dragged hundreds of
thousands of enslaved Africans across the Atlantic, recorded them as property, and nailed them to
the very bottom; the most profitable tobacco and rice rested on the least free people.

Should the phrase "land of opportunity" be seen as "a lie," or as "a real prosperity built on
other people"? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- 「谎」这边的证据：Middle Passage 的死亡率、chattel slavery 终身可继承、被奴役者被记成财产、
  地是从原住民手里夺的（King Philip's War）。
- 「真实繁荣」这边的证据：契约奴真有人熬出头分到地、宾州的宽容、自耕农的兴起；
  只不过这繁荣是**建在**被奴役者和被驱离的原住民身上，不是给他们的。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.
- Evidence for "a lie": the Middle Passage death rate, lifelong inheritable chattel slavery, the
  enslaved recorded as property, land taken from native peoples (King Philip's War).
- Evidence for "real prosperity": some indentured servants truly served out their terms and got
  land, Pennsylvania's tolerance, the rise of freeholders — only that this prosperity was **built
  on** the enslaved and the displaced native peoples, not given to them.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's
complexity.`,
      conceptsActivated: ['middle-passage-atlantic-slave-trade', 'indenture-to-slavery-shift', 'cash-crops'],
    },
    {
      id: 'q2',
      cn: `1676 年的 Bacon's Rebellion 里，穷白人和被奴役的黑人曾经联手反抗。
后来精英用一连串法律把他们劈开——给穷白人一点甜头（你是「白的」），
把终身奴役全压到黑人身上。一条原本按「穷 vs 富」划的线，被重画成了「白 vs 黑」。

如果你是 AP 老师，要出一道题考「一条线怎么从「阶级」被改成「种族」」，你会怎么提问？
请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `In Bacon's Rebellion of 1676, poor whites and enslaved blacks once joined forces in revolt.
The elite then split them apart with a string of laws — giving poor whites a sweetener (you are
"white") and pressing all lifelong servitude onto blacks. A line once drawn by "poor versus rich"
was redrawn into "white versus black."

If you were an AP teacher writing a question on "how a line was changed from 'class' into 'race,'"
how would you phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以从契约奴的角度切入——他在故事里说：「我恨上面的种植园主，可那道肤色线，我自己也站了上去。」
这句话点出转向的关键：精英**没有改善底层**，只是**用最小的代价把底层劈开**。
你的题目可以让学生分析：①精英为什么怕「底层联手」？②给穷白人的那点「甜头」起了什么作用？
③一条线从「阶级」改成「种族」之后，为什么后来**那么难拆**（联系被奴役人口 1700→1750 的暴涨）？`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through the indentured servant — in the story he says: "I hated the planters
above, yet that color line, I too stepped onto it." That line names the key to the shift: the
elite **did not better the bottom**, they just **split it apart at the smallest cost**.
Your question could have students analyze: ① why did the elite fear "the bottom uniting"? ② what
did the "sweetener" given to poor whites do? ③ once a line was changed from "class" into "race,"
why was it later **so hard to take apart** (link to the surge in the enslaved population from 1700
to 1750)?`,
      conceptsActivated: ['indenture-to-slavery-shift', 'middle-passage-atlantic-slave-trade'],
    },
    {
      id: 'q3',
      cn: `同一面英国国旗下，新英格兰、中部、南部长成了三种完全不同的社会——
土薄的新英格兰靠小农、捕鱼、造船；地肥的中部是「面包篮」；湿热广阔的南部靠 cash crop 种植园，
也正是南部，一步步走向了 chattel slavery。

你同意「是地理决定了这三种社会，连南部的奴隶制也是地理逼出来的」这个说法吗？
还是说，人本可以**选择**怎么用同一片地理？用一个具体的区域差异来支持你的看法。`,
      en: `Under the same English flag, New England, the Middle colonies, and the South grew into three
completely different societies — thin-soiled New England lived by small farms, fishing, and
shipbuilding; the rich-soiled Middle was the "breadbasket"; the hot, wide South lived by cash-crop
plantations, and it was the South that slid step by step into chattel slavery.

Do you agree that "geography determined these three societies, and even the South's slavery was
forced out by geography"? Or could people have **chosen** how to use the same geography? Support
your view with one specific regional difference.`,
      hintCn: `提示：先把三大区分清楚——新英格兰（小农/渔业/造船/Puritan）、
中部（面包篮/小麦玉米/Quaker 多元）、南部（cash crop/烟草稻米/契约奴→奴隶）。别写串了。
进阶思考：地理确实**塑造**了经济（湿热广阔→大种植园→要海量廉价劳力），
但「劳动力用什么身份」是**人立法决定**的（Bacon's Rebellion 后精英主动选了 chattel slavery，
不是地理逼的）。所以更稳的答法常是：地理设了「舞台」，可怎么演是人选的。
AP 看的是你能不能用一个真实的区域差异，把抽象论点「钉」在证据上。`,
      hintEn: `Hint: first keep the three regions straight — New England (small farms/fishing/
shipbuilding/Puritans), the Middle (breadbasket/wheat and corn/Quaker diversity), the South
(cash crops/tobacco and rice/indenture → slavery). Don't mix them up.
Going deeper: geography did **shape** the economy (hot and wide → large plantations → needing vast
cheap labor), but "under what status the labor works" was **decided by people through law** (after
Bacon's Rebellion the elite actively chose chattel slavery; geography didn't force it). So a steadier
answer is often: geography set the "stage," but how it was played was a human choice. AP wants you to
"pin" the abstract claim to evidence with one real regional difference.`,
      conceptsActivated: ['three-colonial-regions', 'cash-crops', 'indenture-to-slavery-shift'],
    },
  ],
};

export default notebook;
