// ─── 同伴笔记本架构 v1 · Medieval Japan ──────────────────────────
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
//   - storyboard 提供情感锚点（Tokimune / Sesshu / Masako 三条线）
//   - notebook 提供考点闭环（封建等级制、武士道、平安→镰仓过渡、能乐文化 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - California HSS 7.5.3, 7.5.5, 7.5.6
//   - AP World History KC-2.3
//   - 弥补 medieval-japan 课纲覆盖率从 63% → ~96%
//
// schemaVersion: 1 · notebookVersion: medieval-japan-v1

export var notebook = {
  topicId: 'medieval-japan',
  topicNameCn: '中世日本',
  topicNameEn: 'Medieval Japan',
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
    cn: `好，今天老师要讲中世日本（大约 1185-1600 年）。我在白板上看到这几个单词：

Shogun（将军）、Daimyo（大名）、Samurai（武士）、Bakufu（幕府）

等等——Shogun 我在动漫里见过！但我不知道它在历史课里到底是什么意思。
还有这几个名字：

北条时宗 Tokimune Hojo、雪舟 Sesshu Toyo、北条政子 Masako Hojo

然后老师还说了这些词要记住：神风（kamikaze）、禅宗（Zen Buddhism）、
武士道（Bushido）、水墨画（sumi-e）

我把这些都先写下来。等下读三个历史故事，读完再来对照——
我想搞明白：日本的武士制度和欧洲的骑士制度到底哪里像、哪里不像？
还有：日本和中国在中世纪是什么关系？

老师说这章必考题之一是：画出日本封建等级金字塔的四层结构。
我先把这个任务记着，读完之后来填。`,
    en: `Okay, today we're learning Medieval Japan (roughly 1185-1600). I see these words on the whiteboard:

Shogun, Daimyo, Samurai, Bakufu

Wait — I've seen "Shogun" in anime! But I don't actually know what it means in history class.
And these names:

Tokimune Hojo, Sesshu Toyo, Masako Hojo

Plus these terms to memorize: kamikaze, Zen Buddhism, Bushido, sumi-e.

Let me write all of this down. After reading the three stories, I'll come back and check —
I want to figure out: how are Japan's samurai warriors similar to European knights, and how are they different?
Also: what was Japan's relationship with China in the medieval period?

Teacher said one guaranteed exam question is: draw the four-tier Japanese feudal pyramid.
Noting that task now so I can fill it in after reading.`,
    keyTerms: [
      { cn: '幕府', en: 'Bakufu' },
      { cn: '将军', en: 'Shogun' },
      { cn: '大名', en: 'Daimyo' },
      { cn: '武士', en: 'Samurai' },
      { cn: '武士道', en: 'Bushido' },
      { cn: '神风', en: 'Kamikaze' },
      { cn: '御家人', en: 'Gokenin' },
      { cn: '水墨画', en: 'Sumi-e' },
      { cn: '禅宗', en: 'Zen Buddhism' },
      { cn: '能乐', en: 'Noh theater' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '北条时宗',
        nameEn: 'Tokimune Hojo',
        ipa: '/tɒkɪˈmuːneɪ ˈhoʊdʒoʊ/',
        roleCn: '镰仓幕府第八代执权，抵御两次蒙古入侵',
        roleEn: 'Eighth regent of Kamakura shogunate, repelled two Mongol invasions',
        mustKnow: false,
        audioKey: 'tokimune-hojo',
      },
      {
        nameCn: '雪舟等杨',
        nameEn: 'Sesshu Toyo',
        ipa: '/ˈsɛʃuː ˈtoɪoʊ/',
        roleCn: '室町时代禅僧画家，赴明朝学习后建立日本水墨画传统',
        roleEn: 'Muromachi Zen monk-painter, trained in Ming China and founded the Japanese sumi-e tradition',
        mustKnow: true,
        audioKey: 'sesshu-toyo',
      },
      {
        nameCn: '北条政子',
        nameEn: 'Masako Hojo',
        ipa: '/mɑːˈsɑːkoʊ ˈhoʊdʒoʊ/',
        roleCn: '"尼将军"，镰仓幕府联合创立者，丧夫后实际掌握政权',
        roleEn: '"Nun Shogun," co-founder of Kamakura shogunate, held real political power after husband\'s death',
        mustKnow: true,
        audioKey: 'masako-hojo',
      },
      {
        nameCn: '源赖朝',
        nameEn: 'Minamoto no Yoritomo',
        ipa: '/mɪˈnɑːmətoʊ nɒ jɒrɪˈtoʊmoʊ/',
        roleCn: '镰仓幕府创立者，第一代征夷大将军',
        roleEn: 'Founder of Kamakura shogunate, first Shogun',
        mustKnow: false,
        audioKey: 'yoritomo',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ─ 1. 镰仓幕府与武士制度（Lens 1 tokimune — covered）─────
    {
      id: 'kamakura-shogunate',
      termCn: '镰仓幕府 / 武士制度',
      termEn: 'Kamakura Shogunate / Samurai System',
      standardRef: ['CA HSS 7.5.3', 'AP World KC-2.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'tokimune-perpetrator',
        nodeIds: ['tokimune-N1', 'tokimune-N3', 'tokimune-N8'],
        xiaoweiNote: {
          cn: `第一个故事里讲到了！北条时宗（Tokimune Hojo，镰仓幕府执权）那条线——
他管理的制度叫幕府（Bakufu，将军/执权主导的武士政府）。

考点要记住：幕府不是普通政府。天皇名义上还存在，
但实际权力在将军（Shogun，"征夷大将军"，对外是军事总指挥）手里，
幕府时代天皇成了象征性的摆设。

然后是御家人（gokenin）制度：将军把土地分给武士（samurai），
武士对将军宣誓效忠，提供军事服务——这就是日本版封建制度的核心交换。

考点关键句：镰仓幕府（1185-1333）是日本第一个武士政权，
标志着权力从京都贵族（公卿）转移到武士阶级（武家）。`,
          en: `Covered in the first story — Tokimune Hojo's line deals with the shogunate directly.

Key exam point: the Bakufu (literally "tent government") was not a regular government.
The Emperor still existed in name, but real power was held by the Shogun
("Seii Taishogun," supreme military commander in title). During the shogunate era,
the Emperor became a symbolic figurehead.

Then there's the gokenin system: the Shogun distributed land to samurai warriors,
who swore loyalty and provided military service in exchange — this is the core exchange
at the heart of Japanese feudalism.

Key exam sentence: The Kamakura shogunate (1185-1333) was Japan's first warrior
government, marking the transfer of real power from Kyoto court nobles (kuge)
to the warrior class (buke).`,
        },
      },
    },

    // ─ 2. 蒙古入侵与神风（Lens 1 tokimune — covered）────────
    {
      id: 'mongol-invasions-kamikaze',
      termCn: '蒙古入侵 / 神风',
      termEn: 'Mongol Invasions / Kamikaze',
      standardRef: ['CA HSS 7.5.3', 'AP World KC-2.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'tokimune-perpetrator',
        nodeIds: ['tokimune-N5', 'tokimune-N9', 'tokimune-N11'],
        xiaoweiNote: {
          cn: `故事里两次蒙古入侵都讲到了：1274 年（文永之役）和 1281 年（弘安之役）。
两次都因台风摧毁蒙古舰队而告终——日本人叫这些台风"神风"（kamikaze，"神圣之风"）。

考试常考的陷阱：神风不是日本赢的原因，是台风帮了忙。
北条时宗领导的抵抗让蒙古人无法快速登陆，但如果没有台风，
历史学家认为日本可能失守。

还有一个重要后果：胜利了但没有战利品可分。
御家人（gokenin）武士浴血奋战，却没有获得新土地奖励——
因为没有占领蒙古领土——这让很多武士对幕府怨恨积累，
最终成为镰仓幕府 1333 年衰落的内因之一。

考点关键句：kamikaze 原指 1274/1281 年摧毁蒙古舰队的台风，
二战时日本用这个词命名神风特攻队飞行员——是同一个词，
两个时代，意思完全不同。`,
          en: `Both Mongol invasions are in the story: 1274 (Battle of Bun'ei) and 1281 (Battle of Koan).
Both ended when typhoons destroyed the Mongol fleet — the Japanese called these storms
"kamikaze" ("divine winds").

Common exam trap: kamikaze wasn't the reason Japan won — the typhoons intervened.
Tokimune's resistance prevented a quick Mongol landing, but historians think Japan
might have fallen without the storms.

There's also an important consequence: victory came with no spoils to share.
The gokenin samurai had fought fiercely but received no new land as reward —
because no Mongol territory had been captured — building resentment toward the shogunate
that became one of the internal causes of Kamakura's collapse in 1333.

Key exam sentence: kamikaze originally referred to the 1274/1281 typhoons that
destroyed the Mongol fleet; WWII Japan reused the word for suicide pilots —
same word, two eras, completely different contexts.`,
        },
      },
    },

    // ─ 3. 禅宗与武士文化（Lens 1 tokimune — covered）────────
    {
      id: 'zen-samurai-culture',
      termCn: '禅宗与武士文化',
      termEn: 'Zen Buddhism and Samurai Culture',
      standardRef: ['CA HSS 7.5.5', 'AP World KC-2.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'tokimune-perpetrator',
        nodeIds: ['tokimune-N2', 'tokimune-N6'],
        xiaoweiNote: {
          cn: `故事里北条时宗的禅宗修行是重要线索。
禅宗（Zen Buddhism）在镰仓时代从中国（宋朝）传入日本，武士阶层大量接受禅宗，
因为它强调：专注当下、接受死亡、训练心智——这些都和战场上的需求非常契合。

禅宗对武士文化的具体影响：
- 禅定（meditation）→ 战前心理准备
- 接受无常（impermanence）→ 不怕死亡
- 一击必杀的专注力 → 剑道（kendo）的美学根基

考试连接：武士道（Bushido）的伦理体系里有大量禅宗痕迹。
AP 题有时会问："日本武士阶级接受禅宗的动机是什么？"
标准答案：禅宗的心理训练符合武士对纪律、冷静、面对死亡的职业需求。`,
          en: `Tokimune's Zen practice is a key thread in the story.
Zen Buddhism entered Japan from China (Song Dynasty) during the Kamakura period.
The samurai class adopted Zen widely because it emphasized focus in the present moment,
acceptance of death, and mental discipline — all directly relevant to battlefield demands.

Zen's specific influence on samurai culture:
- Meditation (zazen) → psychological preparation before battle
- Acceptance of impermanence → no fear of death
- Single-strike focus → aesthetic foundation of kendo (sword arts)

Exam connection: the Bushido ethical code carries extensive Zen influences.
AP questions sometimes ask: "What motivated the samurai class to adopt Zen Buddhism?"
Standard answer: Zen's mental training aligned with samurai professional requirements
for discipline, calm, and facing death.`,
        },
      },
    },

    // ─ 4. 日本与明朝的文化交流（Lens 2 sesshu — covered）────
    {
      id: 'japan-ming-cultural-exchange',
      termCn: '日本与明朝的文化交流 / 水墨画',
      termEn: 'Japan-Ming Cultural Exchange / Sumi-e',
      standardRef: ['CA HSS 7.5.6', 'AP World KC-2.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'sesshu-mediator',
        nodeIds: ['sesshu-N3', 'sesshu-N7', 'sesshu-N10'],
        xiaoweiNote: {
          cn: `雪舟等杨（Sesshu Toyo，室町时代禅僧画家）那条线全程讲日中文化交流。

1467 年，雪舟以遣明使随从的身份赴中国，在宁波和杭州跟明朝画家学习了约两年。
他学的是"水墨画"（sumi-e，只用墨、不用彩色）——这个画法原来是中国的宋元传统。

回日本后，雪舟做了一件重要的事：他没有直接复制中国风格，
而是把它"日本化"——用日本的山川景色做主题，
发展出更有力量感、笔触更粗犷的个人风格，
被后世公认为日本水墨画的奠基人。

这个"学习→本土化"的过程在 AP 考试里是重要范式：
日本长期从中国吸收文化（汉字→假名、儒学、佛教），
但每次都会加工转化成独特的"日本版"。

考点关键句：日本的文化本土化（cultural adaptation）模式——
先选择性吸收外来文化，再以本土审美重塑，是理解日本文化史的核心逻辑。`,
          en: `Sesshu Toyo's storyline is entirely about Japan-China cultural exchange.

In 1467, Sesshu traveled to China with the diplomatic mission to the Ming court,
spending roughly two years studying with painters in Ningbo and Hangzhou.
He was learning sumi-e (ink-only painting, no colors) — a technique originally
from the Chinese Song-Yuan tradition.

Back in Japan, Sesshu did something important: rather than copying Chinese style directly,
he "Japanized" it — using Japanese landscapes as subject matter and developing
a more powerful, boldly-brushed personal style. Later generations recognized him as the
founder of the Japanese sumi-e tradition.

This "learn then localize" process is a key AP pattern: Japan consistently absorbed
culture from China (Chinese characters → kana, Confucianism, Buddhism)
but each time reshaped it into a distinct "Japanese version."

Key exam sentence: Japan's model of cultural adaptation — selectively absorbing
foreign culture, then reshaping it through a local aesthetic — is the core logic
for understanding Japanese cultural history.`,
        },
      },
    },

    // ─ 5. 女性政治权力（Lens 3 masako — covered）────────────
    {
      id: 'masako-women-political-power',
      termCn: '北条政子 / 女性政治权力',
      termEn: 'Masako Hojo / Women\'s Political Power',
      standardRef: ['CA HSS 7.5.3', 'AP World KC-2.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'masako-receiving',
        nodeIds: ['masako-N1', 'masako-N5', 'masako-N9', 'masako-N11'],
        xiaoweiNote: {
          cn: `北条政子（Masako Hojo，"尼将军"）那条线讲了她在封建体制下掌握实权的过程。

她是源赖朝（Minamoto no Yoritomo，镰仓幕府创立者）的妻子。
赖朝 1199 年死后，政子剃发出家（名义上成为尼姑），但完全没有退出政治。
她实际主导了幕府的军政决策，史称"尼将军"。

1221 年，后鸟羽上皇（Go-Toba）发动"承久之乱"想夺回权力。
政子在危急时刻亲自向御家人武士发表演讲，稳定军心——这场演讲被日本史家比作
"日本版马丁·路德·金演讲"。幕府赢了，天皇被流放。

careful framing：政子的例子说明日本中世女性地位很复杂。
她的权力是例外，不是规律——普通武士家庭的妻子没有这种政治空间。
但相比同时代欧洲，日本贵族女性在某些情况下确实有更大的继承权和财产权。

AP 考点：政子是日本历史上"非正式权力"最大的女性之一，
她的例子常作为"女性在父权制社会中的权力边界"的 DBQ 材料。`,
          en: `Masako Hojo's storyline covers how she held real power inside the feudal system.

She was the wife of Minamoto no Yoritomo (founder of the Kamakura shogunate).
After Yoritomo's death in 1199, Masako shaved her head (nominally becoming a Buddhist nun)
but did not leave politics. She effectively controlled the shogunate's military and
political decisions — history calls her the "Nun Shogun."

In 1221, Retired Emperor Go-Toba launched the Jokyu War to reclaim power.
At the critical moment, Masako personally addressed the gokenin warriors to steady their resolve —
Japanese historians compare this speech to a "Japanese equivalent of a founding leader's
rally." The shogunate won; the emperor was exiled.

Careful framing: Masako's example shows that women's status in medieval Japan was complicated.
Her power was the exception, not the rule — wives in ordinary samurai families had no such
political space. But compared to contemporary Europe, Japanese aristocratic women did have
broader inheritance and property rights in certain circumstances.

AP exam point: Masako is one of the most powerful women in Japanese history via
"informal authority." Her case frequently appears as DBQ material on "the limits of
women's power in patriarchal societies."`,
        },
      },
    },

    // ─ 6. 封建制度结构（standaloneText — NOT covered）────────
    {
      id: 'feudal-hierarchy',
      termCn: '日本封建等级制度',
      termEn: 'Japanese Feudal Hierarchy',
      standardRef: ['CA HSS 7.5.3', 'AP World KC-2.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'tokimune-perpetrator', nodeId: 'tokimune-N3', context: '御家人（gokenin）武士向将军/执权效忠的场景' },
          { lens: 'masako-receiving', nodeId: 'masako-N5', context: '政子向御家人发表演讲，体现层级关系' },
        ],
      },
      standaloneText: {
        cn: `日本中世封建等级制度是 Grade 7 必考考点，几乎每年都会考四层结构。

四层金字塔（从上到下）：

第一层 — 将军（Shogun，/ˈʃoʊɡʌn/，"征夷大将军"）
实际军事和政治最高权力。天皇名义上存在，但将军才是真正的统治者。
幕府（Bakufu，/bɑːˈkuːfuː/，字面意思"帐篷政府"）是将军的武士政权总部。

第二层 — 大名（Daimyo，/ˈdaɪmjoʊ/，"大领地名主"）
地方领主，控制各地封地，指挥自己的武士家臣。
将军把土地分给大名，大名效忠将军，提供士兵——这是封建制度的核心交换。

第三层 — 武士（Samurai，/ˈsæmʊraɪ/）
职业武士，服务于大名或直接服务于将军。
武士的身份是世袭的，有权佩刀，有特殊的法律地位。

第四层 — 农民（Peasants）
耕种土地，缴纳赋税，为战时提供劳役。占人口绝大多数。
之下还有商人和手工业者，但武士文化贬低商人（认为商业不如农业"高尚"）。

和欧洲封建制的对比（AP 常考比较题）：

相似点：
- 都是土地换忠诚 + 军事服务的交换逻辑
- 都有严格的等级世袭制度
- 骑士（knight）vs 武士（samurai）都有专属的荣誉伦理代码

不同点：
- 日本天皇一直在名义上存在（欧洲没有这种"名义最高权威"的设置）
- 日本封建制度更中央化：将军-大名-武士三层都对上一级有明确的效忠链
- 欧洲封建制度更分散：国王往往无法有效控制大领主
- 日本武士道（Bushido）有切腹（seppuku）传统，欧洲骑士道（chivalry）没有对应的仪式性自杀`,
        en: `The Japanese medieval feudal hierarchy is a guaranteed Grade 7 exam topic —
the four-tier structure appears almost every year.

Four-tier pyramid (top to bottom):

Tier 1 — Shogun (/ˈʃoʊɡʌn/, "Seii Taishogun")
Held supreme real military and political authority. The Emperor still existed in name,
but the Shogun was the actual ruler. The Bakufu (/bɑːˈkuːfuː/, literally "tent government")
was the Shogun's warrior-government headquarters.

Tier 2 — Daimyo (/ˈdaɪmjoʊ/, "great domain lord")
Regional lords who controlled territorial estates and commanded their own samurai retainers.
The Shogun distributed land to daimyo; daimyo pledged loyalty and provided troops —
this exchange is the core mechanism of feudalism.

Tier 3 — Samurai (/ˈsæmʊraɪ/)
Professional warriors serving a daimyo or the Shogun directly.
Samurai status was hereditary; they had the right to carry swords and held special legal standing.

Tier 4 — Peasants
Farmed the land, paid taxes, provided labor in wartime.
The vast majority of the population. Merchants and artisans ranked below or alongside peasants,
but warrior culture looked down on merchants (commerce was considered less honorable than farming).

Comparison with European feudalism (common AP comparison question):

Similarities:
- Both ran on land-for-loyalty + military service exchange
- Both had strict hereditary hierarchies
- Both knights and samurai had exclusive honor codes

Differences:
- Japan's Emperor remained a nominal presence throughout (Europe had no equivalent "nominal supreme authority")
- Japanese feudalism was more vertically unified: Shogun-daimyo-samurai had a clear loyalty chain upward
- European feudalism was more fragmented: kings often couldn't effectively control major lords
- Bushido included the practice of seppuku (ritual self-disembowelment); European chivalry had no equivalent ritual suicide`,
      },
      xiaoweiNote: {
        cn: `老师说四层金字塔是"画图题"必考——画出来，每层写英文术语和中文解释。
我的记忆口诀：S-D-S-P（Shogun-Daimyo-Samurai-Peasant），
从上到下一路"降"，权力越来越小，人口越来越多。

和欧洲封建制对比：考点记住"土地换忠诚"是两边共同点，
"天皇名义存在" + "切腹"是日本独有特征。`,
        en: `Teacher said the four-tier pyramid is a guaranteed "draw-and-label" question.
My mnemonic: S-D-S-P (Shogun-Daimyo-Samurai-Peasant), descending in power,
ascending in population.

For the Europe comparison: remember "land for loyalty" is the shared feature;
"nominal Emperor" and "seppuku" are Japan-unique characteristics.`,
      },
    },

    // ─ 7. 武士道（Bushido）（standaloneText — NOT covered）────
    {
      id: 'bushido',
      termCn: '武士道（Bushido）',
      termEn: 'Bushido — The Way of the Warrior',
      standardRef: ['CA HSS 7.5.5'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'tokimune-perpetrator', nodeId: 'tokimune-N2', context: '北条时宗禅修场景涉及武士的荣誉与死亡观' },
        ],
      },
      standaloneText: {
        cn: `武士道（Bushido，"武士之道"）是日本武士阶级的伦理准则，
大约在镰仓时代（1185-1333）形成，室町时代（1336-1573）成型。

核心价值观（七德，考试常见）：
1. 义（Righteousness）— 道德正直，不贪图私利
2. 勇（Courage）— 身体和精神的双重勇气
3. 仁（Benevolence）— 对弱者的善意和同情
4. 礼（Respect）— 对长上和礼仪的绝对尊重
5. 诚（Honesty）— 言必信，绝不欺骗
6. 荣（Honor）— 名誉高于生命
7. 忠（Loyalty）— 对主君的绝对效忠

最重要的考点：切腹（seppuku，/ˈsɛpʊkuː/）
武士在以下情况会选择切腹：被俘前（避免羞辱）、犯了不可挽回的错误、
主君已死（殉主）、或以此表达抗议。
切腹是"将荣誉置于生命之上"这一武士道核心信念的最直接体现。

和欧洲骑士道（chivalry）的比较（AP 高频题）：

相似：忠诚、勇气、荣誉，保护弱者，都是精英战士阶层的道德标准。
不同：
- 骑士道强调对女性的礼仪（courtly love 宫廷爱情传统），武士道没有对应传统
- 武士道的忠诚指向具体的主君（lord），骑士道的忠诚同时指向领主、教会和上帝
- 切腹是武士道独有的——骑士道没有类似的仪式性自我了断
- 骑士道有宗教色彩（十字军骑士），武士道更多是禅宗色彩`,
        en: `Bushido ("The Way of the Warrior") is the ethical code of Japan's samurai class.
It began taking shape during the Kamakura period (1185-1333) and was fully systematized
by the Muromachi period (1336-1573).

Core values (Seven Virtues, frequently tested):
1. Righteousness (義, Gi) — moral integrity, no personal greed
2. Courage (勇, Yu) — both physical and moral bravery
3. Benevolence (仁, Jin) — compassion toward the weak
4. Respect (礼, Rei) — absolute regard for hierarchy and ritual
5. Honesty (誠, Makoto) — keeping your word, never deceiving
6. Honor (名誉, Meiyo) — reputation above life
7. Loyalty (忠, Chu) — absolute devotion to one's lord

Most important exam point: seppuku (/ˈsɛpʊkuː/)
Samurai would perform seppuku (ritual self-disembowelment) when: facing capture (to avoid
humiliation), having committed an unforgivable mistake, following their lord in death,
or as a form of protest.
Seppuku is the most direct expression of Bushido's core belief that honor ranks above life.

Comparison with European chivalry (high-frequency AP topic):

Similarities: loyalty, courage, honor, protecting the weak — all are moral standards
for elite warrior classes.

Differences:
- Chivalry emphasized courtly behavior toward women (courtly love tradition);
  Bushido had no equivalent
- Chivalry's loyalty was directed simultaneously to lord, Church, and God;
  Bushido's loyalty focused on a specific lord
- Seppuku is unique to Bushido — chivalry had no comparable ritual self-termination
- Chivalry carried strong religious overtones (Crusader knights); Bushido carried
  stronger Zen Buddhist overtones`,
      },
      xiaoweiNote: {
        cn: `"七德"不用全背，但 AP 选择题出现过："哪个价值观最能代表武士道？"
答案通常是"忠诚"（loyalty）或"荣誉"（honor）——两个都记。

切腹 (seppuku) 这个词要会拼，也要能解释它在武士道里的意义：
"将荣誉置于生命之上"。这是和欧洲骑士道最鲜明的区别点之一。`,
        en: `Don't need to memorize all seven virtues, but AP multiple choice has asked:
"Which value best represents Bushido?" The answer is usually "loyalty" or "honor" — memorize both.

Know how to spell seppuku and explain its significance within Bushido:
"placing honor above life." This is one of the sharpest contrast points with European chivalry.`,
      },
    },

    // ─ 8. 平安到镰仓的权力转移 & 能乐文化（standaloneText — NOT covered）
    {
      id: 'heian-to-kamakura-noh-culture',
      termCn: '平安→镰仓权力转移 / 能乐与日本传统文化',
      termEn: 'Heian to Kamakura Power Shift / Noh Theater and Japanese Arts',
      standardRef: ['CA HSS 7.5.6', 'AP World KC-2.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'masako-receiving', nodeId: 'masako-N1', context: '政子出身于京都贵族边缘，嫁给地方武士首领，体现平安→镰仓的权力转换' },
          { lens: 'sesshu-mediator', nodeId: 'sesshu-N2', context: '雪舟在禅寺学习涉及茶道与庭园美学' },
        ],
      },
      standaloneText: {
        cn: `这张卡要讲两件事：日本权力为什么从贵族转到武士，以及中世日本的文化成就。

一、平安时代（794-1185）到镰仓幕府（1185-1333）的权力转移

平安时代（Heian Period），京都的天皇朝廷掌握文化权威，
但真正的政治权力被藤原氏（Fujiwara clan）这样的贵族家族通过"摄关政治"把持——
摄关就是外戚担任摄政或关白来替天皇执政。

这一时期贵族文化达到顶峰：《源氏物语》（The Tale of Genji，约 1010 年，
世界最早的长篇小说之一）就是这个时代的产物。
但与此同时，地方治安靠武士（samurai）维持，武士的军事力量悄悄壮大。

1180-1185 年：源平合战（Genpei War），源氏（Minamoto clan）对抗平氏（Taira clan）。
平家的孩子天皇落水溺死，平氏灭族。源赖朝（Minamoto no Yoritomo）在镰仓建立幕府，
向天皇索要"征夷大将军"称号——武士政权正式取代贵族朝廷成为实际统治者。

天皇变成了什么：名义上的最高权威，有宗教和文化功能，没有军政实权。
这个格局一直延续到 1868 年明治维新。

二、中世日本的文化成就（CA HSS 7.5.6 重点）

能乐（Noh theater）：
14 世纪室町时代形成，得到将军和大名的赞助。
结合了面具、极慢的动作、吟唱和鼓乐，主题多为超自然或历史故事。
是世界最古老的仍在演出的剧场形式之一。
→ 武士赞助文化艺术：幕府通过赞助能乐来强化自身的文化合法性。

茶道（Tea Ceremony / Chado）：
禅宗寺院传入，强调"一期一会"（every meeting is once in a lifetime）。
茶道不只是喝茶，是练习专注、简朴、礼仪的修行——武士和大名都视茶道为
重要的社交和外交场合。

花道（Ikebana / Flower Arranging）：
也起源于佛教供花，室町时代系统化为艺术形式。

考点总结：这些文化形式都有同一个逻辑——
禅宗美学（极简、当下专注、接受无常）被武士阶层赞助，
转化为日本独特的贵族与武家共享的文化传统。`,
        en: `This card covers two things: why power shifted from nobles to warriors in Japan,
and the cultural achievements of medieval Japan.

Part 1 — Power transfer from the Heian period (794-1185) to Kamakura shogunate (1185-1333)

During the Heian Period, the imperial court in Kyoto held cultural authority,
but real political power was monopolized by noble families like the Fujiwara clan through
"regent politics" (Sessho-Kampaku system) — relatives of the emperor served as
regent or chancellor, governing in the emperor's name.

This era produced the peak of aristocratic culture: The Tale of Genji (Genji Monogatari,
around 1010, one of the world's earliest novels) came from this period.
But at the same time, local security depended on samurai warriors, whose military power
was quietly growing.

1180-1185: The Genpei War — Minamoto clan versus Taira (Heike) clan.
The child emperor aligned with the Taira drowned as the Taira were annihilated.
Minamoto no Yoritomo established the shogunate in Kamakura and obtained the title
"Seii Taishogun" from the emperor — warrior government formally replaced
the aristocratic court as the real ruler.

What happened to the Emperor: nominal supreme authority, with religious and cultural
functions but no military or political power. This arrangement lasted until
the Meiji Restoration in 1868.

Part 2 — Cultural achievements of medieval Japan (CA HSS 7.5.6 key content)

Noh Theater (能楽):
Developed in the 14th century Muromachi period under shogunate and daimyo patronage.
Combining masks, extremely slow movement, chanting, and drums, with themes drawn from
supernatural or historical stories. One of the world's oldest continuously performed
theatrical forms.
→ Samurai patronage of cultural arts: the shogunate used Noh sponsorship to reinforce
its cultural legitimacy.

Tea Ceremony (茶道, Chado):
Introduced through Zen Buddhist temples, built around "ichi-go ichi-e"
(each encounter is once in a lifetime). The tea ceremony was not merely tea drinking —
it was a practice in focus, simplicity, and ritual propriety. Samurai and daimyo used
it as an important social and diplomatic occasion.

Ikebana / Flower Arranging (花道):
Also rooted in Buddhist offering flowers, systematized into an art form during the Muromachi period.

Key exam summary: all these cultural forms share the same logic —
Zen aesthetics (minimalism, present-moment focus, acceptance of impermanence) were
patronized by the warrior class, transforming into Japan's distinctive cultural
traditions shared by both the nobility and the warrior houses.`,
      },
      xiaoweiNote: {
        cn: `平安→镰仓这条线，老师说 AP 考过："是什么导致日本权力从天皇贵族转移到武士？"
记住两个关键词：源平合战（Genpei War）+ 藤原氏摄关政治衰落。

能乐 Noh 这个词要会认，别和"No（否定）"混淆。
CA 州考考过："下列哪个文化形式源于室町时代并得到武士赞助？"
答案是 Noh theater（能乐）。茶道和花道也常出现在选项里，都要会认。`,
        en: `For the Heian-to-Kamakura transition, teacher said AP has asked:
"What caused Japan's shift of power from the imperial nobility to the warrior class?"
Remember two key terms: Genpei War + decline of Fujiwara regent politics.

Know "Noh" as a word — don't confuse it with the English word "no."
CA state exams have asked: "Which cultural form originated in the Muromachi period
and received samurai patronage?" Answer: Noh theater.
Tea ceremony and ikebana also appear as answer choices — know all three.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `日本的武士道（Bushido）和欧洲的骑士道（chivalry）都强调忠诚、勇气、荣誉——
但武士道有"切腹"（seppuku），骑士道没有；骑士道有"宫廷爱情"（courtly love），武士道没有。

你觉得这些差异背后是什么原因？是因为日本和欧洲的宗教不同（禅宗 vs 基督教），
还是因为封建制度结构不同，还是别的？
如果你要写一篇比较题，你的论点（thesis）会怎么开头？`,
      en: `Japan's Bushido and Europe's chivalry both emphasize loyalty, courage, and honor —
but Bushido includes seppuku (ritual suicide) while chivalry does not;
chivalry includes courtly love while Bushido has no equivalent.

What do you think explains these differences? Is it because Japan and Europe had different
religions (Zen Buddhism vs Christianity), different feudal structures, or something else?
If you were writing a comparison essay, how would you open your thesis?`,
      hintCn: `提示：AP 比较题的论点格式是"X 和 Y 在 A 方面相似，但在 B 和 C 方面不同，
这些差异源于 Z（根本原因）"。
可能的根本原因分析：
- 禅宗强调"死亡并不可怕，放下执念"→ 切腹的文化土壤
- 基督教的自杀禁令（suicide 是 sin）→ 骑士道不可能有切腹仪式
- 欧洲宫廷文化有大量专业吟游诗人（troubadour）写爱情诗，日本武士文化没有对应的"爱情诗"传统
进阶思考：两种制度都在约 800-1600 年之间兴盛又衰落，
结束原因有何共同点（火器的出现？中央集权的兴起？）`,
      hintEn: `Hint: AP comparison thesis format: "X and Y are similar in A, but differ in B and C,
and these differences stem from Z (root cause)."

Possible root cause analysis:
- Zen Buddhism emphasizes "death is not to be feared; release attachment" → cultural soil for seppuku
- Christianity's prohibition on suicide (suicide is sin) → chivalry could never include seppuku
- European court culture had professional troubadours writing romantic poetry;
  Japanese warrior culture had no equivalent "love poetry" tradition

Going deeper: both systems flourished roughly 800-1600 and then declined —
did they share common causes of collapse (emergence of firearms? rise of centralized states)?`,
      conceptsActivated: ['bushido', 'feudal-hierarchy', 'zen-samurai-culture'],
    },
    {
      id: 'q2',
      cn: `神风（kamikaze）台风在 1274 年和 1281 年两次摧毁蒙古舰队，
帮助日本击退了入侵——但这次胜利却让幕府陷入了危机：
御家人（gokenin）武士流血奋战，却没有获得土地奖励，
因为根本没有占领到蒙古领土，没有战利品可分。

这叫"胜利的代价"——一场战争的胜利可以同时播下制度崩溃的种子。
你能想到历史上另一个例子，某个国家赢得了战争，
却因为这场战争的代价而走向衰落吗？`,
      en: `The kamikaze typhoons of 1274 and 1281 destroyed the Mongol fleets and helped Japan
repel both invasions — but this victory threw the shogunate into crisis:
the gokenin samurai had fought and bled, yet received no land as reward,
because no Mongol territory had been captured and there were no spoils to distribute.

This is called "the cost of victory" — winning a war can simultaneously plant the seeds
of institutional collapse. Can you think of another historical example where a country
won a war but was weakened by the very costs that victory required?`,
      hintCn: `提示：这道题考的是"胜利的悖论"——赢了之外部敌人，但内部关系失衡了。
可以想想：
- 一战后的英法：赢了战争，但经济被掏空，20 年后又面临二战
- 苏联二战后：军事上赢了，但战争造成的损耗和冷战军备负担让苏联经济长期被压缩
- 更近的例子：你自己有没有经历过"赢了一场争论，但和朋友的关系变差了"？
这叫"Pyrrhic victory"（皮洛士式胜利，赢了但代价太大）。
日本幕府的情况就是制度层面的 Pyrrhic victory。`,
      hintEn: `Hint: this question is about the "paradox of victory" — defeating an external enemy
while destabilizing internal relationships.

Consider:
- Britain and France after WWI: won the war, but economically hollowed out,
  facing WWII just 20 years later
- Soviet Union after WWII: military victory, but wartime losses and Cold War
  military burdens compressed the Soviet economy for decades
- A closer example: have you ever won an argument but damaged a friendship as a result?

This is called a "Pyrrhic victory" — winning at too high a cost.
The shogunate's situation was a Pyrrhic victory at the institutional level.`,
      conceptsActivated: ['mongol-invasions-kamikaze', 'kamakura-shogunate', 'feudal-hierarchy'],
    },
    {
      id: 'q3',
      cn: `北条政子（Masako Hojo）在 12 世纪日本封建体制下实际掌握了相当大的政治权力——
她被称为"尼将军"，甚至亲自上阵向武士们发表演讲稳定军心。

但同时，她的权力是"非正式的"——她从来没有被正式任命为将军，
她的权力部分来自丈夫的遗产，部分来自她的政治手腕。

你觉得：日本中世女性的地位是"高"还是"低"？
还是说这个问题本身就问错了——地位"高"还是"低"取决于你从哪个角度看？`,
      en: `Masako Hojo held considerable real political power within Japan's 12th-century feudal system —
she was called the "Nun Shogun" and even personally addressed samurai warriors to steady
their resolve in a military crisis.

At the same time, her power was "informal" — she was never formally appointed Shogun,
and her authority derived partly from her husband's legacy and partly from her own
political skill.

Do you think medieval Japanese women had "high" or "low" status?
Or is the question itself framed wrong — does the answer depend entirely on which angle you look from?`,
      hintCn: `提示：这道题考的是"复杂性"——历史上的女性地位不是简单的"高"或"低"。

可以从多个维度想：
- 法律地位（legal status）：平安时代女性有继承权，镰仓时代后逐渐减少
- 非正式权力（informal power）：政子、推古天皇（日本第一位女天皇，592-628年）说明顶层有例外
- 普通女性的日常生活：几乎没有受教育或参政的机会

AP DBQ 经典提问框架：
"当你用'地位高低'来描述某个历史群体时，你用的是哪个阶层的证据？
精英阶层的例外能代表普通人的经历吗？"

这是历史分析最重要的技巧之一：区分"例外"和"规律"，
区分"名义上的权利"和"实际拥有的权利"。`,
      hintEn: `Hint: this question is about "complexity" — women's status in history is never simply
"high" or "low."

Think across multiple dimensions:
- Legal status: Heian women had inheritance rights, which gradually eroded after Kamakura
- Informal power: Masako, Empress Suiko (Japan's first female emperor, 592-628 CE)
  show there were exceptions at the very top
- Ordinary women's daily lives: almost no access to education or political participation

Classic AP DBQ framing question:
"When you describe a historical group's status as 'high' or 'low,' whose evidence are you using?
Can elite exceptions represent the experiences of ordinary people?"

This is one of the most important skills in historical analysis:
distinguishing "exception" from "pattern," and "nominal rights" from "rights actually held."`,
      conceptsActivated: ['masako-women-political-power', 'feudal-hierarchy', 'heian-to-kamakura-noh-culture'],
    },
  ],
};

export default notebook;
