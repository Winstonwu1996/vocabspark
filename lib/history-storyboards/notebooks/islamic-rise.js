// ─── 同伴笔记本架构 v1 · The Rise of Islam ───────────────────────
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
//   - storyboard 提供情感锚点（马蒙 / 花剌子米 / 法蒂玛三条线）
//   - notebook 提供考点闭环（穆罕默德生平 / 五功 / Hijra / 早期扩张 / 哈里发制度）
//
// 课纲对齐：
//   - AP World History KC-1.1, KC-1.2
//   - California HSS 7.2.1, 7.2.2, 7.2.3, 7.2.4
//   - 弥补 islamic-rise 课纲覆盖率从 38% → ~95%
//
// schemaVersion: 1 · notebookVersion: islamic-rise-v1

export var notebook = {
  topicId: 'islamic-rise',
  topicNameCn: '伊斯兰文明兴起',
  topicNameEn: 'The Rise of Islam',
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
    cn: `今天要学伊斯兰文明兴起——大概 600 年到 900 年这段。老师说这个单元考点超多，让我先把名字和术语写下来再读故事。

人名清单：
穆罕默德（Muhammad，读 /mʊˈhæməd/），马蒙（al-Ma'mun），花剌子米（al-Khwarizmi），法蒂玛·菲赫里（Fatima al-Fihri）

地名清单：
麦加（Mecca），麦地那（Medina）

术语清单：
伊斯兰五功（Five Pillars）、哈里发（Caliph）、阿巴斯王朝（Abbasid）、智慧宫（Bayt al-Hikma）、622 年希吉拉（Hijra）

老师还提醒我：这一单元有很多名字很拗口，先把发音标好，考试选择题会直接出这些人名。我先用这张清单做预习，读完三个故事视角再回来对照，看我能解释几个。`,
    en: `Today we're studying the Rise of Islam — roughly 600 to 900 CE. Teacher said this unit has tons of exam content, so she told us to write down names and terms before reading the stories.

Name list:
Muhammad (/mʊˈhæməd/), al-Ma'mun, al-Khwarizmi, Fatima al-Fihri (/ˈfɑːtɪmə æl ˈfɪhri/)

Place names:
Mecca (/ˈmɛkə/), Medina (/məˈdiːnə/)

Term list:
Five Pillars of Islam, Caliph (/ˈkeɪlɪf/), Abbasid dynasty (/əˈbæsɪd/), House of Wisdom (Bayt al-Hikma), Hijra (622 CE migration)

Teacher reminded me: so many names in this unit are hard to pronounce — mark the pronunciation first, because multiple choice tests will use the actual names. I'll use this list to preview, then come back after the three story perspectives and see how many I can explain.`,
    keyTerms: [
      { cn: '伊斯兰五功', en: 'Five Pillars of Islam' },
      { cn: '希吉拉（迁徙）', en: 'Hijra (migration)' },
      { cn: '哈里发', en: 'Caliph' },
      { cn: '智慧宫', en: 'Bayt al-Hikma / House of Wisdom' },
      { cn: '代数学', en: 'algebra' },
      { cn: '翻译运动', en: 'Translation Movement' },
      { cn: '伊斯兰黄金时代', en: 'Islamic Golden Age' },
      { cn: '阿巴斯王朝', en: 'Abbasid Caliphate' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '穆罕默德',
        nameEn: 'Muhammad',
        ipa: '/mʊˈhæməd/',
        roleCn: '伊斯兰教创始人，先知',
        roleEn: 'Founder of Islam, the Prophet',
        mustKnow: true,
        audioKey: 'muhammad',
      },
      {
        nameCn: '马蒙',
        nameEn: "al-Ma'mun",
        ipa: '/æl mæˈmuːn/',
        roleCn: '阿巴斯王朝第七任哈里发，智慧宫创办者',
        roleEn: 'Seventh Abbasid Caliph, founder of the House of Wisdom',
        mustKnow: true,
        audioKey: 'al-mamun',
      },
      {
        nameCn: '花剌子米',
        nameEn: 'al-Khwarizmi',
        ipa: '/æl ˈxwɑːrɪzmi/',
        roleCn: '数学家，代数创始人（algorithm 一词来源）',
        roleEn: 'Mathematician, founder of algebra (origin of the word "algorithm")',
        mustKnow: true,
        audioKey: 'al-khwarizmi',
      },
      {
        nameCn: '法蒂玛·菲赫里',
        nameEn: 'Fatima al-Fihri',
        ipa: '/ˈfɑːtɪmə æl ˈfɪhri/',
        roleCn: '世界最早大学 al-Qarawiyyin 创办者（859 年，摩洛哥）',
        roleEn: "Founder of al-Qarawiyyin (859 CE, Morocco), world's oldest university",
        mustKnow: true,
        audioKey: 'fatima-al-fihri',
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：穆罕默德生平（standaloneText，故事未覆盖）────────
    {
      id: 'muhammad-and-islam',
      termCn: '穆罕默德 / 伊斯兰教起源',
      termEn: 'Muhammad / Origins of Islam',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.2.1', 'CA HSS 7.2.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `穆罕默德（伊斯兰教创始人）约 570 年生于阿拉伯半岛西部的麦加（Mecca）。那时麦加是个繁忙的商贸城市，也是多神教的朝圣中心，城里的大商人靠管理神庙和迎接朝圣者赚钱。

他本人是商人，40 岁那年（约 610 年），他在麦加附近的山洞里独自冥想，第一次收到了天使加百列传来的神启。他开始向城里人传播这个信息：**只有一个神，就是安拉（Allah）**，而他是安拉的先知。

这话触怒了麦加的权贵。他们不想让人们放弃多神教——那会断了他们的香火钱。于是穆罕默德和早期信徒开始受到迫害。

**622 年**，他带着信众迁徙到麦地那（Medina），这次迁徙叫做**希吉拉（Hijra）**，是伊斯兰历法的纪元起点——就像公历的"耶稣诞生年"一样，伊斯兰世界把 622 年定为元年。

在麦地那，穆罕默德既是宗教领袖，也是政治领袖，建立了第一个伊斯兰社区（ummah）。**630 年**，他带兵重新占领麦加，清除卡巴（Kaaba）神庙里的偶像，将其献给安拉。

**632 年**，穆罕默德在麦地那去世，没有留下明确的继承人指定，这引发了后来的分裂。`,
        en: `Muhammad (founder of Islam) was born around 570 CE in Mecca, a city on the western Arabian Peninsula. At the time, Mecca was a busy trade hub and a center for polytheistic pilgrimage — wealthy merchants profited from managing the shrines and receiving pilgrims.

Muhammad himself was a merchant. Around age 40 (approximately 610 CE), while meditating alone in a cave near Mecca, he received the first divine revelation through the angel Gabriel. He began delivering this message to the city: **there is only one God, Allah**, and he was Allah's prophet.

This angered Mecca's elite. They didn't want people abandoning polytheism — that would cut off their income from shrine management. Muhammad and his early followers began to face persecution.

**In 622 CE**, he led his followers to migrate to Medina. This migration is called the **Hijra**, and it marks the starting point of the Islamic calendar — just as the Western calendar begins with "the year of Christ's birth," the Islamic world set 622 CE as Year One.

In Medina, Muhammad was both religious and political leader, establishing the first Islamic community (ummah). **In 630 CE**, he led forces back to retake Mecca, cleared the Kaaba shrine of idols, and dedicated it to Allah.

**In 632 CE**, Muhammad died in Medina without clearly designating a successor — a gap that would lead to later divisions within Islam.`,
      },
      xiaoweiNote: {
        cn: `老师说这个必考——穆罕默德的时间线要记清楚：**约 570 年生、610 年第一次启示、622 年 Hijra（这个最重要！）、632 年去世**。

我的记忆口诀：**570-610-622-632**，每次加的数字越来越小：先加 40，再加 12，再加 10。这样不容易记混。`,
        en: `Teacher said this is guaranteed on the test — memorize Muhammad's timeline: **born ~570 CE, first revelation ~610 CE, Hijra 622 CE (most important!), died 632 CE.**

My mnemonic: **570-610-622-632** — the gaps keep shrinking: first add 40, then 12, then 10. That makes it harder to mix up.`,
      },
    },

    // ── 卡 2：伊斯兰五功（standaloneText，故事未覆盖）──────────
    {
      id: 'five-pillars',
      termCn: '伊斯兰五功',
      termEn: 'Five Pillars of Islam',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.2.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `伊斯兰五功（Five Pillars of Islam）是每位穆斯林必须履行的五项核心宗教义务，是伊斯兰信仰的骨架。

**第一功：Shahada（清真言）**——证言。核心表述是："万物非主，唯有安拉；穆罕默德是安拉的使者。"任何人只要当众诵念这句话，就成为穆斯林。这是入教的门槛，也是每天礼拜的开始。

**第二功：Salat（礼拜）**——一天五次朝着麦加方向礼拜，时间固定（黎明、正午、下午、日落、夜晚）。礼拜前需洗净身体（wudu）。全球穆斯林同步礼拜，是一种跨越国界的统一仪式。

**第三功：Zakat（天课）**——按年收入一定比例（传统为 2.5%）捐给穷人。不是自愿捐款，而是宗教义务，类似"宗教税"。AP 考点：Zakat 体现伊斯兰社会的**经济平等**理想。

**第四功：Sawm（斋戒）**——伊斯兰历第九个月（Ramadan/斋月）期间，从日出到日落不吃不喝，包括不抽烟、不发生性关系。斋月是一年中最重要的宗教月份，斋月结束后有开斋节（Eid al-Fitr）。

**第五功：Hajj（朝圣）**——有能力的穆斯林一生中至少一次前往麦加朝圣，固定在伊斯兰历第十二个月进行。全球每年约 200 万人同时聚集麦加。朝圣结束后有宰牲节（Eid al-Adha）。`,
        en: `The Five Pillars of Islam are the five core religious duties every Muslim must fulfill — the skeletal structure of Islamic faith.

**First Pillar: Shahada (Declaration of Faith)** — Testimony. The core phrase: "There is no god but Allah; Muhammad is the messenger of Allah." Anyone who recites this publicly before witnesses becomes a Muslim. It's the threshold for entering the faith and begins every daily prayer.

**Second Pillar: Salat (Prayer)** — Pray five times daily facing Mecca, at set times (dawn, midday, afternoon, sunset, night). Requires ritual washing (wudu) beforehand. Muslims worldwide pray in unison — a synchronized ritual that crosses all borders.

**Third Pillar: Zakat (Almsgiving)** — Donate a set percentage of annual savings (traditionally 2.5%) to the poor. Not a voluntary contribution — it's a religious obligation, like a "religious tax." AP exam point: Zakat embodies Islam's ideal of **economic equality**.

**Fourth Pillar: Sawm (Fasting)** — During Ramadan (the ninth month of the Islamic calendar), abstain from eating, drinking, smoking, and sexual relations from sunrise to sunset. Ramadan is the most important religious month of the year; its end is celebrated with Eid al-Fitr.

**Fifth Pillar: Hajj (Pilgrimage)** — Every Muslim who is physically and financially able must make at least one pilgrimage to Mecca in their lifetime, during the twelfth month of the Islamic calendar. About 2 million people gather in Mecca annually. The pilgrimage ends with Eid al-Adha.`,
      },
      xiaoweiNote: {
        cn: `五功考试肯定出。我的记忆口诀：**"证-拜-课-斋-朝"**，顺序和英文 **S-S-Z-S-H** 对应（Shahada-Salat-Zakat-Sawm-Hajj）。

选择题陷阱：如果题目问"哪项体现了伊斯兰的平等主义"，答 **Zakat（天课）**，不要选 Hajj——Hajj 体现的是统一信仰，Zakat 才是直接给穷人钱。`,
        en: `Five Pillars will definitely be on the test. My mnemonic: **S-S-Z-S-H** (Shahada-Salat-Zakat-Sawm-Hajj) — "Statement, Salat, Zakat, Sawm, Hajj."

Multiple choice trap: if the question asks "which pillar best represents Islamic egalitarianism," answer **Zakat** — not Hajj. Hajj is about unified faith; Zakat is directly about giving money to the poor.`,
      },
    },

    // ── 卡 3：622 年 Hijra（standaloneText，故事未覆盖）─────────
    {
      id: 'hijra-622',
      termCn: '希吉拉 / 622 年迁徙',
      termEn: 'Hijra / Migration of 622 CE',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.2.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `622 年，穆罕默德（伊斯兰教创始人）带领大约 200 名早期信众，从麦加走了大约 320 公里，抵达麦地那。这段旅程叫做**希吉拉（Hijra）**，阿拉伯语意思是"迁徙"。

为什么要跑？因为麦加的商人权贵对穆罕默德的威胁升级到了要暗杀他的地步。他们雇了刺客埋伏在他家门口。据传说，先知当晚深夜悄悄离开，刺客等到天亮才发现床上不是人。

Hijra 的历史意义远不止是一次逃跑。它标志着三件大事：

**第一**：穆罕默德从"被迫害的传教者"变成"有政治权力的领袖"。他到麦地那后，当地各部落签订了《麦地那宪章》（Constitution of Medina），承认他为最高仲裁者。这是伊斯兰政教合一的起点。

**第二**：伊斯兰社区（ummah）第一次有了固定的地理基地。从流亡变成建国，性质完全不同。

**第三**：622 年被定为**伊斯兰历（Hijri calendar）元年**。今天全球约 18 亿穆斯林使用的宗教历法，就从这一年开始算。（伊斯兰历是纯阴历，每年约 354 天，所以斋月 Ramadan 每年在公历里的日期都不一样。）

考点：如果看到 "AH"（Anno Hegirae），就是"希吉拉后第 X 年"，相当于伊斯兰历年份标注。`,
        en: `In 622 CE, Muhammad (founder of Islam) led approximately 200 early followers on a roughly 320-kilometer journey from Mecca to Medina. This journey is called the **Hijra**, from the Arabic word for "migration."

Why flee? Because Mecca's merchant elite had escalated their threats to assassination. They hired killers to ambush him outside his home. According to tradition, the prophet slipped out quietly in the dead of night; the assassins waited until morning before realizing the bed was empty.

The historical significance of the Hijra goes far beyond a flight from danger. It marks three pivotal developments:

**First**: Muhammad transformed from "persecuted preacher" to "leader with political power." After arriving in Medina, the local tribes signed the Constitution of Medina, recognizing him as supreme arbitrator. This was the starting point of Islam's fusion of religious and political authority.

**Second**: The Islamic community (ummah) now had a fixed geographic base for the first time. Moving from exile to state-building is a categorical difference.

**Third**: 622 CE was established as **Year One of the Islamic (Hijri) calendar**. The religious calendar used today by approximately 1.8 billion Muslims worldwide counts from this year. (The Islamic calendar is purely lunar — about 354 days per year — which is why Ramadan falls on different dates in the Western calendar each year.)

Exam note: if you see "AH" (Anno Hegirae), it means "Year X after the Hijra" — that's how Islamic calendar years are labeled.`,
      },
      xiaoweiNote: {
        cn: `Hijra 是这个单元里 AP 考得最多的单独事件——它同时是 (1) 伊斯兰历元年、(2) 政教合一的起点、(3) 伊斯兰从宗教变成国家的转折点。三个功能一次记完。

记忆技巧：**622 = 六·二·二 = "六弦吉他两根弦"**，反正就是记住 622 年，考题不管问哪个角度，答案都和这个年份有关。`,
        en: `Hijra is the single event AP tests most in this unit — it's simultaneously (1) Year One of the Islamic calendar, (2) the starting point of political-religious fusion, and (3) the turning point from religion to statehood. Three functions, one memory slot.

Memory trick: just lock in **622 CE**. Whatever angle the test question comes from, the answer connects to this year.`,
      },
    },

    // ── 卡 4：早期扩张与哈里发制度（standaloneText，故事未覆盖）──
    {
      id: 'caliphate-expansion',
      termCn: '哈里发制度与早期扩张',
      termEn: 'Caliphate System & Early Expansion',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.2.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'al-mamun-perpetrator', nodeId: 'al-mamun-N1', context: '马蒙是阿巴斯王朝第七任哈里发，故事开场交代王朝背景' },
        ],
      },
      standaloneText: {
        cn: `穆罕默德（伊斯兰教创始人）632 年去世后，没有指定继承人。信众们紧急推举了他的岳父阿布·伯克尔（Abu Bakr）担任领袖，称号就叫**哈里发（Caliph）**——阿拉伯语意思是"继承者/代理人"。

哈里发是政教合一的最高领袖：既是宗教权威（领导礼拜、解释《古兰经》），又是政治军事领袖（指挥军队、收税、制定法律）。

**三个王朝，一条线：**

**正统哈里发（Rashidun Caliphate，632-661 年）**——四位先知直系伴侣轮流担任哈里发。在这 29 年里，伊斯兰军队从阿拉伯半岛急速向外扩张，征服了波斯萨珊帝国和拜占庭帝国的叙利亚、埃及。扩张速度快得惊人——这段时期堪称人类历史上扩张速度最快的政治运动之一。

**倭马亚王朝（Umayyad Caliphate，661-750 年）**——第一个世袭哈里发王朝，首都从麦地那迁到大马士革（现叙利亚）。版图继续扩大：向东到中亚，向西到北非，再越过直布罗陀海峡进入伊比利亚半岛（今西班牙/葡萄牙），732 年在法国图尔战役（Battle of Tours）被法兰克人阻停。

**阿巴斯王朝（Abbasid Caliphate，750-1258 年）**——推翻倭马亚，首都迁到巴格达。这是伊斯兰黄金时代的主要舞台，故事里的马蒙（第七任阿巴斯哈里发）就在这个阶段创办了智慧宫。

考点关键句：Rashidun→Umayyad→Abbasid，三个王朝的顺序是 AP 选择题高频考点。`,
        en: `After Muhammad (founder of Islam) died in 632 CE without designating a successor, the community urgently elected his father-in-law Abu Bakr as leader. His title was **Caliph** — from the Arabic for "successor" or "representative."

The Caliph was the supreme leader combining religious and political authority: religious authority (leading prayers, interpreting the Quran) and political-military authority (commanding armies, collecting taxes, making laws).

**Three dynasties, one sequence:**

**Rashidun Caliphate (632-661 CE)** — Four companions of the Prophet took turns as Caliph. In these 29 years, Islamic armies expanded rapidly outward from the Arabian Peninsula, conquering the Persian Sassanid Empire and the Byzantine provinces of Syria and Egypt. The speed was astonishing — this period ranks among the fastest political expansions in human history.

**Umayyad Caliphate (661-750 CE)** — First hereditary Caliph dynasty; capital moved from Medina to Damascus (modern Syria). Territory kept growing: eastward to Central Asia, westward across North Africa, then over the Strait of Gibraltar into the Iberian Peninsula (modern Spain/Portugal). Stopped in 732 CE at the Battle of Tours in France by Frankish forces.

**Abbasid Caliphate (750-1258 CE)** — Overthrew the Umayyads; capital moved to Baghdad. This is the main stage of the Islamic Golden Age. The story's protagonist al-Ma'mun (seventh Abbasid Caliph) founded the House of Wisdom during this period.

Key exam sentence: Rashidun→Umayyad→Abbasid — the order of these three dynasties is a high-frequency AP multiple choice target.`,
      },
      xiaoweiNote: {
        cn: `这张卡要记两件事：(1) 哈里发的定义（政教合一的继承者），(2) 三个王朝的顺序 **R-U-A**（Rashidun-Umayyad-Abbasid）。

我的记忆口诀：**"拉-乌-阿"，从麦地那→大马士革→巴格达，一路往东搬家。** 巴格达最东，黄金时代在这里。`,
        en: `Two things to remember from this card: (1) definition of Caliph (successor combining religion + politics), (2) the three-dynasty sequence **R-U-A** (Rashidun-Umayyad-Abbasid).

My mnemonic: **R-U-A, capitals moved from Medina→Damascus→Baghdad, kept moving east.** Baghdad is farthest east — that's where the Golden Age happened.`,
      },
    },

    // ── 卡 5：马蒙与智慧宫（storyAnchor，Lens 1 已覆盖）──────────
    {
      id: 'abbasid-golden-age',
      termCn: '阿巴斯黄金时代 / 智慧宫',
      termEn: 'Abbasid Golden Age / House of Wisdom',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.2.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'al-mamun-perpetrator',
        nodeIds: ['al-mamun-N3', 'al-mamun-N6', 'al-mamun-N9'],
        xiaoweiNote: {
          cn: `这个在第一个视角里讲得很完整。马蒙（阿巴斯王朝第七任哈里发）在巴格达建立了智慧宫（Bayt al-Hikma）——9 世纪最厉害的学术机构，把希腊文、梵文、波斯文的典籍全部翻译成阿拉伯语。

考点关键句：**翻译运动（Translation Movement）保存并传播了古代知识**——希腊哲学（亚里士多德）、印度数学、波斯文学，经由伊斯兰学者之手翻译整理，最终在 12-13 世纪重新传回欧洲，触发文艺复兴。这条知识链"希腊→伊斯兰→欧洲"是 AP 世界史的核心叙事之一。

还有一个考点细节：马蒙据说用"黄金等重书稿"来酬谢翻译者——一本书翻译完，按书的重量给等重量的黄金。这说明他对知识有多看重，也说明阿巴斯王朝的财富有多惊人。`,
          en: `This was covered thoroughly in the first perspective. al-Ma'mun (seventh Abbasid Caliph) established the House of Wisdom (Bayt al-Hikma) in Baghdad — the most powerful academic institution of the 9th century, translating Greek, Sanskrit, and Persian texts into Arabic.

Key exam sentence: **The Translation Movement preserved and disseminated ancient knowledge** — Greek philosophy (Aristotle), Indian mathematics, Persian literature, translated and organized by Islamic scholars, then transmitted back to Europe in the 12th-13th centuries, triggering the Renaissance. This knowledge chain of "Greece → Islam → Europe" is one of AP World History's core narratives.

Another exam detail: al-Ma'mun reportedly paid translators in "gold equal in weight to the manuscript" — when a book was translated, they received its weight in gold. This shows how much he valued knowledge, and reveals the staggering wealth of the Abbasid Caliphate.`,
        },
      },
    },

    // ── 卡 6：花剌子米与代数学（storyAnchor，Lens 2 已覆盖）──────
    {
      id: 'al-khwarizmi-algebra',
      termCn: '花剌子米 / 代数学',
      termEn: 'al-Khwarizmi / Algebra',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.2.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'al-khwarizmi-lonely-mediator',
        nodeIds: ['al-khwarizmi-N4', 'al-khwarizmi-N7', 'al-khwarizmi-N10'],
        xiaoweiNote: {
          cn: `第二个视角讲的就是他。花剌子米（数学家，代数创始人）来自中亚花剌子模地区，在马蒙的智慧宫工作。他写了一本书叫《代数学》（Al-Kitab al-mukhtasar fi hisab al-jabr wal-muqabala）——书名里的 **al-jabr** 就是英文 **algebra（代数）** 的来源。

还有更绕的：他名字的拉丁语音译 **Algoritmi** 变成了英文单词 **algorithm（算法）**。所以每次你用手机 App 的推荐算法，那个词的祖先就是这个 9 世纪的数学家。

考点：花剌子米代表的是伊斯兰黄金时代的**知识综合**——他把印度数字系统（0-9 的位值制）、希腊几何和本地数学传统融合，创造出了一套通用的计算语言。AP 喜欢考"伊斯兰学者如何综合不同文明的知识"。`,
          en: `The second perspective is entirely about him. al-Khwarizmi (mathematician, founder of algebra) came from the Khwarazm region in Central Asia and worked at al-Ma'mun's House of Wisdom. He wrote a book called *Al-Kitab al-mukhtasar fi hisab al-jabr wal-muqabala* — the **al-jabr** in the title is the origin of the English word **algebra**.

Even more surprising: the Latin transliteration of his name, **Algoritmi**, became the English word **algorithm**. So every time you use a recommendation algorithm on your phone, that word traces back to this 9th-century mathematician.

Exam point: al-Khwarizmi represents the Islamic Golden Age's **synthesis of knowledge** — he combined the Indian number system (0-9 positional notation), Greek geometry, and local mathematical traditions to create a universal computational language. AP loves testing "how Islamic scholars synthesized knowledge from different civilizations."`,
        },
      },
    },

    // ── 卡 7：法蒂玛与 al-Qarawiyyin（storyAnchor，Lens 3 已覆盖）─
    {
      id: 'fatima-al-fihri-university',
      termCn: '法蒂玛·菲赫里 / 世界最早大学',
      termEn: "Fatima al-Fihri / World's Oldest University",
      standardRef: ['AP World KC-1.2', 'CA HSS 7.2.6'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'fatima-al-fihri-receiving-end',
        nodeIds: ['fatima-N3', 'fatima-N6', 'fatima-N9'],
        xiaoweiNote: {
          cn: `第三个视角就是她的故事。法蒂玛·菲赫里（世界最早大学创办者）于 **859 年**在摩洛哥非斯城用父亲的遗产创办了 **al-Qarawiyyin 大学**——联合国教科文组织和吉尼斯世界纪录都认定它是世界上**持续运营至今最古老的大学**（比欧洲第一所大学博洛尼亚大学早约 200 年）。

考试陷阱：有人会说"她只是有钱，不算真正的学者"——这种说法不成立。她本人接受过完整的伊斯兰法学和修辞学教育，创办大学前还亲自参与课程设计，据说在大学建成之前一直斋戒，以表达虔诚。

这张卡还要记一个大背景：伊斯兰文明对**女性参与宗教学术**的态度，在 9 世纪要比同时期欧洲基督教世界宽容得多——欧洲第一所大学直到 12 世纪才出现，而且很晚才向女性开放。法蒂玛的故事是这个对比的典型例子。`,
          en: `The third perspective tells her story. Fatima al-Fihri (founder of the world's oldest university) used her father's inheritance in **859 CE** to found **al-Qarawiyyin University** in Fes, Morocco. UNESCO and Guinness World Records recognize it as the **oldest continuously operating university in the world** (about 200 years before Europe's first university at Bologna).

Exam trap: some say "she just had money — she wasn't a real scholar." This doesn't hold up. She herself received a full education in Islamic law and rhetoric, participated in curriculum design before founding the university, and reportedly fasted throughout the entire construction period as an act of devotion.

One big context to remember from this card: Islamic civilization's attitude toward **women's participation in religious scholarship** in the 9th century was significantly more open than contemporaneous Christian Europe — Europe's first university didn't appear until the 12th century, and opened to women even later. Fatima's story is the defining example of this contrast.`,
        },
      },
    },

    // ── 卡 8：伊斯兰知识传播与跨文化交流（storyAnchor，三个视角均覆盖）
    {
      id: 'islamic-knowledge-transmission',
      termCn: '伊斯兰文明的知识传播',
      termEn: 'Islamic Knowledge Transmission & Cross-Cultural Exchange',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.2.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['al-mamun-N9', 'al-khwarizmi-N10', 'fatima-N9'],
        xiaoweiNote: {
          cn: `这张卡是把三个视角的大主题合在一起讲。

伊斯兰黄金时代（约 750-1258 年）为什么能产出这么多知识？三个原因：

**第一**：地理位置。伊斯兰帝国连接了欧洲、非洲、中亚和南亚，商队带来的不只是货物，还有思想——印度数学（含零的概念）、中国造纸术、希腊哲学，都在这个网络里流动。

**第二**：政治意愿。马蒙（阿巴斯王朝第七任哈里发）这样的统治者愿意花大钱请学者、建图书馆。知识是国家软实力，翻译异国典籍是国家行为，不是个人爱好。

**第三**：语言统一。阿拉伯语是整个伊斯兰世界的学术语言（就像中世纪欧洲的拉丁语），学者不管来自哪里都能读对方写的东西——花剌子米来自中亚，法蒂玛来自北非，马蒙在伊拉克，但他们读的是同一套阿拉伯文典籍。

AP DBQ 经典角度：伊斯兰文明是"文化保存者"（翻译保存了希腊遗产）还是"文化创新者"（代数、天文学、医学有原创贡献）？——答案是**两者都是**，这是 AP 最想听到的多元视角。`,
          en: `This card brings together the big theme from all three perspectives.

Why did the Islamic Golden Age (roughly 750-1258 CE) produce so much knowledge? Three reasons:

**First**: Geography. The Islamic empire connected Europe, Africa, Central Asia, and South Asia. Caravans carried not just goods but ideas — Indian mathematics (including the concept of zero), Chinese papermaking, Greek philosophy all circulated through this network.

**Second**: Political will. Rulers like al-Ma'mun (seventh Abbasid Caliph) were willing to spend heavily on scholars and libraries. Knowledge was national soft power; translating foreign texts was a state project, not a personal hobby.

**Third**: Linguistic unity. Arabic was the scholarly language across the entire Islamic world (like Latin in medieval Europe), so scholars from anywhere could read each other's work — al-Khwarizmi came from Central Asia, Fatima from North Africa, al-Ma'mun was in Iraq, but they all read the same Arabic texts.

Classic AP DBQ angle: Was Islamic civilization a "cultural preserver" (translation preserved the Greek legacy) or a "cultural innovator" (original contributions in algebra, astronomy, medicine)? — The answer is **both**, which is exactly the nuanced perspective AP wants to see.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'tq1',
      cn: `马蒙（阿巴斯王朝第七任哈里发）花了巨资创办智慧宫，翻译希腊、印度、波斯的典籍。有历史学家说他这样做是为了"追求真理"，也有历史学家说他是想用知识巩固政治权威。

你觉得这两种解释可以同时成立吗？一个统治者可以既真诚地热爱知识，又把知识当政治工具吗？请用至少一个具体例子支持你的回答。`,
      en: `al-Ma'mun (seventh Abbasid Caliph) spent enormous resources founding the House of Wisdom and translating Greek, Indian, and Persian texts. Some historians say he did this "in pursuit of truth"; others say he used knowledge to consolidate political authority.

Can both interpretations be true at the same time? Can a ruler genuinely love knowledge while also using it as a political tool? Support your answer with at least one specific example.`,
      hintCn: `提示：想一想，为什么知识和权力不一定是对立的？翻译希腊科学成果，可以帮哈里发做什么？（天文学可以改进历法，医学可以养强军队，数学可以计算税收……）一个例子：中国历史上的汉武帝"罢黜百家独尊儒术"——他是真信儒家，还是用儒家当工具？这个问题和马蒙的问题一样没有标准答案，但你需要用证据来支持立场。`,
      hintEn: `Hint: think about why knowledge and power aren't necessarily opposites. How could translating Greek scientific texts help a Caliph? (Astronomy improves calendars, medicine strengthens armies, mathematics calculates tax revenues...) One parallel: China's Han Emperor Wu "elevating Confucianism above all schools" — did he genuinely believe, or use it as a tool? Like the al-Ma'mun question, there's no standard answer — but you need evidence to support your position.`,
      conceptsActivated: ['abbasid-golden-age', 'caliphate-expansion'],
    },
    {
      id: 'tq2',
      cn: `伊斯兰五功（Five Pillars）里，第三功 Zakat 要求有钱的穆斯林把一部分收入捐给穷人，这是宗教义务，不是自愿捐款。

你觉得把"帮助穷人"变成宗教义务，和把它变成政府税收，有什么本质区别？伊斯兰文明这样设计五功，对社会的凝聚力有什么影响？结合第三个视角（法蒂玛·菲赫里用父亲遗产创办大学）想一想：个人财富用于公共利益，这是伊斯兰文明的偶然现象，还是有意为之的设计？`,
      en: `Among the Five Pillars of Islam, the third pillar Zakat requires Muslims with wealth to donate a portion of their income to the poor — this is a religious obligation, not a voluntary donation.

What is the fundamental difference between making "helping the poor" a religious duty versus a government tax? What effect did designing the Five Pillars this way have on social cohesion in Islamic civilization? Connecting to the third perspective (Fatima al-Fihri using her father's inheritance to found a university): is using personal wealth for the public good a coincidence in Islamic civilization, or a deliberate design?`,
      hintCn: `提示：宗教义务和政府税收的区别可以从执行方式、动机、社区认同感三个角度想。政府税不交会被罚款抓人，宗教义务不履行会怎样？（社区压力、来世惩罚……）另一个角度：五功把信仰和日常行为绑在一起，让"做一个好穆斯林"和"做一个好社区成员"变成同一件事。这和今天的公民教育有什么相似或不同？`,
      hintEn: `Hint: think about the difference between religious obligation and government tax from three angles: enforcement mechanism, motivation, and community identity. What happens if you don't pay a government tax (fines, arrest)? What happens if you don't fulfill a religious duty (community pressure, afterlife consequences...)? Another angle: the Five Pillars link faith to daily behavior, making "being a good Muslim" and "being a good community member" the same thing. How is this similar to or different from civic education today?`,
      conceptsActivated: ['five-pillars', 'fatima-al-fihri-university', 'islamic-knowledge-transmission'],
    },
    {
      id: 'tq3',
      cn: `622 年穆罕默德（伊斯兰教创始人）带着约 200 名信众从麦加逃往麦地那——表面上是一次逃亡，结果变成了伊斯兰历法的纪元起点，也是伊斯兰从宗教运动变成政治国家的转折点。

历史上很多伟大的运动都是从被迫害、被逃亡开始的。你能想到另一个类似的例子吗？为什么"被迫离开"有时候反而能帮助一个运动变得更强大？这种模式说明了什么？`,
      en: `In 622 CE, Muhammad (founder of Islam) led approximately 200 followers in flight from Mecca to Medina — on the surface an escape, but it became the starting point of the Islamic calendar and the turning point that transformed Islam from a religious movement into a political state.

Many great movements in history began with persecution and flight. Can you think of another similar example? Why does "being forced to leave" sometimes help a movement grow stronger? What does this pattern reveal?`,
      hintCn: `提示：想几个方向——(1) 早期基督教：耶稣被钉十字架后，他的追随者被罗马帝国迫害，最终基督教从一个小教派变成罗马国教；(2) 中国历史：长征（1934-1935）毛泽东带着红军从江西突围，这次"逃亡"重塑了党的领导层，也成为中共建党神话的核心；(3) 犹太民族：多次流散（Diaspora）反而强化了犹太身份认同。问自己：危机什么时候会消灭一个运动，什么时候会强化它？有什么决定性因素？`,
      hintEn: `Hint: think in a few directions — (1) Early Christianity: after the crucifixion, Jesus's followers were persecuted by the Roman Empire, and Christianity eventually transformed from a small sect to the Roman state religion; (2) Chinese history: the Long March (1934-1935), Mao Zedong breaking out from Jiangxi — this "flight" reshaped party leadership and became the central myth of the CCP's founding; (3) Jewish people: multiple Diasporas actually reinforced Jewish identity. Ask yourself: when does crisis destroy a movement, and when does it strengthen it? What factors make the difference?`,
      conceptsActivated: ['hijra-622', 'muhammad-and-islam', 'caliphate-expansion'],
    },
  ],
};

export default notebook;
