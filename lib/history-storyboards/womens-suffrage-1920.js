// ─── Women's Suffrage 1848-1920 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 妇女选举权 · Women's Suffrage — Seneca Falls to the 19th Amendment 1848-1920
// HSS-8.8 → 跨到 11 · APUSH Period 4-7 · AP US Government (19th Amendment / 选举权扩大)
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md A9 + AUTHORING_PIPELINE 第 8/12 条):
//   - cady-stanton              (perpetrator-actor) — Elizabeth Cady Stanton 1815-1902 运动奠基者 / 反对 15th Amendment 先给黑人男性投票 / 发种族主义言论
//   - frances-harper            (lonely-mediator)   — Frances Ellen Watkins Harper 1825-1911 非裔女诗人+活动家 /「我们都被绑在一起」调停种族与性别两条战线
//   - ida-b-wells-receiving-end (receiving-end)     — Ida B. Wells 1862-1931 反私刑记者 / 1913 游行被要求走队尾 / 拒绝 / 挤进白人队伍 (defaultLens, VERBATIM from roadmap)
//
// 跨 lens micro-detail (N6 anchor):
//   「站在哪一排 / where you stand in the line」一句话两个方向 — 同一场运动里,谁排在前面、谁被推到后面:
//   - Ida B. Wells 1913.3.3 华盛顿游行被组织者要求黑人妇女走队尾, 她拒绝, 中途从人群里挤进伊利诺伊白人代表队
//   - Cady Stanton lens N6: 1869 为白人女性选票, 把黑人男性投票权推到「她」后面 (反对 15th Amendment)
//   - Frances Harper lens N6: 1866 AERA「我们都被绑在一起」拒绝在种族和性别之间二选一
//   同一个问题「先给谁投票权」, 在三个人手里有三种站位
//
// 跨 Topic 锚:
//   - Cady Stanton 反对先给黑人投票 → constitutional-convention (3/5 妥协/谁被算进政治共同体) + enlightenment Gouges (女权先驱的局限)
//   - Frances Harper 双战线调停 → enlightenment (自由话语 vs 谁有资格用)
//   - Ida B. Wells 拒绝走队尾 → constitutional-convention Mum Bett (把写在纸上的话对准写它的人) + enlightenment (进步话语内部的排斥)
//
// defaultLens = 'ida-b-wells-receiving-end' (受影响者优先 pattern: 黑人女性 + 被运动主流排斥一方 + 真实事件 + 跨 lens「站哪一排」对位)
//
// STRUCTURE SPEC (long-arc, per A9 + 任务 brief):
//   - 12 nodes per lens (long-arc)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N11 synthesis)
//   - N1 hook / N2-N3 setup / N4 personal peak / story (1848 Seneca Falls → 1920, time-jumps) / N6 mid anchor = cross-lens micro-detail
//   - 倒数第三节 (N10) = zoom-out + topic connection
//   - 倒数第二节 (N11) = synthesis「一种说法/另一种说法/想30秒」expectsRealAnswer:true
//   - 末节 (N12) = single closing meta write (evaluation + transfer) expectsRealAnswer:true
//   - expectsRealAnswer: ONLY N11 + N12 = true (exactly 2 per lens); all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Elizabeth Cady Stanton (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var cadyStantonLens = {
  id: 'cady-stanton',
  name: 'Elizabeth Cady Stanton',
  nameCn: '伊丽莎白·卡迪·斯坦顿',
  role: 'perpetrator-actor',
  perspectiveTag: 'suffrage-founder',
  icon: '✒️',
  description: {
    cn: '她是 1848 年 7 月围坐在 Seneca Falls 一张客厅茶桌旁的几个女人之一，仿照《独立宣言》，往那句最有名的话里加了「和女人」两个字,,「所有男人和女人生而平等」。在那个年代，已婚女人法律上几乎不算一个独立的人：钱归丈夫，孩子归丈夫，她不能签合同、不能上大学、不能投票。这一遍让你跟她一起坐在那张茶桌旁：她正要在这份宣言里写下当时最离经叛道的一句,,女人，应该有投票权,,你看她这一支笔，是怎么开了一场要打 72 年的仗的第一枪。',
    en: 'She is one of the few women sitting around a parlor tea table in Seneca Falls in July 1848, modeling a declaration on the Declaration of Independence and inserting two words into its most famous line, so that it read "all men and women are created equal." In that era a married woman was barely a separate person in law: her money belonged to her husband, her children belonged to her husband, she could not sign a contract, could not attend college, could not vote. This pass puts you at the tea table with her as she is about to write into this declaration the most scandalous line of all, that women should have the right to vote, and you watch how this one pen of hers fires the first shot of a fight that will last seventy-two years.',
  },
  storyboard: [
    {
      id: 'ecs-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1848 年 7 月，纽约州一个叫 Seneca Falls 的小镇。一张客厅里的茶桌旁，我和几个女人围坐着，写一份谁也没写过的东西。\n\n我们要仿照《独立宣言》，写一份属于女人的宣言。开头几乎照抄那句最有名的话——但我加了两个字：「所有男人和女人生而平等。」\n\n这两个字，在 1848 年，是炸药。\n\n那个年代，一个结了婚的女人，法律上几乎不算一个独立的人：她的钱归丈夫，她的孩子归丈夫，她不能签合同、不能上大学、不能投票。\n\n我是 Elizabeth Cady Stanton（伊丽莎白·卡迪·斯坦顿）。我要在这份宣言里，写下当时最离经叛道的一条：女人，应该有投票权。\n\n这一遍，你坐进我这个位置，看一场要打 72 年的仗，是怎么从一张茶桌上开第一枪的。',
        en: 'July 1848, a small town in New York called Seneca Falls. Around a tea table in a parlor, a few women and I sat writing something no one had written before.\n\nWe would model a declaration of our own, for women, on the Declaration of Independence. The opening almost copied its most famous line, but I added two words: "all men and women are created equal."\n\nThose two words, in 1848, were dynamite.\n\nIn that era, a married woman was barely a separate person in law: her money belonged to her husband, her children belonged to her husband, she could not sign a contract, could not attend college, could not vote.\n\nI am Elizabeth Cady Stanton. Into this declaration I would write the most scandalous line of all: that women should have the right to vote.\n\nThis pass puts you in my seat, watching how a fight that would last 72 years fired its first shot from a single tea table.',
      },
      deliverGoal: 'N1 hook — 1848.7 Seneca Falls 茶桌 + 仿《独立宣言》写《情感宣言》加「和女人」+ 已婚女性法律上几乎不算人 (钱孩子归丈夫/不能签约上大学投票) + Stanton 自我介绍 + 写下最离经叛道一条「女人应有投票权」+ 72 年的仗第一枪',
      engagementHook: '我在《独立宣言》那句话里，加了「和女人」两个字——在 1848 年，这是炸药。你觉得，往一句旧话里加几个字，真的能改变什么吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么变成这样一个人的。\n\n我 1815 年生在纽约州 Johnstown，父亲是法官。小时候我常溜进父亲的书房，听那些来求助的女人哭诉：丈夫死了，财产却全归了夫家的男人；丈夫酗酒打人，她带着孩子也无处可逃——因为法律上，孩子是丈夫的。\n\n有一次我气得跟父亲说，我要把这些不公平的法律从书里剪掉。父亲叹气说：剪掉没用，孩子，要改的是写法律的人——那得靠你们这些女人自己去争。\n\n这句话，我记了一辈子。\n\n我比同时代多数女人读得多——逻辑、希腊文、法律我都学过。可读得再多，我还是不能投票，不能决定写法律的人是谁。\n\n你看出那个荒诞了吗：一个懂法律的女人，却被法律当成不完整的人。这个荒诞，是我后来一切行动的起点。',
        en: 'First, how I became this kind of person.\n\nI was born in 1815 in Johnstown, New York; my father was a judge. As a child I often slipped into his study and heard the women who came for help weep out their stories: a husband dead and his property all gone to the men of his family; a husband who drank and beat her, and she with her children nowhere to flee, because in law the children were his.\n\nOnce, furious, I told my father I would cut these unjust laws out of his books. He sighed and said: cutting them out does no good, child; what must change are the people who write the laws, and that you women will have to fight for yourselves.\n\nThose words I kept my whole life.\n\nI read more than most women of my time, logic, Greek, law. But however much I read, I still could not vote, could not have a say in who wrote the laws.\n\nDo you see the absurdity: a woman who understands the law, counted by the law as an incomplete person. That absurdity was the starting point of everything I did later.',
      },
      deliverGoal: 'N2 setup — Stanton 出身 (1815 纽约 Johnstown/父亲法官) + 童年溜进书房听求助女人哭诉 (财产归夫家/孩子归丈夫无处逃) + 父亲「要改写法律的人靠你们女人争」+ 她读得多 (逻辑希腊文法律) 却不能投票 + 荒诞: 懂法律的女人被法律当不完整的人',
      engagementHook: '我懂法律，却被法律当成不完整的人，连决定「谁来写法律」都不行。当你比规则的制定者更懂规则，却没资格改它——你会怎么想？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我不是一个人想到这件事的。\n\n1840 年，我跟丈夫去伦敦参加一个反奴隶制大会。我满怀热情去了——结果会议不让女人坐进正厅，把我们这些女代表赶到楼上一个帘子后面，只许听，不许说话。\n\n一群在为「黑奴的自由」奔走的男人，转头把女人挡在门外。这一幕烧进了我心里。\n\n就在那个帘子后面，我认识了 Lucretia Mott（卢克丽霞·莫特），一个比我大、口才极好的废奴活动家。我俩当场约定：回美国，一定要为女人自己开一场会。\n\n这个约定，拖了 8 年。我结婚、生孩子、搬到 Seneca Falls，被家务困住，几乎窒息。\n\n1848 年夏天，Mott 来附近做客。我们重提那个约定。这一次，我们说干就干——只用了几天，就定下日子、登了广告。\n\n一场改变历史的会，常常就是从一句「我们说好的，别忘了」开始的。',
        en: 'I did not come to this alone.\n\nIn 1840 my husband and I went to London for a great anti-slavery convention. I went full of hope, and the convention would not seat women in the main hall. They herded us women delegates upstairs behind a curtain, allowed to listen but not to speak.\n\nA crowd of men laboring for "the freedom of the enslaved" turned around and shut women out the door. That scene burned itself into me.\n\nBehind that curtain I met Lucretia Mott, an older abolitionist with a gift for speaking. The two of us agreed on the spot: back in America, we would hold a meeting for women ourselves.\n\nThat agreement waited eight years. I married, bore children, moved to Seneca Falls, hemmed in by housework until I could barely breathe.\n\nIn the summer of 1848 Mott came visiting nearby. We took up the old promise again. This time we acted at once, and in only a few days we set a date and ran a notice.\n\nA meeting that changes history often begins with a single line: "we promised each other, do not forget."',
      },
      deliverGoal: 'N3 setup — 1840 伦敦反奴隶制大会女代表被赶到帘子后面只听不许说 (废奴男人把女人挡门外烧进心里) + 认识 Lucretia Mott 约定回美国为女人开会 + 拖 8 年 (结婚生子搬 Seneca Falls 被家务困) + 1848 夏 Mott 来访重提约定几天定下 + 「从一句别忘了开始」',
      engagementHook: '一群为「黑奴自由」奔走的男人，转头把女人赶到帘子后面，只许听不许说。这一幕该让我学到什么——是「他们虚伪」，还是「自由要自己争」？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n会开了。1848 年 7 月 19 日，Seneca Falls 的小教堂挤进了大约 300 人——比你预想的多得多，还来了不少男人。\n\n你写的《情感宣言》（Declaration of Sentiments）一条条念出来：女人该有财产权、受教育权、离婚后监护孩子的权利。每一条，台下都点头。\n\n可你心里清楚，有一条会炸锅——那条要求妇女投票权的决议。连一起筹备的人都劝你删掉：太激进了，会把整场会变成笑话，没人会当真。\n\n你手指压在那一行字上。删，会更安全，会更多人支持；不删，你可能毁掉这一切。\n\n你是这屋里最敢想的人。你知道：投票权才是根。没有它，财产权、教育权随时能被收回——因为决定这些的人里，没有一个女人。\n\n你删，还是不删？',
        en: 'Now you are me.\n\nThe meeting happened. On 19 July 1848, the little chapel in Seneca Falls packed in around 300 people, far more than you expected, and many men came too.\n\nThe Declaration of Sentiments you wrote was read out clause by clause: women should have the right to property, to education, to keep their children after a divorce. At each clause, the hall nodded.\n\nBut you know in your gut that one clause will set off an uproar, the resolution demanding the vote for women. Even those who planned the meeting with you urge you to cut it: too radical, it will turn the whole meeting into a joke, no one will take it seriously.\n\nYour finger presses on that line. Cut it, and it is safer, with more support; keep it, and you may wreck all of this.\n\nYou are the boldest mind in this room. You know: the vote is the root. Without it, the right to property and education can be taken back at any time, because among the people who decide such things, there is not one woman.\n\nDo you cut it, or keep it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1848.7.19 Seneca Falls 小教堂约 300 人 (含男人) + Declaration of Sentiments 逐条念 (财产权/教育权/监护权都点头) + 投票权决议会炸锅连筹备者都劝删 (太激进会成笑话) + 自我拷问: 投票权才是根没它其他随时被收回 + 删还是不删',
      engagementHook: '连同伴都劝我删掉「妇女投票权」那一条——说太激进，会毁掉整场会。删了更安全，留着可能毁掉一切。这一条，你删还是不删？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没删。\n\n投票权那一条交付表决，会场吵翻了。多数女人犹豫，是一个黑人男性站出来，帮我把它推过了关——他就是 Frederick Douglass（弗雷德里克·道格拉斯），逃奴出身的废奴领袖。他在台上说：没有投票权，女人和当年的奴隶一样，是被决定命运的人，不是决定命运的人。\n\n那一条，险险通过。\n\n会后，全国的报纸把我们当笑话骂。有的说我们是「一群想穿裤子的女人」，有的说这是「人类有史以来最荒唐的会议」。\n\n但骂声反而帮了我们——它让全国都知道了：有一群女人，公开要投票权了。\n\n两年后，1850 年，我遇到了改变我一生的搭档：Susan B. Anthony（苏珊·安东尼）。她不爱写作、不爱演讲，但她有钢铁般的组织力。我写檄文，她跑遍全国办分会、收签名。\n\n人们后来说：我点燃火，她让火烧遍全国。我们俩绑在一起，干了 50 年。',
        en: 'I did not cut it.\n\nThe vote clause came to a vote and the hall erupted. Most of the women hesitated, and it was a Black man who stood up and helped push it through, Frederick Douglass, an escaped-slave abolitionist leader. He said from the platform: without the vote, a woman is like the slave of old, one whose fate is decided, not one who decides.\n\nThat clause passed, barely.\n\nAfter the meeting, newspapers across the country mocked us. Some called us "a pack of women who want to wear trousers," some called it "the most ridiculous meeting in human history."\n\nBut the mockery helped us. It told the whole country that a group of women had openly demanded the vote.\n\nTwo years later, in 1850, I met the partner who changed my life: Susan B. Anthony. She did not love writing or speaking, but she had an iron gift for organizing. I wrote the manifestos; she crossed the country founding chapters and gathering signatures.\n\nPeople later said: I lit the fire, she spread it across the country. The two of us, bound together, worked at it for 50 years.',
      },
      deliverGoal: 'N5 story — 投票权条款险通过 (Frederick Douglass 逃奴废奴领袖站出来帮推过/「没投票权女人像奴隶」) + 全国报纸当笑话骂反而帮了运动 + 1850 遇 Susan B. Anthony (钢铁组织力/Stanton 写檄文她办分会收签名) +「我点火她让火烧遍全国」绑一起 50 年',
      engagementHook: '是一个逃奴出身的黑人男人 Frederick Douglass，帮我把「妇女投票权」推过了关。一个为自由争过的人，更懂另一个人想要自由——你觉得这种「跨界的盟友」靠得住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '快进到内战之后。这一段，是我一生最有争议、也最难为自己辩护的地方。\n\n1865 年内战结束，奴隶制废除了。接着国家要修宪：1870 年的 15th Amendment（第 15 修正案）规定，不得因「种族、肤色、曾被奴役」剥夺投票权——也就是说，黑人男性要拿到选票了。\n\n但这条修正案，没有给女人。任何女人。\n\n我和 Anthony 当场翻脸反对。我心里那个算盘是：我们为废奴出了几十年力，凭什么黑人男性先拿到选票，受过教育的白人女性反而排在后面？\n\n我说出了让我后世蒙羞的话——我用过侮辱性的字眼，暗示「无知的」黑人男性、外来移民男性，不该排在「有文化的」白人女性前面。\n\n你看见我做的事了吗：1848 年我借着「人人平等」开第一枪；1869 年，为了让「我这样的人」先拿到票，我把另一群人推到了我后面。\n\n（同一个「先给谁投票权」的问题，换到那个被推到队尾的人那一遍，你会看见它有多扎人。）',
        en: 'Fast-forward to after the Civil War. This stretch is the most contested of my life, and the hardest for me to defend.\n\nIn 1865 the war ended and slavery was abolished. Then the nation amended its Constitution: the 15th Amendment of 1870 said the vote could not be denied on grounds of "race, color, or previous condition of servitude," meaning Black men would get the ballot.\n\nBut that amendment gave nothing to women. Any women.\n\nAnthony and I turned against it on the spot. The reckoning in my mind was this: we had labored for abolition for decades, so why should Black men get the ballot first while educated white women were left behind?\n\nI said words that shame me before later generations. I used insulting terms, implying that "ignorant" Black men and immigrant men should not stand ahead of "cultured" white women.\n\nDo you see what I did: in 1848 I fired the first shot in the name of "all are equal"; in 1869, to put "people like me" first, I pushed another group behind me.\n\n(That same question, "who gets the vote first," you will see how sharply it cuts when you switch to the pass of the one pushed to the back of the line.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 内战后 1870 15th Amendment 给黑人男性投票权但不给任何女性 + Stanton/Anthony 反对 (我们为废奴出力凭什么黑人男性先拿票/白人女性排后) + 她说出种族歧视言论 (侮辱性字眼/无知黑人移民男性 vs 有文化白人女性) + 1848 借平等开枪 vs 1869 把别人推队尾 + 桥到 Ida B. Wells (被推队尾)',
      engagementHook: '1848 年我借「人人平等」开第一枪；1869 年，为了让「我这样的人」先拿到票，我把黑人男性推到了我后面。同一个人，怎么会同时做这两件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '这场争吵，把整个运动劈成了两半。\n\n1869 年，运动分裂成两个组织：我和 Anthony 办的一个，坚持「要投票权就只为女人争，不接受只给黑人男性的修正案」；另一个温和派（领头的有 Lucy Stone）则说：黑人男性先拿到票也是进步，不该挡，女人的票慢慢来。\n\n两派吵了 20 年，谁也不理谁。\n\n这 20 年里，运动几乎原地踏步。我现在回头看，分裂伤的是我们自己。\n\n1890 年，老了的我们终于和解，两派合并成一个全国组织（NAWSA）。我被推为第一任主席——更多是象征，真正在全国跑的是 Anthony 那一代后辈。\n\n但和解是有代价的。为了拉拢南方的白人女性入会，合并后的运动越来越不愿碰种族问题——它默许了一种说法：给白人女性选票，可以帮白人「稳住」南方的政治。\n\n我开的那一枪，瞄准的是「人人平等」。可这场仗打到后来，「人人」里的「人」，悄悄缩水了。',
        en: 'That quarrel split the whole movement in two.\n\nIn 1869 the movement broke into two organizations: the one Anthony and I ran, holding that "if we fight for the vote, we fight only for women, and will not accept an amendment that gives it to Black men alone"; and a moderate wing (led by figures like Lucy Stone) that said: Black men getting the ballot first is progress too, it should not be blocked, and women\'s vote can come in time.\n\nThe two wings quarreled for 20 years, neither speaking to the other.\n\nIn those 20 years the movement nearly stood still. Looking back now, the split wounded only ourselves.\n\nIn 1890, grown old, we finally reconciled and merged into one national organization (NAWSA). I was made its first president, more as a symbol; the ones really crossing the country were Anthony\'s younger generation.\n\nBut reconciliation had a price. To draw in white women of the South, the merged movement grew ever more unwilling to touch the question of race. It quietly accepted an argument: giving white women the vote could help white people "hold" the politics of the South.\n\nThe shot I fired aimed at "all are equal." But by the time this fight wore on, the "all" in "all people" had quietly shrunk.',
      },
      deliverGoal: 'N7 story — 1869 运动分裂两组织 (Stanton/Anthony 只为女人争不接受只给黑人男性的修正案 vs Lucy Stone 温和派黑人男性先拿票也是进步) + 吵 20 年原地踏步 + 1890 和解合并 NAWSA (Stanton 首任主席象征) + 和解代价: 为拉南方白人女性越来越不碰种族/默许给白人女性票帮白人稳住南方政治 +「人人缩水」',
      engagementHook: '为了拉拢南方白人女性，运动越来越不愿碰种族问题。我开的那一枪瞄准「人人平等」，可打到后来,「人人」悄悄缩了水。为了赢，把队伍里的一部分人牺牲掉——值得吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1902 年就死了，没等到那一天。\n\n但我留下的那支笔，没停。我晚年写了一部很有争议的书《妇女圣经》，逐句批评宗教经文里贬低女人的部分——又一次把整个运动吓了一跳。到死，我都是那个最敢说、也最招骂的人。\n\n我也得诚实告诉你一件事：我争的「投票权」，从一开始，心里装的主要是「我这样的女人」——白人、受过教育、有产之家的女人。\n\n年轻时我没那么想。1848 年那张茶桌上，我真信「所有男人和女人」。可一旦这变成一场要争输赢的政治仗，我的「所有女人」就开始挑人了。\n\n这是我留给后人最难看的一笔，也是最该被看见的一笔：一个先驱，可以一边把门撞开，一边又用身体把门口堵住，不让另一些人进来。\n\n勇敢和狭隘，在我身上，从来不是两个人。是同一个我。',
        en: 'I died in 1902 and did not live to see that day.\n\nBut the pen I left behind did not stop. In my old age I wrote a deeply controversial book, The Woman\'s Bible, criticizing line by line the passages of scripture that demeaned women, frightening the whole movement once more. To my death I was the one who dared say the most, and drew the most abuse.\n\nI must also be honest with you about one thing: the "vote" I fought for, from the start, held mainly "women like me" in my heart, white, educated women of propertied homes.\n\nWhen I was young I did not think that way. At that tea table in 1848 I truly believed in "all men and women." But once it became a political fight to be won or lost, my "all women" began to pick and choose.\n\nThis is the ugliest mark I leave to later generations, and the one most deserving to be seen: a pioneer can shove a door open and, with her own body, block the doorway so that certain others cannot come in.\n\nCourage and narrowness, in me, were never two people. They were the same me.',
      },
      deliverGoal: 'N8 story — Stanton 1902 死没等到 + 晚年写争议书《妇女圣经》批评经文贬低女人 (到死最敢说最招骂) + 诚实承认: 她争的投票权主要装着「我这样的女人」(白人受教育有产) + 1848 茶桌真信所有女人但变政治仗后挑人 + 「先驱可以撞开门又用身体堵住门」+ 勇敢和狭隘是同一个我',
      engagementHook: '我可以一边把门撞开，一边又用身体把门口堵住，不让另一些人进来。一个先驱身上的勇敢和狭隘，是同一个人——这让你更想原谅我，还是更难原谅？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没看到的那一天，1920 年来了。\n\n那一年，19th Amendment（第 19 修正案）通过：投票权不得因「性别」被剥夺。从 1848 年我那张茶桌，到 1920，整整 72 年。我开第一枪时 33 岁，修正案通过时，我已经死了 18 年。\n\n这条修正案的文字，几乎照搬了 1870 年那条我反对过的 15th Amendment，只把「种族」换成了「性别」。历史跟我开了个意味深长的玩笑。\n\n还要说清楚：1920 年女人拿到票，纸面上是「所有女人」。可在南方，黑人女性和黑人男性一样，被人头税、识字测验、暴力挡在投票站外。她们要再等 45 年，到 1965 年的投票权法（Voting Rights Act），才真正能投上票。\n\n所以「妇女拿到选举权」这句话，对不同的女人，兑现的时间差了快半个世纪。\n\n一句写进宪法的「不得因性别剥夺」，对谁先算数、对谁要再等很久，这才是这场仗真正复杂的地方。',
        en: 'The day I did not see came in 1920.\n\nThat year the 19th Amendment passed: the vote could not be denied on grounds of "sex." From my tea table in 1848 to 1920 was a full 72 years. I was 33 when I fired the first shot; by the time the amendment passed, I had been dead 18 years.\n\nThe words of that amendment almost copied the 15th Amendment of 1870 that I had opposed, only swapping "race" for "sex." History played a pointed joke on me.\n\nAnd this must be made plain: in 1920 women got the vote, on paper, "all women." But in the South, Black women, like Black men, were kept from the polls by poll taxes, literacy tests, and the threat of violence. They would wait another 45 years, until the Voting Rights Act of 1965, before they could truly cast a ballot.\n\nSo the sentence "women won the vote" was cashed, for different women, almost half a century apart.\n\nA line written into the Constitution, "shall not be denied on account of sex," who it counted for first and who had to wait long, that is the true complexity of this fight.',
      },
      deliverGoal: 'N9 story — 1920 19th Amendment 通过 (不得因性别剥夺投票权) + 1848-1920 整 72 年 (Stanton 开枪 33 岁/修正案通过时她死了 18 年) + 文字几乎照搬她反对过的 15th Amendment 把种族换性别 + 但南方黑人女性被人头税识字测验暴力挡 (再等到 1965 Voting Rights Act) +「妇女拿到票」对不同女人兑现差近半世纪',
      engagementHook: '1920 年通过的修正案，文字几乎照搬了我当年反对过的那一条——只把「种族」换成「性别」。历史跟我开了个玩笑。你觉得这是讽刺，还是某种公正？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看我站在一条更长的线上。\n\n往前数，我不是第一个为女权说话的人。早我半个世纪，法国大革命时一个叫 Gouges 的女人写过《女权宣言》，要求女人和男人一样有公民权——结果她被同一场革命送上了断头台。（你跑过 enlightenment 那段历史，会认得她。）她和我隔着大西洋、隔着 50 年，可我们撞上的是同一堵墙：高喊「人人平等」的革命，把女人挡在「人人」之外。\n\n往后看，我那一枪的回声，一直传到今天。1920 年只是「投票权」这一仗赢了。女人同工同酬、能不能决定自己的身体、能不能当领导——这些仗，到你这一代还在打。\n\n而我留下的那个污点——「为我这样的人争权，却把别人推到后面」——也一直是后来每一场进步运动要警惕的东西：当你为某个群体争公平，你有没有顺手踩着另一个更弱的群体往上爬？\n\n这个问题，从 Gouges 到我，到今天，没人能一劳永逸地答完。',
        en: 'Pull the lens back and see me standing on a longer line.\n\nCount backward: I was not the first to speak for women\'s rights. Half a century before me, during the French Revolution, a woman named Gouges wrote a Declaration of the Rights of Woman, demanding that women have citizenship like men, and was sent to the guillotine by that same revolution. (Run the enlightenment topic and you will recognize her.) She and I, an ocean and 50 years apart, ran into the same wall: a revolution crying "all are equal" that shut women out of the "all."\n\nLook forward: the echo of my shot carries to this day. 1920 won only the fight for the vote. Equal pay, whether a woman may decide about her own body, whether she may lead, these fights are still being fought in your generation.\n\nAnd the stain I left, "fighting for rights for people like me while pushing others to the back," has stayed a thing every later movement for progress must guard against: when you fight for fairness for one group, are you stepping on a weaker group on your way up?\n\nThat question, from Gouges to me to today, no one can answer once and for all.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — Stanton 站长线上 + 往前: Gouges 法国大革命《女权宣言》被同场革命送上断头台 (enlightenment Topic 锚/同一堵墙: 喊人人平等的革命把女人挡在人人外) + 往后: 1920 只赢投票权一仗 (同工同酬/身体自主/领导仍在打) + 她留的污点: 为某群体争权却踩更弱群体往上 = 后来运动要警惕的',
      engagementHook: '从 Gouges 到我，再到今天——「为某个群体争公平，却顺手踩着更弱的群体往上爬」，这个问题没人能一劳永逸答完。你身边，有没有见过类似的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'ecs-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是真正的奠基者。1848 年没人敢提妇女投票权时，是我把它写进了《情感宣言》，顶着全国的嘲笑没删。我用一支笔点燃了一场打 72 年的仗。没有我那张茶桌，可能就没有 1920 年那条修正案。先驱总是孤独的、犯错的，但门是她们撞开的。\n\n另一种说法：我是把门口堵住的人。同一个我，1869 年为了让白人女性先拿到票，公开反对给黑人男性投票，说出种族歧视的话，还默许运动用「白人女性的票能稳住南方」去拉票。我为「我这样的人」争来的平等，是踩着另一群人换来的。\n\n这两边不是「功劳加污点」。是同一种力量的两面——那股「为我们争到底」的劲，既能撞开门，也能把别人关在门外。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the true founder. When no one in 1848 dared raise women\'s suffrage, it was I who wrote it into the Declaration of Sentiments and, against the mockery of the whole country, would not cut it. I lit, with a single pen, a fight that lasted 72 years. Without my tea table there might have been no amendment in 1920. Pioneers are always lonely and err, but it is they who shove the door open.\n\nThe other view: I was the one who blocked the doorway. The same me, in 1869, to put white women first, publicly opposed the vote for Black men, said words of racial contempt, and let the movement campaign on "white women\'s votes can hold the South." The equality I won for "people like me" was bought by stepping on another group.\n\nThese are not "credit plus stain." They are two faces of one force, that drive to "win for us at all costs," which can shove the door open and can also shut others out.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (真正奠基者/1848 没人敢提她写进顶嘲笑没删/一支笔点燃 72 年仗/没她可能没 1920) / 另一种说法 (把门口堵住的人/1869 反对黑人男性投票说种族歧视话/默许白人女性票稳南方/平等踩着别人换) / 同一种力量两面 / 想 30 秒',
      engagementHook: '真正的奠基者，和把门口堵住的人——是同一个我，同一股力量的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ecs-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个先驱？\n\n一个人，既写下了「所有男人和女人生而平等」、顶着全国嘲笑为女人争了一辈子，又在关键时刻为了「自己人」先赢，把更弱的一群推到了后面。这两件事不是分开的两个我，是同一支笔写下的。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有这样的事：一群人在争一件正当的好事——班级的某个权利、某个群体的公平——可争着争着，把更没声音的另一些人忘了，甚至挡在了外面？\n\n那时候，你会只顾「我们这边赢」，还是会停下来问一句：我们争的「平等」，有没有把谁落在了门外？',
        en: 'Having walked my whole life, how would you judge a pioneer like this?\n\nOne person, who wrote "all men and women are created equal" and fought a lifetime for women against a whole country\'s mockery, and who, at the decisive moment, to let "her own people" win first, pushed a weaker group to the back. These are not two separate selves; they were written by the same pen. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there something like this: a group fighting for something rightful and good, a class\'s right, a group\'s fairness, that, as the fight goes on, forgets the more voiceless others, even shuts them out?\n\nWhen that happens, will you care only that "our side wins," or will you stop and ask one question: in the "equality" we are fighting for, have we left anyone outside the door?',
      },
      deliverGoal: 'N12 close (evaluation + transfer) — 评价先驱 (写下所有男女平等顶嘲笑争一辈子 vs 为自己人先赢把更弱的推后 → 同一支笔写下/同一天平怎么称) + transfer「今天你身边一群人争正当好事却把更没声音的人忘了挡门外」+ 你会只顾我们赢还是停下问平等有没有把谁落门外',
      engagementHook: '我写下「所有男人和女人平等」，又为了「自己人」先赢把更弱的人推到后面——同一支笔写的。你会怎么评价这样一个先驱？今天你身边那件「争着争着把更没声音的人忘了」的事，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Frances Ellen Watkins Harper (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var francesHarperLens = {
  id: 'frances-harper',
  name: 'Frances Ellen Watkins Harper',
  nameCn: '弗朗西丝·埃伦·沃特金斯·哈珀',
  role: 'lonely-mediator',
  perspectiveTag: 'two-front-mediator',
  icon: '📖',
  description: {
    cn: '她是 1866 年 5 月那个上台对一屋子为「权利」奔走的人说话的女人,,这屋里少有的两样都占的人：她是女人，她也是黑人。她开口第一句让很多人愣住：「你们让我们女人去投票，可你们不让我们黑人安全地活着。」台下坐着刚说完「女人受的苦最深」的白人女权领袖们。这一遍让你站在她这个最难站的位置：在她身上，女人和黑人分不开，她没法只挑一样来受苦，也没法只挑一样来争,,两边都想拉她站队，可她哪一边都不能丢。',
    en: 'She is the woman who in May 1866 took the stage before a hall of people laboring for "rights," one of the few in that room who was both: a woman and a Black person. Her first line made many of them freeze: "You let us women go and vote, but you will not let us Black people live in safety." In the audience sat white women\'s-rights leaders who had just said "women suffer the deepest." This pass puts you in her hardest place to stand: in her, "woman" and "Black" cannot be pulled apart, she cannot pick only one to suffer as, nor pick only one to fight for, and both sides want to recruit her, yet she can drop neither.',
  },
  storyboard: [
    {
      id: 'feh-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1866 年 5 月，纽约。一个大礼堂里，全是为「权利」奔走的人——为黑人争权的、为女人争权的，刚打完一场要让所有人自由的内战，大家本该是一家人。\n\n我站上台。我是这屋里少有的，两样都占的人：我是女人，我也是黑人。\n\n我开口说的第一句，让很多人愣住：「你们让我们女人去投票，可你们不让我们黑人安全地活着。」\n\n台下有白人女权领袖，刚说完「女人受的苦最深」。我得当着她们的面提醒：在我身上，「女人」和「黑人」分不开。我没法只挑一样来受苦，也没法只挑一样来争。\n\n我是 Frances Harper（弗朗西丝·哈珀）。这一遍，你坐进我这个位置——一个两边都想拉你站队、可你哪一边都不能丢的人。\n\n这是全世界最难站的一个位置。',
        en: 'May 1866, New York. In a great hall, everyone there labored for "rights," for Black people, for women, just out of a war to make all people free, and they ought to have been one family.\n\nI took the stage. I was one of the few in that room who was both: I was a woman, and I was Black.\n\nMy first line made many of them freeze: "You let us women go and vote, but you will not let us Black people live in safety."\n\nIn the audience sat white women\'s-rights leaders who had just said "women suffer the deepest." I had to remind them, to their faces: in me, "woman" and "Black" cannot be pulled apart. I cannot pick only one to suffer as, nor pick only one to fight for.\n\nI am Frances Harper. This pass puts you in my seat, a person both sides want to recruit, yet who can drop neither side.\n\nIt is the hardest place in the world to stand.',
      },
      deliverGoal: 'N1 hook — 1866.5 纽约大礼堂 (为黑人/为女人争权的人刚打完内战本该一家) + Harper 上台两样都占 (女人+黑人) + 第一句让人愣住「让我们女人投票却不让我们黑人安全活着」+ 在她身上女人和黑人分不开 + Harper 自我介绍 + 这一遍两边都拉你站队哪边都不能丢 + 最难站的位置',
      engagementHook: '在我身上，「女人」和「黑人」分不开——我没法只挑一样来受苦，也没法只挑一样来争。当别人逼你「二选一」，可你本来就是两样都是，你怎么办？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么站在那个夹缝里。\n\n我 1825 年生在马里兰州 Baltimore，是个自由黑人——注意，是「自由」黑人，不是奴隶。马里兰是蓄奴州，可我家是自由的。三岁那年父母双亡，我成了孤儿，由当老师的叔叔养大。\n\n叔叔开了一所给自由黑人孩子的学校。我在那儿学会了读书写字——这在当时，对一个黑人孩子，是稀罕到近乎危险的事。很多州明令禁止教黑人识字。\n\n我从小就活在一种奇怪的中间地带：我是自由的，可我随时可能被当成逃奴抓走；我识字、写诗，可法律照样把我当二等人。\n\n这种「明明自由、又处处不自由」的滋味，逼我很早就看清一件事：自由不是一张纸上写了就有的。它得有人替你护着，否则随时会被收回。\n\n这个认知，后来成了我一辈子的立场。',
        en: 'First, who I am, so you understand why I stood in that crack.\n\nI was born in 1825 in Baltimore, Maryland, a free Black, note, "free," not enslaved. Maryland was a slave state, but my family was free. At three I lost both parents and became an orphan, raised by an uncle who was a teacher.\n\nHe ran a school for free Black children. There I learned to read and write, a thing so rare for a Black child then as to be nearly dangerous. Many states expressly forbade teaching Black people to read.\n\nFrom childhood I lived in a strange middle ground: I was free, yet I could be seized as a runaway slave at any time; I could read and write poems, yet the law still counted me a second-class person.\n\nThat taste of "free and yet unfree everywhere" forced me, early, to see one thing clearly: freedom is not something you have just because it is written on a piece of paper. Someone has to guard it for you, or it can be taken back at any time.\n\nThat understanding became the stance of my whole life.',
      },
      deliverGoal: 'N2 setup — Harper 出身 (1825 马里兰 Baltimore 自由黑人非奴隶/马里兰是蓄奴州但家自由/三岁孤儿叔叔养) + 叔叔办自由黑人孩子学校学读写 (黑人识字稀罕近危险/很多州禁教黑人识字) + 中间地带 (自由却随时被当逃奴抓/识字却被当二等人) +「自由不是纸上写了就有要人护着」成立场',
      engagementHook: '我是自由的，可随时可能被当逃奴抓走；我识字写诗，可法律照样把我当二等人。「明明自由、又处处不自由」——你能想象这种滋味吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我是怎么走上台的？靠一张嘴和一支笔。\n\n二十多岁起，我开始公开演讲、写诗反对奴隶制。在那个年代，一个黑人女性站上讲台对着满场白人说话，本身就要冒被羞辱、被攻击的风险。可我口才太好了——好到很多人专程来听「那个黑人女诗人」，结果被我讲哭。\n\n1854 年我出了一本诗集，卖了上万册——在当时是惊人的数字。我成了全国最有名的黑人作家之一，靠稿费和讲费养活自己，不靠任何人施舍。\n\n我把挣来的钱，一部分偷偷送进地下铁路（Underground Railroad），帮逃奴往北逃。我用我的名声和笔，做了一个识字、自由、有平台的黑人女性能做的一切。\n\n所以你要明白：1866 年我站上那个台，不是去求白人女权领袖「带上我」。我是带着自己的声望、自己的读者、自己几十年的战绩去的。\n\n我有资格站在那儿，提醒她们：你们漏了谁。',
        en: 'How did I come to the stage? By a tongue and a pen.\n\nFrom my twenties I began to lecture in public and write poems against slavery. In that era, a Black woman standing on a platform to address a hall full of white people risked insult and attack by the act itself. But I spoke too well, so well that many came on purpose to hear "that Black woman poet" and ended up weeping at my words.\n\nIn 1854 I published a book of poems that sold over ten thousand copies, a startling number then. I became one of the most famous Black writers in the country, supporting myself on royalties and lecture fees, beholden to no one\'s charity.\n\nPart of the money I earned I quietly sent into the Underground Railroad, to help the enslaved flee north. With my name and my pen I did everything a literate, free Black woman with a platform could do.\n\nSo understand: when I took that stage in 1866, I did not come to beg the white women\'s leaders to "bring me along." I came with my own standing, my own readers, my own decades of work.\n\nI had the standing to be there, and to remind them: you have left someone out.',
      },
      deliverGoal: 'N3 setup — Harper 二十多岁起公开演讲写诗反奴隶制 (黑人女性上台对白人讲话冒被羞辱攻击风险/口才好到讲哭人) + 1854 诗集卖上万册成全国最有名黑人作家 (靠稿费讲费养自己不靠施舍) + 把钱偷偷送进地下铁路帮逃奴 + 1866 上台不是求白人带上她是带着声望读者战绩 + 有资格提醒她们漏了谁',
      engagementHook: '我站上那个台，不是去求白人女权领袖「带上我」——我是带着自己的声望、读者、几十年战绩去的。「有资格站在那儿」和「被恩准站在那儿」，差在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1866 年，那场大会要成立一个新组织，叫「美国平权协会」（AERA）——口号很美：同时为黑人和女人争投票权，两条战线合成一条。\n\n你站上台，本该顺着这股热情说几句团结的漂亮话。可你心里清楚一件刺人的事：这股「团结」是脆的。\n\n你身边的白人女权领袖，受的苦是真的：她们被丈夫管钱、不能投票。可你受的苦，多一层——你们黑人刚从奴役里出来，南方的黑人正在被私刑、被烧屋、被赶尽杀绝。对你来说，「能不能投票」排在「能不能活着」后面。\n\n你要不要把这层说破？\n\n说破，你会扫了全场的兴，可能得罪台下每一个本该是盟友的人。不说破，你就默认了一件假话：所有女人受的苦都一样。\n\n而你最清楚：不一样。一个白人女人争来的票，挡不住一个黑人女人家门口的火。\n\n你说，还是不说？',
        en: 'Now you are me.\n\nIn 1866 that convention was founding a new organization, the American Equal Rights Association (AERA), with a beautiful slogan: fight for the vote for Black people and for women at once, two fronts merged into one.\n\nYou take the stage and ought, riding this enthusiasm, to say a few fine words of unity. But you know a stinging thing in your heart: this "unity" is brittle.\n\nThe white women\'s leaders beside you suffer truly: their husbands hold their money, they cannot vote. But your suffering carries one more layer, your people just out of bondage, Black people in the South being lynched, their houses burned, hunted to the death. For you, "can I vote" comes after "can I stay alive."\n\nWill you speak this layer aloud?\n\nSpeak it, and you spoil the mood of the whole hall, perhaps offend every person below who ought to be an ally. Do not speak it, and you have silently accepted a falsehood: that all women suffer the same.\n\nAnd you know best: they do not. A vote won by a white woman cannot put out the fire at a Black woman\'s door.\n\nDo you speak, or not?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1866 大会成立 AERA (口号同时为黑人和女人争投票权两线合一) + Harper 本该说团结漂亮话但知道团结是脆的 + 白人女权领袖苦真但她苦多一层 (黑人刚出奴役南方正被私刑烧屋/能投票排能活着后) + 说破扫兴得罪盟友 vs 不说默认假话「所有女人苦一样」+ 一个白人女人的票挡不住黑人女人门口的火 + 说还是不说',
      engagementHook: '说破，会扫了全场兴、得罪每一个本该是盟友的人；不说，就默认了一句假话——「所有女人受的苦都一样」。在一屋子盟友面前，说出那句让大家不舒服的真话，你敢吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我说了。\n\n我对满场的人说出那句后来被记住的话：「我们都被绑在一起。」（We are all bound up together。）\n\n这句话不是温情的口号，是一记提醒。我的意思是：社会就像一根绳子，你不能只松开自己这一段，让别人那一段继续勒着——只要还有一群人不自由，所有人的自由都是悬着的。\n\n但调停者的真本事，不在喊口号，在「不站队又不放弃任何一边」。\n\n对白人女权领袖，我没否定她们的苦。我说：你们争投票权是对的，我跟你们站在一起。\n\n可同一口气，我提醒她们：别把「女人」想成只有一种女人。当你说「女人最该先拿到票」，你心里那个「女人」，是不是只有白人女性？我这样的黑人女性，算不算在你说的「女人」里？\n\n我不让任何一边舒服。白人女权派嫌我提种族扫兴，一些黑人男性盟友嫌我同时争女权分散力量。两边都觉得我「不够纯」。\n\n这就是调停者的宿命：你想把断开的两头接上，结果两头都嫌你碍事。',
        en: 'I spoke.\n\nTo the whole hall I said the line that would be remembered: "We are all bound up together."\n\nIt was no warm slogan but a warning. I meant: society is like a rope; you cannot loosen only your own length and leave another\'s length still cutting in. As long as one group is unfree, everyone\'s freedom hangs in the balance.\n\nBut a mediator\'s real skill is not in slogans; it is in "taking no side yet abandoning neither side."\n\nTo the white women\'s leaders I did not deny their suffering. I said: you are right to fight for the vote, I stand with you.\n\nYet in the same breath I reminded them: do not imagine "woman" as only one kind of woman. When you say "women should get the vote first," is the "woman" in your heart only the white woman? Does a Black woman like me count among the "women" you mean?\n\nI let no side be comfortable. The white suffragists thought I spoiled things by raising race; some Black male allies thought I scattered our strength by fighting for women\'s rights at the same time. Both sides found me "not pure enough."\n\nThis is the mediator\'s fate: you try to splice the two broken ends together, and both ends find you in the way.',
      },
      deliverGoal: 'N5 story — Harper 说「我们都被绑在一起」(社会像绳子不能只松自己一段/一群人不自由所有人自由都悬着) + 调停真本事是不站队又不放弃任何一边 + 对白人女权: 不否定苦我跟你们站一起但别把女人想成只有白人女性/黑人女性算不算 + 两边都嫌不纯 (白人嫌提种族扫兴/黑人男性嫌分散力量) + 调停者宿命: 接断两头两头都嫌碍事',
      engagementHook: '我对白人女权领袖说「我跟你们站一起」，同一口气又问她们：你心里那个「女人」，只有白人女性吗？又支持、又质疑——比起一味附和，这种「带着提醒的支持」是不是更难、也更真？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我那句「我们都被绑在一起」，很快被一场撕裂检验了。\n\n1869 年，国家要通过 15th Amendment（第 15 修正案）：给黑人男性投票权，但不给任何女人。运动当场分裂。\n\n一边是 Stanton 和 Anthony 那一派，她们反对这条修正案，说不给女人就一起别给，甚至说出贬低黑人男性的话。另一边是温和派，说黑人男性先拿到也是进步，该支持。\n\n这正是「绑在一起的绳子」断开的那一刻：每一边都想先松开自己这一段。\n\n我站在最难的地方。我也想要女人的投票权，我自己就是女人。可我看着南方的黑人正在被屠杀，没法说「黑人男性的票不重要」。\n\n我做了一个让很多白人姐妹失望的选择：支持先通过 15th Amendment。给我的人民先拿到这一点保护，比所有人一起空等，更要紧。\n\n这不是背叛女权。这是我看清了：在那一刻，对我的同胞，命比票急。\n\n（同一个「先给谁投票权」的难题，那个被推到队尾的女人那一遍，会让你看见它最锋利的一面。）',
        en: 'My line, "we are all bound up together," was soon tested by a tearing-apart.\n\nIn 1869 the nation moved to pass the 15th Amendment: the vote for Black men, but for no women. The movement split on the spot.\n\nOn one side were Stanton and Anthony, opposing the amendment, saying if women were not included then no one should be included, even speaking words that demeaned Black men. On the other side were the moderates, saying Black men getting it first was progress too, and should be supported.\n\nThis was the very moment the "rope that bound us together" came apart: each side wanted to loosen its own length first.\n\nI stood in the hardest place. I wanted the vote for women too, I was a woman myself. But I watched Black people being slaughtered in the South, and I could not tell myself "Black men\'s votes do not matter."\n\nI made a choice that disappointed many white sisters: I supported passing the 15th Amendment first. I said, let my people get this bit of protection first; that is more urgent than all of us waiting empty-handed together.\n\nThis was not a betrayal of women\'s rights. It was my seeing clearly: in that moment, for my own people, life was more urgent than the ballot.\n\n(That same hard question, "who gets the vote first," the pass of the woman pushed to the back of the line will show you its sharpest edge.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1869 15th Amendment 给黑人男性投票权不给任何女人运动分裂 (Stanton/Anthony 反对甚至贬低黑人男性 vs 温和派支持) + 绑在一起的绳子断开 (每边想先松自己一段) + Harper 站最难处 (自己是女人但看南方黑人被屠杀没法说黑人男性票不重要) + 选择支持先通过 15th (我的人民先拿保护比一起空等要紧/命比票急非背叛女权) + 桥到 Ida B. Wells (被推队尾)',
      engagementHook: '运动分裂时，我选了支持先给黑人男性投票——让很多白人姐妹失望。我说：在那一刻，对我的同胞，命比票急。当两件正当的事只能先要一件，你怎么排顺序？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '15th Amendment 1870 年通过了。我支持的那一步，成了。\n\n可现实很快教训了我：纸上的票，和投得上的票，是两回事。\n\n黑人男性「法律上」有了投票权。可南方的白人政权，立刻用各种花招把他们挡回去：人头税（poll tax，投票要先交钱）、识字测验（literacy test，故意刁难黑人的考试）、还有最直接的——三 K 党（Ku Klux Klan）的暴力，谁敢去投票就烧谁的房、打谁、甚至杀谁。\n\n我亲眼看着我支持过的那条修正案，在南方变成一张白纸。\n\n这件事，让我对「投票权」这三个字有了比谁都清醒的认识：拿到「写在宪法里的权利」只是第一步。让这个权利在现实里真的能用，是另一场长得多、血腥得多的仗。\n\n所以我没有停在「争到票」上。1870 年代起，我把更多精力放在黑人的教育、戒酒、女性互助上——我知道，一个还不能安全地活着、不能识字谋生的人，光有一张选票，护不住自己。',
        en: 'The 15th Amendment passed in 1870. The step I supported was won.\n\nBut reality soon taught me: a vote on paper and a vote you can actually cast are two different things.\n\nBlack men "in law" had the vote. Yet the white governments of the South at once used every trick to push them back: the poll tax (you had to pay to vote), the literacy test (an exam rigged to fail Black people), and most directly, the violence of the Ku Klux Klan, who would burn the house, beat, even kill anyone who dared go to the polls.\n\nI watched with my own eyes the amendment I had supported become a blank sheet of paper in the South.\n\nThat taught me a clearer understanding of the word "suffrage" than almost anyone: winning a "right written into the Constitution" is only the first step. Making that right actually usable in real life is another fight, far longer and far bloodier.\n\nSo I did not stop at "we won the vote." From the 1870s on I put more of my strength into Black education, temperance, and women\'s mutual aid. I knew that a person who cannot yet live safely or read to earn a living cannot protect herself with a single ballot.',
      },
      deliverGoal: 'N7 story — 15th Amendment 1870 通过 (Harper 支持的成了) + 纸上的票 vs 投得上的票两回事 + 南方白人政权用花招挡回 (poll tax 人头税要先交钱/literacy test 识字测验刁难/Ku Klux Klan 三 K 党暴力烧房打杀) + 她看着支持过的修正案在南方变白纸 + 清醒认识: 拿到宪法里的权利只第一步让它能用是更长更血腥的仗 + 1870s 起转黑人教育戒酒女性互助 (光有选票护不住不能安全活不能识字的人)',
      engagementHook: '我亲眼看着我支持过的修正案，在南方变成一张白纸——黑人「法律上」能投票，可谁去投就烧谁的房。「写在宪法里的权利」和「现实里能用的权利」，差了多远？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1896 年，我已经七十多岁。这一年发生的两件事，刚好照出我一辈子的处境。\n\n这一年，一群黑人女性自己成立了一个全国组织（NACW，全国有色人种妇女协会），我是创始人之一。为什么要自己另起炉灶？因为白人主导的妇女组织常常不欢迎我们，开会甚至要我们坐到后排、单独成组。\n\n也是这一年，最高法院判了 Plessy v. Ferguson 案，判定「隔离但平等」（separate but equal）合宪。这一判，等于给南方的种族隔离盖了合法的章。火车、学校、厕所，黑人白人从此「合法地」分开。\n\n你看出来了吗：就在白人姐妹们离投票权越来越近的同一个年代，我这样的黑人女性，连和白人坐同一节火车都被法律禁止。\n\n我一辈子说「我们都被绑在一起」。可现实是，绳子一次次在种族那一处断开。我没有恨那些先松开自己一段的人，只是不停地、固执地，去把断开的地方，再接上一点。\n\n调停者干的，就是这件没人感谢、又永远干不完的活。',
        en: 'By 1896 I was over seventy. Two things happened that year that exactly mirror the place I stood in all my life.\n\nThat year a group of Black women founded a national organization of their own (the National Association of Colored Women), and I was one of its founders, made a vice president. Why did Black women need to start their own? Because the white-led women\'s organizations often did not welcome us; at meetings we were even asked to sit at the back, set apart in our own group.\n\nThat same year the Supreme Court decided a case, Plessy v. Ferguson, ruling that "separate but equal" was constitutional. That ruling stamped the segregation of the South as lawful. Trains, schools, restrooms, Black and white "lawfully" apart from then on.\n\nDo you see it: in the very era when my white sisters drew nearer to the vote, a Black woman like me was forbidden by law even to sit in the same train car as a white person.\n\nAll my life I said "we are all bound up together." But the reality was that the rope kept breaking, again and again, at the place of race. I did not hate those who loosened their own length first. I only kept on, stubbornly, splicing the broken place back together, a little at a time.\n\nWhat a mediator does is this work no one thanks you for, and that is never finished.',
      },
      deliverGoal: 'N8 story — 1896 Harper 七十多 + 两件事照出处境: 黑人女性自己成立 NACW 全国有色人种妇女协会 (Harper 创始人之一副主席/因白人主导妇女组织不欢迎甚至要坐后排单独成组) + 同年 Plessy v. Ferguson 判「隔离但平等」合宪给南方隔离盖合法章 (火车学校厕所合法分开) + 白人姐妹离投票权越近她连和白人同节火车都被禁 + 绳子在种族处反复断 + 她不恨先松一段的人只固执去接 + 调停者干没人感谢永远干不完的活',
      engagementHook: '就在白人姐妹离投票权越来越近的同一年，我连和白人坐同一节火车都被法律禁止。我没恨那些先松开自己一段的人，只是固执地一次次去把断开的绳子接上。这种「没人感谢、又干不完」的活，你做得下去吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1911 年死了，比那条妇女投票的修正案早走了 9 年。\n\n我没看到 1920。但就算我活到那一天，对我这样的黑人女性，那也不会是真正的庆典。\n\n1920 年 19th Amendment 通过，纸面上「所有女人」都能投票了。可南方的黑人女性，和黑人男性一样，照样被人头税、识字测验、暴力挡在投票站外。我们这群人，要再等 45 年，等到 1965 年的投票权法（Voting Rights Act），才真正投得上票。\n\n这恰好印证了我一辈子在说的那件事：「拿到写在纸上的权利」和「真的能用上这个权利」，中间隔着几十年。\n\n而我那句「我们都被绑在一起」——它没有在 1920 年实现，也没有在我活着的时候实现。它更像一颗埋下的种子。半个世纪后，那些为投票权法、为民权运动上街的人，喊的还是这个意思：只要还有一群人被挡在门外，所有人的「平等」都没真正到手。\n\n我没等到。但我相信我说对了。',
        en: 'I died in 1911, nine years before the amendment for women\'s vote.\n\nI did not see 1920. But even had I lived to that day, for a Black woman like me it would not have been a true celebration.\n\nThe 19th Amendment passed in 1920, and on paper "all women" could vote. But Black women in the South, like Black men, were still kept from the polls by poll taxes, literacy tests, and violence. People like us would wait another 45 years, until the Voting Rights Act of 1965, before we could truly cast a ballot.\n\nThat is exactly the thing I said all my life: between "winning a right on paper" and "actually being able to use it" lie decades.\n\nAnd my line, "we are all bound up together," it was not realized in 1920, nor in my lifetime. It was more like a seed buried. Half a century later, those who took to the streets for the Voting Rights Act, for the civil rights movement, were crying the same meaning: as long as one group is kept outside the door, no one\'s "equality" has truly been won.\n\nI did not live to see it. But I believe I was right.',
      },
      deliverGoal: 'N9 story — Harper 1911 死比妇女投票修正案早 9 年 + 就算活到 1920 对黑人女性也非真庆典 + 19th Amendment 1920 纸面所有女人能投但南方黑人女性同黑人男性被人头税识字测验暴力挡 (再等 45 年到 1965 Voting Rights Act) + 印证她一辈子说的纸上权利 vs 真能用隔几十年 + 「我们都被绑在一起」没在 1920/她生前实现是埋下的种子 (半世纪后民权运动喊同一意思) + 没等到但相信说对了',
      engagementHook: '1920 年「所有女人」能投票了——可像我这样的黑人女性还要再等 45 年。我那句「我们都被绑在一起」，在我活着时没实现，更像一颗埋下的种子。一句没在自己生前兑现的话，还算说对了吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看我站在一条更长的线上。\n\n我那句「我们都被绑在一起」，其实是在替一个更大的道理说话：当一场争取自由的运动，自己内部还分着三六九等，它就还没真正配得上「自由」这两个字。\n\n这个道理，在我之前就有人撞上过。还记得吗——独立战争那代人写下「人人生而平等」，却把被奴役的人算成 3/5 个人；法国大革命喊「人人平等」，却把女人挡在公民之外。每一次有人喊「所有人」，总有一群「人」被悄悄踢出名单。（你跑过费城制宪那段历史，会认得这个老问题。）\n\n我做的，不过是在妇女选举权这场仗里，又一次指出这个老问题：你们说的「所有女人」，到底包不包括我？\n\n这个问题，我没能在我那一代解决。它传给了下一代、再下一代——一直传到今天。每一次有人为「我们」争权，都得重新问一遍：这个「我们」，画得够不够大？有没有把谁，又一次留在了门外？',
        en: 'Pull the lens back and see me standing on a longer line.\n\nMy line, "we are all bound up together," was really speaking for a larger truth: when a movement for freedom still ranks its own members into higher and lower, it has not yet truly earned the word "freedom."\n\nThis truth others had run into before me. Remember, the generation of the war for independence wrote "all are created equal" yet counted enslaved people as three-fifths of a person; the French Revolution cried "all are equal" yet shut women out of citizenship. Every time someone cries "all people," some group of "people" is quietly struck from the list. (Run the constitutional convention topic and you will recognize this old problem.)\n\nWhat I did was simply, in this fight over women\'s suffrage, point at that old problem once more: the "all women" you speak of, does it include me, or not?\n\nThat question I could not solve in my generation. It passed to the next, and the next, all the way to today. Every time someone fights for the rights of "us," they must ask again: is this "us" drawn wide enough? Has anyone, once more, been left outside the door?',
      },
      deliverGoal: 'N10 zoom-out + topic connection — Harper 站长线 +「我们都被绑在一起」替更大道理说话 (运动内部还分三六九等就没配得上自由) + 之前有人撞过: 独立战争写人人平等却算 3/5 + 法国大革命喊平等却挡女人 (constitutional-convention Topic 锚/每次喊所有人总有一群人被踢名单) + Harper 在妇女选举权仗里又一次指出: 你们说的所有女人包不包括我 + 没在她那代解决传到今天 (每次为我们争权得问这个我们够不够大)',
      engagementHook: '每一次有人喊「所有人」，总有一群「人」被悄悄踢出名单——从 3/5 妥协，到法国大革命，到我。每次为「我们」争权，都得重新问：这个「我们」画得够大吗？这个问题，今天还在吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'feh-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是把断裂接起来的人。在一个逼人「要么为黑人、要么为女人」二选一的年代，我拒绝二选一。我用「我们都被绑在一起」提醒所有人：自由不能挑人发。我两边都支持、两边都批评，做了那个最不讨好、却最诚实的角色。没有像我这样的人在中间撑着，运动里的裂缝会更早、更深地把它撕碎。\n\n另一种说法：调停者注定什么都没赢全。我支持先通过 15th Amendment，让一些白人姐妹觉得我背叛了女权；我坚持女权，又让一些黑人盟友觉得我分散了力量。我两头都接，结果两头都嫌我不够纯。我那句「绑在一起」，说得再对，也没拦住运动在种族那一处真的断裂。我提醒了所有人，可我谁也没能真正改变。\n\n这两边不是「立场加无奈」。是同一种选择的两面——「拒绝二选一」既让你最诚实，也让你最孤独。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the one who spliced the breaks together. In an era that forced people to choose "either for Black people or for women," I refused to choose. With "we are all bound up together" I reminded everyone: freedom cannot be handed out by picking favorites. I supported both sides and criticized both, playing the least pleasing yet most honest role. Without people like me holding the middle, the crack in the movement would have torn it apart sooner and deeper.\n\nThe other view: a mediator is fated to win nothing in full. I supported passing the 15th Amendment first, and some white sisters thought I had betrayed women\'s rights; I held to women\'s rights, and some Black allies thought I scattered our strength. I spliced both ends and both ends found me not pure enough. My line "bound together," however right, did not stop the movement from truly breaking at the place of race. I reminded everyone, yet changed no one in the end.\n\nThese are not "principle plus helplessness." They are two faces of one choice, "refusing to choose" makes you the most honest, and the most alone.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (把断裂接起来的人/拒绝二选一/我们都被绑在一起提醒自由不能挑人发/两边都支持都批评最不讨好最诚实/没她中间撑着裂缝更早撕碎) / 另一种说法 (调停者注定什么都没赢全/支持 15th 白人姐妹觉背叛女权/坚持女权黑人盟友觉分散力量/两头嫌不够纯/绑一起没拦住种族断裂/提醒了所有人没真正改变谁) / 同一种选择两面 / 想 30 秒',
      engagementHook: '把断裂接起来的人，和注定什么都没赢全的调停者——是同一个我，同一种「拒绝二选一」的两面：最诚实，也最孤独。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'feh-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个调停者？\n\n一个一辈子站在夹缝里的人：两边都需要她、两边又都嫌她；她说出了最诚实的话「我们都被绑在一起」，却没能让那根绳子在她活着的时候真的不断。她到底是这场运动的良心，还是一个注定徒劳的中间人？你怎么评？\n\n再想一步。今天你身边，有没有这样的时刻：两群你都在乎的人闹掰了，逼你站队——选了 A，B 觉得你背叛；选了 B，A 觉得你叛变；你想说「咱们本来是一起的」，可两边都嫌你和稀泥？\n\n那时候，你会为了痛快，干脆选一边站死；还是会像我一样，明知不讨好，也固执地站在中间，一次次去把断开的地方，再接上一点？',
        en: 'Having walked my whole life, how would you judge a mediator like this?\n\nA person who stood her whole life in the crack: needed by both sides and resented by both; who spoke the most honest line, "we are all bound up together," yet could not keep that rope from breaking in her lifetime. Was she the conscience of this movement, or a middle-person doomed to futility? How do you judge it?\n\nThen take one more step. In your own life today, is there a moment like this: two groups you both care about fall out and force you to pick a side, choose A and B feels betrayed, choose B and A feels you have turned traitor, you want to say "we were one to begin with" and both sides accuse you of fence-sitting?\n\nWhen that happens, will you, for the relief of it, just plant yourself on one side; or will you, like me, knowing it pleases no one, stubbornly stand in the middle and keep splicing the broken place back together, a little at a time?',
      },
      deliverGoal: 'N12 close (evaluation + transfer) — 评价调停者 (一辈子夹缝/两边需要又都嫌/说最诚实的话却没让绳子在她活着时不断 → 运动良心 vs 注定徒劳中间人/怎么评) + transfer「今天你身边两群你都在乎的人闹掰逼你站队 (选 A 选 B 都得罪/想说本来是一起的两边嫌和稀泥)」+ 你会为痛快选一边站死还是像她明知不讨好固执站中间一次次去接断开的地方',
      engagementHook: '我一辈子站在夹缝里，两边都需要我、又都嫌我。我是这场运动的良心，还是注定徒劳的中间人？你会怎么评？今天你身边那场「逼你在两群在乎的人之间站队」的事，你会站死一边，还是固执地站在中间?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Ida B. Wells (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var idaBWellsLens = {
  id: 'ida-b-wells-receiving-end',
  name: 'Ida B. Wells',
  nameCn: '艾达·B·韦尔斯',
  role: 'receiving-end',
  perspectiveTag: 'back-of-the-line-refuser',
  icon: '🗞️',
  description: {
    cn: '她是 1913 年 3 月 3 日从芝加哥赶到华盛顿的人，明天就是新总统就职，今天她要和几千名妇女一起在宾州大道上为投票权游行。出发前，组织者把她叫到一边说一句话：为了不得罪南方来的白人妇女，请你和所有黑人妇女走在队伍最后面。她这辈子调查过几百起白人把黑人吊死、烧死的私刑案，报馆被烧、收过死亡威胁，都没让她闭嘴。这一遍让你站在她这里：现在让她去队尾的，是她自己这一边的人,,她会咽下去单独走一组，还是会按她从小信的那句话「没人会替你站，你得自己站」，硬挤进队伍前排。',
    en: 'She is the woman who came from Chicago to Washington on 3 March 1913, the day before a new president\'s inauguration, ready to march down Pennsylvania Avenue with thousands of women for the vote. Before they set off, the organizers took her aside and said one thing: so as not to offend the white women from the South, please, you and all Black women, walk at the very back. In her life she had investigated hundreds of cases of white mobs hanging and burning Black people, had had her press burned and received death threats, and none of it had shut her up. This pass puts you with her: it is people on her own side telling her to go to the back, and she must choose, swallow it and walk alone at the rear, or, by the line she has held since girlhood, "no one will stand up for you, you must stand yourself," push her way into the front of the line.',
  },
  storyboard: [
    {
      id: 'ibw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1913 年 3 月 3 日，华盛顿。明天就是新总统就职，全国几千名妇女今天要在宾州大道上游行，为投票权造势。这是当时最大的一场妇女游行。\n\n我从芝加哥赶来，代表伊利诺伊州的代表团。我和她们一起准备了很久。\n\n出发前，组织者把我叫到一边，说了一句话：为了不得罪南方来的白人妇女，请你——还有所有黑人妇女——走在队伍的最后面，单独成一组。\n\n不是不让我游行。是让我游行，但要走在所有人后面。\n\n我是 Ida B. Wells（艾达·韦尔斯）。我这辈子调查过几百起白人把黑人吊死、烧死的私刑案，他们烧了我的报馆、扬言要我的命，也没让我闭嘴。\n\n现在，是我自己这一边的人，让我走到队尾去。\n\n这一遍，你站在我这里。看一场为「平等」上街的游行，怎么在出发前，就先把一群人，按肤色排了座次。',
        en: '3 March 1913, Washington. Tomorrow a new president would be inaugurated, and today thousands of women across the country would march down Pennsylvania Avenue for the vote. It was the largest women\'s parade of its time.\n\nI had come from Chicago, with the Illinois delegation. We had prepared together for a long time.\n\nBefore we set off, the organizers took me aside and said one thing: so as not to offend the white women from the South, please, you, and all Black women, march at the very back of the parade, set apart in your own group.\n\nNot that I could not march. That I could march, but must walk behind everyone.\n\nI am Ida B. Wells. In my life I had investigated hundreds of cases of white mobs hanging and burning Black people; they burned down my press and swore to take my life, and still they did not shut me up.\n\nNow it was people on my own side telling me to go to the back of the line.\n\nThis pass puts you where I stand. Watch how a parade marching for "equality" arranged a group of people, before it even set off, by the color of their skin.',
      },
      deliverGoal: 'N1 hook (gold-standard) — 1913.3.3 华盛顿新总统就职前夜几千妇女宾州大道游行为投票权造势 (当时最大妇女游行) + Wells 从芝加哥代表伊利诺伊代表团 + 组织者叫她到一边: 为不得罪南方白人妇女请黑人妇女走队尾单独成组 + 不是不让游行是让她走所有人后面 + Wells 自我介绍 (调查几百起私刑/报馆被烧+死亡威胁没让她闭嘴) + 现在自己这边的人让她去队尾 + 这一遍站她这看为平等游行出发前按肤色排座次',
      engagementHook: '一场为「平等」上街的游行，出发前组织者让我——和所有黑人妇女——走到队伍最后面去。不是不让我走，是让我走在所有人后面。这一步，你会怎么咽下去？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是从哪儿来的，你才懂队尾那句话对我意味着什么。\n\n我 1862 年生在密西西比州 Holly Springs。我出生的时候，还是个奴隶——几个月后内战结束、奴隶制废除，我才成了自由人。我是「自由」这两个字字面意义上的第一代。\n\n我父母靠勤劳让全家慢慢站稳脚跟。可 1878 年，一场黄热病一口气夺走了我父母和一个弟弟。那年我 16 岁。\n\n亲戚们商量着把我和弟妹们分开送养。我不干。我把头发盘起来、把裙子放长，谎报年龄去考了乡村教师，靠那点工资，一个人把弟妹们拢在一起养。\n\n16 岁，一边教书，一边当家长。我没有时间软弱。\n\n这段日子教会我一件事，后来再没忘过：没人会替你站出来，你得自己站。该说的话，自己说；该争的位子，自己占。\n\n所以后来在那场游行上，让我走队尾——你大概能猜到，我不是个会乖乖往后走的人。',
        en: 'First, where I came from, so you understand what that line about the back meant to me.\n\nI was born in 1862 in Holly Springs, Mississippi. When I was born I was still a slave; only months later, when the Civil War ended and slavery was abolished, did I become free. I was, in the literal sense of the word, the first free generation.\n\nMy parents, through hard work, slowly set the family on its feet. But in 1878 a yellow fever epidemic took my parents and a younger brother all at once. I was 16 that year.\n\nRelatives talked of splitting my siblings and me up for fostering. I refused. I pinned up my hair, let down my skirts, lied about my age to pass the country-teacher exam, and on that small wage held my brothers and sisters together myself.\n\nSixteen years old, teaching by day and head of the household at home. I had no time to be weak.\n\nThose years taught me a thing I never forgot: no one will stand up for you, you must stand yourself. The words that must be said, say them yourself; the place that must be claimed, claim it yourself.\n\nSo later, at that parade, when they told me to walk at the back, you can probably guess, I was not a person who would meekly go to the rear.',
      },
      deliverGoal: 'N2 setup — Wells 出身 (1862 密西西比 Holly Springs 出生时还是奴隶/几个月后内战结束才自由/字面意义自由第一代) + 父母勤劳让全家站稳 + 1878 黄热病一口气夺走父母和弟弟 (她 16 岁) + 亲戚要分开送养她不干 (盘头发放长裙谎报年龄考乡村教师靠工资养弟妹) + 16 岁一边教书一边当家长没时间软弱 + 教会她「没人替你站你得自己站」+ 所以游行让她走队尾她不是乖乖往后走的人',
      engagementHook: '16 岁那年我父母双亡，我谎报年龄当老师，一个人把弟妹养大——那段日子教会我「没人会替你站出来，你得自己站」。如果是你，16 岁就当了一家之主，你会被压垮，还是被逼硬？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我是怎么从乡村教师，变成全美最敢写的记者的？从一次「不肯让座」开始。\n\n1884 年，我买了一张火车头等车厢的票坐下。乘务员过来要我去后面给黑人坐的车厢。我有票，我不动。他来拖我，我咬了他的手。最后是三个男人合力把我拖下了车。\n\n下了车，我做了一件那个年代黑人女性很少做的事：我告这家铁路公司。我赢了第一审——可后来高等法院推翻了判决。\n\n这件事点着了我。我开始写文章——先写自己这场官司，再写所有我看见的不公。我发现，笔比眼泪有用得多。\n\n1892 年，我在 Memphis 的三个朋友，开了家杂货铺，生意太好抢了白人对手的客。一天夜里，一群白人暴民把他们三个从牢里拖出来，私刑处死。没有审判，没有罪名，只因为他们「太成功了」。\n\n那一刻我明白了私刑到底是什么：它不是「惩罚罪犯」，它是用恐怖，把往上爬的黑人摁回原位。\n\n从那天起，我把命押上，专门去调查、去写私刑。',
        en: 'How did I go from country teacher to one of the boldest journalists in America? It began with a refusal to give up a seat.\n\nIn 1884 I bought a ticket and sat in a first-class train car. The conductor came and told me to go back to the car for Black passengers. I had a ticket; I did not move. He came to drag me out; I bit his hand. In the end three men together hauled me off the train.\n\nOnce off, I did a thing few Black women did in that era: I sued the railroad. I won the first trial, and later the higher court overturned it.\n\nThat lit me. I began to write, first about my own suit, then about every injustice I saw. I found the pen far more use than tears.\n\nIn 1892 three friends of mine in Memphis opened a grocery store that did so well it took customers from a white competitor. One night a white mob dragged the three of them out of jail and lynched them. No trial, no charge, only that they were "too successful."\n\nIn that moment I understood what lynching truly was: not "punishing criminals," but using terror to shove Black people who were climbing back into their place.\n\nFrom that day I staked my life on it, on investigating and writing about lynching.',
      },
      deliverGoal: 'N3 setup — Wells 从乡村教师变记者从不肯让座开始 + 1884 头等车厢有票不动咬乘务员手三个男人拖下车 + 她告铁路公司赢一审高等法院推翻 + 点着她开始写 (先写官司再写不公/笔比眼泪有用) + 1892 Memphis 三朋友杂货铺抢白人对手客被白人暴民从牢拖出私刑处死 (无审判无罪名只因太成功) + 她明白私刑是什么 (不是惩罚罪犯是用恐怖把往上爬的黑人摁回原位) + 押命专门调查写私刑',
      engagementHook: '我那三个朋友被私刑处死，不是因为犯了罪，只因为他们的杂货铺「太成功」抢了白人的客。那一刻我懂了：私刑不是惩罚罪犯，是用恐怖把往上爬的黑人摁回原位。你之前知道私刑是这么回事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。回到 1913 年 3 月 3 日，游行出发前那一刻。\n\n你站在伊利诺伊代表团里，你是芝加哥黑人妇女选举权组织的创办人，你为这场游行准备了好久。\n\n组织者把你叫到一边，让你和所有黑人妇女退到队尾，单独走。理由是：南方来的白人妇女不愿和黑人并排，怕得罪她们，怕她们退出。\n\n你脑子里轰一下。你想起火车上那一回——你有票，他们照样要你去后面。今天你为「平等」上街，他们又一次，要你去后面。\n\n同一个动作。换了个地方。换成了你以为是盟友的人。\n\n你心里清楚:闹，会被骂「破坏团结」、「自私」、「关键时刻添乱」。忍,你这一辈子争的那点东西——「黑人也是完整的人」——在这条街上，当众被打了折。\n\n而你最清楚一件事：你从来不是个会往后走的人。\n\n你站队尾，还是不站？',
        en: 'Now you are me. Back to 3 March 1913, the moment before the parade set off.\n\nYou stand with the Illinois delegation; you are the founder of a Black women\'s suffrage club in Chicago; you have prepared a long time for this march.\n\nThe organizers take you aside and tell you, and all Black women, to fall back to the rear and march apart. The reason: the white women from the South will not march beside Black women, and they fear offending them, fear they will withdraw.\n\nSomething goes off in your head. You remember the train, you had a ticket and still they sent you to the back. Today you march for "equality," and once more they send you to the back.\n\nThe same act. A different place. Done now by people you thought were allies.\n\nYou know it clearly: make a scene, and you will be called a "wrecker of unity," "selfish," "making trouble at the crucial moment." Swallow it, and the one thing you have fought for your whole life, that "a Black person is a whole person too," is, on this street, publicly marked down.\n\nAnd you know one thing best: you were never a person who walks to the back.\n\nDo you stand at the rear, or not?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 回到 1913.3.3 游行出发前 + 你站伊利诺伊代表团是芝加哥黑人妇女选举权组织创办人准备好久 + 组织者叫你和所有黑人妇女退队尾单独走 (理由南方白人妇女不愿和黑人并排怕得罪怕退出) + 脑子轰一下想起火车有票照样去后面 (同一动作换地方换成以为是盟友的人) + 闹被骂破坏团结自私/忍则一辈子争的黑人也是完整的人当众被打折 + 你从不是往后走的人 + 站队尾还是不站',
      engagementHook: '同一个「去后面」的动作——这次不是火车乘务员，是我以为是盟友的人。闹，会被骂「破坏团结」；忍，我一辈子争的「黑人也是完整的人」当众被打折。这一步，你站队尾还是不站？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没站队尾。但我也没当场吵闹。\n\n我做了一件更聪明、也更硬的事。\n\n游行队伍出发，黑人妇女被安排在后面。我没有去队尾报到。我退到了人群里——看起来像是接受了，像是默默走开了。\n\n队伍走起来。两个白人盟友（也是伊利诺伊代表团的）站在前排为我留着位置。当队伍经过我站的地方，我从围观的人群里，不慌不忙地走出来，挤进伊利诺伊代表团的队列，站到了我本来就该站的位置——和白人妇女并排，走在前面。\n\n我没喊口号，没掀桌子。我只是用脚，走回了我的位置。\n\n那一刻拍下来的照片，后来传遍全国：一个黑人妇女，平静地走在伊利诺伊代表团里，没有走在最后面。\n\n这就是我的反抗方式：不是哭诉「请让我进来」，而是直接走进去，站好，让所有人都看见——我本来就属于这里。',
        en: 'I did not stand at the rear. But neither did I quarrel on the spot.\n\nI did something cleverer, and harder.\n\nThe parade set off, with Black women placed at the back. I did not report to the rear. I drew back into the crowd, looking as if I had accepted it, as if I had quietly walked away.\n\nThe procession began to move. Two white allies, also of the Illinois delegation, held a place for me in the front rank. When the procession reached where I stood, I stepped out, unhurried, from among the onlookers, slipped into the Illinois line, and took the place that was mine all along, beside the white women, marching at the front.\n\nI shouted no slogan, overturned no table. I simply, with my feet, walked back to my place.\n\nThe photograph taken in that moment later spread across the country: a Black woman, calmly marching within the Illinois delegation, not at the very back.\n\nThis was my way of resisting: not pleading "please let me in," but walking straight in, standing firm, and letting everyone see, I belonged here all along.',
      },
      deliverGoal: 'N5 story — Wells 没站队尾也没当场吵闹做更聪明更硬的事 + 队伍出发黑人妇女被安排后面她没去队尾报到退到人群里 (看似接受默默走开) + 两个白人盟友 (伊利诺伊代表团) 前排留位 + 队伍经过她从围观人群不慌不忙走出挤进伊利诺伊队列站本该站的位置 (和白人妇女并排走前面) + 没喊口号没掀桌用脚走回位置 + 照片传遍全国 + 反抗方式: 不哭诉请让我进而是直接走进去站好让所有人看见我本来就属于这里',
      engagementHook: '我没哭诉「请让我进来」，我只是用脚，平静地走回了我本来就该站的位置——和白人妇女并排，走在前面。「直接走进去站好」和「请求被接纳」，哪一种更有力量？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我走回前排那一步，其实是在回答整场运动里最扎人的一个问题：站在哪一排，谁说了算。\n\n你换个角度就看清了。同样是「先给谁、谁排前面」这个问题——\n\n在 Stanton 那一代白人领袖手里，答案是:为了让白人女性先拿到票，可以把黑人男性、把我这样的黑人女性，排到后面去。她们 1869 年反对先给黑人男性投票，就是这个排法。\n\n在 Frances Harper 手里，答案是:谁也别先松开自己那一段，「我们都被绑在一起」——可她也拦不住运动在种族那一处真的断开。\n\n到了我这儿，1913 年，这个抽象的「排序」，变成了一条真实的街、一个真实的队尾。她们要我，一个用命写私刑报道的人，走到所有人后面。\n\n我的答案，不是争论，是行动:我用脚，走回前排。\n\n同一个问题——「谁有资格走在前面」——白人领袖用它把人往后排，Harper 用话提醒别排，我用一双脚，当众拒绝被排。三种答案，你更服哪一种？',
        en: 'That step back to the front rank was really my answer to the most cutting question in the whole movement: who decides where you stand in the line.\n\nShift your angle and you see it clearly. The same question, "who comes first, who stands ahead"—\n\nIn the hands of Stanton\'s generation of white leaders, the answer was: to let white women get the vote first, you could rank Black men, and Black women like me, to the back. Their opposition in 1869 to giving Black men the vote first was exactly this ranking.\n\nIn the hands of Frances Harper, the answer was: let no one loosen their own length first, "we are all bound up together," yet she too could not stop the movement from truly breaking at the place of race.\n\nBy the time it reached me, in 1913, this abstract "ranking" became a real street and a real back-of-the-line. They told me, a person who staked her life writing about lynching, to walk behind everyone.\n\nMy answer was not argument but action: with my feet, I walked back to the front.\n\nThe same question, "who is allowed to march at the front," white leaders used it to rank people backward, Harper used words to say do not rank, and I, with two feet, refused in public to be ranked. Three answers. Which do you respect most?',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Wells 走回前排回答运动最扎人问题: 站哪一排谁说了算 + 同一个「先给谁/谁排前面」三种站位: Stanton 白人领袖为白人女性先拿票把黑人男性/黑人女性排后 (1869 反对先给黑人男性投票) / Frances Harper「我们都被绑在一起」谁别先松一段但拦不住种族断裂 / Wells 1913 抽象排序变真实街和队尾 (要她用命写私刑的人走所有人后面) 用脚走回前排 + 三种答案: 白人领袖往后排/Harper 用话提醒别排/Wells 用脚拒绝被排',
      engagementHook: '同一个问题「谁有资格走在前面」——白人领袖用它把人往后排，Harper 用话提醒别排，我用一双脚当众拒绝被排。三种答案，你更服哪一种？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能会想:走回前排，是不是太小的一件事？一场游行而已。\n\n不小。因为那条队尾，不是组织者随口的安排，是一整套逻辑的缩影。\n\n那几年，妇女选举权运动为了拉拢南方的白人妇女，越来越愿意拿黑人女性当筹码。有领袖公开说过类似的话:给白人女性选票，正好能帮白人「抵消」黑人的票，稳住南方的白人统治。\n\n你听清这个交易了吗:我这样的黑人女性，本该是这场运动的姐妹，结果被人拿来当成「对付黑人」的工具。我们争的是同一张选票，可在她们的算盘里，我的票是用来「中和」掉我自己同胞的。\n\n所以那条队尾，是这套算盘的物理形态:你可以来，但你得站在能让我们「不尴尬」的地方。\n\n我走回前排，拒绝的不只是一个座次。我拒绝的是这整笔交易——拒绝被自己的运动，当成对付自己人的棋子。\n\n一个位置，有时候就是一个立场。',
        en: 'You might think: walking back to the front, is that not too small a thing? Only a parade.\n\nNot small. Because that back-of-the-line was no offhand arrangement by the organizers; it was the miniature of a whole logic.\n\nIn those years the suffrage movement, to draw in white women of the South, grew ever more willing to use Black women as bargaining chips. Leaders said, in public, words to this effect: giving white women the vote could help white people "cancel out" Black votes and hold white rule in the South.\n\nDo you hear that bargain clearly: a Black woman like me, who ought to be a sister of this movement, was used as a tool "against Black people." We fought for the same ballot, yet in their reckoning my vote was meant to "neutralize" my own people.\n\nSo that back-of-the-line was the physical form of that reckoning: you may come, but you must stand where we will not be "embarrassed."\n\nWhen I walked back to the front, I refused more than a seating order. I refused the whole bargain, refused to be made, by my own movement, a chess piece used against my own people.\n\nA place, sometimes, is a stance.',
      },
      deliverGoal: 'N7 story — 走回前排不是小事队尾是一整套逻辑缩影 + 那几年妇女选举权运动为拉拢南方白人妇女越来越愿拿黑人女性当筹码 + 有领袖公开说给白人女性选票帮白人抵消黑人的票稳住南方白人统治 + 交易: 黑人女性本该是姐妹被拿来当对付黑人工具 (争同一张选票但她票被用来中和自己同胞) + 队尾是这套算盘物理形态 (你可来但站在让我们不尴尬的地方) + Wells 走回前排拒绝整笔交易 (拒绝被自己运动当对付自己人的棋子) + 一个位置就是一个立场',
      engagementHook: '我这样的黑人女性，本该是这场运动的姐妹，结果被人拿来当「对付黑人」的工具——我的票被算计成用来「中和」掉我自己的同胞。我走回前排，拒绝的不只是座次，是这整笔交易。一个位置，怎么就成了一个立场？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没有等运动「想通了」再来接纳我。我自己建了一个。\n\n1913 年，就在那场游行的前后，我在芝加哥创办了 Alpha Suffrage Club（阿尔法选举权俱乐部）——芝加哥第一个黑人妇女的选举权俱乐部，也是当时最有影响力的黑人妇女选举权组织之一。\n\n我们这群黑人妇女，不再排队等白人主导的组织「赏」我们一个位子。我们自己注册选民、自己组织、自己把票投出去。几年后，芝加哥的黑人妇女票多到能左右地方选举，连本来看不起我们的政客，都得回过头来争取我们。\n\n我做这件事的逻辑，跟我走回前排是一样的:与其求别人给我一个位置，不如自己建一个、自己站满。\n\n我这辈子一直是这么干的。火车上,我自己买头等票、自己告公司。私刑横行时,我自己去调查、自己出书。运动把我推到队尾,我自己走回前排、自己办俱乐部。\n\n受过别人的轻视，我从不靠「请你善待我」翻身。我靠的是:把你不给我的东西，自己挣到手。',
        en: 'I did not wait for the movement to "come around" and accept me. I built one myself.\n\nIn 1913, around the time of that very parade, I founded in Chicago the Alpha Suffrage Club, the first Black women\'s suffrage club in Chicago and one of the most influential Black women\'s suffrage organizations of its time.\n\nWe Black women would no longer queue and wait for white-led organizations to "grant" us a place. We registered voters ourselves, organized ourselves, cast our ballots ourselves. A few years later, Black women\'s votes in Chicago grew numerous enough to swing local elections, and even politicians who had looked down on us had to turn back and court us.\n\nThe logic of this was the same as walking back to the front: rather than beg others for a place, build one yourself and fill it yourself.\n\nThis is how I did things my whole life. On the train, I bought my own first-class ticket and sued the company myself. When lynching raged, I investigated and published myself. When the movement pushed me to the back, I walked to the front and founded a club myself.\n\nHaving met others\' contempt, I never rose by "please treat me kindly." I rose by this: whatever you would not give me, I earned for myself.',
      },
      deliverGoal: 'N8 story — Wells 没等运动想通来接纳自己建一个 + 1913 游行前后在芝加哥创办 Alpha Suffrage Club 芝加哥第一个黑人妇女选举权俱乐部 (当时最有影响力的黑人妇女选举权组织之一) + 不再排队等白人主导组织赏位子 (自己注册选民组织投票) + 几年后芝加哥黑人妇女票多到左右地方选举政客回头争取 + 逻辑跟走回前排一样 (与其求别人给位置不如自己建自己站满) + 一辈子这么干 (火车自己买头等票告公司/私刑自己调查出书/被推队尾自己走回前排办俱乐部) + 不靠请你善待我翻身靠把你不给的自己挣到手',
      engagementHook: '与其求别人给我一个位置，不如自己建一个、自己站满——我办了芝加哥第一个黑人妇女选举权俱乐部。「请你善待我」和「把你不给我的，自己挣到手」，你更信哪一条路？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1920 年，那条妇女投票的修正案终于通过了。我还活着，看到了。\n\n可对我和我的同胞，那不是终点。\n\n19th Amendment 写的是「不得因性别剥夺投票权」。纸面上，所有女人都能投票了。可在南方，黑人女性和黑人男性一样，照样被人头税、识字测验、还有最直接的暴力，挡在投票站门外。\n\n我帮着争来的那张选票，对北方的黑人妇女管用，对南方的，还是一张白纸。我们这群人，要再等 45 年，等到 1965 年的投票权法（Voting Rights Act），才真正投得上票。\n\n你看，1913 年那条游行的队尾，根本没在 1920 年消失。它只是从一条街，搬进了千千万万个投票站。\n\n我 1931 年死了。死的时候，我帮南方黑人妇女争的那张能用的票，还没到手。\n\n这就是「受影响那一端」的真相:同样一句「妇女拿到了选举权」，对前排的人，是 1920 年的胜利；对队尾的人，是又一个 45 年的等待。',
        en: 'In 1920 the amendment for women\'s vote finally passed. I was still alive; I saw it.\n\nBut for me and my people, it was no finish line.\n\nThe 19th Amendment said the vote could not be denied "on account of sex." On paper, all women could vote. But in the South, Black women, like Black men, were still kept from the polls by poll taxes, literacy tests, and the most direct thing, violence.\n\nThe ballot I had helped win worked for Black women in the North; for those in the South, it was still a blank sheet of paper. People like us would wait another 45 years, until the Voting Rights Act of 1965, before we could truly cast a ballot.\n\nYou see, the back-of-the-line of that 1913 parade did not vanish in 1920. It simply moved from a street into tens of thousands of polling places.\n\nI died in 1931. When I died, the usable ballot I had fought for on behalf of Black women in the South was still not in hand.\n\nThis is the truth of the "receiving end": the same sentence, "women won the vote," was, for those at the front, the victory of 1920; for those at the back, another 45 years of waiting.',
      },
      deliverGoal: 'N9 story — 1920 妇女投票修正案通过 Wells 还活着看到了但对她和同胞非终点 + 19th Amendment 不得因性别剥夺投票权纸面所有女人能投 + 南方黑人女性同黑人男性被人头税识字测验暴力挡 + 她帮争的票对北方黑人妇女管用对南方还是白纸 (再等 45 年到 1965 Voting Rights Act) + 1913 队尾没在 1920 消失只是从一条街搬进千万投票站 + Wells 1931 死时帮南方黑人妇女争的能用的票还没到手 + 受影响那端真相: 同一句妇女拿到选举权对前排是 1920 胜利对队尾是又一个 45 年等待',
      engagementHook: '1913 年那条游行的队尾，根本没在 1920 年消失——它只是从一条街，搬进了千千万万个投票站。同一句「妇女拿到了选举权」，对前排是 1920 年的胜利，对队尾是又一个 45 年的等待。这两种「拿到」，能算同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看我站在一条更长的线上。\n\n我走回前排那一步，不是孤零零的一次倔强。它接的是一条很老的线。\n\n往前数。1781 年，一个被奴役的女人 Mum Bett，听见主人写的那句「生而自由」，转头用它去打官司，把自己从「财产」变回了「完整的人」。她做的和我做的，是同一件事:把别人用来排斥你的东西，捡起来，反过来对准他们。她用一句法律，我用一双脚。（你跑过费城制宪那段历史，会认得她。）\n\n往后看。我走回前排那年是 1913。42 年后的 1955 年，另一个黑人女性在公交车上拒绝给白人让座，点燃了民权运动。再往后，1965 年的投票权法，才让我帮南方黑人妇女争的票真正能用。\n\n我没活到那一天。可我那一步，和 Mum Bett 那句话、和后来公交车上那个拒绝让座的女人，是同一条线上的接力。\n\n这条线说的是同一件事:被告知「你该待在后面」时，你可以用尽手里的一切，走回你本来就该站的位置。',
        en: 'Pull the lens back and see me standing on a longer line.\n\nThat step back to the front was no lone act of stubbornness. It joined a very old line.\n\nCount backward. In 1781 an enslaved woman, Mum Bett, heard the words her master wrote, "born free," and turned them around to sue, turning herself from "property" back into a "whole person." What she did and what I did were the same thing: take what others use to exclude you, pick it up, and aim it back at them. She used a line of law; I used two feet. (Run the constitutional convention topic and you will recognize her.)\n\nLook forward. The year I walked to the front was 1913. Forty-two years later, in 1955, another Black woman refused to give up her seat to a white man on a bus and lit the civil rights movement. Later still, the Voting Rights Act of 1965 finally made the ballot I fought for, for Black women in the South, truly usable.\n\nI did not live to that day. But my step, and Mum Bett\'s line, and that later woman who refused her seat on the bus, were a relay on the same line.\n\nThis line says one thing: when you are told "you belong at the back," you can, with everything in your hands, walk back to the place that was yours all along.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — Wells 站长线走回前排不是孤零倔强接很老的线 + 往前: 1781 Mum Bett 听主人写的「生而自由」用它打官司从财产变回完整的人 (constitutional-convention Topic 锚/同一件事: 把别人用来排斥你的东西捡起来反过来对准他们/她用法律 Wells 用脚) + 往后: 1913 走回前排 42 年后 1955 另一黑人女性公交拒绝让座点燃民权运动 + 1965 Voting Rights Act 让南方黑人妇女票真能用 + Wells 没活到但她那一步和 Mum Bett 那句话和公交拒让座的女人是同一条线接力 + 这条线: 被告知你该待在后面你可以用尽手里一切走回本该站的位置',
      engagementHook: '我用一双脚走回前排，和 1781 年 Mum Bett 用一句「生而自由」打官司，和后来公交车上那个拒绝让座的女人——是同一条线上的接力。被告知「你该待在后面」时，走回自己的位置，这件事为什么要一代代重做？',
      expectsRealAnswer: false,
    },
    {
      id: 'ibw-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看 1913 年那条队尾、那场为「平等」上街的游行，两种说法都站得住。\n\n一种说法:那场运动从根上就背叛了它自己。它喊着「所有女人」，却在出发前就按肤色给人排座次；它为了拉拢南方白人妇女，把我这样的黑人姐妹当成对付自己同胞的筹码。一个一边喊平等、一边搞种族隔离的运动，它争来的「平等」，对我从来就打了折。\n\n另一种说法:它是一张还没填满的支票，而我，和后来无数人，一笔一笔往里填。运动会排斥我，可它喊出的「平等」也成了我可以反过来用的武器——我走回前排、办俱乐部、争投票权，用的正是它没真正给我、却写在旗帜上的那个词。它亏待了我，可它也给了我一根撬动它自己的杠杆。\n\n两种说法都站得住。它既背叛了我，也被我反过来利用了。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the back-of-the-line of 1913, that parade marching for "equality." Both views stand.\n\nOne view: that movement betrayed itself at the root. It cried "all women," yet before it even set off it ranked people by skin color; to draw in white women of the South, it made a Black sister like me a chip used against my own people. A movement that cries equality with one breath and runs segregation with the next, the "equality" it won was, for me, always marked down.\n\nThe other view: it was a check not yet filled in, and I, and countless others after, filled it bit by bit. The movement shut me out, yet the "equality" it cried also became a weapon I could turn back on it. I walked to the front, founded a club, fought for the vote, using the very word it never truly gave me but had written on its banner. It wronged me, and it also handed me a lever to move itself.\n\nBoth views stand. It betrayed me, and it was turned back to my use.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis (gold-standard) — 一种说法 (运动从根上背叛自己/喊所有女人却按肤色排座次/为拉南方白人妇女把黑人姐妹当对付同胞筹码/一边喊平等一边搞隔离争来的平等对我打折) / 另一种说法 (一张还没填满的支票我和后来无数人一笔笔填/它排斥我但它喊的平等成了我反过来用的武器/走回前排办俱乐部争投票权用它没真给我却写旗帜上的词/它亏待我也给我撬动它自己的杠杆) / 两种都站得住 / 想 30 秒',
      engagementHook: '一种说法：那场运动从根上背叛了它自己。另一种说法：它是一张还没填满的支票，我反过来用它喊的「平等」当武器，撬动它自己。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'ibw-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个出生时还是奴隶的女人，一张不肯让的火车票，几百起亲手调查的私刑，一双在游行里走回前排的脚，一个自己办起来的俱乐部——你会怎么评价这样一场「进步运动」？\n\n一场为「平等」上街的运动，却在出发前就按肤色把人排了座次。你会说它从根上就是假的，还是说它是一张被后人一笔笔填满的支票？你怎么评？\n\n不过先记住：你这一遍，只听了被排到队尾的我这一边。换伊丽莎白·卡迪·斯坦顿那一遍，你会进到一个为白人女性争到票、却把黑人姐妹推开的领袖心里；换弗朗西丝·哈珀那一遍，你会看见一个夹在性别和肤色两道线中间、两边都要争的人。换到她们那两遍，你今天的判断会被挑战，也会更完整。\n\n再想一步。今天你身边，有没有这样的事:一个口口声声「我们都一样」「人人平等」的群体——一个班、一个社团、一个队伍——真到分位置、排座次、给机会的时候，悄悄把某些人放到了「后面」？\n\n那时候，你会乖乖走到后面去，还是会像我一样:不哭诉、不求情，用尽你手里的一切，平静地、坚定地，走回你本来就该站的那个位置？',
        en: 'Having walked my whole life, a woman born into slavery, a train ticket I would not give up, hundreds of lynchings I investigated with my own hands, two feet that walked back to the front in a parade, a club I founded myself, how would you judge a "movement for progress" like this?\n\nA movement marching for "equality" that, before it even set off, ranked people by the color of their skin. Would you call it false at the root, or a check filled in bit by bit by later generations? How do you judge it?\n\nBut first, remember: in this pass you heard only my side, the one ranked to the back of the line. Run Elizabeth Cady Stanton\'s pass and you enter a leader who won the vote for white women while pushing her Black sisters aside; run Frances Harper\'s pass and you see someone caught between the two lines of sex and skin, fighting on both. Run those two passes and the judgment you formed today will be challenged, and made more complete.\n\nThen take one more step. In your own life today, is there something like this: a group that says, over and over, "we are all the same," "all are equal," yet when it comes to assigning places, ordering seats, handing out chances, quietly puts certain people at "the back"?\n\nWhen that happens, will you meekly walk to the back, or will you do what I did: not plead, not beg, but with everything in your hands, calmly and firmly, walk back to the place that was yours all along?',
      },
      deliverGoal: 'N12 close (gold-standard, evaluation + transfer) — 评价进步运动 (出生时是奴隶的女人/不肯让的火车票/几百起私刑调查/走回前排的脚/自己办的俱乐部 → 为平等上街却出发前按肤色排座次 → 从根上是假的 vs 后人一笔笔填满的支票/怎么评) + transfer「今天你身边口口声声我们都一样人人平等的群体 (班社团队伍) 真到分位置排座次给机会时悄悄把某些人放后面」+ 你会乖乖走后面还是像她不哭诉不求情用尽手里一切平静坚定走回本该站的位置',
      engagementHook: '走完我这一生，你会怎么评价这样一场「进步运动」——为平等上街，却出发前就按肤色排了座次？再想一步：今天你身边那个口口声声「我们都一样」、真到给机会时却悄悄把某些人放到后面的群体，你会乖乖走到后面，还是走回你本该站的位置？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'cady-stanton':              cadyStantonLens,
  'frances-harper':            francesHarperLens,
  'ida-b-wells-receiving-end': idaBWellsLens,
};

// per TOPIC_ROADMAP_G6_G12.md A9 + receiving-end 优先 pattern:
// 黑人女性 + 被运动主流排斥一方 + 真实事件 (1913 游行队尾) + N6「站哪一排」跨 lens 对位 + N11/N12 背叛 vs 支票 closing
export var defaultLens = 'ida-b-wells-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'womens-suffrage-1920',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'cady-stanton': 32, 'frances-harper': 30, 'ida-b-wells-receiving-end': 32 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, long-arc 12-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each / cross-lens micro-detail N6:「站在哪一排 / where you stand in the line」一句话三种站位 (Stanton 白人领袖为白人女性把黑人推后 / Frances Harper 我们都被绑在一起 / Ida B. Wells 1913 游行用脚走回前排拒绝被排)',
    'defaultLens: ida-b-wells-receiving-end (roadmap A9 VERBATIM) — 受影响者优先 (黑人女性 + 被运动主流排斥一方 + 真实 1913 游行队尾事件 + gold-standard N1 hook + N11/N12 背叛 vs 支票)',
    'expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 全部真实记录事件 (Seneca Falls 1848 / 15th Amendment 1870 / 1913 游行 / 19th Amendment 1920 / Plessy 1896 / Alpha Suffrage Club 1913); Stanton 种族主义言论真实存在但用概括描述不伪造具体引文',
    'cross-Topic 锚: Stanton→Gouges/enlightenment (女权先驱局限); Harper→constitutional-convention 3/5 + enlightenment (谁被算进所有人); Wells→Mum Bett/constitutional-convention (把排斥你的话反过来对准他们) + 1955 公交拒让座→未来 civil-rights Topic',
    '反 Whig 核心: 运动内部种族裂缝 (主流白人女性派为白人选票排斥黑人女性/黑人男性投票权); Ida B. Wells 1913 拒绝走队尾挤进白人队伍真实事件',
    'date check: Cady Stanton 1815-1902 (开枪 33 岁=1848✓/死 1902 比 1920 早 18 年✓); Harper 1825-1911 (1920 早 9 年✓); Ida B. Wells 1862-1931 (1913 时 51 岁/1920 时 58 岁活着看到✓); Seneca Falls 1848.7.19-20✓; 15th Amendment 1870✓; 19th Amendment 1920✓; Plessy v. Ferguson 1896✓; Voting Rights Act 1965✓ (1920+45=1965✓)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
