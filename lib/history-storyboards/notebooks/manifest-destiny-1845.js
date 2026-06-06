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
她说这是 APUSH 和加州本州史（CA HSS）都要考的——尤其加州孩子，因为加州本来是墨西哥的地。

她在白板上写了这几个名字：

James K. Polk（波尔克）、John O\\'Sullivan（奥沙利文）、
Henry David Thoreau（梭罗）、Mariano Vallejo（巴列霍）、Santa Anna（圣安纳）

还有一串词：Manifest Destiny（昭昭天命）、annexation（并入）、
Mexican-American War（美墨战争）、Treaty of Guadalupe Hidalgo（瓜达卢佩-伊达尔戈条约）、
cession（割让）、Oregon Treaty（俄勒冈条约）、Gold Rush（淘金热）。

我先抄下来，等下读三个故事——Polk（把版图推到太平洋的总统）、Thoreau（拒战坐牢的人）、
Vallejo（欢迎美国却失去土地的人）——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「西进扩张里，有真实的人民希望和国家成就，
也有真实的征服和失地。读它，要同时看见浪头上的人，和浪脚下的人。」`,
    en: `Today my teacher said we're learning the 1845 westward expansion called "Manifest Destiny."
She said it's tested on both APUSH and California's own state history (CA HSS) — especially for
California kids, because California was once Mexican land.

She wrote these names on the board:

James K. Polk, John O'Sullivan,
Henry David Thoreau, Mariano Vallejo, Santa Anna

Plus a string of terms: Manifest Destiny, annexation, Mexican-American War,
Treaty of Guadalupe Hidalgo, cession, Oregon Treaty, Gold Rush.

Let me copy these down. After I read the three stories — Polk (the president who pushed the
map to the Pacific), Thoreau (who went to jail rather than fund the war), and Vallejo (who
welcomed America yet lost his land) — I'll come back and check whether I can explain each one.

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
        mustKnow: false,
        audioKey: null,
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
      standardRef: ['APUSH Topic 5.3', 'CA HSS 8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'polk',
        nodeIds: ['polk-n2'],
        xiaoweiNote: {
          cn: `这个我读过！在 Polk 那一遍第 2 节，他讲 1845 年一个纽约报人 John O\\'Sullivan
写出两个字：Manifest Destiny（昭昭天命）。意思是——美国向西铺满整个大陆，
是上天注定、不容质疑的命运。

老师反复强调一个最容易错的点：
误解：「Manifest Destiny 是一部法律或官方政策」
正解：它是一个记者造的口号、一种流行的意识形态，不是法律。

考点关键句：这两个字是一句话术。它把「我们想要那片地」这个念头，
变成「老天定我们要那片地」——一个念头从此不用再被质疑，只需要被完成。

我自己的记忆锚：manifest = 明显的、注定的。
把「想拿」包装成「天命」，是这一课的核心套路。`,
          en: `I read this! In Polk's Lens Node 2 he tells how in 1845 a New York journalist, John
O'Sullivan, wrote two words, Manifest Destiny. The meaning, that America overspreading the
whole continent was a fate ordained by Providence, beyond question.

Teacher kept stressing the easiest mistake here:
Misconception: "Manifest Destiny was a law or an official policy."
Correction: It was a slogan a journalist coined, a popular ideology, not a law.

Key exam sentence, these two words were a piece of rhetoric. They turned the thought "we want
that land" into "Heaven decreed we should have that land" — a thought that from then on no
longer needed to be questioned, only carried out.

My own memory anchor, manifest = obvious, destined. Packaging "we want it" as "destiny" is
the core move of this whole topic.`,
        },
      },
    },

    {
      id: 'texas-annexation',
      termCn: '德州并入（1845）',
      termEn: 'Texas Annexation (1845)',
      standardRef: ['APUSH Topic 5.3', 'CA HSS 8.5'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'polk',
        nodeIds: ['polk-n3'],
        xiaoweiNote: {
          cn: `Polk 那一遍第 3 节讲的。德州本是墨西哥的地，1836 年那里的移民闹独立，
自立成了一个共和国。1845 年，美国正式把德州并进来（annexation），成为一个州。

考点关键句：墨西哥从来不承认德州独立，所以在它眼里，并入德州 = 美国明抢它的领土。
美墨关系一下子绷紧——这是后面那场战争的起点。

还有一个边界陷阱要记：德州和墨西哥之间，哪条河是界？
Polk 坚持是南边的 Rio Grande（格兰德河）；墨西哥说是更北的 Nueces 河（努埃西斯河）。
两条河之间那片争议地，就是后面战争第一枪响起的地方。

我的记忆锚：annex = 把一块地「接」进自己国家。德州只是 Polk 的「开头」，
他真正想要的是德州西边的加州。`,
          en: `Polk's Lens Node 3 covers this. Texas had been Mexican land; in 1836 the settlers
there rose for independence and made themselves a republic. In 1845 America formally brought
Texas in — annexation — as a state.

Key exam sentence, Mexico never recognized Texas's independence, so in its eyes annexing Texas
meant America openly seizing its territory. Relations snapped tight at once — the starting point
of the war that came later.

A border trap to remember, between Texas and Mexico, which river was the line? Polk insisted on
the Rio Grande to the south; Mexico said the Nueces River farther north. The disputed strip
between the two rivers is where the war's first shot rang out.

My memory anchor, annex = to "attach" a piece of land into your own country. Texas was only
Polk's "opening"; what he truly wanted was California, west of Texas.`,
        },
      },
    },

    {
      id: 'mexican-american-war',
      termCn: '美墨战争（1846-48）',
      termEn: 'Mexican-American War (1846-48)',
      standardRef: ['APUSH Topic 5.4', 'CA HSS 8.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'polk',
        nodeIds: ['polk-n4', 'polk-n5'],
        xiaoweiNote: {
          cn: `Polk 那一遍第 4、5 节是这场仗的核心。Polk 想买加州，墨西哥不卖也不见。
1846 年春，他派 Zachary Taylor 带军队进驻 Rio Grande 北岸那片争议地，
几乎就是在等对方先动手。4 月底墨军渡河交火，美军死了人。

1846 年 5 月 Polk 去国会要宣战，说了那句被反复引用的话：
「墨西哥已在美国的土地上（American soil）流了美国人的血。」
整句的重量全压在「美国的土地」五个字上——可那块地正是双方争议的。

考点关键句（起因之争，DBQ 高频）：这场仗到底是「墨西哥先开火的自卫战」，
还是「Polk 刻意挑衅、为夺地制造的战争」？一位伊利诺伊州年轻议员 Abraham Lincoln
提出「Spot Resolutions」追问：那个「点」到底在不在美国境内？

老师纠正的误解：「美墨战争是墨西哥先动手的自卫战」→
正解：第一枪发生在双方争议带，「墨西哥先开火」本身就是被争论的话术。
战争 1846-48，美军一路打进墨西哥城，墨西哥战败。`,
          en: `Polk's Lens Nodes 4 and 5 are the heart of this war. Polk wanted to buy California;
Mexico would not sell or even receive him. In the spring of 1846 he sent Zachary Taylor with
troops to the north bank of the Rio Grande, into the disputed strip, all but waiting for the
other side to strike first. In late April Mexican cavalry crossed and clashed, and American men died.

In May 1846 Polk went to Congress for war and said the much-quoted line, "Mexico has shed
American blood upon American soil." The whole weight rests on "American soil" — but that land
was exactly the disputed strip.

Key exam sentence (the causation debate, a high-frequency DBQ), was this war "Mexico's
self-defense after firing first," or "a war Polk deliberately provoked to seize land"? A young
Illinois congressman, Abraham Lincoln, put forward the "Spot Resolutions," pressing whether that
"spot" was truly inside the United States.

Misconception teacher corrected: "the Mexican-American War was Mexico's self-defense after it
struck first." Correction: the first shot fell in the disputed strip; "Mexico fired first" is itself a
contested piece of rhetoric. The war ran 1846-48; American forces fought into Mexico City, and
Mexico was defeated.`,
        },
      },
    },

    {
      id: 'treaty-of-guadalupe-hidalgo',
      termCn: '瓜达卢佩-伊达尔戈条约（1848）',
      termEn: 'Treaty of Guadalupe Hidalgo (1848)',
      standardRef: ['APUSH Topic 5.4', 'CA HSS 8.8', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'vallejo-receiving-end',
        nodeIds: ['vallejo-n4'],
        xiaoweiNote: {
          cn: `Vallejo 那一遍第 4 节从「被影响的人」这边讲这份条约最戳人。1848 年战争结束，
两国签《Treaty of Guadalupe Hidalgo（瓜达卢佩-伊达尔戈条约）》。

必背的数字（考点）：墨西哥割让（cession）约 52.5 万平方英里——约是它当时领土的 55%——
含加州、内华达、犹他、亚利桑那、新墨西哥及科罗拉多、怀俄明部分；美国付 1500 万美元。
这一大块就叫 Mexican Cession（墨西哥割让地）。

考点关键句：条约第八、九条白纸黑字承诺，留在割让地的墨西哥人可成为享有全部权利的
美国公民，而且他们的财产「应受到不可侵犯的尊重（shall be inviolably respected）」。
对 Vallejo 这样的人，这是一份国家级的保证。

这里埋了这一课最关键的张力（DBQ 爱考）：条约「写了」保护，
不等于真的「保护了」——这条线在后面失地那张卡会爆开。
记忆锚：Guadalupe Hidalgo = 战争的句号 + 一份后来没兑现的承诺。`,
          en: `Vallejo's Lens Node 4 tells this treaty from the side of the affected, and it hits
hardest. In 1848 the war ended and the two countries signed the Treaty of Guadalupe Hidalgo.

Must-memorize numbers (exam point), Mexico ceded — cession — about 525,000 square miles, roughly
55 percent of its territory at the time, including California, Nevada, Utah, Arizona, New Mexico
and parts of Colorado and Wyoming; America paid 15 million dollars. This great tract is the
Mexican Cession.

Key exam sentence, Articles VIII and IX promised in black and white that Mexicans who stayed in
the ceded land could become American citizens with full rights, and that their property "shall be
inviolably respected." For someone like Vallejo, this was a national pledge.

Here lies the topic's sharpest tension (a DBQ favorite), a treaty that "wrote" protection is not
the same as a treaty that actually "protected" — a thread that bursts open in the dispossession
card later. Memory anchor, Guadalupe Hidalgo = the period at the war's end + a promise that was
later not kept.`,
        },
      },
    },

    {
      id: 'oregon-treaty',
      termCn: '俄勒冈条约（1846，北纬 49 度）',
      termEn: 'Oregon Treaty (1846, 49th parallel)',
      standardRef: ['APUSH Topic 5.3', 'CA HSS 8.5'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'polk',
        nodeIds: ['polk-n6'],
        xiaoweiNote: {
          cn: `Polk 那一遍第 6 节是这一课我觉得最聪明的一节，因为它把 Polk 整套逻辑照穿了。
1846 年，北边还有一块美英共管的大地：俄勒冈。当时扩张派喊得最响的口号是
「54-40 or fight」（拿到北纬 54 度 40 分，否则开打），听上去要跟英国死磕。

可真到谈判桌上，他没跟英国打，而是和和气气签了《Oregon Treaty（俄勒冈条约）》，
以北纬 49 度（the 49th parallel）划界。

考点关键句（对照题高频）：同一年、同一个 Polk——对北边的英国用谈判，
对南边的墨西哥用战争。为什么？因为英国强、打不划算；墨西哥弱、打它能拿到加州。
所以「天命」听起来像天意，其实从来跟着力量走。

记忆锚：俄勒冈 = 49 度 + 谈判；墨西哥 = 割地 + 战争。
一个量「对错」，一个量「对方有多硬」——量的从来是后者。`,
          en: `Polk's Lens Node 6 is, to me, the cleverest node in the whole topic, because it lights
up Polk's entire logic. In 1846 a great land in the north was still held jointly by America and
Britain, Oregon. The loudest expansionist slogan of the day was "54-40 or fight" (take it up to
54 degrees 40 minutes, or go to war), sounding ready to fight Britain to the end.

But at the actual table he did not fight Britain; he peaceably signed the Oregon Treaty, drawing
the line at the 49th parallel.

Key exam sentence (a frequent compare question), the same year, the same Polk — with the Britain
to the north, negotiation; with the Mexico to the south, war. Why? Britain was strong and fighting
it was not worth the cost; Mexico was weak, and fighting it would win California. So "destiny"
sounds like Heaven's will, but it always followed power.

Memory anchor, Oregon = 49th parallel + negotiation; Mexico = cession + war. One measures "right
and wrong," the other measures "how hard the other side is" — and it always measured the latter.`,
        },
      },
    },

    {
      id: 'california-gold-rush',
      termCn: '加州淘金热（1848-49）',
      termEn: 'California Gold Rush (1848-49)',
      standardRef: ['APUSH Topic 5.4', 'CA HSS 8.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'vallejo-receiving-end',
        nodeIds: ['vallejo-n5'],
        xiaoweiNote: {
          cn: `Polk 那一遍第 7 节先讲发现金子（条约签字同年，1848 年加州发现金矿，
他大概觉得「连金子都在等我们」）；但 Vallejo 那一遍第 5 节从失地者这边讲，才看得见金子的另一面。

考点事实：1848 年加州发现金矿，1849 年淘金客（forty-niners）从全美、全世界涌进加州——
几个月里几十万人。这就是 Gold Rush（淘金热），直接引爆加州人口暴涨，逼出 1850 年加州建州。

考点关键句：这些淘金客绝大多数不认识 Vallejo、不认条约、不在乎一个墨西哥人的地契。
他们看到的只有空着、没围墙的地，直接住下——这种人当时叫 squatter（占地者）。
Vallejo 去理论，对方反问：「你的地契呢？拿到美国法院去证明。」

记忆锚：金子 = 机会，也 = 失地的导火索。同一座金山，
Polk 看见的是天命，Vallejo 看见的是涌来占他牧场的人。`,
          en: `Polk's Lens Node 7 first tells of the gold (in 1848, the same year the treaty was
signed, gold was found in California, and he likely thought "even the gold is waiting for us"); but
Vallejo's Lens Node 5, from the side of the dispossessed, shows gold's other face.

Exam facts, gold was found in California in 1848; in 1849 gold-seekers (forty-niners) poured into
California from all over America and the world — hundreds of thousands within months. This is the
Gold Rush, which set off an explosion in California's population and forced statehood in 1850.

Key exam sentence, these gold-seekers mostly did not know Vallejo, did not know any treaty, and
cared nothing for a Mexican's land grant. They saw only empty, unwalled land and simply settled —
such people were called squatters then. When Vallejo went to reason, they asked back, "Where is
your grant? Bring it to an American court to prove it."

Memory anchor, gold = opportunity, and also = the fuse of dispossession. The same mountain of
gold, Polk saw destiny; Vallejo saw the people pouring in to occupy his ranch.`,
        },
      },
    },

    {
      id: 'dispossession-land-act',
      termCn: '墨西哥裔与原住民的失地（1851 土地法）',
      termEn: 'Dispossession of Mexicans & Native Nations (1851 Land Act)',
      standardRef: ['APUSH Topic 5.4', 'CA HSS 8.8', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'vallejo-receiving-end',
        nodeIds: ['vallejo-n6', 'vallejo-n7', 'vallejo-n8', 'vallejo-n9'],
        xiaoweiNote: {
          cn: `Vallejo 那一遍第 6 到 9 节，是这份条约「写了却没保护」的爆发点。
1851 年美国国会通过 California Land Act（加州土地法），专对 Californio 地主：
你们西班牙、墨西哥时代的地契一律不算数，除非到一个委员会前、按美国标准一笔笔证明，
通过了地才还是你的。

考点关键句：它把举证的担子整个压到地主头上——不是「你证明这地不是我的」，
而是「我证明这地是我的」。打官司一拖十几年，律师费、利息、被占的牛羊把人拖垮。
很多 Californio（包括 Vallejo）「赢了官司，输了土地」——判决到手时地已经基本没了。
Vallejo 约 17.5 万英亩，最后只剩几百英亩。

核心提炼（DBQ 高频）：他们不需要派军队抢，只需要一套「请按我的方式证明它是你的」规则，
就足够磨垮人。同一句「财产不可侵犯」，条约里保护他，法庭里被用来一刀刀割他。

还有一层不能漏（第 8 节）：Vallejo 自己那 17.5 万英亩，最早也是西班牙、墨西哥时代
从更早住这儿的原住民手里一层层拿来的。失地是一条链——原住民被推到一边，
然后 Californio 又被美国人推到一边。
注意别跟泪之路搞混：切罗基迁移（1838-39）是另一个主题，本题是 1840s 加州的失地。`,
          en: `Vallejo's Lens Nodes 6 through 9 are where the treaty that "wrote protection but did not
protect" bursts open. In 1851 the U.S. Congress passed the California Land Act, aimed at Californio
landholders, your Spanish and Mexican grants count for nothing unless you appear before a board and
prove them, clause by clause, by American standards; only then does the land stay yours.

Key exam sentence, it piled the whole burden of proof onto the owners — not "you prove this land is
not mine," but "I prove this land is mine." Lawsuits dragged on for over a decade; lawyers' fees,
interest, and stolen livestock ground people down. Many Californios (Vallejo among them) "won the
case and lost the land" — by the time the judgment arrived the land was all but gone. Vallejo's
roughly 175,000 acres ended at a few hundred.

Core takeaway (high-frequency DBQ), they did not need an army to seize the land; a set of rules,
"prove, by my method, that it is yours," was enough to grind a man down. The same line, "property
is inviolable," protected him in the treaty and cut him slice by slice in court.

One more layer not to miss (Node 8), Vallejo's own 175,000 acres were themselves taken, layer by
layer, in the Spanish and Mexican times, from the native peoples who lived there earlier.
Dispossession is a chain — natives pushed aside, then Californios pushed aside by the Americans.
Do not mix this up with the Trail of Tears: the Cherokee removal (1838-39) is a different topic;
this one is 1840s dispossession in California.`,
        },
      },
    },

    {
      id: 'wilmot-proviso',
      termCn: '威尔莫特但书（1846）',
      termEn: 'Wilmot Proviso (1846)',
      standardRef: ['APUSH Topic 5.5', 'APUSH CED KC-5.3.I'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这张卡故事里没讲，但它是 APUSH 最高频的 causation 起点——从美墨战争直连内战。

**背景**：1846 年，美墨战争刚开打，国会就在争：打赢拿到新地，能不能蓄奴？

**威尔莫特但书**：宾州众议员 David Wilmot 提出修正案，要求从墨西哥拿到的**任何新领土**
永久禁止奴隶制。措辞借用 1787 年《西北法令》禁奴条款——先例在手，对手难说「新发明」。

**结果**：众议院两次通过，参议院两次否决。两院的票数裂痕把南北方的分歧**第一次数字化**了。

**为什么是因果链起点**：
1. 没通过，但把「新土地 + 奴隶制」变成无法回避的公开议题。
2. 直接牵出 1850 妥协案 → 堪萨斯-内布拉斯加法（1854）→ 共和党成立（1854）→ 内战。
3. 把奴隶制从「道德问题」升级成「领土问题」——这个转变是后续所有争论的根。

考点关键句：Wilmot Proviso（1846）= 美墨战争后「新土地能不能蓄奴」的**第一刀**，
南北公开撕裂的起点。**没通过 ≠ 没影响**：它点燃了二十年的导火索。`,
        en: `This card is not in the story, but it is one of the highest-frequency causation-chain
starting points on the APUSH exam, running from the victory of the Mexican-American War all
the way to the outbreak of the Civil War.

**Background**: in 1846, with the Mexican-American War barely started, Congress was already
fighting over what would happen if America won and took new land — would slavery be permitted there?

**The Wilmot Proviso**: Pennsylvania congressman **David Wilmot** proposed an amendment
demanding the **permanent prohibition of slavery in any territory obtained from Mexico**.
The wording directly borrowed the anti-slavery clause of the Northwest Ordinance (1787),
using a well-established precedent so opponents could not easily call it an invention.

**Outcome**: it passed the House twice and was defeated in the Senate twice. The precise vote
split between the two chambers made the North-South divide over slavery's expansion **visible in
numbers for the first time**.

**Why it is the causation-chain starting point** (the highest-frequency AP framing):
1. The Proviso failed to pass, but it turned "slavery in new territories" into an unavoidable
   public question.
2. It led directly to the Compromise of 1850, the Kansas-Nebraska Act (1854), and the founding
   of the Republican Party (1854), a single chain running to the Civil War.
3. It shifted slavery from a "moral question" to a "territorial question" — that shift is the
   root of every argument that followed.

Key exam sentence: the Wilmot Proviso (1846) = the **first cut** in the fight over whether
slavery could expand into land won from Mexico, and the opening of the public, vote-counted
North-South rupture in Congress. Remember: it **did not pass**, but it lit the fuse that burned
for the next twenty years.`,
      },
      xiaoweiNote: {
        cn: `老师说 Wilmot Proviso 是 AP 最爱考「然后呢、然后呢」这种因果链的起点——
你知道它，整条链（1846→1850→1854→1861）就能说清楚；你不知道，链子就断在第一环。

我自己的记忆锚：**「46 年那刀，南北数票裂」**。
- 1846 = 但书提出
- 众议院过、参议院否 = 南北方票数第一次公开撕裂
- 没通过 ≠ 没影响：它把「新土地 + 奴隶制」这个炸弹放到桌上，二十年都没收走。`,
        en: `Teacher said the Wilmot Proviso is the AP's favorite starting point for "and then?
and then?" causal chains. Know it and the whole chain (1846 to 1850 to 1854 to 1861) makes
sense; miss it and the chain breaks at the first link.

My memory anchor: "the 1846 cut, North and South split on the count." 1846 = the Proviso
introduced; House passes, Senate kills = the first public, vote-counted North-South split;
it did not pass, but that is not the same as no effect: it put "new land plus slavery" on
the table as a live bomb that stayed there for twenty years.`,
      },
    },

    {
      id: 'china-opium-war-parallel',
      termCn: '同时代的中国：鸦片战争对照',
      termEn: 'The China Parallel: the Opium War',
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
所以放进出口笔记单独学。它是把美国的扩张，和同一时间地球另一端的中国，并排放在一起看。

**时间对得上**：1845-1848 年，是清朝道光二十五年到二十八年。同一段时间——
- **美国在「扩张」**：靠一句「昭昭天命」，几年内把版图推到太平洋，
  从墨西哥手里拿走它一半以上的领土，成了横跨大陆的强国。
- **中国在「被切」**：1839-1842 年的**鸦片战争**刚结束，1842 年清政府被迫签下
  **《南京条约》**——割让香港岛、开放五口通商、赔款、丧失关税自主权。
  这是中国近代「不平等条约」的开端。

**为什么放一起看（结构对照，不褒贬）**：
1. **同一个世界、两种命运**：一个新兴国家在用战争和条约向外扩张（美国），
   一个古老帝国在被战争和条约向内切割（中国）。同样是「炮舰 + 条约」这套近代工具，
   美国是握刀的一方，中国是挨刀的一方。
2. **「条约」的两副面孔**：对 Vallejo，《Guadalupe Hidalgo 条约》写着保护他、却没保护他；
   对清政府，《南京条约》明着就是城下之盟。条约从来不是中立的纸——
   它的分量，取决于谁有力量去执行它、解释它。

一个老师特别强调的原则（Rule 0）：不能说美国「先进所以对」，
也不能说中国「落后所以活该」。两边都是同一段全球史的不同位置：
有人在浪头上扩张，有人在浪脚下挨打。看清两边，才看得懂 19 世纪到底发生了什么。

故事连接：Polk 那一遍第 6 节里，他对强大的英国谈判、对弱小的墨西哥开战——
「工具跟着力量走」这套逻辑，正好对应中国挨刀的那一端。`,
        en: `This card isn't in the story, but teacher said it lets you "step outside America alone"
to see the whole nineteenth century — so it goes in the exit notebook to study on its own. It sets
America's expansion side by side with China, on the other side of the globe at the same time.

**The timing matches**, 1845-1848 were the 25th to 28th years of the Daoguang reign of the Qing.
In that same stretch —
- **America was "expanding,"** on the strength of "Manifest Destiny" it pushed its map to the
  Pacific in a few years, took more than half of Mexico's territory, and became a power spanning a continent.
- **China was "being cut,"** the **Opium War** of 1839-1842 had just ended, and in 1842 the Qing
  government was forced to sign the **Treaty of Nanjing** — ceding Hong Kong Island, opening five
  ports to trade, paying an indemnity, and losing control over its own tariffs. This was the start
  of China's modern "unequal treaties."

**Why look at them together (a structural comparison, no praise or blame)**,
1. **One world, two fates**, a rising nation expanding outward by war and treaty (America), and an
   ancient empire being cut inward by war and treaty (China). With the same modern tools, "gunboats
   plus treaties," America held the knife and China took the blade.
2. **The two faces of a "treaty,"** for Vallejo the Treaty of Guadalupe Hidalgo wrote protection
   yet did not protect; for the Qing, the Treaty of Nanjing was openly a dictated peace. A treaty is
   never neutral paper — its weight depends on who has the power to enforce and interpret it.

A principle teacher stressed (Rule 0), you cannot say America was "advanced, therefore right,"
nor that China was "backward, therefore deserved it." Both are different positions in one global
history, some expanding on the crest of the wave, some struck beneath its foot. See both sides, and
you start to understand what the nineteenth century really was.

Story link: in Polk's Lens Node 6 he negotiates with the strong Britain and goes to war with the
weak Mexico — that "the tools follow power" logic is exactly the end of the blade China was on.`,
      },
      xiaoweiNote: {
        cn: `这张卡是我这个 ABC 同伴最想跟你聊的一张，因为它把美国课和中国家里听过的事接上了。
老师说 AP 不一定单考鸦片战争，但很爱考「global context（全球背景）」——
你能把美国扩张放进同一时间的世界里讲，分数就高。

我的记忆锚：同一台叫「西方扩张」的机器，1840 年代——美国握刀（拿走墨西哥半壁），
中国挨刀（《南京条约》）。一句话总结：条约从来不是中立的纸，分量看谁握着执行它的力量。`,
        en: `This card is the one I, your ABC companion, most want to talk over with you, because it
connects the American class to things you may have heard about at home in a Chinese family. Teacher
said AP may not test the Opium War on its own, but loves "global context" — if you can place
America's expansion in the world of the same moment, you score higher.

My memory anchor, the same machine called "Western expansion," in the 1840s — America held the
knife (taking half of Mexico), China took the blade (the Treaty of Nanjing). In one line, a treaty
is never neutral paper; its weight depends on who holds the power to enforce it.`,
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
      en: `In 1845 a journalist wrote "Manifest Destiny" — that America overspreading the continent
was a destiny ordained by Heaven. In a few years America really did push its map to the Pacific.

Do you think the line "this is our destined fate" was a sincere belief, or a coat thrown over "we
want that land"? Support your judgment with at least two specific pieces of evidence from the story.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- 「外衣/话术」这边的证据：Polk 同一年对强国英国谈判、对弱国墨西哥开战（俄勒冈 vs 美墨）；
  把双方争议的地说成「美国的土地」来宣战；Manifest Destiny 是记者造的口号、不是法律。
- 「真心信念」这边的证据：成千上万移民沿 Oregon Trail 西行，「向西=希望」是真实的民意；
  Polk 自己真的相信这是国家的命运。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint, no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.
- Evidence for "a coat / rhetoric", Polk in the same year negotiated with the strong Britain and
  went to war with the weak Mexico (Oregon vs. Mexico); he called the disputed strip "American soil"
  to declare war; Manifest Destiny was a journalist's slogan, not a law.
- Evidence for "a sincere belief", tens of thousands of settlers drove west along the Oregon Trail,
  and "west = hope" was a real popular sentiment; Polk himself truly believed it was the nation's fate.
High-scoring move, acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['manifest-destiny', 'oregon-treaty'],
    },
    {
      id: 'q2',
      cn: `1846 年，同一个 Polk，对北边强大的英国用谈判（俄勒冈条约，49 度划界），
对南边弱小的墨西哥用战争（攻入首都、割走半壁）。

如果你是 AP 老师，要出一道题，逼学生看清「决定一国是谈还是打的，到底是道理，还是力量对比」，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `In 1846 the same Polk negotiated with the strong Britain to the north (the Oregon Treaty,
the line at the 49th parallel) and went to war with the weak Mexico to the south (storming its
capital, taking half its land).

If you were an AP teacher writing a question to make students see clearly "whether what decides if a
nation negotiates or fights is reason, or the balance of power," how would you phrase it? Write your
question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常逼学生**同时看见两件事**，而不是二选一。
你可以让学生对读「俄勒冈（谈判）」和「美墨（战争）」这两件**同一年、同一个政府**做的事——
为什么对英国客气、对墨西哥动武？这背后量的是「对方有多硬」还是「谁对谁错」？
进阶：再让学生把这套逻辑接到「Manifest Destiny」——
如果谈还是打跟着力量走，那「天注定」这层外衣，是不是正好替力量遮了羞？`,
      hintEn: `Hint, a good DBQ forces students to **see two things at once**, not pick one. You could
have students read "Oregon (negotiation)" against "Mexico (war)," two things done by the **same
government in the same year** — why courtesy to Britain and force against Mexico? Does that measure
"how hard the other side is," or "who is right"? Going deeper, connect the logic back to "Manifest
Destiny" — if negotiate-or-fight follows power, does the coat of "destiny" conveniently cover for power?`,
      conceptsActivated: ['mexican-american-war', 'oregon-treaty', 'manifest-destiny'],
    },
    {
      id: 'q3',
      cn: `《Guadalupe Hidalgo 条约》第八条白纸黑字写着，墨西哥居民的财产「应受到不可侵犯的尊重」。
可几年后，Vallejo 在 1851 年土地法和十几年的诉讼里，把 17.5 万英亩磨成了几百英亩。

一纸写着「保护你」的条约，和真正的保护，差在哪里？
谁来执行规则，为什么有时候比规则本身写了什么更重要？用一个具体机制支持你的看法。`,
      en: `Articles VIII and IX of the Treaty of Guadalupe Hidalgo state in black and white that
Mexican residents' property "shall be inviolably respected." Yet a few years later, under the 1851
Land Act and over a decade of litigation, Vallejo ground 175,000 acres down to a few hundred.

What's the difference between a treaty that says "you are protected" and actual protection? Why is
who enforces the rules sometimes more important than what the rules themselves say? Support your view
with one specific mechanism.`,
      hintCn: `提示：先把「写了什么」和「谁执行」分清楚——这正是这题的核心。
具体机制可以举：1851 California Land Act 把举证担子压到地主头上（要 Californio 自己证明地契有效）；
淘金客直接占地（squatter）；十几年诉讼的律师费和利息；「赢了官司、输了土地」。
进阶思考：今天你身边，有没有「说好对所有人一样、可落到某些人头上就走样」的规则？
一句答应你的漂亮话，和真正执行它的那套流程，哪个更决定结果？
AP 看的是你能不能用一个真实机制，把抽象论点「钉」在证据上。`,
      hintEn: `Hint, first separate "what it says" from "who enforces it" — that's the heart of this
question. For a specific mechanism, try, the 1851 California Land Act piling the burden of proof onto
owners (Californios had to prove their own grants valid); squatters simply occupying land; the
lawyers' fees and interest of a decade of litigation; "won the case, lost the land." Going deeper, in
your life today, is there a rule that "says it's the same for everyone, yet bends when it lands on
certain people"? Which decides the outcome more — the fine words promised to you, or the process that
actually enforces them? AP wants you to "pin" the abstract claim to evidence with one real mechanism.`,
      conceptsActivated: ['treaty-of-guadalupe-hidalgo', 'dispossession-land-act'],
    },
  ],
};

export default notebook;
