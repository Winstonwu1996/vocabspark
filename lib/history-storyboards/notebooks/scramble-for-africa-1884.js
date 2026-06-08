// ─── 同伴笔记本架构 v1 · Scramble for Africa 1884 ──────────────
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
//   - storyboard 提供情感锚点（Leopold II / George Washington Williams / 刚果橡胶村民 三条线）
//   - notebook 提供考点闭环（civilizing mission/社会达尔文 + direct/indirect rule + Maxim gun 技术差 + 长尾国界后果 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History Modern Unit 6.2-6.4（state expansion + 新帝国主义 + economic imperialism）
//   - AP European History Unit 7（New Imperialism 1815-1914）
//   - CA HSS 10.4（imperialism in Africa & Asia 的动因与后果）
//   - 覆盖率：故事约 70%，notebook 补完至 ~95%
//
// dark-topic 处理纪律（沿 storyboard / narrative / factledger）：
//   - documented restraint，不创伤模拟/不廉价煽情；见证者式而非猎奇
//   - 中立但不洗白（Rule 0）：拒绝 Whig（"欧洲带来文明"）也拒绝"纯真受害者"叙事
//   - 文化对应硬禁：非洲/欧洲史不用中国概念词（玉玺/翰林/朕等）
//   - 事实对账本：crimes against humanity 用"最早系统使用之一/让它广为人知"，不写"首用"；
//     Nsala 1904 照片故事层措辞与 narrative §5 一致（手和脚 / 被杀害的孩子），不写回成"砍手幸存"
//
// schemaVersion: 1 · notebookVersion: scramble-for-africa-1884-v1

export var notebook = {
  topicId: 'scramble-for-africa-1884',
  topicNameCn: '瓜分非洲与新帝国主义',
  topicNameEn: 'The Scramble for Africa & New Imperialism',
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
    cn: `今天老师说我们学"瓜分非洲"（1870-1914）。她先提醒了一句：这一章很沉重，
里面有真实发生过的暴行。她说"我们直面它，但不是为了猎奇——是为了看懂它怎么发生的"。

她给了一张纸，上面写着这些名字：

**利奥波德二世（Leopold II）**——比利时国王，把刚果当私人产业来经营。
**乔治·华盛顿·威廉斯（George Washington Williams）**——非裔美国记者，最早公开揭发刚果暴行。
**斯坦利（Stanley）**——被 Leopold 雇去跟非洲酋长签"条约"的探险家。
**罗杰·凯斯门特（Roger Casement）**——写下官方调查报告、坐实刚果暴行的英国外交官。

还有一串词，先记下来，读完故事再回来对照，看自己能不能解释每一个：

柏林会议（Berlin Conference）、刚果自由邦（Congo Free State）、
文明使命（civilizing mission）、社会达尔文主义（Social Darwinism）、
直接统治 vs 间接统治（direct vs indirect rule）、马克沁机枪（Maxim gun）。

老师还说了一句我抄在第一页：

"不要只记暴行有多惨，要记三件事——
① 他们为什么去（动因），
② 他们怎么包装（修辞），
③ 后来谁揭穿了（揭发）。
AP 不考你哭，考你能不能分析。"`,
    en: `Today my teacher said we're learning the "Scramble for Africa" (1870-1914).
She warned us first: this chapter is heavy, with real atrocities in it. She said,
"We face it directly — not for shock value, but to understand how it happened."

She gave us a sheet with these names:

**Leopold II** — King of Belgium; ran the Congo as his personal private property.
**George Washington Williams** — African American journalist; the first to publicly expose the Congo atrocities in a systematic way.
**Stanley** — the explorer hired by Leopold to sign "treaties" with African chiefs.
**Roger Casement** — the British diplomat whose official report confirmed the Congo atrocities.

And a list of terms. Write them down now, then come back after the stories to check whether you can explain each one:

Berlin Conference, Congo Free State,
civilizing mission, Social Darwinism,
direct vs indirect rule, Maxim gun.

My teacher also said something I copied to the first page:

"Don't just remember how terrible the atrocities were — remember three things:
① why they went (motives),
② how they packaged it (rhetoric), and
③ who exposed it (the whistleblowers).
The AP doesn't test whether you cry; it tests whether you can analyze."`,
    keyTerms: [
      { cn: '新帝国主义', en: 'New Imperialism' },
      { cn: '柏林会议', en: 'Berlin Conference' },
      { cn: '刚果自由邦', en: 'Congo Free State' },
      { cn: '文明使命', en: 'civilizing mission' },
      { cn: '社会达尔文主义', en: 'Social Darwinism' },
      { cn: '直接统治 vs 间接统治', en: 'direct vs indirect rule' },
      { cn: '马克沁机枪', en: 'Maxim gun' },
      { cn: '危害人类罪', en: 'crimes against humanity' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '利奥波德二世',
        nameEn: 'Leopold II',
        ipa: '/ˈliːəpoʊld ðə ˈsɛkənd/',
        roleCn: '比利时国王，把刚果当私人产业、致数百万死的橡胶暴政设计者',
        roleEn: 'King of Belgium; ran the Congo as private property, architect of the rubber atrocities',
        mustKnow: true,
        audioKey: 'leopold-ii',
      },
      {
        nameCn: '乔治·华盛顿·威廉斯',
        nameEn: 'George Washington Williams',
        ipa: '/dʒɔːrdʒ ˈwɒʃɪŋtən ˈwɪljəmz/',
        roleCn: '非裔美国记者+历史学家，1890 公开信最早系统揭发刚果暴行',
        roleEn: 'African American journalist and historian; 1890 open letter, earliest systematic exposure of the Congo',
        mustKnow: true,
        audioKey: 'george-washington-williams',
      },
      {
        nameCn: '罗杰·凯斯门特',
        nameEn: 'Roger Casement',
        ipa: '/ˈrɒdʒər ˈkeɪsmənt/',
        roleCn: '英国外交官，1904 官方调查报告坐实刚果暴行',
        roleEn: 'British diplomat; 1904 official report confirming the Congo atrocities',
        mustKnow: true,
        audioKey: 'roger-casement',
      },
      {
        nameCn: '亨利·莫顿·斯坦利',
        nameEn: 'Henry Morton Stanley',
        ipa: '/ˈhɛnri ˈmɔːrtən ˈstænli/',
        roleCn: '受 Leopold 雇佣、沿刚果河跟酋长签"条约"的探险家',
        roleEn: 'Explorer hired by Leopold to sign "treaties" with chiefs along the Congo river',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '艾丽斯·西利·哈里斯',
        nameEn: 'Alice Seeley Harris',
        ipa: '/ˈælɪs ˈsiːli ˈhærɪs/',
        roleCn: '英国传教士，1904 拍下砍手照片（Nsala/Boali）',
        roleEn: 'British missionary; took the 1904 severed-hands photograph (Nsala/Boali)',
        mustKnow: true,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'berlin-conference',
      termCn: '柏林会议 1884-85',
      termEn: 'Berlin Conference 1884-85',
      defCn: '1884-85 年，14 个欧洲国家在德国柏林开会，商量怎么瓜分非洲大陆——桌上没有一个非洲人在场。会议主要是定规则，不是当场把所有国界都画完。',
      defEn: 'A meeting in Berlin in 1884-85 where 14 European countries worked out the rules for dividing up Africa — with not one African at the table. It set the rules for partition; the actual border-drawing took another 20-plus years.',
      standardRef: ['AP World Modern Unit 6.2', 'AP Euro Unit 7', 'CA HSS 10.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'leopold-ii',
        nodeIds: ['leo-n4', 'leo-n9'],
        xiaoweiNote: {
          cn: `这个我读过！Leopold 先雇 Stanley 去非洲，一个村子一个村子找酋长签"条约"。
那些酋长大多不识字，画个记号就等于"让出"了土地。然后 1884-85 年，14 个欧洲国家跑到柏林开会，
对着一张非洲地图商量怎么瓜分整块大陆——桌上**一个非洲人都没有**。
会上他们承认了 Leopold 对刚果的控制。

老师说这是本章**最高频考点**，每年几乎必考，记住三点：
① 1884-85 年，14 个欧洲国家；
② 桌上没有一个非洲人；
③ 会议主要是定**瓜分的规则**（叫"有效占领"原则），不是当场把所有线都画完——
实际上把非洲瓜分干净，是会后 20 多年里一点点完成的。

写 DBQ 要注意：这次会议把瓜分非洲包装成"和平协商、避免列强互打"，
听起来好像挺文明——可被瓜分的人一个都不在场。这就是"替别人决定命运，却不让他在场"。`,
          en: `I read this! Leopold first hired Stanley to go village by village in Africa, getting chiefs to sign "treaties." Most of those chiefs couldn't read, so making a mark on paper meant "handing over" their land.
Then in 1884-85, 14 European countries went to Berlin and worked out how to divide the whole continent over a map of Africa — with **not one African at the table.**
There they recognized Leopold's control over the Congo.

Teacher said this is the chapter's **most frequently tested** concept — almost every year. Remember three points:
① 1884-85, 14 European countries;
② not one African at the table;
③ it mainly set the **rules** for partition (called the "effective occupation" principle) — it didn't draw every border on the spot. The actual carving-up of Africa took 20-plus years after the meeting.

For DBQ writing: the conference packaged partition as "peaceful negotiation to avoid war between powers," which sounds reasonable — yet none of the people being partitioned were present. That's "deciding someone's fate while not letting them in the room."`,
        },
      },
    },

    {
      id: 'congo-free-state-leopold',
      termCn: '刚果自由邦 / 利奥波德二世',
      termEn: 'Congo Free State / Leopold II',
      defCn: '刚果自由邦（Congo Free State）是 1885-1908 年间比利时国王利奥波德二世（Leopold II）个人拥有的一块私人产业，面积比比利时大 76 倍。它不是比利时国家的殖民地——是一个人的私人产业。',
      defEn: 'The Congo Free State (1885-1908) was the personal private property of Leopold II, King of Belgium — a territory 76 times the size of Belgium. It was not a Belgian national colony; it was one man\'s private estate.',
      standardRef: ['AP World Modern Unit 6.4', 'CA HSS 10.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'leopold-ii',
        nodeIds: ['leo-n1', 'leo-n4', 'leo-n5', 'leo-n8'],
        xiaoweiNote: {
          cn: `Leopold 那条故事线讲的就是他。重点时间线：
- 1865 年：继位比利时国王。
- 1876 年：在布鲁塞尔开"地理大会"，打着"反奴隶、传文明"的旗号拉拢欧洲人。
- 1885 年：拿到刚果，取名刚果自由邦（Congo Free State）。
- 1908 年：被迫把刚果交给比利时政府。
- 1909 年：死前下令烧档案，烧了三天。

**最容易踩的陷阱（老师说考试一定会出）**：
1885-1908 年，刚果自由邦是 Leopold **个人**的私人产业，不是比利时国家的殖民地。1908 年才转交比利时。

"Congo Free State"里那个"Free（自由）"是反讽——对住在那里的人一点都不自由。

还有一点：Leopold **从没踏上过非洲一步**，整个刚果靠他坐在四千公里外的宫殿里看账本来管。
他设下配额制度，但亲手砍手的是殖民军——"离暴行远"不等于"无罪"，这是考试爱出的分析点。`,
          en: `Leopold's whole story line is about him. Key timeline:
- 1865: became King of Belgium.
- 1876: held a "geographical conference" in Brussels, using the banner of "fighting slavery and spreading civilization" to win support.
- 1885: took the Congo and named it the Congo Free State.
- 1908: forced to hand the Congo to the Belgian government.
- 1909: ordered the archives burned before he died — three days of burning.

**The easiest trap to fall into (teacher says the exam always has this):**
From 1885 to 1908, the Congo Free State was Leopold's **personal** private property, not a Belgian national colony. It only transferred to Belgium in 1908.

The "Free" in "Congo Free State" is bitter irony — it was not free at all for the people living there.

One more thing: Leopold **never set foot in Africa.** The whole Congo ran on a ledger he read in a palace four thousand kilometers away.
He set up the quota system, but the colonial army did the actual cutting — "far from the violence" does not equal "innocent." That's a common AP analysis point.`,
        },
      },
    },

    {
      id: 'rubber-extraction-economy',
      termCn: '橡胶榨取经济 / 配额暴政',
      termEn: 'Rubber Extraction Economy / Quota Atrocity',
      defCn: '1890 年代，汽车和自行车让橡胶需求暴涨。Leopold 用配额制度逼刚果村民去林子里采橡胶：每村定额、定期必须交够，完不成就惩罚。这种靠暴力榨取原材料的方式，叫经济帝国主义（economic imperialism）。',
      defEn: 'In the 1890s, demand for rubber exploded because of cars and bicycles. Leopold forced Congo villagers to gather rubber from the forest through a quota system: each village had a fixed amount due on a set date, with punishment for falling short. This violent extraction of raw materials is what historians call economic imperialism.',
      standardRef: ['AP World Modern Unit 6.4', 'AP Euro Unit 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'congo-rubber-villager-receiving-end',
        nodeIds: ['vil-n3', 'vil-n5', 'leo-n5', 'leo-n6'],
        xiaoweiNote: {
          cn: `村民那条故事线和 Leopold 那条线一起讲了这个：
Leopold 那边，是账本上的数字在涨；村民那边，是地上的代价在付。

考点关键句：这是**经济帝国主义（economic imperialism）**的典型案例——
工业革命让汽车、自行车需要橡胶（1890 年代充气轮胎需求猛增），
刚果雨林里的野生橡胶藤蔓就成了"金矿"。
Leopold 用**配额制度**逼每个村按时交够橡胶，完不成就惩罚。

逼迫是怎么执行的（DBQ 高频考点）：
① 殖民军抓走村里的**女人和孩子当人质**，逼男人进林子采够胶来赎回家人；
② 殖民军（Force Publique）发给士兵子弹，长官让他们交回证据"证明子弹没浪费"——
  于是士兵砍下被打死者的手来交差。
  慢慢地，**一只手变成一种货币，等于一份没完成的配额**。

写作注意（措辞要精确）：1904 年传教士艾丽斯·西利·哈里斯拍下一张著名照片——
一个父亲 Nsala 盯着他**被杀害**的 5 岁女儿 Boali 被砍下的**手和脚**。
那是一个被害孩子的遗体，不是"砍手后活下来"的例子。
两类情况制度上都存在，但不要混成一类——写 essay 用错细节会被扣分。`,
          en: `The villager's story and Leopold's story both cover this — Leopold saw rising numbers on a ledger; the villagers paid the price on the ground.

Key exam sentence: this is the textbook case of **economic imperialism** —
the Industrial Revolution made cars and bicycles need rubber (demand for pneumatic tires surged in the 1890s), so the wild rubber vines of the Congo rainforest became a "gold mine."
Leopold used a **quota system** to force each village to deliver rubber on a fixed schedule, with punishment for falling short.

How the forcing worked (high-frequency DBQ topic):
① The colonial army seized the village's **women and children as hostages**, forcing the men into the forest to gather enough rubber to get them back;
② The colonial army (Force Publique) issued bullets and required soldiers to bring back proof "that no bullet was wasted" — so soldiers cut off the hands of those they shot to account for them.
Slowly, **a hand became a kind of currency, worth one unmet quota.**

Writing note (be precise): the famous 1904 photograph by missionary Alice Seeley Harris shows a father named Nsala staring at the **hand and foot** cut from his **murdered** 5-year-old daughter Boali.
That is the body of a killed child, not an example of "surviving after a hand was cut off."
Both types existed in that system, but don't merge them — using the wrong detail in an essay loses points.`,
        },
      },
    },

    {
      id: 'civilizing-mission-social-darwinism',
      termCn: '文明使命 / 社会达尔文主义',
      termEn: 'Civilizing Mission / Social Darwinism',
      defCn: '文明使命（civilizing mission）：殖民者把入侵包装成"给落后地区带去文明和进步"的说法。社会达尔文主义（Social Darwinism）：把达尔文"适者生存"从生物学误用到人类社会，说"欧洲白人是更高级的种族，所以有权统治别人"。两者合起来，把赤裸裸的抢夺洗成了一桩"高尚事业"。',
      defEn: 'Civilizing mission: the colonizers\' claim that invasion was really "bringing civilization and progress to backward regions." Social Darwinism: the misuse of Darwin\'s "survival of the fittest" from biology onto human races, arguing "white Europeans are a higher race and therefore have the right to rule others." Together, they turned naked plunder into a supposedly noble enterprise.',
      standardRef: ['AP World Modern Unit 6.2', 'AP Euro Unit 7', 'CA HSS 10.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['leo-n3', 'leo-n6', 'gw-n6', 'vil-n6'],
        mentionedIn: [
          { lens: 'leopold-ii', nodeId: 'leo-n3', context: '1876 Leopold 用"反奴隶/带文明"旗号成立国际非洲协会' },
        ],
      },
      standaloneText: {
        cn: `故事里你已经看过"文明使命"怎么运作了：
Leopold 用它筹款博掌声，村里收到的是砍下的手，Williams 把它翻过来揭发 Leopold。
这张卡补的是它背后的**伪科学根**：社会达尔文主义。

**文明使命（civilizing mission）是什么？**
殖民者把入侵包装成"给落后地区带去文明、信仰、进步"。
法国人叫它 mission civilisatrice；
英国诗人 Kipling 1899 年写了一句"白人的负担（the white man's burden）"，
意思是"统治殖民地是白人的高尚责任"。
这套话术用来筹款、赢得掌声、让旁观者不追问。

**社会达尔文主义（Social Darwinism）是什么？**
把达尔文"适者生存"从生物学**误用**到人类社会和种族上，
推出"欧洲白人是更高级的种族，所以有权也有责任统治别人"。
注意——这是**伪科学**。达尔文本人的进化论说的是物种，不是"哪个人种更高级"。
是后来的人扭曲了它，来给殖民和种族等级论找借口。

**两者怎么配合？**
社会达尔文主义负责讲"为什么我们有资格"（我们更高级）；
文明使命负责讲"所以这是好事"（所以我们去帮你）。
一个提供伪科学论据，一个提供道德包装。
合起来，把赤裸裸的抢夺洗成了一桩高尚的事业。

**跨话题连线**：这套话术不是 1876 年才发明的。
1492 年 Columbus 到美洲，殖民者就说去"教化"原住民（见 age-of-exploration-1492）。
四百年后 Leopold 原样搬到非洲——同一套"文明"修辞，用了将近四百年。

**反 Whig（一定要记）**：
这套话术第一步就是把非洲说成"黑暗""没有文明"。
可就在同一片非洲，几百年前有 Mali 帝国，14 世纪的 Timbuktu 是世界知识中心之一
（见 mali-empire-1235）。
非洲从来不是"等着被文明拯救的空白"。`,
        en: `You already saw "civilizing mission" at work in the stories:
Leopold used it to raise money and win applause; the village received severed hands; Williams turned it around to expose Leopold.
This card fills in its **pseudo-scientific root**: Social Darwinism.

**What is the civilizing mission?**
Colonizers packaged invasion as "bringing civilization, faith, and progress to backward regions."
The French called it the mission civilisatrice.
English poet Kipling wrote a line in 1899 called "the white man's burden," meaning "ruling colonies is the noble duty of the white man."
This rhetoric was used to raise money, win applause, and keep bystanders from asking questions.

**What is Social Darwinism?**
It takes Darwin's "survival of the fittest" from biology and **misapplies** it to human societies and races, claiming "white Europeans are a higher race and therefore have both the right and the duty to rule others."
Important: this is **pseudo-science.** Darwin's actual theory of evolution is about species, not "which race is superior."
Later people twisted it to justify colonialism and racial hierarchy.

**How do the two work together?**
Social Darwinism handles "why we are entitled" (we are higher);
the civilizing mission handles "so this is a good thing" (so we come to help you).
One provides the fake-scientific argument; the other provides the moral packaging.
Together, they turned naked plunder into a supposedly noble enterprise.

**Cross-topic link:** this rhetoric was not invented in 1876.
When Columbus reached the Americas in 1492, colonizers said they came to "civilize" the natives (see age-of-exploration-1492).
Nearly four hundred years later, Leopold lifted the same script unchanged into Africa.

**Anti-Whig (must remember):**
The first move of this rhetoric is to call Africa "dark" and "without civilization."
But on that same continent, centuries earlier, there was the Mali Empire, and in the 1300s Timbuktu was one of the world's centers of learning (see mali-empire-1235).
Africa was never "a blank waiting to be saved by civilization."`,
      },
      xiaoweiNote: {
        cn: `老师强调：考"动因/意识形态"的题，要把文明使命和社会达尔文主义一起写——
一个是道德面具，一个是伪科学论据。
记忆口诀：**社达讲"我们高级"，文明使命讲"所以来帮你"**。

写 DBQ 一定要加一句反 Whig 的话：
"这套'带文明'的说法本身就是谎——非洲早有 Mali 帝国和 Timbuktu 这样的文明。"
这句话能直接拿分。`,
        en: `Teacher stressed: on "motives/ideology" questions, write civilizing mission and Social Darwinism together — one is the moral mask, the other the fake-scientific argument.
Mnemonic: **Social Darwinism says "we're superior," the civilizing mission says "so we come to help you."**

Every DBQ answer should include one anti-Whig sentence:
"The very claim of 'bringing civilization' was a lie — Africa already had civilizations like the Mali Empire and Timbuktu."
That sentence scores directly.`,
      },
    },

    {
      id: 'maxim-gun-technology-gap',
      termCn: '马克沁机枪 / 技术差',
      termEn: 'Maxim Gun / Technology Gap',
      defCn: '马克沁机枪（Maxim gun，1884 年发明）是世界上第一款全自动机枪，一分钟能打几百发。加上抗疟疾药奎宁和蒸汽船，欧洲在 1870 年后突然拥有了"进得去非洲、控得住土地、打得过对手"的技术组合，让几十年内瓜分整个非洲成为可能。',
      defEn: 'The Maxim gun (invented 1884) was the world\'s first fully automatic machine gun, capable of firing hundreds of rounds per minute. Combined with quinine (an anti-malaria drug) and steamships, it gave Europe a sudden technological package — "get in, hold it, win the fight" — that made carving up an entire continent in a few decades possible.',
      standardRef: ['AP World Modern Unit 6.2', 'AP Euro Unit 7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'congo-rubber-villager-receiving-end', nodeId: 'vil-n7', context: '村民拿长矛对殖民军的枪，明知打不过还打' },
        ],
      },
      standaloneText: {
        cn: `村民那条故事线里有一句话："他们有枪、有大炮，我们只有长矛"——
这张卡补的是那道"技术差"背后到底有什么，以及它为什么重要。

**为什么 1870 年以后欧洲能这么快瓜分非洲？**
三样东西同时凑齐了，缺一不可：

① **奎宁（quinine）——进得去**
奎宁是抗疟疾药。在这之前，赤道非洲的疟疾挡了欧洲人好几百年——
深入内陆等于送死。奎宁普及后，欧洲人才能活着走进非洲腹地。

② **蒸汽船 + 铁路 + 电报——控得住**
蒸汽船能逆流深入河道，铁路快速运兵运货，电报瞬间传令。
有了这三样，才能在一块巨大的土地上实现快速控制。

③ **马克沁机枪（Maxim gun，1884）——打得过**
世界上第一款全自动机枪，一分钟能打几百发。
它让一小队欧洲军队，能压制人数多得多的非洲军队。

老师引了一句讽刺这件事的著名诗行：
"Whatever happens, we have got / The Maxim gun, and they have not."
（不管怎样，我们有马克沁机枪，他们没有。）
——一句话点破：所谓"文明的胜利"，很大程度上其实是"火力的碾压"。

**考点关键句**：
**新帝国主义的速度和规模，是工业革命的技术（奎宁 + 蒸汽 + 机枪）撑起来的。**
没有这套技术，"瓜分非洲"根本不可能在几十年里完成。

**写 DBQ 要注意**：
技术差解释了"为什么打得过"，但不能用来论证"所以殖民是对的"。
"我有更强的武器"从来不等于"我有权统治你"。
这是 DBQ 常设的陷阱——别把"能"写成"该"。`,
        en: `The villager's story has a line: "they had guns and cannon, we had only spears" — this card fills in what that "technology gap" actually was, and why it matters.

**Why could Europe carve up Africa so fast after 1870?**
Three things came together at once, and none of them could be skipped:

① **Quinine — getting in**
Quinine is an anti-malaria drug. Before it, malaria in equatorial Africa blocked Europeans for centuries — going inland meant death. Once quinine spread, Europeans could actually survive going into the African interior.

② **Steamships + railways + the telegraph — holding it**
Steamships could travel upriver deep into the waterways. Railways moved troops and supplies fast. The telegraph sent orders in an instant. Together, they made it possible to control a huge territory quickly.

③ **The Maxim gun (1884) — winning the fight**
The world's first fully automatic machine gun, firing hundreds of rounds per minute. It let a small European force overpower a far larger African one.

Teacher quoted a famous mocking couplet about exactly this:
"Whatever happens, we have got / The Maxim gun, and they have not."
One line that exposes it: the so-called "triumph of civilization" was, in large part, the crushing power of firepower.

**Key exam sentence:**
**The speed and scale of the New Imperialism rested on Industrial-Revolution technology — quinine + steam + the machine gun.** Without this combination, the "Scramble for Africa" could never have been completed in a few decades.

**DBQ warning:**
The technology gap explains "why they won the fight" — but it cannot be used to argue "so colonialism was right."
"I have a stronger weapon" never equals "I have the right to rule you."
This is a common DBQ trap: don't turn "could" into "should."`,
      },
      xiaoweiNote: {
        cn: `记忆口诀：**① 进得去（奎宁）→ ② 控得住（蒸汽船/铁路/电报）→ ③ 打得过（马克沁机枪）**。
三步缺一不可。

如果题目问"为什么 1870 年后瓜分非洲突然加速"，答案是工业技术——不是"非洲变弱了"。`,
        en: `Mnemonic: **① get in (quinine) → ② hold it (steamships / railways / telegraph) → ③ win the fight (Maxim gun).** Three steps, none skippable.

If the question asks "why did the Scramble for Africa suddenly speed up after 1870," the answer is industrial technology — not "Africa got weaker."`,
      },
    },

    {
      id: 'direct-vs-indirect-rule',
      termCn: '直接统治 vs 间接统治',
      termEn: 'Direct vs Indirect Rule',
      defCn: '直接统治（direct rule）：殖民者派自己的官员直接管理殖民地，推行宗主国的法律和语言，拆掉当地原有的权力结构。代表：法国。间接统治（indirect rule）：保留当地原有的酋长或国王，让他们替殖民者收税维持秩序，殖民者在幕后控制。代表：英国。',
      defEn: 'Direct rule: the colonizer sends its own officials to govern the colony directly, imposing its own laws and language and dismantling local power structures. Example: France. Indirect rule: the colonizer keeps local chiefs or kings in place, using them to collect taxes and maintain order while controlling from behind the scenes. Example: Britain.',
      standardRef: ['AP World Modern Unit 6.2', 'AP Euro Unit 7', 'CA HSS 10.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这个考点在故事里没有专门讲——刚果自由邦是个特殊的极端案例。
但 AP 必考，因为它问的是：**列强拿到殖民地以后，到底怎么管？**
主要有两种方式：

**直接统治（direct rule）**
殖民者派自己的官员过来，直接管理这块地。
他们推行宗主国的法律、语言、行政制度，把当地原有的统治结构拆掉或绕开。
代表：**法国**（在西非大力推行法语和法国行政体系）。

好处（对殖民者）：控制更彻底，更"统一"。
代价：要派大量人手，花大钱，而且更容易激起当地反抗。

**间接统治（indirect rule）**
殖民者把当地原有的酋长、国王、传统权威保留下来，
让他们替殖民者收税、维持秩序——殖民者躲在幕后控制。
代表：**英国**（尤其在尼日利亚，由 Frederick Lugard 总结成一套系统理论）。

好处（对殖民者）：省人省钱，还能借当地权威的"合法性"来统治。
代价：把本地精英变成殖民者的工具，为后来的族群矛盾埋下种子。

**刚果属于哪种？两种都不算典型。**
Leopold 的刚果自由邦是更极端的模式——**特许公司 + 配额暴力**的榨取方式。
它是私人产业，目标纯粹是橡胶利润，比法国的直接统治还要赤裸。
这说明：新帝国主义的"统治方式"不是非此即彼两种，而是一个光谱。

**连线长尾后果**：
间接统治把某些族群抬成"代理人"、压低另一些族群。
加上下一张卡讲的"乱划国界"，一起埋下了今天非洲很多族群冲突的根。`,
        en: `This concept isn't directly covered in the stories — the Congo Free State was a special, extreme case.
But the AP always tests it, because it asks: **once the powers had a colony, how did they actually govern it?**
There are two main models:

**Direct rule**
The colonizer sends its own officials to govern the colony directly.
They impose the home country's laws, language, and administration, bypassing or dismantling the local existing power structure.
Example: **France** (pushing French language and administration in West Africa).

Upside (for the colonizer): more thorough and uniform control.
Cost: requires many personnel, costs a lot of money, and tends to provoke more local resistance.

**Indirect rule**
The colonizer keeps the local existing chiefs, kings, and traditional authorities in place, using them to collect taxes and keep order — while controlling from behind the scenes.
Example: **Britain** (especially in Nigeria, where Frederick Lugard developed it into a systematic theory).

Upside (for the colonizer): saves personnel and money; governs by borrowing the "legitimacy" of local authority.
Cost: turns local elites into tools of the colonizer, planting seeds for later ethnic conflict.

**Which type was the Congo? Neither, really.**
Leopold's Congo Free State was a more extreme model: a **concession-company + quota-violence** extraction operation.
It was private property, with the goal of pure rubber profit — even more naked than France's direct rule.
This shows that the New Imperialism's "modes of rule" were not just two boxes, but a whole spectrum.

**Link to long-term consequences:**
Indirect rule elevated some ethnic groups into "agents" and pushed others down.
Combined with the "carelessly drawn borders" in the next card, this helped sow the roots of many of Africa's ethnic conflicts today.`,
      },
      xiaoweiNote: {
        cn: `记忆口诀：**法国直接（派自己人 + 推法语），英国间接（留本地酋长当代理）**。

老师说一定要会比较两者的"好处 vs 代价"——
选择题爱考"哪个更省钱"（答：间接）、"哪个更激起反抗"（答：直接）。

注意陷阱：刚果不是这两种的典型，是更极端的私人榨取模式。
如果题目拿刚果当"间接统治的例子"，那是错的。`,
        en: `Mnemonic: **France = direct (sends its own people + pushes French); Britain = indirect (keeps local chiefs as agents).**

Teacher said you must be able to compare their "upsides vs costs" — multiple choice loves "which is cheaper" (indirect) and "which provokes more resistance" (direct).

Trap to watch for: the Congo was not a typical case of either — it was a more extreme private-extraction model. If a question uses the Congo as "an example of indirect rule," that's wrong.`,
      },
    },

    {
      id: 'african-resistance',
      termCn: '非洲人的反抗',
      termEn: 'African Resistance',
      defCn: '被殖民的非洲人从来不是只会承受——他们用各种方式反抗：逃亡、武装对抗、互助。这叫能动性（agency）。AP World Unit 6.3 专门考这个，必须知道几个大规模反抗的例子（尤其是埃塞俄比亚）。',
      defEn: 'Colonized Africans were never only enduring — they resisted in many ways: fleeing, armed fighting, mutual aid. Historians call this agency. AP World Unit 6.3 specifically tests this; you need to know several examples of large-scale resistance, especially Ethiopia.',
      standardRef: ['AP World Modern Unit 6.3', 'CA HSS 10.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'congo-rubber-villager-receiving-end',
        nodeIds: ['vil-n7'],
        xiaoweiNote: {
          cn: `村民那条故事线里讲到了：刚果人不是被动受着——
有人逃进林子最深处；
有的村子拿长矛对枪，明知打不过还打；
有人偷偷给人质送吃的，帮逃跑的人带路。

但他们有枪炮和整套制度，村民只有长矛和人命。
多数反抗很快被镇压，镇压后配额更重、砍手更多。

**考点关键句（AP World Unit 6.3 就叫"本土回应"）**：
**被殖民者从来不是只会承受——抵抗一直存在。**
故事讲的是刚果的小规模村级反抗，但 AP 还会考几个**大规模**的例子，要记：

① **埃塞俄比亚**：1896 年阿杜瓦（Adwa）战役打败意大利。
这是非洲**唯一**成功抵御欧洲殖民、保住独立的国家
（连同利比里亚，1914 年全非洲只有这两块没被殖民）。
这是**必考亮点**，一定要记住。

② **南非祖鲁王国**：1879 年伊散德尔瓦纳（Isandlwana）一战重创英军。
虽然最终被征服，但证明了非洲军队能打赢装备更好的欧洲军队。

**写 essay 要注意**：
村民那条线里有一句话——"沉默不等于认命，很多时候沉默只是因为开口的人已经被打死了"。
不要把非洲人写成纯被动受害者，那是旧史观。
现代非洲史强调他们的**能动性（agency）**：反抗、适应、协商，他们都做过。`,
          en: `The villager's story covers this: the Congolese were not passive — some fled into the deepest forest; some villages fought guns with spears knowing they couldn't win; some secretly brought food to hostages and guided those fleeing.

But the colonizers had guns, cannon, and a whole system; the villagers had only spears and lives.
Most resistance was crushed quickly, and after it the quota grew heavier and more hands were taken.

**Key exam sentence (AP World Unit 6.3 is literally called "Indigenous Responses"):**
**The colonized were never only enduring — resistance was always there.**
The story shows small-scale village resistance in the Congo, but the AP also tests several **large-scale** examples you need to know:

① **Ethiopia**: defeated Italy at the Battle of Adwa in 1896.
This is the **only** nation in Africa to successfully resist European colonization and keep its independence (along with Liberia; by 1914 these were the only two parts of Africa not colonized).
This is a **must-know highlight** — memorize it.

② **The Zulu Kingdom (South Africa)**: at Isandlwana in 1879 it dealt the British army a heavy blow.
Though ultimately conquered, it proved African forces could beat better-equipped European armies.

**Essay note:**
The villager's story has a line — "silence is not the same as resignation; often, silence is only because the ones who spoke up had already been killed."
Don't write Africans as purely passive victims — that's the old historical view.
Modern African history stresses their **agency**: they resisted, adapted, and negotiated.`,
        },
      },
    },

    {
      id: 'borders-long-tail-consequences',
      termCn: '长尾后果 / 殖民国界与冲突',
      termEn: 'Long-Tail Consequences / Borders & Conflict',
      defCn: '柏林会议和此后的瓜分中，欧洲人用尺子对着地图划线，根本不管地上住的是哪个族群。这些线今天还在：1960 年代非洲独立时，新国家被迫继承这些殖民国界，很多至今的冲突和内战，根就在这里。',
      defEn: 'At the Berlin Conference and in the partition that followed, Europeans drew lines on a map with a ruler, paying no attention to which peoples lived on the ground. These lines are still there: when African nations gained independence in the 1960s, they inherited these colonial borders. Many of today\'s conflicts and civil wars trace their roots directly to those lines.',
      standardRef: ['AP World Modern Unit 6.2', 'CA HSS 10.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['leo-n9', 'vil-n9'],
        mentionedIn: [
          { lens: 'gw-williams', nodeId: 'gw-n8', context: 'Casement 报告 + 国际运动接力，1908 刚果交比利时' },
        ],
      },
      standaloneText: {
        cn: `Leopold 那条故事线和村民那条故事线都讲到了柏林会议怎么"用尺子划线"，
但 AP 还会考更完整的"长期后果链"，我把它整理在这张卡上。

**① 乱划的国界（最高频的长尾考点）**
柏林会议和会后的瓜分里，欧洲人对着地图用尺子划线，
根本不看地上住的是哪个族群、说哪种话。
一条直线可能把一个民族劈成两半，也可能把世仇的两族硬塞进同一个国家。
**今天非洲地图上那些笔直的国界线，很多就是那时候划的。**

**② 这些线没消失**
1960 年代非洲独立时，新国家被迫**继承**这些殖民国界——
因为重划会引发更大的战争（叫"既成国界"原则）。
结果今天非洲很多内战、族群冲突的根，能一直追回那张桌子。
（和 world-war-one-1914 里印巴分治划界是同一个母题：在地图上替别人划线，
后果要别人扛几十年甚至上百年。）

**③ 榨取经济的延续**
从刚果橡胶，到今天的钴矿——
钴是电动车电池的原料，刚果民主共和国（DRC）是全球钴矿中心。
"工业需求 → 掠取非洲资源"这条链一直没断。你手机电池里可能就有刚果的钴。

**④ "危害人类罪"概念**
Williams 在 1890 公开信里是**最早系统使用之一**了"crimes against humanity（危害人类罪）"
这个说法，让它广为人知。
注意：不是说他"首次发明"这个词——这个短语之前有零散使用；
它成为成型的国际法概念，是 20 世纪纽伦堡审判才确立的。
但 Williams 用它的方式，是揭发留下的正面遗产。

**反 Whig 收尾**：
所以"欧洲给非洲带来文明"是彻底的谎。
真实的长期遗产是：被劈裂的国界、延续的资源榨取、还有一套揭发暴行的方法论。`,
        en: `Both Leopold's story and the villager's story show the Berlin Conference "drawing lines with a ruler," but the AP also tests a fuller chain of long-term consequences, which I've organized on this card.

**① Carelessly drawn borders (the highest-frequency long-tail point)**
At the Berlin Conference and in the partition that followed, Europeans drew lines on a map with a ruler, paying no attention to which peoples lived on the ground or what languages they spoke.
One straight line might split a people in two, or pen two feuding peoples into one country.
**Many of the ruler-straight borders on Africa's map today were drawn back then.**

**② These lines did not go away**
When Africa became independent in the 1960s, the new nations were forced to **inherit** these colonial borders — because redrawing them would trigger even bigger wars (the "inherited borders" principle).
As a result, the roots of many of Africa's civil wars and ethnic conflicts today trace all the way back to that table.
(The same pattern appears in world-war-one-1914 / the India-Pakistan partition: drawing someone else's lines on a map, and others bear the consequences for decades or even a century.)

**③ The continuation of extraction economics**
From Congo rubber to today's cobalt — cobalt is the raw material for electric-vehicle batteries, and the DRC is the world's cobalt center.
The chain of "industrial demand → plundering African resources" has never broken. There may be Congolese cobalt in your phone battery right now.

**④ The "crimes against humanity" concept**
In his 1890 open letter, Williams was **among the earliest to systematically use** the phrase "crimes against humanity" and helped make it widely known.
Note: this does not mean he "invented" the phrase — it had scattered earlier uses; it became a formed concept in international law only at the 20th-century Nuremberg trials.
But his use of it is a positive legacy of the whistleblowing.

**Anti-Whig close:**
So "Europe brought civilization to Africa" is an outright lie.
The real long-term legacy is: borders that split peoples apart, resource extraction that continued, and a methodology for exposing atrocity.`,
      },
      xiaoweiNote: {
        cn: `老师说写"长期影响"的 essay，记住四条就够：
**① 国界（最重要）→ ② 独立后继承 → ③ 资源榨取（橡胶到钴）→ ④ "危害人类罪"概念**。
第一条几乎必考。

注意措辞陷阱：写 Williams 和 "crimes against humanity" 时，
要写"最早系统使用之一/让它广为人知"，
**不要写"首次使用/首创"**——那个说法过头了，会被扣分。`,
        en: `Teacher said for a "long-term effects" essay, four points are enough:
**① borders (most important) → ② inherited after independence → ③ resource extraction (rubber to cobalt) → ④ the "crimes against humanity" concept.**
The first point is almost always tested.

Wording trap: when writing about Williams and "crimes against humanity," write "among the earliest to systematically use it / helped make it widely known" — **do not write "first used it / coined it."** That overstates it and loses points.`,
      },
    },

    {
      id: 'contemporary-china-partition',
      termCn: '同代中国：列强也在瓜分中国',
      termEn: 'Contemporary China: The Carving-Up of China',
      defCn: '1870-1914 年，同一套"新帝国主义"逻辑同时压在中国头上：1895 年甲午战争后，列强在中国划"势力范围"、设租界、签不平等条约——跟瓜分非洲是同一种动作，同一个时代。',
      defEn: 'From 1870 to 1914, the same "new imperialism" logic was pressing down on China at the same time: after the 1895 First Sino-Japanese War, the powers carved China into "spheres of influence," set up treaty ports, and signed unequal treaties — the same moves, the same era as the Scramble for Africa.',
      standardRef: ['AP World KC-6.2', 'AP World KC-6.3'],
      examFrequency: 'medium',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `1870-1914 年正是晚清。同一套"新帝国主义"逻辑，也压在中国头上：

- 1895 年甲午战争后，列强掀起"瓜分中国"狂潮，在地图上划"势力范围"——
  跟柏林会议上瓜分非洲是同一种动作。
- 租界、租借地、不平等条约：列强在中国攫取特权，与在非洲攫取土地同出一源。

两种极端都不能写：
- 不能说"中国和非洲落后挨打，是因为没现代化"——这是把暴行归咎于受害者。
- 也不能说"西方天生贪婪，东方天生受害"——这抹掉了各方内部的揭发者与反抗者
  （中国有义和团、辛亥革命；欧美有 Williams 和 Casement）。

中性结论：新帝国主义是工业化、民族主义与种族等级论合力的产物；
受害的一方既被侵略也在反抗，施暴的一方内部也有人揭发。
历史的复杂性在各方都成立。`,
        en: `1870-1914 was the late Qing era. The same "new imperialism" logic was pressing down on China at the same time:

- After the 1895 First Sino-Japanese War, the powers launched a scramble to carve China into "spheres of influence" — the exact same move as drawing lines across Africa at the Berlin Conference.
- Treaty ports, leased territories, unequal treaties: the powers extracted privileges in China the same way they extracted land in Africa.

Two extremes to avoid:
- Don't write "China and Africa were beaten because they weren't modernized" — that blames the victim for the crime.
- Don't write "the West was inherently greedy, the East was purely victimized" — that erases the whistleblowers and resisters on every side (China had the Boxer Uprising and the 1911 Revolution; Williams and Casement came from the West).

Neutral conclusion: new imperialism was the product of industrialization, nationalism, and racial hierarchy theory working together. The victimized side was both invaded and resisting; even within the aggressor side, people spoke out. Historical complexity holds on every side.`,
      },
      xiaoweiNote: {
        cn: `这张卡对华裔学生特别有感——"瓜分非洲"和"瓜分中国"不是两件事，
是同一套逻辑在两个大洲同时上演。
你家里的历史课本可能把这段叫"帝国主义侵华"，美国课本叫"新帝国主义"，
名字不同，说的是同一件事。`,
        en: `This card hits differently for Chinese-heritage students — "the Scramble for Africa" and the "carving up of China" aren't two separate things. They're the same logic playing out on two continents at the same time.
Your family's history textbook might call this "imperialist aggression against China"; the American textbook calls it "new imperialism." Different name, same event.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Leopold 在 1876 年说他去刚果是为了"反对奴隶贩子、把文明带给那里的人"——
但就在同一片非洲大陆，几百年前就有过 Mali 帝国，14 世纪的 Timbuktu 是世界知识中心之一。

如果"非洲早就有文明"是事实，那 Leopold 那套"带来文明"的说法，
到底是他真心相信的，还是明知是假、故意用来骗钱博掌声的？
这两种解读，会不会都有一部分对？`,
      en: `In 1876 Leopold said he was going to the Congo to "fight the slave traders and bring civilization to its people" — but on that same continent, centuries earlier, there had been the Mali Empire, and in the 1300s Timbuktu was one of the world's centers of learning.

If "Africa already had civilizations" is a fact, then was Leopold's "bringing civilization" something he sincerely believed, or something he knew was false and used on purpose to raise money and win applause? Could both readings be partly right?`,
      hintCn: `两个角度都想一想：
① 社会达尔文主义当时被很多欧洲人当"科学"信，所以 Leopold 可能真心觉得欧洲更"高级"、自己在做好事，压根看不见 Mali 这种反例；
② 或者他心里清楚是借口，只是这个借口太好用——能筹款、能博掌声、能让全世界不追问。
故事里他自己有一句反思："当全世界都信了你的漂亮话，连你自己会不会也开始半信半疑？"

进阶思考：一个人"真心相信一个让自己得利的谎"，比"明知是谎还说"，是更可怕，还是没那么可怕？`,
      hintEn: `Think from two angles:
① Social Darwinism was believed as "science" by many Europeans then, so Leopold may have sincerely felt Europe was "superior" and that he was doing good — genuinely blind to a counterexample like Mali;
② Or he knew it was an excuse, but the excuse was just too useful — it raised money, won applause, and kept the world from asking questions. In the story he reflects: "when the whole world has believed your fine words, might even you begin, half-believing?"

Going deeper: is a person who "sincerely believes a lie that benefits them" more frightening than one who "knows it's a lie and says it anyway" — or less?`,
      conceptsActivated: ['civilizing-mission-social-darwinism', 'congo-free-state-leopold'],
    },
    {
      id: 'q2',
      cn: `George Washington Williams 揭发了 Leopold，但没扳倒他——
写完公开信不到一年就病死了，没看到任何改变，刚果又运转了 17 年。
如果只看他活着时的结果，他"失败"了。

可后来的人——传教士拍的照片、Casement 的官方调查报告、那场国际运动——
接着他的方法做下去，最终 1908 年 Leopold 被迫交出刚果。

那么：一个揭发者"看起来失败了"，但他点的火后来烧起来了——这算成功还是失败？
"有没有亲眼看到结果"是衡量一件事有没有意义的标准吗？`,
      en: `George Washington Williams exposed Leopold but did not bring him down — he died of illness less than a year after writing the open letter, never seeing any change. The Congo ran on for 17 more years. Looking only at the result in his lifetime, he "failed."

Yet the people after him — missionary photographs, Casement's official report, the international movement — carried on his method, and in the end Leopold was forced to give up the Congo in 1908.

So: a whistleblower who "looks like a failure," but whose fire later caught — is that success or failure? Is "seeing the result yourself" the measure of whether something mattered?`,
      hintCn: `可以想"证据接力"这个角度——故事里 Williams 说"一个人的证据可能很弱，可证据是会接力的"。
他不是孤立的一环：前面有 1492 年后揭发殖民屠杀的 Las Casas（见 age-of-exploration-1492），
后面有 Casement、有 20 世纪争民权的人。
也许有些事，注定是"先点火的人看不到火烧起来"的。

进阶思考：你做一件对的事，但很可能这辈子看不到它有结果——你还会做吗？
是什么让一个人愿意做"自己看不到结尾"的事？`,
      hintEn: `Consider the "relay of evidence" angle — in the story Williams says "one person's evidence may be weak on its own, but evidence runs a relay."
He wasn't an isolated link: before him was Las Casas, who exposed colonial slaughter after 1492 (see age-of-exploration-1492); after him came Casement and the 20th-century fighters for civil rights.
Maybe some things are destined for "the one who lights the fire never to see it catch."

Going deeper: if you do a right thing but will very likely never see its result in your lifetime, would you still do it? What makes a person willing to do something whose ending they'll never see?`,
      conceptsActivated: ['borders-long-tail-consequences', 'congo-free-state-leopold', 'african-resistance'],
    },
    {
      id: 'q3',
      cn: `Leopold 从没踏上过非洲一步，从没亲手砍过一只手。
他做的，是坐在四千公里外的宫殿里定配额、看账本。
亲手砍手的，是在配额压力和子弹问责制下的殖民军士兵。

故事里 Leopold 自己说："施暴的人，可以离暴行很远很远，远到自己都觉得清白。"

那么：Leopold 的罪，比那些亲手砍手的士兵更轻，还是更重？
"离暴行远"和"无辜"，是一回事吗？`,
      en: `Leopold never set foot in Africa, never cut off a single hand with his own hands.
What he did was sit in a palace four thousand kilometers away, set quotas, and read ledgers.
The ones who did the cutting were colonial soldiers operating under quota pressure and the bullet-accounting system.

In the story Leopold himself says: "the man who inflicts the violence can stand very, very far from it — far enough that he feels innocent himself."

So: is Leopold's guilt lighter than that of the soldiers who did the cutting, or heavier?
Are "far from the violence" and "innocent" the same thing?`,
      hintCn: `两边都想一想：
① 设计制度的人责任更重，因为是他造出了"逼人砍手"的整套系统——没有配额和子弹问责，士兵不会去砍；
② 但亲手做的人也不是机器，他们本可以拒绝。
责任也许不是"非此即彼"，而是一条从宫殿到森林、每个环节都有份的链。

注意一个事实：写这道题别把刚果说成"比利时的殖民地"——
1885-1908 它是 Leopold **个人**的私人产业，1908 年才转给比利时。
这个区别正好和"谁该负责"这道题有关。

进阶思考：今天的世界里，"决策的人离后果很远"的结构还存在吗？
（比如：下单的人、写算法的人、按开关的人——离真正承受后果的人很远很远。）`,
      hintEn: `Think from both sides:
① The one who designs the system bears heavier responsibility — he built the whole machine that "forces people to cut off hands." Without quotas and bullet-accounting, the soldiers wouldn't have done it;
② But the ones who did it by hand were not machines either — they could have refused.
Responsibility may not be "either/or," but a chain from palace to forest in which every link has a share.

One factual note: don't call the Congo "a Belgian colony" in your answer — from 1885 to 1908 it was Leopold's **personal** private property, transferring to Belgium only in 1908. That distinction is directly relevant to the "who is responsible" question.

Going deeper: in today's world, does the structure of "decision-makers far from the consequences" still exist? (For example: the one who places the order, the one who writes the algorithm, the one who flips the switch — all very far from the people who actually bear the consequences.)`,
      conceptsActivated: ['congo-free-state-leopold', 'rubber-extraction-economy', 'civilizing-mission-social-darwinism'],
    },
  ],
};

export default notebook;
