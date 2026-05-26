// ─── 同伴笔记本架构 v1 · World War I 1914-1918 ───────────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson 300-500 字)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系（3 lens）：
//   - woodrow-wilson (perpetrator-actor) — 十四点理想 vs 白宫重隔离
//   - gavrilo-princip (lonely-mediator) — 一颗子弹靠联盟连锁炸成全欧战
//   - senegalese-tirailleur-receiving-end (receiving-end, default) — 殖民地兵为宗主国送命
//   notebook 补完课纲缺口：MAIN 四诱因 / 新技术（机枪/毒气/坦克）/ 总体战 home front /
//                          凡尔赛和约 + 四大帝国崩溃（故事提到但没系统展开的考点）
//
// 课纲对齐：
//   - AP World History Modern Unit 7 (Global Conflict) KC-7.1, 7.2
//   - APUSH Period 7 (US 参战 + Wilson)；AP European History Unit 8
//
// 事实对账：依 world-war-one-1914-factledger.md（已核实）。
//   ⚠ Princip "买三明治"都市传说已删，不写回；保留真史实（司机走错路 / 早上炸弹失败）。
//   ⚠ Wilson"像用闪电写历史"引语真伪存疑，按账本降级处理（"据说/热情称赞"，不当板上钉钉原话）。
//   ⚠ 凡尔登措辞：索姆河伤亡逾百万、凡尔登死伤数十万（不写"各死伤近百万"）。
//
// schemaVersion: 1 · notebookVersion: world-war-one-1914-v1

export var notebook = {
  topicId: 'world-war-one-1914',
  topicNameCn: '第一次世界大战',
  topicNameEn: 'World War I (The Great War)',
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
    cn: `今天老师说我们要学第一次世界大战（1914-1918）。她在白板上先写了四个字母：M.A.I.N.，
说这是这一单元"必考里的必考"，一战为什么会爆发，全在这四个字母里。

M = Militarism（军国主义）、A = Alliances（联盟体系）、
I = Imperialism（帝国主义）、N = Nationalism（民族主义）。

然后她给了我们一张名字和词的单子：
Woodrow Wilson（威尔逊）、Gavrilo Princip（普林西普）、Franz Ferdinand（斐迪南大公）

还有这些词：trench warfare（堑壕战）、total war（总体战）、
Fourteen Points（十四点）、self-determination（民族自决）、
League of Nations（国际联盟）、Treaty of Versailles（凡尔赛和约）、
tirailleurs sénégalais（塞内加尔狙击兵）。

我先记下来。等下我要读三个故事——威尔逊、普林西普、还有一个塞内加尔狙击兵——
读完再回来对照这张单子，看我能不能解释。

老师还说了一句让我记很久的话："不要把一战想成'好人打坏人'。
要问的是'这场谁也不想要的战，怎么就谁也停不下来'。"我把这句写在第一页。`,
    en: `Today my teacher said we're learning World War I (1914-1918). She wrote four
letters on the board first: M.A.I.N., and said this is "the must-know of must-knows"
for the unit — why the war broke out is all in these four letters.

M = Militarism, A = Alliances, I = Imperialism, N = Nationalism.

Then she gave us a sheet of names and terms:
Woodrow Wilson, Gavrilo Princip, Franz Ferdinand

Plus these terms: trench warfare, total war, Fourteen Points,
self-determination, League of Nations, Treaty of Versailles,
tirailleurs sénégalais (Senegalese tirailleurs).

Let me write them down. After I read the three stories (Wilson, Princip, and a
Senegalese tirailleur), I'll come back and check whether I can explain them.

Teacher also said something I'll remember for a long time: "Don't think of WWI as
'good guys vs bad guys.' The question to ask is 'how did a war nobody wanted become
a war nobody could stop.'" I wrote that on the first page.`,
    keyTerms: [
      { cn: '军国主义', en: 'militarism' },
      { cn: '联盟体系', en: 'alliances (alliance system)' },
      { cn: '帝国主义', en: 'imperialism' },
      { cn: '民族主义', en: 'nationalism' },
      { cn: '堑壕战', en: 'trench warfare' },
      { cn: '总体战', en: 'total war' },
      { cn: '民族自决', en: 'self-determination' },
      { cn: '国际联盟', en: 'League of Nations' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '伍德罗·威尔逊',
        nameEn: 'Woodrow Wilson',
        ipa: '/ˈwʊdroʊ ˈwɪlsən/',
        roleCn: '美国第 28 任总统，"十四点"理想主义者，同时在白宫重推种族隔离',
        roleEn: '28th US president, "Fourteen Points" idealist who also re-segregated the federal government',
        mustKnow: true,
        audioKey: 'woodrow-wilson',
      },
      {
        nameCn: '加夫里洛·普林西普',
        nameEn: 'Gavrilo Princip',
        ipa: '/ˈɡavrilo ˈprintsip/',
        roleCn: '波斯尼亚塞族青年，19 岁刺杀斐迪南大公，点燃一战导火索',
        roleEn: 'Young Bosnian Serb, assassinated Archduke Ferdinand at 19, the spark of WWI',
        mustKnow: true,
        audioKey: 'gavrilo-princip',
      },
      {
        nameCn: '斐迪南大公',
        nameEn: 'Archduke Franz Ferdinand',
        ipa: '/frɑːnts ˈfɛərdɪnænd/',
        roleCn: '奥匈帝国王储，1914.6.28 在萨拉热窝遇刺，引发七月危机',
        roleEn: 'Heir to Austria-Hungary, assassinated in Sarajevo June 28, 1914, triggering the July Crisis',
        mustKnow: true,
        audioKey: 'franz-ferdinand',
      },
      {
        nameCn: '塞内加尔狙击兵（合成角色 Demba）',
        nameEn: 'A Senegalese Tirailleur (composite, "Demba")',
        ipa: '/tiʁajœʁ seneɡalɛ/',
        roleCn: '法属西非被征召的殖民地步兵，为宗主国在欧洲战壕送命（合成角色，基于真实部队史实）',
        roleEn: 'Colonial infantryman conscripted from French West Africa, died for the empire in European trenches (composite, based on the real unit\'s history)',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：MAIN 起因（独立 mini-lesson — 故事散落各处但没系统讲）──
    {
      id: 'main-causes',
      termCn: 'M.A.I.N. 一战四大起因',
      termEn: 'M.A.I.N. — The Four Causes of WWI',
      standardRef: ['AP World KC-7.1', 'AP Euro Unit 8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'woodrow-wilson', nodeId: 'wil-n2', context: '威尔逊把两大阵营 + 军备竞赛比作"两堆堆到顶的干柴"' },
          { lens: 'gavrilo-princip', nodeId: 'pri-n6', context: '普林西普看清"两枪只是火星，几十年的盟约和殖民竞争才是炸药"' },
        ],
      },
      standaloneText: {
        cn: `老师说，如果一战只让你背一个东西，就背这四个字母：**M.A.I.N.**。
它回答的是那个最核心的问题：一颗子弹，怎么能炸出一场吞掉一千七百万人的世界大战？
答案是——子弹只是火星，**M.A.I.N. 是早就堆好的炸药**。

- **M = Militarism（军国主义）**：开战前几十年，欧洲列强拼命造军舰、扩陆军
  （尤其英德海军竞赛）。军队越大，越想用；越想用，邻国越怕，于是大家一起越扩越大。
- **A = Alliances（联盟体系）**：列强两两结成"你被打我就帮你打"的密约，
  把整个欧洲缝成两大块——**同盟国**（德国、奥匈为核心）vs **协约国**（英、法、俄为核心）。
  谁动一下，整块都得跟着动。
- **I = Imperialism（帝国主义）**：列强在全世界抢殖民地、抢市场、抢资源
  （非洲、亚洲被一块块切走）。谁多抢一块，别国就多紧张一分，仇和怕越攒越多。
- **N = Nationalism（民族主义）**：一边是大国的"我们最强"的民族骄傲，
  一边是被帝国统治的小民族（如波斯尼亚的塞族人）想独立建国的渴望。
  斐迪南就是被这种民族主义点的火。

🔗 故事连接：威尔逊在视角一第 2 节把两大阵营 + 军备竞赛叫"两堆堆到顶的干柴"；
普林西普在视角二第 6 节说得最透——"我点的只是火星，可炸药，是他们自己堆好的"。
M.A.I.N. 就是那堆炸药的四个名字。`,
        en: `Teacher said: if WWI lets you memorize only one thing, memorize these four
letters — **M.A.I.N.** It answers the core question: how could one bullet blow up
into a world war that swallowed seventeen million people? The answer is — the bullet
was only a spark; **M.A.I.N. was the explosive already piled up.**

- **M = Militarism**: for decades before the war, the European powers raced to build
  warships and swell their armies (especially the Anglo-German naval race). The bigger
  the army, the more you want to use it; the more you want to use it, the more your
  neighbors fear you, so everyone grows bigger together.
- **A = Alliances**: the powers paired off into secret pacts of "if you're struck, I'll
  fight for you," sewing all of Europe into two great blocks — the **Central Powers**
  (Germany and Austria-Hungary at the core) vs the **Allies** (Britain, France, Russia
  at the core). Move one part, and the whole has to move.
- **I = Imperialism**: the powers seized colonies, markets, and resources across the
  whole world (Africa and Asia carved up piece by piece). Whenever one grabbed more,
  the others grew more anxious, and the hatred and fear stacked higher.
- **N = Nationalism**: on one side, the great powers' pride of "we are the strongest";
  on the other, the small peoples ruled by empires (like the Serbs of Bosnia) longing
  to break free and build their own nation. Ferdinand was killed over exactly this kind
  of nationalism.

🔗 Story link: Wilson, in Lens 1 Node 2, calls the two camps + arms race "two woodpiles
stacked to the top." Princip says it most clearly in Lens 2 Node 6 — "I lit the spark,
but the explosive, they piled up themselves." M.A.I.N. is the four names of that explosive.`,
      },
      xiaoweiNote: {
        cn: `这是全单元**最高频考点**，老师说选择题和 DBQ 都一定出现。我的记忆口诀就是它本身：
**MAIN = "主要"原因**（main 在英文里就是"主要"），四个字母一个都不能丢。

考试陷阱：如果题目问"一战的根本原因（underlying cause）是什么"，
答 M.A.I.N.；如果问"导火索/直接触发（immediate trigger）"，
答斐迪南遇刺。**根本原因 ≠ 导火索**，这两个一定要分清，AP 最爱在这里下套。`,
        en: `This is the **most frequently tested** concept in the whole unit — teacher said
both multiple choice and DBQ always include it. My mnemonic is the word itself:
**MAIN = the "main" causes** (main literally means "primary" in English) — don't drop
a single letter.

Exam trap: if the question asks for the **underlying cause** of WWI, answer M.A.I.N.;
if it asks for the **immediate trigger**, answer the assassination of Ferdinand.
Underlying cause ≠ trigger — keep these two apart; AP loves to set the trap right here.`,
      },
    },

    // ── 卡 2：斐迪南遇刺 / 导火索（故事覆盖 — Princip lens）──
    {
      id: 'franz-ferdinand-assassination',
      termCn: '斐迪南遇刺 / 导火索',
      termEn: 'Assassination of Franz Ferdinand / The Spark',
      standardRef: ['AP World KC-7.1', 'AP Euro Unit 8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'gavrilo-princip',
        nodeIds: ['pri-n1', 'pri-n5'],
        xiaoweiNote: {
          cn: `这个我读过！视角二第 1 节就是普林西普开枪那一刻。重点记牢：
**1914 年 6 月 28 日**，萨拉热窝，19 岁的塞族青年 Gavrilo Princip 开两枪，
打死了奥匈帝国王储斐迪南大公（Franz Ferdinand）和他妻子 Sophie。

故事里有两个真史实细节要记：① 早上其实有同伙朝车扔过炸弹，**失败了**；
② 后来斐迪南的车**司机走错了路**，正要倒车，恰好停在普林西普面前几步远——
他才有了第二次机会。（注意：网上流传的"普林西普先去买三明治"是**都市传说**，
史学界已辟谣，不要写进 essay。）

考点关键句：斐迪南遇刺是一战的 **trigger（导火索 / 直接原因）**，
不是 underlying cause（根本原因）。导火索点的，是 M.A.I.N. 这堆早就堆好的炸药。`,
          en: `I read this! Lens 2 Node 1 is the moment Princip fires. Lock in the key facts:
**June 28, 1914**, Sarajevo, the 19-year-old Bosnian Serb Gavrilo Princip fired two
shots and killed the heir of Austria-Hungary, Archduke Franz Ferdinand, and his wife
Sophie.

Two real factual details from the story to remember: (1) earlier that morning an
accomplice threw a bomb at the car and it **failed**; (2) later Ferdinand's car
**driver took a wrong turn**, and while backing up, stopped a few steps in front of
Princip — that's how he got a second chance. (Note: the popular online story that
"Princip first went to buy a sandwich" is an **urban legend** that historians have
debunked — don't put it in an essay.)

Key exam sentence: the assassination of Ferdinand is the **trigger** (immediate cause)
of WWI, not the underlying cause. The trigger set off M.A.I.N., the explosive already
piled up.`,
        },
      },
    },

    // ── 卡 3：联盟连锁 / 七月危机（故事覆盖 — Wilson + Princip）──
    {
      id: 'alliance-chain-july-crisis',
      termCn: '联盟连锁 / 七月危机',
      termEn: 'Alliance Chain Reaction / The July Crisis',
      standardRef: ['AP World KC-7.1', 'AP Euro Unit 8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'gavrilo-princip',
        nodeIds: ['pri-n5', 'pri-n6'],
        xiaoweiNote: {
          cn: `视角二第 5 节讲清了导火索之后那一个月发生了什么——就是著名的
**七月危机（July Crisis）**。我把连锁顺序背成一条链：

1. 奥匈认定塞尔维亚在背后撑腰，发出**故意苛刻、根本没法全部接受**的最后通牒；
2. **1914.7.28 奥匈对塞尔维亚宣战**；
3. 俄国为保护塞尔维亚动员军队 → 德国向俄国、法国宣战；
4. 德国为打法国**借道中立的比利时**（Schlieffen 计划）→ 英国因此向德国宣战；
5. 到 **8 月初**，几乎所有欧洲大国都卷进来了。

考点关键句：靠着事先签好的**联盟（Alliances，就是 M.A.I.N. 的 A）**，
一国宣战像多米诺骨牌一样拉着另一国——这就是为什么"一颗子弹"能炸成全欧大战。

威尔逊在视角一第 2 节把它形容得很妙："战争像一台没人能关掉的机器：
你结了盟，盟友打仗你就得跟着打。"这句话直接可以用进 DBQ。`,
          en: `Lens 2 Node 5 lays out what happened in the month after the trigger — the
famous **July Crisis**. I memorize the chain reaction as a single linked chain:

1. Austria-Hungary, convinced Serbia was the backer, sent an ultimatum **deliberately
   so harsh it could not possibly be fully accepted**;
2. **July 28, 1914: Austria-Hungary declared war on Serbia**;
3. Russia mobilized to protect Serbia → Germany declared war on Russia and France;
4. Germany, to strike France, **marched through neutral Belgium** (Schlieffen Plan) →
   Britain therefore declared war on Germany;
5. By **early August**, nearly every great power of Europe was in.

Key exam sentence: thanks to pacts signed in advance — the **Alliances** (the A in
M.A.I.N.) — one nation's declaration of war dragged in the next like dominoes. That's
why "one bullet" could blow up into an all-Europe war.

Wilson puts it beautifully in Lens 1 Node 2: "the war was like a machine no one could
switch off: you had made an alliance, and when your ally fought, you had to fight too."
You can drop that line straight into a DBQ.`,
        },
      },
    },

    // ── 卡 4：堑壕战 + 新技术（独立 mini-lesson — 故事有画面但没系统列技术）──
    {
      id: 'trench-warfare-new-technology',
      termCn: '堑壕战 + 新型武器技术',
      termEn: 'Trench Warfare + New Military Technology',
      standardRef: ['AP World KC-7.2', 'AP Euro Unit 8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'woodrow-wilson', nodeId: 'wil-n4', context: '威尔逊想象前线：机关枪、毒气、铁丝网、几月推进几百米、一次冲锋死上万' },
          { lens: 'senegalese-tirailleur-receiving-end', nodeId: 'tir-n4', context: 'Demba 站在 1916 凡尔登附近的战壕，泥水到膝，吹哨就要冲过铁丝网' },
        ],
      },
      standaloneText: {
        cn: `一战是人类**第一场工业化战争**——工厂能量产的杀人技术，第一次大规模上战场。
结果是西线陷入了一种谁也打不动谁的僵局：**堑壕战（trench warfare）**。

**什么是堑壕战**：双方各挖几百公里的壕沟，灌满泥水、老鼠、虱子、尸臭。
两条战壕之间叫"无人区"（no man's land），上面铺满铁丝网。

**为什么打不动**：新技术让"防守"远远强过"进攻"——
- **机关枪（machine gun）**：一挺枪一分钟能打几百发，士兵一冲出战壕就成排倒下；
- **毒气（poison gas）**：氯气、芥子气，看不见地飘过来，烧肺、烧眼睛；
- **铁丝网（barbed wire）**：把冲锋的士兵卡在原地，正好成了机枪的活靶子；
- **重炮（artillery）**：几百万发炮弹，是这场战死人最多的武器。

所以才会出现那种恐怖画面：一次冲锋死掉上万人，战线却只推进几百米。
**坦克（tank）**是英国为了碾过铁丝网、突破僵局发明的新武器，1916 年索姆河战役首次上场——
但要到后来才真正改变战局。

🔗 故事连接：威尔逊在视角一第 4 节坐在白宫，想象他签字送去的士兵面对的就是这些；
塞内加尔狙击兵 Demba 在视角三第 4 节，**亲身**站在 1916 年凡尔登附近的战壕里——
泥水到膝，吹哨就得爬出去冲过铁丝网。一个从上面想象，一个在下面承受，是同一条战壕。`,
        en: `WWI was humanity's **first industrialized war** — killing technology that factories
could mass-produce reached the battlefield on a huge scale for the first time. The result
on the Western Front was a deadlock where neither side could move the other: **trench warfare.**

**What trench warfare is**: each side dug hundreds of kilometers of trenches, flooded with
mud and water, rats, lice, and the stench of corpses. Between the two trench lines lay
"no man's land," covered in barbed wire.

**Why nobody could move**: new technology made *defense* far stronger than *offense* —
- **Machine gun**: one gun fired hundreds of rounds a minute; soldiers charging out of the
  trench fell in rows;
- **Poison gas**: chlorine and mustard gas drifted in unseen, burning lungs and eyes;
- **Barbed wire**: pinned charging soldiers in place, turning them into living targets for
  the machine guns;
- **Artillery**: millions of shells — the deadliest weapon of the whole war.

That's why you get the horrifying picture: ten thousand die in one charge, yet the line
advances only a few hundred meters. The **tank** was a new weapon Britain invented to crush
over barbed wire and break the deadlock, first used at the Somme in 1916 — though it would
not truly change the war until later.

🔗 Story link: Wilson, in Lens 1 Node 4, sits in the White House imagining exactly this as
what the soldiers he signed off face. The Senegalese tirailleur Demba, in Lens 3 Node 4,
stands **in person** in a trench near Verdun in 1916 — mud to the knees, the whistle blowing,
having to climb out and charge through the barbed wire. One imagines it from above, one
endures it below — the same trench.`,
      },
      xiaoweiNote: {
        cn: `老师说这块最容易出"为什么一战这么久、死这么多人"的题。我的答题模板：
**新技术让防守 >> 进攻 → 双方都攻不动 → 陷入堑壕僵局 → 拼消耗 → 死伤天文数字。**

记几个数字感觉就够：1916 年**索姆河战役**双方伤亡逾百万；**凡尔登战役**双方死伤数十万——
战线几乎没动。这就是"绞肉机"这个词的来历。
（小心别把凡尔登写成"死伤近百万"，账本说那略高了，凡尔登是数十万级。）`,
        en: `Teacher said this block most often produces "why did WWI last so long and kill so
many" questions. My answer template:
**new tech made defense >> offense → neither side could attack through → trench stalemate
→ war of attrition → astronomical casualties.**

A sense of the numbers is enough: at the 1916 **Battle of the Somme**, combined casualties
topped one million; at **Verdun**, combined casualties were in the hundreds of thousands —
and the line barely moved. That's where the word "meat grinder" comes from.
(Careful not to write Verdun as "near a million" — the fact ledger says that's a bit high;
Verdun is in the hundreds-of-thousands range.)`,
      },
    },

    // ── 卡 5：总体战 + home front（独立 mini-lesson）──
    {
      id: 'total-war-home-front',
      termCn: '总体战 + 后方动员（home front）',
      termEn: 'Total War + the Home Front',
      standardRef: ['AP World KC-7.2', 'APUSH Period 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'woodrow-wilson', nodeId: 'wil-n4', context: '威尔逊把"几百万美国年轻人送过大西洋"——背后是整个国家被动员' },
        ],
      },
      standaloneText: {
        cn: `一战还有一个必考的"新东西"，跟前面的技术配套，叫 **总体战（total war）**。

意思是：这不再是"军队打军队"的战争，而是**整个国家——工厂、农田、人口、钱——
全部被动员起来为战争服务**。前方需要的炮弹、军装、粮食，靠的是后方
（**home front，后方/国内战线**）全力开动。

总体战带来几个考点常考的社会变化：
- **女性进工厂**：年轻男人都上了前线，工厂、军工厂、农田缺人，
  大批女性第一次走出家庭去做"以前只有男人做的活"。
  （这件事后来直接推动了**女性争取投票权**——你跑过 womens-suffrage 那段历史会更懂：
  "我们能在战时顶半边天，凭什么不能投票？"）
- **政府全面接管经济**：定量配给食物、统一管制工厂、发战争债券筹钱。
- **宣传机器全开**：海报、报纸、电影开足马力，动员民众支持战争、仇视敌人。
- **殖民地被卷入**：宗主国从殖民地征召几百万士兵和劳工（见塞内加尔狙击兵那张卡）。

🔗 故事连接：威尔逊在视角一第 4 节说他"把几百万美国年轻人送过大西洋"——
能送出几百万人、还能造出供他们打仗的全部装备，靠的就是美国整个国家的总体战动员。`,
        en: `WWI has another must-know "new thing" that pairs with the technology above:
**total war.**

It means: this is no longer "army against army," but a war where **the entire nation —
factories, farmland, population, money — is all mobilized to serve the war.** The shells,
uniforms, and food the front needs come from the rear (**the home front**) running at
full power.

Total war brought several social changes the exam loves to test:
- **Women entered factories**: with young men at the front, factories, munitions plants,
  and farms ran short of workers, and large numbers of women stepped out of the home to
  do "work only men used to do."
  (This later directly pushed **women's fight for the vote** — you'll get it better if you
  ran the womens-suffrage topic: "We can hold up half the sky in wartime — why can't we vote?")
- **Governments took over the economy**: rationing food, controlling factories, raising
  money through war bonds.
- **Propaganda machines at full blast**: posters, newspapers, and films cranked up to
  rally the public behind the war and stir hatred of the enemy.
- **Colonies pulled in**: imperial powers conscripted millions of soldiers and laborers
  from their colonies (see the Senegalese tirailleur card).

🔗 Story link: Wilson, in Lens 1 Node 4, says he "sent millions of young Americans across
the Atlantic" — being able to ship out millions of people *and* produce all the equipment
to fight with depended on the total-war mobilization of the entire United States.`,
      },
      xiaoweiNote: {
        cn: `我把 total war 和 trench warfare 配成一对记："堑壕战"是前线的样子，
"总体战"是后方的样子，两个加起来才是完整的一战。

最常考的一条："一战为什么改变了女性的社会地位？"——
答：总体战把女性拉进了工厂和军工，证明她们能做男人的工作，战后成了争取投票权的有力理由。
这条直接连到 womens-suffrage 那段历史，是跨主题的高分连线。`,
        en: `I pair total war with trench warfare to remember them: "trench warfare" is what the
front looked like, "total war" is what the rear looked like — both together make the
complete WWI.

Most commonly tested: "why did WWI change women's social standing?" — Answer: total war
pulled women into factories and munitions work, proving they could do men's jobs, which
became a strong argument for the vote after the war. This links straight to the
womens-suffrage topic — a high-scoring cross-topic connection.`,
      },
    },

    // ── 卡 6：殖民地士兵 / 塞内加尔狙击兵（故事覆盖 — tirailleur default lens）──
    {
      id: 'colonial-troops-tirailleurs',
      termCn: '殖民地士兵 / 塞内加尔狙击兵',
      termEn: 'Colonial Troops / Senegalese Tirailleurs',
      standardRef: ['AP World KC-7.2', 'AP World KC-7.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'senegalese-tirailleur-receiving-end',
        nodeIds: ['tir-n3', 'tir-n4', 'tir-n7', 'tir-n8'],
        xiaoweiNote: {
          cn: `视角三整条线就是这个——这也是这一课的**默认视角**，老师特别说要认真读。
重点记牢：一战不是"欧洲人之间的战争"，它是**真正的世界大战**。

**塞内加尔狙击兵（tirailleurs sénégalais）**：法国从法属西非殖民地征召的步兵
（名字里有"塞内加尔"，但兵来自整个法属西非）。一战约 **20 万人**被征召，
约 13.5 万在欧洲作战，约 **3 万人阵亡**。
（故事里的 Demba 是**合成角色**——名字和村子是叙事补充，但这支部队和他们的遭遇是真史实。）

几个考点细节（视角三第 3、4、7、8 节）：
- 征兵名为"招募"，实为**强征**：村庄摊派人头，有钱有势的逃掉，承担的是穷人家孩子；
- 他们常被派去打**最危险的地段**——某些军官眼里，殖民地兵的命比欧洲兵"便宜"；
- 战后承诺的公民权、抚恤多半**没兑现**，家乡照旧被殖民。

考点关键句：殖民地几百万士兵和劳工为宗主国流血，**名字大多没进任何纪念碑**——
（同时代的中国也派了约 **14 万华工**赴欧西线，是同一类被略过的非欧洲人。）`,
          en: `Lens 3 is this entire line — and it's also the **default lens** of this topic;
teacher specifically said to read it carefully. Lock in: WWI was not "a war among
Europeans" — it was a **true world war.**

**Senegalese tirailleurs (tirailleurs sénégalais)**: infantry France conscripted from
its French West African colonies (the name says "Senegal," but the soldiers came from all
of French West Africa). About **200,000** were conscripted in WWI, about 135,000 fought in
Europe, and about **30,000 died.**
(The Demba in the story is a **composite character** — his name and village are narrative
additions, but this unit and what befell them are real history.)

Exam details (Lens 3 Nodes 3, 4, 7, 8):
- Recruiting was called "enlistment" but was really **forced**: villages were given quotas,
  the rich and powerful escaped, and the children of poor families bore it;
- They were often sent to the **most dangerous stretch** — in some officers' eyes, colonial
  troops' lives were "cheaper" than European troops';
- The citizenship and pensions promised after the war were mostly **not paid**, and their
  homelands stayed colonized.

Key exam sentence: millions of colonial soldiers and laborers bled for their imperial
masters, and **most of their names entered no monument** — (contemporary China also sent
about **140,000 Chinese laborers** to the Western Front, the same kind of overlooked
non-European people.)`,
        },
      },
    },

    // ── 卡 7：威尔逊十四点 + 自决 + 国联（故事覆盖 — Wilson lens）──
    {
      id: 'wilson-fourteen-points',
      termCn: '威尔逊"十四点" / 民族自决 / 国际联盟',
      termEn: 'Wilson\'s Fourteen Points / Self-Determination / League of Nations',
      standardRef: ['APUSH Period 7', 'AP World KC-7.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'woodrow-wilson',
        nodeIds: ['wil-n3', 'wil-n5', 'wil-n7', 'wil-n8'],
        xiaoweiNote: {
          cn: `视角一整条线就是威尔逊。这是 **APUSH 必考人物**，老师说几乎年年出。重点：

**美国怎么参战（视角一第 3 节）**：1917 年两件事把美国逼进战争——
① 德国**无限制潜艇战**（击沉一切开往英国的船，含中立国）；
② **Zimmermann 电报**（德国密谋拉墨西哥结盟、许诺帮它夺回失地，被英国截获公开）。
**1917.4.2** 威尔逊请国会宣战，喊出 **"为民主而安全"（make the world safe for democracy）**。

**十四点（Fourteen Points，视角一第 5 节）**：1918.1.8 提出的和平蓝图，必背四条——
**公开外交、削减军备、民族自决（self-determination）、国际联盟（League of Nations）**。

**两个"理想落空"的考点（第 7、8 节）**：
① 巴黎和会上"民族自决"只给了欧洲白人小民族（波兰、捷克建国），
   亚非殖民地求自决被拒——它有一条看不见的肤色线；
② 国际联盟成立了，但**美国国会拒批，这个发起国自己反而没加入**；
   威尔逊全国巡讲争取支持时中风半瘫。

考点关键句：威尔逊**理想与伪善同体**——他对全世界喊"自决、平等"，
同一双手 1913 年起在白宫重推联邦机构种族隔离（连到 reconstruction 那段历史的倒退）。
AP 经典题："威尔逊是理想主义者还是伪善者？"——**两边都要写**。`,
          en: `Lens 1 is entirely Wilson. He's a **must-know APUSH figure** — teacher said he
shows up almost every year. Key points:

**How the US entered (Lens 1 Node 3)**: in 1917, two things forced America in —
(1) Germany's **unrestricted submarine warfare** (sinking any ship bound for Britain,
neutrals included); (2) the **Zimmermann Telegram** (Germany secretly proposing an alliance
with Mexico, promising to help it win back lost land, intercepted and published by Britain).
On **April 2, 1917** Wilson asked Congress to declare war, with the line **"make the world
safe for democracy."**

**Fourteen Points (Lens 1 Node 5)**: a peace blueprint laid out Jan 8, 1918 — memorize four:
**open diplomacy, arms reduction, self-determination, and a League of Nations.**

**Two "ideals fall short" exam points (Nodes 7, 8)**:
(1) at the Paris conference, "self-determination" went only to Europe's white small peoples
(Poland, Czechoslovakia got states), while Asian and African colonies were refused — it had
an invisible color line;
(2) the League of Nations was founded, but **the US Congress refused to ratify, so the very
country that proposed it never joined**; Wilson suffered a stroke campaigning for it.

Key exam sentence: Wilson is **ideals and hypocrisy on the same body** — he cried
"self-determination, equality" to the world, while the same hands re-segregated the federal
government starting in 1913 (linking to the backslide in the reconstruction topic). Classic
AP question: "Was Wilson an idealist or a hypocrite?" — **write both sides.**`,
        },
      },
    },

    // ── 卡 8：凡尔赛和约 + 帝国崩溃 + 长尾后果（独立 mini-lesson）──
    {
      id: 'versailles-empire-collapse',
      termCn: '凡尔赛和约 + 帝国崩溃 + 战后后果',
      termEn: 'Treaty of Versailles + Empire Collapse + Aftermath',
      standardRef: ['AP World KC-7.3', 'AP Euro Unit 8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'woodrow-wilson', nodeId: 'wil-n9', context: '威尔逊承认苛刻和约羞辱德国，二十年后被人利用炸出二战' },
          { lens: 'senegalese-tirailleur-receiving-end', nodeId: 'tir-n8', context: '退伍殖民地兵把"种子"带回非洲，几十年后掀起去殖民化浪潮' },
        ],
      },
      standaloneText: {
        cn: `战争 **1918 年 11 月 11 日**停战，约一千七百万人已死。然后是收拾残局的
**1919 年巴黎和会**，结果就是 **《凡尔赛和约》（Treaty of Versailles）**。

**和约对德国很苛刻**：把战争的全部责任压给德国（"war-guilt clause / 战争罪责条款"）、
要求巨额赔款、削减德国军队、夺走它的殖民地。德国人觉得这是奇耻大辱。

**四大帝国崩溃**（这是 AP 高频考点）：一战直接打垮了四个老帝国——
- **德意志帝国**（战败、皇帝退位）
- **奥匈帝国**（解体，分裂出多个新国家）
- **奥斯曼帝国**（解体，中东被英法用尺子在地图上划分）
- **俄罗斯帝国**（1917 年革命，沙皇被推翻）

**两条长尾后果**（一定要会写）：
- **导向二战**：和约的屈辱 + 经济崩溃，二十年后被一个更可怕的人物（希特勒）利用上台，
  引爆**第二次世界大战**。威尔逊那句"终结一切战争的战争"成了反讽。
- **种下去殖民化的种子**："民族自决"对殖民地是空头支票，
  却被殖民地人民**反过来**拿去要独立——胡志明后来领越南赶走法国，
  战后几十年掀起去殖民化浪潮。

🔗 故事连接：威尔逊在视角一第 9 节亲口承认苛刻和约埋下了二战的引线；
塞内加尔狙击兵 Demba 在视角三第 8 节把"种子"带回非洲——
"写漂亮话的人没打算让我们用，可话一旦说出口，就不只属于说它的人了。"`,
        en: `The war stopped on **November 11, 1918**, with about seventeen million already
dead. Then came the cleanup of the **1919 Paris Peace Conference**, which produced the
**Treaty of Versailles.**

**The treaty was harsh on Germany**: it put the entire blame for the war on Germany (the
"war-guilt clause"), demanded huge reparations, slashed Germany's military, and took away
its colonies. Germans saw it as a deep humiliation.

**Four empires collapsed** (a frequent AP exam point): WWI directly broke four old empires —
- The **German Empire** (defeated, the Kaiser abdicated)
- **Austria-Hungary** (dissolved, splitting into several new nations)
- The **Ottoman Empire** (dissolved, the Middle East drawn up by Britain and France with a
  ruler on a map)
- The **Russian Empire** (1917 revolution, the Tsar overthrown)

**Two long-tail consequences** (you must be able to write these):
- **Leading to WWII**: the treaty's humiliation + economic collapse were used twenty years
  later by a far more terrible figure (Hitler) to rise to power and set off **World War II.**
  Wilson's "war to end all wars" became an irony.
- **Planting the seeds of decolonization**: "self-determination" was an empty check for the
  colonies, yet the colonized **turned it around** to demand independence — Ho Chi Minh later
  led Vietnam to drive out the French, and a wave of decolonization rose in the decades after.

🔗 Story link: Wilson, in Lens 1 Node 9, admits in his own words that the harsh treaty laid
the fuse for WWII. The Senegalese tirailleur Demba, in Lens 3 Node 8, carries the "seed"
back to Africa — "the people who wrote those fine words never meant for us to use them, but
once words are spoken, they no longer belong only to the ones who spoke them."`,
      },
      xiaoweiNote: {
        cn: `老师说凡尔赛和约这块最容易出"原因 → 结果"链的大题。我背两条因果链：
**① 苛刻和约 → 羞辱德国 → 经济崩溃 → 希特勒上台 → 二战**（这是 AP 标准叙事，
但记得它是"诠释性因果"，不是单一决定论，写的时候别说得太绝对）；
**② 民族自决空头支票 → 殖民地人民反过来用它当武器 → 去殖民化浪潮**。

帝国崩溃我用口诀记："**德、奥、奥、俄**"四个帝国全垮——德意志、奥匈、奥斯曼、俄罗斯。
（注意有两个"奥"：奥匈 ≠ 奥斯曼，别搞混。）`,
        en: `Teacher said the Versailles block most often produces big "cause → effect" chain
questions. I memorize two causal chains:
**(1) harsh treaty → humiliated Germany → economic collapse → Hitler rises → WWII** (this is
the standard AP narrative, but remember it's "interpretive causation," not single-cause
determinism — don't write it too absolutely);
**(2) self-determination as empty check → the colonized turn it into a weapon → wave of
decolonization.**

For the empire collapse I use a mnemonic: "**German, Austrian, Ottoman, Russian**" — four
empires all fall: German, Austro-Hungarian, Ottoman, Russian. (Note the two "A/O"s:
Austria-Hungary ≠ the Ottoman Empire — don't mix them up.)`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `普林西普只是个 19 岁、得了肺结核的塞族穷孩子，他开的两枪点着了一战。
可你已经读过——真正的"炸药"，是几十年的 M.A.I.N.（军国主义、联盟体系、帝国主义、民族主义）。

一场吞掉一千七百万人的灾难，到底该怪那个"点火星的人"（普林西普），
还是那些"把炸药堆到顶的人"（各大帝国）？责任该怎么分？`,
      en: `Princip was just a poor 19-year-old Bosnian Serb with tuberculosis, and his two
shots lit WWI. But you've read it — the real "explosive" was decades of M.A.I.N.
(militarism, alliances, imperialism, nationalism).

For a catastrophe that swallowed seventeen million people, should we blame the "person who
struck the spark" (Princip), or the ones who "piled the explosive to the top" (the great
empires)? How should the blame be divided?`,
      hintCn: `提示：可以从两个角度想——(1) 没有普林西普那两枪，炸药还得有人点，
责任更多在堆炸药的大帝国（结构 > 个人）；(2) 但再大的结构，也是普林西普**自己**扣下了扳机，
他得为自己的选择负责（个人 > 结构）。两边都有证据，AP DBQ 看重的是你怎么用证据论证，
不是你站哪边。

进阶思考：今天也一样——一句失控的话引爆网上一场风暴，
表面是某个"点火的人"，可底下往往早就堆着没人去拆的炸药。
"火星"和"炸药"，哪个更该负责？`,
      hintEn: `Hint: think from two angles — (1) without Princip's two shots, someone would
still have lit the explosive; the blame lies more with the empires that piled it (structure >
individual); (2) but however large the structure, it was Princip **himself** who pulled the
trigger, and he must answer for his choice (individual > structure). Both sides have evidence;
AP DBQ values how you argue with evidence, not which side you pick.

Going deeper: it's the same today — one careless line sets off a storm online; on the surface
it looks like some "person who lit it," yet beneath there's often explosive long piled up
that no one defused. The "spark" or the "explosive" — which is more to blame?`,
      conceptsActivated: ['franz-ferdinand-assassination', 'main-causes', 'alliance-chain-july-crisis'],
    },
    {
      id: 'q2',
      cn: `威尔逊向全世界喊"民族自决"——每个民族都有权自己当家做主。
塞内加尔狙击兵 Demba 听到这句话时，差点笑出来又差点哭出来：
他的家乡正被法国统治，他正穿着法国军装为"自由"去死，而这个法国回过头依旧统治着他的家乡。

如果你是 AP 老师，要出一道 DBQ 题，分析"威尔逊的'民族自决'到底有多'普遍'"，
你会怎么提问？`,
      en: `Wilson cried "self-determination" to the world — every people has the right to govern
themselves. When the Senegalese tirailleur Demba heard this, he nearly laughed and nearly
wept: his homeland was ruled by France, he wore a French uniform dying for "freedom," and
this France went on ruling his homeland as firmly as ever.

If you were an AP teacher writing a DBQ to analyze "how *universal* was Wilson's
'self-determination,'" how would you phrase the question?`,
      hintCn: `提示：DBQ 通常给学生几份材料（威尔逊十四点第 5 点原文、巴黎和会的实际结果、
殖民地代表的请愿），让学生分析"理想的文字"和"实际的执行"之间的鸿沟。
你可以从这条"看不见的肤色线"切入：欧洲白人小民族（波兰、捷克）拿到了自决，
亚非殖民地（塞内加尔、越南、中国山东）被拒——同一句"民族自决"，对谁算数、对谁不算数？

可能的提问角度：
- "Compare what Wilson's Fourteen Points *said* about colonies with what the Paris
   conference actually *did*. What does the gap reveal?"
- "Whose 'self-determination' counted, and whose did not? Use evidence to explain why."`,
      hintEn: `Hint: a DBQ usually gives students several sources (the text of Wilson's Fifth
Point, the actual results of the Paris conference, petitions from colonial delegates) and
asks them to analyze the gap between "the words of the ideal" and "the actual execution."
You can cut in through this "invisible color line": Europe's white small peoples (Poland,
Czechoslovakia) got self-determination, while Asian and African colonies (Senegal, Vietnam,
China's Shandong) were refused — the same phrase "self-determination," counting for whom and
not for whom?

Possible question angles:
- "Compare what Wilson's Fourteen Points *said* about colonies with what the Paris conference
   actually *did*. What does the gap reveal?"
- "Whose 'self-determination' counted, and whose did not? Use evidence to explain why."`,
      conceptsActivated: ['wilson-fourteen-points', 'colonial-troops-tirailleurs', 'versailles-empire-collapse'],
    },
    {
      id: 'q3',
      cn: `威尔逊说一战是"终结一切战争的战争"。可《凡尔赛和约》对德国太苛刻，
羞辱了战败的德国，二十年后一个更可怕的人物利用这份屈辱，发动了第二次世界大战。

一个真心想要和平的人，怎么会反而为下一场更大的战争埋下引线？
你觉得问题出在"和约太狠"，还是出在别的地方？`,
      en: `Wilson called WWI "the war to end all wars." But the Treaty of Versailles was too
harsh on Germany, humiliating the defeated nation, and twenty years later a far more terrible
figure used that humiliation to launch the Second World War.

How could a man who sincerely wanted peace instead lay the fuse for a bigger war? Do you
think the problem was that "the treaty was too harsh," or something else?`,
      hintCn: `提示：可以从几个角度想——(1) 和约太苛刻：巨额赔款 + 战争罪责条款 + 削军 + 夺殖民地，
让德国人长期觉得受辱，给了极端主义可乘之机；(2) 也有人说问题不在"太狠"，
而在"既羞辱了德国、又没彻底削弱它"——半软半硬，最糟；
(3) 还有更深一层：威尔逊太相信自己是对的，连一点妥协都不肯让，
结果美国国会拒批、这个发起国自己没加入国联，让国联从一开始就少了一条腿。

进阶：注意这条因果链是"诠释性"的——历史学家至今在争"和约 → 二战"有多直接。
写 essay 时承认它复杂，比写得太绝对更有分。`,
      hintEn: `Hint: think from several angles — (1) the treaty was too harsh: huge reparations
+ war-guilt clause + military cuts + loss of colonies left Germans feeling humiliated for a
long time, giving extremism an opening; (2) others say the problem wasn't "too harsh" but
"humiliating Germany *without* fully weakening it" — half-soft, half-hard, the worst of both;
(3) a deeper layer: Wilson believed too firmly he was right and would not compromise, so the
US Congress refused to ratify and the founding country itself never joined the League, leaving
it short a leg from the start.

Going deeper: notice this causal chain is "interpretive" — historians still argue how direct
"treaty → WWII" really was. In an essay, acknowledging the complexity scores more than writing
it too absolutely.`,
      conceptsActivated: ['versailles-empire-collapse', 'wilson-fourteen-points', 'main-causes'],
    },
  ],
};

export default notebook;
