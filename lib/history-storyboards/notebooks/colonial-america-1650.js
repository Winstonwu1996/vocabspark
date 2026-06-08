// ─── 同伴笔记本架构 v1 · Colonial America Takes Shape 约 1650-1750 ─────
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
//   - storyboard 提供情感锚点（大西洋商人 / 清教徒牧师 / 被奴役非洲人 三条故事线）
//   - notebook 提供考点闭环（triangular trade / Middle Passage / partus→1705 立法链 + Bacon /
//     Great Awakening + New/Old Lights / Stono / mercantilism+Navigation Acts / Puritan covenant /
//     black agency — 补完 APUSH Period 2 Topics 2.4-2.7）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 2 (1607-1754)：Topics 2.4-2.7（跨大西洋贸易与重商主义、奴隶制度与反抗、
//     第一次大觉醒、殖民地社会与文化）；核心考法 = contextualization + causation
//   - CA HSS Grade 8.1（美国的政治、宗教、社会、经济根基）
//
// 事实地基：对账 colonial-america-1650-factledger.md（27 claim，全部 ✅verified）
//   - 1662 partus / 1672 Royal African Company / 1676 Bacon / 1698 垄断被打破 / 1705 法典 /
//     1734-35 Northampton 复兴 / 1739 Whitefield 巡回 / 1739.9.9 Stono / 1740 Negro Act /
//     1741 两篇布道 + New/Old Lights 分裂
//   - 人口：1700 约 2.7 万 → 1750 约 24 万被奴役者；殖民地总人口约 100 多万
//   - Middle Passage 死亡率约 12%-15%；跨大西洋约 1000 万-1250 万人（多数去加勒比和巴西）
//   - §8 中国：1684 康熙开海 / 白银 / 马尼拉大帆船（接 trade-networks）
//   - Franklin 人数 / Whitefield 万人布道 = 史料估算，措辞带"估算"
//
// schemaVersion: 1 · notebookVersion: colonial-america-1650-v1

export var notebook = {
  topicId: 'colonial-america-1650',
  topicNameCn: '殖民地美洲的成形 约 1650-1750',
  topicNameEn: 'Colonial America Takes Shape, c. 1650-1750',
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
    cn: `今天老师说我们要学殖民地美洲约 1650 到 1750 这一百年（Colonial America Takes Shape）。
她说这是 APUSH 的"奴隶制起源单元"——AP 最爱考的角度是 causation（因果）：
奴隶制不是凭空冒出来的，是一连串经济需求和法律选择"一步步建出来"的。

她在白板上写了一串词：

Triangular Trade（三角贸易）、Middle Passage（中段航程）、
chattel slavery（动产奴隶制）、partus sequitur ventrem（身份随母亲）、
Bacon's Rebellion（培根起义）、Great Awakening（大觉醒）、
New Lights / Old Lights（新光派 / 旧光派）、Stono Rebellion（Stono 起义）。

我先记下来，等下读三条故事线——大西洋商人（账本上发财的人）、
清教徒牧师（夹在中间的人）、被奴役的非洲人（被记成"财产"、连名字都没留下的人）——
读完再回来对照这张单子，看我能不能解释每一个。

老师说了一句我抄在笔记本第一页："这片殖民地的'繁荣''虔诚''机会'都是真的——
它们同时建在一套把人掳来、当成货物的奴隶经济上。读它，要同时看见光，和这道光是踩在谁身上的。"`,
    en: `Today my teacher said we're learning the century of Colonial America from about 1650 to 1750.
She said this is APUSH's "origins of slavery" unit — AP's favorite angle is causation:
slavery didn't appear out of nowhere; it was built "step by step" from a chain of economic
needs and legal choices.

She wrote a string of terms on the board:

Triangular Trade, Middle Passage, chattel slavery, partus sequitur ventrem,
Bacon's Rebellion, Great Awakening, New Lights / Old Lights, Stono Rebellion.

Let me write these down. After I read the three story threads — the Atlantic merchant (who got rich
in the ledger), the Puritan minister (caught in the middle), and the enslaved African (recorded
as "property," who left no name) — I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The 'prosperity,' the
'piety,' the 'opportunity' of this colony were all real — and at the same time they were built
on a slave economy that captured people and treated them as goods. To read it, you have to see
the light, and see whose back that light was standing on."`,
    keyTerms: [
      { cn: '三角贸易', en: 'triangular trade' },
      { cn: '中段航程', en: 'Middle Passage' },
      { cn: '动产奴隶制', en: 'chattel slavery' },
      { cn: '身份随母亲（1662 弗吉尼亚法）', en: 'partus sequitur ventrem (1662 Virginia law)' },
      { cn: '契约奴役', en: 'indentured servitude' },
      { cn: '培根起义（1676）', en: "Bacon's Rebellion (1676)" },
      { cn: '皇家非洲公司', en: 'Royal African Company' },
      { cn: '重商主义 / 航海条例', en: 'mercantilism / Navigation Acts' },
      { cn: '第一次大觉醒', en: 'First Great Awakening' },
      { cn: '新光派 / 旧光派', en: 'New Lights / Old Lights' },
      { cn: '清教徒 / 圣约 / 半路圣约', en: 'Puritan / covenant / Halfway Covenant' },
      { cn: '山巅之城', en: 'city upon a hill' },
      { cn: 'Stono 起义（1739）', en: 'Stono Rebellion (1739)' },
      { cn: '黑人能动性', en: 'black agency' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '乔治·怀特菲尔德',
        nameEn: 'George Whitefield',
        ipa: '/ˈdʒɔːrdʒ ˈwɪtfiːld/',
        roleCn: '英国来的巡回布道家（"Grand Itinerant"），1739-40 横扫殖民地，在露天对上万人讲道，把大觉醒推向高潮',
        roleEn: 'Itinerant preacher from England (the "Grand Itinerant") who swept the colonies in 1739-40, preaching to tens of thousands in the open air and driving the Great Awakening to its peak',
        mustKnow: true,
        audioKey: 'george-whitefield',
      },
      {
        nameCn: '乔纳森·爱德华兹',
        nameEn: 'Jonathan Edwards',
        ipa: '/ˈdʒɒnəθən ˈɛdwərdz/',
        roleCn: '大觉醒最重要的神学家，1741 年讲《Sinners in the Hands of an Angry God（落在愤怒之神手中的罪人）》，靠情感震撼让会众当场痛哭',
        roleEn: 'The most important theologian of the Great Awakening; in 1741 preached "Sinners in the Hands of an Angry God," using emotional shock to make congregations weep on the spot',
        mustKnow: true,
        audioKey: 'jonathan-edwards',
      },
      {
        nameCn: '约翰·温斯罗普',
        nameEn: 'John Winthrop',
        ipa: '/dʒɒn ˈwɪnθrɒp/',
        roleCn: '1630 年率清教徒坐 Arbella 号来到新英格兰，立下"山巅之城（city upon a hill）"的愿景——一座虔诚到全世界都盯着看的样板社会',
        roleEn: 'Led Puritans to New England on the ship Arbella in 1630, casting the vision of a "city upon a hill" — a model society so pious all the world would watch',
        mustKnow: true,
        audioKey: 'john-winthrop',
      },
      {
        nameCn: '本杰明·富兰克林',
        nameEn: 'Benjamin Franklin',
        ipa: '/ˈbɛndʒəmɪn ˈfræŋklɪn/',
        roleCn: '理性、爱算账、不太信教，却被 Whitefield 的现场布道震住、掏空了口袋——他的亲历记述是大觉醒冲击力的有力旁证（他给的人数是估算）',
        roleEn: 'Rational, accounting-minded, not very religious, yet stunned by Whitefield\'s preaching and emptied his pockets — his eyewitness account is strong evidence of the Awakening\'s power (the crowd numbers he gave were estimates)',
        mustKnow: true,
        audioKey: 'benjamin-franklin',
      },
      {
        nameCn: '内森尼尔·培根',
        nameEn: 'Nathaniel Bacon',
        ipa: '/nəˈθænjəl ˈbeɪkən/',
        roleCn: '1676 年培根起义的领袖，率穷白人与被奴役者反抗弗吉尼亚总督 Berkeley、烧了 Jamestown，同年 10 月病死',
        roleEn: 'Leader of the 1676 Bacon\'s Rebellion, who led poor whites and the enslaved against Virginia governor Berkeley and burned Jamestown; died of illness that October',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '威廉·伯克利',
        nameEn: 'William Berkeley',
        ipa: '/ˈwɪljəm ˈbɑːrkli/',
        roleCn: '弗吉尼亚总督，培根起义的对立面',
        roleEn: 'Governor of Virginia, the target of Bacon\'s Rebellion',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '吉尔伯特·坦能特',
        nameEn: 'Gilbert Tennent',
        ipa: '/ˈɡɪlbərt ˈtɛnənt/',
        roleCn: '1741 年讲《The Danger of an Unconverted Ministry》，几乎当面骂"没重生过的牧师"，引爆长老会 New/Old Lights 分裂',
        roleEn: 'Preached "The Danger of an Unconverted Ministry" in 1741, all but cursing "unconverted ministers" to their faces and igniting the Presbyterian New/Old Lights split',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: 'Jemmy（传作 Cato）',
        nameEn: 'Jemmy (said to be Cato)',
        ipa: '/ˈdʒɛmi/',
        roleCn: '1739 年 Stono 起义的带头人，史料极少、连名字都不确定——这种"无名"本身就是受奴役者视角的教学点',
        roleEn: 'The leader of the 1739 Stono Rebellion; the record is so thin even his name is uncertain — that "namelessness" is itself a teaching point about the enslaved perspective',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'triangular-trade',
      termCn: '三角贸易',
      termEn: 'Triangular Trade',
      defCn: '殖民地时代把欧洲、西非、美洲连成一圈的贸易体系。新英格兰的朗姆酒运去西非换被掳的人，人运到美洲卖掉换糖蜜和烟草，糖蜜运回新英格兰蒸馏成朗姆酒，然后下一圈。不是一条航线，而是一套让三块大陆的货物和人循环流动的经济机器。',
      defEn: 'The trade system of the colonial era that linked Europe, West Africa, and the Americas in one loop. New England rum went to West Africa in exchange for captured people; those people were sold in the Americas for molasses and tobacco; the molasses came back to New England to be distilled into rum, then the cycle repeated. Not a single shipping lane — an economic machine that kept goods and people cycling across three continents.',
      standardRef: ['APUSH Period 2 Topic 2.4 (transatlantic trade)', 'CA HSS 8.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'merchant-actor',
        nodeIds: ['col-merchant-n2'],
        xiaoweiNote: {
          cn: `这个我读过！商人那条故事线里，他把它讲成"不是一条航线，是一个圈"。
我把这个圈背成三段：
**① 新英格兰朗姆酒 → 西非换被掳的人 → ② Middle Passage 横渡 → 加勒比/南部换糖、糖蜜、烟草、稻米 → ③ 糖蜜回新英格兰蒸馏成朗姆酒**，然后下一圈。

最关键的考点句（AP 爱挖这个"误区"）：
误："三角贸易只是一条航线" → 正：它是一整套**经济系统**——欧洲的钱、西非的人、美洲的糖被绑成一个三角形。

我自己的记忆锚：**北美不在三角的"边"上，它是三角的一个"角"。**
（Newport 一地几十家蒸馏坊昼夜不停，被叫"世界朗姆之都"——这个细节最好记。）`,
          en: `I read this! In the merchant's story thread, he calls it "not a route, but a circle."
I memorize the circle in three legs:
**(1) New England rum → West Africa, traded for captured people → (2) Middle Passage crossing →
Caribbean/South, traded for sugar, molasses, tobacco, rice → (3) molasses back to New England,
distilled into rum**, then the next loop.

Key exam sentence (AP loves digging at this misconception):
Misconception: "triangular trade was just a shipping route" → Correction: it was a whole
**economic system** — Europe's money, West Africa's people, the Americas' sugar tied into one triangle.

My memory anchor: **North America wasn't on a "side" of the triangle — it was one "corner" of it.**
(Newport alone had dozens of distilleries running day and night, called "the rum capital of the
world" — the easiest detail to remember.)`,
        },
      },
    },

    {
      id: 'middle-passage',
      termCn: '中段航程',
      termEn: 'The Middle Passage',
      defCn: '三角贸易中横渡大西洋的那一段航程。被掳来的非洲人被锁在船舱底层，挤得不能直腰，历时几个星期。这段航程死亡率极高——约 12%-15% 的人没能活着上岸。上岸后他们被当成"财产"拍卖，记在账本上和牲口农具一起。',
      defEn: 'The middle leg of the triangular trade — the Atlantic crossing. Captured Africans were chained in the bottom of the ship\'s hold, packed too tight to stand up straight, for weeks at a time. The death rate was brutal: about 12%-15% did not survive to reach land. Those who arrived were auctioned as "property," recorded in ledgers alongside livestock and tools.',
      standardRef: ['APUSH Period 2 Topic 2.4', 'CA HSS 8.1', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'enslaved-on-the-receiving-end',
        nodeIds: ['col-enslaved-n2', 'col-merchant-n3'],
        xiaoweiNote: {
          cn: `三角贸易里最不堪、也最赚钱的一段。被奴役者那条故事线和商人那条故事线都讲了。
它是横渡大西洋那几个星期：被掳的人锁在船舱底层，挤得不能直腰，又病又脏。

必记数字：**约 12%-15% 的人没能活着上岸**（主流教学口径，整体约 12.5%）。
在商人眼里，这个数字只是账本上的"损耗"——和算货船上烂掉多少糖蜜，是一个算法。这就是最冷的地方。

规模背景（DBQ 常用）：整个 16-19 世纪，约 **1000 万-1250 万**非洲人被强行运过大西洋，
但**大多数去了加勒比和巴西**，去北美英属殖民地的是较小一部分（约 5%）——别写成"绝大多数去了北美"。

考点关键句：上岸后被拍卖、和牲口农具记在账本同一类——"人变成了财产"。`,
          en: `The most unbearable and most profitable leg of the triangular trade. Both the enslaved
person's story thread and the merchant's story thread cover it. It's the weeks of crossing the
Atlantic: captured people chained in the bottom of the hold, packed too tight to straighten their
backs, sick and filthy.

Must-remember number: **about 12%-15% did not survive to land** (standard teaching range; ~12.5% overall).
To the merchant, that number was only "loss" in the ledger — the same math as how much molasses
rotted on the ship. That's the coldest part.

Scale context (common in DBQs): across the 16th-19th centuries, about **10-12.5 million** Africans
were forced across the Atlantic, but **most went to the Caribbean and Brazil**; only a smaller share
(~5%) went to British North America — don't write "most went to North America."

Key exam sentence: after landing they were auctioned and recorded in the ledger beside livestock
and tools — "a person became property."`,
        },
      },
    },

    {
      id: 'chattel-slavery-legal-construction',
      termCn: '动产奴隶制的法律建构（partus 1662 → 1705 法典）',
      termEn: 'The Legal Construction of Chattel Slavery (partus 1662 → 1705 code)',
      defCn: '动产奴隶制（chattel slavery）是指把人当成可以买卖、可以继承的财产，而且这种身份是终身的、按种族划定的。重要的是它不是自古就有的——是弗吉尼亚用一条条法律一步步造出来的。1662 年的 partus 法让奴役可以遗传，1705 年的法典把整套制度写死。',
      defEn: 'Chattel slavery means treating people as property that can be bought, sold, and inherited — for life, based on race. The key point: this was not always the rule. Virginia built it piece by piece through legislation. The 1662 partus law made bondage inheritable; the 1705 code locked the whole system into law.',
      standardRef: ['APUSH Period 2 Topic 2.5 (slave systems)', 'CA HSS 8.1', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'enslaved-on-the-receiving-end',
        nodeIds: ['col-enslaved-n3', 'col-merchant-n5', 'col-merchant-n6'],
        xiaoweiNote: {
          cn: `这是整课的"causation 核心"，三条故事线都讲到，商人那条故事线和被奴役者那条故事线最清楚。
老师说 AP 最爱奖励"奴隶制不是自然出现的，是被法律一步步造出来的"这条多步因果。

把立法链按顺序背熟（AP 出 causation 题就用它）：
**① 早期主力是 indentured servant（契约奴，很多是白人，有年限、能翻身）
→ ② 1676 Bacon's Rebellion 暴露"穷白人 + 黑奴联手"的威胁
→ ③ 1662 partus sequitur ventrem（身份随母亲，奴役可继承）
→ ④ 1705 弗吉尼亚《Servants and Slaves 法案》写成完整法典
→ ⑤ chattel slavery 成型（终身、可继承、按种族）。**

两个最该背的拉丁/年份：
- **partus sequitur ventrem = 身份随母亲（1662）**：反过来用英国"身份随父亲"的老规矩，
  孩子是奴还是自由只看母亲——这一刀砍向还没出生的孩子，让奴役变成"会遗传"的东西。
- **1705 法典**：把"非基督徒外来者 = 奴隶、可买卖"写死，连"信了教就能换自由"都堵死。

考点关键句：底层那条线，本来是"穷 vs 富"，Bacon 起义后被精英重画成"白 vs 黑"——这是**设计，不是天意**。`,
          en: `This is the whole topic's "causation core," touched by all three story threads; clearest in the
merchant's thread and the enslaved person's thread. Teacher said AP most rewards the multi-step
causation "slavery wasn't natural — it was built, law by law."

Memorize the legislative chain in order (AP uses it for causation questions):
**(1) The early main labor was the indentured servant (many white, fixed-term, could start over)
→ (2) 1676 Bacon's Rebellion exposed the threat of "poor whites + enslaved blacks united"
→ (3) 1662 partus sequitur ventrem (status follows the mother, bondage is inheritable)
→ (4) 1705 Virginia act concerning Servants and Slaves wrote it into a full code
→ (5) chattel slavery took shape (lifelong, inherited, defined by race).**

The two Latin/year items most worth memorizing:
- **partus sequitur ventrem = status follows the mother (1662)**: it flipped England's old rule
  of "status follows the father," so whether a child is enslaved or free follows only the mother —
  the cut fell on the unborn child, making bondage something "inherited."
- **the 1705 code**: fixed "non-Christian outsiders = slaves, to be bought and sold," even shutting
  off "convert to Christianity to gain freedom."

Key exam sentence: the line at the bottom was first "poor vs rich"; after Bacon's Rebellion the
elite redrew it as "white vs black" — this was **design, not fate**.`,
        },
      },
    },

    {
      id: 'bacons-rebellion',
      termCn: '培根起义（1676）',
      termEn: "Bacon's Rebellion (1676)",
      defCn: '1676 年发生在弗吉尼亚的武装冲突。穷白人（很多是干完契约没分到好地的前契约奴）和被奴役的黑人联手，反抗弗吉尼亚总督 Berkeley，最终烧了首府 Jamestown。AP 考它的原因不是这场起义本身，而是它之后发生了什么：精英们用"种族"这条线把底层重新分开，把终身奴役全压到黑人身上——这是种族奴隶制转向的催化剂。',
      defEn: 'An armed uprising in Virginia in 1676. Poor whites (many former indentured servants who never received good land) and enslaved Black people joined together against Governor Berkeley and burned the colonial capital, Jamestown. AP tests this not for the rebellion itself, but for what came after: the elite used "race" to split the lower classes apart and push all lifelong bondage onto Black people — making this the catalyst for the turn to racial slavery.',
      standardRef: ['APUSH Period 2 Topic 2.5', 'CA HSS 8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'merchant-actor',
        nodeIds: ['col-merchant-n5'],
        xiaoweiNote: {
          cn: `商人那条故事线里讲的"转折"。为什么单列一张卡？因为 AP 把它当"种族奴隶制转向"的枢纽事件来考。

我把它的三层意思背成一条线：
**起因 → 经过 → 后果**
- **起因**：穷白人（很多是干完契约没分到好地的前契约奴）本来是为了**夺西边原住民的地**，
  跟弗吉尼亚总督 Berkeley 闹翻。
- **经过**：1676 年，一群穷白人和被奴役的黑人**顺势联起手来**，烧了首府 Jamestown。
- **后果**："穷白人和黑奴联手"是精英最怕的画面 → 他们想通：与其让底层按"穷富"抱团，
  不如把那条线重画成"白 vs 黑"，给穷白人一点"至少我是白人"的特权，把终身奴役全压到黑人身上。

考点关键句：Bacon's Rebellion 是从"阶级线"转向"种族线"的**催化剂**——它本身没造出奴隶制，
但它吓出了那一连串把奴隶制写进法律的选择。`,
          en: `The "turn" in the merchant's story thread. Why its own card? Because AP tests it as the pivot
event for "the turn to racial slavery."

I memorize its three layers as one line:
**cause → events → consequence**
- **Cause**: poor whites (many former indentured servants who never got good land) had first fallen
  out with Virginia governor Berkeley over wanting to **seize Native land to the west**.
- **Events**: in 1676, a crowd of poor whites and enslaved blacks **then joined hands** and burned
  the capital, Jamestown.
- **Consequence**: "poor whites and enslaved blacks united" was the elite's most feared picture →
  they worked it out: rather than let the bottom band together by "poor or rich," redraw the line
  as "white vs black," give poor whites a little "at least I am white" privilege, and push all
  lifelong bondage onto black people.

Key exam sentence: Bacon's Rebellion was the **catalyst** for the shift from a "class line" to a
"race line" — it didn't create slavery itself, but it frightened the elite into the chain of choices
that wrote slavery into law.`,
        },
      },
    },

    {
      id: 'great-awakening',
      termCn: '第一次大觉醒',
      termEn: 'The First Great Awakening',
      defCn: '约 1730-1740 年代横扫北美所有殖民地的一场大规模宗教复兴运动。它把冷掉的信仰重新点燃，但也把教会劈成支持复兴的新光派（New Lights）和反对的旧光派（Old Lights）。更重要的是，它是头一件"同时席卷所有殖民地"的事——给各过各的殖民地第一次"共同体验"。',
      defEn: 'A sweeping religious revival that ran through all the North American colonies in the roughly 1730s-1740s. It re-lit a faith that had been cooling, but also split the church between the New Lights (who backed the revival) and the Old Lights (who opposed it). Most importantly, it was the first event to sweep all the colonies at the same time — giving these separate, scattered colonies their first shared experience.',
      standardRef: ['APUSH Period 2 Topic 2.6 (Great Awakening)', 'CA HSS 8.1', 'AP LEQ/SAQ'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'minister-mediator',
        nodeIds: ['col-minister-n4', 'col-minister-n6', 'col-merchant-n7'],
        xiaoweiNote: {
          cn: `牧师那条故事线里是主线，商人那条故事线也碰到了（他也去听、也流泪）。
约 1730s-1740s 横扫所有殖民地的宗教大复兴，是中国背景家长几乎从没听过、但 AP 必考的一段。

两个必记人物：
- **George Whitefield**：英国来的巡回布道家，1739-40 在**露天**对上万人讲道（费城一次约一万人，
  这是**估算**，不是点过的数）。连不信教、爱算账的 **Franklin** 都被震住、掏空了口袋。
- **Jonathan Edwards**：1741 年《Sinners in the Hands of an Angry God》，靠**情感震撼**让会众当场痛哭。

老师说 AP 的 LEQ/SAQ 里，大觉醒被考最多的是它的**长期意义**，要记住"三面"：
**① 它把冷掉的信仰重新点燃，也 ② 把教会劈成两派（见新光派/旧光派那张卡）；
更重要的是 ③ 它是头一件"同时席卷所有殖民地"的事——给了各过各的殖民地第一次"共同体验"，
被一些史家看作革命思想的远端铺垫。**

考点关键句：Whitefield 告诉普通人"你不必经过任何既有权威，可以自己直接面对上帝"——
这种"不必经过权威"的想法，后来可能在政治里也长出东西。`,
          en: `The minister's story thread is the main line; the merchant's thread touches it too (he
also went to hear it and wept). A sweeping religious revival across all the colonies in the
~1730s-1740s — a stretch Chinese-heritage parents have almost never heard of, but AP always tests.

Two must-remember figures:
- **George Whitefield**: the itinerant preacher from England who in 1739-40 preached to tens of
  thousands in the **open air** (about ten thousand once in Philadelphia — that's an **estimate**,
  not a counted number). Even the not-religious, accounting-minded **Franklin** was stunned and
  emptied his pockets.
- **Jonathan Edwards**: "Sinners in the Hands of an Angry God" (1741), using **emotional shock** to
  make congregations weep on the spot.

Teacher said in AP LEQ/SAQ the most-tested thing about the Awakening is its **long-term meaning** —
remember the "three faces":
**(1) it relit a cooling faith, and (2) split the church into two camps (see the New/Old Lights card);
more importantly (3) it was the first thing to "sweep all the colonies at once" — giving these
separate colonies a first "shared experience," seen by some historians as a distant seed of
revolutionary thought.**

Key exam sentence: Whitefield told ordinary people "you need not go through any established
authority; you can face God directly yourself" — that "no authority needed" idea would later grow
something in politics too.`,
        },
      },
    },

    {
      id: 'new-old-lights',
      termCn: '新光派 / 旧光派',
      termEn: 'New Lights / Old Lights',
      defCn: '大觉醒运动把殖民地教会劈成两派。新光派（New Lights）支持复兴，相信信仰该是热烈的、个人的；旧光派（Old Lights）反对，觉得大觉醒太情绪化、破坏教会秩序。1741 年 Gilbert Tennent 的布道引爆了长老会的正式分裂。这两个词是 AP 考大觉醒"双面性"时必用的标签。',
      defEn: 'The two camps the Great Awakening split colonial churches into. New Lights supported the revival — faith should be emotional, personal, and direct. Old Lights opposed it — too disorderly, bypassing the trained clergy. Gilbert Tennent\'s 1741 sermon triggered the formal Presbyterian split. These two terms are the must-know labels when AP asks about the "two sides" of the Great Awakening.',
      standardRef: ['APUSH Period 2 Topic 2.6', 'CA HSS 8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'minister-mediator',
        nodeIds: ['col-minister-n5'],
        xiaoweiNote: {
          cn: `牧师那条故事线里专门讲这道"裂缝"。大觉醒不只点火，也把牧师一夜劈成两派——
这是大觉醒"双面"里"分裂"那一面的考点。

我背成一张对照表：
- **New Lights（新光派）**：支持复兴。信仰就该滚烫、直击人心；皈依是个人的事，
  人人都能自己直接面对上帝；老一套干巴巴的讲道该烧掉。
- **Old Lights（旧光派）**：反对。太煽情、太混乱；它绕过教会、绕过受训牧师，
  让情绪上头的人自以为得了恩典——这不是复兴，是失序。

必记触发点：**1741 年 Gilbert Tennent 讲《The Danger of an Unconverted Ministry》**，
几乎当面骂"没重生过的牧师"是瞎子领瞎子，**长老会就此裂成两半**。

记忆锚：New = 新 = 情感 / 个人 / 反权威；Old = 旧 = 秩序 / 教会 / 受训牧师。`,
          en: `The minister's story thread is specifically about this "crack." The Awakening didn't only light a
fire — it split the ministers into two camps overnight. This is the "division" face of the
Awakening's two-sidedness.

I memorize a compare table:
- **New Lights**: backed the revival. Faith should be hot, straight to the heart; conversion is
  personal; everyone can face God directly themselves; the old dry preaching should be burned away.
- **Old Lights**: opposed it. Too emotional, too disorderly; it went around the church and the
  trained ministers, letting people swept up in feeling fancy they'd received grace — not revival,
  but the breakdown of order.

Must-remember trigger: **in 1741 Gilbert Tennent preached "The Danger of an Unconverted Ministry,"**
all but cursing "unconverted ministers" as the blind leading the blind, and **the Presbyterian
church split in two over it.**

Memory anchor: New = emotion / individual / anti-authority; Old = order / church / trained ministers.`,
        },
      },
    },

    {
      id: 'stono-rebellion',
      termCn: 'Stono 起义（1739）与黑人能动性',
      termEn: 'The Stono Rebellion (1739) & Black Agency',
      defCn: '1739 年 9 月 9 日发生在南卡罗来纳 Stono 河边的奴隶武装起义，是英属北美最大的一次奴隶起义。黑人能动性（black agency）是 AP 的核心考点：受奴役者不是被动等待解放的货物，是会反抗、会逃、会喊"自由"的历史主体。Stono 起义是这个论点最强的证据之一。',
      defEn: 'An armed uprising by enslaved people on September 9, 1739, near the Stono River in South Carolina — the largest slave revolt in British North America. Black agency is the key AP concept: the enslaved were not passive goods waiting to be freed; they were historical actors who resisted, fled, and demanded "freedom." The Stono Rebellion is one of the strongest pieces of evidence for this argument.',
      standardRef: ['APUSH Period 2 Topic 2.5', 'CA HSS 8.1', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'enslaved-on-the-receiving-end',
        nodeIds: ['col-enslaved-n6', 'col-enslaved-n7', 'col-merchant-n8'],
        xiaoweiNote: {
          cn: `被奴役者那条故事线的高潮，也是这一课三条故事线都听得见的那阵"鼓声"的落点。
老师说这是 AP DBQ 反复奖励的论点：**black agency（黑人能动性）**——
受奴役者**不是**被动等待解放的货物，是会反抗、会逃、会喊"自由"的历史主体。

必记事实：
- **1739 年 9 月 9 日，南卡 Stono 河边**，一群被奴役的人（多从安哥拉/刚果来、可能本就是士兵）
  打着鼓、举着旗，喊着"**Liberty（自由）**"，向南往**西班牙控制的佛罗里达**走（那里答应给逃奴自由）。
- 这是**英属北美最大的一次奴隶起义**。
- 鼓的细节最该记：鼓声是他们从非洲带来、主人听不懂的语言，会传信号、把人连成一片。

后果（continuity / change 题常考）：起义被血腥镇压 → **1740 年南卡通过 Negro Act**，
把控制收得更紧：限识字、限聚集，**连打鼓都禁了**——因为他们终于听懂了那鼓声的意思。

诚实的一面（DBQ complexity）：这不是干净的故事，起义也杀了人。AP 要你**同时**拿住
"几代奴役逼出的怒火"和"暴力也落在普通人身上"两面，不一刀切。`,
          en: `The climax of the enslaved person's story thread, and the landing point of the "drumbeat" heard
across all three story threads in this topic. Teacher said this is the point AP DBQ rewards again
and again: **black agency** — the enslaved were **not** passive goods waiting to be freed, but
historical actors who resisted, fled, and shouted "freedom."

Must-remember facts:
- **September 9, 1739, by the Stono River in South Carolina**, a group of enslaved people (mostly
  from Angola/Kongo, perhaps soldiers) beat drums, raised flags, and shouted "**Liberty**," marching
  south toward **Spanish-held Florida** (which promised freedom to those who fled).
- This was the **largest slave uprising in British North America**.
- The drum detail is the one to remember: the drumbeat was a language they carried from Africa that
  the masters couldn't understand — it carried signals and joined people into one.

Consequence (often tested in continuity/change questions): the uprising was crushed in blood → **in
1740 South Carolina passed the Negro Act**, tightening control: limiting reading, limiting
gatherings, and **even banning the drum** — because they had finally understood what the drumbeat meant.

The honest side (DBQ complexity): it's not a clean story; the uprising killed people too. AP wants
you to hold **both** "rage forced out by generations of bondage" and "violence also fell on ordinary
people" at once, not one-sided.`,
        },
      },
    },

    {
      id: 'mercantilism-navigation-acts',
      termCn: '重商主义与航海条例',
      termEn: 'Mercantilism & the Navigation Acts',
      defCn: '重商主义（mercantilism）是当时英国的经济思路：国家财富靠攒金银，所以殖民地的任务是给母国供原料、买母国成品。航海条例（Navigation Acts，1651 年起）把这套思路写成法律：殖民地的烟草、糖只能卖给英国，货物只能用英国船运。两者合起来就是用国家力量把殖民地锁成母国的原料地，同时推动包括贩奴在内的跨洋贸易。',
      defEn: 'Mercantilism was England\'s core economic idea: a nation\'s wealth equals the gold and silver it hoards, so the colony\'s job is to supply raw materials and buy finished goods from the mother country. The Navigation Acts (from 1651) turned this idea into law: colonial tobacco and sugar could only go to England; goods had to travel on English ships. Together they used state power to lock the colonies into serving England and to drive transatlantic trade — including the slave trade.',
      standardRef: ['APUSH Period 2 Topic 2.4', 'CA HSS 8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'merchant-actor', nodeId: 'col-merchant-n3', context: '商人提到让贩奴"光明正大"的制度背景：mercantilism + Navigation Acts + Royal African Company' },
        ],
      },
      standaloneText: {
        cn: `故事里商人只用一句话带过这套制度（它在叙事里是背景），但 AP 把它当**经济制度的硬考点**，
所以单独给你一张卡。它回答的是："三角贸易为什么能光明正大、还越做越大？"

**重商主义（mercantilism）** 是当时英国的经济思路：
国家的财富 = 它能攒下多少金银。所以殖民地的作用，就是给母国**供原料、买成品**，
让财富往母国流——殖民地被定位成"母国的原料供应地 + 成品市场"，不许自己乱来。

**航海条例（Navigation Acts，1651 起陆续颁布）** 是把这套思路写成法律：
- 殖民地的某些货物（如烟草、糖）只能运往英国或其他英国殖民地。
- 进出殖民地的货物，大体只能用英国/殖民地的船来运。
目的就是：**把殖民地经济锁进英国的轨道**，肥水不流外人田。

和奴隶贸易的连接：英国用国家力量推动跨洋贸易，**Royal African Company（皇家非洲公司，1672）**
一度垄断英国贩奴；**1698 年垄断被打破**后，独立商人一窝蜂涌进来，
英国贩奴量爆炸式增长，没几十年就成了世界最大贩奴国。

考点关键句：重商主义 + 航海条例 = 一套**用国家力量把殖民地锁成原料地、推动跨洋（含贩奴）贸易**的制度。
（它后来也是引向独立战争的远端原因之一——殖民地越来越不满被经济上"锁住"，但那是下一课的事。）`,
        en: `In the story the merchant covers this system in one line (it's background in the narrative), but
AP treats it as a **hard economic exam point**, so here's its own card. It answers: "Why could the
triangular trade run openly and keep growing?"

**Mercantilism** was England's economic thinking at the time:
a nation's wealth = how much gold and silver it can hoard. So a colony's job was to **supply raw
materials and buy finished goods** from the mother country, keeping wealth flowing home — the colony
was positioned as "the mother country's supply zone + market for finished goods," not free to freelance.

**The Navigation Acts** (issued from 1651 on) wrote this thinking into law:
- Certain colonial goods (like tobacco, sugar) could be shipped only to England or other English colonies.
- Goods in and out of the colonies generally had to travel on English/colonial ships.
The goal: **lock the colonial economy into England's orbit**, keeping the profit in the family.

The link to the slave trade: England used state power to drive transatlantic trade. The **Royal
African Company (1672)** once held a monopoly on English slave trading; after that **monopoly was
broken around 1698**, independent merchants flooded in, England's slave trading exploded, and within
decades it became the world's largest slave-trading nation.

Key exam sentence: mercantilism + the Navigation Acts = a system that **used state power to lock the
colonies into being a supply zone and to drive transatlantic (including slave) trade.**
(It was also one distant cause of the later Revolution — colonists grew resentful of being
economically "locked in" — but that's the next topic.)`,
      },
      xiaoweiNote: {
        cn: `老师说 AP 考殖民地经济，最常问"母国和殖民地是什么经济关系"——答案核心就是这两个词：
**重商主义（思路）+ 航海条例（法律）= 殖民地为母国服务、被锁成原料地。**

我的记忆锚：重商主义 = "攒金银"；航海条例 = "只能用我的船、只能卖给我"。
再连一条线：**Royal African Company 1672 垄断 → 1698 垄断破 → 独立商人涌入 → 英国成世界最大贩奴国。**`,
        en: `Teacher said when AP tests the colonial economy, the most common question is "what was the
economic relationship between mother country and colony" — and the core answer is these two terms:
**mercantilism (the thinking) + Navigation Acts (the law) = colonies serve the mother country,
locked into being a supply zone.**

My memory anchor: mercantilism = "hoard gold and silver"; Navigation Acts = "only on my ships, only
sold to me." Then one more chain: **Royal African Company 1672 monopoly → 1698 monopoly broken →
independent merchants flood in → England becomes the world's largest slave-trading nation.**`,
      },
    },

    {
      id: 'puritan-covenant-halfway',
      termCn: '清教徒、圣约与半路圣约',
      termEn: 'Puritans, the Covenant & the Halfway Covenant',
      defCn: '清教徒（Puritans）是 1630 年代来到新英格兰、想建一座"道德样板城市"的英国基督徒。他们相信自己和上帝立了一个约（covenant）：活得圣洁，上帝就庇佑这座城——这就是约翰·温斯罗普说的"山巅之城（city upon a hill）"。半路圣约（Halfway Covenant，1662）是他们三代之后信仰冷掉、为了保住教会成员人数而做出的妥协，让没有完整皈依体验的人的孩子也能受洗。它既是焦虑的证据，也是大觉醒发生的铺垫。',
      defEn: 'Puritans were the English Christians who came to New England in the 1630s wanting to build a "model moral city." They believed they had made a covenant with God: live holy lives, and God protects the city — this is what John Winthrop called a "city upon a hill." The Halfway Covenant (1662) was the compromise they made three generations later, when faith had cooled and church membership was shrinking: let the children of people without a full conversion experience be baptized and count as half-members. It is both evidence of anxiety and the setup for why the Great Awakening happened.',
      standardRef: ['APUSH Period 2 Topic 2.7 (colonial society & culture)', 'CA HSS 8.1'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'minister-mediator',
        nodeIds: ['col-minister-n1', 'col-minister-n2', 'col-minister-n3'],
        xiaoweiNote: {
          cn: `牧师那条故事线の前三节的背景，解释了他为什么那么焦虑——也是大觉醒"为什么会发生"的前提。

要懂这条线，先懂三个词：
- **Puritan（清教徒）+ covenant（圣约）**：清教徒相信自己和上帝立了一个约——
  答应活得圣洁虔诚，上帝就庇佑这座城。这个约是"**山巅之城（city upon a hill）**"的根
  （Winthrop 1630 年坐 Arbella 号带来的愿景：一座虔诚到全世界都盯着看的样板社会）。
- **Halfway Covenant（半路圣约，1662）**：三代下来，能描述"重生"体验、够资格当正式教友的人
  越来越少，受洗的孩子也越来越少。前辈们怕信仰断代，搞了个折中：让没有完整皈依体验的人的孩子
  也能受洗、算半个教友。

考点关键句：**Halfway Covenant 本身就是"信仰在冷掉"的证据**——当一座"样板城"不得不放低门槛
只为留住人，它已经从根上松动了。**正因为信仰冷掉，后来才有大觉醒这场"再点火"。**

记忆锚：city upon a hill（理想）→ 三代世俗化 → Halfway Covenant 1662（焦虑的证据）→ 大觉醒（再点火）。`,
          en: `The background of the first three sections in the minister's story thread, explaining why he was
so anxious — and the precondition for "why the Great Awakening happened."

To get this line, first get three terms:
- **Puritan + covenant**: Puritans believed they'd made a covenant with God — promise to live holy
  and pious, and God watches over the city. This covenant is the root of the "**city upon a hill**"
  (Winthrop's 1630 vision, carried on the ship Arbella: a model society so pious all the world would watch).
- **Halfway Covenant (1662)**: three generations on, fewer people could describe a "rebirth"
  experience worthy of full membership, and fewer children were baptized. Fearing the faith would
  break in one generation, the elders made a compromise: let the children of people without a full
  conversion be baptized too and count as half-members.

Key exam sentence: **the Halfway Covenant is itself evidence the faith was "going cold"** — when a
"model city" must lower its threshold just to keep people, it has already loosened at the root.
**Precisely because the faith cooled, the Great Awakening later came as a "re-lighting."**

Memory anchor: city upon a hill (ideal) → three generations secularize → Halfway Covenant 1662
(evidence of anxiety) → Great Awakening (re-lighting).`,
        },
      },
    },

    {
      id: 'two-faces-one-land',
      termCn: '同一片土地的两张脸',
      termEn: 'Two Faces of One Land',
      defCn: '这课最核心的分析视角：殖民地的"繁荣""虔诚""机会"是真的，同时它们建在一套把人掳来当货物的奴隶经济上。两张脸同时是真的，不能只看一面。AP DBQ 最高分要求的"complexity（复杂性）"就是：既不洗白，也不全盘否定，能同时拿住两面，用证据说话。',
      defEn: 'The central analytical lens of this topic: the colony\'s "prosperity," "piety," and "opportunity" were real — and at the same time they were built on a slave economy that captured people and treated them as goods. Both faces are true at once; you cannot look at only one side. The "complexity" that AP DBQ top-band scoring demands is exactly this: neither whitewash nor wholesale condemnation, holding both sides with evidence.',
      standardRef: ['APUSH Period 2 (synthesis)', 'AP DBQ rubric (complexity)', 'CA HSS 8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'enslaved-on-the-receiving-end',
        nodeIds: ['col-enslaved-n10', 'col-enslaved-n11', 'col-merchant-n10', 'col-minister-n10'],
        xiaoweiNote: {
          cn: `这是把整课收口的一张"评价"卡，三条故事线的结尾都在做同一件事——摆出"两边都站得住"，
**不替你下道德结论**。AP DBQ 评分里最高的一档要的就是这种 **complexity（复杂性）**：
既不洗白，也不全盘否定，能同时持有两面。

我把整课的"两张脸"背成一句话：
**殖民地的"繁荣 / 虔诚 / 机会"是真的；它们同时建在一套把人掳来、当成货物的奴隶经济上。光与代价同体。**

三条故事线各留了一个不替你回答的难题（都没有标准答案，AP 看你怎么用证据）：
- **商人**：一个随大流、守法、礼拜天坐第一排的"正常人"，该不该为整个时代的罪负责？
- **牧师**：一个明明看见、却选择沉默的人，他的"挣扎"算不算一种帮凶？
- **被奴役者**：自由是用真实暴力换来的（Stono 也杀了普通人），这是越过了一条线，
  还是几代奴役逼出来的火？

高分写法（老师反复强调）：**先承认两边都站得住，再说明你为什么更倾向某一边**——这就是 complexity。

补充小钩子：故事最后那句"今天身边有没有一句'写在纸上对所有人算数'、可落到某些人头上就不算数的话？"
——这是把 1650-1750 的张力接到今天，AP 的 LEQ 收尾也爱要这种"延续到当下"的视野。`,
          en: `This is the "evaluation" card that closes the whole topic. The endings of all three story threads
do the same thing — lay out "both sides stand" and **refuse to draw the moral conclusion
for you**. The top band of AP DBQ scoring wants exactly this **complexity**: neither whitewash nor
wholesale condemnation, holding both faces at once.

I memorize the topic's "two faces" as one line:
**The colony's "prosperity / piety / opportunity" were real; at the same time they were built on a
slave economy that captured people and treated them as goods. The light and the cost are one body.**

Each story thread leaves a hard question it won't answer for you (no standard answer; AP watches how you use evidence):
- **The merchant**: should a "normal" person who went with the current, obeyed the law, and sat in
  the front pew on Sunday be held responsible for the crime of a whole age?
- **The minister**: a man who clearly saw yet chose silence — is his "struggle" a kind of complicity?
- **The enslaved**: freedom came through real violence (Stono killed ordinary people too) — did this
  cross a line, or was it fire forced out by generations of bondage?

High-scoring move (teacher kept stressing it): **first acknowledge both sides stand, then explain
why you lean one way** — that's complexity.

A small extra hook: the story's closing line, "is there a sentence today written on paper to count
for everyone that stops counting once it lands on certain people?" — that connects the 1650-1750
tension to now, and AP LEQ endings love this "continuity to the present" view.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `奴隶制不是从天上掉下来的，是一条条法律一步步造出来的：1662 年"身份随母亲"（partus）让奴役可以遗传，
1705 年弗吉尼亚法典把"非基督徒外来者 = 奴隶、可买卖"写死。

如果一种残酷的制度是被"合法"一步步建起来的，"合法"这两个字，还能让它显得正当吗？
用至少两条具体证据（法律、年份或事件）支持你的判断。`,
      en: `Slavery didn't fall from the sky — it was built law by law: in 1662 "status follows the mother"
(partus) made bondage inheritable; in 1705 the Virginia code fixed "non-Christian outsiders =
slaves, to be bought and sold."

If a cruel system was built "legally," step by step, can the word "legal" still make it look just?
Support your judgment with at least two specific pieces of evidence (laws, years, or events).`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "合法 ≠ 正当"这边的证据：1662 partus（让奴役可继承）、1705 法典（堵死信教换自由）、
  Bacon's Rebellion 后精英"重画白/黑线"是设计而非天意。
- 想替"合法"辩护的，可以试着说当时人觉得这"符合规矩"——但这恰恰暴露了"正常 / 合法"最危险的地方
  （商人那条故事线就在掂量这个）。
高分写法：承认"合法"确实让当时的人心安，再指出"心安"本身不等于"正当"——这就是 complexity。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which side
you pick.
- Evidence for "legal ≠ just": 1662 partus (made bondage inheritable), the 1705 code (shut off
  conversion-for-freedom), and the elite "redrawing the white/black line" after Bacon's Rebellion as
  design, not fate.
- To defend "legal," you could note that people of the time felt it "followed the rules" — but that's
  exactly what exposes the danger of "normal / legal" (the merchant's story thread weighs this throughout).
High-scoring move: acknowledge "legal" did let people of the time feel at ease, then point out that
"at ease" doesn't equal "just" — that's complexity.`,
      conceptsActivated: ['chattel-slavery-legal-construction', 'bacons-rebellion'],
    },
    {
      id: 'q2',
      cn: `这一遍你主要听到的是账本上没有名字的那个人——稻田里被掳来的西非人。1739 年 Stono 起义里，
他打着鼓、举着旗，喊"自由"，向南往佛罗里达走，证明了"财产会站起来"（black agency）。
可这场起义也杀了人，而且很快被血腥镇压，第二年南卡还立了 Negro Act 收得更紧。

如果你是 AP 老师，要出一道题考"受奴役者的反抗是历史能动性的证明，还是注定带来更狠的镇压"，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `This pass you mostly heard the one with no name in the ledger — the West African captured to the
rice fields. In the 1739 Stono Rebellion he beat the drum, raised the flag, shouted "freedom," and
marched south toward Florida, proving "property stands up" (black agency). But the uprising also
killed people, was soon crushed in blood, and the next year South Carolina passed the Negro Act,
tightening control further.

If you were an AP teacher writing a question on "is the enslaved people's resistance proof of
historical agency, or did it inevitably bring harsher repression," how would you phrase it? Write
your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常逼学生**同时看见两件事**，而不是二选一。
你可以让学生同时拿住：① Stono 证明受奴役者是历史主体（会反抗、会喊自由），不是被动货物；
② 能动性的代价是惨烈镇压 + 1740 Negro Act 把控制收得更紧（连打鼓都禁）。
进阶：让学生想想"禁鼓"这个细节为什么这么有力——主人禁的不是一面鼓，是鼓声底下那个"不肯认命的我们"。
AP 看的是你能不能把"能动性"和"代价"放进同一道题，逼学生写出 complexity，而不是简单歌颂或简单惋惜。`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can have students hold both: (1) Stono proves the enslaved were historical actors (who resisted,
who shouted for freedom), not passive goods; (2) the cost of that agency was brutal repression plus
the 1740 Negro Act tightening control (even banning the drum).
Going deeper: have students consider why the "drum ban" detail is so powerful — the masters banned
not a drum but the "unresigned us" beneath the drumbeat. AP wants you to put "agency" and "cost"
into one question, forcing students to write complexity rather than simply praising or simply lamenting.`,
      conceptsActivated: ['stono-rebellion', 'two-faces-one-land'],
    },
    {
      id: 'q3',
      cn: `清教徒漂洋过海，要建一座道德上的"山巅之城"（city upon a hill）；一百年后，这座城最赚钱的生意之一，
却是把人蒸馏进朗姆酒、再用朗姆酒去西非换人。大觉醒里 Whitefield 还告诉每个普通人：
你不必经过任何既有权威，可以自己直接面对上帝。

同一片土地上，最高的理想和最深的剥削同时是真的。你觉得"理想"和"现实"之间是什么关系？
"不必经过权威"这种想法，除了在宗教里，还可能在别的地方（比如政治）长出什么？
用这一课里的一个具体例子支持你的看法。`,
      en: `The Puritans crossed the ocean to build a moral "city upon a hill"; a century later, one of that
city's most profitable businesses was distilling people into rum and using rum to buy people in West
Africa. In the Great Awakening, Whitefield even told every ordinary person: you need not go through
any established authority; you can face God directly yourself.

On the same soil, the highest ideal and the deepest exploitation were both real at once. What do you
think is the relationship between "ideal" and "reality"? And the idea "no authority needed" — beyond
religion, what might it grow into elsewhere (say, in politics)? Support your view with one specific
example from this topic.`,
      hintCn: `提示：先把两条线分清楚——
"理想 vs 现实"：清教的"山巅之城"是理想，三角贸易 + 奴隶制是现实；它们在同一片土地上同时为真
（牧师那条故事线里"脚下踩着 Middle Passage 上死掉的人"就是这个张力的画面）。
"不必经过权威"：这是大觉醒（尤其 Whitefield / New Lights）的招牌想法；想想它松动了人对既有权威的服从，
被一些史家看作革命思想的远端铺垫——这是把宗教里的想法"迁移"到政治。
高分写法：不要简单说"理想是假的"或"现实更重要"，而是说明**理想和现实可以同时为真、互相拉扯**，
再用一个具体例子（city upon a hill / Whitefield 直接面对上帝 / 大觉醒的共同体验）把抽象论点钉在证据上。`,
      hintEn: `Hint: first keep two lines straight —
"ideal vs reality": the Puritan "city upon a hill" is the ideal; the triangular trade + slavery is
the reality; both were true at once on the same soil (the minister's story thread, "standing on the
dead of the Middle Passage," is the image of this tension).
"no authority needed": this is the signature idea of the Awakening (especially Whitefield / New
Lights); consider how it loosened obedience to established authority, seen by some historians as a
distant seed of revolutionary thought — that's "transferring" a religious idea into politics.
High-scoring move: don't simply say "the ideal was fake" or "reality matters more"; show that **ideal
and reality can both be true and pull against each other**, then pin the abstract claim to evidence
with one specific example (city upon a hill / Whitefield's "face God directly" / the Awakening's
shared experience).`,
      conceptsActivated: ['puritan-covenant-halfway', 'great-awakening', 'two-faces-one-land'],
    },
  ],
};

export default notebook;
