// ─── 同伴笔记本架构 v1 · Great Depression & New Deal ──────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不复述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系（3 条故事线：FDR / Frances Perkins / 被挤走的佃农）：
//   - storyboard 提供情感锚点（百日新政 / AAA 把佃农挤出土地 / 社保两个洞 / court-packing）
//   - notebook 提供考点闭环（1929 股灾成因 / Hoover vs FDR / 字母机构清单 / Dust Bowl-Okies / 凯恩斯 vs Hayek）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 7（CED Topic 7.10 Causes / 7.11 New Deal / 7.12 Interwar）
//   - AP US Government & Politics（New Deal 联邦权扩张 + court-packing 三权分立）
//   - AP Macroeconomics（fiscal policy 入门：凯恩斯需求管理 vs 自由市场）
//   - California HSS 11.6（Great Depression & New Deal）
//
// 史实对账：lib/history-narratives/great-depression-1933-factledger.md
//   - Triangle 火 146（已统一，不写回 145）
//   - 社保排除农业/家政工：结果上挡掉多数黑人 (verified) + 动机"种族 vs 行政可行性"学界有争议（对冲，不写回纯种族交易）
//   - Dust Bowl Okies（白人西迁加州，约 30-40 万）≠ 黑人佃农北迁（Great Migration，约 600 万）—— 两条不同的迁移，不混
//
// 名字分级 / careful framing / 不创伤模拟 / 佃农不被当成全体受害者代言（per 任务硬规则）
//
// schemaVersion: 1 · notebookVersion: great-depression-1933-v1

export var notebook = {
  topicId: 'great-depression-1933',
  topicNameCn: '大萧条与新政',
  topicNameEn: 'The Great Depression & the New Deal',
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
    cn: `今天 Dr. Park 说，接下来我们学美国历史里超大的一块：大萧条和新政（1929-1939）。
她说这块是 APUSH Period 7 的"重灾区"，DBQ 和选择题都爱考。

她给了一张纸，上面写着这些名字：

Franklin D. Roosevelt（罗斯福，FDR）、Frances Perkins（弗朗西丝·珀金斯）、
Herbert Hoover（胡佛）；还有两个经济学家 Keynes（凯恩斯）和 Hayek（哈耶克）。

还有一串词我得搞清楚：the Great Depression（大萧条）、the New Deal（新政）、
relief / recovery / reform（救济·复兴·改革，三 R）、
AAA、Social Security（社会保障）、court-packing（法院改组）、
Keynesian economics（凯恩斯主义）、laissez-faire（自由放任）、
Dust Bowl（黑色风暴）、the Great Migration（大迁徙）。

我先记下来，等下读三个故事——罗斯福、Perkins、还有一个被新政农业补贴挤出土地的黑人佃农——
读完再回来对照这张单子，看我能不能解释清楚。

Dr. Park 还说了一句我记在第一页：
"新政不是一个'政府救了所有人'的童话。它真的救了几千万人，又真的系统地漏掉了同一群最没声音的人。
AP 要你能同时讲清这两面，而不是只选一面。"`,
    en: `Today Dr. Park said we're starting a huge chunk of American history:
the Great Depression and the New Deal (1929-1939). She said this is a hot zone
in APUSH Period 7 — both DBQs and multiple choice love it.

She handed out a sheet with these names:

Franklin D. Roosevelt (FDR), Frances Perkins, Herbert Hoover;
plus two economists, Keynes and Hayek.

And a string of terms I need to get straight: the Great Depression, the New Deal,
relief / recovery / reform (the three R's), AAA, Social Security, court-packing,
Keynesian economics, laissez-faire, the Dust Bowl, the Great Migration.

Let me write these down. After I read the three stories — Roosevelt, Perkins,
and a Black sharecropper pushed off his land by a New Deal farm subsidy —
I'll come back and check whether I can explain each one.

Dr. Park also said one line I wrote on the first page:
"The New Deal is not a fairy tale where 'the government saved everyone.' It really
did save tens of millions, and it really did systematically leave out the same
group with the least voice. AP wants you to hold both sides at once, not pick one."`,
    keyTerms: [
      { cn: '大萧条', en: 'the Great Depression' },
      { cn: '新政', en: 'the New Deal' },
      { cn: '救济·复兴·改革（三 R）', en: 'relief, recovery, reform' },
      { cn: '自由放任', en: 'laissez-faire' },
      { cn: '财政政策 / 赤字开支', en: 'fiscal policy / deficit spending' },
      { cn: '凯恩斯主义', en: 'Keynesian economics' },
      { cn: '分成租佃 / 佃农', en: 'sharecropping / tenant farmer' },
      { cn: '黑色风暴', en: 'the Dust Bowl' },
      { cn: '大迁徙', en: 'the Great Migration' },
      { cn: '法院改组案', en: 'court-packing' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '富兰克林·罗斯福',
        nameEn: 'Franklin D. Roosevelt',
        ipa: '/ˈfræŋklɪn ˈroʊzəvɛlt/',
        roleCn: '第 32 任美国总统，新政缔造者，把联邦权扩张到前所未有的程度',
        roleEn: '32nd US president, architect of the New Deal, expanded federal power',
        mustKnow: true,
        audioKey: 'franklin-roosevelt',
      },
      {
        nameCn: '弗朗西丝·珀金斯',
        nameEn: 'Frances Perkins',
        ipa: '/ˈfrænsɪs ˈpɜːrkɪnz/',
        roleCn: '美国首位女性内阁部长（劳工部长），社会保障法主设计者',
        roleEn: 'First woman in a US cabinet (Sec. of Labor), chief designer of Social Security',
        mustKnow: true,
        audioKey: 'frances-perkins',
      },
      {
        nameCn: '赫伯特·胡佛',
        nameEn: 'Herbert Hoover',
        ipa: '/ˈhɜːrbərt ˈhuːvər/',
        roleCn: 'FDR 前任总统，奉行自由放任，常作新政的对照面',
        roleEn: "FDR's predecessor, laissez-faire, the foil to the New Deal",
        mustKnow: true,
        audioKey: 'herbert-hoover',
      },
      {
        nameCn: '约翰·梅纳德·凯恩斯',
        nameEn: 'John Maynard Keynes',
        ipa: '/dʒɒn ˈmeɪnərd keɪnz/',
        roleCn: '英国经济学家，主张萧条时政府赤字开支拉动需求',
        roleEn: 'British economist, argued for government deficit spending in a slump',
        mustKnow: true,
        audioKey: 'john-maynard-keynes',
      },
      {
        nameCn: '弗里德里希·哈耶克',
        nameEn: 'Friedrich Hayek',
        ipa: '/ˈfriːdrɪk ˈhaɪɛk/',
        roleCn: '奥地利学派经济学家，认为政府干预扭曲市场、延长萧条',
        roleEn: 'Austrian-school economist, held that government meddling prolonged the slump',
        mustKnow: true,
        audioKey: 'friedrich-hayek',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：1929 股灾 + 萧条成因（独立，故事只快带过机制）──
    {
      id: 'crash-1929-causes',
      termCn: '1929 股市崩盘 / 大萧条成因',
      termEn: '1929 Crash / Causes of the Depression',
      defCn: '大萧条（the Great Depression）是 1929 年开始的美国历史上最严重经济崩溃——工厂关门、银行倒闭、超过四分之一的人失业，整整持续了约十年。考试最爱问：它是怎么"滚"起来的，不是哪一天开始的。',
      defEn: 'The Great Depression was the worst economic collapse in US history, starting in 1929. Factories shut, banks failed, and over one in four workers lost their jobs — it lasted about ten years. The exam focuses on how it snowballed, not just which day it started.',
      standardRef: ['APUSH CED 7.10', 'CA HSS 11.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'fdr', nodeId: 'fdr-n2', context: 'FDR 那条故事线第 2 节：1929.10 股市崩，滚雪球式蔓延到 1933 约 1300 万失业' },
        ],
      },
      standaloneText: {
        cn: `1929 年 10 月 29 日，星期二，纽约股市崩盘。这一天被叫做 **Black Tuesday（黑色星期二）**。
无数人的财富一夜变成废纸。这是大萧条（the Great Depression）的开端，也是美国历史上最严重的一次经济崩溃。

但崩盘只是导火索。Dr. Park 一直强调："考的是成因，不是那一天。"

几个主要原因：
① **股市过度投机 + 用借来的钱炒股**（buying on margin，就是借钱赌股票）：股价被炒到远超真实价值。
② **银行体系脆弱**：很多银行把储户的钱也拿去炒股、放高风险贷款，崩盘一来就垮。
③ **生产过剩 + 消费不足**：工厂造的东西，老百姓买不起，因为贫富差距太大。
④ **农业早就在萧条**：1920 年代农产品价格一直很低，农民早就先垮了。

然后是**滚雪球**，也是 DBQ 最爱画的那条因果链：
股市垮 → 银行垮 → 工厂关 → 工人失业 → 没人买东西 → 更多工厂关。

到 1933 年，全国大约 **1300 万人失业**——差不多每四个工作的人里就有一个没活干（约 25%）。
1930-1933 年间，累计有 **九千多家银行倒闭**。
股市从 1929 年的高点跌掉了近 90%。

🔗 FDR 那条故事线第 2 节，他自己把这条滚雪球链条讲了一遍——这张图就是把他说的整理清楚。`,
        en: `On Tuesday, October 29, 1929, the New York stock market crashed — that day is called
**Black Tuesday**. Countless people's wealth turned to wastepaper overnight. This was the
start of the Great Depression, the worst economic collapse in American history.

But the crash was only the trigger. Dr. Park keeps saying: "The exam tests the causes,
not the day."

The main causes:
① **Stock speculation + buying on margin** (buying stocks with borrowed money):
   prices were driven far above real value.
② **A fragile banking system**: many banks gambled depositors' money on stocks and
   risky loans, so when the crash hit, they collapsed.
③ **Overproduction + underconsumption**: factories made goods ordinary people
   couldn't afford, because the wealth gap was too wide.
④ **Agriculture was already in a slump**: farm prices stayed low through the 1920s,
   so farmers collapsed first.

Then the **snowball** — the cause chain DBQs love to draw:
market falls → banks fail → factories close → workers lose jobs → no one buys →
more factories close.

By 1933 about **13 million people** were out of work — roughly one in four workers
(about 25%). Between 1930 and 1933, over **9,000 banks** failed in total. The stock
market fell nearly 90% from its 1929 peak.

🔗 In Roosevelt's story,, he walks through this snowball chain himself —
this table just organizes what he said.`,
      },
      xiaoweiNote: {
        cn: `老师说选择题最爱挖一个坑："大萧条是 1929 股市崩盘'造成'的吗？"
标准答案是：崩盘是**触发器（trigger）**，不是**根本原因（root cause）**。
真正的根子是上面那 4 条——投机炒股 / 银行脆弱 / 生产过剩 / 农业先垮。

我的记忆口诀：**"崩盘是火柴，柴堆早就堆好了。"**
数字三件套背熟：1300 万失业 / 约 25% / 9000+ 家银行。`,
        en: `Teacher says multiple choice loves this trap: "Did the 1929 crash *cause* the Depression?"
The correct answer: the crash was the **trigger**, not the **root cause**.
The real roots are the 4 points above — speculation / fragile banks / overproduction /
agriculture already failing.

My mnemonic: **"The crash was the match; the woodpile was already stacked."**
Memorize the number trio: 13 million jobless / about 25% / 9,000+ banks.`,
      },
    },

    // ── 卡 2：Hoover vs FDR（独立，对照框架）──
    {
      id: 'hoover-vs-fdr',
      termCn: 'Hoover vs FDR / 两种应对',
      termEn: 'Hoover vs FDR / Two Responses',
      defCn: 'Hoover 是 FDR 的前任总统，他相信市场能自己缓过来，不愿让联邦政府大举出手。FDR 正相反——他直接让政府花钱、造工作、救人。这是考试最爱考的"两种对待危机的根本立场"。',
      defEn: 'Hoover was FDR\'s predecessor. He believed the market could recover on its own and kept the federal government from acting big. FDR did the opposite — he had the government spend directly, build jobs, and help people. The exam loves this as a contrast of two fundamental approaches to crisis.',
      standardRef: ['APUSH CED 7.10', 'APUSH CED 7.11', 'CA HSS 11.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'fdr', nodeId: 'fdr-n2', context: 'FDR 那条故事线第 2 节："前一位总统说政府别插手、市场会自己缓过来，等了三年反而更糟"' },
        ],
      },
      standaloneText: {
        cn: `这道题考的是**对比**：同一场危机，前后两个总统的态度差在哪。

**Herbert Hoover（胡佛）**，FDR 的前任。他主体上信 **laissez-faire（自由放任）**——
意思是政府应该尽量别插手经济，让市场自己缓过来。
他更看重让企业、慈善机构、地方政府自愿出手，不靠联邦。

要公平地说一句：胡佛**不是什么都没做**。后期他搞过 RFC 复兴金融公司，也支持过一些公共工程。
可他的底线是：不让联邦政府大举下场。
结果呢？等了三年，萧条没缓过来，反而更糟。
失业者搭的棚户区被人讽刺地叫做 **Hooverville（胡佛村）**——把怒气直接写进了他的名字。

**Franklin D. Roosevelt（FDR）**，1932 年靠"新政"承诺压倒性当选，1933 年 3 月就任。
他的思路正相反：**政府主动下场**。直接花钱、直接造工作、直接救人。
上任头一百天——史称 **the Hundred Days（百日新政）**——他推国会通过了一大堆法案，建了一连串新机构。
他还用 **fireside chats（炉边谈话）** 安抚人心。炉边谈话就是用收音机直接对全国人民讲话，稳住了银行挤兑。

考点关键句：Hoover = **laissez-faire / 有限干预**；FDR = **联邦政府主动责任 / 大规模干预**。
这不是"一个坏一个好"——是**两种关于"政府该管多宽"的根本立场**。

🔗 FDR 那条故事线第 2 节，他亲口说"前一位总统说政府别插手，市场会自己缓过来，等了三年反而更糟"——那个"前一位总统"就是 Hoover。`,
        en: `This question tests a **contrast**: in the same crisis, how did two presidents differ?

**Herbert Hoover**, FDR's predecessor, mostly believed in **laissez-faire** — the idea that
government should stay out of the economy and let the market recover on its own. He leaned
on businesses, charities, and local governments to act voluntarily, without big federal action.

To be fair: Hoover **did not do nothing**. Later on he created the RFC (a bank rescue agency)
and supported some public works. But his firm limit was: no massive federal intervention.
The result? Three years passed, and the slump didn't recover — it got worse. The shantytowns
of the jobless were mockingly called **Hoovervilles** — pinning the anger right on his name.

**Franklin D. Roosevelt (FDR)** won in a landslide in 1932 on a "New Deal" promise and took
office in March 1933. His approach was the opposite: **the government acts directly** —
spend money, build jobs, save people. In his first hundred days — called **the Hundred Days**
— he pushed a stack of new laws through Congress and launched many new agencies. He also used
**fireside chats** — radio talks straight to the nation — to calm people and stop bank runs.

Key exam line: Hoover = **laissez-faire / limited intervention**; FDR = **active federal
responsibility / large-scale intervention**. This isn't "one bad, one good" — it's
**two fundamental positions on how much the government should manage.**

🔗 In Roosevelt's story,, he says "the president before me had one answer: keep the
government out, the market will recover on its own; three years passed, it got worse."
That "president before me" is Hoover.`,
      },
      xiaoweiNote: {
        cn: `Dr. Park 提醒一个 careful framing：别把 Hoover 写成"啥也不干的笨蛋"——
他做过一些干预，只是不肯让联邦大举下场。AP 评分喜欢"准确的对比"，不喜欢"漫画式贬低"。

记忆钩子：看到 **Hooverville（胡佛村）** 就想到"老百姓把怒气安在他名字上"。
看到 **fireside chat（炉边谈话）** 就想到"FDR 用收音机直接跟你说话"。`,
        en: `Dr. Park flags a careful framing: don't write Hoover as "an idiot who did nothing" —
he did intervene some, just wouldn't let the federal government go all in. AP scoring likes
an *accurate* contrast, not a cartoon takedown.

Memory hooks: **Hooverville** = "people pinned their anger on his name."
**Fireside chat** = "FDR talking to you directly over the radio."`,
      },
    },

    // ── 卡 3：三 R + 字母机构（独立，roster）──
    {
      id: 'new-deal-3r-agencies',
      termCn: '新政三 R + 字母机构',
      termEn: "New Deal 3 R's + Alphabet Agencies",
      defCn: '新政（the New Deal）不是一部法律，而是 FDR 上任后推出的一大堆法案和新机构的总称，目标分三步：先让人活下去（救济 Relief）→ 让经济转起来（复兴 Recovery）→ 立规矩防下次再垮（改革 Reform）。',
      defEn: "The New Deal wasn't one law — it's the name for the big stack of laws and new agencies FDR launched. The goal had three steps: help people survive first (Relief) → get the economy moving again (Recovery) → set rules so it won't break again (Reform).",
      standardRef: ['APUSH CED 7.11', 'AP Gov (federalism)', 'CA HSS 11.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'fdr', nodeId: 'fdr-n3', context: 'FDR 那条故事线第 3 节：百日新政——三 R + CCC + AAA + 公共工程修桥水坝学校 + FDIC/SEC' },
        ],
      },
      standaloneText: {
        cn: `新政（the New Deal）不是一部法，是一**大堆**法案和新机构的总称。
记忆它们的钥匙就是三个字：**relief / recovery / reform（救济 / 复兴 / 改革，三 R）**。

- **Relief（救济）**：先让人活下去。给饿肚子的人发吃的，给没工作的人造活干。
- **Recovery（复兴）**：让经济重新转起来。抬物价、保就业。
- **Reform（改革）**：立规矩防它再垮。管银行、管股市、织安全网。

那一串"字母机构"（alphabet agencies），按三 R 分类最好记：

| 机构 | 全称 | 干什么 | R |
|---|---|---|---|
| **CCC** | Civilian Conservation Corps | 雇几百万年轻人去种树、修路、建公园 | Relief |
| **WPA** | Works Progress Administration | 大型公共工程，雇人修桥、盖学校、画壁画 | Relief |
| **TVA** | Tennessee Valley Authority | 在田纳西河谷建水坝、发电、防洪 | Recovery |
| **AAA** | Agricultural Adjustment Act | 发补贴让农民减产，抬农产品价格 | Recovery |
| **FDIC** | Federal Deposit Insurance Corp | 给银行存款上保险，银行倒了存款还在 | Reform |
| **SEC** | Securities & Exchange Commission | 监管股市，防再次过度投机 | Reform |
| **Social Security** | Social Security Act (1935) | 养老金 + 失业救济（见单独的卡） | Reform |

🔗 FDR 那条故事线第 3 节，他亲口讲了百日新政——CCC、AAA、公共工程（修桥水坝学校）、FDIC、SEC。这张表就是把他说的整理成考点。`,
        en: `The New Deal wasn't one law — it's the name for a **whole stack** of laws and new agencies.
The key to remembering them is three words: **relief / recovery / reform.**

- **Relief**: keep people alive first — feed the hungry, build work for the jobless.
- **Recovery**: get the economy turning again — lift prices, protect jobs.
- **Reform**: set rules so it won't break again — regulate banks, the stock market,
  and weave a safety net.

The "alphabet agencies" are easiest to remember sorted by the three R's:

| Agency | Full name | What it did | R |
|---|---|---|---|
| **CCC** | Civilian Conservation Corps | hired millions of young men to plant trees, build roads and parks | Relief |
| **WPA** | Works Progress Administration | big public works — bridges, schools, even murals | Relief |
| **TVA** | Tennessee Valley Authority | built dams, power, and flood control in the Tennessee Valley | Recovery |
| **AAA** | Agricultural Adjustment Act | paid farmers to grow less to lift crop prices | Recovery |
| **FDIC** | Federal Deposit Insurance Corp | insured bank deposits, so deposits survive a bank's collapse | Reform |
| **SEC** | Securities & Exchange Commission | regulated the stock market against renewed speculation | Reform |
| **Social Security** | Social Security Act (1935) | pensions + unemployment relief (its own card) | Reform |

🔗 In Roosevelt's story,, he describes the Hundred Days himself — the CCC, AAA,
public works (bridges, dams, schools), FDIC, SEC. This table just sorts what he said into
exam form.`,
      },
      xiaoweiNote: {
        cn: `老师说这是**最高频考点**——选择题超爱给一个机构名，问它属于哪个 R、干什么。
我的笨办法：先背三 R 的顺序——"先活下去（relief）→ 转起来（recovery）→ 别再垮（reform）"，
再把每个机构挂到一个 R 上。

最容易混的两个：**FDIC** 是保你**银行存款**的；**SEC** 是管**股市**的——别记反。
还有 **AAA** 在故事里有个大反讽（它把佃农挤出土地），看下一张卡。`,
        en: `Teacher says this is the **most-tested** point — multiple choice loves giving an agency
name and asking which R it belongs to and what it did. My method: memorize the order of the
three R's ("survive first → turn it around → don't break again"), then hang each agency on
one R.

The two easiest to mix up: **FDIC** insures your **bank deposits**; **SEC** regulates the
**stock market** — don't flip them. And **AAA** has a big irony in the story (it pushed
sharecroppers off their land) — see the next card.`,
      },
    },

    // ── 卡 4：AAA + 佃农被挤出（故事覆盖，三条故事线都讲到）──
    {
      id: 'aaa-sharecropper-displacement',
      termCn: 'AAA / 佃农被挤出土地',
      termEn: 'AAA / Sharecropper Displacement',
      defCn: 'AAA（农业调整法 1933）是新政里管农业的那部法——政府发补贴叫农民少种，来抬高粮价。但补贴支票寄给地主，地主拿了钱、不需要那么多佃农，就把佃农赶出了土地。同一笔"救农民"的钱，反而把最底层的农民赶走了。',
      defEn: 'The AAA (Agricultural Adjustment Act, 1933) was the New Deal law for farming — the government paid farmers a subsidy to grow less, so crop prices would rise. But the subsidy check went to the landlord. The landlord took the money, needed fewer sharecroppers, and drove them off the land. The same money meant to "save farmers" ended up pushing the poorest farmers out.',
      standardRef: ['APUSH CED 7.11', 'CA HSS 11.6', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['fdr-n4', 'fdr-n6', 'ds-n4', 'ds-n5', 'ds-n6'],
        xiaoweiNote: {
          cn: `三条故事线都讲到了，是这整门课最绝的"一笔钱三张脸"。

考点机制——先背这个：
农业的死结是，农民越拼命种，粮价跌得越狠，越穷。
AAA（Agricultural Adjustment Act，农业调整法，1933 年）的反直觉解法：
政府**发补贴奖励农民减产**——比如休耕、杀猪、犁掉棉花。供应少了，价格就回升。

但补贴支票是**寄给地主**的，因为地和合同是地主的。
南方很多地是黑人 sharecropper（佃农）租种的。
地主拿了钱要减产，就不再需要那么多佃农——于是**拿着政府支票把佃农赶出土地**。
一项估计，AAA 害约 200 万佃农失业。

FDR 那条故事线第 6 节、佃农那条故事线第 4-6 节，讲了同一笔钱的三张脸：
- 在华盛顿，它叫"救农民"（恩典）；
- 到地主手里，它叫"减产补贴"（利润）；
- 落到佃农头上，它变成"滚蛋"（把人赶上路的那只脚）。

careful framing：法律**纸面上**要求地主分一部分补贴给佃农，可执行这条的正是从中得利的地主，
分配普遍没落实。佃农那条故事线说得好——"一条好规矩交到错的人手里执行，变成一把更趁手的刀。"

考点关键句：AAA 通过**减产抬价**救了"农业大盘子"，却把最底层的佃农挤出了土地——
这是 DBQ 分析"新政对不同群体的差异影响"的经典案例。`,
          en: `All three stories cover this — it's the sharpest "one sum of money, three faces"
in the whole topic.

The exam mechanism (memorize this first): farming's deadlock — the harder farmers grow,
the more crop prices fall, the poorer they get. The AAA's (Agricultural Adjustment Act,
1933) counterintuitive fix: the government **pays farmers a subsidy to grow less** (leave
fields fallow, slaughter hogs, plow cotton under), so supply drops and prices climb back.

But the subsidy check was **mailed to the landlord** — the land and the contract were his.
Much Southern land was farmed by Black sharecroppers. The landlord took the money to cut
production, no longer needed so many sharecroppers, and **used the government check to drive
them off the land**. One estimate: the AAA cost about 2 million sharecroppers their work.

In Roosevelt's story and the sharecropper's story-6, you see one sum of money
wearing three faces:
- in Washington it's called "saving the farmers" (grace);
- in the landlord's hand it's a "production-cut subsidy" (profit);
- landing on the sharecropper it becomes "get out" (the boot that kicks him onto the road).

Careful framing: on paper the law required landlords to share part of the subsidy with
sharecroppers, but the man enforcing it was the landlord who profited, so it mostly didn't
happen. The sharecropper's story nails it — "a good rule, handed to the wrong man to enforce,
becomes a knife that fits his grip better."

Key exam sentence: the AAA saved the "big board of agriculture" by **cutting output to lift
prices**, yet pushed the lowest sharecroppers off the land — a classic DBQ case for "the New
Deal's differing impact on different groups."`,
        },
      },
    },

    // ── 卡 5：Social Security + 局限（故事覆盖，三条故事线都讲到）──
    {
      id: 'social-security-act-1935',
      termCn: '社会保障法 1935 / 它的局限',
      termEn: 'Social Security Act 1935 / Its Limits',
      defCn: '社会保障法（Social Security Act，1935 年）给老年人提供养老金、给失业的人提供救济金。它属于新政三 R 里的"改革（Reform）"。今天美国人退休领的养老金，根子就在这里。但这张网一开始有两个洞：不覆盖农业工人和家政工人——这两类活当时主要是黑人在做，所以多数黑人一开始被挡在了保障之外。',
      defEn: 'The Social Security Act (1935) gave pensions to older people and relief to the unemployed. It belongs to the "Reform" in the New Deal three R\'s. The retirement pensions Americans get today trace back to this law. But the net had two holes at the start: it didn\'t cover farm workers or domestic workers — those jobs were mostly done by Black workers, so most Black people were left out of the safety net at first.',
      standardRef: ['APUSH CED 7.11', 'AP Gov (federalism)', 'CA HSS 11.6', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['fdr-n7', 'fp-n6', 'fp-n7', 'ds-n7'],
        xiaoweiNote: {
          cn: `这是新政里**最持久、今天还在用**的一块，三条故事线都讲到了。

考点正面：
1935 年 **Social Security Act（社会保障法）**——老了有养老金，失业了有救济金，是一张"兜住所有人"的安全网。它属于三 R 里的 **reform**。
今天美国人退休领的养老金，根子就在这。
设计者是 **Frances Perkins（弗朗西丝·珀金斯）**——美国首位女性内阁部长（劳工部长）。
珀金斯那条故事线整条都在讲，她怎么把这件没人做过的大事一寸寸推成法律。

但这张网一开始有**两个洞**：它不覆盖**农业工人**和**家政工人**（在别人家做饭、带孩子、打扫的人）。
这两类活当时主要是**南方黑人**在干——结果上，把多数黑人挡在了养老/失业保障外面。
（一项研究说约 65% 黑人被排除，南方部分地区高到 80%。）

careful framing（这点特别重要，AP 写 essay 要注意）：
这两个洞**为什么**留下来？
**结果**是清楚的：多数黑人被挡在外——这是已核实的事实。
**动机**学界**有争议**：
- 一派说这是为换南方议员的票，是种族算计；
- 另一派说当时这两类零散就业"难统计、难收费"，是行政可行性问题。
写 essay 时**别把它一口咬定成纯种族交易**，要说："无论动机是哪种，结果都一样——多数黑人被挡在外。"

珀金斯那条故事线第 6-7 节，她自己说"要么是有洞的网，要么一张都没有，我选了有洞的"。
佃农那条故事线第 7 节，你听到另一头——"一只手把我推下地（AAA），另一只没接住我（社保漏掉）"。`,
          en: `This is the **most lasting** piece of the New Deal, **still used today** — all three
stories cover it.

The exam positive:
The 1935 **Social Security Act** gave pensions in old age and relief when jobless — a safety
net to "catch everyone." It belongs to **reform** in the three R's. The pension Americans
draw in retirement today has its roots here. Its designer was **Frances Perkins** — the first
woman in a US cabinet (Secretary of Labor). Her story is all about pushing this
never-before-done thing into law, inch by inch.

But the net had **two holes** at the start: it didn't cover **farm workers** or **domestic
workers** (people who cook, mind children, and clean in others' homes). Those two kinds of
work were done mostly by **Black Southerners** — so in effect most Black people were kept out
of old-age/unemployment protection. (One study: about 65% of Black workers excluded, up to
80% in parts of the South.)

Careful framing (especially important for AP essays):
**Why** were the holes left?
The **result** is clear: most Black people were kept out — a verified fact.
The **motive** is **debated by scholars**:
- One camp says it was to win Southern congressmen's votes — a racial calculation.
- Another says these scattered jobs were "hard to count, hard to collect from" — an
  administrative-feasibility problem.
In an essay, **don't flatly call it a pure racial deal** — say: "Whatever the motive, the
result was the same: most Black people were kept out."

In Perkins's story,-7, she says herself: "It was either this net with holes or no
net at all, and I chose the one with holes." In the sharecropper's story,, you hear
the other end — "one hand pushed me off the land (AAA), the other didn't catch me (Social
Security)."`,
        },
      },
    },

    // ── 卡 6：Dust Bowl + Okies（独立，且明确区分于 Great Migration）──
    {
      id: 'dust-bowl-okies',
      termCn: 'Dust Bowl / Okies 西迁',
      termEn: 'The Dust Bowl / Okies',
      defCn: 'Dust Bowl（黑色风暴）是 1930 年代大平原地区因大旱加上过度开垦，卷起遮天蔽日的沙尘暴，让土地种不了的生态灾难。大约 30-40 万多为白人的农民被逼往西迁到加州，人们叫他们"Okies"。这和黑人佃农往北走的大迁徙（Great Migration）是两条完全不同的路。',
      defEn: "The Dust Bowl was an ecological disaster in the 1930s Great Plains — drought plus over-plowing stripped the soil, and wind whipped up massive black dust storms that buried farms. About 300,000–400,000 mostly white farmers were forced westward to California; people called them 'Okies.' This is a completely different migration from the Great Migration, in which Black Southerners moved north.",
      standardRef: ['APUSH CED 7.10', 'CA HSS 11.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这个故事**没讲到**，但 AP 一定考，我单独记。
注意：它和故事里黑人佃农的迁移，是**两条完全不同的路**，千万别混——老师反复强调这是考试的坑。

**Dust Bowl（黑色风暴 / 尘暴）**：1930 年代中期，美国大平原——俄克拉荷马、得州、堪萨斯等地——连年大旱。
之前农民过度开垦，把固土的草根全翻掉了。
风一刮，就卷起遮天蔽日的黑色沙尘暴。
土地种不了了，房子被沙埋了。

结果：大约 **30-40 万**农民（**多为白人**）被逼离开家园，沿著名的 66 号公路**往西**逃到加州找活干。
当地人轻蔑地叫他们 **"Okies"**（因为很多来自 Oklahoma 俄克拉荷马）。
到了加州，他们多半只能当流动农工，被歧视、住路边窝棚。
作家 John Steinbeck 的小说《愤怒的葡萄》（*The Grapes of Wrath*, 1939）写的就是这群人。

⚠️ **最容易考错的对比**（一定背清）：

① **Dust Bowl / Okies**：大平原 → **往西**去加州；约 30-40 万；**多为白人**；起因是**生态灾难**（旱灾+过度开垦）。
② **the Great Migration（大迁徙）**：南方 → **往北**去工业城市（底特律、芝加哥）；约 **600 万**；**黑人**；起因是种族压迫 + 经济（含被 AAA 挤出土地）。故事里那个佃农走的是**这一条**。

两条路方向相反、人群不同、起因不同——选择题最爱把它们摆一起让你选。`,
        en: `The story **doesn't cover** this, but AP definitely tests it, so I note it separately.
Important: it is a **completely different path** from the Black sharecropper's migration in
the story — never mix them up. Teacher stresses again and again that this is a test trap.

**The Dust Bowl**: in the mid-1930s the Great Plains — Oklahoma, Texas, Kansas, and nearby
states — suffered years of severe drought. Earlier over-plowing had torn out the grass roots
that held the soil, so the wind whipped up black dust storms that blotted out the sky. The
land couldn't be farmed; houses were buried in sand.

The result: about **300,000-400,000** farmers (**mostly white**) were forced from their homes
and went **west** along the famous Route 66 to California looking for work. Locals called
them **"Okies"** with contempt (many came from Oklahoma). In California most could only
become migrant farm laborers, facing discrimination and roadside camps. John Steinbeck's
novel *The Grapes of Wrath* (1939) is about these people.

⚠️ **The contrast most often missed** (memorize it clean):

① **Dust Bowl / Okies**: Great Plains → **west** to California; ~300-400k; **mostly white**;
   cause = **ecological disaster** (drought + over-plowing).
② **The Great Migration**: South → **north** to industrial cities (Detroit, Chicago);
   ~**6 million**; **Black**; cause = racial oppression + economics (including AAA
   displacement). The sharecropper in the story took **this** path.

Opposite directions, different people, different causes — multiple choice loves putting them
side by side and making you choose.`,
      },
      xiaoweiNote: {
        cn: `Dr. Park 给的口诀我直接抄："**Okies 往西、黑人往北；Okies 多白、迁徙是黑；Okies 因旱、迁徙因压。**"
三组对比：方向 / 人群 / 起因。

还有一个文学锚点必背：写 Dust Bowl 的小说是 **The Grapes of Wrath（《愤怒的葡萄》）**，
作者 **Steinbeck**——AP 偶尔会拿它当 primary-ish 素材。`,
        en: `Dr. Park's mnemonic, copied straight: "**Okies go west, Black families go north;
Okies mostly white, the Migration Black; Okies fled drought, the Migration fled oppression.**"
Three contrasts — direction / people / cause.

One literary anchor to memorize: the Dust Bowl novel is **The Grapes of Wrath** by
**Steinbeck** — AP sometimes uses it as primary-ish material.`,
      },
    },

    // ── 卡 7：court-packing（故事覆盖，FDR 那条故事线第 5 节）──
    {
      id: 'court-packing-1937',
      termCn: '法院改组案 1937 / 三权分立冲突',
      termEn: 'Court-Packing 1937 / Separation of Powers',
      defCn: '1937 年，FDR 试图往最高法院塞入自己的法官来推翻阻止新政的裁决，这叫 court-packing（法院改组案）。他的方案最终失败了，因为连自己党内的人都说他在破坏三权分立——总统不能骑到法院头上。这是 AP Government 三权分立的经典案例。',
      defEn: "In 1937, FDR tried to pack the Supreme Court with his own justices to undo rulings that were blocking the New Deal. The plan failed because even his own party said he was breaking the separation of powers — the president can't ride over the courts. This is a classic AP Government case on checks and balances.",
      standardRef: ['APUSH CED 7.11', 'AP Gov (separation of powers / judiciary)', 'CA HSS 11.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'fdr',
        nodeIds: ['fdr-n5'],
        xiaoweiNote: {
          cn: `FDR 那条故事线第 5 节，他自己讲的——特别有意思，是 AP Government 三权分立的经典案例。

考点经过：
① 1935-36 年，最高法院（Supreme Court）连判好几个新政计划**违宪（unconstitutional）**——
   说宪法没给联邦政府这么大权力去管农业、管工厂。
② FDR 气坏了。1937 年他提出 **court-packing（法院改组案）**：
   想往最高法院**加塞最多 6 名**自己的法官，把不听话的老法官稀释掉。
   他给的理由是：给 70 岁以上的法官每人配一个"帮手"。
③ 结果：连他**自己党内**的人都反对，说他这是想**踩烂三权分立**、让总统骑到法院头上。
④ 方案**失败**了。
   不过有意思的是，此后法院态度软化，多数新政得以延续——
   历史上戏称 "the switch in time that saved nine"（及时转向救了九个法官）。

考点关键句：court-packing 是**好人手握大权也本能去搬开制衡之墙**的经典案例。
FDR 真心想救国，可权力一顺手，第一反应就是搬开挡路的法院。
而那道墙正是宪法（三权分立 + 司法独立）故意立来防这种事的。

FDR 在第 5 节说的那句我特别记住了："那墙正是当年宪法立来防我这种人的。"`,
          en: `This is in Roosevelt's story,, told by him — it's a classic AP Government
separation-of-powers case.

The exam story:
① In 1935-36 the Supreme Court struck down several New Deal programs as
   **unconstitutional**, saying the Constitution gave the federal government no such power
   to manage farming and factories.
② FDR was furious. In 1937 he proposed **court-packing**: adding **up to 6** of his own
   justices to the Supreme Court, diluting the old judges who wouldn't go along. His
   cover story: an "assistant" for each justice over 70.
③ The result: even his **own party** opposed it, saying he meant to **trample the
   separation of powers** and let the president ride over the court.
④ The plan **failed**. Interestingly, the Court then softened and most of the New Deal
   survived — history's joke: "the switch in time that saved nine."

Key exam sentence: court-packing is the classic case of **even a good person, holding great
power, instinctively reaching to shove aside the wall of checks**. FDR truly wanted to save
the country, yet when power came easy his first move was to clear away the court in his way,
and that wall was exactly the one the Constitution (separation of powers + judicial
independence) raised on purpose to prevent this.

The line from I really remember: "That wall was exactly the one the Constitution had
raised on purpose, to guard against a man like me."`,
        },
      },
    },

    // ── 卡 8：Keynes vs Hayek（独立，经济史双视角）──
    {
      id: 'keynes-vs-hayek',
      termCn: '凯恩斯 vs 哈耶克 / 政府该不该出手',
      termEn: 'Keynes vs Hayek / Should Government Act',
      defCn: '凯恩斯（Keynes）和哈耶克（Hayek）是两位经济学家，他们对同一个问题有相反的答案：经济崩溃时，政府主动花钱救市，是帮了忙还是帮了倒忙？凯恩斯说帮了忙，哈耶克说帮了倒忙。这是 AP Macroeconomics 的核心框架，AP 要求你把两边都能讲清楚，不预设结论。',
      defEn: 'Keynes and Hayek were two economists with opposite answers to the same question: when the economy collapses, does government spending help or make things worse? Keynes said it helps. Hayek said it makes things worse. This is a core AP Macroeconomics framework — AP wants you to present both sides without picking one in advance.',
      standardRef: ['AP Macroeconomics (fiscal policy)', 'APUSH CED 7.11', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'fdr', nodeId: 'fdr-n8', context: 'FDR 那条故事线第 8 节："一个英国经济学家主张经济垮时政府带头花钱造工作"（凯恩斯）' },
          { lens: 'fdr', nodeId: 'fdr-n11', context: 'FDR 那条故事线第 11 节，用"一种说法/另一种说法"中立呈现凯恩斯 vs Hayek' },
        ],
      },
      standaloneText: {
        cn: `这是 AP Macroeconomics 的入门框架，也是这门课的"经济史双视角"。
FDR 那条故事线第 11 节用"一种说法 / 另一种说法"中立带过，我这里把它讲清楚。

核心问题：**经济垮的时候，政府主动花钱救市，到底是救命，还是反而拖长病程？**

**一种说法——Keynes / 凯恩斯（英国经济学家）**：
经济垮的时候，老百姓和企业都不敢花钱，整个经济就停转了。
这时要靠**政府带头花钱**——哪怕借钱（赤字开支，deficit spending）也要花。
逻辑链：政府造工作 → 工人有钱 → 去消费 → 工厂重新开 → 经济转起来。
这叫 **fiscal policy（财政政策）**里的"需求管理"。新政的大规模公共工程，用的就是这套思路。
（凯恩斯的代表作《通论》出版于 1936 年。）

**另一种说法——Hayek / 哈耶克（奥地利学派经济学家）**：
政府这只手反而帮倒忙。政府乱插手、扭曲了价格和市场信号，让经济没法自己调整，
结果把萧条**拖了整整十年**，一直到二战军需才真正终结。
市场本来会更快自愈——是政府越救越乱。

⚠️ 中立提醒：这**不是**"大政府好 vs 小政府坏"，是**同一个问题的两种诚实答案**。
AP 写 synthesis 时两边都要呈现，**不要预设结论**。
顺带一提，还有第三派——货币主义（如后来的 Friedman）认为是美联储紧缩货币才酿成大萧条。
三派对"萧条为什么这么久"的答案都不同。

🔗 FDR 那条故事线第 8 节，他说"一个英国经济学家主张经济垮时政府带头花钱"，那就是凯恩斯。
第 11 节把凯恩斯 vs Hayek 摆成"两种都站得住的说法"让你自己想 30 秒。`,
        en: `This is the intro framework for AP Macroeconomics and the topic's "two economic viewpoints."
Roosevelt's story,, presents it neutrally with "one view / the other view" — here I
lay it out in full.

The core question: **When the economy collapses, does government spending rescue it, or drag
out the sickness instead?**

**One view — Keynes (British economist)**:
When the economy collapses, ordinary people and businesses are all afraid to spend, so the
whole economy stalls. The fix is the **government leading the spending** — even by borrowing
(**deficit spending**). The logic: government builds jobs → workers have money → they spend →
factories reopen → the economy turns. This is "demand management" within **fiscal policy**.
The New Deal's large public works used this approach. (Keynes's major work, the *General
Theory*, was published in 1936.)

**The other view — Hayek (Austrian-school economist)**:
The government's hand made things worse. By meddling and distorting prices and market
signals, it kept the economy from adjusting on its own, **dragging the depression out a full
ten years**, ending only with WWII demand. The market would have healed faster; the more the
government "rescued," the more it muddled things.

⚠️ Neutrality reminder: this is **not** "big government good vs small government bad" — it's
**two honest answers to the same question**. In an AP synthesis, present both sides and
**don't presuppose a conclusion**. By the way, a third camp — monetarists, like later
Friedman — argues the Federal Reserve's tightening of money caused the Depression. All three
camps answer "why so long" differently.

🔗 In Roosevelt's story,, he says "a British economist argued the government should
lead the spending when the economy collapses" — that's Keynes. sets Keynes vs Hayek
as "two views that both stand," asking you to think for 30 seconds.`,
      },
      xiaoweiNote: {
        cn: `老师说 AP Macro 这块就盯一个词：**fiscal policy（财政政策）= 政府用花钱和收税去调经济**——
凯恩斯就是这套的祖师爷。看到"政府赤字开支救衰退"就想到凯恩斯。

我的记忆口诀：**"凯恩斯说踩油门（政府花钱），哈耶克说别乱踩（市场自愈）。"**

DBQ 写到经济双视角时，结尾别站队站太死——AP 喜欢"我承认两边各有道理，然后给我自己的理由"。`,
        en: `Teacher says for AP Macro just lock onto one term: **fiscal policy = the government using
spending and taxing to steer the economy** — Keynes is its founding father. See "government
deficit spending to fight a recession" → think Keynes.

My mnemonic: **"Keynes says hit the gas (government spends); Hayek says stop stomping (the
market heals itself)."**

When a DBQ hits the two economic views, don't pick a side too rigidly at the end — AP likes
"I grant both have a point, then here's my own reason."`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `新政（the New Deal）的同一套办法，对城里失业的工人是救星（有了工作、养老金、存款保险），
对南方黑人佃农却是又一次伤害（被 AAA 补贴挤出土地、又被社会保障漏在网外）。

一段历史，可以**同时**是"政府拯救人民"和"系统性排除弱者"这两件事吗？
如果你要给新政打一个总分，你会怎么打，又会怎么向别人解释这个分数？`,
      en: `The same New Deal was a savior to jobless city workers (jobs, pensions, deposit
insurance), yet another harm to Black Southern sharecroppers (pushed off the land by the AAA
subsidy, then left outside the Social Security net).

Can one piece of history be **both** "the government saving the people" and "the systematic
exclusion of the weak" at once? If you had to give the New Deal one overall grade, what would
it be, and how would you explain that grade to someone else?`,
      hintCn: `提示：AP 评分讨厌"非黑即白"。试试这个结构——
① 先承认它真实救了几千万人（具体举例：CCC/WPA 工作、社保养老金、FDIC 存款保险）；
② 再承认它系统地漏掉了同一群最没声音的人（AAA 挤出佃农、社保漏农业/家政工）；
③ 关键一步：解释这两件事**不是互相抵消**，而是**同时为真**——
   "它救了大多数"和"它牺牲了最弱的少数"可以同时成立。

进阶：注意区分"意图"和"结果"——设计的人未必"故意"害佃农，但制度盲点造成的伤害是真实的。
"看不见"造成的系统性伤害，和"故意"的伤害，哪个更难纠正？`,
      hintEn: `Hint: AP scoring hates "black or white." Try this structure —
① First grant it truly saved tens of millions (concrete: CCC/WPA jobs, Social Security
   pensions, FDIC deposit insurance);
② Then grant it systematically left out the same group with the least voice (AAA pushing
   sharecroppers off the land, Social Security excluding farm/domestic workers);
③ The key move: explain these two **don't cancel out** but are **both true at once** —
   "it saved the majority" and "it sacrificed the weakest minority" can both hold.

Going deeper: distinguish "intent" from "result" — the designers may not have "meant" to
harm sharecroppers, but the harm from a blind spot is real. Which is harder to fix:
systematic harm from "not seeing," or harm done "on purpose"?`,
      conceptsActivated: ['aaa-sharecropper-displacement', 'social-security-act-1935', 'new-deal-3r-agencies'],
    },
    {
      id: 'q2',
      cn: `1935 年的社会保障法，把农业工人和家政工人（当时多数是南方黑人干的活）排除在外。
历史学家对**为什么**排除有争议：一派说是为换南方议员的票、是种族算计；
另一派说当时这两类零散工作"难统计、难收费"，是行政可行性问题。

如果你是 AP 老师，要出一道题来训练学生**区分"动机"和"结果"**，你会怎么提问？
你会给学生哪几种原始资料让他们自己判断？`,
      en: `The 1935 Social Security Act excluded farm workers and domestic workers (work mostly
done by Black Southerners at the time). Historians dispute **why** they were excluded: one
camp says it was to win Southern congressmen's votes — a racial calculation; another says
these scattered jobs were "hard to count, hard to collect from" — an administrative-
feasibility problem.

If you were an AP teacher writing a question to train students to **separate "motive" from
"result,"** how would you phrase it? Which primary sources would you give them to judge for
themselves?`,
      hintCn: `提示：好的题不替学生拍板动机，而是逼他们用证据。
你可以给：
① 当年南方议员的发言记录（看有没有种族语言）；
② 社保署官方研究里"难统计难收费"的行政论证；
③ NAACP 当年作证说这是按种族排除黑人的材料。
让学生比较这几份，自己权衡。

关键教学点：无论动机是种族还是行政，**结果是一样的**——多数黑人被挡在外。
哪怕设计者不是故意，结果上的系统性伤害和故意一样真实。
你出的题，怎么让学生既不冤枉历史人物，又不洗白真实的伤害？`,
      hintEn: `Hint: a good question doesn't decide the motive for students — it forces them to use
evidence. You could give:
① Records of Southern congressmen's statements (is there racial language?);
② The Social Security Administration's official study with its "hard to count, hard to
   collect" administrative argument;
③ NAACP testimony from the time arguing it excluded Black people by race.
Have students compare and weigh them.

Key teaching point: whatever the motive — racial or administrative — the **result was the
same**: most Black people kept out. Even if the designers didn't mean it, the systematic harm
in the result is as real as if they had. How would your question keep students from wronging
the historical figures *and* from whitewashing the real harm?`,
      conceptsActivated: ['social-security-act-1935', 'aaa-sharecropper-displacement'],
    },
    {
      id: 'q3',
      cn: `经济垮的时候，政府该不该主动花钱救市？凯恩斯（Keynes）说该——政府带头花钱才能把经济
重新发动起来；哈耶克（Hayek）说不该——政府乱插手扭曲了市场，反而把萧条拖了十年。

这场争论今天还成立吗？想想 2008 年金融危机、2020 年疫情，各国政府都大举花钱救市——
这说明凯恩斯赢了，还是说明这个问题根本没有"标准答案"？`,
      en: `When the economy collapses, should the government actively spend to rescue it?
Keynes said yes — only government-led spending can restart the economy; Hayek said no —
government meddling distorted the market and dragged the depression out for ten years.

Is this debate still alive today? Think about the 2008 financial crisis and the 2020
pandemic, when governments worldwide spent heavily to rescue their economies — does that
mean Keynes won, or that this question simply has no "standard answer"?`,
      hintCn: `提示：这题没有标准答案，重要的是你**怎么用证据想**。
凯恩斯派会说：2008、2020 各国都用赤字开支救市，避免了更深的崩溃，证明这套有用。
哈耶克派会反驳：政府花钱可能埋下通胀、债务的隐患；"避免了短痛"未必等于"做对了"；
而且我们永远不知道"如果不救会怎样"——这叫反事实（counterfactual），很难证明。

进阶：注意一个陷阱——"后来大家都这么做"不等于"这么做是对的"。
经济学很多问题没法做对照实验（你不能把同一个国家"救一次"和"不救一次"各跑一遍）。
这正是为什么这种争论能吵几十年。AP 想看的不是你站哪边，是你**承认这题的难处**还能给出理由。`,
      hintEn: `Hint: this has no standard answer; what matters is **how you reason with evidence**.
The Keynesian side would say: in 2008 and 2020 governments used deficit spending and avoided
a deeper collapse, proving it works. The Hayekian side would counter: that spending may plant
inflation and debt; "avoiding short-term pain" isn't the same as "getting it right"; and we
can never know "what if they hadn't acted" — a counterfactual, very hard to prove.

Going deeper: watch a trap — "everyone later did it" doesn't equal "it was right." Many
economics questions can't be tested with a controlled experiment (you can't run the same
country "rescued" and "not rescued"). That's exactly why this debate runs for decades. AP
wants to see not which side you pick, but that you can **acknowledge the difficulty** and
still give a reason.`,
      conceptsActivated: ['keynes-vs-hayek', 'hoover-vs-fdr', 'new-deal-3r-agencies'],
    },
  ],
};

export default notebook;
