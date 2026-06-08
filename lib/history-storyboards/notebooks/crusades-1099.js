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

关键词：indulgence（赦罪）、Holy Land（圣地）、jihad（圣战）、
feudal system（封建制度）、Reconquista（收复失地运动）、
cultural exchange（文化交流）

老师说："十字军是一面镜子——你从哪个视角看，看到的不一样。
十字军骑士、耶路撒冷的穆斯林居民、拜占庭皇帝——
同一件事，三个人的感受完全不同。"

我先把这张单子记下来，等下读三条故事线，
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

Let me write this list down. After reading three storylines,
I'll come back and check whether I can explain each term.`,
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
      {
        nameCn: '狮心王理查',
        nameEn: 'Richard I "the Lionheart"',
        ipa: '/ˈrɪtʃərd ðə ˈlaɪənhɑːrt/',
        roleCn: '英国国王，率领第三次十字军与萨拉丁谈判',
        roleEn: 'English king who led the Third Crusade and negotiated with Saladin',
        mustKnow: true,
        audioKey: 'richard-lionheart',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'urban-ii-clermont',
      termCn: '乌尔班二世 / 克勒芒讲道',
      termEn: 'Pope Urban II / Council of Clermont',
      defCn: '教皇乌尔班二世是1095年号召第一次十字军东征的天主教教皇。他在法国克勒芒城发表演说，承诺参战者可以获得全赦——也就是所有罪行一次性赦免——从而点燃了整个欧洲的东征热情。',
      defEn: 'Pope Urban II was the Catholic pope who launched the First Crusade in 1095. He gave a speech in Clermont, France, promising full forgiveness of sins to anyone who joined — which sparked a massive military movement across Europe.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'crusader',
        nodeIds: ['crusader-N1', 'crusader-N2'],
        xiaoweiNote: {
          cn: `这个在骑士那条故事线里读过！1095年11月27日，法国克勒芒城（Clermont），
教皇乌尔班二世（Pope Urban II）站上木台，对着2000多人发表了一场改变欧洲的演说。

他说了三件事：
①土耳其人占领了圣地耶路撒冷（Holy Land），基督徒无法朝圣了
②谁参加十字军，就能获得全赦——拉丁文叫 indulgentia plenaria，意思是所有罪一次性全部清零
③听众喊出了"Deus vult！"（拉丁文：上帝旨意！），当场变成东征口号

**全赦这件事是核心考点。** 中世纪人最怕死后下地狱，全赦等于给他们一张"直接进天堂的票"。
对那个时代的人来说，这就是最有力的动员工具。

考点关键句：1095年克勒芒讲道是**第一次十字军东征的起点**，
教皇乌尔班二世的全赦承诺是十字军的核心宗教动机。`,
          en: `I read about this in the knight's storyline! On November 27, 1095,
Pope Urban II stood on a wooden platform in Clermont, France, and gave a speech
that changed Europe — in front of more than 2,000 people.

He said three things:
① Turks had taken the Holy Land (Jerusalem); Christians couldn't make pilgrimages
② Anyone who joined the Crusade would receive a plenary indulgence
   (indulgentia plenaria) — meaning all sins wiped clean, all at once
③ The crowd shouted "Deus vult!" (Latin: God wills it!), which became the Crusade's rallying cry

**The plenary indulgence is the key exam point.** Medieval people were terrified of hell after death.
A full pardon was basically a "direct ticket to heaven" — the most powerful
recruitment tool imaginable.

Key exam sentence: The 1095 Council of Clermont was the **starting point of the
First Crusade**. Pope Urban II's promise of plenary indulgence was the core
religious motivation.`,
        },
      },
    },

    {
      id: 'crusader-motivations',
      termCn: '十字军的复合动机',
      termEn: 'Crusader Motivations (Religious + Economic + Social)',
      defCn: '十字军的动机不是单纯的宗教信仰，而是宗教、经济、社会三类动机叠加在一起。很多骑士说是"为上帝"去打仗，但同时也想在东方得到土地和财富。AP考试最爱考这个"动机不纯"的问题。',
      defEn: 'Crusader motivations were not purely religious — they combined religion, economics, and social ambition. Many knights said they were fighting "for God," but also wanted land and wealth in the East. AP exams frequently test whether Crusader motives were truly religious or mixed.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'crusader',
        nodeIds: ['crusader-N3', 'crusader-N4'],
        xiaoweiNote: {
          cn: `骑士那条故事线里，那个骑士说自己是"为上帝"去打十字军——
但他也提到弟弟没有土地，还有东方的财富。
AP最喜欢考这个问题：**十字军的动机是纯宗教的吗？**

三类动机，各记一个关键词：

①**宗教动机**：全赦（罪得赦免）、朝圣、"解放"圣地
②**经济动机**：封建欧洲规定土地只传长子，这叫长子继承制（primogeniture）。
  次子、三子没有土地，去东方打仗才有机会抢到土地和财富
③**社会动机**：封建骑士文化崇尚战争荣耀，"去打仗"本身就很有吸引力

AP考题套路是这样的：给你一段原始史料，让你判断这个人去十字军
"主要是宗教动机"还是"主要是经济动机"。
**别只选一个**——答案要说"两者都有，但……"，然后用史料证明哪个更重要。`,
          en: `In the knight's storyline, the knight said he was going "for God" —
but he also mentioned his brother having no land and the wealth of the East.
AP loves testing this: **Were Crusader motivations purely religious?**

Three types of motivation, one keyword each:

① **Religious**: plenary indulgence (sin forgiven), pilgrimage, "liberating" the Holy Land
② **Economic**: feudal Europe's rule said land passed only to the eldest son
   (this is called primogeniture). Younger sons had no inheritance,
   so going east was their only "legal" shot at land and wealth
③ **Social**: feudal knight culture glorified warfare — "going to war" was itself attractive

The AP exam pattern: you'll get a primary source and be asked whether someone went
on Crusade "mainly for religious reasons" or "mainly for economic reasons."
**Don't pick just one.** Say "both, but…" and use the source to show which mattered more.`,
        },
      },
    },

    {
      id: 'jerusalem-1099',
      termCn: '1099年耶路撒冷屠城',
      termEn: 'Fall and Massacre of Jerusalem, 1099',
      defCn: '1099年7月15日，十字军攻破耶路撒冷城墙后，在接下来几天里屠杀了城内大量穆斯林和犹太居民。这件事后来成为伊斯兰世界凝聚反十字军情绪的标志性事件，也是AP考试最喜欢考"同一历史事件，不同视角"的典型案例。',
      defEn: 'On July 15, 1099, Crusaders broke through Jerusalem\'s walls and massacred large numbers of Muslim and Jewish residents over the following days. This event became a landmark moment that united the Islamic world against the Crusaders, and it is a classic AP exam case for how the same event looks completely different from different perspectives.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'aisha',
        nodeIds: ['aisha-N8', 'aisha-N9', 'aisha-N10', 'crusader-N10'],
        xiaoweiNote: {
          cn: `这个在骑士那条故事线和城里女孩那条故事线都读过——
两条线看同一件事，感受完全相反。

时间线：1099年7月15日，十字军攻破耶路撒冷城墙。
接下来几天，他们屠杀了城内大量穆斯林和犹太居民。

骑士那边说"城市被解放了"——那是他眼中的故事。
城里的女孩那边看到的是完全不同的现实。

**AP考点核心就是这个：同一历史事件，不同立场的人会用完全不同的词描述它。**
这是DBQ（文献分析题）的基本训练——你要能说出"来源A和来源B对同一件事的描述不同，
因为他们的身份/立场不同"。

还要记住：1099年的屠城后来成为伊斯兰世界的标志性悲剧。
正是这件事给萨拉丁后来崛起提供了民意基础——
人们愿意跟着他，是因为还记得1099年发生了什么。`,
          en: `This appeared in both the knight's storyline and the girl-in-the-city storyline —
the same event, completely opposite feelings.

Timeline: July 15, 1099 — Crusaders broke through Jerusalem's walls.
Over the following days, they massacred large numbers of Muslim and Jewish residents.

In the knight's storyline, he said the city was "liberated" — that was his story.
In the city girl's storyline, she saw a completely different reality.

**The AP exam core skill is exactly this: the same historical event gets described
in completely different words depending on who's telling the story.**
This is a fundamental DBQ skill — you need to say "Source A and Source B describe
the same event differently because their identities and positions are different."

Also remember: the 1099 massacre became a defining tragedy in the Islamic world.
It was precisely this event that built the popular support for Saladin's rise later —
people followed him because they still remembered what happened in 1099.`,
        },
      },
    },

    {
      id: 'byzantine-perspective',
      termCn: '拜占庭视角 / 阿莱克修斯一世',
      termEn: 'Byzantine Perspective / Alexios I',
      defCn: '拜占庭帝国（东罗马帝国）皇帝阿莱克修斯一世在1095年写信向教皇求援，只想借几千名雇佣兵抵挡突厥人。结果来了几万名有自己目的的十字军骑士，不听拜占庭指挥，还拒绝把打下的城市交还。这是考试经典案例：盟友变成了另一波威胁。',
      defEn: 'Byzantine Emperor Alexios I wrote to the Pope in 1095 asking for a few thousand mercenaries to stop the Turks. Instead, tens of thousands of Crusader knights arrived with their own agenda — they refused Byzantine command and kept conquered cities for themselves. This is a classic exam case: your allies becoming your next problem.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'alexios',
        nodeIds: ['alexios-N1', 'alexios-N5', 'alexios-N8', 'alexios-N12'],
        xiaoweiNote: {
          cn: `拜占庭皇帝那条故事线，讲的是阿莱克修斯一世（Alexios I Komnenos）的故事。
他是三条线里最会"算计"的角色，也是结局最讽刺的一个。

他的处境：1095年，塞尔柱突厥人已经打到今天的土耳其境内，
离首都君士坦丁堡（Constantinople）只有几百公里。
他给教皇写信，只求"几千名雇佣兵"。

他得到了什么：几万名有自己目的的十字军骑士。
他们不听拜占庭指挥，打下城市之后也不交还拜占庭。

**AP考点：十字军并没有帮拜占庭"收复失土"——他们更像是另一波入侵者。**
1204年第四次十字军甚至直接洗劫了君士坦丁堡本身（基督徒打基督徒！）。
这是历史上"盟友变劫匪"的经典案例，也说明动机不同的人凑在一起会走向哪里。`,
          en: `The Byzantine emperor's storyline follows Alexios I Komnenos.
He's the most calculating character across the three storylines — and the most ironic outcome.

His situation: by 1095, Seljuk Turks had pushed into modern-day Turkey,
only a few hundred kilometers from the capital Constantinople.
He wrote to the Pope asking for "a few thousand mercenaries."

What he got: tens of thousands of Crusader knights with their own agenda.
They refused Byzantine command and refused to hand over conquered cities.

**AP exam point: the Crusades didn't help Byzantium "recover lost territory" —
they were more like another wave of invaders.**
The Fourth Crusade in 1204 even directly sacked Constantinople (Christians attacking Christians!).
This is history's classic case of "allies becoming looters" — and shows what happens when
people with different agendas are forced to work together.`,
        },
      },
    },

    {
      id: 'saladin-1187',
      termCn: '萨拉丁 & 1187年耶路撒冷反攻',
      termEn: 'Saladin & Reconquest of Jerusalem, 1187',
      defCn: '萨拉丁（全名 Salah ad-Din Yusuf ibn Ayyub，1137-1193）是库尔德裔穆斯林将领，统一了伊斯兰世界后，在1187年先打赢哈丁战役，再夺回耶路撒冷。他进城后禁止屠杀，与1099年十字军屠城形成直接对比，这个对比是AP必考内容。',
      defEn: 'Saladin (full name Salah ad-Din Yusuf ibn Ayyub, 1137-1193) was a Kurdish Muslim military leader who unified the Islamic world, won the Battle of Hattin in 1187, then retook Jerusalem. His no-massacre entry into the city is a direct contrast to the 1099 Crusader massacre — this contrast is required AP World History content.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'aisha', nodeId: 'aisha-N11', context: 'Aisha 晚年在故事尾声提到萨拉丁的名字' },
        ],
      },
      standaloneText: {
        cn: `萨拉丁（Saladin，全名 Salah ad-Din Yusuf ibn Ayyub，1137-1193），
库尔德裔穆斯林将领，阿尤布王朝（Ayyubid dynasty）的创立者。

**他是怎么一步步崛起的：**
1169年控制埃及，1174年合并叙利亚。他把之前分裂、互相内斗的伊斯兰世界统一起来，
建立了一支能对抗十字军的统一力量。

**决定性一战——哈丁战役：**
1187年7月4日，**哈丁战役**（Battle of Hattin，也译"哈廷"）。
他用了一个聪明的战术：引诱十字军骑士离开有水的营地，走进沙漠，
然后切断他们的水源，在炎热和干渴中把对方主力打垮。

3个月后，1187年10月2日，**萨拉丁重新夺回耶路撒冷**——距离十字军占领这座城已过去88年。

**AP最重要的考点——行为对比：**
- **1099年十字军进入耶路撒冷**：屠城，大量平民遇难
- **1187年萨拉丁进入耶路撒冷**：禁止屠杀，允许基督徒居民交赎金离开，
  甚至为穷人豁免赎金

这个对比几乎是AP每年必考的内容。考题问的不是"谁赢了"，
而是"**谁的行为更文明**"——萨拉丁的克制让他连欧洲基督教世界也尊敬他，
被称为"高贵的敌人"。

**别只记1187年：**
后来第三次十字军（1189-1192）由英国狮心王理查（Richard I "the Lionheart"）率领来夺回耶路撒冷。
萨拉丁和理查最终谈判达成协议：耶路撒冷归穆斯林控制，但基督徒可以自由朝圣。
这说明战场之外还有外交——AP也会考这个。`,
        en: `Saladin (full name Salah ad-Din Yusuf ibn Ayyub, 1137-1193) was a Kurdish
Muslim military leader and founder of the Ayyubid dynasty.

**How he rose to power:**
By 1169 he controlled Egypt; by 1174 he absorbed Syria. He unified the previously
divided and feuding Islamic world, building a force that could genuinely challenge
the Crusaders.

**The decisive battle — Battle of Hattin:**
July 4, 1187 — the **Battle of Hattin**. He used a smart tactic: lured the Crusader
knights away from their water supply into the desert, cut them off, then defeated
the main Crusader army through heat and thirst.

Three months later, on October 2, 1187, **Saladin retook Jerusalem** —
88 years after the Crusaders had seized it.

**The most important AP point — the behavioral contrast:**
- **1099, Crusaders enter Jerusalem**: massacre, large numbers of civilians killed
- **1187, Saladin enters Jerusalem**: prohibits killing, allows Christian residents
  to pay a ransom and leave, even waiving the ransom for those who were poor

This contrast appears on AP exams almost every year. The question isn't "who won" —
it's "**whose behavior was more civilized**." Saladin's restraint earned him respect
even in Christian Europe, where he was called "the noble enemy."

**Don't just memorize 1187:**
The Third Crusade (1189-1192) was led by England's Richard I ("the Lionheart") to
try to retake Jerusalem. Saladin and Richard ultimately negotiated a deal:
Jerusalem would stay under Muslim control, but Christians could make pilgrimages freely.
This shows diplomacy existed beyond the battlefield — AP tests this too.`,
      },
      xiaoweiNote: {
        cn: `老师说萨拉丁 vs 1099年屠城的对比几乎每年都考——
选择题会给两段描述，让你判断哪个是十字军的行为，哪个是萨拉丁的行为。
**别被"宗教"这个标签骗了，行为才是考点。**

我的记忆口诀：**1099 = 十字军进，屠城；1187 = 萨拉丁进，不杀。**
年份 + 行为 + 结果，三合一记忆。`,
        en: `Teacher said the Saladin vs. 1099 massacre contrast is tested almost every year —
multiple choice will give you two descriptions and ask which one was Crusader behavior
and which was Saladin's. **Don't be fooled by the "religion" label — behavior is the exam point.**

My mnemonic: **1099 = Crusaders enter, massacre; 1187 = Saladin enters, no killing.**
Year + behavior + outcome — memorize all three together.`,
      },
    },

    {
      id: 'cultural-exchange',
      termCn: '十字军与伊斯兰文化交流',
      termEn: 'Crusades & Islamic-European Cultural Exchange',
      defCn: '十字军东征持续了将近200年（1095-1291）。在这段时间里，大量伊斯兰世界的知识和商品流入欧洲，包括医学、数学（阿拉伯数字和"零"的概念）、天文学，以及香料、丝绸、棉花等商品。但这种"交流"不完全是自愿的——很多知识是战争期间通过征服和抢掠带走的。',
      defEn: 'The Crusades lasted nearly 200 years (1095-1291). During this time, large amounts of Islamic knowledge and goods flowed into Europe — including medicine, mathematics (Arabic numerals and the concept of zero), astronomy, and trade goods like spices, silk, and cotton. But this "exchange" was not entirely voluntary — much knowledge entered Europe through conquest and plunder.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `十字军东征（1095-1291）打了将近200年。这期间欧洲和伊斯兰世界长期处于接触状态——
战场上是敌人，贸易上有时是生意伙伴。

**从伊斯兰世界流入欧洲的知识和商品（AP必考清单，按类记）：**

**① 医学：**
伊斯兰医学比当时欧洲领先约500年。
伊本·西那（Ibn Sina，西方又叫他 Avicenna，980-1037）写了一本《医学典籍》
（The Canon of Medicine），成为欧洲大学医学院的教材，用到17世纪。
伊斯兰外科技术，比如消毒方法和麻醉草药，也传入了欧洲。

**② 数学：**
阿拉伯数字（0到9，包括"零"这个概念）从伊斯兰世界传入欧洲。
在这之前，欧洲人还在用罗马数字（XIV、XXI……），计算非常麻烦。
"零"传入欧洲之后，整个数学体系才变得好用。

**③ 天文学：**
伊斯兰天文学家的星图和计算方法传入欧洲，后来支撑了大航海时代的导航。
"algebra"（代数）这个词本身就来自阿拉伯语"al-jabr"。

**④ 商品与贸易：**
香料（胡椒、肉桂、丁香）、丝绸、棉花、糖、玻璃制造技术、造纸术
（造纸术从中国经伊斯兰世界传入欧洲）——这些都通过十字军时期的贸易网络进入欧洲市场。

**关键提醒——别简化成"和平交流"：**
很多知识是通过征服、劫掠，以及之后的翻译运动（12-13世纪，学者把阿拉伯语书籍译成拉丁语）进入欧洲的。
换句话说：**欧洲获得了知识，但伊斯兰世界付出的代价是战争破坏。**
AP的DBQ题会问：这算"文化交流"还是"顺手带走的战利品知识"？你要能答这个。`,
        en: `The Crusades (1095-1291) lasted nearly 200 years. During this time, Europe and the
Islamic world remained in sustained contact — enemies on the battlefield, sometimes
trading partners in commerce.

**Knowledge and goods that flowed from the Islamic world into Europe (AP required list, by category):**

**① Medicine:**
Islamic medicine was roughly 500 years ahead of Europe at the time.
Ibn Sina (also called Avicenna in the West, 980-1037) wrote The Canon of Medicine,
which became the standard textbook at European medical schools — used until the 1600s.
Islamic surgical techniques, including antisepsis methods and herbal anesthesia, also entered Europe.

**② Mathematics:**
Arabic numerals (0 through 9, including the concept of zero) entered Europe from the Islamic world.
Before this, Europeans still used Roman numerals (XIV, XXI…), which made calculation a real headache.
Once zero arrived, the entire number system became workable.

**③ Astronomy:**
Islamic astronomers' star charts and calculation methods entered Europe,
later supporting navigation during the Age of Exploration.
The word "algebra" itself comes from the Arabic "al-jabr."

**④ Goods and Trade:**
Spices (pepper, cinnamon, cloves), silk, cotton, sugar, glassmaking techniques,
and papermaking (which traveled from China through the Islamic world to Europe) —
all entered European markets through Crusade-era trade networks.

**Important framing — don't oversimplify this as "peaceful exchange":**
Much of this knowledge entered Europe through conquest, plunder, and the Translation
Movement (12th-13th centuries, when scholars translated Arabic texts into Latin).
Put simply: **Europe gained knowledge, but the Islamic world paid the price in war and destruction.**
AP DBQ questions will ask: was this "cultural exchange" or "knowledge seized as spoils of war"?
You need to be able to answer that.`,
      },
      xiaoweiNote: {
        cn: `这个考点很容易出DBQ——他们会给你一段描述欧洲中世纪大学在学伊斯兰医学的材料，
让你分析"十字军对欧洲的长期影响"。

我的记忆框架：**医学 · 数学 · 天文学 · 贸易** — 四类，各记一个代表词：
Avicenna（医学）、零/代数（数学）、星图（天文）、香料/丝绸（贸易）。`,
        en: `This topic appears frequently in DBQs — they'll give you a source describing
medieval European universities studying Islamic medicine, and ask you to analyze
"the long-term impact of the Crusades on Europe."

My memory framework: **Medicine · Math · Astronomy · Trade** — four categories,
one keyword each: Avicenna (medicine), zero/algebra (math),
star charts (astronomy), spices/silk (trade).`,
      },
    },

    {
      id: 'feudal-system-crusade-connection',
      termCn: '封建制度与十字军动机',
      termEn: 'Feudal System & Crusader Motivation',
      defCn: '封建制度（feudal system）是中世纪欧洲的社会结构：国王把土地分给大贵族，大贵族分给小骑士，最底层是农奴。其中有一条关键规则叫长子继承制（primogeniture）——土地只传给长子。次子、三子没有土地继承权，这直接推动了大量骑士参加十字军，去东方抢土地。',
      defEn: 'The feudal system was medieval Europe\'s social structure: kings gave land to great lords, lords gave land to knights, and serfs worked the land at the bottom. A key rule called primogeniture said land passed only to the eldest son. Younger sons had no inheritance rights — which directly pushed large numbers of knights to join the Crusades and seek land in the East.',
      standardRef: ['CA HSS 7.6.1', 'AP World KC-1.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'crusader', nodeId: 'crusader-N3', context: '骑士提到自己是家中次子，无法继承封地' },
        ],
      },
      standaloneText: {
        cn: `要理解为什么那么多欧洲骑士愿意去十字军，先要搞懂封建制度（feudal system）。

**封建制度的基本结构：**
国王 → 大贵族（lord）→ 小贵族（vassal / knight）→ 农奴（serf）

土地是这套制度的核心。骑士向领主效忠换土地，领主向国王效忠换更大的封地。

**为什么次子特别想去十字军——长子继承制（primogeniture）：**
封建欧洲有一条铁规则：土地只传给家里最大的儿子（长子）。
次子、三子……没有土地继承权。他们有三条路：
①做教士（进教会）
②做雇佣兵（帮别人打仗）
③去十字军——**这是唯一一条"合法"拿到自己土地的路线**

十字军给了没有土地的骑士一个机会：在中东建立自己的封建领地。
比如安提阿公国（Principality of Antioch）、耶路撒冷王国（Kingdom of Jerusalem）——
这些"十字军国家"（Crusader States）实际上就是封建制度在中东的复制品。

**考点关键句：** 封建制度的长子继承制造成了大量"剩余骑士"，
他们的经济动机与宗教热情叠加，成为十字军兵力的重要来源。

这解释了为什么"为上帝而战"和"为土地而战"不矛盾——
在中世纪骑士眼里，两件事可以同时成立。`,
        en: `To understand why so many European knights were willing to go on Crusade,
you first need to understand the feudal system.

**The basic feudal structure:**
King → Great lords → Lesser nobles (vassals / knights) → Serfs

Land was the central asset of the whole system. Knights pledged loyalty to lords
in exchange for land; lords pledged loyalty to kings in exchange for larger estates.

**Why second sons especially wanted to go on Crusade — primogeniture:**
Feudal Europe had one iron rule: land passed only to the oldest son (the eldest).
Second sons, third sons — no inheritance rights. They had three options:
① Become clergy (join the Church)
② Become mercenaries (fight for hire)
③ Go on Crusade — **the only "legal" path to getting their own land**

The Crusades gave landless knights an opportunity: establish their own feudal territories
in the Middle East. The Principality of Antioch and the Kingdom of Jerusalem
are examples of "Crusader States" — essentially copies of the feudal system
transplanted to the Middle East.

**Key exam sentence:** Primogeniture produced large numbers of "surplus knights."
Their economic motives combined with religious enthusiasm to become a major source of Crusader manpower.

This explains why "fighting for God" and "fighting for land" weren't contradictions —
in a medieval knight's mind, both could be true at the same time.`,
      },
      xiaoweiNote: {
        cn: `这个考点和"十字军动机"那张卡要一起记：
封建制度 → 次子无地 → 十字军提供了"合法抢地"的机会 → 经济动机 + 宗教动机叠加。

记住：**primogeniture（长子继承制）**这个词——选择题里可能直接出现。`,
        en: `Memorize this exam point together with the "Crusader Motivations" card:
feudal system → second sons have no land → Crusades offered a "legal" path to land
→ economic motive + religious motive combined.

Remember: **primogeniture** — this word can appear directly in multiple choice questions.`,
      },
    },

    {
      id: 'reconquista',
      termCn: 'Reconquista / 伊比利亚半岛收复运动',
      termEn: 'Reconquista / Iberian Reconquest',
      defCn: 'Reconquista（雷孔基斯塔，西班牙语"收复失地"）指711年到1492年，伊比利亚半岛（今天的西班牙和葡萄牙）的基督教王国逐步把穆斯林政权从这片土地上赶走的过程。它和十字军东征同一时代、同一套"神圣战争"逻辑，只是战场在西边。',
      defEn: 'Reconquista (Spanish for "reconquest") refers to the 711-1492 process by which Christian kingdoms in the Iberian Peninsula (modern Spain and Portugal) gradually pushed out Muslim rulers. It ran at the same time as the Crusades and used the same "holy war" logic — just on the western front instead of the Middle East.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `Reconquista（雷孔基斯塔，西班牙语："收复失地"），
指711年到1492年，伊比利亚半岛（今天的西班牙+葡萄牙）
基督教王国从穆斯林控制区逐步"收复"领土的过程。

**时间跨度：将近800年（711-1492）**

重要时间节点：

①**711年：** 北非柏柏尔和阿拉伯穆斯林军队越过直布罗陀海峡，
7年内占领伊比利亚半岛大部分地区，建立安达卢斯（al-Andalus）。

②**722年前后：** 基督教残余势力在北部山区开始反抗，
这是Reconquista的起点。

③**1095-1291年：** 十字军东征和Reconquista同期进行——
都是"基督教世界 vs 伊斯兰世界"的冲突，但地点不同：
东边是耶路撒冷，西边是伊比利亚半岛。

④**1492年：** 格拉纳达（Granada）陷落，穆斯林在伊比利亚的最后据点消失——
同年哥伦布首航美洲。西班牙王室把打赢穆斯林战争省下来的资源，
转手投进了"新世界"的探索。

**为什么AP要把十字军和Reconquista放在一起考？**
两者用了同一套意识形态框架：**神圣战争**。
教皇对Reconquista的战士也给予全赦（indulgence）——和十字军逻辑一模一样。
这说明"十字军"不是孤立事件，而是一种**宗教动员配军事行动的模式**，
在地中海东西两端同时运作。

**别忘了安达卢斯的另一面：**
穆斯林统治时期（711-1492）的安达卢斯，是当时欧洲最先进的文明之一。
托莱多（Toledo）和科尔多瓦（Córdoba）是欧洲最大的城市，
学者在那里把希腊哲学著作和伊斯兰科学翻译成拉丁语。
1492年Reconquista结束后，穆斯林和犹太人被驱逐出境，
这片文明地带随之衰落。`,
        en: `Reconquista (Spanish: "reconquest") refers to the 711-1492 process
by which Christian kingdoms in the Iberian Peninsula (modern Spain and Portugal)
gradually "reconquered" territories from Muslim control.

**Time span: nearly 800 years (711-1492)**

Key turning points:

① **711:** North African Berber and Arab Muslim forces crossed the Strait of Gibraltar.
Within 7 years they controlled most of the Iberian Peninsula, establishing al-Andalus.

② **Around 722:** Christian remnant forces in northern mountain regions began resisting.
This is considered the starting point of the Reconquista.

③ **1095-1291:** The Crusades and the Reconquista ran simultaneously —
both were "Christian world vs. Islamic world" conflicts,
but in different locations: the Middle East to the east, the Iberian Peninsula to the west.

④ **1492:** Granada fell — the last Muslim stronghold in Iberia disappeared.
That same year, Columbus first sailed to the Americas.
The Spanish crown redirected the resources freed up from the Muslim wars into exploring the "New World."

**Why does AP test Crusades and Reconquista together?**
Both used the same ideological framework: **holy war**.
The Pope granted plenary indulgences to Reconquista warriors too — the exact same
logic as the Crusades. This shows that "the Crusades" were not a one-off event
but rather a **pattern of religious mobilization paired with military action**,
operating simultaneously on both sides of the Mediterranean.

**Don't forget the other side of al-Andalus:**
The Muslim-ruled al-Andalus period (711-1492) was one of Europe's most advanced civilizations.
Toledo and Córdoba were among Europe's largest cities, where scholars translated Greek
philosophy and Islamic science into Latin. After the Reconquista ended in 1492,
Muslims and Jews were expelled, and this zone of learning subsequently declined.`,
      },
      xiaoweiNote: {
        cn: `这个考点容易和十字军混淆——它们是同期、同逻辑的两场战争，只是地点不同。
AP选择题有时给一段关于伊比利亚半岛的材料，问你和"十字军运动"的关系。
答案就是：两者都是同一种"神圣战争"框架的体现。

记忆口诀：**十字军 = 东边（耶路撒冷）；Reconquista = 西边（西班牙）。
同一个逻辑，两个战场，同一个时代。**`,
        en: `This exam point is easy to mix up with the Crusades — they were simultaneous
wars using the same logic, just in different locations.
AP multiple choice sometimes gives a passage about Iberia and asks about its
connection to "the Crusader movement."
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
      cn: `那个骑士去打十字军，说是"为上帝"——
但他也提到了弟弟没有土地，还有东方的财富。

你觉得他真正的动机是什么？
一个人可以同时"为神"和"为地"吗？
如果动机里有自私的成分，这场战争的"正义性"还算数吗？`,
      en: `The knight went on Crusade saying it was "for God" —
but he also mentioned his brother having no land and the wealth of the East.

What do you think his real motivation was?
Can a person simultaneously act "for God" and "for land"?
If there's a self-interested part of the motive, does the "justice" of the war still hold up?`,
      hintCn: `提示：历史学家把动机分成"声称的动机"（stated motivation）和
"实际的动机"（actual motivation）——两者可以同时存在，也可以互相矛盾。

角度一：中世纪的人不像现代人那样把"宗教"和"经济"分开——
在他们眼里，"为上帝打仗然后顺便得到土地"是一件事，不是两件事。

角度二：动机的"纯粹性"真的重要吗？
如果结果（发动了一场战争，屠杀了平民）是错的，
动机是纯粹的还是混杂的，对受害者来说有区别吗？

进阶思考：今天你能找到类似的例子吗——
有人做一件事，把"为了更高目标"和"个人利益"混在一起说？`,
      hintEn: `Hint: Historians distinguish between "stated motivation" and "actual motivation"
— both can coexist, and they can also contradict each other.

Angle 1: Medieval people didn't separate "religion" and "economics" the way
modern people do — in their view, "fighting for God and getting land along the way"
was one thing, not two things.

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
你能用1099和1187这两件事来回答这个问题吗？`,
      en: `In 1099, the Crusaders entered Jerusalem and carried out a massacre.
In 1187, Saladin (the Kurdish sultan) entered the same city,
prohibited killing, allowed Christian residents to pay a ransom and leave,
and even waived the ransom for the poor.

Same act of conquest — completely different behavior.

Is "civilization" determined by a person's religious identity, or by their actions?
Can you use the events of 1099 and 1187 to answer this question?`,
      hintCn: `提示：这道题有一个陷阱——"文明"（civilization）这个词本身是有问题的。
欧洲历史学家长期用"文明 vs 野蛮"来描述十字军 vs 伊斯兰，
但1099和1187的对比直接戳破了这个框架。

角度一：行为比身份更能定义"文明"——
萨拉丁的克制在当时欧洲基督教世界也获得了尊重，连他的敌人都承认他"高贵"。

角度二：但是我们要小心"高尚的敌人"这种说法——
它可能也是一种刻板印象，把萨拉丁变成欧洲人证明"我们能客观"的工具。
萨拉丁是一个政治家，他的克制有战略计算，不只是"道德高尚"。

进阶思考：历史上有没有其他例子，证明"文明"是行为决定的，
而不是由你属于哪个宗教、哪个民族决定的？`,
      hintEn: `Hint: This question has a trap — the word "civilization" itself is problematic.
European historians long used "civilization vs. barbarism" to describe Crusaders vs. Islam,
but the contrast between 1099 and 1187 directly breaks that framework.

Angle 1: Behavior defines "civilization" better than identity —
Saladin's restraint earned respect even in Christian Europe; even his enemies
acknowledged he was "noble."

Angle 2: But be careful with the phrase "the noble enemy" —
it can also be a stereotype, turning Saladin into a tool that Europeans use to prove
"we can be objective." Saladin was a statesman; his restraint involved strategic
calculation, not just moral superiority.

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

But many of the books that carried this knowledge to Europe were looted by Crusaders,
or taken from the libraries of conquered cities.

Do you think "cultural exchange" is an accurate term for what happened during the Crusades?
If not, what should it be called?
If it is accurate, what conditions make something a real "exchange"?`,
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
      hintEn: `Hint: The word "exchange" implies both parties were active, equal, and willing —
"I give you some, you give me some." But if one party "gave up" knowledge while
being conquered and massacred, does that still count as exchange?

Angle 1: You could call it "cultural diffusion" —
knowledge did travel from one place to another, but the way it traveled
wasn't necessarily equal.

Angle 2: Over the long term, there actually were trade relationships, scholar visits,
and the Translation Movement between the two sides — not everything was war and plunder.
So "exchange" is accurate for that portion.

Going deeper: in today's era of globalization, can you find examples of something
that looks like exchange on the surface but is actually unequal diffusion?
(For example: is Hollywood film entering the Chinese market "cultural exchange"
or "cultural export"?)`,
      conceptsActivated: ['cultural-exchange', 'saladin-1187', 'byzantine-perspective'],
    },
  ],
};

export default notebook;
