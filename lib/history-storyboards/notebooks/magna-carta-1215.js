// ─── 同伴笔记本架构 v1 · Magna Carta 1215 ───────────────────────────
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
//   - storyboard 提供情感锚点（King John / Stephen Langton / Tom 三条线）
//   - notebook 提供考点闭环（Magna Carta 条款 / 议会起源 / 现代影响 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-1.6
//   - California HSS 7.6.1, 7.6.2, 7.6.3, 7.6.4
//   - 覆盖率目标：从 B+（83%）→ ~95%
//
// schemaVersion: 1 · notebookVersion: magna-carta-1215-v1

export var notebook = {
  topicId: 'magna-carta-1215',
  topicNameCn: '大宪章',
  topicNameEn: 'Magna Carta',
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
    cn: `今天老师要我们学大宪章（1215 年）。她给了一张纸，上面写着这些名字：

约翰王（King John）、斯蒂芬·朗顿（Stephen Langton）

还有几个词：Magna Carta（大宪章）、feudalism（封建制度）、
habeas corpus（人身保护令）、rule of law（法治）、Parliament（议会）

我先记下来，等下读三个故事——约翰王、朗顿、以及一个13岁的农奴 Tom——
读完再回来对照这张单子，看我能不能解释这些词。

老师说了一句很有意思的话：
"1215 年签的那张羊皮纸，今天还在管你的生活——只是换了个名字。"
我把这句话写在笔记本第一页。`,
    en: `Today my teacher told us we're learning about Magna Carta (1215).
She gave us a sheet with these names:

King John, Stephen Langton

Plus some terms: Magna Carta, feudalism, habeas corpus,
rule of law, Parliament.

Let me write these down. After I read the three stories
(King John, Stephen Langton, and Tom — a 13-year-old serf),
I'll come back and check whether I can explain each one.

Teacher said something interesting:
"That parchment signed in 1215 still runs your life today — it just goes by different names."
I wrote that on the first page of my notebook.`,
    keyTerms: [
      { cn: '大宪章', en: 'Magna Carta' },
      { cn: '封建制度', en: 'feudalism' },
      { cn: '人身保护令', en: 'habeas corpus' },
      { cn: '法治', en: 'rule of law' },
      { cn: '议会', en: 'Parliament' },
      { cn: '封建效忠', en: 'feudal allegiance' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '约翰王',
        nameEn: 'King John',
        ipa: '/kɪŋ dʒɒn/',
        roleCn: '英格兰国王·大宪章签署者，外号"无地王"（Lackland）',
        roleEn: 'King of England, signer of Magna Carta, nicknamed "Lackland"',
        mustKnow: true,
        audioKey: 'king-john',
      },
      {
        nameCn: '斯蒂芬·朗顿',
        nameEn: 'Stephen Langton',
        ipa: '/ˈstiːvən ˈlæŋtən/',
        roleCn: '坎特伯雷大主教·大宪章文本起草人，教会与王权的调解者',
        roleEn: 'Archbishop of Canterbury, drafter of Magna Carta text, mediator between Church and Crown',
        mustKnow: true,
        audioKey: 'stephen-langton',
      },
      {
        nameCn: '大宪章',
        nameEn: 'Magna Carta',
        ipa: '/ˈmæɡnə ˈkɑːrtə/',
        roleCn: '1215 年签订的英格兰宪章，限制王权的里程碑文件',
        roleEn: '1215 English charter, landmark document limiting royal power',
        mustKnow: true,
        audioKey: 'magna-carta',
      },
      {
        nameCn: '兰尼米德',
        nameEn: 'Runnymede',
        ipa: '/ˈrʌnɪmiːd/',
        roleCn: '泰晤士河畔草地·大宪章签署地点',
        roleEn: 'meadow on the Thames, site where Magna Carta was signed',
        mustKnow: true,
        audioKey: 'runnymede',
      },
      {
        nameCn: '人身保护令',
        nameEn: 'habeas corpus',
        ipa: '/ˈheɪbiəs ˈkɔːrpəs/',
        roleCn: '拉丁文"你应当拥有人身"，不得未经审判拘押的法律原则',
        roleEn: 'Latin for "you shall have the body," legal principle against detention without trial',
        mustKnow: true,
        audioKey: 'habeas-corpus',
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    // ── Card 1 ─ King John & the Road to Magna Carta ──────────────
    {
      id: 'king-john-runnymede',
      termCn: '约翰王 / 大宪章签署',
      termEn: 'King John / Signing of Magna Carta',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.1', 'CA HSS 7.6.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'king-john-perpetrator-actor',
        nodeIds: ['john-N1', 'john-N5', 'john-N8', 'john-N12'],
        xiaoweiNote: {
          cn: `这条线就是围绕约翰王（King John，外号 Lackland 无地王）转的。
读完之后我梳理了一条失败时间线——

1204 年：失去法国诺曼底（对法战争惨败）→ 税收压力暴增。
1208 年：和罗马教皇 Innocent III 争坎特伯雷大主教任命权，
   教皇宣布把整个英格兰逐出教会（interdict），教堂全关门。
1214 年：布汶战役（Battle of Bouvines）再败于法国，
   贵族彻底失去信心。
1215 年 6 月 15 日：贵族在兰尼米德（Runnymede）逼约翰王签字。

考点关键句：约翰王不是自愿签的，他签完字就写信给教皇请求废除——
这说明封建贵族需要武力和教会支持两张牌，才能让国王兑现承诺。`,
          en: `This arc revolves around King John — nicknamed "Lackland" because
he lost so much territory. After reading, I mapped out a timeline of failure:

1204: Lost Normandy (catastrophic defeat against France) → tax pressure exploded.
1208: Dispute with Pope Innocent III over Canterbury appointment;
   Pope placed all of England under interdict — every church locked its doors.
1214: Battle of Bouvines — another defeat against France; barons lost all confidence.
June 15, 1215: Barons cornered John at Runnymede and forced him to sign.

Key exam sentence: John didn't sign willingly — he immediately wrote to the Pope
asking for the charter to be annulled. This tells us that feudal barons needed
both military force and Church backing to make a king keep his word.`,
        },
      },
    },

    // ── Card 2 ─ Feudalism ─────────────────────────────────────────
    {
      id: 'feudalism',
      termCn: '封建制度',
      termEn: 'Feudalism',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'king-john-perpetrator-actor',
        nodeIds: ['john-N2', 'john-N4'],
        xiaoweiNote: {
          cn: `封建制度（feudalism）是理解大宪章"为什么会发生"的前提。

金字塔结构：国王 → 贵族（barons/lords）→ 骑士（knights）→ 农民/农奴（peasants/villeins）。
每一层都是"我给你土地，你给我军队和忠诚"——这叫封建效忠（feudal allegiance）。

大宪章的 context：贵族为什么有资格逼国王？
因为他们是封建体系里的第二层——国王靠他们的军队打仗。
约翰王的税收把这套"互惠"体系单边撕毁了，所以贵族反了。

考点提醒：AP 选择题经常考"谁真正从大宪章受益"——
答案是 barons（贵族），不是普通农民，也不是女性或农奴。
这是后来 Magna Carta 被"重新解读"才扩大到所有人的。`,
          en: `Feudalism is the prerequisite for understanding why Magna Carta happened.

Pyramid structure: King → Barons/Lords → Knights → Peasants/Villeins.
Each layer: "I give you land; you give me armies and loyalty" — this is feudal allegiance.

Magna Carta context: Why did barons have the standing to confront the king?
Because they were the second tier — the king's armies depended on them.
John's tax demands tore the "mutual obligation" contract unilaterally, so the barons revolted.

Exam note: AP multiple choice often asks "who actually benefited from Magna Carta" —
the answer is the barons, not ordinary peasants, not women, not serfs.
The extension to all people came from later reinterpretation.`,
        },
      },
    },

    // ── Card 3 ─ Stephen Langton & Church vs Crown ────────────────
    {
      id: 'langton-church-crown',
      termCn: '斯蒂芬·朗顿 / 教权与王权',
      termEn: 'Stephen Langton / Church vs. Crown',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'langton-lonely-mediator',
        nodeIds: ['langton-N1', 'langton-N5', 'langton-N9'],
        xiaoweiNote: {
          cn: `朗顿（Stephen Langton）是大宪章里最容易被考试忽略、
但又最关键的那个人——他是写字的人，不是签字的人。

他的双重身份让他变成了调解人：
教皇 Innocent III 任命他当坎特伯雷大主教
（Archbishop of Canterbury，英格兰教会一把手），
但约翰王拒绝接受，搞出了 1208 年的教廷制裁。
朗顿最终进了英格兰，成为贵族和国王之间的文字桥梁。

重点：他负责把贵族的愤怒翻译成法律语言——
是他把散乱的要求写成了 63 条有逻辑的条款（clauses）。

考点关键句：Magna Carta 不是约翰王的善意之举，
也不是贵族的武力独奏——是教会、贵族、国王三方博弈的产物。`,
          en: `Langton (Stephen Langton) is the figure most easily overlooked in exams,
yet most crucial — he was the one who wrote the document, not the one who signed it.

His dual identity made him the mediator:
Pope Innocent III appointed him Archbishop of Canterbury
(head of the English Church), but John refused to accept him,
triggering the 1208 interdict. Langton eventually made it into England
and became the textual bridge between the barons and the king.

Key point: he translated baronial rage into legal language —
he turned scattered grievances into 63 logically organized clauses.

Key exam sentence: Magna Carta was not John's act of goodwill,
nor the barons' military solo — it was the product of a three-way contest
among Church, barons, and Crown.`,
        },
      },
    },

    // ── Card 4 ─ Magna Carta Clauses 39 & 40 ─────────────────────
    {
      id: 'magna-carta-clauses-39-40',
      termCn: '大宪章第 39、40 条 / 法治',
      termEn: 'Magna Carta Clauses 39 & 40 / Rule of Law',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'king-john-perpetrator-actor', nodeId: 'john-N10', context: '约翰王 deliverGoal 提到 habeas corpus 概念雏形' },
          { lens: 'langton-lonely-mediator', nodeId: 'langton-N9', context: '朗顿执笔写下第 39 条' },
        ],
      },
      standaloneText: {
        cn: `大宪章 63 条条款中，最重要的两条是第 39 条和第 40 条。

第 39 条（Clause 39）原文：
"No free man shall be seized, imprisoned, dispossessed, outlawed, exiled,
or in any way ruined, nor shall we proceed against or prosecute him,
except by the lawful judgment of his equals or by the law of the land."

白话：**未经合法审判（lawful judgment），国王不能随便抓人、关人、抢财产。**
这是"人身保护令"（habeas corpus）的法律祖先。

第 40 条（Clause 40）原文：
"To no one will we sell, to no one will we deny or delay, right or justice."

白话：**正义不能被出售、拖延或拒绝——权贵交钱就能买到有利判决的时代，结束了。**

为什么这两条是"法治"的核心？
因为在 1215 年之前，"国王说了算"（king's will）就是法律。
第 39、40 条首次用白纸黑字写明：**国王本人也必须受法律约束**（rule of law）——
没有人，包括国王，能凌驾于法律之上（no man is above the law）。

现代影响：美国宪法第五修正案（"无正当程序不得剥夺……自由或财产"）
和第十四修正案的"due process clause"，直接继承了第 39 条的逻辑。`,
        en: `Of Magna Carta's 63 clauses, the two most important are Clauses 39 and 40.

Clause 39 (original text):
"No free man shall be seized, imprisoned, dispossessed, outlawed, exiled,
or in any way ruined, nor shall we proceed against or prosecute him,
except by the lawful judgment of his equals or by the law of the land."

Plain English: the king cannot arrest, jail, or seize the property of any free man
without a lawful judgment. This is the legal ancestor of habeas corpus.

Clause 40 (original text):
"To no one will we sell, to no one will we deny or delay, right or justice."

Plain English: justice cannot be sold, delayed, or denied — the era when
the powerful could buy favorable verdicts was over.

Why are these two clauses the core of "rule of law"?
Before 1215, "the king's will" was the law. Clauses 39 and 40 first put in writing:
the king himself must be bound by law (rule of law) — no one, including the king,
is above the law.

Modern impact: The Fifth Amendment to the US Constitution ("no person shall be deprived
of…liberty or property without due process of law") and the Fourteenth Amendment's
"due process clause" directly inherit the logic of Clause 39.`,
      },
      xiaoweiNote: {
        cn: `老师说第 39 条是 AP 和州考最高频考点——几乎每年都考。
我的记忆口诀：

"39 = 不能随便关人（due process before jail）"
"40 = 不能买卖正义（justice is not for sale）"

加一句总结：这两条 = rule of law 的出生证明。`,
        en: `Teacher said Clause 39 is the single highest-frequency AP and state exam point
— tested almost every year. My mnemonic:

"39 = can't just lock you up (due process before jail)"
"40 = can't sell justice (justice is not for sale)"

One-line summary: these two clauses = the birth certificate of rule of law.`,
      },
    },

    // ── Card 5 ─ Tom the Villein: Feudal Bottom Tier ──────────────
    {
      id: 'tom-villein-feudal-bottom',
      termCn: 'Tom（农奴）/ 封建底层视角',
      termEn: 'Tom (villein) / Feudal Bottom Tier',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.1'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'tom-receiving-end',
        nodeIds: ['tom-N1', 'tom-N4', 'tom-N8'],
        xiaoweiNote: {
          cn: `Tom 这条线是我最喜欢的，因为他是真正的"receiving end"——
大宪章发生了，但他的生活到底变了多少？

农奴（villein）的处境：
被绑定在领主的土地上，不能随意离开，要交劳役（labor service）和实物税。
他们在封建金字塔的最底层，大宪章第 39 条说的 "free man"，
在 1215 年的语境里根本不包括 villeins。

这是大宪章的 careful framing：
1215 年，它只保护 "free men"——也就是贵族和自由民（freemen），
大约占当时英格兰人口的 20% 左右。Tom 代表的那 80%，不在保护范围内。

但是 Tom 的价值在于提问：为什么这份"只保护贵族"的文件，
后来变成了"保护所有人"的人权象征？
一份文件的意义是谁说了算？`,
          en: `Tom's arc is my favorite, because he is the true "receiving end" —
Magna Carta happened, but how much did his life actually change?

The villein's situation:
Bound to the lord's land, could not leave freely, owed labor service and payment in kind.
At the absolute bottom of the feudal pyramid, the "free man" in Clause 39
did not include villeins in 1215.

This is Magna Carta's careful framing:
In 1215, it only protected "free men" — meaning barons and freemen,
roughly 20% of England's population. The 80% that Tom represents were outside its protection.

But Tom's value is the question he raises: why did a document that "only protected barons"
later become a human rights symbol protecting everyone?
Who gets to decide what a document means?`,
        },
      },
    },

    // ── Card 6 ─ Habeas Corpus ────────────────────────────────────
    {
      id: 'habeas-corpus',
      termCn: '人身保护令 / Habeas Corpus',
      termEn: 'Habeas Corpus',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'king-john-perpetrator-actor',
        nodeIds: ['john-N10'],
        xiaoweiNote: {
          cn: `habeas corpus——拉丁文，字面意思是"你应当拥有这具身体"。

1215 年大宪章第 39 条里埋下了这个原则的种子，
但"habeas corpus"作为正式法律工具，要到 1679 年英国《人身保护法》
（Habeas Corpus Act）才正式成文。

现代含义：如果你被关在监狱里，你有权要求政府出庭解释
"为什么关我"——政府必须拿出合法理由，否则必须放人。

美国连接：美国宪法 Article I Section 9 明确规定：
"除非在叛乱或入侵时，否则人身保护令权利不得暂停。"
1863 年内战期间林肯曾短暂暂停，
2001 年"9·11"后关塔那摩问题再次把 habeas corpus 推上头条。

考点关键句：habeas corpus = 个人对抗国家任意拘押的最基本法律武器，
追根溯源，就在 1215 年 Runnymede 那张羊皮纸上。`,
          en: `Habeas corpus — Latin for "you shall have the body."

Magna Carta Clause 39 (1215) planted this principle as a seed.
But "habeas corpus" as a formal legal tool wasn't codified until the
Habeas Corpus Act of 1679 in England.

Modern meaning: if you are being held in prison, you have the right
to demand the government appear in court and explain "why are you holding me" —
the government must provide a lawful reason, or release you.

US connection: The US Constitution, Article I Section 9, explicitly states:
"The Privilege of the Writ of Habeas Corpus shall not be suspended,
unless when in Cases of Rebellion or Invasion the public Safety may require it."
Lincoln briefly suspended it during the Civil War;
Guantanamo after 9/11 put habeas corpus back on the front page.

Key exam sentence: habeas corpus = the most fundamental legal weapon individuals
have against arbitrary government detention — traced to that parchment at
Runnymede in 1215.`,
        },
      },
    },

    // ── Card 7 ─ From Magna Carta to Parliament (standaloneText) ──
    {
      id: 'magna-carta-to-parliament',
      termCn: '从大宪章到议会制度',
      termEn: 'From Magna Carta to Parliament',
      standardRef: ['CA HSS 7.6.4', 'AP World KC-1.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'king-john-perpetrator-actor', nodeId: 'john-N12', context: '约翰王 deliverGoal 提及议会制度起源' },
        ],
      },
      standaloneText: {
        cn: `大宪章（1215）不是终点，它是一根引线。

它点燃的第一个大事件，是 50 年后的 1265 年：
西蒙·德·孟福尔（Simon de Montfort，莱斯特伯爵）召集了英格兰历史上
第一届真正意义上的"议会"（Parliament）——里面不只有贵族，
还有来自各地的骑士（knights）和城市代表（burgesses）。
这就是现代议会民主的起点。

为什么是大宪章引出了议会？逻辑链如下：

第一步：大宪章 (1215) 确立原则——"国王不能不经贵族同意就征税"。
第二步：历任国王需要钱 → 必须召集贵族开会讨论 → 会议逐渐固定化。
第三步：1265 年孟福尔把"开会"制度化，扩大参与范围 → 议会成形。
第四步：1295 年爱德华一世召集"模范议会"（Model Parliament），
   包括了贵族、教士、骑士、城市代表 → 议会的基本构成确立。

从大宪章到美国宪法，时间线：
1215 大宪章 → 1265 第一届英国议会 → 1689 英国权利法案（Bill of Rights）
→ 1776 美国独立宣言 → 1787 美国宪法 → 1791 美国权利法案（Bill of Rights）

考点关键句：大宪章不是民主——1215 年是贵族限制国王。
但它开创了"权力需要书面约束"的先例，这个先例 500 年后
生长成了现代民主体制。`,
        en: `Magna Carta (1215) was not the destination — it was the fuse.

The first major event it ignited came 50 years later, in 1265:
Simon de Montfort (Earl of Leicester) convened the first truly representative
Parliament in English history — it included not just barons but also knights
from the shires and burgesses from the towns.
This is the starting point of modern parliamentary democracy.

Why did Magna Carta lead to Parliament? The logical chain:

Step 1: Magna Carta (1215) establishes the principle: the king cannot tax
   without baronial consent.
Step 2: Kings constantly need money → must summon barons to discuss it
   → meetings become regular.
Step 3: In 1265, de Montfort formalizes "the meeting" and expands participation → Parliament takes shape.
Step 4: In 1295, Edward I convenes the "Model Parliament," including barons,
   clergy, knights, and town representatives → Parliament's basic composition is set.

Timeline from Magna Carta to the US Constitution:
1215 Magna Carta → 1265 First English Parliament → 1689 English Bill of Rights
→ 1776 American Declaration of Independence → 1787 US Constitution
→ 1791 US Bill of Rights

Key exam sentence: Magna Carta was not democracy — in 1215 it was barons
limiting the king. But it established the precedent that "power needs written
constraints," and that precedent grew, over 500 years, into modern democratic government.`,
      },
      xiaoweiNote: {
        cn: `CA HSS 7.6.4 专门考"议会起源"——孟福尔 1265 年这个节点一定要记。

我的记忆口诀：
大宪章（1215）= "不能随便收税"
孟福尔（1265）= "开会变制度"
模范议会（1295）= "议会定型了"

三个年份，背下来，题目就不会蒙。`,
        en: `CA HSS 7.6.4 specifically tests "origins of Parliament" — the 1265
de Montfort date is a must-memorize.

My mnemonic:
Magna Carta (1215) = "can't just tax people"
De Montfort (1265) = "the meeting becomes an institution"
Model Parliament (1295) = "Parliament's shape is set"

Three dates — memorize them, and the multiple choice won't trip you.`,
      },
    },

    // ── Card 8 ─ Modern Legacy of Magna Carta (standaloneText) ────
    {
      id: 'magna-carta-modern-legacy',
      termCn: '大宪章的现代影响',
      termEn: 'Modern Legacy of Magna Carta',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `一张 1215 年的羊皮纸，怎么管到了今天？

直接后代——美国《权利法案》（Bill of Rights, 1791）：
- 第四修正案：禁止无理搜查和逮捕 ← 大宪章第 39 条
- 第五修正案：无正当程序（due process）不得剥夺自由或财产 ← 大宪章第 39 条
- 第六修正案：快速公开审判权（speedy trial）← 大宪章第 40 条
- 第八修正案：禁止残酷和不寻常的惩罚 ← 大宪章整体精神

1948 年《世界人权宣言》（Universal Declaration of Human Rights）：
联合国起草时，英国代表明确指出第 9 条（禁止任意逮捕）的祖先是大宪章第 39 条。

"No man is above the law"的传承：
约翰王 (1215) → 英国《权利法案》(1689，国王不能凌驾议会)
→ 美国宪法第二条弹劾条款（总统也可以被弹劾）
→ 2016 年英国最高法院裁定脱欧公投需经议会授权——
   当天法院援引的先例，第一条就是 Magna Carta。

careful framing：
Magna Carta 在 13 世纪几乎被遗忘——
约翰王死后，它被修改了至少 3 次，范围大幅缩水。
真正把它"神话化"的，是 17 世纪英国律师 Edward Coke，
他在对抗詹姆斯一世时把 Magna Carta 搬出来作为武器。
也就是说，Magna Carta 的"重要性"，很大程度上是后人的建构。`,
        en: `How does a parchment from 1215 still govern us today?

Direct descendants — US Bill of Rights (1791):
- Fourth Amendment: protection against unreasonable searches and seizures ← Magna Carta Clause 39
- Fifth Amendment: no deprivation of liberty or property without due process ← Magna Carta Clause 39
- Sixth Amendment: right to a speedy and public trial ← Magna Carta Clause 40
- Eighth Amendment: no cruel and unusual punishment ← the spirit of Magna Carta overall

1948 Universal Declaration of Human Rights:
When the UN was drafting it, the British delegate explicitly noted that
Article 9 (prohibition of arbitrary arrest) descended from Magna Carta Clause 39.

The lineage of "no man is above the law":
King John (1215) → English Bill of Rights (1689, king cannot override Parliament)
→ US Constitution Article II impeachment clause (even the president can be removed)
→ 2016 UK Supreme Court ruling that Brexit required Parliament's authorization —
   the first precedent the court cited that day was Magna Carta.

Careful framing:
Magna Carta was nearly forgotten in the 13th century —
after John's death it was revised at least 3 times, shrinking considerably.
The person who truly "mythologized" it was 17th-century English lawyer Edward Coke,
who pulled it out as a weapon against King James I.
In other words, Magna Carta's "importance" is largely a later construction.`,
      },
      xiaoweiNote: {
        cn: `这张卡很适合 AP essay 的 conclusion 段——
大宪章不是一次性事件，它是一个"被不断重新发明"的传统。

考点提醒：如果题目问"Magna Carta 和美国宪法的关系"，
要提第五修正案（due process）和 habeas corpus，这两个最直接。

如果题目问"Magna Carta 的局限性"，
要提"1215 年只保护自由民（free men），不保护农奴"——
这是 careful framing，DBQ 加分项。`,
        en: `This card is perfect for the AP essay conclusion paragraph —
Magna Carta isn't a one-time event; it's a tradition that keeps getting "reinvented."

Exam note: if a question asks about "the relationship between Magna Carta and
the US Constitution," cite the Fifth Amendment (due process) and habeas corpus —
those are the most direct connections.

If a question asks about "the limitations of Magna Carta,"
cite "in 1215 it only protected free men, not serfs" — that's the careful framing,
the DBQ bonus point.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `大宪章在 1215 年只保护贵族（barons 和 free men），
根本没提农奴和女性——但今天它被全世界引用为"人权"的基石。

一份文件的"意义"，到底是由起草者在签字那天决定的，
还是由后来几百年的解读者决定的？
你能想到其他类似的例子吗？`,
      en: `Magna Carta in 1215 only protected barons and free men —
it said nothing about serfs or women. Yet today it is cited worldwide
as a cornerstone of "human rights."

Does the "meaning" of a document get decided by the people who drafted it on the day
they signed, or by the interpreters who came hundreds of years later?
Can you think of other similar examples?`,
      hintCn: `提示：可以想想两个方向——

(1) "起草者意图决定意义"：如果我们只按 1215 年的原意解读，
Magna Carta 就是贵族讨价还价的工具，不是人权文件。
那 habeas corpus 保护普通人这件事，是不是对原文的"歪曲"？

(2) "解读者建构意义"：17 世纪律师 Edward Coke 把 Magna Carta 当反抗国王的武器，
18 世纪美国革命者把它当殖民地权利的根据——
这两次"误用"反而让它的影响力越来越大。

进阶思考：美国《独立宣言》写的 "all men are created equal"，
1776 年起草者 Jefferson 本人拥有奴隶。
后来的废奴运动、女权运动、民权运动都引用这句话——
这算是"误读"，还是"更忠于原文的精神"？`,
      hintEn: `Hint: think in two directions —

(1) "The drafter's intent determines meaning": if we read Magna Carta only by its
1215 intent, it was a bargaining tool for barons, not a human rights document.
Does that make habeas corpus protecting ordinary people a "distortion" of the original?

(2) "Interpreters construct meaning": 17th-century lawyer Edward Coke used
Magna Carta as a weapon against the king; 18th-century American revolutionaries
used it as a basis for colonial rights — both "misuses" actually expanded its influence.

Going deeper: The Declaration of Independence (1776) says "all men are created equal,"
written by Jefferson, who personally enslaved people. Later abolitionists,
suffragists, and civil rights activists all cited this phrase —
is that "misreading," or "being more faithful to the spirit of the original"?`,
      conceptsActivated: ['magna-carta-clauses-39-40', 'tom-villein-feudal-bottom', 'magna-carta-modern-legacy'],
    },

    {
      id: 'q2',
      cn: `约翰王在兰尼米德（Runnymede）签字后，立刻秘密写信给教皇 Innocent III，
请求废除大宪章——教皇很快宣布它"无效、不公正、有损王权"，
整个协议在签字后不到三个月就名存实亡。

这说明什么？"法律"的效力到底来自哪里——
纸上的文字、签署者的诚意、还是别的什么？`,
      en: `After signing at Runnymede, King John immediately wrote in secret to
Pope Innocent III, asking him to annul Magna Carta — the Pope quickly declared it
"null, void, unjust, and injurious to royal dignity," and the agreement
was essentially dead within three months of signing.

What does this tell us? Where does the force of "law" actually come from —
the words on the page, the good faith of the signers, or something else?`,
      hintCn: `提示：这道题没有标准答案，有三个经典角度——

(1) "法律靠权力执行"：没有人能逼约翰王守约，贵族自己也没有军队强制执行。
直到第一次男爵战争（First Barons' War，1215-1217）打完，
约翰王死了，年幼的亨利三世登基，摄政王才重新颁布大宪章。
也就是说，真正让大宪章生效的，是约翰王的死亡，不是他的签字。

(2) "法律靠社会共识"：如果足够多的人——贵族、教士、平民——
相信某个规则应该被遵守，国王也很难单独违反。
大宪章后来真正的力量，来自"这是古老的法律传统"这一共识，
不是来自任何人的执行机构。

(3) "法律靠重复实践"：大宪章 1215-1300 年间被重新颁布了至少 32 次，
每一次重颁都是对它有效性的一次"续签"——
就好像一份合同被人反复提起，说明大家都觉得它有用。

进阶思考：今天国际法（比如《联合国宪章》）是谁来执行的？
如果没有执行机构，国际法还算是"法律"吗？`,
      hintEn: `Hint: this question has no standard answer — there are three classic angles:

(1) "Law is enforced by power": no one could compel John to keep his word,
and the barons had no army strong enough to enforce it. It wasn't until
the First Barons' War (1215-1217) ended and John died — with young Henry III
ascending the throne — that the regent reissued Magna Carta.
In other words, what truly made Magna Carta take effect was John's death,
not his signature.

(2) "Law rests on social consensus": if enough people — barons, clergy, commoners —
believe a rule should be obeyed, even a king finds it hard to violate it alone.
Magna Carta's real power later came from the shared belief that
"this is ancient legal tradition," not from any enforcement mechanism.

(3) "Law is built through repeated practice": Magna Carta was reissued at least
32 times between 1215 and 1300. Each reissue was a "renewal" of its validity —
like a contract that keeps getting cited, proving everyone considers it useful.

Going deeper: who enforces international law today (like the UN Charter)?
If there's no enforcement body, is international law still "law"?`,
      conceptsActivated: ['king-john-runnymede', 'magna-carta-clauses-39-40', 'magna-carta-modern-legacy'],
    },

    {
      id: 'q3',
      cn: `如果你是 1215 年的 Tom——一个 13 岁的农奴（villein），
绑在领主的土地上，不能自由离开——你刚刚听说国王在兰尼米德签了一张大宪章。

Magna Carta 对你的实际生活改变了什么（如果有的话）？
八百年后，Tom 的后代生活在今天的英国或美国——
大宪章对那个后代的意义，和 1215 年的 Tom 完全不同吗？`,
      en: `Imagine you are Tom — a 13-year-old villein (serf) in 1215,
bound to your lord's land, not free to leave — and you have just heard
that the king signed some document called Magna Carta at Runnymede.

What did Magna Carta actually change about your daily life (if anything)?
Eight hundred years later, Tom's descendants are living in modern England or America —
is the meaning of Magna Carta for that descendant completely different from
what it meant for Tom in 1215?`,
      hintCn: `提示：1215 年对 Tom 来说，答案几乎是"什么都没变"——
"free man"不包括 villeins，他还是得交劳役、不能离开土地。
直到 1348 年黑死病（Black Death）杀死了 30-50% 欧洲人口，
劳动力稀缺了，农奴才获得了谈判筹码，开始逐步获得自由。

但是如果 Tom 的后代今天生活在英国，他们受益于：
- 英国 1215 年之后 800 年的逐步改革（选举权扩展到无财产男性 1867，女性 1918）
- habeas corpus Act 1679
- 英国宪法的整个普通法（common law）传统

如果在美国，他们受益于 1791 美国权利法案、1865 第十三修正案（废奴）、
1920 第十九修正案（女性选举权）。

进阶思考：大宪章给 1215 年的 Tom 什么都没给，
但给了他的后代几百年后的保护——
这算是"历史正义"（historical justice），还是"迟来的安慰"？
迟来的权利还算是权利吗？`,
      hintEn: `Hint: for Tom in 1215, the answer is almost "nothing changed" —
"free man" did not include villeins; he still owed labor service and couldn't leave the land.
It wasn't until the 1348 Black Death killed 30-50% of Europe's population
that labor became scarce and serfs finally had bargaining power, gradually winning freedom.

But if Tom's descendants are in England today, they benefit from:
- 800 years of incremental English reform after 1215 (voting rights extended to
  propertyless men in 1867, women in 1918)
- Habeas Corpus Act 1679
- The entire common law tradition of the English constitution

If in America, they benefit from the 1791 Bill of Rights, the 1865 Thirteenth Amendment
(abolition of slavery), the 1920 Nineteenth Amendment (women's right to vote).

Going deeper: Magna Carta gave nothing to Tom in 1215, but gave his descendants
protection hundreds of years later — is that "historical justice," or "belated consolation"?
If rights arrive very late, do they still count as rights?`,
      conceptsActivated: ['tom-villein-feudal-bottom', 'feudalism', 'magna-carta-modern-legacy'],
    },
  ],
};

export default notebook;
