// ─── 同伴笔记本架构 v1 · Asian Imperialism 1839 ─────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 12 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//          —— standaloneText 与 xiaoweiNote 都放在卡顶层，绝不嵌进 storyAnchor 里
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（英国商人 / 林则徐 / 机器两头受承方 三条线）
//   - notebook 提供考点闭环（鸦片战争/虎门销烟/南京条约/不平等条约三件套/
//     自由贸易帝国主义/EIC/sepoy/British Raj/1857 起义/三角贸易/中日对照/被殖民者三分回应）
//
// 课纲对齐：
//   - AP World History Modern — Unit 6 (1750-1900) · Topic 6.2-6.4
//     (State Expansion / Indigenous Responses)
//   - HS World History — 帝国主义单元 (CA HSS & 各州 World History)
//
// 事实地基：对账 asian-imperialism-1839-factledger.md + 附录 A/B/C
//   - 虎门销烟时间：缴烟/封锁在 1839 春，当众"销毁"在 1839 初夏（6.3-6.25）
//   - 致维多利亚女王公开信：是否真正送达女王本人，史料不确定
//   - 1857 起义主体是恒河平原 sepoy，与孟加拉种鸦片农民是同机器下两类人
//
// schemaVersion: 1 · notebookVersion: asian-imperialism-1839-v1

export var notebook = {
  topicId: 'asian-imperialism-1839',
  topicNameCn: '亚洲的帝国主义 1839',
  topicNameEn: 'Imperialism in Asia 1839',
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
    cn: `今天老师说我们要学 1839 年开始的「亚洲帝国主义」——也就是鸦片战争前后，
英国怎么用一桩卖毒品的生意，把压力一路推到中国和印度。
她说这是 AP World History Unit 6 的必考块（Topic 6.2-6.4），DBQ 超爱考。

她给了一张纸，上面写着这些名字：

林则徐（Lin Zexu）、道光皇帝（Daoguang）、维多利亚女王（Queen Victoria）、
额尔金（Lord Elgin）、东印度公司（East India Company）。

还有一串词：Opium War（鸦片战争）、虎门销烟、Treaty of Nanking（南京条约）、
unequal treaties（不平等条约）、extraterritoriality（治外法权）、
imperialism of free trade（自由贸易帝国主义）、sepoy（印度土兵）、
British Raj（英属印度）、1857 大起义、triangular trade（三角贸易）。

我先记下来，等下读三个故事——英国商人（卖鸦片的人）、林则徐（禁烟却输了的人）、
机器的两头（被碾的中国烟民和印度农民）——读完再回来对照这张单子，看我能不能解释。

老师抄给我一句话，我记在笔记本第一页："帝国主义不一定靠插旗子占领土。
它可以靠逼你开市场、不平等条约、加上一层本地合作者，就把一个国家攥在手里。
读这段历史，要同时看见侵略的不义，和后果的复杂——两个都是真的。"`,
    en: `Today my teacher said we're learning "Imperialism in Asia," starting from 1839 —
the Opium Wars, and how Britain used a drug-selling business to push pressure all the way
into China and India. She said it's a required block of AP World History Unit 6
(Topics 6.2-6.4), and DBQs love it.

She gave us a sheet with these names:

Lin Zexu, the Daoguang Emperor, Queen Victoria, Lord Elgin, the East India Company.

Plus a string of terms: Opium War, the Destruction of Opium at Humen, Treaty of Nanking,
unequal treaties, extraterritoriality, the imperialism of free trade, sepoy, the British Raj,
the 1857 uprising, the triangular trade.

Let me write these down. After I read the three stories — the British trader (who sold opium),
Lin Zexu (who banned it yet lost), and the two ends of the machine (the crushed Chinese smoker
and the Indian farmer) — I'll come back and check whether I can explain each one.

Teacher copied one line for me, on the first page of my notebook: "Imperialism doesn't always
plant a flag and seize land. It can grip a whole country by forcing the market open, by unequal
treaties, plus a layer of local collaborators. To read this history, you must see the injustice
of the invasion AND the complexity of its consequences at the same time — both are real."`,
    keyTerms: [
      { cn: '鸦片战争', en: 'Opium War' },
      { cn: '虎门销烟', en: 'Destruction of Opium at Humen' },
      { cn: '南京条约', en: 'Treaty of Nanking' },
      { cn: '不平等条约', en: 'unequal treaties' },
      { cn: '治外法权', en: 'extraterritoriality' },
      { cn: '协定关税', en: 'agreed tariff' },
      { cn: '最惠国待遇', en: 'most-favored-nation' },
      { cn: '通商口岸', en: 'treaty ports' },
      { cn: '自由贸易帝国主义', en: 'imperialism of free trade' },
      { cn: '非正式帝国', en: 'informal empire' },
      { cn: '三角贸易', en: 'triangular trade' },
      { cn: '东印度公司', en: 'East India Company (EIC)' },
      { cn: '印度土兵', en: 'sepoy' },
      { cn: '英属印度', en: 'British Raj' },
      { cn: '莫卧儿王朝', en: 'Mughal dynasty' },
      { cn: '买办', en: 'comprador' },
      { cn: '百年屈辱', en: 'Century of Humiliation' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '林则徐',
        nameEn: 'Lin Zexu',
        ipa: '/lɪn ˈzɜː.ʃuː/',
        roleCn: '清朝钦差大臣，1839 虎门销烟，禁烟有理却看错时代、战败被流放新疆的悲剧人物',
        roleEn: 'Qing high commissioner; led the 1839 Destruction of Opium at Humen; banned opium with reason yet misjudged the age, lost the war, and was exiled to Xinjiang',
        mustKnow: true,
        audioKey: 'lin-zexu',
      },
      {
        nameCn: '道光皇帝',
        nameEn: 'Daoguang Emperor',
        ipa: '/ˈdaʊˈɡwɑːŋ/',
        roleCn: '下令严禁鸦片、派出林则徐，又因战败妥协签约、把林当替罪羊的清朝皇帝',
        roleEn: 'Qing emperor who ordered the opium ban and sent Lin Zexu, then compromised after defeat and made Lin the scapegoat',
        mustKnow: true,
        audioKey: 'daoguang-emperor',
      },
      {
        nameCn: '维多利亚女王',
        nameEn: 'Queen Victoria',
        ipa: '/kwiːn vɪkˈtɔːriə/',
        roleCn: '林则徐公开信的收信人；其治下的英国发动了两次鸦片战争',
        roleEn: 'Addressee of Lin Zexu\'s open letter; under her reign Britain fought both Opium Wars',
        mustKnow: true,
        audioKey: 'queen-victoria',
      },
      {
        nameCn: '额尔金',
        nameEn: 'Lord Elgin',
        ipa: '/lɔːrd ˈɛlɡɪn/',
        roleCn: '第二次鸦片战争英方统帅，1860 年下令焚掠圆明园',
        roleEn: 'British commander in the Second Opium War; in 1860 ordered the burning and looting of the Yuanmingyuan',
        mustKnow: true,
        audioKey: 'lord-elgin',
      },
      {
        nameCn: 'Bahadur Shah Zafar',
        nameEn: 'Bahadur Shah Zafar',
        ipa: '/bəˈhɑːdʊr ʃɑː zəˈfɑːr/',
        roleCn: '末代莫卧儿皇帝，被 1857 起义军推为名义领袖，事后被英国流放缅甸客死',
        roleEn: 'Last Mughal emperor, raised as the figurehead of the 1857 uprising, then exiled by Britain to Burma where he died',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: 'Mangal Pandey',
        nameEn: 'Mangal Pandey',
        ipa: '/ˈmʌŋɡəl ˈpɑːndeɪ/',
        roleCn: '1857 年 3 月率先反抗的 sepoy，被视为起义的火星，当年被处决',
        roleEn: 'The sepoy who first rose in March 1857, seen as the spark of the uprising; executed that year',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: 'Robert Clive',
        nameEn: 'Robert Clive',
        ipa: '/ˈrɒbərt klaɪv/',
        roleCn: '1757 普拉西战役英方指挥，奠定东印度公司在印度的统治',
        roleEn: 'British commander at the 1757 Battle of Plassey, which founded East India Company rule in India',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'triangular-trade-opium',
      termCn: '茶-银-鸦片三角贸易',
      termEn: 'The Tea-Silver-Opium Triangular Trade',
      standardRef: ['AP World Unit 6.2', 'HS World History — Imperialism'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'receiving-end-canton-india',
        nodeIds: ['asian-imperialism-recv-n2', 'asian-imperialism-brit-n3'],
        xiaoweiNote: {
          cn: `承受方那一遍第 2 节、英国商人那一遍第 3 节都讲了这台「机器」怎么转。
我把它压成一个三角口诀：
**英国买中国茶 → 白银流进中国（英国亏）；英国逼印度种鸦片，走私进中国换白银 → 白银回流英国（亏反转成赚）；白银再去买茶。**

考点关键句：这就是为什么鸦片战争的根子是「白银逆差」——英国不是缺鸦片，是受不了买茶的白银亏空。
AP 爱考"英国为什么要卖鸦片"：答案不是"中国人想要"，是"英国想把流出去的白银抽回来"。

记忆锚：三个角 = 中国（茶）、印度（鸦片）、英国（钱），箭头一圈转起来，账就平了——可这账里，印度农民和中国烟民是被算进去的"燃料"。`,
          en: `Receiving-end Lens Node 2 and British-trader Lens Node 3 both show how this "machine" turns.
I compress it into a triangle mnemonic:
**Britain buys Chinese tea → silver flows into China (Britain loses); Britain forces India to grow opium, smuggled into China for silver → silver flows back to Britain (loss flips to profit); the silver then buys tea.**

Key exam sentence: this is why the root of the Opium War is the "silver drain" — Britain didn't lack opium, it couldn't bear the silver lost buying tea. AP loves "why did Britain sell opium": the answer isn't "the Chinese wanted it," it's "Britain wanted to pull back the silver flowing out."

Memory anchor: three corners = China (tea), India (opium), Britain (money); the arrows loop and the books balance — but in that ledger, the Indian farmer and the Chinese smoker are the "fuel" being counted in.`,
        },
      },
    },

    {
      id: 'destruction-of-opium-humen',
      termCn: '虎门销烟',
      termEn: 'Destruction of Opium at Humen',
      standardRef: ['AP World Unit 6.2', 'HS World History — Imperialism'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'linzexu-mediator',
        nodeIds: ['asian-imperialism-lin-n4', 'asian-imperialism-brit-n5'],
        xiaoweiNote: {
          cn: `林则徐那一遍第 4 节最戳人：他不是偷偷处理，是当众销毁——挖大池子、掺石灰盐、化进大海，前后二十多天。

这里有一个老师专门提醒的**时间陷阱**：
误："虎门销烟在 1839 年春。"
正：林则徐缴烟、封锁商馆确实在 1839 年春（3-5 月）；但当众"销毁"是在 1839 年初夏（6 月 3 日开始），不是春。6 月 3 日后来成了中国"禁毒纪念日"的由来。AP 阅卷会挑这个日期。

考点关键句：虎门销烟 = 林则徐当众销毁两万多箱英国鸦片，是第一次鸦片战争的直接导火索（英国以"商人财产被毁"为开战借口）。

记忆锚：缴烟封商馆=春，倒进海里=初夏。两步别并成一个"春"。`,
          en: `Lin Zexu's Lens Node 4 hits hardest: he didn't dispose of it in secret, he destroyed it in public — dug great pools, mixed in lime and salt, dissolved it into the sea, over twenty days.

Here's a **timing trap** my teacher flagged:
Misconception: "the Destruction of Opium at Humen was in spring 1839."
Correction: Lin Zexu's seizing of the opium and the blockade of the trading houses were indeed in spring 1839 (March-May); but the public destruction was in early summer 1839 (starting June 3), not spring. June 3 later became the origin of China's "anti-drug day." AP graders pick at this date.

Key exam sentence: the Destruction of Opium at Humen = Lin Zexu publicly destroying twenty-thousand-plus chests of British opium, the direct trigger of the First Opium War (Britain used "merchants' property destroyed" as its pretext).

Memory anchor: seizing + blockade = spring; pouring into the sea = early summer. Don't merge the two steps into one "spring."`,
        },
      },
    },

    {
      id: 'first-opium-war',
      termCn: '第一次鸦片战争',
      termEn: 'The First Opium War (1839-1842)',
      standardRef: ['AP World Unit 6.2', 'HS World History — Imperialism'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'linzexu-mediator',
        nodeIds: ['asian-imperialism-lin-n5', 'asian-imperialism-brit-n6'],
        xiaoweiNote: {
          cn: `林则徐第 5 节、英国商人第 6 节都讲了这一仗。我记住的核心不是"谁打谁"，是"为什么几乎没悬念"。

考点关键句：第一次鸦片战争（1839-1842）的实质，是一个**刚完成工业革命的帝国，为维护"卖鸦片+强行通商"的权利而发动的战争**。
英国的蒸汽炮舰能逆风逆水、想打哪座沿海城市就打哪座；清朝的旧式帆船和固定炮台够不着。

老师强调一个 Rule 0 点（AP 爱考）：连英国议会自己都有人说"为卖鸦片打仗是国耻"——但反对声输了。所以别把它写成"文明对野蛮"，它是"工业暴力 vs 旧帝国"。

记忆锚：这不是勇气的差距，是两个时代的差距（工业革命 = 碾压式的、不对等的暴力）。`,
          en: `Lin Zexu's Node 5 and the British trader's Node 6 both cover this war. The core I remember isn't "who fought whom," it's "why there was almost no suspense."

Key exam sentence: the true nature of the First Opium War (1839-1842) was an **empire fresh from the Industrial Revolution waging war to preserve the right to "sell opium and force trade open."**
Britain's steam gunboats could move against wind and current and strike any coastal city they chose; the Qing's old sailing junks and fixed forts couldn't reach them.

Teacher stressed a Rule 0 point (AP loves it): even some in the British Parliament said "war to sell opium is a national disgrace" — but they lost the vote. So don't write it as "civilization vs barbarism"; it's "industrial violence vs an old empire."

Memory anchor: not a gap of courage, a gap of two ages (the Industrial Revolution = crushing, unequal violence).`,
        },
      },
    },

    {
      id: 'treaty-of-nanking',
      termCn: '南京条约（第一个不平等条约）',
      termEn: 'Treaty of Nanking (the First Unequal Treaty)',
      standardRef: ['AP World Unit 6.2', 'HS World History — Imperialism', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'british-actor',
        nodeIds: ['asian-imperialism-brit-n7', 'asian-imperialism-lin-n7'],
        xiaoweiNote: {
          cn: `英国商人第 7 节、林则徐第 7 节都讲了。这是整门课最高频的考点之一。

考点关键句：1842 年《南京条约》=中国第一个"不平等条约"。
表面三件事我背成口诀：**赔款 2100 万银元 + 开五口（广州、厦门、福州、宁波、上海）+ 割香港岛。**

但老师反复说，真正狠的是后面叠上去的"剥主权三件套"（单独一张卡）。
赔款割地只是钱和地，三件套才是把主权一层层剥掉。

记忆锚："五口"用拼音首字母串一遍：广(G)厦(X)福(F)宁(N)上(S)。
AP 考"不平等条约时代的开端"，答案就是 1842 南京条约。`,
          en: `The British trader's Node 7 and Lin Zexu's Node 7 both cover this. It's one of the highest-frequency points in the whole topic.

Key exam sentence: the 1842 Treaty of Nanking = China's first "unequal treaty."
I memorize the three surface terms: **indemnity of 21 million silver dollars + five ports opened (Canton, Amoy, Foochow, Ningpo, Shanghai) + Hong Kong Island ceded.**

But teacher kept saying the truly harsh part is the "three-piece set that strips sovereignty" stacked on afterward (its own card). The indemnity and land are just money and territory; the three-piece set peels sovereignty away layer by layer.

Memory anchor: AP asks "the start of the unequal-treaty era" — the answer is the 1842 Treaty of Nanking.`,
        },
      },
    },

    {
      id: 'unequal-treaty-three-pieces',
      termCn: '不平等条约"剥主权三件套"',
      termEn: 'The Three Sovereignty-Stripping Clauses',
      standardRef: ['AP World Unit 6.3', 'AP DBQ rubric', 'HS World History — Imperialism'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'british-actor',
        nodeIds: ['asian-imperialism-brit-n7', 'asian-imperialism-lin-n7'],
        xiaoweiNote: {
          cn: `英国商人第 7 节把这套设计的"精髓"讲得最毒。赔款割地是表面，这三件套才是真正把中国攥住的东西。

我背成三条：
1. **治外法权（extraterritoriality）**：英国人在中国犯法，不归中国法律管，归他们自己管。
2. **协定关税（agreed tariff）**：中国连自己收多少关税都做不了主，得跟列强商量定。
3. **最惠国待遇（most-favored-nation）**：别的国家从中国拿到任何好处，英国自动也均沾一份。

考点关键句（DBQ 高频）：这三件套的精髓是——**几乎不占中国一寸领土，却把它的主权一层层剥掉**。中国名义上还是独立国家，可贸易规矩、收税权、管自己人的法律都不再自己说了算。

记忆锚：治外法权（管人）+协定关税（收钱）+最惠国（连环均沾）= "informal empire 非正式帝国"的工具箱。`,
          en: `The British trader's Node 7 lays out the "essence" of this design most poisonously. Indemnity and ceded land are the surface; this three-piece set is what truly grips China.

I memorize three:
1. **Extraterritoriality**: when the English break the law in China, they answer to their own law, not China's.
2. **Agreed tariff**: China can't even decide its own customs rates; it must settle them with the powers.
3. **Most-favored-nation**: any benefit another country gets from China, Britain automatically shares.

Key exam sentence (high-frequency DBQ): the essence is — **seize almost not an inch of Chinese land, yet peel away its sovereignty layer by layer.** China is still nominally independent, yet its trade rules, taxing power, and laws over its own people are no longer its own to decide.

Memory anchor: extraterritoriality (people) + agreed tariff (money) + most-favored-nation (chain-sharing) = the toolbox of an "informal empire."`,
        },
      },
    },

    {
      id: 'imperialism-of-free-trade',
      termCn: '自由贸易帝国主义 / 非正式帝国',
      termEn: 'Imperialism of Free Trade / Informal Empire',
      standardRef: ['AP World Unit 6.2', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'british-actor', nodeId: 'asian-imperialism-brit-n7', context: '英国商人点破"不插旗也能让你按我的规矩来"' },
          { lens: 'british-actor', nodeId: 'asian-imperialism-brit-n8', context: '中国(非正式)vs 印度(正式)两副面孔对照' },
        ],
      },
      standaloneText: {
        cn: `**自由贸易帝国主义（imperialism of free trade）** 是这门课 AP DBQ **最高奖励**的论点之一，
故事里英国商人点到了，但作为一个学术概念，要单独掌握。

**核心问题：帝国主义一定要插旗子、占领土吗？**
答案是不。历史学家 Gallagher 和 Robinson 提出：英国控制中国，靠的不是殖民占领，
而是**逼你开市场 + 不平等条约 + 一层本地代理人**。中国名义上还是独立国家，
实际上贸易、关税、司法都被列强攥着——这叫 **非正式帝国（informal empire）**。

**对照"正式帝国（formal empire）"：**
- **中国 = 非正式帝国**：不占领土，靠条约（治外法权+协定关税+最惠国）+买办控制。
- **印度 = 正式帝国**：东印度公司直接统治，1858 后归英国王室直辖（British Raj）。
- **非洲（1884 柏林会议后）= 正式瓜分**：列强划界直接占领。
同一个工业驱动，三种不同手法。

**为什么 AP 爱考？**
因为它逼学生跳出"帝国主义=占领土插旗"的直觉，看见一种**更隐蔽、更难察觉**的控制方式。
DBQ 常给一组关于中国通商口岸的材料，问"这算不算帝国主义"——
能用"自由贸易帝国主义/非正式帝国"回答的，直接拿高分。

故事连接：英国商人第 7 节说"不插旗子，也能让你乖乖按我的规矩来"；
第 8 节用印度对照中国，正是"正式 vs 非正式帝国"两副面孔。`,
        en: `**The imperialism of free trade** is one of the **most highly rewarded** AP DBQ arguments
in this topic. The British trader touches it in the story, but as an academic concept, master it separately.

**Core question: must imperialism plant a flag and seize land?**
No. Historians Gallagher and Robinson argued that Britain controlled China not by colonial occupation
but by **forcing the market open + unequal treaties + a layer of local agents.** China remained
nominally independent, yet its trade, tariffs, and courts were held by the powers — this is an
**informal empire.**

**Contrast with "formal empire":**
- **China = informal empire**: no occupation; control via treaties (extraterritoriality + agreed tariff
  + most-favored-nation) and compradors.
- **India = formal empire**: ruled directly by the East India Company, then by the British Crown after
  1858 (the British Raj).
- **Africa (after the 1884 Berlin Conference) = formal partition**: powers drew borders and occupied directly.
One industrial drive, three different methods.

**Why does AP love it?**
Because it forces students past the intuition that "imperialism = seizing land and planting a flag,"
to see a **more hidden, harder-to-detect** form of control. A DBQ often gives documents about China's
treaty ports and asks "is this imperialism" — answering with "imperialism of free trade / informal
empire" earns high marks.

Story link: the British trader's Node 7 says "plant no flag, and still make you obediently come by my
rules"; Node 8 contrasts India with China — exactly the two faces of "formal vs informal empire."`,
      },
      xiaoweiNote: {
        cn: `老师说这是 AP World 这一单元**最值钱**的一个词。
我的记忆口诀：**插旗 = 正式帝国（印度）；不插旗、靠条约 = 非正式帝国（中国）。**
考试只要出现"不占领土也能控制""通商口岸""informal empire"，第一反应就是这张卡。`,
        en: `Teacher said this is the **most valuable** term in this AP World unit.
My mnemonic: **flag planted = formal empire (India); no flag, treaties instead = informal empire (China).**
On the exam, if you see "control without occupation," "treaty ports," or "informal empire," your first
thought should be this card.`,
      },
    },

    {
      id: 'east-india-company',
      termCn: '东印度公司',
      termEn: 'East India Company (EIC)',
      standardRef: ['AP World Unit 6.2', 'HS World History — Imperialism'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'british-actor',
        nodeIds: ['asian-imperialism-brit-n8', 'asian-imperialism-recv-n3'],
        xiaoweiNote: {
          cn: `英国商人第 8 节、承受方第 3 节都讲了 EIC。这家公司最让我吃惊的一点：它不是普通公司，它有军队、能征税、能开战。

考点关键句：东印度公司（EIC）是一家**有军队、能征税开战的英国特许公司**——一家"公司"，却统治了印度大半，还在孟加拉逼农民种鸦片走私进中国。

两个角色别搞混：
- 在**印度**：EIC 是直接统治者（1757 普拉西战役后），逼农民种鸦片。
- 在**中国**：EIC 早期垄断对华贸易，是把印度鸦片运进中国那条链子的关键一环。

记忆锚："一家公司当了一个国家"——这是帝国主义最离谱、也最该被记住的一幕。1858 年它被英国议会撤销，印度改归王室直辖。`,
          en: `The British trader's Node 8 and the receiving-end Node 3 both cover the EIC. The most startling thing: it wasn't an ordinary company — it had an army, could tax, could wage war.

Key exam sentence: the East India Company (EIC) was a **British chartered company with its own army, able to tax and make war** — a "company" that nonetheless ruled most of India and forced Bengal farmers to grow opium smuggled into China.

Don't confuse its two roles:
- In **India**: the EIC was the direct ruler (after the 1757 Battle of Plassey), forcing farmers to grow opium.
- In **China**: the EIC early on monopolized the China trade, a key link in the chain carrying Indian opium into China.

Memory anchor: "a company that became a country" — the most absurd and most memorable scene of imperialism. In 1858 Parliament abolished it and India passed to direct Crown rule.`,
        },
      },
    },

    {
      id: 'collaborators-sepoy-comprador',
      termCn: '本地合作者：sepoy 与买办',
      termEn: 'Local Collaborators: Sepoys and Compradors',
      standardRef: ['AP World Unit 6.3 (Indigenous Responses)', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'british-actor',
        nodeIds: ['asian-imperialism-brit-n8', 'asian-imperialism-recv-n5'],
        xiaoweiNote: {
          cn: `英国商人第 8 节（印度 sepoy）、承受方第 5 节（中国买办）都点了这层。老师说这是帝国主义**最不愿被讲、却最关键**的一层。

考点关键句：殖民统治从来不是只有"压迫者 vs 被压迫者"两层——中间永远有一层**本地合作者**。
- **印度的 sepoy（土兵）**：领英国军饷的印度兵。几千个英国人能管住上亿印度人，靠的就是 sepoy 在打印度人。
- **中国的买办（comprador）**：给外国商行办事的中国中间人；还有走私贩、放账商人、睁眼闭眼的地方官——没他们，洋人的鸦片进不了内地。

为什么 AP 重视：它逼你看清"帝国主义离不开本地人配合"，
这正是 DBQ "collaboration（合作）" 这个考点的核心——回应殖民有三种：抵抗 / 改良 / 合作，合作是最容易被忽略的一种。

记忆锚：sepoy = 替帝国扛枪的印度人；买办 = 替帝国办事的中国人。同一台机器，两个本地齿轮。`,
          en: `The British trader's Node 8 (Indian sepoys) and the receiving-end Node 5 (Chinese compradors) both name this layer. Teacher said it's the layer of imperialism **least willing to be told, yet most crucial.**

Key exam sentence: colonial rule was never just two layers, "oppressor vs oppressed" — there is always a layer of **local collaborators** in between.
- **India's sepoys**: Indian soldiers drawing British pay. A few thousand Englishmen held down hundreds of millions of Indians because sepoys fought Indians.
- **China's compradors**: Chinese middlemen who handled business for the foreign firms; plus smugglers, money-lenders, and officials who looked away — without them, the foreigner's opium couldn't reach the interior.

Why AP values it: it forces you to see that "imperialism depends on local cooperation," the core of the DBQ "collaboration" point — colonial responses come in three: resistance / adaptation / collaboration, and collaboration is the easiest to overlook.

Memory anchor: sepoy = the Indian who carried a gun for the empire; comprador = the Chinese who handled business for the empire. Same machine, two local gears.`,
        },
      },
    },

    {
      id: 'sepoy-1857-uprising',
      termCn: '1857 印度大起义',
      termEn: 'The Great Indian Uprising of 1857',
      standardRef: ['AP World Unit 6.3 (Indigenous Responses)', 'HS World History — Imperialism'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'receiving-end-canton-india',
        nodeIds: ['asian-imperialism-recv-n8', 'asian-imperialism-recv-n9'],
        xiaoweiNote: {
          cn: `承受方第 8、9 节讲了起义和它的结局。这里有一个老师特别强调的**身份陷阱**：

误："被逼种鸦片的孟加拉农民起来反抗，就是 1857 起义。"
正：种鸦片的农民和起义的 sepoy 是**同一台机器榨出的两类印度人，不是同一群人**。起义主力是**恒河平原**领英军饷的 sepoy，地理核心在 Meerut/Delhi，不是产鸦片的孟加拉乡村。

考点关键句：1857 大起义 = 被英国最依赖的那群 sepoy 把枪口掉转。
导火索是涂了猪油牛油、要用牙咬开的新子弹（同时冒犯穆斯林和印度教徒）；但**导火索不是根本原因**——根本原因是兼并、税地剥夺、长年歧视。

结局也是考点：起义被血腥镇压；末代莫卧儿皇帝被流放、莫卧儿王朝终结；1858 年英国撤销 EIC，印度归王室直辖（British Raj）。**反抗不等于赢**，镇压后绳子反而收得更紧。

记忆锚：导火索（子弹）≠ 根本原因（积压的火）。AP 最爱考这个区分。`,
          en: `The receiving-end Nodes 8 and 9 cover the uprising and its outcome. Here's an **identity trap** teacher stressed:

Misconception: "the Bengal farmers forced to grow opium rose up — that's the 1857 uprising."
Correction: the poppy-growing farmer and the rebelling sepoy are **two kinds of Indians the same machine squeezed out, not the same group.** The main force was the sepoys of the **Gangetic plain** drawing British pay, centered at Meerut/Delhi, not the opium-growing villages of Bengal.

Key exam sentence: the 1857 uprising = the very sepoys Britain most depended on turning their guns around. The spark was a new cartridge greased with pig and cow fat, bitten open with the teeth (offending both Muslims and Hindus); but **the spark is not the root cause** — the root was annexation, the stripping of land and taxes, years of contempt.

The outcome is also tested: the uprising was bloodily crushed; the last Mughal emperor was exiled and the Mughal dynasty ended; in 1858 Britain abolished the EIC and India passed to Crown rule (the British Raj). **Rising up is not winning** — after suppression the rope was pulled tighter.

Memory anchor: spark (the cartridge) ≠ root cause (the pent-up fire). AP loves this distinction.`,
        },
      },
    },

    {
      id: 'british-raj',
      termCn: '英属印度（British Raj）',
      termEn: 'The British Raj',
      standardRef: ['AP World Unit 6.2', 'HS World History — Imperialism'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'british-actor', nodeId: 'asian-imperialism-brit-n9', context: '1858 撤 EIC、印度归王室直辖' },
          { lens: 'receiving-end-canton-india', nodeId: 'asian-imperialism-recv-n9', context: '镇压后从公司统治变王室直辖' },
        ],
      },
      standaloneText: {
        cn: `**英属印度（British Raj）** 指 1858 年起、英国王室**直接统治**印度的时期，
故事里点到了转折点，但作为一个明确的考点术语，值得单独说清。

**1858 年发生了什么？**
1857 大起义被镇压后，英国议会通过《印度政府法》，**撤销了东印度公司**，
把印度从"一家公司管"直接收归**英国王室直辖**。1876 年维多利亚女王还加冕为"印度女皇"。
英国终于撕掉了"这只是一家公司"的伪装，直接当起了统治者。

**为什么这是"正式帝国"的典型？**
和中国的"非正式帝国"（不占领土、靠条约）正相反——印度是**实打实的殖民占领**：
英国派总督、驻军、收税、建铁路电报、推行英语和英式行政。这就是 formal empire。

**怎么和别的考点串起来：**
- 公司（EIC）→ 王朝（Raj）：殖民"升级"，伪装被撕掉。
- 中国（informal）vs 印度（formal）：同一个英国，两副面孔（自由贸易帝国主义那张卡的对照项）。

考点关键句：British Raj = 1858 年起英国王室对印度的直接统治，
是"正式帝国"的样板，与中国"非正式帝国"形成 AP 最爱考的对照。`,
        en: `**The British Raj** refers to the period from 1858 when the British Crown **directly ruled** India.
The story names the turning point, but as a defined exam term it deserves its own explanation.

**What happened in 1858?**
After the 1857 uprising was crushed, Parliament passed the Government of India Act, **abolishing the East
India Company** and taking India from "a company's rule" directly into **Crown rule.** In 1876 Queen
Victoria was even crowned "Empress of India." Britain finally tore off the disguise of "just a company"
and ruled outright.

**Why is this the model of a "formal empire"?**
The opposite of China's "informal empire" (no occupation, treaties instead) — India was **literal colonial
occupation**: Britain sent a viceroy, garrisoned troops, taxed, built railways and telegraphs, and pushed
English and British administration. This is formal empire.

**How it links to other points:**
- Company (EIC) → dynasty (Raj): colonialism "upgraded," the disguise stripped off.
- China (informal) vs India (formal): one Britain, two faces (the contrast pair for the free-trade-imperialism card).

Key exam sentence: the British Raj = direct British Crown rule of India from 1858, the model of "formal
empire," forming AP's favorite contrast with China's "informal empire."`,
      },
      xiaoweiNote: {
        cn: `我的记忆链：**1757 普拉西（公司起家）→ 1857 起义 → 1858 撤公司、王室直辖（Raj 诞生）。**
考试看到"东印度公司被撤销""印度归英国王室直接统治"，答案就是 1858 British Raj。
别和中国搞混：中国是"非正式帝国"（不占领土），印度才是"正式帝国"（Raj）。`,
        en: `My memory chain: **1757 Plassey (the company begins) → 1857 uprising → 1858 company abolished,
Crown rule (the Raj is born).**
On the exam, "the East India Company was abolished" / "India came under direct British Crown rule" → the
answer is the 1858 British Raj.
Don't confuse it with China: China was an "informal empire" (no occupation); India was the "formal empire" (the Raj).`,
      },
    },

    {
      id: 'china-japan-divergence',
      termCn: '中日同冲击、不同回应',
      termEn: 'China vs Japan: Same Shock, Different Response',
      standardRef: ['AP World Unit 6.3-6.4', 'AP DBQ rubric', 'HS World History — Imperialism'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'linzexu-mediator',
        nodeIds: ['asian-imperialism-lin-n9'],
        xiaoweiNote: {
          cn: `林则徐那一遍第 9 节用"后世会怎么讲"的口气，把中日放一起对照（因为林 1850 年就去世了，看不到后面的事，故事特意用"后世视角"转述，没让林亲口断言 1894）。

考点关键句：同样被炮舰逼到门口——中国 1839（鸦片战争）、日本 1853（美国黑船开进江户湾）——
**日本搞了明治维新（1868），自上而下彻底学西方，几十年跻身列强**，
甚至在 1894 甲午战争里反过来打败清朝；**中国则改革受阻、继续沉沦**。

老师反复纠正一个 Rule 0 误区：
误："这说明日本人比中国人强。"
正：差别在**政治结构、改革的彻底程度、既得利益挡不挡得住**，不是民族高下。

为什么 AP 爱考：这是世界史最有张力的"比较题"之一——同一外部冲击，两种不同选择，两种不同结局。

记忆锚：同样的炮舰 → 日本"转身"（明治维新）vs 中国"沉沦"（改革受阻）。差别在体制，不在血脉。`,
          en: `Lin Zexu's Node 9 uses the voice of "how later people would tell it" to set China and Japan side by side (since Lin died in 1850 and couldn't see what came after, the story deliberately relays it through a "later-ages perspective," not Lin asserting 1894 firsthand).

Key exam sentence: forced to the door by the same gunboats — China in 1839 (the Opium War), Japan in 1853 (America's Black Ships into Edo Bay) —
**Japan carried out the Meiji Restoration (1868), learning from the West thoroughly and top-down, joining the great powers within decades**, even defeating the Qing in the 1894 Sino-Japanese War; **China's reforms stalled and it sank on.**

Teacher kept correcting a Rule 0 misconception:
Misconception: "this shows the Japanese are stronger than the Chinese."
Correction: the difference is **political structure, how thorough the reform, whether vested interests could be overcome** — not racial superiority.

Why AP loves it: one of world history's most charged "comparison" prompts — same external shock, two different choices, two different outcomes.

Memory anchor: same gunboats → Japan "turns" (Meiji Restoration) vs China "sinks" (reform stalls). The difference is in the system, not the blood.`,
        },
      },
    },

    {
      id: 'colonized-three-responses',
      termCn: '被殖民者的三种回应',
      termEn: 'Three Responses of the Colonized',
      standardRef: ['AP World Unit 6.3 (Indigenous Responses)', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'receiving-end-canton-india', nodeId: 'asian-imperialism-recv-n9', context: '点破同社会内部并存抵抗/合作/改良三种人' },
          { lens: 'receiving-end-canton-india', nodeId: 'asian-imperialism-recv-n8', context: '1857 起义=抵抗；sepoy/买办=合作' },
        ],
      },
      standaloneText: {
        cn: `**被殖民者的三种回应（resistance / adaptation / collaboration）** 是 AP World
Unit 6.3 的**核心必考三分法**，故事里零散出现，但要作为一个框架单独背熟。

**三种回应：**
1. **抵抗（resistance）**：直接武力反抗。例：1857 印度大起义、中国的各种民间反抗。
2. **改良/适应（adaptation / reform）**：学习对方、自上而下改革自救。例：中国的洋务运动、日本的明治维新。
3. **合作（collaboration）**：替殖民者办事换取自身利益。例：印度的 sepoy 和王公、中国的买办。

**最关键、也是 AP 最爱考的一点：这三种回应往往在同一个被殖民社会里"同时存在"。**
不是"印度人都反抗、中国人都屈服"——而是**同一个社会内部，有人反抗、有人改良、有人合作**。
DBQ 高分的标志，就是能写出"同社会内部的分化（division within one society）"，
而不是把一整个民族写成铁板一块。

**为什么重要：**
它直接对应 AP 评分要的 **complexity（复杂性）**——
被殖民者不是只会"被压迫"的扁平受害者，他们有能动性（agency），
而且这种能动性朝三个不同方向分裂。

故事连接：承受方第 8 节里 1857 起义是"抵抗"、sepoy 和买办是"合作"；
第 9 节明确点破"同一个被殖民社会，为什么会同时长出反抗、合作、改良三种人"。`,
        en: `**The three responses of the colonized (resistance / adaptation / collaboration)** are the
**core required three-part framework** of AP World Unit 6.3. The story shows them scattered, but
memorize them as one framework.

**Three responses:**
1. **Resistance**: direct armed revolt. E.g., the 1857 Indian uprising, various Chinese popular revolts.
2. **Adaptation / reform**: learn from the other side, reform top-down to save yourself. E.g., China's
   Self-Strengthening Movement, Japan's Meiji Restoration.
3. **Collaboration**: serve the colonizer for one's own gain. E.g., India's sepoys and princes, China's compradors.

**The most crucial point, and AP's favorite: these three responses often "coexist" within the same
colonized society.**
It is not "all Indians resisted, all Chinese submitted" — rather, **within one society, some resist,
some reform, some collaborate.** The mark of a high-scoring DBQ is writing the "division within one
society," not painting a whole people as monolithic.

**Why it matters:**
It directly maps to the **complexity** AP scoring demands — the colonized are not flat victims who only
"get oppressed"; they have agency, and that agency splits in three different directions.

Story link: in the receiving-end Node 8, the 1857 uprising is "resistance," sepoys and compradors are
"collaboration"; Node 9 explicitly names "why one colonized society grows resisters, collaborators, and
reformers all at once."`,
      },
      xiaoweiNote: {
        cn: `老师说这是 Unit 6.3 **必考**的三分法。我的口诀：**抵抗 / 改良 / 合作 = 反它 / 学它 / 帮它。**
最高频的考法是逼你看"同一个社会里三种人并存"——别写"整个民族都怎样怎样"，那会丢 complexity 分。
配对记忆：1857 起义=抵抗、明治维新/洋务=改良、sepoy/买办=合作。`,
        en: `Teacher said this three-part framework is **required** in Unit 6.3. My mnemonic: **resistance /
adaptation / collaboration = fight it / learn it / help it.**
The most common test is to make you see "three kinds coexisting in one society" — don't write "the whole
people did X," that loses complexity points.
Pairing: 1857 uprising = resistance, Meiji/Self-Strengthening = adaptation, sepoy/comprador = collaboration.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `英国商人在故事里把卖鸦片讲成"自由贸易""公平交易"，他说："我又没逼谁吸，是他们自己要买。"
可这门生意的货是违禁毒品，规矩是靠炮舰撑着的。

你觉得"我只是个守规矩的生意人，顺应了时代"这种说法，能不能让一个卖鸦片的人把自己择干净？
用故事或考点里至少两条具体证据支持你的判断。`,
      en: `In the story the British trader frames selling opium as "free trade" and "fair trade," saying:
"I never forced anyone to smoke; they chose to buy." Yet the cargo was a banned drug and the rules were
propped up by gunboats.

Can the claim "I'm just a rule-abiding businessman going with the times" clear a man who sold opium?
Support your judgment with at least two specific pieces of evidence from the story or the exam points.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "择不干净"这边：货是违禁毒品（走私进中国）、为卖毒品而打仗（连英国议会都有人说是国耻）、
  他的"体面"建在烟馆人命和孟加拉农民的苦之上。
- "情有可原"这边：他没发明鸦片贸易、中国确有需求、整套是国家驱动的，他只是机器上一颗螺丝。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which side
you pick.
- "Can't clear himself" side: the cargo was a banned drug (smuggled into China), the war was fought to sell
  a drug (even some in Parliament called it a disgrace), his "respectability" rests on lives in the opium
  dens and the suffering of Bengal farmers.
- "Understandable" side: he didn't invent the opium trade, China had real demand, the whole thing was
  state-driven, and he was one screw in a machine.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['triangular-trade-opium', 'first-opium-war', 'imperialism-of-free-trade'],
    },
    {
      id: 'q2',
      cn: `英属印度后来修了铁路、电报，统一了行政和英语；中国的通商口岸成了最早接触现代世界的窗口。
有人因此说："帝国主义虽然残忍，可它客观上带来了现代化，功过要一起算。"
可印度也有去工业化、财富外流、周期性大饥荒。

如果你是 AP 老师，要出一道题考"能不能用'铁路'去抵'饥荒'"，你会怎么提问？
请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `The British Raj later built railways and the telegraph and unified administration and English;
China's treaty ports became early windows onto the modern world. Some therefore say: "imperialism was
cruel, yet it objectively brought modernization, and the merits and faults must be reckoned together."
Yet India also had deindustrialization, the drain of wealth, and periodic great famines.

If you were an AP teacher writing a question on "can you set 'railways' against 'famine,'" how would you
phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时握住两件事**，而不是二选一。
这正是 Rule 0：**侵略的不义（道义判断）和后果的复杂（结构分析）可以同时为真，不在同一层，不能互相抵消。**
你可以让学生区分"铁路是真的（后果层）"和"它是为榨取而修、对饿死的人没有意义（道义层）"。
进阶：让学生想想"谁在用'现代化'这套话？"——承受方第 10 节说这话最危险，因为它替施害者说话。
好题目会逼学生看见：把两层叠在一起算，是在偷换概念。`,
      hintEn: `Hint: a good DBQ forces students to **hold two things at once**, not pick one.
This is Rule 0: **the injustice of the invasion (a moral judgment) and the complexity of its consequences
(a structural analysis) can both be true, on different planes, and cannot cancel each other out.**
You could have students distinguish "the railways were real (the consequence layer)" from "they were built
for extraction and mean nothing to those who starved (the moral layer)."
Going deeper: ask "who uses the language of 'modernization'?" — receiving-end Node 10 says this is most
dangerous because it speaks for the perpetrator. A good question makes students see that stacking the two
layers into one ledger is a sleight of hand.`,
      conceptsActivated: ['british-raj', 'imperialism-of-free-trade'],
    },
    {
      id: 'q3',
      cn: `同样被工业列强的炮舰逼到门口，日本搞了明治维新、转身成了列强，中国却改革受阻、继续沉沦。
林则徐那一遍说，这"不是输在血脉，是输在那套撼动不了的旧体制"。
而被殖民的社会里，又总是同时长出三种人：抵抗的、改良的、合作的。

你同意"决定一个国家命运的，是它的政治结构和改革的彻底程度，而不是民族高下"吗？
用中日对照、或"被殖民者三种回应"里的一个具体例子，支持你的看法。`,
      en: `Forced to the door by the same industrial gunboats, Japan carried out the Meiji Restoration and
became a great power, while China's reforms stalled and it sank on. Lin Zexu's lens says this was "not lost
by blood, but by that old system that could not be shifted." And within colonized societies, three kinds of
people always grow at once: resisters, reformers, collaborators.

Do you agree that "what decides a nation's fate is its political structure and the thoroughness of its
reform, not racial superiority"? Support your view with the China-Japan comparison, or one specific example
from the "three responses of the colonized."`,
      hintCn: `提示：先把两个考点分清——
"中日对照"考的是**为什么同冲击不同结局**（答案在体制，不在民族）；
"三种回应"考的是**同一个社会内部的分化**（抵抗/改良/合作并存）。
具体例子可以举：日本明治维新（彻底改良）vs 中国洋务受阻；
或 1857 起义（抵抗）、sepoy 和买办（合作）在同一社会并存。
进阶思考：把失败归给"民族性"有什么危险？（它让人不去追问真正可改的东西——体制）。
AP 看的是你能不能用一个真实例子，把"体制 > 血脉"这个抽象论点钉在证据上。`,
      hintEn: `Hint: first keep the two points straight —
"China-Japan comparison" tests **why the same shock gave different outcomes** (the answer is in the system,
not the people); "three responses" tests **division within one society** (resistance/reform/collaboration
coexisting).
For a specific example: Japan's Meiji Restoration (thorough reform) vs China's stalled Self-Strengthening;
or the 1857 uprising (resistance) alongside sepoys and compradors (collaboration) in one society.
Going deeper: what's dangerous about blaming failure on "national character"? (It stops you asking about the
truly changeable thing — the system.)
AP wants you to pin the abstract claim "system > blood" to evidence with one real example.`,
      conceptsActivated: ['china-japan-divergence', 'colonized-three-responses', 'sepoy-1857-uprising'],
    },
  ],
};

export default notebook;
