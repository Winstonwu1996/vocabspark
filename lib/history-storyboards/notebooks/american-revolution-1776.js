// ─── 同伴笔记本架构 v1 · American Revolution 1776 ─────────────────
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
//   - storyboard 提供情感锚点（Jefferson 执笔人 / Loyalist 被遗忘的约三分之一 / 被奴役者 受影响方 三条线）
//   - notebook 提供考点闭环（独立宣言 1776 / 革命起因 / 战争进程 / Patriot-Loyalist-中立 / Dunmore 宣言 /
//     「人人平等」对谁不算 / 原住民站英国 / 同时代清乾隆结构对照 — 补完 HSS-5.5 + APUSH Period 3 课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 3 (1754-1800)：Topic 3.5-3.7（英国政策与殖民地反应 / 独立运动 / 独立宣言）
//   - APUSH Required Document：Declaration of Independence（独立宣言）
//   - California HSS Grade 5.5（美国独立战争的起因、过程与后果）
//
// 事实地基：对账 american-revolution-1776.md（narrative kernel）
//   - 独立宣言 1776.7.4；革命战争 1775-83；Dunmore 宣言 1775.11
//   - 「1/3 Patriot / 1/3 Loyalist / 1/3 neutral」是 John Adams 的粗略 ESTIMATE，标注为有争议的估计（账本 §3、§9、§10）
//   - 与 constitutional-convention-1787 不重叠：那是 1787 制宪内部博弈；本 Topic = 1775-83 革命 + 1776 独立宣言。
//     3/5 妥协在本 Topic 仅作"革命之后的背叛"一笔带过 + 跨 Topic 指针，不展开制宪博弈。
//   - 无伪造引文
//
// schemaVersion: 1 · notebookVersion: american-revolution-1776-v1

export var notebook = {
  topicId: 'american-revolution-1776',
  topicNameCn: '美国独立革命 1776',
  topicNameEn: 'The American Revolution 1776',
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
    cn: `今天老师说我们要学 1775 到 1783 年的美国独立革命（American Revolution），
还有 1776 年那份《独立宣言》（Declaration of Independence）。

她说这是加州五年级 HSS-5.5 的核心单元，到了高中 APUSH 还会再考一遍——
独立宣言是 APUSH 必背的 required document（必读文件）。

她给了一张纸，上面写着这些名字：

Thomas Jefferson（杰斐逊）、George Washington（华盛顿）、
John Adams（亚当斯）、Lord Dunmore（邓莫尔勋爵）

还有一串词：Declaration of Independence（独立宣言）、
no taxation without representation（无代表不纳税）、Stamp Act（印花税法）、
Boston Tea Party（波士顿倾茶事件）、Patriot / Loyalist（独立派 / 保皇派）、
militia（民兵）、Treaty of Paris（巴黎和约）。

我先记下来，等下读三个故事——Jefferson（写宣言的人）、
一个 Loyalist（不肯跟英国决裂、最后输掉一切的人）、
一个被奴役的人（那句「人人平等」本来没打算算进去的人）——读完再回来对照这张单子。

老师说了一句我抄在笔记本第一页："这是一场为「自由」打的革命。
可你每读到一次「自由」，就要多问一句：是谁的自由？"`,
    en: `Today my teacher said we're learning the American Revolution of 1775 to 1783,
and the Declaration of Independence of 1776.

She said this is the core unit of California HSS-5.5 in fifth grade, and it comes up
again in high school APUSH — the Declaration of Independence is a required document
you must know cold for APUSH.

She gave us a sheet with these names:

Thomas Jefferson, George Washington,
John Adams, Lord Dunmore

Plus a string of terms: Declaration of Independence,
no taxation without representation, Stamp Act, Boston Tea Party,
Patriot / Loyalist, militia, Treaty of Paris.

Let me write these down. After I read the three stories — Jefferson (who wrote the
Declaration), a Loyalist (who would not break with Britain and lost everything), and
an enslaved person (whom that line "all men are equal" never planned to count in) —
I'll come back and check this list.

Teacher said one line I copied onto the first page of my notebook: "This was a
revolution fought for liberty. But every time you read the word liberty, ask one
more question: whose liberty?"`,
    keyTerms: [
      { cn: '美国独立革命', en: 'American Revolution' },
      { cn: '独立宣言', en: 'Declaration of Independence' },
      { cn: '人人生而平等', en: 'all men are created equal' },
      { cn: '无代表，不纳税', en: 'no taxation without representation' },
      { cn: '印花税法', en: 'Stamp Act' },
      { cn: '波士顿倾茶事件', en: 'Boston Tea Party' },
      { cn: '不可容忍法令', en: 'Intolerable Acts' },
      { cn: '独立派', en: 'Patriot' },
      { cn: '保皇派', en: 'Loyalist' },
      { cn: '民兵', en: 'militia' },
      { cn: '邓莫尔宣言', en: 'Lord Dunmore\'s Proclamation' },
      { cn: '巴黎和约', en: 'Treaty of Paris' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '托马斯·杰斐逊',
        nameEn: 'Thomas Jefferson',
        ipa: '/ˈtɒməs ˈdʒɛfərsən/',
        roleCn: '独立宣言执笔人，写下「人人生而平等」，却终身在 Monticello 庄园役使约 200 个被奴役者',
        roleEn: 'Author of the Declaration of Independence, who wrote "all men are created equal," yet held about two hundred enslaved people at Monticello his whole life',
        mustKnow: true,
        audioKey: 'thomas-jefferson',
      },
      {
        nameCn: '乔治·华盛顿',
        nameEn: 'George Washington',
        ipa: '/dʒɔːrdʒ ˈwɒʃɪŋtən/',
        roleCn: '大陆军总司令，1781 年会同法军在 Yorktown（约克镇）迫降英军主力',
        roleEn: 'Commander of the Continental Army, who with French forces forced the surrender of the main British army at Yorktown in 1781',
        mustKnow: true,
        audioKey: 'george-washington',
      },
      {
        nameCn: '约翰·亚当斯',
        nameEn: 'John Adams',
        ipa: '/dʒɒn ˈædəmz/',
        roleCn: '五人起草委员会成员；「三分之一支持 / 三分之一保皇 / 三分之一中立」这个粗略估计的提出者',
        roleEn: 'Member of the Committee of Five; the source of the rough estimate that about a third backed independence, a third stayed loyal, and a third were neutral',
        mustKnow: true,
        audioKey: 'john-adams',
      },
      {
        nameCn: '邓莫尔勋爵',
        nameEn: 'Lord Dunmore',
        ipa: '/lɔːrd dʌnˈmɔːr/',
        roleCn: '英国派驻弗吉尼亚的总督，1775 年 11 月宣布：投奔英军的被奴役者可获自由',
        roleEn: 'Britain\'s royal governor of Virginia, who in November 1775 declared that enslaved people who fled and joined the British would be freed',
        mustKnow: true,
        audioKey: 'lord-dunmore',
      },
      {
        nameCn: '本杰明·富兰克林',
        nameEn: 'Benjamin Franklin',
        ipa: '/ˈbɛndʒəmɪn ˈfræŋklɪn/',
        roleCn: '五人起草委员会成员，资深政治家，但把执笔独立宣言的活交给了 Jefferson',
        roleEn: 'Member of the Committee of Five, a senior statesman who left the drafting of the Declaration to Jefferson',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '亚伯拉罕·林肯',
        nameEn: 'Abraham Lincoln',
        ipa: '/ˈeɪbrəhæm ˈlɪŋkən/',
        roleCn: '1863 年葛底斯堡演说开篇引用独立宣言「人人生而平等」，用 Jefferson 的话去打废奴这一仗',
        roleEn: 'Opened the 1863 Gettysburg Address by quoting the Declaration\'s "all men are created equal," using Jefferson\'s words to fight for abolition',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '阿比盖尔·亚当斯',
        nameEn: 'Abigail Adams',
        ipa: '/ˈæbɪɡeɪl ˈædəmz/',
        roleCn: 'John Adams 的妻子，曾写信叫丈夫「别忘了女士们」，但新国家没有给女性政治权利',
        roleEn: 'Wife of John Adams, who wrote urging her husband to "remember the ladies," though the new nation gave women no political rights',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'causes-of-revolution',
      termCn: '革命的起因（加税与抗议）',
      termEn: 'Causes of the Revolution (Taxation & Protest)',
      standardRef: ['CA HSS 5.5', 'APUSH Period 3 Topic 3.5', 'AP DBQ — causation'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'jefferson',
        nodeIds: ['jef-n2'],
        xiaoweiNote: {
          cn: `这个 Jefferson 那一遍第 2 节讲了。起因是钱：英国打完跟法国的大仗（1763 年结束）
欠了一屁股债，就回头向 13 个殖民地加税——一样接一样。

我把因果链背成一条线（AP 爱考 causation）：
**Stamp Act（印花税法，1765）→「无代表，不纳税」→ Boston Tea Party（波士顿倾茶事件，1773）
→ Intolerable Acts（不可容忍法令，1774，关闭波士顿港）→ 火药味压不住。**

「无代表，不纳税」（no taxation without representation）一句必背：
英国议会里没有殖民地的代表，凭什么向他们收税？

考点关键句：这些不是一上来就要独立，是「加税 → 抗议 → 镇压 → 再抗议」一步步升级出来的。
AP 常问"哪些是远因，哪些是导火索"——加税是远因，Intolerable Acts 是临门一脚。`,
          en: `Jefferson's Lens Node 2 covers this. The cause was money: after a great war with
France (ended 1763) Britain was buried in debt, and turned to the 13 colonies to tax them,
one tax after another.

I memorize the causation chain as a line (AP loves causation):
**Stamp Act (1765) → "no taxation without representation" → Boston Tea Party (1773) →
Intolerable Acts (1774, closing Boston's port) → the pressure could no longer be held down.**

One must-memorize line, "no taxation without representation": there was no colonial
representative in Britain's Parliament, so by what right did it tax them?

Key exam sentence: these did not start as a demand for independence; they escalated step by
step, "tax → protest → punishment → protest again." AP often asks "which are long-term
causes and which are the trigger" — the taxes are the long-term cause, the Intolerable Acts
the final push.`,
        },
      },
    },

    {
      id: 'declaration-of-independence',
      termCn: '独立宣言（1776）',
      termEn: 'The Declaration of Independence (1776)',
      standardRef: ['CA HSS 5.5', 'APUSH Period 3 — Required Document', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'jefferson',
        nodeIds: ['jef-n1', 'jef-n3', 'jef-n5'],
        xiaoweiNote: {
          cn: `Jefferson 那一遍第 1、3、5 节就是这个。1776 年 6 月，大陆会议派了五人起草委员会
（里面有 Franklin 和 Adams），把笔交给了 Jefferson——Adams 说理由之一是「你写得最好，
而且你不招人恨」。Jefferson 在费城一间租来的二楼房间，写了大约十七天。

开篇那句必背（APUSH required document，逐字考）：
**「人人生而平等（all men are created equal），造物主赋予他们若干不可剥夺的权利，
其中包括生命、自由和追求幸福。」**

这套想法不是他凭空想的，来自英国思想家 **Locke（洛克）**：
天赋人权、政府权力来自被统治者的同意、人民有权推翻暴政。（跑过启蒙运动那段历史会认得他。）

考点关键句：**1776 年 7 月 4 日**，大陆会议正式通过独立宣言。
但注意一个误解陷阱——❌「签了宣言就独立了」→ ✅宣言只是宣告「我们为什么有权脱离英国」，
仗还要打到 1781、1783 才真赢。`,
          en: `Jefferson's Lens Nodes 1, 3, and 5 are about this. In June 1776 the Continental
Congress named a Committee of Five (Franklin and Adams among them) and put the pen in
Jefferson's hand — Adams said one reason was "you write better than the rest of us, and you
are not hated." Jefferson wrote for about seventeen days in a rented second-floor room in
Philadelphia.

The must-memorize opening line (an APUSH required document, tested word for word):
**"all men are created equal, that they are endowed by their Creator with certain unalienable
Rights, that among these are Life, Liberty and the pursuit of Happiness."**

These ideas did not come from nowhere; they came from the English thinker **Locke**: natural
rights, government power from the consent of the governed, and the people's right to overthrow
tyranny. (You'll recognize him if you ran the enlightenment topic.)

Key exam sentence: **on July 4, 1776** the Continental Congress formally adopted the
Declaration. But watch a misconception trap — ❌ "signing the Declaration meant independence"
→ ✅ the Declaration only announced "why we have the right to break from Britain"; the war had
to be fought to 1781 and 1783 to actually win it.`,
        },
      },
    },

    {
      id: 'course-of-the-war',
      termCn: '战争进程（1775-1783）',
      termEn: 'The Course of the War (1775-1783)',
      standardRef: ['CA HSS 5.5', 'APUSH Period 3 Topic 3.6', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'jefferson',
        nodeIds: ['jef-n5', 'jef-n8'],
        xiaoweiNote: {
          cn: `Jefferson 那一遍第 5、8 节讲了整场仗。我把它压成一条时间线背：

**1775.4 Lexington / Concord（莱克星顿与康科德）第一枪**——「响彻世界的一枪」。
注意：仗比宣言早打了一年多，宣言不是空谈，是「已经动手了，告诉世界为什么动手」。

前期很惨：英军是当时世界最强，这边是临时凑的民兵（militia）和大陆军，缺枪缺钱缺粮。
**1777-78 年冬天 Valley Forge（福吉谷）**扎营，冻死饿死几千人。

转机：**1777 Saratoga（萨拉托加）大捷 → 1778 法国结盟**（出钱、出兵、出舰队）。
误解陷阱：❌「美国靠自己赢的」→ ✅没有法国援手，这仗很可能赢不了。

**1781 Yorktown（约克镇）决战**：Washington 的大陆军会同法军围降英军主力 → 基本锁定胜局。
**1783 Treaty of Paris（巴黎和约）**：英国正式承认美国独立。

记忆锚：第一枪 1775 → 宣言 1776 → 法国 1778 → 决战 1781 → 独立 1783。`,
          en: `Jefferson's Lens Nodes 5 and 8 cover the whole war. I compress it into a timeline:

**April 1775, Lexington and Concord, the first shots** — "the shot heard round the world."
Note: the war began over a year before the Declaration, so the Declaration was no idle talk;
it said "we have already taken up arms, and now we tell the world why."

The early years went badly: Britain had the strongest army in the world; our side was militia
thrown together and a Continental Army short of guns, money, and food. **In the winter of 1777
to 1778 at Valley Forge**, thousands froze or starved.

The turn: **Saratoga (1777) → France's alliance (1778)** (money, troops, a fleet).
Misconception trap: ❌ "America won on its own" → ✅ without France's help, the war might well
have been lost.

**Yorktown (1781), the decisive battle**: Washington's Continental Army with French forces
pinned and forced the surrender of the main British army, all but settling it.
**Treaty of Paris (1783)**: Britain formally recognized American independence.

Memory anchor: first shots 1775 → Declaration 1776 → France 1778 → decisive battle 1781 →
independence 1783.`,
        },
      },
    },

    {
      id: 'patriot-loyalist-neutral-split',
      termCn: '独立派 / 保皇派 / 中立（Adams 的粗估）',
      termEn: 'Patriot / Loyalist / Neutral (Adams\' Estimate)',
      standardRef: ['CA HSS 5.5', 'APUSH Period 3 Topic 3.6', 'AP — historiography'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'loyalist',
        nodeIds: ['loy-n2'],
        xiaoweiNote: {
          cn: `Loyalist 那一遍第 2 节专门讲这个，也是最颠覆我直觉的一节。

我以前以为革命是「全体美国人民众志成城反抗英国」。错。后来的国父 **John Adams 粗略估过**：
当时大概**三分之一支持独立（Patriot）、三分之一效忠英国（Loyalist）、三分之一中立**。

⚠️ 这里有个老师反复强调的**事实纪律**：
这个「三三三」**只是 Adams 的一个粗略估计，不是精确统计**。
后来的历史学家争论过真实比例，有人认为保皇派没那么多。
考试写的时候要标明"这是估计"，别当成精确数据。
但有一点没争议：支持革命的远不是「全体人民」，反对加中立的是一大片。

考点关键句：这场革命**更像一场殖民者打殖民者的内战**——邻居打邻居、兄弟反目。
Loyalist 输掉一切，各州还立法没收他们财产；约六万到十万人（也是估计数）远走加拿大、英国、加勒比。

记忆锚：**Patriot = 要独立；Loyalist（又叫 Tory 托利党人）= 效忠英王。**`,
          en: `Loyalist's Lens Node 2 is specifically about this, and it overturned my gut sense most.

I used to think the revolution was "the whole American people of one will against Britain."
Wrong. The founding father **John Adams made a rough estimate**: at the time about **a third
backed independence (Patriots), a third stayed loyal to Britain (Loyalists), and a third were
neutral.**

⚠️ Here's a **factual discipline** my teacher kept stressing:
this "thirds" is **only Adams's rough guess, not a precise count.**
Later historians have argued over the true proportions, and some think the Loyalists were
fewer. On a test, label it "an estimate," don't treat it as exact data.
But one thing is not in dispute: those who backed the revolution were far from "the whole
people," and the opposed plus the neutral were a vast share.

Key exam sentence: this revolution was **more like a civil war of colonists against
colonists** — neighbor against neighbor, brother against brother. The Loyalists lost
everything; states even passed laws confiscating their property, and about sixty to a hundred
thousand (also an estimate) left for Canada, Britain, and the Caribbean.

Memory anchor: **Patriot = wanted independence; Loyalist (also called Tory) = loyal to the king.**`,
        },
      },
    },

    {
      id: 'dunmore-proclamation',
      termCn: '邓莫尔宣言（1775 年 11 月）',
      termEn: 'Lord Dunmore\'s Proclamation (November 1775)',
      standardRef: ['CA HSS 5.5', 'APUSH Period 3 Topic 3.6', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'enslaved-person-receiving-end',
        nodeIds: ['ens-n4', 'ens-n5'],
        xiaoweiNote: {
          cn: `被奴役者那一遍第 4、5 节讲的就是这个，是我读完最忘不掉的一节。

**1775 年 11 月**，英国派驻弗吉尼亚的总督 **Dunmore（邓莫尔勋爵）发布宣言**：
凡是反叛者名下的被奴役者，只要逃出来、加入英军，就给他自由。

⚠️ 误解陷阱（DBQ 高频）：❌「英国是出于反奴隶制的良心」→
✅这是一步**削弱反叛殖民者的军事棋，不是善心**。
但对被奴役者来说，这是当时**唯一够得着的一线自由**。

考点关键句：整场战争里，**数以万计**的被奴役者冒死逃向英军（具体数字今天说不准，
但规模大到影响战局）。有人加入英军，组成「埃塞俄比亚军团」（Ethiopian Regiment），
军服上绣着「**Liberty to Slaves（奴隶得自由）**」。

最戳我的对位：同一个词「自由」——**奴隶主把它绣在反抗英国的旗子上，
被奴役者把它绣在投奔英国的军服上**。一个词，两个相反方向。
给被奴役者开「自由」支票的，恰恰是殖民者要反抗的那个英国。`,
          en: `The enslaved person's Lens Nodes 4 and 5 are this — the part I could not forget.

**In November 1775**, Britain's royal governor of Virginia, **Lord Dunmore, issued a
proclamation**: any enslaved person belonging to a rebel who fled and joined the British army
would be given his freedom.

⚠️ Misconception trap (high-frequency DBQ): ❌ "Britain acted out of anti-slavery conscience"
→ ✅ it was **a military move to weaken the rebel colonists, not mercy.**
But for the enslaved, it was **the one thread of freedom within reach** at the time.

Key exam sentence: across the whole war, **tens of thousands** of enslaved people fled at the
risk of death to the British (the exact figure can't be told today, but the scale was large
enough to affect the war). Some joined the British and formed the "Ethiopian Regiment," with
"**Liberty to Slaves**" stitched on their uniforms.

The contrast that hit me hardest: the same word "liberty" — **the slaveholders stitched it on
the banner of resistance to Britain, and the enslaved stitched it on the uniform of flight to
Britain.** One word, two opposite directions. The one who wrote the enslaved a check of
"freedom" was the very Britain the colonists meant to resist.`,
        },
      },
    },

    {
      id: 'who-was-excluded',
      termCn: '「人人平等」对谁不算',
      termEn: 'Who Was Excluded from "All Men Are Equal"',
      standardRef: ['CA HSS 5.5', 'APUSH Period 3 — Required Document', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'jefferson',
        nodeIds: ['jef-n7'],
        xiaoweiNote: {
          cn: `Jefferson 那一遍第 7 节他自己一笔笔算了这本账。那句「人人生而平等」当时到底指谁？
诚实地说，范围窄得多。

明文之外的人：
1. **被奴役者**——当时全美约**五分之一**的人口是被奴役的，他们不在「all men」里。
2. **女性**——Adams 的妻子 Abigail 写信叫丈夫「别忘了女士们」，结果新国家没有给女性政治权利。
3. **原住民**——殖民者一路西进抢他们的地（这条另有一张卡）。
4. 甚至**无产白人男性**——很多没有财产的穷白人当时也没有投票权。

考点关键句：「人人」实际只指 **有产的白人男性**。
这是 DBQ 最爱的张力点——理想（人人平等）vs 实践（绝大多数人被关在门外）。

我自己的记忆锚：**一句话写得越响亮，越容易让人忽略它把谁排除了。**
但后人（废奴、女权、民权运动）正是回到这句话，对国家说「请兑现它」——
所以这句话既是当时的空头支票，也是后人讨债的凭据。`,
          en: `Jefferson's Lens Node 7 has him reckon this ledger himself. Whom did "all men are
created equal" actually mean at the time? Honestly, far narrower.

The people outside the text:
1. **The enslaved** — about **a fifth** of the country's people were enslaved then, not in
   "all men."
2. **Women** — Adams's wife Abigail wrote urging him to "remember the ladies," and the new
   nation gave women no political rights.
3. **Native nations** — colonists pushed west seizing their land (its own card).
4. Even **propertyless white men** — many poor white men with no property had no vote then.

Key exam sentence: "all men" in truth meant only **propertied white men.**
This is the DBQ's favorite tension — ideal (all equal) vs practice (the vast majority shut out).

My memory anchor: **the more grandly a line rings, the easier it is to overlook whom it shut
out.** Yet later movements (abolition, women's rights, civil rights) came back to this very
line and told the country "make good on it" — so the line was both an empty check at the time
and the note later generations used to collect the debt.`,
        },
      },
    },

    {
      id: 'native-nations-sided-with-britain',
      termCn: '大多数原住民部族站在英国一边',
      termEn: 'Most Native Nations Sided with Britain',
      standardRef: ['CA HSS 5.5', 'APUSH Period 3 Topic 3.6', 'AP — stakeholder analysis'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'jefferson', nodeId: 'jef-n7', context: 'Jefferson 算「人人平等」对谁不算时，提到原住民：殖民者西进抢地，大多数部族反而站英国一边' },
        ],
      },
      standaloneText: {
        cn: `这条故事里只一笔带过（Jefferson 那一遍第 7 节），但它是 AP 利益相关方分析的高频反直觉点，
值得单独掌握。

直觉以为：原住民应该跟殖民者一起反抗英国。**错。**
事实是：**革命里大多数原住民部族选择站在英国一边。**

为什么？关键在「谁是真正的威胁」：
- 殖民者一路向西扩张，不断抢夺原住民的土地——**抢地的威胁，是殖民者，不是远在伦敦的国王。**
- 英国在 1763 年曾划过一条线（Proclamation Line），试图限制殖民者越过阿巴拉契亚山向西占地。
  对原住民来说，英国反而是那个"勉强挡一挡殖民者扩张"的一方。
- 所以站英国，是一个**理性的利益判断**：哪一边对我的土地威胁更小，我就站哪边。

考点关键句：**对原住民和被奴役者来说，「理性选择」常常是站英国一边**——
这正好打破「全体被压迫者一起反抗英国」的简化叙事。

⚠️ 别写成"原住民帮英国是因为忠于英王"——✅他们是为了保住自己的土地，做的利益权衡。

🔗 故事连接：Jefferson 那一遍第 7 节，他算「人人平等」把谁排除在外时，
亲口承认殖民者西进抢地、大多数原住民部族因此站到了英国那边。`,
        en: `The story touches this only in passing (Jefferson's Lens Node 7), but it's a
high-frequency, counter-intuitive point in AP stakeholder analysis, worth mastering on its own.

The gut assumption: Native peoples should have resisted Britain alongside the colonists.
**Wrong.** The fact: **most Native nations chose Britain's side in the revolution.**

Why? It comes down to "who was the real threat":
- The colonists pushed steadily west, seizing Native land — **the land-grabbing threat was the
  colonists, not a king far off in London.**
- In 1763 Britain had drawn a line (the Proclamation Line) trying to limit colonists from
  pushing west over the Appalachians. To Native nations, Britain was the side that at least
  half-held back colonial expansion.
- So siding with Britain was a **rational calculation of interest**: side with whichever was
  the smaller threat to my land.

Key exam sentence: **for Native peoples and the enslaved, the "rational choice" was often to
side with Britain** — which breaks the simplified story that "all the oppressed resisted
Britain together."

⚠️ Don't write "Native peoples helped Britain out of loyalty to the king" — ✅ they weighed
their interests to protect their own land.

🔗 Story link: Jefferson's Lens Node 7, where he reckons who "all men are equal" left out and
admits the colonists pushed west seizing land, so most Native nations took Britain's side.`,
      },
      xiaoweiNote: {
        cn: `这条我一开始读反了——以为原住民当然跟殖民者一起反英。老师说 AP 就爱考这种反直觉：
答案要看「谁在抢我的地」。抢地的是殖民者，所以大多数原住民站英国。
我的口诀：**站谁不看口号，看谁威胁我的土地更小。**`,
        en: `I read this backwards at first — assumed Native peoples of course joined the
colonists against Britain. Teacher said AP loves this kind of counter-intuitive point: the
answer is "who was taking my land." The colonists took the land, so most Native nations sided
with Britain. My mnemonic: **you don't pick a side by its slogans, but by whose threat to your
land is smaller.**`,
      },
    },

    {
      id: 'thomas-paine-common-sense',
      termCn: '托马斯·潘恩《常识》（1776 年 1 月）',
      termEn: 'Thomas Paine, Common Sense (January 1776)',
      standardRef: ['APUSH Period 3 Topic 3.5', 'APUSH — Key Concept 3.2.I', 'AP DBQ — causation / argumentation'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `故事里没讲，但它是 APUSH Period 3 最高频单点之一，全课零提及，必须补。

**1776 年 1 月 10 日**，英国移民 **Thomas Paine（托马斯·潘恩）** 发表小册子《Common Sense》。
他才到美洲两年，却做了一件关键的事：把独立的道理用**最普通的英语**说给普通殖民者听。

核心论点（AP 爱考）：
1. **君主制本身就是错的**——不只是乔治三世坏，是「世袭王权」这套逻辑就是错的。
   （比独立宣言更激进：宣言骂"暴君乔治"，潘恩骂"王权制度本身"。）
2. **独立是唯一出路**——和解没有意义，美洲必须彻底脱离英国。
3. **共和政府才合法**——权力来自人民同意，不是神授王权。

规模：三个月内卖出约 **10 万册**（殖民地总人口约 250 万），直接加速 1776 年夏的独立决议。

考点关键句：**《常识》把独立从「精英辩论」变成「大众运动」。**
时间线：《常识》1776 年 1 月 → 独立宣言 1776 年 7 月——先有舆论，再有宣言。

⚠️ 误解陷阱：❌「是《常识》让人首次想到独立」→
✅ 想法早存在，《常识》让它**大规模扩散**并赋予道德正当性。`,
        en: `The story does not cover this, but it is one of the single highest-frequency APUSH
Period 3 exam points, and the whole topic has zero mention of it — essential to add.

**On January 10, 1776**, English immigrant **Thomas Paine** published the pamphlet
*Common Sense*. He had arrived in America only two years earlier, a radical who had started
as a printer.

*Common Sense* did one decisive thing: it pulled the argument for independence out of
elite parliamentary debate and made it, in **plain English**, directly to ordinary colonists.

Core arguments (AP favorites):
1. **Monarchy itself is wrong** — not just that King George III was bad, but that "one
   person ruling everyone by hereditary right" was wrong as a principle. (More radical than
   the Declaration: the Declaration blamed "tyrant George"; Paine blamed "kingship itself.")
2. **Independence is the only way** — reconciliation was pointless; America's future lay
   only in a complete break from Britain.
3. **Republican government is the only legitimate kind** — power must come from the
   consent of the governed, not from a king's divine right.

The scale was staggering: roughly **100,000 copies** sold within three months (total
colonial population about 2.5 million), the equivalent of every adult having a copy today.
This directly accelerated the Continental Congress's vote for independence in summer 1776.

Key exam sentences:
- ***Common Sense* turned independence from "a debate among political elites" into
  "a mass popular movement."**
- Timeline: *Common Sense* January 1776 → Declaration of Independence July 1776 — it was
  the groundwork, the preparation of public opinion.

⚠️ Misconception trap: ❌ "*Common Sense* gave people the idea of independence for the
first time" → ✅ the idea existed before, but *Common Sense* **spread it at mass scale**
and gave it moral legitimacy.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 APUSH 最喜欢考的「一本书改变历史」例子之一。
我的记忆锚：**潘恩 = 把独立的道理讲给普通人听的人。**
关键时间：**1776 年 1 月《常识》→ 1776 年 7 月独立宣言**——先有舆论，再有宣言。
一句话区分：独立宣言骂的是暴君，《常识》骂的是王权制度本身——潘恩更激进。`,
        en: `Teacher said this is one of APUSH's favorite "one book changed history" examples.
My memory anchor: **Paine = the person who explained independence to ordinary people.**
Key timeline: ***Common Sense* January 1776 → Declaration of Independence July 1776** —
first came public opinion, then came the Declaration.
One-line distinction: the Declaration attacked the tyrant; *Common Sense* attacked the
institution of monarchy itself — Paine was more radical.`,
      },
    },

    {
      id: 'articles-of-confederation',
      termCn: '邦联条例（1781 年生效，1789 年废止）',
      termEn: 'The Articles of Confederation (in force 1781–1789)',
      standardRef: ['APUSH Period 3 Topic 3.7', 'APUSH — Key Concept 3.2.II', 'AP DBQ — continuity/change; causation'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `故事聚焦 1775-1783 年战争和宣言，没讲这个。
但「革命后第一套政府框架」是 APUSH Period 3 高频独立考点，绕不开。

**邦联条例（Articles of Confederation）**：1777 年起草，1781 年生效，1789 年宪法取代。
美国第一部成文宪法。

**为什么如此软弱？**
打独立战争就是为了摆脱一个强权中心——殖民者最怕再来一个伦敦，
所以**故意**把联邦造得很弱。

三个关键缺陷（AP 必考）：
- **无法征税**：只能向各州「请求」出钱，各州常常不给。
- **每州一票**：重大事项需九州同意，**修改条例需全体十三州一致同意**。
- **无执行机制**：中央无力强制任何州服从。

**暴露弱点的转折：Shays' Rebellion（谢斯起义，1786-87）**
马萨诸塞州农民因债务揭竿，邦联政府无力镇压，
直接推动 1787 年制宪会议召开。

考点关键句：**邦联条例是「恐惧强权」的产物，弱到无法运转，
为 1787 年宪法埋下直接原因。**
跨 Topic 指针：制宪细节在 constitutional-convention-1787，本课只需掌握「为什么失败」。`,
        en: `The story does not cover this — it focuses on the 1775–1783 war and the Declaration.
But "the first framework of government after the Revolution" is a standalone high-frequency
APUSH Period 3 point that cannot be skipped.

**The Articles of Confederation**:
drafted by the Continental Congress in 1777, took effect in 1781 (after ratification by all
states), and was replaced by the federal Constitution in 1789. It was the first written
constitution of the United States.

**Core design (why it was so weak):**
The Revolution was won against "one powerful center" — what colonists feared most was
another London, so they **deliberately** made the central government weak:

| What the Confederation had | What it lacked |
|---|---|
| Diplomacy / war / treaty power | Power to tax citizens directly |
| Authority to request funds from states (only request) | A unified executive (no president) |
| Management of western lands | Federal courts |
| | A common currency / commercial regulation |

Key structural weaknesses (AP must-knows):
- **No power to tax**: could only "request" money from states, which often refused.
- **One vote per state**: major decisions required nine states' agreement; **amendments required
  unanimous consent of all thirteen.**
- **No enforcement mechanism**: the central government could not compel any state to comply.

**The event that exposed the weakness: Shays' Rebellion (1786–87)**
Massachusetts farmers, crushed by debt, took up arms; the Confederation government was
powerless to suppress them, producing a consensus that "this framework must be replaced"
— directly driving the Constitutional Convention of 1787.

Key exam sentences:
- **The Articles of Confederation were a product of the Revolution's fear of strong power;
  they were too weak to function, and became the direct cause of the 1787 Constitution.**
- Cross-topic pointer: the 1787 Constitutional Convention is in the
  constitutional-convention-1787 topic; here you only need to master "why the Articles failed."`,
      },
      xiaoweiNote: {
        cn: `这条故事里没有，老师单独补的。
我的记忆锚：**邦联条例 = 因为怕再来一个英国国王，结果政府弱到什么都干不了。**
三个关键词：**无法征税 / 每州一票 / 谢斯起义逼出宪法**。
时间线：**1781 年生效 → 1786-87 谢斯起义 → 1787 制宪会议 → 1789 宪法取代**。
跟 constitutional-convention-1787 课是直接连着的：邦联失败 → 才有制宪会议。`,
        en: `Not in the story; teacher added it separately.
My memory anchor: **Articles of Confederation = they were so scared of another king that
they made the government too weak to do anything.**
Three key words: **no taxation / one vote per state / Shays' Rebellion forced the Constitution.**
Timeline: **1781 takes effect → 1786–87 Shays' Rebellion → 1787 Constitutional Convention →
1789 Constitution replaces it.**
This connects directly to the constitutional-convention-1787 topic: the Articles' failure led
to the Convention.`,
      },
    },

    {
      id: 'same-era-qing-qianlong',
      termCn: '同时代的中国：清乾隆（结构对照）',
      termEn: 'Same-Era China: the Qing under Qianlong (a Structural Mirror)',
      standardRef: ['Cross-civilization comparison', 'AP — comparative framing'],
      examFrequency: 'low',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这条故事里完全没讲，是老师补的「同时代的中国」对照，帮我把美国革命放进一个更大的世界里看。

1776 年是**清乾隆四十一年**，正值「康乾盛世」的高峰。乾隆皇帝在位，帝国疆域辽阔、人口空前、
国库充盈，是当时世界上最庞大、最富庶的中央集权帝国之一。

把两边并排看（只对照，不分高下）：
1. **政治正当性来自哪里**：美国革命把正当性放在「天赋人权 + 被统治者的同意 + 成文宣言」上，
   主张人民有权推翻暴政；清代把正当性放在「天命 + 礼法 + 皇权一统」上，皇帝是天子，受命于天。
2. **谁算政治共同体的一员**：两边都把绝大多数人排除在权力之外，方式不同。
   美国排除被奴役者、女性、原住民、无产白人；清代的绝大多数平民同样无参政之路，
   士大夫经科举入仕、辅佐皇权。
3. **对「反抗」的态度**：美国革命把「反抗暴政」写成天赋权利、立国根基；
   同期清帝国把稳定与一统视为最高价值，民间反抗被视为必须镇压的失序。

⚠️ Rule 0（中立，不下结论）：不能说美国「先进自由」、清代「落后专制」；
也不能反过来说清代「稳定有序」、美国「混乱分裂」。
两套制度各自回应各自时代与社会的问题，各有设计的智慧与盲点。

考点价值：把「人人平等却蓄奴」和「盛世却排除万民」并置，能让你看见一个更大的规律——
**几乎每个文明，都有自己「纸面理想」与「现实排除」之间的裂缝。** 这正是 AP 比较框架要的视野。`,
        en: `The story does not touch this at all; it's the "same-era China" comparison my
teacher added, to help me place the American Revolution in a larger world.

1776 was the **forty-first year of the Qianlong reign** in the Qing dynasty, at the height of
the "High Qing" era. The Qianlong Emperor reigned over a vast realm with an unprecedented
population and a full treasury, one of the largest and richest centralized empires in the
world at the time.

Set the two side by side (comparison only, no ranking):
1. **Where political legitimacy comes from**: the American Revolution placed legitimacy in
   "natural rights + the consent of the governed + a written declaration," claiming a people's
   right to overthrow tyranny; the Qing placed it in "the Mandate of Heaven + ritual law +
   unified imperial authority," the emperor being the Son of Heaven, mandated by Heaven.
2. **Who counts as a member of the political community**: both excluded the vast majority from
   power, by different means. America excluded the enslaved, women, Native peoples, and
   propertyless white men; under the Qing the great majority of commoners likewise had no path
   into governance, while scholar-officials entered service through the civil examinations to
   assist imperial rule.
3. **Attitude toward "resistance"**: the American Revolution wrote "resisting tyranny" into a
   natural right and the foundation of the nation; the contemporaneous Qing held stability and
   unity as the highest value, and popular revolt was seen as disorder to be suppressed.

⚠️ Rule 0 (neutral, no verdict): you cannot say America was "advanced and free" and the Qing
"backward and despotic," nor the reverse, that the Qing was "stable and orderly" and America
"chaotic and divided." Each system answered the problems of its own age and society, each with
its design's wisdom and its blind spots.

Exam value: setting "equality on paper yet slavery in fact" beside "a flourishing age yet the
exclusion of the multitude" lets you see a larger pattern — **almost every civilization has a
crack between its ideal on paper and its exclusion in practice.** That is exactly the vision
the AP comparative frame wants.`,
      },
      xiaoweiNote: {
        cn: `这条故事里没有，是老师额外补的。我一开始觉得跟美国革命没关系，后来想通了：
它不是要比谁好谁坏（Rule 0 不许下结论），是给我一面镜子——
**美国「写人人平等却蓄奴」，清代「号称盛世却把万民关在权力门外」**，
两边都有「理想 vs 现实」的裂缝。我的记忆锚：**1776 = 美国独立宣言那年 = 清乾隆四十一年。**`,
        en: `This isn't in the story; teacher added it. At first I thought it had nothing to do
with the American Revolution, then it clicked: it's not about ranking who's better (Rule 0
forbids a verdict), it's a mirror — **America "wrote all-equal yet held slaves," the Qing "was
called a flourishing age yet shut the multitude out of power"** — both have an "ideal vs
reality" crack. My memory anchor: **1776 = the year of the Declaration = the forty-first year
of the Qianlong reign.**`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1776 年那份独立宣言喊出了「人人生而平等」，可写它的 Jefferson 自己役使约 200 个被奴役者，
还亲手删掉了草稿里谴责奴隶贸易的那一段。同一时间，约五分之一的人是被奴役的，女性、原住民、
无产白人也都被关在「人人」门外。

你觉得这份宣言应该被看成「一个谎」，还是「一张还没兑现的支票」？
用至少两条具体证据支持你的判断。`,
      en: `The 1776 Declaration cried "all men are created equal," yet Jefferson, who wrote it,
held about two hundred enslaved people and cut the passage condemning the slave trade from his
own draft. At the same time, about a fifth of the people were enslaved, and women, Native
peoples, and propertyless white men were all shut out of "all men."

Should this Declaration be seen as "a lie," or as "a check not yet cashed"? Support your
judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- 「谎」这边的证据：Jefferson 终身蓄奴约 200 人、删掉草稿里骂奴隶贸易那段、「人人」实际只指有产白人男性、
  革命后 1787 年还把被奴役者算成 3/5。
- 「支票」这边的证据：这句话被白纸黑字写下后不再只属于作者，废奴、女权、民权运动一次次回到它「请兑现」；
  1863 年 Lincoln 在葛底斯堡演说引用它；内战后修正案废奴、写入「法律面前人人平等」。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**,
not which side you pick.
- Evidence for "a lie": Jefferson held about two hundred enslaved people his whole life, cut
  the slave-trade passage from his draft, "all men" meant only propertied white men, and after
  the revolution the enslaved were counted as three-fifths in 1787.
- Evidence for "a check": once set down in black and white the line no longer belonged to its
  author, and abolition, women's rights, and civil rights came back to it to "make good on it";
  in 1863 Lincoln quoted it in the Gettysburg Address; post-Civil War amendments abolished
  slavery and wrote in "equal protection of the laws."
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's
complexity.`,
      conceptsActivated: ['declaration-of-independence', 'who-was-excluded'],
    },
    {
      id: 'q2',
      cn: `课本常把美国革命讲成「全体人民众志成城反抗英国」。可 John Adams 粗估当时大概只有三分之一
支持独立，约三分之一保皇、约三分之一中立；保皇派输了之后，财产被没收，约六万到十万人被赶出国，
还被历史几乎抹掉。

如果你是 AP 老师，要出一道题考「『赢家书写历史』会让我们漏掉什么」，你会怎么提问？
请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `Textbooks often tell the American Revolution as "the whole people, of one will,
against Britain." But John Adams roughly estimated only about a third backed independence,
about a third stayed loyal, and about a third were neutral; after the Loyalists lost, their
property was confiscated, about sixty to a hundred thousand were driven out, and they were all
but erased from history.

If you were an AP teacher writing a question on "what does 'the winners write history' make us
miss," how would you phrase it? Write your question and explain what it's meant to make
students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
先把事实纪律放好：「三三三」是 Adams 的**粗估，不是精确统计**，历史学家对真实比例有争论——你的题目里要体现这一点，
别让学生把它当精确数据。
可以从 Loyalist 的角度切入——他在故事里说："我不只是输了，我还被『消失』了。"
你的题目可以让学生比较"课本里的『全体人民』"和"真实当年的支持/反对/中立三块"——
为什么「全体人民选择了自由」这句话，会悄悄把约三分之一的人、连同他们的家和理由一起删掉？`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
First set the factual discipline: the "thirds" is Adams's **rough estimate, not a precise
count**, and historians dispute the true proportions — your question should reflect that, so
students don't treat it as exact data.
You can come at it through the Loyalist — in the story he says: "I had not only lost, I had
been disappeared." Your question could have students compare "the textbook's 'whole people'"
with "the real split of for, against, and neutral" — why does the line "the whole people chose
freedom" quietly delete about a third of the people, along with their homes and their reasons?`,
      conceptsActivated: ['patriot-loyalist-neutral-split'],
    },
    {
      id: 'q3',
      cn: `1775 年 11 月，英国总督 Dunmore 宣布：投奔英军的被奴役者可获自由。于是数以万计的人冒死逃向英军。
给被奴役者开「自由」支票的，是殖民者要反抗的那个英国；而喊「自由」喊得最响的殖民者里，很多人自己蓄奴。

如果你是当时的一个被奴役者，你会投奔英军，还是留下？为什么？
用至少一条来自当时处境的具体理由支持你的选择（既要看见机会，也要看见风险）。`,
      en: `In November 1775, the British governor Dunmore declared that enslaved people who fled
to the British would be freed. Tens of thousands then fled at the risk of death to the British.
The one who wrote the enslaved a check of "freedom" was the very Britain the colonists meant to
resist; and many of the colonists who cried "liberty" loudest held slaves themselves.

If you were an enslaved person at the time, would you flee to the British, or stay? Why?
Support your choice with at least one specific reason from the situation of the time (see both
the opportunity and the risk).`,
      hintCn: `提示：先分清这是一道「换位 + 用证据权衡」的题，没有对错答案，AP 看你能不能把抽象选择「钉」在真实处境上。
- 投奔英军这边的理由：这是当时**唯一够得着的一线自由**；磨洋工、出逃本来就是被奴役者的反抗方式；
  有人成功被撤到 Nova Scotia、后到 Sierra Leone。
- 留下这边的理由：逃跑被抓回是当众毒打甚至处死、路上有追兵和猎奴犬；英国未必兑现承诺（这是削弱敌人的军事棋，不是善心），
  有人死于军营天花、被当苦力、甚至被转手卖回奴隶制。
进阶：注意 Dunmore 宣言对英国是「军事棋」、对被奴役者是「唯一的门」——同一件事，两种意义。
AP 看的是你能不能用一个真实细节，把你的判断撑住。`,
      hintEn: `Hint: first see this is a "step into another's shoes + weigh with evidence"
question, with no right answer; AP wants you to "pin" the abstract choice to the real situation.
- Reasons to flee to the British: it was **the one thread of freedom within reach**; working
  slow and running were already forms of the enslaved's resistance; some succeeded and were
  evacuated to Nova Scotia and later Sierra Leone.
- Reasons to stay: caught and dragged back meant a public beating or even death, with pursuers
  and slave-hunting dogs on the road; Britain might not keep its promise (it was a military move
  to weaken the enemy, not mercy), and some died of smallpox in the camps, were used as labor, or
  were even sold back into slavery.
Going deeper: note Dunmore's Proclamation was a "military move" for Britain and "the one door"
for the enslaved — the same act, two meanings. AP wants you to hold up your judgment with one
real detail.`,
      conceptsActivated: ['dunmore-proclamation', 'who-was-excluded'],
    },
  ],
};

export default notebook;
