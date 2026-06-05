// ─── 同伴笔记本架构 v1 · Ancient Egypt / The Great Pyramid c.2550 BCE ─────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Khufu 下令者 / Hemiunu 组织者 / 被征召劳工 受影响方 三条线）
//   - notebook 提供考点闭环（神权王权、尼罗河 Akhet 农业-劳役周期、金字塔的目的、corvée 征召劳役
//     兼破奴隶神话、社会金字塔、象形文字与书吏、来世信仰 ka/木乃伊/Ma'at、孟菲斯与古王国治理）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - CA HSS Grade 6 古埃及（尼罗河 / 法老 / 金字塔）
//   - AP World History Unit 1 — 古代国家与神权王权（state-building / divine kingship）
//
// 事实地基：对账 narrative kernel ancient-egypt-2550bce.md
//   - 破奴隶神话：corvée 征召的本地农民，非鞭子下的外族奴隶（§10 #1-#2 / §9 工人城说）
//   - Heit el-Ghurab 工人城 + 工人墓地是现代考古实证（§5 B）
//   - Diary of Merer 是真实出土莎草纸（§5 A），Khufu 在位第 27 年运 Tura 石灰岩
//   - BCE 自检：较大数字 = 较早（公元前 2589-2566 在位 早于 公元前 2550 完工）
//
// 硬规则自检：第7条 cultural ban（埃及非中国，禁中国概念词）/ 无单星斜体 / em-dash 预算
//   / 学生面 CN 不出现英文 lens（用 视角 / 这一遍）/ 第11条 CN 用「」EN 转义撇号 / node --check 通过
//
// schemaVersion: 1 · notebookVersion: ancient-egypt-2550bce-v1

export var notebook = {
  topicId: 'ancient-egypt-2550bce',
  topicNameCn: '吉萨大金字塔 · 公元前 2550 年',
  topicNameEn: 'The Great Pyramid of Giza c.2550 BCE',
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
    cn: `今天老师说我们要学古埃及，重点是公元前 2550 年左右的吉萨大金字塔。
她说这是六年级世界史（CA HSS）古埃及单元的核心，AP World 也拿它当
「古代国家 + 神权王权」最经典的案例。

她先在黑板上写了一个让全班都愣住的提醒：「别用电影里那一套。
金字塔不是被鞭子抽的外族奴隶建的。」她说现代考古已经把那个版本推翻了，
而这一点，正是这一课要我们清的最大一个坑。

她给了一张纸，上面写着这些名字：

Khufu（胡夫）、Hemiunu（赫米乌努）、Merer（梅雷尔）、Khafre（哈夫拉）

还有一串词：pharaoh（法老）、vizier（维西尔）、Nile / Akhet（尼罗河 / 泛滥季）、
corvée（征召劳役）、scribe（书吏）、hieroglyphs（象形文字）、Ma'at（玛特）、
ka（卡，灵魂）、mummification（制木乃伊）、mastaba（马斯塔巴）、Memphis（孟菲斯）。

我先记下来，等下读三个故事，分别站进下令的法老 Khufu、组织一切的维西尔 Hemiunu、
还有一个被征召来搬石头的农民这三个位置。读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「这座山，是塔顶的奇迹和地基里几万个无名者的代价，
装在同一座山里。学历史，要同时看见它的伟大和它的代价。」`,
    en: `Today my teacher said we're learning ancient Egypt, centered on the Great Pyramid of
Giza around 2550 BCE. She said it's the heart of the sixth-grade world history (CA HSS)
Egypt unit, and AP World uses it as the classic case of an "ancient state plus divine
kingship."

She started by writing a warning on the board that stunned the whole class: "Drop what you
saw in the movies. The pyramids were not built by whip-driven foreign slaves." She said
modern archaeology has overturned that version, and busting it is the biggest trap this
topic exists to clear.

She gave us a sheet with these names:

Khufu, Hemiunu, Merer, Khafre

Plus a string of terms: pharaoh, vizier, Nile / Akhet (the flood season), corvée labor,
scribe, hieroglyphs, Ma'at, ka (the soul), mummification, mastaba, Memphis.

Let me write these down. After I read the three stories, standing inside Khufu the pharaoh
who gave the order, Hemiunu the vizier who organized everything, and a farmer summoned to
haul stone, I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "This mountain holds the
wonder at the peak and the cost of tens of thousands of nameless people in its foundation,
all inside one mountain. To study history, you have to see its greatness and its cost at the
same time."`,
    keyTerms: [
      { cn: '法老', en: 'pharaoh' },
      { cn: '维西尔（最高行政长官）', en: 'vizier' },
      { cn: '尼罗河', en: 'Nile' },
      { cn: '泛滥季', en: 'Akhet (inundation)' },
      { cn: '征召劳役 / 徭役', en: 'corvée labor' },
      { cn: '书吏', en: 'scribe' },
      { cn: '象形文字', en: 'hieroglyphs' },
      { cn: '玛特（宇宙秩序）', en: 'Ma\'at' },
      { cn: '卡（生命力 / 灵魂）', en: 'ka' },
      { cn: '制木乃伊', en: 'mummification' },
      { cn: '马斯塔巴（平顶长方形墓）', en: 'mastaba' },
      { cn: '孟菲斯（古王国首都）', en: 'Memphis' },
    ],
    // mustKnow: true = 课考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '胡夫（Khufu）',
        nameEn: 'Khufu',
        ipa: '/ˈkuːfuː/',
        roleCn: '埃及第四王朝法老（约公元前 2589-2566 在位），希腊人称 Cheops。下令建大金字塔的人，自视为活着的神，后世只留一尊 7.5 厘米象牙小像',
        roleEn: 'Pharaoh of Egypt\'s Fourth Dynasty (reigned c. 2589-2566 BCE), called Cheops by the Greeks. The man who ordered the Great Pyramid; he saw himself as a living god, and left only one confirmed likeness, a 7.5 cm ivory figure',
        mustKnow: true,
        audioKey: 'khufu',
      },
      {
        nameCn: '赫米乌努（Hemiunu）',
        nameEn: 'Hemiunu',
        ipa: '/ˈhɛmiuːnuː/',
        roleCn: 'Khufu 的侄子，维西尔，头衔「王室一切工程总监」，大金字塔的组织与执行总负责人。墓 G4000 里留下一尊胖子坐像',
        roleEn: 'Khufu\'s nephew and vizier, titled "Overseer of All the King\'s Works," the man in overall charge of organizing and carrying out the Great Pyramid. He left a seated statue of a heavy man in tomb G4000',
        mustKnow: true,
        audioKey: 'hemiunu',
      },
      {
        nameCn: '梅雷尔（Merer）',
        nameEn: 'Merer',
        ipa: '/ˈmɛrər/',
        roleCn: '中级监工，Khufu 在位第 27 年记下工作日志，记录船运 Tura 白石灰岩到吉萨。这本日志是现存最古老的有字莎草纸',
        roleEn: 'A mid-level inspector who kept a work logbook in Khufu\'s 27th year, recording the ferrying of white Tura limestone to Giza. That logbook is the oldest inscribed papyrus yet found',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '哈夫拉（Khafre）',
        nameEn: 'Khafre',
        ipa: '/ˈkɑːfreɪ/',
        roleCn: 'Khufu 之子，建了吉萨第二座金字塔和大狮身人面像（Sphinx），让吉萨成为金字塔群',
        roleEn: 'Khufu\'s son, who built the second pyramid at Giza and the Great Sphinx, turning Giza into a complex of pyramids',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '希罗多德（Herodotus）',
        nameEn: 'Herodotus',
        ipa: '/hɪˈrɒdətəs/',
        roleCn: '希腊历史学家，约公元前 5 世纪到埃及（建塔约 2000 年后），听导游传说写下「Khufu 是暴君、奴隶建塔」的版本，被现代考古推翻',
        roleEn: 'Greek historian who came to Egypt around the 5th century BCE (some 2,000 years after the pyramid was built) and, from guides\' legends, wrote the "Khufu was a tyrant, slaves built it" version that modern archaeology overturned',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'nile-akhet-agriculture',
      termCn: '尼罗河与泛滥季（Akhet）',
      termEn: 'The Nile and the Flood Season (Akhet)',
      standardRef: ['CA HSS Grade 6 — Egypt / the Nile', 'AP World — environment & agriculture'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'pyramid-laborer-receiving-end',
        nodeIds: ['lab-n2', 'khufu-n2'],
        xiaoweiNote: {
          cn: `这个三个视角都讲到，但劳工那一遍第 2 节最清楚。埃及整个文明就挤在尼罗河两岸窄窄的一条绿地上，
外面全是死亡的沙漠。古埃及人管自己的国家叫 Kemet，意思是「黑土地」，因为河水泛滥留下的黑泥最肥。

我把它背成「一河三季」：
泛滥季（Akhet）河水漫上来淹了田 → 退水后的播种季赶紧种 → 收割季把粮收回来。

考点关键句：金字塔能建成，第一前提不是法老，是这条河。每年 Akhet 泛滥（约 7 到 10 月）田被淹，
几十万农民几个月没法种地，国家正好把这段「农闲」征召去搞工程。劳役的节奏，是跟着尼罗河走的。

记忆锚：希腊人说「埃及是尼罗河的赠礼」。没有这条河定期泛滥，就没有黑土地，没有农业剩余，
也就没有那支几万人的劳动大军。`,
          en: `All three lenses touch this, but the laborer's pass Node 2 is clearest. Egypt's whole
civilization is squeezed onto a narrow ribbon of green along the Nile, with deadly desert
beyond. The Egyptians called their country Kemet, meaning "the black land," because the river's
flood leaves the richest black mud.

I memorize it as "one river, three seasons":
the flood (Akhet) when water rises and drowns the fields, then the sowing season after the
water draws back, then the harvest when the grain comes in.

Key exam sentence: the first condition for building the pyramid is not the pharaoh, it is this
river. Each year Akhet floods (roughly July to October), the fields drown, hundreds of thousands
of farmers cannot work for months, and the state summons that idle stretch into state works. The
rhythm of the labor follows the Nile.

Memory anchor: the Greeks said "Egypt is the gift of the Nile." Without this river's regular
flood there is no black land, no farming surplus, and so no labor army of tens of thousands.`,
        },
      },
    },

    {
      id: 'divine-kingship-pharaoh',
      termCn: '神权王权：法老是活着的神',
      termEn: 'Divine Kingship: the Pharaoh as Living God',
      standardRef: ['AP World — divine kingship / state-building', 'CA HSS Grade 6 — Egypt / pharaoh'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'khufu',
        nodeIds: ['khufu-n1', 'khufu-n3'],
        xiaoweiNote: {
          cn: `Khufu 那一遍第 1、3 节就是讲这个。一开始我以为法老就是个「国王」，错了。
在埃及人的世界观里，法老不是凡人国王，是活着的神。

我把这套合法性逻辑背成一条链：
法老是神 → 他维持宇宙秩序 Ma'at（真理、正义、世界不塌的平衡）→ 他治理得好尼罗河就按时泛滥、
庄稼就长 → 他死后变成神，继续从天上护佑埃及。

考点关键句：因为法老是神，给他建金字塔在当时人心里不是「替暴君卖命」，而是「维护整个世界不塌掉」。
这就是神权王权（divine kingship）最厉害的地方，它把「强制劳役」包装成了「神圣的意义」。

跨课提醒：老师说后世一切「统治者宣称自己代表或连接神」的制度，源头都能追到这种把
权力和神圣绑在一起的逻辑。`,
          en: `Khufu's pass, Nodes 1 and 3, is exactly about this. At first I pictured the pharaoh as
just a "king." Wrong. In the Egyptian worldview the pharaoh is not a mortal king but a living god.

I memorize the legitimacy logic as a chain:
the pharaoh is a god, so he holds Ma'at (truth, justice, the balance that keeps the world from
collapsing), so if he rules well the Nile floods on time and the crops rise, and when he dies he
becomes a god who keeps watching over Egypt from the sky.

Key exam sentence: because the pharaoh is a god, building him a pyramid was not, in people's minds,
"serving a tyrant" but "keeping the whole world from collapsing." That is the most powerful thing
about divine kingship, it dresses up forced labor as sacred meaning.

Cross-topic reminder: teacher said every later system where a ruler claims to represent or connect
to a god traces back to this logic of binding power to the sacred.`,
        },
      },
    },

    {
      id: 'great-pyramid-purpose-engineering',
      termCn: '大金字塔：升天机器与工程',
      termEn: 'The Great Pyramid: Machine of Ascent and Engineering',
      standardRef: ['CA HSS Grade 6 — the pyramids', 'AP World — monumental architecture'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'khufu',
        nodeIds: ['khufu-n3', 'khufu-n8', 'lab-n4'],
        xiaoweiNote: {
          cn: `Khufu 那一遍第 3、8 节讲它的目的，劳工那一遍第 4 节让我亲手「搬」了一块石头。

先破一个误解：金字塔不是粮仓，也不只是「炫耀的大坟」。它是法老的陵墓兼一台「升天机器」，
尖顶指向天空，像给灵魂走的阶梯，帮法老死后上升变成永生的神。Khufu 给它起的名字接近
「Akhet-Khufu（胡夫的地平线）」。

工程数字必背：约 230 万块石头，绝大多数是石灰岩每块约两三吨，原高约 146 米。内部墓室（如王室墓室）
用的是从阿斯旺运来的花岗岩巨石，部分单块重达数十吨（王室墓室顶板最重约 50–80 吨）。没有起重机、
没有铁工具，全靠铜凿、石锤、木雪橇、绳索、斜坡和庞大的人力组织。它建成时是当时地球上最大的人造物，
4500 年后还立着，是古代七大奇迹里唯一基本保存下来的。

还有一个常考的小坑：金字塔建成时不是今天这种灰扑扑的台阶状，外面包了一层光滑的白色 Tura 石灰岩，
在阳光下会发光，是一座会发光的白色尖山（那层白石灰岩几千年后被人剥走他用了）。`,
          en: `Khufu's pass Nodes 3 and 8 give its purpose, and the laborer's pass Node 4 let me "haul"
a stone with my own hands.

First, bust a misconception: the pyramid is not a granary, nor just a "tomb for show." It is the
pharaoh's tomb and a "machine of ascent," its point aimed at the sky like a stairway for the soul,
to lift the pharaoh into an eternal god after death. Khufu's name for it is close to "Akhet-Khufu,
the horizon of Khufu."

Must-memorize engineering numbers: some 2.3 million stones, the vast majority limestone at roughly
two to three tonnes each, originally about 146 meters high. The inner chambers (such as the King's
Chamber) used granite megaliths hauled from Aswan, some single blocks weighing tens of tonnes (the
King's Chamber ceiling beams reach roughly 50–80 tonnes each). No cranes, no iron tools, all done
with copper chisels, stone hammers, wooden sledges, ropes, ramps, and vast human organization.
When finished it was the largest man-made thing on earth, still standing 4,500 years later, the
only one of the seven ancient wonders to survive largely intact.

One more common trap: when finished the pyramid was not today's gray, stepped shape. It was wrapped
in smooth white Tura limestone that shone in the sun, a glowing white peak (that white casing was
stripped for other uses thousands of years later).`,
        },
      },
    },

    {
      id: 'corvee-labor-slave-myth',
      termCn: '征召劳役（corvée）与破奴隶神话',
      termEn: 'Corvée Labor and Busting the Slave Myth',
      standardRef: ['AP World — labor systems', 'CA HSS Grade 6 — who built the pyramids', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'pyramid-laborer-receiving-end',
        nodeIds: ['lab-n1', 'lab-n3', 'lab-n5'],
        xiaoweiNote: {
          cn: `这是整门课最重要的一张卡，劳工那一遍第 1、3、5 节全在破这个坑。

老师说的最大误解：「金字塔是被鞭子抽的外族奴隶建的」。这是约公元前 5 世纪希罗多德的传说，
被几千年后的好莱坞定型，错得最离谱。

现代考古的真相（必背四条）：
1. 是本地埃及农民，不是外族奴隶。
2. 是 corvée（征召劳役 / 徭役）：泛滥季田淹种不了地，被国家按名册征召，干一阵轮换回家，不是终身奴隶制。
3. 吃得不差：天天有面包、啤酒、牛肉、鱼（一个普通农民在村里一年也吃不上几次肉）。
4. 受伤有人治、死了被葬：工人骨头上有愈合的骨折甚至成功的截肢，死后葬在金字塔脚下。

关键的中间地带（DBQ 高频）：破了奴隶神话，但别滑到另一个极端说这是「快乐的工人」。这活儿照样
2 到 3 吨的石头靠人力拖、照样有人被砸死累垮、照样不是劳工自己能选的。真相在「鞭子奴隶」和
「快乐工人」两个极端的中间，这正是 AP 评分要的 complexity（复杂性）。`,
          en: `This is the single most important card in the whole topic, and the laborer's pass Nodes 1,
3, and 5 all work to bust this trap.

Teacher's biggest misconception: the false claim "the pyramids were built by whip-driven foreign
slaves." That is Herodotus's legend from around the 5th century BCE, cemented by Hollywood thousands
of years later, and the most badly wrong of all.

The truth from modern archaeology (memorize four points):
1. They were local Egyptian farmers, not foreign slaves.
2. It was corvée labor: when the flood drowned the fields and they could not farm, the state
   summoned them by a roll, they served a stretch and rotated home, not lifelong slavery.
3. They ate well: bread, beer, beef, and fish every day (a common farmer ate meat only a few times
   a year in his village).
4. The injured were tended and the dead were buried: workers' bones show healed fractures and even
   successful amputations, and the dead were buried at the foot of the pyramid.

The key middle ground (high-frequency DBQ): busting the slave myth does not mean sliding to the
other extreme of "happy workers." The work still meant hauling two to three tonne stones by muscle,
men were still crushed and worn down, and it was still not theirs to choose. The truth sits between
the two extremes of "whip-driven slaves" and "happy workers," which is exactly the complexity AP
scoring rewards.`,
        },
      },
    },

    {
      id: 'social-hierarchy',
      termCn: '古埃及社会金字塔',
      termEn: 'The Social Hierarchy of Ancient Egypt',
      standardRef: ['CA HSS Grade 6 — Egyptian society', 'AP World — social structure'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'hemiunu',
        nodeIds: ['hem-n2', 'hem-n3'],
        xiaoweiNote: {
          cn: `Hemiunu 那一遍第 2、3 节让我从「中间那一层」看清了整个社会的样子。这一课有个
特别好记的地方：这个社会本身，长得就像一座金字塔。

我从顶到底背一遍：
1. 最顶端：法老（活着的神）。
2. 往下一层：王室成员、维西尔（vizier，最高行政长官，比如 Hemiunu）、高级祭司。
3. 再下面：书吏（scribe）、工匠、监工、士兵。
4. 最底下、人数最多：农民，平时种地交粮，泛滥季被征去服劳役。

考点关键句：Hemiunu 是「夹在中间」的完美例子，上面是要永生的神王，下面是几万个会受伤会死的农民，
组织难题全压在他一个人肩上。这张「谁在上谁在下、谁的代价被看见」的社会金字塔，是 AP DBQ
做利益相关方分析（stakeholder grid）的骨架。`,
          en: `Hemiunu's pass Nodes 2 and 3 let me see the whole society clearly from "the middle layer."
This topic has one very memorable feature: the society itself is shaped like a pyramid.

I memorize it top to bottom:
1. At the very top: the pharaoh (a living god).
2. The layer below: royal family, the vizier (the highest official, like Hemiunu), high priests.
3. Below that: scribes, craftsmen, overseers, soldiers.
4. At the very bottom and most numerous: farmers, who farm and pay grain, and in flood season are
   summoned to serve labor.

Key exam sentence: Hemiunu is the perfect example of being "in the middle," a god-king who wants
eternity above and tens of thousands of farmers who get hurt and die below, the whole organizing
problem pressing on him alone. This social pyramid of "who is on top, who at the bottom, whose cost
is seen" is the skeleton for an AP DBQ stakeholder grid.`,
        },
      },
    },

    {
      id: 'scribes-hieroglyphs-bureaucracy',
      termCn: '书吏、象形文字与记账官僚',
      termEn: 'Scribes, Hieroglyphs, and the Record-Keeping State',
      standardRef: ['CA HSS Grade 6 — writing / hieroglyphs', 'AP World — bureaucracy & record-keeping'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'hemiunu',
        nodeIds: ['hem-n3'],
        xiaoweiNote: {
          cn: `Hemiunu 那一遍第 3 节里反复出现一种人，书吏（scribe）。我一开始没在意，后来发现这其实是
古王国能建成金字塔的隐形地基。

考点关键句：没有这套记账官僚系统，金字塔根本不可能建成。Hemiunu 把几万人编成有名字的工班，
再让书吏把一切记成账，哪个班今天搬了几块石头、领了多少面包和啤酒，全有记录。几万人没有这套
系统就是一团乱麻，有了它才变成一座能往上长的山。

书吏靠的是 hieroglyphs（象形文字），埃及人用来记账、刻碑、写下国王的功绩。会写字的人在埃及
是少数精英，地位高，因为「记录」本身就是一种权力。

这里连得上 Merer 日志（在劳工那一遍读到）：一个中级监工随手记的运石流水账，4500 年后成了我们
了解金字塔怎么建的最珍贵一手证据。这说明古埃及是一个「凡事都要写下来」的成熟官僚国家。`,
          en: `In Hemiunu's pass Node 3 one kind of person keeps appearing, the scribe. I ignored it at
first, then realized it is the invisible foundation that let the Old Kingdom build a pyramid at all.

Key exam sentence: without this record-keeping bureaucracy the pyramid could never have been built.
Hemiunu formed tens of thousands into named work gangs, then had scribes keep accounts of everything,
which gang hauled how many stones today, drew how much bread and beer, all of it recorded. Tens of
thousands without that system are a tangled mess; with it, they become a mountain that can grow upward.

Scribes worked in hieroglyphs, which the Egyptians used to keep accounts, carve monuments, and write
down the kings' deeds. Literate people were a small elite with high standing, because keeping records
is itself a kind of power.

This connects to the Diary of Merer (read in the laborer's pass): a mid-level inspector's casual
stone-hauling ledger became, 4,500 years later, our most precious firsthand evidence of how the
pyramid was built. It shows ancient Egypt was a mature bureaucratic state that wrote everything down.`,
        },
      },
    },

    {
      id: 'religion-afterlife-maat',
      termCn: '来世信仰：Ma\'at、卡（ka）与制木乃伊',
      termEn: 'Afterlife Belief: Ma\'at, the Ka, and Mummification',
      standardRef: ['CA HSS Grade 6 — Egyptian religion / afterlife', 'AP World — belief systems'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'khufu', nodeId: 'khufu-n3', context: 'Khufu 讲 Ma\'at（宇宙秩序）和死后变神，金字塔是升天工具' },
          { lens: 'pyramid-laborer-receiving-end', nodeId: 'lab-n7', context: '劳工相信法老死后变神会从天上继续护佑埃及' },
        ],
      },
      standaloneText: {
        cn: `故事里反复提到 Ma'at 和「死后变神」，但古埃及的来世信仰是一整套体系，考试单独考，得补全。

「为什么要花这么大代价建一座坟」的答案，全藏在埃及人对死亡的看法里，他们不觉得死亡是终点，
而是通往永生的一道门。要过这道门，需要三样东西配齐：

1. Ma'at（玛特）：宇宙的秩序、真理、正义。法老活着维持 Ma'at，普通人也要按 Ma'at 行事。
   埃及人相信，人死后心脏会被拿去和「真理之羽」称重，活得是否合乎 Ma'at，决定能不能进永生。

2. ka（卡）：每个人身上一种生命力或灵魂的部分。埃及人相信 ka 在人死后还要存在，还需要
   「身体」当作它的居所，也需要食物供奉。这就引出了下一样。

3. mummification（制木乃伊）：把遗体处理、风干、用亚麻布包裹保存下来，让灵魂（ka）死后
   有身体可依附。法老和贵族的木乃伊被放进精心保护的墓里，配上随葬品和食物供奉。

把三样串起来：因为相信死后有永生（要 Ma'at 过关），灵魂（ka）需要保存好的身体（靠 mummification），
也需要一个安全永久的居所，法老的那个居所，就是金字塔。金字塔不是迷信的浪费，在埃及人的逻辑里，
它是「让神王安全地通往永生、继续护佑埃及」的必需品。

故事连接：Khufu 那一遍第 3 节讲他靠 Ma'at 和死后变神来解释为什么非建这座山不可；劳工那一遍
第 7 节里，连最底层的农民都真信法老死后变神会护佑他们,所以才会「心甘情愿」搬石头。`,
        en: `The story keeps mentioning Ma'at and "becoming a god after death," but ancient Egypt's
afterlife belief is a whole system tested on its own, so fill it in.

The answer to "why spend so much to build a tomb" hides entirely in how Egyptians saw death. They
did not see death as the end, but as a doorway to eternal life. To pass through that door, three
things had to line up:

1. Ma'at: the order of the cosmos, truth, justice. The pharaoh holds Ma'at in place while alive, and
   ordinary people too must live by Ma'at. Egyptians believed that after death the heart was weighed
   against the "feather of truth," and whether you had lived by Ma'at decided whether you reached
   eternal life.

2. The ka: a part of each person, a life force or aspect of the soul. Egyptians believed the ka lived
   on after death and still needed a "body" as its dwelling, and food offerings too. That leads to the
   next thing.

3. Mummification: treating, drying, and wrapping the body in linen to preserve it, so the soul (the ka)
   had a body to inhabit after death. The mummies of pharaohs and nobles were placed in carefully
   protected tombs with grave goods and food offerings.

String the three together: because they believed in eternal life after death (passing the Ma'at test),
the soul (the ka) needed a well-preserved body (through mummification) and a safe, permanent dwelling.
For a pharaoh, that dwelling was the pyramid. The pyramid was not superstitious waste; in Egyptian logic
it was a necessity to carry the god-king safely into eternal life so he could keep watching over Egypt.

Story link: Khufu's pass Node 3 uses Ma'at and becoming a god after death to explain why he must build
this mountain; in the laborer's pass Node 7, even the lowest farmer truly believes the pharaoh will
become a god and protect them, which is why he is "willing" to haul stone.`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里没单独演完，我得自己补。我的记忆口诀：Ma'at 是「过关的标准」，ka 是「需要身体的灵魂」，
mummification 是「给灵魂留身体」，金字塔是「给法老的灵魂留的永久豪宅」。四样串成一条「通往永生」的链子,
就懂了为什么埃及人肯花这么大代价。`,
        en: `The story doesn't fully act this card out, so I fill it in. My mnemonic: Ma'at is "the passing
standard," the ka is "a soul that needs a body," mummification is "keeping a body for the soul," and the
pyramid is "the permanent mansion for the pharaoh's soul." String the four into one chain "toward eternal
life" and you understand why Egyptians were willing to pay so much.`,
      },
    },

    {
      id: 'old-kingdom-memphis-statecraft',
      termCn: '古王国、孟菲斯与中央集权',
      termEn: 'The Old Kingdom, Memphis, and Centralized Statecraft',
      standardRef: ['CA HSS Grade 6 — Old Kingdom Egypt', 'AP World — state-building / centralization'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'hemiunu', nodeId: 'hem-n9', context: 'Hemiunu 把「组织几万人干几十年大事」的系统第一次大规模练出来' },
          { lens: 'khufu', nodeId: 'khufu-n10', context: 'Khufu 把「一个国家能办多大的事」推到那个时代的极限' },
        ],
      },
      standaloneText: {
        cn: `这座金字塔之所以可能，背后是一个叫「古王国（Old Kingdom）」的强大国家。故事是从「人」的角度
讲的，但 AP World 会从「国家」的角度考你，所以这张卡单独补。

古王国是古埃及历史的一个大时期，第四王朝（Khufu 所在）是它中央集权和国家动员能力的顶点。几个必知点：

1. 首都在 Memphis（孟菲斯），位于上下埃及交界处，便于控制整条尼罗河。金字塔群在不远处吉萨高原的
   西岸,因为太阳从西边落下，西岸是死者的世界。

2. 治理结构：法老在最顶端，通过维西尔（vizier）这个最高行政长官，再通过庞大的书吏系统管理全国。
   这是人类很早就出现的成熟「官僚国家」,靠记录和分工运转,不靠法老一个人盯着。

3. 国家能力的证明：能把几万人征召、供养、组织、医治、安葬几十年，本身就证明这是一个高度成熟的国家。
   建金字塔不只是建一座坟,更是这个国家在向世界(和向自己)证明「我们能把分散的农民,凝成一支办大事的力量」。

4. 大金字塔时代其实很短：这么大的塔代价极高,Khufu 的儿子 Khafre（哈夫拉,建第二金字塔加大狮身人面像）、
   孙子 Menkaure 之后,法老逐渐不再建这种规模。但「法老是神、维持 Ma'at」的神权王权信念,延续了两三千年,
   是整个埃及文明的精神地基。

故事连接：Hemiunu 那一遍第 9 节说,他那套「组织几万人干几十年大事」的系统,是人类第一次在这么大规模上
练出来的；Khufu 那一遍第 10 节说,他把「一个国家能办多大的事」推到了那个时代的极限。这两句话,
讲的都是古王国作为「早期中央集权国家」的能力。`,
        en: `This pyramid was possible because of a powerful state called the Old Kingdom. The story is told
from the angle of "people," but AP World tests you from the angle of "the state," so fill in this card.

The Old Kingdom is a major period of ancient Egyptian history, and the Fourth Dynasty (Khufu's) is the
peak of its centralization and power to mobilize. A few must-know points:

1. The capital was at Memphis, near the boundary of Upper and Lower Egypt, easy for controlling the whole
   Nile. The pyramids stand on the Giza plateau on the west bank, because the sun sets in the west, so the
   west bank is the world of the dead.

2. The governing structure: the pharaoh at the very top, ruling through the vizier as highest official, and
   then through a vast scribe system across the country. This was a mature "bureaucratic state" that appeared
   very early, running on records and division of labor, not on the pharaoh watching everything alone.

3. Proof of state power: being able to summon, provision, organize, heal, and bury tens of thousands for
   decades itself proves a highly mature state. Building the pyramid was not only building a tomb; it was the
   state proving, to the world and to itself, that it could gather scattered farmers into a force that does
   great things.

4. The age of giant pyramids was actually short: such pyramids cost enormously, and after Khufu's son Khafre
   (who built the second pyramid and the Great Sphinx) and grandson Menkaure, pharaohs gradually stopped
   building at that scale. But the divine-kingship belief that "the pharaoh is a god who holds Ma'at" lasted
   two to three thousand years, the spiritual foundation of the whole civilization.

Story link: Hemiunu's pass Node 9 says his system of "organizing tens of thousands to do one thing for
decades" was first drilled by humankind at this scale; Khufu's pass Node 10 says he pushed "how much a state
can do" to the limit of that age. Both lines describe the Old Kingdom's power as an early centralized state.`,
      },
      xiaoweiNote: {
        cn: `这张卡故事里没正面讲「国家」,我得自己从「人」补回到「制度」。我的记忆锚:金字塔不只是一座坟,
是古王国这台国家机器的「成绩单」,首都 Memphis 加上 vizier 加上书吏系统,证明它早就是一个能动员
几万人的成熟官僚国家。考 AP 时记住:能建金字塔本身,就是「国家能力」的证据。`,
        en: `The story doesn't address "the state" head-on, so I work back from "people" to "institutions." My
memory anchor: the pyramid is not just a tomb, it is the Old Kingdom state machine's "report card." Memphis as
capital plus the vizier plus the scribe system prove it was already a mature bureaucratic state able to mobilize
tens of thousands. For AP, remember: being able to build a pyramid is itself evidence of "state capacity."`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `一座立了 4500 年、全世界都来惊叹的奇迹,是靠征召几万个普通农民、付出受伤甚至死亡的代价才建成的。

你觉得这样一座金字塔,应该被记成「人类组织能力的奇迹」,还是「建在普通人血汗上的吃人工程」?
用至少两条具体证据支持你的判断。`,
      en: `A wonder that has stood 4,500 years and that the whole world comes to marvel at was built by
summoning tens of thousands of ordinary farmers, at the cost of injury and even death.

Should such a pyramid be remembered as "a wonder of human organizing power," or as "a devouring project
built on the blood and sweat of ordinary people"? Support your judgment with at least two specific pieces
of evidence.`,
      hintCn: `提示:这题没有标准答案,AP 评分看你「用证据」的能力,不看你站哪边。
- 「奇迹」这边的证据:约 230 万块石头、146 米高、4500 年还立着、七大奇迹唯一保存下来的;
  能供养、组织、医治、安葬几万人几十年,本身就是早期国家能力的奇迹。
- 「吃人工程」这边的证据:corvée 强制征召、劳工不可自选、2 到 3 吨石头靠人力拖、有人被砸死累垮;
  几万双手垒起它,绝大多数连名字都没留下。
高分写法:承认两边都站得住(它既是奇迹也是代价),再说明你为什么更倾向某一边,这就叫 complexity(复杂性)。`,
      hintEn: `Hint: no standard answer, AP scoring looks at your ability to use evidence, not which side you pick.
- Evidence for "a wonder": some 2.3 million stones, 146 meters high, still standing after 4,500 years, the
  only ancient wonder to survive; provisioning, organizing, healing, and burying tens of thousands for decades
  is itself a wonder of early state capacity.
- Evidence for "a devouring project": corvée was forced summoning, the labor was not theirs to choose, two to
  three tonne stones were hauled by muscle, men were crushed and worn down; the tens of thousands of hands that
  raised it left, for the most part, not even a name.
High-scoring move: acknowledge both sides stand (it is both a wonder and a cost), then explain why you lean one
way, which is complexity.`,
      conceptsActivated: ['great-pyramid-purpose-engineering', 'corvee-labor-slave-myth'],
    },
    {
      id: 'q2',
      cn: `同样一群搬石头的人,在好莱坞电影里是被鞭子抽的奴隶,在现代考古证据里是吃牛肉、受伤被治、
被编进有名字工班的本地农民。可直到今天,大多数人脑子里的金字塔还是「鞭子加奴隶」那一版。

为什么「真相」反而比「传说」更难被记住、更晚才被看见?如果你是 AP 老师,要出一道题逼学生想清楚
「为什么我们更容易相信传说」,你会怎么提问?写出你的题目,并说明这道题想逼学生看见什么。`,
      en: `The same crowd hauling stone is, in Hollywood films, whip-driven slaves, but in modern
archaeological evidence is local farmers who ate beef, had their wounds tended, and were formed into named
work gangs. Yet to this day, most people's mental image of the pyramids is still the "whip and slaves" version.

Why is the "truth" actually harder to remember, and seen later, than the "legend"? If you were an AP teacher
writing a question to make students think through "why we more easily believe the legend," how would you phrase
it? Write your question and explain what it is meant to make students see.`,
      hintCn: `提示:好的 DBQ 题通常会逼学生「同时拿两类证据比一比」,而不是简单选对错。
可以从史料类型切入:传说(希罗多德建塔约 2000 年后听导游讲的)是「文字 + 故事性强」,容易传;
真相靠的是物质证据(工人城 Heit el-Ghurab、工人墓地、愈合的骨折、工班诨名),不性感、要慢慢挖、不好讲成故事。
你的题目可以让学生比较「为什么一个戏剧性的错误版本能流传 2500 年,而枯燥的真相要等到现代考古才被听见」,
点出一个核心:历史不只是「发生了什么」,还包括「谁讲、怎么讲、哪种版本更好传」。`,
      hintEn: `Hint: a good DBQ forces students to "weigh two kinds of evidence against each other," not simply
pick right from wrong. You can come at it through source type: the legend (Herodotus, who heard guides some 2,000
years after the pyramid was built) is "text plus a strong story," easy to spread; the truth rests on material
evidence (the Heit el-Ghurab workers' town, the burial ground, healed fractures, gang nicknames), unsexy, slow to
dig up, hard to tell as a story. Your question could have students compare "why a dramatic wrong version spread
for 2,500 years while the dull truth waited for modern archaeology to be heard," naming a core point: history is
not only "what happened" but also "who tells it, how, and which version travels best."`,
      conceptsActivated: ['corvee-labor-slave-myth', 'scribes-hieroglyphs-bureaucracy'],
    },
    {
      id: 'q3',
      cn: `那些搬石头的农民,很多人是真信的,他们相信法老是活着的神,替他建这座升天的山,就是在维护
整个世界不塌掉。所以他们有时候是「心甘情愿」地干。

你觉得这种「心甘情愿」,是一种真实的意义感,还是从小被教成这样、根本没得选的「被说服」?
神权王权这套信念,把强制劳役变成了「神圣的事」,这到底是埃及社会的智慧,还是它最深的一个陷阱?
用故事里或这一课里的一个具体细节支持你的看法。`,
      en: `Many of those farmers hauling stone truly believed. They believed the pharaoh was a living god, and
that building him this stairway-to-the-sky was keeping the whole world from collapsing. So at times they were
"willing" to do it.

Do you think this "willingness" was a real sense of meaning, or a "persuasion" they were taught from childhood
with no real choice? Divine kingship turned forced labor into "a sacred thing," so was this the wisdom of Egyptian
society, or its deepest trap? Support your view with one specific detail from the story or this topic.`,
      hintCn: `提示:先把概念分清。神权王权(法老是神 + 维持 Ma'at)是「合法性逻辑」;corvée 是「实际的劳役制度」。
这套信念厉害在哪:它让强制(被名册征召、不可自选)感觉起来像「自愿的神圣使命」。
可以用的具体细节:劳工那一遍第 7 节,他说「我没被锁链拴着,有时是心甘情愿的,可这心甘情愿,
是我自己想明白的,还是从小被教成这样的?」,这句话本身就是这道题的核心。
进阶思考:今天你身边有没有类似的事,一件被说成「为了大局」「为了集体荣誉」的事,
让你不好意思拒绝、甚至真心想做?那份「心甘情愿」,有多少是你自己选的,有多少是环境教给你的?
AP 看的是你能不能用一个真实细节,把抽象的论点钉在证据上。`,
      hintEn: `Hint: first keep the concepts straight. Divine kingship (the pharaoh is a god holding Ma'at) is the
"legitimacy logic"; corvée is the "actual labor system." The power of this belief is that it makes coercion (being
summoned by a roll, no choice) feel like a "voluntary sacred mission." A usable detail: in the laborer's pass Node 7
he says, "I was not chained; at times I was willing, but this willingness, did I reason my way to it myself, or was I
taught it from childhood?" That line is itself the heart of this question. Going deeper: is there something like this
in your life today, something framed as "for the greater good" or "for the team's honor" that makes you reluctant to
refuse, or even genuinely want to do it? How much of that "willingness" is your own choice, and how much was taught
to you by your surroundings? AP wants you to pin the abstract claim to evidence with one real detail.`,
      conceptsActivated: ['divine-kingship-pharaoh', 'corvee-labor-slave-myth', 'religion-afterlife-maat'],
    },
  ],
};

export default notebook;
