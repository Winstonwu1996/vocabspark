// ─── 同伴笔记本架构 v1 · Afro-Eurasian Trade Networks 1200-1450 ─────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 12 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson) + xiaoweiNote
//          （standaloneText 与 xiaoweiNote 都在卡顶层，绝不嵌进 storyAnchor）
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Mansa Musa 顶端赢家 / Ibn Battuta 见证者 / 无名脚夫水手受影响方）
//   - notebook 提供考点闭环（三网对比 / 印度洋季风 / 跨撒哈拉金盐 / 改变网络的技术 /
//     流动的不只是货 / Pax Mongolica / 中国引擎 / 黑死病 / CCOT + 大航海前因 — 补完 AP World Unit 2）
//
// 课纲对齐：
//   - AP World History Modern — Unit 2 (1200-1450 · Networks of Exchange)，Topics 2.1-2.7，占考纲 8-10%
//   - California HSS Grade 7（中世纪世界贸易单元）
//
// 事实地基：对账 trade-networks-1200-factledger.md
//   - 盐金兑换统一为修辞而非字面率（账本 §1 + Dr.Park/Maria 审稿：「几乎和黄金一样金贵」，非「一斤盐换一斤金」）
//   - Sankore = 清真寺即学校（合一，账本 #10），非清真寺外附设的独立学校
//   - 市舶司 1087 设于"北宋"（账本 #1），非泛"宋朝"
//   - 黑死病死亡率用"可能三分之一"概数（账本 #20）
//
// schemaVersion: 1 · notebookVersion: trade-networks-1200-v1

export var notebook = {
  topicId: 'trade-networks-1200',
  topicNameCn: '三网相连 1200-1450',
  topicNameEn: 'Afro-Eurasian Trade Networks 1200-1450',
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
    cn: `今天老师说我们要学 1200 到 1450 年那张"把旧大陆缝成一整块"的大贸易网。
她说这是 AP World History 的 Unit 2，占整张考纲 8-10%，是这段历史的"结构骨架"。

她在黑板上写了三张网的名字：

陆上丝绸之路（Silk Roads）、印度洋季风贸易圈（Indian Ocean trade）、
跨撒哈拉黄金-盐路（Trans-Saharan trade）

还有一串词：monsoon（季风）、dhow（三角帆海船）、lateen sail（三角帆）、
compass（指南针）、Pax Mongolica（蒙古和平）、diaspora（侨民社群）、
Mansa（曼萨）、hajj（朝觐）、市舶司、Black Death（黑死病）。

我先记下来，等下读三个故事——曼萨·穆萨（网顶端散金的皇帝）、
伊本·白图泰（走遍三张网的见证者）、还有那个牵骆驼、扛盐、爬桅杆、
连名字都没留下的人——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页："这一时期最强大的不是任何一个皇帝，
而是'连接'本身——它让黄金、信仰、知识流动起来，也让黑死病流动得一样快。
读这张网，要同时看见它的辉煌和它的代价。"`,
    en: `Today my teacher said we're learning the great trade web of 1200-1450 that
"stitched the Old World into one whole." She said it's AP World History Unit 2,
worth 8-10% of the whole exam, the "structural skeleton" of this stretch of history.

On the board she wrote the names of three networks:

the overland Silk Roads, the Indian Ocean monsoon trade,
and the Trans-Saharan gold-salt road

Plus a string of terms: monsoon, dhow, lateen sail, compass, Pax Mongolica,
diaspora, Mansa, hajj, the shibosi (maritime trade office), Black Death.

Let me write these down. After I read the three stories — Mansa Musa (the emperor
scattering gold at the top of the web), Ibn Battuta (the witness who walked all three
networks), and the man who led camels, hauled salt, climbed masts, and left not even a
name — I'll come back and check this list and see whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The most powerful
thing of this era was not any one emperor, but 'connection' itself — it set gold, faith,
and knowledge flowing, and let the Black Death flow just as fast. To read this web, you
have to see its glory and its cost at the same time."`,
    keyTerms: [
      { cn: '陆上丝绸之路', en: 'Silk Roads' },
      { cn: '印度洋季风贸易圈', en: 'Indian Ocean trade' },
      { cn: '跨撒哈拉贸易（黄金-盐）', en: 'Trans-Saharan trade (gold-salt)' },
      { cn: '季风', en: 'monsoon' },
      { cn: '三角帆海船', en: 'dhow' },
      { cn: '三角帆', en: 'lateen sail' },
      { cn: '指南针', en: 'compass' },
      { cn: '骆驼鞍', en: 'camel saddle' },
      { cn: '商旅客栈', en: 'caravanserai' },
      { cn: '蒙古和平', en: 'Pax Mongolica' },
      { cn: '侨民社群', en: 'diaspora community' },
      { cn: '曼萨（王中之王）', en: 'Mansa (king of kings)' },
      { cn: '朝觐', en: 'hajj' },
      { cn: '清真言', en: 'shahada' },
      { cn: '市舶司', en: 'shibosi (maritime trade office)' },
      { cn: '黑死病', en: 'Black Death' },
      { cn: '流动的不只是货（跨文化交流）', en: 'more than goods moved (cross-cultural exchange)' },
      { cn: '延续与变迁', en: 'continuity and change (CCOT)' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '曼萨·穆萨',
        nameEn: 'Mansa Musa',
        ipa: '/ˈmɑːnsɑː ˈmuːsɑː/',
        roleCn: '约 1280-1337 马里皇帝，1324 朝觐麦加沿途散金、压低开罗金价，把西非画进世界地图（actor）',
        roleEn: 'c.1280-1337 emperor of Mali; on the 1324 hajj he scattered gold and depressed Cairo\'s gold price, drawing West Africa onto the world map (actor)',
        mustKnow: true,
        audioKey: 'mansa-musa',
      },
      {
        nameCn: '伊本·白图泰',
        nameEn: 'Ibn Battuta',
        ipa: '/ˈɪbən bætˈtuːtɑː/',
        roleCn: '1304-1368/69 摩洛哥旅人，1325 起旅行近 30 年走遍三网、最远抵泉州，著《Rihla》（mediator / 见证者）',
        roleEn: '1304-1368/69 Moroccan traveler; from 1325 he traveled nearly 30 years across all three networks to Quanzhou, author of the Rihla (mediator / witness)',
        mustKnow: true,
        audioKey: 'ibn-battuta',
      },
      {
        nameCn: '牵骆驼的脚夫 / dhow 水手',
        nameEn: 'The Nameless Carrier',
        ipa: null,
        roleCn: '合成桥接人物（无名，合并撒哈拉脚夫+印度洋水手），用身体撑起整张网、却没留下名字的无权方（receiving-end · DEFAULT）',
        roleEn: 'Composite bridging character (nameless, merging a Saharan porter and an Indian Ocean sailor); the powerless who held up the web with their bodies yet left no name (receiving-end · DEFAULT)',
        mustKnow: true,
        audioKey: null,
      },
      {
        nameCn: '郑和',
        nameEn: 'Zheng He',
        ipa: null,
        roleCn: '明代航海家，1405-1433 七下西洋最远抵东非——把宋元早已存在的民间海网"国家化"，不是开拓处女地',
        roleEn: 'Ming admiral whose 1405-1433 voyages reached East Africa — state-scaling a private sea network that already existed under Song-Yuan, not opening virgin ground',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '朱彧',
        nameEn: 'Zhu Yu',
        ipa: null,
        roleCn: '《萍洲可谈》（约 1119）作者，留下世界最早"海船用磁针导航"的文字记载',
        roleEn: 'Author of Pingzhou Table Talks (c.1119), the earliest written record of ships navigating by magnetic needle',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'three-networks-comparison',
      termCn: '三网对比（丝路 / 印度洋 / 跨撒哈拉）',
      termEn: 'The Three Networks Compared (Silk Roads / Indian Ocean / Trans-Saharan)',
      standardRef: ['AP World Unit 2.7 (comparison)', 'AP World Unit 2.1-2.4', 'CA HSS 7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ibn-battuta-mediator',
        nodeIds: ['trade-networks-ibn-n3'],
        xiaoweiNote: {
          cn: `Ibn Battuta 那一遍第 3 节给了一张"三网总览地图"，我把它压成一张对比表，
AP Unit 2.7 最爱考这种 comparison：

| 比什么 | 丝绸之路 | 印度洋 | 跨撒哈拉 |
|---|---|---|---|
| 靠什么走 | 骆驼商队接力 | 季风+dhow/大海船 | 骆驼穿沙漠 |
| 驮什么货 | 高价、轻便的奢侈品（丝绸、瓷器）| 笨重的大宗货也扛得动 | 黄金↑、盐↓ |
| 谁是中介 | 中亚商人 | 港口里多国侨商 | 黄金-盐经纪人 |
| 环境怎么塑造 | 绿洲（没水没城）| 季风时刻表 | 沙漠的井 |

一句必背的对照（Dr. Park 老师最爱）：
**丝路走"高价低重"的奢侈品，印度洋的大船才扛得动"大宗货"。**
这条直接能搬进 DBQ 的 comparison 段落。`,
          en: `Ibn Battuta's Lens Node 3 gives a "three-network overview map." I compressed it into
one comparison table — AP Unit 2.7 loves exactly this kind of comparison:

| What | Silk Roads | Indian Ocean | Trans-Saharan |
|---|---|---|---|
| How it moves | camel-caravan relay | monsoon + dhow/great ships | camels across desert |
| What it carries | high-value, light luxuries (silk, porcelain) | can bear heavy bulk goods | gold up, salt down |
| Middlemen | Central Asian merchants | many-nation diaspora traders in ports | gold-salt brokers |
| Environment | oases (no water = no city) | the monsoon timetable | desert wells |

One must-memorize contrast (Dr. Park's favorite):
**The Silk Roads carried "high-value, low-weight" luxuries; only the big Indian Ocean
ships could bear "bulk goods."** This drops straight into a DBQ comparison paragraph.`,
        },
      },
    },

    {
      id: 'indian-ocean-monsoon',
      termCn: '印度洋季风贸易圈',
      termEn: 'Indian Ocean Monsoon Trade',
      standardRef: ['AP World Unit 2.4 (Indian Ocean)', 'AP World Unit 2.2 (environment shapes trade)', 'CA HSS 7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ibn-battuta-mediator',
        nodeIds: ['trade-networks-ibn-n3', 'trade-networks-ibn-n5'],
        xiaoweiNote: {
          cn: `这是这一时期**体量最大**的海上网络——老师特别强调，比丝绸之路还大，
偏偏是很多课最忽略的一块。Ibn Battuta 第 5 节讲得最清楚：

**monsoon（季风）= 一年只往两个方向各吹半年的"风的时刻表"。**
约 4-9 月西南季风把船往东北吹（去印度、中国）；
10 月-次年 3 月东北季风把船往西南吹（回阿拉伯、东非）。

考点关键句（AP 最爱的"环境塑造历史/causation"）：
错过风季就得在异乡港口等半年 → 陌生人变邻居 → 催生 **diaspora（侨民社群）**：
阿拉伯人、波斯人、华人在港口扎根、通婚、建清真寺，造出一座座多语言港口城市。

记忆锚：**一个纯自然现象（风），造出了人类社会（多元港口城市）。**`,
          en: `This is the **largest** sea network of the era — teacher stressed it's bigger than the
Silk Roads, yet the piece most courses skip. Ibn Battuta's Node 5 makes it clearest:

**monsoon = a "wind timetable" that blows in each of only two directions for half the year.**
About April-September the southwest monsoon blows ships northeast (to India, China);
October-March the northeast monsoon blows them back southwest (to Arabia, East Africa).

Key exam sentence (AP's favorite "environment shapes history / causation"):
miss the wind season and you wait half a year in a foreign port → strangers become
neighbors → this breeds **diaspora communities**: Arabs, Persians, and Chinese put down
roots in ports, marry, build mosques, making multilingual port cities.

Memory anchor: **a purely natural thing (wind) created a human society (diverse port cities).**`,
        },
      },
    },

    {
      id: 'trans-saharan-gold-salt',
      termCn: '跨撒哈拉黄金-盐路',
      termEn: 'Trans-Saharan Gold-Salt Trade',
      standardRef: ['AP World Unit 2.3 (Trans-Saharan)', 'CA HSS 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'mansa-musa-actor',
        nodeIds: ['trade-networks-musa-n2', 'trade-networks-carrier-n2'],
        xiaoweiNote: {
          cn: `Mansa Musa 第 2 节和那个无名脚夫第 2 节，从顶端和底层各讲了一遍同一条路。

骨架：**西非有黄金、没盐；撒哈拉有盐。于是黄金往北走、盐往南走，骆驼接力换。**
盐为什么这么贵？因为热沙漠里人会脱水、没盐活不下去，而马里这片土地不产盐。

这里有个**老师反复纠正的误解陷阱**：
误："一斤盐能换一斤金"是真实兑换率。
正：这是**史学界公认的夸张说法**，是个 myth。课文里用的是修辞——
"盐稀缺到人们常说，它几乎和黄金一样金贵"。考场上千万别把它当字面数字写。

还有一个 Rule 0 的点（无名脚夫那遍戳的）：盐换金的暴利归了商队主人和中间人，
真正扛盐、用肩膀磨出血印的人，几乎一克都分不到。`,
          en: `Mansa Musa's Node 2 and the nameless carrier's Node 2 tell the same road from the
top and the bottom.

Skeleton: **West Africa has gold but no salt; the Sahara has salt. So gold goes north,
salt goes south, relayed by camel.** Why is salt so dear? In a hot desert people dry out
and can't live without it, and Mali's land doesn't produce it.

Here's a **misconception trap the teacher keeps fixing**:
Wrong: "a pound of salt for a pound of gold" was a real exchange rate.
Right: this is a **well-known exaggeration**, a myth. The lesson uses it as a figure of
speech — "salt was so scarce people often said it was almost worth its weight in gold."
Never write it as a literal number on the exam.

Also a Rule 0 point (from the carrier's pass): the salt-for-gold profit went to caravan
owners and middlemen; the people who actually hauled the salt, shoulders cut bloody by
the rope, kept almost none of it.`,
        },
      },
    },

    {
      id: 'mansa-musa-hajj',
      termCn: '曼萨·穆萨与 1324 朝觐',
      termEn: 'Mansa Musa and the 1324 Hajj',
      standardRef: ['AP World Unit 2.3 (Mali / Trans-Saharan)', 'AP World Unit 2.6 (cultural consequences)', 'CA HSS 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'mansa-musa-actor',
        nodeIds: ['trade-networks-musa-n1', 'trade-networks-musa-n4', 'trade-networks-musa-n6', 'trade-networks-musa-n7'],
        xiaoweiNote: {
          cn: `整条 Mansa Musa 线都是他。他是马里皇帝（Mansa = 王中之王），虔诚穆斯林。

必背三件事：
**① 1324 朝觐麦加（hajj）**，沿途散金多到**压低了开罗的金价好几年**（真实经济影响，
不是传说）。
**② 1375 年欧洲的 Catalan Atlas（加泰罗尼亚地图）把他画成手举金块的国王**——
当时欧洲人对撒哈拉以南几乎一无所知，却知道那有个富到该被画进地图的国王。
**③ 回国后把廷巴克图（Timbuktu）变成学问之城**：他修的最有名那座叫 **Sankore
（桑科雷）——它既是清真寺，也是一所学校**（别写成"清真寺旁边另起一所学校"，
Sankore 本身就是清真寺-学校合一）。

记忆锚：黄金 → 朝觐 → 散金 → 被画进世界地图 → 把金子换成清真寺和书。
Rule 0：他的财富也建在矿工和被贩卖人口的劳作上——"伟大"和"无名"是同一堆金的两面。`,
          en: `The whole Mansa Musa Lens is him. Emperor of Mali (Mansa = king of kings), devout Muslim.

Three must-knows:
**(1) The 1324 hajj to Mecca**, scattering so much gold he **depressed Cairo's gold price
for years** (a real economic effect, not legend).
**(2) The 1375 European Catalan Atlas drew him as a king holding a gold nugget** — Europeans
then knew almost nothing of sub-Saharan Africa, yet knew there was a king there rich enough
to be drawn onto the map.
**(3) Back home he made Timbuktu a city of learning**: the most famous mosque he built is
called **Sankore — it was at once a mosque and a school** (don't write "a separate school
built next to the mosque"; Sankore itself was the mosque-school).

Memory anchor: gold → hajj → scatter gold → drawn onto the world map → turned gold into
mosques and books. Rule 0: his wealth also rested on miners and trafficked people — his
"greatness" and their "namelessness" are two faces of the same heap of gold.`,
        },
      },
    },

    {
      id: 'ibn-battuta-rihla',
      termCn: '伊本·白图泰与《Rihla》',
      termEn: 'Ibn Battuta and the Rihla',
      standardRef: ['AP World Unit 2.5 (cultural / travelers)', 'AP World — sourcing a travel account', 'CA HSS 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ibn-battuta-mediator',
        nodeIds: ['trade-networks-ibn-n1', 'trade-networks-ibn-n2', 'trade-networks-ibn-n4'],
        xiaoweiNote: {
          cn: `整条 mediator 线就是他。摩洛哥丹吉尔人，1325 年 21 岁出发，本想朝觐一次，
结果走了**近 30 年、约十万公里**，几乎踏遍三张网，最远到中国泉州。

他能走这么远，本身就是一条考点：**伊斯兰是这张网的"商业操作系统"**——
他是受过训练的穆斯林法学家（在德里苏丹国当过法官），走到哪个穆斯林商埠都被当自己人。
**一套共享的信仰、法律、语言（阿拉伯语），让陌生人横穿半个地球处处有"自己人"。**

他的游记《**Rihla**》是后人了解这张网最珍贵的目击记录之一。
AP 还会考一个 sourcing 角度：他用的是一双"受优待的眼睛"看世界——
看见城市的美、港口的繁华，却很难钻进扛盐、爬桅杆那些人的身体里。
**史料的"视角/局限"本身就是考点。**`,
          en: `The whole mediator Lens is him. From Tangier, Morocco; set out in 1325 at 21 meaning to
make the hajj once, and ended up traveling **nearly 30 years and about 100,000 km**, touching
almost all three networks, as far as Quanzhou in China.

That he could travel so far is itself a tested point: **Islam was the "operating system" of
this web** — he was a trained Muslim jurist (a judge in the Delhi Sultanate), treated as one
of their own in every Muslim trading town. **A shared faith, law, and language (Arabic) let a
stranger cross half the earth and find "his own people" everywhere.**

His travel-book, the **Rihla**, is one of the most precious eyewitness records of this web.
AP also tests a sourcing angle: he saw the world through "favored eyes" — he saw the beauty
of cities and the bustle of ports but could hardly climb inside the bodies of those hauling
salt and climbing masts. **A source's "perspective / limits" is itself a test point.**`,
        },
      },
    },

    {
      id: 'technologies-that-built-the-web',
      termCn: '改变网络的三件技术（指南针 / 三角帆 dhow / 骆驼鞍）',
      termEn: 'Technologies That Built the Web (compass / lateen-sail dhow / camel saddle)',
      standardRef: ['AP World Unit 2.1 (technologies of exchange)', 'AP World Unit 2.4', 'CA HSS 7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'mansa-musa-actor',
        nodeIds: ['trade-networks-musa-n8', 'trade-networks-ibn-n7', 'trade-networks-carrier-n3'],
        xiaoweiNote: {
          cn: `Mansa Musa 第 8 节"流动的不只是货"里列了技术，dhow 的细节在 Ibn Battuta 第 7 节
和无名水手第 3 节。老师说**技术不是背景板，是网络能扩张的直接原因**——这是高频考点。

三件必背技术：
**① compass（指南针）**：让海船阴天看不见星星也能认方向；**最早从中国海船传出**。
**② lateen sail（三角帆）+ dhow（海船）**：三角帆让船能逆风"之"字前进，不必死等顺风；
dhow 的船板**用椰壳绳"缝"起来、不用铁钉**。
**③ camel saddle（骆驼鞍）**：让骆驼驮得动重货、被有效驾驭，使穿越撒哈拉成为常规生意。

记忆锚：**没有指南针和三角帆，印度洋远洋跑不起来；没有骆驼鞍，撒哈拉做不成常规生意。**
DBQ 写法：把技术写进因果链（"因为有了 X 技术，所以网络才能 Y"）。`,
          en: `Mansa Musa's Node 8 ("more than goods moved") lists the technologies; the dhow detail is
in Ibn Battuta's Node 7 and the nameless sailor's Node 3. Teacher said **technology isn't a
backdrop, it's the direct cause of the web's expansion** — a high-frequency point.

Three must-know technologies:
**(1) compass**: lets ships find direction even on overcast days; **first spread from Chinese ships**.
**(2) lateen sail + dhow**: the lateen sail lets a ship zigzag against the wind instead of
waiting for a tailwind; the dhow's planks were **"sewn" with coconut rope, not iron-nailed**.
**(3) camel saddle**: lets camels carry heavy loads and be controlled, making Sahara crossings
a routine business.

Memory anchor: **no compass and lateen sail, no Indian Ocean voyaging; no camel saddle, no
routine Sahara trade.** DBQ move: write technology into the causal chain ("because of tech X,
the network could do Y").`,
        },
      },
    },

    {
      id: 'more-than-goods-moved',
      termCn: '流动的不只是货（跨文化交流）',
      termEn: 'More Than Goods Moved (Cross-Cultural Exchange)',
      standardRef: ['AP World Unit 2.5 (cultural consequences of connectivity)', 'AP World Unit 2.6', 'CA HSS 7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'mansa-musa-actor',
        nodeIds: ['trade-networks-musa-n8'],
        xiaoweiNote: {
          cn: `Mansa Musa 第 8 节就是这个核心 AP 论点的"集合卡"。老师说阅卷**反复奖励**这个角度：
**贸易 ≠ 只换东西。** 沿着同一条路线，并排流动的还有——

- **技术**：指南针、三角帆、骆驼鞍。
- **知识**：造纸术、印度-阿拉伯数字。
- **作物**：糖、棉花、柑橘，从一片土地搬到另一片。
- **宗教**：伊斯兰沿三张网，从西非一路扩散到东南亚。
- **人**：自由旅人（如 Ibn Battuta）+ 被锁着当货物买卖的被奴役者。
- **病菌**：黑死病（这条最黑，见黑死病那张卡）。

一句必背：**这张网搬运的，从来不只是黄金和丝绸，而是"整个文明的零件"。**
高分提醒：举证据时**正反都要有**——既有作物宗教的红利，也有奴隶贸易和瘟疫的代价。`,
          en: `Mansa Musa's Node 8 is the "collection card" for this core AP claim. Teacher said scoring
**repeatedly rewards** this angle: **trade is NOT just swapping goods.** Along the same routes,
these flowed side by side —

- **Technology**: the compass, lateen sail, camel saddle.
- **Knowledge**: papermaking, Indian-Arabic numerals.
- **Crops**: sugar, cotton, citrus, moved from one land to another.
- **Faith**: Islam spread along all three networks, from West Africa to Southeast Asia.
- **People**: free travelers (like Ibn Battuta) + enslaved people chained and sold as goods.
- **Germs**: the Black Death (the darkest; see the Black Death card).

One must-memorize line: **this web never carried only gold and silk — it carried "the parts
of whole civilizations."** High-scoring tip: give **both** sides of evidence — the reward of
crops and faith, and the cost of slave trade and plague.`,
        },
      },
    },

    {
      id: 'pax-mongolica',
      termCn: '蒙古和平（Pax Mongolica）',
      termEn: 'Pax Mongolica (the Mongol Peace)',
      standardRef: ['AP World Unit 2.1 (Mongol Empire / Silk Roads)', 'CA HSS 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ibn-battuta-mediator',
        nodeIds: ['trade-networks-ibn-n3'],
        xiaoweiNote: {
          cn: `Ibn Battuta 第 3 节讲丝绸之路时点了一句。意思是：
**13 世纪蒙古帝国横跨欧亚，统一了丝路沿线的治安和驿站，把长途贸易的风险压到历史低点。**
这让陆上丝路进入"黄金期"——商人、传教士、使节（比如 Marco Polo）都沿这条安全走廊往来。

考点关键句：**Pax Mongolica = 政治秩序降低了贸易风险 = 丝路空前繁荣。**
这是 AP 最爱的 causation 链：一个帝国的"和平"如何直接点亮一张贸易网。

记忆锚：当时有句夸张话——"一个少女顶着金子走完丝路也不会被抢"。
进阶：黑死病后蒙古帝国分裂，Pax Mongolica 结束，网络洗牌——这正好是 CCOT 的"变"。`,
          en: `Ibn Battuta's Node 3 names it when describing the Silk Roads. It means:
**in the 1200s the Mongol Empire spanned Eurasia, unified policing and relay stations along
the Silk Roads, and pushed long-distance trade risk to a historic low.** This brought the
overland Silk Roads into a "golden age" — merchants, missionaries, and envoys (like Marco
Polo) traveled this safe corridor.

Key exam sentence: **Pax Mongolica = political order lowered trade risk = the Silk Roads
flourished as never before.** This is AP's favorite causation chain: how one empire's "peace"
directly lit up a trade network.

Memory anchor: the exaggerated saying of the time — "a maiden could carry gold across the
Silk Road and not be robbed." Going deeper: after the Black Death the Mongol Empire split,
the Pax Mongolica ended, and the network reshuffled — that's the "change" in CCOT.`,
        },
      },
    },

    {
      id: 'china-engine',
      termCn: '中国是这张网的引擎之一（市舶司 / 泉州 / 瓷器 / 指南针）',
      termEn: 'China as an Engine of the Web (shibosi / Quanzhou / porcelain / compass)',
      standardRef: ['AP World Unit 2.4 (China & Indian Ocean)', 'AP World Unit 2.1 (technology)', 'CA HSS 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'carrier-on-the-route',
        nodeIds: ['trade-networks-musa-n9', 'trade-networks-ibn-n8', 'trade-networks-carrier-n9'],
        xiaoweiNote: {
          cn: `这是给我们华裔学生特别有感的一节，三个视角都讲到（Mansa Musa 第 9 / Ibn Battuta 第 8 /
无名脚夫第 9）。四条硬证据（不是套话）：

**① 市舶司**：**北宋 1087 年**在泉州设市舶司（管海外贸易、抽税的官署，像古代海关）。
（注意是"北宋"，别只写"宋朝"——AP 和华裔老师会挑。）
**② 泉州**：宋元时世界最大、最繁忙的港口之一，被誉为"东方第一大港"。
**③ 瓷器**：宋代起瓷器是这张网的硬通货，**宋瓷片在远至东非海岸的遗址里被挖出来**（实物证据）。
**④ 指南针**：约 1119 朱彧《萍洲可谈》留下世界最早海船磁针记载，技术从中国海船传向世界。

但 Rule 0 一定要带上（这是一票否决维度）：
**中国是这张网极重要的引擎之一，但不是"唯一的圆心"。** 卡利卡特、基尔瓦、撒马尔罕、
廷巴克图各有各的中心地位——这是一张**多中心**的网。
还有一锤更扎心的（无名脚夫那遍）：历史记住了市舶司、瓷器、郑和，可泉州码头上扛瓷器的人，
和撒哈拉扛盐的人一样，没人记下他们的名字。`,
          en: `This one hits home for us Chinese-heritage students; all three lenses cover it (Mansa Musa
Node 9 / Ibn Battuta Node 8 / nameless carrier Node 9). Four hard pieces of evidence (not
slogans):

**(1) The shibosi**: the **Northern Song in 1087** set up the shibosi at Quanzhou (an office
managing and taxing overseas trade, like an ancient customs house). (Note "Northern Song,"
not just "Song dynasty" — AP and heritage teachers will catch it.)
**(2) Quanzhou**: one of the largest, busiest ports in the world in Song-Yuan times.
**(3) Porcelain**: from the Song it was the hard currency of the web; **Song porcelain shards
have been dug up in sites as far as the East African coast** (physical evidence).
**(4) The compass**: c.1119 Zhu Yu's Pingzhou Table Talks holds the earliest record of ships
using a magnetic needle; the tech spread from Chinese ships to the world.

But always carry the Rule 0 point (a make-or-break dimension):
**China was a hugely important engine of this web, but NOT the "single hub."** Calicut, Kilwa,
Samarkand, and Timbuktu each held their own central place — a **multi-centered** web.
And one more piercing note (from the carrier's pass): history remembered the shibosi, the
porcelain, and Zheng He, but the people hauling porcelain on the Quanzhou docks, just like the
salt-haulers of the Sahara, had no names written down.`,
        },
      },
    },

    {
      id: 'black-death-along-the-network',
      termCn: '黑死病沿网爆发（连通的代价）',
      termEn: 'The Black Death Along the Network (the cost of connection)',
      standardRef: ['AP World Unit 2.7 (consequences of connectivity)', 'AP World Unit 1-2 (disease & trade)', 'CA HSS 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ibn-battuta-mediator',
        nodeIds: ['trade-networks-ibn-n9', 'trade-networks-carrier-n8'],
        xiaoweiNote: {
          cn: `Ibn Battuta 第 9 节和无名脚夫第 8 节，从中间和底层各讲了一遍。这是"连通性"最黑的一课。

骨架：**1347-1351 年，黑死病沿着这张贸易网扑向欧亚非。**
它很可能起于中亚草原的啮齿动物，搭蒙古驿路和商队、再换印度洋的海船——
**走的正是让世界变富的那条路。** 几年内可能夺走欧洲三分之一的人口
（用"可能/约三分之一"，史学估计差异很大，别写死值）。

考点关键句（AP 高频 nuance）：
**让世界变富的网，转眼就成了让世界死亡的网——同样的通道，这次运的不是丝绸黄金，是死亡。**
这是"连通的双刃"最有力的证据：连起来既带繁荣，也带灾难。

Rule 0 底层视角（无名脚夫那遍最戳）：瘟疫来时，城里人能关门能逃，
扛盐、爬桅杆的人不走就没饭吃——**同一场灾难，躲得掉的人和躲不掉的人，从一开始就不一样。**`,
          en: `Ibn Battuta's Node 9 and the nameless carrier's Node 8 tell it from the middle and the
bottom. This is the darkest lesson of "connectivity."

Skeleton: **from 1347-1351 the Black Death rushed across Eurasia and Africa along this trade web.**
It likely began on rodents of the Central Asian steppe, rode the Mongol relay roads and caravans,
then transferred to Indian Ocean ships — **traveling the very road that made the world rich.**
Within a few years it may have taken a third of Europe's people (use "perhaps/about a third";
scholarly estimates vary widely, don't write a fixed number).

Key exam sentence (a high-frequency AP nuance):
**The web that made the world rich became, in a moment, the web that made the world die — the
same channels, this time, carried not silk and gold but death.** This is the strongest evidence
for the "double edge of connection": linking up brings both prosperity and disaster.

Rule 0 bottom view (sharpest in the carrier's pass): when plague came, city people could shut
their doors and flee; salt-haulers and mast-climbers didn't eat if they stopped — **the same
disaster, but those who could hide and those who couldn't were unequal from the start.**`,
        },
      },
    },

    {
      id: 'ccot-and-exploration-precursor',
      termCn: '延续与变迁 + 大航海的前因（1200→1450→1450 后）',
      termEn: 'Continuity & Change + Precursor to the Age of Exploration',
      standardRef: ['AP World Unit 2.7 (continuity & change over time)', 'AP World Unit 3.1 (causes of maritime exploration)', 'CA HSS 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'ibn-battuta-mediator', nodeId: 'trade-networks-ibn-n9', context: 'Ibn Battuta 收尾点出：瘟疫过后网没停只换主角；正是这张利润惊人的旧网让欧洲人想绕开中间商自己接一条入口=大航海的直接前因' },
        ],
      },
      standaloneText: {
        cn: `这是 AP 阅卷最爱、但故事里只点了一句的两个高分考点：**CCOT（延续与变迁）**
和 **"这张网是 1450 后大航海的直接前因"**。我把它单独做成一张卡补上。

**先问 CCOT：1200 到 1450，什么"延续"了？什么"变"了？**
- **延续（continuity）**：季风贸易的逻辑、黄金-盐对换、中介城市的角色、
  伊斯兰作为"商业通用语"——这些一直在跑。
- **变化（change）**：Pax Mongolica 的兴起又衰落、伊斯兰扩散范围扩大、
  1347-1351 黑死病后网络洗牌、技术不断升级。
DBQ 写法：一段写"什么没变"，一段写"什么变了"，别只答一边。

**再问前因：这张网后来怎么了？为什么欧洲人想绕开它？**
黑死病过后，网**没有停**，只是换了主角继续跑（中国进入明代，1405 起郑和七下西洋，
把早已存在的民间海网"国家化"）。关键在于：**正是这张利润惊人的旧大陆贸易网，
让欧洲人眼红得想绕开中间商，自己去接一条通往东方的入口。**
所以 1450 年后葡萄牙、西班牙的远洋探险，本质是想给这张老网"接一条新入口"——
哥伦布"找印度"找到美洲、达·伽马绕过非洲到印度，都是这张网的"续集"。

一句必背：**1200-1450 的这张网，是 1450 后"大航海时代"的直接前因。**
故事连接：Ibn Battuta 第 9 节收尾就埋了这句——网没停、欧洲人想绕开中间商接入口。`,
        en: `These are two of AP scoring's favorite high points that the story only names in one line:
**CCOT (continuity & change over time)** and **"this web was the direct precursor of the
post-1450 Age of Exploration."** I made a separate card to fill them in.

**First, CCOT: from 1200 to 1450, what "continued" and what "changed"?**
- **Continuity**: the logic of monsoon trade, the gold-salt exchange, the role of middleman
  cities, Islam as the "common language of commerce" — these kept running.
- **Change**: the rise and fall of the Pax Mongolica, the wider spread of Islam, the network
  reshuffle after the 1347-1351 Black Death, steady upgrades in technology.
DBQ move: write one paragraph on "what stayed the same" and one on "what changed" — don't
answer only one side.

**Second, the precursor: what happened to the web, and why did Europeans want to bypass it?**
After the Black Death the web **did not stop** — it only changed lead players and ran on
(China entered the Ming; from 1405 Zheng He's seven voyages "state-scaled" the private sea
network that already existed). The key: **it was exactly this old Afro-Eurasian web, with its
astonishing profits, that made Europeans burn to bypass the middlemen and reach for an entry
to the East of their own.** So the post-1450 Portuguese and Spanish voyages were essentially an
attempt to "graft a new entry" onto this old web — Columbus "seeking India" and finding the
Americas, da Gama rounding Africa to India, are the "sequel" to this web.

One must-memorize line: **the 1200-1450 web was the direct precursor of the post-1450 Age of
Exploration.** Story link: Ibn Battuta's Node 9 ending plants this — the web didn't stop, and
Europeans wanted to bypass the middlemen and grab an entry.`,
      },
      xiaoweiNote: {
        cn: `老师说这是把这门课"接到下一单元（Unit 3 大航海）"的桥，AP 几乎必考。
我的记忆口诀：**延续=季风+金盐+中介城+伊斯兰；变化=蒙古和平兴衰+黑死病洗牌+技术升级。**
还有一句对应必背："欧洲人不是凭空想航海——他们是想绕开这张老网的中间商，自己接入口。"`,
        en: `Teacher said this is the bridge that "connects this topic to the next unit (Unit 3,
Exploration)," and AP almost always tests it. My mnemonic: **continuity = monsoon + gold-salt +
middleman cities + Islam; change = rise/fall of the Mongol Peace + Black Death reshuffle + tech
upgrades.** Another must-memorize mapping: "Europeans didn't dream up voyaging from nowhere —
they wanted to bypass this old web's middlemen and grab their own entry."`,
      },
    },

    {
      id: 'diaspora-communities',
      termCn: '侨民社群（diaspora community）',
      termEn: 'Diaspora Communities',
      standardRef: ['AP World Unit 2.5 (diasporic / merchant communities)', 'CA HSS 7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'ibn-battuta-mediator',
        nodeIds: ['trade-networks-ibn-n5'],
        xiaoweiNote: {
          cn: `Ibn Battuta 第 5 节讲季风时带出来的。定义：
**diaspora community（侨民社群）= 商人侨居在异乡港口、扎下根的聚落。**

它为什么会出现？因为季风一年只往两个方向各吹半年，商人错过风季就得在异乡港口
等上半年——**等着等着，陌生人就变成了邻居**：阿拉伯人、波斯人、印度人、华人
在港口扎根、通婚、建清真寺，形成一个个说多种语言、信多种宗教的社群。

考点关键句：**季风（自然）→ 等风（被迫停留）→ 侨民社群（多元港口城市）。**
这是 AP "环境塑造历史"链条上很漂亮的一环，也能挂到"流动的不只是货——人也在流动并定居"。`,
          en: `It comes out of Ibn Battuta's Node 5 on the monsoon. Definition:
**a diaspora community = a settlement of merchants who live and put down roots in a foreign port.**

Why does it appear? Because the monsoon blows in only two directions for half a year each, so a
merchant who misses the wind season must wait half a year in a foreign port — **and waiting,
strangers become neighbors**: Arabs, Persians, Indians, and Chinese settle in the ports, marry,
and build mosques, forming communities of many languages and faiths.

Key exam sentence: **monsoon (nature) → waiting for wind (forced stay) → diaspora communities
(diverse port cities).** A neat link in AP's "environment shapes history" chain, and it also hooks
into "more than goods moved — people moved and settled too."`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（3 道 DBQ 入门题）─────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `这一时期最强大的不是任何一个皇帝，而是"连接"本身。同一张网，把黄金、信仰、
知识送遍旧大陆，也把黑死病几年内送到欧亚非，夺走的人命比任何一场战争都多。

你觉得这张"连起来"的网，应该被记成一件"辉煌的好事"，还是一件"代价惨重的事"？
用至少两条具体证据支持你的判断（红利和代价两边都举一点会更稳）。`,
      en: `The most powerful thing of this era was not any one emperor, but "connection" itself.
The same web sent gold, faith, and knowledge across the Old World, and within a few years sent
the Black Death across Eurasia and Africa, taking more lives than any war.

Should this "connected" web be remembered as "a glorious good thing," or as "a thing of terrible
cost"? Support your judgment with at least two specific pieces of evidence (it's stronger to cite
something from both the reward side and the cost side).`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "辉煌"这边的证据：技术（指南针、三角帆）、作物（糖、棉）、伊斯兰沿三网扩散、
  廷巴克图/泉州/卡利卡特等学问与财富中心。
- "代价"这边的证据：1347-1351 黑死病沿网夺命、跨撒哈拉与印度洋的奴隶贸易、
  红利流向顶端而代价压在无名脚夫水手身上。
高分写法：先承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.
- Evidence for "glorious": technology (compass, lateen sail), crops (sugar, cotton), Islam
  spreading along all three networks, learning-and-wealth centers like Timbuktu/Quanzhou/Calicut.
- Evidence for "cost": the 1347-1351 Black Death spreading along the web, the trans-Saharan and
  Indian Ocean slave trades, the reward flowing to the top while the cost pressed on nameless
  porters and sailors.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['black-death-along-the-network', 'more-than-goods-moved'],
    },
    {
      id: 'q2',
      cn: `曼萨·穆萨、伊本·白图泰的名字和故事都被记下来了，可牵骆驼的脚夫、爬桅杆的水手、
被锁着穿过沙漠当货物卖掉的人，几乎没有一个留下名字——而正是他们用身体撑起了整张网。

如果你是 AP 老师，要出一道题考"当历史只记得网络顶端的人，我们到底失去了什么"，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `Mansa Musa's and Ibn Battuta's names and stories were written down, but the porters who
led camels, the sailors who climbed masts, and the people marched chained across the desert and
sold as goods left almost no names — though it was they who held up the whole web with their bodies.

If you were an AP teacher writing a question on "when history remembers only the people at the top
of the network, what do we actually lose," how would you phrase it? Write your question and explain
what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以从无名脚夫那遍切入——他说："这张网最离不开的人，恰恰是它最不在乎、最不记得的人。"
这句话点出史料的盲区：**最关键的人（认得路、扛得动货的劳力），偏偏最没有声音。**
你的题目可以让学生比较"被记住的人（皇帝、旅人）"和"没被记住的人（脚夫、水手、被奴役者）"——
为什么历史记得前者、漏掉后者？这对我们今天理解这段历史有什么影响？`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through the nameless carrier — he says: "the people this web can least do
without are exactly the people it cares about and remembers least." That names the blind spot of
the sources: **the most essential people (the labor that knew the routes and could carry the goods)
are precisely the ones with no voice.** Your question could have students compare "the remembered
(emperors, travelers)" with "the unremembered (porters, sailors, the enslaved)" — why does history
keep the former and drop the latter, and how does that shape how we understand this era today?`,
      conceptsActivated: ['ibn-battuta-rihla', 'trans-saharan-gold-salt'],
    },
    {
      id: 'q3',
      cn: `这门课说中国是这张网最大的引擎之一——市舶司、泉州、瓷器、指南针；但它同一口气
也说，中国不是"唯一的圆心"，卡利卡特、基尔瓦、撒马尔罕、廷巴克图各有各的中心地位。

你同意"一张网可以有很多个中心，谁也不是唯一的那个"这个看法吗？
当你既为"中国是世界贸易网的心脏之一"骄傲，又承认"它只是多中心之一"，
这两种感觉能同时成立吗？用一条具体证据支持你的看法。`,
      en: `This topic says China was one of the biggest engines of this web — the shibosi, Quanzhou,
porcelain, the compass; but in the same breath it says China was not the "single hub," that Calicut,
Kilwa, Samarkand, and Timbuktu each held their own central place.

Do you agree with the view "a web can have many centers, and no one of them is the only one"? When
you feel both proud that "China was one of the hearts of the world trade web" and willing to admit
"it was only one of many centers," can those two feelings hold at the same time? Support your view
with one specific piece of evidence.`,
      hintCn: `提示：先把"引擎之一"和"唯一圆心"分清楚——这门课的 Rule 0 就是反对"中国中心论"
和"任何一国中心论"。具体证据可以举：**中国这边**——1087 北宋市舶司、泉州东方第一大港、
东非出土宋瓷片、约 1119 最早指南针记载；**别处也是中心**——伊本·白图泰说基尔瓦是
"世界最美城市之一"、卡利卡特是印度洋最忙的换手港、撒马尔罕是丝路明星枢纽。
进阶思考：今天的世界是"有个明确老大"，还是更像这张"多中心"的网？两种感觉能不能并存，
正是这道题想逼你练的"复杂性"。`,
      hintEn: `Hint: first keep "an engine" and "the single hub" straight — this topic's Rule 0 rejects
"China-centrism" and any "one-country-centrism." For specific evidence: **on China's side** — the
1087 Northern Song shibosi, Quanzhou as a top world port, Song porcelain shards dug up in East
Africa, the c.1119 earliest compass record; **other centers too** — Ibn Battuta calling Kilwa "one
of the most beautiful cities," Calicut as the busiest Indian Ocean hand-off port, Samarkand as a
Silk Road star hub. Going deeper: is today's world "one clear top dog," or more like this
"multi-centered" web? Whether the two feelings can coexist is exactly the "complexity" this question
trains.`,
      conceptsActivated: ['china-engine', 'three-networks-comparison'],
    },
  ],
};

export default notebook;
