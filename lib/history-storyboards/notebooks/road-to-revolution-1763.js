// ─── 同伴笔记本架构 v1 · The Road to Revolution 1763 ─────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 11 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Grenville 财政官 / John Adams 调停者 / 俄亥俄河谷原住民青年三条线）
//   - notebook 提供考点闭环（升级螺旋因果链 / 无代表不纳税 / 各税法 / 宣言线 /
//     惨案与宣传素养 / 启蒙哲学根基 / 被排除方分析 — 补完 APUSH Period 3 + CA HSS-8.1 课纲）
//
// 课纲对齐：
//   - APUSH Period 3 (1754-1800)：Topic 3.2（Seven Years' War）/ 3.3（Taxation without
//     Representation）/ 3.4（Philosophical Foundations）
//   - California HSS Grade 8.1（美国独立的主要事件与思想根源）
//
// 事实地基：对账 road-to-revolution-1763-factledger.md（27 claim 全 verified）
//   - 国债数字统一"约 7500 万→约 1.33 亿英镑（几乎翻倍）"（账本 #3）
//   - 驻军"约一万人 / 年约 20 万英镑"（账本 #4）
//   - 倾茶 342 箱（账本 #20，标准教学数字）/ 惨案 5 死含 Crispus Attucks（账本 #15）
//   - John Adams 辩护：6 无罪 / 2 过失杀人（账本 #17）
//   - Paul Revere 版画明确标注为宣传品、非中立记录（账本 #24）
//
// schemaVersion: 1 · notebookVersion: road-to-revolution-1763-v1

export var notebook = {
  topicId: 'road-to-revolution-1763',
  topicNameCn: '通往独立之路 1763',
  topicNameEn: 'The Road to Revolution 1763',
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
    cn: `今天老师说我们要学"通往独立之路"——1763 到 1774 年，美国革命爆发**之前**那十年。
她说这是 APUSH Period 3 因果链考点最密集的一段，州考（CA HSS 8.1）也年年考。

她提醒我们一句话："别从 1776 独立宣言讲起。真正要懂的，是为什么 1763 年还在为
'我们是英国人、我们赢了'放烟花的人，十一年后会坐到一张商量怎么对抗英国的桌子前。"

她给了一张纸，上面写着这些名字：

George Grenville（格伦维尔）、John Adams（亚当斯）、
Pontiac（庞蒂亚克）、Samuel Adams（萨缪尔·亚当斯）

还有一串词：French & Indian War（法印战争）、Proclamation Line of 1763（1763 宣言线）、
Sugar / Stamp / Townshend Acts（糖税 / 印花税 / 汤森法）、
no taxation without representation（无代表不纳税）、Sons of Liberty（自由之子）、
Boston Massacre（波士顿惨案）、Boston Tea Party（波士顿倾茶）、
Intolerable Acts（不可容忍法）、First Continental Congress（第一次大陆会议）。

我先记下来，等下读三个故事——Grenville（伦敦那个想把账平掉的财政官）、
John Adams（替开枪英军辩护、夹在自由与法治之间的律师）、
俄亥俄河谷那个看着自己土地被两个帝国瓜分的原住民青年——读完再回来对照这张单子。

老师说了一句我抄在笔记本第一页："这场革命不是一道税点着的，是'征税→抗议→镇压→
再征税'这台一旦转起来就停不下来的机器，一步步推出来的。读它，要会画那条链。"`,
    en: `Today my teacher said we're learning "The Road to Revolution" — the decade from 1763
to 1774, **before** the American Revolution broke out. She said it's the densest stretch of
cause-and-effect on the APUSH Period 3 exam, and the state test (CA HSS 8.1) asks it every year.

She gave us one warning: "Don't start from the 1776 Declaration of Independence. What you
really have to understand is why people who in 1763 were setting off fireworks for 'we are
British, we won' would, eleven years later, sit at a table to plan how to resist Britain."

She handed out a sheet with these names:

George Grenville, John Adams, Pontiac, Samuel Adams

Plus a string of terms: French & Indian War, Proclamation Line of 1763,
Sugar / Stamp / Townshend Acts, no taxation without representation, Sons of Liberty,
Boston Massacre, Boston Tea Party, Intolerable Acts, First Continental Congress.

Let me write these down. After I read the three stories — Grenville (the finance official
in London who just wanted to balance the books), John Adams (the lawyer who defended the
British soldiers who fired and was caught between liberty and the rule of law), and the
young Native person of the Ohio Country who watched two empires carve up his land — I'll
come back and check this list.

Teacher said one line I copied onto the first page of my notebook: "This revolution wasn't
lit by a single tax. It was pushed out, step by step, by a machine that, once turning,
couldn't be stopped — tax, then protest, then crackdown, then tax again. To read it, you
have to be able to draw that chain."`,
    keyTerms: [
      { cn: '法印战争（七年战争北美战场）', en: 'French & Indian War (Seven Years\' War in N. America)' },
      { cn: '1763 巴黎和约', en: 'Treaty of Paris (1763)' },
      { cn: '有益的忽视', en: 'salutary neglect' },
      { cn: '庞蒂亚克起义', en: "Pontiac's War" },
      { cn: '1763 宣言线', en: 'Proclamation Line of 1763' },
      { cn: '糖税 / 印花税 / 驻军法', en: 'Sugar Act / Stamp Act / Quartering Act' },
      { cn: '无代表不纳税', en: 'no taxation without representation' },
      { cn: '虚拟代表 vs 实际代表', en: 'virtual vs actual representation' },
      { cn: '自由之子', en: 'Sons of Liberty' },
      { cn: '印花税大会', en: 'Stamp Act Congress' },
      { cn: '宣告法', en: 'Declaratory Act' },
      { cn: '汤森法', en: 'Townshend Acts' },
      { cn: '波士顿惨案', en: 'Boston Massacre' },
      { cn: '茶税法 / 波士顿倾茶', en: 'Tea Act / Boston Tea Party' },
      { cn: '不可容忍法 / 强制法令', en: 'Intolerable Acts / Coercive Acts' },
      { cn: '第一次大陆会议', en: 'First Continental Congress' },
      { cn: '通信委员会', en: 'Committees of Correspondence' },
      { cn: '社会契约 / 被统治者的同意', en: 'social contract / consent of the governed' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '乔治·格伦维尔',
        nameEn: 'George Grenville',
        ipa: '/dʒɔːrdʒ ˈɡrɛnvɪl/',
        roleCn: '1763 年起的英国首相兼财政大臣，推糖税与印花税；手握合理账单却误读殖民者情绪的 actor',
        roleEn: 'British Prime Minister and chief finance minister from 1763; pushed the Sugar and Stamp Acts; the actor holding a reasonable bill who misread the colonists',
        mustKnow: true,
        audioKey: 'george-grenville',
      },
      {
        nameCn: '约翰·亚当斯',
        nameEn: 'John Adams',
        ipa: '/dʒɒn ˈædəms/',
        roleCn: '波士顿律师，反苛政却替开枪英军辩护、夹在"自由"与"法治"之间的 lonely-mediator',
        roleEn: 'Boston lawyer who opposed tyranny yet defended the soldiers who fired; the lonely-mediator caught between "liberty" and "the rule of law"',
        mustKnow: true,
        audioKey: 'john-adams',
      },
      {
        nameCn: '庞蒂亚克',
        nameEn: 'Pontiac',
        ipa: '/ˈpɒntiæk/',
        roleCn: 'Ottawa 领袖，1763 年联合俄亥俄河谷-五大湖多民族反英起义的核心',
        roleEn: 'Ottawa leader at the heart of the 1763 multi-nation uprising against Britain in the Ohio Country and Great Lakes',
        mustKnow: true,
        audioKey: 'pontiac',
      },
      {
        nameCn: '萨缪尔·亚当斯',
        nameEn: 'Samuel Adams',
        ipa: '/ˈsæmjuəl ˈædəms/',
        roleCn: '波士顿激进派，自由之子与街头抗议动员的关键组织者（John Adams 的堂兄）',
        roleEn: 'Boston radical, key organizer of the Sons of Liberty and street protests (John Adams\'s cousin)',
        mustKnow: true,
        audioKey: 'samuel-adams',
      },
      {
        nameCn: '保罗·里维尔',
        nameEn: 'Paul Revere',
        ipa: '/pɔːl rɪˈvɪər/',
        roleCn: '银匠，刻了"波士顿惨案"宣传版画——史上最早最有力的政治宣传画之一，非中立记录',
        roleEn: 'Silversmith who engraved the "Boston Massacre" propaganda print — one of the earliest, most powerful political prints, not a neutral record',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '克里斯普斯·阿塔克斯',
        nameEn: 'Crispus Attucks',
        ipa: '/ˈkrɪspəs ˈætəks/',
        roleCn: '非裔/原住民混血码头工人，波士顿惨案 5 名死者之一',
        roleEn: 'Dockworker of African and Native descent, one of the five killed in the Boston Massacre',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '查尔斯·汤森',
        nameEn: 'Charles Townshend',
        ipa: '/tʃɑːrlz ˈtaʊnzənd/',
        roleCn: '英国财政大臣，1767 年推出汤森法，换名目向玻璃、铅、纸、油漆、茶征税',
        roleEn: 'British finance minister who introduced the 1767 Townshend Acts, taxing glass, lead, paper, paint, and tea under a new name',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '尼奥林',
        nameEn: 'Neolin',
        ipa: '/ˈniːoʊlɪn/',
        roleCn: 'Delaware（Lenape）先知，布道唤起原住民团结、回归祖先之路，激励了庞蒂亚克起义',
        roleEn: 'Delaware (Lenape) prophet whose preaching called for Native unity and a return to ancestral ways, inspiring Pontiac\'s War',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'french-and-indian-war-debt',
      termCn: '法印战争与战后债务',
      termEn: 'French & Indian War and the Postwar Debt',
      standardRef: ['APUSH Topic 3.2 (Seven Years\' War)', 'CA HSS 8.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'grenville-actor',
        nodeIds: ['rev-grenville-n2', 'rev-grenville-n3'],
      },
      xiaoweiNote: {
        cn: `这个三个视角都讲过，但 Grenville 那一遍第 2 节讲得最清楚——
整条因果链就是从这里起步的。

1754-1763 年，英国和法国为争北美（尤其西部那片地）打了一场大仗，
殖民者叫它 **French & Indian War（法印战争）**，因为对手是法国人 + 站法国一边的原住民。
它是全球性 **Seven Years' War（七年战争）** 的北美战场。
**1763 年 2 月 10 日 Treaty of Paris（巴黎和约）**：英国赢，法国基本退出北美大陆。

我把战后那本账背成两个数字：
**国债约从 7500 万 → 约 1.33 亿英镑（几乎翻倍）；新得的西部要养约一万驻军、年约 20 万英镑。**

考点关键句：胜利反而留下"一座还不完的债山 + 一笔停不下来的军费"——
这是后面所有征税的**起点**。AP 爱考"战争如何制造了战后的财政危机"。`,
        en: `All three lenses touch this, but Grenville's Lens Node 2 is clearest — the whole
cause-and-effect chain starts here.

From 1754 to 1763, Britain and France fought a great war over North America (especially the
western lands). The colonists called it the **French & Indian War**, because the enemies were
the French plus the Native nations on France's side. It was the North American front of the
global **Seven Years' War**. On **February 10, 1763, the Treaty of Paris**: Britain won, and
France left the North American mainland.

I memorize the postwar ledger as two numbers:
**debt rose from about 75 million → about 133 million pounds (nearly doubled); the new western
lands needed about 10,000 troops, costing about 200,000 pounds a year.**

Key exam sentence: victory left "a mountain of debt that can't be repaid + a military cost
that can't be stopped" — this is the **starting point** of every later tax. AP loves asking
"how did the war create the postwar fiscal crisis."`,
      },
    },

    {
      id: 'salutary-neglect-to-tightening',
      termCn: '从"有益的忽视"到伦敦伸手',
      termEn: 'From Salutary Neglect to London Reaching In',
      standardRef: ['APUSH Topic 3.3 (Taxation w/o Representation)', 'CA HSS 8.1', 'AP Continuity & Change'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'grenville-actor',
        nodeIds: ['rev-grenville-n2'],
      },
      xiaoweiNote: {
        cn: `Grenville 第 2 节里专门点了一句"记住，后面要用"的伏笔——就是这个。

1763 年之前，伦敦对北美管得很松，几十年来基本是 **salutary neglect（有益的忽视）**：
殖民地自己收自己的税、管自己的事，习惯了**高度自治**。

我自己的理解锚：英国不是"突然变坏"，是**突然不再放手**了。
战后要还债，伦敦第一次认真地"伸手"进殖民地的口袋——
打破了几十年的默契。殖民者那种"被冒犯"的感觉，一大半来自这个反差：
**以前你不管我，现在凭什么突然来管我、来收我的钱？**

考点关键句（AP Continuity & Change 高频）：变了的是"伦敦从放手到伸手"；
没变的是社会内部对女性、原住民、被奴役者的排除。
答 C&C 题时，这两条要同时点到。`,
        en: `Grenville's Node 2 deliberately plants a "remember this, it matters later" hook —
this is it.

Before 1763, London ruled North America loosely. For decades it was, in effect, **salutary
neglect**: the colonies set and collected their own taxes, ran their own affairs, grown used
to **wide self-rule**.

My own anchor: Britain didn't "suddenly turn bad" — it suddenly **stopped letting go**. To
pay off the war debt, London for the first time seriously "reached in" to colonial pockets,
breaking a decades-old understanding. Much of the colonists' sense of being insulted comes
from that contrast: **you ignored me for decades — now by what right do you suddenly rule me
and take my money?**

Key exam sentence (high-frequency AP Continuity & Change): what changed was "London from
letting go to reaching in"; what stayed the same was the exclusion of women, Native peoples,
and the enslaved inside colonial society. On a C&C question, name both.`,
      },
    },

    {
      id: 'pontiac-war-ohio-country',
      termCn: '庞蒂亚克起义与俄亥俄河谷',
      termEn: "Pontiac's War and the Ohio Country",
      standardRef: ['APUSH Topic 3.2', 'CA HSS 8.1', 'AP DBQ (Native agency)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'ohio-valley-native-receiving-end',
        nodeIds: ['rev-ohio-n4', 'rev-ohio-n5'],
      },
      xiaoweiNote: {
        cn: `这是默认那一遍（俄亥俄河谷原住民青年）第 4、5 节的核心，
也是标准叙事最容易漏掉的一块——但 AP 现在很爱考。

背景：法国一走，原住民失去了一个能制衡英国的**盟友**。
英军指挥官 **Amherst（阿默斯特）** 削减礼物、抬高物价、把原住民当被征服者。
一个 Delaware 先知 **Neolin（尼奥林）** 布道，号召各民族团结、回到祖先的路。
**1763 年春**，以 Ottawa 领袖 **Pontiac（庞蒂亚克）** 为代表，
俄亥俄河谷到五大湖一带多个民族第一次大规模联合，攻下大批英军西部要塞——
这就是 **Pontiac's War（庞蒂亚克起义）**。

考点关键句：法印战争争的那片 **Ohio Country（俄亥俄河谷）** 的真正主人是原住民；
他们不是被动的旁观者，而是**有能动性的第三方**。
庞蒂亚克起义直接逼出了 1763 宣言线（下一张卡）。
AP DBQ 现在常考"原住民能动性（Native agency）"，这条是必备证据。`,
        en: `This is the core of Nodes 4 and 5 in the default lens (the Ohio Country youth),
the piece the standard story most easily drops — but AP now loves testing it.

Background: once France left, Native nations lost an **ally** who could balance Britain. The
British commander **Amherst** cut gifts, raised prices, and treated Natives as a conquered
people. A Delaware prophet, **Neolin**, preached unity and a return to ancestral ways. In the
**spring of 1763**, led by the Ottawa leader **Pontiac**, many nations from the Ohio Country
to the Great Lakes united on a great scale for the first time and took British forts in the
west — this is **Pontiac's War**.

Key exam sentence: the true owners of the **Ohio Country** that the French & Indian War was
fought over were Native peoples; they were not passive bystanders but **a third party with
agency**. Pontiac's War directly forced out the Proclamation Line of 1763 (next card). AP DBQs
now often test "Native agency" — this is essential evidence.`,
      },
    },

    {
      id: 'proclamation-line-1763',
      termCn: '1763 宣言线',
      termEn: 'Proclamation Line of 1763',
      standardRef: ['APUSH Topic 3.2', 'CA HSS 8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ohio-valley-native-receiving-end',
        nodeIds: ['rev-ohio-n6', 'rev-grenville-n8'],
      },
      xiaoweiNote: {
        cn: `三个视角都触到它，但原住民青年那一遍第 6 节最戳人。

**1763 年 10 月 7 日**，英王颁布 **Proclamation Line of 1763（1763 宣言线）**：
沿 **Appalachian Mountains（阿巴拉契亚山脉）** 划一条线，
禁止殖民者越线西迁，山以西的土地"保留给原住民各部"。

老师反复纠正一个**误解陷阱**：
误："宣言线是为了欺负殖民者。"
正：它的**初衷是平息原住民（庞蒂亚克起义）、省下西部那笔没完没了的战争开销**。

它的命运很讽刺——**两头都不讨好**：
- 原住民觉得它"迟且假"：处置权凭什么归一个隔洋、从没踏上这片土地的国王？
- 殖民者觉得"我们流血打下来的地，凭什么不让去？"——而且他们照样越界，英国也拦不住。

考点关键句：宣言线是"一张纸，三种读法"的经典例子，也是西部矛盾被点燃的第一步。`,
        en: `All three lenses touch it, but the Ohio youth's Node 6 hits hardest.

On **October 7, 1763**, the King issued the **Proclamation Line of 1763**: a line drawn
along the **Appalachian Mountains**, forbidding colonists to cross westward; the land west of
the line was "reserved for the Native nations."

Teacher kept correcting a **misconception trap**:
Misconception: "The Proclamation Line was meant to bully the colonists."
Correction: its **purpose was to calm the Natives (Pontiac's War) and spare the endless cost
of war in the west.**

Its fate is ironic — **it pleased neither side**:
- Natives found it "late and false": by what right did the power to dispose of the land belong
  to a king across the ocean who never set foot on it?
- Colonists felt "the land we bled to win — why are we barred from it?" — and they crossed it
  anyway, and Britain couldn't stop them.

Key exam sentence: the Proclamation Line is the classic "one sheet of paper, three readings"
case, and the first step in igniting the western conflict.`,
      },
    },

    {
      id: 'taxation-without-representation',
      termCn: '无代表不纳税（虚拟 vs 实际代表）',
      termEn: 'No Taxation Without Representation (Virtual vs Actual)',
      standardRef: ['APUSH Topic 3.3 (Taxation w/o Representation)', 'CA HSS 8.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'grenville-actor',
        nodeIds: ['rev-grenville-n6', 'rev-adams-n2'],
      },
      xiaoweiNote: {
        cn: `Grenville 第 6 节和 John Adams 第 2 节正好从两边讲同一条原则——这是整条链的"宪政内核"。

**no taxation without representation（无代表不纳税）**：
未经被征税者本人或其选出的代表同意，不得对其征税。

老师强调一个最常见的**误解陷阱**：
误："无代表不纳税"就是嫌税太重。
正：**印花税其实不算重**。殖民者抗的是一条**原则**——"谁有权未经我同意就动我的钱"。

两套对"代表"的理解对撞（必背对比）：
- 英国：议会代表全帝国每个臣民，叫 **virtual representation（虚拟代表）**。
- 殖民者：议会里没有一个我们选出来的人，那就不算代表，要 **actual representation（实际代表）**。

考点关键句：这从来不只是钱多钱少，是"两套宪政观对撞"。
这也解释了为什么后来茶税那一点点钱也能引爆倾茶——抗的始终是那个"权"字。`,
        en: `Grenville's Node 6 and John Adams's Node 2 tell the same principle from two sides —
this is the "constitutional core" of the whole chain.

**No taxation without representation**: no one may be taxed without the consent of the taxed
or of representatives they elected.

Teacher stressed the most common **misconception trap**:
Misconception: "No taxation without representation" means the taxes were too high.
Correction: **the Stamp Act was actually light.** What colonists resisted was a **principle** —
"who has the right to touch my money without my consent."

Two clashing ideas of "representation" (must-memorize compare):
- Britain: Parliament represents every subject of the whole empire — **virtual representation**.
- Colonists: if no one we elected sits in Parliament, that's no representation — they wanted
  **actual representation**.

Key exam sentence: this was never about the amount of money but a "clash of two constitutional
views." It also explains why even the tiny tea tax later triggered the Tea Party — what was
resisted was always the question of "the right."`,
      },
    },

    {
      id: 'sugar-stamp-quartering-sons-of-liberty',
      termCn: '糖税·印花税·驻军法与自由之子',
      termEn: 'Sugar, Stamp, Quartering Acts & the Sons of Liberty',
      standardRef: ['APUSH Topic 3.3', 'CA HSS 8.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'grenville-actor',
        nodeIds: ['rev-grenville-n4', 'rev-grenville-n5', 'rev-grenville-n6'],
      },
      xiaoweiNote: {
        cn: `Grenville 第 4、5、6 节连着把头几道税和第一次抵抗讲完了。我把它排成一条小链：

1. **1764 Sugar Act（糖税）**：加严对进口糖蜜的征税和缉私——
   英国第一次明确"为了向殖民地要钱"而立的税。
2. **1765 Stamp Act（印花税）**：打在报纸、文件、契约、扑克牌等几乎每张印刷品上。
   它的致命之处：**偏偏得罪了律师、商人、报人、印刷工**——
   在一个识字率和报纸普及率极高的社会里，等于拍醒了最会把怒火印成传单、传遍十三殖民地的人。
3. **1765 Quartering Act（驻军法）**：要殖民地出钱出房养英军。
4. 反抗：**Sons of Liberty（自由之子）** 成立，**1765 年 8 月 14 日** 在波士顿吊起税吏草人示众。

考点关键句：印花税为什么比糖税炸得厉害？因为它**得罪的人**会写、会串联、会印。
一个政策最危险的地方，常常是它"得罪了谁"。`,
        en: `Grenville's Nodes 4, 5, and 6 run through the first taxes and the first resistance.
I line them up as a mini-chain:

1. **1764 Sugar Act**: tightened duties and anti-smuggling on imported molasses — the first
   time Britain plainly wrote a tax "to raise money from the colonies."
2. **1765 Stamp Act**: fell on newspapers, documents, contracts, playing cards — nearly every
   printed item. Its fatal flaw: **it angered the lawyers, merchants, printers, and writers** —
   in a society of unusually high literacy and many newspapers, that woke exactly the people
   who could turn anger into pamphlets and spread it across all thirteen colonies.
3. **1765 Quartering Act**: made the colonies pay and house British troops.
4. Resistance: the **Sons of Liberty** formed and, on **August 14, 1765**, hung an effigy of a
   tax man in Boston for all to see.

Key exam sentence: why did the Stamp Act explode harder than the Sugar Act? Because the people
it **angered** could write, organize, and print. A policy's most dangerous feature is often
"whom it offended."`,
      },
    },

    {
      id: 'stamp-act-congress-declaratory-act',
      termCn: '印花税大会与宣告法',
      termEn: 'Stamp Act Congress & the Declaratory Act',
      standardRef: ['APUSH Topic 3.3', 'CA HSS 8.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'grenville-actor',
        nodeIds: ['rev-grenville-n6', 'rev-grenville-n7'],
      },
      xiaoweiNote: {
        cn: `Grenville 第 6、7 节讲第一次跨殖民地联合，还有一个最容易被忽略、却最关键的转折。

**1765 年 10 月**：九个殖民地的代表第一次聚到纽约，开 **Stamp Act Congress（印花税大会）**——
头一回放下彼此的成见、跨殖民地联合抗议，喊出"无代表，不纳税"。
加上**抵制英货**（直接打英国本土商人的账本），逼得议会让步。

**1766 年**：英国撤销印花税。表面看殖民者赢了。
**但同一天**，议会通过 **Declaratory Act（宣告法）**，白纸黑字宣告：
英国议会对殖民地"**在一切情况下**（in all cases whatsoever）"都有立法之权。

老师说这是整段最重要的"暗扣"：
**钱，他们暂时不要了；可"权"，一寸都不让。**
火没被灭，只被压住——这解释了为什么后来一点点茶税也能再次引爆。

考点关键句：撤印花税（让步）+ 宣告法（不认输）= 同一天的两手，是矛盾被推迟、而非解决的证据。`,
        en: `Grenville's Nodes 6 and 7 cover the first cross-colonial union plus a turning point
that's easy to miss but crucial.

**October 1765**: delegates from nine colonies gathered in New York for the first time and held
the **Stamp Act Congress** — setting aside their grudges to protest jointly across colonies,
crying "no taxation without representation." Combined with a **boycott of British goods** (which
struck the ledgers of merchants in Britain itself), it forced Parliament to give way.

**1766**: Britain repealed the Stamp Act. On the surface, the colonists won.
**But the same day**, Parliament passed the **Declaratory Act**, stating in black and white that
Parliament had the power to legislate for the colonies "**in all cases whatsoever**."

Teacher said this is the most important hidden hook of the whole stretch:
**The money, they let go of for now; but the right, they would not yield an inch.**
The fire wasn't put out, only pressed down — which explains why even a tiny tea tax could
re-ignite it later.

Key exam sentence: repeal of the Stamp Act (concession) + Declaratory Act (no surrender) = the
two-handed move of one day, evidence the conflict was postponed, not resolved.`,
      },
    },

    {
      id: 'townshend-boston-massacre-propaganda',
      termCn: '汤森法·波士顿惨案与"宣传素养"',
      termEn: 'Townshend Acts, the Boston Massacre & Media Literacy',
      standardRef: ['APUSH Topic 3.3', 'CA HSS 8.1', 'AP sourcing (point of view)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'john-adams-mediator',
        nodeIds: ['rev-adams-n4', 'rev-adams-n5', 'rev-adams-n6'],
      },
      xiaoweiNote: {
        cn: `John Adams 那一遍第 4、5、6 节讲完了这一段，还教了一个超出本课的读史技能。

链条续上：**1767 Townshend Acts（汤森法）** 换名目，打在玻璃、铅、纸、油漆、茶上。
殖民地再抵制英货。为镇住越来越不安分的波士顿，英国把军队直接调进了城，士兵和市民日日街头摩擦。

**1770 年 3 月 5 日** 飘雪的夜里，海关大楼前，人群用雪球、冰块、棍棒逼近哨兵，
士兵在混乱和恐惧中开枪，**5 名殖民者死亡（含 Crispus Attucks）**——这就是 **Boston Massacre（波士顿惨案）**。
John Adams 替开枪士兵辩护，结果 **6 人无罪、2 人过失杀人轻判**（陪审团认证据不认情绪）。

老师反复敲的**读史技能（AP sourcing 必考）**：
**Paul Revere（保罗·里维尔）的"波士顿惨案"版画**画成"英军成排冷血屠杀手无寸铁的平民"——
但它是**宣传品，不是中立的现场记录**。真实更乱：人群先攻击、士兵恐惧开枪。
要分清"**发生了什么**"和"**谁在怎样讲它**"——连"惨案"这个名字本身，就是一场宣传胜利。`,
        en: `John Adams's Nodes 4, 5, and 6 finish this stretch and teach a reading skill beyond
the lesson.

The chain continues: the **1767 Townshend Acts** taxed glass, lead, paper, paint, and tea under
a new name. The colonies boycotted again. To hold down an ever more restless Boston, Britain
marched troops into the city; soldiers and townspeople ground against each other daily.

On the snowy night of **March 5, 1770**, outside the customs house, a crowd pressed at the
sentries with snowballs, ice, and clubs; the soldiers fired in chaos and fear, and **five
colonists died (including Crispus Attucks)** — this is the **Boston Massacre**. John Adams
defended the soldiers; the result: **six acquitted, two convicted of manslaughter and lightly
punished** (the jury answered to evidence, not emotion).

The reading skill teacher kept hammering (a must for AP sourcing):
**Paul Revere's "Boston Massacre" engraving** showed "British soldiers coldly lined up,
massacring unarmed civilians" — but it's **propaganda, not a neutral record**. The reality was
messier: the crowd attacked first; soldiers fired in fear. Separate "**what happened**" from
"**who is telling it, and how**" — even the name "massacre" was itself a propaganda victory.`,
      },
    },

    {
      id: 'tea-act-tea-party-intolerable-acts',
      termCn: '茶税法·波士顿倾茶·不可容忍法',
      termEn: 'Tea Act, Boston Tea Party & the Intolerable Acts',
      standardRef: ['APUSH Topic 3.3', 'CA HSS 8.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'grenville-actor',
        nodeIds: ['rev-grenville-n9'],
      },
      xiaoweiNote: {
        cn: `Grenville 第 9 节（zoom-out 机器视角）把链条收到尾声，三个事件一气呵成。

1. **1770** 撤汤森法大部，**偏偏留一项茶税**——不为钱，为宣示"议会有权征税"这个**原则**。
2. **1773 年 12 月 16 日** 夜：一群人化装成 **Mohawk** 的模样，登上三条茶船，
   把 **342 箱茶**倒进波士顿港——这就是 **Boston Tea Party（波士顿倾茶）**。
   （倒的不是茶，是英国死守的那个"原则"。）
3. **1774**：英国震怒，通过一连串报复性法令，殖民者叫它 **Intolerable Acts（不可容忍法）**：
   **关闭波士顿港、改组马萨诸塞自治政府、扩大驻军权**。

老师标的**误解陷阱**：
误："倾茶是因为茶太贵 / 殖民者想省钱。"
正：茶税法其实让茶**更便宜**了——殖民者一眼看穿这是用便宜茶诱你**默认**英国有权征税。抗的还是"权"。

考点关键句：不可容忍法本想杀鸡儆猴、孤立马萨诸塞，**结果适得其反**（见下一张卡）。`,
        en: `Grenville's Node 9 (the zoomed-out "machine" view) brings the chain to its close,
three events in one breath.

1. **1770**: most Townshend taxes repealed, but **one tea tax kept** — not for money, but to
   assert the **principle** that "Parliament has the right to tax."
2. Night of **December 16, 1773**: a group disguised as **Mohawks** boarded three tea ships and
   dumped **342 chests of tea** into Boston Harbor — the **Boston Tea Party**. (What they poured
   out wasn't the tea, but the "principle" Britain clung to.)
3. **1774**: Britain, furious, passed a string of punitive laws the colonists called the
   **Intolerable Acts**: **closing Boston's port, restructuring the Massachusetts government,
   and expanding the housing of troops.**

Teacher's **misconception trap**:
Misconception: "The Tea Party was because tea was too expensive / colonists wanted to save money."
Correction: the Tea Act actually made tea **cheaper** — colonists saw through it as cheap tea
to make them **accept** that Britain had the right to tax. They resisted the "right" again.

Key exam sentence: the Intolerable Acts meant to make an example of and isolate Massachusetts,
but **backfired** (see the next card).`,
      },
    },

    {
      id: 'first-continental-congress-escalation-spiral',
      termCn: '第一次大陆会议与"升级螺旋"',
      termEn: 'First Continental Congress & the Escalation Spiral',
      standardRef: ['APUSH Topic 3.3', 'CA HSS 8.1', 'AP DBQ (causation)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'grenville-actor',
        nodeIds: ['rev-grenville-n8', 'rev-grenville-n9'],
      },
      xiaoweiNote: {
        cn: `这是整门课最该会"画"的一张卡——Grenville 第 8、9 节把整条因果链一口气串起来了。

**1774 年 9 月**：除佐治亚外，**12 个殖民地**的代表齐聚费城，开 **First Continental Congress
（第一次大陆会议）**，统一抵制英货、协调立场。十年的怒火第一次有了一个共同的声音。
不可容忍法本想孤立马萨诸塞，结果把原本各管各、还常吵架的殖民地**逼成了一体**。

我把整条 **escalation spiral（升级螺旋）** 背成一条链（AP causation 必考）：
**债务 → 糖税/印花税 → 抗议+抵制 → 撤印花税但发宣告法 → 汤森法 → 驻军+惨案 → 撤税留茶税 →
倾茶 → 不可容忍法 → 第一次大陆会议。**

考点关键句：把革命推出来的，不是任何**一道**单独的税，而是这台"征税→抗议→镇压→再征税"
**一旦转起来就停不下来的机器**。AP 阅卷奖励能讲"机制"而非只罗列事件的答案。

**本课 scope 到此为止**：1775 Lexington 第一枪、1776 独立宣言、八年战争都在另一课
（american-revolution-1776），这里只交棒、不展开。`,
        en: `This is the card you most need to be able to "draw" in the whole course — Grenville's
Nodes 8 and 9 string the entire chain together in one breath.

**September 1774**: all but Georgia — **twelve colonies** — sent delegates to Philadelphia for
the **First Continental Congress**, to boycott British goods together and coordinate. A decade
of anger finally had one shared voice. The Intolerable Acts meant to isolate Massachusetts but
instead **forced the once-separate, often-quarreling colonies into one body.**

I memorize the whole **escalation spiral** as a chain (a must for AP causation):
**debt → Sugar/Stamp Acts → protest + boycott → repeal Stamp Act but pass Declaratory Act →
Townshend Acts → troops + Massacre → repeal taxes but keep tea tax → Tea Party → Intolerable
Acts → First Continental Congress.**

Key exam sentence: what pushed out the revolution was not any **single** tax, but this machine
of "tax → protest → crackdown → tax again" that, **once turning, couldn't be stopped.** AP
scoring rewards answers that explain a "mechanism" rather than just listing events.

**This lesson's scope ends here**: the 1775 first shot at Lexington, the 1776 Declaration, and
the eight-year war belong to another lesson (american-revolution-1776) — handed off here, not
unpacked.`,
      },
    },

    {
      id: 'philosophical-foundations-enlightenment',
      termCn: '哲学根基：启蒙、洛克与"被统治者的同意"',
      termEn: 'Philosophical Foundations: Enlightenment, Locke & Consent',
      standardRef: ['APUSH Topic 3.4 (Philosophical Foundations)', 'CA HSS 8.1', 'AP LEQ'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'john-adams-mediator', nodeId: 'rev-adams-n2', context: 'John Adams 解释"无代表不纳税"背后的启蒙思想根：Locke 的社会契约与天赋权利' },
        ],
      },
      standaloneText: {
        cn: `**Philosophical Foundations（哲学根基）** 是 APUSH Topic 3.4 的专门考点——
故事里 John Adams 第 2 节点了一下，但没系统展开，这里单独掌握，LEQ 可以直接引用。

殖民者喊"无代表不纳税"，不是凭空发明的口号，它有一条很深的**思想根**：
**Enlightenment（启蒙运动）** 里英国思想家 **John Locke（约翰·洛克）** 的两个核心概念——

1. **social contract（社会契约）**：政府不是天上掉下来的，是人们为了保护自己的权利"约定"出来的。
   政府的正当权力，来自 **consent of the governed（被统治者的同意）**。
2. **natural rights（天赋权利）**：每个人生来就有 **life, liberty, property（生命、自由、财产）**，
   任何政府都不能随便拿走。

把这两条接到本课：
- "未经我同意就征税" = 违反了"被统治者的同意"。
- "动我口袋里的钱" = 侵犯了"财产"这项天赋权利。
所以殖民者抗的不只是钱，是**违背了启蒙政治哲学**——这正是"原则之争"的思想来源。

（你跑过启蒙运动那段历史，会认得 Locke 这个名字；后面 1776 独立宣言里
"unalienable rights（不可剥夺的权利）""consent of the governed"几乎是 Locke 的直接回声。）

考点关键句：洛克的"社会契约 + 天赋权利 + 被统治者的同意"，是"无代表不纳税"和整场革命的**哲学根基**；
LEQ 写"革命的思想起源"时，这是必引的一条。`,
        en: `**Philosophical Foundations** is a dedicated APUSH Topic 3.4 point — John Adams's Node 2
touches it, but doesn't lay it out systematically, so master it here; you can cite it directly
in an LEQ.

When colonists cried "no taxation without representation," it wasn't an invented slogan; it had
a deep **intellectual root**: two core ideas of the English **Enlightenment** thinker **John Locke** —

1. **Social contract**: government isn't handed down from the sky; people "agree" to it to
   protect their own rights. A government's rightful power comes from the **consent of the governed.**
2. **Natural rights**: everyone is born with **life, liberty, and property**, which no government
   may simply take away.

Connecting these to this lesson:
- "Taxing me without my consent" = violates "consent of the governed."
- "Touching the money in my pocket" = violates the natural right of "property."
So what colonists resisted wasn't only the money but **a breach of Enlightenment political
philosophy** — that's the intellectual source of the "fight over principle."

(You'll recognize Locke's name if you ran the Enlightenment topic; later, in the 1776 Declaration,
"unalienable rights" and "consent of the governed" are almost a direct echo of Locke.)

Key exam sentence: Locke's "social contract + natural rights + consent of the governed" is the
**philosophical foundation** of "no taxation without representation" and of the whole revolution;
it's a must-cite when an LEQ asks for "the intellectual origins of the Revolution."`,
      },
      xiaoweiNote: {
        cn: `老师说 APUSH Topic 3.4 专门考"思想根基"，最爱问"启蒙思想怎么变成了革命口号"。
我的记忆链：**Locke（社会契约 + 天赋权利 + 被统治者同意）→ 无代表不纳税 → 1776 独立宣言**。
三步一条线，LEQ 直接拿来当骨架。

别混：Locke 管"为什么人民有权反抗"（思想根）；
Montesquieu（孟德斯鸠）管"政府怎么三权分立"（制度设计，那是 1787 制宪那一课的事）。`,
        en: `Teacher said APUSH Topic 3.4 specifically tests "intellectual foundations," most often
asking "how Enlightenment thought became a revolutionary slogan." My memory chain:
**Locke (social contract + natural rights + consent of the governed) → no taxation without
representation → the 1776 Declaration.** Three steps, one line — use it as an LEQ skeleton.

Don't mix up: Locke handles "why the people have the right to resist" (the intellectual root);
Montesquieu handles "how government separates powers" (institutional design — that's the 1787
Constitutional Convention lesson).`,
      },
    },

    {
      id: 'who-is-excluded-from-liberty',
      termCn: '"自由"话语里谁被排除',
      termEn: 'Who Is Excluded from the Language of "Liberty"',
      standardRef: ['APUSH Topic 3.3', 'CA HSS 8.1', 'AP DBQ (excluded groups / complexity)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'ohio-valley-native-receiving-end', nodeId: 'rev-ohio-n7', context: '殖民者喊"无代表不纳税"，回头却越线占原住民土地、从没征求原住民同意' },
          { lens: 'john-adams-mediator', nodeId: 'rev-adams-n8', context: 'John Adams 承认喊"自由"的圈子主要是有产白人男性，被奴役者/女性/原住民被排除' },
        ],
      },
      standaloneText: {
        cn: `这是一张"读史的眼睛"卡——故事里原住民青年第 7 节和 John Adams 第 8 节都点到，
但没单独总结。AP DBQ 现在**几乎必考**"谁被算进、谁被排除在'自由'之外"，要会单独答。

标准叙事是"英国 vs 殖民者"两方之争。但一个**完整**的论述，必须能指出这套"自由"话语的**盲区**：
- **原住民**：这场仗争的那片 Ohio Country 是他们的家园；殖民者喊"没人同意就不能动我的钱"，
  回头却越过宣言线、占他们的土地——**从没征求过原住民一个字的同意**。"他们的自由，垫在原住民的不自由上。"
- **被奴役者**：约占 13 殖民地人口五分之一（约 50 万人）。很多喊"无代表不纳税"的人，
  自己就役使着连人身自由都没有的人。
- **无产白人男性 / 女性**：也被排除在完整政治权利之外。

老师给的**高分写法**（这正是 AP 要的 complexity）：
不要二选一说"革命伟大"或"革命虚伪"，而要**同体并持**：
这场以"自由"为名的运动，既播下了"被统治者的同意"这颗后来惠及无数人的种子，
**也**从第一天起就有它算不进去的人。**光明与代价，同体。**

考点关键句：分析任何"自由/权利"话语，先问一句"**谁被算进这个'人人'，谁被排除？**"——
这是 DBQ 拿 complexity 分的固定动作。`,
        en: `This is a "reading eyes" card — both the Ohio youth's Node 7 and John Adams's Node 8 touch
it, but neither sums it up alone. AP DBQs now **almost always** test "who is counted in and who
is excluded from 'liberty'," so be able to answer it on its own.

The standard story is a two-sided fight, "Britain vs the colonists." But a **complete** argument
must name the **blind spots** of this "liberty" talk:
- **Native peoples**: the Ohio Country fought over was their homeland; colonists cried "no one may
  touch my money without consent," yet turned around, crossed the Proclamation Line, and took their
  land — **without ever asking the Natives a single word of consent.** "Their liberty was propped on
  Native unfreedom."
- **The enslaved**: about a fifth of the population of the 13 colonies (roughly 500,000 people). Many
  who cried "no taxation without representation" themselves held people with no personal freedom at all.
- **Propertyless white men / women**: also excluded from full political rights.

Teacher's **high-scoring move** (this is exactly the complexity AP wants):
Don't pick a side ("the Revolution was great" or "the Revolution was hypocritical") — **hold both at
once**: this movement in the name of "liberty" both planted the seed of "consent of the governed"
that later benefited countless people **and**, from the first day, had people it could not count in.
**The light and the cost are one body.**

Key exam sentence: to analyze any "liberty/rights" language, first ask "**who is counted into this
'all,' and who is excluded?**" — that's the fixed move for earning DBQ complexity points.`,
      },
      xiaoweiNote: {
        cn: `老师说这是默认那一遍（俄亥俄河谷原住民青年）一直在逼我看见的东西，
也是 AP DBQ 最近几年最爱考的角度。

记忆口诀：读"自由"先数**四个被排除的人**——
**原住民（土地被占）、被奴役者（约五分之一人口）、无产白人男性、女性**。

进阶（拿 complexity 分）：别说"革命是假的"，要说"**革命同时是真的进步、又有真实的盲区**"，
两件事缠在一起、分不开——这句话本身就是 AP 想要的"复杂性"。`,
        en: `Teacher said this is what the default lens (the Ohio Country youth) keeps forcing me to
see, and the angle AP DBQs have loved most in recent years.

Mnemonic: when you read "liberty," first count the **four excluded groups** —
**Native peoples (land taken), the enslaved (about a fifth of the population), propertyless white
men, and women.**

Going deeper (for complexity points): don't say "the Revolution was fake" — say "**the Revolution
was at once real progress and had real blind spots**," the two tangled and inseparable. That sentence
itself is the "complexity" AP wants.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Grenville 坐在伦敦，手里拿着一本"逻辑上挑不出错"的账单：仗主要是为保卫殖民者打的、
本土纳税人已被压垮、让受益者分摊一部分军费天经地义。可正是这串"合理"的决定，一步步引爆了一场革命。

你觉得一个决定"逻辑上没错"，就一定"明智"吗？"有理"和"明智"，是一回事吗？
用本课里至少两个具体事件支持你的判断。`,
      en: `Grenville sat in London with a bill whose logic seemed flawless: the war was fought mostly
to protect the colonists, taxpayers at home were crushed, so asking the beneficiaries to share part
of the military cost was only natural. Yet that very chain of "reasonable" decisions ignited a revolution.

Do you think a decision that is "logically correct" is necessarily "wise"? Are "being right" and
"being wise" the same thing? Support your judgment with at least two specific events from this lesson.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "有理≠明智"这边：糖税/印花税账面合理，却得罪了最会写、最会串联的人（律师、报人、印刷工）；
  Grenville 看不见三千英里外的情绪——他解决的是数字问题，制造的是情绪问题。
- "他情有可原"这边：债山是真的、军费是真的，任何理性财政官都会想到让受益者分摊。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which
side you pick.
- For "being right ≠ being wise": the Sugar/Stamp Acts looked reasonable on paper but angered exactly
  the people best at writing and organizing (lawyers, printers, writers); Grenville couldn't see the
  feelings three thousand miles away — he solved a numbers problem and manufactured a feelings problem.
- For "he was understandable": the debt was real, the military cost was real, and any rational finance
  official would think of asking beneficiaries to share.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['french-and-indian-war-debt', 'sugar-stamp-quartering-sons-of-liberty', 'taxation-without-representation'],
    },
    {
      id: 'q2',
      cn: `John Adams 反对英国的政策，却替开枪的英军士兵辩护，因为他相信"就算是敌人，也该得到公平审判"。
在一个两边都只剩愤怒、人人急着选边的年代，他顶着全城的仇恨守住了这条线。

如果你是 AP 老师，要出一道题考"在愤怒的年代给敌人公道，是更难的勇气，还是关键时刻拎不清敌我的危险天真"，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `John Adams opposed Britain's policies, yet defended the British soldiers who fired, because he
believed "even an enemy deserves a fair trial." In an age when both sides had nothing left but anger and
everyone rushed to choose a side, he bore the hatred of the whole city to hold that line.

If you were an AP teacher writing a question on "is giving the enemy justice in an angry age a harder
courage, or a dangerous naivety that fails to tell friend from enemy at the crucial moment," how would
you phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以接上 Paul Revere 版画那条线——版画把那夜画成"英军冷血屠杀"，是宣传；John Adams 在法庭上还原"人群先攻击、
士兵恐惧开枪"，是事实。让学生比较"宣传的力量"和"守事实的代价"：为什么后者那么孤独、那么难？
也可以让学生想想 John Adams 自己的盲区（他守的"公道"圈子其实只包括有产白人男性）——
连最守"公正"的人，也有他够不到的角落。`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can connect it to the Paul Revere print: the engraving painted that night as a "cold-blooded British
massacre" — propaganda; John Adams in court reconstructed "the crowd attacked first, soldiers fired in
fear" — the facts. Have students compare "the power of propaganda" with "the cost of holding to facts":
why is the latter so lonely and so hard? You could also have students consider Adams's own blind spot
(the circle of "justice" he guarded really included only propertied white men) — even the most
"impartial" person has corners he can't reach.`,
      conceptsActivated: ['townshend-boston-massacre-propaganda', 'who-is-excluded-from-liberty'],
    },
    {
      id: 'q3',
      cn: `整场"通往独立之路"，标准叙事讲的是"英国 vs 殖民者"两方的争吵——一场关于"自由""权利""无代表不纳税"
的伟大斗争。可他们争的那片西部土地，主人是连一句话发言权都没有的俄亥俄河谷原住民。

当两个帝国都说自己在为"权利"和"正当"而争时，那个被拿来当筹码、却没人问过一句的人，
该在这个故事里站在哪？我们今天回头讲"自由"这两个字，到底算谁的胜利？
用至少两条具体证据支持你的判断。`,
      en: `The whole "Road to Revolution" is told, in the standard version, as a quarrel between two sides —
Britain and the colonists — a great struggle over "liberty," "rights," "no taxation without representation."
But the western land they fought over belonged to the Ohio Country Natives, who had no say at all.

When two empires both claim to fight for "rights" and "what is just," where should the person used as a
bargaining chip, never asked a single word, stand in this story? When we look back and tell the word
"liberty" today, whose victory is it, exactly? Support your judgment with at least two specific pieces
of evidence.`,
      hintCn: `提示：先把"两方叙事"扩成"多方叙事"——加上原住民这个被忽略的第三方。
- "了不起的胜利"这边的证据：洛克的"被统治者的同意""无代表不纳税"后来写进无数国家的政治根基，惠及千千万万人。
- "有盲区的胜利"这边的证据：殖民者高举"同意"，却越过宣言线占原住民土地、从没征求过他们的同意；
  约五分之一人口（被奴役者）被排除在"人人"之外。
高分写法（complexity）：别说"自由是假的"，要说"自由同时是真的进步、又有真实的代价"，两者缠在一起、分不开。`,
      hintEn: `Hint: first expand the "two-sided story" into a "many-sided story" — add the Natives as the
ignored third party.
- Evidence for "a remarkable victory": Locke's "consent of the governed" and "no taxation without
  representation" were later written into the foundations of countless nations, benefiting millions.
- Evidence for "a victory with blind spots": colonists held up "consent" yet crossed the Proclamation
  Line and took Native land without ever asking their consent; about a fifth of the population (the
  enslaved) was excluded from "all."
High-scoring move (complexity): don't say "liberty was fake" — say "liberty was at once real progress and
a real cost," the two tangled and inseparable.`,
      conceptsActivated: ['proclamation-line-1763', 'who-is-excluded-from-liberty', 'philosophical-foundations-enlightenment'],
    },
  ],
};

export default notebook;
