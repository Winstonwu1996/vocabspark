// ─── 同伴笔记本架构 v1 · Women's Suffrage 1848-1920 ─────────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系（3 lens × 12 nodes）：
//   - cady-stanton (ecs-*)        — 运动奠基者 + 1869 反对 15th Amendment + 种族言论
//   - frances-harper (feh-*)      — 双战线调停者「我们都被绑在一起」
//   - ida-b-wells-receiving-end (ibw-*) — 被推到队尾的反私刑记者 (defaultLens)
//   - notebook 补完课纲：Seneca Falls 考点提炼、15th vs 19th、NAWSA vs NWP/Alice Paul、
//     Progressive Era 联系、运动内部种族分裂 = AP 必考的"出口闭环"
//
// 课纲对齐：
//   - APUSH Period 4-7（改革运动长弧）+ AP US Government（选举权扩大 / 15th·19th·24th 修正案）
//   - California HSS 8.8（内战前后改革运动）→ 跨到 11
//   - 弥补 womens-suffrage 课纲覆盖率（故事强情感锚定，弱考点闭环）
//
// 事实对账本：lib/history-narratives/womens-suffrage-1920-factledger.md（已核实，强措辞已修）
//   · Ida B. Wells = "死亡威胁 + 报馆被烧"，非"子弹/悬赏"
//   · Alpha Suffrage Club = "芝加哥第一个"，非"美国第一个"
//   · Stanton 种族言论 = 概括描述、不伪造逐字引文（Rule 0 诚实呈现，不洗白）
//
// 硬规则：小薇同伴语气 / 双语 / 不掩饰运动内部种族矛盾 (Rule 0) / 文化对应硬禁
// schemaVersion: 1 · notebookVersion: womens-suffrage-1920-v1

export var notebook = {
  topicId: 'womens-suffrage-1920',
  topicNameCn: '妇女选举权 1848-1920',
  topicNameEn: 'Women\'s Suffrage 1848-1920',
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
    cn: `今天老师要我们学妇女选举权运动（1848-1920，整整 72 年）。她给了一张纸，上面写着这些名字：

Elizabeth Cady Stanton（斯坦顿）、Susan B. Anthony（安东尼）、
Frances Harper（哈珀）、Ida B. Wells（韦尔斯）、Alice Paul（保罗）

还有几个词：suffrage（选举权）、Seneca Falls Convention（Seneca Falls 大会）、
Declaration of Sentiments（情感宣言）、15th Amendment（第 15 修正案）、
19th Amendment（第 19 修正案）。

我先记下来，等下读三个故事——Stanton、Frances Harper、Ida B. Wells——
读完再回来对照这张单子，看我能不能解释这些词。

老师还说了一句让我记到笔记本第一页的话："别把它背成'姐妹团结争自由'的大团圆。
要问——这场为'平等'打的仗，自己内部是不是也按种族给人排了座次？"

她说这句话是这整门课的钥匙：同一个问题"先给谁投票权"，
三个主角有三种站位。这才是 AP 真正想让你看见的。`,
    en: `Today my teacher told us we're learning the women's suffrage movement
(1848-1920, a full 72 years). She gave us a sheet with these names:

Elizabeth Cady Stanton, Susan B. Anthony,
Frances Harper, Ida B. Wells, Alice Paul

Plus some terms: suffrage, Seneca Falls Convention,
Declaration of Sentiments, 15th Amendment, 19th Amendment.

Let me write these down. After I read the three stories
(Stanton, Frances Harper, Ida B. Wells), I'll come back and check
whether I can explain each one.

Teacher also said one line I wrote on the first page of my notebook:
"Don't memorize this as a happy 'sisters united for freedom' ending.
Ask instead — did this fight for 'equality' also rank people by race inside itself?"

She said that line is the key to the whole topic: the same question,
"who gets the vote first," gave the three main characters three different stances.
That's what AP actually wants you to see.`,
    keyTerms: [
      { cn: '选举权 / 妇女选举权', en: 'suffrage / women\'s suffrage' },
      { cn: '情感宣言', en: 'Declaration of Sentiments' },
      { cn: '第 15 修正案（种族）', en: '15th Amendment (race)' },
      { cn: '第 19 修正案（性别）', en: '19th Amendment (sex)' },
      { cn: '人头税 / 识字测验', en: 'poll tax / literacy test' },
      { cn: '隔离但平等', en: 'separate but equal (Plessy v. Ferguson)' },
      { cn: '投票权法 1965', en: 'Voting Rights Act of 1965' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '伊丽莎白·卡迪·斯坦顿',
        nameEn: 'Elizabeth Cady Stanton',
        ipa: '/ɪˈlɪzəbəθ ˈkeɪdi ˈstæntən/',
        roleCn: '运动奠基者，《情感宣言》起草者；后反对先给黑人男性投票',
        roleEn: 'Movement founder, author of the Declaration of Sentiments; later opposed Black men voting first',
        mustKnow: true,
        audioKey: 'cady-stanton',
      },
      {
        nameCn: '苏珊·B·安东尼',
        nameEn: 'Susan B. Anthony',
        ipa: '/ˈsuːzən ˈænθəni/',
        roleCn: 'Stanton 50 年搭档，全国组织者；1872 因投票被捕受审',
        roleEn: 'Stanton\'s 50-year partner, national organizer; arrested and tried for voting in 1872',
        mustKnow: true,
        audioKey: 'susan-b-anthony',
      },
      {
        nameCn: '弗朗西丝·哈珀',
        nameEn: 'Frances Harper',
        ipa: '/ˈfrɑːnsɪs ˈhɑːrpər/',
        roleCn: '非裔女诗人+活动家，「我们都被绑在一起」，双战线调停者',
        roleEn: 'African American poet-activist, "We are all bound up together," two-front mediator',
        mustKnow: true,
        audioKey: 'frances-harper',
      },
      {
        nameCn: '艾达·B·韦尔斯',
        nameEn: 'Ida B. Wells',
        ipa: '/ˈaɪdə biː wɛlz/',
        roleCn: '反私刑记者，1913 拒绝走队尾走回前排，Alpha Suffrage Club 创办人',
        roleEn: 'Anti-lynching journalist, refused to march at the back in 1913, founder of the Alpha Suffrage Club',
        mustKnow: true,
        audioKey: 'ida-b-wells',
      },
      {
        nameCn: '爱丽丝·保罗',
        nameEn: 'Alice Paul',
        ipa: '/ˈælɪs pɔːl/',
        roleCn: '激进派领袖，组织 1913 游行、白宫纠察；NWP 创办人，对峙温和派 NAWSA',
        roleEn: 'Militant leader, organized the 1913 parade and White House pickets; founder of the NWP, rival to the moderate NAWSA',
        mustKnow: true,
        audioKey: 'alice-paul',
      },
      {
        nameCn: '弗雷德里克·道格拉斯',
        nameEn: 'Frederick Douglass',
        ipa: '/ˈfrɛdrɪk ˈdʌɡləs/',
        roleCn: '逃奴废奴领袖，1848 公开支持妇女投票权决议',
        roleEn: 'Escaped-slave abolitionist leader, publicly backed the suffrage resolution in 1848',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '卢克丽霞·莫特',
        nameEn: 'Lucretia Mott',
        ipa: '/luːˈkriːʃə mɒt/',
        roleCn: '与 Stanton 共同发起 Seneca Falls 大会的废奴活动家',
        roleEn: 'Abolitionist who co-launched the Seneca Falls Convention with Stanton',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'seneca-falls-1848',
      termCn: 'Seneca Falls 大会 / 情感宣言 1848',
      termEn: 'Seneca Falls Convention / Declaration of Sentiments 1848',
      standardRef: ['APUSH KC-4.1.III', 'CA HSS 8.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'cady-stanton',
        nodeIds: ['ecs-n1', 'ecs-n4', 'ecs-n5'],
        xiaoweiNote: {
          cn: `这个我读过！在视角一（Stanton）第 1、4、5 节。1848 年 7 月 19-20 日，
纽约州 Seneca Falls，一张茶桌边几个女人仿照《独立宣言》写《情感宣言》。

我抓的考点关键句：Stanton 在那句最有名的话里加了"和女人"——
"all men **and women** are created equal"。这是妇女选举权运动**公认的起点**。

最容易考的细节：当时台下约 300 人（还来了男人）。其他条款（财产权、教育权、
监护权）大家都点头，唯独**妇女投票权**那一条会炸锅、差点被删；
是逃奴废奴领袖 Frederick Douglass 站出来帮忙，那一条才**险险通过**。

我的记忆口诀：**1848 = 第一枪**。从这张茶桌到 1920 年第 19 修正案，整整 **72 年**。
老师说选择题特别爱考"妇女选举权运动从哪一年/哪场会开始"——答案永远是 Seneca Falls 1848。`,
          en: `I read this! Lens 1 (Stanton), Nodes 1, 4, 5. On July 19-20, 1848,
in Seneca Falls, New York, a few women at a tea table modeled a Declaration of
Sentiments on the Declaration of Independence.

Key exam sentence I caught: Stanton added "and women" to the most famous line —
"all men **and women** are created equal." This is the **recognized starting point**
of the women's suffrage movement.

Most testable detail: about 300 people attended (men came too). Everyone nodded
at the other clauses (property, education, custody), but the clause demanding
**women's suffrage** caused an uproar and was nearly cut; it **barely passed**
only after escaped-slave abolitionist Frederick Douglass stood up to back it.

My mnemonic: **1848 = the first shot.** From that tea table to the 19th Amendment
in 1920 is a full **72 years.** Teacher said multiple choice loves asking "what year /
what meeting did the suffrage movement begin" — the answer is always Seneca Falls 1848.`,
        },
      },
    },

    {
      id: 'stanton-anthony-partnership',
      termCn: 'Stanton-Anthony 联盟',
      termEn: 'Stanton-Anthony Partnership',
      standardRef: ['APUSH KC-6.3.II', 'CA HSS 8.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'cady-stanton',
        nodeIds: ['ecs-n5', 'ecs-n7'],
        xiaoweiNote: {
          cn: `视角一第 5 节讲到他们怎么搭上的。1850 年前后 Stanton 遇到
**Susan B. Anthony（苏珊·安东尼）**——两人合作约 **50 年**，是整场运动的引擎。

分工特别好记：**Stanton 写、Anthony 跑**。Stanton 口才笔锋硬，负责写檄文、
出思想；Anthony 有钢铁组织力，跑遍全国办分会、收签名。故事里那句
"我点火，她让火烧遍全国"，就是这两人的关系。

故事里没细讲、但 AP 爱单独考 Anthony 的一件事：**1872 年 Anthony 真的去投了票，
被捕受审、被罚款**（她拒绝付）。这是"公民不服从"的经典案例——
如果选择题单独问 Anthony，多半就是问这件 1872 投票被捕的事。

我的记忆口诀：**写的是 Stanton，跑的是 Anthony，被抓的也是 Anthony**。`,
          en: `Lens 1 Node 5 shows how they teamed up. Around 1850 Stanton met
**Susan B. Anthony** — they worked together about **50 years**, the engine of
the whole movement.

The division of labor is easy to remember: **Stanton wrote, Anthony ran.**
Stanton, sharp of tongue and pen, wrote the manifestos and supplied the ideas;
Anthony, an iron organizer, crossed the country founding chapters and gathering
signatures. The story's line "I lit the fire, she spread it across the country"
is exactly their relationship.

One thing the story didn't dwell on but AP likes to test about Anthony alone:
**in 1872 Anthony actually went and voted, was arrested, tried, and fined**
(she refused to pay). It's a classic civil-disobedience case — if a question
asks about Anthony specifically, it's usually this 1872 arrest-for-voting.

My mnemonic: **Stanton writes, Anthony runs, and Anthony is the one arrested.**`,
        },
      },
    },

    {
      id: 'fifteenth-amendment-split',
      termCn: '第 15 修正案 / 1869 运动分裂',
      termEn: '15th Amendment / The 1869 Split',
      standardRef: ['APUSH KC-5.3.II', 'AP Gov: Voting Rights'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ecs-n6', 'ecs-n7', 'feh-n6', 'ibw-n6'],
        xiaoweiNote: {
          cn: `这条线**三个视角都碰到了**（Stanton N6/N7、Frances Harper N6、Ida B. Wells N6），
因为它是整门课的"裂缝"。老师说这是**最高频考点**之一。

事实骨架：**第 15 修正案（1870 通过）**禁止因"种族、肤色、曾被奴役"剥夺投票权——
也就是给**黑人男性**投票权，但**不给任何女性**。运动当场为这件事**分裂成两派**（1869）：

- **NWSA**（Stanton/Anthony）：反对这条修正案，"不给女人就一起别给"，
  Stanton 还**说出过种族歧视的话**（暗示"无知的"黑人男性、移民男性不该排在
  "有文化的"白人女性前面）。
- **AWSA**（Lucy Stone 等温和派）：黑人男性先拿到也是进步，该支持。
- **Frances Harper** 选了支持先通过第 15 修正案——"对我的同胞，命比票急"。

careful framing（AP DBQ 必用）：同一个 Stanton，1848 借"人人平等"开第一枪，
1869 却为了"自己人先赢"把黑人推到后面。**勇敢和狭隘是同一个人**——
写 essay 千万别只夸她，也别把她写成纯反派。两派对峙了约 20 年。

记忆口诀：**15th = 种族（黑人男性），19th = 性别（女性），中间隔着一场内战和一场分裂**。`,
          en: `This thread is **touched by all three lenses** (Stanton N6/N7, Frances Harper N6,
Ida B. Wells N6), because it is the "crack" of the whole topic. Teacher said it's
one of the **most frequently tested** points.

Fact skeleton: the **15th Amendment (ratified 1870)** barred denying the vote on
grounds of "race, color, or previous condition of servitude" — meaning **Black men**
got the vote, but **no women** did. The movement **split into two wings** over this (1869):

- **NWSA** (Stanton/Anthony): opposed the amendment, "if not women, then no one,"
  and Stanton **said words of racial contempt** (implying "ignorant" Black men and
  immigrant men should not stand ahead of "cultured" white women).
- **AWSA** (moderates like Lucy Stone): Black men getting it first is progress too,
  support it.
- **Frances Harper** chose to support passing the 15th first — "for my own people,
  life is more urgent than the ballot."

Careful framing (essential for AP DBQ): the same Stanton fired the first shot in 1848
in the name of "all are equal," yet in 1869 pushed Black people behind her to let
"her own people" win first. **Courage and narrowness were the same person** — in an
essay, never just praise her, and never make her a pure villain. The two wings
quarreled about 20 years.

Mnemonic: **15th = race (Black men), 19th = sex (women), with a civil war and a
split in between.**`,
        },
      },
    },

    {
      id: 'frances-harper-bound-together',
      termCn: 'Frances Harper /「我们都被绑在一起」',
      termEn: 'Frances Harper / "We Are All Bound Up Together"',
      standardRef: ['APUSH KC-5.3.II', 'CA HSS 8.8'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'frances-harper',
        nodeIds: ['feh-n1', 'feh-n5', 'feh-n8'],
        xiaoweiNote: {
          cn: `视角二整条线就是她。**Frances Ellen Watkins Harper**，非裔女诗人 + 活动家，
1825 年生在马里兰一个**自由黑人**家庭。

考点关键句：**1866 年**在美国平权协会（AERA）成立的同场大会上，她说出那句被记住的话——
**"We are all bound up together"（我们都被绑在一起）**。意思是社会像一根绳子，
你不能只松开自己这一段，让别人那一段继续勒着。

她为什么重要（AP 角度）：她是**交叉性（intersectionality）**最早的活例子——
既是女人、又是黑人，在那个逼人"为女人争 or 为黑人争"二选一的年代，她**拒绝二选一**。
她提醒白人女权领袖："你说的'所有女人'，包不包括我这样的黑人女性？"

故事没细讲、但可以加分的一个点：**1896 年她是 NACW（全国有色人种妇女协会）创始人之一**——
黑人女性因为白人主导的组织不欢迎她们，只好自己另起炉灶。

我喜欢这个角色，因为她是"调停者的宿命"：两边都支持、两边都批评，结果两边都嫌她不够纯。`,
          en: `Lens 2 is entirely her. **Frances Ellen Watkins Harper**, African American
poet and activist, born 1825 to a **free Black** family in Maryland.

Key exam sentence: in **1866**, at the same convention where the American Equal
Rights Association (AERA) was founded, she said the line that would be remembered —
**"We are all bound up together."** It means society is like a rope; you can't loosen
only your own length and leave another's length still cutting in.

Why she matters (AP angle): she's one of the earliest living examples of
**intersectionality** — both a woman and Black, and in an era that forced people to
choose "fight for women OR fight for Black people," she **refused to choose.**
She reminded white suffrage leaders: "does the 'all women' you speak of include a
Black woman like me?"

A bonus point the story didn't dwell on: **in 1896 she was a co-founder of the NACW
(National Association of Colored Women)** — Black women had to start their own group
because white-led organizations didn't welcome them.

I like this character because she shows the "mediator's fate": supports both sides,
criticizes both sides, and both sides find her not pure enough.`,
        },
      },
    },

    {
      id: 'ida-wells-1913-parade',
      termCn: 'Ida B. Wells / 1913 游行队尾',
      termEn: 'Ida B. Wells / 1913 Parade & Back-of-the-Line',
      standardRef: ['APUSH KC-7.2.II', 'CA HSS 8.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ida-b-wells-receiving-end',
        nodeIds: ['ibw-n1', 'ibw-n5', 'ibw-n8'],
        xiaoweiNote: {
          cn: `视角三（defaultLens）整条线就是她。**Ida B. Wells**，反私刑记者，
1862 年出生时还是奴隶。她查私刑查到**死亡威胁、报馆被烧**，被警告再回孟菲斯就没命，
也没让她闭嘴。（注意：是"死亡威胁 + 报馆被烧"，不是子弹或悬赏。）

考点关键事件：**1913 年 3 月 3 日**华盛顿妇女大游行（Wilson 就职前一天，宾州大道，
约 5000-8000 人，是当时最大的妇女游行）。组织者为了**不得罪南方白人妇女**，
要求黑人妇女走在**队尾、单独成组**。

Wells 的反抗方式特别值得记：她**没当场吵闹**，而是退进围观人群，等伊利诺伊代表团
经过时，平静地从人群里走出来，**挤进队列、和白人妇女并排走在前面**——走回她本该站的位置。
照片传遍全国。

她还**自己建组织**：同年在芝加哥创办 **Alpha Suffrage Club**——**芝加哥第一个**
黑人妇女选举权俱乐部（注意措辞是"芝加哥第一个"，不是"美国第一个"）。

careful framing：一场喊"所有女人"的游行，出发前先按肤色给人排了座次。
这是反 Whig（反凯歌叙事）的绝佳 DBQ 素材——别把运动写成"姐妹团结"。`,
          en: `Lens 3 (the defaultLens) is entirely her. **Ida B. Wells**, anti-lynching
journalist, born into slavery in 1862. Her reporting on lynching brought
**death threats and her press burned**, with warnings she'd be killed if she returned
to Memphis — and still it didn't shut her up. (Note: it's "death threats + press burned,"
not bullets or a bounty.)

Key tested event: the **March 3, 1913** Washington women's parade (the day before
Wilson's inauguration, on Pennsylvania Avenue, about 5,000-8,000 people, the largest
women's parade of its time). To **avoid offending white women from the South**, the
organizers asked Black women to march at the **back, set apart in their own group.**

Wells's form of resistance is worth remembering: she **didn't quarrel on the spot.**
She drew into the crowd, and when the Illinois delegation passed, she calmly stepped
out and **slipped into the line, marching at the front beside the white women** — back
to the place that was hers. The photo spread across the country.

She also **built her own organization**: that same year she founded the
**Alpha Suffrage Club** in Chicago — the **first** Black women's suffrage club
**in Chicago** (note the wording: "first in Chicago," not "first in America").

Careful framing: a parade crying "all women" ranked people by skin color before it
even set off. This is excellent anti-triumphalist DBQ material — don't write the
movement as "sisters united."`,
        },
      },
    },

    {
      id: 'nawsa-vs-nwp-alice-paul',
      termCn: 'NAWSA vs NWP / 温和派 vs 激进派 (Alice Paul)',
      termEn: 'NAWSA vs NWP / Moderates vs Militants (Alice Paul)',
      standardRef: ['APUSH KC-7.1.II', 'AP Gov: Voting Rights'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'cady-stanton', nodeId: 'ecs-n7', context: '1890 两派和解合并成 NAWSA，Stanton 任首任主席（象征性）' },
          { lens: 'ida-b-wells-receiving-end', nodeId: 'ibw-n1', context: '1913 华盛顿大游行就是 NAWSA/Alice Paul 那一脉组织的（Wells 被要求走队尾的那场）' },
        ],
      },
      standaloneText: {
        cn: `进步时代（Progressive Era，约 1890s-1920s）的最后冲刺，运动里有**两种打法**，
这是 AP 很爱考的"策略对比"。故事里 1913 游行的组织方就是激进派，但没把两派讲清楚，我补一下。

**NAWSA（全国美国妇女选举权协会）= 温和派**
- 1890 年由原来分裂的两派（NWSA + AWSA）合并而成，Stanton 任首任主席（象征性，
  实务由 Anthony 一代主导），后来 Carrie Chapman Catt 领导。
- 打法：**州一级一个一个争**（state-by-state），再推联邦修正案；走体制内、温和游说路线。
- 这就是故事里说的"为拉拢南方白人妇女，越来越回避种族问题"的那一派。

**NWP（全国妇女党）= 激进派，领头是 Alice Paul（爱丽丝·保罗）**
- Alice Paul 在英国学过激进抗议手法，回美国后嫌 NAWSA 太慢。
- 她组织了 **1913 年华盛顿大游行**（就是 Ida B. Wells 被要求走队尾的那场）。
- 1917 年起，NWP 在**白宫门口长期纠察（picketing）**，举牌质问 Wilson 总统：
  你打一战说要"为民主而战"，自己国家的女人却不能投票？很多纠察者被捕、
  在狱中绝食、被强制喂食——这些画面给运动赢来巨大同情。

🔗 收尾：两种打法**合力**促成 1920 年第 19 修正案——
NAWSA 的稳扎稳打 + NWP 的施压逼宫，缺一不可。
AP 题目爱问"温和 vs 激进策略各有什么得失"，记住：**Catt 走州路线，Paul 走对抗路线**。`,
        en: `In the final sprint of the Progressive Era (roughly 1890s-1920s), the movement
had **two playbooks** — a "strategy contrast" AP loves to test. The organizers of the
1913 parade in the story were the militant wing, but the story didn't lay out the two
sides clearly, so let me fill it in.

**NAWSA (National American Woman Suffrage Association) = the moderates**
- Formed in 1890 by merging the two split wings (NWSA + AWSA); Stanton was its first
  president (symbolic; Anthony's generation ran things in practice), later led by
  Carrie Chapman Catt.
- Playbook: win **state by state** first, then push a federal amendment; work inside
  the system with moderate lobbying.
- This is the wing the story describes as "increasingly avoiding the question of race
  to draw in white women of the South."

**NWP (National Woman's Party) = the militants, led by Alice Paul**
- Alice Paul learned militant protest tactics in Britain and, back home, found NAWSA
  too slow.
- She organized the **1913 Washington parade** (the one where Ida B. Wells was told to
  march at the back).
- From 1917, the NWP held a long-running **picket at the White House gates**, holding
  signs that challenged President Wilson: you fight World War I "to make the world safe
  for democracy," yet your own country's women can't vote? Many picketers were arrested,
  went on hunger strike in jail, and were force-fed — images that won the movement
  enormous sympathy.

🔗 Payoff: the two playbooks **together** produced the 19th Amendment in 1920 —
NAWSA's steady state-by-state work + the NWP's pressure campaign, neither alone enough.
AP questions love "the gains and losses of moderate vs. militant strategy" — remember:
**Catt took the state route, Paul took the confrontation route.**`,
      },
      xiaoweiNote: {
        cn: `老师说这是 AP**很爱考的策略对比**——选择题或短答常问"哪个组织走州路线 / 哪个走
白宫纠察"。我的记忆口诀：**NAWSA = N for "Nice/Negotiate"（温和谈判），
NWP = Paul = Protest（抗议纠察）**。两个都对 1920 有功，别只记一个。`,
        en: `Teacher said this is a strategy contrast **AP loves to test** — multiple choice
or short answer often asks "which group took the state route / which picketed the
White House." My mnemonic: **NAWSA = N for "Nice/Negotiate," NWP = Paul = Protest.**
Both contributed to 1920 — don't remember only one.`,
      },
    },

    {
      id: 'paper-vs-real-1920-1965',
      termCn: '纸面权利 vs 现实兑现（1920 → 1965）',
      termEn: 'Rights on Paper vs Rights in Practice (1920 → 1965)',
      standardRef: ['AP Gov: Voting Rights', 'APUSH KC-8.2.II'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ecs-n9', 'feh-n9', 'ibw-n9'],
        xiaoweiNote: {
          cn: `这个**三个视角的第 9 节都讲到了**（Stanton N9、Frances Harper N9、
Ida B. Wells N9），因为它是这场仗"真正复杂的地方"。老师说这是 AP Gov 的**核心母题**，必考。

事实骨架：**1920 年第 19 修正案**通过——"投票权不得因**性别**剥夺"。
有个反讽细节考试爱考：它的文字**几乎照搬 1870 年的第 15 修正案**，只把"种族"换成"性别"
（就是 Stanton 当年反对过的那条）。

但"所有女人能投票"只是**纸面上**。在南方，黑人女性和黑人男性一样，被
**人头税（poll tax）、识字测验（literacy test）、暴力**挡在投票站外。
她们要再等 **45 年**，到 **1965 年投票权法（Voting Rights Act）**，才**真正**能投票。

所以"妇女拿到选举权"这句话，对前排的白人女性是 1920 年的胜利，
对队尾的黑人女性是又一个 45 年的等待——**同一句话，兑现差了快半个世纪**。

记忆口诀：**1920 是纸，1965 才是票**。算术：**1920 + 45 = 1965**。
AP Gov 喜欢用这个对比讲"de jure（法律上）vs de facto（事实上）平等"。`,
          en: `This is covered by **Node 9 in all three lenses** (Stanton N9, Frances Harper N9,
Ida B. Wells N9), because it's "the true complexity" of this fight. Teacher said it's a
**core motif of AP Gov** — definitely tested.

Fact skeleton: the **19th Amendment of 1920** passed — "the vote shall not be denied
on account of **sex**." A favorite ironic detail: its wording **almost copies the 15th
Amendment of 1870**, just swapping "race" for "sex" (the very one Stanton had opposed).

But "all women can vote" was only **on paper.** In the South, Black women, like Black
men, were kept from the polls by **poll taxes, literacy tests, and violence.** They had
to wait another **45 years**, until the **Voting Rights Act of 1965**, to **truly** vote.

So the sentence "women won the vote" was, for white women at the front, the victory of
1920; for Black women at the back, another 45 years of waiting — **the same sentence,
cashed almost half a century apart.**

Mnemonic: **1920 is paper, 1965 is the ballot.** Arithmetic: **1920 + 45 = 1965.**
AP Gov uses this contrast to teach "de jure (in law) vs de facto (in fact) equality."`,
        },
      },
    },

    {
      id: 'movement-internal-contradictions',
      termCn: '运动内部的种族裂缝（反凯歌叙事）',
      termEn: 'The Movement\'s Internal Racial Fracture (Anti-Triumphalist)',
      standardRef: ['APUSH KC-5.3.II', 'AP DBQ rubric'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ecs-n6', 'feh-n5', 'ibw-n7'],
        xiaoweiNote: {
          cn: `这个老师特别强调——和启蒙运动那个"内部矛盾"卡一样，**AP DBQ 一定考**。
故事的整个设计就是为了让你看见它：同一个"先给谁投票权"，三个主角三种站位。

妇女选举权运动喊"所有女人"，但是：
- **Stanton** 1869 年为白人女性选票反对先给黑人男性投票，**说过种族歧视的话**。
- **NAWSA** 合并后为拉拢南方白人妇女，**越来越回避种族**，甚至默许
  "白人女性的票能帮白人稳住南方政治"的论调。
- **1913 游行**把黑人妇女**排到队尾**（Ida B. Wells 拒绝走队尾）。
- **黑人女性**被白人主导的组织排斥，只能**自办**（NACW、Alpha Suffrage Club）。
- **1920 年**"所有女人"拿到票，但南方黑人女性其实要**等到 1965** 才真正能投。

AP DBQ 经典提问："一场为'平等'而战的运动，自己内部却按种族排座次——
它争来的'平等'还算'平等'吗？"

这不是说妇女选举权是骗局——和启蒙运动一样，是说**理念和兑现之间有几十年的差距**。
**Frances Harper 和 Ida B. Wells**，就是把"所有女人"里的"所有"真正变普遍的人。

写 essay 模板：
1. 承认运动的进步意义（72 年组织化抗争 + 第 19 修正案是选举权扩大里程碑）。
2. 列出至少 3 个种族裂缝案例（Stanton 1869、1913 队尾、1920→1965 的兑现差）。
3. 用 Harper / Wells 作为"运动的真正良心"——她们比主流派更认真对待"所有女人"。
4. 结论：选举权扩大是一个**未完成的项目**（unfinished project），不是 1920 年的完成品。`,
          en: `Teacher especially emphasized this — like the Enlightenment "internal
contradictions" card, **AP DBQ definitely tests it.** The whole story is designed to
make you see it: the same "who gets the vote first," three characters, three stances.

The suffrage movement cried "all women," but:
- **Stanton**, in 1869, opposed the vote for Black men first to win it for white women,
  and **said words of racial contempt.**
- **NAWSA**, after the merger, **increasingly avoided race** to draw in white women of
  the South, even tolerating the argument that "white women's votes could help white
  people hold the politics of the South."
- The **1913 parade** ranked Black women to the **back** (Ida B. Wells refused).
- **Black women** were shut out of white-led organizations and had to **build their own**
  (NACW, Alpha Suffrage Club).
- In **1920** "all women" got the vote, yet Black women in the South really had to
  **wait until 1965** to truly cast a ballot.

Classic AP DBQ: "A movement fighting for 'equality' that ranked its own members by race —
was the 'equality' it won really equality?"

This doesn't mean suffrage was a fraud — like the Enlightenment, it means there's a
decades-long gap between idea and practice. **Frances Harper and Ida B. Wells** were the
ones who made the "all" in "all women" actually universal.

Essay template:
1. Acknowledge the movement's progress (72 years of organized struggle + the 19th
   Amendment as a milestone in expanding suffrage).
2. List at least 3 racial-fracture cases (Stanton 1869, the 1913 back-of-the-line,
   the 1920→1965 gap in delivery).
3. Use Harper / Wells as "the movement's true conscience" — they took "all women" more
   seriously than the mainstream did.
4. Conclusion: expanding suffrage is an **unfinished project**, not something completed
   in 1920.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1848 年，Stanton 在《情感宣言》里写下"所有男人和女人生而平等"，
点燃了整场运动——可 1869 年，为了让白人女性先拿到票，她公开反对先给黑人男性投票，
还说出过种族歧视的话。

同一个人，怎么会同时做这两件事？如果是 Stanton 本人坐在你面前，她可能怎么解释？`,
      en: `In 1848 Stanton wrote "all men and women are created equal" in the Declaration
of Sentiments and lit the whole movement — yet in 1869, to let white women get the vote
first, she publicly opposed the vote for Black men and said words of racial contempt.

How could the same person do both? If Stanton were sitting in front of you, how might
she try to explain it?`,
      hintCn: `提示：可以从两个角度想——(1) Stanton 心里那个"所有女人"，可能从一开始就主要指
"白人、受过教育、有产之家的女人"，一旦变成要争输赢的政治仗，她的"所有"就开始挑人；
(2) 或者她自己也知道这是矛盾，只是在"先让自己人赢"的诱惑面前没守住 1848 年的初心。
故事 N8 里她自己承认"勇敢和狭隘是同一个我"。

进阶思考：你能不能找到一个今天的例子——一群人在争一件正当的好事，
争着争着却把更没声音的另一些人忘了、甚至挡在外面？这种矛盾是个人问题，还是时代问题？`,
      hintEn: `Hint: think from two angles — (1) the "all women" in Stanton's heart may
have mainly meant "white, educated, propertied women" from the start, and once it became
a political fight to be won, her "all" began to pick and choose; (2) or she knew it was a
contradiction but couldn't hold to her 1848 conviction against the temptation to "let her
own people win first." In Node 8 she herself admits "courage and narrowness were the same me."

Going deeper: can you find a present-day example — a group fighting for something rightful
that, as the fight goes on, forgets or shuts out the more voiceless others? Is such a
contradiction a personal failing or a feature of the era?`,
      conceptsActivated: ['seneca-falls-1848', 'fifteenth-amendment-split', 'movement-internal-contradictions'],
    },
    {
      id: 'q2',
      cn: `1869 年运动分裂时，Frances Harper 拒绝在"为女人争"和"为黑人争"之间二选一。
她说"我们都被绑在一起"，结果两边都嫌她不够纯——白人女权派嫌她提种族扫兴，
一些黑人男性盟友嫌她同时争女权分散力量。

如果你是 AP 老师，让你出一道 DBQ 题，分析"拒绝站队"到底是软弱还是更难的勇敢，
你会怎么提问？`,
      en: `When the movement split in 1869, Frances Harper refused to choose between
"fighting for women" and "fighting for Black people." She said "we are all bound up
together," and both sides found her not pure enough — white suffragists thought she
spoiled things by raising race, and some Black male allies thought she scattered their
strength by also fighting for women's rights.

If you were an AP teacher writing a DBQ on whether "refusing to take a side" is weakness
or a harder kind of courage, how would you phrase the question?`,
      hintCn: `提示：DBQ 通常会给学生几个 primary source（Harper 1866 年的演讲、第 15 修正案分裂时
两派的文字、黑人女性被迫自办 NACW 的记录），让学生分析"调停者到底改变了什么、没改变什么"。
没有标准答案，重要的是用证据。

可能的提问角度：
- "Frances Harper 一辈子说'我们都被绑在一起'，可那根绳子在她活着时一次次在种族那一处断开。
   她是这场运动的良心，还是一个注定徒劳的中间人？用证据论证。"
- "比较 Stanton（选边站）和 Harper（拒绝选边）的策略，哪一种对长远的'平等'更有用？"`,
      hintEn: `Hint: a DBQ would give students primary sources (Harper's 1866 speech, the
two wings' writings during the 15th-Amendment split, records of Black women forced to
found the NACW) and ask students to analyze "what the mediator actually changed and
didn't change." No standard answer — what matters is the use of evidence.

Possible question angles:
- "Frances Harper said all her life 'we are all bound up together,' yet that rope kept
   breaking at the place of race in her lifetime. Was she the conscience of the movement,
   or a middle-person doomed to futility? Argue with evidence."
- "Compare Stanton's strategy (take a side) with Harper's (refuse to choose). Which was
   more useful for long-term 'equality'?"`,
      conceptsActivated: ['frances-harper-bound-together', 'fifteenth-amendment-split', 'movement-internal-contradictions'],
    },
    {
      id: 'q3',
      cn: `1913 年华盛顿妇女大游行，组织者要 Ida B. Wells 和所有黑人妇女走在队尾。
她没有哭诉"请让我进来"，而是平静地从人群里走出来，挤进伊利诺伊代表团，
和白人妇女并排走在前面——用一双脚，走回了她本该站的位置。

1920 年第 19 修正案通过，纸面上"所有女人"都能投票了。可对像 Wells 这样的
南方黑人女性，这个"拿到选举权"是真的吗？她和前排的白人女性，"拿到"的是同一件事吗？`,
      en: `At the 1913 Washington women's parade, the organizers told Ida B. Wells and all
Black women to march at the back. She didn't plead "please let me in"; she calmly stepped
out of the crowd, slipped into the Illinois delegation, and marched at the front beside
the white women — with two feet, walking back to the place that was hers.

In 1920 the 19th Amendment passed, and on paper "all women" could vote. But for a Black
woman of the South like Wells, was that "winning the vote" real? Did she and the white
women at the front "win" the same thing?`,
      hintCn: `提示：先分清"纸面权利"和"现实兑现"。1920 年第 19 修正案禁止因"性别"剥夺投票权，
但南方黑人女性和黑人男性一样，被人头税、识字测验、暴力挡在投票站外——她们要等到
1965 年投票权法才真正能投票（1920 + 45 = 1965）。所以"妇女拿到选举权"对不同的女人，
兑现的时间差了快半个世纪。

进阶思考：历史上还有谁用"直接走回自己的位置 / 把排斥你的话反过来对准对方"这种策略？
（提示：你跑过费城制宪那段历史，1781 年 Mum Bett 听见主人写的"生而自由"，
转头用它去打官司，把自己从"财产"变回"完整的人"——和 Wells 用一双脚走回前排，是同一条线上的接力。
后来 1955 年公交车上拒绝让座的人，也是同一个套路。）`,
      hintEn: `Hint: first separate "rights on paper" from "rights in practice." The 1920
19th Amendment barred denying the vote on account of "sex," but Black women in the South,
like Black men, were kept from the polls by poll taxes, literacy tests, and violence — they
had to wait until the Voting Rights Act of 1965 to truly vote (1920 + 45 = 1965). So
"women won the vote" was cashed, for different women, almost half a century apart.

Going deeper: who else in history used the strategy of "walking straight back to your own
place / aiming the words used to exclude you back at the excluder"? (Hint: in the
constitutional convention topic, in 1781 Mum Bett heard the words her master wrote, "born
free," and turned them around to sue, turning herself from "property" back into a "whole
person" — the same line of relay as Wells walking to the front with two feet. The person
who refused to give up a bus seat in 1955 ran the same playbook.)`,
      conceptsActivated: ['ida-wells-1913-parade', 'paper-vs-real-1920-1965', 'movement-internal-contradictions'],
    },
  ],
};

export default notebook;
