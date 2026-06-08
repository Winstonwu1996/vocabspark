// ─── 同伴笔记本架构 v1 · Magna Carta 1215 ───────────────────────────
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
    nameCn: '小 U',
    nameEn: 'Xiao U',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小 U 的预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师要我们学大宪章（1215 年）。她给了一张纸，上面写着这些名字：

约翰王（King John）、斯蒂芬·朗顿（Stephen Langton）

还有几个词：Magna Carta（大宪章）、feudalism（封建制度）、
habeas corpus（人身保护令）、rule of law（法治）、Parliament（议会）

我先记下来，等下读三个故事——约翰王、朗顿、以及一个 13 岁的农奴 Tom——
读完再回来对照这张单子，看我能不能解释这些词。

老师说了一句很有意思的话：
"1215 年签的那张羊皮纸，今天还在管你的生活——只是换了个名字。"
我把这句话写在笔记本第一页。`,
    en: `Today my teacher told us we're learning about Magna Carta (1215).
She gave us a sheet with these names:

King John, Stephen Langton

Plus some terms: Magna Carta, feudalism, habeas corpus,
rule of law, Parliament.

I wrote these down. After I read the three stories
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
        roleCn: '坎特伯雷大主教·大宪章文本起草人，教会与王权之间的调解者',
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

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── Card 1 ─ King John & the Road to Magna Carta ──────────────
    {
      id: 'king-john-runnymede',
      termCn: '约翰王 / 大宪章签署',
      termEn: 'King John / Signing of Magna Carta',
      defCn: '约翰王是 1199–1216 年在位的英格兰国王。他因为连败连税、搞垮了和贵族的关系，最终在 1215 年被贵族逼着在大宪章上盖章。',
      defEn: 'King John ruled England from 1199 to 1216. He lost wars, taxed the barons too hard, and was forced by them to seal Magna Carta in 1215.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.1', 'CA HSS 7.6.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'king-john',
        nodeIds: ['john-N1', 'john-N5', 'john-N8', 'john-N12'],
        xiaoweiNote: {
          cn: `约翰王那条故事线，就是一部失败日历——我来整理一下。

**1204 年**：输掉法国诺曼底（Normandy），丢了英国王室 138 年的法国根据地。税收压力立刻暴增。
**1208 年**：和罗马教皇 Innocent III 争坎特伯雷大主教的任命权。教皇宣布把整个英格兰逐出教会——这叫 interdict（禁令），意思是全英国的婚礼、葬礼、洗礼全都暂停，教堂锁门 6 年。
**1214 年**：布汶战役（Battle of Bouvines）再败于法国。贵族彻底不信任他了。
**1215 年 6 月 15 日**：贵族在兰尼米德（Runnymede）草地上逼约翰王盖章。

考点要记住这句话：**约翰王不是自愿签的。** 他盖完章马上秘密写信给教皇，请求废除大宪章。这说明：只靠武力和教会两张牌同时压住，才能让国王兑现承诺。`,
          en: `The King John story is basically a calendar of failures — let me lay it out.

**1204**: Lost Normandy (France) — the English royal family's French base for 138 years, gone. Tax pressure immediately exploded.
**1208**: Fought with Pope Innocent III over who got to appoint the Archbishop of Canterbury. The Pope declared an interdict — weddings, funerals, and baptisms were banned across England for 6 years, every church locked up.
**1214**: Battle of Bouvines — another defeat against France. The barons completely lost faith in him.
**June 15, 1215**: Barons cornered John at a meadow called Runnymede and forced him to seal the document.

The key exam sentence to remember: **John didn't sign willingly.** The moment it was sealed, he secretly wrote to the Pope asking for the charter to be cancelled. The lesson: it took both military pressure and Church backing at the same time to make a king keep his word.`,
        },
      },
    },

    // ── Card 2 ─ Feudalism ─────────────────────────────────────────
    {
      id: 'feudalism',
      termCn: '封建制度',
      termEn: 'Feudalism',
      defCn: '封建制度是中世纪欧洲的社会组织方式。上层给下层土地，下层回报军队和忠诚，层层叠叠形成金字塔。这是理解大宪章"为什么会发生"的前提知识。',
      defEn: 'Feudalism was the way medieval European society was organized. The upper tier gave land to those below; those below gave back military service and loyalty — a pyramid of mutual obligation.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'king-john',
        nodeIds: ['john-N2', 'john-N4'],
        xiaoweiNote: {
          cn: `要看懂大宪章，先得搞清楚封建制度（feudalism）的金字塔长什么样。

①国王（King）
②大贵族，叫 barons 或 lords
③骑士（knights）
④农民和农奴（peasants/villeins）

每一层的关系都是一样的逻辑："我给你土地，你给我军队和忠诚。" 这叫封建效忠（feudal allegiance）。

**贵族为什么敢逼国王？** 因为他们在金字塔第二层——国王打仗靠的就是他们的军队。约翰王一再加税，把这套"互惠"合同单方面撕掉了，贵族就反了。

考试常考这道题："谁真正从大宪章受益？" **答案是 barons（贵族）**，不是普通农民，不是女性，不是农奴。大宪章保护所有人，是几百年后被重新解读才发生的事。`,
          en: `To understand Magna Carta, you first need to picture the feudalism pyramid.

① King
② Barons / Lords
③ Knights
④ Peasants and villeins (bonded farmers)

Every layer worked the same way: "I give you land; you give me armies and loyalty." That's called feudal allegiance.

**Why did barons have the power to confront the king?** Because they were the second tier — the king's armies depended entirely on them. John's repeated tax demands tore up that "mutual obligation" contract on his own, so the barons revolted.

A very common exam question: "Who actually benefited from Magna Carta?" **The answer is the barons** — not ordinary farmers, not women, not serfs. The expansion to protect everyone came from later reinterpretation, centuries after 1215.`,
        },
      },
    },

    // ── Card 3 ─ Stephen Langton & Church vs Crown ────────────────
    {
      id: 'langton-church-crown',
      termCn: '斯蒂芬·朗顿 / 教权与王权',
      termEn: 'Stephen Langton / Church vs. Crown',
      defCn: '斯蒂芬·朗顿是 1207 年被教皇任命的坎特伯雷大主教（Canterbury，英格兰教会最高职位）。他是大宪章的真正起草人——写下 63 条条款、包括最重要的第 39 条的那个人。',
      defEn: 'Stephen Langton was appointed Archbishop of Canterbury — the top position in the English Church — by the Pope in 1207. He was the actual drafter of Magna Carta, the person who wrote out all 63 clauses, including the crucial Clause 39.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'langton',
        nodeIds: ['langton-N1', 'langton-N5', 'langton-N9'],
        xiaoweiNote: {
          cn: `朗顿是大宪章里最容易被考试漏掉、又最关键的人。记住这句话：**他是写字的人，不是签字的人。**

他的处境很特别。教皇 Innocent III 任命他当坎特伯雷大主教，但约翰王拒绝接受，搞出了 1208 年的禁令风波。后来朗顿终于进了英格兰，就变成了贵族和国王之间的桥梁。

他最重要的贡献：把贵族散乱的愤怒翻译成法律语言。

原来贵族的诉求只有 49 条，又粗糙又零散。朗顿花 5 天时间把它扩写成 63 条有逻辑的条款。**他个人坚持加入了第 39 条**——"任何自由人未经合法审判不得被逮捕"——这条原本不在贵族的草稿里。

**考点关键句：** 大宪章不是约翰王的善意之举，也不是贵族单靠武力逼出来的——它是教会、贵族、国王三方博弈的产物。`,
          en: `Langton is the person most often overlooked in exams, yet the most crucial. Remember this: **he was the one who wrote the document, not the one who signed it.**

His position was unusual. Pope Innocent III appointed him Archbishop of Canterbury, but King John refused to accept him — triggering the 1208 interdict crisis. When Langton finally made it into England, he became the bridge between the barons and the king.

His biggest contribution: he translated the barons' scattered rage into legal language.

The barons' original list had only 49 clauses — rough and disorganized. Langton spent 5 days expanding it into 63 logically written clauses. **He personally insisted on adding Clause 39** — "no free man shall be seized or imprisoned without lawful judgment" — which wasn't in the barons' draft at all.

**Key exam sentence:** Magna Carta wasn't an act of John's goodwill, and it wasn't purely the barons' military muscle — it was the product of a three-way contest among Church, barons, and Crown.`,
        },
      },
    },

    // ── Card 4 ─ Magna Carta Clauses 39 & 40 ─────────────────────
    {
      id: 'magna-carta-clauses-39-40',
      termCn: '大宪章第 39、40 条 / 法治',
      termEn: 'Magna Carta Clauses 39 & 40 / Rule of Law',
      defCn: '大宪章第 39 条规定：不经合法审判，国王不能随便抓人关人。第 40 条规定：正义不能被出售、拖延或拒绝。这两条加在一起，第一次用白纸黑字写明国王本人也必须受法律约束——这叫法治（rule of law）。',
      defEn: 'Clause 39 says the king cannot arrest or imprison anyone without a lawful trial. Clause 40 says justice cannot be sold, delayed, or denied. Together, these two clauses put in writing for the first time that even the king must obey the law — that is called rule of law.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'king-john', nodeId: 'john-N10', context: '约翰王那条线提到 habeas corpus 概念雏形' },
          { lens: 'langton', nodeId: 'langton-N9', context: '朗顿执笔写下第 39 条' },
        ],
      },
      standaloneText: {
        cn: `大宪章 63 条条款里，最重要的是第 39 条和第 40 条。我们来一条一条读。

**第 39 条（Clause 39）原文是拉丁文，大意是：**
"任何自由人不得被逮捕、监禁、剥夺财产或流放，除非经过同等地位之人的合法审判，或依据王国之法律。"

说人话：**国王不能随便抓你、关你、抢你的财产**——必须先经过合法审判。这是"人身保护令"（habeas corpus）的法律祖先。

**第 40 条（Clause 40）原文大意是：**
"我们（国王）不向任何人贩卖正义，不向任何人否认或拖延正义。"

说人话：**正义不能被出售、拖延或拒绝**——以前有钱人交钱就能买到有利判决，这条把这件事明文禁止了。

**为什么这两条是"法治"的核心？**

1215 年之前，"国王说了算"就是法律。
第 39、40 条第一次用书面写清楚：**国王本人也必须受法律约束**，这叫 rule of law（法治）——没有人，包括国王，能凌驾于法律之上。

现代影响：美国宪法第五修正案（"无正当程序不得剥夺自由或财产"）和第十四修正案的"due process clause（正当程序条款）"，直接继承了第 39 条的逻辑。`,
        en: `Of Magna Carta's 63 clauses, the two most important are Clauses 39 and 40. Let's read them one at a time.

**Clause 39 (originally in Latin) says roughly:**
"No free man shall be seized, imprisoned, or stripped of his property or exiled, except by the lawful judgment of his equals or by the law of the land."

In plain terms: **the king cannot arrest you, jail you, or take your property** — there must be a lawful trial first. This is the legal ancestor of habeas corpus.

**Clause 40 says roughly:**
"To no one will we sell, to no one will we deny or delay, right or justice."

In plain terms: **justice cannot be sold, delayed, or denied** — before this, wealthy people could pay for a favorable verdict. This clause put that in writing as illegal.

**Why are these two clauses the core of "rule of law"?**

Before 1215, "whatever the king says" was the law.
Clauses 39 and 40 put in writing for the first time: **even the king must be bound by the law.** That's rule of law — no one, including the king, is above the law.

Modern impact: The Fifth Amendment to the US Constitution ("no person shall be deprived of liberty or property without due process of law") and the Fourteenth Amendment's due process clause directly inherit the logic of Clause 39.`,
      },
      xiaoweiNote: {
        cn: `老师说第 39 条是 AP 和州考最高频考点——几乎每年都有。我的记忆口诀：

**①第 39 条 = 不能随便关人（必须先审判）**
**②第 40 条 = 不能买卖正义（不能花钱买判决）**

总结一句：这两条 = rule of law（法治）的出生证明。`,
        en: `Teacher said Clause 39 is the single most tested point on the AP and state exams — it shows up almost every year. My mnemonic:

**① Clause 39 = can't just lock you up (trial first)**
**② Clause 40 = can't sell justice (no paying for verdicts)**

One-line summary: these two clauses = the birth certificate of rule of law.`,
      },
    },

    // ── Card 5 ─ Tom the Villein: Feudal Bottom Tier ──────────────
    {
      id: 'tom-villein-feudal-bottom',
      termCn: 'Tom（农奴）/ 封建底层视角',
      termEn: 'Tom (villein) / Feudal Bottom Tier',
      defCn: 'Villein（农奴）是封建制度最底层的农民。他们被绑定在领主的土地上，不能自由离开，要交劳役和实物税。大宪章第 39 条说的"自由人"，在 1215 年根本不包括 villeins。Tom 是故事里代表这一群人的虚构角色。',
      defEn: 'A villein was a bonded farmer at the very bottom of the feudal pyramid — tied to the lord\'s land, unable to leave freely, and required to give labor and crops as payment. The "free men" protected by Magna Carta Clause 39 did not include villeins in 1215. Tom is a fictional character in the story who represents this group.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.1'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'tom',
        nodeIds: ['tom-N1', 'tom-N4', 'tom-N8'],
        xiaoweiNote: {
          cn: `Tom 那条故事线是我最喜欢的，因为他代表的是真正被历史"淹没"的那群人——大宪章发生了，他的生活到底变了多少？

**农奴（villein）的处境：**
被绑定在领主的土地上，不能随意离开。要交劳役（labor service）和实物税。他在封建金字塔的最底层。

**关键：** 大宪章第 39 条说的"自由人（free man）"，在 1215 年的语境里**根本不包括 villeins**。学界估计当时约 40–50% 的英格兰人是农奴，加上全部女性和其他被排除的人，大多数人其实都不在保护范围内。

但 Tom 这个角色提了一个很好的问题：为什么这份"只保护贵族"的文件，后来变成了"保护所有人"的人权象征？**一份文件的意义，到底是谁说了算？**`,
          en: `Tom's storyline is my favorite, because he represents the people history "swallowed up" — Magna Carta happened, but how much did his life actually change?

**What a villein's life looked like:**
Bound to the lord's land, not free to leave. Owed labor service and payment in crops. He sat at the very bottom of the feudal pyramid.

**The key point:** The "free man" protected by Clause 39 did **not** include villeins in 1215. Scholars estimate roughly 40–50% of England's population were villeins, plus all women and others excluded — so most people were actually outside its protection.

But Tom raises an important question: why did a document that "only protected barons" later become a human rights symbol protecting everyone? **Who gets to decide what a document means?**`,
        },
      },
    },

    // ── Card 6 ─ Habeas Corpus ────────────────────────────────────
    {
      id: 'habeas-corpus',
      termCn: '人身保护令 / Habeas Corpus',
      termEn: 'Habeas Corpus',
      defCn: 'Habeas corpus 是拉丁文，字面意思是"你应当拥有这具身体"。它是一条法律原则：如果你被关在监狱里，你有权要求政府出庭解释"凭什么关我"——政府必须拿出合法理由，否则必须放人。它的思想根源在大宪章第 39 条。',
      defEn: 'Habeas corpus is Latin for "you shall have the body." It is a legal principle: if you are held in prison, you have the right to demand the government explain in court why they are holding you — they must provide a lawful reason, or let you go. Its roots go back to Magna Carta Clause 39.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'king-john',
        nodeIds: ['john-N10'],
        xiaoweiNote: {
          cn: `Habeas corpus——拉丁文，字面意思是"你应当拥有这具身体"。

1215 年大宪章第 39 条里埋下了这个原则的种子。但"habeas corpus"作为正式法律工具，要到 1679 年英国《人身保护法》（Habeas Corpus Act）才正式成文。

**现代含义是什么？**
如果你被关在监狱里，你有权要求政府出庭解释"为什么关我"。政府必须拿出合法理由，否则必须放人。

**和美国的关系：**
美国宪法第一条第九节明确写道："除非在叛乱或入侵时，否则人身保护令权利不得暂停。"

①1863 年内战期间，林肯曾短暂暂停这项权利。
②2001 年"9·11"之后，关塔那摩湾拘留问题又把 habeas corpus 推上了新闻头版。

**考点关键句：** habeas corpus = 个人对抗国家任意关押的最基本法律武器，追根溯源，就在 1215 年兰尼米德的那张羊皮纸上。`,
          en: `Habeas corpus — Latin for "you shall have the body."

Magna Carta Clause 39 (1215) planted this principle as a seed. But "habeas corpus" as a formal legal tool wasn't put into law until the Habeas Corpus Act of 1679 in England.

**What does it mean today?**
If you are being held in prison, you have the right to demand the government appear in court and explain "why are you holding me." The government must provide a lawful reason, or release you.

**The US connection:**
The US Constitution, Article I Section 9, explicitly states: "The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it."

① Lincoln briefly suspended it during the Civil War in 1863.
② After the September 11, 2001 attacks, Guantanamo Bay detentions put habeas corpus back on the front page.

**Key exam sentence:** habeas corpus = the most fundamental legal weapon individuals have against being held by the government without reason — traced all the way back to that parchment at Runnymede in 1215.`,
        },
      },
    },

    // ── Card 7 ─ From Magna Carta to Parliament (standaloneText) ──
    {
      id: 'magna-carta-to-parliament',
      termCn: '从大宪章到议会制度',
      termEn: 'From Magna Carta to Parliament',
      defCn: '议会（Parliament）是一个让代表们聚在一起讨论法律和税收的制度。英格兰议会从大宪章"国王征税必须得到贵族同意"的原则慢慢生长出来，1265 年第一次正式召开，1295 年确立基本构成。',
      defEn: 'Parliament is an institution where representatives gather to discuss laws and taxes. England\'s Parliament grew from Magna Carta\'s principle that the king needed baronial consent to tax people — it first met in 1265 and took its basic shape in 1295.',
      standardRef: ['CA HSS 7.6.4', 'AP World KC-1.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'king-john', nodeId: 'john-N12', context: '约翰王那条线提及议会制度起源' },
        ],
      },
      standaloneText: {
        cn: `大宪章（1215）不是终点，它是一根导火索。

它点燃的第一个大事件，在 50 年后——

**1265 年：** 西蒙·德·孟福尔（Simon de Montfort，莱斯特伯爵）召集了英格兰历史上第一届真正意义上的"议会"（Parliament）。里面不只有贵族，还有来自各地的骑士（knights）和城市代表（burgesses）。这是现代议会民主的起点。

**为什么大宪章能引出议会？** 逻辑链是这样的：

①大宪章（1215）确立原则——"国王不能不经贵族同意就征税"。
②历任国王需要钱，就必须召集贵族开会讨论——会议逐渐固定下来。
③1265 年，孟福尔把"开会"制度化，扩大参与范围，议会成形。
④1295 年，爱德华一世召集"模范议会"（Model Parliament），包括贵族、教士、骑士、城市代表，议会的基本构成确立。

**从大宪章到美国宪法的时间线：**
1215 大宪章 → 1265 第一届英国议会 → 1689 英国权利法案（Bill of Rights）→ 1776 美国独立宣言 → 1787 美国宪法 → 1791 美国权利法案（Bill of Rights）

**考点关键句：** 大宪章不是民主——1215 年是贵族限制国王。但它开创了"权力需要书面约束"的先例，这个先例 500 年后生长成了现代民主体制。`,
        en: `Magna Carta (1215) was not the destination — it was the fuse.

The first big event it set off came 50 years later.

**1265:** Simon de Montfort (Earl of Leicester) convened the first truly representative Parliament in English history. It included not just barons but also knights from the shires and burgesses from the towns. This is the starting point of modern parliamentary democracy.

**Why did Magna Carta lead to Parliament?** Here is the logical chain:

① Magna Carta (1215) establishes the principle: the king cannot tax people without baronial consent.
② Kings constantly need money, so they must summon barons to discuss it — the meetings become regular.
③ In 1265, de Montfort formalizes "the meeting" and expands who participates — Parliament takes shape.
④ In 1295, Edward I convenes the "Model Parliament," including barons, clergy, knights, and town representatives — Parliament's basic shape is set.

**Timeline from Magna Carta to the US Constitution:**
1215 Magna Carta → 1265 First English Parliament → 1689 English Bill of Rights → 1776 American Declaration of Independence → 1787 US Constitution → 1791 US Bill of Rights

**Key exam sentence:** Magna Carta was not democracy — in 1215 it was barons limiting the king. But it established the precedent that power needs written constraints, and that precedent grew, over 500 years, into modern democratic government.`,
      },
      xiaoweiNote: {
        cn: `CA HSS 7.6.4 专门考"议会起源"——孟福尔 1265 年这个节点一定要记。

我的记忆口诀：
**①大宪章（1215）= "不能随便收税"**
**②孟福尔（1265）= "开会变制度"**
**③模范议会（1295）= "议会定型了"**

三个年份背下来，选择题就不慌了。`,
        en: `CA HSS 7.6.4 specifically tests "origins of Parliament" — the 1265 de Montfort date is a must-memorize.

My mnemonic:
**① Magna Carta (1215) = "can't just tax people"**
**② De Montfort (1265) = "the meeting becomes an institution"**
**③ Model Parliament (1295) = "Parliament's shape is set"**

Three dates — memorize them, and the multiple choice won't trip you.`,
      },
    },

    // ── Card 8 ─ Modern Legacy of Magna Carta (standaloneText) ────
    {
      id: 'magna-carta-modern-legacy',
      termCn: '大宪章的现代影响',
      termEn: 'Modern Legacy of Magna Carta',
      defCn: '1215 年签的那张羊皮纸，经过几百年的重新解读，最终影响了美国宪法权利法案、1948 年联合国世界人权宣言，以及今天很多国家的法律体系。它最核心的遗产是"法治"原则——没有人，包括国王和总统，可以凌驾于法律之上。',
      defEn: 'The parchment signed in 1215, through centuries of reinterpretation, eventually shaped the US Bill of Rights, the 1948 UN Universal Declaration of Human Rights, and the legal systems of many countries today. Its most central legacy is the principle of rule of law — no one, including kings and presidents, is above the law.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `一张 1215 年的羊皮纸，怎么管到了今天？我们来追一下这条线。

**直接后代——美国权利法案（Bill of Rights, 1791）：**
①第四修正案：禁止无理搜查和逮捕 ← 大宪章第 39 条
②第五修正案：无正当程序（due process）不得剥夺自由或财产 ← 大宪章第 39 条
③第六修正案：快速公开审判权（speedy trial）← 大宪章第 40 条
④第八修正案：禁止残酷和不寻常的惩罚 ← 大宪章整体精神

**1948 年《世界人权宣言》（Universal Declaration of Human Rights）：**
联合国起草时，英国代表明确指出第 9 条（禁止任意逮捕）的祖先是大宪章第 39 条。

**"没有人高于法律"这个原则的传承：**
约翰王（1215）→ 英国权利法案（1689，国王不能凌驾议会）→ 美国宪法第二条弹劾条款（总统也可以被弹劾）→ 2016 年英国最高法院裁定脱欧公投需经议会授权——当天法院引用的第一条先例，就是 Magna Carta。

**要注意的一件事：**
大宪章在 13 世纪几乎被人遗忘——约翰王死后，它被修改了至少 3 次，范围大幅缩水。真正把它重新"发掘"出来的，是 17 世纪英国律师 Edward Coke，他对抗詹姆斯一世时把大宪章拿出来当武器。也就是说，大宪章的"重要性"，很大程度上是后人重新建构的——**文件本身没变，是人赋予了它新的意义。**`,
        en: `How does a parchment from 1215 still matter today? Let's trace the line.

**Direct descendants — US Bill of Rights (1791):**
① Fourth Amendment: protection against unreasonable searches and seizures ← Magna Carta Clause 39
② Fifth Amendment: no deprivation of liberty or property without due process ← Magna Carta Clause 39
③ Sixth Amendment: right to a speedy and public trial ← Magna Carta Clause 40
④ Eighth Amendment: no cruel and unusual punishment ← the spirit of Magna Carta overall

**1948 Universal Declaration of Human Rights:**
When the UN was drafting it, the British delegate explicitly noted that Article 9 (prohibition of arbitrary arrest) descended from Magna Carta Clause 39.

**The lineage of "no one is above the law":**
King John (1215) → English Bill of Rights (1689, king cannot override Parliament) → US Constitution Article II impeachment clause (even the president can be removed) → 2016 UK Supreme Court ruling that Brexit required Parliament's authorization — the first precedent the court cited that day was Magna Carta.

**One thing worth knowing:**
Magna Carta was nearly forgotten in the 13th century. After John's death, it was revised at least 3 times and shrunk considerably. The person who truly dug it back up was 17th-century English lawyer Edward Coke, who used it as a weapon against King James I. In other words, Magna Carta's "importance" was largely rebuilt by later generations — **the document itself didn't change; people gave it new meaning.**`,
      },
      xiaoweiNote: {
        cn: `这张卡很适合 AP 论文的结尾段——大宪章不是一次性事件，它是一个"被不断重新发明"的传统。

如果题目问"大宪章和美国宪法的关系"，要提第五修正案（due process，正当程序）和 habeas corpus（人身保护令），这两个联系最直接。

如果题目问"大宪章的局限性"，要提"1215 年只保护自由民（free men），不保护农奴"——这是考 DBQ 题常用的加分论点。`,
        en: `This card is great for the conclusion paragraph of an AP essay — Magna Carta isn't a one-time event; it's a tradition that keeps getting "reinvented."

If a question asks about "the relationship between Magna Carta and the US Constitution," cite the Fifth Amendment (due process) and habeas corpus — those are the most direct connections.

If a question asks about "the limitations of Magna Carta," cite "in 1215 it only protected free men, not serfs" — that's a strong DBQ argument that can earn extra points.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `大宪章在 1215 年只保护贵族（barons 和 free men），根本没提农奴和女性——但今天它被全世界引用为"人权"的基石。

一份文件的"意义"，到底是由起草者在签字那天决定的，还是由后来几百年的解读者决定的？你能想到其他类似的例子吗？`,
      en: `Magna Carta in 1215 only protected barons and free men — it said nothing about serfs or women. Yet today it is cited worldwide as a cornerstone of "human rights."

Does the "meaning" of a document get decided by the people who drafted it on the day they signed, or by the interpreters who came hundreds of years later? Can you think of other similar examples?`,
      hintCn: `可以从两个方向想一想：

**①"起草者意图决定意义"：** 如果我们只按 1215 年的原意解读，大宪章就是贵族讨价还价的工具，不是人权文件。那 habeas corpus 保护普通人这件事，是不是对原文的"歪曲"？

**②"解读者建构意义"：** 17 世纪律师 Edward Coke 把大宪章当反抗国王的武器，18 世纪美国革命者把它当殖民地权利的根据——这两次"另作解读"反而让它的影响力越来越大。

**再想深一点：** 美国独立宣言写的"all men are created equal（人人生而平等）"，1776 年的起草者杰斐逊本人拥有奴隶。后来的废奴运动、女权运动、民权运动都引用这句话——这算是"误读"，还是"更忠于原文精神"？`,
      hintEn: `Think about it from two directions:

**① "The drafter's intent determines meaning":** If we read Magna Carta only by its 1215 intent, it was a bargaining tool for barons, not a human rights document. Does that make habeas corpus protecting ordinary people a "distortion" of the original?

**② "Interpreters build meaning":** 17th-century lawyer Edward Coke used Magna Carta as a weapon against the king; 18th-century American revolutionaries used it as the basis for colonial rights — both of those reinterpretations actually expanded its influence.

**Going deeper:** The Declaration of Independence (1776) says "all men are created equal," written by Jefferson, who personally enslaved people. Later abolitionists, suffragists, and civil rights activists all cited this phrase — is that "misreading," or "being more faithful to the spirit of the original"?`,
      conceptsActivated: ['magna-carta-clauses-39-40', 'tom-villein-feudal-bottom', 'magna-carta-modern-legacy'],
    },

    {
      id: 'q2',
      cn: `约翰王在兰尼米德（Runnymede）签字后，立刻秘密写信给教皇 Innocent III，请求废除大宪章——教皇很快宣布它"无效、不公正、有损王权"，整个协议在签字后不到三个月就名存实亡。

这说明什么？"法律"的效力到底来自哪里——纸上的文字、签署者的诚意、还是别的什么？`,
      en: `After signing at Runnymede, King John immediately wrote in secret to Pope Innocent III asking him to cancel Magna Carta — the Pope quickly declared it "null, void, unjust, and injurious to royal dignity," and the agreement was essentially dead within three months of signing.

What does this tell us? Where does the force of "law" actually come from — the words on the page, the good faith of the signers, or something else?`,
      hintCn: `这道题没有标准答案，有三个经典角度：

**①"法律靠权力执行"：** 没有人能逼约翰王守约，贵族自己也没有军队强制执行。直到第一次男爵战争（First Barons' War，1215–1217）打完，约翰王死了，年幼的亨利三世登基，摄政王才重新颁布大宪章。也就是说，**真正让大宪章生效的，是约翰王的死亡，不是他的签字。**

**②"法律靠社会共识"：** 如果足够多的人——贵族、教士、平民——相信某个规则应该被遵守，国王也很难单独违反。大宪章后来真正的力量，来自"这是古老的法律传统"这一共识，不是来自任何执行机构。

**③"法律靠重复实践"：** 大宪章在 1215–1300 年间被重新颁布了至少 32 次，每一次重颁都是对它有效性的一次"续签"——就好像一份合同被人反复提起，说明大家都觉得它有用。

**再想深一点：** 今天的国际法（比如《联合国宪章》）是谁来执行的？如果没有执行机构，国际法还算"法律"吗？`,
      hintEn: `There's no single correct answer — here are three classic angles:

**① "Law is enforced by power":** No one could compel John to keep his word, and the barons had no army strong enough to force it. It wasn't until the First Barons' War (1215–1217) ended and John died — with young Henry III ascending the throne — that the regent reissued Magna Carta. In other words, **what truly made Magna Carta take effect was John's death, not his signature.**

**② "Law rests on social consensus":** If enough people — barons, clergy, commoners — believe a rule should be obeyed, even a king finds it hard to violate it alone. Magna Carta's real power later came from the shared belief that "this is ancient legal tradition," not from any enforcement body.

**③ "Law is built through repeated practice":** Magna Carta was reissued at least 32 times between 1215 and 1300. Each reissue was a renewal of its validity — like a contract that keeps being cited, proving everyone considers it useful.

**Going deeper:** Who enforces international law today (like the UN Charter)? If there's no enforcement body, is international law still "law"?`,
      conceptsActivated: ['king-john-runnymede', 'magna-carta-clauses-39-40', 'magna-carta-modern-legacy'],
    },

    {
      id: 'q3',
      cn: `如果你是 1215 年的 Tom——一个 13 岁的农奴（villein），绑在领主的土地上，不能自由离开——你刚刚听说国王在兰尼米德签了一张大宪章。

大宪章对你的实际生活改变了什么（如果有的话）？八百年后，Tom 的后代生活在今天的英国或美国——大宪章对那个后代的意义，和 1215 年的 Tom 完全不同吗？`,
      en: `Imagine you are Tom — a 13-year-old villein (serf) in 1215, bound to your lord's land, not free to leave — and you have just heard that the king signed some document called Magna Carta at Runnymede.

What did Magna Carta actually change about your daily life (if anything)? Eight hundred years later, Tom's descendants are living in modern England or America — is the meaning of Magna Carta for that descendant completely different from what it meant for Tom in 1215?`,
      hintCn: `1215 年对 Tom 来说，答案几乎是"什么都没变"——"free man（自由人）"不包括 villeins，他还是得交劳役、不能离开土地。

直到 1348 年黑死病（Black Death）杀死了 30–50% 欧洲人口，劳动力稀缺了，农奴才获得了谈判筹码，开始逐步获得自由。

但是如果 Tom 的后代今天生活在英国，他们受益于：
①英国 1215 年之后 800 年的逐步改革（选举权扩展到无财产男性 1867，女性 1918）
②Habeas Corpus Act 1679
③英国宪法的整个普通法（common law）传统

如果在美国，他们受益于 1791 美国权利法案、1865 第十三修正案（废奴）、1920 第十九修正案（女性选举权）。

**再想深一点：** 大宪章给 1215 年的 Tom 什么都没给，但给了他的后代几百年后的保护——这算是"历史正义"（historical justice），还是"迟来的安慰"？迟来的权利，还算是权利吗？`,
      hintEn: `For Tom in 1215, the answer is almost "nothing changed" — "free man" did not include villeins; he still owed labor service and couldn't leave the land.

It wasn't until the 1348 Black Death killed 30–50% of Europe's population that labor became scarce and serfs finally had bargaining power, gradually winning freedom.

But if Tom's descendants are in England today, they benefit from:
① 800 years of incremental English reform after 1215 (voting rights extended to propertyless men in 1867, women in 1918)
② Habeas Corpus Act 1679
③ The entire common law tradition of the English constitution

If in America, they benefit from the 1791 Bill of Rights, the 1865 Thirteenth Amendment (abolition of slavery), the 1920 Nineteenth Amendment (women's right to vote).

**Going deeper:** Magna Carta gave nothing to Tom in 1215, but gave his descendants protection hundreds of years later — is that "historical justice," or "belated consolation"? If rights arrive very late, do they still count as rights?`,
      conceptsActivated: ['tom-villein-feudal-bottom', 'feudalism', 'magna-carta-modern-legacy'],
    },
  ],
};

export default notebook;
