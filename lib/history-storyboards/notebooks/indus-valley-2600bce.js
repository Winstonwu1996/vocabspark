// ─── 同伴笔记本架构 v1 · Indus Valley (Harappan) 2600 BCE ───────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 10 张核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson) + xiaoweiNote（均放卡顶层）
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（组织者 actor / Meluhha 商人 mediator / 无名孩子 receiving-end 三条线）
//   - notebook 提供考点闭环（成熟期年代/四大文明对照/网格城市与排水/标准化砝码/Indus script 未解读/
//     Great Bath/印章/缺失的王权与「最平等」之争/衰落主因/祭司王名字陷阱 — 补完 CA HSS 6.5 + World History 早期文明）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - CA HSS Grade 6 · Standard 6.5（古印度，从印度河流域文明讲起）
//   - World History "早期河流文明"章（印度河 vs 两河 vs 埃及 vs 中国，四大早期文明对照）
//
// 事实地基：对账 indus-valley-2600bce-factledger.md（27 claim，全部 ✅verified）
//   - 成熟期统一用"约前 2600–前 1900"（账本 #1）
//   - 排水"罗马级"措辞已收紧为带 hedge 的相对表述（审稿 P0，不下"全球两千年无人能比"绝对断言）
//   - 二里头标"略晚、约前 1900 后才兴起"，证据锚陶寺式夯土基址（审稿 P0，避免与印度河鼎盛期严格同代）
//   - "最平等社会"保留"有力推论、非定论"的双面（账本红旗 #1）
//   - "祭司王"名字陷阱单列一卡（账本红旗 #2）
//
// schemaVersion: 1 · notebookVersion: indus-valley-2600bce-v1

export var notebook = {
  topicId: 'indus-valley-2600bce',
  topicNameCn: '印度河流域（哈拉帕）文明 约前2600',
  topicNameEn: 'The Indus Valley (Harappan) Civilization, c. 2600 BCE',
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
    cn: `今天老师说我们要学一个我以前几乎没听过的古文明——印度河流域文明（Indus Valley），
也叫哈拉帕文明（Harappan）。她说它是"四大早期文明"里面积最大的一个，
却是我们了解最少的一个，因为它的文字到今天都没人能读懂。

她在白板上写了几座城和几个词：

Mohenjo-daro（摩亨佐-达罗）、Harappa（哈拉帕）、Meluhha（美卢哈）、
Great Bath（大水池）、Indus script（印度河文字）

还有一串词：standardized weights（标准化砝码）、grid plan（网格规划）、
drainage system（排水系统）、citadel / lower town（高地 / 下城）、
seal（印章）、carnelian（红玉髓）、Priest-King（祭司王）。

老师说这门课最特别的地方是：这个文明挖了一百年，没挖出一座王宫、
没挖出一个国王的名字——连国王都没有名字，普通人就更没有。
所以我们读到的三个"人"（一个组织者、一个商人、一个孩子）都是后人补出来的，
真名一个都没有。

我先把这些记下来。读完三个故事再回来对照，看我能不能讲清楚一件怪事：
一个文明，真的非得有一个坐在顶上的王，才能运转吗？

老师抄给我们一句话，我记在第一页："这门课最重要的不是背年代，
是学会分清——哪些是考古能确证的，哪些其实是我们在猜。"`,
    en: `Today my teacher said we're learning an ancient civilization I'd barely heard of —
the Indus Valley Civilization, also called the Harappan civilization. She said it's the
largest in area of the "four early river civilizations," yet the one we understand least,
because no one can read its writing even today.

She wrote some cities and terms on the board:

Mohenjo-daro, Harappa, Meluhha, Great Bath, Indus script

Plus a string of terms: standardized weights, grid plan, drainage system,
citadel / lower town, seal, carnelian, Priest-King.

Teacher said the strangest thing about this course is: a hundred years of digging has
turned up no palace and no king's name — not even a king has a name, let alone an
ordinary person. So the three "people" we read (an organizer, a merchant, a child) are
all filled in by later people; not one has a real name.

Let me write these down. After I read the three stories I'll come back and check whether
I can explain one strange thing: must a civilization really have a king sitting at the
top to run at all?

Teacher copied one line for us, which I put on the first page: "The most important thing
in this course isn't memorizing dates — it's learning to tell apart what archaeology can
confirm from what we are actually only guessing."`,
    keyTerms: [
      { cn: '印度河流域文明 / 哈拉帕文明', en: 'Indus Valley / Harappan Civilization' },
      { cn: '成熟期（约前2600–前1900）', en: 'Mature Harappan (c. 2600-1900 BCE)' },
      { cn: '摩亨佐-达罗 / 哈拉帕', en: 'Mohenjo-daro / Harappa' },
      { cn: '网格规划', en: 'grid plan' },
      { cn: '排水系统', en: 'drainage system' },
      { cn: '高地 / 下城', en: 'citadel / lower town' },
      { cn: '标准化砝码', en: 'standardized weights' },
      { cn: '印度河文字（未解读）', en: 'Indus script (undeciphered)' },
      { cn: '印章', en: 'seal' },
      { cn: '红玉髓', en: 'carnelian' },
      { cn: '大水池', en: 'Great Bath' },
      { cn: '美卢哈（两河对印度河的称呼）', en: 'Meluhha' },
      { cn: '祭司王（名字陷阱）', en: 'Priest-King (a misleading name)' },
      { cn: '加格尔-哈克拉古河道', en: 'Ghaggar-Hakra' },
      { cn: '证据缺失（没挖到≠不存在）', en: 'absence of evidence' },
    ],
    // mustKnow: true = 课纲必考核心，给 IPA + audioKey
    // mustKnow: false = 背景/参照人物，用称谓即可，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '萨尔贡（阿卡德国王）',
        nameEn: 'Sargon of Akkad',
        ipa: '/ˈsɑːrɡɒn/',
        roleCn: '两河阿卡德国王（约前2334–前2284），其铭文夸口"Meluhha 之船泊于阿卡德码头"——印度河—两河远洋贸易的硬旁证，本身不是印度河文明的人',
        roleEn: 'Akkadian king (c. 2334-2284 BCE) whose inscription boasts that "ships from Meluhha lay at the docks of Akkad" — hard outside evidence for Indus-Mesopotamia sea trade; he is not an Indus person himself',
        mustKnow: true,
        audioKey: 'sargon-of-akkad',
      },
      {
        nameCn: '约翰·马歇尔',
        nameEn: 'John Marshall',
        ipa: '/dʒɒn ˈmɑːrʃəl/',
        roleCn: '英属印度考古调查局总监，1924 年向世界宣布发现了这一全新的古文明',
        roleEn: 'Director-General of the Archaeological Survey of India who announced this entirely new ancient civilization to the world in 1924',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '组织者（合成桥接人物）',
        nameEn: 'The Organizer (composite figure)',
        ipa: null,
        roleCn: '故事里"没有王冠的组织者"——身份写实但无真名，代表"砖一样大、砝码一样重"背后那个我们找不到的协调机制',
        roleEn: 'The story\'s "organizer without a crown" — realistic in role but with no real name; stands for the coordinating force behind "bricks one size, weights one weight" that we cannot find',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'mature-harappan-dates',
      termCn: '成熟期（约前2600–前1900）',
      termEn: 'Mature Harappan (c. 2600-1900 BCE)',
      standardRef: ['CA HSS 6.5', 'World History — early river civilizations'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'organizer-actor',
        nodeIds: ['indus-valley-org-n1', 'indus-valley-org-n9'],
        xiaoweiNote: {
          cn: `三个故事都从"约公元前2600年"开场，这就是成熟期（Mature Harappan）的起点。

我把时间轴背成三段：
**约前2600 开始（大城同时鼎盛）→ 约前1900 结束（开始去城市化）→ 中间这700年是黄金时代。**

老师反复提醒一个考点陷阱：这个文明没有可读的编年史，所以这些年代是考古推定的"阶段"，
不是古人写下的精确"某年某事"。考试问"成熟期是哪段"，答约前2600–前1900 就稳。

我自己的记忆锚：2600 减 1900 = 700 年，刚好是组织者讲的"我这座城最鼎盛的那几百年"。`,
          en: `All three stories open "around 2600 BCE" — that's the start of the Mature Harappan
period.

I memorize the timeline in three parts:
**begins ~2600 BCE (great cities flourish together) → ends ~1900 BCE (de-urbanization
starts) → the 700 years in between are the golden age.**

Teacher keeps flagging one trap: this civilization left no readable chronicle, so these
dates are archaeology's estimated "phases," not precise "in year X, event Y" the way ancient
people wrote. If asked "when was the Mature period," answer c. 2600-1900 BCE.

My memory anchor: 2600 minus 1900 = 700 years, exactly the organizer's "the centuries when
my city was at its height."`,
        },
      },
    },

    {
      id: 'four-river-civilizations',
      termCn: '四大早期河流文明对照',
      termEn: 'The Four Early River Civilizations Compared',
      standardRef: ['World History — early river civilizations', 'CA HSS 6.x (Egypt / Mesopotamia / China / India)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'organizer-actor', nodeId: 'indus-valley-org-n9', context: '组织者俯瞰：黄河边在把"谁在上面"摆到正中、尼罗河边埃及有法老金字塔，而印度河看不见王' },
          { lens: 'meluhha-merchant-mediator', nodeId: 'indus-valley-mer-n9', context: '商人绕地球见三种"组织很多人"的活法：两河靠国王神庙 / 东边靠成形王权 / 家乡靠看不见王的标准' },
        ],
      },
      standaloneText: {
        cn: `World History 几乎一定会考"四大早期文明并排"。它们都靠大河、都在差不多的早期阶段，
但"权力长什么样"很不一样。背这张对照表：

| 文明 | 大河 | 招牌 | 权力长相 |
|---|---|---|---|
| **埃及** | 尼罗河 | 法老、金字塔、巨大神庙 | 看得见的王，刻进石头 |
| **两河（美索不达米亚）** | 底格里斯-幼发拉底 | 塔庙（ziggurat）、楔形文字、Sargon 的征服 | 国王 + 军队 + 神庙 |
| **中国（黄河/长江）** | 黄河、长江 | 龙山晚期→（略晚的）二里头，宫殿基址、等级化墓 | 王权正在成形（夏是否信史仍有争议）|
| **印度河** | 印度河 | 网格城市、排水、标准化砝码、未解读文字 | **看不见王**：无王宫、无独大神庙、无君主巨像 |

**记忆锚（最重要的一句）**：印度河是四个里面积最大、却唯一"看不见明显王宫和独尊神庙"的。
埃及和两河、中国都把"谁在上面"摆得清清楚楚；只有印度河，把统一藏在了"砖一样大、砝码一样重"里。

考点关键句：这正是本课最强的对照题——"文明是否必然走向一个强权中心（国王/王宫/神庙）？"
印度河是那个最有力的反例。`,
        en: `World History almost always tests the "four early civilizations side by side." All
relied on great rivers and rose in roughly the same early stage, but "what power looked
like" differed sharply. Memorize this table:

| Civilization | River | Signature | Face of power |
|---|---|---|---|
| **Egypt** | Nile | pharaohs, pyramids, huge temples | a visible king, carved in stone |
| **Mesopotamia** | Tigris-Euphrates | ziggurats, cuneiform, Sargon's conquests | king + army + temple |
| **China (Yellow/Yangtze)** | Yellow, Yangtze | late Longshan → (slightly later) Erlitou, palace foundations, ranked tombs | kingship forming (whether Xia was historical is still debated) |
| **Indus** | Indus | grid cities, drainage, standardized weights, undeciphered script | **no king in sight**: no palace, no single dominant temple, no giant ruler statue |

**Memory anchor (the key line)**: the Indus is the largest in area of the four, yet the only
one with no obvious palace or single dominant temple. Egypt, Mesopotamia, and China all put
"who is on top" plainly on display; only the Indus hid its unity in "bricks one size, weights
one weight."

Key exam sentence: this is the course's strongest comparison question — "must a civilization
inevitably move toward one strong central power (king / palace / temple)?" The Indus is the
most powerful counterexample.`,
      },
      xiaoweiNote: {
        cn: `老师说这是本课最高频考点，因为它把零散的事实串成一个大问题。
我的口诀：**埃及看金字塔、两河看塔庙、中国看宫殿基址、印度河看……找不到王。**
四个里印度河最特别——别的三个都有"看得见的老大"，就它没有。

考试一旦出现"比较两个/四个早期文明"，先把"权力长相"那一列拎出来答，最容易拿分。`,
        en: `Teacher said this is the course's highest-frequency point because it threads scattered
facts into one big question. My mnemonic: **Egypt = pyramids, Mesopotamia = ziggurats, China
= palace foundations, Indus = ... no king to find.** Of the four, the Indus stands out — the
other three all have a "visible boss," only it doesn't.

Whenever an exam says "compare two/four early civilizations," pull out the "face of power" row
first — that's the easiest way to score.`,
      },
    },

    {
      id: 'grid-city-and-drainage',
      termCn: '网格城市与排水系统',
      termEn: 'The Grid City & Drainage System',
      standardRef: ['CA HSS 6.5', 'World History — early river civilizations'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'organizer-actor',
        nodeIds: ['indus-valley-org-n2', 'indus-valley-child-n2'],
        xiaoweiNote: {
          cn: `组织者第2节和孩子第2节都讲到了。这座城不是村子自然摊大的——它像是有人先画了图再建。

我把城市规划背成三个硬事实：
**① 街道横平竖直排成网格（grid plan）；② 城分两块——高地（citadel，公共/管理建筑）+ 下城
（lower town，住人）；③ 几乎家家有浴室、有连着加盖下水道的厕所，污水顺暗渠排走。**

考点关键句：这套排水之先进，有学者认为在古代世界罕有能及。
注意老师纠正的一个口径：别写成"全球两千年无人能比"——那是夸张话术。
准确说法是"古代世界罕有能及，要再过很久别的地方才普遍出现可比的城市卫生"。

记忆锚：连普通孩子家都有浴室和排污，说明这座城不是只照顾贵族——
"干净"是给全城的，这本身就是它"看不见王却高度组织"的证据。`,
          en: `Organizer Node 2 and child Node 2 both cover this. The city didn't just spread from a
village — it looks like someone drew a plan first, then built to it.

I memorize the city plan as three hard facts:
**(1) streets run straight in a grid (grid plan); (2) the city has two parts — citadel
(public/admin buildings) + lower town (where people live); (3) nearly every house has a
bathroom and a toilet linked to covered drains, with sewage carried off through channels.**

Key exam sentence: this drainage was so advanced that some scholars think few places in the
ancient world could match it. Note the wording teacher corrected: don't write "no one on
earth matched it for two thousand years" — that's an exaggeration. The accurate version is
"rarely matched in the ancient world; comparable city sanitation appeared widely elsewhere
only much later."

Memory anchor: even an ordinary child's home had a bathroom and drainage, showing the city
didn't serve only elites — "clean" was for everyone, which is itself evidence of "highly
organized without a visible king."`,
        },
      },
    },

    {
      id: 'standardized-weights',
      termCn: '标准化砝码',
      termEn: 'Standardized Weights',
      standardRef: ['CA HSS 6.5', 'World History — early river civilizations'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'organizer-actor',
        nodeIds: ['indus-valley-org-n4', 'indus-valley-mer-n4', 'indus-valley-child-n4'],
        xiaoweiNote: {
          cn: `这块小小的立方体石砝码是整门课的暗线——三个视角各遇到它一次：
组织者每天清晨校准它、商人靠它跟两河做跨海买卖、孩子在井边看大人用它称粮。

为什么它这么重要？因为它是"背后有人在统一协调"的**最强证据**：
**这套砝码按规整比例做，而且在相隔几百公里的不同城市里几乎一模一样重。**
这种统一不会自己发生——一定有某种组织在管。

考点关键句：标准化砝码 = 印度河"没有王、却高度统一"的最硬证据。
它证明了"有规矩"，却没告诉我们"谁定的规矩"——这正是本课史学诚实的招牌句。

我的记忆锚：组织者说"我手里没有军队，可这块石头管着全城每一笔交易的公平"。
不靠刀，靠让所有人信"一斤就是一斤"。`,
          en: `This small cube of stone weight is the hidden thread of the whole course — each of the
three lenses meets it once: the organizer calibrates it each morning, the merchant uses it to
trade across the sea with Mesopotamia, the child watches grown-ups weigh grain with it at the
well.

Why does it matter so much? Because it is the **strongest evidence** that "someone coordinated
things": **the weights were made in neat ratios and weigh almost exactly the same in cities
hundreds of kilometers apart.** That uniformity doesn't happen on its own — some organization
must have managed it.

Key exam sentence: standardized weights = the hardest evidence that the Indus was "highly
unified without a king." They prove "there were rules" but don't tell us "who made the rules"
— the course's signature line about honest history.

My memory anchor: the organizer says "I have no army in my hand, but this stone governs the
fairness of nearly every trade in the city." Not by the blade, but by making everyone trust
that "a pound is a pound."`,
        },
      },
    },

    {
      id: 'indus-script-undeciphered',
      termCn: '印度河文字（未解读）',
      termEn: 'The Indus Script (Undeciphered)',
      standardRef: ['CA HSS 6.5', 'World History — early river civilizations'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'organizer-actor',
        nodeIds: ['indus-valley-org-n6', 'indus-valley-org-n3'],
        xiaoweiNote: {
          cn: `组织者第6节验货时讲到：印章上刻着一行符号，他认得这是"字"、天天在用，
却说不出它念什么、什么意思。这套文字，连四千年后的人也读不懂。

三个硬事实背下来：
**① 约四百个符号；② 文段很短；③ 没有像罗塞塔石碑那样的"双语钥匙"帮我们破译。**

考点关键句：印度河文字至今未解读（undeciphered），这是我们对这个文明了解最少的根本原因——
我们能看见它"做成了什么"（城、排水、砝码），却听不见它"自己怎么说"。

为什么这条这么重要？因为它是本课所有"我们其实不知道"的总根源：
**没有可读文字 = 制度、信仰、有没有王，全都成了黑箱。**
我的记忆锚：组织者那句发凉的话——"我们写下了最要紧的东西，却没有一句能让未来听懂。"`,
          en: `Organizer Node 6, inspecting goods, covers this: a row of signs is carved on the seal;
he knows it's "writing" and uses it daily, yet cannot say how it's read or what it means. This
script, even people four thousand years later cannot read.

Memorize three hard facts:
**(1) about 400 signs; (2) the inscriptions are very short; (3) there's no "bilingual key"
like the Rosetta Stone to help decipher it.**

Key exam sentence: the Indus script is still undeciphered — the root reason we understand this
civilization least. We can see what it "made" (cities, drainage, weights) but cannot hear what
it "said about itself."

Why so important? Because it's the source of every "we don't actually know" in the course:
**no readable writing = its institutions, beliefs, and whether it had a king are all a black
box.** My memory anchor: the organizer's chilling line — "we wrote down what mattered most,
yet not one sentence can be heard by the future."`,
        },
      },
    },

    {
      id: 'great-bath',
      termCn: '大水池',
      termEn: 'The Great Bath',
      standardRef: ['CA HSS 6.5', 'World History — early river civilizations'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'organizer-actor',
        nodeIds: ['indus-valley-org-n5', 'indus-valley-child-n6'],
        xiaoweiNote: {
          cn: `组织者第5节和孩子第6节都带我们看了它。它在城的高地上，约12米长，比地面低、有阶梯下去，
烧砖砌、灌石膏灰浆、外面裹沥青——防水做到极致，就为了让水稳稳留在池里。

但最关键的考点是它的**用途存疑**：
很多学者**猜**它用于某种仪式性沐浴，可它旁边**没有神像、没有祭坛、没有任何"给某个神"的记号。**
所以"仪式沐浴"是**推测，不是确证**——别在考卷上写死。

考点关键句：Great Bath 展示了印度河"工程做到极致、信仰却留成谜"的特点——
把"怎么做"做到顶，却没留下"为什么这么做"。
记忆锚：组织者答不上一个七岁孩子都会问的问题——"这个大池子到底干什么用？"`,
          en: `Organizer Node 5 and child Node 6 both take us to it. It sits on the citadel, about
twelve meters long, lower than the ground with steps going down, laid in fired brick, filled
with gypsum mortar, wrapped in tar outside — waterproofing taken to the extreme just to keep
the water sitting steady in the pool.

But the key exam point is that its **use is uncertain**: many scholars **guess** it was used
for some ritual bathing, yet beside it there is **no idol, no altar, no mark at all of "for a
certain god."** So "ritual bathing" is a **guess, not confirmed** — don't write it as fact.

Key exam sentence: the Great Bath shows the Indus trait of "engineering at its peak, faith left
a riddle" — perfecting the "how" while leaving no "why."
Memory anchor: the organizer can't answer a question even a seven-year-old asks — "what is this
great pool actually for?"`,
        },
      },
    },

    {
      id: 'meluhha-trade-seals',
      termCn: '远洋贸易与印章（Meluhha / carnelian / seal）',
      termEn: 'Sea Trade & Seals (Meluhha / carnelian / seal)',
      standardRef: ['CA HSS 6.5', 'World History — trade networks'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'meluhha-merchant-mediator',
        nodeIds: ['indus-valley-mer-n2', 'indus-valley-mer-n3', 'indus-valley-org-n6'],
        xiaoweiNote: {
          cn: `商人那一遍整条线就是贸易。印度河不是躲在角落自己玩的奇观，是个外向、做大买卖的文明。

背三样招牌外销品 + 两头硬证据：
**外销品：① carnelian（红玉髓）蚀刻珠（印度河招牌、两河做不出同样的）② 象牙 ③ 棉布。**
**硬证据两头：一头在两河——Ur、Susa 墓里挖出印度河珠子、泥板提到 Meluhha（= 印度河流域）；
另一头带真名——阿卡德国王 Sargon 铭文夸口"Meluhha 之船泊在我码头"。**

还有 seal（印章）：方形皂石，刻动物（常是独角兽样的牛）+ 一行 Indus script，
盖在货物泥封上证明归属——有点像今天的签名或商标。

考点关键句：Meluhha 是两河文献对印度河流域的称呼；Sargon 铭文 + Ur/Susa 出土珠子
是印度河—两河远洋贸易的硬证据。一个连自己文字都没人读懂的文明，靠物证被另一个帝国记了下来。`,
          en: `The merchant's whole lens is about trade. The Indus was not a wonder hiding in a corner
— it was outward-looking and did big trade.

Memorize three signature exports + evidence at both ends:
**Exports: (1) carnelian etched beads (the Indus signature, which Mesopotamia couldn't make the
same way) (2) ivory (3) cotton cloth.**
**Evidence at both ends: one end in Mesopotamia — Indus beads dug from tombs at Ur and Susa,
tablets mentioning Meluhha (= the Indus Valley); the other end with a real name — Sargon of
Akkad's inscription boasting "ships from Meluhha lay at my docks."**

And the seal: square steatite, carved with an animal (often a unicorn-like bull) + a row of
Indus script, pressed into a shipment's clay seal to show ownership — a bit like a signature
or trademark today.

Key exam sentence: Meluhha is the Mesopotamian term for the Indus Valley; Sargon's inscription
plus the beads dug at Ur/Susa are hard evidence of Indus-Mesopotamia sea trade. A civilization
whose own writing no one can read was recorded by another empire through physical objects.`,
        },
      },
    },

    {
      id: 'missing-kingship-and-equality-debate',
      termCn: '缺失的王权与"最平等"之争',
      termEn: 'The Missing Kingship & the "Most Equal" Debate',
      standardRef: ['World History — early river civilizations', 'AP "absence of evidence" reasoning'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ordinary-citizen-no-king',
        nodeIds: ['indus-valley-org-n7', 'indus-valley-org-n10', 'indus-valley-child-n7', 'indus-valley-child-n10'],
        xiaoweiNote: {
          cn: `这是本课最咬人的考点，三个视角的 synthesis（第10节）和组织者第7节都在掂量它。

先背"缺失清单"——挖了一百年都没挖出来的：
**无王宫、无独大神庙、无君主巨像/王陵/纪功碑、几乎无大规模战争痕迹。**
再加一条房屋证据：大多数人家的房子大小、用的东西差得不像别的古文明那么悬殊。

于是有学者说它"**可能是早期复杂社会里最平等的一个**"。但这里有个高阶陷阱，老师反复强调：

**一种说法**：相信眼睛看见的——没挖出明显等级，也许它真的就很平等。
**另一种说法**："没找到精英"不等于"没有精英"。也许权力藏在我们读不出来的形式里
（宗教、家族、那套读不懂的印章文字）。

考点关键句（AP 最高阶）：当一个文明**不能为自己说话**，我们能不能凭"没挖到"断定一样东西
"不存在"？这就是 **absence of evidence（证据缺失）**——"没找到"和"不存在"之间差着一大步。
高分写法：承认两边都站得住，再说你更倾向哪边、为什么。绝不写死成"印度河就是个乌托邦"。`,
          en: `This is the sharpest exam point in the course; the synthesis (Node 10) of all three
lenses and organizer Node 7 weigh it.

First memorize the "missing list" — what a hundred years of digging never turned up:
**no palace, no single dominant temple, no giant ruler statue / royal tomb / victory monument,
almost no trace of large-scale war.** Plus one housing fact: most families' houses, in size and
goods, did not differ as starkly as in other ancient civilizations.

So some scholars say it "**may have been one of the most equal of early complex societies.**"
But there's a high-level trap teacher kept stressing:

**One view**: trust what the eyes see — no obvious rank was dug up, so maybe it really was quite
equal.
**The other view**: "no elite found" is not "no elite." Perhaps power hid in forms we can't read
(religion, families, that unreadable seal-script).

Key exam sentence (AP's highest level): when a civilization **cannot speak for itself**, can we
conclude from "not dug up" that a thing "did not exist"? This is **absence of evidence** — there's
a big step between "not found" and "did not exist." High-scoring move: admit both sides stand,
then say which you lean toward and why. Never write it dead as "the Indus was a utopia."`,
        },
      },
    },

    {
      id: 'decline-causes',
      termCn: '衰落的原因（淡出，不是蒸发）',
      termEn: 'Causes of Decline (a fade, not a vanish)',
      standardRef: ['CA HSS 6.5', 'World History — collapse of civilizations'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'organizer-actor', nodeId: 'indus-valley-org-n8', context: '组织者讲衰落：约前1900起季风减弱、Ghaggar-Hakra 干涸、城市被悄悄放弃' },
          { lens: 'ordinary-citizen-no-king', nodeId: 'indus-valley-child-n8', context: '孩子视角：衰落正落在像我这样的普通人身上，一户户安静走掉' },
        ],
      },
      standaloneText: {
        cn: `印度河文明的衰落是考点，因为它和别的文明"很不一样"——它不是被一场大战或一次征服灭掉的。

**衰落的主因（气候 + 系统性，多因叠加）：**
- **季风（monsoon，雨季）减弱、雨水变少** → 农业基础动摇。
- **Ghaggar-Hakra（加格尔-哈克拉）古河道慢慢干涸** → 一条生命线断了。
- 可能还叠加**洪水改道**和**远方贸易萎缩**。

**最该记的特点："淡出，不是蒸发"。**
约前1900起，城市一片片被**悄悄放弃**，人们收拾东西、往东走，散成更小的村庄和农庄。
那套了不起的本事（统一砝码、网格城、印章文字）没人再需要、没人再传，慢慢失传。

**重要纠错（考点陷阱）：** 老一辈课本爱说"雅利安人入侵毁灭了印度河文明"——
**主流学界已基本否定这个"暴力入侵毁灭说"**；雅利安人的迁入多发生在城市**已经衰落之后**。
考试若出现"雅利安入侵摧毁"选项，多半是错的。

考点关键句：印度河衰落 = 气候/系统性的逐步去城市化，不是一夜陷落、不是被征服。`,
        en: `The Indus decline is an exam point because it was "very unlike" other civilizations — it
wasn't destroyed by a great war or a single conquest.

**Main causes of decline (climate + systemic, several piling up):**
- **The monsoon (rainy season) weakened, rains thinned** → the agricultural base shook.
- **The Ghaggar-Hakra, an old river channel, slowly dried up** → a lifeline was cut.
- Possibly also **floods shifting course** and **distant trade shrinking** on top.

**The trait to remember most: "a fade, not a vanish."**
From about 1900 BCE the cities were **quietly abandoned** patch by patch; people packed up, walked
east, and scattered into smaller villages and farmsteads. The remarkable skills (standard weights,
grid city, seal-script) were no longer needed or passed on, and slowly were lost.

**Important correction (exam trap):** older textbooks loved to say "Aryan invaders destroyed the
Indus civilization" — **mainstream scholarship has largely rejected this "violent invasion"
theory**; Aryan migration mostly happened **after the cities had already declined**. If an exam
offers "destroyed by Aryan invasion," it's usually wrong.

Key exam sentence: the Indus decline = a gradual, climate/systemic de-urbanization, not an
overnight fall and not a conquest.`,
      },
      xiaoweiNote: {
        cn: `老师说这条最容易答错，因为"雅利安入侵毁灭"这个旧说法太深入人心。
新口径：**气候变干 + 河流干涸 → 城市逐片被放弃 → 人口东迁**，是"淡出"不是"被灭"。

我的记忆锚：孩子那句话——"一座城的结束，常常就是无数个像我这样没名字的人，
一户一户、安安静静地拎起行李，转身走掉。"衰落不一定是大爆炸，可能是慢慢没人了。`,
        en: `Teacher said this is the most commonly missed point because the old "Aryan invasion
destroyed it" story is so ingrained. The new line: **climate dried + rivers ran dry → cities
abandoned patch by patch → population migrated east** — a "fade," not a "destruction."

My memory anchor: the child's line — "the end of a city is often just countless nameless people
like me, household by household, quietly picking up their bundles and turning to walk away."
Collapse isn't always a big bang; it can be slowly running out of people.`,
      },
    },

    {
      id: 'priest-king-name-trap',
      termCn: '"祭司王"名字陷阱',
      termEn: 'The "Priest-King" Name Trap',
      standardRef: ['World History — interpreting artifacts', 'AP "absence of evidence" reasoning'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'organizer-actor', nodeId: 'indus-valley-org-n7', context: '组织者的"缺失清单"：没有君主巨像，连一尊能证明有王的雕像都没有' },
        ],
      },
      standaloneText: {
        cn: `这是一个很好玩、也很能考"批判思维"的考点：一件文物的**名字本身就是个误会**。

在 Mohenjo-daro 出土过一尊小石雕（约前2000–前1900，成熟期晚期），
1920年代的发掘者给它起名叫 **"Priest-King（祭司王）"**。

**陷阱在哪？**
"祭司王"这个名字，是发掘者**按自己对"古代统治者应该长什么样"的想象**起的——
**没有任何证据**证明这个人物是祭司，也没有任何证据证明他是王。
这个文明连一个国王的名字都没留下，凭一尊小石像，根本证明不了"印度河有祭司国王"。

**为什么它是经典考题？**
因为它逼你看见：**我们以为的"常识"，可能是后人塞进去的。**
一旦你管它叫"祭司王"，你的大脑就自动假设"这里有王、有神权"——可这是循环论证。

考点关键句："Priest-King" 是后人想象起的名字，不是确证身份的证据；
用它来论证"印度河有国王"是典型的史学陷阱。准确的说法应是"一尊我们其实不知道身份的小石像"。`,
        en: `This is a fun point that tests "critical thinking" well: an artifact whose **name itself
is a misunderstanding.**

A small stone sculpture was found at Mohenjo-daro (about 2000-1900 BCE, late Mature period), and
1920s excavators named it the **"Priest-King."**

**Where's the trap?**
The name "Priest-King" was given by the excavators **based on their own image of what "an ancient
ruler should look like"** — there is **no evidence** the figure was a priest, and **no evidence**
he was a king. This civilization left not one king's name; a small stone statue cannot prove "the
Indus had a priest-king."

**Why is it a classic exam item?**
Because it forces you to see: **what we assume is "common sense" may be something later people
inserted.** Once you call it a "Priest-King," your brain automatically assumes "there was a king,
there was priestly power here" — but that's circular reasoning.

Key exam sentence: "Priest-King" is a name imagined by later people, not evidence of a confirmed
identity; using it to argue "the Indus had a king" is a classic historiography trap. The accurate
phrasing is "a small stone statue whose identity we don't actually know."`,
      },
      xiaoweiNote: {
        cn: `这条我超喜欢，因为它教的是"别被名字骗了"。老师说考试爱用它考 sourcing（史料批判）：
给你"祭司王"这个名字，问你"这能证明印度河有国王吗？"——答案是**不能**，名字是后人起的。

我的记忆锚：和"祭司王"配套的，还有一尊"Dancing Girl（舞女）"青铜小像（失蜡法、约10.5厘米）——
这俩都是印度河最有名的文物，但"舞女"也只是后人起的名，别当成确证的身份。`,
        en: `I love this one because it teaches "don't be fooled by names." Teacher said exams use it to
test sourcing (critique of evidence): they give you the name "Priest-King" and ask "does this prove
the Indus had a king?" — the answer is **no**, the name was given by later people.

My memory anchor: paired with the "Priest-King" is the bronze "Dancing Girl" (lost-wax cast, about
10.5 cm) — both are the Indus's most famous artifacts, but "Dancing Girl" is also just a name later
people gave, not a confirmed identity.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `印度河流域文明挖了一百年，没挖出一座王宫、没挖出一个国王的名字、
房子大小也差得不悬殊。有学者据此说它"可能是早期复杂社会里最平等的一个"。

你觉得"挖不到王和精英"能不能证明"它真的很平等"？
请用至少两条具体证据支持你的判断，并说明你为什么不完全选另一边。`,
      en: `A hundred years of digging at the Indus Valley turned up no palace, no king's name,
and houses that didn't differ much in size. Some scholars say from this that it "may have been
one of the most equal of early complex societies."

Do you think "not finding a king or elites" can prove "it really was equal"? Support your
judgment with at least two specific pieces of evidence, and explain why you don't fully take
the other side.`,
      hintCn: `提示：这题考的就是 absence of evidence（证据缺失）——"没找到"和"不存在"之间差着一步。
- "确实平等"这边的证据：无王宫、无君主巨像、房子大小较均、人人有干净的水和排水。
- "未必平等"这边的证据：文字未解读，权力可能藏在我们读不出的形式里（宗教/家族/印章文字）；
  "看不见明显的国王和巨富"不等于"真的人人平等"。
高分写法：承认两边都站得住，再说你更倾向哪边、为什么。绝不写死成"印度河就是个乌托邦"。`,
      hintEn: `Hint: this tests absence of evidence — there's a step between "not found" and "did not
exist."
- Evidence for "truly equal": no palace, no giant ruler statue, houses fairly even in size,
  everyone with clean water and drains.
- Evidence for "maybe not equal": the script is undeciphered, so power could hide in forms we
  can't read (religion / families / seal-script); "no obvious king or great wealth in sight"
  isn't "everyone truly equal."
High-scoring move: admit both sides stand, then say which you lean toward and why. Never write
it dead as "the Indus was a utopia."`,
      conceptsActivated: ['missing-kingship-and-equality-debate', 'indus-script-undeciphered'],
    },
    {
      id: 'q2',
      cn: `把印度河、两河、埃及、中国四个早期文明放在一起：埃及有法老和金字塔、
两河有国王和塔庙、中国正在形成宫殿与等级化的王权，唯独印度河看不见一个王，
却同样修出全城排水、统一了几百公里的度量衡。

那么——**一个文明，是不是必须有一个坐在顶端的强权中心（国王/王宫/神庙）才能运转？**
用印度河和另外至少一个文明做对照，支持你的看法。`,
      en: `Put the four early civilizations side by side: Egypt had pharaohs and pyramids,
Mesopotamia had kings and ziggurats, China was forming palaces and a ranked kingship — yet the
Indus shows no king at all, while still building city-wide drainage and unifying weights across
hundreds of kilometers.

So — **must a civilization have a strong central power (king / palace / temple) at the top to
run at all?** Support your view using the Indus and at least one other civilization in contrast.`,
      hintCn: `提示：这是本课最强的对照题。先把"权力长相"那一列拎出来比：
埃及/两河/中国都有"看得见的老大"，印度河没有，却照样高度组织（标准化砝码是最硬的证据）。
- 答"不一定非要强权中心"：印度河证明了不靠国王军队、光靠标准和协作也能运转几百年。
- 答"还是需要某种中心"："看不见王"不等于"没有协调"——砝码统一说明背后一定有某种组织，
  只是我们说不出它是谁。
高分写法：别简单二选一，去讨论"强权中心"和"分散协调"可能是两种不同的"组织方案"，
而不是"有没有组织"。`,
      hintEn: `Hint: this is the course's strongest comparison question. First pull out the "face of
power" row: Egypt/Mesopotamia/China all had a "visible boss," the Indus didn't, yet was still
highly organized (standardized weights are the hardest evidence).
- To argue "a strong center isn't required": the Indus proves you can run for centuries on
  standards and cooperation rather than a king and army.
- To argue "some center is still needed": "no king in sight" isn't "no coordination" — the
  unified weights mean some organization must have existed; we just can't say who.
High-scoring move: don't just pick one side — discuss "strong central power" and "scattered
coordination" as two different "organizing solutions," not as "organization vs none."`,
      conceptsActivated: ['four-river-civilizations', 'standardized-weights', 'missing-kingship-and-equality-debate'],
    },
    {
      id: 'q3',
      cn: `印度河文明的文字至今没人能读懂。我们能看见它"做成了什么"（网格城市、排水、砝码、外贸），
却几乎听不见它"自己怎么说"（信什么、有没有王、城里公不公平）。

如果你是历史老师，要出一道题，帮学生看清"考古能确证的"和"我们只能猜的"之间的区别，
你会怎么提问？写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `The Indus script still cannot be read. We can see what the civilization "made" (grid
cities, drainage, weights, foreign trade) but can barely hear what it "said about itself" (what
it believed, whether it had a king, whether the city was fair).

If you were a history teacher writing a question to help students see the difference between
"what archaeology can confirm" and "what we can only guess," how would you phrase it? Write your
question and explain what it's meant to make students see.`,
      hintCn: `提示：好题目通常会逼学生**同时分清两类东西**，而不是背一个答案。
可以从一件具体的东西切入——比如 Great Bath（大水池）：
"我们确证它约12米长、防水做到极致（实物），但'它用于仪式沐浴'只是推测（无神像无祭坛）。"
或从"祭司王"切入：名字是后人起的，不是确证身份。
你的题目可以让学生把一组陈述分成"确证"和"推测"两堆，再解释为什么文字未解读会让
"推测"这一堆变得特别大。这正是本课的招牌：分清确证 vs 推论，比记年代更重要。`,
      hintEn: `Hint: a good question forces students to **sort two kinds of things at once**, not recall
one answer. You can start from a concrete object — say the Great Bath: "we confirm it's about 12 m
long with extreme waterproofing (physical fact), but 'used for ritual bathing' is only a guess (no
idol, no altar)." Or start from the "Priest-King": the name was given by later people, not a
confirmed identity.
Your question could have students sort a set of statements into "confirmed" and "guessed" piles,
then explain why an undeciphered script makes the "guessed" pile so large. That's the course's
signature: telling confirmed from inferred matters more than memorizing dates.`,
      conceptsActivated: ['indus-script-undeciphered', 'great-bath', 'priest-king-name-trap'],
    },
  ],
};

export default notebook;
