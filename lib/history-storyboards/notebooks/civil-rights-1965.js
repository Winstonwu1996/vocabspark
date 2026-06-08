// ─── 同伴笔记本架构 v1 · Civil Rights Movement 1954-1968 ──────────
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
// schemaVersion: 1 · notebookVersion: civil-rights-1965-v1

export var notebook = {
  topicId: 'civil-rights-1965',
  topicNameCn: '民权运动 1954-1968',
  topicNameEn: 'The Civil Rights Movement 1954-1968',
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
    cn: `今天老师说我们要学民权运动（Civil Rights Movement，1954-1968）。
这一课在 AP 考试里特别重——APUSH Period 8 一定考，AP 政府课里
Brown v. Board 是「必考案例」、Letter from Birmingham Jail 是「必读文献」。

她给了一张纸，上面写着这些名字和事件：

Brown v. Board（1954）、Montgomery 公交抵制、MLK（马丁·路德·金）、
Malcolm X、Bayard Rustin（贝亚德·拉斯廷）、George Wallace（华莱士）、
sit-ins（静坐）、Freedom Rides（自由乘车）、Selma / Bloody Sunday、
Civil Rights Act 1964、Voting Rights Act 1965

还有几个词：segregation（种族隔离）、Jim Crow（吉姆·克劳——强制隔离的一套法律）、
nonviolence（非暴力）、equal protection（平等保护）、Black Power（黑人权力）。

我先记下来。等下读三个故事——华莱士（挡校门的州长）、Rustin（被雪藏的策略大脑）、
Selma 桥上的青少年——读完再回来对照这张单子，看我能不能解释清楚。

老师还说了一句我写在笔记本第一页的话：「别只记『谁做了什么』，
要记『法律早写在那儿了，为什么落地要等这么多年，还要流血』。」
她说这句话就是这一课考 DBQ 时要答的灵魂问题。`,
    en: `Today my teacher said we're learning the Civil Rights Movement (1954-1968).
This topic is huge for AP — it's always on APUSH Period 8, and in AP Government,
Brown v. Board is a "required case" and the Letter from Birmingham Jail is a
"required document."

She gave us a sheet with these names and events:

Brown v. Board (1954), Montgomery Bus Boycott, MLK (Martin Luther King Jr.),
Malcolm X, Bayard Rustin, George Wallace, sit-ins, Freedom Rides,
Selma / Bloody Sunday, Civil Rights Act 1964, Voting Rights Act 1965

Plus some terms: segregation (separating people by race), Jim Crow (the Southern
laws that forced racial separation), nonviolence, equal protection, Black Power.

Let me write these down. After I read the three stories — Wallace (the governor at
the schoolhouse door), Rustin (the hidden strategist), and the Selma teenager on the
bridge — I'll come back and check whether I can explain each one.

Teacher also said one line I wrote on the first page of my notebook: "Don't just
memorize who did what — memorize 'the law was already written, so why did it take
so many years and blood to make it real.'" She says that question is the soul of
every DBQ on this topic.`,
    keyTerms: [
      { cn: '隔离', en: 'segregation' },
      { cn: '吉姆·克劳法（强制隔离的法律体系）', en: 'Jim Crow' },
      { cn: '非暴力（有训练有纪律的主动斗争策略）', en: 'nonviolence' },
      { cn: '平等保护（第 14 修正案条款）', en: 'equal protection' },
      { cn: '黑人权力', en: 'Black Power' },
      { cn: '大规模抵制（南方拖延废除隔离）', en: 'massive resistance' },
      { cn: '被统治者的同意 / 投票权', en: 'voting rights' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景/对照人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '马丁·路德·金',
        nameEn: 'Martin Luther King Jr.',
        ipa: '/ˈmɑːrtɪn ˈluːθər kɪŋ/',
        roleCn: '运动最有号召力的领袖，非暴力直接行动的代表，1968 遇刺',
        roleEn: 'The movement\'s most prominent leader, face of nonviolent direct action, assassinated 1968',
        mustKnow: true,
        audioKey: 'martin-luther-king',
      },
      {
        nameCn: '马尔科姆·X',
        nameEn: 'Malcolm X',
        ipa: '/ˈmælkəm ɛks/',
        roleCn: '主张黑人自卫与自决，与 MLK 的非暴力路线形成对照',
        roleEn: 'Advocated Black self-defense and self-determination, a contrast to MLK\'s nonviolence',
        mustKnow: true,
        audioKey: 'malcolm-x',
      },
      {
        nameCn: '贝亚德·拉斯廷',
        nameEn: 'Bayard Rustin',
        ipa: '/ˈbaɪərd ˈrʌstɪn/',
        roleCn: 'MLK 的非暴力导师，华盛顿大游行总指挥，因同性恋身份被运动雪藏',
        roleEn: 'MLK\'s nonviolence mentor, chief organizer of the March on Washington, sidelined for being gay',
        mustKnow: true,
        audioKey: 'bayard-rustin',
      },
      {
        nameCn: '乔治·华莱士',
        nameEn: 'George Wallace',
        ipa: '/dʒɔːrdʒ ˈwɒlɪs/',
        roleCn: '阿拉巴马州长，挡校门、喊「永远隔离」，晚年公开忏悔',
        roleEn: 'Alabama governor, "stand in the schoolhouse door," cried "segregation forever," later publicly repented',
        mustKnow: true,
        audioKey: 'george-wallace',
      },
      {
        nameCn: '罗莎·帕克斯',
        nameEn: 'Rosa Parks',
        ipa: '/ˈroʊzə pɑːrks/',
        roleCn: '1955 拒绝在公交让座，点燃 Montgomery 公交抵制',
        roleEn: 'Refused to give up her bus seat in 1955, sparking the Montgomery Bus Boycott',
        mustKnow: true,
        audioKey: 'rosa-parks',
      },
      {
        nameCn: '厄尔·沃伦',
        nameEn: 'Earl Warren',
        ipa: '/ɜːrl ˈwɔːrən/',
        roleCn: '写 Brown v. Board 判决的首席大法官',
        roleEn: 'Chief Justice who wrote the Brown v. Board opinion',
        mustKnow: true,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记，共 8 张）─────────────
  mainConcepts: [
    // ── 1. Brown v. Board（独立 mini-lesson，AP Gov Required Case）──
    {
      id: 'brown-v-board-1954',
      termCn: 'Brown 诉教育委员会案 1954',
      termEn: 'Brown v. Board of Education 1954',
      defCn: '1954 年最高法院的判决，裁定公立学校按种族分班是违宪的，是推翻「隔离但平等」原则的关键一仗。',
      defEn: 'The 1954 Supreme Court ruling that declared racial segregation in public schools unconstitutional, overturning the "separate but equal" principle.',
      standardRef: ['APUSH Period 8 (CED 8.10)', 'AP US Gov Required Case', 'CA HSS 11.10'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'george-wallace', nodeId: 'gw-n6', context: '华莱士挡门，表面挡两个学生，实则挡的是 Brown 这张判决' },
        ],
      },
      standaloneText: {
        cn: `Brown v. Board of Education（1954），AP 政府课的「必考案例」之一。

**背景**：1896 年，最高法院在 Plessy v. Ferguson 案里立了一条规则：
「只要给黑人「平等」的设施，按种族分开是合法的。」
这叫 **"separate but equal"（隔离但平等）**。
结果几十年里，黑人的学校破旧、缺钱、缺老师——「平等」根本是空话。

**1954 年 5 月 17 日**，最高法院 **9 比 0 一致**推翻了这条规则。
首席大法官 Earl Warren 写下关键句：在公共教育里，
**"separate educational facilities are inherently unequal"**
（隔离的教育设施，本质上就是不平等的）。

判决的法律依据是宪法第 14 修正案（14th Amendment）里的
**"equal protection"（平等保护）**条款——
意思是：法律必须平等地保护每一个人，不能因为肤色有所不同。

**跨课长线（DBQ 金线）**：平等保护这条，早在 **1868 年**
内战刚打完那阵就写进了宪法（你跑过重建那段历史就懂这条根）。
也就是说，宪法答应「人人平等」，答应了将近一百年，
到 1954 年才在校园这块兑现了一点点。

**最容易错的考点**：
① Brown 只说「隔离违宪、要废」。
② 它**没说「多快废」**——南方借这个空子搞「massive resistance（大规模抵制）」，真正落地拖了十几年。
③ 所以「一判就结束」是错的——这正是华莱士 1963 年还能挡在校门口的原因。`,
        en: `Brown v. Board of Education (1954) is one of AP Government's "required cases."

**Background**: In 1896, the Supreme Court's Plessy v. Ferguson set a rule:
"As long as Black people get 'equal' facilities, separating by race is legal."
This was called **"separate but equal."**
For decades, the result was that Black schools were run-down, underfunded,
and short of teachers — "equal" was an empty promise.

**On May 17, 1954**, the Supreme Court overturned that rule by a **9-0 unanimous vote.**
Chief Justice Earl Warren wrote the key line: in public education,
**"separate educational facilities are inherently unequal."**

The legal basis was the **"equal protection"** clause of the 14th Amendment —
meaning: the law must protect every person equally, regardless of race.

**Cross-topic throughline (the DBQ gold thread)**: the equal protection clause
was written into the Constitution back in **1868**, right after the Civil War
(run the Reconstruction topic and you'll know this root). So the Constitution
promised "everyone is equal" for nearly a hundred years before it was honored,
even a little, in schools in 1954.

**The easiest mistake on this topic**:
① Brown said segregation is unconstitutional and "must" end.
② It did **not** say "how fast" — the South used that gap for "massive resistance,"
   and real desegregation dragged on for over a decade.
③ So "one ruling ended it" is wrong — that's exactly why Wallace could still
   block a schoolhouse door in 1963.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是整门课的「最高频考点」——Brown 是 AP 政府课
13 个必考案例之一，几乎一定考。我的记忆口诀：
**Plessy（1896）"separate but equal" → Brown（1954）"inherently unequal"**，
两个案子成对记，靠的都是同一条 14th Amendment 平等保护。

一句必背原话：**"inherently unequal"**（本质上不平等）——
DBQ 引这句加分。`,
        en: `Teacher said this card is the "most frequently tested" of the whole topic —
Brown is one of AP Government's 13 required cases, almost guaranteed to appear.
My mnemonic: **Plessy (1896) "separate but equal" → Brown (1954) "inherently
unequal"** — memorize the two cases as a pair, both turning on the same 14th
Amendment equal protection clause.

One quote to memorize: **"inherently unequal"** — citing it in a DBQ earns points.`,
      },
    },

    // ── 2. Montgomery Bus Boycott（独立 mini-lesson）──
    {
      id: 'montgomery-bus-boycott',
      termCn: 'Montgomery 公交抵制 1955-56',
      termEn: 'Montgomery Bus Boycott 1955-56',
      defCn: '1955 年 12 月起，蒙哥马利市黑人社区坚持 381 天不坐公交，抗议公交隔离，最终赢得最高法院裁定公交隔离违宪，也让年轻的 MLK 第一次走上全国舞台。',
      defEn: 'A 381-day boycott of Montgomery, Alabama\'s buses by the Black community starting December 1955, which ended bus segregation and launched MLK onto the national stage.',
      standardRef: ['APUSH Period 8 (CED 8.10)', 'CA HSS 11.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'bayard-rustin', nodeId: 'br-n3', context: 'Rustin 1956 年去 Montgomery，手把手教 26 岁的 MLK 把非暴力变成可执行策略' },
        ],
      },
      standaloneText: {
        cn: `Montgomery Bus Boycott（蒙哥马利公交抵制，1955-56），
民权运动「街头阶段」的起点。

**1955 年 12 月**，阿拉巴马 Montgomery。一位叫 **Rosa Parks（罗莎·帕克斯）**
的黑人女性在公交上拒绝给白人让座，被捕。
注意一个常见误解：她不是「累了不想站起来」。
她是 NAACP（全国有色人种权益促进协会）的资深成员，
这次拒绝是有组织的策略行动，不是偶然。

当地黑人社区随即发起**抵制**：不坐公交，改走路、拼车，硬扛了 **381 天**。
公交公司的乘客大半是黑人——这一抵制直接打在它的钱包上。

抵制需要一个领头人。社区把一位 **26 岁的年轻牧师**推上了领导位置：
**Martin Luther King Jr.（马丁·路德·金）**。
这是 MLK 第一次走上全国舞台。

**1956 年**，最高法院裁定公交上的种族隔离违宪。抵制赢了。

**故事连接**：抵制期间，Bayard Rustin 来到 Montgomery，
手把手教年轻的 MLK 怎么把「非暴力」从一句道德口号变成一套真能打仗的策略
（你在拉斯廷那条故事线的第 3 节读到过）。
所以 MLK 出名的非暴力，背后有个「教练」。

考点关键句（三点一起背）：
① Rosa Parks 是 NAACP 训练过的活动家，这次拒绝是有组织的策略行动，不是偶然。
② 抵制坚持了 381 天，MLK 借此第一次走上全国舞台。
③ 1956 年最高法院判公交隔离违宪，抵制赢了。`,
        en: `Montgomery Bus Boycott (1955-56) — the start of the movement's "street phase."

In **December 1955**, in Montgomery, Alabama, a Black woman named **Rosa Parks**
refused to give up her bus seat to a white passenger and was arrested.
Here's a common mistake to avoid: she was not simply "too tired to stand up."
She was a seasoned NAACP (National Association for the Advancement of Colored People)
member, and the refusal was an organized, strategic act — not an accident.

The local Black community launched a **boycott**: no riding the buses, walking and
carpooling instead, holding out for **381 days.** Most of the bus company's riders
were Black, so the boycott hit it right in the wallet.

A boycott needs a leader. The community pushed a **26-year-old young minister**
into the role: **Martin Luther King Jr.** This was MLK's first time on the national stage.

In **1956**, the Supreme Court ruled bus segregation unconstitutional. The boycott won.

**Story connection**: during the boycott, Bayard Rustin came to Montgomery and taught
young MLK, step by step, how to turn "nonviolence" from a moral slogan into a strategy
that could actually win (you read this in Rustin's story,). So MLK's famous
nonviolence had a "coach" behind it.

Three key exam points to memorize together:
① Rosa Parks was an NAACP-trained activist — the refusal was organized strategy, not accident.
② The boycott lasted 381 days; MLK rose to national prominence through it.
③ In 1956, the Supreme Court ruled bus segregation unconstitutional — the boycott won.`,
      },
      xiaoweiNote: {
        cn: `老师纠了一个特别常见的错：很多人以为 Rosa Parks「就是个累了不让座的普通乘客」。
错——她是 NAACP 训练过的活动家，这次拒绝是精心选的策略行动。
DBQ 写「自发 vs 有组织」的时候，Parks 是经典正例——这是有组织的。

记忆口诀：**381 天 + 26 岁的 MLK 第一次出名 + 1956 最高法院判公交隔离违宪**。`,
        en: `Teacher corrected a very common mistake: many think Rosa Parks was "just a
tired passenger who wouldn't move." Wrong — she was an NAACP-trained activist, and the
refusal was a carefully chosen strategic act. When a DBQ asks "spontaneous vs.
organized," Parks is the classic example of organized.

Mnemonic: **381 days + 26-year-old MLK's first national fame + 1956 Supreme Court
rules bus segregation unconstitutional.**`,
      },
    },

    // ── 3. sit-ins / SNCC / Freedom Rides（独立 mini-lesson，草根/学生路线）──
    {
      id: 'sit-ins-sncc-freedom-rides',
      termCn: '静坐 / SNCC / 自由乘车',
      termEn: 'Sit-ins / SNCC / Freedom Rides',
      defCn: '1960-1961 年间年轻人和学生发起的三种行动：餐厅静坐、成立学生组织 SNCC、跨州乘车挑战隔离，证明民权运动不只靠几个大人物。',
      defEn: 'Three youth-led actions in 1960-1961: lunch-counter sit-ins, forming the student group SNCC, and riding interstate buses to challenge segregation — proving the movement was far bigger than a few famous leaders.',
      standardRef: ['APUSH Period 8 (CED 8.10)', 'CA HSS 11.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'selma-teen-marcher-receiving-end', nodeId: 'st-n3', context: '1965 来 Selma 组织的人里，有更年轻、更激进的学生组织 SNCC' },
        ],
      },
      standaloneText: {
        cn: `这一组讲的是民权运动里**年轻人/草根**那条线。
AP 特别喜欢考这块，因为它能说明「运动不是只有 MLK 一个人」。

**① 1960 sit-ins（静坐运动）**：
在北卡的 Greensboro，四名黑人大学生走进一家百货店「只限白人」的午餐柜台，
坐下点餐。店员拒绝服务，他们就安静地坐着不走。
第二天来更多人，很快蔓延到全南方几十个城市。
非暴力直接行动的经典招式：**用「坐在那里」逼对方暴露隔离的荒谬**。

**② 1960 SNCC 成立**：
静坐的学生们组成了 **SNCC（Student Nonviolent Coordinating Committee，
学生非暴力协调委员会，念作"snick"）**。
SNCC 走的是**草根、年轻人、深入乡村**的路线——比 MLK 的 SCLC（教会路线）
更激进、更不耐烦。两个组织都属于运动，但风格不同。

**③ 1961 Freedom Rides（自由乘车）**：
黑人和白人志愿者一起乘跨州长途巴士，故意坐到「不该坐」的位置，
挑战车站和巴士上的隔离。在阿拉巴马，他们遭到暴徒围攻，一辆巴士被烧。
他们明知危险还去——目的就是**让暴力暴露在全国眼前**，逼联邦政府出手。

**故事连接**：1965 年来 Selma 组织游行的人里，就有 SNCC 的年轻人
（你在 Selma 少年那条故事线第 3 节读到过「更年轻、更激进的学生组织」就是它）。

考点关键句：sit-ins / SNCC / Freedom Rides 证明，民权运动是
**成千上万普通人和年轻人的集体行动**，不是几个大人物的独角戏。`,
        en: `This group covers the **young people / grassroots** line of the movement.
AP particularly likes to test this, because it shows "the movement wasn't just MLK."

**① 1960 sit-ins**:
In Greensboro, North Carolina, four Black college students walked into a department
store's "whites-only" lunch counter, sat down, and ordered. Staff refused to serve
them, and they sat quietly and would not leave. More came the next day, and it spread
to dozens of Southern cities. A classic nonviolent direct-action move:
**using "just sitting there" to force the other side to expose the absurdity of segregation.**

**② 1960 SNCC founded**:
The sit-in students formed **SNCC (Student Nonviolent Coordinating Committee,
pronounced "snick").** SNCC took a **grassroots, youth, deep-into-the-countryside**
approach — more radical and less patient than MLK's SCLC (the church-based group).
Both belonged to the movement, but had different styles.

**③ 1961 Freedom Rides**:
Black and white volunteers rode interstate buses together, deliberately sitting where
they "shouldn't," to challenge segregation at stations and on buses. In Alabama they
were attacked by mobs and one bus was burned. They went knowing the danger — the goal
was to **expose the violence before the whole nation** and force the federal government
to act.

**Story connection**: among the organizers who came to Selma in 1965 were SNCC young
people (the "younger, more radical student group" you read about in the Selma teenager's
story,).

Key exam sentence: sit-ins / SNCC / Freedom Rides prove the civil rights movement was
**the collective action of thousands of ordinary people and young people**, not a solo
act by a few great figures.`,
      },
      xiaoweiNote: {
        cn: `老师让我们记三个组织缩写别搞混：
① **NAACP**——最老，打官司路线，Brown 就是它打的。
② **SCLC**——MLK 的，教会 + 大人物路线。
③ **SNCC**——学生草根路线，最年轻最激进。
DBQ 问「运动内部不同路线」时，SCLC vs SNCC 是经典对比。

记忆口诀：**坐（sit-ins）→ 学生组队（SNCC）→ 上车（Freedom Rides）**，
1960-1961 这两年是「年轻人接棒」的两年。`,
        en: `Teacher told us to keep three organization acronyms straight:
① **NAACP** — oldest, the courtroom route; it brought Brown.
② **SCLC** — MLK's group, church + big-leader route.
③ **SNCC** — student grassroots route, youngest and most radical.
When a DBQ asks about "different lines within the movement," SCLC vs. SNCC is the
classic contrast.

Mnemonic: **sit (sit-ins) → students team up (SNCC) → get on the bus (Freedom
Rides)** — 1960-1961 were the two years young people took the baton.`,
      },
    },

    // ── 4. Birmingham + Letter from Birmingham Jail（独立 mini-lesson，Required Doc）──
    {
      id: 'birmingham-letter',
      termCn: '伯明翰行动 / 伯明翰狱中书',
      termEn: 'Birmingham Campaign / Letter from Birmingham Jail',
      defCn: '1963 年 MLK 故意在最顽固的隔离城市伯明翰发动抗议，被捕后在狱中写下著名的《伯明翰狱中书》，是 AP 政府课的必读文献。',
      defEn: 'The 1963 protest campaign MLK launched in Birmingham, Alabama\'s most segregated city; while jailed he wrote the famous Letter from Birmingham Jail, an AP Government required document.',
      standardRef: ['APUSH Period 8 (CED 8.10)', 'AP US Gov Required Document', 'CA HSS 11.10'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'george-wallace', nodeId: 'gw-n5', context: '华莱士挡门前几周，Birmingham「Bull」Connor 对游行的孩子放警犬、开高压水枪，画面上电视翻转舆论' },
        ],
      },
      standaloneText: {
        cn: `这张卡有两半：一半是事件（Birmingham 行动），一半是文献
（Letter from Birmingham Jail，AP 政府课**必读文献**）。

**1963 Birmingham 行动**：
MLK 故意选了阿拉巴马最顽固的隔离城市 Birmingham 发动抗议。
当地警察局长 **"Bull" Connor** 对游行者——包括很多孩子——动用**警犬和高压消防水枪**。
这些画面上了全国电视，震惊世界。
结果和动手的人想的相反：普通美国人第一次在客厅里直观看见「隔离」长什么样，
舆论一下子倒向游行者。
（你在华莱士那条故事线第 5 节，从他那边读到过这段。）

**Letter from Birmingham Jail（伯明翰狱中书，1963）**：
MLK 因参加未获许可的游行被捕，关进了牢里。
他读到八位白人神职人员的公开信，说他「太心急」「不合时宜」，
应该耐心等、走法庭途径。
MLK 在报纸边角和纸片上写下回信，反驳他们。

三句考点原话（不用背全文，背这三句）：
① **「等了三百四十多年」**——"我们等了三百四十多年，等我们宪法上和上帝给的权利……
   「等」这个词，在压迫者耳朵里几乎总是意味着「永远不」。"
② **"Injustice anywhere is a threat to justice everywhere"**
   （在任何地方的不公正，都是对所有地方公正的威胁）。
③ 他说他**最失望的不是三 K 党，而是「温和的白人」**——
   那些更在乎「秩序」而不是「正义」的人。

考点关键句：Birmingham 证明非暴力是一套**精密计算**的策略
（专门制造能上电视的危机）。Letter 是 MLK 对「为什么不能再等」的经典论证。`,
        en: `This card has two halves: an event (the Birmingham campaign) and a document
(the Letter from Birmingham Jail, an AP Government **required document**).

**1963 Birmingham campaign**:
MLK deliberately chose Birmingham, Alabama's most hardline segregated city, to launch
protests. The local police chief **"Bull" Connor** used **police dogs and high-pressure
fire hoses** on marchers — many of them children. These images went out on national
television and shocked the world. The result was the opposite of what the attackers
wanted: ordinary Americans saw plainly, for the first time in their living rooms, what
"segregation" looked like, and opinion swung to the marchers.
(You read this from Wallace's perspective in his story,.)

**Letter from Birmingham Jail (1963)**:
MLK was arrested for joining a march without a permit. In jail, he read an open letter
from eight white clergymen calling him "too impatient" and "untimely," telling him to
wait patiently and use the courts. MLK wrote his reply in the margins of a newspaper
and on scraps of paper.

Three quotable exam lines (you don't need the whole text — just these three):
① **"Wait" almost always means "never"** — "We have waited for more than 340 years for
   our constitutional and God-given rights… this 'Wait' has almost always meant 'Never.'"
② **"Injustice anywhere is a threat to justice everywhere."**
③ He said his **greatest disappointment was not the Klan but the "white moderate"** —
   those more devoted to "order" than to "justice."

Key exam sentence: Birmingham proves nonviolence was a **precisely calculated** strategy
(deliberately creating a crisis that would reach television). The Letter is MLK's classic
argument for "why we cannot wait any longer."`,
      },
      xiaoweiNote: {
        cn: `老师特别强调：Letter from Birmingham Jail 是 AP 政府课**必读文献**，
几乎每年都考。最常考的是这句：
**"Injustice anywhere is a threat to justice everywhere"**——必背原话。

还有一个 DBQ 高频角度：MLK 在信里批评的不是敌人，是「温和的白人」
（嘴上支持、却劝你「再等等」的人）。
这个点很多同学漏，写出来加分。`,
        en: `Teacher really stressed: the Letter from Birmingham Jail is an AP Government
**required document**, tested almost every year. The most-tested line is:
**"Injustice anywhere is a threat to justice everywhere"** — memorize it verbatim.

One high-frequency DBQ angle: in the letter MLK criticizes not his enemies but the
"white moderate" (people who say they support you but tell you to "wait a little
longer"). Many students miss this point — writing it earns extra credit.`,
      },
    },

    // ── 5. Wallace 挡校门 / massive resistance（故事覆盖型：george-wallace）──
    {
      id: 'wallace-schoolhouse-door',
      termCn: '华莱士挡校门 / 大规模抵制',
      termEn: 'Wallace at the Schoolhouse Door / Massive Resistance',
      defCn: '1963 年阿拉巴马州长华莱士亲身挡在大学门口不让黑人学生进，是南方各州用各种办法拖延执行 Brown 判决的「大规模抵制」中最直白的一次。',
      defEn: 'Alabama Governor Wallace physically blocking Black students from entering the University of Alabama in 1963 — the most visible act of Southern states\' "massive resistance" to enforcing the Brown ruling.',
      standardRef: ['APUSH Period 8 (CED 8.10)', 'CA HSS 11.10'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'george-wallace',
        nodeIds: ['gw-n1', 'gw-n4', 'gw-n6', 'gw-n9'],
        xiaoweiNote: {
          cn: `华莱士那条故事线整条都是他。重点提炼：

**1963 年 6 月 11 日**，阿拉巴马州长 George Wallace 亲身站在阿拉巴马大学礼堂门口
（史称 **"stand in the schoolhouse door"**——「挡校门」），不让两名
已被法院判定有权入学的黑人学生 Vivian Malone 和 James Hood 进去——
直到联邦化的国民警卫队到场，他才让开。

这件事是 **massive resistance（大规模抵制）**的标志画面：
Brown 判了校园隔离违宪（1954），可南方各州用各种办法拖延、抵抗，
华莱士挡门就是最直白的一次。它解释了为什么「Brown 一判就结束」是错的。

**中立呈现（按事实，不贴标签）**：华莱士不是个简单的恶棍。
他早年其实算温和派——是 1958 年竞选输给打种族牌的对手后，
才算清「喊隔离 = 选票」改了打法。更复杂的是结尾：
1972 年他被枪击瘫痪。**1979 年起公开去黑人教堂忏悔道歉**（有记录的真事），
1982 年还靠大量黑人选票再次当选州长。
同一个人，喊过「永远隔离」，也真心说过「我错了」。
AP 写他时别钉死成单一标签——「人会变」这一面要写。

考点关键句：挡校门 = massive resistance 的标志 + 证明 Brown 落地拖了很久。`,
          en: `Wallace's whole story is about him. Key takeaways:

On **June 11, 1963**, Alabama governor George Wallace stood in person at the door of a
University of Alabama auditorium (the famous **"stand in the schoolhouse door"**),
blocking two Black students — Vivian Malone and James Hood — who had already been
ruled by the courts to have the right to enroll. He stepped aside only when the
federalized National Guard arrived.

This is the signature image of **massive resistance**: Brown ruled school segregation
unconstitutional (1954), but Southern states used every method to delay and resist.
Wallace's stand at the door was the most blatant example. It explains why "Brown ended
it instantly" is wrong.

**Neutral framing (factual, no single label)**: Wallace was not a simple villain.
He was actually a moderate early in his career — only after losing the 1958 governor's
race to a race-baiting opponent did he calculate "crying segregation = votes" and
change his approach. More complex is the ending: shot and paralyzed in 1972,
**from 1979 he publicly visited Black churches to repent and apologize** (a documented
fact), and in 1982 he won the governorship again on the strength of many Black votes.
The same man cried "segregation forever" and also sincerely said "I was wrong."
When writing about him for AP, don't pin him to a single label — write the
"people can change" side too.

Key exam sentence: the schoolhouse door = the signature image of massive resistance +
proof that Brown took a long time to be made real.`,
        },
      },
    },

    // ── 6. 非暴力 vs Black Power（独立 mini-lesson，运动内部路线之争·中立）──
    {
      id: 'nonviolence-vs-black-power',
      termCn: '非暴力 vs 黑人权力（路线之争）',
      termEn: 'Nonviolence vs. Black Power (Strategy Debate)',
      defCn: '民权运动内部关于「该用什么方法」的争论：MLK 代表有纪律的非暴力行动，Malcolm X 等人代表黑人自卫与自决，两条路线针对的问题不完全一样，都属于运动。',
      defEn: 'The debate within the civil rights movement over strategy: MLK\'s disciplined nonviolence versus Black Power advocates like Malcolm X who stressed self-defense and self-determination — both lines were part of the movement.',
      standardRef: ['APUSH Period 8 (CED 8.10-8.11)', 'CA HSS 11.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'bayard-rustin', nodeId: 'br-n2', context: 'Rustin 把甘地的非暴力当成一套技术带进美国，是非暴力路线的技术地基' },
          { lens: 'selma-teen-marcher-receiving-end', nodeId: 'st-n3', context: 'Selma 少年起初也抗拒非暴力，觉得挨打不还手是认怂——这正是路线之争的真实张力' },
        ],
      },
      standaloneText: {
        cn: `民权运动**不是铁板一块**——内部对「该用什么方法」一直有分歧。
AP 喜欢考这个，因为它逼你呈现「运动内部的不同声音」，而不是一边倒。
（下面只**呈现**两条路线，不替你判断谁对谁错。）

**路线一：非暴力（nonviolence），代表 MLK**
主张通过有纪律的非暴力直接行动——游行、静坐、抵制——挨打也不还手。
靠「让全国看见不公正」赢得舆论和道德高地，再逼出立法。
它不是软弱：这是一套需要极强自制力和精密组织的主动策略。
（你在拉斯廷和 Selma 少年的故事里读到，挨打不还手要反复训练才做得到。）

**路线二：黑人权力 / 自卫（Black Power），代表 Malcolm X（马尔科姆·X）等**
主张黑人**自卫**——必要时用武力保护自己。
主张**自决**——自己掌握社区的经济、政治、文化，不靠白人施舍。
以及对黑人身份的自豪。
这条路线对「不还手」更不耐烦，质疑：凭什么挨了打还要忍？
1966 年起「Black Power」成为口号，影响了运动后期。

**两条路线不是简单的「好 vs 坏」**：
- 非暴力赢得了广泛的白人同情和关键立法（Civil Rights Act / Voting Rights Act）。
- Black Power 回应了非暴力没解决的问题——北方城市的贫困、警察暴力、
  以及「光有法律权利、没有经济权力」的落差。它还重塑了黑人的自我认同。
两者都在批评对方的盲点，也都推动了运动。

考点关键句：民权运动内部存在**非暴力 vs 黑人权力/自卫**的策略分歧——
DBQ 写「运动内部张力」时，这是核心对比（写出两边各自的理由，别站队）。`,
        en: `The civil rights movement was **not a single bloc** — there was ongoing
disagreement about "what method to use." AP likes to test this because it forces you to
present "different voices within the movement" rather than a one-sided story.
(The section below only **presents** the two lines — it does not judge who was right.)

**Line one: nonviolence, represented by MLK.**
Advocated disciplined nonviolent direct action — marches, sit-ins, boycotts — taking
blows without striking back. The goal was to win public opinion and the moral high
ground by "letting the whole nation see the injustice," then forcing legislation.
This was not weakness: it was an active strategy requiring great self-control and
precise organization. (In Rustin's story and the Selma teenager's story, you read that
taking a blow without striking back takes repeated training to do.)

**Line two: Black Power / self-defense, represented by figures like Malcolm X.**
Advocated Black **self-defense** — using force to protect yourself when necessary.
Advocated **self-determination** — controlling your own community's economy, politics,
and culture rather than relying on white goodwill. And pride in Black identity.
This line was more impatient with "not striking back," asking: why endure a beating?
From 1966 "Black Power" became a slogan and shaped the later movement.

**The two lines are not a simple "good vs. bad":**
- Nonviolence won broad white sympathy and key legislation (Civil Rights Act /
  Voting Rights Act).
- Black Power answered problems nonviolence had not solved — poverty in Northern cities,
  police violence, and the gap of "having legal rights but no economic power." It also
  reshaped Black self-identity.
Each criticized the other's blind spots, and both pushed the movement forward.

Key exam sentence: within the civil rights movement there was a strategy debate of
**nonviolence vs. Black Power / self-defense** — when a DBQ asks about "tension within
the movement," this is the core contrast (write each side's reasons; don't take a side).`,
      },
      xiaoweiNote: {
        cn: `老师反复说：写这道题千万**别站队**。AP 给分的是「你能不能公平地
呈现两边的逻辑」，不是「你支持谁」。模板：
先讲非暴力的目标和成就，再讲 Black Power 在回应什么没被解决的问题，
最后说两者都属于运动、都有道理。

记忆口诀：**非暴力 = 赢法律 + 赢舆论；Black Power = 自卫 + 自决 + 自豪**。
两条线针对的问题不完全一样，所以不是简单的对错。`,
        en: `Teacher said over and over: when you write this, **do not take a side.** AP
gives credit for "can you fairly present both sides' logic," not "who do you support."
Template: first explain nonviolence's goals and achievements, then explain what
unsolved problems Black Power was responding to, then say both belonged to the movement
and both had reasons.

Mnemonic: **nonviolence = win the law + win opinion; Black Power = self-defense +
self-determination + self-pride.** The two lines targeted somewhat different problems,
so it's not a simple right-or-wrong.`,
      },
    },

    // ── 7. Civil Rights Act 1964 + Selma/Voting Rights Act 1965（故事覆盖型：selma-teen）──
    {
      id: 'civil-rights-act-voting-rights-act',
      termCn: '1964 民权法案 / Selma / 1965 投票权法案',
      termEn: 'Civil Rights Act 1964 / Selma / Voting Rights Act 1965',
      defCn: '两部一前一后的关键法律：1964 年民权法案禁止公共场所和就业歧视，1965 年投票权法案禁止识字测验等阻止黑人投票的把戏。Selma 的血让国会签下了第二部法律。',
      defEn: 'Two back-to-back landmark laws: the Civil Rights Act 1964 banned discrimination in public places and jobs; the Voting Rights Act 1965 banned literacy tests and other tricks used to stop Black voters. The blood at Selma moved Congress to pass the second law.',
      standardRef: ['APUSH Period 8 (CED 8.10)', 'AP US Gov (voting rights)', 'CA HSS 11.10'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'selma-teen-marcher-receiving-end',
        nodeIds: ['st-n6', 'st-n7', 'st-n8', 'st-n9'],
        xiaoweiNote: {
          cn: `Selma 少年那条故事线讲到了 Selma 和投票权法案。重点提炼——
我把两部法律一起记，因为它们一前一后、解决的是不同的问题：

**Civil Rights Act 1964（1964 民权法案）**：
林登·约翰逊（LBJ）总统推动通过，禁止公共场所（餐厅、旅馆等）
和就业中的种族隔离与歧视。**但它没解决投票权**——这是关键缺口。

**1965 年 3 月 7 日 Selma / Bloody Sunday（血腥星期日）**：
为争投票权，约 600 人从 Selma 出发走向州府 Montgomery。
他们走上 **Edmund Pettus 桥**——这座桥讽刺地以一个三 K 党头目命名——
桥那头等着他们的是州警的警棍和催泪瓦斯。
电视把这一幕播给全国，舆论翻转。
两周后，受联邦法院保护、有军队护卫的大游行成功走到 Montgomery
（约 2.5 万人在州议会前集会）。

**Voting Rights Act 1965（1965 投票权法案）**：
1965 年 8 月 6 日 LBJ 签署。
**禁止识字测验**——那就是当年用来挡黑人登记的把戏。
同时授权联邦政府监督南方各州的选民登记。
此后南方黑人登记率大幅上升。

**诚实呈现（故事没停在「赢了」）**：
**2013 年 Shelby County v. Holder 案，最高法院削弱了投票权法案的核心条款**，
新的投票限制（关闭投票站、严苛身份证要求）随之出现。
你在 Selma 少年那条故事线第 9 节读到「一生画了一个没合上的圆」就是这个意思。

考点关键句：**1964 管隔离，1965 管投票**——别搞混两部法律分管什么。`,
          en: `The Selma teenager's story covers Selma and the Voting Rights Act. Key
takeaways — I memorize the two laws together, because they came one after another and
solved different problems:

**Civil Rights Act 1964**: pushed through by President Lyndon Johnson (LBJ), banning
racial segregation and discrimination in public accommodations (restaurants, hotels,
etc.) and in employment. **But it did not solve voting rights** — that was the key gap.

**March 7, 1965 — Selma / Bloody Sunday**: marching for voting rights, about 600
people set out from Selma toward the capital, Montgomery. They walked onto the
**Edmund Pettus Bridge** — ironically named for a Ku Klux Klan leader — where state
troopers waited with batons and tear gas. Television broadcast the scene nationwide,
and opinion turned. Two weeks later, a march protected by a federal court and guarded
by troops successfully reached Montgomery (about 25,000 people rallied at the state
capitol).

**Voting Rights Act 1965**: signed by LBJ on August 6, 1965.
**Banned literacy tests** — the very trick used to block Black registration.
Also authorized the federal government to oversee voter registration in Southern states.
Black registration in the South rose sharply afterward.

**Honest framing (the story doesn't stop at "we won")**: In 2013, **Shelby County v.
Holder weakened the core clause of the Voting Rights Act**, and new voting restrictions
(closed polling stations, strict ID rules) followed. What you read at the end of the
Selma teenager's story — "a life that drew a circle that never closed" — means exactly
this.

Key exam sentence: **1964 covers segregation, 1965 covers voting** — don't confuse
which law handles what.`,
        },
      },
    },

    // ── 8. Bayard Rustin / March on Washington（故事覆盖型：bayard-rustin）──
    {
      id: 'rustin-march-on-washington',
      termCn: '拉斯廷 / 华盛顿大游行',
      termEn: 'Bayard Rustin / March on Washington',
      defCn: '贝亚德·拉斯廷是 MLK 的非暴力导师，也是 1963 年华盛顿大游行（约 25 万人）的总指挥——却因同性恋身份被运动雪藏，直到死后 26 年才被追授总统自由勋章。',
      defEn: 'Bayard Rustin was MLK\'s nonviolence mentor and chief organizer of the 1963 March on Washington (about 250,000 people) — yet he was sidelined by the movement for being gay, and received the Presidential Medal of Freedom only 26 years after his death.',
      standardRef: ['APUSH Period 8 (CED 8.10)', 'CA HSS 11.10'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'bayard-rustin',
        nodeIds: ['br-n1', 'br-n2', 'br-n6', 'br-n10'],
        xiaoweiNote: {
          cn: `拉斯廷那条故事线整条都是他。重点提炼：

**Bayard Rustin（贝亚德·拉斯廷，1912-1987）**，民权运动里
「贡献最大、名字最少被提起」的人。两个核心贡献：

① **非暴力技术的引进者**：1940 年代他去印度研究甘地的非暴力，
   是美国少数真正吃透这套**技术**（不只是道德）的人，
   后来手把手教 MLK（你在拉斯廷故事线第 2、3 节读到过）。

② **1963 年 8 月 28 日 March on Washington（华盛顿大游行）总指挥**：
   约 25 万人聚集华盛顿，MLK 在这里发表「我有一个梦想」。
   这场游行的后勤——交通、厕所、纠察、音响、警方协调——
   是 Rustin 用两个月一手调度出来的。

**运动雪藏他的故事（中立呈现）**：Rustin 是公开的同性恋者，
1953 年曾因此被捕。运动内外都怕他的身份成为攻击运动的把柄，
于是反复把他推到幕后——一个争「平等」的运动，内部却排斥
「不够体面」的成员。直到 **2013 年（他死后 26 年）才被追授总统自由勋章**。
这说明进步运动并非铁板一块、并非没有内部排斥。

考点关键句：Rustin = MLK 的非暴力导师 + 华盛顿大游行操盘手；
他被边缘化，是「进步运动内部也有排斥」的经典 DBQ 案例。`,
          en: `Rustin's whole story is about him. Key takeaways:

**Bayard Rustin (1912-1987)**, the man in the civil rights movement who "gave the most
and whose name is spoken the least." Two core contributions:

① **He brought nonviolent technique into the movement**: in the 1940s he went to India
   to study Gandhi's nonviolence, and was one of the few Americans who truly mastered
   it as a **technique** (not just a morality), later teaching MLK step by step
   (you read this in Rustin's story,-3).

② **Chief organizer of the August 28, 1963 March on Washington**: about 250,000 people
   gathered in Washington, where MLK gave "I Have a Dream." The logistics of this
   world-shaking march — transport, toilets, marshals, sound, coordination with police —
   were arranged by Rustin in two months, by his own hand.

**How the movement pushed him to the background (neutral framing)**: Rustin was an
openly gay man, arrested for it in 1953. Both inside and outside the movement, people
feared his identity would become a weapon against the cause, so they pushed him
repeatedly to the back — a movement fighting for "equality" that excluded its own
"not respectable enough" members. Only **in 2013 (26 years after his death) was he
posthumously awarded the Presidential Medal of Freedom.** This shows that a progressive
movement is not a single bloc and not free of internal exclusion.

Key exam sentence: Rustin = MLK's nonviolence mentor + organizer of the March on
Washington; his sidelining is the classic DBQ case of "even a progressive movement has
internal exclusion."`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `「平等保护」（equal protection）早在 1868 年就写进了宪法第 14 修正案——
可一直到 1954 年 Brown v. Board 才在校园这块兑现一点点，再到 1965 年
血流过 Selma 的桥，国会才写下保护投票权的法律。

「把权利写进法律」和「让权利真正落地」之间，差了将近一百年。
你觉得，差的到底是什么？为什么一句白纸黑字的承诺，会落地这么慢？`,
      en: `"Equal protection" was written into the 14th Amendment back in 1868 — yet it
wasn't honored, even a little, in schools until Brown v. Board in 1954, and not until
blood ran across the Selma bridge in 1965 did Congress write a law protecting voting
rights.

Between "writing a right into law" and "making a right real" lay nearly a hundred years.
What do you think the gap actually was? Why would a promise set down in black and white
take so long to be made real?`,
      hintCn: `提示：可以从几个角度想：
① 写下法律的人和执行法律的人不是同一批人，南方各州用「massive resistance（大规模抵制）」拖延。
② Brown 只说「要废」、没说「多快废」，给了拖延的空子。
③ 真正逼动它的，不是法律本身，而是普通人走上街头、上电视的画面
   （Birmingham 的水枪、Selma 的桥）。

进阶思考：今天有没有「法律早写好、可现实里某些人还是享受不到」的例子？
让一句承诺真正落到每个普通人头上，靠的是什么？`,
      hintEn: `Hint — think from a few angles:
① The people who write a law and the people who enforce it aren't the same;
  Southern states used "massive resistance" to delay.
② Brown said "must end" but not "how fast," leaving room to stall.
③ What actually forced it forward was not the law itself but ordinary people in
  the streets and on television (the hoses in Birmingham, the bridge in Selma).

Going deeper: is there an example today where "the law is already written, yet some
people still can't enjoy it"? What does it take to make a promise truly reach every
ordinary person?`,
      conceptsActivated: ['brown-v-board-1954', 'civil-rights-act-voting-rights-act', 'wallace-schoolhouse-door'],
    },
    {
      id: 'q2',
      cn: `民权运动内部对「该用什么方法」有过分歧：MLK 代表的非暴力路线
（挨打也不还手，靠舆论和道德高地逼出立法）；Malcolm X 等人代表的
黑人权力/自卫路线（必要时用武力保护自己，强调自决和黑人自豪）。

如果你是 AP 老师，要出一道 DBQ 题，让学生**公平地分析这两条路线
各自在回应什么问题**（而不是评判谁对谁错），你会怎么提问？`,
      en: `Within the civil rights movement there was disagreement over "what method to
use": the nonviolence line represented by MLK (taking blows without striking back,
forcing legislation through public opinion and the moral high ground); and the Black
Power / self-defense line represented by figures like Malcolm X (using force to
protect yourself when necessary, emphasizing self-determination and Black pride).

If you were an AP teacher writing a DBQ that asks students to **fairly analyze what
problem each line was responding to** (rather than judging who was right), how would
you phrase the question?`,
      hintCn: `提示：好的 DBQ 不会问「谁对谁错」，而会问「两条路线分别针对什么、
各自的代价和局限是什么」。可以给学生几份材料：MLK 的 Letter from Birmingham Jail、
Malcolm X 的演讲片段、北方城市贫困和警察暴力的数据。让学生分析：
非暴力擅长解决南方的法定隔离，Black Power 在回应北方「有了法律权利、
却没有经济权力」的落差——两者针对的不完全是同一个问题。

可能的提问角度：「为什么非暴力赢得了立法，却没能解决北方城市的不平等？
Black Power 在补哪一块？」记住——目标是呈现张力，不是站队。`,
      hintEn: `Hint: a good DBQ doesn't ask "who was right" — it asks "what was each line
targeting, and what were its costs and limits?" You could give students sources: MLK's
Letter from Birmingham Jail, excerpts of Malcolm X's speeches, and data on Northern
urban poverty and police violence. Have students analyze: nonviolence was well suited
to ending the South's legal segregation, while Black Power responded to the Northern
gap of "having legal rights but no economic power" — the two weren't targeting the
same problem.

Possible angle: "Why did nonviolence win legislation but fail to solve inequality in
Northern cities? What gap did Black Power fill?" Remember — the goal is to present the
tension, not to take a side.`,
      conceptsActivated: ['nonviolence-vs-black-power', 'birmingham-letter', 'rustin-march-on-washington'],
    },
    {
      id: 'q3',
      cn: `1965 年投票权法案通过，南方黑人登记率大幅上升——这是巨大的胜利。
可几十年后，2013 年最高法院在 Shelby County 案削弱了这部法律的核心条款，
新的投票限制（关投票站、严苛身份证）又一点点回来。

历史课本喜欢讲「自由不断进步」的故事。民权运动算这种故事的好例子吗？
还是它其实也提醒我们——一个运动「赢了」之后，赢来的东西还可能被慢慢拿走？`,
      en: `The Voting Rights Act passed in 1965 and Black registration in the South rose
sharply — a huge victory. Yet decades later, in 2013, the Supreme Court's Shelby
County case weakened the law's core clause, and new voting restrictions (closed polling
stations, strict ID rules) came creeping back.

History textbooks love the story of "freedom always progressing." Is the civil rights
movement a good example of that story? Or does it also remind us that after a movement
"wins," what it won can still be slowly taken away?`,
      hintCn: `提示：这道题考的是同一件事上「变化」和「不变」同时存在的张力。
一方面，运动确实赢得了法定隔离的废除和投票权立法（变化）；
另一方面，事实上的不平等延续至今、投票权博弈反复（没变）。
DBQ 高分的关键，就是同时写出这两面，而不是只讲凯歌。

进阶思考：如果一个用血换来的胜利还能被慢慢收回，那它到底算「赢了」，
还是只算「赢了一程」？这是否意味着「进步」需要每一代人重新去守？`,
      hintEn: `Hint: this question tests the tension of "change" and "continuity" existing
at the same time. On one hand, the movement did win the end of legal segregation and
voting-rights legislation (change); on the other, real inequality persists and the
voting-rights struggle keeps repeating (continuity). The key to a high-scoring DBQ is
to write both sides, not just the triumph.

Going deeper: if a victory bought with blood can still be slowly taken back, was it
really "winning," or only "winning one stretch"? Does that mean "progress" must be
re-defended by each generation?`,
      conceptsActivated: ['civil-rights-act-voting-rights-act', 'brown-v-board-1954', 'wallace-schoolhouse-door'],
    },
  ],
};

export default notebook;
