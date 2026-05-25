// ─── 同伴笔记本架构 v1 · Jackson & Indian Removal 1830 ─────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
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
//   - storyboard 提供情感锚点（Quatie Ross / John Ross / Andrew Jackson 三条线）
//   - notebook 提供考点闭环（Indian Removal Act 法条 + spoils system + nullification crisis
//     等故事没展开、但 APUSH/AP US Gov 必考的考点补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - CA HSS-8.5（Jacksonian era + 西进运动 + 联邦/州权张力）
//   - APUSH Period 4（1800-1848，Jacksonian Democracy + Indian Removal + Trail of Tears）
//   - AP US Government & Politics（Worcester v. Georgia · 行政权 vs 司法权 · 三权分立失效）
//
// dark-topic 注意（per narrative authorNotes）：
//   - 小薇同伴语气，不掩饰矛盾，但不创伤模拟、不廉价煽情
//   - 文化对应硬禁：美国/切罗基史一律 real terms，不用中国概念词类比
//   - 事实对账本（factledger）：Quatie 让毯子=传说、John Marshall 名言=apocryphal，不写回；
//     Jackson 被刀"砍伤"非"砍脸"（factledger 红旗 #15 已软化），此处沿用"砍伤"
//
// schemaVersion: 1 · notebookVersion: jackson-indian-removal-1830-v1

export var notebook = {
  topicId: 'jackson-indian-removal-1830',
  topicNameCn: '杰克逊民主与印第安人迁移',
  topicNameEn: 'Jacksonian Democracy & Indian Removal',
  schemaVersion: 1,
  companion: {
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习脚手架，不剧透）──────────────────
  preview: {
    cn: `今天老师说我们要学 1830 年前后的"杰克逊时代"（the Age of Jackson）。
她在黑板上写了两行字，看起来像两个完全相反的故事：

左边：Jacksonian Democracy（杰克逊式民主）——投票权扩大给几乎所有白人男性。
右边：Indian Removal（印第安人迁移）——东南的原住民被赶往西部，几千人死在路上。

老师给的人名和术语清单：

Andrew Jackson（安德鲁·杰克逊）、John Ross（约翰·罗斯）、Quatie Ross（夸蒂·罗斯）、
John Marshall（约翰·马歇尔，首席大法官）

术语：Indian Removal Act（印第安人迁移法案）、Worcester v. Georgia（伍斯特诉佐治亚案）、
Trail of Tears（泪之路）、separation of powers（三权分立）、spoils system（分赃制）、
nullification crisis（废止危机）

老师说，这一课最重要的一句话是：

"别把杰克逊简单分成好人或坏人。把民主扩大给一群人、又把另一群人赶走——
这是同一个人、同一双手做的。你要学会同时看见'光'和'影'。"

我把这句话抄在本子第一页。然后先记住术语清单，再去读三个故事——
Quatie（泪之路上的切罗基母亲）、John Ross（走法庭路线的首领）、
Andrew Jackson（执行者本人）——读完再回来对照，看我能不能解释这些词。`,
    en: `Today my teacher said we're learning about the "Age of Jackson" (around 1830).
She wrote two lines on the board that looked like two opposite stories:

Left: Jacksonian Democracy — the vote widened to nearly all white men.
Right: Indian Removal — the southeastern native peoples driven west,
thousands dying on the road.

Teacher's list of names and terms:

Andrew Jackson, John Ross, Quatie Ross, John Marshall (the Chief Justice)

Terms: Indian Removal Act, Worcester v. Georgia, Trail of Tears,
separation of powers, spoils system, nullification crisis.

Teacher said the most important sentence of this lesson is:

"Don't sort Jackson simply into good or bad. Widening democracy for one group
while driving out another — that was one man, one pair of hands. You have to
learn to see the 'light' and the 'shadow' at the same time."

I wrote that on page one of my notebook. Then I'll memorize the term list and
go read the three stories — Quatie (a Cherokee mother on the Trail of Tears),
John Ross (the chief who fought through the courts), and Andrew Jackson
(the man who drove it). After that I'll come back and check whether I can
explain each term.`,
    keyTerms: [
      { cn: '印第安人迁移法案（1830）', en: 'Indian Removal Act (1830)' },
      { cn: '伍斯特诉佐治亚案（1832）', en: 'Worcester v. Georgia (1832)' },
      { cn: '泪之路', en: 'Trail of Tears' },
      { cn: '杰克逊式民主', en: 'Jacksonian Democracy' },
      { cn: '三权分立', en: 'separation of powers' },
      { cn: '分赃制', en: 'spoils system' },
      { cn: '废止危机', en: 'nullification crisis' },
      { cn: '新埃科塔条约（1835）', en: 'Treaty of New Echota (1835)' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '安德鲁·杰克逊',
        nameEn: 'Andrew Jackson',
        ipa: '/ˈændruː ˈdʒæksən/',
        roleCn: '美国第 7 任总统，"平民总统"，签署 Indian Removal Act 的执行者',
        roleEn: '7th US President, the "people\'s president," who signed the Indian Removal Act',
        mustKnow: true,
        audioKey: 'andrew-jackson',
      },
      {
        nameCn: '约翰·罗斯',
        nameEn: 'John Ross',
        ipa: '/dʒɒn rɔːs/',
        roleCn: '切罗基民选首领（1828-1866），仅 1/8 切罗基血统，走法庭路线抗争迁移',
        roleEn: 'elected Cherokee Principal Chief (1828-1866), one-eighth Cherokee, fought removal through the courts',
        mustKnow: true,
        audioKey: 'john-ross',
      },
      {
        nameCn: '约翰·马歇尔',
        nameEn: 'John Marshall',
        ipa: '/dʒɒn ˈmɑːrʃəl/',
        roleCn: '美国首席大法官，写 Worcester v. Georgia 判词，称切罗基为"独立的政治共同体"',
        roleEn: 'US Chief Justice, wrote the Worcester v. Georgia opinion calling the Cherokee a "distinct political community"',
        mustKnow: true,
        audioKey: 'john-marshall',
      },
      {
        nameCn: '夸蒂·罗斯',
        nameEn: 'Quatie Ross',
        ipa: '/ˈkwɑːti rɔːs/',
        roleCn: 'John Ross 之妻，泪之路上的切罗基母亲，1839 年病逝于 Victoria 号汽船',
        roleEn: 'wife of John Ross, a Cherokee mother on the Trail of Tears, died aboard the steamboat Victoria in 1839',
        mustKnow: false,
        audioKey: 'quatie-ross',
      },
      {
        nameCn: '马丁·范布伦',
        nameEn: 'Martin Van Buren',
        ipa: '/ˈmɑːrtɪn væn ˈbjʊərən/',
        roleCn: 'Jackson 继任总统，1838-39 年实际执行 Trail of Tears',
        roleEn: 'Jackson\'s successor, actually carried out the Trail of Tears in 1838-39',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '梅杰·里奇',
        nameEn: 'Major Ridge',
        ipa: '/ˈmeɪdʒər rɪdʒ/',
        roleCn: '切罗基 Treaty Party 领袖，签署 New Echota 条约，后被己族处死',
        roleEn: 'leader of the Cherokee Treaty Party, signed the Treaty of New Echota, later executed by his own nation',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'indian-removal-act-1830',
      termCn: 'Indian Removal Act / 印第安人迁移法案',
      termEn: 'Indian Removal Act (1830)',
      standardRef: ['APUSH Period 4', 'CA HSS-8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'quatie-trail-of-tears', nodeId: 'quatie-n3', context: 'Quatie 解释这部法律的"话术"——士兵已在门口的"谈判"' },
          { lens: 'andrew-jackson', nodeId: 'jackson-n4', context: 'Jackson 第一人称讲他签法案时心里怎么想，自认"人道""慷慨"' },
        ],
      },
      standaloneText: {
        cn: `Indian Removal Act（印第安人迁移法案），1830 年 5 月 28 日由总统 Andrew Jackson 签署。

它是这整个 Topic 的"发令枪"——后面所有事（最高法院的官司、New Echota 条约、Trail of Tears）
都是从这一部法律滚下来的。

法案到底说了什么？它**没有**直接写"把切罗基人赶走"。它写的是：授权总统，
跟密西西比河以东的各原住民族"谈判"，用河以西的土地，"交换"他们东部的土地。

考点关键句：法案用的两个词是 **"choose"（选择）**和 **"exchange"（交换）**——
听起来像一笔"自愿的、公平的交易"。但真实情况是：所谓"谈判"，是士兵已经站在你家门口的谈判；
所谓"自愿交换"，是你不走也得走。法律的"措辞"和现实的"强制"之间，差着十万八千里。

为什么 AP 一定考？因为它是"用合法形式包装强制"的经典案例——一部经过国会两院投票、
总统签字的正式法律，给一场种族驱逐穿上了"合法"的外衣。

🔗 故事连接：Quatie 在视角一第 3 节亲口拆穿这套话术。Jackson 在视角三第 4 节
告诉你，他签字时真心觉得这是"人道的""双赢的"——这正是这部法案最可怕的地方。`,
        en: `The Indian Removal Act, signed by President Andrew Jackson on May 28, 1830.

It is the "starting gun" of this whole Topic — everything after (the Supreme Court
cases, the Treaty of New Echota, the Trail of Tears) rolls downhill from this one law.

What did the law actually say? It did **not** state outright "drive the Cherokee out."
It said: authorize the President to "negotiate" with the native nations east of the
Mississippi, "exchanging" land west of the river for their eastern land.

Key exam sentence: the two words the act uses are **"choose"** and **"exchange"** —
which sound like a "voluntary, fair deal." But the reality: the "negotiation" was a
negotiation with soldiers already at your door; the "voluntary exchange" was one you
took whether you wanted to or not. There is a vast gap between the law's "wording"
and the reality of "coercion."

Why does AP always test it? Because it is the classic case of "wrapping coercion in
legal form" — a formal law, passed by both houses of Congress and signed by the
President, that dressed a racial expulsion in the coat of "legality."

🔗 Story link: Quatie tears open this trick herself in Lens 1, Node 3. Jackson, in
Lens 3, Node 4, tells you he genuinely felt it was "humane" and "win-win" when he
signed — which is exactly what makes this act so frightening.`,
      },
      xiaoweiNote: {
        cn: `老师说这部法案是 APUSH Period 4 的**最高频考点**之一——选择题和 DBQ 都爱用。
我的记忆口诀："choose + exchange"两个甜词 = 强制驱逐的甜外衣。看到法律里的"自愿""交换"，
先问一句：谁站在谁的门口？`,
        en: `Teacher said this act is one of the **most frequently tested** points in APUSH
Period 4 — both multiple choice and DBQ love it. My mnemonic: the two sweet words
"choose + exchange" = the sweet coating on a forced expulsion. When a law says
"voluntary" or "exchange," first ask: who is standing at whose door?`,
      },
    },

    {
      id: 'worcester-v-georgia',
      termCn: 'Worcester v. Georgia / 伍斯特诉佐治亚案',
      termEn: 'Worcester v. Georgia (1832)',
      standardRef: ['AP US Government & Politics', 'APUSH Period 4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'john-ross',
        nodeIds: ['ross-n5', 'ross-n6', 'ross-n9'],
        xiaoweiNote: {
          cn: `这个 John Ross 在视角二整条线讲透了。我把考点压缩成三句：

1. **判决内容**：1832 年最高法院（首席大法官 John Marshall）判切罗基是
"独立的政治共同体"（distinct, independent political community），对自己土地有权利，
佐治亚州的法律在切罗基地界"无效"（can have no force）。切罗基**法律上赢了**。

2. **为什么是 AP US Gov 高频**：法院能说"谁对"，但它**没有军队执行**。要让判决落地，
得靠总统出手——而 Jackson 按兵不动。这就是"三权分立失效"的经典反例（在第 9 节展开）。

3. **长期意义**：这个判决后来成了现代"部落主权"（tribal sovereignty）法理的奠基判例——
输了当下，却赢了两百年后的法律根基。

考点关键句："赢了判决"不等于"真的赢了"——这句话能直接当 DBQ 的 thesis 用。

⚠️ 对账本提醒：你以后会听到 Jackson 说"John Marshall 做了判决，让他自己去执行"——
这句名言是**后人编的**（Jackson 死后约 20 年才出现），不是他真说过的。视角二第 7 节
和视角三第 6 节都拆穿了它。考试别把它当 Jackson 的真实引语写。`,
          en: `John Ross covers this fully across Lens 2. I compress the exam point into three lines:

1. **The ruling**: in 1832 the Supreme Court (Chief Justice John Marshall) ruled the
Cherokee a "distinct, independent political community" with rights to their own land,
and that Georgia's laws "can have no force" inside Cherokee territory. The Cherokee
**won, legally.**

2. **Why it's AP US Gov high-frequency**: a court can say "who is right," but it has
**no army to enforce it.** To make the ruling real, the President had to act — and
Jackson did nothing. This is the classic counter-example of "separation of powers
failing" (unpacked in Node 9).

3. **Long-term significance**: this ruling later became the foundational precedent of
modern "tribal sovereignty" — it lost the moment but won the legal bedrock two
centuries later.

Key exam sentence: "winning the ruling" is not the same as "actually winning" — you
can use that line straight as a DBQ thesis.

⚠️ Fact-ledger reminder: you'll later hear Jackson said "John Marshall has made his
decision; now let him enforce it" — that famous line was **made up by later people**
(it first appeared about 20 years after Jackson died), not something he actually said.
Lens 2 Node 7 and Lens 3 Node 6 both debunk it. Don't write it as a real Jackson quote.`,
        },
      },
    },

    {
      id: 'trail-of-tears',
      termCn: 'Trail of Tears / 泪之路',
      termEn: 'Trail of Tears (1838-39)',
      standardRef: ['APUSH Period 4', 'CA HSS-8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'quatie-trail-of-tears',
        nodeIds: ['quatie-n7', 'quatie-n8', 'quatie-n9'],
        xiaoweiNote: {
          cn: `Quatie 的整条线就是这件事，所以我不重述故事，只钉考点：

- **是什么**：1838-39 年，约 16,000 切罗基人被强制西迁到 Indian Territory（今俄克拉荷马），
约 4,000 人死于病、冻、饿。"Trail of Tears"（泪之路）就是切罗基人给这条路起的名字。
- **谁执行的**：注意时间线——Jackson 1837 年已**卸任**，真正押人上路的是继任总统 Van Buren
和军队。但法案是 Jackson 签的、判决是 Jackson 拖着不执行的、条约是 Jackson 认下的。
（视角三第 7 节，Jackson 自己用"我把石头推下了山"来认这个责任。）
- **不只切罗基**：Choctaw、Creek、Chickasaw、Seminole 也被一起赶走——历史上合称
东南"五族"（Five Tribes）。这是一整套清空美国东南部的政策，不是孤立事件。

考点关键句：美国课本里这件事常常只有一句"领土扩张"——但这一句背后是四千个没走完路的人。

⚠️ 对账本提醒：有个流传很广的故事说"Quatie 把毯子让给生病孩子、自己冻死"——这是**传说**，
出自一个士兵事后约 52 年（1890 年代）写的信，没有别的证据。视角一第 5 节里 Quatie 自己
拆穿了它。别把它当史实写进 essay——四千人死亡的真实，不需要一个煽情小故事来加分。`,
          en: `Quatie's entire line is this event, so I won't retell the story — I'll just nail the exam points:

- **What it is**: in 1838-39, about 16,000 Cherokee were forced west to Indian
Territory (today's Oklahoma); about 4,000 died of disease, cold, and hunger.
"Trail of Tears" is the name the Cherokee gave the road.
- **Who carried it out**: watch the timeline — Jackson had already **left office** in
1837; it was his successor President Van Buren and the army who actually drove people
onto the road. But Jackson signed the act, Jackson dragged his feet on the ruling,
Jackson honored the treaty. (In Lens 3 Node 7, Jackson himself uses "I pushed the
stone off the mountain" to own that responsibility.)
- **Not only the Cherokee**: the Choctaw, Creek, Chickasaw, and Seminole were driven
out too — together the "Five Tribes" of the Southeast. This was one whole policy to
empty the American Southeast, not an isolated event.

Key exam sentence: in American textbooks this event is often just one line,
"territorial expansion" — but behind that line are four thousand people who never
finished the road.

⚠️ Fact-ledger reminder: there's a widely-spread story that "Quatie gave her blanket
to a sick child and froze to death" — that's a **legend**, from a soldier's letter
written about 52 years later (1890s), with no other evidence. In Lens 1 Node 5,
Quatie debunks it herself. Don't write it as fact in an essay — the reality of four
thousand deaths needs no touching little story to count for more.`,
        },
      },
    },

    {
      id: 'jacksonian-democracy',
      termCn: 'Jacksonian Democracy / 杰克逊式民主',
      termEn: 'Jacksonian Democracy',
      standardRef: ['APUSH Period 4', 'CA HSS-8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'andrew-jackson',
        nodeIds: ['jackson-n3', 'jackson-n8'],
        xiaoweiNote: {
          cn: `Jackson 在视角三第 3 节亲口讲了这个。考点提炼：

- **是什么**：1820-30 年代，越来越多的州取消了"必须有财产才能投票"的限制，投票权
第一次扩大到**几乎所有白人成年男性**。这股力量把出身贫寒的边疆人 Jackson 送上总统位。
这叫 Jacksonian Democracy。
- **为什么重要**：在此之前，美国总统大多出自东部名门望族，普通农民觉得政治"是上等人的事"。
Jackson 的当选第一次让"普通人"觉得政治也属于自己。这是**真的进步**。
- **但是**（最重要的考点）：这个"普通人"的边界，只装得下白人男性。**不含**原住民、
不含被奴役的黑人、不含所有女性。Jackson 自己在田纳西庄园 Hermitage 蓄奴上百人。

考点关键句（DBQ 神句）：**同一双手**把民主扩大给一群人，又把另一群人彻底排除——
"让一群人更自由"和"让另一群人更不自由"，可以是同一个人、同一个政策、同一个时刻。

这就是这整个 Topic 的反"线性进步"核心：别以为美国的自由是一条只往上走的直线。`,
          en: `Jackson tells you this himself in Lens 3, Node 3. Exam distillation:

- **What it is**: in the 1820s-30s, more and more states dropped the rule that you had
to own property to vote, and the vote widened for the first time to **nearly all white
adult men.** That force carried the poor-born frontiersman Jackson to the presidency.
This is Jacksonian Democracy.
- **Why it matters**: before this, US presidents came mostly from the great Eastern
families; ordinary farmers felt politics was "a gentleman's business." Jackson's
election made "ordinary people" feel, for the first time, that politics belonged to
them too. That was a **real advance.**
- **But** (the most important exam point): the boundary of this "ordinary people" only
held white men. It did **not** include native peoples, enslaved Black people, or any
women. Jackson himself held over a hundred enslaved people at his Tennessee plantation,
the Hermitage.

Key exam sentence (a DBQ gold line): **the same pair of hands** widened democracy for
one group while shutting another out entirely — "making one group freer" and "making
another group less free" can be the same person, the same policy, the same moment.

This is the anti-"linear progress" core of the whole Topic: don't assume American
freedom is a straight line that only goes up.`,
        },
      },
    },

    {
      id: 'spoils-system',
      termCn: 'spoils system / 分赃制',
      termEn: 'The Spoils System',
      standardRef: ['APUSH Period 4', 'AP US Government & Politics'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `spoils system（分赃制 / 政党分肥制）——这个考点故事里没讲，但它是理解
"杰克逊式民主"另一面的关键，AP 选择题常考，我单独补给你。

**是什么**：Jackson 当选后，把很多政府职位（邮局长、海关官员等）发给支持他的人，
同时把前任安排的官员撤掉。这种"谁赢了选举，谁的人就上台"的做法，叫 spoils system。
名字来自一句话："To the victor belong the spoils."（胜者得战利品。）

**Jackson 怎么辩护**：他说这其实是"民主"——政府的活儿没那么难，普通人就能干，
不该被一小撮"终身官僚"垄断。让支持自己的普通人轮流上岗，正是把政府还给人民。

**批评者怎么说**：反对者说这是用公职"奖赏党羽"，让能力让位给忠诚，埋下腐败的种子。

考点关键句：spoils system 是 Jacksonian Democracy 的"双刃剑"——
既是"把政府还给普通人"的民主姿态，也是"任人唯亲"的腐败温床。同一个东西，两面都要写。

🔗 连接：它和 Indian Removal 是同一个逻辑的两面——Jackson 真诚相信自己在"为普通人服务"，
但他的"普通人"范围、他对"什么算公平"的判断，都带着那个时代的盲点。

📌 半世纪后的回声：spoils system 的弊端积累到 1881 年总统 Garfield 被一个
"没拿到官职的求职者"刺杀，国会才在 1883 年通过 Pendleton Act（彭德尔顿法案），
改用考试择优录用公务员——这是 AP US Gov 讲文官制度改革时的固定连接点。`,
        en: `The spoils system — this point isn't in the stories, but it's key to
understanding the other side of "Jacksonian Democracy," and AP multiple choice tests
it often, so I'm adding it for you separately.

**What it is**: after Jackson won, he handed many government jobs (postmasters, customs
officials, etc.) to his supporters and removed officials appointed by his predecessor.
This "whoever wins the election, their people take office" practice is the spoils
system. The name comes from a phrase: "To the victor belong the spoils."

**How Jackson defended it**: he said it was actually "democracy" — government work
isn't that hard, ordinary people can do it, and it shouldn't be monopolized by a small
clique of "lifelong bureaucrats." Rotating ordinary supporters through the jobs was
giving government back to the people.

**What critics say**: opponents said it was "rewarding cronies" with public office,
putting loyalty above competence and planting the seeds of corruption.

Key exam sentence: the spoils system is the "double-edged sword" of Jacksonian
Democracy — both a democratic gesture of "giving government back to ordinary people"
and a breeding ground for "favoritism" and corruption. Same thing, write both sides.

🔗 Link: it and Indian Removal are two faces of the same logic — Jackson genuinely
believed he was "serving ordinary people," but his definition of "ordinary people," his
sense of "what counts as fair," carried the blind spots of his era.

📌 Echo half a century later: the spoils system's harms piled up until President
Garfield was assassinated in 1881 by a "job-seeker who didn't get an office," and only
then did Congress pass the Pendleton Act (1883), switching to merit-based civil service
exams — the standard connection point when AP US Gov covers civil-service reform.`,
      },
      xiaoweiNote: {
        cn: `老师说 spoils system 容易和 Jacksonian Democracy 混在一起记——其实它们是配套的：
一个讲"投票权扩大"，一个讲"官职怎么分"。记忆口诀："胜者得战利品"——
赢了选举就分官位。考试问"分赃制弊端的结局"，答案就是 1883 年 Pendleton Act。`,
        en: `Teacher said the spoils system is easy to blur together with Jacksonian
Democracy — really they're a matched pair: one is about "widening the vote," the other
about "how offices get handed out." Mnemonic: "To the victor belong the spoils" — win
the election, divide up the offices. If the exam asks "the end result of the spoils
system's flaws," the answer is the 1883 Pendleton Act.`,
      },
    },

    {
      id: 'nullification-crisis',
      termCn: 'nullification crisis / 废止危机',
      termEn: 'The Nullification Crisis (1832-33)',
      standardRef: ['APUSH Period 4', 'CA HSS-8.5'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `nullification crisis（废止危机），1832-33 年——这个考点故事里没讲，但它和
Indian Removal 几乎同时发生，揭示了 Jackson 对"联邦 vs 州"的真实立场，AP 常拿来对比，
我单独补给你。

**起因**：联邦政府征收高关税（1828、1832 年），南方州（尤其南卡罗来纳）觉得吃亏，
因为关税保护北方工业、却抬高了南方买东西的成本。

**核心主张**：南卡罗来纳提出 nullification（废止权）——主张一个州可以单方面宣布
某条联邦法律在本州"无效、不执行"。这背后是 states' rights（州权）理论：
州的权力高于联邦。

**Jackson 怎么反应**：他强硬到底。他发表声明说，一个州无权废止联邦法律，
威胁要派军队进南卡执行（国会通过了授权用兵的 Force Bill）。最后靠 Henry Clay
调停的妥协关税案降温，危机才化解。

考点关键句（这里有个绝妙的反差）：在 nullification crisis 里，Jackson 是
**联邦权威的强硬捍卫者**——他不许南卡藐视联邦法律。但在 Worcester v. Georgia 里，
当佐治亚州藐视联邦最高法院、欺压切罗基时，Jackson 却**站到了州那边、按兵不动**。

🔗 这是 AP DBQ 的高分对比：同一个 Jackson，面对南卡时挺联邦，面对佐治亚时纵容州——
区别在哪？区别在于：南卡威胁的是联邦的"权力"，而佐治亚要的是切罗基的"土地"，
而 Jackson 本来就想要切罗基走。立场不是原则，是利益决定的。`,
        en: `The nullification crisis (1832-33) — this point isn't in the stories, but it
happened almost at the same time as Indian Removal and reveals Jackson's real stance on
"federal vs state," and AP often uses it for contrast, so I'm adding it separately.

**Cause**: the federal government levied high tariffs (1828, 1832), and Southern states
(especially South Carolina) felt cheated, because the tariffs protected Northern
industry while raising the cost of goods in the South.

**Core claim**: South Carolina proposed nullification — the idea that a single state
could unilaterally declare a federal law "void, not to be enforced" within its borders.
Behind it was states' rights theory: that state power stands above the federal government.

**How Jackson reacted**: hard-line. He declared that a state had no right to nullify
federal law, and threatened to send troops into South Carolina to enforce it (Congress
passed a Force Bill authorizing military force). It finally cooled down through a
compromise tariff brokered by Henry Clay.

Key exam sentence (here's the brilliant contrast): in the nullification crisis Jackson
was a **fierce defender of federal authority** — he would not let South Carolina defy
federal law. But in Worcester v. Georgia, when the state of Georgia defied the federal
Supreme Court and oppressed the Cherokee, Jackson **sided with the state and did nothing.**

🔗 This is a high-scoring AP DBQ contrast: the same Jackson backed the federal
government against South Carolina but indulged the state against Georgia — what's the
difference? The difference: South Carolina threatened federal "power," while Georgia
wanted Cherokee "land" — and Jackson wanted the Cherokee gone anyway. His stance wasn't
principle; it was decided by interest.`,
      },
      xiaoweiNote: {
        cn: `老师特别说这两个一起考最容易出题："Jackson 是支持联邦还是支持州权？"——
陷阱答案是"看情况"：对南卡（要权力）他挺联邦，对佐治亚（要土地）他纵容州。
我的口诀：**南卡挺联邦，佐治亚纵容州**——同一个人，两副面孔，因为利益不同。`,
        en: `Teacher specifically said these two get tested together most easily: "Did
Jackson support the federal government or states' rights?" — the trap answer is "it
depends": with South Carolina (wanting power) he backed the federal government, with
Georgia (wanting land) he indulged the state. My mnemonic: **federal against South
Carolina, state against Georgia** — same man, two faces, because the interests differed.`,
      },
    },

    {
      id: 'cherokee-civilization',
      termCn: '切罗基的"文明化"努力 / 成文宪法与报纸',
      termEn: 'Cherokee "Civilization" Efforts',
      standardRef: ['APUSH Period 4', 'CA HSS-8.5'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'quatie-trail-of-tears',
        nodeIds: ['quatie-n2'],
        xiaoweiNote: {
          cn: `Quatie 在视角一第 2 节、John Ross 在视角二第 3 节都讲到了。考点钉死：

1838 年的切罗基**不是**"住帐篷、不识字"的刻板印象。他们有：
- **1827 年的成文宪法**——照着美国宪法写的，有立法、法院、选举。
- **首都 New Echota**。
- **自己的文字**——一个叫 Sequoyah 的切罗基人发明的音节文字。
- **报纸《Cherokee Phoenix（切罗基凤凰报）》**——用本族文字印刷，是第一份原住民报纸。

考点关键句（反 Whig 核心）：白人**不是**因为切罗基"落后"才赶他们走——切罗基比很多
白人邻居还"文明"。他们被赶走，是因为 1828 年脚下发现了金子，是因为白人想要那片土地。

为什么这点 AP 爱考：它**戳破**了驱逐者的官方说辞。Jackson 说原住民"落后、注定消失"——
但切罗基有宪法、有报纸、有文字这个事实，直接把这套说辞证伪了。一个有宪法的民族被一部
法律赶走，本身就是对"文明带来安全"这个信念的反驳。

🔗 这给 DBQ 一个犀利角度："如果'变文明'保不住一个民族的土地，那'文明'到底保护了谁？"`,
          en: `Quatie covers it in Lens 1 Node 2, and John Ross in Lens 2 Node 3. Nailing the exam point:

The Cherokee of 1838 were **not** the stereotype of "people in tents who couldn't read."
They had:
- **A written constitution from 1827** — modeled on the US Constitution, with a
legislature, courts, elections.
- **A capital at New Echota.**
- **Their own script** — a syllabary invented by a Cherokee man named Sequoyah.
- **A newspaper, the Cherokee Phoenix** — printed in their own script, the first
Native American newspaper.

Key exam sentence (the anti-Whig core): white men did **not** drive the Cherokee out
because they were "backward" — the Cherokee were more "civilized" than many of their
white neighbors. They were driven out because gold was found under their feet in 1828,
because white men wanted that land.

Why AP loves this point: it **punctures** the official justification of the expellers.
Jackson said the natives were "backward, doomed to vanish" — but the fact that the
Cherokee had a constitution, a newspaper, and a written script directly disproved that
story. A nation with a constitution driven out by a law is itself a rebuttal to the
belief that "civilization brings safety."

🔗 This gives a DBQ a sharp angle: "If 'becoming civilized' couldn't protect a nation's
land, then who did 'civilization' actually protect?"`,
        },
      },
    },

    {
      id: 'same-hands-progress-and-violence',
      termCn: '"同一双手"：进步与暴力同体 / 三权分立失效',
      termEn: '"The Same Hands": Progress and Violence in One Body',
      standardRef: ['AP US Government & Politics', 'AP DBQ rubric'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['jackson-n9', 'ross-n9', 'quatie-n10'],
        xiaoweiNote: {
          cn: `这是整个 Topic 最重要的"思维方式"考点，三条线在结尾都汇到这里。老师说 AP DBQ 一定用。

**两个一起记的核心论点：**

1. **同一双手（progress + violence in one body）**：Jackson 把投票权扩大给普通白人男性
（进步），和他把原住民赶向西部（暴力），不是两个 Jackson，是同一个。
"让一群人更自由"和"让另一群人更不自由"可以是同一个政策、同一个时刻。
（视角三第 9 节 Jackson 自己点破。）

2. **三权分立失效（separation of powers failed）**：美国宪法（1787 费城制定）本来把权力
分成立法/行政/司法，让它们互相牵制。但 Worcester 案暴露了一个漏洞——法院判了，
总统不执行，制衡就卡住了。"法治很强大，但它不会自动生效——它需要有权力的人愿意守。"
（视角二第 9 节 John Ross 点破。）

考点关键句（DBQ thesis 模板）：杰克逊时代证明了，**民主的扩大和权利的剥夺可以同步发生**；
而**司法的胜利如果没有行政的配合，可以等于零**。

写 essay 的方法：
1. 承认 Jacksonian Democracy 的真实进步（白人男性普选权）。
2. 指出同一时期、同一个人主导的 Indian Removal 是种族驱逐。
3. 用 Worcester v. Georgia 说明"三权分立"在现实中如何失效。
4. 结论：别把历史人物简单分成好人/坏人——学会同时 hold 住"光"和"影"。

⚠️ Rule 0 提醒：Quatie 第 10 节给了两种都站得住的说法（"这是种族暴力"vs"当年白人真心
以为是为他们好"）。AP 高分答案是**两边都写**，不塌成单一结论。`,
          en: `This is the most important "way of thinking" exam point in the whole Topic; all
three lines converge here at the end. Teacher said AP DBQ definitely uses it.

**Two core arguments to remember together:**

1. **The same hands (progress + violence in one body)**: Jackson's widening of the vote
to ordinary white men (progress) and his driving of the natives west (violence) were
not two Jacksons but one. "Making one group freer" and "making another group less free"
can be the same policy, the same moment. (Jackson points it out himself in Lens 3 Node 9.)

2. **Separation of powers failed**: the US Constitution (drawn up in Philadelphia in
1787) split power into legislative/executive/judicial to check one another. But the
Worcester case exposed a hole — the court ruled, the President wouldn't enforce it, and
the check jammed. "The rule of law is powerful, but it doesn't work by itself — it needs
the powerful to be willing to keep it." (John Ross points it out in Lens 2 Node 9.)

Key exam sentence (DBQ thesis template): the Age of Jackson proved that **the widening
of democracy and the stripping of rights can happen at the same time**; and that **a
judicial victory, without executive cooperation, can amount to zero.**

How to write the essay:
1. Acknowledge the real progress of Jacksonian Democracy (white male suffrage).
2. Point out that Indian Removal, led by the same man in the same period, was racial expulsion.
3. Use Worcester v. Georgia to show how "separation of powers" failed in reality.
4. Conclusion: don't sort historical figures simply into good/bad — learn to hold the
"light" and the "shadow" at once.

⚠️ Rule 0 reminder: Quatie's Node 10 gives two views that both stand ("this was racial
violence" vs "many white people back then genuinely thought it was for the natives'
good"). The high-scoring AP answer writes **both sides**, without collapsing into a
single conclusion.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1832 年，最高法院在 Worcester v. Georgia 判切罗基赢了——首席大法官 John Marshall
白纸黑字写"佐治亚的法律在切罗基地界无效"。但总统 Jackson 什么都没做，判决变成一张废纸，
切罗基最终还是被赶上了泪之路。

"赢了判决"和"真的赢了"，之间差的是什么？如果一个国家的最高法院判了，
却没人执行，那这个国家的"法治"还剩下什么？`,
      en: `In 1832 the Supreme Court ruled for the Cherokee in Worcester v. Georgia —
Chief Justice John Marshall wrote in black and white that "Georgia's laws have no force"
inside Cherokee territory. But President Jackson did nothing, the ruling became a
worthless scrap of paper, and the Cherokee were driven onto the Trail of Tears anyway.

What is the difference between "winning the ruling" and "actually winning"? If a
country's highest court rules, but no one enforces it, what is left of that country's
"rule of law"?`,
      hintCn: `提示：可以从"三权分立"的设计想——美国宪法本来让法院、总统、国会互相牵制。
但这个设计有个隐藏的前提：每一方都得**愿意**遵守游戏规则。当总统不肯执行法院判决，
设计就失灵了。法院有"说谁对"的权力，却没有"军队"去执行。

进阶思考：今天如果出现"法院判了、总统不听"的情况，谁该听谁的？历史上 Worcester 案
是这个问题最早、也最惨痛的一个例子。你觉得，光有一部好宪法够不够？还需要什么？`,
      hintEn: `Hint: think from the design of "separation of powers" — the US Constitution
set the court, the President, and Congress to check one another. But the design has a
hidden premise: each side must be **willing** to follow the rules of the game. When the
President won't enforce a court ruling, the design fails. The court has the power to
"say who is right," but no "army" to enforce it.

Going deeper: today, if "the court ruled and the President won't listen," who must yield
to whom? Historically, the Worcester case is the earliest and most bitter example of
this question. Do you think a good constitution alone is enough? What else is needed?`,
      conceptsActivated: ['worcester-v-georgia', 'same-hands-progress-and-violence'],
    },
    {
      id: 'q2',
      cn: `Jackson 把投票权扩大给几乎所有白人男性，让普通人第一次觉得政治也属于自己——
这是真的进步。但同一个 Jackson，签法案把切罗基人赶向西部，自己庄园里还蓄奴上百人。
他的"普通人"，从来只包括白人男性。

"让一群人更自由"和"让另一群人更不自由"，能不能是同一个人、同一个时刻做的事？
你会怎么同时看待 Jackson 的"光"和"影"，而不简单地把他分成好人或坏人？`,
      en: `Jackson widened the vote to nearly all white men, making ordinary people feel for
the first time that politics belonged to them too — a real advance. But the same Jackson
signed the act that drove the Cherokee west, and held over a hundred enslaved people at
his own plantation. His "ordinary people" only ever included white men.

Can "making one group freer" and "making another group less free" be done by the same
person, in the same moment? How would you hold both Jackson's "light" and his "shadow"
at once, without simply sorting him into good or bad?`,
      hintCn: `提示：DBQ 不喜欢"非黑即白"的答案。一个高分思路是：先承认进步是真的（不假装他
没做好事），再指出进步的"边界"——他的民主只画给"像他自己的人"。问题不只是 Jackson 一个人
心坏，而是整个时代把"人民"的范围划得只够装下白人男性。

进阶思考：今天还有没有这种"对多数人有利、却让少数人吃亏"的决定，或者"做了真正好事、
同时造成真实伤害"的人物？你能不能既不假装那些好事不存在，也不替那些伤害找借口？
（这正是视角三结尾 Jackson 留给你的问题。）`,
      hintEn: `Hint: DBQ doesn't like "black-or-white" answers. A high-scoring approach:
first acknowledge the progress was real (don't pretend he did no good), then point out
the "boundary" of that progress — his democracy was drawn only for "people like himself."
The problem isn't just that Jackson was a bad-hearted man, but that the whole era drew
the line of "the people" just wide enough to hold white men.

Going deeper: are there still decisions today that "help the many while costing the few,"
or figures who "did genuine good while causing real harm"? Can you neither pretend the
good things didn't exist, nor make excuses for the harm? (This is exactly the question
Jackson leaves you at the end of Lens 3.)`,
      conceptsActivated: ['jacksonian-democracy', 'same-hands-progress-and-violence', 'cherokee-civilization'],
    },
    {
      id: 'q3',
      cn: `在 nullification crisis（废止危机）里，南卡罗来纳想"废止"一条联邦关税法，
Jackson 强硬反对，甚至威胁动用军队——他坚定捍卫联邦权威。可几乎同时，佐治亚州公然
藐视联邦最高法院、欺压切罗基，Jackson 却站到州那边，按兵不动。

同一个总统，面对南卡时挺联邦、面对佐治亚时纵容州。这是"前后矛盾"，
还是背后有一条一致的逻辑？如果你是当年的切罗基人，你会怎么看 Jackson 这两副面孔？`,
      en: `In the nullification crisis, South Carolina wanted to "nullify" a federal tariff
law, and Jackson fiercely opposed it, even threatening to use the army — he firmly
defended federal authority. Yet almost at the same time, the state of Georgia openly
defied the federal Supreme Court and oppressed the Cherokee, and Jackson sided with the
state and did nothing.

The same President backed the federal government against South Carolina but indulged the
state against Georgia. Is this "self-contradiction," or is there a consistent logic
behind it? If you were a Cherokee back then, how would you see Jackson's two faces?`,
      hintCn: `提示：表面看是矛盾，但想一层就有逻辑了——南卡威胁的是联邦的"权力"
（不许别人挑战中央），佐治亚要的是切罗基的"土地"（而 Jackson 本来就想要切罗基走）。
两件事里 Jackson 都站在"对自己/对白人移民有利"的那边。他的立场不是"原则"，是"利益"。

进阶思考：当一个人在不同场合用完全相反的原则，但每次结果都对自己有利——
这说明他真正信的"原则"到底是什么？怎么分辨一个人是"有原则"还是"会用原则包装利益"？`,
      hintEn: `Hint: on the surface it looks contradictory, but one layer down there's a
logic — South Carolina threatened federal "power" (don't let anyone challenge the
center), while Georgia wanted Cherokee "land" (and Jackson wanted the Cherokee gone
anyway). In both cases Jackson stood on the side that "benefited himself / white
settlers." His stance wasn't "principle," it was "interest."

Going deeper: when a person uses opposite principles in different situations, but the
result always benefits himself — what does he actually believe in? How do you tell apart
someone who "has principles" from someone who "uses principles to dress up interest"?`,
      conceptsActivated: ['nullification-crisis', 'indian-removal-act-1830', 'worcester-v-georgia'],
    },
  ],
};

export default notebook;
