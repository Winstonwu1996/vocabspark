// ─── 同伴笔记本架构 v1 · The Civil War 1861-1865 ──────────────────
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
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天历史课开始上南北战争（1861-1865）。老师在黑板上写了一行字：
"A house divided against itself cannot stand."（一座分裂的房子立不住。）她说这是 Lincoln 的话。

然后她给了我们一张单子，上面是这些人和词：

人：Abraham Lincoln（林肯）、Robert E. Lee（李）、Ulysses S. Grant（格兰特）、
还有一类没名字的人——加入北军的黑人士兵（USCT）。

词：secession（脱离）、the Union vs the Confederacy（联邦 vs 邦联）、
Emancipation Proclamation（解放宣言）、Gettysburg（葛底斯堡）、
total war（总体战）、13th Amendment（第 13 修正案）。

老师特别强调一件事，我抄在笔记本第一页：
"考试最爱挖的坑，是问'内战到底为什么打'。标准答案是——根本原因是奴隶制（具体说是奴隶制能不能往西扩），
'州权'是给它的包装。别被'只是州权之争'这种说法带跑。"

我先记下来。等下读三个故事——Lincoln、Lee、还有一个黑人士兵——
读完再回来对照这张单子，看我能不能解释每一个。`,
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
        nameCn: '一个北军黑人士兵（第 54 麻省团 composite）',
        nameEn: 'A USCT Soldier (54th Mass.)',
        ipa: null,
        roleCn: '18 万黑人北军士兵之一（半合成，基于第 54 麻省团）；同工不同酬、被俘即处死风险，把"自由"从纸变真',
        roleEn: 'One of 180,000 black Union soldiers (composite, based on 54th Massachusetts); unequal pay, death-on-capture risk, turned paper "freedom" into reality',
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

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'civil-war-causes',
      termCn: '内战起因（奴隶制 vs 州权 framing）',
      termEn: 'Causes of the Civil War (Slavery vs States\' Rights Framing)',
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
          cn: `这是老师说的"最爱挖的坑"，我读三遍故事都在练这一点。

Lincoln 那一遍（视角一第 1-2 节）讲得最清楚：南北吵了几十年，吵的核心**不是**"要不要立刻废奴"，而是**"奴隶制能不能往西扩"**——每加一个新州准不准蓄奴，直接决定国会票数谁多。1860 Lincoln（一个被南方认定"反对奴隶制扩张"的总统）一当选，南方就觉得算盘打到头，脱离了。

那"州权"是怎么回事？老师的标准说法：**州权论是"蓄奴权利"的包装**。南方说"我们争的是州的自主权"，但具体争的那个权，就是"蓄奴的权利"。所以**根本原因是奴隶制，州权是它的外衣**——这不是"哪边都对"，是当代史学的压倒性共识。

Lee 那一遍（视角二第 10 节）还讲了一个考点：战后南方把奴隶制从故事里抹掉、说成"为州权而战"，这套神话叫 **Lost Cause（失败的伟业）**。AP 经常拿它当 DBQ 材料，问"为什么人们要重写一场战争的起因"。

考点关键句：**内战的根本原因是奴隶制（具体是奴隶制西扩之争）；"州权"是其包装，"Lost Cause" 是战后为南方失败辩护的建构。**`,
          en: `This is the "trap exams love most" my teacher mentioned, and I practiced it across all three story passes.

Lincoln's pass (Lens 1 Nodes 1-2) makes it clearest: North and South quarreled for decades, and the core was **not** "should we abolish slavery now" but **"can slavery spread west."** Every new state's slave-or-free status directly decided who held more votes in Congress. The moment Lincoln (a president the South had decided was "against the spread of slavery") was elected in 1860, the South felt it had run out of room and seceded.

So what about "states' rights"? The standard line: **the states'-rights argument was the wrapping on the "right to hold slaves."** The South said "we're fighting for state autonomy," but the specific right at stake was the right to hold enslaved people. So **the root cause was slavery; states' rights was its outer coat** — this is not "both sides have a point," it's the overwhelming consensus of modern scholarship.

Lee's pass (Lens 2 Node 10) adds another exam point: after the war the South erased slavery from the story and recast it as "fighting for states' rights." That myth is called the **Lost Cause.** AP often uses it as DBQ material: "why do people rewrite the cause of a war?"

Key exam sentence: **The root cause of the Civil War was slavery (specifically the fight over its westward spread); "states' rights" was the wrapping, and the "Lost Cause" was a postwar construction defending the South's defeat.**`,
        },
      },
    },

    {
      id: 'confederacy-secession',
      termCn: '脱离与邦联（联邦 vs 邦联 / 边境州）',
      termEn: 'Secession & the Confederacy (Union vs Confederacy / Border States)',
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
        cn: `故事里这几个词反复出现，但没有专门停下来定义，我把它整理在这里。

**secession（脱离）**：南方各州"退出"联邦、自己另立一个国家。1860 Lincoln 当选后，南卡罗来纳第一个走，到 1861 年 2 月已有七个州脱离，组成 **the Confederacy（邦联，全称 Confederate States of America）**。后来又有几个州加入，一共 11 个。

**the Union（联邦）vs the Confederacy（邦联）**：
- 联邦 = 北方各州 + 留下来没脱离的州（Lincoln 这一边）。
- 邦联 = 1861 脱离自立的南方各州（Lee 替它打仗的一边）。
- 核心制度张力：**南方主张州有权脱离，北方主张联邦不可分裂。** 1861 年 4 月南军炮击 **Fort Sumter（萨姆特堡）**，打响第一枪，战争爆发。

**border states（边境州）**：肯塔基、马里兰、密苏里、特拉华——这四个州**蓄奴，但没有脱离**，留在联邦一边。它们是 Lincoln 的战略命门：要是他开战第一天就喊"为废奴而战"，这几个蓄奴州会立刻倒向南方，他可能连首都华盛顿都守不住（华盛顿就夹在蓄奴的马里兰中间）。这就是为什么 Lincoln 一开始把目标定死为"保联邦"，不是"废奴"——读 Lincoln 那一遍第 3 节会懂。

🔗 故事连接：Lincoln 那一遍第 1 节"七州退出另立国家"、第 3 节"蓄奴边境州留下来"，都是这张牌的具体场景。

考点关键句：**邦联（the Confederacy）是 1861 脱离的南方各州自立的政权；边境州（border states）是蓄奴却未脱离的州，是 Lincoln 开战不喊废奴的关键原因。**`,
        en: `These terms come up again and again in the stories but never get a dedicated definition stop, so I'm organizing them here.

**Secession**: Southern states "withdrawing" from the Union and forming a separate country. After Lincoln's 1860 election, South Carolina left first; by February 1861 seven states had seceded and formed **the Confederacy (Confederate States of America)**. Several more joined later, eleven in all.

**The Union vs the Confederacy**:
- The Union = the Northern states + the states that did not secede (Lincoln's side).
- The Confederacy = the Southern states that seceded and stood on their own in 1861 (the side Lee fought for).
- The core institutional tension: **the South claimed states had the right to secede; the North claimed the Union could not be broken.** In April 1861 Confederate forces shelled **Fort Sumter**, firing the first shot, and the war began.

**Border states**: Kentucky, Maryland, Missouri, Delaware — these four states **held slaves but did not secede** and stayed in the Union. They were Lincoln's strategic weak point: if on day one of the war he cried "this is a war to end slavery," those slaveholding states would swing to the South at once, and he might not even hold the capital, Washington (which sits inside slaveholding Maryland). That's why Lincoln at first set the goal flatly as "save the Union," not "end slavery" — Lincoln's pass Node 3 makes this clear.

🔗 Story link: Lincoln Lens Node 1 ("seven states walked out and set up a country") and Node 3 ("the slaveholding border states stayed") are the concrete scenes of this card.

Key exam sentence: **The Confederacy was the government formed by the Southern states that seceded in 1861; the border states were slaveholding states that did not secede, and they are the key reason Lincoln did not declare a war for abolition at the start.**`,
      },
      xiaoweiNote: {
        cn: `老师的记忆法：**联邦 = Union = "你联合（unite）"**，邦联 = Confederacy = 脱离方。
还有一个超容易混的点：**解放宣言一个边境州的奴隶都没解放**（因为边境州留在联邦一边，Lincoln 管得到反而不解放）。这个反讽下一张卡专门讲。

我自己画了一张小图：四个蓄奴边境州（KY/MD/MO/DE）= Lincoln 必须"哄住"的州。`,
        en: `My teacher's mnemonic: **Union = "you unite,"** Confederacy = the side that left.
And one super-confusing point: **the Emancipation Proclamation freed not a single slave in the border states** (because the border states stayed in the Union, the very places Lincoln controlled were the ones he did NOT free). That irony gets its own card next.

I drew myself a little map: the four slaveholding border states (KY/MD/MO/DE) = the states Lincoln had to keep "coaxed."`,
      },
    },

    {
      id: 'emancipation-proclamation',
      termCn: '解放宣言（1863.1.1）',
      termEn: 'Emancipation Proclamation (Jan 1, 1863)',
      standardRef: ['APUSH Period 5 / Topic 5.9', 'CA HSS 8.10', 'AP US Gov (war powers)'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['lin-n5', 'lin-n6', 'lee-n6', 'usct-n6'],
        xiaoweiNote: {
          cn: `这是整个 Topic 的核心，三遍故事都在第 6 节用**同一张纸**做了对位（N6 跨视角锚），我超喜欢这个设计。

**一张解放宣言，三个人三种读法：**
- **Lincoln（视角一第 6 节）**：当**军事工具**。他第 5 节就讲了为什么——奴隶制是南方的军事力量（被奴役者种地、修工事、运补给，腾出白人上前线），解放南方奴隶能①抽空敌人劳动力 ②让黑人来参北军（他正缺兵）③堵欧洲（英法）援南。他原话级别的逻辑：**"先是军事妙棋，后才是道德对的事"**。
- **Lee（视角二第 6 节）**：当**对故乡宣战**。在南方看，这是把战争从"政治分裂"变成"社会颠覆"，要把南方整个生活方式连根拔掉。
- **黑人士兵（视角三第 6 节）**：当**生而为人的证明**。对一辈子被算成财产的人，"白纸黑字承认你是人"是天大的事——哪怕这纸为打仗才写。

**这张纸的有限性（考试最爱挖第二个坑）：它只解放"仍在反叛的州"（南方那个 Lincoln 管不到的地方），对留在联邦的蓄奴边境州一个都不解放。** 听起来像空话，但关键是：① 军队打到哪，自由就在哪变真；② 它**首次让黑人能正式参北军**——把自由从空话变成可执行的力量。

考点关键句：**Emancipation Proclamation 凭总统作为 commander in chief 的战争权力发布（不是国会立法），只覆盖反叛州、有军事工具性质，但它首次授权黑人参军，是从"保联邦"转向"保联邦 + 废奴"的关键转折。**`,
          en: `This is the heart of the whole topic, and all three story passes use the **same paper** in their Node 6 (the cross-lens anchor). I love this design.

**One Emancipation Proclamation, three people, three readings:**
- **Lincoln (Lens 1 Node 6)**: as a **military tool.** Node 5 explained why — slavery was the South's military strength (enslaved people farmed, built fortifications, hauled supplies, freeing white men for the front), so freeing the South's slaves would ① drain the enemy's labor ② let black men enlist in his army (he was short of troops) ③ shame Britain and France out of helping the South. His own logic, almost word for word: **"first a brilliant military move, only then a morally right thing."**
- **Lee (Lens 2 Node 6)**: as a **declaration of war on his homeland.** From the South's side it turned the war from "political split" into "social overthrow," tearing the whole Southern way of life out by the root.
- **The black soldier (Lens 3 Node 6)**: as **proof of being born human.** To someone counted as property his whole life, "a paper that admits you are a person" was an enormous thing — even if it was written to fight a war.

**Its limits (the second trap exams love): it freed only the slaves in "states still in rebellion" (the South that Lincoln could not reach), and freed not a single slave in the slaveholding border states that stayed in the Union.** It sounds like empty words, but the key is: ① wherever the army marched, freedom became real there; ② it **let black men formally join the Union army for the first time** — turning freedom from an empty word into an executable force.

Key exam sentence: **The Emancipation Proclamation was issued under the president's war powers as commander in chief (not by act of Congress), covered only the rebel states, and was partly a military tool — but by authorizing black enlistment for the first time, it was the key pivot from "save the Union" to "save the Union + end slavery."**`,
        },
      },
    },

    {
      id: 'gettysburg-vicksburg',
      termCn: 'Gettysburg 与 Vicksburg（1863 双转折）',
      termEn: 'Gettysburg & Vicksburg (1863 Twin Turning Points)',
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
          cn: `**Gettysburg（葛底斯堡）故事里讲透了，Vicksburg 没讲，我补在下面——这俩 AP 经常一起考。**

**Gettysburg（1863 年 7 月 1-3 日，宾州）**：Lincoln 那一遍第 8 节 + Lee 那一遍第 7 节都讲了。三天死伤几万人，是**整场战争的陆上转折点**。第三天 Lee 下令 **Pickett's Charge（皮克特冲锋）**——一万多步兵列队穿开阔地、正面冲北军坚固防线，半数没回来。Lee 对残兵说"这是我的错"。从这天起南军再没真正翻盘。

**Vicksburg（维克斯堡，1863 年 7 月 4 日，密西西比）——故事没讲，重点补：**
就在 Gettysburg 结束的第二天，西线 Grant 经过长期围城，拿下密西西比河上的要塞 Vicksburg。意义：**联邦从此完全控制密西西比河，把邦联从中间一切两半**（西边的得州、阿肯色被切断）。这一手叫"Anaconda（蟒蛇）战略"的关键一环——像蟒蛇一样把南方缠死。

**为什么两个一起记**：1863 年 7 月初的同一周，东线 Gettysburg + 西线 Vicksburg = **南北战争的双转折点**。东线挡住 Lee 北上，西线把邦联拦腰斩断。从这一周起，胜负的天平实质性倒向北方。

考点关键句：**Gettysburg（东线，挡住南军北上 + 全战转折）与 Vicksburg（西线，拿下密西西比河、把邦联一切为二）发生在 1863 年 7 月同一周，合称内战的双转折点。**`,
          en: `**Gettysburg is fully covered in the stories; Vicksburg is not, so I'm supplementing it below — AP often tests these two together.**

**Gettysburg (July 1-3, 1863, Pennsylvania)**: covered in Lincoln's Node 8 and Lee's Node 7. Tens of thousands killed or wounded over three days, the **eastern (land) turning point of the whole war.** On the third day Lee ordered **Pickett's Charge** — over ten thousand infantry crossing an open field straight at the Union's strong line, half never coming back. Lee told the broken men "this is my fault." From that day the South never truly recovered.

**Vicksburg (July 4, 1863, Mississippi) — not in the stories, key supplement:**
The day after Gettysburg ended, in the western theater, Grant took the Mississippi River fortress of Vicksburg after a long siege. Its significance: **the Union now fully controlled the Mississippi River, cutting the Confederacy in two** (the western states, Texas and Arkansas, were severed off). This was a key part of the "Anaconda" strategy — squeezing the South to death like a snake.

**Why remember them together**: in the same week of early July 1863, Gettysburg in the east + Vicksburg in the west = the **twin turning points of the Civil War.** The east stopped Lee's advance north; the west cut the Confederacy across the middle. From that week the scales tipped decisively toward the North.

Key exam sentence: **Gettysburg (eastern theater, stopped the South's advance + overall turning point) and Vicksburg (western theater, took the Mississippi River and split the Confederacy in two) happened in the same week of July 1863 — together the twin turning points of the Civil War.**`,
        },
      },
    },

    {
      id: 'usct-soldiers',
      termCn: '黑人士兵（USCT / 第 54 麻省团）',
      termEn: 'Black Soldiers (USCT / 54th Massachusetts)',
      standardRef: ['APUSH Period 5 / Topic 5.9', 'CA HSS 8.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'usct-soldier-receiving-end',
        nodeIds: ['usct-n5', 'usct-n7', 'usct-n8', 'lin-n7'],
        xiaoweiNote: {
          cn: `这条线是默认那一遍（视角三），整条都是他。Lincoln 那一遍第 7 节也从总统角度讲了同一件事。

**数字（必背）**：到战争结束，约 **18 万黑人**在北军当兵，组成 **United States Colored Troops（USCT，合众国有色人种部队）**——差不多每十个北军里一个。约 **4 万人死于这场战争（多数死于疾病，不是全部战死）**。

**同工不同酬**：白人兵每月 13 美元（衣物免费），黑人兵 10 美元还要扣 3 美元衣物费 = 到手 **7 美元**。一样上战场、一样会死，工资差一截。**第 54 麻省团整团罢领军饷顶了一年多**抗议，直到 **1864 年国会才把军饷拉平**。小薇画重点：他们要的不只是"自由"，是"平等"。

**Fort Wagner（瓦格纳堡，1863.7.18）**：第 54 团夜袭南卡海边炮台，白人指挥官 **Shaw 上校**阵亡墙头，全团死伤过半。仗输了，但全国报纸登"黑人冲在最前、死在最前"，从此**没人敢说黑人不能打仗**。

**被俘的额外风险**：南军不把黑人当合法战俘——可能当场处死或卖回为奴。1864 田纳西 **Fort Pillow（皮洛堡）**屠杀已投降的黑人士兵。对他们，这场仗只有"赢"或"死"，没有相对安全的"被俘"。

考点关键句：**约 18 万黑人参北军（USCT），同工不同酬（白 13 / 黑 7，1864 才拉平），被俘有被处死/卖回为奴的额外风险——他们是解放的能动推动者，不是被动受益者。**`,
          en: `This line is the default pass (Lens 3), entirely about him. Lincoln's Node 7 tells the same thing from the president's angle.

**Numbers (memorize)**: by the war's end about **180,000 black men** served in the Union army, forming the **United States Colored Troops (USCT)** — roughly one in every ten Union soldiers. About **40,000 died in this war (most from disease, not all killed in combat)**.

**Unequal pay**: a white soldier drew 13 dollars a month (clothing free); a black soldier 10 dollars with 3 deducted for clothing = **7 dollars** in hand. Same battlefield, same chance of dying, less pay. **The whole 54th Massachusetts refused to draw any pay for over a year** in protest, until **Congress leveled the pay in 1864.** Xiaowei's note: what they wanted was not only "freedom" but "equality."

**Fort Wagner (July 18, 1863)**: the 54th assaulted a South Carolina coastal fort by night; the white colonel **Shaw** died on top of the wall, and more than half the regiment was killed or wounded. The fight was lost, but newspapers nationwide printed "black soldiers charged at the front and died at the front," and from then **no one dared say black men could not fight.**

**The extra risk of capture**: the Southern army did not treat black men as lawful prisoners — they might be killed on the spot or sold back into slavery. In 1864 the **Fort Pillow** massacre in Tennessee killed black soldiers who had already surrendered. For them this war had only "win" or "die," no relatively safe "captured."

Key exam sentence: **About 180,000 black men served in the Union army (USCT), with unequal pay (white 13 / black 7, leveled only in 1864) and the extra risk of execution or re-enslavement if captured — they were active drivers of emancipation, not passive beneficiaries.**`,
        },
      },
    },

    {
      id: 'lincoln-leadership',
      termCn: 'Lincoln 的领导（Gettysburg Address + 第二任就职）',
      termEn: 'Lincoln\'s Leadership (Gettysburg Address + Second Inaugural)',
      standardRef: ['APUSH Period 5 / Topic 5.9', 'CA HSS 8.10'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'lincoln',
        nodeIds: ['lin-n8', 'lin-n10'],
        xiaoweiNote: {
          cn: `Lincoln 那一遍把他两篇最有名的演讲都讲了，AP 引语题常考。

**Gettysburg Address（葛底斯堡演说，1863.11.19）**（视角一第 8 节）：在埋了几千具尸体的战场上，**两百多个词、两分钟**讲完。两句必背：
- 国家"**孕育于自由，奉行人人生而平等的信念**"（conceived in liberty, dedicated to the proposition that all men are created equal）
- 要让"**民有、民治、民享的政府，不致从地球上消失**"（government of the people, by the people, for the people, shall not perish from the earth）
考点：对比 1862 那封"自由是工具"的冷信，可见 Lincoln **把战争意义从"保联邦"抬升到"平等"**。是他变了，还是战争逼他变？

**第二任就职演说（Second Inaugural，1865.3.4）**（视角一第 10 节）：名句"**不怀恶意，怀着仁慈**"（with malice toward none, with charity for all），主张对南方不清算、要愈合。
⚠️ 时间要拎清：这篇演说是 **1865 年 3 月**讲的，比 4 月 9 日 Lee 投降**早一个多月**。别记成"投降后才讲"。

考点关键句：**Gettysburg Address（1863.11）把"人人生而平等"放进战争意义；第二任就职"不怀恶意"（1865.3，投降前一个多月）定下重建的和解基调。**`,
          en: `Lincoln's pass covers both of his most famous speeches; AP quote questions test these often.

**Gettysburg Address (Nov 19, 1863)** (Lens 1 Node 8): on a battlefield where thousands were buried, delivered in **a little over two hundred words, two minutes.** Two lines to memorize:
- the nation "**conceived in liberty, and dedicated to the proposition that all men are created equal**"
- so that "**government of the people, by the people, for the people, shall not perish from the earth**"
Exam point: against the 1862 cold letter ("freedom is a tool"), this shows Lincoln **lifting the meaning of the war from "save the Union" to "equality."** Did he change, or did the war force him to?

**Second Inaugural (March 4, 1865)** (Lens 1 Node 10): the famous line "**with malice toward none, with charity for all**," urging no score-settling against the South, but healing.
⚠️ Get the timing straight: this speech was given in **March 1865**, more than a month **before** Lee's surrender on April 9. Don't remember it as "given after the surrender."

Key exam sentence: **The Gettysburg Address (Nov 1863) put "all men are created equal" into the meaning of the war; the Second Inaugural's "with malice toward none" (March 1865, over a month before the surrender) set the reconciling tone for Reconstruction.**`,
        },
      },
    },

    {
      id: 'total-war',
      termCn: '总体战 / 战时总统权力',
      termEn: 'Total War / Wartime Presidential Power',
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
        cn: `这张卡是 APUSH Period 5 的两个"机制"考点，故事侧面带到了，但没专门讲，我整理在这里。

**total war（总体战）**：不只打对方的军队，还打对方的**经济和民间支撑能力**——工厂、铁路、农田、补给线、平民的战争意志，全是打击目标。北方后期靠 Grant（格兰特）和 Sherman（谢尔曼）执行：
- **Sherman's March to the Sea（谢尔曼向海洋进军，1864）**：从佐治亚的亚特兰大一路烧到萨凡纳，摧毁铁路、农场、物资，**故意打垮南方继续打仗的能力和意志**。
- 这就是为什么北方"人多、钱多、工厂多"最终能赢——总体战把这种**工业和人口优势**直接变成战场胜势。Lee 那一遍第 8 节"北方源源补人补枪、南方人越打越少粮越来越缺"就是这个机制的侧写。

**战时总统权力（commander-in-chief war powers）**：内战让总统权力空前扩张，AP US Gov 常关联：
- **Emancipation Proclamation 凭总统作为总司令的战争权力发布**（不是国会立法）——这是行政权扩张的经典例子。
- Lincoln 还**暂停了人身保护令（suspended habeas corpus）**，让政府可以不经审判拘押"危害战争"的人。这在和平时期是违宪的，战时则有争议。
- 考点：**总统的战时权力边界在哪？** "为了赢一场保卫宪法的战争，可不可以暂时绕过宪法的一些保障？"——开放争论。

考点关键句：**total war（如 Sherman's March）把北方的工业/人口优势变成胜势；内战中 Lincoln 凭总司令战争权力发布解放宣言、暂停人身保护令，是战时总统权力扩张的经典案例。**`,
        en: `This card holds two "mechanism" exam points in APUSH Period 5; the stories touch them sideways but never dedicate a stop, so I'm organizing them here.

**Total war**: striking not only the enemy's army but its **economy and civilian support capacity** — factories, railroads, farmland, supply lines, and the civilian will to fight, all become targets. The North executed this late in the war through Grant and Sherman:
- **Sherman's March to the Sea (1864)**: burning a path from Atlanta, Georgia, to Savannah, destroying railroads, farms, and supplies, **deliberately breaking the South's ability and will to keep fighting.**
- This is why the North's "more people, more money, more factories" ultimately won — total war turned that **industrial and population advantage** straight into battlefield dominance. Lee's Node 8 ("the North poured in replacements and guns without end while the South grew fewer and shorter on food") is a side-view of this mechanism.

**Wartime presidential power (commander-in-chief war powers)**: the Civil War expanded presidential power as never before, often linked in AP US Gov:
- **The Emancipation Proclamation was issued under the president's war powers as commander in chief** (not by act of Congress) — a classic example of executive expansion.
- Lincoln also **suspended habeas corpus**, letting the government detain people who "endangered the war" without trial. This is unconstitutional in peacetime and contested in wartime.
- Exam point: **where are the limits of the president's wartime power?** "To win a war defending the Constitution, may one temporarily bypass some of the Constitution's protections?" — open debate.

Key exam sentence: **Total war (e.g. Sherman's March) turned the North's industrial/population advantage into victory; Lincoln's issuing the Emancipation Proclamation under commander-in-chief war powers and suspending habeas corpus are classic cases of wartime presidential expansion.**`,
      },
      xiaoweiNote: {
        cn: `老师说 total war 和"战时总统权力"这两个，单独成选择题不算最高频，但**一旦考 DBQ 就特别能用**——
因为它们都是"为了赢，能不能用更狠/更越界的手段"这类问题，正好配 Lincoln 那条"务实 vs 越界"的主线。

我的记忆钩子：**Sherman = 烧（烧掉南方打仗的能力）；Lincoln = 越（越过国会和宪法保障）**。一个打物资，一个扩权力。`,
        en: `Teacher said total war and "wartime presidential power" aren't the highest-frequency standalone multiple-choice items, but **once a DBQ shows up they're especially useful** — because both are "to win, may we use harsher / more boundary-crossing means" questions, which pair perfectly with Lincoln's "pragmatic vs over-the-line" through-line.

My memory hook: **Sherman = burn (burn the South's ability to fight); Lincoln = cross (cross over Congress and constitutional protections).** One hits supplies, one expands power.`,
      },
    },

    {
      id: 'thirteenth-amendment',
      termCn: '第 13 修正案与战争结局',
      termEn: '13th Amendment & the War\'s Outcome',
      standardRef: ['APUSH Period 5 / Topic 5.10', 'CA HSS 8.10', 'AP US Gov (Reconstruction Amendments)'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'lincoln',
        nodeIds: ['lin-n9', 'lin-n10', 'usct-n9', 'usct-n10'],
        xiaoweiNote: {
          cn: `战争怎么收场 + 自由怎么被"钉死"，三遍故事的结尾都讲了。

**为什么光有解放宣言不够**（Lincoln 第 9 节）：解放宣言是一份**战时命令**，靠总统的战争权力，**战争一结束可能就失效**——被解放的人会不会又被拖回去当奴隶？所以必须改宪法本身。

**第 13 修正案（13th Amendment）**：1864-65 Lincoln 用尽政治手腕推动国会通过，**一句话——合众国境内永远废除奴隶制**。和解放宣言的区别（必考对比）：
| | 解放宣言 | 第 13 修正案 |
|---|---|---|
| 性质 | 战时命令（总统战争权力）| 宪法（国家根本法）|
| 范围 | 只管反叛州 | **所有州** |
| 效力 | 可能随战争失效 | **永久** |
1865 年 1 月国会通过，**1865 年底各州批准正式生效**。

**战争结局时间线**：1865.4.9 **Lee 在 Appomattox（阿波马托克斯）向 Grant 投降**，战争结束 → 1865.4.14 **Lincoln 在剧院被同情南方者枪杀**，次晨身亡（投降才过五天，他没看到重建、没看到 13th 年底生效）。

**但"废奴 ≠ 平等"**（黑人士兵第 10 节）：第 13 修正案废了奴隶制，可战后南方很快用法律和暴力夺回黑人刚得到的权利，让"自由"对每个黑人真正算数又花了一百年（到 1960s 民权运动）。这条直通**重建（Reconstruction）Topic**。

考点关键句：**第 13 修正案（1865 底）把废奴从战时命令升级为对所有州永久生效的宪法，但战后平等远未实现，权利被夺回、百年后才补（接重建 Topic）。**`,
          en: `How the war ended + how freedom got "nailed down" — all three story passes cover this in their endings.

**Why the Proclamation alone wasn't enough** (Lincoln Node 9): the Emancipation Proclamation was a **wartime order** resting on the president's war powers, and **might lapse when the war ended** — would the freed people be dragged back into slavery? So the Constitution itself had to change.

**The 13th Amendment**: in 1864-65 Lincoln used every political skill to push it through Congress — in one line, **slavery is forever abolished within the United States.** Its difference from the Proclamation (a must-know contrast):
| | Emancipation Proclamation | 13th Amendment |
|---|---|---|
| Nature | wartime order (presidential war power) | Constitution (nation's fundamental law) |
| Scope | rebel states only | **all states** |
| Force | might lapse with the war | **permanent** |
Passed Congress in January 1865, **ratified by the states and taking effect at the end of 1865.**

**War's-end timeline**: April 9, 1865, **Lee surrendered to Grant at Appomattox**, ending the war → April 14, 1865, **Lincoln was shot in a theater by a Southern sympathizer**, dying the next morning (only five days after the surrender; he never saw Reconstruction or the 13th take effect at year's end).

**But "abolition ≠ equality"** (black soldier Node 10): the 13th Amendment ended slavery, yet after the war the South quickly used law and violence to take back the rights black people had just gained, and making "freedom" truly count for every black person took another hundred years (to the 1960s civil rights movement). This leads straight into the **Reconstruction topic.**

Key exam sentence: **The 13th Amendment (late 1865) upgraded abolition from a wartime order into a constitutional clause binding on all states permanently — but equality was far from achieved, rights were taken back, and the gap took a century to close (leads to the Reconstruction topic).**`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1862 年 8 月，Lincoln 给报人 Greeley 公开回信，说："如果我能保住联邦而不解放任何一个奴隶，我会这么做。"
五个月后，1863 年 1 月 1 日，他签了解放宣言。他自己也承认：解放奴隶"先是一步军事妙棋，后才是一件道德上对的事"。

一件对的事，如果出于自私的算计（为了赢仗）去做，它还算"对"吗？动机会改变一个行为的价值吗？`,
      en: `In August 1862, Lincoln wrote back to the newspaperman Greeley in an open letter: "If I could save the Union without freeing any slave I would do it." Five months later, on January 1, 1863, he signed the Emancipation Proclamation. He admitted himself that freeing the slaves was "first a brilliant military move, only then a morally right thing."

If a right thing is done out of selfish calculation (to win a war), is it still "right"? Does motive change the value of an action?`,
      hintCn: `提示：可以从两个角度想——(1) 看**结果**：不管 Lincoln 心里怎么想，几百万人确实因这张纸走向自由，结果是好的；(2) 看**动机**：如果他纯为打赢、根本不在乎奴隶死活，那这"对"是不是有点假？

进阶思考：可以引故事里的对比——黑人士兵在第 6 节把同一张纸当成"生而为人的证明"。对一个被算成财产的人，**纸背后的动机重要，还是纸带来的真实改变重要**？也许"对不对"要分"对谁"来问。`,
      hintEn: `Hint: think from two angles — (1) by **outcome**: whatever Lincoln felt inside, millions did walk toward freedom because of that paper, and the outcome was good; (2) by **motive**: if he cared only about winning and not at all about the enslaved, is that "rightness" a little hollow?

Going deeper: bring in the story's contrast — the black soldier in Node 6 treated the same paper as "proof of being born human." To someone counted as property, does **the motive behind the paper matter more, or the real change it brought**? Maybe "right or not" has to be asked as "right for whom."`,
      conceptsActivated: ['emancipation-proclamation', 'lincoln-leadership'],
    },
    {
      id: 'q2',
      cn: `Robert E. Lee 亲口说脱离是错的、奴隶制是"道德与政治的祸害"——可当他的家乡弗吉尼亚退出联邦，他还是辞掉北军、回去领了南军，替一个靠奴隶制立国的政权打了四年仗。

当"忠于你所属的群体（家乡、家人、朋友）"和"做对的事"发生冲突，一个人该怎么选？你怎么分清：什么时候"忠诚"是美德，什么时候"忠诚"只是不敢一个人站到对的那边的借口？`,
      en: `Robert E. Lee said with his own mouth that secession was wrong and slavery a "moral and political evil" — yet when his home state of Virginia left the Union, he still resigned from the Northern army and went home to lead the Southern one, fighting four years for a regime founded on slavery.

When "loyalty to the group you belong to (homeland, family, friends)" clashes with "doing the right thing," how should a person choose? How do you tell the difference: when is "loyalty" a virtue, and when is it only an excuse for not daring to stand alone on the right side?`,
      hintCn: `提示：DBQ 通常会给几份材料（Lee 的辞职信、他说奴隶制是祸害的信、他管理种植园的记录），让你分析"他的纠结是真诚的悲剧，还是给自己的选择找的好听理由？"没有标准答案，关键是用证据，而且要中立——别把 Lee 写成纯恶人，也别写成无辜圣人（那就掉进 Lost Cause 神话的坑了）。

可能的提问角度：
- "Lee 把对弗吉尼亚的忠诚放在对国家的誓言之上——这是个人选择，还是那个时代'先是州民、后是国民'的结构产物？"
- "如果一个'好人'用高尚的动机（荣誉、忠诚）为一件坏事（奴隶制政权）服务，我们该怎么评价他？"`,
      hintEn: `Hint: a DBQ would give several sources (Lee's resignation letter, his letter calling slavery an evil, records of his plantation management) and ask: "was his struggle a sincere tragedy, or a flattering reason he gave for his own choice?" No standard answer — what matters is using evidence, and staying neutral: don't write Lee as a pure villain, and don't write him as an innocent saint (that's the Lost Cause trap).

Possible question angles:
- "Lee placed loyalty to Virginia above his oath to the country — was this a personal choice, or a product of that era's structure of 'first a state citizen, then a national one'?"
- "If a 'good man' serves a bad thing (a slaveholding regime) with noble motives (honor, loyalty), how should we judge him?"`,
      conceptsActivated: ['civil-war-causes', 'confederacy-secession'],
    },
    {
      id: 'q3',
      cn: `加入北军的黑人士兵（USCT）领着比白人少一截的军饷（白 13 / 黑 7），被南军俘虏可能当场被杀或卖回为奴——这场仗对他们只有"赢"或"死"。可还是有大约 18 万黑人参了军，约 4 万人死于这场战争。

为什么明知风险这么大、待遇这么不公，他们还是去打？对一个人来说，"别人发给你的自由"和"你自己用命争来的自由"，意味着有什么不同？`,
      en: `Black soldiers in the Union army (the USCT) drew pay short of a white soldier's (white 13 / black 7), and if captured by the Southern army might be killed on the spot or sold back into slavery — for them this war had only "win" or "die." Yet about 180,000 black men still enlisted, and about 40,000 died in this war.

Why, knowing the risk was so great and the treatment so unjust, did they still go and fight? For a person, what is the difference between "freedom handed to you by others" and "freedom you seized with your own life"?`,
      hintCn: `提示：可以从故事里找证据——黑人士兵第 5 节"我们整团罢领军饷一年多，要么平等付要么别付"，第 7 节 Fort Wagner"输了仗却让全国不得不正眼看我们"，第 9 节"自由不是别人发的礼物，是我们用命从历史里抢回来的"。他们要的从来不只是"自由"，是"平等 + 被承认是人"。

进阶思考：历史上还有谁，是靠"自己站出来争"而不是"等别人给"才拿到权利的？（提示：女性争投票权、民权运动……都是"被给予 vs 自己争取"这个主题。）今天你身边，有没有一样东西（一个机会、一份尊重、一个被当回事的资格）是你一直在等别人"给"、其实得自己站出来去争的？`,
      hintEn: `Hint: find evidence in the stories — the black soldier's Node 5 ("our whole regiment refused pay for over a year, pay equally or don't pay at all"), Node 7's Fort Wagner ("we lost the battle but forced the whole country to look us in the eye"), Node 9 ("freedom was not a gift handed to us; it was something we seized back out of history with our lives"). What they wanted was never only "freedom," but "equality + being recognized as people."

Going deeper: who else in history won rights by "standing up to fight for them" rather than "waiting to be given them"? (Hint: women fighting for the vote, the civil rights movement — all the "given vs seized" theme.) In your own life today, is there something — an opportunity, a respect, the standing to be taken seriously — that you keep waiting for someone to "give" you, when in truth you must stand up and fight for it yourself?`,
      conceptsActivated: ['usct-soldiers', 'thirteenth-amendment', 'emancipation-proclamation'],
    },
  ],
};

export default notebook;
