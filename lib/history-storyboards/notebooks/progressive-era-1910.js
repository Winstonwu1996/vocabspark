// ─── 同伴笔记本架构 v1 · Progressive Era 1890-1920 ───────────────
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
//   - storyboard 提供情感锚点（TR 改革总统 / Jane Addams 调停者 / Triangle 锁门后的移民女工三条线）
//   - notebook 提供考点闭环（16/17/18/19 修正案 / 直接民主工具 / 女性童工改革 / 政府角色转变 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 7 · KC-7.1.II（进步主义改革）/ Topic 7.2-7.3
//   - AP US Government & Politics（公民参与 / 改革修正案 / 直接民主）
//   - California HSS 11.2
//
// 事实对账本（progressive-era-1910-factledger.md，已核实）：
//   - TR 保护地约 2.3 亿英亩公共土地 / 含 150+ 片国家森林（"片数"不是"英亩"）/ 5 国家公园 / 18 国家纪念地
//     绝不写"1.5 亿英亩国家森林"（账本 #12 单位错配硬错）
//   - Triangle 火灾 146 死（123 女 + 23 男），1911.3.25，绝不写 145
//   - 两名老板 1911.12 被判无罪（manslaughter）
//
// 硬规则（AUTHORING_PIPELINE.md）：cultural ban（全程用美国/英语真实术语，绝不用中国特定词）/
//   小薇同伴语气 / 双语 / standaloneText 300-500 字 / 每卡 standardRef + examFrequency
//
// schemaVersion: 1 · notebookVersion: progressive-era-1910-v1

export var notebook = {
  topicId: 'progressive-era-1910',
  topicNameCn: '进步时代',
  topicNameEn: 'The Progressive Era',
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
    cn: `今天历史课要学进步时代（Progressive Era，1890-1920）。老师说这是 APUSH 必考的一大块——Period 7。她在白板上写了这些名字：

Theodore Roosevelt（西奥多·罗斯福）、Jane Addams（简·亚当斯）、Upton Sinclair（厄普顿·辛克莱）

还有一串词：muckraker（扒粪记者）、trust-busting（打托拉斯）、Triangle Shirtwaist Fire（Triangle 制衣厂大火）、settlement house（睦邻之家）、conservation（自然保护）、eugenics（优生学），以及第 16、17、18、19 四条宪法修正案。

我先把这些抄下来。等下我要读三个故事——一个改革总统（Roosevelt）、一个调停者（Jane Addams）、还有一个死在锁着的门后的移民女工——读完再回来对照这张单子，看我能不能解释每一个。

老师在白板角落写了一句话，我也抄到笔记本第一页：「进步是真的，但你要会问一句——进步，到底进步到了谁身上？」`,
    en: `Today's history class is on the Progressive Era (1890-1920). My teacher said this is a big required chunk of APUSH — Period 7. She wrote these names on the board:

Theodore Roosevelt, Jane Addams, Upton Sinclair

Plus a string of terms: muckraker, trust-busting, Triangle Shirtwaist Fire, settlement house, conservation, eugenics, and the 16th, 17th, 18th, 19th constitutional amendments.

Let me copy these down. Soon I'll read three stories — a reform president (Roosevelt), a mediator (Jane Addams), and an immigrant girl who died behind a locked door — and then come back to this list and check whether I can explain each one.

My teacher wrote one line in the corner of the board, and I copied it onto the first page of my notebook: "Progress was real, but you have to learn to ask one question — progress, exactly whom did it reach?"`,
    keyTerms: [
      { cn: '托拉斯（垄断联合体）', en: 'trust (monopoly combination)' },
      { cn: '打托拉斯 / 反垄断执法', en: 'trust-busting' },
      { cn: '扒粪记者（调查揭丑记者）', en: 'muckraker' },
      { cn: '睦邻之家', en: 'settlement house' },
      { cn: '社会工作', en: 'social work' },
      { cn: '自然保护', en: 'conservation' },
      { cn: '直接民主工具（公民立法/公投/罢免）', en: 'initiative / referendum / recall' },
      { cn: '优生学（暗含种族等级的伪科学）', en: 'eugenics' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '西奥多·罗斯福',
        nameEn: 'Theodore Roosevelt',
        ipa: '/ˈθiːədɔːr ˈroʊzəvɛlt/',
        roleCn: '第 26 任总统，打托拉斯+护自然的改革者，同时是优生学/帝国主义推手',
        roleEn: '26th president, trust-busting and conservation reformer, also a backer of eugenics and imperialism',
        mustKnow: true,
        audioKey: 'theodore-roosevelt',
      },
      {
        nameCn: '简·亚当斯',
        nameEn: 'Jane Addams',
        ipa: '/dʒeɪn ˈædəmz/',
        roleCn: 'Hull House 创办者，社会工作先驱，1931 年诺贝尔和平奖',
        roleEn: 'Founder of Hull House, pioneer of social work, 1931 Nobel Peace Prize',
        mustKnow: true,
        audioKey: 'jane-addams',
      },
      {
        nameCn: '厄普顿·辛克莱',
        nameEn: 'Upton Sinclair',
        ipa: '/ˈʌptən sɪnˈklɛər/',
        roleCn: '扒粪记者，《丛林》(The Jungle, 1906) 作者，揭肉联厂黑幕',
        roleEn: 'Muckraker, author of *The Jungle* (1906), exposed the meatpacking industry',
        mustKnow: true,
        audioKey: 'upton-sinclair',
      },
      {
        nameCn: '约翰·缪尔',
        nameEn: 'John Muir',
        ipa: '/dʒɒn mjʊər/',
        roleCn: '自然主义者，1903 年与 TR 在 Yosemite 露营三天，自然保护运动象征',
        roleEn: 'Naturalist, camped with TR at Yosemite in 1903, symbol of the conservation movement',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'muckrakers',
      termCn: '扒粪记者 / 《丛林》/ 1906 食药法',
      termEn: 'Muckrakers / The Jungle / 1906 Pure Food and Drug Act',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'theodore-roosevelt',
        nodeIds: ['tr-n3'],
        xiaoweiNote: {
          cn: `这个我读过！在 Roosevelt 那条线第 3 节。muckraker（扒粪者）这个外号其实是 TR 自己起的——出自一篇 1906 年的演讲，用《天路历程》里一个低头扒地上脏东西的人作比喻。一开始是贬义，后来反而成了"调查揭丑记者"的光荣称号。

故事里那个钻进肉联厂写黑幕的记者，名字课本要你记住：**Upton Sinclair（厄普顿·辛克莱）**，书叫 **《丛林》(The Jungle, 1906)**。全国人读了吃不下饭，民愤直接催生了 **1906 年《纯净食品和药品法》(Pure Food and Drug Act)** 和《肉类检验法》——美国第一批食品安全联邦法律。

考点关键句：进步时代的发动机 = **记者扒 → 民众怒 → 政府改**。muckraking 不是造谣抹黑，是基于调查的报道，是推动立法的正向力量（这是常见误区，老师特意点过）。`,
          en: `I read this! In the Roosevelt lens, Node 3. The nickname muckraker was actually coined by TR himself — from a 1906 speech, using the man in *Pilgrim's Progress* who keeps raking the muck off the ground. It started as an insult, then became a badge of honor for "investigative reporters who expose scandal."

The reporter in the story who slipped into the meatpacking plants — the textbook wants you to know his name: **Upton Sinclair**, and the book is **The Jungle (1906)**. The whole country lost its appetite, and the public fury directly produced the **1906 Pure Food and Drug Act** and the Meat Inspection Act — America's first federal food-safety laws.

Key exam sentence: the engine of the Progressive Era = **reporters dig → the public rages → the government reforms**. Muckraking is not smearing; it's evidence-based reporting, a positive force for legislation (a common misconception my teacher flagged).`,
        },
      },
    },

    {
      id: 'trust-busting',
      termCn: '打托拉斯 / Sherman 与 Clayton 反垄断法',
      termEn: 'Trust-Busting / Sherman & Clayton Antitrust Acts',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'theodore-roosevelt',
        nodeIds: ['tr-n2', 'tr-n4'],
        xiaoweiNote: {
          cn: `Roosevelt 线第 2、4 节讲到了。**trust（托拉斯）**= 把同行买光挤垮、组成的超级垄断联合体（钢、石油、铁路）；**trust-busting** = 政府依反垄断法把它拆开。

故事里 TR 用的武器，课本要你记名字：**1890 年《Sherman 反托拉斯法》(Sherman Antitrust Act)**——第一部联邦反垄断法，但前几任总统几乎没用过，TR 把它"激活"了。1904 年最高法院判政府胜诉，拆散了那个巨型铁路联合体（**Northern Securities** 案，5 比 4），TR 从此得名 trust-buster。那个亲自来想"私下谈"被拒的，就是金融大王 J.P. Morgan。

考点要补一刀（故事没展开）：1914 年又加了一部 **《Clayton 反托拉斯法》(Clayton Antitrust Act)**，堵住 Sherman 法的漏洞、明确禁止某些垄断手段，还保护工会。**Sherman（1890）打头 + Clayton（1914）补强**，这一对经常一起考。

careful framing：反垄断从没"根治"垄断——执法时强时弱，垄断问题 20 世纪反复出现，至今还是议题。`,
          en: `Covered in the Roosevelt lens, Nodes 2 and 4. A **trust** = a giant monopoly combination formed by buying out and crushing rivals (steel, oil, railroads); **trust-busting** = the government breaking it apart under antitrust law.

The weapon TR used — the textbook wants the name: the **1890 Sherman Antitrust Act**, the first federal antitrust law, which earlier presidents had barely used; TR "activated" it. In 1904 the Supreme Court ruled for the government and broke up that giant railroad combination (the **Northern Securities** case, 5–4), and TR earned the name trust-buster. The financier who came in person to "settle it privately" and was refused was J.P. Morgan.

One exam addition (the story doesn't cover it): in 1914 came the **Clayton Antitrust Act**, plugging the Sherman Act's loopholes, banning specific monopoly tactics, and protecting unions. **Sherman (1890) leads, Clayton (1914) reinforces** — this pair is often tested together.

Careful framing: antitrust never "cured" monopoly — enforcement waxed and waned, the problem returned through the 20th century, and it's still debated today.`,
        },
      },
    },

    {
      id: 'triangle-fire-labor-reform',
      termCn: 'Triangle 制衣厂大火 → 劳工改革',
      termEn: 'Triangle Shirtwaist Fire → Labor Reform',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'triangle-fire-worker-receiving-end',
        nodeIds: ['tw-n1', 'tw-n5', 'tw-n7', 'tw-n8'],
        xiaoweiNote: {
          cn: `这是默认那条线，整条都在讲。最该死记的数字：**1911 年 3 月 25 日**（周六下午快五点），纽约 Triangle 制衣厂大火，**146 人死**（不是 145——账本反复核过，123 女 + 23 男）。死者大多是 14-23 岁的意大利和犹太移民女工。

死因要记住为什么这么惨：老板把通往楼梯的门**从外面锁死**（防工人偷布、防溜出去歇口气），逃生铁梯太旧太窄当场塌了，消防云梯只到 6 楼。很多人是从八九楼窗口跳下去摔死的。

考点链条（这是 AP 最爱的因果题）：
- 火**之前**：1909 年纽约上万制衣女工就罢过工（"两万人起义" Uprising of the 20,000），要求安全车间，Triangle 老板最硬、拒不改。
- 火**之后**：两个老板被告上法庭却**被判无罪**（1911.12，过失杀人罪不成立）——法律当时保不了这些工人。但纽约州成立 **Factory Investigating Commission（工厂调查委员会）**，随后通过 30 多条新法：门必须能从里面打开、要有逃生通道和灭火设备、限制女工童工工时。

关键句：这些保命的工厂安全法，**是 146 个人用命换来的**——今天每栋楼那扇永远不上锁的"紧急出口"，根子就在这。`,
          en: `This is the default lens — the whole thing is about it. The numbers to memorize cold: **March 25, 1911** (a Saturday, just before five p.m.), the Triangle garment factory fire in New York, **146 dead** (not 145 — the ledger checked repeatedly: 123 women + 23 men). Most were Italian and Jewish immigrant women aged 14–23.

Remember *why* it was so deadly: the owners locked the stairwell door **from the outside** (to stop workers "stealing cloth" or slipping out for a break), the fire escape was too old and narrow and collapsed, and the fire ladders only reached the 6th floor. Many jumped from the 8th and 9th floor windows to their deaths.

The exam chain (AP loves this cause-and-effect):
- **Before** the fire: in 1909 tens of thousands of NY garment women had already struck (the "Uprising of the 20,000"), demanding safer shops; the Triangle owners were the hardest and refused.
- **After** the fire: the two owners were taken to court but **found not guilty** (Dec 1911, manslaughter charge failed) — the law couldn't protect these workers yet. But New York State set up the **Factory Investigating Commission**, then passed 30+ new laws: doors must open from inside, escape routes, fire equipment, limits on women's and children's hours.

Key sentence: these life-saving factory laws were **bought with the lives of 146 people** — the never-locked "emergency exit" in every building today traces back to here.`,
        },
      },
    },

    {
      id: 'conservation',
      termCn: '自然保护（TR 国家森林 / 国家公园）',
      termEn: 'Conservation (TR\'s National Forests / Parks)',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'theodore-roosevelt',
        nodeIds: ['tr-n5'],
        xiaoweiNote: {
          cn: `Roosevelt 线第 5 节。这是 TR 影响最深远的一面：**conservation（自然保护）**——用政府权力替后代留住荒野，而不是任由它被砍光。

数字一定要记对（这是账本特别警告过的坑）：TR 任内保护了**约 2.3 亿英亩公共土地（总计）**，其中包括 **150 多片国家森林**（"片"是数量，不是英亩！）、5 个国家公园、18 处国家纪念地（像大峡谷）、55 个鸟类/猎物保护区。
⚠️ 千万别把它写成"1.5 亿英亩国家森林"——那是把"片数"和"英亩"搞混了，是错的。

故事细节：1903 年 TR 和自然主义者 **John Muir（约翰·缪尔）** 在加州 Yosemite（优胜美地）露营三天，没随从没记者，回来后更铁心保护这些地方。

关键句：conservation 让联邦政府第一次系统地"替还没出生的人"管理自然资源——这也是"政府角色转变"的一部分。`,
          en: `Roosevelt lens, Node 5. This is TR's most far-reaching side: **conservation** — using government power to keep wilderness for future generations rather than letting it be logged bare.

Get the numbers right (a trap the ledger specifically warned about): during his presidency TR protected **about 230 million acres of public land (total)**, including **more than 150 national forests** ("national forests" is a *count*, not acres!), 5 national parks, 18 national monuments (like the Grand Canyon), and 55 bird/game reserves.
⚠️ Never write "150 million acres of national forest" — that confuses the *count* with *acres*, and it's wrong.

Story detail: in 1903 TR camped three days with the naturalist **John Muir** at Yosemite in California, no retinue and no reporters, and came back more resolved to protect these places.

Key sentence: conservation was the first time the federal government systematically managed natural resources "for those not yet born" — also part of the changing role of government.`,
        },
      },
    },

    {
      id: 'progressive-amendments',
      termCn: '进步时代四修正案（第 16/17/18/19 条）',
      termEn: 'The Progressive Amendments (16th / 17th / 18th / 19th)',
      standardRef: ['AP US Gov — Constitutional Amendments', 'APUSH KC-7.1.II'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'theodore-roosevelt', nodeId: 'tr-n9', context: 'TR 线收尾 zoom-out 列举了这四条修正案 + 直接民主工具' },
        ],
      },
      standaloneText: {
        cn: `进步时代最爱考的"硬记"考点，就是这四条宪法修正案。它们的共同点：把权力从巨富、老政客手里，挪一点给普通人。一条一条记牢年份：

**第 16 修正案（1913 批准）— 联邦所得税。**
让国会有权对收入征税。意义：政府可以向富人多收一点，有钱去做改革（以前联邦主要靠关税）。

**第 17 修正案（1913 批准）— 参议员直选。**
以前参议员由各州议会指定（容易被巨头收买），现在改成由各州人民直接选举。意义：参议院更对选民负责。

**第 18 修正案（1919 批准）— 禁酒。**
全国禁止生产、运输、销售酒精。意义：进步主义"道德改革"的代表，但后来被证明很难执行，1933 年被第 21 修正案废除——这是唯一一条被废掉的修正案，AP 爱考这个反转。

**第 19 修正案（1920 批准）— 女性投票权。**
投票权不得因性别被剥夺，女性获得选举权。

⚠️ careful framing（第 19 修正案的关键误区）：它**不是**送给"所有"女性的礼物。实际落地很不均——许多有色人种女性，尤其南方黑人女性，此后仍长期被人头税、识字测验等手段挡在投票箱外，要等到 1965 年《投票权法》。AP DBQ 经常用这个考"进步对谁进步"。

记忆口诀：**16 钱（所得税）、17 选（直选参议员）、18 酒（禁酒，后来废了）、19 女（女性投票）**。`,
        en: `The favorite "hard memorization" topic of the Progressive Era is these four constitutional amendments. What they share: shifting power from the rich and old politicians toward ordinary people. Lock the years in one by one:

**16th Amendment (ratified 1913) — federal income tax.**
Gives Congress the power to tax income. Significance: the government can take a bit more from the rich and fund reform (before, the federal government relied mainly on tariffs).

**17th Amendment (ratified 1913) — direct election of senators.**
Senators used to be appointed by state legislatures (easy for magnates to buy); now they're elected directly by the people of each state. Significance: the Senate is more accountable to voters.

**18th Amendment (ratified 1919) — Prohibition.**
Bans the production, transport, and sale of alcohol nationwide. Significance: the showcase of Progressive "moral reform," but it proved nearly unenforceable and was repealed by the 21st Amendment in 1933 — the only amendment ever repealed, and AP loves this reversal.

**19th Amendment (ratified 1920) — women's suffrage.**
The right to vote shall not be denied on account of sex; women gain the vote.

⚠️ Careful framing (the key misconception about the 19th): it was **not** a gift to "all" women. In practice it landed very unevenly — many women of color, especially Black women in the South, were still kept from the ballot box for decades by poll taxes, literacy tests, and other tactics, until the 1965 Voting Rights Act. AP DBQs often use this to test "progress for whom."

Mnemonic: **16 = money (income tax), 17 = select (direct-elect senators), 18 = alcohol (Prohibition, later repealed), 19 = women (suffrage)**.`,
      },
      xiaoweiNote: {
        cn: `老师说这四条几乎年年州考都有一题，年份必须背死。我自己最容易混 16 和 17——记成"16 先收钱，17 才选人"就不乱了。还有 18（禁酒）是唯一被废的，21 把它废了，这个反转 AP 选择题超爱考。`,
        en: `My teacher said these four show up almost every year on the state test, so the years must be memorized cold. I always mixed up 16 and 17 — "16 collect money first, 17 select people next" keeps it straight. And 18 (Prohibition) is the only one ever repealed, undone by the 21st; AP multiple-choice loves that reversal.`,
      },
    },

    {
      id: 'settlement-houses',
      termCn: '睦邻之家 / Jane Addams / Hull House / 社会工作',
      termEn: 'Settlement Houses / Jane Addams / Hull House / Social Work',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'jane-addams',
        nodeIds: ['ja-n1', 'ja-n2', 'ja-n5', 'ja-n8', 'ja-n9'],
        xiaoweiNote: {
          cn: `Jane Addams 整条线就是她。要记的硬事实：**1889 年**，29 岁的她和友人 Ellen Gates Starr 在芝加哥最穷的移民区办起 **Hull House**——美国最有名的 **settlement house（睦邻之家）**。

settlement house 是什么？= 受过教育的人**搬进**穷人区、和穷人**住在一起**、办托儿所/夜校/澡堂/图书馆，不发救济、不传教。重点是"住进去做邻居"，不是"从外面行善"。

她做的另一件考点事：把贫民区**逐户调查**整理成数据送进立法机关，推动了 **1893 年伊利诺伊限制童工和女工工时的法律**。这种"用数据推动立法"后来长成一整套方法。

三个常考延伸：
- 她开创的工作后来成了 **social work（社会工作）** 这门职业。
- 一战她公开**反战**，从"最受尊敬的女人"跌到处处挨骂，但没改口。
- **1931 年获诺贝尔和平奖**（美国首位女性得主）。

关键句：Addams 代表进步主义里"把大改革落到底层"的那一支——和 TR"自上而下用政府权力"是两种改革路径。`,
          en: `The Jane Addams lens is entirely about her. Hard facts to memorize: in **1889**, at age 29, she and her friend Ellen Gates Starr opened **Hull House** in Chicago's poorest immigrant district — America's most famous **settlement house**.

What's a settlement house? = educated people who **move into** a poor district, **live among** the poor, and run nurseries / night schools / bathhouses / libraries — no charity handouts, no preaching. The point is "moving in as a neighbor," not "doing good from outside."

Her other exam-worthy act: she turned **house-by-house surveys** of the slum into data carried into the legislature, driving the **1893 Illinois law limiting child labor and women's working hours**. This "driving legislation with data" grew into a whole method.

Three common extensions:
- The work she pioneered became the profession of **social work**.
- During WWI she openly **opposed the war**, falling from "most respected woman" to being cursed everywhere, but never recanted.
- She won the **1931 Nobel Peace Prize** (first American woman to win it).

Key sentence: Addams represents the strand of Progressivism that "brought big reform down to the bottom" — a different path from TR's "top-down use of government power."`,
        },
      },
    },

    {
      id: 'women-and-child-labor-reform',
      termCn: '女性与童工改革',
      termEn: 'Women\'s & Child Labor Reform',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'jane-addams', nodeId: 'ja-n4', context: 'Jane Addams 推童工法/限女工工时，三边都不满意（工厂主、移民父母、上流改革者）' },
          { lens: 'jane-addams', nodeId: 'ja-n5', context: 'Hull House 调查推动 1893 伊利诺伊限童工女工工时法' },
          { lens: 'triangle-fire-worker-receiving-end', nodeId: 'tw-n2', context: '移民女孩十几岁进制衣厂踩缝纫机养家，是童工/女工现实的具体面孔' },
        ],
      },
      standaloneText: {
        cn: `进步时代的两大社会改革战场：**童工（child labor）** 和 **女工保护（women's working conditions）**。这一卡把故事里散落的点串成考点。

**童工问题有多严重？** 那年代几百万孩子在工厂、矿井、血汗工厂（sweatshop）干活——五六岁就帮家里卷烟、缝纽扣，断手指、得肺病。穷移民家庭为什么"舍得"让孩子做工？因为全家就靠那点工钱活命。这就是 Jane Addams 第 4 节那个两难：禁童工"听起来天经地义"，可那个靠孩子工钱吃饭的母亲，反对也是真的。

**改革怎么推进的？**
- **National Child Labor Committee（全国童工委员会，1904）** 雇摄影师 Lewis Hine 拍下童工照片，用图像逼公众正视。
- 州一级陆续立法限制童工年龄和工时（如 Jane Addams 推动的 **1893 年伊利诺伊法**）。
- 联邦层面进展慢、反复被最高法院推翻，童工真正被全国禁止要等到 1938 年《公平劳动标准法》。

**女工保护**：进步主义改革者推动限制女性工时、改善车间安全。一个 AP 必知判例是 **Muller v. Oregon（1908）**——最高法院支持限制女性工时的法律，靠的是 Louis Brandeis 提交的"Brandeis Brief"（用社会和健康数据而非纯法条说理，开了先河）。

🔗 故事连接：Triangle 火灾就是"女工保护滞后"最惨烈的证据——146 个被锁在工厂里的女工，正是这套改革没及时够着的人。

关键句：童工/女工改革是进步主义"用政府管资本"的核心战场，但它走得很慢，常常滞后于最需要它的人。`,
        en: `The two big social-reform battlefields of the Progressive Era: **child labor** and **women's working conditions**. This card threads the story's scattered points into one exam topic.

**How bad was child labor?** Millions of children worked in factories, mines, and sweatshops — five- and six-year-olds rolling cigars and sewing on buttons, losing fingers, catching lung disease. Why would poor immigrant families "let" their children work? Because the whole family lived on those wages. That's the dilemma in Jane Addams Node 4: banning child labor "sounds self-evidently right," yet the mother living on her child's wages has a real objection too.

**How did reform advance?**
- The **National Child Labor Committee (1904)** hired photographer Lewis Hine to capture images of child laborers, forcing the public to face it.
- States gradually passed laws limiting children's age and hours (like the **1893 Illinois law** Jane Addams pushed).
- Federal progress was slow and repeatedly struck down by the Supreme Court; child labor wasn't truly banned nationwide until the 1938 Fair Labor Standards Act.

**Protecting women workers**: Progressive reformers pushed to limit women's hours and improve shop safety. An AP must-know case is **Muller v. Oregon (1908)** — the Supreme Court upheld a law limiting women's working hours, relying on the "Brandeis Brief" filed by Louis Brandeis (arguing with social and health data rather than pure legal text — a landmark method).

🔗 Story link: the Triangle fire is the most brutal proof of "lagging protection for women workers" — the 146 women locked in the factory were exactly the people this reform failed to reach in time.

Key sentence: child- and women-labor reform was a core battlefield of Progressivism's "government reining in capital," but it moved slowly and often lagged behind those who needed it most.`,
      },
      xiaoweiNote: {
        cn: `老师说 Muller v. Oregon（1908）和"Brandeis Brief"是 AP 容易考的小点，别只背 Triangle。我的记法：**Lewis Hine 拍照片 + Brandeis 用数据打官司**——两个人都是"用证据推改革"，跟 Jane Addams 的调查是一个套路。`,
        en: `My teacher said Muller v. Oregon (1908) and the "Brandeis Brief" are easy AP points to test, so don't just memorize Triangle. My memory hook: **Lewis Hine takes photos + Brandeis argues with data** — both "drive reform with evidence," the same playbook as Jane Addams's surveys.`,
      },
    },

    {
      id: 'changing-role-of-government',
      termCn: '政府角色转变 / 进步主义 + 直接民主',
      termEn: 'The Changing Role of Government / Progressivism + Direct Democracy',
      standardRef: ['APUSH KC-7.1.II', 'AP US Gov — Civic Participation'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'theodore-roosevelt', nodeId: 'tr-n9', context: 'TR 线 zoom-out 列举修正案 + initiative/referendum/recall 直接民主工具' },
        ],
      },
      standaloneText: {
        cn: `这是把整个 Topic 串起来的"大概念"卡——AP 的核心论点题最爱问：**进步时代，政府的角色怎么变了？**

**变化前（镀金时代）**：联邦政府基本"放手不管"（laissez-faire），任由工业巨头垄断、压榨工人、污染环境。普通人没什么办法对抗巨富和被收买的政客。

**进步时代的大转变**：政府第一次**主动**用权力去管资本、护工人、护环境。具体表现（把前面几张卡归类）：
- **管资本**：trust-busting + Sherman/Clayton 反垄断法。
- **护消费者**：1906 食药法 + 肉类检验法。
- **护工人**：Triangle 后的工厂安全法、限童工/女工工时。
- **护环境**：conservation（国家森林/公园）。
- **改宪法**：第 16/17/18/19 修正案。

**直接民主工具（AP US Gov 必考）**：进步主义者还想让普通人能绕过被收买的州议会，于是州一级推出三件工具——
- **initiative（公民立法提案）**：选民自己提出法律。
- **referendum（公投）**：选民直接对法律投票。
- **recall（罢免）**：选民投票把不称职的官员撤掉。
记忆口诀：**提案-公投-罢免 = I-R-R**。

⚠️ 反 Whig（最重要的 framing）：政府角色变大是真的"进步"，但同一批进步主义者**同时**推动优生学（多州立强制绝育法）、帝国主义、还容忍种族隔离——"更强的政府"既能保护人，也能更有力地排斥人。这就是为什么老师那句话是 "进步，到底进步到了谁身上？"

关键句：进步时代 = 美国从"政府放手"转向"政府主动管事"的转折点，但这份"进步"分配得很不均匀。`,
        en: `This is the "big concept" card that ties the whole topic together — AP's core argument questions love to ask: **how did the role of government change in the Progressive Era?**

**Before (the Gilded Age)**: the federal government was largely hands-off (laissez-faire), letting industrial giants monopolize, exploit workers, and pollute. Ordinary people had little recourse against the rich and bought-off politicians.

**The big shift in the Progressive Era**: for the first time the government **actively** used its power to regulate capital, protect workers, and protect the environment. Concretely (sorting the earlier cards):
- **Regulating capital**: trust-busting + the Sherman/Clayton antitrust acts.
- **Protecting consumers**: the 1906 Pure Food and Drug Act + Meat Inspection Act.
- **Protecting workers**: post-Triangle factory safety laws, limits on child/women's hours.
- **Protecting the environment**: conservation (national forests/parks).
- **Amending the Constitution**: the 16th/17th/18th/19th amendments.

**Direct democracy tools (an AP US Gov must-know)**: Progressives also wanted ordinary people to bypass bought-off state legislatures, so states rolled out three tools —
- **initiative**: voters propose a law themselves.
- **referendum**: voters vote directly on a law.
- **recall**: voters vote to remove an unfit official.
Mnemonic: **propose-vote-remove = I-R-R**.

⚠️ Anti-Whig (the most important framing): the larger role of government was genuine "progress," but the same Progressives **simultaneously** pushed eugenics (many states passed forced-sterilization laws), imperialism, and tolerated racial segregation — "a stronger government" can protect people, but it can also exclude people more forcefully. That's why my teacher's line is "progress, exactly whom did it reach?"

Key sentence: the Progressive Era = the turning point where America shifted from "hands-off government" to "government that actively governs," but that "progress" was distributed very unevenly.`,
      },
      xiaoweiNote: {
        cn: `这张卡其实是整个 Topic 的"骨架"——AP 写长答案，与其一个个背事件，不如先答"政府角色变了"这条主线，再用 trust-busting、Triangle、修正案当证据填进去。直接民主 I-R-R 三件套是 AP US Gov 那门课的考点，别漏。`,
        en: `This card is really the "skeleton" of the whole topic — for AP long-answer essays, instead of memorizing events one by one, answer the through-line "the role of government changed" first, then fill in trust-busting, Triangle, and the amendments as evidence. The direct-democracy I-R-R trio is an AP US Gov point — don't miss it.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Theodore Roosevelt 一边拆开垄断巨头、留下两亿多英亩荒野、替普通人出头，一边公开相信白人种族更优越、支持优生学、把美国变成抢殖民地的帝国。

你觉得这是"功劳 + 缺点"两件事，还是同一套世界观的两面？如果 AP 让你评价 TR，你会怎么在一篇 essay 里同时写他的光和影？`,
      en: `Theodore Roosevelt, on one side, broke apart monopoly giants, left more than two hundred million acres of wilderness, and stood up for ordinary people; on the other, he openly believed the white race was superior, backed eugenics, and turned America into an empire grabbing for colonies.

Do you see this as "credit plus flaws" — two separate things — or as two faces of one worldview? If AP asked you to evaluate TR, how would you write both his light and his shadow into a single essay?`,
      hintCn: `提示：试着用故事里的对位——TR 的"big stick（大棒）"朝里是保护普通人、朝外是征服小国，是同一根大棒。同理，"用政府力量让美国更强更好"这一个信念，既造出了改革（反垄断、护荒野），也造出了排斥（优生学、帝国）。

essay 模板：(1) 承认他真实的进步（拆 trust、conservation、激活反垄断法）；(2) 列出真实的偏见（race suicide 言论、支持优生学、巴拿马运河"我拿下了运河区"）；(3) 论证这两者不是分开的，而是同源——结论用老师那句"进步，到底进步到了谁身上？"

进阶：今天你身边有没有"做了真好事、又藏着真偏见"的人或机构？你会因为他的功劳替偏见开脱吗？`,
      hintEn: `Hint: try the story's pairing — TR's "big stick," turned inward protects ordinary people, turned outward conquers small nations: it's the same stick. Likewise, the single belief "use government power to make America stronger and better" produced both the reform (antitrust, conservation) and the exclusion (eugenics, empire).

Essay template: (1) acknowledge his real progress (trust-busting, conservation, activating antitrust law); (2) list the real prejudice (the "race suicide" rhetoric, backing eugenics, "I took the Canal Zone"); (3) argue these aren't separate but share one root — close with your teacher's line, "progress, exactly whom did it reach?"

Going deeper: is there a person or institution near you today that "did something truly good and holds a real prejudice"? Would you excuse the prejudice because of the good?`,
      conceptsActivated: ['trust-busting', 'conservation', 'changing-role-of-government'],
    },
    {
      id: 'q2',
      cn: `Triangle 火灾的工人们活着的时候罢过工、喊过"给我们安全的工厂、别再锁门"，多数人当她们是"闹事的外国佬"，没人真听。可一旦一天死了 146 个，全城就哭了，纽约很快通过了 30 多条工厂安全法。

为什么有些人非要"死给你看"，社会才肯听见他们？如果你是 AP 老师，要出一道关于 Triangle 火灾的 DBQ，你会怎么提问？`,
      en: `The Triangle workers, while alive, went on strike and cried out "give us a safe factory, stop locking the doors," and most people took them for "foreign troublemakers" and didn't really listen. But once 146 died in a single day, the whole city wept, and New York quickly passed 30-plus factory safety laws.

Why do some people have to "die for you to see" before society will hear them? If you were an AP teacher writing a DBQ on the Triangle fire, how would you phrase the question?`,
      hintCn: `提示：DBQ 通常会给几份史料——1909"两万人起义"的罢工诉求、工厂锁门的原因、火灾目击报道、老板被判无罪的判决、火后 Factory Investigating Commission 报告——让学生分析"为什么改革滞后于最需要它的人"。没有标准答案，重点是用证据。

可能的提问角度：
- "Triangle 火灾后的工厂安全法，是 146 人'用命换来的'吗？这种'用人命推动改革'的模式说明了进步时代的什么特征？"
- "把 1909 年罢工的诉求和 1911 年火灾后的立法做对比，'谁的声音被听见'取决于什么？"

进阶：今天还有没有"先出大事、才有人回头管"的领域？这是进步必然的代价，还是可以避免的？`,
      hintEn: `Hint: a DBQ usually provides several sources — the 1909 "Uprising of the 20,000" strike demands, why the factory doors were locked, eyewitness reports of the fire, the not-guilty verdict, the post-fire Factory Investigating Commission report — and asks students to analyze "why reform lagged behind those who needed it most." No standard answer; the point is using evidence.

Possible question angles:
- "Were the post-Triangle factory safety laws 'bought with the lives' of 146 people? What does this pattern of 'reform driven by death' reveal about the Progressive Era?"
- "Comparing the 1909 strike demands with the post-1911 legislation, what determines 'whose voice gets heard'?"

Going deeper: are there areas today where "something big has to happen before anyone pays attention"? Is this an inevitable cost of progress, or avoidable?`,
      conceptsActivated: ['triangle-fire-labor-reform', 'women-and-child-labor-reform', 'changing-role-of-government'],
    },
    {
      id: 'q3',
      cn: `第 19 修正案（1920）让女性获得了投票权，课本常说这是进步时代"送给女性的礼物"。但许多有色人种女性，尤其南方黑人女性，此后仍长期被人头税、识字测验挡在投票箱外，要等到 1965 年。

如果有人对你说"进步时代让所有美国人都更自由了"，你会怎么用第 19 修正案这个例子，礼貌但有理有据地反驳（或部分同意）？`,
      en: `The 19th Amendment (1920) gave women the vote, and textbooks often call it the Progressive Era's "gift to women." But many women of color, especially Black women in the South, were still kept from the ballot box for decades by poll taxes and literacy tests, until 1965.

If someone told you "the Progressive Era made all Americans freer," how would you use the 19th Amendment as an example to politely but rigorously push back (or partly agree)?`,
      hintCn: `提示：可以用"对一部分人是真进步，对另一部分人是空头支票"这个双层结构。第 19 修正案条文上说"投票权不得因性别被剥夺"——但它没说种族，南方各州就用"中性"的人头税、识字测验把黑人女性（和黑人男性）继续挡在外面。这正是老师那句"进步，到底进步到了谁身上？"的最佳证据。

进阶思考：这种"用看似中性的规则达到排斥目的"的手法，你还能在哪里见到？为什么"写在纸上的平等"和"真实发生的事"会差这么远？

连接：把这一题和 Triangle（女工的命要死了才被算数）、优生学（移民被论证为"天生低劣"）放在一起，你会发现整个进步时代都在回答同一个问题——"普遍权利"到底有多普遍？`,
      hintEn: `Hint: use the two-layer structure "real progress for some, an empty check for others." The 19th Amendment's text says "the right to vote shall not be denied on account of sex" — but it says nothing about race, so Southern states used "neutral" poll taxes and literacy tests to keep Black women (and Black men) out. This is the best evidence for your teacher's line, "progress, exactly whom did it reach?"

Going deeper: where else can you see this tactic of "using seemingly neutral rules to achieve exclusion"? Why does "equality on paper" differ so much from "what actually happens"?

Connection: put this question alongside Triangle (women's lives counted only after they died) and eugenics (immigrants argued to be "inferior by birth"), and you'll see the whole Progressive Era answering one question — how universal were the "universal rights"?`,
      conceptsActivated: ['progressive-amendments', 'women-and-child-labor-reform', 'changing-role-of-government'],
    },
  ],
};

export default notebook;
