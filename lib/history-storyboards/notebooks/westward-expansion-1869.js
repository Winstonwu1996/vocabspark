// ─── 同伴笔记本架构 v1 · Westward Expansion 1869 ─────────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
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
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习 schema 脚手架，不剧透）───────
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
        roleCn: '横贯大陆铁路的大老板兼西进鼓吹者（复合典型，不绑单一真人），拿联邦补贴 + 沿线赠地，用"空地/进步/文明"给夺地正名',
        roleEn: 'A transcontinental-railroad boss and westward-expansion booster (a composite type, not one real person); took federal subsidies plus land grants and used "empty land / progress / civilization" to justify the taking',
        mustKnow: true,
        audioKey: 'railroad-baron',
      },
      {
        nameCn: '坐牛',
        nameEn: 'Sitting Bull',
        ipa: '/ˈsɪtɪŋ bʊl/',
        roleCn: 'Lakota（拉科塔）领袖与圣人，1876 年 Little Bighorn 前后平原民族抵抗的精神核心，拒绝交出黑山、拒绝迁入保留地',
        roleEn: 'A Lakota leader and holy man, the spiritual core of Plains resistance around the 1876 Little Bighorn; refused to give up the Black Hills or move onto the reservation',
        mustKnow: true,
        audioKey: 'sitting-bull',
      },
      {
        nameCn: '疯马',
        nameEn: 'Crazy Horse',
        ipa: '/ˈkreɪzi hɔːrs/',
        roleCn: 'Lakota 战争领袖，1876 年 Little Bighorn 战场上的关键指挥者之一，平原民族军事抵抗的象征',
        roleEn: 'A Lakota war leader, one of the key field commanders at the 1876 Little Bighorn, a symbol of Plains military resistance',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '乔治·卡斯特',
        nameEn: 'George Custer',
        ipa: '/dʒɔːrdʒ ˈkʌstər/',
        roleCn: '美军中校，1876 年 Little Bighorn 率第七骑兵一部冲入 Lakota 与 Cheyenne 营地，全军覆没',
        roleEn: 'A U.S. lieutenant colonel who led part of the Seventh Cavalry into the Lakota and Cheyenne camp at the 1876 Little Bighorn and was wiped out with his entire column',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '修铁路的华工',
        nameEn: 'Chinese Railroad Workers',
        ipa: null,
        roleCn: 'Central Pacific（中央太平洋）加州段主力（合成典型），凿 Sierra Nevada 隧道、承担最险工段，工钱比白人低、伤亡无人统计、被从庆典画面抹去',
        roleEn: 'The main labor force on the Central Pacific\'s California stretch (a composite type); tunneled the Sierra Nevada, took the most dangerous work, were paid less than white workers, their deaths uncounted, and were erased from the celebration picture',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '追免费土地的拓荒户',
        nameEn: 'Homesteading Family',
        ipa: null,
        roleCn: '东部无地穷人（合成典型），靠 1862 Homestead Act 住满 5 年种起 160 英亩免费地翻身，"免费"背后是另一种狠',
        roleEn: 'Land-poor families from the East (a composite type) who turned their lives around on 160 acres of free land under the 1862 Homestead Act after living and farming five years; behind the word "free" lay a brutality of its own',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '一个平原上的拉科塔人',
        nameEn: 'A Lakota of the Plains',
        ipa: null,
        roleCn: '未具名类型化合成人物，承载整段"被摧毁"经验：野牛、土地、活法被夺；替"免费"付全部费的人',
        roleEn: 'An unnamed composite figure who carries the whole experience of "being destroyed": bison, land, and way of life taken; the one who paid the entire cost of "free"',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'transcontinental-railroad-1869',
      termCn: '横贯大陆铁路（1869 金道钉接轨）',
      termEn: 'The Transcontinental Railroad (1869 Golden Spike)',
      standardRef: ['APUSH Period 6 — Topic 6.3 Westward Migration', 'CA HSS 8.5', 'CA HSS 5.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'railroad-baron',
        nodeIds: ['rb-n1', 'rb-n5'],
        xiaoweiNote: {
          cn: `这个我读过！铁路巨头那一遍第 1 节就是接轨那一刻，第 5 节讲它有多了不起。
**1869 年 5 月 10 日**，在犹他州 **Promontory Summit（普罗蒙特里峰）**，
一根 **golden spike（金道钉）**砸下去，东西两段铁轨第一次接通，电报一声"成了"传遍全国。

我把考点压成一句必背：
**横贯大陆铁路 1869 年建成 = 全世界第一条横穿整片大陆的铁路。**

为什么修得这么疯？因为 1862 年的 **Pacific Railway Act（太平洋铁路法）**——
政府按里程给钱，还把沿线大片土地（land grant，赠地）送给铁路公司。
修得越快越长，拿得越多。Central Pacific（华工为主）从西往东，Union Pacific 从东往西，两边对冲。

考点关键句：铁路把几个月的旅程压成几天，让城镇沿线爆发式生长、芝加哥成全国肉粮中心，
把整个国家经济重新拼了一遍。这是真实的、巨大的成就——但同一条线，也铺在别人世代的家园上。`,
          en: `I read this! The Railroad Baron's Lens Node 1 is the joining moment, and Node 5 is
how extraordinary it was. **On May 10, 1869**, at **Promontory Summit** in Utah, a
**golden spike** came down, the eastern and western halves of track met for the first time,
and the telegraph clicked "done" across the whole nation.

I compress the exam point into one must-memorize line:
**the transcontinental railroad was completed in 1869 = the world's first railroad across an
entire continent.**

Why build it so frantically? Because of the 1862 **Pacific Railway Act** — the government
paid by the mile and gave the companies huge tracts of land along the route (land grants).
The faster and longer you built, the more you took. The Central Pacific (mostly Chinese
labor) built east, the Union Pacific built west, the two racing toward each other.

Key exam sentence: the railroad squeezed a months-long journey into days, made towns explode
along the line, turned Chicago into the nation's meat-and-grain center, and reassembled the
whole country's economy. A real, enormous achievement — but the same line was laid on land
that had been others' home for generations.`,
        },
      },
    },

    {
      id: 'homestead-act-1862',
      termCn: '宅地法 1862',
      termEn: 'The Homestead Act of 1862',
      standardRef: ['APUSH Period 6 — Topic 6.3 Westward Migration', 'CA HSS 8.5', 'CA HSS 5.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'railroad-worker-or-homesteader',
        nodeIds: ['wh-n3', 'wh-n4'],
        xiaoweiNote: {
          cn: `华工·拓荒户那一遍第 3 节讲拓荒户怎么被它吸引来，第 4 节是"你就是 TA"的拷问。
**1862 年的 Homestead Act（宅地法）**像一道光：去西部挑一块没人登记的公共土地，
**住满 5 年、把它种起来，就能几乎免费拿到 160 英亩。**

我把它压成一句必背：
**Homestead Act = 1862 = 住满 5 年 + 种起来 → 160 英亩几乎免费。**

考点关键句：宅地法的确给东部无地穷人一个改命的机会（草原变麦田，美国成世界粮仓）。
可这里有一个老师反复纠正的**误解陷阱**：
❌ "160 英亩是真正'免费'的土地。"
✅ 它对定居者免费，前提是先用条约、军队、饥饿把平原民族从那地上清走——**费用由原住民付。**

记忆锚：法律原文写"unappropriated public lands（未被占用的公共土地）"——
一个法律词，把"有人住的家"定义成了"没人要的空地"。`,
          en: `The Worker/Homesteader Lens Node 3 shows how the homesteader was drawn in, and Node 4
is the "now you are them" reckoning. **The 1862 Homestead Act** was like a shaft of light: go
west, pick a plot of unregistered public land, **live on it five years and farm it, and 160
acres were yours almost free.**

I compress it into one must-memorize line:
**Homestead Act = 1862 = live 5 years + farm it → 160 acres almost free.**

Key exam sentence: the Homestead Act truly gave land-poor Easterners a chance to remake their
fortunes (prairie into wheat fields, America into a granary of the world). But here's a
**misconception trap** my teacher kept correcting:
❌ "The 160 acres were truly 'free' land."
✅ It was free to the settler only because treaties, the army, and hunger first cleared the
Plains nations off that land — **the cost was paid by Native people.**

Memory anchor: the law's text says "unappropriated public lands" — a legal phrase that
defined "a home where people lived" as "empty land no one wanted."`,
        },
      },
    },

    {
      id: 'railroad-labor-chinese-irish',
      termCn: '铁路劳工（华工 / 爱尔兰工）',
      termEn: 'Railroad Labor (Chinese & Irish Workers)',
      standardRef: ['APUSH Period 6 — Topic 6.3 Westward Migration', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'railroad-worker-or-homesteader',
        nodeIds: ['wh-n2', 'wh-n8'],
        xiaoweiNote: {
          cn: `华工·拓荒户那一遍第 2 节专讲修铁路的华工，第 8 节讲他们后来怎么被对待。
这条线我特别有感觉——因为修最险一段的，正是华人。

我把劳工分工背成一张对照表：
- **Central Pacific（中央太平洋）**：从加州由西往东修，主力是**华工**——翻越 Sierra Nevada（内华达山脉），
  冬雪埋工棚、吊在篮子里对岩壁放炸药、零下凿隧道一天只前进几十厘米。
- **Union Pacific（联合太平洋）**：从东往西修，主力是**爱尔兰移民**、退伍兵、获自由的黑人等。

考点关键句（DBQ 高频）：华工承担了最危险的隧道与爆破工段，工钱却比白人工人低，
伤亡无人认真统计，1869 年的庆典照片、演讲、敬酒里几乎**看不见华工的身影**——
修出"奇迹"最险一段的人，被从那张"伟大时刻"的画面里抹掉了。

⚠️ 别搞混：这里华工是**铁路语境的背景**；1882 年那部把华工挡在国门外的排华法，是另一个 Topic
（chinese-exclusion-1882），白人工人对华工的怨气是那部法律的社会土壤之一，但本 Topic 只埋种子、不展开。`,
          en: `The Worker/Homesteader Lens Node 2 is specifically about the Chinese railroad workers,
and Node 8 about how they were later treated. This line hits me especially, because the most
dangerous stretch was built by Chinese hands.

I memorize the labor division as a compare table:
- **Central Pacific**: built east from California, mostly **Chinese laborers** — crossing the
  Sierra Nevada, snow burying the work-shacks, hanging in baskets to set charges against rock
  faces, cutting tunnels in subzero cold sometimes only inches a day.
- **Union Pacific**: built west from the East, mostly **Irish immigrants**, veterans, and
  freed Black people.

Key exam sentence (high-frequency DBQ): the Chinese workers took the most dangerous tunnel and
blasting work yet were paid less than the white workers, their deaths uncounted, and in the
1869 celebration photos, speeches, and toasts you can **barely find them** — the men who built
the "miracle's" most dangerous stretch were erased from that picture of the "great moment."

⚠️ Don't mix it up: here Chinese labor is the **railroad context**; the 1882 Chinese Exclusion
Act that shut Chinese laborers out of the country is a different topic (chinese-exclusion-1882),
and white workers' resentment was one of its social roots — but this topic only plants the seed
and doesn't unpack it.`,
        },
      },
    },

    {
      id: 'bison-near-extermination',
      termCn: '野牛的近灭绝',
      termEn: 'The Near-Extermination of the Bison',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'plains-native-receiving-end',
        nodeIds: ['pn-n4', 'pn-n7'],
        xiaoweiNote: {
          cn: `Lakota 那一遍第 4 节讲野牛被打光的过程，第 7 节讲为什么这不全是意外，最戳人。
**bison（野牛，又叫 American buffalo）**原本在大平原上有**大约 3000 万头**，
平原民族吃牛肉、用牛皮搭帐篷做衣服、用牛骨做工具——整套生活方式都建在野牛身上。

我把考点压成一句必背：
**野牛 ~3000万 → 1880s 近零；断野牛 = 断平原民族的活法。**

考点关键句（DBQ 高频）：随着铁路推进、商业猎手涌入（有的只为皮、只为取乐，从车窗就着车速朝牛群开枪），
野牛在几十年里被打到近乎零。

这里有一个**误解陷阱**：
❌ "野牛灭绝只是过度捕猎的环境意外。"
✅ 大规模猎杀**部分是蓄意的军事手段**——史学界普遍记述，1870s 一些联邦军方将领公开赞同、纵容灭牛，
认为消灭野牛能从根本上瓦解平原民族的生存基础、逼其投降。
（注意：这是**史学概述**，不引逐字原话——别写成某将领"说过"哪一句。）`,
          en: `The Lakota Lens Node 4 shows the bison being shot out, and Node 7 explains why it was
not all an accident — the hardest part to read. The **bison** (also called the American buffalo)
once numbered **roughly thirty million** on the Great Plains; the Plains nations ate the meat,
made lodges and clothing from the hide, and tools from the bone — an entire way of life built
on the bison.

I compress the exam point into one must-memorize line:
**bison ~30 million → near zero by the 1880s; cut off the bison = cut off the Plains nations'
way of living.**

Key exam sentence (high-frequency DBQ): as the railroad pushed forward and commercial hunters
poured in (some only for the hide, some only for sport, firing into herds from train windows at
the speed of the train), the bison were shot down to nearly zero in a few decades.

Here's a **misconception trap**:
❌ "The bison's extinction was just an environmental accident of overhunting."
✅ The mass killing was **partly a deliberate military tool** — historians generally record that
in the 1870s some federal army officers openly approved of and allowed the slaughter, believing
that wiping out the bison would break the Plains nations' basis of survival and force them to
surrender.
(Note: this is a **historians' summary**, not a verbatim quote — don't write that a named general
"said" any one line.)`,
        },
      },
    },

    {
      id: 'reservations-and-broken-treaties',
      termCn: '保留地与条约背弃',
      termEn: 'Reservations & Broken Treaties',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'CA HSS 8.5', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'plains-native-receiving-end',
        nodeIds: ['pn-n3', 'pn-n8'],
        xiaoweiNote: {
          cn: `Lakota 那一遍第 3 节讲条约怎么来的，第 8 节讲被赶进保留地以后的日子。
联邦政府跟平原民族签**treaty（条约）**：纸上画线——这条线以西**永远归你们 Lakota**，白人保证不越界。

考点关键句：可只要那地上发现金子，或者铁路要从那儿过，**条约说毁就毁**——
一份签了，过几年又改、又缩、又作废。条约一份份地破。

最有名的例子：圣地 **Black Hills（黑山）**——前几年还有条约写着"永远归 Lakota"，
1874 年附近发现金子，白人潮水一样涌进来，条约被撕掉。

被打垮以后，多数平原民族被赶进 **reservation（保留地）**：政府划的、缩了又缩、往往贫瘠的地块，
靠政府发的 **rations（口粮）**过活，能不能吃饱看管事白人官员的脸色。

老师强调的核心句：**一张纸有没有用，不看上面写了什么，看谁拿着枪、谁来执行它。**
（呼应 manifest-destiny-1845 的 Vallejo——条约 ≠ 真正的保护。）`,
          en: `The Lakota Lens Node 3 shows how the treaties came about, and Node 8 the life after
being driven onto reservations. The federal government signed **treaties** with the Plains
nations: lines drawn on paper — west of this line is **forever yours, the Lakota's**, and the
white men guaranteed not to cross.

Key exam sentence: but the moment gold was found on that land, or a railroad wanted to pass
through, **the treaty was broken on command** — signed, then a few years later altered, shrunk,
voided. Treaty after treaty broken.

The most famous example: the sacred **Black Hills** — a treaty had said "forever the Lakota's,"
then gold was found nearby in 1874, white men poured in like a flood, and the treaty was torn up.

After being broken, most Plains nations were driven onto **reservations**: government-marked,
shrunken, often barren plots, living on government **rations**, whether you ate your fill
depending on the face of the white official in charge.

Teacher's core line: **whether a piece of paper is worth anything depends not on what is
written on it, but on who holds the gun and who enforces it.** (Echoing Vallejo in
manifest-destiny-1845 — a treaty is not real protection.)`,
        },
      },
    },

    {
      id: 'plains-indian-wars-little-bighorn-wounded-knee',
      termCn: '平原民族战争（小大角河 1876 与伤膝河 1890）',
      termEn: 'The Plains Indian Wars (Little Bighorn 1876 & Wounded Knee 1890)',
      standardRef: ['APUSH Period 6 — Topic 6.6 American Indians in the West', 'CA HSS 8.5', 'CA HSS 5.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'plains-native-receiving-end',
        nodeIds: ['pn-n5', 'pn-n9'],
        xiaoweiNote: {
          cn: `Lakota 那一遍第 5 节是 Little Bighorn 大胜，第 9 节是 Wounded Knee 的结局。
这张卡我把**一头一尾两场仗**绑在一起背，因为它俩正好是平原民族战争"最高"和"最低"两个点。

**Little Bighorn（小大角河之战），1876 年 6 月**：
Lakota 与 Cheyenne 的战士（精神核心是 **Sitting Bull 坐牛**，战场领袖之一是 **Crazy Horse 疯马**）
全歼了美军中校 **George Custer 卡斯特**率领的第七骑兵一部。
这是平原民族**最响亮的一次军事胜利**。

**Wounded Knee（伤膝河屠杀），1890 年 12 月**：
野牛没了、人被困在保留地挨饿绝望，**Ghost Dance（鬼舞）**信仰传开（相信死者和野牛会回来）。
政府当成要造反，军队在缴枪时开火，约 **250-300 名 Lakota**（很多是妇女和孩子）死在雪地。

考点必背的两个误解陷阱：
❌ "Little Bighorn 大胜说明平原民族扭转了局势。" → ✅ 那是一次**战术胜利**，在源源不断的人口、
铁路、军队和野牛消失面前，改变不了最终结局。胜利只让结局来得慢一点。
记忆锚：**1876 最响亮的胜 → 1890 有组织抵抗的终点 + 同年宣布 frontier（边疆）关闭。**`,
          en: `The Lakota Lens Node 5 is the great victory at Little Bighorn, and Node 9 the end at
Wounded Knee. On this card I tie the **two battles, the first and the last**, together, because
they are exactly the "highest" and "lowest" points of the Plains Indian Wars.

**Little Bighorn, June 1876**:
the warriors of the Lakota and Cheyenne (the spiritual core was **Sitting Bull**, one field
leader was **Crazy Horse**) wiped out part of the Seventh Cavalry led by U.S. lieutenant colonel
**George Custer**. It was the Plains nations' **loudest military victory.**

**Wounded Knee Massacre, December 1890**:
the bison gone, the people penned on reservations and starving in despair, the **Ghost Dance**
faith spread (believing the dead and the bison would return). The government took it as a coming
revolt, the army opened fire while disarming them, and some **250-300 Lakota** (many women and
children) died in the snow.

Two must-know misconception traps:
❌ "The great victory at Little Bighorn shows the Plains nations turned the tide." → ✅ That was a
**tactical victory**; against an endless stream of people, trains, an army, and the vanishing
bison, it could not change the final outcome. Victory only made the ending come more slowly.
Memory anchor: **1876 loudest victory → 1890 end of organized resistance + the same year the
frontier was declared closed.**`,
        },
      },
    },

    {
      id: 'dawes-act-1887',
      termCn: '道斯法 1887',
      termEn: 'The Dawes Act of 1887',
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
        cn: `**Dawes Act（道斯法，1887）**，又叫 **General Allotment Act（一般分地法）**，
故事里两个视角都点到，但没单独展开。它是 APUSH Period 6 的必考点，得单独掌握。

它表面上很"善意"：
把保留地这种**共有（held in common）**的土地，拆成一块块**个人份地（allotment，典型 160 英亩/户）**，
分给每个原住民家庭一份，让他们学白人那样，一家一户当**个体农民**，融入社会。

听起来像帮他们融入，对吧？可真正的效果是两层剥夺：
1. **土地继续流失**：分完每家那一份之后，剩下的大片"多余"土地，被拿出来**卖给白人定居者和公司**。
   随后几十年，原住民手里的土地总量大幅缩水。
2. **从根上瓦解部落共同体**：平原民族的活法本就是共有土地、一起跟野牛迁徙；
   Dawes Act 要把"大家"拆成一个个孤零零的"一家"——这等于从里到外把一个民族拆开。

🔗 故事连接：Lakota 那一遍第 8 节，他亲口讲这一刀砍的是"我们活法的命根"；
铁路巨头那一遍第 8 节，赢家自己点破套路："先用枪和饥饿把人逼进保留地，
再用一部'为你们好'的法律，把保留地也拆开拿走。"

⚠️ 别搞混：**reservation（保留地）= 把人圈进去**；**Dawes Act = 再把圈起来的地拆开拿走**。
两步是先后关系，AP 常一起考。Dawes 体制直到 **1934 年的 Indian Reorganization Act** 才被部分扭转。`,
        en: `**The Dawes Act (1887)**, also called the **General Allotment Act**, is touched on in
two lenses but never unpacked on its own. It's a required point for APUSH Period 6, so master it
separately.

On its face it looked "benevolent":
take reservation land, which was **held in common**, and break it into **individual allotments
(typically 160 acres per household)**, giving each Native family a share so they could learn to
be **individual farmers** one household at a time, like white men, and fit into society.

Sounds like helping them fit in, right? But the real effect was a two-layer dispossession:
1. **Continued land loss**: after each family's share was parceled out, the large "surplus" of
   land was put up for **sale to white settlers and companies**. Over the following decades the
   total land in Native hands shrank dramatically.
2. **Dismantling the tribal community at the root**: the Plains nations' way of life was holding
   land in common and migrating together with the bison; the Dawes Act tried to break "all of
   us" into one lonely "single family" after another — taking a people apart from the inside out.

🔗 Story link: the Lakota Lens Node 8 has him say in his own voice that this cut struck "the very
lifeblood of our way of living"; the Railroad Baron's Lens Node 8 has the winner himself name the
pattern: "first you drive people onto reservations with guns and hunger, then with a law 'for
your own good' you break the reservations apart and take those too."

⚠️ Don't mix it up: **reservation = pen the people in**; **Dawes Act = then break the penned land
apart and take it away.** The two steps are sequential, and AP often tests them together. The
Dawes system wasn't partly reversed until the **1934 Indian Reorganization Act.**`,
      },
      xiaoweiNote: {
        cn: `这张卡我一开始最容易和"保留地"搞混。老师说记住一个**时间顺序 + 一个反讽**就稳了：
**先 reservation（圈进去）→ 后 Dawes Act 1887（把圈起来的地再拆开拿走）。**
反讽点（DBQ 爱用）：一部打着"为原住民好、帮他们融入"旗号的法律，实际效果是**又一次大规模夺地**。
我的口诀：**Dawes = "为你好" 包着的剥夺**——好听的名字，藏着真实的代价。`,
        en: `This card I most easily confused with "reservation" at first. Teacher said remember one
**time order + one irony** and you're set:
**first the reservation (pen them in) → then the Dawes Act 1887 (break the penned land apart and
take it away).** The irony (DBQs love it): a law flying the banner of "for the Natives' good,
helping them fit in" had, in effect, **another mass land grab.** My mnemonic: **Dawes = a
dispossession wrapped in "for your own good"** — a fine name hiding a real cost.`,
      },
    },

    {
      id: 'late-qing-self-strengthening-parallel',
      termCn: '同时代的中国：晚清与洋务运动（结构对照）',
      termEn: 'China at the Same Time: Late Qing & the Self-Strengthening Movement (a structural parallel)',
      standardRef: ['Rule 0 cross-civilization parallel', 'APUSH comparative context'],
      examFrequency: 'context',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'railroad-baron', nodeId: 'rb-n3', context: '铁路巨头用「进步 / 文明」给扩张正名 — 同一年代两国都在围绕「铁路 / 现代化」做事，含义却几乎相反' },
        ],
      },
      standaloneText: {
        cn: `这张卡故事里没讲，是老师特意补的"同时代横切面"——美国敲金道钉的同一年，中国在干什么？
（这是中国家长最大的盲区之一：中国课纲对美国 19 世纪后半叶基本只讲"南北战争 + 工业化"，
横贯铁路、平原民族这条主线几乎零覆盖。）

**时间对齐**：1869 年是**清同治八年**，正值**晚清**。
第二次鸦片战争（1860）刚结束，太平天国刚被镇压（1864），
曾国藩、李鸿章、左宗棠等人正在推行**洋务运动**（又叫**自强运动**）——
办江南制造总局、福州船政局，喊"师夷长技以制夷"，也开始修电报、建轮船，
后来修出中国第一条运营铁路（1881 年唐胥铁路）。

**结构对照（并列，不褒贬，Rule 0）**：
- **铁路的政治含义几乎相反**：美国把横贯铁路当作国家一体化 + 向内陆"无主之地"扩张的引擎，
  由私人公司 + 联邦补贴 + 赠地驱动；晚清的铁路与洋务，是在列强压力下**自上而下、由官府主导的
  防御性自强**，目的更多是"保住既有疆土与王朝"，而非向外殖民式扩张。一边是**进取扩张**，一边是**救亡图存**。
- **土地与边疆的处理不同**：美国用宅地法 + 保留地 + Dawes 这套"法律 + 军事"工具，
  系统地把平原民族从其土地上清除、再分配给定居者；同期清廷在西北、东北是另一套以朝廷为中心的边疆治理
  （如新疆建省 1884），逻辑、对象、手段都不同，不能简单类比。

⚠️ Rule 0（一票否决）：**不能**说美国"先进开拓"、晚清"落后挨打"；也**不能**反过来把美国说成纯粹"侵略者"、
把晚清美化。两套制度在各自处境里回应各自的问题——一个在向内陆扩张中摧毁了原住民，
一个在列强环伺中艰难自强——各有其逻辑、成就与代价。`,
        en: `The story doesn't cover this card; teacher added it as a "same-era cross-section" — in the
very year America drove the golden spike, what was China doing? (This is one of Chinese parents'
biggest blind spots: China's curriculum on the late-19th-century U.S. covers mostly "the Civil
War + industrialization," with almost zero coverage of the transcontinental railroad or the
Plains nations.)

**Time alignment**: 1869 was the **eighth year of the Tongzhi reign**, in the **late Qing**.
The Second Opium War (1860) had just ended, the Taiping Rebellion had just been put down (1864),
and Zeng Guofan, Li Hongzhang, and Zuo Zongtang were carrying out the **Self-Strengthening
Movement** — founding the Jiangnan Arsenal and the Fuzhou Navy Yard, calling to "learn the
superior techniques of the barbarians to control the barbarians," building telegraphs and
steamships, and later China's first operating railway (the Tangshan-Xugezhuang line, 1881).

**Structural parallel (side by side, no praise or blame, Rule 0)**:
- **The political meaning of the railroad was almost opposite**: America treated the
  transcontinental railroad as an engine of national unification plus expansion into inland
  "unclaimed land," driven by private companies + federal subsidies + land grants; the late
  Qing's railroads and reforms were a **top-down, government-led defensive self-strengthening**
  under foreign pressure, aimed more at "holding existing territory and the dynasty" than at
  colonial outward expansion. One was **forward expansion**, the other **survival under threat.**
- **Land and frontier handled differently**: America used the Homestead Act + reservations +
  Dawes (a "law + military" toolkit) to systematically remove the Plains nations from their
  land and redistribute it to settlers; the Qing court in the northwest and northeast ran a
  different, court-centered frontier governance (such as making Xinjiang a province in 1884) —
  different logic, subjects, and methods, not to be simply equated.

⚠️ Rule 0 (a veto dimension): you **cannot** say America was "advanced and pioneering" while the
late Qing was "backward and beaten"; nor, the reverse, can you cast America as a pure "aggressor"
and whitewash the late Qing. Both systems answered their own problems in their own circumstances
— one destroyed Native peoples while expanding inland, one strained to strengthen itself while
surrounded by powers — each with its own logic, achievements, and costs.`,
      },
      xiaoweiNote: {
        cn: `这张卡不考你"哪国更强"，考的是**会不会做结构对照而不下高低判断**（Rule 0）。
我的记忆锚：**同一年（1869），美国修铁路是"往外扩"，晚清修铁路是"往里保"。**
一个用铁路 + 法律向内陆扩张、清除原住民；一个在列强压力下自上而下地自强、想保住疆土与王朝。
关键不是评谁高谁低，而是看清：同一样东西（铁路），在不同处境里，含义可以几乎相反。`,
        en: `This card doesn't test "which country was stronger"; it tests whether you can draw a
**structural parallel without ranking them** (Rule 0). My memory anchor: **in the same year
(1869), America built railroads to "expand outward," the late Qing built them to "hold inward."**
One used rails + laws to expand inland and clear Native peoples; the other strained, top-down,
to strengthen itself under foreign pressure and hold its territory and dynasty. The point isn't
judging who's higher or lower, but seeing clearly that the same thing (a railroad) can mean
almost opposite things in different circumstances.`,
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
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.
- Evidence for "achievement": the world's first transcontinental railroad, a months-long journey
  cut to days, the Homestead Act's 160 acres remaking poor families' fortunes, Chicago becoming
  the nation's meat-and-grain center.
- Evidence for "destruction": bison ~30 million → near zero (partly deliberate), treaty after
  treaty torn up (gold in the Black Hills), the Dawes Act taking reservation land, the Wounded
  Knee massacre.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's
complexity.`,
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
You can come at it through the legal phrase — the Homestead Act's text says "unappropriated public
lands," and that one phrase defined "a home where people lived" as "empty land no one wanted." All
three lenses ask "free, free at whose cost?" Your question could have students compare what the
same land meant to the homesteader, the railroad boss, and the Plains nations — why does one word,
"free," produce three completely different outcomes? What did language do in between?`,
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
