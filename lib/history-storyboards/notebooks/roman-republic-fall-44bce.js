// ─── 同伴笔记本架构 v1 · Roman Republic & Its Fall ─────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（回忆 + 考点提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson 300-500 字)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（julius-caesar / cicero / landless-plebeian 三条线）
//   - notebook 提供考点闭环：
//       · 故事覆盖：共和制衡 / Gracchi / Caesar 跨河 / 平民卖选票 / Cicero / Augustus 帝国诞生
//       · 独立 mini-lesson：Conflict of Orders（平民 vs 贵族）/ Marius-Sulla 军事化 / First Triumvirate
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-1.x（古典国家建构 / 共和制起源）
//   - AP US Government & Politics（国父借鉴罗马共和：Madison / Polybius / Federalist）
//   - California HSS Grade 6.7（古罗马：共和、Gracchi、Caesar、共和崩溃）
//   - 注：AP CED Unit 1-2 框架下作为古典时代国家建构史前根
//
// 事实诚信（古代史 Band C）：
//   - 引语分层：Cicero「Catiline 你还要滥用我们的耐心到几时」= 真·一手引文（In Catilinam I）；
//     「骰子已掷」= 后世史家流传引文（真实性不可确证）；
//     「Et tu, Brute / 还有你吗 Brutus」= 不见于任何古代史料、纯莎士比亚加工 → 主动拒引，不当确证史实
//   - 平民是 composite 合成人物（storyboard 已四处透明标注）
//   - 古代年代用约数（c.509 / 约五百年）
//
// 文化对应硬禁：罗马用真实术语（元老院 Senate / 执政官 consul / 保民官 tribune /
//   独裁官 dictator / 卢比孔河 Rubicon / 格拉古 Gracchi / Augustus / rex），
//   绝不用中国官职概念（丞相 / 皇帝 / 朕 / 圣旨 / 太子）类比罗马
//
// schemaVersion: 1 · notebookVersion: roman-republic-fall-44bce-v1

export var notebook = {
  topicId: 'roman-republic-fall-44bce',
  topicNameCn: '罗马共和国与崩溃',
  topicNameEn: 'The Roman Republic & Its Fall',
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
    cn: `今天老师要我们学罗马共和国——它怎么建起来、又怎么垮掉的（大约公元前 509 到前 27 年）。
她在白板上写了一串名字：

Julius Caesar（凯撒）、Cicero（西塞罗）、格拉古兄弟（Gracchi）、Marius（马略）、
Sulla（苏拉）、Pompey（庞培）、Crassus（克拉苏）、Octavian / Augustus（屋大维 / 奥古斯都）

还有一串词，我先抄下来：consul（执政官）、Senate（元老院）、tribune（保民官）、
checks and balances（制衡）、Conflict of Orders（平民 vs 贵族之争）、
latifundia（奴隶大庄园）、Rubicon（卢比孔河）、dictator（独裁官）、republic / empire（共和 / 帝国）。

老师说："罗马共和不是一个遥远的古代故事。美国的国父就是照着它设计美国的，
他们最怕的，就是出一个'美国的凯撒'。所以你们学的，是后来所有共和国天天提防的那个噩梦。"

她还提醒了一句很重要的话："不要把它简化成'一个坏人毁了一个好制度'。
要问——这个制度是怎么从内部一点点烂掉的？"我把这句写在笔记本第一页。

我先记下来，等下读三个故事——Caesar、Cicero、一个失地的平民——
读完再回来对照这张单子，看我能不能解释这些词。`,
    en: `Today my teacher told us we're learning the Roman Republic — how it was built,
and how it fell (roughly 509 to 27 BCE). She wrote a list of names on the board:

Julius Caesar, Cicero, the Gracchi brothers, Marius, Sulla, Pompey, Crassus,
Octavian / Augustus

Plus a list of terms I'll copy down: consul, Senate, tribune, checks and balances,
the Conflict of Orders (plebeians vs patricians), latifundia (slave-run estates),
Rubicon, dictator, republic / empire.

Teacher said: "The Roman Republic isn't a distant ancient story. America's founders
designed the United States by looking at it, and what they feared most was an
'American Caesar.' So what you're learning is the very nightmare that all later
republics guard against."

She also gave one important warning: "Don't reduce it to 'one bad man destroyed
a good system.' Ask instead — how did this system rot, bit by bit, from within?"
I wrote that on the first page of my notebook.

Let me write these down. After I read the three stories (Caesar, Cicero, and a
landless plebeian), I'll come back and check whether I can explain each one.`,
    keyTerms: [
      { cn: '共和（公共的事）', en: 'res publica / republic' },
      { cn: '执政官（两人·任期一年·互相否决）', en: 'consul' },
      { cn: '元老院', en: 'Senate' },
      { cn: '保民官', en: 'tribune' },
      { cn: '制衡', en: 'checks and balances' },
      { cn: '平民 vs 贵族之争', en: 'Conflict of Orders' },
      { cn: '奴隶大庄园', en: 'latifundia' },
      { cn: '独裁官（紧急职位·原限期半年）', en: 'dictator' },
      { cn: '王（罗马最怕的词）', en: 'rex' },
      { cn: '帝国 / 帝制', en: 'empire' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '尤利乌斯·凯撒',
        nameEn: 'Julius Caesar',
        ipa: '/ˈdʒuːliəs ˈsiːzər/',
        roleCn: '将军 + 政客，跨卢比孔河、终身独裁官，前 44 年被刺，共和的终结推手',
        roleEn: 'General and politician; crossed the Rubicon, dictator for life, assassinated 44 BCE',
        mustKnow: true,
        audioKey: 'julius-caesar',
      },
      {
        nameCn: '西塞罗',
        nameEn: 'Cicero',
        ipa: '/ˈsɪsərəʊ/',
        roleCn: '雄辩家 + 共和派，想用言辞救共和，被处死割舌',
        roleEn: 'Orator and republican; tried to save the Republic with words, executed',
        mustKnow: true,
        audioKey: 'cicero',
      },
      {
        nameCn: '格拉古兄弟',
        nameEn: 'the Gracchi (Tiberius & Gaius)',
        ipa: '/ˈɡrækaɪ/',
        roleCn: '保民官改革者，想把公有土地分给失地平民，先后死于政治暴力',
        roleEn: 'Reformer tribunes; tried to redistribute public land, both killed in political violence',
        mustKnow: true,
        audioKey: 'gracchi',
      },
      {
        nameCn: '屋大维 / 奥古斯都',
        nameEn: 'Octavian / Augustus',
        ipa: '/ɒkˈteɪviən/ /ɔːˈɡʌstəs/',
        roleCn: 'Caesar 养子，前 27 年成事实上第一个皇帝，共和正式结束',
        roleEn: 'Caesar\'s adopted heir; became Rome\'s first de facto emperor in 27 BCE',
        mustKnow: true,
        audioKey: 'augustus',
      },
      {
        nameCn: '马略',
        nameEn: 'Marius',
        ipa: '/ˈmɛəriəs/',
        roleCn: '军改将军，让无地穷人能参军，军队开始向将军个人靠拢',
        roleEn: 'General whose army reforms let the landless enlist; armies began shifting loyalty to commanders',
        mustKnow: true,
        audioKey: 'marius',
      },
      {
        nameCn: '苏拉',
        nameEn: 'Sulla',
        ipa: '/ˈsʌlə/',
        roleCn: '将军，第一个带兵进罗马城、当独裁官清算政敌的人，给 Caesar 立了"坏榜样"',
        roleEn: 'General; first to march an army into Rome and rule as dictator, set the precedent Caesar followed',
        mustKnow: true,
        audioKey: 'sulla',
      },
      {
        nameCn: '庞培',
        nameEn: 'Pompey',
        ipa: '/ˈpɒmpiː/',
        roleCn: '名将，前三头同盟之一，后与 Caesar 决裂，内战中败逃',
        roleEn: 'Great general, member of the First Triumvirate; later Caesar\'s rival, defeated in civil war',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '克拉苏',
        nameEn: 'Crassus',
        ipa: '/ˈkræsəs/',
        roleCn: '罗马最富的人，前三头同盟之一，战死',
        roleEn: 'Richest man in Rome, member of the First Triumvirate; died in battle',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '布鲁图斯',
        nameEn: 'Brutus',
        ipa: '/ˈbruːtəs/',
        roleCn: '刺杀 Caesar 的主谋之一，祖先据传是缔造共和那一支',
        roleEn: 'A leader of Caesar\'s assassins; his line claimed descent from the Republic\'s founders',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'roman-republic-checks',
      termCn: '罗马共和制 / 制衡（consul · Senate · tribune）',
      termEn: 'The Roman Republic / Checks & Balances',
      standardRef: ['AP World KC-1.3', 'CA HSS 6.7', 'AP US Gov (国父来源)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'julius-caesar',
        nodeIds: ['jc-n2'],
        xiaoweiNote: {
          cn: `这个 Caesar 那一遍第 2 节讲得最清楚——别看是"坏人"的嘴讲的，反而最完整。

我把骨架记成三件套：
- **执政官（consul）**：最高行政权，但有**两个**，任期**只有一年**，两人**互相能否决**。
  设计目的就一句话——不让一个人独大。
- **元老院（Senate）**：几百个贵族组成的议事会，管钱、管外交、管大政方针，是共和的实际权力中心。
- **保民官（tribune）**：专门替平民说话，能**一票否决**伤害平民的法案。

还有一个紧急职位叫 **独裁官（dictator）**——本来严格**限期半年**，事后必须交权（记住这点，
后面 Caesar 把它改成"终身"就是大爆点）。

整套设计的灵魂：**谁也不能独大**。罗马人最怕的词是 **rex（王）**。

⚠️ 文化对应坑：这些是罗马自己的词，**别**拿中国的"丞相""皇帝"去套 consul / imperator——
它们的制度逻辑完全不一样，AP 不会接受这种类比。

考点关键句：罗马共和靠 consul / Senate / tribune **互相制衡（checks and balances）** 防止一人独大——
这正是 1787 年美国宪法三权分立的古典源头之一。`,
          en: `Caesar's pass, Node 2, lays this out most clearly — ironically the "bad guy's"
mouth gives the fullest version.

I memorize the skeleton as a three-piece set:
- **Consul**: highest executive power, but there are **two**, each serving only **one year**,
  each able to **veto the other**. The whole point: never let one man dominate.
- **Senate**: a council of several hundred nobles controlling money, foreign affairs, and
  broad policy — the Republic's real center of power.
- **Tribune**: speaks for the common people, can **veto** any law that harms them.

There's also an emergency office, the **dictator** — originally strictly **limited to six months**,
power surrendered afterward (remember this — when Caesar turns it into "for life" later, that's
the big payoff).

The soul of the whole design: **no one can dominate.** The word Romans feared most was **rex**, king.

⚠️ Cultural-mapping trap: these are Rome's own terms. Do NOT map China's offices onto consul or
imperator — the institutional logic is completely different, and AP won't accept the analogy.

Key exam sentence: The Roman Republic used consul / Senate / tribune in mutual **checks and balances**
to stop any one man from dominating — a classical root of the 1787 US Constitution's separation of powers.`,
        },
      },
    },

    {
      id: 'conflict-of-orders',
      termCn: '平民 vs 贵族 / Conflict of Orders',
      termEn: 'Plebeians vs Patricians / The Conflict of Orders',
      standardRef: ['AP World KC-1.3', 'CA HSS 6.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'landless-plebeian-receiving-end', nodeId: 'lp-n8', context: '失地平民 lens N8：穷人的票分量远不如有钱有地的贵族，"我们人民"从来只是一部分人' },
          { lens: 'julius-caesar', nodeId: 'jc-n2', context: 'Caesar lens N2：保民官 tribune 是平民对抗贵族的制度性盾牌' },
        ],
      },
      standaloneText: {
        cn: `共和早期，罗马社会硬生生分成两层人：

- **贵族（patricians）**：少数有土地、有家世的旧家族，一开始**垄断**了所有官职、祭司位置和元老院席位。
- **平民（plebeians）**：剩下的绝大多数普通人——农民、工匠、小商贩。他们要纳税、要当兵，
  却**几乎没有政治权利**。

从大约公元前 494 到前 287 年，平民和贵族之间打了两百年的"拉锯战"，史称
**Conflict of Orders（平民与贵族之争）**。但注意——这**不是**一场血腥内战，
平民用的主要武器很聪明：**集体罢工 / 撤离（secessio）**。他们干脆成群结队走出罗马城，
拒绝当兵、拒绝干活。罗马没了平民就打不了仗、运转不了，贵族只能一次次让步。

平民两百年里一点点争到了：
1. **保民官（tribune）** 这个职位——专门替平民说话、能否决害民法案；
2. 成文法 **《十二铜表法》（Twelve Tables，约前 450 年）**——把法律刻在铜板上公开，
   这样贵族法官就不能再"想怎么判就怎么判"了；
3. 最后平民也能当执政官、进元老院。

🔗 为什么考它：Conflict of Orders 是理解后面一切的**地基**。保民官（tribune）这个职位、
"成文法保护弱者"这个原则，都是从这里来的。等你读到格拉古兄弟当**保民官**去帮失地穷人，
你就知道这个职位为什么存在、又为什么会被既得利益者用暴力对付。

⚠️ careful framing：平民争到了"政治权利的形式"，但**没有**根治"经济不平等"——
有投票权，不等于有地、有饭。这条裂缝，后面会要了共和的命。`,
        en: `In the early Republic, Roman society was split hard into two orders:

- **Patricians**: a small number of old families with land and lineage who at first **monopolized**
  every office, priesthood, and Senate seat.
- **Plebeians**: the vast majority of ordinary people — farmers, craftsmen, small traders. They paid
  taxes and served as soldiers, yet had **almost no political rights**.

From roughly 494 to 287 BCE, plebeians and patricians fought a two-century tug-of-war known as the
**Conflict of Orders**. But note — this was **not** a bloody civil war. The plebeians' main weapon was
clever: a **collective walkout (secessio)**. They simply marched out of the city in a body and refused
to soldier or work. Rome couldn't fight wars or function without its plebeians, so the patricians had
to give ground, again and again.

Over two centuries the plebeians won, piece by piece:
1. The office of **tribune** — to speak for the people and veto laws that harmed them;
2. Written law, the **Twelve Tables (c. 450 BCE)** — laws carved on bronze and posted publicly, so
   patrician judges could no longer rule "however they pleased";
3. Eventually the right to hold the consulship and sit in the Senate.

🔗 Why it's tested: the Conflict of Orders is the **foundation** for everything after. The office of
tribune and the principle that "written law protects the weak" both come from here. When you read about
the Gracchi serving as **tribunes** to help the landless poor, you'll understand why that office existed
— and why entrenched interests would turn to violence against it.

⚠️ Careful framing: the plebeians won the **form** of political rights, but never cured **economic
inequality** — having a vote is not the same as having land or bread. That crack later kills the Republic.`,
      },
      xiaoweiNote: {
        cn: `老师让我们记一对反义词：**patrician（贵族）** vs **plebeian（平民）**——
英文 "plebeian" 今天还在用，意思是"普通人/平头百姓"。

我的记忆口诀："平民两百年没流多少血就赢了'形式'（保民官 + 成文法），
可两千年后帮他们要回'实在好处'（地和饭）的格拉古兄弟，反而被打死了。"
形式 ≠ 实质，这条贯穿整门课。`,
        en: `Teacher had us memorize an antonym pair: **patrician** vs **plebeian** — the word "plebeian"
is still used today to mean "an ordinary, common person."

My mnemonic: "The plebs won the **form** in two centuries with little bloodshed (tribunes + written
law), but the Gracchi, who tried to win them the **substance** (land and bread), were beaten to death."
Form ≠ substance — that runs through the whole topic.`,
      },
    },

    {
      id: 'gracchi-reform-violence',
      termCn: '格拉古兄弟改革与暴力 / 土地不均',
      termEn: 'The Gracchi: Reform, Land, and Violence',
      standardRef: ['AP World KC-1.3', 'CA HSS 6.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'landless-plebeian-receiving-end',
        nodeIds: ['lp-n4', 'jc-n3'],
        xiaoweiNote: {
          cn: `这个故事里讲得很重——平民那一遍第 4 节、Caesar 那一遍第 3 节都有。

重点我记成一条因果链：
- **土地兼并**：罗马打仗打了几百年，地盘暴涨，可土地越来越集中到少数大贵族手里。
  小农被征去外地打仗好几年，回来发现地被吞了，沦为无地平民，挤进罗马城靠施舍过活。
- **格拉古兄弟（Gracchi）**：Tiberius 和 Gaius 先后当上**保民官**，想立法把**公有土地**
  重新分给失地平民。这是**合法的、和平的、走正规程序**的改革。
- **暴力**：哥哥 Tiberius 在 **公元前 133 年** 被一群元老院贵族**当街打死**，尸体扔进台伯河；
  弟弟 Gaius 几年后也死于政治暴力。

考点关键句（老师说必背）：当有人想用**合法手段**帮穷人，制度里的**既得利益者直接动用了暴力**——
从格拉古兄弟死的那天起，罗马政治学会了一件致命的事：**"讲不通，就动刀。"**

这是共和"政治暴力化"的**起点**。后面 Marius、Sulla、Caesar 的所有军事冲突，根都在这里。

🔗 注意一个名词：大贵族用**奴隶**经营的大农场叫 **latifundia（拉丁文，奴隶大庄园）**——
就是这种大庄园，靠几百个不要工钱的战俘奴隶种地，把自己种地的小农彻底挤垮了。`,
          en: `This story gets a lot of weight — Plebeian Node 4 and Caesar Node 3 both cover it.

I memorize the key point as a causal chain:
- **Land concentration**: centuries of war swelled Rome's territory, but land gathered into a few
  great nobles' hands. Small farmers, conscripted abroad for years, came home to find their land
  swallowed, sank into the landless poor, and crowded into the city to live on handouts.
- **The Gracchi**: Tiberius and Gaius, in turn, became **tribunes** and tried to pass laws
  redistributing **public land** to the landless. This was **lawful, peaceful, by proper procedure.**
- **Violence**: the elder, Tiberius, was **clubbed to death** in the street by a mob of senators in
  **133 BCE**, his body thrown into the Tiber; the younger, Gaius, died in political violence a few
  years later.

Key exam sentence (teacher says memorize it): when someone tried to help the poor by **lawful means**,
the system's **entrenched interests turned straight to violence** — from the day the Gracchi died, Roman
politics learned one deadly lesson: **"when you can't win the argument, draw the knife."**

This is the **starting point** of the Republic's turn to political violence. Every later military clash
— Marius, Sulla, Caesar — has its root here.

🔗 One vocabulary term: the great estates the nobles ran with **slaves** were called **latifundia**
(Latin, slave-run estates). It was these estates, worked by hundreds of unpaid war-captive slaves,
that crushed the small farmers who worked their own land.`,
        },
      },
    },

    {
      id: 'marius-sulla-militarization',
      termCn: 'Marius / Sulla 军事化（军队私人化）',
      termEn: 'Marius & Sulla / Militarization of Politics',
      standardRef: ['AP World KC-1.3', 'CA HSS 6.7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'landless-plebeian-receiving-end', nodeId: 'lp-n5', context: '失地平民 lens N5：Marius 打开军队大门让无地穷人参军，士兵从效忠国家变效忠给饭的将军个人' },
        ],
      },
      standaloneText: {
        cn: `格拉古兄弟之后，共和的病从"土地"蔓延到了"军队"。这一段平民那一遍提到了 Marius，
但 Sulla 那一半没展开，我在这里补完——这是 AP 的高频"承上启下"考点。

**Marius（马略），约公元前 107 年起的军改：**
以前在罗马，当兵要**自己有地、自备装备**——因为有地才算有责任感的公民。可现在小农都失地了，
兵源枯竭。Marius 干脆**打开军队大门**：只要你穷、你愿意，将军管你吃穿，打赢了分你战利品和地。

听出问题了吗？以前士兵效忠的是**罗马这个国家**；现在士兵效忠的是那个**给他饭吃、给他地的将军个人**。
军队，从国家的军队，慢慢变成了**强人的私人军队**。

⚠️ careful framing（这点很重要）：现代历史学家对"Marius 一个人 = 军队私人化的转折点"是**有争议的**——
有研究认为兵源开放是个渐进过程，士兵忠诚转向将军，更大的原因是**元老院一直不肯解决退伍兵安置**
（退伍了没地没饭，只能指望给过他们好处的将军）。所以别写成"Marius 一个人毁了军队"，
要写成"这是一个长期的结构问题"。

**Sulla（苏拉），公元前 88 / 82 年：**
Marius 和 Sulla 后来反目。**公元前 88 年，Sulla 做了一件五百年来没人敢做的事：他带着军团，
直接攻进了罗马城**——用军队解决政治分歧。后来他当上**独裁官**，开列政敌的"死亡名单"
（proscriptions，处刑名单），大批清算对手。

🔗 为什么这是 Caesar 的前传：Sulla **第一个**示范了"带兵进罗马 + 当独裁官清算政敌"。
四十年后，Caesar 跨过卢比孔河、当终身独裁官，走的就是 Sulla 趟出来的路。
考点关键句：**军队私人化 + Sulla 的"带兵进城"先例**，让后来 Caesar 的崛起从"不可想象"变成了"有样学样"。`,
        en: `After the Gracchi, the Republic's disease spread from "land" to "the army." The Plebeian pass
mentions Marius, but the Sulla half isn't developed — I fill it in here, since it's a high-frequency
AP "bridge" topic.

**Marius, army reforms from about 107 BCE:**
Before, to be a Roman soldier you needed **land of your own and your own gear** — land made you a
responsible citizen. But now the small farmers had lost their land, and recruits were drying up. Marius
simply **threw open the army's doors**: if you were poor and willing, the general fed and clothed you,
and shared spoils and land after a victory.

Hear the trouble? Before, a soldier was loyal to **Rome the country**; now a soldier was loyal to the
**general who fed him and gave him land** — the man himself. The army slowly turned from the country's
army into a **strongman's private army**.

⚠️ Careful framing (this matters): modern historians **dispute** that "Marius alone = the turning point
of army privatization." Some argue the opening of recruitment was gradual, and that soldiers' loyalty
shifted to generals largely because the **Senate kept refusing to settle discharged veterans** (with no
land or pay after service, they had to rely on the general who had rewarded them). So don't write
"Marius alone wrecked the army" — write "this was a long-term structural problem."

**Sulla, 88 / 82 BCE:**
Marius and Sulla later turned on each other. **In 88 BCE, Sulla did what no one had dared in five
hundred years: he marched his legions straight into the city of Rome** — using the army to settle a
political dispute. Later he became **dictator** and drew up "death lists" of his enemies
(proscriptions), purging rivals on a large scale.

🔗 Why this is Caesar's prequel: Sulla was the **first** to model "march an army into Rome + rule as
dictator + purge enemies." Forty years later, Caesar crossing the Rubicon and becoming dictator for life
walked the road Sulla had cut. Key exam sentence: **army privatization plus Sulla's "march on Rome"
precedent** turned Caesar's later rise from "unthinkable" into "following an example."`,
      },
      xiaoweiNote: {
        cn: `我的记忆口诀：**M → S → C**（Marius 开门 → Sulla 带兵进城立坏榜样 → Caesar 跨河收尾）。
三个将军，一条下坡路：军队从"国家的"变成"私人的"。

老师特别提醒：写 essay 别说"Marius 一个人害的"——要说"退伍兵安置没人管"这个**结构性**原因。
这样写才像 AP 的 historiography 水平。`,
        en: `My mnemonic: **M → S → C** (Marius opens the door → Sulla marches into Rome and sets the bad
precedent → Caesar finishes with the Rubicon). Three generals, one downhill slope: the army goes from
"the country's" to "private."

Teacher's warning: in essays, don't say "Marius alone caused it" — name the **structural** cause, that
no one settled the discharged veterans. That's what AP-level historiography sounds like.`,
      },
    },

    {
      id: 'first-triumvirate',
      termCn: '前三头同盟 / 制衡失效',
      termEn: 'The First Triumvirate',
      standardRef: ['AP World KC-1.3', 'CA HSS 6.7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'julius-caesar', nodeId: 'jc-n5', context: 'Caesar lens N5：约前 60 年 Caesar/Crassus/Pompey 私下结盟，元老院公开制衡成走过场' },
          { lens: 'cicero', nodeId: 'ci-n4', context: 'Cicero lens N4：三头同盟拉拢 Cicero，加入=亲手卖掉元老院共和' },
        ],
      },
      standaloneText: {
        cn: `这个 Caesar 和 Cicero 两遍都点到了，但没正式拆开讲，我在这里补全。

**前三头同盟（First Triumvirate），约公元前 60 年。** "Triumvirate" 就是"三个人的同盟"。
三个当时最有权势的人——
- **Caesar（凯撒）**：手握军功和人心的将军；
- **Crassus（克拉苏）**：罗马**最有钱**的人，能用钱买兵、买选票；
- **Pompey（庞培）**：罗马**最能打**的名将。

——三个人**私下**结成同盟，在饭局上就把罗马的实权分了。

这件事本身就说明共和病到哪了：共和国的大事，**本该在元老院公开辩论、公开表决**。
可现在，三个最有权势的人在**私下的饭局**上就把国家分了。元老院那套**公开制衡，沦为走过场**。

考点关键句：First Triumvirate 是一个**非正式的私人同盟**（不是合法官职），它的存在本身
就证明罗马共和的**公开制衡机制已经失效**——真正的决定都在台面下做成了。

后来同盟散了：**Crassus 战死**，Caesar 和 Pompey 从盟友变成对手，直接导向了内战。

🔗 别混淆：还有一个"**后三头同盟**"（Second Triumvirate，公元前 43 年）——
是 Antony（安东尼）+ Octavian（屋大维）+ Lepidus，他们开列了那张害死 Cicero 的"死亡名单"。
"前 60 / 后 43"两个三头同盟，AP 选择题最爱考你分得清不清。`,
        en: `Both the Caesar and Cicero passes touch this, but neither breaks it down formally — I fill it
in here.

**The First Triumvirate, around 60 BCE.** "Triumvirate" just means "an alliance of three men." The three
most powerful men of the day —
- **Caesar**: the general with military glory and popular support;
- **Crassus**: the **richest** man in Rome, able to buy soldiers and votes with money;
- **Pompey**: Rome's **greatest** general.

— formed a **private** alliance and carved up the real power of Rome at a dinner table.

The fact itself shows how sick the Republic was: the great affairs of the Republic were **supposed to be
debated and voted in the open Senate.** Now three of the most powerful men split the state at a **private
dinner.** The Senate's **open checks became an empty ritual.**

Key exam sentence: the First Triumvirate was an **informal private alliance** (not a legal office), and
its very existence proves the Roman Republic's **open checks had already failed** — the real decisions
were being made off the table.

The alliance later broke: **Crassus died in battle**, Caesar and Pompey went from allies to rivals, and
this led straight to civil war.

🔗 Don't confuse it: there was also a **Second Triumvirate** (43 BCE) — Antony + Octavian + Lepidus, who
drew up the "death list" that killed Cicero. "First 60 / Second 43" — AP multiple choice loves testing
whether you can tell the two triumvirates apart.`,
      },
      xiaoweiNote: {
        cn: `记忆口诀：前三头 = **军 + 钱 + 将**（Caesar 军功 / Crassus 钱 / Pompey 名将）。
散伙原因：**钱死了**（Crassus 战死）→ 军和将翻脸（Caesar vs Pompey）→ 内战。

老师提醒：考点不是"三个人叫什么"，是"**为什么三个人私下结盟 = 制衡已经死了**"。
答这种题要往"公开制度变成走过场"上写。`,
        en: `Mnemonic: First Triumvirate = **army + money + general** (Caesar's glory / Crassus's money /
Pompey the great general). Why it broke: **the money died** (Crassus killed in battle) → army and general
turned on each other (Caesar vs Pompey) → civil war.

Teacher's note: the exam point isn't "who the three men were" — it's "**why three men allying in private =
checks were already dead.**" Answer by writing about how the open institutions became an empty ritual.`,
      },
    },

    {
      id: 'caesar-rubicon-dictator',
      termCn: '凯撒：渡卢比孔 / 终身独裁官 / 被刺 44 BCE',
      termEn: 'Caesar: Rubicon, Dictator for Life, Assassination 44 BCE',
      standardRef: ['AP World KC-1.3', 'CA HSS 6.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'julius-caesar',
        nodeIds: ['jc-n1', 'jc-n6', 'jc-n7', 'jc-n8'],
        xiaoweiNote: {
          cn: `Caesar 整条线就是他，重点节点：N1（跨河）、N6（买选票登顶）、N7（终身独裁官）、N8（被刺）。

三个必背时间点：
- **公元前 49 年**：Caesar 带兵跨过 **卢比孔河（Rubicon）**。罗马铁规矩：将军带兵过这条河 = 叛国。
  跨河 = 向共和宣战，内战爆发。
- **约公元前 45 年**：赢遍对手后，他让元老院封他做 **"终身独裁官"（dictator for life）**。
  记住前面学的——独裁官本是**限期半年**的紧急职位，他把它变成了**终身**，
  等于让那个一年一换、两人否决的执政官制度**停了**，权力集中到他一个人身上。
  但他**没敢自称 rex（王）**——他太聪明，不碰那个会要命的字。
- **公元前 44 年 3 月 15 日**：罗马人叫这天 **"3 月的 Ides"（Ides of March）**。
  他在元老院被一群议员围刺，中了**二十多刀**（约 23 刀）。刺他的人里有 **Brutus（布鲁图斯）**，
  对他们来说，杀 Caesar 不是谋杀，是"为共和除掉一个僭主"。

⚠️ 引语诚信（这点老师专门强调，AP 也爱挖坑）：
- **"骰子已经掷出去了"（the die is cast / Alea iacta est）**：是**后世史家流传**的话，
  真实性**不可确证**——可以用"据说"提，但**不能**当成铁板钉钉的确证史实。
- **"还有你吗，Brutus？"（Et tu, Brute）**：⚠️ **这句话不见于任何古代史料，是莎士比亚剧本加的！**
  千万**别**把它当真实史实写进 essay——这是 AP 最经典的"伪引语"陷阱。

考点关键句：Caesar **没有**称王、**也不是**皇帝——他是**终身独裁官**。
第一个事实上的皇帝是他养子 Octavian。这两个别搞混。`,
          en: `Caesar's whole pass is about him; key nodes: N1 (the crossing), N6 (buying votes to the top),
N7 (dictator for life), N8 (the assassination).

Three dates to memorize:
- **49 BCE**: Caesar marched his army across the **Rubicon**. Rome's iron rule: a general bringing an army
  across this river = treason. Crossing = declaring war on the Republic; civil war broke out.
- **about 45 BCE**: after beating every rival, he had the Senate name him **"dictator for life."**
  Remember what we learned — the dictator was originally a **six-month emergency office**; he made it
  **permanent**, which **stopped** that consul system (changed yearly, two men vetoing each other) and
  gathered all power onto one man. But he **never dared call himself rex** (king) — too clever to touch
  the deadly word.
- **15 March 44 BCE**: Romans called it the **Ides of March.** He was surrounded and stabbed by a group
  of senators in the Senate, taking **more than twenty wounds** (about 23). Among the killers was
  **Brutus**; to them, killing Caesar was not murder but "ridding the Republic of a tyrant."

⚠️ Quote integrity (teacher stressed this; AP loves to trap you):
- **"The die is cast" (Alea iacta est)**: this is a line **passed down by later historians**, of
  **unconfirmable** authenticity — you can mention it with "supposedly," but don't treat it as
  rock-solid confirmed history.
- **"You too, Brutus?" (Et tu, Brute)**: ⚠️ **This line appears in NO ancient source — Shakespeare added
  it!** Never write it into an essay as real history — it's AP's classic "fake quote" trap.

Key exam sentence: Caesar did **not** make himself king and was **not** an emperor — he was **dictator for
life.** The first de facto emperor was his adopted heir, Octavian. Don't mix the two up.`,
        },
      },
    },

    {
      id: 'plebeian-vote-for-bread',
      termCn: '失地平民 / 卖选票换面包（民主被买空）',
      termEn: 'Landless Plebeians / Selling the Vote for Bread',
      standardRef: ['AP World KC-1.3', 'CA HSS 6.7', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'landless-plebeian-receiving-end',
        nodeIds: ['lp-n1', 'lp-n6', 'lp-n7', 'lp-n9'],
        xiaoweiNote: {
          cn: `这是默认那一遍（失地平民）整条线，也是这一课我最被打动的角度。重点：N1、N6（卖票）、N7（当炮灰）、N9（结局）。

⚠️ 先记一件事：这个平民是 **composite（合成人物）**——故事自己在第 1 节就用括号说清楚了：
具体的名字和家庭是"叙事性"的，但他身上发生的每件事，都真的发生在那**几十万**失地农民和退伍兵身上。
（这是历史诚信：不假装他是某个有名有姓的真人，但他的遭遇是真实群体的。）

这条线的核心因果（跟 N6 三遍对位的那个"卖一张选票"）：
- 平民失了地、挤进罗马城、饿肚子 → 手里那张**选票可以卖**；
- Caesar 这样有钱有兵的人**出价最高**（给面包、给角斗表演、许诺退伍兵分地）→ 平民把票卖了换饭。

考点关键句（这是 DBQ 金句）：共和的**"民主"本该是平民用选票约束权贵**，可当平民穷到要**卖选票**，
这套"民主"就**反过来**了——它成了有钱有兵的人**买下整座城的工具**。
共和国不是被外敌从外面砸开的，是它自己**把门钥匙一张一张卖给了 Caesar**。

🔗 N6 三遍对位（同一个动作三个方向）：平民**卖**票（这一遍）/ Caesar **买**票登顶（Caesar N6）/
Cicero 眼睁睁看"选票被买"却**救不了**（Cicero N6，言辞挡不住面包）。

⚠️ careful framing（别踩的坑）：别写"平民卖票是因为贪婪/愚蠢"。
他们是**先被制度抛弃**（失地、挨饿、合法翻身的路被格拉古之死堵死）**才**卖票的。
这是**结构性**问题，不是道德缺陷。`,
          en: `This is the whole default pass (the landless plebeian), and the angle of this topic that moved
me most. Key nodes: N1, N6 (selling the vote), N7 (becoming cannon fodder), N9 (the ending).

⚠️ First, remember: this plebeian is a **composite character** — the story itself says so in a Node 1
parenthesis: the specific name and family are "part of the storytelling," but every single thing that
happens to him truly happened to those **hundreds of thousands** of landless farmers and veterans.
(That's historical honesty: not pretending he's one named real person, but his experiences are a real
group's.)

The core causal chain of this line (the "one vote for sale" that mirrors across all three N6s):
- The plebeian lost his land, crowded into the city, went hungry → the **vote in his hand can be sold**;
- A rich, armed man like Caesar **bids highest** (bread, gladiator shows, promised land for veterans) →
  the plebeian sells the vote for a meal.

Key exam sentence (a DBQ gold line): the Republic's **"democracy" was supposed to be the people checking
the powerful with their votes**, but when the people grow poor enough to **sell their votes**, this
"democracy" **flips** — it becomes a tool for the rich and armed to **buy a whole city.** The Republic
wasn't smashed from outside; it **sold Caesar the keys to its own door, one at a time.**

🔗 The N6 three-way mirror (one action, three directions): the plebeian **sells** the vote (this pass) /
Caesar **buys** votes to the top (Caesar N6) / Cicero watches "votes being bought" and **can't save it**
(Cicero N6, words can't hold back bread).

⚠️ Careful framing (a trap to avoid): don't write "the plebeians sold votes out of greed/stupidity."
They were **abandoned by the system first** (losing land, starving, the lawful path to recovery blocked by
the Gracchi's deaths) and **only then** sold. It's a **structural** problem, not a moral failing.`,
        },
      },
    },

    {
      id: 'augustus-republic-to-empire',
      termCn: 'Augustus / 帝国诞生 27 BCE（共和→帝制转型）',
      termEn: 'Augustus / Birth of the Empire 27 BCE',
      standardRef: ['AP World KC-1.3', 'CA HSS 6.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'julius-caesar',
        nodeIds: ['jc-n9'],
        mentionedIn: [
          { lens: 'landless-plebeian-receiving-end', nodeId: 'lp-n9', context: '失地平民 lens N9：Augustus 给退伍兵分地、给平民发粮办娱乐，对很多穷人皇帝来了反而日子稳了点' },
        ],
        xiaoweiNote: {
          cn: `这个 Caesar 那一遍第 9 节讲到了（他死后的事），失地平民 N9 也从穷人角度补了一笔。

结局的链条：
- 杀了 Caesar，共和**没有**复活——反而掉进**更乱的内战**。
- 最后 Caesar 的养子 **Octavian（屋大维）** 打赢了所有对手。
- **公元前 27 年**，Octavian 做了一件比 Caesar 更高明的事：他**不**像 Caesar 那样张扬地当"终身独裁官"，
  而是把权力**一项一项**收到自己手里，**表面上却说"我把共和还给元老院和人民了"**。
  元老院给了他一个新头衔：**Augustus（奥古斯都，意为"受尊崇者"）**。
- 从此罗马有了**事实上的皇帝**，五百年的**共和正式结束，帝制（empire）开始**。

必背数字：从 **前 49 年**（Caesar 跨卢比孔）到 **前 27 年**（Octavian 称 Augustus），中间只隔 **22 年**——
一个稳了五百年的共和国，**崩塌只用了一代人**。

考点关键句（共和→帝制转型的原因，AP 必考多因）：压垮共和的**不是某一个坏人**，是它**自己**——
**土地不均 + 政治暴力化 + 平民被买空的选票 + 军队私人化**，早就把地基掏空了，Caesar / Augustus
只是最后推一把的人。

⚠️ careful framing（反 Whig 的苦味）：对很多失地穷人，**皇帝来了日子反而稳了点**——
Augustus 给退伍兵分地、给平民发粮办娱乐（他需要他们安分）。所以共和崩塌时，门外那群人**没有替它哭**——
因为那个"共和"，本来就没真正属于过他们。这句话写进 DBQ 会很亮。`,
          en: `Caesar's pass, Node 9, covers this (the aftermath of his death), and Plebeian N9 adds the poor's
angle.

The ending's chain:
- Killing Caesar did **not** revive the Republic — it fell into an **even wilder civil war.**
- In the end Caesar's adopted son **Octavian** beat every rival.
- **27 BCE**: Octavian did something cleverer than Caesar — instead of flaunting "dictator for life," he
  gathered power **one piece at a time** while **publicly saying "I have given the Republic back to the
  Senate and the people."** The Senate gave him a new title: **Augustus** (meaning "the revered one").
- From then Rome had a **de facto emperor**, and the five-hundred-year **Republic was formally over; the
  empire began.**

A number to memorize: from **49 BCE** (Caesar crossing the Rubicon) to **27 BCE** (Octavian becoming
Augustus) is only **22 years** — a republic stable for five hundred years **collapsed in a single
generation.**

Key exam sentence (causes of the republic→empire transition; AP always tests multi-causation): what broke
the Republic was **not one bad man** — it was **itself**: **unequal land + the turn to political violence
+ the people's bought-out votes + the privatized army** had long since hollowed out the foundation. Caesar
and Augustus were only the ones who gave the final push.

⚠️ Careful framing (the anti-Whig bitterness): for many of the landless poor, when the emperor came,
**life actually grew steadier** — Augustus gave land to veterans, grain and entertainment to the plebs (he
needed them quiet). So when the Republic collapsed, the crowd outside the door **did not weep for it** —
because that "republic" had never truly been theirs. Put that line in a DBQ and it shines.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `罗马人花了五百年，精心设计了一套"谁也不能独大"的制度——两个执政官互相否决、
保民官替平民否决害民法案、独裁官严格限期半年、最怕一个"rex（王）"字。

可这套制度最后还是养出了一个 Caesar，把权力集中到一个人身上。

你觉得，问题出在**制度设计**上（设计本身有漏洞），还是出在**别的地方**
（比如土地不均、平民被买空的选票、军队私人化）？如果是别的地方，
那"再好的制度设计"能不能挡住这种从内部来的腐蚀？`,
      en: `The Romans spent five hundred years carefully designing a system where "no one can dominate" —
two consuls vetoing each other, tribunes vetoing laws that harm the people, the dictator strictly limited
to six months, the word "rex" (king) feared above all.

Yet this system still produced a Caesar, gathering all power onto one man.

Do you think the problem lay in the **system's design** (a flaw in the design itself), or **somewhere
else** (unequal land, the people's bought-out votes, the privatized army)? If it was somewhere else, can
"even the best system design" hold back this kind of corrosion that comes from within?`,
      hintCn: `提示：可以从两个角度想——(1) 制度设计派：会说漏洞在于制衡没配套"经济平等"，
有选票却没地没饭，制度只防了"权力"没防"贫富差距"；(2) 结构腐蚀派：会说再好的设计也挡不住
"土地全跑到少数人手里 → 这少数人反过来买空选票"这条经济链，光改制度没用，得动财富分配。

进阶思考：回忆三个考点卡——Conflict of Orders（平民只争到"形式"没争到"实质"）、
格拉古之死（合法改革被暴力打掉）、卖选票（民主被买空）。把它们串起来，
你会发现共和的病一直是"政治权利"和"经济现实"对不上。`,
      hintEn: `Hint: think from two angles — (1) the design camp: the flaw is that the checks were never
paired with "economic equality" — having a vote but no land or bread; the system guarded "power" but not
the "wealth gap"; (2) the structural-corrosion camp: even the best design can't hold back the economic
chain of "land all flows to a few → those few then buy out the votes"; reforming institutions alone won't
work, you have to touch wealth distribution.

Going deeper: recall three concept cards — the Conflict of Orders (plebs won only the "form," not the
"substance"), the Gracchi's deaths (lawful reform crushed by violence), selling the vote (democracy bought
out). String them together and you'll see the Republic's disease was always a mismatch between "political
rights" and "economic reality."`,
      conceptsActivated: ['roman-republic-checks', 'conflict-of-orders', 'plebeian-vote-for-bread'],
    },
    {
      id: 'q2',
      cn: `一个失地的罗马平民——他祖上有地，他自己替罗马打了多年仗，回来却发现地被大贵族吞了，
饿着肚子，最后把手里唯一的一张选票，卖给军阀换了一袋面包。

有人说："是这些平民贪图一袋面包，亲手葬送了共和——要是他们守住自己的票，Caesar 根本爬不上去。"
也有人说："是制度先抛弃了他们——一个让人饿到要卖选票的共和国，有什么资格怪卖票的人？"

如果你是 AP 老师，要出一道 DBQ 题分析"该怪卖票的平民，还是怪抛弃他们的制度"，你会怎么提问？`,
      en: `A landless Roman plebeian — his family once held land, he himself soldiered for Rome for years,
then came home to find the land swallowed by the great nobles, went hungry, and finally sold the one vote
in his hand to a warlord for a sack of grain.

Some say: "It was these plebeians who buried the Republic for a sack of grain — if they'd held to their
votes, Caesar could never have climbed up." Others say: "The system abandoned them first — what right has a
republic that starves a man into selling his vote to blame the man who sells it?"

If you were an AP teacher writing a DBQ on "blame the plebs who sold their votes, or the system that
abandoned them," how would you phrase the question?`,
      hintCn: `提示：好的 DBQ 通常会给学生几份对照材料让他们权衡——比如格拉古土地法的内容
（合法翻身的路被堵死的证据）、退伍兵安置一直没人管的记录、Caesar 收买平民的手段。
然后问"这是个人的道德选择，还是结构性的被逼无奈？"——没有标准答案，重点是用证据。

注意一个 framing 坑：别让题目预设"平民贪婪"或"平民无辜"，要让学生**两边都论证**。
可以试着这样问："Was the plebeians' selling of votes a cause of the Republic's fall,
or a symptom of a system that had already failed them? Use evidence to argue both."

进阶思考：今天有没有类似的情况——有人因为"反正我这一票/这一份没用"就放弃了它？
那是个人问题，还是因为系统先让他们觉得"没用"？`,
      hintEn: `Hint: a good DBQ usually gives students contrasting sources to weigh — the content of the
Gracchi's land laws (evidence the lawful path to recovery was blocked), records of the unsettled veterans,
Caesar's methods of buying the plebs. Then ask "was this an individual moral choice, or a structural
being-forced-into-a-corner?" — no standard answer; the point is using evidence.

Watch a framing trap: don't let the question presume "the plebs were greedy" or "the plebs were innocent"
— make students **argue both sides.** Try: "Was the plebeians' selling of votes a cause of the Republic's
fall, or a symptom of a system that had already failed them? Use evidence to argue both."

Going deeper: is there a similar situation today — someone giving up "their one vote / their share" because
"it's useless anyway"? Is that a personal failing, or did the system make them feel "useless" first?`,
      conceptsActivated: ['plebeian-vote-for-bread', 'gracchi-reform-violence', 'augustus-republic-to-empire'],
    },
    {
      id: 'q3',
      cn: `两千年后，大西洋对岸设计美国的那群人，书架上摆着 Cicero 的演说集，
Madison 还读了古希腊人 Polybius 写的罗马政体。他们照着罗马共和"制衡 + 谁也不能独大"的样子，
给美国设计了三权分立、参众两院、任期限制——因为他们最怕的，就是出一个"美国的凯撒"。

罗马共和**有**制衡、**有**选举、**有**保民官替平民说话，可它还是崩溃了。

你觉得，美国国父从罗马的崩溃里，到底**该**学到什么？仅仅是"把制衡设计得更严密"，
就能防住"美国的凯撒"吗？还是说，罗马的真正教训在制度设计之外的地方？`,
      en: `Two thousand years later, the men who designed America kept Cicero's collected speeches on their
shelves, and Madison read the Roman constitution as written by the Greek Polybius. They designed America's
separation of powers, two houses, and term limits on the model of the Roman Republic's "checks + no one can
dominate" — because what they feared most was an "American Caesar."

The Roman Republic **had** checks, **had** elections, **had** tribunes to speak for the people — and it
still collapsed.

What do you think America's founders **should** have learned from Rome's collapse? Could merely "designing
the checks more tightly" prevent an "American Caesar"? Or does Rome's real lesson lie somewhere beyond
system design?`,
      hintCn: `提示：可以想想罗马崩溃的多个原因里，哪些是"制度设计"能管的，哪些不能。
制度设计能管的：任期限制、防止一人长期掌权（美国学到了——总统有任期、有弹劾）。
制度设计**难**管的：土地/财富极度集中、穷人被买空选票、军队效忠个人而非国家——
这些是经济和社会的病，光靠"分权"挡不住。

提醒一个史实精度（AP 会欣赏）：Polybius→Madison 的影响是真实的（Madison 在
Federalist 里引过 Polybius），但主流史学认为这条"罗马思路"主要是经过启蒙思想家
**Montesquieu（孟德斯鸠）**这个中介传到美国国父的——别把它写成"国父直接照抄罗马"。

进阶思考："财富集中到少数人 → 这少数人反过来买空民主"，这条从罗马到美国镀金时代
（Gilded Age）几乎一模一样。如果你跑过那段历史，想想：单靠"宪法设计"挡得住这条循环吗？`,
      hintEn: `Hint: think about which of Rome's many causes of collapse "system design" can handle and which
it can't. What design can handle: term limits, preventing one man from holding power long-term (America
learned this — presidents have term limits and impeachment). What design **struggles** to handle: extreme
concentration of land/wealth, the poor's votes being bought out, armies loyal to a man rather than the
country — these are economic and social diseases that "dividing power" alone can't stop.

A note on historical precision (AP appreciates this): the Polybius→Madison influence is real (Madison cited
Polybius in the Federalist), but mainstream scholarship holds that this "Roman thread" reached the founders
mainly through the Enlightenment thinker **Montesquieu** as an intermediary — don't write it as "the
founders directly copied Rome."

Going deeper: "wealth concentrates into a few → those few then buy out democracy" runs almost identically
from Rome to America's Gilded Age. If you've run that topic, ask: can "constitutional design" alone stop
this cycle?`,
      conceptsActivated: ['roman-republic-checks', 'caesar-rubicon-dictator', 'augustus-republic-to-empire'],
    },
  ],
};

export default notebook;
