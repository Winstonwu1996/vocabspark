// ─── 同伴笔记本架构 v1 · Decolonization & the Non-Aligned World ───────
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
//   - storyboard 提供情感锚点（Churchill 帝国主义面 / Ralph Bunche 调停 / 旁遮普分治难民）
//   - notebook 提供考点闭环：补 AP World Unit 8 必考的 Gandhi/satyagraha、
//     非洲独立（Ghana/Nkrumah）、Algerian War、谈判式 vs 武装去殖民、Pan-Africanism
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History Modern Unit 8（CED 8.5-8.8 Decolonization / Newly Independent States / Non-Aligned Movement）
//   - California HSS Grade 10（二战后世界 / 民族独立运动）
//
// 事实对账：本文件所有硬史实对齐 decolonization-1960-factledger.md（已核实版）：
//   - 孟加拉饥荒用区间「数十万到约 300 万，取决于是否计入间接死亡」（不固定单一数字）
//   - Ralph Bunche 1949 拒绝杜鲁门请他当助理国务卿（因华盛顿当时实行 Jim Crow 种族隔离），
//     非"橄榄球队高管"（账本 #24 嫁接错误，已避开）
//   - Churchill 骂 Gandhi"半裸的苦行僧"是 1931 公开评论，不写"私下"
//   - 分治死亡数用区间 hedge
//
// Rule 0 中性：去殖民化既是被压迫民族真正的解放，也是一场充满暴力代价的混乱撤退——两者同体，不下结论。
// 文化对应硬禁：非中国史，绝不用中国特定概念词（玉玺/翰林/宰相/朕/圣旨）。
//
// schemaVersion: 1 · notebookVersion: decolonization-1960-v1

export var notebook = {
  topicId: 'decolonization-1960',
  topicNameCn: '去殖民化与不结盟',
  topicNameEn: 'Decolonization & the Non-Aligned World',
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
    cn: `这单元学的是去殖民化（Decolonization，大概 1947-1975）——几百年的欧洲殖民帝国一个接一个散掉，
几十个新国家诞生。AP World 把它放在 Unit 8，老师说这是必考单元。

她给了一张纸，上面是这些名字：

Gandhi（甘地）、Kwame Nkrumah（恩克鲁玛）、Winston Churchill（丘吉尔）、
Ralph Bunche（拉尔夫·本奇）

还有几个词：partition（分治）、satyagraha（非暴力不合作）、
Non-Aligned Movement（不结盟运动）、Pan-Africanism（泛非主义）、
negotiated vs armed independence（谈判式 vs 武装独立）。

我先记下来，等下读三个故事——丘吉尔（守帝国的人）、Ralph Bunche（调停的人）、
一个旁遮普分治难民（承受代价的人）——读完再回来对照这张单子。

老师说了一句我写在第一页的话："去殖民化常被讲成'自由的胜利'。
但你要会问：这场自由，是谁赢的？又是谁付的账？"`,
    en: `This unit is about Decolonization (roughly 1947-1975) — centuries of European
colonial empires breaking apart one after another, with dozens of new nations born.
AP World puts it in Unit 8, and my teacher says it's a must-test unit.

She gave us a sheet with these names:

Gandhi, Kwame Nkrumah, Winston Churchill, Ralph Bunche

Plus some terms: partition, satyagraha (nonviolent resistance),
Non-Aligned Movement, Pan-Africanism,
negotiated vs armed independence.

Let me write these down. After I read the three stories — Churchill (the man who
guarded the empire), Ralph Bunche (the man who mediated), and a Punjab Partition
refugee (the man who bore the cost) — I'll come back and check against this list.

Teacher said one line I wrote on my first page: "Decolonization is usually told as
'the victory of freedom.' But you have to learn to ask: whose victory was it?
And who paid the bill?"`,
    keyTerms: [
      { cn: '去殖民化', en: 'decolonization' },
      { cn: '分治', en: 'partition' },
      { cn: '非暴力不合作', en: 'satyagraha / nonviolent resistance' },
      { cn: '不结盟运动', en: 'Non-Aligned Movement' },
      { cn: '泛非主义', en: 'Pan-Africanism' },
      { cn: '谈判式独立 vs 武装独立', en: 'negotiated vs armed independence' },
      { cn: '新殖民主义（经济依附）', en: 'neocolonialism (economic dependence)' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '莫罕达斯·甘地',
        nameEn: 'Mohandas Gandhi',
        ipa: '/ˈɡɑːndi/',
        roleCn: '印度独立运动领袖，非暴力不合作（satyagraha）的代表人物',
        roleEn: 'Leader of Indian independence, icon of nonviolent resistance (satyagraha)',
        mustKnow: true,
        audioKey: 'gandhi',
      },
      {
        nameCn: '克瓦米·恩克鲁玛',
        nameEn: 'Kwame Nkrumah',
        ipa: '/ˈkwɑːmi ɛnˈkruːmə/',
        roleCn: '加纳首任领导人，1957 撒哈拉以南非洲第一个独立国家，泛非主义旗手',
        roleEn: 'First leader of Ghana (1957, first independent sub-Saharan nation), champion of Pan-Africanism',
        mustKnow: true,
        audioKey: 'kwame-nkrumah',
      },
      {
        nameCn: '温斯顿·丘吉尔',
        nameEn: 'Winston Churchill',
        ipa: '/ˈwɪnstən ˈtʃɜːrtʃɪl/',
        roleCn: '英国首相，反法西斯英雄，同时是顽固的帝国主义者',
        roleEn: 'British PM, anti-fascist hero and at the same time a die-hard imperialist',
        mustKnow: true,
        audioKey: 'winston-churchill',
      },
      {
        nameCn: '拉尔夫·本奇',
        nameEn: 'Ralph Bunche',
        ipa: '/rælf bʌntʃ/',
        roleCn: '非裔美国外交官，联合国调停员，1950 首位非裔诺贝尔和平奖得主',
        roleEn: 'African-American diplomat, UN mediator, first person of African descent to win the Nobel Peace Prize (1950)',
        mustKnow: true,
        audioKey: 'ralph-bunche',
      },
      {
        nameCn: '贾瓦哈拉尔·尼赫鲁',
        nameEn: 'Jawaharlal Nehru',
        ipa: '/dʒəˈwɑːhərlɑːl ˈneɪruː/',
        roleCn: '印度首任总理，不结盟运动主要发起人之一',
        roleEn: 'First PM of India, a key founder of the Non-Aligned Movement',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '西里尔·拉德克利夫',
        nameEn: 'Cyril Radcliffe',
        ipa: '/ˈsɪrəl ˈrædklɪf/',
        roleCn: '从没来过印度、用约 5 周画出印巴国境线的英国律师',
        roleEn: 'British lawyer who drew the India-Pakistan border in about 5 weeks, having never been to India',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'indian-independence-partition-1947',
      termCn: '印度独立与印巴分治 1947',
      termEn: 'Indian Independence & the Partition of India 1947',
      standardRef: ['AP World Modern Unit 8.5', 'CA HSS 10.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'partition-refugee-receiving-end',
        nodeIds: ['refugee-n3', 'refugee-n4', 'refugee-n5', 'refugee-n8'],
        xiaoweiNote: {
          cn: `这个我整条线读过——分治难民那一遍就是讲这个。重点：

1947 年英国从印度撤走，但走之前把印度切成两国：印度（印度教为主）+ 巴基斯坦（伊斯兰教为主）。
这就叫 Partition（分治）。穆斯林领袖怕在印度教占多数的国家被边缘化，要求单独建国。

那条国境线交给一个叫 Cyril Radcliffe 的英国律师画——他接活前从没来过印度，
只给了约 5 周，对着地图画完，走向还拖到独立日（8 月 15 日）之后才公布。
很多人是"独立之后"才发现，自己家被划到了"另一个国家"那边。

后果：约 1500 万人上路逃命（两股人流迎面相遇互相砍杀），死亡人数学界估计在
几十万到一百多万之间（争议很大，所以写区间，别写一个确数）。

考点关键句：印巴分治证明——独立的第一个礼物，对很多普通人不是自由，是逃命、是邻居变仇人。
"自由的胜利"和"普通人的代价"，是同一年发生的两件事。`,
          en: `I read this whole lens — the Partition refugee pass is exactly about this. Key points:

In 1947 Britain withdrew from India, but before leaving cut India into two countries:
India (mostly Hindu) + Pakistan (mostly Muslim). This is called Partition. Muslim leaders
feared being marginalized in a Hindu-majority state and demanded a separate nation.

The border was drawn by a British lawyer named Cyril Radcliffe — he had never been to
India before the job, was given about 5 weeks, drew it off a map, and the exact line
wasn't announced until after independence day (August 15). Many people learned only
"after independence" that their home had been drawn onto "the other country's" side.

The aftermath: about 15 million people fled (two streams meeting head-on, cutting each
other down), with deaths estimated by scholars somewhere between several hundred thousand
and over a million (heavily disputed — so write a range, not one fixed number).

Key exam sentence: Partition proves that independence's first gift, for many ordinary
people, was not freedom but flight and neighbors turned into enemies. "The victory of
freedom" and "the cost to ordinary people" were two things that happened the same year.`,
        },
      },
    },

    {
      id: 'gandhi-satyagraha',
      termCn: '甘地 / 非暴力不合作（satyagraha）',
      termEn: 'Gandhi / Nonviolent Resistance (satyagraha)',
      standardRef: ['AP World Modern Unit 8.5', 'CA HSS 10.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'winston-churchill', nodeId: 'churchill-n5', context: 'Gandhi 靠绝食、不合作、几亿人抵制英货把帝国逼到墙角；Churchill 骂他"半裸的苦行僧"' },
        ],
      },
      standaloneText: {
        cn: `Mohandas Gandhi（莫罕达斯·甘地，1869-1948），印度独立运动最有名的领袖。
人们常称他 "Mahatma"（圣雄），意思是"伟大的灵魂"。

他的核心方法叫 **satyagraha（非暴力不合作）**——直译是"坚持真理"。
意思是：不用暴力，而是用大规模的、有纪律的"不配合"来对抗一个比你强得多的统治者。

具体怎么做？
- **不合作（non-cooperation）**：拒绝在英国的政府、法庭、学校里配合。
- **抵制英货（boycott）**：几亿印度人不买英国布，自己纺自己织（土布运动）。
- **公民不服从（civil disobedience）**：故意违反不公正的法律，然后甘愿被抓。
  最有名的是 1930 年的"食盐进军"（Salt March）——英国规定盐由政府专卖、要交盐税，
  甘地带着人步行几百公里走到海边，自己取海水晒盐，公开违法。

为什么有效？英国靠几万官员统治几亿印度人，靠的是"印度人会配合"。
一旦几亿人安静地、不动手地"就是不配合"，这套统治机器就转不动了。

故事连接：丘吉尔那一遍（视角一第 5 节）里，正是 Gandhi 用绝食、不合作、
抵制英货把大英帝国逼到墙角。丘吉尔恨他，公开骂他是"半裸的苦行僧"——
一个穿自己纺的土布的瘦小老人，硬是逼得帝国坐不住。

影响后世：Martin Luther King（马丁·路德·金）在美国民权运动里，
明确说自己学的就是甘地的非暴力方法。`,
        en: `Mohandas Gandhi (1869-1948), the most famous leader of India's independence movement.
People often called him "Mahatma," meaning "great soul."

His core method is called **satyagraha (nonviolent resistance)** — literally "holding to
truth." It means: not using violence, but using mass, disciplined "non-cooperation" to
resist a ruler far stronger than you.

How, concretely?
- **Non-cooperation**: refusing to cooperate with British government, courts, and schools.
- **Boycott**: hundreds of millions of Indians refusing to buy British cloth, spinning and
  weaving their own (the homespun movement).
- **Civil disobedience**: deliberately breaking an unjust law, then willingly being arrested.
  The most famous was the 1930 Salt March — Britain made salt a government monopoly with a
  salt tax, so Gandhi led people on a march of hundreds of kilometers to the sea, made salt
  from seawater himself, openly breaking the law.

Why did it work? Britain ruled hundreds of millions of Indians with only tens of thousands
of officials — it depended on "Indians cooperating." Once hundreds of millions quietly,
without raising a hand, "just refused to cooperate," the whole machine of rule jammed.

Story link: In Churchill's pass (Lens 1, Node 5), it is exactly Gandhi who pushed the
British Empire into a corner with hunger strikes, non-cooperation, and boycotts. Churchill
hated him and called him in public a "half-naked fakir" — a thin little old man in homespun
cloth who forced an empire off its feet.

Later influence: Martin Luther King explicitly said he learned his nonviolent method
from Gandhi in the American civil rights movement.`,
      },
      xiaoweiNote: {
        cn: `老师说 satyagraha 这个词的拼写不用背，但"非暴力不合作"的三个动作要会举例：
**不合作 + 抵制英货 + 公民不服从（食盐进军）**。

我的记忆口诀："不买、不帮、故意犯法挨抓"——甘地用的是"软"的力量，
但它能让"硬"的帝国转不动。

注意 careful framing：甘地不是完美的圣人，他在种姓制、对待妻子等问题上也被后人批评。
AP 不要求你只会夸他——会"既看方法的力量，也看人的复杂"更高分。`,
        en: `Teacher said you don't need to memorize the spelling of satyagraha, but you must be
able to give examples of the three actions of nonviolence:
**non-cooperation + boycott + civil disobedience (the Salt March)**.

My mnemonic: "don't buy, don't help, break the law on purpose and take the arrest" —
Gandhi used a "soft" power, but it could jam a "hard" empire.

Careful framing: Gandhi wasn't a flawless saint — he's also been criticized by later
generations on caste and on how he treated his wife. AP doesn't want you to only praise him —
"seeing both the power of the method and the complexity of the person" scores higher.`,
      },
    },

    {
      id: 'bengal-famine-churchill',
      termCn: '1943 孟加拉饥荒 / 丘吉尔的另一面',
      termEn: '1943 Bengal Famine / The Other Side of Churchill',
      standardRef: ['AP World Modern Unit 8.5', 'AP DBQ rubric'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'winston-churchill',
        nodeIds: ['churchill-n4', 'churchill-n9', 'churchill-n10'],
        xiaoweiNote: {
          cn: `这个在丘吉尔那一遍（视角一第 4 节）读过——而且是那一遍最难受的一节。

1943 年印度孟加拉地区闹大饥荒。死亡人数学界估计从数十万到约 300 万不等
（取决于是否计入间接、长期死亡）——所以别写一个确数，写"约 300 万（区间从数十万起）"才稳。

原因不是单一的：日本占了缅甸切断大米进口、台风毁了庄稼、有人囤粮抬价、战时管理混乱。
但丘吉尔政府一次次把救援请求压下、推迟、打折——理由是战时船只优先运兵运粮给前线，
而且他私下对印度人有很重的轻视。学界的共识是：他是"加重责任的中心人物，但不是唯一原因"。

考点关键句：同一个丘吉尔——1940 年顶住纳粹、被全世界当反法西斯英雄的那双手，
也把约 300 万孟加拉人挡在了救援之外。**一个人可以同时是英雄，和加害者。**

这正是 AP 反"伟人崇拜"（anti-Whig）的经典素材：被尊为"英雄""文明使者"的大人物，
翻过来看，同一双手也可能沾着殖民地的血（和 King Leopold、Wilson 是同一个母题）。`,
          en: `I read this in Churchill's pass (Lens 1, Node 4) — and it was the hardest node in
that whole pass.

In 1943 a great famine struck the Bengal region of India. Scholars estimate deaths from
several hundred thousand up to about 3 million (depending on whether indirect, longer-term
deaths are counted) — so don't write one fixed number; "about 3 million (a range starting
from several hundred thousand)" is the safe way.

The causes weren't single: Japan took Burma and cut off rice imports, a cyclone ruined
crops, hoarders drove up prices, wartime management was a mess. But Churchill's government
pushed relief requests down, delayed and cut them, again and again — citing wartime priority
for ships carrying troops and grain to the front, and he privately held heavy contempt for
Indians. The scholarly consensus: he was "a central, aggravating figure, but not the only cause."

Key exam sentence: the same Churchill — the hands that held off the Nazis in 1940 and
were a hero against fascism to the whole world — also kept about 3 million Bengalis out of
reach of relief. **A person can be a hero and a perpetrator at the same time.**

This is classic AP anti-Whig material: figures honored as "heroes" and "bringers of
civilization," turned over, can have the same hands stained with colonial blood (same motif
as King Leopold and Wilson).`,
        },
      },
    },

    {
      id: 'african-independence-ghana-algeria',
      termCn: '非洲独立：加纳（谈判）vs 阿尔及利亚（战争）',
      termEn: 'African Independence: Ghana (Negotiated) vs Algeria (War)',
      standardRef: ['AP World Modern Unit 8.5', 'AP World Modern Unit 8.6', 'CA HSS 10.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'winston-churchill', nodeId: 'churchill-n8', context: '1945 后殖民地一个接一个独立；新国家掉进美苏冷战逼站队的麻烦' },
        ],
      },
      standaloneText: {
        cn: `印度只是开头。1945 年之后，非洲的殖民地一个接一个独立。两个案例 AP 最常考——
因为它们代表了去殖民化的两条路：**谈判式** vs **武装式**。

**加纳（Ghana），1957——谈判式独立的代表**
加纳（原英国殖民地"黄金海岸"）在 Kwame Nkrumah（恩克鲁玛）领导下，
用政党组织、罢工、和平施压，最终通过和英国谈判，在 1957 年独立——
是**撒哈拉以南非洲第一个独立的国家**。Nkrumah 还是"泛非主义"的旗手（见下一张卡）。
他有句名言："先寻求政治王国（独立），其他一切都会随之而来。"

**阿尔及利亚（Algeria），1954-1962——武装式独立的代表**
阿尔及利亚是法国殖民地，但法国把它当成"法国本土的一部分"，还有上百万法国移民住在那。
所以法国死活不肯放。阿尔及利亚民族解放阵线（FLN）发动了长达 8 年的独立战争（1954-1962），
双方都使用了酷刑和针对平民的暴力，死亡人数高达数十万。最终 1962 年阿尔及利亚独立。

对比的意义：
- 加纳走谈判，独立来得相对平稳。
- 阿尔及利亚走战争，因为殖民者（法国 + 移民）的抵抗太顽固，只能用血换。
- **不是哪条路"更高级"——而是看殖民者愿不愿意走、肯放多少。**
  殖民者越想留下，独立的代价往往越血腥。

故事连接：丘吉尔那一遍第 8 节说"1945 后殖民地一个接一个走"——
加纳、阿尔及利亚就是这股浪潮里的两个。`,
        en: `India was only the beginning. After 1945, Africa's colonies became independent one
after another. Two cases AP tests most — because they represent the two roads of
decolonization: **negotiated** vs **armed**.

**Ghana, 1957 — the model of negotiated independence**
Ghana (the former British colony "Gold Coast"), under Kwame Nkrumah, used party
organization, strikes, and peaceful pressure, and finally won independence through
negotiation with Britain in 1957 — the **first independent nation in sub-Saharan Africa**.
Nkrumah was also the standard-bearer of Pan-Africanism (see the next card). He famously
said: "Seek ye first the political kingdom (independence), and all else shall be added."

**Algeria, 1954-1962 — the model of armed independence**
Algeria was a French colony, but France treated it as "part of France itself," with over a
million French settlers living there. So France refused to let go. The National Liberation
Front (FLN) waged an 8-year war of independence (1954-1962); both sides used torture and
violence against civilians, and deaths reached the hundreds of thousands. Algeria finally
won independence in 1962.

The point of the contrast:
- Ghana took the negotiated road; independence came relatively smoothly.
- Algeria took the road of war, because the colonizers' resistance (France + settlers) was
  so stubborn it could only be paid for in blood.
- **Neither road is "more advanced" — it depends on whether the colonizer is willing to
  leave, and how much it will give up.** The harder a colonizer clings, the bloodier
  independence usually is.

Story link: Churchill's pass, Node 8, says "after 1945 the colonies left one after
another" — Ghana and Algeria are two cases in that wave.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡的核心不是死记加纳/阿尔及利亚的年份，是会用一句话对比：
**"加纳谈出来的独立，阿尔及利亚打出来的独立。"**

记忆口诀：**G-N（Ghana-Negotiated 谈）vs A-A（Algeria-Armed 打）**。
DBQ 经常给两个材料让你比较"为什么有的去殖民和平、有的血腥"——
答案锚点：看**殖民者的抵抗有多顽固 + 有没有大批移民赖着不走**。`,
        en: `Teacher said the core of this card isn't memorizing Ghana/Algeria's years — it's being
able to contrast them in one line:
**"Ghana's independence was negotiated; Algeria's was fought for."**

Mnemonic: **G-N (Ghana-Negotiated) vs A-A (Algeria-Armed)**.
DBQs often give two documents and ask you to compare "why was some decolonization peaceful
and some bloody" — the answer anchor: look at **how stubborn the colonizer's resistance was
+ whether large numbers of settlers refused to leave.**`,
      },
    },

    {
      id: 'broader-decolonization-vietnam-suez-africa-1960',
      termCn: '去殖民化的更广图景：越南 / 苏伊士 1956 / 非洲年 1960 / 刚果危机',
      termEn: 'Decolonization Beyond India: Vietnam, Suez 1956, Year of Africa, Congo Crisis',
      standardRef: ['AP World Modern Unit 8.5', 'AP World Modern Unit 8.6', 'AP World Modern Unit 8.8', 'CA HSS 10.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `印度之外，AP 考题里的去殖民化是覆盖亚非拉的大地图。

**越南：殖民者换了一个，战争打了三十年**
1945 年 9 月，越共领袖**胡志明（Ho Chi Minh）**宣告越南独立（引用了《独立宣言》开头）。
法国不承认，出兵反攻；1954 年越南在**奠边府（Dien Bien Phu）**大败法军，法国撤出。
《日内瓦协定》以北纬 17 度线把越南一分为二，独立直接接入冷战，演变为越战（1955-1975）。

**苏伊士运河危机（Suez Crisis），1956**
埃及总统**纳赛尔（Nasser）**将运河国有化。英法以色列出兵，美苏双方都反对，迫使撤军。
英法颜面尽失，非洲独立浪潮加速——**帝国时代真正的终结信号**。

**非洲年（Year of Africa），1960**
1960 年，**17 个非洲国家同年独立**（14 个法属 + 英属 + 比属刚果）。
AP 必记：**1960 = 17 国 = 非洲年**。

**刚果危机（Congo Crisis），1960**
比属刚果 6 月 30 日独立，首任总理**卢蒙巴（Patrice Lumumba）**刚上任，军队哗变、
加丹加省分裂，美苏双方都插手。卢蒙巴 9 月被推翻、后遭处决——「独立不等于稳定」的教材。`,
        en: `Decolonization is not only India and Partition — on AP exams it's a wide map covering
Asia, Africa, and beyond.

**Vietnam: one colonizer replaced by another, thirty years of war**
Vietnam was a French colony. On September 2, 1945, Communist leader **Ho Chi Minh** declared
independence in Hanoi, even quoting the American Declaration of Independence. France refused
and sent troops. By 1954 Vietnam defeated French forces at **Dien Bien Phu**; France withdrew.
The Geneva Accords split Vietnam at the 17th parallel; independence fed directly into the Cold
War and became the Vietnam War (1955-1975).

**Suez Crisis, 1956**
Egyptian President **Nasser** nationalized the Suez Canal. Britain, France, and Israel launched
a military action; both the US and USSR opposed it and forced a British-French withdrawal.
The crisis announced that the old empires could no longer dominate other regions against
superpower opposition. British and French prestige collapsed, accelerating African independence
— **the true closing signal of the age of empires**.

**Year of Africa, 1960**
In 1960 alone, **17 African nations became independent** (14 from French Africa + British +
Belgian Congo). Representative cases: Cameroon (January), Democratic Republic of the Congo
(June 30), Nigeria (October 1).
AP must-memorize: **1960 = 17 nations = Year of Africa**.

**Congo Crisis, 1960**
The Belgian Congo became independent June 30, 1960. First PM **Patrice Lumumba** had barely
taken office when the army mutinied and mineral-rich Katanga declared secession. Both the US
and USSR intervened. Lumumba was deposed in September of the same year and later executed.
The Congo is the textbook case for "independence does not equal stability" — the power vacuum
left by the colonizer was immediately filled by Cold War powers and internal fracture.`,
      },
      xiaoweiNote: {
        cn: `老师说这门课很容易只记住印度分治，然后 AP 考题里出了越南、苏伊士、刚果，就傻眼了。
这张卡的口诀：**越南打出来（奠边府 1954）→ 苏伊士拿回来（纳赛尔 1956）→
非洲年 17 国（1960）→ 刚果乱起来（1960 独立即崩溃）**。
考试最爱的比较题型：「为什么有的去殖民化和平，有的血腥？」
越南 vs 加纳就是最佳对照——一个打了 30 年，一个谈出来了。`,
        en: `Teacher said this course makes it easy to only remember India's Partition, then an
AP question on Vietnam, Suez, or the Congo leaves you stuck.
This card's mnemonic: **Vietnam fought its way out (Dien Bien Phu 1954) → Suez taken back
(Nasser 1956) → Year of Africa 17 nations (1960) → Congo broke apart (independence 1960,
immediate collapse)**.
The comparison question exams love most: "Why was some decolonization peaceful and some
bloody?" Vietnam vs Ghana is the perfect contrast — one took thirty years of war, one was
negotiated.`,
      },
    },

    {
      id: 'pan-africanism',
      termCn: '泛非主义（Pan-Africanism）',
      termEn: 'Pan-Africanism',
      standardRef: ['AP World Modern Unit 8.5', 'AP World Modern Unit 8.8'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `**Pan-Africanism（泛非主义）**——一个想法：全世界的非洲人和非洲后裔，
不管被殖民者用线切成了多少个国家，本质上是一个共同体，应该团结起来。

为什么会有这个想法？因为殖民者（在 1884-85 年的 Berlin Conference 柏林会议上）
拿着尺和笔，把整块非洲随意切成一份份，根本不管线两边住的是不是同一族人。
泛非主义就是对这种"被切碎"的回应：你们用线把我们分开，我们偏要重新连起来。

几个关键点：
- 它最早的源头之一在非洲大陆**之外**——美洲被奴役的非洲后裔（如 W.E.B. Du Bois 杜波依斯）
  组织"泛非大会"（Pan-African Congress），把"全球非洲人是一体"的想法带回非洲。
- **Kwame Nkrumah（加纳的恩克鲁玛）**是把泛非主义从想法变成政治行动的关键人物。
  他主张：单个非洲国家太小、太弱，挡不住大国，只有非洲联合起来才有力量。
- 1963 年，非洲多国成立了"非洲统一组织"（OAU，今天非盟 AU 的前身）——
  这是泛非主义结出的制度果实。

careful framing：泛非主义的"团结"理想很美，但现实里非洲各国国情、利益差别很大，
真正的"非洲联合"一直很难实现。理想和现实之间，至今有差距。

这张卡和"非洲独立"那张是一对：Nkrumah 既是加纳独立的领袖，也是泛非主义的旗手。`,
        en: `**Pan-Africanism** — an idea: that all Africans and people of African descent
around the world, no matter how many countries the colonizers cut them into with lines,
are essentially one community and should unite.

Why did this idea arise? Because the colonizers (at the 1884-85 Berlin Conference) took
ruler and pen and cut the whole of Africa into pieces at will, not caring whether the
people on either side of a line were one people. Pan-Africanism was the response to being
"cut up": you used lines to divide us, so we insist on reconnecting.

Key points:
- One of its earliest sources was **outside** the African continent — enslaved people of
  African descent in the Americas (such as W.E.B. Du Bois) organized "Pan-African
  Congresses," carrying the idea of "global Africans as one" back to Africa.
- **Kwame Nkrumah (of Ghana)** was the key figure who turned Pan-Africanism from an idea
  into political action. He argued: a single African nation is too small and weak to stand
  against great powers; only a united Africa has strength.
- In 1963, many African nations founded the "Organization of African Unity" (OAU,
  predecessor of today's African Union, AU) — the institutional fruit of Pan-Africanism.

Careful framing: Pan-Africanism's ideal of "unity" is beautiful, but in reality African
nations differ greatly in conditions and interests, and true "African union" has always
been hard to achieve. There is still a gap between the ideal and reality.

This card pairs with the "African Independence" card: Nkrumah was both the leader of
Ghana's independence and the standard-bearer of Pan-Africanism.`,
      },
      xiaoweiNote: {
        cn: `我一开始把 Pan-Africanism 和 Non-Aligned（不结盟）搞混了。老师帮我分清：
**泛非主义 = "非洲人之间"要团结（同一片大陆/同一个族群命运）；
不结盟 = "新国家对美苏两个超级大国"谁都不站队（怎么在冷战里自处）。**
一个是横向的"我们是一家"，一个是对外的"我们谁都不跟"。

考点锚：Nkrumah + Du Bois + 1963 OAU（非洲统一组织）。`,
        en: `At first I mixed up Pan-Africanism and Non-Aligned. Teacher helped me separate them:
**Pan-Africanism = unity "among Africans" (one continent / shared fate);
Non-Aligned = new nations taking "neither side" between the two superpowers (how to survive
in the Cold War).** One is the horizontal "we are one family," the other is the outward
"we won't follow anyone."

Exam anchors: Nkrumah + Du Bois + the 1963 OAU (Organization of African Unity).`,
      },
    },

    {
      id: 'non-aligned-movement-cold-war',
      termCn: '不结盟运动 / 万隆会议 / 冷战夹缝',
      termEn: 'Non-Aligned Movement / Bandung / Caught in the Cold War',
      standardRef: ['AP World Modern Unit 8.8', 'CA HSS 10.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'winston-churchill',
        nodeIds: ['churchill-n8'],
        xiaoweiNote: {
          cn: `丘吉尔那一遍第 8 节读过，分治难民那一遍第 9 节也提到了。重点：

新独立的国家一诞生，就掉进一个新麻烦：美国和苏联两个超级大国搞**冷战（Cold War）**，
逼全世界站队——要么跟美国，要么跟苏联。

一批新国家的领袖不干。
- **1955 年**：他们在印尼的**万隆（Bandung）**开会，喊出"我们刚挣脱一个帝国，
  凭什么再给两个大国当小弟"。
- **1961 年**：在贝尔格莱德正式成立**不结盟运动（Non-Aligned Movement，NAM）**。
  核心主张：尊重主权、不干涉内政、不加入大国军事集团、谁的队都不站、走自己的路。

考点关键句：不结盟**不等于"中立、什么都不做"**——它是新国家集体"自己说话、
主动拒绝给大国当小弟"的政治选择。这正是丘吉尔那代人最怕看到的：那些被认为
"还不会自己管自己"的民族，不但独立了，还在世界舞台上自己结盟、自己拒绝大国。

careful framing（分治难民第 9 节）：不结盟是**大人物在世界舞台上的博弈**。
而路上的难民既没赶上"独立的荣耀"，也没资格上"不结盟"的谈判桌——
新国家还常被卷进冷战代理战争，当了大国的炮灰。`,
          en: `I read this in Churchill's pass, Node 8, and the Partition refugee pass, Node 9,
mentions it too. Key points:

The moment a newly independent nation was born, it fell into a new trouble: the United
States and the Soviet Union, the two superpowers, were waging the **Cold War**, forcing the
whole world to take sides — with America or with the Soviets.

A group of new-nation leaders refused.
- **1955**: they met in **Bandung**, Indonesia, declaring "we have just broken free from one
  empire, why should we be the little brother of two more great powers?"
- **1961**: they formally founded the **Non-Aligned Movement (NAM)** in Belgrade. Core
  principles: respect for sovereignty, non-interference, not joining great-power military
  blocs, taking no one's side, walking their own road.

Key exam sentence: Non-Aligned does **not** mean "neutral, doing nothing" — it was new
nations' collective political choice to "speak for themselves and actively refuse to be the
great powers' little brother." This was exactly what Churchill's generation most feared:
peoples thought "not yet able to govern themselves" not only became independent but made
their own alliances and refused the great powers on the world stage.

Careful framing (Partition refugee, Node 9): Non-Alignment was **the great figures' game on
the world stage.** The refugees on the road caught neither "the glory of independence" nor a
seat at the "non-aligned" table — and new nations were often dragged into Cold War proxy
wars as the great powers' cannon fodder.`,
        },
      },
    },

    {
      id: 'negotiated-vs-armed-mediation',
      termCn: '谈判式 vs 武装式去殖民 / 调停的角色',
      termEn: 'Negotiated vs Armed Decolonization / The Role of Mediation',
      standardRef: ['AP World Modern Unit 8.6', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'ralph-bunche',
        nodeIds: ['bunche-n3', 'bunche-n4', 'bunche-n7', 'bunche-n8'],
        xiaoweiNote: {
          cn: `这个考点把两条线串起来：去殖民化"怎么发生"，以及联合国/调停在中间起什么作用。
Ralph Bunche 那一遍专门讲调停。

**两条路（要会对比）：**
- **谈判式（negotiated）**：殖民者愿意走（或撑不住了），通过谈判和平移交。
  例：印度独立的移交、加纳 1957。优点是流血少；缺点是仓促移交也可能留下烂摊子（如分治）。
- **武装式（armed）**：殖民者死不肯走，只能靠武装斗争换独立。
  例：阿尔及利亚 1954-1962、海地革命（更早）。代价是大量流血。

**调停者的角色（Ralph Bunche）：**
旧帝国退场、新国家上场，中间那段最危险的"真空"里，常常爆发冲突。
联合国派人去这些火药桶之间调停。Ralph Bunche 是代表：1948 年中东战争中，
前任调停员瑞典外交官 Bernadotte 被刺杀，Bunche 接手；1949 年他把双方关进
地中海罗德岛一栋旅馆，靠耐心、公正、绝不偏帮，一寸一寸谈成停火线。
1950 年他因此获诺贝尔和平奖——**历史上第一个获此奖的非裔人士**。

考点关键句（也是 careful framing）：调停成功的最高境界是"什么都没发生"——
一场没打起来的战争，没人会给你颁奖，所以这种贡献常被历史忽略。
而且调停有边界：Bunche 能让枪暂时哑下来，消不掉仇恨的根。

反讽（事实对账要点）：Bunche 在世界舞台是和平英雄，回美国仍是被种族隔离的黑人。
1949 年杜鲁门请他当**助理国务卿**（一个高位），他**拒绝了**——因为不愿带家人住进
当时实行 Jim Crow 种族隔离的华盛顿。在外为别人争公正，在家还得为自己争平等。`,
          en: `This concept ties two threads together: how decolonization "happened," and what role
the UN / mediation played in between. Ralph Bunche's pass is specifically about mediation.

**Two roads (be able to contrast):**
- **Negotiated**: the colonizer is willing to leave (or can't hold on) and hands over
  peacefully through negotiation. E.g., India's handover, Ghana 1957. Pro: less bloodshed;
  con: a rushed handover can leave a mess too (like Partition).
- **Armed**: the colonizer refuses to leave, so independence is won by armed struggle.
  E.g., Algeria 1954-1962, the Haitian Revolution (earlier). The cost is heavy bloodshed.

**The mediator's role (Ralph Bunche):**
As the old empire exits and a new nation enters, conflict often erupts in the dangerous
"vacuum" between them. The UN sent people to mediate among these powder kegs. Ralph Bunche
is the model: in the 1948 Middle East war, his predecessor, the Swedish diplomat
Bernadotte, was assassinated, and Bunche took over; in 1949 he shut both sides inside a
hotel on Rhodes in the Mediterranean and, with patience, fairness, and never taking sides,
negotiated a ceasefire line inch by inch. In 1950 he won the Nobel Peace Prize for it —
**the first person of African descent in history to receive it.**

Key exam sentence (and careful framing): the highest art of successful mediation is that
"nothing happened" — no one gives you a prize for a war that never broke out, so this kind
of contribution is often overlooked by history. And mediation has limits: Bunche could make
guns fall silent for a time, but could not remove the root of hatred.

Irony (a fact-ledger point): Bunche was a hero of peace on the world stage but still a
segregated Black man back in America. In 1949 President Truman asked him to be **Assistant
Secretary of State** (a high post), and he **refused** — because he would not move his
family into Washington, which at the time enforced Jim Crow segregation. He brokered
fairness abroad while still fighting for his own equality at home.`,
        },
      },
    },

    {
      id: 'postcolonial-challenges-borders-economy',
      termCn: '后殖民挑战：画下的边界与经济依附',
      termEn: 'Post-colonial Challenges: Drawn Borders & Economic Dependence',
      standardRef: ['AP World Modern Unit 8.7', 'AP World Modern Unit 8.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'partition-refugee-receiving-end',
        nodeIds: ['refugee-n6', 'refugee-n8'],
        xiaoweiNote: {
          cn: `分治难民那一遍第 6、8 节读过。这张卡讲的是：独立**之后**的麻烦，往往才是最难的。

**挑战一：殖民者"画下的线"留下永久冲突。**
殖民者最厉害的本事不是占领土地，是**画线**——把活生生的人，按自己的方便，
切成"这边的"和"那边的"。例子：
- 1947 印巴边境线（Radcliffe 划界）：到今天还在，线两边两国打过好几仗，至今没真正和解。
- 非洲：1884-85 Berlin Conference 把非洲随意切块，许多今天的冲突都能追溯到那些人为边界。
这就叫"殖民者拍拍手走了，留下线两边的人世代为这条线流血"。

**挑战二：政治独立 ≠ 经济独立（新殖民主义 neocolonialism）。**
新国家升起了自己的国旗、有了自己的政府，但经济上常常还依附于原来的殖民母国或大国——
继续被当成原料产地、廉价劳动力来源。换了国旗，没换"谁赚钱"的格局。

**挑战三：内部裂痕。**
殖民者常用"分而治之"（divide and rule）挑动族群/宗教对立。独立后，这些被埋下的裂痕
（加上人为边界）容易爆成内战、教派冲突。

考点框架（AP 最爱的 Continuity & Change）：
- **变了**：主权、国旗、谁掌权（从殖民者到本国人）。
- **没变**：殖民者画的边界、族群/宗教裂痕、对大国的经济依附。
独立是一个"开始"，不是一个"结束"。`,
          en: `I read this in the Partition refugee pass, Nodes 6 and 8. This card is about: the
troubles **after** independence are often the hardest of all.

**Challenge 1: the colonizers' "drawn lines" left permanent conflict.**
The colonizer's greatest skill was never taking land — it was **drawing lines**, cutting
living people, for its own convenience, into "this side" and "that side." Examples:
- The 1947 India-Pakistan border (the Radcliffe Line): still there today, the two nations
  have fought several wars over it, and are not truly reconciled to this day.
- Africa: the 1884-85 Berlin Conference cut Africa into pieces at will, and many of today's
  conflicts trace back to those artificial borders.
This is the "colonizers clapped their hands and left, leaving the people on both sides of
the line to bleed over it for generations."

**Challenge 2: political independence ≠ economic independence (neocolonialism).**
New nations raised their own flags and had their own governments, but economically often
still depended on the former colonial power or great powers — still treated as a source of
raw materials and cheap labor. The flag changed, but "who makes the money" did not.

**Challenge 3: internal fractures.**
Colonizers often used "divide and rule" to set ethnic/religious groups against each other.
After independence, these buried fractures (plus artificial borders) easily exploded into
civil wars and sectarian conflict.

Exam frame (AP's favorite Continuity & Change):
- **Changed**: sovereignty, the flag, who holds power (from colonizers to locals).
- **Stayed the same**: the colonizers' drawn borders, ethnic/religious fractures, economic
  dependence on great powers.
Independence is a "beginning," not an "ending."`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1940 年，丘吉尔顶住纳粹的轰炸、绝不投降，被全世界当成反法西斯英雄。
同一个丘吉尔，1943 年孟加拉饥荒里一次次压下救援请求，约 300 万人（学界估计从数十万起）饿死。

一个人能同时是"反法西斯英雄"和"造成饥荒的加害者"吗？
你觉得"功"和"过"可以像加减法一样算出一个总分，还是它们是同一个信念的两面？`,
      en: `In 1940, Churchill held off the Nazi bombing and refused to surrender, and the whole
world saw him as a hero against fascism. The same Churchill, in the 1943 Bengal famine,
pushed relief requests down again and again, and about 3 million people (scholars estimate
from several hundred thousand up) starved.

Can a person be both an "anti-fascist hero" and a "perpetrator who caused a famine"? Do you
think "merit" and "fault" can be added and subtracted into one total score, or are they two
faces of the same belief?`,
      hintCn: `提示：可以从两个角度想——(1) 丘吉尔心里那套"大英帝国统治世界天经地义"的信念，
既让他无比勇敢地对抗纳粹暴政，也让他对印度人的命冷漠——因为他反对的"暴政"，
可能只算欧洲白人头上的暴政。(2) "功过相抵"听起来公平，但对那 300 万死者来说，
"丘吉尔救了欧洲"并不能抵消"他们饿死了"。

进阶思考：评价一个历史人物，是该给他打一个"总分"，还是该同时说清他做了什么好事、
什么坏事，让读者自己判断？哪种更诚实？`,
      hintEn: `Hint: think from two angles — (1) Churchill's inner belief that "the British
Empire ruling the world is natural" made him both immensely brave against Nazi tyranny and
cold toward Indian lives — because the "tyranny" he opposed may have counted only as tyranny
over white Europeans. (2) "Merit cancels fault" sounds fair, but to those 3 million dead,
"Churchill saved Europe" cannot cancel out "they starved."

Going deeper: in judging a historical figure, should we give them one "total score," or lay
out clearly both the good and the bad they did and let readers judge for themselves? Which
is more honest?`,
      conceptsActivated: ['bengal-famine-churchill', 'negotiated-vs-armed-mediation'],
    },
    {
      id: 'q2',
      cn: `1947 年印巴分治的国境线，是一个从没来过印度的英国律师 Radcliffe，
被关在屋里，对着地图，用约 5 周画出来的。这条线一公布，约 1500 万人上路逃命，
邻居变仇人，几代人的信任一夜崩塌——而这条线至今还在，两国为它打过好几仗。

你觉得，把上千万人的命交给一个对这片土地一无所知的人、用五周时间画一条线——
这种做法最大的问题在哪里？如果你能给当时的英国提一个建议，你会怎么说？`,
      en: `The 1947 India-Pakistan border was drawn by a British lawyer, Radcliffe, who had never
been to India, shut in a room with a map, in about 5 weeks. The moment that line was
announced, about 15 million people fled, neighbors became enemies, and generations of trust
collapsed overnight — and the line is still there today, with the two nations having fought
several wars over it.

What do you think is the biggest problem with handing the fate of tens of millions to
someone who knew nothing of the land, to draw a line in five weeks? If you could give
Britain one piece of advice at the time, what would you say?`,
      hintCn: `提示：可以想想——(1) 画线的人离得太远、太赶，根本不可能了解线两边住的是谁、
是不是几代好邻居；(2) 走向拖到独立日之后才公布，让很多人措手不及。
这和几十年前 Berlin Conference 瓜分非洲是同一个"画线逻辑"——殖民者最厉害的本事，
不是占领土地，是画线。

进阶思考：今天世界上还有很多冲突，能追溯到当年殖民者随手画下的边界（印巴、非洲很多地方）。
一条几十年前画错的线，为什么能让几代人一直流血？"改不动的现状"有没有可能改？`,
      hintEn: `Hint: consider — (1) the person drawing was too far away and too rushed to possibly
understand who lived on either side of the line, or whether they were good neighbors of
generations; (2) the line was announced only after independence day, catching many off
guard. This is the same "line-drawing logic" as the Berlin Conference carving up Africa
decades earlier — the colonizer's greatest skill was never taking land, it was drawing lines.

Going deeper: many conflicts in today's world trace back to borders colonizers drew
carelessly (India-Pakistan, many parts of Africa). Why can a line drawn wrong decades ago
keep generations bleeding? Is a "status quo that can't be changed" ever changeable?`,
      conceptsActivated: ['indian-independence-partition-1947', 'postcolonial-challenges-borders-economy'],
    },
    {
      id: 'q3',
      cn: `加纳（Ghana）1957 年通过和英国谈判，相对平稳地独立了；
阿尔及利亚（Algeria）却打了 8 年血腥的独立战争（1954-1962）才独立。
甘地（Gandhi）用非暴力不合作把英国逼到墙角；海地（更早）则是奴隶用武力打出独立。

为什么有的去殖民化是"谈出来的"、相对和平，有的却是"打出来的"、血流成河？
如果你是 AP 老师，让你出一道 DBQ 题来分析"是什么决定了去殖民化是和平还是暴力"，
你会怎么提问？`,
      en: `Ghana won independence relatively smoothly in 1957 through negotiation with Britain;
Algeria, however, had to fight a bloody 8-year war of independence (1954-1962). Gandhi
pushed Britain into a corner with nonviolent resistance; Haiti (earlier) won independence by
the force of enslaved people.

Why was some decolonization "negotiated" and relatively peaceful, while some was "fought
for" with rivers of blood? If you were an AP teacher writing a DBQ on "what determines
whether decolonization is peaceful or violent," how would you phrase the question?`,
      hintCn: `提示：DBQ 通常会给几个材料（殖民者的声明、独立领袖的演说、有没有大批移民、
殖民母国的实力对比），让你分析这几个变量。可能的提问角度：
- "在多大程度上，去殖民化的暴力程度，取决于殖民者抵抗的顽固程度（而非被殖民者的选择）？"
- "比较加纳和阿尔及利亚：殖民者的态度，如何决定了独立的代价？"

进阶思考：注意一个反 Whig 的细节——非暴力（甘地）能成功，部分是因为对手
（衰落中的英国）还在乎国际舆论、撑不住了。如果对手是死不肯走、还有上百万移民赖着的法国，
非暴力够不够用？这说明"用什么方法"不只取决于被压迫者，也取决于压迫者。`,
      hintEn: `Hint: a DBQ usually gives several documents (the colonizer's statements,
independence leaders' speeches, whether there were large numbers of settlers, the balance of
power of the colonial home country) and asks you to analyze these variables. Possible
question angles:
- "To what extent did the level of violence in decolonization depend on the stubbornness of
  the colonizer's resistance (rather than the choices of the colonized)?"
- "Compare Ghana and Algeria: how did the colonizer's attitude determine the cost of
  independence?"

Going deeper: note an anti-Whig detail — nonviolence (Gandhi) could succeed partly because
the opponent (a declining Britain) still cared about world opinion and couldn't hold on. If
the opponent had been a France that refused to leave and had over a million settlers digging
in, would nonviolence have been enough? This shows that "which method works" depends not
only on the oppressed but also on the oppressor.`,
      conceptsActivated: ['african-independence-ghana-algeria', 'gandhi-satyagraha', 'negotiated-vs-armed-mediation'],
    },
  ],
};

export default notebook;
