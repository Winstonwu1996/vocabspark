// ─── 同伴笔记本架构 v1 · Scramble for Africa 1884 ──────────────
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
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师说我们学"瓜分非洲"（1870-1914）。她先提醒一句：这一章很沉重，
里面有真实发生过的暴行。她说"我们直面它，但不是为了猎奇——是为了看懂它怎么发生的"。

她给了一张纸，上面写着这些名字：

Leopold II（利奥波德二世）、George Washington Williams（乔治·华盛顿·威廉斯）、
Stanley（斯坦利）、Roger Casement（凯斯门特）

还有一串词：Berlin Conference（柏林会议）、Congo Free State（刚果自由邦）、
civilizing mission（文明使命）、Social Darwinism（社会达尔文主义）、
direct vs indirect rule（直接统治 vs 间接统治）、Maxim gun（马克沁机枪）。

我先记下来，等下读三个故事——Leopold、Williams、还有一个刚果橡胶村民——
读完再回来对照这张单子，看我能不能解释每一个词。

老师还说了一句我抄在第一页：
"不要只记暴行有多惨，要记三件事——他们为什么去（动因）、他们怎么包装（修辞）、
后来谁揭穿了（揭发）。AP 不考你哭，考你能不能分析。"`,
    en: `Today my teacher said we're learning the "Scramble for Africa" (1870-1914).
She warned us first: this chapter is heavy, with real atrocities in it. She said,
"We face it directly, but not for shock value — to understand how it happened."

She gave us a sheet with these names:

Leopold II, George Washington Williams, Stanley, Roger Casement

And a list of terms: Berlin Conference, Congo Free State,
civilizing mission, Social Darwinism,
direct vs indirect rule, the Maxim gun.

Let me write these down. After I read the three stories
(Leopold, Williams, and a Congo rubber villager), I'll come back
and check whether I can explain each one.

Teacher also said something I copied to the first page:
"Don't just remember how terrible the atrocities were — remember three things:
why they went (motives), how they packaged it (rhetoric), and who exposed it
(the whistleblowers). The AP doesn't test whether you cry; it tests whether you can analyze."`,
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
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'berlin-conference',
      termCn: '柏林会议 1884-85',
      termEn: 'Berlin Conference 1884-85',
      standardRef: ['AP World Modern Unit 6.2', 'AP Euro Unit 7', 'CA HSS 10.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'leopold-ii',
        nodeIds: ['leo-n4', 'leo-n9'],
        xiaoweiNote: {
          cn: `这个我读过！在 Lens 1 第 4 节，Leopold 雇 Stanley 跟不识字的酋长一个村一个村签"条约"，
然后 1884-85 年欧洲列强在柏林开会，对着一张非洲地图商量怎么瓜分整块大陆——
桌上一个非洲人都没有。会上他们承认了 Leopold 对刚果的控制。

老师说这是本章**最高频考点**，几乎每年都考，要记住三个点：
（1）1884-85，14 个欧洲国家；（2）桌上没有一个非洲人；（3）它主要是定**瓜分的规则**
（"有效占领"原则），不是当场把所有线都画完——实际瓜分是会后 20 多年逐步完成的。

careful framing（这点 DBQ 会用）：会议把瓜分包装成"和平协商、避免列强战争"，
听起来很文明——可被瓜分的人一个都不在场。这就是"替别人决定命运、却不让他在场"。`,
          en: `I read this! In Lens 1 Node 4, Leopold hired Stanley to sign "treaties" with
illiterate chiefs village by village, and then in 1884-85 the European powers met at Berlin,
worked out how to carve up the whole continent over a map of Africa — with not one African
at the table. There they recognized Leopold's control of the Congo.

Teacher said this is the chapter's **most frequently tested** concept — almost every year.
Remember three points: (1) 1884-85, 14 European countries; (2) not one African at the table;
(3) it mainly set the **rules** for partition (the "effective occupation" principle), it didn't
draw every line on the spot — the actual partition unfolded over the 20-plus years after.

Careful framing (DBQ uses this): the conference packaged partition as "peaceful negotiation
to avoid a war among the powers," which sounds civilized — yet none of the people being
partitioned were present. That's "deciding someone's fate while not letting them in the room."`,
        },
      },
    },

    {
      id: 'congo-free-state-leopold',
      termCn: '刚果自由邦 / 利奥波德二世',
      termEn: 'Congo Free State / Leopold II',
      standardRef: ['AP World Modern Unit 6.4', 'CA HSS 10.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'leopold-ii',
        nodeIds: ['leo-n1', 'leo-n4', 'leo-n5', 'leo-n8'],
        xiaoweiNote: {
          cn: `Lens 1 整条线就是他。重点时间：
- 1865 继位比利时国王 → 1876 布鲁塞尔地理大会（"文明"面具）
- 1885 拿到刚果，取名 Congo Free State（刚果自由邦）
- 1908 被迫交给比利时政府 → 1909 死前烧档案三天

考点关键句（老师说一定会考一个"陷阱选项"）：1885-1908 年的刚果自由邦
**是 Leopold 个人的私人产业，不是比利时国家的殖民地**。1908 年才转交比利时。
"Congo Free State"里的"Free"是反讽——它对生活在那里的人一点都不自由。

careful framing：Leopold **从没踏上过非洲一步**，整个刚果靠隔着四千公里的账本运转。
他设的是配额制度，亲手砍手的是殖民军——但"离暴行远"不等于"无罪"。
（橡胶配额逼迫的真相，看下一张卡 + 你在村民那一遍读到的。）`,
          en: `Lens 1 is entirely about him. Key timeline:
- 1865 became King of Belgium → 1876 Brussels geographical conference (the "civilization" mask)
- 1885 got the Congo, named it the Congo Free State
- 1908 forced to hand it to the Belgian government → 1909 burned the archives for three days before he died

Key exam sentence (Teacher says there's always a "trap option" on this): from 1885 to 1908
the Congo Free State **was Leopold's personal private property, not a colony of the Belgian state.**
It only transferred to Belgium in 1908. The "Free" in "Congo Free State" is bitter irony —
it was not free at all for the people who lived there.

Careful framing: Leopold **never set foot in Africa**; the whole Congo ran on a ledger
four thousand kilometers away. He set up the quota system; the colonial soldiers did the cutting —
but "far from the violence" does not equal "innocent." (The truth of the rubber quota forcing —
see the next card + what you read in the villager's pass.)`,
        },
      },
    },

    {
      id: 'rubber-extraction-economy',
      termCn: '橡胶榨取经济 / 配额暴政',
      termEn: 'Rubber Extraction Economy / Quota Atrocity',
      standardRef: ['AP World Modern Unit 6.4', 'AP Euro Unit 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'congo-rubber-villager-receiving-end',
        nodeIds: ['vil-n3', 'vil-n5', 'leo-n5', 'leo-n6'],
        xiaoweiNote: {
          cn: `这条线三个 lens 都讲到：Leopold 那边是账本上的数字，村民那边是地上的代价。

考点关键句：这是**经济帝国主义（economic imperialism）**的典型——
工业革命让远方的汽车、自行车需要橡胶（1890s 充气轮胎热），刚果雨林的野生藤蔓
就成了"金矿"。Leopold 用**配额制度**逼村民采胶：每村定额、定期交够，完不成就惩罚。

逼迫机制（DBQ 高频）：
- 抓村里的女人孩子当**人质**，逼男人进林子采胶来赎；
- 殖民军（Force Publique）给士兵发子弹，长官要他们交回证据"证明子弹没浪费"——
  砍下被打死者的手交差。慢慢地，**一只手变成一种货币，抵一份没完成的配额**。

careful framing（措辞要小心）：1904 年传教士 Alice Seeley Harris 拍的那张著名照片，
是一个父亲 Nsala 盯着他**被杀害**的 5 岁女儿 Boali 被砍下的**手和脚**——
那是一个被害孩子的遗体，不是"砍手后活下来"的例子。这两类制度上都存在，但别混成一类。
我把这点记下来，因为写 essay 用错了细节会被扣分。`,
          en: `All three lenses touch this line: on Leopold's side it's numbers on a ledger,
on the villager's side it's the price on the ground.

Key exam sentence: this is the textbook case of **economic imperialism** —
the Industrial Revolution made faraway cars and bicycles need rubber (the 1890s pneumatic-tire boom),
so the wild vines of the Congo rainforest became a "gold mine." Leopold used a **quota system**
to force villagers to gather rubber: each village a fixed amount, due on schedule, punished if unmet.

The forcing mechanism (high-frequency DBQ):
- seizing the village's women and children as **hostages**, forcing the men into the forest
  to gather rubber to ransom them;
- the colonial army (Force Publique) issued bullets and ordered soldiers to bring back proof
  "that no bullet was wasted" — so they cut off the hands of those they shot to account for them.
  Slowly, **a hand became a kind of currency, one for an unmet quota.**

Careful framing (be careful with the wording): the famous 1904 photograph by missionary
Alice Seeley Harris shows a father, Nsala, staring at the **hand and foot** cut from his **murdered**
5-year-old daughter Boali — that is the body of a killed child, not an example of "surviving after
a hand was cut off." Both types existed in that system, but don't merge them into one. I noted this
because using the wrong detail in an essay loses points.`,
        },
      },
    },

    {
      id: 'civilizing-mission-social-darwinism',
      termCn: '文明使命 / 社会达尔文主义',
      termEn: 'Civilizing Mission / Social Darwinism',
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
        cn: `"文明使命"（civilizing mission）是新帝国主义最核心的**意识形态**——
故事里你已经看过它怎么运作（Leopold 用它筹款博掌声、村里收到的是砍下的手、
Williams 把它翻过来揭发）。这张卡补的是它背后的**伪科学根**：社会达尔文主义。

**civilizing mission（文明使命）**：殖民者把侵略包装成"给落后地区带去文明、信仰、进步"
的说法。法国人叫它 mission civilisatrice，英国人有句诗叫 "the white man's burden"
（白人的负担，Kipling 1899）——意思是"统治殖民地是白人的高尚责任"。

**Social Darwinism（社会达尔文主义）**：把达尔文"适者生存"从生物学**误用**到人类社会和种族上，
推出"欧洲白人是更高级的种族，所以有权也有责任统治别人"。注意——这是**伪科学**，
达尔文本人的进化论根本不是这个意思，是后人扭曲来给殖民和种族等级论找借口。

两者怎么配合：社会达尔文主义提供"我们更高级"的伪科学**论据**，
文明使命提供"所以我们去帮你们"的道德**包装**。一个负责讲"为什么我们有资格"，
一个负责讲"所以这是好事"。合起来，就把赤裸裸的抢夺，洗成了一桩高尚的事业。

🔗 跨 Topic：这套话术不是 1876 才发明的。1492 年 Columbus 到美洲，殖民者就说去"教化"
原住民（见 age-of-exploration-1492 那个 Topic）。四百年后 Leopold 原样搬到非洲——
同一套"文明"修辞，用了快四百年。

🔗 反 Whig（一定要记）：这套话术第一步就是把非洲说成"黑暗""没有文明"。
可同一片非洲，几百年前有 Mali 帝国，14 世纪 Timbuktu 是世界知识中心之一
（见 mali-empire-1235）。非洲从来不是"等着被文明拯救的空白"。`,
        en: `The "civilizing mission" is the core **ideology** of the New Imperialism —
you've already seen it work in the story (Leopold used it to raise money and win applause,
the village received the severed hand, Williams turned it around to expose him). This card
fills in its **pseudo-scientific root**: Social Darwinism.

**Civilizing mission**: the colonizers' framing of invasion as "bringing civilization, faith,
and progress to backward regions." The French called it the mission civilisatrice; the English
had a poem, "the white man's burden" (Kipling, 1899), meaning "ruling colonies is the noble
duty of the white man."

**Social Darwinism**: the **misuse** of Darwin's "survival of the fittest" from biology onto
human societies and races, producing the claim that "white Europeans are a higher race, so they
have both the right and the duty to rule others." Note — this is **pseudo-science.** Darwin's
actual theory of evolution means nothing of the sort; later people twisted it to make an excuse
for colonialism and racial hierarchy.

How the two work together: Social Darwinism supplies the pseudo-scientific **argument** ("we are
higher"), the civilizing mission supplies the moral **packaging** ("so we go to help you"). One
handles "why we are entitled," the other handles "so this is a good thing." Together, they wash
naked plunder into a noble enterprise.

🔗 Cross-topic: this rhetoric was not invented in 1876. When Columbus reached the Americas in 1492,
the colonizers said they came to "civilize" the natives (see the age-of-exploration-1492 topic).
Four centuries later Leopold lifted it unchanged into Africa — the same "civilization" rhetoric,
used for nearly four hundred years.

🔗 Anti-Whig (must remember): the first move of this rhetoric is to call Africa "dark" and
"without civilization." But this same Africa had the Mali Empire centuries earlier, and in the
1300s Timbuktu was one of the world's centers of learning (see mali-empire-1235). Africa was
never "a blank waiting to be saved by civilization."`,
      },
      xiaoweiNote: {
        cn: `老师强调：考"动因/意识形态"的题，要把 civilizing mission 和 Social Darwinism 一起写——
一个是道德面具，一个是伪科学论据。记忆口诀：**社达讲"我们高级"，文明使命讲"所以来帮你"**。

DBQ 一定要写一句反 Whig 的话："这套'带文明'的说法本身就是谎，因为非洲早有 Mali、
Timbuktu 这样的文明。"——这句话能直接拿分。`,
        en: `Teacher emphasized: on questions about "motives/ideology," write civilizing mission and
Social Darwinism together — one is the moral mask, the other the pseudo-scientific argument.
Mnemonic: **Social Darwinism says "we're higher," the civilizing mission says "so we come to help you."**

A DBQ must include an anti-Whig line: "the very claim of 'bringing civilization' was a lie,
because Africa already had civilizations like Mali and Timbuktu." That sentence scores directly.`,
      },
    },

    {
      id: 'maxim-gun-technology-gap',
      termCn: '马克沁机枪 / 技术差',
      termEn: 'Maxim Gun / Technology Gap',
      standardRef: ['AP World Modern Unit 6.2', 'AP Euro Unit 7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'congo-rubber-villager-receiving-end', nodeId: 'vil-n7', context: '村民拿长矛对殖民军的枪，明知打不过还打' },
        ],
      },
      standaloneText: {
        cn: `故事里村民说"他们有枪、有大炮，我们只有长矛"（村民那一遍第 7 节）——
这张卡补的是这道"技术差"背后到底是什么，以及它为什么重要。

为什么 1870 年以后欧洲能这么快瓜分非洲？三样东西凑齐了，缺一不可：

1. **奎宁（quinine）**：抗疟疾药。在这之前，赤道非洲的疟疾挡了欧洲人几百年，
   深入内陆等于送死。奎宁普及后，欧洲人才能活着走进非洲腹地。（先解决"进得去"。）

2. **蒸汽船 + 铁路 + 电报**：能逆流而上深入河道、快速运兵运货、瞬间传令。
   （再解决"控得住"。）

3. **Maxim gun（马克沁机枪，1884）**：世界上第一款全自动机枪，一分钟能打几百发。
   它让一小队欧洲军队，能压制人数多得多的非洲军队。（最后解决"打得过"。）

老师讲过一句很有名的诗，专门讽刺这件事：
"Whatever happens, we have got / The Maxim gun, and they have not."
（不管怎样，我们有马克沁机枪，他们没有。）——一句话点破：所谓"文明的胜利"，
很大程度上其实是"火力的碾压"。

考点关键句：**新帝国主义的速度和规模，是工业革命的技术（奎宁+蒸汽+机枪）撑起来的。**
没有这套技术，"瓜分非洲"根本不可能在几十年里完成。

careful framing：技术差解释了"为什么打得过"，但**不能**用来论证"所以殖民是对的/进步的"。
"我有更强的武器"从来不等于"我有权统治你"。这是 DBQ 常设的陷阱——别把"能"写成"该"。`,
        en: `In the story the villager says "they had guns and cannon, we had only spears"
(villager's pass, Node 7) — this card fills in what that "technology gap" actually was,
and why it matters.

Why could Europe carve up Africa so fast after 1870? Three things came together, none optional:

1. **Quinine**: an anti-malaria drug. Before it, malaria in equatorial Africa held Europeans off
   for centuries; going inland meant death. Once quinine spread, Europeans could survive going into
   the African interior. (First solves "getting in.")

2. **Steamships + railways + the telegraph**: going upriver deep into the waterways, moving troops
   and goods fast, sending orders in an instant. (Then solves "holding it.")

3. **The Maxim gun (1884)**: the world's first fully automatic machine gun, hundreds of rounds a
   minute. It let a small European force overpower a far larger African one. (Finally solves
   "winning the fight.")

Teacher quoted a famous mocking couplet about exactly this:
"Whatever happens, we have got / The Maxim gun, and they have not." — one line that exposes it:
the so-called "triumph of civilization" was, in large part, the crushing of firepower.

Key exam sentence: **the speed and scale of the New Imperialism rested on Industrial-Revolution
technology (quinine + steam + machine gun).** Without this kit, the "Scramble for Africa" could
never have been finished in a few decades.

Careful framing: the technology gap explains "why they won the fight," but it **cannot** be used
to argue "so colonialism was right/progressive." "I have a stronger weapon" never equals "I have
the right to rule you." This is a common DBQ trap — don't turn "could" into "should."`,
      },
      xiaoweiNote: {
        cn: `我的记忆口诀：**进得去（奎宁）→ 控得住（蒸汽船/铁路/电报）→ 打得过（马克沁机枪）**。
三步缺一不可。如果题目问"为什么 1870 年后瓜分非洲突然加速"，答案是工业技术，不是"非洲变弱了"。`,
        en: `My mnemonic: **get in (quinine) → hold it (steamships/railways/telegraph) → win the fight
(Maxim gun).** Three steps, none skippable. If the question asks "why the Scramble suddenly sped up
after 1870," the answer is industrial technology — not "Africa got weaker."`,
      },
    },

    {
      id: 'direct-vs-indirect-rule',
      termCn: '直接统治 vs 间接统治',
      termEn: 'Direct vs Indirect Rule',
      standardRef: ['AP World Modern Unit 6.2', 'AP Euro Unit 7', 'CA HSS 10.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这个考点故事里没有专门讲（刚果自由邦是个特殊的极端案例），但 AP 必考——
因为它问的是"列强拿到殖民地以后，到底**怎么管**"。两种主要模式：

**直接统治（direct rule）**：殖民者派自己的官员，直接管理殖民地，套用宗主国的法律、
语言、行政制度，绕开或拆掉当地原有的统治结构。代表：**法国**（在西非推行法语、法国行政）。
- 好处（对殖民者）：控制更彻底、更"统一"。
- 代价：要派大量人手、花大钱，而且更激起当地反抗。

**间接统治（indirect rule）**：殖民者保留当地原有的酋长、国王、传统权威，
让他们替殖民者收税、维持秩序——殖民者躲在幕后操控。代表：**英国**（尤其在尼日利亚，
Frederick Lugard 总结成一套理论）。
- 好处（对殖民者）：省人省钱，借当地权威的"合法性"统治。
- 代价：让本地精英变成殖民者的工具，埋下后来族群矛盾的种子。

刚果属于哪种？都不算典型——Leopold 的刚果自由邦是更极端的"**特许公司 + 配额暴力**"
榨取模式（私人产业，目标纯粹是橡胶利润），比法国的直接统治还要赤裸。
这正好说明：新帝国主义的"统治方式"不是只有两种标准答案，而是一个光谱。

🔗 长尾后果：间接统治把某些族群抬成"代理人"、压低另一些族群，
加上下一张卡讲的"乱划国界"，一起埋下了今天非洲很多族群冲突的根。`,
        en: `The story doesn't cover this concept directly (the Congo Free State was a special,
extreme case), but the AP always tests it — because it asks "once the powers had a colony,
how did they actually **govern** it?" Two main models:

**Direct rule**: the colonizer sends its own officials to govern the colony directly, imposing
the mother country's laws, language, and administration, bypassing or dismantling the local
existing power structure. Example: **France** (pushing French language and administration in West
Africa).
- Upside (for the colonizer): more thorough, more "uniform" control.
- Cost: requires many personnel and much money, and provokes more local resistance.

**Indirect rule**: the colonizer keeps the local existing chiefs, kings, and traditional
authorities and uses them to collect taxes and keep order — controlling from behind the scenes.
Example: **Britain** (especially in Nigeria, where Frederick Lugard turned it into a theory).
- Upside (for the colonizer): saves personnel and money, governs by borrowing local authorities'
  "legitimacy."
- Cost: turns local elites into tools of the colonizer, sowing seeds of later ethnic conflict.

Which type was the Congo? Neither was typical — Leopold's Congo Free State was a more extreme
**"concession company + quota violence"** extraction model (private property, the goal purely
rubber profit), even more naked than France's direct rule. This shows that the New Imperialism's
"modes of rule" were not just two standard answers, but a spectrum.

🔗 Long-tail consequence: indirect rule raised some ethnic groups into "agents" and pushed others
down, and together with the "carelessly drawn borders" in the next card, helped sow the roots of
many of today's ethnic conflicts in Africa.`,
      },
      xiaoweiNote: {
        cn: `记忆口诀：**法国直接（派自己人 + 推法语），英国间接（留本地酋长当代理）**。
老师说一定要会比较两者的"好处 vs 代价"——选择题爱考"哪个更省钱"（间接）、
"哪个更激起反抗"（直接）。

注意陷阱：刚果不是这两种的典型，是更极端的私人榨取模式。如果题目拿刚果当"间接统治例子"，
那是错的。`,
        en: `Mnemonic: **France = direct (sends its own people + pushes French), Britain = indirect
(keeps local chiefs as agents).** Teacher said you must be able to compare their "upsides vs costs" —
multiple choice loves "which is cheaper" (indirect) and "which provokes more resistance" (direct).

Watch the trap: the Congo was not a typical case of either; it was a more extreme private-extraction
model. If a question uses the Congo as an "example of indirect rule," that's wrong.`,
      },
    },

    {
      id: 'african-resistance',
      termCn: '非洲人的反抗',
      termEn: 'African Resistance',
      standardRef: ['AP World Modern Unit 6.3', 'CA HSS 10.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'congo-rubber-villager-receiving-end',
        nodeIds: ['vil-n7'],
        xiaoweiNote: {
          cn: `这个在村民那一遍第 7 节讲到了：刚果人不是被动受着——有人逃进林子最深处、
有的村子拿长矛对枪明知打不过还打、有人偷偷给人质送吃饭帮逃跑的人带路。
但他们有枪炮和整套制度，村民只有长矛和人命，多数反抗很快被镇压，镇压后配额更重、砍手更多。

考点关键句（AP World Unit 6.3 就叫 "Indigenous Responses to Imperialism" / 本土回应）：
**被殖民者从来不是只会承受——抵抗一直存在。** 故事讲的是刚果的小规模村级反抗，
但 AP 还会考几个**大规模**的例子，最好记住：
- **埃塞俄比亚**：1896 年 Adwa（阿杜瓦）战役打败意大利，是非洲**唯一**成功抵御欧洲殖民、
  保住独立的国家（连同利比里亚，1914 年全非洲只有这两块没被殖民）。这是必考亮点。
- **南非祖鲁王国**：1879 年 Isandlwana（伊散德尔瓦纳）一战重创英军，虽最终被征服，
  但证明非洲军队能打赢装备更好的欧洲军队。

careful framing（这点老师特别强调）：村民那一遍有句话——"沉默不等于认命，
很多时候沉默只是因为开口的人已经被打死了"。写 essay 不要把非洲人写成纯被动受害者，
那是旧史观；现代非洲史强调他们的 agency（能动性）：反抗、适应、协商，他们都做过。`,
          en: `This is covered in the villager's pass, Node 7: the Congolese were not passive —
some fled into the deepest forest, some villages fought guns with spears knowing they couldn't win,
some secretly brought food to hostages and guided those fleeing. But the colonizers had guns,
cannon, and a whole system; the villagers had only spears and lives. Most resistance was crushed
quickly, and after it the quota grew heavier and more hands were taken.

Key exam sentence (AP World Unit 6.3 is literally "Indigenous Responses to Imperialism"):
**the colonized were never only enduring — resistance was always there.** The story shows the
Congo's small-scale village resistance, but the AP also tests several **large-scale** examples,
best to memorize:
- **Ethiopia**: defeated Italy at the Battle of Adwa in 1896, the **only** nation to successfully
  resist European colonization and keep its independence (along with Liberia, these were the only
  two parts of Africa not colonized by 1914). This is a must-know highlight.
- **The Zulu Kingdom (South Africa)**: at Isandlwana in 1879 it dealt the British army a heavy blow;
  though ultimately conquered, it proved African forces could beat better-equipped European armies.

Careful framing (Teacher especially stressed this): the villager's pass has a line — "silence is
not the same as resignation; often, silence is only because the ones who spoke up had already been
killed." In an essay, don't write Africans as purely passive victims — that's the old historical
view; modern African history stresses their agency: they resisted, adapted, and negotiated.`,
        },
      },
    },

    {
      id: 'borders-long-tail-consequences',
      termCn: '长尾后果 / 殖民国界与冲突',
      termEn: 'Long-Tail Consequences / Borders & Conflict',
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
        cn: `这个故事里讲到了"国界"那部分（Leopold 那一遍第 9 节 + 村民那一遍第 9 节都讲到
柏林会议用尺子划线），但 AP 还会考更完整的"长期后果链"，我把它整理在这张卡上。

**1. 乱划的国界（最高频的长尾考点）**：柏林会议和会后瓜分时，欧洲人对着地图用尺子划线，
根本不看地上住的是哪个族群、说哪种话。一条直线可能把一个民族劈成两半，
也可能把世仇的两族硬塞进同一个国家。**今天非洲地图上那些笔直的国界线，很多就是那时候划的。**

**2. 这些线没消失**：1960 年代非洲独立时，新国家被迫**继承**这些殖民国界
（"既成国界"原则）——因为重划会引发更大的战争。结果今天非洲很多内战、种族冲突的根，
能一直追回那张桌子。（对照 world-war-one-1914 里印巴分治划界的母题：在地图上替别人划线，
后果要别人扛几十年甚至上百年。）

**3. 榨取经济的延续**：从刚果橡胶，到今天的钴矿（电动车电池原料，刚果民主共和国 DRC
是全球钴矿中心）——"工业需求 → 掠取非洲资源"这条线一直没断。你手机电池里可能就有刚果的钴。

**4. crimes against humanity 概念**：Williams 在 1890 公开信里**最早系统使用之一**了
"crimes against humanity"（危害人类罪）这个说法，让它广为人知（注意：不是"首次发明"——
这个短语之前有零散使用，作为成型的国际法概念是 20 世纪纽伦堡审判才确立的）。
这是揭发留下的正面遗产。

🔗 反 Whig 收尾：所以"欧洲给非洲带来文明"是彻底的谎。真实的长期遗产是：
被劈裂的国界、延续的资源榨取、还有一套揭发暴行的方法论。`,
        en: `The story covers the "borders" part (Leopold's pass Node 9 + the villager's pass Node 9
both show the Berlin Conference drawing lines with a ruler), but the AP also tests a fuller "chain
of long-term consequences," which I've organized on this card.

**1. Carelessly drawn borders (the highest-frequency long-tail point)**: at the Berlin Conference
and the partition after it, Europeans drew lines on the map with a ruler, paying no heed to which
peoples lived on the ground or what languages they spoke. One straight line might split a people in
two, or pen two feuding peoples into one country. **Many of the ruler-straight borders on Africa's
map today were drawn back then.**

**2. These lines did not vanish**: when Africa became independent in the 1960s, the new nations were
forced to **inherit** these colonial borders (the "uti possidetis / inherited borders" principle) —
because redrawing them would trigger even bigger wars. As a result, the roots of many of Africa's
civil wars and ethnic conflicts today can be traced all the way back to that table. (Compare the
partition-border motif in world-war-one-1914 / India-Pakistan: drawing someone else's lines on a map,
and others bear the consequences for decades or even a century.)

**3. The continuation of extraction economics**: from Congo rubber to today's cobalt (the raw
material for electric-vehicle batteries; the DRC is the world's cobalt center) — the line of
"industrial demand → plundering African resources" never broke. There may be Congolese cobalt in
your phone battery right now.

**4. The "crimes against humanity" concept**: in his 1890 open letter, Williams was **among the
earliest to systematically use** the phrase "crimes against humanity" and helped make it widely
known (note: not "the first to invent it" — the phrase had scattered earlier uses, and it became a
formed concept of international law only at the 20th-century Nuremberg trials). This is the positive
legacy left by the whistleblowing.

🔗 Anti-Whig close: so "Europe brought Africa civilization" is an outright lie. The real long-term
legacy is split-apart borders, continuing resource extraction, and a methodology for exposing
atrocity.`,
      },
      xiaoweiNote: {
        cn: `老师说写"长期影响"的 essay，记住四条就够：**国界（最重要）→ 独立后继承 → 资源榨取
（橡胶到钴）→ crimes against humanity 概念**。第一条几乎必考。

注意账本说的措辞陷阱：写 Williams 和 "crimes against humanity" 时，要写"最早系统使用之一/
让它广为人知"，**不要写"首次使用/首用"**——那个说法过头了，会被史实党挑错。`,
        en: `Teacher said for a "long-term effects" essay, four points are enough: **borders (most
important) → inherited after independence → resource extraction (rubber to cobalt) → the "crimes
against humanity" concept.** The first is almost always tested.

Note the wording trap from the fact ledger: when writing about Williams and "crimes against humanity,"
write "among the earliest to systematically use it / helped make it widely known" — **do not write
"first used it / coined it,"** which overstates it and gets picked apart by stickler graders.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Leopold 在 1876 年说他去刚果是为了"反对奴隶贩子、把文明带给那里的人"——
但同一片土地上，几百年前就有过 Mali 帝国，14 世纪的 Timbuktu 是世界知识中心之一。

如果"非洲早就有文明"是事实，那 Leopold 那套"带来文明"的说法，到底是真心相信，
还是明知是假、故意用来骗钱博掌声的？这两种解读，会不会都有一部分对？`,
      en: `In 1876 Leopold said he was going to the Congo to "fight the slave traders and bring
civilization to its people" — but on that same land, centuries earlier, there had been the Mali
Empire, and in the 1300s Timbuktu was one of the world's centers of learning.

If "Africa already had civilizations" is a fact, then was Leopold's "bringing civilization"
something he sincerely believed, or something he knew was false and used on purpose to raise money
and win applause? Could both readings be partly true?`,
      hintCn: `提示：可以从两个角度想——(1) 社会达尔文主义当时是被很多欧洲人当"科学"信的，
所以 Leopold 可能真心觉得欧洲更"高级"、自己在做好事，看不见 Mali 这种反例；
(2) 或者他心里清楚是借口，只是这个借口太好用——能筹款、能博掌声、能让全世界不追问。
故事里他自己有一句反思："当全世界都信了你的漂亮话，连你自己会不会也开始半信半疑？"

进阶思考：一个人"真心相信一个让自己得利的谎"，比"明知是谎还说"，是更可怕，还是没那么可怕？`,
      hintEn: `Hint: think from two angles — (1) Social Darwinism was believed as "science" by many
Europeans then, so Leopold may have sincerely felt Europe was "higher" and that he was doing good,
blind to a counterexample like Mali; (2) or he knew it was an excuse, but the excuse was just too
useful — it raised money, won applause, and kept the world from asking questions. In the story he
reflects: "when the whole world has believed your fine words, might even you begin, half-believing?"

Going deeper: is a person who "sincerely believes a lie that benefits them" more frightening than
one who "knows it's a lie and says it anyway," or less?`,
      conceptsActivated: ['civilizing-mission-social-darwinism', 'congo-free-state-leopold'],
    },
    {
      id: 'q2',
      cn: `George Washington Williams 揭发了 Leopold，但没扳倒他——写完公开信不到一年就病死了，
没看到任何改变，刚果又运转了 17 年。如果只看他活着时的结果，他"失败"了。

可后来的人（传教士照片、Casement 官方报告、国际运动）接着他的方法做下去，
最终 1908 年 Leopold 被迫交出刚果。

那么：一个揭发者"看起来失败了"，但他点的火后来烧起来了——这算成功还是失败？
"有没有看到结果"是衡量一件事有没有意义的标准吗？`,
      en: `George Washington Williams exposed Leopold but did not bring him down — he died of illness
less than a year after writing the open letter, never seeing any change, and the Congo ran on for
17 more years. Looking only at the result in his lifetime, he "failed."

Yet the people after him (the missionary photographs, Casement's official report, the international
movement) carried on his method, and in the end Leopold was forced to give up the Congo in 1908.

So: a whistleblower who "looks like a failure," but whose fire later caught — is that success or
failure? Is "seeing the result yourself" the measure of whether something mattered?`,
      hintCn: `提示：可以想"证据接力"这个角度——故事里 Williams 说"一个人的证据可能很弱，
可证据是会接力的"。他不是孤立的一环：前面有 1492 后揭发殖民屠杀的 Las Casas
（见 age-of-exploration-1492），后面有 Casement、有 20 世纪争民权的人。
也许有些事，注定是要"先点火的人看不到火烧起来"的。

进阶思考：你做一件对的事，但很可能这辈子看不到它有结果——你还会做吗？
是什么让一个人愿意做"自己看不到结尾"的事？`,
      hintEn: `Hint: consider the "relay of evidence" angle — in the story Williams says "one person's
evidence may by itself be weak, but evidence runs a relay." He wasn't an isolated link: before him
was Las Casas, who exposed colonial slaughter after 1492 (see age-of-exploration-1492); after him
came Casement and the 20th-century fighters for civil rights. Maybe some things are destined for
"the one who lights the fire never to see it catch."

Going deeper: if you do a right thing but will very likely never see its result in your lifetime,
would you still do it? What makes a person willing to do something whose ending they'll never see?`,
      conceptsActivated: ['borders-long-tail-consequences', 'congo-free-state-leopold', 'african-resistance'],
    },
    {
      id: 'q3',
      cn: `Leopold 从没踏上过非洲一步，从没亲手砍过一只手。他做的，是坐在四千公里外的宫殿里
定配额、看账本。亲手砍手的，是配额压力和子弹问责制下的殖民军士兵。

故事里 Leopold 自己说："施暴的人，可以离暴行很远很远，远到自己都觉得清白。"

那么：Leopold 的罪，比那些亲手砍手的士兵更轻，还是更重？"离暴行远"和"无辜"，
是一回事吗？`,
      en: `Leopold never set foot in Africa, never cut off a single hand with his own hands. What he
did was sit in a palace four thousand kilometers away, set quotas, and read ledgers. The ones who
did the cutting were colonial soldiers under quota pressure and the bullet-accounting system.

In the story Leopold himself says: "the man who inflicts the violence can stand very, very far from
it, far enough that he feels innocent himself."

So: is Leopold's guilt lighter than that of the soldiers who did the cutting, or heavier? Are "far
from the violence" and "innocent" the same thing?`,
      hintCn: `提示：可以从两边想——(1) 设计制度的人责任更重，因为是他造出了"逼人砍手"的整套系统，
没有配额和子弹问责，士兵不会去砍；(2) 但亲手做的人也不是机器，他们本可以拒绝。
责任也许不是"非此即彼"，而是一条从宫殿到森林、每个环节都有份的链。

注意账本要的措辞精确：写这道题别把刚果说成"比利时的殖民地"——1885-1908 它是 Leopold
**个人**的私人产业，1908 才转比利时。这个区别正好和"谁该负责"这道题相关。

进阶思考：今天的世界里，"决策的人离后果很远"的结构还存在吗？
（比如：下单的人、写算法的人、按开关的人——离真正承受后果的人很远很远。）`,
      hintEn: `Hint: think from both sides — (1) the one who designs the system bears heavier
responsibility, because he built the whole machine that "forces people to cut off hands"; without
quotas and bullet-accounting, the soldiers wouldn't have done it; (2) but the ones who did it by
hand were not machines either — they could have refused. Responsibility may not be "either/or,"
but a chain from palace to forest in which every link has a share.

Note the wording precision the fact ledger wants: don't call the Congo "a Belgian colony" here —
from 1885 to 1908 it was Leopold's **personal** private property, transferring to Belgium only in
1908. That distinction is exactly relevant to the "who is responsible" question.

Going deeper: in today's world, does the structure of "decision-makers far from the consequences"
still exist? (For example: the one who places the order, the one who writes the algorithm, the one
who flips the switch — all very far from the people who actually bear the consequences.)`,
      conceptsActivated: ['congo-free-state-leopold', 'rubber-extraction-economy', 'civilizing-mission-social-darwinism'],
    },
  ],
};

export default notebook;
