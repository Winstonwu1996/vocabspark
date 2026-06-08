// ─── 同伴笔记本架构 v1 · Progressive Era 1890-1920 ───────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
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
//   小 U同伴语气 / 双语 / standaloneText 300-500 字 / 每卡 standardRef + examFrequency
//
// schemaVersion: 1 · notebookVersion: progressive-era-1910-v1

export var notebook = {
  topicId: 'progressive-era-1910',
  topicNameCn: '进步时代',
  topicNameEn: 'The Progressive Era',
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
    cn: `今天历史课要学进步时代（Progressive Era，1890-1920）。老师说这是 APUSH 必考的一大块——Period 7。她在白板上写了这些名字：

Theodore Roosevelt（西奥多·罗斯福）、Jane Addams（简·亚当斯）、Upton Sinclair（厄普顿·辛克莱）

还有一串词：muckraker（扒粪记者——专门挖权贵丑闻的调查记者）、trust-busting（打托拉斯——政府拆散垄断大公司）、Triangle Shirtwaist Fire（Triangle 制衣厂大火）、settlement house（睦邻之家——受教育者搬进穷人区和穷人住在一起、提供帮助的地方）、conservation（自然保护）、eugenics（优生学——一种认为可以通过控制生育来"改良"人类的旧时伪科学）。还有第 16、17、18、19 四条宪法修正案。

我先把这些抄下来。等下要读三个故事——一个改革总统（Roosevelt）、一个搬进穷人区帮忙的人（Jane Addams），还有一个死在锁着的门后的移民女工——读完再回来对照这张单子，看我能不能解释每一个词。

老师在白板角落写了一句话，我也抄到笔记本第一页：「进步是真的，但你要会问一句——进步，到底进步到了谁身上？」`,
    en: `Today's history class is about the Progressive Era (1890-1920). My teacher said this is a big required chunk of APUSH — Period 7. She wrote these names on the board:

Theodore Roosevelt, Jane Addams, Upton Sinclair

Plus a string of terms: muckraker (an investigative reporter who digs up scandals on the powerful), trust-busting (the government breaking apart giant monopoly companies), Triangle Shirtwaist Fire, settlement house (a place where educated people moved into a poor neighborhood and lived alongside the poor, offering help), conservation (protecting nature), eugenics (an old fake science that claimed humans could be "improved" by controlling who has children), and the 16th, 17th, 18th, and 19th constitutional amendments.

Let me copy these down. Soon I'll read three stories — a reform president (Roosevelt), a person who moved into a poor neighborhood to help (Jane Addams), and an immigrant girl who died behind a locked door — and then come back to this list to check whether I can explain each one.

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
      {
        nameCn: 'W.E.B. 杜波依斯',
        nameEn: 'W.E.B. Du Bois',
        ipa: '/duː ˈbɔɪs/',
        roleCn: 'NAACP 最重要的黑人创始人之一，主张直接争取完整公民权',
        roleEn: 'One of the most important Black founders of the NAACP, advocated directly demanding full civil rights',
        mustKnow: true,
        audioKey: 'web-du-bois',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'muckrakers',
      termCn: '扒粪记者 / 《丛林》/ 1906 食药法',
      termEn: 'Muckrakers / The Jungle / 1906 Pure Food and Drug Act',
      defCn: '扒粪记者（muckraker）是进步时代专门调查大公司和政客丑闻的记者。他们写的报道让全国民众愤怒，政府因此被迫出手立法改革。',
      defEn: 'A muckraker is an investigative reporter from the Progressive Era who dug up scandals about big companies and corrupt politicians. Their reporting made the whole country furious, which pushed the government to pass reform laws.',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'theodore-roosevelt',
        nodeIds: ['tr-n3'],
        xiaoweiNote: {
          cn: `这个我读过！就在 Roosevelt 的故事里。muckraker（扒粪者）这个外号其实是 TR 自己给起的——出自一篇 1906 年的演讲，他用《天路历程》里一个老是低头扒地上脏东西的人作比喻。一开始是骂人的词，后来反而成了"调查揭丑记者"的光荣称号。

故事里那个钻进肉联厂、把黑幕写出来的记者，名字课本要你记住：**Upton Sinclair（厄普顿·辛克莱）**，书叫 **《丛林》(The Jungle, 1906)**。全国人读了吃不下饭，民愤直接催生了 **1906 年《纯净食品和药品法》(Pure Food and Drug Act)** 和《肉类检验法》——美国第一批食品安全联邦法律。

考点关键句：进步时代的发动机 = **记者扒 → 民众怒 → 政府改**。muckraking 不是造谣抹黑，是基于调查的报道，是推动立法的正向力量（这是常见误区，老师特意提醒过）。`,
          en: `I read this in Roosevelt's story! The nickname "muckraker" was actually coined by TR himself — from a 1906 speech, using the character in *Pilgrim's Progress* who keeps raking the filth off the ground instead of looking up. It started as an insult, then became a badge of honor for "investigative reporters who expose scandal."

The reporter in the story who slipped into meatpacking plants and wrote up the dirty secrets — the textbook wants you to know his name: **Upton Sinclair**, and the book is **The Jungle (1906)**. The whole country lost its appetite after reading it, and the public fury directly produced the **1906 Pure Food and Drug Act** and the Meat Inspection Act — America's first federal food-safety laws.

Key exam sentence: the engine of the Progressive Era = **reporters dig → the public rages → the government reforms**. Muckraking is not smearing or making things up; it's evidence-based reporting, a positive force for legislation. (This is a common misconception my teacher specifically flagged.)`,
        },
      },
    },

    {
      id: 'trust-busting',
      termCn: '打托拉斯 / Sherman 与 Clayton 反垄断法',
      termEn: 'Trust-Busting / Sherman & Clayton Antitrust Acts',
      defCn: 'trust（托拉斯）是一种超级大垄断公司——把所有同行都买光或挤垮，自己一家独大。trust-busting（打托拉斯）是政府依照反垄断法，把这种大公司强制拆散，让市场重新有竞争。',
      defEn: 'A trust is a giant monopoly — one company that has bought out or driven out all its competitors so it controls everything alone. Trust-busting is the government using antitrust law to forcibly break these giants apart and restore competition.',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'theodore-roosevelt',
        nodeIds: ['tr-n2', 'tr-n4'],
        xiaoweiNote: {
          cn: `Roosevelt 的故事里讲到了这件事。**trust（托拉斯）**= 把同行买光挤垮、组成的超级垄断联合体（钢、石油、铁路）；**trust-busting** = 政府依反垄断法把它拆开。

故事里 TR 用的武器，课本要你记名字：**1890 年《Sherman 反托拉斯法》(Sherman Antitrust Act)**——美国第一部联邦反垄断法，但前几任总统几乎没动过，TR 把它"激活"了。1904 年最高法院判政府胜诉，拆散了那个巨型铁路联合体（**Northern Securities** 案，5 比 4），TR 从此得名 trust-buster。那个亲自跑来想"私下谈"被拒的，就是金融大王 J.P. Morgan。

考点要补一刀（故事里没展开的）：1914 年又加了一部 **《Clayton 反托拉斯法》(Clayton Antitrust Act)**，堵住 Sherman 法的漏洞、明确禁止某些垄断手段，还保护工会。**Sherman（1890）打头 + Clayton（1914）补强**，这一对经常一起考。

注意：反垄断从没"根治"垄断——执法时强时弱，垄断问题 20 世纪反复出现，至今还是议题。`,
          en: `Roosevelt's story covers this. A **trust** is a giant monopoly combination formed by buying out and crushing rivals (steel, oil, railroads); **trust-busting** is the government breaking it apart under antitrust law.

The weapon TR used — the textbook wants the name: the **1890 Sherman Antitrust Act**, the first federal antitrust law, which earlier presidents had barely touched; TR "activated" it. In 1904 the Supreme Court ruled for the government and broke up that giant railroad combination (the **Northern Securities** case, 5–4), and TR earned the name trust-buster. The financier who came in person hoping to "settle it privately" — and was refused — was J.P. Morgan.

One exam addition the story doesn't spell out: in 1914 came the **Clayton Antitrust Act**, plugging the Sherman Act's gaps, banning specific monopoly tactics, and protecting unions. **Sherman (1890) leads, Clayton (1914) reinforces** — this pair is often tested together.

Watch out: antitrust never "cured" monopoly — enforcement waxed and waned, and the problem kept coming back through the 20th century. It's still debated today.`,
        },
      },
    },

    {
      id: 'triangle-fire-labor-reform',
      termCn: 'Triangle 制衣厂大火 → 劳工改革',
      termEn: 'Triangle Shirtwaist Fire → Labor Reform',
      defCn: '1911 年 3 月 25 日，纽约 Triangle 制衣厂发生大火，146 名移民工人死亡。因为老板把逃生门从外面锁死，工人根本跑不出去。这场火直接推动纽约州通过 30 多条工厂安全法律。',
      defEn: 'On March 25, 1911, a fire broke out at the Triangle Shirtwaist factory in New York City, killing 146 immigrant workers. The owners had locked the exit doors from the outside, trapping the workers inside. The fire directly pushed New York State to pass more than 30 factory safety laws.',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'triangle-fire-worker-receiving-end',
        nodeIds: ['tw-n1', 'tw-n5', 'tw-n7', 'tw-n8'],
        xiaoweiNote: {
          cn: `这条故事线整条都在讲这场火。最该死记的数字：**1911 年 3 月 25 日**（周六下午快五点），纽约 Triangle 制衣厂大火，**146 人死**（不是 145——核对过多次：123 女 + 23 男）。死者大多是 14-23 岁的意大利和犹太移民女工。

死因要记住为什么这么惨：
1. 老板把通往楼梯的门**从外面锁死**（怕工人偷布、怕她们溜出去歇口气）。
2. 逃生铁梯太旧太窄，当场就塌了。
3. 消防云梯只到 6 楼，够不到八九楼。
很多人是从八九楼窗口跳下去摔死的。

考点链条（AP 最爱的因果题）：
- 火**之前**：1909 年纽约上万制衣女工就罢过工（"两万人起义" Uprising of the 20,000），要求安全车间，Triangle 老板最硬、拒不改。
- 火**之后**：两个老板被告上法庭却**被判无罪**（1911 年 12 月，过失杀人罪不成立）——法律当时保不了这些工人。但纽约州成立 **Factory Investigating Commission（工厂调查委员会）**，随后通过 30 多条新法：门必须能从里面打开、要有逃生通道和灭火设备、限制女工童工工时。

关键句：这些保命的工厂安全法，**是 146 个人用命换来的**——今天每栋楼那扇永远不上锁的"紧急出口"，根子就在这。`,
          en: `This whole story line is about this fire. The numbers to memorize cold: **March 25, 1911** (a Saturday, just before five p.m.), the Triangle garment factory fire in New York City, **146 dead** (not 145 — checked many times: 123 women + 23 men). Most were Italian and Jewish immigrant women aged 14–23.

Remember *why* it was so deadly:
1. The owners locked the stairwell door **from the outside** (to stop workers "stealing cloth" or slipping out for a break).
2. The fire escape was too old and narrow — it collapsed on the spot.
3. Fire ladders only reached the 6th floor, far short of the 8th and 9th.
Many workers jumped from the 8th and 9th floor windows to their deaths.

The exam chain (AP loves this cause-and-effect):
- **Before** the fire: in 1909, tens of thousands of New York garment women had already struck (the "Uprising of the 20,000"), demanding safer shops; the Triangle owners were the most stubborn and refused.
- **After** the fire: the two owners were taken to court but **found not guilty** (December 1911, manslaughter charge failed) — the law couldn't protect these workers yet. But New York State set up the **Factory Investigating Commission**, then passed 30+ new laws: doors must open from inside, escape routes required, fire equipment required, limits on women's and children's work hours.

Key sentence: these life-saving factory laws were **bought with the lives of 146 people** — the never-locked "emergency exit" in every building today traces right back to this fire.`,
        },
      },
    },

    {
      id: 'conservation',
      termCn: '自然保护（TR 国家森林 / 国家公园）',
      termEn: 'Conservation (TR\'s National Forests / Parks)',
      defCn: 'conservation（自然保护）是指政府主动把大片荒野、森林、公园划出来保护起来，不让人随便砍伐开发，留给后代。TR 任内是美国历史上保护公共土地最多的总统之一。',
      defEn: 'Conservation means the government actively sets aside large areas of wilderness, forests, and parks to protect them from logging and development — saving them for future generations. During his presidency, TR was one of the greatest protectors of public land in American history.',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'theodore-roosevelt',
        nodeIds: ['tr-n5'],
        xiaoweiNote: {
          cn: `这是 Roosevelt 故事里很重要的一段。这是 TR 影响最深远的一面：**conservation（自然保护）**——用政府权力替后代留住荒野，而不是任由它被砍光。

数字一定要记对（这是个出名的坑）：TR 任内保护了**约 2.3 亿英亩公共土地（总计）**，其中包括 **150 多片国家森林**（"片"是数量，不是英亩！）、5 个国家公园、18 处国家纪念地（像大峡谷）、55 个鸟类/猎物保护区。
⚠️ 千万别把它写成"1.5 亿英亩国家森林"——那是把"片数"和"英亩"搞混了，是错的。

故事细节：1903 年 TR 和自然主义者 **John Muir（约翰·缪尔）** 在加州 Yosemite（优胜美地）露营三天，没随从没记者，回来后更铁心保护这些地方。

关键句：conservation 让联邦政府第一次系统地"替还没出生的人"管理自然资源——这也是"政府角色转变"的一部分。`,
          en: `This is an important part of Roosevelt's story. It's TR's most far-reaching side: **conservation** — using government power to keep wilderness for future generations rather than letting it be logged bare.

Get the numbers right (this is a famous trap): during his presidency TR protected **about 230 million acres of public land (total)**, including **more than 150 national forests** ("national forests" is a *count*, not an acreage!), 5 national parks, 18 national monuments (like the Grand Canyon), and 55 bird and game reserves.
⚠️ Never write "150 million acres of national forest" — that confuses the *count* with *acres*, and it's wrong.

Story detail: in 1903 TR camped three days with the naturalist **John Muir** at Yosemite in California, no staff and no reporters, and came back more resolved than ever to protect these places.

Key sentence: conservation was the first time the federal government systematically managed natural resources "for people not yet born" — and it's also part of the changing role of government.`,
        },
      },
    },

    {
      id: 'progressive-amendments',
      termCn: '进步时代四修正案（第 16/17/18/19 条）',
      termEn: 'The Progressive Amendments (16th / 17th / 18th / 19th)',
      defCn: '进步时代通过了四条宪法修正案，分别是：第 16 条（联邦所得税）、第 17 条（参议员直选）、第 18 条（禁酒）、第 19 条（女性投票权）。这四条都试图把权力从富人和老政客手里挪一点给普通人。',
      defEn: 'The Progressive Era produced four constitutional amendments: the 16th (federal income tax), 17th (direct election of senators), 18th (Prohibition), and 19th (women\'s right to vote). All four tried to shift some power away from the wealthy and entrenched politicians toward ordinary people.',
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
以前参议员由各州议会指定（容易被巨头收买），现在改成由各州人民直接选举。意义：参议院更对选民负责了。

**第 18 修正案（1919 批准）— 禁酒。**
全国禁止生产、运输、销售酒精。意义：进步主义"道德改革"的代表，但后来证明很难执行，1933 年被第 21 修正案废除——这是唯一一条被废掉的修正案，AP 爱考这个反转。

**第 19 修正案（1920 批准）— 女性投票权。**
投票权不得因性别被剥夺，女性获得选举权。

⚠️ 重要提醒（第 19 修正案的关键误区）：它**不是**送给"所有"女性的礼物。实际落地很不均——许多有色人种女性，尤其南方黑人女性，此后仍长期被人头税、识字测验等手段挡在投票箱外，要等到 1965 年《投票权法》。AP DBQ 经常用这个考"进步对谁进步"。

记忆口诀：**16 钱（所得税）、17 选（直选参议员）、18 酒（禁酒，后来废了）、19 女（女性投票）**。`,
        en: `The favorite "memorize cold" topic of the Progressive Era is these four constitutional amendments. What they share: shifting power away from the rich and old-guard politicians toward ordinary people. Lock in the years one by one:

**16th Amendment (ratified 1913) — federal income tax.**
Gives Congress the power to tax income. Why it matters: the government can collect a bit more from the wealthy and fund reform (before this, the federal government relied mainly on tariffs).

**17th Amendment (ratified 1913) — direct election of senators.**
Senators used to be chosen by state legislatures (making it easy for powerful magnates to buy their way in). Now they're elected directly by the voters of each state. Why it matters: the Senate is more accountable to ordinary people.

**18th Amendment (ratified 1919) — Prohibition.**
Bans the production, transport, and sale of alcohol nationwide. Why it matters: it's the showpiece of Progressive "moral reform" — but it proved nearly impossible to enforce and was repealed by the 21st Amendment in 1933. It's the only constitutional amendment ever repealed, and AP loves testing that reversal.

**19th Amendment (ratified 1920) — women's right to vote.**
The right to vote shall not be denied on account of sex; women gain the vote.

⚠️ Important watch-out (the key misconception about the 19th): it was **not** a gift to "all" women. In practice it landed very unevenly — many women of color, especially Black women in the South, were still kept from the ballot box for decades by poll taxes, literacy tests, and other tactics, until the 1965 Voting Rights Act. AP DBQs often use this to test "progress for whom."

Mnemonic: **16 = money (income tax), 17 = select (direct-elect senators), 18 = alcohol (Prohibition, later repealed), 19 = women (suffrage)**.`,
      },
      xiaoweiNote: {
        cn: `老师说这四条几乎年年州考都有一题，年份必须背死。我自己最容易混 16 和 17——记成"16 先收钱，17 才选人"就不乱了。还有 18（禁酒）是唯一被废的，21 把它废了，这个反转 AP 选择题超爱考。`,
        en: `My teacher said these four show up almost every year on the state test — the years must be memorized cold. I always mix up 16 and 17 — "16 collect money first, 17 select people next" keeps it straight. And 18 (Prohibition) is the only one ever repealed, undone by the 21st; AP multiple-choice loves that reversal.`,
      },
    },

    {
      id: 'settlement-houses',
      termCn: '睦邻之家 / Jane Addams / Hull House / 社会工作',
      termEn: 'Settlement Houses / Jane Addams / Hull House / Social Work',
      defCn: 'settlement house（睦邻之家）是进步时代出现的一种服务机构——受过教育的人搬进穷人聚居的社区，和穷人住在一起，提供幼儿园、夜校、澡堂等服务，不发钱、不传教。Hull House 是最有名的一所，1889 年由 Jane Addams 在芝加哥创办。',
      defEn: 'A settlement house was a type of service center from the Progressive Era — educated people actually moved into poor immigrant neighborhoods and lived among the residents, offering nurseries, night classes, bathhouses, and more, without handing out money or preaching. Hull House was the most famous one, founded by Jane Addams in Chicago in 1889.',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'jane-addams',
        nodeIds: ['ja-n1', 'ja-n2', 'ja-n5', 'ja-n8', 'ja-n9'],
        xiaoweiNote: {
          cn: `Jane Addams 的整条故事线就是她的。要记的硬事实：**1889 年**，29 岁的她和友人 Ellen Gates Starr 在芝加哥最穷的移民区办起 **Hull House**——美国最有名的 **settlement house（睦邻之家）**。

settlement house 是什么？= 受过教育的人**搬进**穷人区、和穷人**住在一起**、办托儿所/夜校/澡堂/图书馆，不发救济、不传教。重点是"住进去做邻居"，不是"从外面施善"。

她做的另一件考点事：把贫民区**逐户调查**整理成数据送进立法机关，推动了 **1893 年伊利诺伊限制童工和女工工时的法律**。这种"用数据推动立法"后来长成一整套方法。

三个常考延伸：
① 她开创的工作后来成了 **social work（社会工作）** 这门职业。
② 一战她公开**反战**，从"最受尊敬的女人"跌到处处挨骂，但没改口。
③ **1931 年获诺贝尔和平奖**（美国首位女性得主）。

关键句：Addams 代表进步主义里"把大改革落到底层"的那一支——和 TR"自上而下用政府权力"是两种不同的改革路径。`,
          en: `The whole Jane Addams story line is about her. Hard facts to memorize: in **1889**, at age 29, she and her friend Ellen Gates Starr opened **Hull House** in Chicago's poorest immigrant district — America's most famous **settlement house**.

What is a settlement house? = educated people who **move into** a poor neighborhood, **live among** the residents, and run nurseries, night schools, bathhouses, and libraries — no charity handouts, no preaching. The key point is "moving in as a neighbor," not "doing good from the outside."

Her other exam-worthy move: she turned **house-by-house surveys** of the slum into data and brought it to the legislature, driving the **1893 Illinois law limiting child labor and women's working hours**. This "drive legislation with data" method grew into a whole approach.

Three common extensions:
① The work she pioneered became the profession of **social work**.
② During World War I she openly **opposed the war**, falling from "most respected woman in America" to being attacked everywhere — but she never backed down.
③ She won the **1931 Nobel Peace Prize** (the first American woman to win it).

Key sentence: Addams represents the strand of Progressivism that "brought big reform down to the grassroots" — a different path from TR's "top-down use of government power."`,
        },
      },
    },

    {
      id: 'women-and-child-labor-reform',
      termCn: '女性与童工改革',
      termEn: 'Women\'s & Child Labor Reform',
      defCn: '进步时代有两大社会改革战场：童工（child labor，让孩子在工厂干活）和女工保护（women\'s working conditions，改善女性的工作安全和工时）。改革者用照片、数据和法律一步步推动政府出手管制。',
      defEn: 'Two major social reform battlefields of the Progressive Era: child labor (putting children to work in factories) and women\'s working conditions (improving safety and hours for female workers). Reformers used photographs, data, and lawsuits to push the government to step in.',
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

**童工问题有多严重？** 那年代几百万孩子在工厂、矿井、血汗工厂（sweatshop，低工资高强度的小作坊）里干活——五六岁就帮家里卷烟、缝纽扣，断手指、得肺病。穷移民家庭为什么舍得让孩子去做工？因为全家就靠那点工钱活命。这就是 Jane Addams 在故事里面对的两难：禁童工"听起来天经地义"，可那个靠孩子工钱吃饭的母亲，反对也是真的。

**改革怎么推进的？**
① **National Child Labor Committee（全国童工委员会，1904 年成立）** 雇摄影师 Lewis Hine 拍下童工照片，用图像逼公众正视。
② 州一级陆续立法限制童工年龄和工时（比如 Jane Addams 推动的 **1893 年伊利诺伊法**）。
③ 联邦层面进展慢，而且反复被最高法院推翻，童工真正被全国禁止要等到 1938 年《公平劳动标准法》。

**女工保护**：进步主义改革者推动限制女性工时、改善车间安全。一个 AP 必知判例是 **Muller v. Oregon（1908 年）**——最高法院支持限制女性工时的法律，靠的是律师 Louis Brandeis 提交的"Brandeis Brief"（用社会和健康数据而非纯法条说理，这种方法是首次，开了先河）。

故事连接：Triangle 火灾就是"女工保护滞后"最惨烈的证据——146 个被锁在工厂里的女工，正是这套改革没及时够着的人。

关键句：童工/女工改革是进步主义"用政府管资本"的核心战场，但它走得很慢，常常滞后于最需要它的人。`,
        en: `The two big social-reform battlefields of the Progressive Era: **child labor** and **women's working conditions**. This card threads the story's scattered points into one exam topic.

**How bad was child labor?** Millions of children worked in factories, mines, and sweatshops (low-wage, high-pressure workshops) — five- and six-year-olds rolling cigars and sewing buttons, losing fingers, catching lung disease. Why would poor immigrant families let their children work? Because the whole family lived on those wages. That's the dilemma Jane Addams faces in the story: banning child labor "sounds obviously right," yet the mother living on her child's wages has a real objection too.

**How did reform advance?**
① The **National Child Labor Committee (founded 1904)** hired photographer Lewis Hine to capture images of child laborers, forcing the public to face what was happening.
② States gradually passed laws limiting children's age and work hours (like the **1893 Illinois law** Jane Addams pushed).
③ Federal progress was slow and repeatedly struck down by the Supreme Court; child labor wasn't truly banned nationwide until the 1938 Fair Labor Standards Act.

**Protecting women workers**: Progressive reformers pushed to limit women's hours and improve workplace safety. An AP must-know case is **Muller v. Oregon (1908)** — the Supreme Court upheld a law limiting women's working hours, because lawyer Louis Brandeis filed the "Brandeis Brief" (arguing with social and health data rather than pure legal text — this was a first, and it started a whole new approach).

the Triangle fire is the most brutal proof of "lagging protection for women workers" — the 146 women locked inside that factory were exactly the people this reform hadn't reached in time.

Key sentence: child- and women-labor reform was a core battlefield of Progressivism's "government reining in capital," but it moved slowly and often lagged behind those who needed it most.`,
      },
      xiaoweiNote: {
        cn: `老师说 Muller v. Oregon（1908 年）和"Brandeis Brief"是 AP 容易考的小点，别只背 Triangle。我的记法：**Lewis Hine 拍照片 + Brandeis 用数据打官司**——两个人都是"用证据推改革"，跟 Jane Addams 的调查是一个套路。`,
        en: `My teacher said Muller v. Oregon (1908) and the "Brandeis Brief" are easy AP points to miss, so don't just memorize Triangle. My memory hook: **Lewis Hine takes photos + Brandeis argues with data** — both "drive reform with evidence," the same playbook as Jane Addams's surveys.`,
      },
    },

    {
      id: 'naacp-and-racial-blind-spot',
      termCn: 'NAACP 1909 / Wilson 再隔离 / 进步主义的黑人盲区',
      termEn: 'NAACP 1909 / Wilson\'s Federal Resegregation / Progressivism\'s Racial Blind Spot',
      defCn: 'NAACP（全国有色人种协进会）是 1909 年成立的组织，目标是通过法律手段争取黑人的宪法权利。它在进步时代诞生，因为那个"进步"时代的大多数联邦改革根本没有帮到黑人美国人，甚至 Wilson 总统上台后还让联邦政府更加种族隔离。',
      defEn: 'The NAACP (National Association for the Advancement of Colored People) was founded in 1909 to fight for Black Americans\' constitutional rights through legal action. It was born during the Progressive Era precisely because most of that era\'s federal reforms did nothing for Black Americans — and President Wilson even made racial segregation inside the federal government worse.',
      standardRef: ['APUSH KC-7.1.I', 'APUSH KC-7.4.I', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'theodore-roosevelt', nodeId: 'tr-n9', context: 'TR zoom-out 提到进步主义的边界，优生学与种族隔离问题' },
        ],
      },
      standaloneText: {
        cn: `进步时代的教材往往只讲 TR 打托拉斯、Jane Addams 办睦邻之家——却几乎不讲黑人美国人在这段时间经历了什么。这是 APUSH 近年频繁出现的"进步的盲区"考点。

**1908 年斯普林菲尔德种族暴动** — 导火索：林肯家乡伊利诺伊州斯普林菲尔德，白人暴徒袭击黑人社区，杀害至少 2 人、烧毁数十栋房屋。这发生在"进步"的北方，让全国自由派深感震惊。

**NAACP（全国有色人种协进会）成立，1909 年 2 月 12 日** — 正是林肯诞辰百年。创始人群体横跨黑白：**W.E.B. Du Bois（杜波依斯）**、Ida B. Wells-Barnett（爱达·威尔斯-巴内特）、Mary Church Terrell、以及白人废奴主义者后裔 Oswald Garrison Villard 等约 60 人联署建立。目标：通过法律手段保障宪法第 13、14、15 修正案承诺的权利。

**Woodrow Wilson 的联邦再隔离（1913 年）** — 这是常被教材省略的硬事实。Wilson（民主党，南方人）上任不到一个月，内阁就开始推行联邦公务员队伍的种族隔离：邮政总局、财政部等机构分开工作区、洗手间、午餐室，黑人雇员被降职或解雇。内战后好不容易建立起来的联邦政府黑人中产阶层被系统性打击。这发生在同一个"进步时代"。

考点关键句：进步主义改革了很多——但几乎所有联邦层面的改革都建立在默许或强化种族隔离的基础上。NAACP 是那个时代少数正面对抗这一盲区的力量。AP 常考：为什么进步主义者能推动劳工保护、女性投票，却对系统性种族歧视保持沉默？`,
        en: `Progressive Era textbooks usually focus on TR's trust-busting and Jane Addams's settlement houses — and barely mention what Black Americans experienced during those same years. This "blind spot of progress" question has appeared frequently on recent APUSH exams.

**Springfield Race Riot, 1908** — A white mob attacked the Black community in Springfield, Illinois — Lincoln's home city — killing at least 2 people and burning dozens of homes. That it happened in the "progressive" North shocked liberal America.

**NAACP founded, February 12, 1909** — Lincoln's centennial birthday. About 60 co-signers, Black and white: **W.E.B. Du Bois**, Ida B. Wells-Barnett, Mary Church Terrell, and white abolitionist descendants like Oswald Garrison Villard. Goal: use legal means to secure the rights promised by the 13th, 14th, and 15th Amendments.

**Woodrow Wilson's federal resegregation (1913)** — a hard fact often left out of textbooks. Within weeks of Wilson taking office, his cabinet moved to segregate the federal civil service: the Post Office, Treasury, and other departments installed separate workspaces, bathrooms, and lunchrooms; Black employees were demoted or dismissed. The Black federal middle class built since the Civil War was systematically dismantled — during the same "Progressive Era."

Key exam sentence: Progressivism reformed a great deal — but nearly every federal reform was built on a foundation that tolerated or strengthened racial segregation. The NAACP was one of the few forces in that era that directly confronted this blind spot. AP often asks: how could Progressives push for labor protections and women's suffrage while staying silent on systemic racial discrimination?`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡就是"进步，到底进步到了谁身上"这个问题的最直接答案。NAACP 1909 年成立、Wilson 1913 年推行再隔离——两件事年份别搞混。**Du Bois（杜波依斯）**是 NAACP 最重要的黑人创始人，他主张直接争取完整公民权（和 Booker T. Washington 的"先经济后政治"路线是对立面，这个对比 AP 也爱考）。`,
        en: `My teacher said this card is the most direct answer to the question "progress — exactly whom did it reach?" NAACP founded 1909, Wilson resegregates 1913 — don't mix up the years. **Du Bois** is the NAACP's most important Black founder; he argued for demanding full civil rights directly (the opposite of Booker T. Washington's "economic first, politics later" approach — AP loves testing that contrast too).`,
      },
    },

    {
      id: 'election-of-1912',
      termCn: '1912 三方大选（TR 公鹿党 / Taft / Wilson）',
      termEn: 'Election of 1912 (TR Bull Moose / Taft / Wilson / Debs)',
      defCn: '1912 年美国大选有四位主要候选人，其中 TR 从共和党出走自建进步党（外号"公鹿党"）。这场选举展示了进步主义内部的分歧，以及第三党如何把主流党的选票一分为二，让原本可能落选的人赢得大选。',
      defEn: 'The 1912 U.S. presidential election had four major candidates, including TR who broke from the Republicans to form his own Progressive Party (nicknamed the "Bull Moose Party"). This election shows how Progressivism was divided from within, and how a third party can split a major party\'s vote — handing the win to someone who might otherwise have lost.',
      standardRef: ['APUSH KC-7.1.II', 'CA HSS 11.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'theodore-roosevelt', nodeId: 'tr-n8', context: 'TR 线提到他与继任者 Taft 的决裂，以及第三党参选的背景' },
        ],
      },
      standaloneText: {
        cn: `1912 年大选是 APUSH Period 7 最爱考的选举，原因只有一个：它展示了"进步主义内部的分裂"，以及第三党如何拆散主流党。

**四位候选人，各代表一种立场：**

- **Theodore Roosevelt（共和党出走）— 进步党（"公鹿党"Bull Moose Party）**
  平台：New Nationalism（新国家主义）。主张联邦政府强力监管大企业（不一定拆散，而是管住），设立社会保险、8 小时工作制、女性选举权。TR 在初选中输给 Taft 后出走建党，自称"壮如公鹿"，党名由此而来。

- **William Howard Taft（共和党现任总统）**
  TR 的继任者，被认为背离了进步主义路线——对大企业太软、还解雇了 TR 任命的森林局长 Pinchot（保护自然的人）。TR 对他极度失望，才决定参选挑战他。

- **Woodrow Wilson（民主党）**
  平台：New Freedom（新自由主义）。主张拆散大企业（而非只是监管），减关税、银行改革、新反垄断法。最终当选，原因：TR 与 Taft 分裂了共和党选票。

- **Eugene V. Debs（社会党）**
  获约 6% 选票——社会主义候选人在美国大选史上的最高记录。代表劳工和激进改革诉求。

**结果：** Wilson 以 41.8% 选票赢得 40 个州压倒性胜利（选举人团）。TR 第二（27.4%，88 张选举人票）。Taft 第三，仅赢 2 州——现任总统得票率之低在两党史上史无前例。

考点关键句：1912 年的真正意义 = 进步主义有多个版本，TR 的"New Nationalism（管住大企业）"和 Wilson 的"New Freedom（拆散大企业）"代表两种对政府角色的不同理解，AP 爱考这个对比。`,
        en: `The 1912 election is one of the most-tested elections in APUSH Period 7, for one reason: it shows Progressivism splitting from within, and how a third party can fracture a major party.

**Four candidates, four positions:**

- **Theodore Roosevelt (Republican breakaway) — Progressive Party ("Bull Moose Party")**
  Platform: New Nationalism. Called for strong federal *regulation* of big business (not necessarily breaking it up, but controlling it), plus social insurance, an 8-hour workday, and women's suffrage. After losing the Republican primary to Taft, TR bolted and formed his own party — he reportedly said he felt "as strong as a bull moose," and the name stuck.

- **William Howard Taft (Republican incumbent)**
  TR's chosen successor, seen as having drifted from the progressive course — too soft on big business, and he fired TR's appointed Forest Service chief Gifford Pinchot (a conservationist). TR's deep frustration drove him to challenge Taft.

- **Woodrow Wilson (Democrat)**
  Platform: New Freedom. Called for breaking up big business (not just regulating it), cutting tariffs, banking reform, and new antitrust law. Won the election because TR and Taft split the Republican vote between them.

- **Eugene V. Debs (Socialist Party)**
  Won about 6% of the popular vote — the highest share ever for a Socialist candidate in a U.S. presidential election. Represented labor and radical reform demands.

**Result:** Wilson won 40 states with 41.8% of the popular vote (a landslide in the Electoral College). TR finished second (27.4%, 88 electoral votes). Taft came third, winning only 2 states — the lowest popular-vote share of any sitting president in the two-party era.

Key exam sentence: the real significance of 1912 = Progressivism had multiple versions; TR's New Nationalism ("regulate big business") versus Wilson's New Freedom ("break up big business") represents two different ideas about the government's role — AP loves testing this contrast.`,
      },
      xiaoweiNote: {
        cn: `这场选举 AP 至少有两种考法：① 选择题问"谁是谁的平台"，② SAQ/LEQ 让你分析 1912 年大选如何反映进步主义内部分歧。记忆钩子：TR = 管（New Nationalism 管大企业），Wilson = 拆（New Freedom 拆大企业），Taft = 不动（被认为保守了）。公鹿党名字别混——Bull Moose 是公麋鹿，不是公牛。`,
        en: `AP tests this election at least two ways: ① multiple-choice on who had which platform, and ② SAQ/LEQ asking how 1912 reflects divisions within Progressivism. Memory hook: TR = regulate (New Nationalism controls big business), Wilson = break up (New Freedom dismantles it), Taft = do nothing (seen as backing off). And the name: Bull Moose is an adult male moose, not a bull — don't mix that up.`,
      },
    },

    {
      id: 'changing-role-of-government',
      termCn: '政府角色转变 / 进步主义 + 直接民主',
      termEn: 'The Changing Role of Government / Progressivism + Direct Democracy',
      defCn: '进步时代是美国政府角色的一次大转变：从"放手不管"（laissez-faire，让市场和大公司自己来）变成"主动出手"——用法律去管垄断企业、保护工人安全、保护消费者、保护自然。这也是整个 APUSH Period 7 的核心大概念。',
      defEn: 'The Progressive Era marked a major shift in the role of American government: from "hands-off" (laissez-faire — let the market and big companies do whatever they want) to "actively stepping in" — using laws to regulate monopolies, protect workers, protect consumers, and protect nature. This is the central big idea of the whole APUSH Period 7.',
      standardRef: ['APUSH KC-7.1.II', 'AP US Gov — Civic Participation'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'theodore-roosevelt', nodeId: 'tr-n9', context: 'TR 线 zoom-out 列举修正案 + initiative/referendum/recall 直接民主工具' },
        ],
      },
      standaloneText: {
        cn: `这是把整门课串起来的"大概念"卡——AP 的核心论点题最爱问：**进步时代，政府的角色怎么变了？**

**变化前（镀金时代）**：联邦政府基本"放手不管"（laissez-faire，就是让市场随便去）——任由工业巨头垄断、压榨工人、污染环境。普通人没什么办法对抗巨富和被收买的政客。

**进步时代的大转变**：政府第一次**主动**用权力去管资本、护工人、护环境。具体表现（把前面几张卡归类）：
- **管资本**：trust-busting + Sherman/Clayton 反垄断法。
- **护消费者**：1906 年食药法 + 肉类检验法。
- **护工人**：Triangle 火灾之后的工厂安全法、限童工/女工工时。
- **护环境**：conservation（国家森林/公园）。
- **改宪法**：第 16/17/18/19 修正案。

**直接民主工具（AP US Gov 必考）**：进步主义者还想让普通人能绕过被收买的州议会，于是州一级推出三件工具——
- **initiative（公民立法提案）**：选民自己提出法律。
- **referendum（公投）**：选民直接对法律投票。
- **recall（罢免）**：选民投票把不称职的官员撤掉。
记忆口诀：**提案-公投-罢免 = I-R-R**。

⚠️ 最重要的角度：政府角色变大是真的"进步"，但同一批进步主义者**同时**推动优生学（多州立强制绝育法）、帝国主义、还容忍种族隔离——"更强的政府"既能保护人，也能更有力地排斥人。这就是为什么老师那句话是"进步，到底进步到了谁身上？"

关键句：进步时代 = 美国从"政府放手"转向"政府主动管事"的转折点，但这份"进步"分配得很不均匀。`,
        en: `This is the "big concept" card that ties the whole topic together — AP's core argument questions love to ask: **how did the role of government change in the Progressive Era?**

**Before (the Gilded Age)**: the federal government was basically hands-off (laissez-faire — just let the market do whatever) — letting industrial giants monopolize, exploit workers, and pollute. Ordinary people had almost no way to fight back against the wealthy and the politicians they'd bought.

**The big shift in the Progressive Era**: for the first time the government **actively** used its power to regulate capital, protect workers, and protect the environment. Concretely (sorting the earlier cards):
- **Regulating capital**: trust-busting + the Sherman and Clayton antitrust acts.
- **Protecting consumers**: the 1906 Pure Food and Drug Act + Meat Inspection Act.
- **Protecting workers**: post-Triangle factory safety laws, limits on child and women's work hours.
- **Protecting the environment**: conservation (national forests and parks).
- **Amending the Constitution**: the 16th, 17th, 18th, and 19th amendments.

**Direct democracy tools (an AP US Gov must-know)**: Progressives also wanted ordinary people to be able to go around state legislatures that had been bought by powerful interests, so states rolled out three tools —
- **initiative**: voters propose a law themselves.
- **referendum**: voters vote directly on a law.
- **recall**: voters vote to remove an unfit official.
Mnemonic: **propose-vote-remove = I-R-R**.

⚠️ The most important framing: the larger role of government was genuine "progress," but the same Progressives **simultaneously** pushed eugenics (many states passed forced-sterilization laws), imperialism, and tolerated racial segregation — "a stronger government" can protect people, but it can also exclude people more forcefully. That's why my teacher's question is "progress, exactly whom did it reach?"

Key sentence: the Progressive Era = the turning point where America shifted from "hands-off government" to "government that actively governs" — but that "progress" was distributed very unevenly.`,
      },
      xiaoweiNote: {
        cn: `这张卡其实是整门课的"骨架"——AP 写长答案，与其一个个背事件，不如先答"政府角色变了"这条主线，再用 trust-busting、Triangle、修正案当证据填进去。直接民主 I-R-R 三件套是 AP US Gov 那门课的考点，别漏。`,
        en: `This card is really the "skeleton" of the whole topic — for AP long-answer essays, instead of memorizing events one by one, start your answer with the through-line "the role of government changed," then fill in trust-busting, Triangle, and the amendments as evidence. The direct-democracy I-R-R trio is an AP US Gov exam point — don't miss it.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Theodore Roosevelt 一边拆开垄断巨头、留下两亿多英亩荒野、替普通人出头，一边公开相信白人种族更优越、支持优生学、把美国变成抢殖民地的帝国。

你觉得这是"功劳加缺点"两件分开的事，还是同一套世界观的两面？如果 AP 让你评价 TR，你会怎么在一篇文章里同时写他的光和影？`,
      en: `Theodore Roosevelt broke apart monopoly giants, left more than two hundred million acres of wilderness, and stood up for ordinary people. At the same time, he openly believed the white race was superior, backed eugenics, and turned America into an empire grabbing for colonies.

Do you see this as "credit plus flaws" — two separate things — or as two faces of the same worldview? If AP asked you to evaluate TR, how would you write both his light and his shadow into a single essay?`,
      hintCn: `提示：试着用故事里的对位——TR 的"大棒"朝里是保护普通人、朝外是征服小国，是同一根大棒。同理，"用政府力量让美国更强更好"这一个信念，既造出了改革（反垄断、护荒野），也造出了排斥（优生学、帝国）。

写作思路：① 承认他真实的进步（拆 trust、conservation、激活反垄断法）；② 列出真实的偏见（白人优越言论、支持优生学、巴拿马运河"我拿下了运河区"）；③ 论证这两者不是分开的，而是同一套想法的两面——结论用老师那句"进步，到底进步到了谁身上？"

进一步想想：今天你身边有没有"做了真好事、又藏着真偏见"的人或机构？你会因为他的功劳替偏见开脱吗？`,
      hintEn: `Hint: try the story's pairing — TR's "big stick," turned inward, protects ordinary people; turned outward, it conquers small nations. Same stick. Likewise, the single belief "use government power to make America stronger and better" produced both reform (antitrust, conservation) and exclusion (eugenics, empire).

Writing approach: ① acknowledge his real progress (trust-busting, conservation, activating antitrust law); ② list the real prejudice (white supremacy rhetoric, backing eugenics, "I took the Canal Zone"); ③ argue these aren't separate — they share one root. Close with your teacher's line: "progress, exactly whom did it reach?"

Going further: is there a person or institution near you today that "did something truly good and holds a real prejudice"? Would you excuse the prejudice because of the good?`,
      conceptsActivated: ['trust-busting', 'conservation', 'changing-role-of-government'],
    },
    {
      id: 'q2',
      cn: `Triangle 火灾的工人们活着的时候罢过工、喊过"给我们安全的工厂、别再锁门"，多数人当她们是"闹事的外国佬"，没人真听。可一旦一天死了 146 个，全城就哭了，纽约很快通过了 30 多条工厂安全法。

为什么有些人非要"死给你看"，社会才肯听见他们？如果你是 AP 老师，要出一道关于 Triangle 火灾的 DBQ 题，你会怎么提问？`,
      en: `The Triangle workers, while alive, went on strike and cried out "give us a safe factory, stop locking the doors," and most people took them for "foreign troublemakers" and didn't really listen. But once 146 died in a single day, the whole city wept, and New York quickly passed 30-plus factory safety laws.

Why do some people have to "die for you to see" before society will hear them? If you were an AP teacher writing a DBQ on the Triangle fire, how would you phrase the question?`,
      hintCn: `提示：DBQ 通常会给几份史料——1909 年"两万人起义"的罢工诉求、工厂锁门的原因、火灾目击报道、老板被判无罪的判决、火后 Factory Investigating Commission 报告——让学生分析"为什么改革滞后于最需要它的人"。没有标准答案，重点是用证据说话。

可能的提问角度：
- "Triangle 火灾后的工厂安全法，是 146 人'用命换来的'吗？这种'用人命推动改革'的模式说明了进步时代的什么特征？"
- "把 1909 年罢工的诉求和 1911 年火灾后的立法做对比，'谁的声音被听见'取决于什么？"

进一步想想：今天还有没有"先出大事、才有人回头管"的领域？这是进步必然的代价，还是可以避免的？`,
      hintEn: `Hint: a DBQ usually provides several sources — the 1909 "Uprising of the 20,000" strike demands, why the factory doors were locked, eyewitness reports of the fire, the not-guilty verdict, the post-fire Factory Investigating Commission report — and asks students to analyze "why reform lagged behind those who needed it most." There's no single correct answer; the point is using evidence.

Possible question angles:
- "Were the post-Triangle factory safety laws 'bought with the lives' of 146 people? What does this pattern of 'reform driven by death' reveal about the Progressive Era?"
- "Comparing the 1909 strike demands with the post-1911 legislation, what determines 'whose voice gets heard'?"

Going further: are there areas today where "something big has to happen first before anyone pays attention"? Is this an inevitable cost of progress, or something that can be avoided?`,
      conceptsActivated: ['triangle-fire-labor-reform', 'women-and-child-labor-reform', 'changing-role-of-government'],
    },
    {
      id: 'q3',
      cn: `第 19 修正案（1920 年）让女性获得了投票权，课本常说这是进步时代"送给女性的礼物"。但许多有色人种女性，尤其南方黑人女性，此后仍长期被人头税、识字测验挡在投票箱外，要等到 1965 年。

如果有人对你说"进步时代让所有美国人都更自由了"，你会怎么用第 19 修正案这个例子，礼貌但有理有据地反驳（或部分同意）？`,
      en: `The 19th Amendment (1920) gave women the vote, and textbooks often call it the Progressive Era's "gift to women." But many women of color, especially Black women in the South, were still kept from the ballot box for decades by poll taxes and literacy tests, until 1965.

If someone told you "the Progressive Era made all Americans freer," how would you use the 19th Amendment as an example to politely but rigorously push back — or partly agree?`,
      hintCn: `提示：可以用"对一部分人是真进步，对另一部分人是空头支票"这个双层结构。第 19 修正案条文上说"投票权不得因性别被剥夺"——但它没说种族，南方各州就用"看起来中性"的人头税、识字测验把黑人女性（和黑人男性）继续挡在外面。这正是老师那句"进步，到底进步到了谁身上？"的最佳证据。

进一步想想：这种"用看起来中性的规则、其实达到排斥目的"的手法，你还能在哪里见到？为什么"写在纸上的平等"和"真实发生的事"会差这么远？

连接：把这一题和 Triangle（女工的命要死了才被算数）、优生学（移民被论证为"天生低劣"）放在一起，你会发现整个进步时代都在回答同一个问题——"普遍权利"到底有多普遍？`,
      hintEn: `Hint: use the two-layer structure "real progress for some, an empty promise for others." The 19th Amendment's text says "the right to vote shall not be denied on account of sex" — but it says nothing about race, so Southern states used "seemingly neutral" poll taxes and literacy tests to keep Black women (and Black men) out. This is the best evidence for your teacher's question, "progress, exactly whom did it reach?"

Going further: where else can you see this tactic of "using rules that look neutral but actually achieve exclusion"? Why does "equality on paper" differ so much from "what actually happens"?

Connection: put this question alongside Triangle (women's lives counted only after they died) and eugenics (immigrants argued to be "inferior by birth"), and you'll see the whole Progressive Era answering one question — how universal were the "universal rights"?`,
      conceptsActivated: ['progressive-amendments', 'women-and-child-labor-reform', 'changing-role-of-government'],
    },
  ],
};

export default notebook;
