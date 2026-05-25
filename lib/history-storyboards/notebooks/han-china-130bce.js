// ─── 同伴笔记本架构 v1 · Han China under Emperor Wu c.130 BCE ─────────
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
//   - storyboard 提供情感锚点（汉武帝 设计者 / 张骞 夹在两个世界的使者 / 戍卒 买单的受影响方 三条线）
//   - notebook 提供考点闭环（汉朝/汉武帝、独尊儒术、丝绸之路、匈奴战争、盐铁专卖、
//     扩张代价 + 轮台诏、同代罗马对照 — 补完 CA HSS-6.6 + AP World U1 课纲）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - California HSS Grade 6.6（古代中国）：6.6.5-6.6.8 汉朝 / 丝绸之路 / 儒家成为国家学说
//   - AP World History — Unit 1：state-building / 跨区域贸易 (Silk Road) / belief systems
//   - 中国课纲 七年级上（秦汉单元）
//
// 事实地基：对账 han-china-130bce.md（叙事内核）+ 账本时间线
//   - 汉武帝 刘彻 在位 前 141-前 87（账本附录 A）
//   - 张骞首次出使 前 138（旋即被匈奴扣十余年）
//   - 轮台诏 前 89；汉朝 前 206-公元 220
//   - 不伪造引文（《史记》《汉书》paraphrase）；不与 qin Topic 重叠（统一/法家/焚书归 qin）
//
// 第 7 条 cultural-ban 例外：本 Topic 是中国史描述中国，皇帝 / 匈奴 / 儒术 / 盐铁 / 戍卒
//   等是史实正确术语，必须用。§8 同时代世界 = 罗马，用罗马 / 拉丁真实术语。
//
// schemaVersion: 1 · notebookVersion: han-china-130bce-v1

export var notebook = {
  topicId: 'han-china-130bce',
  topicNameCn: '汉武盛世 c.130 BCE',
  topicNameEn: 'Han China under Emperor Wu',
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
    cn: `今天老师说我们要学公元前 130 年前后的汉朝（Han dynasty），重点是汉武帝（Emperor Wu）这一朝。
她说这是加州六年级世界史（CA HSS 6.6）和 AP World 第一单元都要考的核心，
丝绸之路（Silk Road）和儒家成为国家学说这两条，几乎年年考。

她在白板上写了几个名字：

汉武帝 刘彻（Emperor Wu / Liu Che）、张骞（Zhang Qian）、
董仲舒（Dong Zhongshu）、司马迁（Sima Qian）、霍去病（Huo Qubing）

还有一串词：独尊儒术（Confucianism as state ideology）、丝绸之路（Silk Road）、
匈奴（Xiongnu）、盐铁专卖（salt-iron monopoly）、和亲（marriage-alliance）、
戍卒（conscript / garrison soldier）、轮台诏（Luntai Edict）。

我先记下来，等下读三个故事——汉武帝（下令的人）、张骞（被派去西域、夹在两个世界的人）、
还有一个戍卒（替这份「盛世」买单、没留下名字的人）——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「『盛世』这两个字，问坐在长安庆功的皇帝，
和问一个买不起盐、儿子被征走的农民，答案不一定一样。学这一朝，要同时看见它的功业和它的代价。」`,
    en: `Today my teacher said we're learning the Han dynasty around 130 BCE, focused on the reign of Emperor Wu.
She said it's core to two courses — California sixth-grade world history (CA HSS 6.6) and AP World Unit 1 —
and two threads, the Silk Road and Confucianism becoming the state doctrine, come up almost every year.

She wrote a few names on the board:

Emperor Wu / Liu Che, Zhang Qian,
Dong Zhongshu, Sima Qian, Huo Qubing

Plus a string of terms: Confucianism as state ideology, Silk Road,
Xiongnu, salt-iron monopoly, marriage-alliance (heqin),
conscript soldier, the Luntai Edict.

Let me write these down. After I read the three stories — Emperor Wu (who gave the orders), Zhang Qian
(sent west, caught between two worlds), and a conscript soldier (who paid for this "golden age" and left
no name) — I'll come back and check this list to see whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "Ask the emperor celebrating in
Chang'an what 'a golden age' means, then ask a farmer who can't afford salt and whose son was conscripted
away — the answers may not match. To study this reign, you have to see its achievement and its cost at once."`,
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
        roleCn: '汉朝第七位皇帝，前 141-前 87 在位；北击匈奴、独尊儒术、通西域、盐铁专卖，把帝国推上顶峰，也几乎打空几代积蓄，晚年下轮台诏悔过',
        roleEn: 'Seventh emperor of the Han, r.141-87 BCE; fought the Xiongnu, made Confucianism the state doctrine, opened the Western Regions, and ran a salt-iron monopoly — pushing the empire to its peak while nearly emptying generations of savings, and issuing the Luntai Edict of remorse late in life',
        mustKnow: true,
        audioKey: 'emperor-wu-liu-che',
      },
      {
        nameCn: '张骞',
        nameEn: 'Zhang Qian',
        ipa: '/dʒɑːŋ tʃjɛn/',
        roleCn: '汉中人，前 138 年奉命持节出使西域找大月氏夹击匈奴，被匈奴扣十余年；任务失败，却第一次为汉朝「凿空」西域，间接催生丝绸之路',
        roleEn: 'A man of Hanzhong sent west in 138 BCE bearing the staff of mission to find the Yuezhi and strike the Xiongnu together; held by the Xiongnu more than ten years. His task failed, yet he was the first to bore open the Western Regions for the Han, indirectly giving rise to the Silk Road',
        mustKnow: true,
        audioKey: 'zhang-qian',
      },
      {
        nameCn: '董仲舒',
        nameEn: 'Dong Zhongshu',
        ipa: '/dʊŋ dʒʊŋ ʃuː/',
        roleCn: '儒生，向汉武帝提出「罢黜百家，独尊儒术」；他改造过的儒家（天人感应、君权天授、三纲）既统一思想，也合法化皇权',
        roleEn: 'The Confucian scholar who proposed to Emperor Wu to dismiss the hundred schools and honor Confucianism alone; his reshaped Confucianism (Heaven-and-man resonance, Heaven-mandated rule, the three bonds) both unified thought and legitimized imperial power',
        mustKnow: true,
        audioKey: 'dong-zhongshu',
      },
      {
        nameCn: '司马迁',
        nameEn: 'Sima Qian',
        ipa: '/ˈsiːmɑː tʃjɛn/',
        roleCn: '《史记》作者，当世史官（因李陵之祸受宫刑）；他笔下对汉武帝多有微辞，是「盛世 vs 穷兵黩武」之争的当世声音',
        roleEn: 'Author of the Records of the Grand Historian, a court historian of the age (castrated over the Li Ling affair); his account is critical of Emperor Wu in places, a contemporary voice in the golden-age-versus-overextension debate',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '霍去病',
        nameEn: 'Huo Qubing',
        ipa: '/hwɔː tʃyː bɪŋ/',
        roleCn: '北击匈奴的年轻名将，深入大漠重创匈奴、封狼居胥，与卫青同为洗刷和亲之耻的统帅',
        roleEn: 'A young general in the campaigns against the Xiongnu who struck deep into the desert and held a great sacrifice at Mount Langjuxu; with Wei Qing, a commander who washed away the shame of the marriage-alliances',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'han-dynasty-emperor-wu',
      termCn: '汉朝与汉武帝',
      termEn: 'The Han Dynasty & Emperor Wu',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state-building', '中国课纲 七上'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n1', 'hw-n2'],
        xiaoweiNote: {
          cn: `这个我读过！汉武帝那一遍第 1、2 节就在讲他接手的是个什么帝国。
先把骨架背牢：汉朝（Han dynasty）从 **公元前 206 年** 一直延续到 **公元 220 年**——
一个跨了四百多年的大帝国。汉武帝叫刘彻，是第七位皇帝，**前 141 年到前 87 年在位**，
16 岁登基，在位 54 年。

为什么单讲他？因为汉初几代皇帝走的是「与民休息」（少管、少征，史称文景之治），
攒下满库钱粮；到了汉武帝，方向整个逆转——他要把权、钱、思想统统收紧到中央，
收紧到自己一个人手里。这一遍这几件大业（打匈奴、独尊儒术、通西域、盐铁专卖）
都是从这个逆转开始的。

考点关键句：汉朝 = 前 206-公元 220；汉武帝 = 前 141-前 87，把帝国从「休养生息」
推向「主动扩张」的转折点。AP 爱考「文景之治到汉武帝，什么变了」（财政、思想、对外战略）。

⚠️ 别跟 qin（秦）搞混：秦是「从分裂到统一」（统一、法家、焚书）；汉武帝这一朝是
「统一之后怎么巩固、怎么推到顶峰」。两个 Topic 承接，但不重复。`,
          en: `I read this! Emperor Wu's lens, Nodes 1 and 2, is about what kind of empire he inherited.
First memorize the skeleton: the Han dynasty ran from **206 BCE** all the way to **220 CE** —
a great empire spanning over four centuries. Emperor Wu's name was Liu Che, the seventh emperor,
**reigning 141-87 BCE**, enthroned at sixteen, on the throne for fifty-four years.

Why focus on him? Because the early Han emperors took the road of "rest with the people"
(govern less, levy less — the Rule of Wen and Jing), saving up full storehouses. With Emperor Wu
the direction flipped: he meant to draw power, money, and thought all tight to the center, tight
into his own hand. The great projects in this pass (fighting the Xiongnu, honoring Confucianism
alone, opening the Western Regions, the salt-iron monopoly) all start from that reversal.

Key exam sentence: Han = 206 BCE to 220 CE; Emperor Wu = 141-87 BCE, the turning point that
pushed the empire from "rest and recovery" toward active expansion. AP loves "what changed from
the Rule of Wen and Jing to Emperor Wu" (finances, thought, foreign strategy).

⚠️ Don't mix him up with Qin: Qin was "from division to unity" (unification, Legalism, book
burning); Emperor Wu's reign is "after unity, how to consolidate and push to the peak." The two
topics connect but don't repeat.`,
        },
      },
    },

    {
      id: 'confucianism-state-ideology',
      termCn: '独尊儒术（儒家成为国家学说）',
      termEn: 'Honoring Confucianism Alone (Confucianism as State Ideology)',
      standardRef: ['CA HSS 6.6 — Confucianism as state doctrine', 'AP World Unit 1 — belief systems', '中国课纲 七上'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n3', 'hw-n6'],
        xiaoweiNote: {
          cn: `汉武帝那一遍第 3 节讲它怎么落地，第 6 节讲它的两张脸。
汉初朝廷奉的是黄老之学（清静无为，配「与民休息」很合身）；可它配不上汉武帝要做的事。
这时候儒生 **董仲舒（Dong Zhongshu）** 给他上了一套主张：「**罢黜百家，独尊儒术**」——
只把儒家立为官学，别的学派不再扶持。

我把考点压成一句：从此 **设太学、以儒家经书选官**——读儒家的书，成了进入帝国权力体系的门票。
这定下的格局影响了中国之后 **两千年**。

这里有老师反复纠正的**误解陷阱**：
❌「独尊儒术 = 孔子原汁原味那套当了国教」
✅ 武帝尊的是董仲舒**改造过**的儒家——核心是「**天子受命于天**」（皇帝权力是上天给的，不可质疑）
+ 君臣父子各有本分。它既统一了思想，也给皇权缝了一件合身的外衣。

第 6 节那句点睛我记下来了：一道命令两张脸——一面给帝国一个共同的灵魂，
另一面把最替皇帝说话的那一种留下来、把别的声音停掉。
（还要注意：它是慢慢落地的，不是一道圣旨当天就换了天。）`,
          en: `Emperor Wu's lens Node 3 shows how it landed, and Node 6 its two faces.
The early Han court honored the teaching of the Yellow Emperor and Laozi (stillness and doing little,
a good fit for "rest with the people"); but it could not suit what Emperor Wu meant to do. Here the
Confucian scholar **Dong Zhongshu** put a proposal to him: "**dismiss the hundred schools and honor
Confucianism alone**" — set up only Confucianism as official learning and stop supporting the rest.

I compress the exam point into one line: from then on he **set up the Imperial Academy and chose
officials by the Confucian classics** — reading the Confucian books became the ticket into the empire's
system of power. The frame this set shaped China for the **two thousand years** after.

A **misconception trap** my teacher kept correcting:
❌ "Honoring Confucianism alone = the original teaching of Confucius became the state religion."
✅ What Emperor Wu honored was Dong Zhongshu's **reshaped** Confucianism — at its heart "**the Son of
Heaven receives his mandate from Heaven**" (the emperor's power is Heaven-given and beyond question)
plus fixed duties of ruler and minister, father and son. It both unified thought and sewed imperial
power a well-fitting robe.

I wrote down the clinching line from Node 6: one order has two faces — one gives the empire a common
soul, the other keeps the school that speaks for the emperor best and stops the other voices.
(Note too: it landed slowly; it was not one edict that changed the sky in a day.)`,
        },
      },
    },

    {
      id: 'xiongnu-wars',
      termCn: '北击匈奴（卫青 / 霍去病）',
      termEn: 'Wars Against the Xiongnu (Wei Qing / Huo Qubing)',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state expansion', '中国课纲 七上'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n4'],
        xiaoweiNote: {
          cn: `汉武帝那一遍第 4 节是「你就是 TA」的高潮——你坐进皇帝的位置看着地图望北。
北边草原上的 **匈奴（Xiongnu）** 是个游牧帝国，几十年来年年南下劫掠。
汉朝以前只能 **和亲（heqin / marriage-alliance）**：嫁公主、送丝绸粮食，换边境一时安宁。
在武帝眼里，这是奇耻大辱。

我把军事这块压成一句：匈奴是骑兵，来去如风，步兵追不上；要打就得有**大批骑兵、战马、粮草**，
还得有敢深入大漠的将领。武帝提拔了两个年轻人——**卫青（Wei Qing）、霍去病（Huo Qubing）**，
一次次北上深入大漠，把匈奴往北、往西赶；**霍去病封狼居胥**，成了千古传颂的战功。

考点关键句：汉武帝把对匈奴的政策从「守 + 和亲」改成「攻」，洗刷了几十年送公主的耻辱——
但代价是巨额军费（下一张盐铁卡接着讲）。

⚠️ 常见误解：❌「打匈奴是武帝亲自带兵」→ ✅ 主帅是卫青、霍去病，皇帝在长安决策调度。`,
          en: `Emperor Wu's lens Node 4 is the "you are him" peak — you sit in the emperor's seat looking
north at the map. On the northern steppe the **Xiongnu** were a nomadic empire that for decades came
south to raid year after year. Before, the Han could only make **marriage-alliances (heqin)**: marry
off a princess, send silk and grain, to buy a moment's peace along the border. To Emperor Wu, this was
a deep humiliation.

I compress the military part into one line: the Xiongnu were cavalry, here and gone like the wind, and
foot soldiers couldn't chase them; to fight you needed **masses of cavalry, war horses, and grain**, and
generals who dared ride deep into the desert. Emperor Wu raised up two young men — **Wei Qing and Huo
Qubing** — who led the armies north again and again, driving the Xiongnu north and west; **Huo Qubing
held a sacrifice at Mount Langjuxu**, a feat sung of for the ages.

Key exam sentence: Emperor Wu changed Xiongnu policy from "defend + marriage-alliance" to "attack,"
washing away decades of shame from sending princesses — but the cost was vast war funds (the next
salt-iron card picks this up).

⚠️ Common misconception: ❌ "Emperor Wu led the armies himself" → ✅ the commanders were Wei Qing and
Huo Qubing; the emperor decided and directed from Chang'an.`,
        },
      },
    },

    {
      id: 'silk-road-zhang-qian',
      termCn: '丝绸之路与张骞「凿空」',
      termEn: 'The Silk Road & Zhang Qian Boring Open the West',
      standardRef: ['CA HSS 6.6 — Silk Road', 'AP World Unit 1 — cross-regional trade', '中国课纲 七上'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'zhang-qian',
        nodeIds: ['zq-n1', 'zq-n6', 'zq-n9'],
        xiaoweiNote: {
          cn: `这条线整条都是 张骞 那一遍——第 1 节他手里那根**节（节杖）**，第 6 节「凿空」，第 9 节路通到罗马。
**公元前 138 年**，汉武帝派郎官 **张骞（Zhang Qian）**，持节带一百多人，去西边找大月氏夹击匈奴。
他一出河西走廊就被匈奴抓住，**扣了十几年**，出去一百多人，回来只剩两个。

我把「凿空」这个关键词记牢：张骞没说动大月氏（任务**失败**了），可他走到哪记到哪——
山川、道路、城池、物产，回汉原原本本讲给皇帝，**第一次为汉朝凿穿了西域那片空白**（史称「凿空」）。
后来使者络绎不绝，**丝绸之路（Silk Road）** 就这样成形了。

考点关键句（最高频）：丝绸之路的**起点是军事目的**（找盟友打匈奴），
**通商和文化交流是后来意外长出来的结果**。第 9 节讲到：往后几百年，丝绸顺这条路最远运到**罗马**，
西方的良马、葡萄、苜蓿东传，连**佛教**后来也顺商路传入中国。

⚠️ 两个误解一起清：❌「张骞成功联合大月氏打败了匈奴」→ ✅ 两次都没促成军事同盟，真正贡献是凿空 + 带回见闻；
❌「丝绸之路是为了做生意才开的」→ ✅ 起点是战争，和平那一面是意外收获。`,
          en: `This whole thread is Zhang Qian's lens — Node 1 is the **staff of mission** in his hand,
Node 6 is "boring open," Node 9 is the road reaching Rome. In **138 BCE**, Emperor Wu sent the attendant
officer **Zhang Qian**, bearing the staff with more than a hundred men, west to find the Yuezhi and strike
the Xiongnu together. No sooner had he passed the Hexi corridor than the Xiongnu seized him, **held him
more than ten years**; of the hundred-odd who set out, only two returned.

Memorize the keyword "boring open": Zhang Qian failed to persuade the Yuezhi (the task **failed**), yet
he recorded everywhere he went — mountains, roads, city-states, goods — and told it all to the emperor on
his return, **the first to bore through the blank of the Western Regions for the Han** (called "zaokong,"
boring open). Envoys then came and went without end, and the **Silk Road** took shape just like that.

Key exam sentence (highest frequency): the Silk Road's **starting point was a military aim** (finding allies
against the Xiongnu); **trade and cultural exchange were results that grew up later by accident**. Node 9
notes: over the following centuries, silk traveled this road as far as **Rome**, while fine horses, grapes,
and alfalfa came east, and even **Buddhism** later entered China along the trade routes.

⚠️ Two misconceptions cleared at once: ❌ "Zhang Qian successfully allied with the Yuezhi and defeated the
Xiongnu" → ✅ neither mission produced a military alliance; his real contribution was boring open + bringing
back knowledge; ❌ "the Silk Road was opened for trade" → ✅ its start was war; the peaceful side was an
accidental gift.`,
        },
      },
    },

    {
      id: 'salt-iron-monopoly',
      termCn: '盐铁专卖（扩张的钱从哪来）',
      termEn: 'The Salt-Iron Monopoly (Funding the Expansion)',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state economy', '中国课纲 七上'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n7'],
        xiaoweiNote: {
          cn: `汉武帝那一遍第 7 节专门讲钱的问题。打匈奴、通西域、戍边，每一样都是无底洞，
祖辈攒的满库钱粮没几年就见了底。钱不够怎么办？最有名的一招就是 **盐铁专卖（salt-iron monopoly）**。

我把它记成一句必背：**盐人人得吃，铁种田打仗都离不开**——汉武帝下令把盐、铁收归 **国家专营**
（民间不许私自煮盐、铸铁，由官府统一生产、统一卖），巨额利润从民间流进国库。
另外还 **卖官鬻爵、改革币制**，想尽办法把天下的财聚向军费。

考点关键句：盐铁专卖是「**富国强兵**」与「**民生变紧**」的同一枚硬币的两面——
在朝堂上它是军费够不够，在灶台前它是「这个月盐又贵了」。它当世就引发了**盐铁之争**
（后来昭帝时开盐铁会议，记录成《盐铁论》）。

⚠️ 误解：❌「盐铁专卖只是个经济政策」→ ✅ 它直接抬高了百姓买盐、买铁（农具、锅）的成本，
是「盛世」代价落到普通人头上最具体的一笔账。`,
          en: `Emperor Wu's lens Node 7 is specifically about the money problem. Fighting the Xiongnu,
opening the west, garrisoning the frontier — each was a bottomless pit, and the full storehouses his
forebears had saved hit bottom within a few years. Money short, what to do? The most famous move was
the **salt-iron monopoly**.

I memorize it as one must-know line: **everyone must eat salt, and iron is needed for both farming and
war** — Emperor Wu ordered salt and iron taken into a **state monopoly** (no private boiling of salt or
casting of iron; the government produced and sold them all), and vast profits flowed from the people into
the treasury. He also **sold offices and ranks and reformed the currency**, gathering the realm's wealth
toward war funds by every means.

Key exam sentence: the salt-iron monopoly is two faces of one coin — "**a rich state and a strong army**"
and "**life getting tighter**" — at court it was whether war funds were enough; at the stove it was "salt
went up again this month." It sparked the **salt-iron debate** in its own time (later held as the Salt and
Iron Conference under Emperor Zhao, recorded as the Discourses on Salt and Iron).

⚠️ Misconception: ❌ "the salt-iron monopoly was just an economic policy" → ✅ it directly raised what
common people paid for salt and iron (tools, pots), the most concrete bill of the "golden age" landing on
ordinary people.`,
        },
      },
    },

    {
      id: 'cost-of-expansion',
      termCn: '扩张的代价（征发 / 重税 / 户口减半）',
      termEn: 'The Cost of Expansion (Conscription, Taxes, Population Halved)',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — costs of state expansion', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'conscript-peasant-receiving-end',
        nodeIds: ['cp-n2', 'cp-n4', 'cp-n5'],
        xiaoweiNote: {
          cn: `这张卡最戳我，因为它是从那个**没有名字的戍卒**那一遍来的（戍卒那一遍第 2、4、5 节）。
他原本在家种田、养蚕，赶上过文景之治的太平尾巴；可到了汉武帝这一朝，仗一场接一场，
**赋税徭役一年比一年重**，连盐和铁都涨价。某天一道 **征发（conscription）** 文书贴到村口，
名册念到他——北上 **戍边**，没有讨价的余地。

我把考点压成一句：盛世的荣光归长安最高处的几个人，**账单压到田里被征发的农民身上**。
他被填去戍守、屯田、运粮，塞外风冷、粮缺、活重，身边人一个接一个冻死、病死。

考点关键句（DBQ 高频）：史书写「**海内虚耗，户口减半**」——「户口减半」减掉的那一半，
就是千千万万像他这样被征去、死在塞外、却**一字未留**的人。第 5 节那句我记下来了：
史书一句「发卒数万」，「数万」底下是一个个有家、有牵挂、有名字、只是没被记下的活人。

为什么 DBQ 爱用这条？因为它逼你分析「盛世（国力强盛）vs 民生（百姓被榨干）」之间的张力——
这正是 AP 评分要的 complexity（复杂性）。`,
          en: `This card hits me hardest because it comes from that **nameless conscript soldier's** pass
(the conscript's lens, Nodes 2, 4, 5). He once farmed and raised silkworms at home and caught the tail
of the peaceful Rule of Wen and Jing; but under Emperor Wu the wars came one after another, **taxes and
labor levies grew heavier year by year**, and even salt and iron rose in price. One day a **conscription**
notice was posted at the village gate, the roster read his name — north to **garrison the frontier**, with
no room to bargain.

I compress the exam point into one line: the glory of the golden age went to a few at the very top in
Chang'an, while the **bill pressed down on the conscripted farmer in the field**. He was sent to stand
guard, farm garrison land, and haul grain; out beyond the passes the wind was cold, grain short, the work
heavy, and the people around him froze or sickened and died one after another.

Key exam sentence (high-frequency DBQ): the histories write "**the realm worn out, households halved**" —
the half that "households halved" subtracts is the countless people like him, conscripted away, dead beyond
the frontier, who **left not one word**. I wrote down the line from Node 5: behind one phrase, "tens of
thousands of soldiers dispatched," each of those "tens of thousands" was a living person with a home, ties,
and a name, only never recorded.

Why do DBQs love this? Because it forces you to analyze the tension between "golden age (strong state)" and
"livelihood (people wrung dry)" — exactly the complexity AP scoring rewards.`,
        },
      },
    },

    {
      id: 'luntai-edict',
      termCn: '轮台诏（皇帝的悔过书）',
      termEn: 'The Luntai Edict (an Emperor\'s Confession)',
      standardRef: ['CA HSS 6.6', 'AP World Unit 1 — state limits', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'han-wudi',
        nodeIds: ['hw-n9'],
        xiaoweiNote: {
          cn: `汉武帝那一遍第 9 节讲他临终做的一件历代皇帝几乎都不做的事：**承认自己错了**。
**公元前 89 年**，有大臣建议在西域的**轮台**继续屯田、扩张。年轻时的他一定准了，可这一次他没有——
他下了一道诏书，史称 **「轮台诏」（Luntai Edict）**。

我把考点压成一句：在这道诏书里，武帝**罕见地反省了自己几十年的穷兵黩武**——
横征暴敛、劳师远征让天下百姓困苦，是他的过错；从今往后转回「**与民休息、重视农业**」。
这几乎是一份**皇帝的认罪书**。

考点关键句：一个被尊为「天子」、被告知「受命于天」的皇帝**当众认错**，极其罕见——
等于否定自己大半生的方向。但读它要冷静：它**来得太晚了**，该付的代价，
那几十年里早已由千千万万没留下名字的百姓替他付掉了。

⚠️ 误解：❌「汉武帝从不认错」→ ✅ 他晚年下轮台诏罕见自省，几近认罪书——但来得很晚，代价已成。
这也是上一道思考题「迟来的『我错了』能不能抵掉已付的代价」的史料地基。`,
          en: `Emperor Wu's lens Node 9 is about a thing he did near the end of his life that almost no emperor
of any age would do: **admit he was wrong**. In **89 BCE**, a minister proposed to keep farming and expanding
around **Luntai** in the Western Regions. The younger him would surely have approved it, but this time he did
not — he issued an edict known in history as the **Luntai Edict**.

I compress the exam point into one line: in this edict, Emperor Wu **rarely turned and reflected on his
decades of overextension through war** — harsh taxation and far-marching armies had brought the realm's
people to hardship, and that was his fault; from now on he would turn back to "**rest with the people and
value agriculture**." This was all but an **emperor's confession of guilt**.

Key exam sentence: for an emperor honored as the "Son of Heaven," told he "receives his mandate from
Heaven," to **admit a mistake in public** is extraordinarily rare — it denies the direction of most of his
life. But read it coolly: it **came too late**, and the price that had to be paid had, over those decades,
already been paid for him by countless common people who left no name.

⚠️ Misconception: ❌ "Emperor Wu never admitted fault" → ✅ late in life he issued the Luntai Edict in rare
self-reflection, all but a confession — but it came very late, and the cost was already done. This is also
the evidence base for the thinking question "can a late 'I was wrong' offset the price already paid."`,
        },
      },
    },

    {
      id: 'han-rome-parallel',
      termCn: '同代帝国对照：汉与罗马',
      termEn: 'Contemporary Empires Compared: Han & Rome',
      standardRef: ['AP World Unit 1 — comparison of empires', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'zhang-qian', nodeId: 'zq-n9', context: '张骞凿空的丝绸之路最远把丝绸运到罗马，第一次把两个互不知道对方存在的世界连成网' },
          { lens: 'conscript-peasant-receiving-end', nodeId: 'cp-n11', context: '戍卒收尾追问「盛世是谁的盛世」，正好接到「同代罗马的扩张又是谁买单」' },
        ],
      },
      standaloneText: {
        cn: `这张卡故事里没单独演，但 AP World 第一单元**特别爱考「同代帝国对照」**，必须单独掌握。
公元前 130 年前后，地中海世界的霸主是 **罗马共和国（Roman Republic）**。
它刚在三次 **布匿战争（Punic Wars，至前 146 年）** 中击败 **迦太基（Carthage）**，
正把征服来的土地变成 **行省（provinces）**。这跟汉武帝向北、向西扩张，
几乎是同一个时代、两个方向上的两个扩张帝国。

把它们并排看（并列，不褒贬）：

**政体形式**
- 汉：中央集权的君主帝国，权力归于一个皇帝。
- 罗马：此时是**共和国**，由 **元老院（Senate）** 与 **执政官（consuls）** 等共治，权力分散在贵族集团手中。

**扩张的代价由谁承担**
- 汉：靠征发农民为戍卒、靠盐铁专卖与重税聚财。
- 罗马：大量依赖自耕农充军（长期服役使田产荒废、负债破产）与对行省的征敛。
- **共同点**：扩张的荣耀归于上层，账单压到底层的农民身上。

**同代的「为谁买单」之争**
就在这几十年，罗马的 **格拉古兄弟（the Gracchi，提比略与盖约，约前 133-前 121 年）** 推动土地改革，
正是要回应「为共和国打仗的自耕农反而失了土地」这一矛盾——和汉朝「盛世底下农民被榨干」的问题，
是同一类问题的两个版本。改革最终在暴力中失败。

🔗 故事连接：张骞那一遍第 9 节，丝绸之路最远把丝绸运到罗马，第一次把两个世界连成网；
戍卒那一遍第 11 节追问「盛世是谁的盛世」，正好接到罗马这边「自耕农为扩张买单」的同款问题。`,
        en: `The story doesn't act this one out on its own, but AP World Unit 1 **especially loves
"comparison of contemporary empires,"** so master it separately. Around 130 BCE, the master of the
Mediterranean was the **Roman Republic**. It had just defeated **Carthage** in three **Punic Wars
(ending 146 BCE)** and was turning conquered land into **provinces**. This was, with Emperor Wu's
expansion north and west, almost the same era — two expanding empires in two directions.

Put them side by side (parallel, no praise or blame):

**Form of government**
- Han: a centralized monarchical empire, power held by one emperor.
- Rome: at this time a **Republic**, ruled jointly by the **Senate** and **consuls** and others, power
  spread across an aristocratic class.

**Who bears the cost of expansion**
- Han: by conscripting farmers as garrison soldiers and by the salt-iron monopoly and heavy taxes.
- Rome: heavily on small farmers serving in the army (long service left their land fallow and drove them
  into debt and ruin) and on levies from the provinces.
- **Shared point**: the glory of expansion went to the top, the bill pressed down on farmers at the bottom.

**The contemporary "who pays" debate**
In these very decades, Rome's **Gracchi (Tiberius and Gaius, c.133-121 BCE)** pushed land reform precisely
to answer the contradiction "the small farmers who fought for the Republic lost their land" — the same
class of problem as Han's "farmers wrung dry beneath the golden age," in two versions. The reform ended in
violence and failure.

🔗 Story link: Zhang Qian's lens Node 9 — the Silk Road carried silk as far as Rome, first linking the two
worlds into a network; the conscript's lens Node 11 asks "whose golden age is this," which connects straight
to Rome's matching "small farmers paying for expansion."`,
      },
      xiaoweiNote: {
        cn: `老师说 AP World 几乎必出一道「汉 vs 罗马」的比较题。我的记忆口诀：
**政体不同（汉一个皇帝 / 罗马共和国 + 元老院），但代价相同（两边都是农民买单）**。
还有一句对应必背：「罗马的格拉古兄弟 ≈ 汉朝农民被榨干的问题」——同一类问题，两个版本。

Rule 0 提醒：千万别写成「汉先进、罗马落后」或反过来。AP 要的是**并排比较 + 看见共同结构**
（如何扩张、谁来买单），不是分高下。`,
        en: `Teacher said AP World almost always sets a "Han vs Rome" comparison. My mnemonic:
**different government (Han = one emperor / Rome = Republic + Senate), but same cost (farmers pay on both
sides)**. Another must-memorize mapping: "Rome's Gracchi ≈ Han's wrung-dry-farmer problem" — the same class
of problem, two versions.

Rule 0 reminder: never write "Han advanced, Rome backward" or the reverse. AP wants **side-by-side
comparison + seeing the shared structure** (how to expand, who pays), not ranking which is better.`,
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
- 「盛世」这边的证据：北击匈奴洗刷和亲之耻、张骞凿空通丝绸之路、独尊儒术影响两千年、「汉」成民族名。
- 「代价」这边的证据：盐铁专卖让百姓盐铁价高质次、征发与重税、「户口减半」、轮台诏皇帝自己认错。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which
side you pick.
- Evidence for "golden age": defeating the Xiongnu to wash away the marriage-alliance shame, Zhang Qian
  boring open the Silk Road, Confucianism shaping two thousand years, "Han" becoming a people's name.
- Evidence for "cost": the salt-iron monopoly making salt and iron dear and poor, conscription and heavy
  taxes, "households halved," the emperor's own admission in the Luntai Edict.
High-scoring move: acknowledge both sides stand, then explain why you lean one way — that's complexity.`,
      conceptsActivated: ['cost-of-expansion', 'luntai-edict', 'han-dynasty-emperor-wu'],
    },
    {
      id: 'q2',
      cn: `张骞奉命去西域找盟友打匈奴，被匈奴扣了十几年，出去一百多人回来只剩两个，
最后也没说动大月氏出兵——从「完成任务」说，他失败了。
可正是这趟「失败的任务」，让他第一次为汉朝凿穿了西域，间接催生了丝绸之路。

如果你是 AP 老师，要出一道题考「一件事『没按原计划成功』，我们该多快下『失败』的结论」，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `Zhang Qian was sent to the Western Regions to find allies against the Xiongnu, was held by the
Xiongnu for over ten years, returned with only two of a hundred-odd men, and in the end could not persuade
the Yuezhi to send troops — by "completing the task," he failed. Yet it was precisely this "failed mission"
that let him first bore open the Western Regions for the Han, indirectly giving rise to the Silk Road.

If you were an AP teacher writing a question on "when something 'doesn't succeed as planned,' how fast
should we conclude it 'failed,'" how would you phrase it? Write your question and explain what it's meant to
make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以从两个时间尺度切入——「按当时的任务目标看（找盟友夹击匈奴）」张骞失败了；
「按几百年的历史影响看（凿空 + 丝绸之路连起东西方）」他成了改写世界的人。
你的题目可以让学生比较「短期目标」和「长期意外结果」——同一件事，为什么换个时间尺度，
「失败」就变成了「成就」？再延伸：丝绸之路起点是战争目的，留给后世最珍贵的却是和平那一面（通商、文化、佛教东传）。`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through two time scales — "by the task's aim at the time (find allies to flank the
Xiongnu)" Zhang Qian failed; "by the historical impact over centuries (boring open + the Silk Road linking
East and West)" he became someone who rewrote the world. Your question could have students compare "the
short-term goal" with "the long-term accidental result" — why does the same event turn from "failure" into
"achievement" when you change the time scale? Extend it: the Silk Road's start was a military aim, yet its
most precious legacy is the peaceful side (trade, culture, Buddhism coming east).`,
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
一面：给帝国一个共同的思想灵魂（天下读一样的书、敬一样的礼，人心齐，影响两千年）；
另一面：留下的恰好是最替皇权说话的那一种（「天子受命于天」皇权不可质疑），别的声音停掉。
进阶思考：今天的学校、社会里，有没有「只允许一种说法」和「允许不同声音并存」的对照？你觉得哪种更靠得住？
AP 看的是你能不能用一个**真实做法**把抽象的论点「钉」在证据上，别空谈。`,
      hintEn: `Hint: first keep the order's **two faces** straight —
one face: giving the empire a common soul of thought (the realm reads one set of books, honors one set of
rites, minds made one, shaping two thousand years); the other face: the school kept happens to be the one
that speaks for imperial power best ("the Son of Heaven receives his mandate from Heaven," power beyond
question), the other voices stopped.
Going deeper: in school or society today, is there a contrast between "only one version allowed" and
"different voices allowed to coexist"? Which do you trust more? AP wants you to "pin" the abstract claim to
evidence with one **real practice**, not float in generalities.`,
      conceptsActivated: ['confucianism-state-ideology', 'han-dynasty-emperor-wu'],
    },
  ],
};

export default notebook;
