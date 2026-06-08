// ─── 同伴笔记本架构 v1 · Reconstruction & Its Betrayal 1865-1877 ──────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点 (Andrew Johnson / Hiram Revels / 佃农 composite 三条线)
//   - notebook 提供考点闭环 (13/14/15 修正案 / Freedmen's Bureau / Black Codes /
//     sharecropping / Radical Reconstruction / Compromise of 1877 / Jim Crow / 失败 historiography)
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 5-6 (CED Topic 5.10 Reconstruction → 6.x Jim Crow / disfranchisement)
//   - AP US Government & Politics（14th Amendment Equal Protection Clause 必考核心）
//   - California HSS 8.11（内战与重建 / Reconstruction Amendments / Black Codes / Jim Crow 起源）
//
// Rule 0（双边平衡）：重建既是"自由扩张"高峰，也是"进步被强行收回"最清晰反例——两者同体不下结论。
//   归责 Johnson 的因果框架在卡片里始终配上"宪法平衡守护者"那一边（呼应 aj-n11 双边 synthesis）。
// Cultural ban：全程美国/英语真实术语，绝不用中国特定词。
// 事实对账本：reconstruction-1877-factledger.md —— Revels 接的是 Jefferson Davis 留下的"参议员任期"
//   （非"席位"；实际就任时坐 A.G.Brown 空出的席位），本文件按已修订口径写"任期"。
//
// schemaVersion: 1 · notebookVersion: reconstruction-1877-v1

export var notebook = {
  topicId: 'reconstruction-1877',
  topicNameCn: '重建与背叛 1865-1877',
  topicNameEn: 'Reconstruction & Its Betrayal 1865-1877',
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
    cn: `今天老师讲 Reconstruction（重建，1865-1877）。她说 APUSH 和 AP Gov 都爱考这段，让我们先把这张单子记下来，读故事之前心里有个框。

人物：Andrew Johnson（约翰逊）、Hiram Revels（里弗斯）、还有一个没名字的黑人佃农（老师说他代表几百万真实存在却没留下名字的人）。

术语一大串：13th / 14th / 15th Amendment（三条重建修正案）、Freedmen's Bureau（自由民局）、Black Codes（黑人法令）、sharecropping（分成租佃）、Radical Reconstruction（激进重建）、Compromise of 1877（1877 年妥协）、Jim Crow（吉姆·克劳）。

老师在白板上写了一句话，让我抄到笔记第一页："宪法白纸黑字写下'平等保护'、'不得因肤色剥夺投票权'，可这些权利被一只手一只手按了回去，真正兑现等了近一百年。" 这段历史的核心就是——**纸面上的权利和现实里的剥夺差多远**。

她还特别提醒："别背成'内战之后一切都向好'——那是偷懒。重建既是自由扩张的高峰，也是进步被强行收回的反例，两边都要会写。"

我先记下来，等下读三个故事——Johnson、Revels、佃农——读完再回来对照这张单子。`,
    en: `Today my teacher taught Reconstruction (1865-1877). She said both APUSH and AP Gov love testing this period, so write the list down before reading the stories.

People: Andrew Johnson, Hiram Revels, and an unnamed Black sharecropper (teacher said he stands for millions of real people who left no name behind).

A big pile of terms: 13th / 14th / 15th Amendments (the three Reconstruction Amendments), Freedmen's Bureau, Black Codes, sharecropping, Radical Reconstruction, Compromise of 1877, Jim Crow.

She wrote one line on the board and told us to copy it onto page one: "The Constitution wrote down 'equal protection' and 'the vote shall not be denied on account of color,' yet those rights were pressed back down one hand at a time, and it took nearly a hundred years to truly cash them." The heart of this period is — **how far apart rights on paper and rights in reality can be**.

She also warned us: "Don't memorize it as 'everything got better after the war' — that's the lazy version. Reconstruction was both the peak of expanding freedom AND the clearest example of progress forcibly pulled back. You have to be able to write both sides."

Let me write these down. After I read the three stories — Johnson, Revels, the sharecropper — I'll come back and check this list.`,
    keyTerms: [
      { cn: '重建', en: 'Reconstruction' },
      { cn: '平等保护（第十四修正案核心条款）', en: 'equal protection (14th Amendment)' },
      { cn: '黑人法令', en: 'Black Codes' },
      { cn: '自由民局', en: "Freedmen's Bureau" },
      { cn: '分成租佃', en: 'sharecropping' },
      { cn: '激进重建', en: 'Radical Reconstruction' },
      { cn: '1877 年妥协', en: 'Compromise of 1877' },
      { cn: '吉姆·克劳（隔离 + 剥夺投票权）', en: 'Jim Crow' },
      { cn: '识字测验 / 人头税', en: 'literacy test / poll tax' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '安德鲁·约翰逊',
        nameEn: 'Andrew Johnson',
        ipa: '/ˈændruː ˈdʒɒnsən/',
        roleCn: '林肯遇刺后接任的总统，逆转重建、为南方白人复权松闸门；1868 差一票免于弹劾去职',
        roleEn: '17th president after Lincoln; reversed Reconstruction, impeached in 1868 and acquitted by one vote',
        mustKnow: true,
        audioKey: 'andrew-johnson',
      },
      {
        nameCn: '海勒姆·里弗斯',
        nameEn: 'Hiram Revels',
        ipa: '/ˈhaɪrəm ˈrɛvəlz/',
        roleCn: '首位非裔美国参议员（1870，密西西比），生来自由，走温和路线',
        roleEn: 'First African American U.S. senator (1870, Mississippi), born free, took a moderate path',
        mustKnow: true,
        audioKey: 'hiram-revels',
      },
      {
        nameCn: '一个获自由的黑人佃农（合成人物）',
        nameEn: 'A Freedman Sharecropper (composite)',
        ipa: null,
        roleCn: '代表千千万万没留下名字的南方黑人：1865 获自由、1867 首次投票，十年后被债务与识字测验按回最底下',
        roleEn: 'Composite for the millions of unnamed southern Black people: freed 1865, voted 1867, pushed back down by debt and literacy tests',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '激进共和党人',
        nameEn: 'Radical Republicans',
        ipa: '/ˈrædɪkəl rɪˈpʌblɪkənz/',
        roleCn: '国会里推动黑人平等权利的一派，推翻 Johnson 否决、主导激进重建',
        roleEn: 'Congressional faction pushing Black equal rights; overrode Johnson and led Radical Reconstruction',
        mustKnow: true,
        audioKey: 'radical-republicans',
      },
      {
        nameCn: '弗雷德里克·道格拉斯',
        nameEn: 'Frederick Douglass',
        ipa: '/ˈfrɛdrɪk ˈdʌɡləs/',
        roleCn: '逃奴出身、自学成才的废奴/民权领袖，比 Revels 路线更激烈',
        roleEn: 'Formerly enslaved, self-taught abolitionist and civil rights leader, took a fiercer path than Revels',
        mustKnow: true,
        audioKey: 'frederick-douglass',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：三条重建修正案（13/14/15）── 故事覆盖型
    {
      id: 'reconstruction-amendments',
      termCn: '13 / 14 / 15 修正案',
      termEn: 'The Reconstruction Amendments (13th / 14th / 15th)',
      defCn: '内战后通过的三条修正案：13th（1865）废除奴隶制，14th（1868）给黑人公民身份和法律平等保护，15th（1870）保障投票权不因种族被剥夺。它们是重建时期最重要的法律成果。',
      defEn: 'Three amendments passed after the Civil War: the 13th (1865) abolished slavery, the 14th (1868) gave Black people citizenship and equal legal protection, and the 15th (1870) guaranteed the vote could not be denied because of race. Together they are the most important legal achievements of Reconstruction.',
      standardRef: ['APUSH KC-5.3', 'AP Gov 14th Amendment (Equal Protection)', 'CA HSS 8.11'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['aj-n6', 'hr-n3', 'hr-n6', 'fs-n6'],
        xiaoweiNote: {
          cn: `这三条在三个故事里反复出现，是这整门课的骨架，老师说必背：

- **13th（1865）废除奴隶制** — 四百万人一夜法律自由。
- **14th（1868）公民身份 + "法律的平等保护"（equal protection of the laws）** — AP Gov 把这一条当核心，它后来是 Brown v. Board 等民权判例的法律地基。
- **15th（1870）投票权不得因种族、肤色剥夺**。

我的记忆口诀：**自由（13）→ 平等（14）→ 选票（15）**，顺着数就行。

但这一课的真正考点不是背年份，是三个故事都点破的那句话：**"写在纸上"不等于"现实里做到"**。

①Johnson 不派军队（在 Johnson 那条故事线里），同一条修正案就被掏空。②Revels 在参议院攥着它，却拦不住千里外黑人因投票被打死（Revels 那条故事线里）。③佃农那里，"投票的权利"变成了"还不完的债"和"不敢再去的投票站"（佃农那条故事线里）。

跨主题的一个类比：三个故事都把它和 Magna Carta Clause 39 对比 — 那条文写"任何自由人"，实际上只算贵族。普世措辞 vs 真正受益的人，是同一个老把戏。`,
          en: `These three show up over and over in all three stories — they're the skeleton of the whole topic, and teacher said memorize them:

- **13th (1865) abolished slavery** — four million people legally free overnight.
- **14th (1868) citizenship + "equal protection of the laws"** — AP Gov treats this as the core; it later became the legal foundation for Brown v. Board and other civil rights cases.
- **15th (1870) the vote shall not be denied on account of race or color.**

My mnemonic: **freedom (13) → equality (14) → ballot (15)** — just count up.

But the real exam point isn't the years — it's the line all three stories drive home: **"written on paper" does not equal "done in reality."**

① Johnson sends no troops (in Johnson's story line), and the same amendment is hollowed out. ② Revels holds it in the Senate yet cannot stop a Black man a thousand miles away being beaten to death for voting (in Revels's story line). ③ For the sharecropper, "the right to vote" turns into "a debt I can't pay" and "polls I dare not go to" (in the sharecropper's story line).

A cross-topic parallel: all three stories map this onto Magna Carta Clause 39 — it wrote "no free man," but really only meant nobles. Universal wording vs. who actually benefits is the same old trick.`,
        },
      },
    },

    // ── 卡 2：Freedmen's Bureau ── 故事覆盖型
    {
      id: 'freedmens-bureau',
      termCn: '自由民局',
      termEn: "Freedmen's Bureau",
      defCn: '1865 年联邦政府设立的机构，专门帮刚获自由的人过渡。它办学校、帮人签劳动合同、发放口粮，是重建期联邦"主动出手"的标志。1872 年被撤销，只存在了约七年。',
      defEn: 'A federal agency created in 1865 to help the newly freed get on their feet. It opened schools, helped people sign labor contracts, and handed out food rations — the clearest sign that the federal government was actively stepping in during Reconstruction. It was shut down in 1872 after about seven years.',
      standardRef: ['APUSH KC-5.3.I', 'CA HSS 8.11'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'freedman-sharecropper',
        nodeIds: ['fs-n2'],
        xiaoweiNote: {
          cn: `佃农那条故事线里讲到了它。它的全名是 Freedmen's Bureau（自由民局），1865 年由联邦政府设立，是头一个专门帮刚获自由的人过渡的机构。

它具体做三件事，考试爱让你举例：
① **办学校教黑人认字**（教育是它最持久的遗产）
② **帮黑人和雇主签劳动合同**（想保护他们别被坑）
③ **发口粮、提供基本救济**

佃农说："那是我头一回，感觉这个国家好像真的想拉我们一把。"

考点关键句：Freedmen's Bureau 是重建期联邦"积极介入"的标志，可它资源有限，1872 年就被撤销了。它的短命正好说明了一件事——北方对长期帮南方黑人"没耐心"。

两边都要写：它确实办成了不少黑人学校，这是真实成就；但它分不了多少地、撑不了多久——别把它写成"重建解决了黑人的生计问题"。`,
          en: `The sharecropper's story line covers it. Its full name is the Freedmen's Bureau, set up by the federal government in 1865 — the first agency made specifically to help the newly freed transition.

It did three concrete things, and exams love asking for examples:
① **Founded schools to teach Black people to read** (education was its most lasting legacy)
② **Helped Black people sign labor contracts with employers** (to protect them from being cheated)
③ **Handed out food rations and basic relief**

The sharecropper says: "It was the first time I felt this country might truly mean to lend us a hand."

Key exam sentence: the Freedmen's Bureau marks federal "active intervention" during Reconstruction, but it was under-resourced and was shut down in 1872. Its short life shows one thing clearly — the North had little patience for helping southern Black people long-term.

Write both sides: it really did establish many Black schools — that's a genuine achievement. But it couldn't distribute much land or last very long — don't write it up as "Reconstruction solved Black people's livelihoods."`,
        },
      },
    },

    // ── 卡 3：Black Codes ── 故事覆盖型
    {
      id: 'black-codes',
      termCn: '黑人法令',
      termEn: 'Black Codes',
      defCn: '1865-1866 年南方各州通过的一批法律，专门限制刚获自由的黑人。它们禁止黑人随便换工作、没有"正当职业"就强制苦役，实质上是把刚废掉的奴隶制换了个名字搬回来。',
      defEn: 'Laws passed by southern states in 1865-1866 that specifically restricted the newly freed Black population. They blocked Black people from freely changing jobs and forced those without a "proper occupation" into hard labor — in effect, bringing back slavery under a new name.',
      standardRef: ['APUSH KC-5.3.I.B', 'CA HSS 8.11'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'andrew-johnson',
        nodeIds: ['aj-n4'],
        xiaoweiNote: {
          cn: `Johnson 那条故事线里讲得最清楚。1865 下半年，被 Johnson 赦免的南方旧势力回州掌权，立刻通过一批专门管黑人的法律 — Black Codes（黑人法令）。密西西比是头一个，成了别州的样板。

它们写得很"讲究"，但本质是把刚废掉的奴隶制换个名字搬回来：
① 黑人不能随便换工作（要出示劳动合同，中途走罚没工资）
② 没有"正当职业"就以**游荡罪（vagrancy）**抓去做强制苦役
③ 不能持枪、不能在某些地方租地

考点关键句：**Black Codes = 奴隶制换名复活**，是 13th Amendment 废奴后南方的第一波反扑，直接逼出了 1866 Civil Rights Act 和 14th Amendment（国会要堵这个洞）。

两边都要写：Johnson 手里有权踩刹车——可以否决、派军队、宣布那些州政府不合法——但他选择睁一只眼闭一只眼。这正好引出这一课的核心问题（见下面思考题 1）："有权阻止错事却袖手旁观，算不算共犯？"`,
          en: `Johnson's story line explains this most clearly. In the second half of 1865, the old southern power Johnson had pardoned returned to office and at once passed a batch of laws aimed at Black people — the Black Codes. Mississippi was first and became the template for other states.

They were written carefully, but in essence they snuck the just-abolished slavery back under a new name:
① Black people couldn't freely change jobs (had to show a labor contract; leaving early forfeited wages)
② Without a "proper occupation," seized for forced labor under **vagrancy** charges
③ Couldn't carry guns, couldn't rent land in certain places

Key exam sentence: **Black Codes = slavery revived under a new name** — the first southern backlash after the 13th Amendment abolished slavery, which directly forced the 1866 Civil Rights Act and the 14th Amendment (Congress moving to plug the hole).

Write both sides: Johnson had the power to hit the brakes — to veto, send troops, declare those state governments unlawful — but he chose to look the other way. That sets up this topic's core question (see Thinking Question 1 below): "Is a person who can stop a wrong but stands by an accomplice?"`,
        },
      },
    },

    // ── 卡 4：Radical Reconstruction + Civil Rights Act 1866 + 弹劾 ── 故事覆盖型
    {
      id: 'radical-reconstruction',
      termCn: '激进重建（含 1866 民权法案 + 弹劾 + 1867 重建法案）',
      termEn: 'Radical Reconstruction (Civil Rights Act 1866, Impeachment, Reconstruction Acts 1867)',
      defCn: 'Radical Republicans（激进共和党人）从 1866 年起主导的重建阶段。他们推翻了总统 Johnson 的否决，把南方置于军事管制下，让黑人男性大批投票，并在 1868 年弹劾了 Johnson。这是美国史上国会和总统对"重建该往哪走"权力争夺最激烈的时期。',
      defEn: 'The phase of Reconstruction led by the Radical Republicans starting in 1866. They overrode President Johnson\'s vetoes, put the South under military rule, enabled Black men to vote in large numbers, and impeached Johnson in 1868. This was the most intense power struggle between Congress and the president over the direction of Reconstruction in U.S. history.',
      standardRef: ['APUSH KC-5.3.I', 'AP Gov separation of powers / checks', 'CA HSS 8.11'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'andrew-johnson',
        nodeIds: ['aj-n5', 'aj-n7', 'aj-n8'],
        xiaoweiNote: {
          cn: `Johnson 那条故事线把"总统 vs 国会"这场仗讲透了。"激进重建"就是 Radical Republicans（激进共和党人）从 Johnson 手里抢过方向盘、用国会力量强推黑人权利的那几年。

三个必考节点：
① **1866 Civil Rights Act**：给黑人公民身份和法律保护。Johnson 否决（veto），国会凑三分之二票**推翻否决（override）**。这是美国史上**头一回**国会推翻总统对一部重要法律的否决。（AP Gov 角度：这是 checks and balances 的活教材。）
② **1867 Reconstruction Acts**：把南方置于军事重建之下，黑人男性首次大批投票。
③ **1868 弹劾（impeachment）**：Johnson 撤换陆军部长 Stanton，触犯了《任期法》（Tenure of Office Act）。众议院弹劾他（**首位被弹劾的总统**），参议院审判**差一票**没够三分之二，脱罪。

考点关键句：弹劾的法律由头是撤 Stanton，**不是腐败**——这是常见错题，老师专门强调。核心冲突是总统 vs 国会对"重建该往哪走"的权力之争。

记忆口诀：**否决 → 推翻 → 弹劾 → 差一票**，一条线串起总统和国会的全面开战。`,
          en: `Johnson's story line lays out the "president vs Congress" fight fully. "Radical Reconstruction" is those years when the Radical Republicans wrested the steering wheel from Johnson and used congressional power to push Black rights forward.

Three must-know points:
① **1866 Civil Rights Act**: gave Black people citizenship and legal protection. Johnson vetoed it; Congress mustered a two-thirds vote to **override** — the **first time** in U.S. history Congress overrode a president's veto on a major law. (AP Gov angle: a living textbook of checks and balances.)
② **1867 Reconstruction Acts**: placed the South under military reconstruction; Black men voted in large numbers for the first time.
③ **1868 impeachment**: Johnson removed Secretary of War Stanton, violating the Tenure of Office Act. The House impeached him (**first president impeached**), and the Senate trial fell **one vote** short of two-thirds — he was acquitted.

Key exam sentence: the legal trigger for impeachment was removing Stanton, **not corruption** — a common trick question that teacher stressed. The core conflict was president vs Congress over which direction Reconstruction should go.

Mnemonic: **veto → override → impeach → by one vote** — one line through the full war between president and Congress.`,
        },
      },
    },

    // ── 卡 5：sharecropping ── 故事覆盖型
    {
      id: 'sharecropping',
      termCn: '分成租佃 / 债务束缚',
      termEn: 'Sharecropping / Debt Peonage',
      defCn: '内战后南方兴起的一种耕作制度：地主出地，获自由的黑人出劳力种棉花，收成按比例分。但种子和口粮要向地主赊账，账本由地主记，年年算下来总是欠债，欠债就不能离开——法律上自由，实际上被债拴在地上，和奴隶制的人身束缚换了个形式。',
      defEn: 'A farming system that spread across the South after the Civil War: the landowner provided land, the freed Black worker provided labor to grow cotton, and they split the crop. But seed and food had to be borrowed from the owner, the owner kept the ledger, and the math always left the cropper in debt — debt meant you could not leave. Legally free, but tied to the land by debt, it was a new form of the same bondage slavery had used.',
      standardRef: ['APUSH KC-5.3.II', 'CA HSS 8.11'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'freedman-sharecropper',
        nodeIds: ['fs-n5', 'fs-n7', 'fs-n8'],
        xiaoweiNote: {
          cn: `佃农那条故事线里讲的就是这个。sharecropping（分成租佃）：地主出地，佃农出力种棉花，收成按比例分。听起来公平，可里面有个陷阱——这就是考点核心：

佃农什么都没有，种子、工具、口粮全得先向地主**赊账（crop-lien）**。账本由地主记，佃农不识字看不懂。秋天卖了棉花，地主一算账——赊的加利息比分到的还多。忙一整年反而欠债，欠债又**不能离开**（法律帮地主）。年复一年，债越滚越多。

考点关键句：sharecropping 让黑人"法律上自由、实际被债拴在地上"——**锁链从铁的变成了纸上的债**。这是历史里"延续性（Continuity）"的经典例子：法律地位剧变（奴隶 → 公民），可经济人身束缚延续（奴隶制 → sharecropping）。

跨主题类比：Black Death 之后欧洲地主立法把农民绑在土地上是同一个套路——**劳动力被压制时，上头总会发明把人拴在地上的制度**。

两边都要写：别写成"双方自愿的公平契约"——信息和权力高度不对称（地主记账、佃农文盲、债务法律绑定），实质是债务束缚。`,
          en: `The sharecropper's story line is exactly this. Sharecropping: the owner provides land, the cropper provides labor to grow cotton, and they split the crop. Sounds fair — but there's a trap, and that trap is the core exam point:

The cropper has nothing, so seed, tools, and food all have to be borrowed from the owner first on a **crop-lien**. The owner keeps the ledger; the cropper can't read it. At harvest the owner does the math — the credit plus interest comes to more than the cropper's share. A whole year's toil ends in debt, and debt means you **cannot leave** (the law sides with the owner). Year by year the debt snowballs.

Key exam sentence: sharecropping left Black people "legally free, but in fact tied to the land by debt" — **the chain changed from iron to a debt on paper.** This is the classic example of Continuity in history: legal status changed sharply (slave → citizen), but economic bondage continued (slavery → sharecropping).

Cross-topic parallel: European landowners passing laws to bind peasants to the land after the Black Death used the same playbook — **when labor is suppressed, those at the top always invent systems to tie people down.**

Write both sides: don't write it as "a fair contract both sides freely chose" — information and power were hugely unequal (owner kept the books, cropper was illiterate, debt was legally binding). In essence it was debt peonage.`,
        },
      },
    },

    // ── 卡 6：Compromise of 1877 ── 故事覆盖型（三条故事线均覆盖）
    {
      id: 'compromise-of-1877',
      termCn: '1877 年妥协',
      termEn: 'Compromise of 1877',
      defCn: '1876 年总统大选两党僵持不下，最终达成的一笔政治交易：共和党候选人 Hayes 得到总统位子，代价是撤走南方最后留下的联邦军队。军队一撤，重建就此结束，南方旧势力重夺对黑人的控制权。',
      defEn: 'A political deal made after the deadlocked 1876 presidential election: the Republican candidate Hayes got the presidency, and in exchange the last federal troops in the South were withdrawn. Once the troops left, Reconstruction was over and the old southern power regained control over Black people.',
      standardRef: ['APUSH KC-5.3.III', 'CA HSS 8.11'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['aj-n10', 'hr-n10', 'fs-n10'],
        xiaoweiNote: {
          cn: `三个故事的"重建结束"都钉在这一刻。

1876 年的总统大选（Hayes vs Tilden）僵住了，两党争得不可开交。最后他们在桌子底下做了一笔交易，史称 **Compromise of 1877**：一党（共和党 Hayes）拿到总统位子，代价是——**撤走南方最后留下的联邦军队**（剩在 FL/LA/SC 三州的驻军）。

军队一撤，**重建就结束了**。保护黑人投票和权利的最后一道屏障没了。

考点关键句：Compromise of 1877 是 APUSH 标记的**重建终点**，也是"自由扩张然后被强行收回"的转折点——它直接打开了通往 Jim Crow 的门。

记忆口诀：**Hayes 换军队**（共和党拿白宫，南方拿走军队 = 拿回对黑人的控制权）。

两边都要写：佃农那条故事线里有一句"别信内战之后一切都向好"——1877 不是"重建圆满收尾"，是"北方政治意志撤回"。`,
          en: `All three stories pin "the end of Reconstruction" to this moment.

The 1876 presidential election (Hayes vs Tilden) deadlocked, and the two parties fought bitterly. In the end they struck a deal under the table, known as the **Compromise of 1877**: one party (Republican Hayes) got the presidency, and the price was — **withdrawing the last federal troops left in the South** (the garrisons remaining in FL/LA/SC).

With the troops gone, **Reconstruction was over.** The last barrier protecting Black people's vote and rights was gone.

Key exam sentence: the Compromise of 1877 is APUSH's marked **endpoint of Reconstruction**, and the turning point of "freedom expanded then forcibly pulled back" — it opened the door straight to Jim Crow.

Mnemonic: **Hayes for troops** (Republicans take the White House; the South takes the troops = takes back control over Black people).

Write both sides: the sharecropper's story line has a line — "don't believe everything got better after the war" — and 1877 is that moment. It wasn't "Reconstruction wrapped up nicely"; it was "the North's political will withdrawing."`,
        },
      },
    },

    // ── 卡 7：Jim Crow + disfranchisement ── 故事覆盖型 + 独立时序补充
    {
      id: 'jim-crow-disfranchisement',
      termCn: 'Jim Crow 与剥夺投票权',
      termEn: 'Jim Crow & Disfranchisement',
      defCn: 'Jim Crow 是 1877 年重建结束后南方建立的一套隔离制度：黑人和白人不能同校、同车、用同一个饮水台。同时，识字测验、人头税等"不提肤色"的门槛把黑人合法地挡在投票站外，把 15th Amendment 的投票权保障绕开了。',
      defEn: 'Jim Crow was a system of segregation built across the South after Reconstruction ended in 1877: Black and white people could not share schools, railcars, or water fountains. At the same time, literacy tests, poll taxes, and similar barriers that never mentioned race legally kept Black people away from the polls, effectively getting around the 15th Amendment\'s voting protection.',
      standardRef: ['APUSH KC-6.x (Jim Crow)', 'AP Gov 15th Amendment evasion', 'CA HSS 8.11'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'freedman-sharecropper',
        nodeIds: ['fs-n9'],
        xiaoweiNote: {
          cn: `佃农那条故事线里把"投票权怎么被一点点拿走"讲得最揪心。1877 撤军后，南方旧势力卷土重来，建起一整套羞辱、隔离黑人的制度，叫 **Jim Crow（吉姆·克劳）**：黑人和白人不能同校、同车、用同一个饮水台。

最阴的是剥夺投票权的手法，这是核心考点：
① **literacy test（识字测验）**：不识字就不许投——专门卡像佃农这样写不全自己名字的人。
② **poll tax（人头税）**：投票得先交钱——欠债的佃农哪来钱。
③ 还有 **grandfather clause（祖父条款）** 等花样。

关键句：**这些办法没有一个字提"黑人"。** 15th Amendment 明写"不得因肤色剥夺投票权"，他们就**不提肤色**，改用"识字""交钱"当门槛——规则没被违反，结果却被掉包，15th 被合法绕过（Williams v. Mississippi 1898 还给它背了书）。这是思考题 2 的核心。`,
          en: `The sharecropper's story line lays out "how the vote was taken away bit by bit" most painfully. After the 1877 withdrawal, the old southern power came surging back and built a whole system of humiliating and segregating Black people, called **Jim Crow**: Black and white couldn't share a school, a railcar, or the same drinking fountain.

The most sinister part was the methods of disfranchisement — the core exam point:
① **literacy test**: can't read, can't vote — made to trap people like the sharecropper who couldn't write out his own name.
② **poll tax**: must pay money before voting — where would a cropper in debt find it?
③ Plus tricks like the **grandfather clause**.

Key sentence: **not one of these methods mentions "Black people."** The 15th Amendment said plainly "the vote shall not be denied on account of color," so they **didn't mention color** and used "literacy" and "money" as the bar instead — the rule wasn't broken, but the result was swapped out. The 15th was legally circumvented (and Williams v. Mississippi, 1898, endorsed it). This is the heart of Thinking Question 2.`,
        },
      },
      // 时序补充（识字测验/人头税系统化高峰在 1890-1910，密西西比 1890 首开）
      standaloneText: {
        cn: `📌 时序提醒（小 U 怕你被 AP 老师抓）：

Jim Crow 和系统性剥夺投票权**不是 1877 紧接着就齐活的**。

- Jim Crow 隔离制度是 1877 撤军后**逐步**制度化的。
- **识字测验、人头税、祖父条款的系统性高峰其实集中在 1890-1910**——密西西比 1890 年的新宪法是头一个把这套"不提肤色"门槛写进州宪法的。

所以正确说法是："1877 撤军**打开了门**，1890s 才把剥夺投票权**系统化、合法化**。"

别写成"内战一打完 Jim Crow 就出现了"——这是清坑专区的经典错题。

佃农那条故事线的节奏其实和真实时间线吻合：他"老来"才遇上识字测验——那个合成人物跨 c.1840-1910，老年正好落在 1890s。`,
        en: `📌 Timing reminder (Xiao U doesn't want you caught by an AP teacher):

Jim Crow and systematic disfranchisement **didn't all snap into place right after 1877.**

- Jim Crow segregation was institutionalized **gradually** after the 1877 withdrawal.
- The **systematic peak of literacy tests, poll taxes, and grandfather clauses was actually 1890-1910** — Mississippi's 1890 new constitution was the first to write this "don't mention color" bar into a state constitution.

So the correct phrasing is: "the 1877 withdrawal **opened the door**; the 1890s **systematized and legalized** disfranchisement."

Don't write "Jim Crow appeared the moment the war ended" — that's a classic trap from the misconceptions list.

The sharecropper's story line actually matches the real timeline: he meets the literacy test only in "old age" — that composite spans c.1840-1910, and old age lands right in the 1890s.`,
      },
    },

    // ── 卡 8：Plessy v. Ferguson（1896）── 独立 mini-lesson
    {
      id: 'plessy-v-ferguson',
      termCn: 'Plessy v. Ferguson（1896）「隔离但平等」',
      termEn: 'Plessy v. Ferguson (1896) — "Separate but Equal"',
      defCn: '1896 年美国最高法院的一个判决：7 比 1 裁定"隔离但平等"（separate but equal）合宪——只要设施名义上平等，按种族隔离不违法。这给 Jim Crow 盖上了最高法院的印章，一直到 1954 年 Brown v. Board 才被推翻。',
      defEn: 'A Supreme Court ruling in 1896 that decided 7-1 that "separate but equal" is constitutional — as long as facilities are nominally equal, racial segregation is lawful. This stamped Jim Crow with the Supreme Court\'s seal of approval. It was not overturned until Brown v. Board in 1954.',
      standardRef: ['APUSH KC-6.x (Jim Crow / disfranchisement)', 'AP Gov 14th Amendment Equal Protection', 'CA HSS 8.11'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: '佃农那条故事线', nodeId: 'fs-n9', context: 'Jim Crow 隔离制度背景，Plessy 是司法背书那一刀' },
        ],
      },
      standaloneText: {
        cn: `这张卡故事里没专门展开，但它是 APUSH 和 AP Gov 的超高频考点——1877 → 1896 → 1954 这条因果链的中间那颗钉。

**事件**：1892 年，Homer Plessy（七分之八白人血统、八分之一黑人血统）在路易斯安那州故意坐进白人车厢，被捕。他的律师团队认为这违反 14th Amendment 的 equal protection。

**判决（1896）**：最高法院 7 比 1 裁定——「隔离但平等（separate but equal）」合宪。只要设施名义上平等，按种族隔离不违法。这给 Jim Crow 盖上了**联邦最高法院的司法印章**。

**唯一反对票**：大法官 John Harlan 写道："我们的宪法是色盲的（color-blind）。"这句话 58 年后被 Brown v. Board 引用来推翻 Plessy。

**1877 → 1896 → 1954 这条因果链（AP 必考）**：
- 1877 妥协撤军 → 南方旧势力重夺控制权
- 1896 Plessy → 给隔离制度镀上「合宪」金身
- 1954 Brown v. Board → 用 14th equal protection 推翻 Plessy，宣判「separate but equal 本质上不平等」

考点关键句：Plessy 不是重建时期的事，是重建结束后近 20 年才发生的——这正好说明 1877 的代价如何**一层层累积**，直到 20 世纪中叶才被清算。`,
        en: `This card isn't given its own scene in the stories, but it's a top-frequency APUSH and AP Gov exam point — the middle nail in the 1877 → 1896 → 1954 chain of causes.

**Event**: In 1892, Homer Plessy (7/8 white, 1/8 Black by ancestry) deliberately sat in a whites-only railcar in Louisiana and was arrested. His legal team argued this violated the 14th Amendment's equal protection clause.

**Ruling (1896)**: The Supreme Court decided 7-1 — "separate but equal" is constitutional. As long as facilities are nominally equal, racial segregation is lawful. This stamped Jim Crow with the **federal Supreme Court's seal of approval**.

**The lone dissent**: Justice John Harlan wrote: "Our Constitution is color-blind." That line was cited 58 years later by Brown v. Board to overturn Plessy.

**The 1877 → 1896 → 1954 chain of causes (AP must-know)**:
- 1877 Compromise withdraws troops → old southern power retakes control
- 1896 Plessy → gives segregation a "constitutional" seal
- 1954 Brown v. Board → uses 14th equal protection to overturn Plessy, ruling "separate but equal is inherently unequal"

Key exam sentence: Plessy is not a Reconstruction-era event — it happened nearly 20 years after Reconstruction ended. That is exactly the point: the cost of 1877 accumulated layer by layer, not settled until the mid-20th century.`,
      },
      xiaoweiNote: {
        cn: `老师的一句话总结：Plessy 是"写进纸上的平等被最高法院亲手按死"——1877 撤军开门，1896 Plessy 上锁，1954 Brown 才把锁砸开。AP 爱考"Harlan 的异见里哪句话最后被用来推翻 Plessy"：**「宪法是色盲的」**。`,
        en: `Teacher's one-line summary: Plessy is "the equality written on paper killed by the Supreme Court itself" — 1877 opened the door, 1896 Plessy locked it, 1954 Brown finally broke the lock. AP loves asking which line from Harlan's dissent was later used to overturn Plessy: **"Our Constitution is color-blind."**`,
      },
    },

    // ── 卡 9：Reconstruction 失败 historiography ── 独立 mini-lesson
    {
      id: 'reconstruction-historiography',
      termCn: '重建是不是"失败"？（史学之争）',
      termEn: 'Was Reconstruction a "Failure"? (Historiography)',
      defCn: '历史学家对重建结果的争论。旧的 Dunning School 学派把重建描绘成灾难，但这一派带有种族偏见，已被现代学界否定。今天的主流看法是：重建是一场"未完成的革命"——真实成就存在，但被北方政治意志撤退、南方暴力、经济束缚三股力量合力按了回去。',
      defEn: 'The debate among historians about what Reconstruction actually achieved. The old Dunning School painted it as a disaster, but that view carried racial bias and has been widely rejected by modern scholars. Today\'s mainstream view is that Reconstruction was an "unfinished revolution" — real gains were made, but three forces combined to press them back: the North\'s political will withdrawing, southern violence, and economic bondage.',
      standardRef: ['APUSH historical reasoning (continuity/change, causation)', 'AP DBQ/LEQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { storyLine: 'Johnson 那条故事线', nodeId: 'aj-n11', context: 'Johnson 自评"守护宪法平衡 vs 亲手逆转进步"双边 synthesis' },
          { storyLine: '佃农那条故事线', nodeId: 'fs-n11', context: '佃农"宪法对我是空话 vs 对后人是支票"双边 synthesis' },
        ],
      },
      standaloneText: {
        cn: `这张卡故事里没专门展开（它藏在三条线结尾的 synthesis 节点里），我帮你补完——这是 DBQ/LEQ 最爱考的"历史学家在争什么"。

**为什么会有"重建失败了"这种说法？**
20 世纪初有个叫 **Dunning School（邓宁学派）** 的，把重建描绘成"腐败、混乱、强加给南方的灾难"。但要小心——这一派带着当时的**种族偏见**（暗示黑人"不能自治"），现在学界已经广泛**否定**它了。考试里如果出现这个说法，通常是让你**识别并批判它**，不是让你认同。

**现代主流怎么看？**
把重建重估为一场 **"未完成的革命"（unfinished revolution）**：
- **真实成就**：黑人首次大批投票、选出黑人议员和联邦参议员、公立教育向黑人开放——这些**真发生过**。
- **失败的不是"黑人不行"**，而是三股力量合力把进步按了回去：① 北方政治意志撤回（Compromise of 1877 撤军）② 南方暴力（KKK 等夜骑、私刑、烧屋）③ 经济束缚（sharecropping 债务把人钉在地上）。

**所以"失败"该怎么写？**
标准答案：重建在**"能否守住"上失败了，不是在"从未发生"上失败**。法律地位剧变（Change：奴隶 → 公民），可现实人身束缚延续（Continuity：奴隶制 → sharecropping/Jim Crow）。**"change 在纸面，continuity 在现实"**——这一句直接送你 DBQ 的 complexity 分。

**长线连接（很加分）**：14th Amendment 的 equal protection 当时没兑现，但近 90 年后被"重新激活"——**Brown v. Board（1954）**推翻"separate but equal"、**Voting Rights Act（1965）**才真正兑现 15th Amendment。重建写下却被按住的修正案，成了后世民权运动的法律武器。

故事连接：Johnson 那条故事线结尾（守护宪法平衡 vs 亲手逆转进步）和佃农那条故事线结尾（宪法对我是空话 vs 对后人是支票）就是这场历史学之争的"人物版"——两边都站得住，AP 要你**双边论证**，别选边一边倒。`,
        en: `This card isn't given its own scene in the stories (it's tucked inside the synthesis nodes at the end of all three story lines), so let me fill it in — this is what DBQ/LEQ exams love asking about: "what historians argue."

**Why is there a "Reconstruction failed" claim?**
In the early 1900s the **Dunning School** painted Reconstruction as "corrupt, chaotic, a disaster imposed on the South." But be careful — this school carried the **racial bias** of its time (implying Black people "couldn't self-govern"), and scholars have now widely **rejected** it. If this claim shows up on an exam, you're usually being asked to **identify and critique it**, not endorse it.

**How does today's mainstream view see it?**
It reassesses Reconstruction as an **"unfinished revolution"**:
- **Real achievements**: Black people voted in large numbers for the first time, elected Black legislators and a U.S. senator, and public education opened to Black people — these **really happened**.
- **What failed wasn't "Black people couldn't do it,"** but three forces combining to press progress back down: ① the North's political will withdrawing (Compromise of 1877 troop withdrawal) ② southern violence (KKK night-riding, lynching, arson) ③ economic bondage (sharecropping debt nailing people to the land).

**So how should you write "failure"?**
The standard answer: Reconstruction failed at **"holding the gains," not at "never happening."** Legal status changed sharply (Change: slave → citizen), but real bondage continued (Continuity: slavery → sharecropping/Jim Crow). **"Change on paper, continuity in reality"** — that one line hands you the DBQ complexity point.

**Long-arc connection (big bonus)**: the 14th Amendment's equal protection went uncashed at the time, but was "reactivated" nearly 90 years later — **Brown v. Board (1954)** overturned "separate but equal," and the **Voting Rights Act (1965)** finally cashed the 15th Amendment. The amendments written but held down during Reconstruction became the legal weapons of the later civil rights movement.

the end of Johnson's story line (guarding constitutional balance vs reversing progress by his own hand) and the end of the sharecropper's story line (the Constitution as empty words to me vs a check to those who came after) are the "in-character version" of this historical debate — both sides stand, and AP wants you to **argue both sides**, not pick one and lean all the way over.`,
      },
      xiaoweiNote: {
        cn: `老师的一句话总结：写"重建失败"的 essay，**永远先承认它的真实成就，再分析它为什么没守住**。只骂"它失败了"会丢分，因为那等于附和 Dunning School 那套被否定的偏见。我的口诀：**"成就是真的，失败在守不住，根在三股力（北方撤、南方打、经济拴）。"**`,
        en: `Teacher's one-line summary: in any "Reconstruction failed" essay, **always acknowledge its real achievements first, then analyze why it couldn't hold.** Just bashing "it failed" loses points, because that echoes the rejected Dunning School bias. My mnemonic: **"achievements were real, failure was in not holding, root is three forces (North left, South fought, economy chained)."**`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Andrew Johnson 眼看着南方用 Black Codes 把刚废掉的奴隶制换名字搬回来。他手里有权力踩刹车——可以否决、可以派军队、可以宣布那些州政府不合法——但他选择睁一只眼闭一只眼。

一个"有权阻止错事却袖手旁观"的人，和"亲手做错事"的人，罪责一样大吗？为什么？`,
      en: `Andrew Johnson watched the South revive just-abolished slavery under a new name through the Black Codes. He had the power to hit the brakes — to veto, send troops, declare those state governments unlawful — but he chose to look the other way.

Is a person who "can stop a wrong but stands by" as guilty as a person who "does the wrong with his own hands"? Why?`,
      hintCn: `提示：可以从两个角度想——(1) "袖手旁观"和"亲手做"在**结果**上可能一样（同样让奴役复活），所以罪责相当；(2) 但在**意图和因果**上不同——Johnson 没写 Black Codes，是南方旧势力写的，他只是"没拦"。这两种解读 AP 都接受，重要的是你用证据。

两边都要写（别忘了 Johnson 自己的辩护）：他说自己是在"守护宪法平衡"、反对北方把南方当占领区长期军管。把他的自辩也写进去，你的论证才完整。

今天连接：你身边有没有"看见有人被欺负却不出声"的旁观者？他和动手的人，你怎么分这两种责任？`,
      hintEn: `Hint: think from two angles — (1) "standing by" and "doing it yourself" may be the same in **outcome** (both let bondage revive), so the guilt is comparable; (2) but they differ in **intent and causation** — Johnson didn't write the Black Codes, the old southern power did; he merely "didn't stop" it. AP accepts both readings; what matters is using evidence.

Write both sides (don't forget Johnson's own defense): he claimed he was "guarding the balance of the Constitution," opposing the North treating the South as long-occupied territory under military rule. Write his self-defense in too, and your argument is complete.

Today's connection: is there a bystander near you who "sees someone bullied but says nothing"? How do you split the responsibility between him and the one who acts?`,
      conceptsActivated: ['black-codes', 'radical-reconstruction', 'reconstruction-historiography'],
    },
    {
      id: 'q2',
      cn: `第十五修正案白纸黑字写着："不得因种族、肤色剥夺投票权。"可南方各州想出了一百种**不提肤色**的办法——识字测验、人头税、祖父条款——照样把黑人合法地挡在投票站外。

规则一个字都没被违反，结果却被彻底掉包。这算不算比"公开违法"更可怕？为什么？`,
      en: `The 15th Amendment said in black and white: "the vote shall not be denied on account of race or color." Yet the southern states devised a hundred methods that **didn't mention color** — literacy tests, poll taxes, grandfather clauses — and lawfully barred Black people from the polls all the same.

Not one word of the rule was broken, yet the result was completely swapped out. Is this more frightening than "openly breaking the law"? Why?`,
      hintCn: `提示：这是 AP 最爱的"规则 vs 结果"张力题。可以想——(1) "不提肤色"让剥夺**披上合法外衣**，法院都难推翻（Williams v. Mississippi 1898 就背了书），比明着违法更难对付；(2) 也可以反过来想：正因为它"合法"，后人才能用同一部宪法的 14th equal protection 把它推翻（Brown v. Board / VRA 1965）。

进阶：DBQ 通常会给你修正案原文（说"不得因肤色"）+ 识字测验记录（不提肤色但专卡黑人），让你论证"文本 vs 现实"的鸿沟。把佃农那条故事线里"我连名字都写不全"当具体证据。

今天连接：有没有一道"看似中立"的门槛，没提任何人是谁，却专门把某些人卡在外面？你能看出它真正挡的是谁吗？`,
      hintEn: `Hint: this is AP's favorite "rule vs result" tension question. Consider — (1) "not mentioning color" gave the disfranchisement a **cloak of legality**, hard even for courts to overturn (Williams v. Mississippi, 1898, endorsed it), making it harder to fight than open lawbreaking; (2) or flip it: precisely because it was "legal," later generations could use the same Constitution's 14th equal protection to overturn it (Brown v. Board / VRA 1965).

Going deeper: a DBQ typically gives you the amendment text (says "not on account of color") + literacy test records (don't mention color but specifically trap Black people), and asks you to argue the gap between "text vs reality." Use the sharecropper's "I couldn't even write out my own name" from the sharecropper's story line as concrete evidence.

Today's connection: is there a "seemingly neutral" bar that names no one, yet specifically keeps certain people out? Can you see who it's really keeping out?`,
      conceptsActivated: ['reconstruction-amendments', 'jim-crow-disfranchisement', 'sharecropping'],
    },
    {
      id: 'q3',
      cn: `Hiram Revels（首位非裔参议员）走的是温和路线：不报复、讲道理、靠规则一点点争权利，甚至替前邦联分子说话。可在南方旧势力靠暴力反扑最凶的时候，这条路看上去拦不住山洪。他到死都在问自己：坚持"讲道理"，是不是恰好在最不能讲道理的时刻害了同胞？

在一个"只认拳头"的年代，温和讲道理是智慧还是昂贵的天真？什么时候讲道理反而会害了你想保护的人？`,
      en: `Hiram Revels (the first African American senator) took the moderate path: no revenge, reasoning, winning rights bit by bit through the rules, even speaking on behalf of former Confederates. But when the old southern power surged back with its fiercest violence, that road looked unable to stop a flood. Until his death he kept asking: did insisting on "reasoning," at the very moment reason was impossible, harm his own people?

In an age that "knows only the fist," is moderate reasoning wisdom or a costly naivety? When might reasoning instead harm the very people you mean to protect?`,
      hintCn: `提示：没有标准答案，AP 要你用证据论证两边。可以想——(1) 温和的力量：Revels 撞开了参议院的门，证明"黑人配得上最高位子"，给后人留下"这条路走得通"的活证据（见 Revels 那条故事线结尾）；门一旦被撞开过一次就关不严了。(2) 温和的代价：在白人旧势力只想用枪和暴力赶人的时候，"精心打磨的提案"像拿尺子挡山洪；Revels 1875 批评自己这边，还被敌人当成武器（Revels 那条故事线里）。

进阶（跨主题对照）：把 Revels 和 Frederick Douglass 对照——一个温和、一个激烈，结局却相似（都没在活着时看见权利兑现）。这说明问题可能不在"路线选错"，而在"北方撒手"这个外部条件。

今天连接：你想为一件对的事出头时，怎么判断该"讲道理、不树敌"还是"硬碰硬、不退让"？`,
      hintEn: `Hint: no standard answer; AP wants you to argue both sides with evidence. Consider — (1) the power of moderation: Revels broke open the Senate door, proving "Black people are fit for the highest seat," and left those who came after living proof that "this road can be walked" (see the end of Revels's story line); once a door is broken open even once, it can't be shut tight again. (2) the cost of moderation: when the old white power wanted only to drive people out with guns and violence, "carefully polished proposals" were like holding a ruler against a flood; and Revels's 1875 criticism of his own side was taken up by the enemy as a weapon (in Revels's story line).

Going deeper (cross-topic): contrast Revels with Frederick Douglass — one moderate, one fierce, yet similar endings (neither saw rights cashed in his lifetime). This suggests the problem may not be "wrong strategy" but the external condition of "the North letting go."

Today's connection: when you want to stand up for something right, how do you judge whether to "reason and make no enemies" or to "meet force with force and not back down"?`,
      conceptsActivated: ['radical-reconstruction', 'compromise-of-1877', 'reconstruction-historiography'],
    },
  ],
};

export default notebook;
