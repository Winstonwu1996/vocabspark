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
她说这是 APUSH 第八单元（冷战时代）里的硬骨头，
而且是美国社会到今天都没吵出一个统一「对错」结论的一场仗。

我回家问我妈，她说她小时候在中国听到的，是「抗美援越」那一边的故事——
跟美国课本讲的，几乎是同一场仗的两个完全不同的版本。
老师说这正是这一课最值得我们华裔同学想的地方。

她给了一张纸，上面写着这些名字：

Lyndon B. Johnson（约翰逊）、Richard Nixon（尼克松）、
Walter Cronkite（克朗凯特）、William Calley（卡利）

还有一串词：Gulf of Tonkin（东京湾决议）、containment（遏制）、
domino theory（多米诺骨牌理论）、escalation（逐步升级）、
the draft（征兵制）、Tet Offensive（春节攻势）、credibility gap（信任鸿沟）、
My Lai（美莱）、Kent State（肯特州立）、Vietnamization（越南化）。

我先记下来，等下读三个故事——一个华盛顿决策者（做政策的人）、
一个被征兵的美国士兵（夹在中间的人）、还有一个湄公河村庄的少女
（战火真正落在的人）——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页："学越战，最难也最重要的，
不是记住谁对谁错——是同时听见每一边的道理，再自己去掂量。"`,
    en: `Today my teacher said we're learning the Vietnam War, which began in 1965.
She said it's one of the hardest parts of APUSH Period 8 (the Cold War era),
and a war American society still hasn't settled a single verdict on, right or wrong.

I asked my mom at home. She said the story she heard growing up in China was the
"Resist America, Aid Vietnam" side, almost the same war told as two completely
different versions from the American textbook. Teacher said that's exactly what
makes this lesson worth thinking about for us heritage students.

She gave us a sheet with these names:

Lyndon B. Johnson, Richard Nixon,
Walter Cronkite, William Calley

Plus a string of terms: Gulf of Tonkin Resolution, containment, domino theory,
escalation, the draft, Tet Offensive, credibility gap, My Lai, Kent State,
Vietnamization.

Let me write these down. After I read the three stories, a Washington policymaker
(who made policy), a drafted American soldier (caught in the middle), and a Mekong
village girl (on whom the fire really fell), I'll come back and check this sheet
to see whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The hardest and
most important thing about studying Vietnam isn't memorizing who was right or wrong;
it's hearing every side's reasoning at once, and then weighing it for yourself."`,
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
        roleCn: '北越领袖、越南共产主义与独立运动的象征（1969 年去世，未及见到越南统一）',
        roleEn: 'North Vietnamese leader, symbol of Vietnamese communism and independence (died 1969, before unification)',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '被征兵的美国士兵',
        nameEn: 'the drafted American soldier',
        ipa: null,
        roleCn: '多为穷人/少数族裔家庭青年；夹在「执行政策」与「政策受害者」之间的群体（士兵 lens 主角）',
        roleEn: 'Mostly young men from poor and minority families; the group caught between "carrying out policy" and "being its victim" (the soldier lens)',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '越南村民',
        nameEn: 'Vietnamese villagers',
        ipa: null,
        roleCn: '战火真正落在的人；估计平民死亡约 200 万（1995 官方估计）；最常被两套大叙事忽略（村庄少女 lens 主角）',
        roleEn: 'The people on whom the fire really fell; estimated civilian deaths up to about 2 million (1995 official estimate); most often overlooked by both grand narratives (the village-girl lens)',
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
      standardRef: ['APUSH KC-8.1.II', 'CA HSS 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n3'],
        xiaoweiNote: {
          cn: `决策者那一遍第 3 节专门讲它。1964 年 8 月，美国驱逐舰 USS Maddox 在东京湾
和北越交火（8 月 2 日真实），8 月 4 日又报告「第二次袭击」——可这第二次，
后来证实**很可能根本没发生**。基于这份有问题的情报，国会 8 月 7 日通过了
《东京湾决议》，授权总统在东南亚「采取一切必要措施」。

我把考点压成一句：东京湾决议 = 一张**近乎空白的支票**——不用正式宣战，
总统就能在东南亚放手用兵。整场越战，美国其实**从未正式宣战**。

考点关键句（AP 高频）：一场十年大战的法律起点，建在一份**很可能不实**的情报上。
这正是 AP 爱考的「总统战争权力 vs 国会宣战权」的张力——也直接导致 1973 年国会通过
《战争权力法》来纠正它。

我的记忆锚：Tonkin（东京湾）= 那张「空白支票」的签发处。`,
          en: `The policymaker's Lens Node 3 is all about this. In August 1964 the U.S.
destroyer USS Maddox traded fire with North Vietnam in the Gulf of Tonkin (real, Aug 2),
and on Aug 4 a "second attack" was reported, which was later confirmed to have **very
likely never happened**. On that flawed intelligence, Congress passed the Gulf of Tonkin
Resolution on Aug 7, authorizing the president to "take all necessary measures" in
Southeast Asia.

I compress it to one line: the Gulf of Tonkin Resolution = a **near-blank check** —
the president could wage war in Southeast Asia with no formal declaration. Across the
whole Vietnam War, the U.S. **never formally declared war**.

Key exam sentence (high-frequency): the legal start of a ten-year war rested on
intelligence that **very likely wasn't true**. This is the AP-favorite tension between
"presidential war powers vs. Congress's power to declare war," and it led directly to
the 1973 War Powers Resolution that tried to correct it.

Memory anchor: Tonkin = where that "blank check" was issued.`,
        },
      },
    },

    {
      id: 'containment-domino-theory',
      termCn: '遏制与多米诺骨牌理论',
      termEn: 'Containment & the Domino Theory',
      standardRef: ['APUSH KC-8.1.II', 'CA HSS 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n2'],
        xiaoweiNote: {
          cn: `决策者那一遍第 2 节讲清了「我们为什么打」。两个词要一起记：

- **遏制（containment）**：美国冷战大战略的核心——阻止共产主义向外扩散。
  从杜鲁门到约翰逊，一脉相承。
- **多米诺骨牌理论（domino theory）**：如果南越倒下变红，老挝、柬埔寨、泰国
  会像一排骨牌一样一个接一个倒下，最后威胁整个自由世界。

考点关键句：越战不是「无缘无故」打的——决策者**真心相信**这套连锁反应。
但 AP 爱让你做批判性评估：事后看，南越确实倒了，**东南亚却没有全部变红**——
说明这个「骨牌」假设，可能从一开始就是错的。

老师强调一个常见误解：误「美国打越南是为了越南本身」→ 正：是把越南放进
**遏制 + 多米诺**这套全球冷战逻辑里。

我的记忆锚：domino = 怕「倒一个，倒一片」；containment = 用墙「围住、别让它扩散」。`,
          en: `The policymaker's Lens Node 2 makes clear "why we fought." Two terms go together:

- **Containment**: the core of America's Cold War grand strategy, to stop the spread of
  communism. From Truman to Johnson, an unbroken line.
- **Domino theory**: if South Vietnam fell and went red, then Laos, Cambodia, and Thailand
  would fall one after another like a row of dominoes, threatening the whole free world.

Key exam sentence: the war wasn't fought "for no reason"; the policymaker **sincerely
believed** this chain reaction. But AP loves a critical evaluation: in hindsight, South
Vietnam did fall, yet **Southeast Asia did not all go red**, suggesting the "domino"
assumption may have been wrong from the start.

Teacher flagged a common misconception: "America fought for Vietnam itself" → in fact it
placed Vietnam inside the global Cold War logic of **containment + dominoes**.

Memory anchor: domino = fear that "one falls, a whole row falls"; containment = a wall to
"hold it in, don't let it spread."`,
        },
      },
    },

    {
      id: 'escalation-trap',
      termCn: '逐步升级的陷阱',
      termEn: 'The Trap of Escalation',
      standardRef: ['APUSH KC-8.1.II', 'AP LEQ rubric (causation)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n4'],
        xiaoweiNote: {
          cn: `决策者那一遍第 4 节的「你就是我」高潮就是这个。1965 年 3 月两件大事：
3 月 2 日 **Rolling Thunder（滚雷行动）**大轰炸开始；3 月 8 日，3500 名海军陆战队员
在岘港登陆，是首批地面战斗部队。然后兵力一路加码——1965 年几万，到 **1968 年超过五十万**。

**escalation（逐步升级）= 一个陷阱**：决策者做的不是一个大决定，而是一连串小决定，
每一步单看都「比撤出划算」，加起来却是一场谁也停不下来的大战。

考点关键句（AP 考 causation 常用）：越战的卷入是**渐进的**，不是一次性大规模出兵。
误「美国一打就大规模派兵」→ 正：从顾问→几万→五十多万，每一步都看似合理。

我的记忆锚：escalation = 一级一级往上爬的楼梯，**爬上去容易，回头难**。`,
          en: `The "now you are me" peak of the policymaker's Lens Node 4 is this. Two big things
in March 1965: on Mar 2 the **Rolling Thunder** bombing began; on Mar 8, 3,500 Marines
landed at Da Nang, the first ground combat troops. Then forces kept climbing, from tens of
thousands in 1965 to **over half a million by 1968**.

**Escalation = a trap**: the policymaker made not one big decision but a string of small
ones, each looking "cheaper than pulling out," yet together a war no one could stop.

Key exam sentence (used for AP causation): U.S. involvement was **gradual**, not a single
large deployment. Misconception "America sent huge forces at once" → in fact: advisers →
tens of thousands → over half a million, each step looking reasonable.

Memory anchor: escalation = a staircase climbed one step at a time, **easy to climb,
hard to come back down**.`,
        },
      },
    },

    {
      id: 'tet-offensive-credibility-gap',
      termCn: '春节攻势与信任鸿沟',
      termEn: 'Tet Offensive & the Credibility Gap',
      standardRef: ['APUSH KC-8.1.II', 'APUSH 8.9', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n6', 'viet-policymaker-n7', 'viet-soldier-n6'],
        xiaoweiNote: {
          cn: `三个视角都碰到 Tet，但决策者那一遍第 6、7 节讲得最透。
1968 年 1 月 30 日**春节（Tet）**，北越正规军（PAVN）和 Viet Cong 在全境突袭，
一度攻进西贡的美国大使馆。

这里有一个 AP **必考的反转**（老师叫它「胜负的两个维度」）：
- **军事上**：Tet 最后被击退，北越损失惨重 → 算「美国赢」。
- **政治/心理上**：美国人在电视上看到敌人攻进大使馆，和官方多年说的「我们正在赢」
  **对不上了** → 美国民意彻底转向。

这道对不上的裂缝，有个名字：**credibility gap（信任鸿沟）**——政府说的，和人民
亲眼看到的，对不上。1968 年 2 月，最受信任的主播 Walter Cronkite 称战争陷入
「僵局（stalemate）」（这是他评论的核心意思，不是档案逐字原话），约翰逊不久后宣布不连任。

考点关键句：Tet 在战场是北越的失败，在美国国内却是战争走向终结的转折——
**胜负不只在战场上决定，也在人心和电视屏幕上决定**。`,
          en: `All three lenses touch Tet, but the policymaker's Lens Nodes 6 and 7 dig deepest.
On January 30, 1968 (**Tet**, the Lunar New Year), the North Vietnamese regular army (PAVN)
and the Viet Cong attacked across the whole country, briefly storming the U.S. embassy in
Saigon.

Here is an AP **must-know reversal** (teacher calls it "two dimensions of winning"):
- **Militarily**: Tet was beaten back, North Vietnam took heavy losses → "America won."
- **Politically/psychologically**: Americans saw the enemy in their embassy on TV, which
  **no longer matched** years of the official "we are winning" → public opinion flipped.

That mismatch has a name: the **credibility gap** — the gap between what the government says
and what the people see. In February 1968 the most trusted anchor, Walter Cronkite, called
the war a "stalemate" (the core meaning of his commentary, not a word-for-word archive
quote), and Johnson soon announced he would not run again.

Key exam sentence: Tet was a battlefield failure for North Vietnam but the turning point
toward the war's end at home, **winning is decided not only on the battlefield but in
people's minds and on TV screens**.`,
        },
      },
    },

    {
      id: 'the-draft-inequality',
      termCn: '征兵制的不公',
      termEn: 'The Draft and Its Inequality',
      standardRef: ['APUSH 8.9', 'APUSH KC-8.2.I', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'drafted-soldier-mediator',
        nodeIds: ['viet-soldier-n1', 'viet-soldier-n2'],
        xiaoweiNote: {
          cn: `士兵那一遍第 1、2 节整条线就是这个。1964-1973 年间约 **220 万**美国男性被
**draft（征兵）**征召。听上去像「公平地抽所有年轻人」，可它一点都不公平。

关键机制是 **deferment（缓征）**：能上大学的人可以一张接一张拿缓征，合法地把当兵
往后拖，很多人就这么拖过去了。能拖的，多是富裕家庭的孩子；拖不了的，是穷人和
少数族裔的孩子——他们承担了**不成比例的伤亡**。

考点关键句（DBQ 高频）：征兵的阶级与种族不公，是**反战运动最核心的引信之一**。
而且别孤立地看——它和同期的**民权运动**、**青年反主流文化（counterculture）**
拧成了 1960 年代一整片社会动荡。AP 的 DBQ 爱考「1960 年代各场社会运动如何相互激荡」。

老师纠正的误解：误「征兵公平地抽所有人」→ 正：富人靠缓征大量躲过，穷人少数族裔
承担不成比例的代价。

我的记忆锚：deferment = 有钱有学上 = 一张「合法的免战金牌」。`,
          en: `The soldier's Lens Nodes 1 and 2 are this whole thread. Between 1964 and 1973
about **2.2 million** American men were called by the **draft**. It sounds like "fairly
picking all young men," but it was anything but fair.

The key mechanism is the **deferment**: those who could go to college took one deferment
after another, legally pushing service back and back, and many slipped past it that way.
Those who could push it back were mostly wealthy families' kids; those who couldn't were
the poor and minorities, who bore a **disproportionate share** of the casualties.

Key exam sentence (high-frequency DBQ): the class and racial unfairness of the draft was
**one of the core fuses of the anti-war movement**. And don't view it in isolation, it
braided with the **civil rights movement** and the **youth counterculture** into one whole
upheaval of the 1960s. AP DBQs love "how the 1960s social movements fed off one another."

Teacher's misconception fix: "the draft picked everyone fairly" → in fact the rich escaped
via deferments while the poor and minorities paid disproportionately.

Memory anchor: deferment = money + college = a "legal pass out of the war."`,
        },
      },
    },

    {
      id: 'my-lai-massacre',
      termCn: '美莱屠杀',
      termEn: 'The My Lai Massacre',
      standardRef: ['APUSH 8.9', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'villager-and-draftee-receiving-end',
        nodeIds: ['viet-villager-n6', 'viet-soldier-n7', 'viet-policymaker-n8'],
        xiaoweiNote: {
          cn: `三个视角都讲到它，但村庄少女那一遍第 6 节最戳人。1968 年 3 月 16 日，
在一个叫 **My Lai（美莱）**的村子，美军一支部队（Charlie 连）在几个小时里
杀死了数百名手无寸铁的村民——估计**约 347 到 504 人**，大多是老人、妇女和孩子。
那天村里没有打仗、没有 Viet Cong 交火。事件被**掩盖一年多**，1969 年才曝光。

这里有两个考点别写错：
1. **数字用区间「约 347-504」**，不同来源不一，别硬定单一数字。
2. **追责**：1971 年只有 **Calley 中尉一人**被定罪，后来还大幅减刑。

考点关键句（DBQ 高频）：My Lai 逼出的问题远比「一个坏苹果」复杂——在一场用
**body count（敌方阵亡数）**衡量胜负、又分不清谁是敌人的仗里，这种事到底多普遍？
责任在开枪的士兵，还是在设计这种打法的整套机器？

老师纠正的误解：误「My Lai 是孤立的、被立刻惩处的个案」→ 正：掩盖逾一年、只一人
定罪还减刑——它问的是制度责任，不只是个人。`,
          en: `All three lenses touch it, but the village girl's Lens Node 6 hits hardest. On
March 16, 1968, in a village called **My Lai**, a U.S. unit (Charlie Company) killed
hundreds of unarmed villagers in a few hours, an estimated **347 to 504**, mostly old
people, women, and children. There was no battle that day, no Viet Cong firefight. The
event was **covered up for over a year** and exposed only in 1969.

Two exam points not to get wrong:
1. **Use the range "about 347-504"**, sources differ, don't pin a single number.
2. **Accountability**: in 1971 only **Lieutenant Calley** was convicted, and his sentence
   was later sharply reduced.

Key exam sentence (high-frequency DBQ): My Lai forced questions far more complex than "one
bad apple", in a war measured by **body count** where you can't tell who the enemy is, how
common was this? Does responsibility lie with the soldier who fired, or with the whole
machine that designed this way of fighting?

Teacher's misconception fix: "My Lai was isolated and punished at once" → in fact covered
up over a year, one person convicted then reduced, it asks about systemic responsibility,
not just an individual.`,
        },
      },
    },

    {
      id: 'antiwar-movement-1960s',
      termCn: '反战运动与 1960 年代的动荡',
      termEn: 'The Anti-War Movement & 1960s Upheaval',
      standardRef: ['APUSH 8.9', 'APUSH KC-8.2.I', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'drafted-soldier-mediator', nodeId: 'viet-soldier-n2', context: '征兵不公点燃校园反战，与民权/counterculture 拧成 1960s 整片动荡' },
          { lens: 'drafted-soldier-mediator', nodeId: 'viet-soldier-n8', context: '反战的人觉得士兵是帮凶 / 支持战争的「沉默的大多数」也真诚相信不能背叛流血的孩子' },
        ],
      },
      standaloneText: {
        cn: `**反战运动（the anti-war movement）**是 APUSH **8.9** 的考点核心，
故事里只点到（士兵 lens），这里单独展开。

**反战这一边**：1965-1971 年，大学校园成了反战中心——烧征兵卡、占领校舍、
大规模游行、teach-in（校园辩论会）。征兵的不公（穷人和少数族裔承担不成比例伤亡）
是核心引信。它和同期的**民权运动**、**青年反主流文化（counterculture）**交织成
1960 年代的整体动荡：共同的底色是「对权威的不信任」和「追问美国理想 vs 现实的差距」。

**别忘了另一边——「沉默的大多数」（the silent majority）**：很多普通美国人**支持**
战争。他们真诚相信「南越一倒，东南亚全红」，真诚觉得「半路撤出就是背叛在前线流血的
孩子」。尼克松专门用「沉默的大多数」这个词来指他们。**他们不是稻草人，他们的逻辑
也有可被同情的一面**——这正是 Rule 0 要求的：支持和反战双方都被当作真实的声音。

**Kent State（肯特州立）**把这片动荡推到顶点：1970 年尼克松扩战柬埔寨，引爆全国
校园抗议；5 月 4 日，俄亥俄国民警卫队在 Kent State 大学向学生开枪，13 秒内打死 4 人、
伤 9 人。战争的暴力，回到了美国自己的校园。

考点关键句（DBQ 必考）：1960 年代的反战、民权、counterculture **相互激荡**，
不是各自孤立的运动；而美国社会就在「反战」和「支持战争」两边被撕成两半。`,
        en: `The **anti-war movement** is the core of APUSH **8.9**. The story only touches it
(soldier lens), so here it is on its own.

**The anti-war side**: from 1965 to 1971, college campuses became the center, burning draft
cards, occupying buildings, mass marches, teach-ins. The draft's unfairness (the poor and
minorities bearing disproportionate casualties) was the core fuse. It interwove with the
**civil rights movement** and the **youth counterculture** into the whole 1960s upheaval,
sharing a base of "distrust of authority" and "questioning the gap between American ideals
and reality."

**Don't forget the other side, the "silent majority"**: many ordinary Americans **supported**
the war. They sincerely believed "if South Vietnam falls, Southeast Asia goes red," and
sincerely felt "pulling out halfway betrays the kids bleeding at the front." Nixon coined the
phrase "silent majority" for them. **They are not strawmen; their logic has a side worth
understanding too**, which is what Rule 0 requires: both pro-war and anti-war heard as real
voices.

**Kent State** pushed the upheaval to its peak: in 1970 Nixon widened the war into Cambodia,
igniting nationwide campus protest; on May 4, the Ohio National Guard fired on students at
Kent State University, killing 4 and wounding 9 in 13 seconds. The violence of the war had
returned to America's own campus.

Key exam sentence (must-test DBQ): the 1960s anti-war, civil rights, and counterculture
movements **fed off one another**, not isolated movements; and American society itself was
torn in two between "anti-war" and "pro-war."`,
      },
      xiaoweiNote: {
        cn: `老师说 AP DBQ 几乎必考一道「1960 年代各社会运动如何相互激荡」。
我的记忆锚：**反战 + 民权 + counterculture = 1960s 一张网**，公共引信是「征兵不公」。

还有一个高分动作：写反战运动时，**别忘了写「沉默的大多数」这一边**——
能同时呈现支持和反对两边的真实逻辑，正是 AP 评分要的 complexity（复杂性）。
Kent State（4 死 9 伤）是「暴力回到美国本土」的标志性事件，记住年份 1970。`,
        en: `Teacher said AP DBQs almost always test "how the 1960s social movements fed off one
another." My memory anchor: **anti-war + civil rights + counterculture = one 1960s web**,
with "the unfair draft" as a shared fuse.

A high-scoring move: when you write the anti-war movement, **don't forget the "silent
majority" side**, showing both pro- and anti-war logic as real is exactly the complexity AP
scoring rewards. Kent State (4 dead, 9 wounded) is the marker of "violence returning to U.S.
soil"; remember the year 1970.`,
      },
    },

    {
      id: 'vietnamization-paris-fall-of-saigon',
      termCn: '越南化、巴黎协定与西贡陷落',
      termEn: 'Vietnamization, Paris Accords & the Fall of Saigon',
      standardRef: ['APUSH KC-8.1.II', 'CA HSS 11.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n9', 'viet-villager-n8'],
        xiaoweiNote: {
          cn: `决策者那一遍第 9 节给了「战争的账单」，村庄少女第 8 节从地面上看了战争的结束。
三个名词按时间串起来：

1. **Vietnamization（越南化）**：尼克松的策略——逐步撤出美军，把仗交给南越军（ARVN）
   接手。同时他 1970 年 4 月底把战争扩大到柬埔寨。
2. **巴黎和平协定（Paris Peace Accords）**：1973 年 1 月签署，美军 60 天内撤出约
   **2.37 万人**。但协定**允许北越军队留在南越**——和平架在一根随时会断的线上。
3. **西贡陷落（Fall of Saigon）**：1973 撤军两年后，1975 年 4 月 30 日，北越坦克冲进
   西贡，南越垮台，越南统一。大使馆屋顶直升机疏散最后人员的画面，成了战争的句点。

考点关键句：误「1973 签了协定战争就结束了」→ 正：协定允许北越军留南越，和平没撑住，
**1975 西贡陷落才是真正终点**。

账单（记量级，不必记精确）：约 **5.82 万**美军阵亡；越南军民死亡数以百万计
（1995 官方估计平民死亡**多达约 200 万**，这是估计数、来源差别大）。

我的记忆锚：Vietnamization = 「把仗还给越南人」；1973 撤军 ≠ 战争结束，1975 才是。`,
          en: `The policymaker's Lens Node 9 gives "the war's bill," and the village girl's Node 8
sees the war end from the ground. Three terms in time order:

1. **Vietnamization**: Nixon's strategy, gradually withdrawing U.S. troops and handing the
   fighting to the South Vietnamese army (ARVN). He also widened the war into Cambodia in
   late April 1970.
2. **Paris Peace Accords**: signed January 1973; the U.S. withdrew about **23,700** troops
   within 60 days. But the accords **let North Vietnamese troops remain in the South**, peace
   set on a thread that could snap.
3. **Fall of Saigon**: two years after the 1973 withdrawal, on April 30, 1975, North
   Vietnamese tanks rolled into Saigon, the South collapsed, and Vietnam was unified. The
   image of helicopters lifting the last people off the embassy roof became the war's full stop.

Key exam sentence: misconception "the 1973 accords ended the war" → in fact they let the
North's troops stay, peace didn't hold, **the 1975 Fall of Saigon was the real end**.

The bill (know the scale, not exact figures): about **58,000** U.S. troops dead; Vietnamese
military and civilian deaths in the millions (1995 official estimate: **up to about 2 million**
civilians, an estimate, sources differ widely).

Memory anchor: Vietnamization = "hand the war back to the Vietnamese"; 1973 withdrawal ≠ end
of war, 1975 is.`,
        },
      },
    },

    {
      id: 'guerrilla-war-body-count',
      termCn: '游击战与 body count',
      termEn: 'Guerrilla War & the Body Count',
      standardRef: ['APUSH KC-8.1.II', 'AP LEQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'policymaker-actor',
        nodeIds: ['viet-policymaker-n5', 'viet-soldier-n4'],
        xiaoweiNote: {
          cn: `决策者第 5 节和士兵第 4 节都讲到这片仗为什么这么难打。

越南是丛林、山地、湄公河三角洲的水网——这种地形对**游击战（guerrilla war）**极其有利。
对手 **Viet Cong（越共游击队）**白天是田里的农民，晚上是端枪的战士，藏在村庄和地道里。
美军有压倒性的火力、飞机、坦克，可火力对着一个**「看不见的敌人」**，往往落在分不清
敌友的村庄上。

美军用 **body count（敌方阵亡数）**来衡量胜负。问题是：在一场分不清谁是敌人的仗里，
**「数字上的赢」和真正的赢，可能是两回事**——body count 越报越高，可平民伤亡也越来越多，
Hanoi（河内）却始终没有「撑不住」。

考点关键句：用 body count 衡量胜负 + 没有前线的游击战 = 大量平民伤亡 + 数据失真，
这是 My Lai 这类悲剧的土壤之一，也是美军「赢了每场战斗却输了整场战争」的根源之一。

我的记忆锚：body count = 「用数字证明在赢」的陷阱；看不见的敌人 = 没有前线的仗。`,
          en: `The policymaker's Node 5 and the soldier's Node 4 both show why this war was so hard.

Vietnam is jungle, mountains, and the watery Mekong Delta, terrain perfect for **guerrilla
war**. The enemy, the **Viet Cong**, were farmers by day and fighters by night, hidden in
villages and tunnels. The Americans had overwhelming firepower, planes, and tanks, but
firepower aimed at an **"invisible enemy"** often fell on villages where friend and foe
couldn't be told apart.

The U.S. measured success by the **body count** (enemy dead). The problem: in a war where
you can't tell who the enemy is, **"winning on paper" and truly winning may be two different
things**, the body count climbed, civilian casualties climbed too, yet Hanoi never "broke."

Key exam sentence: measuring success by body count + a front-less guerrilla war = heavy
civilian casualties + distorted data, the soil of tragedies like My Lai, and one root of
why the U.S. "won every battle yet lost the war."

Memory anchor: body count = the trap of "proving you're winning with numbers"; invisible
enemy = a war with no front line.`,
        },
      },
    },

    {
      id: 'china-bridge-aid-and-split',
      termCn: '中国桥：抗美援越与中苏分裂',
      termEn: 'China Bridge: Aid to Vietnam & the Sino-Soviet Split',
      standardRef: ['APUSH KC-8.1 (Cold War in Asia)', 'China-heritage bridge (§8)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'villager-and-draftee-receiving-end',
        nodeIds: ['viet-villager-n9', 'viet-soldier-n9'],
        xiaoweiNote: {
          cn: `这是给我们华裔同学特别准备的一格。村庄少女第 9 节、士兵第 9 节都讲到中国。
我妈记忆里的「抗美援越」，和美国课本里的越战，其实是**同一场仗的两面**。

**抗美援越（中国对北越的支援）**：1965-1971 年，中国向北越派出超过 **32 万人**的
工程、防空、铁路部队，帮北越修被美军炸毁的路桥、运物资，防空部队还参与击落美机。
背后有中国和苏联两个大国撑着，是北越敢跟美国长期耗下去的底气之一。

**中苏分裂（Sino-Soviet split）**——这一点最容易被简化掉：那条「社会主义阵营一条心」
的线其实充满裂痕。1960 年代中苏严重分歧、公开决裂，北越夹在北京和莫斯科中间小心平衡；
1960 年代末中国逐步收缩援助，北越更多转向苏联。所以**「援越」背后是两个大国各自的算盘，
并不是一团和气**。

**同时性**：就在中国援越的同时，中国自己陷在**文化大革命（文革，1966-1976）**的十年动荡里。
于是地球上同时有三场动荡——美国（越战撕裂）、中国（文革）、越南（夹在炮火中间），
是同一场冷战风暴吹向三个地方。

Rule 0 提醒：这一格**不评判**中国援越、文革、美国参战的对错，只把同一段时间的另一面
摆出来。我的记忆锚：抗美援越 = 越战的「中国一面」；中苏分裂 = 别把社会主义阵营当一条心。`,
          en: `This square is specially for us heritage students. The village girl's Node 9 and the
soldier's Node 9 both speak of China. The "Resist America, Aid Vietnam" in my mom's memory and
the Vietnam War in the U.S. textbook are really **two faces of the same war**.

**Resist America, Aid Vietnam (China's support of the North)**: from 1965 to 1971, China sent
over **320,000** engineering, anti-aircraft, and railway troops to North Vietnam, repairing
bombed roads and bridges, shipping supplies, and its anti-aircraft units helped down U.S.
planes. Having China and the Soviet Union at its back was one reason the North dared to wear
America down.

**The Sino-Soviet split**, the part most easily oversimplified: the "socialist camp of one mind"
was full of cracks. In the 1960s China and the USSR sharply disagreed and broke openly; North
Vietnam balanced carefully between Beijing and Moscow; in the late 1960s China scaled back aid
and the North leaned more toward the USSR. So **behind "aiding Vietnam" lay each great power's
own calculations, not one harmonious family**.

**Simultaneity**: even as China aided Vietnam, China itself was in the ten-year upheaval of the
**Cultural Revolution (1966-1976)**. So three upheavals ran at once, America (torn by the war),
China (the Cultural Revolution), and Vietnam (caught in the fire), one Cold War storm blowing
toward three places.

Rule 0 reminder: this square **judges no one** right or wrong, China's aid, the Cultural
Revolution, or America's entry, it only sets out the other side of the same time. Memory anchor:
Resist America, Aid Vietnam = the "China side" of the war; Sino-Soviet split = don't treat the
socialist camp as of one mind.`,
        },
      },
    },

    {
      id: 'multiperspective-rule-zero',
      termCn: '多视角与不下结论',
      termEn: 'Multiple Perspectives & Drawing No Verdict',
      standardRef: ['AP DBQ rubric (complexity)', 'APUSH historical thinking'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'villager-and-draftee-receiving-end',
        nodeIds: ['viet-policymaker-n10', 'viet-soldier-n10', 'viet-villager-n10'],
        xiaoweiNote: {
          cn: `这一格不是一个「知识点」，是一个**方法**——越战这一课最想教的东西。
每个 lens 的第 10 节都让你掂量「同一个人/同一个位置的两面」，第 11 节都明说
**本课不替你下「战争对错」的结论**。

为什么这么设计？因为越战是美国社会**到今天都没吵出统一对错结论**的一场仗。
historiography（史学）上至少有几派：
- **正统派**：这是一场打不赢、也不该打的「错误的战争」。
- **修正派**：美国是打法错了，本可以打赢。
- **越南视角史学**（越来越受重视）：这首先是**越南人自己的战争和苦难**，
  不只是「美国的越战创伤」——本课的 DEFAULT 越南村民视角正服务于这一转向。

考点关键句（AP complexity 高分核心）：好的 DBQ/LEQ **不二元站队**，而是同时呈现
多方真实逻辑、承认证据有张力，再做有理有据的判断。这正是越战这一课训练的能力——
**先听见每一边的道理，再自己去掂量**。

我的记忆锚：Rule 0 = 摆事实、分多视角、不下最终对错结论 = AP 最爱的 complexity。`,
          en: `This square isn't a "fact"; it's a **method**, the thing the Vietnam lesson most wants
to teach. Each lens's Node 10 has you weigh "two faces of the same person/position," and each
Node 11 explicitly says **this lesson draws no verdict for you on whether the war was right or
wrong**.

Why design it this way? Because Vietnam is a war American society **still hasn't settled a single
verdict on**. In historiography there are at least a few schools:
- **Orthodox**: a "wrong war" that couldn't be won and shouldn't have been fought.
- **Revisionist**: America fought it wrong but could have won.
- **Vietnamese-centered history** (increasingly important): this was first of all **the
  Vietnamese people's own war and suffering**, not just "America's Vietnam trauma", the lesson's
  DEFAULT village-girl lens serves this turn.

Key exam sentence (core of AP complexity): a good DBQ/LEQ **doesn't pick a binary side**; it
shows multiple real logics at once, admits the evidence is in tension, then makes a reasoned
judgment. That's exactly the skill this lesson trains, **hear every side's reasoning first, then
weigh it yourself**.

Memory anchor: Rule 0 = lay out facts, give multiple perspectives, draw no final verdict = the
complexity AP loves.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `决策者真心相信「多米诺骨牌理论」——南越一倒，东南亚会一个接一个变红。
事后看，南越确实倒了，可东南亚并没有全部变红。

一个被真诚相信、却可能是错的理论，为什么能把一个国家拖进十年战争？
我们今天该如何分辨「真诚的信念」和「正确的判断」？用这一课里的至少两条
具体证据（事件或决定）支持你的看法。`,
      en: `The policymaker sincerely believed the "domino theory", that if South Vietnam
fell, Southeast Asia would go red one by one. In hindsight, South Vietnam did fall, yet
Southeast Asia did not all go red.

Why can a theory that is sincerely believed but possibly wrong drag a nation into a
ten-year war? How should we today tell apart "sincere belief" from "correct judgment"?
Support your view with at least two specific pieces of evidence (events or decisions)
from this lesson.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "真诚但可能错"这边的证据：domino theory（南越倒了但东南亚没全红）、东京湾决议建在
  很可能不实的情报上、escalation 每一步都「看似合理」却加成大战。
- 别忘了写决策者「不是嗜血、夜里睡不着」的一面——他真诚，但真诚不等于判断对。
高分写法：承认这套逻辑有它自洽的一面，再说明它在哪里、为什么走偏。`,
      hintEn: `Hint: no standard answer, AP scoring looks at your ability to **use evidence**,
not which side you pick.
- Evidence for "sincere but possibly wrong": the domino theory (South fell but the region
  didn't all go red), the Gulf of Tonkin Resolution built on likely-false intelligence,
  escalation where each "reasonable" step added up to a big war.
- Don't forget the policymaker's "not bloodthirsty, sleepless at night" side, he was sincere,
  but sincerity isn't correct judgment.
High-scoring move: grant that the logic was internally coherent, then show where and why it
went wrong.`,
      conceptsActivated: ['containment-domino-theory', 'gulf-of-tonkin-resolution', 'escalation-trap'],
    },
    {
      id: 'q2',
      cn: `一个 19 岁、被征兵抽中、被命令在分不清敌友的村庄里开枪的美国士兵——
他既是执行政策的人，又是这套政策的受害者。在他身后，My Lai 屠杀把一个最难的问题
推到了所有人面前。

我们该如何看待这个士兵手上的责任？「我是被逼的」能解释很多，可它能不能洗掉全部责任？
如果你是 AP 老师，要出一道题考这个问题，你会怎么提问，又想逼学生看见什么？`,
      en: `A 19-year-old American soldier, picked by the draft, ordered to fire in villages where
he can't tell friend from foe, is both the one carrying out policy and a victim of that policy.
Behind him, the My Lai Massacre pushed one of the hardest questions in front of everyone.

How should we view the responsibility on this soldier's hands? "I was forced" explains much,
but can it wash away all responsibility? If you were an AP teacher writing a question on this,
how would you phrase it, and what would you want students to see?`,
      hintCn: `提示：好的 DBQ 题逼学生**同时看见两面**，而不是二选一。
- 一面：他无辜——征兵令把他抓去，制定政策的人离前线几千里，他在恐惧和命令下开枪。
- 另一面：扣扳机的是他自己的手指，被波及的村民不会因为「他也是受害者」就少流一滴血。
你可以让学生把「士兵的受害者一面」和「My Lai 暴露的施害者一面」放在一起比较——
责任到底该怎么在「被逼的个人」和「设计这种打法的整套机器」之间分配？这正是 AP 要的
complexity（复杂性）。`,
      hintEn: `Hint: a good DBQ forces students to **see both faces at once**, not pick one.
- One face: he's innocent, a draft notice seized him, the policymakers were thousands of miles
  away, and he fired under fear and orders.
- The other face: the finger on the trigger was his own, and the villagers caught by his fire
  don't bleed one drop less because "he was a victim too."
You could have students compare "the soldier's victim side" with "the perpetrator side My Lai
exposed", how should responsibility be split between "the forced individual" and "the whole
machine that designed this way of fighting"? That's the complexity AP wants.`,
      conceptsActivated: ['the-draft-inequality', 'my-lai-massacre', 'multiperspective-rule-zero'],
    },
    {
      id: 'q3',
      cn: `这一课里，越战常被讲成「美国的故事」——士兵的牺牲、国内的撕裂、Tet 与信任鸿沟。
但承受战火最重的，是越南的村民（估计平民死亡约 200 万）。同时，对我们华裔同学来说，
家里长辈记忆里还有「抗美援越」那一面。

当大国在别人的家园上打一场关于「主义」的战争，最没有话语权的那群人的声音，
为什么最容易被两套大叙事（「冷战正义」和「美国反思」）同时忽略？
把美国、中国、越南三方放在一起看，你觉得「同一场战争」会因为站的位置不同，
变成几个不一样的故事？`,
      en: `In this lesson Vietnam is often told as "America's story", the soldiers' sacrifice, the
country torn at home, Tet and the credibility gap. But the people who bore the fire most heavily
were Vietnamese villagers (an estimated ~2 million civilian deaths). At the same time, for us
heritage students, our elders' memory holds the "Resist America, Aid Vietnam" side too.

When great powers fight a war about "isms" on someone else's home, why is the voice of the
least-powerful group most easily overlooked by both grand narratives ("Cold War justice" and
"American self-reflection")? Putting America, China, and Vietnam side by side, how many different
stories do you think "the same war" becomes, depending on where you stand?`,
      hintCn: `提示：这题专门练「视角决定故事」+ §8 中国桥，Rule 0 中性是关键。
- 美国视角：遏制/多米诺、士兵的牺牲、国内撕裂——「冷战正义」或「美国反思」。
- 中国视角：抗美援越（同时夹着中苏分裂的大国算盘），同时国内陷在文革。
- 越南视角：战火真正落在自己的土地上，约 200 万平民，最没话语权也最该被听见。
高分写法：不去争「谁的版本才对」，而是说明**为什么同一场仗会有这么多真实的版本**，
以及「最没话语权的村民」为什么最容易被两边的大叙事盖住。记得保持中性，不下对错结论。`,
      hintEn: `Hint: this question trains "perspective shapes the story" + the §8 China bridge;
Rule 0 neutrality is key.
- U.S. view: containment/dominoes, the soldiers' sacrifice, the country torn, "Cold War justice"
  or "American self-reflection."
- China view: Resist America, Aid Vietnam (with the great-power calculations of the Sino-Soviet
  split underneath), while at home caught in the Cultural Revolution.
- Vietnam view: the fire fell on their own land, ~2 million civilians, the least voice yet the
  one that most deserves to be heard.
High-scoring move: don't argue "whose version is correct"; explain **why one war has so many real
versions**, and why the least-powerful villagers are most easily buried under both grand
narratives. Stay neutral, draw no verdict.`,
      conceptsActivated: ['multiperspective-rule-zero', 'china-bridge-aid-and-split', 'my-lai-massacre'],
    },
  ],
};

export default notebook;
