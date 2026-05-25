// ─── 同伴笔记本架构 v1 · Globalization since ~1945 ─────────────────
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
//   - storyboard 提供情感锚点（CEO 供应链设计者 / 锈带工人被夹中间 / 南方制衣女工受影响方三条线）
//   - notebook 提供考点闭环（Bretton Woods→WTO、集装箱、离岸外包+供应链、NAFTA、中国入世、
//     脱贫 vs 不平等、血汗工厂 Rana Plaza、文化全球化 — 补完 AP World U9 + CA HSS 课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History Modern — Unit 9（全球化，AP-WHAP-9）：经济/技术/文化全球化、全球化的赢家与输家
//   - California HSS Grade 10.11 / 11.9（二战后世界经济秩序、冷战后全球化、当代经济相互依存）
//
// 事实地基：对账 globalization-1995.md（narrative kernel，无独立 factledger）
//   - 真实数字统一标约数：极端贫困 ~36%（1990）→ ~9%（2010s）；中国 ~8 亿脱贫；Rana Plaza ~1,134 死
//   - 真实事件年份：Bretton Woods 1944 / 集装箱 1956 (Malcom McLean) / 苏联解体 1991 /
//     NAFTA 1994 / WTO 1995 / 中国入世 2001 / Rana Plaza 2013.4.24
//   - keyFigures 只放真实具名者 (Malcom McLean)；三视角主角均为 composite 合成人物，已在卡中标注
//   - Rule 0 双刃：不向任何一边说教 — 谁得益、谁付代价，是不是同一个人
//
// schemaVersion: 1 · notebookVersion: globalization-1995-v1

export var notebook = {
  topicId: 'globalization-1995',
  topicNameCn: '全球化 1995',
  topicNameEn: 'Globalization since ~1945',
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
    cn: `今天老师说我们要学「全球化」（globalization）——二战之后、尤其 1991 年苏联解体之后，
全世界被一条条供应链拴成一张网的过程。她说这是 AP World History 第九单元（Unit 9）的重头戏，
加州 HSS 高中世界史也考。

她在白板上画了一件三美元的 T 恤，旁边写了三个人：

设计它旅程的跨国公司高管、那座关掉的工厂里丢了饭碗的锈带工人、
真正用双手缝出它的全球南方制衣女工。

还有一串词：自由贸易（free trade）、WTO（世界贸易组织）、离岸外包（offshoring）、
供应链（supply chain）、跨国公司（multinational corporation）、NAFTA（北美自由贸易协定）、
集装箱（container）、血汗工厂（sweatshop）。

我先记下来，等下读三个故事——高管（设计供应链的人）、锈带工人（夹在中间的人）、
制衣女工（做出便宜货的那双手）——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页："全球化不是一句『让所有人都过得更好』，也不是一句
『只剥削穷人』。它让一些人受益，让另一些人付账。读它，要一直问：谁得益、谁付代价，
是不是同一个人？"`,
    en: `Today my teacher said we're learning "globalization" — the process, after the Second
World War and especially after the Soviet Union fell in 1991, by which the whole world was
tied into one net by supply chains. She said it's the centerpiece of AP World History Unit 9,
and California HSS high-school world history tests it too.

She drew a three-dollar T-shirt on the whiteboard and wrote three people beside it:

the multinational CEO who designs its journey, the Rust Belt worker who lost a livelihood
in the factory that closed, and the Global South garment worker who actually sews it.

Plus a string of terms: free trade, WTO (World Trade Organization), offshoring,
supply chain, multinational corporation, NAFTA (North American Free Trade Agreement),
container, sweatshop.

Let me write these down. After I read the three stories — the CEO (who designs the supply
chain), the Rust Belt worker (caught in the middle), and the garment worker (the hands that
make the cheap goods) — I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "Globalization isn't a
simple 'it made everyone better off,' nor a simple 'it only exploits the poor.' It benefited
some and made others pay. To read it, keep asking: the ones who benefit and the ones who pay
the price — are they the same people?"`,
    keyTerms: [
      { cn: '全球化', en: 'globalization' },
      { cn: '自由贸易', en: 'free trade' },
      { cn: '世界贸易组织', en: 'WTO (World Trade Organization)' },
      { cn: '离岸外包', en: 'offshoring' },
      { cn: '供应链', en: 'supply chain' },
      { cn: '跨国公司', en: 'multinational corporation' },
      { cn: '北美自由贸易协定', en: 'NAFTA' },
      { cn: '集装箱', en: 'container' },
      { cn: '关税', en: 'tariff' },
      { cn: '血汗工厂', en: 'sweatshop' },
      { cn: '锈带', en: 'Rust Belt' },
      { cn: '极端贫困', en: 'extreme poverty' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '麦克莱恩',
        nameEn: 'Malcom McLean',
        ipa: '/ˈmælkəm məˈkleɪn/',
        roleCn: '卡车司机出身的美国人，1956 年推出统一规格的集装箱，把跨洋运费砍掉一大截，让生产可以搬去任何最便宜的地方',
        roleEn: 'A former American truck driver who launched the standard-size shipping container in 1956, slashing the cost of crossing oceans and letting production move to wherever was cheapest',
        mustKnow: true,
        audioKey: 'malcom-mclean',
      },
      {
        nameCn: '跨国公司高管 / 贸易架构师（合成人物）',
        nameEn: 'A Multinational CEO (composite)',
        ipa: null,
        roleCn: '故事里"设计供应链的人"，代表千千万万真实决策者的合成人物，不冒充任何具名个人；画供应链地图、把工厂搬出去的那双手',
        roleEn: 'The story\'s "supply-chain designer," a composite standing for the many real decision-makers, impersonating no named individual; the hands that map the supply chain and move the factory out',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '锈带工厂工人（合成人物）',
        nameEn: 'A Rust Belt Worker (composite)',
        ipa: null,
        roleCn: '故事里"被夹在中间的人"，代表 1980s-2000s 数千万被外包冲击的美国产业工人；作为工人被抢饭碗，作为消费者买便宜货',
        roleEn: 'The story\'s "person caught in the middle," a composite for the tens of millions of American industrial workers hit by offshoring in the 1980s-2000s; robbed of a livelihood as a worker, buying cheap goods as a consumer',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '全球南方制衣女工（合成人物）',
        nameEn: 'A Garment Factory Worker (composite)',
        ipa: null,
        roleCn: '故事里"做出廉价商品的那双手"，代表孟加拉、越南、柬埔寨等地数千万年轻女工；剥削她的和救她的是同一件事',
        roleEn: 'The story\'s "hands that make the cheap goods," a composite for the tens of millions of young women workers in Bangladesh, Vietnam, Cambodia, and elsewhere; the thing that exploits her and the thing that saves her are the same',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'bretton-woods-to-wto',
      termCn: 'Bretton Woods → WTO（战后自由贸易制度）',
      termEn: 'Bretton Woods to the WTO (the Postwar Free-Trade System)',
      standardRef: ['AP World History Modern — Unit 9 (AP-WHAP-9)', 'CA HSS 10.11 / 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ceo-or-trade-architect',
        nodeIds: ['ceo-n3'],
        xiaoweiNote: {
          cn: `这个我读过！在 CEO Lens 第 3 节，他讲光有集装箱还不够，还需要一个让货物自由跨国流动的世界。

我把这条制度时间线背成一串：
1. **1944 年 Bretton Woods（布雷顿森林）会议**：二战刚打完，各国立下战后经济规矩，
   建了 **IMF（国际货币基金组织）** 和 **World Bank（世界银行）**，还谈成一个降关税的协议 **GATT**。
2. **1995 年**：GATT 升级成正式机构 **WTO（世界贸易组织）**——管国际贸易规则、推动各国一层层拆掉贸易壁垒。

考点关键句：Bretton Woods 是战后经济秩序的"地基"，WTO 是把自由贸易"制度化"的那个机构。
**关税（tariff）** 越拆越低，公司把工厂搬到哪、把货卖到哪，门槛就越来越低。

CEO 还补了一刀我记下来了：再加 1991 年苏联解体，铁箱子（集装箱）+ 自由贸易规则 + 苏联倒下，
三样凑齐，他这代人才第一次真能"全球"做生意。AP 爱考"全球化加速的条件是什么"——技术 + 制度 + 地缘，三样缺一不可。`,
          en: `I read this! In the CEO's Lens Node 3, he explains that the container alone wasn't
enough — he also needed a world that let goods flow freely across borders.

I memorize this institutional timeline as a chain:
1. **The 1944 Bretton Woods conference**: right after the war, nations laid down postwar
   economic rules, built the **IMF (International Monetary Fund)** and the **World Bank**, and
   negotiated a tariff-cutting agreement called **GATT**.
2. **In 1995**: GATT was upgraded into a formal body, the **WTO (World Trade Organization)** —
   it manages international trade rules and pushes nations to take down trade barriers layer by layer.

Key exam sentence: Bretton Woods is the "foundation" of the postwar economic order; the WTO is
the institution that "institutionalized" free trade. The lower the **tariffs**, the lower the
threshold for a company to move its factory anywhere and sell anywhere.

The CEO added one more thing I wrote down: plus the 1991 Soviet collapse, the steel box (the
container) and free-trade rules and the fall of the Soviet Union — three together — let his
generation, for the first time, truly do business "globally." AP loves asking "what conditions
accelerated globalization" — technology, institutions, geopolitics, all three at once.`,
        },
      },
    },

    {
      id: 'container-shipping',
      termCn: '集装箱革命（1956）',
      termEn: 'The Container Shipping Revolution (1956)',
      standardRef: ['AP World History Modern — Unit 9 (AP-WHAP-9)', 'CA HSS 10.11 / 11.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ceo-or-trade-architect',
        nodeIds: ['ceo-n2'],
        xiaoweiNote: {
          cn: `CEO Lens 第 2 节专门讲这个——而且它是全球化最容易被忽略、其实最关键的"物理地基"。

故事讲：以前做不到把工厂搬到地球另一边，因为漂洋过海运一件货又贵又慢、容易碎容易丢，根本不划算。
变化发生在 **1956 年**：一个卡车司机出身的美国人 **Malcom McLean（麦克莱恩）** 想出一个简单到不可思议的主意——
把货物装进**统一规格的大铁箱子**（这就是 **container 集装箱**），整箱吊上船、吊下船、直接放上卡车，
中间不用一件件搬。

我把它的威力记成一句：**铁箱子让跨洋运费暴跌 → "在哪生产"和"在哪卖"第一次彻底分开。**
你在加州买的东西，可以在一万公里外做。

考点关键句：集装箱是个"技术不是中性的"绝佳例子——一项"让运输更高效"的发明，
既创造了几亿人的脱贫机会，也熄灭了无数工业城市的灯。它重新画了整个世界的就业地图。
（AP 的 SAQ 常问"哪项技术让全球供应链成为可能"——答集装箱。）`,
          en: `The CEO's Lens Node 2 is specifically about this — and it's the easiest-to-overlook,
actually most crucial "physical foundation" of globalization.

The story says: it used to be impossible to move a factory to the other side of the world,
because shipping a good across the ocean was expensive, slow, easy to break and lose, and simply
didn't pay. The change came in **1956**: a former American truck driver named **Malcom McLean**
had an idea so simple it was almost unbelievable — pack goods into a **steel box of a standard
size** (this is the **container**), hoist the whole box onto the ship, off the ship, straight
onto a truck, with no handling piece by piece in between.

I memorize its power in one line: **the steel box made ocean shipping costs collapse, so "where
you produce" and "where you sell" split apart for the first time.** What you buy in California
can be made ten thousand kilometers away.

Key exam sentence: the container is a perfect example of "technology is not neutral" — an
invention "to make shipping more efficient" both created the chance for hundreds of millions to
escape poverty and turned out the lights in countless industrial cities. It redrew the whole
world's employment map. (AP SAQs often ask "which technology made global supply chains possible" —
answer: the container.)`,
        },
      },
    },

    {
      id: 'nafta-and-free-trade',
      termCn: 'NAFTA 与拆关税墙',
      termEn: 'NAFTA and Tearing Down Tariff Walls',
      standardRef: ['AP World History Modern — Unit 9 (AP-WHAP-9)', 'CA HSS 11.9 (US history)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'rust-belt-worker',
        nodeIds: ['rb-n3'],
        xiaoweiNote: {
          cn: `锈带工人 Lens 第 3 节讲到了——他后来才弄明白，为什么公司能这么干。

故事说：以前一家美国公司想省钱办法不多，把工厂搬到外国？运费贵、外国又有**高高的关税**挡着，搬过去不划算，
所以只能本地办厂、给本地工人一份养得起家的工资。后来两件事变了：
1. 集装箱让运货变得极便宜；
2. 各国签了一堆自由贸易协议，**把关税一层层拆掉**——**1994 年美国、加拿大、墨西哥签了 NAFTA
   （北美自由贸易协定）**；1995 年成立 WTO。墙拆了，门开了。

我把它压成一句：**关税 = 进口商品要交的"过路费"；NAFTA 这类协议就是把过路费拆掉，让货能自由跨国流动。**

考点关键句：NAFTA 是"区域自由贸易协定"的典型例子。对锈带工人，墙一拆，公司立刻算明白：
**与其付本国工人 20 美元/小时，不如把活搬到 1 美元/小时的地方去。**
他说了一句我特别记得："我不恨那个一小时拿 1 美元的人，他也要养家。我恨的是这套逼我俩比谁更便宜的规矩。"
（这正是 AP 爱考的"全球化的赢家与输家"——同一份协议，谁占便宜谁吃亏。）`,
          en: `The Rust Belt worker's Lens Node 3 covers this — only later did he work out why the
company could do it.

The story says: before, an American company that wanted to save money had few options. Move the
factory abroad? Shipping was expensive and foreign **tariffs stood like high walls**, so it didn't
pay, and companies had to build locally and pay local workers a living wage. Then two things changed:
1. the container made shipping extremely cheap;
2. nations signed a pile of free-trade agreements and **took tariffs down layer by layer** — **in
   1994 the United States, Canada, and Mexico signed NAFTA (the North American Free Trade
   Agreement)**; in 1995 the WTO was founded. The walls came down, the doors opened.

I compress it into one line: **a tariff = a "toll" paid on imported goods; agreements like NAFTA
remove the toll, letting goods flow freely across borders.**

Key exam sentence: NAFTA is the classic example of a "regional free-trade agreement." For the Rust
Belt worker, once the wall came down the company immediately did the math: **rather than pay a home
worker 20 dollars an hour, move the work to a place that costs 1 dollar an hour.** He said a line I
remember: "I don't hate the man earning 1 dollar an hour, he has a family to feed too. I hate the
rules that force the two of us to compete over who is cheaper." (Exactly the "winners and losers of
globalization" AP loves to test — one agreement, who gains and who loses.)`,
        },
      },
    },

    {
      id: 'offshoring-supply-chain',
      termCn: '离岸外包与供应链',
      termEn: 'Offshoring and the Supply Chain',
      standardRef: ['AP World History Modern — Unit 9 (AP-WHAP-9)', 'CA HSS 10.11 / 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ceo-or-trade-architect',
        nodeIds: ['ceo-n4', 'ceo-n6'],
        xiaoweiNote: {
          cn: `CEO Lens 第 4 节是"你就是我"的高潮——你坐在会议室，墙上挂着世界地图，
你的工作是给公司每一件商品规划一条最省钱的旅程。第 6 节再用一件 T 恤把三个人对位拴起来。

两个必背词，我分清楚了：
- **供应链（supply chain）**：一件商品从原料到成品，经过多个国家分工的完整链条。
  故事里那句最好记：棉花在一个国家种、纱线在另一个国家纺、布在第三个国家织、衣服在第四个国家缝——
  **一件衣服"出生在十个国家"。**
- **离岸外包（offshoring）**：把生产从本国搬到**劳动成本更低的国家**。
  故事里就是 CEO 把俄亥俄那家工厂从地图上划掉，搬到工资只有美国零头的地方。

考点关键句：离岸外包 + 供应链 = 全球化的"操作手册"。报表很诚实——成本降、利润涨、股价涨、货架更便宜；
但 CEO 自己拷问："划掉地图上那个点，不是划掉一个数字，是几百个真人的饭碗。"

第 6 节那个**一件 T 恤三双手**最戳人：一个人设计它的旅程（CEO 画地图）、
一个人因它丢工作又因它买得起（锈带工人）、一个人用双手做出它（南方女工）。
全球化，就是这三双永远不会坐到一起的手，被一件三美元的 T 恤拴在一起。
（这正是 AP 的 stakeholder 分析——同一件商品，谁得益、谁付代价。）`,
          en: `The CEO's Lens Node 4 is the "now you are me" peak — you sit in a meeting room, a
world map on the wall, and your job is to plan the cheapest journey for every product. Node 6 then
uses a single T-shirt to line up and tie the three people together.

Two must-memorize terms, and I keep them straight:
- **Supply chain**: the full chain a product travels from raw material to finished good, divided
  across many countries. The most memorable line in the story: cotton grown in one country, yarn
  spun in another, cloth woven in a third, garment sewn in a fourth — **a single shirt "born in
  ten countries."**
- **Offshoring**: moving production from your home country to a country with **lower labor costs**.
  In the story, the CEO crosses the Ohio factory off the map and moves it where wages are a
  fraction of America's.

Key exam sentence: offshoring + supply chain = globalization's "operating manual." The numbers are
honest — costs fall, profits rise, the share price climbs, shelves get cheaper; but the CEO asks
himself, "crossing that point off the map is not crossing off a number, it's hundreds of real
people's livelihoods."

The **one T-shirt, three pairs of hands** in Node 6 hits hardest: one person designs its journey
(the CEO maps it), one loses a job to it and can afford it because of it (the Rust Belt worker),
one makes it with her hands (the Global South woman). Globalization is these three pairs of hands,
who will never sit together, tied by a three-dollar T-shirt. (Exactly the AP stakeholder analysis —
one product, who benefits, who pays.)`,
        },
      },
    },

    {
      id: 'china-wto-factory-of-the-world',
      termCn: '中国入世与"世界工厂"',
      termEn: 'China\'s WTO Entry and the "Factory of the World"',
      standardRef: ['AP World History Modern — Unit 9 (AP-WHAP-9)', 'CA HSS 10.11'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ceo-or-trade-architect',
        nodeIds: ['ceo-n8'],
        xiaoweiNote: {
          cn: `CEO Lens 第 8 节专门讲那个改变了整盘棋的国家：中国。这一段中国是主角，老师说真实的中文术语可以直接用。

故事说：**2001 年中国加入 WTO（世界贸易组织）**，是全球化历史上最大的一步棋。
对 CEO 这样的人，中国意味着一件事——大量人口愿意进厂 + 政府全力修桥铺路建港口（基础设施）+ 出口导向政策。
全世界的工厂订单像潮水一样涌进去，短短二十年，中国成了 **"世界工厂"**：
你家里的东西翻过来看标签，一大半写着 **"Made in China"**。

考点关键句（必背数字）：**从 1980 年代到 2010 年代，中国大约有 8 亿人脱离极端贫困**——
这是人类历史上规模最大、速度最快的一次脱贫，与这套全球生产体系紧紧绑在一起。

但 CEO 诚实地补了另一面（Rule 0）：这份增长也有代价——无数中国农民工，尤其年轻女性，
经历过长工时、低工资、离家进城打工的辛苦。他点出那句核心："翻身的红利和翻身的辛苦，常常落在同一群人身上。"

⚠️ 老师反复纠正的两个误解：❌"全球化只是西方剥削穷国"（中国证明这套体系真能让穷国翻身）；
❌"中国脱贫跟全球化无关"（高度绑定 2001 入世 + 融入全球供应链）。两者都真，别写成单边。`,
          en: `The CEO's Lens Node 8 is specifically about the country that changed the whole game:
China. China is a main actor here, and teacher said the real Chinese terms can be used directly.

The story says: **in 2001 China joined the WTO (World Trade Organization)**, the single biggest
move in the history of globalization. To someone like the CEO, China meant one thing — a vast
population willing to enter factories, plus a government pouring everything into bridges, roads, and
ports (infrastructure), plus export-oriented policy. The world's factory orders poured in like a
tide, and in just twenty years China became the **"factory of the world"**: turn over the things in
your home and more than half say **"Made in China."**

Key exam sentence (must-memorize number): **from the 1980s to the 2010s, about 800 million people
in China rose out of extreme poverty** — the largest and fastest reduction of poverty in human
history, tightly bound to this global production system.

But the CEO honestly added the other side (Rule 0): that growth had a price — countless Chinese
migrant workers, especially young women, lived through long hours, low wages, and the hardship of
leaving home for the cities. He names the core line: "the dividend of the turnaround and the
hardship of it often land on the very same people."

Warning, two misconceptions teacher kept correcting: "globalization only means the West exploiting
the poor" (China proves this system really can let a poor country turn around); and "China's poverty
reduction had nothing to do with globalization" (it's tightly bound to the 2001 WTO entry and
joining global supply chains). Both are true, don't write it one-sided.`,
        },
      },
    },

    {
      id: 'poverty-decline-and-inequality',
      termCn: '脱贫红利与不平等（双刃）',
      termEn: 'Poverty Decline and Inequality (the Double Edge)',
      standardRef: ['AP World History Modern — Unit 9 (AP-WHAP-9)', 'AP DBQ rubric', 'CA HSS 10.11 / 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'global-south-garment-worker-receiving-end',
        nodeIds: ['gw-n5', 'gw-n9'],
        xiaoweiNote: {
          cn: `制衣女工 Lens 第 5 节和第 9 节最完整地讲了这一刀的两面——这是全 Topic 最高频、也最适合 DBQ 的考点。

**红利那面（第 5 节）**：女工寄回老家的钱，落地长出了真东西——妹妹上了学、爹的病治了、土坯房换了不漏雨的屋顶。
故事接上真实数字：**从 1990 到 2010 年代，全世界活在极端贫困里的人，比例从大约 36% 降到了大约 9%。**
几亿个像她这样的人，一针一线把自己和家里"缝出了赤贫"。这是真实的红利，不是美化。

**代价那面（第 9 节 + 锈带 Lens）**：同一套体系也跑在不平等上。在富国，像俄亥俄那样被掏空的工业城市叫**锈带（Rust Belt）**；
在穷国，"最便宜"的订单永远在往下一个更穷的地方移——今天给你做衣服的，明天可能换成更穷国家的女孩。
全球化让财富涨了，但**没有平均分**：有人盆满钵满，有人连工作都丢了，国与国、人与人之间的不平等在很多地方反而拉大了。

考点关键句（DBQ 高频）：**全球化是史上最大的减贫机器，同时是一套依赖廉价、常常不安全劳动的体系。**
问题不是"好还是坏"，而是"得益与代价如何分配、能不能让付代价的人也分到红利"。
⚠️ 误解陷阱：❌"全球化让所有人都受益"（净增益为正 ≠ 人人受益）。这种"既……又……"的双面分析，正是 AP 评分要的 complexity（复杂性）。`,
          en: `The garment worker's Lens Node 5 and Node 9 give the fullest two faces of this single
edge — the highest-frequency, most DBQ-friendly point in the whole topic.

**The dividend side (Node 5)**: the money she sent home grew into real things — her sister went to
school, her father's illness was treated, the mud-brick house got a roof that doesn't leak. The
story attaches the real number: **from 1990 to the 2010s, the share of the world living in extreme
poverty fell from about 36 percent to about 9.** Hundreds of millions of people like her sewed,
stitch by stitch, themselves and their families "out of destitution." A real dividend, not prettified.

**The price side (Node 9 + the Rust Belt Lens)**: the same system also runs on inequality. In rich
countries, hollowed-out industrial cities like Ohio's are called the **Rust Belt**; in poor
countries, the "cheapest" orders keep moving toward the next poorer place — the girl who makes your
clothes today may be replaced tomorrow by a girl in an even poorer country. Globalization made
wealth grow, but it was **not shared evenly**: some grew very rich, some lost their jobs entirely,
and inequality between nations and between people in many places actually widened.

Key exam sentence (high-frequency DBQ): **globalization is history's largest poverty-reduction
machine and, at the same time, a system that depends on cheap, often unsafe labor.** The question
isn't "good or bad," but "how the benefits and costs are distributed, and whether the people who pay
the price can also share the dividend." Misconception trap: "globalization benefited everyone" (a
positive net gain is not the same as everyone benefiting). This "both...and..." two-sided analysis
is exactly the complexity AP scoring rewards.`,
        },
      },
    },

    {
      id: 'sweatshops-rana-plaza',
      termCn: '血汗工厂与 Rana Plaza（2013）',
      termEn: 'Sweatshops and Rana Plaza (2013)',
      standardRef: ['AP World History Modern — Unit 9 (AP-WHAP-9)', 'AP DBQ rubric', 'CA HSS 10.11'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'global-south-garment-worker-receiving-end',
        nodeIds: ['gw-n7'],
        xiaoweiNote: {
          cn: `制衣女工 Lens 第 7 节讲了一件她每次想起都喘不上气的事——这是全 Topic 里"便宜的代价"最具体、最沉的一张卡。

先记定义：**血汗工厂（sweatshop）** = 长工时、低工资、不安全的劳动密集型工厂。

然后是那个真实事件：**2013 年 4 月 24 日，孟加拉国首都达卡郊外，一栋叫 Rana Plaza（拉纳广场）的八层楼塌了。**
楼里挤着好几家制衣厂，给一堆西方品牌做衣服。**前一天墙上已经裂出大口子、警告过有危险，工人第二天仍被叫回上工——
订单不能停。** 大楼塌下来，压死了**大约 1,134 个人**，大多是年轻女工。这是制衣业历史上最惨的一次事故。

考点关键句：Rana Plaza **不是意外，是体系的逻辑结果**——"找最便宜的地方生产"一路逼出来的。
女工那句我记下来了："你那件『真便宜』的衣服背后，不只有我寄回家的学费，也有那堵裂了缝却不让人停工的墙。
便宜的代价，有时候是命。"

为什么 DBQ 爱用这条？因为它逼你把宏观的"几亿人脱贫"和微观的"上千人惨死"放进**同一个天平**——
这正是 AP 评分要的：用具体证据撑起"红利与代价同体"的复杂判断，而不是简单歌颂或简单控诉。
（补充：倒塌后国际品牌、工会与孟加拉政府签了有约束力的工厂安全协议——可那是用 1,134 条命"买"来的进步。）`,
          en: `The garment worker's Lens Node 7 tells something that takes her breath away every time
she remembers it — the most concrete, heaviest "price of cheap" card in the whole topic.

First the definition: a **sweatshop** = a labor-intensive factory with long hours, low wages, and
unsafe conditions.

Then the real event: **on 24 April 2013, on the outskirts of Dhaka, the capital of Bangladesh, an
eight-story building called Rana Plaza collapsed.** It was packed with several garment factories
making clothes for a crowd of Western brands. **The day before, large cracks had opened in the walls
and a warning of danger had been raised, yet the workers were ordered back inside the next day — the
orders could not stop.** The building came down and crushed **about 1,134 people**, most of them
young women workers. It was the deadliest accident in the history of the garment industry.

Key exam sentence: Rana Plaza **was not an accident but the logical result of the system** — pushed
into being by "find the cheapest place to produce." I wrote down the worker's line: "behind your
'so cheap' shirt is not only the tuition I send home, but also that cracked wall they would not let
anyone stop working beneath. The price of cheap is, sometimes, a life."

Why do DBQs love this? Because it forces you to put the macro "hundreds of millions lifted from
poverty" and the micro "over a thousand crushed to death" on the **same scale** — exactly what AP
scoring wants: using concrete evidence to hold up the complex judgment that "dividend and price are
one body," not a simple celebration or a simple condemnation. (Note: after the collapse, Western
brands, unions, and the Bangladesh government signed a binding factory-safety accord — but that
progress was "bought" with 1,134 lives.)`,
        },
      },
    },

    {
      id: 'cultural-globalization',
      termCn: '文化全球化',
      termEn: 'Cultural Globalization',
      standardRef: ['AP World History Modern — Unit 9 (AP-WHAP-9)', 'CA HSS 10.11'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'ceo-or-trade-architect', nodeId: 'ceo-n6', context: '一件 T 恤、一部手机跨越国界——同一件商品把不同国家的人拴在一起，是物质层面的全球文化流动' },
          { lens: 'global-south-garment-worker-receiving-end', nodeId: 'gw-n1', context: '女工缝的衣服漂洋过海挂进她永远不会去的国家的商场——商品也带着品牌、款式、生活方式跨国流动' },
        ],
      },
      standaloneText: {
        cn: `**文化全球化（cultural globalization）** 是 AP World 第九单元的一条独立线索，
故事主要讲经济那一面（供应链、工厂、工资），没单独展开文化这一面，但 AP 会考，要单独掌握。

它指的是：随着商品、人、信息跨国流动，**文化也跟着流动、互相影响、在很多地方趋同**。常见表现——
- **流行文化跨国传播**：电影、音乐、运动、流行款式从一个国家传遍全球。
- **跨国品牌与连锁**：同样的快餐店、同样的手机、同样的运动鞋，在地球任何一个大城市都买得到。
- **互联网与社交媒体**：信息、潮流、迷因一夜之间传遍全世界，年轻人之间的"共同语言"越来越像。
- **共同语言的兴起**：英语成为很多领域的国际通用语，方便了贸易、科研和交流。

但文化全球化也是**双刃**的（呼应本 Topic 的 Rule 0）：
- 一面是**交流与丰富**：你能听到、看到、吃到、学到来自世界各地的东西，选择前所未有地多。
- 另一面是**同质化与本地文化的压力**："全球都长一个样"的担忧——本地语言、手艺、传统在强势文化面前可能被冲淡甚至消失。
  学者把"强势文化盖过弱势文化"的现象叫 **cultural homogenization（文化同质化）**，
  把它和反向的"本地文化抵抗、改造外来文化"放在一起讨论。

🔗 故事连接：CEO Lens 第 6 节那件 T 恤、那部手机，本身就是文化全球化的物质载体——
一件商品跨越国界，也带着它的品牌、款式、生活方式一起跨过去；
制衣女工 Lens 第 1 节，她缝的衣服漂洋过海，挂进她永远不会去的国家的商场，正是这种跨国流动的另一端。

⚠️ 别搞混：**经济全球化 = 商品/资本/生产跨国流动**；**文化全球化 = 文化/信息/生活方式跨国流动**。
两条线同源（都靠运输 + 通信技术 + 自由流动），但 AP 会分开考。`,
        en: `**Cultural globalization** is a separate thread in AP World Unit 9. The story mainly
covers the economic side (supply chains, factories, wages) and doesn't unpack the cultural side on
its own, but AP tests it, so master it separately.

It means: as goods, people, and information flow across borders, **culture flows too, influences one
another, and in many places converges.** Common forms —
- **Pop culture spreading across borders**: films, music, sports, and fashions spreading worldwide
  from one country.
- **Multinational brands and chains**: the same fast-food restaurants, the same phones, the same
  sneakers, buyable in any big city on earth.
- **The internet and social media**: information, trends, and memes spread worldwide overnight, and
  the "shared language" among young people grows more alike.
- **The rise of a common language**: English became an international lingua franca in many fields,
  easing trade, research, and exchange.

But cultural globalization is also **double-edged** (echoing this topic's Rule 0):
- One side is **exchange and richness**: you can hear, see, eat, and learn things from all over the
  world, with more choices than ever.
- The other side is **homogenization and pressure on local cultures**: the worry that "everywhere
  looks the same" — local languages, crafts, and traditions can be diluted or even disappear before
  a dominant culture. Scholars call a dominant culture overshadowing weaker ones **cultural
  homogenization**, and discuss it alongside the reverse — local cultures resisting and reshaping
  what comes in from outside.

Story link: the T-shirt and the phone in the CEO's Lens Node 6 are themselves the material carriers
of cultural globalization — a product crosses borders and carries its brand, styles, and way of life
across with it; in the garment worker's Lens Node 1, the clothes she sews travel across the ocean and
hang in a mall in a country she will never visit, the other end of that same cross-border flow.

Warning, don't mix them up: **economic globalization = goods, capital, and production flowing across
borders**; **cultural globalization = culture, information, and ways of life flowing across borders.**
The two threads share a source (transport, communication technology, and free flow), but AP tests
them separately.`,
      },
      xiaoweiNote: {
        cn: `这条我一开始没在故事里直接看到，因为三个视角主要讲经济。老师说 AP World 第九单元会单独考文化全球化，
最常考的是它的**双刃**：一面是交流让生活更丰富，一面是同质化让本地文化被冲淡。
我的口诀：**经济全球化搬的是"东西"，文化全球化搬的是"想法和生活方式"**——同一套技术 + 自由流动推动的两条线。`,
        en: `I didn't see this directly in the story at first, because the three lenses mostly cover
economics. Teacher said AP World Unit 9 tests cultural globalization separately, most often its
**double edge**: one side is exchange making life richer, the other is homogenization diluting local
cultures. My mnemonic: **economic globalization moves "things," cultural globalization moves "ideas
and ways of life"** — two threads driven by the same technology and free flow.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `全球极端贫困率从大约 36%（1990）降到大约 9%（2010 年代），几亿人脱了贫；
同一套体系里，2013 年 Rana Plaza 一栋裂了缝还不让停工的楼，压死了大约 1,134 个年轻女工。

你觉得全球化应该被看成"史上最大的减贫机器"，还是"一套靠廉价、不安全劳动跑起来的体系"？
用至少两条具体证据支持你的判断。`,
      en: `Global extreme poverty fell from about 36 percent (1990) to about 9 percent (the 2010s),
and hundreds of millions escaped poverty; within the same system, in 2013 Rana Plaza — a cracked
building they would not let anyone stop working in — collapsed and crushed about 1,134 young women
workers.

Should globalization be seen as "history's largest poverty-reduction machine" or as "a system that
runs on cheap, unsafe labor"? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "减贫机器"那边的证据：极端贫困 ~36%→~9%、中国约 8 亿人脱贫、女工寄钱让妹妹上学/爹治病/换不漏雨的屋顶。
- "靠廉价不安全劳动"那边的证据：Rana Plaza 约 1,134 死、长工时低工资的血汗工厂、"最便宜"订单永远往更穷的地方移。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。
关键别写成单边："净增益为正"不等于"人人受益"。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.
- Evidence for "poverty-reduction machine": extreme poverty ~36%→~9%, China's roughly 800 million
  lifted out, the worker's money sending her sister to school / treating her father / a roof that no
  longer leaks.
- Evidence for "cheap, unsafe labor": Rana Plaza's roughly 1,134 dead, sweatshops with long hours
  and low wages, the "cheapest" orders forever moving to poorer places.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's
complexity. Key: don't write it one-sided — "a positive net gain" is not "everyone benefits."`,
      conceptsActivated: ['poverty-decline-and-inequality', 'sweatshops-rana-plaza'],
    },
    {
      id: 'q2',
      cn: `锈带工人说：抢走他饭碗的那套体系，跟让他买得起便宜货的，是同一套东西——
他一边被它打倒，一边亲手买便宜货把它喂大。

如果你是 AP 老师，要出一道题考"全球化对同一个人，能不能同时是抢和给"，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `The Rust Belt worker says: the system that took his livelihood is the same one that lets
him afford cheap goods — he is knocked down by it and feeds it bigger with his own hands buying
cheap goods.

If you were an AP teacher writing a question on "can globalization be both a taking and a giving on
the same person," how would you phrase it? Write your question and explain what it's meant to make
students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以从锈带工人切入——作为工人，全球化抢走了他的饭碗、掏空了他的城；作为消费者，全球化让他瘪着的钱包买更多。
"恨它的左手，又攥着它的右手"——这句话点出全球化最别扭的地方：得益和付代价，可能是同一个人。
你的题目可以让学生对比"锈带工人（同一人身上又抢又给）"和"制衣女工（剥削她的和救她的是同一件事）"——
两个不同位置的人，为什么都说出了"同一件事有两面"？这种结构上的相似，说明了全球化的什么本质？`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through the Rust Belt worker — as a worker, globalization took his livelihood and
hollowed out his city; as a consumer, it let his thin wallet buy more. "Hating its left hand while
gripping its right" names the most awkward thing about globalization: the one who benefits and the
one who pays may be the same person. Your question could have students compare "the Rust Belt worker
(taking and giving on one person)" with "the garment worker (the thing that exploits her and the
thing that saves her are the same)" — two people in different positions, why do both say "one thing
has two faces"? What does that structural similarity reveal about the nature of globalization?`,
      conceptsActivated: ['offshoring-supply-chain', 'nafta-and-free-trade', 'poverty-decline-and-inequality'],
    },
    {
      id: 'q3',
      cn: `1956 年一个卡车司机出身的人发明的集装箱，把跨洋运费砍到几乎不要钱，
重新画了整个世界的就业地图：它既创造了几亿人的脱贫机会，也熄灭了无数工业城市的灯。

你同意"技术不是中性的"这个说法吗？一项只想"让运输更高效"的发明，
该不该为它后来造成的失业和血汗工厂负责？用集装箱或供应链里的一个具体环节支持你的看法。`,
      en: `In 1956 a former truck driver's invention, the container, cut ocean-shipping costs to
almost nothing and redrew the whole world's employment map: it both created the chance for hundreds
of millions to escape poverty and turned out the lights in countless industrial cities.

Do you agree that "technology is not neutral"? Should an invention that only meant "to make shipping
more efficient" be held responsible for the unemployment and sweatshops it later caused? Support your
view with one specific link in the container or the supply chain.`,
      hintCn: `提示：先分清楚两个层次——发明本身（集装箱、供应链技术）和**用它做什么**（离岸外包、压低工资、忽视安全）。
"技术中性论"会说：铁箱子只是工具，怪不到它头上，要怪的是用它的人和规则。
"技术不中性论"会说：一项技术一旦出现，就会把世界推向某个方向（集装箱一出现，"搬到最便宜的地方"几乎是必然）。
具体环节可以举：集装箱让运费暴跌 → 离岸外包变得划算 → 锈带工厂关门；或供应链"一件衣服出生在十个国家"
让责任被层层分散，最后没人为 Rana Plaza 那堵墙负责。
AP 看的是你能不能用一个真实环节，把"技术 vs 责任"这个抽象论点"钉"在证据上。`,
      hintEn: `Hint: first separate two levels — the invention itself (the container, supply-chain
technology) and **what's done with it** (offshoring, driving down wages, ignoring safety).
"Technology is neutral" says: the steel box is just a tool, you can't blame it; blame the people and
rules that use it. "Technology is not neutral" says: once a technology appears, it pushes the world
in a direction (once the container existed, "move to the cheapest place" was almost inevitable).
For a specific link, try: the container made shipping costs collapse, which made offshoring pay, which
closed Rust Belt factories; or the supply chain's "a shirt born in ten countries" scattering
responsibility layer by layer until no one answered for that Rana Plaza wall. AP wants you to "pin"
the abstract "technology vs responsibility" claim to evidence with one real link.`,
      conceptsActivated: ['container-shipping', 'offshoring-supply-chain', 'sweatshops-rana-plaza'],
    },
  ],
};

export default notebook;
