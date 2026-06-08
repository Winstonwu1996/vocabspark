// ─── 同伴笔记本架构 v1 · The Vietnam War 1965 ─────────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题，Rule 0 中性
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（华盛顿决策者 actor / 被征兵士兵 mediator /
//     湄公河村庄少女 receiving-end · DEFAULT 三条线）
//   - notebook 提供考点闭环（Gulf of Tonkin、containment + domino、escalation、
//     Tet + credibility gap、the draft 不公、My Lai、反战运动与 1960s 动荡、
//     Kent State、巴黎协定+西贡陷落、§8 中国桥 — 补完 APUSH Unit 8 / 8.9 课纲）
//
// 课纲对齐：
//   - APUSH Period 8 (1945-1980)：KC-8.1.II (冷战遏制) / 8.9 The Vietnam War & 1960s 社会运动
//   - CA / 各州 HS U.S. History — 冷战与越战单元
//
// 事实地基：对账 vietnam-war-1965-factledger.md（28/28 claim verified）
//   + narrative 附录 A 时间线 / B 词汇 / C 人物 / §7 DBQ / §8 中国桥 / §10 误解
//   - My Lai 死亡数沿用区间「约 347-504」，勿硬定单值（账本红旗 #2）
//   - 越南平民死亡「约 200 万」标 1995 官方估计性质（账本红旗 #4）
//   - Cronkite「stalemate」标转述非档案逐字（账本红旗 #3）
//
// schemaVersion: 1 · notebookVersion: vietnam-war-1965-v1

export var notebook = {
  topicId: 'vietnam-war-1965',
  topicNameCn: '越南战争 1965',
  topicNameEn: 'The Vietnam War 1965',
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
    cn: `今天老师说我们要学 1965 年开始的越南战争（the Vietnam War）。
她说这是 APUSH 第八单元（冷战时代）里最难的一块，
而且是美国社会到今天都没吵出统一「对错」答案的一场仗。

我回家问我妈，她说她小时候在中国听到的是「抗美援越」那一边的故事——
跟美国课本讲的，几乎是同一场仗的两个完全不同的版本。
老师说这正是这一课最值得我们华裔同学想的地方。

她给了一张纸，上面写着这些名字：

Lyndon B. Johnson（约翰逊）、Richard Nixon（尼克松）、
Walter Cronkite（克朗凯特）、William Calley（卡利）

还有一串词：Gulf of Tonkin Resolution（东京湾决议）、containment（遏制）、
domino theory（多米诺骨牌理论）、escalation（逐步升级）、
the draft（征兵制）、Tet Offensive（春节攻势）、credibility gap（信任鸿沟）、
My Lai（美莱）、Kent State（肯特州立）、Vietnamization（越南化）。

我先记下来，等读完三个故事再回来对照这张单子，看我能不能解释每一个词。
三个故事分别是：一个华盛顿做政策的人、一个被征兵的美国士兵、
还有一个湄公河村庄里的少女。

老师说了一句我抄在笔记本第一页的话：
「学越战，最难也最重要的，不是记住谁对谁错——
是同时听见每一边的道理，再自己去掂量。」`,
    en: `Today my teacher told us we're studying the Vietnam War, which began in 1965.
She said it's one of the toughest parts of APUSH Period 8 — the Cold War era —
and that American society still hasn't agreed on a single "right or wrong" answer about it.

I went home and asked my mom. She said the story she heard growing up in China was
the "Resist America, Aid Vietnam" side — almost the same war, told as two completely
different versions compared to the American textbook.
Teacher said that's exactly what makes this lesson special for us heritage students.

She gave us a sheet with these names:

Lyndon B. Johnson, Richard Nixon, Walter Cronkite, William Calley

And these terms: Gulf of Tonkin Resolution, containment, domino theory,
escalation, the draft, Tet Offensive, credibility gap, My Lai, Kent State, Vietnamization.

I'm writing them down now. After I read the three stories — a Washington policymaker,
a drafted American soldier, and a Mekong village girl — I'll come back to this list
and see if I can explain each one.

Teacher said one thing I copied straight into my notebook:
"The hardest and most important thing about studying Vietnam isn't memorizing
who was right or wrong — it's hearing every side's reasons, and then weighing
it out for yourself."`,
    keyTerms: [
      { cn: '东京湾决议', en: 'Gulf of Tonkin Resolution' },
      { cn: '遏制', en: 'containment' },
      { cn: '多米诺骨牌理论', en: 'domino theory' },
      { cn: '逐步升级', en: 'escalation' },
      { cn: '征兵制 / 缓征', en: 'the draft / deferment' },
      { cn: '滚雷行动（大轰炸）', en: 'Operation Rolling Thunder' },
      { cn: '越共游击队', en: 'Viet Cong' },
      { cn: '春节攻势', en: 'Tet Offensive' },
      { cn: '信任鸿沟', en: 'credibility gap' },
      { cn: '美莱屠杀', en: 'My Lai Massacre' },
      { cn: '肯特州立枪击', en: 'Kent State shootings' },
      { cn: '越南化', en: 'Vietnamization' },
      { cn: '巴黎和平协定', en: 'Paris Peace Accords' },
      { cn: '反主流文化', en: 'counterculture' },
      { cn: '抗美援越（中国桥）', en: 'Resist America, Aid Vietnam (China bridge)' },
      { cn: '中苏分裂（中国桥）', en: 'Sino-Soviet split (China bridge)' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '林登·约翰逊（LBJ）',
        nameEn: 'Lyndon B. Johnson',
        ipa: '/ˈlɪndən ˈbeɪnz ˈdʒɒnsən/',
        roleCn: '任期 1963-1969；大规模升级越战的总统，靠东京湾决议加兵到五十多万，Tet 后宣布不竞选连任',
        roleEn: 'President 1963-1969; the president who massively escalated the war, used the Gulf of Tonkin Resolution to build forces past half a million, and after Tet announced he would not seek re-election',
        mustKnow: true,
        audioKey: 'lyndon-b-johnson',
      },
      {
        nameCn: '理查德·尼克松',
        nameEn: 'Richard Nixon',
        ipa: '/ˈrɪtʃərd ˈnɪksən/',
        roleCn: '任期 1969-1974；推「越南化」逐步撤美军，又把战争扩大到柬埔寨引爆 Kent State，1973 签巴黎协定',
        roleEn: 'President 1969-1974; pushed "Vietnamization" to withdraw U.S. troops, widened the war into Cambodia (triggering Kent State), and signed the Paris Peace Accords in 1973',
        mustKnow: true,
        audioKey: 'richard-nixon',
      },
      {
        nameCn: '沃尔特·克朗凯特',
        nameEn: 'Walter Cronkite',
        ipa: '/ˈwɔːltər ˈkrɒnkaɪt/',
        roleCn: '全美最受信任的电视主播；1968 年 2 月称战争陷入「僵局（stalemate）」，被视为公众民意的转折标志',
        roleEn: 'The most trusted TV anchor in America; in February 1968 he called the war a "stalemate," seen as the turning point in public opinion',
        mustKnow: true,
        audioKey: 'walter-cronkite',
      },
      {
        nameCn: '威廉·卡利',
        nameEn: 'William Calley',
        ipa: '/ˈwɪljəm ˈkæli/',
        roleCn: 'My Lai 屠杀中唯一被军事法庭定罪的军官（中尉，1971 年定罪，后获大幅减刑）',
        roleEn: 'The only officer convicted by court-martial for the My Lai Massacre (a lieutenant, convicted 1971, sentence later sharply reduced)',
        mustKnow: true,
        audioKey: 'william-calley',
      },
      {
        nameCn: '胡志明',
        nameEn: 'Ho Chi Minh',
        ipa: '/ˈhoʊ tʃiː ˈmɪn/',
        roleCn: '北越领袖、越南共产主义与独立运动的象征；1969 年去世，未能亲眼看到越南统一',
        roleEn: 'Leader of North Vietnam and symbol of Vietnamese communism and independence; died in 1969, before Vietnam was unified',
        mustKnow: true,
        audioKey: 'ho-chi-minh',
      },
      {
        nameCn: '被征兵的美国士兵',
        nameEn: 'the drafted American soldier',
        ipa: null,
        roleCn: '多为穷人和少数族裔家庭的青年；既被国家命令去打仗，自己也是这场战争的受害者之一',
        roleEn: 'Mostly young men from poor and minority families; ordered by the government to fight, yet also victims of the same war they were sent to wage',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '越南村民',
        nameEn: 'Vietnamese villagers',
        ipa: null,
        roleCn: '战火真正落在的人；估计平民死亡约 200 万（1995 官方估计）；最常被「冷战正义」和「美国反思」两套大叙事同时忽略',
        roleEn: 'The people who bore the real fire; estimated civilian deaths up to about 2 million (1995 official estimate); most often overlooked by both the "Cold War justice" and "American self-reflection" narratives',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'gulf-of-tonkin-resolution',
      termCn: '东京湾决议',
      termEn: 'Gulf of Tonkin Resolution',
      defCn: '1964 年，美国国会通过的一项授权，允许总统在东南亚「采取一切必要措施」——不用正式宣战就能派兵打仗。它是美国大规模介入越战的法律起点。',
      defEn: 'A 1964 act of Congress that let the president use military force in Southeast Asia without a formal declaration of war. It was the legal starting point for major U.S. involvement in Vietnam.',
      standardRef: ['APUSH KC-8.1.II', 'CA HSS 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n3'],
        xiaoweiNote: {
          cn: `华盛顿决策者那条故事线里专门讲到它。1964 年 8 月，美国军舰 USS Maddox 在东京湾
和北越交火（8 月 2 日，这次是真的发生了）。8 月 4 日，美方又报告「第二次袭击」——
但这第二次，后来证实**很可能根本没发生**。
基于这份有问题的情报，国会 8 月 7 日通过了《东京湾决议》，
授权总统在东南亚「采取一切必要措施」。

我把考点压成一句话：东京湾决议 = 一张**近乎空白的支票**。
意思是：总统不用正式宣战，就能在东南亚放手用兵。
整场越战，美国其实**从未正式宣战**。

考点提醒：AP 爱出「总统战争权力 vs 国会宣战权」这个角度。
这项决议直接导致 1973 年国会通过《战争权力法》来纠正它。

记忆锚：Tonkin（东京湾）= 那张「空白支票」的签发处。`,
          en: `The Washington policymaker's story line covers this. In August 1964, the U.S.
warship USS Maddox traded fire with North Vietnam in the Gulf of Tonkin (August 2 — this
one really happened). On August 4, the U.S. reported a "second attack" — but that second
one was later confirmed to have **very likely never happened**.
Based on that shaky intelligence, Congress passed the Gulf of Tonkin Resolution on
August 7, authorizing the president to "take all necessary measures" in Southeast Asia.

My one-line summary: the Gulf of Tonkin Resolution = a **near-blank check**.
That means the president could send troops and wage war in Southeast Asia without a
formal declaration of war. Across the entire Vietnam War, the U.S. **never formally
declared war**.

Exam tip: AP loves the angle of "presidential war powers vs. Congress's power to
declare war." This resolution led directly to the 1973 War Powers Act, which tried
to fix the problem.

Memory anchor: Tonkin = where that "blank check" was written.`,
        },
      },
    },

    {
      id: 'containment-domino-theory',
      termCn: '遏制与多米诺骨牌理论',
      termEn: 'Containment & the Domino Theory',
      defCn: '「遏制（containment）」是美国冷战时的大策略：阻止共产主义扩散到更多国家。「多米诺骨牌理论（domino theory）」是当时决策者的一个担忧：只要南越变成共产国家，旁边的老挝、柬埔寨、泰国就会像骨牌一样一个接一个倒下。',
      defEn: '"Containment" was America\'s Cold War strategy: stop communism from spreading to more countries. The "domino theory" was the fear that if South Vietnam fell to communism, neighboring countries like Laos, Cambodia, and Thailand would fall one after another — like a row of dominoes.',
      standardRef: ['APUSH KC-8.1.II', 'CA HSS 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n2'],
        xiaoweiNote: {
          cn: `华盛顿决策者那条故事线里解释了「我们为什么打」。两个词要一起记：

- **遏制（containment）**：美国冷战的核心策略——阻止共产主义向外扩散。
  从杜鲁门总统到约翰逊总统，历届政府都在用这套思路。
- **多米诺骨牌理论（domino theory）**：决策者担心，如果南越先倒下变成共产国家，
  旁边的老挝、柬埔寨、泰国也会一个接一个倒下，像一排推倒的骨牌。

考点提醒：越战不是「无缘无故」打的——决策者**真心相信**这套连锁反应。
但 AP 爱让你批判性地想一想：事后看，南越确实倒了，**东南亚却没有全部变红**。
这说明「骨牌」这个假设，可能从一开始就是错的。

常见误解：「美国打越南是为了越南本身」——不对。
美国是把越南放进**遏制 + 多米诺**这套全球冷战逻辑里，才去打的。

记忆锚：domino = 怕「倒一个，倒一片」；containment = 用墙「围住，别让它扩散」。`,
          en: `The Washington policymaker's story line makes clear "why we fought." Two terms go together:

- **Containment**: America's core Cold War strategy — stop communism from spreading.
  From President Truman all the way to President Johnson, every administration followed
  this same idea.
- **Domino theory**: the fear that if South Vietnam fell to communism, neighboring
  countries — Laos, Cambodia, Thailand — would fall one by one, like a row of dominoes
  getting knocked over.

Exam tip: the war wasn't fought for no reason — the policymaker **sincerely believed**
this chain reaction would happen. But AP loves asking you to think critically:
in hindsight, South Vietnam did fall, yet **Southeast Asia did not all go red**.
That suggests the "domino" idea may have been wrong from the start.

Common misconception: "America fought for Vietnam itself" — not quite.
America pulled Vietnam into the global Cold War logic of **containment + dominoes**.

Memory anchor: domino = "one falls, the whole row falls"; containment = a wall to
"hold communism in, don't let it spread."`,
        },
      },
    },

    {
      id: 'escalation-trap',
      termCn: '逐步升级的陷阱',
      termEn: 'The Trap of Escalation',
      defCn: '「逐步升级（escalation）」指的是美国一点一点地往越南增派军队和扩大战争规模。没有哪个人做了一个「去打大仗」的决定——而是一连串「再加一点点」，最后加成了一场谁也停不下来的战争。',
      defEn: '"Escalation" means the U.S. gradually sent more and more troops and expanded the war step by step. No single person decided to "fight a big war" — instead, one small decision after another added up to a war no one could stop.',
      standardRef: ['APUSH KC-8.1.II', 'AP LEQ rubric (causation)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n4'],
        xiaoweiNote: {
          cn: `华盛顿决策者那条故事线里有 1965 年 3 月两件大事：
① 3 月 2 日，**滚雷行动（Operation Rolling Thunder）**大轰炸开始。
② 3 月 8 日，3500 名海军陆战队员在岘港（Da Nang）登陆，是首批地面战斗部队。

然后兵力一路加码——1965 年几万人，到 **1968 年超过五十万人**。

**escalation（逐步升级）= 一个陷阱**：决策者做的不是一个大决定，
而是一连串小决定——每一步单看，都觉得「比撤出来划算」。
可所有小步加起来，就是一场谁也停不下来的大战。

考点提醒：越战的卷入是**渐进的**，不是一下子就派大军。
常见误解：「美国一打就大规模派兵」——不对。
正确顺序是：先派顾问 → 几万人 → 五十多万，每一步看起来都合理。

记忆锚：escalation = 一级一级往上爬的楼梯，**爬上去容易，回头难**。`,
          en: `The Washington policymaker's story line covers two big events in March 1965:
① On March 2, the massive **Operation Rolling Thunder** bombing campaign began.
② On March 8, 3,500 Marines landed at Da Nang — the first ground combat troops.

Then U.S. forces kept growing — from tens of thousands in 1965 to **over half a million
by 1968**.

**Escalation = a trap**: the policymaker didn't make one big "let's go to war" decision.
Instead, he made a string of small decisions — each one looking "cheaper than pulling out."
But all those small steps added up to a massive war that nobody could stop.

Exam tip: U.S. involvement was **gradual**, not a single large deployment.
Common misconception: "America sent a huge army from the start" — wrong.
The real sequence: military advisers → tens of thousands → over half a million,
each step seeming reasonable at the time.

Memory anchor: escalation = a staircase climbed one step at a time —
**easy to go up, hard to come back down**.`,
        },
      },
    },

    {
      id: 'tet-offensive-credibility-gap',
      termCn: '春节攻势与信任鸿沟',
      termEn: 'Tet Offensive & the Credibility Gap',
      defCn: '「春节攻势（Tet Offensive）」是 1968 年 1 月 30 日北越和越共在全境突然发动的大规模进攻。「信任鸿沟（credibility gap）」指的是政府一直说「我们在赢」，但普通人从电视里看到的现实和官方说法对不上——这道裂缝就叫信任鸿沟。',
      defEn: 'The "Tet Offensive" was the massive surprise attack launched by North Vietnam and the Viet Cong across the entire country on January 30, 1968. The "credibility gap" is the mismatch between what the government kept saying ("we are winning") and what ordinary Americans actually saw on TV — that gap became impossible to ignore after Tet.',
      standardRef: ['APUSH KC-8.1.II', 'APUSH 8.9', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n6', 'viet-policymaker-n7', 'viet-soldier-n6'],
        xiaoweiNote: {
          cn: `三条故事线都碰到了 Tet，但华盛顿决策者那条故事线里讲得最透。
1968 年 1 月 30 日，越南农历**春节（Tet）**那天，北越正规军和 Viet Cong（越共游击队）
在全境发动突袭，甚至一度冲进了西贡的美国大使馆。

这里有一个 AP **必考的反转**：
- **军事上**：Tet 最后被击退，北越损失惨重 → 算「军事上美国赢了」。
- **政治/心理上**：美国人在电视上看到敌人冲进大使馆，跟官方多年来说的
  「我们正在赢」**对不上了** → 美国民意彻底翻转。

这道裂缝，有个专用名词：**credibility gap（信任鸿沟）**。
意思是：政府说的，和人民亲眼看到的，对不上。
1968 年 2 月，最受美国人信任的电视主播 Walter Cronkite 说出了「这场战争已陷入僵局」，
约翰逊总统不久后宣布不再竞选连任。

考点关键句：Tet 在战场上是北越的失败，在美国国内却成了战争走向终结的转折点——
**胜负不只在战场上决定，也在人心和电视屏幕上决定**。`,
          en: `All three story lines touch Tet, but the Washington policymaker's line covers it
most deeply. On January 30, 1968 — Vietnamese Lunar New Year, **Tet** — North Vietnamese
regular troops and Viet Cong guerrillas launched surprise attacks across the entire country,
briefly breaking into the U.S. embassy in Saigon.

Here's an AP **must-know reversal**:
- **Militarily**: Tet was beaten back, North Vietnam took heavy losses → "America won militarily."
- **Politically/psychologically**: Americans saw the enemy inside the embassy on TV, which
  **no longer matched** years of the official "we are winning" → U.S. public opinion flipped.

That mismatch has a name: the **credibility gap** — the gap between what the government says
and what people actually see. In February 1968, America's most trusted TV anchor, Walter
Cronkite, said the war had reached a "stalemate." President Johnson soon announced he would
not run for re-election.

Key exam sentence: Tet was a battlefield failure for North Vietnam, but it became the turning
point toward the war's end inside the U.S. — **winning isn't decided only on the battlefield;
it's also decided in people's minds and on TV screens**.`,
        },
      },
    },

    {
      id: 'the-draft-inequality',
      termCn: '征兵制的不公',
      termEn: 'The Draft and Its Inequality',
      defCn: '「征兵制（the draft）」是美国政府强制要求年轻男性服兵役的制度。1964-1973 年间约 220 万人被征召。听起来好像所有人都会被抽到，但实际上很不公平——能上大学的人可以申请「缓征（deferment）」，合法地推迟当兵，穷人和少数族裔往往没这个机会。',
      defEn: 'The "draft" (also called the Selective Service) was the system that required young men to serve in the military. About 2.2 million men were called up between 1964 and 1973. It sounds like everyone had an equal chance of being picked, but it was unfair — those who could afford college got "deferments" that legally delayed their service, while poor and minority men often could not.',
      standardRef: ['APUSH 8.9', 'APUSH KC-8.2.I', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'drafted-soldier-mediator',
        nodeIds: ['viet-soldier-n1', 'viet-soldier-n2'],
        xiaoweiNote: {
          cn: `被征兵的士兵那条故事线里，前两节就是讲这个。1964 到 1973 年间，
约 **220 万**美国男性被 **draft（征兵）**征召入伍。
听上去像「公平地抽所有年轻人」，可它一点都不公平。

关键就在 **deferment（缓征）**这个机制：
能上大学的人可以申请缓征，合法地把当兵时间往后推，很多人就这么一直推到不用去了。
能推的，多是富裕家庭的孩子；推不了的，是穷人家和少数族裔的孩子——
他们承担了**远超比例的伤亡**。

考点提醒：征兵的阶级与种族不公，是**反战运动最核心的引线之一**。
别单独看这件事——它和同期的**民权运动**、**青年反主流文化（counterculture）**
拧在一起，共同构成了 1960 年代那片社会大动荡。
AP 的 DBQ 爱考「1960 年代各场社会运动如何相互激荡」。

常见误解：「征兵公平地抽所有人」——不对。
正确理解：富人靠缓征大量躲过，穷人和少数族裔扛下了不成比例的代价。

记忆锚：deferment = 有钱有学上 = 一张「合法的免战金牌」。`,
          en: `The drafted soldier's story line opens with this topic. Between 1964 and 1973,
about **2.2 million** American men were called up by the **draft**.
It sounds like "a fair lottery for all young men" — but it really wasn't.

The key is the **deferment** system:
if you could go to college, you could get a deferment — a legal delay to your service.
Many people kept getting deferment after deferment until the war ended and they never had
to go. Those who could do this were mostly kids from wealthy families.
Those who couldn't were the poor and minorities — they bore a **way-more-than-fair share**
of the casualties.

Exam tip: the class and racial unfairness of the draft was **one of the main sparks of
the anti-war movement**. Don't look at it alone — it was tied together with the
**civil rights movement** and the **youth counterculture** into the big wave of 1960s upheaval.
AP DBQs love the question "how did the 1960s social movements fuel each other?"

Common misconception: "the draft picked everyone fairly" — not true.
The reality: the wealthy escaped through deferments; the poor and minorities paid
a disproportionate price.

Memory anchor: deferment = money + college = a "legal way out of the war."`,
        },
      },
    },

    {
      id: 'my-lai-massacre',
      termCn: '美莱屠杀',
      termEn: 'The My Lai Massacre',
      defCn: '1968 年 3 月 16 日，美军一支部队（Charlie 连）在越南一个叫 My Lai（美莱）的村子，在几个小时内杀死了数百名手无寸铁的村民。这件事被掩盖了一年多，1969 年才曝光，震惊了整个美国。',
      defEn: 'On March 16, 1968, a U.S. Army unit (Charlie Company) killed hundreds of unarmed villagers in the village of My Lai, Vietnam, within just a few hours. The incident was covered up for over a year and only exposed in 1969, shocking the entire United States.',
      standardRef: ['APUSH 8.9', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'villager-and-draftee-receiving-end',
        nodeIds: ['viet-villager-n6', 'viet-soldier-n7', 'viet-policymaker-n8'],
        xiaoweiNote: {
          cn: `三条故事线都讲到了它，但越南村庄少女那条故事线里最令人揪心。
1968 年 3 月 16 日，在一个叫 **My Lai（美莱）**的村子，
美军一支部队（Charlie 连）在几个小时里杀死了数百名手无寸铁的村民——
估计**约 347 到 504 人**，大多是老人、妇女和孩子。
那天村里没有打仗，没有 Viet Cong 在场。
事件被**掩盖了一年多**，1969 年才被媒体曝光。

两个考点别写错：
① **数字用区间「约 347-504」**，不同来源说法不同，别写死一个单一数字。
② **追责**：1971 年只有 **Calley 中尉一人**被定罪，后来还大幅减刑。

考点提醒：My Lai 逼出的问题，远比「一个坏苹果」复杂。
想一想：在一场用 **body count（敌方阵亡数）**来衡量胜负、
又分不清谁是敌人的战争里，这种事到底有多普遍？
责任在开枪的士兵，还是在设计这种打法的整套系统？

常见误解：「My Lai 是孤立的、立刻被惩处的个案」——不对。
正确理解：掩盖超过一年、只一人定罪还减刑——
它问的是整个制度的责任，不只是一个人的责任。`,
          en: `All three story lines cover it, but the Vietnamese village girl's line hits hardest.
On March 16, 1968, in a village called **My Lai**, a U.S. unit (Charlie Company) killed
hundreds of unarmed villagers in just a few hours — an estimated **347 to 504**, mostly
elderly people, women, and children.
There was no battle that day. There were no Viet Cong fighters.
The incident was **covered up for over a year** and only exposed by the media in 1969.

Two exam facts to get right:
① **Use the range "about 347-504"** — different sources give different numbers; don't write
   a single exact figure.
② **Accountability**: in 1971 only **Lieutenant Calley** was convicted, and his sentence
   was later sharply reduced.

Exam tip: My Lai raised questions far more complex than "one bad apple."
Think about it: in a war measured by **body count** (enemy killed) where soldiers couldn't
always tell who the enemy was — how common was this kind of thing?
Does responsibility rest on the soldier who pulled the trigger, or on the entire system
that designed this way of fighting?

Common misconception: "My Lai was an isolated case that was punished right away" — wrong.
The reality: it was covered up for over a year, only one person was convicted (and his
sentence was later sharply reduced), and it raises questions about the whole system's
responsibility, not just one soldier's.`,
        },
      },
    },

    {
      id: 'antiwar-movement-1960s',
      termCn: '反战运动与 1960 年代的动荡',
      termEn: 'The Anti-War Movement & 1960s Upheaval',
      defCn: '1960 年代，越来越多美国人反对越战，尤其是大学生。他们烧征兵卡、上街游行、占领校舍。这场反战运动和同期的民权运动、青年反主流文化一起，构成了 1960 年代美国社会的大动荡。',
      defEn: 'In the 1960s, growing numbers of Americans — especially college students — opposed the Vietnam War. They burned draft cards, marched in the streets, and occupied campus buildings. This anti-war movement, together with the civil rights movement and the youth counterculture, made up the major social upheaval of 1960s America.',
      standardRef: ['APUSH 8.9', 'APUSH KC-8.2.I', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'drafted-soldier-mediator', nodeId: 'viet-soldier-n2', context: '征兵不公点燃校园反战，与民权运动和 counterculture 拧成 1960s 整片动荡' },
          { lens: 'drafted-soldier-mediator', nodeId: 'viet-soldier-n8', context: '反战的人觉得士兵是帮凶 / 支持战争的「沉默的大多数」也真诚相信不能背叛前线流血的孩子' },
        ],
      },
      standaloneText: {
        cn: `**反战运动（the anti-war movement）**是这门课里的重要考点，
士兵那条故事线里有提到，这里单独把它讲清楚。

**反战这一边**：1965 到 1971 年，大学校园成了反战的中心。
学生们烧征兵卡、占领校舍、大规模游行、组织校园辩论会（teach-in）。
征兵的不公——穷人和少数族裔扛下了远超比例的伤亡——是这场运动最核心的引线。
它和同期的**民权运动**、**青年反主流文化（counterculture）**拧在一起，
共同的底色是：「不信任权威」+「追问美国理想与现实之间的差距」。

**别忘了另一边——「沉默的大多数」（the silent majority）**：
很多普通美国人**支持**战争。
① 他们真诚地相信「南越一倒，东南亚就会全部变红」。
② 他们真诚地觉得「半路撤出就是背叛在前线流血的孩子」。
尼克松专门用「沉默的大多数」这个词来称呼他们。
**他们不是稻草人——他们的理由，也有值得理解的一面。**
AP 考试要的就是：同时听见支持和反对两边的真实声音。

**Kent State（肯特州立）**把这片动荡推到了顶点：
1970 年，尼克松把战争扩大到柬埔寨，全国校园爆发抗议。
5 月 4 日，俄亥俄州国民警卫队在 Kent State 大学向学生开枪，
13 秒内打死 4 人、打伤 9 人。
战争的暴力，回到了美国自己的校园。

考点关键句：1960 年代的反战运动、民权运动、counterculture **相互激荡**，
不是各自孤立的。同时，美国社会在「反战」和「支持战争」两边被撕成了两半。`,
        en: `The **anti-war movement** is a key exam topic. The drafted soldier's story line
mentions it — here it gets its own full explanation.

**The anti-war side**: from 1965 to 1971, college campuses became the heart of the movement.
Students burned draft cards, occupied buildings, marched in massive protests, and held
teach-ins (campus debate events).
The unfairness of the draft — the poor and minorities paying a far higher share of the
casualties — was the main spark.
This movement was tangled up with the **civil rights movement** and the **youth counterculture**,
all sharing the same two core feelings: "distrust of authority" and "the gap between American
ideals and the real America."

**Don't forget the other side — the "silent majority"**:
many ordinary Americans **supported** the war.
① They sincerely believed "if South Vietnam falls, all of Southeast Asia goes communist."
② They sincerely felt "pulling out halfway would betray the kids bleeding at the front."
Nixon used the phrase "silent majority" specifically for them.
**They aren't strawmen — their reasons have a side worth understanding.**
That's exactly what AP wants: hear both sides as real voices, not just one.

**Kent State** pushed the upheaval to its peak:
in 1970, Nixon widened the war into Cambodia, setting off nationwide campus protests.
On May 4, Ohio National Guard soldiers fired on students at Kent State University,
killing 4 and wounding 9 in just 13 seconds.
The violence of the war had come back to American soil, to American campuses.

Key exam sentence: the 1960s anti-war movement, civil rights movement, and counterculture
**fueled each other** — they weren't separate, isolated events. At the same time, American
society itself was torn in two: "anti-war" vs. "pro-war."`,
      },
      xiaoweiNote: {
        cn: `老师说 AP DBQ 几乎必考「1960 年代各社会运动如何相互激荡」这个角度。
我的记忆锚：**反战 + 民权 + counterculture = 1960s 的一张大网**，共同引线是「征兵不公」。

高分写法提示：写反战运动的时候，**别忘了也写「沉默的大多数」那一边**。
能同时呈现支持和反对两边的真实理由，正是 AP 评分最看重的 complexity（复杂性）。
Kent State（4 人死、9 人伤）是「战争暴力回到美国本土」的标志性事件，记住年份：1970 年。`,
        en: `Teacher said AP DBQs almost always include "how the 1960s social movements fueled
each other."
My memory anchor: **anti-war + civil rights + counterculture = one big 1960s web**,
connected by the shared fuse of "the unfair draft."

High-scoring tip: when you write about the anti-war movement, **don't forget to include
the "silent majority" side**. Showing both pro-war and anti-war logic as real is exactly
the complexity AP graders reward.
Kent State (4 dead, 9 wounded) marks the moment when "the violence of the war came home
to the U.S." — remember the year: 1970.`,
      },
    },

    {
      id: 'vietnamization-paris-fall-of-saigon',
      termCn: '越南化、巴黎协定与西贡陷落',
      termEn: 'Vietnamization, Paris Accords & the Fall of Saigon',
      defCn: '「越南化（Vietnamization）」是尼克松的策略：逐步把美军撤出，让南越军队自己接手战争。「巴黎和平协定（Paris Peace Accords）」是 1973 年签的停战协议，美军撤走了。但协定允许北越军队留在南越，和平没能撑住。1975 年 4 月 30 日，西贡陷落，越南统一，战争才真正结束。',
      defEn: '"Vietnamization" was Nixon\'s plan: gradually pull U.S. troops out and let the South Vietnamese army take over the fighting. The "Paris Peace Accords" (1973) was the ceasefire agreement that brought U.S. troops home. But it let North Vietnamese troops stay in the South — and peace didn\'t last. On April 30, 1975, Saigon fell, Vietnam was unified, and the war truly ended.',
      standardRef: ['APUSH KC-8.1.II', 'CA HSS 11.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n9', 'viet-villager-n8'],
        xiaoweiNote: {
          cn: `华盛顿决策者那条故事线给了「战争的账单」，越南村庄少女那条故事线从地面上看了战争的结束。
三个名词按时间顺序串起来：

① **越南化（Vietnamization）**：尼克松的策略——逐步撤出美军，把仗交给南越军队（ARVN）接手。
   同时，他在 1970 年 4 月底把战争扩大到了柬埔寨。
② **巴黎和平协定（Paris Peace Accords）**：1973 年 1 月签署。
   美军在 60 天内撤出约 **2.37 万人**。
   但协定**允许北越军队继续留在南越境内**——和平架在一根随时会断的线上。
③ **西贡陷落（Fall of Saigon）**：美军撤出两年后，1975 年 4 月 30 日，
   北越坦克冲进西贡，南越政权垮台，越南统一。
   大使馆屋顶上直升机撤走最后一批人的画面，成了这场战争的句点。

考点提醒：「1973 签了协定，战争就结束了」——这是常见误解。
正确的是：协定允许北越军队留在南越，和平没撑住，**1975 年西贡陷落才是真正的终点**。

账单（记量级就够，不必记精确数字）：
约 **5.82 万**美军阵亡；越南军民死亡以百万计
（1995 官方估计平民死亡**多达约 200 万**，这是估计数，来源差别大）。

记忆锚：Vietnamization = 「把仗还给越南人」；1973 撤军 ≠ 战争结束，1975 才是真正终点。`,
          en: `The Washington policymaker's story line gives "the war's bill," and the Vietnamese
village girl's story line sees the war end from the ground. Three terms in time order:

① **Vietnamization**: Nixon's strategy — gradually withdraw U.S. troops and hand the fighting
   to the South Vietnamese army (ARVN). At the same time, he expanded the war into Cambodia
   in late April 1970.
② **Paris Peace Accords**: signed January 1973. The U.S. pulled about **23,700** troops out
   within 60 days. But the accords **let North Vietnamese troops stay inside South Vietnam** —
   peace was hanging by a thread.
③ **Fall of Saigon**: two years after the U.S. withdrawal, on April 30, 1975, North Vietnamese
   tanks rolled into Saigon. South Vietnam collapsed. Vietnam was unified. The image of
   helicopters lifting the last people off the embassy roof became the war's final moment.

Exam tip: "The 1973 accords ended the war" — that's a common misconception.
The reality: the accords let North Vietnam's troops stay in the South, peace didn't hold,
and the **1975 Fall of Saigon was the true endpoint**.

The bill (know the scale, not exact numbers):
about **58,000** U.S. troops killed; Vietnamese military and civilian deaths in the millions
(1995 official estimate: **up to about 2 million** civilians — this is an estimate, and
sources vary widely).

Memory anchor: Vietnamization = "hand the war back to the Vietnamese"; 1973 withdrawal ≠ end
of war — 1975 is.`,
        },
      },
    },

    {
      id: 'guerrilla-war-body-count',
      termCn: '游击战与 body count',
      termEn: 'Guerrilla War & the Body Count',
      defCn: '「游击战（guerrilla war）」是一种躲在人群和地形里打的战术，没有固定前线，敌人平时看起来像普通平民。「body count」是美军用来衡量战果的方式——数敌方阵亡了多少人。但在一场分不清谁是敌人的战争里，这个数字往往失真，平民也成了受害者。',
      defEn: '"Guerrilla war" is a form of fighting where fighters blend into the population and terrain — no fixed front line, and the enemy can look like an ordinary civilian. The "body count" was the U.S. military\'s way of measuring success: counting how many enemies were killed. But in a war where it\'s hard to tell who the enemy is, those numbers were often wrong, and civilians became victims.',
      standardRef: ['APUSH KC-8.1.II', 'AP LEQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n5', 'viet-soldier-n4'],
        xiaoweiNote: {
          cn: `华盛顿决策者那条故事线和被征兵的士兵那条故事线，都讲到了这场仗为什么这么难打。

越南是丛林、山地、湄公河三角洲的水网地形——非常适合**游击战（guerrilla war）**。
敌人 **Viet Cong（越共游击队）**白天是田里的农民，晚上是拿枪的战士，藏在村庄和地道里。
美军拥有压倒性的火力、飞机、坦克，可这些火力对着一个**「看不见的敌人」**，
往往落在分不清敌友的村庄上，打到的是无辜平民。

美军用 **body count（敌方阵亡数）**来衡量打得好不好。问题在于：
在一场分不清谁是敌人的战争里，**「数字上赢」和「真正赢」可能是两回事**。
body count 越报越高，平民伤亡也越来越多，Hanoi（河内）的北越政府却始终没「撑不住」。

考点关键句：用 body count 衡量胜负 + 没有前线的游击战 = 大量平民伤亡 + 数据失真。
这是 My Lai 那类悲剧的土壤之一，也是为什么有人说美军「赢了每场战斗，却输了整场战争」。

记忆锚：body count = 「用数字来证明在赢」的陷阱；看不见的敌人 = 没有前线的仗。`,
          en: `The Washington policymaker's story line and the drafted soldier's story line both
show why this war was so hard.

Vietnam's terrain — jungle, mountains, and the water-filled Mekong Delta — was perfect for
**guerrilla war**. The enemy, the **Viet Cong**, were farmers by day and fighters by night,
hidden in villages and underground tunnels. The U.S. had overwhelming firepower, aircraft,
and tanks — but firing at an **"invisible enemy"** often meant the fire fell on villages
where friend and foe couldn't be told apart, killing innocent civilians.

The U.S. military measured success by the **body count** (how many enemies were killed).
The problem: in a war where you can't always tell who the enemy is,
**"winning on paper" and truly winning can be two very different things**.
The body count kept climbing, civilian casualties kept climbing too, yet Hanoi never
"broke."

Key exam sentence: measuring success by body count + a front-less guerrilla war =
heavy civilian casualties + distorted data. This is part of what made tragedies like My Lai
possible, and part of why some say the U.S. "won every battle yet lost the war."

Memory anchor: body count = the trap of "proving you're winning with numbers";
invisible enemy = a war with no front line.`,
        },
      },
    },

    {
      id: 'china-bridge-aid-and-split',
      termCn: '中国桥：抗美援越与中苏分裂',
      termEn: 'China Bridge: Aid to Vietnam & the Sino-Soviet Split',
      defCn: '这张卡是给华裔同学补的「另一面」。1965-1971 年间，中国向北越派出超过 32 万人帮助修路桥、运物资、打防空。这叫「抗美援越」。同期中国和苏联虽然都是社会主义国家，却在 1960 年代公开决裂，这叫「中苏分裂（Sino-Soviet split）」。两件事放在一起，能看到越战背后复杂的大国博弈。',
      defEn: 'This card gives heritage students "the other side of the story." From 1965-1971, China sent over 320,000 troops to North Vietnam to repair roads and bridges, transport supplies, and operate anti-aircraft guns — this was called "Resist America, Aid Vietnam." At the same time, China and the Soviet Union, both communist countries, openly split apart in the 1960s — this is called the "Sino-Soviet split." Together, these two facts reveal the complex great-power competition behind the Vietnam War.',
      standardRef: ['APUSH KC-8.1 (Cold War in Asia)', 'CA HSS 11.9'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'villager-and-draftee-receiving-end',
        nodeIds: ['viet-villager-n9', 'viet-soldier-n9'],
        xiaoweiNote: {
          cn: `这张卡是专门给我们华裔同学补的内容。
越南村庄少女和被征兵士兵那两条故事线里，都讲到了中国。
我妈记忆里的「抗美援越」，和美国课本里的越战，其实是**同一场仗的两面**。

**抗美援越**：1965-1971 年，中国向北越派出超过 **32 万人次**的
工程、防空、铁路部队，帮北越修被美军炸毁的路桥、运物资。
防空部队还参与了击落美机的作战。
背后有中国和苏联两个大国撑着，是北越敢跟美国长期耗下去的底气之一。

**中苏分裂（Sino-Soviet split）**——这一点最容易被简化掉：
「社会主义阵营一条心」这句话并不是真的。
1960 年代，中国和苏联严重分歧、公开决裂，
北越夹在北京和莫斯科中间，小心地左右平衡。
1960 年代末，中国逐步缩减援助，北越更多地转向苏联。
所以**「援越」背后，是两个大国各打各的算盘，不是一团和气**。

**同时性**：就在中国援越的同时，中国自己陷进了**文化大革命（文革，1966-1976）**的十年动荡。
地球上同时有三场动荡——美国（越战撕裂）、中国（文革）、越南（夹在炮火中间）——
同一场冷战风暴，吹向三个不同的地方。

提醒：这张卡**不评判**中国援越、文革、美国参战哪个对哪个错，
只是把同一段时间里中国那一面也摆出来，让你看见更完整的图。
记忆锚：抗美援越 = 越战的「中国一面」；中苏分裂 = 别以为社会主义阵营是一条心。`,
          en: `This card is extra content for us heritage students.
Both the Vietnamese village girl's and the drafted soldier's story lines touch on China.
The "Resist America, Aid Vietnam" in my mom's memory and the Vietnam War in our American
textbook are really **two sides of the same war**.

**Resist America, Aid Vietnam**: from 1965 to 1971, China sent over **320,000** engineering,
anti-aircraft, and railway troops to North Vietnam. They repaired bombed-out roads and bridges,
shipped supplies, and anti-aircraft units helped shoot down U.S. planes.
Having China and the Soviet Union at its back was one reason North Vietnam could keep fighting
America for so many years.

**The Sino-Soviet split** — this is the part most easily missed:
"the socialist camp was united" is not really true.
In the 1960s, China and the Soviet Union disagreed sharply and broke apart openly.
North Vietnam was caught in the middle, carefully balancing between Beijing and Moscow.
In the late 1960s, China pulled back its aid, and the North leaned more toward the USSR.
So **behind "aiding Vietnam" was each great power playing its own game — not one big
happy family**.

**Three upheavals at once**: while China was helping North Vietnam, China itself was also
going through the **Cultural Revolution (1966-1976)** — a ten-year period of massive social
and political turmoil. So at the same time: America was being torn apart by the Vietnam War,
China was in the chaos of the Cultural Revolution, and Vietnam was caught in the crossfire.
One Cold War storm, blowing in three different directions.

Note: this card **doesn't judge** whether China's aid, the Cultural Revolution, or America's
involvement was right or wrong — it just shows you the China side of the same period, so you
can see the fuller picture.
Memory anchor: Resist America, Aid Vietnam = "the China side" of the war;
Sino-Soviet split = the two biggest communist countries were NOT united.`,
        },
      },
    },

    {
      id: 'multiperspective-rule-zero',
      termCn: '多视角与不下结论',
      termEn: 'Multiple Perspectives & Drawing No Verdict',
      defCn: '这张卡讲的不是一个知识点，而是一种思考方法：好的历史分析，不是选一边站，而是同时理解每一边的真实理由，再凭证据做出自己的判断。这是 AP 历史考试最看重的能力，叫做「复杂性（complexity）」。',
      defEn: 'This card is not about a single fact — it\'s about a way of thinking. Good historical analysis doesn\'t mean picking a side. It means understanding every side\'s real reasons, then making your own judgment based on evidence. This is the skill AP history exams call "complexity" and reward most highly.',
      standardRef: ['AP DBQ rubric (complexity)', 'APUSH historical thinking'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'villager-and-draftee-receiving-end',
        nodeIds: ['viet-policymaker-n10', 'viet-soldier-n10', 'viet-villager-n10'],
        xiaoweiNote: {
          cn: `这张卡讲的不是一个「知识点」，而是一个**方法**——也是这门课最核心的东西。
三条故事线里，结尾那一节都让你掂量「同一个人/同一个位置的两面」，
而且每条线都明确说：**这门课不替你下「战争对还是错」的结论。**

为什么不给结论？因为越战是美国社会**到今天都没吵出统一答案**的一场仗。
历史学家至少分三派：
- **正统派**：这是一场打不赢、也不该打的「错误的战争」。
- **修正派**：美国是打法错了，如果打法不同，本可以打赢。
- **越南视角**（越来越受重视）：这首先是**越南人自己的战争和苦难**，
  不只是「美国人的越战创伤」。这门课把越南村庄少女作为核心视角，正是为了强调这一点。

考点关键句：好的 DBQ/LEQ **不是选一边站队**，而是同时呈现多方的真实逻辑，
承认证据之间有张力，再做有理有据的判断。这就是这门课在训练的能力——
**先听见每一边的道理，再自己去掂量。**

记忆锚：多视角 + 不下最终对错结论 = AP 最看重的 complexity（复杂性）。`,
          en: `This card isn't about a single "fact" — it's about a **method**. It's the most
important thing this whole lesson is trying to teach.
Each story line ends with a section that asks you to weigh "two sides of the same
person or position," and each one says clearly: **this lesson does not decide for you
whether the war was right or wrong.**

Why no verdict? Because Vietnam is a war American society **still hasn't agreed on today**.
Historians at least divide into three camps:
- **Orthodox**: a "wrong war" that couldn't be won and shouldn't have been fought.
- **Revisionist**: America fought it wrong, but could have won with a different approach.
- **Vietnamese-centered history** (increasingly important): this was first of all **the
  Vietnamese people's own war and suffering**, not just "America's trauma." This lesson
  centers the Vietnamese village girl's perspective exactly to honor this shift.

Key exam sentence: a good DBQ/LEQ **doesn't pick a binary side**. It shows the real logic of
multiple sides at once, acknowledges that the evidence is complicated, and then makes a
reasoned judgment. That's the exact skill this lesson trains —
**hear every side's reasoning first, then weigh it yourself.**

Memory anchor: multiple perspectives + no final verdict = the "complexity" AP rewards most.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `决策者真心相信「多米诺骨牌理论」——南越一旦倒下，东南亚会一个接一个变红。
事后看，南越确实倒了，可东南亚并没有全部变红。

一个被人真诚相信、却可能从一开始就是错的理论，为什么能把一个国家拖进十年战争？
我们今天该怎么区分「真诚的信念」和「正确的判断」？
请用这一课里至少两条具体的事件或决定来支持你的看法。`,
      en: `The policymaker sincerely believed the "domino theory" — that if South Vietnam fell,
Southeast Asia would go communist one country at a time.
In hindsight, South Vietnam did fall, yet Southeast Asia did not all go red.

Why can a theory that is sincerely believed — but possibly wrong from the start — drag a
whole nation into ten years of war?
How should we tell apart "sincere belief" from "correct judgment" today?
Back up your thinking with at least two specific events or decisions from this lesson.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- 「真诚但可能错」的证据：多米诺骨牌理论（南越倒了，但东南亚没全红）、
  东京湾决议建在很可能不实的情报上、逐步升级（escalation）的每一步看似合理却加成大战。
- 别忘了写决策者「不是嗜血的人、夜里睡不着」的那一面——他真诚，但真诚不等于判断对。
高分写法：先承认这套逻辑有它自洽的地方，再说清它在哪里、为什么走偏了。`,
      hintEn: `Hint: there's no single correct answer — AP graders look at your ability to **use evidence**,
not which side you choose.
- Evidence for "sincere but possibly wrong": the domino theory (South Vietnam fell but the
  region didn't all go communist), the Gulf of Tonkin Resolution built on likely-false
  intelligence, and escalation where each "reasonable" small step added up to a massive war.
- Don't forget the policymaker's human side — "not bloodthirsty, losing sleep at night."
  He was sincere, but sincerity doesn't mean his judgment was correct.
High-scoring move: first acknowledge that his logic made internal sense, then explain where
and why it went wrong.`,
      conceptsActivated: ['containment-domino-theory', 'gulf-of-tonkin-resolution', 'escalation-trap'],
    },
    {
      id: 'q2',
      cn: `一个 19 岁、被征兵抽中、被命令在分不清敌友的村庄里开枪的美国士兵——
他既是执行政策的人，也是这套政策的受害者之一。
在他身后，My Lai 屠杀把一个最难的问题推到了所有人面前。

我们该怎么看待这个士兵手上的责任？
「我是被命令的」能解释很多，但能不能洗掉全部责任？
如果你是 AP 老师，要出一道题考这个问题，你会怎么问——
又想让学生看见什么？`,
      en: `A 19-year-old American soldier — drafted, ordered to fire in villages where he can't
tell friend from foe — is both the person carrying out policy and a victim of that same policy.
Behind him, the My Lai Massacre pushed one of the hardest questions in front of everyone.

How should we think about what responsibility this soldier carries?
"I was following orders" explains a lot — but can it erase all responsibility?
If you were an AP teacher writing a question on this,
how would you phrase it, and what would you want students to see?`,
      hintCn: `提示：好的 DBQ 题逼学生**同时看见两面**，而不是二选一。
- 一面：他是受害者——征兵令强迫他去，制定政策的人离前线几千里，他在恐惧和命令下开枪。
- 另一面：扣扳机的是他自己的手指，被波及的村民不会因为「他也是受害者」就少流一滴血。
想一想：责任到底该怎么在「被迫的个人」和「设计这种打法的整套系统」之间分配？
这正是 AP 最看重的 complexity（复杂性）。`,
      hintEn: `Hint: a good DBQ forces students to **hold both faces at once** — not just pick one.
- One face: he's a victim — a draft notice forced him to go, the policymakers were thousands of
  miles away, and he fired under fear and orders.
- The other face: the finger on the trigger was his own. The villagers caught in the fire don't
  bleed one drop less just because "he was a victim too."
Think: how should responsibility be divided between "the individual who was forced" and "the
whole system that designed this way of fighting"?
That tension is exactly the complexity AP wants to see.`,
      conceptsActivated: ['the-draft-inequality', 'my-lai-massacre', 'multiperspective-rule-zero'],
    },
    {
      id: 'q3',
      cn: `这一课里，越战常被讲成「美国的故事」——士兵的牺牲、国内的撕裂、Tet 与信任鸿沟。
但承受战火最重的，是越南的村民（估计平民死亡约 200 万）。
同时，对我们华裔同学来说，家里长辈记忆里还有「抗美援越」那一面。

当大国在别人的家园上打一场关于「主义」的战争，
最没有话语权的那群人的声音，为什么最容易被两套大叙事同时忽略？
把美国、中国、越南三方放在一起看，你觉得「同一场战争」，
因为站的位置不同，会变成几个完全不一样的故事？`,
      en: `In this lesson, the Vietnam War is often told as "America's story" — the soldiers'
sacrifice, the country torn apart, Tet and the credibility gap. But the people who bore the
heaviest fire were Vietnamese villagers (an estimated ~2 million civilian deaths). And for us
heritage students, our elders' memories include the "Resist America, Aid Vietnam" side too.

When great powers fight a war about "isms" on someone else's home,
why is the voice of the least powerful group most easily overlooked by both grand narratives?
Putting America, China, and Vietnam side by side —
how many different versions do you think "the same war" becomes, depending on where you stand?`,
      hintCn: `提示：这题在练「视角决定故事」这个思维，中立是关键，不要评判哪边对哪边错。
- 美国视角：遏制/多米诺、士兵的牺牲、国内撕裂——「冷战正义」或「美国反思」。
- 中国视角：抗美援越（同时夹着中苏分裂的大国算盘），国内还陷在文革里。
- 越南视角：战火真正落在自己的土地上，约 200 万平民，最没话语权、也最该被听见。
高分写法：不争「谁的版本才对」，而是解释**为什么同一场仗会有这么多不同的真实版本**，
以及为什么最没话语权的越南村民最容易被两边的大叙事同时盖掉。保持中立，不下对错结论。`,
      hintEn: `Hint: this question trains the skill "perspective shapes the story." Neutrality is key —
don't judge which side was right or wrong.
- U.S. view: containment/dominoes, soldiers' sacrifice, the country torn, "Cold War justice" or
  "American self-reflection."
- China view: Resist America, Aid Vietnam (with great-power calculations of the Sino-Soviet split
  underneath), while China itself was caught in the Cultural Revolution at home.
- Vietnam view: the fire fell on their own land, ~2 million civilians, the least voice yet the
  one that most deserves to be heard.
High-scoring move: don't argue "whose version is correct" — instead explain **why one war can
have so many real versions**, and why the least-powerful Vietnamese villagers are most easily
buried under both grand narratives. Stay neutral, draw no verdict.`,
      conceptsActivated: ['multiperspective-rule-zero', 'china-bridge-aid-and-split', 'my-lai-massacre'],
    },
  ],
};

export default notebook;
