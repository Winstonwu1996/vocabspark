// ─── 同伴笔记本架构 v1 · Pre-Columbian Americas ──────────────────
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
//   - storyboard 提供情感锚点（帕查库特克 / 马林钦 / 伊克斯·穆塔尔·阿豪三条线）
//   - notebook 提供考点闭环（阿兹特克 Tenochtitlan / 人祭宇宙观 / 三文明比较补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - CA HSS 7.7.1 / 7.7.2 / 7.7.3
//   - AP World History KC-1.4 (Pre-Columbian Americas)
//   - 弥补 pre-columbian 课纲覆盖率从 72% → ~95%
//
// schemaVersion: 1 · notebookVersion: pre-columbian-v1

export var notebook = {
  topicId: 'pre-columbian',
  topicNameCn: '前哥伦布美洲文明',
  topicNameEn: 'Pre-Columbian Americas',
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
    cn: `老师今天发了一张新单子——说下周我们要学"前哥伦布美洲文明"。
我第一反应是：什么？美洲也有文明？我以为美洲在哥伦布到来之前就是森林和部落……

结果她放了一张图：特诺奇蒂特兰（Tenochtitlan）的城市还原图——
湖中央的人工岛上，神庙、广场、运河……1500 年代初，那里住着 25 万人。
那时候伦敦才 5 万人。我当时真的傻掉了。

所以我赶紧把这些名字和词先记下来，等下读三个故事——
帕查库特克（印加）、马林钦（阿兹特克/接触时期）、伊克斯·穆塔尔·阿豪（玛雅）——
读完再回来对照这张单子，看我能不能解释这些词。

老师说："美洲三大文明各自在不同地区、用不同方式解决了相同的问题：
怎么养活几百万人，怎么维持秩序，怎么理解这个世界。"
这句话我写在笔记本第一页。`,
    en: `Today my teacher handed out a new sheet — next week we're covering
"Pre-Columbian Americas." My first thought: what? Was there even a civilization
in the Americas before Columbus? I figured it was just forests and small tribes...

Then she showed a picture: an artist's reconstruction of Tenochtitlan —
a massive city built on an artificial island in the middle of a lake,
with temples, plazas, canals. In the early 1500s, 250,000 people lived there.
London at the same time had maybe 50,000. I was genuinely stunned.

So I'm writing down these names and terms first. After I read the three stories
(Pachacuti / Inca; Malintzin / Aztec contact period; Ix Mutal Ahau / Maya),
I'll come back and see if I can explain each one.

Teacher said: "The three major American civilizations each found different solutions
to the same questions: how to feed millions of people, how to maintain order,
how to understand the world."
I wrote that on the first page of my notebook.`,
    keyTerms: [
      { cn: 'mit\'a 劳役制', en: 'mit\'a (labor tribute system)' },
      { cn: 'quipu 结绳记事', en: 'quipu (knotted-cord records)' },
      { cn: 'Qhapaq Ñan 印加道路', en: 'Qhapaq Ñan (Royal Inca Road)' },
      { cn: '进贡体系', en: 'tribute system' },
      { cn: 'chinampa 浮动花园', en: 'chinampa (floating garden)' },
      { cn: '玛雅历法', en: 'Maya calendar system' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '帕查库特克·印加·尤潘基',
        nameEn: 'Pachacuti Inca Yupanqui',
        ipa: '/ˌpætʃəˈkuːti ˈɪŋkə juːˈpæŋki/',
        roleCn: '印加第九任萨帕·印加，帝国扩张者，马丘比丘建造者',
        roleEn: 'Ninth Sapa Inca, empire-builder, commissioned Machu Picchu',
        mustKnow: true,
        audioKey: 'pachacuti',
      },
      {
        nameCn: '马林钦（玛利纳）',
        nameEn: 'Malintzin / La Malinche',
        ipa: '/mɑːˈlɪntsiːn/',
        roleCn: '纳瓦特尔语-西班牙语口译员，科尔特斯征服阿兹特克的关键中介',
        roleEn: 'Nahuatl-Spanish interpreter, key intermediary in the Spanish conquest of the Aztecs',
        mustKnow: true,
        audioKey: 'malintzin',
      },
      {
        nameCn: '蒙特祖马二世',
        nameEn: 'Moctezuma II',
        ipa: '/ˌmɒktɪˈzuːmə/',
        roleCn: '西班牙接触时期的阿兹特克皇帝（三联主）',
        roleEn: 'Aztec tlatoani (ruler) at the time of Spanish contact',
        mustKnow: true,
        audioKey: 'moctezuma',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1 ── 帕查库特克 + mit'a + 道路（故事覆盖）
    {
      id: 'pachacuti-inca-expansion',
      termCn: '帕查库特克 / 印加帝国扩张',
      termEn: 'Pachacuti / Inca Imperial Expansion',
      defCn: '帕查库特克是印加第九任皇帝，15 世纪中叶把一个小城邦扩张成横跨安第斯山脉、长达 4000 公里的大帝国——这是前哥伦布时代美洲最大的政治体。',
      defEn: 'Pachacuti was the ninth Inca emperor who, in the mid-1400s, transformed a small city-state into a 4,000-km empire stretching across the Andes — the largest political entity in the pre-Columbian Americas.',
      standardRef: ['CA HSS 7.7.3', 'AP World KC-1.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'pachacuti',
        nodeIds: ['pachacuti-N1', 'pachacuti-N3', 'pachacuti-N6'],
        xiaoweiNote: {
          cn: `帕查库特克·印加·尤潘基（Pachacuti Inca Yupanqui，约 1418–1471），
印加第九任萨帕·印加——"萨帕·印加"的意思是"独一无二的皇帝"。

帕查库特克那条故事线从一场防守战开始，一路写他把印加领土扩大了 10 倍。
"Pachacuti"这个词在克丘亚语里的意思是"大地翻覆者"——**名字就是他一生的注解**。

考点关键句：
① 帕查库特克 15 世纪中叶即位，把印加从库斯科盆地的一个城邦扩张为横跨安第斯山脉、长达 4000 公里的帝国。
② 这是前哥伦布时代美洲规模最大的政治体。

CA HSS 7.7.3 直接点名要求了解印加帝国的"组织与管理"，帕查库特克是那段历史的核心人物。`,
          en: `Pachacuti Inca Yupanqui (ca. 1418–1471) was the ninth Sapa Inca, meaning "the unique emperor."

His story follows his full arc — from a single defensive battle to expanding Inca territory tenfold.
"Pachacuti" in Quechua means "he who transforms the earth." **His name is his biography.**

Key exam points:
① In the mid-1400s, Pachacuti turned the Inca from a city-state around Cusco into an empire stretching 4,000 km across the Andes.
② This was the largest political entity in the pre-Columbian Americas.

CA HSS 7.7.3 explicitly requires understanding Inca "organization and administration,"
and Pachacuti is the central figure for that period.`,
        },
      },
    },

    // ── 卡 2 ── mit'a + quipu + 道路系统（故事覆盖）
    {
      id: 'inca-mit-a-quipu-road',
      termCn: 'mit\'a 劳役制 / quipu / Qhapaq Ñan 道路',
      termEn: 'mit\'a / quipu / Qhapaq Ñan Road System',
      defCn: '这是印加帝国管理 1200 万人口的三件法宝。mit\'a 是劳役税（出人力，不出钱）。quipu 是用绳结记数的行政工具，代替文字。Qhapaq Ñan 是长达 4 万公里的皇家道路网。',
      defEn: 'These three tools let the Inca govern 12 million people. Mit\'a was a labor tax — households owed the state work, not money. Quipu was a knotted-cord system for keeping records without writing. Qhapaq Ñan was a 40,000-km royal road network.',
      standardRef: ['CA HSS 7.7.3', 'AP World KC-1.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'pachacuti',
        nodeIds: ['pachacuti-N4', 'pachacuti-N7', 'pachacuti-N9'],
        xiaoweiNote: {
          cn: `这三个是印加帝国考试的"铁三角"——选择题一定考，缺一个都是失分点。

**mit'a**：印加版"劳役税"。老百姓不用交钱，但每家每年要出人力为国家工作一段时间——修路、种国家的田、建神庙。马丘比丘就是 mit'a 工人建的。
这和欧洲封建制里农奴为领主服役有点像，但印加国家作为回报会提供食物和工具，不是纯粹强迫劳动。

**quipu**：克丘亚语"结"的意思。不同颜色、不同打结方式的绳子，记录数字（人口、税收、粮仓存量）。
印加帝国没有文字系统，quipu 就是他们的"账本"+"档案"+"历史记录"。

**Qhapaq Ñan**："皇家大道"。全长约 4 万公里的道路网络（比罗马全盛时期的道路网还长）。
道路允许：① 军队快速移动；② 粮食跨区调配；③ 信使（chasqui）48 小时内跑完 2000 公里。
现已列入 UNESCO 世界遗产。

考题口诀：**M-Q-Q**（Mit'a 管人力，Quipu 管记录，Qhapaq Ñan 管连接）。
三者合起来就是印加帝国没有文字却能管理 1200 万人的秘密。`,
          en: `These three are the "iron triangle" of Inca exam content — every multiple-choice section tests them.

**mit'a**: The Inca "labor tax." Households didn't pay money — each one owed the state a period of labor per year: building roads, farming state fields, constructing temples. Machu Picchu was built by mit'a workers.
This resembles European feudal serfdom in some ways, but the Inca state provided food and tools in return — it wasn't purely coerced.

**quipu**: Quechua for "knot." Cords of different colors and knot patterns recorded numbers — population, taxes, granary stocks.
The Inca had no writing system; the quipu was their "ledger" + "archive" + "historical record."

**Qhapaq Ñan**: the "Royal Road," a network about 40,000 km long (longer than Rome's road network at its height).
Roads allowed: ① rapid troop movement; ② food redistribution across regions; ③ relay runners (chasqui) covering 2,000 km in 48 hours.
Now a UNESCO World Heritage Site.

Exam mnemonic: **M-Q-Q** (mit'a controls labor, quipu controls records, Qhapaq Ñan controls connections).
Together they explain how the Inca governed 12 million people without a writing system.`,
        },
      },
    },

    // ── 卡 3 ── Tenochtitlan + chinampa + 进贡体系（故事未充分覆盖 → standalone）
    {
      id: 'tenochtitlan-tribute-system',
      termCn: 'Tenochtitlan / 进贡体系 / chinampa',
      termEn: 'Tenochtitlan / Tribute System / Chinampa',
      defCn: 'Tenochtitlan 是阿兹特克帝国首都，建在湖中央的人工岛上，1519 年人口约 25 万。进贡体系是阿兹特克帝国收税的方式——被征服的城邦每年交布料、粮食、黄金等物品。chinampa 是在湖面上种田的浮动花园。',
      defEn: 'Tenochtitlan was the Aztec capital, built on an artificial island in a lake, with about 250,000 people in 1519. The tribute system was how the Aztec Empire collected taxes — conquered city-states paid cloth, food, gold, and more each year. Chinampa were floating farm plots built on the lake surface.',
      standardRef: ['CA HSS 7.7.2', 'AP World KC-1.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          {
            lens: 'malintzin',
            nodeId: 'malintzin-N3',
            context: '马林钦第一次看见特诺奇蒂特兰时的视角描写',
          },
        ],
      },
      standaloneText: {
        cn: `特诺奇蒂特兰（Tenochtitlan），阿兹特克帝国首都，建于墨西哥谷地的特斯科科湖中央的人工岛上。

1519 年科尔特斯抵达时，城市人口约 25 万——比同时期的伦敦（5 万）、巴黎（20 万）甚至罗马都大。
这不是一个"原始部落的聚居地"，这是当时地球上最大的城市之一。

**城市工程奇迹：**
chinampa，即"浮动花园"——把水草、淤泥、木桩组合成长方形浮台，种在湖面上。
这是一种高产集约农业，一年可以收三到四季，养活了这座庞大的城市。
三条石砌堤道连接岛城与湖岸，每条可并行十马。
城内有引水渠、市场、学校、动物园——这一切，是 1519 年欧洲人看到的景象。

**进贡体系（tribute system）：**
阿兹特克帝国并不是直接统治所有被征服的地区——而是要求被征服的城邦每年上缴贡品（布料、可可豆、玉米、黄金、羽毛、甚至战俘）。
这些贡品记录在《门多萨法典》里，清单详细到每个省交多少张棉布、多少袋可可。
帝国通过进贡体系把资源从四面八方抽到特诺奇蒂特兰，维持城市运转和军事扩张。

这套体系的漏洞也很清楚：被剥削最深的城邦最有动力反抗。
1519 年科尔特斯来的时候，很多阿兹特克的藩属城邦主动帮西班牙人打阿兹特克——
不是因为爱西班牙，而是因为恨阿兹特克的进贡压迫。马林钦的故事就发生在这个裂缝里。`,
        en: `Tenochtitlan, capital of the Aztec Empire, was built on an artificial island in the middle of Lake Texcoco in the Valley of Mexico.

When Cortés arrived in 1519, the city held roughly 250,000 people — larger than contemporary London (50,000), Paris (200,000), or even Rome.
This was not a "primitive tribal settlement." It was one of the largest cities on Earth at the time.

**Engineering marvel:**
Chinampa, the "floating garden" — rectangular platforms built from aquatic plants, mud, and wooden stakes, farmed on the lake surface.
This was high-yield intensive agriculture: three or four harvests per year, feeding a massive urban population.
Three stone causeways connected the island city to the shore, each wide enough for ten horses abreast.
Inside: aqueducts, markets, schools, a zoo — this is what Europeans encountered in 1519.

**Tribute system:**
The Aztec Empire did not directly govern all conquered territories. Instead, it required conquered city-states to deliver annual tribute: textiles, cacao, maize, gold, feathers, even prisoners of war.
These demands are documented in the Codex Mendoza — the lists specify exactly how many cotton cloaks and cacao sacks each province owed.
Through tribute, the empire channeled resources from across Mesoamerica into Tenochtitlan, sustaining the city and military expansion.

The system's vulnerability was obvious: the most heavily taxed city-states had the greatest incentive to rebel.
When Cortés arrived in 1519, many Aztec tributary states actively helped the Spanish fight the Aztec — not out of love for Spain, but out of hatred for Aztec tribute pressure. Malintzin's story lives in that fracture.`,
      },
      xiaoweiNote: {
        cn: `25 万人，比伦敦大 5 倍——这个数字要背，选择题原题考过（CA 真题）。
还有 chinampa 这个词的拼写很怪，ch 开头发的音更接近"ch"，不是"k"。
老师说进贡体系是阿兹特克帝国"强大"和"脆弱"同时的原因——这是 DBQ 写作的经典角度。`,
        en: `250,000 people, five times larger than London — memorize this number, it has appeared verbatim in CA multiple-choice.
Also: chinampa starts with "ch" and sounds like the "ch" in "cheese," not a hard "k."
Teacher said the tribute system is simultaneously why the Aztec Empire was "strong" and "fragile" — a classic DBQ angle.`,
      },
    },

    // ── 卡 4 ── 阿兹特克人祭 + 宇宙观（故事未充分覆盖 → standalone）
    {
      id: 'aztec-human-sacrifice-cosmology',
      termCn: '阿兹特克人祭 / 太阳宇宙观',
      termEn: 'Aztec Human Sacrifice / Solar Cosmology',
      defCn: '在阿兹特克的宇宙观里，人祭不是暴力，而是一种宗教责任——他们相信必须用人的血液来"喂养"太阳，让它每天继续升起。这套信仰把战争、祭祀和帝国扩张捆绑成一个系统。',
      defEn: 'In Aztec belief, human sacrifice was not violence for its own sake — it was a religious duty. The Aztec believed human blood was needed to "feed" the sun so it would rise each day. This belief tied together war, sacrifice, and imperial expansion into one system.',
      standardRef: ['CA HSS 7.7.2', 'AP World KC-1.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          {
            lens: 'malintzin',
            nodeId: 'malintzin-N5',
            context: '马林钦视角中见到大神庙祭坛时的震惊与思考',
          },
        ],
      },
      standaloneText: {
        cn: `在阿兹特克宇宙观里，人祭（human sacrifice）不是"野蛮"，是维持宇宙运转的神圣义务。

阿兹特克人相信他们活在"第五个太阳"时代——前四个太阳（即前四个世界）都已经被毁灭。
第五个太阳的诞生需要众神在特奥蒂瓦坎用牺牲自己的方式让太阳升起。
既然神都要献祭自己，那么人类用鲜血和心脏"喂养"太阳，就是宇宙秩序的一部分——是责任，不是选择。

主战神维齐洛波奇特利（Huitzilopochtli），即太阳神兼战争神，每天都要"战胜"黑暗完成升起，这场战斗需要人类血液作为燃料。
这就是为什么阿兹特克帝国的扩张和宗教仪式是一个捆绑系统——
① 战争获得战俘；② 战俘用于祭祀；③ 祭祀保证太阳继续升起；④ 太阳升起才有下一年的粮食。

大神庙（Templo Mayor）是特诺奇蒂特兰的中心建筑，专为维齐洛波奇特利和雨神特拉洛克（Tlaloc）而建。
每逢重大节日，祭祀规模极大——有据可查的"新火仪式"（New Fire Ceremony，每 52 年一次）会让整座城市熄灭全部火焰再重新点燃，象征宇宙重启。

**考试陷阱提醒：** CA HSS 7.7.2 要求了解这个宗教系统，但不是让你评判它。
AP 写作会问："为什么理解阿兹特克人祭的内部逻辑，比直接用'野蛮'两个字来描述它更重要？"
答案是：了解内在逻辑才能理解这个帝国的政治结构——战争-俘虏-祭祀-政权合法性是同一个链条。

注意：这个话题在今天仍然有争议。
一部分学者认为西班牙史料夸大了人祭规模（作为殖民合法化的依据）；
另一部分认为考古证据支持规模确实很大。两种说法 AP 都可以用，关键是"用证据说话，不要只靠情绪"。`,
        en: `In Aztec cosmology, human sacrifice was not "barbarism" — it was a sacred obligation to keep the universe running.

The Aztec believed they lived in the age of the "Fifth Sun." The four previous suns and worlds had each been destroyed.
The Fifth Sun was born at Teotihuacan when the gods sacrificed themselves to make the sun rise.
Since even the gods had to offer sacrifice, humans "feeding" the sun with blood and hearts was part of the cosmic order — a duty, not a choice.

The patron deity Huitzilopochtli, god of the sun and war, had to "defeat" darkness every single day to complete the sunrise.
That battle required human blood as fuel. This is why Aztec imperial expansion and religious ritual were a bundled system:
① wars captured prisoners; ② prisoners supplied sacrifice; ③ sacrifice guaranteed the sun's continued rising; ④ the rising sun guaranteed the next harvest.

The Templo Mayor was the central structure of Tenochtitlan, built for Huitzilopochtli and the rain deity Tlaloc.
Major festivals involved sacrifice at large scale — the documented New Fire Ceremony (every 52 years) extinguished all fires across the city and relit them, symbolizing cosmic renewal.

**Exam trap:** CA HSS 7.7.2 requires understanding this religious system, not judging it.
AP essays ask: "Why is understanding the internal logic of Aztec human sacrifice more important than labeling it 'barbaric'?"
The answer: only by understanding the internal logic can you understand the empire's political structure — war, prisoners, sacrifice, and political legitimacy form a single chain.

Note: this remains debated. Some historians argue Spanish sources exaggerated the scale of sacrifice as a justification for colonization.
Others say archaeological evidence supports large-scale practice. Both positions are usable on AP — the key is "argue with evidence, not emotion."`,
      },
      xiaoweiNote: {
        cn: `老师特别提醒：写作文不要用"残忍"或"野蛮"形容阿兹特克人祭，会被扣分——因为那是从外部视角评判，不是历史分析。
要用的写法是："在阿兹特克宇宙观中，人祭具有……功能"。
这叫"历史背景化"（contextualization），AP 考试写作评分的第一个标准。`,
        en: `Teacher specifically warned: do not use "cruel" or "barbaric" to describe Aztec sacrifice in your essay — you'll lose points, because that's an external moral judgment, not historical analysis.
Use language like "within Aztec cosmology, human sacrifice served the function of..."
That's called "contextualization" — the first criterion in AP essay scoring.`,
      },
    },

    // ── 卡 5 ── 马林钦视角 + 西班牙接触（故事覆盖）
    {
      id: 'malintzin-spanish-contact',
      termCn: '马林钦 / 西班牙接触时期的原住民视角',
      termEn: 'Malintzin / Indigenous Perspective on Spanish Contact',
      defCn: '马林钦是一位懂纳瓦特尔语、玛雅语和西班牙语的三语翻译，是 1519 年科尔特斯征服阿兹特克帝国的关键人物。她的经历代表了原住民在接触时期复杂的生存处境。',
      defEn: 'Malintzin was a trilingual interpreter who spoke Nahuatl, Maya, and Spanish. She was a key figure in Cortés\'s 1519 conquest of the Aztec Empire. Her experience represents the complex survival situation of indigenous people during the contact period.',
      standardRef: ['CA HSS 7.7.2', 'AP World KC-1.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'malintzin',
        nodeIds: ['malintzin-N1', 'malintzin-N6', 'malintzin-N8', 'malintzin-N10'],
        xiaoweiNote: {
          cn: `马林钦（Malintzin，西班牙人叫她 La Malinche）是马林钦那条故事线的主角。
她的身份很复杂：纳瓦特尔语是母语，被卖为奴隶后又学会了玛雅语，科尔特斯到来时她已经会两种语言，很快又学会了西班牙语，成为三语口译员。

**考点关键句：** 马林钦是科尔特斯征服阿兹特克帝国的关键中介——
她的语言能力让科尔特斯能与蒙特祖马二世谈判，能招募阿兹特克的藩属城邦联合反阿兹特克。
没有马林钦，征服的速度可能慢十年。

注意：马林钦在墨西哥历史上的评价一直分裂——
一派认为她是"出卖族人的叛徒"，另一派认为她是"乱世中的生存者"。
20 世纪末的学者更倾向后者：她约 8 岁时首次被卖为奴隶，1519 年转给科尔特斯时约 19 岁，从未有过选择说"不"的权力。

AP 考试不会要你"评判马林钦好不好"——
而是问"为什么同一个历史人物在不同时代和不同群体中形象如此不同"，这叫"历史记忆"（historical memory）分析。`,
          en: `Malintzin (called La Malinche by Spaniards) is the protagonist of the Malintzin story line.
Her identity is layered: Nahuatl was her mother tongue; she learned Maya after being sold into slavery; when Cortés arrived she already knew two languages — she quickly added Spanish, becoming a three-language interpreter.

**Key exam sentence:** Malintzin was a critical intermediary in the Spanish conquest of the Aztec Empire.
Her linguistic ability enabled Cortés to negotiate with Moctezuma II and to recruit Aztec tributary states as anti-Aztec allies.
Without Malintzin, the conquest might have taken a decade longer.

Note: Malintzin's reputation in Mexican history has always been divided.
One side calls her a "traitor who betrayed her people"; another calls her a "survivor in a chaotic era."
Late-20th-century scholars lean toward the second: she was first sold into slavery at around age 8, and was approximately 19 years old when given to Cortés in 1519 — she never had the power to say no.

AP tests won't ask you to "judge whether Malintzin was good or bad" — instead they ask "why does the same historical figure have such different images in different eras and communities?"
That's called "historical memory" analysis.`,
        },
      },
    },

    // ── 卡 6 ── 玛雅历法 + 农业 + 城邦（故事覆盖）
    {
      id: 'maya-calendar-agriculture-city-states',
      termCn: '玛雅历法 / 农业 / 城邦',
      termEn: 'Maya Calendar / Agriculture / City-States',
      defCn: '玛雅文明有前哥伦布美洲最完善的文字系统和最精确的历法。玛雅从未统一成单一帝国，而是由几十个独立城邦（如蒂卡尔、奇琴伊察）组成，各自共存、联盟、互相打仗。',
      defEn: 'Maya civilization had the most complete writing system and most precise calendars in the pre-Columbian Americas. The Maya never unified into a single empire — instead, dozens of independent city-states like Tikal and Chichén Itzá coexisted, allied, and fought each other.',
      standardRef: ['CA HSS 7.7.1', 'AP World KC-1.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'ix-mutal-ahau',
        nodeIds: ['maya-N2', 'maya-N5', 'maya-N7'],
        xiaoweiNote: {
          cn: `伊克斯·穆塔尔·阿豪那条故事线用一位后古典期玛雅人（虚构复合角色）的视角，
讲了玛雅文明在 1200 年代之后的状态——已经过了古典期（Classic Period）的巅峰，
但历法、文字、数学系统仍然在城邦中传承。

玛雅历法：双轮历系统。
① 260 天宗教历（Tzolk'in）+ ② 365 天太阳历（Haab'），每 52 年重合一次，形成一个大周期（Calendar Round）。
玛雅人还有一个"长纪历"（Long Count Calendar），追踪更长的历史时间轴——
"2012 年世界末日"谣言就是误读了这个历法的一个大周期结束点。

**玛雅象形文字** 是前哥伦布时代美洲最完善的文字系统，20 世纪末已有学者基本破译。
历史、天文、仪式、谱系都刻在石碑（stela）上。

城邦结构：玛雅从来没有统一为单一帝国，而是几十个独立城邦（蒂卡尔、奇琴伊察、科潘、乌斯马尔等）长期共存、联盟、战争。
这和阿兹特克的"帝国+进贡"结构以及印加的"统一国家+道路"结构都不同——这正是考试喜欢问三者比较题的地方。`,
          en: `The Ix Mutal Ahau story line uses the perspective of a Post-Classic Maya composite character to show Maya civilization after the 1200s — past the peak of the Classic Period, but with calendar, writing, and mathematics systems still living in the city-states.

Maya calendar: a dual-wheel system.
① 260-day ritual calendar (Tzolk'in) + ② 365-day solar calendar (Haab'), which realign every 52 years to form a Calendar Round.
The Maya also had the Long Count Calendar for tracking longer historical timelines.
The "2012 end-of-the-world" rumor was a misreading of one Long Count cycle's endpoint.

**Maya hieroglyphics** are the most complete writing system in pre-Columbian Americas, substantially deciphered by scholars in the late 20th century.
History, astronomy, ritual, and genealogy are recorded on stone stelae.

City-state structure: the Maya never unified into a single empire. Instead, dozens of independent city-states (Tikal, Chichén Itzá, Copán, Uxmal, etc.) coexisted, allied, and warred over centuries.
This is structurally distinct from the Aztec "empire + tribute" model and the Inca "unified state + roads" model — which is exactly why exams love three-way comparison questions.`,
        },
      },
    },

    // ── 卡 7 ── 三大文明比较（故事未充分覆盖 → standalone）
    {
      id: 'three-civilizations-comparison',
      termCn: '印加 vs 阿兹特克 vs 玛雅：三大文明比较',
      termEn: 'Inca vs Aztec vs Maya: Three-Civilization Comparison',
      defCn: '前哥伦布美洲三大文明，各自在不同地理环境下发展出不同的政治结构和核心技术：印加靠道路和劳役管理帝国；阿兹特克靠进贡和城市工程；玛雅靠精密历法和分散的城邦体制。',
      defEn: 'The three great pre-Columbian civilizations each developed different political structures and key technologies in different environments: the Inca managed their empire through roads and labor tribute; the Aztec through tribute and urban engineering; the Maya through precise calendars and a network of independent city-states.',
      standardRef: ['CA HSS 7.7.1-7.7.3', 'AP World KC-1.4'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'pachacuti', nodeId: 'pachacuti-N8', context: '帕查库特克那条故事线里回忆与其他地区的商人接触，暗示美洲文明的多元并存' },
        ],
      },
      standaloneText: {
        cn: `这是 AP 和 CA HSS 最爱出的三大文明比较题。
小 U 的记忆框架：**地点 + 核心技术 + 政治结构 + 独特之处**。

────────────────────────────────────────────────
印加（Inca）
• 地点：南美洲安第斯山脉（今秘鲁、玻利维亚、厄瓜多尔）
• 核心技术：quipu（结绳记事，无文字系统）+ Qhapaq Ñan（4 万公里道路网）
• 政治结构：高度中央集权，萨帕·印加（Sapa Inca）神王制，mit'a 劳役税
• 独特之处：世界上最大的无文字帝国；梯田农业（terrace farming）解决高海拔粮食问题；道路系统是核心管理工具，不是辅助工具
• 关键地标：马丘比丘（Machu Picchu）

────────────────────────────────────────────────
阿兹特克（Aztec / Mexica）
• 地点：中美洲墨西哥高原（今墨西哥中部）
• 核心技术：chinampa 浮动花园 + 进贡体系 + 象形文字（象形，非表音）
• 政治结构：三城联盟（Triple Alliance，特诺奇蒂特兰+特斯科科+塔库巴），通过进贡间接控制藩属城邦
• 独特之处：城市工程最发达（特诺奇蒂特兰 25 万人）；宗教-政治-军事三位一体（人祭、战争、帝国扩张是同一个系统）
• 关键地标：特诺奇蒂特兰（今墨西哥城地下）

────────────────────────────────────────────────
玛雅（Maya）
• 地点：中美洲热带低地（今墨西哥尤卡坦、危地马拉、伯利兹、洪都拉斯）
• 核心技术：最完善的美洲文字系统（象形文字，可书写历史和天文）+ 高精度历法（Tzolk'in 260 天 + Haab' 365 天双轮历）
• 政治结构：城邦制，从未统一；古典期（250–900 CE）达到巅峰
• 独特之处：学术文明（天文、数学、历法在美洲最精确）；"崩溃"（约 900 CE）原因至今争议——干旱、战争、贸易网络瓦解都有可能
• 关键地标：蒂卡尔（Tikal）、奇琴伊察（Chichén Itzá）

────────────────────────────────────────────────
选择题快查：
- 问"哪个文明有 quipu"→ 印加
- 问"哪个文明建在湖中央岛上"→ 阿兹特克（特诺奇蒂特兰）
- 问"哪个文明最早发展出完整文字系统"→ 玛雅
- 问"哪个文明从未统一为单一国家"→ 玛雅
- 问"哪个文明用道路管理帝国"→ 印加`,
        en: `This is the AP and CA HSS favorite three-civilization comparison question.
Xiao U's memory framework: **location + core technology + political structure + distinctive feature.**

────────────────────────────────────────────────
Inca
• Location: South American Andes (modern Peru, Bolivia, Ecuador)
• Core technology: quipu (knotted-cord records, no writing system) + Qhapaq Ñan (40,000 km road network)
• Political structure: highly centralized, Sapa Inca divine-king system, mit'a labor tax
• Distinctive: world's largest empire without a writing system; terrace farming solved high-altitude food production; roads were the primary governing tool, not supplementary
• Landmark: Machu Picchu

────────────────────────────────────────────────
Aztec (Mexica)
• Location: Mesoamerica, Mexican highlands (modern central Mexico)
• Core technology: chinampa floating gardens + tribute system + pictographic script (logographic, not phonetic)
• Political structure: Triple Alliance (Tenochtitlan + Texcoco + Tlacopan), controlling tributary city-states through tribute extraction
• Distinctive: most advanced urban engineering (Tenochtitlan at 250,000 people); religion-politics-military as a single unified system (sacrifice, war, and imperial expansion were one mechanism)
• Landmark: Tenochtitlan (now under Mexico City)

────────────────────────────────────────────────
Maya
• Location: Mesoamerican tropical lowlands (modern Yucatán Mexico, Guatemala, Belize, Honduras)
• Core technology: most complete writing system in the Americas (hieroglyphic, capable of recording history and astronomy) + high-precision calendars (Tzolk'in 260-day + Haab' 365-day dual system)
• Political structure: city-state system, never unified; Classic Period (250–900 CE) was the apex
• Distinctive: intellectually-oriented civilization (astronomy, mathematics, calendrics most precise in the Americas); the Classic Maya Collapse (ca. 900 CE) remains debated — drought, warfare, and trade network breakdown are all proposed causes
• Landmarks: Tikal, Chichén Itzá

────────────────────────────────────────────────
Multiple-choice quick lookup:
- "Which civilization used quipu?" → Inca
- "Which civilization's capital was built on an island in a lake?" → Aztec (Tenochtitlan)
- "Which civilization developed the most complete writing system first?" → Maya
- "Which civilization never unified into a single nation?" → Maya
- "Which civilization used roads as the primary tool of imperial governance?" → Inca`,
      },
      xiaoweiNote: {
        cn: `老师说三大文明比较是州考最容易出的大题之一，因为它同时考"知识量"（三个文明各自的特点）和"分析能力"（比较异同）。
我把这个表格背成：**印加=道路帝国，阿兹特克=城市帝国，玛雅=知识城邦**。
九个字，三个文明，抓住最核心的特征。`,
        en: `Teacher said the three-civilization comparison is one of the most likely extended-response questions on the state exam, because it tests both "content knowledge" (each civilization's features) and "analytical ability" (comparing similarities and differences).
My nine-word summary: **Inca = road empire, Aztec = city empire, Maya = intellectual city-states.**
Nine words, three civilizations, core feature each.`,
      },
    },

    // ── 卡 8 ── 哥伦布大交换（Columbian Exchange）框架（故事未覆盖 → standalone）
    {
      id: 'columbian-exchange-framework',
      termCn: '哥伦布大交换（Columbian Exchange）',
      termEn: 'Columbian Exchange',
      defCn: '哥伦布大交换指 1492 年之后，旧世界（欧亚非）与新世界（美洲）之间大规模双向交换动植物、疾病和人口的历史过程。对旧世界是人口红利（美洲作物支撑人口增长），对新世界是人口灾难（欧洲疾病造成 50–90% 人口死亡）。',
      defEn: 'The Columbian Exchange refers to the massive two-way transfer of plants, animals, diseases, and people between the Old World (Eurasia and Africa) and the New World (the Americas) after 1492. It was a population dividend for the Old World (American crops supported population growth) and a population catastrophe for the New World (European diseases killed 50–90% of indigenous people in some regions).',
      standardRef: ['AP World KC-4.1', 'AP World KC-4.2', 'CA HSS 7.7.2', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'malintzin', nodeId: 'malintzin-N8', context: '马林钦那条故事线末段看见西班牙人带来的牲畜和疾病，暗示接触后的双向交换' },
          { lens: 'ix-mutal-ahau', nodeId: 'maya-N9', context: '玛雅那条故事线尾声中隐含的人口崩溃' },
        ],
      },
      standaloneText: {
        cn: `"哥伦布大交换"（Columbian Exchange）是 AP World KC-4.1/4.2 的核心框架术语，指 1492 年哥伦布"接触"美洲之后，旧世界（欧亚非）与新世界（美洲）之间大规模双向交换动植物、疾病和人口的历史过程。
这个词由历史学家 Alfred Crosby 在 1972 年的同名著作中提出，是 AP 考试最高频的框架概念之一。

**为什么叫"交换"——它是双向的**

旧世界 → 新世界（美洲）：
- 牲畜：马、猪、牛、羊、鸡。接触前美洲只有安第斯的羊驼、美洲驼这类小型驯化牲畜，没有马、牛这种大型役畜和坐骑；马的到来彻底改变了平原文化。
- 谷物和蔬菜：小麦、大麦、甘蔗、香蕉。
- 最毁灭性的一项：天花（smallpox）、麻疹（measles）、流感等欧洲疾病。美洲原住民对这些疾病没有任何免疫力，某些地区在 100 年内人口减少了 50%–90%。这是人类史上最严重的疾病导致的人口崩溃。

新世界 → 旧世界（欧亚非）：
- 主粮作物：玉米（maize）、马铃薯（potato）、番薯、木薯（cassava）。这些高产作物传入欧洲和亚洲后，支撑了旧世界的人口爆炸。18–19 世纪欧洲人口增长的物质基础，很大程度上来自美洲作物。
- 其他：番茄、辣椒、可可（巧克力原料）、橡胶、烟草。
- 梅毒（syphilis）：从美洲传入欧洲，16 世纪横扫欧洲。

**为什么这是 AP 必考框架**

1. 因果（Causation）：欧洲为什么能征服美洲？军事力量是一部分，但疾病才是决定性的——天花到达时，阿兹特克和印加的人口已经崩溃，社会结构瓦解，西班牙人面对的是已被疾病击倒的对手。
2. 延续与变化（Continuity and Change）：接触前美洲 vs 接触后美洲——人口、土地使用、物种分布全部剧变；但原住民的文化、语言、记忆并未消失，这是 AP 要求的"变化中的延续"。
3. 比较（Comparison）：旧世界因美洲作物而人口增长，新世界因欧洲疾病而人口崩溃——同一个"交换"对两端的影响完全相反，这是最典型的 DBQ 多视角素材。

**关键数字（AP 选择题常考）**

- 接触前美洲原住民总人口估计约 5000 万至 1 亿（学界有争议，AP 不要求精确数字）
- 1600 年前后，因疾病和征服，部分地区原住民人口下降幅度达 50%–90%
- 玉米和马铃薯传入旧世界后，两百年内欧洲和中国的人口均出现显著增长

**考点关键句：** 哥伦布大交换是 1492 年之后最深刻的全球生态和人口变革，它的后果在两端截然不同——对旧世界是人口红利，对新世界是人口灾难。`,
        en: `"Columbian Exchange" is the core framework term for AP World KC-4.1/4.2. It refers to the massive, bidirectional exchange of plants, animals, diseases, and people between the Old World (Eurasia and Africa) and the New World (the Americas) that followed Columbus's 1492 contact.
The term was coined by historian Alfred Crosby in his 1972 book of the same name, and is one of the highest-frequency framework concepts on AP exams.

**Why "exchange" — it was bidirectional**

Old World to New World (Americas):
- Livestock: horses, pigs, cattle, sheep, chickens. Before contact the Americas had only small domesticated animals such as the Andean llama and alpaca — no large draft animals or mounts like horses and cattle. The arrival of horses transformed Plains cultures entirely.
- Grains and produce: wheat, barley, sugarcane, bananas.
- Most destructive: smallpox, measles, influenza, and other European diseases. Indigenous Americans had no immunity; in some regions, populations fell 50–90% within a hundred years. This was the most severe disease-driven population collapse in recorded human history.

New World to Old World (Eurasia and Africa):
- Staple crops: maize, potato, sweet potato, cassava. These high-yield crops entering Europe and Asia supported Old World population explosions. Much of Europe's 18th–19th century population growth rested materially on American crops.
- Others: tomatoes, chili peppers, cacao (chocolate), rubber, tobacco.
- Syphilis: transmitted from the Americas to Europe, sweeping across Europe in the 16th century.

**Why this is an AP must-know framework**

1. Causation: why could Europe conquer the Americas? Military force was part of it, but disease was decisive — when smallpox arrived, Aztec and Inca populations had already collapsed and social structures had broken down. The Spanish faced opponents already brought down by disease.
2. Continuity and Change: pre-contact Americas vs post-contact Americas — population, land use, and species distribution all changed radically; but indigenous cultures, languages, and memory did not disappear. That is the "continuity within change" AP requires.
3. Comparison: the Old World gained population from American crops; the New World lost population to European disease. The same "exchange" had opposite effects on each end — the quintessential DBQ multi-perspective material.

**Key figures (AP multiple choice)**

- Pre-contact Indigenous American population: estimated 50 million to 100 million (debated; AP does not require a precise number)
- By around 1600, disease and conquest had reduced indigenous populations by 50–90% in some regions
- After maize and potato entered the Old World, both European and Chinese populations grew significantly within two centuries

**Key exam sentence:** The Columbian Exchange was the deepest ecological and demographic transformation of the world after 1492, with entirely opposite outcomes on each end — a population dividend for the Old World, a population catastrophe for the New World.`,
      },
      xiaoweiNote: {
        cn: `老师说"哥伦布大交换"这个词是考试里的框架术语，不是普通词汇——
选择题如果出现"Columbian Exchange"，题目的核心一定在"双向 + 不对称"上：旧世界和新世界交换了东西，但后果完全不同。

记忆口诀：**"旧世界送疾病，新世界送粮食——两边都没料到这些东西会到来。"**

还有一个常考陷阱：天花不是西班牙人"故意"带来的（不像后来有些殖民者故意传播），但它造成的死亡比所有战争加在一起还多。AP 不让你评判意图，让你分析后果。

马铃薯（potato）原产安第斯，玉米（maize）原产中美洲，两者经哥伦布大交换传入旧世界——这是地理农业卡和这张卡的知识要连在一起用的地方。`,
        en: `Teacher said "Columbian Exchange" is a framework term in exams, not ordinary vocabulary.
When it appears in multiple choice, the question always turns on "bidirectional + asymmetric": Old World and New World exchanged things, but the consequences were completely different.

Mnemonic: "Old World sent disease; New World sent food — neither side expected what was coming."

A common exam trap: smallpox was not deliberately introduced by the Spanish (unlike some later colonial actors), but it killed more people than all the wars combined. AP doesn't ask you to judge intent — it asks you to analyze consequences.

Potato (native to the Andes) and maize (native to Mesoamerica) both reached the Old World through the Columbian Exchange — this card's knowledge connects directly to the geography-and-agriculture card in this same notebook.`,
      },
    },

    // ── 卡 9 ── 地理与农业基础：三文明如何养活自己（故事覆盖散落各处，补完视角）
    {
      id: 'geography-agriculture-foundations',
      termCn: '地理环境 + 农业创新：三大文明如何养活帝国',
      termEn: 'Geography + Agricultural Innovation: How the Three Civilizations Fed Empires',
      defCn: '三大文明所处地形完全不同，各自发展出因地制宜的农业方法：印加在高山上修梯田；阿兹特克在湖上建浮动花园；玛雅在热带低地用刀耕火种加精准历法。三大文明的共同主粮是玉米。',
      defEn: 'The three civilizations occupied completely different terrain and developed farming methods to match: the Inca cut terraces into mountain slopes; the Aztec built floating gardens on a lake; the Maya used slash-and-burn farming plus precise calendars in the tropical lowlands. All three shared maize as their main staple crop.',
      standardRef: ['CA HSS 7.7.1', 'AP World KC-1.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'pachacuti', nodeId: 'pachacuti-N5', context: '帕查库特克那条故事线中的梯田农业场景' },
          { lens: 'ix-mutal-ahau', nodeId: 'maya-N3', context: '伊克斯·穆塔尔·阿豪那条故事线中的玉米种植与历法联系' },
        ],
      },
      standaloneText: {
        cn: `三大文明所处地形完全不同，农业解决方案也因地制宜——这正是 CA HSS 7.7.1 强调的"环境与文明发展的关系"。

印加：安第斯山脉，海拔 2000–5000 米。
解决方案——梯田农业（terrace farming / andenes）：把陡坡切割成阶梯状平台，减少水土流失，增加耕作面积。
主要粮食：马铃薯（土豆，potato，原产安第斯山脉）、藜麦（quinoa，高蛋白谷物）、玉米（在低海拔区）。
粮仓（qollqa）分布在全国道路沿线，储存干燥的冻干食品（chuño，冻干土豆），可保存几年——这是 mit'a 劳役工人的食物保障，也是军队的后勤系统。

阿兹特克：湖区，水面种植。
解决方案——chinampa（浮动花园）：在浅湖底插木桩，堆积水草和淤泥，形成长条形耕地。
耕地之间的水道既是灌溉水源，也是运输通道。
主要粮食：玉米（maize）、南瓜、豆类（"三姐妹"，Three Sisters）以及来自进贡体系的各地物产（可可、辣椒、蜂蜜）。

玛雅：热带低地，雨季/旱季分明。
解决方案——刀耕火种（milpa / slash-and-burn）+ 有限灌溉。
**玛雅历法的精准性直接服务于农业**：知道什么时候种、什么时候收，在气候变化剧烈的热带低地至关重要。
主要粮食也是"三姐妹"——玉米、豆类、南瓜（这三种组合耕作可以互补土壤营养，不需要休耕）。

考点关键句：玉米（maize）是三大文明共同的主粮——这不是巧合，是美洲农业扩散的历史证据。
玉米从中美洲向北传到北美，向南传到安第斯，是美洲文明复杂化的物质基础。`,
        en: `The three civilizations occupied entirely different terrain and developed agriculture accordingly — this is exactly what CA HSS 7.7.1 emphasizes about "the relationship between environment and civilizational development."

Inca: Andes Mountains, 2,000–5,000 meters elevation.
Solution — terrace farming (andenes): cutting steep slopes into stepped platforms to reduce erosion and expand cultivable area.
Main crops: potato (native to the Andes), quinoa (high-protein grain), and maize at lower elevations.
Granaries (qollqa) distributed along the road network stored freeze-dried food (chuño, freeze-dried potatoes preserved for years) — food security for mit'a workers and military logistics in one system.

Aztec: lake zone, surface cultivation.
Solution — chinampa: wooden stakes driven into shallow lake beds, piled with aquatic plants and mud to form long cultivation strips.
The water channels between plots served as both irrigation and transportation.
Main crops: maize, squash, beans ("Three Sisters"), plus tribute-system imports (cacao, chili, honey).

Maya: tropical lowlands, pronounced wet/dry seasons.
Solution — milpa (slash-and-burn) + limited irrigation.
**The precision of the Maya calendar directly served agriculture**: knowing exactly when to plant and harvest was critical in unpredictable tropical lowlands.
Main crops were also the "Three Sisters" — maize, beans, and squash (these three grown together complement soil nutrients, eliminating the need for crop rotation or fallow periods).

Key exam sentence: Maize was the shared staple of all three civilizations — this is not coincidence.
It is historical evidence of agricultural diffusion: maize spread from Mesoamerica northward into North America and southward into the Andes, serving as the material foundation for the increasing complexity of American civilizations.`,
      },
      xiaoweiNote: {
        cn: `"三姐妹"（Three Sisters：玉米+豆类+南瓜）这个概念老师说 AP 题目很爱考，因为它同时涉及"农业技术"和"生态知识"。
还有：马铃薯（potato）原产安第斯山脉——这道题很多同学答错，以为土豆是欧洲食物，实际上是印加人先种的，哥伦布大交换后才传到欧洲。`,
        en: `Teacher said the "Three Sisters" (maize + beans + squash) is a favorite AP topic because it connects both "agricultural technology" and "ecological knowledge."
Also: the potato is native to the Andes — many students get this wrong, assuming potatoes are European food. In fact the Inca cultivated them first; potatoes reached Europe only after the Columbian Exchange.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `印加帝国用 mit'a（劳役制）代替货币税——农民不交钱，而是出人力，国家回报食物和工具。
欧洲中世纪的封建制也是农奴为领主服役，领主提供土地和保护。

这两种制度有哪些相似之处？又有什么根本不同？
如果你是一个 1450 年的印加农民，你会怎么看待自己的 mit'a 义务——是沉重负担，还是合理交换，还是别的？`,
      en: `The Inca Empire used mit'a (labor tribute) instead of money taxes — peasants owed the state a period of labor, and the state provided food and tools in return.
Medieval European feudalism also required serfs to work for lords, who provided land and protection in exchange.

What are the similarities between these two systems? What are the fundamental differences?
If you were an Inca farmer in 1450, how would you view your mit'a obligation — as a heavy burden, a fair exchange, or something else entirely?`,
      hintCn: `提示：相似点——两者都是劳动换保护/保障的交换；都有等级制度；都不是纯粹的自由雇佣关系。

根本不同——
① 规模：印加的 mit'a 服务于国家基础设施（道路、神庙、粮仓），欧洲封建制主要服务于庄园和军事；
② 宗教含义：mit'a 工作有宗教神圣性，给国家服役=服务太阳神；
③ 国家提供的回报：印加国家提供食物和工具（一种保障），欧洲封建制的庄园主提供的"保护"经常更虚。

进阶思考：今天有没有类似的"以劳动换保障"的制度？（征兵制？义务教育？）`,
      hintEn: `Hint: Similarities — both involve labor-for-protection/security exchanges; both have hierarchical structures; neither is a free-wage labor relationship.

Fundamental differences:
① Scale: mit'a served state infrastructure (roads, temples, granaries); European feudal labor mainly served manorial agriculture and military logistics.
② Religious meaning: mit'a labor carried religious significance — working for the state meant serving the sun deity.
③ What the state provided back: the Inca state gave food and tools (a real guarantee); the feudal lord's "protection" was often more theoretical.

Going deeper: are there similar "labor-for-security" arrangements today? (Military conscription? Compulsory education?)`,
      conceptsActivated: ['inca-mit-a-quipu-road', 'pachacuti-inca-expansion'],
    },
    {
      id: 'q2',
      cn: `阿兹特克人祭在今天看来很难以理解——但在阿兹特克宇宙观里，人祭是维持太阳运转的神圣义务。
了解了这个内在逻辑之后，你对"文明"这个词的理解有没有变化？

"文明"是不是只有一种样子？谁有资格定义什么是"文明"、什么是"野蛮"？`,
      en: `Aztec human sacrifice is difficult to understand from today's vantage point — but within Aztec cosmology, it was a sacred obligation to keep the sun moving.

After understanding that internal logic, has your understanding of the word "civilization" changed at all?

Is there only one form of civilization? Who gets to decide what counts as "civilized" and what counts as "barbaric"?`,
      hintCn: `提示：历史学家用"文化相对主义"（cultural relativism）来描述"理解一种文化必须从它自己的内部逻辑出发"这个方法论。
这不是说"所有行为都一样对"，而是说"评判之前要先理解"。

进阶思考：当西班牙人 1519 年抵达时，他们看到人祭，认为阿兹特克"野蛮"，这成为他们征服的"道德理由"之一。
而阿兹特克人看到西班牙人用剑杀死战俘而不是举行仪式，觉得西班牙人才是"野蛮的"——因为对阿兹特克人来说，有仪式的死亡是尊荣，无意义的屠杀才是残忍。

这两种判断谁是"野蛮"，背后是什么逻辑？`,
      hintEn: `Hint: Historians use "cultural relativism" to describe the methodology of "understanding a culture from its own internal logic."
This doesn't mean "all behaviors are equally valid" — it means "understand before judging."

Going deeper: when the Spanish arrived in 1519, they witnessed sacrifice and called the Aztec "barbaric" — using that as partial moral justification for conquest.
The Aztec, in turn, watched the Spanish kill prisoners with swords rather than through ritual, and considered the Spanish to be the barbaric ones — because within Aztec understanding, a ritualized death was honorable; a meaningless massacre was cruel.

Both sides used the word "barbaric" to describe the other. What logic was each using? Who was doing the defining?`,
      conceptsActivated: ['aztec-human-sacrifice-cosmology', 'malintzin-spanish-contact'],
    },
    {
      id: 'q3',
      cn: `1492 年，哥伦布"发现"了美洲——这是我们在教科书里读到的叙述框架。
但是美洲已经有人住了几千年了：印加、阿兹特克、玛雅，以及几百个其他民族。

"发现"这个词，是谁的视角？如果你是 1492 年的特诺奇蒂特兰居民，你会用什么词来描述哥伦布的到来？

这种叙述框架的选择，会不会影响我们今天看待这段历史的方式？`,
      en: `In 1492, Columbus "discovered" the Americas — this is the narrative frame we encounter in textbooks.
But the Americas had been inhabited for thousands of years: Inca, Aztec, Maya, and hundreds of other peoples.

"Discovery" — whose perspective does that word come from? If you were a resident of Tenochtitlan in 1492, what word would you use to describe Columbus's arrival?

Does the choice of narrative framing affect how we understand this history today?`,
      hintCn: `提示：这类问题在 AP 里叫"叙述框架"（narrative framing）分析，也叫"谁写历史"。

一些学者建议用"接触"（contact）替代"发现"（discovery），因为"发现"预设了一个"发现者"和一个"被发现的对象"——后者是被动的、无历史的、等待被"文明化"的。
而"接触"承认双方都是有历史、有文化的主体。

进阶思考：这不只是 1492 年的问题。今天我们还有没有其他"发现"框架的例子——某一群人的历史被另一群人定义和叙述，当事人自己的声音被边缘化？`,
      hintEn: `Hint: In AP, this type of question is called "narrative framing" analysis, or "whose history is this."
Some historians propose replacing "discovery" with "contact" — because "discovery" presupposes a "discoverer" and a "thing to be discovered," with the latter passive, ahistorical, and waiting to be "civilized."
"Contact" acknowledges that both sides were subjects with their own histories and cultures.

Going deeper: this isn't only a 1492 question. Are there other "discovery framing" examples today — situations where one group's history is defined and narrated by another group, with the original people's voices marginalized?`,
      conceptsActivated: ['malintzin-spanish-contact', 'three-civilizations-comparison', 'tenochtitlan-tribute-system'],
    },
  ],
};

export default notebook;
