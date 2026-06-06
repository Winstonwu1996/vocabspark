// ─── 同伴笔记本架构 v1 · Latin American Independence 1810-1826 ─────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 10 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Bolívar criollo driver / San Martín lonely-mediator /
//     casta 底层士兵 receiving-end 三条线）
//   - notebook 提供考点闭环（catalyst-领导-受益三段拆解、criollo vs peninsular、
//     casta 等级、junta 反讽、大西洋革命链、Andes 碎裂结构、caudillo、
//     政治独立 vs 社会解放 — 补完 AP World Unit 5.2-5.3 课纲）
//
// 课纲对齐：
//   - AP World History Modern — Unit 5 (1750-1900)：Topic 5.2-5.3 Nationalism and Revolutions
//   - CA / 各州 HS World History — 大西洋革命单元
//
// 事实地基：对账 latin-american-independence-1810.md（附录 A 时间线 / B 词汇 / C 人物 /
//   §7 DBQ / §10 误解 / §11 思考）+ latin-american-independence-1810-factledger.md（27 claim 全 verified）
//
// schemaVersion: 1 · notebookVersion: latin-american-independence-1810-v1

export var notebook = {
  topicId: 'latin-american-independence-1810',
  topicNameCn: '拉丁美洲独立 1810-1826',
  topicNameEn: 'Latin American Independence 1810-1826',
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
    cn: `今天老师说我们要学 1810-1826 年的拉丁美洲独立（Latin American Independence）。
她说这是 AP World 第五单元「大西洋革命」链子上的最后、也是规模最大的一环——
美国 1776 → 法国 1789 → 海地 1791 → 拉美 1810-1826。前三场掀翻的是一个殖民地、一个王国，
拉美这一场，掀翻的是横跨半个地球、统治了三百年的整个西班牙美洲帝国。

她说这一课最爱考的是一种拆解：把「谁点的火」「谁来领导」「谁得到了什么、谁没得到」分开看。

她给了一张纸，上面写着这些名字：

Simón Bolívar（玻利瓦尔）、José de San Martín（圣马丁）、
Miguel Hidalgo（伊达尔戈）、Antonio José de Sucre（苏克雷）

还有一串词：criollo（克里奥尔人）、peninsular（半岛人）、casta（种族等级）、
caudillo（考迪罗强人）、junta（自治委员会）、Gran Colombia（大哥伦比亚）、
Grito de Dolores（多洛雷斯的呐喊）、El Libertador（解放者）。

我先记下来，等下读三个故事——Bolívar（亲手推翻帝国的人）、San Martín（中途退让的人）、
一个 casta 最底层、没名字的士兵（替别人流血、自己没翻身的人）——读完再回来对照这张单子。

老师说了一句我抄在笔记本第一页："这场革命既是一次真实的反殖民解放，
又是一场由本地白人精英主导、底层处境大体没变的复杂转变。读它，
要同时看见它的'解放'和它的'没解放'。"`,
    en: `Today my teacher said we're learning Latin American Independence (1810-1826).
She said it's the last and largest link in AP World Unit 5's "Atlantic Revolutions" chain —
America 1776 → France 1789 → Haiti 1791 → Latin America 1810-1826. The first three toppled
one colony or one kingdom; this one toppled the whole 300-year Spanish American empire that
spanned half the globe.

She said the favorite exam move here is a breakdown: separate "who lit the spark," "who led,"
and "who gained what, who gained nothing."

She gave us a sheet with these names:

Simón Bolívar, José de San Martín, Miguel Hidalgo, Antonio José de Sucre

Plus a string of terms: criollo, peninsular, casta (racial hierarchy), caudillo (strongman),
junta (self-governing committee), Gran Colombia, Grito de Dolores, El Libertador (the Liberator).

Let me write these down. After I read the three stories — Bolívar (who toppled the empire
with his own hands), San Martín (who stepped aside halfway), and a nameless casta-bottom
soldier (who bled for others and never rose) — I'll come back and check this list.

Teacher said one line I copied onto the first page of my notebook: "This revolution was both
a real anti-colonial liberation and a complex change led by local white elites, with the
bottom's situation barely moving. To read it, you have to see both its 'liberation' and its
'failure to liberate' at once."`,
    keyTerms: [
      { cn: '克里奥尔人', en: 'criollo (American-born white elite)' },
      { cn: '半岛人', en: 'peninsular (Spain-born ruling class)' },
      { cn: '卡斯塔 / 种族等级', en: 'casta (racial caste hierarchy)' },
      { cn: '梅斯蒂索 / 穆拉托', en: 'mestizo / mulato (mixed-race)' },
      { cn: '考迪罗强人', en: 'caudillo (post-independence strongman)' },
      { cn: '自治委员会', en: 'junta' },
      { cn: '总督辖区', en: 'Viceroyalty' },
      { cn: '大哥伦比亚', en: 'Gran Colombia' },
      { cn: '多洛雷斯的呐喊', en: 'Grito de Dolores' },
      { cn: '加的斯议会 / 1812 宪法', en: 'Cortes of Cádiz / 1812 Constitution' },
      { cn: '解放者（玻利瓦尔尊称）', en: 'El Libertador' },
      { cn: '安第斯山脉', en: 'the Andes' },
      { cn: '大西洋革命', en: 'Atlantic Revolutions' },
      { cn: '催化—领导—受益', en: 'catalyst–leadership–beneficiary' },
    ],
    keyFigures: [
      {
        nameCn: '西蒙·玻利瓦尔',
        nameEn: 'Simón Bolívar',
        roleCn: '"解放者 El Libertador"，criollo 精英，北方战场解放者，建立 Gran Colombia，临终叹「美洲无法被治理」',
        roleEn: '"El Libertador," criollo elite, liberator of the northern front, founder of Gran Colombia; near death lamented "America is ungovernable"',
      },
      {
        nameCn: '何塞·德·圣马丁',
        nameEn: 'José de San Martín',
        roleCn: '南方战场解放者，翻越安第斯解放智利秘鲁，1822 Guayaquil 会面后交出兵权、远走欧洲',
        roleEn: 'Liberator of the southern front, crossed the Andes to free Chile and Peru, handed over his command after the 1822 Guayaquil meeting and went to Europe',
      },
      {
        nameCn: '米格尔·伊达尔戈',
        nameEn: 'Miguel Hidalgo',
        roleCn: '墨西哥神父，1810「Grito de Dolores」发动底层（印第安+混血农民）起义，1811 被处死',
        roleEn: 'Mexican priest whose 1810 Grito de Dolores launched a bottom-up (Indian and mixed-race peasant) uprising; executed 1811',
      },
      {
        nameCn: '安东尼奥·何塞·德·苏克雷',
        nameEn: 'Antonio José de Sucre',
        roleCn: 'Bolívar 最信任的部将，指挥 1824 Ayacucho 决战，终结西班牙在南美大陆的统治',
        roleEn: "Bolívar's most trusted general, commanded the decisive 1824 Battle of Ayacucho that ended Spanish rule on the South American mainland",
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'catalyst-napoleon-invasion',
      termCn: '催化剂：1808 拿破仑入侵西班牙',
      termEn: 'The Catalyst: Napoleon\'s 1808 Invasion of Spain',
      standardRef: ['AP World Unit 5.2-5.3', 'CA HSS-10 World History'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'bolivar-actor',
        nodeIds: ['lat-bolivar-n3', 'lat-bolivar-n4'],
      },
      xiaoweiNote: {
          cn: `这个我读过！在 Bolívar 那一遍第 3 节。AP 这一课反复奖励的角度，是分清
「谁点的火」——而火不是美洲内部点的，是从欧洲飞来的一记意外。

口诀我背成：**1808，拿破仑抓走西班牙国王，扶哥哥 Joseph Bonaparte 上位。**
殖民地效忠了三百年的合法国王突然没了，那根撑着整个秩序的柱子咔嚓断了。
于是从墨西哥到布宜诺斯艾利斯，几百万人同时面对一个问题："国王没了，现在谁说了算？"

考点关键句：拉美独立的**直接催化剂是外部事件（拿破仑入侵造成的合法性真空）**，
不是美洲内部自己酝酿爆发的。误区陷阱：别写成"美洲人民自发起义"。
没有这记来自欧洲的重锤，时机会完全不一样。`,
          en: `I read this! In Bolívar's Lens Node 3. The angle AP keeps rewarding here is telling
apart "who lit the spark" — and the spark was not lit inside the Americas; it flew in from
Europe as an accident.

My mnemonic: **1808, Napoleon seized Spain's king and put his brother Joseph Bonaparte on
the throne.** The legitimate king the colonies had obeyed for 300 years was suddenly gone,
and the pillar holding up the whole order snapped. From Mexico to Buenos Aires, millions
faced one question at once: "The king is gone, so who's in charge now?"

Key exam sentence: the **direct catalyst was an external event** (the legitimacy vacuum from
Napoleon's invasion), not something brewed up inside the Americas. Trap to avoid: don't write
"the American people spontaneously rose up." Without that hammer-blow from Europe, the timing
would have been completely different.`,
      },
    },

    {
      id: 'criollo-vs-peninsular',
      termCn: 'criollo 对 peninsular 的权力裂隙',
      termEn: 'The Criollo–Peninsular Power Split',
      standardRef: ['AP World Unit 5.2', 'CA HSS-10 World History'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'bolivar-actor',
        nodeIds: ['lat-bolivar-n2'],
      },
      xiaoweiNote: {
          cn: `Bolívar 那一遍第 2 节整段就是这个。这是理解"谁来领导"的钥匙。

我把两层人背成一张对照表：
- **peninsular（半岛人）**：在西班牙本土出生的白人，被国王派来当总督、大主教——权力顶端。
- **criollo（克里奥尔人）**：纯欧洲血统、但在**美洲出生**的白人精英。有钱、有地、有学问，
  却因为"生在美洲"这一条，永远够不到最高的官位。

考点关键句：独立运动的**核心引擎，是 criollo 对 peninsular 的怨气**——
是"富人对更高一层的气"，不是穷人对富人的气。这股闷了几代人的怨，
正是 AP「谁来领导」的答案：**领导者是 criollo 精英，不是底层。**

记忆锚：同样是白人，差别只在"在西班牙生"还是"在美洲生"。
这条肤色之外的出生地裂缝，撕开了整个帝国。`,
          en: `Bolívar's Lens Node 2 is all about this. It's the key to "who led."

I memorize the two layers as a compare table:
- **Peninsulares**: whites born in Spain itself, sent by the king as viceroys and archbishops
  — the top of power.
- **Criollos**: white elites of pure European blood but **born in the Americas**. Rich,
  landed, educated, yet by the one fact of "born in the Americas" they could never reach the
  highest offices.

Key exam sentence: the **core engine of the independence movement was criollo resentment of
peninsulares** — "the rich man's resentment of the layer above him," not the poor man's
resentment of the rich. That generations-old grievance is the answer to AP's "who led":
**the leaders were the criollo elite, not the bottom.**

Memory anchor: both were white; the only difference was "born in Spain" vs "born in the
Americas." That birthplace crack, beyond skin color, tore the whole empire open.`,
      },
    },

    {
      id: 'casta-system',
      termCn: 'casta 种族等级制度',
      termEn: 'The Casta System',
      standardRef: ['AP World Unit 5.2', 'CA HSS-10 World History', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'casta-bottom-receiving-end',
        nodeIds: ['lat-casta-n2', 'lat-casta-n8'],
      },
      xiaoweiNote: {
          cn: `casta 那一遍第 2 节专门讲这张表，第 8 节讲它独立后几乎没变。

它是一张**精确到肤色**的等级表，按欧洲、印第安、非洲血统的不同组合给人排序：
顶 peninsular → criollo → mestizo（印欧混血）/ mulato（黑白混血）→ 最底是印第安人和被奴役的非洲人。
你出生那一刻的肤色和血统，基本写好了你能做什么工、交多少税、坐不坐得上官位、法庭上算不算个人。

**最关键、也最容易答错的考点**（故事里那句点睛我记下来了）：
这场革命**推翻了这张表的塔尖（peninsular 压 criollo），却没有推翻这张表本身**——
换了塔尖，留了塔身。casta 在法律上松动一点，可底层的实际处境大体没变，
有些地方奴役制还延续了几十年（如委内瑞拉、秘鲁迟至 1850s 才废奴）。

DBQ 爱用它逼你分析"理念（自由平等）vs 实践（底层秩序延续）"的张力。`,
          en: `Casta's Lens Node 2 is specifically about this chart, and Node 8 shows it barely
changed after independence.

It was a chart **precise down to skin color**, sorting people by their mix of European,
Indian, and African blood: top peninsulares → criollos → mestizos (Indian-European) / mulatos
(Black-white) → at the very bottom, Indians and enslaved Africans. The color and bloodline you
were born with mostly wrote your whole life: what work you could do, how much tax you paid,
whether you could hold office, whether you counted as a person in court.

**The most crucial, most-missed exam point** (I wrote down the story's clinching line):
this revolution **toppled the tip of the chart (peninsulares over criollos) but did not topple
the chart itself** — it changed the tip and kept the body. Casta loosened a little in law, but
the bottom's real situation barely moved, and slavery dragged on for decades in some places
(Venezuela and Peru didn't abolish it until the 1850s).

DBQs love using it to force the tension between idea (freedom and equality) and practice
(the bottom's order continuing).`,
      },
    },

    {
      id: 'junta-loyalty-irony',
      termCn: 'junta 与「忠君」反讽',
      termEn: 'The Junta & the Irony of "Loyalty to the King"',
      standardRef: ['AP World Unit 5.2', 'CA HSS-10 World History'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'bolivar-actor',
        nodeIds: ['lat-bolivar-n4'],
      },
      xiaoweiNote: {
          cn: `Bolívar 那一遍第 4 节就是这个反讽，我觉得是全课最妙的一处。

1810 年起，各地 criollo 精英纷纷成立一种叫 **junta（胡塔，自治委员会）** 的东西，
打的旗号特别"忠君"："我们替被法国人抓走的国王，先看守地方。"

可这件"忠君"的外衣下面，藏着一个一旦想出来就收不回的念头——
**自己当家做主的滋味。** 一旦尝到不用等西班牙派人、我们自己就能管这片地，就回不去了。

考点关键句（误区陷阱）：误"独立运动一开始就是要脱离西班牙" →
正"1810 年 junta 最初是**效忠王室、替国王看家**；彻底独立是一步步长出来的，不是一开始就定好的目标"。
一场以"忠君"开场的运动，最后以"共和"收场。这正是 AP 爱考的"连续与变化"的好例子。`,
          en: `Bolívar's Lens Node 4 is this irony, which I think is the cleverest spot in the
whole topic.

From 1810, criollo elites everywhere formed something called a **junta** (a self-governing
committee), raising a very "loyal" banner: "We'll guard the region for the king the French
captured."

But under that coat of "loyalty" hid a thought that, once thought, could never be taken back:
**the taste of running things yourself.** Once you taste that you don't have to wait for Spain
to send someone — you can govern this land yourselves — there's no going back.

Key exam sentence (trap to avoid): Misconception: "the independence movement aimed to leave
Spain from the start" → Correction: "in 1810 the juntas were **loyal to the crown, guarding
the region for the king**; full independence grew out step by step, it wasn't the goal from
the start." A movement that opened with "loyalty to the king" ended in "republic." A great AP
continuity-and-change example.`,
      },
    },

    {
      id: 'two-liberators-andes-guayaquil',
      termCn: '南北两路解放者与 Guayaquil 交接',
      termEn: 'Two Liberators & the Guayaquil Handover',
      standardRef: ['AP World Unit 5.3', 'CA HSS-10 World History'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'sanmartin-mediator',
        nodeIds: ['lat-sanmartin-n4', 'lat-sanmartin-n5', 'lat-sanmartin-n8'],
      },
      xiaoweiNote: {
          cn: `San Martín 那一遍整条线就是这个。最该纠正的误区是"玻利瓦尔一个人解放了整个南美"。

正确的是**南北两路并进**：
- **北方**：Bolívar 从委内瑞拉打起，1819 Boyacá → 1821 Carabobo → 建 Gran Colombia。
- **南方**：San Martín 1817 率约四千人翻越终年积雪的安第斯山，奇袭解放智利，再北上打秘鲁。

两人注定在中间相遇。**1822 年 Guayaquil 秘密会面**后，San Martín 选择退出，
把军队和整个南方战场交给 Bolívar，自己远走欧洲。1824 Ayacucho 决战由 Bolívar 部将 **Sucre** 指挥，
击垮西班牙主力，南美大陆解放收尾。

考点关键句：这是**多人、多路、十几年**的战争（Bolívar、San Martín、Sucre、Hidalgo + 无数底层士兵），
不是一个英雄的独角戏。Guayaquil 会面内容**至今无完整档案、众说纷纭**——
别把某一种动机解读当成确证事实。`,
          en: `San Martín's whole Lens is about this. The big misconception to correct is "Bolívar
alone freed all of South America."

The truth is **two fronts advancing**:
- **North**: Bolívar started from Venezuela, 1819 Boyacá → 1821 Carabobo → founded Gran Colombia.
- **South**: in 1817 San Martín led about 4,000 men across the snow-capped Andes, freed Chile
  by surprise, then went north to fight in Peru.

The two were bound to meet in the middle. After the **1822 secret Guayaquil meeting**, San Martín
chose to step aside, handed his army and the whole southern front to Bolívar, and went to Europe.
The decisive 1824 Battle of Ayacucho was commanded by Bolívar's general **Sucre**, who crushed the
main Spanish force and wrapped up mainland liberation.

Key exam sentence: this was a **many-person, multi-front, decade-plus** war (Bolívar, San Martín,
Sucre, Hidalgo, plus countless bottom soldiers), not one hero's solo act. The Guayaquil meeting's
content **has no complete record and is debated to this day** — don't treat any single motive
reading as confirmed fact.`,
      },
    },

    {
      id: 'political-vs-social-liberation',
      termCn: '政治独立 vs 社会解放（成果分配）',
      termEn: 'Political Independence vs Social Liberation (Distribution of Gains)',
      standardRef: ['AP World Unit 5.3', 'AP DBQ rubric', 'CA HSS-10 World History'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'casta-bottom-receiving-end',
        nodeIds: ['lat-casta-n8', 'lat-casta-n10'],
      },
      xiaoweiNote: {
          cn: `casta 那一遍第 8、10 节最戳人，这也是这一课**最高频、最该写好的 DBQ 考点**。

AP 反复要考的，是"独立的**成果是怎么分配的**"。把它拆成两件同时为真的事：
- **政治独立是真的**：西班牙三百年殖民统治真的结束了，"美洲人治理美洲"真的立起来了。
- **社会解放大打折扣**：领导和受益高度集中在 criollo 精英；底层（印第安人、被奴役者、混血）
  **付出最多、得到最少**，casta 秩序、贡赋、土地集中大体延续。

考点关键句（高分写法）：这不是"彻底的骗局"对"圆满的解放"，
而是**同一场革命的两面**——一场真实的政治独立 + 一场对最底层大打折扣的社会解放，同时为真。
故事里那句我记死了："换了主人，不等于翻了身。"

这就是 AP 评分要的 **complexity（复杂性）**：承认两面都站得住，别二选一。`,
          en: `Casta's Lens Nodes 8 and 10 hit hardest, and this is the topic's **highest-frequency,
most-worth-mastering DBQ point**.

What AP keeps testing is "how were the **gains distributed**?" Split it into two things that are
true at once:
- **The political independence was real**: Spain's 300 years of colonial rule truly ended, and
  "Americans govern the Americas" truly stood up.
- **The social liberation was deeply discounted**: leadership and benefit concentrated in the
  criollo elite; the bottom (Indians, the enslaved, mixed-race) **paid the most and gained the
  least**, while the casta order, tribute, and land concentration largely continued.

Key exam sentence (high-scoring move): this isn't "an utter swindle" vs "a perfect liberation,"
but **two faces of the same revolution** — a real political independence plus a deeply discounted
social liberation, both true at once. The story line I burned in: "changing masters is not the
same as rising up."

This is exactly the **complexity** AP scoring rewards: grant that both sides stand, don't pick one.`,
      },
    },

    {
      id: 'atlantic-revolutions-chain',
      termCn: '大西洋革命链与海地对照',
      termEn: 'The Atlantic Revolutions Chain & the Haiti Contrast',
      standardRef: ['AP World Unit 5.2-5.3', 'AP comparison rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'bolivar-actor',
        nodeIds: ['lat-bolivar-n8'],
      },
      xiaoweiNote: {
          cn: `Bolívar 那一遍第 8 节把这条链子说全了：**美国 1776 → 法国 1789 → 海地 1791（革命爆发）
→ 拉美 1810-1826**。拉美是这条链上**最后、也是规模最大**的一环。

AP 最爱拿它出**比较题（comparison）**，尤其是**拉美 vs 海地**：
- **海地（1804 建国）**：由**被奴役者自己**打赢、自己建国、**彻底废奴**——社会被掀到底。
- **拉美（1810-1826）**：由 **criollo 精英主导**，底层种族/劳动秩序**大体延续**。

同在一条革命链上，"**谁领导、解放到多深**"天差地别。这是绝佳的跨 topic 对照。

记忆锚：海地是"底层翻身建国"，拉美是"本地精英换塔尖"。
（小提醒：海地写 1791 是革命爆发年，1804 才是建国/废奴年，别写混。）`,
          en: `Bolívar's Lens Node 8 lays out the full chain: **America 1776 → France 1789 → Haiti
1791 (revolution breaks out) → Latin America 1810-1826**. Latin America is the **last and largest**
link.

AP loves it for **comparison questions**, especially **Latin America vs Haiti**:
- **Haiti (founded 1804)**: won and founded by the **enslaved themselves**, with **full abolition**
  — society overturned to the bottom.
- **Latin America (1810-1826)**: **led by the criollo elite**, with the bottom's racial/labor order
  **largely continuing**.

On the same revolutionary chain, "**who led and how deep the liberation went**" differs enormously.
A great cross-topic contrast.

Memory anchor: Haiti is "the bottom rises and founds a nation"; Latin America is "local elites swap
the tip of the pyramid." (Tip: for Haiti, 1791 is when the revolution broke out, 1804 is founding /
abolition — don't mix them.)`,
      },
    },

    {
      id: 'grito-de-dolores-hidalgo',
      termCn: '墨西哥的另一条路：Grito de Dolores',
      termEn: "Mexico's Other Path: the Grito de Dolores",
      standardRef: ['AP World Unit 5.2-5.3', 'CA HSS-10 World History'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
      },
      standaloneText: {
        cn: `三个故事都聚焦**南美**（Bolívar / San Martín / casta 士兵），墨西哥这条线没单独展开，
但 AP 课纲里它是个重要对照，要单独掌握。

**1810 年 9 月 16 日**，墨西哥神父 **Miguel Hidalgo（伊达尔戈）** 喊出
**「Grito de Dolores（多洛雷斯的呐喊）」**，发动了一场**以印第安人和混血农民为主的底层起义**。

为什么它重要？因为它和南美 criollo 主导的运动**很不一样**：
- 南美：criollo 精英领导、为夺自己的权而战，小心不让底层翻天。
- 墨西哥 Hidalgo 这一支：更像一场**社会革命**，底层农民冲在最前——
  这恰恰**吓坏了墨西哥的 criollo 精英**，他们怕的不只是西班牙，更怕底层。

Hidalgo 1811 年被西班牙处死。墨西哥最终走向独立时，反而是更保守的力量主导。

考点关键句：同样是"独立"，**墨西哥的底层起义**和**南美的精英革命**走的是两条路——
这正好印证本课核心："谁领导，决定了这场革命解放到多深。"`,
        en: `All three stories focus on **South America** (Bolívar / San Martín / the casta soldier);
the Mexican thread isn't unpacked on its own, but it's an important contrast in the AP curriculum,
so master it separately.

**On September 16, 1810**, the Mexican priest **Miguel Hidalgo** issued the **Grito de Dolores
(Cry of Dolores)**, launching an uprising **made up mainly of Indians and mixed-race peasants**
— a bottom-up revolt.

Why does it matter? Because it was **very different** from the criollo-led movements of South
America:
- South America: led by criollo elites fighting for their own power, careful not to let the bottom
  overturn things.
- Mexico's Hidalgo strand: more like a **social revolution**, with peasants from the bottom in front
  — which **frightened Mexico's own criollo elite**, who feared not just Spain but the bottom.

Hidalgo was executed by Spain in 1811. When Mexico finally reached independence, it was more
conservative forces that led the way.

Key exam sentence: even within "independence," **Mexico's bottom-up uprising** and **South America's
elite revolution** took two paths — confirming this topic's core idea: "who leads decides how deep
the liberation goes."`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里没演，我一开始没记住。老师说 AP 爱让你比"Hidalgo 的底层起义"和
"Bolívar 的精英革命"——一句话区别：**Hidalgo 是底层冲在前，Bolívar 是精英坐在上面。**
记忆锚：Grito de Dolores = "多洛雷斯的呐喊" = 墨西哥独立的起跑枪（1810.9.16）。`,
        en: `This card isn't acted out in the story, so I missed it at first. Teacher said AP likes
comparing "Hidalgo's bottom-up uprising" with "Bolívar's elite revolution" — one-line difference:
**Hidalgo had the bottom in front; Bolívar had the elite on top.** Memory anchor: Grito de Dolores
= "Cry of Dolores" = the starting gun of Mexican independence (Sept 16, 1810).`,
      },
    },

    {
      id: 'caudillo-fragmentation',
      termCn: '独立后的碎裂与考迪罗政治',
      termEn: 'Post-Independence Fragmentation & Caudillo Politics',
      standardRef: ['AP World Unit 5.3', 'CA HSS-10 World History'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'bolivar-actor',
        nodeIds: ['lat-bolivar-n9'],
      },
      xiaoweiNote: {
          cn: `Bolívar 那一遍第 9 节最痛的部分就是这个：**赢了独立，赢不来团结。**

两道缝把大陆撑碎了：
1. **地理**：安第斯山脉 + 草原 + 雨林把大陆切成互不相通的区域——能用军队翻过山，
   却没法把山两边的人心缝在一起。这是"碎裂"的**结构性物理根源之一**。
2. **人**：仗一打完，各地冒出 **caudillo（考迪罗）**——靠军队和个人威望上位的强人，
   用**枪杆子而不是制度**填补西班牙国王留下的权力真空。今天这个上、明天那个下。

后果：Bolívar 梦想的统一大国 **Gran Colombia 1830 年解体**，裂成委内瑞拉、厄瓜多尔、新格拉纳达。
Bolívar 本人 1830 年贫病交加而死，临终叹"美洲无法被我们治理"。

考点关键句（误区陷阱）：误"独立后拉美就自由民主了" →
正"紧接着是长期的政治碎裂 + caudillo 强人政治，动荡持续了一两个世纪"。
也可对位北美：为什么十三州能拼成一个联邦，西属美洲却碎成一堆？（地理、殖民结构、精英团结度的差异）`,
          en: `The most painful part of Bolívar's Lens Node 9 is this: **independence was won, unity
was not.**

Two cracks broke the continent apart:
1. **Geography**: the Andes plus grasslands and rainforest cut the continent into isolated regions
   — you could cross the mountain with an army, but you couldn't sew the hearts on its two sides
   together. This is **one of the structural physical roots** of fragmentation.
2. **People**: the moment the war ended, **caudillos** rose everywhere — strongmen who took power by
   army and personal prestige, filling the vacuum the Spanish king left with **the gun, not
   institutions.** This one up today, that one tomorrow.

Result: Bolívar's dream nation **Gran Colombia dissolved in 1830** into Venezuela, Ecuador, and New
Granada. Bolívar himself died poor and sick in 1830, lamenting "America is ungovernable by us."

Key exam sentence (trap to avoid): Misconception: "after independence Latin America became free and
democratic" → Correction: "it was followed by long political fragmentation plus caudillo strongman
politics, with instability lasting a century or two." You can also contrast North America: why did
the thirteen colonies form one federation while Spanish America shattered? (Differences in geography,
colonial structure, and elite cohesion.)`,
      },
    },

    {
      id: 'why-fragmented-vs-north-america',
      termCn: '为什么北美成联邦、拉美碎成一堆？',
      termEn: 'Why North America United but Latin America Fragmented',
      standardRef: ['AP World Unit 5.3', 'AP comparison rubric', 'CA HSS-10 World History'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
      },
      standaloneText: {
        cn: `这是 AP **比较题**爱出的一道，故事里只在 Bolívar 临终的绝望里暗示过，没系统讲，单独掌握。

**问题**：同在大西洋革命链上，北美十三州独立后拼成了一个**联邦（美利坚合众国）**，
西属美洲独立后却碎成一堆**互相打仗的小国**。为什么？

三条主流解释（结构/地理派 + 精英团结度）：
1. **地理**：北美东海岸十三州沿海相连、交通便利；西属美洲被**安第斯山脉、草原、雨林**切割，
   各区域几百年互不相通——拼成大国的物理成本太高。
2. **殖民行政结构**：西班牙把美洲分成几个独立的**总督辖区（Viceroyalty）**，
   各自对西班牙负责、彼此横向联系弱；国王一倒，没有现成的"共同身份"把它们粘在一起。
3. **精英团结度**：北美十三州精英有相对共享的政治传统（议会、自治经验）；
   西属美洲 criollo 之间地方利益分歧大，加上 caudillo 强人各占山头。

考点关键句：拉美独立后的碎裂**不只是"人不团结"，更由地理和殖民结构决定**——
Bolívar 自己在《牙买加来信》里就预言过"美洲很难像北美那样团结"。`,
        en: `This is a favorite AP **comparison question**, only hinted at in Bolívar's dying despair
in the story, never laid out systematically — so master it separately.

**The question**: on the same Atlantic revolutionary chain, the thirteen North American colonies
united into a **federation (the United States)** after independence, while Spanish America shattered
into a cluster of **warring small nations**. Why?

Three mainstream explanations (structural/geographic + elite cohesion):
1. **Geography**: the thirteen colonies hugged a connected eastern seaboard with easy travel; Spanish
   America was cut by the **Andes, grasslands, and rainforest** into regions isolated for centuries —
   the physical cost of forming one nation was too high.
2. **Colonial administrative structure**: Spain split the Americas into several separate
   **Viceroyalties**, each answering to Spain with weak ties to each other; when the king fell, there
   was no ready-made "shared identity" to glue them together.
3. **Elite cohesion**: the North American colonial elites shared relatively common political
   traditions (assemblies, self-government experience); Spanish America's criollos diverged sharply by
   regional interest, and caudillo strongmen each held their own turf.

Key exam sentence: Latin America's post-independence fragmentation was **not just "people failing to
unite" but also fixed by geography and colonial structure** — Bolívar himself predicted in the Letter
from Jamaica that "America would find it hard to unite the way North America did."`,
      },
      xiaoweiNote: {
        cn: `老师说这道比较题答得好的关键，是别只说"拉美人不团结"（太空），
要落到**地理（安第斯切割）+ 殖民结构（分成几个总督辖区）+ 精英分歧**三条结构因素。
记忆锚：北美"沿海相连 + 共享议会传统" vs 拉美"高山切割 + 分裂的总督辖区"。`,
        en: `Teacher said the key to scoring this comparison is not to just say "Latin Americans failed
to unite" (too vague) but to land on three structural factors: **geography (the Andes cutting things
apart) + colonial structure (split into several Viceroyalties) + elite divergence.** Memory anchor:
North America "connected seaboard + shared assembly traditions" vs Latin America "high mountains +
fragmented Viceroyalties."`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `打仗时，criollo 军官对底层士兵喊的是「自由」「平等」「不再受压迫」。
可独立赢了，掌权的只是从在西班牙出生的白人，换成了在美洲出生的白人；casta 表还在，
底层还在最底层。

站在那个没名字的底层士兵的位置，你觉得这场独立应该被看成「一场骗局」，
还是「一块虽然门没全开、但毕竟推开一道缝的地基」？用至少两条具体证据支持你的判断。`,
      en: `During the war, criollo officers shouted "freedom," "equality," "no more oppression" to the
bottom soldiers. But once independence was won, the people in power had merely changed from whites
born in Spain to whites born in the Americas; the casta chart remained, and the bottom stayed at the
bottom.

Standing in that nameless bottom soldier's place, should this independence be seen as "a swindle," or
as "a foundation whose door didn't open fully but was, after all, pushed open a crack"? Support your
judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "骗局"这边的证据：casta 秩序延续、贡赋照旧、部分地区奴役制延续到 1850s、领导与受益集中在 criollo。
- "地基"这边的证据：西班牙三百年殖民统治真的结束、"美洲人治理美洲"立起来、
  后来的废奴和争平权是踩着这块政治独立的地基才走下去的。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which
side you pick.
- Evidence for "a swindle": the casta order continued, tribute went on, slavery lasted into the 1850s
  in some places, leadership and benefit concentrated in the criollos.
- Evidence for "a foundation": Spain's 300-year colonial rule truly ended, "Americans govern the
  Americas" stood up, and later abolition and equal-rights struggles could only proceed by standing on
  this political-independence foundation.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['casta-system', 'political-vs-social-liberation'],
    },
    {
      id: 'q2',
      cn: `1822 年在 Guayaquil 会面后，San Martín 选择交出兵权、远走他乡，没有去争「最大解放者」的名分，
也没有发动解放者打解放者的内战。可他退让之后，大陆照样碎了，他想要的团结也没换来。

如果你是 AP 老师，要出一道题考「这一退是软弱，还是一种罕见的清醒」，你会怎么提问？
请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `After the 1822 Guayaquil meeting, San Martín chose to hand over his command and go far away,
not contending for the title of "greatest liberator," nor starting a civil war of liberator against
liberator. Yet after he yielded, the continent shattered all the same, and the unity he wanted never
came.

If you were an AP teacher writing a question on "was this stepping-aside weakness, or a rare clarity,"
how would you phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常逼学生**同时看见两件事**，而不是二选一。
- "软弱"这边：他打到家门口、手里有军队和威望，本可以争，却退走了，结果什么都没改变。
- "清醒"这边：他看清了大陆的离散是地理 + 三百年殖民结构定死的，退让至少避免了解放者互相残杀。
你的题目可以让学生比较"按住自己想再赢一场的野心"和"战斗到最后"——
为什么前者可能是更难的胜利？也别忘了 Guayaquil 会谈内容史料不确定，动机众说纷纭，别当确证事实。`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
- The "weakness" side: he had fought to the gate, with an army and prestige in hand and could have
  contended, yet withdrew, and nothing changed in the end.
- The "clarity" side: he saw that the continent's scattering was fixed by geography and 300 years of
  colonial structure, and his yielding at least avoided liberators slaughtering each other.
Your question could have students compare "holding back your own urge to win one more time" with
"fighting to the end" — why might the former be the harder victory? And remember the Guayaquil content
is historically uncertain and his motives are debated, so don't treat any one reading as confirmed fact.`,
      conceptsActivated: ['two-liberators-andes-guayaquil', 'political-vs-social-liberation'],
    },
    {
      id: 'q3',
      cn: `拉美独立的「催化—领导—受益」三段拆解里：**点火的是外部意外**（1808 拿破仑入侵造成的权力真空），
**领导和受益的是 criollo 精英**，**付出最多却受益最少的是 casta 底层**。

你同意「一场革命的'催化''领导''受益'常常不是同一批人」这个说法吗？
用拉美这一课里的一个具体环节（或对位海地）来支持你的看法。`,
      en: `In Latin American independence's "catalyst–leadership–beneficiary" breakdown: **the spark was
an external accident** (the power vacuum from Napoleon's 1808 invasion), **the leaders and
beneficiaries were the criollo elite**, and **the ones who paid the most but gained the least were the
casta bottom.**

Do you agree with the idea that "a revolution's 'catalyst,' 'leadership,' and 'beneficiaries' are often
not the same people"? Support your view with one specific element from this Latin America topic (or a
contrast with Haiti).`,
      hintCn: `提示：先把三段分清——催化（拿破仑入侵，外部）/ 领导（criollo）/ 受益（criollo）/
付出最多受益最少（casta 底层、印第安人）。
具体环节可以举：底层士兵替军官在 Boyacá、Ayacucho 流血，仗打完自己还在交贡赋。
对位海地更有力：海地的"领导"和"受益"基本是同一批人（被奴役者自己），拉美却高度错位。
AP 看的是你能不能用一个真实环节把抽象论点"钉"在证据上。`,
      hintEn: `Hint: first separate the three stages — catalyst (Napoleon's invasion, external) /
leadership (criollos) / beneficiaries (criollos) / paid the most and gained the least (the casta bottom,
Indians).
For a specific element, try: bottom soldiers bled for the officers at Boyacá and Ayacucho, then went
back to paying tribute after the war. A Haiti contrast is even stronger: in Haiti, the "leaders" and
"beneficiaries" were basically the same people (the enslaved themselves), while in Latin America they
were sharply mismatched. AP wants you to "pin" the abstract claim to evidence with one real element.`,
      conceptsActivated: ['catalyst-napoleon-invasion', 'political-vs-social-liberation', 'atlantic-revolutions-chain'],
    },
  ],
};

export default notebook;
