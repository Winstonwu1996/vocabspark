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

我先记下来，等下读三个故事——伏尔泰、Gouges、Toussaint——
读完再回来对照这张单子，看我能不能解释这些词。

老师还说："不要只记名字和年份，要记'这个人想解决什么问题，他的答案是什么'。"
我把这句话写在笔记本第一页。`,
    en: `Today my teacher told us we're learning the Enlightenment (1700s).
She gave us a sheet with these names:

Voltaire, Locke, Montesquieu, Rousseau,
Olympe de Gouges, Toussaint Louverture

Plus some terms: natural rights, social contract,
separation of powers, religious tolerance.

Let me write these down. After I read the three stories
(Voltaire, Gouges, Toussaint), I'll come back and check
whether I can explain each one.

Teacher also said: "Don't just memorize names and dates — memorize
'what problem was this person trying to solve, what was their answer.'"
I wrote that on the first page of my notebook.`,
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
      standardRef: ['AP World KC-5.1', 'CA HSS 7.11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'voltaire-perpetrator',
        nodeIds: ['voltaire-N6', 'voltaire-N10'],
        xiaoweiNote: {
          cn: `这个我读过！在视角一第 6 节，Voltaire 帮一个叫 Jean Calas 的人——
他被指控杀儿子（其实没杀），只因为是 Protestant 在天主教法国就被处死。
Voltaire 用了 3 年时间洗清他的名誉。这就叫"宗教宽容"。

但是有一个 careful framing——Voltaire 也写过反犹辞典条目。他争取宽容，
但不是所有人的宽容。这点考试可能不直接问，但是 DBQ 会用。

考点关键句：Voltaire 的《论宽容》(Treatise on Tolerance, 1763) 是
启蒙时代宗教宽容思想的标志性作品。`,
          en: `I read this! In Lens 1 Node 6, Voltaire helped a man named Jean Calas —
accused of killing his son (he didn't), but executed because he was Protestant
in Catholic France. Voltaire spent 3 years clearing his name. That's "religious tolerance."

Careful framing though: Voltaire also wrote antisemitic dictionary entries.
He fought for tolerance, but not for everyone. Tests probably won't ask this directly,
but DBQ essays use it.

Key exam sentence: Voltaire's *Treatise on Tolerance* (1763) is the landmark text
of Enlightenment-era religious tolerance.`,
        },
      },
    },

    {
      id: 'locke-natural-rights',
      termCn: '洛克 / 自然权利',
      termEn: 'Locke / Natural Rights',
      standardRef: ['AP World KC-5.1.II', 'CA HSS 7.11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'voltaire-perpetrator', nodeId: 'voltaire-N4', context: 'Voltaire 在英国流亡时读到 Locke 的《政府论》' },
        ],
      },
      standaloneText: {
        cn: `John Locke（约翰·洛克，1632-1704），英国哲学家。

他的核心主张：**人生来就有三大自然权利——生命（life）、自由（liberty）、财产（property）**。
这些权利不是国王给的，不是教会给的——是人作为人就有的。

他还说：政府的合法性来自**被统治者的同意**（consent of the governed）。
如果政府侵犯自然权利，人民有权推翻它（right of revolution）。

代表作：《政府论》(Two Treatises of Government, 1689)——
他在写这本书的时候，刚经历英国 1688 年的"光荣革命"（Glorious Revolution），
亲眼看到议会推翻了国王 James II。所以他不是在写空想——他在为一场刚发生的革命找正当性。

这套思想后来直接进了美国《独立宣言》（1776）："生命、自由、追求幸福的权利"——
Thomas Jefferson 把 "property" 改成了 "pursuit of happiness"。

🔗 故事连接：伏尔泰 1726 年流亡英国时读到 Locke，把这些思想带回法国。
视角一第 4 节有提到他在伦敦的笔记本上写"原来政府可以不是上帝任命的"。`,
        en: `John Locke (1632-1704), English philosopher.

Core argument: **humans are born with three natural rights — life, liberty, property.**
These rights aren't granted by kings or churches — they exist because we're human.

He also said: government legitimacy comes from the **consent of the governed**.
If a government violates natural rights, the people have the right to overthrow it
(right of revolution).

Major work: *Two Treatises of Government* (1689). He wrote this just after England's
1688 Glorious Revolution, where Parliament overthrew King James II. He wasn't theorizing
in the abstract — he was providing justification for a revolution that had just happened.

This thinking went directly into the American Declaration of Independence (1776):
"Life, liberty, and the pursuit of happiness" — Thomas Jefferson changed
"property" to "pursuit of happiness."

🔗 Story link: Voltaire read Locke during his 1726 English exile, brought these
ideas back to France. Lens 1 Node 4 mentions Voltaire's London notebook —
"so government doesn't have to be appointed by God."`,
      },
      xiaoweiNote: {
        cn: `老师强调："三大自然权利"四个字必须背下来——选择题考过。
我的记忆口诀："Life-Liberty-Property，去掉 P 换 Pursuit of Happiness 就是美国版"。`,
        en: `My teacher said: "three natural rights" — you have to memorize this phrase.
Multiple choice asks it. My mnemonic: "Life-Liberty-Property, swap the last P for
Pursuit of Happiness and you've got the American version."`,
      },
    },

    {
      id: 'montesquieu-separation-of-powers',
      termCn: '孟德斯鸠 / 三权分立',
      termEn: 'Montesquieu / Separation of Powers',
      standardRef: ['AP World KC-5.1.II', 'CA HSS 7.11.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `Baron de Montesquieu（孟德斯鸠，1689-1755），法国贵族 + 哲学家。

1748 年出版《论法的精神》（De l'esprit des lois / The Spirit of the Laws）。

他的核心主张：**政府权力必须分成三个独立的部分——立法（legislative）、
行政（executive）、司法（judicial）**。这叫"三权分立"或"separation of powers"。

为什么要分？因为他研究了英国（Glorious Revolution 后议会 vs 国王分权）
和法国（绝对王权，路易十四"朕即国家"），结论是：**一个人或一个机构同时
掌握所有权力，就是 tyranny（暴政）**。

他还提出了配套机制——**制衡**（checks and balances）：
每一个分支都有限制其他分支的能力，防止任何一支独大。

🔗 美国连接：1787 年美国宪法 Article I（Congress 立法）、Article II（President 行政）、
Article III（Supreme Court 司法）——直接照搬孟德斯鸠的设计。
James Madison 在 Federalist No. 47 里直接引用孟德斯鸠。

🔗 中国连接：辛亥革命后《中华民国临时约法》（1912）也借鉴了三权分立结构。
今天台湾的"五权宪法"（孙中山版本）= 孟德斯鸠三权 + 监察 + 考试。`,
        en: `Baron de Montesquieu (1689-1755), French aristocrat and philosopher.

1748 published *The Spirit of the Laws* (De l'esprit des lois).

Core argument: **government power must be divided into three independent branches —
legislative, executive, judicial.** This is "separation of powers."

Why divide? He studied England (Parliament vs King after the Glorious Revolution)
and France (absolute monarchy, Louis XIV's "I am the state"), and concluded:
**when one person or institution holds all power, it becomes tyranny.**

He also proposed the companion mechanism — **checks and balances**:
each branch has the ability to restrain the others, preventing any one from dominating.

🔗 US connection: The 1787 US Constitution — Article I (Congress, legislative),
Article II (President, executive), Article III (Supreme Court, judicial) —
directly copies Montesquieu's design. James Madison cited Montesquieu by name
in Federalist No. 47.

🔗 China connection: After the 1911 Revolution, the Provisional Constitution
of the Republic of China (1912) also borrowed the three-branch structure.
Today's Taiwan "Five-Power Constitution" (Sun Yat-sen's version) =
Montesquieu's three branches + Control + Examination.`,
      },
      xiaoweiNote: {
        cn: `老师说三权分立是 Grade 7 启蒙运动**最高频考点**——
几乎每年州统考都会有一题。我把它和"美国宪法 = 孟德斯鸠 + Locke"一起记。

记忆口诀：**L-E-J**（Legislative-Executive-Judicial）= 三权分立的"骨架"，
**checks and balances** = 三权之间的"筋"。骨架 + 筋 = 完整的孟德斯鸠。`,
        en: `Teacher said separation of powers is the **most frequently tested**
Enlightenment concept in Grade 7 — almost every year. I memorize it together
with "US Constitution = Montesquieu + Locke."

Mnemonic: **L-E-J** (Legislative-Executive-Judicial) = the "skeleton" of separation
of powers; **checks and balances** = the "ligaments" connecting the three branches.
Skeleton + ligaments = the full Montesquieu.`,
      },
    },

    {
      id: 'rousseau-social-contract',
      termCn: '卢梭 / 社会契约',
      termEn: 'Rousseau / Social Contract',
      standardRef: ['AP World KC-5.1.II', 'CA HSS 7.11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `Jean-Jacques Rousseau（让-雅克·卢梭，1712-1778），日内瓦/法国哲学家。

1762 年出版《社会契约论》（Du contrat social），开篇第一句是：
**"人生而自由，却无往不在枷锁之中"**（Man is born free, but everywhere he is in chains）。

他的核心主张：
1. **社会契约（social contract）**：人离开自然状态加入社会，是因为大家共同
   同意建立一个保护所有人利益的政府。
2. **公意（general will / volonté générale）**：政府的合法性来自"全体人民的共同意志"，
   不是国王、不是教会、不是某个阶级。
3. **直接民主优于代议民主**：他认为代表别人投票不算真民主，每个人应该亲自参与决策。
   （这一点和 Locke 不同——Locke 接受代议制。）

和 Locke 的关键区别：
- Locke 说"政府保护**个人**的自然权利"
- Rousseau 说"政府执行**集体**的公意"
- 这个区别后来变成美国（更 Locke）vs 法国（更 Rousseau）两条路线分歧的根。

🔗 法国大革命直接连接：1789 年《人权宣言》（Declaration of the Rights of Man）
第 3 条："主权在民"（national sovereignty resides in the nation）——直接是 Rousseau。

🔗 careful framing：Rousseau 一边写"自由是天赋人权"，一边把自己 5 个亲生孩子
送进巴黎孤儿院——那个年代孤儿院死亡率约 70%。这是 AP DBQ 的经典材料，
让学生分析"启蒙哲人的言行不一"。`,
        en: `Jean-Jacques Rousseau (1712-1778), Geneva/French philosopher.

1762 published *The Social Contract* (Du contrat social). Famous opening:
**"Man is born free, but everywhere he is in chains."**

Core arguments:
1. **Social contract**: people leave the state of nature and form society because
   everyone collectively agrees to create a government that protects all people's interests.
2. **General will (volonté générale)**: government legitimacy comes from
   "the common will of all the people" — not king, not church, not one class.
3. **Direct democracy beats representative democracy**: he thought voting through
   representatives isn't real democracy; each person should participate directly.
   (This differs from Locke, who accepted representative government.)

Key difference from Locke:
- Locke: "government protects **individual** natural rights"
- Rousseau: "government executes the **collective** general will"
- This split later became the root of the divergence between the US path (more Locke)
  and the French path (more Rousseau).

🔗 French Revolution direct link: The 1789 Declaration of the Rights of Man,
Article 3: "national sovereignty resides in the nation" — directly from Rousseau.

🔗 Careful framing: Rousseau wrote "freedom is a natural right" while sending
all 5 of his biological children to a Paris orphanage — where mortality rates
were about 70%. This is classic AP DBQ material — students analyze
"Enlightenment philosophers' words vs deeds."`,
      },
      xiaoweiNote: {
        cn: `这个 careful framing 我喜欢——卢梭写得很美，但他对自己孩子做的事很难看。
老师说 AP 写 essay 一定要写"言行不一"，不要只夸他。

另外考点：如果题目问"哪位启蒙哲人最影响法国大革命的激进派（雅各宾派/Robespierre）"，
答案是 Rousseau，不是 Locke。Locke 更影响美国温和派。`,
        en: `I like this careful framing — Rousseau wrote beautifully but treated
his own children terribly. Teacher said AP essays must mention "words vs deeds,"
don't just praise him.

Another exam point: if the question asks "which Enlightenment philosopher most
influenced the radical faction of the French Revolution (Jacobins / Robespierre),"
the answer is Rousseau, not Locke. Locke influenced the moderate American faction more.`,
      },
    },

    {
      id: 'gouges-women-rights',
      termCn: 'Olympe de Gouges / 女性权利',
      termEn: 'Olympe de Gouges / Women\'s Rights',
      standardRef: ['AP World KC-5.1', 'CA HSS 7.11.7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'gouges-mediator',
        nodeIds: ['gouges-N6', 'gouges-N9', 'gouges-N10'],
        xiaoweiNote: {
          cn: `她在视角二整条线讲到了。1791 年《女权宣言》，1793 年被砍头。

重点：她改写《人权宣言》，把每一条 "homme"（既是"人"又是"男人"）
后面都加上"和女人"，证明那个时代的"人权"实际上不包括女性。
她的名言："女人有权登上断头台，也应该有权登上讲台。"
（她最后真的登上了断头台——1793 年 11 月 3 日。）

AP 考过她——和 Mary Wollstonecraft（英国，1792 年《女权辩护》）一起作为
"启蒙时代被排除者"的例子。两人通常成对考。

考点关键句：Gouges 用启蒙运动自己的语言（natural rights, equality）
来批判启蒙运动对女性的排除——这叫"用敌人的武器打敌人"。`,
          en: `Lens 2 covers her completely. 1791 Declaration of the Rights of Woman,
executed in 1793.

Key point: she rewrote the Declaration of the Rights of Man, adding
"and woman" after every "homme" (which means both "human" and "man"),
proving that the era's "human rights" didn't actually include women.
Her famous line: "Woman has the right to mount the scaffold; she must equally
have the right to mount the rostrum." (She literally mounted the scaffold —
November 3, 1793.)

AP has tested her — paired with Mary Wollstonecraft (English, 1792 *A Vindication
of the Rights of Woman*) as examples of "those excluded from the Enlightenment."
The two are usually tested together.

Key exam sentence: Gouges used the Enlightenment's own language (natural rights,
equality) to critique the Enlightenment's exclusion of women — "using the enemy's
weapons against the enemy."`,
        },
      },
    },

    {
      id: 'toussaint-haitian-revolution',
      termCn: 'Toussaint Louverture / 海地革命',
      termEn: 'Toussaint Louverture / Haitian Revolution',
      standardRef: ['AP World KC-5.2', 'CA HSS 7.11.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'toussaint-receiving',
        nodeIds: ['toussaint-N1', 'toussaint-N7', 'toussaint-N8', 'toussaint-N12'],
        xiaoweiNote: {
          cn: `视角三整条线就是他。重点时间：
- 1791 年 8 月 Bois Caïman 起义
- 1793 年 8 月 Sonthonax 北部废奴 → 1794 年 2 月 全法殖民地废奴
- 1804 年 海地独立（第一个由前奴隶建立的国家）
- Toussaint 1803 年死在法国监狱里，没看到独立（继任者 Dessalines 完成独立宣言）

考点关键句：海地革命是**唯一一场成功的奴隶革命**——
全球史上仅此一例，奴隶推翻主人建立独立国家。
它也是**美洲第二个独立的国家**（第一是美国 1776）。

AP DBQ 经典题：海地革命受 Locke、Rousseau 启发，但是 Locke 自己投资
奴隶贸易公司（Royal African Company），Rousseau 也没明确反对奴隶制——
分析"启蒙思想的内部矛盾"。

careful framing：法国大革命 1794 年废奴，但 1802 年 Napoleon 又恢复了奴隶制
（在其他殖民地），并派军队去海地想抓 Toussaint。这说明"启蒙的承诺"非常脆弱，
要靠像 Toussaint 这样的人用武力守住。`,
          en: `Lens 3 is entirely about him. Key timeline:
- August 1791: Bois Caïman uprising
- August 1793: Sonthonax abolishes slavery in the north → February 1794:
  all French colonies abolished
- 1804: Haitian independence (first nation founded by formerly enslaved people)
- Toussaint died in a French prison in 1803, never saw independence
  (successor Dessalines completed the independence declaration)

Key exam sentence: The Haitian Revolution is **the only successful slave revolution**
in world history — enslaved people overthrew their masters and founded an independent nation.
It is also the **second independent nation in the Americas** (after the US in 1776).

Classic AP DBQ: Haitian Revolution was inspired by Locke and Rousseau,
but Locke himself invested in slave-trading companies (Royal African Company),
and Rousseau never clearly opposed slavery — analyze "the internal contradictions
of Enlightenment thought."

Careful framing: France abolished slavery in 1794, but Napoleon restored it in 1802
(in other colonies) and sent troops to Haiti to capture Toussaint. This shows
how fragile "the Enlightenment's promise" was — it had to be defended by force
by people like Toussaint.`,
        },
      },
    },

    {
      id: 'french-revolution-1789',
      termCn: '法国大革命 1789',
      termEn: 'French Revolution 1789',
      standardRef: ['AP World KC-5.2', 'CA HSS 7.11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'gouges-mediator', nodeId: 'gouges-N4', context: 'Gouges 1789 在巴黎现场目击《人权宣言》通过' },
          { lens: 'toussaint-receiving', nodeId: 'toussaint-N6', context: '1791 法国大革命消息传到 Saint-Domingue 引发奴隶起义' },
          { lens: 'voltaire-perpetrator', nodeId: 'voltaire-N12', context: '1791.7.11 Voltaire 遗体被革命法庭迁葬入 Panthéon' },
        ],
      },
      standaloneText: {
        cn: `法国大革命 1789-1799，是启蒙思想第一次大规模政治实验。

几个核心时间点：
- **1789 年 7 月 14 日**：巴士底狱（Bastille）被攻陷——大革命开始的标志，
  法国国庆日（Bastille Day）。
- **1789 年 8 月 26 日**：《人权宣言》（Declaration of the Rights of Man and of the Citizen）
  通过，17 条，全文照搬 Locke 的自然权利 + Rousseau 的人民主权 +
  孟德斯鸠的三权分立。
- **1793 年 1 月 21 日**：路易十六（Louis XVI）被送上断头台。
- **1793-1794 年**：恐怖统治（Reign of Terror），Robespierre 用"公意"
  的名义处决了约 17,000 人，包括 Gouges。
- **1794 年 2 月**：国民公会宣布废除所有法国殖民地的奴隶制（影响海地）。
- **1799 年**：Napoleon 政变，大革命阶段结束。

考点关键句：法国大革命的口号是 **"liberté, égalité, fraternité"**
（自由、平等、博爱）——这三个词每一个都来自启蒙运动。

🔗 三个视角都和大革命有关：
- Voltaire 死于 1778 年（革命前 11 年），但 1791 年被葬入 Panthéon（革命英雄祠）
- Gouges 1793 年死于革命的恐怖统治
- Toussaint 利用 1789-1793 年法国本土混乱在海地起义

careful framing：法国大革命既是"启蒙的胜利"（推翻王权、颁布人权宣言），
也是"启蒙的失败"（恐怖统治、处决女权先驱、Napoleon 称帝）。
AP 题目经常问："法国大革命是启蒙运动的成就还是背叛？"——两边都要写。`,
        en: `The French Revolution (1789-1799) was the first large-scale political
experiment of Enlightenment thought.

Key dates:
- **July 14, 1789**: Storming of the Bastille — symbolic start of the revolution,
  France's national day (Bastille Day).
- **August 26, 1789**: Declaration of the Rights of Man and of the Citizen,
  17 articles, drawing directly from Locke's natural rights + Rousseau's popular
  sovereignty + Montesquieu's separation of powers.
- **January 21, 1793**: Louis XVI executed.
- **1793-1794**: Reign of Terror, Robespierre executed about 17,000 people
  including Gouges, in the name of "general will."
- **February 1794**: National Convention abolishes slavery in all French colonies
  (affecting Haiti).
- **1799**: Napoleon's coup, end of the revolutionary phase.

Key exam sentence: The slogan of the French Revolution is
**"liberté, égalité, fraternité"** (liberty, equality, fraternity) —
each word comes from the Enlightenment.

🔗 All three lenses connect to the Revolution:
- Voltaire died 1778 (11 years before), but was reburied in the Panthéon (revolutionary hero shrine) in 1791
- Gouges executed 1793 during the Terror
- Toussaint used 1789-1793 French chaos to launch the Haitian uprising

Careful framing: The French Revolution was both "Enlightenment's victory"
(overthrowing monarchy, passing the Declaration of Rights) and "Enlightenment's failure"
(Reign of Terror, executing the founder of women's rights, Napoleon crowning himself emperor).
AP questions often ask: "Was the French Revolution the Enlightenment's achievement
or its betrayal?" — answer both sides.`,
      },
      xiaoweiNote: {
        cn: `三个日期我必须背熟：1789（巴士底狱+人权宣言）、1793（路易十六+恐怖统治+Gouges）、
1794（殖民地废奴）。老师说这三个年份在 7 年级历史选择题里出现率最高。`,
        en: `Three dates I have to memorize: 1789 (Bastille + Declaration of Rights),
1793 (Louis XVI + Terror + Gouges), 1794 (colonial abolition). Teacher said these
three years appear most often in Grade 7 multiple choice.`,
      },
    },

    {
      id: 'enlightenment-contradictions',
      termCn: '启蒙运动的内部矛盾',
      termEn: 'Internal Contradictions of the Enlightenment',
      standardRef: ['AP World KC-5.1.III', 'AP DBQ rubric'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['voltaire-N8', 'gouges-N6', 'toussaint-N4'],
        xiaoweiNote: {
          cn: `这个老师特别强调——AP 一定考。

启蒙运动说"人人有自然权利"，但是：
- Voltaire 持股 Compagnie des Indes（间接奴贸）
- Locke 投资 Royal African Company（奴隶贸易）
- Rousseau 把 5 个孩子送孤儿院（孤儿院死亡率 ~70%）
- 《人权宣言》"homme"只指男性公民，不含女性、奴隶、无财产男性
- 法国大革命用"公意"名义处决 17,000 人
- 美国独立时 Jefferson 自己拥有奴隶（同时写"all men are created equal"）

AP DBQ 经典提问："启蒙运动的'普遍人权'到底有多普遍？"

这不是说启蒙运动是骗局——是说**理念和实践之间有 200 年的差距**，
海地革命、女权运动、废奴运动、民权运动，都是把"普遍"真正变普遍的过程。

写 essay 模板：
1. 承认启蒙运动的进步意义（推翻神权 + 王权的合法性）
2. 列出至少 3 个矛盾案例（Locke/奴贸、Rousseau/孤儿院、Jefferson/奴隶）
3. 用 Toussaint / Gouges 作为"启蒙的真正继承人"——
   他们比启蒙哲人自己更认真对待启蒙的承诺。
4. 结论：启蒙是一个**未完成的项目**（unfinished project），不是一个完成品。`,
          en: `Teacher especially emphasized this — AP definitely tests this.

Enlightenment said "everyone has natural rights," but:
- Voltaire held shares in Compagnie des Indes (indirect slave trade)
- Locke invested in the Royal African Company (slave trade)
- Rousseau sent all 5 children to orphanages (~70% mortality)
- "Homme" in the Declaration only meant male citizens, excluding women,
  enslaved, propertyless men
- The French Revolution executed 17,000 in the name of "general will"
- Jefferson owned enslaved people while writing "all men are created equal"

Classic AP DBQ: "How universal were the Enlightenment's 'universal rights'?"

This doesn't mean the Enlightenment was a fraud — it means there's a
200-year gap between idea and practice. The Haitian Revolution, women's
rights movement, abolition, civil rights — all were the work of making
"universal" actually universal.

Essay template:
1. Acknowledge the Enlightenment's progress (delegitimizing divine right + monarchy)
2. List at least 3 contradiction cases (Locke/slave trade, Rousseau/orphanage,
   Jefferson/enslaved people)
3. Use Toussaint / Gouges as "the Enlightenment's true heirs" —
   they took the Enlightenment's promises more seriously than the philosophers themselves.
4. Conclusion: The Enlightenment is an **unfinished project**, not a finished product.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Locke 写《政府论》主张"生命、自由、财产是人天生的权利"——
但他自己投资了 Royal African Company（皇家非洲贸易公司，做奴隶贸易）。

你觉得这是矛盾吗？为什么？如果是 Locke 本人坐在你面前，他可能怎么解释？`,
      en: `Locke wrote in the *Two Treatises of Government* that "life, liberty, and
property are natural rights" — but he himself invested in the Royal African
Company (which conducted the slave trade).

Do you think this is a contradiction? Why? If Locke were sitting in front of you,
how might he try to explain it?`,
      hintCn: `提示：可以从两个角度想——(1) Locke 自己心里可能没把奴隶当作"人"，
他的"自然权利"可能只指欧洲基督徒男性；(2) 或者 Locke 自己也知道这是矛盾，
只是没勇气放弃投资收益。这两种解读都有学者支持。

进阶思考：今天我们能不能找到类似的矛盾——某个人公开主张一种价值，
私下却做相反的事？这种矛盾是个人问题，还是时代问题？`,
      hintEn: `Hint: think from two angles — (1) Locke may not have considered
enslaved Africans as "human" in his framework — his "natural rights" may have
only meant European Christian men; (2) or Locke knew this was a contradiction
but lacked the courage to give up the investment. Both interpretations are
supported by historians.

Going deeper: can we find similar contradictions today — someone who publicly
advocates a value while privately doing the opposite? Is such a contradiction
a personal failing or a feature of the era?`,
      conceptsActivated: ['locke-natural-rights', 'enlightenment-contradictions'],
    },
    {
      id: 'q2',
      cn: `Rousseau 写《社会契约论》第一句是"人生而自由，却无往不在枷锁之中"——
但他把自己 5 个亲生孩子全部送进了巴黎孤儿院（那时孤儿院死亡率约 70%）。

如果你是 AP 老师，让你出一道 DBQ 题分析这件事，你会怎么提问？`,
      en: `Rousseau opened *The Social Contract* with "Man is born free, but everywhere
he is in chains" — yet he sent all 5 of his biological children to a Paris
orphanage (where mortality was about 70%).

If you were an AP teacher writing a DBQ on this, how would you phrase the question?`,
      hintCn: `提示：DBQ 通常会给学生几个 primary source（卢梭自己的信、孤儿院记录、
18 世纪法国普通孩子的命运），让学生分析"思想家的言行不一是个人道德问题，
还是时代结构问题？" 没有标准答案，重要的是用证据。

可能的提问角度：
- "Compare Rousseau's writing on childhood education (Emile, 1762) with his
   own treatment of his children. What does this gap reveal?"
- "Is it possible to separate a philosopher's ideas from their personal conduct?
   Use Rousseau as a case study."`,
      hintEn: `Hint: DBQs typically give students primary sources (Rousseau's own
letters, orphanage records, the fate of ordinary 18th-century French children)
and ask: "Is the philosopher's gap between words and deeds a personal moral
failing, or a structural feature of the era?" No standard answer — what matters
is the use of evidence.

Possible question angles:
- "Compare Rousseau's writing on childhood education (Emile, 1762) with his
   own treatment of his children. What does this gap reveal?"
- "Is it possible to separate a philosopher's ideas from their personal conduct?
   Use Rousseau as a case study."`,
      conceptsActivated: ['rousseau-social-contract', 'enlightenment-contradictions'],
    },
    {
      id: 'q3',
      cn: `美国《独立宣言》（1776）写"all men are created equal"，
法国《人权宣言》（1789）写"Men are born free and equal in rights"——
但 Toussaint Louverture（海地革命领袖）说："你们说人人平等，
为什么不包括我们？"

Toussaint 1791 年起义的时候，他可能读过哪些启蒙书？他对启蒙思想的态度，
是"完全相信"、"完全拒绝"、还是别的？`,
      en: `The US Declaration of Independence (1776) wrote "all men are created equal,"
the French Declaration of the Rights of Man (1789) wrote "Men are born free and
equal in rights" — but Toussaint Louverture (leader of the Haitian Revolution) said:
"You say all are equal, why are we excluded?"

What Enlightenment books had Toussaint likely read by 1791? What was his attitude
toward Enlightenment thought — "fully believed," "fully rejected," or something else?`,
      hintCn: `提示：Toussaint 读过 Raynal 1780 年第三版（被法国查禁的那个版本，
里面有 Diderot 写的"Spartacus"段——煽动奴隶起义），可能也读过 Rousseau。
他的态度是"我相信你们写的东西比你们自己更相信"——他用启蒙语言对抗
那些不打算让他自由的启蒙者。这是 AP DBQ 的精彩素材。

进阶思考：历史上还有谁是这种"用敌人的武器打敌人"的策略？
（提示：Frederick Douglass 用《独立宣言》论证废奴，
Martin Luther King 用《独立宣言》论证民权——都是同一个套路。）`,
      hintEn: `Hint: Toussaint had read Raynal's 1780 third edition (the one banned
in France, with Diderot's "Spartacus" passage inciting slave revolt) and likely
Rousseau. His attitude was: "I believe what you wrote more than you do" —
he used Enlightenment language against the very Enlighteners who didn't intend
to free him. Excellent AP DBQ material.

Going deeper: who else in history used this "enemy's-weapons-against-the-enemy"
strategy? (Hint: Frederick Douglass cited the Declaration of Independence to
argue for abolition; Martin Luther King cited it to argue for civil rights —
all the same playbook.)`,
      conceptsActivated: ['toussaint-haitian-revolution', 'enlightenment-contradictions', 'french-revolution-1789'],
    },
  ],
};

export default notebook;
