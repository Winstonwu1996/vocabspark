// ─── 同伴笔记本架构 v1 · The Crusades 十字军东征 ──────────────
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
//   - storyboard 提供情感锚点（骑士视角 / Aisha 被占领视角 / 阿莱克修斯拜占庭算计三条线）
//   - notebook 提供考点闭环（萨拉丁 / 文化交流 / 封建动机 / Reconquista 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-1.6
//   - California HSS 7.6.6, 7.6.1
//   - 弥补 crusades-1099 课纲覆盖率从 65% → ~95%
//
// schemaVersion: 1 · notebookVersion: crusades-1099-v1

export var notebook = {
  topicId: 'crusades-1099',
  topicNameCn: '十字军东征',
  topicNameEn: 'The Crusades',
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
    cn: `今天要读十字军东征（1095-1291）。老师说这是"同一片土地上三个世界的碰撞"。

她在黑板上写了这些名字和词：

教皇乌尔班二世（Pope Urban II）、萨拉丁（Saladin）、阿莱克修斯一世（Alexios I）

关键词：indulgence（赦罪），Holy Land（圣地），jihad（圣战），
feudal system（封建制度），Reconquista（收复失地运动），
cultural exchange（文化交流）

老师说："十字军是一面镜子——你从哪个视角看，看到的不一样。
十字军骑士、耶路撒冷的穆斯林居民、拜占庭皇帝——
同一件事，三个人的感受完全不同。"

我先把这张单子记下来，等下读三个视角的故事，
读完再回来对照，看我能不能解释每一个词。`,
    en: `Today we're reading about the Crusades (1095-1291). Teacher said this is
"the collision of three worlds over one piece of land."

She wrote these names and terms on the board:

Pope Urban II, Saladin, Alexios I

Key terms: indulgence, Holy Land, jihad, feudal system,
Reconquista, cultural exchange

Teacher said: "The Crusades are a mirror — what you see depends on
which perspective you're looking from. A Crusader knight, a Muslim
resident of Jerusalem, a Byzantine emperor — same events, completely
different experiences."

Let me write this list down. After reading three perspectives on the
stories, I'll come back and check whether I can explain each term.`,
    keyTerms: [
      { cn: '全赦 / 赎罪券', en: 'indulgence (indulgentia plenaria)' },
      { cn: '圣地', en: 'Holy Land' },
      { cn: '圣战（伊斯兰语境）', en: 'jihad' },
      { cn: '封建制度', en: 'feudal system' },
      { cn: '收复失地运动', en: 'Reconquista' },
      { cn: '文化交流', en: 'cultural exchange' },
      { cn: '骑士风度', en: 'chivalry' },
      { cn: '哈里发', en: 'caliph / caliphate' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '教皇乌尔班二世',
        nameEn: 'Pope Urban II',
        ipa: '/ˈɜːrbən ðə ˈsɛkənd/',
        roleCn: '1095年克勒芒讲道，发动第一次十字军东征',
        roleEn: 'Called the First Crusade at Clermont, 1095',
        mustKnow: true,
        audioKey: 'pope-urban-ii',
      },
      {
        nameCn: '萨拉丁',
        nameEn: 'Saladin',
        ipa: '/ˈsælədiːn/',
        roleCn: '库尔德裔苏丹，1187年重夺耶路撒冷',
        roleEn: 'Kurdish sultan who retook Jerusalem in 1187',
        mustKnow: true,
        audioKey: 'saladin',
      },
      {
        nameCn: '阿莱克修斯一世',
        nameEn: 'Alexios I Komnenos',
        ipa: '/ˌælɪɡˈzɪəs ðə ˈfɜːrst/',
        roleCn: '拜占庭皇帝，向西方求援却引狼入室',
        roleEn: 'Byzantine emperor who called for aid but gained a liability',
        mustKnow: true,
        audioKey: 'alexios-i',
      },
      {
        nameCn: '拜占庭帝国',
        nameEn: 'Byzantine Empire',
        ipa: '/ˈbɪzəntiːn/',
        roleCn: '东罗马帝国，十字军名义盟友，实际受害方',
        roleEn: 'Eastern Roman Empire, nominal Crusader ally and actual victim',
        mustKnow: true,
        audioKey: 'byzantine',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'urban-ii-clermont',
      termCn: '乌尔班二世 / 克勒芒讲道',
      termEn: 'Pope Urban II / Council of Clermont',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'crusader-perpetrator',
        nodeIds: ['crusader-N1', 'crusader-N2'],
        xiaoweiNote: {
          cn: `这个在视角一里读过！1095年11月27日，克勒芒（Clermont），
教皇乌尔班二世（Pope Urban II，发动十字军的教皇）站上讲台，
讲了一场改变欧洲的演讲。

他说了三件事：
1. 土耳其人占领了耶路撒冷（Holy Land，圣地），基督徒无法朝圣了
2. 谁参加十字军，罪行全赦（indulgentia plenaria，拉丁文"全赦"）
3. 听众喊出了"Deus vult！"（拉丁文：上帝旨意！）

全赦这件事是关键——它的意思是：死在路上，直接上天堂。
对那个时代的人来说，这等于给了一张"人生保险单"。

考点关键句：1095年克勒芒讲道是**第一次十字军东征的起点**，
教皇乌尔班二世的全赦承诺是十字军的核心宗教动机。`,
          en: `I read this in Perspective 1! November 27, 1095, Clermont —
Pope Urban II (the pope who launched the Crusades) stood before a crowd
and delivered a speech that changed Europe.

He said three things:
1. Turks had taken Jerusalem (the Holy Land); Christians couldn't make pilgrimages
2. Those who joined the Crusade would receive full absolution (indulgentia plenaria)
3. The crowd shouted "Deus vult!" (Latin: God wills it!)

The plenary indulgence is the key — it meant: die on the road, go straight to heaven.
For people of that era, this was like a "lifetime insurance policy."

Key exam sentence: The 1095 Council of Clermont was the **starting point of the
First Crusade**; Pope Urban II's promise of plenary indulgence was the core
religious motivation.`,
        },
      },
    },

    {
      id: 'crusader-motivations',
      termCn: '十字军的复合动机',
      termEn: 'Crusader Motivations (Religious + Economic + Social)',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'crusader-perpetrator',
        nodeIds: ['crusader-N3', 'crusader-N4'],
        xiaoweiNote: {
          cn: `视角一里那个骑士去打十字军，说是"为上帝"——但他还提到了弟弟没有土地，
还有东方的财富。AP 最喜欢考这个：**十字军的动机是纯宗教的吗？**

三类动机的考点版本：
- **宗教动机**：全赦（罪得赦免）、朝圣、"解放"圣地
- **经济动机**：次子（second sons）无封地继承权（长子继承制，primogeniture），
  去东方可以抢到土地和财富
- **冒险/社会动机**：封建骑士文化崇尚战争荣耀，"去打仗"本身就有吸引力

AP 考题套路：给一段原始史料，让你判断这个人去十字军是"主要出于宗教"还是
"主要出于经济"，不要只选一个——要说"两者都有，但……"。`,
          en: `The knight in Perspective 1 said he was going "for God" — but he also mentioned
his brother having no land, and the wealth of the East. AP loves testing this:
**Were Crusader motivations purely religious?**

The three-category exam version:
- **Religious**: plenary indulgence, pilgrimage, "liberating" the Holy Land
- **Economic**: second sons had no inheritance rights under primogeniture
  (only eldest son inherited); going east meant a chance at land and wealth
- **Adventure/Social**: feudal knight culture glorified martial honor —
  "going to war" was itself attractive

AP exam pattern: they'll give you a primary source and ask whether someone went
on Crusade "mainly for religious reasons" or "mainly for economic reasons."
Don't pick just one — say "both, but..."`,
        },
      },
    },

    {
      id: 'jerusalem-1099',
      termCn: '1099年耶路撒冷屠城',
      termEn: 'Fall and Massacre of Jerusalem, 1099',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'aisha-lonely-mediator',
        nodeIds: ['aisha-N8', 'aisha-N9', 'aisha-N10', 'crusader-N10'],
        xiaoweiNote: {
          cn: `这个在视角一和视角二都读过——从两个完全不同的感受。

时间线：1099年7月15日，十字军攻破耶路撒冷城墙。
接下来3天，他们屠杀了城内大量穆斯林和犹太居民。

视角一（骑士）那边，他说"城市被解放了"——那是他眼中的故事。
视角二（城里的穆斯林女孩）那边，她看到的是完全不同的现实。

AP 考点：**同一历史事件，不同立场的人如何描述它**——
这是 DBQ 的核心训练之一。

也要记住：1099年耶路撒冷屠城后来成为伊斯兰世界
凝聚反十字军情绪的标志性事件，直接推动了萨拉丁崛起的民意基础。`,
          en: `This was in both Perspective 1 and Perspective 2 — with completely different feelings.

Timeline: July 15, 1099, Crusaders breached Jerusalem's walls.
Over the following 3 days, they massacred large numbers of Muslim and Jewish residents.

In Perspective 1, the knight said the city was "liberated" — that was his story.
In Perspective 2, the Muslim girl inside the city saw a completely different reality.

AP exam point: **how different people describe the same historical event from
different positions** — this is a core DBQ skill.

Also remember: the 1099 Jerusalem massacre became a landmark event in the Islamic
world for rallying anti-Crusader sentiment, and directly built the popular support
base for Saladin's rise.`,
        },
      },
    },

    {
      id: 'byzantine-perspective',
      termCn: '拜占庭视角 / 阿莱克修斯一世',
      termEn: 'Byzantine Perspective / Alexios I',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'alexios-receiving-end',
        nodeIds: ['alexios-N1', 'alexios-N5', 'alexios-N8', 'alexios-N12'],
        xiaoweiNote: {
          cn: `视角三是拜占庭皇帝阿莱克修斯一世（Alexios I Komnenos，拜占庭皇帝）的故事。
他是这三条线里最"算计"的角色，也是结果最讽刺的一个。

他的处境：1095年，塞尔柱突厥人打到小亚细亚（今天的土耳其），
离君士坦丁堡只有几百公里。他给教皇写信求"几千名雇佣兵"。

他得到了什么：几万名有自己议程的十字军骑士，
不听拜占庭指挥，拿下城市之后还不交还拜占庭。

AP 考点：十字军并没有帮拜占庭"收复失土"——他们更像是另一波入侵者。
1204年第四次十字军甚至直接洗劫了君士坦丁堡（拜占庭首都）。
这就是"盟友变劫匪"的历史案例。`,
          en: `Perspective 3 is the story of Byzantine Emperor Alexios I Komnenos.
He's the most "calculating" character in the three storylines — and the most ironic outcome.

His situation: by 1095, Seljuk Turks had pushed into Asia Minor (modern Turkey),
only a few hundred kilometers from Constantinople. He wrote to the Pope asking for
"a few thousand mercenaries."

What he got: tens of thousands of Crusader knights with their own agenda,
who didn't follow Byzantine command and refused to hand over captured cities.

AP exam point: the Crusades didn't help Byzantium "recover lost territory" —
they were more like another wave of invaders. The Fourth Crusade in 1204 even
directly sacked Constantinople (the Byzantine capital). This is history's
case study in "allies becoming looters."`,
        },
      },
    },

    {
      id: 'saladin-1187',
      termCn: '萨拉丁 & 1187年耶路撒冷反攻',
      termEn: 'Saladin & Reconquest of Jerusalem, 1187',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'aisha-lonely-mediator', nodeId: 'aisha-N11', context: 'Aisha 晚年在故事尾声提到萨拉丁的名字' },
        ],
      },
      standaloneText: {
        cn: `萨拉丁（Saladin，全名 Salah ad-Din Yusuf ibn Ayyub，1137-1193），
库尔德裔穆斯林将领，阿尤布王朝（Ayyubid dynasty）创立者。

**他做了什么：** 1169年控制埃及，1174年吞并叙利亚，统一了之前分裂的伊斯兰世界，
建立起能对抗十字军的统一力量。

**决定性一战：** 1187年7月4日，**哈丁战役**（Battle of Hattin，也译"哈廷"）。
他引诱十字军进入沙漠地带，切断水源，在炎热与干渴中歼灭了耶路撒冷王国的主力军队。
3个月后，1187年10月2日，**萨拉丁重新夺回耶路撒冷**——距离十字军占领它已过去88年。

**最关键的AP考点——行为对比：**
- 1099年十字军攻入耶路撒冷：屠城，大量平民遇难
- 1187年萨拉丁攻入耶路撒冷：禁止屠杀，允许基督徒居民交赎金离开，
  甚至为穷人豁免赎金

这个对比是AP World History的必考内容：**谁的行为更"文明"？**
萨拉丁的克制让他在欧洲基督教世界也获得了声望，被称为"高贵的敌人"。

**别只记1187年——** 后来第三次十字军（1189-1192）由英国狮心王理查
（Richard I "the Lionheart"）率领来"收复"耶路撒冷。萨拉丁和理查谈判，
最终达成协议：耶路撒冷归穆斯林，但基督徒可以朝圣。
这说明战争之外还有外交——AP会考这个。`,
        en: `Saladin (full name Salah ad-Din Yusuf ibn Ayyub, 1137-1193) was a Kurdish
Muslim military leader and founder of the Ayyubid dynasty.

**What he did:** By 1169 he controlled Egypt; by 1174 he absorbed Syria, unifying
the previously fragmented Islamic world and building a unified force capable of
challenging the Crusaders.

**The decisive battle:** July 4, 1187 — the **Battle of Hattin**. He lured the
Crusaders into desert terrain, cut off their water supply, and destroyed the main
army of the Kingdom of Jerusalem through heat and thirst. Three months later,
on October 2, 1187, **Saladin retook Jerusalem** — 88 years after the Crusaders seized it.

**The most important AP point — the behavioral contrast:**
- 1099, Crusaders enter Jerusalem: massacre, large numbers of civilians killed
- 1187, Saladin enters Jerusalem: prohibits killing, allows Christian residents
  to pay ransom and leave, even waiving ransoms for the poor

This contrast is a required AP World History topic: **whose behavior was more
"civilized"?** Saladin's restraint earned him respect even in Christian Europe,
where he was called "the noble enemy."

**Don't just memorize 1187 —** the Third Crusade (1189-1192) was led by England's
Richard I ("the Lionheart") to "reclaim" Jerusalem. Saladin and Richard negotiated,
ultimately reaching an agreement: Jerusalem would remain Muslim, but Christians
could make pilgrimages. This shows that diplomacy existed beyond warfare —
AP tests this too.`,
      },
      xiaoweiNote: {
        cn: `老师说萨拉丁 vs 1099年屠城的对比几乎每年都考——
选择题会给两段描述，让你判断哪个是十字军的行为，哪个是萨拉丁的行为。
别被"宗教"这个标签骗了——行为才是考点。

我的记忆口诀：**1099 = 十字军进，屠城；1187 = 萨拉丁进，不杀。**
年份+行为+结果，三合一记忆。`,
        en: `Teacher said the Saladin vs 1099 massacre contrast is tested almost every year —
multiple choice will give you two descriptions and ask which was Crusader behavior
and which was Saladin's. Don't be fooled by the "religion" label — behavior is the
exam point.

My mnemonic: **1099 = Crusaders enter, massacre; 1187 = Saladin enters, no killing.**
Year + behavior + outcome, memorize all three together.`,
      },
    },

    {
      id: 'cultural-exchange',
      termCn: '十字军与伊斯兰文化交流',
      termEn: 'Crusades & Islamic-European Cultural Exchange',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `十字军东征（1095-1291）打了将近 200 年，期间欧洲和伊斯兰世界
长期处于接触状态——战场上是敌人，贸易里有时是生意伙伴。

**从伊斯兰世界流入欧洲的知识与商品（AP 必考清单）：**

**医学：** 伊斯兰医学比当时欧洲先进约 500 年。
伊本·西那（Ibn Sina / Avicenna，980-1037）的《医学典籍》
（The Canon of Medicine）成为欧洲大学医学院教材，沿用到 17 世纪。
伊斯兰外科技术（比如消毒、麻醉草药）也传入欧洲。

**数学：** 阿拉伯数字（0-9，包括零的概念）从伊斯兰世界传入欧洲。
没有"0"这个概念，欧洲当时还在用罗马数字（XIV、XXI……），
计算非常困难。"零"的传入改变了欧洲数学。

**天文学：** 伊斯兰天文学家（如花拉子密，al-Khwarizmi）的
星表和计算方法传入欧洲，支撑了后来的大航海导航。
"algebra"（代数）这个词本身就来自阿拉伯语"al-jabr"。

**商品与贸易：** 香料（胡椒、肉桂、丁香）、丝绸、棉花、糖、
玻璃制造技术、造纸术（从中国经伊斯兰世界传入欧洲）——
这些都通过十字军时期的贸易网络进入欧洲市场。

**careful framing：** 这不完全是"和平交流"。很多知识是
通过征服、劫掠、以及之后的翻译运动（Translation Movement，
12-13 世纪将阿拉伯语书籍译成拉丁语）进入欧洲的。
也就是说：**欧洲获得了知识，但伊斯兰世界付出的代价是战争破坏。**
AP DBQ 会问：这算"交流"还是"掠夺顺便带走的知识"？`,
        en: `The Crusades (1095-1291) lasted nearly 200 years, during which Europe and the
Islamic world remained in sustained contact — enemies on the battlefield, sometimes
trading partners in commerce.

**Knowledge and goods flowing from the Islamic world to Europe (AP required list):**

**Medicine:** Islamic medicine was approximately 500 years ahead of Europe at the time.
Ibn Sina (Avicenna, 980-1037)'s The Canon of Medicine became the standard medical
textbook at European universities, used until the 17th century. Islamic surgical
techniques (such as antisepsis and herbal anesthesia) also entered Europe.

**Mathematics:** Arabic numerals (0-9, including the concept of zero) entered Europe
from the Islamic world. Without the concept of "0," Europe still used Roman numerals
(XIV, XXI…), making calculation extremely difficult. The arrival of zero transformed
European mathematics.

**Astronomy:** Islamic astronomers' star charts and calculation methods (such as those
of al-Khwarizmi) entered Europe and supported later navigation during the Age of
Exploration. The word "algebra" itself comes from the Arabic "al-jabr."

**Goods and Trade:** Spices (pepper, cinnamon, cloves), silk, cotton, sugar,
glassmaking techniques, papermaking (from China through the Islamic world to Europe) —
all entered European markets through the Crusade-era trade networks.

**Careful framing:** This wasn't purely "peaceful exchange." Much knowledge entered
Europe through conquest, plunder, and the subsequent Translation Movement (12th-13th
centuries, translating Arabic texts into Latin). That means: **Europe gained knowledge,
but the Islamic world paid the price of war and destruction.** AP DBQ will ask:
was this "exchange" or "knowledge seized as spoils of war"?`,
      },
      xiaoweiNote: {
        cn: `这个考点很容易出 DBQ——给你一段描述欧洲中世纪大学在学伊斯兰医学的材料，
让你分析"十字军对欧洲的长期影响"。

我的记忆框架：**医学 · 数学 · 天文学 · 贸易**——四类，各记一个代表词：
Avicenna（医学）、零/代数（数学）、星表（天文）、香料/丝绸（贸易）。`,
        en: `This topic appears frequently in DBQs — they'll give you a source describing
medieval European universities studying Islamic medicine, and ask you to analyze
"the long-term impact of the Crusades on Europe."

My memory framework: **Medicine · Math · Astronomy · Trade** — four categories,
one representative word each: Avicenna (medicine), zero/algebra (math),
star charts (astronomy), spices/silk (trade).`,
      },
    },

    {
      id: 'feudal-system-crusade-connection',
      termCn: '封建制度与十字军动机',
      termEn: 'Feudal System & Crusader Motivation',
      standardRef: ['CA HSS 7.6.1', 'AP World KC-1.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'crusader-perpetrator', nodeId: 'crusader-N3', context: '骑士提到自己是家中次子，无法继承封地' },
        ],
      },
      standaloneText: {
        cn: `要理解为什么那么多欧洲骑士愿意去十字军，先要懂封建制度（feudal system）。

**封建制度的基本结构：**
国王 → 大贵族（lord）→ 小贵族（vassal / knight）→ 农奴（serf）

土地是封建社会的核心资产。骑士通过向领主效忠（oath of fealty）
换取土地和保护，领主向国王效忠换取更大封地。

**为什么次子要去十字军：长子继承制（primogeniture）**
封建欧洲的规则：土地只传给长子（eldest son）。
次子、三子……没有土地继承权。他们可以：
(a) 做教士（进教会）
(b) 做雇佣兵（帮别人打仗）
(c) 去十字军——**这是唯一一条"合法抢土地"的路线**

十字军东征给了没有土地的骑士一个机会：
在中东建立自己的封建领地（如安提阿公国、耶路撒冷王国）。
这些"十字军国家"（Crusader States）实际上就是封建制度在中东的复制品。

**考点关键句：** 封建制度的长子继承制造成了大量"剩余骑士"，
他们的经济动机与宗教热情叠加，成为十字军兵力的重要来源。

这解释了为什么"为上帝而战"和"为土地而战"不是矛盾的——
在中世纪骑士眼里，两者可以同时成立。`,
        en: `To understand why so many European knights were willing to go on Crusade,
you first need to understand the feudal system.

**The basic feudal structure:**
King → Great lords → Lesser nobles (vassals / knights) → Serfs

Land was the central asset of feudal society. Knights pledged loyalty (oath of fealty)
to lords in exchange for land and protection; lords pledged loyalty to kings in
exchange for larger estates.

**Why second sons went on Crusade: primogeniture**
The rule in feudal Europe: land passed only to the eldest son.
Second sons, third sons — no inheritance rights. They could:
(a) become clergy (join the Church)
(b) become mercenaries (fight for others)
(c) go on Crusade — **the only "legal" path to seizing land**

The Crusades gave landless knights an opportunity: establish their own feudal
territories in the Middle East (such as the Principality of Antioch and the
Kingdom of Jerusalem). These "Crusader States" were essentially copies of the
feudal system transplanted to the Middle East.

**Key exam sentence:** The primogeniture rule of the feudal system produced
large numbers of "surplus knights" whose economic motives combined with
religious enthusiasm to become a major source of Crusader manpower.

This explains why "fighting for God" and "fighting for land" weren't
contradictions — in the eyes of a medieval knight, both could be true simultaneously.`,
      },
      xiaoweiNote: {
        cn: `这个考点容易和"十字军动机"那张卡合并记忆：
封建制度 → 次子无地 → 十字军提供了"合法抢地"的机会 → 经济动机 + 宗教动机叠加。

记住：**primogeniture（长子继承制）**这个词——选择题里可能直接出现。`,
        en: `This exam point is easy to memorize together with the "Crusader motivations" card:
feudal system → second sons have no land → Crusades provided a "legal land seizure"
opportunity → economic motive + religious motive combined.

Remember: **primogeniture** — this word can appear directly in multiple choice.`,
      },
    },

    {
      id: 'reconquista',
      termCn: 'Reconquista / 伊比利亚半岛收复运动',
      termEn: 'Reconquista / Iberian Reconquest',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `Reconquista（雷孔基斯塔，拉丁语/西班牙语："收复失地"），
指 711-1492 年，伊比利亚半岛（今天的西班牙+葡萄牙）
基督教王国从穆斯林控制区逐步"收复"领土的过程。

**时间跨度：近 800 年（711-1492）**

- **711 年：** 北非柏柏尔/阿拉伯穆斯林军队越过直布罗陀海峡，
  7年内占领伊比利亚半岛大部分地区，建立安达卢斯（al-Andalus）。
- **722 年前后：** 基督教残余势力在北部山区开始反抗，
  史称 Reconquista 的起点。
- **1095-1291 年：** 十字军东征与 Reconquista 同期进行——
  都是"基督教世界 vs 伊斯兰世界"的冲突，但地点不同（中东 vs 伊比利亚）。
- **1492 年：** 格拉纳达（Granada）陷落，穆斯林在伊比利亚的最后据点消失——
  同年哥伦布首航美洲。西班牙王室把对穆斯林战争的胜利资金转投到了"新世界"。

**为什么 AP 要一起考十字军和 Reconquista？**
两者使用了相同的意识形态框架：**"神圣战争"（holy war / jihad）的镜像**。
教皇对 Reconquista 战士也给予全赦（indulgence）——和十字军一样的逻辑。
这说明"十字军"不是孤立事件，而是一种**宗教-军事动员模式**，
同时在地中海多个战场运作。

**careful framing：** 安达卢斯的穆斯林统治期（711-1492）
曾是欧洲最发达的文明之一——托莱多（Toledo）、科尔多瓦（Córdoba）
是当时欧洲最大的城市，学者在那里翻译希腊哲学著作、伊斯兰科学。
Reconquista 结束后，穆斯林和犹太人被驱逐（1492年驱逐令），
这片文明地带随之衰落。`,
        en: `Reconquista (Latin/Spanish: "reconquest") refers to the 711-1492 process
by which Christian kingdoms in the Iberian Peninsula (modern Spain + Portugal)
gradually "reconquered" territories from Muslim control.

**Time span: nearly 800 years (711-1492)**

- **711:** North African Berber/Arab Muslim forces crossed the Strait of Gibraltar,
  conquering most of the Iberian Peninsula within 7 years, establishing al-Andalus.
- **Around 722:** Christian remnant forces in northern mountain regions began resisting,
  considered the starting point of the Reconquista.
- **1095-1291:** The Crusades and Reconquista ran simultaneously —
  both "Christian world vs Islamic world" conflicts, but in different locations
  (Middle East vs Iberia).
- **1492:** Fall of Granada, the last Muslim stronghold in Iberia disappears —
  the same year Columbus first sailed to the Americas. The Spanish crown
  transferred victory funds from the Muslim wars into the "New World."

**Why does AP test Crusades and Reconquista together?**
Both used the same ideological framework: **the mirror image of "holy war" / jihad.**
The Pope granted plenary indulgences (indulgences) to Reconquista warriors too —
the same logic as the Crusades. This shows that the "Crusades" weren't an isolated
event, but a **religious-military mobilization pattern** operating simultaneously
on multiple Mediterranean fronts.

**Careful framing:** The Muslim-ruled al-Andalus period (711-1492) was one of
Europe's most advanced civilizations — Toledo and Córdoba were among Europe's
largest cities, where scholars translated Greek philosophy and Islamic science.
After the Reconquista ended, Muslims and Jews were expelled (the 1492 Edict of
Expulsion), and this zone of civilization subsequently declined.`,
      },
      xiaoweiNote: {
        cn: `这个考点容易和十字军混淆——它们是同期、同逻辑的两场战争，
只是地点不同。AP 选择题有时给一段关于伊比利亚的材料，
问你和"十字军运动"的关系。答案就是：两者都是同一种"神圣战争"框架的体现。

记忆口诀：**十字军 = 东边（耶路撒冷）；Reconquista = 西边（西班牙）。
同一个逻辑，两个战场，同一个时代。**`,
        en: `This exam point is easy to confuse with the Crusades — they were simultaneous
wars using the same logic, just in different locations. AP multiple choice sometimes
gives a passage about Iberia and asks about its connection to "the Crusader movement."
The answer: both were expressions of the same "holy war" framework.

Mnemonic: **Crusades = east (Jerusalem); Reconquista = west (Spain).
Same logic, two fronts, same era.**`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `那个骑士去打十字军，说是"为上帝"——但他也提到了弟弟没有土地，
还有东方的财富。

你觉得他真正的动机是什么？一个人可以同时"为神"和"为地"吗？
如果动机里有自私的成分，这场战争的"正义性"还算数吗？`,
      en: `The knight went on Crusade saying it was "for God" — but he also mentioned
his brother having no land and the wealth of the East.

What do you think his real motivation was? Can a person simultaneously act
"for God" and "for land"? If there's a self-interested component in the motive,
does the "justice" of the war still count?`,
      hintCn: `提示：历史学家把动机分成"声称的动机"（stated motivation）和
"实际的动机"（actual motivation）——两者可以同时存在，也可以相互矛盾。

角度一：中世纪的人不像现代人那样把"宗教"和"经济"分开——
在他们眼里，"为上帝打仗然后顺便得到土地"是一件事，不是两件事。

角度二：动机的"纯洁性"真的重要吗？
如果结果（发动了一场战争，屠杀了平民）是错的，
动机是纯粹的还是混杂的，对受害者来说有区别吗？

进阶思考：今天你能找到类似的例子吗——
有人做一件事，把"为了更高目标"和"个人利益"混在一起说？`,
      hintEn: `Hint: Historians distinguish between "stated motivation" and "actual motivation"
— both can coexist, and they can also contradict each other.

Angle 1: Medieval people didn't separate "religion" and "economics" the way
modern people do — in their view, "fighting for God and getting land along the way"
was one thing, not two.

Angle 2: Does the "purity" of motivation really matter?
If the outcome (launching a war, massacring civilians) was wrong,
does it make a difference to the victims whether the motivation was pure or mixed?

Going deeper: can you find similar examples today — someone doing something
while mixing "for a higher cause" and "personal benefit" into the same justification?`,
      conceptsActivated: ['crusader-motivations', 'feudal-system-crusade-connection'],
    },
    {
      id: 'q2',
      cn: `1099年，十字军攻入耶路撒冷后屠城。
1187年，萨拉丁（Saladin，库尔德裔苏丹）攻入同一座城市后，
禁止屠杀，允许基督徒居民交赎金离开，还为穷人豁免赎金。

同样是征服，行为完全不同。

"文明"是由一个人的宗教身份决定的，还是由他的行为决定的？
你能用 1099 和 1187 这两件事来回答这个问题吗？`,
      en: `In 1099, the Crusaders entered Jerusalem and carried out a massacre.
In 1187, Saladin (the Kurdish sultan) entered the same city and prohibited killing,
allowed Christian residents to pay ransom and leave, and even waived ransoms for the poor.

Same act of conquest, completely different behavior.

Is "civilization" determined by a person's religious identity, or by their actions?
Can you use the events of 1099 and 1187 to answer this question?`,
      hintCn: `提示：这道题有一个陷阱——"文明"（civilization）这个词本身是有问题的。
欧洲历史学家长期用"文明 vs 野蛮"来描述十字军 vs 伊斯兰，
但 1099 和 1187 的对比直接戳破了这个框架。

角度一：行为比身份更能定义"文明"——
萨拉丁的克制在当时欧洲基督教世界也获得了尊重，
连他的敌人都承认他"高贵"。

角度二：但是我们要小心"高尚的敌人"这种说法——
它可能也是一种刻板印象，把萨拉丁变成欧洲人证明"我们能客观"的工具。
萨拉丁是一个政治家，他的克制有战略计算，不只是"道德高尚"。

进阶思考：历史上有没有其他例子，证明"文明"是行为决定的，
而不是由你属于哪个宗教、哪个民族决定的？`,
      hintEn: `Hint: This question has a trap — the word "civilization" itself is problematic.
European historians long used "civilization vs barbarism" to describe Crusaders vs Islam,
but the contrast between 1099 and 1187 directly punctures that framework.

Angle 1: Behavior defines "civilization" better than identity —
Saladin's restraint earned respect even in Christian Europe; even his enemies
acknowledged he was "noble."

Angle 2: But be careful with the phrase "the noble enemy" —
it can also be a stereotype, turning Saladin into a tool that Europeans use to prove
"we can be objective." Saladin was a statesman; his restraint involved strategic
calculation, not just "moral superiority."

Going deeper: are there other historical examples proving that "civilization" is
determined by behavior rather than by which religion or ethnicity you belong to?`,
      conceptsActivated: ['saladin-1187', 'jerusalem-1099'],
    },
    {
      id: 'q3',
      cn: `十字军东征带来了医学、数学、天文学从伊斯兰世界流入欧洲。
历史课本经常把这个叫"文化交流"（cultural exchange）。

但是那些把知识带到欧洲的书，很多是十字军抢来的，或者是
从被征服城市的图书馆里拿走的。

你觉得"文化交流"这个词，用在十字军身上准确吗？
如果不准确，应该叫什么？
如果准确，"交流"的前提是什么？`,
      en: `The Crusades led to medical knowledge, mathematics, and astronomy flowing from
the Islamic world into Europe. History textbooks often call this "cultural exchange."

But many of the books that carried this knowledge to Europe were looted by Crusaders
or taken from the libraries of conquered cities.

Do you think "cultural exchange" is an accurate term for what happened during the Crusades?
If not, what should it be called?
If it is accurate, what are the conditions that make it "exchange"?`,
      hintCn: `提示："交流"这个词暗示双方是主动、对等、自愿的——
"我给你一些，你给我一些"。但如果一方是在被征服、被屠杀的情况下
"交出"了知识，这还算交流吗？

角度一：可以叫"文化传播"（cultural diffusion）——
知识确实从一个地方传到了另一个地方，但传播的方式不一定是平等的。

角度二：长期来看，双方确实有贸易往来、学者互访、翻译运动——
不是全部都是战争掠夺。那么"交流"对于这部分是准确的。

进阶思考：今天全球化时代，
你能找到"表面上是交流，实际上是不平等传播"的例子吗？
（比如：好莱坞电影进入中国市场，这是"文化交流"还是"文化输出"？）`,
      hintEn: `Hint: The word "exchange" implies both parties were active, equal, and voluntary —
"I give you some, you give me some." But if one party "gave up" knowledge while
being conquered and massacred, does that still count as exchange?

Angle 1: You could call it "cultural diffusion" —
knowledge did travel from one place to another, but the mode of transmission
wasn't necessarily equal.

Angle 2: Over the long term, there actually were trade relations, scholar visits,
and the Translation Movement between the two sides — not everything was war and plunder.
So "exchange" is accurate for that portion.

Going deeper: in today's globalization era, can you find examples of something that
looks like exchange on the surface but is actually unequal diffusion?
(For example: is Hollywood film entering the Chinese market "cultural exchange"
or "cultural export"?)`,
      conceptsActivated: ['cultural-exchange', 'saladin-1187', 'byzantine-perspective'],
    },
  ],
};

export default notebook;
