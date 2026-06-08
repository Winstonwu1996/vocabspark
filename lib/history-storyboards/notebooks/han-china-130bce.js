// ─── 同伴笔记本架构 v1 · Han China under Emperor Wu c.130 BCE ─────────
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
// 课纲对齐：
//   - California HSS Grade 6.6（古代中国）：6.6.5-6.6.8 汉朝 / 丝绸之路 / 儒家成为国家学说
//   - AP World History — Unit 1：state-building / 跨区域贸易 (Silk Road) / belief systems
//   - 中国课纲 七年级上（秦汉单元）
//
// schemaVersion: 1 · notebookVersion: han-china-130bce-v1

export var notebook = {
  topicId: 'han-china-130bce',
  topicNameCn: '汉武盛世 c.130 BCE',
  topicNameEn: 'Han China under Emperor Wu',
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
    cn: `今天老师说我们要学公元前 130 年前后的汉朝（Han dynasty）。重点是汉武帝（Emperor Wu）这一朝。
她说这是加州六年级世界史（CA HSS 6.6）和 AP World 第一单元都要考的核心。
丝绸之路（Silk Road）和儒家成为国家学说这两条，几乎年年考。

她在白板上写了几个名字：

汉武帝 刘彻（Emperor Wu / Liu Che）、张骞（Zhang Qian）、
董仲舒（Dong Zhongshu）、司马迁（Sima Qian）、霍去病（Huo Qubing）

还有一串词：独尊儒术（Confucianism as state ideology）、丝绸之路（Silk Road）、
匈奴（Xiongnu）、盐铁专卖（salt-iron monopoly）、和亲（marriage-alliance）、
戍卒（conscript / garrison soldier）、轮台诏（Luntai Edict）。

我先把这些记下来。等下我要读三个故事：
①汉武帝——下命令的人；
②张骞——被派去西域、夹在两个世界之间的人；
③一个戍卒——替这份「盛世」买单、却没留下名字的人。
读完再回来对照这张单子，看我能不能解释每一条。

老师说了一句我抄在笔记本第一页的话：
「问坐在长安庆功的皇帝「盛世」是什么，再问一个买不起盐、儿子被征走的农民——答案不一定一样。学这一朝，要同时看见它的功业和它的代价。」`,
    en: `Today my teacher said we're learning the Han dynasty around 130 BCE, focused on the reign of Emperor Wu.
She said it's core to two courses — California sixth-grade world history (CA HSS 6.6) and AP World Unit 1.
Two things come up almost every year: the Silk Road and Confucianism becoming the state doctrine.

She wrote some names on the board:

Emperor Wu / Liu Che, Zhang Qian,
Dong Zhongshu, Sima Qian, Huo Qubing

Plus a list of terms: Confucianism as state ideology, Silk Road,
Xiongnu, salt-iron monopoly, marriage-alliance (heqin),
conscript soldier, the Luntai Edict.

Let me write these down. Then I'll read three stories:
① Emperor Wu — the one who gave the orders;
② Zhang Qian — sent west, caught between two worlds;
③ a conscript soldier — who paid for this "golden age" and left no name.
After reading, I'll come back and check this list to see whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook:
"Ask the emperor celebrating in Chang'an what 'a golden age' means, then ask a farmer who can't afford salt and whose son was conscripted away — the answers may not match. To study this reign, you have to see its achievement and its cost at once."`,
    keyTerms: [
      { cn: '汉朝', en: 'Han dynasty' },
      { cn: '汉武帝', en: 'Emperor Wu' },
      { cn: '独尊儒术', en: 'Confucianism as state ideology' },
      { cn: '丝绸之路', en: 'Silk Road' },
      { cn: '匈奴', en: 'Xiongnu' },
      { cn: '盐铁专卖', en: 'salt-iron monopoly' },
      { cn: '和亲', en: 'marriage-alliance (heqin)' },
      { cn: '朝贡 / 进贡', en: 'tribute' },
      { cn: '戍卒 / 征发', en: 'conscription' },
      { cn: '西域', en: 'Western Regions' },
      { cn: '轮台诏', en: 'Luntai Edict' },
      { cn: '穷兵黩武', en: 'overextension through war' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '汉武帝 刘彻',
        nameEn: 'Emperor Wu of Han (Liu Che)',
        ipa: '/ˈɛmpərər wuː/ /ljoʊ ˈtʂɤ/',
        roleCn: '汉朝第七位皇帝，前 141-前 87 在位。他北击匈奴、独尊儒术、通西域、推行盐铁专卖，把帝国推上顶峰，也几乎打空几代积蓄。晚年下轮台诏，罕见地承认自己错了。',
        roleEn: 'Seventh emperor of the Han, reigning 141-87 BCE. He fought the Xiongnu, made Confucianism the state doctrine, opened the Western Regions, and ran a salt-iron monopoly — pushing the empire to its peak while nearly emptying generations of savings. Late in life he issued the Luntai Edict admitting he had gone too far.',
        mustKnow: true,
        audioKey: 'emperor-wu-liu-che',
      },
      {
        nameCn: '张骞',
        nameEn: 'Zhang Qian',
        ipa: '/dʒɑːŋ tʃjɛn/',
        roleCn: '前 138 年奉命出使西域，任务是找大月氏夹击匈奴。结果被匈奴扣了十几年，回来只剩两个人。任务失败了，可他第一次为汉朝「凿通」了西域那片空白，间接催生了丝绸之路。',
        roleEn: 'Sent west in 138 BCE to find the Yuezhi and strike the Xiongnu together. He was held by the Xiongnu for over ten years and returned with just two survivors. His mission failed — yet he was the first to open up the Western Regions for the Han, indirectly giving rise to the Silk Road.',
        mustKnow: true,
        audioKey: 'zhang-qian',
      },
      {
        nameCn: '董仲舒',
        nameEn: 'Dong Zhongshu',
        ipa: '/dʊŋ dʒʊŋ ʃuː/',
        roleCn: '儒生，向汉武帝提出「罢黜百家，独尊儒术」。他改造过的儒家——核心是「天子受命于天」（皇帝的权力是上天给的）——既统一了思想，也给皇权缝了一件合身的外衣。',
        roleEn: 'The Confucian scholar who proposed to Emperor Wu to dismiss the hundred schools and honor Confucianism alone. His reshaped Confucianism — centered on "the Son of Heaven receives his mandate from Heaven" (the emperor\'s power comes from Heaven itself) — both unified thought and gave imperial power a perfect justification.',
        mustKnow: true,
        audioKey: 'dong-zhongshu',
      },
      {
        nameCn: '司马迁',
        nameEn: 'Sima Qian',
        ipa: '/ˈsiːmɑː tʃjɛn/',
        roleCn: '《史记》的作者，汉武帝时代的史官。因替战败的将领李陵辩护得罪了皇帝，受宫刑。他笔下对汉武帝多有批评，是「盛世」背后的另一种声音。',
        roleEn: 'Author of the Records of the Grand Historian, a court historian during Emperor Wu\'s reign. He offended the emperor by defending the defeated general Li Ling and was punished by castration. His writing is often critical of Emperor Wu — a very different voice on what this "golden age" really meant.',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '霍去病',
        nameEn: 'Huo Qubing',
        ipa: '/hwɔː tʃyː bɪŋ/',
        roleCn: '北击匈奴的年轻名将。他深入大漠、重创匈奴，在狼居胥山举行了胜利祭典，立下千古传颂的战功。和卫青一起，是扭转和亲局面的主帅。',
        roleEn: 'A young general who led campaigns deep into the desert against the Xiongnu. He won a famous victory and held a great ceremony at Mount Langjuxu. Together with Wei Qing, he was one of the commanders who finally turned the tables on the Xiongnu instead of just sending them princesses.',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'han-dynasty-emperor-wu',
      termCn: '汉朝与汉武帝',
      termEn: 'The Han Dynasty & Emperor Wu',
      defCn: '汉朝是中国历史上延续了四百多年的大帝国（公元前 206 年到公元 220 年）。汉武帝刘彻是第七位皇帝，在位 54 年，把帝国从「休养生息」推向主动扩张，是这一朝最关键的转折点。',
      defEn: 'The Han dynasty was a great empire that lasted over four hundred years, from 206 BCE to 220 CE. Emperor Wu (Liu Che) was the seventh emperor and reigned for 54 years. He shifted the empire from "resting and recovering" to active expansion — the most important turning point of this era.',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state-building', '中国课纲 七上'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n1', 'hw-n2'],
        xiaoweiNote: {
          cn: `这个我读过！汉武帝那条故事线开头就在讲他接手的是个什么帝国。
先把骨架背牢：**汉朝（Han dynasty）从公元前 206 年一直延续到公元 220 年**——跨了四百多年的大帝国。
汉武帝叫刘彻，是第七位皇帝。**他从前 141 年到前 87 年在位**，16 岁登基，在位 54 年。

为什么单讲他？因为汉初几代皇帝走的是「与民休息」的路——少打仗、少收税，历史上叫「文景之治」。
他们用几十年攒下了满满的国库。
到了汉武帝，方向整个逆转——**他要把权力、钱财、思想统统收紧到中央，收到自己手里**。
这一朝的四件大事（打匈奴、独尊儒术、通西域、盐铁专卖），都从这个逆转开始。

考点关键句：汉武帝 = 前 141-前 87，**把帝国从「休养生息」推向「主动扩张」的转折点**。
AP 爱考「从文景之治到汉武帝，什么变了」——财政、思想、对外战略，三个方向都变了。

⚠️ 别跟秦朝搞混：秦是「从分裂到统一」（统一、法家、焚书）；汉武帝这一朝是「统一之后，怎么巩固、怎么推到顶峰」。两门课承接，内容不重复。`,
          en: `I read this! The Emperor Wu story thread opens right where he inherits the empire.
First, lock in the skeleton: **the Han dynasty ran from 206 BCE all the way to 220 CE** — a great empire spanning more than four centuries.
Emperor Wu's name was Liu Che. He was the seventh emperor. **He reigned from 141 to 87 BCE**, took the throne at sixteen, and ruled for fifty-four years.

Why focus on him? Because the early Han emperors took the road of "rest with the people" — fewer wars, lower taxes. History calls this the "Rule of Wen and Jing."
They spent decades saving up a full treasury.
When Emperor Wu came along, the direction completely flipped. **He wanted to pull power, money, and thought all tight to the center — to himself.**
The four big things he did (fight the Xiongnu, honor Confucianism alone, open the Western Regions, the salt-iron monopoly) all start from that reversal.

Key exam sentence: Emperor Wu = 141-87 BCE, **the turning point that pushed the empire from "rest and recovery" to active expansion.**
AP loves "what changed from the Rule of Wen and Jing to Emperor Wu" — finances, thought, foreign strategy: all three shifted.

⚠️ Don't mix him up with the Qin dynasty: Qin was "from division to unity" (unification, Legalism, book burning). Emperor Wu's reign is "after unity — how to consolidate and push to the peak." The topics connect but don't repeat.`,
        },
      },
    },

    {
      id: 'confucianism-state-ideology',
      termCn: '独尊儒术（儒家成为国家学说）',
      termEn: 'Honoring Confucianism Alone (Confucianism as State Ideology)',
      defCn: '独尊儒术是汉武帝采纳的一项政策：只把儒家立为官方学说，别的学派不再扶持。从此，读儒家经书成了做官的门票，影响了中国此后两千年。',
      defEn: 'Honoring Confucianism alone was Emperor Wu\'s policy of making Confucianism the only officially supported school of thought. From then on, mastering the Confucian classics became the ticket into government. This shaped China for the next two thousand years.',
      standardRef: ['CA HSS 6.6 — Confucianism as state doctrine', 'AP World Unit 1 — belief systems', '中国课纲 七上'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n3', 'hw-n6'],
        xiaoweiNote: {
          cn: `汉武帝那条故事线里，一节讲它怎么落地，另一节讲它的两张脸。
汉初朝廷奉行的是黄老之学（「清静无为」，就是少折腾，配「与民休息」很合身）。
可它配不上汉武帝想做的大事。
这时候儒生 **董仲舒（Dong Zhongshu）** 给他出了一个主意：
「**罢黜百家，独尊儒术**」——只把儒家立为官学，别的学派不再扶持。

我把考点压成一句必背：
从此 **设太学（国家办的最高学府）、以儒家经书选官**——读儒家的书，成了进入帝国权力体系的门票。
这定下的格局影响了中国之后 **两千年**。

老师反复纠正的**误解陷阱**：
❌「独尊儒术 = 孔子那套原汁原味的东西当了国教」
✅ 汉武帝尊的是董仲舒**改造过**的儒家——核心是「**天子受命于天**」（皇帝的权力是上天给的，不可质疑）加上君臣父子各有本分。它既统一了思想，也给皇权缝了一件合身的外衣。

还有一个关键细节：**它是慢慢落地的，不是一道圣旨当天就换了天**。

故事线里有一句我记住了：一道命令两张脸——
①一面给帝国一个共同的灵魂；
②另一面把最替皇帝说话的那种学问留下来，把别的声音停掉。`,
          en: `In the Emperor Wu story thread, one part shows how this policy landed in real life, and another shows its two faces.
Early Han courts followed Yellow Emperor-Laozi teaching — basically "don't do too much," a good match for "rest with the people."
But that didn't suit what Emperor Wu wanted to do.
Here the Confucian scholar **Dong Zhongshu** handed him an idea:
"**Dismiss the hundred schools and honor Confucianism alone**" — set up only Confucianism as official learning and stop supporting the rest.

I squeeze the exam point into one must-know line:
From then on he **set up the Imperial Academy (the state's top school) and chose officials by the Confucian classics** — reading the Confucian books became the ticket into the empire's system of power.
The frame this set shaped China for the **two thousand years** after.

A **misconception trap** my teacher kept correcting:
❌ "Honoring Confucianism alone = the original teaching of Confucius became the state religion."
✅ What Emperor Wu honored was Dong Zhongshu's **reshaped** Confucianism. Its core idea was "**the Son of Heaven receives his mandate from Heaven**" — the emperor's power is Heaven-given and cannot be questioned — plus fixed duties for rulers, ministers, fathers, and sons. It both unified thought and gave imperial power a perfect justification.

One more key detail: **it landed slowly — it wasn't one edict that changed everything overnight.**

One line from the story thread stuck with me: one order has two faces.
① One face gives the empire a common soul.
② The other keeps the school that speaks best for the emperor and stops the other voices.`,
        },
      },
    },

    {
      id: 'xiongnu-wars',
      termCn: '北击匈奴（卫青 / 霍去病）',
      termEn: 'Wars Against the Xiongnu (Wei Qing / Huo Qubing)',
      defCn: '匈奴（Xiongnu）是汉朝北方草原上的游牧帝国。汉武帝把对匈奴的政策从「送公主、送礼物」换成「派大军打过去」，命将领卫青和霍去病深入大漠反击，洗刷了几十年和亲的耻辱。',
      defEn: 'The Xiongnu were a nomadic empire on the steppe north of the Han. Emperor Wu changed the policy toward them from "send princesses and gifts" to "send armies and attack." He sent generals Wei Qing and Huo Qubing deep into the desert to strike back, ending decades of paying the Xiongnu to stay away.',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state expansion', '中国课纲 七上'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n4'],
        xiaoweiNote: {
          cn: `汉武帝那条故事线里有一节是「你就是TA」的高潮——你坐进皇帝的位置看着地图望北。
北边草原上的 **匈奴（Xiongnu）** 是个游牧帝国，几十年来年年南下劫掠。
汉朝以前只能 **和亲（heqin / marriage-alliance）**：嫁公主、送丝绸粮食，换边境一时安宁。
在武帝眼里，这是奇耻大辱。

我把军事这块压成一句：匈奴靠骑兵，来去如风，步兵追不上。
要打，就得有**大批骑兵、战马、粮草**，还得有敢深入大漠的将领。
武帝提拔了两个年轻人——**卫青（Wei Qing）、霍去病（Huo Qubing）**。
他们一次次北上深入大漠，把匈奴往北、往西赶。
**霍去病在狼居胥山举行胜利祭典**，成了千古传颂的战功。

考点关键句：汉武帝把对匈奴的政策从「守 + 和亲」改成「攻」，洗刷了几十年送公主的耻辱。
代价是巨额军费（下一张盐铁卡接着讲）。

⚠️ 常见误解：❌「打匈奴是武帝亲自带兵」→ ✅ 主帅是卫青、霍去病，皇帝在长安决策调度。`,
          en: `In the Emperor Wu story thread, there's a part where you step into the emperor's seat looking north at the map.
On the northern steppe the **Xiongnu** were a nomadic empire that raided south year after year for decades.
Before, the Han could only make **marriage-alliances (heqin)**: marry off a princess, send silk and grain, and buy a moment's peace along the border.
To Emperor Wu, this was a deep humiliation.

I squeeze the military part into one line: the Xiongnu used cavalry — here and gone like the wind, impossible for foot soldiers to chase.
To fight back, you needed **masses of cavalry, war horses, and supplies**, plus generals who dared ride deep into the desert.
Emperor Wu raised up two young men — **Wei Qing and Huo Qubing**.
They led the armies north again and again, driving the Xiongnu north and west.
**Huo Qubing held a victory ceremony at Mount Langjuxu** — a feat sung of for the ages.

Key exam sentence: Emperor Wu changed Xiongnu policy from "defend + marriage-alliance" to "attack," washing away decades of shame from sending princesses.
The cost was massive war spending (next card on the salt-iron monopoly picks this up).

⚠️ Common misconception: ❌ "Emperor Wu led the armies himself." → ✅ The commanders were Wei Qing and Huo Qubing. The emperor decided and directed from Chang'an.`,
        },
      },
    },

    {
      id: 'silk-road-zhang-qian',
      termCn: '丝绸之路与张骞「凿空」',
      termEn: 'The Silk Road & Zhang Qian Boring Open the West',
      defCn: '丝绸之路是连接中国与中亚、最远到罗马的贸易和文化通道。它的起点不是为了做生意，而是汉武帝派张骞去西域找盟友打匈奴。张骞任务失败，但他第一次为汉朝打开了西域这片空白，历史上叫「凿空」。',
      defEn: 'The Silk Road was a trade and cultural route connecting China to Central Asia and as far as Rome. It did not start as a trade project — Emperor Wu sent Zhang Qian west to find allies against the Xiongnu. Zhang Qian\'s mission failed, but he was the first to open up the Western Regions for the Han. History calls this "boring open" (zaokong).',
      standardRef: ['CA HSS 6.6 — Silk Road', 'AP World Unit 1 — cross-regional trade', '中国课纲 七上'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'zhang-qian',
        nodeIds: ['zq-n1', 'zq-n6', 'zq-n9'],
        xiaoweiNote: {
          cn: `张骞那整条故事线都是这个——开头是他手里那根**节杖**（使者奉命出使的信物），中间是「凿空」，结尾是路通到罗马。
**公元前 138 年**，汉武帝派 **张骞（Zhang Qian）**，带着一百多人，持节往西边走，
目标是找大月氏，约好东西夹击匈奴。
他一出河西走廊就被匈奴抓住，**被扣了十几年**。
出去一百多人，回来只剩两个。

我把「凿空」这个关键词记牢：张骞没说动大月氏（任务**失败**了），
可他走到哪记到哪——山川、道路、城池、物产——回汉后原原本本讲给皇帝。
他是**第一个为汉朝凿穿西域那片空白的人**，历史上叫「凿空」。
后来使者络绎不绝，**丝绸之路（Silk Road）** 就这样成形了。

考点关键句（最高频）：丝绸之路的**起点是军事目的**（找盟友打匈奴），**通商和文化交流是后来意外长出来的结果**。
往后几百年，丝绸顺这条路最远运到**罗马**，西方的良马、葡萄、苜蓿东传，**佛教**后来也顺商路传入中国。

⚠️ 两个误解一起清：
❌「张骞成功联合大月氏打败了匈奴」→ ✅ 两次都没促成军事同盟，真正贡献是凿空 + 带回见闻；
❌「丝绸之路是为了做生意才开的」→ ✅ 起点是战争，和平那一面是意外收获。`,
          en: `Zhang Qian's whole story thread is about this — it opens with the **staff of mission** in his hand (the symbol that said he was acting for the emperor), the middle is "boring open," and the end is the road reaching Rome.
In **138 BCE**, Emperor Wu sent **Zhang Qian** west with more than a hundred men and the staff of mission.
The goal: find the Yuezhi people and set up a joint attack on the Xiongnu from two sides.
The moment he passed the Hexi corridor, the Xiongnu seized him. He was **held for over ten years**.
More than a hundred set out; only two returned.

Memorize the keyword "boring open": Zhang Qian failed to persuade the Yuezhi (the mission **failed**).
But he recorded everything he saw along the way — mountains, roads, cities, goods — and told it all to the emperor when he got back.
He was **the first person to open up the Western Regions for the Han**. History calls this "zaokong" — boring open.
After that, envoys came and went without end, and the **Silk Road** took shape.

Key exam sentence (highest frequency): the Silk Road's **starting point was a military aim** (finding allies against the Xiongnu). **Trade and cultural exchange were results that grew up later by accident.**
Over the following centuries, silk traveled this road as far as **Rome**, while fine horses, grapes, and alfalfa came east. **Buddhism** later entered China along these same trade routes.

⚠️ Two misconceptions cleared at once:
❌ "Zhang Qian successfully allied with the Yuezhi and defeated the Xiongnu." → ✅ Neither mission produced a military alliance. His real contribution was boring open + bringing back knowledge.
❌ "The Silk Road was opened for trade." → ✅ Its start was war. The peaceful side was an accidental gift.`,
        },
      },
    },

    {
      id: 'salt-iron-monopoly',
      termCn: '盐铁专卖（扩张的钱从哪来）',
      termEn: 'The Salt-Iron Monopoly (Funding the Expansion)',
      defCn: '盐铁专卖是汉武帝为了筹军费推行的政策。他把盐和铁收归国家专营，民间不许私自煮盐或铸铁，一切由政府统一生产和销售。国库收入大增，但老百姓买盐买铁的价格也跟着涨了。',
      defEn: 'The salt-iron monopoly was Emperor Wu\'s policy for raising war funds. He put salt and iron under government control — no one was allowed to privately produce them. Everything was produced and sold by the state. Government income soared, but the price ordinary people paid for salt and iron went up too.',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state economy', '中国课纲 七上'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n7'],
        xiaoweiNote: {
          cn: `汉武帝那条故事线里有专门讲钱的问题的一节。打匈奴、通西域、戍边——每一样都是无底洞。
祖辈攒的满库钱粮，没几年就见了底。
钱不够怎么办？最有名的一招就是 **盐铁专卖（salt-iron monopoly）**。

我把它记成一句必背：**盐人人得吃，铁种田打仗都离不开**——
汉武帝下令把盐、铁收归**国家专营**（民间不许私自煮盐、铸铁，由官府统一生产、统一卖）。
巨额利润从民间流进国库。
另外还**卖官鬻爵、改革币制**，想尽办法把天下的财聚向军费。

考点关键句：盐铁专卖是一枚硬币的两面——
①朝堂那面：军费够了；
②灶台那面：「这个月盐又贵了」。
它当世就引发了**盐铁之争**，后来昭帝时开会辩论，记录成了《盐铁论》。

⚠️ 误解：❌「盐铁专卖只是个经济政策」→ ✅ 它直接抬高了百姓买盐、买铁（农具、锅）的成本，是「盛世」代价落到普通人头上最具体的一笔账。`,
          en: `In the Emperor Wu story thread, one part is specifically about the money problem.
Fighting the Xiongnu, opening the west, garrisoning the frontier — each was a bottomless pit.
The full storehouses his ancestors saved up hit bottom within a few years.
Money short — what to do? The most famous move was the **salt-iron monopoly**.

I memorize it as one must-know line: **everyone must eat salt, and iron is needed for both farming and war** —
Emperor Wu ordered salt and iron taken into **state control** (no private boiling of salt or casting of iron; the government produced and sold everything).
Vast profits flowed from the people into the treasury.
He also **sold offices and ranks and reformed the currency**, gathering the realm's wealth toward war funds by every means.

Key exam sentence: the salt-iron monopoly is two sides of one coin.
① At the court: war funds are covered.
② At the stove: "salt went up again this month."
It sparked the **salt-iron debate** in its own time — later held as a formal conference under Emperor Zhao, recorded as the Discourses on Salt and Iron.

⚠️ Misconception: ❌ "The salt-iron monopoly was just an economic policy." → ✅ It directly raised what ordinary people paid for salt and iron (tools, pots). That's the most concrete way the "golden age" landed on real people's lives.`,
        },
      },
    },

    {
      id: 'cost-of-expansion',
      termCn: '扩张的代价（征发 / 重税 / 户口减半）',
      termEn: 'The Cost of Expansion (Conscription, Taxes, Population Halved)',
      defCn: '征发（conscription）就是政府强制要求普通农民去当兵或服劳役，没有拒绝的余地。汉武帝几十年的战争让赋税和征发越来越重，史书记载「海内虚耗，户口减半」——全国人口减少了一半。',
      defEn: 'Conscription means the government forces ordinary farmers to serve as soldiers or laborers with no right to refuse. Emperor Wu\'s decades of war made taxes and forced service heavier and heavier. The histories record that "the realm was worn out, households halved" — the population fell by half.',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — costs of state expansion', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'conscript-peasant',
        nodeIds: ['cp-n2', 'cp-n4', 'cp-n5'],
        xiaoweiNote: {
          cn: `这张卡最戳我，因为它来自**没有名字的戍卒**那条故事线的几节。
他原本在家种田、养蚕，赶上过文景之治的太平尾巴。
可到了汉武帝这一朝，仗一场接一场，**赋税徭役一年比一年重**，连盐和铁都涨价。
某天一道 **征发（conscription）**——就是政府强制抽调去服役——文书贴到村口，名册念到他。
北上**戍边**，没有讨价的余地。

我把考点压成一句：盛世的荣光归长安最高处的几个人，**账单压到田里被征发的农民身上**。
他被填去戍守、屯田、运粮。塞外风冷、粮缺、活重，身边人一个接一个冻死、病死。

考点关键句（DBQ 高频）：史书写「**海内虚耗，户口减半**」——「户口减半」减掉的那一半，
就是千千万万像他这样被征去、死在塞外、却**一字未留**的人。
那个故事线里有一句我记下来了：史书一句「发卒数万」，「数万」底下是一个个有家、有牵挂、有名字，只是没被记下的活人。

为什么 DBQ 爱用这条？
因为它逼你分析「国力强盛」和「百姓被榨干」这两件事之间的张力——
这正是 AP 评分要的 complexity（复杂性）。先承认两边都是真的，再说明你更倾向哪一边，才能拿高分。`,
          en: `This card hits me hardest because it comes from the story thread following the **nameless conscript soldier**.
He once farmed and raised silkworms at home, catching the tail end of the peaceful Rule of Wen and Jing.
But under Emperor Wu the wars came one after another. **Taxes and forced labor grew heavier year by year.** Even salt and iron rose in price.
One day a **conscription** notice — the government forcing people into service, no choice — was posted at the village gate. The roster read his name.
North to **garrison the frontier**. No room to say no.

I squeeze the exam point into one line: the glory of the golden age went to a few at the very top in Chang'an, while the **bill pressed down on the conscripted farmer in the field.**
He was sent to stand guard, farm garrison land, and haul grain. Beyond the passes the wind was cold, grain was short, the work was heavy, and the people around him froze or sickened and died one after another.

Key exam sentence (high-frequency DBQ): the histories write "**the realm worn out, households halved**" — the half that "households halved" subtracts is the countless people like him, conscripted away, dead beyond the frontier, who **left not one word.**
One line from that story thread stayed with me: behind the phrase "tens of thousands of soldiers dispatched," each of those "tens of thousands" was a living person with a home, ties, and a name — only never recorded.

Why do DBQs love this angle?
Because it forces you to analyze the tension between "strong empire" and "people wrung dry" — exactly the complexity AP scoring rewards.
The high-scoring move: acknowledge both sides are true, then explain which one you lean toward.`,
        },
      },
    },

    {
      id: 'luntai-edict',
      termCn: '轮台诏（皇帝的悔过书）',
      termEn: 'The Luntai Edict (an Emperor\'s Confession)',
      defCn: '轮台诏是公元前 89 年汉武帝下的一道诏书。他在诏书里承认几十年的战争和重税让百姓太苦，是自己的过错，宣布从今往后转向让百姓休养生息、重视农业。这是历代皇帝里极为罕见的公开认错。',
      defEn: 'The Luntai Edict was a decree issued by Emperor Wu in 89 BCE. In it he admitted that decades of war and heavy taxation had brought too much suffering to the people — and that was his fault. He announced a turn back to letting the people rest and valuing agriculture. For an emperor, this kind of public admission of wrongdoing was extraordinarily rare.',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state limits', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n9'],
        xiaoweiNote: {
          cn: `汉武帝那条故事线快结尾有一节，讲他临终做了一件历代皇帝几乎都不做的事：**承认自己错了**。
**公元前 89 年**，有大臣建议在西域的**轮台**继续屯田、扩张。
年轻时的他一定准了，可这一次他没有——
他下了一道诏书，史称 **「轮台诏」（Luntai Edict）**。

我把考点压成一句：在这道诏书里，武帝**罕见地反省了自己几十年的穷兵黩武**——
穷兵黩武，就是滥用武力、不顾民力地不停打仗。
他说：横征暴敛、劳师远征让天下百姓困苦，是他的过错；从今往后转回「**与民休息、重视农业**」。
这几乎是一份**皇帝的认罪书**。

考点关键句：一个被尊为「天子」、被告知「受命于天」的皇帝**当众认错**，极其罕见——
等于否定自己大半生的方向。
但读它要冷静：它**来得太晚了**，该付的代价，早已由千千万万没留下名字的百姓替他付掉了。

⚠️ 误解：❌「汉武帝从不认错」→ ✅ 他晚年下轮台诏罕见自省，几近认罪书——但来得很晚，代价已成。`,
          en: `Near the end of Emperor Wu's story thread, there's a part about something he did late in life that almost no emperor would ever do: **admit he was wrong.**
In **89 BCE**, a minister proposed to keep farming and expanding around **Luntai** in the Western Regions.
The younger him would surely have agreed. But this time he didn't —
he issued a decree known in history as the **Luntai Edict**.

I squeeze the exam point into one line: in this edict, Emperor Wu **rarely turned and reflected on his decades of overextension through war** —
overextension through war means using force endlessly without caring about the cost to the people.
He said: harsh taxation and far-marching armies had brought the realm's people to hardship, and that was his fault. From now on he would turn back to "**resting with the people and valuing agriculture.**"
This was all but an **emperor's confession of guilt.**

Key exam sentence: for an emperor honored as the "Son of Heaven," told he "receives his mandate from Heaven," to **admit a mistake in public** is extraordinarily rare — it's like denying the direction of most of his life.
But read it coolly: it **came too late.** The price that had to be paid had already been paid for him, over those decades, by countless common people who left no name.

⚠️ Misconception: ❌ "Emperor Wu never admitted fault." → ✅ Late in life he issued the Luntai Edict in rare self-reflection, all but a confession — but it came very late, and the cost was already done.`,
        },
      },
    },

    {
      id: 'han-rome-parallel',
      termCn: '同代帝国对照：汉与罗马',
      termEn: 'Contemporary Empires Compared: Han & Rome',
      defCn: '公元前 130 年前后，汉朝和罗马共和国是世界上两个同时扩张的大帝国，一个在东亚，一个在地中海。AP World 喜欢考「两者并排比较」：政体不同，但扩张的代价都压到了底层农民身上。',
      defEn: 'Around 130 BCE, the Han dynasty and the Roman Republic were two great empires expanding at the same time — one in East Asia, one around the Mediterranean. AP World loves comparing them side by side: different governments, but in both cases the cost of expansion was pushed onto ordinary farmers at the bottom.',
      standardRef: ['AP World Unit 1 — comparison of empires', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'zhang-qian', nodeId: 'zq-n9', context: '张骞那条故事线末尾，丝绸之路最远把丝绸运到罗马，第一次把两个互不知道对方存在的世界连成网' },
          { lens: 'conscript-peasant', nodeId: 'cp-n11', context: '戍卒那条故事线结尾追问「盛世是谁的盛世」——这张卡用同代罗马的扩张做「谁买单」的对照，问的是同一个问题' },
        ],
      },
      standaloneText: {
        cn: `这张卡两条故事线都只是提了一下，但 AP World 第一单元**特别爱考「同代帝国对照」**，必须单独掌握。
公元前 130 年前后，地中海世界的霸主是 **罗马共和国（Roman Republic）**。
它刚在三次 **布匿战争（Punic Wars，至前 146 年）** 中击败 **迦太基（Carthage）**，
正把征服来的土地变成 **行省（provinces）**。
这跟汉武帝向北、向西扩张，几乎是同一个时代、两个方向上的两个扩张帝国。

把它们并排看（只是比较，不分高下）：

**①政体形式**
- 汉：中央集权的君主帝国，权力归于一个皇帝。
- 罗马：此时是**共和国**，由 **元老院（Senate）** 和 **执政官（consuls）** 等共治，权力分散在贵族集团手中。

**②扩张的代价由谁承担**
- 汉：靠征发农民为戍卒、靠盐铁专卖与重税聚财。
- 罗马：大量依赖自耕农充军（长期服役使田产荒废、负债破产），并向行省征敛。
- **共同点**：扩张的荣耀归于上层，账单压到底层的农民身上。

**③同代的「为谁买单」之争**
就在这几十年，罗马的 **格拉古兄弟（the Gracchi，提比略与盖约，约前 133-前 121 年）** 推动土地改革。
他们要回应的矛盾是：「为共和国打仗的自耕农反而失了土地」——
和汉朝「盛世底下农民被榨干」的问题，是同一类问题的两个版本。
改革最终在暴力中失败。

故事线连接：张骞那条故事线末尾，丝绸之路最远把丝绸运到罗马，第一次把两个世界连成网；
戍卒那条故事线结尾追问「盛世是谁的盛世」，正好接到罗马这边「自耕农为扩张买单」的同款问题。`,
        en: `The two story threads only mention this in passing, but AP World Unit 1 **especially loves "comparison of contemporary empires,"** so master it on its own.
Around 130 BCE, the master of the Mediterranean was the **Roman Republic**.
It had just defeated **Carthage** in three **Punic Wars (ending 146 BCE)**
and was turning conquered land into **provinces**.
This was, with Emperor Wu's expansion north and west, almost the same era — two expanding empires going in two different directions.

Put them side by side (comparing only — no ranking):

**① Form of government**
- Han: a centralized monarchical empire, power held by one emperor.
- Rome: at this time a **Republic**, ruled jointly by the **Senate** and **consuls** and others, power spread across an aristocratic class.

**② Who bears the cost of expansion**
- Han: by conscripting farmers as garrison soldiers and by the salt-iron monopoly and heavy taxes.
- Rome: heavily on small farmers serving in the army (long service left their land fallow and drove them into debt and ruin) and on levies from the provinces.
- **Shared point**: the glory of expansion went to the top; the bill pressed down on farmers at the bottom.

**③ The contemporary "who pays" debate**
In these very decades, Rome's **Gracchi (Tiberius and Gaius, c.133-121 BCE)** pushed land reform.
The contradiction they were trying to fix: "the small farmers who fought for the Republic lost their land" —
the same class of problem as Han's "farmers wrung dry beneath the golden age," in two different versions.
The reform ended in violence and failure.

Story thread connections: in Zhang Qian's story thread at the end, the Silk Road carried silk as far as Rome, first linking the two worlds into a network.
The conscript's story thread at the end asks "whose golden age is this" — which connects straight to Rome's matching "small farmers paying for expansion."`,
      },
      xiaoweiNote: {
        cn: `老师说 AP World 几乎必出一道「汉 vs 罗马」的比较题。我的记忆口诀：
**政体不同（汉一个皇帝 / 罗马共和国 + 元老院），但代价相同（两边都是农民买单）**。
还有一句对应必背：「罗马的格拉古兄弟 ≈ 汉朝农民被榨干的问题」——同一类问题，两个版本。

注意：千万别写成「汉先进、罗马落后」或反过来。AP 要的是**并排比较 + 看见共同结构**（如何扩张、谁来买单），不是分高下。`,
        en: `Teacher said AP World almost always sets a "Han vs Rome" comparison. My mnemonic:
**Different governments (Han = one emperor / Rome = Republic + Senate), but same cost (farmers pay on both sides).**
Another must-memorize mapping: "Rome's Gracchi ≈ Han's wrung-dry-farmer problem" — the same class of problem, two versions.

Watch out: never write "Han was advanced, Rome was backward" or the reverse. AP wants **side-by-side comparison + seeing the shared structure** (how to expand, who pays) — not ranking which is better.`,
      },
    },

    {
      id: 'recommendation-system-jiucha',
      termCn: '察举制（推荐选官制度）',
      termEn: '察举 — Recommendation System for Official Selection',
      defCn: '察举制是汉武帝用来选拔官员的制度。地方官员定期把当地「孝廉」——孝顺且廉洁的人——推荐给朝廷，经考核后进入官僚体系。它和设太学配合，形成了「读儒书 → 被推荐 → 做官」的通道，打破了旧贵族世袭垄断官职的格局。',
      defEn: 'The recommendation system was how Emperor Wu selected government officials. Local officials regularly recommended talented locals known as "xiaolian" — meaning filially pious and incorruptible — to the court. After review, they entered the bureaucracy. Combined with the Imperial Academy, it created the pipeline: "study the Confucian classics → get recommended → enter government." This broke the old pattern where noble families inherited official positions.',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state-building / governance', '中国课纲 七上'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'han-wudi', nodeId: 'hw-n3', context: '设太学、以儒经选官，察举制是配套的地方荐才机制' },
        ],
      },
      standaloneText: {
        cn: `这是汉武帝巩固中央权威的另一个关键机制。AP World「国家建设」题型高频出现，但很多学生只记住了「独尊儒术」，漏掉了配套的选官制度。

**察举制（recommendation system）怎么运作：**
①地方官员（刺史或郡守）定期向朝廷**推荐**当地「孝廉」——孝顺且廉洁的人才。
②被举荐者经考核进入官僚体系。
③这把选官的权力部分集中到皇帝手里，打破了旧贵族世袭垄断官位的格局。
④与设太学（国家培养儒生）配合，形成「读儒书 → 被地方举荐 → 进入官僚」的完整通道。

**司马迁的视角（AP DBQ sourcing 训练）：**
司马迁（Sima Qian）是当时的史官。他因为替战败的将领李陵辩护，得罪了汉武帝，受了**宫刑**——古代最重的羞辱性刑罚。
他写《史记》时对汉武帝多处持批评态度。
同样一套「独尊儒术 + 察举制」：
- 站在朝廷看：「统一思想、选贤举能」；
- 站在司马迁看：「皇权借儒术压制异见」。
读《史记》要先问：**作者是谁？他和皇帝是什么关系？**——这正是 AP sourcing（史料来源分析）的核心。

考点关键句：察举制 = 地方举荐孝廉 + 中央考核 = 选官从世袭转向（部分）能力/儒学标准；配合设太学，是独尊儒术落地的制度底座。`,
        en: `This is another key mechanism Emperor Wu used to tighten central control. It shows up often in AP World "state-building" questions, but many students only memorize the Confucian doctrine and miss the official-selection system that came with it.

**How the recommendation system worked:**
① Local officials (inspectors or commandery governors) regularly **recommended** talented locals known as "xiaolian" — filially pious and incorruptible — to the court.
② Recommended candidates entered the bureaucracy after review.
③ This shifted some power over official selection to the emperor, breaking the old aristocracy's hereditary grip on office.
④ Combined with the Imperial Academy (where the state trained Confucian scholars), it formed the full pipeline: "study the Confucian classics → be recommended locally → enter the bureaucracy."

**Sima Qian's perspective (AP DBQ sourcing practice):**
Sima Qian was the court historian of this era. He offended Emperor Wu by defending the defeated general Li Ling and was sentenced to **castration** — the most humiliating punishment of the time.
When he wrote the Records of the Grand Historian, he was critical of Emperor Wu in several places.
The same system of "Confucianism alone + recommendation," seen from two angles:
- From the court's view: "unifying thought and selecting talent."
- From Sima Qian's view: "imperial power using Confucianism to suppress dissent."
When reading the Shiji, ask first: **who is the author, and what is his relationship to the emperor?** That is the core of AP sourcing.

Key exam sentence: the recommendation system = local recommendation of xiaolian + central review = official selection shifting (partly) from hereditary to ability/Confucian-learning criteria. Combined with the Imperial Academy, it is the institutional base on which Confucianism alone landed.`,
      },
      xiaoweiNote: {
        cn: `老师说察举制和设太学要一起记：太学培养，察举推荐——两个齿轮咬合，才是「读书做官」这条路的完整机制。
司马迁那条 sourcing 提醒：他被皇帝处罚过——读他写的汉武帝，要知道这个作者的立场和处境。
口诀：察举 = 地方推荐孝廉 → 中央考核 → 入仕；《史记》sourcing = 作者是谁 + 他和皇帝什么关系。`,
        en: `Teacher said the recommendation system and the Imperial Academy go together: the Academy trains, recommendation recommends — two gears meshing, the full mechanism of "study to enter office."
The Sima Qian sourcing reminder: he was punished by the emperor himself — when reading what he wrote about Emperor Wu, know the author's position and circumstances.
Mnemonic: recommendation system = local recommend xiaolian → central review → enter office; Shiji sourcing = who is the author + what is his relationship to the emperor.`,
      },
    },

    {
      id: 'decree-of-grace-tuien',
      termCn: '推恩令（削藩 / 分封瓦解）',
      termEn: 'Decree of Grace (Tuien Ling) — Breaking Up the Feudal States',
      defCn: '推恩令（公元前 127 年）是汉武帝削弱各地诸侯王的聪明办法。他规定诸侯王死后，封地必须分给所有儿子，不能只给一个。这样每传一代，诸侯国就变得更小，最终小到无法威胁中央，全程不需要打仗。',
      defEn: 'The Decree of Grace (127 BCE) was Emperor Wu\'s clever way to weaken the feudal kings across the empire. He ruled that when a feudal king died, his domain had to be divided among all his sons — not just the eldest. Each generation the kingdoms shrank. Eventually they became too small to threaten the center. No war needed.',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state-building / centralization', '中国课纲 七上'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'han-wudi', nodeId: 'hw-n2', context: '汉初诸侯王势力仍大，景帝七国之乱之后问题未解；推恩令是武帝最终瓦解诸侯的政治手段' },
        ],
      },
      standaloneText: {
        cn: `这是汉武帝政治集权最精妙的一招。CA HSS 6.6 和 AP World「中央集权 vs 地方分权」对比题里的高频考点。

**背景先说清楚：**
汉初同时用郡县制（皇帝直辖）和分封制（刘姓宗族当诸侯王）。
诸侯王领地大、军队强，对中央权威是个威胁。
景帝时「七国之乱」（公元前 154 年）平定后，问题仍没根除。

**推恩令（Decree of Grace，公元前 127 年）怎么运作：**
①汉武帝下诏：诸侯王的封地，死后不得只传嫡长子，必须**分给所有儿子**（名义上是皇帝的恩典，让每个儿子都有份）。
②结果：每传一代，诸侯国就被切得更小；几代之后，诸侯王的领地缩成郡县规模，再也无法对抗中央。
③妙处：诸侯王说不出什么——这是皇帝的「恩典」。实际上是用「分」的办法，悄悄瓦解了「封」的威胁。

考点关键句：推恩令 = 用「分封恩泽给所有子嗣」的方式，让诸侯国代代缩小直至瓦解——是中央集权的政治工程，不是军事镇压。AP 常考「汉朝如何比秦更可持续地巩固统一」：推恩令是答案之一。`,
        en: `This is Emperor Wu's most elegant move in political centralization — a high-frequency exam point in CA HSS 6.6 and AP World "centralization vs. decentralization" comparison questions.

**Background first:**
Early Han ran two systems at once: commandery-county (emperor directly governs) and feudal enfeoffment (Liu-clan relatives as feudal kings).
The feudal kings held large territories and strong armies — a real threat to central authority.
After the "Revolt of the Seven States" (154 BCE) under Emperor Jing was put down, the problem was still not fixed.

**How the Decree of Grace (推恩令, 127 BCE) worked:**
① Emperor Wu decreed: when a feudal king died, his domain could not pass only to the eldest son — it must be **divided among all sons** (framed as the emperor's generous favor, giving every son a share).
② Result: each generation the feudal kingdoms were carved into smaller pieces. Within a few generations the kingdoms shrank to commandery size and could no longer challenge the center.
③ The clever part: the feudal kings couldn't object — this was the emperor's "grace." In practice it used "division" to quietly dissolve the threat of "enfeoffment."

Key exam sentence: the Decree of Grace = using "share the fief-grace among all heirs" to make kingdoms shrink generation by generation until dissolved — political centralization through policy, not military force. AP often tests "how Han consolidated unity more sustainably than Qin": the Decree of Grace is one key answer.`,
      },
      xiaoweiNote: {
        cn: `老师说推恩令是「用糖包着刀」——外面是皇帝赏赐给所有王子的恩典，里面是让诸侯国越分越小的刀。
口诀：推恩令（前 127 年）= 分封给所有儿子 → 国越传越小 → 中央集权完成，不用打仗。`,
        en: `Teacher said the Decree of Grace is "a blade wrapped in sugar" — on the outside, the emperor's gift to all the princes; on the inside, the blade that cuts kingdoms smaller with each generation.
Mnemonic: Decree of Grace (127 BCE) = divide fief among all sons → kingdom shrinks each generation → centralization achieved without warfare.`,
      },
    },

    {
      id: 'silk-road-goods',
      termCn: '丝路具体货物（丝绸 / 马 / 玻璃）',
      termEn: 'Silk Road Goods: Silk, Horses, Glass',
      defCn: '丝绸之路不只是「运丝绸」，而是双向的交换。中国往西运丝绸、瓷器；中亚往东带来汗血马（大宛马）、玻璃、葡萄等，还有后来沿这条路传入中国的佛教。',
      defEn: 'The Silk Road was not just about sending silk west — it was a two-way exchange. China sent silk and porcelain westward; Central Asia brought war horses, glass, and grapes eastward. Buddhism also traveled into China along these routes.',
      standardRef: ['CA HSS 6.6 — Silk Road trade', 'AP World Unit 1 — cross-regional exchange', '中国课纲 七上'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'zhang-qian',
        nodeIds: ['zq-n9'],
        xiaoweiNote: {
          cn: `张骞那条故事线末尾提到路通罗马、良马东传，这张卡把「考试要记的货物单」补齐。

**向西（中国 → 地中海）**：丝绸（路以此命名）、瓷器、漆器、铁器。
**向东（中亚/西亚 → 中国）**：
- **汗血马（大宛马）**：武帝打匈奴最缺战马，为此专门发兵大宛。
- **玻璃**：汉朝尚不能量产，视为珍品。
- 葡萄、苜蓿（军用牧草）、香料。

**文化（AP DBQ 超高频）**：**佛教** 沿丝路从南亚→中亚传入中国（东汉后扩展）。

清坑：❌「丝路主要是中国出口」→ ✅ **双向交换**，货物、宗教、技术都双向流动。

考点关键句：丝路三大货物 = 丝绸（西行）+ 汗血马（东行）+ 玻璃（东行）；佛教东传是最重要的文化结果。`,
          en: `Zhang Qian's story thread at the end mentions the road reaching Rome and fine horses coming east — this card fills in the full exam-ready list of goods.

**Westward (China to Mediterranean):** silk (the road is named for it), porcelain, lacquerware, ironware.
**Eastward (Central/West Asia to China):**
- **War horses / Ferghana horses (Heavenly horses, Dayuan horses):** the resource Emperor Wu needed most for fighting the Xiongnu was cavalry horses. Zhang Qian brought back word that Dayuan (the Ferghana Valley) had prized horses, and Emperor Wu sent an army specifically for them.
- **Glass:** China could not mass-produce glass at this time. Western glass objects were treated as precious luxury goods.
- Grapes, alfalfa (quality fodder — a key military resource), spices, cotton.

**Culture (super-high-frequency AP DBQ):** **Buddhism** traveled the Silk Road from South Asia through Central Asia into China (spreading more widely after the Eastern Han).

Clearing the trap: ❌ "The Silk Road was mainly Chinese exports." → ✅ It was **two-directional exchange** — goods, religions, and techniques all flowed both ways.

Key exam sentence: the three landmark Silk Road goods = silk (westward) + Ferghana horses (eastward) + glass (eastward). Buddhism's eastward transmission is the most important cultural exchange result.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `汉武帝这一朝被后人庆祝了两千年，叫「盛世」「强汉」。
可同一个时代，史书也写下「海内虚耗，户口减半」——人口少了一半，
其中很多是被征去戍边、死在塞外却一字未留的农民。

你觉得「盛世」这两个字，到底是谁说了算的？
问坐在长安庆功的皇帝，和问一个买不起盐、儿子被征走的农民，答案会一样吗？
用至少两条具体证据支持你的判断。`,
      en: `Emperor Wu's reign has been celebrated for two thousand years as a "golden age," a "strong Han."
Yet in the same era the histories also wrote "the realm worn out, households halved" — the population
fell by half, many of them farmers conscripted to garrison the frontier, dead beyond the passes, who left
not one word.

Who do you think gets to decide what "a golden age" means? Ask the emperor celebrating in Chang'an, then
ask a farmer who can't afford salt and whose son was conscripted away — will the answers match? Support
your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
①「盛世」这边的证据：北击匈奴洗刷和亲之耻、张骞凿空通丝绸之路、独尊儒术影响两千年、「汉」成民族名。
②「代价」这边的证据：盐铁专卖让百姓盐铁价高质次、征发与重税、「户口减半」、轮台诏皇帝自己认错。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which side you pick.
① Evidence for "golden age": defeating the Xiongnu to wash away the marriage-alliance shame, Zhang Qian boring open the Silk Road, Confucianism shaping two thousand years, "Han" becoming a people's name.
② Evidence for "cost": the salt-iron monopoly making salt and iron expensive, conscription and heavy taxes, "households halved," the emperor's own admission in the Luntai Edict.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['cost-of-expansion', 'luntai-edict', 'han-dynasty-emperor-wu'],
    },
    {
      id: 'q2',
      cn: `张骞奉命去西域找盟友打匈奴，被匈奴扣了十几年，出去一百多人回来只剩两个，
最后也没说动大月氏出兵——从「完成任务」说，他失败了。
可正是这趟「失败的任务」，让他第一次为汉朝凿穿了西域，间接催生了丝绸之路。

如果你是 AP 老师，要出一道题考「一件事「没按原计划成功」，我们该多快下「失败」的结论」，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `Zhang Qian was sent to the Western Regions to find allies against the Xiongnu, was held by the
Xiongnu for over ten years, returned with only two of a hundred-odd men, and in the end could not persuade
the Yuezhi to send troops — by "completing the task," he failed. Yet it was precisely this "failed mission"
that let him first bore open the Western Regions for the Han, indirectly giving rise to the Silk Road.

If you were an AP teacher writing a question on "when something 'doesn't succeed as planned,' how fast
should we conclude it 'failed,'" how would you phrase it? Write your question and explain what it's meant to
make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以从两个时间尺度切入：
①「按当时的任务目标看（找盟友夹击匈奴）」→ 张骞失败了；
②「按几百年的历史影响看（凿空 + 丝绸之路连起东西方）」→ 他成了改写世界的人。
你的题目可以让学生比较「短期目标」和「长期意外结果」——同一件事，为什么换个时间尺度，「失败」就变成了「成就」？
再延伸：丝绸之路起点是战争目的，留给后世最珍贵的却是和平那一面（通商、文化、佛教东传）。`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through two time scales:
① "By the task's aim at the time (find allies to flank the Xiongnu)" → Zhang Qian failed.
② "By the historical impact over centuries (boring open + the Silk Road linking East and West)" → he became someone who rewrote the world.
Your question could have students compare "the short-term goal" with "the long-term accidental result" — why does the same event turn from "failure" into "achievement" when you change the time scale?
Extend it: the Silk Road's start was a military aim, yet its most precious legacy is the peaceful side (trade, culture, Buddhism coming east).`,
      conceptsActivated: ['silk-road-zhang-qian', 'xiongnu-wars'],
    },
    {
      id: 'q3',
      cn: `董仲舒劝汉武帝「罢黜百家，独尊儒术」——只立儒家一个学派为官学，
还把它改造成「天子受命于天」。武帝采纳了：设太学、以儒经选官，
从此读儒家的书成了进入权力体系的门票。这定下的格局影响了中国之后两千年。

你觉得「给一个帝国只留一种官方思想」，更像是**让人心齐了**，
还是**把别的声音掐掉了**？这是聪明的治理，还是对思想的钳制？
用这一朝里一个具体的做法（比如设太学、以儒经选官、或「天子受命于天」）来支持你的看法。`,
      en: `Dong Zhongshu urged Emperor Wu to "dismiss the hundred schools and honor Confucianism alone" —
set up only Confucianism as official learning, and reshape it into "the Son of Heaven receives his mandate
from Heaven." Emperor Wu adopted it: he set up the Imperial Academy and chose officials by the Confucian
classics, so reading the Confucian books became the ticket into the system of power. The frame this set
shaped China for two thousand years.

Do you think "leaving an empire only one official doctrine" looks more like **uniting people's minds** or
**cutting off the other voices**? Is it clever governance, or a clamp on thought? Support your view with one
specific practice from this reign (for example, the Imperial Academy, choosing officials by the Confucian
classics, or "the Son of Heaven receives his mandate from Heaven").`,
      hintCn: `提示：先把这道命令的**两张脸**分清楚——
①一面：给帝国一个共同的思想灵魂（天下读一样的书、敬一样的礼，人心齐，影响两千年）；
②另一面：留下的恰好是最替皇权说话的那一种（「天子受命于天」皇权不可质疑），别的声音停掉。
进阶思考：今天的学校、社会里，有没有「只允许一种说法」和「允许不同声音并存」的对照？你觉得哪种更靠得住？
AP 看的是你能不能用一个**真实做法**把抽象的论点「钉」在证据上，别空谈。`,
      hintEn: `Hint: first keep the order's **two faces** straight —
① One face: giving the empire a common soul of thought (the realm reads one set of books, honors one set of rites, minds made one, shaping two thousand years).
② The other face: the school kept happens to be the one that speaks best for imperial power ("the Son of Heaven receives his mandate from Heaven" — power beyond question). The other voices stopped.
Going deeper: in school or society today, is there a contrast between "only one version allowed" and "different voices allowed to coexist"? Which do you trust more?
AP wants you to "pin" the abstract claim to evidence with one **real practice** — don't float in generalities.`,
      conceptsActivated: ['confucianism-state-ideology', 'han-dynasty-emperor-wu'],
    },
  ],
};

export default notebook;
