// ─── 同伴笔记本架构 v1 · Westward Expansion 1869 ─────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（铁路巨头 赢家/铁路华工·拓荒户 中间人/Lakota 受影响方 三条线）
//   - notebook 提供考点闭环（横贯铁路 1869、宅地法 1862、平原民族战争 Little Bighorn 1876 + Wounded Knee 1890、
//     野牛近灭绝、Dawes Act 1887、铁路华工/爱尔兰工、保留地与条约背弃、晚清/洋务运动结构对照 §8 — 补完 APUSH Period 6 / CA HSS-5.8 / 8.5）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 6 (1865-1898)：Topic 6.3 Westward Migration / 6.4 The New South & the West / 6.6 American Indians in the West
//   - California HSS Grade 5.8（西进）+ Grade 8.5（西进扩张）
//
// 事实地基：对账 westward-expansion-1869.md（narrative kernel）+ ledger
//   - 横贯铁路 1869.5.10 Promontory Summit 金道钉接轨；Homestead Act 1862（160 英亩）
//   - Little Bighorn 1876.6；Wounded Knee 1890.12；Dawes Act 1887
//   - 野牛 ~3000万 → 1880s 近零（部分蓄意，断平原民族生计）
//   - 无伪造逐字引文（Sherman/Sheridan 灭牛言论用"史学概述"通称，不引逐字）
//   - 与 manifest-destiny-1845（1840s 墨西哥割让）区分；不复制 chinese-exclusion-1882（华工是铁路背景，N7 仅埋种子）
//
// schemaVersion: 1 · notebookVersion: westward-expansion-1869-v1

export var notebook = {
  topicId: 'westward-expansion-1869',
  topicNameCn: '西进运动 1869',
  topicNameEn: 'Westward Expansion 1869',
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
    cn: `今天老师说我们要学 1869 年前后的西进运动（Westward Expansion）。
她说这是 APUSH Period 6 的主干之一，加州的 5 年级和 8 年级历史也都考。

她给了一张纸，上面写着这些名字：

铁路巨头 / 扩张派、Sitting Bull（坐牛）、Crazy Horse（疯马）、
George Custer（卡斯特）、修铁路的华工和爱尔兰工、追免费土地的拓荒户。

还有一串词：transcontinental railroad（横贯大陆铁路）、Homestead Act（宅地法）、
Plains Indian Wars（平原民族战争）、bison（野牛）、reservation（保留地）、
Dawes Act（道斯法）、frontier（边疆）、Little Bighorn、Wounded Knee。

我先记下来，等下读三个故事——铁路巨头（修铁路、推西进的赢家）、
华工和拓荒户（机器里的普通人）、一个 Lakota 拉科塔人（被这一切碾过去的一方）——
读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页："同一锤金道钉，一边把一个国家缝起来，
一边砸碎了另一群人的整个活法。读这段历史，要同时看见成就和毁灭——它们是同一件事的两面。"`,
    en: `Today my teacher said we're learning the Westward Expansion around 1869.
She said it's one of the spines of APUSH Period 6, and California's grade 5 and grade 8
history both test it too.

She gave us a sheet with these names:

a Railroad Baron / expansion booster, Sitting Bull, Crazy Horse,
George Custer, the Chinese and Irish workers who built the railroad, and homesteaders
chasing free land.

Plus a string of terms: transcontinental railroad, Homestead Act, Plains Indian Wars,
bison, reservation, Dawes Act, frontier, Little Bighorn, Wounded Knee.

Let me write these down. After I read the three stories — the Railroad Baron (the winner
who built the rails and pushed the expansion), the Chinese laborer and the homesteader
(ordinary people inside the machine), and a Lakota of the plains (the one ground beneath
all of it) — I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The same golden spike
stitched a country together on one side and shattered another people's whole way of living
on the other. To read this history you have to see the achievement and the destruction at
once — they are two faces of one thing."`,
    keyTerms: [
      { cn: '横贯大陆铁路', en: 'transcontinental railroad' },
      { cn: '宅地法', en: 'Homestead Act' },
      { cn: '太平洋铁路法 / 赠地', en: 'Pacific Railway Act / land grant' },
      { cn: '平原民族战争', en: 'Plains Indian Wars' },
      { cn: '野牛', en: 'bison' },
      { cn: '保留地', en: 'reservation' },
      { cn: '条约', en: 'treaty' },
      { cn: '道斯法', en: 'Dawes Act' },
      { cn: '边疆', en: 'frontier' },
      { cn: '小大角河之战', en: 'Battle of the Little Bighorn' },
      { cn: '伤膝河屠杀', en: 'Wounded Knee Massacre' },
      { cn: '鬼舞', en: 'Ghost Dance' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '铁路巨头 / 扩张派',
        nameEn: 'Railroad Baron / Expansion Booster',
        ipa: null,
        roleCn: '横贯大陆铁路的大老板兼西进鼓吹者（不是某一个真人，是这类人物的代表），拿联邦补贴 + 沿线赠地，用"空地/进步/文明"给夺地正名',
        roleEn: 'A transcontinental-railroad boss and westward-expansion booster (a representative type, not one specific real person); took federal subsidies and land grants, and used words like "empty land / progress / civilization" to justify taking Native land',
        mustKnow: true,
        audioKey: 'railroad-baron',
      },
      {
        nameCn: '坐牛',
        nameEn: 'Sitting Bull',
        ipa: '/ˈsɪtɪŋ bʊl/',
        roleCn: 'Lakota（拉科塔）领袖与圣人，平原民族抵抗的精神核心。1876 年 Little Bighorn 大战前后，他拒绝交出黑山、拒绝迁入保留地',
        roleEn: 'A Lakota leader and holy man — the spiritual heart of Plains resistance. Around the 1876 Little Bighorn battle, he refused to give up the Black Hills or move onto a reservation',
        mustKnow: true,
        audioKey: 'sitting-bull',
      },
      {
        nameCn: '疯马',
        nameEn: 'Crazy Horse',
        ipa: '/ˈkreɪzi hɔːrs/',
        roleCn: 'Lakota 战争领袖，1876 年 Little Bighorn 战场上的关键指挥者之一，平原民族军事抵抗的象征',
        roleEn: 'A Lakota war leader, one of the key commanders at the 1876 Little Bighorn battle, and a lasting symbol of Plains military resistance',
        mustKnow: true,
        audioKey: null,
      },
      {
        nameCn: '乔治·卡斯特',
        nameEn: 'George Custer',
        ipa: '/dʒɔːrdʒ ˈkʌstər/',
        roleCn: '美军中校，1876 年 Little Bighorn 率第七骑兵一部冲入 Lakota 与 Cheyenne 营地，全军覆没',
        roleEn: 'A U.S. lieutenant colonel who led part of the Seventh Cavalry into the Lakota and Cheyenne camp at the 1876 Little Bighorn and was wiped out with his entire column',
        mustKnow: true,
        audioKey: null,
      },
      {
        nameCn: '修铁路的华工',
        nameEn: 'Chinese Railroad Workers',
        ipa: null,
        roleCn: 'Central Pacific（中央太平洋）加州段的主力劳工（代表性群体）。他们凿穿 Sierra Nevada 山脉、承担最危险的工段，工钱比白人低、伤亡无人统计、被从庆典照片里抹去',
        roleEn: 'The main labor force on the Central Pacific\'s California stretch (a representative group). They tunneled through the Sierra Nevada mountains, took the most dangerous jobs, were paid less than white workers, had their deaths go uncounted, and were erased from the celebration photos',
        mustKnow: true,
        audioKey: null,
      },
      {
        nameCn: '追免费土地的拓荒户',
        nameEn: 'Homesteading Family',
        ipa: null,
        roleCn: '东部无地穷人（代表性群体），靠 1862 宅地法住满 5 年种起 160 英亩免费地翻身，"免费"背后是另一种狠',
        roleEn: 'Land-poor families from the East (a representative group) who turned their lives around by farming 160 acres of "free" land under the 1862 Homestead Act — though the "free" hid a heavy cost for others',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '一个平原上的拉科塔人',
        nameEn: 'A Lakota of the Plains',
        ipa: null,
        roleCn: '故事里的无名代表性人物，他经历了整段"被摧毁"：野牛、土地、活法被夺。他是替别人的"免费"付全部代价的人',
        roleEn: 'An unnamed representative figure in the story who lived through the whole experience of "being destroyed": bison, land, and way of life taken. He is the one who paid the full cost of everyone else\'s "free"',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'transcontinental-railroad-1869',
      termCn: '横贯大陆铁路（1869 金道钉接轨）',
      termEn: 'The Transcontinental Railroad (1869 Golden Spike)',
      defCn: '一条从美国东海岸一直连到西海岸的铁路，1869 年 5 月 10 日建成接轨。这是当时全世界第一条横穿整片大陆的铁路。',
      defEn: 'A railroad stretching from the U.S. East Coast all the way to the West Coast, completed on May 10, 1869. It was the first railroad to cross an entire continent in the world.',
      standardRef: ['APUSH Period 6 — Topic 6.3 Westward Migration', 'CA HSS 8.5', 'CA HSS 5.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'railroad-baron',
        nodeIds: ['rb-n1', 'rb-n5'],
        xiaoweiNote: {
          cn: `**1869 年 5 月 10 日**，在犹他州 **Promontory Summit（普罗蒙特里峰，地图上犹他州北部的一个小山口）**，
一根 **golden spike（金道钉）**砸下去，东西两段铁轨第一次接通，电报一声"成了"传遍全国。

我把考点压成一句必背：
**横贯大陆铁路 1869 年建成 = 全世界第一条横穿整片大陆的铁路。**

为什么修得这么疯？因为 1862 年的 **Pacific Railway Act（太平洋铁路法）**——政府按里程给钱，还把沿线大片土地（land grant，赠地）送给铁路公司。修得越快越长，拿得越多。Central Pacific（华工为主）从西往东，Union Pacific 从东往西，两边对冲赶进度。

考点关键句：铁路把几个月的旅程压成几天，城镇沿线爆发式生长，芝加哥成全国肉粮中心，整个国家的经济重新拼了一遍。这是真实的、巨大的成就——但同一条线，也铺在别人世代的家园上。`,
          en: `**On May 10, 1869**, at **Promontory Summit** in Utah, a **golden spike** came down, the eastern and western halves of track met for the first time, and the telegraph clicked "done" across the whole nation.

One must-memorize line: **the transcontinental railroad was completed in 1869 = the world's first railroad across an entire continent.**

Why build it so frantically? Because of the 1862 **Pacific Railway Act** — the government paid by the mile and gave companies huge tracts of land along the route (land grants). The faster and longer you built, the more you got. The Central Pacific (mostly Chinese labor) built east, the Union Pacific built west, the two racing toward each other.

Key exam sentence: the railroad squeezed a months-long journey into days, made towns explode along the line, turned Chicago into the nation's meat-and-grain center, and reassembled the whole country's economy. A real, enormous achievement — but the same line was laid on land that had been others' home for generations.`,
        },
      },
    },

    {
      id: 'homestead-act-1862',
      termCn: '宅地法 1862',
      termEn: 'The Homestead Act of 1862',
      defCn: '1862 年美国通过的一部法律：任何符合条件的人，只要去西部住满 5 年、把那块地种起来，就能几乎免费拿到 160 英亩土地（约 971 亩，差不多 65 公顷）。',
      defEn: 'A U.S. law passed in 1862: any eligible person who went west, lived on a piece of public land for five years, and farmed it could receive 160 acres almost for free.',
      standardRef: ['APUSH Period 6 — Topic 6.3 Westward Migration', 'CA HSS 8.5', 'CA HSS 5.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'railroad-worker-or-homesteader',
        nodeIds: ['wh-n3', 'wh-n4'],
        xiaoweiNote: {
          cn: `**1862 年的 Homestead Act（宅地法）**像一道光：去西部挑一块没人登记的公共土地，**住满 5 年、把它种起来，就能几乎免费拿到 160 英亩。**

我把它压成一句必背：
**Homestead Act = 1862 = 住满 5 年 + 种起来 → 160 英亩几乎免费。**

考点关键句：宅地法的确给东部无地穷人一个改命的机会（草原变麦田，美国成世界粮仓）。可这里有一个老师反复纠正的**误解陷阱**：
❌ "160 英亩是真正'免费'的土地。"
✅ 它对定居者免费——前提是先用条约、军队、饥饿把平原民族从那地上清走。**费用由原住民付。**

记忆锚：法律原文写"unappropriated public lands（未被占用的公共土地）"——一个法律词，把"有人住的家"定义成了"没人要的空地"。`,
          en: `**The 1862 Homestead Act** was like a shaft of light: go west, pick a plot of unregistered public land, **live on it five years and farm it, and 160 acres were yours almost free.**

One must-memorize line: **Homestead Act = 1862 = live 5 years + farm it → 160 acres almost free.**

Key exam sentence: the Homestead Act truly gave land-poor Easterners a chance to remake their fortunes (prairie into wheat fields, America into a world granary). But here's a **misconception trap** my teacher kept correcting:
❌ "The 160 acres were truly 'free' land."
✅ It was free to the settler only because treaties, the army, and starvation first cleared the Plains nations off that land — **the cost was paid by Native people.**

Memory anchor: the law's text says "unappropriated public lands" — a legal phrase that turned "a home where people lived" into "empty land no one wanted."`,
        },
      },
    },

    {
      id: 'railroad-labor-chinese-irish',
      termCn: '铁路劳工（华工 / 爱尔兰工）',
      termEn: 'Railroad Labor (Chinese & Irish Workers)',
      defCn: '修横贯大陆铁路的两支主要工人群体。华工负责加州那一段，从西往东凿山穿岭；爱尔兰移民等工人从东往西修。两支队伍对冲，1869 年接轨。',
      defEn: 'The two main groups of workers who built the transcontinental railroad. Chinese workers handled the California section, tunneling from west to east through the mountains; Irish immigrants and others built from east to west. The two lines met in 1869.',
      standardRef: ['APUSH Period 6 — Topic 6.3 Westward Migration', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'railroad-worker-or-homesteader',
        nodeIds: ['wh-n2', 'wh-n8'],
        xiaoweiNote: {
          cn: `这条线我特别有感觉——修最险一段的，正是华人。

两支队伍分工：
- **Central Pacific（中央太平洋）**：从加州由西往东修，主力是**华工**。他们翻越 Sierra Nevada（内华达山脉），冬雪能把工棚整个埋掉，人吊在篮子里对着岩壁放炸药，零下温度里凿隧道，一天有时只前进几十厘米。
- **Union Pacific（联合太平洋）**：从东往西修，主力是**爱尔兰移民**、退伍兵、获自由的黑人等。

考点关键句（DBQ 高频）：华工承担了最危险的隧道与爆破工段，工钱却比白人工人低，伤亡无人认真统计，1869 年的庆典照片、演讲、敬酒里几乎**看不见华工的身影**——修出最险一段的人，被从那张"伟大时刻"的画面里抹掉了。

⚠️ 别搞混：这里华工是铁路历史的背景；1882 年那部把华工挡在国门外的排华法是另一段历史，这一课只埋下种子、不展开。`,
          en: `This one hits me especially — the most dangerous stretch was built by Chinese hands.

Two groups, two directions:
- **Central Pacific**: built east from California, mostly **Chinese laborers** — crossing the Sierra Nevada mountains, with snow burying entire work-shacks, workers hanging in baskets to set charges against rock faces, cutting tunnels in subzero cold sometimes only inches a day.
- **Union Pacific**: built west from the East, mostly **Irish immigrants**, veterans, and freed Black workers.

Key exam sentence (high-frequency DBQ): the Chinese workers took the most dangerous tunnel and blasting work, yet were paid less than white workers, had their deaths go uncounted, and in the 1869 celebration photos, speeches, and toasts you can **barely find them** — the men who built the most dangerous stretch were erased from the "great moment" picture.

⚠️ Don't mix it up: Chinese labor here is the railroad's background story. The 1882 Chinese Exclusion Act that blocked Chinese workers from entering the country is a separate topic — this lesson only plants the seed.`,
        },
      },
    },

    {
      id: 'bison-near-extermination',
      termCn: '野牛的近灭绝',
      termEn: 'The Near-Extermination of the Bison',
      defCn: '野牛（bison，也叫 American buffalo）曾是大平原上约 3000 万头的庞大群落，是平原民族全套生活的根基。随着铁路推进和大规模猎杀，1880 年代野牛数量跌落到近乎零。',
      defEn: 'The bison (also called American buffalo) once numbered roughly thirty million on the Great Plains and formed the foundation of Plains nations\' entire way of life. As the railroad spread and mass hunting increased, bison numbers collapsed to near zero by the 1880s.',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'plains-native-receiving-end',
        nodeIds: ['pn-n4', 'pn-n7'],
        xiaoweiNote: {
          cn: `**bison（野牛，又叫 American buffalo）**原本在大平原上有**大约 3000 万头**。平原民族吃牛肉、用牛皮搭帐篷做衣服、用牛骨做工具——整套生活方式都建在野牛身上。

我把考点压成一句必背：
**野牛 ~3000万 → 1880s 近零；断野牛 = 断平原民族的活法。**

考点关键句（DBQ 高频）：随着铁路推进、商业猎手涌入（有的只为皮、只为取乐，从车窗就着车速朝牛群开枪），野牛在几十年里被打到近乎零。

这里有一个**误解陷阱**：
❌ "野牛灭绝只是过度捕猎的环境意外。"
✅ 大规模猎杀**部分是蓄意的军事手段**——史学界普遍记述，1870s 一些联邦军方将领公开赞同、纵容灭牛，认为消灭野牛能从根本上瓦解平原民族的生存基础、逼其投降。
（注意：这是**史学概述**，不引逐字原话——别写成某将领"说过"哪一句。）`,
          en: `The **bison** (also called the American buffalo) once numbered **roughly thirty million** on the Great Plains. Plains nations ate the meat, made lodges and clothing from the hide, and tools from the bone — an entire way of life built on the bison.

One must-memorize line: **bison ~30 million → near zero by the 1880s; cut off the bison = cut off the Plains nations' way of living.**

Key exam sentence (high-frequency DBQ): as the railroad pushed forward and commercial hunters poured in — some only for the hide, some only for sport, firing into herds from train windows at speed — the bison were shot down to nearly zero in a few decades.

Here's a **misconception trap**:
❌ "The bison's near-extinction was just an environmental accident of overhunting."
✅ The mass killing was **partly a deliberate military tool** — historians generally record that in the 1870s some federal army officers openly approved of and allowed the slaughter, believing wiping out the bison would break the Plains nations' basis of survival and force them to surrender.
(Note: this is a **historians' summary** — don't write that any named general "said" a specific line.)`,
        },
      },
    },

    {
      id: 'reservations-and-broken-treaties',
      termCn: '保留地与条约背弃',
      termEn: 'Reservations & Broken Treaties',
      defCn: '联邦政府和平原民族签了一份份条约，承诺某些土地"永远归原住民"。但每次那地上发现金矿或铁路要经过，条约就被改掉或撕毁。平原民族最终被强制迁进政府划定的保留地（reservation）——一块块缩了又缩、往往贫瘠的地。',
      defEn: 'The federal government signed treaties with Plains nations promising that certain lands "forever" belonged to them. But every time gold was found or a railroad needed to pass through, the treaty was changed or torn up. Plains nations were ultimately forced onto reservations — government-marked plots that kept shrinking, often barren.',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'plains-native-receiving-end',
        nodeIds: ['pn-n3', 'pn-n8'],
        xiaoweiNote: {
          cn: `联邦政府跟平原民族签**treaty（条约）**：纸上画线——这条线以西**永远归你们 Lakota**，白人保证不越界。

考点关键句：可只要那地上发现金子，或者铁路要从那儿过，**条约说毁就毁**——一份签了，过几年又改、又缩、又作废。条约一份份地破。

最有名的例子：圣地 **Black Hills（黑山）**——条约写着"永远归 Lakota"，1874 年附近发现金子，白人潮水一样涌进来，条约被撕掉。

被打垮以后，多数平原民族被赶进 **reservation（保留地）**：政府划的、缩了又缩、往往贫瘠的地块，靠政府发的 **rations（口粮）**过活，能不能吃饱看管事官员的脸色。

**老师的核心句：一张纸有没有用，不看上面写了什么，看谁拿着枪、谁来执行它。**`,
          en: `The federal government signed **treaties** with the Plains nations: lines drawn on paper — west of this line is **forever yours, the Lakota's**, and the white men guaranteed not to cross.

Key exam sentence: but the moment gold was found on that land, or a railroad wanted to pass through, **the treaty was broken** — signed, then a few years later altered, shrunk, voided. Treaty after treaty broken.

The most famous example: the sacred **Black Hills** — a treaty had said "forever the Lakota's," then gold was found nearby in 1874, white men poured in like a flood, and the treaty was torn up.

After being broken, most Plains nations were driven onto **reservations**: government-marked, shrunken, often barren plots, living on government **rations**, whether you ate your fill depending on the official in charge.

**Teacher's core line: whether a piece of paper is worth anything depends not on what is written on it, but on who holds the gun and who enforces it.**`,
        },
      },
    },

    {
      id: 'plains-indian-wars-little-bighorn-wounded-knee',
      termCn: '平原民族战争（小大角河 1876 与伤膝河 1890）',
      termEn: 'The Plains Indian Wars (Little Bighorn 1876 & Wounded Knee 1890)',
      defCn: '1860-1890 年代美国军队与平原民族之间的一系列冲突。两个最重要的时刻：① 1876 年 Little Bighorn——Lakota 与 Cheyenne 联合大败美军，是平原民族最响亮的军事胜利；② 1890 年 Wounded Knee——军队对手无寸铁的 Lakota 平民开枪，约 250-300 人死亡，是有组织抵抗的终点。',
      defEn: 'A series of conflicts between the U.S. Army and Plains nations from the 1860s through the 1890s. Two key moments: ① 1876 Little Bighorn — Lakota and Cheyenne warriors defeated the U.S. Army in the Plains nations\' loudest military victory; ② 1890 Wounded Knee — soldiers opened fire on unarmed Lakota civilians, killing roughly 250-300 people, marking the end of organized resistance.',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'CA HSS 8.5', 'CA HSS 5.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'plains-native-receiving-end',
        nodeIds: ['pn-n5', 'pn-n9'],
        xiaoweiNote: {
          cn: `这张卡我把**一头一尾两场仗**绑在一起背，因为它俩正好是平原民族战争"最高"和"最低"两个点。

**① Little Bighorn（小大角河之战），1876 年 6 月**：
Lakota 与 Cheyenne 的战士（精神核心是 **Sitting Bull 坐牛**，战场领袖之一是 **Crazy Horse 疯马**）全歼了美军中校 **George Custer 卡斯特**率领的第七骑兵一部。这是平原民族**最响亮的一次军事胜利**。

**② Wounded Knee（伤膝河屠杀），1890 年 12 月**：
野牛没了、人被困在保留地挨饿绝望，**Ghost Dance（鬼舞）**信仰传开（相信死者和野牛会回来）。政府当成要造反，军队在缴枪时开火，约 **250-300 名 Lakota**（很多是妇女和孩子）死在雪地。

考点必背的误解陷阱：
❌ "Little Bighorn 大胜说明平原民族扭转了局势。" → ✅ 那是一次**战术胜利**，在源源不断的人口、铁路、军队和野牛消失面前，改变不了最终结局。胜利只让结局来得慢一点。

记忆锚：**1876 最响亮的胜 → 1890 有组织抵抗的终点 + 同年宣布 frontier（边疆）关闭。**`,
          en: `On this card I tie the **two battles, the first and the last**, together — they are exactly the "highest" and "lowest" points of the Plains Indian Wars.

**① Little Bighorn, June 1876**:
Lakota and Cheyenne warriors (spiritual core: **Sitting Bull**; one field commander: **Crazy Horse**) wiped out part of the Seventh Cavalry led by U.S. lieutenant colonel **George Custer**. It was the Plains nations' **loudest military victory.**

**② Wounded Knee Massacre, December 1890**:
the bison gone, the people penned on reservations and starving in despair, the **Ghost Dance** faith spread (believers held the dead and the bison would return). The government took it as a coming revolt, the army opened fire while disarming them, and some **250-300 Lakota** (many women and children) died in the snow.

Must-know misconception trap:
❌ "The great victory at Little Bighorn shows the Plains nations turned the tide." → ✅ That was a **tactical victory**; against an endless stream of people, trains, soldiers, and the vanishing bison, it could not change the final outcome. The victory only made the ending come more slowly.

Memory anchor: **1876 loudest victory → 1890 end of organized resistance + the same year frontier was declared closed.**`,
        },
      },
    },

    {
      id: 'dawes-act-1887',
      termCn: '道斯法 1887',
      termEn: 'The Dawes Act of 1887',
      defCn: '1887 年美国通过的一部法律，打着"帮原住民融入社会"的旗号，把保留地的共有土地拆成一家一户的小块份地。实际效果是：每家分完之后，剩下的"多余"土地全部卖给白人，原住民拥有的土地总量大幅缩水，部落共同体也从根上被拆散。',
      defEn: 'A 1887 U.S. law that, under the banner of "helping Native people fit into society," broke reservation land held in common into individual household plots. In practice, the leftover "surplus" land was sold to white settlers, dramatically shrinking total Native landholdings and dismantling tribal communities from the inside.',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'plains-native-receiving-end', nodeId: 'pn-n8', context: 'Lakota 讲 Dawes Act「为你们好」拆共有保留地、剩地卖给白人' },
          { lens: 'railroad-baron', nodeId: 'rb-n8', context: '铁路巨头点出 Dawes Act 是「先逼进保留地，再用为你们好的法律拆开拿走」' },
        ],
      },
      standaloneText: {
        cn: `**Dawes Act（道斯法，1887）**，又叫 **General Allotment Act（一般分地法）**。它是 APUSH Period 6 的必考点，需要单独掌握。

它表面上很"善意"：把保留地这种**共有（held in common）**的土地，拆成一块块**个人份地（allotment，典型 160 英亩/户）**，分给每个原住民家庭一份，让他们学白人那样，一家一户当**个体农民**，融入社会。

听起来像帮他们融入，对吧？可真正的效果是两层剥夺：
1. **土地继续流失**：分完每家那一份之后，剩下的大片"多余"土地，被拿出来**卖给白人定居者和公司**。随后几十年，原住民手里的土地总量大幅缩水。
2. **从根上瓦解部落共同体**：平原民族的活法本就是共有土地、一起跟野牛迁徙。Dawes Act 把"大家"拆成一个个孤零零的"一家"——这等于从里到外把一个民族拆开。

在铁路巨头那条故事线里，赢家自己说破了这套路子："先用枪和饥饿把人逼进保留地，再用一部'为你们好'的法律，把保留地也拆开拿走。"

⚠️ 别搞混：**reservation（保留地）= 把人圈进去**；**Dawes Act = 再把圈起来的地拆开拿走**。两步是先后关系，AP 常一起考。Dawes 体制直到 **1934 年的 Indian Reorganization Act** 才被部分扭转。`,
        en: `**The Dawes Act (1887)**, also called the **General Allotment Act**, is a required point for APUSH Period 6 — master it on its own.

On its face it looked "benevolent": take reservation land, which was **held in common**, and break it into **individual allotments (typically 160 acres per household)**, giving each Native family a share so they could learn to be **individual farmers**, one household at a time, and fit into society.

Sounds like helping them fit in, right? But the real effect was a two-layer dispossession:
1. **Continued land loss**: after each family's share was parceled out, the large "surplus" of land was put up for **sale to white settlers and companies**. Over the following decades, the total land in Native hands shrank dramatically.
2. **Dismantling the tribal community at the root**: the Plains nations' way of life was holding land in common and migrating together with the bison. The Dawes Act tried to break "all of us" into one lonely "single family" after another — taking a people apart from the inside out.

In the railroad baron's storyline, the winner himself names the pattern: "first you drive people onto reservations with guns and hunger, then with a law 'for your own good' you break the reservations apart and take those too."

⚠️ Don't mix it up: **reservation = pen the people in**; **Dawes Act = then break the penned land apart and take it away.** The two steps are sequential, and AP often tests them together. The Dawes system wasn't partly reversed until the **1934 Indian Reorganization Act.**`,
      },
      xiaoweiNote: {
        cn: `这张卡我一开始最容易和"保留地"搞混。老师说记住一个**时间顺序 + 一个反讽**就稳了：
**先 reservation（圈进去）→ 后 Dawes Act 1887（把圈起来的地再拆开拿走）。**

反讽点（DBQ 爱用）：一部打着"为原住民好、帮他们融入"旗号的法律，实际效果是**又一次大规模夺地**。

口诀：**Dawes = "为你好" 包着的剥夺**——好听的名字，藏着真实的代价。`,
        en: `This card I most easily confused with "reservation" at first. Remember one **time order + one irony** and you're set:
**first reservation (pen them in) → then Dawes Act 1887 (break the penned land apart and take it away).**

The irony (DBQs love it): a law flying the banner of "for the Natives' good, helping them fit in" had, in effect, **another mass land grab.**

Mnemonic: **Dawes = a dispossession wrapped in "for your own good"** — a fine name hiding a real cost.`,
      },
    },

    {
      id: 'sand-creek-massacre-1864',
      termCn: 'Sand Creek Massacre（沙溪大屠杀，1864）',
      termEn: 'The Sand Creek Massacre (1864)',
      defCn: '1864 年 11 月 29 日，科罗拉多领地的奇文顿上校率约 700 名民兵，在清晨突袭了已按政府要求安置在 Sand Creek 河边的 Cheyenne（夏延）和 Arapaho（阿拉帕霍）营地。营地升起美国国旗和白旗，但约 150-200 人（多数是妇女、老人和孩子）仍被杀害。这是 AP 点名的必考事件。',
      defEn: 'On November 29, 1864, Colonel John Chivington led about 700 militia in a dawn attack on a Cheyenne and Arapaho camp beside Sand Creek in the Colorado Territory — a camp that had already followed the government\'s relocation orders. Despite flying an American flag and a white flag, about 150-200 people were killed, most of them women, elders, and children. A required AP exam event.',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'AP CED named event', 'CA HSS 8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'plains-native-receiving-end', nodeId: 'pn-n3', context: 'Lakota 讲联邦对平原民族的暴力时提到此类屠杀作为背景' },
        ],
      },
      standaloneText: {
        cn: `**Sand Creek Massacre（沙溪大屠杀）** 是 AP 考试点名的必考事件，故事里只作了背景，需单独掌握。

**时间与经过（1864 年 11 月 29 日）**：
科罗拉多领地的 **Colonel John Chivington（奇文顿上校）** 率领约 700 名民兵，在清晨突袭了位于 Sand Creek（沙溪）河边、已接受政府安置的 **Cheyenne（夏延族）和 Arapaho（阿拉帕霍族）**营地。营地升起美国国旗和白旗——都没用。约 **150-200 人**被杀（多数是妇女、老人和孩子）。遗体被肢解，士兵把头皮和遗骸当战利品带回。

**为什么 AP 重点考它？**
1. **打破"开战有因"的说法**：那个营地已按政府要求集中安置，还升起了表示投降的白旗——这不是"战斗"，是**屠杀**。
2. **燃起连锁冲突**：Sand Creek 激怒了平原民族，是此后 1860-70 年代一系列剧烈冲突（包括 1876 年 Little Bighorn）的导火索之一。
3. **国会的定性**：事后国会调查明确谴责奇文顿的行动是"无法辩护的残行"——这在当时极为罕见，留下了官方的书面定性。

**考点关键句**：Sand Creek 是平原民族战争中最典型的**政府暴力针对已接受安置平民**的案例。AP 用它考"暴力打的是谁、动机是什么"，而不是简单的"双方打仗"。

⚠️ 别把 Sand Creek (1864) 和 Wounded Knee (1890) 搞混：
Sand Creek = 科罗拉多、Cheyenne/Arapaho、Chivington、1864；
Wounded Knee = 南达科他、Lakota、鬼舞镇压、1890。两件事都要分开背。`,
        en: `**The Sand Creek Massacre** is explicitly required on the AP exam — the story only buries it in background, so master it on its own.

**When and what happened (November 29, 1864)**:
**Colonel John Chivington** of the Colorado Territory led about 700 militia in a dawn attack on a camp of **Cheyenne and Arapaho** who had already accepted government relocation, camped beside Sand Creek. The camp flew an American flag and a white flag — neither mattered. About **150-200 people** were killed, most of them women, elders, and children. Bodies were mutilated; soldiers carried back scalps and body parts as trophies.

**Why does AP stress it?**
1. **Breaks the "justified combat" narrative**: the camp had done exactly what the government asked, gathered in place, and raised the surrender flag — this was not "a battle"; it was a **massacre**.
2. **Ignited a chain of conflicts**: Sand Creek enraged the Plains nations and was one of the ignition points for the more intense conflicts of the 1860s-70s, including the 1876 Little Bighorn.
3. **Congressional verdict**: a later congressional investigation explicitly condemned Chivington's action as "a foul and dastardly massacre" — rare for the era, and leaving an official documented verdict.

**Key exam sentence**: Sand Creek is the clearest example in the Plains Indian Wars of **government violence against civilians who had already accepted relocation**. AP uses it to test analysis of who the targets were and what the intent was — not a simple "two sides fought" story.

⚠️ Don't confuse Sand Creek (1864) and Wounded Knee (1890):
Sand Creek = Colorado, Cheyenne/Arapaho, Chivington, 1864;
Wounded Knee = South Dakota, Lakota, Ghost Dance crackdown, 1890. Memorize them separately.`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里没展开，单独背。我用**两道时间轴锚点**把它和 Wounded Knee 分开：
①1864 Sand Creek = 奇文顿 + 夏延/阿拉帕霍 + 升了白旗还被杀；
②1890 Wounded Knee = 鬼舞 + Lakota + 大雪地。

考点句：**政府暴力打的是已接受安置的平民，不是战场上的武装力量。**`,
        en: `This card needs separate memorizing. I use **two timeline anchors** to keep it apart from Wounded Knee:
① 1864 Sand Creek = Chivington + Cheyenne/Arapaho + flew a white flag and were still killed;
② 1890 Wounded Knee = Ghost Dance + Lakota + deep snow.

Exam sentence: **government violence was aimed at civilians who had already accepted relocation, not an armed force on a battlefield.**`,
      },
    },

    {
      id: 'sitting-bull-named-figure',
      termCn: 'Sitting Bull（坐牛）',
      termEn: 'Sitting Bull',
      defCn: 'Hunkpapa Lakota 的领袖与圣人（约 1831-1890）。他是 1870-80 年代平原民族抵抗运动的精神核心：拒绝出售黑山、1876 年 Little Bighorn 大战前举行太阳舞鼓舞战士、带族人流亡加拿大四年、最终 1890 年被杀在保留地。',
      defEn: 'A Hunkpapa Lakota leader and holy man (c. 1831-1890). He was the spiritual heart of Plains resistance in the 1870s-80s: refused to sell the Black Hills, performed a Sun Dance before the 1876 Little Bighorn to inspire the warriors, led his people in exile to Canada for four years, and was killed on the reservation in 1890.',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'AP CED key figure', 'CA HSS 8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'plains-native-receiving-end',
        nodeIds: ['pn-n5', 'pn-n9'],
        xiaoweiNote: {
          cn: `Sitting Bull 在 Little Bighorn 那张卡里出现了，但 AP 要求能单独写出他——不能只靠一句捎带。

**坐牛（Hunkpapa Lakota，约 1831-1890）**是平原民族抵抗运动的精神核心，不是单纯的战士：
- **圣人（holy man）+ 领袖双重身份**：Lakota 文化里，大圣人的精神权威往往超过战争领袖。1876 年 Little Bighorn 前，他举行太阳舞（Sun Dance），预见了打败卡斯特的异象——鼓舞了全营士气。
- **拒绝黑山出售**：1868 年《拉勒米堡条约》写明 Black Hills（黑山）属于 Lakota。1874 年发现金子、白人涌入后，政府要强买，他拒绝：「我的土地不卖，它是我血液的一部分。」
- **流亡加拿大（1877-1881）**：Little Bighorn 大胜之后联邦军大规模围剿，他率部出走加拿大避难四年，最终带族人南返——不是因为打败了，而是因为族人在饥饿中支撑不下去了。
- **在保留地被杀（1890 年 12 月 15 日）**：Wounded Knee 屠杀两周前，政府担心他支持鬼舞运动引发暴动，派部落警察逮捕，冲突中被射杀。

**考点关键句**：Sitting Bull 代表的不是一个人，是 Lakota 抵抗"宁饥饿不投降、宁死不卖黑山"的原则立场。

AP 爱用他考「一个人怎么体现那个时代的更大冲突」。记住他的轨迹：拒绝（黑山）→ 胜利（Little Bighorn 1876）→ 流亡（加拿大 1877-81）→ 被迫返回 → 被杀（1890）。`,
          en: `Sitting Bull shows up in the Little Bighorn card, but AP requires you to write about him alone — you can't just catch him in passing.

**Sitting Bull (Hunkpapa Lakota, c. 1831-1890)** was the spiritual core of Plains resistance, not just a warrior:
- **Holy man + leader, both roles**: in Lakota culture a great holy man often carried more spiritual authority than a war chief. Before the 1876 Little Bighorn he held a Sun Dance and received a vision of defeating Custer — it galvanized the whole camp.
- **Refused to sell the Black Hills**: the 1868 Fort Laramie Treaty stated the Black Hills belonged to the Lakota. After gold was found in 1874 and white men flooded in, the government tried to force a sale. He refused: "My land is not for sale; it is a part of my blood."
- **Exile in Canada (1877-1881)**: after the great victory, the U.S. Army launched a massive campaign and he led his people out to Canada for four years. He finally returned to surrender — not because they were defeated in battle, but because the people could not endure starvation.
- **Killed on the reservation (December 15, 1890)**: two weeks before Wounded Knee, the government feared he was supporting the Ghost Dance movement; tribal police were sent to arrest him and he was shot in the struggle.

**Key exam sentence**: Sitting Bull represents not one man but the Lakota principle of "starvation before surrender, death before selling the Black Hills."

AP uses him to test how an individual embodies a larger conflict of the era. Keep his arc: refusal (Black Hills) → victory (Little Bighorn 1876) → exile (Canada 1877-81) → forced return → killed (1890).`,
        },
      },
    },

    {
      id: 'boarding-schools-assimilation',
      termCn: '印第安寄宿学校与同化政策（"Kill the Indian, save the man"）',
      termEn: 'Indian Boarding Schools & Assimilation Policy ("Kill the Indian, save the man")',
      defCn: '1879 年起，美国政府强制把原住民儿童送到远离保留地的寄宿学校，剪掉他们的长发、禁止他们说母语、强迫他们改用英语名字、信基督教。这套政策的口号是"Kill the Indian, save the man"——不是杀人，是要把一个人身上的原住民文化彻底抹掉。',
      defEn: 'Starting in 1879, the U.S. government sent Native children to boarding schools far from their reservations, cutting their hair, banning their languages, forcing them to take English names, and converting them to Christianity. The slogan was "Kill the Indian, save the man" — not killing bodies, but erasing Native culture from a person entirely.',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'plains-native-receiving-end', nodeId: 'pn-n8', context: 'Lakota 讲保留地管控时提到语言和文化被强制剥夺的压力' },
        ],
      },
      standaloneText: {
        cn: `**印第安寄宿学校政策（Indian boarding school policy）**和 Dawes Act 同时代，AP 把它们合起来考"联邦怎样系统性地消灭原住民文化认同"。

**核心机制**：
1879 年，前陆军上尉 **Richard Henry Pratt** 在宾夕法尼亚 Carlisle 创办了 **Carlisle Indian Industrial School**，他的目标一句话概括：**"Kill the Indian, save the man."**（杀死印第安人，拯救那个人。）他的意思不是杀人，而是要把一个人身上的原住民身份彻底抹掉，把他改造成白人社会里的顺民。

**学校里发生什么**：
- 儿童（有时被强制带走，有时以食物和安全为诱饵送来）被送到远离保留地的学校。
- **剪掉长发**——在许多原住民文化里，长发只在哀悼时才剪。这是第一刀剥夺身份。
- **禁止说母语**：被抓到说原住民语言就受罚。
- 强制穿欧式服装、改用英语名字、信基督教、学农活和家务（男做农工，女做洗衣/烹饪）。
- 死亡率极高——疾病、恶劣条件、惩罚。近年大量研究（包括 2022 年联邦调查报告）记录了数以千计在校死亡的儿童，许多葬在校园无名墓地。

**考点逻辑**：寄宿学校和 Dawes Act 是同一套"同化"逻辑的两条腿——Dawes 在外（夺地、拆部落共有）、寄宿学校在内（夺语言、夺身份）。两者加起来是"不用屠杀，用制度消灭"。

**考点关键句**：**联邦政府通过寄宿学校系统性地剥夺原住民儿童的语言、文化与部落认同**，是 APUSH Period 6"联邦政策对原住民的多重影响"这个大主题的核心证据之一。`,
        en: `**The Indian boarding school policy** ran alongside the Dawes Act. AP tests them together as evidence of how the federal government systematically destroyed Native cultural identity.

**The core mechanism**:
In 1879, former army captain **Richard Henry Pratt** founded the **Carlisle Indian Industrial School** in Pennsylvania. His goal in one line: **"Kill the Indian, save the man."** He meant not killing bodies, but erasing the "Native-ness" from a person entirely and remaking them as a docile member of white society.

**What happened in these schools**:
- Children (sometimes forcibly removed, sometimes lured with food and safety) were sent to schools far from the reservations.
- **Hair cut off** — in many Native cultures, hair is only cut in mourning. This was the first stroke of identity stripping.
- **Native languages banned**: caught speaking one, you were punished.
- Forced into European clothing, given English names, converted to Christianity, trained in farm labor and domestic work (boys: farming; girls: laundry and cooking).
- Death rates were very high — disease, harsh conditions, punishment. Recent research (including a 2022 federal investigation) has documented thousands of children who died in these schools, many buried in unmarked graves on school grounds.

**Exam logic**: boarding schools and the Dawes Act are two legs of the same "assimilation" logic — Dawes works from outside (taking land, breaking tribal communal holding); the boarding school works from inside (taking language, taking identity). Together: "erase through institutions, not through massacre."

**Key exam sentence**: **the federal government used the boarding school system to strip Native children of their language, culture, and tribal identity** — core evidence for the APUSH Period 6 theme of federal policy's multiple impacts on Native peoples.`,
      },
      xiaoweiNote: {
        cn: `这张卡单独背。AP DBQ 爱拿它和 Dawes Act 配对考。

压成一句：**"Kill the Indian, save the man" = 1879 Carlisle 寄宿学校 = 剪发、禁母语、改名、强制基督教。**

记忆锚：和 Dawes Act 是同一套逻辑的两面——一个夺地（外），一个夺身份（内）。别只记 Dawes，把寄宿学校和它绑在一起背，AP 有时问"哪些政策共同打击了原住民的文化认同"。`,
        en: `Memorize this card separately. AP DBQs often pair it with the Dawes Act.

One-liner: **"Kill the Indian, save the man" = 1879 Carlisle boarding school = cut hair, ban the mother tongue, rename, force Christianity.**

Memory anchor: two faces of the same logic as the Dawes Act — one takes land (external), one takes identity (internal). Don't memorize Dawes alone; pair the boarding schools with it, because AP sometimes asks which policies together targeted Native cultural identity.`,
      },
    },

    {
      id: 'late-qing-self-strengthening-parallel',
      termCn: '同时代的中国：晚清与洋务运动（结构对照）',
      termEn: 'China at the Same Time: Late Qing & the Self-Strengthening Movement',
      defCn: '1869 年，美国敲下金道钉的同一年，中国正处晚清，曾国藩、李鸿章等人推行洋务运动（自强运动）。两国都在围绕"铁路/现代化"做大事——但一个是向内陆扩张，一个是在外敌压力下守住疆土，含义几乎相反。',
      defEn: 'In 1869, the very year America drove the golden spike, China was in the late Qing era, with leaders like Zeng Guofan and Li Hongzhang pushing the Self-Strengthening Movement. Both countries were doing big things around railroads and modernization — but one was expanding inland while the other was defending against foreign powers. The meaning of a railroad was almost opposite in each case.',
      standardRef: ['APUSH comparative context', 'cross-civilization parallel'],
      examFrequency: 'context',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'railroad-baron', nodeId: 'rb-n3', context: '铁路巨头用「进步 / 文明」给扩张正名 — 同一年代两国都在围绕「铁路 / 现代化」做事，含义却几乎相反' },
        ],
      },
      standaloneText: {
        cn: `这张卡老师特意补的——美国敲金道钉的同一年，中国在干什么？

**时间对齐**：1869 年是**清同治八年**，正值**晚清**。第二次鸦片战争（1860）刚结束，太平天国刚被镇压（1864），曾国藩、李鸿章、左宗棠等人正在推行**洋务运动**（又叫**自强运动**）——办江南制造总局、福州船政局，喊"师夷长技以制夷"，也开始修电报、建轮船，后来修出中国第一条运营铁路（1881 年唐胥铁路）。

**结构对照（并列，不评谁高谁低）**：
- **铁路的政治含义几乎相反**：美国把横贯铁路当作国家一体化 + 向内陆"无主之地"扩张的引擎，由私人公司 + 联邦补贴 + 赠地驱动；晚清的铁路与洋务，是在列强压力下**自上而下、由官府主导的防御性自强**，目的更多是"保住既有疆土与王朝"，而非向外殖民式扩张。一边是**进取扩张**，一边是**救亡图存**。
- **土地与边疆的处理不同**：美国用宅地法 + 保留地 + Dawes 这套"法律 + 军事"工具，系统地把平原民族从其土地上清除、再分配给定居者；同期清廷在西北、东北是另一套以朝廷为中心的边疆治理（如新疆建省 1884），逻辑、对象、手段都不同，不能简单类比。

⚠️ **不能**说美国"先进开拓"、晚清"落后挨打"；也**不能**反过来把美国说成纯粹"侵略者"、把晚清美化。两套制度在各自处境里回应各自的问题——一个在向内陆扩张中摧毁了原住民，一个在列强环伺中艰难自强——各有其逻辑、成就与代价。`,
        en: `This card is an extra "same-era cross-section" — in the very year America drove the golden spike, what was China doing?

**Time alignment**: 1869 was the **eighth year of the Tongzhi reign**, in the **late Qing**. The Second Opium War (1860) had just ended, the Taiping Rebellion had just been put down (1864), and Zeng Guofan, Li Hongzhang, and Zuo Zongtang were carrying out the **Self-Strengthening Movement** — founding the Jiangnan Arsenal and the Fuzhou Navy Yard, calling to "learn the superior techniques of the foreigners to resist them," building telegraphs and steamships, and later China's first operating railway (the Tangshan-Xugezhuang line, 1881).

**Structural parallel (side by side, no ranking)**:
- **The political meaning of the railroad was almost opposite**: America treated the transcontinental railroad as an engine of national unification plus expansion into inland "unclaimed land," driven by private companies, federal subsidies, and land grants; the late Qing's railroads and reforms were a **top-down, government-led defensive self-strengthening** under foreign pressure, aimed more at "holding existing territory and the dynasty" than at colonial expansion outward. One was **forward expansion**, the other **survival under threat.**
- **Land and frontier handled differently**: America used the Homestead Act, reservations, and Dawes (a "law + military" toolkit) to systematically remove the Plains nations from their land and redistribute it to settlers; the Qing court in the northwest and northeast ran a different, court-centered frontier governance (such as making Xinjiang a province in 1884) — different logic, subjects, and methods, not to be simply equated.

⚠️ **Do not** say America was "advanced and pioneering" while the late Qing was "backward and beaten"; and **do not** flip it the other way and cast America as a pure "aggressor" while whitewashing the late Qing. Both systems answered their own problems in their own circumstances — one destroyed Native peoples while expanding inland, one strained to strengthen itself while surrounded by foreign powers — each with its own logic, achievements, and costs.`,
      },
      xiaoweiNote: {
        cn: `这张卡不考你"哪国更强"，考的是**会不会做结构对照而不下高低判断**。

我的记忆锚：**同一年（1869），美国修铁路是"往外扩"，晚清修铁路是"往里保"。**
一个用铁路 + 法律向内陆扩张、清除原住民；一个在列强压力下自上而下地自强、想保住疆土与王朝。

关键不是评谁高谁低，而是看清：**同一样东西（铁路），在不同处境里，含义可以几乎相反。**`,
        en: `This card doesn't test "which country was stronger" — it tests whether you can draw a **structural parallel without ranking them.**

My memory anchor: **in the same year (1869), America built railroads to "expand outward," the late Qing built them to "hold inward."**
One used rails and laws to expand inland and push out Native peoples; the other strained, top-down, to strengthen itself under foreign pressure and hold its territory and dynasty.

The point isn't judging who's higher or lower, but seeing clearly: **the same thing (a railroad) can mean almost opposite things in different circumstances.**`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1869 年那根金道钉，一边把刚打完内战、差点散掉的国家缝成一体，
让几百万普通人有了土地和活路；一边铺在平原民族世代的家园上，几十年里把约 3000 万头野牛打到近零，
一份份"永远归你们"的条约被撕掉，整个民族被赶进保留地。

你觉得这段历史应该被记成"一项伟大的成就"，还是"一场彻底的毁灭"？
用至少两条具体证据支持你的判断。`,
      en: `The 1869 golden spike stitched into one a country that had just fought a civil war and
nearly come apart, giving millions of ordinary people land and a living; and it was laid on the
Plains nations' home of generations, shooting roughly thirty million bison down to nearly zero in
a few decades, treaty after "forever yours" treaty torn up, a whole people driven onto reservations.

Should this history be remembered as "a great achievement" or "a total destruction"? Support your
judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "成就"这边的证据：全世界第一条横贯大陆铁路、几个月旅程压成几天、宅地法给穷人 160 英亩翻身、芝加哥成全国肉粮中心。
- "毁灭"这边的证据：野牛 ~3000万→近零（部分蓄意）、条约一份份被撕（黑山发现金子）、Dawes Act 拆走保留地、Wounded Knee 屠杀。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——**看见矛盾但还能给出判断**，这才是 AP 想要的。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which side you pick.
- Evidence for "achievement": the world's first transcontinental railroad, a months-long journey cut to days, the Homestead Act's 160 acres remaking poor families' fortunes, Chicago becoming the nation's meat-and-grain center.
- Evidence for "destruction": bison ~30 million → near zero (partly deliberate), treaty after treaty torn up (gold in the Black Hills), the Dawes Act taking reservation land, the Wounded Knee massacre.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — **seeing the contradiction but still making a judgment** is exactly what AP wants.`,
      conceptsActivated: ['transcontinental-railroad-1869', 'bison-near-extermination', 'reservations-and-broken-treaties'],
    },
    {
      id: 'q2',
      cn: `白人把西部叫"空地"、把 160 英亩叫"免费土地"。可那地一直有人住——是平原民族。
"免费"对拓荒户是机会，对铁路老板是财富，对平原民族是失去一切。

"免费土地""进步""文明"这些好听的词，是怎么让"夺取"看起来像"建设"的？
如果你是 AP 老师，要出一道题考"语言怎么替代价打掩护"，你会怎么提问？
请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `The white men called the West "empty land" and the 160 acres "free land." But that land
always had people living on it — the Plains nations. "Free" was opportunity to the homesteader,
wealth to the railroad boss, and the loss of everything to the Plains nations.

How did fine-sounding words like "free land," "progress," and "civilization" make "taking" look
like "building"? If you were an AP teacher writing a question on "how language covers for a cost,"
how would you phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以从那个法律词切入——宅地法原文写"unappropriated public lands（未被占用的公共土地）"，
一个词就把"有人住的家"定义成了"没人要的空地"。三个视角都讲到那句"免费——免的是谁的费"。
你的题目可以让学生比较：同一片地，对拓荒户/铁路老板/平原民族分别意味着什么？
为什么同一个"免费"，会有三个完全不同的结果？语言在中间做了什么手脚？`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through the legal phrase — the Homestead Act's text says "unappropriated public lands," and that one phrase defined "a home where people lived" as "empty land no one wanted." All three stories in this lesson ask "free — free at whose cost?" Your question could have students compare what the same land meant to the homesteader, the railroad boss, and the Plains nations — why does one word, "free," produce three completely different outcomes? What did language do in between?`,
      conceptsActivated: ['homestead-act-1862', 'reservations-and-broken-treaties', 'transcontinental-railroad-1869'],
    },
    {
      id: 'q3',
      cn: `打垮平原民族的，最后不是哪一场战役——是饥饿。军方有人算准了死穴：
打光野牛，断了生计，不用正面屠杀，就能逼一个民族投降。
之后又用一部"为你们好"的 Dawes Act，把保留地也拆开拿走。

你同意"毁掉一个民族，可以不靠流血的屠杀，而靠系统地摧毁他们赖以为生的东西 + 用'为你好'的法律拆散他们"
这个判断吗？这种"不流血的毁灭"，比战场上的杀戮更可怕，还是更容易被忽视？
用本课里一个具体机制（灭牛 / 保留地 / Dawes Act）支持你的看法。`,
      en: `What broke the Plains nations in the end was not any one battle — it was hunger. Men in the
army reckoned out the fatal weakness: shoot out the bison, cut off the living, and without open
slaughter you can force a people to surrender. Then, with a Dawes Act "for your own good," they
broke the reservations apart and took them too.

Do you agree with the judgment "you can destroy a people not by bloody slaughter but by
systematically destroying what they live on + breaking them apart with a law 'for your own good'"?
Is this "bloodless destruction" more terrifying than battlefield killing, or more easily
overlooked? Support your view with one specific mechanism from this lesson (bison killing /
reservations / the Dawes Act).`,
      hintCn: `提示：先把三个机制分清楚——
灭牛 = 断生计（用饥饿逼降）；reservation = 把人圈进去；Dawes Act 1887 = 把圈起来的地再拆开拿走。
这三步是一条因果链，不是三件无关的事。
进阶思考：为什么"灭牛逼降"在当时几乎没人当成"屠杀"？因为它不流血、还能裹上"开发""为你好"的名字。
AP 看的是你能不能用一个真实机制，把"不流血的毁灭"这个抽象论点"钉"在证据上。
注意：灭牛的军方意图要写成**史学概述**（"史学界普遍记述"），别伪造某将领的逐字原话。`,
      hintEn: `Hint: first keep the three mechanisms straight —
bison killing = cutting off the living (forcing surrender by hunger); reservation = penning the
people in; Dawes Act 1887 = breaking the penned land apart and taking it. These three steps are one
causal chain, not three unrelated things.
Going deeper: why did almost no one at the time call "killing the bison to force surrender" a
"slaughter"? Because it was bloodless and could be wrapped in names like "development" and "for your
own good." AP wants you to "pin" the abstract claim of "bloodless destruction" to evidence with one
real mechanism. Note: write the army's intent behind the bison killing as a **historians' summary**
("historians generally record"), not a fabricated verbatim quote from a named general.`,
      conceptsActivated: ['bison-near-extermination', 'dawes-act-1887', 'reservations-and-broken-treaties'],
    },
  ],
};

export default notebook;
