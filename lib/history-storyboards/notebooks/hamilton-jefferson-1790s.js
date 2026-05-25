// ─── 同伴笔记本架构 v1 · Hamilton vs Jefferson 1790s ──────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// Topic: 建国财政与第一次党争 · Hamilton vs Jefferson — The First Party System 1790s
// CA HSS-8.3 · APUSH Period 3 (1754-1800) · AP US Gov (federalism / implied powers)
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（8 个核心考点卡）
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（引 lens + nodeId）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (300-500 字 mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（hamilton 设计者 / banneker 质问者 / whiskey-farmer 链条末端 三条线）
//   - notebook 提供考点闭环：补完 AP 必考缺口——
//       两党起源 (Federalists vs Democratic-Republicans) / 中立 vs 法国 (Neutrality / Jay's Treaty) /
//       国家银行 strict vs loose construction (AP US Gov 逐字考点)
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：CA HSS-8.3 / APUSH Period 3 (KC-3.2.III) / AP US Gov (federalism, implied powers)
//
// 事实对账本 hamilton-jefferson-1790s-factledger.md（含已修硬错/强措辞）：
//   · 1790 全国总人口约 393 万（≈400 万），不是 600 万；奴隶 ~70 万 ≈ 六分之一 / 18%
//   · Hamilton 年龄按 1755 生年读法（49 死 / 32 任财长），生年 1755/57 两说并存（已显式标注）
//   · Banneker DC 测绘：协助 Andrew Ellicott 测绘队做天文观测，不神话化为主导
//   · "national debt... national blessing" 实为 Hamilton 1781 致 Robert Morris 真句
//   · whiskey-farmer = 显式合成角色 (composite)
//
// schemaVersion: 1 · notebookVersion: hamilton-jefferson-1790s-v1

export var notebook = {
  topicId: 'hamilton-jefferson-1790s',
  topicNameCn: '建国财政与第一次党争 1790s',
  topicNameEn: 'Hamilton vs Jefferson — The First Party System 1790s',
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
    cn: `今天历史课讲美国建国后的第一个十年——1790 年代。老师说这是"宪法这张纸第一次被拿来用"的时候。她在白板上写了这些名字：

Alexander Hamilton（汉密尔顿，第一任财政部长）、Thomas Jefferson（杰斐逊，国务卿）、
Benjamin Banneker（班纳克，自由黑人天文学家）、George Washington（华盛顿，首任总统）

还有一堆要背的词：assumption（承债）、national bank（国家银行）、
necessary and proper clause（弹性条款）、implied powers（默示权力）、
strict vs loose construction（严格 vs 宽松解释宪法）、excise tax（消费税）、
Whiskey Rebellion（威士忌暴动）、Federalists vs Democratic-Republicans（第一对政党）。

我先把这些抄下来。等下我要读三个故事——Hamilton（设计这套财政的人）、
Banneker（写信质问杰斐逊的人）、一个宾州西部威士忌酒农（被这套政策砸到的人）。
读完我再回来对照这张单子，看我能不能解释每一个词。

老师还说了一句我记在第一页的话："1790 年代的所有大事——承债、银行、消费税、威士忌暴动——
不是各管各的，是同一根因果链。别背成四件事，要看成一件事。"`,
    en: `Today's history class is about America's first decade after its founding — the 1790s.
My teacher said this is when "the Constitution, that one sheet of paper, got used for the first time."
She wrote these names on the board:

Alexander Hamilton (first Treasury Secretary), Thomas Jefferson (Secretary of State),
Benjamin Banneker (free Black astronomer), George Washington (first president)

Plus a pile of terms to memorize: assumption, national bank,
necessary and proper clause, implied powers,
strict vs loose construction, excise tax,
Whiskey Rebellion, Federalists vs Democratic-Republicans (the first two parties).

Let me copy these down. Next I'll read three stories — Hamilton (the man who designed this
financial system), Banneker (the man who wrote to question Jefferson), and a western
Pennsylvania whiskey farmer (the man the policy landed on). After that I'll come back to this
list and check whether I can explain each term.

Teacher also said one thing I wrote on the first page: "Every big event of the 1790s —
assumption, the bank, the excise tax, the Whiskey Rebellion — they aren't separate.
They're one causal chain. Don't memorize four things; see them as one thing."`,
    keyTerms: [
      { cn: '承债', en: 'assumption (of state debts)' },
      { cn: '国家银行', en: 'national bank' },
      { cn: '弹性条款（必要而适当）', en: 'necessary and proper clause' },
      { cn: '默示权力', en: 'implied powers' },
      { cn: '严格 vs 宽松解释宪法', en: 'strict vs loose construction' },
      { cn: '消费税', en: 'excise tax' },
      { cn: '联邦党 vs 民主共和党', en: 'Federalists vs Democratic-Republicans' },
      { cn: '中立宣言', en: 'Proclamation of Neutrality' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '亚历山大·汉密尔顿',
        nameEn: 'Alexander Hamilton',
        ipa: '/ˌæl.ɪɡˈzæn.dər ˈhæm.əl.tən/',
        roleCn: '首任财政部长，承债·国家银行·消费税三步的设计者；loose construction 代表',
        roleEn: 'first Treasury Secretary, architect of assumption/bank/excise tax; champion of loose construction',
        mustKnow: true,
        audioKey: 'alexander-hamilton',
      },
      {
        nameCn: '托马斯·杰斐逊',
        nameEn: 'Thomas Jefferson',
        ipa: '/ˈtɑːm.əs ˈdʒɛf.ər.sən/',
        roleCn: '国务卿，《独立宣言》执笔人；民主共和党与 strict construction 代表；蓄奴约 600 人',
        roleEn: 'Secretary of State, author of the Declaration; leader of Democratic-Republicans & strict construction; held ~600 enslaved people',
        mustKnow: true,
        audioKey: 'thomas-jefferson',
      },
      {
        nameCn: '本杰明·班纳克',
        nameEn: 'Benjamin Banneker',
        ipa: '/ˈbɛn.dʒə.mɪn ˈbæn.ɪ.kər/',
        roleCn: '自由黑人天文学家，1791 写信质问杰斐逊"写平等却蓄奴"的矛盾',
        roleEn: 'free Black astronomer, 1791 letter confronting Jefferson on "wrote equality yet held slaves"',
        mustKnow: true,
        audioKey: 'benjamin-banneker',
      },
      {
        nameCn: '乔治·华盛顿',
        nameEn: 'George Washington',
        ipa: '/dʒɔːrdʒ ˈwɒʃ.ɪŋ.tən/',
        roleCn: '首任总统，签署国家银行，1794 亲自领 13,000 民兵镇压威士忌暴动',
        roleEn: 'first president, signed the national bank, personally led 13,000 militia in 1794',
        mustKnow: true,
        audioKey: 'george-washington',
      },
      {
        nameCn: '詹姆斯·麦迪逊',
        nameEn: 'James Madison',
        ipa: '/dʒeɪmz ˈmæd.ɪ.sən/',
        roleCn: '杰斐逊的盟友，从《联邦党人文集》合著者转向反 Hamilton 阵营',
        roleEn: "Jefferson's ally, shifted from Federalist Papers co-author to anti-Hamilton camp",
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '阿伦·伯尔',
        nameEn: 'Aaron Burr',
        ipa: '/ˈɛər.ən bɜːr/',
        roleCn: '时任副总统，1804 年在决斗中击毙 Hamilton',
        roleEn: 'sitting vice president who killed Hamilton in an 1804 duel',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'report-public-credit-assumption',
      termCn: '《公共信用报告》与承债案',
      termEn: 'Report on Public Credit & Assumption',
      standardRef: ['APUSH KC-3.2.III', 'CA HSS-8.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'hamilton',
        nodeIds: ['ham-n3', 'ham-n4'],
        xiaoweiNote: {
          cn: `这个我在 视角一（Hamilton）第 3、4 节读到了。重点拎出来：

背景：1783 年仗打赢了，国家却破产了。各州 + 邦联政府欠了天文数字的债，美国国债在欧洲市场只值面值的几分之一——因为没人相信美国还得起。

1790 年 Hamilton 交出《公共信用报告》（Report on Public Credit），核心一招叫 **assumption（承债）**：联邦政府把各州欠的债全部承担过来。

故事里 Hamilton 自己说穿了真逻辑：这不是单纯还债，是"用债把全国最有钱的一群人焊到联邦政府身上"——债主（商人、银行家、债券持有者）的钱包一旦跟联邦绑死，他们就会盼联邦强大。

考点关键句：assumption 是 Hamilton 财政三步的第一步（承债 → 国家银行 → 消费税），目的是给一个破产的新国家**建立国家信用（national credit）**。

careful framing：反对派说这是"逼诚实的州（已还清债的弗吉尼亚）替不诚实的州（没还清的马萨诸塞）买单"——这是第一次党争的导火索之一。考试两边都要会说。`,
          en: `I read this in Lens 1 (Hamilton), Nodes 3 and 4. Pulling out the key points:

Background: in 1783 the war was won but the country was bankrupt. The states plus the
confederation government owed an astronomical sum, and American bonds traded in Europe at a
fraction of face value — because no one believed America could repay.

In 1790 Hamilton delivered the **Report on Public Credit**, whose core move is **assumption**:
the federal government takes on all the states' debts.

In the story Hamilton states the real logic himself: this isn't simple repayment, it's "using
debt to weld the richest people in the country onto the federal government." Once creditors'
purses (merchants, bankers, bondholders) are bound to the union, they'll wish it strong.

Key exam sentence: assumption is step one of Hamilton's three-part plan (assumption → national
bank → excise tax), aimed at building **national credit** for a bankrupt new nation.

Careful framing: opponents said this "forced honest states (Virginia, already paid off) to
cover dishonest ones (Massachusetts, not paid off)" — one of the sparks of the first party
split. On a test, be able to argue both sides.`,
        },
      },
    },

    {
      id: 'compromise-of-1790',
      termCn: '1790 妥协案（承债换首都）',
      termEn: 'Compromise of 1790',
      standardRef: ['APUSH KC-3.2.III', 'CA HSS-8.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'hamilton',
        nodeIds: ['ham-n4'],
        xiaoweiNote: {
          cn: `这个故事在 视角一第 4 节那顿"晚饭"里讲过，但它有一个专门的 AP 名字我必须记牢：**Compromise of 1790**（1790 妥协案），也叫 "dinner table bargain"（晚餐桌交易）。

发生了什么：1790 年夏天，Hamilton 跟 Jefferson、Madison 在一顿晚饭上做了交易——
- Jefferson 一派投票支持 Hamilton 的承债案（assumption）；
- Hamilton 一派支持把首都从北方迁到南方的波托马克河边（就是今天的华盛顿特区 Washington, D.C.）。

一顿饭同时定了两件大事：美国的财政走向 + 首都在哪。

考点关键句：Compromise of 1790 把"承债"（北方/Hamilton 想要的）和"南方首都"（Jefferson 想要的）打包成一个交易——这是建国早期"地区利益（北方商业 vs 南方农业）通过妥协解决"的经典案例。

careful framing：史学界对这顿晚饭到底有多"决定性"有保留（不是唯一原因）——所以 essay 里别写成"一顿饭单独决定了一切"，写成"促成了关键妥协"更稳。`,
          en: `The story told this in the "dinner" of Lens 1 Node 4, but it has a dedicated AP name I have
to nail down: the **Compromise of 1790**, also called the "dinner table bargain."

What happened: in the summer of 1790, Hamilton met Jefferson and Madison over one dinner and
struck a deal —
- Jefferson's side voted to support Hamilton's assumption plan;
- Hamilton's side backed moving the capital from the north to the southern Potomac (today's
  Washington, D.C.).

One dinner settled two big things at once: the course of American finance plus where the capital
would sit.

Key exam sentence: the Compromise of 1790 bundled "assumption" (what the north/Hamilton wanted)
with "a southern capital" (what Jefferson wanted) into one trade — a classic case of early-republic
"regional interests (northern commerce vs southern agriculture) resolved through compromise."

Careful framing: historians have reservations about how "decisive" that dinner truly was (not the
only cause) — so in an essay don't write "one dinner alone decided everything"; "helped produce
the key compromise" is safer.`,
        },
      },
    },

    {
      id: 'national-bank-implied-powers',
      termCn: '国家银行 / 弹性条款 / 严格 vs 宽松解释',
      termEn: 'National Bank / Necessary & Proper / Strict vs Loose Construction',
      standardRef: ['AP US Gov (federalism, implied powers)', 'APUSH KC-3.2.III', 'CA HSS-8.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'hamilton',
        nodeIds: ['ham-n5'],
        xiaoweiNote: {
          cn: `这是全 topic **最高频考点**——老师说 AP US Gov 几乎逐字考它。故事在 视角一第 5 节讲过，我这里把考点框架拎出来（故事不重复）。

1791 年 Hamilton 建 **国家银行（First Bank of the United States，美国第一银行）**：联邦特许、政府与私人合资、发统一货币、放贷。问题：宪法根本没写"联邦可以建银行"。

于是两种读宪法的方法正面对撞——这四个术语必须背：
- **strict construction（严格解释）**：宪法没明写的权力，联邦不能用。→ Jefferson
- **loose construction（宽松解释）**：宪法没明写也可以推出来。→ Hamilton
- **necessary and proper clause（弹性条款）**：宪法第一条给国会"制定一切必要而适当的法律"的权力（Article I, §8, cl.18）。Hamilton 说建银行是管财政"必要而适当"的手段。
- **implied powers（默示权力）**：从弹性条款"推"出来、宪法没明写的联邦权力。建银行就是一个。

Washington 让两人各写意见书，最后签了 Hamilton 这边，1791 年银行成立。

考点关键句：国家银行之争 = strict vs loose construction 之争的第一个实战，底层问题是"联邦权力只限于宪法白纸黑字，还是能从弹性条款里长出来"。

🔗 长尾连接：这套 implied powers 逻辑后来被最高法院 **McCulloch v. Maryland (1819)** 判例确认——又是一个 AP 必考判例。记法："Hamilton 1791 提出 implied powers → McCulloch 1819 法院盖章。"`,
          en: `This is the **most frequently tested** point in the whole topic — teacher says AP US Gov
asks it almost word for word. The story covered it in Lens 1 Node 5; here I pull out the exam
framework (no repeating the story).

In 1791 Hamilton built the **national bank (First Bank of the United States)**: federally chartered,
jointly owned by government and private shareholders, issuing a common currency, lending. The
problem: the Constitution said nothing about a federal power to build a bank.

So two ways of reading the Constitution collided head-on — memorize these four terms:
- **strict construction**: a power the Constitution doesn't spell out, the federal government may
  not use. → Jefferson
- **loose construction**: a power not spelled out can still be inferred. → Hamilton
- **necessary and proper clause**: Article I, §8, cl.18 gives Congress power to make "all laws
  necessary and proper." Hamilton said a bank is a necessary-and-proper means of managing finance.
- **implied powers**: federal powers inferred from the necessary and proper clause, not written
  out. A bank is one of them.

Washington had each man write him an opinion, then signed with Hamilton; the bank was founded in 1791.

Key exam sentence: the national bank fight = the first real test of strict vs loose construction,
with the underlying question "is federal power limited to the Constitution's literal text, or can
it grow out of the necessary and proper clause?"

🔗 Long-tail link: this implied-powers logic was later confirmed by the Supreme Court in
**McCulloch v. Maryland (1819)** — another must-know AP case. Memory aid: "Hamilton proposes
implied powers in 1791 → McCulloch stamps it in 1819."`,
        },
      },
    },

    {
      id: 'whiskey-rebellion-excise',
      termCn: '消费税与威士忌暴动',
      termEn: 'Excise Tax & the Whiskey Rebellion',
      standardRef: ['APUSH KC-3.2.III', 'CA HSS-8.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'whiskey-farmer',
        nodeIds: ['whf-n3', 'whf-n4', 'whf-n5', 'ham-n6'],
        xiaoweiNote: {
          cn: `这个我从两头都读到了——视角三（威士忌酒农 Tom）整条线 + 视角一（Hamilton）第 6 节。两头拼起来才是完整考点。

链条（这是本 topic 的核心因果链）：国家银行要运转 + 承债揽来的债要还利息 → 都要钱 → 1791 年 Hamilton 推 **excise tax（消费税）**，对国内蒸馏的威士忌征税（**新政府第一个对自己国内产品征的税**）→ 边疆酒农反抗 → 1794 **Whiskey Rebellion（威士忌暴动）**。

为什么边疆人这么气：在没现金的宾州西部，威士忌不是酒，是货币（付工钱、换工具都用它）。税要用硬币交，可山那边根本没硬币。等于直接掏他们口袋。

1794 年高潮：约 **7,000 人**聚 Braddock's Field → Washington 和 Hamilton 征 **约 13,000 民兵**（比独立战争好几场仗的兵都多），Washington 亲自骑马领队（**美国史上唯一一次在任总统亲自带兵**）→ 7,000 人没打就散了 → 约 20 人受审、2 人判叛国罪、后被 Washington 赦免。

考点关键句：威士忌暴动证明**新联邦政府有能力执行法律、对境内动用武力**——这是它和软弱的邦联（Articles of Confederation 连税都收不上）的关键区别。

careful framing：故事 视角一第 6 节里 Hamilton 自己承认，13,000 大军真正的目的不是抓人，是"演给有钱债主看：这个政府收得上税、还得起债"。所以这既是"立国威"，也是"拿穷酒农给富人立威"——DBQ 两边都要写。`,
          en: `I read this from both ends — all of Lens 3 (the whiskey farmer Tom) plus Lens 1 (Hamilton)
Node 6. You only get the full exam point by putting both together.

The chain (this is the topic's core causal chain): the national bank had to run + assumed debts
had to be paid interest → all of it needed money → in 1791 Hamilton pushed an **excise tax** on
domestically distilled whiskey (**the new government's first tax on a product made inside the
country**) → frontier distillers resisted → 1794 **Whiskey Rebellion**.

Why frontier people were so angry: in cashless western Pennsylvania, whiskey wasn't a drink, it was
money (paying wages, trading for tools). The tax had to be paid in coin — but there was no coin on
that side of the mountains. It reached straight into their pockets.

1794 climax: about **7,000** gathered at Braddock's Field → Washington and Hamilton called up
**about 13,000 militia** (more men than several battles of the Revolution), with Washington
personally riding at the head (**the only time in U.S. history a sitting president led troops in
the field**) → the 7,000 scattered without a fight → about 20 stood trial, 2 were convicted of
treason, later pardoned by Washington.

Key exam sentence: the Whiskey Rebellion proved the **new federal government could enforce its
laws and use force within its borders** — the key contrast with the weak Articles of Confederation
(which couldn't even collect taxes).

Careful framing: in Lens 1 Node 6 Hamilton admits the real aim of the 13,000 troops wasn't to
arrest people, but to "perform for wealthy creditors: this government can collect taxes and repay
debt." So it's both "establishing national authority" and "using poor distillers to make a show of
force for the rich" — write both sides in a DBQ.`,
        },
      },
    },

    {
      id: 'first-party-system',
      termCn: '第一次党争：联邦党 vs 民主共和党',
      termEn: 'First Party System: Federalists vs Democratic-Republicans',
      standardRef: ['APUSH KC-3.2.III', 'CA HSS-8.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'hamilton', nodeId: 'ham-n7', context: 'Hamilton 回看："第一次党争真赌注不是要不要银行，是这个国家以谁为中心"；1800 Jefferson 赢总统' },
        ],
      },
      standaloneText: {
        cn: `这张卡故事没专门展开（故事是从"人"切入的，党争是从"派系"切入的），但 AP 必考，我得自己补完。

**美国宪法本来没设计政党**——开国者甚至觉得政党（"faction"，党派）是坏东西。但 1790 年代 Hamilton 的财政计划一出，两套对立的世界观就硬生生分成了两个党。这叫 **First Party System（第一党系）**。

**联邦党（Federalists）— Hamilton 这一派：**
- 主张：强联邦政府、loose construction（宽松解释宪法）、国家银行、鼓励商业和制造业、亲英（英国是最大贸易伙伴）。
- 支持者：东北部商人、银行家、城市、有产者。
- 关键人物：Hamilton、John Adams（第二任总统）。

**民主共和党（Democratic-Republicans）— Jefferson 这一派：**
- 主张：强州权、strict construction（严格解释宪法）、反对国家银行、推崇农业（"自耕农共和国"）、亲法（法国大革命同道）。
- 支持者：南方种植园主、西部边疆农民、普通农人。
- 关键人物：Jefferson、Madison。

**怎么记两党区别**（一句话对照）：
| | 联邦党 Federalists | 民主共和党 Dem-Reps |
|宪法|loose（宽松）|strict（严格）|
|权力|强联邦|强州权|
|经济|商业/银行|农业/土地|
|外交|亲英|亲法|

考点关键句：第一次党争的真赌注不是"要不要一个银行"，是"**这个国家以谁为中心**"——商人和城市，还是农民和土地；强联邦，还是州权。

🔗 故事连接：视角一（Hamilton）第 7 节他自己点破这一点，并说 **1800 年大选 Jefferson 赢了总统**——这是美国历史上第一次政党轮替（"Revolution of 1800"，权力和平地从一党交到另一党手里）。

🔗 长尾：今天美国"联邦权 vs 州权""城市 vs 乡村""精英 vs 普通人"的政治断层，源头就在这第一次党争。`,
        en: `The story didn't lay this card out on its own (the story enters through "people," party
conflict enters through "factions"), but AP definitely tests it, so I have to fill it in myself.

**The U.S. Constitution never designed political parties** — the founders even thought parties
("factions") were a bad thing. But the moment Hamilton's financial plan appeared in the 1790s, two
opposing worldviews split into two parties. This is the **First Party System**.

**Federalists — Hamilton's side:**
- Beliefs: strong federal government, loose construction, the national bank, encouraging commerce
  and manufacturing, pro-British (Britain was the biggest trade partner).
- Supporters: northeastern merchants, bankers, cities, the propertied.
- Key figures: Hamilton, John Adams (second president).

**Democratic-Republicans — Jefferson's side:**
- Beliefs: strong states' rights, strict construction, opposition to the national bank, exalting
  agriculture (a "republic of yeoman farmers"), pro-French (allies of the French Revolution).
- Supporters: southern planters, western frontier farmers, ordinary farmers.
- Key figures: Jefferson, Madison.

**How to remember the two parties** (one-line contrast):
| | Federalists | Dem-Reps |
|Constitution|loose|strict|
|Power|strong federal|strong states|
|Economy|commerce/banks|agriculture/land|
|Foreign|pro-British|pro-French|

Key exam sentence: the real stake of the first party split wasn't "should there be a bank," it was
"**whom is this country centered on**" — merchants and cities, or farmers and land; a strong union,
or states' rights.

🔗 Story link: in Lens 1 (Hamilton) Node 7 he names this himself, and says **Jefferson won the
presidency in the 1800 election** — the first peaceful party turnover in U.S. history (the
"Revolution of 1800," power passing peacefully from one party to another).

🔗 Long tail: today's American political fault lines — "federal power vs states' rights," "city vs
country," "elite vs common people" — trace back to this first party split.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 8 年级和 APUSH **都必考**的核心：会做一道"把主张/支持者归到正确政党"的配对题。我的记忆口诀："**Hamilton = H = 强联邦（Hard/strong center）；Jefferson = strict + states + soil（严格、州权、土地，三个 S）**。" 还有一招：联邦党亲英、民主共和党亲法——记"Federalists 友 England（F 配 E 不顺，但反着记），Republicans 友 France（R…France 都有 r）"。`,
        en: `Teacher said this is core for **both** Grade 8 and APUSH: you'll get a matching question
sorting beliefs/supporters into the correct party. My mnemonic: "**Hamilton = H = strong central
government (Hard/strong center); Jefferson = strict + states + soil (three S's)**." And one more:
Federalists pro-British, Dem-Reps pro-French — remember "Republicans → France (both have an r)."`,
      },
    },

    {
      id: 'neutrality-france',
      termCn: '中立 vs 法国：中立宣言与杰伊条约',
      termEn: 'Neutrality vs France: Proclamation of Neutrality & Jay\'s Treaty',
      standardRef: ['APUSH KC-3.2.III', 'CA HSS-8.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这张卡故事完全没碰（三个视角 都是国内财政线），但它是 1790 年代外交的 AP 必考缺口，我必须独立补。

背景：1789 年法国大革命爆发，1793 年法国跟英国开战。这下把美国架在火上——
- 美国欠法国一份**独立战争时的同盟之恩**（1778 年法美同盟，没有法国援助美国可能赢不了独立战争）；
- 但英国是美国**最大的贸易伙伴**，跟英国翻脸经济会崩。
- 而且两党在这件事上正好撕成两半：联邦党（Hamilton）亲英，民主共和党（Jefferson）亲法。

Washington 的决定：**1793 年《中立宣言》（Proclamation of Neutrality）**——美国谁都不帮，保持中立。这是一个极重要的先例：新国家太弱，先别卷进欧洲大国的战争，专心稳定自己。

三个相关考点（按重要性）：
1. **Proclamation of Neutrality（1793）**：宣布中立，确立美国早期"不卷入欧洲纠纷"的外交基调。
2. **Citizen Genêt 事件（1793）**：法国派来的公使 Genêt 在美国土地上招募人手、武装船只去打英国，公然无视美国中立——逼得连亲法的 Jefferson 都尴尬。说明中立是认真的。
3. **Jay's Treaty（杰伊条约，1794-95）**：跟英国签的条约，化解了一场可能的英美战争，但条款被认为偏向英国——民主共和党气炸了，觉得是出卖法国盟友。这条约把两党外交分歧推到顶点。

考点关键句：1793 年《中立宣言》确立了美国早期外交的核心原则——**新国家太弱，先避免卷入欧洲列强的战争**。这条原则一路延续到 Washington 卸任时的《告别演说》（警告"不要搞永久同盟"）。

🔗 党争连接：这张卡和"第一次党争"那张是连在一起的——亲英 vs 亲法的外交分歧，正是联邦党 vs 民主共和党的一条主战线。`,
        en: `The story doesn't touch this card at all (all three lenses are domestic-finance lines), but
it's an AP must-know gap in 1790s diplomacy, so I have to fill it independently.

Background: the French Revolution broke out in 1789, and in 1793 France went to war with Britain.
That put America on the spot —
- America owed France a **debt of alliance from the Revolution** (the 1778 Franco-American alliance;
  without French aid the U.S. might not have won independence);
- but Britain was America's **biggest trade partner**, and a break with Britain would crash the economy.
- And the two parties split exactly on this: Federalists (Hamilton) pro-British, Democratic-Republicans
  (Jefferson) pro-French.

Washington's decision: the **1793 Proclamation of Neutrality** — America helps neither side, stays
neutral. A hugely important precedent: the new nation was too weak; stay out of the great powers'
war and focus on stabilizing itself.

Three related exam points (by importance):
1. **Proclamation of Neutrality (1793)**: declares neutrality, sets the early American foreign-policy
   tone of "stay out of European quarrels."
2. **Citizen Genêt affair (1793)**: the French envoy Genêt recruited men and armed ships on American
   soil to fight Britain, openly defying U.S. neutrality — embarrassing even the pro-French Jefferson.
   It showed neutrality was serious.
3. **Jay's Treaty (1794-95)**: a treaty with Britain that defused a possible Anglo-American war but
   was seen as tilting toward Britain — Democratic-Republicans were furious, calling it a betrayal of
   the French ally. This pushed the two parties' foreign-policy split to its peak.

Key exam sentence: the 1793 Proclamation of Neutrality established the core principle of early
American diplomacy — **the new nation was too weak; avoid being dragged into the great powers' wars**.
This principle ran straight through to Washington's Farewell Address (warning against "permanent
alliances").

🔗 Party link: this card connects to the "first party system" card — the pro-British vs pro-French
foreign-policy split was a main front of Federalists vs Democratic-Republicans.`,
      },
      xiaoweiNote: {
        cn: `老师强调：如果选择题问"1790 年代美国外交的核心原则是什么"，答 **neutrality（中立）**，不是结盟。我的记忆链："法国大革命（1789）→ 法英开战（1793）→ Washington 宣布中立（1793）→ Jay's Treaty（偏英，1794-95）→ 告别演说（别搞永久同盟）。"一条线串下来，外交这部分就齐了。`,
        en: `Teacher emphasized: if multiple choice asks "what was the core principle of 1790s American
diplomacy," answer **neutrality**, not alliance. My memory chain: "French Revolution (1789) →
France-Britain war (1793) → Washington declares neutrality (1793) → Jay's Treaty (pro-British,
1794-95) → Farewell Address (no permanent alliances)." String it as one line and the foreign-policy
section is complete.`,
      },
    },

    {
      id: 'banneker-letter-equality',
      termCn: '班纳克致杰斐逊的信 / 平等的矛盾',
      termEn: "Banneker's Letter to Jefferson / The Equality Contradiction",
      standardRef: ['APUSH KC-3.2.III', 'CA HSS-8.3', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'banneker',
        nodeIds: ['ban-n4', 'ban-n5', 'ban-n6', 'ban-n7'],
        xiaoweiNote: {
          cn: `视角二整条线就是他。这一卡考的是"建国话语的排除性"——AP DBQ 高频角度。

谁是 Banneker：马里兰一个自学成才的自由黑人天文学家。1753 年靠看一只怀表用木头刻出整套齿轮造了座钟；1791 年算出整年日月星辰的年历（almanac），还**协助 Andrew Ellicott 的测绘队**给新首都（华盛顿特区）做边界天文观测。

关键事件（时间要记牢）：**1791 年 8 月 19 日**，Banneker 把手抄年历寄给国务卿 Jefferson，附一封信。**1791 年 8 月 30 日** Jefferson 回信。

信里他做了什么（这是考点核心打法）：他**不骂不求**，把 Jefferson 自己的话摆回他面前——你们当年把自己在英国统治下的处境叫"奴役"、为挣脱它打仗、写下"人人生而平等"，却把我同胞按在更重的奴役下，这怎么并存？随信附的年历本身就是证据：一本全是数学的书，出自一个 Jefferson 说"天生低劣"的种族之手。

Jefferson 的回应：客气地谢他、说把年历转寄给巴黎的科学家 Condorcet，但**全程绕开那个真问题**（没碰"写平等却蓄奴"）；私下他甚至怀疑年历是白人邻居代算的。

考点关键句：Banneker 开创了一种抗争打法——**不要新原则，逼这个国家兑现它自己已经写下的旧原则**（"你说人人平等？那就把我也算进'人人'里"）。

🔗 长尾（DBQ 金句）：这套打法被后世一路沿用——逃奴出身的废奴演说家 Frederick Douglass 用《独立宣言》论证废奴，Martin Luther King 用同一份文件论证民权。Banneker 的信被印成小册子，成了废奴运动的早期武器。短期没救一个奴隶，长尾却把"人人算不算我们"这个问题钉进了美国的良心。`,
          en: `Lens 2 is entirely about him. This card tests "the exclusivity of founding rhetoric" — a
high-frequency AP DBQ angle.

Who Banneker was: a self-taught free Black astronomer in Maryland. In 1753 he carved a whole set of
wooden gears into a clock after looking at one pocket watch; in 1791 he calculated a full-year
almanac of sun, moon, and stars, and **assisted Andrew Ellicott's survey team** with astronomical
observations for the new capital's (Washington, D.C.) boundary.

Key events (memorize the dates): on **August 19, 1791**, Banneker mailed a hand-copied almanac to
Secretary of State Jefferson with a letter. On **August 30, 1791**, Jefferson replied.

What he did in the letter (the core exam move): he **neither cursed nor begged** — he set Jefferson's
own words back in front of him. You once called your situation under British rule "slavery," fought a
war to break free, wrote "all men are created equal," yet you hold my people under a heavier slavery —
how do these stand together? The enclosed almanac was itself evidence: a book of pure mathematics from
the hand of a race Jefferson called "born inferior."

Jefferson's response: politely thanked him, said he forwarded the almanac to the Paris scientist
Condorcet, but **went around the real question entirely** (never touched "wrote equality yet held
slaves"); privately he even suspected a white neighbor had done the calculations.

Key exam sentence: Banneker pioneered a way of fighting — **don't demand a new principle; force this
country to honor the principle it had already written** ("you say all men are equal? then count me
inside 'all men'").

🔗 Long tail (DBQ gold): this move was reused for generations — the runaway-turned-abolitionist orator
Frederick Douglass used the Declaration of Independence to argue for abolition; Martin Luther King used
the same document for civil rights. Banneker's letter was printed as a pamphlet and became an early
abolitionist weapon. Short term it freed not one slave; the long tail drove "do the 'all men' count
us?" question into America's conscience.`,
        },
      },
    },

    {
      id: 'founding-contradictions',
      termCn: '建国理想的内部矛盾："人人"算不算所有人',
      termEn: 'Internal Contradictions of the Founding: Who Counts as "All Men"',
      standardRef: ['AP DBQ rubric', 'APUSH KC-3.2.III', 'CA HSS-8.3'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ham-n8', 'ban-n6', 'whf-n6'],
        xiaoweiNote: {
          cn: `这个老师特别强调——AP DBQ 一定考，而且三个视角 在第 6/8 节都汇到了这一点。

1790 年代的美国一边写着"人人生而平等"，一边把好几群人排在"人人"外面：
- **被奴役者**：1790 年首次全国普查，约 400 万总人口里约 **70 万是奴隶**（约六分之一、约 18%）。
- **自由黑人**：像 Banneker，能拥有地却不能投票、上不了正经学校。
- **边疆穷农**：威士忌酒农，被消费税掏空口袋、被 13,000 大军镇压。
- **Jefferson 本人**：写"人人生而平等"，却蓄奴约 600 人，还在书里写过黑人天生低劣论。
- **Hamilton 本人**：公开反对奴隶制（曾是纽约 Manumission Society 成员），却替蓄奴的妻家（Schuyler）管过涉及奴隶买卖的账目——理想与伪善同体。

三个视角其实在问同一个问题：**这个新国家，到底把谁算进"人人"里？**（视角一 Hamilton 把权力焊给富人和城市 / 视角二 黑人被留在平等话语之外 / 视角三 边疆穷农被甩在后面。）

这不是说建国是骗局——是说**理念和实践之间有差距**，而这个差距后来由废奴运动、民权运动一点点去填。

写 DBQ essay 模板：
1. 承认建国的进步意义（推翻王权、建立共和、写下"人人生而平等"的理想）。
2. 列至少 3 个被排除的群体（奴隶 / 自由黑人 / 边疆穷农），各配一个证据。
3. 用 Banneker 当"逼国家兑现自己原则"的代表——他比写平等的人更认真对待平等。
4. 结论：建国理想是一个**未完成的项目（unfinished project）**，不是完成品。

careful framing（最重要）：别二元化。同一套财政系统**既**建立了真实的国家信用，**也**确实把权力焊向富人；同一个 Jefferson **既**写下平等理想，**也**终身蓄奴。AP 训练的就是**同时持有这两面**（hold the contradiction）。`,
          en: `Teacher especially emphasized this — AP DBQ definitely tests it, and all three lenses converge
on this point in Nodes 6/8.

1790s America wrote "all men are created equal" while leaving several groups outside of "all men":
- **The enslaved**: in the first national census of 1790, of about 4 million total, roughly **700,000
  were enslaved** (about one-sixth, about 18%).
- **Free Black people**: like Banneker, who could own land but couldn't vote or enter a proper school.
- **Poor frontier farmers**: whiskey distillers, emptied by the excise tax and put down by 13,000 troops.
- **Jefferson himself**: wrote "all men are created equal," yet held about 600 enslaved people and wrote
  of Black inferiority in his own book.
- **Hamilton himself**: opposed slavery openly (a member of New York's Manumission Society), yet kept
  accounts for his slaveholding in-laws' (the Schuylers') slave dealings — ideals and hypocrisy in one body.

The three lenses are really asking one question: **whom does this new nation count inside "all men"?**
(Lens 1, Hamilton welds power to the rich and the cities / Lens 2, Black people left outside the language
of equality / Lens 3, poor frontier farmers left behind.)

This doesn't mean the founding was a fraud — it means there's a gap between idea and practice, and that
gap was later filled, bit by bit, by abolition and the civil rights movement.

DBQ essay template:
1. Acknowledge the founding's progress (overthrowing monarchy, building a republic, writing the ideal
   "all men are created equal").
2. List at least 3 excluded groups (enslaved / free Black / poor frontier), each with a piece of evidence.
3. Use Banneker as the figure who "forced the nation to honor its own principle" — he took equality more
   seriously than the men who wrote it.
4. Conclusion: the founding ideal is an **unfinished project**, not a finished product.

Careful framing (most important): don't make it binary. The same financial system **both** built real
national credit **and** truly welded power toward the rich; the same Jefferson **both** wrote the ideal
of equality **and** held slaves his whole life. What AP trains is **holding both at once** (holding the
contradiction).`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `同一部宪法，Hamilton 读出"联邦可以建银行"（loose construction），Jefferson 读出"不能"（strict construction）。
宪法里根本没写"联邦可以建银行"这一条，Hamilton 靠的是"必要而适当"条款推出来的 implied powers。

当一份规则没明说某件事时，应该默认"可以做"还是"不可以做"？为什么？如果你是 1791 年的 Washington，
Jefferson 和 Hamilton 各递来一份意见书，你会签谁的？`,
      en: `Reading the same Constitution, Hamilton found "the federal government may build a bank" (loose
construction); Jefferson found "it may not" (strict construction). The Constitution says nothing about
a federal power to build a bank — Hamilton relied on implied powers inferred from the "necessary and
proper" clause.

When a rule doesn't spell something out, should the default be "you may do it" or "you may not"? Why?
If you were Washington in 1791, with an opinion from each of Jefferson and Hamilton on your desk, whose
would you sign?`,
      hintCn: `提示：从两边各想一遍——(1) 如果默认"没写就不能"，政府很难应对宪法写作时想不到的新情况
（比如几百年后的互联网、太空），但权力被约束得很死，不容易滥权；(2) 如果默认"必要而适当就能"，政府灵活，
但"必要而适当"由谁说了算？会不会无限扩权？

进阶：这个问题两百多年没吵完——1819 年最高法院 McCulloch v. Maryland 案站了 Hamilton 这边（implied powers
成立）。但今天关于"联邦政府权力到底能伸多远"的争论，还是同一个问题。你能举一个今天的例子吗？`,
      hintEn: `Hint: think through both sides — (1) if the default is "not written, not allowed," government
struggles with situations the Constitution's authors couldn't foresee (the internet, space centuries
later), but power is tightly bound and harder to abuse; (2) if the default is "necessary and proper, so
allowed," government is flexible, but who decides what's "necessary and proper"? Could power expand
without limit?

Going deeper: this argument has run for two centuries — in 1819 the Supreme Court's McCulloch v. Maryland
sided with Hamilton (implied powers stand). But today's debate over "how far federal power can reach" is
the same question. Can you name a present-day example?`,
      conceptsActivated: ['national-bank-implied-powers', 'first-party-system'],
    },
    {
      id: 'q2',
      cn: `Banneker 1791 年写信质问 Jefferson，他没有指着鼻子骂，也没有哀求，而是把 Jefferson 自己写的
"人人生而平等"摆回他面前，逼他要么照做、要么承认自己虚伪。Jefferson 客气地回了信，却绕开了真问题。

如果你是 AP 老师，要出一道 DBQ 题分析 Banneker 的这种打法，你会怎么提问？`,
      en: `When Banneker wrote to confront Jefferson in 1791, he neither cursed him nor begged — he set
Jefferson's own words, "all men are created equal," back in front of him, forcing him to either live by
them or admit his hypocrisy. Jefferson replied politely but went around the real question.

If you were an AP teacher writing a DBQ on Banneker's strategy, how would you phrase the question?`,
      hintCn: `提示：DBQ 通常会给学生几份原始材料（Banneker 的信、Jefferson 的回信、Jefferson 私下怀疑年历是白人
代算的私信、《独立宣言》原文），让学生用证据分析。好的提问不会只问"Banneker 对不对"，而是问一个能"用材料论证两边"
的问题。

可能的提问角度：
- "'用对方自己的原则逼他兑现'这种抗争打法，比直接对抗强在哪、弱在哪？用 Banneker-Jefferson 通信论证。"
- "Jefferson 的回信是'真诚的尴尬'还是'礼貌的回避'？材料支持哪种读法？"
- 进阶：后世谁还用过同一招？（Frederick Douglass、Martin Luther King 都用《独立宣言》逼国家兑现承诺。）`,
      hintEn: `Hint: a DBQ usually gives students primary sources (Banneker's letter, Jefferson's reply,
Jefferson's private letter doubting the calculations, the Declaration itself) and asks them to argue from
evidence. A good prompt doesn't just ask "was Banneker right"; it asks something you can "argue both sides
of with the documents."

Possible angles:
- "What are the strengths and weaknesses of the 'force them to honor their own principle' strategy versus
  direct confrontation? Argue using the Banneker-Jefferson correspondence."
- "Was Jefferson's reply 'sincere discomfort' or 'polite evasion'? Which reading do the documents support?"
- Going deeper: who else used this same move? (Frederick Douglass and Martin Luther King both used the
  Declaration to force the nation to honor its promises.)`,
      conceptsActivated: ['banneker-letter-equality', 'founding-contradictions'],
    },
    {
      id: 'q3',
      cn: `1790 年代，新政府的好处先到了离钱最近的人手里：东部商人和债主从承债、银行里得利；
而边疆酒农被消费税掏空口袋、被 13,000 大军镇压，奴隶和自由黑人则被整个"人人生而平等"的体系排在外面。

Hamilton 自己承认，那 13,000 大军真正的目的不是抓人，是"演给有钱债主看：这个政府收得上税、还得起债"。
那么——威士忌暴动里，政府"立规矩、让所有人守法"是对的，但"专挑最弱的一群人来立威"可能是不公的。
这两件事能同时成立吗？`,
      en: `In the 1790s, the new government's benefits reached the people nearest the money first: eastern
merchants and creditors gained from assumption and the bank; while frontier distillers were emptied by
the excise tax and put down by 13,000 troops, and the enslaved and free Black people were left outside
the whole "all men are created equal" system.

Hamilton himself admitted the real aim of the 13,000 troops wasn't to arrest people, but to "perform for
wealthy creditors: this government can collect taxes and repay debt." So — in the Whiskey Rebellion, the
government "setting a rule and making everyone obey the law" was right, but "picking the weakest group to
make a show of force on" may have been unjust. Can both be true at once?`,
      hintCn: `提示：这正是 AP 训练的"hold the contradiction"（同时持有矛盾）。两边都用证据想一遍——
(1) 站政府这边：一个新国家连税都收不上、谁不满就抄家伙，几年就散了；1794 这一下立住了"联邦法律所有人都得守"，
没有这条就没有能维系两百年的美国。(2) 站酒农这边：政府没去碰东边钻空子的有钱人，专挑没现金、没门路、住山那头的
穷农民开刀，用大军替富人立威——说着"人人平等"的国家，第一次对自己人动武，动的就是最够不着权力的那群人。

进阶：今天你身边有没有这样一套系统——它高效、让一个地方强大，但代价总是先压到最没声音、最够不着权力的人身上？
你能叫出它的名字吗？如果你站在被压的那群人里，你会怎么做？`,
      hintEn: `Hint: this is exactly the AP skill of "holding the contradiction." Think both sides with
evidence — (1) for the government: a new nation that can't even collect a tax, where anyone displeased
grabs a weapon, falls apart in a few years; 1794 established that "federal law, everyone must obey,"
without which there'd be no America to hold together for two centuries. (2) for the distiller: the
government never touched the wealthy easterners working loopholes; it picked precisely the poor farmers
with no cash, no connections, on the far side of the mountains, using an army to make a show of force for
the rich — a nation saying "all men are equal" used force on its own people for the first time, on the
group farthest from power.

Going deeper: is there a system around you today — efficient, lifting one place into strength, but whose
cost always presses first onto the people with the least voice and the least reach to power? Can you name
it? If you stood among the people pressed, what would you do?`,
      conceptsActivated: ['whiskey-rebellion-excise', 'founding-contradictions', 'report-public-credit-assumption'],
    },
  ],
};

export default notebook;
