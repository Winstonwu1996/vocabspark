// ─── The Civil War 1861-1865 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 南北战争 · The Civil War 1861-1865
// HSS-8.10 · APUSH Period 5 (内战原因 + Emancipation Proclamation + 总统战时权力)
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md A5 + AUTHORING_PIPELINE 第 8/12 条):
//   - lincoln                     (perpetrator-actor) — Abraham Lincoln 1809-1865 为保联邦而战 / 初期不为废奴 / 中途以战略转向解放
//   - robert-e-lee                (lonely-mediator)   — Robert E. Lee 1807-1870 反对脱离却因效忠弗吉尼亚领南军 / 悲剧性选择
//   - usct-soldier-receiving-end  (receiving-end)     — 加入北军的获释黑人士兵 (composite,基于第 54 麻省团) c.1840-1865 / 18 万黑人士兵之一 / 同工不同酬 / 被俘即处死风险
//
// 跨 lens micro-detail (N6 anchor):
//   「为谁而战 / what are you fighting for」一个问题三个答案 — 1863 同一年三个人对「这场仗到底为什么打」给出完全不同的答案:
//   - Lincoln (白宫) 1862 仍说: 能保联邦而不解放一个奴隶,他也愿意 → 1863.1.1 解放宣言把仗的意义改了 (军事工具)
//   - Lee (弗吉尼亚) 为「我的故乡」而战,不是为奴隶制辩护,却替奴隶制的国家流血
//   - USCT 士兵 (Fort Wagner 沙墙下) 为「证明我也是人 / 把自由从纸上变成真的」而战
//   解放宣言这张纸 N6 三 lens 共享: Lincoln 签它 / Lee 的国家被它针对 / USCT 士兵让它从纸变真
//
// 跨 Topic 锚:
//   - Lincoln「保联邦优先于废奴」+ 解放宣言战略性 → slavery-abolition (道德 vs 实用) / Douglass 施压 (现有 enlightenment? 用通指「废奴运动 Topic」)
//   - Lee 效忠州 vs 国 → 联邦 vs 州权张力 (jackson Topic, 暴力顶点)
//   - 黑人士兵参战换公民权 → 重建 Topic (参战换公民权逻辑) + byzantine-rise (Justinian 军队与公民身份对照)
//
// defaultLens = 'usct-soldier-receiving-end' (受影响者优先 pattern: 被解放宣言针对/受益一方 + 半合成 composite + 跨 lens「为谁而战」对位 + 把纸变真)
//
// STRUCTURE SPEC (long-arc):
//   - 12 nodes per lens (long-arc, 1850 妥协破裂→分裂→四年战争→解放宣言转向 时间跳跃)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N4 personal peak / N11 synthesis)
//   - expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) = true; all others false (exactly 2 per lens)
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// composite USCT 士兵: 名字/家世/部分场景为叙事性补充,以括号短句标注;基底是 documented 第 54 麻省团 + USCT 史实
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Abraham Lincoln (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var lincolnLens = {
  id: 'lincoln',
  name: 'Abraham Lincoln',
  nameCn: '亚伯拉罕·林肯',
  role: 'perpetrator-actor',
  perspectiveTag: 'union-first-president',
  icon: '🎩',
  description: {
    cn: '肯塔基州一间圆木小屋里出生，1809 年生，几乎没上过学，靠借书自学当上律师。1861 年他刚当上总统，七个南方州就退出，国家在他手里裂成两半。他打了四年仗，死了六十多万人。课本叫他「伟大的解放者」，但 1862 年他还公开说过：要是能保住国家而不解放一个奴隶，他也愿意。这一遍让你从一个总统内部，看「保住国家」和「解放奴隶」这两件事，是怎么在一场战争里被逼着重新排序的。',
    en: 'Born in a one-room log cabin in Kentucky in 1809, with almost no schooling, he taught himself law from borrowed books. He had just become president in 1861 when seven Southern states walked out, and the country split in two in his hands. He fought a four-year war in which more than six hundred thousand people died. Textbooks call him "the Great Emancipator," but in 1862 he said openly that if he could save the country without freeing a single slave, he would do it. This pass lets you watch, from inside a president, how "saving the country" and "freeing the slaves" were forced to swap places over the course of a war.',
  },
  storyboard: [
    {
      id: 'lin-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1861 年 3 月，我宣誓当上美国总统。还没等我把椅子坐热，七个南方州已经退出，自己另立了一个国家。\n\n他们退出的理由，归根结底是一件事：奴隶制。他们怕我这个新总统，将来会动他们靠被奴役者撑起来的种植园经济。\n\n我是 Abraham Lincoln（亚伯拉罕·林肯），肯塔基一间圆木小屋里长大，几乎没正经上过学。我现在面对的，是这个国家成立以来最大的裂口。\n\n你以为我上来第一件事是宣布解放奴隶？不是。我第一件事是想尽办法，把退出去的州拉回来——哪怕，暂时不碰奴隶制。\n\n这一遍，你坐进我这个位置。你会发现，「做对的事」和「保住国家」，在战争里常常不是同一件事。',
        en: 'In March 1861 I was sworn in as president of the United States. Before I could warm the chair, seven Southern states had walked out and set up a country of their own.\n\nWhy did they leave? At bottom it came down to one thing: slavery. They feared that I, the new president, would one day move against the plantation economy their enslaved people held up.\n\nI am Abraham Lincoln, raised in a one-room log cabin in Kentucky, with almost no real schooling. What I now faced was the largest split this country had seen since its founding.\n\nYou think the first thing I did was declare the slaves free? No. The first thing I did was try every way I could to pull the departed states back, even, for the time being, without touching slavery.\n\nThis pass puts you in my seat. You will find that "doing the right thing" and "saving the country," in war, are often not the same thing.',
      },
      deliverGoal: 'N1 hook — 1861.3 Lincoln 就任即七州退出另立国家 + 退出根因是奴隶制 (怕新总统动种植园经济) + Lincoln 自我介绍 (圆木小屋自学律师) + 第一件事是拉回不是解放 + 这一遍视角设定 (做对的事 vs 保住国家不是一回事)',
        engagementHook: '我刚当上总统,七个州就退出另立国家。我第一件事不是解放奴隶,是想把他们拉回来——哪怕暂时不碰奴隶制。你觉得「保住国家」该排在「做对的事」前面吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说这个国家为什么会裂。\n\n美国南北两边，靠两套完全不同的经济活着。南方是种植园：靠几百万被奴役者的劳动，产棉花、烟草、稻米，卖到全世界。北方是工厂、小农、商人，不靠奴隶制。\n\n几十年里，每加进一个新州，南北就吵一架：这个新州，到底准不准蓄奴？准，南方在国会就多一票；不准，北方多一票。两边在为「奴隶制往西扩不扩」死磕。\n\n1850 年前后他们还能勉强妥协，各让一步。可妥协一次比一次撑不住。\n\n到 1860 年我当选——一个被南方认定「反对奴隶制扩张」的总统——南方觉得算盘打到头了：与其留在一个迟早会动奴隶制的国家里，不如自己走。\n\n这就是 1861 年我接手的烂摊子：一个为「奴隶制要不要扩张」吵了几十年、终于吵到要散伙的国家。',
        en: 'First, why this country split.\n\nNorth and South lived on two completely different economies. The South was the plantation: cotton, tobacco, and rice, produced by the labor of millions of enslaved people and sold around the world. The North was factories, small farms, and merchants, and did not run on slavery.\n\nFor decades, every time a new state was added, North and South quarreled: would this new state allow slavery or not? If yes, the South gained a vote in Congress; if no, the North gained one. The two sides fought to the death over whether slavery would spread west.\n\nAround 1850 they could still barely compromise, each giving a little ground. But each compromise held less well than the last.\n\nThen in 1860 I was elected, a president the South had decided was "against the spread of slavery." The South felt it had run out of room: rather than stay in a country that would one day move against slavery, they would leave.\n\nThis was the mess I inherited in 1861: a country that had quarreled for decades over whether slavery should spread, and had finally quarreled itself to the edge of breaking apart.',
      },
      deliverGoal: 'N2 setup — 南北两套经济 (南方种植园靠被奴役者产棉烟稻 / 北方工厂小农) + 几十年新州蓄奴之争 (国会票数) + 1850 前后勉强妥协一次比一次撑不住 + 1860 Lincoln 当选→南方算盘打到头宁可走 + 接手裂开的国家',
        engagementHook: '南北吵了几十年的核心,不是「要不要废奴」,而是「奴隶制能不能往西扩」。为什么「扩不扩」这件事,能把一个国家吵到散伙?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得讲清楚我当时心里那条线，不然你会误解我后面做的事。\n\n我个人厌恶奴隶制，这是真的。我说过：如果奴隶制不算错，那世上就没有错的事。\n\n但「我讨厌奴隶制」和「我能立刻废掉它」是两回事。我当总统宣誓守的是宪法——而那时的宪法，是保护奴隶制存在的。我没有合法的权力，一上来就废掉南方各州的奴隶制。\n\n更要命的是：还有几个蓄奴的「边境州」（像肯塔基、马里兰）没有退出，还留在我这边。我要是开战第一天就喊「这是为废奴而战」，这几个州立刻倒向南方——我可能连首都都守不住。\n\n所以我把话说得很死：这场仗，是为了**保住联邦**（保住这个国家不分裂），不是为了废奴。\n\n你先记住这条线。因为这条线，后来被我自己改了。',
        en: 'I have to make clear the line in my mind at the time, or you will misread what I did later.\n\nI personally hated slavery; that is true. I once said: if slavery is not wrong, then nothing is wrong.\n\nBut "I hate slavery" and "I can abolish it at once" are two different things. As president I swore to uphold the Constitution, and that Constitution protected slavery where it existed. I had no lawful power to walk in and abolish slavery in the Southern states.\n\nWorse: several slaveholding "border states" (such as Kentucky and Maryland) had not left and still stood on my side. If on day one of the war I cried "this is a war to end slavery," those states would swing to the South at once, and I might not even hold the capital.\n\nSo I said it flatly: this war is to save the Union, to keep this country from breaking apart, not to end slavery.\n\nHold on to that line. Because later I changed it myself.',
      },
      deliverGoal: 'N3 setup — Lincoln 个人厌恶奴隶制 (奴隶制不算错则无错) 但无合法权力立刻废 (宪法保护奴隶制) + 蓄奴边境州 (肯塔基/马里兰) 没退出不能喊废奴否则倒向南方守不住首都 + 把话说死「为保联邦不为废奴」+ 伏笔: 这条线后来被自己改了',
        engagementHook: '我讨厌奴隶制,却开战第一天就说「这场仗不为废奴」。因为喊废奴,留在我这边的几个蓄奴州会立刻倒向敌人。「先保住能保的」和「立刻做对的」,你会怎么排?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1862 年夏天。仗已经打了一年多。北方人多、钱多、工厂多，本该速胜——可你一直在输。南军的将领比你的强，你的部队在弗吉尼亚一次次被打回来。报纸天天骂你，士兵成片地死，北方民间开始厌战。\n\n这时候，一个有名的报人 Greeley，公开写信逼你：你为什么还不解放奴隶？你在等什么？\n\n你提笔回他一封信。你写的话，后来被无数人引用，也被无数人误解。你写：\n\n「如果我能保住联邦而不解放任何一个奴隶，我会这么做；如果能靠解放所有奴隶来保住联邦，我也会这么做；如果靠解放一部分、留下一部分能保住联邦，我同样会这么做。」\n\n你读读这段话。它冷得吓人。在这封信里，奴隶的自由不是目的，是**工具**——一个用来保住国家的工具。\n\n现在问你自己：你这么写，是因为你不在乎奴隶，还是因为你太在乎那个快碎掉的国家？这两个，在你身上分得清吗？',
        en: 'Now you are me.\n\nSummer 1862. The war has dragged on for over a year. The North has more people, more money, more factories, and should win fast, yet you keep losing. The Southern generals are better than yours, and your armies are thrown back in Virginia again and again. The newspapers curse you daily, soldiers die by the thousand, and the Northern public begins to tire of the war.\n\nThen a famous newspaperman, Greeley, writes you an open letter pressing you: why have you not freed the slaves? What are you waiting for?\n\nYou take up your pen and answer him. What you write would be quoted by countless people, and misunderstood by countless more. You write:\n\n"If I could save the Union without freeing any slave I would do it; and if I could save it by freeing all the slaves I would do it; and if I could save it by freeing some and leaving others alone I would also do that."\n\nRead that passage. It is frighteningly cold. In this letter the freedom of the slaves is not the goal; it is a tool, a tool to save the country.\n\nNow ask yourself: did you write this because you do not care about the slaves, or because you care too much about a country about to shatter? On you, can the two be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1862 夏打一年多北方占优却一直输 (南军将领强/弗吉尼亚被打回/报纸骂/厌战) + Greeley 公开信逼解放 + Lincoln 回信「能保联邦而不解放一个奴隶我也愿意 / 全解放也愿意 / 部分也愿意」+ 自由是工具不是目的 + 自我拷问: 不在乎奴隶还是太在乎国家',
        engagementHook: '我写下:「能保联邦而不解放一个奴隶我也愿意。」在这句话里,奴隶的自由是工具,不是目的。这句话冷得吓人——你觉得我是不在乎奴隶,还是太在乎那个快碎掉的国家?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可就在我写那封冷冰冰的信的同时，我口袋里其实已经压着另一份东西了。\n\n打了一年多，我慢慢看明白一件事：这场仗，光靠「保联邦」这个口号，可能赢不了。\n\n南方的整个战争机器，是靠被奴役者撑着的——他们种地、修工事、运补给，把南方的白人男人都腾出来上前线打仗。也就是说，奴隶制本身，就是敌人的军事力量。\n\n那么，如果我宣布解放南方的奴隶呢？\n\n一，等于直接抽掉敌人的劳动力，让南方后方乱掉。二，被解放的黑人可以来参我的军，我正缺兵。三，可以让欧洲那些反对奴隶制的国家（英国、法国）不好意思再帮南方。\n\n你看出来了：解放奴隶，对我来说，先是一步**军事妙棋**，然后才是一件道德上对的事。\n\n顺序很重要。我不是先想「这是对的」，我是先想「这能帮我赢」。这一点，我不打算骗你。',
        en: 'But even as I wrote that cold letter, I was already sitting on something else in my pocket.\n\nAfter a year of war I had slowly come to see one thing: this war might not be won on the slogan "save the Union" alone.\n\nThe South\'s whole war machine ran on enslaved people. They farmed, built fortifications, hauled supplies, and freed every white Southern man to go to the front and fight. Which is to say, slavery itself was the enemy\'s military strength.\n\nSo what if I declared the South\'s slaves free?\n\nOne, it would pull the labor straight out from under the enemy and throw the Southern rear into disorder. Two, freed black men could enlist in my army, and I was short of troops. Three, it would shame the European powers that opposed slavery (Britain, France) out of helping the South.\n\nYou see it: for me, freeing the slaves was first a brilliant military move, and only then a morally right thing.\n\nThe order matters. I did not first think "this is right." I first thought "this can help me win." On that, I will not lie to you.',
      },
      deliverGoal: 'N5 story — Lincoln 口袋已压着解放宣言草案 + 看明白光靠保联邦赢不了 + 奴隶制是敌人军事力量 (被奴役者种地修工事运补给腾出白人上前线) + 解放奴隶三重军事算计 (抽劳动力/招黑人兵/堵欧洲援南) + 「先是军事妙棋后才是道德对的事」顺序很重要',
        engagementHook: '解放奴隶对我来说,先是一步军事妙棋,然后才是一件对的事。我不是先想「这是对的」,是先想「这能帮我赢」。一件对的事,如果出于自私的算计去做,它还算对吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1863 年 1 月 1 日。我签下了那份后来叫 Emancipation Proclamation（解放宣言）的文件。\n\n但你必须看清这张纸到底解放了谁——这是课本最容易让你误会的地方。\n\n它只解放「仍在反叛的州」里的奴隶——也就是南方那个我**管不到**的国家境内的奴隶。而留在我这边的那几个蓄奴边境州（肯塔基、马里兰）的奴隶，它**一个都没解放**。\n\n换句话说：我能控制的地方，奴隶照旧；我控制不到的地方，我宣布他们自由。\n\n这听起来像个空话，对吧？但它不是。因为随着我的军队打到哪，「自由」就在那里变成真的——而且，它第一次让黑人可以正式参加北军。\n\n这张纸，三个人会从三个完全不同的方向看它：我，签下它的总统，把它当军事工具；南方的将领（你换到 Lee 那一遍会懂），把它看成对自己故乡的宣战；还有一个穿上北军蓝军装的黑人士兵（你换到他那一遍会懂），把它看成自己生而为人的证明。\n\n同一张纸，三种命运。',
        en: 'On 1 January 1863 I signed the document later called the Emancipation Proclamation.\n\nBut you must see clearly whom this paper actually freed; this is where textbooks most easily mislead you.\n\nIt freed only the slaves in "states still in rebellion," that is, slaves inside the Southern country I could not reach. The slaves in the slaveholding border states that had stayed on my side (Kentucky, Maryland), it freed not a single one.\n\nIn other words: where I had control, the slaves stayed enslaved; where I had no control, I declared them free.\n\nThat sounds like empty words, doesn\'t it? But it was not. Because wherever my army marched, "freedom" became real there, and for the first time it let black men formally join the Union army.\n\nThree people would read this one paper from three completely different directions: I, the president who signed it, treated it as a military tool; a Southern general (you will understand when you switch to Lee\'s pass) saw it as a declaration of war on his homeland; and a black soldier in Union blue (you will understand when you switch to his pass) saw it as the proof that he was born a human being.\n\nOne paper, three fates.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1863.1.1 Emancipation Proclamation 签署 + 只解放反叛州 (管不到的南方) 蓄奴边境州一个不解放 + 看似空话但军队打到哪自由变真 + 首次让黑人正式参北军 + 三 lens 对位 (Lincoln 军事工具 / Lee 对故乡宣战 / USCT 士兵生而为人证明) 同一张纸三种命运',
        engagementHook: '解放宣言只解放我管不到的南方,我能管到的边境州一个奴隶都没解放。同一张纸:我当军事工具,南方将领当对故乡宣战,黑人士兵当生而为人的证明。一张纸,怎么会有三种完全相反的读法?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '解放宣言签下去之后，发生了一件连我自己都没完全料到的事。\n\n黑人男人，成千上万地，来参军。\n\n到战争结束，大约有 18 万黑人在北军里当兵——其中很多是刚从奴隶身份里走出来的人。他们组成专门的部队，叫 United States Colored Troops（合众国有色人种部队）。\n\n这些人打得极猛。因为他们清楚：对他们来说，这不是一场「保联邦」的政治仗，这是一场为自己、为家人、为「黑人到底算不算人」而打的仗。\n\n但我得诚实告诉你一件不光彩的事：这些黑人士兵，跟白人士兵不同工同酬。白人兵每月拿 13 美元，黑人兵只拿 10 美元，还要扣掉 3 美元的衣物费——到手 7 块。一样上战场、一样会死，工资却差一截。直到 1864 年，国会才把军饷拉平。\n\n我用了他们的命，却没有一开始就给他们平等。这笔账，记在我头上。',
        en: 'After the Proclamation was signed, something happened that even I had not fully foreseen.\n\nBlack men came to enlist, by the tens of thousands.\n\nBy the end of the war about 180,000 black men served in the Union army, many of them just out of slavery. They formed dedicated units called the United States Colored Troops.\n\nThese men fought ferociously. Because they knew: for them this was not a political war to "save the Union." It was a war for themselves, for their families, for whether a black person counted as a person at all.\n\nBut I must honestly tell you something not to my credit: these black soldiers were not paid equally with white soldiers. A white soldier drew 13 dollars a month; a black soldier drew only 10, with 3 dollars for clothing deducted, leaving 7. Same battlefield, same chance of dying, but a wage cut short. Not until 1864 did Congress level the pay.\n\nI used their lives, and I did not give them equality from the start. That debt is charged to me.',
      },
      deliverGoal: 'N7 story — 解放宣言后黑人成千上万参军 + 到战争结束约 18 万黑人在北军 (United States Colored Troops) 多是刚脱离奴隶 + 打得猛因为为自己/家人/黑人算不算人而战 + 同工不同酬 (白人 13 / 黑人 10 扣 3 衣物费=7) 一样会死工资差 + 1864 国会才拉平 + 「我用了他们的命没给平等这笔账记我头上」',
        engagementHook: '18 万黑人为北军流血,可一开始他们拿的军饷比白人少一截——一样上战场一样会死。我用了他们的命,却没一开始就给平等。你怎么评这笔账?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1863 年 7 月，宾夕法尼亚一个叫 Gettysburg（葛底斯堡）的小镇。三天里，南北两军在这里死了几万人——这是整场战争的转折点。南军的攻势在这里被挡住，从此再没能真正翻盘。\n\n四个月后，11 月 19 日，我去那片埋了几千具尸体的战场，做了一个很短的演讲——只有两百多个词，两分钟讲完。\n\n我没去夸哪个将军，也没细数战功。我说了一句话，把这场仗的意义，从「保联邦」往上又抬了一层：\n\n这个国家「孕育于自由，奉行人人生而平等的信念」；我们打这场仗，是要让「民有、民治、民享的政府，不致从地球上消失」。\n\n你注意到了吗？我开始把「平等」这两个字，正式放进这场战争的意义里了。\n\n一年前我还说「能不解放一个奴隶就保住国家也行」。一年后我站在尸骨上说「人人生而平等」。是我变了，还是这场仗逼着我变？',
        en: 'July 1863, a small Pennsylvania town called Gettysburg. Over three days, North and South lost tens of thousands of men here. This was the turning point of the whole war. The Southern offensive was stopped here and never truly recovered.\n\nFour months later, on 19 November, I went to that battlefield where thousands of bodies were buried and gave a very short speech, only a little over two hundred words, two minutes to deliver.\n\nI did not praise any general or count up victories. I said one thing that lifted the meaning of this war one level above "save the Union":\n\nthis nation was "conceived in liberty, and dedicated to the proposition that all men are created equal"; and we fought so that "government of the people, by the people, for the people, shall not perish from the earth."\n\nDid you notice? I had begun to put the word "equal" formally into the meaning of this war.\n\nA year earlier I had said "saving the country without freeing a single slave would do." A year later I stood on the bones of the dead and said "all men are created equal." Did I change, or did this war force me to change?',
      },
      deliverGoal: 'N8 story — 1863.7 Gettysburg 三天死几万人是转折点 (南军攻势被挡再没翻盘) + 1863.11.19 Gettysburg Address 两百多词两分钟 + 不夸将军 + 「孕育于自由/人人生而平等」「民有民治民享的政府不致消失」+ 把平等正式放进战争意义 + 自我拷问: 一年前说不解放也行一年后说人人平等 是我变了还是仗逼我变',
        engagementHook: '一年前我说「不解放一个奴隶能保住国家也行」,一年后我站在几千具尸骨上说「人人生而平等」。是我自己变了,还是这场仗逼着我变?人会因为做了一件事,而真的相信它吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '解放宣言有个我自己最清楚的弱点：它是一份**战时命令**，靠的是我作为总司令的战争权力。战争一结束，它可能就失效了——那被解放的人，会不会又被拖回去当奴隶？\n\n所以我知道，光有那张纸不够。要让自由真正、永久地钉死，必须改宪法本身。\n\n1864 到 1865 年，我用尽全部政治手腕，推动国会通过一条新的宪法修正案——第 13 修正案，一句话：在合众国境内，奴隶制永远废除。\n\n这一次，不是「我管不到的地方」，不是「战时工具」，是写进国家根本大法、对**所有州**、永久生效。\n\n1865 年初，这条修正案在国会通过。这是我一生做过的、最接近「纯粹道德正确」的一件事——但你别忘了，它是踩在四年战争、六十多万条命、和一开始那封冷冰冰的信之上，才走到的这一步。\n\n对的结果，未必有干净的来路。',
        en: 'The Proclamation had a weakness I understood better than anyone: it was a wartime order, resting on my war powers as commander in chief. When the war ended it might lapse, and would the freed people be dragged back into slavery?\n\nSo I knew that paper alone was not enough. To nail freedom down truly and permanently, the Constitution itself had to change.\n\nIn 1864 and 1865 I used every bit of political skill I had to push Congress to pass a new constitutional amendment, the Thirteenth, in one line: slavery is forever abolished within the United States.\n\nThis time it was not "the places I could not reach," not a "wartime tool." It was written into the nation\'s foundational law, binding on all states, permanently.\n\nIn early 1865 the amendment passed Congress. It was the closest thing to "pure moral rightness" I did in my life, but do not forget: it stood on four years of war, more than six hundred thousand lives, and that cold letter at the start, to arrive at this step.\n\nA right outcome does not always have a clean road behind it.',
      },
      deliverGoal: 'N9 story — 解放宣言弱点是战时命令 (靠战争权力,战后可能失效/被解放者可能被拖回奴隶) + 必须改宪法本身 + 1864-65 推动 13th Amendment (奴隶制永远废除/对所有州/永久) + 不是管不到的地方不是战时工具 + 1865 初国会通过 + 一生最接近纯道德正确的事但踩在四年战争 60 万命 + 冷信之上 + 「对的结果未必有干净的来路」',
        engagementHook: '解放宣言只是战时命令,可能随战争结束失效。所以我推动把废奴永久写进宪法——这是我一生最接近「纯粹正确」的事。可它踩在四年战争和那封冷信之上。对的结果,一定要有干净的来路吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1865 年 4 月 9 日，南军总司令 Lee（李）在弗吉尼亚一个叫 Appomattox（阿波马托克斯）的小镇投降。四年的仗，结束了。\n\n我没有得意。我太累了，也太清楚后面还有更难的事：怎么把刚分裂、刚流过血的国家，重新缝起来；怎么让几百万刚获自由的黑人，真正站进这个国家里。\n\n就在投降前一个多月，我在第二任就职演说里就劝过大家「不怀恶意，怀着仁慈」对待南方——别清算，要愈合。\n\n可这件事，我没机会亲手去做了。\n\n1865 年 4 月 14 日晚上，投降才过五天，我在剧院里被一个同情南方的人开枪打死。第二天早上断气。\n\n我没看到重建，没看到我推的第 13 修正案在年底正式生效。我留下一个废了奴隶制、却还远远谈不上平等的国家——和一个我永远没机会回答的问题：我到底是为「保联邦」打的仗，还是最后真的为「自由」打的仗？',
        en: 'On 9 April 1865, the Southern commander Lee surrendered at a Virginia town called Appomattox. The four-year war was over.\n\nI did not gloat. I was too tired, and too aware of the harder things ahead: how to sew back together a country that had just split and just bled; how to let millions of newly freed black people truly stand within this country.\n\nJust over a month before the surrender, in my second inaugural address, I had already urged everyone to act "with malice toward none, with charity for all" toward the South: do not settle scores, heal.\n\nBut I would not get the chance to do this work myself.\n\nOn the night of 14 April 1865, just five days after the surrender, I was shot in a theater by a man who sympathized with the South. I died the next morning.\n\nI did not see Reconstruction, did not see the Thirteenth Amendment I had pushed take formal effect at year\'s end. I left behind a country that had ended slavery but was still far from equality, and a question I would never get to answer: did I fight the war to save the Union, or in the end truly for freedom?',
      },
      deliverGoal: 'N10 story (extended close-of-arc) — 1865.4.9 Lee 在 Appomattox 投降战争结束 + Lincoln 不得意 (累+知道后面更难:缝合国家/让黑人真正站进来) + 投降前一个多月的第二任就职演说「不怀恶意怀着仁慈」愈合不清算 + 1865.4.14 投降五天后剧院被同情南方者枪杀次日断气 + 没看到重建/13th 年底生效 + 留下废奴却远谈不上平等的国家 + 永远没机会回答: 为保联邦还是为自由打的仗',
        engagementHook: '投降才五天,我就在剧院被枪杀,没看到重建,也没看到自由真正落地。我留下一个废了奴隶制、却远谈不上平等的国家。我到底是为保联邦打的仗,还是最后真的为自由打的仗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lin-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是真正的解放者。是我顶着压力签了解放宣言，是我推动把废奴永久写进宪法，是我让 18 万黑人能拿起枪为自己而战，是我在尸骨上说出「人人生而平等」。没有我，奴隶制不会在 1865 年就被连根拔掉。\n\n另一种说法：我是个把自由当工具的政客。我一开始公开说「能不解放一个奴隶就保住国家也行」；解放宣言只解放我管不到的地方，是步军事妙棋；我用黑人的命，却给他们打折的军饷。我的「解放」，是被一场我快输掉的战争逼出来的，不是从一开始就有的良心。\n\n这两边不是「功劳加缺点」。是同一个我的两面——同一个人，既算计，也成长；既用人，也救人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a true liberator. It was I who signed the Proclamation under pressure, I who pushed to write abolition permanently into the Constitution, I who let 180,000 black men take up arms to fight for themselves, I who said "all men are created equal" on the bones of the dead. Without me, slavery would not have been torn out by the root in 1865.\n\nThe other view: I was a politician who used freedom as a tool. At first I said openly that "saving the country without freeing a single slave would do." The Proclamation freed only the places I could not reach; it was a clever military move. I used black men\'s lives and paid them docked wages. My "emancipation" was forced out of me by a war I was losing, not a conscience I had from the start.\n\nThese are not "credit plus flaws." They are two faces of the same me, one man who both calculated and grew, who both used people and saved people.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (真正解放者/顶压签解放宣言/推 13th 永久入宪/让 18 万黑人为自己战/尸骨上说人人平等) / 另一种说法 (把自由当工具的政客/起初说不解放也行/解放宣言只解放管不到处是军事妙棋/用黑人命给打折军饷/被快输的战争逼出来不是一开始的良心) / 同一个我两面既算计也成长 / 想 30 秒',
        engagementHook: '真正的解放者,和把自由当工具的政客——是同一个我,既算计也成长。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'lin-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n他厌恶奴隶制，却为了保住国家，开战时把废奴按了一年多；他签下解放自由的那张纸，先是为了赢仗，后才是为了对错；他最后把废奴永久写进宪法，可这一步踩在六十多万条命之上。把这些放在同一个天平上，你怎么称他？\n\n再想一步。你这一生里，迟早会遇到一种时刻：你知道一件事是对的，但马上做，代价太大、可能把局面整个搞砸；你于是等、于是算、于是先做能赢的事，再慢慢做对的事。\n\n那时候，你会觉得自己是「务实」，还是「懦弱」？你会怎么分清——什么时候「等时机」是智慧，什么时候「等时机」只是替自己的犹豫找借口？\n\n今天你身边，有没有一件你知道是对的、却一直在「等更好时机」的事？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nHe hated slavery, yet to save the country he held abolition down for over a year at the war\'s start; he signed the paper that set people free first to win the war, and only then for right and wrong; in the end he wrote abolition permanently into the Constitution, but that step stood on more than six hundred thousand lives. Put these on the same scale. How do you weigh him?\n\nThen take one more step. Somewhere in your own life you will meet a moment like this: you know a thing is right, but to do it at once would cost too much and might wreck the whole situation; so you wait, you calculate, you do the winnable things first and the right things slowly.\n\nWhen that happens, will you call yourself "pragmatic" or "cowardly"? How will you tell the difference, when "waiting for the right time" is wisdom, and when it is only an excuse for your own hesitation?\n\nIn your own life today, is there something you know is right that you keep "waiting for a better time" to do?',
      },
      deliverGoal: 'N12 close — 评价 Lincoln (厌恶奴隶制却开战按废奴一年多/签自由的纸先为赢仗后为对错/最后永久入宪却踩 60 万命) + transfer「你知道一件事对但马上做代价太大于是等于是算先做能赢的再做对的」+ 务实还是懦弱/怎么分清等时机是智慧还是给犹豫找借口 + 今天你身边有没有知道是对却一直等更好时机的事',
        engagementHook: '我知道废奴是对的,却为了保住国家按了它一年多——这是务实,还是懦弱?今天你身边,有没有一件你知道是对的、却一直在「等更好时机」的事?你怎么分清「等时机」是智慧,还是给犹豫找的借口?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Robert E. Lee (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var leeLens = {
  id: 'robert-e-lee',
  name: 'Robert E. Lee',
  nameCn: '罗伯特·E·李',
  role: 'lonely-mediator',
  perspectiveTag: 'loyalty-to-virginia',
  icon: '⚔️',
  description: {
    cn: '弗吉尼亚人，1807 年生，名将之后，西点军校出身，是当时美国陆军里公认最优秀的军官之一。1861 年国家分裂时，他亲口说脱离是错的，奴隶制也是个祸害。可当弗吉尼亚退出联邦，他没法对自己的故乡拔剑，于是辞掉北军、回去领了南军。他打了四年仗，替一个为奴隶制而立的国家流尽了血，尽管他自己说他不是为奴隶制而战。这一遍让你看一个好人，怎么因为「忠于谁」这个问题，走进一场他自己都不完全相信的战争。',
    en: 'A Virginian, born 1807, descended from a famous general, trained at West Point, and reckoned one of the finest officers in the U.S. Army of his day. When the country split in 1861, he said with his own mouth that secession was wrong and slavery a curse. Yet when Virginia left the Union, he could not draw his sword against his own homeland, so he resigned from the Union army and went home to lead the Southern one. He fought for four years and bled for a country founded on slavery, though he said he did not fight for slavery. This pass lets you watch a good man walk, over the question of "whom to be loyal to," into a war he did not fully believe in.',
  },
  storyboard: [
    {
      id: 'lee-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1861 年 4 月，华盛顿。有人代表林肯总统找到我，问我愿不愿意接管整个北方的军队——去平定南方的叛乱。\n\n这是任何一个职业军人一辈子梦寐以求的位置。我是 Robert E. Lee（罗伯特·E·李），西点出身，干了三十多年军人，大家都说我是这支军队里最好的将领之一。\n\n我拒绝了。\n\n不是因为我支持脱离——我亲口说过，脱离是错的，奴隶制是个祸害。也不是因为我想打仗——我恨战争。\n\n我拒绝，是因为几天后，我的家乡弗吉尼亚，决定退出这个国家。而我，没办法举起剑，去砍我自己的故乡、我的邻居、我的亲人。\n\n这一遍，你坐进我这个位置。你会面对一个没有好答案的选择：当你的国家和你的故乡分成两边，你站哪边？',
        en: 'April 1861, Washington. Someone came to me on behalf of President Lincoln and asked whether I would take command of the entire Northern army, to put down the Southern rebellion.\n\nThis is the post any career soldier dreams of his whole life. I am Robert E. Lee, West Point trained, thirty-odd years a soldier, and they all said I was one of the finest generals in this army.\n\nI refused.\n\nNot because I favored secession; I said with my own mouth that secession was wrong, and slavery a curse. Nor because I wanted war; I hated war.\n\nI refused because, a few days later, my home state of Virginia decided to leave this country. And I could not raise my sword to cut down my own homeland, my neighbors, my kin.\n\nThis pass puts you in my seat. You will face a choice with no good answer: when your country and your homeland split into two sides, which side do you stand on?',
      },
      deliverGoal: 'N1 hook — 1861.4 林肯方面邀 Lee 接管北军平叛 (军人梦寐以求) + Lee 自我介绍 (西点/三十多年军人/最好将领之一) + 拒绝 + 不是支持脱离 (亲口说脱离错奴隶制是祸害) 不是想打仗 (恨战争) + 几天后弗吉尼亚退出无法对故乡拔剑 + 这一遍视角 (国家与故乡分两边你站哪边)',
        engagementHook: '林肯请我当北军总司令——军人一辈子梦寐以求的位置。我拒绝了,因为几天后我的故乡弗吉尼亚退出了这个国家。当你的国家和你的故乡分成两边,你站哪边?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我那个选择有多重。\n\n我 1807 年生在弗吉尼亚一个名门。我父亲是独立战争的英雄，可他后来欠债、坐牢、抛下家。我从小看着家族从荣光跌到难堪——我这辈子最在乎的两个字，是「荣誉」。\n\n我进了西点军校，几乎门门第一，没拿过一个处分。毕业后当了三十多年军人，给美国打过仗，建过工事，当过西点的校长。这个国家，United States，是我宣过誓效忠的国家。\n\n但我心里，还有一个比「国家」更近的东西：弗吉尼亚。在我那个时代，很多人觉得自己「首先是弗吉尼亚人，其次才是美国人」。州，是你出生、长大、埋祖先的地方；国，是州联合起来的一个更大的安排。\n\n你得先理解这一点，才懂我后来的选择：对我来说，背叛弗吉尼亚，比背叛美国，更不可想象。',
        en: 'First, who I am, so you understand how heavy that choice was.\n\nI was born in 1807 to a prominent Virginia family. My father was a hero of the war for independence, but he later fell into debt, went to prison, and abandoned the family. I grew up watching our house fall from glory into shame, and the two words I cared about most in my life were "honor."\n\nI went to West Point, near the top in nearly every subject, and never took a single demerit. After graduating I served thirty-odd years, fought for the United States, built fortifications, and served as superintendent of West Point. This country, the United States, was the country I had sworn to serve.\n\nBut in my heart there was something nearer than "country": Virginia. In my time many felt themselves "first a Virginian, second an American." The state was where you were born, raised, and buried your ancestors; the country was a larger arrangement of states joined together.\n\nYou have to grasp this to understand my later choice: for me, betraying Virginia was more unthinkable than betraying the United States.',
      },
      deliverGoal: 'N2 setup — Lee 出身 (1807 弗吉尼亚名门/父亲独立战争英雄后欠债坐牢抛家/家族从荣光跌落→最在乎荣誉) + 西点几乎门门第一无处分/三十多年军人/西点校长/宣誓效忠美国 + 但心里有比国家更近的: 弗吉尼亚 (那时代很多人首先是弗吉尼亚人其次美国人/州是出生埋祖先处国是更大安排) + 背叛弗吉尼亚比背叛美国更不可想象',
        engagementHook: '在我那个时代,很多人觉得自己「首先是弗吉尼亚人,其次才是美国人」。州是你出生、埋祖先的地方,国是更大的安排。「我是哪里人」——这个答案,排在「我是哪国人」前面,你能理解吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得把我对奴隶制的态度说清楚，因为后人吵了一百多年，把我说成各种样子。\n\n真相是复杂的，不好听，但我不替自己美化。\n\n一方面，我写信说过：奴隶制对一个国家来说，是道德上和政治上的祸害。我嘴上不喜欢它。\n\n另一方面，我自己的家庭就靠被奴役者维持。我管过我岳父留下的种植园，管过上百个被奴役的人。有记录说，在我管理期间，逃跑的被奴役者被抓回来后受过严酷的惩罚。\n\n你看出这里的别扭了吗？我嘴上说奴隶制是祸害，手上却在管理奴隶、维持奴隶制。\n\n很多那个时代的「体面南方人」都是这个样子：他们能一边在私下里说奴隶制不好，一边一天也离不开它带来的财富和生活。\n\n所以请别把我想成一个为奴隶制热血辩护的恶人。我更像是一个：明知有问题，却被自己的身份、利益、和故乡，死死绑在那一边的人。这种人，有时候比纯粹的坏人更难评判。',
        en: 'I must make my stance on slavery clear, because for over a century people have argued and painted me in every shade.\n\nThe truth is complicated, and not flattering, but I will not prettify myself.\n\nOn one hand, I wrote in a letter that slavery was a moral and political evil for any country. In words, I disliked it.\n\nOn the other hand, my own household was sustained by enslaved people. I managed the plantation my father-in-law left, with over a hundred enslaved people. There are records that during my management, enslaved people who fled were caught and harshly punished.\n\nDo you see the contradiction here? In words I called slavery an evil; with my hands I managed slaves and kept slavery going.\n\nMany "respectable Southerners" of that era were like this: they could say privately that slavery was wrong while not being able to live a single day without the wealth and life it brought them.\n\nSo do not picture me as a villain hot-bloodedly defending slavery. I was more a man who knew there was a problem, yet was bound fast to that side by his own identity, interest, and homeland. Such a man is sometimes harder to judge than a pure villain.',
      },
      deliverGoal: 'N3 setup — Lee 对奴隶制复杂态度 (写信说奴隶制是道德政治祸害嘴上不喜欢 / 但自家靠被奴役者维持/管岳父种植园上百被奴役者/有记录逃跑者抓回受严酷惩罚) + 嘴上说祸害手上维持的别扭 + 那时代体面南方人都这样 (私下说不好却离不开它的财富) + 别把我想成热血辩护的恶人 我是明知有问题却被身份利益故乡绑死的人 比纯粹坏人更难评判',
        engagementHook: '我嘴上说奴隶制是祸害,手上却管着上百个被奴役的人、维持着奴隶制。一个「明知有问题、却被身份和利益绑死」的人,是不是比纯粹的坏人更难评判?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1861 年 4 月，几天之内，两件事砸到你面前。\n\n第一件：林肯方面请你当北军总司令——你毕生的荣誉巅峰，伸手就能拿到。\n\n第二件：你的家乡弗吉尼亚投票退出了联邦。\n\n你被劈成两半。你效忠了三十多年的美国，要你去打南方；你出生、长大、埋着祖先的弗吉尼亚，在另一边。\n\n你在自家的房子里来回踱步，踱了整整一夜。你知道无论选哪边，都要背叛另一个你深爱的东西。\n\n你的妻子听见你在楼上的房间里跪着祈祷。\n\n天快亮的时候，你做了决定。你写了辞职信，辞掉美国陆军——那支你宣誓效忠了一辈子的军队。你写道：除了为保卫我的故乡，我再也不想拔出这把剑。\n\n现在问你自己：你刚刚是选了「忠诚」，还是选了「逃避一个更难的对错判断」？这两个，你分得清吗？',
        en: 'Now you are me.\n\nIn April 1861, within a few days, two things land in front of you.\n\nFirst: Lincoln\'s side asks you to command the Northern army, the summit of your life\'s honor, there for the taking.\n\nSecond: your home state of Virginia votes to leave the Union.\n\nYou are split in two. The United States you have served for thirty-odd years asks you to make war on the South; the Virginia where you were born, raised, and buried your ancestors stands on the other side.\n\nYou pace back and forth in your own house, all night long. You know that whichever side you choose, you must betray something else you love deeply.\n\nYour wife hears you in the upstairs room, on your knees, praying.\n\nNear dawn, you decide. You write a letter resigning from the U.S. Army, the army you swore to serve your whole life. You write: except in defense of my homeland, I never wish to draw this sword again.\n\nNow ask yourself: did you just choose "loyalty," or did you choose "to dodge a harder judgment of right and wrong"? Can you tell the two apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1861.4 几天内两件事 (林肯请当北军总司令=荣誉巅峰 / 弗吉尼亚投票退出) + 被劈两半 (效忠三十多年的美国要你打南方 / 出生埋祖先的弗吉尼亚在另一边) + 自家踱步整夜/妻听见跪着祈祷 + 天亮辞职辞美国陆军「除了保卫故乡再不想拔这把剑」+ 自我拷问: 选了忠诚还是逃避更难的对错判断',
        engagementHook: '我在自家房里踱了一整夜,妻子听见我跪着祈祷。天亮我辞掉了效忠一辈子的美国陆军。我刚刚是选了「忠诚」,还是选了「逃避一个更难的对错判断」?这两个,你分得清吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我回了弗吉尼亚，接过了南军。\n\n然后，一件讽刺的事发生了：我打得太好了。\n\n我本来恨战争、不信脱离，可一旦上了战场，我那三十多年的本事全爆发出来。我带的那支军队，叫北弗吉尼亚军团，成了整场战争里南方最能打的一支。\n\n1862、1863 年，我一次次以少胜多，把人多势众的北军打得灰头土脸。北方换了一个又一个总司令，都拿我没办法。林肯急得睡不着，就是因为我。\n\n你能看出这里头的悲剧吗？我越能打，这场仗就拖得越久；仗拖得越久，死的人就越多。\n\n我用我一生最骄傲的才能，去延长一场我自己都不完全相信的战争——一场为一个靠奴隶制立国的政权而打的战争。\n\n我的「荣誉」和我的「能力」，在这里变成了害人的东西。一个好将领，未必站在对的一边。',
        en: 'I went back to Virginia and took command of the Southern army.\n\nThen something ironic happened: I fought too well.\n\nI had hated war and disbelieved in secession, but once I was on the battlefield, my thirty-odd years of skill all came out. The army I led, the Army of Northern Virginia, became the South\'s most formidable in the whole war.\n\nIn 1862 and 1863 I beat the numerically superior Northern army again and again, often with fewer men, leaving them bruised and shamed. The North changed one commander after another, and none could handle me. Lincoln lay awake at night because of me.\n\nCan you see the tragedy in this? The better I fought, the longer the war dragged on; the longer it dragged, the more men died.\n\nI used the talent I was proudest of in my life to prolong a war I did not fully believe in, a war fought for a regime founded on slavery.\n\nMy "honor" and my "skill" became, here, things that harmed people. A good general does not necessarily stand on the right side.',
      },
      deliverGoal: 'N5 story — Lee 回弗吉尼亚接南军 + 讽刺: 打得太好 (恨战争不信脱离但上战场三十年本事爆发) + 北弗吉尼亚军团南方最能打 + 1862-63 以少胜多打灰头土脸北军/北方换帅都没办法/林肯急得睡不着 + 悲剧: 越能打仗拖越久死人越多 + 用一生最骄傲的才能延长一场不完全相信的仗 (为靠奴隶制立国的政权) + 荣誉和能力变成害人的东西 好将领未必在对的一边',
        engagementHook: '我越能打,这场仗拖得越久,死的人就越多。我用一生最骄傲的才能,延长了一场我自己都不完全相信的战争。一个出色的人,如果站错了边,他的「出色」算什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1863 年 1 月 1 日，林肯签了那份解放宣言。\n\n你在白宫那一遍，听过林肯怎么看它：一份军事工具。\n\n而我，在弗吉尼亚的战场上，是这样看它的：\n\n它针对的，正是我和我替之流血的那个南方。它一笔宣布我们境内几百万被奴役者「自由」，要抽空我们的劳动力、要把这些人变成扛枪打我们的兵。在我们这边看，这是林肯把战争从「政治分裂」彻底变成了「社会颠覆」——他要的不只是赢，是把我们的整个生活方式连根拔掉。\n\n这张纸让南方更不肯投降了。因为现在不投降不只是为了「独立」，也是为了我们以为的「秩序」。这就是它残酷的地方：它一边给被奴役者自由，一边让仗打得更狠、拖得更长。\n\n同一张纸，三个人三种命运：林肯当工具，我当宣战，还有一个穿上蓝军装的黑人士兵（你换到他那一遍会懂），把它当成自己生而为人的证明。\n\n我能看见前两种。第三种，我那时候，是看不见、也不愿看见的。',
        en: 'On 1 January 1863, Lincoln signed the Emancipation Proclamation.\n\nIn the White House pass, you heard how Lincoln saw it: a military tool.\n\nI, on the battlefield in Virginia, saw it like this:\n\nIt was aimed precisely at the South I was bleeding for. With a stroke it declared the millions of enslaved people in our territory "free," to drain our labor and turn those people into soldiers shouldering guns against us. From our side it looked as if Lincoln had turned the war from "political split" into outright "social overthrow": he wanted not just to win, but to tear our whole way of life out by the root.\n\nThat paper made the South even less willing to surrender. Now refusing to surrender was not only for "independence" but for what we believed was "order." That is the cruel part: it gave freedom to the enslaved with one hand, and made the war fiercer and longer with the other.\n\nOne paper, three people, three fates: Lincoln took it as a tool, I took it as a declaration of war, and a black soldier in blue (you will understand when you switch to his pass) took it as the proof that he was born a human being.\n\nI could see the first two. The third, at the time, I could not see, and would not see.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1863.1.1 解放宣言 + 桥回 Lincoln lens (军事工具) + Lee 视角: 针对他流血的南方/宣布几百万被奴役者自由抽劳动力变成打他们的兵/在南方看是从政治分裂变社会颠覆要连根拔生活方式 + 让南方更不肯降 (为以为的秩序) 残酷: 给自由同时让仗更狠更长 + 三 lens 对位 (Lincoln 工具 / Lee 宣战 / USCT 生而为人证明) Lee 看得见前两种第三种看不见也不愿看见',
        engagementHook: '同一张解放宣言:林肯当军事工具,我当对故乡宣战。还有一个穿蓝军装的黑人士兵,把它当成自己生而为人的证明——而那一种,我那时候看不见,也不愿看见。为什么有些真相,我们「不愿」看见?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1863 年 7 月，我做了一生最大的一个赌。\n\n我决定主动打进北方，去宾夕法尼亚一个叫 Gettysburg（葛底斯堡）的小镇。我想：与其在弗吉尼亚被拖死，不如打到北方腹地，逼林肯求和。\n\n那是三天的血战。第三天，我下了一道后来被人骂了一辈子的命令：让一万多步兵，列着整齐的队形，穿过一片开阔地，正面冲北军坚固的防线。\n\n那叫 Pickett\'s Charge（皮克特冲锋）。一万多人冲过去，被炮火和子弹成片地割倒，半数没能回来。我亲眼看着我最好的士兵，在我的命令下，走向必死。\n\n冲锋失败了。我骑马迎那些退回来的残兵，对他们说：这是我的错，全是我的错。\n\n这是整场战争的转折点。从这天起，我再没能真正翻盘。\n\n你看，连最厉害的将领，也会因为太想赢、太相信自己，下出葬送几千条命的命令。能力越大，错起来，代价越惨。',
        en: 'In July 1863 I made the biggest gamble of my life.\n\nI decided to strike north into Pennsylvania, to a small town called Gettysburg. I thought: rather than be ground down in Virginia, better to march into the Northern heartland and force Lincoln to sue for peace.\n\nIt was three days of bloody fighting. On the third day I gave an order that men would curse for the rest of my life: I sent over ten thousand infantry, in neat formation, across an open field, straight at the Northern army\'s strong line.\n\nIt is called Pickett\'s Charge. Over ten thousand men charged across and were cut down in swaths by cannon and bullets; half never came back. With my own eyes I watched my best soldiers, under my order, walk to certain death.\n\nThe charge failed. I rode out to meet the broken men coming back and told them: this is my fault, all my fault.\n\nThis was the turning point of the whole war. From that day I never truly recovered.\n\nYou see, even the finest general, wanting too badly to win and trusting himself too much, can give an order that throws away thousands of lives. The greater the ability, the more terrible the cost when it errs.',
      },
      deliverGoal: 'N7 story — 1863.7 Lee 一生最大的赌 (主动打进北方 Gettysburg/想逼林肯求和) + 三天血战 + 第三天下被骂一辈子的命令 (一万多步兵整齐队形穿开阔地正面冲北军坚固防线) = Pickett\'s Charge + 半数没回来/亲眼看最好士兵走向必死 + 失败 + Lee 对残兵「这是我的错全是我的错」+ 整场战争转折点再没翻盘 + 最厉害将领也会因太想赢太信自己葬送几千命 能力越大错起来代价越惨',
        engagementHook: '第三天我下令一万多人列队穿过开阔地,正面冲坚固防线——半数没能回来。我对退回的残兵说「这是我的错」。连最厉害的将领,也会因为太想赢、太相信自己,葬送几千条命。你怎么看「能力」和「错误」的关系?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '葛底斯堡之后，我又撑了将近两年。\n\n这两年很苦。北方人多、补给足，源源不断地补人补枪；我这边人越打越少，粮越来越缺，士兵饿着肚子、光着脚还在跟我打。\n\n我得诚实告诉你一件我那时候选择不去多想的事：我对面的北军里，有越来越多穿蓝军装的黑人士兵——United States Colored Troops（合众国有色人种部队）。\n\n这些人，很多就是从我们南方逃出去、或被我们这边当作财产的人。现在他们拿起枪，回过头来打我们。\n\n更黑暗的是：有南军部队，对俘虏的黑人士兵不按战俘对待——有的当场处死，有的卖回去当奴隶。在我们这边的逻辑里，他们「不是合法的兵，是叛乱的财产」。\n\n你看出我的位置有多扭曲了吗？我自认是个讲荣誉、讲骑士风度的军人。可我领的这支军队，对一部分敌人，连最起码的战俘待遇都不给——因为那部分敌人，在我们眼里，本来就「不算完整的人」。',
        en: 'After Gettysburg I held on for nearly two more years.\n\nThose two years were bitter. The North had more men and ample supplies, pouring in replacements and guns without end; my side grew fewer with every fight, shorter and shorter on food, soldiers fighting on for me hungry and barefoot.\n\nI must honestly tell you something I chose at the time not to dwell on: across from me, the Northern army held more and more black soldiers in blue, the United States Colored Troops.\n\nMany of these men were people who had fled our South, or whom our side held as property. Now they took up guns and turned back to fight us.\n\nDarker still: some Southern units did not treat captured black soldiers as prisoners of war. Some were killed on the spot, some sold back into slavery. In our logic they were "not lawful soldiers but rebellious property."\n\nDo you see how twisted my position was? I thought of myself as a soldier of honor, of chivalry. Yet the army I led denied a part of the enemy even the most basic treatment of prisoners, because that part of the enemy, in our eyes, "did not count as whole people" to begin with.',
      },
      deliverGoal: 'N8 story — Gettysburg 后撑近两年 (北方人多补给足/南方人越打越少粮缺/士兵饿着光脚还打) + 诚实: 对面北军越来越多黑人士兵 USCT (很多是从南方逃出或被当财产的人现在回头打) + 更黑暗: 南军对俘虏黑人士兵不按战俘 (当场处死/卖回当奴隶) 因「不是合法兵是叛乱财产」+ Lee 位置扭曲 (自认讲荣誉骑士风度却领的军队对一部分敌人连战俘待遇都不给因那部分在我们眼里不算完整的人)',
        engagementHook: '我自认是个讲荣誉、讲骑士风度的军人。可我领的军队,对俘虏的黑人士兵连最起码的战俘待遇都不给——因为在我们眼里,他们「本来就不算完整的人」。一个人的「荣誉」,能不能容下这种盲区?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1865 年 4 月，到头了。\n\n我的军队被围在弗吉尼亚一个叫 Appomattox（阿波马托克斯）的小镇，又饿又累，再也打不动了。\n\n我可以下令让残兵散进山里，打没完没了的游击战。很多人劝我这么干。但我没有。\n\n我穿上我最好的军服，去见北军的将领 Grant（格兰特），投降。\n\n我后来说，那是我一生中最难受的一天——我宁可死一千次，也不愿去签那份降书。但我清楚：再打下去，只是让更多年轻人白白去死。\n\n这是我做过的、争议最小的一个决定：及时认输，停止流血。\n\n投降之后，我没有逃，没有煽动，没有号召南方人继续反抗。我回家，余生劝南方人接受失败、重新做美国人。这一点，连我的敌人都敬重。\n\n你看，同一个我：开战时的选择害了很多人，收场时的选择救了很多人。一个人，可以在不同的关口，既是问题，又是答案。',
        en: 'April 1865, the end came.\n\nMy army was surrounded at a Virginia town called Appomattox, hungry and exhausted, unable to fight any longer.\n\nI could have ordered the remnants to scatter into the hills and wage endless guerrilla war. Many urged me to do it. I did not.\n\nI put on my best uniform and went to meet the Northern general Grant, to surrender.\n\nI later said it was the hardest day of my life; I would rather have died a thousand times than sign that surrender. But I knew clearly: to fight on was only to send more young men to die for nothing.\n\nThis was the least disputed decision I ever made: to admit defeat in time and stop the bleeding.\n\nAfter surrendering I did not flee, did not stir up trouble, did not call on Southerners to keep resisting. I went home and spent my remaining years urging Southerners to accept defeat and become Americans again. Even my enemies respected this.\n\nYou see, the same me: my choice at the war\'s start harmed many; my choice at its close saved many. A person can be, at different gates, both the problem and the answer.',
      },
      deliverGoal: 'N9 story — 1865.4 Lee 军队被围 Appomattox 又饿又累打不动 + 可下令散进山打游击 (很多人劝) 但没有 + 穿最好军服见 Grant 投降 + 一生最难受的一天宁死千次不愿签降书 但知道再打只是让年轻人白死 + 争议最小的决定 (及时认输停止流血) + 投降后不逃不煽动余生劝南方接受失败重新做美国人连敌人都敬重 + 同一个我 (开战害很多人收场救很多人) 一个人不同关口既是问题又是答案',
        engagementHook: '开战时,我的选择害了很多人;收场时,我及时认输、阻止了更多年轻人白死。同一个我,在不同的关口,既是问题,又是答案。一个人可以同时是这两样吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1870 年死了。可关于我的争吵，到今天都没停。\n\n我死后，南方人需要一个英雄来安慰自己的失败。于是他们把我塑造成一个完美的传奇：高贵、无私、为「州权」和「自由」而战的圣人——还顺手把这场战争的真正起因，奴隶制，从故事里抹掉。这套说法，后来叫「Lost Cause（失败的伟业）」神话。\n\n一百多年里，南方各地立起一座座我的铜像，矗在城市广场、法院门口。\n\n但这些铜像里的我，是被美化、被利用过的我。真实的我，比铜像复杂得多，也难堪得多：我替一个为奴隶制立国的政权打了四年仗，哪怕我嘴上说我不为奴隶制而战。\n\n这些年，很多城市开始把我的铜像拆掉。这件事本身，就是这个国家还在为「该怎么记住我、记住这场战争」而争吵的证据。\n\n一个人死了一百多年，还能让一个国家分成两派——这说明，我的故事里，藏着这个国家始终没和解的那个伤口。',
        en: 'I died in 1870. But the quarrel over me has not stopped to this day.\n\nAfter my death, Southerners needed a hero to comfort their defeat. So they cast me as a flawless legend: noble, selfless, a saint who fought for "states\' rights" and "liberty," and along the way they erased the war\'s true cause, slavery, from the story. This telling later came to be called the "Lost Cause" myth.\n\nFor over a century, statues of me rose across the South, standing in city squares and before courthouses.\n\nBut the me in those statues is a beautified, exploited me. The real me was far more complicated, and far more shameful: I fought four years for a regime founded on slavery, even as I said with my mouth that I did not fight for slavery.\n\nIn recent years many cities have begun to take my statues down. That fact itself is evidence that this country is still arguing over "how to remember me, and remember this war."\n\nA man dead for over a century can still split a country in two. That shows that within my story lies the wound this country has never healed.',
      },
      deliverGoal: 'N10 story (extended close-of-arc) — Lee 1870 死但争吵至今 + 死后南方需要英雄安慰失败→塑成完美传奇 (高贵无私为州权自由的圣人/抹掉真正起因奴隶制) = Lost Cause 神话 + 一百多年各地立铜像 (广场法院前) + 但铜像里是被美化利用的我真实的我更复杂难堪 (替奴隶制立国政权打四年仗哪怕嘴上说不为奴隶制) + 近年很多城市拆铜像 = 这国家还在争该怎么记住我和这场战争 + 死一百多年还能让国家分两派说明我故事藏着没和解的伤口',
        engagementHook: '我死后被塑成一个为「州权」「自由」而战的完美圣人——奴隶制这个真正的起因,被从故事里抹掉了。这叫 Lost Cause 神话。一个人死了一百多年,还能让一个国家为「怎么记住他」分成两派。为什么有些历史人物,我们这么难达成共识?',
      expectsRealAnswer: false,
    },
    {
      id: 'lee-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是个被忠诚困住的悲剧人物。我反对脱离、说奴隶制是祸害，可当故乡退出，我没法对自己出生、埋着祖先的土地拔剑。我不是为奴隶制而战，我是为「不背叛弗吉尼亚」而战。收场时，我及时认输、劝南方放下，省了无数条命。换作很多人，处在我那个忠诚的撕裂里，未必比我做得好。\n\n另一种说法：我是个用高尚动机替罪恶服务的人。不管我心里多挣扎，事实是：我把一生最好的军事才能，献给了一个为奴隶制而立的政权，让一场该早点结束的战争多拖了好几年、多死了几万人。我自己管着上百个被奴役者。我的「荣誉」，恰恰是我看不见那些被我们当作「不算人」的人的原因。\n\n这两边不是「优点加缺点」。是同一种东西的两面——我那份让人敬重的「忠诚」，正是让我替罪恶流血的那份「忠诚」。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a tragic figure trapped by loyalty. I opposed secession and called slavery an evil, yet when my homeland left, I could not draw my sword against the soil where I was born and my ancestors are buried. I did not fight for slavery; I fought for "not betraying Virginia." At the close, I admitted defeat in time and urged the South to lay down arms, sparing countless lives. Put in my torn loyalty, many would not have done better than I did.\n\nThe other view: I was a man who served evil with noble motives. However I struggled inside, the fact is: I gave the finest military talent of my life to a regime founded on slavery, dragging a war that should have ended sooner out for years more, costing tens of thousands more lives. I myself held over a hundred enslaved people. My "honor" was the very reason I could not see the people we counted as "not human."\n\nThese are not "strengths plus flaws." They are two faces of one thing. The "loyalty" in me that people respect is exactly the "loyalty" that made me bleed for evil.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (被忠诚困住的悲剧/反对脱离说奴隶制祸害但无法对故乡拔剑/不为奴隶制为不背叛弗吉尼亚/收场及时认输劝南方放下省无数命/换很多人未必比我好) / 另一种说法 (用高尚动机替罪恶服务/把最好军事才能献给奴隶制政权让该早结束的仗多拖几年多死几万人/自家管上百被奴役者/荣誉正是看不见被当不算人的人的原因) / 同一种东西两面让人敬重的忠诚正是让我替罪恶流血的忠诚 / 想 30 秒',
        engagementHook: '被忠诚困住的悲剧人物,和用高尚动机替罪恶服务的人——我那份让人敬重的「忠诚」,正是让我替罪恶流血的那份「忠诚」。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'lee-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n他反对脱离、说奴隶制是祸害，却为了不背叛故乡，替一个靠奴隶制立国的政权打了四年仗；他越能打，死的人越多；他收场时的认输又救了无数人。把这些放在同一个天平上，你怎么称他？\n\n再想一步。我这一辈子，栽在一个问题上：当「忠于我所属的群体」和「做对的事」冲突的时候，我选了前者，还说服自己那就是「荣誉」。\n\n这个陷阱，你也会遇到。你的家、你的朋友圈、你的球队、你的国家——你所属的那个「我们」，有一天可能做一件你心里知道不对的事。那时候，跟着「我们」走，会被夸「忠诚」「够意思」；站出来反对，会被骂「叛徒」。\n\n那时候，你会怎么分清：什么时候「忠诚」是美德，什么时候「忠诚」只是你不敢一个人站对那边的借口？\n\n今天你身边，有没有一个「我们」，正在做一件你其实不太认同、却跟着一起做了的事？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nHe opposed secession and called slavery an evil, yet to avoid betraying his homeland he fought four years for a regime founded on slavery; the better he fought, the more men died; and his surrender at the close saved countless lives. Put these on the same scale. How do you weigh him?\n\nThen take one more step. My whole life turned on one question: when "loyalty to the group I belong to" clashed with "doing the right thing," I chose the former and convinced myself that was "honor."\n\nThis trap you will meet too. Your family, your circle of friends, your team, your country, the "us" you belong to may one day do something you know in your heart is wrong. When that happens, going along with "us" gets you praised as "loyal" and "solid"; standing up against it gets you cursed as a "traitor."\n\nWhen that happens, how will you tell the difference: when "loyalty" is a virtue, and when "loyalty" is only your excuse for not daring to stand alone on the right side?\n\nIn your own life today, is there an "us" doing something you do not really agree with, that you have gone along with anyway?',
      },
      deliverGoal: 'N12 close — 评价 Lee (反对脱离说奴隶制祸害却为不背叛故乡替奴隶制政权打四年/越能打死人越多/收场认输救无数人) + transfer「忠于所属群体 vs 做对的事冲突时选前者还说服自己是荣誉」+ 你的家朋友圈球队国家有天可能做你知道不对的事 (跟着走被夸忠诚站出来被骂叛徒) + 怎么分清忠诚是美德还是不敢一个人站对那边的借口 + 今天你身边有没有一个我们正做你不太认同却跟着做的事',
        engagementHook: '我栽在一个问题上:当「忠于我所属的群体」和「做对的事」冲突时,我选了前者,还说服自己那是「荣誉」。今天你身边,有没有一个「我们」,正在做一件你其实不太认同、却跟着一起做了的事?你怎么分清「忠诚」是美德,还是不敢一个人站对那边的借口?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: USCT Soldier (receiving-end) — DEFAULT
// composite,基于第 54 麻省团 + USCT 史实;名字/家世/部分场景为叙事性补充 (括号短句标注)
// ═══════════════════════════════════════════════════════════════════════

export var usctSoldierLens = {
  id: 'usct-soldier-receiving-end',
  name: 'A USCT Soldier (54th Mass.)',
  nameCn: '一个北军黑人士兵（第 54 麻省团）',
  role: 'receiving-end',
  perspectiveTag: 'born-to-prove-human',
  icon: '🔵',
  description: {
    cn: '一个加入北军的获释黑人士兵，是 18 万黑人军人之一，原型是真实的第 54 麻省团（这一遍的名字和家世是叙事性补充，士兵的经历、军饷、被俘风险都依据真实的黑人部队史）。生在马里兰一个种植园，年轻时逃到北方，1863 年解放宣言一开放黑人参军，他就报了名。他领着比白人少一截的军饷，明知被南军俘虏可能当场被杀，还是穿上了那身蓝军装。这一遍，你站在那些被那部宪法算成 3/5、又被这场战争第一次拿起枪的人这边，看南北战争到底为谁而打。',
    en: 'A freed black man who joined the Union army, one of 180,000 black soldiers, modeled on the real 54th Massachusetts Regiment (the name and family in this pass are narrative additions; the soldier\'s experience, pay, and risk of capture all follow the real history of the black units). Born on a Maryland plantation, he fled north as a young man, and the moment the 1863 Proclamation opened enlistment to black men, he signed up. He drew pay short of a white soldier\'s, knew that capture by the Southern army might mean death on the spot, and put on the blue uniform all the same. This pass puts you with the people that Constitution counted as three-fifths, who picked up a gun for the first time in this war, to see whom the Civil War was really fought for.',
  },
  storyboard: [
    {
      id: 'usct-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1863 年的一个早上，我穿上了一身蓝色的军装。\n\n我这辈子从没穿过这么体面的衣服。更没想过的是：穿上它，我就成了一个兵——一个手里有枪、有权开枪的人。\n\n你要知道，就在不久前，我还是一笔财产。在主人的账本上，我跟牲口记在一起，不算一个完整的人。\n\n我叫不出我真正的姓——奴隶大多没有姓（这一遍给我的名字和家世，是叙事的补充；我经历的事，是 18 万跟我一样的黑人士兵真实经历过的）。\n\n现在，这个曾经把我算成财产的国家，发给我一支枪，让我去为它打仗。\n\n我清楚得很：我穿上这身军装，不是为了「保住这个国家」。我是为了一件更小、也更大的事——证明我，是一个人。\n\n这一遍，你站在我这里，看这场仗到底为谁而打。',
        en: 'One morning in 1863, I put on a blue uniform.\n\nI had never in my life worn anything so respectable. What I had thought even less possible: putting it on made me a soldier, a man with a gun, a man with the right to fire it.\n\nYou must understand that not long before, I was a piece of property. In my master\'s ledger I was recorded alongside the livestock, not counted as a whole person.\n\nI cannot say my true surname; most of the enslaved had none (the name and family this pass gives me are narrative additions; what I lived through is what 180,000 black soldiers like me truly lived through).\n\nNow this country, which once counted me as property, handed me a gun and sent me to fight for it.\n\nI knew it well: I put on this uniform not to "save this country." I did it for something smaller, and larger, to prove that I am a person.\n\nThis pass, you stand where I stand, to see whom this war was really fought for.',
      },
      deliverGoal: 'N1 hook (gold-standard) — 1863 早上穿蓝军装 + 这辈子没穿过这么体面/穿上成了兵 (有枪有权开枪) + 不久前还是财产 (账本跟牲口记一起不算完整的人) + anti-fab 括号短句 (叫不出真姓奴隶多无姓/名字家世是叙事补充/经历是 18 万黑人士兵真实经历) + 曾把我算财产的国家发我枪 + 不为保国为更小也更大的事: 证明我是一个人 + 这一遍看这场仗为谁打',
        engagementHook: '不久前我还是账本上的一笔财产,跟牲口记在一起。现在这个曾把我算成财产的国家,发给我一支枪。我穿上军装,不是为了保住这个国家,是为了证明我是一个人。这两个理由,你觉得哪个更重?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是从哪儿来的，你才懂这身军装对我意味着什么。\n\n我生在马里兰一个种植园。从能走路起就下地：种烟草、摘棉花、喂牲口。我没上过一天学，因为教奴隶识字是犯法的——他们怕我们识了字，就会读到一些他们不想让我们读到的东西。\n\n我母亲被卖走的那天，我大概八岁。我记得她被人从院子里带走，回头看了我一眼。从那以后，我再没见过她。在那个世界里，一家人随时可能被拆开卖掉，像卖牲口一样。\n\n你能想象吗？你不属于你自己。你的母亲、你的孩子、你的命，都是别人账本上的一个数字，随时能被划掉、卖掉。\n\n年轻的时候，我趁夜逃了，一路往北。我赌一件事：北方，至少不会再把我当财产。\n\n我活了下来，到了自由州。但「不被当财产」和「被当成一个人」，还差着十万八千里。',
        en: 'First, where I came from, so you understand what this uniform meant to me.\n\nI was born on a Maryland plantation. From the time I could walk I worked the fields: tobacco, cotton, feeding the livestock. I never had a single day of school, because teaching a slave to read was against the law. They feared that if we could read, we would read things they did not want us to read.\n\nThe day my mother was sold away, I was about eight. I remember her being led out of the yard, turning back to look at me once. After that I never saw her again. In that world a family could be broken up and sold off at any moment, like livestock.\n\nCan you imagine it? You do not belong to yourself. Your mother, your child, your life are a number in someone else\'s ledger, to be struck out or sold at any time.\n\nWhen I was young I fled by night, north, mile after mile. I gambled on one thing: that the North, at least, would not count me as property again.\n\nI survived, and reached a free state. But "not counted as property" and "counted as a person" were still a world apart.',
      },
      deliverGoal: 'N2 setup — 生在马里兰种植园 (能走路就下地种烟草摘棉花喂牲口) + 没上过学因教奴隶识字犯法 (怕识字读到不想让读的) + 母亲八岁时被卖走回头看一眼再没见过/一家随时被拆卖像牲口 + 你不属于你自己 (母亲孩子命都是账本数字随时划掉卖掉) + 年轻趁夜逃往北赌北方不再当财产 + 活下来到自由州 + 但「不被当财产」和「被当成一个人」差十万八千里',
        engagementHook: '我母亲被卖走那天我大概八岁,她回头看了我一眼,从此再没见过。在那个世界里,我不属于我自己——我的命是别人账本上的一个数字。「不被当财产」和「被当成一个人」,你觉得是同一件事吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '到了北方，我自由了——可这「自由」是打折的。\n\n我能拿工钱了，没人能再卖我了。但白人不愿跟我同桌吃饭，不愿让我的孩子进他们的学校，不愿让我投票。在很多人眼里，我顶多是个「不用当奴隶的黑人」，不是一个跟他们平等的人。\n\n那几年，南北已经为奴隶制吵到了战争边上。1861 年战争真打起来了。一开始，这是一场白人之间的仗——林肯说，这是为了「保住联邦」，不是为了我们。北军一开始根本不收黑人当兵。\n\n我心里憋着一团火。这场仗，明明跟我和我的同胞最相关——它打的就是「人能不能被当作财产」——可它偏偏不让我们上场。\n\n有一个黑人领袖（你跑过废奴那段历史会更熟他），到处奔走、写文章、当面去逼林肯：让黑人参军！只有让我们自己拿起枪为自由而战，自由才真正属于我们。\n\n我就在等这一天。',
        en: 'In the North I was free, but it was a discounted freedom.\n\nI could draw wages now; no one could sell me anymore. But white people would not sit at the same table to eat with me, would not let my children into their schools, would not let me vote. To many eyes I was at most "a black man who need not be a slave," not a person equal to them.\n\nIn those years North and South had quarreled over slavery to the very edge of war. In 1861 the war truly broke out. At first it was a white men\'s fight: Lincoln said it was to "save the Union," not for us. At first the Union army would not take black men as soldiers at all.\n\nThere was a fire banked in my chest. This war was the one most bound up with me and my people; what it fought over was whether a person could be counted as property. Yet it would not let us onto the field.\n\nThere was a black leader (you will know him better if you have run the abolition topic) who traveled, wrote, and pressed Lincoln to his face: let black men enlist! Only if we take up guns and fight for freedom ourselves will freedom truly belong to us.\n\nI was waiting for that day.',
      },
      deliverGoal: 'N3 setup — 北方自由是打折的 (能拿工钱没人卖但白人不同桌吃饭不让孩子进学校不让投票/顶多是不用当奴隶的黑人不是平等的人) + 1861 战争打起来 (一开始白人之间的仗/林肯说为保联邦不为我们/北军一开始不收黑人) + 憋着火 (这场仗最相关 [打的是人能不能被当财产] 却不让上场) + 黑人领袖奔走逼林肯让黑人参军 (跨废奴 Topic 锚: 只有自己拿枪为自由战自由才真属于我们) + 我在等这一天',
        engagementHook: '这场仗打的就是「人能不能被当作财产」——明明跟我和我的同胞最相关,可一开始北军根本不让我们上场。有人说:只有我们自己拿起枪为自由而战,自由才真正属于我们。你同意吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1863 年，那一天来了。解放宣言之后，北军终于开放黑人参军。马萨诸塞组建了一支全是黑人士兵的部队——第 54 麻省团。招兵的消息传开，你听见了。\n\n你站在招兵处门口。你得做一个决定。\n\n你心里清楚：当这个兵，跟白人当兵不一样。你拿的军饷比白人少一截——白人每月 13 块，你只有 10 块，还要扣 3 块衣物费，到手 7 块。一样去送死，钱差一截。\n\n更可怕的是：南军不把你当合法的兵。你要是被他们俘虏，不会被当战俘对待——你可能被当场处死，或者被卖回去重新当奴隶。换句话说，对你来说，这场仗只有「赢」或者「死」，没有「被俘」这个相对安全的中间选项。\n\n钱少、风险大、可能被卖回地狱。一个聪明人会算一算，然后转身回家。\n\n可你脑子里只有一个念头：如果我自己都不肯为「我是个人」拿起枪，我凭什么要求别人承认我是个人？\n\n你迈不迈进那扇门？',
        en: 'Now you are me.\n\nIn 1863 that day came. After the Proclamation, the Union army at last opened enlistment to black men. Massachusetts raised a regiment of all black soldiers, the 54th Massachusetts. Word of the recruiting spread, and you heard it.\n\nYou stand at the door of the recruiting station. You have a decision to make.\n\nYou know it well: being this kind of soldier is not like being a white soldier. Your pay is short of a white man\'s, 13 dollars a month for them, only 10 for you, with 3 dollars for clothing deducted, leaving 7. Same chance of dying, less money.\n\nWorse: the Southern army will not treat you as a lawful soldier. If they capture you, you will not be treated as a prisoner of war; you may be killed on the spot, or sold back into slavery. In other words, for you this war has only "win" or "die," with no relatively safe middle option of "captured."\n\nLess pay, greater risk, the chance of being sold back into hell. A clever man would do the arithmetic and turn for home.\n\nBut one thought is all that is in your head: if I will not take up a gun for "I am a person," by what right do I demand that others recognize me as one?\n\nDo you step through that door?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1863 解放宣言后北军开放黑人参军 + 第 54 麻省团 (全黑人) + 你站招兵处门口要决定 + 当这兵跟白人不一样 (军饷少一截 13 vs 10 扣 3 衣物费=7 一样送死钱差一截) + 更可怕南军不当合法兵 (被俘不当战俘/当场处死或卖回当奴隶/只有赢或死没有被俘的中间选项) + 钱少风险大可能卖回地狱聪明人会回家 + 但一个念头 (我自己都不肯为「我是个人」拿枪凭什么要别人承认我是个人) + 迈不迈进那扇门',
        engagementHook: '军饷比白人少,被俘了可能当场被杀或卖回当奴隶——这场仗对我只有「赢」或「死」。一个聪明人会算一算就回家。可我想:如果我自己都不肯为「我是个人」拿起枪,我凭什么要别人承认我是个人?这扇门,你迈不迈?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我迈进了那扇门。\n\n我们这支第 54 麻省团，是全国都盯着看的一支部队。为什么？因为太多白人不相信黑人能打仗——他们说我们天生胆小、只配干粗活，给我们枪也是浪费。\n\n我们知道全国都在看。所以我们比谁都拼命训练。我们清楚：我们打的不只是南军，还有所有人脑子里那个「黑人不行」的偏见。我们每个人身上，都扛着一整个种族的名声。\n\n这里还有一件事，你得知道，它让我特别骄傲：军饷不平等的事，我们没忍。\n\n国家给我们打折的军饷——白人 13，我们 7。我们整团的人，做了一个决定：宁可一分钱不拿，也不接受打折的军饷。我们罢领军饷，整整顶了一年多。我们对国家说：要么平等地付，要么别付。我们用命为你打仗，也用骨气逼你认我们是平等的兵。\n\n你看，我们要的从来不只是「自由」，是「平等」——是被当成跟别人一样的人。',
        en: 'I stepped through that door.\n\nOur regiment, the 54th Massachusetts, was one the whole country was watching. Why? Because too many white people did not believe black men could fight. They said we were born timid, fit only for heavy labor, that giving us guns was a waste.\n\nWe knew the whole country was watching. So we trained harder than anyone. We understood: we were fighting not only the Southern army, but the prejudice in everyone\'s head that "black men can\'t." Each of us carried the reputation of a whole race on his shoulders.\n\nThere is one more thing you must know, and it makes me especially proud: on the matter of unequal pay, we did not swallow it.\n\nThe country offered us discounted pay, 13 for whites, 7 for us. Our whole regiment made a decision: rather take not a single cent than accept discounted pay. We refused to draw our pay, and held out for over a year. We told the country: pay equally, or do not pay at all. We fought for you with our lives, and with our backbone we forced you to recognize us as equal soldiers.\n\nYou see, what we wanted was never only "freedom." It was "equality," to be counted as people the same as everyone else.',
      },
      deliverGoal: 'N5 story — 迈进门 + 第 54 麻省团全国盯着看 (太多白人不信黑人能打/说天生胆小只配粗活给枪浪费) + 比谁都拼命训练 (打的不只南军还有黑人不行的偏见/每人扛一整个种族名声) + 骄傲的事: 军饷不平等没忍 (国家打折 13 vs 7) 整团决定宁可一分不拿不接受打折/罢领军饷顶一年多/要么平等付要么别付/用命打仗用骨气逼认平等的兵 + 要的从来不只自由是平等 (被当成跟别人一样的人)',
        engagementHook: '国家给我们打折的军饷,我们整团宁可一分钱不拿,罢领顶了一年多——要么平等地付,要么别付。我们用命为你打仗,也用骨气逼你认我们是平等的兵。我们要的从来不只是「自由」,是「平等」。你怎么看这两个的区别?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我要讲那张纸——解放宣言。1863 年 1 月 1 日，林肯签的那张纸。\n\n你换到林肯那一遍，听他说它是「军事工具」；换到南军 Lee 那一遍，听他说它是「对故乡宣战」。\n\n那对我呢？\n\n对我来说，那张纸是我活了大半辈子，第一次有一个国家，白纸黑字承认：跟我一样的人，是人，不是财产。\n\n它当然不完美。它只解放林肯管不到的南方，它是为了赢仗才签的。这些我都知道。\n\n可你得明白：对一个一辈子被算成财产的人来说，「纸上承认你是人」——哪怕只是一张为了打仗才写的纸——也是天大的事。因为在那之前，连一张纸都不肯这么写。\n\n而这张纸最关键的一句，是它让我能参军。它把「自由」从一句空话，变成了我手里这支枪。\n\n我们这些人，就是要用命去做一件事：让那张纸上写的「自由」，从墨水变成真的。纸是林肯写的，但让它成真的，是我们用血。',
        en: 'Now I will tell you about that paper, the Emancipation Proclamation, the one Lincoln signed on 1 January 1863.\n\nIn Lincoln\'s pass you heard him call it a "military tool"; in the Southern general Lee\'s pass you heard him call it "a declaration of war on his homeland."\n\nAnd to me?\n\nTo me that paper was the first time in most of my life that a country admitted, in black and white: people like me are people, not property.\n\nIt was far from perfect, of course. It freed only the South that Lincoln could not reach; it was signed to win the war. I knew all of that.\n\nBut you must understand: to someone counted as property his whole life, "a paper that admits you are a person," even if it is only a paper written to fight a war, is an enormous thing. Because before that, not even one paper would say so.\n\nAnd the most crucial line in that paper was that it let me enlist. It turned "freedom" from an empty word into the gun in my hands.\n\nWe were the ones who would use our lives to do one thing: turn the "freedom" written on that paper from ink into something real. Lincoln wrote the paper, but the ones who made it real were us, with our blood.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1863.1.1 解放宣言 + 桥回 Lincoln (军事工具) + Lee (对故乡宣战) + 对 USCT 士兵: 活了大半辈子第一次有国家白纸黑字承认跟我一样的人是人不是财产 + 当然不完美 (只解放管不到的南方/为赢仗签) 都知道 + 但对一辈子被算财产的人纸上承认你是人是天大的事 (之前连一张纸都不肯这么写) + 最关键让我能参军 (把自由从空话变成手里的枪) + 我们用命让纸上自由从墨水变真 (纸林肯写让它成真的是我们用血)',
        engagementHook: '同一张解放宣言:林肯当军事工具,Lee 当对故乡宣战,而对我——它是我活了大半辈子,第一次有一个国家白纸黑字承认:跟我一样的人是人,不是财产。纸是林肯写的,但让它成真的,是我们用血。一句写在纸上的话,和让它成真,差多远?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1863 年 7 月 18 日，傍晚。我们第 54 麻省团，奉命去打南卡海边的一座炮台，叫 Fort Wagner（瓦格纳堡）。\n\n那是一场几乎不可能赢的仗。炮台又高又厚，前面是一条窄窄的沙滩，我们要顶着炮火，从沙滩上冲上去。所有人都明白：这是用胸口去撞铁墙。\n\n但我们抢着打这一仗。因为全国都在看，我们要用这一仗，永远堵住「黑人不能打仗」这句话。\n\n天快黑的时候，冲锋号响了。我们冲上沙滩。炮弹、子弹像下雨一样砸下来，身边的弟兄一个接一个倒下。\n\n我们的白人指挥官，一个叫 Shaw 的年轻上校，冲在最前面，爬上沙墙，中弹死在墙头。我们有人冲到了墙上，跟敌人肉搏，最后还是被打了下来。\n\n那一夜，我们团死伤过半。\n\n仗，输了。但那一夜之后，全国的报纸都登了：黑人士兵，冲锋在最前，死在最前。从那天起，再没人敢说我们不能打仗。\n\n有时候，你输掉一场仗，却赢回了一样比胜利更重的东西——别人不得不正眼看你。',
        en: 'The evening of 18 July 1863. Our regiment, the 54th Massachusetts, was ordered to assault a fort on the South Carolina coast called Fort Wagner.\n\nIt was a fight almost impossible to win. The fort was high and thick, fronted by a narrow strip of beach, and we had to charge up across that sand under its guns. Everyone understood: this was hurling your chest against an iron wall.\n\nBut we fought to be the ones to make this charge. Because the whole country was watching, and we meant to use this fight to silence the words "black men cannot fight" forever.\n\nAs darkness fell, the bugle sounded. We charged up the sand. Shells and bullets came down like rain, and the brothers beside me fell one after another.\n\nOur white commander, a young colonel named Shaw, charged at the very front, climbed the sand wall, and was shot dead on top of it. Some of us reached the wall and fought hand to hand, and in the end we were driven back.\n\nThat night, more than half our regiment was killed or wounded.\n\nThe fight was lost. But after that night the newspapers across the country printed it: black soldiers charged at the front, and died at the front. From that day no one dared say again that we could not fight.\n\nSometimes you lose a battle and win back something heavier than victory, that others are forced to look you in the eye.',
      },
      deliverGoal: 'N7 story — 1863.7.18 傍晚第 54 麻省团奉命打南卡 Fort Wagner + 几乎不可能赢 (炮台高厚/窄沙滩/顶炮火冲上=胸口撞铁墙) + 抢着打 (全国看要堵住黑人不能打仗) + 天黑冲锋号/冲沙滩炮弹子弹如雨弟兄一个接一个倒 + 白人指挥官 Shaw 上校冲最前爬沙墙中弹死墙头 + 有人冲到墙肉搏被打下来 + 那夜死伤过半 + 输了但全国报纸登 (黑人冲最前死最前) 从此没人敢说不能打仗 + 输掉一场仗赢回比胜利更重的东西 (别人不得不正眼看你)',
        engagementHook: '我们冲上沙滩打 Fort Wagner,死伤过半,这场仗输了。可那一夜之后,全国报纸都登:黑人士兵冲在最前、死在最前。从此再没人敢说我们不能打仗。有时候输掉一场仗,却赢回了一样比胜利更重的东西——你觉得是什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: 'Fort Wagner 那一夜之后，仗还在打，越来越多像我这样的黑人参了军。\n\n到战争结束，大约有 18 万黑人在北军里当兵——差不多每十个北军里就有一个是黑人。我们当中，约有 4 万人死在了这场战争里。\n\n我得告诉你一件最沉的事，免得你以为我们只是「热血」。\n\n我们打仗，是带着一份白人士兵没有的恐惧的。白人兵最坏的结局是被俘、进战俘营。我们不一样：被南军抓到，可能直接被杀，或者被押回南方重新当奴隶。1864 年，田纳西一个叫 Fort Pillow（皮洛堡）的地方，一批已经投降的黑人士兵，被南军成批杀害。这件事传遍全军，让我们更明白：对我们来说，举手投降不是活路。\n\n所以我们每次上战场，背后都没有退路。我们不是不怕死——我们是知道，对我们这样的人，「活着回去重新当奴隶」，比死还可怕。\n\n你能体会吗？为「做一个人」而战的人，连死法都跟别人不一样。',
        en: 'After that night at Fort Wagner the fighting went on, and more and more black men like me joined up.\n\nBy the war\'s end about 180,000 black men served in the Union army, roughly one in every ten Union soldiers. Of us, about 40,000 died in this war.\n\nI must tell you the heaviest thing, so you do not think we were merely "hot-blooded."\n\nWe fought carrying a fear white soldiers did not have. The worst that could happen to a white soldier was capture and a prison camp. For us it was different: caught by the Southern army, we might be killed outright, or marched back south into slavery again. In 1864, at a place in Tennessee called Fort Pillow, a number of black soldiers who had already surrendered were massacred by Southern troops. Word of it spread through the whole army and made us understand all the more: for us, raising our hands to surrender was no road to life.\n\nSo every time we took the field, there was no road back behind us. It was not that we did not fear death; it was that we knew, for people like us, "living to go back into slavery" was worse than death.\n\nCan you feel it? People who fight to "be a person" do not even die the same way as others.',
      },
      deliverGoal: 'N8 story — Fort Wagner 后越来越多黑人参军 + 到战争结束约 18 万黑人在北军 (每十个北军一个黑人) 约 4 万死 + 最沉的事免得以为只是热血 + 带着白人没有的恐惧 (白人最坏被俘进战俘营/我们被南军抓可能直接被杀或押回当奴隶) + 1864 田纳西 Fort Pillow 已投降黑人士兵被成批杀害传遍全军 (举手投降不是活路) + 每次上战场没退路 + 不是不怕死是知道活着回去重新当奴隶比死还可怕 + 为做一个人而战的人连死法都不一样',
        engagementHook: '白人兵最坏的结局是被俘进战俘营,我们被抓可能直接被杀、或押回去重新当奴隶。Fort Pillow 那批已投降的黑人士兵就被成批杀害。我们不是不怕死,是知道「活着回去重新当奴隶」比死还可怕。为「做一个人」而战的人,连死法都跟别人不一样——你能体会吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1865 年 4 月 9 日，南军总司令 Lee 投降。仗，打完了。\n\n你换到 Lee 那一遍，看他怎么签那份降书；换到林肯那一遍，看他赢了仗却五天后被杀。\n\n而我们这些活下来的黑人士兵呢？我们用四万条命，换来了一件实打实的东西：1865 年底，第 13 修正案正式生效——奴隶制，在整个美国，永远废除。\n\n这一次，不是一张管不到南方的战时命令了。是写进宪法、对所有州、永久生效的。我们用枪和血，把当年那张为打仗而写的纸，钉成了国家最高的法。\n\n那一刻，我心里清楚一件事：是的，林肯签了字，是的，是白人将军赢了战役。但要不是我们 18 万黑人自己拿起枪、自己流血、自己证明「我们能打、我们配得上自由」——这部修正案不会来得这么快、这么硬。\n\n自由不是别人发给我们的礼物。是我们自己，用命，从历史里抢回来的。',
        en: 'On 9 April 1865 the Southern commander Lee surrendered. The war was over.\n\nIn Lee\'s pass you watch how he signs that surrender; in Lincoln\'s pass you watch him win the war and be killed five days later.\n\nAnd we, the black soldiers who lived? With forty thousand lives we bought one solid thing: at the end of 1865 the Thirteenth Amendment formally took effect, and slavery, in all of the United States, was abolished forever.\n\nThis time it was not a wartime order that could not reach the South. It was written into the Constitution, binding on all states, permanently. With guns and blood we nailed that paper once written to fight a war into the nation\'s highest law.\n\nIn that moment I knew one thing clearly: yes, Lincoln signed; yes, white generals won the battles. But had we 180,000 black men not taken up guns ourselves, bled ourselves, and proved ourselves "we can fight, we are worthy of freedom," that amendment would not have come so fast, or so hard.\n\nFreedom was not a gift handed to us by others. It was something we ourselves, with our lives, seized back out of history.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 1865.4.9 Lee 投降仗打完 + 桥到 Lee/Lincoln lens + 活下来的黑人士兵用四万命换实打实的东西: 1865 底 13th Amendment 正式生效 (奴隶制全美永远废除) + 这次不是管不到南方的战时命令是写进宪法对所有州永久 (用枪和血把为打仗写的纸钉成最高法) + 那刻清楚 (林肯签字白人将军赢战役但要不是 18 万黑人自己拿枪流血证明能打配得上自由修正案不会来这么快这么硬) + 自由不是礼物是我们用命从历史里抢回来的',
        engagementHook: '是林肯签了字,是白人将军赢了战役。但要不是我们 18 万黑人自己拿起枪、自己流血、自己证明配得上自由,废奴修正案不会来得这么快、这么硬。自由不是别人发给我们的礼物,是我们自己用命从历史里抢回来的。「被给予的自由」和「争来的自由」,你觉得有区别吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可你别以为，仗打完了，我们就过上了平等的日子。\n\n奴隶制是废了。但「废了奴隶制」和「真的把我们当平等的人」，又差着十万八千里——还记得吗，我刚到北方时就尝过这个差距。\n\n战后头几年，南方的黑人短暂地能投票、能选自己的代表，那是我们用参战换来的一点公民身份。可没过多久，南方白人就用各种法律、各种暴力，一点点把我们刚得到的权利又夺了回去。投票，被各种花招挡住；土地，回到从前主人手里；我们中很多人，又被困在跟奴隶差不多的境地里干活还债。\n\n这段「自由刚到手又被收回去」的历史，你跑过重建那段历史会看得更清楚。\n\n我用命换来的那张写着「自由」的纸，让它对每个黑人都真正算数，又花了整整一百年——直到二十世纪六十年代的民权运动。\n\n我没能等到那一天。但我想让你知道：我们这一代人没有白流血。我们只是，刚把门撞开一条缝。',
        en: 'But do not imagine that once the war was over we lived equal lives.\n\nSlavery was abolished. But "slavery abolished" and "truly counted as equal people" were again a world apart, and remember, I had tasted that gap the moment I first reached the North.\n\nIn the first years after the war, black people in the South could briefly vote and elect their own representatives, a bit of citizenship we had won by fighting. But before long Southern whites, with all kinds of laws and all kinds of violence, took back bit by bit the rights we had just gained. Voting was blocked by every sort of trick; land returned to the old masters\' hands; many of us were trapped again in conditions little better than slavery, working off debt.\n\nThis history of "freedom just gained and then taken back" you will see more clearly if you run the Reconstruction topic.\n\nThe paper I bought with my life, the one that said "freedom," took a full hundred years more to truly count for every black person, until the civil rights movement of the 1960s.\n\nI did not live to see that day. But I want you to know: my generation did not bleed for nothing. We had only just pushed the door open a crack.',
      },
      deliverGoal: 'N10 story (extended close-of-arc) — 别以为仗打完就平等 + 奴隶制废了但「废奴」和「真当平等的人」又差十万八千里 (刚到北方就尝过) + 战后头几年南方黑人短暂能投票选代表 (参战换的公民身份) 但没多久南方白人用法律暴力一点点夺回 (投票被花招挡/土地回老主人/很多人又困在跟奴隶差不多境地干活还债) + 跨重建 Topic 锚 (自由刚到手又被收回) + 用命换的写自由的纸让它对每个黑人真算数又花一百年 (到 1960s 民权运动) + 没等到那天 + 但我们这代没白流血只是刚把门撞开一条缝',
        engagementHook: '奴隶制废了,可「废了奴隶制」和「真的把我们当平等的人」又差十万八千里。我们刚得到的投票权,没多久又被南方白人用法律和暴力夺回去。让那张写「自由」的纸对每个黑人都算数,又花了整整一百年。我们这代人,是不是白流血了?',
      expectsRealAnswer: false,
    },
    {
      id: 'usct-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看这场战争，两种说法都站得住。\n\n一种说法：这是我们自己挣来的解放。我们 18 万黑人，没等谁来施舍自由——我们自己拿起枪，在 Fort Wagner 用胸口撞铁墙，用四万条命，逼这个曾经把我们算成财产的国家，承认我们是人，把废奴永久写进了宪法。自由是我们抢回来的，这份骄傲，没人能从我们身上拿走。\n\n另一种说法：这是一份打了折的、迟到太久的解放。我们流了血，可拿的军饷比白人少；我们赢了仗，可战后的权利很快又被夺回去；我们证明了自己是人，可这个国家又花了一百年，才肯让那句「自由」对我们每个人真正算数。我们撞开了门，可门后面，是又一百年的不平等。\n\n这两边不是「胜利加遗憾」。是同一段历史的两面——同一份用血换来的自由，既是了不起的胜利，也是一张到死都没完全兑现的支票。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at this war. Both views stand.\n\nOne view: this was an emancipation we earned ourselves. We 180,000 black men did not wait for anyone to dole out freedom; we took up guns ourselves, hurled our chests against the iron wall at Fort Wagner, and with forty thousand lives forced this country, which once counted us as property, to admit we were people and write abolition permanently into the Constitution. Freedom was something we seized back, and that pride no one can take from us.\n\nThe other view: this was a discounted, far too late emancipation. We bled, yet our pay was short of the whites\'; we won the war, yet our rights after it were soon taken back; we proved we were people, yet this country took another hundred years to let the word "freedom" truly count for each of us. We pushed the door open, but behind it lay another hundred years of inequality.\n\nThese are not "victory plus regret." They are two faces of the same history, one freedom bought with blood that was both a tremendous victory and a check never fully cashed in my lifetime.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (自己挣来的解放/18 万黑人没等施舍自己拿枪 Fort Wagner 胸口撞铁墙四万命逼曾把我们算财产的国家承认是人永久入宪/自由是抢回来的这骄傲没人能拿走) / 另一种说法 (打折迟到太久的解放/流血却军饷少/赢仗却权利被夺回/证明是人却又花一百年才让自由对每个人算数/撞开门后是又一百年不平等) / 同一段历史两面 (用血换的自由既是了不起胜利也是到死没完全兑现的支票) / 想 30 秒',
        engagementHook: '我们自己挣来的解放,和一份打了折、迟到太久的解放——同一份用血换来的自由,既是了不起的胜利,也是一张到死都没完全兑现的支票。两边都站得住,你的 30 秒到了,你怎么看?',
      expectsRealAnswer: true,
    },
    {
      id: 'usct-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——账本上的一笔财产，一个连姓都没有的人，一身用骨气挣来的蓝军装，Fort Wagner 沙墙下的一条命，一部我用血钉进去的宪法修正案——你会怎么评价这样一个开端？\n\n一场战争，让我从「财产」变成了「兵」，却没让我变成「平等的人」；它把「自由」写进了纸，却没让那两个字在我活着的时候，对我真正算数。你会说我们赢了，还是会说我们只是刚开始?你怎么评?\n\n再想一步。我这一生认准了一件事：没有人会主动把「平等」端到你面前；你得自己站出来，证明你配，然后去争、去抢、去把写在纸上的话，逼成真的。\n\n今天你身边，有没有一样东西——一个机会、一份尊重、一个「被当回事」的资格——是你一直在等别人「给」你，而其实，得你自己站出来去争的?\n\n那时候，你会像很多人一样，等着、忍着、盼着别人开恩；还是会像我一样，哪怕代价很大，也亲手去把那扇门，撞开一条缝?',
        en: 'Having walked my whole life, a piece of property in a ledger, a man without even a surname, a blue uniform won with backbone, a life under the sand wall at Fort Wagner, a constitutional amendment I nailed in with my blood, how would you judge a beginning like this?\n\nA war turned me from "property" into a "soldier," but did not turn me into an "equal person"; it wrote "freedom" onto paper, but did not make those words truly count for me while I lived. Would you say we won, or say we had only just begun? How do you judge it?\n\nThen take one more step. My whole life I held to one thing: no one will carry "equality" to you of their own accord; you must stand up yourself, prove you are worthy, and then fight, seize, and force the words on paper to become real.\n\nIn your own life today, is there something, an opportunity, a respect, the standing to be "taken seriously," that you keep waiting for someone to "give" you, when in truth you must stand up and fight for it yourself?\n\nWhen that happens, will you do as many do, waiting, enduring, hoping for someone to grant it; or will you do as I did, and, whatever the cost, push that door open a crack with your own hands?',
      },
      deliverGoal: 'N12 close (gold-standard) — 评价开端 (账本财产/连姓都没有/用骨气挣来的蓝军装/Fort Wagner 沙墙下一条命/用血钉进的宪法修正案 → 从财产变兵却没变平等的人/自由写进纸却活着时没真算数 → 赢了还是刚开始) + transfer「没人主动把平等端到你面前你得自己站出来证明配再去争把纸上话逼成真」+ 今天你身边有没有一样东西 (机会/尊重/被当回事的资格) 一直等别人给其实得自己站出来争 + 你会等着忍着盼别人开恩还是像我亲手把门撞开一条缝',
        engagementHook: '我这一生认准:没有人会主动把「平等」端到你面前,你得自己站出来,把写在纸上的话逼成真的。今天你身边,有没有一样东西——一个机会、一份尊重——你一直在等别人「给」你,其实得你自己去争?那时候,你会等着别人开恩,还是像我一样亲手把门撞开一条缝?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'lincoln':                    lincolnLens,
  'robert-e-lee':               leeLens,
  'usct-soldier-receiving-end': usctSoldierLens,
};

// per TOPIC_ROADMAP_G6_G12.md A5 + receiving-end 优先 pattern:
// 被宪法算 3/5 / 被解放宣言针对又受益的一方 + composite (基于第 54 麻省团) + N6「为谁而战 / 解放宣言三种命运」跨 lens 对位 + N11/N12 自己挣来 vs 打折迟到 closing
export var defaultLens = 'usct-soldier-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'civil-war-1861',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'lincoln': 32, 'robert-e-lee': 30, 'usct-soldier-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, long-arc 12-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each (long-arc: 1850 妥协破裂→分裂→四年战争→解放宣言转向, time-jumps justify long-arc)',
    'cross-lens micro-detail N6:「为谁而战 / 解放宣言三种命运」一张纸三个方向 (Lincoln 军事工具 / Lee 对故乡宣战 / USCT 生而为人证明 + 让纸变真)',
    'defaultLens: usct-soldier-receiving-end — 受影响者优先 (被宪法算 3/5 + 被解放宣言针对又受益 + composite 第 54 麻省团 + gold-standard N1 hook + N11/N12 自己挣来 vs 打折迟到)',
    'expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) per lens = true (2 per lens, 6 total); 其余全 false; N6 retrieval gate runtime-injected (无歇脚点/想停就停 wording)',
    'anti-fab: composite USCT 士兵的名字/家世/部分场景为叙事性补充 (N1 括号短句标注); 基底是 documented 第 54 麻省团 + USCT 史实 (军饷/Fort Wagner/Fort Pillow/被俘风险)',
    '反 Whig: Lincoln 不写成纯解放者 (1862 仍说不解放也行/解放宣言军事工具/同工不同酬); Lee 不写成纯恶人 (忠诚的悲剧结构 + Lost Cause 神话剖析)',
    'cross-Topic 锚: Lincoln 保联邦优先→废奴 Topic (道德 vs 实用) + Douglass 施压; Lee 效忠州 vs 国→jackson (联邦 vs 州权); 黑人参战换公民权→重建 Topic + byzantine-rise (军队与公民身份)',
    'math/date check: Lincoln 1809-1865 / Lee 1807-1870 / war 1861-65 / Emancipation 1863.1.1 / Gettysburg 1863.7 / Fort Wagner 1863.7.18 / Fort Pillow 1864 / Appomattox 1865.4.9 / Lincoln 遇刺 1865.4.14 / 13th Amendment 1865 底',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
