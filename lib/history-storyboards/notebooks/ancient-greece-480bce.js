// ─── 同伴笔记本架构 v1 · Ancient Greece 480 BCE ──────────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
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
//   - storyboard 提供情感锚点（Themistocles 设计者 / metic 居留外邦人 / Laurion 矿奴 受影响方三条线）
//   - notebook 提供考点闭环（城邦 polis、雅典民主 + Cleisthenes 508、公民与排除、希波战争三大战、
//     trireme + Laurion 银、斯巴达 vs 雅典、陶片放逐、希腊遗产 — 补完 CA HSS Grade 6 + AP World 课纲）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - CA HSS Grade 6.4（古希腊：城邦 / 雅典民主 / 斯巴达 / 希波战争）
//   - AP World History — Unit 1（state-building / participatory government；雅典 vs 波斯帝国对照）
//
// 事实地基：对账 history-narratives/ancient-greece-480bce.md（§2/§4/§6/§7/附录 A-C）
//   - 公元前 508 Cleisthenes 立民主，早于公元前 480 Salamis 一代人（BCE 越大越早）
//   - Thermopylae（陆 / 斯巴达带头 / 输）vs Salamis（海 / 雅典带头 / 决胜）严格分清
//   - 能投票公民约占全城 1/10 到 1/5；女性 / 被奴役者 / metic 全部排除
//   - Herodotus 为主要史料，转述不伪造逐字引文
//
// schemaVersion: 1 · notebookVersion: ancient-greece-480bce-v1

export var notebook = {
  topicId: 'ancient-greece-480bce',
  topicNameCn: '希波战争 480 BCE',
  topicNameEn: 'The Persian Wars 480 BCE',
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
    cn: `今天老师说我们要学公元前 480 年的希波战争（the Persian Wars）和雅典民主。
她说这是加州六年级世界史的核心单元，AP World 也拿雅典当「公民参与治理」的标准案例。

她给了一张纸，上面写着这些名字：

Themistocles（地米斯托克利）、Xerxes（薛西斯）、
Leonidas（列奥尼达）、Cleisthenes（克利斯提尼）

还有一串词：polis（城邦）、Assembly（公民大会）、citizen（公民）、
democracy（民主）、trireme（三列桨战船）、metic（居留外邦人）、
helot（希洛人）、ostracism（陶片放逐）、Persian Wars（希波战争）。

我先记下来，等下读三个故事——Themistocles（造海军赢仗的将领）、
一个 metic（交税流血却不能投票的外邦人）、一个 Laurion 矿奴（用命挖银却被排除的人）——
读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「雅典民主是人类一次了不起的发明，
也是一套精心画了排除线的制度。读它，要同时看见它的光荣和它排在门外的人。」`,
    en: `Today my teacher said we're learning the 480 BCE Persian Wars and Athenian democracy.
She said it's a core unit of California's sixth-grade world history, and AP World uses Athens
as the standard case for "citizens taking part in government."

She gave us a sheet with these names:

Themistocles, Xerxes,
Leonidas, Cleisthenes

Plus a string of terms: polis, Assembly, citizen, democracy, trireme, metic,
helot, ostracism, the Persian Wars.

Let me write these down. After I read the three stories — Themistocles (the general who built
the navy and won the war), a metic (a foreigner who paid taxes and bled yet could not vote),
and a Laurion mine slave (a man who dug the silver with his life yet was shut out) — I'll
come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "Athenian democracy was a
remarkable invention of humankind, and also a system that carefully drew a line of exclusion.
To read it, you have to see its glory and the people it left outside the door at the same time."`,
    keyTerms: [
      { cn: '城邦', en: 'polis (city-state)' },
      { cn: '公民大会', en: 'Assembly (ekklesia)' },
      { cn: '公民', en: 'citizen' },
      { cn: '民主', en: 'democracy (demokratia)' },
      { cn: '僭主', en: 'tyrant' },
      { cn: '三列桨战船', en: 'trireme' },
      { cn: '重装步兵', en: 'hoplite' },
      { cn: '居留外邦人 / 居留税', en: 'metic / metoikion' },
      { cn: '希洛人（斯巴达国家奴隶）', en: 'helot' },
      { cn: '陶片放逐', en: 'ostracism' },
      { cn: '希波战争', en: 'Persian Wars' },
      { cn: '银矿（劳里昂）', en: 'Laurion silver mines' },
    ],
    // mustKnow: true = 课标/考试必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '地米斯托克利',
        nameEn: 'Themistocles',
        ipa: '/θɪˈmɪstəkliːz/',
        roleCn: '雅典将领，用 Laurion 银矿的银造海军，在 Salamis 海战设局全歼波斯舰队，后被陶片放逐、死于波斯',
        roleEn: 'Athenian general who built a navy with the Laurion silver and trapped the Persian fleet at Salamis; later ostracized and died in Persia',
        mustKnow: true,
        audioKey: 'themistocles',
      },
      {
        nameCn: '薛西斯',
        nameEn: 'Xerxes',
        ipa: '/ˈzɜːrksiːz/',
        roleCn: '波斯大王，公元前 480 年亲率当时世界最大的军队入侵希腊，在 Salamis 山头目睹舰队覆灭',
        roleEn: 'King of Persia who in 480 BCE led the largest army of the age against Greece and watched his fleet destroyed from a hill at Salamis',
        mustKnow: true,
        audioKey: 'xerxes',
      },
      {
        nameCn: '列奥尼达',
        nameEn: 'Leonidas',
        ipa: '/liˈɒnɪdəs/',
        roleCn: '斯巴达国王，公元前 480 年 8 月率约 300 名斯巴达战士加盟友死守 Thermopylae 山间窄路，全部战死',
        roleEn: 'Spartan king who in August 480 BCE held the narrow pass of Thermopylae with about 300 Spartans and allies; all died there',
        mustKnow: true,
        audioKey: 'leonidas',
      },
      {
        nameCn: '克利斯提尼',
        nameEn: 'Cleisthenes',
        ipa: '/ˈklaɪsθəniːz/',
        roleCn: '雅典政治家，约公元前 508 年改革把权力从少数贵族交给全体公民，奠定雅典民主雏形（早 Salamis 一代人）',
        roleEn: 'Athenian statesman whose c. 508 BCE reforms took power from a few aristocrats and gave it to the whole body of citizens, founding Athenian democracy (a generation before Salamis)',
        mustKnow: true,
        audioKey: 'cleisthenes',
      },
      {
        nameCn: '希罗多德',
        nameEn: 'Herodotus',
        ipa: '/həˈrɒdətəs/',
        roleCn: '古希腊史家，《历史》(The Histories) 是希波战争的主要史料来源，被称为「历史学之父」',
        roleEn: 'Greek historian whose work The Histories is the main source for the Persian Wars; called "the Father of History"',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '伯里克利',
        nameEn: 'Pericles',
        ipa: '/ˈpɛrɪkliːz/',
        roleCn: '雅典领袖，公元前 450s-430s 把民主推向更激进的「黄金时代」——注意这比 480 年晚一代多，不要和 Salamis 时期混为一谈',
        roleEn: 'Athenian leader who in the 450s-430s BCE pushed democracy into its more radical "golden age" — note this is more than a generation after 480, not the same as the Salamis era',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'polis-city-state',
      termCn: '城邦（polis）',
      termEn: 'The Polis (City-State)',
      standardRef: ['CA HSS 6.4 — Ancient Greece', 'AP World Unit 1 — state-building'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'themistocles', nodeId: 'them-n2', context: 'Themistocles 讲希腊不是一个国家，是 Athens / Sparta / Corinth 等几百个互相打仗的城邦' },
          { lens: 'metic-resident', nodeId: 'mt-n2', context: 'metic 讲雅典是个地少粮缺、靠海运买粮卖橄榄油和陶器的贸易城邦' },
        ],
      },
      standaloneText: {
        cn: `**城邦（polis）** 是理解整个古希腊的钥匙，故事里反复提到，但没有单独讲清，所以单独掌握一下。

**polis = 一个独立自治的城市国家。** 它不只是一座城，而是「一座城 + 周边的乡村土地 + 住在里面的人 + 自己的一套政府」打包在一起的小国家。

关键事实：**希腊不是一个统一的国家。** 它是几百个各自为政的城邦，分散在山地和海岛之间。每个城邦自己管自己，有自己的法律、自己的神、自己的军队——平时它们之间还经常互相打仗。最有名的几个：Athens（雅典）、Sparta（斯巴达）、Corinth（科林斯）。

为什么会这样？因为希腊地形破碎：山多、平原少、海岸线极长。山把人隔成一块块，所以没长成一个大帝国，而是长成一堆小城邦。

这一点为什么重要（考点逻辑）：
- 因为城邦小、公民少，公民才**能面对面聚在一起投票**——这是「直接民主」在物理上成立的前提。城太大就开不成这种会。
- 因为希腊是一盘散沙的小城邦，面对统一的波斯帝国才显得那么弱——它们得临时凑成联盟才挡得住。

🔗 故事连接：Themistocles 那一遍第 2 节讲「希腊不是国家，是几百个互相打仗的城邦」；metic 那一遍第 2 节让你看见雅典作为贸易城邦的样子。`,
        en: `**The polis (city-state)** is the key to all of ancient Greece. The stories mention it
again and again but never unpack it on its own, so master it separately.

**A polis = an independent, self-governing city-state.** It is not just a city, but a small
nation bundling together "a city + the farmland around it + the people living there + its own
government."

Key fact: **Greece was not one unified country.** It was hundreds of self-governing city-states
scattered among mountains and islands. Each ran its own affairs, with its own laws, its own
gods, its own army — and in normal times they often fought one another. The most famous: Athens,
Sparta, Corinth.

Why? Because the land of Greece is broken up: many mountains, little flat plain, an enormous
coastline. The mountains cut people into separate pockets, so Greece grew not into one big
empire but into a cluster of small city-states.

Why this matters (the exam logic):
- Because a polis was small and had few citizens, those citizens **could gather face to face to
  vote** — that is the physical precondition for "direct democracy." A nation too large cannot
  hold a meeting like that.
- Because Greece was a scatter of small city-states, it looked so weak against the unified
  Persian Empire that it had to throw together an alliance just to hold the empire off.

🔗 Story link: Themistocles' pass, Node 2, explains "Greece is not a country, but hundreds of
city-states that fought one another"; the metic's pass, Node 2, lets you see Athens as a
trading polis.`,
      },
      xiaoweiNote: {
        cn: `老师说这是最容易被跳过、却最该先懂的一个词。我的记忆锚：**polis = 一座城自己当一个国。**
希腊不是「一个国家」，是「几百个小国」。

考点必背的一条因果：城邦小 → 公民能面对面开会投票 → 才有「直接民主」。
反过来，城邦一盘散沙 → 面对波斯帝国得凑联盟才挡得住。把「小」这个字记牢，半个考点就有了。`,
        en: `Teacher said this is the word most likely to get skipped but most worth understanding
first. My anchor: **polis = one city being its own country.** Greece was not "a country," it was
"hundreds of small countries."

A must-memorize cause-effect: small polis → citizens can meet face to face and vote → that's why
"direct democracy" was possible. The flip side: a scatter of city-states → they had to form an
alliance to hold off the Persian Empire. Lock in the word "small" and half the point is yours.`,
      },
    },

    {
      id: 'athenian-democracy-cleisthenes',
      termCn: '雅典民主与 Cleisthenes 改革（约公元前 508）',
      termEn: 'Athenian Democracy & Cleisthenes (c. 508 BCE)',
      standardRef: ['CA HSS 6.4 — Athenian democracy', 'AP World Unit 1 — participatory government'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'themistocles',
        nodeIds: ['them-n8', 'mt-n3'],
        xiaoweiNote: {
          cn: `Themistocles 那一遍第 8 节、metic 那一遍第 3 节都讲到了，我把它压成一条时间线：

**约公元前 508 年**，一个叫 **Cleisthenes（克利斯提尼）** 的雅典人改革，把权力从少数贵族手里
拿出来，交给「全体公民」。从此雅典的大事——打不打仗、谁当将领、要不要造船——都由
**公民大会（Assembly / ekklesia）** 投票决定。这就是后人说的 **democracy（民主）** 最早的样子。
demokratia = demos（人民）+ kratos（权力）。

⚠️ 时间陷阱（老师反复纠正）：**508 比 480 更早。** 公元前的数字越大越早！
Cleisthenes（508）→ Salamis（480），中间隔了一代人。所以 480 年时这套民主还很**年轻、很脆**。
更激进、更成熟的 **Pericles（伯里克利）时代是公元前 450s-430s**，比 Salamis 晚一代多，别混。

记忆锚：**Cleisthenes = 雅典民主的「奠基者」，比波斯战争早一代人。**
雅典是 **直接民主**（公民亲自到场投票、抽签任职），不是我们今天的代议制。`,
          en: `Themistocles' pass Node 8 and the metic's pass Node 3 both cover this. I compress it
into one timeline:

**Around 508 BCE**, an Athenian named **Cleisthenes** reformed the rules, taking power out of the
hands of a few aristocrats and giving it to "the whole body of citizens." From then on, Athens'
great matters — whether to go to war, who would be general, whether to build ships — were decided
by a vote of the **Assembly (ekklesia)**. This is the earliest shape of what later ages call
**democracy**. demokratia = demos (people) + kratos (power).

⚠️ Date trap (teacher kept correcting it): **508 is earlier than 480.** The bigger the BCE number,
the earlier! Cleisthenes (508) → Salamis (480), a generation apart. So in 480 this democracy was
still **young and fragile**. The more radical, more mature **age of Pericles was the 450s-430s BCE**,
more than a generation after Salamis — don't mix them up.

Anchor: **Cleisthenes = the founder of Athenian democracy, a generation before the Persian Wars.**
Athens was a **direct democracy** (citizens showed up in person to vote and held office by lot),
not the representative system we have today.`,
        },
      },
    },

    {
      id: 'citizenship-and-exclusion',
      termCn: '公民身份与排除（谁被算进「人民」）',
      termEn: 'Citizenship & Exclusion (Who Counted as "the People")',
      standardRef: ['CA HSS 6.4 — Athenian society', 'AP World Unit 1 — social structures', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'metic-resident',
        nodeIds: ['mt-n3', 'mt-n6', 'mt-n8'],
        xiaoweiNote: {
          cn: `metic 那一遍整条线就是这个，第 3、6、8 节最戳人。这是全 topic 最锋利的考点：
**「公民自己治理自己」每个字都是真的——骗人的是「公民」这个词圈得有多小。**

雅典的 **公民（citizen）** 只算：**成年 + 男性 + 父母都是雅典人。**
算下来，能投票的公民大概只占全城所有人的 **十分之一到五分之一**。

被画在「公民」这条线**外面**的人（合起来是全城绝大多数）：
- **女性**——生在城里也没有投票权。
- **被奴役者**——根本不算「人」，是财产（约占总人口四分之一到三分之一）。
- **metic（居留外邦人）**——自由、纳税（每月交居留税 metoikion）、打仗上船流血，可永远不能投票、
  不能拥有土地。因为雅典认定「公民」是**血脉里带来的**（父母都得是雅典人），不是后天挣得来的。

metic 那句话我记死了：**「我流的血算数，我这个人不算数。」**（第 6 节）

考点关键句：雅典民主**不是骗局**，它是真民主——但它的「人民」从一开始就圈得极小。
它发明的不只是「让公民参与」，还有一条特别清楚的线：**谁算人民，谁不算。** 光荣和排除，是同一套制度的两面。`,
          en: `The metic's whole pass is about this, and Nodes 3, 6, and 8 hit hardest. This is the
sharpest point in the whole topic: **"citizens governing themselves" is true in every word — what
deceives you is how small the word "citizen" was drawn.**

An Athenian **citizen** counted only as: **adult + male + with both parents Athenian.**
Tally it up and the citizens who could vote were perhaps only **a tenth to a fifth** of everyone
in the city.

The people drawn **outside** the line of "citizen" (together the vast majority of the city):
- **Women** — born in the city yet with no vote.
- **The enslaved** — not counted as "people" at all, but property (about a third of the total
  population, perhaps more).
- **Metics (resident foreigners)** — free, tax-paying (a monthly residence tax, the metoikion),
  rowing and bleeding in war, yet never able to vote or own land. Because Athens held that
  "citizen" was **carried in the blood** (both parents had to be Athenian), not something earned.

The metic's line I memorized cold: **"My blood counted, and I myself did not count."** (Node 6)

Key exam sentence: Athenian democracy was **not a fraud** — it was real democracy, but it drew
its "people" extremely small from the start. What it invented was not only "letting citizens take
part," but a very clear line: **who counts as the people, and who does not.** Glory and exclusion
are two faces of one system.`,
        },
      },
    },

    {
      id: 'persian-wars-three-battles',
      termCn: '希波战争三大战（Thermopylae / Salamis / Plataea）',
      termEn: 'The Persian Wars: Three Battles (Thermopylae / Salamis / Plataea)',
      standardRef: ['CA HSS 6.4 — Persian Wars', 'AP World Unit 1 — empire vs city-states'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'themistocles',
        nodeIds: ['them-n4', 'them-n6', 'them-n7'],
        xiaoweiNote: {
          cn: `Themistocles 那一遍第 4、6、7 节把整场战争串起来了。背景：波斯大王 **Xerxes（薛西斯）**
要报公元前 490 年 Marathon（马拉松）那场旧账，公元前 480 年亲率当时世界最大的军队压向希腊。

老师说这里**最容易考错**，必须把三大战分清楚（一张表背死）：

| 战役 | 时间 | 陆 / 海 | 谁带头 | 结果 |
|---|---|---|---|---|
| **Thermopylae（温泉关）** | 前 480 年 8 月 | **陆** | **斯巴达**（Leonidas + 约 300 人）| **输**（全部战死，路也没守住）|
| **Salamis（萨拉米斯）** | 前 480 年 9 月 | **海** | **雅典**（Themistocles）| **决胜**（全歼波斯舰队）|
| **Plataea（普拉提亚）** | 前 479 年 | **陆** | **斯巴达**带头 | **赢，结束整场战争** |

⚠️ 两个高频错误：
❌「斯巴达 300 勇士守住了温泉关」→ ✅ **Thermopylae 是输的**——人全死了，路没守住。
❌「雅典和斯巴达一样，温泉关赢了」→ ✅ 真正**扭转战局**的是海上的 **Salamis**，是**雅典**的功劳。

记忆锚：**陆地（斯巴达，Thermopylae 输 / Plataea 收尾）vs 海上（雅典，Salamis 决胜）。**
后人爱讲「300 勇士」那个悲壮的失败，却常忘了真正赢仗的是海上的精明谋略。`,
          en: `Themistocles' pass Nodes 4, 6, and 7 string the whole war together. Background: the
Persian king **Xerxes** wanted to settle an old score from the 490 BCE battle of Marathon, and in
480 BCE led the largest army of the age against Greece.

Teacher said this is **the easiest place to get wrong**, so keep the three battles straight
(memorize this table cold):

| Battle | When | Land / Sea | Led by | Result |
|---|---|---|---|---|
| **Thermopylae** | Aug 480 BCE | **Land** | **Sparta** (Leonidas + ~300) | **Loss** (all died, the road was not held) |
| **Salamis** | Sept 480 BCE | **Sea** | **Athens** (Themistocles) | **Decisive win** (Persian fleet destroyed) |
| **Plataea** | 479 BCE | **Land** | **Sparta**-led | **Win, ended the whole war** |

⚠️ Two high-frequency errors:
❌ "The 300 Spartans held Thermopylae." → ✅ **Thermopylae was a loss** — the men all died and the
road was not held.
❌ "Athens was like Sparta, they won at Thermopylae." → ✅ The battle that truly **turned the war**
was **Salamis** at sea, and that was **Athens'** doing.

Anchor: **Land (Sparta — Thermopylae lost / Plataea finished it) vs Sea (Athens — Salamis decided
it).** Later ages love the tragic failure of the "300," but often forget that the war was actually
won by clever strategy at sea.`,
        },
      },
    },

    {
      id: 'trireme-naval-power-laurion',
      termCn: '三列桨战船、海上力量与 Laurion 银',
      termEn: 'The Trireme, Naval Power & the Laurion Silver',
      standardRef: ['CA HSS 6.4 — Persian Wars / Athenian navy', 'AP World Unit 1 — economy & state power'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'laurion-slave-receiving-end',
        nodeIds: ['them-n3', 'ls-n3', 'ls-n6'],
        xiaoweiNote: {
          cn: `这是全 topic 最核心的一条**事实链**，Themistocles 那一遍第 3 节和 Laurion 矿奴那一遍第 3、6 节
从两头讲同一件事。我把它背成一条**因果链**：

**Laurion 银（前 483 富脉）→ 约 200 条 trireme（三列桨战船）→ 赢 Salamis（前 480）→ 救「自由希腊」。**

拆开记：
- **trireme（三列桨战船）**：靠几百个划桨手一起拼命划的战船。它**船小、灵活**——在 Salamis 那条
  **窄海峡**里，波斯的大船多反而挤成一团、转不开、互相撞，雅典的小船灵活地钻进去撞，赢了。
- **钱从哪来**：公元前 483 年雅典在城南 **Laurion（劳里昂）银矿**挖到一条富矿脉。多数公民想按人头
  把银分掉，**Themistocles** 在公民大会上说服大家别分，拿这笔银去造海军。
- **代价**：那批银是 **Laurion 银矿被奴役的矿工**用命挖出来的。

跨视角锚（必考的对位，第 6 节）：**同一点银子，两个相反的意思。**
在 Themistocles 手里是「救希腊的本钱、雅典的光荣」；在矿奴手里是「用我的命换的，救的从来不是我」。

考点关键句：雅典的海上霸权不是凭空来的——**底下垫着 Laurion 的银，银底下垫着挖银人的命。**`,
          en: `This is the most central **chain of fact** in the whole topic. Themistocles' pass Node 3
and the Laurion miner's pass Nodes 3 and 6 tell the same thing from two ends. I memorize it as a
**cause-effect chain**:

**Laurion silver (483 BCE rich vein) → about 200 triremes → win at Salamis (480 BCE) → save "free
Greece."**

Break it down:
- **Trireme**: a warship driven by a few hundred rowers straining together. It was **small and
  nimble** — in the **narrow strait** at Salamis, Persia's many large ships jammed into a mass, too
  cramped to turn, ramming one another, while Athens' small ships darted in to ram and won.
- **Where the money came from**: in 483 BCE Athens struck a rich vein at the **Laurion silver mines**
  south of the city. Most citizens wanted to share the silver out per head; **Themistocles** persuaded
  the Assembly not to, and to build a navy with it instead.
- **The price**: that silver was dug with their lives by **the enslaved miners of Laurion**.

Cross-lens anchor (a must-know pairing, Node 6): **the same silver, two opposite meanings.**
In Themistocles' hands it is "the capital that saved Greece, Athens' glory"; in the miner's hands
it is "bought with my life, and what it saved was never me."

Key exam sentence: Athens' naval power did not come from nowhere — **under it lay the Laurion
silver, and under the silver lay the lives of the people who dug it.**`,
        },
      },
    },

    {
      id: 'sparta-vs-athens',
      termCn: '斯巴达 vs 雅典（两座城邦的对照）',
      termEn: 'Sparta vs Athens (A Contrast of Two City-States)',
      standardRef: ['CA HSS 6.4 — Sparta and Athens', 'AP World Unit 1 — comparative state types'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'themistocles', nodeId: 'them-n4', context: 'Themistocles 讲斯巴达是陆地最强、只信硬碰硬，Leonidas 率约 300 人守 Thermopylae' },
          { lens: 'laurion-slave-receiving-end', nodeId: 'ls-n8', context: 'Laurion 矿奴拆穿斯巴达靠数倍于己的 helot 国家奴隶养着全职战士，甚至每年合法杀一些防造反' },
        ],
      },
      standaloneText: {
        cn: `故事里 Athens（雅典）和 Sparta（斯巴达）反复一起出现，但它们其实是**两种完全不同的城邦**，
老师说千万别把它们当成「都是希腊英雄」混为一谈。背一张对照表：

| | **雅典 Athens** | **斯巴达 Sparta** |
|---|---|---|
| 制度 | **民主**（公民大会投票自治）| **军事寡头**（少数人 + 两个王统治）|
| 强在哪 | **海上**（海军 / trireme）| **陆地**（重装步兵 hoplite）|
| 经济靠 | 贸易、海运、手工业 | 农业，靠 **helot（希洛人）国家奴隶**种地 |
| 重点战役 | **Salamis（海，决胜）** | **Thermopylae / Plataea（陆）** |
| 风格 | 文化、商业、辩论 | 全民当兵，男孩从小军事训练 |

关键事实（也是清坑点）：**斯巴达靠 helot 撑起来。** 斯巴达征服了邻邦，把整族人变成**国家的奴隶
（helot）**，让他们种地、干活，养活全职的斯巴达战士。helot 的数量比斯巴达人多**好几倍**——斯巴达人
怕他们造反，甚至每年「合法地」杀掉一些 helot。

为什么这对考试重要：很多人以为「斯巴达 = 雅典，都是为自由而战的希腊英雄」。其实
①两座城制度完全不同（一个民主、一个军事寡头）；
②两座城**都是蓄奴社会**——雅典靠 Laurion 矿奴，斯巴达靠 helot。「自由的希腊」本身建在奴隶身上。

🔗 故事连接：Themistocles 那一遍第 4 节让你看见斯巴达「只信陆地硬碰硬」；
Laurion 矿奴那一遍第 8 节专门拆穿斯巴达 300 勇士背后的 helot。`,
        en: `In the stories Athens and Sparta keep appearing together, but they were in fact **two
utterly different kinds of polis**, and teacher said never lump them together as "both Greek heroes."
Memorize a contrast table:

| | **Athens** | **Sparta** |
|---|---|---|
| System | **Democracy** (Assembly votes, self-rule) | **Military oligarchy** (a few + two kings) |
| Strength | **Sea** (navy / trireme) | **Land** (hoplite infantry) |
| Economy | Trade, shipping, crafts | Farming, worked by **helot state slaves** |
| Key battles | **Salamis (sea, decisive)** | **Thermopylae / Plataea (land)** |
| Style | Culture, commerce, debate | Whole society under arms, boys trained from childhood |

Key fact (also a myth-buster): **Sparta was held up by the helots.** Sparta had conquered its
neighbors and turned whole peoples into **state slaves (helots)** to till the land and labor, feeding
the full-time Spartan warriors. The helots outnumbered the Spartans **several times over** — and the
Spartans, fearing revolt, even "lawfully" killed some helots each year.

Why this matters for the exam: many people assume "Sparta = Athens, both Greek heroes who fought for
freedom." In fact:
1. the two cities had completely different systems (one a democracy, one a military oligarchy);
2. both cities were **slaveholding societies** — Athens on the Laurion miners, Sparta on the helots.
"Free Greece" itself stood on slaves.

🔗 Story link: Themistocles' pass Node 4 shows Sparta "believing only in a head-to-head stand on
land"; the Laurion miner's pass Node 8 takes apart the helots behind the 300 Spartans.`,
      },
      xiaoweiNote: {
        cn: `我的记忆口诀：**雅典 = 海 + 民主 + 贸易；斯巴达 = 陆 + 当兵 + helot。**
一个用脑子和海军（Salamis），一个用纪律和长矛（Thermopylae）。

但最该记住的一句：**两座城都是蓄奴社会。** 喊「自由」喊得最响的雅典和斯巴达，自己脚底下都踩着奴隶
（雅典 Laurion 矿奴 / 斯巴达 helot）。这句话是 DBQ 的金句。`,
        en: `My mnemonic: **Athens = sea + democracy + trade; Sparta = land + soldiering + helots.**
One used brains and a navy (Salamis), the other discipline and spears (Thermopylae).

But the one line most worth remembering: **both cities were slaveholding societies.** The Athens and
Sparta that cried "freedom" loudest both stood on slaves (the Laurion miners / the helots). That
line is gold for a DBQ.`,
      },
    },

    {
      id: 'ostracism',
      termCn: '陶片放逐（ostracism）',
      termEn: 'Ostracism',
      standardRef: ['CA HSS 6.4 — Athenian democracy', 'AP World Unit 1 — checks on power'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'themistocles',
        nodeIds: ['them-n9'],
        xiaoweiNote: {
          cn: `Themistocles 那一遍第 9 节讲到了，结局特别讽刺，所以单列一张卡。

**ostracism（陶片放逐）= 雅典民主用来「自我保护」的一种机制。**
每年公民大会可以投一次票：大家把自己想赶走的人的名字，刻在**碎陶片（ostraka）**上。谁的名字被刻得
最多，谁就被放逐出城**十年**——**不审判、不定罪**，纯粹因为「你权力太大，我们不放心」。

为什么民主要这么做？为了**防止任何一个人权力过大**、变成 tyrant（僭主，靠手段夺权的独裁者）。
这体现了雅典民主对集权的**警惕**。

讽刺的结局（也是 DBQ 爱用的张力）：救了雅典、赢了 Salamis 的英雄 **Themistocles**，约公元前 471 年
被他亲手救的那座城**陶片放逐**了。被各城追杀后，他走投无路，最后逃到了——**波斯**，就是他在 Salamis
打垮的那个帝国，靠波斯王给的封地终老。**救民主的城把他赶走，他打垮的敌人成了他最后的收留者。**

考点关键句：ostracism 既是民主**防集权的智慧**，也意味着**救城的功臣可以被同一群人无罪放逐**——
这两面同时成立。（考古真的挖出过刻着 Themistocles 名字的陶片。）`,
          en: `Themistocles' pass Node 9 covers this, and the ending is so ironic it gets its own card.

**Ostracism = a mechanism Athenian democracy used to "protect itself."**
Once a year the Assembly could hold a vote: people scratched the name of the man they wanted gone
onto a broken **potsherd (ostrakon)**. Whoever's name was scratched most was exiled from the city for
**ten years** — **no trial, no conviction** — purely because "you are too powerful and we do not
trust it."

Why would a democracy do this? To **stop any one man from growing too powerful** and becoming a
tyrant (a dictator who seizes power by cunning). It shows Athenian democracy's **wariness** of
concentrated power.

The ironic ending (a tension DBQs love): **Themistocles**, the hero who saved Athens and won Salamis,
was **ostracized** around 471 BCE by the very city he had saved. Hunted from city to city, with
nowhere left to go, he fled at last to **Persia** — the very empire he had broken at Salamis — and
lived out his age on lands the Persian king gave him. **The democratic city he saved drove him out,
and the enemy he broke became his final refuge.**

Key exam sentence: ostracism was both democracy's **wisdom in guarding against tyranny** and a means
by which **a city's savior could be exiled, without crime, by the same people** — both faces at once.
(Archaeologists really have dug up potsherds scratched with Themistocles' name.)`,
        },
      },
    },

    {
      id: 'greek-legacy-exclusion-line',
      termCn: '希腊遗产：民主的传承与「谁算人民」这条线',
      termEn: 'Greek Legacy: Democracy Passed Down & the Line of "Who Counts"',
      standardRef: ['CA HSS 6.4 — legacy of Greece', 'AP World Unit 1 — long-term continuity', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'metic-resident', nodeId: 'mt-n9', context: 'metic 把「谁算自己人」这条线从雅典连到 1787 费城 We the People' },
          { lens: 'laurion-slave-receiving-end', nodeId: 'ls-n9', context: 'Laurion 矿奴把「自由踩在不自由人身上」连到 1787 宪法 3/5 妥协 + 种棉花奴隶' },
        ],
      },
      standaloneText: {
        cn: `这一张卡讲「**so what？这一切跟两千多年后的我们有什么关系**」——AP World 最看重的「长期影响」，
故事在 metic 第 9 节和 Laurion 矿奴第 9 节都点到了，但没系统讲，所以单独掌握。

**遗产的光荣那一面：**
雅典被后世奉为「**民主的摇篮**」。demokratia 这个词、以及「公民自己治理自己」这个理念，深刻影响了后世
西方政治——一直到今天的代议制民主，都上溯于此。**注意区别**：雅典是**直接民主**（公民亲自到场投票，
只在小城邦规模上可行）；现代是**代议制 + 普选权**，是两千年演化与不断扩大投票权的结果，不是一回事。

**遗产没说出口的那一面（DBQ 高频）：**
雅典留下的不只是「参与」，还有一道难题：**一个自由的共同体，到底凭什么决定「谁算人民、谁被排除」？**
这条线从雅典一直被重画到今天：
- 雅典：**公民 = 成年雅典男性**（女性 / 奴隶 / metic 排除）。
- 1787 年费城：宪法开头喊「**We the People（我们人民）**」，可那个「人民」当时只算**有产白人男性**——
  被奴役者、女人、原住民被画在线外，被奴役者还被算成 **3/5 个人**。
- 直到今天：公民权、投票权的辩论，还在继续画这条线。

考点金句：**「谁被算进政治共同体」是一道跨两千年的同一道题**——从雅典的 metic 和矿奴，到费城的
「We the People」。这条线**从来不是天经地义的，它是人画的；是人画的，就能被人重新画。**

🔗 故事连接：metic 第 9 节、Laurion 矿奴第 9 节都把这条线接到了 1787 费城那个 topic。你跑过那个
topic 的话会认得「We the People」「3/5 妥协」。`,
        en: `This card answers "**so what — what does all this have to do with us two thousand years
later**" — the "long-term impact" AP World prizes most. The stories touch it in the metic's Node 9 and
the Laurion miner's Node 9, but don't lay it out systematically, so master it separately.

**The glory side of the legacy:**
Athens is honored by later ages as **the cradle of democracy**. The word demokratia and the idea of
"citizens governing themselves" deeply shaped later Western politics — right down to today's
representative democracy, which traces back to it. **Note the difference**: Athens was a **direct
democracy** (citizens voting in person, workable only at the scale of a small polis); modern systems
are **representative + universal suffrage**, the result of two thousand years of evolution and the
steady widening of the vote. They are not the same thing.

**The unspoken side of the legacy (high-frequency DBQ):**
What Athens left was not only "participation," but also a hard question: **on what grounds does a free
community decide "who counts as the people and who is excluded"?** This line has been redrawn from
Athens to today:
- Athens: **citizen = adult Athenian male** (women / the enslaved / metics excluded).
- Philadelphia, 1787: the Constitution opens crying "**We the People**," yet that "people" counted
  only **propertied white men** at the time — the enslaved, women, and native peoples were drawn
  outside the line, and the enslaved were even counted as **three-fifths of a person**.
- To this day: debates over citizenship and voting rights are still drawing this line.

Key exam line: **"who is counted into the political community" is one and the same question across two
thousand years** — from Athens' metics and miners to Philadelphia's "We the People." That line **was
never fixed by heaven; it was drawn by people, and what people draw, people can draw again.**

🔗 Story link: the metic's Node 9 and the Laurion miner's Node 9 both connect this line to the 1787
Philadelphia topic. If you have run that topic, you'll recognize "We the People" and the "Three-Fifths
Compromise."`,
      },
      xiaoweiNote: {
        cn: `老师说 AP 评分最爱看「**跨时空对位**」——能把雅典和 1787 费城放在一起比，立刻就是高分的
complexity（复杂性）。我的口诀：**雅典「公民 = 成年男性」 ↔ 费城「We the People = 有产白人男性」**，
同一道「谁算人民」的题，隔了两千年。

记两件事就够：①雅典是民主的源头（但直接民主 ≠ 现代代议制）；②那条「谁在里、谁在外」的排除线，
两千年来一直被重画——既然是人画的，今天还能继续画。`,
        en: `Teacher said AP scoring loves a **cross-time pairing** — putting Athens and 1787 Philadelphia
side by side instantly reads as high-scoring complexity. My mnemonic: **Athens "citizen = adult male"
↔ Philadelphia "We the People = propertied white men"** — the same "who counts as the people" question,
two thousand years apart.

Two things are enough: (1) Athens is the source of democracy (but direct democracy is not modern
representative democracy); (2) that line of "who is in, who is out" has been redrawn for two thousand
years — and since people draw it, people can keep drawing it.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `公元前 480 年那场大胜，被传颂成「自由的希腊」战胜了「专制的波斯」。
可这场「自由」的胜利，靠的是 Laurion 银矿里被奴役的人用命挖出的银造的战船；
赢了之后，挖银的人日子一天没变，监工和鞭子照旧回来。

你觉得，一座城的「自由」，可以建立在另一些人的「不自由」之上吗？
这场胜利还配叫「自由的胜利」吗？用至少两条具体证据支持你的判断。`,
      en: `The 480 BCE victory is celebrated as "free Greece" defeating "despotic Persia."
Yet this victory of "freedom" turned on warships built from silver dug with their lives by the
enslaved of the Laurion mines; and after the win, the miners' lives did not change for a single
day — the overseers and the whip came right back.

Do you think a city's "freedom" can be built on the "unfreedom" of others? Does this victory still
deserve to be called "a victory of freedom"? Support your judgment with at least two specific pieces
of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- 「配」这边的证据：一群分散小城邦确实挡住了当时世界最大的帝国；保住了「公民自己治理自己」这种人类
  以前没真正试过的东西，它后来长成了影响全世界的民主。
- 「不配 / 要打问号」这边的证据：Laurion 矿奴用命挖的银付了胜利的账，胜利后他的处境一天没变；
  雅典靠矿奴、斯巴达靠 helot，喊「自由」的两座城自己都是蓄奴社会。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.
- Evidence for "it deserves it": a scatter of small city-states really did hold off the largest empire
  of the age; it preserved "citizens governing themselves," a thing humankind had never truly tried,
  which later grew into the democracy that shaped the whole world.
- Evidence for "it doesn't / it earns a question mark": the Laurion miner paid the bill with his life
  and his lot did not change for a day after the win; Athens leaned on its mine slaves and Sparta on its
  helots — both cities that cried "freedom" were themselves slaveholding societies.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['trireme-naval-power-laurion', 'sparta-vs-athens'],
    },
    {
      id: 'q2',
      cn: `一个 metic 为雅典开店、纳税、上船划桨流血，住了大半辈子，
可他永远不能在公民大会投票、不能拥有一寸土地——只因为他「不是在这儿生出来的」。
雅典人觉得「公民」是血脉里带来的，不是后天挣得来的。

一个人对一座城的归属，到底该由**出身**决定，还是由**付出**决定？
如果你是 AP 老师，要出一道题考这个张力，你会怎么提问？请写出你的题目，并说明它想逼学生看见什么。`,
      en: `A metic kept a shop in Athens, paid taxes, rowed and bled in the fleet, and lived there most
of his life — yet he could never vote in the Assembly or own a single foot of land, only because he
was "not born here." The Athenians held that "citizen" was carried in the blood, not earned afterward.

Should a person's belonging to a city be decided by **birth**, or by **contribution**? If you were an
AP teacher writing a question on this tension, how would you phrase it? Write your question and explain
what it is meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
你可以从 metic 那句话切入——「我流的血算数，我这个人不算数」。这句话点出了雅典「公民」定义的盲区：
它收下你的钱、你的命，就是不肯把你算进「人民」。
你的题目可以让学生对比「雅典靠**血脉**定公民」和「另一种靠**付出 / 居住**定归属」的标准——
各有什么好处和危险？哪一种更公平？再连到今天：一个人在一个国家住多久、出多少力，才算「自己人」？
AP 看的是你能不能用一个真实处境（metic）把抽象的「归属该由什么决定」钉在证据上。`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through the metic's line — "my blood counted, and I myself did not count." That line
names the blind spot in Athens' definition of "citizen": it took his money and his life and still would
not count him into "the people."
Your question could have students compare "Athens defining citizenship by **blood**" with "another
standard defining belonging by **contribution / residence**" — what are the benefits and dangers of
each? Which is fairer? Then connect to today: how long must a person live in a country, and how much must
they give, to count as "one of us"? AP wants you to "pin" the abstract question of "what should decide
belonging" to evidence with one real situation (the metic).`,
      conceptsActivated: ['citizenship-and-exclusion', 'greek-legacy-exclusion-line'],
    },
    {
      id: 'q3',
      cn: `后人记住了「斯巴达 300 勇士」守 Thermopylae——可那其实是一场**败仗**，人全死了、路也没守住。
真正扭转战局、全歼波斯舰队的是海上的 Salamis，是 Themistocles 用谋略赢的。
而 Themistocles 救了城，没几年就被同一座城**陶片放逐**，死在波斯。

为什么「悲壮的失败」（300 勇士）比「精明的胜利」（Salamis）更容易被记住？
你同意「一个制度应该防范自己最强的功臣」（陶片放逐）这个思路吗？这是民主的智慧，还是它的忘恩负义？
用故事里的一个具体事实支持你的看法。`,
      en: `Later ages remember the "300 Spartans" who held Thermopylae — yet that was in fact a **loss**:
the men all died and the road was not held. The battle that truly turned the war and destroyed the
Persian fleet was Salamis at sea, won by Themistocles' strategy. And Themistocles, who saved the city,
was within a few years **ostracized** by that same city and died in Persia.

Why is a "tragic failure" (the 300) more easily remembered than a "clever victory" (Salamis)? Do you
agree with the idea that "a system should guard against its own strongest hero" (ostracism)? Is this the
wisdom of democracy, or its ingratitude? Support your view with one specific fact from the story.`,
      hintCn: `提示：先把两件事分清楚——Thermopylae（陆 / 斯巴达 / 输）和 Salamis（海 / 雅典 / 决胜），
别写串了。第一问可以从「故事好不好讲」想：陆地英雄全员战死的悲壮，比海上一场靠假情报和窄海峡赢的
精明谋略，更容易被改编成传奇——这对我们「怎么相信历史」是个提醒。
第二问可以举一个具体机制：陶片放逐——每年投票、刻名陶片、最多者放逐十年、不审判。它一边是
**防集权、防 tyrant（僭主）的智慧**，一边可以让**救城的功臣无罪被赶走**（Themistocles 就是例子）。
进阶：今天的学校、球队、社团里，有没有「靠规则防止某个人权力过大」的设计？你觉得这种防范是必要的，
还是会寒了真正做事的人的心？AP 看的是你能不能用一个真实机制把抽象论点钉在证据上。`,
      hintEn: `Hint: first keep the two battles straight — Thermopylae (land / Sparta / loss) and Salamis
(sea / Athens / decisive) — don't mix them. For the first part, think about "which story is easier to
tell": the tragedy of land heroes dying to the last man is more easily turned into legend than a clever
victory won at sea by false intelligence and a narrow strait — a reminder about "how we come to believe
history."
For the second part, cite a specific mechanism: ostracism — a yearly vote, names on potsherds, the most-
named exiled for ten years, no trial. It is at once the **wisdom of guarding against tyranny** and a way
for a **city's savior to be driven out without a crime** (Themistocles is the example). Going deeper: in
your school, team, or clubs today, is there a design that "uses rules to keep any one person from growing
too powerful"? Do you think such guarding is necessary, or does it chill the people who actually get
things done? AP wants you to pin the abstract claim to evidence with one real mechanism.`,
      conceptsActivated: ['persian-wars-three-battles', 'ostracism'],
    },
  ],
};

export default notebook;
