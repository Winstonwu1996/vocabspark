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
    cn: `今天老师说我们要学第一次世界大战（1914-1918）。她在白板上先写了四个字母：M.A.I.N.，说这是这一单元"必考里的必考"——一战为什么会爆发，全在这四个字母里。

M = Militarism（军国主义）、A = Alliances（联盟体系）、
I = Imperialism（帝国主义）、N = Nationalism（民族主义）。

然后她给了我们一张名字和词的单子：
Woodrow Wilson（威尔逊）、Gavrilo Princip（普林西普）、Franz Ferdinand（斐迪南大公）

还有这些词：trench warfare（堑壕战）、total war（总体战）、
Fourteen Points（十四点）、self-determination（民族自决）、
League of Nations（国际联盟）、Treaty of Versailles（凡尔赛和约）、
tirailleurs sénégalais（塞内加尔狙击兵）。

我先记下来。等下我要读三个故事——威尔逊、普林西普、还有一个塞内加尔狙击兵——读完再回来对照这张单子，看我能不能解释。

老师还说了一句让我记很久的话："不要把一战想成'好人打坏人'。要问的是'这场谁也不想要的战，怎么就谁也停不下来'。"我把这句写在第一页。`,
    en: `Today my teacher said we're learning World War I (1914-1918). She wrote four letters on the board first: M.A.I.N., and said this is "the must-know of must-knows" for the unit — why the war broke out is all in these four letters.

M = Militarism, A = Alliances, I = Imperialism, N = Nationalism.

Then she gave us a sheet of names and terms:
Woodrow Wilson, Gavrilo Princip, Franz Ferdinand

Plus these terms: trench warfare, total war, Fourteen Points,
self-determination, League of Nations, Treaty of Versailles,
tirailleurs sénégalais (Senegalese tirailleurs).

Let me write them down. After I read the three stories (Wilson, Princip, and a Senegalese tirailleur), I'll come back and check whether I can explain them.

Teacher also said something I'll remember for a long time: "Don't think of WWI as 'good guys vs bad guys.' The question to ask is 'how did a war nobody wanted become a war nobody could stop.'" I wrote that on the first page.`,
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
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+audio
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
      defCn: '一战爆发前，欧洲各国几十年里同时走了四条路：疯狂扩军（Militarism）、互相结盟（Alliances）、争抢殖民地（Imperialism）、民族骄傲与独立渴望（Nationalism）。这四件事叠在一起，让整个欧洲随时可能爆炸——斐迪南遇刺只是最后那根火柴。',
      defEn: 'Before WWI, European powers had been building toward explosion for decades along four tracks: racing to build bigger armies (Militarism), signing mutual-defense pacts (Alliances), competing for colonies (Imperialism), and stoking pride or independence movements (Nationalism). These four forces together made Europe a powder keg — the assassination of Archduke Ferdinand was just the last match.',
      standardRef: ['AP World KC-7.1', 'AP Euro Unit 8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { context: '威尔逊那条故事线里把两大阵营和军备竞赛比作"两堆堆到顶的干柴"' },
          { context: '普林西普那条故事线里说得最透——"两枪只是火星，几十年的盟约和殖民竞争才是炸药"' },
        ],
      },
      standaloneText: {
        cn: `老师说，如果一战只让你背一个东西，就背这四个字母：**M.A.I.N.**
它回答的是那个最核心的问题：一颗子弹，怎么能炸出一场吞掉一千七百万人的世界大战？
答案是——子弹只是火星，**M.A.I.N. 是早就堆好的炸药**。

- **M = Militarism（军国主义）**：开战前几十年，欧洲列强拼命造军舰、扩陆军（尤其英德海军竞赛）。军队越大，越想用；越想用，邻国越怕，于是大家一起越扩越大。
- **A = Alliances（联盟体系）**：列强签下"你被打我就帮你打"的密约，把整个欧洲缝成两大块——**同盟国**（德国、奥匈为核心）vs **协约国**（英、法、俄为核心）。谁动一下，整块都得跟着动。
- **I = Imperialism（帝国主义）**：列强在全世界抢殖民地、抢市场、抢资源（非洲、亚洲被一块块切走）。谁多抢一块，别国就多紧张一分，仇和怕越攒越多。
- **N = Nationalism（民族主义）**：一边是大国的"我们最强"的民族骄傲；另一边是被帝国统治的小民族（如波斯尼亚的塞族人）想独立建国的渴望。斐迪南就是被这种民族主义点的火。

故事连接：威尔逊那条故事线里把两大阵营和军备竞赛叫"两堆堆到顶的干柴"；普林西普那条故事线里说得最透——"我点的只是火星，可炸药，是他们自己堆好的"。M.A.I.N. 就是那堆炸药的四个名字。`,
        en: `Teacher said: if WWI lets you memorize only one thing, memorize these four letters — **M.A.I.N.** It answers the core question: how could one bullet blow up into a world war that swallowed seventeen million people? The answer is — the bullet was only a spark; **M.A.I.N. was the explosive already piled up.**

- **M = Militarism**: for decades before the war, European powers raced to build warships and swell their armies (especially the Anglo-German naval race). The bigger the army, the more you want to use it; the more you want to use it, the more your neighbors fear you, so everyone grows bigger together.
- **A = Alliances**: the powers signed pacts of "if you're struck, I'll fight for you," sewing all of Europe into two great blocks — the **Central Powers** (Germany and Austria-Hungary at the core) vs the **Allies** (Britain, France, Russia at the core). Move one part, and the whole has to move.
- **I = Imperialism**: the powers seized colonies, markets, and resources across the whole world (Africa and Asia carved up piece by piece). Whenever one grabbed more, the others grew more anxious, and the hatred and fear stacked higher.
- **N = Nationalism**: on one side, the great powers' pride of "we are the strongest"; on the other, small peoples ruled by empires (like the Serbs of Bosnia) longing to break free and build their own nation. Ferdinand was killed over exactly this kind of nationalism.

Wilson's story thread calls the two camps and the arms race "two woodpiles stacked to the top." Princip's story thread says it most clearly — "I lit the spark, but the explosive, they piled up themselves." M.A.I.N. is the four names of that explosive.`,
      },
      xiaoweiNote: {
        cn: `这是全单元**最高频考点**，老师说选择题和 DBQ 都一定出现。我的记忆口诀就是它本身：**MAIN = "主要"原因**（main 在英文里就是"主要"），四个字母一个都不能丢。

考试陷阱：如果题目问"一战的根本原因（underlying cause）是什么"，答 M.A.I.N.；如果问"导火索/直接触发（immediate trigger）"，答斐迪南遇刺。**根本原因 ≠ 导火索**，这两个一定要分清，AP 最爱在这里下套。`,
        en: `This is the **most frequently tested** concept in the whole unit — teacher said both multiple choice and DBQ always include it. My mnemonic is the word itself: **MAIN = the "main" causes** (main literally means "primary" in English) — don't drop a single letter.

Exam trap: if the question asks for the **underlying cause** of WWI, answer M.A.I.N.; if it asks for the **immediate trigger**, answer the assassination of Ferdinand. Underlying cause ≠ trigger — keep these two apart; AP loves to set the trap right here.`,
      },
    },

    // ── 卡 2：斐迪南遇刺 / 导火索（故事覆盖 — Princip lens）──
    {
      id: 'franz-ferdinand-assassination',
      termCn: '斐迪南遇刺 / 导火索',
      termEn: 'Assassination of Franz Ferdinand / The Spark',
      defCn: '1914 年 6 月 28 日，奥匈帝国王储斐迪南大公在萨拉热窝被 19 岁的塞族青年普林西普开枪打死。这件事本身不是一战的根本原因，而是点燃了早已堆好的炸药——它是战争的"导火索"（trigger），不是"炸药"（underlying cause）。',
      defEn: 'On June 28, 1914, the heir to the Austro-Hungarian Empire, Archduke Franz Ferdinand, was shot and killed in Sarajevo by a 19-year-old Bosnian Serb named Gavrilo Princip. This event was not the root cause of WWI — it was the spark that ignited an explosive already piled up for decades. It is the "trigger" (immediate cause), not the underlying cause.',
      standardRef: ['AP World KC-7.1', 'AP Euro Unit 8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'gavrilo-princip',
        nodeIds: ['pri-n1', 'pri-n5'],
        xiaoweiNote: {
          cn: `这个我读过！普林西普那条故事线一开始就是他开枪那一刻。重点记牢：
**1914 年 6 月 28 日**，萨拉热窝，19 岁的塞族青年 Gavrilo Princip 开两枪，打死了奥匈帝国王储斐迪南大公（Franz Ferdinand）和他妻子 Sophie。

故事里有两个真史实细节要记：
① 早上其实有同伙朝车扔过炸弹，**失败了**；
② 后来斐迪南的车**司机走错了路**，正要倒车，恰好停在普林西普面前几步远——他才有了第二次机会。

注意：网上流传的"普林西普先去买三明治"是**都市传说**，史学界已辟谣，不要写进 essay。

考点关键句：斐迪南遇刺是一战的 **trigger（导火索 / 直接原因）**，不是 underlying cause（根本原因）。导火索点的，是 M.A.I.N. 这堆早就堆好的炸药。`,
          en: `I read this! Princip's story thread opens right at the moment he fires. Lock in the key facts:
**June 28, 1914**, Sarajevo, the 19-year-old Bosnian Serb Gavrilo Princip fired two shots and killed the heir of Austria-Hungary, Archduke Franz Ferdinand, and his wife Sophie.

Two real factual details from the story to remember:
① Earlier that morning an accomplice threw a bomb at the car and it **failed**;
② Later Ferdinand's car **driver took a wrong turn**, and while backing up, stopped a few steps in front of Princip — that's how he got a second chance.

Note: the popular online story that "Princip first went to buy a sandwich" is an **urban legend** that historians have debunked — don't put it in an essay.

Key exam sentence: the assassination of Ferdinand is the **trigger** (immediate cause) of WWI, not the underlying cause. The trigger set off M.A.I.N., the explosive already piled up.`,
        },
      },
    },

    // ── 卡 3：联盟连锁 / 七月危机（故事覆盖 — Wilson + Princip）──
    {
      id: 'alliance-chain-july-crisis',
      termCn: '联盟连锁 / 七月危机',
      termEn: 'Alliance Chain Reaction / The July Crisis',
      defCn: '1914 年 6 月 28 日刺杀事件发生后，接下来一个月里，欧洲各国按照事先签好的联盟密约，一国接一国地被拖进战争——这个连锁过程叫"七月危机"（July Crisis）。本来是奥匈和塞尔维亚的冲突，因为联盟像多米诺骨牌一样，变成了几乎整个欧洲都卷进去的大战。',
      defEn: 'After the assassination on June 28, 1914, one nation after another was pulled into war during the following month, each dragged in by the alliance pacts they had signed in advance — this chain process is called the July Crisis. What started as a conflict between Austria-Hungary and Serbia became a nearly continent-wide war because the alliances fell like dominoes.',
      standardRef: ['AP World KC-7.1', 'AP Euro Unit 8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'gavrilo-princip',
        nodeIds: ['pri-n5', 'pri-n6'],
        xiaoweiNote: {
          cn: `普林西普那条故事线里讲清了导火索之后那一个月发生了什么——就是著名的**七月危机（July Crisis）**。我把连锁顺序背成一条链：

① 奥匈认定塞尔维亚在背后撑腰，发出**故意苛刻、根本没法全部接受**的最后通牒；
② **1914.7.28 奥匈对塞尔维亚宣战**；
③ 俄国为保护塞尔维亚动员军队 → 德国向俄国、法国宣战；
④ 德国为打法国**借道中立的比利时**（Schlieffen 计划）→ 英国因此向德国宣战；
⑤ 到 **8 月初**，几乎所有欧洲大国都卷进来了。

考点关键句：靠着事先签好的**联盟（Alliances，就是 M.A.I.N. 的 A）**，一国宣战像多米诺骨牌一样拉着另一国——这就是为什么"一颗子弹"能炸成全欧大战。

威尔逊那条故事线里把它形容得很妙："战争像一台没人能关掉的机器：你结了盟，盟友打仗你就得跟着打。"这句话直接可以用进 DBQ。`,
          en: `Princip's story thread lays out what happened in the month after the trigger — the famous **July Crisis**. I memorize the chain reaction as a single linked chain:

① Austria-Hungary, convinced Serbia was the backer, sent an ultimatum **deliberately so harsh it could not possibly be fully accepted**;
② **July 28, 1914: Austria-Hungary declared war on Serbia**;
③ Russia mobilized to protect Serbia → Germany declared war on Russia and France;
④ Germany, to strike France, **marched through neutral Belgium** (Schlieffen Plan) → Britain therefore declared war on Germany;
⑤ By **early August**, nearly every great power of Europe was in.

Key exam sentence: thanks to pacts signed in advance — the **Alliances** (the A in M.A.I.N.) — one nation's declaration of war dragged in the next like dominoes. That's why "one bullet" could blow up into an all-Europe war.

Wilson's story thread puts it well: "the war was like a machine no one could switch off: you had made an alliance, and when your ally fought, you had to fight too." You can drop that line straight into a DBQ.`,
        },
      },
    },

    // ── 卡 4：堑壕战 + 新技术（独立 mini-lesson — 故事有画面但没系统列技术）──
    {
      id: 'trench-warfare-new-technology',
      termCn: '堑壕战 + 新型武器技术',
      termEn: 'Trench Warfare + New Military Technology',
      defCn: '堑壕战（trench warfare）是一战西线最典型的打法。双方各挖几百公里的壕沟，谁也攻不动谁，就这样对峙了好几年。之所以谁都动不了，是因为机关枪、毒气、铁丝网等新技术让防守远远强过进攻——一次冲锋可以死掉上万人，战线却可能只推进几百米。',
      defEn: 'Trench warfare is the most defining style of fighting on the WWI Western Front. Both sides dug hundreds of kilometers of trenches and faced off for years, neither able to break through. The reason nobody could move was that new technology — machine guns, poison gas, barbed wire — made defense far stronger than offense: a single charge could kill ten thousand men while the line moved only a few hundred meters.',
      standardRef: ['AP World KC-7.2', 'AP Euro Unit 8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { context: '威尔逊那条故事线里，他在白宫里想象前线：机关枪、毒气、铁丝网、几月推进几百米、一次冲锋死上万' },
          { context: 'Demba 那条故事线里，他亲身站在 1916 年凡尔登附近的战壕里——泥水到膝，吹哨就要冲过铁丝网' },
        ],
      },
      standaloneText: {
        cn: `一战是人类**第一场工业化战争**——工厂能量产的杀人技术，第一次大规模上战场。结果是西线陷入了一种谁也打不动谁的僵局：**堑壕战（trench warfare）**。

**什么是堑壕战**：双方各挖几百公里的壕沟，灌满泥水、老鼠、虱子、尸臭。两条战壕之间叫"无人区"（no man's land），上面铺满铁丝网。

**为什么打不动**：新技术让"防守"远远强过"进攻"——
- **机关枪（machine gun）**：一挺枪一分钟能打几百发，士兵一冲出战壕就成排倒下；
- **毒气（poison gas）**：氯气、芥子气，看不见地飘过来，烧肺、烧眼睛；
- **铁丝网（barbed wire）**：把冲锋的士兵卡在原地，正好成了机枪的活靶子；
- **重炮（artillery）**：几百万发炮弹，是这场战死人最多的武器。

所以才会出现那种恐怖画面：一次冲锋死掉上万人，战线却只推进几百米。**坦克（tank）**是英国为了碾过铁丝网、突破僵局发明的新武器，1916 年索姆河战役首次上场——但要到后来才真正改变战局。

故事连接：威尔逊那条故事线里，他坐在白宫，想象他签字送去的士兵面对的就是这些。Demba 那条故事线里，他**亲身**站在 1916 年凡尔登附近的战壕里——泥水到膝，吹哨就得爬出去冲过铁丝网。一个从上面想象，一个在下面承受，是同一条战壕。`,
        en: `WWI was humanity's **first industrialized war** — killing technology that factories could mass-produce reached the battlefield on a huge scale for the first time. The result on the Western Front was a deadlock where neither side could move the other: **trench warfare.**

**What trench warfare is**: each side dug hundreds of kilometers of trenches, flooded with mud and water, rats, lice, and the stench of corpses. Between the two trench lines lay "no man's land," covered in barbed wire.

**Why nobody could move**: new technology made defense far stronger than offense —
- **Machine gun**: one gun fired hundreds of rounds a minute; soldiers charging out of the trench fell in rows;
- **Poison gas**: chlorine and mustard gas drifted in unseen, burning lungs and eyes;
- **Barbed wire**: pinned charging soldiers in place, turning them into living targets for the machine guns;
- **Artillery**: millions of shells — the deadliest weapon of the whole war.

That's why you get the horrifying picture: ten thousand die in one charge, yet the line advances only a few hundred meters. The **tank** was a new weapon Britain invented to crush over barbed wire and break the deadlock, first used at the Somme in 1916 — though it would not truly change the war until later.

Wilson's story thread has him sitting in the White House imagining exactly this as what the soldiers he signed off face. Demba's story thread has him standing **in person** in a trench near Verdun in 1916 — mud to the knees, the whistle blowing, having to climb out and charge through the barbed wire. One imagines it from above, one endures it below — the same trench.`,
      },
      xiaoweiNote: {
        cn: `老师说这块最容易出"为什么一战这么久、死这么多人"的题。我的答题模板：**新技术让防守 >> 进攻 → 双方都攻不动 → 陷入堑壕僵局 → 拼消耗 → 死伤天文数字。**

记几个数字感觉就够：1916 年**索姆河战役**双方伤亡逾百万；**凡尔登战役**双方死伤数十万——战线几乎没动。这就是"绞肉机"这个词的来历。
（小心别把凡尔登写成"死伤近百万"，账本说那略高了，凡尔登是数十万级。）`,
        en: `Teacher said this block most often produces "why did WWI last so long and kill so many" questions. My answer template:
**new tech made defense >> offense → neither side could attack through → trench stalemate → war of attrition → astronomical casualties.**

A sense of the numbers is enough: at the 1916 **Battle of the Somme**, combined casualties topped one million; at **Verdun**, combined casualties were in the hundreds of thousands — and the line barely moved. That's where the word "meat grinder" comes from.
(Careful not to write Verdun as "near a million" — the fact ledger says that's a bit high; Verdun is in the hundreds-of-thousands range.)`,
      },
    },

    // ── 卡 5：总体战 + home front（独立 mini-lesson）──
    {
      id: 'total-war-home-front',
      termCn: '总体战 + 后方动员（home front）',
      termEn: 'Total War + the Home Front',
      defCn: '总体战（total war）的意思是：战争不再只是"军队打军队"，而是整个国家的工厂、农场、钱、人口全部被动员起来为战争服务。前方打仗用的炮弹、军装、粮食，靠的是后方（home front，国内战线）全力开动。一战是人类历史上第一场真正的总体战。',
      defEn: 'Total war means the war is no longer just "army against army" — the entire country\'s factories, farms, money, and population are all mobilized to serve the war effort. The shells, uniforms, and food the front needs come from the home front running at full power. WWI was the first true total war in human history.',
      standardRef: ['AP World KC-7.2', 'APUSH Period 7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { context: '威尔逊那条故事线里说他"把几百万美国年轻人送过大西洋"——背后是整个国家被动员' },
        ],
      },
      standaloneText: {
        cn: `一战还有一个必考的"新东西"，跟前面的技术配套，叫 **总体战（total war）**。

意思是：这不再是"军队打军队"的战争，而是**整个国家——工厂、农田、人口、钱——全部被动员起来为战争服务**。前方需要的炮弹、军装、粮食，靠的是后方（**home front，后方/国内战线**）全力开动。

总体战带来几个考点常考的社会变化：
- **女性进工厂**：年轻男人都上了前线，工厂、军工厂、农田缺人，大批女性第一次走出家庭去做"以前只有男人做的活"。（这件事后来直接推动了**女性争取投票权**——"我们能在战时顶半边天，凭什么不能投票？"）
- **政府全面接管经济**：定量配给食物、统一管制工厂、发战争债券筹钱。
- **宣传机器全开**：海报、报纸、电影开足马力，动员民众支持战争、仇视敌人。
- **殖民地被卷入**：宗主国从殖民地征召几百万士兵和劳工（见殖民地士兵那张卡）。

故事连接：威尔逊那条故事线里说他"把几百万美国年轻人送过大西洋"——能送出几百万人、还能造出供他们打仗的全部装备，靠的就是美国整个国家的总体战动员。`,
        en: `WWI has another must-know "new thing" that pairs with the technology above: **total war.**

It means: this is no longer "army against army," but a war where **the entire nation — factories, farmland, population, money — is all mobilized to serve the war.** The shells, uniforms, and food the front needs come from the rear (**the home front**) running at full power.

Total war brought several social changes the exam loves to test:
- **Women entered factories**: with young men at the front, factories, munitions plants, and farms ran short of workers, and large numbers of women stepped out of the home to do "work only men used to do." (This later directly pushed **women's fight for the vote** — "We can hold up half the sky in wartime — why can't we vote?")
- **Governments took over the economy**: rationing food, controlling factories, raising money through war bonds.
- **Propaganda machines at full blast**: posters, newspapers, and films cranked up to rally the public behind the war and stir hatred of the enemy.
- **Colonies pulled in**: imperial powers conscripted millions of soldiers and laborers from their colonies (see the colonial troops card).

Wilson's story thread says he "sent millions of young Americans across the Atlantic" — being able to ship out millions of people and produce all the equipment to fight with depended on the total-war mobilization of the entire United States.`,
      },
      xiaoweiNote: {
        cn: `我把 total war 和 trench warfare 配成一对记："堑壕战"是前线的样子，"总体战"是后方的样子，两个加起来才是完整的一战。

最常考的一条："一战为什么改变了女性的社会地位？"——答：总体战把女性拉进了工厂和军工，证明她们能做男人的工作，战后成了争取投票权的有力理由。这条直接连到 womens-suffrage 那段历史，是跨主题的高分连线。`,
        en: `I pair total war with trench warfare to remember them: "trench warfare" is what the front looked like, "total war" is what the rear looked like — both together make the complete WWI.

Most commonly tested: "why did WWI change women's social standing?" — Answer: total war pulled women into factories and munitions work, proving they could do men's jobs, which became a strong argument for the vote after the war. This links straight to the womens-suffrage topic — a high-scoring cross-topic connection.`,
      },
    },

    // ── 卡 6：殖民地士兵 / 塞内加尔狙击兵（故事覆盖 — tirailleur default lens）──
    {
      id: 'colonial-troops-tirailleurs',
      termCn: '殖民地士兵 / 塞内加尔狙击兵',
      termEn: 'Colonial Troops / Senegalese Tirailleurs',
      defCn: '塞内加尔狙击兵（tirailleurs sénégalais）是法国从法属西非殖民地强征来的步兵。一战中约 20 万人被征召，其中约 13.5 万在欧洲战场作战，约 3 万人阵亡。他们是一战真正是"世界大战"的证明——欧洲以外的几百万殖民地人被拉来替宗主国流血，战后承诺的权利却大多落空。',
      defEn: 'The Senegalese tirailleurs (tirailleurs sénégalais) were infantry forcibly conscripted by France from its French West African colonies. About 200,000 were conscripted in WWI, about 135,000 fought in Europe, and about 30,000 died. They are proof that WWI was truly a world war — millions of colonial peoples from outside Europe were pulled in to bleed for imperial masters, and most of the rights promised to them after the war were never delivered.',
      standardRef: ['AP World KC-7.2', 'AP World KC-7.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'senegalese-tirailleur-receiving-end',
        nodeIds: ['tir-n3', 'tir-n4', 'tir-n7', 'tir-n8'],
        xiaoweiNote: {
          cn: `Demba 那条故事线整条都是这个——这也是这一课的**默认视角**，老师特别说要认真读。重点记牢：一战不是"欧洲人之间的战争"，它是**真正的世界大战**。

**塞内加尔狙击兵（tirailleurs sénégalais）**：法国从法属西非殖民地征召的步兵（名字里有"塞内加尔"，但兵来自整个法属西非）。一战约 **20 万人**被征召，约 13.5 万在欧洲作战，约 **3 万人阵亡**。（故事里的 Demba 是**合成角色**——名字和村子是叙事补充，但这支部队和他们的遭遇是真史实。）

几个考点细节：
① 征兵名为"招募"，实为**强征**：村庄摊派人头，有钱有势的逃掉，承担的是穷人家孩子；
② 他们常被派去打**最危险的地段**——某些军官眼里，殖民地兵的命比欧洲兵"便宜"；
③ 战后承诺的公民权、抚恤多半**没兑现**，家乡照旧被殖民。

考点关键句：殖民地几百万士兵和劳工为宗主国流血，**名字大多没进任何纪念碑**——（同时代的中国也派了约 **14 万华工**赴欧西线，是同一类被略过的非欧洲人。）`,
          en: `Demba's story thread is this entire topic — and it's also the **default story** of this lesson; teacher specifically said to read it carefully. Lock in: WWI was not "a war among Europeans" — it was a **true world war.**

**Senegalese tirailleurs (tirailleurs sénégalais)**: infantry France conscripted from its French West African colonies (the name says "Senegal," but the soldiers came from all of French West Africa). About **200,000** were conscripted in WWI, about 135,000 fought in Europe, and about **30,000 died.** (The Demba in the story is a **composite character** — his name and village are narrative additions, but this unit and what befell them are real history.)

Exam details:
① Recruiting was called "enlistment" but was really **forced**: villages were given quotas, the rich and powerful escaped, and the children of poor families bore it;
② They were often sent to the **most dangerous stretch** — in some officers' eyes, colonial troops' lives were "cheaper" than European troops';
③ The citizenship and pensions promised after the war were mostly **not paid**, and their homelands stayed colonized.

Key exam sentence: millions of colonial soldiers and laborers bled for their imperial masters, and **most of their names entered no monument** — (contemporary China also sent about **140,000 Chinese laborers** to the Western Front, the same kind of overlooked non-European people.)`,
        },
      },
    },

    // ── 卡 7：威尔逊十四点 + 自决 + 国联（故事覆盖 — Wilson lens）──
    {
      id: 'wilson-fourteen-points',
      termCn: '威尔逊"十四点" / 民族自决 / 国际联盟',
      termEn: 'Wilson\'s Fourteen Points / Self-Determination / League of Nations',
      defCn: '1918 年 1 月 8 日，美国总统威尔逊向国会提出"十四点"（Fourteen Points）和平方案。其中最重要的两条是：民族自决（self-determination）——每个民族有权决定自己的政府；和国际联盟（League of Nations）——各国组成一个集体安全组织。这两条话鼓舞了全世界被压迫的人，但实际执行时，民族自决只给了欧洲白人小民族，亚非殖民地被拒，国联也因美国国会拒绝批准而先天不足。',
      defEn: 'On January 8, 1918, U.S. President Wilson presented his "Fourteen Points" peace plan to Congress. The two most important points were: self-determination — every people has the right to choose its own government; and a League of Nations — countries would form a collective security organization. These ideas inspired oppressed peoples worldwide. In practice, however, self-determination went only to Europe\'s white small nations; Asian and African colonies were refused. The League also started weak because the U.S. Congress refused to ratify it.',
      standardRef: ['APUSH Period 7', 'AP World KC-7.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'woodrow-wilson',
        nodeIds: ['wil-n3', 'wil-n5', 'wil-n7', 'wil-n8'],
        xiaoweiNote: {
          cn: `威尔逊那条故事线整条都是他。他是 **APUSH 必考人物**，老师说几乎年年出。重点：

**美国怎么参战**：1917 年两件事把美国逼进战争——
① 德国**无限制潜艇战**（击沉一切开往英国的船，含中立国）；
② **Zimmermann 电报**（德国密谋拉墨西哥结盟、许诺帮它夺回失地，被英国截获公开）。
**1917.4.2** 威尔逊请国会宣战，喊出 **"为民主而安全"（make the world safe for democracy）**。

**十四点**：1918.1.8 提出的和平蓝图，必背四条——**公开外交、削减军备、民族自决（self-determination）、国际联盟（League of Nations）**。

**两个"理想落空"的考点**：
① 巴黎和会上"民族自决"只给了欧洲白人小民族（波兰、捷克建国），亚非殖民地求自决被拒——它有一条看不见的肤色线；
② 国际联盟成立了，但**美国国会拒批，这个发起国自己反而没加入**；威尔逊全国巡讲争取支持时中风半瘫。

考点关键句：威尔逊**理想与伪善同体**——他对全世界喊"自决、平等"，同一双手 1913 年起在白宫重推联邦机构种族隔离（连到 reconstruction 那段历史的倒退）。AP 经典题："威尔逊是理想主义者还是伪善者？"——**两边都要写**。`,
          en: `Wilson's story thread is entirely about him. He's a **must-know APUSH figure** — teacher said he shows up almost every year. Key points:

**How the US entered**: in 1917, two things forced America in —
① Germany's **unrestricted submarine warfare** (sinking any ship bound for Britain, neutrals included);
② The **Zimmermann Telegram** (Germany secretly proposing an alliance with Mexico, promising to help it win back lost land, intercepted and published by Britain).
On **April 2, 1917** Wilson asked Congress to declare war, with the line **"make the world safe for democracy."**

**Fourteen Points**: a peace blueprint laid out January 8, 1918 — memorize four: **open diplomacy, arms reduction, self-determination, and a League of Nations.**

**Two "ideals fall short" exam points**:
① At the Paris conference, "self-determination" went only to Europe's white small peoples (Poland, Czechoslovakia got states), while Asian and African colonies were refused — it had an invisible color line;
② The League of Nations was founded, but **the US Congress refused to ratify, so the very country that proposed it never joined**; Wilson suffered a stroke while touring the country to build support.

Key exam sentence: Wilson is **ideals and hypocrisy on the same body** — he cried "self-determination, equality" to the world, while the same hands re-segregated the federal government starting in 1913 (linking to the backslide in the reconstruction topic). Classic AP question: "Was Wilson an idealist or a hypocrite?" — **write both sides.**`,
        },
      },
    },

    // ── 卡 8：凡尔赛和约 + 帝国崩溃 + 长尾后果（独立 mini-lesson）──
    {
      id: 'versailles-empire-collapse',
      termCn: '凡尔赛和约 + 帝国崩溃 + 战后后果',
      termEn: 'Treaty of Versailles + Empire Collapse + Aftermath',
      defCn: '《凡尔赛和约》（Treaty of Versailles）是 1919 年巴黎和会的结果。它把战争全部责任压给德国，要求巨额赔款、削减军队、割让领土。这份和约还见证了四大帝国的崩溃：德意志、奥匈、奥斯曼、俄罗斯。二十年后，和约的屈辱成了希特勒上台的燃料，引发第二次世界大战。',
      defEn: 'The Treaty of Versailles was the outcome of the 1919 Paris Peace Conference. It placed the full blame for the war on Germany, demanded massive reparations, and stripped Germany of territory and military strength. The treaty also marked the collapse of four empires: German, Austro-Hungarian, Ottoman, and Russian. Twenty years later, the humiliation of the treaty became the fuel that helped Hitler rise to power and ignite World War II.',
      standardRef: ['AP World KC-7.3', 'AP Euro Unit 8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { context: '威尔逊那条故事线里，他承认苛刻和约羞辱德国，二十年后被人利用炸出二战' },
          { context: 'Demba 那条故事线里，退伍殖民地兵把"种子"带回非洲，几十年后掀起去殖民化浪潮' },
        ],
      },
      standaloneText: {
        cn: `战争 **1918 年 11 月 11 日**停战，约一千七百万人已死。然后是收拾残局的**1919 年巴黎和会**，结果就是 **《凡尔赛和约》（Treaty of Versailles）**。

**和约对德国很苛刻**：把战争的全部责任压给德国（"war-guilt clause / 战争罪责条款"）、要求巨额赔款、削减德国军队、夺走它的殖民地。德国人觉得这是奇耻大辱。

**四大帝国崩溃**（这是 AP 高频考点）：一战直接打垮了四个老帝国——
- **德意志帝国**（战败、皇帝退位）
- **奥匈帝国**（解体，分裂出多个新国家）
- **奥斯曼帝国**（解体，中东被英法用尺子在地图上划分）
- **俄罗斯帝国**（1917 年革命，沙皇被推翻）

**两条长尾后果**（一定要会写）：
- **导向二战**：和约的屈辱 + 经济崩溃，二十年后被一个更可怕的人物（希特勒）利用上台，引爆**第二次世界大战**。威尔逊那句"终结一切战争的战争"成了反讽。
- **种下去殖民化的种子**："民族自决"对殖民地是空头支票，却被殖民地人民**反过来**拿去要独立——胡志明后来领越南赶走法国，战后几十年掀起去殖民化浪潮。

故事连接：威尔逊那条故事线里，他亲口承认苛刻和约埋下了二战的引线；Demba 那条故事线里，他把"种子"带回非洲——"写漂亮话的人没打算让我们用，可话一旦说出口，就不只属于说它的人了。"`,
        en: `The war stopped on **November 11, 1918**, with about seventeen million already dead. Then came the cleanup of the **1919 Paris Peace Conference**, which produced the **Treaty of Versailles.**

**The treaty was harsh on Germany**: it put the entire blame for the war on Germany (the "war-guilt clause"), demanded huge reparations, slashed Germany's military, and took away its colonies. Germans saw it as a deep humiliation.

**Four empires collapsed** (a frequent AP exam point): WWI directly broke four old empires —
- The **German Empire** (defeated, the Kaiser abdicated)
- **Austria-Hungary** (dissolved, splitting into several new nations)
- The **Ottoman Empire** (dissolved, the Middle East drawn up by Britain and France with a ruler on a map)
- The **Russian Empire** (1917 revolution, the Tsar overthrown)

**Two long-tail consequences** (you must be able to write these):
- **Leading to WWII**: the treaty's humiliation + economic collapse were used twenty years later by a far more terrible figure (Hitler) to rise to power and set off **World War II.** Wilson's "war to end all wars" became an irony.
- **Planting the seeds of decolonization**: "self-determination" was an empty check for the colonies, yet the colonized **turned it around** to demand independence — Ho Chi Minh later led Vietnam to drive out the French, and a wave of decolonization rose in the decades after.

Wilson's story thread has him admitting in his own words that the harsh treaty laid the fuse for WWII. Demba's story thread has him carrying the "seed" back to Africa — "the people who wrote those fine words never meant for us to use them, but once words are spoken, they no longer belong only to the ones who spoke them."`,
      },
      xiaoweiNote: {
        cn: `老师说凡尔赛和约这块最容易出"原因 → 结果"链的大题。我背两条因果链：
**① 苛刻和约 → 羞辱德国 → 经济崩溃 → 希特勒上台 → 二战**（这是 AP 标准叙事，但记得它是"诠释性因果"，不是单一决定论，写的时候别说得太绝对）；
**② 民族自决空头支票 → 殖民地人民反过来用它当武器 → 去殖民化浪潮**。

帝国崩溃我用口诀记："**德、奥、奥、俄**"四个帝国全垮——德意志、奥匈、奥斯曼、俄罗斯。（注意有两个"奥"：奥匈 ≠ 奥斯曼，别搞混。）`,
        en: `Teacher said the Versailles block most often produces big "cause → effect" chain questions. I memorize two causal chains:
**(1) harsh treaty → humiliated Germany → economic collapse → Hitler rises → WWII** (this is the standard AP narrative, but remember it's "interpretive causation," not single-cause determinism — don't write it too absolutely);
**(2) self-determination as empty check → the colonized turn it into a weapon → wave of decolonization.**

For the empire collapse I use a mnemonic: "**German, Austrian, Ottoman, Russian**" — four empires all fall: German, Austro-Hungarian, Ottoman, Russian. (Note the two "A/O"s: Austria-Hungary ≠ the Ottoman Empire — don't mix them up.)`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `普林西普只是个 19 岁、得了肺结核的塞族穷孩子，他开的两枪点着了一战。可你已经读过——真正的"炸药"，是几十年的 M.A.I.N.（军国主义、联盟体系、帝国主义、民族主义）。

一场吞掉一千七百万人的灾难，到底该怪那个"点火星的人"（普林西普），还是那些"把炸药堆到顶的人"（各大帝国）？责任该怎么分？`,
      en: `Princip was just a poor 19-year-old Bosnian Serb with tuberculosis, and his two shots lit WWI. But you've read it — the real "explosive" was decades of M.A.I.N. (militarism, alliances, imperialism, nationalism).

For a catastrophe that swallowed seventeen million people, should we blame the "person who struck the spark" (Princip), or the ones who "piled the explosive to the top" (the great empires)? How should the blame be divided?`,
      hintCn: `提示：可以从两个角度想——
① 没有普林西普那两枪，炸药还得有人点，责任更多在堆炸药的大帝国（结构 > 个人）；
② 但再大的结构，也是普林西普**自己**扣下了扳机，他得为自己的选择负责（个人 > 结构）。
两边都有证据，AP DBQ 看重的是你怎么用证据论证，不是你站哪边。

进阶思考：今天也一样——一句失控的话引爆网上一场风暴，表面是某个"点火的人"，可底下往往早就堆着没人去拆的炸药。"火星"和"炸药"，哪个更该负责？`,
      hintEn: `Hint: think from two angles —
① Without Princip's two shots, someone would still have lit the explosive; the blame lies more with the empires that piled it (structure > individual);
② But however large the structure, it was Princip **himself** who pulled the trigger, and he must answer for his choice (individual > structure).
Both sides have evidence; AP DBQ values how you argue with evidence, not which side you pick.

Going deeper: it's the same today — one careless line sets off a storm online; on the surface it looks like some "person who lit it," yet beneath there's often explosive long piled up that no one defused. The "spark" or the "explosive" — which is more to blame?`,
      conceptsActivated: ['franz-ferdinand-assassination', 'main-causes', 'alliance-chain-july-crisis'],
    },
    {
      id: 'q2',
      cn: `威尔逊向全世界喊"民族自决"——每个民族都有权自己当家做主。Demba 听到这句话时，差点笑出来又差点哭出来：他的家乡正被法国统治，他正穿着法国军装为"自由"去死，而这个法国回过头依旧统治着他的家乡。

如果你是 AP 老师，要出一道题，分析"威尔逊的'民族自决'到底有多'普遍'"，你会怎么提问？`,
      en: `Wilson cried "self-determination" to the world — every people has the right to govern themselves. When Demba heard this, he nearly laughed and nearly wept: his homeland was ruled by France, he wore a French uniform dying for "freedom," and this France went on ruling his homeland as firmly as ever.

If you were an AP teacher writing a question to analyze "how universal was Wilson's 'self-determination,'" how would you phrase it?`,
      hintCn: `提示：AP 题通常给学生几份材料（威尔逊十四点第 5 点原文、巴黎和会的实际结果、殖民地代表的请愿），让学生分析"理想的文字"和"实际的执行"之间的鸿沟。你可以从这条"看不见的肤色线"切入：欧洲白人小民族（波兰、捷克）拿到了自决，亚非殖民地（塞内加尔、越南、中国山东）被拒——同一句"民族自决"，对谁算数、对谁不算数？

可能的提问角度：
- "Compare what Wilson's Fourteen Points said about colonies with what the Paris conference actually did. What does the gap reveal?"
- "Whose 'self-determination' counted, and whose did not? Use evidence to explain why."`,
      hintEn: `Hint: an AP question usually gives students several sources (the text of Wilson's Fifth Point, the actual results of the Paris conference, petitions from colonial delegates) and asks them to analyze the gap between "the words of the ideal" and "the actual execution." You can cut in through this "invisible color line": Europe's white small peoples (Poland, Czechoslovakia) got self-determination, while Asian and African colonies (Senegal, Vietnam, China's Shandong) were refused — the same phrase "self-determination," counting for whom and not for whom?

Possible question angles:
- "Compare what Wilson's Fourteen Points said about colonies with what the Paris conference actually did. What does the gap reveal?"
- "Whose 'self-determination' counted, and whose did not? Use evidence to explain why."`,
      conceptsActivated: ['wilson-fourteen-points', 'colonial-troops-tirailleurs', 'versailles-empire-collapse'],
    },
    {
      id: 'q3',
      cn: `威尔逊说一战是"终结一切战争的战争"。可《凡尔赛和约》对德国太苛刻，羞辱了战败的德国，二十年后一个更可怕的人物利用这份屈辱，发动了第二次世界大战。

一个真心想要和平的人，怎么会反而为下一场更大的战争埋下引线？你觉得问题出在"和约太狠"，还是出在别的地方？`,
      en: `Wilson called WWI "the war to end all wars." But the Treaty of Versailles was too harsh on Germany, humiliating the defeated nation, and twenty years later a far more terrible figure used that humiliation to launch the Second World War.

How could a man who sincerely wanted peace instead lay the fuse for a bigger war? Do you think the problem was that "the treaty was too harsh," or something else?`,
      hintCn: `提示：可以从几个角度想——
① 和约太苛刻：巨额赔款 + 战争罪责条款 + 削军 + 夺殖民地，让德国人长期觉得受辱，给了极端主义可乘之机；
② 也有人说问题不在"太狠"，而在"既羞辱了德国、又没彻底削弱它"——半软半硬，最糟；
③ 还有更深一层：威尔逊太相信自己是对的，连一点妥协都不肯让，结果美国国会拒批、这个发起国自己没加入国联，让国联从一开始就少了一条腿。

进阶：注意这条因果链是"诠释性"的——历史学家至今在争"和约 → 二战"有多直接。写 essay 时承认它复杂，比写得太绝对更有分。`,
      hintEn: `Hint: think from several angles —
① The treaty was too harsh: huge reparations + war-guilt clause + military cuts + loss of colonies left Germans feeling humiliated for a long time, giving extremism an opening;
② Others say the problem wasn't "too harsh" but "humiliating Germany without fully weakening it" — half-soft, half-hard, the worst of both;
③ A deeper layer: Wilson believed too firmly he was right and would not compromise, so the US Congress refused to ratify and the founding country itself never joined the League, leaving it short a leg from the start.

Going deeper: notice this causal chain is "interpretive" — historians still argue how direct "treaty → WWII" really was. In an essay, acknowledging the complexity scores more than writing it too absolutely.`,
      conceptsActivated: ['versailles-empire-collapse', 'wilson-fourteen-points', 'main-causes'],
    },
  ],
};

export default notebook;
