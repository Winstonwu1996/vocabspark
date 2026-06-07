// ─── 同伴笔记本架构 v1 · The Civil War 1861-1865 ──────────────────
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
//   - storyboard 提供情感锚点 (Lincoln / Lee / 一个北军黑人士兵 USCT 三条线)
//   - notebook 提供考点闭环 (Vicksburg / total war / 邦联与州权 framing 等补完课纲)
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 5 (1844-1877) Topic 5.8-5.10 (内战原因 / Emancipation / 战时总统权力)
//   - CA HSS 8.10 (内战与重建)
//   - AP US Government (总统作为 commander in chief 的战时权力 + 13/14/15 修正案地基)
//
// Rule 0 中立 (内战起因 framing)：奴隶制是根本原因、州权是其包装/Lost Cause 战后建构——
//   这是当代史学压倒性共识，不写成"哪边都对"的伪平衡；Lincoln 不写成纯解放者神话、
//   Lee 不写成纯恶人。事实对账本 civil-war-1861-factledger.md。
//
// 事实修正已应用 (来自 factledger 红旗)：
//   - USCT 约 4 万"死于这场战争（多数死于疾病）"，不写"战死"(#27)
//   - Lincoln "不怀恶意，怀着仁慈"出自 1865.3.4 第二任就职演说 (投降前一个多月)，不写在投降后(#20)
//
// schemaVersion: 1 · notebookVersion: civil-war-1861-v1

export var notebook = {
  topicId: 'civil-war-1861',
  topicNameCn: '南北战争',
  topicNameEn: 'The Civil War 1861-1865',
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
    cn: `今天历史课开始上南北战争（1861-1865）。老师在黑板上写了一行字：
"A house divided against itself cannot stand."（一座分裂的房子立不住。）她说这是 Lincoln 说的。

然后她发给我们一张单子，上面是这些人和词。

人：Abraham Lincoln（林肯）、Robert E. Lee（李）、Ulysses S. Grant（格兰特）。
还有一类没名字的人——加入北军的黑人士兵（USCT）。

词：secession（脱离）、the Union vs the Confederacy（联邦 vs 邦联）、
Emancipation Proclamation（解放宣言）、Gettysburg（葛底斯堡）、
total war（总体战）、13th Amendment（第 13 修正案）。

老师特别强调一件事，我抄在了笔记本第一页：
"考试最爱挖一个坑，就是问'内战到底为什么打'。标准答案是这样：根本原因是奴隶制。说得更具体，是奴隶制能不能往西边的新地方扩。'州权'只是给它套的一层包装。别被'这只是一场州权之争'这种说法带跑。"

我先把这些记下来。等下我要读三个故事——Lincoln 一个、Lee 一个、还有一个黑人士兵。
读完我再回来对照这张单子，看看每一个我是不是都能讲清楚。`,
    en: `Today we started the Civil War (1861-1865) in history class. My teacher wrote one line
on the board: "A house divided against itself cannot stand." She said it was Lincoln's.

Then she gave us a sheet with these people and terms:

People: Abraham Lincoln, Robert E. Lee, Ulysses S. Grant, and a group with no name,
the black soldiers who joined the Union army (the USCT).

Terms: secession, the Union vs the Confederacy, Emancipation Proclamation,
Gettysburg, total war, 13th Amendment.

Teacher especially stressed one thing, which I copied onto the first page of my notebook:
"The trap exams love most is asking 'what was the Civil War really fought over.' The standard
answer is: the root cause was slavery (specifically, whether slavery could spread west),
and 'states' rights' was the wrapping on it. Don't get pulled off course by 'it was just a
states' rights dispute.'"

Let me write these down. After I read the three stories (Lincoln, Lee, and a black soldier),
I'll come back and check whether I can explain each one.`,
    keyTerms: [
      { cn: '脱离（南方各州退出联邦）', en: 'secession' },
      { cn: '联邦 / 邦联', en: 'the Union / the Confederacy' },
      { cn: '解放宣言', en: 'Emancipation Proclamation' },
      { cn: '边境州（蓄奴但未脱离）', en: 'border states' },
      { cn: '合众国有色人种部队', en: 'United States Colored Troops (USCT)' },
      { cn: '总体战', en: 'total war' },
      { cn: '总司令（总统战时权力来源）', en: 'commander in chief' },
      { cn: '第 13 修正案（永久废奴）', en: '13th Amendment' },
      { cn: '失败的伟业（淡化奴隶制的战后神话）', en: 'Lost Cause' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '亚伯拉罕·林肯',
        nameEn: 'Abraham Lincoln',
        ipa: '/ˈeɪbrəhæm ˈlɪŋkən/',
        roleCn: '美国第 16 任总统，为保联邦而战、以战略转向解放奴隶；1865 遇刺',
        roleEn: '16th US President; fought to save the Union, turned strategically to emancipation; assassinated 1865',
        mustKnow: true,
        audioKey: 'abraham-lincoln',
      },
      {
        nameCn: '罗伯特·E·李',
        nameEn: 'Robert E. Lee',
        ipa: '/ˈrɒbərt iː liː/',
        roleCn: '南军总司令；反对脱离却因效忠弗吉尼亚领南军的悲剧人物',
        roleEn: 'Confederate commander; opposed secession yet led the South out of loyalty to Virginia',
        mustKnow: true,
        audioKey: 'robert-e-lee',
      },
      {
        nameCn: '尤利西斯·S·格兰特',
        nameEn: 'Ulysses S. Grant',
        ipa: '/juːˈlɪsiːz ɛs ɡrænt/',
        roleCn: '北军总司令，1865 在 Appomattox 受降；总体战策略的执行者',
        roleEn: 'Union general-in-chief; received Lee\'s surrender at Appomattox 1865; executor of total war',
        mustKnow: true,
        audioKey: 'ulysses-grant',
      },
      {
        nameCn: '威廉·T·谢尔曼',
        nameEn: 'William T. Sherman',
        ipa: '/ˈwɪljəm ˈʃɜːrmən/',
        roleCn: '北军将领；1864「向海洋进军」从亚特兰大一路烧到萨凡纳，是总体战最有名的执行者',
        roleEn: 'Union general; his 1864 "March to the Sea" burned a path from Atlanta to Savannah, the most famous example of total war',
        mustKnow: true,
        audioKey: null,
      },
      {
        nameCn: '一个北军黑人士兵（第 54 麻省团 composite）',
        nameEn: 'A USCT Soldier (54th Mass.)',
        ipa: null,
        roleCn: '18 万黑人北军士兵之一（半合成，基于第 54 麻省团）；同工不同酬、被俘即处死风险，把"自由"从纸变真',
        roleEn: 'One of 180,000 black Union soldiers (composite, based on 54th Massachusetts); unequal pay, death-on-capture risk, turned paper "freedom" into reality',
        mustKnow: true,
        audioKey: null,
      },
      {
        nameCn: '弗雷德里克·道格拉斯',
        nameEn: 'Frederick Douglass',
        ipa: '/ˈfrɛdrɪk ˈdʌɡləs/',
        roleCn: '前被奴役者、废奴运动最重要的黑人领袖；亲身经历使其成为奴隶制最有力的道德控诉者；多次会见 Lincoln 施压，主张黑人参军并争取完整公民权',
        roleEn: 'Formerly enslaved man and the most prominent Black voice in the abolitionist movement; his lived experience made him the most powerful moral indictment of slavery; met Lincoln multiple times to press for emancipation and full Black citizenship, and championed Black enlistment',
        mustKnow: true,
        audioKey: null,
      },
      {
        nameCn: '霍勒斯·格里利',
        nameEn: 'Horace Greeley',
        ipa: '/ˈhɒrəs ˈɡriːli/',
        roleCn: '北方著名报人，1862 公开信逼 Lincoln 解放奴隶（Lincoln 回信"自由是工具"出处）',
        roleEn: 'Northern newspaperman whose 1862 open letter pressed Lincoln on emancipation',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '罗伯特·古尔德·肖',
        nameEn: 'Robert Gould Shaw',
        ipa: '/ˈrɒbərt ɡuːld ʃɔː/',
        roleCn: '第 54 麻省团白人指挥官，阵亡于 Fort Wagner',
        roleEn: 'White colonel of the 54th Massachusetts, killed at Fort Wagner',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'civil-war-causes',
      termCn: '内战起因（奴隶制 vs 州权 framing）',
      termEn: 'Causes of the Civil War (Slavery vs States\' Rights Framing)',
      defCn: '南北战争打起来的根本原因是奴隶制——具体说，是"奴隶制能不能往西边的新地方扩"这场争了几十年的架。南方说他们争的是"州自己做主的权利"，但他们要的那个权利就是蓄奴的权利，所以"州权"只是奴隶制外面的一层包装。',
      defEn: 'The root cause of the Civil War was slavery — specifically the decades-long fight over whether slavery could spread west into new states. The South said it was fighting for "states\' rights," but the specific right at stake was the right to hold enslaved people, so "states\' rights" was just a wrapping around slavery.',
      standardRef: ['APUSH Period 5 / Topic 5.8', 'CA HSS 8.10'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'lincoln',
        nodeIds: ['lin-n1', 'lin-n2', 'lin-n3'],
        mentionedIn: [
          { lens: 'robert-e-lee', nodeId: 'lee-n3', context: 'Lee 嘴上说奴隶制是祸害、手上却维持它——"体面南方人"的典型矛盾' },
          { lens: 'robert-e-lee', nodeId: 'lee-n10', context: 'Lost Cause 神话把"奴隶制"从起因里抹掉、换成"州权"' },
        ],
        xiaoweiNote: {
          cn: `这就是老师说的"最爱挖的坑"。

林肯那条故事线讲得最清楚。南北吵了几十年，可吵的核心**不是**"要不要现在就废奴"。真正吵的是**"奴隶制能不能往西边的新地方扩"**。为什么这个这么要紧？每加进来一个新州，要是它准蓄奴，南方在国会就多一票；要是它禁奴，北方就多一票。所以一个新州准不准蓄奴，直接决定了国会里谁说了算。

1860 年 Lincoln 当选，南方更慌了。在南方眼里，他就是个"反对奴隶制往西扩"的总统。南方一看算盘打不下去了，干脆退出。

那"州权"又是怎么回事？老师给的标准说法是这样：南方嘴上说"我们争的是州自己做主的权利"。可你追问下去，他们具体争的那个"权利"，就是"蓄奴的权利"。所以**根本原因是奴隶制，"州权"只是它外面套的一层衣服**。这不是"哪边都有道理"，这是今天历史学家几乎一致同意的结论。

Lee 那条故事线还藏了一个考点。打完仗，南方人把"奴隶制"从故事里悄悄抹掉，改口说他们当年是"为州权而战"。这套被改写过的说法有个名字，叫 **Lost Cause（失败的伟业）**。AP 经常拿它当 DBQ 材料，问你"人们为什么要回头去重写一场战争的起因"。

考点要点（记三句）：
1. 内战的**根本原因是奴隶制**，具体是"奴隶制能不能往西扩"这场争。
2. "州权"只是给奴隶制套的**包装**。
3. **Lost Cause** 是打完仗后，南方为自己的失败找的好听说法。`,
          en: `This is the "trap exams love most" that my teacher warned us about.

Lincoln's story line makes it clearest. The North and South argued for decades, but the core was **not** "should we end slavery now." It was **"can slavery spread west into the new states."** Why did that matter so much? Every new state added a vote in Congress: if it allowed slavery, the South gained a vote; if it banned slavery, the North gained one. So a new state's slave-or-free status decided who controlled Congress.

When Lincoln was elected in 1860, the South panicked. They saw him as a president who was "against the spread of slavery." Feeling they had run out of room, the Southern states left.

So what about "states' rights"? The standard answer: the South said "we're fighting for each state's right to decide for itself." But push on it, and the specific right they were fighting for was the right to hold enslaved people. So **the root cause was slavery; "states' rights" was just the coat it wore.** This isn't "both sides have a point" — it's what almost all historians today agree on.

Lee's story line hides another exam point. After the war, the South quietly erased slavery from the story and started saying they had "fought for states' rights." That rewritten version has a name: the **Lost Cause.** AP often uses it as DBQ material and asks "why do people go back and rewrite the cause of a war?"

Remember three things:
1. The Civil War's **root cause was slavery** — specifically the fight over whether it could spread west.
2. "States' rights" was just the **wrapping** around slavery.
3. The **Lost Cause** was the nicer story the South made up after losing.`,
        },
      },
    },

    {
      id: 'confederacy-secession',
      termCn: '脱离与邦联（联邦 vs 邦联 / 边境州）',
      termEn: 'Secession & the Confederacy (Union vs Confederacy / Border States)',
      defCn: '脱离（secession）= 南方各州退出美国、另建一个国家这个动作。它们建的那个国家叫邦联（the Confederacy），1861 年由退出的南方各州组成、共 11 个州；留下来的北方各州这一边叫联邦（the Union）。边境州（border states）则是肯塔基、马里兰、密苏里、特拉华这四个"自己蓄奴、却没跟着退出"的州。',
      defEn: 'Secession was the act of Southern states leaving the United States to form a separate country. That country was the Confederacy, made up of the eleven Southern states that seceded in 1861; the Northern states that stayed formed the Union. The border states were four slaveholding states (Kentucky, Maryland, Missouri, Delaware) that held slaves but did not secede.',
      standardRef: ['APUSH Period 5 / Topic 5.8', 'CA HSS 8.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'lincoln', nodeId: 'lin-n1', context: 'Lincoln 就任时七个南方州已脱离、自立一个国家' },
          { lens: 'lincoln', nodeId: 'lin-n3', context: '蓄奴边境州（肯塔基、马里兰）没脱离，是 Lincoln 战略命门' },
        ],
      },
      standaloneText: {
        cn: `这几个词在故事里一直冒出来，可故事没专门停下来给它们下定义，我整理在这。

**先说脱离。** 南方有些州不想再待在美国里了，要"退出"，自己另外建一个国家。这个动作就叫脱离（secession）。1860 年 Lincoln 当选后，南卡罗来纳第一个走。到 1861 年 2 月，已经有七个州退出了，它们凑在一起建了个新国家。这个新国家叫邦联（the Confederacy，全名 Confederate States of America）。后来又陆陆续续加进来几个，一共 11 个州。

**再说联邦和邦联这两边是谁。**
- 联邦（the Union）= 北方各州，加上那些没退出、留下来的州。这是 Lincoln 这一边。
- 邦联（the Confederacy）= 1861 年退出、自己另立门户的南方各州。这是 Lee 替它打仗的一边。
- 两边到底卡在哪？南方说"州有权自己退出"，北方说"联邦不能拆，谁也不许走"。1861 年 4 月，南军炮轰一个叫 **Fort Sumter（萨姆特堡）**的地方，打响第一枪，仗就这么开打了。

**最后说边境州（border states），这个最容易考。** 有四个州——肯塔基、马里兰、密苏里、特拉华——情况很拧巴：它们**自己蓄奴，但没有跟着南方退出**，还留在联邦这边。它们是 Lincoln 最头疼的软肋。你想，要是他开战第一天就喊"我这仗是为了废奴打的"，这几个蓄奴的州一听就吓跑、立刻倒向南方。那样他连首都华盛顿都可能守不住——华盛顿正好被蓄奴的马里兰夹在中间。所以 Lincoln 一开始死死咬定一个目标："保住联邦"，绝口不提"废奴"。

林肯那条故事线里就能看到这张卡的真实画面："七个州退出去另建国家"、"蓄奴的边境州留了下来"，讲的就是这几件事。

考点要点（记三句）：
1. **邦联**是 1861 年退出的南方各州自己建的政权。
2. **边境州**是那种"自己蓄奴、却没跟着退出"的州。
3. 正因为要哄住这几个边境州，Lincoln 开战时才不敢喊"废奴"。`,
        en: `These words keep showing up in the stories, but the stories never stop to define them, so I'm putting them together here.

**Secession first.** Some Southern states didn't want to stay in the United States anymore. They wanted to "leave" and build their own country. That act is called secession. After Lincoln won in 1860, South Carolina left first. By February 1861, seven states had left and joined together to make a new country. That country was the **Confederacy** (full name: the Confederate States of America). A few more joined later — eleven states in all.

**Now, who are the two sides?**
- The Union = the Northern states, plus the states that did not leave. This is Lincoln's side.
- The Confederacy = the Southern states that left and set up their own country in 1861. This is the side Lee fought for.
- What were they stuck on? The South said "a state has the right to leave." The North said "the Union can't be broken up — nobody gets to leave." In April 1861 the Southern army fired on a place called **Fort Sumter**, firing the first shot, and the war started.

**Last, the border states — this gets tested the most.** Four states (Kentucky, Maryland, Missouri, Delaware) were in a tricky spot: they **held slaves but did NOT leave** with the South, and stayed in the Union. They were Lincoln's biggest weak point. Think about it: if on day one he shouted "I'm fighting this war to end slavery," these slaveholding states would get scared and flip to the South. Then he might not even hold the capital, Washington — which sits right inside slaveholding Maryland. That's why at the start Lincoln stuck firmly to one goal, "save the Union," and never said "end slavery."

You can see this card's real scenes in Lincoln's story line: "seven states walked out and built their own country" and "the slaveholding border states stayed."

Remember three things:
1. The **Confederacy** was the government built by the Southern states that left in 1861.
2. The **border states** were the ones that "held slaves but didn't leave."
3. To keep those border states on his side, Lincoln didn't dare say "end slavery" when the war began.`,
      },
      xiaoweiNote: {
        cn: `老师教了个记法：联邦叫 Union，记成"你来联合（unite）"，所以联邦是抱团那一边。邦联叫 Confederacy，是退出去那一边。

还有一个超容易记反的点。**解放宣言里，边境州的奴隶一个都没被解放。** 听着很怪对吧：边境州就留在联邦这边、明明是 Lincoln 管得到的地方，他偏偏一个都不放。这个拧巴的反差，下一张卡专门讲。

我自己画了张小图：四个蓄奴边境州（KY/MD/MO/DE）= Lincoln 必须哄着、不能得罪的州。`,
        en: `My teacher's mnemonic: **Union = "you unite,"** Confederacy = the side that left.
And one super-confusing point: **the Emancipation Proclamation freed not a single slave in the border states** (because the border states stayed in the Union, the very places Lincoln controlled were the ones he did NOT free). That irony gets its own card next.

I drew myself a little map: the four slaveholding border states (KY/MD/MO/DE) = the states Lincoln had to keep "coaxed."`,
      },
    },

    {
      id: 'emancipation-proclamation',
      termCn: '解放宣言（1863.1.1）',
      termEn: 'Emancipation Proclamation (Jan 1, 1863)',
      defCn: '林肯 1863 年 1 月 1 日发布的命令，宣布南方反叛州的奴隶获得自由。它靠总统的战时权力发布（不是国会立法），还首次允许黑人参加北军。',
      defEn: 'An order issued by Lincoln on January 1, 1863, declaring that enslaved people in the rebelling Southern states were free. It was issued under the president\'s wartime powers (not by an act of Congress), and it also allowed Black men to join the Union army for the first time.',
      standardRef: ['APUSH Period 5 / Topic 5.9', 'CA HSS 8.10', 'AP US Gov (war powers)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['lin-n5', 'lin-n6', 'lee-n6', 'usct-n6'],
        xiaoweiNote: {
          cn: `这是整门课的核心。这门课三个主角——Lincoln、Lee、一个黑人士兵——都会讲到**同一张纸**，可三个人读出三个完全不同的意思。

**同一张解放宣言，三个人读出三个完全不同的意思。**

- **Lincoln 把它当成打仗的工具。** 先说原因：奴隶制其实就是南方的战斗力——被奴役的人帮南方种地、修工事、运粮草，这样南方的白人就能腾出手去前线。那 Lincoln 把南方的奴隶一解放，就一举三得：第一，抽空敌人的劳动力；第二，放黑人来参北军（他正缺兵）；第三，堵住英国、法国，让它们不好意思再帮南方。他自己差不多就是这个意思：**这先是一步军事妙棋，然后才是一件道德上对的事。**

- **Lee 把它当成对故乡宣战。** 在南方人眼里，这张纸把战争的性质变了——从"政治上闹分家"，变成了"要把南方整套活法连根拔掉"。

- **那个黑人士兵把它当成"我也是个人"的证明。** 一个人一辈子被当成别人的财产，现在突然有张纸白纸黑字承认他是人，这对他是天大的事。哪怕这张纸一开始是为打仗才写的，也一样重。

**这张纸有个大限制，是考试爱挖的第二个坑。** 它只解放"还在反叛的那些州"，也就是南方那块 Lincoln 根本管不到的地方。而留在联邦这边、自己蓄奴的边境州，它一个奴隶都不放。听起来像句空话对不对？可关键在两点：
1. 北军打到哪，自由就在哪变成真的。
2. 它**头一次让黑人可以正式参北军**。这一下，"自由"就从一句空话，变成了能上战场使出来的力量。

考点要点（记三句）：
1. 解放宣言是 Lincoln 用**总统打仗时的权力**（总司令 commander in chief）发的，不是国会立的法。
2. 它只管反叛州，本质上还带着"军事工具"的味道。
3. 但它**头一次准许黑人参军**，是战争从"只为保联邦"转向"保联邦 + 废奴"的关键拐点。`,
          en: `This is the heart of the whole topic. All three main people in this course — Lincoln, Lee, and a black soldier — end up looking at the **same piece of paper**, and they read three completely different things into it.

**One Emancipation Proclamation, three people, three readings:**
- **Lincoln saw it as a tool for winning the war.** Here's the reason: slavery was actually the South's fighting strength — enslaved people farmed, built defenses, and hauled supplies, which freed up white men to go to the front. So if Lincoln freed the South's slaves, he got three things at once: ① he drained the enemy's labor; ② he let black men join his army (he was short on troops); ③ he made it embarrassing for Britain and France to keep helping the South. In his own words, more or less: **first a smart military move, and only then a morally right thing.**
- **Lee saw it as a declaration of war on his homeland.** To people in the South, this paper changed what the war was about — from "a political split" into "tearing the whole Southern way of life out by the roots."
- **The black soldier saw it as proof that he was a real person.** Someone treated as another person's property his whole life suddenly had a paper saying, in black and white, that he was a human being. That was an enormous thing to him — even if the paper was first written to win a war.

**This paper had a big limit, and it's the second trap exams love.** It only freed the slaves in "the states still in rebellion" — the part of the South that Lincoln couldn't actually reach. In the slaveholding border states that stayed in the Union, it freed no one. Sounds like empty words, right? But two things mattered:
1. Wherever the army marched, freedom became real there.
2. It **let black men formally join the Union army for the first time.** That turned "freedom" from an empty word into real fighting power on the battlefield.

Remember three things:
1. The Emancipation Proclamation was issued under **the president's wartime powers** (as commander in chief), not by an act of Congress.
2. It only covered the rebel states, and at its core it was still partly a "military tool."
3. But it **let black men enlist for the first time** — the key turning point from "only save the Union" to "save the Union + end slavery."`,
        },
      },
    },

    {
      id: 'gettysburg-vicksburg',
      termCn: 'Gettysburg 与 Vicksburg（1863 双转折）',
      termEn: 'Gettysburg & Vicksburg (1863 Twin Turning Points)',
      defCn: '1863 年 7 月同一周里两场关键战役，合称内战的双转折点。葛底斯堡（Gettysburg，宾州，7 月 1-3 日）是东边战场，挡住了南军北上，是全战转折；维克斯堡（Vicksburg，密西西比，7 月 4 日）是西边战场，Grant 拿下密西西比河边的要塞，把邦联从中间切成两半。',
      defEn: 'Two key battles in the same week of July 1863, together called the twin turning points of the Civil War. Gettysburg (Pennsylvania, July 1-3) was in the eastern theater and stopped the South\'s advance north — the turning point of the whole war. Vicksburg (Mississippi, July 4) was in the western theater, where Grant took the fortress on the Mississippi River and cut the Confederacy in two.',
      standardRef: ['APUSH Period 5 / Topic 5.9', 'CA HSS 8.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'lincoln',
        nodeIds: ['lin-n8', 'lee-n7'],
        mentionedIn: [
          { lens: 'robert-e-lee', nodeId: 'lee-n7', context: 'Lee 第三天下令 Pickett\'s Charge，一万多人正面冲坚固防线、半数没回来，失败成为全战转折' },
        ],
        xiaoweiNote: {
          cn: `葛底斯堡（Gettysburg）故事里讲透了，但维克斯堡（Vicksburg）没讲，我补在下面。这俩 AP 经常放一块考。

**先说葛底斯堡（1863 年 7 月 1-3 日，在宾州）。** 林肯和 Lee 两条故事线都讲到了它。这一仗打了三天，死伤好几万人，是**整场战争在陆地上的转折点**。第三天，Lee 下了一道命令，叫 **Pickett's Charge（皮克特冲锋）**——让一万多个步兵排好队、走过一片空地，正面去撞北军那道结实的防线。结果一半人没能回来。Lee 对着剩下的残兵说"这是我的错"。从这天起，南军就再也没真正翻过身。

**再说维克斯堡（1863 年 7 月 4 日，在密西西比），故事没讲，重点补一下。** 就在葛底斯堡打完的第二天，西边战场上，Grant 围了好久的城，终于拿下了密西西比河边的要塞维克斯堡。这有什么用？**拿下它，联邦就完全卡住了整条密西西比河，等于把邦联从中间剖成了两半**——西边的得州、阿肯色州被一刀切开、孤立了。这一招是"Anaconda（蟒蛇）战略"里最关键的一环：像蟒蛇一样把南方一圈一圈缠死。

**为什么要把这俩绑一起记？** 因为它们就发生在 1863 年 7 月初的同一周。东边的葛底斯堡 + 西边的维克斯堡，合起来就是**南北战争的两个转折点**。东边挡住了 Lee 往北打，西边把邦联拦腰切断。从这一周开始，胜负的天平就实实在在往北方倒了。

考点要点（记三句）：
1. **葛底斯堡**在东边，挡住南军北上，是全战转折。
2. **维克斯堡**在西边，拿下密西西比河，把邦联切成两半。
3. 这俩都在 **1863 年 7 月同一周**，合称内战的双转折点。`,
          en: `The stories show Gettysburg up close but don't cover Vicksburg, so I'm adding Vicksburg below. AP often tests these two together.

**Gettysburg first (July 1-3, 1863, Pennsylvania).** Both Lincoln's and Lee's story lines reach it. The fight lasted three days, with tens of thousands killed or wounded — the **turning point of the whole war on land.** On the third day, Lee gave an order called **Pickett's Charge**: over ten thousand foot soldiers lined up, walked across an open field, and charged straight at the Union's strong defensive line. Half of them never made it back. Lee told the survivors, "This is my fault." From that day on, the South never truly recovered.

**Now Vicksburg (July 4, 1863, Mississippi) — the part the stories skip.** The day after Gettysburg ended, over in the western theater, Grant finally captured Vicksburg, a fortress on the Mississippi River, after a long siege. Why does that matter? **Taking it gave the Union full control of the entire Mississippi River, which cut the Confederacy in two** — the western states, Texas and Arkansas, were sliced off and left isolated. This was the key piece of the "Anaconda" plan: squeezing the South to death like a snake, loop by loop.

**Why remember them together?** They happened in the same week of early July 1863. Gettysburg in the east + Vicksburg in the west = the **two turning points of the Civil War.** The east stopped Lee from pushing north; the west cut the Confederacy across the middle. From that week on, the balance tipped clearly toward the North.

Remember three things:
1. **Gettysburg** is in the east — it stopped the South's advance north and was the war's overall turning point.
2. **Vicksburg** is in the west — taking it gave the Union the Mississippi River and split the Confederacy in two.
3. Both happened in **the same week of July 1863** — together, the twin turning points of the Civil War.`,
        },
      },
    },

    {
      id: 'usct-soldiers',
      termCn: '黑人士兵（USCT / 第 54 麻省团）',
      termEn: 'Black Soldiers (USCT / 54th Massachusetts)',
      defCn: '解放宣言之后加入北军的黑人士兵，他们组成的部队叫合众国有色人种部队（USCT）。打到仗结束约有 18 万黑人参军（差不多每十个北军里就有一个），约 4 万人死于这场战争（多数死于疾病）。他们军饷比白人低、被俘还可能被处死或卖回为奴，是解放的主动推动者。',
      defEn: 'Black soldiers who joined the Union army after the Emancipation Proclamation. Their units were called the United States Colored Troops (USCT). By the war\'s end about 180,000 black men had served (roughly one in every ten Union soldiers), and about 40,000 died in this war (most from disease). They were paid less than white soldiers and, if captured, could be killed or sold back into slavery — they were active drivers of emancipation, not passive bystanders.',
      standardRef: ['APUSH Period 5 / Topic 5.9', 'CA HSS 8.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'usct-soldier-receiving-end',
        nodeIds: ['usct-n5', 'usct-n7', 'usct-n8', 'lin-n7'],
        xiaoweiNote: {
          cn: `这门课默认带你走的就是这个黑人士兵的故事线，从头到尾都是他。林肯那条故事线也从总统的角度讲了同一件事。

**先记几个数字（必背）。** 打到仗结束，差不多有 **18 万黑人**在北军里当兵，他们组成的部队叫 **United States Colored Troops（USCT，合众国有色人种部队）**。这是什么概念？差不多每十个北军士兵里，就有一个是黑人。这些人里，约 **4 万人没能活着走出这场战争**（多数是病死的，不是全都战死）。

**再说一件特别不公平的事：钱发得不一样。** 白人兵一个月拿 13 块，衣服还免费发。黑人兵一个月只发 10 块，里头还要扣 3 块当衣服钱，到手只剩 **7 块**。一样上战场、一样会被打死，工资却少了快一半。黑人士兵气不过：**整个第 54 麻省团一年多不领一分钱军饷**，用罢领来抗议。一直拖到 **1864 年，国会才把两边的军饷拉平**。小 U 画个重点：他们要的从来不只是"自由"，是"平等"。

**Fort Wagner（瓦格纳堡，1863 年 7 月 18 日）。** 第 54 团趁夜去偷袭南卡海边的一座炮台。带队的白人指挥官 **Shaw 上校**冲到墙头上就战死了，全团一多半人非死即伤。这一仗输了。可全国的报纸都登了一句话："黑人冲在最前面，也死在最前面。"从此**再没人敢说黑人不能打仗**。

**他们还多扛一份风险：被俘。** 南军根本不把抓到的黑人当正经战俘看——可能当场就杀了，也可能直接卖回去重新当奴隶。1864 年田纳西的 **Fort Pillow（皮洛堡）**就发生过屠杀：黑人士兵都投降了，还是被杀。所以对黑人士兵来说，这场仗只有两条路——"打赢"或者"死"，没有白人那种相对安全的"被俘"。

考点要点（记三句）：
1. 约 **18 万黑人**参了北军（USCT），是解放的**主动推动者**，不是坐等别人解放的旁观者。
2. 同工不同酬：白人一月 13 块、黑人到手 7 块，拖到 1864 年才拉平。
3. 黑人被俘还多一层险——可能被当场处死或卖回为奴。`,
          en: `The course's default story line follows this black soldier all the way through. Lincoln's story line tells the same thing from the president's side.

**First, a few numbers (memorize these).** By the time the war ended, about **180,000 black men** served as soldiers in the Union army. Their units were called the **United States Colored Troops (USCT).** How big is that? Roughly one in every ten Union soldiers was black. Of these men, about **40,000 did not make it out of the war alive** (most died of disease, not all killed in battle).

**Now something deeply unfair: the pay was not equal.** A white soldier got 13 dollars a month, with clothing handed out free. A black soldier got only 10 dollars a month, and 3 of those were taken back for clothing — leaving just **7 dollars** in hand. Same battlefield, same chance of being killed, but almost half the pay. The black soldiers were furious: **the whole 54th Massachusetts refused to take any pay for over a year** as a protest. It dragged on until **1864, when Congress finally made the pay equal.** The key point: what they wanted was never only "freedom," it was "equality."

**Fort Wagner (July 18, 1863).** At night, the 54th tried to storm a fort on the South Carolina coast. The white commander, **Colonel Shaw**, charged up onto the wall and was killed, and more than half the regiment was killed or wounded. They lost the battle. But newspapers all over the country printed one line: "Black soldiers charged at the front and died at the front." From then on, **no one dared say black men couldn't fight.**

**They also carried one extra danger: being captured.** The Southern army didn't treat captured black men as real prisoners of war — they might be killed on the spot or sold straight back into slavery. In 1864 the **Fort Pillow** massacre in Tennessee killed black soldiers who had already surrendered. So for a black soldier, this war had only two roads — "win" or "die" — none of the relatively safe "captured" that white soldiers had.

Remember three things:
1. About **180,000 black men** joined the Union army (USCT). They were **active drivers** of emancipation, not bystanders waiting to be freed.
2. Unequal pay: white 13 a month, black 7 in hand — not made equal until 1864.
3. If captured, black soldiers faced an extra danger: being killed on the spot or sold back into slavery.`,
        },
      },
    },

    {
      id: 'lincoln-leadership',
      termCn: 'Lincoln 的领导（Gettysburg Address + 第二任就职）',
      termEn: 'Lincoln\'s Leadership (Gettysburg Address + Second Inaugural)',
      defCn: '林肯两篇最有名的演讲。葛底斯堡演说（1863 年 11 月 19 日）只用两百来个词、讲两分钟，把"人人生而平等"和"民有、民治、民享的政府"写进了这场仗的意义里。第二任就职演说（1865 年 3 月 4 日）名句"不怀恶意，心怀仁慈"，主张战后别跟南方算旧账、让伤口愈合。',
      defEn: 'Lincoln\'s two most famous speeches. The Gettysburg Address (Nov 19, 1863) was only about two hundred words and two minutes long, and it put "all men are created equal" and "government of the people, by the people, for the people" into the meaning of the war. The Second Inaugural (March 4, 1865), with its famous line "with malice toward none, with charity for all," called for no revenge on the South after the war and for healing the wounds.',
      standardRef: ['APUSH Period 5 / Topic 5.9', 'CA HSS 8.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'lincoln',
        nodeIds: ['lin-n8', 'lin-n10'],
        xiaoweiNote: {
          cn: `林肯那条故事线把他两篇最有名的演讲都讲了。AP 爱拿这些句子出引语题。

**第一篇：葛底斯堡演说（Gettysburg Address，1863 年 11 月 19 日）。** 他站在一片刚埋了几千具尸体的战场上，**只用了两百来个词、讲了两分钟**就讲完了。两句一定要背下来：
- 这个国家"**孕育于自由，相信人人生而平等**"（conceived in liberty, dedicated to the proposition that all men are created equal）。
- 一定要让"**民有、民治、民享的政府，永远不从地球上消失**"（government of the people, by the people, for the people, shall not perish from the earth）。

考点在这：拿这篇，去比 1862 年那封"自由只是个工具"的冷冰冰的信。一对比就看出来了——Lincoln 把这场仗的意义，从"保住联邦"一路抬到了"人人平等"。你可以想想：到底是他自己变了，还是这场战争逼着他变？

**第二篇：第二任就职演说（Second Inaugural，1865 年 3 月 4 日）。** 名句是"**不怀恶意，心怀仁慈**"（with malice toward none, with charity for all）。意思是别去跟南方算旧账、要让伤口愈合。

时间一定要看准：这篇演说是 **1865 年 3 月**讲的，比 Lee 4 月 9 日投降还**早了一个多月**。别记成"投降之后才讲的"。

考点要点（记两句）：
1. **葛底斯堡演说**（1863 年 11 月）把"人人生而平等"写进了这场仗的意义里。
2. **第二任就职演说**"不怀恶意"（1865 年 3 月，投降前一个多月）定下了重建时和解的调子。`,
          en: `Lincoln's story line covers both of his most famous speeches. AP loves to quiz these lines as quote questions.

**Speech 1: the Gettysburg Address (Nov 19, 1863).** He stood on a battlefield where thousands of bodies had just been buried, and he was done in **a little over two hundred words, about two minutes.** Two lines you must memorize:
- this nation was "**conceived in liberty, and dedicated to the proposition that all men are created equal**"
- so that "**government of the people, by the people, for the people, shall not perish from the earth**"

Here's the exam point: compare this speech to that cold 1862 letter that called freedom "just a tool." Put them side by side and you can see it — Lincoln lifted the meaning of the war all the way from "save the Union" up to "all people are equal." You can ask yourself: did he change, or did the war force him to change?

**Speech 2: the Second Inaugural (March 4, 1865).** The famous line is "**with malice toward none, with charity for all.**" It means: don't go settling old scores with the South — let the wounds heal.

Watch the timing carefully: this speech was given in **March 1865**, more than a month **before** Lee surrendered on April 9. Don't remember it as "given after the surrender."

Remember two things:
1. The **Gettysburg Address** (Nov 1863) put "all men are created equal" into the meaning of the war.
2. The **Second Inaugural's** "with malice toward none" (March 1865, over a month before the surrender) set the tone of reconciliation for Reconstruction.`,
        },
      },
    },

    {
      id: 'total-war',
      termCn: '总体战 / 战时总统权力',
      termEn: 'Total War / Wartime Presidential Power',
      defCn: '总体战（total war）= 不只打对方的军队，连对方养活这场仗的本钱（工厂、铁路、农田、运粮的路）和老百姓继续打下去的念想，全都当成攻击目标，谢尔曼向海洋进军（1864）就是典型。战时总统权力 = 打仗时总统能多出一些平时没有的权力，比如林肯凭"总司令"的权力直接发解放宣言、还暂停了人身保护令。',
      defEn: 'Total war means striking not just the enemy\'s army but everything that keeps the war going — factories, railroads, farmland, supply roads, and even civilians\' will to keep fighting; Sherman\'s March to the Sea (1864) is the classic example. Wartime presidential power means a president gains powers in war that he doesn\'t have in peacetime — for example, Lincoln issued the Emancipation Proclamation under his "commander in chief" power and suspended habeas corpus.',
      standardRef: ['APUSH Period 5 / Topic 5.10', 'AP US Gov (war powers)'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'robert-e-lee', nodeId: 'lee-n8', context: 'Lee 第 8 节：北方人多补给足、源源补人补枪，南方人越打越少、粮缺、士兵饿着光脚——总体战拼资源的侧写' },
          { lens: 'lincoln', nodeId: 'lin-n6', context: '解放宣言凭总统战争权力发布，是战时总统权力扩张的例子' },
        ],
      },
      standaloneText: {
        cn: `这张卡装着 APUSH Period 5 的两个"机制"考点。故事侧面带了一下，但没专门讲，我整理在这。

**第一个：总体战（total war）。** 普通打法是只打对方的军队。总体战不一样，它连对方**养活这场仗的本钱**也一起打——工厂、铁路、农田、运粮的路，连老百姓还想不想打下去的那口气，全是要砸的目标。北方在后期靠两个将领来干这件事：Grant（格兰特）和 Sherman（谢尔曼）。
- **谢尔曼向海洋进军（Sherman's March to the Sea，1864）**：他带兵从佐治亚的亚特兰大，一路烧到海边的萨凡纳，把铁路、农场、物资全毁掉。这是**故意要把南方"还能继续打、还想继续打"的本钱和念想一起打垮**。
- 这也正是为什么北方"人多、钱多、工厂多"最后能赢。总体战就是把这种**工业和人口上的家底**，直接变成战场上的优势。Lee 那条故事线里说的"北方的人和枪源源不断补上来，南方却人越打越少、粮越来越缺"，讲的就是这个。

**第二个：战时总统权力。** 内战让总统的权力大到了前所未有。AP US Gov 经常把这块拿来一起考。先说一个词：总司令（commander in chief），意思是打仗的时候总统是军队的最高指挥，手里能多出一些平时没有的权力。
- **解放宣言就是 Lincoln 用这个"总司令的打仗权力"直接发的**，根本没经过国会立法。这是行政权（总统这一头的权力）扩张的经典例子。
- Lincoln 还做了件大事：他**暂停了人身保护令（suspended habeas corpus）**。人身保护令本来保证"政府要关你，得先送你上法庭审"。他一暂停，政府就能不经审判，直接把那些"危害战争"的人关起来。这在和平年代是违宪的，战时算不算，一直有争议。
- 考点就在这：**总统打仗时的权力，边界到底在哪？** "为了打赢一场保卫宪法的仗，能不能暂时绕过宪法里的一些保护？"这是道开放题，没标准答案。

考点要点（记两句）：
1. **总体战**（比如谢尔曼进军）把北方的工业、人口家底变成了胜势。
2. Lincoln 用总司令的打仗权力发解放宣言、暂停人身保护令，是**战时总统权力扩张**的经典案例。`,
        en: `This card holds two "mechanism" exam points from APUSH Period 5. The stories brush past them but never stop to explain them, so I'm putting them together here.

**First: total war.** Normal fighting only attacks the other side's army. Total war is different — it also attacks **the things that keep the war going for the enemy**: factories, railroads, farmland, supply roads, and even the people's will to keep fighting. All of it becomes a target. Late in the war, the North did this through two generals, Grant and Sherman.
- **Sherman's March to the Sea (1864):** he led his troops from Atlanta, Georgia, all the way to the coast at Savannah, burning railroads, farms, and supplies as they went. The goal was **to deliberately break both the South's ability and its will to keep fighting.**
- This is also why the North — with "more people, more money, more factories" — won in the end. Total war turned that **advantage in industry and population** straight into a battlefield advantage. In Lee's story line, "the North kept pouring in fresh men and guns while the South got fewer in number and shorter on food" is a side-view of exactly this.

**Second: wartime presidential power.** The Civil War made the president's power bigger than ever before. AP US Gov often tests this together. First, one word: commander in chief — it means that in wartime the president is the army's top commander and gains some powers he doesn't have in peacetime.
- **The Emancipation Proclamation was issued directly under this "commander in chief" wartime power** — it never went through Congress as a law. This is a classic example of executive power (the president's side) expanding.
- Lincoln also did something big: he **suspended habeas corpus.** Habeas corpus normally guarantees that "if the government wants to lock you up, it has to take you to court first." Once he suspended it, the government could lock up people who "endangered the war" without any trial. In peacetime that's unconstitutional; whether it's allowed in wartime has always been debated.
- Here's the exam point: **where exactly are the limits of the president's power in wartime?** "To win a war that's defending the Constitution, can you temporarily go around some of the protections in that same Constitution?" This is an open question with no standard answer.

Remember two things:
1. **Total war** (like Sherman's March) turned the North's industrial and population advantage into victory.
2. Lincoln issuing the Emancipation Proclamation under his commander-in-chief power and suspending habeas corpus are classic cases of **wartime presidential power expanding.**`,
      },
      xiaoweiNote: {
        cn: `老师说，总体战和"战时总统权力"这两个，单拎出来出选择题不算最高频。可**一旦碰上 DBQ，它们特别好用**。因为它俩问的都是同一类问题："为了赢，能不能用更狠、更越界的手段？"——正好接得上林肯一路上"到底是务实，还是越了界"的纠结。

我给自己编了个记忆钩子：**Sherman = 烧**（烧掉南方打仗的本钱），**Lincoln = 越**（越过国会、越过宪法的保护）。一个砸物资，一个扩权力。`,
        en: `My teacher said total war and "wartime presidential power" aren't the highest-frequency standalone multiple-choice items. But **once a DBQ shows up, they're really useful** — because both ask the same kind of question: "to win, can you use harsher, more boundary-crossing methods?" That ties right back to Lincoln's own struggle throughout the war over whether he was being practical or crossing a line.

My memory hook: **Sherman = burn (burn up the South's ability to fight); Lincoln = cross (cross over Congress and the Constitution's protections).** One hits supplies, the other expands power.`,
      },
    },

    {
      id: 'thirteenth-amendment',
      termCn: '第 13 修正案与战争结局',
      termEn: '13th Amendment & the War\'s Outcome',
      defCn: '1865 年通过、年底正式生效的宪法修正案，一句话——在美国境内永远废除奴隶制。它和解放宣言不一样：解放宣言只是一道战时命令、只管反叛州、仗一完可能就失效；第 13 修正案是写进宪法、管所有州、永久有效，等于把废奴"钉死"了。',
      defEn: 'A constitutional amendment passed in 1865 and in force by the end of that year. In one line: it permanently abolished slavery within the United States. It differs from the Emancipation Proclamation: the Proclamation was only a wartime order, covered only the rebel states, and might lapse once the war ended; the 13th Amendment is written into the Constitution, binds all states, and lasts forever — it "nailed down" the end of slavery.',
      standardRef: ['APUSH Period 5 / Topic 5.10', 'CA HSS 8.10', 'AP US Gov (Reconstruction Amendments)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'lincoln',
        nodeIds: ['lin-n9', 'lin-n10', 'usct-n9', 'usct-n10'],
        xiaoweiNote: {
          cn: `战争怎么收的场，自由又怎么被"钉死"，三个主角的故事在结尾都讲到了。

**先问一个问题：光有解放宣言，为什么还不够？** 因为解放宣言只是一道**打仗期间的命令**，靠的是总统的战争权力。麻烦在这：**仗一打完，这道命令可能就失效了**。那刚被放出来的人，会不会又被拖回去重新当奴隶？为了堵死这个口子，就必须去改宪法本身。

**于是有了第 13 修正案（13th Amendment）。** 1864 到 1865 年，Lincoln 使尽各种政治手腕，推着国会通过了它。它就一句话——**在美国境内，永远废除奴隶制**。

它和解放宣言差在哪？这个对比必考，我列成表：
| | 解放宣言 | 第 13 修正案 |
|---|---|---|
| 它是什么 | 打仗时的命令（靠总统战争权力）| 宪法（国家的根本大法）|
| 管多大范围 | 只管反叛州 | **所有州** |
| 能管多久 | 仗一完可能就失效 | **永久** |

时间线：1865 年 1 月国会通过，**1865 年底各州批准、正式生效**。

**战争是怎么收尾的（时间线）：**
1. 1865 年 4 月 9 日，**Lee 在一个叫 Appomattox（阿波马托克斯）的地方向 Grant 投降**，仗打完了。
2. 1865 年 4 月 14 日，**Lincoln 在剧院里被一个同情南方的人开枪打中**，第二天早上就去世了。距离投降才过了五天。他没能看到后来的重建，也没看到第 13 修正案年底生效。

**但要记住：废了奴隶制，不等于实现了平等。** 第 13 修正案是把奴隶制废了，可仗一打完，南方很快又用法律和暴力，把黑人刚到手的权利一点点夺了回去。结果"自由"这两个字，对每一个黑人真正算数，又足足等了一百年——直到 1960 年代的民权运动。这条线直接接上**重建（Reconstruction）那段历史**。

考点要点（记两句）：
1. **第 13 修正案**（1865 年底）把废奴从一道战时命令，升级成对所有州永久生效的宪法。
2. 可战后平等远没实现，权利被夺回、过了一百年才补上（接重建那段历史）。`,
          en: `How the war ended, and how freedom got "nailed down" — the three main characters' stories all reach this in their endings.

**First, a question: if we already had the Emancipation Proclamation, why wasn't that enough?** Because the Proclamation was only a **wartime order**, resting on the president's war powers. Here's the problem: **once the war ended, that order might stop working.** Would the people who had just been freed get dragged back into slavery? To close that gap for good, the Constitution itself had to change.

**That's where the 13th Amendment came in.** In 1864-65, Lincoln used every political trick he had to push it through Congress. It says one thing: **slavery is abolished forever inside the United States.** How is it different from the Proclamation? This contrast is a must-know, so I put it in a table:
| | Emancipation Proclamation | 13th Amendment |
|---|---|---|
| What it is | a wartime order (rests on the president's war power) | the Constitution (the nation's fundamental law) |
| How far it reaches | rebel states only | **all states** |
| How long it lasts | might stop working when the war ends | **permanent** |
Timeline: Congress passed it in January 1865, and **the states ratified it and it took effect at the end of 1865.**

**How the war ended (timeline):**
1. April 9, 1865: **Lee surrendered to Grant at a place called Appomattox**, and the war was over.
2. April 14, 1865: **Lincoln was shot in a theater by a man who sided with the South**, and he died the next morning — only five days after the surrender. He never saw Reconstruction, and he never saw the 13th Amendment take effect at the end of the year.

**But remember: ending slavery is not the same as achieving equality.** The 13th Amendment got rid of slavery, but right after the war the South quickly used law and violence to take back, bit by bit, the rights black people had just won. As a result, making "freedom" truly count for every black person took another hundred years — all the way to the 1960s civil rights movement. This leads straight into the **Reconstruction topic.**

Remember two things:
1. The **13th Amendment** (end of 1865) upgraded the end of slavery from a wartime order into a permanent part of the Constitution that binds all states.
2. But equality was far from won — rights were taken back, and it took a century to close the gap (this connects to Reconstruction).`,
        },
      },
    },

    {
      id: 'missouri-compromise',
      termCn: '密苏里妥协（1820）',
      termEn: 'Missouri Compromise (1820)',
      defCn: '1820 年国会达成的一笔交易，用来暂时压住"奴隶制能不能往西扩"这场争。它让密苏里以蓄奴州身份加入、同时让缅因以自由州身份加入（保持蓄奴州和自由州数目对等），又在地图上划了一条北纬 36 度 30 分线，规定路易斯安那购地里以后新分出来的州，这条线以北禁奴、以南可以蓄奴。',
      defEn: 'A deal Congress reached in 1820 to temporarily quiet the fight over whether slavery could spread west. It let Missouri join as a slave state while letting Maine join as a free state (keeping the number of slave and free states even), and it drew a line on the map at 36 degrees 30 minutes north latitude: in future states carved from the Louisiana Purchase, slavery would be banned north of the line and allowed south of it.',
      standardRef: ['APUSH Period 4 / Topic 4.2', 'APUSH Period 5 / Topic 5.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'lincoln', nodeId: 'lin-n1', context: 'Lincoln 第 1 节提到南北数十年围绕奴隶制西扩反复妥协、每次效力越来越短——密苏里妥协是这条妥协链的起点' },
        ],
      },
      standaloneText: {
        cn: `故事里 Lincoln 说南北"吵了几十年"、"每一次妥协都比上一次撑得短"。密苏里妥协（1820）就是这条断裂链上的第一环，AP 考试里特别常出。

**背景：** 1819 年，密苏里想以蓄奴州的身份加进联邦。南北在国会里立刻僵住了。为什么？因为当时蓄奴州和自由州数目正好对半，谁多一个，谁在国会就多一份话语权。批准密苏里，平衡就被打破。

**妥协的内容（记住三件事）：**
1. 让密苏里以**蓄奴州**身份加进来。
2. 同时把缅因从马萨诸塞里分出来，让它以**自由州**身份加进来，这样两边数目又对上了。
3. 在地图上划一条**北纬 36 度 30 分线**（就是地图上的一条横着的纬线）。规矩是：以后从路易斯安那购地那块大地方里新分出来的州，在这条线**以北的禁奴，以南的可以蓄奴**。

**它管用吗，又管了多久？** 这个妥协撑了三十四年。1854 年，堪萨斯-内布拉斯加法把这条线废了，矛盾又炸开。到 1857 年的 Dred Scott 案，最高法院干脆判这个妥协违宪，等于把它彻底埋了。

考点要点（记三句）：
1. **密苏里妥协**（1820）靠"一个进蓄奴、一个进自由"加上那条 36°30' 线，暂时压住了"奴隶制能不能往西扩"这场争。
2. 它是内战前**最重要的一次立法妥协**。
3. 但它也证明了一件事：奴隶制扩张这个问题，靠妥协只能往后拖，根本解决不了。`,
        en: `In the stories, Lincoln says the North and South "argued for decades" and that "each compromise held for a shorter time than the one before." The Missouri Compromise (1820) is the first link in that breaking chain, and it shows up on AP exams all the time.

**Background.** In 1819, Missouri wanted to join the Union as a slave state. Congress instantly locked up. Why? Because at the time the number of slave states and free states was exactly even, so whoever added one more got more say in Congress. Admitting Missouri would break that balance.

**The deal (remember three things):**
1. Let Missouri in as a **slave state.**
2. At the same time, carve Maine out of Massachusetts and let it in as a **free state**, so the two sides were even again.
3. Draw a line on the map at **36 degrees 30 minutes north latitude** (just a horizontal line of latitude). The rule: for future states carved out of the big Louisiana Purchase territory, slavery would be **banned north of the line and allowed south of it.**

**Did it work, and for how long?** The compromise held for thirty-four years. In 1854, the Kansas-Nebraska Act erased the line and the conflict blew open again. Then in 1857, the Dred Scott case had the Supreme Court rule the compromise unconstitutional, burying it completely.

Remember three things:
1. The **Missouri Compromise** (1820) used "one in as slave, one in as free" plus the 36-30 line to temporarily calm the fight over whether slavery could spread west.
2. It was the **most important legislative compromise** before the Civil War.
3. But it also proved one thing: the problem of slavery's expansion could only be delayed by compromise, never actually solved.`,
      },
      xiaoweiNote: {
        cn: `我编了个记忆钩子：Missouri 缩成 **Mo**、Maine 缩成 **Me**、那条线就是 **36-30**。三件事打包记：Mo 进来（蓄奴）/ Me 进来（自由）/ 36°30' 划一条线。

AP 常挖一个坑：别把密苏里妥协和 1850 年妥协搞混。这三个时间点得分清楚：
1. **密苏里妥协（1820）**是最早的这一条。
2. **1850 年妥协**是南北各退一步（加州进来当自由州 + 加强抓逃奴的法律）。
3. **1854 年堪萨斯-内布拉斯加法**把 1820 划的那条线废掉，局势就彻底失控了。`,
        en: `My memory hook: **Missouri shrinks to Mo, Maine shrinks to Me, and the line is 36-30.** Package all three: Mo comes in (slave) / Me comes in (free) / draw the 36-30 line.

AP loves one trap: don't mix up the Missouri Compromise with the Compromise of 1850. Keep these three dates straight:
1. The **Missouri Compromise (1820)** is the earliest one.
2. The **Compromise of 1850** had both sides give a little (California comes in as a free state + a tougher law for catching runaway slaves).
3. The **Kansas-Nebraska Act of 1854** erased the line drawn in 1820, and after that things spun completely out of control.`,
      },
    },

    {
      id: 'kansas-nebraska-act',
      termCn: '堪萨斯-内布拉斯加法（1854）',
      termEn: 'Kansas-Nebraska Act (1854)',
      defCn: '1854 年由参议员 Stephen Douglas 提出的法案，废掉了密苏里妥协那条 36 度 30 分禁奴线，改用"人民主权"——让当地居民自己投票决定准不准蓄奴。它直接引出了"流血的堪萨斯"（两边抢着送人去投票、最后动了刀枪），又催生了反对奴隶制扩张的共和党。',
      defEn: 'A bill introduced in 1854 by Senator Stephen Douglas that repealed the Missouri Compromise\'s 36-30 line banning slavery and replaced it with "popular sovereignty" — letting local residents vote on whether to allow slavery. It led directly to "Bleeding Kansas" (both sides rushed in settlers to win the vote and it turned violent) and gave birth to the Republican Party, which opposed the spread of slavery.',
      standardRef: ['APUSH Period 5 / Topic 5.2', 'APUSH Period 5 / Topic 5.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'lincoln', nodeId: 'lin-n1', context: 'Lincoln 提到南北妥协越来越撑不住——堪萨斯-内布拉斯加法是那条链断掉的关键一步，直接引爆共和党成立和 Lincoln 重返政坛' },
        ],
      },
      standaloneText: {
        cn: `密苏里妥协划的那条 36°30' 线（地图上的一条纬线）撑了三十四年。到 1854 年，参议员 Stephen Douglas 提出了堪萨斯-内布拉斯加法，一下把它废了。从这儿起，通往内战的那条因果链急速升温。

**法案到底干了什么？** 它把路易斯安那购地北边那块地（原本在 36°30' 线以北、按老规矩应该禁奴），划成堪萨斯和内布拉斯加两个准州。但它没直接规定这俩准不准蓄奴，而是把球踢给了当地人：**让住在那儿的居民自己投票决定**。这个做法有个名字，叫人民主权（popular sovereignty），意思就是"这事让本地人自己投票说了算"。

**后果（三条必背）：**
1. **"流血的堪萨斯"（Bleeding Kansas）。** 既然是投票说了算，南北两边就拼命往堪萨斯送人，都想凑够票数。人一多就打起来，越闹越凶，最后真动了刀枪、流了血。美国等于提前进了一场小型内战。
2. **共和党成立（1854）。** 北方那些反对派气坏了，聚到一起，拉起一个新政党。它的纲领核心就一条：**挡住奴隶制往西扩**。Lincoln 后来就是这个党推出来的总统候选人。
3. **南北的裂痕再也补不上了。** 这条法案等于宣布"妥协"这条路走到头了，两边再也没有共同的政治地基。通往内战的倒计时，从这里开始。

考点要点（记三句）：
1. **堪萨斯-内布拉斯加法**（1854）废掉了密苏里妥协那条 36°30' 禁奴线，改用"人民主权"。
2. 它引出了"流血的堪萨斯"，又催生了共和党。
3. 它是"奴隶制能不能西扩"这场争，从国会里的嘴仗，升级成真刀真枪武装冲突的转折点。`,
        en: `The 36-30 line drawn by the Missouri Compromise held for thirty-four years. Then in 1854, Senator Stephen Douglas introduced the Kansas-Nebraska Act and erased it in one stroke. From here, the chain of events leading to the Civil War heated up fast.

**What did the act actually do?** It took the land in the northern part of the Louisiana Purchase (which was north of the 36-30 line and, under the old rule, should have banned slavery) and turned it into two territories, Kansas and Nebraska. But it didn't say outright whether they could allow slavery. Instead, it kicked the question to the people living there: **let the local residents vote on it themselves.** This approach has a name — popular sovereignty — meaning "the locals get to vote and decide."

**Consequences (remember three):**
1. **"Bleeding Kansas."** Since it came down to a vote, both North and South rushed people into Kansas to pile up votes. With so many people crowding in, fights broke out, kept getting worse, and finally turned into real armed violence. It was like a small civil war starting early on American soil.
2. **The Republican Party (founded 1854).** Furious opponents in the North joined together and built a new political party. Its platform had one core plank: **stop the spread of slavery westward.** Lincoln would later be this party's presidential candidate.
3. **The split between North and South could no longer be repaired.** This act basically announced that the road of "compromise" had run out — the two sides no longer had any shared political ground. The countdown to civil war started here.

Remember three things:
1. The **Kansas-Nebraska Act** (1854) erased the Missouri Compromise's 36-30 line banning slavery and switched to "popular sovereignty."
2. It led to "Bleeding Kansas" and gave birth to the Republican Party.
3. It was the turning point when the fight over slavery's westward spread went from a war of words in Congress to actual armed conflict.`,
      },
      xiaoweiNote: {
        cn: `老师说的"内战因果链"，顺着记一遍：
**1820 密苏里妥协**（划线）→ **1850 妥协**（各退一步）→ **1854 堪萨斯-内布拉斯加法**（废线、人民主权）→ **流血的堪萨斯**（小型内战）→ **共和党成立** → **1860 Lincoln 当选** → **南方脱离**。

这条链记牢了，APUSH 里考内战起源的因果题基本就稳了。

DBQ 常问一个问题：堪萨斯-内布拉斯加法为什么比以前任何一次妥协都更"翻不回去"？答案是这样：以前的妥协是双方各让一点。这次不是，它把"谁赢这块地就归谁"变成了一场抢人头的武装竞争，等于把难题直接扔回给当地人去打架解决。可当地人根本打不出结果，最后只能升级成全面开战。`,
        en: `My teacher's "Civil War causal chain," in order:
**1820 Missouri Compromise** (draw the line) → **1850 Compromise** (both sides give a little) → **1854 Kansas-Nebraska Act** (erase the line, popular sovereignty) → **Bleeding Kansas** (small-scale civil war) → **Republican Party founded** → **Lincoln elected in 1860** → **Southern secession.**

Lock this chain in your head and APUSH causation questions about the war's origins are basically in the bag.

A DBQ often asks: why was the Kansas-Nebraska Act harder to "take back" than any earlier compromise? Here's the answer: earlier compromises had both sides give a little. This one didn't. It turned "whoever wins the land keeps it" into an armed scramble for people, which threw the problem straight back to the locals to settle by fighting. But the locals couldn't settle it — so it could only escalate into full-on war.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1862 年 8 月，Lincoln 给一个叫 Greeley 的报人写了封公开信，里头说："只要能保住联邦，哪怕一个奴隶都不解放，我也照做。"
可才过了四个多月，1863 年 1 月 1 日，他就签了解放宣言。而且他自己也承认：解放奴隶这件事，先是一步军事妙棋，然后才是一件道德上对的事。

想一个问题：一件本身是对的事，如果是出于自私的算计（为了打赢这场仗）才去做的，它还算"对"吗？做事的动机，会不会改变这件事本身的价值？`,
      en: `In August 1862, Lincoln wrote back to the newspaperman Greeley in an open letter: "If I could save the Union without freeing any slave I would do it." About four months later, on January 1, 1863, he signed the Emancipation Proclamation. He admitted himself that freeing the slaves was "first a brilliant military move, only then a morally right thing."

If a right thing is done out of selfish calculation (to win a war), is it still "right"? Does motive change the value of an action?`,
      hintCn: `提示：可以从两个角度想。
1. 看**结果**：不管 Lincoln 心里怎么想，几百万人确实因为这张纸走向了自由，结果是好的。
2. 看**动机**：可要是他纯粹为了打赢、压根不在乎奴隶死活，那这个"对"是不是有点假？

再往深想一步：故事里有个现成的对比。那个黑人士兵，把同一张纸当成"我也是个人"的证明。对一个一直被当成财产的人来说，到底是**纸背后那个动机更要紧，还是纸真正带来的改变更要紧**？也许"对不对"这个问题，得先分清楚是"对谁"来说。`,
      hintEn: `Hint: think from two angles — (1) by **outcome**: whatever Lincoln felt inside, millions did walk toward freedom because of that paper, and the outcome was good; (2) by **motive**: if he cared only about winning and not at all about the enslaved, is that "rightness" a little hollow?

Going deeper: bring in the contrast from the story — the black soldier treated the same paper as "proof of being born human." To someone counted as property, does **the motive behind the paper matter more, or the real change it brought**? Maybe "right or not" has to be asked as "right for whom."`,
      conceptsActivated: ['emancipation-proclamation', 'lincoln-leadership'],
    },
    {
      id: 'q2',
      cn: `Robert E. Lee 自己亲口说过：脱离是错的，奴隶制是一种"道德上、政治上的祸害"。可等他的家乡弗吉尼亚退出联邦，他还是辞掉了北军的职务，回去领了南军，替一个靠奴隶制立国的政权打了整整四年仗。

想一个问题：当"忠于你所属的那个群体（家乡、家人、朋友）"和"做对的事"撞在一起，一个人该怎么选？还有，你怎么分得清——什么时候"忠诚"是真的美德，什么时候"忠诚"只是一个借口，借口背后其实是不敢一个人站到对的那一边？`,
      en: `Robert E. Lee said with his own mouth that secession was wrong and slavery a "moral and political evil" — yet when his home state of Virginia left the Union, he still resigned from the Northern army and went home to lead the Southern one, fighting four years for a regime founded on slavery.

When "loyalty to the group you belong to (homeland, family, friends)" clashes with "doing the right thing," how should a person choose? How do you tell the difference: when is "loyalty" a virtue, and when is it only an excuse for not daring to stand alone on the right side?`,
      hintCn: `提示：DBQ 一般会给你几份材料——比如 Lee 的辞职信、那封他说奴隶制是祸害的信、还有他管种植园的记录——然后让你分析一个问题："他的纠结，到底是一场真诚的悲剧，还是给自己的选择找的一个好听理由？"

这题没有标准答案。关键有两条：一是要用材料里的证据说话；二是要中立。别把 Lee 写成一个纯粹的坏人，也别把他写成一个无辜的圣人——后一种就正好掉进 Lost Cause 神话的坑里了。

你可以从这几个角度切进去：
1. Lee 把对弗吉尼亚的忠诚，放在了对国家的誓言之上。这只是他个人的选择，还是那个年代"先是州里的人、后才是国家的人"这种大环境造出来的？
2. 如果一个"好人"，用很高尚的动机（荣誉、忠诚）去为一件坏事（一个蓄奴政权）卖命，我们到底该怎么评价他？`,
      hintEn: `Hint: a DBQ would give several sources (Lee's resignation letter, his letter calling slavery an evil, records of his plantation management) and ask: "was his struggle a sincere tragedy, or a flattering reason he gave for his own choice?" No standard answer — what matters is using evidence, and staying neutral: don't write Lee as a pure villain, and don't write him as an innocent saint (that's the Lost Cause trap).

Possible question angles:
- "Lee placed loyalty to Virginia above his oath to the country — was this a personal choice, or a product of that era's structure of 'first a state citizen, then a national one'?"
- "If a 'good man' serves a bad thing (a slaveholding regime) with noble motives (honor, loyalty), how should we judge him?"`,
      conceptsActivated: ['civil-war-causes', 'confederacy-secession'],
    },
    {
      id: 'q3',
      cn: `加入北军的黑人士兵（USCT），拿的军饷比白人少一大截——白人一个月 13 块，黑人到手只有 7 块。要是被南军抓住，他们可能当场就被杀，或者被卖回去重新当奴隶。换句话说，这场仗对他们只有两条路："赢"或者"死"。可即便这样，还是有大约 18 万黑人去参了军，约 4 万人死在了这场战争里。

想一个问题：明知道风险这么大、待遇这么不公，他们为什么还是去打？对一个人来说，"别人发给你的自由"和"你自己用命争回来的自由"，到底有什么不一样？`,
      en: `Black soldiers in the Union army (the USCT) drew pay short of a white soldier's (white 13 / black 7), and if captured by the Southern army might be killed on the spot or sold back into slavery — for them this war had only "win" or "die." Yet about 180,000 black men still enlisted, and about 40,000 died in this war.

Why, knowing the risk was so great and the treatment so unjust, did they still go and fight? For a person, what is the difference between "freedom handed to you by others" and "freedom you seized with your own life"?`,
      hintCn: `提示：可以回那个黑人士兵的故事里找证据。
- 讲军饷那段："我们整团一年多不领军饷，要么平等地付，要么干脆别付。"
- 讲 Fort Wagner 那段："这仗虽然输了，却逼得全国不得不正眼看我们。"
- 快结尾那段："自由不是别人发的礼物，是我们用命从历史里抢回来的。"

看出来了吗——他们要的从来就不只是"自由"，而是"平等 + 被当成人看"。

再往深想一步：历史上还有谁，是靠"自己站出来争"、而不是"等别人来给"，才拿到权利的？（提示：女性争投票权、民权运动，都是同一个主题——"被人给予"还是"自己争取"。）那回到今天，你身边有没有这么一样东西——可能是一个机会、一份尊重、或者一个被人当回事的资格——是你一直在等别人"给"你，可其实得你自己站出来去争的？`,
      hintEn: `Hint: find evidence back in the black soldier's story — the part about pay ("our whole regiment refused pay for over a year; pay us equally or don't pay at all"), the part about Fort Wagner ("we lost the battle but forced the whole country to look us in the eye"), and the part near the end ("freedom was not a gift handed to us; it was something we seized back out of history with our lives"). What they wanted was never only "freedom," but "equality + being recognized as people."

Going deeper: who else in history won rights by "standing up to fight for them" rather than "waiting to be given them"? (Hint: women fighting for the vote, the civil rights movement — all the "given vs seized" theme.) In your own life today, is there something — an opportunity, a respect, the standing to be taken seriously — that you keep waiting for someone to "give" you, when in truth you must stand up and fight for it yourself?`,
      conceptsActivated: ['usct-soldiers', 'thirteenth-amendment', 'emancipation-proclamation'],
    },
  ],
};

export default notebook;
