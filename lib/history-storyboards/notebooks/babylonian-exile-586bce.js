// ─── 同伴笔记本架构 v2 · Babylonian Exile c.586 BCE ───────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（引 lens + nodeId，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson 300-500 字)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Nebuchadnezzar II / Jeremiah / 被掳的犹太少年 三条线）
//   - notebook 提供考点闭环（monotheism 一神教成型 / Cyrus 居鲁士 + 第二圣殿 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - CA HSS Grade 6.3 古希伯来文明 (Ancient Hebrews) — 中国家长最大盲区之一
//   - AP World 史前根：一神教 (monotheism) 与希伯来圣经传统的起源
//     （后面伊斯兰兴起 / 十字军 / 宗教改革等大量 Topic 的共同"亚伯拉罕之根"）
//
// 史料分层（古代史 + 宗教史铁律 — 见 factledger §Band C 三层）：
//   - (a) 圣经记载（primary 但单一文本传统）：焚圣殿 2 Kings 25 / Zedekiah 之死 25:7 /
//         Jeremiah 下坑 Jer 38 / Jer 29 书信 / 《诗篇》137
//   - (b) 历史考古独立佐证（encyclopedia）：586 City of David/Mount Zion 火烧层 /
//         597 Babylonian Chronicle 双证 / 605 Carchemish / 居鲁士 539 取巴比伦 + Cyrus Cylinder
//   - (c) 后世宗教传统/神学投射（须标注）：「Jer29=离散蓝图」「神不在楼里的顿悟」属合理后世诠释
//   diaspora → 书的宗教，是真实流亡期文明转变（历史批判学派 + synagogue 起源共识），
//   非后世神学倒投——小薇笔记里把这点讲清。
//
// 事实对账本硬规则（factledger #25 已修）：
//   - 居鲁士 **539 BCE（10 月）攻陷巴比伦**；**538 BCE 下归回诏令**（拆开，不写回"538 攻陷"）
//   - 《诗篇》137 成文时间学界两说（流亡当时 vs 归回之后），不钉死
//   - 古代年代用约数（c.650 / ~586 / 约 14 岁）；586 vs 587 学界有分歧，取 586
//
// schemaVersion: 1 · notebookVersion: babylonian-exile-586bce-v1

export var notebook = {
  topicId: 'babylonian-exile-586bce',
  topicNameCn: '古以色列与巴比伦之囚',
  topicNameEn: 'Ancient Israel & the Babylonian Exile',
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
    cn: `这个 Topic 有点特别——我们中文家庭很多人没听过它。我妈说"四大文明古国"里都没有以色列，
所以我爸妈也帮不上忙。但老师说这是 AP World 一整条线的"根"：后面学伊斯兰兴起、十字军、
宗教改革，全要回头看这一段。所以别跳。

老师在白板上写了这些名字：

Nebuchadnezzar II（尼布甲尼撒二世）、Jeremiah（耶利米）、Cyrus the Great（居鲁士大帝）

还有几个词，她说"这几个一定考"：
First Temple（第一圣殿）、Babylonian Exile（巴比伦之囚）、diaspora（离散）、
monotheism（一神教）、Cyrus Cylinder（居鲁士圆柱）

我先把这些抄下来。等下我要读三个故事——征服者 Nebuchadnezzar、先知 Jeremiah、
还有一个被掳到巴比伦河边的犹太少年（他是合成人物，老师说底下的历史都是真的）。
读完我再回来对照这张单子，看我能不能解释清楚。

老师说了一句我记在第一页的话："这个 Topic 最难、也最重要的一点是——
一个民族失去了国家、圣殿、君主，按古代规矩它该消失，可它没有。你要去想：为什么？"`,
    en: `This topic is a bit different — a lot of us from Chinese families have never heard of it.
My mom says Israel isn't even in the "four ancient civilizations," so my parents can't help me
on this one. But my teacher says it's the "root" of a whole strand of AP World: when we later
study the rise of Islam, the Crusades, the Reformation, we keep coming back to this. So don't skip it.

Teacher wrote these names on the board:

Nebuchadnezzar II, Jeremiah, Cyrus the Great

Plus some terms she said "will definitely be on the test":
First Temple, Babylonian Exile, diaspora, monotheism, Cyrus Cylinder.

Let me copy these down. Soon I'll read three stories — the conqueror Nebuchadnezzar,
the prophet Jeremiah, and a Judean youth carried off to the rivers of Babylon
(he's a composite figure, but teacher says the history underneath is all real).
After reading I'll come back and check whether I can explain this list.

Teacher said one thing I wrote on my first page: "The hardest and most important point
of this topic is — a people lost its nation, its Temple, its king. By the rules of the
ancient world it should have vanished. But it didn't. Your job is to ask: why?"`,
    keyTerms: [
      { cn: '第一圣殿', en: 'First Temple' },
      { cn: '巴比伦之囚', en: 'Babylonian Exile / Captivity' },
      { cn: '先知', en: 'prophet' },
      { cn: '离散', en: 'diaspora' },
      { cn: '一神教', en: 'monotheism' },
      { cn: '居鲁士诏令', en: 'Edict of Cyrus' },
      { cn: '希伯来圣经', en: 'Hebrew Bible' },
      { cn: '锡安', en: 'Zion' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '尼布甲尼撒二世',
        nameEn: 'Nebuchadnezzar II',
        ipa: '/ˌnɛbjʊkədˈnɛzər/',
        roleCn: '新巴比伦帝国王 (r.605-562 BCE)，586 BCE 毁第一圣殿、掳犹大精英',
        roleEn: 'King of the Neo-Babylonian Empire (r.605-562 BCE), destroyed the First Temple in 586 BCE and deported Judah\'s elite',
        mustKnow: true,
        audioKey: 'nebuchadnezzar-ii',
      },
      {
        nameCn: '耶利米',
        nameEn: 'Jeremiah',
        ipa: '/dʒɛrɪˈmaɪə/',
        roleCn: '希伯来圣经先知 (c.650-570 BCE)，警告灭国被当叛徒，主张流亡中存续',
        roleEn: 'Hebrew Bible prophet (c.650-570 BCE), warned of the nation\'s fall, called for surviving through exile',
        mustKnow: true,
        audioKey: 'jeremiah',
      },
      {
        nameCn: '居鲁士大帝',
        nameEn: 'Cyrus the Great',
        ipa: '/ˈsaɪrəs/',
        roleCn: '波斯帝国创建者，539 BCE 攻陷巴比伦，538 BCE 下诏准犹太人归回',
        roleEn: 'Founder of the Persian Empire, took Babylon in 539 BCE, decreed the Jews\' return in 538 BCE',
        mustKnow: true,
        audioKey: 'cyrus-the-great',
      },
      {
        nameCn: '西底家',
        nameEn: 'Zedekiah',
        ipa: '/ˌzɛdɪˈkaɪə/',
        roleCn: '巴比伦立的犹大傀儡王，再反叛失败被弄瞎眼带走',
        roleEn: 'Babylon\'s puppet king of Judah; revolted again, was blinded and carried off',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '约雅斤',
        nameEn: 'Jehoiachin',
        ipa: '/dʒɪˈhɔɪəkɪn/',
        roleCn: '597 BCE 投降被掳的年轻犹大王',
        roleEn: 'The young king of Judah who surrendered and was deported in 597 BCE',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '被掳的犹太少年',
        nameEn: 'A Judean youth in exile (composite)',
        ipa: null,
        roleCn: '合成人物，基于《诗篇》137 篇那代被掳者；底层流亡史为真实记录',
        roleEn: 'Composite figure based on the generation of Psalm 137; the underlying exile history is documented',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'fall-of-jerusalem-586',
      termCn: '586 BCE 耶路撒冷陷落 / 第一圣殿被毁',
      termEn: 'Fall of Jerusalem / Destruction of the First Temple (586 BCE)',
      standardRef: ['CA HSS 6.3', 'AP World (early religious traditions, foundational)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['neb-n5', 'jer-n4', 'youth-n3'],
        xiaoweiNote: {
          cn: `三个故事都写到这一天。Nebuchadnezzar 第 5 节（系统拆耶路撒冷：扒城墙、烧王宫、
烧圣殿）、Jeremiah 第 4 节（他预言的灾难一字不差地来了）、少年第 3 节（那场火、回头看
耶路撒冷的山从地平线消失）。

我整理出这张卡要背的硬考点：
- **时间：公元前 586 年**。老师说一个小坑——年份越大越早，所以"公元前 586"在"公元前 605"
  之后（数字往下数）。还有一个 careful note：少数学者按不同历法定 587 BCE，主流用 586，
  考试写 586 就对。
- **谁干的**：新巴比伦王 Nebuchadnezzar II。
- **烧了什么**：First Temple（第一圣殿）——相传所罗门王约公元前 10 世纪建的，
  是犹大人**全民族唯一的崇拜中心**。烧的不是一栋普通的楼，是他们整个世界的中心。
- **史料分层**（这个 Topic 老师反复强调）：焚圣殿在圣经《列王纪下》25 章有记载（primary，
  但属单一文本传统）；**同时考古有独立佐证**——耶路撒冷 City of David / Mount Zion
  挖出公元前 6 世纪初的火烧层。所以这不是"只是宗教故事"，是有考古证据的真实事件。

考点关键句：586 BCE 是"巴比伦之囚"的高潮——犹大王国灭亡、第一圣殿被毁、
第二批大规模被掳，三件事同一年发生。`,
          en: `All three stories cover this day. Nebuchadnezzar Node 5 (methodically taking
Jerusalem apart: walls down, palace burned, Temple burned), Jeremiah Node 4 (the disaster
he foretold arrives word for word), the youth Node 3 (the fire, looking back as the hills
of Jerusalem vanish from the horizon).

The hard exam points for this card:
- **Date: 586 BCE.** A small trap teacher flagged — bigger BCE numbers are *earlier*, so
  "586 BCE" comes *after* "605 BCE" (count down). One careful note: a minority of scholars
  date it 587 BCE by a different calendar; the mainstream uses 586, so write 586.
- **Who did it**: Neo-Babylonian king Nebuchadnezzar II.
- **What burned**: the First Temple — traditionally built by King Solomon around the 10th
  century BCE, the **one and only center of worship** for the whole people. Not an ordinary
  building, but the center of their entire world.
- **Layering the evidence** (teacher pushes this all topic): the Temple's burning is recorded
  in 2 Kings 25 (primary, but a single textual tradition); **and there's independent
  archaeology** — a destruction/burn layer from the early 6th century BCE dug up in
  Jerusalem's City of David / Mount Zion. So this isn't "just a religious story" — it's a
  real event with archaeological support.

Key exam sentence: 586 BCE is the climax of the "Babylonian Exile" — the fall of the
Kingdom of Judah, the destruction of the First Temple, and the second large deportation,
all in the same year.`,
        },
      },
    },

    {
      id: 'nebuchadnezzar-neo-babylonia',
      termCn: '尼布甲尼撒二世 / 新巴比伦帝国',
      termEn: 'Nebuchadnezzar II / the Neo-Babylonian Empire',
      standardRef: ['AP World (Mesopotamian empires)', 'CA HSS 6.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'nebuchadnezzar-ii',
        nodeIds: ['neb-n2', 'neb-n3', 'neb-n5'],
        xiaoweiNote: {
          cn: `Lens 1 整条线就是他。我读完发现他不是个只会破坏的莽夫，这点考试会绕——
他其实是个**大建设者**。

硬考点：
- **在位：公元前 605-562 年，统治 43 年**（新巴比伦在位最久的王）。
- **称霸怎么来的**：公元前 605 年**卡尔基米什战役**（Battle of Carchemish）打垮埃及大军，
  从此称霸两河流域到地中海东岸。这一战考过。
- **他建了什么**：把巴比伦修成当时世界最大最富的城——传说中的城墙（厚到能在上面赛马车）、
  神庙塔（ziggurat）、巨大的运河系统、Ishtar Gate。被掳的犹太人就被安置在他修的运河边。
  （第 2 节有讲。空中花园常被归到他名下，但**无确证**，别当史实写。）
- **他对犹大的两步走**（第 3、5 节）：公元前 597 年第一次只掳"头部"（国王、贵族、工匠），
  立傀儡王 Zedekiah；犹大再反，公元前 586 年才彻底毁圣殿、第二批大规模掳走。

考点关键句：Nebuchadnezzar II 的"掳走精英、留下穷人"是**新巴比伦帝国的标准帝国政策**
（把一个民族的脑子搬到帝国中心，让它在故土再组织不起来反抗）。
这套办法对几十个民族都管用——唯独对犹大，意外失效了（为什么失效，看后面"离散"那张卡）。`,
          en: `Lens 1 is entirely him. Reading it, I found he wasn't a brute who only destroyed —
the test will play with this — he was actually a **great builder**.

Hard exam points:
- **Reign: 605-562 BCE, 43 years** (the longest-reigning Neo-Babylonian king).
- **How he rose**: the **Battle of Carchemish** in 605 BCE, where he crushed the Egyptian
  army and from then on dominated from Mesopotamia to the eastern Mediterranean. This
  battle has been tested.
- **What he built**: he made Babylon the largest, richest city of its day — legendary walls
  (thick enough to race chariots on), a temple-tower (ziggurat), vast canals, the Ishtar
  Gate. The exiled Jews were settled by the canals he built. (Node 2 covers this. The
  Hanging Gardens are often attributed to him but that's **unconfirmed** — don't write it
  as fact.)
- **His two-step plan against Judah** (Nodes 3, 5): in 597 BCE he carried off only the
  "head" (king, nobles, craftsmen) and installed the puppet king Zedekiah; when Judah
  revolted again, in 586 BCE he destroyed the Temple and made the larger second deportation.

Key exam sentence: Nebuchadnezzar II's "deport the elite, leave the poor" was the **standard
imperial policy of the Neo-Babylonian Empire** (move a people's brain to the empire's center
so it can't organize a revolt on its own soil). It worked on dozens of peoples — only against
Judah did it accidentally fail (why it failed: see the "diaspora" card later).`,
        },
      },
    },

    {
      id: 'babylonian-exile',
      termCn: '巴比伦之囚 (Babylonian Captivity)',
      termEn: 'The Babylonian Exile / Captivity',
      standardRef: ['CA HSS 6.3', 'AP World (early religious traditions, foundational)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['neb-n3', 'neb-n5', 'youth-n3', 'youth-n4'],
        xiaoweiNote: {
          cn: `这是 Topic 的名字本身，必考。三条线都在讲它，少年那条（默认 lens）最贴。

老师专门拿这个出了一道"清坑"题，因为大家都答错——

**误解 1："巴比伦之囚 = 犹太人全被抓去当奴隶"**——错。被掳的主要是**精英**（王室、祭司、
工匠、识字的人），穷人多留在故土。而且被掳者**不是锁链下的奴隶**：巴比伦给了他们土地，
让他们在运河边盖房、种田、做生意、成家（少年第 4 节有写："没人锁我们"）。物质上不算最惨，
精神上才是天塌了。

**误解 2："巴比伦之囚是一次性事件"**——错。它至少分**两次**（597 BCE + 586 BCE，
甚至更多波），是个**过程**不是一个瞬间。597 第一次掳"头部"（约雅斤王那批），
586 第二次更大规模。考试爱在这里设陷阱。

**被掳规模**：学界估算差异很大，从几千到数万（全口径跨 597/586/582 三波累计约
14,000-20,000）。所以单说某一次"成千上万"是上限说法，写"一大批/数千"更稳。
约占犹大总人口约四分之一被掳，多数穷人留下。

考点关键句：Babylonian Exile（巴比伦之囚）= 公元前 586 年起，犹大精英被分批掳往
巴比伦的事件与时期；它是一个**过程**（597+586），不是一次性的全民为奴。`,
          en: `This is the topic's own name — definitely tested. All three lenses cover it; the
youth's line (the default lens) is the closest.

Teacher made a "clear-the-trap" question out of this because everyone gets it wrong —

**Myth 1: "the Babylonian Exile = all Jews taken as slaves"** — wrong. Those deported were
mainly the **elite** (royal house, priests, craftsmen, the literate); most of the poor stayed
in the homeland. And the deportees were **not chained slaves**: Babylon gave them land, let
them build houses, farm, trade, and start families by the canals (youth Node 4: "no one
chained us"). Materially not the worst — it was spiritually that the sky fell.

**Myth 2: "the Babylonian Exile was a one-time event"** — wrong. It came in at least **two**
deportations (597 BCE + 586 BCE, even more waves) — a **process**, not a single moment. 597
took the "head" (King Jehoiachin's group); 586 was the larger second wave. Tests love to
trap you here.

**Scale of deportation**: scholarly estimates vary widely, from a few thousand to tens of
thousands (full-count total across the 597/582 waves about 14,000-20,000). So saying any
single wave was "tens of thousands" is the high-end claim; "a large group / a few thousand"
is safer. About a quarter of Judah's total population was deported; most of the poor stayed.

Key exam sentence: the Babylonian Exile = the event and period, beginning 586 BCE, in which
Judah's elite were deported in waves to Babylon; it was a **process** (597 + 586), not a
one-time enslavement of an entire people.`,
        },
      },
    },

    {
      id: 'jeremiah-prophetic-tradition',
      termCn: '耶利米 / 先知传统',
      termEn: 'Jeremiah / the Prophetic Tradition',
      standardRef: ['CA HSS 6.3', 'AP World (early religious traditions, foundational)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'jeremiah',
        nodeIds: ['jer-n1', 'jer-n3', 'jer-n5'],
        xiaoweiNote: {
          cn: `Lens 2 整条线是他。我得先把"先知"这个词搞清楚——这是个超容易答错的考点。

**先知（prophet）不是算命的。** 它指"替神说话的人"，站出来对国王和百姓讲他们最不爱听的
**真话**。Jeremiah 不是预测彩票号码，他是在所有人都喊"巴比伦打不进来、神保佑耶路撒冷"
的时候，一个人公开说"灭国要来了，圣殿保不住"（第 1 节）。

硬考点：
- **生卒：约公元前 650-570 年**（古代史用约数 c.650 很正常），亲历犹大从动摇到灭国全过程。
- **他主张什么**：不是"抵抗到底"，也不是"投降光荣"，而是——**别再靠埃及反巴比伦，认清现实，
  在流亡中活下去、保住信仰**。第 5 节他写信给被掳同胞（《耶利米书》29 章），劝他们在巴比伦
  盖房、种园、娶妻生子、甚至**为巴比伦城求平安**。注意：故事里明标这是 paraphrase 释义、
  不是逐字经文（这个 Topic 绝不伪造经文）。
- **代价**（第 3 节）：被骂叛徒、被关、被主战派扔进**枯井**（《耶利米书》38 章，精确说是
  "蓄水池 cistern"，故事简化成枯井），井底淤泥差点闷死，靠一个外族太监用破布绳子吊上来。

careful framing：故事里有句金句"说真话的人常死在自己人手里"——这是**母题修辞**，不是史实。
Jeremiah 其实不是死在自己人手里，他最后被同胞挟往埃及，约公元前 570 年死在那儿，
确切死法没有可靠记录（别把金句当史实背）。

考点关键句：希伯来先知传统 = 一群替神向当权者讲不爱听真话的人；Jeremiah 是其中典型，
他的"流亡中存续"主张救了一个亡国的民族。`,
          en: `Lens 2 is entirely him. First I had to nail down the word "prophet" — a very
common wrong answer.

**A prophet is not a fortune-teller.** It means "one who speaks for God," standing up to
tell kings and people the **truth** they least want to hear. Jeremiah wasn't predicting
lottery numbers — when everyone cried "Babylon can't break in, God protects Jerusalem,"
he alone said openly "destruction is coming, the Temple can't be saved" (Node 1).

Hard exam points:
- **Lived c.650-570 BCE** (the approximate c.650 is normal for ancient history); he lived
  through Judah's whole slide from wavering to destruction.
- **What he argued**: not "resist to the end," not "surrender is glorious," but — **stop
  relying on Egypt to revolt against Babylon, face reality, survive in exile and preserve
  the faith**. In Node 5 he writes to the deportees (Jeremiah 29), urging them to build
  houses, plant gardens, marry, have children in Babylon, even **pray for the peace of
  Babylon**. Note: the story explicitly marks this as a paraphrase, not word-for-word
  scripture (this topic never fabricates scripture).
- **The cost** (Node 3): branded a traitor, imprisoned, thrown by the war party into a
  **dry well** (Jeremiah 38 — precisely a "cistern," simplified to a dry well in the story),
  nearly suffocating in the mud at the bottom, hauled up by a foreign court official with
  rags and ropes.

Careful framing: the story has the line "the one who speaks the truth often dies at the hands
of his own people" — that's a **thematic flourish**, not a fact. Jeremiah did not actually
die at his own people's hands; he was taken to Egypt by his own people and died there around
570 BCE, with no reliable record of how (don't memorize the slogan as fact).

Key exam sentence: the Hebrew prophetic tradition = people who spoke unwelcome truth to
those in power on God's behalf; Jeremiah is the type case, and his "survive through exile"
argument saved a nation that had lost its state.`,
        },
      },
    },

    {
      id: 'diaspora-portable-religion',
      termCn: '离散 (diaspora) / "带得走的宗教"——会堂与希伯来圣经成文',
      termEn: 'Diaspora / "Portable Religion" — Synagogue Origins & the Hebrew Bible',
      standardRef: ['CA HSS 6.3', 'AP World (early religious traditions, foundational)', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['neb-n6', 'jer-n6', 'youth-n5', 'youth-n6'],
        xiaoweiNote: {
          cn: `这是整个 Topic 的核心、老师说"AP 一定考、DBQ 高频"的那张卡。三条线的第 6 节
（少年是第 5+6 节）讲的是同一个"带不带得走的家"——这是跨 lens 的核心 micro-detail。

最关键的转变（这个我要能用自己的话讲出来）：
- **以前是"圣殿宗教"**：神住在耶路撒冷那**一座**圣殿里，你必须走到那儿、由祭司献祭，
  才算敬拜。神和那栋楼绑在一起。所以圣殿一烧，大人觉得"家"被烧没了。
- **流亡中变成"书的宗教"**：既然没有圣殿、没有祭司可以献祭了，他们就**靠文字**——
  把口传的律法、历史、先知的话一笔一笔写下来、编成书，聚在一起读、念给孩子听
  （少年第 5 节那个油灯下写经的屋子）。Nebuchadnezzar 第 6 节那句最狠："我烧得掉一座楼，
  烧不掉一本书里的东西。一座楼立在一个地方，一本书走到哪带到哪。"

**史料分层（这点老师特别强调，别搞混）**：
- diaspora（离散）→ 书的宗教，**是真实的流亡期文明转变**，不是后世编出来倒投回去的神学。
  历史批判学派认为**希伯来圣经大量内容正是在流亡期及之后被系统编订成型**；
  **犹太会堂（synagogue）的起源也普遍系于流亡期**——没有中央圣殿，只能聚在一起读经。
  这是"便携式宗教"让犹太教在没有圣殿的情况下还能存续的真实之根。
- 但有两处属"后世诠释/戏剧化"，故事里都框住了：①"Jer29 = 离散精神蓝图"是后人/现代的
  解读（故事用"后人/后来"归给后世）；②少年那晚"神不在楼里"的顿悟，是把数代渐进的神学转变
  浓缩进一个孩子一夜的领悟（故事透明标了 composite + 借 Aba 之口转述 + 第 7 节说"慢慢看懂"）。

考点关键句：diaspora（离散）= 犹太人分散世界各地、靠共同的圣经和律法（不靠一块土地或一个
国家）维系认同的格局；正因为流亡期学会了"靠书、不靠一座殿"，散到天涯海角也散不掉。

🔗 跨 Topic：这条离散线一直延续到一千八百多年后——Black Death Topic 里 Strasbourg
莱茵河边的犹太女孩 Devorah，就在这条线上（少年第 7 节亲自连了过去）。从巴比伦河边到莱茵河边，
是同一个"没有国家却带着书活下去"的民族的两个瞬间。`,
          en: `This is the heart of the whole topic — the card teacher said "AP definitely tests,
high-frequency DBQ." Node 6 of all three lenses (Nodes 5+6 for the youth) is the same
"home you can / can't carry" — the cross-lens core micro-detail.

The key shift (I need to be able to say this in my own words):
- **Before: a "Temple religion"** — God lived in that **one** Temple in Jerusalem; you had
  to go there and have the priests offer sacrifice to truly worship. God was bound to that
  building. So when the Temple burned, the grown-ups felt "home" had burned away.
- **In exile it became a "book religion"** — with no Temple and no priests to sacrifice,
  they relied on **text** — writing down the oral law, history, and the prophets' words
  clause by clause into a book, gathering to read it, reading it to their children (the
  oil-lamp scroll-writing house in youth Node 5). Nebuchadnezzar's Node 6 says it sharpest:
  "I can burn a building, but I can't burn what's inside a book. A building stands in one
  place; a book they carry wherever they go."

**Layering the evidence (teacher really stresses this — don't muddle it)**:
- diaspora → book religion **was a real exile-era civilizational shift**, not later theology
  projected backward. Historical-critical scholarship holds that **much of the Hebrew Bible
  was systematically compiled into final form during and after the exile**; the **origin of
  the synagogue is also generally placed in the exile** — with no central Temple, the only
  option was to gather and read. This is the real root of the "portable religion" that let
  Judaism survive without a Temple.
- But two parts are "later interpretation / dramatization," and the story frames both:
  (1) "Jeremiah 29 = the blueprint of the diaspora" is a later/modern reading (the story
  attributes it to "later generations"); (2) the youth's overnight "God isn't in the
  building" realization compresses a multi-generation gradual theological shift into one
  child's one-night insight (the story transparently marks the figure as a composite, voices
  it through Aba, and Node 7 says he "slowly came to see").

Key exam sentence: diaspora = the pattern of Jews scattered across the world maintaining
identity through a shared scripture and law (not through a land or a state); precisely because
they learned in exile to "rely on a book, not a building," they could be scattered anywhere
yet never scattered away.

🔗 Cross-topic: this line of dispersion runs over eighteen hundred years later — Devorah, the
Jewish girl on the Rhine in the Black Death topic's Strasbourg, is on this same line (youth
Node 7 links over directly). From the rivers of Babylon to the Rhine, two moments of the
same people that "lives on with a book though it has no country."`,
        },
      },
    },

    {
      id: 'monotheism-development',
      termCn: '一神教 (monotheism) 的发展',
      termEn: 'The Development of Monotheism',
      standardRef: ['CA HSS 6.3', 'AP World (origin of monotheistic traditions, foundational)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'exiled-judean-youth-receiving-end', nodeId: 'youth-n4', context: '少年撞上"神被打败了吗 / 神是否跟着烧没了"的危机——这正是一神教被逼出成熟的那个问题' },
          { lens: 'nebuchadnezzar-ii', nodeId: 'neb-n6', context: 'Nebuchadnezzar 看见犹大人不像别的民族那样改拜巴比伦的神' },
        ],
      },
      standaloneText: {
        cn: `monotheism（一神教）= **只信一位神**的信仰。古代世界绝大多数民族是 polytheism
（多神教，信很多神，每个城、每个民族有自己的神）。古以色列发展出的"只有一位神、而且这位神
是全宇宙唯一的神"，在当时是非常少见的。

这张卡课纲必考，但故事没有专门展开它，所以我把它补全——而且要讲清一个**很关键的史料分层**，
别把它讲成宗教凯歌：

**一神教不是公元前 586 年"一夜之间"出现的，是被流亡的危机"逼成熟"的。**
- 被掳之前，古以色列的信仰里，"神和那座圣殿、那个国家、那块土地"是绑在一起的。当时人甚至
  常把"打仗输赢"理解成"哪国的神更强"。
- 所以圣殿一烧、国家一灭，被掳的犹大人撞上一个要命的问题（少年第 4 节）：
  **我们的神，是不是被巴比伦的神打败了？神是不是也跟着圣殿烧没了？**
- 他们给出的答案，反而把信仰推向了**更成熟、更彻底的一神教**：神**不**被一座圣殿、一个国家、
  一块土地绑住。神是全宇宙唯一的神，你被掳到一千多公里外的巴比伦河边，神照样和你同在。
  正是这个"不被地点绑住的神"，让没有国家的犹太人，散到哪儿都能继续敬拜。

**为什么这个 Topic 是 AP World 的"根"**：古以色列的一神教 + 希伯来圣经，是后来
**三大一神教**——犹太教、基督教、伊斯兰教——共享的"亚伯拉罕之根"。今天全世界几十亿人的信仰，
都能追到这条线。后面学伊斯兰兴起、十字军、宗教改革，都要回头看这个源头。

🔗 故事连接：少年第 4 节撞上"神是否被打败"的危机，第 5、6 节 Aba 给的答案"神不在那栋楼里，
在你们带得走的书里、人心里"——那正是成熟一神教（去地点化的神）被锻造出来的瞬间。
Nebuchadnezzar 第 6 节也从征服者那边看到了：别的民族被掳就改拜巴比伦的神，唯独犹大人没有。`,
        en: `Monotheism = the belief in **only one God**. Most ancient peoples were polytheistic
(believing in many gods, with each city and each people having its own). Ancient Israel's
development of "there is only one God, and that God is the sole God of the whole universe"
was very rare for its time.

This card is required by the curriculum, but the story doesn't unfold it on its own, so I'm
filling it in — and I have to make one **crucial evidence-layering point** clear, so it
doesn't turn into a religious victory anthem:

**Monotheism didn't appear "overnight" in 586 BCE — it was "forced to mature" by the crisis
of exile.**
- Before the exile, in ancient Israel's faith, "God, that Temple, that nation, that land"
  were bound together. People back then often even understood "winning or losing a war" as
  "whose nation's god is stronger."
- So when the Temple burned and the nation fell, the deported Judeans hit a deadly question
  (youth Node 4): **Was our God defeated by Babylon's god? Did God burn away with the Temple?**
- The answer they gave actually pushed the faith toward a **more mature, more thoroughgoing
  monotheism**: God is **not** bound to one Temple, one nation, one land. God is the sole God
  of the whole universe, and even carried off a thousand kilometers to the rivers of Babylon,
  God is still with you. It was precisely this "God not bound to a place" that let a stateless
  people keep worshipping wherever they were scattered.

**Why this topic is the "root" of AP World**: ancient Israel's monotheism + the Hebrew Bible
is the shared "Abrahamic root" of the **three great monotheistic faiths** — Judaism,
Christianity, Islam. The faith of billions today can be traced to this line. When we later
study the rise of Islam, the Crusades, the Reformation, we keep coming back to this source.

🔗 Story link: in youth Node 4 he hits the "was God defeated" crisis; in Nodes 5-6 Aba's
answer "God isn't in that building, God is in the book you carry, in your hearts" is exactly
the moment a mature monotheism (a God freed from place) gets forged. Nebuchadnezzar Node 6
sees it from the conqueror's side too: other peoples switched to worshipping Babylon's gods
when deported — only the Judeans did not.`,
      },
      xiaoweiNote: {
        cn: `老师的记忆口诀：**mono = 一，theos = 神**——monotheism 就是"一神"，
对面是 polytheism（poly = 多，多神）。

我自己的笔记：别把一神教记成"犹太人天生就只信一位神"。考点恰恰是**它是被流亡"逼出来"的**——
一个被打到最低点的民族，被迫想清楚"神到底是绑在一座楼上，还是哪儿都在"，
结果想出了一个谁也夺不走的神。这是 reverse-Whig（不写成宗教凯歌、不写成征服暴行）
的中性讲法，DBQ 喜欢。`,
        en: `Teacher's mnemonic: **mono = one, theos = god** — monotheism is "one god," the
opposite of polytheism (poly = many, many gods).

My own note: don't memorize monotheism as "the Jews always naturally believed in only one
God." The exam point is exactly that **it was "forced out" by the exile** — a people beaten
to its lowest point was made to think through "is God bound to one building, or everywhere,"
and ended up with a God no one could take away. This is the reverse-Whig, neutral telling
(not a religious anthem, not a tale of conqueror's cruelty) — DBQ loves it.`,
      },
    },

    {
      id: 'cyrus-persia-second-temple',
      termCn: '居鲁士大帝 / 波斯帝国 / 居鲁士圆柱 / 第二圣殿',
      termEn: 'Cyrus the Great / Persia / the Cyrus Cylinder / the Second Temple',
      standardRef: ['CA HSS 6.3', 'AP World (Persian Empire & imperial administration)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'nebuchadnezzar-ii', nodeId: 'neb-n7', context: 'Nebuchadnezzar 拉远镜头：他死后居鲁士灭巴比伦、下诏准归回' },
          { lens: 'jeremiah', nodeId: 'jer-n7', context: '居鲁士放被掳者归回、一部分重建圣殿' },
          { lens: 'exiled-judean-youth-receiving-end', nodeId: 'youth-n7', context: '约两代人后居鲁士败巴比伦、准归回，少年一家这样的人却选择留下' },
        ],
      },
      standaloneText: {
        cn: `故事三条线的第 7 节都提到了居鲁士放犹太人归回，但没专门展开他这个人、波斯帝国、
Cyrus Cylinder（居鲁士圆柱）和第二圣殿——这几个全是 AP 考点，我补全在这张卡。

**一个硬日期，别记错（这是这个 Topic 最容易踩的坑）**：
- **公元前 539 年（10 月）**：居鲁士**攻陷巴比伦**——这是"征服"的年份。
- **公元前 538 年**：居鲁士**下诏令**，准许被掳的犹太人回耶路撒冷、重建圣殿——这是"归回诏令"
  （Edict of Cyrus）的年份。
- 这两件事**差一年**，是两件不同的事，别合并成"538 攻陷巴比伦"（攻陷是 539）。考试爱在这儿设陷阱。

**Cyrus the Great（居鲁士大帝）是谁**：波斯帝国（Achaemenid Persia）的创建者，
打败了 Nebuchadnezzar 建立的新巴比伦帝国。波斯帝国是当时世界上最大的帝国。

**Cyrus Cylinder（居鲁士圆柱）**：一件真实出土的巴比伦楔形文字泥筒（现藏大英博物馆），
上面记着居鲁士"遣返被各帝国掳走的民族、让他们回去重建神庙"的**总政策**。它是个独立于圣经的
史料，**佐证了归回是真历史**（不只是宗教故事）。常被称作"最早的人权宣言之一"，
但这个说法有争议，老师说别写得太满。

**careful framing（清坑）**：别以为"居鲁士放他们回去，是因为他信了犹太人的神"。
波斯的宗教宽容是一种**帝国治理策略**——让各民族保留自己的信仰、换取他们的忠诚，
不必读成纯粹的善意。还有：现代有学者（如 Grabbe）质疑圣经版"明令重建圣殿"诏令的真实性，
认为归回更可能是数十年的"涓流"，而不是一道命令一次完成。

**第二圣殿（Second Temple）**：公元前 538 年诏令后，一部分人回耶路撒冷重建了圣殿，
公元前 515 年落成——这就是第二圣殿。但**很多人没回去**（包括少年第 7 节里那种在巴比伦
扎了根、生了孩子的人家），离散（diaspora）格局从此定型。从 586 到 538 约 48 年，近两代人。`,
        en: `Node 7 of all three lenses mentions Cyrus letting the Jews return, but none unfolds
the man himself, the Persian Empire, the Cyrus Cylinder, or the Second Temple — all AP exam
points, which I fill in on this card.

**One hard date, don't get it wrong (the easiest trap in this topic)**:
- **539 BCE (October)**: Cyrus **took Babylon** — this is the "conquest" year.
- **538 BCE**: Cyrus **issued the decree** allowing the deported Jews to return to Jerusalem
  and rebuild the Temple — this is the year of the "Edict of Cyrus."
- These are **one year apart** and two different things — don't merge them into "538 took
  Babylon" (the conquest was 539). Tests love to trap you here.

**Who Cyrus the Great was**: founder of the Persian Empire (Achaemenid Persia), who defeated
the Neo-Babylonian Empire that Nebuchadnezzar had built. The Persian Empire was the largest
empire in the world at the time.

**The Cyrus Cylinder**: a real excavated Babylonian cuneiform clay cylinder (now in the
British Museum) recording Cyrus's **general policy** of sending peoples deported by earlier
empires back home to rebuild their temples. It's a source independent of the Bible and
**corroborates that the return was real history** (not just a religious story). It's often
called "one of the earliest declarations of human rights," but that claim is disputed —
teacher says don't overstate it.

**Careful framing (clearing a trap)**: don't assume "Cyrus let them return because he
believed in the Jews' God." Persian religious tolerance was an **imperial-administration
strategy** — letting peoples keep their faiths in exchange for loyalty — not pure goodwill.
Also: some modern scholars (e.g., Grabbe) question the authenticity of the biblical version
that "ordered the Temple rebuilt," arguing the return was more likely a decades-long "trickle"
than a single one-shot command.

**The Second Temple**: after the 538 BCE decree, some returned to Jerusalem and rebuilt the
Temple, completed in 515 BCE — this is the Second Temple. But **many did not return**
(including families like the one in youth Node 7 who had rooted themselves in Babylon and
had children), and the diaspora pattern set in from then on. From 586 to 538 is about 48
years, nearly two generations.`,
      },
      xiaoweiNote: {
        cn: `这张卡我反复念那个日期口诀：**539 攻陷，538 诏令**（攻在前、诏在后，
数字往下数）。考试要是写"居鲁士 538 年攻陷巴比伦"，那是错的——攻陷是 539。

另一个高频题：选择题问"是谁放犹太人归回的"，答案是 **Cyrus the Great（波斯）**，
不是巴比伦的人；DBQ 问"居鲁士为什么这么做"，答"帝国治理策略（宗教宽容换忠诚）"
比答"他人很好"得分高。Cyrus Cylinder 是 DBQ 可以引的实物证据（独立于圣经），记住它。`,
        en: `For this card I keep reciting the date mnemonic: **539 conquest, 538 decree**
(conquest first, decree second — count the numbers down). If a test says "Cyrus took Babylon
in 538," that's wrong — the conquest was 539.

Another high-frequency question: multiple choice asks "who let the Jews return," and the
answer is **Cyrus the Great (Persia)**, not someone Babylonian; if a DBQ asks "why did Cyrus
do this," answering "imperial-administration strategy (religious tolerance for loyalty)"
scores higher than "he was a nice person." The Cyrus Cylinder is the physical evidence a DBQ
can cite (independent of the Bible) — remember it.`,
      },
    },

    {
      id: 'psalm-137-voice-of-exile',
      termCn: '《诗篇》137 篇 / 流亡者的声音',
      termEn: 'Psalm 137 / the Voice of Exile',
      standardRef: ['CA HSS 6.3', 'AP DBQ rubric (primary-source analysis)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'exiled-judean-youth-receiving-end',
        nodeIds: ['youth-n4', 'youth-n8'],
        xiaoweiNote: {
          cn: `这是默认 lens（少年）整条线的灵魂——他这个合成人物，**就是照着《诗篇》137 篇
那一代被掳者的样子设定的**。少年第 4 节那个"巴比伦人起哄要我们唱锡安的歌"的场景，
直接化自这首诗。

**真实经文**（故事和内核里是真 primary 引文，不是伪造的）：
"我们在巴比伦河边坐下，一追想锡安就哭了。我们把琴挂在那里的柳树上……
我们怎能在外邦唱耶和华的歌呢？"
（英文 KJV: "By the rivers of Babylon, there we sat down, yea, we wept, when we remembered
Zion… How shall we sing the Lord's song in a strange land?"）

**为什么这首诗两千多年还被记得**：因为它**没有假装坚强**。它老老实实记下了一个民族被打到
最低点时的痛和愤怒。锡安（Zion）就是耶路撒冷，是他们思乡的象征——掳他们的人却要他们把
最神圣的圣歌当余兴节目点唱。

**两个 careful note（史料分层 + 课堂惯例）**：
- **成文时间学界两说**：这首诗全篇用完成时（"坐下了、哭了、挂了琴"），所以**许多学者认为它
  其实写于归回之后、回忆流亡**，而不是流亡当时写的。别钉死说"它就写于巴比伦河边那一刻"——
  成文时间有争议。
- **结尾的复仇诗句**：这首诗结尾几节有极其激烈的诅咒巴比伦的语句，是被掳者真实创伤与愤怒
  的表达；课堂上**通常只读前半段"坐下哭泣"的部分**，这个 Topic 也不展开结尾。

考点关键句：《诗篇》137 篇是巴比伦之囚的"第一手情感证据"（primary source）——
它让我们听见亡国流亡的真实痛感，是 DBQ 分析"被征服者视角"的经典材料。`,
          en: `This is the soul of the default lens (the youth) — that composite figure **is built
exactly on the look of the generation of Psalm 137**. The youth Node 4 scene where "the
Babylonians jeer for us to sing the songs of Zion" is drawn straight from this psalm.

**The real text** (a genuine primary quotation in the story and kernel — not fabricated):
"By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion. We
hanged our harps upon the willows… How shall we sing the Lord's song in a strange land?"

**Why this psalm is still remembered after 2,000+ years**: because it **doesn't pretend to
be strong.** It honestly sets down the pain and anger of a people beaten to its lowest point.
Zion is Jerusalem, the symbol of their homesickness — and their captors demanded they perform
their holiest songs as entertainment.

**Two careful notes (evidence-layering + classroom convention)**:
- **Two scholarly views on when it was written**: the whole psalm uses the past tense ("sat
  down, wept, hanged the harps"), so **many scholars think it was actually written after the
  return, recalling the exile**, not during it. Don't pin it down as "written at that very
  moment by the rivers of Babylon" — the date of composition is disputed.
- **The vengeful ending verses**: the psalm's final verses contain extremely violent curses
  against Babylon, a real expression of the exiles' trauma and rage; classrooms **usually
  read only the first half, the "sat down and wept" part**, and this topic does not unfold
  the ending either.

Key exam sentence: Psalm 137 is the "firsthand emotional evidence" (a primary source) of the
Babylonian Exile — it lets us hear the real pain of national loss and exile, and it's classic
material for DBQ analysis of "the perspective of the conquered."`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Nebuchadnezzar II 用"断你的根"——烧圣殿、掳精英——来彻底征服犹大。这套办法对
他治下几十个民族都管用（它们被同化、消失了）。可对犹大却意外失效：被掳的犹太人没有消失，
反而在流亡中把信仰写成了一本带得走的书，活了两千多年。

你觉得，为什么同一套"断根"战略，对别的民族管用，唯独对犹大失效了？`,
      en: `Nebuchadnezzar II used "cut your root" — burn the Temple, deport the elite — to fully
conquer Judah. This method worked on dozens of peoples under his rule (they were assimilated
and vanished). But against Judah it unexpectedly failed: the deported Jews didn't disappear;
instead, in exile, they wrote their faith into a book they could carry, and lived on for
2,000+ years.

Why do you think the same "cut the root" strategy worked on other peoples but failed only
against Judah?`,
      hintCn: `提示：可以从两个角度想——(1) 关键也许在那本"书"：别的民族的信仰可能绑在一座
具体的神庙、一块具体的土地上（拿走地点就拿走了信仰），而犹大人恰好在流亡中把信仰从"一座楼"
转成了"一本带得走的书 + 一个聚在一起读它的社群"（拿不走）。(2) 也可以反过来想：是不是
Nebuchadnezzar"把精英聚在一起"这件事本身，反而帮了对手——他逼一群识字的人在废墟上聚到一处，
想清楚"没有圣殿我们还是不是我们"。

进阶思考：一个想毁掉对手的人，有没有可能反而帮对手变强？这是"运气"，还是有什么规律？`,
      hintEn: `Hint: think from two angles — (1) the key may be that "book": other peoples' faiths
may have been bound to a specific temple, a specific land (take the place and you take the
faith), while the Judeans happened, in exile, to shift their faith from "a building" to "a
book you can carry + a community that gathers to read it" (which can't be taken away). (2) Or
flip it: maybe Nebuchadnezzar's very act of "gathering the elite together" helped his enemy —
he forced a group of literate people into one place, on the ruins, to think out "without a
Temple, are we still us."

Going deeper: can someone who tries to destroy an enemy end up making it stronger? Is that
"luck," or is there a pattern to it?`,
      conceptsActivated: ['nebuchadnezzar-neo-babylonia', 'diaspora-portable-religion', 'monotheism-development'],
    },
    {
      id: 'q2',
      cn: `先知 Jeremiah 在同胞最绝望、最盼着"神快来救我们回家"的时候，写信劝他们：
别等了，在巴比伦盖房、种园、好好活下去，甚至要为"烧了我们圣殿的那座城"求平安。
为这些话，他被同胞当成叛徒、扔进枯井。

如果你是 AP 老师，让你出一道 DBQ 题，分析 Jeremiah 这个主张到底是"认输"还是
"更高级的坚持"，你会怎么提问？`,
      en: `When his people were most desperate and most longing for "God to come quickly and bring
us home," the prophet Jeremiah wrote urging them: stop waiting, build houses in Babylon,
plant gardens, live well — even pray for the peace of "the very city that burned our Temple."
For these words his own people branded him a traitor and threw him into a dry well.

If you were an AP teacher writing a DBQ to analyze whether Jeremiah's argument was "giving up"
or "a higher form of holding on," how would you phrase the question?`,
      hintCn: `提示：DBQ 通常会给几个 primary source，让学生用证据分析、不给标准答案。
你可以想想给学生哪些材料：比如 Jeremiah 写给被掳者的那封信（《耶利米书》29 章，盖房种园、
为巴比伦求平安）、《诗篇》137 篇（被掳者的痛和愤怒、"怎能在外邦唱耶和华的歌"）、
还有主战派"联合埃及反巴比伦"的立场。

可能的提问角度：
- "Jeremiah 主张'在敌人的城里好好活'，这是对民族的背叛，还是为民族找的唯一活路？用材料论证。"
- "比较 Jeremiah 和主战派两种'爱国'：哪一种更可能让这个民族真正存续下来？"
注意 careful framing：故事的事实账本提醒，"说真话的人死在自己人手里"是金句修辞，
不是史实（Jeremiah 实际死在埃及）——出题别把金句当证据。`,
      hintEn: `Hint: a DBQ usually gives a few primary sources and asks students to argue from
evidence, with no single right answer. Think about which sources you'd give: e.g., Jeremiah's
letter to the deportees (Jeremiah 29 — build houses, plant gardens, pray for Babylon's peace),
Psalm 137 (the exiles' pain and rage, "how shall we sing the Lord's song in a strange land"),
and the war party's "ally with Egypt, revolt against Babylon" position.

Possible question angles:
- "Jeremiah urged people to 'live well in the enemy's city' — was this a betrayal of the
  nation, or the only path to survival he could find? Argue from the sources."
- "Compare Jeremiah's and the war party's two kinds of 'patriotism': which was more likely to
  let this people truly survive?"
Note the careful framing: the story's fact ledger reminds us that "the truth-teller dies at
his own people's hands" is a rhetorical flourish, not fact (Jeremiah actually died in Egypt)
— don't build a question that treats the slogan as evidence.`,
      conceptsActivated: ['jeremiah-prophetic-tradition', 'babylonian-exile', 'diaspora-portable-religion'],
    },
    {
      id: 'q3',
      cn: `公元前 539 年，波斯王居鲁士攻陷巴比伦；公元前 538 年，他下诏令准被掳的犹太人
回耶路撒冷、重建圣殿。在犹太传统里，居鲁士被记为"解放者"。

可历史学家提醒：居鲁士这么做，不一定是因为善意或信了犹太人的神，更可能是一种
"帝国治理策略"（让各民族保留信仰、换取忠诚）；而且现代有学者质疑那道"明令重建圣殿"的
诏令到底有多真实。

你觉得，我们应该怎么"读"居鲁士这个人和他的诏令——是解放者，是精明的统治者，还是别的？`,
      en: `In 539 BCE the Persian king Cyrus took Babylon; in 538 BCE he decreed that the deported
Jews could return to Jerusalem and rebuild the Temple. In Jewish tradition Cyrus is
remembered as a "liberator."

But historians caution: Cyrus may not have done this out of goodwill or belief in the Jews'
God — more likely it was an "imperial-administration strategy" (let peoples keep their faiths
in exchange for loyalty); and some modern scholars question how authentic that "order to
rebuild the Temple" decree really is.

How do you think we should "read" Cyrus and his decree — as a liberator, a shrewd ruler, or
something else?`,
      hintCn: `提示：可以从史料分层想——(1) 有独立于圣经的证据：Cyrus Cylinder（居鲁士圆柱，
真实出土的泥筒）记着他"遣返被掳民族、复其神庙"的总政策，说明这确实是真历史，不是犹太人
单方面编的。(2) 但"动机"是另一回事：一个统治者做一件好事，可能出于善意，也可能出于算计
（让你感激他、对帝国忠诚，省得你造反）——而且这两者**可以同时成立**。

进阶思考：当我们说一个历史人物"伟大"或"善良"时，我们是在描述他做的事，还是在猜他心里
怎么想？这两者一样吗？同一件"准人归回"的好事，从被解放的犹太人那边看、从居鲁士的帝国
账本那边看，会不会是两个完全不同的故事？`,
      hintEn: `Hint: think in evidence layers — (1) there's evidence independent of the Bible: the
Cyrus Cylinder (a real excavated clay cylinder) records his general policy of "returning
deported peoples and restoring their temples," showing this really is history, not something
the Jews made up on their own. (2) But "motive" is a separate matter: a ruler doing a good
thing might act from goodwill, or from calculation (make you grateful and loyal to the empire
so you won't revolt) — and the two **can both be true at once.**

Going deeper: when we call a historical figure "great" or "kind," are we describing what they
did, or guessing what was in their heart? Are those the same? The same good deed of "letting
people return" — seen from the freed Jews' side versus from Cyrus's imperial ledger — might
it be two completely different stories?`,
      conceptsActivated: ['cyrus-persia-second-temple', 'babylonian-exile', 'diaspora-portable-religion'],
    },
  ],
};

export default notebook;
