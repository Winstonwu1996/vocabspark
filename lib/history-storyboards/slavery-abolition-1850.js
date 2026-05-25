// ─── Slavery, Abolition & the Underground Railroad 1830-1860 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 奴隶制与废奴 · Slavery, Abolition & the Underground Railroad 1830-1860
// HSS-8.7 · APUSH Period 4-5 · AP Gov (civil disobedience)
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md A4 + AUTHORING_PIPELINE 第 8/12 条):
//   - calhoun                 (perpetrator-actor) — John C. Calhoun 1782-1850 副总统+一流政治理论家 / 把奴隶制论证为「positive good」/ 州权理论奠基
//   - douglass                (lonely-mediator)   — Frederick Douglass 1818-1895 逃奴→演说家+报人 / 与白人废奴派 Garrison 决裂走政治路线
//   - tubman-receiving-end    (receiving-end)     — Harriet Tubman c.1822-1913 逃奴后多次返南方救约 70 人 / 地下铁路「摩西」/ DEFAULT
//
// 跨 lens micro-detail (N6 anchor):
//   「自由是谁的话」一句话两个用法 — 同一套「自由 / 权利」语言, 一边被用来辩护奴隶制, 一边被用来逃出奴隶制:
//   - Calhoun (参议院讲台) 把「自由」论证成奴隶制是 positive good — 自由话语被反转成压迫的工具
//   - Douglass (废奴讲台) 把同一套自由话语对准蓄奴州 — 谁有资格「生而自由」
//   - Tubman (沼泽夜路) 不靠话语靠脚, 把自由从纸上变成 70 个真人走出去的路
//   Calhoun lens N6: positive good 理论 vs 一个被他论证为「快乐」的人正在夜里逃跑 — 同一套自由话两个用法
//   Douglass lens N6: 自传里写出名字 vs Garrison 派只要他「展示伤疤别讲道理」— 谁有资格替自己说话
//
// 跨 Topic 锚:
//   - Calhoun「positive good」/ 自由话语工具性 → enlightenment (谁有资格「生而自由」/ Toussaint)
//   - Douglass 与 Garrison 决裂走政治路线 → hamilton-jefferson (理念派 vs 行动派的美国式分歧母题) — 文字桥, 不要求已 ship
//   - Tubman 地下铁路隐性网络 → scientific-revolution Mersenne 通信网 (隐秘协作网络结构对照)
//
// defaultLens = 'tubman-receiving-end' (受影响者优先 pattern: 女性 + 逃奴 + 把自由从话语变成真人走出去的路)
//
// STRUCTURE SPEC (shorter format, NOT old 12-long-node):
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: John C. Calhoun (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var calhounLens = {
  id: 'calhoun',
  name: 'John C. Calhoun',
  nameCn: '约翰·卡尔霍恩',
  role: 'perpetrator-actor',
  perspectiveTag: 'positive-good-theorist',
  icon: '⚖️',
  description: {
    cn: '南卡罗来纳人，1782 年生，耶鲁毕业，做过副总统、国务卿、参议员。他不是粗鲁的奴隶贩子，是当时美国第一流的政治理论家，逻辑严密、读书极多。1837 年他站在参议院讲台上，说出一句让全国震动的话：奴隶制不是「不得不忍受的恶」，而是一件「积极的好事」。同一个聪明脑子，既论证州权和少数派保护，也把把人当财产辩护成一种文明的恩惠。这一遍让你从一个聪明人内部，看智识怎么被用来给最深的不义找理由。',
    en: 'A South Carolinian, born 1782, a Yale graduate who served as vice president, secretary of state, and senator. He was not a crude slave trader but one of the finest political theorists America had at the time, rigorous in logic and deeply read. In 1837 he stood at the Senate podium and said a line that shook the country: slavery was not "a necessary evil to be endured" but "a positive good." The same sharp mind argued for states\' rights and the protection of minorities, and also defended treating people as property as a kind of civilized kindness. This pass lets you watch, from inside a clever man, how intellect can be turned to finding reasons for the deepest injustice.',
  },
  storyboard: [
    {
      id: 'cal-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1837 年 2 月 6 日，华盛顿，参议院。\n\n我站起来发言。整个屋子安静下来。北方议员一直在递请愿书，要求废掉奴隶制。我要回他们一句话——一句一百年后还有人引用的话。\n\n我说：很多人讲，奴隶制是一件「不得不忍受的恶」。错了。我要告诉你们，它是一件「积极的好事」（positive good）。\n\n你别急着把我想象成一个挥鞭子的恶棍。我没有。我是 John C. Calhoun（约翰·卡尔霍恩），南卡来的，耶鲁毕业，做过副总统、国务卿。我读的书比这屋里大多数人都多，我的逻辑比他们都严。\n\n这一遍，你坐进我这个位置。你会看到一件比恶棍更可怕的事：一个真正聪明的人，怎么用最好的脑子，给最坏的制度，编出一套听起来很有道理的辩护。',
        en: '6 February 1837, Washington, the Senate.\n\nI rose to speak, and the whole room fell silent. Northern senators had been handing in petitions, demanding the end of slavery. I had a line to throw back at them, a line people would still quote a hundred years later.\n\nI said: many call slavery "a necessary evil to be endured." They are wrong. I tell you it is a positive good.\n\nDo not rush to picture me as a villain cracking a whip. I was not. I am John C. Calhoun, from South Carolina, a Yale graduate, once vice president and secretary of state. I had read more books than most men in that room, and my logic was tighter than theirs.\n\nThis pass puts you in my seat. You will see something more frightening than a villain: how a truly clever man can use the best of his mind to build a reasonable-sounding defense for the worst of institutions.',
      },
      deliverGoal: 'N1 hook — 1837.2.6 参议院 + Calhoun 自我介绍 (耶鲁/副总统/国务卿/不是挥鞭恶棍是一流理论家) + 「positive good」名言 + 这一遍视角设定 (看聪明人怎么给最坏制度编辩护)',
      engagementHook: '一个挥鞭子的恶棍很容易讨厌。可一个聪明、读书多、逻辑严的人，给奴隶制编出一套听起来很有道理的辩护——这是不是更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲清我为什么这么紧张。\n\n到 1830 年代，南方和北方走上了两条完全不同的路。北方搞工厂、修铁路、雇工人领工资。南方靠的是棉花——大片大片的棉花田，全靠被奴役的黑人下地。\n\n1793 年有人发明了轧棉机，剥棉籽快了几十倍。棉花一下子变成全世界都抢着要的钱。南方越种越多，对被奴役劳力的需求越来越大。到我这时候，棉花是美国最大的出口货，南方的全部身家，都押在它上面。\n\n可北方有越来越多的人开始喊：奴隶制是罪，必须废掉。\n\n我们南方人怕的是什么？怕的是：北方人多，将来在国会票多，可能投票把奴隶制废了。那对南方来说，不只是「失去劳力」——是整个经济、整个社会，连根拔起。\n\n所以我必须站出来。守不住奴隶制，就守不住南方。',
        en: 'First, why I was so on edge.\n\nBy the 1830s, North and South had taken two entirely different roads. The North built factories, laid railroads, hired workers for wages. The South lived on cotton, vast fields of cotton worked entirely by enslaved Black people.\n\nIn 1793 someone invented the cotton gin, which stripped the seeds dozens of times faster. Cotton suddenly became money the whole world fought to buy. The South planted more and more, and its hunger for enslaved labor grew. By my day cotton was America\'s largest export, and the South\'s entire fortune was bet on it.\n\nBut more and more people in the North were beginning to cry: slavery is a sin and must be abolished.\n\nWhat did we Southerners fear? We feared that the North, with more people, would one day hold more votes in Congress and might vote slavery away. For the South that meant not merely "losing labor" but tearing up the whole economy, the whole society, by the roots.\n\nSo I had to stand up. Lose slavery, and we lose the South.',
      },
      deliverGoal: 'N2 setup — 南北分道 (北方工厂/南方棉花) + cotton gin 1793 让棉花变值钱→对奴役劳力需求大增 + 棉花是最大出口 + 北方人多→怕国会投票废奴→南方连根拔起 → Calhoun 必须守',
      engagementHook: '南方人怕的不是「失去劳力」，是整个社会连根拔起。当一个群体的全部身家都押在一件不义的事上，他们会更容易承认错，还是更拼命辩护？',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我的辩护，不是拍桌子骂人，是讲一整套理论。听好，因为它很有迷惑性。\n\n第一步，我先攻击北方：你们说你们的工人「自由」？可工厂主给他们的工资勉强活命，老了病了一脚踢开，没人管。这叫「工资奴隶制」。我说，南方主人养着被奴役者一辈子——老了病了还管饭——比北方那种「自由」更人道。\n\n第二步，我搬出历史：从古希腊、古罗马起，所有伟大文明都建在奴隶制上。让一部分人干苦活，另一部分人才能腾出手搞政治、艺术、思想。\n\n第三步，最毒的一步：我说黑人种族「天生」适合被统治，被我们「文明的人」管着，对他们自己也是好事。\n\n你看明白这套逻辑了吗？我没有否认奴隶制残酷。我做的更聪明——我把残酷重新包装成「恩惠」。这就是把脑子用在最坏的地方。',
        en: 'My defense was not a fist on the table; it was a whole theory. Listen closely, because it is seductive.\n\nFirst, I attacked the North: you call your workers "free"? But the factory owner pays them barely enough to live, and when they age or fall sick he kicks them out and no one cares. That is "wage slavery." The Southern master, I said, keeps the enslaved his whole life, fed even when old or ill, more humane than your kind of "freedom."\n\nSecond, I brought in history: from ancient Greece and Rome onward, every great civilization rested on slavery. Let one group do the hard labor, and another is freed to take up politics, art, thought.\n\nThird, the most poisonous step: I claimed the Black race was "by nature" suited to be ruled, and that being managed by us "civilized people" was good for them too.\n\nDo you see the logic? I never denied that slavery was cruel. I did something cleverer: I repackaged the cruelty as a kindness. That is the mind put to its worst use.',
      },
      deliverGoal: 'N3 setup — Calhoun positive good 三步辩护 (1 攻击北方「工资奴隶制」/ 2 历史: 古希腊罗马文明建在奴隶制上 / 3 种族「天生」适合被统治) + 「把残酷重新包装成恩惠」= 脑子用在最坏地方',
      engagementHook: '我没否认奴隶制残酷——我做了更聪明的事，把残酷重新包装成「恩惠」。一个能把坏事说成好事的聪明人，比一个公开的坏人更难对付，你同意吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是南方最有脑子的政治家。你比谁都清楚：北方人口在涨，迟早在国会里压过南方。到那天，多数票一来，奴隶制就完了。\n\n所以你不光辩护奴隶制，你还要造一套盾牌，挡住「多数票」。\n\n你提出一个理论，叫「州权」加「少数派否决」：每个州是主权的，联邦只是各州的代理；如果联邦的多数想通过一条伤害某个州根本利益的法，那个州有权拒绝执行，甚至退出联邦。\n\n听起来是不是很高尚？「保护少数派不被多数欺负」——这话单拎出来，简直像在保护弱者。\n\n可你心里清楚，你这套「保护少数派」，保护的「少数派」是谁？是蓄奴的南方白人。你要少数派否决权，是为了让多数人没法投票废掉奴隶制。\n\n这一刻你得问自己：你是真的信「州权」这条原则，还是只是借它，守住你真正要守的那个东西？',
        en: 'Now you are me.\n\nYou are the South\'s sharpest statesman. You know better than anyone: the North\'s population is rising and will sooner or later outvote the South in Congress. On that day, a majority vote arrives, and slavery is finished.\n\nSo you do not merely defend slavery; you also build a shield against the "majority vote."\n\nYou put forward a theory of "states\' rights" plus a "minority veto": each state is sovereign, the federal government merely the states\' agent; if the federal majority tries to pass a law harming a state\'s vital interest, that state has the right to refuse it, even to leave the union.\n\nDoes it not sound noble? "Protect the minority from being bullied by the majority," pulled out on its own, almost sounds like defending the weak.\n\nBut you know in your heart: who is the "minority" your theory protects? The slaveholding white South. You want a minority veto so the majority cannot vote slavery away.\n\nHere you must ask yourself: do you truly believe in the principle of "states\' rights," or are you only borrowing it to guard the thing you really mean to guard?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 怕北方人口涨→多数票废奴 + Calhoun 造盾牌「州权 + 少数派否决」(州主权/联邦是代理/可拒执行甚至退出) + 听起来高尚 (保护少数派) 但保护的少数派是蓄奴白人 + 自我拷问: 真信州权原则还是借它守奴隶制',
      engagementHook: '「保护少数派不被多数欺负」——单拎出来像在保护弱者。可我要的「少数派否决」，是为了让多数人没法投票废掉奴隶制。一条好原则被用来守一件坏事，它还是好原则吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这套理论不是空谈，它真的改变了南北的力量对比。\n\n1820 年，国会为了南北平衡，定过一条线（密苏里妥协）：这条线以北的新地，不准有奴隶制；以南可以。大家以为问题暂时压住了。\n\n可美国一直在往西扩张，每多出一块新地，南北就为「这块算自由州还是蓄奴州」吵翻一次。多一个蓄奴州，南方在参议院就多两票。这是生死之争。\n\n我一辈子，就在用我那套州权理论，为南方一寸一寸地争。我提醒南方人：别指望北方的善意，要靠制度的盾牌护住自己。\n\n1850 年，我已经病得很重，话都说不出。我写好一篇演讲，让别人替我在参议院念出来。内容是警告：如果北方继续逼，南方有权走人。\n\n念完没几个星期，1850 年 3 月 31 日，我死了。我没看到我预言的那场分裂真的来——但我亲手给它铺好了理论的路。',
        en: 'My theory was not idle talk; it really shifted the balance between North and South.\n\nIn 1820, to keep the balance, Congress drew a line (the Missouri Compromise): no slavery in new lands north of it, slavery allowed to the south. People thought the problem was held down for a while.\n\nBut America kept expanding west, and every new territory set off another fight over whether it would be free or slave. One more slave state meant two more Southern votes in the Senate. It was a fight to the death.\n\nMy whole life I used my states\' rights theory to claw for the South, inch by inch. I warned my fellow Southerners: do not count on Northern goodwill, guard yourselves with the shield of institutions.\n\nBy 1850 I was gravely ill and could barely speak. I wrote a speech and had another man read it for me in the Senate. Its message was a warning: if the North keeps pressing, the South has the right to walk.\n\nA few weeks after it was read, on 31 March 1850, I died. I never saw the split I foretold actually arrive, but I had laid its theoretical road with my own hands.',
      },
      deliverGoal: 'N5 story — Missouri Compromise 1820 画线 + 西扩每块新地为自由/蓄奴吵 (多一蓄奴州=参议院多两票) + Calhoun 用州权理论一寸寸争/警告别指望北方善意 + 1850 病重写演讲让人代念警告南方可走 + 1850.3.31 死/没看到分裂但铺好理论路',
      engagementHook: '我临死前警告南方：别指望北方善意，靠制度盾牌护住自己。我没活到看见分裂，却亲手给它铺好了路。一个人为一件他坚信的事铺路，哪怕那件事是错的——你怎么评价这种坚定？',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我把奴隶制论证成一件好事。可就在我说话的同一片土地上，有些被我论证为「快乐」的人，正在用脚反驳我。\n\n我在参议院说：被奴役的人受主人照顾，安稳又满足，比北方的自由工人还幸福。\n\n同一个年代，马里兰州一个被奴役的年轻女人，趁着夜色，一个人钻进沼泽，往北方逃。后来她又一次次回到南方，把别人也带出来。她的名字叫 Harriet Tubman（哈丽特·塔布曼）。\n\n你看，这就是我理论的破绽。如果被奴役者真的「快乐又满足」，他们为什么要冒着被打死的风险，走几百英里去逃？没人会从天堂里逃跑。\n\n同一套「自由」的话——我在讲台上把它扭过来，证明奴隶制是好事；她在沼泽里用脚把它写出来，证明奴隶制是要逃离的地狱。\n\n一套话，两个用法。我用嘴，她用脚。而历史最后信了谁，你心里其实已经有答案。',
        en: 'I argued that slavery was a good thing. But on the same soil where I spoke, some of the very people I called "happy" were refuting me with their feet.\n\nIn the Senate I said: the enslaved are cared for by their masters, settled and content, happier than the free workers of the North.\n\nIn that same era, an enslaved young woman in Maryland slipped into the swamp alone under cover of night and fled north. Later she returned to the South again and again to bring others out. Her name was Harriet Tubman.\n\nYou see the flaw in my theory. If the enslaved were truly "happy and content," why would they risk being beaten to death to walk hundreds of miles to escape? No one flees from paradise.\n\nThe same words about "freedom": at the podium I twisted them to prove slavery was good; in the swamp she wrote them with her feet to prove slavery was a hell to flee. One set of words, two uses. I used my mouth, she used her feet. As for which one history finally believed, you already have the answer in your heart.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Calhoun 论证被奴役者「快乐满足」+ 同代 Harriet Tubman 马里兰夜里钻沼泽逃/一次次回来救人 + 破绽: 没人从天堂逃跑 + 跨 lens 对位「自由」一套话两用 (Calhoun 用嘴扭成好事 / Tubman 用脚证明是要逃的地狱)',
      engagementHook: '如果被奴役者真的「快乐又满足」，为什么有人冒着被打死的风险，走几百英里去逃？没人会从天堂里逃跑。我用嘴讲自由，她用脚走自由——你信哪个？',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死后，我铺的那条路，真的有人走上去了。\n\n1850 年，就在我死那年，国会通过一条法，叫 Fugitive Slave Act（逃奴法）。它规定：逃到北方自由州的被奴役者，必须被抓回去送还原主；任何北方人，哪怕只是给逃奴一口饭、一张床，都犯法。\n\n这条法的厉害之处在于：它把奴隶制的手，伸进了自由州。以前北方人可以说「奴隶制是南方的事，跟我无关」。现在不行了——法律强迫每个北方公民，要么帮着抓逃奴，要么犯法。\n\n这一下，把很多原本冷漠的北方人推到了对立面。他们突然发现：奴隶制不是远方的事，它就站在我家门口，逼我当帮凶。\n\n我活着时争的「州权」，本来是给南方挡北方的盾。可逃奴法反过来用「联邦权力」强压北方，连一些南方人都看出这套逻辑在自打嘴巴。\n\n原则这东西，谁用着顺手谁就举——这话听着难听，但政治常常就是这样。',
        en: 'After I died, the road I had laid was truly walked.\n\nIn 1850, the year of my death, Congress passed a law called the Fugitive Slave Act. It ruled that an enslaved person who fled to a free Northern state must be seized and returned to the owner, and that any Northerner who gave a fugitive even a meal or a bed was breaking the law.\n\nThe terrible thing about this law was that it reached slavery\'s hand into the free states. Before, a Northerner could say "slavery is the South\'s business, none of mine." Now he could not: the law forced every Northern citizen either to help capture fugitives or to break the law.\n\nThis pushed many once-indifferent Northerners to the other side. They suddenly saw that slavery was not a distant matter; it stood at their own front door, forcing them to be accomplices.\n\nThe "states\' rights" I fought for in life was meant as the South\'s shield against the North. Yet the Fugitive Slave Act used federal power to bear down hard on the North, and even some Southerners saw the logic contradicting itself.\n\nA principle is a thing people raise whenever it suits their hand. It sounds ugly, but politics is often just that.',
      },
      deliverGoal: 'N7 story — Fugitive Slave Act 1850 (逃奴必抓回送还原主/北方人帮逃奴犯法) + 把奴隶制的手伸进自由州 (北方人不能再说与我无关被逼当帮凶) + 推冷漠北方人到对立面 + 州权 vs 联邦权力自打嘴巴 (原则谁用着顺手谁举)',
      engagementHook: '逃奴法逼每个北方人:要么帮着抓逃奴,要么犯法。它把奴隶制摆到了北方人家门口。「这不关我事」这句话,是不是其实从来都站不住?',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我不在了，可我的影响在十年里越烧越旺。\n\n1854 年，国会推翻了 1820 年那条老线，让新地自己投票决定要不要奴隶制（Kansas-Nebraska Act）。结果堪萨斯成了战场——蓄奴派和反奴派各自涌进去抢人头票，真的开枪互杀，史称「流血的堪萨斯」。\n\n1857 年，最高法院判了一个叫 Dred Scott 的案子。Dred Scott 是个被奴役的人，他主张自己在自由州住过，应该自由。法院判他败诉，还说了两句惊人的话：黑人不是、也永远不能是美国公民；国会无权在任何地方禁止奴隶制。\n\n这等于把我那套理论盖了官印——奴隶制不是地方问题，是全国受宪法保护的财产权。\n\n你听到这里要明白一件事：这一步步，没有一步是「疯子」干的。每一步背后，都是受过良好教育的法官、议员，引经据典、逻辑严密地推出来的。\n\n通向最大不义的路，常常不是用愚蠢铺的，是用聪明铺的。',
        en: 'I was gone, but my influence burned hotter over the decade.\n\nIn 1854 Congress overturned the old line of 1820 and let new territories vote on slavery themselves (the Kansas-Nebraska Act). Kansas became a battlefield: pro- and anti-slavery sides poured in to grab votes and actually shot and killed one another, in what was called "Bleeding Kansas."\n\nIn 1857 the Supreme Court ruled on the case of a man named Dred Scott. Dred Scott, who was enslaved, argued that he had lived in a free state and should be free. The court ruled against him and said two astonishing things: Black people were not, and never could be, U.S. citizens; and Congress had no power to ban slavery anywhere.\n\nThis stamped an official seal on my theory: slavery was not a local matter but a nationwide property right protected by the Constitution.\n\nHere you must grasp one thing: not a single one of these steps was the work of a madman. Behind each step were well-educated judges and senators, reasoning rigorously and citing precedent.\n\nThe road to the greatest injustice is often paved not with stupidity but with cleverness.',
      },
      deliverGoal: 'N8 story — Kansas-Nebraska Act 1854 推翻 1820 老线/popular sovereignty→Bleeding Kansas + Dred Scott 1857 (黑人非公民/国会无权禁奴隶制) 给 Calhoun 理论盖官印 (奴隶制是全国宪法保护的财产权) + 每步都是受教育法官议员引经据典推出来的 + 「通向最大不义的路用聪明铺」',
      engagementHook: 'Bleeding Kansas、Dred Scott——每一步都是受过良好教育的法官、议员引经据典推出来的,没有一步是疯子干的。通向最大不义的路,是用愚蠢铺的,还是用聪明铺的?',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看看我这套「自由」话术的来路和去处。\n\n我用来辩护奴隶制的词——「自由」「权利」「不被多数欺压」——没有一个是我发明的。它们来自启蒙时代，来自那些写「人生而自由平等」的思想家。（你跑过 enlightenment 那个 Topic，会认得这套话从哪儿来。）\n\n讽刺就在这儿：同一套「自由」的语言，被加勒比的奴隶捡起来推翻主人，也被我这样的人捡起来辩护奴隶制。话本身是中性的，关键是谁在用、用来干什么。\n\n至于去处——我铺的理论路，1860 年代真的通到了内战。南方真的拿「州权」当理由退出联邦，真的开打。几十万人死在那场仗里。\n\n战后，宪法加了新修正案，废除奴隶制，写明黑人是公民、法律面前人人平等。我用一辈子论证的东西，被一场战争连根拔掉。\n\n我曾以为我用最严密的逻辑站在了历史正确的一边。结果证明：逻辑再严，建在一个错误的前提上，整座大厦都是歪的。',
        en: 'Pull the lens back and look at where my "freedom" rhetoric came from and where it went.\n\nThe words I used to defend slavery, "freedom," "rights," "not oppressed by the majority," none of them were my invention. They came from the Enlightenment, from the thinkers who wrote that "people are born free and equal." (Run the enlightenment topic and you will recognize where this language comes from.)\n\nHere is the irony: the same language of "freedom" was picked up by the enslaved of the Caribbean to overthrow their masters, and picked up by men like me to defend slavery. The words themselves are neutral; what matters is who uses them, and for what.\n\nAs for where it went, the theoretical road I laid did reach the civil war of the 1860s. The South truly used "states\' rights" as its reason to leave the union, and truly went to war. Hundreds of thousands died in it.\n\nAfter the war, the Constitution added new amendments, abolishing slavery and declaring Black people citizens, equal before the law. What I argued for my whole life was torn out by the roots in one war.\n\nI once believed I stood, with the tightest logic, on the right side of history. It turned out that no matter how tight the logic, built on a false premise the whole structure leans crooked.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 「自由」话术来自启蒙 (跨 enlightenment Topic 锚) + 讽刺: 同一套自由话被加勒比奴隶用来推翻主人也被 Calhoun 用来辩护 (话中性关键是谁用) + 去处: 理论路→1860s 内战几十万人死 + 战后修正案废奴/equal protection 把他论证连根拔 + 「逻辑再严建在错前提整座大厦歪」',
      engagementHook: '同一套「自由」的话,被奴隶用来推翻主人,也被我用来辩护奴隶制。逻辑再严密,建在一个错误的前提上,整座大厦都是歪的。聪明,能不能保证一个人站在历史正确的一边?',
      expectsRealAnswer: false,
    },
    {
      id: 'cal-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是一个被才华害了的悲剧人物。我的州权理论、对多数暴政的警惕，本身是政治思想里有分量的东西，后世讨论联邦与州的关系还绕不开我。我只是生在一个错的位置，把第一流的脑子，押在了一个注定要崩塌的制度上。\n\n另一种说法：才华不是我的免罪符，是我的加重情节。正因为我聪明、有学问、有讲台，我编出的辩护比一个粗人有力一百倍，让无数本来会动摇的人心安理得地继续蓄奴。一个蠢人作恶，害得了几个人；一个聪明人给恶找到「道理」，能害一个时代。\n\n这两边不是「优点加缺点」。是同一份才华的两面——它既让我深刻，也让我成了把不义讲得最动听的那个人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a tragic man ruined by his own gift. My states\' rights theory and my wariness of the tyranny of the majority were weighty things in political thought, and later debates on the relation of federation and state still cannot get around me. I was simply born in the wrong place and staked a first-rate mind on an institution doomed to collapse.\n\nThe other view: my gift is not my pardon but my aggravating circumstance. Precisely because I was clever, learned, and had a podium, the defense I built was a hundred times stronger than a brute\'s, letting countless people who might have wavered go on holding slaves with an easy conscience. A fool who does evil harms a few; a clever man who finds "reasons" for evil can harm an age.\n\nThese are not "strengths and weaknesses." They are two faces of the same gift, the gift that made me profound and also made me the one who told an injustice most beautifully.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (被才华害的悲剧人物/州权理论有分量/生错位置押错制度) / 另一种说法 (才华是加重情节/聪明有讲台让辩护强百倍/聪明人给恶找道理害一个时代) / 同一份才华两面 / 想 30 秒',
      engagementHook: '被才华害的悲剧人物,还是用才华把不义讲得最动听的人——是同一个我。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'cal-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一流的脑子，最好的教育，最大的讲台——全部用来给一件把人当财产的制度，编一套听起来天经地义的辩护。我不是不懂奴隶制残酷，我是太懂了，所以才需要那么精巧的话术去盖住它。聪明到底是中性的工具，还是会让一个人对自己的恶更看不清？你怎么评？\n\n再想一步。今天你身边，有没有人特别会「讲道理」——把一件其实不对的事，说得头头是道、让你一时反驳不了？小到一个同学振振有词地排挤别人，大到网上一篇逻辑严密、却在为偏见辩护的文章。\n\n那时候，你会被那套漂亮的逻辑说服吗？还是你会停下来，绕过他的话，去看他到底在为什么辩护——就像历史绕过我的演讲，去看那些用脚逃跑的人？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nA first-rate mind, the best education, the largest podium, all of it used to build a reasonable-sounding defense for an institution that treated people as property. It was not that I failed to understand slavery\'s cruelty; I understood it too well, which is why I needed such elegant rhetoric to cover it. Is cleverness a neutral tool, or does it make a person blinder to his own evil? How do you judge it?\n\nThen take one more step. In your own life today, is there someone especially good at "making the case," who can argue a thing that is actually wrong so smoothly that you cannot refute it on the spot? It can be small, a classmate justifying the exclusion of someone with perfect reasons, or large, a tightly argued article online that is in fact defending a prejudice.\n\nWhen that happens, will you be persuaded by the beautiful logic? Or will you stop, step around his words, and look at what he is really defending, the way history stepped around my speeches to look at the people fleeing on foot?',
      },
      deliverGoal: 'N11 close — 评价 Calhoun (一流脑子+最大讲台全用来给奴隶制编天经地义辩护/太懂残酷才需精巧话术 → 聪明中性工具 vs 让人对自己恶看不清) + transfer「今天你身边特别会讲道理把不对的事说得头头是道的人 (同学排挤/网上为偏见辩护的文)」+ 你会被漂亮逻辑说服还是绕过话看他在为什么辩护',
      engagementHook: '一流的脑子全用来给把人当财产的制度编辩护——聪明到底是中性工具,还是让人对自己的恶更看不清?今天你身边那个特别会「讲道理」、把不对的事说得头头是道的人,你会被说服,还是会绕过他的话去看他在为什么辩护?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Frederick Douglass (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var douglassLens = {
  id: 'douglass',
  name: 'Frederick Douglass',
  nameCn: '弗雷德里克·道格拉斯',
  role: 'lonely-mediator',
  perspectiveTag: 'fugitive-orator',
  icon: '🖋️',
  description: {
    cn: '马里兰人，约 1818 年生，生来就是被奴役者，连自己的生日都不知道。小时候偷偷学认字，他后来说，这是他走向自由的第一步。20 岁那年逃到北方，靠一张嘴成了全国最有名的废奴演说家，又办报、写自传，把一个逃奴的生命变成了对奴隶制最有力的证词。他曾是白人废奴领袖 Garrison 的明星徒弟，后来为了走自己的政治路线，跟恩师公开决裂。这一遍让你从一个既要对抗敌人、又要挣脱盟友的人内部，看「替自己说话」有多难。',
    en: 'A Marylander, born around 1818 into slavery, who did not even know his own birthday. As a boy he secretly taught himself to read, which he later called the first step toward his freedom. At twenty he escaped to the North and, on the strength of his voice, became the most famous abolitionist speaker in the country, founding a newspaper and writing his autobiography, turning one fugitive\'s life into the most powerful testimony against slavery. He was once the star pupil of the white abolitionist leader Garrison, and later broke with his mentor in public to follow his own political path. This pass lets you watch, from inside a man who had to fight his enemies and pull free of his allies at once, how hard it is to speak for yourself.',
  },
  storyboard: [
    {
      id: 'doug-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我连自己哪天生的都不知道。\n\n这是被奴役的人共同的命：主人给牲口记出生日期，却不给我们记。我大概是 1818 年生在马里兰。我没有真正意义上的家——很小就跟母亲分开，她在另一个农场，偶尔半夜走十几英里来看我一眼，天亮前赶回去。\n\n我是 Frederick Douglass（弗雷德里克·道格拉斯）。我生来是别人的财产。\n\n但今天，全国成千上万的人，黑的白的，挤进礼堂听我演讲。我办报纸，我写书，我跟总统当面争论。一个连生日都没有的奴隶，怎么走到这一步的？\n\n这一遍，你坐进我这个位置。你会发现，我这辈子的仗，要打两场：一场对着把我当财产的敌人，另一场，对着那些说要「帮我」、却不肯让我自己说话的盟友。',
        en: 'I do not even know the day I was born.\n\nThis is the common lot of the enslaved: a master records the birthday of his livestock but not of us. I was born around 1818 in Maryland. I had no real home; I was parted from my mother very young, she on another farm, who would sometimes walk a dozen miles in the dead of night to look at me once, and hurry back before dawn.\n\nI am Frederick Douglass. I was born another man\'s property.\n\nBut today thousands across the country, Black and white, crowd into halls to hear me speak. I run a newspaper, I write books, I argue with the president to his face. How did a slave with no birthday come this far?\n\nThis pass puts you in my seat. You will find that my life\'s fight had to be fought on two fronts: one against the enemies who held me as property, and another against the allies who said they would "help me" yet would not let me speak for myself.',
      },
      deliverGoal: 'N1 hook — 不知道生日 (被奴役者命/主人给牲口记不给我们记) + c.1818 马里兰 + 跟母亲分开她半夜走十几英里看一眼 + Douglass 自我介绍 (生来是财产→全国名人办报写书跟总统争论) + 这一遍视角 (两场仗: 对敌人 + 对不让我说话的盟友)',
      engagementHook: '我连自己的生日都不知道——主人给牲口记出生,却不给我们记。光是这一件事,你觉得它在告诉一个孩子:你是什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我人生第一个转折，是一件听起来很小的事：我学会了认字。\n\n我七八岁被送到巴尔的摩一户人家。女主人心善，开始教我认字母。可男主人发现了，当场喝止。他说的话，我一辈子记得：「你要是教一个奴隶认字，他就再也不肯当奴隶了。」\n\n那一刻，我突然懂了一件天大的事：原来识字，就是从奴役到自由的那条路。主人怕的，正是我该要的。\n\n从那天起，我用尽一切办法偷学。我把白人小孩当老师——拿面包跟街上穷孩子换识字课。我捡报纸碎片，对着拼。\n\n等我能读了，我读到的东西更让我睡不着：报纸上印着北方人辩论奴隶制，印着「人人生而平等」。我第一次知道，外面有一个世界，认为我不该是财产。\n\n认字没有让我的日子好过，反而更痛苦——因为我看清了我的牢笼。可我宁愿痛苦地清醒，也不要麻木地被关着。',
        en: 'The first turning point of my life was something that sounds very small: I learned to read.\n\nAt seven or eight I was sent to a household in Baltimore. The mistress was kind and began teaching me my letters. But the master found out and stopped it at once. What he said I have remembered all my life: "Teach a slave to read, and he will never be content to be a slave again."\n\nIn that moment I suddenly understood something enormous: reading was the road from slavery to freedom. What the master feared was exactly what I should want.\n\nFrom that day I learned in secret by every means. I made the white children my teachers, trading bread to poor boys in the street for reading lessons. I picked up scraps of newspaper and spelled them out.\n\nWhen I could read, what I read kept me awake even more: newspapers printed Northerners debating slavery, printed "all men are created equal." For the first time I knew there was a world outside that believed I should not be property.\n\nReading did not make my days easier; it made them more painful, because now I saw my cage clearly. But I would rather be painfully awake than numbly caged.',
      },
      deliverGoal: 'N2 setup — Douglass 学认字 (巴尔的摩女主人教/男主人喝止「教奴隶认字他就不肯当奴隶」) + 顿悟识字=自由的路/主人怕的正是该要的 + 偷学 (拿面包换识字课/捡报纸拼) + 读到「人人生而平等」知道外面有世界认为他不该是财产 + 「宁愿痛苦清醒不要麻木被关」',
      engagementHook: '主人说:「教一个奴隶认字,他就再也不肯当奴隶了。」那一刻我懂了:主人怕的,正是我该要的。有没有一样东西,是别人越不想让你拥有,你就越该去争取的?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1838 年，20 岁，我逃了。\n\n我借了一个自由黑人水手的证件，穿上水手衣服，跳上往北的火车。一路上我提心吊胆——一个查票的，一个认识我的人，都能让我前功尽弃，被抓回去往死里打。\n\n几天后，我到了纽约。自由了。可那种自由，不是欢天喜地——是举目无亲、随时可能被抓回去的惊惶。\n\n我落脚在马萨诸塞，先干粗活。1841 年，在一场废奴集会上，有人临时请我上台，讲讲我当奴隶的经历。我紧张得发抖。但我一开口，全场安静了。\n\n台下坐着当时北方最有名的白人废奴领袖 William Lloyd Garrison（加里森）。他听完，眼睛亮了。他知道他发现了什么——一个亲身当过奴隶、又能把话讲得这么有力的人，是废奴运动最需要的活证据。\n\n从那天起，我成了 Garrison 的明星演说家。我以为我找到了战友。我还没料到，这份「战友」关系，后来会变成我要挣脱的另一副枷锁。',
        en: 'In 1838, at twenty, I escaped.\n\nI borrowed the papers of a free Black sailor, put on sailor\'s clothes, and jumped on a train heading north. The whole way I was on edge: one conductor, one person who knew me, could undo it all and send me back to be beaten half to death.\n\nDays later I reached New York. Free. But that freedom was not joy; it was the terror of being friendless and liable to be seized back at any moment.\n\nI settled in Massachusetts and took rough work at first. In 1841, at an abolition meeting, someone asked me on the spot to come up and tell of my life as a slave. I shook with nerves. But the moment I spoke, the hall went silent.\n\nIn the audience sat the most famous white abolitionist leader in the North, William Lloyd Garrison. He listened, and his eyes lit up. He knew what he had found: a man who had been a slave in the flesh and could speak so powerfully was the living proof the movement needed most.\n\nFrom that day I became Garrison\'s star speaker. I thought I had found comrades. I had not yet guessed that this "comradeship" would later become another chain I had to break.',
      },
      deliverGoal: 'N3 setup — 1838 借自由黑人水手证件逃北 (提心吊胆) + 到纽约「自由不是欢天喜地是随时被抓的惊惶」+ 1841 废奴集会临时上台讲奴隶经历全场安静 + Garrison 发现他 (亲身当过奴隶又能讲=活证据) → 成 Garrison 明星演说家 + 伏笔「战友关系后来变成要挣脱的枷锁」',
      engagementHook: '我以为逃出来就是欢天喜地的自由。其实是举目无亲、随时可能被抓回去的惊惶。「得到自由」和「感到自由」,中间是不是还隔着很远?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是 Garrison 阵营里最红的演说家。你走遍北方，讲你当奴隶的经历，台下的人哭、人捐钱、人入会。你是这个运动的活招牌。\n\n可慢慢地，你心里堵得慌。\n\n因为他们要你讲的，永远只是「故事」——你身上的伤疤，你挨打的细节，你母亲半夜走来看你。讲完故事，由白人领袖来讲「道理」，讲该怎么办、运动往哪走。\n\n有一次，一个 Garrison 派的人私下提醒你：「讲你的事就好，别讲得太有学问——人家会怀疑你到底当没当过奴隶。」\n\n你愣住了。原来在他们眼里，一个黑人讲得太聪明，反而是个问题。他们要的是一个「会说话的伤疤」，不是一个会思考、会自己拿主意的人。\n\n这一刻你得想：他们是你的盟友，他们真心反对奴隶制。可他们给你的位置，是「被展示」，不是「平等地参与」。这种「帮助」，你接，还是不接？',
        en: 'Now you are me.\n\nYou are the most celebrated speaker in Garrison\'s camp. You travel the North telling of your life as a slave, and the audiences weep, give money, join the cause. You are the movement\'s living banner.\n\nBut slowly something tightens in your chest.\n\nBecause what they want you to give is only ever the "story," the scars on your body, the details of your beatings, your mother walking through the night to see you. After the story, a white leader gives the "argument," what should be done, where the movement should go.\n\nOnce, a man of Garrison\'s circle quietly cautioned you: "Just tell your own story, do not sound too learned, or people will doubt you were ever really a slave."\n\nYou froze. So in their eyes, a Black man who spoke too cleverly was itself a problem. They wanted a "talking scar," not a man who thought and decided for himself.\n\nHere you must consider: they are your allies, they truly oppose slavery. Yet the place they give you is "to be displayed," not "to take part as an equal." Such "help," do you accept it, or not?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Douglass 是 Garrison 阵营最红演说家 (台下哭捐钱入会/活招牌) + 心堵: 他们只要他讲「故事」(伤疤挨打) 白人讲「道理」+ 有人提醒「别讲太有学问人家会怀疑你当没当过奴隶」+ 愣住: 他们要「会说话的伤疤」不是会思考的人 + 自我拷问: 盟友给的是「被展示」不是平等参与, 这种帮助接不接',
      engagementHook: '他们要的是一个「会说话的伤疤」,不是一个会思考、会自己拿主意的人。当「帮你」的人只把你当成展品,这种帮助,你接,还是不接?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我做了一个让所有人意外的决定：我把我的全名、地点、主人是谁，全写进了一本书。\n\n1845 年，我出版自传《一个美国奴隶的生平自述》。\n\n你可能不懂这有多危险。我那时还是法律上的逃奴。书一出，等于把我的底全亮给了原主——他随时可以根据线索把我抓回去。\n\n那为什么还写？因为有人开始传：「这人这么能讲，肯定没真当过奴隶。」我受够了被当成假货。我要用最具体的细节——真名、真地名、真主人——证明：每一个字都是真的。\n\n书火了，卖了几万本。但也太危险了，我只好逃到英国躲了快两年。在那边，一群英国朋友凑钱，把我从原主手里正式赎了出来。我这才第一次，在法律上，真正属于我自己。\n\n你看，我用「写出自己的名字」这件事，同时对抗了两边：对抗了说我是假货的人，也对抗了那些只要我展示伤疤、不许我开口论理的盟友。\n\n替自己说话，第一步，是敢说出自己的名字。',
        en: 'I made a decision that surprised everyone: I put my full name, the place, and who my master was, all into a book.\n\nIn 1845 I published my autobiography, the Narrative of the Life of an American Slave.\n\nYou may not grasp how dangerous this was. I was still a fugitive in the eyes of the law. The book laid all my facts bare to my former owner, who could use the clues to seize me back at any time.\n\nThen why write it? Because people had begun to say: "A man who speaks so well surely was never truly a slave." I was sick of being treated as a fake. I would use the most concrete details, real name, real place, real master, to prove every word was true.\n\nThe book caught fire and sold tens of thousands. But it was too dangerous, and I had to flee to England and hide nearly two years. There a group of English friends raised the money to formally buy me from my old owner. Only then, for the first time, did I in law truly belong to myself.\n\nYou see, by "writing down my own name" I fought both sides at once: those who called me a fake, and the allies who would let me show my scars but not let me reason aloud.\n\nTo speak for yourself, the first step is to dare to say your own name.',
      },
      deliverGoal: 'N5 story — 1845 自传《一个美国奴隶的生平自述》写全名地点主人 + 危险 (法律上仍逃奴/原主可据线索抓回) + 为何写: 受够被当假货要用真名真地名证明真实 + 书火逃英国躲两年/英国朋友凑钱赎他→第一次法律上属于自己 + 「写出名字」同时对抗两边 (说假货的人 + 只要伤疤的盟友) + 「替自己说话第一步是敢说出名字」',
      engagementHook: '我把真名、真地名、真主人全写进书里——明知道这等于告诉原主怎么抓我回去。我用「敢说出自己的名字」对抗了两边。你愿意为了证明「这是真的我」,冒一次这样的险吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回到美国，我做了一件更冒险的事：我跟我的恩师，公开决裂了。\n\n分歧的根子，是「怎么打这场仗」。\n\nGarrison 认为：美国宪法从头到尾就是一份「跟魔鬼签的契约」，因为它保护奴隶制。所以正确的做法是道德谴责、是拒绝参与这个肮脏的政治体制，甚至主张北方干脆跟南方分家。\n\n我越想越不同意。我认为：宪法里写着「自由」「正义」，这些词可以被拿来反对奴隶制，而不是拱手让给蓄奴派。退出政治，等于把武器扔了。我要进去——投票、立法、用这个国家自己的法律，从内部把奴隶制掐死。\n\n1847 年，我自己办了一份报纸《北极星报》。Garrison 阵营本就反对我自立门户，从这一步起，我们之间就有了摩擦。\n\n到了 1851 年，我把话挑明：我在报上公开宣布，我改变了立场——宪法不是反奴隶制的敌人，而是可以拿来反对奴隶制的武器。这等于跟 Garrison 正式公开决裂了。我不再只当他的传声筒，我要有自己的讲台、自己的声音、自己的路线。\n\n恩师震怒。昔日的战友们在报上骂我忘恩负义。我几乎一夜之间，从运动的明星，变成了「背叛者」。\n\n那段日子很孤独。可我认了。因为我终于不再是「会说话的伤疤」——我是 Frederick Douglass，一个替自己拿主意的人。',
        en: 'Back in America, I did something riskier still: I broke with my mentor in public.\n\nThe root of the split was "how to fight this war."\n\nGarrison held that the U.S. Constitution was from start to finish "a covenant with the devil," because it protected slavery. So the right course was moral condemnation, refusing to take part in this filthy political system, even arguing that the North should simply separate from the South.\n\nThe more I thought, the more I disagreed. The Constitution, I held, has the words "freedom" and "justice" in it, and those words can be turned against slavery rather than handed over to the slaveholders. To withdraw from politics was to throw away your weapon. I would go in, vote, legislate, use the country\'s own laws to strangle slavery from within.\n\nIn 1847 I founded my own newspaper, the North Star. Garrison\'s camp had opposed my striking out on my own, and from that step the friction between us began.\n\nBy 1851 I said it plainly: in the paper I announced openly that I had changed my position. The Constitution was not slavery\'s ally but a weapon that could be turned against slavery. That amounted to a formal, public break with Garrison. I would no longer be merely his mouthpiece; I would have my own podium, my own voice, my own line.\n\nMy mentor was enraged. Former comrades cursed me in print as an ingrate. Almost overnight I went from the movement\'s star to a "traitor."\n\nThose were lonely days. But I accepted them. Because at last I was no longer a "talking scar." I was Frederick Douglass, a man who decided for himself.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Douglass 跟 Garrison 公开决裂 (分歧: Garrison 宪法是「跟魔鬼签的契约」拒参与政治甚至主张北方分家 vs Douglass 宪法的「自由正义」可反对奴隶制要进去投票立法从内部掐死) + 1847 办《北极星报》Garrison 阵营反对自立门户开始有摩擦 → 1851 报上公开宣布改变立场 (宪法是可反奴隶制的武器) 与 Garrison 正式公开决裂宣布有自己讲台/路线 + 被骂忘恩负义/明星变背叛者 + 跨 lens 对位「谁有资格替自己说话/讲道理」(N4 伤疤 vs 自传写名 → 这里自己拿主意)',
      engagementHook: '为了走自己的路,我跟救我出来的恩师公开决裂,一夜之间从明星变成「背叛者」。可我终于不再是「会说话的伤疤」。为了能替自己说话,你愿意得罪帮过你的人吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '走政治路线，意味着我要面对一个比 Garrison 更难缠的对手：宪法本身。\n\n蓄奴派像 Calhoun 那种人，一口咬定：宪法保护财产权，奴隶就是财产，所以奴隶制受宪法保护。Garrison 派居然同意这个读法——只不过他们由此得出「宪法是邪恶的，烧掉它」。\n\n我偏不。我说：你们都读错了。宪法的序言写的是「我们人民」，写的是「确立正义、保障自由」。整部宪法的文字里，根本没出现过「奴隶」「奴隶制」这两个词——制宪的人自己都不好意思写。一份不肯写下「奴隶」二字的文件，怎么能说是「为奴隶制而立」的？\n\n这是一场争夺：争夺这个国家最神圣那份文件的解释权。蓄奴派要它站在奴隶制一边，我要把它抢回到自由这一边。\n\n你看出我这条路有多难了吗？我一个逃奴，要跟耶鲁出身的大理论家，争宪法该怎么读。\n\n可我认定一件事：放弃解释权，就是把武器拱手送人。这份文件，我们也有份。',
        en: 'Taking the political path meant facing an opponent harder than Garrison: the Constitution itself.\n\nSlaveholders, men like Calhoun, insisted that the Constitution protected property rights, that slaves were property, and so slavery was protected by the Constitution. Garrison\'s camp actually agreed with this reading, only they drew from it "the Constitution is evil, burn it."\n\nI refused. I said: you have both misread it. The preamble says "We the People," says "establish justice, secure liberty." Nowhere in the whole text do the words "slave" or "slavery" appear; the framers were too ashamed to write them. How can a document that would not write the word "slave" be called one made "for slavery"?\n\nThis was a contest over the right to interpret the nation\'s most sacred document. The slaveholders wanted it on slavery\'s side; I meant to seize it back to the side of freedom.\n\nDo you see how hard my road was? I, a fugitive, had to argue with a great theorist trained at Yale over how the Constitution should be read.\n\nBut I was certain of one thing: to give up the right of interpretation is to hand your weapon to the enemy. This document is ours too.',
      },
      deliverGoal: 'N7 story — 政治路线对手是宪法本身 + 蓄奴派 (Calhoun 类) 咬定宪法保护奴隶为财产 / Garrison 派同意此读法但得出「宪法邪恶烧掉」 + Douglass 反对: 序言「我们人民」「确立正义保障自由」/正文无「奴隶」二字 (制宪人不好意思写) → 不肯写「奴隶」怎能说为奴隶制而立 + 争夺解释权 (蓄奴派要它站奴隶制一边/Douglass 抢回自由一边) + 「放弃解释权=把武器送人/这份文件我们也有份」',
      engagementHook: 'Calhoun 说宪法为奴隶制而立,Garrison 同意所以要烧掉它,我偏说你们都读错了——这份文件我们也有份。一份大家都看不顺眼的规则,是该烧掉,还是该抢回来重新解读?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1852 年 7 月 5 日，纽约罗切斯特。有人请我做独立日演讲。\n\n注意，是 7 月 5 日，不是 7 月 4 日。我故意的。\n\n台下坐着几百个白人，等着听一篇歌颂美国自由的演讲。我站上去，问了他们一句话，这句话后来传遍全国：\n\n「七月四号，对你们的奴隶来说，算什么？」\n\n我说：你们庆祝自由，可对一个还戴着锁链的人，你们的盛大庆典，是世上最刺眼的讽刺。你们一边喊着「人人生而平等」，一边在南方把人当牲口卖。\n\n你看我在做什么？我不是来骂美国虚伪然后走人的。我是把美国自己最骄傲的那句话——「人人生而平等」——捡起来，举到它自己面前，问：你做到了吗？\n\n这就是我跟 Garrison 最根本的不同。他要把这个虚伪的国家整个推倒。我要逼这个国家，活成它自己写在纸上的样子。\n\n骂一个国家虚伪很容易。难的是，留下来，逼它兑现承诺。',
        en: 'On 5 July 1852, in Rochester, New York, I was asked to give an Independence Day address.\n\nNote, the 5th of July, not the 4th. I did it on purpose.\n\nBefore me sat several hundred white people, waiting to hear a speech praising American freedom. I stepped up and asked them a question that later traveled the whole country:\n\n"What, to the American slave, is your Fourth of July?"\n\nI said: you celebrate freedom, but to a man still in chains, your grand festival is the most glaring mockery in the world. You cry "all men are created equal" while in the South you sell people like cattle.\n\nDo you see what I was doing? I had not come to call America a hypocrite and then walk away. I picked up America\'s own proudest line, "all men are created equal," held it up before its face, and asked: have you lived up to it?\n\nThis was my deepest difference from Garrison. He wanted to tear this hypocritical country down. I wanted to force this country to live as the thing it had written on paper.\n\nIt is easy to call a country a hypocrite. The hard thing is to stay, and force it to keep its promise.',
      },
      deliverGoal: 'N8 story — 1852.7.5 罗切斯特独立日演讲 (故意 7.5 不 7.4) + 名句「七月四号对你们的奴隶算什么」+ 一边喊人人生而平等一边把人当牲口卖 + Douglass 不是骂虚伪走人是把「人人生而平等」举到美国面前问做到了吗 + 与 Garrison 根本不同 (Garrison 要推倒/Douglass 要逼它活成纸上的样子) + 「骂虚伪容易/留下来逼它兑现难」',
      engagementHook: '骂一个国家虚伪很容易,我做的是更难的事:把它自己写下的「人人生而平等」举到它面前,逼它兑现。指出别人言行不一很容易,留下来逼对方做到——你做得到吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看看我这条「替自己说话」的路，通到了哪里。\n\n内战打起来后，我做的不只是演讲。我跑去见 Lincoln 总统，当面跟他争。我逼他做两件事：第一，把废奴定为战争目标，别只为「保住联邦」而打；第二，让黑人当兵——拿起枪，为自己的自由打仗。\n\n后来这两件事都成了。黑人士兵真的上了战场。我自己两个儿子也参了军。\n\n战后，宪法加了新修正案，废除奴隶制，给黑人公民权和投票权。我那句「这份文件我们也有份」，几十年后，真的被写了进去。\n\n我跟一个黑人自由网络一直是连着的——逃奴的暗线、自由黑人的报纸、教堂、互助会。这种隐秘协作的网络结构，你在别的 Topic 也见过：科学家靠通信网串起整个欧洲的知识。（你跑过 scientific-revolution，会想起那张通信网。）一个被压迫的群体，靠的也是网络，只不过他们传的不是公式，是人和希望。\n\n我从一个没有生日的奴隶，走到了能改变国家的人。这条路证明了一件事：替自己说话，不是终点，是把整个群体的声音，一起带出来。',
        en: 'Pull the lens back and see where my road of "speaking for myself" led.\n\nWhen the civil war came, I did more than make speeches. I went to see President Lincoln and argued with him to his face. I pressed him to do two things: first, make abolition a goal of the war, not fight merely to "save the union"; second, let Black men serve as soldiers, take up arms, and fight for their own freedom.\n\nBoth came to pass. Black soldiers truly took the field. Two of my own sons joined up.\n\nAfter the war, the Constitution added new amendments, abolishing slavery and granting Black people citizenship and the vote. My line, "this document is ours too," was, decades later, truly written in.\n\nI was always tied to a Black network of freedom: the secret lines of fugitives, the newspapers of free Black people, the churches, the mutual-aid societies. You have seen this kind of hidden cooperative structure in another topic: scientists who strung the knowledge of all Europe together through a network of letters. (Run the scientific-revolution topic and you will recall that letter network.) An oppressed people relied on a network too, only what they carried was not formulas but people and hope.\n\nI went from a slave with no birthday to a man who could change a nation. That road proved one thing: speaking for yourself is not the end. It is carrying the whole group\'s voice out together.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 内战见 Lincoln 当面争逼两件事 (废奴定为战争目标/黑人当兵) 都成 + 两个儿子参军 + 战后修正案废奴/公民权/投票权「这份文件我们也有份」写进去 + 黑人自由网络 (逃奴暗线/报纸/教堂/互助会) → 跨 scientific-revolution Mersenne 通信网锚 (隐秘协作网络结构/传的不是公式是人和希望) + 「替自己说话不是终点是把整个群体声音带出来」',
      engagementHook: '我从一个没有生日的奴隶,走到能当面逼总统改变战争目标的人。替自己说话不是终点,是把整个群体的声音一起带出来。一个人争来的话语权,怎么才能变成一群人的?',
      expectsRealAnswer: false,
    },
    {
      id: 'doug-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是从内部攻破的赢家。我没有把宪法烧掉，我把它抢了回来；我没有困在「会说话的伤疤」里，我办报、决裂、进政治，硬是把一个逃奴的声音，变成了能改变国家的力量。我跟恩师决裂看着无情，可正因为我没听 Garrison 的「退出政治」，黑人才真的拿到了投票权。事实证明我是对的。\n\n另一种说法：我跟 Garrison 的决裂，不全是「路线之争」，也有黑人盟友被白人盟友压着、不甘心只当配角的那口气。我赌的是「这个国家会兑现承诺」——可这张支票兑现得那么慢、那么不完整，我晚年眼看着重建被推翻、黑人重新被剥夺权利。也许 Garrison 那种「这国家烂到根上」的彻底悲观，比我的乐观更接近真相。\n\n这两边不是「对加错」。是同一个选择的两面——「留下来逼它兑现」既是我最大的勇气，也可能是我最大的天真。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the winner who broke it from within. I did not burn the Constitution; I took it back. I did not stay trapped as a "talking scar"; I ran a paper, broke away, entered politics, and forced one fugitive\'s voice into a power that could change a nation. My break with my mentor looks heartless, but precisely because I did not heed Garrison\'s "withdraw from politics," Black people truly gained the vote. The facts proved me right.\n\nThe other view: my break with Garrison was not purely a "dispute over strategy." There was also the resentment of a Black ally pushed beneath his white allies, unwilling to stay a mere supporting act. I bet that "this country would keep its promise," but that check cashed so slowly and so incompletely; in my old age I watched Reconstruction overturned and Black people stripped of their rights again. Perhaps Garrison\'s total pessimism, that "this country is rotten to the root," was closer to the truth than my optimism.\n\nThese are not "right and wrong." They are two faces of one choice. "Staying to force it to keep its promise" was both my greatest courage and perhaps my greatest naivety.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (从内部攻破的赢家/没烧宪法抢回来/没困在会说话的伤疤/跟恩师决裂但黑人拿到投票权事实证明对) / 另一种说法 (跟 Garrison 决裂也有黑人盟友不甘当配角那口气/赌国家兑现承诺但兑现慢且不完整晚年看重建被推翻/也许 Garrison 彻底悲观更接近真相) / 同一个选择两面「留下来逼兑现」既是勇气也是天真 / 想 30 秒',
      engagementHook: '从内部攻破的赢家,还是赌错了「国家会兑现承诺」的天真乐观者——是同一个我,同一个选择的两面。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'doug-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n我打了两场仗。一场对着把我当财产的敌人，这场好理解。难的是另一场——对着真心帮我、却不肯让我平等说话的盟友。我得感激他们的帮助，又得挣脱他们的限制。一个被帮助的人，有没有资格、有没有勇气，对帮助者说「不，我要自己来」？你怎么评？\n\n再想一步。今天你身边，有没有人是「为你好」、却替你做了所有决定——家长、老师、一个强势的朋友？他们是真心的，可他们没问过你想怎样。\n\n那时候，你会怎么做？你会因为「人家是好心」就一直当那个被安排的人，还是会像我一样，哪怕得罪好心人，也要争一件事：让我自己说话，自己拿主意，哪怕第一次说得磕磕巴巴？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nI fought two wars. One against the enemies who held me as property; that one is easy to understand. The hard one was the other, against allies who truly helped me yet would not let me speak as an equal. I had to be grateful for their help and pull free of their limits at once. Does a person who is being helped have the right, and the courage, to tell the helper "no, I will do it myself"? How do you judge it?\n\nThen take one more step. In your own life today, is there someone who is "doing it for your good" yet makes all the decisions for you, a parent, a teacher, a forceful friend? They mean well, but they never asked what you wanted.\n\nWhen that happens, what will you do? Will you stay the one who is arranged for, because "they mean well," or will you do as I did, and, even at the cost of offending the kind-hearted, fight for one thing: to speak for yourself, to decide for yourself, even if the first time the words come out halting?',
      },
      deliverGoal: 'N11 close — 评价 Douglass (打两场仗: 对敌人好理解 / 对真心帮我却不让我平等说话的盟友难 → 被帮助的人有没有资格勇气说「我要自己来」) + transfer「今天你身边为你好却替你做所有决定的人 (家长/老师/强势朋友)」+ 你会因人家好心一直当被安排的人,还是哪怕得罪好心人也争「让我自己说话拿主意,哪怕磕磕巴巴」',
      engagementHook: '我打的两场仗,对敌人那场好懂,难的是对真心帮我却不让我平等说话的盟友。被帮助的人,有没有资格说「我要自己来」?今天你身边那个「为你好」却替你做所有决定的人,你会怎么做?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Harriet Tubman (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var tubmanLens = {
  id: 'tubman-receiving-end',
  name: 'Harriet Tubman',
  nameCn: '哈丽特·塔布曼',
  role: 'receiving-end',
  perspectiveTag: 'underground-railroad-conductor',
  icon: '🌙',
  description: {
    cn: '真实历史人物，约 1822 年生在马里兰州一个被奴役的家庭，原名 Araminta。小时候被一块铁器砸中头部，落下一辈子的头痛和突然昏睡的毛病。1849 年她一个人逃到北方，本可以从此安稳。可她做了一件几乎没人敢做的事:一次次回到她逃出来的那片土地,把别人也带出去,据说救了约 70 个人,一个都没丢。人们叫她「摩西」。这一遍,你跟着她走那条夜里的逃亡路,看自由不是写在纸上的词,是用脚一步步走出来的。',
    en: 'A real historical person, born around 1822 in Maryland into an enslaved family, named Araminta at birth. As a child she was struck in the head by an iron weight, leaving her with lifelong headaches and sudden sleeping spells. In 1849 she escaped north alone and could have lived in safety from then on. Instead she did something almost no one dared: she returned again and again to the land she had fled, to bring others out, and is said to have rescued about 70 people without losing a single one. People called her Moses. This pass lets you walk that night-time road of escape with her, and see that freedom is not a word written on paper but something walked out, one step at a time.',
  },
  storyboard: [
    {
      id: 'tub-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我头疼了一辈子，还会突然睡过去——讲着话，站着站着，就昏过去几分钟。\n\n这毛病是怎么来的，我记得清清楚楚。我十几岁那年，一个监工朝另一个奴隶扔一块两磅重的铁器，没扔中，砸在我头上。从那以后，这病跟了我一辈子。\n\n我大概 1822 年生在马里兰，生来是被奴役的，原名叫 Araminta，大人叫我 Minty。我不识字，一天书没念过。\n\n可就是我这么一个人——头被砸坏、不识字、又是女人——后来一次次走进南方的黑夜，把几十个被奴役的人，一个一个带出去。人家叫我「摩西」。\n\n这一遍，你跟着我走。不是从写宪法、讲大道理的人那边看自由。是从一个用脚走出自由的人这边看：自由到底是什么——它不是纸上的一个词，是你敢不敢在某个没有月亮的晚上，迈出第一步。',
        en: 'My head ached my whole life, and I would suddenly fall asleep, mid-sentence, standing up, out for a few minutes.\n\nI remember exactly how it started. In my teens an overseer threw a two-pound iron weight at another slave, missed, and it struck me in the head. From then on the affliction stayed with me for life.\n\nI was born around 1822 in Maryland, born enslaved, named Araminta; they called me Minty. I could not read, and never had a day of schooling.\n\nYet a person like me, head broken, unable to read, and a woman, later walked into the Southern dark again and again and brought out dozens of enslaved people, one by one. They called me Moses.\n\nThis pass, you walk with me. Not seeing freedom from the side of those who wrote constitutions and made grand arguments. Seeing it from the side of one who walked freedom out with her feet: what freedom really is. It is not a word on paper. It is whether you dare, on some moonless night, to take the first step.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 头疼+突然昏睡一辈子 (十几岁监工扔两磅铁器没中砸她头) + c.1822 马里兰生来被奴役/原名 Araminta 叫 Minty/不识字 + 头被砸不识字女人却一次次进南方黑夜把几十人带出叫「摩西」+ 这一遍从用脚走出自由的人看: 自由不是纸上的词是敢不敢在没月亮的晚上迈第一步',
      engagementHook: '一个头被砸坏、不识字、又是女人的人,后来一次次走进黑夜把几十个人带出来。自由对她不是纸上的词,是敢不敢在没月亮的晚上迈出第一步。你觉得迈出那第一步,最难的是什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲我每天的日子，你才懂「逃」对我意味着什么。\n\n我五六岁就被租出去干活。给人看孩子，孩子一哭就挨打；下沼泽检查捕麝鼠的陷阱，水冷得刺骨；大一点下地，劈柴、赶牲口、扛重物，干的是成年男人的活。\n\n被奴役最让人喘不过气的，不是累，是「随时会被卖掉」。我亲眼看着三个姐姐被卖到南方，一去再没回来。一个家，主人一句话，说拆就拆。我母亲哭过、藏过孩子、跟主人拼过命，可她什么也保不住。\n\n我心里早就有一团火。我不信「主人对我们好」那套话——我信我看见的:卖人的链子、姐姐空了的床、母亲拦不住的眼泪。\n\n所以当后来我听说，自己也快要被卖到南方去的时候，我没有像很多人那样认命。我心里那个念头，那一刻彻底定了：与其被人卖走，不如自己走。',
        en: 'First, my daily life, so you understand what "escape" meant to me.\n\nAt five or six I was hired out to work. Minding a baby, beaten when it cried; wading the swamp to check muskrat traps, the water cold to the bone; older, working the fields, splitting wood, driving animals, hauling loads, doing the work of grown men.\n\nThe most suffocating thing about being enslaved was not the labor; it was that you could be sold at any moment. I watched three of my own sisters sold south, gone and never back. A family could be torn apart by one word from the master. My mother wept, hid her children, fought the master tooth and nail, and could keep nothing.\n\nThere was a fire in me long before. I did not believe the line that "the master is good to us." I believed what I saw: the chains of the slave trade, my sisters\' emptied beds, my mother\'s tears that could stop nothing.\n\nSo when I later heard that I too was about to be sold south, I did not resign myself as so many did. The thought in me settled, in that moment, for good: rather than be sold away, I would walk away myself.',
      },
      deliverGoal: 'N2 setup — Tubman 五六岁租出去干活 (看孩子挨打/下沼泽检查麝鼠陷阱/下地干成年男人的活) + 被奴役最喘不过气是随时被卖 (亲眼三个姐姐被卖南方一去不回/母亲保不住) + 心里有团火不信主人好那套 + 听说自己快被卖南方→念头定了「与其被卖不如自己走」',
      engagementHook: '被奴役最让人喘不过气的不是累,是「随时会被卖掉」——我亲眼看三个姐姐被卖走,一去不回。当一个家随时可能被一句话拆散,人心里会长出什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那我靠什么逃？我不识字，看不懂地图，也没有钱。\n\n我靠的是一张看不见的网，后来人们叫它「地下铁路」（Underground Railroad）。它不是真的铁路——是一条逃亡的暗线：一户愿意冒险的人家，一个安全的谷仓，一个会指路的自由黑人，一个站到下一个站。\n\n这张网用「铁路」的暗语说话：藏逃奴的人家叫「车站」，带路的人叫「列车长」，逃奴叫「乘客」。这样就算被人听见，也听不出名堂。\n\n我还靠两样东西。一样是星星——北极星。我不识字，但我认得天上那颗永远指向北方的星。顺着它走，就是往自由走。\n\n另一样，是歌。我们在地里唱的那些圣歌，表面唱的是天堂，其实藏着信号:哪天动身、走哪条路、安不安全。主人在旁边听着，只当我们在唱赞美诗。\n\n你看，一群不识字、没权力的人，照样能造出一套主人破译不了的暗号系统。被压到最底下的人，自有最底下的智慧。',
        en: 'So what did I escape on? I could not read, could not follow a map, and had no money.\n\nI relied on an invisible net later called the Underground Railroad. It was not a real railroad; it was a secret line of escape: a household willing to take the risk, a safe barn, a free Black person who would point the way, one station to the next.\n\nThe net spoke in railroad code: the homes that hid fugitives were "stations," the guides were "conductors," the fugitives were "passengers." That way, even if someone overheard, they could make nothing of it.\n\nI relied on two more things. One was a star, the North Star. I could not read, but I knew the star in the sky that always points north. Follow it, and you walk toward freedom.\n\nThe other was song. The hymns we sang in the fields seemed to be about heaven, but they hid signals: which day to set out, which road to take, whether it was safe. The master listened nearby and thought we were only singing praises.\n\nYou see, a people who could not read and held no power could still build a code their masters could not crack. Those pressed to the very bottom have a wisdom of the bottom all their own.',
      },
      deliverGoal: 'N3 setup — 不识字看不懂地图没钱靠 Underground Railroad (不是真铁路是逃亡暗线: 愿冒险人家/安全谷仓/指路自由黑人/一站到下站) + 铁路暗语 (车站/列车长/乘客) + 靠北极星 (不识字但认得指北的星) + 靠歌 (圣歌表面唱天堂藏信号哪天走哪条路/主人当唱赞美诗) + 「被压到最底下的人自有最底下的智慧」',
      engagementHook: '一群不识字、没权力的人,用圣歌当暗号、用星星当地图,造出一套主人破译不了的系统。被压到最底下的人,反而有最底下的智慧。你怎么理解这种「弱者的聪明」?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1849 年的某个夜里。你下定决心要逃。你身上没有路引，没有钱，不识字。你只有一个方向——北方，和天上那颗星。\n\n你迈出第一步，踏进黑黢黢的树林。这一脚下去，你就成了「逃奴」——人人可抓，抓住了被打个半死，甚至被卖到更远的南方。回头，是熟悉的奴役；往前，是几百英里完全未知的黑夜。\n\n白天你不敢走，躲在沼泽、躲在坟地、躲在好心人的谷仓里。夜里才出来，深一脚浅一脚地往北蹭。蚊虫、寒冷、饥饿、追捕的狗叫——每一样都在劝你回去。\n\n而你这病随时会发作:走着走着，突然昏睡过去。万一在错的时间、错的地方昏过去，就全完了。\n\n这一刻你得想:你脚下这一步,跟 Calhoun 在参议院讲的「自由」、Douglass 在讲台上喊的「自由」,是同一个词。可对你来说,它不是一句话——它是这一步,迈还是不迈。\n\n你迈吗?',
        en: 'Now you are me.\n\nA certain night in 1849. You have made up your mind to flee. You have no travel pass, no money, you cannot read. You have only one direction, north, and that star in the sky.\n\nYou take the first step into the pitch-dark woods. With that step you become a "fugitive," whom anyone may seize, and if caught, be beaten half to death, even sold farther south. Behind you is familiar bondage; ahead, hundreds of miles of utterly unknown dark.\n\nBy day you dare not move, hiding in swamps, in graveyards, in the barns of the kind. Only by night do you come out, inching north over uneven ground. Insects, cold, hunger, the bark of pursuing dogs, every one of them urges you to turn back.\n\nAnd your affliction can strike at any time: walking along, you suddenly fall into sleep. Pass out at the wrong time, in the wrong place, and it is all over.\n\nHere you must think: this step under your feet, and the "freedom" Calhoun spoke of in the Senate, and the "freedom" Douglass cried from the podium, are the same word. But to you it is not a phrase. It is this step, to take or not to take.\n\nDo you take it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1849 某夜下决心逃 (没路引没钱不识字只有北方+星) + 迈第一步成「逃奴」(人人可抓/抓住打半死或卖更远/回头是奴役往前是未知黑夜) + 白天躲沼泽坟地谷仓夜里出来 (蚊虫寒冷饥饿追捕狗叫劝你回去) + 病随时发作昏睡 (错时错地全完) + 自我拷问: 这一步跟 Calhoun/Douglass 讲的「自由」同一个词但对你不是话是迈还是不迈',
      engagementHook: '别人讲台上喊的「自由」,对我就是这一步:在没月亮的夜里,迈进黑黢黢的树林,身后是熟悉的奴役,身前是几百英里未知。这一步,你迈吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我迈了。我成功逃到了宾州。\n\n后来我这样形容那一刻:我看看自己的手,看看是不是还是原来那双手——因为我觉得整个人都不一样了。太阳照在树梢上,金灿灿的,我觉得自己像进了天堂。\n\n可你猜我接下来想的是什么?不是「我自由了,真好」。是:我自由了,可我的家人还在那边。\n\n这就是我跟很多人不一样的地方。逃出来的人,绝大多数从此再不敢回头——回去等于送死。我不。我做了一个几乎没人敢做的决定:我要回去,把他们一个一个带出来。\n\n你想想这有多难。我刚从那个地狱里九死一生爬出来,转头又要主动走回去——而且不是一次。\n\n人家问我为什么。我后来说过一句话:我救出过几百个奴隶……但凡他们当时知道自己是奴隶,本可以再救出几千个。\n\n你听懂这句话了吗?最难叫醒的,是已经认命的人。我要带出去的,先得是那颗还想走的心。',
        en: 'I took it. I made it to Pennsylvania.\n\nLater I described that moment like this: I looked at my hands to see if I was the same person, for I felt like a different one all over. The sun came through the trees, all gold, and I felt I had come into heaven.\n\nBut guess what I thought next. Not "I am free, how wonderful." It was: I am free, but my family is still over there.\n\nThis is where I differed from many. Most who escaped never dared turn back; to go back was to die. Not I. I made a decision almost no one dared: I would go back and bring them out, one by one.\n\nThink how hard that was. I had just clawed out of that hell, barely alive, and turned right around to walk back in, and not just once.\n\nPeople asked me why. I once said: I freed hundreds of slaves, and could have freed thousands more, if only they had known they were slaves.\n\nDo you understand that line? The hardest to wake are those who have already resigned themselves. What I had to bring out, first, was the heart that still wanted to leave.',
      },
      deliverGoal: 'N5 story — Tubman 1849 逃到宾州 + 她形容那一刻 (看自己的手/太阳金灿灿觉得进了天堂) — documented paraphrase + 接下来想的不是「我自由真好」是「家人还在那边」+ 跟多数人不同 (逃出的人不敢回头她要回去一个个带出来) + 名言「我救出几百奴隶/但凡他们知道自己是奴隶本可救几千」+ 「最难叫醒的是认命的人/要带出去的先是那颗还想走的心」',
      engagementHook: '我说过:我救出过几百个奴隶,但凡他们知道自己是奴隶,本可以再救出几千个。最难叫醒的,是已经认命的人。你身边有没有「认了命」、连想都不敢想的人?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '从 1850 年起,我一次次回去,大约十几趟,把约 70 个人亲手带了出来。人家给我起了个名字:摩西。\n\n而就在同几年,华盛顿的参议院里,有个叫 Calhoun 的大人物,正对着全国说:被奴役的人受主人照顾,安稳又满足,比北方的自由工人还幸福。\n\n你把这两件事摆在一起看。\n\n他在讲台上,用最漂亮的话证明:奴隶制是「好事」,黑人「天生」适合被管着。我在沼泽里,带着一队吓得发抖的男人女人孩子,深一脚浅一脚地往北逃。\n\n如果他说的是真的——如果我们真的「快乐又满足」——那我为什么要回到那个地狱十几趟,冒着被吊死的风险,把人往外带?没有人会从天堂里逃跑。\n\n同一个词,「自由」。他用嘴,把它扭成奴隶制的辩护词;我用脚,把它走成 70 个真人头顶的星光。\n\n纸上的「自由」可以被一张聪明的嘴说成任何样子。可一个人在黑夜里迈出的那一步,做不了假。',
        en: 'From 1850 on, I went back again and again, around a dozen trips, and brought out about 70 people with my own hands. They gave me a name: Moses.\n\nAnd in those very years, in the Senate in Washington, a great man named Calhoun was telling the whole country: the enslaved are cared for by their masters, settled and content, happier than the free workers of the North.\n\nPut the two things side by side.\n\nAt the podium he used the most beautiful words to prove slavery was a "good thing," that Black people were "by nature" fit to be ruled. In the swamp I led a band of trembling men, women, and children, inching north over uneven ground.\n\nIf what he said were true, if we were truly "happy and content," then why would I go back to that hell a dozen times, risking the gallows, to bring people out? No one flees from paradise.\n\nThe same word, "freedom." With his mouth he twisted it into a defense of slavery; with my feet I walked it into starlight over the heads of 70 real people.\n\nThe "freedom" on paper can be talked into any shape by a clever mouth. But the step a person takes in the dark cannot be faked.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1850 起一次次回去约十几趟亲手带出约 70 人/叫「摩西」+ 同几年 Calhoun 在参议院说被奴役者快乐满足 + 两件事摆一起 (他讲台漂亮话证奴隶制是好事/她沼泽里带一队人逃) + 破绽: 没人从天堂逃跑 + 跨 lens 对位「自由」一词 (Calhoun 用嘴扭成辩护词/Tubman 用脚走成 70 人头顶星光) + 「纸上自由可被说成任何样子/黑夜里那一步做不了假」',
      engagementHook: 'Calhoun 在参议院说我们「快乐又满足」,我在沼泽里冒着被吊死的风险十几趟带人逃。如果是天堂,谁会十几次往里冲着救人?纸上的「自由」可以被一张嘴说成任何样子,可黑夜里那一步,做不了假——你信哪个?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我带人逃,不是凭一股蛮勇,我有我的规矩,而且极严。\n\n我随身带一把枪。一半是防追捕的人,另一半,你可能想不到——是对着我自己带的人。\n\n路上总有人走到半截怕了,想往回走。可一个人回去,熬不住盘问,就会把整条线、所有「车站」、所有救过他的人全供出来。一个人退缩,会害死一整队,还有沿路所有冒死帮我们的人。\n\n所以我立下死规矩:上了路,就没有回头。谁要往回走,我把枪顶上去,说一句:要么活着往前走,要么死在这儿。从没有一个人真被我打,但他们知道我是认真的。于是他们继续往前——后来都活着到了北方。\n\n你可能觉得这太狠。可你换到我的位置想:我手上不是一条命,是一整队的命,还有那张网上几十户人家的命。\n\n带人走自由路的人,有时候不能只当个温柔的好人。你得狠到,能把所有人都活着带出去。',
        en: 'I did not lead people out on raw courage. I had my rules, and they were strict.\n\nI carried a gun. Half to fend off pursuers; the other half, you may not expect, was aimed at the people I led.\n\nOn the road there was always someone who lost his nerve halfway and wanted to turn back. But one person going back, unable to hold up under questioning, would give away the whole line, all the "stations," everyone who had helped him. One person\'s flinching could get a whole band killed, and all the people along the way who risked their lives for us.\n\nSo I laid down an iron rule: once on the road, there is no turning back. To anyone who wanted to go back, I put the gun to him and said one line: you go forward alive, or you die here. Not one was ever truly shot, but they knew I meant it. So they went on, and all reached the North alive.\n\nYou may think this too harsh. But put yourself in my place: in my hands was not one life but a whole band\'s, and the lives of the dozens of households on that net.\n\nOne who leads people down the road of freedom cannot always be only a gentle, good person. You must be hard enough to bring everyone out alive.',
      },
      deliverGoal: 'N7 story — Tubman 带人有极严规矩 + 随身带枪 (一半防追捕一半对着自己带的人) + 路上有人怕想回走 (一人回去熬不住盘问会供出整条线/所有车站/救他的人/害一整队) + 死规矩「上了路没有回头」枪顶上去「活着往前或死在这儿」(从没真打但他们知道认真→都活着到北方) + 不能只当温柔好人 + 「带人走自由路得狠到能把所有人活着带出去」',
      engagementHook: '我带枪,一半防追捕,一半对着我自己带的人——谁想回头,我说「活着往前,或死在这儿」。一个人退缩会害死一整队。带一群人走自由路,有时候不能只当温柔的好人。你觉得这种「狠」,是冷酷,还是另一种负责?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1850 年,我的活儿一下子难了十倍。那年国会通过逃奴法(Fugitive Slave Act):逃到北方的奴隶,必须被抓回去送还原主;帮逃奴的北方人,犯法。\n\n这意味着,逃到北方的自由州,不再安全了。猎奴人可以光明正大追到北方,把逃了多年的人重新抓回南方。\n\n所以从那以后,我带的人,不能停在北方各州——得一路往北,送过边境,进加拿大,送到一个美国法律够不着的地方,才算真正安全。逃亡路一下子拉长了好几百英里。\n\n这条法把一些原本袖手旁观的北方人,逼到了我们这边。他们亲眼看见猎奴人冲进自己的城市,把一个在这儿安家多年的邻居拖走——他们坐不住了。\n\n你看,有时候压迫者收紧绳子,反而帮了被压迫的人:它逼着原本中立的人,选边站。\n\n绳子越勒越紧,本想勒死我们,结果勒醒了一批本来装睡的人。',
        en: 'In 1850 my work suddenly grew ten times harder. That year Congress passed the Fugitive Slave Act: slaves who fled north must be seized and returned to their owners, and Northerners who helped fugitives were breaking the law.\n\nThis meant the free states of the North were no longer safe. Slave-catchers could openly chase people north and drag someone who had been free for years back to the South.\n\nSo from then on, the people I led could not stop in the Northern states. They had to go all the way north, across the border into Canada, to a place American law could not reach, before they were truly safe. The road of escape was suddenly hundreds of miles longer.\n\nThis law pushed some once-bystanding Northerners onto our side. They saw with their own eyes slave-catchers rushing into their cities and dragging away a neighbor who had made a home there for years, and they could not sit still.\n\nYou see, sometimes when the oppressor tightens the rope, it helps the oppressed: it forces the once-neutral to take a side.\n\nThe tighter the rope was pulled, the more it meant to choke us, the more it woke a crowd who had been pretending to sleep.',
      },
      deliverGoal: 'N8 story — 1850 逃奴法让 Tubman 活儿难十倍 (逃北方奴隶必抓回送还原主/帮逃奴北方人犯法) + 北方自由州不再安全 (猎奴人光明正大追到北方抓回) + 她带的人得一路送过边境进加拿大 (美国法律够不着) 逃亡路拉长几百英里 + 逼袖手旁观的北方人选边 (亲眼看猎奴人拖走邻居) + 「压迫者收紧绳子反而勒醒装睡的人」',
      engagementHook: '逃奴法本想勒死我们,结果勒醒了一批本来装睡的人——北方人亲眼看见邻居被拖走,坐不住了。有时候压迫者收紧绳子,反而帮了被压迫的人。你觉得这是为什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远,看看我这双脚,后来走到了哪里。\n\n内战打起来,我没闲着。我替北军当侦察、当向导,因为没人比我更熟南方那片沼泽和暗线。1863 年,我在 Montgomery 上校的指挥下,规划并向导了北军对南卡 Combahee 河的突袭,一夜之间解放了七百多个被奴役的人——我成了南北战争中第一个规划并向导武装突袭的女人。\n\n你发现了吗?我靠的还是那张老网络:逃奴的暗线、自由黑人的联络、谁可信谁不可信。这种隐秘的协作网,在别的领域也撑起过大事——比如科学家靠通信网,把整个欧洲的发现串成一张知识网。(你跑过 scientific-revolution,会想起那张网。)他们传的是公式,我们传的是活人和活路。一样靠网络,只是赌注是命。\n\n战后,宪法终于加了修正案,废除奴隶制。我用一双脚走了一辈子的那个词——「自由」——总算白纸黑字,成了全国的法。\n\n我没念过一天书。可那部我读不懂的宪法,最后写进去的,正是我用脚证明了一辈子的东西。',
        en: 'Pull the lens back and see where these feet of mine finally walked.\n\nWhen the civil war came, I did not sit idle. I served the Union army as a scout and guide, for no one knew the Southern swamps and secret lines better than I. In 1863, under the command of Colonel Montgomery, I planned and guided a Union raid up the Combahee River in South Carolina and in one night freed more than seven hundred enslaved people, becoming the first woman in the Civil War to plan and guide an armed raid.\n\nDid you notice? I still relied on that old network: the secret lines of fugitives, the contacts among free Black people, who could be trusted and who could not. This kind of hidden cooperative net has held up great things in other fields too, scientists who strung the discoveries of all Europe into a web of knowledge through a network of letters. (Run the scientific-revolution topic and you will recall that web.) What they carried was formulas; what we carried was living people and a living way out. The same reliance on a network, only the stakes were life.\n\nAfter the war, the Constitution at last added an amendment abolishing slavery. The word I had walked my whole life with my feet, "freedom," became, in black and white, the law of the land.\n\nI never had a day of schooling. Yet what that Constitution I could not read finally wrote in was exactly the thing I had proved with my feet my whole life.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 内战 Tubman 替北军当侦察向导 (最熟南方沼泽暗线) + 1863 Combahee 河突袭一夜解放七百多人/在 Montgomery 上校指挥下规划并向导/南北战争第一个规划并向导武装突袭的女人 + 靠老网络 (逃奴暗线/自由黑人联络) → 跨 scientific-revolution Mersenne 通信网锚 (隐秘协作网/他们传公式我们传活人活路/赌注是命) + 战后修正案废奴 + 「没念过书但宪法最后写进去的正是她用脚证明一辈子的东西」',
      engagementHook: '我没念过一天书,可那部我读不懂的宪法,最后写进去的「自由」,正是我用脚证明了一辈子的东西。一个不识字的人,怎么会比写宪法的人更懂「自由」是什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'tub-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,再看「自由」这两个字,两种说法都站得住。\n\n一种说法:自由从来不是别人给的,是自己抢的。Calhoun 那种人写了一辈子「自由」,写的全是怎么不给我们自由;就连帮我们的废奴主义者,大多也是坐在安全的北方写文章、做演讲。真正的自由,是我这种人,在没月亮的夜里,一步一步,从奴役里把自己、把别人的身体,硬走出来的。话救不了人,脚才救得了。\n\n另一种说法:光靠脚,走不远。我一个人能带出 70 个,可南方有几百万被奴役的人。最终终结奴隶制的,是宪法的修正案、是一场死了几十万人的战争、是 Douglass 那种人在政治里一寸寸的争夺。我的脚走出了一条路,可没有纸上那些字、台上那些争论、战场上那些命,这条路通不到所有人那里。脚和纸,缺一不可。\n\n这两边不是「谁更重要」。是同一件事的两半——纸上的「自由」要靠脚去兑现,脚走出的「自由」要靠纸去固定。\n\n你怎么看?想 30 秒,写下来。',
        en: 'Having walked my whole life, look again at the word "freedom." Both views stand.\n\nOne view: freedom is never given by others; it is seized for oneself. Men like Calhoun wrote "freedom" all their lives, and what they wrote was all about how not to give it to us; even the abolitionists who helped us mostly sat safe in the North writing articles and making speeches. Real freedom was people like me, on moonless nights, step by step, hauling our own bodies and others\' out of bondage. Words cannot save a person; feet can.\n\nThe other view: feet alone do not walk far. I alone could bring out 70, but the South held millions of the enslaved. What finally ended slavery was a constitutional amendment, a war that killed hundreds of thousands, and the inch-by-inch fight in politics by men like Douglass. My feet walked out a road, but without the words on paper, the arguments on the platform, the lives on the battlefield, that road could not reach everyone. Feet and paper, neither can be spared.\n\nThese are not "which matters more." They are two halves of one thing: the "freedom" on paper must be cashed by feet, and the "freedom" walked out by feet must be fixed by paper.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (自由不是别人给的是自己抢的/Calhoun 写一辈子自由全是怎么不给/废奴主义者也多坐安全北方写文章/真自由是她在黑夜里一步步走出来的/话救不了人脚才救得了) / 另一种说法 (光靠脚走不远/一人带 70 但南方几百万/终结奴隶制靠修正案+死几十万的战争+Douglass 政治里一寸寸争/脚和纸缺一不可) / 同一件事两半 纸上自由要靠脚兑现脚走的自由要靠纸固定 / 想 30 秒',
      engagementHook: '自由是自己用脚抢出来的,还是要靠纸上的字、台上的争论、战场上的命才能给到所有人——两种说法都站得住。你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'tub-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——头被砸坏、不识字、当过财产、十几次走回那片黑夜——你会怎么评价这样一个人?\n\n讲台上的人用最漂亮的话证明我「快乐又满足」,我用一双脚,在没月亮的夜里,把 70 个真人带成了真的自由人。聪明的话和走出去的脚,到底哪个更接近「自由」的真相?你怎么评?\n\n不过先记住:你这一遍,只走了我 Tubman 这一边,只听到了一个用脚抢自由的人。换 Calhoun 那一遍,你会看见同一个「自由」被一张聪明的嘴扭成奴隶制的辩护;换 Douglass 那一遍,你会看见它怎么在报纸和政治里被一寸寸争回来。三遍合起来,你刚才的判断才站得住。\n\n再想一步。今天你身边,有没有人正被困在某个处境里,所有人都跟他说「认了吧,就这样吧,没办法的」——可能是一个被欺负却不敢声张的同学,可能是一个被劝着「别折腾了」的人,也可能是某个时候的你自己。\n\n那时候,你会跟着大家说「认了吧」,还是会做那个迈出第一步、或者拉别人迈出第一步的人——哪怕路又黑又长,哪怕你也害怕?',
        en: 'Having walked my whole life, head broken, unable to read, once property, walking back into that dark a dozen times, how would you judge a person like this?\n\nThe men at the podium used the most beautiful words to prove I was "happy and content"; I, with two feet, on moonless nights, walked 70 real people into being truly free. Clever words and feet that walk out, which comes closer to the truth of "freedom"? How do you judge it?\n\nBut first, remember: in this pass you walked only my side, Tubman\'s, you heard only someone who seized freedom with her feet. Run Calhoun\'s pass and you will see the same word "freedom" twisted by a clever mouth into a defense of slavery; run Douglass\'s pass and you will see it won back inch by inch in newspapers and politics. Only all three together let the judgment you just formed stand.\n\nThen take one more step. In your own life today, is there someone trapped in some situation where everyone tells them "give in, this is just how it is, nothing can be done", maybe a classmate bullied but afraid to speak up, maybe someone urged to "stop making trouble," maybe, at some moment, you yourself.\n\nWhen that happens, will you join the crowd saying "give in," or will you be the one who takes the first step, or pulls another into taking it, even when the road is dark and long, even when you too are afraid?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价 Tubman (头被砸坏/不识字/当过财产/十几次走回黑夜 → 聪明的话 vs 走出去的脚哪个更接近自由真相) + transfer「今天你身边有人被困在某处境所有人说认了吧 (被欺负不敢声张的同学/被劝别折腾的人/某时的你自己)」+ 你会跟着说认了吧还是做那个迈第一步或拉别人迈第一步的人哪怕路黑又长哪怕你也害怕',
      engagementHook: '讲台上的人说我「快乐又满足」,我用脚把 70 个人带成了真的自由人。今天你身边有没有人被困住、所有人都劝他「认了吧」?那时候,你会跟着说认了,还是做那个迈出第一步的人——哪怕路又黑又长,哪怕你也害怕?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'calhoun':              calhounLens,
  'douglass':             douglassLens,
  'tubman-receiving-end': tubmanLens,
};

// per TOPIC_ROADMAP_G6_G12.md A4 + receiving-end 优先 pattern:
// 女性 + 逃奴 + 用脚把「自由」从话语变成真人走出去的路 + N6「自由是谁的话」跨 lens 对位 + N10/N11 脚 vs 纸 closing
export var defaultLens = 'tubman-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'slavery-abolition-1850',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'calhoun': 30, 'douglass': 30, 'tubman-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「自由是谁的话」一套自由话三个用法 (Calhoun 用嘴扭成 positive good 辩护 / Douglass 自传写出名字争解释权 / Tubman 用脚走成 70 人头顶星光)',
    'defaultLens: tubman-receiving-end — 受影响者优先 (女性 + 逃奴 + gold-standard N1 hook + N10/N11 脚 vs 纸)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: Tubman 逃到宾州那一刻「看自己的手/像进天堂」是 documented paraphrase; 「我救出几百但凡他们知道自己是奴隶」名言 paraphrase',
    'cross-Topic 锚: Calhoun→自由话语工具性/enlightenment; Douglass→hamilton-jefferson 理念 vs 行动 (文字桥); Tubman 地下铁路网络→scientific-revolution Mersenne 通信网',
    '反 Whig: Calhoun 是耶鲁一流理论家 (智识与辩护奴隶制同体); 北方多数冷漠或获益; Douglass 与白人废奴派决裂展示盟友内部种族张力',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
