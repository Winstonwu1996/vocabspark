// ─── 同伴笔记本架构 v1 · Mauryan India / Ashoka & the Kalinga War 261 BCE ─────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
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
//   - storyboard 提供情感锚点（Ashoka 征服者+改革者 / dhamma-mahamatta 执行者 / Kalinga 幸存者 受影响方 三条线）
//   - notebook 提供考点闭环（Maurya 帝国奠基、阿育王在位、羯陵伽之战、dhamma、法敕与 Rock Edict XIII、
//     佛教外传、狮子柱头→国徽、帝国行政与瓦解 — 补完 CA HSS Grade 6 古印度 + AP World 古典帝国课纲）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - CA HSS Grade 6.5（古印度：Mauryan 帝国 / 阿育王 / 法敕）
//   - AP World History Unit 1（古典帝国治理与意识形态：Maurya 与汉、罗马并列）
//
// 事实地基：对账 narrative kernel mauryan-india-261bce.md（§4-§11 + 附录 A-D）
//   - dhamma ≠ 佛教（跨教派公共伦理）；阿育王没有解散军队、没放弃帝国、保留死刑、没还 Kalinga
//   - Rock Edict XIII 数字：约 10 万死、约 15 万流放（简化转述，非逐字原文）
//   - 公元前年代：前 268 早于前 261；阿育王在位约前 268-232
//   - cultural ban（印度非中国）：保留 dhamma / stupa / edict / Kalinga / Pataliputra 等原术语，不用中国概念词
//
// schemaVersion: 1 · notebookVersion: mauryan-india-261bce-v1

export var notebook = {
  topicId: 'mauryan-india-261bce',
  topicNameCn: '阿育王与羯陵伽之战 公元前 261 年',
  topicNameEn: 'Ashoka & the Kalinga War 261 BCE',
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
    cn: `今天老师说我们要学古印度的一个国王，叫 Ashoka（阿育王），还有他打的一场仗——
Kalinga War（羯陵伽之战，约公元前 261 年）。

她说中国的历史课对古印度讲得很少，大多停在「佛教起源」，
可在加州六年级世界史和 AP World 里，阿育王是个绕不过去的大人物。

她给了一张纸，上面写着这些名字：

Ashoka（阿育王）、Chandragupta Maurya（旃陀罗笈多）、Kautilya / Chanakya（考底利耶）

还有一串词：Mauryan Empire（孔雀帝国）、Kalinga（羯陵伽）、dhamma（达摩）、
edict（法敕）、Rock Edict XIII（第十三大石敕）、stupa（佛塔）、
Pataliputra（华氏城）、Arthashastra（《政事论》）、ahimsa（非暴力）、lion capital（狮子柱头）。

我先把这些抄下来。等下读三个故事——阿育王（打这场仗又后悔的人）、
dhamma-mahamatta（达摩官，替国王把悔意落地的人）、
还有一个 Kalinga 幸存者（家人死在这场仗里的人）——读完再回来对照这张单子，看我能不能讲清楚。

老师说了一句我抄在笔记本第一页：「这个国王做了一件古代统治者几乎没人做过的事——
他把自己造成的死亡，亲手刻在石头上。可他刻下『我后悔了』的同一块石头上，
也刻着『我仍然有力量』。读他，要同时看见这两句话。」`,
    en: `Today my teacher said we're learning about an ancient Indian king named Ashoka, and
a war he fought, the Kalinga War (around 261 BCE).

She said Chinese history class covers ancient India very little, mostly stopping at "the
origins of Buddhism," but in California's Grade 6 world history and AP World, Ashoka is a
major figure you cannot skip.

She gave us a sheet with these names:

Ashoka, Chandragupta Maurya, Kautilya / Chanakya

Plus a string of terms: Mauryan Empire, Kalinga, dhamma, edict, Rock Edict XIII, stupa,
Pataliputra, Arthashastra, ahimsa (non-violence), lion capital.

Let me copy these down. After I read the three stories, Ashoka (who fought this war and
then regretted it), the dhamma-mahamatta (the officer who turned the king's remorse into
policy on the ground), and a Kalinga survivor (whose family died in this war), I'll come
back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "This king did a thing
almost no ancient ruler ever did, he carved the death he caused into stone with his own
hand. Yet on the very same stone where he cut 'I am sorry,' he also cut 'I still have
power.' To read him, you must see both lines at once."`,
    keyTerms: [
      { cn: '孔雀帝国 / 孔雀王朝', en: 'Mauryan Empire' },
      { cn: '阿育王', en: 'Ashoka' },
      { cn: '羯陵伽', en: 'Kalinga' },
      { cn: '达摩（跨教派公共伦理，不等于佛教）', en: 'dhamma' },
      { cn: '法敕（刻在岩石、石柱上的国王告示）', en: 'edict' },
      { cn: '佛塔', en: 'stupa' },
      { cn: '佛教', en: 'Buddhism' },
      { cn: '华氏城（首都）', en: 'Pataliputra' },
      { cn: '旃陀罗笈多（开国君主）', en: 'Chandragupta Maurya' },
      { cn: '《政事论》（治国权术之书）', en: 'Arthashastra' },
      { cn: '非暴力 / 不杀生', en: 'ahimsa (non-violence)' },
      { cn: '达摩官（推行 dhamma 的官员）', en: 'dhamma-mahamatta' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '阿育王',
        nameEn: 'Ashoka',
        ipa: '/əˈʃoʊkə/',
        roleCn: 'Maurya 第三代国王（约在位前 268-232），羯陵伽征服者 + 把死亡刻进石头的忏悔者 + dhamma 治理者，征服者与改革者是同一个人',
        roleEn: 'Third king of the Maurya dynasty (reigned c. 268-232 BCE); conqueror of Kalinga, the penitent who carved the death toll into stone, and the ruler who governed by dhamma; conqueror and reformer in one man',
        mustKnow: true,
        audioKey: 'ashoka',
      },
      {
        nameCn: '旃陀罗笈多',
        nameEn: 'Chandragupta Maurya',
        ipa: '/ˌtʃʌndrəˈɡʊptə ˈmaʊrjə/',
        roleCn: 'Maurya 帝国开国君主（约前 321 立国），阿育王的祖父，从乱世里打出从阿富汗到孟加拉湾的大帝国',
        roleEn: 'Founder of the Maurya Empire (c. 321 BCE) and Ashoka\'s grandfather, who carved an empire from Afghanistan to the Bay of Bengal out of an age of chaos',
        mustKnow: true,
        audioKey: 'chandragupta-maurya',
      },
      {
        nameCn: '考底利耶 / 旃那克亚',
        nameEn: 'Kautilya / Chanakya',
        ipa: '/kaʊˈtɪljə/ /ˈtʃɑːnəkjə/',
        roleCn: '传说中旃陀罗笈多的谋臣，与讲实力、情报、权术的治国手册《政事论》（Arthashastra）相关',
        roleEn: 'The adviser traditionally credited to Chandragupta, associated with the Arthashastra, a manual of statecraft on power, spies, and strategy',
        mustKnow: true,
        audioKey: 'kautilya',
      },
      {
        nameCn: '达摩官',
        nameEn: 'Dhamma-mahamatta',
        ipa: '/ˈdʌmə mɑːˈhɑːmɑːtə/',
        roleCn: '阿育王新设的官职（法敕真实记载），巡行帝国各地推行 dhamma、调解纠纷、监督官吏、照顾弱者',
        roleEn: 'A new office Ashoka created (genuinely recorded in the edicts); officers who traveled the empire to spread dhamma, settle disputes, watch officials, and care for the weak',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '羯陵伽幸存者',
        nameEn: 'A Kalinga survivor',
        ipa: null,
        roleCn: '本 Topic 受影响方视角的承载者（虚构个体承载真实群体经验），家人在那约 10 万死者、15 万流放者之中',
        roleEn: 'The figure carrying this topic\'s receiving-end perspective (an invented individual carrying a real collective experience); family among the roughly 100,000 dead and 150,000 deported',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'mauryan-empire-foundation',
      termCn: 'Maurya 帝国的奠基',
      termEn: 'Founding of the Mauryan Empire',
      standardRef: ['CA HSS Grade 6 — ancient India / empire', 'AP World — classical empires & state-building'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ashoka',
        nodeIds: ['ash-n2'],
        xiaoweiNote: {
          cn: `这个阿育王在他的 Lens 第 2 节亲口讲了。在他之前，是他家的人先打下了这个帝国。

我把家底背成三代人：
约公元前 321 年，他祖父 Chandragupta Maurya（旃陀罗笈多）从乱世里立国，
版图从今天的阿富汗山地一直到孟加拉湾——这是古印度第一个统一次大陆大部分地区的帝国。
传说他身边有个厉害谋臣 Kautilya（考底利耶），跟一部叫 Arthashastra（《政事论》）的书有关——
那书很冷，讲实力、讲情报、讲怎么让对手怕你。

考点关键句：Maurya 是和汉朝、罗马并列的古典大帝国之一；首都是 Pataliputra（华氏城），
坐落在恒河边，当时世界最大的城市之一。

记忆锚：Chandragupta 打天下（武力 + Arthashastra 权术）→ 孙子阿育王后来要换一套打法（dhamma）。
同一个帝国，祖孙两套治理思路，这正是 AP 爱比的「连续与变化」。`,
          en: `Ashoka tells this himself in Node 2 of his Lens. Before him, his family built the empire.

I memorize the inheritance as three generations:
around 321 BCE his grandfather Chandragupta Maurya founded the state out of an age of chaos,
its map running from the mountains of today's Afghanistan to the Bay of Bengal, the first
empire to unify most of the Indian subcontinent. He is said to have had a formidable adviser,
Kautilya, tied to a book called the Arthashastra, a cold book about power, spies, and making
your rivals fear you.

Key exam sentence: Maurya is one of the great classical empires alongside Han China and Rome;
the capital was Pataliputra, on the Ganges, one of the largest cities in the world at the time.

Memory anchor: Chandragupta conquered (force plus Arthashastra statecraft), and his grandson
Ashoka later wanted a different playbook (dhamma). One empire, two governing ideas across two
generations, exactly the "continuity and change" AP loves to compare.`,
        },
      },
    },

    {
      id: 'ashoka-reign',
      termCn: '阿育王的即位与转向',
      termEn: 'Ashoka\'s Reign and the Turn',
      standardRef: ['CA HSS Grade 6 — Ashoka', 'AP World — rulers & ideology'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ashoka',
        nodeIds: ['ash-n1', 'ash-n2', 'ash-n9'],
        xiaoweiNote: {
          cn: `阿育王整条 Lens 都是他。我把他这个人压成一条时间线，专门防公元前年代搞反：

约公元前 268 年即位（第三代国王）→ 即位约第 8 年、约公元前 261 年打羯陵伽 →
战后转向 dhamma → 约公元前 232 年去世。

注意一个 AP 最爱设的坑：**公元前数字越大，年代越早**。
所以前 268 在前 261 **之前**——他是先即位、几年后才打这场仗。别写反了。

考点关键句：阿育王是「同一个人身上的两段」——前半是不折不扣的征服者，
后半是把治理话语从「武力」换成「dhamma」的改革者。AP 考他，常常不只问「他做了什么」，
更问「怎么评价同一个人身上的征服与悔过」。

记忆锚：一个国王，一生最后一场大征服（羯陵伽）成了他转身的那一脚。`,
          en: `Ashoka's whole Lens is about him. I compress the man into one timeline, built
specifically to keep the BCE dates from flipping:

came to the throne around 268 BCE (third king), made war on Kalinga in his 8th regnal year,
around 261 BCE, turned to dhamma afterward, and died around 232 BCE.

Watch a trap AP loves to set: **the larger the BCE number, the earlier the year**. So 268 BCE
comes **before** 261 BCE, he took the throne first and fought this war years later. Don't flip them.

Key exam sentence: Ashoka is "two stretches in one person," the first half a conqueror through
and through, the second a reformer who swapped his governing language from "force" to "dhamma."
AP often tests him not just on "what he did" but on "how to judge the conquest and the remorse
in the same man."

Memory anchor: one king, whose last great conquest (Kalinga) became the very step on which he
turned around.`,
        },
      },
    },

    {
      id: 'kalinga-war-and-remorse',
      termCn: '羯陵伽之战与悔过的转向',
      termEn: 'The Kalinga War & the Remorse Turn',
      standardRef: ['CA HSS Grade 6 — Kalinga War', 'AP World — war & ideology', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ashoka',
        nodeIds: ['ash-n4', 'ash-n5', 'ash-n6'],
        xiaoweiNote: {
          cn: `三个 lens 都绕着这场仗，阿育王 Lens 第 4、5、6 节讲得最透，Kalinga 幸存者那一遍最戳人。

把事实地基钉死：约公元前 261 年，阿育王吞并东南海岸那块独立、富庶、靠海贸易的 Kalinga（羯陵伽）。
他赢了。代价（他自己刻下的数字）：约 **10 万人死**、约 **15 万人被掳流放**，战后还有数倍于此的人死去。
这是他一生最后一场大征服。

考点关键句：战后他说他「深深懊悔」（remorse），宣布从此追求的是 **dhamma 之胜**，不再是武力之胜。

老师反复纠正的**误解陷阱**：
❌「他后悔了，所以把 Kalinga 还回去了」
✅ 他**没有**归还 Kalinga，也**没有**放那 15 万人回家——他一边悔过，一边继续占着战利品。

我的对照锚（最难忘）：换到 Kalinga 幸存者那一遍，「10 万、15 万」对他不是数字，是父亲、母亲、兄弟。
同一组数字，加害者刻在石头上当忏悔，承受者听着却问：那我家人呢？`,
          en: `All three lenses circle this war; Ashoka's Lens Nodes 4-6 cover it most fully, and
the Kalinga survivor's pass hits hardest.

Nail the factual base: around 261 BCE Ashoka annexed Kalinga, the independent, wealthy,
sea-trading land on the southeast coast. He won. The cost (figures he carved himself): about
**100,000 dead**, about **150,000 carried off and deported**, with many times that number dying
afterward. This was the last great conquest of his life.

Key exam sentence: afterward he said he felt deep **remorse** and declared that from then on what
he sought was the **victory of dhamma**, no longer the victory of force.

A **misconception trap** my teacher kept correcting:
❌ "He regretted it, so he gave Kalinga back."
✅ He did **not** return Kalinga, and did **not** send the 150,000 home, he regretted and kept the
spoils at the same time.

My favorite contrast anchor: switch to the Kalinga survivor's pass, and "100,000, 150,000" are not
numbers to him but his father, mother, brother. Same figures, carved by the perpetrator as confession,
heard by the receiving end as the question: and what about my family?`,
        },
      },
    },

    {
      id: 'dhamma-not-buddhism',
      termCn: 'dhamma（达摩）不等于佛教',
      termEn: 'Dhamma Is Not Buddhism',
      standardRef: ['CA HSS Grade 6 — Ashoka\'s dhamma', 'AP World — ideology & empire', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'dhamma-official',
        nodeIds: ['do-n2', 'ash-n6'],
        xiaoweiNote: {
          cn: `达摩官 Lens 第 2 节专门拆这个误区，我觉得这是全 topic 最容易考错的一条。

**最大的坑：以为 dhamma 就是佛教。不对。**
✅ dhamma 是一套**跨教派**的公共做人准则：非暴力（ahimsa）、宽容、对各教派一视同仁、
敬长辈、善待穷人病人奴仆、克制自己的脾气和贪心。

阿育王本人确实偏向佛教、扶持佛教、修 stupa（佛塔）——但他推行的 dhamma 是刻意做成
「各教都能点头的最大公约数」。为什么？因为他的帝国大得吓人、信仰五花八门
（婆罗门、佛教、耆那教……），要推「大家都信佛」第二天就得为信仰打起来。
dhamma 就是把这一大盘人黏在一起的黏合剂。

考点关键句：dhamma = 公共伦理（针对所有人），不是某一个宗教；
阿育王扶持佛教 ≠ 帝国被佛教化。

记忆锚：佛教是「他自己信的」，dhamma 是「他要所有人都做的」。一个是私人信仰，一个是公共准则。`,
          en: `The dhamma-officer's Lens Node 2 unpacks this misconception specifically, and I
think it's the single most commonly mis-answered point in the whole topic.

**The biggest trap: thinking dhamma simply means Buddhism. It does not.**
✅ Dhamma is a **cross-sectarian** public code for living: non-violence (ahimsa), tolerance,
equal respect for every sect, honoring elders, kindness to the poor, the sick, and servants,
restraining one's own temper and greed.

Ashoka himself did lean toward Buddhism, supported it, and built stupas, but the dhamma he promoted
was deliberately made the "greatest common ground all the sects could nod to." Why? Because his
empire was frighteningly large and full of mixed faiths (Brahmin, Buddhist, Jain, and more); pushing
"let everyone be Buddhist" would have set off war over faith the next day. Dhamma was the binding that
held the whole crowd together.

Key exam sentence: dhamma = a public ethic (for everyone), not any one religion; Ashoka supporting
Buddhism is not the same as the empire being Buddhicized.

Memory anchor: Buddhism is "what he believed himself"; dhamma is "what he wanted everyone to practice."
One is private faith, the other a public code.`,
        },
      },
    },

    {
      id: 'rock-edict-xiii-primary-source',
      termCn: '法敕与 Rock Edict XIII（第一手史料）',
      termEn: 'The Edicts & Rock Edict XIII (Primary Source)',
      standardRef: ['CA HSS Grade 6 — Ashoka\'s edicts', 'AP World — primary sources', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'ashoka',
        nodeIds: ['ash-n5', 'ash-n6', 'ash-n7'],
        xiaoweiNote: {
          cn: `阿育王 Lens 第 5、6、7 节都在讲这个。这是这个 topic 最重要的「文件」，DBQ 高频。

什么是法敕（edict）？阿育王把他的政策和想法刻在帝国各地的**岩壁、石柱**上，
用当地百姓能懂的语言——这是他向整个帝国「广播」的方式，也是后人研究古印度最重要的第一手史料。

**Rock Edict XIII（第十三大石敕）**最关键。我把它的三层意思背成一组：
1. **数字**：即位第八年我征服 Kalinga，约 15 万人被掳、约 10 万人被杀、战后死的更多。
2. **悔过**：看着这一切，我深深懊悔；从此我追求 dhamma 之胜，不是武力之胜。
3. **刀还在**：同一块石头紧接着警告边境部族——王虽讲 dhamma，但**仍然有力量**，别逼我。

⚠️ 注意：法敕内容是**简化转述**，不是逐字原文（原文用 Prakrit 俗语、Brahmi 文字刻写，译本有多个）。
考试别编造引号里的「原话」。

DBQ 为什么爱用它？因为它是**加害者自己**留下的供词——既是忏悔，又是官方宣传（PR）。
怎么读一份「又真诚又有立场」的史料，正是 AP 要的训练。`,
          en: `Ashoka's Lens Nodes 5-7 are all about this. It's the most important "document" in this
topic, and a high-frequency DBQ source.

What is an edict? Ashoka had his policies and ideas carved onto **rock faces and pillars** across the
empire, in the languages ordinary people could read, his way of broadcasting to the whole empire, and
the single most important primary source for studying ancient India.

**Rock Edict XIII** matters most. I memorize its three layers as a set:
1. **The figures**: in my eighth regnal year I conquered Kalinga, about 150,000 carried off, about
   100,000 killed, more dying afterward.
2. **The remorse**: looking on all this, I deeply regret it; from now on I seek the victory of dhamma,
   not of force.
3. **The blade remains**: the same stone right after warns the border peoples, though the king deals in
   dhamma, he **still has power**, do not push him.

⚠️ Note: the edict content is a **simplified paraphrase**, not verbatim text (the originals are in Prakrit
and Brahmi script, with several translations). Don't invent quoted "exact words" on the exam.

Why do DBQs love it? Because it's the perpetrator's **own** confession, at once a confession and official
propaganda (PR). How to read a source that is both sincere and self-interested is exactly the skill AP wants.`,
        },
      },
    },

    {
      id: 'spread-of-buddhism',
      termCn: '佛教的扶持与外传',
      termEn: 'Ashoka\'s Patronage & the Spread of Buddhism',
      standardRef: ['CA HSS Grade 6 — spread of Buddhism', 'AP World — religion & cross-cultural exchange'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'ashoka', nodeId: 'ash-n7', context: '阿育王自述偏向佛教、扶持佛教、修建 stupa（佛塔）' },
          { lens: 'dhamma-official', nodeId: 'do-n2', context: '达摩官点明国王个人偏佛教、修 stupa，但推行的 dhamma 不是某一个教' },
        ],
      },
      standaloneText: {
        cn: `阿育王扶持佛教、推动它向外传播，是 CA HSS Grade 6 和 AP World 的常考点。
故事里只是顺带提到（阿育王修 stupa、个人偏向佛教），这里单独补完。

**阿育王为佛教做了什么：**
- 用王室力量**扶持**佛教：修建 **stupa（佛塔）**——一种供奉佛舍利、供人绕行礼拜的圆顶建筑。
- 据传他向帝国之外**派出传教使团**，把佛教带向南方的 **Sri Lanka（斯里兰卡）**等地。
- 他的支持，是佛教从印度一个地区性宗教，迈向更大范围传播的一个关键推力。

**但要分清两件事（这是考试最容易混的）：**
- 他**个人**信仰偏向佛教、并扶持佛教 —— 这是真的。
- 他向全帝国推行的 **dhamma 不是佛教**，而是跨教派的公共伦理（见「dhamma 不等于佛教」那张卡）。
- 所以 ❌「阿育王把整个帝国变成了佛教国家」是错的：帝国始终多教派并存，
  扶持佛教 ≠ 帝国被佛教化。

🔗 故事连接：阿育王 Lens 第 7 节里他亲口说自己偏向佛教、修 stupa；
达摩官 Lens 第 2 节专门点出「国王自己偏佛教，但他交给我推的 dhamma 不是某一个教」。`,
        en: `Ashoka's patronage of Buddhism and his push to spread it outward is a frequent point in
CA HSS Grade 6 and AP World. The story only mentions it in passing (Ashoka building stupas, leaning
toward Buddhism), so here's the full version.

**What Ashoka did for Buddhism:**
- He used royal power to **patronize** Buddhism, building **stupas**, domed monuments that enshrine
  relics and around which people walk in worship.
- He is said to have sent **missionary delegations** beyond the empire, carrying Buddhism south toward
  **Sri Lanka** and elsewhere.
- His support was a key push moving Buddhism from a regional Indian religion toward wider spread.

**But keep two things distinct (the most commonly confused exam point):**
- His **personal** faith leaned toward Buddhism and he supported it, that's true.
- The **dhamma** he promoted across the whole empire **is not Buddhism**, but a cross-sectarian public
  ethic (see the "dhamma is not Buddhism" card).
- So ❌ "Ashoka turned the whole empire into a Buddhist country" is wrong: the empire stayed multi-sect
  throughout, and supporting Buddhism is not the same as Buddhicizing the empire.

🔗 Story link: in Ashoka's Lens Node 7 he says himself that he leaned toward Buddhism and built stupas;
the dhamma-officer's Lens Node 2 specifically points out "the king himself leaned toward Buddhism, but
the dhamma he handed me to spread is not any one religion."`,
      },
      xiaoweiNote: {
        cn: `这条我一开始最容易写错，因为故事里没单独展开。老师说考试最爱挖的坑就是
「dhamma = 佛教」和「阿育王让帝国全信佛」。我的口诀：
**佛教是阿育王私人的信仰 + 对外传播（stupa、派使团去 Sri Lanka）；
dhamma 是对内全帝国的公共准则（跨教派）。** 两条分开记，别合成一条。`,
        en: `This one I most easily got wrong at first, because the story doesn't unpack it on its own.
Teacher said the exam's favorite traps are "dhamma = Buddhism" and "Ashoka made the empire all Buddhist."
My mnemonic: **Buddhism is Ashoka's private faith plus outward spread (stupas, missions to Sri Lanka);
dhamma is the inward, empire-wide public code (cross-sectarian).** Keep the two separate, don't merge them.`,
      },
    },

    {
      id: 'lion-capital-to-emblem',
      termCn: '狮子柱头与现代印度国徽',
      termEn: 'The Lion Capital → Modern India\'s Emblem',
      standardRef: ['CA HSS Grade 6 — Ashoka\'s legacy', 'AP World — continuity & legacy'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ashoka',
        nodeIds: ['ash-n9'],
        xiaoweiNote: {
          cn: `阿育王 Lens 第 9 节讲到了，连阿育王自己都说这是他做梦也想不到的事。

阿育王立的一根石柱顶上，有一个柱头——**四头背对背的狮子**，叫 **lion capital（狮子柱头）**。
两千多年后，1950 年独立后的**印度共和国**，选了它当**国徽**；柱头下方的法轮（Ashoka Chakra）
还进了印度国旗的正中央。

考点关键句：一个公元前 3 世纪靠武力起家、又靠悔过转身的古代国王的王徽，
被一个 20 世纪诞生的**民主国家**选作自己的象征。

这条最妙的地方在于它的反讽：阿育王费尽心思想用 dhamma 让帝国长久，结果帝国散了；
他没刻意要留的那块石头、那个柱头，反而活了两千多年。
我的记忆锚：他最想留下的（帝国）没留住，他随手刻下的（石头 + 狮子）留到了今天。`,
          en: `Ashoka's Lens Node 9 covers this, and even Ashoka says it's a thing he could never have
dreamed.

Atop one of the pillars Ashoka raised sat a capital, **four lions back to back**, the **lion capital**.
More than two thousand years later, in 1950, the newly independent **Republic of India** chose it as its
**state emblem**; the wheel beneath it (the Ashoka Chakra) even sits at the center of India's flag.

Key exam sentence: the royal emblem of a third-century-BCE king who rose by force and turned by remorse
was chosen by a **democratic** country born in the twentieth century as its own symbol.

The best part of this card is its irony: Ashoka took such pains to make his empire last through dhamma,
and the empire fell apart; the stone and capital he never set out to preserve outlasted two thousand years.
My memory anchor: what he most wanted to keep (the empire) he did not keep, and what he carved offhand
(stone plus lions) survived to today.`,
        },
      },
    },

    {
      id: 'administration-and-fragmentation',
      termCn: '帝国行政与身后的瓦解',
      termEn: 'Imperial Administration & Later Fragmentation',
      standardRef: ['CA HSS Grade 6 — empire & government', 'AP World — state-building & decline', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'dhamma-official',
        nodeIds: ['do-n3', 'do-n8', 'ash-n9'],
        xiaoweiNote: {
          cn: `这条横跨两个 lens：达摩官 Lens 第 3、8 节讲帝国怎么「管」，阿育王 Lens 第 9 节讲它怎么「散」。

**怎么管（行政）：** Maurya 是高度官僚化的**中央集权**帝国。从首都 Pataliputra（华氏城）出发，
阿育王派出新设的 **dhamma-mahamatta（达摩官）**——巡行几千公里，
调解纠纷、照顾弱者、监督官吏别贪别欺压百姓、促各教派和睦。
这是古代帝国少见的「把国王的良心制度化」的尝试。还有实打实的公共福利：
路边种树、掘井、设人畜医疗点、给死刑犯三天缓期上诉。

**怎么散（瓦解）：** 阿育王约公元前 232 年去世，死后**约 50 年**，Maurya 帝国就分裂瓦解了。

考点关键句（很反直觉，AP 爱考）：一套高尚的统治伦理（dhamma），
**救不了**一个结构上撑不住的庞大帝国。dhamma 让帝国一时和平，却没能让它长存。

记忆锚：阿育王活着时靠达摩官 + 福利 + dhamma 把帝国黏住；他一死，黏合剂没了，约 50 年就散了。`,
          en: `This card spans two lenses: the dhamma-officer's Lens Nodes 3 and 8 show how the empire was
"run," and Ashoka's Lens Node 9 shows how it "fell apart."

**How it was run (administration):** Maurya was a highly bureaucratic, **centralized** empire. From the
capital Pataliputra, Ashoka sent out the newly created **dhamma-mahamatta** officers, who traveled
thousands of miles to settle disputes, care for the weak, watch that officials did not take bribes or
bully the people, and promote concord among the sects, a rare ancient attempt to "institutionalize the
king's conscience." Plus concrete public welfare: planting roadside trees, digging wells, setting up
clinics for people and animals, and granting the condemned three days' stay to appeal.

**How it fell apart (fragmentation):** Ashoka died around 232 BCE, and **about 50 years** after his death
the Maurya empire split and collapsed.

Key exam sentence (counterintuitive, AP loves it): a noble governing ethic (dhamma) **could not save** an
empire that could not structurally hold. Dhamma brought temporary peace but did not make the empire last.

Memory anchor: while Ashoka lived, the dhamma-officers plus welfare plus dhamma held the empire together;
once he died, the binding was gone, and within about 50 years it came apart.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `阿育王在 Rock Edict XIII 上亲口刻下：他打 Kalinga 害死了约 10 万人、掳走了约 15 万人，
他「深深懊悔」。可同一块石头上，他也警告边境部族：他仍然有力量，别逼他动手；
而且他始终没把 Kalinga 还回去，也没放那 15 万人回家。

你觉得阿育王的悔过，应该被看成「真正的良心发现」，还是「高明的统治术」？
用至少两条具体证据支持你的判断。`,
      en: `On Rock Edict XIII Ashoka carved with his own hand that his war on Kalinga killed about 100,000
and carried off about 150,000, and that he "deeply regrets" it. Yet on the same stone he also warned the
border peoples that he still has power and not to push him; and he never gave Kalinga back, nor sent the
150,000 home.

Should Ashoka's remorse be seen as "a genuine awakening of conscience," or as "clever statecraft"? Support
your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边——这正是 §9 历史学家在争的事。
- 「真心」这边的证据：他主动把对自己**不利**的死亡数字刻下来（搞面子工程的国王不会承认害死 10 万人）；
  减杀生、修福利、让各教派和睦、给死刑犯上诉余地；法敕里那种沉重内疚的语气。
- 「统治术」这边的证据：刚血洗完一块地就改打「非暴力 + 宽容 + 福利」牌，恰是稳住多教派庞大帝国最划算的办法；
  他保留军队和死刑、警告边境仍有力量、没还 Kalinga——说明 dhamma 不是放弃权力，是权力换包装。
高分写法：承认两边都站得住（甚至可能**同时**是真的），再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer, AP scoring looks at your ability to **use evidence**, not which side you
pick, which is exactly what the historians in section 9 argue about.
- Evidence for "genuine": he chose to carve the death toll that counts **against** him (a king who only wanted
  a good image would never admit killing 100,000); he reduced killing, built welfare, made the sects live in
  concord, gave the condemned room to appeal; the heavy, guilty tone of the edicts.
- Evidence for "statecraft": switching to the "non-violence, tolerance, welfare" card right after blooding a
  land is exactly the most cost-effective way to steady a vast, multi-sect empire; he kept the army and the
  death penalty, warned the border he still had power, and did not return Kalinga, showing dhamma was not
  surrendering power but power in new packaging.
High-scoring move: acknowledge both sides stand (they may even be **both** true at once), then explain why you
lean one way, that's complexity.`,
      conceptsActivated: ['kalinga-war-and-remorse', 'rock-edict-xiii-primary-source'],
    },
    {
      id: 'q2',
      cn: `阿育王推行的 dhamma，是一套**跨教派**的公共伦理（非暴力、宽容、对各教派一视同仁、照顾百姓），
而**不是**佛教。他刻意把它做成「各教都能点头的最大公约数」，用来把一个信仰五花八门的庞大帝国黏在一起。

如果你是 AP 老师，要出一道题考「一个庞大多元的帝国，该用什么把不同的人黏在一起」，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `The dhamma Ashoka promoted was a **cross-sectarian** public ethic (non-violence, tolerance, equal
respect for every sect, care for the people), and **not** Buddhism. He deliberately made it the "greatest
common ground all the sects could nod to," to bind a vast empire of mixed faiths together.

If you were an AP teacher writing a question on "what should a vast, diverse empire use to bind different
people together," how would you phrase it? Write your question and explain what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**比较**，而不是只看一个例子。
你可以用 §8 的同时代对照来设计：同一年代，印度的阿育王用 **dhamma**（跨教派伦理 + 公共福利）统合帝国，
而同时代的中国（战国末、秦统一前夜）走的是**法度、郡县、文字与度量衡统一**这套路。
两套都是「如何把庞大多元的疆域捏成一个帝国」的不同答案，各有智慧也各有盲点（Rule 0：不分高下）。
你的题目可以让学生比较「用一套**伦理**黏 vs 用一套**制度/律法**黏」——哪种更能稳住多元？哪种更持久？
（提醒学生：讲 dhamma 的 Maurya 和讲法度的秦，最后都没能长久——这本身值得想。）`,
      hintEn: `Hint: a good DBQ usually forces students to **compare**, not just examine one case.
You could design it using the same-era contrast in section 8: in the same period, Ashoka in India bound his
empire with **dhamma** (a cross-sectarian ethic plus public welfare), while contemporaneous China (late
Warring States, on the eve of Qin's unification) went the route of **legal codes, commanderies, and the
unification of script and measures**. Both are different answers to "how to mold a vast, diverse realm into one
empire," each with its wisdom and its blind spots (Rule 0: rank neither above the other). Your question could have
students compare "binding with an **ethic** vs binding with **institutions/law**", which steadies diversity better?
Which lasts longer? (Remind students: dhamma-led Maurya and law-led Qin both failed to last, that itself is worth
thinking about.)`,
      conceptsActivated: ['dhamma-not-buddhism', 'administration-and-fragmentation'],
    },
    {
      id: 'q3',
      cn: `Rock Edict XIII 是历史上极罕见的史料：一个胜利者，亲手把自己造成的死亡刻进石头。
它既是阿育王的**忏悔**，也是他向整个帝国发布的**官方宣传（PR）**。
而那 10 万死者、15 万被掳的人，连一个名字都没留下——历史只替有权的人记下了他的悔过。

读一份「加害者自己写的、又真诚又有立场」的史料，你会怎么判断哪些该信、哪些要打问号？
用 Rock Edict XIII 里的一个具体内容来支持你的看法。`,
      en: `Rock Edict XIII is an extremely rare source: a victor who carved with his own hand the death he caused
into stone. It is at once Ashoka's **confession** and the **official propaganda (PR)** he issued to the whole
empire. Meanwhile the 100,000 dead and 150,000 carried off left not a single name, history recorded only the
remorse of the man with power.

Reading a source "written by the perpetrator himself, both sincere and self-interested," how would you judge what
to trust and what to question? Support your view with one specific element of Rock Edict XIII.`,
      hintCn: `提示：先分清这份史料的**两层属性**——它既是忏悔，又是 PR，两层**同时**为真，别只认一层。
可信之处：他承认了对自己不利的死亡数字（约 10 万死、约 15 万流放）——这种「自曝家丑」一般不会是编的。
要打问号之处：石头上没说要还 Kalinga、没说放人回家；同一块石头还警告边境「我仍有力量」——
说明这份「忏悔」也在服务他的统治合法性。
进阶（§8 史料训练）：想想**谁的声音被记下、谁的被抹掉**——Kalinga 幸存者那一遍提醒你，
你听到的几乎都是国王那一边的。AP 看的是你能不能既「不轻信他的忏悔」、又「不嘲讽他的忏悔」，
把判断钉在一条具体证据上（比如「即位第八年……约 10 万人被杀」这句数字，或者「王仍有力量」那句警告）。`,
      hintEn: `Hint: first separate the source's **two layers**, it is both confession and PR, and both are true at
once, don't accept only one. What's trustworthy: he admitted the death toll that counts against him (about 100,000
dead, about 150,000 deported), such "airing one's own dirty laundry" is rarely fabricated. What to question: the
stone never says he will return Kalinga or send people home; the same stone warns the border "I still have power,"
showing this "confession" also serves his legitimacy. Going deeper (the section 8 source training): think about
**whose voice was recorded and whose was erased**, the Kalinga survivor's pass reminds you that almost everything
you hear is from the king's side. AP wants you to "neither take his confession on faith nor mock it," pinning your
judgment to one concrete piece of evidence (say the figures in "in my eighth regnal year, about 100,000 were
killed," or the "the king still has power" warning).`,
      conceptsActivated: ['rock-edict-xiii-primary-source', 'kalinga-war-and-remorse'],
    },
  ],
};

export default notebook;
