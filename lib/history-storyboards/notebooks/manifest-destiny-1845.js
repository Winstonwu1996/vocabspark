// ─── 同伴笔记本架构 v1 · Manifest Destiny 1845 ─────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演「学习同伴」
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Polk 目标型总统 / Thoreau 拒战拒税 / Vallejo 失地的 Californio 三条线）
//   - notebook 提供考点闭环（Manifest Destiny、德州并入、美墨战争、Guadalupe Hidalgo 条约、
//     俄勒冈条约、加州淘金热、墨西哥裔与原住民失地、同时代中国鸦片战争对照 — 补完 CA HSS / APUSH 课纲）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - APUSH Period 4-5：Topic 5.3（Manifest Destiny）/ 5.4（Mexican-American War）
//   - California HSS Grade 8.5（西进扩张）/ 8.8（加州的转手）
//
// 事实地基：对账 history-narratives/manifest-destiny-1845.md
//   - Manifest Destiny 口号 1845（O\'Sullivan）/ Polk 1845-49 / 美墨战争 1846-48
//   - Guadalupe Hidalgo 条约 1848（割让约 52.5 万 sq mi ≈ 55% / 美付 1500 万 / 第八、九条保护财产）
//   - Oregon Treaty 1846（北纬 49 度）/ 加州淘金热 1848-49 / California Land Act 1851
//   - 不与 Trail of Tears（1838-39 切罗基迁移 = jackson 主题）重叠
//
// schemaVersion: 1 · notebookVersion: manifest-destiny-1845-v1

export var notebook = {
  topicId: 'manifest-destiny-1845',
  topicNameCn: '昭昭天命 1845',
  topicNameEn: 'Manifest Destiny 1845',
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
    cn: `今天老师说我们要学 1845 年那场叫「Manifest Destiny（昭昭天命）」的西进扩张。
「昭昭天命」的意思是：美国人觉得向西铺满整个大陆，是上天注定给他们的使命。
老师说这是 APUSH 和加州本州史（CA HSS）都要考的——尤其加州孩子，因为加州本来是墨西哥的地。

她在白板上写了这几个名字：

詹姆斯·波尔克（James K. Polk）、约翰·奥沙利文（John O'Sullivan）、
亨利·戴维·梭罗（Henry David Thoreau）、马里亚诺·巴列霍（Mariano Vallejo）、圣安纳（Santa Anna）

还有一串词：

①「Manifest Destiny（昭昭天命）」——向西扩张是天注定的信念
②「annexation（并入）」——把一块地正式接进自己国家
③「Mexican-American War（美墨战争）」——美国和墨西哥 1846-48 年打的仗
④「Treaty of Guadalupe Hidalgo（瓜达卢佩-伊达尔戈条约）」——结束美墨战争的和平条约
⑤「cession（割让）」——战败方把土地交给对方
⑥「Oregon Treaty（俄勒冈条约）」——美国与英国 1846 年谈定的北部边界
⑦「Gold Rush（淘金热）」——1848-49 年大批人涌入加州找金矿

我先把这些词抄下来。等下我会读三个故事：
Polk 的故事（他是把版图推到太平洋的总统）、
Thoreau 的故事（他拒绝交战争税、坐牢一夜的人）、
Vallejo 的故事（他欢迎美国、却失去了自己土地的人）。
读完再回来对照这张单子，看我能不能解释每一个词。

老师说了一句我抄在笔记本第一页：「西进扩张里，有真实的人民希望和国家成就，
也有真实的征服和失地。读它，要同时看见浪头上的人，和浪脚下的人。」`,
    en: `Today my teacher said we're learning the 1845 westward expansion called "Manifest Destiny."
Manifest Destiny means the belief that it was America's Heaven-given destiny to spread across the
whole continent. She said it's tested on both APUSH and California's own state history (CA HSS) —
especially for California kids, because California was once Mexican land.

She wrote these names on the board:

James K. Polk, John O'Sullivan,
Henry David Thoreau, Mariano Vallejo, Santa Anna

Plus a list of terms:

① "Manifest Destiny" — the belief that spreading west was America's God-given mission
② "annexation" — officially bringing a piece of land into your own country
③ "Mexican-American War" — the war fought between the US and Mexico from 1846 to 1848
④ "Treaty of Guadalupe Hidalgo" — the peace treaty that ended the Mexican-American War
⑤ "cession" — the losing side handing over territory to the winner
⑥ "Oregon Treaty" — the 1846 deal between the US and Britain fixing the northern border
⑦ "Gold Rush" — the rush of people flooding into California to find gold, 1848-49

I'll copy these down first. Then I'll read three stories:
Polk's story (the president who pushed the map to the Pacific),
Thoreau's story (who went to jail for a night rather than pay the war tax),
and Vallejo's story (who welcomed America yet lost his own land).
After reading, I'll come back and check whether I can explain each term.

Teacher said one line I copied onto the first page of my notebook: "Inside westward expansion
there were real popular hopes and real national achievement, and also real conquest and real
dispossession. To read it, you have to see the people on the crest of the wave and the people
under its foot at the same time."`,
    keyTerms: [
      { cn: '昭昭天命', en: 'Manifest Destiny' },
      { cn: '并入', en: 'annexation' },
      { cn: '德州并入', en: 'Texas annexation' },
      { cn: '美墨战争', en: 'Mexican-American War' },
      { cn: '瓜达卢佩-伊达尔戈条约', en: 'Treaty of Guadalupe Hidalgo' },
      { cn: '割让 / 墨西哥割让地', en: 'cession / Mexican Cession' },
      { cn: '俄勒冈条约', en: 'Oregon Treaty' },
      { cn: '淘金热', en: 'Gold Rush' },
      { cn: '扩张', en: 'expansion' },
      { cn: '加州土地法（1851）', en: 'California Land Act (1851)' },
      { cn: '占地者', en: 'squatter' },
      { cn: '公民不服从', en: 'Civil Disobedience' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '詹姆斯·波尔克',
        nameEn: 'James K. Polk',
        ipa: '/dʒeɪmz poʊk/',
        roleCn: '1845-49 任总统，四年里并德州、谈下俄勒冈、打赢美墨战争，把版图推到太平洋；同时是蓄奴的种植园主',
        roleEn: 'President 1845-49 who in four years annexed Texas, settled Oregon, and won the Mexican-American War, pushing the map to the Pacific; also an enslaving plantation owner',
        mustKnow: true,
        audioKey: 'james-k-polk',
      },
      {
        nameCn: '约翰·奥沙利文',
        nameEn: 'John O\'Sullivan',
        ipa: '/dʒɒn ˌoʊsəˈlɪvən/',
        roleCn: '纽约报人，1845 年造出「Manifest Destiny（昭昭天命）」这个口号，给领土扩张披上「天意」外衣',
        roleEn: 'New York journalist who coined the slogan "Manifest Destiny" in 1845, dressing territorial expansion as the will of Providence',
        mustKnow: true,
        audioKey: 'john-osullivan',
      },
      {
        nameCn: '亨利·戴维·梭罗',
        nameEn: 'Henry David Thoreau',
        ipa: '/ˈhɛnri ˈdeɪvɪd θəˈroʊ/',
        roleCn: '马萨诸塞作家，1846 年拒缴支持美墨战争的人头税坐牢一夜，1849 年写《Civil Disobedience（公民不服从）》',
        roleEn: 'Massachusetts writer who in 1846 went to jail for a night rather than pay a tax supporting the Mexican-American War, and in 1849 wrote Civil Disobedience',
        mustKnow: true,
        audioKey: 'henry-david-thoreau',
      },
      {
        nameCn: '马里亚诺·巴列霍',
        nameEn: 'Mariano Vallejo',
        ipa: '/ˌmɑːriˈɑːnoʊ vaɪˈeɪhoʊ/',
        roleCn: '北加州 Californio 大牧场主，欢迎美国，却在 1851 土地法与诉讼中把约 17.5 万英亩失到只剩几百英亩',
        roleEn: 'A Californio rancher of northern California who welcomed America, yet under the 1851 Land Act and litigation lost his roughly 175,000 acres down to a few hundred',
        mustKnow: true,
        audioKey: 'mariano-vallejo',
      },
      {
        nameCn: '圣安纳',
        nameEn: 'Santa Anna',
        ipa: '/ˈsæntə ˈænə/',
        roleCn: '墨西哥将军兼多次掌权的领导人，美墨战争中墨方的核心军事人物，战败导致割地',
        roleEn: 'Mexican general and repeated head of state, the central military figure on the Mexican side of the Mexican-American War whose defeat led to the cession',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'manifest-destiny',
      termCn: '昭昭天命（O\'Sullivan 1845）',
      termEn: 'Manifest Destiny (O\'Sullivan, 1845)',
      defCn: '1845 年记者 John O\'Sullivan 造出的一个口号，说美国向西铺满整个大陆是「上天注定」的命运。它不是法律，是一种流行的信念，给领土扩张披上了「天意」的外衣。',
      defEn: 'A slogan coined in 1845 by journalist John O\'Sullivan, claiming that America spreading across the entire continent was a fate "ordained by Providence." It was not a law — it was a popular belief that dressed up territorial expansion as God\'s will.',
      standardRef: ['APUSH Topic 5.3', 'CA HSS 8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'polk',
        nodeIds: ['polk-n2'],
        xiaoweiNote: {
          cn: `这个我在 Polk 的故事里读到了！故事里讲到：1845 年，一个纽约报人 John O'Sullivan
写出两个字——Manifest Destiny（昭昭天命）。

**这两个字是什么意思？** 美国向西铺满整个大陆，是上天注定、不容质疑的命运。

老师反复强调一个最容易搞错的点——
误解：「Manifest Destiny 是一部法律或官方政策。」
正解：**它是一个记者造的口号、一种流行的想法，不是法律。**

考点提醒（背这一句就够）：这两个字是一句话术。
它把「我们想要那片地」这个念头，变成了「老天定我们要那片地」。
念头从此不用再被质疑，只需要被完成。

我自己的记忆锚：manifest = 明显的、注定的。
把「想拿」包装成「天命」，是这一课的核心套路。`,
          en: `I read this in Polk's story! It says that in 1845, a New York journalist named John
O'Sullivan wrote two words — Manifest Destiny.

**What did those two words mean?** That America spreading across the whole continent was a fate
ordained by Providence — beyond question.

Teacher kept stressing the easiest mistake here:
Misconception: "Manifest Destiny was a law or an official policy."
Correction: **It was a slogan a journalist coined — a popular idea, not a law.**

Exam tip (one sentence to remember): these two words were a piece of rhetoric.
They turned the thought "we want that land" into "Heaven decreed we should have that land."
Once it became "destiny," no one needed to question it — just carry it out.

My own memory anchor: manifest = obvious, destined. Packaging "we want it" as "destiny" is
the core move of this whole topic.`,
        },
      },
    },

    {
      id: 'texas-annexation',
      termCn: '德州并入（1845）',
      termEn: 'Texas Annexation (1845)',
      defCn: '1845 年美国把得克萨斯州正式接纳为联邦的一个州。德州本是墨西哥的领土，1836 年宣布独立建国，美国并入时墨西哥从未承认德州独立，因此把并入看作美国抢夺自己的土地。',
      defEn: 'In 1845, the United States formally admitted Texas as a state. Texas had been Mexican territory before declaring independence in 1836. Because Mexico never recognized that independence, it viewed the annexation as America seizing its land.',
      standardRef: ['APUSH Topic 5.3', 'CA HSS 8.5'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'polk',
        nodeIds: ['polk-n3'],
        xiaoweiNote: {
          cn: `这个在 Polk 的故事里讲过。德州本是墨西哥的地。1836 年那里的移民闹独立，
自立成了一个共和国。1845 年，美国正式把德州并进来——**annexation（并入）**，
就是把一块地「接」进自己国家——德州成了美国的一个州。

**考点关键句**：墨西哥从来不承认德州独立。
所以在墨西哥眼里，并入德州 = 美国明抢它的领土。
美墨关系一下子绷紧——这是后面那场战争的起点。

还有一个边界陷阱要记：德州和墨西哥之间，哪条河是界？
1. Polk 坚持：南边的 Rio Grande（格兰德河）是界。
2. 墨西哥说：更北边的 Nueces 河（努埃西斯河）才是界。
两条河中间那片争议地，就是后面战争第一枪响起的地方。

我的记忆锚：Polk 把德州并进来，是开头——他真正想要的，是德州再往西的加州。`,
          en: `Polk's story covers this. Texas had been Mexican land. In 1836 the settlers there rose for
independence and made themselves a republic. In 1845, America formally brought Texas in —
**annexation** means officially "attaching" a piece of land into your own country —
and Texas became a US state.

**Key exam sentence**: Mexico never recognized Texas's independence.
So in Mexico's eyes, annexing Texas meant America openly seizing its territory.
Relations snapped tight at once — this is the starting point of the war that came later.

A border trap to remember: between Texas and Mexico, which river was the boundary?
1. Polk insisted: the Rio Grande to the south.
2. Mexico said: the Nueces River farther north.
The disputed strip between those two rivers is where the war's first shot rang out.

My memory anchor: Polk bringing in Texas was just the opening move — what he truly wanted
was California, west of Texas.`,
        },
      },
    },

    {
      id: 'mexican-american-war',
      termCn: '美墨战争（1846-48）',
      termEn: 'Mexican-American War (1846-48)',
      defCn: '1846 年到 1848 年美国与墨西哥之间的战争。战争从双方有争议的边界地带打响，美军最终攻入墨西哥城，墨西哥战败，被迫割让大片领土。战争的起因至今仍是争论焦点。',
      defEn: 'The war fought between the United States and Mexico from 1846 to 1848. It began in a disputed border zone, ended with US forces capturing Mexico City, and forced Mexico to surrender a massive stretch of territory. How the war started remains a contested question.',
      standardRef: ['APUSH Topic 5.4', 'CA HSS 8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'polk',
        nodeIds: ['polk-n4', 'polk-n5'],
        xiaoweiNote: {
          cn: `Polk 的故事里有这场仗的核心经过。Polk 想买加州，墨西哥不卖、也不见他派的使者。
1846 年春，他派 Zachary Taylor 带军队进驻 Rio Grande 北岸那片争议地，几乎是在等对方先动手。
4 月底墨军渡河交火，美军死了人。

1846 年 5 月，Polk 去国会要宣战，说了那句被反复引用的话：
**「墨西哥已在美国的土地上（American soil）流了美国人的血。」**
整句的重量全压在「美国的土地」五个字上——可那块地正是双方争议的地带。

**考点关键句（起因之争，DBQ 高频）**：这场仗到底是——
① 「墨西哥先开火的自卫战」，还是
② 「Polk 刻意挑衅、为夺地制造的战争」？

一位伊利诺伊州年轻议员 Abraham Lincoln 提出「Spot Resolutions（原点质询）」，
追问：你说血流的那个「点」，到底在不在美国境内？

老师纠正的误解：「美墨战争是墨西哥先动手的自卫战。」
正解：第一枪发生在争议地带，「墨西哥先开火」本身就是被争论的话术。
战争 1846-48，美军一路打进墨西哥城，墨西哥战败。`,
          en: `Polk's story covers the heart of this war. Polk wanted to buy California; Mexico
wouldn't sell and wouldn't even meet his envoy. In the spring of 1846, he sent Zachary Taylor
with troops to the north bank of the Rio Grande — into the disputed strip — all but waiting for
the other side to strike first. In late April, Mexican cavalry crossed and clashed, and American
soldiers died.

In May 1846, Polk went to Congress for war and said the much-quoted line:
**"Mexico has shed American blood upon American soil."**
The whole weight of that sentence rests on "American soil" — but that land was exactly the
disputed strip.

**Key exam sentence (the causation debate — high-frequency DBQ topic)**: was this war —
① "Mexico's self-defense after it fired first," or
② "a war Polk deliberately provoked to seize land"?

A young Illinois congressman named Abraham Lincoln put forward the "Spot Resolutions,"
pressing: was that "spot" where the blood was shed actually inside the United States?

Misconception teacher corrected: "the Mexican-American War was Mexico's self-defense after it
struck first." Correction: the first shot fell in the disputed strip; "Mexico fired first" is itself a
contested piece of rhetoric. The war ran 1846-48; US forces fought into Mexico City, and
Mexico was defeated.`,
        },
      },
    },

    {
      id: 'treaty-of-guadalupe-hidalgo',
      termCn: '瓜达卢佩-伊达尔戈条约（1848）',
      termEn: 'Treaty of Guadalupe Hidalgo (1848)',
      defCn: '1848 年结束美墨战争的和平条约。墨西哥割让（cession，就是把土地交给对方）约 52.5 万平方英里的领土，约占当时墨西哥面积的 55%，美国付 1500 万美元。条约承诺保护留在割让地的墨西哥人的财产与公民权利。',
      defEn: 'The 1848 peace treaty that ended the Mexican-American War. Mexico gave up — ceded — about 525,000 square miles of territory, roughly 55 percent of its land at the time, and the US paid 15 million dollars. The treaty promised to protect the property and citizenship rights of Mexicans who stayed in the ceded region.',
      standardRef: ['APUSH Topic 5.4', 'CA HSS 8.8', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'vallejo-receiving-end',
        nodeIds: ['vallejo-n4'],
        xiaoweiNote: {
          cn: `Vallejo 的故事从「被影响的那边」讲这份条约，最戳人。1848 年战争结束，
两国签《Treaty of Guadalupe Hidalgo（瓜达卢佩-伊达尔戈条约）》。

**必背数字（考点）**：
1. 墨西哥割让（cession）约 52.5 万平方英里——大约是它当时领土的 55%。
2. 包括加州、内华达、犹他、亚利桑那、新墨西哥，及科罗拉多、怀俄明部分。
3. 美国付 1500 万美元。
这一大块地就叫 Mexican Cession（墨西哥割让地）。

**考点关键句**：条约第八、九条白纸黑字承诺——
留在割让地的墨西哥人，可以成为享有全部权利的美国公民，
而且他们的财产「应受到不可侵犯的尊重（shall be inviolably respected）」。
对 Vallejo 这样的人，这是一份国家级的书面保证。

**最关键的张力（DBQ 爱考）**：条约「写了」保护，不等于真的「做到了」保护。
这条线在后面失地那张卡会爆开。

记忆锚：Guadalupe Hidalgo = 战争的句号 + 一份后来没兑现的承诺。`,
          en: `Vallejo's story tells this treaty from the side of the affected — and it hits hardest.
In 1848 the war ended and the two countries signed the Treaty of Guadalupe Hidalgo.

**Must-memorize numbers (exam point)**:
1. Mexico ceded about 525,000 square miles — roughly 55 percent of its territory at the time.
2. This included California, Nevada, Utah, Arizona, New Mexico, and parts of Colorado and Wyoming.
3. The United States paid 15 million dollars.
This great stretch of land is called the Mexican Cession.

**Key exam sentence**: Articles VIII and IX promised in black and white that Mexicans who stayed
in the ceded land could become American citizens with full rights, and that their property
"shall be inviolably respected." For someone like Vallejo, this was a written national pledge.

**The sharpest tension in this topic (a DBQ favorite)**: a treaty that "wrote" protection is not
the same as a treaty that actually "gave" that protection. This thread bursts open in the
dispossession card below.

Memory anchor: Guadalupe Hidalgo = the period at the war's end + a promise that was later
not kept.`,
        },
      },
    },

    {
      id: 'oregon-treaty',
      termCn: '俄勒冈条约（1846，北纬 49 度）',
      termEn: 'Oregon Treaty (1846, 49th parallel)',
      defCn: '1846 年美国和英国签的边界协议，把俄勒冈地区以北纬 49 度（地图上的一条纬线）为界分成两半。美国拿到南边，英国保留北边（今加拿大不列颠哥伦比亚）。',
      defEn: 'The 1846 agreement between the United States and Britain dividing the Oregon region along the 49th parallel (a line of latitude on the map). The US got the southern portion; Britain kept the north (today\'s British Columbia, Canada).',
      standardRef: ['APUSH Topic 5.3', 'CA HSS 8.5'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'polk',
        nodeIds: ['polk-n6'],
        xiaoweiNote: {
          cn: `这个在 Polk 的故事里，是我觉得整课最聪明的一节——因为它把 Polk 的整套逻辑照穿了。

1846 年，北边还有一块美英共管的大地：俄勒冈。当时扩张派喊得最响的口号是
「54-40 or fight」，意思是：拿到北纬 54 度 40 分（地图上的一条纬线），否则开打！
听上去是要跟英国死磕。

**结果呢？** 他没跟英国打。他和和气气签了《Oregon Treaty（俄勒冈条约）》，
以北纬 49 度（地图上的一条纬线）划界，双方都接受，收场。

**考点关键句（对照题高频）**：同一年、同一个 Polk——
对北边强大的英国，他用谈判；对南边弱小的墨西哥，他用战争。

为什么？英国强，打了划不来；墨西哥弱，打它能拿到加州。
所以「天命」听起来像天意，其实从来跟着力量走。

记忆锚：俄勒冈 = 49 度 + 谈判；墨西哥 = 割地 + 战争。
量的从来不是「谁对谁错」，而是「对方有多硬」。`,
          en: `In Polk's story, this is the part I think lights up Polk's whole logic the clearest.

In 1846, a huge stretch of land in the north was still held jointly by America and Britain — Oregon.
The loudest expansionist slogan of the day was "54-40 or fight," meaning: take it all the way
up to 54 degrees 40 minutes (a line of latitude on the map) — or go to war! It sounded like
America was ready to fight Britain to the end.

**What actually happened?** Polk didn't fight Britain. He peaceably signed the Oregon Treaty,
drawing the line at the 49th parallel (a line of latitude on the map). Both sides accepted. Done.

**Key exam sentence (a frequent compare question)**: the same year, the same Polk —
with the strong Britain to the north, he chose negotiation; with the weak Mexico to the south,
he chose war.

Why? Britain was strong, and fighting it wasn't worth the cost. Mexico was weak, and fighting it
would win California. So "destiny" sounds like Heaven's will, but it always followed power.

Memory anchor: Oregon = 49th parallel + negotiation; Mexico = cession + war.
What was measured was never "right versus wrong" — it was always "how hard is the other side."`,
        },
      },
    },

    {
      id: 'california-gold-rush',
      termCn: '加州淘金热（1848-49）',
      termEn: 'California Gold Rush (1848-49)',
      defCn: '1848 年加州发现金矿，1849 年大批人——史称"forty-niners（49 人）"——从全美甚至全世界涌入加州，几个月内来了数十万人。人口暴涨直接推动 1850 年加州正式建州。',
      defEn: 'Gold was discovered in California in 1848, and in 1849 huge crowds — called "forty-niners" — flooded in from across the US and the world. Hundreds of thousands arrived within months. The population explosion pushed California to become a state in 1850.',
      standardRef: ['APUSH Topic 5.4', 'CA HSS 8.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'vallejo-receiving-end',
        nodeIds: ['vallejo-n5'],
        xiaoweiNote: {
          cn: `Polk 的故事里先提到发现金子：条约签字那年（1848），加州发现金矿，他大概觉得「连金子都在等我们」。
可 Vallejo 的故事从失地者那边讲，才看得见金子的另一面。

**考点事实**：
1. 1848 年加州发现金矿。
2. 1849 年淘金客（forty-niners）从全美、全世界涌进加州——几个月里来了几十万人。
3. 这就是 Gold Rush（淘金热），人口暴涨逼出 1850 年加州建州。

**考点关键句**：这些淘金客大多不认识 Vallejo，不知道什么条约，也不在乎一个墨西哥人的地契。
他们看到的只有空着、没围墙的地，直接住下来——这种人当时叫 **squatter（占地者）**，
也就是没有地权、直接跑来住的人。
Vallejo 去理论，对方反问：「你的地契呢？拿到美国法院去证明。」

记忆锚：金子 = 机会，也 = 失地的导火索。
同一座金山——Polk 看见的是天命，Vallejo 看见的是涌来占他牧场的人。`,
          en: `Polk's story mentions the gold first: in 1848, the same year the treaty was signed, gold was
found in California — and he probably thought "even the gold is waiting for us." But Vallejo's story,
told from the side of the dispossessed, shows gold's other face.

**Exam facts**:
1. Gold was found in California in 1848.
2. In 1849, gold-seekers called forty-niners poured in from all over America and the world —
   hundreds of thousands within months.
3. This is the Gold Rush, which set off a population explosion and pushed California to statehood in 1850.

**Key exam sentence**: most of these gold-seekers didn't know Vallejo, had no idea about any treaty,
and didn't care about a Mexican man's land grant. They saw empty, unfenced land and simply settled —
those people were called **squatters**: people with no land rights who just showed up and moved in.
When Vallejo went to reason with them, they shot back: "Where's your grant? Bring it to an American
court and prove it."

Memory anchor: gold = opportunity, and also = the fuse of dispossession.
The same mountain of gold — Polk saw destiny; Vallejo saw the people flooding in to occupy his ranch.`,
        },
      },
    },

    {
      id: 'dispossession-land-act',
      termCn: '墨西哥裔与原住民的失地（1851 土地法）',
      termEn: 'Dispossession of Mexicans & Native Nations (1851 Land Act)',
      defCn: '1851 年美国国会通过《加州土地法》，要求在加州持有西班牙或墨西哥时代地契的 Californio（墨西哥裔）地主，必须到美国委员会前逐一证明地权。漫长的诉讼和高额律师费，让很多人即使赢了官司也失去了土地。',
      defEn: 'The 1851 California Land Act required Californio landowners (of Mexican heritage) who held Spanish or Mexican-era land grants to prove their ownership before a US commission, one claim at a time. Years of litigation and mounting legal fees caused many to lose their land even when they won their cases.',
      standardRef: ['APUSH Topic 5.4', 'CA HSS 8.8', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'vallejo-receiving-end',
        nodeIds: ['vallejo-n6', 'vallejo-n7', 'vallejo-n8', 'vallejo-n9'],
        xiaoweiNote: {
          cn: `Vallejo 的故事里有一段，是条约「写了却没保护」的爆发点。

1851 年美国国会通过 California Land Act（加州土地法），专门针对 Californio 地主：
你们西班牙、墨西哥时代的地契**一律不算数**，除非到一个委员会前、
按美国标准一笔笔证明——证明过了，地才还是你的。

**考点关键句**：它把举证的担子整个压到地主头上。
不是「你来证明这地不是我的」，而是「我来证明这地是我的」。
打官司一拖十几年，律师费、利息、被占的牛羊把人拖垮。
很多 Californio（包括 Vallejo）**「赢了官司，输了土地」**——判决到手时，地已经基本没了。
Vallejo 约 17.5 万英亩，最后只剩几百英亩。

**核心提炼（DBQ 高频）**：不需要派军队抢，
只需要一套「请按我的方式证明它是你的」规则，就足够磨垮人。
同一句「财产不可侵犯」，条约里保护他，法庭里被用来一刀刀割他。

还有一层不能漏：Vallejo 自己那 17.5 万英亩，最早也是从更早住这儿的原住民手里，
经西班牙、墨西哥时代一层层拿来的。失地是一条链——
原住民被推到一边，然后 Californio 又被美国人推到一边。

注意别跟「泪之路」搞混：切罗基迁移（1838-39）是另一个主题，
本题是 1840 年代加州的失地。`,
          en: `Vallejo's story has a section that is where the treaty "wrote protection but did not protect"
bursts open.

In 1851 the US Congress passed the California Land Act, aimed at Californio landholders.
Your Spanish and Mexican grants count for **nothing** unless you appear before a board and
prove them, clause by clause, by American standards — only then does the land stay yours.

**Key exam sentence**: it piled the whole burden of proof onto the owners.
Not "you prove this land is not mine," but "I prove this land is mine."
Lawsuits dragged on for over a decade. Lawyers' fees, interest, and stolen livestock ground
people down. Many Californios — Vallejo among them — **"won the case and lost the land"**:
by the time the judgment arrived, the land was all but gone.
Vallejo's roughly 175,000 acres ended at a few hundred.

**Core takeaway (high-frequency DBQ)**: no army was needed to seize the land.
A set of rules — "prove, by my method, that it is yours" — was enough to grind a man down.
The same phrase, "property is inviolable," protected him in the treaty and cut him slice by slice in court.

One more layer not to miss: Vallejo's own 175,000 acres had themselves been taken, layer by
layer, in the Spanish and Mexican eras, from the native peoples who lived there earlier.
Dispossession is a chain — natives pushed aside first, then Californios pushed aside by the Americans.

Don't mix this up with the Trail of Tears: the Cherokee removal (1838-39) is a different topic;
this one is 1840s dispossession in California.`,
        },
      },
    },

    {
      id: 'wilmot-proviso',
      termCn: '威尔莫特但书（1846）',
      termEn: 'Wilmot Proviso (1846)',
      defCn: '1846 年美国众议员 David Wilmot 提出的修正案，要求从墨西哥拿到的任何新领土永久禁止奴隶制。众议院两次通过，参议院两次否决。没通过，但它把「新土地能不能蓄奴」变成了全国无法回避的公开问题，是通向内战的因果链起点。',
      defEn: 'An amendment proposed in 1846 by Congressman David Wilmot, demanding that slavery be permanently banned from any territory taken from Mexico. It passed the House twice and was killed by the Senate twice. It never became law, but it turned "can slavery expand into new land?" into an unavoidable national question — the starting point of the chain leading to the Civil War.',
      standardRef: ['APUSH Topic 5.5', 'APUSH CED KC-5.3.I'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这张卡故事里没讲，但它是 APUSH 最高频的因果链起点——从美墨战争直连内战。

**背景**：1846 年，美墨战争刚开打，国会就在吵：打赢了拿到新地，能不能在那里蓄奴？

**威尔莫特但书是什么**：宾州众议员 **David Wilmot** 提出修正案，
要求从墨西哥拿到的**任何新领土**永久禁止奴隶制。
措辞直接借用 1787 年《西北法令》里的禁奴条款——有先例，对手就难说「这是新发明」。

**结果**：众议院两次通过，参议院两次否决。
两院的票数裂痕，第一次把南北方的分歧**数字化**了——谁支持、谁反对，全看得见。

**为什么它是因果链起点**：
① 没通过，但把「新土地 + 奴隶制」这个问题摆上了桌，从此无法回避。
② 直接牵出 1850 妥协案 → 堪萨斯-内布拉斯加法（1854）→ 共和党成立（1854）→ 内战。
③ 把奴隶制从「道德问题」升级成「领土问题」——这个转变是后面所有争论的根。

**考点关键句**：Wilmot Proviso（1846）= 「新土地能不能蓄奴」之争的**第一刀**，
南北公开数票裂开的起点。**没通过 ≠ 没影响**：它点燃了二十年的导火索。`,
        en: `This card isn't in the story, but it is one of the highest-frequency causation-chain
starting points on the APUSH exam — a direct line from the Mexican-American War to the Civil War.

**Background**: in 1846, with the war barely started, Congress was already fighting over what
would happen if America won and took new land — would slavery be allowed there?

**What the Wilmot Proviso was**: Pennsylvania congressman **David Wilmot** proposed an amendment
demanding the **permanent prohibition of slavery in any territory obtained from Mexico**.
The wording borrowed directly from the anti-slavery clause of the Northwest Ordinance (1787),
using an established precedent so opponents couldn't easily call it an invention.

**Outcome**: it passed the House twice and was defeated in the Senate twice.
The precise vote split between the two chambers made the North-South divide over slavery's
expansion **visible in numbers for the first time** — you could see exactly who supported it and who didn't.

**Why it is the causation-chain starting point**:
① It failed to pass, but it put "slavery in new territories" on the table as a question that could no
   longer be ignored.
② It led directly to the Compromise of 1850, the Kansas-Nebraska Act (1854), the founding of the
   Republican Party (1854), and on to the Civil War.
③ It shifted slavery from a "moral question" to a "territorial question" — that shift is the root of
   every argument that followed.

**Key exam sentence**: the Wilmot Proviso (1846) = the **first cut** in the fight over whether
slavery could expand into land won from Mexico, and the opening of the public, vote-counted
North-South split in Congress. Remember: it **did not pass**, but that is not the same as no effect —
it lit the fuse that burned for the next twenty years.`,
      },
      xiaoweiNote: {
        cn: `老师说 Wilmot Proviso 是 AP 最爱考「然后呢、然后呢」这种因果链的起点——
你知道它，整条链（1846 → 1850 → 1854 → 1861）就能说清楚；
你不知道，链子就断在第一环。

我自己的记忆锚：**「46 年那刀，南北数票裂」**。
1. 1846 = 但书提出。
2. 众议院过、参议院否 = 南北方票数第一次公开撕裂。
3. **没通过 ≠ 没影响**：它把「新土地 + 奴隶制」这个炸弹放到桌上，二十年都没收走。`,
        en: `Teacher said the Wilmot Proviso is the AP's favorite starting point for "and then? and then?"
causal chains. Know it and the whole chain — 1846 to 1850 to 1854 to 1861 — makes sense.
Miss it and the chain breaks at the first link.

My memory anchor: "the 1846 cut, North and South split on the count."
1. 1846 = the Proviso introduced.
2. House passes, Senate kills = the first public, vote-counted North-South split.
3. **Didn't pass ≠ no effect**: it put "new land plus slavery" on the table as a live bomb
   that stayed there for twenty years.`,
      },
    },

    {
      id: 'china-opium-war-parallel',
      termCn: '同时代的中国：鸦片战争对照',
      termEn: 'The China Parallel: the Opium War',
      defCn: '与美国西进扩张同一时期，中国正经历 1839-1842 年的鸦片战争，1842 年被迫签《南京条约》，割地赔款。把美中两国 1840 年代的处境并排看，能看出「同一套炮舰+条约工具」在不同力量格局下的两副面孔。',
      defEn: 'At the same time America was expanding westward, China was going through the Opium War (1839-1842) and was forced to sign the Treaty of Nanjing in 1842, ceding territory and paying an indemnity. Placing the US and China side by side in the 1840s reveals the two faces of the same "gunboats plus treaties" toolkit under different power arrangements.',
      standardRef: ['APUSH cross-topic (global context)', 'CA HSS 8.5'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'polk', nodeId: 'polk-n6', context: 'Polk 同一年对强国英国谈判、对弱国墨西哥开战 — 「炮舰+条约」工具跟着力量走，正好对应中国挨刀的一端' },
        ],
      },
      standaloneText: {
        cn: `这张卡故事里没有，但老师说它能让你「跳出美国一国」看清整个 19 世纪——
所以放进复习笔记单独学。它把美国的扩张，和同一时间地球另一端的中国，并排放在一起看。

**时间对得上**：1845-1848 年，是清朝道光二十五年到二十八年。同一段时间——

**美国在「扩张」**：靠一句「昭昭天命」，几年内把版图推到太平洋，
从墨西哥手里拿走它一半以上的领土，成了横跨大陆的强国。

**中国在「被切」**：1839-1842 年的**鸦片战争**刚结束，1842 年清政府被迫签下
**《南京条约》**——割让香港岛、开放五口通商、赔款、丧失关税自主权。
这是中国近代「不平等条约」的开端。

**为什么放一起看（结构对照，不褒贬）**：

① **同一个世界、两种命运**。一个新兴国家在用战争和条约向外扩张（美国），
一个古老帝国在被战争和条约向内切割（中国）。
同样是「炮舰 + 条约」这套工具，美国是握刀的一方，中国是挨刀的一方。

② **「条约」的两副面孔**。对 Vallejo，《Guadalupe Hidalgo 条约》写着保护他、却没保护他；
对清政府，《南京条约》明着就是城下之盟。
条约从来不是中立的纸——它的分量，取决于谁有力量去执行它、解释它。

老师特别强调的原则（Rule 0）：不能说美国「先进所以对」，
也不能说中国「落后所以活该」。
两边都是同一段全球史的不同位置：有人在浪头上扩张，有人在浪脚下挨打。
看清两边，才看得懂 19 世纪到底发生了什么。

故事连接：在 Polk 的故事里，他对强大的英国谈判、对弱小的墨西哥开战——
「工具跟着力量走」这套逻辑，正好对应中国挨刀的那一端。`,
        en: `This card isn't in the story, but teacher said it lets you "step outside America alone"
to see the whole nineteenth century — so it goes in the review notebook to study on its own.
It sets America's expansion side by side with China, on the other side of the globe at the same time.

**The timing lines up**: 1845-1848 were the 25th to 28th years of the Daoguang reign of the Qing.
In that same stretch —

**America was "expanding"**: on the strength of "Manifest Destiny," it pushed its map to the
Pacific in a few years, took more than half of Mexico's territory, and became a power spanning
a continent.

**China was "being cut"**: the **Opium War** of 1839-1842 had just ended, and in 1842 the Qing
government was forced to sign the **Treaty of Nanjing** — ceding Hong Kong Island, opening five
ports to trade, paying an indemnity, and losing control over its own tariffs. This was the start
of China's modern "unequal treaties."

**Why look at them together (a structural comparison — no praise or blame)**:

① **One world, two fates**. A rising nation expanding outward by war and treaty (America),
and an ancient empire being cut inward by war and treaty (China).
With the same toolkit — gunboats plus treaties — America held the knife and China took the blade.

② **The two faces of a "treaty"**. For Vallejo, the Treaty of Guadalupe Hidalgo wrote protection
yet did not protect; for the Qing, the Treaty of Nanjing was openly a dictated peace.
A treaty is never neutral paper — its weight depends on who has the power to enforce and interpret it.

A principle teacher stressed (Rule 0): you cannot say America was "advanced, therefore right,"
nor that China was "backward, therefore deserved it."
Both are different positions in one global history — some expanding on the crest of the wave,
some struck beneath its foot. See both sides, and you start to understand what the
nineteenth century really was.

in Polk's story, he negotiates with the strong Britain and goes to war with the
weak Mexico — that "the tools follow power" logic is exactly the end of the blade China was on.`,
      },
      xiaoweiNote: {
        cn: `这张卡是我这个 ABC 同伴最想跟你聊的一张，因为它把美国课和中国家里听过的事接上了。

老师说 AP 不一定单考鸦片战争，但很爱考「global context（全球背景）」——
你能把美国扩张放进同一时间的世界里讲，分数就高。

我的记忆锚：同一台叫「西方扩张」的机器，1840 年代——
美国握刀（拿走墨西哥半壁），中国挨刀（《南京条约》）。
一句话总结：条约从来不是中立的纸，分量看谁握着执行它的力量。`,
        en: `This card is the one I — your ABC companion — most want to talk over with you, because it
connects the American class to things you may have heard about at home in a Chinese family.

Teacher said AP may not test the Opium War on its own, but loves "global context" — if you can
place America's expansion in the world of the same moment, you score higher.

My memory anchor: the same machine called "Western expansion," in the 1840s —
America held the knife (taking half of Mexico), China took the blade (the Treaty of Nanjing).
In one line: a treaty is never neutral paper — its weight depends on who holds the power to enforce it.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1845 年，一个报人写下「Manifest Destiny（昭昭天命）」——说美国向西铺满大陆是天注定的命运。
几年里，美国真的把版图推到了太平洋。

你觉得「这是我们注定的命运」这句话，是真心的信念，还是给「我们想要那片地」找的一件外衣？
用故事里至少两条具体证据支持你的判断。`,
      en: `In 1845 a journalist wrote "Manifest Destiny" — that America spreading across the continent
was a destiny ordained by Heaven. In a few years, America really did push its map to the Pacific.

Do you think the line "this is our destined fate" was a sincere belief, or a coat thrown over "we
want that land"? Support your judgment with at least two specific pieces of evidence from the stories.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。

「外衣/话术」这边的证据：
· 同一年，Polk 对强国英国用谈判、对弱国墨西哥用战争（俄勒冈 vs 美墨）——
  「天命」听起来，力量走的路可不一样。
· 他把双方争议的地说成「美国的土地」来宣战。
· Manifest Destiny 是记者造的口号，不是法律，也不是哪个官方机构认可的政策。

「真心信念」这边的证据：
· 成千上万移民沿 Oregon Trail 西行，「向西 = 希望」是真实的民意，不只是上面造出来的。
· Polk 自己真的相信这是国家的命运，不是在演戏。

高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性），AP 给高分。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.

Evidence for "a coat / rhetoric":
· The same year, Polk negotiated with the strong Britain and went to war with the weak Mexico
  (Oregon vs. Mexico) — if it was truly "destiny," it sure followed power rather than principle.
· He called the disputed strip "American soil" to declare war.
· Manifest Destiny was a journalist's slogan — not a law, not an officially recognized policy.

Evidence for "a sincere belief":
· Tens of thousands of settlers drove west along the Oregon Trail; "west = hope" was a real
  popular sentiment, not just something manufactured from above.
· Polk himself truly believed it was the nation's fate — he wasn't just performing.

High-scoring move: acknowledge both sides stand, then explain why you lean one way —
that's complexity, and that's what AP rewards.`,
      conceptsActivated: ['manifest-destiny', 'oregon-treaty'],
    },
    {
      id: 'q2',
      cn: `1846 年，同一个 Polk，对北边强大的英国用谈判（俄勒冈条约，以北纬 49 度划界），
对南边弱小的墨西哥用战争（攻入首都、割走半壁）。

如果你是 AP 老师，要出一道题，逼学生看清「决定一国是谈还是打的，到底是道理，还是力量对比」，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `In 1846, the same Polk negotiated with the strong Britain to the north (the Oregon Treaty,
drawing the line at the 49th parallel) and went to war with the weak Mexico to the south
(storming its capital, taking half its land).

If you were an AP teacher writing a question to make students see clearly "whether what decides
if a nation negotiates or fights is reason, or the balance of power," how would you phrase it?
Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的题目通常逼学生**同时看见两件事**，而不是二选一。

你可以让学生对比「俄勒冈（谈判）」和「美墨（战争）」——
这两件事是**同一年、同一个政府**做的：为什么对英国客气、对墨西哥动武？
背后量的是「对方有多硬」，还是「谁对谁错」？

进阶思考：再把这套逻辑接到「Manifest Destiny」——
如果谈还是打跟着力量走，那「天注定」这层外衣，是不是正好替力量遮了羞？`,
      hintEn: `Hint: a good question forces students to **see two things at once**, not just pick one.

You could have students compare "Oregon (negotiation)" against "Mexico (war)" —
two things done by the **same government in the same year**:
why courtesy to Britain and force against Mexico?
Does that measure "how hard the other side is," or "who is right"?

Going deeper: connect the logic back to "Manifest Destiny" — if negotiate-or-fight follows power,
does the coat of "destiny" conveniently cover for power?`,
      conceptsActivated: ['mexican-american-war', 'oregon-treaty', 'manifest-destiny'],
    },
    {
      id: 'q3',
      cn: `《Guadalupe Hidalgo 条约》第八条白纸黑字写着，墨西哥居民的财产「应受到不可侵犯的尊重」。
可几年后，Vallejo 在 1851 年土地法和十几年的诉讼里，把 17.5 万英亩磨成了几百英亩。

一纸写着「保护你」的条约，和真正的保护，差在哪里？
谁来执行规则，为什么有时候比规则本身写了什么更重要？用一个具体机制支持你的看法。`,
      en: `Articles VIII and IX of the Treaty of Guadalupe Hidalgo state in black and white that
Mexican residents' property "shall be inviolably respected." Yet a few years later, under the
1851 Land Act and over a decade of litigation, Vallejo ground 175,000 acres down to a few hundred.

What's the difference between a treaty that says "you are protected" and actual protection?
Why is who enforces the rules sometimes more important than what the rules themselves say?
Support your view with one specific mechanism.`,
      hintCn: `提示：先把「写了什么」和「谁执行」分清楚——这正是这题的核心。

具体机制可以举：
· 1851 California Land Act 把举证担子压到地主头上（要 Californio 自己证明地契有效）。
· 淘金客直接占地（squatter），在法庭判决前就住进去了。
· 十几年诉讼的律师费和利息把人拖垮。
· 「赢了官司、输了土地」——判决到手时地已经基本消耗完了。

进阶思考：今天你身边，有没有「说好对所有人一样、可落到某些人头上就走样」的规则？
一句答应你的保护，和真正执行它的那套流程，哪个更决定结果？
AP 看的是你能不能用一个真实机制，把抽象论点「钉」在证据上。`,
      hintEn: `Hint: first separate "what it says" from "who enforces it" — that's the heart of this question.

For a specific mechanism, try:
· The 1851 California Land Act piling the burden of proof onto the owners — Californios had to
  prove their own grants valid.
· Squatters physically occupying the land before any court ruling.
· The lawyers' fees and interest from a decade of litigation grinding people down.
· "Won the case, lost the land" — by the time the judgment arrived, the land was all but consumed.

Going deeper: in your life today, is there a rule that "says it's the same for everyone, yet bends
when it lands on certain people"? Which decides the outcome more — the fine words promised to you,
or the process that actually enforces them? AP wants you to "pin" the abstract claim to evidence
with one real mechanism.`,
      conceptsActivated: ['treaty-of-guadalupe-hidalgo', 'dispossession-land-act'],
    },
  ],
};

export default notebook;
