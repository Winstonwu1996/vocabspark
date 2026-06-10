// ─── 同伴笔记本架构 v1 · Women's Suffrage 1848-1920 ─────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
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
// 硬规则：小 U同伴语气 / 双语 / 不掩饰运动内部种族矛盾 (Rule 0) / 文化对应硬禁
// schemaVersion: 1 · notebookVersion: womens-suffrage-1920-v1

export var notebook = {
  topicId: 'womens-suffrage-1920',
  topicNameCn: '妇女选举权 1848-1920',
  topicNameEn: 'Women\'s Suffrage 1848-1920',
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
    en: `Today my teacher told us we're learning about the women's suffrage movement
(1848-1920, a full 72 years). She gave us a sheet with these names:

Elizabeth Cady Stanton, Susan B. Anthony,
Frances Harper, Ida B. Wells, Alice Paul

Plus some key terms: suffrage (the right to vote), Seneca Falls Convention,
Declaration of Sentiments, 15th Amendment, 19th Amendment.

I'm writing these down now. After I read the three stories —
Stanton, Frances Harper, Ida B. Wells — I'll come back and see
whether I can explain each one in my own words.

My teacher also gave us one sentence to write at the top of our notes:
"Don't memorize this as a happy 'sisters united for freedom' story.
Ask instead — did this fight for 'equality' also rank people by race inside itself?"

She said that question is the key to the whole topic. The same question —
"who gets the vote first?" — put the three main characters in three very different spots.
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
        roleCn: '非裔女诗人+活动家，「我们都被绑在一起」，同时为女权和黑人权利发声',
        roleEn: 'African American poet-activist, "We are all bound up together," fought for both women\'s rights and Black rights at once',
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

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'seneca-falls-1848',
      termCn: 'Seneca Falls 大会 / 情感宣言 1848',
      termEn: 'Seneca Falls Convention / Declaration of Sentiments 1848',
      defCn: '1848 年 7 月，一群女人在纽约州小镇 Seneca Falls 开会，写出《情感宣言》，第一次公开要求妇女拥有投票权。这是整场妇女选举权运动公认的起点。',
      defEn: 'In July 1848, a group of women met in Seneca Falls, New York, and wrote the Declaration of Sentiments, publicly demanding the right to vote for women for the first time. This is the recognized starting point of the women\'s suffrage movement.',
      standardRef: ['APUSH KC-4.1.III', 'CA HSS 8.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'cady-stanton',
        nodeIds: ['ecs-n1', 'ecs-n4', 'ecs-n5'],
        xiaoweiNote: {
          cn: `这个我读过！在 Stanton 那条故事线的第 1、4、5 节。

基本事实：**1848 年 7 月 19-20 日**，纽约州 Seneca Falls 小镇，一张茶桌边几个女人仿照《独立宣言》写《情感宣言》。

我抓的考点关键句：Stanton 在那句最有名的话里加了"和女人"——
**"all men and women are created equal"**。
这是妇女选举权运动**公认的起点**。

最容易考的细节：

1. 当时台下约 300 人，还来了男人。
2. 财产权、教育权、监护权那几条，大家都点头。
3. 唯独**妇女投票权**那一条几乎被删掉。
4. 逃奴废奴领袖 Frederick Douglass 站出来公开支持，那一条才**险险通过**。

我的记忆口诀：**1848 = 第一枪**。从这张茶桌到 1920 年第 19 修正案，整整 **72 年**。
老师说选择题特别爱考"妇女选举权运动从哪一年 / 哪场会开始"——答案永远是 Seneca Falls 1848。`,
          en: `I read this one! It comes up in Stanton's story,.

Basic facts: on **July 19-20, 1848**, in Seneca Falls, New York, a group of women
at a tea table modeled the Declaration of Sentiments on the Declaration of Independence.

Key exam sentence: Stanton added "and women" to the most famous line —
**"all men and women are created equal."**
This is the **recognized starting point** of the women's suffrage movement.

Most testable details:

1. About 300 people showed up — including men.
2. Everyone agreed on property rights, education, and custody.
3. The one clause that almost got cut: **women's right to vote.**
4. Escaped-slave abolitionist Frederick Douglass stood up to support it — and it **barely passed.**

My mnemonic: **1848 = the first shot.** From that tea table to the 19th Amendment
in 1920 is a full **72 years.** Teacher said multiple choice loves to ask "what year /
what meeting did the suffrage movement begin" — the answer is always Seneca Falls 1848.`,
        },
      },
    },

    {
      id: 'stanton-anthony-partnership',
      termCn: 'Stanton-Anthony 联盟',
      termEn: 'Stanton-Anthony Partnership',
      defCn: 'Elizabeth Cady Stanton 和 Susan B. Anthony 是搭档了约 50 年的好搭档。Stanton 负责写文章出主意，Anthony 负责跑全国建组织——两人合力推动整场妇女选举权运动。',
      defEn: 'Elizabeth Cady Stanton and Susan B. Anthony were partners for about 50 years. Stanton wrote the ideas; Anthony traveled the country to build the movement. Together they were the engine of the suffrage campaign.',
      standardRef: ['APUSH KC-6.3.II', 'CA HSS 8.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'cady-stanton',
        nodeIds: ['ecs-n5', 'ecs-n7'],
        xiaoweiNote: {
          cn: `Stanton 那条故事线的第 5 节讲到他们怎么搭上的。1850 年前后 Stanton 遇到
**Susan B. Anthony（苏珊·安东尼）**——两人合作约 **50 年**，是整场运动的引擎。

分工特别好记：**Stanton 写、Anthony 跑**。Stanton 口才笔锋硬，负责写檄文、出思想；
Anthony 有钢铁组织力，跑遍全国办分会、收签名。
故事里那句"我点火，她让火烧遍全国"，就是这两人的关系。

故事里没细讲、但 AP 爱单独考 Anthony 的一件事：
**1872 年 Anthony 真的去投了票，被捕受审、被罚款**（她拒绝付）。
这是"公民不服从"（civil disobedience，用故意违法来表达抗议）的经典案例。
如果选择题单独问 Anthony，多半就是问这件 1872 投票被捕的事。

我的记忆口诀：**写的是 Stanton，跑的是 Anthony，被抓的也是 Anthony**。`,
          en: `Section 5 of Stanton's story shows how they teamed up. Around 1850, Stanton met
**Susan B. Anthony** — they worked together for about **50 years**, the engine of
the whole movement.

The split of work is easy to remember: **Stanton wrote, Anthony ran.**
Stanton was sharp with words and ideas. Anthony was an iron organizer who crossed
the country founding chapters and collecting signatures.
The story's line "I lit the fire, she spread it across the country" is exactly right.

One thing the story didn't go deep on — but AP loves to test about Anthony alone:
**in 1872, Anthony actually went and voted, was arrested, tried, and fined**
(she refused to pay). It's a classic civil disobedience case — meaning she broke
the law on purpose to make a point. If a question asks about Anthony specifically,
it's almost always this 1872 voting arrest.

My mnemonic: **Stanton writes, Anthony runs, and Anthony is the one who gets arrested.**`,
        },
      },
    },

    {
      id: 'fifteenth-amendment-split',
      termCn: '第 15 修正案 / 1869 运动分裂',
      termEn: '15th Amendment / The 1869 Split',
      defCn: '第 15 修正案（1870 年通过）规定投票权不能因"种族、肤色、曾被奴役"被剥夺，也就是给了黑人男性投票权，但不给任何女性。这件事让妇女选举权运动在 1869 年分裂成两派，对峙了约 20 年。',
      defEn: 'The 15th Amendment (passed 1870) said voting rights cannot be taken away because of race, skin color, or having been enslaved — giving Black men the vote, but not women. This split the women\'s suffrage movement into two opposing sides in 1869.',
      standardRef: ['APUSH KC-5.3.II', 'AP Gov: Voting Rights'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ecs-n6', 'ecs-n7', 'feh-n6', 'ibw-n6'],
        xiaoweiNote: {
          cn: `三条故事线都碰到了这个时刻（Stanton、Frances Harper、Ida B. Wells 各自的第 6 节），
因为它是整门课最大的"裂缝"。老师说这是**最高频考点**之一。

事实骨架：**第 15 修正案（1870 通过）**禁止因"种族、肤色、曾被奴役"剥夺投票权——
也就是给**黑人男性**投票权，但**不给任何女性**。运动当场为这件事**分裂成两派**（1869）：

1. **NWSA**（Stanton/Anthony 那一派）：反对这条修正案，说"不给女人就一起别给"。Stanton 还**说出过种族歧视的话**，暗示"无知的"黑人男性、移民男性不该排在"有文化的"白人女性前面。
2. **AWSA**（Lucy Stone 等温和派）：认为黑人男性先拿到也是进步，该支持。
3. **Frances Harper** 选了支持先通过第 15 修正案——"对我的同胞，命比票急"。

写 AP 作文要注意：同一个 Stanton，1848 年借"人人平等"开第一枪，1869 年却为了"自己人先赢"把黑人推到后面。**勇敢和狭隘是同一个人**——写 essay 千万别只夸她，也别把她写成纯反派。两派对峙了约 20 年。

记忆口诀：**15th = 种族（黑人男性），19th = 性别（女性），中间隔着一场内战和一场分裂**。`,
          en: `All three storylines hit this moment (Stanton, Frances Harper, and Ida B. Wells
each have a scene around it), because it is the biggest "crack" in the whole topic.
Teacher said it's one of the **most frequently tested** points.

Fact skeleton: the **15th Amendment (passed 1870)** said voting rights can't be taken
away because of "race, color, or previous condition of servitude" — meaning **Black men**
got the vote, but **no women** did. The movement **split into two wings** over this (1869):

1. **NWSA** (Stanton and Anthony's side): opposed the amendment, saying "if not women, then no one." Stanton **said words of racial contempt** — implying "ignorant" Black men and immigrant men should not stand ahead of "cultured" white women.
2. **AWSA** (moderates like Lucy Stone): said Black men getting it first is still progress — support it.
3. **Frances Harper** chose to support the 15th first — "for my people, life is more urgent than the ballot."

Important for AP essays: the same Stanton who fired the first shot in 1848 ("all are equal") pushed Black people behind her in 1869 so "her people" could win first. **Courage and narrowness lived in the same person** — in your essay, don't just praise her, and don't make her a pure villain either. The two wings argued for about 20 years.

Mnemonic: **15th = race (Black men), 19th = sex (women), with a civil war and a split in between.**`,
        },
      },
    },

    {
      id: 'frances-harper-bound-together',
      termCn: 'Frances Harper /「我们都被绑在一起」',
      termEn: 'Frances Harper / "We Are All Bound Up Together"',
      defCn: 'Frances Ellen Watkins Harper 是 19 世纪的非裔女诗人和活动家。她最有名的一句话是"我们都被绑在一起"——意思是社会就像一根绳子，你不能只松开自己那一段，让别人继续被勒着。她是第一批同时为女权和黑人权利发声、拒绝在两者之间二选一的人。',
      defEn: 'Frances Ellen Watkins Harper was a 19th-century African American poet and activist. Her most famous line is "We are all bound up together" — meaning you can\'t free only yourself and leave others still trapped. She was one of the first people to fight for both women\'s rights and Black rights at the same time, refusing to choose one over the other.',
      standardRef: ['APUSH KC-5.3.II', 'CA HSS 8.8'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'frances-harper',
        nodeIds: ['feh-n1', 'feh-n5', 'feh-n8'],
        xiaoweiNote: {
          cn: `Frances Harper 那整条故事线说的都是她。**Frances Ellen Watkins Harper**，非裔女诗人 + 活动家，1825 年生在马里兰一个**自由黑人**家庭。

考点关键句：**1866 年**在美国平权协会（AERA，American Equal Rights Association）成立的同场大会上，她说出那句被记住的话——
**"We are all bound up together"（我们都被绑在一起）**。
意思是：社会像一根绳子，你不能只松开自己这一段，让别人那一段继续勒着。

她为什么重要（AP 角度）：她是**交叉性（intersectionality）**最早的活例子。
"交叉性"就是一个人同时被两种压迫盯着——既是女人、又是黑人。
那个年代逼人在"为女人争"和"为黑人争"之间二选一，她**拒绝二选一**。
她提醒白人女权领袖："你说的'所有女人'，包不包括我这样的黑人女性？"

故事没细讲、但可以加分的一个点：**1896 年她是 NACW（全国有色人种妇女协会）创始人之一**——黑人女性因为白人主导的组织不欢迎她们，只好自己另起炉灶。

她是"调停者的宿命"：两边都支持、两边都批评，结果两边都嫌她不够纯。`,
          en: `Frances Harper's whole storyline is about her. **Frances Ellen Watkins Harper**, African American
poet and activist, was born in 1825 into a **free Black** family in Maryland.

Key exam sentence: in **1866**, at the same convention where the American Equal
Rights Association (AERA) was founded, she said the line history remembered —
**"We are all bound up together."**
It means: society is like a rope — you can't loosen only your own length and leave
someone else's still cutting in.

Why she matters for AP: she's one of the earliest examples of **intersectionality** —
a word that means being pressed down by two kinds of unfairness at once (being both a
woman and Black). In an era that forced people to choose "fight for women OR fight for
Black people," she **refused to choose.**
She reminded white suffrage leaders: "Does the 'all women' you're talking about include
a Black woman like me?"

A bonus point the story didn't go deep on: **in 1896 she was a co-founder of the NACW
(National Association of Colored Women)** — Black women had to build their own organization
because white-led groups didn't welcome them.

She shows the "fate of the mediator": she supported both sides, criticized both sides,
and both sides decided she wasn't "pure enough."`,
        },
      },
    },

    {
      id: 'ida-wells-1913-parade',
      termCn: 'Ida B. Wells / 1913 游行队尾',
      termEn: 'Ida B. Wells / 1913 Parade & Back-of-the-Line',
      defCn: 'Ida B. Wells 是一位反私刑记者。1913 年华盛顿妇女大游行，组织者要求黑人女性走在队尾。她拒绝了，平静地从人群里走出来，走进了白人代表团的队列，站回了她本该站的位置。她还在芝加哥创办了当地第一个黑人妇女选举权俱乐部。',
      defEn: 'Ida B. Wells was an anti-lynching journalist. At the 1913 Washington women\'s parade, organizers told Black women to march at the back. She refused — she calmly stepped out of the crowd, joined the white delegation\'s line, and walked to the place she deserved to be. She also founded Chicago\'s first Black women\'s suffrage club.',
      standardRef: ['APUSH KC-7.2.II', 'CA HSS 8.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ida-b-wells-receiving-end',
        nodeIds: ['ibw-n1', 'ibw-n5', 'ibw-n8'],
        xiaoweiNote: {
          cn: `Ida B. Wells 那整条故事线说的都是她。**Ida B. Wells**，反私刑记者，
1862 年出生时还是奴隶。她调查私刑查到**死亡威胁、报馆被烧**，被警告再回孟菲斯就没命——
她也没让自己闭嘴。（记住措辞：是"死亡威胁 + 报馆被烧"，不是子弹或悬赏。）

考点关键事件：**1913 年 3 月 3 日**华盛顿妇女大游行。这场游行选在 Wilson 就职前一天，
在宾州大道（Pennsylvania Avenue）举行，约 5000-8000 人参加，是当时规模最大的妇女游行。
组织者为了**不得罪南方白人妇女**，要求黑人妇女走在**队尾、单独成组**。

Wells 的反抗方式特别值得记：

1. 她**没当场吵闹**，而是退进围观人群。
2. 等伊利诺伊代表团经过，她平静地从人群里走出来。
3. **挤进队列、和白人妇女并排走在前面**——走回她本该站的位置。
4. 照片传遍全国。

她还**自己建组织**：同年在芝加哥创办 **Alpha Suffrage Club**——**芝加哥第一个**
黑人妇女选举权俱乐部。（注意：是"芝加哥第一个"，不是"美国第一个"。）

写 AP 作文要注意：一场喊"所有女人"的游行，出发前先按肤色给人排了座次。
这是 DBQ 的好素材——别把运动写成"姐妹团结"。`,
          en: `Ida B. Wells' whole storyline is about her. **Ida B. Wells**, anti-lynching
journalist, was born into slavery in 1862. Her reporting on lynching brought
**death threats and her newspaper office was burned down**, with warnings she'd be killed
if she returned to Memphis — and none of it shut her up. (Exact wording: "death threats
+ press burned," not bullets or a bounty.)

Key tested event: the **March 3, 1913** Washington women's parade. The organizers chose
the day before Wilson's inauguration, on Pennsylvania Avenue. About 5,000-8,000 people
marched — the largest women's parade of its time. To **avoid upsetting white women from
the South**, organizers told Black women to march at the **back, separate from everyone else.**

Wells' way of fighting back is worth memorizing:

1. She **didn't argue on the spot.** She stepped back into the crowd watching from the side.
2. When the Illinois delegation walked past, she calmly walked out.
3. She **slipped into the line and marched at the front beside white women** — back to where she belonged.
4. The photo spread across the country.

She also **built her own organization**: that same year she founded the **Alpha Suffrage Club** in
Chicago — the **first** Black women's suffrage club **in Chicago.** (Exact wording: "first in
Chicago," not "first in America.")

For AP essays: a parade shouting "all women" ranked people by skin color before it even
set off. That's solid DBQ material — don't write the movement as "sisters united."`,
        },
      },
    },

    {
      id: 'minor-v-happersett-1875',
      termCn: 'Minor v. Happersett 1875 / 公民身份不等于投票权',
      termEn: 'Minor v. Happersett 1875 / Citizenship Does Not Equal Suffrage',
      defCn: '1875 年，最高法院 9 比 0 裁定：做美国公民不等于自动有投票权，投票资格由各州自己决定。这个判决堵死了"公民就能投票"这条路，逼得妇女选举权运动只好去推一条新的宪法修正案。',
      defEn: 'In 1875, the Supreme Court ruled 9-0: being a U.S. citizen does not automatically mean you can vote — states get to decide who can vote. This ruling killed the "citizens can vote" argument and forced the suffrage movement to push for a brand-new constitutional amendment instead.',
      standardRef: ['APUSH KC-7.1.II', 'AP Gov: Constitutional Amendments'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `第 19 修正案不是运动的第一条路——她们先试过"我们已经有权利了"这条路，
被最高法院堵死，才逼出推新修正案的策略。

**背景**：内战后第 14 修正案（1868）宣布"所有出生或归化的人都是公民"。
Stanton、Anthony 一派立刻说：既然公民，就有投票权——这套逻辑叫 **New Departure（新出路）策略**。
Anthony 1872 年去投票并被捕，用的就是这套论证。

**案件**：密苏里州弗吉尼亚·迈纳（Virginia Minor）1872 年去登记投票被拒，
以丈夫名义起诉。（那年代已婚女性不能独立提告。）

**判决**：1875 年最高法院 **9 比 0 全票裁定**——公民身份与投票权是两回事；
选举资格由各州自行规定；联邦宪法并未赋予女性投票权。

**影响**：New Departure 策略当场死亡。运动只剩一条路：
推一条**专门针对性别的新宪法修正案**。
这正是后来 NAWSA 州一州推进 + NWP 白宫纠察整整 45 年，
1920 年第 19 修正案才通关的根源。

记忆口诀：**Minor = 堵死旧路，逼出修宪策略**。`,
        en: `The 19th Amendment was not the movement's first plan. They first tried arguing
"we already have the right" — but the Supreme Court shut that down, and only then
were they forced into the push-for-a-new-amendment approach.

**Background**: After the Civil War, the 14th Amendment (1868) declared "all persons
born or naturalized in the United States are citizens." Stanton and Anthony's side
immediately argued: if you're a citizen, you can vote. They called this the
**New Departure strategy.** It's the same argument Anthony used when she voted in 1872
and was arrested.

**The case**: Virginia Minor of Missouri was refused voter registration in 1872 and
sued through her husband. (At the time, married women couldn't sue on their own.)

**Ruling**: In 1875 the Supreme Court ruled **9 to 0** — citizenship and voting rights
are two separate things. States control who gets to vote. The federal Constitution does
not give women the right to vote.

**Impact**: The New Departure strategy was finished. The movement had only one path left:
push a **brand-new constitutional amendment specifically about sex.**
This is the root reason NAWSA's state-by-state work plus the NWP's White House picketing
took another 45 years before the 19th Amendment passed in 1920.

Mnemonic: **Minor = old road blocked, forced to build a new one.**`,
      },
      xiaoweiNote: {
        cn: `这个案子没出现在故事里，但 AP 很爱考"为什么运动最后要推第 19 修正案、而不是靠已有的宪法条文"——
答案就是 Minor v. Happersett（1875）：最高法院说公民身份不等于投票权，
各州管这件事，逼得运动没有别的路。

我的记忆钩子：**Minor（迈纳）= 门关上了，只能造新门**。

时间线：第 14 修正案 1868（公民身份）→ Anthony 投票被捕 1872 →
Minor 上诉 → 最高法院否决 1875 → 再等 45 年 → 第 19 修正案 1920。`,
        en: `This case doesn't show up in the stories, but AP loves asking "why did the movement
need the 19th Amendment instead of just using the constitution they already had?"
The answer is Minor v. Happersett (1875): the Supreme Court said citizenship does not
equal the vote, states control it — so the movement had no other road.

My memory hook: **Minor = the door was shut, so they had to build a new one.**

Timeline: 14th Amendment 1868 (citizenship) → Anthony votes and gets arrested 1872 →
Minor appeals → Supreme Court blocks in 1875 → 45 more years → 19th Amendment 1920.`,
      },
    },

    {
      id: 'nawsa-vs-nwp-alice-paul',
      termCn: 'NAWSA vs NWP / 温和派 vs 激进派 (Alice Paul)',
      termEn: 'NAWSA vs NWP / Moderates vs Militants (Alice Paul)',
      defCn: 'NAWSA（全国美国妇女选举权协会）是走温和路线的组织，一个州一个州地争投票权。NWP（全国妇女党）是激进派，领头人是 Alice Paul，靠游行和白宫纠察（picketing，在门口举牌抗议）来施压。两个组织合力促成了 1920 年第 19 修正案。',
      defEn: 'NAWSA (National American Woman Suffrage Association) was the moderate group — they won voting rights state by state. NWP (National Woman\'s Party), led by Alice Paul, was the militant group — they used parades and picketing (standing outside holding signs) to pressure the government. Both together helped pass the 19th Amendment in 1920.',
      standardRef: ['APUSH KC-7.1.II', 'AP Gov: Voting Rights'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyline: 'Stanton 那条故事线', nodeId: 'ecs-n7', context: '1890 两派和解合并成 NAWSA，Stanton 任首任主席（象征性）' },
          { storyline: 'Ida B. Wells 那条故事线', nodeId: 'ibw-n1', context: '1913 华盛顿大游行就是 Alice Paul 那一脉组织的（Wells 被要求走队尾的那场）' },
        ],
      },
      standaloneText: {
        cn: `进步时代（Progressive Era，约 1890s-1920s）的最后冲刺，运动里有**两种打法**。
这是 AP 很爱考的"策略对比"。1913 那场游行的组织方就是激进派，但故事里没把两派讲清楚，我来补上。

**NAWSA（全国美国妇女选举权协会）= 温和派**
- 1890 年由原来分裂的两派（NWSA + AWSA）合并而成。Stanton 任首任主席（象征性；实务由 Anthony 一代主导），后来由 Carrie Chapman Catt 领导。
- 打法：**州一级一个一个争**（state-by-state），再推联邦修正案。走体制内、温和游说路线。
- 代价：为了拉拢南方白人妇女入会，越来越**回避种族问题**，甚至默许"白人女性选票可帮白人稳住南方政治"的说法。

**NWP（全国妇女党）= 激进派，领头是 Alice Paul（爱丽丝·保罗）**
- Alice Paul 在英国学过激进抗议手法，回美国后嫌 NAWSA 太慢。
- 她组织了 **1913 年华盛顿大游行**——就是 Ida B. Wells 被要求走队尾的那场。
- 1917 年起，NWP 在**白宫门口长期纠察（picketing）**，举牌质问 Wilson 总统：你打一战说要"为民主而战"，自己国家的女人却不能投票？很多纠察者被捕、在狱中绝食、被强制喂食——这些画面给运动赢来巨大同情。

最后：两种打法**合力**促成 1920 年第 19 修正案——NAWSA 的稳扎稳打 + NWP 的施压逼宫，缺一不可。
AP 题目爱问"温和 vs 激进策略各有什么得失"，记住：**Catt 走州路线，Paul 走对抗路线**。`,
        en: `In the final sprint of the Progressive Era (roughly 1890s-1920s), the movement
had **two playbooks** — a "strategy contrast" AP loves to test. The organizers of the
1913 parade were the militant side, but the stories didn't lay out both sides clearly,
so let me fill it in.

**NAWSA (National American Woman Suffrage Association) = the moderates**
- Formed in 1890 by merging the two split wings (NWSA + AWSA). Stanton was the first president (symbolic — Anthony's generation ran things in practice), and later Carrie Chapman Catt led the group.
- Their approach: win **state by state** first, then push a federal amendment. Work inside the system, lobby moderately.
- The downside: to pull in white women from the South, they **increasingly avoided talking about race**, even tolerating the idea that "white women's votes could help white people hold Southern politics."

**NWP (National Woman's Party) = the militants, led by Alice Paul**
- Alice Paul learned aggressive protest tactics in Britain and came home thinking NAWSA was too slow.
- She organized the **1913 Washington parade** — the same one where Ida B. Wells was told to march at the back.
- Starting in 1917, the NWP held a long-running **picket at the White House gates**, holding signs that called out President Wilson: you're fighting World War I "to make the world safe for democracy" — so why can't women in your own country vote? Many picketers were arrested, went on hunger strike in jail, and were force-fed — images that won the movement enormous public sympathy.

The payoff: the two approaches **together** produced the 19th Amendment in 1920.
NAWSA's steady state work + the NWP's pressure campaign — neither was enough alone.
AP loves asking about the tradeoffs of moderate vs. militant strategy. Remember:
**Catt took the state route, Paul took the confrontation route.**`,
      },
      xiaoweiNote: {
        cn: `老师说这是 AP **很爱考的策略对比**——选择题或短答常问"哪个组织走州路线 / 哪个走白宫纠察"。
我的记忆口诀：**NAWSA = N for "Nice/Negotiate"（温和谈判），NWP = Paul = Protest（抗议纠察）**。
两个都对 1920 有功，别只记一个。`,
        en: `Teacher said this is a strategy contrast **AP loves to test** — multiple choice
or short answer often asks "which group went state by state / which one picketed the
White House." My mnemonic: **NAWSA = N for "Nice/Negotiate," NWP = Paul = Protest.**
Both contributed to 1920 — don't memorize only one.`,
      },
    },

    {
      id: 'paper-vs-real-1920-1965',
      termCn: '纸面权利 vs 现实兑现（1920 → 1965）',
      termEn: 'Rights on Paper vs Rights in Practice (1920 → 1965)',
      defCn: '1920 年第 19 修正案说"所有女人"都能投票，但那只是纸面上的权利。南方的黑人女性仍被人头税、识字测验和暴力挡在投票站外，要再等 45 年，到 1965 年投票权法（Voting Rights Act）才真正能投票。',
      defEn: 'The 19th Amendment in 1920 said "all women" could vote — but that was only on paper. Black women in the South were still blocked from voting by poll taxes, literacy tests, and violence. They had to wait 45 more years — until the Voting Rights Act of 1965 — to truly cast a ballot.',
      standardRef: ['AP Gov: Voting Rights', 'APUSH KC-8.2.II'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ecs-n9', 'feh-n9', 'ibw-n9'],
        xiaoweiNote: {
          cn: `三条故事线都在第 9 节讲到了这个时刻（Stanton、Frances Harper、Ida B. Wells 各自的第 9 节），
因为它是这场仗"真正复杂的地方"。老师说这是 AP Gov 的**核心母题**，必考。

事实骨架：**1920 年第 19 修正案**通过——"投票权不得因**性别**剥夺"。
有个反讽细节考试爱考：它的文字**几乎照搬 1870 年的第 15 修正案**，只把"种族"换成"性别"——
就是 Stanton 当年激烈反对过的那条。

但"所有女人能投票"只是**纸面上**。在南方，黑人女性和黑人男性一样，被以下三件事挡在投票站外：

1. **人头税（poll tax）**——投票前要先交钱，穷人根本交不起。
2. **识字测验（literacy test）**——出题人故意出超难题，随意让黑人"不及格"。
3. **暴力威胁**——真的去投票可能遭到报复。

她们要再等 **45 年**，到 **1965 年投票权法（Voting Rights Act）**，才**真正**能投票。

所以"妇女拿到选举权"这句话，对前排的白人女性是 1920 年的胜利，
对队尾的黑人女性是又一个 45 年的等待——**同一句话，兑现差了快半个世纪**。

记忆口诀：**1920 是纸，1965 才是票**。算术：**1920 + 45 = 1965**。
AP Gov 喜欢用这个对比讲"de jure（法律上）vs de facto（事实上）平等"。`,
          en: `All three storylines hit this in their ninth scene (Stanton, Frances Harper, and
Ida B. Wells each cover it), because it's "the true complexity" of this fight. Teacher
said it's a **core motif in AP Gov** — definitely tested.

Fact skeleton: the **19th Amendment of 1920** passed — "the vote shall not be denied
on account of **sex**." A tested ironic detail: its exact wording **almost copies the 15th
Amendment of 1870**, just swapping "race" for "sex" — the very amendment Stanton had
fought hard against.

But "all women can vote" was only **on paper.** In the South, Black women — like Black
men — were kept from the polls by three things:

1. **Poll tax** — you had to pay money before voting. Many people couldn't afford it.
2. **Literacy test** — officials made the tests impossibly hard and graded them unfairly.
3. **Violence** — actually showing up to vote could get you hurt.

They had to wait another **45 years**, until the **Voting Rights Act of 1965**, to **truly** vote.

So the line "women won the vote" meant the victory of 1920 for white women at the front —
and another 45 years of waiting for Black women at the back.
**The same sentence, delivered almost half a century apart.**

Mnemonic: **1920 is paper, 1965 is the real ballot.** The math: **1920 + 45 = 1965.**
AP Gov uses this contrast to teach the difference between
"de jure (equal by law)" and "de facto (equal in real life)."`,
        },
      },
    },

    {
      id: 'movement-internal-contradictions',
      termCn: '运动内部的种族裂缝',
      termEn: 'The Movement\'s Internal Racial Fracture',
      defCn: '妇女选举权运动喊"所有女人"，但运动内部却按种族给人排座次——Stanton 1869 年说过种族歧视的话，1913 年游行要黑人女性走队尾，1920 年第 19 修正案对南方黑人女性只是纸面权利。这种"为平等而战、内部却不平等"的矛盾，是 AP 考试最爱考的核心问题之一。',
      defEn: 'The women\'s suffrage movement shouted "all women" — but inside the movement, people were ranked by race. Stanton said racist things in 1869, the 1913 parade put Black women at the back, and the 19th Amendment in 1920 was only on paper for Black women in the South. This gap between the ideals they fought for and how they actually treated people inside the movement is one of AP\'s most tested topics.',
      standardRef: ['APUSH KC-5.3.II', 'AP DBQ rubric'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ecs-n6', 'feh-n5', 'ibw-n7'],
        xiaoweiNote: {
          cn: `老师特别强调这个——**AP DBQ 一定考**。三条故事线的整体设计就是为了让你看见它：
同一个"先给谁投票权"，三个主角三种站位。

妇女选举权运动喊"所有女人"，但是：

1. **Stanton** 1869 年为白人女性选票反对先给黑人男性投票，**说过种族歧视的话**。
2. **NAWSA** 合并后为拉拢南方白人妇女，**越来越回避种族**，甚至默许"白人女性的票能帮白人稳住南方政治"的说法。
3. **1913 游行**把黑人妇女**排到队尾**（Ida B. Wells 拒绝走队尾）。
4. **黑人女性**被白人主导的组织排斥，只能**自己建**（NACW、Alpha Suffrage Club）。
5. **1920 年**"所有女人"拿到票，但南方黑人女性其实要**等到 1965** 才真正能投。

AP DBQ 经典提问："一场为'平等'而战的运动，自己内部却按种族排座次——它争来的'平等'还算'平等'吗？"

这不是说妇女选举权是骗局——是说**理念和兑现之间有几十年的差距**。
**Frances Harper 和 Ida B. Wells**，就是把"所有女人"里的"所有"真正变普遍的人。

写 essay 的四步框架：

1. 承认运动的进步意义——72 年组织化抗争 + 第 19 修正案是选举权扩大的里程碑。
2. 列出至少 3 个种族裂缝案例——Stanton 1869、1913 队尾、1920→1965 的兑现差。
3. 用 Harper / Wells 作为"运动的真正良心"——她们比主流派更认真对待"所有女人"。
4. 结论：选举权扩大是一个**未完成的项目**（unfinished project），不是 1920 年的完成品。`,
          en: `Teacher especially emphasized this one — **AP DBQ definitely tests it.**
The whole structure of the three storylines is designed to make you see it:
the same question, "who gets the vote first?" — three characters, three very different stances.

The suffrage movement cried "all women," but:

1. **Stanton**, in 1869, opposed giving Black men the vote first in order to win it for white women, and **said words of racial contempt.**
2. **NAWSA**, after the merger, **increasingly avoided race** to pull in white women from the South, even tolerating the argument that "white women's votes could help white people hold Southern politics."
3. The **1913 parade** ranked Black women to the **back** — and Ida B. Wells refused to go there.
4. **Black women** were shut out of white-led organizations and had to **build their own** (NACW, Alpha Suffrage Club).
5. In **1920** "all women" got the vote on paper — but Black women in the South really had to **wait until 1965** to truly cast a ballot.

Classic AP DBQ question: "A movement fighting for 'equality' that ranked its own members by race — was the 'equality' it won really equality?"

This doesn't mean suffrage was a lie — it means there's a decades-long gap between ideas and practice. **Frances Harper and Ida B. Wells** were the people who tried to make the "all" in "all women" actually mean everyone.

Four-step essay framework:

1. Acknowledge the movement's progress — 72 years of organized struggle + the 19th Amendment is a milestone in expanding voting rights.
2. Give at least 3 racial-fracture examples — Stanton 1869, the 1913 back-of-the-line, the 1920→1965 gap in delivery.
3. Use Harper and Wells as "the movement's true conscience" — they took "all women" more seriously than the mainstream did.
4. Conclusion: expanding suffrage was an **unfinished project**, not something completed in 1920.`,
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
      hintCn: `提示：可以从两个角度想——
(1) Stanton 心里那个"所有女人"，可能从一开始就主要指"白人、受过教育、有产之家的女人"，一旦变成要争输赢的政治仗，她的"所有"就开始挑人；
(2) 或者她自己也知道这是矛盾，只是在"先让自己人赢"的诱惑面前没守住 1848 年的初心。
Stanton 那条故事线里，她自己最后承认"勇敢和狭隘是同一个我"。

进阶思考：你能不能找到一个今天的例子——一群人在争一件正当的好事，争着争着却把更没声音的另一些人忘了、甚至挡在外面？这种矛盾是个人问题，还是时代问题？`,
      hintEn: `Hint: think from two angles —
(1) The "all women" in Stanton's head may have mainly meant "white, educated, propertied women" from the start. Once it became a political fight to win, her "all" started picking and choosing.
(2) Or maybe she knew it was a contradiction — she just couldn't hold onto her 1848 beliefs when the temptation to "let her own people win first" was right there.
In Stanton's storyline, she eventually admits "courage and narrowness were the same me."

Going deeper: can you find a present-day example — a group fighting for something good and right that, as the fight goes on, forgets or shuts out people with even less power? Is that kind of contradiction a personal failure or just how the era works?`,
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
      hintCn: `提示：DBQ 通常会给你几份当时的原始文献（比如 Harper 1866 年的演讲原文、两派在第 15 修正案分裂时写的文字、黑人女性被迫自办 NACW 的记录），让你分析"拒绝站队的人到底改变了什么、没改变什么"。没有标准答案，重要的是用证据说话。

可能的提问角度：

- "Frances Harper 一辈子说'我们都被绑在一起'，可那根绳子在她活着时一次次在种族那一处断开。她是这场运动的良心，还是一个注定徒劳的中间人？用证据论证。"
- "比较 Stanton（选边站）和 Harper（拒绝选边）的做法，哪一种对长远的'平等'更有用？"`,
      hintEn: `Hint: a DBQ would give you a few real historical documents to work with — like Harper's 1866 speech, writings from the two sides during the 15th-Amendment split, and records of Black women having to start the NACW on their own. You'd analyze "what did refusing to pick a side actually change — and what didn't it change?" There's no single right answer — what matters is using the evidence.

Possible question angles:

- "Frances Harper said all her life 'we are all bound up together' — yet that rope kept breaking at the place of race while she was alive. Was she the conscience of the movement, or a go-between doomed to fail? Argue with evidence."
- "Compare Stanton's approach (pick a side) with Harper's (refuse to choose). Which one did more for long-term equality?"`,
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
