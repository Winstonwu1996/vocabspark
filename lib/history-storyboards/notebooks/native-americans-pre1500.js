// ─── 同伴笔记本架构 v1 · Native Nations of North America before 1500 ─────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演「学习同伴」
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// schemaVersion: 1 · notebookVersion: native-americans-pre1500-v1

export var notebook = {
  topicId: 'native-americans-pre1500',
  topicNameCn: '接触前的北美原住民',
  topicNameEn: 'Native Nations of North America before 1500',
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
    cn: `今天老师说我们要学「欧洲人到来之前的北美原住民」。
这是加州五年级历史的第一单元，AP 美国史也从这儿讲起。

她先纠了我一个错。我一直以为「原住民」是一个民族，过着差不多的日子。
老师说：错。北美在接触前住着**数百个民族**、说着数十种互不相通的语言，活法天差地别。

她给了一张纸，上面写着这些词：

Haudenosaunee（易洛魁邦联）、Great Law of Peace（大和平法）、
sachem（推举的酋长）、Clan Mother（氏族母亲）、matrilineal（母系制）、
Cahokia（土丘大城）、potlatch（夸富宴）、the great dying（大死亡）、
empty land myth（空地神话）。

我先记下来，等下读三个故事——
① 一个建造者：把五个世代仇杀的民族织成一个会议；
② 一个氏族母亲：不坐会议桌，却决定谁能坐；
③ 一个接触期的幸存者：看着自己的世界被叫作「空地」。

读完再回来对照这张单子，看我能不能解释每一个词。

老师说了一句我抄在笔记本第一页：「欧洲人来之前，这片大陆不是一片空地。
它住满了人。后来看起来空，是因为它被清空了。
空和被清空，差的那个字，是这一课的钥匙。」`,
    en: `Today my teacher said we're learning about the Native nations of North America
before the Europeans arrived. It's the first unit of California fifth-grade history,
and AP US History starts here too.

She corrected one mistake of mine right away. I had always thought "Native people" were
one people who lived more or less the same way. She said: wrong. Before contact, North
America held **hundreds of peoples** speaking dozens of mutually unintelligible languages,
living in wildly different ways.

She gave us a sheet with these terms:

Haudenosaunee (the Iroquois Confederacy), Great Law of Peace,
sachem (a raised-up chief), Clan Mother, matrilineal,
Cahokia (a city of mounds), potlatch, the great dying,
the empty land myth.

Let me write these down. After I read the three stories —
① a builder, who wove five enemy peoples into a single council;
② a clan mother, who never sits at the council table yet decides who can;
③ a contact survivor, who watched his world be called "empty land" —
I'll come back and check whether I can explain each term.

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
        roleCn: '推举出来的酋长，不是世袭的王。他坐进 Grand Council 议事，维系大和平法。本故事的建造者视角是一个代表性角色，不是史料里某个有名有姓的人。',
        roleEn: 'A raised-up chief, not a hereditary king. He sits in the Grand Council and upholds the Great Law of Peace. The builder lens of this story is a representative figure, not a single named person from the historical record.',
        mustKnow: true,
        audioKey: 'haudenosaunee-sachem',
      },
      {
        nameCn: 'Haudenosaunee 氏族母亲（Clan Mother）',
        nameEn: 'Haudenosaunee Clan Mother',
        ipa: '/klæn ˈmʌðər/',
        roleCn: '氏族中最年长有威望的女性。在这个母系社会里，她选立并能罢免 sachem，掌田地与血脉。本故事的这条视角是一个代表性角色。',
        roleEn: 'The eldest, most respected woman of a clan. In this matrilineal society she raises up and can remove sachems, and holds the fields and bloodline. This lens of the story is a representative figure.',
        mustKnow: true,
        audioKey: 'haudenosaunee-clan-mother',
      },
      {
        nameCn: '接触期的幸存者',
        nameEn: 'Contact Survivor',
        ipa: '/ˈkɒntækt sərˈvaɪvər/',
        roleCn: '大死亡的见证者，活在欧洲人初到的那几代。这是一个合成代表人物——把许多真实经历合到一人身上，不是史料里某个有名有姓的人。',
        roleEn: 'A witness to the great dying, living through the first generations of European arrival. Explicitly a composite representative figure — gathering many real experiences into one, not a single named person from the records.',
        mustKnow: true,
        audioKey: 'contact-survivor',
      },
      {
        nameCn: 'the Peacemaker / Hiawatha',
        nameEn: 'the Peacemaker / Hiawatha',
        ipa: '/ˈpiːsˌmeɪkər/ /ˌhaɪəˈwɑːθə/',
        roleCn: '口传中大和平法的两位创立者——先知 the Peacemaker 与助手 Hiawatha。这属于口传传统，不是有文字史料确证的事件。',
        roleEn: 'The two founders of the Great Law in oral tradition — the prophet the Peacemaker and his helper Hiawatha. Part of oral tradition, not an event confirmed by written records.',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '本杰明·富兰克林',
        nameEn: 'Benjamin Franklin',
        ipa: '/ˈbɛndʒəmɪn ˈfræŋklɪn/',
        roleCn: '美国建国者，曾与 Haudenosaunee 邦联打交道。在「Iroquois 是否影响美国宪法」这一论争里被支持方引用——这是学术辩题，不是定论。',
        roleEn: 'An American founder who dealt with the Haudenosaunee Confederacy. Cited by supporters in the scholarly debate over whether the Iroquois influenced the US Constitution — a debate, not a settled answer.',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'native-diversity-not-one-people',
      termCn: '北美的多样性（不是一个民族）',
      termEn: 'North American Diversity (Not One People)',
      defCn: '1492 年以前，北美住着数百个民族、说着数十种互不相通的语言，活法天差地别——从定居农耕的大城到崖壁居所到沿海渔猎社会都有。把他们说成「一个原始民族」是后来才发明的简化故事。',
      defEn: 'Before 1492, North America was home to hundreds of distinct peoples speaking dozens of mutually unintelligible languages and living in wildly different ways — from settled farming cities to cliff dwellings to coastal fishing societies. Calling them "one primitive people" is a simplified story invented later.',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.2', 'AP CED — diversity'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n7'],
        xiaoweiNote: {
          cn: `我在建造者那条故事线里读到了这个。他把镜头从自己那片林子拉远，
诚实地说了一句：「原住民」不是一个民族。他的邦联，只是这片大陆上几百个民族里的一支。

我把区域差异背成一张对照表（AP 反复强调多样性和「环境塑造社会」）：
① 东北林地（Haudenosaunee 等）：定居农耕，住长屋，种「三姐妹」（玉米、豆子、南瓜）。
② 密西西比河谷：Cahokia 土丘大城（另一张卡）。
③ 西南沙漠：祖先普韦布洛人（Ancestral Puebloans）把房子嵌进悬崖崖壁。
④ 太平洋西北：靠每年回游的鲑鱼致富，办 potlatch（夸富宴，另一张卡）。
⑤ 大平原：⚠️ pre-1492 还没有马，是步行打猎（这条单列一张卡，超高频纠错）。

**考点关键句**：数百个民族、数十种语言、几种完全不同的活法。
把这么多人说成「一个原始的民族」，是后来才发明出来的故事。AP 爱让你举不同区域的例子。`,
          en: `I read this in the builder's story line. He pulls the lens back from his own woods
and honestly says: "Native people" are not one people. His confederacy is only one among
hundreds of peoples on this continent.

I memorize the regional differences as a comparison table (AP keeps stressing diversity and
"environment shaped society"):
① Northeast woodlands (Haudenosaunee and others): settled farming, longhouses, the Three
   Sisters (corn, beans, squash).
② Mississippi valley: Cahokia, a city of mounds (its own card).
③ Southwest desert: the Ancestral Puebloans set their houses into cliff faces.
④ Pacific Northwest: grew wealthy on returning salmon, held the potlatch (its own card).
⑤ Great Plains: warning — no horses before 1492, hunting on foot (its own card, a
   very-high-frequency correction).

**Key exam sentence**: hundreds of peoples, dozens of languages, several entirely different
ways of living. Calling all of them "one primitive people" is a story invented later.
AP loves asking you to give examples from different regions.`,
        },
      },
    },

    {
      id: 'haudenosaunee-great-law-of-peace',
      termCn: 'Haudenosaunee 邦联与大和平法',
      termEn: 'Haudenosaunee Confederacy & the Great Law of Peace',
      defCn: 'Haudenosaunee（英文常作 Iroquois，中文旧译「易洛魁」）是东北林地五个民族组成的邦联，靠一部叫「大和平法」的口传规矩共同治理——停止内部仇杀，建立共同议事会，靠一致同意（不是多数压少数）做决定。',
      defEn: 'The Haudenosaunee (often called the Iroquois Confederacy) is a union of five peoples in the northeast woodlands, governed by an oral body of law called the Great Law of Peace — stopping internal killing, building a shared council, and making decisions by consensus rather than majority rule.',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.3', 'AP CED — complex governance'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n3', 'hl-n5', 'hl-n6'],
        xiaoweiNote: {
          cn: `建造者那条故事线整条都是讲这个的。Haudenosaunee 邦联，原本是五个说同源语言、
却世代互杀的民族——Mohawk、Oneida、Onondaga、Cayuga、Seneca
（1722 年 Tuscarora 加入，成为第六个）。

这五个民族靠一部叫「大和平法」的规矩治理。我把它压成三条：
① 五个民族停止互杀；
② 建一个共同的 Grand Council（大议事会）。50 个 sachem（推举的酋长）席位固定分给各民族，
   Onondaga 民族「管火」——也就是主持会议、保管记录；
③ 大事靠 consensus（一致同意）。商量到所有人都能接受，不靠多数压少数。

⚠️ 两个坑别踩：
1. 大和平法是**口传**的、记在 wampum（贝壳珠串）里，**建立年代学界有争议**（~1400s 等，无定论）——
   因为没有欧洲那种写字的史书，所以不要写一个确定的年份。
2. 他们「没有国王、没有文字、没有警察」不等于「没有政府」。
   **这套有分工、有流程、有制衡的设计，恰恰推翻了「原住民等于原始野人」的偏见**。`,
          en: `The builder's whole story line is about this. The Haudenosaunee Confederacy was
originally five peoples who spoke related languages yet killed one another for generations —
Mohawk, Oneida, Onondaga, Cayuga, Seneca (the Tuscarora joined in 1722, making six).

These five peoples are governed by a body of law called the Great Law of Peace. I compress
it into three points:
① The five peoples stop killing one another.
② They build a common Grand Council. Fifty sachem (raised-up chief) seats are fixed among
   the peoples. The Onondaga "keep the fire" — they host the sessions and hold the records.
③ Great matters go by consensus. Talked through until all can accept, not the majority
   overpowering the minority.

⚠️ Two traps to avoid:
1. The Great Law is oral, recorded in wampum (shell-bead strings), and its **founding date
   is debated by scholars** (around the 1400s and other estimates, no settled answer) —
   because there were no written histories of the European kind. Don't write a definite year.
2. Their having "no king, no writing, no police" does not equal "no government."
   **This design with a division of labor, a procedure, and checks is exactly what overturns
   the prejudice that "Native equals primitive savage."**`,
        },
      },
    },

    {
      id: 'matrilineal-clan-mothers',
      termCn: '母系社会与氏族母亲',
      termEn: 'Matrilineal Society & Clan Mothers',
      defCn: 'matrilineal（母系制）意思是：血脉从母亲这边算，孩子属于母亲的氏族，男人婚后搬进妻子的长屋，田地和粮仓都在女人手里。氏族母亲是族里最年长有威望的女性，她选立并能罢免 sachem（酋长）。',
      defEn: 'Matrilineal means: the bloodline is counted through the mother\'s side, children belong to the mother\'s clan, a man moves into his wife\'s longhouse after marriage, and the fields and granary are in women\'s hands. The Clan Mother is the eldest, most respected woman of the clan — she raises up and can remove the sachem (chief).',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.3', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'clan-mother',
        nodeIds: ['cm-n2', 'cm-n3', 'cm-n4'],
        xiaoweiNote: {
          cn: `氏族母亲那条故事线整条都是讲这个的。我读完才真正搞懂 matrilineal（母系制）是什么意思：
血脉从母亲这边算，孩子属于母亲的氏族；男人结婚是搬进妻子的长屋；
长屋、田地、粮仓都在女人手里。

最颠覆我认知的是 Clan Mother（氏族母亲）的权力：
坐进 Grand Council 的男性 sachem，是她和族里的女长辈**选立**的；
做得不好，她按大和平法的程序**罢免**他——
警告一次，再警告一次，第三次「拔掉鹿角」，收回名号。
她自己不坐会议桌，却决定谁能坐。

⚠️ AP 高频误区：❌「原住民社会里女人没有地位。」
✅ 至少在 Haudenosaunee 这样的母系社会，女性掌实权——选立并能罢免酋长。

为什么常被讲错？因为写记录的多是后来的欧洲男人，他们老家女人不能拥地、不能选官，
看不懂、也不觉得值得写。**「记录里看不见」不等于「真的没有」**——
这是 DBQ 最爱考的「史料沉默」陷阱。`,
          en: `The clan mother's whole story line is about this. Only after reading did I truly
understand what matrilineal means: the bloodline is counted through the mother, a child
belongs to the mother's clan, a man moves into his wife's longhouse after marriage, and the
longhouse, fields, and granary are all in women's hands.

What overturned my assumptions most was the Clan Mother's power:
the male sachem who sits in the Grand Council is **raised up** by her and the senior women
of the clan; if he fails, she **removes** him by the Great Law's procedure —
warn once, warn again, and on the third time "remove the antlers" and take back the name.
She does not sit at the council table herself, yet she decides who can.

⚠️ A high-frequency AP misconception: ❌ "Women had no standing in Native societies."
✅ At least in a matrilineal society like the Haudenosaunee, women held real power —
they raised up and could remove chiefs.

Why is it told wrong? Because most record-keepers were later European men, whose homelands
barred women from owning land or choosing officials, so they could not see it and did not
think it worth writing. **"Invisible in the records" does not equal "truly absent"** —
the "silence of the sources" trap that DBQs love most.`,
        },
      },
    },

    {
      id: 'cahokia-mississippian',
      termCn: '密西西比文化 / Cahokia 土丘城',
      termEn: 'Mississippian Culture / Cahokia',
      defCn: 'Cahokia 是密西西比文化的大型土丘城，约 1050-1350 年在今天 St. Louis 附近兴盛，鼎盛期人口约 1-2 万，是当时北美最大的聚落。他们堆起几十座巨大土丘，最大一座底座比埃及一些金字塔还宽。',
      defEn: 'Cahokia was a large mound city of the Mississippian culture, flourishing roughly 1050–1350 near today\'s St. Louis, with a peak population of about ten to twenty thousand — the largest settlement in North America at the time. They raised dozens of huge earthen mounds; the largest had a base wider than some Egyptian pyramids.',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.2', 'AP CED — environment shaped society'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n7'],
        xiaoweiNote: {
          cn: `建造者那条故事线里有一段往西南一拉，提到了 Cahokia——
这个我必须单独记，因为它最能打破「原住民只会住小部落」的印象。

**考点关键句**：Cahokia 是密西西比文化的大型土丘城，约 **1050-1350 年**兴盛，
在今天 **St. Louis 附近**，鼎盛期人口约 **1-2 万人**，是当时北美最大的聚落。
他们堆起几十座巨大的土丘，最大一座（核心 Monks Mound）的底座比埃及一些金字塔还宽。

我的对照锚：林地人盖长屋，Cahokia 人建土丘城——同一片大陆，完全不同的活法
（正好对上 AP 的「环境塑造社会」这个考点）。

⚠️ 两个坑别踩：
① Cahokia 后来衰落了，原因学界还在争（可能含环境压力），不是被谁征服的。
② Cahokia 是**北美**的，跟 Tenochtitlán（阿兹特克）不是一回事——那是中美洲，别混。`,
          en: `In the builder's story line, there's a moment where he sweeps southwest and
mentions Cahokia — I have to note this one separately, because it best breaks the impression
that "Native people only lived in small bands."

**Key exam sentence**: Cahokia was a large mound city of the Mississippian culture,
flourishing roughly **1050–1350**, **near today's St. Louis**, with a peak population of
about **ten to twenty thousand** — the largest settlement in North America of its time.
They raised dozens of huge earthen mounds; the largest (the central Monks Mound) had a base
wider than some Egyptian pyramids.

My contrast anchor: woodland people build longhouses, Cahokia people built a city of mounds —
the same continent, entirely different ways of living (exactly AP's "environment shaped
society" concept).

⚠️ Two traps:
① Cahokia later declined, and scholars still debate why (possibly including environmental
   pressure). It was not conquered by someone.
② Cahokia is in **North America** — it is not the same as Tenochtitlan (the Aztec), which
   belongs to Mesoamerica. Don't mix them.`,
        },
      },
    },

    {
      id: 'pacific-nw-plains-no-horses',
      termCn: '太平洋西北（potlatch）与大平原（pre-1492 无马）',
      termEn: 'Pacific Northwest (Potlatch) & Plains (No Horses pre-1492)',
      defCn: 'potlatch（夸富宴）是太平洋西北民族的大型仪式，靠「散尽财物送给别人」来证明地位——比谁送出去的礼物多。大平原在 1492 年以前没有马（马是欧洲人后来带来的），所以平原人是步行打猎的。',
      defEn: 'The potlatch is a major ceremony of Pacific Northwest peoples in which status is proven by giving wealth away — competing over who can give the most. The Great Plains had no horses before 1492 (horses were brought by Europeans), so the plains peoples hunted on foot.',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1 / Topic 1.2', 'AP CED — environment shaped society'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n7'],
        xiaoweiNote: {
          cn: `建造者那条故事线里，他把目光扫向西北和大平原。我把这两个区域合成一张卡，
因为它们各带一个 AP 必考点。

**太平洋西北**：靠每年回游的鲑鱼就能富足，富到要办一种叫 **potlatch（夸富宴）**的大宴——
比谁送出去的礼物多，靠「散财」来证明地位。
我的记忆锚：别处比谁攒得多，这儿比谁散得多。

**大平原**：⚠️ 这是整门课最高频的纠错点——
你想象中那种「骑着马在大平原上追野牛的印第安人」，**pre-1492 还不存在**。
马是欧洲人后来带来的。在那之前，平原上的人是**步行**打猎的。

**考点关键句**：「骑马追野牛」是**接触之后**才形成的文化，把它当成「本来的样子」是时间错置。
AP 特别爱用这个考「接触前 vs 接触后的变化」。`,
          en: `In the builder's story line, he sweeps his gaze to the northwest and the plains.
I combine these two regions into one card because each carries an AP must-know point.

**Pacific Northwest**: wealthy on the salmon that returned each year — wealthy enough to hold
a great feast called a **potlatch**, competing over who could give the most away, proving rank
by giving wealth out. My memory anchor: elsewhere they compete over who hoards most; here,
over who gives most.

**Great Plains**: ⚠️ This is the whole topic's highest-frequency correction — the "Indian on
horseback chasing buffalo across the plains" you imagine **did not yet exist before 1492**.
Horses were brought later by Europeans. Before that, the plains peoples hunted **on foot**.

**Key exam sentence**: the "horseback buffalo" culture formed **after contact**. Treating it as
"the way things originally were" is a time displacement. AP especially loves using this for
"change before vs after contact."`,
        },
      },
    },

    {
      id: 'the-great-dying',
      termCn: '大死亡（旧世界疾病）',
      termEn: 'The Great Dying (Old World Disease)',
      defCn: '1492 年起，欧洲人带来了旧世界的传染病（天花、麻疹等）。北美原住民从未接触过这些病，毫无免疫力，在许多地区造成估计高达 ~90% 的人口崩塌。这是人类史上最大规模的人口灾难之一。',
      defEn: 'From 1492, Europeans brought Old World infectious diseases (smallpox, measles, and others). Native North Americans had never encountered these diseases and had no immunity; the result was a population collapse estimated as high as ~90% in many regions — one of the greatest demographic catastrophes in human history.',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'contact-survivor',
        nodeIds: ['cs-n2', 'cs-n5', 'cs-n9'],
        xiaoweiNote: {
          cn: `幸存者那条故事线最戳人的就是这个。
一节讲病为什么那么狠，一节讲它怎么传，最后一节把镜头拉到整片大陆。

**考点关键句**：1492 年起，旧世界（欧、亚、非）带来的传染病（**天花、麻疹**），
原住民**毫无免疫力**，在许多地区造成估计高达 **~90%**（十之八九）的人口崩塌。
这是人类史上最大规模的人口灾难之一。

⚠️ 两个坑别踩：
① **为什么这么狠**：不是因为原住民「弱、脏、不如人」。
   是因为这片大陆隔着大洋、上万年没碰过这些病，每个人都是全新无防备的身体。
② **~90% 是估算**，不是确定数字（没有文字普查，靠考古和人口模型推算，学者估算差距很大）。
   所以要用「估计高达 ~90%」「许多地区」这种限定语，不能说成确定的数。

还有一个关键机制（DBQ 常考）：**病顺着原住民原有的贸易往来路线传播，
跑在欧洲人本身前头**——很多村子在见到第一个外来人之前就被掏空了。`,
          en: `This is what hit hardest in the survivor's story line. One section tells why the
sickness was so merciless, another how it spread, and the final one pulls the lens to the
whole continent.

**Key exam sentence**: from 1492, infectious diseases from the Old World (Europe, Asia,
Africa) — **smallpox and measles** — met Native people with **no immunity** and caused a
population collapse estimated as high as **~90%** in many regions. It was one of the greatest
demographic catastrophes in human history.

⚠️ Two traps to avoid:
① **Why so merciless**: not because Native people were "weak, dirty, or lesser." It was
   because the continent lay across an ocean and had gone tens of thousands of years without
   meeting these diseases, so every body was wholly new and unguarded.
② **~90% is an estimate**, not a fixed number (no written census; reckoned from archaeology
   and population models, with wide disagreement among scholars). Use limiting phrases like
   "estimated as high as ~90%" and "many regions" — don't state it as certain.

And a key mechanism often on DBQs: **the disease spread along Native people's existing trade
and travel routes, running ahead of the Europeans themselves** — many villages were hollowed
out before they ever saw a single outsider.`,
        },
      },
    },

    {
      id: 'empty-land-myth',
      termCn: '「空地神话」（被清空，不是天生空）',
      termEn: 'The Empty Land Myth (Emptied, Not Empty)',
      defCn: '「空地神话」是说欧洲人到来时，北美是一片空旷无人的荒野。这其实是误读——殖民者看见的「空」，是大死亡把人口掏空之后的景象，不是这片土地本来的样子。它不是空的，它是被清空的。',
      defEn: 'The "empty land myth" is the idea that when Europeans arrived, North America was an open, uninhabited wilderness. This is a misreading — the "emptiness" colonists saw was the result of the great dying hollowing out the population, not the land\'s original state. It was not empty; it was emptied.',
      standardRef: ['CA HSS 5.1', 'APUSH Period 1', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'contact-survivor',
        nodeIds: ['cs-n6', 'cs-n10'],
        xiaoweiNote: {
          cn: `这是幸存者那条故事线的核心，也是整段历史的「钥匙」。
一节讲同一片土地被算成两种相反的东西，另一节是最精彩的综合分析。

**考点关键句**：殖民者大批走进内陆时，看见的是被疾病掏空的村庄、长满草的田、爬回耕地的森林。
他们没见过之前的样子，于是把「被掏空」误读为「天生就空」——
「这是一片空旷的、等待被发现的新大陆。」这个故事被写进课本，讲了几百年。

整段历史的钥匙就一句：它不是**空的**（empty），它是**被清空的**（emptied）。差的就是那一个字。

⚠️ DBQ 高分思路（别走极端）：
- 一种说法：「空地」是一个**方便的谎**——「本来就空」的地，拿走不算抢；
  用一个字抹掉了上千万人。
- 另一种说法：别全算成**预谋阴谋**。大死亡当时无人能懂（病毒、免疫力几百年后才弄明白），
  首先是一场谁也挡不住的生物灾难。但**「怎么讲它」是后人的选择**。

高分写法：分清「挡不住的灾难」和「灾难之后人选择怎么讲它」这两层——这就是 AP 要的复杂度。`,
          en: `This is the heart of the survivor's story line and the "key" to the whole topic.
One section shows the same land counted as two opposite things; the other is the best synthesis.

**Key exam sentence**: when colonists walked into the interior in numbers, they saw villages
hollowed out by disease, fields gone to grass, forest creeping back over planted ground. They
had not seen what it was before, so they misread "hollowed out" as "empty by nature" —
"this is an open new continent waiting to be discovered." That story was written into textbooks
and told for centuries.

The key to the whole topic is one line: it was not **empty**, it was **emptied**. The
difference is that one word.

⚠️ A high-scoring DBQ move (don't swing to an extreme):
- One view: "empty land" is a **convenient lie** — a land "always empty" can be taken without
  it counting as theft; one word erases tens of millions of people.
- The other view: do not reckon all of it as a planned **conspiracy**. The great dying could
  not be understood at the time (viruses and immunity were worked out only centuries later);
  it was first of all a biological catastrophe no one could stop. But **how to tell it was a
  later people's choice**.

High-scoring move: separate "a catastrophe no one could stop" from "how people chose to tell
it afterward" — that's the complexity AP wants.`,
        },
      },
    },

    {
      id: 'iroquois-influence-debate',
      termCn: 'Iroquois 影响美国宪法的论争（标 DEBATED）',
      termEn: 'The Iroquois Influence Debate (Marked DEBATED)',
      defCn: '有学者认为，美国宪法的分权设计受到了 Haudenosaunee 邦联的启发；也有学者认为，宪法主要来自欧洲自身的政治传统，这一影响说证据不足。这是一个**真实存在、但仍有争议的学术辩题**，考试要求呈现为辩论，不能一边倒。',
      defEn: 'Some scholars argue that the Haudenosaunee Confederacy\'s structure influenced the design of the US Constitution; others hold that the Constitution\'s ideas came mainly from European political traditions and that the influence claim lacks firm evidence. This is a **genuine but still-contested scholarly debate** — present it as a debate, not a settled fact.',
      standardRef: ['APUSH Period 1', 'cross-topic: constitutional-convention-1787', 'AP — historiography'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'haudenosaunee-leader',
        nodeIds: ['hl-n9'],
        xiaoweiNote: {
          cn: `建造者那条故事线有一节专门讲这件「吵到今天的事」。我一开始差点写成
「美国宪法是抄易洛魁邦联的」——老师说，**绝对不能这么写**，这会丢分。
这是一个**真实存在、但仍有争议的学术辩题**，要呈现为辩论，不夸大。

两边的理由（这正是历史学家争什么的训练）：
- **支持方**：富兰克林（Benjamin Franklin）等建国者确曾与 Haudenosaunee 打交道、了解其结构；
  **1988 年美国国会**通过决议正式承认 Haudenosaunee 对美国宪法的贡献。
- **质疑方**：美国宪法的核心思想主要来自**欧洲自身的传统**
  （Montesquieu 的分权理论、英国普通法、古典共和），
  把宪法大半归功于易洛魁邦联**证据不够硬**，有过度浪漫化之嫌。

**考点关键句**（也是这一节最想让我记住的）：
不靠这场辩论，也能确定一件事——欧洲人来之前，北美就已经有人在认真解决
「多民族如何联合共治」的难题，并做出了行得通的制度。
一件事了不起，**不需要靠「它影响了谁」来证明**。`,
          en: `One section of the builder's story line is specifically about this "matter people
still argue over today." At first I almost wrote "the US Constitution copied the Iroquois
Confederacy" — teacher said **you absolutely cannot write that**; it loses points. This is a
**genuine but still-contested scholarly debate** — present it as a debate, not overstated.

The two sides (exactly the training of understanding what historians argue about):
- **Supporters**: founders like Benjamin Franklin did deal with the Haudenosaunee Confederacy
  and studied its structure; **in 1988 the US Congress** passed a resolution formally
  acknowledging the Haudenosaunee contribution to the US Constitution.
- **Skeptics**: the Constitution's core ideas came mainly from **Europe's own traditions**
  (Montesquieu's separation of powers, English common law, classical republicanism), and
  crediting the Iroquois with most of it **rests on evidence that is not firm**, with a hint
  of over-romanticizing.

**Key exam sentence** (what this section most wants me to keep): one thing is certain without
leaning on this debate — before the Europeans came, people in North America were already
wrestling in earnest with how several peoples can join into one shared government, and had
worked out a system that functioned. A thing being remarkable **does not need "it influenced
someone" to prove it**.`,
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
      hintCn: `这题考的是 AP 反复练的「评估有效性」。

反驳「空地」的证据：
- 接触前住着数百个民族、上千万人；
- Cahokia 鼎盛期约 1-2 万人；
- 大死亡造成许多地区估计高达 ~90% 的人口崩塌——「空」是被清空的结果，不是本来的样子。

关键史料读法：那些「荒野」记录是真的，但它们是「大死亡先行、空地随后被叙述」的**证词**，
不是「这里本来人就少」的证据——读一手史料，还要读它**没看见**什么。

高分写法：分清「被清空」和「天生空」，再点出这个误读对殖民者「太方便」
（本来就空 = 拿走不算抢）。`,
      hintEn: `This tests AP's repeatedly practiced "assess the validity."

Evidence against "empty land":
- Before contact there were hundreds of peoples, tens of millions of people.
- Cahokia peaked at ten to twenty thousand.
- The great dying caused an estimated collapse as high as ~90% in many regions —
  so "empty" is the result of being emptied, not the original state.

Key source move: those "wilderness" records are real, but they are **testimony** to "the great
dying first, the empty land narrated after," not evidence that "few people lived here to begin
with." Reading a primary source means also reading what it **failed to see**.

High-scoring move: separate "emptied" from "empty by nature," then note how convenient that
misread was for the colonists (always empty = taking it does not count as theft).`,
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
      hintCn: `好的 DBQ 题通常逼学生**对照**，而不是简单判断。

你可以让学生比较两种「成熟的复杂治理」：
- 一种靠集中、层级、成文（比如同时代的大帝国——集中权力、文字记录、层级官僚）；
- 另一种靠分权、协商、口传加母系选立（Haudenosaunee）。

关键陷阱：为什么欧洲人当年看不懂 Clan Mother 的权力、看不懂 wampum？
因为他们拿「有没有国王、有没有文字」这把尺子去量所有社会——
这正是要让学生警惕的偏见。

你的题目可以问：「没有国王和文字 = 没有政府」这个等式错在哪？
用 Haudenosaunee 的具体机制来反驳它。`,
      hintEn: `A good DBQ forces a **comparison**, not a simple verdict.

You can have students compare two kinds of "mature complex governance":
- One resting on centralization, hierarchy, and writing (like a large empire of the same era —
  centralized power, written records, layered bureaucracy).
- The other on shared power, negotiation, oral law, and matrilineal selection (the Haudenosaunee).

Key trap: why could the Europeans not understand the Clan Mother's power or wampum?
Because they measured all societies with one stick — "is there a king, is there writing" —
exactly the prejudice to make students wary of.

Your question could ask: where does the equation "no king and no writing = no government" go
wrong? Refute it with a specific Haudenosaunee mechanism.`,
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
      hintCn: `先抓住两个故事的共同错处——它们都把原住民写成「**没有能动性（agency）、不会自己做主**」的人。
当代民族史学强调把原住民还原为历史的**主动参与者**：他们谈判、反抗、适应。

具体证据可以举：
- 残破的村子拼成新村；
- 重新结盟、组更大的邦联自保；
- 学会用金属刀具甚至枪反为己用；
- Haudenosaunee 邦联在殖民时代仍是东部一支不可忽视的政治力量。

高分思路：说明「受害」与「有力量」可以**同时存在**——
承认大死亡的惨烈，不等于把人写成只会等死。

进阶（联系你自己）：你身边有没有被「只当成弱者或受害者」对待、其实一直在自己做主的人或群体？`,
      hintEn: `First catch the shared error of the two stories — both write Native people as having
**no agency, unable to decide for themselves**. Modern ethnohistory stresses restoring Native
people as **active participants** in history: they negotiated, resisted, adapted.

Specific evidence:
- Broken villages pieced into new ones.
- New alliances forming larger confederacies for defense.
- Learning to turn metal knives and even guns to their own ends.
- The Haudenosaunee Confederacy remaining a political force in the East through the colonial era.

High-scoring move: show that "victimhood" and "strength" can be **present at once** —
acknowledging the horror of the great dying does not mean writing people as only waiting to die.

Going deeper (connect to yourself): is there a person or group near you treated as "only weak
or a victim" who has in fact been deciding for themselves all along?`,
      conceptsActivated: ['the-great-dying', 'empty-land-myth'],
    },
  ],
};

export default notebook;
