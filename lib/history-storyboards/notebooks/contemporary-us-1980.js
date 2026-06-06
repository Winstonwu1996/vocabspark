// ─── 同伴笔记本架构 v1 · Contemporary US 1980–Present ─────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演「学习同伴」
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 核心考点卡（喂 mastery gate + 金筹码考点高亮）
//   3. thinkingQuestions（出口批判性思考）— 开放式 DBQ 入门题，Rule 0 中性
//
// ⚠️ RULE-0 中性是这门课的第一红线（一票否决）。它写的是还活着、还在吵的政治。
//    每一位总统、每一个党、每一场战争，都是被「研究的历史对象」，不是被「站队的政治立场」。
//    所有 contested 卡（里根经济、伊拉克战争、2008 成因）的 standaloneText 必须分析化、
//    两面并排，绝不给结论。thinkingQuestions 不预设正确的政治答案。
//
// 课纲对齐：APUSH Period 9（1980-至今），CED Topic 9.1-9.7
// 事实地基：对账 contemporary-us-1980.md + -factledger.md（所有日期/数字已逐条核实）
//
// schemaVersion: 1 · notebookVersion: contemporary-us-1980-v1

export var notebook = {
  topicId: 'contemporary-us-1980',
  topicNameCn: '当代美国 1980 至今',
  topicNameEn: 'Contemporary US 1980–Present',
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
    cn: `今天老师说我们要学「当代美国 1980 至今」（Contemporary US 1980–Present）。
她说这是 APUSH 第九阶段——AP US History 时间线的**最后一段**，从里根上台一直讲到今天。

老师特别提醒了一句，我抄在笔记本第一页：
「这门课难，是因为它离今天太近——近到你家里的大人可能正好在为这些事吵架。
正因为它还活着，它更要被当**历史**来学：给视角，给两边的证据，**不给结论**。」

她说这一段的主线，是一场没有硝烟的「大重组」：工厂从一座座小城迁走，
钱和工作流向新经济（金融、科技、全球化）；冷战赢了，苏联散了；
又被 9/11 和两场长战争拖了二十年；2008 年金融海啸把几千万人的账户冲掉一半。

我回家问我妈，她说中国课纲对 1980 年后的美国几乎不展开——
她对里根、克林顿、奥巴马这些名字只有零碎印象，缺一条主线。
老师说这正常，这门课给的就是那条主线。

她给了一张纸，上面是这一段绕不开的名字（都当**历史对象**看，不站队）：

Ronald Reagan（里根）、Mikhail Gorbachev（戈尔巴乔夫）、
Barack Obama（奥巴马）、Bill Clinton（克林顿）、George W. Bush（小布什）

还有一串词：conservative turn（保守主义转向）、deregulation（放松管制）、
end of the Cold War（冷战终结）、globalization（全球化）、
deindustrialization（去工业化）、NAFTA、9/11 / War on Terror（反恐战争）、
Great Recession（大衰退）、political polarization（政治极化）、opioid epidemic（阿片危机）。

我先记下来，等下读三个视角——一个搭上重组上行电梯的「赢家」、
一个 9/11 后入伍、两边都站过的退伍军人、还有一个锈带小城承受端的工薪家庭——
读完再回来对照这张单子，看我能不能**两面都讲**，而不是只讲一边。`,
    en: `Today my teacher said we're learning "Contemporary US 1980–Present."
She said it's APUSH Period 9 — the **last stretch** of the AP US History timeline,
from Reagan taking office all the way to today.

She gave one warning I copied onto the first page of my notebook:
"This unit is hard because it's too close to today — close enough that the grown-ups
in your house might be arguing about these exact things. Precisely because it's still
alive, it has to be studied as **history**: give the lenses, give both sides' evidence,
and **give no verdict**."

She said the through-line is a quiet "great restructuring": factories left one small
town after another, while money and jobs flowed to the new economy (finance, tech,
globalization); the Cold War was won and the USSR dissolved; then 9/11 and two long
wars stretched across twenty years; and in 2008 a financial crash wiped out half of
tens of millions of retirement accounts.

When I got home I asked my mom. She said Chinese curricula barely cover the US after
1980 — she only has scattered impressions of names like Reagan, Clinton, Obama, with
no through-line. Teacher said that's normal, and this unit is that through-line.

She gave us a sheet with the names you can't avoid in this stretch (all treated as
**historical subjects**, no taking sides):

Ronald Reagan, Mikhail Gorbachev,
Barack Obama, Bill Clinton, George W. Bush

Plus a string of terms: conservative turn, deregulation, end of the Cold War,
globalization, deindustrialization, NAFTA, 9/11 / War on Terror, Great Recession,
political polarization, opioid epidemic.

Let me write these down. After I read the three lenses — someone who rode the
restructuring's escalator up (a "winner"), a veteran who enlisted after 9/11 and
stood on both sides, and a working family on the receiving end in a Rust Belt town —
I'll come back and check whether I can tell **both sides**, not just one.`,
    keyTerms: [
      { cn: '保守主义转向 / 里根革命', en: 'conservative turn / Reagan Revolution' },
      { cn: '放松管制', en: 'deregulation' },
      { cn: '冷战终结（柏林墙 1989 / 苏联 1991）', en: 'end of the Cold War' },
      { cn: '全球化', en: 'globalization' },
      { cn: '去工业化（锈带）', en: 'deindustrialization' },
      { cn: '北美自由贸易协定（1994）', en: 'NAFTA' },
      { cn: '中国入世（2001）', en: 'WTO accession (China)' },
      { cn: '9·11 / 反恐战争', en: '9/11 / War on Terror' },
      { cn: '次贷危机 / 大衰退（2008）', en: 'subprime crisis / Great Recession' },
      { cn: '经济不平等', en: 'economic inequality' },
      { cn: '政治极化', en: 'political polarization' },
      { cn: '阿片危机', en: 'opioid epidemic' },
      { cn: '改革开放（中国 1978，结构对照）', en: 'reform and opening (China, 1978)' },
    ],
    // mustKnow: true = APUSH P9 绕不开、必拼的名字（中性呈现，仅职位 + 一条史实无争议事实）
    // mustKnow: false = 背景人物，用职位称谓就够，不进考点拼写
    keyFigures: [
      {
        nameCn: '罗纳德·里根',
        nameEn: 'Ronald Reagan',
        roleCn: '美国第 40 任总统（1981-1989），任内推动减税与放松管制，开启常被称为「保守主义转向」的一段。',
        mustKnow: true,
      },
      {
        nameCn: '米哈伊尔·戈尔巴乔夫',
        nameEn: 'Mikhail Gorbachev',
        roleCn: '苏联最后一位领导人，1991 年 12 月 25 日辞职，几天后苏联正式解散，冷战告终。',
        mustKnow: true,
      },
      {
        nameCn: '巴拉克·奥巴马',
        nameEn: 'Barack Obama',
        roleCn: '美国第 44 任总统（2009-2017），2008 年当选，是美国历史上第一位非裔总统。',
        mustKnow: true,
      },
      {
        nameCn: '比尔·克林顿',
        nameEn: 'Bill Clinton',
        roleCn: '美国第 42 任总统（1993-2001），任内 NAFTA 于 1994 年生效。',
        mustKnow: false,
      },
      {
        nameCn: '乔治·W·布什',
        nameEn: 'George W. Bush',
        roleCn: '美国第 43 任总统（2001-2009），任内发生 9/11，美国先后出兵阿富汗（2001）与伊拉克（2003）。',
        mustKnow: true,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'conservative-turn-reagan',
      termCn: '保守主义转向 / 里根时代',
      termEn: 'The Conservative Turn / Reagan Era',
      storyAnchor: {
        standaloneText: {
          cn: `这是 Period 9 的开场考点，也是这门课**党派风险最高的几张卡之一**——所以我背的是「两面」，不是「一边」。

时间：1981-1989，**Ronald Reagan（里根）** 任第 40 任总统。
事实骨架（无争议、必背）：1981 年 8 月签 Economic Recovery Tax Act 大幅减税，同时推 deregulation（放松管制）。
注意一个常见陷阱——个税最高税率**不是一步**从 70% 砍到 28%，是**分两步、跨两届任期**：1981 年先到 50%，1986 年税改后才到 28%。

然后是吵了四十年、至今没停的那一格——**这一格我必须两面都写**：
- **支持者说**：减税和放松管制点燃了经济活力、终结了 1970 年代的滞胀。
- **批评者说**：它让经济不平等开始拉大、削弱了对普通工人的保护。

两边用的常常是**同一组数据的不同切面**。考点关键句：保守主义转向 = 一次税收与监管思路的转向，
它的功过从 1980 年吵到今天——答题时把两边并排摆出来，**不要替历史选边**，这才是 APUSH 要的 complexity。`,
          en: `This is the opening exam card of Period 9 — and **one of the most partisan-risk cards** in this unit — so I memorize "both faces," not one side.

When: 1981-1989, **Ronald Reagan** as the 40th president.
The factual skeleton (uncontested, memorize): in August 1981 he signed the Economic Recovery Tax Act cutting taxes sharply, alongside deregulation.
Watch a common trap — the top income-tax rate was **not** cut from 70% to 28% in one step; it was **two steps across two terms**: to 50% in 1981, and to 28% only after the 1986 tax reform.

Then comes the box that's been argued for forty years and isn't settled — **and I must write both sides here**:
- **Supporters say** the tax cuts and deregulation released economic energy and ended the 1970s stagflation.
- **Critics say** it began widening economic inequality and weakened protections for ordinary workers.

Both sides often use **different slices of the same data**. Key exam sentence: the conservative turn = a shift in tax-and-regulation thinking whose pros and cons have been argued from 1980 to today — in an answer, lay both sides side by side and **don't pick a side for history**; that's the complexity APUSH wants.`,
        },
        xiaoweiNote: {
          cn: `老师说这张卡的「正确答案」不是某个立场，而是**能不能把两边都摆上桌**。
我的口诀：先写事实（减税 + 放松管制，分两步降税），再写「支持者说 / 批评者说」两句平行的话。`,
          en: `Teacher said the "right answer" for this card isn't a stance — it's whether you can **put both sides on the table**.
My mnemonic: write the facts first (tax cuts + deregulation, two-step rate drop), then two parallel lines: "supporters say / critics say."`,
        },
      },
    },

    {
      id: 'end-of-cold-war',
      termCn: '冷战终结',
      termEn: 'The End of the Cold War',
      storyAnchor: {
        standaloneText: {
          cn: `两个必背画面、两个必背年份：

- **1989 年 11 月 9 日**：分隔东西柏林 28 年的**柏林墙（Berlin Wall）**被人群涌开。冷战走向终结的转折画面。
- **1991 年 12 月**：**Mikhail Gorbachev（戈尔巴乔夫）** 12 月 25 日辞职，苏联 12 月 26 日正式解散。持续约四十年的冷战结束，美国成为唯一的超级大国。

为什么墙倒（多因，别写单因）：
❌「冷战是美国一家施压赢下来的」→
✅ 美国的外交与施压是一面；**东欧内部的民众力量**和**苏联自身的改革与困境**也是关键。大事往往多因促成——这是 DBQ 反复训练的点。

一个常被考的反讽（接回后面的极化卡）：**一种说法**把冷战终结当成自由市场与民主的胜利；**另一种说法**指出，赢了之后，
美国对自己在世界上该扮演什么角色反而陷入新的迷茫，二十年后还陷入了严重的内部分裂。

考点关键句：柏林墙 1989 + 苏联解体 1991 = 冷战终结的两个坐标；墙倒是多因，不是单因。`,
          en: `Two scenes and two years to memorize:

- **November 9, 1989**: the **Berlin Wall**, which split East and West Berlin for 28 years, was pushed open by crowds. The turning-point image of the Cold War's end.
- **December 1991**: **Mikhail Gorbachev** resigned on December 25; the USSR was formally dissolved on December 26. The roughly forty-year Cold War ended, and the US became the sole superpower.

Why the wall fell (multi-cause — don't write a single cause):
❌ "the Cold War was won by US pressure alone" →
✅ US diplomacy and pressure were one factor; the **popular movements inside Eastern Europe** and **the USSR's own reforms and difficulties** were also key. Big events usually have many causes — a recurring DBQ point.

A frequently tested irony (ties to the polarization card later): **one view** treats the Cold War's end as a victory for free markets and democracy; **another view** notes that after winning, the US grew newly uncertain about its role in the world, and twenty years on fell into serious internal division.

Key exam sentence: Berlin Wall 1989 + USSR collapse 1991 = the two coordinates of the Cold War's end; the wall fell from many causes, not one.`,
        },
        xiaoweiNote: {
          cn: `我妈对柏林墙倒有印象，但只记得「美国赢了」。读完才知道东欧民众和苏联内部也是关键。
口诀：墙倒 = 多因，不是「一个人推倒的」。`,
          en: `My mom remembers the wall falling, but only as "America won." After reading I learned the Eastern European public and the USSR's own troubles were key too.
Mnemonic: the wall fell from many causes, not "one person pushing it down."`,
        },
      },
    },

    {
      id: 'globalization-deindustrialization',
      termCn: '全球化与去工业化',
      termEn: 'Globalization & Deindustrialization',
      storyAnchor: {
        standaloneText: {
          cn: `这是贯穿全课的经济主线，也是承受端家庭的故事核心。

两个必背节点：
- **NAFTA**：老布什 1992 年谈成并签署，克林顿签实施法、1994 年 1 月 1 日正式生效，美、加、墨之间贸易壁垒大幅降低。
- **中国入世（WTO accession）**：2001 年 12 月 11 日，中国正式成为 WTO 成员，美中经济从此深度交织。

核心概念：**deindustrialization（去工业化）**——锈带（Rust Belt，五大湖周边曾经的工业带）的工厂陆续裁员、外迁、关停。
2000 到 2010 年间，美国制造业岗位流失约 570 万个（约三分之一）。

同一件事——「把生产搬到更便宜的地方」——在上行者眼里是**效率与机会**，在承受端家庭眼里是**饭碗的流失**。同一件事，两套词。

制造业岗位为什么消失（多因，DBQ 大忌是单因）：
❌「全怪某一个贸易协定或某一位总统」→
✅ 主流研究说是**全球化、自动化、政策多重因素叠加**，近年研究多倾向「两者皆有、难以单独切割」。

考点关键句：NAFTA 1994 + 中国入世 2001 是两个节点；去工业化是多因，不是单因。`,
          en: `This is the economic through-line of the whole unit, and the heart of the receiving-end family's story.

Two nodes to memorize:
- **NAFTA**: took effect January 1, 1994, sharply lowering trade barriers among the US, Canada, and Mexico.
- **China's WTO accession**: on December 11, 2001, China formally joined the WTO, deeply interweaving the US and Chinese economies thereafter.

Core concept: **deindustrialization** — factories in the Rust Belt (the old industrial band around the Great Lakes) laid off, relocated, and closed one after another. Between 2000 and 2010, the US lost roughly 5.7 million manufacturing jobs (about one-third).

The same thing — "moving production somewhere cheaper" — looks like **efficiency and opportunity** to those moving up, and like **lost livelihoods** to families on the receiving end. One event, two vocabularies.

Why manufacturing jobs vanished (multi-cause — single-cause is a DBQ trap):
❌ "blame one trade deal or one president" →
✅ mainstream research says **globalization, automation, and policy stacked together**, and recent work leans toward "both, hard to separate."

Key exam sentence: NAFTA 1994 + China WTO 2001 are two nodes; deindustrialization is multi-cause, not single-cause.`,
        },
        xiaoweiNote: {
          cn: `承受端那一遍最戳我：城边那家工厂，是一家人一班一班看着灯熄下去的。
口诀：同一件事，上行者叫「效率」，承受端叫「我爸的工作没了」。`,
          en: `The receiving-end lens hit hardest: the family watched the factory's lights go dark one shift at a time.
Mnemonic: same event — the upwardly mobile call it "efficiency," the receiving end calls it "my dad's job is gone."`,
        },
      },
    },

    {
      id: 'tech-internet-revolution',
      termCn: '技术 / 互联网革命',
      termEn: 'The Tech / Internet Revolution',
      storyAnchor: {
        standaloneText: {
          cn: `这是和全球化并行的另一条重塑经济版图的力量，AP 常拿它考「技术作为变化的驱动力」。

时间线：1990 年代个人电脑和互联网普及；**2007 年 6 月**第一代 **iPhone** 上市，智能手机时代开启。

它做了什么（接回去工业化卡）：技术把财富和工作进一步推向**科技走廊**（两岸的金融与科技中心），
也进一步**抽离了传统制造业小城**。同一场技术繁荣，是某些地方上行、某些地方凋零的同一个原因之一。

为什么它和去工业化要一起记：制造业岗位消失，**自动化（机器替人）**是和全球化并列的一个原因——
所以「工厂为什么走」这道题，技术既是新经济的引擎，也是旧岗位流失的一部分原因。

考点关键句：互联网 + 智能手机（iPhone 2007）= 重塑经济版图的技术力量；它既造就科技走廊的繁荣，也是去工业化多因之一。`,
          en: `This is the other force, running parallel to globalization, that reshaped the economic map — AP often uses it to test "technology as a driver of change."

Timeline: personal computers and the internet spread in the 1990s; in **June 2007** the first **iPhone** launched, opening the smartphone era.

What it did (ties to the deindustrialization card): technology pushed wealth and jobs further toward the **tech corridors** (the coastal finance and tech hubs), and further **drained traditional manufacturing towns**. The same tech boom is one and the same reason some places rose and others withered.

Why memorize it alongside deindustrialization: in the loss of manufacturing jobs, **automation (machines replacing people)** stands alongside globalization as a cause — so for "why did the factories leave," technology is both the engine of the new economy and part of why old jobs vanished.

Key exam sentence: internet + smartphone (iPhone 2007) = the technological force reshaping the economic map; it both built the tech corridors' boom and was one of deindustrialization's many causes.`,
        },
        xiaoweiNote: {
          cn: `我手里就有部手机，可它背后是「上行的走廊 vs 凋零的小城」这条裂缝。
口诀：技术既是新经济的引擎，也是旧岗位流失的原因之一——所以「工厂为什么走」要写多因。`,
          en: `I'm holding a phone right now, yet behind it is the crack of "rising corridors vs. withering towns."
Mnemonic: tech is both the engine of the new economy and one cause of lost jobs — so "why the factories left" needs multiple causes.`,
        },
      },
    },

    {
      id: 'september-11-war-on-terror',
      termCn: '9/11 与反恐战争',
      termEn: '9/11 & the War on Terror',
      storyAnchor: {
        standaloneText: {
          cn: `这是当代美国最深的一道集体创伤，也是退伍军人视角的起点——这张卡里有事实、也有 contested 的评价，我**分两层**写。

事实骨架（无争议、必背）：
- **2001 年 9 月 11 日**，劫机者撞击纽约世贸双塔与五角大楼，约 **2,977 人**遇难。
- 同年 **10 月 7 日**出兵**阿富汗**（Afghanistan）。
- **2003 年 3 月**出兵**伊拉克**（Iraq）；出兵理由（大规模杀伤性武器）后来**未被证实**，引发巨大争议——「理由后引争议」是**事实陈述**。

然后是评价那一层——**这一层必须两面并排，因为它是全 topic 党派风险最高的一处**：
- **支持出兵的人说**：这是反恐、是保护美国安全的延伸。
- **反对的人说**：战争太久、代价太重、理由有争议。

退伍军人视角的设计本身就是中性的「结构保险」：他既见过这场战争**有意义的一面**（战友、保护身边人的具体责任），也见过它**沉重的代价**（伤亡、漫长、目标一变再变）——他**两边都站过**。

考点关键句：9/11（2001）= 集体创伤 + 阿富汗 2001 / 伊拉克 2003 两场战争；战争的**评价**两边都站得住，答题不预设哪边正确。`,
          en: `This is contemporary America's deepest collective trauma and the starting point of the veteran lens — this card holds both facts and contested judgment, so I write it in **two layers**.

Factual skeleton (uncontested, memorize):
- On **September 11, 2001**, hijackers struck the World Trade Center towers in New York and the Pentagon; about **2,977 people** died.
- On **October 7** of that year the US invaded **Afghanistan**.
- In **March 2003** the US invaded **Iraq**; the stated reason (weapons of mass destruction) was later **not verified**, drawing enormous controversy — "the reason later drew controversy" is a **factual statement**.

Then the judgment layer — **this layer must hold both sides, because it's the highest partisan-risk point in the whole unit**:
- **Those who supported the invasions say** it was counterterrorism, an extension of protecting US security.
- **Those who opposed say** the wars ran too long, cost too much, and rested on contested reasons.

The veteran lens is itself a neutral "structural safeguard": he saw both the war's **meaningful side** (comrades, the concrete duty to protect those beside him) and its **heavy cost** (casualties, length, shifting goals) — he **stood on both sides**.

Key exam sentence: 9/11 (2001) = collective trauma + two wars, Afghanistan 2001 / Iraq 2003; the **judgment** of the wars holds on both sides — don't presume which side is right.`,
        },
        xiaoweiNote: {
          cn: `退伍军人那一遍教我一件事：一个人可以**同时**看见一件事有意义、又看见它代价沉重。
口诀：「理由后引争议」是事实；「这仗值不值」是评价——评价那层，两边都要写。`,
          en: `The veteran lens taught me one thing: a person can **at once** see something as meaningful and see its cost as heavy.
Mnemonic: "the reason later drew controversy" is fact; "was the war worth it" is judgment — for the judgment layer, write both sides.`,
        },
      },
    },

    {
      id: 'great-recession-2008',
      termCn: '2008 金融危机 / 大衰退',
      termEn: 'The 2008 Financial Crisis / Great Recession',
      storyAnchor: {
        standaloneText: {
          cn: `这是承受端家庭挨的最重一拳，也是一张 contested 的成因卡——我**事实和成因分开**写。

事实骨架（无争议、必背）：
- **2008 年 9 月 15 日**，投资银行 **Lehman Brothers** 破产，引爆全球金融海啸（美史最大破产案）。
- 大衰退（**Great Recession**，2007 年 12 月-2009 年 6 月）里，美国约失去 **870 万**个工作岗位，失业率 2009 年 10 月一度冲到 **10%**。
- 承受端家庭的房子、退休账户、工作一起挨打。

成因那一层——**两本账至今没合，必须中立并排，不暗示哪个是「真因」**：
- **一种说法**把账算在**华尔街的贪婪和监管缺位**上。
- **另一种说法**算在**过度借贷与政策激励**上。

这正对应金融危机调查委员会报告里的**多数意见 vs 异议**——是真实存在的两种主流归因。
清坑（§10 第 5 条）：❌「2008 只是华尔街的错」或「只是借款人的错」→ ✅ 监管、金融创新、激励机制、个体行为都牵涉其中，两边各执一账。

考点关键句：Lehman 2008 + 大衰退（870 万岗位 / 失业率 10%）是事实；**成因是争议的两本账**，答题两边并排、不下定论。`,
          en: `This is the hardest blow the receiving-end family took, and a contested-cause card — so I write **facts and causes separately**.

Factual skeleton (uncontested, memorize):
- On **September 15, 2008**, investment bank **Lehman Brothers** went bankrupt, igniting a global financial crash (the largest bankruptcy in US history).
- In the **Great Recession** (December 2007-June 2009), the US lost about **8.7 million** jobs, and unemployment spiked to **10%** in October 2009.
- The receiving-end family's house, retirement account, and jobs were hit together.

The cause layer — **the two ledgers still don't reconcile, so present them neutrally side by side, hinting at no "true cause"**:
- **One view** puts it on **Wall Street greed and a regulatory gap**.
- **Another view** puts it on **over-borrowing and policy incentives**.

This maps onto the Financial Crisis Inquiry Commission report's **majority opinion vs. dissent** — two genuinely existing mainstream explanations.
Clearing the trap (§10 #5): ❌ "2008 was only Wall Street's fault" or "only the borrowers' fault" → ✅ regulation, financial innovation, incentives, and individual behavior were all involved; each side keeps its own ledger.

Key exam sentence: Lehman 2008 + the Great Recession (8.7M jobs / 10% unemployment) are facts; the **cause is two contested ledgers** — lay both sides side by side and reach no verdict.`,
        },
        xiaoweiNote: {
          cn: `承受端那家的退休账户被冲掉一半——这是「事实」。「谁的错」是另一层，那层我不替历史结案。
口诀：2008 的事实很稳，2008 的成因有两本账，并排写。`,
          en: `That family's retirement account was cut in half — that's "fact." "Whose fault" is another layer, and I don't close the case for history there.
Mnemonic: 2008's facts are solid; 2008's causes are two ledgers — write them side by side.`,
        },
      },
    },

    {
      id: 'obama-2008',
      termCn: '奥巴马当选 2008',
      termEn: 'Obama Elected 2008',
      storyAnchor: {
        standaloneText: {
          cn: `这是一个世界史里的「第一」，是**史实里程碑**，必背年份和意义。

事实骨架（无争议、必背）：
- **2008 年 11 月 4 日**，**Barack Obama（奥巴马）** 当选第 44 任总统。
- **2009 年 1 月 20 日**就职，成为美国历史上**第一位非裔总统**。

为什么它进考点：对很多人，这是一个国家在种族问题上跨出的**历史一步**——这一刻被记入当代美国的集体记忆。
这张卡聚焦的是「首位非裔总统」这个**史实里程碑**本身（一个无争议的事实），而**不是**对他具体政策的评价——政策评价是另一回事，两边各有说法，那不是这张卡要背的。

放进 Period 9 的位置：它就发生在 2008 金融危机最深的那个秋天，两件大事同年——一个国家在经济至暗时刻，也跨出了种族史上的一步。

考点关键句：2008.11 当选 / 2009.01 就职 = 美国第一位非裔总统，一个史实里程碑（不是政策评价）。`,
          en: `This is a world-history "first," a **factual milestone** — memorize the year and its meaning.

Factual skeleton (uncontested, memorize):
- On **November 4, 2008**, **Barack Obama** was elected the 44th president.
- He was inaugurated on **January 20, 2009**, becoming the **first Black president** in US history.

Why it's an exam point: for many, this was a country taking a **historic step** on race — a moment recorded in contemporary America's collective memory.
This card focuses on the **factual milestone** of "first Black president" itself (an uncontested fact), **not** on any judgment of his specific policies — policy judgment is a separate matter with views on both sides, and it's not what this card asks you to memorize.

Where it sits in Period 9: it happened in the same autumn as the deepest point of the 2008 crisis — two big events in one year: in its darkest economic hour, the country also took a step in its racial history.

Key exam sentence: elected Nov 2008 / inaugurated Jan 2009 = the first Black president of the US, a factual milestone (not a policy judgment).`,
        },
        xiaoweiNote: {
          cn: `老师说这张卡背的是「第一位非裔总统」这个事实，不是「他干得好不好」——那是另一回事。
口诀：里程碑（事实）和政策评价（各有说法），分开。`,
          en: `Teacher said this card memorizes the fact "first Black president," not "did he do a good job" — that's a separate matter.
Mnemonic: milestone (fact) and policy judgment (views on both sides) are separate.`,
        },
      },
    },

    {
      id: 'inequality-polarization',
      termCn: '不平等与政治极化',
      termEn: 'Rising Inequality & Political Polarization',
      storyAnchor: {
        standaloneText: {
          cn: `这是 2010 年代至今的主线，也是「冷战赢了之后」那个反讽的落点。

两个并行的趋势：
- **economic inequality（经济不平等）**扩大：上行的科技/金融走廊 vs 凋零的制造业小城，两个世界越拉越开。
- **political polarization（政治极化）**加深：两党、两种美国越来越难对话。极化上升有大量实证支撑。

为什么它接回前面：冷战「赢了」二十年后，赢家自己反而陷入了严重的内部分裂——一个国家在没有外部强敌时，反而更难团结。这是这门课最大的反讽之一。

极化的根源（无共识，多解释并排）：
是**经济不平等**驱动的？是**媒体与技术（社交媒体）**放大的？还是更深的**文化与身份分歧**？学界没有共识——
诚实的做法不是假装有定论，而是把几种解释并排摆好。

考点关键句：2010s 至今 = 不平等扩大 + 极化加深；极化成因**多解释并存、无定论**，这正是「当代史还没结束」的难处。`,
          en: `This is the through-line from the 2010s to today, and where the "after the Cold War was won" irony lands.

Two parallel trends:
- **economic inequality** widened: the rising tech/finance corridors vs. the withering manufacturing towns — two worlds pulling further apart.
- **political polarization** deepened: the two parties, the two Americas, finding it ever harder to talk. The rise in polarization has substantial empirical support.

Why it ties back: twenty years after the Cold War was "won," the winner itself fell into serious internal division — a country without an external rival can find it harder to unite. One of the unit's biggest ironies.

Roots of polarization (no consensus — lay the explanations side by side):
Is it driven by **economic inequality**? Amplified by **media and technology (social media)**? Or by deeper **cultural and identity divides**? Scholars have no consensus —
the honest move isn't to fake a settled answer, but to set several explanations side by side.

Key exam sentence: 2010s to today = widening inequality + deepening polarization; the causes of polarization are **several coexisting explanations with no settled verdict** — exactly the difficulty of "contemporary history isn't over yet."`,
        },
        xiaoweiNote: {
          cn: `这张卡让我想到老师那句「它还活着，所以更要当历史教」。极化的成因没有定论，我就不假装有。
口诀：极化成因 = 多解释并排，别选一个当唯一答案。`,
          en: `This card brings me back to the teacher's line: "it's still alive, so it must be taught as history." Polarization's causes aren't settled, so I won't pretend they are.
Mnemonic: polarization's causes = several explanations side by side; don't pick one as the only answer.`,
        },
      },
    },

    {
      id: 'opioid-crisis',
      termCn: '阿片危机',
      termEn: 'The Opioid Crisis',
      storyAnchor: {
        standaloneText: {
          cn: `这是这场 40 年重组落在承受端最沉默、最沉重的一笔，AP 常拿它考「公共卫生危机的多重成因」。

时间线（三波，必背骨架）：
- **第一波**：1990 年代处方药——**OxyContin** 由 Purdue 于 1995-96 年推出。
- **第二波**：2010 年前后转向**海洛因**。
- **第三波**：2013 年后转向**芬太尼**（fentanyl）。
- 1999 到 2020 年间，约 **56.5 万**美国人死于阿片类药物过量；锈带小城是重灾区之一。

清坑（§10 第 7 条）——这是一道防「单因 + 道德归罪」的题：
❌「阿片危机是吸毒者的个人选择问题」→
✅ 它起于 1990 年代处方药的大规模推广，是**医疗、监管、经济多重因素**叠加的**公共卫生危机**，不是单纯的个人道德问题。

为什么它属于这门课：承受端不只失去工厂和退休账户，还失去了人——主街一家家店熄灯的同时，小城里开始有人因为药物离世。这是重组账单上最重的一行。

考点关键句：阿片危机三波（处方药 1990s → 海洛因 2010 → 芬太尼 2013+）；约 56.5 万逝者；它是**多因的公共卫生危机**，不是个人选择问题。`,
          en: `This is the quietest, heaviest line of the 40-year restructuring landing on the receiving end — AP often uses it to test "the multiple causes of a public-health crisis."

Timeline (three waves, memorize the skeleton):
- **First wave**: 1990s prescription drugs — **OxyContin**, launched by Purdue in 1995-96.
- **Second wave**: a turn to **heroin** around 2010.
- **Third wave**: a turn to **fentanyl** after 2013.
- Between 1999 and 2020, about **565,000** Americans died from opioid overdoses; Rust Belt towns were among the hardest hit.

Clearing the trap (§10 #7) — this is a question guarding against "single cause + moral blame":
❌ "the opioid crisis is a matter of users' personal choices" →
✅ it began with the large-scale marketing of 1990s prescription drugs and is a **public-health crisis** stacking **medical, regulatory, and economic factors** — not simply a question of personal morality.

Why it belongs in this unit: the receiving end lost not only factories and retirement accounts but people — as Main Street's stores went dark one by one, the town began losing people to drugs. The heaviest line on the restructuring's bill.

Key exam sentence: three waves (Rx 1990s → heroin 2010 → fentanyl 2013+); about 565,000 dead; a **multi-cause public-health crisis**, not a matter of personal choice.`,
        },
        xiaoweiNote: {
          cn: `承受端那家不只失去工厂，还失去了人。我提醒自己别把它写成「吸毒者自己的错」——那是踩坑。
口诀：阿片危机是公共卫生危机（多因），不是个人道德问题。`,
          en: `That family lost not just the factory but people. I remind myself not to write it as "the users' own fault" — that's the trap.
Mnemonic: the opioid crisis is a public-health crisis (multi-cause), not a personal-morality issue.`,
        },
      },
    },

    {
      id: 'clinton-era-1990s',
      termCn: '克林顿时代 / 1990 年代',
      termEn: 'The Clinton Era / 1990s',
      storyAnchor: {
        standaloneText: {
          cn: `克林顿时代（1993-2001）是 Period 9 常被跳过、但 APUSH 真题反复考的一段。

事实骨架（无争议、必背）：
- **Bill Clinton** 1993-2001 任第 42 任总统，民主党。
- 经济：1990 年代中后期互联网经济繁荣，政府实现多年财政盈余。
- 立法：**NAFTA** 1994 年 1 月 1 日生效（克林顿任内实施）；**1996 年福利改革法案** 大幅收紧联邦福利资格——支持者称其激励就业，批评者称其削减对最脆弱群体的保护，两面并排。
- 政治：1998 年因 Monica Lewinsky 事件遭众议院**弹劾（impeachment）**，参议院未定罪，克林顿留任。

为什么考它：克林顿时代是「政治中间路线」（Third Way / triangulation）典型，是 conservative turn 中的内部插点。

考点关键句：克林顿 = NAFTA 实施 + 互联网繁荣 + 财政盈余 + 弹劾未定罪；**弹劾是宪法程序，不是下台**。`,
          en: `The Clinton era (1993-2001) is a stretch often skipped but tested repeatedly on actual APUSH exams.

Factual skeleton (uncontested, memorize):
- **Bill Clinton** served as the 42nd president, 1993-2001, Democrat.
- Economically: the mid-to-late 1990s saw an internet-economy boom and the government ran multi-year budget surpluses.
- Legislation: **NAFTA** took effect January 1, 1994 (negotiated and signed by George H. W. Bush in 1992; Clinton signed the implementing legislation and brought it into force); the **1996 welfare reform law (Personal Responsibility and Work Opportunity Reconciliation Act)** sharply tightened federal welfare eligibility — supporters say it incentivized work, critics say it cut protections for the most vulnerable. Both sides side by side.
- Domestic politics: in 1998, over the Monica Lewinsky affair, the House **impeached** Clinton; the Senate did not convict; Clinton remained in office.

Why APUSH tests it: the Clinton era spans the post-Cold-War "unipolar moment" and the internet economic boom, and is the classic example of "Third Way / triangulation" politics — an internal inflection point within the conservative turn from Reagan to George W. Bush.

Key exam sentence: Clinton era = NAFTA enacted + internet boom + budget surplus + impeached but not convicted; **impeachment is a constitutional process, not removal from office**.`,
        },
        xiaoweiNote: {
          cn: `老师说「弹劾不等于下台」是全班每年都有人考错的坑。
口诀：克林顿被弹劾（众议院）、未被定罪（参议院）、留任总统——三步分开记。`,
          en: `Teacher said "impeachment does not equal removal" is the trap someone in every class gets wrong every year.
Mnemonic: Clinton was impeached (House), not convicted (Senate), stayed in office — three steps, keep them separate.`,
        },
      },
    },

    {
      id: 'aca-affordable-care-act',
      termCn: '平价医疗法（ACA / 2010）',
      termEn: 'The Affordable Care Act (ACA / Obamacare, 2010)',
      storyAnchor: {
        standaloneText: {
          cn: `这是 CED 9.5 / 9.6 的高频联邦立法考点，也是 APUSH 里「政府在医疗中角色」之争最集中的案例。

事实骨架（无争议、必背）：
- 正式名称：**Affordable Care Act（ACA）**，2010 年 3 月 23 日奥巴马签署。
- 核心机制：①禁止保险公司因既往病史拒保；②设立保险交易市场（marketplaces）；③扩大 Medicaid 资格。签署前美国约有 **4,600 万人**无医保。
- 最高法院（**NFIB v. Sebelius，2012 年**）裁定 ACA 大部分合宪。

这是 APUSH Rule-0 的典型案例——它是**还活着的争议**，必须两面并排：
- **支持者说**：大幅降低无保险率，保护有既往病史的人，是数十年来最大的医疗扩展。
- **反对者说**：政府强制参保、保费上涨、个人自由受限，是对市场的过度干预。

考点关键句：ACA 2010 = 扩大医保覆盖的联邦立法；**这是 1960 年代 Medicare / Medicaid 之后美国最大幅度的医保立法扩展**，评价两边都有实证支撑。`,
          en: `This is a high-frequency federal legislation exam point under CED 9.5/9.6 — the most concentrated APUSH case study of "government's role in healthcare."

Factual skeleton (uncontested, memorize):
- Full name: **Affordable Care Act (ACA)**, signed by Obama on March 23, 2010.
- Core mechanisms: (1) insurers prohibited from denying coverage for pre-existing conditions; (2) insurance marketplaces established; (3) Medicaid eligibility expanded. Before it passed, roughly **46 million Americans** lacked health insurance.
- Supreme Court (**NFIB v. Sebelius, 2012**) upheld most of the ACA as constitutional.

This is a Rule-0 case — a **still-live controversy** requiring both sides side by side:
- **Supporters say**: sharply reduced the uninsured rate, protected people with pre-existing conditions, the largest expansion of healthcare in decades.
- **Opponents say**: government mandate to carry insurance, rising premiums, restricted personal freedom — excessive government intervention in markets.

Key exam sentence: ACA 2010 = federal legislation expanding health coverage; **the largest expansion of federal health coverage since Medicare/Medicaid in the 1960s**; the judgment holds empirical support on both sides.`,
        },
        xiaoweiNote: {
          cn: `老师说这张卡「背事实、两面写评价」——ACA 的事实很稳（日期 / 机制 / 最高法院裁定），但功过到今天还在吵。
口诀：ACA = 2010 年签署 + 既往病史不得拒保 + NFIB v. Sebelius 2012 年合宪；评价两面并排。`,
          en: `Teacher said this card is "memorize the facts, write both sides of the judgment" — ACA's facts are solid (date / mechanisms / Supreme Court ruling), but its pros and cons are still argued today.
Mnemonic: ACA = signed 2010 + no denial for pre-existing conditions + NFIB v. Sebelius 2012 constitutional; judgment — both sides side by side.`,
        },
      },
    },

    {
      id: 'contemporary-social-movements',
      termCn: '当代社会运动（LGBTQ 平权 / BLM / #MeToo）',
      termEn: 'Contemporary Social Movements (LGBTQ Rights / BLM / #MeToo)',
      storyAnchor: {
        standaloneText: {
          cn: `这是 CED 9.7 的直接考点，Period 9「社会变革从哪来」的三个案例（均作**历史对象**，不站队）：

**LGBTQ 平权**
- **2015 年**：最高法院 **Obergefell v. Hodges** 裁定同性婚姻受第 14 修正案保护，全国合法化。
- 这是自 1969 年 Stonewall 起义以来数十年倡导的司法里程碑。

**Black Lives Matter（BLM）**
- **2013 年**：三位女性发起，起因是 Trayvon Martin 案。
- **2020 年**：George Floyd 之死引发全美大规模抗议；CED 明确列为 Period 9 考点。

**#MeToo**
- **2017 年**：社交媒体广泛传播，揭露工作场所性骚扰，促成多机构政策改变。

三者共同结构（AP 框架）：倡导路径（边缘→主流）、社交媒体动员、与 1960s 民权运动的历史呼应。

考点关键句：Obergefell 2015 + BLM 2013/2020 + #MeToo 2017 = CED 9.7 三考点；「公民社会压力 → 制度回应」变革路径。`,
          en: `This is the direct exam match for CED 9.7, the cluster of case studies for "where social change comes from" in Period 9.

Three movements' factual skeleton (memorize; Rule-0 throughout: these are **historical subjects**, not a call to take sides):

**LGBTQ rights movement**
- In **2015**, the Supreme Court in **Obergefell v. Hodges** ruled that same-sex marriage is protected by the 14th Amendment, legalizing it nationwide.
- This is a legislative/judicial milestone built up over decades of advocacy (since the 1969 Stonewall uprising in New York).

**Black Lives Matter (BLM)**
- Founded in **2013** by Alicia Garza, Patrisse Cullors, and Opal Tometi, sparked by the Trayvon Martin case.
- In **2020**, the death of George Floyd triggered nationwide — and global — large-scale protests, one of the largest protest movements in US history.
- CED explicitly lists BLM as a Period 9 exam point (forming a historical arc with the civil rights movement after Reconstruction).

**#MeToo movement**
- Spread widely on social media in **2017**, surfacing workplace sexual harassment and assault, prompting policy changes in many institutions and legal debate.

Shared structure of these movements (the analytical frame AP likes to test):
(1) the advocacy path from margin to mainstream; (2) social media as a mobilizing tool; (3) historical resonance with and difference from the 1960s civil rights movement.

Key exam sentence: Obergefell 2015 + BLM 2013/2020 + #MeToo 2017 are three CED 9.7 high-frequency Period 9 exam points; together they illustrate the change path of "civil society pressure → institutional response."`,
        },
        xiaoweiNote: {
          cn: `老师说这张卡每个运动都是「历史对象」——我记的是**事实**（日期 / 案例 / 发起人），不是「哪个运动对不对」。
口诀：Obergefell 2015（最高法院）/ BLM 2013 发起 + 2020 高峰 / #MeToo 2017——三条时间线，三个 CED 9.7 考点。`,
          en: `Teacher said every movement in this card is a "historical subject" — what I memorize is **facts** (dates / cases / founders), not "which movement is right."
Mnemonic: Obergefell 2015 (Supreme Court) / BLM founded 2013 + peak 2020 / #MeToo 2017 — three timelines, three CED 9.7 exam points.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题，STRICT Rule-0）──────────────
  // 每一题都能被支持/反对两边各自认真作答，不预设正确的政治答案。
  thinkingQuestions: [
    {
      cn: `美国关掉的工厂，和中国 1978 年改革开放后开起来的工厂，常常是同一条供应链的两头——
一边的「产业转出」，是另一边的「产业转入」。这不是「谁赢谁输」的比赛，而是同一个全球化故事的两半。

如果让你给一个只看过其中一头的人，讲清楚另一头——你会从哪里讲起？
两边各自付出了什么、又得到了什么，才算把这枚硬币的两面都摆上桌？`,
      en: `The factories the US closed and the factories China opened after its 1978 reform and opening
were often two ends of one supply chain — one side's "industry leaving" was the other side's "industry arriving."
This isn't a contest of "who won and who lost"; it's two halves of one globalization story.

If you had to explain one end to someone who has only seen the other, where would you begin?
What did each side give up, and what did each side gain, before you can say you've put both faces of the coin on the table?`,
      hintCn: `提示：这题没有标准答案，也**不是**让你判中美谁强谁弱（那会踩 Rule-0）。AP 看的是你能不能把「两半」并置。
- 美国这头：锈带去工业化、制造业岗位流失约 570 万、小城凋零——但也有上行者搭上新经济的电梯。
- 中国这头：沿海工厂一座座开起来、产业转入——这是它自己处境里的得与失，本课不替它下评语。
- 不少华裔家庭自己就在这条弧线里迁徙——这段历史对正在学的同学可能不是「别人的事」。
高分写法：把两头并排（juxtaposition），承认各有代价与收获，而不是排出谁优谁劣。`,
      hintEn: `Hint: no standard answer, and this is **not** asking you to judge whether the US or China is stronger (that would break Rule-0). AP looks at whether you can juxtapose the "two halves."
- The US end: Rust Belt deindustrialization, about 5.7M manufacturing jobs lost, towns withering — but also people who rode the new economy's escalator up.
- The China end: coastal factories opening one after another, industry arriving — gains and costs within its own context, on which this unit issues no verdict.
- Many Chinese-heritage families migrated along this very arc — for some students this history may not be "someone else's."
High-scoring move: place the two ends side by side (juxtaposition), grant each its costs and gains, rather than ranking one above the other.`,
    },
    {
      cn: `一种说法：一场让整个国家更富、更先进的经济重组，是「值得的进步」，即便有人付出了代价。
另一种说法：一个国家该用它**是否没有抛下自己的人**来评判，而 1980 年后的重组把账单集中压在了某些小城和某些工人身上。

这两种说法你更认同哪一种？为什么另一种说法也有它站得住的理由？
请用这门课里的具体证据（去工业化、2008、阿片危机，或上行走廊的繁荣）支持你的判断。`,
      en: `One view: an economic restructuring that made the whole country richer and more advanced is "progress worth it,"
even if some paid a price.
Another view: a country should be judged by **whether it leaves its own people behind**, and the post-1980 restructuring
concentrated the bill on certain towns and certain workers.

Which do you lean toward, and why does the other view also have a leg to stand on?
Support your judgment with specific evidence from this unit (deindustrialization, 2008, the opioid crisis, or the rising corridors' boom).`,
      hintCn: `提示：好的 DBQ 答案**同时持有两件事**，而不是二选一——这正是 §9 史学界在争的。
- 「值得的进步」一边的证据：整体生活水准与技术前沿抬升、上行者搭上新经济、互联网/智能手机经济。
- 「不该抛下自己人」一边的证据：制造业岗位流失约 570 万、2008 冲掉退休账户、阿片危机约 56.5 万逝者。
两边用的常是同一组数据的不同切面。承认两边都有道理，再说明你为什么更倾向某一边——这叫 complexity，别替历史下最终道德结论（Rule-0）。`,
      hintEn: `Hint: a strong DBQ answer **holds two things at once** rather than choosing one — exactly what historians argue over in §9.
- Evidence for "progress worth it": rising overall living standards and the tech frontier, people riding the new economy, the internet/smartphone economy.
- Evidence for "don't leave your own behind": about 5.7M manufacturing jobs lost, 2008 wiping out retirement accounts, about 565,000 opioid deaths.
Both sides often use different slices of the same data. Acknowledge both have a point, then explain why you lean one way — that's complexity; don't hand history a final moral verdict (Rule-0).`,
    },
    {
      cn: `那位夹在中间的退伍军人，既见过这场战争**有意义的一面**（战友、保护身边人的责任），
也见过它**沉重的代价**（伤亡、漫长、目标一变再变）。回国后，他听到两边为「这仗值不值」激烈争吵。

如果是你，你会怎么开口？一个人**同时**承认一件事有意义、又承认它代价沉重——这是立场不坚定，还是一种更诚实的看见？
请说明你的理由，并避免把这场战争说成「纯粹正确」或「纯粹错误」中的任何一种。`,
      en: `That veteran caught in the middle saw both the war's **meaningful side** (comrades, the duty to protect those beside him)
and its **heavy cost** (casualties, length, shifting goals). Back home, he heard both sides argue fiercely over "was the war worth it."

If you were him, how would you speak? To **at once** grant that something was meaningful and that its cost was heavy —
is that wavering, or a more honest kind of seeing?
Explain your reasoning, and avoid casting the war as either "purely right" or "purely wrong."`,
      hintCn: `提示：这是全 topic 党派风险最高的一题，所以 Rule-0 最严——**不预设哪一方正确**。
- 先把事实层和评价层分开：「出兵理由（WMD）后来未被证实、引发争议」是**事实**；「这仗值不值」是**评价**。
- 支持出兵的人说：反恐、保护美国安全的延伸。反对的人说：战争太久、代价太重、理由有争议。两边都真实存在。
- 退伍军人「两边都站过」本身就是中性的结构保险——他证明一个人可以同时看见意义与代价。
AP 要的是你能不能把两面都摆上桌，再谈你的权衡，而不是替历史选边。`,
      hintEn: `Hint: this is the highest partisan-risk question in the unit, so Rule-0 is strictest — **presume no side is right**.
- First separate the fact layer from the judgment layer: "the stated reason (WMD) was later unverified and drew controversy" is **fact**; "was the war worth it" is **judgment**.
- Supporters said it was counterterrorism, an extension of protecting US security. Opponents said the war ran too long, cost too much, rested on contested reasons. Both genuinely exist.
- The veteran "standing on both sides" is itself a neutral structural safeguard — he shows a person can see meaning and cost at once.
AP wants you to put both faces on the table and then discuss your weighing, not to pick a side for history.`,
    },
    {
      cn: `老师说，这门课最难的地方，是它**还没结束**——我们身在其中，缺少时间的距离，很多事还没有定论
（极化为什么这么深？2008 到底谁的错？战争该怎么评价？学界都还在争）。

既然连大人都还在为这些事吵架、连学者都还没共识，那么一段「还活着」的历史，到底还能不能、又该怎么被当成「历史」来学？
请说明，把它当历史学（给视角、给两边证据、不下结论），和直接为它站队，差别在哪里。`,
      en: `Teacher said the hardest thing about this unit is that it **isn't over** — we're inside it, lacking the distance of time,
and much isn't settled (why is polarization so deep? whose fault was 2008, really? how should the wars be judged? scholars still argue).

If even grown-ups still fight over these things and even scholars have no consensus, can a "still-alive" history be studied as "history" at all — and how?
Explain the difference between studying it as history (giving lenses, giving both sides' evidence, reaching no verdict) and simply taking a side on it.`,
      hintCn: `提示：这题问的是「方法」，不是「立场」——所以它本身就是 Rule-0 的练习。
- 「当历史学」的样子：把几种解释并排（极化的经济/媒体/文化三说）、把支持者与批评者两句平行地摆出来、承认「我们今天还看不全」。
- 「直接站队」的样子：先认定一个党派结论，再只挑支持它的证据。
- 关键对照：诚实的做法不是假装有定论，而是把两面都摆好，留出时间的距离。
没有标准答案——AP 看你能不能说清「分析」和「站队」的差别，而不是看你选了哪一边。`,
      hintEn: `Hint: this asks about "method," not "stance" — so it's itself a Rule-0 exercise.
- What "studying it as history" looks like: setting several explanations side by side (polarization's economic / media / cultural readings), laying supporters' and critics' lines out in parallel, admitting "we can't see it all yet today."
- What "just taking a side" looks like: fixing on a partisan conclusion first, then cherry-picking only the evidence that supports it.
- Key contrast: the honest move isn't to fake a settled answer, but to lay out both faces and leave room for the distance of time.
No standard answer — AP looks at whether you can articulate the difference between "analysis" and "taking sides," not which side you picked.`,
    },
  ],
};

export default notebook;
