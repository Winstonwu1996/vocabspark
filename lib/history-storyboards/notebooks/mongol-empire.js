// ─── 同伴笔记本架构 v1 · Mongol Empire ───────────────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
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
//   - storyboard 提供情感锚点（成吉思汗 / 耶律楚材 / 唆鲁禾帖尼别吉 三条线）
//   - notebook 提供考点闭环（四大汗国 / 忽必烈 / 马可·波罗 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-2.2
//   - California HSS 7.3.6
//   - 故事覆盖率 ~87%（A-）→ notebook 补完至 ~97%
//
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
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
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
        mustKnow: false,
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
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'genghis-perpetrator-actor',
        nodeIds: ['genghis-N1', 'genghis-N3', 'genghis-N5'],
        xiaoweiNote: {
          cn: `视角一开头讲到了——铁木真（Temujin）出生在动荡的蒙古草原，
父亲被毒死，少年时被敌族掳走当奴隶。他不是"天生的王"，是一步一步用战争和政治联盟爬上来的。

1206 年库里台大会（kurultai）——所有部落首领聚集，正式选他为"成吉思汗"
（意思是"全球的统治者"或"坚强的可汗"）。

Yasa 大法是他建国的核心工具：
- 宗教宽容：不管你信伊斯兰、佛教、基督教还是萨满——可以继续信，
  只要不挑战蒙古权威
- 军功提升制：打仗打得好就能升，不看出身、不看血统——这和当时欧洲贵族制、
  中国世袭制都很不同
- 千户制（tumen）：军队按 10、100、1000 人编制，打散旧的部落体系，
  建立对成吉思汗个人的效忠

考点关键句：Yasa 是蒙古帝国的法律基础，其中宗教宽容条款是蒙古帝国
能管理多元族群的重要原因之一。`,
          en: `Lens 1 starts here — Temujin was born in a turbulent Mongolian steppe,
his father poisoned by enemies, himself captured as a slave in adolescence.
He wasn't a "born king" — he clawed his way up through war and political alliance.

1206 kurultai — all tribal chiefs assembled and formally elected him Genghis Khan
("ruler of all," or "strong/fierce khan").

Yasa was his core state-building tool:
- Religious tolerance: whether you were Muslim, Buddhist, Christian, or Shamanist —
  you could keep practicing, as long as you didn't challenge Mongol authority
- Meritocracy over hereditary rank: battlefield performance earned promotion,
  regardless of birth — very different from European feudal aristocracy or Chinese hereditary systems
- Tumen (decimal) system: armies organized in units of 10, 100, 1,000 — breaking up
  old tribal loyalties and building personal allegiance to Genghis Khan

Key exam sentence: The Yasa was the legal foundation of the Mongol Empire;
its religious tolerance clause is a major reason the empire could govern diverse populations.`,
        },
      },
    },

    // ── 卡 2：Yam 驿站系统 & Pax Mongolica（storyAnchor·covered）
    {
      id: 'pax-mongolica-yam',
      termCn: 'Pax Mongolica / Yam 驿站系统',
      termEn: 'Pax Mongolica / Yam Postal Relay System',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'genghis-perpetrator-actor',
        nodeIds: ['genghis-N8', 'genghis-N10'],
        xiaoweiNote: {
          cn: `视角一讲到成吉思汗的"遗产"那部分——Yam 驿站系统是他一手建起来的。

Yam（意为"驿站"）：
- 每隔约 25 英里设一个驿站，配备换乘马匹、食物、住宿
- 驿使可以用官方牌证（paiza）全程免费换马、免费吃住
- 让帝国内的消息、军令、贸易商队可以高速移动
- 同类系统在那个时代的欧洲、西亚根本不存在

Pax Mongolica（蒙古和平，约 1250-1350）：
- 帝国稳定后的百年"蒙古治下的和平"
- 丝绸之路重新畅通——商人、外交官、传教士可以相对安全地横穿欧亚
- 马可·波罗就是在这段时期旅行的（1271-1295）
- 但"Pax"不等于真正和平——对被征服地区来说是占领，不是和平

考点关键句：Pax Mongolica 是蒙古帝国对全球贸易网络最重要的贡献——
也是欧亚大陆文化交流和疾病传播（包括黑死病）的关键时期。`,
          en: `The "legacy" section of Lens 1 covers this — Yam was built by Genghis Khan himself.

Yam (means "relay station"):
- Stations roughly every 25 miles, stocked with fresh horses, food, lodging
- Official messengers carried a paiza (authorization plaque) — free horse swaps,
  free food and lodging throughout the empire
- Let military orders, official news, and merchant caravans move at high speed
  across the empire
- Nothing comparable existed in contemporary Europe or western Asia

Pax Mongolica (Mongol Peace, roughly 1250-1350):
- The century of relative stability after the empire consolidated
- The Silk Road reopened — merchants, diplomats, missionaries could cross Eurasia
  with relative safety
- Marco Polo traveled during exactly this period (1271-1295)
- But "Pax" does not mean actually peaceful — for conquered populations, it was occupation, not peace

Key exam sentence: Pax Mongolica is the Mongol Empire's most important contribution to
global trade networks — and the pivotal period for Eurasian cultural exchange and
disease transmission (including the Black Death).`,
        },
      },
    },

    // ── 卡 3：文化保全 vs 破坏（storyAnchor·covered，耶律楚材）
    {
      id: 'cultural-preservation-destruction',
      termCn: '耶律楚材 / 文化保全 vs 破坏',
      termEn: 'Yelü Chucai / Cultural Preservation vs Destruction',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'yelü-chucai-lonely-mediator',
        nodeIds: ['chucai-N3', 'chucai-N6', 'chucai-N9'],
        xiaoweiNote: {
          cn: `视角二全程讲他——耶律楚材（Yelü Chucai，1190-1244），契丹族人，
读儒家经典长大，被成吉思汗征召为谋士。

他夹在两个世界之间：
- 蒙古一方："打下来的城市，杀光人口，清空土地，好变牧场"
- 儒家一方："城市里的文化机构、农业体系、知识分子值得保留"

他最著名的劝阻：成吉思汗的后代计划把华北平原的农田全部变为牧场
（这样就要把农民全部迁走或杀掉）——他劝阻了，论据是"留着农民种地，
税收比游牧更稳定"。算盘打赢了帝国的逻辑。

这是 AP DBQ 的经典材料——说明蒙古帝国的"破坏 vs 保全"不是非此即彼的，
是有人在中间调解的，而那个调解的人往往来自被征服的文明内部。

careful framing：耶律楚材保全了文化机构，但他本人也是在帮助蒙古人
更有效地统治——他的"调解"是在帝国框架内的，不是对抗帝国。`,
          en: `Lens 2 is entirely about him — Yelü Chucai (1190-1244), ethnically Khitan,
raised on Confucian classics, conscripted by Genghis Khan as an advisor.

He was caught between two worlds:
- Mongol side: "conquered cities should be depopulated, land cleared for pasture"
- Confucian side: "cities' cultural institutions, agricultural systems, and scholars
  are worth preserving"

His most famous argument: Genghis Khan's successors planned to convert all of North
China's farmland into pasture (which meant displacing or killing the farming population) —
he argued against it on the grounds that "keeping farmers to work the land produces
more stable tax revenue than nomadic economy." The abacus beat the empire's logic.

This is classic AP DBQ material — showing that the Mongol Empire's "destruction vs preservation"
wasn't binary; there were people mediating in between, and those mediators often came
from within the conquered civilization itself.

Careful framing: Yelü Chucai preserved cultural institutions, but he was also helping the
Mongols rule more effectively — his "mediation" operated within the imperial framework,
not in opposition to it.`,
        },
      },
    },

    // ── 卡 4：女性政治权力（storyAnchor·covered，唆鲁禾帖尼别吉）
    {
      id: 'women-political-power',
      termCn: '唆鲁禾帖尼别吉 / 蒙古女性政治权力',
      termEn: 'Sorghaghtani Beki / Women\'s Political Power in the Mongol Empire',
      standardRef: ['AP World KC-2.2'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'sorghaghtani-receiving-end',
        nodeIds: ['sorghaghtani-N2', 'sorghaghtani-N5', 'sorghaghtani-N8', 'sorghaghtani-N11'],
        xiaoweiNote: {
          cn: `视角三全程讲她。她是谁：克烈部（Keraite）的基督徒（景教 / Nestorian Christian）
公主，嫁给成吉思汗的儿子拖雷（Tolui）。

拖雷去世后，她独自抚养四个儿子：
蒙哥（第四任大汗）、忽必烈（元朝建立者）、旭烈兀（伊儿汗国建立者）、
阿里不哥（忽必烈的竞争对手）

她怎么做到的：不争夺大汗之位，但精心操控每个儿子的教育、联姻、政治位置；
让儿子们分别学习不同文化（伊斯兰、佛教、汉文化）以适应未来管辖的不同地区。

为什么她是 AP 必知人物：AP World History 考点要求学生分析
"蒙古帝国内女性如何通过非正式权力途径影响政治"——她是最典型的案例。

考点关键句：唆鲁禾帖尼别吉是蒙古帝国继承结构中的关键节点，
她的策略确保了她的儿子们统治了蒙古帝国分裂后的三个主要汗国。`,
          en: `Lens 3 is entirely about her. Who she was: a Keraite princess who practiced
Nestorian Christianity, married to Tolui, son of Genghis Khan.

After Tolui's death, she raised four sons alone:
Möngke (4th Great Khan), Kublai (founder of the Yuan Dynasty), Hulagu (founder of
the Ilkhanate), and Ariq Böke (Kublai's rival).

How she did it: she didn't compete for the throne of Great Khan directly, but
carefully managed each son's education, marriage alliances, and political positioning.
She had each son educated in a different culture (Islamic, Buddhist, Chinese/Confucian)
to prepare them for the different regions they would eventually govern.

Why she's an AP must-know: AP World History requires students to analyze how
women in the Mongol Empire exercised political influence through informal channels —
she is the most prominent example.

Key exam sentence: Sorghaghtani Beki was the pivotal node in the Mongol Empire's
succession structure; her strategy ensured that her sons came to rule three of the
major successor khanates after the empire fragmented.`,
        },
      },
    },

    // ── 卡 5：西征 & 蒙古的破坏（storyAnchor·covered）──────
    {
      id: 'mongol-conquests-violence',
      termCn: '蒙古西征 & 暴力征服',
      termEn: 'Mongol Western Campaigns & Violent Conquest',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'genghis-perpetrator-actor',
        nodeIds: ['genghis-N6', 'genghis-N7', 'genghis-N9'],
        xiaoweiNote: {
          cn: `视角一讲得很清楚——1219 到 1221 年，成吉思汗亲征中亚（花剌子模帝国），
四城屠：Bukhara（布哈拉）、Samarkand（撒马尔罕）被洗劫，
人口估计死亡数以百万计。

我读的时候感觉很不舒服——这是屠杀，不是"战争中难以避免的伤亡"。
但老师说 AP 题不会让我们表态好坏，而是让我们分析：
"暴力作为统治工具——为什么有效？"

蒙古军队为什么这么能打：
- 机动性极强的骑射兵，不需要固定补给线
- 心理战："降就放过，抵抗就屠城"——很多城市选择不战而降
- 吸收被征服民族的工程师和围城专家（如中国的攻城机器操作员）

1227 年成吉思汗在征战途中去世（具体原因史书记录不一）。
帝国此后由他的后代继续扩张。

careful framing：蒙古征服杀死了大量人口，但也打通了丝绸之路，
让思想、技术、疾病（黑死病）可以横跨欧亚流动——
破坏和连通是同一枚硬币的两面。`,
          en: `Lens 1 is explicit on this — 1219 to 1221, Genghis Khan personally led
the campaign into Central Asia (the Khwarazmian Empire). Four cities destroyed:
Bukhara and Samarkand sacked, with estimated casualties in the millions.

Reading this was uncomfortable — it's massacre, not "unavoidable wartime casualties."
But teacher says AP won't ask us to judge good or bad; instead it asks:
"Violence as a governing tool — why was it effective?"

Why Mongol armies were so dominant:
- Highly mobile cavalry archers who didn't need fixed supply lines
- Psychological warfare: "surrender and be spared, resist and be slaughtered" —
  many cities chose not to fight
- Absorption of conquered peoples' engineers and siege specialists
  (such as Chinese catapult operators)

1227: Genghis Khan died while on campaign (historical sources disagree on the cause).
The empire continued expanding under his successors.

Careful framing: Mongol conquest killed enormous numbers of people, but also reopened
the Silk Road, allowing ideas, technologies, and disease (the Black Death) to flow
across Eurasia — destruction and connection are two sides of the same coin.`,
        },
      },
    },

    // ── 卡 6：四大汗国 & 帝国分裂（standaloneText）────────────
    {
      id: 'four-khanates-fragmentation',
      termCn: '四大汗国 & 帝国分裂',
      termEn: 'The Four Khanates & Fragmentation of the Empire',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'sorghaghtani-receiving-end', nodeId: 'sorghaghtani-N11', context: '唆鲁禾帖尼别吉的儿子们分别建立或继承不同汗国' },
        ],
      },
      standaloneText: {
        cn: `成吉思汗统一蒙古，他的征服事业由儿孙继续——但帝国太大了，没有人能长期统一管辖。

成吉思汗死后（1227），蒙古大汗之位传了几代；1260 年代，帝国正式分裂为四大汗国：

1. 元朝（大汗汗国）——忽必烈（Kublai Khan）建立，统治中国，都城大都（今北京），
   1271 年建国，1279 年灭南宋，统一中国，帝国中最繁荣的一支

2. 察合台汗国（Chagatai Khanate）——中亚，大约今天的哈萨克斯坦/乌兹别克斯坦一带，
   保留最多游牧传统，伊斯兰化最深

3. 金帐汗国（Golden Horde）——俄罗斯草原，统治俄罗斯诸公国两百余年（约 1240-1480），
   对俄罗斯历史影响极深；"Tsar"这个词就来自这段历史

4. 伊儿汗国（Ilkhanate）——波斯、伊拉克一带，由唆鲁禾帖尼别吉之子旭烈兀建立，
   1258 年攻陷巴格达（阿拔斯王朝首都，伊斯兰黄金时代的中心），史称"蒙古灭阿拉伯"

为什么分裂：
- 蒙古传位靠库里台选举，不靠长子继承，结果继承争议不断
- 各汗国适应当地文化：波斯的伊斯兰化、中国的汉化、俄罗斯的本土化——各有各的方向

考点关键句：蒙古帝国的四大汗国在文化上走向分化——
伊斯兰化、汉化、东正教化——但都保留了蒙古人的政治统治框架。`,
        en: `Genghis Khan unified the Mongols, and his children and grandchildren continued
his campaigns — but the empire was too large for any one ruler to govern indefinitely.

After Genghis Khan died (1227), the title of Great Khan passed through several generations;
by the 1260s, the empire formally fractured into four successor khanates:

1. Yuan Dynasty (Great Khanate) — founded by Kublai Khan, ruling China, capital at
   Dadu (modern Beijing). Established 1271, conquered the Southern Song in 1279,
   unifying China. The most prosperous of the four.

2. Chagatai Khanate — Central Asia, roughly modern Kazakhstan and Uzbekistan.
   Retained the most nomadic traditions; underwent the deepest Islamization.

3. Golden Horde — the Russian steppe, ruling the Russian principalities for over two centuries
   (roughly 1240-1480), profoundly shaping Russian history.
   The word "Tsar" traces partly to this period.

4. Ilkhanate — Persia and Iraq, founded by Hulagu, son of Sorghaghtani Beki.
   In 1258 it sacked Baghdad (capital of the Abbasid Caliphate, center of the Islamic
   Golden Age) — often called the event that ended the Islamic Golden Age.

Why fragmentation happened:
- Mongol succession relied on kurultai election, not primogeniture — disputes over inheritance
  were constant
- Each khanate adapted to local culture: Islamization in Persia, Sinicization in China,
  integration with Orthodoxy in Russia — each evolved in its own direction

Key exam sentence: The Mongol Empire's four successor khanates diverged culturally —
Islamization, Sinicization, Eastern Orthodox influence — but all retained the Mongol
political governance framework.`,
      },
      xiaoweiNote: {
        cn: `四大汗国考试几乎必考。我的记忆口诀：
元（东·中国）→ 察合台（中·中亚）→ 金帐（西北·俄罗斯）→ 伊儿（西南·波斯）
——从东到西排一遍，地图上找四个区域。

还有一个必背细节：1258 年伊儿汗国攻陷巴格达、杀死最后一任阿拔斯哈里发——
这是伊斯兰黄金时代的终点，AP 常考。`,
        en: `The Four Khanates are almost guaranteed to appear on the test. My mnemonic:
Yuan (East, China) → Chagatai (Center, Central Asia) → Golden Horde (Northwest, Russia)
→ Ilkhanate (Southwest, Persia) — place them east to west on a mental map.

One detail I have to memorize: 1258, the Ilkhanate sacked Baghdad and killed the
last Abbasid Caliph — this is the endpoint of the Islamic Golden Age, a frequent AP question.`,
      },
    },

    // ── 卡 7：忽必烈 & 元朝 & 马可·波罗（standaloneText）──────
    {
      id: 'kublai-yuan-marco-polo',
      termCn: '忽必烈 / 元朝 / 马可·波罗',
      termEn: 'Kublai Khan / Yuan Dynasty / Marco Polo',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.3.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'sorghaghtani-receiving-end', nodeId: 'sorghaghtani-N8', context: '唆鲁禾帖尼别吉让忽必烈从小接受儒家教育，为日后治理中国做准备' },
        ],
      },
      standaloneText: {
        cn: `忽必烈（Kublai Khan，1215-1294），成吉思汗之孙、唆鲁禾帖尼别吉之子。
他是蒙古帝国史上"汉化最深"的大汗。

母亲让他从小学汉语和儒家思想；他后来把首都从蒙古高原迁到大都（今北京），
采用汉式礼仪和官僚制度——这叫"以汉法治汉地"。

1271 年他宣布国号"元"（Yuan），取《易经》"大哉乾元"之意。
1279 年消灭南宋（South Song Dynasty），成为第一个统治整个中国的非汉族王朝皇帝。
蒙古人在中国的统治被称为"元朝"（1271-1368）。

马可·波罗（Marco Polo，1254-1324），威尼斯商人。
他在 1271 年从威尼斯出发，沿丝绸之路旅行，约 1275 年抵达忽必烈的大都宫廷，
在元朝生活和服务了约 17 年，1295 年返回威尼斯。
他口述的旅行记录《马可·波罗游记》（Il Milione）成为欧洲人了解东亚的第一手资料。

马可·波罗在欧洲为什么重要：
- 他描述了中国的纸币、煤炭、大城市、丝绸、香料——这些在欧洲都是未知的
- 他的记录激励了后来的探险家，包括哥伦布（Columbus 出发前读过《游记》）
- 但：他的记录里有很多夸大，有历史学家质疑他是否真的到过中国所有他声称的地方

考点关键句：马可·波罗的《游记》是 Pax Mongolica 时代欧亚联通的标志性文献，
也是欧洲"东方想象"的重要来源。`,
        en: `Kublai Khan (1215-1294), grandson of Genghis Khan, son of Sorghaghtani Beki.
He was the most Sinicized Great Khan in Mongol history.

His mother ensured he learned Chinese and Confucian thought from childhood.
He later moved the capital from the Mongolian steppe to Dadu (modern Beijing)
and adopted Chinese court ritual and bureaucratic systems — governing China with
Chinese methods.

In 1271 he declared the dynasty name "Yuan" (drawn from the I Ching phrase
"great is the primal force of Qian"). In 1279 he destroyed the Southern Song,
becoming the first non-Han emperor to rule all of China.
Mongol rule in China is called the Yuan Dynasty (1271-1368).

Marco Polo (1254-1324), Venetian merchant. He left Venice in 1271, traveled
the Silk Road, reached Kublai Khan's court at Dadu around 1275, served in
the Yuan court for roughly 17 years, and returned to Venice in 1295.
His dictated travel account, The Travels of Marco Polo (Il Milione), became
Europe's primary firsthand source on East Asia.

Why Marco Polo matters to European history:
- He described China's paper money, coal, enormous cities, silk, and spices —
  all unknown or barely known in Europe
- His accounts inspired later explorers, including Columbus (who had read
  Marco Polo before setting sail)
- But: his account contains exaggerations, and historians debate whether he
  actually visited all the places he claimed

Key exam sentence: Marco Polo's Travels is the defining document of Eurasian
connectivity in the Pax Mongolica era, and a foundational source for Europe's
imagining of the East.`,
      },
      xiaoweiNote: {
        cn: `这张卡我要特别记两件事：
(1) 忽必烈 = 成吉思汗的孙子（不是儿子），是唆鲁禾帖尼别吉的儿子——三代关系必须清楚
(2) 马可·波罗在元朝工作了 17 年——哥伦布出发前读过他的书

老师说 7 年级历史"马可·波罗"选择题出现率很高，因为它把东西方连通这件事变得"具体"了。`,
        en: `Two things I especially need to remember from this card:
(1) Kublai Khan is Genghis Khan's grandson (not son), and Sorghaghtani Beki's son —
    three-generation relationship must be clear
(2) Marco Polo served in the Yuan court for 17 years — Columbus had read his book before sailing

Teacher said Marco Polo appears very often in Grade 7 multiple choice because he makes
East-West connectivity feel concrete and real.`,
      },
    },

    // ── 卡 8：蒙古帝国的多重遗产（storyAnchor·covered，综合）
    {
      id: 'mongol-legacy-complexity',
      termCn: '蒙古帝国的多重遗产',
      termEn: 'The Complex Legacy of the Mongol Empire',
      standardRef: ['AP World KC-2.2', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['genghis-N10', 'chucai-N9', 'sorghaghtani-N11'],
        xiaoweiNote: {
          cn: `三条故事线读完之后，我脑子里有一堆互相矛盾的东西：

成吉思汗屠城 vs 成吉思汗建 Yam 驿站——同一个人。
耶律楚材劝阻杀农民，成功了——但他也是在帮蒙古人更有效地统治。
唆鲁禾帖尼别吉是基督徒，她的儿子建了一个攻陷巴格达（伊斯兰世界中心）的汗国。

这就是 AP 说的"多重历史影响"（multiple historical effects）。

蒙古帝国的遗产，从不同角度看：
- 破坏视角：屠杀、城市毁灭、农业区人口锐减（中亚、华北都有大规模人口减少）
- 建设视角：Pax Mongolica、Yam 驿站、贸易路线重开、文化交流
- 疾病视角：Pax Mongolica 让黑死病（bubonic plague）从中亚传到欧洲，
  1347-1351 年杀死欧洲约 1/3 人口——"连通"的代价
- 政治遗产：蒙古人重新划定了欧亚的政治地图，今天很多国家的边界
  都与蒙古时代的汗国疆域有间接关联

AP DBQ 经典提问：
"评估蒙古征服对 13-14 世纪欧亚大陆的影响——
哪个影响最重要？用具体证据支持你的论点。"

作为华裔来看这段历史——蒙古帝国征服了中国，元朝也是中国历史的一部分，
这种"征服者 = 中国皇帝"的身份重叠，是中国历史里一个很特别的现象。
忽必烈用汉文化治理中国，但他也没有忘记自己是成吉思汗的孙子。`,
          en: `After reading all three story threads, my head is full of contradictions:

Genghis Khan who massacred cities vs Genghis Khan who built the Yam system —
the same person. Yelü Chucai argued against killing farmers and succeeded —
but he was also helping the Mongols govern more efficiently.
Sorghaghtani Beki was a Christian, and her son built the khanate that sacked
Baghdad (the center of the Islamic world).

This is what AP calls "multiple historical effects."

The Mongol Empire's legacy, from different perspectives:
- Destruction lens: massacre, urban devastation, sharp population decline in agricultural
  regions (Central Asia and North China both saw large-scale depopulation)
- Construction lens: Pax Mongolica, Yam postal system, reopened trade routes, cultural exchange
- Disease lens: Pax Mongolica allowed the Black Death (bubonic plague) to travel
  from Central Asia to Europe; the 1347-1351 outbreak killed roughly a third of
  Europe's population — the price of connectivity
- Political legacy: the Mongols redrew Eurasia's political map; many modern national
  borders are indirectly shaped by the khanate boundaries of the Mongol era

Classic AP DBQ:
"Evaluate the impact of Mongol conquest on Eurasia in the 13th-14th centuries —
which impact was most significant? Support your argument with specific evidence."

Looking at this history as a Chinese-American — the Mongol Empire conquered China,
and the Yuan Dynasty is part of Chinese history. This overlap of identities
("conqueror" = "Chinese emperor") is one of the most unusual features of Chinese history.
Kublai Khan governed China through Chinese culture, but he never forgot he was
Genghis Khan's grandson.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1-religious-tolerance-or-pragmatism',
      cn: `成吉思汗的 Yasa 大法规定宗教宽容——无论信伊斯兰教、佛教、基督教还是儒教，
都可以在帝国内自由信仰。

你觉得这是"真正的宗教宽容"，还是"政治实用主义"？这两者有区别吗？

提示：想一想——如果宽容的目的是"减少被征服地区的抵抗、更容易管理"，
这算不算真正的宽容？宽容的动机重要吗，还是只看结果？`,
      en: `Genghis Khan's Yasa code mandated religious tolerance — whether you were Muslim,
Buddhist, Christian, or Confucian, you could practice freely within the empire.

Do you think this was "genuine religious tolerance" or "political pragmatism"?
Is there a meaningful difference?

Hint: consider — if the purpose of tolerance is "reduce resistance from conquered
populations and make governance easier," does that count as real tolerance?
Does the motivation for tolerance matter, or only the outcome?`,
      hintCn: `有学者认为：宽容的动机不影响宽容的效果——被宽容的人获得了保护，
不管可汗因为什么理由给的。另一些学者认为：动机很重要，因为"实用主义的宽容"
在不再实用的时候会被撤销（伊儿汗国后来皈依伊斯兰，对其他宗教的待遇就变了）。

进阶思考：今天政府推行多元文化政策，是"真正的价值观"还是"实用主义"？
这个区别对被保护的群体重要吗？`,
      hintEn: `Some historians argue: the motivation for tolerance doesn't change its effect —
the tolerated population received protection regardless of the khan's reason.
Others argue: motivation matters, because "pragmatic tolerance" gets withdrawn
when it stops being useful (the Ilkhanate converted to Islam and treated other
religions differently afterward).

Going deeper: when modern governments enact multiculturalism policies, is that
"genuine values" or "pragmatism"? Does the distinction matter to the groups being protected?`,
      conceptsActivated: ['genghis-unification', 'mongol-legacy-complexity'],
    },

    {
      id: 'q2-power-and-intellect',
      cn: `耶律楚材是一个书生——儒家学者，不会打仗。成吉思汗是靠武力征服世界的人。

但成吉思汗听了耶律楚材的建议，没有把华北的农田全部变成牧场，
留下了数百万农民的性命。

一个靠暴力征服世界的人，为什么会听一个书生的话？
你觉得在这件事上，谁更有权力——成吉思汗，还是耶律楚材？`,
      en: `Yelü Chucai was a scholar — a Confucian official who couldn't fight.
Genghis Khan was a man who conquered the world by force.

Yet Genghis Khan listened to Yelü Chucai and did not convert North China's farmland
into pasture, saving the lives of millions of farmers.

Why would a man who conquered the world by violence listen to a scholar?
In this moment, who do you think had more power — Genghis Khan or Yelü Chucai?`,
      hintCn: `可以从两个角度想：
(1) 耶律楚材的权力来自"知识" — 他知道税收怎么算，知道农业比游牧产出更多，
    知道帝国需要稳定的财政基础。成吉思汗需要这种知识，所以给了它相应的权力。
(2) 或者：成吉思汗的权力从来没有被真正挑战——他可以随时忽视耶律楚材。
    耶律楚材的"胜利"只是在可汗认为有用的框架内。

进阶思考：今天，政策顾问、科学家、经济学家对政治领导人有多大影响力？
这种"知识权力"和军事/政治权力的关系是什么？`,
      hintEn: `Think from two angles:
(1) Yelü Chucai's power came from knowledge — he knew how to calculate tax revenue,
    knew that agriculture produced more than nomadic economy, knew the empire needed
    a stable fiscal foundation. Genghis Khan needed this knowledge, so it had power.
(2) Or: Genghis Khan's power was never truly challenged — he could have ignored
    Yelü Chucai at any moment. Yelü Chucai's "victory" only operated within
    the framework the khan found useful.

Going deeper: today, how much influence do policy advisors, scientists, and economists
have over political leaders? What is the relationship between "knowledge power"
and military or political power?`,
      conceptsActivated: ['cultural-preservation-destruction', 'mongol-legacy-complexity'],
    },

    {
      id: 'q3-connectivity-good-or-bad',
      cn: `Pax Mongolica 打通了丝绸之路——商人可以安全旅行，
马可·波罗从威尼斯走到北京；思想、技术、艺术可以东西流通；
但与此同时，黑死病（14 世纪腺鼠疫）也沿着同样的路线从中亚传到欧洲，
杀死了欧洲约 1/3 的人口。

"连通"（connectivity）本身是好事还是坏事？
还是说，这个问题根本没有答案？`,
      en: `Pax Mongolica reopened the Silk Road — merchants could travel safely,
Marco Polo walked from Venice to Beijing; ideas, technologies, and art could flow
east and west. At the same time, the Black Death (14th-century bubonic plague)
traveled the same routes from Central Asia to Europe, killing roughly a third
of Europe's population.

Is "connectivity" itself a good thing or a bad thing?
Or is this a question that has no answer?`,
      hintCn: `这是一个没有标准答案的开放题——AP DBQ 就喜欢这种题，因为它要求你
"承认复杂性"（acknowledge complexity）。

几个角度：
- 受益方：意大利商人（财富大增）、丝路沿线的城市（繁荣）、文艺复兴（因为和东方接触获得了新知识）
- 受损方：黑死病导致欧洲 2500 万人死亡；西亚被蒙古征服地区人口锐减
- 中性观察：连通本身是工具，不是目的——病毒、丝绸、思想都走同一条路

写 essay 的策略：不要说"连通是好的"或"连通是坏的"——
要说"连通加速了所有东西的流动，好的坏的都加速了，
因此评价连通必须同时看谁因此获益、谁因此受害，
以及在哪个历史时间点"。`,
      hintEn: `This is an open question with no standard answer — and that's exactly what
AP DBQs love, because they require you to "acknowledge complexity."

Several angles:
- Beneficiaries: Italian merchants (enormous wealth gains), cities along the Silk Road
  (prosperity), the Renaissance (new knowledge from contact with the East)
- Harmed: Black Death killed 25 million in Europe; conquered regions of western Asia
  saw sharp population decline from Mongol campaigns
- Neutral observation: connectivity is a tool, not an outcome — viruses, silk,
  and ideas all travel the same road

Essay strategy: don't say "connectivity is good" or "connectivity is bad" —
say "connectivity accelerated the flow of everything, beneficial and harmful alike;
therefore evaluating connectivity requires looking at who gained, who suffered,
and in which historical moment."`,
      conceptsActivated: ['pax-mongolica-yam', 'mongol-conquests-violence', 'mongol-legacy-complexity'],
    },
  ],
};

export default notebook;
