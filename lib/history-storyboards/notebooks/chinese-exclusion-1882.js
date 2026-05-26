// ─── 同伴笔记本架构 v1 · Chinese Exclusion 1869-1882 ───────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 这是一个中美交叉痛点 Topic — 铁路华工 + 排华法案。小 U身为 ABC 对这段
// 历史尤其有共鸣（语气可带一点个人连接，但不煽情、不创伤模拟、不廉价感动）。
// 她是见证者式的同伴：把笔记给你看，不替你哭。
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语 + 人物分级清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（回忆 + 考点提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson, 300-500 字)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系（3 lens / 11 nodes each）：
//   - leland-stanford (perpetrator)        — 资本逻辑：用华工建国家动脉、建完转身排华
//   - wong-chin-foo (lonely-mediator)      — 用语言抗争：造「Chinese American」、用独立宣言反问美国
//   - taishan-railroad-worker (receiving)  — 受影响者 (DEFAULT)：凿崖、雪崩、被关在公民权外
//   - 跨 lens N6:「人人生而平等」一句话两个方向（Wong 报纸要名分 vs 台山华工工地被漏在外）
//
// 课纲对齐：
//   - APUSH Period 6 (1865-1898), CED Topic 6.5-6.7（移民 / 西部铁路 / nativism / 镀金时代冲突）
//   - California HSS 8.12（工业化与西部；华工史加州本地史特殊地位）
//   - Chinese Exclusion Act = 美国史首部按族裔的移民禁令，APUSH 移民单元核心案例
//
// 事实对账：所有 claim 已对 chinese-exclusion-1882-factledger.md（强措辞已按账本收紧：
//   "每凿一米死一华工"已降级为非字面措辞；Stanford「劣等种族」系于 1862 致立法机关咨文，
//   非就职演说；Crocker 长城句标为后世概括/传说；10 英里纪录注明华工为主力+爱尔兰铺轨工；
//   Wong Chin Foo 报纸 1883；雪深用累积措辞）。
//
// cultural-ban 特例: 涉及真实中国人（台山华工）— 对他们用中文词（台山/广东/华工/金山）正确；
//   对美国机构用真实美国词（中央太平洋铁路 / Chinese Exclusion Act / Chinatown / Angel Island）。
//
// schemaVersion: 1 · notebookVersion: chinese-exclusion-1882-v1

export var notebook = {
  topicId: 'chinese-exclusion-1882',
  topicNameCn: '铁路华工与排华法案',
  topicNameEn: 'The Transcontinental Railroad & Chinese Exclusion 1869-1882',
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
    cn: `今天老师说我们要学一段……怎么说呢，对我这种 ABC 来说有点不一样的历史：铁路华工和排华法案（Chinese Exclusion Act）。

老师在白板上写了几个名字和词：

人：Leland Stanford（斯坦福）、Wong Chin Foo（王清福）、还有一个"台山华工"（没有名字的那种主角）。
词：transcontinental railroad（横贯大陆铁路）、Chinese Exclusion Act（排华法案）、nativism（排外主义）、Yellow Peril（黄祸）、naturalization（归化）、Chinatown（唐人街）、Chinese American（华裔美国人）。

我先抄下来。等下读三个故事——Stanford、王清福、台山华工——读完再回来对照这张单子，看我能不能解释。

老师那句话我也写下了："不要只记年份和法案名字，要记——这个国家为什么先用一群人，再立法把他们关在门外？"

说实话，读到台山华工那条线我会想起我自己。我能用中文也能用英文读懂这段历史，本身就是当年那些人没敢想过的事。我不哭，我把它记清楚——这是我能为他们做的。`,
    en: `Today my teacher said we're learning a piece of history that's a little different for an ABC like me: the railroad Chinese workers and the Chinese Exclusion Act.

She wrote some names and terms on the board:

People: Leland Stanford, Wong Chin Foo, and a "Taishan railroad worker" (the kind of main character with no name).
Terms: transcontinental railroad, Chinese Exclusion Act, nativism, Yellow Peril, naturalization, Chinatown, Chinese American.

Let me copy these down. After I read the three stories (Stanford, Wong Chin Foo, the Taishan worker), I'll come back and check whether I can explain each one.

I wrote down the teacher's line too: "Don't just memorize dates and the names of laws. Memorize — why did this country first use a group of people, then pass a law to shut them out?"

Honestly, reading the Taishan worker's pass made me think of myself. That I can read this history in both Chinese and English is something those people back then never dared to imagine. I won't cry over it — I'll get it down clearly. That's what I can do for them.`,
    keyTerms: [
      { cn: '横贯大陆铁路', en: 'transcontinental railroad' },
      { cn: '排华法案', en: 'Chinese Exclusion Act (1882)' },
      { cn: '排外主义', en: 'nativism' },
      { cn: '黄祸', en: 'Yellow Peril' },
      { cn: '归化（成为公民）', en: 'naturalization' },
      { cn: '推拉因素（移民）', en: 'push-pull factors' },
      { cn: '唐人街', en: 'Chinatown' },
      { cn: '华裔美国人', en: 'Chinese American' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名 + 角色锚 + IPA + audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '利兰·斯坦福',
        nameEn: 'Leland Stanford',
        ipa: '/ˈliːlənd ˈstænfərd/',
        roleCn: '中央太平洋铁路总裁 + 加州州长，雇上万华工又支持排华政治',
        roleEn: 'President of the Central Pacific Railroad and California governor; hired Chinese workers yet backed exclusion politics',
        mustKnow: true,
        audioKey: 'leland-stanford',
      },
      {
        nameCn: '王清福',
        nameEn: 'Wong Chin Foo',
        ipa: '/wɒŋ tʃɪn fuː/',
        roleCn: '早期华裔民权活动家 + 记者，1883 创《华洋新报》、造「Chinese American」一词',
        roleEn: 'Early Chinese American civil rights activist and journalist; founded The Chinese American in 1883 and coined the term "Chinese American"',
        mustKnow: true,
        audioKey: 'wong-chin-foo',
      },
      {
        nameCn: '一个台山籍铁路华工',
        nameEn: 'A Taishan Railroad Worker (composite)',
        ipa: '/taɪˈʃæn/',
        roleCn: '综合性人物（基于真实集体劳工史）：凿内华达山隧道、雪崩失友、完工后被排华法案挡在公民权外',
        roleEn: 'A composite figure (based on real collective labor history): bored Sierra Nevada tunnels, lost workmates in avalanches, was barred from citizenship after the railroad was finished',
        mustKnow: true,
        audioKey: 'taishan-railroad-worker',
      },
      {
        nameCn: '查尔斯·克罗克',
        nameEn: 'Charles Crocker',
        ipa: '/tʃɑːrlz ˈkrɒkər/',
        roleCn: '中央太平洋铁路工程主管，提议雇华工',
        roleEn: 'Central Pacific construction superintendent who proposed hiring Chinese workers',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '丹尼斯·卡尼',
        nameEn: 'Denis Kearney',
        ipa: '/ˈdɛnɪs ˈkɑːrni/',
        roleCn: '加州工人领袖，排华口号「The Chinese must go!」',
        roleEn: 'California labor leader, exclusion slogan "The Chinese must go!"',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '弗雷德里克·道格拉斯',
        nameEn: 'Frederick Douglass',
        ipa: '/ˈfrɛdrɪk ˈdʌɡləs/',
        roleCn: '黑人废奴领袖（跨课锚），同代用同一份独立宣言质问美国',
        roleEn: 'Black abolitionist leader (cross-topic anchor) who, in the same era, used the same Declaration of Independence to question America',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'transcontinental-railroad-chinese-labor',
      termCn: '横贯大陆铁路 / 华工劳力',
      termEn: 'Transcontinental Railroad / Chinese Labor',
      standardRef: ['APUSH Period 6 (CED 6.5)', 'CA HSS 8.12'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ls-n2', 'ls-n3', 'ls-n5', 'tw-n3', 'tw-n4', 'tw-n5'],
        xiaoweiNote: {
          cn: `这个我读了两个角度——Stanford 那边和台山华工那边，是同一件事的山下和山上。

要点（考试一定考）：
- 1862 年林肯政府《太平洋铁路法案》（Pacific Railway Act）授权修横贯大陆铁路，按修建里程给土地和补贴——所以公司只想一个字："快"。
- 两段竞赛：东段联合太平洋（Union Pacific）从内布拉斯加西修，西段中央太平洋（Central Pacific，Stanford 等"四巨头"）从加州东修。
- 1865 年中央太平洋先试 50 个华工，成功后大量招——工程最忙时约 90%（十个有九个）是华工，上万人。
- 西半段穿过内华达山脉（Sierra Nevada）的花岗岩，最难的是峰顶隧道（Summit Tunnel）。华工吊在悬崖篮子里放炸药（nitroglycerin 硝化甘油，极不稳定）；1866-67 两冬死得最多，雪崩埋掉整营。
- 死亡人数从没被官方统计过（估计几百到上千）——账本上没单独列他们。

⚠️ 我对了一下事实账本，提醒你两个容易写错的地方：
1. Crocker 那句"能修长城的民族还修不了铁路"是后世广为流传的概括/传说，不是逐字一手引文——写 essay 可以说"据说他说过"，别当确证引文。
2. 1869 年 4 月"一天铺 10 英里"的纪录：那天实际抬轨上道的 8 个人是爱尔兰铺轨工，华工是更大基数的主力供料和铺设。所以准确说法是"以华工为主力、与爱尔兰铺轨工一起"创下纪录，不要写成"华工独自创下"。

考点关键句：横贯大陆铁路把美国东西海岸连成一体，是镀金时代工业化的标志工程；它的西半段是华工用命凿出来的。`,
          en: `I read this from two angles — Stanford's side and the Taishan worker's side — the foot of the mountain and the top of it, same event.

Key points (definitely tested):
- 1862 Pacific Railway Act (Lincoln's government) authorized the transcontinental railroad, paying land and subsidies by the mile — so the companies wanted only one thing: "speed."
- Two-section race: from the east, the Union Pacific built west from Nebraska; from the west, the Central Pacific (Stanford's "Big Four") built east from California.
- In 1865 the Central Pacific tried 50 Chinese workers first, then hired in great numbers — at the busiest point about 90% (nine of ten) of the workers were Chinese, over ten thousand men.
- The western half crossed the granite of the Sierra Nevada; the hardest part was the Summit Tunnel. Chinese workers hung in baskets off cliffs to set charges (nitroglycerin, highly unstable); the winters of 1866-67 killed the most, avalanches buried whole camps.
- The death toll was never officially counted (estimates run hundreds to over a thousand) — they had no separate column in the ledger.

⚠️ I checked the fact ledger — two things people get wrong:
1. Crocker's line "a people who could build the Great Wall could surely build a railroad" is a widely-circulated later paraphrase / legend, not a word-for-word source. In an essay say "he is said to have said," don't cite it as a verified quote.
2. The April 1869 "ten miles in a day" record: the 8 men who actually laid the rail that day were Irish track-layers; the Chinese were the larger workforce supplying and building. So the accurate phrasing is "set by a Chinese-majority crew working with Irish track-layers," not "set by the Chinese alone."

Key exam sentence: The transcontinental railroad joined America's east and west coasts and was a landmark of Gilded Age industrialization; its western half was carved out by Chinese workers with their lives.`,
        },
      },
    },

    {
      id: 'chinese-exclusion-act-1882',
      termCn: '排华法案 1882',
      termEn: 'Chinese Exclusion Act (1882)',
      standardRef: ['APUSH Period 6 (CED 6.7)', 'CA HSS 8.12'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ls-n8', 'wcf-n8', 'tw-n8'],
        xiaoweiNote: {
          cn: `这是整门课的核心，三条故事线都讲到了 1882 那一节。老师说这是 APUSH 移民单元的"必背案例"。

考点关键句（背下来）：Chinese Exclusion Act 是美国历史上第一部按种族 / 国籍禁止移民的联邦法律。

它做了两件事，分量不一样，第二件更狠：
1. 禁止华人劳工入境（一开始定 10 年，后来一再延长）。
2. 明确禁止已经在美国的华人归化（naturalization）成为公民——这一条是把人永远钉在"外国人"身份上。

为什么是第二条最狠？我读台山华工那一节才真懂：他可以在美国干一辈子活、纳一辈子税、变老、死在这里，但永远不算"美国人"，没有投票权，还不能把妻子孩子接来团聚——一个家被法律拆成两半。

⚠️ 清坑（老师特别强调）：很多人以为"排华法案只是限制移民"——错。它不止限制入境，更永久禁止归化。这两层一定要分开写，少写第二层会丢分。

DBQ 角度：一个标榜"人人生而平等""机会之地"的国家，第一次白纸黑字按肤色和血统把一整个民族关在门外——而被关在门外的，正是修起它东西大动脉的人。这个反讽是 essay 的黄金论点。`,
          en: `This is the heart of the whole topic — all three story lines reach the 1882 node. Teacher said it's the "must-memorize case" of the APUSH immigration unit.

Key exam sentence (memorize it): The Chinese Exclusion Act was the first U.S. federal law to bar immigration by race / nationality.

It did two things, of unequal weight — the second is harsher:
1. Barred Chinese laborers from entering (set at 10 years at first, then extended again and again).
2. Plainly barred Chinese already in America from naturalization — this clause nailed people forever to "foreigner" status.

Why is the second clause the harshest? I only really understood it reading the Taishan worker's node: he could work a whole life in America, pay tax a whole life, grow old, die here, yet never count as "American," never vote, and never bring his wife and children to reunite — a family torn in two by law.

⚠️ Clear the trap (teacher stressed this): many think "the Exclusion Act just limited immigration" — wrong. It not only limited entry but permanently barred naturalization. Write both layers separately; missing the second loses points.

DBQ angle: A country that proclaims "all men are created equal" and "the land of opportunity" shut, in black and white by skin and bloodline, an entire people out the door for the first time — and the people shut out were the very ones who built its east-west artery. That irony is the gold thesis for an essay.`,
        },
      },
    },

    {
      id: 'exclusion-arc-1882-1943',
      termCn: '排华法案的 61 年（Scott / Geary / Magnuson）',
      termEn: 'The 61-Year Arc (Scott / Geary / Magnuson Acts)',
      standardRef: ['APUSH Period 6 (CED 6.7)', 'CA HSS 8.12'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'wong-chin-foo', nodeId: 'wcf-n8', context: '王清福讲到 1888 Scott Act：约两万持合法返美证件的在外华工被禁返' },
          { lens: 'leland-stanford', nodeId: 'ls-n9', context: 'Stanford 提到排华法案没跟他死、一直管到 1943 年' },
          { lens: 'taishan-railroad-worker-receiving-end', nodeId: 'tw-n9', context: '台山华工到死没等到 1943 法案废除' },
        ],
      },
      standaloneText: {
        cn: `故事里几次提到"排华法案管了 61 年""一次比一次狠"，但没有把这条法律链讲全。这里补上——APUSH 喜欢考"持续 vs 变化"，这条链就是最好的材料。

排华不是一道法律，是一串越收越紧的法律：

- **1882 Chinese Exclusion Act（排华法案）**：禁华工入境（初定 10 年）+ 禁已在美华人归化为公民。起点。

- **1888 Scott Act（斯科特法案）**：作废华工的返美证件。约两万个回中国探过亲、手里拿着合法证件的华工，一夜之间被关在"自己家"门外，再也回不来。这一条特别狠在"出尔反尔"——政府先发证、再撕证。

- **1892 Geary Act（吉尔里法案）**：把排华再延长 10 年，还加了一条侮辱性规定——华人必须随身携带居留证件（一种内部"身份证"），随时准备被盘查证明自己"合法"。白人不用带，只有华人要带。

- **1943 Magnuson Act（马格努森法案）**：废除排华法案。从 1882 到 1943，整整 **61 年**。废除的背景是二战——中国成了美国对抗日本的盟友，继续公开排华很难看，所以才松口（但每年只给华人 105 个移民名额，象征意义大于实际）。

🔗 反 Whig 长尾：排华法案是后来一系列制度性反亚裔的"先声"——1924 年排日、二战日裔被关进拘留营（如 Manzanar）。这一串提醒我们："机会之地"的承诺，对亚裔是一次次被打折的。

🔗 故事连接：王清福（视角二第 8 节）拼命想阻止这部法律，没成功；台山华工（视角三第 9 节）到死顶着"外国人"三个字，没等到 1943。`,
        en: `The story mentions a few times that "the Exclusion Act governed 61 years" and "grew harsher with each step," but doesn't lay out the full chain of laws. Here it is — APUSH loves to test "continuity vs change," and this chain is perfect material.

Exclusion was not one law but a string of ever-tightening laws:

- **1882 Chinese Exclusion Act**: barred Chinese laborers from entry (10 years at first) + barred Chinese already in America from naturalization. The start.

- **1888 Scott Act**: voided Chinese workers' re-entry certificates. About twenty thousand workers who had visited family in China, holding lawful papers, were overnight shut out of their own "home," never to return. What made it especially cruel was the bait-and-switch — the government issued the papers, then tore them up.

- **1892 Geary Act**: extended exclusion another 10 years and added a humiliating clause — the Chinese had to carry residence certificates (a kind of internal "ID card"), ready at any time to prove they were "lawful." White people did not have to carry them; only the Chinese did.

- **1943 Magnuson Act**: repealed the Exclusion Act. From 1882 to 1943, a full **61 years**. The repeal came during World War II — China had become America's ally against Japan, and openly excluding the Chinese looked bad, so the door loosened (though only 105 immigration slots per year for the Chinese — more symbolic than real).

🔗 Anti-Whig long tail: the Exclusion Act was the "first cry" of a series of institutional anti-Asian measures — Japanese exclusion in 1924, the WWII internment of Japanese Americans (e.g., Manzanar). The chain reminds us the promise of "the land of opportunity" was discounted, again and again, for Asians.

🔗 Story link: Wong Chin Foo (Lens 2 Node 8) tried desperately to stop this law and failed; the Taishan worker (Lens 3 Node 9) wore the words "foreigner" until death, never living to see 1943.`,
      },
      xiaoweiNote: {
        cn: `老师说记忆口诀按时间排：**1882 关门 → 1888 撕证（Scott）→ 1892 加证件（Geary）→ 1943 废除（Magnuson）**。

最容易丢分的清坑：很多人以为"排华法案很快就废了"——错，整整 61 年，而且一路加码。还有，1943 废除是因为二战中国是盟友，不是因为美国突然变善良——动机一定要写清。`,
        en: `Teacher's mnemonic is chronological: **1882 shut the door → 1888 tore up the papers (Scott) → 1892 added the ID card (Geary) → 1943 repealed (Magnuson)**.

The point that loses the most marks: many think "the Exclusion Act was repealed quickly" — wrong, a full 61 years, tightening the whole way. Also, the 1943 repeal happened because China was a WWII ally, not because America suddenly turned kind — always make the motive clear.`,
      },
    },

    {
      id: 'nativism-yellow-peril',
      termCn: '排外主义 / 黄祸',
      termEn: 'Nativism / Yellow Peril',
      standardRef: ['APUSH Period 6 (CED 6.7)', 'CA HSS 8.12'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ls-n7', 'wcf-n3', 'tw-n7'],
        xiaoweiNote: {
          cn: `这个词组（nativism + Yellow Peril）三条线都碰到了，台山华工第 7 节和王清福第 3 节讲得最直接。

定义（考试要会写）：
- **nativism（排外主义）**：优待本土出生者、敌视移民的政治立场。它在经济不景气时最凶——因为人需要一个出气口。
- **Yellow Peril（黄祸）**：把华人 / 亚裔妖魔化为"会吞掉白人世界的瘟疫"的种族主义话语。当时的政治漫画把华人画成长辫、眯眼、龅牙、鼠形的怪物。

我读台山华工那节最有感的一点：同一群人，在几年间从"功臣"变成"罪人"。修最险最累的活时没人愿意干，是华工顶上去的；1870 年代加州经济萧条、白人失业了，反倒说是华工"抢"走了工作。"需要你时是能修长城的好劳力，不需要你时是抢饭碗的黄祸"——这句话是这张卡的灵魂。

具体暴力案例（DBQ 可引）：1871 年洛杉矶华人种族屠杀，暴民一夜打死、吊死至少 17 人（主流数字 18-19 人），是美国史上最大规模私刑屠杀之一。

考点机制链：经济萧条 → nativism 找替罪羊 → 报纸 Yellow Peril 妖魔化 → 街头暴力 → 政客算选票（华人不能投票）→ 把民粹写成法律（1882）。这条因果链是 essay 的骨架。`,
          en: `This pair of terms (nativism + Yellow Peril) shows up in all three lines; the Taishan worker's Node 7 and Wong Chin Foo's Node 3 are the most direct.

Definitions (be able to write these):
- **nativism**: a political stance favoring the native-born and hostile to immigrants. It's fiercest in economic downturns — because people need a vent.
- **Yellow Peril**: racist rhetoric demonizing the Chinese / Asians as "a plague that would devour the white world." Political cartoons of the era drew the Chinese as long-queued, slant-eyed, buck-toothed, rat-like monsters.

What hit me most in the Taishan worker's node: the same people went from "heroes" to "criminals" in a few years. When the most dangerous, exhausting work had no takers, the Chinese stepped up; when California's economy slumped in the 1870s and white men lost work, it was said the Chinese "stole" the jobs. "When you're needed, you're good labor that can build the Great Wall; when you're not, you're the yellow peril stealing the rice bowl" — that line is the soul of this card.

Concrete violence case (citable in DBQ): the 1871 Los Angeles Chinese massacre, where a mob killed and hanged at least 17 people in one night (mainstream figure 18-19), one of the largest mass lynchings in U.S. history.

Causal chain to remember: economic slump → nativism seeks a scapegoat → newspapers' Yellow Peril demonization → street violence → politicians do the vote math (the Chinese can't vote) → write the populism into law (1882). That chain is the skeleton of an essay.`,
        },
      },
    },

    {
      id: 'push-pull-immigration',
      termCn: '移民推拉因素',
      termEn: 'Push-Pull Factors of Immigration',
      standardRef: ['APUSH Period 6 (CED 6.5)', 'CA HSS 8.12'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'taishan-railroad-worker-receiving-end', nodeId: 'tw-n2', context: '台山华工讲到自己为什么离乡：山多田少、揭不开锅、"要活命就得往外走"' },
          { lens: 'leland-stanford', nodeId: 'ls-n3', context: 'Stanford 提到加州 1850s 淘金潮把广东华工引来' },
        ],
      },
      standaloneText: {
        cn: `台山华工第 2 节讲了他"为什么离开家"，但没有用历史课的术语框起来。这里补上 push-pull（推拉因素）这个分析工具——APUSH 考移民时几乎一定会要你用它。

**推拉因素**：解释人为什么从一个地方迁到另一个地方的框架。
- **push factor（推力）**：把人"推"出原居地的负面原因。
- **pull factor（拉力）**：把人"拉"向目的地的正面吸引。

套到台山华工身上：

**推力（中国一侧 / 广东台山）**：
- 地理：台山靠海、山多田少、人多地薄，一家分不到几亩田。
- 经济：年成不好就挨饿，家里揭不开锅。
- 社会传统：广东侨乡"下南洋、闯番邦"的出海谋生传统由来已久——"要活命就得往外走"不是 1860s 才有的，是这片南方土地几代人的活法。

**拉力（美国一侧 / 加州"金山"）**：
- 1849 年加州淘金潮，华工管加州叫"金山"（Gold Mountain）。
- 1860s 中央太平洋铁路招工，工钱在台山人眼里是"天文数字"。

🔗 跨课连接（中国根）：台山华工的根连着中国南方千年的南迁传统。在唐宋中国那段历史里，苏轼晚年被一路贬到岭南、最南到海南——同一片"岭南 / 广东 / 南海边"的土地。台山华工 1860s 漂洋过海，走的是这片南方土地上已经走了很多代人的路。

⚠️ 清坑：不要把华工写成"被骗来的奴隶（卖猪仔）"。多数台山华工是为养家自愿签契约的契约劳工（虽然契约常不公、负债束缚强）——契约劳工 ≠ 跨大西洋奴隶贸易。两者都残酷，但机制不同，不能混为一谈。这是 essay 容易踩的雷。`,
        en: `The Taishan worker's Node 2 explains "why he left home," but doesn't frame it in history-class terms. Here's the push-pull analysis tool — APUSH almost always wants you to use it on immigration questions.

**Push-pull factors**: a framework explaining why people move from one place to another.
- **Push factor**: a negative reason that "pushes" people out of their home.
- **Pull factor**: a positive attraction that "pulls" people toward a destination.

Applied to the Taishan worker:

**Push (China side / Taishan, Guangdong)**:
- Geography: Taishan by the sea, many hills and little field, crowded, thin land — a family could not divide more than a few acres.
- Economy: a bad year meant hunger, the family could not lift the lid off the rice pot.
- Social tradition: the Guangdong overseas-village tradition of going abroad for a living (down to Southeast Asia, off to foreign lands) ran deep — "to live, you must go outward" wasn't new in the 1860s, it was how generations of this southern land lived.

**Pull (America side / California "Gold Mountain")**:
- The 1849 California gold rush; Chinese workers called California "Gold Mountain."
- 1860s Central Pacific recruitment, wages that were an "astronomical sum" to Taishan eyes.

🔗 Cross-topic link (the China root): the Taishan worker's root connects to a thousand years of southern migration in China. In the tang-song-china topic, Su Shi was exiled in old age all the way to Lingnan, as far south as Hainan — the same "Lingnan / Guangdong / by the South Sea" land. When the Taishan worker crossed the ocean in the 1860s, he walked a path many generations of this southern land had already walked.

⚠️ Clear the trap: don't write the workers as "enslaved people tricked into coming." Most Taishan workers were contract laborers who signed willingly to support their families (though the contracts were often unfair and the debt binding strong) — contract labor ≠ the transatlantic slave trade. Both were cruel, but the mechanisms differ; don't conflate them. This is a common essay mistake.`,
      },
      xiaoweiNote: {
        cn: `记忆口诀：**push = 推（家里待不下去）/ pull = 拉（外面看着有希望）**。考移民几乎都用这一对。

我自己读这节时想到一件事：一百多年前离开台山的人里，可能就有谁家某一支的太公太婆。这不是遥远的别人——这就是很多华裔家庭"为什么会在美国"的最早一章。`,
        en: `Mnemonic: **push = pushed out (home can't hold you) / pull = pulled in (the outside looks like hope)**. Almost every immigration question uses this pair.

Reading this node I thought of something: among those who left Taishan a century ago, there might be a great-grandparent of some Chinese American family's branch. These aren't distant strangers — this is the first chapter of "why we're in America" for many Chinese families.`,
      },
    },

    {
      id: 'angel-island',
      termCn: '天使岛移民站',
      termEn: 'Angel Island Immigration Station',
      standardRef: ['APUSH Period 6 (CED 6.7)', 'CA HSS 8.12'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `这个考点故事里完全没讲（故事主要停在 1882-1898），但它是排华法案"怎么执行"的活证据，加州 HSS 特别爱考，我单独补一张卡。

**天使岛移民站（Angel Island Immigration Station）**，1910-1940 年运营，在旧金山湾的一个小岛上。它常被叫做"西岸的埃利斯岛"（Ellis Island）——但两者性质很不一样：
- 东岸的埃利斯岛，主要是"欢迎"欧洲移民进来的关口（虽然也有审查）。
- 西岸的天使岛，主要是"拦截、关押、盘问"亚洲移民、尤其是华人的关口——它是排华法案的执行机器。

为什么需要它？因为排华法案禁华工入境，但有几类华人法律上还能进（比如美国出生的华人的子女）。于是想进来的华人要在天使岛被关押、反复盘问，证明自己"够格"——一关常常是几周到几个月，有的甚至一两年。盘问极细（你村里第几间房朝哪开、你家门槛多高），目的就是挑出"假身份"，把人挡回去。

**纸生仔（paper sons）**：1906 年旧金山大地震烧毁了出生记录，一些华人借机声称自己是"美国公民的儿子"（公民的子女可入境），买来假身份文件入境——这就是"paper sons / 纸生仔"。天使岛的残酷盘问，正是针对这种钻法律缝隙的防堵。

**墙上的诗**：被关押的华人在天使岛木屋的墙上，用中文刻下了大量诗——写思乡、写屈辱、写不甘。这些诗今天还在，是排华历史最动人的一手史料（primary source）之一，也是 DBQ 常用的材料。

🔗 它把抽象的"排华法案"落成了具体的"一个人被关在岛上几个月、对着墙刻诗"的画面——这就是法律落到一个个真人身上的样子。`,
        en: `The story doesn't cover this at all (it mostly stops at 1882-1898), but it's living evidence of how the Exclusion Act was enforced, and California HSS loves to test it, so I'm adding a separate card.

**Angel Island Immigration Station**, operating 1910-1940, on a small island in San Francisco Bay. It's often called "the Ellis Island of the West" — but the two were very different in nature:
- The east coast's Ellis Island was mainly a gateway to "welcome" European immigrants (though it screened too).
- The west coast's Angel Island was mainly a gateway to "intercept, detain, and interrogate" Asian immigrants, especially the Chinese — it was the enforcement machine of the Exclusion Act.

Why was it needed? Because the Exclusion Act barred Chinese laborers, but a few categories of Chinese could still legally enter (such as the children of American-born Chinese). So Chinese trying to enter were detained at Angel Island, interrogated over and over to prove they "qualified" — a stay often ran weeks to months, sometimes a year or two. The questioning was extremely detailed (which way does the third house in your village face, how high is your doorstep) to catch "false identities" and turn people back.

**Paper sons**: the 1906 San Francisco earthquake burned birth records, and some Chinese seized the chance to claim they were "sons of American citizens" (citizens' children could enter), buying false identity documents to get in — this is "paper sons." Angel Island's brutal interrogations were aimed at blocking exactly this exploitation of a legal gap.

**Poems on the walls**: detained Chinese carved many poems in Chinese into the walls of Angel Island's wooden barracks — about homesickness, humiliation, defiance. These poems survive today, one of the most moving primary sources of exclusion history, and common DBQ material.

🔗 It turns the abstract "Exclusion Act" into the concrete image of "a person held on an island for months, carving poems into the wall" — that is what a law looks like when it lands on real individuals one by one.`,
      },
      xiaoweiNote: {
        cn: `老师说天使岛和埃利斯岛最容易"配对考"——你要能一句话说清区别：**埃利斯岛 = 东岸、主要欢迎欧洲移民；天使岛 = 西岸、主要拦截盘问华人，是排华法案的执行点。**

我记得最牢的是墙上的诗——那些人被关着，没别的能做，就在墙上刻下"我也来过、我也是人"。这跟王清福用报纸、台山华工用力气，是同一件事的第三种方式：用诗。`,
        en: `Teacher said Angel Island and Ellis Island are most often "paired" on tests — you need a one-liner on the difference: **Ellis Island = east coast, mainly welcomed European immigrants; Angel Island = west coast, mainly intercepted and interrogated the Chinese, the enforcement point of the Exclusion Act.**

What I remember best are the poems on the walls — those people, held there with nothing else to do, carved into the wall "I was here too, I am a person too." That's the same thing Wong Chin Foo did with a newspaper and the Taishan worker did with his strength, just a third way: with poems.`,
      },
    },

    {
      id: 'chinese-american-identity',
      termCn: '"华裔美国人"身份建构 / 王清福',
      termEn: 'Constructing "Chinese American" Identity / Wong Chin Foo',
      standardRef: ['APUSH Period 6 (CED 6.7)', 'CA HSS 8.12'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'wong-chin-foo',
        nodeIds: ['wcf-n1', 'wcf-n5', 'wcf-n6', 'wcf-n9'],
        xiaoweiNote: {
          cn: `这条整条线（视角二）就是王清福，我读完特别想把他记住——因为他争的那个名字，今天落在我身上。

要点：
- 王清福（Wong Chin Foo），1847 年生于山东，少年被美国传教士带到美国受完整西式教育，英文比很多土生白人还漂亮——这给了他别的华工没有的武器：用美国人自己的语言讲道理。
- **1883 年**他在纽约创办《华洋新报》（The Chinese American），可能是美国史上第一份华人办的英文报纸；报纸名字就是他造的词：**Chinese American（华裔美国人）**。
- 这个词在当时是颗炸弹：主流逻辑认为"Chinese"和"American"互相排斥，华人不可能是美国人。他把两个词焊在一起，公开宣布两个身份可以同时成立。
- 他的核心打法：把独立宣言"人人生而平等"原样印在报上，反问——"人人"里包不包括华人？这叫"用敌人自己的武器打敌人"。
- 1887 年他公开向排华头目 Denis Kearney 下战书辩论。

⚠️ 清坑 + 事实账本提醒：
1. "Chinese American 是现代才有的说法"——错，王清福早在 1883 年就造了。
2. 报纸创办年份是 **1883**，不是 1882（别写混）。
3. 他把独立宣言印在报上反问，是基于他办报立场的概括，不是某一句逐字引文——别当确证语录引用。

🔗 跨课锚：王清福用独立宣言反问美国，和黑人领袖 Frederick Douglass（同代）用同一份独立宣言质问"黑人算不算'人人'"是同一套打法——少数族裔用美国自己写下、却没兑现的承诺，对准写它的人。

考点关键句：王清福活着时几乎输掉每一场具体的仗（法案没废、死后被遗忘），但他造的"Chinese American"这个词活到今天，成了几百万人理直气壮的自我称呼。`,
          en: `This whole line (Lens 2) is Wong Chin Foo, and after reading it I really wanted to remember him — because the name he fought for has come to rest on me.

Key points:
- Wong Chin Foo, born 1847 in Shandong, taken to America as a youth by missionaries and fully Western-educated, spoke English more elegantly than many native-born whites — giving him a weapon other Chinese workers lacked: reasoning with Americans in their own language.
- In **1883** he founded The Chinese American in New York, possibly the first English-language newspaper run by a Chinese person in U.S. history; the paper's name was the term he coined: **Chinese American**.
- The term was a bomb at the time: mainstream logic held "Chinese" and "American" to be mutually exclusive, the Chinese could not be American. By welding the two words together, he publicly declared both identities could hold at once.
- His core move: print the Declaration's "all men are created equal" exactly as it was, then ask back — do the "all" include the Chinese? This is "using the enemy's own weapon against the enemy."
- In 1887 he publicly challenged exclusion leader Denis Kearney to a debate.

⚠️ Clear the trap + fact-ledger reminders:
1. "Chinese American is a modern phrase" — wrong, Wong coined it back in 1883.
2. The newspaper's founding year is **1883**, not 1882 (don't mix them up).
3. His printing the Declaration to ask back is a summary of his editorial stance, not a word-for-word quote — don't cite it as a verified line.

🔗 Cross-topic anchor: Wong using the Declaration to question America is the same move as Black leader Frederick Douglass (same era) using the same Declaration to ask "do Black people count among the 'all'" — minority figures aiming America's own unkept promise back at those who wrote it.

Key exam sentence: Wong Chin Foo lost nearly every concrete fight while alive (the act wasn't repealed, he was forgotten after death), but the term he coined, "Chinese American," lives today as the self-name millions claim with heads held high.`,
        },
      },
    },

    {
      id: 'use-then-exclude-contradiction',
      termCn: '"先利用、再排斥"的内部矛盾',
      termEn: 'The "Use-Then-Exclude" Contradiction',
      standardRef: ['APUSH Period 6 (CED 6.7)', 'AP DBQ rubric'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['ls-n7', 'ls-n10', 'wcf-n6', 'tw-n7', 'tw-n10'],
        xiaoweiNote: {
          cn: `这是把整门课串起来的那个核心矛盾，三条线都指向它——老师说这是 DBQ 的"主论点骨架"。

矛盾是什么：一个标榜"人人生而平等""机会之地"的国家，先用上万华工的命修起东西大动脉，建完之后又立法把他们按种族关在公民权外。同一双手——既建起国家，也排斥建国家的人。

故事里的三个证据点：
- Stanford（视角一第 7 节）：1862 年当加州州长时，在给立法机关的咨文里公开称华人"劣等种族"；三年后 1865 年他的公司又大量招华工——嘴上说"劣等"，账本上靠华人发家；排华浪潮起，连靠华工发家的他也没替没有选票的他们说话。
- 台山华工（视角三第 7 节）："需要你时是能修长城的好劳力，不需要你时是抢饭碗的黄祸。"
- 王清福（视角二第 6 节）：用独立宣言"人人平等"反问——这句话白人写它时没打算算上华人。

⚠️ 事实账本提醒：Stanford"劣等种族"那句的场合，是他 1862 年当州长时**致立法机关的咨文**，不是"就职演说"——写 essay 别写成就职演说，会被史实党挑刺。措辞本身（"劣等种族"）是真史料。

DBQ essay 模板：
1. 承认铁路的真实成就（连接东西海岸、推动工业化）。
2. 指出矛盾：建它的华工被按种族关在公民权外（用 Stanford 的"嘴上劣等、账本靠华人" + "需要时功臣、不需要时罪人"）。
3. 用王清福和台山华工作为"比这个国家更认真对待'人人平等'的人"。
4. 结论：这不是"成就 + 污点"两件事，是同一套逻辑的两面——"把人当可用劳力"既修得成铁路，也排得掉人。"机会之地"是一个对某些人没兑现的承诺。`,
          en: `This is the core contradiction that ties the whole topic together — all three lines point to it, and teacher said it's the "thesis skeleton" of a DBQ.

The contradiction: a country proclaiming "all men are created equal" and "the land of opportunity" first used the lives of ten thousand-plus Chinese workers to build its east-west artery, then, once it was built, passed a law barring them from citizenship by race. The same hands — building the nation, and excluding the people who built it.

Three evidence points from the story:
- Stanford (Lens 1 Node 7): as California governor in 1862, in a message to the legislature, publicly called the Chinese an "inferior race"; three years later in 1865 his company hired Chinese workers in great numbers — calling them "inferior" with his mouth, building his fortune on them in his ledger; when the exclusion tide rose, even a man who got rich off Chinese labor did not speak for people with no votes.
- The Taishan worker (Lens 3 Node 7): "when you're needed, you're good labor that can build the Great Wall; when you're not, you're the yellow peril stealing the rice bowl."
- Wong Chin Foo (Lens 2 Node 6): using the Declaration's "all men are equal" to ask back — a line white men did not mean to include the Chinese when they wrote it.

⚠️ Fact-ledger reminder: the setting of Stanford's "inferior race" line was his 1862 **message to the legislature** as governor, not an "inaugural address" — don't write it as an inaugural address in an essay, the fact-checkers will catch it. The wording itself ("inferior race") is genuine source material.

DBQ essay template:
1. Acknowledge the railroad's real achievement (joining the coasts, driving industrialization).
2. Name the contradiction: the workers who built it were barred from citizenship by race (use Stanford's "inferior in mouth, Chinese in ledger" + "heroes when needed, criminals when not").
3. Use Wong Chin Foo and the Taishan worker as "people who took 'all men are equal' more seriously than the country did."
4. Conclusion: this isn't "achievement + a stain," two things — it's two faces of one logic — "treating people as usable labor" can build a railroad and exclude people too. "The land of opportunity" is a promise unkept for some.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Leland Stanford 1862 年当加州州长时，在给立法机关的咨文里公开说华人是"劣等种族"；可三年后，1865 年，他的中央太平洋铁路又大量招华工，靠他们的命修成了铁路、赚下了办斯坦福大学的财富。

你觉得"嘴上说劣等、账本上靠华人"是矛盾吗？如果 Stanford 本人坐在你面前，他可能怎么替自己解释？`,
      en: `As California governor in 1862, Leland Stanford publicly called the Chinese an "inferior race" in a message to the legislature; yet three years later, in 1865, his Central Pacific Railroad hired Chinese workers in great numbers, built the railroad with their lives, and earned the fortune that founded Stanford University.

Do you think "calling them inferior with his mouth while relying on them in his ledger" is a contradiction? If Stanford were sitting in front of you, how might he try to explain himself?`,
      hintCn: `提示：可以从两个角度想——(1) Stanford 心里可能根本没把华人当作"完整的人"，他要的只是劳力，"劣等"和"好用"在他脑子里不冲突；(2) 或者他知道这是矛盾，但资本逻辑（要快、要赢、要钱）压过了一切，没选票的人在他的政治账本上不值得他冒险。两种解读都站得住。

进阶思考：今天有没有类似的事——某个群体"被需要的时候很受欢迎，不被需要的时候就被推开"？这种逻辑是某个坏人的问题，还是一套制度的问题？`,
      hintEn: `Hint: think from two angles — (1) Stanford may not have regarded the Chinese as "full people" at all; he wanted only labor, and "inferior" and "useful" did not clash in his mind; (2) or he knew it was a contradiction, but capital's logic (speed, winning, money) overrode everything, and people with no votes weren't worth a risk in his political ledger. Both interpretations stand.

Going deeper: is there anything similar today — a group "welcomed when needed, pushed away when not"? Is that logic the problem of one bad person, or of a system?`,
      conceptsActivated: ['transcontinental-railroad-chinese-labor', 'use-then-exclude-contradiction', 'nativism-yellow-peril'],
    },
    {
      id: 'q2',
      cn: `Wong Chin Foo（王清福）活着的时候，几乎输掉了每一场具体的仗——排华法案没废、同胞照样被关在门外、他自己死后还被历史遗忘。但他 1883 年造的那个词"Chinese American（华裔美国人）"，活到了今天，成了几百万人理直气壮的自我称呼。

一个人"输"成这样，你算他输还是赢？如果让你出一道 DBQ 题来讨论这件事，你会怎么提问？`,
      en: `While Wong Chin Foo was alive, he lost nearly every concrete fight — the Exclusion Act wasn't repealed, his people stayed shut out, and he was forgotten by history after his death. But the term he coined in 1883, "Chinese American," lives today as the self-name millions claim with heads held high.

When a person "loses" like this, do you count him as having lost or won? If you were writing a DBQ on this, how would you phrase the question?`,
      hintCn: `提示：DBQ 通常给学生几份 primary source（王清福的报纸版面、当时讽刺他的漫画、今天用"Chinese American"自我介绍的人），让学生分析"用什么时间尺度衡量一个人的成败"。没有标准答案，重要的是用证据。

可能的提问角度：
- "在他自己一生的尺度上 vs 在一百年的尺度上，王清福的努力分别该怎么评价？"
- "一个'输掉了所有具体战役、却赢得了一个身份词'的人，告诉我们历史上的'胜利'是怎么定义的？"

进阶思考：历史上还有谁是这种"活着没看到结果、死后才赢"的人？（提示：很多废奴者、女权先驱、民权运动者都是。）`,
      hintEn: `Hint: a DBQ usually gives students primary sources (Wong's newspaper pages, the cartoons mocking him at the time, people today introducing themselves as "Chinese American") and asks them to analyze "by what time scale do we measure a person's success or failure." No standard answer — what matters is using evidence.

Possible question angles:
- "On the scale of his own lifetime vs the scale of a century, how should Wong Chin Foo's effort be judged in each case?"
- "A person who 'lost every concrete battle yet won an identity word' — what does he tell us about how 'victory' in history is defined?"

Going deeper: who else in history "didn't see the result while alive, won only after death"? (Hint: many abolitionists, women's-rights pioneers, civil-rights activists.)`,
      conceptsActivated: ['chinese-american-identity', 'use-then-exclude-contradiction'],
    },
    {
      id: 'q3',
      cn: `美国《独立宣言》（1776）写"all men are created equal（人人生而平等）"。台山华工用命修起了这个国家的东西大动脉，却被 1882 年的排华法案按种族关在了"人人"之外——他干一辈子活、纳一辈子税，到死都不算"美国人"。

如果这个华工能开口，他会怎么追问写下"人人平等"的那个国家？被排斥的人捡起美国自己写的承诺、对准写它的人——这是最聪明的武器，还是因为他们根本没有别的武器？`,
      en: `The U.S. Declaration of Independence (1776) wrote "all men are created equal." The Taishan worker built this country's east-west artery with his life, yet was shut out of the "all" by race under the 1882 Chinese Exclusion Act — he worked a whole life, paid tax a whole life, and never counted as "American" until death.

If this worker could speak, how would he press the country that wrote "all men are equal"? When the excluded pick up America's own promise and aim it back at those who wrote it — is that the cleverest weapon, or is it because they had no other weapon at all?`,
      hintCn: `提示：这道题没有标准答案，重要的是两边都想到。
- "最聪明的武器"这一面：用对方最神圣、最无法公开否认的话（独立宣言）去戳对方的伤口，对方很难反驳——这是弱者对抗强者时极高明的策略（王清福、Frederick Douglass、后来的 Martin Luther King 都用过）。
- "没有别的武器"这一面：台山华工没有选票（法律不让华人归化）、没有军队、不会英文、连名字都没留下。除了"你们自己写的承诺"，他几乎什么筹码都没有。

进阶思考（尤其给华裔同学）：今天你能用中文也用英文读懂这段历史，本身就是当年那些连名字都没留下的人没敢想过的。他们用一生想证明的"我也是人"，今天落在你身上——这会改变你怎么看"平等"这两个字吗？`,
      hintEn: `Hint: no standard answer — what matters is thinking of both sides.
- The "cleverest weapon" side: using the opponent's most sacred, undeniable words (the Declaration) to prod their wound is hard for them to refute — a brilliant strategy for the weak against the strong (Wong Chin Foo, Frederick Douglass, later Martin Luther King all used it).
- The "no other weapon" side: the Taishan worker had no vote (the law forbade Chinese naturalization), no army, no English, not even a recorded name. Besides "the promise you wrote yourselves," he had almost no leverage at all.

Going deeper (especially for Chinese American students): that you can read this history today in both Chinese and English is something those who left not even a name never dared imagine. The "I too am a person" they wanted to prove with a whole life has come to rest on you — does that change how you see the word "equal"?`,
      conceptsActivated: ['use-then-exclude-contradiction', 'chinese-exclusion-act-1882', 'push-pull-immigration'],
    },
  ],
};

export default notebook;
