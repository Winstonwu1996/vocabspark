// ─── 同伴笔记本架构 v1 · The Cold War Home Front 1947-1957 ────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 11 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（lens+nodeIds，只回忆+提炼）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson) + xiaoweiNote
//          —— standaloneText / xiaoweiNote 一律放卡顶层，绝不嵌进 storyAnchor
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系（3 lens / 11 nodes each）：
//   - investigator-actor (perpetrator-actor)            → HUAC / 忠诚审查 / 那个无解的问题 / Lavender Scare
//   - welch-mediator (lonely-mediator)                  → Army-McCarthy 听证 / Welch 那一问 / 电视 / 谴责
//   - blacklisted-target-receiving-end (receiving-end)  → 黑名单 / 第五修正案 / GI Bill+Levittown+redlining / 排华桥
//   - notebook 补完 DBQ named evidence: Smith Act / Dennis v. US / McCarran Act /
//     Rosenberg+Hiss 间谍案 / Shelley v. Kraemer / containment 的国内代价
//
// 课纲对齐（P1#1 修正 —— Dr. Reed 审）：
//   - 本课主体（HUAC/忠诚审查/黑名单/Lavender Scare/间谍案）= APUSH CED Topic 8.3 The Red Scare
//   - 郊区化那条线（GI Bill/Levittown/redlining/suburbanization）= APUSH CED Topic 8.4 postwar economy & suburbanization
//   - containment 对外维度见 Topic 8.2（本课讲它的国内代价）
//   - CA HSS 11.8-11.9（冷战与战后美国）
//
// 事实地基：对账 cold-war-home-front-1950-factledger.md（27 claim 全 verified）
//   - Wheeling 数字 205/57 自相矛盾、名单未公开 —— 引用时必须带此标注
//   - "确有间谍 vs. 恐惧伤无辜"两面同体，全卡不替学生下结论
//   - §8 中国对照不排名、不等同，只看机制（Rule 0 本课最高敏感维度）
//
// schemaVersion: 1 · notebookVersion: cold-war-home-front-1950-v1

export var notebook = {
  topicId: 'cold-war-home-front-1950',
  topicNameCn: '冷战国内战线 1950',
  topicNameEn: 'The Cold War Home Front 1950',
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
    cn: `今天老师说我们要学冷战的"国内战线"（1947-1957）。她说这不是讲美苏在海外怎么对抗,
而是讲冷战的恐惧回到美国家里，付出了什么代价：麦卡锡主义、黑名单、忠诚审查。
她提醒我们：这一课，华裔家庭尤其该懂,因为"把恐惧扣到某个群体头上"的逻辑，
美国当年用在过华人身上，冷战时又用在"疑似共产党人"身上。

她给了一张纸，上面写着这些名字和词：

人物：Joseph McCarthy（麦卡锡）、Joseph N. Welch（韦尔奇）、
Alger Hiss（希斯）、Julius & Ethel Rosenberg（罗森堡夫妇）

词：McCarthyism（麦卡锡主义）、Second Red Scare（第二次红色恐慌）、
HUAC（非美活动调查委员会）、blacklist（黑名单）、Loyalty Program（忠诚审查）、
Fifth Amendment（第五修正案）、GI Bill（军人复员法案）、Levittown（莱维敦）、
redlining（红线政策）、containment（遏制政策）。

我先记下来，等下读三个故事——举着名单的调查员、在听证会上反问的律师 Welch、
还有一个被一张名单抹掉的人（黑名单受害者 + 被挡在郊区门外的黑人退伍军人）,
读完再回来对照这张单子，看我能不能解释这些词。

老师还说了一句我抄在第一页的话："这一课最难的，是同时记住两件事,那个年代确实有苏联间谍，
而恐惧又确实毁掉了成千上万从没被定罪的无辜者。别急着选边，先看清恐惧是在哪一步，
从合理的警惕，滑向了碾碎无辜。"`,
    en: `Today my teacher said we're learning the Cold War "home front" (1947-1957). She said
this isn't about how the US and USSR fought overseas; it's about what it cost when Cold War
fear came back into American homes: McCarthyism, the blacklist, loyalty checks. She reminded
us that Chinese-American families especially should understand this, because the logic of
"pinning fear on one group" was once used on Chinese people, and in the Cold War it was used
on "suspected communists."

She handed out a sheet with these names and terms:

People: Joseph McCarthy, Joseph N. Welch, Alger Hiss, Julius & Ethel Rosenberg

Terms: McCarthyism, Second Red Scare, HUAC (House Un-American Activities Committee),
blacklist, Loyalty Program, Fifth Amendment, GI Bill, Levittown, redlining, containment.

Let me write these down. After I read the three stories (the investigator holding the list,
the lawyer Welch who asked one question at the hearing, and the person erased by a list,
who is both a blacklist victim and a Black veteran shut out of the suburbs), I'll come back
and check whether I can explain each term.

Teacher also said one line I copied onto the first page: "The hardest thing in this lesson is
holding two truths at once: there really were Soviet spies in that era, and fear really did
destroy thousands of innocent people never convicted of anything. Don't rush to pick a side;
first see clearly at which step fear slid from reasonable caution into crushing the innocent."`,
    keyTerms: [
      { cn: '麦卡锡主义', en: 'McCarthyism' },
      { cn: '第二次红色恐慌', en: 'Second Red Scare' },
      { cn: '非美活动调查委员会', en: 'HUAC (House Un-American Activities Committee)' },
      { cn: '黑名单', en: 'blacklist' },
      { cn: '忠诚审查计划', en: 'Loyalty Program (Executive Order 9835)' },
      { cn: '第五修正案', en: 'Fifth Amendment' },
      { cn: '好莱坞十君子', en: 'Hollywood Ten' },
      { cn: '史密斯法', en: 'Smith Act' },
      { cn: '麦卡伦国内安全法', en: 'McCarran Internal Security Act' },
      { cn: '淡紫色恐慌', en: 'Lavender Scare' },
      { cn: '遏制政策', en: 'containment' },
      { cn: '军人复员法案', en: 'GI Bill' },
      { cn: '莱维敦 / 郊区化', en: 'Levittown / suburbanization' },
      { cn: '红线政策', en: 'redlining' },
      { cn: '种族限制性契约', en: 'racial covenant' },
      { cn: '谴责', en: 'censure' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '约瑟夫·麦卡锡',
        nameEn: 'Joseph McCarthy',
        ipa: '/ˈdʒoʊzəf məˈkɑːrθi/',
        roleCn: '威斯康星州参议员，1950 年 Wheeling 演讲举起"205 人名单"，红色恐慌最著名的面孔，1954 年被参议院谴责',
        roleEn: 'Wisconsin senator whose 1950 Wheeling speech held up a "list of 205," the most famous face of the Red Scare; censured by the Senate in 1954',
        mustKnow: true,
        audioKey: 'joseph-mccarthy',
      },
      {
        nameCn: '约瑟夫·韦尔奇',
        nameEn: 'Joseph N. Welch',
        ipa: '/ˈdʒoʊzəf wɛltʃ/',
        roleCn: '陆军特别法律顾问，1954 年 Army-McCarthy 听证会上一句"你还有没有起码的体面"让麦卡锡当众破功',
        roleEn: 'The Army\'s special counsel whose 1954 line "have you no sense of decency" broke McCarthy in public at the Army-McCarthy hearings',
        mustKnow: true,
        audioKey: 'joseph-welch',
      },
      {
        nameCn: '阿尔杰·希斯',
        nameEn: 'Alger Hiss',
        ipa: '/ˈældʒər hɪs/',
        roleCn: '前国务院高官，1950 年因伪证罪定罪；间谍指控至今有争议，Venona 解密后多倾向证实',
        roleEn: 'A former senior State Department official convicted of perjury in 1950; the espionage charge is still debated, with the Venona decrypts leaning toward confirming it',
        mustKnow: true,
        audioKey: 'alger-hiss',
      },
      {
        nameCn: '罗森堡夫妇',
        nameEn: 'Julius & Ethel Rosenberg',
        ipa: '/ˈdʒuːliəs ˈɛθəl ˈroʊzənbɜːrɡ/',
        roleCn: '因被控向苏联传原子弹机密，1953 年被电椅处死；冷战中唯一因间谍罪被处死的美国平民（Julius 的间谍活动后被 Venona 很大程度证实，Ethel 参与程度至今争议）',
        roleEn: 'Executed in the electric chair in 1953 for allegedly passing atomic secrets to the Soviets; the only American civilians executed for spying in the Cold War (Julius\'s spying was largely confirmed by Venona; Ethel\'s role is still debated)',
        mustKnow: true,
        audioKey: 'rosenbergs',
      },
      {
        nameCn: '哈里·杜鲁门',
        nameEn: 'Harry Truman',
        ipa: '/ˈhæri ˈtruːmən/',
        roleCn: '总统，1947 年签 EO 9835 建立忠诚审查计划，却又否决 McCarran Act（否决被国会推翻）',
        roleEn: 'President who signed EO 9835 creating the Loyalty Program in 1947, yet vetoed the McCarran Act (the veto was overridden by Congress)',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '德怀特·艾森豪威尔',
        nameEn: 'Dwight Eisenhower',
        ipa: '/dwaɪt ˈaɪzənˌhaʊər/',
        roleCn: '总统，1953 年签 EO 10450，把同性恋定为安全风险，使 Lavender Scare 法规化',
        roleEn: 'President who signed EO 10450 in 1953, defining homosexuality as a security risk and formalizing the Lavender Scare',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '达尔顿·特朗博',
        nameEn: 'Dalton Trumbo',
        ipa: '/ˈdɔːltən ˈtrʌmboʊ/',
        roleCn: '好莱坞十君子之一，坐牢后多年只能用假名偷偷写剧本，黑名单标志性受害者',
        roleEn: 'One of the Hollywood Ten who, after prison, wrote scripts under fake names for years, the iconic blacklist victim',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '威廉·莱维特',
        nameEn: 'William Levitt',
        ipa: '/ˈwɪljəm ˈlɛvɪt/',
        roleCn: 'Levittown 开发商，"只售白人"政策的代表人物',
        roleEn: 'The Levittown developer, the face of the "whites only" policy',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'mccarthyism-second-red-scare',
      termCn: '麦卡锡主义与第二次红色恐慌',
      termEn: 'McCarthyism & the Second Red Scare',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'CA HSS 11.8', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'investigator-actor',
        nodeIds: ['cw-investigator-n1', 'cw-investigator-n4'],
        xiaoweiNote: {
          cn: `三个故事都立在这个上面，调查员那一遍第 1、4 节最直接。
1950 年 2 月 9 日，麦卡锡（Joseph McCarthy）在西弗吉尼亚 Wheeling 举起一张纸，
说手里有"205 个国务院里的共产党"。

老师特别提醒一个陷阱（DBQ 引用必须带）：**那张纸他从没公开过，数字第二天就改成 57，
再没对上过，名单到底存不存在没人能证实**。引用 Wheeling 一定要写"数字自相矛盾、名单未公开"。

考点关键句：**McCarthyism = 靠无证据的指控、恐惧和连坐打击异己**;
**Second Red Scare（第二次红色恐慌）约 1947-1957**。

最容易答错的一点：麦卡锡**不是**红色恐慌的发动机,1947 年的忠诚审查、好莱坞十君子都早于他。
他是最响的喇叭，用他的名字命名，是因为他最有代表性，不是因为他一手造成。`,
          en: `All three stories rest on this; the investigator's Lens Nodes 1 and 4 are the most direct.
On February 9, 1950, McCarthy held up a piece of paper in Wheeling, West Virginia, claiming
"205 communists in the State Department."

Teacher flagged a trap (you must carry it in a DBQ): **he never made the paper public, the
number changed to 57 the next day and never matched again, and no one could prove the list
existed.** When you cite Wheeling, always write "the number was self-contradictory and the
list was never made public."

Key exam sentence: **McCarthyism = attacking opponents with unproven accusations, fear, and
guilt by association**; the **Second Red Scare ran roughly 1947-1957.**

The most common mistake: McCarthy was **not** the engine of the Red Scare; the 1947 loyalty
checks and the Hollywood Ten came before him. He was the loudest megaphone, and it bears his
name because he was the most representative, not because he caused it alone.`,
        },
      },
    },

    {
      id: 'huac-blacklist-hollywood-ten',
      termCn: 'HUAC、黑名单与好莱坞十君子',
      termEn: 'HUAC, the Blacklist & the Hollywood Ten',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'CA HSS 11.8', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'blacklisted-target-receiving-end',
        nodeIds: ['cw-investigator-n3', 'cw-blacklisted-n5'],
        xiaoweiNote: {
          cn: `调查员第 3 节 + 被划掉者第 5 节都讲到。**HUAC**（House Un-American Activities
Committee，众议院非美活动调查委员会）传唤好莱坞编剧、导演，逼问他们的政治信仰。

**好莱坞十君子（Hollywood Ten）**：十个人拒绝回答，1947 年被判藐视国会、入狱、上黑名单。
这里有个老师反复强调、AP 也爱考的辨析点：
**十君子援引的是第一修正案（言论与结社自由），不是后来更常见的第五修正案。**
为什么后来人改用第五？因为援引第一修正案抗辩失败了（十君子真坐了牢），
而援引第五修正案"有权不自证其罪"在法律上更站得住,代价是被报纸骂"Fifth Amendment Communist"。

考点关键句：**blacklist（黑名单）最可怕的地方,不需要任何法庭定罪，一个名字上了名单，
职业生涯就结束了**。被划掉者第 5 节里那句最戳人："我没被判任何罪，可我失去了谋生的能力。"
像 Dalton Trumbo 那样的，多年只能用假名偷偷写剧本。`,
          en: `The investigator's Node 3 and the erased one's Node 5 both cover this. **HUAC** (the
House Un-American Activities Committee) summoned Hollywood screenwriters and directors and
grilled them on their politics.

**The Hollywood Ten**: ten people refused to answer; in 1947 they were convicted of contempt
of Congress, imprisoned, and blacklisted. Here is a distinction the teacher kept stressing,
and one AP loves to test: **the Ten invoked the First Amendment (free speech and association),
not the Fifth Amendment that became more common later.** Why did people switch to the Fifth?
Because the First Amendment defense failed (the Ten actually went to prison), while the Fifth's
"right not to incriminate yourself" stood up better in law, at the cost of being smeared as a
"Fifth Amendment Communist" in the papers.

Key exam sentence: **the scariest thing about a blacklist is that it needs no court conviction;
once a name lands on the list, a career is over.** The most piercing line, in the erased one's
Node 5: "I was convicted of no crime, yet I lost the ability to earn a living." People like
Dalton Trumbo wrote under fake names for years.`,
        },
      },
    },

    {
      id: 'loyalty-program-eo-9835',
      termCn: '忠诚审查计划（EO 9835）',
      termEn: 'Loyalty Program (Executive Order 9835)',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'CA HSS 11.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'investigator-actor',
        nodeIds: ['cw-investigator-n3', 'cw-blacklisted-n3'],
        xiaoweiNote: {
          cn: `调查员第 3 节 + 被划掉者第 3 节。1947 年，连反对麦卡锡的杜鲁门总统，
都签了一道命令（**Executive Order 9835**），建立**联邦雇员忠诚审查计划（Loyalty Program）**,
三百多万政府雇员被一个个查过一遍。

老师说这套规矩有两点最该记住（AP 爱考"机制怎么伤人"）：
1. **不需要犯罪**,只要被怀疑"不忠诚"、跟某个"颠覆性组织"有牵连，就可能丢饭碗。
2. **举证责任反转**,不是政府证明你有罪，是你得自己证明自己清白。被划掉者那句反问最到位：
   "你怎么证明'我心里从没想过要推翻政府'？"

考点关键句：忠诚审查计划证明了一件事,红色恐慌**在麦卡锡 1950 年登场之前就已开动**。
而且它最危险的不是抓到了多少真间谍，是它用"自证清白"这套反程序，
把恐惧变成了一种人人自危的日常。`,
          en: `Investigator's Node 3 and the erased one's Node 3. In 1947, even President Truman,
who opposed McCarthy, signed an order (**Executive Order 9835**) creating a federal **Loyalty
Program** that checked more than three million government workers, one by one.

Teacher said two things matter most here (AP loves testing "how the mechanism harms people"):
1. **No crime needed** — just being suspected of being "disloyal" or tied to a "subversive
   group" could cost your job.
2. **The burden was flipped** — the government did not prove you guilty; you had to prove your
   own innocence. The erased one's question nails it: "How do you prove 'I never once thought
   of overthrowing the government' inside my own heart?"

Key exam sentence: the Loyalty Program proves one thing — the Red Scare **was already running
before McCarthy arrived in 1950.** Its real danger was not how many real spies it caught, but
how its "prove your innocence" anti-procedure turned fear into a daily climate of self-suspicion.`,
        },
      },
    },

    {
      id: 'fifth-amendment-loyalty-hearings',
      termCn: '第五修正案与那个无解的问题',
      termEn: 'The Fifth Amendment & the No-Win Question',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'AP US Gov — Bill of Rights', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'investigator-actor',
        nodeIds: ['cw-investigator-n5', 'cw-blacklisted-n4'],
        xiaoweiNote: {
          cn: `调查员第 5 节是全课最冷的一节。调查员手里最有力的武器不是证据，是一个问题：
**"你现在是、或曾经是共产党员吗？"**

为什么这一问怎么答都输？我背成三条：
- **承认** → 完了，明天就上黑名单。
- **否认** → 万一查出你年轻时去过一次左翼读书会，告你伪证罪（perjury，宣誓后说谎）。
- **援引第五修正案沉默** → 第五修正案本是宪法给每个人"有权不自证其罪"的保护，
  可报纸把你叫"Fifth Amendment Communist"，**你的沉默反倒成了你有罪的证据**。

考点关键句（DBQ"安全 vs 自由"高频）：这个时代**把宪法本身,那条本来保护无辜者的权利，
掉过头来变成了定罪的工具**。这是红色恐慌对"自由"最深的一道扭曲。

清坑：援引第五修正案**不等于**承认有罪,它是宪法给每个人的正当权利。
把"援引第五"当成有罪证据，本身就是这个时代的病。`,
          en: `The investigator's Node 5 is the coldest in the course. His strongest weapon was not
evidence but a question: **"Are you now, or have you ever been, a member of the Communist Party?"**

Why does every answer lose? I memorize three branches:
- **Admit it** → finished, on the blacklist tomorrow.
- **Deny it** → if they dig up one left-wing reading group from your youth, they charge you
  with perjury (lying under oath).
- **Invoke the Fifth Amendment and stay silent** → the Fifth is the constitutional right "not
  to incriminate yourself," yet the papers call you a "Fifth Amendment Communist," and **your
  silence becomes proof of your guilt.**

Key exam sentence (high-frequency for the DBQ "security vs. liberty"): this era **turned the
Constitution itself — a right meant to protect the innocent — into a tool to convict them.**
That is the Red Scare's deepest distortion of "freedom."

Myth-buster: invoking the Fifth does **not** mean admitting guilt; it is everyone's lawful
constitutional right. Treating "taking the Fifth" as proof of guilt is itself the era's disease.`,
        },
      },
    },

    {
      id: 'lavender-scare',
      termCn: '淡紫色恐慌',
      termEn: 'The Lavender Scare',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'CA HSS 11.8'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'investigator-actor',
        nodeIds: ['cw-investigator-n7'],
        xiaoweiNote: {
          cn: `调查员第 7 节。恐惧一旦获得授权，就停不下来,它会去找下一个"不可靠的人"。
1950 年起，成千上万名联邦雇员因为**被怀疑是同性恋**被解雇或被逼辞职，
理由是"容易被敌人敲诈""是安全风险"。1953 年艾森豪威尔的 **Executive Order 10450**
把这一条正式写进规矩。这就是和红色恐慌并排着跑的另一场清洗,**Lavender Scare（淡紫色恐慌）**。

考点关键句：Lavender Scare 揭穿了这台机器真正的逻辑,它**从不只是为了抓某一个具体的间谍**，
它在制造一种气氛,让任何"与众不同"的人（左翼、移民、同性恋者）都自动变得可疑、可被清除。

记忆锚：Red Scare 抓"红"（共产党），Lavender Scare 抓"淡紫"（同性恋）,
同一台机器，两种猎物，证明恐惧政治会不断扩大打击面。`,
          en: `The investigator's Node 7. Once fear is given power, it cannot stop; it hunts for the
next "unreliable" person. From 1950, thousands of federal workers were fired or forced to
resign **on suspicion of being gay**, the reason given being "open to blackmail" and "a
security risk." In 1953, Eisenhower's **Executive Order 10450** wrote this formally into the
rules. This was the other purge running alongside the Red Scare: the **Lavender Scare.**

Key exam sentence: the Lavender Scare exposes the machine's real logic — it was **never only
about catching one specific spy**; it manufactured an atmosphere in which anyone "different"
(leftists, immigrants, gay people) became automatically suspect and removable.

Memory anchor: the Red Scare hunted "red" (communists), the Lavender Scare hunted "lavender"
(gay people) — same machine, two preys, proof that fear politics keeps widening its target.`,
        },
      },
    },

    {
      id: 'suburbanization-gibill-redlining',
      termCn: '郊区化：GI Bill、Levittown 与 redlining',
      termEn: 'Suburbanization: GI Bill, Levittown & Redlining',
      standardRef: ['APUSH CED Topic 8.4 (postwar economy & suburbanization)', 'CA HSS 11.8', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'blacklisted-target-receiving-end',
        nodeIds: ['cw-welch-n9', 'cw-blacklisted-n6'],
        xiaoweiNote: {
          cn: `这是本课**另一条线**（落在 APUSH Topic 8.4，不是红色恐慌那条 8.3）。
Welch 第 9 节 + 被划掉者第 6 节讲得最清楚。

战后美国一边收缩自由，一边用繁荣造"美国梦"：
- **GI Bill（军人复员法案，1944）**：给退伍军人上大学、买房的钱。
- **Levittown（莱维敦，1947 起）**：Long Island 上流水线盖出的成千上万套郊区独栋房，
  让白人退伍军人买得起,**郊区化（suburbanization）**爆发。

可这个梦从设计上就带一条**颜色线**：
- 购房合同白纸黑字写"只售白人"（**racial covenant 种族限制性契约**）。
- 银行用 **redlining（红线政策）**,在地图上把黑人住的区域圈成红色，红圈里房贷一律不批。

考点关键句（DBQ 高频）：**同一份 GI Bill、同一个 Levittown，对白人和黑人退伍军人是两种命运**。
这条颜色线固化成了延续至今的**种族财富鸿沟（racial wealth gap）**。
高分写法：把"谁享受到美国梦、谁被挡门外"和"谁被恐惧伤害"两条线交叉分析。`,
          en: `This is the course's **other thread** (it falls under APUSH Topic 8.4, not the Red
Scare's 8.3). Welch's Node 9 and the erased one's Node 6 are the clearest.

Postwar America narrowed freedom with one hand and built the "American Dream" with the other:
- **GI Bill (Servicemen's Readjustment Act, 1944)**: money for veterans' college and homes.
- **Levittown (from 1947)**: thousands of assembly-line suburban houses on Long Island that
  white veterans could afford — **suburbanization** exploded.

But the dream carried a **color line** by design:
- Home contracts said, in black and white, "whites only" (a **racial covenant**).
- Banks used **redlining**: on the map they circled Black neighborhoods in red, and inside the
  red circle, every home loan was refused.

Key exam sentence (high-frequency DBQ): **the same GI Bill and the same Levittown meant two
different fates for white and Black veterans.** That color line hardened into the **racial
wealth gap** that lasts to this day. High-scoring move: cross-analyze "who got the American
Dream vs. who was shut out" with "who was harmed by fear."`,
        },
      },
    },

    {
      id: 'army-mccarthy-welch-television',
      termCn: 'Army-McCarthy 听证、Welch 那一问与电视',
      termEn: 'Army-McCarthy Hearings, Welch & Television',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'CA HSS 11.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'welch-mediator',
        nodeIds: ['cw-welch-n6', 'cw-welch-n7'],
        xiaoweiNote: {
          cn: `Welch 那一遍整条线就是这个，第 6、7 节是高潮。1954 年麦卡锡转向陆军，
指控军队也窝藏共产党，引发 **Army-McCarthy 听证会**,而这一次，整场**全国电视直播**。

1954 年 6 月 9 日，麦卡锡为反击 Welch，点名他事务所一个年轻律师"与共产党外围组织有牵连"。
Welch 没提高声音、没谈意识形态、没摆证据，只问了一句载入史册的话：
**"Have you no sense of decency?"（你还有没有起码的体面？）** 全场寂静，旁听席响起掌声。

同年 12 月，参议院以压倒多数**谴责（censure）**麦卡锡，他迅速失势，1957 年去世。

考点关键句：**电视在这一课里有双重角色**,几年来它替麦卡锡放大恐惧，
这一次却让全国人民同时看清了他真实的样子，让恐惧露出丑陋的真容。
清坑：**不是 Welch 一个人扳倒了麦卡锡**,真正让他垮的是那台电视、几千万看清的眼睛、
和那个时代对没完没了"猎巫"的厌倦。`,
          en: `Welch's whole Lens is this; Nodes 6 and 7 are the climax. In 1954 McCarthy turned on
the Army, charging communists hid in the military too, triggering the **Army-McCarthy
hearings** — and this time the whole thing was **broadcast live across the nation.**

On June 9, 1954, to strike back at Welch, McCarthy named a young lawyer in his firm as "tied
to a communist front group." Welch did not raise his voice, did not talk ideology, did not
lay out evidence; he asked only the line that went into history: **"Have you no sense of
decency?"** The room went silent, and the gallery broke into applause.

That December, the Senate **censured** McCarthy by an overwhelming majority; he fell fast and
died in 1957.

Key exam sentence: **television had a double role in this lesson** — for years it amplified
McCarthy's fear, but this time it let the whole nation see him clearly at once, letting fear
show its ugly true face. Myth-buster: **Welch did not bring McCarthy down alone**; what truly
collapsed him was that television, the tens of millions of eyes that finally saw clearly, and
the era's weariness with endless "witch hunts."`,
        },
      },
    },

    {
      id: 'smith-act-dennis',
      termCn: '史密斯法与 Dennis v. United States',
      termEn: 'The Smith Act & Dennis v. United States',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
      },
      standaloneText: {
        cn: `**Smith Act（史密斯法，1940）** 故事里只在 Welch 第 3 节"法律一步步收紧"一句带过，
没展开,但它是 DBQ 写"红色恐慌的法律机制"时最常引的法条之一，要单独掌握。

**它是什么？** Smith Act 让**"鼓吹用暴力推翻政府"入罪**,注意，它惩罚的是"鼓吹"（言论），
而不是真的动手。这正是它和言论自由的张力所在。

**怎么被用的？** 1949 年，11 名美国共产党领袖据 Smith Act 被定罪。
他们上诉到最高法院,于是有了 **Dennis v. United States（1951）**。
1951 年 6 月，最高法院**维持了对共产党领袖的定罪**,理由是：
共产党"鼓吹暴力革命"构成"明显而即刻的危险"，政府不必等到真发生才能出手。

**为什么是 DBQ 高频 named evidence？** 因为 Dennis 案让你看见,
**连最高法院，在红色恐慌最热的时候，也站到了"安全"那一边**,
它证明对公民自由的收缩不只是麦卡锡一个人的胡来，而是被整套国家机器（包括司法）背书过的。
（后来 1957 年 Yates v. United States 收窄了 Dennis，但本课时段内 Dennis 是主基调。）

故事连接：Welch 第 3 节那句"1951 年最高法院在 Dennis 案里维持了对共产党领袖的定罪"
就是这张卡的出处,notebook 把案情补全。`,
        en: `The **Smith Act (1940)** is only mentioned in passing in Welch's Node 3, in the line
about "the law tightening step by step" — not unpacked. But it is one of the most-cited laws
for the DBQ "legal machinery of the Red Scare," so master it on its own.

**What is it?** The Smith Act made it a crime to **"advocate overthrowing the government by
force"** — note, it punished "advocacy" (speech), not the act itself. That is exactly its
tension with free speech.

**How was it used?** In 1949, eleven leaders of the American Communist Party were convicted
under the Smith Act. They appealed to the Supreme Court, producing **Dennis v. United States
(1951).** In June 1951 the Court **upheld the convictions**, reasoning that the Party's
"advocacy of violent revolution" was a "clear and present danger," so the government did not
have to wait for it to actually happen.

**Why is it high-frequency DBQ named evidence?** Because Dennis shows you that **even the
Supreme Court, at the hottest point of the Red Scare, sided with "security."** It proves the
narrowing of civil liberties was not just McCarthy freelancing, but endorsed by the whole
state machine, including the judiciary. (Yates v. United States narrowed Dennis in 1957, but
within this lesson's window Dennis is the keynote.)

Story link: Welch's Node 3 line "in 1951, in the Dennis case, the Supreme Court upheld the
conviction of communist leaders" is the source of this card; the notebook fills in the case.`,
      },
      xiaoweiNote: {
        cn: `老师说 DBQ 写"安全 vs 自由"时，最爱引的法律证据就是 Smith Act + Dennis,
因为它把"连法院都站到安全那边"这件事钉死了。
我的记忆链：**Smith Act（罚"鼓吹推翻"言论）→ 1949 定罪 11 名党领袖 → Dennis 案最高法院维持（1951）**。
口诀：Smith 立法，Dennis 背书,言论本身被当成了"明显而即刻的危险"。`,
        en: `Teacher said the favorite legal evidence for a "security vs. liberty" DBQ is the Smith
Act plus Dennis, because it nails down that "even the courts sided with security." My memory
chain: **Smith Act (punishes "advocating overthrow" speech) → 1949 conviction of 11 Party
leaders → Dennis upholds it at the Supreme Court (1951).** Mnemonic: Smith legislates, Dennis
endorses — speech itself was treated as a "clear and present danger."`,
      },
    },

    {
      id: 'mccarran-internal-security-act',
      termCn: '麦卡伦国内安全法',
      termEn: 'McCarran Internal Security Act',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
      },
      standaloneText: {
        cn: `**McCarran Internal Security Act（麦卡伦国内安全法，1950）** 在 Welch 第 3 节
"法律收紧链"里点了名，但没展开,它是 DBQ named evidence，单独掌握一下。

**它要求什么？** 共产党及"共产主义阵线"组织必须**向政府登记**，
并授权在国家紧急状态下**拘留**被认为可能从事间谍/破坏活动的嫌疑人。

**最该记的一个细节（AP 爱考"行政与立法之争"）：**
总统杜鲁门**否决（veto）**了这部法,他在否决信里警告，这是
**"自 1798 年《煽动叛乱法》以来对言论、出版、集会自由最大的威胁"**。
但国会随即**越过他的否决（override）**，照样通过。

**为什么这条很重要？** 因为它打破了一个常见误解,以为反共全是麦卡锡那种人在闹。
事实是：**连反对它的总统都拦不住国会**,1950 年的国会本身，
就被恐惧推着一路向"安全"倾斜。这正是"恐惧政治"如何渗透进正常立法程序的活例子。

故事连接：Welch 第 3 节"1950 年国会越过杜鲁门的否决通过 McCarran Act 要求共产党组织登记"
就是这张卡的锚点。`,
        en: `The **McCarran Internal Security Act (1950)** is named in Welch's Node 3 "law-tightening
chain" but not unpacked; it is DBQ named evidence, so master it on its own.

**What did it require?** Communist and "communist front" organizations had to **register**
with the government, and it authorized the **detention** of suspected spies or saboteurs in a
national emergency.

**The detail to remember most (AP loves the "executive vs. legislative" clash):**
President Truman **vetoed** the act, warning in his veto message that it was **"the greatest
danger to freedom of speech, press, and assembly since the Alien and Sedition Laws of 1798."**
But Congress promptly **overrode** his veto and passed it anyway.

**Why does this matter?** Because it breaks a common misconception that anti-communism was all
just McCarthy-types acting up. In fact, **even the president who opposed it could not stop
Congress** — the 1950 Congress itself was pushed toward "security" by fear. It is a live
example of how fear politics seeps into ordinary lawmaking.

Story link: Welch's Node 3 line "in 1950, Congress overrode Truman's veto and passed the
McCarran Act, requiring communist groups to register" is this card's anchor.`,
      },
      xiaoweiNote: {
        cn: `老师说这条卡的"金句"是杜鲁门否决信里那句"自 1798 年《煽动叛乱法》以来最大的威胁",
DBQ 引一手文献时特别好用。
我的记忆点：**杜鲁门否决 → 国会越过否决照样通过**,连总统都拦不住，
说明 1950 年的恐惧已经大到推着整个立法机器走。
别混：McCarran 是"登记 + 紧急拘留"，Smith Act 是"罚鼓吹推翻政府的言论",两条不一样。`,
        en: `Teacher said this card's "money quote" is Truman's veto line, "the greatest danger
since the Alien and Sedition Laws of 1798" — great for citing a primary source in a DBQ. My
memory point: **Truman vetoes → Congress overrides and passes it anyway** — even the president
could not stop it, showing 1950's fear was large enough to push the whole legislature. Don't
mix up: McCarran is "registration + emergency detention," the Smith Act is "punishing speech
that advocates overthrow" — two different things.`,
      },
    },

    {
      id: 'rosenberg-hiss-espionage',
      termCn: 'Rosenberg 与 Hiss 间谍案',
      termEn: 'The Rosenberg & Hiss Espionage Cases',
      standardRef: ['APUSH CED Topic 8.3 (Red Scare)', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
      },
      standaloneText: {
        cn: `这两个案子在故事里只当名字出现（被划掉者第 10 节用"确有间谍"的论据点了 Rosenberg），
没讲案情,但它们是本课**最重要的"威胁是真的"证据**，必须单独掌握。
没有它们，你就答不了 DBQ 的核心张力："既然确有间谍，搜查到底错在哪？"

**Alger Hiss 案（1948-1950）：** 前国务院高官，被前共产党员 Whittaker Chambers 指控
当过共产党、传过密件，证据据说藏在一只挖空的南瓜里（**"Pumpkin Papers" 南瓜文件**）。
间谍罪已过追诉期，所以 1950 年 1 月他以**伪证罪（perjury）**被定罪判刑。
这案子是关键,它让"政府里真有间谍"从猜测变成法庭事实，给后来所有怀疑提供了弹药。

**Rosenberg 夫妇案（1950-1953）：** Julius 与 Ethel Rosenberg 被控把**原子弹机密**传给苏联，
1951 年定罪、判死刑，**1953 年 6 月 19 日在 Sing Sing 监狱被电椅处死**,
他们是**冷战中唯一因间谍罪被处死的美国平民**。

**Rule 0 必须带的克制（老师反复强调）：** 1990 年代 **Venona** 解密电报公开后，
**Julius 的间谍活动很大程度被证实，但 Ethel 的参与程度至今仍有争议**。
写这两个案子，既不能说"全是冤案"（抹掉真渗透），也不能说"所以反共全对"（洗白对无辜者的摧毁）。

故事连接：被划掉者第 10 节用 Hiss、Rosenberg 当"那年代确实有苏联间谍"的论据,
notebook 把案情、Pumpkin Papers、1953 处决、Venona 争议补全。`,
        en: `These two cases appear only as names in the story (the erased one's Node 10 cites the
Rosenbergs as evidence that "there really were spies"), without the case details. But they are
the course's **most important "the threat was real" evidence** and must be mastered on their
own. Without them you cannot answer the DBQ's core tension: "if there really were spies, what
exactly was wrong with the searching?"

**The Alger Hiss case (1948-1950):** a former senior State Department official accused by
ex-communist Whittaker Chambers of having been a communist and passing secret documents, with
evidence said to be hidden in a hollowed-out pumpkin (the **"Pumpkin Papers"**). The espionage
statute of limitations had run out, so in January 1950 he was convicted of **perjury** instead.
This case was pivotal: it turned "there really are spies in the government" from a guess into a
fact in court, supplying ammunition for every later suspicion.

**The Rosenberg case (1950-1953):** Julius and Ethel Rosenberg were accused of passing
**atomic-bomb secrets** to the Soviets; convicted in 1951, sentenced to death, and **executed
in the electric chair at Sing Sing on June 19, 1953** — the **only American civilians executed
for spying in the Cold War.**

**The Rule-0 restraint you must carry (teacher kept stressing):** after the **Venona**
decrypts were released in the 1990s, **Julius's spying was largely confirmed, but Ethel's
degree of involvement is still debated.** When you write these cases, you can neither say "they
were all frame-ups" (erasing real penetration) nor "so the anti-communism was all right"
(whitewashing the destruction of innocents).

Story link: the erased one's Node 10 uses Hiss and the Rosenbergs as evidence that "there
really were Soviet spies in that era"; the notebook fills in the cases, the Pumpkin Papers, the
1953 execution, and the Venona debate.`,
      },
      xiaoweiNote: {
        cn: `老师说这是全课最该"拿捏分寸"的一张卡,它是"威胁是真的"那一派最硬的证据。
我的记忆链：**Hiss → 伪证罪定罪（1950）+ Pumpkin Papers；Rosenberg → 传原子弹机密 → 1953 电椅处死（唯一因间谍被处死的平民）**。
关键克制：**Venona 证实了 Julius，但 Ethel 仍有争议**,DBQ 里写这句，阅卷会给"复杂性"分。
用法：先承认"确有间谍"，再追问"为抓极少数真的，碾碎一大片无辜，这笔账算得过来吗"。`,
        en: `Teacher said this is the card that most needs a careful touch — it is the hardest
evidence for the "the threat was real" camp. My memory chain: **Hiss → convicted of perjury
(1950) + Pumpkin Papers; Rosenbergs → passed atomic secrets → executed in the electric chair
1953 (the only civilians executed for spying).** The key restraint: **Venona confirmed Julius,
but Ethel is still debated** — writing that line in a DBQ earns "complexity" points. Use it by
first granting "there really were spies," then asking "to catch a tiny few real ones, was it
worth crushing a whole field of innocents?"`,
      },
    },

    {
      id: 'shelley-kraemer-racial-covenants',
      termCn: 'Shelley v. Kraemer 与种族限制性契约',
      termEn: 'Shelley v. Kraemer & Racial Covenants',
      standardRef: ['APUSH CED Topic 8.4 (postwar economy & suburbanization)', 'CA HSS 11.8', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
      },
      standaloneText: {
        cn: `这张卡精确化郊区那条颜色线,它是"法律变了，机制却没停"这个本课核心论点的关键判例。
故事里被划掉者第 9 节补了一句 Shelley v. Kraemer，但案情值得单独讲清，因为很多学生
会以为"种族契约一直合法"，那是错的。

**种族限制性契约（racial covenant）是什么？** 购房合同里白纸黑字的一行字,
规定房子"不得售予白种人以外的人"。这是把种族隔离写进**私人合同**的办法。

**Shelley v. Kraemer（1948）判了什么？** 最高法院判：种族契约本身不犯法，
但**法院不可以出面强制执行它**,因为法院强制执行就等于"政府帮着搞种族歧视"，违反第十四修正案
的平等保护。这是民权史上一个重要判例。

**最该记住的"反转"（AP 爱考 Continuity & Change）：** 判例**没有**真的终结种族隔离。
排斥换了个机制继续跑,银行用 **redlining（红线政策）**系统性拒绝给黑人社区放贷，
FHA 只给"不混居"社区担保。**法律条文变了，把黑人挡在门外的真正系统性力量（redlining + FHA）
还在**。所以"合同只售白人"只是表层，**redlining 才是系统性主因**。

故事连接：被划掉者第 9 节"1948 年 Shelley v. Kraemer 判种族契约法院不可强制执行，
可 redlining 红线还在系统性拒贷"就是这张卡的锚,notebook 把判例和"为何排斥照样延续"补全。`,
        en: `This card sharpens the suburbs' color line; it is the key precedent for the course's
core claim, "the law changed, but the mechanism did not stop." The erased one's Node 9 adds a
line on Shelley v. Kraemer, but the case deserves its own explanation, because many students
assume "racial covenants were always legal," which is wrong.

**What is a racial covenant?** A line written in black and white into a home contract,
stating the house "shall not be sold to anyone other than the Caucasian race." It was a way to
write segregation into a **private contract.**

**What did Shelley v. Kraemer (1948) rule?** The Supreme Court ruled that racial covenants
themselves were not illegal, but **courts could not enforce them** — because a court enforcing
one would mean "the government helping to discriminate by race," violating the Fourteenth
Amendment's equal protection. It is an important civil-rights precedent.

**The "reversal" to remember most (AP loves Continuity & Change):** the ruling did **not**
actually end segregation. Exclusion simply switched mechanisms: banks used **redlining** to
systematically deny loans to Black neighborhoods, and the FHA only insured "non-mixed"
neighborhoods. **The text of the law changed, yet the real systemic force keeping Black
families out (redlining + FHA) kept running.** So "whites only" in the contract was only the
surface; **redlining was the systemic main cause.**

Story link: the erased one's Node 9 line "in 1948 Shelley v. Kraemer ruled courts could not
enforce racial covenants, yet the redlining red line was still systematically denying loans"
is this card's anchor; the notebook fills in the precedent and why exclusion continued anyway.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是答"Continuity & Change"题的好弹药,因为它同时给你"变了"和"没变"两面。
我的记忆链：**Shelley v. Kraemer（1948）= 法院不可强制执行种族契约 → 但 redlining + FHA 让排斥照样延续**。
关键纠错：**别把"合同只售白人"当系统性主因,真正系统性的是 redlining（银行画红线拒贷）+ FHA**。
高分写法：用这条精确说明"法律变了、机制没停"，正是 AP 要的复杂性。`,
        en: `Teacher said this card is good ammunition for a "Continuity & Change" question, because
it gives you both "changed" and "unchanged" at once. My memory chain: **Shelley v. Kraemer
(1948) = courts cannot enforce racial covenants → but redlining + FHA let exclusion continue.**
Key correction: **don't treat "whites only" contracts as the systemic main cause; the truly
systemic force was redlining (banks drawing red lines to deny loans) + the FHA.** High-scoring
move: use this to show precisely "the law changed, the mechanism did not" — exactly the
complexity AP wants.`,
      },
    },

    {
      id: 'containment-home-front-cost',
      termCn: '遏制政策的国内代价',
      termEn: 'The Home-Front Cost of Containment',
      standardRef: ['APUSH CED Topic 8.2 (containment, 对外维度)', 'APUSH CED Topic 8.3 (Red Scare)', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
      },
      standaloneText: {
        cn: `**containment（遏制政策）** 这个词，教材通常当**对外政策**讲,杜鲁门主义、马歇尔计划、
朝鲜战争（containment 的对外维度在 APUSH Topic 8.2）。本课补的是它**反弹回国内**的代价，
这正是高分 LEQ 的标志:把对外线和对内线接起来。

**什么是 containment？** 二战后美国的冷战大战略,核心是"遏制"共产主义向外扩张，
不让它再多拿下一个国家。这是对外的。

**它怎么"反弹"回国内？** 逻辑很简单也很可怕：
**对外越是恐惧苏联向外扩张，对内就越要搜捕"内部的苏联"**,
怕外面的共产党，就开始怕里面"疑似共产党"的人。于是对外的遏制，
长出了对内的忠诚审查、黑名单、间谍案、Lavender Scare。

**1949-1950 几件大事把这条线点着了：** 1949 年苏联爆原子弹、中华人民共和国成立、
11 名共产党领袖据 Smith Act 被定罪,这些对外的"坏消息"，直接加剧了国内
"敌人就在我们里面"的恐惧。（朝鲜战争 1950 年 6 月爆发，美军与共产党军队直接交火，
更让国内对内部敌人的搜查升级,这是 containment 对外线↔对内线的又一道接口。）

考点关键句（LEQ 高频）：**红色恐慌是 containment 的国内代价,对外越遏制苏联，
对内越收缩自由**。能把"对外政策"和"国内反共"这两条线用因果接起来，是阅卷奖励的高分角度。`,
        en: `The word **containment** is usually taught as **foreign policy** — the Truman Doctrine,
the Marshall Plan, the Korean War (its foreign dimension is APUSH Topic 8.2). This lesson adds
the cost of how it **rebounded back home**, which is a high-scoring LEQ signal: connecting the
foreign thread to the domestic one.

**What is containment?** America's grand Cold War strategy after WWII: its core was to
"contain" the spread of communism abroad, not letting it take one more country. That is the
foreign side.

**How did it "rebound" home?** The logic is simple and chilling: **the more America feared
the Soviets expanding abroad, the more it hunted "the Soviets within" at home** — fearing
communists outside led to fearing "suspected communists" inside. So foreign containment grew a
domestic crop: loyalty checks, blacklists, spy cases, the Lavender Scare.

**Several 1949-1950 events lit this thread:** in 1949 the Soviets tested an atomic bomb, the
People's Republic of China was founded, and eleven communist leaders were convicted under the
Smith Act — these foreign "bad news" directly intensified the domestic fear that "the enemy is
inside us." (The Korean War broke out in June 1950, with US troops in direct combat against
communist forces, escalating the search for inside enemies — another junction between
containment's foreign and domestic threads.)

Key exam sentence (high-frequency LEQ): **the Red Scare was the home-front cost of containment
— the more it contained the Soviets abroad, the more it narrowed freedom at home.** Connecting
"foreign policy" and "domestic anti-communism" by cause and effect is a high-scoring angle that
scoring rewards.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 LEQ 的"加分神器",大多数同学只会把 containment 当对外政策写，
能把它"反弹回国内"接起来的，立刻和别人拉开差距。
我的记忆链：**对外遏制苏联（containment）→ 对外恐惧投射回国内 → 搜捕"内部的苏联" → 忠诚审查/黑名单/红色恐慌**。
口诀：**对外越遏制，对内越收缩**,一句话把外线内线焊在一起。
（朝鲜战争 1950 是这条线的一个外部催化剂，记得能加一句。）`,
        en: `Teacher said this is an LEQ "bonus booster" — most students write containment only as
foreign policy, and whoever can connect it "rebounding home" instantly pulls ahead. My memory
chain: **contain the Soviets abroad (containment) → foreign fear projected back home → hunt
"the Soviets within" → loyalty checks / blacklists / Red Scare.** Mnemonic: **the more it
contained abroad, the more it narrowed at home** — one line welding the foreign and domestic
threads together. (The Korean War of 1950 is an external catalyst on this thread; remember you
can add a line about it.)`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `那个年代**确实**有苏联间谍,Hiss、Rosenberg 案后来都证明了渗透是真的。
可为了抓极少数真间谍，那台机器用名单、用连坐、用反用宪法，
毁掉了成千上万从没被任何法庭定罪的无辜者。

你觉得，红色恐慌该被看成"一个国家面对真威胁、没法完全避免的代价"，
还是"用'威胁是真的'当挡箭牌、碾碎了无辜与自由"？
用至少两条具体证据支持你的判断。`,
      en: `In that era there **really were** Soviet spies — the Hiss and Rosenberg cases later
proved the penetration was real. Yet to catch a tiny few real spies, the machine used lists,
guilt by association, and the Constitution turned against people, destroying thousands of
innocents never convicted by any court.

Should the Red Scare be seen as "a cost a country cannot fully avoid before a real threat," or
as "using 'the threat is real' as a shield to crush the innocent and freedom"? Support your
judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案,AP 评分看你**用证据**的能力，不看你站哪边。
- "真威胁、难免代价"这边的证据：Hiss 伪证定罪、Rosenberg 传原子弹机密被处死、Venona 证实 Julius、
  1949 苏联原子弹 + 中共建国让恐惧有真实内核。
- "挡箭牌、碾碎无辜"这边的证据：黑名单受害者大多从没被定罪、忠诚审查举证责任反转、
  第五修正案被反用成"Fifth Amendment Communist"、Lavender Scare 把同性恋者也清洗掉。
高分写法：先承认两边都站得住，再说明你为什么更倾向某一边,并指出"恐惧是在哪一步从合理警惕滑向碾碎无辜",
这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not
which side you pick.
- Evidence for "real threat, unavoidable cost": Hiss convicted of perjury, the Rosenbergs
  executed for passing atomic secrets, Venona confirming Julius, the 1949 Soviet bomb + the
  founding of the PRC giving the fear a real core.
- Evidence for "shield that crushed the innocent": most blacklist victims were never convicted,
  the loyalty checks flipped the burden of proof, the Fifth Amendment was turned into "Fifth
  Amendment Communist," the Lavender Scare purged gay people too.
High-scoring move: grant that both sides stand, then explain why you lean one way, and pinpoint
"at which step fear slid from reasonable caution into crushing the innocent" — that's complexity.`,
      conceptsActivated: ['rosenberg-hiss-espionage', 'fifth-amendment-loyalty-hearings', 'huac-blacklist-hollywood-ten'],
    },
    {
      id: 'q2',
      cn: `同一个冷战美国，一只手用恐惧收缩自由（忠诚审查、黑名单），
另一只手用繁荣扩张中产（GI Bill、Levittown）,可这份繁荣，带着一条"只售白人"的颜色线，
靠 redlining 把黑人退伍军人系统性挡在门外。

一个社会，可以一边"更自由富足"，一边"更不平等"吗？
这两条线（恐惧收缩自由 / 繁荣排斥他者）是互相矛盾的，还是同一套战后秩序的两面？
用每条线各一条具体证据支持你的看法。`,
      en: `The same Cold War America narrowed freedom with one hand (loyalty checks, blacklists) and
expanded the middle class with the other (GI Bill, Levittown) — yet that prosperity carried a
"whites only" color line, using redlining to systematically shut Black veterans out.

Can a society be "more free and prosperous" and "more unequal" at the same time? Are these two
threads (fear narrowing freedom / prosperity excluding others) contradictory, or two faces of
one postwar order? Support your view with one specific piece of evidence for each thread.`,
      hintCn: `提示：好的 DBQ 答案会**同时拿住两条线**，而不是只写一条。
- 恐惧收缩自由这条线的证据：忠诚审查 300 万 + 雇员被查、黑名单不需定罪就毁人、Welch 那一问。
- 繁荣排斥他者这条线的证据：GI Bill 名义人人平等、Levittown 合同"只售白人"、redlining 红线拒贷、
  固化成今天的种族财富鸿沟。
进阶：想想"恐惧"和"排斥"是不是落在同一批最没声音的人身上（被划掉者那一遍刻意把黑名单受害者
和黑人退伍军人叠成一个人）,这恰恰提示两条线属于同一套秩序。`,
      hintEn: `Hint: a good DBQ answer **holds both threads at once**, not just one.
- Evidence for the "fear narrows freedom" thread: 3 million+ workers checked by the loyalty
  program, the blacklist ruining people without conviction, Welch's one question.
- Evidence for the "prosperity excludes others" thread: the GI Bill's nominal equality, the
  Levittown "whites only" contract, redlining denying loans, hardening into today's racial
  wealth gap.
Going deeper: ask whether "fear" and "exclusion" fell on the same most-voiceless people (the
erased one's Lens deliberately stacks the blacklist victim and the Black veteran into one
person) — that very fact hints both threads belong to one order.`,
      conceptsActivated: ['suburbanization-gibill-redlining', 'shelley-kraemer-racial-covenants', 'mccarthyism-second-red-scare'],
    },
    {
      id: 'q3',
      cn: `美国曾在 1882 年用排华法案，把华人当成需要被排除的"内部威胁"；
冷战时又用名单，把"疑似共产党人"当成"内部敌人"。同一时期，地球另一端的新中国（1949 建国）
也在用自己的方式清查它眼中的"内部敌人"。这几件事的具体形式、规模、后果差别极大，绝不能简单等同,
但它们似乎共用同一个机制。

这个共同机制是什么？为什么"把恐惧投射到某个群体身上、再用某种方式把他们划出来"会反复出现、
跨越国界？作为今天的你（也许正是当年被排斥群体的后代），认出这套机制，对你意味着什么？`,
      en: `In 1882 America used the Chinese Exclusion Act to treat Chinese people as an "inside
threat" to be excluded; in the Cold War it used lists to treat "suspected communists" as
"inside enemies." In the same period, the new China across the earth (founded in 1949) was, in
its own way, purging what it saw as "inside enemies." The specific forms, scale, and outcomes
of these differ enormously and must never be simply equated — yet they seem to share one
mechanism.

What is that shared mechanism? Why does "projecting fear onto a group, then marking them out in
some way" recur across borders? As you today (perhaps a descendant of a once-excluded group),
what does recognizing this mechanism mean to you?`,
      hintCn: `提示：这题的核心是**看机制，不排名**,绝不能写成"美国也搞迫害所以两边一样/各打五十大板"，
也不能写成"别处更糟所以美国没事"。老师说这是本课最高敏感的一点。
- 共同机制可以这样说：一个**感到被威胁、被渗透的社会，会本能地转向内部，去寻找、标记、清除
  "不可靠的人"**,在这个过程里，合理的警惕和对无辜者的伤害极容易被搅在一起。
- 关键克制：先写清"差别极大、绝不能简单等同"，再只比较机制本身,这正是 AP 要的中立分析。
- 对你的意义这一问没有标准答案,可以从"认出这套机制，下次它出现时（针对任何群体，包括你自己的）
  你能不能不被它带着走"切入。`,
      hintEn: `Hint: the core of this question is **see the mechanism, don't rank** — you must never
write "America also persecuted, so both sides are the same" nor "elsewhere was worse, so America
is off the hook." Teacher said this is the most sensitive point in the lesson.
- State the shared mechanism like this: a society that **feels threatened and infiltrated
  instinctively turns inward to search out, mark, and remove the "unreliable"** — and in that
  process, reasonable caution and harm to the innocent are easily stirred together.
- Key restraint: first write that "the differences are enormous and must never be simply
  equated," then compare only the mechanism itself — that is the neutral analysis AP wants.
- The "what it means to you" part has no standard answer; you might come at it through "having
  recognized this mechanism, can you keep from being swept along the next time it appears —
  against any group, including your own?"`,
      conceptsActivated: ['mccarthyism-second-red-scare', 'huac-blacklist-hollywood-ten'],
    },
  ],
};

export default notebook;
