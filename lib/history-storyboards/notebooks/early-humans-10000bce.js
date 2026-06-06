// ─── 同伴笔记本架构 v1 · Early Humans & the Neolithic Revolution (约前 10000) ───
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），与 reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 12 张核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson) + xiaoweiNote
//          —— standaloneText / xiaoweiNote 均放卡顶层，绝不嵌进 storyAnchor
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 课纲对齐：
//   - CA HSS Grade 6.1（早期人类与农业革命 · 古代世界轨第一课）
//   - AP World History CED Unit 1 前置（农业→定居→剩余→国家 的物质链地基）
//   - AP/历史思维核心：continuity & change（延续与变化）+ causation（因果）+ comparison
//
// 事实地基：对账 early-humans-10000bce-factledger.md（27 claims，4 红旗均为区间/措辞类）
//   - 所有年代用"约"；两套尺子（年前 vs BCE），不混用
//   - Göbekli Tepe"信仰先于农业""被埋"均为假说，措辞用"可能/有争议"
//   - §8 中国双向中性：多中心、各自独立、时间相近——不说谁最早最强
//   - lens id: hunter-gatherer-actor / gobekli-builder-mediator / first-generation-farmer-receiving-end
//
// schemaVersion: 1 · notebookVersion: early-humans-10000bce-v1

export var notebook = {
  topicId: 'early-humans-10000bce',
  topicNameCn: '早期人类与新石器革命（约前 10000 年）',
  topicNameEn: 'Early Humans & the Neolithic Revolution',
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
    cn: `今天老师说我们要学「早期人类和新石器革命」——就是人类从「跟着大地走」的猎人，
变成「让大地围着自己转」的农民的那次大转弯（大约一万年前）。
她说这是六年级世界史一整年的「地基课」，后面学的四大古文明、城市、国王、文字，
全都从这一课长出来；AP World 也默认你先懂「农业→定居→剩余→国家」这条链。

她在白板上写了一串词：
Neolithic Revolution（新石器革命）、domestication（驯化）、
hunter-gatherer（狩猎采集者）、Fertile Crescent（肥沃新月地带）、
Göbekli Tepe（哥贝克力石阵）、surplus（剩余粮食）、
multiple origins（多中心起源）。

她还说了一句让我有点意外的话：「农业不一定是『人类终于变聪明了』。
对最早那批农民，它可能更累、更矮、更病——
你要同时看见它对整个人类的伟大，和它压在个人身上的代价。」

我先记下来。等下读三个故事——一个守旧的老猎人、一个还在凿石头的哥贝克力工匠、
一个跪在石磨前的农家少女——读完再回来对照这张单子，看我能不能讲清楚每个词。

哦对，老师特别说：中国（长江种稻、黄河种粟）就是世界上几个「各自独立」发明农业的地方之一——
这条我得记牢，因为这是「我祖先在世界开篇地图上的位置」。`,
    en: `Today my teacher said we're learning "Early Humans and the Neolithic Revolution" —
the big turn (about ten thousand years ago) when humans went from hunters who "followed
the land" to farmers who "made the land circle around them." She said this is the
"foundation lesson" for our whole year of 6th-grade world history — the ancient
civilizations, cities, kings, and writing we learn later all grow out of this one. AP World
also assumes you already understand the chain "farming → settling → surplus → states."

She wrote a string of terms on the board:
Neolithic Revolution, domestication, hunter-gatherer, Fertile Crescent,
Göbekli Tepe, surplus, multiple origins.

She also said something that surprised me: "Farming isn't necessarily 'humans finally got
smart.' For the first farmers it may have been more tiring, shorter, sicker — you have to
see at the same time both its greatness for all of humankind and its cost on the individual."

Let me write these down. After I read the three stories — a stubborn old hunter, a
stone-carver still chipping rock at Göbekli Tepe, and a farm girl kneeling at the grinding
stone — I'll come back and check whether I can explain each term.

Oh, and teacher stressed: China (rice by the Yangtze, millet by the Yellow River) is one of
the several places that invented farming "independently" — I need to remember this, because
it's "where my ancestors sit on the opening map of world history."`,
    keyTerms: [
      { cn: '新石器革命', en: 'Neolithic Revolution' },
      { cn: '驯化', en: 'domestication' },
      { cn: '狩猎采集者', en: 'hunter-gatherer' },
      { cn: '智人 / 现代人', en: 'Homo sapiens' },
      { cn: '走出非洲', en: 'Out of Africa' },
      { cn: '肥沃新月地带', en: 'Fertile Crescent' },
      { cn: '全新世', en: 'Holocene' },
      { cn: '哥贝克力石阵', en: 'Göbekli Tepe' },
      { cn: '恰塔霍裕克 / 耶利哥', en: 'Çatalhöyük / Jericho' },
      { cn: '单粒麦 / 二粒麦', en: 'einkorn / emmer' },
      { cn: '剩余粮食', en: 'surplus' },
      { cn: '定居', en: 'sedentism' },
      { cn: '社会分层 / 不平等', en: 'social stratification / inequality' },
      { cn: '多中心起源', en: 'multiple origins of agriculture' },
      { cn: '粟 / 稻（中国独立驯化）', en: 'millet / rice (independently domesticated in China)' },
    ],
    // mustKnow: true = 课纲/考试核心，给 IPA + audioKey；false = 背景锚点
    keyFigures: [
      {
        nameCn: '老一辈的狩猎采集者（合成桥接人物，无名字）',
        nameEn: 'The Old Hunter-Gatherer (composite, no name)',
        ipa: null,
        roleCn: '农业到来前最后一代猎人，认为定居种地是「自找苦吃」；这一万年没给任何人留下名字',
        roleEn: 'The last generation of hunters before farming, who thinks settling and farming is "self-inflicted suffering"; these ten thousand years left no one a name',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '哥贝克力石阵的工匠（合成桥接人物，挂真实遗址）',
        nameEn: 'The Stone-Carver of Göbekli Tepe (composite, on a real site)',
        ipa: null,
        roleCn: '还没正经务农就在凿巨石、办仪式的见证者，站在「信仰可能先于农业」的转折点上',
        roleEn: 'A witness who carved great stones and held ceremonies before farming in earnest, standing at the hinge of "faith may have come before farming"',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '第一代村庄的农家少女（合成桥接人物，DEFAULT，无名字）',
        nameEn: 'The First-Generation Farm Girl (composite, DEFAULT, no name)',
        ipa: null,
        roleCn: '为「文明」付了最重账单、却最没话语权的普通定居农民——尤其是女性',
        roleEn: 'The ordinary settled farmer who paid the heaviest bill for "civilization" yet had the least voice — women above all',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: 'V. 戈登·柴尔德',
        nameEn: 'V. Gordon Childe',
        ipa: '/ˈɡɔːrdən tʃaɪld/',
        roleCn: '考古学家，20 世纪 30 年代提出「Neolithic Revolution（新石器革命）」这个词',
        roleEn: 'Archaeologist who coined the term "Neolithic Revolution" in the 1930s',
        mustKnow: true,
        audioKey: 'v-gordon-childe',
      },
      {
        nameCn: '贾雷德·戴蒙德',
        nameEn: 'Jared Diamond',
        ipa: '/ˈdʒærəd ˈdaɪmənd/',
        roleCn: '1987 年称农业为「人类历史上最严重的错误」，用骨骼证据论证农业带来更差健康与不平等',
        roleEn: 'In 1987 called farming "the worst mistake in the history of the human race," using skeletal evidence to argue it brought worse health and inequality',
        mustKnow: true,
        audioKey: 'jared-diamond',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'neolithic-revolution',
      termCn: '新石器革命',
      termEn: 'Neolithic Revolution',
      standardRef: ['CA HSS 6.1', 'AP World CED Unit 1 (前置)', 'AP 史学思维 — continuity & change'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'first-generation-farmer-receiving-end',
        nodeIds: ['early-humans-hunter-n1', 'early-humans-gobekli-n1', 'early-humans-farmgirl-n1'],
      },
      xiaoweiNote: {
        cn: `这是整门课的「主标题」，三个故事讲的都是它。我先把定义钉死：
新石器革命 = 人类从「狩猎采集」转向「农业定居」的那次大转变（约一万年前开始）。

老师反复纠正两个误解：
误一：「这是一夜之间的发明」→ 正：它横跨**数千年**、反复试错的慢渐变；
  「革命」是相对人类几百万年而言的「快」，不是字面的一夜。
误二：「农业一来人就过得更好了」→ 正：它**养活了更多人**，但每个人未必更健康。

谁起的名？**V. Gordon Childe**（20 世纪 30 年代）。AP 爱让你区分：
这是世界史上**最大的一次 change（变化）**——之前几百万年都是 continuity（猎人不变），
之后几千年彻底改写了人和食物、土地、彼此的关系。
背一句万能句：「新石器革命对**物种**是巨大成功，对当时的**个人**常是退步。」`,
        en: `This is the "main title" of the whole topic — all three stories are about it. Let me
nail the definition: the Neolithic Revolution = the great shift from "hunting and gathering"
to "farming and settling" (beginning about ten thousand years ago).

Teacher kept correcting two misconceptions:
Wrong 1: "it was an overnight invention" → Right: it was a slow change across **thousands of
  years** of trial and error; "revolution" means "fast" relative to humanity's millions of
  years, not literally overnight.
Wrong 2: "once farming came, people lived better" → Right: it **fed more people**, but each
  person was not necessarily healthier.

Who named it? **V. Gordon Childe** (1930s). AP loves making you distinguish: this is the
**biggest change** in world history — millions of years of continuity (hunters unchanged)
before, then a few thousand years that rewrote our relationship with food, land, and each
other. Memorize the all-purpose line: "The Neolithic Revolution was an enormous success for
the **species**, but often a step backward for the **individual** of that time."`,
      },
    },

    {
      id: 'hunter-gatherer-life',
      termCn: '狩猎采集者的生活',
      termEn: 'Hunter-Gatherer Way of Life',
      standardRef: ['CA HSS 6.1', 'AP World CED Unit 1 (前置)', 'AP 史学思维 — comparison'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'hunter-gatherer-actor',
        nodeIds: ['early-humans-hunter-n1', 'early-humans-hunter-n2'],
      },
      xiaoweiNote: {
        cn: `老猎人那一遍前两节就是这个。我本来以为「原始人 = 又穷又苦、整天为吃饭发愁」，
读完发现**证据正好相反**——这正是 AP 爱考的偏见纠正。

狩猎采集者（hunter-gatherer）= 农业前的活法：**几十人小队（band）游动**，没固定家。
他们的特点（背成一串）：
- 吃得**杂**（野麦、坚果、根、浆果、鱼、各种猎物）→ 一样歉收十样顶上 = 天然保险
- 一天「工作」可能只几小时；**不矮、牙好、几乎没传染病**（人少又一直走，病菌囤不住）
- 财产少、囤不了粮 → **人和人相对平等**（你扛不动太多东西）

考点关键句：「原始 = 悲惨」是偏见；狩猎采集者饮食更全、更自由、更平等。
对照锚：和农民比，猎人是「自由+健康+平等」，农民是「人多+粮多+不平等」。`,
        en: `The hunter's first two Lens Nodes are about this. I used to think "primitive people =
poor and miserable, worrying about food all day," but the **evidence is the opposite** —
exactly the bias-correction AP loves to test.

Hunter-gatherer = the pre-farming way of life: **roaming in bands of a few dozen**, no fixed
home. Their traits (memorize as a string):
- Ate **widely** (wild wheat, nuts, roots, berries, fish, all kinds of game) → if one fails,
  ten others fill in = natural insurance
- Maybe only a few hours of "work" a day; **not short, good teeth, almost no disease** (few
  people always moving, so germs can't take hold)
- Few possessions, can't store grain → **people relatively equal** (you can't carry much)

Key exam sentence: "primitive = miserable" is a bias; hunter-gatherers ate more completely,
lived more freely and more equally. Contrast anchor: hunters = freedom + health + equality;
farmers = more people + more grain + inequality.`,
      },
    },

    {
      id: 'out-of-africa-homo-sapiens',
      termCn: '智人与走出非洲',
      termEn: 'Homo sapiens & Out of Africa',
      standardRef: ['CA HSS 6.1', 'AP World CED Unit 1 (前置)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'hunter-gatherer-actor', nodeId: 'early-humans-hunter-n2', context: '老猎人说几十万年验证的活法把脚印留遍除一块冰原外每块大陆' },
        ],
      },
      standaloneText: {
        cn: `这一段三个故事都没正面演（他们活在农业前夜，不知道自己祖先怎么来的），
但它是 CA HSS 6.1 的开头硬点，必须单独掌握。

**两个核心事实：**
1. **智人（Homo sapiens / 现代人）约 30 万年前起源于非洲**——
   最早化石之一来自摩洛哥的 Jebel Irhoud。注意：人类的故事起点在**非洲**，不是别处。
2. **走出非洲（Out of Africa）约 6-7 万年前**——
   一批智人离开非洲，沿亚洲南岸扩散：约 5 万年前到东南亚/大洋洲，约 4 万年前进欧洲，
   后来跨冰期陆桥进美洲。

**最该记住的一句**：到农业出现前，智人已经把脚印留遍了**除南极外的每块大陆**——
而且**全程都是狩猎采集者**。也就是说，人类是先走遍全球（当猎人），才开始种地的。

老师纠正的误解：「人类一开始就住在非洲以外」→ 错，所有现代人的祖先都来自非洲。
注意时间尺子：这一段用「**年前（years ago）**」，到了农业段才切换成「**公元前（BCE）**」。`,
        en: `None of the three stories acts this out directly (they live on the eve of farming and
don't know how their ancestors arrived), but it's a hard opening point of CA HSS 6.1, so
master it separately.

**Two core facts:**
1. **Homo sapiens (modern humans) originated in Africa about 300,000 years ago** — one of the
   earliest fossils is from Jebel Irhoud, Morocco. Note: humanity's story begins in
   **Africa**, nowhere else.
2. **Out of Africa, about 60,000-70,000 years ago** — a group of Homo sapiens left Africa
   and spread along the southern coast of Asia: reaching Southeast Asia/Oceania about 50,000
   years ago, Europe about 40,000 years ago, and later the Americas across an ice-age land bridge.

**The one line to remember**: before farming appeared, Homo sapiens had already left
footprints on **every continent except Antarctica** — and **as hunter-gatherers the whole
way**. In other words, humans roamed the whole globe (as hunters) before they started farming.

Misconception teacher corrected: "humans first lived outside Africa" → wrong, all modern
humans' ancestors came from Africa. Watch the ruler: this section uses "**years ago**," and
only the farming section switches to "**BCE**."`,
      },
      xiaoweiNote: {
        cn: `老师说 G6 开学第一周必考这条。记忆公式：**30 万年前在非洲出现 → 6-7 万年前走出非洲**。
误区：「人类老家不在非洲」一律错。
我自己的口诀：先**走遍地球当猎人**，**后**才在好几个地方各自学会种地——顺序别倒。`,
        en: `Teacher said this is tested in the first week of 6th grade for sure. Memory formula:
**appeared in Africa 300k years ago → left Africa 60-70k years ago.** Misconception: "humans'
homeland isn't Africa" is always wrong. My mnemonic: first **roam the globe as hunters**,
**then** independently learn farming in several places — don't reverse the order.`,
      },
    },

    {
      id: 'fertile-crescent',
      termCn: '肥沃新月地带',
      termEn: 'Fertile Crescent',
      standardRef: ['CA HSS 6.1', 'AP World CED Unit 1 (前置)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'hunter-gatherer-actor',
        nodeIds: ['early-humans-hunter-n1', 'early-humans-gobekli-n2'],
      },
      xiaoweiNote: {
        cn: `三个故事都发生在这儿，所以名字一定要拼对：**Fertile Crescent（肥沃新月地带）**。
它是西亚一片弯成**月牙形**的土地：从今天的以色列/巴勒斯坦、约旦、叙利亚、土耳其东南，
弯到伊拉克、伊朗西部。

为什么是它先发明农业？老师说关键是**运气好**——这里天生就有一套「驯化套餐」：
野生的小麦、大麦，加上能驯化的绵羊、山羊、牛、猪。**有现成的好东西可驯，才驯得起来。**

考点关键句：肥沃新月 = 西亚的农业**首发区**，约公元前 10000-8000 年开始驯化作物和牲口。
但**别**写成「农业从这里传遍全世界」——那是本课最大的坑（看「多中心起源」那张卡）。
记忆锚：Crescent = 月牙；它的形状就是它的名字。`,
        en: `All three stories happen here, so spell it right: **Fertile Crescent**. It's a strip of
land in western Asia bent like a **crescent moon**: from today's Israel/Palestine, Jordan,
Syria, and southeastern Turkey, curving to Iraq and western Iran.

Why did it invent farming first? Teacher said the key is **luck** — it naturally had a
"domestication starter pack": wild wheat and barley, plus sheep, goats, cattle, and pigs that
could be domesticated. **You can only domesticate if good things are there to domesticate.**

Key exam sentence: the Fertile Crescent = western Asia's **first** farming region, where crops
and livestock began to be domesticated around 10000-8000 BCE. But **don't** write "farming
spread from here to the whole world" — that's the topic's biggest trap (see the "multiple
origins" card). Memory anchor: Crescent = moon shape; the shape is the name.`,
      },
    },

    {
      id: 'domestication',
      termCn: '驯化（人与作物互相改造）',
      termEn: 'Domestication (people and crops reshaping each other)',
      standardRef: ['CA HSS 6.1', 'AP World CED Unit 1 (前置)', 'AP DBQ — causation'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'hunter-gatherer-actor',
        nodeIds: ['early-humans-hunter-n4'],
      },
      xiaoweiNote: {
        cn: `老猎人那一遍第 4 节，他孙辈撒野麦、年年只留「最听话」的种子——讲的就是这个，
还点了名：**einkorn（单粒麦）、emmer（二粒麦）**，西亚最早驯化的两种小麦。

定义：**驯化（domestication）= 把野生动植物逐代改造成作物/家畜。**
一粒种子上的「驯化痕迹」（最硬、AP 最爱考的证据）：
- **野生**小麦成熟后种子会自己「炸开」掉地（好自己繁殖）；
- **驯化**后出现了「成熟也不自己掉、乖乖待在穗上等收割」的小麦。
人没有「发明」小麦，是年复一年**只留下最好收的那些**，几百年把野草改成了庄稼。

老师反复敲的高阶点（DBQ 王牌）：**到底是谁驯化了谁？**
我们改造了小麦，可小麦也把我们从游动的猎人，**改造成了离不开它的农民**——
这叫「**互相驯化**」。故事里老猎人那句点睛我抄下来了：
「他以为是他在改造麦，可我看，是麦也在把他一点点拴在这块地上。」`,
        en: `In the hunter's Lens Node 4, his grandchild scatters wild wheat and keeps only the most
"obedient" seeds year after year — that's this, and it names them: **einkorn and emmer**, the
two earliest wheats domesticated in western Asia.

Definition: **domestication = reshaping wild plants/animals into crops/livestock over
generations.** The "domestication mark" on a single seed (the hardest evidence, AP's favorite):
- **Wild** wheat "shatters" when ripe, dropping to the ground (to reseed itself);
- **Domesticated** wheat stays obediently on the stalk, waiting to be harvested.
People didn't "invent" wheat — year after year they **kept only the easiest-to-harvest** seeds,
turning a wild grass into a crop over centuries.

The high-level point teacher hammered (a DBQ ace): **who domesticated whom?** We reshaped
wheat, but wheat also reshaped us from roaming hunters into **farmers who can't leave it** —
this is "**mutual domestication**." I copied the hunter's clinching line: "He thinks he is
reshaping the wheat; but the way I see it, the wheat is also tying him, bit by bit, to this land."`,
      },
    },

    {
      id: 'gobekli-tepe-faith-before-farming',
      termCn: '哥贝克力石阵与「信仰先于农业」假说',
      termEn: 'Göbekli Tepe & the "Faith Before Farming" Hypothesis',
      standardRef: ['CA HSS 6.1', 'AP DBQ — causation (反直觉)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'gobekli-builder-mediator',
        nodeIds: ['early-humans-gobekli-n1', 'early-humans-gobekli-n5'],
      },
      xiaoweiNote: {
        cn: `工匠那一遍整条线就是它。**Göbekli Tepe（哥贝克力石阵）**：约公元前 9500 年，
今土耳其东南，由**还没正经务农**的狩猎采集者建起——几吨重的 T 形石柱、刻着狐狸/野猪/蛇/秃鹫，
立成一圈圈。它比成片的农业早了至少一千年。

它为什么是 AP 因果题的王牌？因为它把老剧本**倒过来**了：
- 老剧本：农业 → 余粮 → 有闲 → 才有力气盖神庙搞信仰（肚子第一）。
- 哥贝克力提出的可能：为了**聚在一起办大仪式**、喂饱来的人，才被逼着**就近多种粮** → 农业。
  也就是「**信仰/聚集可能先于、并推动了农业**」。

**超级重要的考试纪律**（老师圈了三遍）：这只是一个**有争议的假说**，**不是定论**！
写题一定要用「**可能/也许/有一种说法**」，**绝不能**写成「科学已证明宗教先于农业」。
连「石阵是被人有意填埋的」也只是早期猜测，近年发掘更倾向自然堆积——同样不能讲死。
高分写法：用同一批没字的石头，论证**两个相反方向**的因果——这就是 AP 要的高阶思维。`,
        en: `The carver's whole Lens is about it. **Göbekli Tepe**: around 9500 BCE, in today's
southeastern Turkey, built by hunter-gatherers who **did not yet farm in earnest** — T-shaped
pillars weighing several tons, carved with foxes/boar/snakes/vultures, raised in rings. It
predates broad farming by at least a thousand years.

Why is it an ace for AP causation questions? Because it **reverses** the old script:
- Old script: farming → surplus → leisure → only then the strength to build temples and pursue
  faith (belly first).
- The possibility Göbekli raises: to **gather for great ceremonies** and feed the crowds, people
  were driven to **grow more grain close by** → farming. That is, "**faith/gathering may have
  come before, and driven, farming.**"

**Super-important exam discipline** (teacher circled it three times): this is only a
**contested hypothesis**, **not settled fact**! In answers always use "**may / perhaps / one
view holds**," and **never** write "science has proven religion came before farming." Even "the
rings were deliberately buried" is only an early guess — recent excavations lean toward natural
accumulation, so don't state it as fact either. High-scoring move: use the same wordless stones
to argue **two opposite directions** of causation — that's the higher-order thinking AP wants.`,
      },
    },

    {
      id: 'sedentism-first-towns',
      termCn: '定居与最早的村镇',
      termEn: 'Sedentism & the First Towns',
      standardRef: ['CA HSS 6.1', 'AP World CED Unit 1 (前置)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'first-generation-farmer-receiving-end',
        nodeIds: ['early-humans-farmgirl-n7'],
      },
      xiaoweiNote: {
        cn: `农家少女那一遍第 7 节专门讲她住的地方。两个必背的真实遗址：
- **Jericho（耶利哥）**：约公元前 7000 年已有两三千人，围着**石墙**（最古老的定居点之一）。
- **Çatalhöyük（恰塔霍裕克）**：约公元前 7500 年起，聚起数千人。

定义：**定居（sedentism）= 不再游动、固定住下来。** 能种粮就能不搬家。

老师强调一个反常识细节（故事里少女说她「会愣住」的那个）：
最早的「大村镇」长得和我们想的城市**完全不一样**——
Çatalhöyük **没有街道**，泥砖房一座死贴一座，进家门要从**屋顶的洞爬梯子下去**，
屋里地底下还埋着祖先、墙上画着画。**没有马路、没有广场、没有王宫。**

考点措辞陷阱：别叫它「最早的城市」——学界更严谨的说法是「最早的**大村镇/定居点之一**」，
因为它还没有后来「城市」该有的公共/行政建筑和中央权力。AP/老师都爱抠这个词。`,
        en: `The farm girl's Lens Node 7 is specifically about where she lives. Two must-memorize
real sites:
- **Jericho**: around 7000 BCE already had 2,000-3,000 people, ringed by a **stone wall** (one
  of the oldest settlements).
- **Çatalhöyük**: from around 7500 BCE, gathered several thousand people.

Definition: **sedentism = no longer roaming, settling in one fixed place.** If you can grow
grain, you don't have to move.

Teacher stressed a counter-intuitive detail (the one the girl says would "stun" you): the
earliest "great towns" look **nothing** like the cities we imagine — Çatalhöyük had **no
streets**, mud-brick houses pressed dead against each other, and you enter through a **hole in
the roof, climbing down a ladder**, with ancestors buried under the floor and paintings on the
walls. **No roads, no squares, no palace.**

Wording trap: don't call it "the earliest city" — the more rigorous term is "one of the
earliest **great towns/settlements**," because it lacks the public/administrative buildings and
central power a later "city" has. AP and teachers love nitpicking this word.`,
      },
    },

    {
      id: 'surplus-division-of-labor',
      termCn: '剩余粮食 → 分工 → 文明',
      termEn: 'Surplus → Division of Labor → Civilization',
      standardRef: ['CA HSS 6.1', 'AP World CED Unit 1 (前置)', 'AP DBQ — causation'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'hunter-gatherer-actor', nodeId: 'early-humans-hunter-n7', context: '老猎人看见村里粮第一次能存进罐子、有人开始不下地' },
          { lens: 'first-generation-farmer-receiving-end', nodeId: 'early-humans-farmgirl-n5', context: '农家少女把磨的粮交给管粮仓、不下地的人' },
        ],
      },
      standaloneText: {
        cn: `这是整门课**最重要的因果链**，也是它当「四大古文明地基课」的原因。
故事里反复擦边（老猎人看见粮进罐子、少女把粮交给管粮仓的人），但没把整条链讲全，
所以单独拉一张卡，必须能**一口气说顺**。

**核心链条（AP 因果题逐环考）：**
**农业 → 剩余粮食（surplus）→ 不是每个人都得下地 → 分工 → 文明的所有零件**

一环一环拆：
1. **剩余（surplus）**：农业产出第一次能超过当下要吃的，多出来的粮能**存**起来。
2. **分工（division of labor）**：有了存粮，就不必人人种地——
   有人可以专做陶器、盖房、当祭司、当兵、**管仓库**。
3. **文明零件**：从「剩余粮食」这**一个**源头，长出了**城市、文字、国王、军队、税收**。

为什么这一课是「地基课」？因为六年级后面学的四大古文明（两河、埃及、印度、中国），
那些金字塔、楔形文字、国王——**全都要先有『剩余粮食』才可能出现**。
没有这一环，后面所有「为什么会有国王和神庙」都解释不了。

考点关键句：**surplus 是文明的总开关**——能存粮 → 能养不下地的人 → 才有专业分工 → 才有国家。
（注意：surplus 同时也是「不平等」的源头，见下一张卡——谁管这堆余粮，谁就有了权力。）`,
        en: `This is the topic's **most important causal chain**, and the reason it's the
"foundation lesson" for the four ancient civilizations. The stories brush against it (the
hunter sees grain go into jars, the girl hands grain to the granary-keeper) but don't lay out
the full chain, so here's its own card — you must be able to **say it in one breath.**

**Core chain (AP causation tests it link by link):**
**farming → surplus → not everyone has to farm → division of labor → all the parts of civilization**

Link by link:
1. **Surplus**: for the first time, farm output exceeds what's needed right now, and the extra
   grain can be **stored**.
2. **Division of labor**: with stored grain, not everyone must farm — some can specialize in
   pottery, building, priesthood, soldiering, **keeping the storehouse**.
3. **Parts of civilization**: from that **single** source, surplus, grow **cities, writing,
   kings, armies, and taxation**.

Why is this the "foundation lesson"? Because the four ancient civilizations you study later in
6th grade (Mesopotamia, Egypt, India, China) — the pyramids, cuneiform, kings — **all require
surplus to exist first**. Without this link, none of the later "why are there kings and temples"
can be explained.

Key exam sentence: **surplus is the master switch of civilization** — store grain → support
people who don't farm → specialization → the state. (Note: surplus is also the source of
"inequality," see the next card — whoever controls the surplus gains power.)`,
      },
      xiaoweiNote: {
        cn: `老师说这条链是 AP/州考的**送分题**，但要**按顺序**说，跳环就丢分。
我的口诀：**「余粮养闲人，闲人造文明。」**（surplus → 不下地的人 → 城市文字国王）
最常考的问法：「为什么农业是文明的前提？」答案永远从 surplus（剩余粮食）这个总开关切入。`,
        en: `Teacher said this chain is a "free points" question on AP/state exams, but you must say
it **in order** — skip a link and you lose points. My mnemonic: **"Surplus feeds the idle, the
idle build civilization."** (surplus → people who don't farm → cities, writing, kings) The most
common phrasing: "Why is farming the precondition for civilization?" — always start the answer
from surplus, the master switch.`,
      },
    },

    {
      id: 'social-inequality',
      termCn: '社会分层与不平等的起源',
      termEn: 'The Origin of Social Stratification & Inequality',
      standardRef: ['CA HSS 6.1', 'AP DBQ — causation', 'AP DBQ rubric (complexity)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'first-generation-farmer-receiving-end',
        nodeIds: ['early-humans-farmgirl-n5', 'early-humans-hunter-n7'],
      },
      xiaoweiNote: {
        cn: `农家少女第 5 节 + 老猎人第 7 节都讲到它。这是「进步的账单」里最关键的一笔。

链条：**能存粮 → 谁管粮仓谁有权 → 第一次分出「说话别人就得听」和「只能听别人说」。**
少女说她磨一天的麦，一部分得交给那个「不下地、却比谁都吃得饱长得高」的管粮仓的人。

最硬的证据（AP 爱用）：**骨头**。后来挖出的村子骨骼里，
「贵人」明显**吃得更好、长得更高**，「下人」更矮——**不平等从骨头上就分得出来**。

老师纠正的误解：「不平等和阶级是后来国王才搞出来的」→ 错！
**不平等的根，早在最早的农业村镇就埋下了**，和定居、存粮**几乎同时**出现。

DBQ 平衡点（我特意记的）：管粮仓的人**也有一句站得住的话**——
故事里他说「正因为有人专管粮，荒年才没饿死人」。所以不平等不是纯粹的坏，
它和「集中管理、抗灾」是连在一起的。能同时看见**代价方（少女）和受益方（管粮人）**两边，
就是 AP 要的 complexity（复杂性）。`,
        en: `The farm girl's Node 5 and the hunter's Node 7 both cover it. This is the most crucial
entry in "the bill for progress."

Chain: **storable grain → whoever keeps the granary gains power → for the first time people split
into "those whose word others must obey" and "those who can only obey."** The girl says a part
of the grain she grinds all day must go to the granary-keeper, who "doesn't go to the fields yet
eats fuller and grows taller than anyone."

The hardest evidence (AP loves it): **bones**. In the village skeletons later dug up, "the high"
clearly **ate better and grew taller**, "the low" were shorter — **inequality can be told right
from the bone.**

Misconception teacher corrected: "inequality and class were created later by kings" → wrong!
**The root of inequality was laid in the earliest farming towns**, appearing **almost at the same
time** as settling and stored grain.

DBQ balance point (I noted it on purpose): the granary-keeper **also has a line that stands** —
in the story he says "it's precisely because someone keeps the grain that no one starves in a
lean year." So inequality isn't purely bad; it's tied to "centralized management and disaster
resistance." Seeing both **the side that pays (the girl) and the side that benefits (the
keeper)** is the complexity AP wants.`,
      },
    },

    {
      id: 'the-bill-health-costs',
      termCn: '进步的账单（农业的健康代价）',
      termEn: 'The Bill for Progress (the health costs of farming)',
      standardRef: ['CA HSS 6.1', 'AP DBQ — continuity & change', 'AP DBQ rubric (complexity)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'first-generation-farmer-receiving-end',
        nodeIds: ['early-humans-farmgirl-n3'],
      },
      xiaoweiNote: {
        cn: `农家少女第 3 节把账单「一笔一笔」摊开了——这是这门课最反直觉、最 AP-friendly 的一节。
全部证据来自**真实挖出来的人骨**（少女说「骨头不会说谎」）。

**三笔账（背成三个字：矮、牙、病）：**
1. **矮**：定居农民比狩猎采集祖辈**矮**。一项希腊/土耳其骨骼研究估计，
   男性平均身高约从 **1.78 米降到 1.68 米**（注意：这是**某些遗址样本**的估计，幅度各地不同；
   但「农民更矮」这个**方向**是古病理学广泛共识）。
2. **牙**：天天吃麦糊，淀粉黏牙 → 牙比祖辈坏得多。
3. **病**：几百上千人挤一村、和牲口同住、共用水源 → **传染病第一次有了温床**
   （祖辈几十人一直在走的小队根本囤不住病菌）。

代表学者：**Jared Diamond**（1987）直接把农业叫「**人类历史上最严重的错误**」。
（提醒：这是**史学立场/观点**，不是事实——AP 答题可以引用，但要标明这是 Diamond 的论点。）

考点关键句（DBQ 王牌）：「**养活更多人**」和「**让每个人更健康**」是**两件不同的事**——
农业做到了前者，却在很长时间里牺牲了后者。这就是 AP 要的「同一件事，两个相反的真相」。`,
        en: `The farm girl's Node 3 lays out the bill "entry by entry" — the most counter-intuitive,
most AP-friendly node in the topic. All evidence comes from **real excavated bones** (the girl
says "bone does not lie").

**Three entries (memorize as: short, teeth, disease):**
1. **Short**: settled farmers were **shorter** than their hunter-gatherer ancestors. One
   Greek/Turkish skeletal study estimates men's average height dropped from about **1.78 m to
   1.68 m** (note: this is an estimate from **certain site samples**, and the drop varies by
   region; but the **direction** "farmers are shorter" is broad paleopathology consensus).
2. **Teeth**: eating wheat gruel daily, starch sticking to teeth → far worse teeth than
   ancestors.
3. **Disease**: hundreds-to-thousands packed into one village, living with livestock, sharing
   water → **disease found its breeding ground for the first time** (the ancestors' bands of a
   few dozen always on the move couldn't hold germs).

Representative scholar: **Jared Diamond** (1987) flatly called farming "the **worst mistake in
the history of the human race**." (Reminder: this is a **historiographical stance/opinion**, not
fact — you may cite it on AP, but mark it as Diamond's argument.)

Key exam sentence (a DBQ ace): "**feeding more people**" and "**making each person healthier**"
are **two different things** — farming achieved the former while sacrificing the latter for a
long time. That's the "same thing, two opposite truths" AP wants.`,
      },
    },

    {
      id: 'multiple-origins-china',
      termCn: '多中心起源与中国的两个独立中心',
      termEn: 'Multiple Origins & China\'s Two Independent Centers',
      standardRef: ['CA HSS 6.1', 'AP World CED Unit 1 (前置)', 'AP DBQ — comparison'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'first-generation-farmer-receiving-end',
        nodeIds: ['early-humans-hunter-n9', 'early-humans-gobekli-n9', 'early-humans-gobekli-n10', 'early-humans-farmgirl-n9', 'early-humans-farmgirl-n10'],
      },
      xiaoweiNote: {
        cn: `这是**本课最重要的一条**，也是老师说「对我们华裔最该接住的一拍」。三个故事都点到了它。

**核心事实：农业不是从西亚一个地方传遍世界的，是在好几个角落各自独立发明的（multiple origins）。**
- 西亚肥沃新月：小麦、大麦
- **中国黄河流域**：约公元前 8000 年起，独立驯化**粟（小米，foxtail millet）**、黍
- **中国长江流域**：约距今一万年起，独立驯化**稻（rice）**
- 中美洲：玉米

**「光是中国就有两个独立中心」**（黄河粟 + 长江稻），这点要醒目——
它们和西亚**时间相近、互不相通、各自成功**，**没人抄谁。**

老师特别强调的**双向中性**（Rule 0，故事里 synthesis 也点了）：
- 一头纠正西方叙事的「文明从西亚单向扩散」；
- 另一头也纠正「中国什么都最早最强」的过度说法。
- **真相是「多中心、各自独立、时间相近」——不是争谁第一。**
故事里那句我抄下来了：「这不是说中国最早或最强，也不是说西亚最早或最强——
是地球好几头的人，面对差不多的处境，各自想出了同一个主意。」

DBQ 比较题王牌：拿**西亚小麦** vs **中国稻/粟**做对照——同一个「发明农业」的难题，
几个互不相通的文明给出同一个答案，说明农业是「特定条件下的必然」还是「巧合」？这是绝佳 compare 题。`,
        en: `This is **the most important point in the topic**, and what teacher calls "the beat we
Chinese-heritage students should most catch." All three stories touch it.

**Core fact: farming did not spread from one place in western Asia — it was invented
independently in several corners (multiple origins).**
- Fertile Crescent (western Asia): wheat, barley
- **China, Yellow River valley**: from around 8000 BCE, independently domesticated **millet
  (foxtail millet)** and broomcorn millet
- **China, Yangtze valley**: from around 10,000 years ago, independently domesticated **rice**
- Mesoamerica: maize

**"China alone has two independent centers"** (Yellow River millet + Yangtze rice) — make this
stand out. They were **close in time, not in contact, and each succeeded** with western Asia —
**no one copied anyone.**

The **two-way neutrality** teacher stressed (Rule 0, the synthesis nodes point to it too):
- one side corrects the Western narrative of "civilization spread one-way from western Asia";
- the other side corrects the overclaim "China was earliest and greatest at everything."
- **The truth is "multiple centers, each independent, close in time" — not a contest over who's
  first.** I copied the story's line: "This does not mean China was earliest or greatest, nor
  that western Asia was — it means people in several corners, facing much the same circumstances,
  each thought up the same idea."

DBQ comparison ace: contrast **western Asian wheat** vs **Chinese rice/millet** — several
unconnected civilizations gave the same answer to the same "invent farming" problem; does that
make farming "inevitable under certain conditions" or "coincidence"? An excellent compare prompt.`,
      },
    },

    {
      id: 'the-trap-irreversibility',
      termCn: '回不去了（农业的不可逆陷阱）',
      termEn: 'The Trap (the irreversibility of farming)',
      standardRef: ['CA HSS 6.1', 'AP DBQ — causation', 'AP 史学思维 — continuity & change'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'first-generation-farmer-receiving-end',
        nodeIds: ['early-humans-hunter-n8', 'early-humans-farmgirl-n8'],
      },
      xiaoweiNote: {
        cn: `老猎人第 8 节和农家少女第 8 节是同一件事的两面，讲「**回不去了（the trap）**」。

逻辑链（一个越收越紧的圈）：
**粮越多 → 人越多 → 越离不开地 → 越要多种粮**——转一圈又回到起点，越转越紧。

为什么回不去？少女算得最清楚：村里几百上千人，**外头那点野地根本喂不饱这么多张嘴**；
真要散回去得饿死人，而这么多人也**再散不回奶奶说的那种几十人小队**了。
人类被自己造出的**「成功」**（人多、粮多、孩子活得多）**死死按在了农业这条路上**。

老师说这是回答「农民为什么不放弃种地回去打猎」的标准答案——
**不是他们不想，是回不去了**（人口锁定）。

考点关键句：农业是一条「**再也下不去的台阶**」——它既是通向文明的台阶，
也是一旦上了就回不了头的陷阱。这正是 continuity & change 里「**不可逆的 change**」最好的例子。`,
        en: `The hunter's Node 8 and the farm girl's Node 8 are two faces of one thing: "**you can't
go back (the trap)**."

The logic (a circle drawing ever tighter):
**more grain → more people → less able to leave the land → must grow even more grain** — back to
the start, tighter each loop.

Why can't you go back? The girl reckons it most clearly: a village of hundreds-to-thousands —
**that little wild land out there can't feed so many mouths at all**; scattering back would
starve people, and so many can never **re-scatter into Grandmother's bands of a few dozen**.
Humans are **pinned hard onto the farming road by their own "success"** (more people, more
grain, more surviving children).

Teacher said this is the standard answer to "why didn't farmers give up farming and go back to
hunting" — **not that they didn't want to, but that they couldn't** (population lock-in).

Key exam sentence: farming is a "**staircase you can never step down from**" — it's both the
staircase to civilization and a trap you can't reverse once on it. This is the best example of
an "**irreversible change**" in continuity & change.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `新石器革命让人类从几百万人，最终变成今天的几十亿人；可考古骨骼显示，
最早那批农民比狩猎采集的祖辈更矮、牙更坏、传染病更多、还头一回分出了穷富。

你觉得新石器革命应该被叫做「人类的伟大进步」，还是「人类最严重的错误」？
用至少两条具体证据支持你的判断。`,
      en: `The Neolithic Revolution took humans from a few million to today's billions; yet
skeletal evidence shows the first farmers were shorter than their hunter-gatherer ancestors,
with worse teeth, more disease, and for the first time a split into rich and poor.

Should the Neolithic Revolution be called "humanity's great progress," or "humanity's worst
mistake"? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- 「最严重错误」这边（Jared Diamond 1987）的证据：骨头显示更矮、牙更坏、传染病、第一次不平等。
- 「伟大进步」这边的证据：剩余粮食 → 分工 → 城市/文字/国王（文明的全部地基都从这里长出来）；养活的人多了千百倍。
高分写法：先承认**对物种是成功、对当时个人常是退步**两边都站得住，再说你为什么更倾向某一边——
这种「同时持有两个相反真相」就是 AP 要的 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.
- Evidence for "worst mistake" (Jared Diamond 1987): bones show shorter height, worse teeth,
  disease, the first inequality.
- Evidence for "great progress": surplus → division of labor → cities/writing/kings (the whole
  foundation of civilization grows from here); hundreds of times more people fed.
High-scoring move: first acknowledge that both stand — **a success for the species, often a step
back for the individual of that time** — then explain why you lean one way. Holding two opposite
truths at once is the complexity AP wants.`,
      conceptsActivated: ['the-bill-health-costs', 'surplus-division-of-labor', 'neolithic-revolution'],
    },
    {
      id: 'q2',
      cn: `老剧本说：「人得先吃饱、有了余粮，才有闲心盖神庙、搞信仰。」
可哥贝克力石阵是一群**还没正经务农**的狩猎采集者建的——他们先搬动几吨石头办大仪式，
然后才被「喂饱聚会」逼着就近多种粮。

如果你是历史老师，要出一道题考「到底是肚子先，还是信仰先」，你会怎么提问？
请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `The old script says: "People must first be fed, with surplus grain, before they have the
leisure to build temples and pursue faith." Yet Göbekli Tepe was built by hunter-gatherers who
**did not yet farm in earnest** — they first moved stones weighing tons for great ceremonies,
and only then were driven to grow more grain nearby to "feed the gathering."

If you were a history teacher writing a question on "which came first, the belly or faith," how
would you phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题逼学生**用同一批证据论证两个相反方向**，而不是二选一。
关键纪律：哥贝克力「信仰先于农业」**只是有争议的假说，不是定论**——
你的题目最好让学生意识到「石头上没有字，两个方向都能讲得通，证据还不够断定」。
可以让学生比较：旧因果（农业→余粮→神庙）vs 新可能（想聚在一起办仪式→逼着多种粮→农业）——
问他们：当证据不足、两个故事都成立时，一个诚实的历史学家该怎么写结论？
（这正是 AP causation 的高阶训练：因果方向本身可以被质疑。）`,
      hintEn: `Hint: a good DBQ forces students to **argue two opposite directions from the same
evidence**, not pick one. Key discipline: Göbekli's "faith before farming" is **only a contested
hypothesis, not settled fact** — your question should make students realize "there are no words
on the stones; both directions are arguable; the evidence isn't enough to decide." Have students
compare: old causation (farming → surplus → temple) vs the new possibility (wanting to gather for
ceremony → driven to grow more grain → farming) — then ask: when evidence is insufficient and
both stories hold, how should an honest historian write the conclusion? (This is higher-order AP
causation training: the direction of cause and effect can itself be questioned.)`,
      conceptsActivated: ['gobekli-tepe-faith-before-farming', 'domestication'],
    },
    {
      id: 'q3',
      cn: `农业在西亚、中国（长江种稻、黄河种粟）、中美洲（玉米）**各自独立**被发明出来，
谁也没通知谁，谁也没抄谁——光是中国境内，就有两个各自独立的农业中心。

这说明农业是「在那种处境下迟早会发生的必然」，还是「好几次惊人的巧合」？
请选一边，并用「多中心、各自独立、时间相近」这个事实来支持你的看法。`,
      en: `Farming was invented **independently** in western Asia, China (rice by the Yangtze,
millet by the Yellow River), and Mesoamerica (maize) — no one told anyone, no one copied anyone;
within China alone there were two independent farming centers.

Does this mean farming was "inevitable under those conditions," or "several astonishing
coincidences"? Pick a side and support your view with the fact of "multiple centers, each
independent, close in time."`,
      hintCn: `提示：先把「多中心起源」这条事实记牢——它是本课最核心的纠偏。
- 「必然」这边：好几个互不相通的地方，在差不多的时间、相似的处境下（冰期结束、气候转暖稳定）
  各自想出同一个主意——这像是「条件到了就会发生」。
- 「巧合」这边：可驯化的好动植物不是每个地方都有（肥沃新月运气特别好），
  换一套气候和物种，人类未必走上农业。
进阶纪律（老师圈的）：无论你站哪边，都**不能**写成「中国最早最强」或「西亚最早最强」——
真相是**平等的多中心**。能保持这个双向中性，本身就是高分点。`,
      hintEn: `Hint: first lock in the fact of "multiple origins" — it's the topic's core
correction.
- For "inevitable": several unconnected places, at roughly the same time, under similar
  conditions (ice age ending, climate warming and stabilizing), each hit on the same idea — this
  looks like "it happens once conditions are met."
- For "coincidence": not every place had good domesticable plants and animals (the Fertile
  Crescent was especially lucky); with a different climate and species, humans might not have
  taken the farming road.
Advanced discipline (teacher circled it): whichever side you pick, **do not** write "China was
earliest/greatest" or "western Asia was earliest/greatest" — the truth is **equal multiple
centers**. Holding that two-way neutrality is itself a high-scoring move.`,
      conceptsActivated: ['multiple-origins-china', 'fertile-crescent'],
    },
  ],
};

export default notebook;
