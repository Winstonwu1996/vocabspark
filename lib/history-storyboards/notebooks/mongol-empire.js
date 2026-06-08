// ─── 同伴笔记本架构 v1 · Mongol Empire ───────────────────────────
// schemaVersion: 1 · notebookVersion: mongol-empire-v1

export var notebook = {
  topicId: 'mongol-empire',
  topicNameCn: '蒙古帝国',
  topicNameEn: 'The Mongol Empire',
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
    cn: `今天老师要我们学蒙古帝国。她先在白板上写了一行字：
"世界历史上最大的连续陆地帝国"——然后画了一张地图，从东边的太平洋一直到西边的波兰。

她给了我们一张人名单子：
成吉思汗（Genghis Khan，真名铁木真 / Temujin）、
忽必烈（Kublai Khan）、
耶律楚材（Yelü Chucai）、
唆鲁禾帖尼别吉（Sorghaghtani Beki）、
马可·波罗（Marco Polo）

还有几个关键词：
Yasa 大法、Yam 驿站系统、Pax Mongolica（蒙古和平）、四大汗国

老师说："读这单元之前，先把这些名字记在脑子里，带着它们去读故事，
看看每个名字在故事里扮演什么角色。"

我把这张纸折了放在笔记本里。说实话——作为华裔，学蒙古帝国有一种奇怪的感觉。
蒙古人征服了中国，杀了很多人，但元朝也是"中国历史"的一部分……这个我还没想清楚。
等读完三个故事再看。`,
    en: `Today my teacher has us study the Mongol Empire. She started by writing on the board:
"The largest contiguous land empire in world history" — then drew a map stretching
from the Pacific Ocean in the east all the way to Poland in the west.

She gave us a list of names:
Genghis Khan (real name Temujin), Kublai Khan, Yelü Chucai, Sorghaghtani Beki, Marco Polo.

Key terms:
Yasa (law code), Yam (postal system), Pax Mongolica, the Four Khanates.

Teacher said: "Before you read this unit, commit these names to memory. Carry them
into the stories and watch what role each one plays."

I folded the sheet and put it in my notebook. Honestly — as a Chinese-American,
studying the Mongol Empire feels kind of strange. The Mongols conquered China,
killed enormous numbers of people, but the Yuan Dynasty is also "part of Chinese history"...
I haven't figured that out yet. I'll see how I feel after the three stories.`,
    keyTerms: [
      { cn: 'Yasa 大法', en: 'Yasa (Mongol law code)' },
      { cn: 'Yam 驿站系统', en: 'Yam (postal relay system)' },
      { cn: '蒙古和平', en: 'Pax Mongolica' },
      { cn: '千户制', en: 'tumen system (decimal military organization)' },
      { cn: '库里台', en: 'kurultai (Mongol assembly / election council)' },
      { cn: '四大汗国', en: 'the Four Khanates' },
    ],
    keyFigures: [
      {
        nameCn: '成吉思汗（铁木真）',
        nameEn: 'Genghis Khan (Temujin)',
        ipa: '/ˈdʒɛŋɡɪs kɑːn/ · /ˈtɛmədʒɪn/',
        roleCn: '蒙古帝国缔造者，统一蒙古诸部，西征欧亚',
        roleEn: 'founder of the Mongol Empire, unified Mongolian tribes, conquered Eurasia',
        mustKnow: true,
        audioKey: 'genghis-khan',
      },
      {
        nameCn: '忽必烈',
        nameEn: 'Kublai Khan',
        ipa: '/ˈkuːblaɪ kɑːn/',
        roleCn: '成吉思汗之孙，元朝建立者，征服南宋',
        roleEn: 'grandson of Genghis Khan, founded Yuan Dynasty, conquered Southern Song',
        mustKnow: true,
        audioKey: 'kublai-khan',
      },
      {
        nameCn: '马可·波罗',
        nameEn: 'Marco Polo',
        ipa: '/ˈmɑːrkoʊ ˈpoʊloʊ/',
        roleCn: '威尼斯商人，蒙古帝国旅行者，将东方记录带回欧洲',
        roleEn: 'Venetian merchant, traveled through the Mongol Empire, recorded the East for Europe',
        mustKnow: true,
        audioKey: 'marco-polo',
      },
      {
        nameCn: '耶律楚材',
        nameEn: 'Yelü Chucai',
        ipa: '/jɛˈlyː tʃuːˈtsaɪ/',
        roleCn: '契丹族儒家官员，成吉思汗谋士，劝阻屠城',
        roleEn: 'Khitan Confucian official, advisor to Genghis Khan, argued against mass slaughter',
        mustKnow: true,
        audioKey: 'yelü-chucai',
      },
      {
        nameCn: '唆鲁禾帖尼别吉',
        nameEn: 'Sorghaghtani Beki',
        ipa: '/sɔːrˈɡɑːxtɑːni ˈbeɪki/',
        roleCn: '克烈部基督徒公主，忽必烈之母，蒙古帝国幕后政治家',
        roleEn: 'Keraite Christian princess, mother of Kublai Khan, behind-the-scenes political architect',
        mustKnow: true,
        audioKey: 'sorghaghtani-beki',
      },
      {
        nameCn: '蒙古高原',
        nameEn: 'Mongolian Steppe',
        ipa: '/mɒŋˈɡoʊliən stɛp/',
        roleCn: '蒙古帝国发源地，欧亚大陆中部草原地带',
        roleEn: 'birthplace of the Mongol Empire, central Eurasian grassland belt',
        mustKnow: true,
        audioKey: 'mongolian-steppe',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：成吉思汗 & 蒙古统一（storyAnchor·covered）──────
    {
      id: 'genghis-unification',
      termCn: '成吉思汗 / 蒙古统一（1206）',
      termEn: 'Genghis Khan / Unification of Mongolia (1206)',
      defCn: '铁木真把分散的蒙古各部落打成一个帝国，1206 年被全体部落首领推举为"成吉思汗"，意思是全球的统治者。他用一套叫 Yasa 的法律统一管理所有人。',
      defEn: 'Temujin united the scattered Mongol tribes into one empire. In 1206, all the tribal leaders gathered and elected him Genghis Khan — meaning "ruler of all." He used a law code called the Yasa to govern everyone under one set of rules.',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'genghis',
        nodeIds: ['genghis-N1', 'genghis-N3', 'genghis-N5'],
        xiaoweiNote: {
          cn: `成吉思汗那条故事线开头就讲到了——铁木真（Temujin）出生在动荡的蒙古草原。他父亲被敌人毒死，他少年时还被敌族掳走当过奴隶。他不是"天生的王"，是一步一步用战争和政治联盟爬上来的。

**1206 年库里台大会**——所有部落首领聚集在一起，正式选他为"成吉思汗"（意思是"全球的统治者"或"坚强的可汗"）。

Yasa 大法是他建国的核心工具，分三块：
① 宗教宽容：不管你信伊斯兰、佛教、基督教还是萨满，都可以继续信，只要不挑战蒙古权威。
② 军功提升制：打仗打得好就能升，不看出身、不看血统。这和当时欧洲贵族制、中国世袭制都很不同。
③ 千户制（tumen，音 TOO-men）：军队按 10、100、1000 人编制，打散旧的部落关系，让士兵直接效忠成吉思汗本人。

考点记住这句话：**Yasa 是蒙古帝国的法律基础，其中宗教宽容条款是蒙古帝国能管理多元族群的重要原因之一。**`,
          en: `The Genghis Khan story thread opens right here — Temujin was born on a turbulent Mongolian steppe. His father was poisoned by enemies, and as a teenager he was captured and enslaved by a rival clan. He wasn't a "born king" — he climbed his way up through war and political alliance.

**The 1206 kurultai** — all tribal chiefs assembled and formally elected him Genghis Khan ("ruler of all," or "strong/fierce khan").

The Yasa was his core state-building tool. It had three key parts:
① Religious tolerance: whether you were Muslim, Buddhist, Christian, or Shamanist — you could keep practicing, as long as you didn't challenge Mongol authority.
② Merit over birth: battlefield performance earned promotion, regardless of family background — very different from European feudal aristocracy or Chinese hereditary systems.
③ Tumen (decimal) system: armies organized in units of 10, 100, and 1,000 — breaking up old tribal loyalties and building direct allegiance to Genghis Khan personally.

Key exam sentence: **The Yasa was the legal foundation of the Mongol Empire; its religious tolerance clause is a major reason the empire could govern diverse populations.**`,
        },
      },
    },

    // ── 卡 2：Yam 驿站系统 & Pax Mongolica（storyAnchor·covered）
    {
      id: 'pax-mongolica-yam',
      termCn: 'Pax Mongolica / Yam 驿站系统',
      termEn: 'Pax Mongolica / Yam Postal Relay System',
      defCn: 'Pax Mongolica（拉丁语，意思是"蒙古治下的和平"）是指大约 1250 到 1350 年，蒙古帝国稳定下来后，商人和使者可以相对安全地穿越欧亚大陆的这段时期。Yam 是帝国专门修建的驿站网络，让消息和货物快速传递。',
      defEn: 'Pax Mongolica (Latin for "Mongol Peace") refers to roughly 1250–1350, the period after the Mongol Empire stabilized when merchants and messengers could cross Eurasia with relative safety. The Yam was the empire\'s relay station network that made fast communication and trade possible.',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'genghis',
        nodeIds: ['genghis-N8', 'genghis-N10'],
        xiaoweiNote: {
          cn: `成吉思汗故事线讲到他"遗产"那部分时提到了——**Yam 驿站系统**是他一手建起来的。

Yam（意思是"驿站"）怎么运作：
① 每隔约 25 英里设一个驿站，配备换乘马匹、食物、住宿。
② 驿使带着一块官方牌证（paiza，就是通行证），全程免费换马、免费吃住。
③ 帝国内的消息、军令、商队都可以高速移动。
④ 这套系统在那个时代的欧洲和西亚根本不存在。

**Pax Mongolica**（蒙古和平，约 1250-1350）是什么：
① 帝国稳定后大约一百年的"相对和平期"。
② 丝绸之路重新畅通——商人、外交官、传教士可以相对安全地横穿欧亚。
③ 马可·波罗就是在这段时期旅行的（1271-1295）。
④ 但"和平"不代表真正和平——对被征服的地区来说，这是占领，不是和平。

考点记住这句话：**Pax Mongolica 是蒙古帝国对全球贸易网络最重要的贡献，也是欧亚大陆文化交流和疾病传播（包括黑死病）的关键时期。**`,
          en: `The "legacy" section of the Genghis Khan story thread covers this — **the Yam relay system** was built by Genghis Khan himself.

How the Yam worked:
① Stations roughly every 25 miles, stocked with fresh horses, food, and lodging.
② Official messengers carried a paiza (an authorization plaque) — free horse swaps and free room and board throughout the empire.
③ Military orders, official news, and merchant caravans could move at high speed across the empire.
④ Nothing comparable existed in contemporary Europe or western Asia.

**Pax Mongolica** (Mongol Peace, roughly 1250–1350):
① About a century of relative stability after the empire consolidated.
② The Silk Road reopened — merchants, diplomats, and missionaries could cross Eurasia with relative safety.
③ Marco Polo traveled during exactly this period (1271–1295).
④ But "peace" didn't mean actually peaceful — for conquered populations, this was occupation, not peace.

Key exam sentence: **Pax Mongolica is the Mongol Empire's most important contribution to global trade networks — and the pivotal period for Eurasian cultural exchange and disease transmission, including the Black Death.**`,
        },
      },
    },

    // ── 卡 3：文化保全 vs 破坏（storyAnchor·covered，耶律楚材）
    {
      id: 'cultural-preservation-destruction',
      termCn: '耶律楚材 / 文化保全 vs 破坏',
      termEn: 'Yelü Chucai / Cultural Preservation vs Destruction',
      defCn: '耶律楚材（1190-1244）是契丹族儒家学者，被成吉思汗征召为顾问。他在蒙古征服期间劝阻了把华北农田全部变成牧场的计划，保住了数百万农民的生命和大量文化机构。',
      defEn: 'Yelü Chucai (1190–1244) was a Khitan Confucian scholar recruited by Genghis Khan as an advisor. During the Mongol conquests, he successfully argued against converting all of North China\'s farmland into pasture, saving the lives of millions of farmers and preserving many cultural institutions.',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'yelü-chucai',
        nodeIds: ['chucai-N3', 'chucai-N6', 'chucai-N9'],
        xiaoweiNote: {
          cn: `耶律楚材那条故事线全程讲他——耶律楚材（Yelü Chucai，1190-1244），契丹族人，读儒家经典长大，被成吉思汗征召为谋士。

他夹在两个世界之间：
- 蒙古那边的想法是："打下来的城市，杀光人口，清空土地，变成牧场。"
- 儒家那边的想法是："城市里的文化机构、农业体系、知识分子，值得保留。"

他最著名的那次劝阻是什么：成吉思汗的后代想把华北平原的农田全部变成牧场。这样就要把农民全部迁走或者杀掉。他劝阻了。他的论据是："留着农民种地，税收比游牧更稳定。"这个算盘打赢了帝国的逻辑。

这是 AP 论文题的经典材料。它告诉我们：蒙古帝国的"破坏 vs 保全"不是非此即彼的，中间有人在调解，而那个调解的人往往来自被征服的文明内部。

**注意**：耶律楚材保全了文化机构，但他同时也是在帮助蒙古人更有效地统治。他的"调解"是在帝国框架内做的，不是反对帝国。`,
          en: `The Yelü Chucai story thread is entirely about him — Yelü Chucai (1190–1244), ethnically Khitan, raised on Confucian classics, conscripted by Genghis Khan as an advisor.

He was caught between two worlds:
- The Mongol side said: "Conquered cities should be depopulated, land cleared for pasture."
- The Confucian side said: "Cities' cultural institutions, agricultural systems, and scholars are worth preserving."

His most famous argument: Genghis Khan's successors planned to convert all of North China's farmland into pasture — which meant displacing or killing the farming population. He argued against it. His logic: "Keeping farmers to work the land produces more stable tax revenue than a nomadic economy." The math beat the empire's instinct.

This is classic AP essay material. It shows that the Mongol Empire's "destruction vs preservation" wasn't a simple either/or — there were people mediating in between, and those mediators often came from within the conquered civilization itself.

**One thing to keep in mind**: Yelü Chucai preserved cultural institutions, but he was also helping the Mongols rule more effectively. His "mediation" operated within the imperial framework — it wasn't resistance against the empire.`,
        },
      },
    },

    // ── 卡 4：女性政治权力（storyAnchor·covered，唆鲁禾帖尼别吉）
    {
      id: 'women-political-power',
      termCn: '唆鲁禾帖尼别吉 / 蒙古女性政治权力',
      termEn: 'Sorghaghtani Beki / Women\'s Political Power in the Mongol Empire',
      defCn: '唆鲁禾帖尼别吉是克烈部基督徒公主，嫁给成吉思汗的儿子拖雷。丈夫去世后，她独自把四个儿子培养成蒙古帝国的顶级统治者。她没有争夺大汗之位，但通过操控儿子们的教育和联姻，成为帝国幕后最有影响力的政治家之一。',
      defEn: 'Sorghaghtani Beki was a Keraite Christian princess who married Tolui, son of Genghis Khan. After her husband died, she single-handedly raised four sons who became top rulers of the Mongol Empire. Without competing for the throne herself, she shaped the empire through her sons\' education and marriage alliances, making her one of the most influential political figures behind the scenes.',
      standardRef: ['AP World KC-2.2'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'sorghaghtani',
        nodeIds: ['sorghaghtani-N2', 'sorghaghtani-N5', 'sorghaghtani-N8', 'sorghaghtani-N11'],
        xiaoweiNote: {
          cn: `唆鲁禾帖尼别吉那条故事线全程讲她。她是谁：克烈部（Keraite）的基督徒（景教 / Nestorian Christian）公主，嫁给成吉思汗的儿子拖雷（Tolui）。

拖雷去世后，她独自抚养四个儿子：
蒙哥（第四任大汗）、忽必烈（元朝建立者）、旭烈兀（伊儿汗国建立者）、阿里不哥（忽必烈的竞争对手）。

她怎么做到的：
① 她不争夺大汗之位，但精心安排每个儿子的教育、联姻和政治位置。
② 她让儿子们分别学习不同文化——伊斯兰、佛教、汉文化——为将来管辖不同地区做准备。

为什么她是 AP 必考人物：AP 世界历史要求学生分析"蒙古帝国内女性如何通过非正式途径影响政治"。她是这个问题最典型的案例。

考点记住这句话：**唆鲁禾帖尼别吉是蒙古帝国继承结构中的关键人物，她的策略确保了她的儿子们统治了蒙古帝国分裂后的三个主要汗国。**`,
          en: `The Sorghaghtani Beki story thread is entirely about her. Who she was: a Keraite princess who practiced Nestorian Christianity, married to Tolui, son of Genghis Khan.

After Tolui's death, she raised four sons on her own:
Möngke (4th Great Khan), Kublai (founder of the Yuan Dynasty), Hulagu (founder of the Ilkhanate), and Ariq Böke (Kublai's rival).

How she did it:
① She didn't compete for the throne of Great Khan directly, but carefully managed each son's education, marriage alliances, and political positioning.
② She had each son educated in a different culture — Islamic, Buddhist, Chinese/Confucian — to prepare them for the different regions they would eventually govern.

Why she's an AP must-know: AP World History requires students to analyze how women in the Mongol Empire exercised political influence through informal channels. She is the most prominent example of this.

Key exam sentence: **Sorghaghtani Beki was the pivotal figure in the Mongol Empire's succession structure; her strategy ensured that her sons came to rule three of the major successor khanates after the empire fragmented.**`,
        },
      },
    },

    // ── 卡 5：西征 & 蒙古的破坏（storyAnchor·covered）──────
    {
      id: 'mongol-conquests-violence',
      termCn: '蒙古西征 & 暴力征服',
      termEn: 'Mongol Western Campaigns & Violent Conquest',
      defCn: '1219 年至 1221 年，成吉思汗亲自率军征服中亚的花剌子模帝国，沿途多座城市被摧毁，估计死亡人口以百万计。蒙古军队用"降者免死、抵抗必屠"的策略，让许多城市不战而降。',
      defEn: 'From 1219 to 1221, Genghis Khan personally led his army against the Khwarazmian Empire in Central Asia. Several cities were destroyed along the way and estimated casualties ran into the millions. Mongol armies used a strategy of "surrender and survive, resist and be destroyed" — many cities chose not to fight.',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'genghis',
        nodeIds: ['genghis-N6', 'genghis-N7', 'genghis-N9'],
        xiaoweiNote: {
          cn: `成吉思汗故事线讲得很清楚——1219 到 1221 年，成吉思汗亲征中亚（花剌子模帝国）。Bukhara（布哈拉）、Samarkand（撒马尔罕）被洗劫，估计死亡人口以百万计。

读这段的时候我感觉很不舒服——这是屠杀，不是"战争中难以避免的伤亡"。但老师说 AP 题不会让我们去判断好坏，而是让我们分析："**暴力作为统治工具——为什么有效？**"

蒙古军队为什么这么能打，有三个原因：
① 骑射兵机动性极强，不需要固定补给线。
② 心理战术："降就放过，抵抗就屠城"——很多城市选择不战而降。
③ 吸收被征服民族的工程师和围城专家，比如中国的攻城机器操作员。

1227 年，成吉思汗在征战途中去世（具体原因史书记录不一）。帝国此后由他的后代继续扩张。

最后注意一点：蒙古征服杀死了大量人口，但也打通了丝绸之路，让思想、技术、疾病（包括黑死病）可以横跨欧亚流动。破坏和连通是**同一枚硬币的两面**。`,
          en: `The Genghis Khan story thread is explicit on this — from 1219 to 1221, Genghis Khan personally led the campaign into Central Asia (the Khwarazmian Empire). Bukhara and Samarkand were sacked, with estimated casualties in the millions.

Reading this was uncomfortable — it's massacre, not "unavoidable wartime casualties." But teacher says AP won't ask us to judge good or bad; instead it asks: "**Violence as a governing tool — why was it effective?**"

Three reasons Mongol armies were so dominant:
① Highly mobile cavalry archers who didn't need fixed supply lines.
② Psychological warfare: "surrender and be spared, resist and be slaughtered" — many cities chose not to fight.
③ They absorbed engineers and siege specialists from conquered peoples, such as Chinese catapult operators.

In 1227, Genghis Khan died while on campaign (historical sources disagree on the exact cause). The empire continued expanding under his successors.

One thing to keep in mind: Mongol conquest killed enormous numbers of people, but it also reopened the Silk Road, letting ideas, technologies, and disease (including the Black Death) flow across Eurasia. Destruction and connection are **two sides of the same coin**.`,
        },
      },
    },

    // ── 卡 6：四大汗国 & 帝国分裂（standaloneText）────────────
    {
      id: 'four-khanates-fragmentation',
      termCn: '四大汗国 & 帝国分裂',
      termEn: 'The Four Khanates & Fragmentation of the Empire',
      defCn: '成吉思汗死后，蒙古帝国太大，没有人能长期统一管辖。到 1260 年代，帝国正式分裂为四个独立的王国，叫"四大汗国"。每个汗国管辖一片地区，后来各自吸收了当地文化。',
      defEn: 'After Genghis Khan died, the Mongol Empire was too large for any one ruler to hold together. By the 1260s it formally split into four independent kingdoms called the Four Khanates. Each ruled a different region and eventually absorbed the local culture.',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'sorghaghtani', nodeId: 'sorghaghtani-N11', context: '唆鲁禾帖尼别吉的儿子们分别建立或继承不同汗国' },
        ],
      },
      standaloneText: {
        cn: `成吉思汗统一蒙古，他的征服事业由儿孙继续——但帝国太大了，没有人能长期统一管辖。

成吉思汗死后（1227），蒙古大汗之位传了几代。到 1260 年代，帝国正式分裂为四大汗国：

① **元朝（大汗汗国）**——忽必烈（Kublai Khan）建立，统治中国，都城大都（今北京）。1271 年建国，1279 年灭南宋，统一中国。四个汗国里最繁荣的一个。

② **察合台汗国（Chagatai Khanate）**——中亚，大约今天的哈萨克斯坦和乌兹别克斯坦一带。保留最多游牧传统，伊斯兰化最深。

③ **金帐汗国（Golden Horde）**——俄罗斯草原，统治俄罗斯诸公国两百余年（约 1240-1480），对俄罗斯历史影响极深。"Tsar"这个词就来自这段历史。

④ **伊儿汗国（Ilkhanate）**——波斯、伊拉克一带，由唆鲁禾帖尼别吉之子旭烈兀建立。1258 年攻陷巴格达（阿拔斯王朝首都，伊斯兰黄金时代的中心），史称"蒙古灭阿拉伯"。

为什么会分裂，有两个原因：
① 蒙古传位靠库里台选举，不靠长子继承，结果继承争议不断。
② 各汗国适应当地文化——波斯的伊斯兰化、中国的汉化、俄罗斯的本土化——各走各的方向。

考点记住这句话：**蒙古帝国的四大汗国在文化上走向分化——伊斯兰化、汉化、东正教化——但都保留了蒙古人的政治统治框架。**`,
        en: `Genghis Khan unified the Mongols, and his children and grandchildren continued his campaigns — but the empire was too large for any one ruler to govern indefinitely.

After Genghis Khan died (1227), the title of Great Khan passed through several generations. By the 1260s, the empire formally fractured into four successor khanates:

① **Yuan Dynasty (Great Khanate)** — founded by Kublai Khan, ruling China, capital at Dadu (modern Beijing). Established 1271, conquered the Southern Song in 1279, unifying China. The most prosperous of the four.

② **Chagatai Khanate** — Central Asia, roughly modern Kazakhstan and Uzbekistan. Retained the most nomadic traditions and underwent the deepest Islamization.

③ **Golden Horde** — the Russian steppe, ruling the Russian principalities for over two centuries (roughly 1240–1480), profoundly shaping Russian history. The word "Tsar" traces partly to this period.

④ **Ilkhanate** — Persia and Iraq, founded by Hulagu, son of Sorghaghtani Beki. In 1258 it sacked Baghdad (capital of the Abbasid Caliphate, center of the Islamic Golden Age) — often called the event that ended the Islamic Golden Age.

Two reasons the empire split:
① Mongol succession relied on kurultai election, not eldest-son inheritance — inheritance disputes were constant.
② Each khanate adapted to local culture: Islamization in Persia, Sinicization in China, integration with Orthodoxy in Russia — each evolved in its own direction.

Key exam sentence: **The Mongol Empire's four successor khanates diverged culturally — Islamization, Sinicization, Eastern Orthodox influence — but all retained the Mongol political governance framework.**`,
      },
      xiaoweiNote: {
        cn: `四大汗国考试几乎必考。我的记忆口诀：
元（东·中国）→ 察合台（中·中亚）→ 金帐（西北·俄罗斯）→ 伊儿（西南·波斯）
——从东到西排一遍，地图上找四个区域。

还有一个必背细节：1258 年伊儿汗国攻陷巴格达、杀死最后一任阿拔斯哈里发——这是伊斯兰黄金时代的终点，AP 常考。`,
        en: `The Four Khanates are almost guaranteed to appear on the test. My memory trick:
Yuan (East, China) → Chagatai (Center, Central Asia) → Golden Horde (Northwest, Russia) → Ilkhanate (Southwest, Persia)
— place them east to west on a mental map.

One detail I have to memorize: in 1258, the Ilkhanate sacked Baghdad and killed the last Abbasid Caliph — this is the endpoint of the Islamic Golden Age, and it shows up on AP tests a lot.`,
      },
    },

    // ── 卡 7：忽必烈 & 元朝 & 马可·波罗（standaloneText）──────
    {
      id: 'kublai-yuan-marco-polo',
      termCn: '忽必烈 / 元朝 / 马可·波罗',
      termEn: 'Kublai Khan / Yuan Dynasty / Marco Polo',
      defCn: '忽必烈（1215-1294）是成吉思汗的孙子，1271 年建立元朝，1279 年消灭南宋，成为第一个统治整个中国的非汉族皇帝。马可·波罗（1254-1324）是意大利威尼斯的商人，在元朝生活了约 17 年，把他的见闻写成游记，让欧洲人第一次读到中国的详细描述。',
      defEn: 'Kublai Khan (1215–1294) was the grandson of Genghis Khan. He founded the Yuan Dynasty in 1271, conquered the Southern Song in 1279, and became the first non-Han emperor to rule all of China. Marco Polo (1254–1324) was a merchant from Venice, Italy, who lived in the Yuan court for roughly 17 years and dictated a travel account that gave Europeans their first detailed look at China.',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'sorghaghtani', nodeId: 'sorghaghtani-N8', context: '唆鲁禾帖尼别吉让忽必烈从小接受儒家教育，为日后治理中国做准备' },
        ],
      },
      standaloneText: {
        cn: `忽必烈（Kublai Khan，1215-1294），成吉思汗之孙、唆鲁禾帖尼别吉之子。他是蒙古帝国史上汉化最深的大汗。

母亲让他从小学汉语和儒家思想。他后来把首都从蒙古高原迁到大都（今北京），采用汉式礼仪和官僚制度——用中国人的方式来治理中国土地。

1271 年他宣布国号"元"（Yuan），取《易经》"大哉乾元"之意。1279 年消灭南宋（South Song Dynasty），成为第一个统治整个中国的非汉族王朝皇帝。蒙古人在中国的统治被称为"元朝"（1271-1368）。

马可·波罗（Marco Polo，1254-1324），意大利威尼斯（Venice）商人。他 1271 年从威尼斯出发，沿丝绸之路旅行，约 1275 年抵达忽必烈的大都宫廷，在元朝生活和服务了约 17 年，1295 年返回威尼斯。他口述的旅行记录《马可·波罗游记》（Il Milione）成为欧洲人了解东亚的第一手资料。

马可·波罗在欧洲为什么重要：
① 他描述了中国的纸币、煤炭、大城市、丝绸、香料——这些在欧洲都是陌生的。
② 他的记录激励了后来的探险家，包括哥伦布（Columbus 出发前读过《游记》）。
③ 但他的记录里有很多夸大，有历史学家质疑他是否真的到过他声称的所有地方。

考点记住这句话：**马可·波罗的《游记》是 Pax Mongolica 时代欧亚联通的标志性文献，也是欧洲"东方想象"的重要来源。**`,
        en: `Kublai Khan (1215–1294) was the grandson of Genghis Khan and the son of Sorghaghtani Beki. He was the most Sinicized Great Khan in Mongol history.

His mother made sure he learned Chinese and Confucian thought from childhood. He later moved the capital from the Mongolian steppe to Dadu (modern Beijing) and adopted Chinese court ritual and bureaucratic systems — governing China using Chinese methods.

In 1271 he declared the dynasty name "Yuan" (drawn from the I Ching phrase "great is the primal force of Qian"). In 1279 he conquered the Southern Song Dynasty, becoming the first non-Han emperor to rule all of China. Mongol rule in China is called the Yuan Dynasty (1271–1368).

Marco Polo (1254–1324) was a merchant from Venice, Italy. He left Venice in 1271, traveled the Silk Road, reached Kublai Khan's court at Dadu around 1275, served in the Yuan court for roughly 17 years, and returned to Venice in 1295. His dictated travel account, The Travels of Marco Polo (Il Milione), became Europe's primary firsthand source on East Asia.

Why Marco Polo matters to European history:
① He described China's paper money, coal, enormous cities, silk, and spices — all unfamiliar or barely known in Europe.
② His accounts inspired later explorers, including Columbus (who had read Marco Polo before setting sail).
③ His account contains exaggerations, though, and historians debate whether he actually visited every place he claimed.

Key exam sentence: **Marco Polo's Travels is the defining document of Eurasian connectivity in the Pax Mongolica era, and a foundational source for Europe's imagining of the East.**`,
      },
      xiaoweiNote: {
        cn: `这张卡我要特别记两件事：
① 忽必烈 = 成吉思汗的孙子（不是儿子），是唆鲁禾帖尼别吉的儿子——三代关系必须清楚。
② 马可·波罗在元朝工作了 17 年——哥伦布出发前读过他的书。

老师说 7 年级历史"马可·波罗"选择题出现率很高，因为它把东西方连通这件事变得具体了。`,
        en: `Two things I especially need to remember from this card:
① Kublai Khan is Genghis Khan's grandson (not son), and Sorghaghtani Beki's son — the three-generation relationship has to be clear.
② Marco Polo served in the Yuan court for 17 years — Columbus had read his book before sailing.

Teacher said Marco Polo shows up very often in Grade 7 multiple choice because he makes East-West connectivity feel real and concrete.`,
      },
    },

    // ── 卡 8：蒙古帝国的多重遗产（storyAnchor·covered，综合）
    {
      id: 'mongol-legacy-complexity',
      termCn: '蒙古帝国的多重遗产',
      termEn: 'The Complex Legacy of the Mongol Empire',
      defCn: '蒙古帝国留下的影响是矛盾的——既有大规模屠杀和城市毁灭，也有让贸易和文化交流重新繁荣的 Pax Mongolica，还有带来黑死病的疾病传播。AP 历史考试经常用它来练习"多角度评价历史事件"。',
      defEn: 'The Mongol Empire left behind contradictory effects — massive killing and urban destruction on one side, and the Pax Mongolica that revived trade and cultural exchange on the other, plus the spread of the Black Death. AP history exams frequently use it to practice evaluating a historical event from multiple angles.',
      standardRef: ['AP World KC-2.2', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['genghis-N10', 'chucai-N9', 'sorghaghtani-N11'],
        xiaoweiNote: {
          cn: `读完三条故事线之后，我脑子里有一堆互相矛盾的东西：

成吉思汗屠城 vs 成吉思汗建 Yam 驿站——是同一个人。
耶律楚材劝阻杀农民成功了——但他同时也是在帮蒙古人更有效地统治。
唆鲁禾帖尼别吉是基督徒——她的儿子旭烈兀却建了一个攻陷巴格达（伊斯兰世界中心）的汗国。

这就是 AP 说的"多重历史影响"（multiple historical effects）。

从四个角度看蒙古帝国的遗产：
① **破坏视角**：屠杀、城市毁灭、农业区人口锐减——中亚和华北都有大规模人口减少。
② **建设视角**：Pax Mongolica、Yam 驿站、贸易路线重开、文化交流。
③ **疾病视角**：Pax Mongolica 让黑死病（bubonic plague）从中亚传到欧洲，1347-1351 年杀死欧洲约 1/3 人口——这是"连通"的代价。
④ **政治视角**：蒙古人重新划定了欧亚的政治地图，今天很多国家的边界都与蒙古时代的汗国疆域有间接关联。

AP 论文题的经典提问是这样的：
"评估蒙古征服对 13-14 世纪欧亚大陆的影响——哪个影响最重要？用具体证据支持你的论点。"

最后作为华裔来看这段历史——蒙古帝国征服了中国，但元朝也是中国历史的一部分。"征服者同时也是中国皇帝"这种身份重叠，是中国历史里很特别的现象。忽必烈用汉文化治理中国，但他从没忘记自己是成吉思汗的孙子。`,
          en: `After reading all three story threads, my head is full of contradictions:

Genghis Khan who massacred cities vs Genghis Khan who built the Yam system — the same person.
Yelü Chucai argued against killing farmers and won — but he was also helping the Mongols rule more efficiently.
Sorghaghtani Beki was a Christian — and her son Hulagu built the khanate that sacked Baghdad, the center of the Islamic world.

This is what AP calls "multiple historical effects."

Four angles on the Mongol Empire's legacy:
① **Destruction angle**: massacre, urban devastation, sharp population decline in agricultural regions — both Central Asia and North China saw large-scale depopulation.
② **Construction angle**: Pax Mongolica, Yam postal system, reopened trade routes, cultural exchange.
③ **Disease angle**: Pax Mongolica allowed the Black Death (bubonic plague) to travel from Central Asia to Europe; the 1347–1351 outbreak killed roughly a third of Europe's population — the price of connectivity.
④ **Political angle**: the Mongols redrew Eurasia's political map; many modern national borders are indirectly shaped by the khanate boundaries of the Mongol era.

The classic AP essay question looks like this:
"Evaluate the impact of Mongol conquest on Eurasia in the 13th–14th centuries — which impact was most significant? Support your argument with specific evidence."

Looking at this history as a Chinese-American — the Mongol Empire conquered China, but the Yuan Dynasty is also part of Chinese history. The overlap of "conqueror" and "Chinese emperor" in the same person is one of the most unusual features of Chinese history. Kublai Khan governed China through Chinese culture, but he never forgot he was Genghis Khan's grandson.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1-religious-tolerance-or-pragmatism',
      cn: `成吉思汗的 Yasa 大法规定宗教宽容——不管你信伊斯兰教、佛教、基督教还是儒教，都可以在帝国内自由信仰。

你觉得这是"真正的宗教宽容"，还是"政治实用主义"？这两者有区别吗？

想一想：如果宽容的目的是"减少被征服地区的抵抗、更容易管理"，这算不算真正的宽容？宽容的动机重要吗，还是只看结果？`,
      en: `Genghis Khan's Yasa code mandated religious tolerance — whether you were Muslim, Buddhist, Christian, or Confucian, you could practice freely within the empire.

Do you think this was "genuine religious tolerance" or "political pragmatism"? Is there a meaningful difference?

Think about it: if the purpose of tolerance is "reduce resistance from conquered populations and make governance easier," does that count as real tolerance? Does the motivation for tolerance matter, or only the outcome?`,
      hintCn: `两派历史学家的想法：
① 一派说：宽容的动机不影响宽容的效果——被宽容的人获得了保护，不管可汗因为什么理由给的。
② 另一派说：动机很重要，因为"实用主义的宽容"在不再实用的时候就会被撤销。伊儿汗国后来皈依了伊斯兰教，对其他宗教的待遇就变了。

进一步想：今天政府推行多元文化政策，是"真正的价值观"还是"实用主义"？这个区别对被保护的群体重要吗？`,
      hintEn: `Two schools of historians disagree here:
① One side says: the motivation for tolerance doesn't change its effect — the tolerated population received protection regardless of the khan's reason.
② The other says: motivation matters, because "pragmatic tolerance" gets withdrawn when it stops being useful. The Ilkhanate converted to Islam and treated other religions differently afterward.

Going deeper: when modern governments enact multiculturalism policies, is that "genuine values" or "pragmatism"? Does the distinction matter to the groups being protected?`,
      conceptsActivated: ['genghis-unification', 'mongol-legacy-complexity'],
    },

    {
      id: 'q2-power-and-intellect',
      cn: `耶律楚材是一个书生——儒家学者，不会打仗。成吉思汗是靠武力征服世界的人。

但成吉思汗听了耶律楚材的建议，没有把华北的农田全部变成牧场，留下了数百万农民的性命。

一个靠暴力征服世界的人，为什么会听一个书生的话？你觉得在这件事上，谁更有权力——成吉思汗，还是耶律楚材？`,
      en: `Yelü Chucai was a scholar — a Confucian official who couldn't fight. Genghis Khan was a man who conquered the world by force.

Yet Genghis Khan listened to Yelü Chucai and did not convert North China's farmland into pasture, saving the lives of millions of farmers.

Why would a man who conquered the world by violence listen to a scholar? In this moment, who do you think had more power — Genghis Khan or Yelü Chucai?`,
      hintCn: `两个角度都可以想：
① 耶律楚材的权力来自"知识"——他知道税收怎么算，知道农业比游牧产出更多，知道帝国需要稳定的财政基础。成吉思汗需要这种知识，所以知识就有了权力。
② 另一个角度：成吉思汗的权力从来没有被真正挑战——他可以随时忽视耶律楚材。耶律楚材的"胜利"，只是在可汗认为有用的框架内。

再往深处想：今天，政策顾问、科学家、经济学家对政治领导人有多大影响力？这种"知识权力"和军事权力的关系是什么？`,
      hintEn: `Think from two angles:
① Yelü Chucai's power came from knowledge — he knew how to calculate tax revenue, knew that agriculture produced more than a nomadic economy, knew the empire needed a stable fiscal foundation. Genghis Khan needed this knowledge, so the knowledge had power.
② Another angle: Genghis Khan's power was never truly challenged — he could have ignored Yelü Chucai at any moment. Yelü Chucai's "victory" only operated within the framework the khan found useful.

Going deeper: today, how much influence do policy advisors, scientists, and economists have over political leaders? What is the relationship between "knowledge power" and military or political power?`,
      conceptsActivated: ['cultural-preservation-destruction', 'mongol-legacy-complexity'],
    },

    {
      id: 'q3-connectivity-good-or-bad',
      cn: `Pax Mongolica 打通了丝绸之路——商人可以安全旅行，马可·波罗从威尼斯走到北京；思想、技术、艺术可以东西流通。

但与此同时，黑死病（14 世纪腺鼠疫）也沿着同样的路线从中亚传到欧洲，杀死了欧洲约 1/3 的人口。

"连通"（connectivity）本身是好事还是坏事？还是说，这个问题根本没有答案？`,
      en: `Pax Mongolica reopened the Silk Road — merchants could travel safely, Marco Polo walked from Venice to Beijing; ideas, technologies, and art could flow east and west.

At the same time, the Black Death (14th-century bubonic plague) traveled the same routes from Central Asia to Europe, killing roughly a third of Europe's population.

Is "connectivity" itself a good thing or a bad thing? Or is this a question that has no answer?`,
      hintCn: `这是一个没有标准答案的开放题——AP 论文题就喜欢这种，因为它要求你承认复杂性。

几个角度：
① 受益方：意大利商人（财富大增）、丝路沿线城市（繁荣）、文艺复兴（因为和东方接触获得了新知识）。
② 受损方：黑死病导致欧洲 2500 万人死亡；西亚被蒙古征服地区人口锐减。
③ 中性观察：连通本身是工具，不是目的——病毒、丝绸、思想走的是同一条路。

写论文的策略：不要说"连通是好的"或"连通是坏的"。要说：连通加速了所有东西的流动，好的坏的都加速了。所以评价连通，必须同时看谁因此获益、谁因此受害，以及在哪个历史时间点。`,
      hintEn: `This is an open question with no standard answer — and that's exactly what AP essay questions love, because they require you to acknowledge complexity.

Several angles:
① Beneficiaries: Italian merchants (enormous wealth gains), cities along the Silk Road (prosperity), the Renaissance (new knowledge from contact with the East).
② Harmed: the Black Death killed 25 million in Europe; conquered regions of western Asia saw sharp population decline from Mongol campaigns.
③ Neutral observation: connectivity is a tool, not an outcome — viruses, silk, and ideas all travel the same road.

Essay strategy: don't say "connectivity is good" or "connectivity is bad." Instead say: connectivity accelerated the flow of everything — beneficial and harmful alike. Therefore, evaluating connectivity requires looking at who gained, who suffered, and in which historical moment.`,
      conceptsActivated: ['pax-mongolica-yam', 'mongol-conquests-violence', 'mongol-legacy-complexity'],
    },
  ],
};

export default notebook;
