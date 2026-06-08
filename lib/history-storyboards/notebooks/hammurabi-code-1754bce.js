// ─── 同伴笔记本架构 v1 · Mesopotamia & Hammurabi's Code c.1754 BCE ─────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（回忆 + 考点提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson, 300-500 字)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系（3 故事线：汉谟拉比 / 巴比伦书吏 / 巴比伦平民女性）：
//   - storyboard 提供情感锚点（立法的王 / 刻字的书吏 / 被算成"三分之一"的平民女性）
//   - notebook 提供考点闭环（Mesopotamia 背景 / 成文法意义 / lex talionis / 三等差等 /
//     君权神授 / 楔形文字 / 性别财产条款 / 与后世法典的关系）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// ⚠️ 事实对账本（lib/history-narratives/hammurabi-code-1754bce-factledger.md 红旗 #1 已修正版）：
//   牙赔偿规则 = 法 200「贵族打同等贵族的牙 → 以牙还牙（敲掉对方的牙）」
//             + 法 201「贵族打 mushkenum 的牙 → 1/3 mina 银子」。
//   「1 mina」属法 198：贵族伤 mushkenum 的眼/骨。
//   绝不写回「贵族牙 = 1 mina」的假价目表。
//
// ⛔ Cultural ban：全程用两河文明真实术语（Mesopotamia / cuneiform / awilum / mushkenum /
//   wardum / Shamash / mina / stele），绝不用王法/律例/衙门/玉玺/翰林/朕/圣旨等中国概念类比两河文明。
//
// 课纲对齐：
//   - AP World History CED Unit 1（早期国家与成文法 / 古代近东）
//   - California HSS Grade 6.2（美索不达米亚 / 两河文明）
//   - 弥补 hammurabi 课纲覆盖率：补完「成文法意义、lex talionis、三等差等、君权神授、
//     楔形文字与书吏、与后世法典关系、性别/财产条款」等 AP World Unit 1 必考闭环
//
// schemaVersion: 1 · notebookVersion: hammurabi-code-1754bce-v1

export var notebook = {
  topicId: 'hammurabi-code-1754bce',
  topicNameCn: '美索不达米亚与汉谟拉比法典',
  topicNameEn: "Mesopotamia & Hammurabi's Code",
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
    cn: `今天历史课开新单元——古代近东，第一站是美索不达米亚（Mesopotamia），
就是"两河之间"那片地（底格里斯河 Tigris + 幼发拉底河 Euphrates 夹着的平原，
大致是今天的伊拉克），重点是一部叫《汉谟拉比法典》(Hammurabi's Code) 的东西。
老师在白板上写了这些名字和词：

人名：Hammurabi（汉谟拉比，巴比伦王）、Shamash（沙马什，太阳神/公正之神）

词：Mesopotamia（两河流域）、cuneiform（楔形文字）、stele（法典石柱）、
written law code（成文法典）、lex talionis（以眼还眼，"talion"原则）、
awilum / mushkenum / wardum（贵族 / 平民 / 奴隶，三个等级）

我先把这些抄下来。等下我要读三条故事线——汉谟拉比（立法的王）、一个巴比伦书吏
（刻字的人）、一个巴比伦平民女人（被法律算成"三分之一"的人）。
读完再回来对照这张单子，看我能不能自己解释每一个。

老师说了一句我写在第一页：
"别把汉谟拉比法典背成'人类法治第一步'。它确实是最早写下来的法律之一——
但'把法律写下来'和'让法律对每个人都公平'，从来不是同一件事。"
她说这句就是这整个单元的核心论点。`,
    en: `Today history class started a new unit — the ancient Near East, first stop
Mesopotamia, which means "between the rivers" (the plain between the Tigris and the
Euphrates, roughly today's Iraq). The centerpiece is something called Hammurabi's Code.
My teacher wrote these names and terms on the board:

Names: Hammurabi (king of Babylon), Shamash (sun god / god of justice)

Terms: Mesopotamia, cuneiform, stele (the law pillar), written law code,
lex talionis (the "an eye for an eye" principle),
awilum / mushkenum / wardum (noble / commoner / enslaved — three ranks)

Let me copy these down first. Then I'll read three storylines — Hammurabi (the king who
made the law), a Babylonian scribe (the one who carved it), and a Babylonian commoner
woman (the one the law reckoned as "one-third"). After that I'll come back and check
whether I can explain each one myself.

Teacher said one thing I wrote on the first page:
"Don't memorize Hammurabi's Code as 'humanity's first step toward rule of law.'
It really is one of the earliest written laws — but 'writing law down' and 'making law
fair to everyone' were never the same thing."
She said that sentence is the central argument of the whole unit.`,
    keyTerms: [
      { cn: '两河流域 / 美索不达米亚', en: 'Mesopotamia' },
      { cn: '成文法典', en: 'written law code' },
      { cn: '楔形文字', en: 'cuneiform' },
      { cn: '法典石柱', en: 'stele' },
      { cn: '以眼还眼（talion 原则）', en: 'lex talionis' },
      { cn: '三等差等正义', en: 'differential justice by class' },
      { cn: '君权神授', en: 'divine authority of kingship' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '汉谟拉比',
        nameEn: 'Hammurabi',
        ipa: '/ˌhæmʊˈrɑːbi/',
        roleCn: '巴比伦国王（约公元前 1792–1750 在位），把 282 条法律刻上石柱的立法者',
        roleEn: 'King of Babylon (r. c. 1792–1750 BCE), lawgiver who carved 282 laws onto a stone stele',
        mustKnow: true,
        audioKey: 'hammurabi',
      },
      {
        nameCn: '沙马什',
        nameEn: 'Shamash',
        ipa: '/ˈʃɑːmɑːʃ/',
        roleCn: '两河文明的太阳神，也是掌"公正"的神；石柱顶浮雕中向汉谟拉比授权杖',
        roleEn: 'Mesopotamian sun god and god of justice; shown handing Hammurabi the rod of authority on the stele',
        mustKnow: true,
        audioKey: 'shamash',
      },
      {
        nameCn: '一个巴比伦书吏（虚构典型人物）',
        nameEn: 'A Babylonian scribe (composite figure)',
        ipa: null,
        roleCn: '识字的中介，把法律一笔一笔刻进湿泥与石头——基于楔形文字职业史构建，非某个史载真人',
        roleEn: 'Literate intermediary who carved the law into clay and stone — a composite built from the history of the cuneiform profession, not a named historical person',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '一个巴比伦平民女性（虚构典型人物）',
        nameEn: 'A Babylonian commoner woman (composite figure)',
        ipa: null,
        roleCn: 'mushkenum（平民）女性，被法律算成"三分之一"的受害一方——基于法典平民/女性条款构建，非某个史载真人',
        roleEn: 'A mushkenum woman on the receiving end, reckoned by the law as "one-third" — a composite built from the code\'s commoner/women clauses, not a named historical person',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：背景——Mesopotamia 两河文明（独立 mini-lesson）──
    {
      id: 'mesopotamia-background',
      termCn: '美索不达米亚 / 两河文明',
      termEn: 'Mesopotamia / Land Between Two Rivers',
      defCn: '美索不达米亚（Mesopotamia）是希腊语，意思是"两河之间"，指底格里斯河和幼发拉底河夹着的那片平原，大致是今天的伊拉克。这里是人类最早的城市和成文法律诞生的地方之一。',
      defEn: 'Mesopotamia is a Greek word meaning "between the rivers" — the plain between the Tigris and the Euphrates, roughly today\'s Iraq. It is one of the places where humanity\'s earliest cities and written laws first appeared.',
      standardRef: ['AP World CED Unit 1', 'CA HSS 6.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'hammurabi', nodeId: 'ham-n2', context: '汉谟拉比故事线第 2 节讲两河流域本是互相打的城邦、他用三十多年统一中下游' },
        ],
      },
      standaloneText: {
        cn: `先把舞台搞清楚，不然后面全是空的。

Mesopotamia（美索不达米亚），这个词是希腊语，意思是"两河之间"——
指底格里斯河（Tigris）和幼发拉底河（Euphrates）中间的那片平原，
大致是今天的伊拉克。课本常把这里叫"文明的摇篮"（cradle of civilization），
因为人类最早的城市、文字、成文法很多都最先出现在这儿。

AP 喜欢考的三个背景点：

1. **不是一个国家，是一堆城邦**。每个城（比如 Ur、Uruk、Babylon）有自己的王、
   自己的守护神、自己的规矩，互相打来打去。Babylon 本来只是中间一个不大的城。
2. **干旱 + 灌溉**。这里雨少，靠两条河泛滥和人工挖渠灌溉种地。水的分配是生死大事——
   所以汉谟拉比法典里有一大堆条款管土地、租佃、灌溉渠纠纷。
3. **统一**。汉谟拉比（约公元前 1792–1750 在位）用三十多年战争，第一次把
   两河中下游的城邦拢成一个王国。一个刚拼起来的大王国最怕"各地各来一套规矩"——
   这是他要刻一部统一法典的真实动机之一（不只是"为公正"，更是"为好管"）。

🔗 故事连接：在汉谟拉比那条故事线里，他自己讲了怎么打了三十多年仗、
为什么统一之后非立一套统一规矩不可。`,
        en: `First, get the stage clear, or everything later is empty.

Mesopotamia is a Greek word meaning "between the rivers" — the plain between the
Tigris and the Euphrates, roughly today's Iraq. Textbooks often call it the
"cradle of civilization," because many of humanity's earliest cities, writing systems,
and written laws first appeared here.

Three background points AP likes to test:

1. **Not one country, but a heap of city-states.** Each city (Ur, Uruk, Babylon)
   had its own king, its own patron god, its own rules, and they fought one another.
   Babylon was at first only a middling city among them.
2. **Drought + irrigation.** Little rain here; farming depended on the two rivers
   flooding and on hand-dug canals. Dividing the water was a matter of life and death —
   which is why Hammurabi's Code has a pile of clauses about land, tenancy, and canal disputes.
3. **Unification.** Hammurabi (r. c. 1792–1750 BCE) spent over thirty years at war and,
   for the first time, gathered the lower and middle Mesopotamian city-states into one
   kingdom. What a freshly stitched-together kingdom fears most is "every region keeping
   its own rules" — that's one real motive behind a single written code
   (not only "for justice," but "for governing").

🔗 In Hammurabi's storyline, he talks about how he spent thirty-odd years at
war and why, once unified, he had to set one body of rules for everyone.`,
      },
      xiaoweiNote: {
        cn: `老师强调："Mesopotamia = 两河之间"这个词源一定要会拆——cuneiform、
汉谟拉比、苏美尔人，全长在这块地上。我的记忆口诀："两条河 Tigris + Euphrates，
夹出一块'摇篮'"。还有一个易错点：Babylon（巴比伦）是城/王国，不要和
Mesopotamia（整个地区）混成一回事——巴比伦只是两河流域里的一个城。`,
        en: `Teacher emphasized: you have to be able to unpack the root —
"Mesopotamia = between the rivers." Cuneiform, Hammurabi, the Sumerians all grew on
this land. My mnemonic: "two rivers, Tigris + Euphrates, cradling one 'cradle.'"
One common slip: Babylon is a city/kingdom — don't blur it with Mesopotamia (the whole
region). Babylon is just one city inside the land between the rivers.`,
      },
    },

    // ── 卡 2：成文法典的意义（故事覆盖：hammurabi）──
    {
      id: 'written-law-code',
      termCn: '成文法典的意义（公开石柱）',
      termEn: 'Significance of a Written Law Code (Public Stele)',
      defCn: '成文法典（written law code）就是把规矩写下来、公开立起来、谁都能查。汉谟拉比法典是最早、最完整的成文法典之一——它第一次让法律变成一件摸得到、查得到的东西，而不是藏在官吏脑子里的口头说法。',
      defEn: 'A written law code means putting rules in writing, posting them publicly, and making them checkable by anyone. Hammurabi\'s Code is one of the earliest and most complete written law codes — it was among the first to turn law into something tangible and verifiable, rather than an oral judgment kept in an official\'s head.',
      standardRef: ['AP World CED Unit 1', 'CA HSS 6.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'hammurabi',
        nodeIds: ['ham-n1', 'ham-n3', 'ham-n7'],
        xiaoweiNote: {
          cn: `这个我读过！汉谟拉比那条故事线开头：他在巴比伦城里立起一根两米多高的
黑石柱（stele），上面用楔形文字（cuneiform）刻满了 282 条法律，立在城里给所有人看。

为什么这是大事？在他之前，规矩多半在官吏脑子里、靠口头裁断。同一件事，这个官判轻、
那个官判重，没人查得到。把法律**写下来、公开、谁都能查**，
是两河文明对后世最重要的贡献之一。

但老师反复强调的是那句反"单线进步"的话——成文法 ≠ 平等的法。
这部"对所有人公开"的法典，内容本身就把人分成三等（见三等差等那张卡）。
把规矩写下来，确实给了报复设上限、给了可查的标准；
可它同时也把"不平等"钉成了神授、永恒、白纸黑字、更难翻案的东西。

考点关键句：汉谟拉比法典是**最早、最完整的成文法典之一**（注意：不是"第一部"——
更早还有 Ur-Nammu 法典，约公元前 2100 年）。它确立了一个延续几千年的观念：
法律是可以写下来、公开、可查的东西。这条线后面会接到 Magna Carta 和美国宪法。`,
          en: `I read this! At the start of Hammurabi's storyline: he set up a black stele
more than two meters tall in the city of Babylon, covered in cuneiform with 282 laws,
standing in public for everyone to see.

Why is that a big deal? Before him, rules lived mostly in officials' heads and oral
judgments — the same act judged lightly by one official, harshly by another, with no way
to check. Writing law down — **public, and checkable by anyone** — is one of
Mesopotamia's most important gifts to later ages.

But the thing teacher kept hammering is the anti-"single-line progress" point:
written law ≠ equal law. This code "public to everyone" was, in its content, the sorting
of people into three ranks (see the differential-justice card). Writing rules down did
set a ceiling on revenge and gave a checkable standard; but it also nailed "inequality"
into something god-given, eternal, in black and white, and harder to overturn.

Key exam sentence: Hammurabi's Code is **one of the earliest and most complete written
law codes** (note: NOT "the first" — the Code of Ur-Nammu, c. 2100 BCE, is older).
It established an idea that lasted thousands of years: law is something that can be
written down, made public, and checked. This line later connects to Magna Carta and the
US Constitution.`,
        },
      },
    },

    // ── 卡 3：lex talionis 以眼还眼（故事覆盖：hammurabi）──
    {
      id: 'lex-talionis',
      termCn: 'lex talionis / 以眼还眼，以牙还牙',
      termEn: 'Lex Talionis / An Eye for an Eye',
      defCn: 'Lex talionis（拉丁语，读"LEX tah-lee-OH-niss"）就是"以眼还眼、以牙还牙"的原则——报复不能超过对方造成的伤害本身。它听起来很狠，其实是给报复设了上限。但这个原则在法典里只在同一等人之间成立，跨等级就换成赔钱了事。',
      defEn: 'Lex talionis (Latin, "the talion principle") means "an eye for an eye, a tooth for a tooth" — revenge may not exceed the original harm. It sounds harsh but actually sets a ceiling on retaliation. In the code, though, this principle only applies between people of the same rank; across ranks, the punishment becomes a cash payment instead.',
      standardRef: ['AP World CED Unit 1', 'CA HSS 6.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'hammurabi',
        nodeIds: ['ham-n5', 'ham-n6'],
        xiaoweiNote: {
          cn: `汉谟拉比那条故事线专门有两节讲这个，是这一课最容易考、也最容易理解错的一条。

lex talionis（拉丁语，"talion"原则）= "以眼还眼，以牙还牙"。
第一层意思别搞错：它听起来很狠，其实是一种**节制**——报复不能超过伤害本身。
比起"弄瞎一只眼就处死你"，"你弄瞎我一只眼、我也只能弄瞎你一只眼"反而给报复设了上限。

但这里有个 AP 必考的陷阱（老师说几乎每年都绕着这个出题）：
**"以眼还眼"只在同一等人之间成立。**

①一个 awilum（贵族）弄瞎另一个 awilum 的眼 → 以眼还眼（法 196）。
②一个 awilum 弄瞎一个 mushkenum（平民）的眼或打断他的骨 → 不还眼，赔 1 mina 银子（法 198）。
③牙也一样：贵族打掉同等贵族的牙 → 以牙还牙、敲掉他的牙抵（法 200）；
  贵族打掉平民的牙 → 只赔 1/3 mina 了事（法 201）。

⚠️ 别记错：法典里**没有**"贵族牙 = 1 mina"这条。"1 mina"是法 198 赔平民的**眼/骨**，
不是牙。牙的对照是"贵族之间以牙还牙 vs 打平民赔 1/3 mina"。

考点关键句：lex talionis 不是"人人一命抵一命"，而是"**同等人之间**一命抵一命"。
你比我低一等，我伤你用钱买单；你伤我，你拿身体或命来还。`,
          en: `Hammurabi's storyline has two sections specifically on this — it's the
most-tested and most-misunderstood point in the whole topic.

Lex talionis (Latin, the "talion" principle) = "an eye for an eye, a tooth for a tooth."
First layer, don't get it wrong: it sounds harsh but is actually a **restraint** — revenge
may not exceed the harm itself. Compared to "blind an eye, be put to death," "you blind
my eye, I can only blind yours" sets a ceiling on revenge.

But here's an AP-required trap (teacher said exams circle this almost every year):
**"An eye for an eye" held only between people of the same rank.**

① An awilum blinds another awilum's eye → an eye for an eye (Law 196).
② An awilum blinds a mushkenum's (commoner's) eye or breaks his bone → no eye taken,
  pay 1 mina of silver (Law 198).
③ Same with teeth: a noble knocks out an equal noble's tooth → tooth for tooth, his own
  is knocked out (Law 200); a noble knocks out a commoner's tooth → only pay 1/3 mina
  and be done (Law 201).

⚠️ Don't misremember: there is **no** "noble's tooth = 1 mina" clause. The "1 mina" is
Law 198, paid for a commoner's **eye/bone**, not a tooth. The tooth comparison is
"tooth-for-tooth among nobles vs 1/3 mina for striking a commoner."

Key exam sentence: lex talionis is not "every life worth a life" but "a life for a life
**among equals**." A rank below me and I harm you, I settle with money; you harm me,
you pay with your body or your life.`,
        },
      },
    },

    // ── 卡 4：三等差等正义 awilum/mushkenum/wardum（故事覆盖：all lens）──
    {
      id: 'three-class-justice',
      termCn: '三等差等正义（awilum / mushkenum / wardum）',
      termEn: 'Differential Justice by Class (awilum / mushkenum / wardum)',
      defCn: '三等差等正义是说：汉谟拉比法典把人分成三个等级——awilum（贵族）、mushkenum（平民）、wardum（奴隶）——同样的犯罪、同样的伤害，对不同等级的人处罚完全不一样。这不是法典的疏漏，是法典明文规定的核心结构。',
      defEn: 'Differential justice by class means that Hammurabi\'s Code divided people into three ranks — awilum (nobles), mushkenum (commoners), and wardum (the enslaved) — and applied completely different punishments for the same crime or injury depending on rank. This was not an oversight; it was the code\'s explicit, built-in structure.',
      standardRef: ['AP World CED Unit 1', 'CA HSS 6.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ham-n4', 'ham-n6', 'sc-n6', 'cw-n4', 'cw-n6'],
        xiaoweiNote: {
          cn: `这是整门课的脊梁。三条故事线里，汉谟拉比、书吏、平民女性各自有一节专门说这件事，
然后又各有一节把它讲得最清楚——所以三条线其实是同一颗牙，从三个角度各看一次。

巴比伦把人分成三等（这套词一定要会，AP 直接考术语）：
- **awilum**（阿维鲁）= 有地位的自由人 / 贵族，最高一等。
- **mushkenum**（穆什凯努）= 平民，中间一等。
  （提一句：学界对 mushkenum 到底是什么人有争议，可能是"依附王室或神庙的半自由人"，
  6 年级层面记成"平民"就行，但知道有这层细节更稳。）
- **wardum**（瓦尔杜）= 奴隶，最低一等，在法律眼里近于财产。

"同罪不同罚"是法典明文的核心结构，不是疏漏：
同一颗牙，贵族之间得**以牙还牙**（法 200），贵族打平民只赔 **1/3 mina**（法 201）；
伤奴隶呢——伤别人的奴隶赔奴隶**身价的一半**给奴隶主（法 199），因为奴隶是财产。

三条故事线里读到的同一件事，各看一面：
- 汉谟拉比那条线：三等差等是**设计**，不是 bug——在王眼里"这就是世界本来的样子"。
- 书吏那条线：他比谁都更早读懂这不公，却**忠实地一字不改**把它刻进永恒。
- 平民女性那条线：受害这边——"在那块石头上，我从来不是'一个人'，我是'三分之一'。"

考点关键句：汉谟拉比法典用成文的方式把社会等级**写进了法律本身**——
这是"成文 ≠ 平等"最硬的证据。`,
          en: `This is the spine of the whole topic. In all three storylines — Hammurabi,
the scribe, and the commoner woman — each has one section dedicated to this point, then
another section that makes it clearest. So the three stories are really the same tooth,
seen once from each angle.

Babylon split people into three ranks (you MUST know these terms; AP tests the vocabulary
directly):
- **awilum** = free people of standing / nobles, the top rank.
- **mushkenum** = commoners, the middle rank.
  (One note: scholars debate what mushkenum exactly were — possibly "semi-free people
  attached to the palace or temple." At the Grade 6 level "commoner" is fine, but knowing
  this nuance is safer.)
- **wardum** = the enslaved, the bottom rank, closer to property in the eyes of the law.

"Same crime, different punishment" is the code's explicit core structure, not an oversight:
the same tooth — among nobles it's **tooth for tooth** (Law 200); a noble striking a
commoner pays only **1/3 mina** (Law 201); and harming a slave — harming someone else's
slave costs **half the slave's value** to the owner (Law 199), because the slave is property.

The same thing read across three storylines, one face each:
- Hammurabi's line: differential justice is **design**, not a bug — in the king's eyes
  "this is just the way the world is."
- The scribe's line: he reads the injustice earlier than anyone, yet **faithfully, without
  changing a sign**, carves it into eternity.
- The commoner woman's line: the receiving end — "on that stone I was never 'a person,'
  I was 'one-third.'"

Key exam sentence: Hammurabi's Code wrote social hierarchy **into the law itself** —
the hardest evidence for "written ≠ equal."`,
        },
      },
    },

    // ── 卡 5：君权神授 Shamash（故事覆盖：hammurabi）──
    {
      id: 'divine-authority',
      termCn: '君权神授（Shamash 授权）',
      termEn: 'Divine Authority of Kingship (Shamash)',
      defCn: '君权神授（divine authority）是说统治者声称自己的权力来自神，不是来自自己。汉谟拉比说他的法律是太阳神 Shamash 交给他的——这样一来，违法就变成了违神，比单纯"违抗国王"更难反抗。这是早期国家给权力"加保险"的常见手法。',
      defEn: 'Divine authority means a ruler claims their power comes from a god, not from themselves. Hammurabi said his laws were handed to him by the sun god Shamash — so breaking the law became an act against the god, not just against the king. This was a common move early states used to make their power harder to challenge.',
      standardRef: ['AP World CED Unit 1', 'CA HSS 6.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'hammurabi',
        nodeIds: ['ham-n3'],
        xiaoweiNote: {
          cn: `汉谟拉比那条故事线有一节专门讲这个，AP 经常和"统治合法性"(legitimacy) 一起考。

关键问题：汉谟拉比凭什么说他的法律是对的？
他**没有**说"这是我汉谟拉比想的规矩，听我的"。他说："这些法律，是神交给我的。"

证据就刻在石柱顶上那幅浮雕（这是一手视觉史料，AP 会拿这张图来出 source 题）：
汉谟拉比**站着**，太阳神 **Shamash 坐着**，把一根象征权力与公正的权杖
（rod-and-ring）递到他手里。Shamash 在两河人心里正是掌"公正"的神。

这幅画全城人一看就懂：违法不只是违抗国王，是**违抗神**。

⚠️ 这里有个"防杜撰"的好习惯，故事里也专门标了：
神有没有真把权杖交给他，没人能证；能确证的只是这幅浮雕真刻在石柱顶上，
今天还能在卢浮宫看到。所以"君权神授"是一种**合法性包装**，不是史实记录的神迹。

考点关键句：把法律和神绑在一起，是早期国家最常用的一招——
让一套对掌权者有利的规矩，看起来像"神授的、不容置疑的真理"。
这条母题后面还会反复出现（比如欧洲中世纪的"君权神授"divine right of kings）。`,
          en: `Hammurabi's storyline has a section specifically on this; AP often tests it
alongside "legitimacy" (the right to rule).

Key question: on what grounds does Hammurabi say his laws are right?
He did **not** say "these are rules I, Hammurabi, thought up, so obey me." He said:
"these laws were handed to me by a god."

The evidence is carved at the top of the stele in a relief (this is a primary visual
source — AP will use this image for a source question): Hammurabi **stands**, the sun god
**Shamash sits**, and Shamash passes him a rod that stands for power and justice
(the rod-and-ring). Shamash, to the Mesopotamians, was precisely the god of "justice."

The whole city understood the picture at a glance: breaking the law meant defying not only
the king but **the god**.

⚠️ Here's a good anti-fabrication habit, flagged in the story too:
whether a god truly handed him the rod, no one can prove; what can be confirmed is only
that this relief really sits atop the stele, still visible in the Louvre today. So
"divine authority" is a **legitimacy wrapper**, not a recorded miracle.

Key exam sentence: binding law to a god was an early state's most common move —
making a set of rules favoring the ruler look like "god-given, unquestionable truth."
This motif returns again and again later (e.g. the medieval European "divine right of kings").`,
        },
      },
    },

    // ── 卡 6：楔形文字与书吏（故事覆盖：scribe lens）──
    {
      id: 'cuneiform-scribe',
      termCn: '楔形文字与书吏（识字中介）',
      termEn: 'Cuneiform & the Scribe (Literate Intermediary)',
      defCn: '楔形文字（cuneiform）是两河文明的文字系统——用尖头芦苇在湿泥板上压出楔形符号。书吏（scribe）是少数受过专门训练、能读会写的人，他们是那个年代的"知识中介"，所有写下来的法律、契约、命令都要经他们的手。',
      defEn: 'Cuneiform is the writing system of Mesopotamia — wedge-shaped marks pressed into wet clay tablets with a sharp reed. A scribe was one of the few specially trained people who could read and write; they were the "knowledge brokers" of their age, and every written law, contract, and command passed through their hands.',
      standardRef: ['AP World CED Unit 1', 'CA HSS 6.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'babylonian-scribe',
        nodeIds: ['sc-n1', 'sc-n2', 'sc-n6'],
        xiaoweiNote: {
          cn: `书吏那条故事线整条线就是这个考点。先说清楚：那个书吏是虚构典型人物，
基于楔形文字职业史构建，故事里也明说了——不是史书上某个有名有姓的人。

cuneiform（楔形文字）= 用尖头芦苇在**湿泥板**上压出来的楔形符号，
是两河文明的文字系统。它**不是**几十个字母，而是**几百个**符号——
所以学起来极难，书吏要从小进书吏学校（edubba）抄千百块泥板、抄错挨打，练好多年才出师。

为什么书吏重要？因为那个年代识字的人极少（故事里说"一万人里也许就几个"，
这是修辞性的约数，方向对——古代两河识字率确实极低）。在一个
"**写下来的才作数**"的世界里，能读会写的人手握一种隐形的权力：
契约、账本、判决、王命，全经书吏的手。汉谟拉比那 282 条**不是国王亲手刻的**，
是书吏在泥板上拟稿、核对，再由工匠凿到石柱上。

书吏那条故事线后面有个画面我忘不了：他亲手把"人不平等"这件本来只是国王嘴里
一句话的事，一笔一笔刻进谁都改不了的石头——"我让不平等有了永生"。

🔗 跨课：识字者作为"知识中介"是个跨文明母题——西非廷巴克图的抄书人
（讲西非王国那一课会再见到）、欧洲书信网里的 Mersenne 修士（讲科学革命那一课会再见到），
干的是同一件事：决定什么被记下、什么被遗忘。

考点关键句：在大多数人不识字的古代社会，**书吏（识字阶层）是不可见但关键的中介**——
"被写下来的"往往就成了后人眼里"真的发生过的"。`,
          en: `The scribe's storyline is entirely this concept. First, to be clear: that
scribe is an invented typical figure built from the history of the cuneiform profession,
stated openly in the story — not a named person from the history books.

Cuneiform = wedge-shaped marks pressed into **wet clay tablets** with a sharp reed,
the writing system of Mesopotamia. It is **not** a few dozen letters but **hundreds** of
signs — so it was brutally hard to learn. Scribes trained from childhood in a scribal
school (edubba), copying thousands of tablets, beaten for mistakes, for years before
qualifying.

Why do scribes matter? Because almost no one was literate then (the story says "perhaps a
handful out of ten thousand" — a rhetorical approximation, but the direction is right:
ancient Mesopotamian literacy really was tiny). In a world where **only what's written
down counts**, the one who could read and write held an invisible power: contracts,
ledgers, verdicts, royal commands all passed through the scribe's hands. Hammurabi's 282
laws were **not carved by the king himself** — scribes drafted and checked them on clay,
and craftsmen chiseled them onto the stele.

Later in the scribe's storyline there's an image I can't forget: with his own hand he
carves "people are not equal" — once only a sentence in the king's mouth — stroke by
stroke into stone no one can alter: "I gave inequality everlasting life."

🔗 Cross-topic: the literate person as "knowledge broker" is a cross-civilization theme —
the book-copyists of Timbuktu in West Africa (you'll see them again in the West African
kingdoms unit), the friar Mersenne who tied scientists into a letter network (you'll see
him again in the scientific revolution unit) — doing the same thing: deciding what gets
recorded and what is forgotten.

Key exam sentence: in ancient societies where most could not read, **the scribe (the
literate class) was the invisible but essential intermediary** — "what is written down"
often becomes, to those who come after, "what really happened."`,
        },
      },
    },

    // ── 卡 7：性别与财产条款（故事覆盖：commoner-woman）──
    {
      id: 'women-property-clauses',
      termCn: '性别与财产条款（女性的保护与枷锁）',
      termEn: 'Gender & Property Clauses (Protection and Constraint)',
      defCn: '汉谟拉比法典对女性既有保护（比如退嫁妆、寡妇份额），也有限制（把女性定在比同等男性更低的位置）。好处和枷锁是同一批文字一起给的。AP 考题经常考"两面都写"——不能只说"压迫"，也不能只说"保护"。',
      defEn: "Hammurabi's Code both protected women in some ways (such as returning a dowry and protecting a widow's share) and constrained them (placing women lower than men of equal rank). The protections and the limitations came from the same set of laws. AP essay questions often reward writing both sides — don't say only \"oppression\" or only \"protection.\"",
      standardRef: ['AP World CED Unit 1', 'CA HSS 6.2'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'babylonian-commoner-woman-receiving-end',
        nodeIds: ['cw-n3'],
        xiaoweiNote: {
          cn: `平民女性那条故事线里有一节专门讲这个，考点是"别走极端"——法典对女性
**既有保护、又有枷锁**，而且是同一批字一起给的。这正是 AP DBQ 喜欢的"复杂性"。

法典确实给了女性一些**白纸黑字的保护**（比起"全凭男人一句话"已经不算少）：
- 丈夫休妻，得**退还嫁妆**（dowry），不能让她净身出户（法 138 一类）。
- 丈夫长期出门抛弃她，一定条件下她可**另嫁**（法 134–136 一类）。
- 寡妇对亡夫财产有**受保护的份额**（法 171–172 一类）。
（这些条号是"类指"，故事和账本都标了是简化处理。）

但**同一部法典**也用更细的笔把女性钉在比同等男性更低的位置上。再叠上阶级——
一个 mushkenum 女性是"平民 + 女人"两层身份的最底下，属于法典里赔得最少、护得最薄的一类。

考点关键句：评价汉谟拉比法典对女性的态度，**不能只说"压迫"也不能只说"保护"**——
正确写法是"它给了女性一些可指望的财产/婚姻保障，同时又把'女性低人一等'写进了法律。
好处和枷锁是同一批字一起给的。"这种"两面都写"正是 AP essay 拿分的关键。`,
          en: `The commoner woman's storyline has a section specifically on this; the exam
point is "don't go to extremes" — the code gives women **both protection and constraint**,
and they come from the same set of signs. This is exactly the "complexity" AP DBQs love.

The code truly gave women some **protections in black and white** (compared to "entirely at
a man's word," this was not little):
- If a husband divorces his wife, he must **return the dowry** — he cannot turn her out
  with nothing (Law 138 type).
- If the husband is long away and abandons her, under certain conditions she may **remarry**
  (Laws 134–136 type).
- A widow holds a **protected share** of her late husband's property (Laws 171–172 type).
(These law numbers are "type" references; the story and the fact ledger both flag them as
simplified.)

But the **same code** also, with a finer pen, nailed women into a place lower than equal
men. Stack class on top — a mushkenum woman is at the bottom of two layers, "commoner +
woman," among the least-paid and thinnest-protected in the code.

Key exam sentence: when judging the code's treatment of women, **don't say only
"oppression" or only "protection"** — the right move is: "it gave women some property and
marriage protections they could count on, while also writing 'women are lower' into the
law. The benefit and the chain came from the same set of signs." Writing "both sides" is
how you score on AP essays.`,
        },
      },
    },

    // ── 卡 8：与后世法典的关系（独立 mini-lesson）──
    {
      id: 'legacy-later-law',
      termCn: '与后世法典的关系（成文法长线）',
      termEn: 'Relationship to Later Law Codes (the Long Line of Written Law)',
      defCn: '汉谟拉比法典开了"把法律写下来"这条几千年的长线。后来的 Magna Carta（英格兰 1215）和美国宪法（1787）都在这条线上——但每一部成文法都要问同一个问题：它对不同的人标的是不是同一个价？',
      defEn: "Hammurabi's Code started a thousands-of-years line of \"writing law down.\" Magna Carta (England, 1215) and the US Constitution (1787) both sit on this line — but every written law must answer the same question: does it mark different people at the same price?",
      standardRef: ['AP World CED Unit 1', 'CA HSS 6.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'hammurabi', nodeId: 'ham-n7', context: '汉谟拉比故事线第 7 节把石柱前挂到 1215 年 Magna Carta「依国法」law of the land' },
          { lens: 'babylonian-commoner-woman-receiving-end', nodeId: 'cw-n7', context: '平民女性故事线第 7 节把"我的牙值三分之一"对照美国宪法 3/5 妥协' },
        ],
      },
      standaloneText: {
        cn: `汉谟拉比法典最长的影响，是它开了"把法律写下来"这条几千年的长线。
AP World 经常让你做"延续与变化"（continuity & change）：把它和后世两部成文法对照。

**对照 1：Magna Carta（大宪章，英格兰 1215）。**
两千多年后，一群英格兰贵族逼国王签下一份写明规矩的文件，里面有一句"依国法"
（law of the land）：自由人非经国法不得被任意拘押。
- **相同**：都把规矩写下来，用成文法去约束行为。
- **关键不同**（AP 必考的分岔）：汉谟拉比法典是**王立给百姓守的**——管子民，不太管王自己；
  Magna Carta 想做的是**反过来**——用写下来的法去约束**国王本人**。
  同样是"成文法"，一个是统治者管别人的工具，一个是被统治者管统治者的武器。

**对照 2：美国宪法（1787）。**
三千多年后，一部新写的宪法把被奴役的人算成"五分之三个人"（3/5 妥协）——
不是疏忽，是**写进根本大法**。
- 这和"我的牙值三分之一 mina"是隔着三千年、半个地球的**同一件事**：
  用写下来的法，把人明码标上不同的价。
- 它提醒我们：成文 ≠ 平等这条警示，从汉谟拉比的石柱一直延续到 1787 年的费城。

🔗 故事连接：汉谟拉比那条故事线最后把石柱前挂到 Magna Carta；
平民女性那条故事线最后把"三分之一"对照到美国宪法"五分之三"。

考点关键句：判断一部法律是"正义"还是"谁该听谁的"，**不看它写没写下来，
看它给不同的人标的是不是同一个价**。这句话能把这三部法典串成一条论点。`,
        en: `Hammurabi's Code's longest influence is opening the thousands-of-years line of
"writing law down." AP World often asks for "continuity & change": compare it to two later
written laws.

**Comparison 1: Magna Carta (England, 1215).**
More than two thousand years later, a group of English nobles forced their king to sign a
document spelling out the rules. In it is the phrase "law of the land": no free man may be
seized arbitrarily except by the law of the land.
- **Same**: both write rules down and use written law to bind behavior.
- **Key difference** (the fork AP tests): Hammurabi's Code was **set by the king for his
  subjects to obey** — it governs the subjects, not so much the king himself; Magna Carta
  tried to do the **reverse** — to use written law to bind **the king in person**.
  The same "written law," one a tool the ruler uses on others, one a weapon the ruled use
  on the ruler.

**Comparison 2: The US Constitution (1787).**
More than three thousand years later, a freshly written constitution counted enslaved
people as "three-fifths of a person" (the 3/5 Compromise) — not by oversight, but
**written into the foundational law**.
- This and "my tooth is worth one-third of a mina" are, across three thousand years and
  half the world, the **same thing**: using written law to mark people, plainly, at
  different prices.
- It reminds us: the warning "written ≠ equal" runs from Hammurabi's stele all the way to
  Philadelphia in 1787.

🔗 At the end of Hammurabi's storyline, he ties the stele forward to Magna Carta;
at the end of the commoner woman's storyline, she ties "one-third" to the US Constitution's
"three-fifths."

Key exam sentence: whether a law is "justice" or "who must obey whom" depends **not on
whether it is written down, but on whether it marks different people at the same price**.
That sentence strings all three codes into one argument.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是"把整个单元拉成一条线"的卡——AP 比较题最爱出
"汉谟拉比 vs Magna Carta"。我的记忆口诀："**同样写下来，方向却相反**——
汉谟拉比管百姓，大宪章管国王。"再加一句压轴："看的不是写没写，是同不同价。"`,
        en: `Teacher said this card is the one that "pulls the whole unit into a line" —
AP comparison questions love "Hammurabi vs Magna Carta." My mnemonic: "**both written
down, opposite directions** — Hammurabi governs the people, Magna Carta governs the king."
Plus a closer: "what matters isn't whether it's written, but whether it's one price."`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `汉谟拉比法典的序言高调宣称：国王立法，是"为了让强者不能欺压弱者"。
可正文里，贵族打掉同等贵族的牙得以牙还牙，贵族打掉一个 mushkenum（平民）的牙
只赔 1/3 mina 就完事。

序言和条款，是不是自相矛盾？如果汉谟拉比本人坐在你面前，他会怎么解释这个矛盾？`,
      en: `Hammurabi's Code's prologue loudly proclaims that the king made the law
"so that the strong might not oppress the weak." Yet in the body, a noble who knocks out an
equal noble's tooth pays tooth-for-tooth, while a noble who knocks out a mushkenum's
(commoner's) tooth pays only 1/3 mina and is done.

Do the prologue and the clauses contradict each other? If Hammurabi himself were sitting in
front of you, how would he explain the contradiction?`,
      hintCn: `提示：可以从两个角度想——
①在汉谟拉比眼里这可能**根本不是矛盾**：
"保护弱者"在他心里也许只是"按各人的身份给各人应得的那一份"，
而"贵族和平民本来就不该值同一个价"在那个年代被当成天经地义；
②或者这本来就是一种**包装**——序言用漂亮话立人设（"正义之王"），
正文才是真正对掌权阶层有利的安排。两种解读都有学者支持。

进阶：今天有没有类似的情况——一份文件/规定开头写着很美的原则，
具体条款落下来对不同的人却不一样？`,
      hintEn: `Hint: think from two angles —
① In Hammurabi's eyes this may be **no contradiction at all**: "protecting the weak"
might mean "giving each person the share their rank deserves," and "nobles and commoners
were never meant to be worth the same" was taken as self-evident in that age.
② Or this is a **wrapper** — the prologue uses fine words to build an image ("the king of
justice"), while the clauses are the real arrangement favoring the ruling class.
Both readings have scholarly support.

Going deeper: is there anything similar today — a document or policy that opens with
beautiful principles, but whose specific clauses land differently on different people?`,
      conceptsActivated: ['written-law-code', 'three-class-justice', 'divine-authority'],
    },
    {
      id: 'q2',
      cn: `那个巴比伦书吏读得懂法律的不公——他自己就是平民出身，
亏的是跟他一样的人。可他这行的第一条规矩是"忠实抄录"，一字不改，
于是他把"贵族打平民只赔 1/3 mina"这样的条款，一笔一笔忠实地刻进了永不烂的石头。

"我只是照着写、照命令办"，能不能洗清一个人的责任？如果你是 AP 老师，
让你出一道 DBQ 题来分析"执行者的责任"，你会怎么提问？`,
      en: `That Babylonian scribe could read the injustice of the law — he was of
commoner birth himself, and the ones who lose are people like him. Yet the first rule of
his trade was "faithful copying," not a sign changed, and so he faithfully carved clauses
like "a noble who strikes a commoner pays only 1/3 mina" into stone that would never rot.

Can "I only wrote it down / I only followed orders" clear a person of responsibility?
If you were an AP teacher writing a DBQ on "the responsibility of the one who carries it
out," how would you phrase the question?`,
      hintCn: `提示：DBQ 通常会给你几份一手史料（书吏行规、刻好的法典石柱、
被这条法律伤到的平民的处境），让你分析"中间那只手"算不算共谋。
没有标准答案，重要的是用证据分两边写：
- 一边："他不立法、不分贵贱，只是手艺人的本分，要怪该怪立法的王。"
- 另一边："正因为他忠实，这部分三等的法才准确无误地立了起来——
  没有他这样的人，它只是空话；是他让空话有了牙齿。"

进阶：这个"执行者责任"的问题，在历史上、在今天，还能套到哪些人身上？`,
      hintEn: `Hint: a DBQ usually gives you several primary sources (the scribe's trade
rules, the carved law stele, the situation of a commoner hurt by this clause) and asks you
to analyze whether "the hand in the middle" counts as complicity. No standard answer —
what matters is using evidence to write both sides:
- One side: "he didn't make the law or sort the ranks, he just did a craftsman's duty;
  if there's blame, blame the king who made the law."
- Other side: "precisely because he was faithful, this three-rank law stood up flawlessly —
  without people like him it was only empty words; he is the one who gave it teeth."

Going deeper: this "responsibility of the one who carries it out" question — what other
people, in history and today, could it apply to?`,
      conceptsActivated: ['cuneiform-scribe', 'three-class-justice', 'written-law-code'],
    },
    {
      id: 'q3',
      cn: `那个被打掉一颗牙的平民女性说："坏官会死、会换，刻进石头、说成神意的不公，
却一直立在那儿。"——她觉得"把不平等写进法律"，比"一个坏官随口欺负人"更可怕。

你同意吗？把规矩"写下来、公开、谁都能查"，到底让弱者更安全，还是更危险？
（想一想：成文法既给了她退嫁妆、寡妇份额这些可指望的保护，也把"她的牙只值 1/3"
钉成了神授永恒的"正义"。）`,
      en: `The commoner woman who lost a tooth said: "A bad official dies, gets
replaced; but injustice carved into stone and called the will of a god stands there
forever." — she thought "writing inequality into law" was more terrible than "a bad
official bullying someone on a whim."

Do you agree? Does writing rules down — public, checkable by anyone — make the weak safer,
or more endangered? (Consider: the written code gave her dependable protections like dowry
return and a widow's share, but also nailed "her tooth is worth only 1/3" into a god-given,
eternal "justice.")`,
      hintCn: `提示：这题没有标准答案，关键是抓住"成文"这把双刃剑的两面：
- "更安全"一边：写下来 → 有可查的标准、给报复设了上限、坏官不能随口乱判，
  弱者第一次有了能抓住、能拿去讨说法的东西。
- "更危险"一边：写下来 → 不公不再依赖某个坏人活着，它自己一代代立着，
  还盖上"神授""永恒"的章，更难骂、更难换、更难翻案。

进阶（跨课）：把她的"三分之一"和美国宪法的"五分之三"放在一起——
隔着三千年，两部成文法都把人标了价。判断一部法律公不公平，
该看它"写没写下来"，还是看它"给不同的人标的是不是同一个价"？`,
      hintEn: `Hint: no standard answer here; the key is holding both edges of the
"written-down" double blade:
- The "safer" side: written down → a checkable standard, a ceiling on revenge, a bad
  official can't judge however he likes; for the first time the weak have something they
  can grasp and use to claim justice.
- The "more endangered" side: written down → injustice no longer depends on some bad
  person being alive; it stands by itself generation after generation, stamped "god-given"
  and "eternal," harder to curse, swap out, or overturn.

Going deeper (cross-topic): set her "one-third" beside the US Constitution's "three-fifths"
— across three thousand years, both written laws put a price on people. To judge whether a
law is fair, should you look at whether it's "written down," or at whether it "marks
different people at the same price"?`,
      conceptsActivated: ['written-law-code', 'three-class-justice', 'women-property-clauses', 'legacy-later-law'],
    },
  ],
};

export default notebook;
