// ─── 同伴笔记本架构 v1 · French Revolution & Napoleon 1789-1815 ──────────
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
// 课纲对齐：
//   - AP World History Modern KC-5.1, 5.1.II, 5.2, 5.3（Atlantic Revolutions）
//   - AP European History Unit 5（The French Revolution and Napoleon）
//   - California HSS 10.2.3, 10.2.4
//
// 事实对账本 (french-revolution-1789-factledger.md)：
//   - Robespierre 废死刑主张系 1791.6 制宪议会，非"1789 革命刚起"——本笔记按 1791 写
//   - "让他们吃蛋糕"是后世附会的伪引语——主动辟谣，绝不写回
//   - Gouges 死于政治立场（反雅各宾/同情吉伦特），不是"因要求女权获罪"
//   - 文化对应硬禁（narrative kernel §8 只做结构并列，不类比、不下高低结论）
//
// schemaVersion: 1 · notebookVersion: french-revolution-1789-v1

export var notebook = {
  topicId: 'french-revolution-1789',
  topicNameCn: '法国大革命与拿破仑',
  topicNameEn: 'The French Revolution & Napoleon',
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
    cn: `今天老师说我们要学法国大革命（1789-1815）。她在白板上写了一串名字和词，让我们先抄下来：

人名：Robespierre（罗伯斯庇尔）、Lafayette（拉法耶特）、Olympe de Gouges（古热）、
Louis XVI（路易十六）、Napoleon（拿破仑）

事件 / 术语：Estates-General（三级会议）、Three Estates（三个等级）、
Storming of the Bastille（攻占巴士底狱）、Declaration of the Rights of Man（人权宣言）、
constitutional monarchy（君主立宪）、Reign of Terror（恐怖统治）、
Jacobins（雅各宾派）、Napoleonic Code（拿破仑法典）

我先记下来，等下读三个故事——Robespierre、Lafayette、还有一个巴黎洗衣女工——
读完再回来对照这张单子，看我能不能解释这些词。

老师说了一句我写在第一页的话："这门课最容易被讲成'好人推翻坏国王'。
别这么记。要记的是：同一场革命，怎么一只手写下'人人生而自由'，
另一只手又造出一台杀人无数的断头台。"

她还提醒我们：这一课和启蒙运动那段历史是连着的——
启蒙哲人写的那些"自然权利""社会契约"，到这里第一次变成了真刀真枪的政治实验。`,
    en: `Today my teacher said we're learning the French Revolution (1789-1815).
She wrote a string of names and terms on the board for us to copy down:

People: Robespierre, Lafayette, Olympe de Gouges, Louis XVI, Napoleon

Events / terms: Estates-General, Three Estates, Storming of the Bastille,
Declaration of the Rights of Man, constitutional monarchy, Reign of Terror,
Jacobins, Napoleonic Code

Let me write these down. After I read the three stories — Robespierre, Lafayette,
and a Paris washerwoman — I'll come back and check whether I can explain each one.

Teacher said one thing I wrote on the first page: "This unit gets told most easily
as 'good people overthrow a bad king.' Don't remember it that way. What you should
remember is: how the same revolution, with one hand, wrote 'all men are born free,'
and with the other hand built a guillotine that killed without number."

She also reminded us: this topic connects to the Enlightenment topic — those
"natural rights" and "social contract" the philosophers wrote about become,
here, a real political experiment with real blades for the first time.`,
    keyTerms: [
      { cn: '三个等级（旧制度）', en: 'Three Estates (Ancien Régime)' },
      { cn: '三级会议', en: 'Estates-General' },
      { cn: '人民主权', en: 'popular sovereignty' },
      { cn: '君主立宪', en: 'constitutional monarchy' },
      { cn: '共和国', en: 'republic' },
      { cn: '恐怖统治', en: 'Reign of Terror' },
      { cn: '自由·平等·博爱', en: 'liberté, égalité, fraternité' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '马克西米连·罗伯斯庇尔',
        nameEn: 'Maximilien Robespierre',
        ipa: '/ˈroʊbzpjɛər/',
        roleCn: '雅各宾派领袖，恐怖统治核心，「不可腐蚀者」',
        roleEn: 'Jacobin leader, central figure of the Terror, "the Incorruptible"',
        mustKnow: true,
        audioKey: 'robespierre',
      },
      {
        nameCn: '奥兰普·德·古热',
        nameEn: 'Olympe de Gouges',
        ipa: '/ɔlɛ̃p də ɡuʒ/',
        roleCn: '《女权宣言》作者，1793 死于革命断头台',
        roleEn: 'author of the Declaration of the Rights of Woman, executed 1793',
        mustKnow: true,
        audioKey: 'olympe-de-gouges',
      },
      {
        nameCn: '拿破仑·波拿巴',
        nameEn: 'Napoleon Bonaparte',
        ipa: '/nəˈpoʊliən ˈboʊnəpɑːrt/',
        roleCn: '革命战争名将，1799 政变、1804 称帝，颁布《拿破仑法典》',
        roleEn: 'general of the revolutionary wars; 1799 coup, 1804 emperor, issued the Napoleonic Code',
        mustKnow: true,
        audioKey: 'napoleon',
      },
      {
        nameCn: '拉法耶特侯爵',
        nameEn: 'Marquis de Lafayette',
        ipa: '/ˌlɑːfaɪˈɛt/',
        roleCn: '跨美法两场革命的贵族自由派，参与起草《人权宣言》',
        roleEn: 'noble liberal across the American and French revolutions, helped draft the Declaration of the Rights of Man',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '路易十六',
        nameEn: 'Louis XVI',
        ipa: '/ˈluːi ðə ˌsɪksˈtiːnθ/',
        roleCn: '被迫召开三级会议的国王，1793 被处死',
        roleEn: 'king forced to summon the Estates-General, executed 1793',
        mustKnow: true,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'three-estates-estates-general',
      termCn: '三个等级 / 三级会议',
      termEn: 'Three Estates / Estates-General',
      defCn: '旧制度把法国人分成三个等级。第一等级是教士，第二等级是贵族，第三等级是其他所有人——占全国约 98%。三级会议是国王召集三个等级开会商量国事的制度，1614 年停开，1789 年被迫重开，直接引发了大革命。',
      defEn: 'The old system divided France into three estates. The First Estate was the clergy, the Second was the nobility, and the Third was everyone else — about 98% of the country. The Estates-General was the assembly where the king called all three estates together. It had not met since 1614; when Louis XVI forced it to reconvene in 1789, it sparked the Revolution.',
      standardRef: ['AP World KC-5.1', 'AP Euro Unit 5', 'CA HSS 10.2.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'robespierre',
        nodeIds: ['rob-n2'],
        xiaoweiNote: {
          cn: `这个我读过！Robespierre 那条故事线第 2 节讲得很清楚。

旧制度（Ancien Régime）把法国人分成三个等级：
- 第一等级（First Estate）= 教士
- 第二等级（Second Estate）= 贵族
- 第三等级（Third Estate）= 其他所有人——商人、农民、工人，占全国约 98%

**最不公平的地方**：前两个等级几乎不交税，却占着大半土地和特权。第三等级养着整个国家，却几乎没有政治权力。

1789 年，国王 Louis XVI 缺钱缺到快破产，被迫召开停了快 175 年的三级会议（Estates-General）想凑钱。可第三等级不干了：凭什么交税最多，投票却最不算数？1789 年 6 月他们干脆自立"国民议会"（National Assembly），宣誓要给法国写一部宪法——这叫"网球场宣誓"（Tennis Court Oath）。

考点关键句：法国大革命的导火索是**财政危机 + 等级不公 + 面包饥荒**三层叠加，不是单一原因。三级会议从"国王凑钱的会"变成"第三等级要权的会"——这一步就是革命的起点。`,
          en: `I read this! Robespierre's story line,, lays it out clearly.

The Ancien Régime split France into three estates:
- First Estate = the clergy
- Second Estate = the nobility
- Third Estate = everyone else — merchants, farmers, workers, about 98% of the country

**The unfair part**: the first two estates paid almost no taxes yet held most of the land and privileges. The Third Estate fed the whole nation but had almost no political power.

In 1789 King Louis XVI was so short of money he was near bankruptcy, and was forced to summon the Estates-General — which hadn't met in nearly 175 years — to raise funds. But the Third Estate refused: why should those who paid the most have the votes that counted the least? In June 1789 they formed their own National Assembly and swore to write France a constitution. That oath is called the Tennis Court Oath.

Key exam sentence: the trigger of the French Revolution was **fiscal crisis + estate inequality + bread famine** stacked together, not one single cause. The Estates-General turned from "the king's fundraising meeting" into "the Third Estate's demand for power" — that step is the start of the Revolution.`,
        },
      },
    },

    {
      id: 'storming-bastille-1789',
      termCn: '攻占巴士底狱 / 1789',
      termEn: 'Storming of the Bastille / 1789',
      defCn: '1789 年 7 月 14 日，巴黎市民冲进了一座叫巴士底（Bastille）的旧监狱。那座监狱象征着国王的专制权力。攻陷它标志着旧秩序挡不住了。这一天后来成了法国国庆日（Bastille Day）。',
      defEn: 'On July 14, 1789, Parisian citizens stormed an old prison called the Bastille. The prison was a symbol of royal tyranny. Its fall signaled that the old order could no longer hold. This day later became France\'s national holiday, Bastille Day.',
      standardRef: ['AP World KC-5.2', 'AP Euro Unit 5', 'CA HSS 10.2.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'paris-washerwoman',
        nodeIds: ['pw-n3', 'rob-n3'],
        xiaoweiNote: {
          cn: `三个故事的第 3 节都讲到了，洗衣女工那条线讲得最有画面感——她当时就挤在人群里。

时间：**1789 年 7 月 14 日**。巴黎人攻占了一座叫巴士底（Bastille）的旧监狱。那座监狱是王权的象征，攻陷它意味着"旧秩序挡不住了"。这一天后来成了法国国庆日（Bastille Day）。

这里有一个老师特别强调的"清坑点"——选择题最爱挖的陷阱：
❌ "攻巴士底是为了解放里面成百上千的政治犯"
✅ 攻陷那天，巴士底里其实只关了 **7 名囚犯**。人群冲进去主要是为了抢里面的**火药和武器**，因为他们怕、饿、受够了——不是冲着"自由"这两个抽象的字去的。

考点关键句：攻巴士底的真实动机是恐惧 + 饥饿 + 找武器自卫。"解放政治犯"是后人浪漫化的误读。AP 喜欢用这个考"史实 vs 神话"的区分。`,
          en: `Node 3 in all three stories covers this. The washerwoman's line is the most vivid — she was packed right into the crowd.

Date: **July 14, 1789.** The people of Paris stormed an old prison called the Bastille. That prison was a symbol of royal power, and its fall meant "the old order can no longer hold." This day later became France's national holiday, Bastille Day.

Here's a "trap-clearing" point my teacher stressed — the favorite multiple-choice trap:
❌ "They stormed the Bastille to free hundreds of political prisoners inside."
✅ On the day it fell, the Bastille actually held only **7 prisoners**. The crowd surged in mainly to seize the **gunpowder and weapons** inside, because they were afraid, hungry, and had had enough — not for the abstract word "liberty."

Key exam sentence: the real motive was fear + hunger + seizing weapons for self-defense. "Freeing political prisoners" is a later romanticized misreading. AP loves to use this to test "fact vs. myth."`,
        },
      },
    },

    {
      id: 'declaration-rights-of-man',
      termCn: '《人权宣言》',
      termEn: 'Declaration of the Rights of Man',
      defCn: '1789 年 8 月 26 日，法国国民议会发布的《人权和公民权宣言》。第 1 条写着："人生来且始终是自由的，权利平等。"它把启蒙思想第一次写成一个国家的正式法律文件。但"人"从一开始只指男性公民，不包括女性和穷人。',
      defEn: 'The Declaration of the Rights of Man and of the Citizen, issued by France\'s National Assembly on August 26, 1789. Article 1 states: "Men are born and remain free and equal in rights." It was the first time Enlightenment ideas were written into a nation\'s official legal document. However, "Men" meant only male citizens from the start, excluding women and the poor.',
      standardRef: ['AP World KC-5.2', 'AP Euro Unit 5', 'CA HSS 10.2.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['rob-n3', 'laf-n3', 'pw-n6'],
        xiaoweiNote: {
          cn: `这个三条线都提到了。Robespierre 在第 3 节读它读到入迷，Lafayette 在第 3 节说是他亲手参与起草的，洗衣女工在第 6 节说"这里头根本没打算算上我们女人"。

时间：**1789 年 8 月**（8 月 26 日通过）。国民议会发布《人权宣言》（Declaration of the Rights of Man and of the Citizen）。
第 1 条原文："Men are born and remain free and equal in rights."
（人生来且始终是自由的，权利平等。）

这份文件不是凭空来的——它直接把启蒙思想写成了法律：
1. Locke（洛克）："自然权利"（生命、自由、财产）+ "政府权力来自人民同意"。
2. Rousseau（卢梭）："主权在民 / 人民主权"（第 3 条）。
3. Montesquieu（孟德斯鸠）："三权分立"。

（这套话你跑过启蒙运动那段历史就认得。）Lafayette 起草时还借鉴了美国《独立宣言》——他在美国独立战争里当过华盛顿的副手。

考点关键句：《人权宣言》是启蒙思想**第一次被写成一国正式法律文件**，是大西洋革命跨大洋传播理念的关键一环。

但是要注意——也是这一课的核心：那个"Men / 人"，从一开始就只指男性公民，不包括女性、穷人、奴隶。这就引出了下一张卡的 Gouges。`,
          en: `All three lines mention this. Robespierre reads it obsessively in, Lafayette in says he helped draft it with his own hand, and the washerwoman in says "the word never planned to count us women in at all."

Date: **August 1789** (passed August 26). The National Assembly issued the Declaration of the Rights of Man and of the Citizen.
Article 1: "Men are born and remain free and equal in rights."

This document didn't come from nowhere — it wrote Enlightenment thought directly into law:
1. Locke's "natural rights" (life, liberty, property) + "government power comes from the consent of the people."
2. Rousseau's "popular sovereignty" (Article 3).
3. Montesquieu's "separation of powers."

You'll recognize this language if you went through the Enlightenment topic. When Lafayette drafted it he also drew on the American Declaration of Independence — he had been Washington's aide in the American War of Independence.

Key exam sentence: the Declaration is the **first time** Enlightenment thought was written into a nation's official legal document — a key link in the Atlantic Revolutions spreading ideas across the ocean.

But here's what to watch: that "Men" only meant male citizens from the start, excluding women, the poor, and the enslaved. That leads straight into the next card, Gouges.`,
        },
      },
    },

    {
      id: 'constitutional-monarchy-to-republic',
      termCn: '君主立宪 → 共和国',
      termEn: 'Constitutional Monarchy → Republic',
      defCn: '君主立宪（constitutional monarchy）是指保留国王，但用一部宪法限制国王的权力。共和国（republic）是指没有国王，权力归人民和他们选出的代表。法国大革命先走君主立宪，再走共和，最后走到帝制。',
      defEn: 'A constitutional monarchy keeps a king but limits his power with a written constitution. A republic has no king — power belongs to the people and their elected representatives. The French Revolution moved first toward constitutional monarchy, then a republic, and eventually an empire.',
      standardRef: ['AP World KC-5.2', 'AP Euro Unit 5', 'CA HSS 10.2.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'lafayette',
        nodeIds: ['laf-n3', 'laf-n7', 'rob-n5', 'pw-n7'],
        xiaoweiNote: {
          cn: `Lafayette 那条故事线就是这张卡最好的人证——他一辈子想要的就是"君主立宪"。

革命不是一步到位推翻国王的，它分两个阶段：

① **君主立宪（constitutional monarchy）阶段**（1789-1792）：一开始大多数人，包括 Lafayette，想的是**保留国王，但用一部宪法把国王的权力关进笼子里**——既要自由，也要秩序，走美国那条路。

② **共和国（republic）阶段**（1792 起）：革命越走越激进。1792 年 8 月君主制被推翻，9 月成立共和国。**1793 年 1 月 21 日，路易十六（Louis XVI）被送上断头台**——革命从"改革君主制"走到了"弑君共和"。

Lafayette 卡在这个转折里：他想保住君主立宪、保护国王不被杀，结果激进派骂他叛徒、保王派骂他乱党。1792 年被宣布叛国，逃出国境又被关了五年。

考点关键句：法国大革命的政体演变是**君主立宪 → 共和 → （后来）拿破仑帝国**，不是直线进步，是一路向极端滑。处死国王（regicide，弑君）是不可逆的转折点。`,
          en: `Lafayette's story line is the best human proof for this card — "constitutional monarchy" is what he wanted his whole life.

The Revolution didn't overthrow the king in one step. It went in two phases:

① **Constitutional monarchy phase** (1789-1792): at first most people, including Lafayette, wanted to **keep the king but lock his power in a cage with a constitution** — liberty and order both, walking America's road.

② **Republic phase** (from 1792): the Revolution grew more radical. In August 1792 the monarchy was overthrown, and in September the Republic was founded. **On January 21, 1793, Louis XVI was sent to the guillotine** — the Revolution went from "reforming the monarchy" to "killing the king and founding a republic."

Lafayette is stuck in this turn: he wanted to save the constitutional monarchy and protect the king from being killed, and ended up cursed as a traitor by the radicals and a rebel by the royalists. He was declared a traitor in 1792, fled the country, and was jailed for five years.

Key exam sentence: the Revolution's path of government was **constitutional monarchy → republic → (later) Napoleon's empire** — not straight-line progress, but a slide toward extremes. The execution of the king (regicide) was the irreversible turning point.`,
        },
      },
    },

    {
      id: 'reign-of-terror-robespierre-jacobins',
      termCn: '恐怖统治 / 罗伯斯庇尔 / 雅各宾派',
      termEn: 'Reign of Terror / Robespierre / Jacobins',
      defCn: '恐怖统治（Reign of Terror，1793-1794）是法国大革命最血腥的阶段。雅各宾派（Jacobins）是 Robespierre 领导的激进派，掌控公安委员会。他们颁布法令，凭"怀疑"就能把人送上断头台。一年多里全法国约几万人被处死。',
      defEn: 'The Reign of Terror (1793-1794) was the bloodiest phase of the French Revolution. The Jacobins, the radical faction led by Robespierre, controlled the Committee of Public Safety. They passed laws that allowed the government to arrest and execute people on mere suspicion. In a little over a year, tens of thousands across France were killed.',
      standardRef: ['AP World KC-5.2', 'AP Euro Unit 5', 'CA HSS 10.2.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'robespierre',
        nodeIds: ['rob-n5', 'rob-n7', 'rob-n8'],
        xiaoweiNote: {
          cn: `这就是 Robespierre 整条故事线的核心。我读完有点发冷——他不是个坏人，这才最吓人。

先记三个名词的关系（老师说这三个一定要分清）：
- **雅各宾派（Jacobins）**= Robespierre 领导的激进派。
- **吉伦特派（Girondins）**= 较温和的共和派，后来被雅各宾派清洗掉。
- **公安委员会（Committee of Public Safety）**= 1793 年掌握实权的机构，Robespierre 是核心。

**恐怖统治（Reign of Terror，1793-1794）**：公安委员会通过《嫌疑犯法令》（Law of Suspects），凭"怀疑"就能抓人、审人、送上断头台——不需要确凿证据。断头台天天在巴黎广场上落下：先杀国王（1793.1）、王后，再杀政敌、贵族、神父，最后连革命阵营里跟 Robespierre 意见不同的同志也一个个上了断头台。一年多里全法国约**几万人**被处死。1794 年 7 月（热月政变），Robespierre 自己也被送上了那台断头台，年 36 岁。

⚠️ 对账本提醒：Robespierre 主张废除死刑是 **1791 年在制宪议会**说的，不是"1789 革命刚起"。一个 1791 年想废死刑的人，1793 年成了恐怖统治核心——**这个反差才是考点的劲道**。

考点关键句：Robespierre 以**清廉著称**（"不可腐蚀者"），他不是为钱、为权杀人，是**"为了最纯洁的理想"杀人**——这比"坏人作恶"更值得警惕。他的逻辑："对敌人仁慈，就是对人民残忍。"`,
          en: `This is the heart of Robespierre's whole story line. I felt a chill reading it — he wasn't a bad man, and that's the scariest part.

First, the relationship among three terms (teacher says you must keep these straight):
- **Jacobins** = the radical faction led by Robespierre.
- **Girondins** = the more moderate republicans, later purged by the Jacobins.
- **Committee of Public Safety** = the body that held real power in 1793, with Robespierre at its center.

**Reign of Terror (1793-1794)**: the Committee passed the Law of Suspects, under which mere "suspicion" was enough to arrest, try, and guillotine someone — no firm proof needed. The guillotine fell daily in the squares of Paris: first the king (Jan 1793), the queen, then political rivals, nobles, priests, and at last even comrades within the revolutionary camp who disagreed with Robespierre. In a little over a year, some **tens of thousands** across France were executed. In July 1794 (the Thermidorian Reaction), Robespierre himself was sent to that same guillotine, at age 36.

⚠️ Fact check: Robespierre's argument to abolish the death penalty was made **in the Constituent Assembly in 1791**, not "as the Revolution first broke out." A man who wanted to abolish the death penalty in 1791 became the core of the Terror by 1793 — **that contrast is where the exam punch lives.**

Key exam sentence: Robespierre was **famous for his integrity** ("the Incorruptible"). He killed not for money or power but **"for the purest ideal"** — which is more chilling than "a villain doing evil." His logic: "mercy to the enemy is cruelty to the people."`,
        },
      },
    },

    {
      id: 'gouges-women-rights',
      termCn: 'Olympe de Gouges / 女性权利',
      termEn: 'Olympe de Gouges / Women\'s Rights',
      defCn: 'Olympe de Gouges（奥兰普·德·古热，1748-1793）是法国剧作家、共和派和废奴主义者。1791 年她写了《女权宣言》（Declaration of the Rights of Woman），把《人权宣言》里的"人"明确扩展到女性。1793 年 11 月 3 日她被送上断头台，罪名是政治立场，不是要求女权。',
      defEn: 'Olympe de Gouges (1748-1793) was a French playwright, republican, and abolitionist. In 1791 she wrote the Declaration of the Rights of Woman, extending the word "Men" in the Declaration of the Rights of Man to women. On November 3, 1793, she was sent to the guillotine. The charge was her political stance, not her demand for women\'s rights.',
      standardRef: ['AP World KC-5.1', 'AP Euro Unit 5', 'CA HSS 10.2.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['rob-n6', 'laf-n6', 'pw-n6'],
        xiaoweiNote: {
          cn: `三条故事线的第 6 节都写到她——她是这一课三条线里共同指向的人物。她的完整故事在启蒙运动那段历史里。

她是谁：Olympe de Gouges（古热），法国剧作家、共和派、废奴主义者。1791 年她写《女权宣言》（Declaration of the Rights of Woman），把《人权宣言》里的"Men / 人"明明白白扩到女人身上，证明那个时代的"人权"根本没算上女性。她的名言（第 10 条原文）："女人有权走上断头台，就该同样有权走上讲台。"

1793 年 11 月 3 日，她真的走上了断头台。

⚠️ AP 高频陷阱：她被处死的罪名是**政治立场**——反雅各宾、同情吉伦特派、主张处死国王要经全民公投——**不是"因为要求女权获罪"**。但她的死亡方式（断头台）和她自己写下的第 10 条，形成了历史上最讽刺的自我印证。选择题如果问"Gouges 为什么被处决"，选"政治立场 / 反革命罪"，别选"要求女权"。

考点关键句：Gouges 用启蒙运动和革命**自己的语言**（natural rights, equality）来批判它对女性的排除——这叫"用同一套语言打回去"。她常和英国的 Mary Wollstonecraft（1792《女权辩护》）成对考。`,
          en: `Node 6 in all three story lines points at her — she's the figure all three lines share. Her full story is in the Enlightenment topic.

Who she is: Olympe de Gouges, French playwright, republican, abolitionist. In 1791 she wrote the Declaration of the Rights of Woman, extending the "Men" in the Declaration of the Rights of Man plainly to women, proving the era's "human rights" never counted women at all. Her famous line (Article 10): "A woman has the right to mount the scaffold; she must equally have the right to mount the rostrum."

On November 3, 1793, she truly mounted the scaffold.

⚠️ AP high-frequency trap: the charge for her execution was a **political stance** — anti-Jacobin, sympathy for the Girondins, arguing the king's death required a popular vote — **NOT "convicted for demanding women's rights."** But her manner of death (the guillotine) and her own Article 10 form the most ironic self-fulfillment in history. If multiple choice asks "why was Gouges executed," pick "political stance / counter-revolution," not "demanding women's rights."

Key exam sentence: Gouges used the Enlightenment's and the Revolution's **own language** (natural rights, equality) to critique its exclusion of women — "fighting back with the same words." She's often tested paired with England's Mary Wollstonecraft (1792 *A Vindication of the Rights of Woman*).`,
        },
      },
    },

    {
      id: 'enlightenment-causes-revolution',
      termCn: '启蒙思想 → 革命（因果链）',
      termEn: 'Enlightenment → Revolution (Causation)',
      defCn: '启蒙思想（Enlightenment ideas）是 17-18 世纪哲学家们提出的一套新观念。他们认为：人有天生的权利，政府的权力来自人民同意，不是来自上帝。这些思想是法国大革命的重要背景原因——但光有思想还不够，还要加上等级不公和饥荒，才点燃了革命。',
      defEn: 'Enlightenment ideas were a set of new beliefs developed by philosophers in the 1600s-1700s. They argued that people have natural rights and that government power comes from the people\'s consent, not from God. These ideas were a key background cause of the French Revolution — but ideas alone were not enough. Structural inequality and famine were also needed to ignite it.',
      standardRef: ['AP World KC-5.1', 'AP Euro Unit 5', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'robespierre', nodeId: 'rob-n3', context: 'Robespierre 读《人权宣言》"这句话来自启蒙时代的思想"' },
          { lens: 'lafayette', nodeId: 'laf-n3', context: 'Lafayette 起草《人权宣言》借鉴美国独立宣言的启蒙理念' },
        ],
      },
      standaloneText: {
        cn: `这张卡故事里只点到、没展开，但它是 AP 最爱考的**因果题**——必须自己补完。

问题：为什么 1700 年代的法国，启蒙哲人的书会变成 1789 年的一场革命？

因果链分三层（AP 喜欢叫它"长时段 / 中时段 / 短时段"思维）：

① **思想层（中时段）**：启蒙运动给了革命一套"武器"——
   - Locke（洛克）："自然权利"（生命、自由、财产）+ "政府权力来自人民同意" + "政府侵犯权利，人民有权推翻它"。
   - Montesquieu（孟德斯鸠）："三权分立"——一个人或机构掌握所有权力就是暴政。
   - Rousseau（卢梭）："社会契约" + "主权在民 / 公意"。
   这些思想消解了"君权神授"的合法性：国王不再是上帝任命的，权力来自人民。

② **结构层（长时段）**：旧制度的等级不公（第三等级占 98% 却无权，还独自负担税收）+ 绝对王权的财政破产。思想给了"为什么可以反"，结构给了"为什么必须反"。

③ **导火索（短时段）**：1788 年反常天气毁了收成，1789 年面包价格暴涨、饥荒。国王被迫召开三级会议。饥饿是直接的点火器。

榜样就在眼前：1776 年**美国独立**已经把启蒙理念变成了现实——一群人推翻了国王、建了共和国。法国人（尤其是去美国打过仗的 Lafayette）亲眼见过它能成。这就是为什么法国大革命被归到"大西洋革命"（Atlantic Revolutions）里：启蒙理念跨大西洋传播 → 美国革命 → 法国革命 → 海地革命，一条因果链。

考点关键句：启蒙思想是革命的**必要条件但不是充分条件**——光有思想不够，还要有结构性的不公 + 一个直接的危机（饥荒），三者凑齐才点燃。AP 因果题最忌讳只写"因为启蒙运动所以革命"这种单因解释。`,
        en: `The story only hints at this card without unpacking it, but it's AP's favorite **causation question** — you have to fill it in yourself.

The question: why did the books of 1700s French philosophers become a revolution in 1789?

The causal chain has three layers (AP calls this "long-term / medium-term / short-term" thinking):

① **Ideas layer (medium-term)**: the Enlightenment handed the Revolution a set of "weapons":
   - Locke: "natural rights" (life, liberty, property) + "government power comes from the consent of the people" + "if government violates rights, the people may overthrow it."
   - Montesquieu: "separation of powers" — when one person or body holds all power, it's tyranny.
   - Rousseau: "social contract" + "popular sovereignty / general will."
   These ideas dissolved the legitimacy of "divine right of kings": the king is no longer appointed by God; power comes from the people.

② **Structure layer (long-term)**: the Ancien Régime's estate inequality (the Third Estate was 98% of people yet powerless, and bore the tax burden alone) + the absolute monarchy's fiscal bankruptcy. Ideas gave "why one may rebel"; structure gave "why one must rebel."

③ **Trigger (short-term)**: 1788's freak weather wrecked the harvest. In 1789 bread prices soared and famine hit. The king was forced to summon the Estates-General. Hunger was the direct igniter.

A model right in front of them: the **1776 American independence** had already turned Enlightenment ideas into reality — a people overthrew a king and built a republic. The French (especially Lafayette, who had fought in America) had seen it work with their own eyes. That's why the French Revolution is grouped under the "Atlantic Revolutions": Enlightenment ideas spread across the ocean → American Revolution → French Revolution → Haitian Revolution, one causal chain.

Key exam sentence: Enlightenment thought was a **necessary but not sufficient condition** for the Revolution — ideas alone weren't enough; you also needed structural injustice + a direct crisis (famine), all three together to ignite it. AP causation questions hate the single-cause "because of the Enlightenment, therefore revolution" explanation.`,
      },
      xiaoweiNote: {
        cn: `老师给的写 essay 公式：因果题永远写"三层"——思想（启蒙哲人）+ 结构（等级不公 + 财政破产）+ 导火索（1788 歉收 → 1789 饥荒）。只写一层会被扣分。记忆口诀：**"想 + 结 + 火"**（思想、结构、导火索）。`,
        en: `Teacher's essay formula: causation questions always get "three layers" — ideas (the philosophers) + structure (estate inequality + fiscal bankruptcy) + trigger (1788 bad harvest → 1789 famine). Writing only one layer loses points. Mnemonic: **"Ideas + Structure + Spark."**`,
      },
    },

    {
      id: 'napoleon-rise-and-code',
      termCn: '拿破仑崛起 / 《拿破仑法典》',
      termEn: 'Rise of Napoleon / Napoleonic Code',
      defCn: '拿破仑·波拿巴（Napoleon Bonaparte，1769-1821）是革命战争里打出名堂的将军。1799 年他政变掌权，1804 年称帝。他颁布的《拿破仑法典》（Napoleonic Code，1804）把"法律面前人人平等""废除贵族特权"写成成文法，随军队传遍欧洲。1815 年他在滑铁卢战败垮台。',
      defEn: 'Napoleon Bonaparte (1769-1821) was a general who made his name in the revolutionary wars. He seized power in a coup in 1799 and crowned himself Emperor in 1804. His Napoleonic Code (1804) wrote "equality before the law" and "abolition of noble privilege" into written law and spread these principles across Europe with his armies. He was defeated at Waterloo in 1815.',
      standardRef: ['AP World KC-5.3', 'AP Euro Unit 5', 'CA HSS 10.2.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'robespierre', nodeId: 'rob-n9', context: '恐怖结束后法国想要强人 → Napoleon 1799 政变、1804 称帝、《拿破仑法典》' },
          { lens: 'lafayette', nodeId: 'laf-n8', context: 'Lafayette 拒绝向拿破仑的皇冠低头' },
          { lens: 'paris-washerwoman', nodeId: 'pw-n9', context: '女工看革命转一圈：赶走一个国王，迎来一个皇帝' },
        ],
      },
      standaloneText: {
        cn: `三条故事线结尾都提到拿破仑，但都只是最后一笔带过的收尾，没有展开。AP（尤其 AP 欧洲史）会单独考他，所以我自己补一张完整的卡。

谁是拿破仑：Napoleon Bonaparte（拿破仑·波拿巴，1769-1821），在革命战争里打出名堂的年轻将军。

崛起三步：
① **1799 年（雾月政变 / Coup of Brumaire）**：恐怖统治结束后，法国又累又乱，大家想要一个强人来收拾残局。拿破仑发动政变掌权。
② **1804 年**：他干脆给自己加冕称帝（Emperor）。
③ **1815 年（滑铁卢 Waterloo）**：他最终战败垮台，波旁王朝复辟（国王又被请回来）。

这里有 AP 最爱的一个问题——拿破仑到底是革命的**掘墓人还是继承人**？两边都对：
- **掘墓人（终结革命）**：一场为了推翻国王、争取自由的革命，绕一大圈，最后又落进一个皇帝手里。这是最大的讽刺。
- **继承人（传播革命）**：他颁布《拿破仑法典》（Napoleonic Code, 1804），把"法律面前人人平等""废除贵族特权""世俗化""按能力晋升"这些革命原则写成一整套成文法律，随他的军队传遍欧洲。

⚠️ AP 陷阱：别简单写"拿破仑背叛了革命"。更准确的说法是**"他既终结了革命（称帝），又把革命原则制度化传播（法典）——背叛与延续同体"**。

考点关键句：哪怕 1815 年国王被请回来（波旁复辟），旧制度也**再也回不去了**——《人权宣言》擦不掉，《拿破仑法典》已经把"法律平等"传遍欧洲。革命"绕了一圈"，但没有真的回到起点。`,
        en: `All three story lines mention Napoleon at the end, but each is just a quick closing line without unpacking. AP (especially AP European History) tests him on his own, so I'm filling in a full card myself.

Who Napoleon is: Napoleon Bonaparte (1769-1821), a young general who made his name in the revolutionary wars.

Rise in three steps:
① **1799 (Coup of Brumaire)**: after the Terror ended, France was exhausted and in chaos, and people wanted a strongman to clean up the wreckage. Napoleon seized power in a coup.
② **1804**: he simply crowned himself Emperor.
③ **1815 (Waterloo)**: he was finally defeated and fell, and the Bourbon dynasty was restored (the king was brought back).

Here's an AP-favorite question — was Napoleon the **gravedigger or the heir** of the Revolution? Both are true:
- **Gravedigger (ended the Revolution)**: a revolution to overthrow a king and win freedom went around a great circle and ended in the hands of an emperor. The greatest irony.
- **Heir (spread the Revolution)**: he issued the Napoleonic Code (1804), writing revolutionary principles — "equality before the law," "abolition of noble privilege," "secularization," "promotion by merit" — into a whole body of written law that spread across Europe with his armies.

⚠️ AP trap: don't simply write "Napoleon betrayed the Revolution." The more accurate framing is **"he both ended the Revolution (crowning himself) and institutionalized and spread its principles (the Code) — betrayal and continuity in one."**

Key exam sentence: even when the king was brought back in 1815 (Bourbon Restoration), the old order **could never return** — the Declaration of the Rights of Man couldn't be erased, and the Napoleonic Code had already spread "equality before the law" across Europe. The Revolution went "around a circle," but never truly returned to the start.`,
      },
      xiaoweiNote: {
        cn: `三个日期串起来记：**1799 政变 → 1804 称帝 → 1815 滑铁卢垮台**。老师说 AP 欧洲史最爱考的论文题之一就是"拿破仑：革命的掘墓人还是继承人？"——记住答案要"两边都写"，落点在"背叛与延续同体"。`,
        en: `Memorize the three dates in a string: **1799 coup → 1804 emperor → 1815 Waterloo fall.** Teacher says one of AP European History's favorite essay prompts is "Napoleon: gravedigger or heir of the Revolution?" — remember to "write both sides," landing on "betrayal and continuity in one."`,
      },
    },

    {
      id: 'contemporary-china-qianlong',
      termCn: '同代中国：乾隆盛世与大革命',
      termEn: 'Contemporary China: Qianlong Era & the Revolution',
      defCn: '1789 年，法国人在巴黎喊出"自由、平等、博爱"的时候，中国正处于乾隆皇帝在位的晚期，还是当时世界人口最多、经济体量最大的帝国之一。两个国家走在完全不同的路上，但都真实存在于同一年。',
      defEn: 'In 1789, while the French were crying "liberty, equality, fraternity" in Paris, China was in the late reign of the Qianlong Emperor — still one of the world\'s most populous and economically largest empires. The two countries were walking completely different paths, but both were real in the same year.',
      standardRef: ['AP World KC-5.1', 'AP World KC-6.1'],
      examFrequency: 'medium',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `1789 年是清乾隆五十四年。同一年，法国人在巴黎街头呼喊「自由、平等、博爱」，清朝正处于「康乾盛世」尾声，仍是当时世界人口最多、经济总量最大的帝国之一。

两套体制并列对照（不褒贬，只描述）：
- 法国绝对君主制因财政破产被迫召开三级会议，第三等级以「主权在民」重新定义了权力合法性的来源。
- 清朝有成熟的中央集权官僚体制与科举选官制度，皇权稳固，既没有「等级会议」式的制度性议价空间，也没有出现将「人民主权」写成法律文件的本土路径。

提醒：两套制度各有历史脉络与代价——法国「人民主权」伴随断头台恐怖；清朝「大一统稳定」有其自身的结构约束。不存在「西方先进 / 东方落后」的线性判断。`,
        en: `1789 was the 54th year of the Qianlong Emperor's reign. The very year Parisians cried "Liberté, Égalité, Fraternité," Qing China was at the tail end of the "High Qing" golden age — still one of the world's most populous and economically largest empires.

Two systems, side by side (no ranking, only description):
- France's absolute monarchy was forced to summon the Estates-General after near-bankruptcy; the Third Estate redefined the source of political legitimacy through "popular sovereignty."
- The Qing had a mature centralized bureaucracy with civil-service exams; imperial authority was stable. There was no institutional bargaining space like an "estates-general," and no domestic path that produced "popular sovereignty" as a written legal document.

Note: each system carried its own historical logic and costs — France's "popular sovereignty" came with the guillotine's Terror; the Qing's "unified stability" carried its own structural constraints. No linear "West advanced / East backward" judgment holds.`,
      },
      xiaoweiNote: {
        cn: `老师说"并置不是排名"——同一年两个世界最大的帝国，走在完全不同的路上。法国那年重新定义了"谁说了算"，清朝那年在权力顶峰、对这股浪潮完全无感。两件事都是真的，都值得记住。`,
        en: `Teacher's point: "side by side is not a ranking." The same year, two of the world's largest empires were walking completely different roads. France that year redefined who held legitimate power; Qing China, at the height of its power, was entirely unmoved by that wave. Both are true. Both are worth remembering.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Robespierre（罗伯斯庇尔）一生清廉，连敌人都承认找不到他的污点。1791 年他在议会主张废除死刑，说"国家用杀人来证明杀人有罪，是矛盾的"。可仅仅两年后，他成了恐怖统治的核心，把成千上万的人送上断头台。

一个"好人 + 好理想"，为什么会通向"最血腥的机器"？你觉得是哪一步走错了，还是从一开始就埋下了种子？`,
      en: `Robespierre was clean his whole life — even his enemies admitted there was no stain to find on him. In 1791 he argued in the assembly to abolish the death penalty, saying "for the state to use killing to prove that killing is a crime is a contradiction." Yet just two years later he was at the heart of the Terror, sending thousands to the guillotine.

How does a "good person + good ideal" lead to "the bloodiest machine"? Do you think it was one wrong step, or a seed planted from the very start?`,
      hintCn: `提示：可以从两个角度想——
① 他的逻辑"对敌人仁慈，就是对人民残忍"听起来很有道理。正是这种"听起来有道理"让他把"杀人"和"美德"焊在了一起。
② 他追求的是"绝对的纯洁"——只要怀疑你不够纯，就能送你上断头台。对"绝对正确"的执着，本身可能就是危险。

进阶思考：今天你身边，有没有人为了一个"绝对正确"的目标（一个理想、一种"正义"），觉得"为了它，伤害一些人是应该的"？这种逻辑和 Robespierre 是同一个吗？`,
      hintEn: `Hint: think from two angles —
① His logic "mercy to the enemy is cruelty to the people" sounds reasonable. It's exactly that "sounding reasonable" that let him weld "killing" and "virtue" into one.
② He pursued "absolute purity" — suspect you of not being pure enough, and he could send you to the guillotine. The obsession with "absolute rightness" may itself be the danger.

Going deeper: in your own life today, is there someone who, for an "absolutely right" goal (an ideal, a kind of "justice"), feels that "for its sake, harming some people is justified"? Is that logic the same as Robespierre's?`,
      conceptsActivated: ['reign-of-terror-robespierre-jacobins', 'declaration-rights-of-man'],
    },
    {
      id: 'q2',
      cn: `《人权宣言》（1789）写着"人人生而自由，权利平等"——这是革命最响亮的理想。可写《女权宣言》、为女性争取同样权利的 Olympe de Gouges，1793 年正是死在这场革命自己造的断头台上。同一台机器，同一套"自由"的语言。

如果你是 AP 老师，让你出一道题来分析"《人权宣言》（自由）和断头台（暴力）是不是同一场革命的两只手"，你会怎么提问？`,
      en: `The Declaration of the Rights of Man (1789) reads "all men are born free and equal in rights" — the Revolution's loudest ideal. Yet Olympe de Gouges, who wrote the Declaration of the Rights of Woman fighting for the same rights for women, died in 1793 on the very guillotine the Revolution itself built. The same machine, the same language of "liberty."

If you were an AP teacher writing a question to analyze whether "the Declaration (liberty) and the guillotine (violence) are two hands of the same revolution," how would you phrase it?`,
      hintCn: `提示：AP 题通常会给学生几份原始史料（《人权宣言》第 1 条、Gouges《女权宣言》第 10 条"女人有权走上断头台，就该有权走上讲台"、她被处决的判决文书），让学生分析"一个伟大理想和它的暴力，能不能分开评价？"没有标准答案，重要的是用证据。

⚠️ 别掉进陷阱：Gouges 被处决的罪名是政治立场（反雅各宾、同情吉伦特派），不是"因为要求女权"。这个史实精度，正是好答案和差答案的区别。

可能的提问角度："《人权宣言》里的'人 / Men'，从一开始就排除了哪些人？用 Gouges、巴黎妇女、奴隶制三个例子检验'人人平等'的真实边界。"`,
      hintEn: `Hint: an AP question would typically give students several primary sources (Article 1 of the Declaration of the Rights of Man, Gouges's Article 10 "a woman has the right to mount the scaffold; she must equally have the right to mount the rostrum," and her execution verdict) and ask: "Can a great ideal and its violence be judged separately?" No standard answer — what matters is the use of evidence.

⚠️ Don't fall into the trap: Gouges was executed on a charge of political stance (anti-Jacobin, Girondin sympathy), not "for demanding women's rights." That factual precision is exactly what separates a strong answer from a weak one.

Possible question angle: "Whom did the 'Men' in the Declaration of the Rights of Man exclude from the start? Use Gouges, the women of Paris, and slavery as three cases to test the real boundary of 'all are equal.'"`,
      conceptsActivated: ['declaration-rights-of-man', 'gouges-women-rights', 'reign-of-terror-robespierre-jacobins'],
    },
    {
      id: 'q3',
      cn: `巴黎的洗衣女工和市场妇女，1789 年 10 月冒雨步行二十多公里去凡尔赛逼国王回巴黎——是她们的脚和饥饿，推动了这场革命。可革命结束时，她们什么也没多得到：没有投票权，《人权宣言》的"人"不算女人，面包还是那么贵。

一场变革"辜负了推动它的人"，还能算这些人的胜利吗？那个洗衣女工说自己"没尝到果子，却松动了压几百年的石头"——你同意她吗？`,
      en: `The washerwomen and market women of Paris, in October 1789, walked over twenty kilometers in the rain to Versailles to force the king back to Paris — it was their feet and their hunger that pushed this revolution forward. Yet when the Revolution ended, they gained almost nothing more: no vote, the "Men" of the Declaration didn't count women, and bread was still as dear.

When a transformation "betrays the people who pushed it," can it still count as their victory? The washerwoman says she "never tasted the fruit, but loosened the stone that had pressed down for centuries" — do you agree with her?`,
      hintCn: `提示：可以从两个方向想——
① "骗局"读法：她们是被利用的柴火，烧完就被忘掉，喊着"人人平等"的革命从一开始就没打算算上她们。
② "松动石头"读法：在她们之前，一个洗衣女工一辈子不敢想象自己能撼动什么，可她们亲手逼国王搬过家、亲眼见过"国王也不是神"——这件事一旦发生过，就再也变不回去了，下一代会比她们更自由。两种读法都有史料支持，重要的是你怎么用证据权衡。

进阶思考：今天你身边，有没有这样的事——一群人喊着动听的口号（"为了大家""为了公平"），可真正出力、真正受苦的人，最后什么也没分到、连名字都没人提？你会只盯着那个口号，还是会多问一句：谁在出力，谁在受苦，谁在被忘掉？`,
      hintEn: `Hint: think in two directions —
① The "deception" reading: they were kindling, used and then forgotten once burnt. The revolution crying "all are equal" never planned to count them from the start.
② The "loosened the stone" reading: before them, a washerwoman would never have dared imagine she could shake anything, yet they forced a king to move house with their own hands and saw that "a king is no god" — once that happened, it could never change back, and the next generation would be freer than they were.
Both readings have evidence; what matters is how you weigh it with evidence.

Going deeper: in your own life today, is there something like this — a crowd crying a fine-sounding slogan ("for everyone," "for fairness"), while the ones who truly do the work and truly suffer end with nothing, not even their names mentioned? Will you fix your eyes only on the slogan, or ask one more question: who is doing the work, who is suffering, and who is being forgotten?`,
      conceptsActivated: ['storming-bastille-1789', 'declaration-rights-of-man', 'gouges-women-rights'],
    },
  ],
};

export default notebook;
