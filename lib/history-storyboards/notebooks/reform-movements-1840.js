// ─── 同伴笔记本架构 v1 · The Antebellum Reform Movements 1830-1850 ───
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
//   - storyboard 提供情感锚点（Stanton / Douglass / 被奴役女性 三条故事线）
//   - notebook 提供考点闭环（第二次大觉醒 → 废奴/女权/禁酒/教育与收容所改革 + 运动内部的排除
//     + Taiping/Qing 结构对照 §8 — 补完 APUSH Period 4 / CA HSS 8.6 课纲）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - APUSH Period 4 (1800-1848)：Topic 4.11-4.12（Second Great Awakening 与社会改革的因果链）
//   - California HSS Grade 8.6（工业化前夜的改革浪潮）
//
// 事实地基：对账 history-narratives/reform-movements-1840.md
//   - Seneca Falls：1848 年 7 月 19-20 日（账本 §1/附录 A）
//   - Garrison《The Liberator》1831；American Anti-Slavery Society 1833；American Temperance Society 1826
//   - Dorothea Dix 1843 年向马萨诸塞州议会递交揭露精神病人处境的 memorial
//   - Horace Mann 1830s-40s 马萨诸塞公立学校（common-school）改革
//   - anti-fab 第8A：Sojourner Truth「Ain\'t I a Woman?」措辞 = Frances Gage 1863 年重构，非 1851 现场逐字记录 —— 必须标「后人重构」
//   - 与 slavery-abolition-1850 不重叠：那个 Topic = 奴隶制本身 + 地下铁路；本 Topic = 改革年代各运动 + 其内部排除
//
// schemaVersion: 1 · notebookVersion: reform-movements-1840-v1

export var notebook = {
  topicId: 'reform-movements-1840',
  topicNameCn: '改革年代 1830-1850',
  topicNameEn: 'The Antebellum Reform Movements 1830-1850',
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
    cn: `今天老师说我们要学 1830 到 1850 年代美国的「改革年代」（the Antebellum Reform Movements）。
她说这是 APUSH Period 4 的必考块。中国课本几乎不教——最多就一句「废奴运动」带过，女权、宗教复兴、禁酒这些全省掉了。

她给了一张纸，上面写着这些名字：

Elizabeth Cady Stanton（斯坦顿）、Frederick Douglass（道格拉斯）、
Lucretia Mott（莫特）、Dorothea Dix（迪克斯）、Horace Mann（曼）、Sojourner Truth（特鲁思）

还有一串词：Second Great Awakening（第二次大觉醒）、abolition（废奴，就是要完全废掉奴隶制）、
suffrage（投票权）、Seneca Falls（塞内卡福尔斯大会）、
Declaration of Sentiments（情感宣言）、temperance（禁酒）、reform（改革）、perfectibility（人可完善）。

我先记下来，等下读三条故事线——
Stanton 那条（把这把火点起来的人）、Douglass 那条（在废奴和女权两场运动之间架桥的人）、
一个被奴役的黑人女性那条（被两张改革桌子都漏掉的人）——读完再回来对照这张单子，看我能不能解释每个词。

老师说了一句话，我抄在笔记本第一页：「这是一个真心想把世界改好的年代。它推开了一扇门，
也关上了另一扇。读它，要同时看见它的善意和它漏掉的人。」`,
    en: `Today my teacher said we're studying the American "reform age" from the 1830s to 1850s,
called the Antebellum Reform Movements. She said it's a required block for APUSH Period 4.
The Chinese curriculum barely touches it — at most one line about abolition, and that's it.
Women's rights, religious revival, temperance: all left out.

She gave us a sheet with these names:

Elizabeth Cady Stanton, Frederick Douglass,
Lucretia Mott, Dorothea Dix, Horace Mann, Sojourner Truth

Plus a bunch of terms: Second Great Awakening, abolition (that means completely ending slavery),
suffrage, Seneca Falls, Declaration of Sentiments, temperance, reform, perfectibility.

Let me write these down. After I read the three story lines —
Stanton's (the person who lit this fire), Douglass's (the person who built a bridge between
the abolition and women's rights movements), and an enslaved Black woman's
(the person both reform tables left out) — I'll come back and check whether I can explain each word.

My teacher said one line that I copied onto the first page of my notebook:
"This was an age that sincerely wanted to make the world better. It pushed one door open,
and shut another. To read it, you have to see both its goodwill and the people it left out."`,
    keyTerms: [
      { cn: '第二次大觉醒', en: 'Second Great Awakening' },
      { cn: '人可完善', en: 'perfectibility' },
      { cn: '改革', en: 'reform' },
      { cn: '废奴 / 废奴派', en: 'abolition / abolitionist' },
      { cn: '投票权', en: 'suffrage' },
      { cn: '塞内卡福尔斯大会（1848）', en: 'Seneca Falls Convention' },
      { cn: '情感宣言', en: 'Declaration of Sentiments' },
      { cn: '禁酒运动', en: 'temperance movement' },
      { cn: '公立学校运动', en: 'common-school movement' },
      { cn: '收容所 / 监狱改革', en: 'asylum / prison reform' },
      { cn: '夫权遮蔽（已婚女性法律人格消失）', en: 'coverture' },
      { cn: '自愿结社', en: 'voluntary association' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '伊丽莎白·卡迪·斯坦顿',
        nameEn: 'Elizabeth Cady Stanton',
        ipa: '/ɪˈlɪzəbəθ ˈkeɪdi ˈstæntən/',
        roleCn: 'Seneca Falls 大会的组织者，《情感宣言》的起草人。她把「all men」改成「all men and women」——但她心里的「女人」主要是白人有产女性',
        roleEn: 'Organizer of the Seneca Falls Convention and author of the Declaration of Sentiments. She changed "all men" to "all men and women," but the women she had in mind were mostly white and propertied',
        mustKnow: true,
        audioKey: 'elizabeth-cady-stanton',
      },
      {
        nameCn: '弗雷德里克·道格拉斯',
        nameEn: 'Frederick Douglass',
        ipa: '/ˈfrɛdrɪk ˈdʌɡləs/',
        roleCn: '逃奴出身，后来自己办报纸（North Star）。他是 Seneca Falls 大会上唯一公开替女性投票权站台的黑人男性，在废奴和女权两场运动之间架桥',
        roleEn: 'Born into slavery, later founded his own newspaper (the North Star). He was the only Black man to publicly back women\'s suffrage at Seneca Falls, bridging the abolition and women\'s rights movements',
        mustKnow: true,
        audioKey: 'frederick-douglass',
      },
      {
        nameCn: '卢克丽霞·莫特',
        nameEn: 'Lucretia Mott',
        ipa: '/luːˈkriːʃə mɒt/',
        roleCn: 'Seneca Falls 的共同组织者。1840 年她和 Stanton 一起被伦敦废奴大会拦在场外——因为她们是女人。就在那时，两人约定：回去要为女人开一场会',
        roleEn: 'Co-organizer of the Seneca Falls Convention. In 1840 she and Stanton were barred from speaking at the London anti-slavery convention because they were women. That moment is when the two agreed to hold a convention of their own',
        mustKnow: true,
        audioKey: 'lucretia-mott',
      },
      {
        nameCn: '多萝西娅·迪克斯',
        nameEn: 'Dorothea Dix',
        ipa: '/ˌdɔːrəˈθiːə dɪks/',
        roleCn: '收容所和监狱改革者。1843 年她走访马萨诸塞各地监狱，发现精神病人被当罪犯关押，于是向州议会递交报告，推动建立专门的精神病收容所',
        roleEn: 'Asylum and prison reformer. In 1843 she toured Massachusetts jails, found the mentally ill treated like criminals, and submitted a report to the state legislature that pushed for proper asylums',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '霍勒斯·曼',
        nameEn: 'Horace Mann',
        ipa: '/ˈhɒrəs mæn/',
        roleCn: '公立学校运动的领袖。1830s-40s 在马萨诸塞州推动建立免费的、向所有孩子开放的公立学校（common school）',
        roleEn: 'Leader of the common-school movement. In the 1830s-40s he pushed Massachusetts to build free public schools open to every child',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '索杰纳·特鲁思',
        nameEn: 'Sojourner Truth',
        ipa: '/soʊˈdʒɜːrnər truːθ/',
        roleCn: '逃奴出身，同时为废奴和女权奔走。1851 年在俄亥俄州 Akron 的女权大会上，她质问：这个运动里的「女人」，算不算我这样的黑人女人',
        roleEn: 'Born into slavery, she fought for both abolition and women\'s rights. At the 1851 Akron women\'s rights convention in Ohio, she challenged whether the "woman" in this movement counted someone like her — a Black woman',
        mustKnow: true,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'second-great-awakening',
      termCn: '第二次大觉醒（改革浪潮的引擎）',
      termEn: 'The Second Great Awakening (Engine of Reform)',
      defCn: '1800 年前后席卷美国的一场宗教大复兴。它带来一个关键想法：人是可以变好的，社会是可以改造的。这个信念点燃了废奴、女权、禁酒等一连串改革运动。',
      defEn: 'A great religious revival that swept America around 1800. It spread the idea that people can be made better and society can be improved. That belief fired up abolition, women\'s rights, temperance, and a string of other reform movements.',
      standardRef: ['APUSH Period 4 (KC-4.1.II)', 'CA HSS 8.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'stanton',
        nodeIds: ['st-n3'],
        xiaoweiNote: {
          cn: `这个我在 Stanton 那条故事线里读到了！那一节讲了一阵席卷全国的风。

1800 年前后，一场宗教大复兴扫过美国，叫 **Second Great Awakening（第二次大觉醒）**。
传教士在野地里搭帐篷，几千人聚在一起祷告、哭喊、悔改。

它带来一个特别有劲的想法：
1. 人不是生来就坏、只能等死后审判。
2. 人可以变好，社会可以变好，甚至可以「完善」。
3. 这个信念有个考点词：**perfectibility（人可完善）**——就是「人和社会都能被改造得更好」。

考点关键句：第二次大觉醒的「人可完善」神学 = 整个改革浪潮的**引擎**。
这股宗教热一旦点着，就变成了社会行动——禁酒、办公立学校、改造监狱和收容所、废奴，一个接一个冒出来。

老师强调的误解陷阱：
❌ 「第二次大觉醒只是一场宗教事件，跟社会改革没关系」
✅ 它正是改革年代的总开关，把「信上帝」变成了「去改造这个世界」。
AP 爱考这条因果链：宗教复兴 → 人可完善 → 一整波改革运动。`,
          en: `I read about this in Stanton's story line! That section describes a wind that swept the whole country.

Around 1800 a great religious revival rolled across America — the **Second Great Awakening**.
Preachers raised tents in open fields. Thousands gathered to pray, weep, and repent.

It brought a really energizing idea:
1. People are not born wicked and doomed to wait for judgment after death.
2. People can be made better. Society can be made better — even "perfected."
3. That belief has an exam word: **perfectibility** — the idea that both people and society can be improved.

Key exam sentence: the Second Great Awakening's "perfectibility" theology = the **engine** of the whole reform wave.
Once that religious energy caught, it turned into social action — temperance, public schools, prison and asylum reform, abolition, rising one after another.

Teacher's misconception trap:
❌ "The Second Great Awakening was just a religious event with nothing to do with social reform."
✅ It was the master switch of the reform age, turning "believe in God" into "go remake this world."
AP loves this causal chain: religious revival → perfectibility → a whole wave of reform movements.`,
        },
      },
    },

    {
      id: 'market-revolution-engine',
      termCn: '市场革命：改革年代的经济引擎',
      termEn: 'The Market Revolution: Economic Engine of Reform',
      defCn: '1800-1850 年美国经济的大转型。运河、蒸汽船、铁路把全国连成一片；工厂让第一批工资工人出现；货币渗透进每个家庭。这个转型是改革运动能在全国扩散的物质基础。',
      defEn: 'The big shift in the American economy between 1800 and 1850. Canals, steamboats, and railroads connected the whole country; factories created the first generation of wage workers; money reached every household. This transformation is what allowed reform movements to spread nationally.',
      standardRef: ['APUSH Period 4 (KC-4.2.I)', 'CA HSS 8.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'stanton', nodeId: 'st-n2', context: 'Stanton 成长的纽约州正是运河经济腾飞的核心地带，工厂与集市重塑了她的世界' },
        ],
      },
      standaloneText: {
        cn: `这张卡 Stanton 那条故事线里只带过，但它是 APUSH Period 4 的骨架——没有它，改革运动看起来像凭空冒出来的。

**市场革命（Market Revolution）**：1800-1850 年，三组变化同时发生：

1. **交通革命**：伊利运河（1825 年开通，把五大湖和纽约城连起来）、蒸汽船、铁路。货物、人和信息第一次能快速流通全国。
2. **工厂体系**：以马萨诸塞州洛厄尔（Lowell）纺织厂为代表，第一批「离家去工厂上班」的工资工人出现了——其中很多是年轻的农家女儿（Lowell Girls）。
3. **货币经济渗透**：以前自家种粮自家吃的农民，开始为市场生产、用工资买东西，家家户户都跟市场挂钩了。

**跟改革运动的关系**：

- **印刷 + 全国流通**：有了交通网络，报纸和传单才能快速传到全国。Garrison 的《The Liberator》、Douglass 的 North Star、《情感宣言》才能变成全国性运动。
- **「分离的领域」（Separate Spheres）**：市场革命把男人推出家门进工厂和市场，把女人留在家里。这套话语把「家 / 女性 = 道德 / 纯洁」和「市场 / 男性 = 竞争 / 腐化」对立起来。Stanton 和 Garrison 都借用了这个逻辑——「女人天生更道德」——来替女性参与改革正名。这套逻辑**既限制了女性**（不许她们进市场），**又给了她们走出家门的入场券**（「为了道德，我们该管这些」）。

考点关键句：市场革命 = 交通革命 + 工厂体系 + 货币经济，三合一；它是改革运动的**物质基础**（让印刷、流通和集会成为可能），也是「分离的领域」这套话语的来源——一套同时限制和解放女性的话语。`,
        en: `This card only gets a passing mention in Stanton's story line, but it is the skeleton of APUSH Period 4.
Without it, the reform movements look like they appeared from nowhere.

**The Market Revolution** refers to three sets of changes happening at the same time between 1800 and 1850:

1. **Transportation revolution**: the Erie Canal (opened 1825, linking the Great Lakes to New York City), steamboats, and railroads. For the first time, goods, people, and information could move quickly across the whole country.
2. **Rise of the factory system**: typified by the textile mills of Lowell, Massachusetts, the first generation of workers who "left home to work at a factory" appeared — many of them young farm daughters called the Lowell Girls.
3. **Penetration of the money economy**: farmers who once grew food for themselves started producing for the market and buying goods with wages. Every household became tied to the market.

**Its connection to the reform movements**:

- **Printing and national circulation**: with a transportation network in place, newspapers and pamphlets could reach the whole country fast. That is why Garrison's The Liberator, Douglass's North Star, and the Declaration of Sentiments could become national movements.
- **Separate Spheres**: the Market Revolution pushed men out of the home into factories and markets, and kept women inside. This set "home / women = morality / purity" against "market / men = competition / corruption." Reformers including Stanton and Garrison used this same logic — "women are naturally more moral" — to justify women joining reform movements. The idea **both confined women** (kept them out of the market) **and gave them an entry ticket** ("for the sake of morality, we should manage these things").

Key exam sentence: Market Revolution = transportation revolution + factory system + money economy, all three together; it is the **material foundation** of the reform movements (making printing, circulation, and assembly possible), and the source of the "Separate Spheres" idea — a doctrine that both confined and unlocked women at the same time.`,
      },
      xiaoweiNote: {
        cn: `老师说市场革命是 AP 最爱「藏在背景里考」的考点——它不是主角，但你不知道它，就解释不了为什么改革运动在这几十年里突然爆发。

我的记忆框架：**「运河通了，报纸印了，女人出门了」**。
- 运河 = 交通革命（货物和信息流通全国）
- 报纸 = Garrison 的《The Liberator》、Douglass 的 North Star 能全国传
- 女人出门 = 禁酒/废奴/女权运动里女性参与的物质条件

还有一个必背的对立概念：**「分离的领域（Separate Spheres）」**——
男主外、女主内这套话语，既是对女性的限制，也是女性参与改革的借口（「我们比男人更道德，所以我们该管这些」）。`,
        en: `Teacher said the Market Revolution is the AP's favorite "hidden in the background" test point.
It's not the main character, but without knowing it you can't explain why the reform movements suddenly exploded in these decades.

My memory frame: **"the canal opened, the press ran, women stepped out."**
- Canal = transportation revolution (goods and information reach every corner)
- Press = Garrison's The Liberator and Douglass's North Star could circulate nationally
- Women stepping out = the material conditions that let women join temperance, abolition, and women's rights

One more pair of ideas to memorize: **Separate Spheres** — the doctrine of "men go out, women stay in."
It was both a cage for women and the excuse women used to enter reform ("we are more moral than men, so we should govern these matters").`,
      },
    },

    {
      id: 'abolition-garrison-liberator',
      termCn: '激进废奴登场：Garrison 与《The Liberator》',
      termEn: 'Radical Abolition: Garrison & The Liberator',
      defCn: 'William Lloyd Garrison 是 1831 年创办报纸《The Liberator》的北方废奴派。他要求「立即、无条件废奴」——不是慢慢来，就是马上彻底废除。这叫 immediatism（立即废奴主义），是废奴运动从温和走向激进的起点。',
      defEn: 'William Lloyd Garrison was a Northern abolitionist who founded the newspaper The Liberator in 1831. He demanded the immediate, unconditional end of slavery — not gradual, but right now. This position is called immediatism, and it marks the turning point when abolition went from moderate to radical.',
      standardRef: ['APUSH Period 4 (KC-4.1.II)', 'CA HSS 8.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'douglass', nodeId: 'dg-n3', context: 'Douglass 逃北后先在白人废奴派的讲台上当明星' },
          { lens: 'douglass', nodeId: 'dg-n7', context: 'Douglass 后来与 Garrison 派的「道德感化」(moral suasion) 路线决裂' },
        ],
      },
      standaloneText: {
        cn: `这一张故事里没单独展开 Garrison，但 AP 经常单独考——它是废奴运动从「温和」转向「激进」的起点。

**William Lloyd Garrison（加里森，1805-1879）**，北方白人废奴派。
1831 年他在波士顿创办报纸 **《The Liberator》（《解放者报》）**，喊出当时极其激进的主张：
**immediatism（立即废奴主义）**——不是慢慢来、不是补偿奴隶主，就是马上、彻底废除。

两年后，1833 年，他和同道成立 **American Anti-Slavery Society（美国反奴隶制协会，AASS）**。
废奴运动就这样有了自己的报纸和全国网络。这正是改革年代的典型打法：
**voluntary association（自愿结社）**——美国没有强势中央来推改革，全靠民间自己组织。

Garrison 走的路线叫 **moral suasion（道德感化）**：靠唤醒人心、诉诸良心来废奴，**不碰政治、不碰宪法**。
他甚至说宪法是「与魔鬼的契约」，因为它保护奴隶制。

故事里的连接：在 Douglass 那条故事线里，逃到北方的 Douglass 一开始在白人废奴派的讲台上当明星。
后来他**决裂**了——Douglass 认为光喊良心不够，得用政治、用选票、用法律去逼。
为这个分歧，他被老盟友骂背叛。

考点关键句：1831《The Liberator》+ 1833 AASS = 激进废奴（immediatism）登场；
Garrison = 道德感化派（moral suasion），不碰政治；这是 AP 考「废奴是道德运动还是政治运动」的一极。`,
        en: `Garrison doesn't get his own section in the story, but AP tests him a lot — he is where abolition turned from "moderate" to "radical."

**William Lloyd Garrison (1805-1879)**, a Northern white abolitionist.
In 1831 in Boston he founded the newspaper **The Liberator**, pushing a then-extreme demand:
**immediatism** — not gradual, not with compensation for owners, but immediate and complete abolition.

Two years later, in 1833, he and his allies founded the **American Anti-Slavery Society (AASS)**.
Abolition now had its own newspaper and a national network. This is the signature move of the reform age:
**voluntary association** — since America had no strong central government to push reform, private citizens organized themselves.

Garrison's approach was called **moral suasion**: abolish slavery by waking people's hearts and appealing to their conscience, **without touching politics or the Constitution**.
He even called the Constitution a "covenant with the devil" because it protected slavery.

Story connection: in Douglass's story line, the escaped Douglass first stars on these white abolitionists' platforms.
Later he **breaks** with Garrison — Douglass believed rousing consciences wasn't enough and that you had to press with politics, the ballot, and law.
For that difference, old allies called him a traitor.

Key exam sentence: 1831 The Liberator + 1833 AASS = the entrance of radical abolition (immediatism);
Garrison = the moral-suasion camp that avoided politics; this is one pole of the AP question "was abolition a moral movement or a political movement."`,
      },
      xiaoweiNote: {
        cn: `老师给我一个记年份的口诀：**「31 出报，33 建会」**——
1831《The Liberator》创刊，1833 AASS 成立，两个年份连着记。

我自己的小心得：别把 Garrison 和 Douglass 当成「一伙人」。他们一开始是师徒、是同盟，
后来在「靠良心还是靠政治」上**决裂**了。考 DBQ 写废奴运动时，写出「moral suasion vs 政治路线」
这条内部分歧，比只写「他们都反对奴隶制」高级得多。`,
        en: `Teacher gave me a year mnemonic: **"31 the paper, 33 the society"** —
The Liberator in 1831, the AASS in 1833, memorize the two years together.

My own takeaway: don't treat Garrison and Douglass as "one crew." They started as mentor and ally,
then **split** over "conscience or politics."
For a DBQ on abolition, showing the internal "moral suasion vs political strategy" split is far more powerful than just "they both opposed slavery."`,
      },
    },

    {
      id: 'douglass-north-star-bridge',
      termCn: 'Douglass：拿回那支笔，在两场运动间架桥',
      termEn: 'Douglass: Taking Back the Pen, Bridging Two Movements',
      defCn: 'Frederick Douglass 是逃奴出身的报人，1847 年自办报纸 North Star（《北极星报》）。他是唯一在 Seneca Falls 大会上公开替女性投票权站台的黑人男性，架起了废奴和女权两场运动之间的桥。',
      defEn: 'Frederick Douglass was a formerly enslaved man who became a journalist and founded the North Star newspaper in 1847. He was the only Black man to publicly back women\'s suffrage at Seneca Falls, building a bridge between the abolition and women\'s rights movements.',
      standardRef: ['APUSH Period 4 (KC-4.1.II)', 'CA HSS 8.6', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'douglass',
        nodeIds: ['dg-n1', 'dg-n3', 'dg-n5'],
        xiaoweiNote: {
          cn: `Douglass 那条故事线整条就是他。前三节合起来，是他从「被展示的人」变成「替自己说话的人」的过程。

**为什么单列一张卡**：AP 不只考他「做了什么」，更考他怎么**在好几道夹缝里架桥**。

我把他的关键事压成几条：
- 约 1818 年生在马里兰种植园，连生日都不知道。偷偷自学认字，约二十岁逃到北方。
- 白人废奴派要他在台上「只展示伤疤、别讲道理」，分析留给白人。他不干，要的是「替自己说话」的权利。
- **1847 年在纽约罗切斯特办自己的报纸 North Star（《北极星报》）**——北极星是逃奴夜里辨方向、往北走的那颗星。有了报纸，他才真正拿回了那支笔：自己写，自己登。
- 报头口号必背：**「Right is of no sex, truth is of no color.」（正义不分性别，真理不分肤色。）**

考点关键句：Douglass = 在废奴与女权两场运动之间**架桥的人**——他论证「剥夺女人投票权和剥夺奴隶自由是同一种错」（不是同情，是被按住的根子一样）。

⚠️ 别和废奴内部那张卡搞混：那张考的是他与 Garrison 在废奴运动内部的理念之争；这张考的是他在废奴与女权两场运动之间架桥（Seneca Falls 站台）。同一个人，两个不同切面。`,
          en: `Douglass's whole story line is about him. The first three sections together trace his shift from "a man put on display" to "a man who speaks for himself."

**Why a separate card**: AP tests him not just on "what he did" but on how he **built bridges across several seams**.

I compress his key facts into a few lines:
- Born around 1818 on a Maryland plantation, not even knowing his birthday. He taught himself to read in secret and escaped north at about twenty.
- White abolitionists wanted him on stage to "only show his scars, not reason" — leaving the analysis to white men. He refused, wanting the right to speak for himself.
- **In 1847 in Rochester, New York, he founded his own newspaper, the North Star** — named after the star a fleeing slave steers by at night, heading north. With his own paper he truly took back the pen: writing and printing it himself.
- Memorize the masthead motto: **"Right is of no sex, truth is of no color."**

Key exam sentence: Douglass = the **bridge-builder** between the abolition and women's rights movements, arguing that "to deny a woman the vote and to deny an enslaved person freedom are the same wrong" — not pity, but the same root of being held down.

⚠️ Don't mix this up with the abolition-internal card: that one tests his strategy split with Garrison inside abolition; this one tests his bridging between abolition and women's rights (backing suffrage at Seneca Falls). Same man, two different facets.`,
        },
      },
    },

    {
      id: 'seneca-falls-declaration-of-sentiments',
      termCn: 'Seneca Falls 大会与《情感宣言》',
      termEn: 'Seneca Falls Convention & the Declaration of Sentiments',
      defCn: '1848 年 7 月 19-20 日，约 300 人在纽约州 Seneca Falls 小镇开了美国历史上第一场专门讨论女性权利的大会。Stanton 在会上发表了《情感宣言》（Declaration of Sentiments），把《独立宣言》的「all men」改成「all men and women」。这是美国女权运动公认的起点。',
      defEn: 'On July 19-20, 1848, about 300 people gathered in Seneca Falls, New York, for the first convention in American history devoted to women\'s rights. Stanton presented the Declaration of Sentiments, changing the Declaration of Independence\'s "all men" to "all men and women." This is recognized as the starting point of the American women\'s rights movement.',
      standardRef: ['APUSH Period 4 (KC-4.1.II)', 'CA HSS 8.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'stanton',
        nodeIds: ['st-n4', 'st-n5', 'st-n6'],
        xiaoweiNote: {
          cn: `Stanton 那条故事线的第 4、5、6 节就是这场会。**这是整门课最高频考点之一**——Seneca Falls 是公认的美国女权运动起点。

我把它压成一条时间 + 一个动作：
- **时间**：**1848 年 7 月 19-20 日**，纽约州小镇 Seneca Falls，一座小教堂，约 300 人，含男性。这是美国历史上第一场专门讨论女性权利的大会。
- **动作**：Stanton 起草 **Declaration of Sentiments（《情感宣言》）**。她没另写一份，而是借《独立宣言》那句神圣的「all men are created equal」，**只加两个字**，改成 **「all men and women are created equal」**。再照《独立宣言》格式，逐条列出女人被剥夺的权利（投票、婚后财产归丈夫、进不了好职业好学校、教会里没声音），把控诉对象从「英国国王」换成「男人」。

借神圣话的厉害：你反对她，就等于反对《独立宣言》、反对美国立国的根。

最难的一条是 **suffrage（投票权）**——连共同组织者 Lucretia Mott 都劝太冒险。这一条靠 **Frederick Douglass 起立公开背书**才惊险通过（详见 Douglass 那张卡）。

考点关键句：1848 Seneca Falls + Declaration of Sentiments +「all men and women」+ Stanton/Mott 组织 + Douglass 替投票权站台 = 美国女权运动的开场。`,
          en: `Stanton's story line sections 4, 5, and 6 cover this convention. **This is one of the highest-frequency points in the whole topic** — Seneca Falls is the recognized starting point of the American women's rights movement.

I compress it into one date plus one act:
- **Date**: **July 19-20, 1848**, in the New York town of Seneca Falls, a small chapel, about 300 people including men. The first gathering in American history devoted to women's rights.
- **Act**: Stanton drafted the **Declaration of Sentiments**. She didn't write a new document — she borrowed the Declaration of Independence's sacred line "all men are created equal," added **just two words**, and made it **"all men and women are created equal."** Then, following the Declaration of Independence's form, she listed clause by clause the rights stripped from women (the vote, property to the husband after marriage, shut out of good professions and schools, no voice in the church), changing the target of the charges from "the British king" to "man."

The power of borrowing the sacred line: to argue against her was to argue against the Declaration of Independence — the very root of America.

The hardest clause was **suffrage** — even co-organizer Lucretia Mott urged it was too risky. It narrowly passed only because **Frederick Douglass rose to back it publicly** (see his card).

Key exam sentence: 1848 Seneca Falls + Declaration of Sentiments + "all men and women" + Stanton/Mott organizing + Douglass backing suffrage = the opening of the American women's rights movement.`,
        },
      },
    },

    {
      id: 'temperance-movement',
      termCn: '禁酒运动',
      termEn: 'The Temperance Movement',
      defCn: '禁酒运动（temperance movement）要求人们少喝酒、甚至完全戒酒、关掉酒馆。1826 年成立的 American Temperance Society（美国禁酒会）是它的核心组织。这是改革年代参与人数最多的一场运动，也是许多女性第一次走出家门参与公共活动的机会。',
      defEn: 'The temperance movement called for people to drink less alcohol, quit entirely, or shut down taverns. The American Temperance Society, founded in 1826, was its core organization. This was the largest-membership movement of the reform age, and for many women it was the first time they stepped outside the home to join public organizing.',
      standardRef: ['APUSH Period 4 (KC-4.1.II)', 'CA HSS 8.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'stanton', nodeId: 'st-n3', context: 'Stanton 把禁酒、关酒馆列为改革浪潮冒出的运动之一' },
          { lens: 'enslaved-woman-receiving-end', nodeId: 'ew-n8', context: '被奴役女性看「开禁酒会的人替别人决定该不该喝酒」' },
        ],
      },
      standaloneText: {
        cn: `禁酒运动在故事里只一笔带过，但它是改革年代「人数最多」的一场运动，AP 会单独考它的逻辑。

**temperance（禁酒）** 的意思是：少喝、戒酒、甚至关掉酒馆。
1826 年成立的 **American Temperance Society（美国禁酒会）** 是它的组织核心，到 1830s 已有成千上万的地方分会。这又是改革年代的典型打法——**voluntary association（自愿结社）**。

它为什么这么火？因为它接得上第二次大觉醒的「人可完善」：
- 酗酒被看成一种「世间的恶」。
- 戒掉它，就是改造社会、拯救家庭的一步。
- 改革者说：酗酒毁掉的不只是喝酒的男人，还有挨打的妻子、挨饿的孩子。

所以禁酒运动里有很多女性参与——这也是不少女性第一次走出家门、参与公共组织。

故事里的连接：Stanton 那条故事线里把禁酒、关酒馆列为改革浪潮冒出的运动之一。
被奴役女性那条故事线里，从她的位置看到「开禁酒会的人替别人决定该不该喝酒」——这正是改革年代的一个共同特征：「为你好」常常是「有位子的人替没位子的人做决定」。

考点关键句：temperance = 改革年代规模最大的运动之一；American Temperance Society（1826）；它把第二次大觉醒的宗教热转成了「戒掉世间之恶」的社会行动，也是许多女性进入公共生活的入口。`,
        en: `The temperance movement gets only a brief mention in the story, but it was the "largest by numbers" of the reform age, and AP tests its logic on its own.

**Temperance** means: drink less, swear off drink, or even close the taverns.
The **American Temperance Society**, founded in 1826, was its organizing core, with thousands of local chapters by the 1830s. This too is the signature move of the reform age: **voluntary association**.

Why so popular? Because it connected to the Second Great Awakening's "perfectibility":
- Drunkenness was seen as one of "the world's evils."
- Quitting it was a step toward remaking society and saving families.
- Reformers said drunkenness ruined not only the drinking man but the battered wife and the starving children.

So many women took part in temperance — and for many, this was the first time they stepped out of the home into public organizing.

Story connections: In Stanton's story line, temperance and closing taverns are listed as part of the reform wave.
In the enslaved woman's story line, from her position she sees "those who held the temperance meetings deciding for others whether they should drink" — which names a shared feature of the reform age: "for your good" was often "people with a seat deciding for people without one."

Key exam sentence: temperance = one of the largest movements of the reform age; American Temperance Society (1826); it turned the Second Great Awakening's religious energy into social action against "the world's evils," and was an entry point for many women into public life.`,
      },
      xiaoweiNote: {
        cn: `老师说禁酒运动是 AP 最容易被学生**漏掉**的一场——因为它不像废奴、女权那么「热血」。
但它考点很清楚：**最大规模 + 1826 American Temperance Society + 女性参与的入口**。

我自己的连法：第二次大觉醒（人可完善）→ 把「喝酒」当成「世间的恶」→ 禁酒运动。
这条小因果链一摆，就能证明「所有改革运动其实都长在同一棵树上」（同一个宗教引擎）。`,
        en: `Teacher said temperance is the movement students most often **drop** on the AP, because it isn't as "stirring" as abolition or women's rights. But its exam points are clear: **largest by scale + 1826 American Temperance Society + an entry point for women**.

My own way to connect it: Second Great Awakening (perfectibility) → treating "drinking" as "an evil of the world" → the temperance movement.
Laying out that little causal chain proves "all the reform movements actually grew on one tree" — the same religious engine.`,
      },
    },

    {
      id: 'education-asylum-prison-reform',
      termCn: '教育、收容所与监狱改革：Mann 与 Dix',
      termEn: 'Education, Asylum & Prison Reform: Mann & Dix',
      defCn: 'Horace Mann 在 1830s-40s 领导公立学校运动，主张建立免费、向所有孩子开放的学校。Dorothea Dix 走访监狱，发现精神病人被当罪犯对待，1843 年向马萨诸塞州议会递交报告，推动建立专门的收容所。两人代表改革年代「建制度」的那一面。',
      defEn: 'Horace Mann led the common-school movement in the 1830s-40s, pushing for free schools open to every child. Dorothea Dix toured jails, found the mentally ill being treated like criminals, and in 1843 submitted a report to the Massachusetts legislature that pushed for proper asylums. Together they represent the "institution-building" side of the reform age.',
      standardRef: ['APUSH Period 4 (KC-4.1.II)', 'CA HSS 8.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'stanton', nodeId: 'st-n3', context: 'Stanton 把办公立学校、改造监狱与收容所列为改革浪潮的一部分' },
          { lens: 'enslaved-woman-receiving-end', nodeId: 'ew-n8', context: '被奴役女性看「办学校的人替穷孩子决定学什么、改收容所的人替疯人决定怎么算体面」' },
        ],
      },
      standaloneText: {
        cn: `这一张故事里只点到，没展开两个名字，但 AP 常单独考——它们是改革年代「制度建设」那一面。

**教育改革 —— Horace Mann（霍勒斯·曼）**：
1830s-40s，他在马萨诸塞领导 **common-school movement（公立学校运动）**，主张办**免费的、向所有孩子开放的公立学校**。
1. common school 就是「公共/共同的学校」——不分贫富，人人都能读。
2. 他的理由很有力：要让民主国家运转，就得有受过教育的公民。
3. 他说免费教育是「贫富之间最伟大的平衡器」。
今天美国的公立中小学制度，根子就在这里。

**收容所与监狱改革 —— Dorothea Dix（多萝西娅·迪克斯）**：
她走访马萨诸塞各地的监狱和济贫院，发现精神病人被关在笼子里、铁链锁着、没有取暖、被当成罪犯对待。
**1843 年她向马萨诸塞州议会递交了一份 memorial（请愿书/调查报告）**，把这些惨状一条条列出来，推动州里为精神病人盖体面的专门收容所（asylum）。她后来在好几个州都做了同样的事。

故事里的连接：Stanton 那条故事线把「办公立学校、改造监狱与收容所」列进改革浪潮。
被奴役女性那条故事线里，从她的位置看到这些「为他人好」的改革，几乎都是「办学校的人替穷孩子决定学什么、改收容所的人替疯人决定怎么算体面」——「为你好」和「请你一起决定」是两件事。

考点关键句：Horace Mann = 公立学校运动（免费、向所有孩子开放，「最伟大的平衡器」）；Dorothea Dix = 1843 马萨诸塞 memorial → 收容所/监狱改革（善待精神病人）。`,
        en: `This card is only touched on in the story without a full explanation of either name, but AP tests them on their own a lot — they are the "institution-building" face of the reform age.

**Education reform — Horace Mann**:
In the 1830s-40s he led the **common-school movement** in Massachusetts, pushing for **free public schools open to every child**.
1. A "common school" was a public, shared school — rich or poor, every child could attend.
2. His argument was powerful: a democracy needs educated citizens.
3. He called free education "the great equalizer" between rich and poor.
Today's American public-school system has its roots here.

**Asylum and prison reform — Dorothea Dix**:
She toured the jails and poorhouses of Massachusetts and found the mentally ill kept in cages, chained, without heat, treated as criminals.
**In 1843 she submitted a memorial (a petition and investigative report) to the Massachusetts legislature**, listing these conditions clause by clause, and pushed the state to build decent dedicated asylums for the mentally ill. She later did the same in several other states.

Story connections: Stanton's story line lists "building public schools, reforming prisons and asylums" as part of the reform wave.
In the enslaved woman's story line, from her position these "for the good of others" reforms were almost all "those who built the schools deciding what poor children should learn, those who reformed the asylums deciding for the mad what counts as decent" — "for your good" and "invited to decide with you" are two different things.

Key exam sentence: Horace Mann = the common-school movement (free, open to all children, "the great equalizer"); Dorothea Dix = the 1843 Massachusetts memorial, then asylum and prison reform (humane treatment of the mentally ill).`,
      },
      xiaoweiNote: {
        cn: `老师说这两个名字最容易记混，给我一个对子：**「Mann 管学校，Dix 管收容所」**。
（Mann 的名字像 man，男人都该上学；Dix 谐音「地方」，她跑遍各地查监狱。）

我自己想到一个连法：这一整张卡，加上禁酒那张，可以一起回答「改革年代除了废奴和女权还有什么」。
高分写法：把它们都挂回**第二次大觉醒**这个引擎——教育、收容所、禁酒、废奴、女权，全是「人和社会可以被改好」这一个信念的不同出口。`,
        en: `Teacher said these two names are the easiest to mix up, and gave me a pair: **"Mann minds schools, Dix minds asylums."**
(Mann's name is like "man" — every man should go to school; Dix went to many places inspecting jails.)

My own way to connect: this whole card, plus the temperance card, together answers "what else was there in the reform age besides abolition and women's rights."
High-scoring move: hang them all back on the **Second Great Awakening** engine — education, asylums, temperance, abolition, women's rights, all different outlets of the one belief that "people and society can be made better."`,
      },
    },

    {
      id: 'double-exclusion-black-women',
      termCn: '运动内部的排除：被两张桌子都漏掉的黑人女性',
      termEn: 'Exclusion Inside Reform: Black Women Missed by Both Tables',
      defCn: '改革年代的黑人女性同时属于两个被压迫群体：她是奴隶，也是女人。但废奴运动关注的是「奴隶」身份，女权运动关注的是「女人」身份——两场最进步的运动各自只认领了她的一半，都没有真正为她争取全部权利。这叫双重排除（double exclusion）。',
      defEn: 'Black women in the reform age belonged to two oppressed groups at once: they were enslaved, and they were women. But the abolition movement focused on the "enslaved" identity, and the women\'s rights movement focused on the "woman" identity — the two most progressive movements each claimed only half of her, and neither truly fought for her full rights. This is called double exclusion.',
      standardRef: ['APUSH Period 4 (KC-4.1.II)', 'CA HSS 8.6', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'enslaved-woman-receiving-end',
        nodeIds: ['ew-n5', 'ew-n6', 'ew-n7'],
        xiaoweiNote: {
          cn: `这是被奴役女性那条故事线的第 5、6、7 节，也是这一课**最高级**的考点——它问的不是「发生了什么」，而是「改革，到底是为谁的改革」。

我把它压成一个「两张桌子」的图：
- 一张桌子叫**废奴**：认领她的「奴隶」身份，却漏了她的「女人」。坐桌的多是北方白人，和少数像 Douglass 那样逃出来、能写能讲的黑人男性。
- 一张桌子叫**女权**：认领她的「女人」身份，却漏了她的「黑人、被奴役」。它列的委屈（不能投票、婚后财产归丈夫）是有产白人女性的烦恼；Stanton 心里的「女人」主要不是她。

她是**同一个完整的人**，却被两场最进步的运动**各认领一半**，两张桌子都没真把她请上桌。这就叫**双重排除（doubly left out）**。

替这群人喊过一嗓子的，是 **Sojourner Truth（索杰纳·特鲁思）**：逃奴出身，兼为废奴与女权奔走，在一次女权集会上反问「难道我就不是一个女人吗」。

⚠️ **AP 史料题陷阱**：后人最爱引的那句**「Ain\\'t I a Woman?」**，其实是 **1851 年那次大会之后、1863 年由 Frances Gage 事后重构**的措辞，**不是 1851 年现场逐字记录**。可证的是：Truth 确实在 1851 年 Akron 大会发言、确实提出了这一质问；但流传的具体文本是后人重构，不能当逐字史料引用。写 DBQ 引这句话，一定要注明「后人重构」，否则就是 fabrication（编造史料）。`,
          en: `This comes from the enslaved woman's story line, sections 5, 6, and 7, and it's the **most advanced** point in this topic — it asks not "what happened" but "reform, for whom exactly."

I compress it into a "two tables" picture:
- One table is **abolition**: it claimed her "slave" self but missed her "woman." Those at it were mostly Northern whites and a few Black men like Douglass who escaped and could write and speak.
- One table is **women's rights**: it claimed her "woman" self but missed her "Black, enslaved." The grievances it listed — no vote, property to the husband after marriage — were the troubles of propertied white women. The "woman" in Stanton's mind was mostly not her.

She is **one whole person**, yet these two most progressive movements **each claimed half of her**, and neither truly invited her to the table. This is **double exclusion** — being doubly left out.

The one who cried out for this group was **Sojourner Truth**: born into slavery, laboring for both abolition and women's rights, who at a women's gathering challenged, "am I not a woman?"

⚠️ **AP source-document trap**: the line later most quoted, **"Ain\\'t I a Woman?"**, is in fact wording **reconstructed afterward by Frances Gage in 1863**, after that 1851 convention — **not a word-for-word record of 1851**. What is provable: Truth did speak at the 1851 Akron convention and did raise this challenge; but the specific circulating text is a later reconstruction and cannot be cited as verbatim evidence. For a DBQ quoting this line, you must note "later reconstruction," or it counts as fabrication of evidence.`,
        },
      },
    },

    {
      id: 'taiping-parallel',
      termCn: '同时代的中国：太平天国（结构对照）',
      termEn: 'Meanwhile in China: The Taiping Movement (Structural Parallel)',
      defCn: '1851 年，中国的洪秀全在广西金田起事，建立「太平天国」。这场运动同样由宗教热情驱动，同样喊出男女平等、土地均分的口号——和同期美国的改革年代形成结构上的对照：两个文明同一时代都被「人和社会可以改好」的信念点燃，也都在「平等到底给谁」这个问题上栽了跟头。',
      defEn: 'In 1851, Hong Xiuquan launched a revolt in Guangxi, China, founding the Taiping Heavenly Kingdom. This movement was also driven by religious fervor and also proclaimed equality of the sexes and equal land — forming a structural parallel with the American reform age of the same period: two civilizations in the same era both lit by the belief that "people and society can be made better," and both stumbling on the question of "equality for whom."',
      standardRef: ['APUSH Period 4 (cross-cultural comparison)', 'AP World comparison'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这一张故事里没讲，它给你一个**跨文明的对照镜子**：当美国正在「改革年代」时，同一时段（清朝道光、咸丰年间）的中国，也正经历一场**宗教驱动的巨大社会震荡**。

**太平天国 / 洪秀全**：1851 年，洪秀全（一个屡试不第的客家书生，读了基督教传教小册子后，自称是上帝之子、耶稣之弟）在广西金田起事，建「太平天国」。他创立的拜上帝教要彻底重造一个「人间天国」，颁布《天朝田亩制度》，主张土地均分、男女平等（设女科举、女军）。1864 年，太平天国被清军镇压。

把它和同代美国的改革年代摆在一起对照（**并列，不褒贬**）：

①  **驱动力都是一场宗教热**：美国是 Second Great Awakening 的「人可完善」；太平天国是洪秀全拜上帝教的「重造人间天国」。两边都把宗教狂热转成了改造社会的巨大能量。
②  **改革的方式截然不同**：美国北方走的是「自愿结社 + 渐进立法/修正案」（开会、写宣言、办报、组织协会）；太平天国走的是「武装夺权 + 自上而下颁布制度」（起义、建政权、强制推行均田）。一个是从社会里慢慢长出来的改革，一个是用刀剑一次性重造秩序。
③  **「平等」都喊得很超前，也都没真兑现**：美国喊「all men and women」却漏掉被奴役黑人女性；太平天国喊「男女平等、土地均分」，实践中却等级森严、女性地位与口号严重背离。

考点关键句（中立综合）：两个文明在同一时代，**都被「人/社会可以被改造完善」的信念点燃过，也都在「平等到底给谁」这个问题上栽了跟头**。不能说哪一种回应方式更先进——它们各自扎根于各自的社会结构（一个有发达的民间社团与新闻网络，一个是大一统帝国晚期的社会危机）。`,
        en: `This card isn't in the story; it gives you a **cross-civilization mirror**: while America was in its "reform age," China in the same period — the Daoguang and Xianfeng reigns of the Qing — was also going through a **massive religiously driven social upheaval**.

**The Taiping movement / Hong Xiuquan**: in 1851, Hong Xiuquan — a Hakka scholar who repeatedly failed the imperial exams and, after reading a Christian missionary tract, declared himself the son of God and younger brother of Jesus — rose in revolt at Jintian in Guangxi and founded the Taiping Heavenly Kingdom. The God-Worshipping faith he founded sought to wholly remake a "heavenly kingdom on earth," issuing the Land System of the Heavenly Dynasty, which called for equal division of land and equality of men and women (a women's exam track and women's army). In 1864 the Taiping were crushed by Qing forces.

Set it beside the contemporary American reform age (**parallel, no ranking**):

① **Both driven by a religious fervor**: America by the Second Great Awakening's "perfectibility"; the Taiping by Hong Xiuquan's faith and its goal of "remaking a heavenly kingdom on earth." Both turned religious fervor into enormous energy for remaking society.
② **The methods of reform differ sharply**: the American North took "voluntary association plus gradual legislation and amendments" — conventions, declarations, newspapers, societies; the Taiping took "armed seizure of power plus top-down decree" — revolt, a state, enforced land redistribution. One was reform grown slowly out of society; the other was order remade at a stroke by the sword.
③ **Both cried strikingly advanced "equality," and neither truly delivered**: America cried "all men and women" yet missed enslaved Black women; the Taiping cried "equality of the sexes, equal land," yet in practice were rigidly hierarchical, with women's status far from the slogan.

Key exam sentence (neutral synthesis): two civilizations in the same age were **both lit by the belief that "people and society can be remade and perfected," and both stumbled on the question of "equality, for whom exactly."** Neither response was "more advanced"; each was rooted in its own social structure — one with dense civic societies and a press network, one a unitary empire in late-stage social crisis.`,
      },
      xiaoweiNote: {
        cn: `老师说跨文明对照题（AP World 尤其爱考）最忌讳「比谁先进」——一比就丢分。
正确写法是**找结构上的相同与不同**：相同 = 都由宗教热点燃、都喊超前的平等；不同 = 渐进结社 vs 武装重造、各自扎根于不同社会结构。

我自己的记忆锚：**「同一个引擎（宗教热），两条路（开会 vs 起义），同一个跟头（平等给谁）」**。
1851 这个年份特别好用——它既是太平天国金田起事，也离 Seneca Falls（1848）只差三年，两边几乎是同一个时代。`,
        en: `Teacher said cross-civilization comparison questions — AP World especially loves them — most forbid "ranking who's more advanced." That move loses points instantly. The right move is to **find structural similarities and differences**: similar = both lit by religious fervor, both crying advanced equality; different = gradual association vs armed remaking, each rooted in a different social structure.

My own memory anchor: **"one engine (religious fervor), two roads (conventions vs revolt), the same stumble (equality for whom)."**
The year 1851 is especially handy — it's both the Taiping rising at Jintian and only three years after Seneca Falls (1848), so the two were nearly the same era.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `一个真心想「把世界改好」的年代，喊着「all men and women are created equal」，办免费学校、改造收容所、戒酒、废奴——可它同时，把最该被帮助的人（被奴役的黑人女性），漏在了废奴和女权两张桌子的外面。

你觉得「真诚的善意」和「真正的包容」，是同一件事吗？
用这个改革年代里至少两条具体证据，支持你的判断。`,
      en: `An age that sincerely wanted to "make the world better" cried "all men and women are created equal," built free schools, reformed asylums, swore off drink, fought to end slavery — and yet, at the same time, left the person who most needed help (the enslaved Black woman) outside both the abolition and women's rights tables.

Do you think "sincere goodwill" and "true inclusion" are the same thing? Support your judgment with at least two specific pieces of evidence from this reform age.`,
      hintCn: `这题没有标准答案。AP 评分看的是你**用证据**的能力，不看你站哪边。

「不是同一件事」这边的证据：
- Seneca Falls 的诉求清单几乎不为被奴役黑人女性而写。
- 禁酒/教育/收容所改革大多是「有位子的人替没位子的人做决定」。
- Sojourner Truth 被迫站出来质问「难道我不算一个女人」。

「善意确实推动了包容」这边的证据：
- 「all men and women」这句话被白纸黑字写下、喊出，后来被一代代平权运动拿去争、去逼，一寸寸撑大到装下更多人。

高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `No standard answer here. AP scoring looks at your ability to **use evidence**, not which side you pick.

Evidence for "not the same thing":
- The Seneca Falls list of demands was scarcely written for enslaved Black women.
- Temperance, education, and asylum reform were mostly "people with a seat deciding for people without one."
- Sojourner Truth was forced to stand up and challenge "am I not a woman."

Evidence for "goodwill did drive inclusion":
- The line "all men and women" was set down in writing and cried out, then taken up by generation after generation of equality movements to fight and press, stretched inch by inch to hold more people.

High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['double-exclusion-black-women', 'seneca-falls-declaration-of-sentiments'],
    },
    {
      id: 'q2',
      cn: `Stanton 没另写一份宣言，而是借《独立宣言》那句全美国都奉为神圣的「all men are created equal」，只加两个字，改成「all men and women are created equal」。她说，你反对她，就等于反对美国立国的根。

「借一句大家都认的、神圣的话，来推自己的主张」——你觉得这是一个聪明的策略，还是一种投机？
请结合 Declaration of Sentiments 的具体做法，说明你的看法。`,
      en: `Stanton did not write a new declaration. She borrowed the Declaration of Independence's line "all men are created equal" — the line all of America held sacred — added just two words, and made it "all men and women are created equal." She said: to argue against her was to argue against the founding root of America.

"Borrowing a sacred line everyone accepts to push your own claim" — do you think this is a clever strategy, or a kind of opportunism? Make your case with reference to the specific way the Declaration of Sentiments was built.`,
      hintCn: `好的 DBQ 答案会**同时看见这个策略的力量和它的代价**，而不是简单二选一。

力量这边：
- 借神圣话让对手没法轻易反驳（反对她=反对《独立宣言》）。
- 用大家熟悉的格式，让陌生的主张「听起来理所当然」。

代价/风险这边：
- 借来的话自带原版的边界——《独立宣言》那个「all men」当年也不含被奴役者。
- Stanton 把它撑大成「women」，心里装的却主要是白人有产女性，等于把原版的排除也一起借了进来。

高分写法：用「她照《独立宣言》格式逐条列女性委屈」这个**具体做法**当证据，说明这个策略既高明又有它漏掉的人。`,
      hintEn: `A good DBQ answer **sees both the power of this strategy and its cost**, rather than a simple either/or.

On power:
- Borrowing the sacred line left opponents unable to argue easily — against her = against the Declaration of Independence.
- Using a familiar form made an unfamiliar claim "sound self-evident."

On cost / risk:
- A borrowed line carries the original's boundaries. That "all men" in the Declaration of Independence didn't include the enslaved either.
- Stanton stretched it to "women" but mostly meant white propertied women — in effect borrowing the original's exclusion along with it.

High-scoring move: use the **specific act** "she listed women's grievances clause by clause in the Declaration of Independence's form" as evidence, showing the strategy was both brilliant and had people it missed.`,
      conceptsActivated: ['seneca-falls-declaration-of-sentiments', 'second-great-awakening'],
    },
    {
      id: 'q3',
      cn: `Douglass 能在 Seneca Falls 的台上替女性投票权站台，靠他的分量帮那一条惊险通过；可被奴役的黑人女性，还是没能自己坐到那张桌子前——是别人替她在场，不是她自己在场。

「替别人发声」和「让别人自己在场」，差别在哪里？哪一个更重要？
请用这个改革年代里的一个具体例子，支持你的看法。`,
      en: `Douglass could back women's suffrage from the platform at Seneca Falls, and his weight helped that clause narrowly pass. Yet the enslaved Black woman still could not sit at that table herself — it was someone present on her behalf, not her own presence.

What is the difference between "speaking for others" and "letting others be present themselves"? Which matters more? Support your view with one specific example from this reform age.`,
      hintCn: `先把两件事分清——「替她发声」（Douglass 在台上、Stanton 写进宣言）vs「她自己在场」（被奴役女性自己坐到桌前开口）。

具体例子可以举：
- Douglass 替投票权站台。
- Sojourner Truth 被迫自己走上前质问。
- 被奴役女性「连有人替她开会都是偶然听来的」。

进阶思考：「替别人发声」能救一时，但主动权始终在发声者手里。只有「让别人自己在场」，才把话筒真正交回到被决定的人手上。但有人会说，在她连「人」都不算的年代，「先有人替她发声」也已经很难得。两边都说得通——AP 看的是你能不能用一个真实例子把抽象的论点钉在证据上。`,
      hintEn: `First keep two things straight — "speaking for her" (Douglass on the platform, Stanton writing her into the declaration) vs "her own presence" (the enslaved woman sitting at the table to speak herself).

Specific examples you can use:
- Douglass backing suffrage.
- Sojourner Truth forced to step up and challenge herself.
- The enslaved woman who "learned even that someone was meeting for her only by chance."

Going deeper: "speaking for others" can save a moment, but the initiative stays with the speaker. Only "letting others be present themselves" truly hands the microphone back to the person being decided for. But some would say that in an age when she didn't even count as a "person," even "someone speaking for her first" was already rare. Both views hold — AP wants you to pin the abstract claim to evidence with one real example.`,
      conceptsActivated: ['double-exclusion-black-women', 'douglass-north-star-bridge'],
    },
  ],
};

export default notebook;
