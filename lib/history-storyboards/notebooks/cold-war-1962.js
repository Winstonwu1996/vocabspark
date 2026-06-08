// ─── 同伴笔记本架构 v1 · Cold War 1947-1991 ──────────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson 300-500 字)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 课纲对齐：
//   - AP World History Modern Unit 8.1-8.8（冷战起源 / 古巴导弹危机 / 代理战争 / 去殖民与不结盟 / 冷战终结）
//   - APUSH Period 8（1945-1980）
//   - California HSS 10.9, 11.9
//
// ⚠️ Rule 0 中立（全 spine 最敏感 Topic）：美苏对称批评、不设道德赢家、给 proxy-war 平民视角重量。
//   小 U 的笔记里美苏并列、两套叙事框架都呈现、不下"谁对谁错"结论。
//   事实对账本：JFK 越南顾问数 = 1962 年底约 1.1 万、1963 年底约 1.6 万，遇刺(1963.11)时约 1.5 万。
//
// schemaVersion: 1 · notebookVersion: cold-war-1962-v1

export var notebook = {
  topicId: 'cold-war-1962',
  topicNameCn: '冷战',
  topicNameEn: 'The Cold War 1947-1991',
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
    cn: `今天老师说我们要学冷战（1947-1991）。她提醒我们：这是全学期"最容易吵起来"的一课——
因为我家里讲的版本，和美国课堂讲的版本，可能不一样。她说没关系，正好练"同时听两边"。

她给了一张纸，上面写着这些名字和词：

人物：John F. Kennedy（肯尼迪）、Vasili Arkhipov（阿尔希波夫）、
Khrushchev（赫鲁晓夫）、Truman（杜鲁门）、Castro（卡斯特罗）

词：Cold War（冷战）、Iron Curtain（铁幕）、containment（遏制）、
Truman Doctrine（杜鲁门主义）、Marshall Plan（马歇尔计划）、
Cuban Missile Crisis（古巴导弹危机）、proxy war（代理战争）、
MAD（相互确保毁灭）、Non-Aligned Movement（不结盟运动）

我先记下来，等下读三个故事——肯尼迪、那个潜艇分队参谋长、还有一个代理战争里的农民——
读完再回来对照这张单子，看我能不能解释这些词。

老师还说了一句我写在第一页的话："冷战没有'好人 vs 坏人'。两个大国都自认正义，
都做过同样的事。你要做的不是选边，是看懂两边。"`,
    en: `Today my teacher said we're learning the Cold War (1947-1991). She warned us:
this is the lesson "most likely to start an argument" all semester — because the version
told at home and the version told in an American classroom may not match. She said that's
fine; it's exactly the chance to practice "listening to both sides at once."

She handed out a sheet with these names and terms:

People: John F. Kennedy, Vasili Arkhipov, Khrushchev, Truman, Castro

Terms: Cold War, Iron Curtain, containment, Truman Doctrine, Marshall Plan,
Cuban Missile Crisis, proxy war, MAD (mutually assured destruction),
Non-Aligned Movement.

Let me write these down. After I read the three stories — Kennedy's, the submarine
second-in-command's, and a peasant caught in a proxy war — I'll come back and check
whether I can explain each one.

Teacher also said something I wrote on the first page: "The Cold War isn't 'good guys
vs bad guys.' Both great powers were sure of their own justice, and both did the same
things. Your job isn't to pick a side — it's to understand both."`,
    keyTerms: [
      { cn: '冷战', en: 'Cold War' },
      { cn: '铁幕', en: 'Iron Curtain' },
      { cn: '遏制', en: 'containment' },
      { cn: '杜鲁门主义', en: 'Truman Doctrine' },
      { cn: '马歇尔计划', en: 'Marshall Plan' },
      { cn: '相互确保毁灭', en: 'mutually assured destruction (MAD)' },
      { cn: '代理战争', en: 'proxy war' },
      { cn: '多米诺理论', en: 'domino theory' },
      { cn: '不结盟运动', en: 'Non-Aligned Movement' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '约翰·肯尼迪',
        nameEn: 'John F. Kennedy',
        ipa: '/dʒɒn ˈkɛnədi/',
        roleCn: '美国第 35 任总统，古巴导弹危机决策者，也是猪湾/越南升级的推手',
        roleEn: '35th US president, decision-maker in the Cuban Missile Crisis; also behind the Bay of Pigs and Vietnam escalation',
        mustKnow: true,
        audioKey: 'jfk',
      },
      {
        nameCn: '赫鲁晓夫',
        nameEn: 'Nikita Khrushchev',
        ipa: '/nɪˈkiːtə ˈkruːʃtʃɒf/',
        roleCn: '苏联领导人，古巴导弹危机中下令部署、又撤回导弹的另一方',
        roleEn: 'Soviet leader; the other side who deployed and then withdrew the Cuban missiles',
        mustKnow: true,
        audioKey: 'khrushchev',
      },
      {
        nameCn: '哈里·杜鲁门',
        nameEn: 'Harry Truman',
        ipa: '/ˈhæri ˈtruːmən/',
        roleCn: '美国第 33 任总统，杜鲁门主义与遏制政策提出者',
        roleEn: '33rd US president, author of the Truman Doctrine and containment',
        mustKnow: true,
        audioKey: 'truman',
      },
      {
        nameCn: '瓦西里·阿尔希波夫',
        nameEn: 'Vasili Arkhipov',
        ipa: '/vəˈsiːli ɐrˈxipəf/',
        roleCn: '苏联潜艇分队参谋长，随舰乘 B-59，1962 年三名军官里唯一拒绝发射核鱼雷的人',
        roleEn: 'Soviet submarine brigade chief of staff, riding aboard B-59; the one officer of three who refused to fire the nuclear torpedo in 1962',
        mustKnow: true,
        audioKey: 'arkhipov',
      },
      {
        nameCn: '菲德尔·卡斯特罗',
        nameEn: 'Fidel Castro',
        ipa: '/fɪˈdɛl ˈkæstroʊ/',
        roleCn: '古巴领导人，1959 年革命上台倒向苏联，古巴导弹危机的中心',
        roleEn: 'Cuban leader; took power in the 1959 revolution and leaned toward the USSR; center of the Cuban Missile Crisis',
        mustKnow: true,
        audioKey: 'castro',
      },
      {
        nameCn: '温斯顿·丘吉尔',
        nameEn: 'Winston Churchill',
        ipa: '/ˈwɪnstən ˈtʃɜːrtʃɪl/',
        roleCn: '英国前首相，1946 年"铁幕"演说命名了东西方分界',
        roleEn: 'Former British PM; his 1946 "Iron Curtain" speech named the East-West divide',
        mustKnow: true,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：起源（雅尔塔 / 铁幕 / 意识形态）──
    {
      id: 'cold-war-origins',
      termCn: '冷战的起源 / 铁幕',
      termEn: 'Origins of the Cold War / Iron Curtain',
      defCn: '冷战是 1947-1991 年美国和苏联之间"不开枪的全面对抗"。两国因信仰不同（一个信资本主义、一个信共产主义）而反目，把整个世界拉进了一场不用子弹却照样危险的较量。',
      defEn: 'The Cold War was a "total standoff without shooting" between the United States and the Soviet Union from 1947 to 1991. The two countries turned on each other because they believed in opposite systems — capitalism versus communism — and pulled the whole world into a dangerous rivalry that never became an open war between them.',
      standardRef: ['AP World KC-8.1', 'APUSH 8.1', 'CA HSS 10.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'jfk',
        nodeIds: ['jfk-n2'],
        xiaoweiNote: {
          cn: `这个我在肯尼迪那条故事线里读到过——他自己解释"我们为什么走到这一步"。
我把故事没细讲、但考试要补的几块拼上：

**为什么刚一起打赢纳粹，转头就反目？**
1945 年二战快结束时，美苏在雅尔塔会议（Yalta）上分了战后欧洲怎么管，
但很快就因为东欧的归属吵翻——苏联想要一圈听话的邻国当缓冲，
美国想要这些国家自由选举。一个信资本主义、一个信共产主义，谁也不信谁。

**铁幕（Iron Curtain）**：1946 年丘吉尔在美国演讲，说一道"铁幕"
从波罗的海划到亚得里亚海，把欧洲劈成两半——西边一套、东边一套。
考点关键句：这是**西方视角**的命名。苏联那边会说这是"资本主义包围社会主义"。
同一道线，两边各有各的叫法。这点 DBQ 特别爱考。

记忆口诀：起源 = **意识形态**（资本 vs 共产）+ **东欧争夺**（雅尔塔吵翻）
+ **铁幕**（一个比喻定了基调）。`,
          en: `I read this in Kennedy's storyline — he explains "why we came to this point."
Let me patch in the pieces the story skips but the test needs:

**Why turn on each other right after beating the Nazis together?**
As WWII ended in 1945, the US and USSR carved up how postwar Europe would be run
at the Yalta Conference, but quickly fell out over Eastern Europe — the Soviets
wanted a ring of obedient neighbors as a buffer; America wanted those countries
to hold free elections. One believed in capitalism, one in communism, and neither
trusted the other.

**Iron Curtain**: in 1946 Churchill, speaking in America, said an "iron curtain"
had fallen from the Baltic to the Adriatic, splitting Europe in two. Key exam point:
this is the **Western** name for it. The Soviet side would call it "capitalism
encircling socialism." Same line, two names. DBQs love this.

Mnemonic: origins = **ideology** (capitalism vs communism) + **the fight over
Eastern Europe** (Yalta falling apart) + **the Iron Curtain** (one metaphor that
set the tone).`,
        },
      },
    },

    // ── 卡 2：遏制 / 杜鲁门主义 / 马歇尔计划 — 独立 mini-lesson ──
    {
      id: 'containment-truman-marshall',
      termCn: '遏制 / 杜鲁门主义 / 马歇尔计划',
      termEn: 'Containment / Truman Doctrine / Marshall Plan',
      defCn: '遏制（containment）是美国冷战时期的总体策略——不去消灭共产主义，而是阻止它继续扩张。杜鲁门主义是这个策略的政治宣言，马歇尔计划是它的经济行动，用重建西欧来防止更多国家倒向共产主义一边。',
      defEn: 'Containment was America\'s overall Cold War strategy — not to destroy communism, but to stop it from spreading further. The Truman Doctrine was the political declaration of this strategy, and the Marshall Plan was its economic action: rebuilding Western Europe so fewer countries would fall to communism.',
      standardRef: ['AP World KC-8.1', 'APUSH 8.1', 'CA HSS 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'jfk', nodeId: 'jfk-n2', context: '肯尼迪提到 1947 杜鲁门主义"援助一切抵抗共产主义的国家"' },
        ],
      },
      standaloneText: {
        cn: `这一组三个词是冷战**最高频考点**，老师说几乎每年都考。它们其实是一条逻辑链。

**遏制（containment）**：美国冷战的总战略——不去"消灭"共产主义，
而是阻止它**继续扩张**。这个词来自外交官 George Kennan（凯南）1947 年的分析。
记住：遏制是"围堵"，不是"进攻"。

**杜鲁门主义（Truman Doctrine, 1947）**：遏制的第一次政治宣言。
杜鲁门总统宣布美国要"援助一切抵抗共产主义的国家"。
直接起因是希腊和土耳其面临共产主义压力，美国出钱出枪去顶。

**马歇尔计划（Marshall Plan, 1948）**：遏制的"经济版"。
美国给西欧约 130 亿美元重建——逻辑是：穷国容易倒向共产主义，
那就让西欧富起来、稳下来，共产主义就没土壤。苏联拒绝让东欧参加，
还搞了自己的对应计划。于是欧洲在经济上也被劈成两半。

Rule 0 提醒：马歇尔计划在美国叙事里是"慷慨援助"；
在苏联/批评者叙事里是"用经济把西欧绑成美国阵营"。两种读法都要会写。

故事连接：肯尼迪那条故事线里一句话带过杜鲁门主义，
但马歇尔计划和遏制的完整逻辑，故事没展开——这张卡补上。`,
        en: `These three terms are the **most frequently tested** Cold War concept;
teacher says they show up almost every year. They're really one chain of logic.

**Containment**: America's overall Cold War strategy — not to "destroy" communism
but to stop it from **spreading further**. The word comes from diplomat George Kennan's
1947 analysis. Remember: containment is "boxing in," not "attacking."

**Truman Doctrine (1947)**: the first political declaration of containment.
President Truman announced America would "aid any country resisting communism."
The trigger was communist pressure on Greece and Turkey; the US sent money and arms
to prop them up.

**Marshall Plan (1948)**: the "economic version" of containment. America gave
Western Europe about $13 billion to rebuild — the logic being that poor countries
fall to communism more easily, so make Western Europe rich and stable and communism
loses its soil. The USSR refused to let Eastern Europe join and ran its own counter-plan.
So Europe was split in two economically as well.

Rule 0 reminder: in the American story the Marshall Plan is "generous aid";
in the Soviet / critics' story it's "using money to bind Western Europe into America's
camp." Be able to write both readings.

Kennedy's storyline mentions the Truman Doctrine in one line, but the full
logic of containment and the Marshall Plan isn't unpacked there — this card fills it in.`,
      },
      xiaoweiNote: {
        cn: `我的记忆口诀：**遏制是策略，杜鲁门主义是"嘴"（宣言），马歇尔计划是"钱"。**
一个想法、一句宣布、一笔钱，三件事是同一件事的三张脸。
老师强调：选择题最爱混"杜鲁门主义（军事/政治援助）"和"马歇尔计划（经济重建）"，
别记反了。`,
        en: `My mnemonic: **containment is the strategy, the Truman Doctrine is the "mouth"
(the declaration), and the Marshall Plan is the "money."** One idea, one announcement,
one check — three faces of the same thing. Teacher warns: multiple choice loves to swap
"Truman Doctrine (military / political aid)" with "Marshall Plan (economic rebuilding)" —
don't mix them up.`,
      },
    },

    // ── 卡 3：古巴导弹危机 1962 ──
    {
      id: 'cuban-missile-crisis',
      termCn: '古巴导弹危机 1962',
      termEn: 'Cuban Missile Crisis 1962',
      defCn: '1962 年 10 月，苏联在古巴秘密部署核导弹，美国发现后展开对峙，双方在核战边缘周旋了 13 天，最终谈判解决。这是整个冷战最危险的一刻。',
      defEn: 'In October 1962 the Soviet Union secretly placed nuclear missiles in Cuba. When America discovered them, the two superpowers faced off for 13 days on the edge of nuclear war, and finally reached a negotiated solution. It was the single most dangerous moment of the entire Cold War.',
      standardRef: ['AP World KC-8.2', 'APUSH 8.5', 'CA HSS 11.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['jfk-n4', 'jfk-n5', 'jfk-n6', 'jfk-n7', 'ark-n4', 'ark-n5', 'ark-n6'],
        xiaoweiNote: {
          cn: `三条故事线都讲到了，是整门课的核心。我把考试要的骨架拎出来：

**时间**：1962 年 10 月 16 日（侦察照片确认苏联在古巴架核导弹）→ 10 月 28 日
（赫鲁晓夫宣布撤），一共 **13 天**。古巴离美国海岸只有约 150 公里。

**肯尼迪的选择**：空袭、入侵、封锁、什么都不做——四条都通向核战。
他选了**封锁**，故意叫"隔离"（quarantine），因为"封锁"（blockade）在国际法上等于宣战。
他还私下答应撤掉美国在土耳其、对着苏联的导弹，给对方一个不丢脸的台阶。

**10 月 27 日"黑色星期六"**：一架美国侦察机在古巴被击落、飞行员死了。
同一天，加勒比海面下苏联潜艇 B-59 里，三个军官在吵要不要发射核鱼雷——
分队参谋长 Arkhipov 投了唯一的反对票。

考点关键句：世界没毁灭，**不是单一英雄赢的**——是肯尼迪的克制 + 赫鲁晓夫的退让
+ 私下交易（撤土耳其导弹）+ Arkhipov 那一票 + 一点侥幸，多方因素加起来。
"古巴危机 = JFK 一个人冷静博弈赢的"是常见误解，别这么写。`,
          en: `All three storylines cover this — it's the heart of the topic. Let me pull out
the skeleton the test wants:

**Dates**: 16 October 1962 (spy photos confirm Soviet nuclear missiles going up in Cuba)
→ 28 October (Khrushchev announces withdrawal), a total of **13 days**. Cuba is only
about 150 km from the American coast.

**Kennedy's options**: air strike, invasion, blockade, do nothing —
all four led toward nuclear war. He chose the **blockade**, deliberately calling it a
"quarantine," because in international law a "blockade" counts as an act of war. He also
privately agreed to remove US missiles in Turkey aimed at the USSR, giving the other side
a face-saving way down.

**"Black Saturday," 27 October**: an American spy plane was shot down over Cuba and the
pilot killed. That same day, beneath the Caribbean inside Soviet submarine B-59, three
officers argued over firing a nuclear torpedo — brigade chief of staff Arkhipov cast the
only "no."

Key exam point: the world wasn't saved by a single hero — it was Kennedy's restraint
+ Khrushchev's backing down + a secret deal (the Turkey missiles) + Arkhipov's one vote
+ some luck, many factors together. "The crisis was won by JFK's cool calculation alone"
is a common misconception — don't write it that way.`,
        },
      },
    },

    // ── 卡 4：核军备竞赛 / MAD ──
    {
      id: 'nuclear-arms-race-mad',
      termCn: '核军备竞赛 / 相互确保毁灭 (MAD)',
      termEn: 'Nuclear Arms Race / Mutually Assured Destruction (MAD)',
      defCn: '核军备竞赛是美苏争相制造越来越多核武器的过程。相互确保毁灭（MAD）是它的结果：双方核武多到谁先动手都会被对方反击、两败俱伤——正是这种"同归于尽"的恐惧，让两国始终没有直接开战。',
      defEn: 'The nuclear arms race was the US-Soviet competition to build more and more nuclear weapons. Mutually Assured Destruction (MAD) was the result: both sides held so many warheads that whoever struck first would be struck back and both destroyed — and it was precisely this fear of mutual ruin that kept the two countries from ever fighting each other directly.',
      standardRef: ['AP World KC-8.2', 'APUSH 8.5', 'CA HSS 11.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'jfk',
        nodeIds: ['jfk-n6', 'jfk-n10'],
        xiaoweiNote: {
          cn: `肯尼迪那条故事线的第 6 节讲得最清楚。我把定义和考点拎出来：

**核军备竞赛**：1945 年美国在广岛、长崎扔了原子弹（你跑过二战那段历史）；
1949 年苏联也试爆成功。从那以后两边拼命造核弹，越堆越多。

**相互确保毁灭（MAD, Mutually Assured Destruction）**：双方核武多到——
**谁先动手，对方都来得及反击，最后两边一起完蛋**。没有赢家，只有同归于尽。
考点关键句：正是这种"同归于尽"的恐惧，可能反而**阻止了**美苏直接开战。

Rule 0 careful framing（这点 DBQ 高频）：MAD 是"成功"还是"疯狂"？
两种读法都成立——它可能确实拦住了第三次世界大战；
但代价是把暴力**挤压到第三世界**（看代理战争里农民的故事），还让全人类长期活在核阴影下。
"MAD 很疯狂所以没用"是误解——别这么简单地写。

跨课锚：原子弹（二战）→ MAD（冷战）是直接续接。`,
          en: `Kennedy's storyline explains this best in the sixth part. Here are the definition
and exam points:

**Nuclear arms race**: in 1945 America dropped atomic bombs on Hiroshima and Nagasaki
(you ran the WWII topic); in 1949 the USSR tested one too. From then on both sides built
warheads feverishly, piling them ever higher.

**Mutually Assured Destruction (MAD)**: both sides held so many nuclear arms that
**whoever struck first, the other still had time to strike back, and both were finished.**
No winner, only mutual ruin. Key exam point: it was precisely this fear of "mutual ruin"
that may have **prevented** the US and USSR from fighting directly.

Rule 0 careful framing (high-frequency DBQ): was MAD a "success" or "madness"?
Both readings hold — it may genuinely have stopped a Third World War; but the price was
squeezing the violence **into the Third World** (see the peasant's storyline) and keeping
all of humankind under a nuclear shadow for decades. "MAD was crazy so it was useless"
is a misconception — don't write it that simply.

Cross-topic anchor: the atomic bomb (WWII) → MAD (Cold War) connect directly.`,
        },
      },
    },

    // ── 卡 5：代理战争（朝鲜 / 越南）──
    {
      id: 'proxy-wars-korea-vietnam',
      termCn: '代理战争（朝鲜 / 越南）',
      termEn: 'Proxy Wars (Korea / Vietnam)',
      defCn: '代理战争（proxy war）是指大国不亲自上场，而是在第三个国家各支持一方，让别国的人替自己流血打仗。朝鲜战争和越战是冷战中最典型的两场代理战争。',
      defEn: 'A proxy war is when great powers don\'t fight each other directly, but instead each back a side in a third country, letting other people\'s soldiers bleed for them. The Korean War and the Vietnam War were the two biggest Cold War proxy wars.',
      standardRef: ['AP World KC-8.2', 'APUSH 8.5', 'CA HSS 10.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'jfk',
        nodeIds: ['jfk-n8', 'jfk-n9'],
        xiaoweiNote: {
          cn: `肯尼迪那条故事线讲了代理战争和越南，农民那条故事线整条都是代理战争里的平民视角。
故事没单独讲**朝鲜战争**，我把它补上：

**代理战争（proxy war）定义**：核武器让美苏不敢直接开战——直接打就是同归于尽。
于是他们改在**第三国**各支持一方，让别国的人替他们流血。

**朝鲜战争（1950-1953）**：第一场大型热代理战争。北朝鲜（苏联、中国支持）
打南朝鲜（美国为首的联合国军支持）。中国出兵"抗美援朝"，是中国课纲的重点。
打了三年，回到原来的分界线（三八线附近），死了几百万人。

**越南**：北越（共产，苏中支持）vs 南越（亲美）。肯尼迪信
**多米诺理论**（一国倒向共产主义会带倒一片），一步步派"军事顾问"。
事实对账（重要）：1962 年底约 1.1 万美军顾问，到 1963 年底约 1.6 万，
肯尼迪 1963 年 11 月遇刺时约**一万五千**名。他死后越战越打越大，
最终几十万美军陷入、几百万越南人死亡。

考点关键句：代理战争里，**真正付代价的是第三世界平民**（农民那条故事线）——
死的平民远多于两个超级大国自己的士兵。`,
          en: `Kennedy's storyline covers proxy war and Vietnam, and the peasant's entire
storyline is a proxy-war civilian's perspective. The story doesn't separately cover the
**Korean War**, so let me add it:

**Proxy war defined**: nuclear weapons made the US and USSR afraid to fight directly —
to do so was mutual ruin. So instead they each backed a side in a **third country**,
letting other peoples bleed for them.

**Korean War (1950-1953)**: the first large hot proxy war. North Korea (backed by the
USSR and China) fought South Korea (backed by US-led UN forces). China entered to
"resist America and aid Korea," a key point in the Chinese curriculum. Three years of
fighting ended near the original dividing line (around the 38th parallel), with millions dead.

**Vietnam**: North Vietnam (communist, backed by the USSR and China) vs South Vietnam
(pro-American). Kennedy believed the **domino theory** (one country falling to communism
topples a row) and step by step sent "military advisers."
Fact check (important): about 11,000 US advisers by the end of 1962, about 16,000 by the
end of 1963; when Kennedy was assassinated in November 1963 there were about **15,000**.
After his death the war grew and grew — hundreds of thousands of US troops sucked in,
millions of Vietnamese killed.

Key exam point: in proxy wars the ones who **really pay are Third World civilians**
(the peasant's storyline) — far more civilians died than soldiers of the two superpowers.`,
        },
      },
    },

    // ── 卡 6：去殖民与冷战交织 / 不结盟运动 — 独立 mini-lesson ──
    {
      id: 'decolonization-non-aligned',
      termCn: '去殖民与冷战交织 / 不结盟运动',
      termEn: 'Decolonization & the Cold War / Non-Aligned Movement',
      defCn: '去殖民化（decolonization）是指二战后亚非拉各地殖民地纷纷争取独立的过程。不结盟运动（Non-Aligned Movement）是这些新独立国家拒绝在美苏之间选边站的集体努力，1961 年正式成立。',
      defEn: 'Decolonization was the wave of independence movements across Asia, Africa, and Latin America after World War II. The Non-Aligned Movement was the effort by these newly independent nations to refuse to take sides between the US and the USSR; it was formally founded in 1961.',
      standardRef: ['AP World KC-8.2', 'AP World KC-8.3', 'CA HSS 10.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'proxy-war-peasant-receiving-end', nodeId: 'pwp-n9', context: '农民点出从殖民时代到冷战"远方强者画线、本地人流血"是同一条线' },
        ],
      },
      standaloneText: {
        cn: `这块故事只在农民那条故事线里点了一下"殖民→冷战是同一条线"，
但**不结盟运动**没单独讲——而它是 AP Unit 8 的必考点。我补完整：

**去殖民与冷战为什么搅在一起？**
二战后，亚非拉一大批殖民地纷纷独立（去殖民化，decolonization）。
这些刚独立的新国家又穷又脆弱，正好成了美苏争夺的对象——
谁能把它们拉进自己阵营，谁就在冷战里多一分。
于是很多新国家的内部斗争（谁当政、要不要"分地"），
被两个大国硬塞进"资本主义还是共产主义"的框子里，变成了代理战争。
（这正是那个农民的遭遇。）

**不结盟运动（Non-Aligned Movement）**：一批新独立国家**拒绝选边**的努力。
① 1955 年印尼万隆会议（Bandung Conference）是起点。
② 1961 年正式成立。
③ 代表人物有印度的尼赫鲁、埃及的纳赛尔、南斯拉夫的铁托。
他们说："我们不站美国，也不站苏联，我们要自己的发展道路。"

考点关键句：不结盟运动证明——第三世界**不是只能选边**。
但 careful framing：真正做到中立很难，很多"不结盟"国家最后还是被卷进了冷战。

Rule 0：这套"两极争霸 + 广大第三世界"的三分框架，
正是中国官方讲冷战的角度（中国主张"和平共处五项原则"、支持第三世界）。
它和美国课堂"自由世界 vs 极权"的两极框架，切分世界的方式根本不同——两套都要懂。`,
        en: `The story only touches "empire → Cold War is one line" in the peasant's storyline,
but the **Non-Aligned Movement** isn't covered on its own — and it's a required AP Unit 8
point. Let me complete it:

**Why are decolonization and the Cold War tangled together?**
After WWII, a wave of colonies across Asia, Africa, and Latin America won independence
(decolonization). These new nations were poor and fragile, and became exactly what the
US and USSR competed over — whoever pulled them into their camp gained an edge in the
Cold War. So many new nations' internal struggles (who rules, whether to "divide the land")
got forced into the frame of "capitalism or communism" and turned into proxy wars.
(This is exactly the peasant's experience.)

**Non-Aligned Movement**: an effort by newly independent nations to **refuse to pick a side**.
① The 1955 Bandung Conference in Indonesia was its start.
② It was formally founded in 1961.
③ Leading figures included Nehru of India, Nasser of Egypt, and Tito of Yugoslavia.
They said: "We stand with neither America nor the Soviet Union; we want our own path to
development."

Key exam point: the Non-Aligned Movement proves the Third World **wasn't forced to choose
sides**. But careful framing: true neutrality was hard, and many "non-aligned" countries
were swept into the Cold War anyway.

Rule 0: this "two-superpower rivalry + a vast Third World" three-way frame is exactly
how China officially tells the Cold War (China championed the "Five Principles of Peaceful
Coexistence" and backed the Third World). It carves up the world in a fundamentally
different way from the American classroom's "free world vs totalitarian" two-camp frame —
you should understand both.`,
      },
      xiaoweiNote: {
        cn: `老师说这张卡是"中国学生在美国课堂最容易和老师/同学吵起来"的地方——
因为家里讲的框架（第三世界、和平共处五项原则）和课堂的两极框架不一样。
她的建议：别急着说谁对，先把**两套框架都准确说出来**，
DBQ 评分恰恰奖励"能同时呈现两边"的人。我的口诀：
**万隆 1955（起点）、正式成立 1961、三个代表：尼赫鲁/纳赛尔/铁托。**`,
        en: `Teacher said this card is where "Chinese students most often clash with the
teacher or classmates in an American classroom" — because the frame told at home
(the Third World, the Five Principles) differs from the classroom's two-camp frame.
Her advice: don't rush to say who's right; first state **both frames accurately** —
DBQ scoring actually rewards people who can present both sides. My mnemonic:
**Bandung 1955 (the start), formally founded 1961, three faces: Nehru / Nasser / Tito.**`,
      },
    },

    // ── 卡 7：冷战结束 1991 ──
    {
      id: 'end-of-cold-war',
      termCn: '冷战结束 1991',
      termEn: 'End of the Cold War 1991',
      defCn: '1991 年苏联从内部解体，冷战就此结束。没有打最后一场大仗——一方"赢"了，但赢法很奇怪：不是靠核弹打赢，而是对方自己撑不住了。',
      defEn: 'In 1991 the Soviet Union collapsed from within, and the Cold War ended. There was no final battle — one side "won," but in a strange way: not through nuclear bombs, but because the other side could no longer hold itself together.',
      standardRef: ['AP World KC-8.8', 'APUSH 8.5', 'CA HSS 10.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['jfk-n10', 'pwp-n10', 'pwp-n11'],
        xiaoweiNote: {
          cn: `肯尼迪那条故事线的第 10 节替我们把故事讲到头，农民那条故事线的第 10、11 节
从底层视角看结局。考点骨架：

**冷战怎么结束的？**
古巴危机后冷战又打了快 30 年，中间有"缓和"（détente，1970s 关系暂时变好），
也有重新紧张。**1991 年苏联从内部解体**——没有打最后一仗。
一方"赢"得很奇怪：不是靠核弹，是对方自己撑不住了。

careful framing（DBQ 高频争点）：苏联是被美国军备竞赛**"拖垮"**的（美国胜利论），
还是**"自我崩溃"**（内部经济停滞、政治僵化、民族矛盾）？
史学界**没有定论**。考试问到这个，要两边都写、别下死结论。

**两个视角的"结束"完全不同（Rule 0 重点）**：
- 从白宫/全球看：1991 没有蘑菇云，人类躲过核毁灭，值得庆幸。
- 从代理战争的村子看：大国一走，留下的是打烂的国家、埋在地里的地雷、
  回不去的难民、几代人的仇恨——对他们，仗没那么干脆地"结束"。

考点关键句：冷战的"结束"对超级大国和对第三世界，是**两件不一样的事**。`,
          en: `Kennedy's storyline carries the story to its close, and the peasant's storyline
shows the ending from the bottom up. Exam skeleton:

**How did the Cold War end?**
After the Cuban crisis the Cold War ran nearly 30 more years, with "détente" (a 1970s
easing) and renewed tension in between. **In 1991 the Soviet Union came apart from within** —
with no final battle. One side "won" strangely: not by nuclear bombs, but because the
other could no longer hold itself up.

Careful framing (high-frequency DBQ debate): was the USSR **"worn down"** by the American
arms race (the US-victory view), or did it **"collapse on its own"** (internal economic
stagnation, political rigidity, ethnic tensions)? Historians have **no settled answer**.
If the test asks, write both sides and don't draw a hard conclusion.

**The "ending" looks completely different from two viewpoints (Rule 0 focus)**:
- From the White House / globally: 1991 brought no mushroom cloud, humankind dodged
  nuclear ruin — something to be thankful for.
- From a proxy-war village: when the great powers left, what remained was wrecked
  countries, buried landmines, refugees who couldn't go home, and generations of
  hatred — for them, the fighting didn't end so cleanly.

Key exam point: the Cold War's "ending" was **two different things** for the superpowers
and for the Third World.`,
        },
      },
    },

    // ── 卡 8：柏林危机（1948-49 封锁与空运 / 1961 柏林墙）— 独立 mini-lesson ──
    {
      id: 'berlin-crisis',
      termCn: '柏林危机：封锁与空运（1948-49）/ 柏林墙（1961）',
      termEn: 'Berlin Crisis: Blockade & Airlift (1948-49) / Berlin Wall (1961)',
      defCn: '1948 年苏联封堵西柏林的全部陆路，美英用空运把物资运进去养活 200 万市民，撑了近 11 个月直到苏联解封。1961 年东德在苏联授意下修起柏林墙，把这座城市从中间切断，一直到 1989 年才推倒。',
      defEn: 'In 1948 the Soviet Union blocked all land routes to West Berlin; the US and Britain airlifted supplies in to keep 2 million residents alive for nearly eleven months until the Soviets backed down. In 1961, East Germany — backed by the Soviets — built the Berlin Wall, cutting the city in two; it stood until 1989.',
      standardRef: ['AP World KC-8.1', 'APUSH 8.1', 'APUSH 8.4', 'CA HSS 10.9'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `AP 和 APUSH 都考，故事里没讲，这张卡补完整。

**1948-49 柏林封锁与空运**
1948 年 6 月，苏联封锁西柏林全部陆路，切断食物、燃料。
美英回答：**空运（Berlin Airlift）**——将近 11 个月、每天 600 多架次，
把煤炭粮食空投进去，养活 200 万市民。
1949 年 5 月苏联解封，空运赢了。

**1961 年柏林墙**
到 1961 年已有 350 万东德人出逃西方。8 月 13 日凌晨，
东德在苏联授意下用铁丝网和混凝土封死西柏林，
家庭、邻居、街道一夜被劈成两半。

**考点关键句**：
- 封锁 = 遏制政策的**第一次实物检验**，苏联测底线，美英用空运扛住了。
- 柏林墙 = 冷战最具象征性实物。美国叫"耻辱之墙"，东德/苏联叫"反法西斯防护墙"——
  同一道墙，两个名字，两套叙事。**1989 年墙倒直接标志冷战终结。**

Rule 0：封锁和建墙在苏联叙事里是防御（阻止人才资本外流），不是单纯挑衅。两种读法都要会写。`,
        en: `Both AP World and APUSH test these two episodes; the story doesn't cover them,
so this card fills in the gap.

**The Berlin Blockade and Airlift (1948-49)**
In June 1948 the USSR blocked all land routes to West Berlin, cutting off food, fuel, and supplies.
The American and British answer was the **Berlin Airlift**:
for nearly eleven months, Western planes averaged over 600 flights a day,
delivering food, coal, milk, even candy by the barrel and bag,
keeping 2 million West Berliners alive.
In May 1949 the Soviets lifted the blockade — the airlift won, and West Berlin did not
fall to the USSR.

**The Berlin Wall (1961)**
By 1961, more than 3.5 million East Germans had escaped through Berlin to the West.
In the early hours of 13 August 1961, East Germany — with Soviet backing — strung barbed
wire and poured concrete, sealing off West Berlin. The wall cut straight through the city;
families, neighbors, streets were split overnight.

**Key exam sentences**:
- Berlin Blockade = the **first physical test** of the containment strategy: the USSR probed
  the West's limits; America held the line with the airlift.
- Berlin Wall = the Cold War's most iconic physical object. America called it the "Wall of
  Shame"; the USSR / East Germany called it the "Anti-Fascist Protection Wall" — same wall,
  two utterly different names, each serving its own narrative. When it fell in 1989, that
  directly marked the Cold War's end.

Rule 0 reminder: why the blockade, why the wall? The Soviet logic was that West Berlin was
a capitalist infiltration window, and allowing free emigration meant a constant drain of
talent and resources. From the Soviet side, these were defensive measures, not pure
provocation. Both readings need to be in your essay toolkit.`,
      },
      xiaoweiNote: {
        cn: `老师说这两段"几乎每次 AP 都出"，又是"全班同学最容易混的"。
我的口诀：**① 1948 封锁 → ② 1949 空运赢 → ③ 1961 建墙 → ④ 1989 墙倒 = 冷战前中后的四个锚点。**
选择题最爱混"谁封锁"（苏联）和"谁空运"（美英），以及"1948 墙还是 1961 墙"（只有 1961）。`,
        en: `Teacher said these two episodes "show up on AP almost every time" and are
"the ones the whole class most easily mixes up."
My mnemonic: **① 1948 blockade → ② 1949 airlift wins → ③ 1961 Wall built → ④ 1989 Wall falls =
four anchor points across the early, middle, and late Cold War.**
Multiple choice loves mixing up "who blockaded" (USSR) with "who airlifted" (US and UK),
and "was the wall 1948 or 1961" (only 1961).`,
      },
    },

    // ── 卡 9：麦卡锡主义（McCarthyism）— 独立 mini-lesson ──
    {
      id: 'mccarthyism',
      termCn: '麦卡锡主义（McCarthyism）/ 红色恐慌',
      termEn: 'McCarthyism / the Red Scare',
      defCn: '麦卡锡主义（McCarthyism）是 1950 年代美国国内掀起的反共政治风暴：参议员 Joseph McCarthy 用"手里有共产党员名单"这一指控，推倒了大批政府官员、演员、作家的职业生涯——靠的不是证据，而是恐惧和猜疑。',
      defEn: 'McCarthyism was the anti-communist political witch-hunt inside America in the early 1950s: Senator Joseph McCarthy claimed to hold lists of Communists in the government, and destroyed careers across Hollywood, the military, and civil service — using fear and accusation rather than proof.',
      standardRef: ['APUSH 8.1', 'APUSH 8.2', 'CA HSS 11.9'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `故事聚焦外部冷战，APUSH 同样考国内维度——"恐共"引发的政治清洗。

**背景**：苏联试爆原子弹（1949）、中国赤化（1949）、朝鲜战争（1950），
让很多美国人担忧共产主义渗透国内，国会大搞"忠诚调查"。

**麦卡锡主义**：1950 年，参议员 **Joseph McCarthy** 声称握有国务院"205 名共产党员名单"
——他从没公开名单，却引爆政治风暴。
他在国会听证会上大肆指控各界人士"亲共"，手段是**指控而不是证明**。
Hollywood"黑名单"让编剧导演无法工作，公务员因被怀疑忠诚度而失业。

**1954 年终结**：电视直播的陆军-麦卡锡听证上，
军队律师 Joseph Welch 当着全美观众说："参议员，难道你没有一丁点体面吗？"
麦卡锡支持率崩塌，参议院以不当行为谴责他，1957 年去世。

**考点关键句**：
- 麦卡锡主义 = APUSH"第一修正案 vs 国家安全"经典案例。
- Rule 0："大多数指控无据"和"苏联确实有间谍网络（Hiss、Rosenbergs）"同时为真。
  高分答案不简化成"全是迫害"或"全有道理"。`,
        en: `The three storylines focus on the "external" Cold War — the Cuban Crisis and proxy wars.
But APUSH equally tests the Cold War's "domestic" side: a political purge inside America
fueled by anti-communist fear.

**Background**: the USSR tested an atomic bomb (1949), China "fell" (1949), and the Korean
War began (1950), convincing many Americans that communism was infiltrating the country.
Congress launched loyalty investigations.

**McCarthyism**
In 1950, Wisconsin Senator **Joseph McCarthy** claimed to hold a list of "205 Communists"
in the State Department — he never released the list, but set off a political firestorm.
In congressional hearings he accused actors, writers, military officers, and government
officials of Communist sympathies, using **accusation rather than proof** — being named
was often enough to destroy a career. Hollywood's "blacklist" left many screenwriters and
directors unable to work; civil servants were fired for insufficient demonstrations of loyalty.

**The Army-McCarthy Hearings (1954)**
In televised hearings, Army counsel Joseph Welch asked McCarthy before a national audience:
"Have you no sense of decency, sir?" McCarthy's approval collapsed; the Senate censured him
for misconduct that same year. He died in 1957, his "ism" already disgraced.

**Key exam sentences**:
- McCarthyism = APUSH's classic case study on "First Amendment vs. national security."
- It shows that external threat (Cold War fear) can erode civil liberties inside a democracy.
- Rule 0 key: "most McCarthy accusations lacked evidence" and "the USSR did run spy networks
  (Alger Hiss, the Rosenbergs)" are both simultaneously true. A high-scoring answer does not
  collapse this into "all persecution" or "all justified."`,
      },
      xiaoweiNote: {
        cn: `老师说 APUSH 考"冷战国内维度"基本就是考这个。关键：
**McCarthyism ≠ 共产主义本身是假的**——是"指控方式失控"的问题，不是"没有苏联间谍"。
我的口诀：**① 1950 麦卡锡拿名单登台 → ② 1954 电视听证垮台 → ③ 同年参议院谴责**。
选择题最爱考"谁结束了麦卡锡"——答案：电视直播的听证会（全国观众亲眼看见他的样子）。`,
        en: `Teacher said APUSH's "Cold War domestic dimension" is basically this. Key point:
**McCarthyism is not the same as "communism wasn't real"** — it was a problem of
runaway accusation tactics, not proof that there were no Soviet spies.
My mnemonic: **① 1950 McCarthy takes the stage with a list → ② 1954 televised hearings bring
him down → ③ Senate censure the same year.**
Multiple choice loves "who ended McCarthyism" — answer: the televised hearings (the whole
country watched him in action).`,
      },
    },

    // ── 卡 10：冷战的人命账 / 双框架中立 ──
    {
      id: 'cold-war-human-cost-neutrality',
      termCn: '冷战的人命账 / 两套叙事框架',
      termEn: 'The Human Cost / Two Narrative Frames',
      defCn: '冷战不是"好人 vs 坏人"。两个大国都自认正义、都在第三世界制造了巨大的平民伤亡。理解这段历史，需要同时掌握两套框架：美式的"自由世界 vs 极权"和中国/第三世界视角的"两极争霸下被牺牲的普通人"。',
      defEn: 'The Cold War isn\'t a story of good guys versus bad guys. Both superpowers believed in their own justice and both caused massive civilian suffering in the Third World. Understanding this history means holding two frames at once: the American "free world vs totalitarian" frame and the Chinese / Third World frame of "ordinary people sacrificed to two-superpower rivalry."',
      standardRef: ['AP World KC-8.2', 'AP DBQ rubric', 'CA HSS 10.9'],
      examFrequency: 'mid',  // DBQ 高频
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['pwp-n6', 'pwp-n7', 'pwp-n8', 'jfk-n9', 'ark-n11'],
        xiaoweiNote: {
          cn: `这张是老师说"AP 一定考"的综合卡——也是这一课最考验你"会不会中立"的地方。

**冷战不是"好人 vs 坏人"。** 两个大国都自认正义，都做过同样的事：
- 美国：猪湾入侵、暗杀外国领导人计划、支持反共独裁政权、越南升级（肯尼迪故事线）
- 苏联：1956 年开坦克镇压匈牙利、扶持自己阵营的独裁者、把核鱼雷开到别人家门口
  （Arkhipov 在故事里自己承认"我的军队"也是疯狂体制一部分）
肯尼迪在故事里直接说："两个都自认正义的大国，都在自己阵营里做着同样的事。"

**人命账（农民那条故事线）**：
大国头顶维持着"不动核武"的克制，代价是无数第三世界平民替他们流血。
死的平民远多于两个超级大国自己的士兵——可大多连个数字、名字都没留下。
关键句："冷战"听起来很"冷"，可在代理战争的村子里，它是热的，是火，是血。

**两套框架（Rule 0 核心）**：
- 美式：自由世界 vs 极权，强调遏制的必要。
- 中式/第三世界：两极争霸下被牺牲的第三世界，强调平民代价。
DBQ 中性要求：**同时呈现两套框架**，别让阅卷人觉得你在站队。

写 essay 模板：
① 美苏各列至少 2 件"自认正义却踩着别人"的事（对称，别只批一边）。
② 用农民那条故事线的平民形象给"代价"上人脸——别只写数字。
③ 结论：用 Arkhipov（救世界的是苏联军官）+ JFK（理想总统也搞猪湾/越南）
   双向打破"哪一边是无条件正义"。
④ 不下"谁对谁错"的死结论——这正是高分答案的标志。`,
          en: `This is the synthesis card teacher says "AP definitely tests" — and the place
this topic most tests whether you can stay neutral.

**The Cold War isn't "good guys vs bad guys."** Both great powers were sure of their own
justice and both did the same things:
- America: the Bay of Pigs invasion, plans to assassinate foreign leaders, backing
  anti-communist dictatorships, escalating Vietnam (Kennedy's storyline)
- The USSR: rolling tanks into Hungary in 1956, propping up dictators in its own camp,
  sailing a nuclear torpedo to someone else's doorstep (Arkhipov in the story admits
  "my own military" was part of the mad system too)
In Kennedy's storyline, he says outright: "Both powers, each certain of its own justice,
did the same things inside their own camps."

**The human ledger (the peasant's storyline)**:
The great powers kept their restraint from using nuclear arms, and the price was countless
Third World civilians bleeding for them. Far more civilians died than soldiers of the two
superpowers — yet most left behind neither a number nor a name. Key line: "Cold War"
sounds cold, but in a proxy-war village it was hot — it was fire, it was blood.

**Two frames (the Rule 0 core)**:
- American: free world vs totalitarian, stressing the need for containment.
- Chinese / Third World: a Third World sacrificed to two-superpower rivalry, stressing
  the civilian cost.
DBQ neutrality demands you **present both frames at once**, so the grader doesn't feel
you're taking a side.

Essay template:
① List at least 2 "sure of its justice yet trampling others" acts for each of the US and
   USSR (symmetrical — don't criticize only one side).
② Use the peasant storyline to put a human face on the "cost" — don't write only numbers.
③ Conclusion: use Arkhipov (the world-saver was a Soviet officer) + JFK (the idealist
   president also did the Bay of Pigs / Vietnam) to break "which side was unconditionally
   just" in both directions.
④ Don't draw a hard "who was right" conclusion — that restraint is the mark of a
   top-scoring answer.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `古巴导弹危机里，世界没有毁灭。一种说法：是肯尼迪冷静博弈、把世界从核战边缘拉回来的功劳。
另一种说法：更多是侥幸——靠了赫鲁晓夫退让、私下撤土耳其导弹的交易，
还有一个苏联潜艇分队参谋长 Arkhipov 没有按下的按钮。

你觉得世界没毁灭，到底该归功于"领导人的智慧"，还是承认更多是"侥幸"？
这两种说法，会让你对未来可能的核危机，抱不同的态度吗？`,
      en: `In the Cuban Missile Crisis, the world wasn't destroyed. One view: credit goes to
Kennedy's cool calculation pulling the world back from the brink. Another view: it was
more luck — Khrushchev backing down, a secret deal to remove the Turkey missiles, and a
button a Soviet submarine brigade chief of staff named Arkhipov did not press.

Do you think the world surviving should be credited to "leaders' wisdom," or do we have to
admit it was mostly "luck"? Would these two views leave you with different attitudes toward
a possible future nuclear crisis?`,
      hintCn: `提示：可以从两个角度想——
① 如果是"智慧赢的"，那我们可以相信"只要选好领导人，核危机就能化解"；
② 如果是"侥幸活的"，那真正的教训是"武器堆到这个地步本身就太危险"，
该想办法减少核武，而不是指望每次都遇到冷静的人。

进阶思考：把人类的安全押在"关键时刻总有聪明/冷静的人"上，靠谱吗？
还是说，更该靠"制度设计"（比如热线、限核条约）来降低出错的概率？`,
      hintEn: `Hint: think from two angles —
① If it was "won by wisdom," we can trust that "as long as we pick good leaders, nuclear
   crises can be resolved."
② If it was "survived by luck," the real lesson is "piling weapons this high is itself too
   dangerous," and we should reduce them rather than count on always meeting a calm person.

Going deeper: is it safe to bet humankind's survival on "there's always a smart / calm person
at the crucial moment"? Or should we rely more on "institutional design" (hotlines,
arms-limit treaties) to lower the odds of a mistake?`,
      conceptsActivated: ['cuban-missile-crisis', 'nuclear-arms-race-mad', 'end-of-cold-war'],
    },
    {
      id: 'q2',
      cn: `美式叙事说冷战是"自由世界 vs 极权"，强调遏制共产主义的必要。
中式/第三世界叙事说冷战是"两极争霸下被牺牲的第三世界"，强调平民付出的代价。
（农民那条故事线里的村子，就是为一场他根本不认识的大国争斗被烧掉的。）

如果你是历史老师，要同时把这两套框架讲给班上一半美国孩子、一半中国孩子听，
你会怎么讲，才能既准确、又不让任何一边觉得"老师在站队"？`,
      en: `The American story says the Cold War was "free world vs totalitarian," stressing
the need to contain communism. The Chinese / Third World story says it was "a Third World
sacrificed to two-superpower rivalry," stressing the price paid by civilians.
(In the peasant's storyline, the village was burned for a great-power struggle he never
even recognized.)

If you were a history teacher presenting both frames to a class half American kids, half
Chinese kids, how would you teach it so it's both accurate and doesn't make either side
feel "the teacher is taking a side"?`,
      hintCn: `提示：DBQ 阅卷恰恰奖励"能同时呈现两套框架"的人，不奖励"选一边踩另一边"。
一个办法是：先把两套框架各自**最有道理的部分**准确说出来
（美式：苏联确实在东欧扩张、镇压匈牙利；中式/第三世界：美国确实支持反共独裁、
代理战争里平民大量死亡），再让学生自己看证据判断，老师不下结论。

可能的提问角度：
- "用一个第三世界国家的真实案例，说明它在两套框架里'看起来'有多不一样。"
- "为什么同一段历史，从地图上看（颜色变化）和从地里看（一个个真人）会是两件事？"`,
      hintEn: `Hint: DBQ grading rewards people who present both frames at once, not those who
pick one side and trample the other. One approach: first state accurately the **strongest
part** of each frame (American: the USSR did expand in Eastern Europe and crush Hungary;
Chinese / Third World: America did back anti-communist dictatorships and civilians died in
huge numbers in proxy wars), then let students judge the evidence themselves while the
teacher draws no conclusion.

Possible question angles:
- "Using one real Third World country, show how differently it 'looks' under the two frames."
- "Why is the same history two different things seen from the map (changing colors) and from
   the ground (real people, one by one)?"`,
      conceptsActivated: ['decolonization-non-aligned', 'cold-war-human-cost-neutrality', 'proxy-wars-korea-vietnam'],
    },
    {
      id: 'q3',
      cn: `肯尼迪既是古巴危机里拼命踩刹车、避免核战的人，又是批准猪湾入侵、
批过暗杀外国领导人计划、把美军一步步送进越南的人。同一双手。

如果你要写一篇 essay 评价肯尼迪这样一个领袖，你会怎么处理这种"既灭火又放火"的矛盾？
（想一想：苏联那边的赫鲁晓夫、斯大林，是不是也有同样"既……又……"的两面？）`,
      en: `Kennedy was both the man who stamped on the brake to avoid nuclear war in the Cuban
crisis and the man who approved the Bay of Pigs, signed off on plans to assassinate foreign
leaders, and sent US troops step by step into Vietnam. The same two hands.

If you were writing an essay judging a leader like Kennedy, how would you handle this
"putting out fires while setting them" contradiction? (Think: did the Soviet side's
Khrushchev or Stalin have the same "both... and..." two faces?)`,
      hintCn: `提示：高分答案不会简单说"肯尼迪是英雄"或"肯尼迪是坏人"，而会承认**同一个人、
同一份权力，可以同时既救世界又制造灾难**——这不是"功劳加错误"两本账，
是同一种"超级大国领袖"的两面（肯尼迪在故事里自己说"同一双手"）。

进阶思考：如果只批评肯尼迪（美国一边），却不提苏联领导人也搞镇压、扶持独裁，
你的 essay 就**不中立**了。Rule 0 要求：批评要对称。
真正考验你的，是能不能对美苏**两边都**做到"既看见他的克制、也看见他的残酷"。`,
      hintEn: `Hint: a top answer won't simply say "Kennedy was a hero" or "Kennedy was a
villain." It will admit that **one person, one set of powers, can both save the world and
make disasters at once** — not two separate ledgers of "credit plus error," but two faces
of the same "superpower leader" (Kennedy says "the same two hands" in his storyline).

Going deeper: if you criticize only Kennedy (the American side) but never mention that Soviet
leaders also crushed revolts and propped up dictators, your essay isn't neutral. Rule 0
demands symmetry. The real test is whether you can do "see both his restraint and his
cruelty" for **both** the US and the USSR.`,
      conceptsActivated: ['cuban-missile-crisis', 'proxy-wars-korea-vietnam', 'cold-war-human-cost-neutrality'],
    },
  ],
};

export default notebook;
