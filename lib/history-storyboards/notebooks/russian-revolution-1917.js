// ─── 同伴笔记本架构 v1 · The Russian Revolution 1917 ────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 核心考点卡（喂 mustMemorize + 金筹码考点高亮）
//   3. thinkingQuestions（出口批判性思考）— 开放式 DBQ 入门题，Rule 0 中性
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（纺织女工 receiving-end / 布尔什维克组织者
//     perpetrator-actor / Kerensky lonely-mediator 三条线）
//   - notebook 提供考点闭环（二月 vs 十月、临时政府、苏维埃、双重权力、
//     布尔什维克、和平·土地·面包、四月提纲、尼古拉二世退位、布列斯特和约、
//     红军 vs 白军、五四→中共因果桥 — 补完 AP World Unit 7 课纲）
//
// 课纲对齐：
//   - AP World History Modern — Unit 7 (1900-present)：Topic 7.3-7.4 一战的进行与后果
//   - APUSH Period 7 (1898-1945)：冷战起点对手
//   - HS World History 9-12：20 世纪革命与极权主义单元
//
// 事实地基：对账 russian-revolution-1917.md（附录 B 词汇 / C 人物 / §7 DBQ / §10 误解 / §11 思考）
//
// 历法约定：新历（NS）为主，旧历（OS）放括号；1917 年 OS 比 NS 晚 13 天。
//
// schemaVersion: 1 · notebookVersion: russian-revolution-1917-v1

export var notebook = {
  topicId: 'russian-revolution-1917',
  topicNameCn: '俄国革命 1917',
  topicNameEn: 'The Russian Revolution 1917',
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
    cn: `今天老师说我们要学 1917 年的俄国革命（the Russian Revolution）。
她说这是 AP World 第七单元里的必考课——讲一战怎么把一个统治了 300 年的王朝压垮，
又怎么催生出一种全新的国家形态。

她先警告了我们一件事，说这是这门课最容易搞错的地方：
1917 年俄国革命**不是一场，是两场**——三月的「二月革命」和十一月的「十月革命」，
性质完全不同。老师说很多人（包括很多家长）会把它们混成一场，千万别。

还有一个坑：1917 年俄国用的是旧历（儒略历），比我们的新历晚 13 天。
所以「二月革命」其实发生在三月、「十月革命」其实发生在十一月——名字来自旧历月份。
我先记下来：写日期时新历为主，旧历放括号里。

我回家问我妈，她说她小时候学的是「十月革命一声炮响」。
老师说这很正常——中国课纲把十月革命讲成「伟大胜利」，
几乎不讲二月革命、不讲临时政府、不讲制宪会议被解散，
所以「二月和十月到底差在哪」「克伦斯基是谁」，家长大多讲不清，得靠我们自己。

她给了一张纸，上面写着这些名字：

Lenin（列宁）、Kerensky（克伦斯基）、Trotsky（托洛茨基）、Nicholas II（尼古拉二世）

还有一串词：Tsar（沙皇）、Duma（杜马）、Soviet（苏维埃）、
Bolshevik（布尔什维克）、Provisional Government（临时政府）、
dual power（双重权力）、"Peace, Land, Bread"（和平·土地·面包）。

我先记下来，等下读三个故事——一个彼得格勒纺织女工（receiving-end，点火的人）、
一个布尔什维克工厂组织者（把革命做出来的那只手）、
还有 Kerensky（夹在所有人中间、两头不讨好的调停者）——
读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「同样一句『为了人民』，
可以用来打开自由——推翻沙皇；也可以用来关掉自由——解散议会。
这门课不替你判这场革命值不值，它让你同时听见两边。」`,
    en: `Today my teacher said we're learning the 1917 Russian Revolution.
She said it's a required lesson in AP World's Unit 7 — how World War I crushed a
dynasty that had ruled for 300 years, and how it gave birth to a brand-new kind of state.

She warned us about one thing first, said it's where this whole topic is easiest to get
wrong: the 1917 Russian Revolution was **not one revolution, but two** — the "February
Revolution" in March and the "October Revolution" in November, completely different in
nature. Teacher said lots of people (parents included) blur them into one. Don't.

There's another trap: in 1917 Russia still used the Old Style (Julian) calendar, 13 days
behind our New Style. So the "February Revolution" actually happened in March, and the
"October Revolution" actually in November — the names come from Old Style months. Note to
self: write New Style first, Old Style in parentheses.

When I got home I asked my mom; she said as a kid she learned the line "the October
Revolution fired a shot." Teacher said that's normal — Chinese curricula tell October as a
"great victory" and barely cover the February Revolution, the Provisional Government, or
the dissolved Constituent Assembly, so on "how February and October differ" and "who
Kerensky was," most parents can't help, and we're on our own.

She gave us a sheet with these names:

Lenin, Kerensky, Trotsky, Nicholas II

Plus a string of terms: Tsar, Duma, Soviet, Bolshevik, Provisional Government,
dual power, "Peace, Land, Bread."

Let me write these down. After I read the three stories — a Petrograd textile worker (the
receiving end, the one who lights it), a Bolshevik factory organizer (the hand that makes
the revolution happen), and Kerensky (the mediator caught between everyone, disliked by
both sides) — I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The same phrase 'for
the people' can be used to open up freedom — overthrowing the Tsar; and to shut freedom
down — dissolving the assembly. This class won't judge whether the revolution was worth it;
it lets you hear both sides at once."`,
    keyTerms: [
      { cn: '沙皇（俄国君主称号）', en: 'Tsar' },
      { cn: '杜马（1905 后设的议会）', en: 'Duma' },
      { cn: '苏维埃（工人士兵代表会议，原意「会议」）', en: 'Soviet' },
      { cn: '临时政府（二月革命后的自由派政府）', en: 'Provisional Government' },
      { cn: '双重权力（临时政府与苏维埃并立）', en: 'dual power' },
      { cn: '布尔什维克（Lenin 领导的激进派）', en: 'Bolshevik' },
      { cn: '红卫队（工厂工人武装）', en: 'Red Guard' },
      { cn: '四月提纲（Lenin 的纲领）', en: 'April Theses' },
      { cn: '和平·土地·面包（布尔什维克口号）', en: '"Peace, Land, Bread"' },
      { cn: '制宪会议（1918.1 被解散）', en: 'Constituent Assembly' },
      { cn: '布列斯特-立托夫斯克和约（退出一战）', en: 'Treaty of Brest-Litovsk' },
      { cn: '红军 vs 白军（内战两方）', en: 'Red vs White' },
      { cn: '旧历 / 新历（差 13 天）', en: 'Old Style / New Style' },
    ],
    // mustKnow: true = 必考必拼，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点拼写，不加音频
    keyFigures: [
      {
        nameCn: '弗拉基米尔·列宁',
        nameEn: 'Vladimir Lenin',
        ipa: '/ˈvlædɪmɪr ˈlɛnɪn/',
        roleCn: '布尔什维克领袖。二月革命爆发时还在瑞士流亡，1917 年 4 月乘德国安排的「封闭列车」回到彼得格勒，立刻抛出《四月提纲》、喊「一切权力归苏维埃」；11 月与 Trotsky 一起领导十月夺权，建立世界上第一个共产党领导的国家',
        roleEn: "The Bolshevik leader. Still in Swiss exile when the February Revolution broke out, he returned to Petrograd in April 1917 on a German-arranged 'sealed train,' immediately issued the April Theses and called for 'all power to the Soviets'; in November he and Trotsky led the October seizure, founding the world's first Communist-led state",
        mustKnow: true,
        audioKey: 'vladimir-lenin',
      },
      {
        nameCn: '亚历山大·克伦斯基',
        nameEn: 'Alexander Kerensky',
        ipa: '/ˌælɪɡˈzændər kəˈrɛnski/',
        roleCn: '律师出身的温和社会主义者，临时政府首脑。他想给俄国一条「有自由、没沙皇、也没有一党专政」的中间道路，却坚持继续打一战、两头都得罪——旧秩序嫌他太左，布尔什维克嫌他太右；11 月布尔什维克动手时他几乎调不动一支可靠军队，逃出彼得格勒，1970 年死在纽约',
        roleEn: "A lawyer and moderate socialist, head of the Provisional Government. He wanted a middle road for Russia — 'freedom, no Tsar, no one-party dictatorship' — but insisted on continuing WWI and alienated both sides: the old order thought him too left, the Bolsheviks too right; when the Bolsheviks moved in November he could barely raise a reliable army, fled Petrograd, and died in New York in 1970",
        mustKnow: true,
        audioKey: 'alexander-kerensky',
      },
      {
        nameCn: '列夫·托洛茨基',
        nameEn: 'Leon Trotsky',
        ipa: '/ˈliːɒn ˈtrɒtski/',
        roleCn: '十月革命的军事组织者。他主持彼得格勒苏维埃的军事革命委员会，是把红卫队真正调动起来、占领桥梁电报局和冬宫的指挥者；后来代表新政权谈判《布列斯特-立托夫斯克和约》',
        roleEn: "The military organizer of the October Revolution. He ran the Petrograd Soviet's Military Revolutionary Committee, the commander who actually mobilized the Red Guards to seize the bridges, telegraph office, and Winter Palace; he later negotiated the Treaty of Brest-Litovsk for the new regime",
        mustKnow: true,
        audioKey: 'leon-trotsky',
      },
      {
        nameCn: '尼古拉二世',
        nameEn: 'Nicholas II',
        ipa: '/ˈnɪkələs ðə ˈsɛkənd/',
        roleCn: '末代沙皇，统治了 300 年的罗曼诺夫王朝最后一人。1915 年亲赴前线指挥，把每一场败仗都记在自己头上、把首都丢给皇后和 Rasputin；1917 年 3 月 15 日（旧 3.2）在火车上被前线将领劝退，连儿子的位也一起退掉',
        roleEn: "The last Tsar, final ruler of the 300-year Romanov dynasty. In 1915 he took personal command at the front, putting every defeat on himself and leaving the capital to the Empress and Rasputin; on March 15, 1917 (OS March 2) he abdicated aboard a train, persuaded by his frontline generals, giving up his son's claim as well",
        mustKnow: true,
        audioKey: 'nicholas-ii',
      },
      {
        nameCn: '拉夫尔·科尔尼洛夫',
        nameEn: 'Lavr Kornilov',
        ipa: '/ˈlɑːvr kɔːrˈniːlɒf/',
        roleCn: '1917 年 9 月（旧 8 月底）发动兵变的将军。Kerensky 先召他进京想压住左翼，又怕他夺权反过来求布尔什维克帮忙挡住他——这一挡让七月还灰头土脸的布尔什维克声望暴涨',
        roleEn: "The general behind the September 1917 (late OS August) coup attempt. Kerensky first summoned him to suppress the left, then, fearing Kornilov would seize power, turned to the Bolsheviks to block him — that defense let the Bolsheviks, humbled in July, surge back in prestige",
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '彼得格勒纺织女工',
        nameEn: 'Petrograd Textile Worker',
        ipa: null,
        roleCn: '合成人物，receiving-end 默认视角。丈夫上了前线、自己每天天不亮去排面包队的平民妇女。1917 年 3 月 8 日（旧 2.23）国际妇女节，她和工友们走出工厂喊「要面包」，点燃了二月革命的第一颗火星——历史的「承受方」突然成了「发动方」',
        roleEn: "A composite character, the receiving-end default lens. A working-class woman whose husband is at the front and who lines up before dawn each day in the bread queue. On International Women's Day, March 8, 1917 (OS Feb 23), she and her coworkers walked out shouting 'Bread!' — lighting the first spark of the February Revolution, the historical 'receiving end' suddenly becoming the one who acts",
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'revolution-1905',
      termCn: '1905 革命（血腥星期日 + 第一个杜马）',
      termEn: 'The 1905 Revolution (Bloody Sunday & the First Duma)',
      standardRef: ['AP World — Unit 7 (Topic 7.3-7.4)', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `这张卡是读懂 1917 年的地基——不知道 1905 年，就不懂「杜马」从哪来，也不懂士兵为什么倒戈。

**血腥星期日（Bloody Sunday），1905 年 1 月 22 日**（旧历 1 月 9 日）
约十多万工人手捧请愿书向冬宫和平游行，卫队朝人群开枪，
死亡人数学界估计从约 200 人到逾千人不等。
沙皇原本被底层民众当成「小父亲」（little father），这一枪打碎了那个形象。
罢工浪潮席卷全国，工人、农民、学生起义从城市蔓延到乡村。

**沙皇的让步——第一个杜马（First Duma）**
压力下，尼古拉二世 1905 年 10 月发布《十月宣言（October Manifesto）》，
成立民选议会**杜马（Duma）**，赋予基本政治权利。
但他保留了解散杜马的权力——第一届开了 73 天就被解散。
杜马共召开四届（1906-1917），始终是个被限制的机构。

考点关键句：1905 年革命 = 血腥星期日 → 全国罢工 → 设杜马；
杜马有名分无实权；这是 1917「双重权力」的历史根源——
12 年后，残缺的杜马变成临时政府骨架，苏维埃成了它的对手。`,
          en: `This card is the foundation for 1917 — without 1905 you won't know where the
"Duma" came from or why soldiers defected.

**Bloody Sunday, January 22, 1905** (OS January 9)
About one hundred thousand workers marched peacefully toward the Winter Palace with
petitions; troops fired into the crowd. Scholars estimate deaths from about 200 to over
one thousand. The Tsar had been seen as a "little father" — a protector; the shots
shattered that image. Strikes swept the country; uprisings spread from cities to villages.

**The Tsar's concession — the First Duma**
Under pressure Nicholas II issued the October Manifesto (OS Oct 17 / NS Oct 30, 1905),
promising an elected legislature — the **Duma** — and basic civil rights.
Critical detail: he kept the right to dissolve it, and used it freely (the First Duma
lasted just 73 days). The Duma met four times total (1906-1917), always constrained.

Key exam sentence: 1905 Revolution = Bloody Sunday → nationwide strikes → Tsar creates
the Duma; the Duma had the name but not the power; this is the root of 1917's "dual
power" — twelve years later that hobbled Duma became the Provisional Government's
skeleton, while the Soviet became its rival.`,
        },
        xiaoweiNote: {
          cn: `老师说这张卡是「1917 年的字幕」——不读 1905，1917 年的很多词你不知道从哪来的。
口诀：血腥星期日（1905.1.22）= 沙皇打碎了「小父亲」的形象，民心开始散；
十月宣言（1905.10.30）= 沙皇给了杜马一个名分，没给实权；
所以 12 年后，那个名存实亡的杜马变成了临时政府，
而苏维埃（工兵代表会议）接过了真实的力量——这就是双重权力的来历。`,
          en: `Teacher said this card is the "subtitle" for 1917 — without 1905, you won't know
where a lot of 1917's vocabulary came from.
Mnemonic: Bloody Sunday (Jan 22, 1905) = the Tsar shattered the "little father" image,
popular loyalty began to fracture; October Manifesto (Oct 30, 1905) = the Tsar gave the
Duma a name but no real power; so twelve years later, that name-only Duma became the
Provisional Government, while the Soviet (worker-soldier council) picked up the real
force — that's where dual power came from.`,
        },
      },
    },

    {
      id: 'february-revolution',
      termCn: '二月革命',
      termEn: 'February Revolution',
      standardRef: ['AP World — Unit 7 (Topic 7.3-7.4)', 'AP World DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `这是这道题第一个必须钉死的考点——别和十月革命混了（混了就丢分）。

**二月革命（February Revolution）** = 1917 年 3 月（旧历 2 月，所以叫「二月」），
一场**多方自发**把沙皇掀翻的革命。它没有一个总指挥，是好几股力量一起压垮了王室：
1. 3 月 8 日（旧 2.23）国际妇女节，彼得格勒纺织女工走出工厂喊「要面包」点了火；
2. 第二天 20 万人罢工，再一天近 40 万人，全城总罢工；
3. 3 月 12 日（旧 2.27）首都驻军**拒绝**朝同胞开枪，反而倒向起义者——这一步决定性；
4. 3 月 15 日（旧 3.2）尼古拉二世在火车上退位，罗曼诺夫王朝结束。

性质关键句：二月革命 = **多方自发**推翻沙皇（女工、士兵、自由派、社会主义者一起），
**没有**一个政党在主导。它打开了一扇「自由」的门，但没人能独占那扇门——
于是马上出现了「双重权力」。

记住历法：名字叫「二月」，按新历其实在**三月**。`,
          en: `This is the first card you must nail down — don't blur it with the October
Revolution (blur them and you lose points).

**February Revolution** = March 1917 (Old Style February, hence "February"), a
**spontaneous, multi-sided** revolution that toppled the Tsar. It had no single commander;
several forces crushed the monarchy together:
1. On March 8 (OS Feb 23), International Women's Day, Petrograd textile workers walked out shouting "Bread!" and lit the fire;
2. The next day 200,000 struck, the day after nearly 400,000 — a general strike across the city;
3. On March 12 (OS Feb 27) the capital garrison **refused** to fire on their own people and turned to the rebels instead — the decisive step;
4. On March 15 (OS March 2) Nicholas II abdicated aboard a train, ending the Romanov dynasty.

Key nature sentence: the February Revolution = a **spontaneous, multi-sided** overthrow of
the Tsar (textile workers, soldiers, liberals, socialists together), with **no** single
party in charge. It opened a door to "freedom," but no one could hold that door alone — so
"dual power" appeared at once.

Remember the calendar: it's called "February," but by New Style it was actually **March**.`,
        },
        xiaoweiNote: {
          cn: `我的防混口诀：二月 = **大家一起**推翻沙皇（自发、多方、三月）；
十月 = **一个党**夺权（布尔什维克、有组织、十一月）。
两场革命，两种性质——千万别合成一句话。`,
          en: `My anti-blur mnemonic: February = **everyone together** overthrows the Tsar
(spontaneous, multi-sided, March); October = **one party** seizes power (the Bolsheviks,
organized, November). Two revolutions, two natures — never collapse them into one sentence.`,
        },
      },
    },

    {
      id: 'october-revolution',
      termCn: '十月革命',
      termEn: 'October Revolution',
      standardRef: ['AP World — Unit 7 (Topic 7.3-7.4)', 'APUSH Period 7', 'AP World DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `第二个必钉考点，和二月革命**永远分开记**（这是中国家长最大的盲区）。

**十月革命（October Revolution）** = 1917 年 11 月 7 日（旧历 10 月 25 日，所以叫「十月」），
**一个组织严密的政党**——布尔什维克——在特定时机的**夺权**。
在 Lenin 和 Trotsky 领导下，红卫队夜里占领桥梁、电报局、车站，最后「拿下」冬宫
（临时政府所在地），第二天宣布权力归苏维埃。

误解陷阱（§10 第 2 条）：
❌「十月革命是几万红卫队浴血强攻冬宫」→
✅ 真实的冬宫之夜**几乎没打仗**——守卫薄弱，进攻方从侧门走进去，伤亡极少。
那个「英雄强攻」的画面，主要来自爱森斯坦 1928 年的电影《十月》（拍的是 1920 年的重演）。

性质对照（必背）：
- 二月 = 多方自发推翻沙皇（三月）；
- 十月 = 一个政党有组织夺权（十一月）。

记住历法：名字叫「十月」，按新历其实在**十一月**。`,
          en: `The second must-nail card — keep it **forever separate** from the February
Revolution (this is the biggest blind spot for Chinese parents).

**October Revolution** = November 7, 1917 (Old Style October 25, hence "October"), a
**seizure of power** by one tightly organized party — the Bolsheviks — at a chosen moment.
Under Lenin and Trotsky, the Red Guards seized the bridges, telegraph office, and stations
by night and finally "took" the Winter Palace (seat of the Provisional Government), declaring
power to the Soviets the next day.

Misconception trap (§10 #2):
❌ "the October Revolution was tens of thousands of Red Guards storming the Winter Palace in
a bloodbath" →
✅ the real night of the Winter Palace had **almost no fighting** — the guard was thin, the
attackers walked in through a side door, casualties were minimal. That "heroic storming"
image comes mainly from Eisenstein's 1928 film "October" (which staged a 1920 reenactment).

Key contrast (memorize):
- February = spontaneous, multi-sided overthrow of the Tsar (March);
- October = an organized party's seizure of power (November).

Remember the calendar: it's called "October," but by New Style it was actually **November**.`,
        },
        xiaoweiNote: {
          cn: `这一格我妈也搞混过——她以为「俄国革命」就是十月那一场。
我现在会一句话纠正：俄国革命有**两场**，二月先把沙皇掀翻，十月布尔什维克才夺权。
还有一个冷知识：电影里强攻冬宫的「名场面」是假的，真事件几乎没打仗。`,
          en: `My mom mixed this up too — she thought "the Russian Revolution" was just the
October one. Now I correct it in one line: there were **two** revolutions; February toppled
the Tsar first, then October was when the Bolsheviks seized power. Fun fact: the film's
"famous storming" of the Winter Palace is fake — the real event had almost no fighting.`,
        },
      },
    },

    {
      id: 'provisional-government',
      termCn: '临时政府',
      termEn: 'Provisional Government',
      standardRef: ['AP World — Unit 7', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**临时政府（Provisional Government）** = 二月革命后、沙皇退位留下的权力真空里，
由自由派、贵族、资产阶级为主组成的「名义上的政府」。

它的根本困境（DBQ 爱考）：它是名义上的政府，但工厂和军队的**实际忠诚**握在
彼得格勒苏维埃手里——这就是「双重权力」。临时政府犯了一个致命判断：
它坚持**继续打一战**，而前线士兵和后方工人最想要的恰恰是**停战**。
它给不了「面包」（饥荒还在）、给不了「土地」（不敢动地主）、给不了「和平」（还在打仗）——
布尔什维克要的三样它一样都给不出。

考点关键句：临时政府 = 二月革命后的自由派政府，因为「继续打仗 + 给不出和平/土地/面包」
而失去人心，最终被十月革命推翻。
对照：它推翻的是沙皇专制，自己又被布尔什维克推翻——夹在两个极端中间，没站稳。`,
          en: `**Provisional Government** = the "nominal government" of mostly liberals, nobles,
and the bourgeoisie that filled the power vacuum left after the February Revolution and the
Tsar's abdication.

Its core dilemma (DBQs love this): it was the government in name, but the **actual loyalty**
of the factories and the army was held by the Petrograd Soviet — this is "dual power." The
Provisional Government made a fatal call: it insisted on **continuing WWI**, while what
frontline soldiers and home-front workers most wanted was to **stop the war**. It couldn't
deliver "bread" (the famine continued), "land" (it dared not touch the landlords), or "peace"
(it kept fighting) — it could give none of the three the Bolsheviks promised.

Key exam sentence: the Provisional Government = the liberal government after the February
Revolution, which lost the people by "continuing the war + failing to deliver peace/land/
bread," and was ultimately overthrown by the October Revolution.
Contrast: it overthrew Tsarist autocracy, then was itself overthrown by the Bolsheviks —
caught between two extremes, it never found its footing.`,
        },
        xiaoweiNote: {
          cn: `Kerensky 那一遍让我看懂临时政府为什么垮：它什么都答应不了，
最要命的是它还在打那场没人想打的仗。口诀：给不出「和平、土地、面包」的政府，撑不住。`,
          en: `Kerensky's lens showed me why the Provisional Government fell: it could promise
nothing, and worst of all it kept fighting a war no one wanted. Mnemonic: a government that
can't deliver "Peace, Land, Bread" can't hold on.`,
        },
      },
    },

    {
      id: 'soviet',
      termCn: '苏维埃',
      termEn: 'Soviet',
      standardRef: ['AP World — Unit 7'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `这个词特别容易被搞错，必须单列。

**苏维埃（Soviet）** 的原意就是「**会议 / 代表会**」——指工人和士兵选出来的代表机构。
1917 年最重要的一个是**彼得格勒苏维埃（Petrograd Soviet）**：它没有正式的政府名分，
却握着工厂和军队的实际忠诚。这就是为什么二月革命后会出现「双重权力」。

误解陷阱（§10 第 6 条）：
❌「『苏维埃』就是『苏联』」→
✅「苏维埃（Soviet）」= 工人士兵选出的代表会议（1917 年就有）；
「苏联（USSR）」= 1922 年才成立的国家。**1917 年还没有「苏联」**，别提前。

考点关键句：Soviet = 工兵代表会议（原意「会议」）；它和「临时政府」并立，
形成「双重权力」；布尔什维克的口号「一切权力归苏维埃」就是要把权力从临时政府那边
搬到苏维埃这边。`,
          en: `This word is especially easy to get wrong, so it gets its own card.

**Soviet** literally means "**council / assembly of delegates**" — the representative body
elected by workers and soldiers. The most important one in 1917 was the **Petrograd
Soviet**: it had no formal government title, yet held the actual loyalty of the factories
and the army. That's why "dual power" appeared after the February Revolution.

Misconception trap (§10 #6):
❌ "'Soviet' is the same as 'the Soviet Union'" →
✅ "Soviet" = the council of worker-and-soldier delegates (existed in 1917); "the Soviet
Union (USSR)" = the state founded only in 1922. **There was no "Soviet Union" in 1917** —
don't jump ahead.

Key exam sentence: Soviet = the council of worker-and-soldier delegates (literally
"council"); it stood alongside the Provisional Government, forming "dual power"; the
Bolshevik slogan "all power to the Soviets" meant moving power from the Provisional
Government over to the Soviets.`,
        },
        xiaoweiNote: {
          cn: `我一开始也把「苏维埃」当成「苏联」，错了。
口诀：苏维埃是「会议」（1917 就有），苏联是「国家」（1922 才有），差五年。`,
          en: `At first I also took "Soviet" to mean "the Soviet Union." Wrong. Mnemonic: a
Soviet is a "council" (already there in 1917), the Soviet Union is a "state" (only in 1922)
— five years apart.`,
        },
      },
    },

    {
      id: 'dual-power',
      termCn: '双重权力',
      termEn: 'dual power',
      standardRef: ['AP World — Unit 7', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**双重权力（dual power）** = 二月革命后到十月革命前那段时间，俄国有**两个**
权力中心同时并立、谁也吃不下谁的局面。

两个中心是：
1. **临时政府** — 自由派、贵族、资产阶级为主，名义上的政府，但管不动工厂和军队；
2. **彼得格勒苏维埃** — 工人和士兵选出的代表会议，掌握着工厂和军队的实际忠诚。

为什么它重要（DBQ 高频）：这是理解「为什么临时政府那么脆弱」的钥匙——
它有政府的名，没政府的实力。一个国家同时有两个「老板」，下命令时大家听谁的？
1917 年那著名的「一号命令」就规定：军队只在苏维埃同意时才执行临时政府的军事命令。
这意味着真正的力量在苏维埃那边。

考点关键句：dual power = 临时政府（有名分）+ 彼得格勒苏维埃（有实力）并立；
这种「权力分裂」让任何一方都治理不了，给了组织严密的布尔什维克可乘之机。`,
          en: `**Dual power** = the situation between the February and October Revolutions in
which Russia had **two** power centers standing side by side, neither able to swallow the
other.

The two centers were:
1. The **Provisional Government** — mostly liberals, nobles, the bourgeoisie, the government
   in name but unable to command the factories and the army;
2. The **Petrograd Soviet** — the council elected by workers and soldiers, holding the actual
   loyalty of the factories and the army.

Why it matters (high-frequency DBQ): this is the key to "why the Provisional Government was
so fragile" — it had the name of a government without its strength. With two "bosses" at
once, whom does everyone obey when orders come? The famous "Order No. 1" of 1917 ruled that
the army would carry out the Provisional Government's military orders only if the Soviet
agreed. That meant the real power lay with the Soviet.

Key exam sentence: dual power = the Provisional Government (the name) and the Petrograd
Soviet (the strength) standing side by side; this "split sovereignty" left neither able to
govern, giving the tightly organized Bolsheviks their opening.`,
        },
        xiaoweiNote: {
          cn: `附录 D 那张「双重权力」对照图我印象很深：左边穿西装的临时政府，
右边工人士兵的苏维埃，中间一条裂缝。口诀：一个有名分、一个有枪——裂缝里长出了布尔什维克。`,
          en: `That "dual power" diagram in Appendix D stuck with me: the suited Provisional
Government on the left, the worker-soldier Soviet on the right, a crack down the middle.
Mnemonic: one has the name, the other has the guns — the Bolsheviks grew out of that crack.`,
        },
      },
    },

    {
      id: 'bolsheviks',
      termCn: '布尔什维克',
      termEn: 'Bolsheviks',
      standardRef: ['AP World — Unit 7', 'APUSH Period 7'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `**布尔什维克（Bolsheviks）** = Lenin 领导的激进派——一个**组织严密、纪律性强**
的职业革命者政党。注意：他们在 1917 大多数时间里并**不是**人数最多的一派
（制宪会议选举里只拿了约四分之一的票），但他们组织最紧、目标最明确、行动最果断。

他们怎么从七月的低谷翻盘（必背时间线）：
1. 4 月 Lenin 回国，喊出「一切权力归苏维埃」+「和平、土地、面包」，戳中所有人最想要的；
2. 7 月「七月事件」受挫，Lenin 逃亡，党看起来要完了；
3. 9 月 Kornilov 兵变，布尔什维克武装起来挡住了他——一下从「捣乱者」变成「保卫革命的人」，声望暴涨；
4. 11 月十月革命夺权。

考点关键句：布尔什维克 = Lenin 领导的激进政党，靠「组织 + 口号（和平·土地·面包）+
时机（挡住 Kornilov）」在 1917 年从少数派一路夺到权。
对照修正派 vs 政变派之争（§9）：他们到底是「真有群众基础」还是「少数人在恰当时机的政变」，
史学界至今在争——这正是 DBQ 让你拆的张力。`,
          en: `**Bolsheviks** = the radical faction led by Lenin — a **tightly organized,
highly disciplined** party of professional revolutionaries. Note: for most of 1917 they were
**not** the largest faction (they won only about a quarter of the vote in the Constituent
Assembly election), but they were the most organized, the clearest in aim, and the most
decisive in action.

How they came back from the July low (memorize the timeline):
1. In April Lenin returned and called "all power to the Soviets" + "Peace, Land, Bread,"
   hitting exactly what everyone wanted most;
2. In July the "July Days" set them back, Lenin fled, the party looked finished;
3. In September the Kornilov coup attempt came, and the Bolsheviks armed themselves to block
   him — turning overnight from "troublemakers" into "defenders of the revolution," their
   prestige surging;
4. In November they seized power in the October Revolution.

Key exam sentence: Bolsheviks = the radical party led by Lenin that rose from a minority to
power across 1917 through "organization + slogan (Peace, Land, Bread) + timing (blocking
Kornilov)."
On the revisionist-vs-coup debate (§9): whether they "truly had a mass base" or were "a
minority's seizure at the right moment" is still argued by historians — exactly the tension
a DBQ asks you to unpack.`,
        },
        xiaoweiNote: {
          cn: `工厂组织者那一遍让我从内部看懂布尔什维克怎么赢：不是人最多，是**组织最紧、行动最快**。
口诀：少数派 + 紧组织 + 对口号 + 抓时机 = 夺权。`,
          en: `The factory organizer's lens showed me from the inside how the Bolsheviks won:
not the most people, but the **tightest organization and fastest action**. Mnemonic: minority
+ tight organization + the right slogan + seized timing = power.`,
        },
      },
    },

    {
      id: 'menshevik-bolshevik-split',
      termCn: '孟什维克 vs 布尔什维克（俄国社会民主工党的分裂）',
      termEn: 'Mensheviks vs Bolsheviks (The RSDLP Split)',
      standardRef: ['AP World — Unit 7 (Topic 7.3)', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**布尔什维克不是凭空来的**——他们和孟什维克原是同一个党（RSDLP）里的两派，
1903 年大会表决后分家。

**核心分歧（必背对照）：**
- **布尔什维克（Bolsheviks，「多数派」，Lenin 领导）**：精干纪律的职业革命者小团体；立即夺权。
- **孟什维克（Mensheviks，「少数派」，Martov 领导）**：开放式大党；先经历民主阶段再谈社会主义。

**名字容易搞反（记这条就好）：**
「布」= 多数派之名，党的策略却走小团体精英路线；
「孟」= 少数派之名，策略却是广开门路。名字和策略都反过来了。

**1917 年的命运：**
孟什维克进了临时政府，随它一起垮掉；
布尔什维克拒绝合作，靠纪律和组织拿下了十月革命。

考点关键句：1903 年 RSDLP 分裂 = 布（小团体/立即夺权）vs 孟（大党/先民主）；
这场分歧决定了 14 年后谁能拿下十月革命。`,
          en: `**The Bolsheviks didn't appear out of nowhere** — they and the Mensheviks were
originally two factions of the same party (RSDLP), splitting after a vote at the 1903
congress.

**Core contrast (memorize):**
- **Bolsheviks ("majority," Lenin)**: tight, disciplined cadre of professional
  revolutionaries; seize power immediately.
- **Mensheviks ("minority," Julius Martov)**: broad open party; go through a democratic
  phase before socialism.

**The names flip — easy to get backwards:**
"Bolshevik" means majority, but their strategy was a small elite cadre.
"Menshevik" means minority, but their strategy was mass broad membership.
Both the names and the strategies are reversed — remembering the flip helps.

**Fates in 1917:**
The Mensheviks joined the Provisional Government and fell with it.
The Bolsheviks refused to cooperate; their discipline and organization carried the
October Revolution.

Key exam sentence: 1903 RSDLP split = Bolsheviks (small cadre / immediate seizure) vs
Mensheviks (broad party / democratic phase first); the split determined, fourteen years
later, who seized power.`,
        },
        xiaoweiNote: {
          cn: `我一开始以为布尔什维克和孟什维克是两个从来不认识的对立党——错了，
他们原来是同一个党里的两派，1903 年表决后才分家的。
记忆口诀：**布（Bol-sheviks）= 大（多数派）= 小团体精英 + 立即夺权**；
**孟（Men-sheviks）= 小（少数派）= 开放大党 + 先走民主**——名字和策略正好都反过来了，这样好记。
1917 年：孟什维克进了临时政府，随它一起倒；布尔什维克拒绝合作，最后夺权。`,
          en: `At first I thought the Bolsheviks and Mensheviks were two parties that had never been
in the same room — wrong. They were originally two factions of one party, parting ways after
a vote in 1903.
Mnemonic: **Bol(sheviks) = "majority" name, but small elite cadre + immediate seizure**;
**Men(sheviks) = "minority" name, but open broad party + democratic phase first** — the
names and strategies are both flipped, which makes it easier to remember.
In 1917: the Mensheviks joined the Provisional Government and fell with it; the Bolsheviks
refused to cooperate and ended up seizing power.`,
        },
      },
    },

    {
      id: 'peace-land-bread',
      termCn: '和平·土地·面包',
      termEn: '"Peace, Land, Bread"',
      standardRef: ['AP World — Unit 7', 'AP World DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `这是全篇最好用的口号考点，AP DBQ 几乎一定会让你分析它为什么有效。

**「和平、土地、面包」（"Peace, Land, Bread"，俄文 Мир, земля, хлеб）** = 布尔什维克
1917 年的核心口号，常和「一切权力归苏维埃」一起喊。

它为什么这么有用（DBQ 直接能用的分析）：它一句话回答了**三种人最痛的三件事**——
1. 前线**士兵**要**和平**（别再打了，一战死了上百万人）；
2. **农民**要**土地**（几百年的渴望，分地主的地）；
3. 城里**工人/妇女**要**面包**（别再天不亮排几小时队还买不到）。

为什么 Kerensky 喊不出这句（关键对照）：临时政府坚持继续打仗，所以它**给不了和平**；
不敢动地主，所以**给不了土地**；饥荒还在，所以**给不了面包**。
谁喊出「停战 + 分地 + 有饭吃」，谁就接住了所有人的渴望。

考点关键句：和平·土地·面包 = 一句话接住士兵/农民/工人三方最痛的诉求；
布尔什维克靠它接住人心，临时政府因为「还在打仗」恰恰一样都给不出。`,
          en: `This is the most usable slogan card in the whole topic; an AP DBQ will almost
certainly ask you to analyze why it worked.

**"Peace, Land, Bread"** (Russian Мир, земля, хлеб) = the Bolsheviks' core slogan in 1917,
often chanted alongside "all power to the Soviets."

Why it was so effective (analysis you can use straight in a DBQ): it answered in one line
**the three sharpest pains of three groups** —
1. Frontline **soldiers** wanted **peace** (stop the war; WWI had killed over a million);
2. **Peasants** wanted **land** (a centuries-old longing — split the landlords' land);
3. City **workers/women** wanted **bread** (no more hours in line before dawn for nothing).

Why Kerensky couldn't chant this (key contrast): the Provisional Government insisted on
continuing the war, so it **couldn't deliver peace**; dared not touch the landlords, so
**couldn't deliver land**; the famine continued, so **couldn't deliver bread**. Whoever
called for "stop the war + split the land + food on the table" caught everyone's longing.

Key exam sentence: Peace, Land, Bread = one line catching the sharpest demands of soldiers/
peasants/workers at once; the Bolsheviks caught the people's hearts with it, while the
Provisional Government — still at war — could deliver none of the three.`,
        },
        xiaoweiNote: {
          cn: `这句口号我背得最熟，因为太精准了——三个词，三种人，三件最痛的事。
口诀：士兵要和平、农民要土地、城里人要面包；Kerensky 还在打仗，所以一样都给不出。`,
          en: `I memorized this slogan best because it's so precise — three words, three groups,
three sharpest pains. Mnemonic: soldiers want peace, peasants want land, city people want
bread; Kerensky kept fighting, so he could deliver none of them.`,
        },
      },
    },

    {
      id: 'april-theses',
      termCn: '四月提纲',
      termEn: 'April Theses',
      standardRef: ['AP World — Unit 7'],
      examFrequency: 'mid',
      storyAnchor: {
        standaloneText: {
          cn: `**四月提纲（April Theses）** = 1917 年 4 月 Lenin 流亡多年后乘德国安排的「封闭列车」
回到彼得格勒芬兰车站，一下车就抛出的纲领。

它的核心三条（必记）：
1. **不支持临时政府**——别和它合作，要把它推翻；
2. **「一切权力归苏维埃」**——权力应该归工兵代表会议，不是自由派政府；
3. **立刻退出战争**——别再打这场没人想打的一战。

这三条浓缩成那句口号：**和平、土地、面包**。它的意义在于：在所有人都还在和临时政府
「合作」的时候，Lenin 第一个公开说「不」，把布尔什维克的方向彻底拨向夺权。

误解陷阱（接 §10 第 3 条）：❌「Lenin 一直在彼得格勒领导革命」→
✅ 二月革命爆发时他还在瑞士流亡，**4 月才回国**发表四月提纲——他不是从头在场的。

考点关键句：四月提纲（1917.4）= Lenin 回国后的纲领，三条 = 不支持临时政府 +
一切权力归苏维埃 + 立刻退战，把布尔什维克明确指向夺权。`,
          en: `**April Theses** = the program Lenin threw out the moment he stepped off the
German-arranged "sealed train" at Petrograd's Finland Station in April 1917, after years in
exile.

Its three core points (memorize):
1. **No support for the Provisional Government** — don't cooperate with it, overthrow it;
2. **"All power to the Soviets"** — power should go to the worker-soldier councils, not the
   liberal government;
3. **Withdraw from the war at once** — stop fighting a WWI no one wanted.

These three compress into the slogan: **Peace, Land, Bread**. Its significance: while
everyone else was still "cooperating" with the Provisional Government, Lenin was the first to
say "no" publicly, swinging the Bolsheviks fully toward seizing power.

Misconception trap (ties to §10 #3): ❌ "Lenin led the revolution in Petrograd from the
start" → ✅ when the February Revolution broke out he was still in Swiss exile and **only
returned in April** to deliver the April Theses — he was not there from the beginning.

Key exam sentence: April Theses (April 1917) = Lenin's program on returning, three points = no
support for the Provisional Government + all power to the Soviets + withdraw from the war at
once, pointing the Bolsheviks clearly toward seizing power.`,
        },
        xiaoweiNote: {
          cn: `我本来也以为 Lenin 从头就在场，错了——二月革命时他还在瑞士。
口诀：四月提纲 = Lenin 4 月「下车第一句话」，三条全指向「推翻临时政府、夺权、退战」。`,
          en: `I also assumed Lenin was there from the start — wrong; during the February
Revolution he was still in Switzerland. Mnemonic: the April Theses = Lenin's "first words off
the train" in April, all three pointing to "overthrow the Provisional Government, seize power,
quit the war."`,
        },
      },
    },

    {
      id: 'abdication-nicholas-ii',
      termCn: '尼古拉二世退位',
      termEn: 'Abdication of Nicholas II',
      standardRef: ['AP World — Unit 7', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**尼古拉二世退位（abdication of Nicholas II）** = 1917 年 3 月 15 日（旧历 3 月 2 日），
统治了 300 年的罗曼诺夫王朝的终点。

它怎么发生的（容易被误解）：不是有人攻进皇宫把沙皇杀了。二月革命几天里，
首都驻军倒戈、几乎所有前线将领都劝他退位——在 Pskov 的一节火车车厢里，
尼古拉二世签字退位，连儿子的位也一起退掉。一个 300 年的王朝，结束在一份签字文件上。

为什么他先把自己逼到这一步（接舞台 L3）：1915 年他做了致命决定——**亲自去前线指挥军队**，
于是此后每一场败仗都直接记在他头上；同时首都丢给了皇后 Alexandra 和「神医」Rasputin，
进一步掏空了王室威信。

误解陷阱（§10 第 7 条）：❌「沙皇是被攻进皇宫杀掉的」→
✅ 他是 1917 年 3 月在火车上**被将领们劝退位**的；他和家人**被处决**是 1918 年内战期间的
**另一回事**，别和退位混成一件事。

考点关键句：1917.3.15 退位 = 多方自发的二月革命的结果，专制的崩塌很安静（火车上、签字）；
处决（1918）是后来内战里的另一件事。`,
          en: `**Abdication of Nicholas II** = March 15, 1917 (Old Style March 2), the end of the
300-year Romanov dynasty.

How it happened (easily misunderstood): no one stormed a palace and killed the Tsar. Over a
few days of the February Revolution the capital garrison defected and nearly all frontline
generals urged him to step down — and in a railway carriage at Pskov, Nicholas II signed his
abdication, giving up his son's claim too. A 300-year dynasty ended on a signed document.

Why he had cornered himself first (ties to the stage, L3): in 1915 he made a fatal
decision — to **take personal command at the front** — so every defeat afterward was charged
directly to him; meanwhile the capital was left to Empress Alexandra and the "holy man"
Rasputin, further hollowing out the monarchy's prestige.

Misconception trap (§10 #7): ❌ "the Tsar was killed when a palace was stormed" → ✅ he
**abdicated, persuaded by his generals**, on a train in March 1917; he and his family were
**executed** during the civil war in 1918, a **separate matter** — don't merge it with the
abdication.

Key exam sentence: the March 15, 1917 abdication = the outcome of the spontaneous, multi-sided
February Revolution, the autocracy's collapse quiet (on a train, by signature); the execution
(1918) is a separate event in the later civil war.`,
        },
        xiaoweiNote: {
          cn: `最让我意外的是「专制崩塌得很安静」——没有强攻皇宫，就是火车上签个字。
口诀：退位（1917 火车上）≠ 处决（1918 内战里），两件事，差一年。`,
          en: `What surprised me most is that "the autocracy collapsed quietly" — no storming of
a palace, just a signature on a train. Mnemonic: abdication (1917, on a train) ≠ execution
(1918, in the civil war) — two events, a year apart.`,
        },
      },
    },

    {
      id: 'treaty-brest-litovsk',
      termCn: '布列斯特-立托夫斯克和约',
      termEn: 'Treaty of Brest-Litovsk',
      standardRef: ['AP World — Unit 7', 'APUSH Period 7'],
      examFrequency: 'mid',
      storyAnchor: {
        standaloneText: {
          cn: `**《布列斯特-立托夫斯克和约》（Treaty of Brest-Litovsk）** = 1918 年 3 月 3 日，
新的布尔什维克政权为了兑现「和平」，跟德国签的一份极其屈辱的和约，由 Trotsky 一方谈判。

它的代价（必记）：俄国割掉大片土地——约占帝国人口三分之一、工业的一多半，
换来退出一战。这是布尔什维克兑现「和平」承诺的方式，但代价巨大。

反讽（接 §4）：喊着「和平」的革命，靠割让巨大领土才换来退出**外战**——
可紧接着又掉进一场打了四年的**内战**。「和平」这两个字，兑现得既真实又苦涩。

考点关键句：布列斯特和约（1918.3）= 布尔什维克兑现「和平」口号、退出一战的方式，
代价是割让约三分之一人口、一多半工业的土地；退出外战却换来内战。`,
          en: `**Treaty of Brest-Litovsk** = on March 3, 1918, to make good on "peace," the new
Bolshevik regime signed an extremely humiliating treaty with Germany, negotiated on the
Russian side by Trotsky.

Its cost (memorize): Russia ceded vast territory — roughly a third of the empire's
population and more than half its industry — in exchange for leaving WWI. This was how the
Bolsheviks delivered the "peace" promise, but at enormous cost.

Irony (ties to §4): a revolution chanting "peace" only bought its way out of the **external
war** by ceding huge territory — and then fell straight into a four-year **civil war**. The
word "peace" was cashed out both really and bitterly.

Key exam sentence: Treaty of Brest-Litovsk (March 1918) = how the Bolsheviks delivered the
"peace" slogan and left WWI, at the cost of ceding land holding about a third of the
population and over half the industry; leaving the external war bought a civil war instead.`,
        },
        xiaoweiNote: {
          cn: `我抓的反讽是：为了「和平」割掉那么多地，结果退出外战又掉进内战。
口诀：布列斯特和约兑现了「和平」，但「和平」很快变成了内战。`,
          en: `The irony I caught: ceding so much land for "peace," only to leave the external
war and fall into civil war. Mnemonic: Brest-Litovsk delivered "peace," but that "peace" soon
turned into civil war.`,
        },
      },
    },

    {
      id: 'civil-war-reds-whites',
      termCn: '俄国内战（红军 vs 白军）',
      termEn: 'Russian Civil War (Reds vs Whites)',
      standardRef: ['AP World — Unit 7', 'APUSH Period 7', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `这是全篇的落点，也是「解放」叙事和「专政」叙事真正撞在一起的地方。

**俄国内战（1918-1922，红军 vs 白军）** = 退出外战后紧接着的一场内战：
- **红军（Reds）** = 布尔什维克的军队；
- **白军（Whites）** = 沙皇派、自由派、各种反布尔什维克力量的**松散联合**（不是铁板一块）；
- 外国（包括英、法、美、日）还派兵干涉。

打了四年，红军赢了，但代价是几百万人死于战斗、镇压和大饥荒。苏维埃国家在这场血里**定型**。

为什么它对 Rule 0 这么关键（必须两面写）：就在内战前后，1918 年 1 月，
俄国唯一一次自由选出的全国议会——**制宪会议**（布尔什维克只占约四分之一）——
只开了一天（约 13 小时）就被强行解散。「为了人民」推翻沙皇是打开自由，
「为了人民」解散议会是关掉自由——同一句话，两个相反方向，都发生在这一两年里。

考点关键句：内战（1918-22）= 红军（布尔什维克）VS 白军（反布尔什维克松散联合）+ 外国干涉；
红军赢，但几百万人死；同期制宪会议被解散——「解放」与「专政」在这里同体。`,
          en: `This is where the whole topic lands, and where the "liberation" narrative and the
"dictatorship" narrative truly collide.

**Russian Civil War (1918-1922, Reds vs Whites)** = a civil war right after leaving the
external war:
- **Reds** = the Bolsheviks' army;
- **Whites** = a **loose coalition** of Tsarists, liberals, and assorted anti-Bolshevik forces
  (not a solid bloc);
- foreign powers (including Britain, France, the US, Japan) also sent troops to intervene.

It lasted four years; the Reds won, but at the cost of millions dead in fighting, repression,
and a great famine. The Soviet state was **set in this blood**.

Why it's so key for Rule 0 (you must write both faces): right around the civil war, in January
1918, Russia's only freely elected national assembly — the **Constituent Assembly** (where the
Bolsheviks held only about a quarter) — was forcibly dissolved after meeting for a single day
(about 13 hours). "For the people" overthrowing the Tsar opened freedom; "for the people"
dissolving the assembly shut freedom down — the same phrase, two opposite directions, both in
these one or two years.

Key exam sentence: Civil War (1918-22) = Reds (Bolsheviks) vs Whites (loose anti-Bolshevik
coalition) + foreign intervention; the Reds won, but millions died; in the same period the
Constituent Assembly was dissolved — "liberation" and "dictatorship" are one and the same here.`,
        },
        xiaoweiNote: {
          cn: `制宪会议「开一天就被解散」这件事我印象最深——俄国唯一一次自由选举，13 小时就没了。
口诀：红军赢了内战，但同一段时间里，那扇刚打开的「自由」的门又被关上了。`,
          en: `The Constituent Assembly being "dissolved after one day" stuck with me most —
Russia's only free election, gone in 13 hours. Mnemonic: the Reds won the civil war, but in the
same stretch, the door of "freedom" that had just opened was shut again.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `点燃二月革命的，是一群只想要一块面包的纺织女工——她们没读过任何革命理论，
只是受够了天不亮排几小时队还买不到面包。一场改变世界的革命，
真的可以从「我家孩子没饭吃」这么具体的事开始吗？

理念和饥饿，到底哪个更能推动历史？用 1917 年的具体证据支持你的看法。`,
      en: `What lit the February Revolution was a group of textile workers who just wanted a
loaf of bread — they'd read no revolutionary theory, they'd simply had enough of lining up for
hours before dawn and still going home empty-handed. Can a revolution that changes the world
really begin from something as concrete as "my child has nothing to eat"?

Which drives history more — ideas, or hunger? Support your view with specific evidence from
1917.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- 「饥饿先于理念」的证据：那天街头喊得最多的不是「打倒沙皇」，就是「面包」；反沙皇、反战的口号是后来才盖上去的。
- 「理念也重要」的证据：四月提纲、「和平·土地·面包」这些口号，把零散的不满组织成了方向。
高分写法：承认两边都有道理，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**,
not which side you pick.
- Evidence for "hunger before ideas": the loudest cry on the street that day wasn't "down with
  the Tsar," it was "Bread!"; the anti-Tsar, anti-war slogans were layered on later.
- Evidence for "ideas matter too": slogans like the April Theses and "Peace, Land, Bread"
  organized scattered grievances into a direction.
High-scoring move: acknowledge both have a point, then explain why you lean one way — that's
complexity.`,
      conceptsActivated: ['february-revolution', 'peace-land-bread'],
    },
    {
      id: 'q2',
      cn: `俄国革命其实是**两场**：三月的二月革命（多方自发推翻沙皇）和十一月的十月革命
（布尔什维克一个党夺权）。中国课纲常常只讲后一场、把两者合成一句话。

把这两场革命分开看，你觉得它们的「性质」差在哪里？如果只记住十月、忘掉二月，
你对「这一年到底发生了什么」会漏掉哪些关键的东西？用两场革命的具体证据论证。`,
      en: `The Russian Revolution was really **two**: the February Revolution in March (a
spontaneous, multi-sided overthrow of the Tsar) and the October Revolution in November (one
party, the Bolsheviks, seizing power). Chinese curricula often tell only the second and collapse
the two into one sentence.

Looking at the two revolutions separately, how do their "natures" differ? If you remember only
October and forget February, what key things about "what actually happened this year" would you
miss? Argue with specific evidence from both revolutions.`,
      hintCn: `提示：这题考的就是「别把两场混成一场」这个高频考点（§7、§10 第 1 条）。
- 二月的性质：没有总指挥，是女工、士兵、自由派、社会主义者一起自发把沙皇掀翻。
- 十月的性质：一个组织严密的政党在特定时机夺权——所以才会有「政变 vs 群众革命」的争论（§9）。
- 漏掉二月会漏掉：临时政府、双重权力、克伦斯基这个中间人——也就漏掉了「自由那扇门曾经打开过」。
别下最终道德结论（Rule 0），把两场的差别摆清楚就好。`,
      hintEn: `Hint: this tests the high-frequency point "don't blur the two into one" (§7, §10
#1).
- February's nature: no commander; textile workers, soldiers, liberals, and socialists toppled
  the Tsar together, spontaneously.
- October's nature: one tightly organized party seizing power at a chosen moment — hence the
  "coup vs. mass revolution" debate (§9).
- Forgetting February loses the Provisional Government, dual power, and Kerensky the mediator —
  losing the fact that "the door of freedom was once open."
Don't issue a final moral verdict (Rule 0); just lay out the difference between the two clearly.`,
      conceptsActivated: ['february-revolution', 'october-revolution'],
    },
    {
      id: 'q3',
      cn: `同样一句「为了人民」，在 1917 年被用来**推翻**沙皇（打开自由），
又在 1918 年 1 月被用来**解散**制宪会议（关掉自由）——俄国唯一一次自由选出的全国议会，
开了一天就没了。这场革命既是几百万人真实的解放渴望，也长出了一个会镇压异见的国家。

一句口号怎么能同时干这两件相反的事？如果一件事的开端是解放、结局是压制，
你会怎么看待它——还是说，它本来就不该被一句话评价完？用具体证据说明你的判断。`,
      en: `The same phrase "for the people" was used in 1917 to **overthrow** the Tsar (opening
freedom), and in January 1918 to **dissolve** the Constituent Assembly (shutting freedom down) —
Russia's only freely elected national assembly, gone after a single day. This revolution was
both millions of people's genuine longing for liberation and the seed of a state that would
crush dissent.

How can one phrase do these two opposite things at once? If something begins in liberation and
ends in repression, how do you regard it — or should it not be summed up in a single verdict at
all? Support your judgment with specific evidence.`,
      hintCn: `提示：好的 DBQ 答案会**同时持有两件事**，而不是二选一（这正是 §9 史学界争的）。
- 「解放」一边：女工点火、士兵倒戈、沙皇退位——几百万普通人真实的、自发的行动。
- 「专政」一边：制宪会议（布尔什维克只占约四分之一）开一天被解散、随后的内战与镇压。
关键张力：同样一句「为了人民」，谁来定义「人民」？布尔什维克说苏维埃才算「真正的人民」，议会不算。
不要替历史下最终道德结论（Rule 0）；AP 要的是你能不能把两面都摆上桌，再谈你的权衡。`,
      hintEn: `Hint: a strong DBQ answer **holds two things at once** rather than choosing one
(this is exactly what historians argue over in §9).
- The "liberation" side: the textile workers lighting it, soldiers defecting, the Tsar
  abdicating — millions of ordinary people's real, spontaneous action.
- The "dictatorship" side: the Constituent Assembly (Bolsheviks held only about a quarter)
  dissolved after a day, then the civil war and repression.
Key tension: with the same phrase "for the people," who defines "the people"? The Bolsheviks
said the Soviets were the "real people" and the assembly was not.
Don't hand history a final moral verdict (Rule 0); AP wants you to put both faces on the table
and then discuss your weighing of them.`,
      conceptsActivated: ['october-revolution', 'civil-war-reds-whites'],
    },
    {
      id: 'q4',
      cn: `Kerensky 想要一条「有自由、没沙皇、也没有一党专政」的中间道路。
他同时坐在临时政府和彼得格勒苏维埃两边，本来像座能把两边粘住的桥；
可他坚持继续打那场没人想打的一战，结果旧秩序嫌他太左、布尔什维克嫌他太右，两头不讨好、全盘皆输。

在一个所有人都被逼到极端的时刻，「温和的中间派」还有没有活路？
如果你是他，你会继续打那场仗吗？用 Kerensky 的具体选择支持你的看法。`,
      en: `Kerensky wanted a middle road — "freedom, no Tsar, no one-party dictatorship." He sat
on both the Provisional Government and the Petrograd Soviet at once, and at first looked like a
bridge that could hold both sides together; but he insisted on continuing a WWI no one wanted,
and so the old order thought him too left and the Bolsheviks too right — disliked by both, he
lost everything.

In a moment when everyone was pushed to extremes, is there any room for a "moderate centrist"?
If you were him, would you have kept fighting that war? Support your view with Kerensky's
specific choices.`,
      hintCn: `提示：先把 Kerensky 的处境摆全（§3、§11 第 2 条）——他不是单纯软弱，他是被结构夹死的。
「中间派注定输」一边：他坚持打仗（1917 年 6 月还发动惨败攻势），而所有人最想要的是停战；
他先召 Kornilov 想压左翼，又反过来求布尔什维克挡 Kornilov——两头都得罪。
「中间派也是一种勇气」一边：在所有人都奔向极端时，他还想守住「自由 + 议会 + 不专政」的可能。
进阶：你身边有没有「想让所有人都满意」反而两头不讨好的处境？那是软弱还是勇气？别下最终道德结论（Rule 0）。`,
      hintEn: `Hint: first lay out Kerensky's full situation (§3, §11 #2) — he wasn't simply weak,
he was structurally trapped.
The "centrist doomed to lose" side: he kept fighting (launching a disastrous offensive in June
1917) when everyone most wanted to stop; he first summoned Kornilov to crush the left, then
turned to the Bolsheviks to block Kornilov — alienating both sides.
The "centrism as a kind of courage" side: while everyone raced to extremes, he still tried to
hold open the possibility of "freedom + a parliament + no dictatorship."
Going deeper: have you ever been in a spot where "trying to please everyone" left you disliked by
both sides? Is that weakness or courage? Don't issue a final moral verdict (Rule 0).`,
      conceptsActivated: ['provisional-government', 'dual-power', 'bolsheviks'],
    },
    {
      id: 'q5',
      cn: `十月革命「一声炮响」直接影响了 1919 年的五四运动、影响了 1921 年中国共产党的成立、
影响了整个 20 世纪的中国。一个发生在俄国的事件，怎么会成为另一个国家历史的源头之一？

请用这条因果链的具体环节（巴黎和会 → 五四 → 知识分子转向马克思主义 → 1921 建党）说明，
一个外国革命的「影响」是怎么一步步传到中国的？这对你理解「自己的历史从哪来」有什么启发？`,
      en: `The October Revolution "fired a shot" that directly shaped the May Fourth Movement of
1919, the founding of the Chinese Communist Party in 1921, and the whole of twentieth-century
China. How could an event in Russia become one of the sources of another country's history?

Using the concrete links of this causal chain (the Paris Peace Conference → May Fourth →
intellectuals turning to Marxism → the 1921 founding), explain how a foreign revolution's
"influence" traveled step by step into China. What does that do for your understanding of "where
your own history comes from"?`,
      hintCn: `提示：这是整门课最重要的中国桥之一（§8），但有一个 Rule 0 的关键边界要先讲清。
- 因果链的环节：一战后巴黎和会把山东权益给了日本 → 1919.5.4 北京学生上街 → 五四激发的青年里一批人转向马克思主义（李大钊 1919 年发表《我的马克思主义观》）→ 1921.7 中国共产党成立。
- 为什么是十月革命推了一把：它第一次把一个被压迫者「翻身」的现实样板，摆在中国知识分子眼前。
- **Rule 0 边界（必读）**：说「十月革命塑造了现代中国」是在**描述一条可确证的历史影响链**，
  这**不等于**在为这场革命的最终结果（无论你怎么评价）背书。**描述影响 ≠ 认可结果**。
对一个中美双语家庭的孩子，这是「外国历史」突然变成「自己历史源头」的时刻——但你评价它时，仍然两面都要看。`,
      hintEn: `Hint: this is one of the most important China bridges in the whole course (§8), but
there's a key Rule 0 boundary to state first.
- The chain's links: after WWI the Paris Peace Conference handed Shandong rights to Japan → on
  May 4, 1919 Beijing students took to the streets → among the youth stirred by May Fourth, some
  turned to Marxism (Li Dazhao published "My Marxist Views" in 1919) → in July 1921 the Chinese
  Communist Party was founded.
- Why the October Revolution gave the push: it placed, for the first time, a real-world model of
  the oppressed "turning over" before Chinese intellectuals' eyes.
- **Rule 0 boundary (read this):** saying "the October Revolution shaped modern China" is
  **describing a verifiable chain of historical influence** — it is **not** an endorsement of the
  revolution's eventual outcomes (however you judge them). **Describing influence ≠ approving
  outcomes.**
For a child in a Chinese-American bilingual family, this is the moment "foreign history" suddenly
becomes "the source of your own history" — but when you judge it, still hold both sides.`,
      conceptsActivated: ['october-revolution', 'bolsheviks'],
    },
  ],
};

export default notebook;
