// ─── 同伴笔记本架构 v1 · Qin Unification 221 BCE ─────────────
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
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（始皇帝 设计者 / 李斯 调停者-技术官僚 / 戍卒 受影响方 三条线）
//   - notebook 提供考点闭环（统一 221 BCE 与始皇帝称号、法家、郡县制 vs 分封、
//     标准化（书同文/车同轨/度量衡/半两钱）、焚书坑儒、长城（夯土，蒙恬）、
//     徭役与人的代价（戍卒/刑徒 + 骊山陵兵马俑）、速亡 — 补完 CA HSS 6.6 / AP World）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - CA HSS Grade 6 Ancient China（6.6.4-6.6.6）：秦统一 / 始皇帝 / 长城 / 中央集权
//   - 中国课纲（部编版七年级上 第 9-10 课「秦统一中国」）
//   - AP World History Period 1（1200 BCE - c.600 CE）Unit 1 state-building
//
// 事实地基：对账 history-narratives/qin-china-221bce.md
//   - 长城 = 夯土（蒙恬连补旧墙），非明代砖石（明长城晚 1600+ 年）
//   - 焚书史料确凿；坑儒据《史记》约 460 余人，成书晚秦百余年、学界对规模存疑（两者不等同）
//   - 孟姜女 = 后世传说，非秦史，学生内容不当史实用
//   - 兵马俑 1974 年农民打井时发现；秦称帝（前 221）→ 始皇帝死（前 210）→ 秦亡（前 206）
//
// 第 7 条 cultural-ban 例外：本 Topic 是中国史描述中国，
//   皇帝/丞相/郡县制/法家/焚书坑儒/长城/戍卒/玉玺 等是史实正确术语，必须用。
//   仍避免时代错置（221 BCE 不放后世王朝制度）。
//
// schemaVersion: 1 · notebookVersion: qin-china-221bce-v1

export var notebook = {
  topicId: 'qin-china-221bce',
  topicNameCn: '秦统一中国 公元前 221 年',
  topicNameEn: 'Qin Shi Huang and the Unification of China 221 BCE',
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
    cn: `今天老师说我们要学公元前 221 年的秦统一中国（Qin unification）。
她说这一课在三套课纲里都算重头戏——加州六年级世界史的「古代中国」、
中国课纲七年级的「秦统一中国」，还有 AP World 的「早期大帝国怎么建立和治理」。

老师特意提醒：很多同学觉得「秦始皇 + 长城 + 兵马俑」我都听过、超熟。
她说，这一课的难点恰恰在这——你以为你懂，其实只懂了一面。

她给了一张纸，上面写着这些名字：

嬴政 / 秦始皇（Qin Shi Huang）、李斯（Li Si）、
蒙恬（Meng Tian）、司马迁（Sima Qian）

还有一串词：始皇帝（First Emperor）、法家（Legalism）、
郡县制（commandery-county system）、分封（enfeoffment）、
书同文 / 度量衡（standardization）、焚书坑儒、长城（夯土）、
戍卒 / 刑徒（conscript labor）、兵马俑（Terracotta Army）。

我先记下来，等下读三个故事——始皇帝（统一天下的人）、李斯（设计制度的人）、
一个戍卒（被这套制度征去修长城的人）——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「秦的统一，不是一句『千古一帝』或一句『暴君』
能说完的。它同时是制度的天才，和制度的暴力。读它，要同时看见它造出来的东西，
和它碾过去的人。」`,
    en: `Today my teacher said we are learning the Qin unification of China in 221 BCE.
She said this topic is a big deal in three different curricula at once: California sixth-grade
Ancient China, the Chinese seventh-grade unit on the Qin unification, and AP World on
how early great empires were built and governed.

She gave a special warning: a lot of students feel they already know all about
"Qin Shi Huang plus the Great Wall plus the Terracotta Army." She said the hard part of
this topic is exactly that. You think you understand it, but you only understand one face.

She handed out a sheet with these names:

Qin Shi Huang, Li Si,
Meng Tian, Sima Qian

Plus a string of terms: First Emperor, Legalism,
the commandery-county system, enfeoffment,
standardization (unified script and weights and measures), the burning of books and burying
of scholars, the Great Wall (rammed earth), conscript labor (garrison conscripts and convicts),
and the Terracotta Army.

Let me write these down. After I read the three stories — the First Emperor (who unified the
realm), Li Si (who designed the system), and a garrison conscript (whom that system levied to
build the wall) — I will come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The Qin unification is not
something one phrase, emperor of the ages or tyrant, can finish saying. It is at once the genius
of a system and the violence of a system. To read it, you have to see both what it built and the
people it ground over."`,
    keyTerms: [
      { cn: '统一', en: 'unification' },
      { cn: '始皇帝', en: 'First Emperor (Shi Huangdi)' },
      { cn: '法家', en: 'Legalism' },
      { cn: '郡县制', en: 'commandery-county system' },
      { cn: '分封', en: 'enfeoffment' },
      { cn: '书同文（小篆）', en: 'unified script (small-seal script)' },
      { cn: '度量衡 / 半两钱', en: 'standardized weights, measures, and coinage' },
      { cn: '焚书坑儒', en: 'burning of books and burying of scholars' },
      { cn: '长城（夯土）', en: 'Great Wall (rammed earth)' },
      { cn: '戍卒 / 刑徒', en: 'garrison conscript / convict-laborer' },
      { cn: '兵马俑', en: 'Terracotta Army' },
      { cn: '《史记》', en: 'Records of the Grand Historian (Shiji)' },
    ],
    // mustKnow: true = 课纲核心必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '嬴政 / 秦始皇',
        nameEn: 'Qin Shi Huang',
        ipa: '/tɕʰǐn ʂɻ̩́ xwǎŋ/ (pinyin: Qín Shǐ Huáng)',
        roleCn: '秦王嬴政，公元前 221 年灭六国统一天下，造「皇帝」称号自称始皇帝；统一标准化的天才，也是焚书、严刑、役死苍生的空前暴君，两面同体',
        roleEn: 'King Zheng of Qin, who destroyed the six states and unified the realm in 221 BCE and coined the title Emperor to call himself First Emperor; the genius of standardization and at the same time a tyrant who burned books, ruled by harsh law, and worked the people to death, both faces in one man',
        mustKnow: true,
        audioKey: 'qin-shi-huang',
      },
      {
        nameCn: '李斯',
        nameEn: 'Li Si',
        ipa: '/lì sɹ̩/ (pinyin: Lǐ Sī)',
        roleCn: '楚国小吏出身，爬到秦帝国丞相；法家技术官僚，郡县制的力主者、书同文的主持者、焚书的提议者，最终被自己设计的机器腰斩',
        roleEn: 'Born a minor clerk of Chu, who rose to chancellor of the Qin empire; a Legalist technocrat who urged the commandery-county system, led the unification of the writing, and proposed the burning of books, and who was in the end cut in two by the machine he had designed',
        mustKnow: true,
        audioKey: 'li-si',
      },
      {
        nameCn: '蒙恬',
        nameEn: 'Meng Tian',
        ipa: '/mə̌ŋ tʰjɛ̌n/ (pinyin: Méng Tián)',
        roleCn: '秦大将，率三十万人北击匈奴，主持把战国旧土墙连补成一道夯土长城（不是后世旅游照里的明代砖石墙）',
        roleEn: 'A Qin general who led three hundred thousand men to drive back the Xiongnu and oversaw the joining of the old Warring States earthen walls into one rammed-earth Great Wall (not the Ming brick wall in tourist photos)',
        mustKnow: true,
        audioKey: 'meng-tian',
      },
      {
        nameCn: '司马迁',
        nameEn: 'Sima Qian',
        ipa: '/sɹ̩́mà tɕʰjɛ́n/ (pinyin: Sīmǎ Qiān)',
        roleCn: '汉代史家，《史记》作者，写于秦亡百余年后——我们对秦的认知主要来自他，但汉有理由把秦写黑，这是关键的史学注记',
        roleEn: 'A Han-dynasty historian, author of the Records of the Grand Historian, written more than a century after Qin fell — most of what we know about Qin comes from him, yet the Han had reason to paint Qin dark, which is a key historiography note',
        mustKnow: false,
        audioKey: 'sima-qian',
      },
      {
        nameCn: '赵高',
        nameEn: 'Zhao Gao',
        ipa: '/ʈʂâʊ káʊ/ (pinyin: Zhào Gāo)',
        roleCn: '掌印宦官，始皇帝死后发动沙丘之变，篡改遗诏、立胡亥，又构陷李斯',
        roleEn: 'The eunuch who held the imperial seal, who after the First Emperor died engineered the Shaqiu plot, forged the edict to install Huhai, and then framed Li Si',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '扶苏',
        nameEn: 'Fusu',
        ipa: '/fǔ.su/ (pinyin: Fúsū)',
        roleCn: '始皇帝长子，遗诏本应继位，沙丘之变中被赐死',
        roleEn: 'The First Emperor\'s eldest son, who by the dying edict should have taken the throne but was driven to death in the Shaqiu plot',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '陈胜 / 吴广',
        nameEn: 'Chen Sheng / Wu Guang',
        ipa: '/ʈʂʰə̌n ʂə̂ŋ/ /ǔ kwáŋ/ (pinyin: Chén Shèng / Wú Guǎng)',
        roleCn: '戍卒出身，公元前 209 年因大雨误期、横竖是死而起义（「天下苦秦久矣」），点燃反秦烈火',
        roleEn: 'Garrison conscripts who in 209 BCE, held up by rain and dead either way, rose in revolt (crying that the realm had long suffered under Qin) and lit the fire that destroyed Qin',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'unification-221-and-first-emperor',
      termCn: '统一六国与「始皇帝」称号',
      termEn: 'Unification of the Six States & the Title First Emperor',
      standardRef: ['CA HSS 6.6 Ancient China', '中国课纲 七上 第 9 课', 'AP World Period 1 (state-building)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'qin-shi-huang',
        nodeIds: ['qsh-n1', 'qsh-n3'],
        xiaoweiNote: {
          cn: `这个故事一开篇就讲了。在 始皇帝那一遍第 1、3 节：打了五百多年的仗，
天下一直是「战国七雄」互相砍。从公元前 230 到 221 年，秦用十年灭了六国。

灭国顺序我背成一串：韩→赵→魏→楚→燕→齐（前 230 到前 221）。
窍门：先吃最弱的韩，最后是最大、最东的齐，一个一个来，不给他们联手的机会。

考点关键句：公元前 221 年，嬴政嫌「王」这个称号太贱（六国国君都叫王），
把传说里最高的「皇」「帝」两个字合起来自称「皇帝」；因为他是第一个，叫「始皇帝」。
他还下令子孙叫二世、三世，妄想传到万世。

误区提醒：他不是「中国第一个国王」，是「第一个皇帝」——「皇帝」这个称号是他发明的。
反讽锚（最难忘）：他想传万世，结果二世而亡，连十五年都没撑到。`,
          en: `The story opens with this. In the First Emperor's pass, Nodes 1 and 3: the wars had
run more than five hundred years, the realm long split among the Seven Warring States hacking at
one another. From 230 to 221 BCE, Qin destroyed the six states in ten years.

I memorize the order as a chain: Han, Zhao, Wei, Chu, Yan, Qi (230 to 221 BCE).
The trick: eat the weakest, Han, first, and the largest and easternmost, Qi, last, one at a time,
never letting them join hands.

Key exam sentence: in 221 BCE, King Zheng found the title "King" too cheap (every ruler of the
six states had called himself King), so he joined the two highest words of legend, "august" and
"divine ruler," to call himself Emperor; because he was the first, he was the First Emperor. He
also ordered his heirs to be the Second, the Third, dreaming of ten thousand generations.

Misconception flag: he was not "China's first king," he was the "first emperor" — he invented the
title Emperor itself. Irony anchor (most memorable): he dreamed of ten thousand generations, but
it ended at the Second, not lasting even fifteen years.`,
        },
      },
    },

    {
      id: 'legalism-state-ideology',
      termCn: '法家：秦的治国思想',
      termEn: 'Legalism as the State Ideology',
      standardRef: ['CA HSS 6.6 Ancient China', '中国课纲 七上', 'AP World Period 1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'li-si',
        nodeIds: ['ls-n2'],
        xiaoweiNote: {
          cn: `李斯那一遍第 2 节讲得最清楚，因为他自己就是法家最得力的执行者。

法家的想法很冷，我用三句话记：
1. 别指望人自觉做好事——人都是趋利避害的。
2. 把赏和罚定得清清楚楚、毫不留情：立功重赏，犯法重罚，还连坐（一人犯法，邻里宗族同罚）。
3. 真正能止乱的不是仁义道德，是法、是权、是让每个人都怕。

这套思想配上「耕战」制度（秦国只看重耕田和打仗，凭军功授爵给地），
把整个秦国改造成一台高效的机器——它让秦从「西边的蛮子」变成了最强的国家。

误区提醒：❌「法家就是纯粹的残暴」→ ✅ 法家是一套「乱世里怎么建立秩序」的政治理论，
有它的制度理性。它的问题在于把人完全工具化、不留道德空间，不是「只为作恶」。
考点对照：法家（靠法与刑）和你学过的儒家（靠道德教化）是两条相反的治国路。`,
          en: `Li Si's pass, Node 2, lays it out most clearly, because he himself was Legalism's
ablest executor.

Legalism's thought is cold; I memorize it in three lines:
1. Do not count on people to do good of their own accord — everyone chases gain and flees harm.
2. Set reward and punishment out clearly and without mercy: reward merit richly, punish crime hard,
   and add group liability (one person's offense punishes the neighbors and clan too).
3. What truly stops chaos is not benevolence or virtue, but law, power, and making everyone afraid.

Paired with the "farm-and-fight" system (Qin valued only farming and war, granting rank and land by
military merit), this thought remade all of Qin into an efficient machine — it turned Qin from the
"western barbarians" into the strongest state.

Misconception flag: the X view "Legalism is just pure cruelty" becomes the correct view that
Legalism is a political theory about "how to build order in a chaotic age," with its own systemic
logic. Its flaw is treating people purely as tools, leaving no moral space, not being "only for
evil." Exam contrast: Legalism (by law and punishment) and the Confucianism you have studied (by
moral teaching) are two opposite roads to governing.`,
        },
      },
    },

    {
      id: 'commandery-county-vs-enfeoffment',
      termCn: '郡县制 vs 分封',
      termEn: 'Commandery-County System vs. Enfeoffment',
      standardRef: ['CA HSS 6.6 Ancient China', '中国课纲 七上 第 9 课', 'AP World Period 1 (state-building)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'li-si',
        nodeIds: ['ls-n4', 'qsh-n3'],
        xiaoweiNote: {
          cn: `李斯那一遍第 4 节是这条线的核心（始皇帝那一遍第 3 节也讲到）。
统一后最大的难题：这么大一块地，从来没人管过，怎么管？

朝堂上两派对着干，我背成一张对照表：
- 老臣主张「分封（enfeoffment）」：把皇子、功臣封出去各管一方，像周朝那样——大家都熟，听着稳。
- 李斯主张「郡县制（commandery-county system）」：全国设郡，郡下设县，
  官全部由皇帝任命、撤换，土地和军队都归中央，一个诸侯都不留。

李斯赢的关键论证（《史记》里有据）：周朝就是分封完蛋的——
分出去的诸侯几代后各自坐大、互相打，打出了五百年战国。分封 = 给下一场大乱埋种子。

考点关键句：郡县制是中国「中央集权」的奠基，从此天下不属于一群诸侯，属于皇帝一个人。
长效锚：后来两千年王朝更替，这套郡县骨架基本没变（「汉承秦制」）。
AP 爱考的对照：分封（权力分散给诸侯）vs 郡县（权力收归中央），各解决什么、各埋下什么。`,
          en: `Li Si's pass, Node 4, is the heart of this thread (the First Emperor's Node 3 covers it
too). The biggest problem after unification: a territory this vast, never governed by anyone, how do
you rule it?

Two factions clashed at court, and I memorize them as a compare table:
- The old ministers argued for enfeoffment: send out the imperial sons and the meritorious to each
  rule a region, as the Zhou had done — familiar to all, and it sounded safe.
- Li Si argued for the commandery-county system: set up commanderies across the realm, counties
  beneath them, officials all appointed and dismissed by the emperor, land and armies all held by the
  center, not one lord left.

Li Si's winning argument (attested in the Records): the Zhou perished exactly from enfeoffment — the
lords sent out grew strong in a few generations, fought one another, and fought out five hundred years
of warring states. Enfeoffment equals sowing the seed of the next chaos.

Key exam sentence: the commandery-county system is the foundation of Chinese centralized power; from
then on the realm belonged not to a crowd of lords but to one man, the emperor. Long-run anchor: for
the two thousand years of dynasties after, this commandery skeleton barely changed (the Han inherited
the Qin system). AP loves the contrast: enfeoffment (power scattered to lords) vs. commanderies (power
gathered to the center), what each solves and what each plants.`,
        },
      },
    },

    {
      id: 'standardization-script-measures-coin',
      termCn: '标准化：书同文 / 车同轨 / 度量衡 / 半两钱',
      termEn: 'Standardization: Script, Axles, Weights, and Coinage',
      standardRef: ['CA HSS 6.6 Ancient China', '中国课纲 七上 第 9 课', 'AP World Period 1 (comparison)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'qin-shi-huang',
        nodeIds: ['qsh-n4', 'ls-n5'],
        xiaoweiNote: {
          cn: `始皇帝那一遍第 4 节、李斯那一遍第 5 节都讲了。统一后一低头，乱得吓人：
六国各写各的字、用各的钱、量东西各有各的尺，公文传过去没人看得懂，做生意秤和钱对不上。

我把四样标准化背成一串口诀：
- 书同文：全国用同一种文字「小篆（small-seal script）」（李斯主持，以秦字为底简化）。
- 车同轨：车轴定一个宽度，全国车辙一样宽，路能通到底。
- 统一度量衡：一斤多重、一尺多长，全国一个标准。
- 统一货币：废六国杂钱，用秦的圆形方孔「半两钱」。

考点关键句：这些「不起眼的标准」，比任何一场仗都更长久地把六块地真正粘成了一个国家。
长效锚（必背）：两千年后中国人写的方块字，就是从李斯这套小篆一路演变下来的。
AP World 比较点：秦靠「标准化 + 集权官僚」粘合大帝国，和同代罗马靠「法律 + 公民权 + 道路网」、
孔雀王朝靠「宗教伦理」是不同的路子——标准化在各文明里扮演的角色不一样。`,
          en: `The First Emperor's Node 4 and Li Si's Node 5 both cover this. After unification you look
down and it is frighteningly chaotic: the six states each wrote their own script, used their own coins,
measured with their own rulers; a document sent across was unreadable, and a trade had scales and money
that did not match.

I memorize the four standardizations as a chain:
- Same script: the whole realm uses one writing, the small-seal script (led by Li Si, simplified from
  the Qin characters).
- Same axle: cart axles set to one width, so wheel ruts run the same everywhere and roads carry through.
- Same weights and measures: how heavy a catty, how long a foot, one standard for all.
- Same coin: scrap the six states' tangle of money and use the Qin round coin with the square hole.

Key exam sentence: these unremarkable standards glued six lands into one country more lastingly than any
battle. Long-run anchor (must memorize): the square characters Chinese people write two thousand years
later descend from Li Si's small-seal script. AP World comparison point: Qin glued a great empire with
"standardization plus centralized bureaucracy," while contemporary Rome used "law plus citizenship plus
road networks" and the Mauryan empire used "religious ethics" — standardization plays a different role in
each civilization.`,
        },
      },
    },

    {
      id: 'burning-books-burying-scholars',
      termCn: '焚书坑儒',
      termEn: 'The Burning of Books and Burying of Scholars',
      standardRef: ['CA HSS 6.6 Ancient China', '中国课纲 七上 第 10 课', 'AP DBQ / historiography'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'qin-shi-huang',
        nodeIds: ['qsh-n6', 'ls-n6'],
        xiaoweiNote: {
          cn: `始皇帝那一遍第 6 节和李斯那一遍第 6 节都讲了，是整门课的「跨视角锚点」。

两件事要分开记，别糊成一团：
- 焚书（公元前 213 年）：一场宴会上读书人当面批郡县「以古非今」；李斯主张焚书。
  烧的是民间藏的《诗》《书》和六国史书；医药、占卜、农书和秦国史书留下。谈论这些书的处死。
- 坑儒（公元前 212 年）：方士骗了皇帝求仙药的钱又逃了，皇帝震怒追查咸阳读书人，
  据《史记》活埋四百六十余人。

超重要的史学注记（DBQ 考点）：
✅ 焚书 — 有李斯奏议为据，史料确凿。
⚠️ 坑儒 —《史记》是司马迁在秦亡一百多年后的汉朝写的，现代有史家对人数和细节存疑。
所以别把两件事不加区分地等同，更别写成「活埋了成千上万儒生，铁证如山」。

跨视角对位（最戳人）：同一道「天下要统一」的意志——
书同文，是把六国的字合成一种；焚书坑儒，是把六国的声音、不同的想法也合成一种。
一道命令的两张脸。`,
          en: `The First Emperor's Node 6 and Li Si's Node 6 both cover this; it is the whole topic's
cross-lens anchor.

Keep the two events separate, do not blur them:
- Burning the books (213 BCE): at a banquet a scholar reproached the commanderies for "using the past
  to deny the present"; Li Si proposed the burning. What was burned were the privately held Odes and
  Documents and the histories of the six states; works on medicine, divination, farming, and Qin's own
  histories were kept. Anyone who discussed these books was put to death.
- Burying the scholars (212 BCE): masters of the arts cheated the emperor of his elixir money and fled,
  the emperor in a rage investigated the scholars at Xianyang, and by the Records more than four hundred
  and sixty were buried alive.

Very important historiography note (a DBQ point):
The burning of books is firmly attested, with Li Si's memorial as evidence.
The burying of scholars rests on the Records, written by Sima Qian more than a century after Qin fell,
under the Han, and modern historians question the numbers and details. So do not equate the two without
distinction, and never write "thousands of scholars were buried alive, ironclad proof."

Cross-lens contrast (the most striking part): the same will, that the realm must be one — to unify the
writing is to fuse six scripts into one; to burn the books and bury the scholars is to fuse the six
states' voices and differing thoughts into one as well. Two faces of one order.`,
        },
      },
    },

    {
      id: 'great-wall-rammed-earth',
      termCn: '长城：夯土，不是明代砖石墙',
      termEn: 'The Great Wall: Rammed Earth, Not the Ming Brick Wall',
      standardRef: ['CA HSS 6.6 Ancient China', '中国课纲 七上', 'AP DBQ / myth-busting'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'qin-shi-huang',
        nodeIds: ['qsh-n5', 'cl-n4'],
        xiaoweiNote: {
          cn: `始皇帝那一遍第 5 节讲修墙的决策，戍卒那一遍第 4 节讲墙底下的人。

背景：北边草原上是匈奴——骑马的游牧人，来去如风，中原步兵追不上。
始皇帝派大将蒙恬带三十万人北上驱匈奴，再把战国各国断断续续的旧土墙连起来、补起来、
往东往西接长，连成一道横在帝国北缘的长城。

这是整门课最大的一个「破误区」考点，老师反复纠正：
❌「今天旅游拍照那道灰砖大墙就是秦始皇修的」
✅ 秦长城主要是「夯土（rammed earth）」——把湿土倒进木框、一层层砸实的土墙。
   今人旅游看到的灰砖石长城是「明长城」，明朝（15-16 世纪）修的，比秦晚一千六百多年。

再清一个坑：❌「孟姜女哭长城是秦朝真事」→ ✅ 孟姜女是后世的民间传说，不是秦代史实，
它寄托了后人对长城劳役之苦的记忆，但不能当历史写进答案。

人的代价（接下一张卡）：修墙的是几十万被征来的戍卒、刑徒——
皇帝的地图上，墙又长又壮；可墙底下埋了多少人，地图上没标。`,
          en: `The First Emperor's Node 5 covers the decision to build the wall; the conscript's Node 4
covers the people beneath it.

Background: on the northern steppe were the Xiongnu, mounted nomads who came and went like the wind,
faster than central foot soldiers could chase. The First Emperor sent the general Meng Tian north with
three hundred thousand men to drive them back, and then to join, mend, and extend east and west the
broken stretches of the various Warring States earthen walls into one wall across the northern edge of
the empire.

This is the topic's biggest myth-busting point, which the teacher keeps correcting:
The X claim "the gray brick wall in tourist photos today is the one Qin Shi Huang built" is wrong.
The correct point: the Qin wall was mostly rammed earth — wet earth poured into a wooden frame and
pounded solid layer by layer. The gray brick-and-stone wall tourists see today is the Ming wall, built
by the Ming (15th-16th century), more than sixteen hundred years after Qin.

One more trap to clear: the X claim "the legend of Lady Meng Jiang weeping at the wall is a true Qin
event" is wrong; the correct point is that Lady Meng Jiang is a later folk legend, not Qin history. It
carries later ages' memory of the wall's harsh labor, but cannot be written into an answer as fact.

The human cost (continued on the next card): the wall was built by hundreds of thousands of conscripted
garrison soldiers and convicts — on the emperor's map the wall is long and mighty, but how many were
buried beneath it, the map did not mark.`,
        },
      },
    },

    {
      id: 'conscript-labor-and-human-cost',
      termCn: '徭役与人的代价：戍卒 / 刑徒、骊山陵、兵马俑',
      termEn: 'Conscript Labor & the Human Cost: Tomb and Terracotta Army',
      standardRef: ['CA HSS 6.6 Ancient China', '中国课纲 七上', 'AP DBQ rubric (perspective)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'conscript-laborer-receiving-end',
        nodeIds: ['cl-n5', 'cl-n7', 'qsh-n7'],
        xiaoweiNote: {
          cn: `戍卒那一遍第 5、7 节最戳人，始皇帝那一遍第 7 节列了大工程清单。

秦的大工程不止长城。我背成一串：
长城、驰道（咸阳辐射出去的国家级大路）、阿房宫（史载可坐万人，到始皇帝死都没建完）、
骊山陵（从即位起修几十年；史书载修阿房宫和骊山陵两项最多役使号称七十万人）。骊山陵里就是震惊世界的兵马俑——
成千上万真人大小的陶土士兵、战马、战车，1974 年被几个打井的农民挖出来。

考点关键句：每一项都是惊人的奇迹，可每一项都是同一笔账——用千千万万普通人的命堆出来的。
徭役律一下，一个农民就得放下田、走上千里去服役，很多人再也没回来。

两种被征的人要分清：
- 戍卒：守法的良民，被徭役从田里征去戍边、修墙。
- 刑徒：犯了秦法被罚来服苦役的人（剃头、戴刑具，活更重、吃更差）。
秦法越严，犯法的人越多，能罚来的劳力就越多——戍卒那一遍点出这个细思极恐的循环。

DBQ 用法：史书写皇帝功业写满了，给死者只有四个字「死者甚众」。
这张卡逼你练 AP 最看重的「多视角」：同一座奇迹，皇帝看见伟业，戍卒看见的是谁在底下背着。`,
          en: `The conscript's Nodes 5 and 7 hit hardest; the First Emperor's Node 7 lists the great works.

Qin's great works were not only the wall. I memorize a chain: the wall, the imperial highways (state-grade
roads radiating from Xianyang), the Epang Palace (the histories say it could seat ten thousand, unfinished
by the time the emperor died), and the Mount Li tomb (built for decades from his accession, employing a
reported seven hundred thousand at its height). Inside the Mount Li tomb is the world-astonishing Terracotta
Army — thousands of life-sized clay soldiers, horses, and chariots, unearthed in 1974 by a few farmers
digging a well.

Key exam sentence: each was a staggering wonder, and each was a single account, heaped up out of the lives of
countless ordinary people. When one corvee order went out, a farmer had to set down his fields and walk a
thousand li to serve, and many never came back.

Tell two kinds of conscripts apart:
- Garrison conscripts: law-abiding farmers levied by corvee from the fields to guard the frontier and build
  the wall.
- Convict-laborers: those who broke Qin law and were sentenced to hard labor (heads shaved, fitted with
  irons, heavier work and worse food).
The harsher Qin law was, the more lawbreakers, the more forced labor it could send — the conscript's pass
names this chilling loop.

DBQ use: the histories fill pages with the emperor's achievements but give the dead only four characters,
"the dead were very many." This card pushes the multi-perspective skill AP prizes most: of the same wonder,
the emperor sees a great work, the conscript sees who is carrying it on his back beneath.`,
        },
      },
    },

    {
      id: 'rapid-collapse-and-lasting-system',
      termCn: '速亡与不死的制度：秦怎么垮的，又留下了什么',
      termEn: 'Rapid Collapse & the Lasting System',
      standardRef: ['CA HSS 6.6 Ancient China', '中国课纲 七上 第 10 课', 'AP World (continuity & change)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'qin-shi-huang', nodeId: 'qsh-n8', context: '始皇帝前 210 年第五次出巡死于沙丘，遗诏要扶苏继位却被身边人改了' },
          { lens: 'qin-shi-huang', nodeId: 'qsh-n9', context: '前 209 陈胜吴广起义、前 206 秦亡，但郡县/书同文/度量衡被汉继承' },
          { lens: 'li-si', nodeId: 'ls-n8', context: '李斯与赵高在沙丘篡改遗诏、立胡亥（沙丘之变细节）' },
          { lens: 'conscript-laborer-receiving-end', nodeId: 'cl-n9', context: '戍卒视角看「误期者斩」的严法既逼戍卒上绝路，又点燃灭秦烈火' },
        ],
      },
      standaloneText: {
        cn: `先记一条「崩」的时间线：
- 前 210 年：始皇帝第五次出巡死于沙丘（吃含汞丹药求长生，享年约 49）。遗诏要扶苏继位，赵高拉拢李斯篡改遗诏，赐死扶苏、立胡亥为二世。这叫「沙丘之变」。
- 前 209 年：一队戍卒大雨误期——按秦法，误期当斩。横竖是死，陈胜、吴广索性起义，喊出「天下苦秦久矣」「王侯将相，宁有种乎」。星火燎原。
- 前 208 年：李斯被赵高构陷，腰斩咸阳，株连全族。
- 前 206 年：秦亡。从称帝（前 221）算起连十五年都没到——妄想传万世，结果二世而亡。

再记一条「不死」的线（AP 高分要的反转）：
秦虽速亡，可郡县制、统一文字、度量衡没跟着死——后来的汉朝骂秦残暴，却几乎原封不动地继承了这套制度，史称「汉承秦制」。此后两千年，王朝换了一个又一个，这套骨架基本没变。

考点关键句（必背）：「人没了，朝代没了，可秦造的那套制度，活了两千年。」——这正是 AP 的 continuity & change 核心：朝代是变化的，制度是延续的。`,
        en: `This card strings the scattered "how Qin fell and what it left" into one complete timeline —
both CA HSS and the Chinese curriculum require explaining Qin's rapid collapse, and AP loves asking "why
did a short-lived dynasty leave a long-lived system."

First, a "collapse" timeline:
- 210 BCE: the First Emperor died at Shaqiu on his fifth tour (chasing immortality, he instead swallowed
  mercury-laced elixirs and died on the road, about forty-nine). His edict ordered his eldest son Fusu back
  to take the throne, but the eunuch Zhao Gao won over the chancellor Li Si and altered it — driving Fusu to
  death and installing the easily controlled younger son Huhai as the Second Emperor. This is the Shaqiu plot.
- 209 BCE: a band of garrison conscripts, held up by heavy rain, missed their reporting deadline — by Qin
  law, lateness meant beheading. Dead either way, Chen Sheng and Wu Guang simply rose in revolt, crying "the
  realm has long suffered under Qin" and "kings and lords, generals and chancellors, are they born of a
  special seed?" The spark spread like wildfire.
- 208 BCE: Li Si, framed by Zhao Gao, was cut in two at the waist in Xianyang, his whole clan punished.
- 206 BCE: Qin fell. Counting from the First Emperor's accession in 221 BCE, it did not last even fifteen
  years — dreaming of ten thousand generations, it ended at the Second.

Then a "does not die" thread (this is the reversal AP rewards): though Qin fell fast, the system it set up
did not die with it. The Han dynasty that followed cursed Qin as cruel while inheriting the commandery-county
system, the unified writing, and the weights and measures almost untouched — this is "the Han inherited the
Qin system." For the two thousand years after, dynasty replaced dynasty, but this skeleton barely changed.

Key exam sentence (must-memorize contrast): "The man is gone, the dynasty is gone, but the system Qin built
lived two thousand years." This is the core of AP's continuity and change — dynasties change, the system
endures; a short-lived tyranny left a long-lived system.`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里没单开一节讲全，是把好几节串起来的，所以我专门做了一张时间线。
我的记忆口诀：「221 称帝 → 213 焚书 → 212 坑儒 → 210 沙丘死 → 209 起义 → 206 秦亡」，
六个年份顺着背下来，整条崩盘线就清楚了。
最该记住的一句反转：朝代二世而亡（短），制度活两千年（长）——别只答「秦残暴所以亡」，
要补上「可它的制度被汉承袭、影响两千年」，这才是 AP 要的 complexity（复杂性）。`,
        en: `The story does not give this one its own node; it is several nodes strung together, so I made a
timeline on purpose. My mnemonic: "221 became emperor, 213 burned books, 212 buried scholars, 210 died at
Shaqiu, 209 revolt, 206 Qin fell" — recite the six dates in order and the whole collapse line is clear.
The reversal most worth remembering: the dynasty ended at the Second (short), the system lived two thousand
years (long). Do not answer only "Qin was cruel so it fell"; add "but its system was inherited by the Han and
shaped two thousand years" — that is the complexity AP wants.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `一个统一的中国，被庆祝了两千年。可同一个统一，是用焚书、酷刑和几十万人的命换来的——
长城底下、骊山陵里、驰道上，史书只给那些死去的人四个字：「死者甚众」。

你觉得，公元前 221 年那个统一，应该被看成「一座建在尸骨上的奇迹」，
还是「一件代价惨重、却真的改变了历史的大事」？用至少两条具体证据支持你的判断。`,
      en: `A unified China has been celebrated for two thousand years. Yet the same unification was bought
with burned books, harsh punishment, and the lives of hundreds of thousands — beneath the wall, in the tomb,
on the highways, the histories gave the dead only four characters, "the dead were very many."

Do you think the unification of 221 BCE should be seen as "a wonder built on bones," or as "a thing of
terrible cost that truly changed history"? Support your judgment with at least two specific pieces of
evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你能不能用证据，不看你站哪边。
- 「尸骨上的奇迹」这边的证据：几十万戍卒刑徒死在长城/骊山陵、徭役律、「误期者斩」、「死者甚众」。
- 「改变历史的大事」这边的证据：书同文、统一度量衡奠定两千年大一统骨架、「汉承秦制」、
  方块汉字一路传到今天。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。
进阶：错的也许不是「统一」本身，而是「推行的方式」太狠太急？这是 §9 史学里一派的观点。`,
      hintEn: `Hint: no standard answer — AP scoring looks at whether you can use evidence, not which side you
pick.
- Evidence for "a wonder built on bones": hundreds of thousands of conscripts and convicts dead at the wall
  and the tomb, the corvee law, "behead the latecomer," "the dead were very many."
- Evidence for "a thing that changed history": the unified script and weights and measures that laid the
  two-thousand-year skeleton, "the Han inherited the Qin system," the square characters carried down to today.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that is complexity.
Going deeper: maybe what was wrong was not "unification" itself but the way it was forced through, too harsh
and too hurried? That is one school's view in the historiography section.`,
      conceptsActivated: ['conscript-labor-and-human-cost', 'standardization-script-measures-coin', 'rapid-collapse-and-lasting-system'],
    },
    {
      id: 'q2',
      cn: `同一道「书同文」的法令，在丞相李斯眼里，是让一道命令传遍天下、人人看得懂的帝国伟业；
在那个被征去修长城的戍卒眼里，同一种标准文字写成的简牍，可以是来抓他的征发令、是「误期者斩」的军法。

如果你是 AP 老师，要出一道题，逼学生看见「同一套高效制度，为什么会有两副完全相反的面孔」，
你会怎么提问？请写出你的题目，并说明这道题想让学生看见什么。`,
      en: `The same "unify the writing" order was, in the eyes of the chancellor Li Si, an imperial achievement
that let one command run across the realm and be read by all; in the eyes of the garrison conscript levied to
build the wall, a bamboo slip in that same standard script could be the conscription notice that came to seize
him, the "behead the latecomer" law.

If you were an AP teacher writing a question to make students see "why one efficient system can have two
completely opposite faces," how would you phrase it? Write your question and explain what it is meant to make
students see.`,
      hintCn: `提示：好的 DBQ 题通常逼学生「同时看见两件事」，而不是二选一。
你可以从戍卒那一遍第 6 节切入——他在工地上顿悟：那个让天下「书同文」、人人夸了不起的本事，
和那个把他从家里征来的本事，是同一套东西。同一张标准文字简牍，既能是嘉奖令，也能是征发令。
你的题目可以让学生比较：皇帝/丞相眼里的「大一统」（命令传遍天下没死角）vs 戍卒眼里的同一道命令
（传到最底下，就是来抓他的那张文书）。引导学生发现：评价一套制度，「用谁的视角」会得出不同结论。
这正是 AP 评分要的多视角（perspective）能力。`,
      hintEn: `Hint: a good DBQ forces students to see two things at once, not pick one. You can come at it
through the conscript's Node 6 — on the works he realizes that the skill praised as remarkable, which gave the
realm one writing, and the skill that levied him from home, were the same thing; the same standard-script slip
could be an order of commendation and an order of conscription. Your question could have students compare the
emperor's and chancellor's "great unification" (one order running across the realm with no blind corner) with
the conscript's view of that same order (at the very bottom, the notice that came to seize him). Lead students
to find that judging a system depends on whose perspective you use — exactly the perspective skill AP scoring
wants.`,
      conceptsActivated: ['standardization-script-measures-coin', 'conscript-labor-and-human-cost', 'commandery-county-vs-enfeoffment'],
    },
    {
      id: 'q3',
      cn: `我们对「暴秦」的印象，主干来自司马迁《史记》——可它是在秦亡一百多年后的汉朝写成的，
汉有政治理由把秦塑造成残暴的反面教材。比如「坑儒」活埋四百六十余人这个数字，
现代有史家就对它的规模和细节存疑；而「焚书」因为有李斯奏议为据，史料确凿。

当一段历史，主要是由战胜它、并且有理由抹黑它的人来书写的，我们该怎么读它？
请用秦的一个具体例子（比如「坑儒」和「焚书」的史料差别）来支持你的看法。`,
      en: `Our image of "tyrannical Qin" rests mainly on Sima Qian's Records of the Grand Historian — yet it
was written under the Han, more than a century after Qin fell, and the Han had political reasons to cast Qin
as a cruel cautionary tale. For instance, the figure of more than four hundred and sixty buried alive in the
"burying of scholars" is one whose scale and details some modern historians question; while the "burning of
books," with Li Si's memorial as evidence, is firmly attested.

When a stretch of history is written mainly by those who defeated it and had reason to smear it, how should we
read it? Support your view with one specific Qin example (such as the difference in sourcing between the
"burying of scholars" and the "burning of books").`,
      hintCn: `提示：这题练的是 AP 最看重的「史料分析（sourcing）」——看一份史料，先问「谁写的、什么时候写的、
为什么写」。别把《史记》的每个数字、每个细节都当成不容置疑的铁证。
关键对照：焚书（有奏议为据，确凿）和坑儒（《史记》记载、晚秦百余年、规模存疑）——不能不加区分地等同。
进阶：这不等于说「秦其实不残暴、史书全是编的」。20 世纪考古（如睡虎地秦简出土）也帮我们更立体地看秦，
既看见它的制度天才，也不洗白它对个体的碾压。AP 高分要的，是「既清醒看待史料偏向，又不滑向另一个极端」。`,
      hintEn: `Hint: this trains the sourcing skill AP prizes most — when you read a source, first ask "who wrote
it, when, and why." Do not treat every number and detail in the Records as unquestionable ironclad proof.
Key contrast: the burning of books (attested by a memorial, firm) versus the burying of scholars (recorded in
the Records, written over a century after Qin, scale in question) — they cannot be equated without distinction.
Going deeper: this does not mean "Qin was actually not cruel and the histories are all invented." Twentieth-
century archaeology (such as the unearthed Shuihudi Qin bamboo slips) helps us see Qin more fully, recognizing
its systemic genius without whitewashing its crushing of individuals. The high-scoring move is to read sources
with a clear eye for bias without sliding to the opposite extreme.`,
      conceptsActivated: ['burning-books-burying-scholars', 'legalism-state-ideology'],
    },
  ],
};

export default notebook;
