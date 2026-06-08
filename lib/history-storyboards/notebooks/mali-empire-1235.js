// ─── 同伴笔记本架构 v1 · Mali Empire ──────────────────────────
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
// 课纲对齐：
//   - AP World History KC-1.4, KC-2.4
//   - California HSS 7.4, 7.4.4
//   - 覆盖率：故事约82%，notebook 补完至 ~95%
//
// schemaVersion: 1 · notebookVersion: mali-empire-1235-v1

export var notebook = {
  topicId: 'mali-empire-1235',
  topicNameCn: '马里帝国',
  topicNameEn: 'The Mali Empire',
  schemaVersion: 1,
  companion: {
    nameCn: '小 U',
    nameEn: 'Xiao U',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小 U 的预习笔记（学习脚手架，不剧透）───────
  preview: {
    cn: `老师今天说我们要学"马里帝国"——我连这个名字都第一次听到。

我以为非洲古代历史就是埃及金字塔那些，没想到14世纪西非还有这么大的帝国。

老师发了一张纸，上面写着这些名字和词：

松迪亚塔·凯塔 (Sundiata Keita)、曼萨·穆萨一世 (Mansa Musa)、
伊本·白图泰 (Ibn Battuta)、廷巴克图 (Timbuktu)

还有几个词：撒哈拉跨沙漠贸易 (trans-Saharan trade)、
麦加朝圣 (Hajj)、格里奥 (Griot，专门用嘴巴唱故事来保存历史的人)

老师说："这一章课纲考点比较多，要把人名、事件、贸易货物三块都记住。"

我先把这些名字和词记在这里，等下读三个故事，再回来对照，
看我能不能解释"马里帝国为什么这么有钱、这么出名、后来怎么了"。`,
    en: `Today my teacher told us we're learning the Mali Empire.
I'd never even heard that name before.

I thought African ancient history was all about Egyptian pyramids.
I had no idea there was such a powerful empire in West Africa in the 1300s.

My teacher gave us a sheet with these names and terms:

Sundiata Keita, Mansa Musa, Ibn Battuta, Timbuktu

Plus some terms: trans-Saharan trade, Hajj (the pilgrimage to Mecca that
every Muslim tries to make at least once), and Griot — a person whose
whole job is to memorize and sing a community's history out loud,
generation after generation.

Teacher said: "This chapter has a lot of testable material — you need
to remember names, events, AND what goods were traded."

Let me write these down now. After I read the three stories,
I'll come back and check whether I can explain
"why Mali was so rich, so famous, and what happened to it."`,
    keyTerms: [
      { cn: '撒哈拉跨沙漠贸易', en: 'trans-Saharan trade' },
      { cn: '麦加朝圣', en: 'Hajj' },
      { cn: '格里奥（口述历史人）', en: 'Griot (oral history keeper)' },
      { cn: '马里国王（"诸王之王"）', en: 'Mansa (King of Kings)' },
      { cn: '伊斯兰教在西非的传播', en: 'spread of Islam in West Africa' },
      { cn: '贸易枢纽', en: 'trade hub / entrepôt' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '曼萨·穆萨一世',
        nameEn: 'Mansa Musa',
        ipa: '/ˈmænsə ˈmuːsə/',
        roleCn: '马里帝国第九任国王，1324年麦加朝圣主角',
        roleEn: 'Ninth ruler of Mali Empire, led the legendary 1324 Hajj to Mecca',
        mustKnow: true,
        audioKey: 'mansa-musa',
      },
      {
        nameCn: '松迪亚塔·凯塔',
        nameEn: 'Sundiata Keita',
        ipa: '/ˌsʊndiˈɑːtə ˈkeɪtə/',
        roleCn: '马里帝国创立者，1235年基里纳战役击败 Sosso，建立帝国',
        roleEn: 'Founder of Mali Empire, defeated Sosso at Battle of Kirina (1235)',
        mustKnow: true,
        audioKey: 'sundiata-keita',
      },
      {
        nameCn: '伊本·白图泰',
        nameEn: 'Ibn Battuta',
        ipa: '/ˈɪbən bæˈtuːtə/',
        roleCn: '摩洛哥旅行家，1352-1353年到访马里帝国，留下重要文字记录',
        roleEn: 'Moroccan traveler who visited Mali (1352-1353) and wrote detailed accounts',
        mustKnow: true,
        audioKey: 'ibn-battuta',
      },
      {
        nameCn: '廷巴克图',
        nameEn: 'Timbuktu',
        ipa: '/ˌtɪmbʌkˈtuː/',
        roleCn: '马里帝国最重要的贸易与学术双中心城市',
        roleEn: 'Mali\'s leading city — simultaneously a trade hub and center of Islamic scholarship',
        mustKnow: true,
        audioKey: 'timbuktu',
      },
      {
        nameCn: '撒哈拉沙漠',
        nameEn: 'Sahara Desert',
        ipa: '/səˈhɑːrə/',
        roleCn: '马里帝国跨沙漠贸易的地理核心障碍与通道',
        roleEn: 'The geographic barrier and corridor of trans-Saharan trade',
        mustKnow: true,
        audioKey: 'sahara',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'mansa-musa-hajj',
      termCn: '曼萨穆萨 / 1324年麦加朝圣',
      termEn: 'Mansa Musa / Hajj of 1324',
      defCn: '曼萨穆萨是马里帝国第九任国王。1324年他带着六万人的队伍穿越撒哈拉沙漠去麦加朝圣，一路散尽黄金，让整个中东和欧洲第一次知道西非有多强大。',
      defEn: 'Mansa Musa was the ninth king of the Mali Empire. In 1324 he led a procession of 60,000 people across the Sahara Desert to Mecca, giving away so much gold that the Middle East and Europe finally realized how powerful West Africa truly was.',
      standardRef: ['AP World KC-2.4', 'CA HSS 7.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        nodeIds: ['mansa-musa-N1', 'mansa-musa-N4', 'mansa-musa-N7', 'mansa-musa-N10'],
        xiaoweiNote: {
          cn: `曼萨穆萨那条故事线讲得很详细。我看到那个场面就震惊了——
60,000人的队伍，80头骆驼，每头骆驼背约135公斤黄金，穿越撒哈拉沙漠走到埃及开罗。

最厉害的是：曼萨穆萨到了开罗，随手把黄金分给穷人、官员、学者——
结果开罗的金价下降了约12%，接下来约5-10年开罗经济受挫才慢慢恢复。
这在当时相当于一个人用财富搅动了整个中东市场。

他还拒绝向埃及马穆鲁克苏丹（Mamluk Sultan）跪拜——因为他也是同等级的君主。

**考点关键句**：1324年朝圣让欧洲绘图师第一次把"马里的黄金国王"画进地图，
直接改变了欧洲对非洲的认知。1375年加泰罗尼亚地图集（Catalan Atlas）
里就有曼萨穆萨手捧黄金球的插图。`,
          en: `The story about Mansa Musa covers this in detail. I was stunned reading that scene —
60,000 people, 80 camels, each carrying about 135 kg of gold, crossing the Sahara to Cairo.

The most astonishing part: when Mansa Musa arrived in Cairo, he gave out gold so freely
to the poor, officials, and scholars that Cairo's gold price fell by about 12% —
and the economy stayed depressed for roughly 5-10 years. One person's wealth disrupted the entire Middle Eastern market.

He also refused to bow before the Mamluk Sultan of Egypt — because he was an equal ruler.

**Key exam sentence**: The 1324 Hajj caused European mapmakers to draw "the golden king
of Mali" for the first time, fundamentally changing how Europe saw Africa. The 1375
Catalan Atlas includes an illustration of Mansa Musa holding a golden orb.`,
        },
      },
    },

    {
      id: 'timbuktu-trade-scholarship',
      termCn: '廷巴克图 / 贸易与学术双中心',
      termEn: 'Timbuktu / Trade and Scholarship Hub',
      defCn: '廷巴克图是马里帝国最重要的城市。它同时是一个贸易市场（买卖黄金和盐）和一个学术中心（桑科尔大学有成千上万的学者）。这两件事同时发生在同一座城市，在14世纪非常罕见。',
      defEn: 'Timbuktu was the most important city in the Mali Empire. It was a trading market (buying and selling gold and salt) AND a center of learning (the University of Sankore had thousands of scholars) — both happening in the same city at the same time, which was rare in the 1300s.',
      standardRef: ['AP World KC-2.4', 'CA HSS 7.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        nodeIds: ['aisha-N2', 'aisha-N5', 'aisha-N8', 'mansa-musa-N9'],
        xiaoweiNote: {
          cn: `阿伊莎那条故事线从一个普通女孩视角看廷巴克图——
我读到那里才意识到，这座城市同时做两件事：卖货，还有读书。

曼萨穆萨朝圣回来后，请了来自格拉纳达（Granada，今西班牙）的建筑师
伊斯哈克·萨希利（al-Sahili）重建廷巴克图，还建了津加里贝尔清真寺
（Djinguereber Mosque）——这座清真寺今天还在，是 UNESCO 世界遗产。

廷巴克图的桑科尔大学（University of Sankore）14世纪曼萨穆萨时期约有5,000-10,000名学者
（25,000是16世纪桑海帝国鼎盛期的峰值，不是14世纪），
抄写员每天复制书稿，那里的书籍比撒哈拉的黄金还值钱。

**考点关键句**：廷巴克图是撒哈拉贸易网络的南端枢纽，同时也是西非最重要的
伊斯兰学术中心——"贸易带来财富，财富带来学者，学者带来更多贸易"。`,
          en: `In Aisha's story we see Timbuktu through an ordinary girl's eyes —
reading it, I realized this city was doing two things at once: trading goods and studying books.

After Mansa Musa returned from his Hajj, he brought architect al-Sahili from Granada
(modern Spain) to rebuild Timbuktu, including the Djinguereber Mosque — that mosque
still stands today as a UNESCO World Heritage site.

Timbuktu's University of Sankore had roughly 5,000-10,000 scholars in the 14th century
(the 25,000 figure is the 16th-century Songhai-era peak, not Mansa Musa's time).
Scribes copied manuscripts daily, and the books there were worth more than Saharan gold.

**Key exam sentence**: Timbuktu was the southern anchor of the trans-Saharan trade network
and West Africa's most important center of Islamic scholarship — "trade brought wealth,
wealth attracted scholars, scholars brought more trade."`,
        },
      },
    },

    {
      id: 'ibn-battuta-mali-records',
      termCn: '伊本·白图泰 / 马里游记',
      termEn: 'Ibn Battuta / Travels in Mali',
      defCn: '伊本·白图泰是14世纪的摩洛哥旅行家。他1352-1353年到访马里帝国，把所见所闻写成《游记》(Rihla)——这是我们今天了解马里帝国最重要的第一手文字资料之一。',
      defEn: 'Ibn Battuta was a Moroccan traveler in the 1300s. He visited the Mali Empire in 1352-1353 and wrote down everything he saw in a book called the Rihla (travel account) — one of the most important firsthand written sources we have about the Mali Empire today.',
      standardRef: ['AP World KC-2.4', 'CA HSS 7.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['ibn-battuta-N1', 'ibn-battuta-N5', 'ibn-battuta-N9'],
        xiaoweiNote: {
          cn: `伊本·白图泰那条故事线就是讲他的。他1352-1353年到访马里帝国，
写下了历史上关于马里帝国最详细的第一手文字记录之一——《游记》（Rihla）。

他的记录两面都有：
① 他惊叹于马里的秩序——"没有不公正，旅人在这里比在任何地方都安全"
② 他对马里女性"不遮脸"感到震惊（因为他来自北非穆斯林传统，女性要遮面）

②值得注意——他的记录反映了他自己的偏见，不是客观事实。
马里 Mande 传统的女性地位和北非习俗不同，他看到的是"差异"，
但他用"不守规矩"去描述——这就叫旅行者偏见（traveler bias）。

**考点**：伊本·白图泰是马里帝国最重要的文字史料来源之一，
但史学家读他的记录要同时问："这是马里的真实，还是他眼中的马里？"`,
          en: `The story about Ibn Battuta is all about him. He visited the Mali Empire
in 1352-1353 and left one of the most detailed firsthand written records of Mali —
the Rihla (travel account).

His account cuts both ways:
① He marveled at Mali's order — "there is no injustice here; the traveler is
   safer here than anywhere"
② He was shocked that Malian women "went unveiled" (because he came from North African
   Muslim tradition where women covered their faces)

Point ② is worth paying attention to — his record reflects his own bias, not objective fact.
Mande women's status in Mali differed from North African customs. What he saw was
"difference," but he described it as "improper behavior." That's called traveler bias.

**Exam point**: Ibn Battuta is one of the most important written sources on the Mali Empire,
but historians reading him must also ask: "Is this Mali's reality, or Mali as he saw it?"`,
        },
      },
    },

    {
      id: 'trans-saharan-trade-islam',
      termCn: '伊斯兰教在马里的传播',
      termEn: 'Spread of Islam in Mali',
      defCn: '伊斯兰教通过撒哈拉贸易商人从北非传入西非。马里的统治者主动选择信伊斯兰教，不是因为被逼，而是因为信了之后就能加入庞大的穆斯林贸易网络，做生意更方便。',
      defEn: 'Islam spread into West Africa through Saharan trade merchants from North Africa. Mali\'s rulers chose to adopt Islam on their own — not because they were forced — but because becoming Muslim gave them access to the huge Muslim trade network and made doing business much easier.',
      standardRef: ['AP World KC-2.4', 'CA HSS 7.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        nodeIds: ['mansa-musa-N2', 'ibn-battuta-N3', 'aisha-N4'],
        xiaoweiNote: {
          cn: `三条故事线都提到了——伊斯兰教是贯穿整个马里帝国的主线。

怎么传来的：撒哈拉贸易商人带着伊斯兰教从北非往南走，
到达西非时，马里的统治者发现信伊斯兰教有实际好处——
可以在穆斯林贸易网络里被信任、做生意。

曼萨穆萨的朝圣（Hajj）是政治宣告：我是合法的穆斯林君主，
整个伊斯兰世界的贸易路线都应该经过我的土地。

**考点关键句**：马里帝国的伊斯兰化不是被迫的——是统治者主动选择，
因为伊斯兰教是撒哈拉贸易网络的"通用语言"（共同语言 + 共同法律体系）。

注意：普通 Mande 百姓（比如阿伊莎）往往把伊斯兰教和
当地传统宗教混合在一起信——不是非此即彼。`,
          en: `All three stories mention this — Islam is the throughline of the entire Mali Empire.

How it arrived: Saharan trade merchants carried Islam southward from North Africa.
When they reached West African rulers, Mali's leaders discovered a practical benefit
to adopting Islam — it bought trust and access inside the vast Muslim trade network.

Mansa Musa's Hajj was a political announcement: I am a legitimate Muslim ruler;
the entire Islamic world's trade routes should pass through my land.

**Key exam sentence**: Mali's Islamization was not forced — rulers actively chose it
because Islam was the "common language" of the trans-Saharan trade network
(shared language + shared legal framework).

Note: ordinary Mande people (like Aisha) often blended Islam with
local traditional religion — it was not an either/or conversion.`,
        },
      },
    },

    {
      id: 'sundiata-keita-mali-founding',
      termCn: '松迪亚塔·凯塔 / 马里帝国建立',
      termEn: 'Sundiata Keita / Founding of Mali Empire',
      defCn: '松迪亚塔·凯塔是马里帝国的创始人。1235年他在基里纳战役中打败了强大的苏苏王国，把整个西非萨赫勒地区统一在马里的旗帜下，建立了一个延续约200年的帝国。',
      defEn: 'Sundiata Keita is the founder of the Mali Empire. In 1235 he won the Battle of Kirina against the powerful Sosso Kingdom, uniting the West African Sahel region under Mali\'s rule and building an empire that lasted about 200 years.',
      standardRef: ['AP World KC-1.4', 'CA HSS 7.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'mansa-musa-N1', context: '曼萨穆萨在宫廷仪式上引用松迪亚塔的史诗作为合法性来源' },
        ],
      },
      standaloneText: {
        cn: `松迪亚塔·凯塔（Sundiata Keita，约1217-1255），马里帝国创始人。

**1235年的基里纳战役（Battle of Kirina）是马里帝国诞生的起点。**
松迪亚塔领导曼丁哥（Mandingo / Mande）人民，击败了西非强权苏苏王国
（Sosso Kingdom）的国王苏曼古鲁·坎特（Sumanguru Kante）。
苏苏王国本来是继承加纳帝国（Ghana Empire）地位的强权——
松迪亚塔打败它，就等于把整个西非萨赫勒（Sahel）地区的
政治霸权接了过来。

打完仗，松迪亚塔没有把不同部落变成奴役对象，而是建立了一个
由各部族共同参与的联盟帝国（confederacy），每个部落保留自治，
只向马里最高君主称臣纳贡。这是它能维持统一约200年的原因之一。

**格里奥（Griot）与松迪亚塔史诗**：
马里没有文字记录历史——他们用格里奥（Griot，口述历史传唱人）
来保存历史记忆。格里奥世世代代把《松迪亚塔史诗》（Epic of Sundiata）
口口相传，记录了松迪亚塔少年时是瘸腿的孩子，被驱逐流亡，
最后归来打败暴君的故事。

AP 考点：格里奥传统是非洲历史研究里的核心史料来源之一，
和书面文字史料同等重要——史学家怎么对待"口述历史"是一个考试常见考点。`,
        en: `Sundiata Keita (c. 1217-1255) was the founder of the Mali Empire.

**The Battle of Kirina in 1235 was the founding moment of the Mali Empire.**
Sundiata led the Mandingo (Mande) people and defeated the ruler of the Sosso Kingdom,
Sumanguru Kante. The Sosso Kingdom had been the dominant power in West Africa,
inheriting the position of the old Ghana Empire — defeating it meant inheriting
political control over the entire West African Sahel region.

After the battle, Sundiata did not enslave the defeated peoples. Instead, he built
a confederacy — an alliance empire where each tribe kept its own self-governance,
owing tribute and allegiance only to the supreme Mali ruler. This is one reason
the empire held together for about 200 years.

**Griot tradition and the Epic of Sundiata**:
Mali had no written records — they preserved historical memory through Griots
(oral historians and singers). Griots passed down the Epic of Sundiata generation
by generation: the story of how Sundiata was a lame child in his youth, exiled
from his home, and returned to defeat the tyrant.

AP exam point: The Griot tradition is one of the core sources for African historical
research, equal in importance to written records — how historians treat
"oral history" as evidence is a frequent exam topic.`,
      },
      xiaoweiNote: {
        cn: `这部分在故事里没有直接讲，但考试一定会考——特别是"格里奥"这个词。

我的记忆口诀：
- 时间：1235年基里纳战役（比曼萨穆萨的朝圣早89年）
- 松迪亚塔 = 马里版"建国皇帝"，曼萨穆萨 = 马里版"最有名的皇帝"
- 格里奥 = 非洲的"活书"（living library）

老师提示：如果题目问"马里帝国怎么保存历史"，答案是格里奥口述传统，不是文字。`,
        en: `The stories don't cover this directly, but it will definitely be on the test —
especially the word "Griot."

My mnemonics:
- Date: Battle of Kirina 1235 (89 years before Mansa Musa's Hajj)
- Sundiata = Mali's "founding emperor," Mansa Musa = Mali's "most famous emperor"
- Griot = Africa's "living library"

Teacher tip: if a question asks "how did Mali preserve history," the answer is
the Griot oral tradition, not written records.`,
      },
    },

    // ── 考点 NEW-A：库鲁坎富加宪章 / 曼登宪章（高频 DBQ 考点）──
    {
      id: 'kurukan-fuga-manden-charter',
      termCn: '库鲁坎富加宪章 / 曼登宪章（1235）',
      termEn: 'Kurukan Fuga / Manden Charter (1235)',
      defCn: '曼登宪章是松迪亚塔1235年建立帝国后颁布的法律。它是人类最早保护所有人权利的法律文件之一——保护普通人、女性、儿童和战俘，比同期欧洲的英国大宪章（Magna Carta）覆盖范围更广。',
      defEn: 'The Manden Charter is a law that Sundiata issued in 1235 after founding the empire. It is one of humanity\'s earliest documents to protect the rights of all people — ordinary citizens, women, children, and prisoners of war — with broader coverage than the Magna Carta that England issued around the same time.',
      standardRef: ['AP World KC-1.4', 'CA HSS 7.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'mansa-musa-N1', context: '曼萨穆萨引用松迪亚塔的合法性时曾提及宪章精神' },
        ],
      },
      standaloneText: {
        cn: `1235 年基里纳战役胜利后，松迪亚塔召集各部落首领在库鲁坎富加平原
颁布"曼登宪章"——人类最早的人权宪章之一。

**核心条款（简版）**：
保护人的尊严（不得奴役）、男女平等发言、儿童保护、
环境保护（树木/水源）、族群和平、战俘人道、皇帝受法律约束。

**与 Magna Carta 对比**——AP 常考比较角度：
- Magna Carta（1215）只保护贵族；
  Kurukan Fuga（1235）保护所有人
- Magna Carta 关注国王 vs 贵族；
  Kurukan Fuga 关注整个社会
- 结论：Kurukan Fuga 更普世——但以口传形式存在，
  长期被欧洲中心叙事忽视

2009 年 UNESCO 将其列入人类非物质文化遗产代表作名录。

**考点关键句**：Kurukan Fuga 1235 以 Griot 口传流传 800 年，
保护范围比 Magna Carta 更广，却长期被历史教科书忽视。`,
        en: `After the Battle of Kirina in 1235, Sundiata Keita summoned the chiefs of Mande
clans to an assembly on the plain of Kurukan Fuga, where he proclaimed what later
came to be known as the Manden Charter.

**Core provisions (7 clauses)**:
① Protection of human dignity — no person may be enslaved or humiliated
② Equal right of women to speak
③ Children may not be abused or abandoned
④ Protection of trees, water, and animals (environmental clause)
⑤ Different clans shall not attack one another — peaceful coexistence
⑥ Prisoners of war must be treated humanely and not killed
⑦ The emperor is bound by law and may not kill arbitrarily

**Comparison with Magna Carta (1215)** — a classic AP comparative angle:
- Timing: Magna Carta 1215, Kurukan Fuga 1235 (20 years later)
- Who it protected: Magna Carta protected only barons; Kurukan Fuga protected all people
- Focus: Magna Carta addressed king vs. nobles; Kurukan Fuga addressed the whole social order
- Conclusion: Kurukan Fuga is more universal in scope than Magna Carta —
  but because it was oral (not a parchment document), it was long ignored by
  Eurocentric historical narratives

In 2009, UNESCO inscribed Kurukan Fuga on the Representative List of Intangible
Cultural Heritage of Humanity, formally recognizing its place in world history.

**Key exam sentence**: Kurukan Fuga 1235 is one of humanity's earliest human rights charters,
preserved for 800 years through Griot oral tradition and confirmed by UNESCO in 2009.
Comparative angle: its protections are broader than Magna Carta's, yet it has long
been overlooked.`,
      },
      xiaoweiNote: {
        cn: `这张卡专门从松迪亚塔考点卡里独立出来——因为 AP 考试非常爱考
"比较两个不同文明的法律文件"这类题。

核心对比口诀：
- Magna Carta（1215）= 保护贵族 → 英国
- Kurukan Fuga（1235）= 保护所有人 → 西非马里

AP 最常见的陷阱题："哪个宪章更普世？"答案是 Kurukan Fuga，
不是大家熟知的 Magna Carta——这正是题目想考你的地方。

记忆锚：库鲁坎富加（Kurukan Fuga）= 当时那片平原的名字。
2009 年 UNESCO 列入非物质文化遗产 = 考试可引用的国际权威背书。`,
        en: `This card is pulled out of the Sundiata card specifically because AP tests love
"compare legal documents from two different civilizations."

Core comparison shortcut:
- Magna Carta (1215) = protects nobles → England
- Kurukan Fuga (1235) = protects everyone → West Africa, Mali

The most common AP trap question: "Which charter was more universal?"
Answer: Kurukan Fuga — not the famous Magna Carta. That's exactly the point
the question is testing.

Memory anchor: Kurukan Fuga = the name of the plain where it was proclaimed.
2009 UNESCO Intangible Heritage listing = internationally authorized citation for your essay.`,
      },
    },

    // ── 考点 NEW-B：加纳帝国（Ghana Empire，马里前身）──────────────
    {
      id: 'ghana-empire-predecessor',
      termCn: '加纳帝国（Ghana / Wagadou）/ 马里前身',
      termEn: 'Ghana Empire (Wagadou) / Mali Predecessor',
      defCn: '加纳帝国（本名 Wagadou）是西非最早的黄金贸易大帝国，存续约公元300年到1235年。马里帝国打败了加纳帝国的继承者，接过了整个撒哈拉黄金贸易网络，才变得那么富有。',
      defEn: 'The Ghana Empire (also called Wagadou) was West Africa\'s first great gold-trade empire, lasting from around 300 CE to 1235. The Mali Empire defeated Ghana\'s successor state and took over the entire trans-Saharan gold trade network — that is how Mali became so rich.',
      standardRef: ['AP World KC-2.4', 'CA HSS 7.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'mansa-musa-N1', context: '曼萨穆萨的财富继承了加纳帝国奠定的黄金贸易传统' },
        ],
      },
      standaloneText: {
        cn: `加纳帝国（Ghana Empire，本名 Wagadou）是西非最早的黄金贸易大帝国，
约公元 300-1235 年存续近千年，是马里帝国的直接前身。

**核心事实**：
- 位置：今毛里塔尼亚南部、马里西部（不是今天的加纳共和国——这个名字是1957年后殖民时代借用的，
  地图上古加纳在现加纳共和国以西约 800 公里）
- 首都：库姆比萨莱赫（Kumbi Saleh）
- 财富来源：垄断撒哈拉黄金贸易，对每驮黄金和进口盐双向征税
- 1076 年：Almoravid（北非柏柏尔穆斯林王朝）入侵，加纳受重创
- 1235 年：松迪亚塔战胜苏苏王国（Sosso，加纳后继），马里接管黄金贸易传统

**"帝国接力"框架**——AP 常考比较帝国角度：
加纳（c.300-1235）→ 马里（1235-约1400）→ 桑海（约1400-1591）
三代帝国均依托撒哈拉黄金贸易，逐代继承贸易路线与控制权。

**考点关键句**：马里帝国不是凭空出现的——它继承了加纳
近千年积累的撒哈拉贸易网络与黄金控制模式。`,
        en: `The Ghana Empire (known internally as Wagadou) was West Africa's first
major gold-trade empire, lasting roughly from 300 to 1235 CE — nearly a thousand years —
and the direct predecessor of the Mali Empire.

**Core facts**:
- Location: southern Mauritania and western Mali today (not modern Ghana — the name
  was borrowed in 1957 during decolonization, about 800 km east of ancient Ghana's territory on the map)
- Capital: Kumbi Saleh
- Wealth source: monopoly over trans-Saharan gold trade — Ghana's king taxed every load
  of gold passing through, and taxed incoming salt equally, controlling the full volume
  of the north-south exchange
- 1076: The Almoravid (North African Berber Muslim dynasty) invaded; Ghana was severely weakened
- 1235: Sundiata defeated the Sosso Kingdom (Ghana's successor state); Mali took over
  the gold trade tradition intact

**"Imperial Relay" exam framework**:
Ghana → Mali → Songhai covers roughly 300-1591 CE — about 1,300 years of successive
West African empires, each inheriting the prior generation's Saharan trade routes and
gold control. This is a classic AP World comparative framework for empire succession.

**Key exam sentence**: The Ghana Empire (c. 300-1235) was West Africa's first great empire
built on trans-Saharan gold trade. The Mali Empire did not emerge from nothing —
it inherited 900 years of accumulated trade networks and wealth-control patterns
from Ghana.`,
      },
      xiaoweiNote: {
        cn: `这是很多同学会搞混的点：今天的加纳共和国（Ghana Republic）
不等于古代的加纳帝国（Ghana Empire）——两个在地图上差了 800 公里！

"帝国接力"是 AP 世界史最爱考的框架之一：
**加纳（c.300-1235）→ 马里（1235-约1400）→ 桑海（约1400-1591）**

三个帝国都靠撒哈拉黄金贸易，都在西非萨赫勒地区——
每一代灭了上一代，但继承了上一代的贸易路线。

考试时如果题目问"马里帝国的财富从哪里来"，
最完整的答案是：继承加纳帝国建立的撒哈拉黄金贸易网络。`,
        en: `This is a common point of confusion: the modern Republic of Ghana is NOT the same
as the ancient Ghana Empire — they're about 800 km apart on the map!

The "Imperial Relay" is one of AP World History's favorite comparative frameworks:
**Ghana (c.300-1235) → Mali (1235-~1400) → Songhai (~1400-1591)**

All three empires relied on trans-Saharan gold trade in West Africa's Sahel region —
each generation defeated the previous one but inherited its trade routes.

If a test question asks "where did Mali's wealth come from," the most complete answer is:
inherited the trans-Saharan gold trade network established by the Ghana Empire.`,
      },
    },

    {
      id: 'trans-saharan-trade-routes',
      termCn: '撒哈拉跨沙漠贸易 / 黄金与盐',
      termEn: 'Trans-Saharan Trade / Gold and Salt',
      defCn: '撒哈拉跨沙漠贸易是把西非和北非连起来的商业大通道。西非的黄金往北卖，北非的盐往南卖——两样东西在对方那里都极度稀缺，所以价格高得吓人。马里帝国靠控制这条贸易路线变得非常富有。',
      defEn: 'Trans-Saharan trade was the great commercial highway connecting West Africa and North Africa. West African gold flowed north, and North African salt flowed south — each was extremely scarce on the other side, so prices were sky-high. The Mali Empire became very wealthy by controlling this trade route.',
      standardRef: ['AP World KC-2.4', 'CA HSS 7.4.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'mansa-musa-N3', context: '曼萨穆萨朝圣队伍的骆驼队规模体现了撒哈拉贸易的规模' },
          { nodeId: 'ibn-battuta-N4', context: '伊本·白图泰记录廷巴克图的黄金盐巴市场' },
        ],
      },
      standaloneText: {
        cn: `撒哈拉跨沙漠贸易（Trans-Saharan Trade）是连接西非与北非、
进而联通地中海世界的商业大动脉，在大约公元700-1500年间达到顶峰。

**核心货物：双向流通，各取所需。**

从南往北走：黄金（gold）。西非撒哈拉以南地区（特别是今天的几内亚、塞内加尔）
盛产黄金，而北非和中东极度缺金，黄金在北方的价格是南方的数倍。
马里帝国控制了黄金的生产地和集散地，这是它财富的根本来源。

从北往南走：盐（salt）。撒哈拉沙漠的塔加扎（Taghaza）盐矿产盐，
而西非内陆极度缺盐（盐是人类维持生命的必需品，也是食物防腐的唯一方法）。
有记录显示，黄金和盐在某些地区的交换是等重交换——一磅盐换一磅黄金。

**贸易枢纽城市（三个必记）**：
- 廷巴克图（Timbuktu）：尼日尔河大弯处，黄金/盐/书籍三合一市场
- 杰内（Djenne / Djenné）：尼日尔河内陆三角洲，稻米 + 货物集散
- 瓦拉塔（Walata）：撒哈拉南缘的"沙漠门户"城市

**关键技术：骆驼（camel）。**
骆驼约在公元300年后开始大规模用于撒哈拉商队，
改变了整个贸易网络——骆驼能两周不喝水，驼载250公斤货物，
让穿越撒哈拉从几乎不可能变成了可操作的商业路线。

AP 考点：撒哈拉贸易解释了马里帝国的财富来源，
也解释了伊斯兰教为什么能随商队深入西非内陆——
商人带来货物，也带来宗教、语言和文化。`,
        en: `Trans-Saharan trade was the major commercial artery connecting West Africa
to North Africa and the Mediterranean world, reaching its peak roughly between
700-1500 CE.

**Core goods: a two-way flow, each side getting what it lacked.**

Southbound to North: gold. Sub-Saharan West Africa (especially today's Guinea
and Senegal) was rich in gold, while North Africa and the Middle East desperately
needed it. Gold was worth several times more in the north than in the south.
The Mali Empire controlled both the gold-producing regions and the distribution hubs —
that was the foundation of its wealth.

Northbound to South: salt. The Sahara's Taghaza salt mines produced salt, while
West Africa's interior was salt-starved. Salt is essential for human survival
and the only method of food preservation available at the time. Records show that in some regions
gold and salt were exchanged weight-for-weight — a pound of salt for a pound of gold.

**Three trade hub cities to memorize**:
- Timbuktu: at the great bend of the Niger River — gold, salt, and books all traded here
- Djenne (Djenné): Niger River inland delta — rice and goods distribution
- Walata: southern edge of the Sahara — the "desert gateway" city

**Key technology: the camel.**
Camels began large-scale use in Saharan caravans around 300 CE onward,
transforming the entire trade network. A camel can go two weeks without water
and carry 250 kg of cargo, making Sahara crossings shift from nearly impossible
to a viable commercial route.

AP exam point: Trans-Saharan trade explains the source of Mali's wealth,
and also why Islam could spread deep into West Africa's interior —
merchants carried goods, and with them religion, language, and culture.`,
      },
      xiaoweiNote: {
        cn: `这是 CA HSS 7.4.4 必考内容，选择题和简答都会考。

记忆口诀：
- 南→北：黄金（Gold goes North）
- 北→南：盐（Salt goes South）
- 骆驼 = 撒哈拉的"船"（Ships of the Desert）

三座城市：廷巴克图-杰内-瓦拉塔，按重要程度记前两个就够了。
老师说廷巴克图是必考，杰内有时考，瓦拉塔主要是 AP 级别的题目。`,
        en: `This is required content for CA HSS 7.4.4 — tested in both multiple choice and short answer.

Mnemonics:
- South → North: Gold (Gold goes North)
- North → South: Salt (Salt goes South)
- Camel = "Ships of the Desert" (that's actually what historians call them)

Three cities: Timbuktu-Djenne-Walata. Memorize the first two for most tests.
Teacher said Timbuktu is guaranteed, Djenne sometimes appears, Walata is mainly AP-level.`,
      },
    },

    {
      id: 'women-in-mali',
      termCn: '马里帝国女性地位',
      termEn: 'Women\'s Status in the Mali Empire',
      defCn: '马里帝国 Mande 传统里的女性比同时期北非或中东女性有更多自由——她们不戴面纱、可以做生意、在家庭里地位比较高。但这不等于完全性别平等，最高政治权力仍然在男性手中。',
      defEn: 'Women in the Mali Empire\'s Mande tradition had more freedom than women in North Africa or the Middle East at the same time — they went unveiled, could do business, and held higher status in the family. But this was not full gender equality; the highest political power still belonged to men.',
      standardRef: ['AP World KC-2.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['aisha-N1', 'aisha-N6', 'aisha-N10'],
        xiaoweiNote: {
          cn: `阿伊莎的故事线就是在讲这个。

马里帝国（Mande 传统）的女性和北非或中东女性不同：
- 她们不戴面纱（unveiled），可以和男性自由交谈
- 她们可以在市场上做生意
- 她们在家庭里有比较强的地位（母系传承在 Mande 文化里很重要）

伊本·白图泰 1352 年看到这一切，写在他的游记里表示"震惊"——
他觉得这不符合伊斯兰习俗。但他的震惊反映的是他自己的文化偏见，
不是"马里女性做错了什么"。

**考点关键句**：同一件事（女性不遮脸），在 Mande 文化里是正常的，
在伊本·白图泰的北非参照系里是"失礼的"——
这说明旅行文献（travel writing）必须放回作者的文化背景才能读懂。

注意：女性在马里帝国有相对自由，但这不等于性别平等——
政治权力和最高权威仍然是男性的领域。`,
          en: `Aisha's story is entirely about this.

Women in the Mali Empire (Mande tradition) were different from women in North Africa
or the Middle East:
- They went unveiled and could speak freely with men
- They could conduct business in the market
- They held stronger family status (matrilineal inheritance was important in Mande culture)

Ibn Battuta saw all this in 1352 and wrote in his account that he was "shocked" —
he felt it violated Islamic custom. But his shock reflects his own cultural bias,
not "Malian women doing something wrong."

**Key exam sentence**: The same practice (women not veiling) was normal in Mande culture
but "improper" in Ibn Battuta's North African frame of reference — this shows that
travel writing must be read in the context of the author's own cultural background.

Note: women in Mali had relative freedom, but that's not the same as
gender equality — political power and supreme authority remained male domains.`,
        },
      },
    },

    {
      id: 'mali-empire-decline',
      termCn: '马里帝国的衰落',
      termEn: 'Decline of the Mali Empire',
      defCn: '马里帝国全盛期约在1235-1400年。之后它因为三件事同时发生而衰落：王子们内战抢王位、东边桑海帝国崛起抢地盘、西非海岸的葡萄牙贸易站开始分走内陆贸易路线的生意。',
      defEn: 'The Mali Empire was at its peak roughly from 1235 to 1400. After that it declined because three things happened at the same time: princes fought each other in civil wars over the throne, the Songhai Empire rose in the east and took territory, and Portuguese trading posts along the West African coast began drawing trade away from inland routes.',
      standardRef: ['AP World KC-1.4', 'CA HSS 7.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['aisha-N9', 'aisha-N12'],
        xiaoweiNote: {
          cn: `阿伊莎那条故事线提到了她那个年代（约1413-1419年）马里帝国
已经开始走下坡——边境有桑海（Songhai）帝国的崛起，
宫廷内部有继承人争夺。

马里帝国衰落的几个原因（考试常见）：
① 继承人内战（internal succession conflicts）：每次国王死，各个儿子抢王位
② 桑海帝国（Songhai Empire）崛起：约1400年后，廷巴克图东边的桑海人
   开始蚕食马里领土，最终1468年占领廷巴克图
③ 贸易路线转移：15世纪中后期葡萄牙人开始沿西非海岸建立贸易站，
   部分撒哈拉陆路贸易开始转向海路，削弱了内陆帝国的收入

**考点关键句**：马里帝国全盛约在1235-1400年（约165年），
之后被桑海帝国（Songhai Empire）取代——
这三个帝国（加纳→马里→桑海）是西非史的"帝国接力"，考试常见考点。`,
          en: `Aisha's story mentions that in her era (c. 1413-1419)
the Mali Empire was already declining — the Songhai Empire was rising on the borders,
and succession conflicts were tearing the court apart.

Common exam causes of Mali's decline:
① Internal succession conflicts: every time a king died, his sons fought over the throne
② Songhai Empire rising: after about 1400, the Songhai people east of Timbuktu
   began encroaching on Mali's territory, finally capturing Timbuktu in 1468
③ Trade route shift: from the mid-1400s onward, Portuguese explorers began building
   trading posts along West Africa's coast; some Saharan overland trade shifted to sea routes,
   cutting into the inland empire's revenues

**Key exam sentence**: Mali's peak was roughly 1235-1400 (~165 years),
then it was replaced by the Songhai Empire — these three empires (Ghana → Mali → Songhai)
form West Africa's "imperial relay," a frequent exam topic.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `曼萨穆萨1324年朝圣时，随行队伍的黄金使开罗的金价下降了约12%，
这件事让欧洲绘图师把"马里黄金国王"画进了世界地图——
一次无心之举，直接改变了欧洲对非洲的想象，
甚至可能提前埋下了欧洲列强后来"寻找黄金"来到非洲的动机。

你怎么看：一个人的"朝圣"（宗教行为）怎么会引发"地缘政治后果"（地图改写 + 欧洲野心）？
如果曼萨穆萨当时选择低调出行，历史会不同吗？`,
      en: `In 1324, Mansa Musa's Hajj procession caused Cairo's gold price to fall by about 12%,
and European mapmakers put a "golden king of Mali" on their world maps for the first time.
One unintended act directly reshaped European imagination of Africa —
and may have planted early seeds of the European ambitions that later brought them to Africa
searching for gold.

How do you see it: how can a person's "pilgrimage" (a religious act) produce
"geopolitical consequences" (maps redrawn, European ambitions awakened)?
If Mansa Musa had chosen to travel quietly, would history have been different?`,
      hintCn: `提示：可以从两个角度想——
① 朝圣的目的是宗教，不是外交，但展示财富是马里王权合法性的一部分——
    他可能既是在"朝圣"，也是在"宣示国力"；
② 即使他低调出行，欧洲人迟早也会知道西非有黄金——
    只是时间问题，不是"会不会发现"的问题。

进阶思考："无心之举改变历史"在历史上还有哪些例子？
（提示：1914年Franz Ferdinand被刺杀是否真的是偶然？）`,
      hintEn: `Hint: think from two angles —
① The pilgrimage's purpose was religious, not diplomatic, but displaying wealth was
    part of Mali royal legitimacy — Mansa Musa may have been simultaneously "on pilgrimage"
    AND "projecting power";
② Even if he had traveled quietly, Europeans would have learned about West African gold
    eventually — the question was when, not whether.

Going deeper: what are other examples in history of "unintended acts changing history"?
(Hint: was the 1914 assassination of Franz Ferdinand truly a random accident, or inevitable?)`,
      conceptsActivated: ['mansa-musa-hajj', 'trans-saharan-trade-routes'],
    },
    {
      id: 'q2',
      cn: `伊本·白图泰到了马里，看到女性"不遮脸、可以和男性自由交谈"，
他在游记里写下了"震惊"——觉得这不符合他从北非带来的伊斯兰习俗。

问题是：这到底是谁的"不正常"？
伊本·白图泰的记录告诉了我们马里的什么，又遮蔽了什么？
旅行游记作为历史文献，有什么根本局限？`,
      en: `When Ibn Battuta arrived in Mali, he saw women "unveiled and speaking freely with men."
He wrote in his travel account that he was "shocked" — it violated the Islamic customs
he had brought from North Africa.

The question is: whose "abnormal" is this?
What does Ibn Battuta's record tell us about Mali — and what does it hide?
What are the fundamental limits of travel writing as historical evidence?`,
      hintCn: `提示：史学家把这类问题叫"史料批判"——读任何历史文献，
要同时问：
- 作者是谁？他来自哪里，有什么偏见？
- 他为什么写这篇东西？给谁看？
- 他没写的是什么？（没写的，也是一种证据）

伊本·白图泰的案例告诉我们：他看到的是Mande女性的"自由度"，
但他用"震惊"描述——这说明旅行文献是"双重镜"：
它照出了被观察的地方，也照出了观察者自己的文化假设。

进阶思考：今天的游客、记者、纪录片导演在观察外国文化时，
会不会犯一样的错误？有什么方法可以减少这种偏见？`,
      hintEn: `Hint: historians call this type of analysis "source criticism" — reading any historical
document while simultaneously asking:
- Who is the author? Where did they come from? What biases do they carry?
- Why did they write this? For whom?
- What did they NOT write? (What's missing is also evidence.)

Ibn Battuta's case shows us: he observed Mande women's relative freedom,
but described it through "shock" — this makes travel writing a "double mirror":
it reflects the place being observed AND reflects the observer's own cultural assumptions.

Going deeper: do today's tourists, journalists, and documentary filmmakers make the same
mistakes when observing foreign cultures? What methods might reduce such bias?`,
      conceptsActivated: ['ibn-battuta-mali-records', 'women-in-mali'],
    },
    {
      id: 'q3',
      cn: `廷巴克图在14世纪同时是一个贸易中心（黄金、盐、货物的集散地）
和一个学术中心（桑科尔大学、约5,000-10,000名学者（14世纪）、数以万计的手稿）。

在今天的世界里，"贸易"和"学术"还能像廷巴克图那样共存吗？
还是说它们越来越像两个分开的世界？
你认为让二者共存的关键条件是什么？`,
      en: `In the 14th century, Timbuktu was simultaneously a trade center
(hub for gold, salt, and goods) and an academic center
(University of Sankore, about 5,000-10,000 scholars in the 14th century, tens of thousands of manuscripts).

In today's world, can "trade" and "scholarship" coexist the way they did in Timbuktu?
Or are they becoming more and more separate worlds?
What do you think are the key conditions that allow both to exist together?`,
      hintCn: `提示：廷巴克图的"贸易+学术"共存不是偶然——
富裕的商人有动机资助学者和清真寺（这提升了城市声誉，带来更多贸易）；
学者需要贸易带来的财富作为支撑（图书馆、抄写员、学生食宿）。
二者是互相依存的正循环。

今天的对比例子：
- 硅谷：科技公司（贸易）和斯坦福大学（学术）相互喂养
- 但也有反例：很多大学城的学者和当地商业几乎没有连接

进阶思考：如果一个城市变得非常商业化，学术会被"挤出"吗？
你身边有没有这样的案例？`,
      hintEn: `Hint: Timbuktu's "trade + scholarship" coexistence was not accidental —
wealthy merchants had incentive to fund scholars and mosques (this enhanced the city's
reputation, attracting more trade); scholars needed the wealth that trade brought
(libraries, scribes, room and board for students). The two formed a mutually dependent
positive cycle.

Modern comparison examples:
- Silicon Valley: tech companies (trade) and Stanford University (scholarship)
  feed each other
- But counterexamples exist: many university towns have almost no connection
  between scholars and local commerce

Going deeper: if a city becomes highly commercialized, does scholarship get "priced out"?
Can you think of examples near you?`,
      conceptsActivated: ['timbuktu-trade-scholarship', 'trans-saharan-trade-routes', 'mansa-musa-hajj'],
    },
  ],
};

export default notebook;
