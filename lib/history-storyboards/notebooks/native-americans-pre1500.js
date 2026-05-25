// ─── 同伴笔记本架构 v1 · Native Nations of North America before 1500 ─────
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
//   - storyboard 提供情感锚点（haudenosaunee-leader 建造者 / clan-mother 幕后定人选 /
//     contact-survivor 受影响方三条线）
//   - notebook 提供考点闭环（北美多样性、大和平法、母系制、Cahokia、太平洋西北/平原、
//     大死亡、空地神话、Iroquois-宪法论争 — 补完 CA HSS-5.1 + APUSH Period 1）
//   - storyAnchor.mentionedIn 把「故事里的彩蛋」和「考点卡」双向绑定
//
// 课纲对齐：
//   - CA HSS Grade 5.1（接触前的北美原住民社会）
//   - APUSH Period 1（1491-1607）：Topic 1.2-1.3（Native American societies before contact）
//   - AP CED 核心：diversity（多样性）+ environment shaped society（环境塑造社会）+ 接触后果
//
// 事实地基：对账 native-americans-pre1500.md（narrative kernel）
//   - 北美「数百个民族、数十个语系」，NOT 一个民族
//   - 大死亡 ~90% 是估算（许多地区，非确定数字）
//   - 大和平法建立年代学界有争议（~1400s 等，无定论）
//   - Iroquois 影响美国宪法 = 真实但仍有争论的学术辩题，标 DEBATED 不夸大
//   - Plains 马是欧洲人带来的（pre-1492 步行打猎）
//   - 与 pre-columbian Topic（Mesoamerica/Andes：Aztec/Maya/Inca）零交叉
//
// schemaVersion: 1 · notebookVersion: native-americans-pre1500-v1

export var notebook = {
  topicId: 'native-americans-pre1500',
  topicNameCn: '接触前的北美原住民',
  topicNameEn: 'Native Nations of North America before 1500',
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
    cn: `今天老师说我们要学「欧洲人到来之前的北美原住民」。
她说这是加州五年级历史的第一单元（CA HSS-5.1），AP 美国史也从这儿讲起（Period 1）。

她先纠了我一个错。我一直以为「原住民」是一个民族，过着差不多的日子。
老师说：错。北美在接触前住着数百个民族、说着数十种互不相通的语言，活法天差地别。

她给了一张纸，上面写着这些词：

Haudenosaunee（易洛魁邦联）、Great Law of Peace（大和平法）、
sachem（推举的酋长）、Clan Mother（氏族母亲）、matrilineal（母系制）、
Cahokia（土丘大城）、potlatch（夸富宴）、the great dying（大死亡）、
empty land myth（空地神话）。

我先记下来，等下读三个故事——一个建造者（把五个仇敌民族织成一个会议）、
一个氏族母亲（不坐会议桌却决定谁能坐）、一个接触期的幸存者（看着自己的世界被叫作「空地」）——
读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「欧洲人来之前，这片大陆不是一片空地。
它住满了人。后来看起来空，是因为它被清空了。空和被清空，差的那个字，是这一课的钥匙。」`,
    en: `Today my teacher said we're learning about the Native nations of North America
before the Europeans arrived. She said it's the first unit of California fifth-grade
history (CA HSS-5.1), and AP US History starts here too (Period 1).

She corrected one mistake of mine right away. I had always thought "Native people" were
one people who lived more or less the same way. She said: wrong. Before contact, North
America held hundreds of peoples speaking dozens of mutually unintelligible languages,
living in wildly different ways.

She gave us a sheet with these terms:

Haudenosaunee (the Iroquois Confederacy), Great Law of Peace,
sachem (a raised-up chief), Clan Mother, matrilineal,
Cahokia (a city of mounds), potlatch, the great dying,
the empty land myth.

Let me write these down. After I read the three stories — a builder (who wove five enemy
peoples into a single council), a clan mother (who never sits at the council table yet
decides who can), and a contact survivor (who watched his world be called "empty land") —
I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "Before the Europeans
came, this continent was not empty land. It was full of people. The reason it later looked
empty is that it was emptied. The word that differs between empty and emptied is the key
to this lesson."`,
    keyTerms: [
      { cn: 'Haudenosaunee（易洛魁邦联）', en: 'Haudenosaunee / Iroquois Confederacy' },
      { cn: '大和平法', en: 'Great Law of Peace' },
      { cn: '推举的酋长', en: 'sachem' },
      { cn: '氏族母亲', en: 'Clan Mother' },
      { cn: '母系制', en: 'matrilineal' },
      { cn: '一致同意（共识决）', en: 'consensus' },
      { cn: '贝壳珠串记录', en: 'wampum' },
      { cn: '土丘大城', en: 'Cahokia' },
      { cn: '夸富宴', en: 'potlatch' },
      { cn: '大死亡', en: 'the great dying' },
      { cn: '空地神话', en: 'empty land myth' },
      { cn: '能动性（不是被动受害）', en: 'agency' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: 'Haudenosaunee 邦联酋长（sachem）',
        nameEn: 'Haudenosaunee Sachem',
        ipa: '/ˈseɪtʃəm/',
        roleCn: '推举出来的酋长（非世袭王），维系大和平法、坐进 Grand Council 议事；本故事的建造者视角（代表性角色，非单一史料人物）',
        roleEn: 'A raised-up chief (not a hereditary king) who keeps the Great Law and sits in the Grand Council; the builder lens of this story (a representative role, not a single named source figure)',
        mustKnow: true,
        audioKey: 'haudenosaunee-sachem',
      },
      {
        nameCn: 'Haudenosaunee 氏族母亲（Clan Mother）',
        nameEn: 'Haudenosaunee Clan Mother',
        ipa: '/klæn ˈmʌðər/',
        roleCn: '氏族中最年长有威望的女性，在母系社会里选立并能罢免 sachem，掌田地与血脉；本故事的幕后调停者视角（代表性角色）',
        roleEn: 'The eldest, most respected woman of a clan, who in a matrilineal society raises up and can remove sachems and holds the fields and bloodline; the behind-the-scenes mediator lens (a representative role)',
        mustKnow: true,
        audioKey: 'haudenosaunee-clan-mother',
      },
      {
        nameCn: '接触期的幸存者',
        nameEn: 'Contact Survivor',
        ipa: '/ˈkɒntækt sərˈvaɪvər/',
        roleCn: '大死亡的见证者，活在欧洲人初到的那几代；明示为合成代表人物（把许多真实经历合到一人身上，不是史料里某个有名有姓的人）',
        roleEn: 'A witness to the great dying, living through the first generations of European arrival; explicitly a composite representative figure (gathering many real experiences into one, not a single named person from the records)',
        mustKnow: true,
        audioKey: 'contact-survivor',
      },
      {
        nameCn: 'the Peacemaker / Hiawatha',
        nameEn: 'the Peacemaker / Hiawatha',
        ipa: '/ˈpiːsˌmeɪkər/ /ˌhaɪəˈwɑːθə/',
        roleCn: '口传中大和平法的两位创立者（先知 the Peacemaker 与助手 Hiawatha）；属口传传统，不是有文字史料确证的事件',
        roleEn: 'The two founders of the Great Law in oral tradition (the prophet the Peacemaker and his helper Hiawatha); part of oral tradition, not an event confirmed by written records',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '本杰明·富兰克林',
        nameEn: 'Benjamin Franklin',
        ipa: '/ˈbɛndʒəmɪn ˈfræŋklɪn/',
        roleCn: '美国建国者，曾与 Haudenosaunee 邦联打交道；在「Iroquois 是否影响美国宪法」这一论争里被支持方引用（论争，非定论）',
        roleEn: 'An American founder who dealt with the Haudenosaunee Confederacy; cited by supporters in the debate over whether the Iroquois influenced the US Constitution (a debate, not settled)',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'native-diversity-not-one-people',
      termCn: '北美的多样性（不是一个民族）',
      termEn: 'North American Diversity (Not One People)',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.2', 'AP CED — diversity'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n7'],
        xiaoweiNote: {
          cn: `这个我读过！在建造者那一遍第 7 节，他把镜头从自己那片林子拉远，
诚实地说了一句：「原住民」不是一个民族。他的邦联，只是这片大陆上几百个民族里的一支。

我把区域差异背成一张对照表（AP CED 反复强调 diversity + 环境塑造社会）：
- 东北林地（Haudenosaunee 等）：定居农耕，住长屋，种「三姐妹」（玉米、豆子、南瓜）。
- 密西西比河谷：Cahokia 土丘大城（另一张卡）。
- 西南沙漠：祖先普韦布洛人（Ancestral Puebloans）把房子嵌进悬崖崖壁。
- 太平洋西北：靠每年回游的鲑鱼致富，办 potlatch（夸富宴，另一张卡）。
- 大平原：⚠️ pre-1492 还没有马，是步行打猎（这条单列一张卡，超高频纠错）。

考点关键句：数百个民族、数十种语言、几种完全不同的活法。
把这么多人说成「一个原始的民族」，是后来才发明出来的故事。AP 爱让你举不同区域的例子。`,
          en: `I read this! In the builder's pass, Node 7, he pulls the lens back from his
own woods and honestly says one thing: "Native people" are not one people. His confederacy
is only one among hundreds of peoples on this continent.

I memorize the regional differences as a table (AP CED keeps stressing diversity +
environment shaped society):
- Northeast woodlands (Haudenosaunee and others): settled farming, longhouses, the Three
  Sisters (corn, beans, squash).
- Mississippi valley: Cahokia, a city of mounds (its own card).
- Southwest desert: the Ancestral Puebloans set their houses into cliff faces.
- Pacific Northwest: grew wealthy on returning salmon, held the potlatch (its own card).
- Great Plains: warning, no horses before 1492, hunting on foot (its own card, a
  very-high-frequency correction).

Key exam sentence: hundreds of peoples, dozens of languages, several entirely different
ways of living. Calling all of them "one primitive people" is a story invented later.
AP loves asking you to give examples from different regions.`,
        },
      },
    },

    {
      id: 'haudenosaunee-great-law-of-peace',
      termCn: 'Haudenosaunee 邦联与大和平法',
      termEn: 'Haudenosaunee Confederacy & the Great Law of Peace',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.3', 'AP CED — complex governance'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n3', 'hl-n5', 'hl-n6'],
        xiaoweiNote: {
          cn: `建造者那一遍整条线就是这个。Haudenosaunee（英文常作 Iroquois，中文旧译「易洛魁」）
邦联，原本是五个说同源语言、却世代互杀的民族——Mohawk、Oneida、Onondaga、Cayuga、Seneca
（1722 年 Tuscarora 加入，成为第六个）。

它靠一部叫「大和平法」（Great Law of Peace）的规矩治理。第 3 节讲它怎么来的，
第 5 节讲它多精巧，第 6 节讲它最难的一步。我把它压成三条：
1. 五个民族停止互杀；
2. 建一个共同的 Grand Council（大议事会），50 个 sachem（推举的酋长）席位固定分给各民族，
   Onondaga「管火」（主持、保管记录）；
3. 大事靠 consensus（一致同意）商量到所有人都能接受，不靠多数压少数。

⚠️ 误区纠正（也是 §9 historiography 的一部分）：大和平法是口传的、记在 wampum（贝壳珠串）里，
**建立年代学界有争议**（~1400s 等，无定论）——因为没有欧洲那种写字的史书。
还有一个最容易踩的坑：他们「没有国王、没有文字、没有警察」≠「没有政府」。
这套有分工、有流程、有制衡的设计，恰恰推翻了「原住民等于原始野人」的偏见。`,
          en: `The builder's whole pass is about this. The Haudenosaunee Confederacy (called
Iroquois in English) was originally five peoples who spoke related languages yet killed
one another for generations — Mohawk, Oneida, Onondaga, Cayuga, Seneca (the Tuscarora
joined in 1722, making six).

It is governed by a body of law called the Great Law of Peace. Node 3 tells how it came
to be, Node 5 how intricate it is, Node 6 its hardest step. I compress it into three points:
1. the five peoples stop killing one another;
2. they build a common Grand Council, with 50 sachem (raised-up chief) seats fixed among
   the peoples, and the Onondaga keep the fire (host and hold the records);
3. great matters go by consensus, talked through until all can accept, not the majority
   overpowering the minority.

Warning, a correction (also part of the Section 9 historiography): the Great Law is oral,
recorded in wampum (shell-bead strings), and its **founding date is debated by scholars**
(the 1400s and others, no settled answer), because there were no written histories of the
European kind. And the easiest trap: their having "no king, no writing, no police" does not
equal "no government." This design with a division of labor, a procedure, and checks is
exactly what overturns the prejudice that "Native equals primitive savage."`,
        },
      },
    },

    {
      id: 'matrilineal-clan-mothers',
      termCn: '母系社会与氏族母亲',
      termEn: 'Matrilineal Society & Clan Mothers',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.3', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'clan-mother',
        nodeIds: ['cm-n2', 'cm-n3', 'cm-n4'],
        xiaoweiNote: {
          cn: `氏族母亲那一遍整条线就是这个。我读完才搞懂 matrilineal（母系制）到底什么意思：
血脉从母亲这边算，孩子属于母亲的氏族；男人结婚是搬进妻子的长屋；长屋、田地、粮仓都在女人手里
（第 2 节）。

最颠覆我认知的是 Clan Mother（氏族母亲）的权力（第 3、4 节）：
坐进 Grand Council 的男性 sachem，是她和族里的女长辈**选立**的；
做得不好，她按大和平法的程序（警告、再警告，第三次「拔掉鹿角」收回名号）把人**罢免**。
她自己不坐会议桌，却决定谁能坐。

⚠️ AP 高频误区：❌「原住民社会里女人没有地位」。
✅ 至少在 Haudenosaunee 这样的母系社会，女性掌实权——选立并能罢免酋长。
为什么常被讲错？因为写记录的多是后来的欧洲男人，他们老家女人不能拥地、不能选官，
看不懂、也不觉得值得写。「记录里看不见」≠「真的没有」——这是 DBQ 最爱考的「史料沉默」陷阱。`,
          en: `The clan mother's whole pass is about this. Only after reading did I understand
what matrilineal really means: the bloodline is counted through the mother, a child belongs
to the mother's clan, a man marries into his wife's longhouse, and the longhouse, fields,
and granary are all in women's hands (Node 2).

What overturned my idea most was the Clan Mother's power (Nodes 3 and 4): the male sachem
who sits in the Grand Council is **raised up** by her and the senior women of the clan, and
if he fails, she **removes** him by the Great Law's procedure (warn, warn again, and on the
third time "remove the antlers" and take back the name). She does not sit at the council
table herself, yet she decides who can.

Warning, a high-frequency AP misconception: ❌ "women had no standing in Native societies."
✅ At least in a matrilineal society like the Haudenosaunee, women held real power — they
raised up and could remove chiefs. Why is it told wrong? Because most record-keepers were
later European men, whose homelands barred women from owning land or choosing officials, so
they could not see it and did not think it worth writing. "Invisible in the records" does
not equal "truly absent" — the "silence of the sources" trap DBQs love most.`,
        },
      },
    },

    {
      id: 'cahokia-mississippian',
      termCn: '密西西比文化 / Cahokia 土丘城',
      termEn: 'Mississippian Culture / Cahokia',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.2', 'AP CED — environment shaped society'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n7'],
        xiaoweiNote: {
          cn: `建造者第 7 节往西南一拉，提到了 Cahokia——这个我必须单独记，因为它最能打破
「原住民只会住小部落」的印象。

考点关键句：Cahokia 是密西西比文化的大型土丘城，约 **1050-1350 年**兴盛，
在今天 **St. Louis 附近**，鼎盛期人口约 **1-2 万人**，是当时北美最大的聚落。
他们堆起几十座巨大的土丘，最大一座（核心 Monks Mound）的底座比埃及一些金字塔还宽。

我自己记的对照锚：林地人盖长屋，Cahokia 人建土丘城——同一片大陆，完全不同的活法
（正好对上 AP CED 的「environment shaped society / 环境塑造社会」）。

⚠️ 两个坑别踩：
1. Cahokia 后来衰落了，原因学界还在争（可能含环境压力），不是被谁征服。
2. Cahokia 是**北美**的，跟 pre-columbian 那个 Topic 的 Tenochtitlán（阿兹特克）不是一回事，别混。`,
          en: `In the builder's Node 7 he pulls southwest and mentions Cahokia — I have to note
this one separately, because it best breaks the impression that "Native people only lived in
small bands."

Key exam sentence: Cahokia was a large mound city of the Mississippian culture, flourishing
roughly **1050-1350**, **near today's St. Louis**, with a peak population of about **ten to
twenty thousand**, the largest settlement in North America of its time. They raised dozens of
huge earthen mounds; the largest (the central Monks Mound) had a base wider than some Egyptian
pyramids.

My contrast anchor: woodland people build longhouses, Cahokia people built a city of mounds —
the same continent, entirely different ways of living (exactly AP CED's "environment shaped
society").

Warning, two traps:
1. Cahokia later declined, and scholars still debate why (possibly including environmental
   pressure); it was not conquered by someone.
2. Cahokia is in **North America** and is not the same as Tenochtitlan (the Aztec) of the
   pre-columbian topic — don't mix them.`,
        },
      },
    },

    {
      id: 'pacific-nw-plains-no-horses',
      termCn: '太平洋西北（potlatch）与大平原（pre-1492 无马）',
      termEn: 'Pacific Northwest (Potlatch) & Plains (No Horses pre-1492)',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.2', 'AP CED — environment shaped society'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n7'],
        xiaoweiNote: {
          cn: `还是建造者第 7 节，他往西北和大平原都扫了一眼。这两个区域我合成一张卡，
因为它们各带一个 AP 必考点。

**太平洋西北**：靠每年回游的鲑鱼就能富足，富到要办一种叫 **potlatch（夸富宴）**的大宴——
比谁送出去的礼物多，靠「散财」来证明地位。我的记忆锚：别处比谁攒得多，这儿比谁散得多。

**大平原**：⚠️ 这是全 topic 最高频的纠错点——
你想象中那种「骑着马在大平原上追野牛的印第安人」，**pre-1492 还不存在**。
马是欧洲人后来带来的。在那之前，平原上的人是**步行**打猎的。

考点关键句：「骑马追野牛」是**接触之后**才形成的文化，把它当成「本来的样子」是**时间错置**。
AP 特别爱用这个考「continuity / change（连续与变化）」——接触前 vs 接触后。`,
          en: `Still the builder's Node 7, where he sweeps over the northwest and the plains. I
combine these two regions into one card because each carries an AP must-know point.

**Pacific Northwest**: wealthy on the salmon that returned each year, wealthy enough to hold
a great feast called a **potlatch**, competing over who could give the most away, proving rank
by giving wealth out. My anchor: elsewhere they compete over who hoards most; here, over who
gives most.

**Great Plains**: warning, this is the whole topic's highest-frequency correction — the "Indian
on horseback chasing buffalo across the plains" you imagine **did not yet exist before 1492**.
Horses were brought later, by Europeans. Before that, the plains people hunted **on foot**.

Key exam sentence: the "horseback buffalo" culture formed **after contact**, and treating it as
"the way things originally were" is a **time displacement**. AP especially loves using this for
"continuity / change" — before contact vs after contact.`,
        },
      },
    },

    {
      id: 'the-great-dying',
      termCn: '大死亡（旧世界疾病）',
      termEn: 'The Great Dying (Old World Disease)',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'contact-survivor',
        nodeIds: ['cs-n2', 'cs-n5', 'cs-n9'],
        xiaoweiNote: {
          cn: `幸存者那一遍最戳人的就是这个。第 2 节讲病为什么那么狠，第 5 节讲它怎么传，
第 9 节把镜头拉到整片大陆。

考点关键句：1492 年起，旧世界（欧、亚、非）带来的传染病（**天花、麻疹**），
原住民**毫无免疫力**，在许多地区造成估计高达 **~90%**（十之八九）的人口崩塌。
这是人类史上最大规模的人口灾难之一。

我把两个最容易踩的坑记牢：
1. ⚠️ **为什么这么狠**：不是因为原住民「弱、脏、不如人」（第 2 节明确反这个偏见）。
   是因为这片大陆隔着大洋、上万年没碰过这些病，每个人都是全新无防备的身体。
2. ⚠️ **~90% 是估算**，不是确定数字（没有文字普查，靠考古和人口模型推算，学者估算差距很大）。
   所以要用「估计高达 ~90%」「许多地区」这种限定语。

还有一个第 5 节的关键机制（DBQ 常考）：病顺着原住民**原有的贸易/往来路线**传播，
**跑在欧洲人本身前头**——很多村子在见到第一个外来人之前就被掏空了。`,
          en: `This is what hit hardest in the survivor's pass. Node 2 tells why the sickness
was so merciless, Node 5 how it spread, Node 9 pulls the lens to the whole continent.

Key exam sentence: from 1492, infectious diseases brought from the Old World (Europe, Asia,
Africa) — **smallpox and measles** — met Native people with **no immunity** and caused a
population collapse estimated as high as **~90%** in many regions. It was one of the greatest
demographic catastrophes in human history.

I keep the two easiest traps firmly:
1. Warning, **why so merciless**: not because Native people were "weak, dirty, or lesser"
   (Node 2 explicitly rejects this prejudice). It was because the continent lay across an
   ocean and had gone tens of thousands of years without meeting these diseases, so every
   body was wholly new and unguarded.
2. Warning, **~90% is an estimate**, not a fixed number (no written census; reckoned from
   archaeology and population models, with wide disagreement among scholars). So use limiting
   phrases like "estimated as high as ~90%" and "many regions."

And a key mechanism from Node 5 (often on DBQs): the disease spread along Native people's
**existing trade and travel routes** and **ran ahead of the Europeans themselves** — many
villages were hollowed out before they ever saw a single outsider.`,
        },
      },
    },

    {
      id: 'empty-land-myth',
      termCn: '「空地神话」（被清空，不是天生空）',
      termEn: 'The Empty Land Myth (Emptied, Not Empty)',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'contact-survivor',
        nodeIds: ['cs-n6', 'cs-n10'],
        xiaoweiNote: {
          cn: `这是幸存者那一遍的核心，也是整个 topic 的「钥匙」。第 6 节讲同一片土地被算成两种相反的东西，
第 10 节是最精彩的 synthesis。

考点关键句：殖民者大批走进内陆时，看见的是被疾病掏空的村庄、长满草的田、爬回耕地的森林。
他们没见过之前的样子，于是把「被掏空」误读为「天生就空」——「这是一片空旷的、等待被发现的新大陆」。
这个故事被写进课本，讲了几百年。

整个 topic 的钥匙就一句：它不是**空的**（empty），它是**被清空的**（emptied）。差的就是那一个字。

⚠️ 第 10 节教我一个 DBQ 高分思路（别走极端）：
- 一种说法：「空地」是一个**方便的谎**——一片「本来就空」的地，拿走不算抢；用一个字抹掉上千万人。
- 另一种说法：别全算成**预谋阴谋**。大死亡当时无人能懂（病毒、免疫力几百年后才弄明白），
  首先是一场谁也挡不住的生物灾难。但**「怎么讲它」是后人的选择**。
高分写法：分清「挡不住的灾难」和「灾难之后人选择怎么讲它」这两层——这就是 AP 要的 complexity。

典型 DBQ：评估「欧洲人到来时，北美是一片空旷的荒野」这一说法的有效性。`,
          en: `This is the heart of the survivor's pass and the "key" to the whole topic. Node 6
shows the same land counted as two opposite things; Node 10 is the finest synthesis.

Key exam sentence: when the colonists walked into the interior in numbers, they saw villages
hollowed out by disease, fields gone to grass, forest creeping back over planted ground. They
had not seen what it was before, so they misread "hollowed out" as "empty by nature" — "this is
an open new continent waiting to be discovered." That story was written into textbooks and told
for centuries.

The key to the whole topic is one line: it was not **empty**, it was **emptied**. The difference
is that one word.

Warning, Node 10 taught me a high-scoring DBQ move (don't swing to an extreme):
- One view: "empty land" is a **convenient lie** — a land "always empty" can be taken without it
  counting as theft; one word erases tens of millions of people.
- The other view: do not reckon all of it as a planned **conspiracy**. The great dying could not
  be understood at the time (viruses and immunity were worked out only centuries later); it was
  first of all a biological catastrophe no one could stop. But **how to tell it was a later
  people's choice**.
High-scoring move: separate "a catastrophe no one could stop" from "how people chose to tell it
afterward" — that's the complexity AP wants.

Typical DBQ: assess the validity of the claim that "when the Europeans arrived, North America was
an open wilderness."`,
        },
      },
    },

    {
      id: 'iroquois-influence-debate',
      termCn: 'Iroquois 影响美国宪法的论争（标 DEBATED）',
      termEn: 'The Iroquois Influence Debate (Marked DEBATED)',
      standardRef: ['APUSH Period 1', 'cross-topic: constitutional-convention-1787', 'AP — historiography'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n9'],
        xiaoweiNote: {
          cn: `建造者第 9 节专门讲这件「吵到今天的事」。我一开始差点写成「美国宪法是抄易洛魁邦联的」——
老师说，**绝对不能这么写**，这会丢分。这是一个**真实存在、但仍有争议的学术辩题**，要呈现为辩论，不夸大。

我把两边背成一张对照表（这正是 §9 historiography 的训练）：
- **支持方**：富兰克林（Benjamin Franklin）等建国者确曾与 Haudenosaunee 邦联打交道、了解其结构；
  **1988 年美国国会**通过决议正式承认 Haudenosaunee 对美国宪法的贡献。
- **质疑方**：美国宪法的核心思想主要来自**欧洲自身的传统**（如 Montesquieu 的分权理论、英国普通法、
  古典共和），把宪法大半归功于易洛魁邦联**证据不够硬**，有过度浪漫化之嫌。
  （Montesquieu 你跑过 constitutional-convention 那个 Topic 会认得。）

考点关键句（也是这一遍最想让我记住的）：**不靠这场辩论，也能确定一件事**——
欧洲人来之前，北美就已经有人在认真解决「多民族如何联合共治」的难题，并做出了行得通的制度。
一件事了不起，**不需要靠「它影响了谁」来证明**。`,
          en: `The builder's Node 9 is specifically about this "matter people still argue over." At
first I almost wrote "the US Constitution copied the Iroquois Confederacy" — teacher said **you
absolutely cannot write that**; it loses points. This is a **genuine but still-contested scholarly
debate**, to be presented as a debate, not overstated.

I memorize the two sides as a table (exactly the Section 9 historiography training):
- **Supporters**: founders like Benjamin Franklin did deal with the Haudenosaunee Confederacy and
  studied its structure; **in 1988 the US Congress** passed a resolution formally acknowledging the
  Haudenosaunee contribution to the US Constitution.
- **Skeptics**: the Constitution's core ideas came mainly from **Europe's own traditions**
  (Montesquieu's separation of powers, English common law, classical republicanism), and crediting
  the Iroquois with most of it **rests on evidence that is not firm**, with a whiff of over-
  romanticizing. (You'll recognize Montesquieu from the constitutional-convention topic.)

Key exam sentence (what this pass most wants me to keep): **one thing is certain without leaning on
this debate** — before the Europeans came, people in North America were already wrestling in earnest
with how several peoples can join into one shared government, and had worked out a system that
functioned. A thing being remarkable **does not need "it influenced someone" to prove it**.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `早期殖民者把内陆描述成「荒野」「无主之地」「废弃的村落」——这些**是**一手史料。
可它们记录的，往往是疾病已经把村庄掏空之后的景象。

请用至少两条具体证据，评估「欧洲人到来时，北美是一片空旷的荒野」这个说法到底站不站得住。`,
      en: `Early colonists described the interior as "wilderness," "unowned land," "abandoned
villages" — and these **are** primary sources. Yet what they recorded was often the scene after
disease had already hollowed the villages out.

Using at least two specific pieces of evidence, assess whether the claim "when the Europeans
arrived, North America was an open wilderness" actually holds.`,
      hintCn: `提示：这题考的是 AP 反复练的「assess the validity（评估有效性）」。
- 反驳「空地」的证据：接触前住着数百个民族、上千万人；Cahokia 鼎盛 1-2 万人；
  大死亡造成许多地区估计高达 ~90% 的崩塌，「空」是被清空的结果。
- 关键史料读法：那些「荒野」记录是真的，但它们是「大死亡先行、空地随后被叙述」的**证词**，
  不是「这里本来人就少」的证据——读一手史料，还要读它**没看见**什么。
高分写法：分清「被清空」和「天生空」，再点出这个误读对殖民者「太方便」（本来就空 = 拿走不算抢）。`,
      hintEn: `Hint: this tests AP's repeatedly practiced "assess the validity."
- Evidence against "empty land": before contact there were hundreds of peoples, tens of millions
  of people; Cahokia peaked at ten to twenty thousand; the great dying caused an estimated collapse
  as high as ~90% in many regions, so "empty" is the result of being emptied.
- Key source move: those "wilderness" records are real, but they are **testimony** to "the great
  dying first, the empty land narrated after," not evidence that "few people lived here to begin
  with" — reading a primary source means also reading what it **failed to see**.
High-scoring move: separate "emptied" from "empty by nature," then note how convenient that misread
was for the colonists (always empty = taking it does not count as theft).`,
      conceptsActivated: ['the-great-dying', 'empty-land-myth'],
    },
    {
      id: 'q2',
      cn: `Haudenosaunee 邦联没有国王、没有文字、没有警察，却用大和平法把五个仇敌民族
联合治理了几百年；在这个母系社会里，氏族母亲选立并能罢免酋长。

如果你是 AP 老师，要出一道题，逼学生看清「成熟的治理不一定要靠集中的权力和文字」，
你会怎么提问？写出你的题目，并说明这道题想让学生看见什么。`,
      en: `The Haudenosaunee Confederacy had no king, no writing, no police, yet used the Great Law of
Peace to govern five enemy peoples together for centuries; in this matrilineal society, Clan Mothers
raised up and could remove chiefs.

If you were an AP teacher writing a question to make students see that "mature governance need not
rest on centralized power and writing," how would you phrase it? Write your question and explain what
it is meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常逼学生**对照**，而不是简单判断。
你可以让学生比较两种「成熟的复杂治理」：一种靠集中、层级、成文（narrative §8 提到的同时代大帝国就是这一型），
另一种靠分权、协商、口传 + 母系选立（Haudenosaunee）。
关键陷阱：为什么欧洲人当年看不懂 Clan Mother 的权力、看不懂 wampum？
因为他们拿「有没有国王、有没有文字」这一把尺子去量所有社会——这正是要让学生警惕的偏见。
你的题目可以问：「没有国王和文字 = 没有政府」这个等式错在哪？用 Haudenosaunee 的具体机制反驳它。`,
      hintEn: `Hint: a good DBQ forces a **comparison**, not a simple verdict.
You can have students compare two kinds of "mature complex governance": one resting on centralization,
hierarchy, and writing (the contemporaneous large empire mentioned in narrative Section 8 is this type),
the other on shared power, negotiation, oral law plus matrilineal selection (the Haudenosaunee).
Key trap: why could the Europeans not understand the Clan Mother's power or wampum? Because they
measured all societies with one stick — "is there a king, is there writing" — exactly the prejudice
to make students wary of.
Your question could ask: where does the equation "no king and no writing = no government" go wrong?
Refute it with a specific Haudenosaunee mechanism.`,
      conceptsActivated: ['haudenosaunee-great-law-of-peace', 'matrilineal-clan-mothers'],
    },
    {
      id: 'q3',
      cn: `接触期的幸存者既是大死亡的受害者（眼看十人没了近九），又是不断做选择、反抗、适应的人
（拼村、结盟、利用外来器物、外交周旋几百年）。

「野蛮人挡了文明的路、被淘汰是必然」和「可怜的纯粹受害者、除了被毁什么都没做」——
这两个故事看起来对立，却错在同一个地方。错在哪？把一群人**只**写成「受害者」，会不会也是一种不尊重？`,
      en: `The contact survivor was both a victim of the great dying (watching nearly nine of every ten
go) and someone who kept choosing, resisting, adapting (piecing villages together, allying, using
outsiders' goods, maneuvering through diplomacy for centuries).

"Savages stood in the way of civilization and were bound to be swept aside" and "pitiful pure victims
who did nothing but be destroyed" — the two stories look opposite, yet are wrong in the same place.
Where? And could writing a people as **only** "victims" itself be a kind of disrespect?`,
      hintCn: `提示：先抓住两个故事的共同错处——它们都把原住民写成「**没有能动性（agency）、不会自己做主**」的人。
当代民族史学（ethnohistory）强调把原住民还原为历史的**主动参与者**：他们谈判、反抗、适应。
具体证据可以举：残破的村子拼成新村、重新结盟组更大的邦联自保、学会用金属刀锅甚至枪反为己用、
Haudenosaunee 邦联在殖民时代仍是东部一支不可忽视的政治力量。
高分思路：说明「受害」与「有力量」可以**同时存在**——承认大死亡的惨烈，不等于把人写成只会等死。
进阶（联系你自己）：你身边有没有被「只当成弱者/受害者」对待、其实一直在自己做主的人或群体？`,
      hintEn: `Hint: first catch the shared error of the two stories — both write Native people as having
**no agency, unable to decide for themselves**. Modern ethnohistory stresses restoring Native people as
**active participants** in history: they negotiated, resisted, adapted.
Specific evidence: broken villages pieced into new ones, new alliances forming larger confederacies for
defense, learning to turn metal knives and pots and even guns to their own ends, the Haudenosaunee
Confederacy remaining a political force in the East through the colonial era.
High-scoring move: show that "victimhood" and "strength" can be **present at once** — acknowledging the
horror of the great dying does not mean writing people as only waiting to die.
Going deeper (connect to yourself): is there a person or group near you treated as "only weak / a victim"
who has in fact been deciding for themselves all along?`,
      conceptsActivated: ['the-great-dying', 'empty-land-myth'],
    },
  ],
};

export default notebook;
