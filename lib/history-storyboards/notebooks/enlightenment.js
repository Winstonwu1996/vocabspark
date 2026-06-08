// ─── 同伴笔记本架构 v1 · Enlightenment ───────────────────────────
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
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点 (Voltaire / Gouges / Toussaint 三条线)
//   - notebook 提供考点闭环 (Locke / Montesquieu / Rousseau / French Revolution 补完课纲)
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-5.1, 5.1.II, 5.1.III, 5.2
//   - California HSS 7.11.7, 7.11.8
//   - 弥补 enlightenment 课纲覆盖率从 52% → ~95%
//
// schemaVersion: 1 · notebookVersion: enlightenment-v1

export var notebook = {
  topicId: 'enlightenment',
  topicNameCn: '启蒙运动',
  topicNameEn: 'The Enlightenment',
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
    cn: `今天老师要我们学启蒙运动（1700s）。她给了一张纸，上面写着这些名字：

Voltaire（伏尔泰）、Locke（洛克）、Montesquieu（孟德斯鸠）、Rousseau（卢梭）、
Olympe de Gouges（古热）、Toussaint Louverture（图森·卢维杜尔）

还有几个词：natural rights（自然权利）、social contract（社会契约）、
separation of powers（三权分立）、religious tolerance（宗教宽容）

我先把这些记下来。等下读三个故事——伏尔泰、Gouges、Toussaint——
读完再回来对照这张单子，看我能不能解释这些词。

老师还说了一句话，我把它写在笔记本第一页：
**"不要只记名字和年份，要记'这个人想解决什么问题，他的答案是什么'。"**`,
    en: `Today my teacher told us we're learning the Enlightenment (1700s).
She gave us a sheet with these names:

Voltaire, Locke, Montesquieu, Rousseau,
Olympe de Gouges, Toussaint Louverture

Plus some terms: natural rights, social contract,
separation of powers, religious tolerance.

I'll write these down first. Then I'll read the three stories
(Voltaire, Gouges, Toussaint), come back, and check whether
I can explain each one.

Teacher said one thing I wrote on the first page of my notebook:
**"Don't just memorize names and dates — memorize
'what problem was this person trying to solve, what was their answer.'"**`,
    keyTerms: [
      { cn: '自然权利', en: 'natural rights' },
      { cn: '社会契约', en: 'social contract' },
      { cn: '三权分立', en: 'separation of powers' },
      { cn: '宗教宽容', en: 'religious tolerance' },
      { cn: '公意', en: 'general will' },
      { cn: '被统治者的同意', en: 'consent of the governed' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '伏尔泰',
        nameEn: 'Voltaire',
        ipa: '/vɒlˈtɛər/',
        roleCn: '法国哲学家·讽刺作家，宗教宽容倡导者',
        roleEn: 'French philosophe, advocate of religious tolerance',
        mustKnow: true,
        audioKey: 'voltaire',
      },
      {
        nameCn: '约翰·洛克',
        nameEn: 'John Locke',
        ipa: '/dʒɒn lɒk/',
        roleCn: '英国哲学家，自然权利理论奠基人',
        roleEn: 'English philosopher, founder of natural rights theory',
        mustKnow: true,
        audioKey: 'john-locke',
      },
      {
        nameCn: '孟德斯鸠',
        nameEn: 'Baron de Montesquieu',
        ipa: '/ˌmɒntɪˈskjuː/',
        roleCn: '法国思想家，三权分立理论提出者',
        roleEn: 'French thinker, proposed separation of powers',
        mustKnow: true,
        audioKey: 'montesquieu',
      },
      {
        nameCn: '卢梭',
        nameEn: 'Jean-Jacques Rousseau',
        ipa: '/ʒɑ̃ ʒak ruːˈsoʊ/',
        roleCn: '法国哲学家，社会契约论作者',
        roleEn: 'French philosopher, author of The Social Contract',
        mustKnow: true,
        audioKey: 'rousseau',
      },
      {
        nameCn: '奥兰普·德·古热',
        nameEn: 'Olympe de Gouges',
        ipa: '/ɔlɛ̃p də ɡuʒ/',
        roleCn: '法国女权先驱，《女性权利宣言》作者',
        roleEn: 'French feminist, author of Declaration of Rights of Woman',
        mustKnow: true,
        audioKey: 'olympe-de-gouges',
      },
      {
        nameCn: '图森·卢维杜尔',
        nameEn: 'Toussaint Louverture',
        ipa: '/tuːˈsæ̃ luːvɛrˈtjʊər/',
        roleCn: '海地革命领导人，用启蒙语言反抗奴隶制',
        roleEn: 'Haitian Revolution leader, used Enlightenment language against slavery',
        mustKnow: true,
        audioKey: 'toussaint-louverture',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'voltaire',
      termCn: '伏尔泰 / 宗教宽容',
      termEn: 'Voltaire / Religious Tolerance',
      defCn: '宗教宽容（religious tolerance）就是：不管你信哪个教，政府和社会都不能因为你的信仰杀你、关你、剥夺你的权利。伏尔泰是最早大声喊出这件事的人之一。',
      defEn: 'Religious tolerance means the government and society cannot punish you, imprison you, or take away your rights just because of your religion. Voltaire was one of the first people to argue loudly for this idea.',
      standardRef: ['AP World KC-5.1', 'CA HSS 7.11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'voltaire',
        nodeIds: ['voltaire-N6', 'voltaire-N10'],
        xiaoweiNote: {
          cn: `这段故事我读过！在伏尔泰那条故事线里，他帮了一个叫 Jean Calas 的人。
Jean Calas 被指控杀了自己的儿子——其实没有。
他唯一的"罪"是：他是 Protestant（新教徒），住在天主教为主的法国。
他就这样被处死了。
伏尔泰花了 3 年时间帮他洗清冤情。**这就是"宗教宽容"在现实里是什么意思。**

注意一点：伏尔泰争取宗教宽容，但他自己写过反犹太人的词典条目。
他争取的"宽容"不是给所有人的。
这点选择题不一定直接考，但写 DBQ 大作文会用到。

考点关键句：**伏尔泰的《论宽容》（Treatise on Tolerance，1763 年）** 是启蒙时代宗教宽容思想最重要的文章之一。`,
          en: `I read this part! In Voltaire's story line, he helped a man named Jean Calas.
Jean Calas was accused of killing his own son — he didn't do it.
His only "crime" was being Protestant in a mostly Catholic France.
He was executed for that.
Voltaire spent 3 years fighting to clear his name. **That's what "religious tolerance" looks like in real life.**

One thing to watch: Voltaire fought for religious tolerance, but he also wrote antisemitic dictionary entries.
The "tolerance" he fought for wasn't for everyone.
Multiple choice tests might not ask this directly, but DBQ essays use it.

Key exam sentence: **Voltaire's Treatise on Tolerance (1763)** is one of the most important texts on religious tolerance from the Enlightenment era.`,
        },
      },
    },

    {
      id: 'locke-natural-rights',
      termCn: '洛克 / 自然权利',
      termEn: 'Locke / Natural Rights',
      defCn: '自然权利（natural rights）就是：人活着就自带的权利，不是国王给的，也不是教会给的。洛克说这三条权利是每个人生来就有的：生命（life）、自由（liberty）、财产（property）。',
      defEn: 'Natural rights are rights you have simply because you are a person — not because a king or church granted them to you. Locke said every person is born with three natural rights: life, liberty, and property.',
      standardRef: ['AP World KC-5.1.II', 'CA HSS 7.11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'voltaire', nodeId: 'voltaire-N5', context: 'Voltaire 在英国流亡时读到 Locke 的《政府论》' },
        ],
      },
      standaloneText: {
        cn: `John Locke（约翰·洛克，1632-1704），英国哲学家。

他最核心的一个主张是这个：
**人生来就有三大自然权利——生命（life）、自由（liberty）、财产（property）。**
这些权利不是国王给你的，也不是教会给你的——是你作为人就有的。

他还说了另一件事：政府凭什么统治你？
答：靠**被统治者的同意**（consent of the governed）。
如果政府侵犯了你的自然权利，人民有权推翻它（right of revolution，革命权）。

代表作：**《政府论》（Two Treatises of Government，1689 年）**。
他写这本书的时候，英国刚发生了 1688 年的"光荣革命"（Glorious Revolution）——
议会推翻了国王 James II。所以他不是在写幻想，他在为一场刚发生的真实革命找道理。

这套思想后来直接进了美国《独立宣言》（1776 年）：
"生命、自由、追求幸福的权利"——Thomas Jefferson 把 "property" 改成了 "pursuit of happiness"。

故事连接：伏尔泰 1726 年流亡英国时读到了 Locke。
在伏尔泰那条故事线里提到，他在伦敦的笔记本上写："原来政府可以不是上帝任命的。"`,
        en: `John Locke (1632-1704), English philosopher.

His most important argument goes like this:
**Every person is born with three natural rights — life, liberty, and property.**
These rights don't come from kings or churches — they exist because you're a person.

He also said: what gives a government the right to rule you?
Answer: the **consent of the governed**.
If a government violates your natural rights, the people have the right to overthrow it (right of revolution).

Major work: **Two Treatises of Government (1689)**.
He wrote it right after England's 1688 Glorious Revolution — when Parliament overthrew King James II.
He wasn't writing in the abstract — he was giving reasons for a revolution that had just happened.

This thinking went directly into the American Declaration of Independence (1776):
"Life, liberty, and the pursuit of happiness" — Thomas Jefferson changed "property" to "pursuit of happiness."

Voltaire read Locke during his 1726 exile in England.
In Voltaire's story line, there's a moment where Voltaire writes in his London notebook:
"So government doesn't have to be appointed by God."`,
      },
      xiaoweiNote: {
        cn: `老师强调："三大自然权利"这四个字必须背下来——选择题考过。
我的记忆口诀：**Life-Liberty-Property，把最后的 P 换成 Pursuit of Happiness，就是美国版。**`,
        en: `My teacher said you have to memorize the phrase "three natural rights" — it shows up in multiple choice.
My mnemonic: **Life-Liberty-Property — swap the last P for Pursuit of Happiness and you've got the American version.**`,
      },
    },

    {
      id: 'montesquieu-separation-of-powers',
      termCn: '孟德斯鸠 / 三权分立',
      termEn: 'Montesquieu / Separation of Powers',
      defCn: '三权分立（separation of powers）就是：把政府的权力切成三块——立法（制定法律）、行政（执行法律）、司法（判断谁违法）——三块分开，互相管，这样没有任何一个人或机构能独揽所有权力。孟德斯鸠（Montesquieu）提出了这个想法。',
      defEn: 'Separation of powers means splitting government authority into three separate parts — legislative (making laws), executive (carrying out laws), and judicial (deciding who broke the law) — so no single person or group can control everything. Montesquieu came up with this idea.',
      standardRef: ['AP World KC-5.1.II', 'CA HSS 7.11.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `Baron de Montesquieu（孟德斯鸠，1689-1755），法国贵族 + 哲学家。

1748 年他出版了《论法的精神》（The Spirit of the Laws）。

他的核心主张：
**政府权力必须分成三个独立的部分——立法（legislative）、行政（executive）、司法（judicial）。**
这叫"三权分立"，英文是 separation of powers。

为什么要分？他研究了两个国家：
1. 英国——光荣革命之后，议会和国王分权，没有一个人说了算。
2. 法国——路易十四说过"朕即国家"，一个人掌握全部权力。

他得出结论：**一个人或一个机构同时掌握所有权力，就会变成暴政（tyranny）。**

他还提出了配套机制——**制衡（checks and balances）**：
每一个分支都有限制另外两个分支的能力，防止任何一个独大。

美国连接：1787 年美国宪法里——
- Article I：国会（Congress）负责立法
- Article II：总统（President）负责行政
- Article III：最高法院（Supreme Court）负责司法

这三条直接照搬孟德斯鸠的设计。James Madison 在 Federalist No. 47 里直接点名引用了孟德斯鸠。

中国连接：辛亥革命后《中华民国临时约法》（1912 年）也借鉴了三权分立结构。
今天台湾的"五权宪法"（孙中山版本）= 孟德斯鸠三权 + 监察 + 考试。`,
        en: `Baron de Montesquieu (1689-1755), French aristocrat and philosopher.

In 1748 he published The Spirit of the Laws.

His core argument:
**Government power must be divided into three independent branches — legislative, executive, judicial.**
That's "separation of powers."

Why divide? He studied two countries:
1. England — after the Glorious Revolution, Parliament and the king shared power. No single person was in charge.
2. France — Louis XIV famously said "I am the state." One person held all the power.

His conclusion: **when one person or institution holds all power, it becomes tyranny.**

He also proposed a companion idea — **checks and balances**:
each branch has the ability to limit the other two, so no one branch can dominate.

US connection: The 1787 US Constitution —
- Article I: Congress handles legislation
- Article II: The President handles execution
- Article III: The Supreme Court handles judicial decisions

This setup copies Montesquieu directly. James Madison cited Montesquieu by name in Federalist No. 47.

China connection: After the 1911 Revolution, the Provisional Constitution of the Republic of China (1912) also borrowed the three-branch structure.
Today's Taiwan "Five-Power Constitution" (Sun Yat-sen's version) = Montesquieu's three branches + Control + Examination.`,
      },
      xiaoweiNote: {
        cn: `老师说三权分立是 Grade 7 启蒙运动**最高频考点**——几乎每年州统考都有一题。
我把它和"美国宪法 = 孟德斯鸠 + Locke"一起记。

记忆口诀：**L-E-J**（Legislative-Executive-Judicial）= 三权分立的"骨架"。
**Checks and balances** = 三权之间的"筋"。
骨架 + 筋 = 完整的孟德斯鸠。`,
        en: `Teacher said separation of powers is the **most frequently tested** Enlightenment concept in Grade 7 — almost every year.
I memorize it together with "US Constitution = Montesquieu + Locke."

Mnemonic: **L-E-J** (Legislative-Executive-Judicial) = the "skeleton" of separation of powers.
**Checks and balances** = the "ligaments" connecting the three branches.
Skeleton + ligaments = the full Montesquieu.`,
      },
    },

    {
      id: 'rousseau-social-contract',
      termCn: '卢梭 / 社会契约',
      termEn: 'Rousseau / Social Contract',
      defCn: '社会契约（social contract）是卢梭提出的一个想法：人们组成社会、建立政府，是因为大家一起同意了要这样做。政府的权力不是来自上帝，也不是来自国王的血统，而是来自全体人民的共同意志——他叫这个"公意"（general will）。',
      defEn: 'The social contract is Rousseau\'s idea that people form societies and governments because everyone collectively agreed to do so. A government\'s power doesn\'t come from God or royal blood — it comes from the shared will of all the people, which he called the "general will."',
      standardRef: ['AP World KC-5.1.II', 'CA HSS 7.11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `Jean-Jacques Rousseau（让-雅克·卢梭，1712-1778），日内瓦/法国哲学家。

1762 年他出版了**《社会契约论》（The Social Contract）**。
开篇第一句就是：**"人生而自由，却无往不在枷锁之中。"**
（Man is born free, but everywhere he is in chains.）

他的核心主张分三点：

1. **社会契约（social contract）**：人离开自然状态加入社会，是因为大家共同同意建立一个保护所有人利益的政府。
2. **公意（general will）**：政府的合法性来自"全体人民的共同意志"。不是国王，不是教会，不是某个阶级——是所有人。
3. **直接民主比代议民主更好**：他认为让别人替你投票不算真正的民主，每个人应该亲自参与决策。（这一点和 Locke 不一样——Locke 接受代议制。）

卢梭和洛克的关键区别：
- Locke 说"政府保护**个人**的自然权利"
- Rousseau 说"政府执行**集体**的公意"
- 这个区别后来造成了美国（更倾向 Locke）和法国（更倾向 Rousseau）两条不同路线的分歧。

法国大革命直接连接：1789 年《人权宣言》第 3 条："主权在民"（national sovereignty resides in the nation）——直接来自 Rousseau。

注意一点：Rousseau 一边写"自由是天赋人权"，一边把自己 5 个亲生孩子送进巴黎孤儿院。那个年代孤儿院死亡率约 70%。
这是 AP DBQ 的经典材料——让学生分析"启蒙哲人说的和做的不一样"。`,
        en: `Jean-Jacques Rousseau (1712-1778), Geneva/French philosopher.

In 1762 he published **The Social Contract**.
The famous opening line: **"Man is born free, but everywhere he is in chains."**

His core arguments, in three parts:

1. **Social contract**: people leave the natural state and form society because everyone collectively agrees to create a government that protects all people's interests.
2. **General will**: government legitimacy comes from "the common will of all the people" — not king, not church, not one class — everyone.
3. **Direct democracy beats representative democracy**: he thought voting through representatives isn't real democracy; each person should participate directly. (This differs from Locke, who accepted representative government.)

Key difference between Rousseau and Locke:
- Locke: "government protects **individual** natural rights"
- Rousseau: "government executes the **collective** general will"
- This split later became the root of the difference between the US path (more Locke) and the French path (more Rousseau).

French Revolution direct link: The 1789 Declaration of the Rights of Man, Article 3: "national sovereignty resides in the nation" — directly from Rousseau.

One thing to note: Rousseau wrote "freedom is a natural right" while sending all 5 of his biological children to a Paris orphanage — where mortality rates were about 70%.
This is classic AP DBQ material — students analyze "the Enlightenment philosopher's words vs. deeds."`,
      },
      xiaoweiNote: {
        cn: `这个例子我印象很深——卢梭写得很美，但他对自己孩子做的事很难看。
老师说写 AP 大作文一定要写"言行不一"，不要只夸他。

另一个考点：如果题目问"哪位启蒙哲人最影响法国大革命的激进派（雅各宾派 / Robespierre）"，
答案是 Rousseau，不是 Locke。Locke 更影响美国这边的温和派。`,
        en: `This example stuck with me — Rousseau wrote beautifully but treated his own children terribly.
Teacher said AP essays must mention "words vs. deeds," don't just praise him.

Another exam point: if the question asks "which Enlightenment philosopher most influenced the radical faction of the French Revolution (Jacobins / Robespierre),"
the answer is Rousseau, not Locke. Locke influenced the more moderate American side.`,
      },
    },

    {
      id: 'gouges-women-rights',
      termCn: 'Olympe de Gouges / 女性权利',
      termEn: 'Olympe de Gouges / Women\'s Rights',
      defCn: 'Olympe de Gouges（奥兰普·德·古热）是法国女权先驱。1791 年她写了《女权宣言》（Declaration of the Rights of Woman），指出当时的"人权"其实只保护男性。她用启蒙运动自己的语言来批判启蒙运动的不平等。',
      defEn: 'Olympe de Gouges was a French pioneer for women\'s rights. In 1791 she wrote the Declaration of the Rights of Woman, pointing out that the "human rights" of her era only protected men. She used the Enlightenment\'s own language to call out the Enlightenment\'s inequality.',
      standardRef: ['AP World KC-5.1', 'CA HSS 7.11.7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'gouges',
        nodeIds: ['gouges-N6', 'gouges-N9', 'gouges-N10'],
        xiaoweiNote: {
          cn: `Gouges 那条故事线整条都讲她。1791 年《女权宣言》，1793 年被砍头。

重点是她怎么做的：她改写了《人权宣言》，把每一条里的 "homme"（法文既是"人"也是"男人"）后面都加上"和女人"。
这就证明了——那个时代的"人权"实际上不包括女性。
**她的名言："女人有权登上断头台，也应该有权登上讲台。"**
（她最后真的登上了断头台——1793 年 11 月 3 日。）

AP 考过她——通常和 Mary Wollstonecraft（英国，1792 年《女权辩护》）成对出现，作为"被启蒙运动排除在外的人"的例子。

考点关键句：**Gouges 用启蒙运动自己的语言（natural rights, equality）来批判启蒙运动对女性的排除。** 这叫"用敌人的武器打敌人"。`,
          en: `Gouges's story line covers her completely. The Declaration of the Rights of Woman in 1791, executed in 1793.

The key is what she did: she rewrote the Declaration of the Rights of Man, adding "and woman" after every "homme" (which means both "human" and "man" in French).
That proved it — the "human rights" of her era didn't actually include women.
**Her famous line: "Woman has the right to mount the scaffold; she must equally have the right to mount the rostrum."**
(She literally mounted the scaffold — November 3, 1793.)

AP has tested her — usually paired with Mary Wollstonecraft (English, 1792, A Vindication of the Rights of Woman) as examples of "those excluded by the Enlightenment."

Key exam sentence: **Gouges used the Enlightenment's own language (natural rights, equality) to critique the Enlightenment's exclusion of women.** That's "using the enemy's weapons against the enemy."`,
        },
      },
    },

    {
      id: 'toussaint-haitian-revolution',
      termCn: 'Toussaint Louverture / 海地革命',
      termEn: 'Toussaint Louverture / Haitian Revolution',
      defCn: '图森·卢维杜尔（Toussaint Louverture）是海地革命的领导人。海地革命（1791-1804 年）是全球历史上唯一一场成功的奴隶革命——被奴役的人推翻了奴隶主，建立了独立国家。',
      defEn: 'Toussaint Louverture was the leader of the Haitian Revolution. The Haitian Revolution (1791-1804) was the only successful slave revolution in world history — enslaved people overthrew their enslavers and founded an independent nation.',
      standardRef: ['AP World KC-5.2', 'CA HSS 7.11.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'toussaint',
        nodeIds: ['toussaint-N1', 'toussaint-N7', 'toussaint-N8', 'toussaint-N12'],
        xiaoweiNote: {
          cn: `Toussaint 那条故事线整条就是他。几个必背时间点：

- **1791 年 8 月**：Bois Caïman 起义——革命开始
- **1793 年 8 月**：Sonthonax 在北部废除奴隶制。**1794 年 2 月**：法国国民公会宣布全法殖民地废奴
- **1804 年**：海地独立——第一个由前奴隶建立的国家
- **Toussaint 1803 年死在法国监狱里**，没有活到独立那天。继任者 Dessalines 完成了独立宣言。

考点关键句：
1. 海地革命是**全球唯一一场成功的奴隶革命**。
2. 海地是**美洲第二个独立的国家**（第一是美国 1776 年）。

AP DBQ 经典题角度：海地革命受 Locke、Rousseau 启发——但 Locke 自己投资了皇家非洲贸易公司（Royal African Company，做奴隶贸易），Rousseau 也从没明确反对奴隶制。
这叫"启蒙思想的内部矛盾"。

注意一点：法国大革命 1794 年废奴，但 1802 年 Napoleon 又在其他殖民地恢复了奴隶制，还派军队去海地想抓 Toussaint。
这说明"启蒙的承诺"非常脆弱，要靠像 Toussaint 这样的人用武力守住。`,
          en: `Toussaint's story line is entirely about him. Key dates you have to memorize:

- **August 1791**: Bois Caïman uprising — the revolution begins
- **August 1793**: Sonthonax abolishes slavery in the north. **February 1794**: the French National Convention abolishes slavery in all French colonies
- **1804**: Haitian independence — the first nation founded by formerly enslaved people
- **Toussaint died in a French prison in 1803** — he never saw independence. His successor Dessalines completed the independence declaration.

Key exam sentences:
1. The Haitian Revolution is **the only successful slave revolution in world history**.
2. Haiti is **the second independent nation in the Americas** (after the US in 1776).

Classic AP DBQ angle: the Haitian Revolution was inspired by Locke and Rousseau — but Locke himself invested in the Royal African Company (which ran the slave trade), and Rousseau never clearly opposed slavery.
That's called "the internal contradictions of Enlightenment thought."

One more thing: France abolished slavery in 1794, but Napoleon restored it in 1802 in other colonies and sent troops to Haiti to capture Toussaint.
This shows how fragile "the Enlightenment's promise" was — it had to be defended by force by people like Toussaint.`,
        },
      },
    },

    {
      id: 'french-revolution-1789',
      termCn: '法国大革命 1789',
      termEn: 'French Revolution 1789',
      defCn: '法国大革命（1789-1799 年）是启蒙思想第一次大规模的政治实验。法国人推翻了国王，颁布了《人权宣言》，但革命后来失控，变成了大规模处决，最后被 Napoleon 结束。',
      defEn: 'The French Revolution (1789-1799) was the first large-scale political experiment of Enlightenment ideas. The French overthrew their king, passed the Declaration of the Rights of Man, but the revolution spiraled out of control into mass executions and was eventually ended by Napoleon.',
      standardRef: ['AP World KC-5.2', 'CA HSS 7.11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'gouges', nodeId: 'gouges-N4', context: 'Gouges 1789 在巴黎现场目击《人权宣言》通过' },
          { lens: 'toussaint', nodeId: 'toussaint-N6', context: '1791 法国大革命消息传到 Saint-Domingue 引发奴隶起义' },
          { lens: 'voltaire', nodeId: 'voltaire-N12', context: '1791.7.11 Voltaire 遗体被革命法庭迁葬入 Panthéon' },
        ],
      },
      standaloneText: {
        cn: `法国大革命（1789-1799 年）是启蒙思想第一次大规模政治实验。

几个核心时间点：

- **1789 年 7 月 14 日**：巴士底狱（Bastille）被攻陷。这是大革命开始的标志。今天法国国庆日就是这一天（Bastille Day）。
- **1789 年 8 月 26 日**：《人权宣言》（Declaration of the Rights of Man and of the Citizen）通过，共 17 条。每一条都能看到 Locke 的自然权利 + Rousseau 的人民主权 + 孟德斯鸠的三权分立的影子。
- **1793 年 1 月 21 日**：路易十六（Louis XVI）被送上断头台。
- **1793-1794 年**：恐怖统治（Reign of Terror）。Robespierre 用"公意"的名义处决了约 17,000 人，包括 Gouges。
- **1794 年 2 月**：国民公会宣布废除所有法国殖民地的奴隶制——这直接影响了海地。
- **1799 年**：Napoleon 发动政变，大革命阶段结束。

考点关键句：法国大革命的口号是 **"liberté, égalité, fraternité"（自由、平等、博爱）**。这三个词每一个都来自启蒙运动。

三条故事线都和大革命有交叉：
- 伏尔泰 1778 年去世（比革命早 11 年），但 1791 年他的遗体被迁入 Panthéon（革命英雄祠）
- Gouges 1793 年死于革命的恐怖统治
- Toussaint 利用 1789-1793 年法国本土的混乱在海地发动起义

注意一点：法国大革命既是"启蒙的胜利"（推翻王权、颁布人权宣言），也是"启蒙的失败"（恐怖统治、处决女权先驱、Napoleon 称帝）。
AP 题目经常问："法国大革命是启蒙运动的成就还是背叛？"——两边都要写。`,
        en: `The French Revolution (1789-1799) was the first large-scale political experiment of Enlightenment thought.

Key dates:

- **July 14, 1789**: The Bastille is stormed — the symbolic start of the revolution. France's national holiday (Bastille Day) is still this date.
- **August 26, 1789**: The Declaration of the Rights of Man and of the Citizen passes — 17 articles, each one drawing from Locke's natural rights + Rousseau's popular sovereignty + Montesquieu's separation of powers.
- **January 21, 1793**: Louis XVI is executed.
- **1793-1794**: Reign of Terror. Robespierre executed about 17,000 people — including Gouges — in the name of "general will."
- **February 1794**: The National Convention abolishes slavery in all French colonies — this directly affected Haiti.
- **1799**: Napoleon's coup — the revolutionary phase ends.

Key exam sentence: The slogan of the French Revolution is **"liberté, égalité, fraternité" (liberty, equality, fraternity)** — every one of those words comes from the Enlightenment.

All three story lines cross paths with the Revolution:
- Voltaire died in 1778 (11 years before the revolution), but in 1791 his remains were moved into the Panthéon (France's revolutionary hero shrine)
- Gouges was executed in 1793 during the Reign of Terror
- Toussaint used the chaos in France from 1789-1793 to launch the Haitian uprising

One thing to watch: the French Revolution was both "Enlightenment's victory" (overthrowing the monarchy, passing the Declaration of Rights) and "Enlightenment's failure" (Reign of Terror, executing the founder of women's rights, Napoleon crowning himself emperor).
AP questions often ask: "Was the French Revolution the Enlightenment's achievement or its betrayal?" — answer both sides.`,
      },
      xiaoweiNote: {
        cn: `三个年份我必须背熟：
- **1789**：巴士底狱 + 人权宣言
- **1793**：路易十六 + 恐怖统治 + Gouges 被处决
- **1794**：殖民地废奴

老师说这三个年份在 Grade 7 历史选择题里出现率最高。`,
        en: `Three years I have to lock in:
- **1789**: Bastille + Declaration of Rights
- **1793**: Louis XVI + Reign of Terror + Gouges executed
- **1794**: colonial abolition

Teacher said these three years show up most often in Grade 7 multiple choice.`,
      },
    },

    {
      id: 'enlightenment-contradictions',
      termCn: '启蒙运动的内部矛盾',
      termEn: 'Internal Contradictions of the Enlightenment',
      defCn: '启蒙运动喊出"人人有自然权利"，但那个时代的大部分启蒙哲人没有把这句话用到女性、奴隶、穷人身上。说的和做的之间有巨大的落差——这就是"内部矛盾"。',
      defEn: 'The Enlightenment declared "everyone has natural rights," but most Enlightenment thinkers of that era did not apply this to women, enslaved people, or the poor. The gap between what they said and what they did is called the "internal contradiction."',
      standardRef: ['AP World KC-5.1.III', 'AP DBQ rubric'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['voltaire-N8', 'gouges-N6', 'toussaint-N4'],
        xiaoweiNote: {
          cn: `老师特别强调——AP 大作文一定会考这个。

启蒙运动说"人人有自然权利"，但是：
- Voltaire 持股 Compagnie des Indes（间接参与奴隶贸易）
- Locke 投资 Royal African Company（直接做奴隶贸易）
- Rousseau 把自己 5 个孩子送孤儿院（孤儿院死亡率约 70%）
- 《人权宣言》里的 "homme" 只指男性公民，不含女性、奴隶、无财产男性
- 法国大革命用"公意"的名义处决了约 17,000 人
- 美国独立时 Jefferson 自己拥有奴隶，同时写着"all men are created equal"

AP DBQ 经典提问：**"启蒙运动的'普遍人权'到底有多普遍？"**

这不是说启蒙运动是骗局。而是说：**理念和实践之间有将近 200 年的落差。**
海地革命、女权运动、废奴运动、民权运动——每一个都是把"普遍"真正变普遍的努力。

写 AP 大作文的模板：
1. 先承认启蒙运动的进步意义（挑战了神权和王权的合法性）
2. 列出至少 3 个矛盾案例（Locke 投资奴隶贸易、Rousseau 送孤儿院、Jefferson 拥有奴隶）
3. 用 Toussaint 和 Gouges 作为"启蒙运动的真正继承人"——他们比启蒙哲人自己更认真对待启蒙的承诺
4. 结论：启蒙是一个**未完成的项目**（unfinished project），不是已经完成的成品`,
          en: `Teacher especially emphasized this — AP essays definitely test this.

Enlightenment said "everyone has natural rights," but:
- Voltaire held shares in Compagnie des Indes (indirectly involved in the slave trade)
- Locke invested in the Royal African Company (directly in the slave trade)
- Rousseau sent all 5 of his children to orphanages (mortality rate was about 70%)
- "Homme" in the Declaration of Rights only meant male citizens — not women, not enslaved people, not propertyless men
- The French Revolution executed about 17,000 people in the name of "general will"
- Jefferson owned enslaved people while writing "all men are created equal"

Classic AP DBQ question: **"How universal were the Enlightenment's 'universal rights'?"**

This doesn't mean the Enlightenment was a fraud. It means: **there's nearly a 200-year gap between the idea and its practice.**
The Haitian Revolution, the women's rights movement, abolition, the civil rights movement — each one was the work of making "universal" actually universal.

AP essay template:
1. First acknowledge the Enlightenment's progress (it challenged the legitimacy of divine right and monarchy)
2. List at least 3 contradiction cases (Locke investing in the slave trade, Rousseau's orphanage, Jefferson owning enslaved people)
3. Use Toussaint and Gouges as "the Enlightenment's true heirs" — they took the Enlightenment's promises more seriously than the philosophers themselves did
4. Conclusion: The Enlightenment is an **unfinished project**, not a finished product`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Locke 在《政府论》里写："生命、自由、财产是人天生就有的权利。"
但他自己投资了 Royal African Company——皇家非洲贸易公司，专门做奴隶买卖。

你觉得这算不算矛盾？为什么？
如果 Locke 本人现在坐在你面前，他可能会怎么解释自己？`,
      en: `Locke wrote in the Two Treatises of Government that "life, liberty, and property are natural rights."
But he himself invested in the Royal African Company — which ran the slave trade.

Do you think this is a contradiction? Why?
If Locke were sitting in front of you right now, how might he try to explain himself?`,
      hintCn: `可以从两个角度想：

① Locke 自己心里可能没把被奴役的非洲人当作"人"——他的"自然权利"可能只指欧洲基督徒男性。
② 或者 Locke 自己也知道这是矛盾，只是没有勇气放弃投资收益。

两种解读都有历史学家支持。

进一步想想：今天我们能不能找到类似的情况——某个人公开主张一种价值，私下却做相反的事？
这种矛盾是个人的问题，还是那个时代的问题？`,
      hintEn: `Think from two angles:

① Locke may not have considered enslaved Africans as "human" in his framework — his "natural rights" may have only meant European Christian men.
② Or Locke knew this was a contradiction but lacked the courage to give up the investment income.

Both interpretations are supported by historians.

Going deeper: can you find a similar situation today — someone who publicly stands for one value while privately doing the opposite?
Is that kind of contradiction a personal failing, or a feature of the era?`,
      conceptsActivated: ['locke-natural-rights', 'enlightenment-contradictions'],
    },
    {
      id: 'q2',
      cn: `Rousseau 在《社会契约论》第一句写："人生而自由，却无往不在枷锁之中。"
但他把自己的 5 个亲生孩子全部送进了巴黎孤儿院——那时孤儿院死亡率约 70%。

如果你是 AP 老师，要用这件事出一道 DBQ 大作文题，你会怎么问？`,
      en: `Rousseau opened The Social Contract with "Man is born free, but everywhere he is in chains."
Yet he sent all 5 of his biological children to a Paris orphanage — where about 70% of children died.

If you were an AP teacher writing a DBQ question about this, how would you phrase it?`,
      hintCn: `DBQ 通常会给学生几份原始材料（primary sources），比如：卢梭自己写的信、孤儿院的记录、18 世纪普通法国孩子的命运描述。
然后让学生分析：思想家言行不一，是个人道德问题，还是时代的结构性问题？
没有标准答案，关键是要用证据说话。

可能的提问方式：
- "把卢梭关于儿童教育的写作（《爱弥儿》，1762 年）和他对自己孩子的实际做法做比较。这个落差说明了什么？"
- "一个哲学家的思想，能不能和他的个人行为分开来看？用卢梭为例。"`,
      hintEn: `DBQs typically give students primary sources — like Rousseau's own letters, orphanage records, and descriptions of ordinary 18th-century French children's lives.
Then they ask: is the philosopher's gap between words and deeds a personal moral failing, or a structural feature of the era?
No standard answer — what matters is using evidence.

Possible question angles:
- "Compare Rousseau's writing on childhood education (Emile, 1762) with his own treatment of his children. What does this gap reveal?"
- "Is it possible to separate a philosopher's ideas from their personal conduct? Use Rousseau as a case study."`,
      conceptsActivated: ['rousseau-social-contract', 'enlightenment-contradictions'],
    },
    {
      id: 'q3',
      cn: `美国《独立宣言》（1776 年）写 "all men are created equal"。
法国《人权宣言》（1789 年）写 "Men are born free and equal in rights"。
但 Toussaint Louverture——海地革命的领袖——说："你们说人人平等，为什么不包括我们？"

Toussaint 1791 年起义的时候，他可能读过哪些启蒙时期的书？
他对启蒙思想的态度，是"完全相信"、"完全拒绝"，还是别的什么？`,
      en: `The US Declaration of Independence (1776) said "all men are created equal."
The French Declaration of the Rights of Man (1789) said "Men are born free and equal in rights."
But Toussaint Louverture — the leader of the Haitian Revolution — essentially said: "You say everyone is equal, so why not us?"

What Enlightenment books had Toussaint likely read by 1791?
What was his attitude toward Enlightenment thought — "fully believed," "fully rejected," or something else?`,
      hintCn: `Toussaint 读过 Raynal 1780 年的第三版著作——这个版本在法国被查禁，里面有 Diderot 写的一段"Spartacus"，煽动奴隶起义。他可能也读过 Rousseau。

他的态度可以用一句话概括：**"我相信你们自己写的东西，比你们更认真。"**
他用启蒙的语言，去对抗那些不打算让他自由的启蒙者。这是 AP DBQ 的经典素材。

再往深里想：历史上还有谁用过这种"用对方的话来对抗对方"的策略？
提示：Frederick Douglass 引用《独立宣言》来论证废奴；Martin Luther King 引用《独立宣言》来论证民权——同一套打法。`,
      hintEn: `Toussaint had read Raynal's 1780 third edition — the one banned in France, which included Diderot's "Spartacus" passage inciting enslaved people to revolt. He likely also read Rousseau.

His attitude can be summed up in one line: **"I believe what you wrote more than you yourselves do."**
He used Enlightenment language against the very Enlighteners who had no intention of freeing him. Excellent AP DBQ material.

Going deeper: who else in history used this same strategy — turning someone's own words against them?
Hint: Frederick Douglass cited the Declaration of Independence to argue for abolition; Martin Luther King cited it to argue for civil rights — same playbook.`,
      conceptsActivated: ['toussaint-haitian-revolution', 'enlightenment-contradictions', 'french-revolution-1789'],
    },
  ],
};

export default notebook;
