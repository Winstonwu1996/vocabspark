// ─── 同伴笔记本架构 v1 · Slavery, Abolition & the Underground Railroad ───
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（引 lens + nodeId）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson 300-500 字)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Calhoun / Douglass / Tubman 三条线，11 nodes each）
//   - notebook 提供考点闭环（Compromise of 1850 / Uncle Tom's Cabin 等故事未展开的 AP 必考点）
//
// dark topic 硬规则：
//   - 不掩饰矛盾（北方多数冷漠/获益；废奴派内部种族张力；Calhoun 是一流理论家不是无知恶棍）
//   - 不创伤模拟；文化对应硬禁（全程美国/英语真实术语，不用中国特定词）
//   - 事实对账本（含 1851 决裂修正：Douglass 与 Garrison 宪法路线公开决裂是 1851 非 1847；
//     Tubman 用修正数字约 70 人 / 约十几趟，不写回 300 人/19 趟神话）
//
// 课纲对齐：
//   - CA HSS Grade 8.7（内战前的美国 antebellum）
//   - APUSH Period 4（1800-1848）+ Period 5（1844-1877），CED Topic 4.10-5.2
//   - AP US Government & Politics（civil disobedience 公民不服从）
//
// schemaVersion: 1 · notebookVersion: slavery-abolition-1850-v1

export var notebook = {
  topicId: 'slavery-abolition-1850',
  topicNameCn: '奴隶制与废奴',
  topicNameEn: 'Slavery, Abolition & the Underground Railroad',
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
    cn: `今天老师要我们学一段很重的课：奴隶制和废奴运动（1830-1860，内战前的美国）。
她先提醒我们一句："这一课会读到很难受的东西。我们不是来'体验'痛苦的，是来搞懂
'当一个国家一边写着人人平等、一边把人当财产，到底发生了什么'。"

她给了一张纸，上面写着这些名字：

John C. Calhoun（卡尔霍恩）、Frederick Douglass（道格拉斯）、
Harriet Tubman（塔布曼），还有一个写小说的女人 Harriet Beecher Stowe（斯托夫人）。

还有一串词，老师说每一个都是 AP 选择题/DBQ 的常客：
King Cotton（棉花为王）、positive good（"积极的好事"）、states' rights（州权）、
Compromise of 1850（1850 年妥协案）、Fugitive Slave Act（逃奴法）、
Underground Railroad（地下铁路）、abolitionism（废奴主义）、
Kansas-Nebraska Act、Dred Scott。

我先把这些记下来。等下我会读三个故事——Calhoun、Douglass、Tubman——
读完再回来对照这张单子，看我能不能解释清楚。

老师还说了一句我写在笔记本第一页的话："读 Calhoun 的时候别急着骂他是坏人。
他是耶鲁毕业、当过副总统的一流理论家。一个聪明人能把最坏的事说得头头是道，
比一个无知的恶棍更值得我们警惕。"`,
    en: `Today my teacher said we're learning a heavy unit: slavery and the abolition
movement (1830-1860, the antebellum United States). She warned us first:
"This unit has hard things in it. We are not here to 'experience' the pain;
we are here to understand what happens when a country writes 'all are equal'
on paper while treating people as property."

She gave us a sheet with these names:

John C. Calhoun, Frederick Douglass, Harriet Tubman,
and a woman who wrote a novel, Harriet Beecher Stowe.

Plus a list of terms she said are regulars on AP multiple choice and DBQs:
King Cotton, positive good, states' rights, the Compromise of 1850,
the Fugitive Slave Act, the Underground Railroad, abolitionism,
the Kansas-Nebraska Act, Dred Scott.

Let me write these down. I'll read the three stories (Calhoun, Douglass, Tubman),
then come back and check whether I can explain each one.

Teacher also said something I wrote on the first page of my notebook:
"When you read Calhoun, don't rush to call him a bad man. He was a Yale graduate,
a former vice president, a first-rate theorist. A clever person who can make the
worst thing sound reasonable is more worth watching out for than an ignorant brute."`,
    keyTerms: [
      { cn: '棉花为王 / 棉花经济', en: 'King Cotton' },
      { cn: '"积极的好事"（奴隶制辩护）', en: 'positive good' },
      { cn: '州权', en: "states' rights" },
      { cn: '废奴主义', en: 'abolitionism' },
      { cn: '地下铁路', en: 'Underground Railroad' },
      { cn: '公民不服从', en: 'civil disobedience' },
      { cn: '自我解放', en: 'self-emancipation' },
      { cn: '宪法解释之争', en: 'constitutional interpretation (pro- vs anti-slavery reading)' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景/配角人物，用角色称谓就够，不进独立考点卡
    keyFigures: [
      {
        nameCn: '约翰·卡尔霍恩',
        nameEn: 'John C. Calhoun',
        ipa: '/kælˈhuːn/',
        roleCn: '南卡参议员·一流政治理论家，把奴隶制论证为"积极的好事"，州权理论奠基人',
        roleEn: 'South Carolina senator and political theorist, argued slavery was a "positive good," founder of states\' rights theory',
        mustKnow: true,
        audioKey: 'john-c-calhoun',
      },
      {
        nameCn: '弗雷德里克·道格拉斯',
        nameEn: 'Frederick Douglass',
        ipa: '/ˈdʌɡləs/',
        roleCn: '逃奴→演说家+报人，与白人废奴领袖 Garrison 决裂走政治路线',
        roleEn: 'Fugitive turned orator and newspaper editor, broke with white abolitionist leader Garrison to take the political path',
        mustKnow: true,
        audioKey: 'frederick-douglass',
      },
      {
        nameCn: '哈丽特·塔布曼',
        nameEn: 'Harriet Tubman',
        ipa: '/ˈtʌbmən/',
        roleCn: '逃奴后多次返南方救约 70 人，地下铁路"摩西"',
        roleEn: 'Escaped slavery, returned south many times to rescue about 70 people, the "Moses" of the Underground Railroad',
        mustKnow: true,
        audioKey: 'harriet-tubman',
      },
      {
        nameCn: '哈丽特·比彻·斯托',
        nameEn: 'Harriet Beecher Stowe',
        ipa: '/stoʊ/',
        roleCn: '《汤姆叔叔的小屋》(1852) 作者，小说把废奴变成全国情感运动',
        roleEn: 'Author of Uncle Tom\'s Cabin (1852), the novel that turned abolition into a national emotional movement',
        mustKnow: true,
        audioKey: 'harriet-beecher-stowe',
      },
      {
        nameCn: '威廉·劳埃德·加里森',
        nameEn: 'William Lloyd Garrison',
        ipa: '/ˈɡærɪsən/',
        roleCn: '白人废奴领袖，视宪法为"跟魔鬼签的契约"，主张退出政治；Douglass 的恩师兼后来的论敌',
        roleEn: 'White abolitionist leader who saw the Constitution as "a covenant with death," urged withdrawal from politics; Douglass\'s mentor and later rival',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '德雷德·斯科特',
        nameEn: 'Dred Scott',
        ipa: '/drɛd skɒt/',
        roleCn: '被奴役者，1857 年最高法院案当事人（败诉）',
        roleEn: 'An enslaved man, plaintiff in the 1857 Supreme Court case (which he lost)',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'king-cotton-economy',
      termCn: '棉花为王 / 棉花经济',
      termEn: 'King Cotton / The Cotton Economy',
      standardRef: ['CA HSS 8.7', 'APUSH Period 4 (KC-4.2)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'calhoun',
        nodeIds: ['cal-n2'],
        xiaoweiNote: {
          cn: `这个我读过！在 Calhoun 第 2 节。考点是要懂"南方为什么死守奴隶制"——
不是单纯坏，是整个经济连根押在棉花上。

1793 年有人发明了轧棉机（cotton gin），剥棉籽快了几十倍。棉花一下子变成
全世界都抢着要的钱。南方越种越多，对被奴役劳力的需求越来越大；到 1850 年代，
棉花是美国最大的出口货，南方的全部身家都押在它上面。这就是"King Cotton"——棉花为王。

考点关键句：cotton gin（1793）让棉花经济起飞，把南方对被奴役劳力的需求推到爆炸式增长。
AP 老师爱考这个 cause-and-effect：一台机器 → 棉花值钱 → 奴隶制不是在消亡而是在扩张。

careful framing 别忘了：北方也不是"干净的旁观者"。北方的纺织厂吃南方的棉花，
华尔街给种植园放贷——很多北方人在经济上是靠奴隶制赚钱的。这点 DBQ 经常用来
打破"善良北方 vs 邪恶南方"的简单叙事。`,
          en: `I read this! In Calhoun Node 2. The exam point is understanding why the
South clung to slavery so hard — not just "they were evil," but their whole economy
was staked on cotton.

In 1793 someone invented the cotton gin, which stripped seeds dozens of times faster.
Cotton suddenly became money the whole world fought to buy. The South planted more
and more, and its hunger for enslaved labor grew; by the 1850s cotton was America's
largest export and the South's entire fortune was bet on it. That's "King Cotton."

Key exam sentence: the cotton gin (1793) launched the cotton economy and pushed
the South's demand for enslaved labor into explosive growth. AP teachers love this
cause-and-effect: one machine → cotton becomes valuable → slavery wasn't dying out,
it was expanding.

Careful framing, don't forget: the North wasn't a "clean bystander" either. Northern
textile mills ate Southern cotton, Wall Street financed the plantations — many Northerners
made money off slavery economically. DBQs often use this to break the simple
"good North vs evil South" story.`,
        },
      },
    },

    {
      id: 'garrison-liberator-aas',
      termCn: 'The Liberator 报纸 + 美国反奴隶制协会（1831/1833）',
      termEn: 'The Liberator & American Anti-Slavery Society (1831/1833)',
      standardRef: ['APUSH Period 4 (KC-4.3)', 'CA HSS 8.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'douglass', nodeId: 'doug-n3', context: 'Garrison 发现 Douglass 成为运动演说家，是 Garrison 废奴网络的入口节点' },
        ],
      },
      standaloneText: {
        cn: `1831 年 1 月 1 日，William Lloyd Garrison 在波士顿创办报纸
**《解放者》(The Liberator)**，开刊词定调："我会被听到。"
他要求**立即、无条件废除**奴隶制，不同于当时"渐进废奴"的主流声音。
订阅者约 3,000，影响力远超发行量——南方乔治亚州悬赏 5,000 美元缉拿他归案，他毫不收声。

1833 年，Garrison 在费城组建
**美国反奴隶制协会 (American Anti-Slavery Society, AAS)**，
第一个全国性废奴组织：全职组织者、巡回演讲员（含 Douglass）、向国会流水线提请愿书。
高峰期约 25 万成员，覆盖北方主要城市。

考点关键句：The Liberator (1831) 是第一份要求**立即废奴**的主要报纸；
AAS (1833) 是第一个全国性废奴组织，把道德呼声转化为有组织的政治压力。

⚠️ AP 常考点：Garrison 视宪法为「跟魔鬼签的契约」，主张废奴者退出联邦政治。
这与 Douglass 的宪法+选票路线直接对立，是两人 1851 年决裂的根源。`,
        en: `How did the abolition movement go from "a few moral voices" to "a nationally organized movement"?
Two things: a newspaper, and a national organization.

**William Lloyd Garrison (1805-1879)**, from Boston, white, born poor, self-educated.
On January 1, 1831, he founded the newspaper **The Liberator** in Boston.
The opening line set the tone immediately:
"I will not retreat, I will not equivocate, I will not excuse — and I will be heard."
At the time, nearly every abolition voice in the country was calling for "gradual emancipation"
or sending freed people back to Africa. Garrison refused: he demanded
**immediate, unconditional** abolition, not one step back.

The Liberator was not a large paper — peak circulation was about 3,000 — but its influence
far outran its numbers: Northern abolitionists passed it hand to hand; Southern slaveholding
states treated it as evidence of incitement; Georgia put a $5,000 bounty on Garrison's
arrest (he kept printing).

Two years later, in 1833, Garrison organized the
**American Anti-Slavery Society (AAS)** in Philadelphia, pulling scattered abolitionists
into the first national abolition organization: full-time organizers, traveling lecturers
(including Douglass), and an assembly-line petition campaign to Congress. At its 1830s-40s
peak, AAS had roughly 250,000 members and a network covering Northern cities.

Key exam sentence: The Liberator (1831) was the first major newspaper demanding
**immediate abolition**; the American Anti-Slavery Society (1833) was the first national
abolition organization, converting moral appeal into organized political pressure.

⚠️ A frequent AP test point: Garrison believed the U.S. Constitution was "a covenant with
death," because it tacitly accepted slavery, and so he argued abolitionists should withdraw
from federal politics entirely — no voting, no elections. This is the direct opposite of
Douglass's later Constitution-plus-ballot path, and the root of their 1851 break.`,
      },
      xiaoweiNote: {
        cn: `记这两个有个顺序口诀："31 年报，33 年会"——1831 年《解放者》报，
1833 年美国反奴协会。年份差两年，都是 Garrison 一个人搞的。

Garrison 这个人考点要和 Douglass 配对记：两人都是废奴派，但路线相反。
Garrison：宪法=邪恶，退出政治，道德感化。
Douglass（1851 年后）：宪法=武器，进政治，选票+法律。
AP DBQ 问"废奴运动内部有哪些路线之争"，这对就是最佳例子。`,
        en: `A mnemonic for the two: "newspaper in '31, society in '33" — The Liberator 1831,
American Anti-Slavery Society 1833. Two years apart, both Garrison's doing.

Garrison as an exam figure must be paired with Douglass: both abolitionists, opposite strategies.
Garrison: Constitution = evil, withdraw from politics, moral persuasion.
Douglass (after 1851): Constitution = weapon, enter politics, ballot + law.
When an AP DBQ asks "what strategic splits existed within the abolition movement,"
this pair is the best example.`,
      },
    },

    {
      id: 'second-great-awakening',
      termCn: '第二次大觉醒（废奴运动的宗教引擎）',
      termEn: 'Second Great Awakening (Religious Engine of Abolition)',
      standardRef: ['APUSH Period 4 (KC-4.1, KC-4.3)', 'CA HSS 8.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `废奴运动为何在 1830 年代突然爆发成全国运动？背后有宗教能量：
**第二次大觉醒（Second Great Awakening）**，高峰约 1820-1840 年代。

核心信仰：每个人都能直接与上帝沟通，而且罪（sin）可以被战胜——包括社会的集体之罪。
这句话就是废奴运动最重要的神学燃料：奴隶制是全体公民的集体罪孽，必须立即对抗，中立即是共谋。

形式：大型户外复兴布道会（camp meetings）。布道家 **Charles Finney** 明确说
"不反对奴隶制，就无法完整悔罪"，把宗教皈依与废奴行动直接绑定。
Garrison"立即废奴"的紧迫感，正来自这一宗教逻辑；AAS (1833) 的成员网络大量来自大觉醒教会。

考点关键句：Second Great Awakening 给废奴运动提供神学框架——奴隶制是国家的
集体性罪孽（collective sin），立即废除是道德义务，解释了 1830s 废奴运动为何迅速组织化。

别混淆：第一次大觉醒（1730s-40s）是殖民地时期，与废奴关联弱。
AP 考废奴的宗教背景，答案是**第二次**大觉醒。`,
        en: `Why did the abolition movement suddenly surge in the 1830s? A few passionate
activists were not enough — behind it was a religious movement sweeping America as its energy source.

The **Second Great Awakening** began roughly in the 1790s and peaked in the 1820s-1840s.
Its core belief: every person could reach God directly through a personal "conversion
experience," no clergy needed; and sin could be overcome — including society's collective sin.

That phrase — "society's collective sin can be overcome" — was the most important theological
fuel for the abolition movement.

Its form: large outdoor revival meetings (camp meetings), where people listened to sermons
in tents, weeping, trembling, being "saved." The largest, Cane Ridge, Kentucky in 1801,
drew an estimated 10,000-20,000 people. Preachers stressed: slavery was a **collective sin**,
and every Christian had a moral duty to oppose it — neutrality was not possible.

The direct links to abolition:
- **Charles Finney** was the most important revivalist of the movement; he argued explicitly
  that full repentance was impossible without opposing slavery, binding religious conversion
  to anti-slavery action.
- Garrison himself was deeply shaped by the Awakening; his insistence on "immediate"
  abolition came from the religious logic that sin must be confessed today, not gradually.
- The American Anti-Slavery Society (AAS, 1833) drew a large share of its members from
  the Awakening's church networks.

Key exam sentence: the Second Great Awakening gave the abolition movement its theological
framework — slavery as the nation's collective sin, immediate abolition as every Christian's
moral duty. This explains why the 1830s movement went from moral fringe to national organization so fast.

Don't confuse: the **First Great Awakening** (1730s-40s) was colonial-era and had much
weaker ties to abolition. When AP asks about the religious background of the abolition movement,
the answer is the **Second** Great Awakening.`,
      },
      xiaoweiNote: {
        cn: `老师说第二次大觉醒是 APUSH Period 4 最容易被漏掉的背景知识，
但它是废奴运动的"为什么是现在"的答案：为什么废奴在 1830 年代组织化，
不是 1790 年代，不是 1860 年代——因为 1820s-30s 大觉醒把"对抗集体之罪"
的道德紧迫感推向了社会高峰。

记法：大觉醒 → 废奴 → Liberator/AAS，三者是同一波能量的三个层次：
宗教情感（大觉醒）→ 舆论话筒（Liberator）→ 组织行动（AAS）。`,
        en: `Teacher said the Second Great Awakening is the most often-missed background
knowledge in APUSH Period 4, but it answers "why now" for the abolition movement:
why did abolition become organized in the 1830s and not the 1790s or 1860s?
Because the 1820s-30s Awakening pushed the moral urgency of "fighting collective sin"
to a social peak.

Memory scaffold: Awakening → Liberator → AAS — three levels of the same wave of energy:
religious emotion (Awakening) → media megaphone (Liberator) → organized action (AAS).`,
      },
    },

    {
      id: 'calhoun-positive-good',
      termCn: 'Calhoun "积极的好事" / 州权',
      termEn: 'Calhoun "Positive Good" / States\' Rights',
      standardRef: ['APUSH Period 4 (KC-4.3)', 'CA HSS 8.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'calhoun',
        nodeIds: ['cal-n1', 'cal-n3', 'cal-n4'],
        xiaoweiNote: {
          cn: `Calhoun 整条线就是他。重点全在前几节：

1837 年 2 月 6 日，他在参议院讲台上回应北方的废奴请愿，说了那句震动全国的话：
奴隶制不是"不得不忍受的恶"（a necessary evil），而是一件"积极的好事"
（a positive good）。这是 antebellum 思想史的标志性转折——南方公开把奴隶制
从"羞耻地容忍"升级成"理直气壮地辩护"。

他的辩护分三步（第 3 节）：(1) 攻击北方的"工资奴隶制"，说北方工人老了病了
被一脚踢开，反而南方主人养着被奴役者一辈子；(2) 援引古希腊罗马，说伟大文明
都建在奴隶制上；(3) 最毒的一步，宣称黑人种族"天生"适合被统治。

还有一个高频考点是他的政治理论（第 4 节）：states' rights（州权）+ minority veto
（少数派否决，学术词叫 concurrent majority）。听起来很高尚——"保护少数派不被多数
欺压"——可他要保护的"少数派"是蓄奴的南方白人，目的是让多数人没法投票废奴。

考点关键句：positive good 是把奴隶制从"必要的恶"重新定义为"积极的好事"；
states' rights 后来成了南方脱离联邦的法理。

careful framing（老师特别强调）：Calhoun 不是无知的恶棍，他是耶鲁出身的一流理论家。
正因为他聪明、有学问、有讲台，他的辩护比一个粗人有力一百倍——这才是更值得警惕的。`,
          en: `The whole Calhoun lens is him. The key points are all in the first few nodes:

On February 6, 1837, at the Senate podium, responding to Northern abolition petitions,
he said the line that shook the country: slavery was not "a necessary evil" but
"a positive good." This is a landmark turn in antebellum thought — the South openly
upgraded slavery from "shamefully tolerated" to "proudly defended."

His defense had three steps (Node 3): (1) attack the North's "wage slavery," saying
Northern workers are kicked out when old or sick while the Southern master keeps the
enslaved his whole life; (2) cite ancient Greece and Rome, claiming every great
civilization rested on slavery; (3) the most poisonous step, claiming the Black race
was "by nature" suited to be ruled.

Another high-frequency point is his political theory (Node 4): states' rights plus a
minority veto (the academic term is concurrent majority). It sounds noble — "protect
the minority from the majority's bullying" — but the "minority" he protected was the
slaveholding white South, and the goal was so the majority couldn't vote slavery away.

Key exam sentence: "positive good" redefined slavery from "necessary evil" to a
"positive good"; states' rights later became the South's legal basis for secession.

Careful framing (teacher stressed this): Calhoun was not an ignorant brute — he was a
first-rate theorist trained at Yale. Precisely because he was clever, learned, and had
a podium, his defense was a hundred times stronger than a brute's — and that is what's
more worth watching out for.`,
        },
      },
    },

    {
      id: 'compromise-of-1850',
      termCn: 'Compromise of 1850 / 妥协的耗尽',
      termEn: 'The Compromise of 1850',
      standardRef: ['APUSH Period 5 (KC-5.2)', 'CA HSS 8.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'calhoun', nodeId: 'cal-n5', context: 'Calhoun 1850 病重写演讲让人代念，警告北方继续逼则南方有权退出（围绕这一波西扩与妥协）' },
          { lens: 'calhoun', nodeId: 'cal-n7', context: 'Fugitive Slave Act 是 Compromise of 1850 五条法案之一' },
        ],
      },
      standaloneText: {
        cn: `要看懂内战为什么躲不掉，得先看懂美国怎么用一连串"妥协"拖时间，最后拖到拖不动。

第一次妥协是 **1820 年的 Missouri Compromise（密苏里妥协）**：国会画了一条
地理线（36°30′），线以北的新地不准有奴隶制，线以南可以。这维持了自由州和蓄奴州
在参议院的票数平衡——多一个蓄奴州，南方就多两票，这是当时的生死之争。

但美国一直往西扩张。1846-1848 年和墨西哥打完仗，一下子拿到加州、新墨西哥那一大片地，
"这些新地算自由州还是蓄奴州"立刻又吵翻天。

于是有了 **Compromise of 1850（1850 年妥协案）**，由参议员 Henry Clay 牵头，
打包五条法案，试图两边都给一点：
- 加州作为自由州加入（北方赢一局）；
- 新墨西哥、犹他这些 territory 用"popular sovereignty"（居民自决）决定要不要奴隶制；
- 在华盛顿特区禁止奴隶**贸易**（但不禁奴隶制本身）；
- 还有最关键、最有毒的一条——一部更严厉的 **Fugitive Slave Act（逃奴法）**，
  作为给南方的补偿（这条单独有一张考点卡）。

考点关键句：Compromise of 1850 是用"打包交易"再拖一次时间，但它里面的 Fugitive
Slave Act 反而把矛盾烧得更旺——所以历史学家常说，1850 年的妥协不是解决问题，
是把引线又往前点了一截。

故事连接：Calhoun 第 5 节，他临死前（1850 年 3 月）写演讲让人代念，警告北方
别再逼，否则南方有权退出——他说的就是这一波西扩 + 妥协的火药味。`,
        en: `To understand why the Civil War became unavoidable, you first have to see how
America used a string of "compromises" to buy time — until time ran out.

The first was the **Missouri Compromise of 1820**: Congress drew a geographic line
(36°30′); no slavery in new lands north of it, slavery allowed to the south. This kept
the balance of free and slave states in the Senate — one more slave state meant two
more Southern votes, a life-or-death fight at the time.

But America kept expanding west. After the war with Mexico (1846-1848), it suddenly
gained California, New Mexico, that whole region, and the fight over "are these new
lands free or slave?" blew up again.

So came the **Compromise of 1850**, led by Senator Henry Clay, a package of five laws
trying to give each side a little:
- California admitted as a free state (a win for the North);
- New Mexico and Utah territories would use "popular sovereignty" (let the residents
  vote) on slavery;
- the slave trade (but not slavery itself) banned in Washington, D.C.;
- and the most important, most poisonous piece — a tougher **Fugitive Slave Act**, as
  the South's compensation (this gets its own concept card).

Key exam sentence: the Compromise of 1850 bought time once more with a "package deal,"
but its Fugitive Slave Act actually fanned the conflict hotter — so historians often
say the 1850 compromise didn't solve the problem, it lit the fuse a little further.

Story link: Calhoun Node 5 — just before his death (March 1850) he had a speech read
for him warning the North not to keep pressing, or the South had the right to leave.
That's the gunpowder smell of this wave of western expansion plus compromise.`,
      },
      xiaoweiNote: {
        cn: `老师说三个"妥协/法案"的顺序必须背熟，AP 选择题最爱按时间线考：
1820 Missouri Compromise → 1850 Compromise of 1850 → 1854 Kansas-Nebraska Act。
我的记忆口诀："20-50-54，一次比一次拖不住"——每一次妥协的'保质期'都更短，
说明矛盾在升级，不在缓和。

还有一个超级容易混的点：popular sovereignty（居民自决）这个词，1850 年妥协里
第一次大用，1854 年 Kansas-Nebraska 又用，结果就闹出了 Bleeding Kansas。
把它和"让新地自己投票决定要不要奴隶制"绑一起记。`,
        en: `Teacher said the order of the three "compromises/acts" must be memorized cold —
AP multiple choice loves testing the timeline: 1820 Missouri Compromise → 1850
Compromise of 1850 → 1854 Kansas-Nebraska Act. My mnemonic: "20-50-54, each one holds
less and less" — each compromise's "shelf life" got shorter, which means the conflict
was escalating, not easing.

One super-easy thing to mix up: the term popular sovereignty (let residents decide) was
used big for the first time in the 1850 compromise, used again in 1854 Kansas-Nebraska,
and that's what blew up into Bleeding Kansas. Memorize it with "let the new land vote
on whether to allow slavery."`,
      },
    },

    {
      id: 'fugitive-slave-act',
      termCn: 'Fugitive Slave Act 1850',
      termEn: 'Fugitive Slave Act of 1850',
      standardRef: ['APUSH Period 5 (KC-5.2)', 'AP Gov (civil disobedience)', 'CA HSS 8.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'calhoun',
        nodeIds: ['cal-n7'],
        xiaoweiNote: {
          cn: `这个故事里出现两次——Calhoun 第 7 节讲它的政治后果，Tubman 第 8 节讲它怎么
逼她把人一路送过加拿大边境。我把两边合起来记。

它是 Compromise of 1850 五条法案里最毒的一条。规定：逃到北方自由州的被奴役者，
必须被抓回去送还原主；任何北方人，帮逃奴（藏匿、协助躲藏）都犯法。被指控的人
没有陪审团、不能为自己作证。

它最厉害的地方在于——把奴隶制的手伸进了自由州。以前北方人可以说"奴隶制是南方的事，
跟我无关"。现在不行了，法律强迫每个北方公民，要么帮着抓逃奴，要么犯法。

后果（高频考点）：它反而把很多原本冷漠的北方人推到了废奴一边——他们亲眼看见
猎奴人冲进自己城市、把安家多年的邻居拖走，坐不住了。Calhoun 第 7 节那句"这不关我事
从来都站不住"，和 Tubman 第 8 节"压迫者收紧绳子反而勒醒装睡的人"，说的是同一件事。

AP Gov 连接：援助逃奴 = 违反实定法（positive law）去服从个人良知。这是
**civil disobedience（公民不服从）**的经典案例库——地下铁路、违法藏匿逃奴，
后来 Thoreau、马丁·路德·金都接上这条传统。

考点关键句：Fugitive Slave Act (1850) 把奴隶制从"地方问题"变成"全国问题"，
逼北方人选边站，加速了南北分裂。`,
          en: `It shows up twice in the story — Calhoun Node 7 covers its political fallout,
Tubman Node 8 covers how it forced her to lead people all the way across the Canadian
border. I memorize both sides together.

It was the most poisonous of the five laws in the Compromise of 1850. It ruled that an
enslaved person who fled to a free Northern state must be seized and returned to the
owner, and that any Northerner who helped a fugitive (harboring, concealing) was breaking
the law. The accused got no jury and could not testify for themselves.

Its terrible power: it reached slavery's hand into the free states. Before, a Northerner
could say "slavery is the South's business, none of mine." Now the law forced every
Northern citizen to either help capture fugitives or break the law.

The consequence (high-frequency exam point): it actually pushed many once-indifferent
Northerners toward abolition — they saw slave-catchers rush into their cities and drag
away a neighbor who'd lived there for years, and couldn't sit still. Calhoun Node 7's
"'this isn't my business' never held up" and Tubman Node 8's "the oppressor tightening
the rope woke a crowd pretending to sleep" are the same idea.

AP Gov link: helping fugitives = breaking positive law to obey personal conscience.
This is the classic case file for **civil disobedience** — the Underground Railroad,
illegally hiding fugitives — a tradition Thoreau and Martin Luther King later picked up.

Key exam sentence: the Fugitive Slave Act (1850) turned slavery from a "local issue"
into a "national issue," forced Northerners to take a side, and accelerated the split.`,
        },
      },
    },

    {
      id: 'douglass-abolitionism-constitution',
      termCn: 'Douglass / 废奴主义 + 宪法解释之争',
      termEn: 'Douglass / Abolitionism & the Constitution Debate',
      standardRef: ['APUSH Period 4-5 (KC-4.3, KC-5.2)', 'CA HSS 8.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'douglass',
        nodeIds: ['doug-n3', 'doug-n6', 'doug-n7', 'doug-n8'],
        xiaoweiNote: {
          cn: `Douglass 整条线都是他。考点我分两块记：他这个"人"，和他卷进的"宪法之争"。

人：约 1818 年生在马里兰，生来被奴役。1838 年逃北，1841 年废奴集会临时上台被白人
废奴领袖 Garrison 发现，成了运动明星演说家。1845 年出版自传，写出真名真地名真主人。
1852 年 7 月 5 日（故意选 7.5 不 7.4）做了名演讲"What to the Slave Is the Fourth
of July?"，把美国自己的"人人生而平等"举到它面前问"你做到了吗"。

宪法之争（AP DBQ 高频，三读法）：同一部宪法，三种人读出三个意思——
- **Calhoun**（蓄奴派）：宪法保护财产权，奴隶是财产，所以宪法保护奴隶制。
- **Garrison**（白人废奴派）：同意上面这个读法，所以得出"宪法是跟魔鬼签的契约，
  烧掉它、北方跟南方分家"。
- **Douglass**：偏不。宪法序言写"我们人民""确立正义保障自由"，正文里根本没出现过
  "slave/slavery"这两个词（制宪者自己都不好意思写）——所以宪法是可以拿来反对
  奴隶制的武器，不能拱手让给蓄奴派。

⚠️ 这里有一个时间线必须记准（账本红旗 #1）：Douglass 1847 年办《北极星报》，
Garrison 阵营反对他自立门户，从这时起有摩擦；但围绕**宪法解读**的正式公开决裂
是 **1851 年**（北极星报社论"Change of Opinion Announced"），不是 1847 年。
别把决裂记早 4 年——AP 老师会挑这个点。

考点关键句：废奴运动内部有路线之争（道德谴责+退出政治 vs 进政治从内部斗争）；
Douglass 主张宪法是 anti-slavery 文件，与 Garrison 1851 年正式决裂。

careful framing：Douglass 跟 Garrison 决裂，不只是"策略不同"，也有黑人盟友被白人
盟友压着、不甘只当"会说话的伤疤"那口气——废奴运动内部本身就有种族张力。
这打破了"善良白人解放被动黑人"的简单叙事（self-emancipation 视角）。`,
          en: `The whole Douglass lens is him. I split the exam points into two: him as a
"person," and the "constitutional debate" he got pulled into.

The person: born around 1818 in Maryland, born enslaved. Escaped north in 1838; in 1841
spoke on the spot at an abolition meeting and was discovered by white abolitionist leader
Garrison, becoming the movement's star speaker. In 1845 he published his autobiography
with real name, place, and master. On July 5, 1852 (he chose the 5th, not the 4th, on
purpose) he gave the famous speech "What to the Slave Is the Fourth of July?", holding
America's own "all men are created equal" up to its face and asking "have you lived up to it?"

The constitutional debate (high-frequency AP DBQ, three readings): one Constitution,
three people read three meanings —
- **Calhoun** (slaveholders): the Constitution protects property, slaves are property,
  so the Constitution protects slavery.
- **Garrison** (white abolitionists): agreed with that reading, so concluded "the
  Constitution is a covenant with the devil — burn it, and let the North separate from the South."
- **Douglass**: refused. The preamble says "We the People," "establish justice, secure
  liberty," and the text never uses "slave/slavery" (the framers were too ashamed to
  write it) — so the Constitution can be a weapon against slavery, not handed to the slaveholders.

⚠️ One timeline you must get right (ledger red flag #1): Douglass founded the North Star
in 1847, Garrison's camp opposed his striking out on his own, and friction began then;
but the formal public break over **constitutional interpretation** was in **1851**
(the North Star editorial "Change of Opinion Announced"), not 1847. Don't record the
break four years too early — AP teachers will catch this.

Key exam sentence: the abolition movement had an internal strategy split (moral
condemnation + withdrawal from politics vs. enter politics and fight from within);
Douglass argued the Constitution was an anti-slavery document and formally broke with
Garrison in 1851.

Careful framing: Douglass's break with Garrison wasn't only "different strategy" — there
was also the resentment of a Black ally pushed beneath his white allies, unwilling to stay
a "talking scar." The abolition movement had racial tension inside it. This breaks the
simple "good whites freed passive Blacks" story (the self-emancipation view).`,
        },
      },
    },

    {
      id: 'tubman-underground-railroad',
      termCn: 'Tubman / 地下铁路',
      termEn: 'Tubman / The Underground Railroad',
      standardRef: ['APUSH Period 5 (KC-5.2)', 'AP Gov (civil disobedience)', 'CA HSS 8.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'tubman-receiving-end',
        nodeIds: ['tub-n1', 'tub-n3', 'tub-n6', 'tub-n9'],
        xiaoweiNote: {
          cn: `Tubman 整条线就是她（也是这一课的默认视角）。

约 1822 年生在马里兰，被奴役，原名 Araminta（叫 Minty），不识字。十几岁时
被监工误掷的两磅铁器砸中头，落下一辈子头痛和突然昏睡。1849 年逃到宾州，
然后做了几乎没人敢做的事：从 1850 年起一次次回到南方，**约十几趟（约 13 趟），
亲手带出约 70 人**，一个未失。人们叫她"摩西"。

⚠️ 数字必须记对（账本核查重点）：是**约 70 人 / 约十几趟**——这是学者
（Kate Larson 2003）修正后的数字。**不要写成"300 人 / 19 趟"**，那是 1869 年
传记夸大的神话，AP 现在用修正数字。记修正版才不会扣分。

地下铁路（Underground Railroad，第 3 节）的考点：它**不是真的铁路、没有实体隧道**——
是一套人际暗线网络，用铁路暗语（station 车站 = 藏逃奴的人家，conductor 列车长 = 带路人，
passenger 乘客 = 逃奴）。Tubman 不识字，靠北极星导航、靠圣歌里的暗号通信。

考点关键句：Underground Railroad 是援助逃奴的秘密人际网络（非实体铁路）；
self-emancipation（自我解放）视角强调被奴役者自身的逃亡与抵抗，纠正旧叙事里
"被动等白人解放"的图景。

⚠️ 还有一处别记错（账本核查重点）：1863 年 Combahee 河突袭，Tubman 一夜解放
约 700 多人——但准确说法是"**南北战争中第一个规划并向导武装突袭的女人**"
（在 Montgomery 上校指挥下），不是笼统的"美国史上第一个领兵打仗的女人"。
她的角色是 planner/scout/guide，统兵权在 Montgomery。

careful framing："Tubman 单枪匹马救人"是误解——她极依赖地下铁路这张集体网络
（安全屋、自由黑人联络、暗号）。个人勇气 + 集体网络，缺一不可。`,
          en: `The whole Tubman lens is her (and she's the default lens for this topic).

Born around 1822 in Maryland, enslaved, named Araminta (called Minty), unable to read.
In her teens an iron weight, two pounds, thrown by an overseer and missing its target,
struck her head, leaving lifelong headaches and sudden sleeping spells. She escaped to
Pennsylvania in 1849, then did what almost no one dared: from 1850 on she returned to
the South again and again — **about a dozen trips (around 13), bringing out about 70
people** with her own hands, never losing one. People called her Moses.

⚠️ The numbers must be right (a ledger check point): it's **about 70 people / about a
dozen trips** — the figure corrected by scholars (Kate Larson, 2003). **Do not write
"300 people / 19 trips"** — that's an exaggerated myth from an 1869 biography; AP now
uses the corrected numbers. Memorize the corrected version so you don't lose points.

The Underground Railroad (Node 3) exam point: it was **not a real railroad, no physical
tunnels** — it was a network of secret human contacts using railroad code (station = a
home hiding fugitives, conductor = a guide, passenger = a fugitive). Tubman, unable to
read, navigated by the North Star and signaled through codes hidden in hymns.

Key exam sentence: the Underground Railroad was a secret network of people aiding
fugitives (not a physical railroad); the self-emancipation view stresses the enslaved's
own escape and resistance, correcting the old "passively waiting for white liberation" picture.

⚠️ One more thing not to get wrong (a ledger check point): in 1863 Tubman led the
Combahee River raid, freeing about 700+ people in one night — but the precise statement
is "the **first woman to plan and guide an armed raid in the Civil War**" (under Colonel
Montgomery's command), not a loose "first woman in American history to lead troops into
battle." Her role was planner/scout/guide; command was Montgomery's.

Careful framing: "Tubman rescued people single-handedly" is a misconception — she leaned
heavily on the Underground Railroad's collective network (safe houses, free-Black contacts,
codes). Personal courage plus collective network — neither could be spared.`,
        },
      },
    },

    {
      id: 'uncle-toms-cabin',
      termCn: '《汤姆叔叔的小屋》1852',
      termEn: "Uncle Tom's Cabin (1852)",
      standardRef: ['APUSH Period 5 (KC-5.2)', 'CA HSS 8.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这一张故事里没讲，但 AP 经常单独考——它是把废奴从"少数活动家的事"
变成"全国老百姓的情感运动"的关键一本书。

**Harriet Beecher Stowe（哈丽特·比彻·斯托，斯托夫人，1811-1896）**，
一位北方作家。1852 年她出版小说 **《汤姆叔叔的小屋》(Uncle Tom's Cabin)**。

它为什么这么重要？时机。1850 年的 Fugitive Slave Act 刚把奴隶制摆到北方人
家门口，很多北方人第一次被逼着面对这件事。Stowe 写的不是政治论文，是一个
让人哭的故事——被拆散的家庭、被卖掉的孩子、善良的人在制度下走投无路。她让
成千上万从没见过种植园的普通北方读者，第一次"感觉到"奴隶制的残酷，而不只是
"听说过"。

效果惊人：第一年就卖了约 30 万册（在那个年代是天文数字），还被改编成到处上演的
舞台剧。它把废奴的"道德温度"一下子拉高了一大截。

最有名的一个（很可能是传说、但常被引用的）细节：据说内战期间 Lincoln 见到
Stowe 时说了一句"原来你就是那个写了一本书、挑起这场大战的小妇人"。这句话
是真是假学界有争议，但它说明当时人们多么看重这本书的影响力。

考点关键句：Uncle Tom's Cabin (1852) 用小说把废奴变成全国性的情感/道德运动，
极大激化了南北对立——南方人愤怒地说它是抹黑、是煽动。

跨张连接：它和 Douglass 的"道德 vs 政治"路线之争是一对——Stowe 走的是
"道德感化"（moral suasion）那条路，用感情打动大众；Douglass 后来更看重进政治、
用宪法和选票从制度上斗争。AP DBQ 常问："废奴在多大程度上是道德运动 vs 政治运动？"
这本书是"道德运动"那一边最有力的证据。`,
        en: `This card isn't in the story, but AP tests it on its own a lot — it's the
key book that turned abolition from "a few activists' cause" into "a national emotional
movement of ordinary people."

**Harriet Beecher Stowe (1811-1896)**, a Northern writer. In 1852 she published the
novel **Uncle Tom's Cabin**.

Why was it so important? Timing. The 1850 Fugitive Slave Act had just put slavery on
Northerners' doorsteps, and many were forced to face it for the first time. Stowe didn't
write a political treatise — she wrote a story that made people cry: families torn apart,
children sold, good people trapped with no way out under the system. She made tens of
thousands of ordinary Northern readers who'd never seen a plantation actually feel
slavery's cruelty for the first time, not just "hear about it."

The effect was stunning: it sold about 300,000 copies in the first year (an astronomical
number for the era) and was adapted into stage plays performed everywhere. It raised the
"moral temperature" of abolition by a huge margin overnight.

The most famous (likely legend, but often quoted) detail: during the Civil War Lincoln
supposedly met Stowe and said, "So you're the little woman who wrote the book that started
this great war." Whether the line is real is debated, but it shows how much weight people
placed on the book's influence.

Key exam sentence: Uncle Tom's Cabin (1852) used a novel to turn abolition into a national
emotional/moral movement, sharply inflaming North-South conflict — Southerners angrily
called it slander and incitement.

Cross-card link: it pairs with Douglass's "moral vs political" strategy debate — Stowe
took the path of "moral suasion," moving the masses through feeling; Douglass later put
more weight on entering politics, fighting structurally with the Constitution and the ballot.
AP DBQ often asks: "To what extent was abolition a moral movement vs a political movement?"
This book is the strongest evidence on the "moral movement" side.`,
      },
      xiaoweiNote: {
        cn: `老师说记这本书有一个万能公式："1852 + Stowe + 小说 = 把废奴变成全国情感运动"。
年份 1852 和 Douglass 的"Fourth of July"演讲是同一年，可以一起记。

我自己的小心得：别把它当成"一本好书改变了历史"的鸡汤。更准的说法是——
它出现在 Fugitive Slave Act（1850）刚刚把矛盾点燃的那个时间点上，是"对的书
撞上了对的时机"。考 DBQ 写"为什么这本书影响这么大"，一定要带上"1850 年逃奴法
铺垫了北方读者的情绪"这个背景，不能只夸作者。`,
        en: `Teacher said there's an all-purpose formula for this book: "1852 + Stowe +
novel = turned abolition into a national emotional movement." The year 1852 is the same
as Douglass's "Fourth of July" speech, so memorize them together.

My own takeaway: don't treat it as a feel-good "one good book changed history" story.
The more accurate version is — it appeared right when the Fugitive Slave Act (1850) had
just lit the conflict, so it was "the right book hitting the right moment." For a DBQ on
"why was this book so influential," you must include the background that "the 1850
Fugitive Slave Act had primed Northern readers' emotions," not just praise the author.`,
      },
    },

    {
      id: 'escalation-kansas-dred-scott',
      termCn: '矛盾升级：Kansas-Nebraska + Dred Scott',
      termEn: 'Escalation: Kansas-Nebraska Act & Dred Scott',
      standardRef: ['APUSH Period 5 (KC-5.2)', 'CA HSS 8.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'calhoun',
        nodeIds: ['cal-n8', 'cal-n9'],
        xiaoweiNote: {
          cn: `Calhoun 第 8、9 节讲了 1850 年代矛盾怎么一级一级炸上去，最后炸成内战。
这是 APUSH Period 5 最高频的一段时间线。

**Kansas-Nebraska Act（1854）**：国会推翻了 1820 年那条老线，改让新地用
popular sovereignty（居民自决）自己投票决定要不要奴隶制。结果堪萨斯成了战场——
蓄奴派和反奴派各自涌进去抢人头票，真的开枪互杀，史称 **"Bleeding Kansas"
（流血的堪萨斯）**。这说明"妥协"已经失效，矛盾开始流血。

**Dred Scott v. Sandford（1857）**：Dred Scott 是个被奴役的人，他主张自己
在自由州住过、应该自由。最高法院（Taney 法院）判他**败诉**，还说了两句惊人的话：
(1) 黑人不是、也永远不能是美国公民；(2) 国会无权在任何地方禁止奴隶制。
这等于给 Calhoun 的理论盖了官印——奴隶制不是地方问题，是全国受宪法保护的财产权。

⚠️ 易错点：Dred Scott **败诉**，他没有因为这个案子获得自由（很多人记反）。

考点关键句：Kansas-Nebraska Act (1854) 推翻 1820 老线引发 Bleeding Kansas；
Dred Scott (1857) 判黑人非公民、国会无权禁奴隶制，把矛盾推到无可妥协。

careful framing（第 8、9 节小 U最喜欢的一点）：这一步步，没有一步是"疯子"干的。
每一步背后都是受过良好教育的法官、议员，引经据典、逻辑严密地推出来的。
通向最大不义的路，常常不是用愚蠢铺的，是用聪明铺的。这句话我抄在笔记本上了。`,
          en: `Calhoun Nodes 8 and 9 cover how the 1850s conflict blew up level by level
until it exploded into the Civil War. This is the highest-frequency timeline stretch in
APUSH Period 5.

**Kansas-Nebraska Act (1854)**: Congress overturned the old line of 1820 and let new
territories use popular sovereignty to vote on slavery themselves. Kansas became a
battlefield — pro- and anti-slavery sides poured in to grab votes and actually shot and
killed each other, in what was called **"Bleeding Kansas."** This showed "compromise" had
failed and the conflict had started to bleed.

**Dred Scott v. Sandford (1857)**: Dred Scott, an enslaved man, argued he had lived in a
free state and should be free. The Supreme Court (the Taney court) ruled **against him**
and said two astonishing things: (1) Black people were not, and never could be, U.S.
citizens; (2) Congress had no power to ban slavery anywhere. This stamped an official seal
on Calhoun's theory — slavery wasn't a local matter but a nationwide property right
protected by the Constitution.

⚠️ Common mistake: Dred Scott **lost**; he did not gain freedom from this case (many
people remember it backwards).

Key exam sentence: the Kansas-Nebraska Act (1854) overturned the 1820 line and triggered
Bleeding Kansas; Dred Scott (1857) ruled Black people non-citizens and Congress powerless
to ban slavery, pushing the conflict beyond compromise.

Careful framing (Xiao U's favorite point from Nodes 8-9): not a single one of these steps
was the work of a madman. Behind each step were well-educated judges and senators,
reasoning rigorously and citing precedent. The road to the greatest injustice is often paved
not with stupidity but with cleverness. I copied that line into my notebook.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Calhoun 在 1837 年的参议院演讲里，用一整套听起来很有道理的逻辑——
攻击北方的"工资奴隶制"、援引古希腊罗马、说黑人"天生"适合被统治——
把奴隶制论证成一件"积极的好事"（positive good）。他不是无知的恶棍，
是耶鲁出身的一流理论家。

一个聪明、有学问、有讲台的人，给一件不义的事编出动听的辩护——
他比一个无知的恶棍更危险，还是更不危险？为什么？`,
      en: `In his 1837 Senate speech, Calhoun used a whole reasonable-sounding logic —
attacking the North's "wage slavery," citing ancient Greece and Rome, claiming Black
people were "by nature" fit to be ruled — to argue that slavery was a "positive good."
He was not an ignorant brute but a first-rate theorist trained at Yale.

A clever, learned person with a podium who builds a beautiful defense for an injustice —
is he more dangerous than an ignorant brute, or less? Why?`,
      hintCn: `提示：可以从两个角度想——(1) 一个公开的恶棍很容易被识破和拒绝；
可一个把残酷"重新包装成恩惠"的聪明人，能让无数本来会动摇的人心安理得地继续作恶，
所以更危险。(2) 或者反过来：聪明人的辩护虽然有力，但因为它建在一个错误的前提上，
逻辑越严密、被拆穿时崩塌得越彻底——聪明反而是它的弱点。两种解读都能写。

进阶思考：今天你刷到一篇逻辑很严密、却在为某种偏见辩护的文章，你会被那套漂亮逻辑
说服，还是会停下来、绕过他的话，去看他到底在为什么辩护？`,
      hintEn: `Hint: think from two angles — (1) an open brute is easy to see through and
reject; but a clever person who "repackages cruelty as kindness" can let countless people
who might have wavered keep doing evil with an easy conscience, so he's more dangerous.
(2) Or the reverse: the clever person's defense is strong, but because it's built on a
false premise, the tighter the logic, the more completely it collapses when exposed — so
cleverness is its weakness. Both readings work.

Going deeper: today, if you scroll past a tightly argued article that's defending some
prejudice, will you be persuaded by the beautiful logic, or will you stop, step around the
words, and look at what it's really defending?`,
      conceptsActivated: ['calhoun-positive-good', 'escalation-kansas-dred-scott'],
    },
    {
      id: 'q2',
      cn: `同一部美国宪法，三种人读出三个意思：Calhoun（蓄奴派）说它保护奴隶制；
Garrison（白人废奴领袖）同意这个读法，所以主张"宪法是跟魔鬼签的契约，烧掉它、
北方跟南方分家"；Douglass 偏不，他说宪法正文里根本没出现过"slave"这个词，
它是可以拿来反对奴隶制的武器，所以他要进政治、用宪法和选票从内部斗争。

一份你觉得有问题的规则（法律、校规、家规），你会选 Garrison 那条路——
"它烂到根上，推倒它"，还是 Douglass 那条路——"它里面有可以利用的东西，
留下来把它抢过来重新解读"？`,
      en: `One U.S. Constitution, three people reading three meanings: Calhoun (slaveholders)
said it protected slavery; Garrison (the white abolitionist leader) agreed with that reading
and so argued "the Constitution is a covenant with the devil — burn it, let the North
separate from the South"; Douglass refused, saying the text never uses the word "slave,"
so it could be a weapon against slavery, and he would enter politics and fight from within
with the Constitution and the ballot.

For a rule you think is flawed (a law, a school policy, a family rule), would you take
Garrison's path — "it's rotten to the root, tear it down" — or Douglass's path — "there's
something usable inside it, stay and seize it and reinterpret it"?`,
      hintCn: `提示：这道题没有标准答案，重要的是想清楚每条路的代价。Garrison 那条路
干净、彻底、道德上很痛快，但"推倒"之后用什么替代、谁来重建，是个大问题。Douglass
那条路看起来"妥协"，但他赌的是"这个国家会兑现承诺"——结果几十年后，他晚年眼看着
重建被推翻、黑人重新被剥夺权利。两条路各有它的勇气，也各有它的天真。

进阶思考：你选哪条路，可能跟"你有多相信这个体制还救得回来"有关。你怎么判断
一个有问题的东西是"还能修"还是"该推倒重来"？`,
      hintEn: `Hint: no standard answer here; what matters is thinking through each path's
cost. Garrison's path is clean, total, morally satisfying, but after "tearing it down,"
what replaces it and who rebuilds is a huge question. Douglass's path looks like
"compromise," but he bet that "this country would keep its promise" — and decades later,
in his old age, he watched Reconstruction overturned and Black people stripped of rights
again. Each path has its courage and its naivety.

Going deeper: which path you choose may depend on how much you believe the system can
still be saved. How do you judge whether a flawed thing "can still be fixed" or "should be
torn down and rebuilt"?`,
      conceptsActivated: ['douglass-abolitionism-constitution', 'calhoun-positive-good'],
    },
    {
      id: 'q3',
      cn: `1850 年的 Fugitive Slave Act 本来是给南方的补偿，目的是逼北方人帮着抓逃奴。
可它反而把很多原本冷漠的北方人推到了废奴一边——他们亲眼看见猎奴人冲进自己城市、
把安家多年的邻居拖走，坐不住了。Tubman 说过类似的话：压迫者收紧绳子，
本想勒死逃亡者，结果勒醒了一批本来装睡的人。

为什么压迫者"收紧绳子"，有时候反而帮了被压迫的人？用 Fugitive Slave Act 当例子，
解释这个反常的因果。`,
      en: `The 1850 Fugitive Slave Act was meant as the South's compensation, designed to
force Northerners to help capture fugitives. But it actually pushed many once-indifferent
Northerners toward abolition — they saw slave-catchers rush into their cities and drag away
a neighbor who'd lived there for years, and couldn't sit still. Tubman said something
similar: the oppressor tightening the rope, meaning to choke the fugitives, instead woke a
crowd who had been pretending to sleep.

Why does the oppressor "tightening the rope" sometimes end up helping the oppressed?
Use the Fugitive Slave Act as your example to explain this paradoxical cause-and-effect.`,
      hintCn: `提示：可以从"它把'远方的事'变成'家门口的事'"这个角度想。以前北方人可以说
"奴隶制是南方的事，跟我无关"，保持冷漠很容易。Fugitive Slave Act 用法律强迫每个
北方公民要么帮着抓逃奴、要么犯法——它取消了"中立"这个选项，逼人选边。当一件不义
逼到你必须亲手参与的时候，很多原本沉默的人才会被惊醒。

进阶思考：这个"逼人选边"的逻辑，在历史上反复出现（你跑过 enlightenment，会想起
Toussaint 的海地革命也是被法国的反复无常逼出来的）。这对你理解"为什么有时候温和的
压迫比极端的压迫更能维持现状"有什么启发？`,
      hintEn: `Hint: think from the angle of "it turned a distant matter into a doorstep
matter." Before, Northerners could say "slavery is the South's business, none of mine,"
and staying indifferent was easy. The Fugitive Slave Act used law to force every Northern
citizen to either help capture fugitives or break the law — it removed the "neutral"
option and forced people to take a side. When an injustice forces you to take part with
your own hands, many once-silent people finally wake up.

Going deeper: this "forcing people to take a side" logic recurs in history (if you ran the
enlightenment topic, you'll recall Toussaint's Haitian Revolution was also driven out by
France's back-and-forth). What does this suggest about why mild oppression sometimes
maintains the status quo better than extreme oppression?`,
      conceptsActivated: ['fugitive-slave-act', 'tubman-underground-railroad', 'compromise-of-1850'],
    },
  ],
};

export default notebook;
