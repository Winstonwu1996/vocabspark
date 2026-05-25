// ─── Reconstruction & Its Betrayal 1865-1877 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 重建与背叛 · Reconstruction & Its Betrayal 1865-1877
// HSS-8.11 · APUSH Period 5-6 · AP US Government (14th / 15th Amendment, Equal Protection)
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md A6 + AUTHORING_PIPELINE 第 8/12 条):
//   - andrew-johnson                       (perpetrator-actor) — Andrew Johnson 1808-1875 否决重建法案 / 被弹劾 (1 票脱罪) / 为南方白人复权铺路
//   - hiram-revels                         (lonely-mediator)   — Hiram Revels 1827-1901 首位非裔美国参议员 (密西西比) / 温和路线很快被反扑淹没
//   - freedman-sharecropper-receiving-end  (receiving-end)     — composite 南方黑人佃农 c.1840-1910 / 1867 首次投票 → sharecropping → Jim Crow 的一生 (DEFAULT)
//
// 跨 lens micro-detail (N6 anchor):
//   「纸面权利 vs 现实剥夺」— 14th/15th 修正案白纸黑字写下「平等保护 / 不得因肤色剥夺投票权」,
//   可现实里同一群人被 Black Codes → sharecropping → Jim Crow 一层层剥回去。
//   - Johnson lens N6: 他怎么用否决 + 赦免, 把「写在纸上的自由」在现实里掏空
//   - Revels lens N6: 他在参议院亲手见证「纸面权利」被反扑的潮水淹没
//   - 佃农 lens N6: 同一份修正案, 在他手里从「投票的权利」变成「还不完的债」
//   全部对位 magna-carta-1215 Clause 39: 普世措辞 (任何自由人) vs 实际受益人 (只有贵族) 同一悖论
//
// 跨 Topic 锚:
//   - 14th/15th 纸面权利 vs 现实剥夺 → magna-carta-1215 (Clause 39 普世措辞 vs 实际受益人同一悖论)
//   - Hiram Revels 短暂高峰 + 反复受挫 → A4 frederick-douglass (黑人政治领袖反复受挫母题)
//   - Sharecropping 债务人身束缚 → black-death-1347 (劳动力短缺后的人身束缚) + industrial-revolution (工资奴役对照)
//
// defaultLens = 'freedman-sharecropper-receiving-end' (受影响者优先 pattern: 被解放又被收回权利一方 + 跨 Topic「纸面 vs 现实」对位)
//
// STRUCTURE SPEC (long-arc, 12 nodes):
//   - 12 nodes per lens (long-arc 200+ 年长时段感, 1865→1877→Jim Crow)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N11 synthesis)
//   - expectsRealAnswer: ONLY N11 (synthesis 倒数第二) + N12 (closing 末节) = true; all others false (2 per lens, 6 total)
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Andrew Johnson (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var andrewJohnsonLens = {
  id: 'andrew-johnson',
  name: 'Andrew Johnson',
  nameCn: '安德鲁·约翰逊',
  role: 'perpetrator-actor',
  perspectiveTag: 'reconstruction-reverser',
  icon: '🏛️',
  description: {
    cn: '田纳西人，1808 年生在穷苦人家，小时候给裁缝当学徒，没正经上过一天学，是自己边干活边学认字的。他靠这股劲一路爬到副总统，1865 年林肯遇刺后接任总统。南方刚打输内战，四百万被奴役的人刚获自由，怎么安置这个烂摊子，落到了他手上。他自己出身底层、恨南方种植园主，可他更不愿看到黑人翻身。这一遍让你从一个手握重建大权、却亲手把自由往回收的总统内部，看一段「自由刚到手就被夺走」的历史。',
    en: 'A Tennessee man, born 1808 into a poor family, apprenticed to a tailor as a boy, never spent a single proper day in school, and taught himself to read while he worked. On that grit he climbed all the way to vice president, and when Lincoln was assassinated in 1865 he became president. The South had just lost the civil war, four million enslaved people had just been freed, and how to handle this wreckage landed in his hands. He came from the bottom himself and hated the southern planters, yet he hated even more the thought of Black people rising. This pass lets you watch, from inside a president who held the power of Reconstruction and used it to pull freedom back, a history of "freedom seized the moment it arrived."',
  },
  storyboard: [
    {
      id: 'aj-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1865 年 4 月 15 日早上，林肯死了。前一晚他在剧院被人开枪打中头部。我，副总统，当天上午就在一家旅馆的房间里宣誓，接任美国总统。\n\n那一刻，全国都在哭林肯。可没几个人停下来想：接他班的这个人，到底想把这个国家带去哪儿？\n\n我是 Andrew Johnson（安德鲁·约翰逊），田纳西来的。我出身比在场任何人都穷——小时候给裁缝当学徒，没上过学，是自己学会认字的。我恨那些瞧不起穷人的南方种植园主。\n\n内战刚打完。南方输了，四百万被奴役的人刚刚获得自由。怎么收拾这个烂摊子，现在归我管。\n\n这一遍，你坐进我这个位置。你会看见一个出身底层、本该同情弱者的人，怎么一步步，把刚到手的自由，往回收。',
        en: 'The morning of 15 April 1865, Lincoln was dead. The night before, he was shot in the head in a theater. I, the vice president, was sworn in that very morning in a hotel room as president of the United States.\n\nIn that moment the whole country was weeping for Lincoln. But few stopped to ask: this man taking his place, where did he mean to lead the country?\n\nI am Andrew Johnson, from Tennessee. I came from a poorer start than anyone in that room. As a boy I was apprenticed to a tailor, never went to school, taught myself to read. I hated the southern planters who looked down on the poor.\n\nThe civil war had just ended. The South had lost, and four million enslaved people had just been freed. Cleaning up this wreckage was now mine to manage.\n\nThis pass puts you in my seat. You will watch a man of the lowest origins, a man who should have pitied the weak, pull freedom back, step by step, the moment it arrived.',
      },
      deliverGoal: 'N1 hook — 1865.4.15 Lincoln 遇刺死 + Johnson 旅馆宣誓接任总统 + 自我介绍 (田纳西最穷出身/裁缝学徒/自学认字/恨种植园主) + 内战刚完四百万人获自由收拾烂摊子归他 + 这一遍视角 (底层出身却把自由往回收)',
      engagementHook: '一个出身最穷、本该同情弱者的人，却一步步把刚到手的自由往回收。你信「出身底层的人一定会站在弱者那边」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我接手的是个什么局面。\n\n1861 到 1865 年，美国打了一场内战。南方 11 个蓄奴州想脱离联邦，单独建国，为的是保住奴隶制。北方不让，打了四年，死了大约 60 万人——这是美国历史上死人最多的一场仗。\n\n南方打输了。1865 年，宪法加了第十三条修正案（13th Amendment），白纸黑字废除奴隶制。一夜之间，南方四百万被奴役的人，法律上自由了。\n\n可「法律上自由」是一回事，「日子怎么过」是另一回事。这些人大多不识字、没有土地、没有钱。他们脚下还站在原来主人的种植园里。\n\n现在最大的问题摆在我面前：打输的南方各州，怎么重新放回联邦？那四百万刚自由的人，给不给他们公民权、投票权、土地？\n\n这套重新安排南方的工程，就叫 Reconstruction（重建）。它的方向盘，1865 年握在我手里。',
        en: 'First, the situation I inherited.\n\nFrom 1861 to 1865 the United States fought a civil war. Eleven slave states in the South tried to break away from the Union and form their own country, to keep slavery alive. The North refused, and the fighting ran four years and killed about 600,000 people, the deadliest war in American history.\n\nThe South lost. In 1865 the Constitution added the Thirteenth Amendment, abolishing slavery in black and white. Overnight, four million enslaved people in the South were legally free.\n\nBut "legally free" is one thing, and "how you live" is another. Most of these people could not read, owned no land, had no money. Their feet still stood on the plantations of their former masters.\n\nNow the largest question was set before me: how do the defeated southern states return to the Union? And those four million newly free people, do we give them citizenship, the vote, land?\n\nThis project of rearranging the South was called Reconstruction. In 1865 its steering wheel was in my hands.',
      },
      deliverGoal: 'N2 setup — Civil War 1861-65 (南方 11 州脱离保奴隶制/北方打赢/约 60 万死) + 13th Amendment 1865 废奴四百万人法律自由 + 但不识字没地没钱脚还在种植园 + Reconstruction 核心问题 (南方州怎么回联邦/给不给黑人公民权投票权土地) + 方向盘在 Johnson 手里',
      engagementHook: '四百万人一夜之间「法律上自由」，可他们不识字、没地、没钱，脚下还是原来主人的种植园。「法律上自由」和「真的过上自由日子」，差多远？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '现在你得搞懂我心里的两笔账，它们彼此打架。\n\n第一笔账：我恨南方种植园主。我从小被这些有钱人瞧不起。打赢内战后，我巴不得狠狠收拾他们，让他们尝尝失败的滋味。\n\n第二笔账：可我也是个南方白人。在我心里，黑人不该跟白人平起平坐。让刚获自由的黑人投票、当官、跟白人一样有权利——这一步，我迈不出去，也不想迈。\n\n这两笔账一打架，我做了选择：1865 年我开始大批赦免南方的前邦联分子，让他们恢复政治权利。我对种植园主的恨，让位给了我对黑人翻身的更大的不安。\n\n林肯要是还活着，会不会走另一条路？没人知道。但接班的是我。\n\n你看，一个人手里的权力越大，他心里那笔最深的偏见，影响的人就越多。我那笔「黑人不该平起平坐」的账，接下来要压在四百万人的头上。',
        en: 'Now you must grasp the two ledgers in my mind, and they fought each other.\n\nFirst ledger: I hated the southern planters. As a boy these rich men looked down on me. After winning the war I longed to punish them hard, to let them taste defeat.\n\nSecond ledger: but I too was a southern white man. In my mind, Black people should not stand as equals with whites. Letting the newly free vote, hold office, and have the same rights as whites, that step I could not take, and did not want to.\n\nWhen the two ledgers clashed, I made my choice: in 1865 I began pardoning former Confederates in large numbers, restoring their political rights. My hatred of the planters gave way to my deeper unease at Black people rising.\n\nWould Lincoln, had he lived, have taken another road? No one knows. But the man who took over was me.\n\nYou see, the greater the power in a man\'s hands, the more people his deepest prejudice touches. My ledger, "Black people should not be equals," was about to press down on four million heads.',
      },
      deliverGoal: 'N3 setup — Johnson 两笔账打架 (恨种植园主想报复 vs 自己是南方白人不愿黑人平等) + 1865 大批赦免前邦联分子恢复其政治权利 + 「对种植园主的恨让位给对黑人翻身的不安」+ 权力越大偏见影响的人越多',
      engagementHook: '我恨种植园主，也不愿黑人平等——两笔账打架，我选了后者。一个手握重权的人，他心里最深的那笔偏见，会影响多少人？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1865 年下半年，我赦免的那批南方旧势力，回到各州掌权。他们立刻干了一件事：通过一批新法律，专门管刚获自由的黑人。这套法律叫 Black Codes（黑人法令）。\n\n这些法律写得很「讲究」：黑人不能随便换工作，没有「正当职业」就抓去做苦役，不能持枪，不能在某些地方租地。说是自由人，可日子被框得跟从前差不了多少。\n\n你坐在总统的位置上。你完全看得见：这些法令，是在把刚废掉的奴隶制，换个名字偷偷搬回来。\n\n你手里有权力踩刹车。你可以否决、可以派军队、可以宣布这些州的政府不合法。\n\n可你没踩。你睁一只眼闭一只眼。因为这些法令，正合你心里那笔账：让黑人「自由」，但别让他们真的跟白人平起平坐。\n\n这一刻你得问自己：当你眼看着「自由」被偷偷换成「换了名字的奴役」，而你有权力阻止却选择不动——你算不算共犯？',
        en: 'Now you are me.\n\nIn the second half of 1865, the old southern power I had pardoned returned to office in the states. At once they did one thing: passed a batch of new laws aimed specifically at the newly free. These were called the Black Codes.\n\nThe laws were written "carefully": Black people could not freely change jobs; without a "proper occupation" they were seized into hard labor; they could not carry guns, could not rent land in certain places. Called free, yet their lives were boxed in much as before.\n\nYou sit in the president\'s chair. You can see it plainly: these codes were sneaking the just-abolished slavery back under a new name.\n\nYou have the power to hit the brakes. You can veto, send troops, declare these state governments unlawful.\n\nBut you did not brake. You looked the other way. Because these codes suited the ledger in your mind: let Black people be "free," but never let them truly stand as equals with whites.\n\nHere you must ask yourself: when you watch "freedom" be quietly swapped for "slavery under a new name," and you have the power to stop it but choose not to move, are you not an accomplice?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1865 下半年赦免的旧势力回各州掌权 + Black Codes (不能随便换工作/无正当职业抓去做苦役/不能持枪/不能租地) = 换名字的奴隶制 + Johnson 有权踩刹车 (否决/派军队/宣布州政府不合法) 但睁眼闭眼 + 自我拷问: 有权阻止却不动算不算共犯',
      engagementHook: '我眼看着「自由」被偷偷换成「换了名字的奴役」，我有权阻止，却选择不动。当你有能力制止一件错事却袖手旁观，你算不算共犯？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的「睁一只眼闭一只眼」，惹毛了国会里一批人。\n\n国会里有一派叫 Radical Republicans（激进共和党人），他们是真心想让黑人拿到平等权利的。看见南方靠 Black Codes 把自由架空，他们火了。\n\n1866 年，国会通过一部《民权法案》（Civil Rights Act），要给黑人公民身份和基本的法律保护。\n\n我做了一件事：否决（veto）。我不签。\n\n国会反手又做了一件以前很少发生的事：凑足三分之二的票，硬是把我的否决推翻（override），让法案照样生效。\n\n这是美国历史上头一回，国会推翻总统对一部重要法律的否决。\n\n你看出来了吗？我和国会，已经从「同一个政府里的两个部门」，变成了「正面开战的两个对手」。一个想踩油门让黑人前进，一个想踩刹车把他们拦回去。\n\n这场总统 vs 国会的战争，接下来会把我送上一个没人想去的地方——被弹劾的审判台。',
        en: 'My "looking the other way" enraged a group in Congress.\n\nThere was a faction in Congress called the Radical Republicans, who genuinely wanted Black people to gain equal rights. Seeing the South hollow out freedom with the Black Codes, they were furious.\n\nIn 1866 Congress passed a Civil Rights Act, to give Black people citizenship and basic legal protection.\n\nI did one thing: I vetoed it. I would not sign.\n\nCongress did something in return that had rarely happened before: it mustered a two-thirds vote and overrode my veto, letting the law take effect anyway.\n\nThis was the first time in American history that Congress overrode a president\'s veto on a major law.\n\nDo you see it? Congress and I had gone from "two branches of one government" to "two opponents in open war." One wanted to hit the gas to move Black people forward; one wanted to hit the brakes and hold them back.\n\nThis war of president versus Congress would soon carry me somewhere no one wants to go: the dock of an impeachment trial.',
      },
      deliverGoal: 'N5 story — Radical Republicans 真心想给黑人平等权利 + 1866 Civil Rights Act 给公民身份+法律保护 + Johnson 否决 (veto) + 国会三分之二票推翻 (override) 头一回 + 总统 vs 国会从两个部门变两个对手 (踩油门 vs 踩刹车) + 伏笔弹劾',
      engagementHook: '我否决了《民权法案》，国会硬是推翻了我的否决——总统和国会，从合作变成正面开战。一个想踩油门，一个想踩刹车，你觉得国家该听谁的？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '国会赢了一回合，他们要把胜利钉死在宪法里。\n\n1868 年，第十四条修正案（14th Amendment）通过了。它写下一句到今天还在用的话：任何州，都不得拒绝给予任何人「法律的平等保护」（equal protection of the laws）。\n\n1870 年，第十五条修正案（15th Amendment）又写明：不得因为肤色、种族，剥夺任何公民的投票权。\n\n白纸黑字。黑人，从此在宪法上，是平等的公民，有投票权。\n\n可你站在我的位置，心里冷笑。因为你知道一个秘密：写在纸上，不等于现实里做到。\n\n我赦免南方旧势力、纵容 Black Codes、能拖就拖能挡就挡——我做的所有事，都是在掏空这些漂亮句子。修正案说「平等保护」，可谁来保护？我不派军队，南方各州就当它不存在。\n\n这一幕，六百多年前就上演过。1215 年英国的 Magna Carta（大宪章）第 39 条写「任何自由人」不得被任意拘押——可那时候，「自由人」实际上只指贵族，底下的农奴根本不算数。普世的措辞，掏空的现实。（你跑过大宪章那段历史就懂这个老把戏。）\n\n一句话写得多漂亮，跟它对谁真算数，是两件事。',
        en: 'Congress won a round, and they meant to nail the victory into the Constitution.\n\nIn 1868 the Fourteenth Amendment was ratified. It set down a line still in use today: no state may deny any person "the equal protection of the laws."\n\nIn 1870 the Fifteenth Amendment declared plainly: the vote shall not be denied to any citizen on account of color or race.\n\nBlack and white. Black people were now, in the Constitution, equal citizens with the right to vote.\n\nBut you sit in my chair and smile coldly inside. Because you know a secret: written on paper does not mean done in reality.\n\nMy pardoning the old southern power, my tolerating the Black Codes, my dragging and blocking wherever I could, everything I did was hollowing out these fine sentences. The amendment says "equal protection," but who provides the protection? If I send no troops, the southern states act as if it does not exist.\n\nThis scene had played out six centuries before. In England\'s Magna Carta of 1215, Clause 39 wrote that "no free man" may be seized arbitrarily, yet back then "free man" really meant only the nobles; the serfs below did not count at all. Universal wording, hollowed-out reality. (Run the magna-carta topic and you will know this old trick.)\n\nHow finely a line is written, and whom it actually counts for, are two different things.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens + cross-Topic — 14th Amendment 1868 equal protection + 15th Amendment 1870 不得因肤色剥夺投票权 (纸面权利) vs Johnson 掏空 (赦免/纵容 Black Codes/不派军队) + 对位 Magna Carta Clause 39 普世措辞「任何自由人」vs 实际只指贵族 (跨 Topic 锚) + 「写得漂亮 vs 对谁真算数是两件事」',
      engagementHook: '修正案写下「平等保护」「不得剥夺投票权」——可我不派军队，南方就当它不存在。六百年前的大宪章也是：写「任何自由人」，实际只算贵族。一句话写得多漂亮，跟它对谁真算数，是同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '国会忍我忍到头了。1868 年，他们要把我赶下台。\n\n导火索是一个职位。国会通过一条法律，规定总统不能随便撤换某些官员。我偏要撤掉跟我作对的陆军部长 Stanton（斯坦顿）。国会抓住这个，说我违法。\n\n众议院投票，正式弹劾（impeach）我。这是美国历史上第一次有总统被弹劾。\n\接下来案子送到参议院审判。要把我赶下台，需要三分之二的票数定我有罪。\n\n气氛紧张到极点。最后投票：定我有罪的票数，差一票，没够三分之二。\n\n就差一票，我保住了总统位子。\n\n你坐在我的位置，长出一口气。可你也清楚一件事：救我的不全是「我没罪」。是有些参议员怕一个先例——怕国会从此可以因为「政见不合」就赶走总统，那总统就成了国会的傀儡。他们投我无罪，是为了保护那个职位，不全是保护我这个人。\n\n我赢了。可这场胜利里，没有一点光彩。',
        en: 'Congress had endured me to the limit. In 1868 they moved to throw me out.\n\nThe trigger was an office. Congress passed a law saying the president could not freely remove certain officials. I insisted on removing the secretary of war, Stanton, who worked against me. Congress seized on this and said I had broken the law.\n\nThe House voted to formally impeach me. It was the first time in American history a president was impeached.\n\nThe case then went to the Senate for trial. To remove me required a two-thirds vote to convict.\n\nThe tension was at its peak. The final vote: the count to convict fell one vote short of two-thirds.\n\nBy a single vote, I kept the presidency.\n\nYou sit in my chair and let out a long breath. But you also know one thing: what saved me was not entirely "I was innocent." Some senators feared a precedent, feared that Congress could from then on remove a president merely over "disagreement," making the president a puppet of Congress. They voted to acquit to protect the office, not entirely to protect me.\n\nI won. But there was not a shred of glory in this victory.',
      },
      deliverGoal: 'N7 story — 1868 弹劾 Johnson 导火索 (撤换陆军部长 Stanton 违反国会法律) + 众议院投票弹劾 (头一回总统被弹劾) + 参议院审判差一票没够三分之二 + Johnson 保住位子 + 救他的不全是无罪而是参议员怕先例 (总统沦为国会傀儡) + 「胜利里没一点光彩」',
      engagementHook: '我差一票没被赶下台，可救我的不全是「我没罪」——有些人是怕开了「政见不合就赶总统」的先例。你觉得，「为了保护制度而放过一个坏人」，值不值？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1869 年，我任期到了，下台了。国会和激进派暂时占了上风。\n\n那几年，南方出现了一段从没有过的景象：黑人第一次大批投票、选出黑人议员、黑人当上地方官。1870 年，密西西比甚至选出了一位黑人参议员，进了我曾经待过的那个参议院。（他叫 Hiram Revels（海勒姆·里弗斯），你换到他那一遍，可以亲眼看那段短暂的高峰。）\n\n看上去，我输了，进步赢了。\n\n可你别急着下结论。我虽然下台了，但我做的那些事，赦免旧势力、纵容 Black Codes、把南方白人重新扶回权力，这些种子已经埋进了土里。\n\n北方人会一直愿意派军队、花钱、流血，去保护一千多英里外那些黑人的权利吗？\n\n热情是会退的。等北方人累了、不想管了，南方那些被我放回来的旧势力，会做什么？\n\n我虽然下台，但我替他们守住了「卷土重来」的可能。这一点，我心里清楚。',
        en: 'In 1869 my term ended and I left office. Congress and the radicals had the upper hand for a time.\n\nIn those years the South saw a sight never seen before: Black people voted in large numbers for the first time, elected Black legislators, and held local office. In 1870 Mississippi even sent a Black senator into that very Senate where I had once sat. (His name was Hiram Revels; switch to his pass and you can watch that brief peak for yourself.)\n\nIt looked as if I had lost and progress had won.\n\nBut do not rush to a conclusion. Though I had left office, what I had done, pardoning the old power, tolerating the Black Codes, lifting southern whites back toward power, those seeds were already in the ground.\n\nWould the people of the North keep being willing to send troops, spend money, and bleed, to protect the rights of Black people a thousand miles away?\n\nEnthusiasm fades. When the North grew tired and stopped caring, what would the old southern power I had let back in do?\n\nThough I left office, I had kept their chance of a comeback alive. That much I knew clearly.',
      },
      deliverGoal: 'N8 story — 1869 Johnson 下台/激进派暂占上风 + 南方黑人首次大批投票/选出黑人议员/黑人地方官 + 1870 密西西比选出黑人参议员 Hiram Revels (桥到 Revels lens) + 但 Johnson 埋的种子 (赦免旧势力/扶回南方白人) + 北方热情会退 + 「我替他们守住了卷土重来的可能」',
      engagementHook: '我下台了，黑人第一次大批投票、当上议员，看着像进步赢了。可我埋的种子还在土里——你觉得，北方人会一直愿意派军队、流血，去保护一千英里外别人的权利吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我赌北方会累。我赌对了。\n\n下台之后，南方各州冒出一批暴力组织，专门恐吓黑人和帮黑人的白人——半夜骑马、烧房子、私刑杀人，就是为了不让黑人去投票。这其中最有名的，叫 Ku Klux Klan（三 K 党）。\n\n国会一开始还想管，派军队、立法镇压。可一年一年过去，北方人的耐心，真的磨没了。打仗死了几十万人，谁都想喘口气；经济出了问题，大家更顾自己的钱包；报纸上天天是南方的乱子，北方人开始嫌烦：何必为了那些黑人，没完没了地花钱流血？\n\n你看，我当年的判断成真了。保护别人的权利，靠的不只是写在宪法上的句子，靠的是有没有人愿意一直为它出力。\n\n一旦北方人撒手，南方那些旧势力，就再没有什么能拦住他们了。\n\n压垮重建的最后一根稻草，1876 年到了。',
        en: 'I bet the North would tire. I bet right.\n\nAfter I left office, violent organizations sprang up across the southern states, aimed at terrifying Black people and the whites who helped them, riding at night, burning houses, killing by lynching, all to keep Black people from the polls. The most notorious was called the Ku Klux Klan.\n\nAt first Congress still tried to act, sending troops and passing laws to suppress them. But year by year the patience of the North truly wore away. Hundreds of thousands had died in the war and everyone wanted to breathe; the economy ran into trouble and people minded their own wallets more; the papers were full of southern unrest day after day, and northerners grew weary: why, for the sake of those Black people, keep spending money and blood without end?\n\nYou see, my judgment of years before came true. Protecting another\'s rights rests not only on sentences written in the Constitution, but on whether anyone stays willing to keep putting in the effort.\n\nOnce the North let go, nothing could hold the old southern power back any longer.\n\nThe last straw that broke Reconstruction came in 1876.',
      },
      deliverGoal: 'N9 story — Johnson 赌北方会累赌对了 + 南方暴力组织恐吓黑人 (半夜骑马/烧房/私刑) Ku Klux Klan + 国会起初派军队立法镇压 + 北方耐心磨没 (打仗死太多/经济问题/嫌烦) + 「保护别人权利靠的是有人愿意一直出力」+ 北方撒手旧势力无人能拦 + 伏笔 1876',
      engagementHook: '我赌北方会累，赌对了——他们厌倦了为别人的权利花钱流血。「保护别人的权利」，到底靠宪法上的句子，还是靠有人愿意一直出力？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n10',
      type: 'narrative',
      phase: 'reflection',
      content: {
        cn: '把镜头拉到 1876 到 1877 年，看我埋的种子怎么开了花——尽管那时我已经死了（我 1875 年去世）。\n\n1876 年的总统大选，结果僵住了，两个党争得不可开交，谁也不肯认输。最后他们在桌子底下做了一笔交易，史称 1877 年妥协（Compromise of 1877）：一个党拿到总统位子，代价是——把最后留在南方的联邦军队，全部撤走。\n\n军队一撤，重建就结束了。\n\n保护黑人投票、保护他们权利的最后一道屏障，没了。南方旧势力卷土重来，一步步把黑人从投票站、从权力、从公共生活里赶出去。接下来几十年，那套羞辱、隔离黑人的制度，有个名字，叫 Jim Crow（吉姆·克劳）。\n\n你回头看我这一生做的事：赦免、纵容、否决、拖延。我没有亲手写下 Jim Crow。可我把南方旧势力放回权力，又赌赢了北方会撒手——我是那个，给后来这一切，松开闸门的人。\n\n自由扩张，然后被强行收回。这不是「内战后一切向好」的故事。这是一段，进步被一只手一只手按回去的历史。',
        en: 'Pull the lens to 1876 and 1877, to see how the seeds I planted bloomed, though by then I was dead (I died in 1875).\n\nThe presidential election of 1876 came out deadlocked, the two parties fighting bitterly, neither willing to concede. In the end they struck a deal under the table, known as the Compromise of 1877: one party got the presidency, and the price was this, to withdraw all the federal troops still left in the South.\n\nWith the troops gone, Reconstruction was over.\n\nThe last barrier protecting Black people\'s vote and their rights was gone. The old southern power came surging back, driving Black people step by step out of the polls, out of power, out of public life. Over the decades that followed, that system of humiliating and segregating Black people had a name: Jim Crow.\n\nLook back over what I did with my life: pardon, tolerate, veto, delay. I did not write Jim Crow with my own hand. But I put the old southern power back in office, and I bet correctly that the North would let go. I was the one who opened the gate for all that came after.\n\nFreedom expanded, then was forcibly pulled back. This is not the story of "all things improving after the war." This is a history of progress pressed back down, one hand at a time.',
      },
      deliverGoal: 'N10 zoom-out + topic connection (倒数第三) — 1876 大选僵局 + Compromise of 1877 (一党拿总统位/代价撤走南方最后联邦军队) + 军队一撤重建结束 + 南方旧势力卷土重来→Jim Crow + Johnson 没亲手写 Jim Crow 但放回旧势力+赌赢北方撒手=松闸门的人 + 「自由扩张然后被强行收回/不是内战后一切向好」反 Whig',
      engagementHook: '军队一撤，重建就结束了，黑人被一步步赶出投票站、赶进 Jim Crow。我没亲手写下这套制度，可我松开了闸门。「没亲手做坏事，但放开了让坏事发生的闸门」，这两者罪一样大吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'aj-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是个守护宪法平衡的人。我出身底层，靠自己爬上来。我顶住激进派的压力，我相信南方各州该尽快平等地回到联邦，不该被北方当占领区长期军管。弹劾我的那一票之差，恰恰说明：连当时的人都觉得，不能仅仅因为政见不合就赶走一个民选总统。\n\n另一种说法：我是那个亲手逆转进步的总统。我手握重建的方向盘，本可以用它保护四百万刚获自由的人。可我赦免旧势力、纵容 Black Codes、否决民权法案、赌赢了北方撒手。十四、十五修正案写下的平等，被我和我放回来的人，一层层掏空，最后兑现，等了快一百年。\n\n这两边不是「功过相抵」。是同一个我，同一双手——既守着一套程序，也按住了一群人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a man who guarded the balance of the Constitution. I came from the bottom and climbed up on my own. I held out against the pressure of the radicals; I believed the southern states should return to the Union as equals quickly, not be held as occupied territory under long military rule by the North. The single vote that saved me from removal shows exactly this: even people of that time felt you could not throw out an elected president merely over disagreement.\n\nThe other view: I was the president who reversed progress with his own hand. I held the steering wheel of Reconstruction and could have used it to protect four million newly free people. Instead I pardoned the old power, tolerated the Black Codes, vetoed the civil rights law, and bet correctly that the North would let go. The equality written into the Fourteenth and Fifteenth Amendments was hollowed out, layer by layer, by me and the men I let back in, and its final cashing took nearly a hundred years.\n\nThese are not "merits canceling faults." They are the same me, the same hands, guarding a procedure and holding a people down.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis (倒数第二) — 一种说法 (守护宪法平衡/底层自爬/顶住激进派/南方该平等回联邦不该军管/一票之差证明不能因政见赶总统) / 另一种说法 (亲手逆转进步/握方向盘本可保护却赦免旧势力纵容 Black Codes 否决民权法案赌赢北方撒手/14-15 修正案被掏空兑现等近百年) / 同一双手既守程序也按住一群人 / 想 30 秒',
      engagementHook: '守护宪法平衡的人，和亲手逆转进步的总统——是同一个我，同一双手。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'aj-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一段历史？\n\n四百万人刚拿到自由，宪法刚写下「平等保护」「不得剥夺投票权」，然后呢——一只手一只手，把这些权利按了回去，等它们真正兑现，等了快一百年。一边是白纸黑字的进步，一边是被强行收回的现实。把它们放在同一个天平上，你怎么称这段历史？\n\n再想一步。今天你身边，有没有「规则上写着保护你」和「真出事时没人替你撑腰」差很远的地方——校规上写着「禁止欺凌」，可真被欺负时没人管；某条权利写得很全，可没人愿意为它出力，它就成了一张废纸。\n\n那时候，你会指望那张纸自己生效吗？还是你会明白：写下来只是第一步，让它真算数，永远需要有人，一直站出来？',
        en: 'Having walked my whole life, how would you judge a history like this?\n\nFour million people had just gained freedom, the Constitution had just written "equal protection" and "the vote shall not be denied," and then what? Hand by hand, those rights were pressed back down, and their true cashing waited nearly a hundred years. On one side, progress in black and white; on the other, a reality forcibly pulled back. Put them on the same scale. How do you weigh this history?\n\nThen take one more step. In your own life today, is there somewhere "the rules say you are protected" and "when trouble actually comes, no one has your back" are far apart, a school rule that says "no bullying" while no one acts when you are bullied, a right written out in full that becomes waste paper because no one will put in the effort for it?\n\nWhen that happens, will you count on the paper to take effect by itself? Or will you understand this: writing it down is only the first step, and making it truly count always needs someone to keep standing up?',
      },
      deliverGoal: 'N12 close (末节 evaluation + transfer) — 评价历史 (四百万人刚获自由+宪法写平等保护/投票权 vs 一只手一只手按回去兑现等近百年/同一天平) + transfer「今天你身边规则上保护你 vs 真出事没人撑腰的地方 (校规禁欺凌却没人管)」+ 你会指望纸自己生效还是明白让它算数需要有人一直站出来',
      engagementHook: '宪法写下平等保护，然后一只手一只手把它按了回去，兑现等了近百年。你会怎么评价这样一段历史？今天你身边那个「规则上写着保护你、真出事没人撑腰」的地方，你会指望那张纸自己生效吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Hiram Revels (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var hiramRevelsLens = {
  id: 'hiram-revels',
  name: 'Hiram Revels',
  nameCn: '海勒姆·里弗斯',
  role: 'lonely-mediator',
  perspectiveTag: 'first-black-senator',
  icon: '⛪',
  description: {
    cn: '北卡罗来纳人，1827 年生，是个生来就自由的黑人，不曾被奴役。他当过牧师、办过学校、内战时帮着招募黑人士兵。1870 年，密西西比州选他进了联邦参议院，他成了美国历史上第一位非裔参议员，而且他接的，恰好是当年带头脱离联邦的那个人留下的那段参议员任期。他走的是温和路线，不喊报复，只想用规则一点点为同胞争权利。这一遍让你从一个孤身闯进白人权力核心的人那里，看一段短暂的高峰，怎么很快被反扑的潮水淹没。',
    en: 'A North Carolina man, born 1827, a Black man born free who was never enslaved. He served as a minister, founded schools, and helped recruit Black soldiers during the war. In 1870 the state of Mississippi sent him into the United States Senate, and he became the first African American senator in American history, filling, as it happened, the unexpired Senate term left by a man who had led the move to leave the Union. He walked a moderate road, calling for no revenge, seeking only to win rights for his people, rule by rule. This pass lets you watch, from one man alone inside the core of white power, how a brief peak was soon swallowed by a surging tide of backlash.',
  },
  storyboard: [
    {
      id: 'hr-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1870 年 2 月，华盛顿。我站在联邦参议院的门口，准备走进去。门里坐着的，全是白人。\n\n他们当中有人不想让我进。这几天，南方来的几个参议员一直在吵：一个黑人，凭什么坐进这间屋子？\n\n可我手里有密西西比州的合法选票。我等了几天，最后他们投票，让我进了。\n\n那一刻，我成了美国历史上第一个非裔参议员。\n\n我是 Hiram Revels（海勒姆·里弗斯）。我生来就是自由的，从没被奴役过。我当过牧师，办过学校，内战时帮着招募黑人士兵打仗。\n\n你知道我接的是谁留下的参议员任期吗？是密西西比一个当年带头脱离联邦、要保卫奴隶制的人留下、没干完的那段任期。\n\n现在，一个黑人，坐进了参议院，接着他空下的那段任期。\n\n这一遍，你坐进我这里。你会看见，一个人孤身闯进白人的权力核心，是什么滋味——以及那滋味，能撑多久。',
        en: 'February 1870, Washington. I stood at the door of the United States Senate, about to walk in. Inside sat only white men.\n\nSome of them did not want me to enter. For days, several senators from the South had argued: by what right does a Black man sit in this room?\n\nBut I held the lawful votes of the state of Mississippi. I waited several days, and at last they voted and let me in.\n\nIn that moment I became the first African American senator in American history.\n\nI am Hiram Revels. I was born free and was never enslaved. I had been a minister, had founded schools, and during the war helped recruit Black soldiers to fight.\n\nDo you know whose Senate term I was filling? It was the unfinished term left by a Mississippi man who had once led the move to leave the Union and defend slavery.\n\nNow a Black man sat in the Senate, finishing the term he had left behind.\n\nThis pass puts you in my place. You will see what it is to walk alone into the core of white power, and how long that feeling can last.',
      },
      deliverGoal: 'N1 hook — 1870.2 Revels 站参议院门口准备进 (里面全白人) + 南方参议员吵「黑人凭什么进」+ 有密西西比合法选票最后投票让他进 + 成首位非裔参议员 + 自我介绍 (生来自由从没被奴役/牧师/办学/招募黑人士兵) + 接的是当年带头脱离联邦保卫奴隶制者留下没干完的参议员任期 + 这一遍视角 (孤身闯白人权力核心)',
      engagementHook: '我，一个黑人，接过了当年带头保卫奴隶制的人留下没干完的那段参议员任期，成了第一个非裔参议员。你觉得，这样一个「第一」，是真的翻身了，还是只是一个很快会被收回的例外？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么走那条路。\n\n我 1827 年生在北卡罗来纳。我是个生来就自由的黑人——这在当时少见。我父亲也是自由的。我没有挨过鞭子，没有在账本上被记成财产。\n\n这一点很重要。它让我从小相信：黑人不是天生就该低人一等，只是被一套不公的制度压着。\n\n我后来当了牧师，到处传教、办学校，教黑人孩子认字读书。内战来了，我帮着招募黑人去当兵——那些人愿意为这个国家流血，就该有资格做这个国家平等的公民。\n\n我走的是什么路？是温和的路。我不主张报复白人，不喊「以牙还牙」。我相信：一个新生的、各种族都能站住脚的社会，得靠规则、靠教育、靠耐心，一点一点建起来。\n\n这条路，听上去最讲理。可你接下来会看见，最讲理的路，往往最先被现实碾碎。',
        en: 'First, who I am, so you understand why I walked the road I did.\n\nI was born in 1827 in North Carolina. I was a Black man born free, rare in that time. My father was free too. I never felt the whip, was never recorded as property in a ledger.\n\nThis matters. It made me believe from childhood that Black people are not born to be lower, only held down by an unjust system.\n\nLater I became a minister, preaching far and wide, founding schools, teaching Black children to read. When the war came, I helped recruit Black men to serve, for those willing to bleed for this country deserved to be its equal citizens.\n\nWhat road did I walk? The moderate one. I did not call for revenge against whites, did not cry "an eye for an eye." I believed a newborn society where every race could stand had to be built rule by rule, on education, on patience, bit by bit.\n\nThis road sounds the most reasonable. But you will soon see that the most reasonable road is often the first to be crushed by reality.',
      },
      deliverGoal: 'N2 setup — Revels 出身 (1827 北卡/生来自由的黑人少见/父亲也自由/没挨鞭子没被记成财产) + 从小信黑人不是天生低人一等只是被不公制度压 + 牧师/办学教黑人认字/内战招募黑人兵 (愿流血就该平等公民) + 温和路线 (不报复不以牙还牙/靠规则教育耐心) + 「最讲理的路往往最先被碾碎」',
      engagementHook: '我走的是温和的路：不报复，靠规则和耐心一点点争权利。听上去最讲理。可你信不信「最讲理的路，往往最先被现实碾碎」？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我能坐进参议院，不是天上掉下来的。是一个短暂的、来之不易的窗口期。\n\n内战刚打完那几年，发生了三件大事，给我开了门。\n\n第一，1865 年第十三条修正案废除了奴隶制。第二，1868 年第十四条修正案给了黑人公民身份和「法律的平等保护」。第三，1870 年第十五条修正案写明：不得因为肤色剥夺投票权。\n\n这三条，是黑人头一回在宪法层面，被写成平等的人。\n\n靠着这些新权利，南方的黑人第一次大批去投票。他们选出黑人议员、黑人地方官。密西西比这样一个昔日蓄奴的重镇，竟然把我送进了参议院。\n\n你看，我这个「第一」，不是我一个人厉害。是宪法上那三条新句子，再加上千千万万黑人第一次握住选票，一起把我托上去的。\n\n所以我心里一直有个数：我坐在这儿，靠的是「纸上的权利」加「有人保护它落地」。哪一头垮了，我这个位子，就保不住。',
        en: 'My taking a seat in the Senate did not fall from the sky. It was a brief, hard-won window.\n\nIn the years just after the war, three great things happened that opened the door for me.\n\nFirst, in 1865 the Thirteenth Amendment abolished slavery. Second, in 1868 the Fourteenth Amendment gave Black people citizenship and "the equal protection of the laws." Third, in 1870 the Fifteenth Amendment declared the vote could not be denied on account of color.\n\nThese three were the first time Black people were written, at the level of the Constitution, as equal persons.\n\nOn these new rights, the Black people of the South voted in large numbers for the first time. They elected Black legislators and local officials. Mississippi, once a stronghold of slavery, sent me to the Senate.\n\nYou see, my being "the first" was not my own greatness alone. It was those three new sentences in the Constitution, plus thousands upon thousands of Black people grasping the ballot for the first time, that lifted me up together.\n\nSo I always kept one count in mind: I sat here on "rights on paper" plus "someone protecting them in reality." If either end gave way, my seat could not hold.',
      },
      deliverGoal: 'N3 setup — Revels 进参议院靠短暂窗口期 + 三件大事 (13th 1865 废奴 / 14th 1868 公民身份+平等保护 / 15th 1870 不得因肤色剥夺投票权) = 黑人头一回宪法层面写成平等的人 + 南方黑人首次大批投票选出黑人议员官员 + 密西西比送他进参议院 + 「我这个第一靠纸上权利+有人保护它落地，哪头垮位子就保不住」',
      engagementHook: '我能进参议院，靠的是宪法上三条新句子，加上千万黑人第一次握住选票。我心里清楚：纸上的权利和有人保护它落地，少了哪一头，我都坐不住。这两头，你觉得哪头更靠不住？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你坐进了参议院。你是这屋里唯一的黑人，所有目光都盯着你。你心里清楚：你说的每一句话、做的每一件事，全美国的人都在看——他们要从你身上判断，黑人到底配不配坐在这里。\n\n这是一份你想都没想过的重担。\n\n你面前有两条路。\n\n一条路：站起来，把这些年黑人受的苦、白人欠的债，全吼出来，要求严惩南方、彻底清算。这条路解气，能让台下的同胞热血沸腾。\n\n另一条路：忍住怒火，说话温和、讲道理、不树敌，用一个个具体的提案，为黑人一点点争来实在的好处——一所学校、一份工作、一个职位。\n\n你选了第二条。你甚至公开为一些前邦联分子说话，主张给他们恢复部分权利——你想证明，黑人掌权，不是为了报复，是为了让所有人都能在新规矩下活下去。\n\n现在问题来了：当你身后的人正流着血，你却选择「讲道理、不树敌」——这是真正的智慧，还是一种太天真的软弱？',
        en: 'Now you are me.\n\nYou take your seat in the Senate. You are the only Black man in the room, and every eye is on you. You know it clearly: every word you say, every thing you do, all of America is watching, judging from you whether Black people are fit to sit here at all.\n\nThis is a weight you never imagined.\n\nBefore you lie two roads.\n\nOne road: stand up and shout out all the suffering Black people have borne over the years, all the debt the whites owe, demanding harsh punishment of the South and a full reckoning. This road feels good, sets the blood of your people boiling.\n\nThe other road: hold your anger, speak softly, reason, make no enemies, and through one concrete proposal after another win real gains for Black people, bit by bit, a school, a job, a position.\n\nYou choose the second. You even speak publicly on behalf of some former Confederates, urging that part of their rights be restored. You want to prove that Black people in power are not there for revenge but to let everyone live under new rules.\n\nNow the question: when the people behind you are bleeding and you choose to "reason and make no enemies," is this true wisdom, or a too-naive weakness?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 屋里唯一黑人所有目光盯着/全美国看黑人配不配坐这里 (重担) + 两条路 (吼出受的苦要求清算解气 vs 忍怒讲道理不树敌一个个提案争实在好处) + 选第二条甚至为前邦联分子说话恢复部分权利 (证明黑人掌权不为报复) + 自我拷问: 身后人在流血却讲道理不树敌是智慧还是天真软弱',
      engagementHook: '我身后的人正在流血，我却选了「讲道理、不树敌」，甚至替敌人说话。这是真正的智慧，还是一种太天真的软弱？换作是你，会选哪条路？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我把温和路线，落到了具体的事上。\n\n我在参议院做的，不是发表惊天动地的演说，而是磨一件件具体的提案。我推动给黑人办教育的机会，我为黑人争取进入政府工作的资格，我在一些任命的事情上发声，不让黑人被一刀切地挡在门外。\n\n我说话的方式，也很克制。我不羞辱白人同僚，我跟他们讲共同的利益：一个所有人都能上学、都能工作的南方，对白人也好。\n\n这套打法的好处是：它让一些原本敌视我的人，没法把我妖魔化成「来报复的黑人」。它给了温和派白人一个台阶，可以跟我合作。\n\n可这套打法也有它的软肋：它太依赖「对方愿意讲道理」。一旦对方根本不想跟你讲道理，只想用拳头和枪把你赶走——你那些精心打磨的提案、那些克制的措辞，就像拿一把尺子去挡一场山洪。\n\n而那场山洪，已经在南方的乡下，开始往上涨了。',
        en: 'I brought the moderate road down to concrete things.\n\nWhat I did in the Senate was not to deliver earth-shaking speeches, but to grind out one concrete proposal after another. I pushed for chances to educate Black people; I fought for Black people\'s eligibility to work in government; I spoke up on certain appointments, so that Black people would not be barred at the door across the board.\n\nMy way of speaking was restrained too. I did not humiliate my white colleagues; I spoke to them of shared interest: a South where all could go to school and all could work was good for whites as well.\n\nThe strength of this approach was that it kept some who had been hostile from being able to demonize me as "a Black man come for revenge." It gave the moderate whites a step they could take to work with me.\n\nBut this approach had its weak spot too: it leaned too heavily on "the other side being willing to reason." Once the other side has no wish to reason at all and means only to drive you out with fists and guns, your carefully polished proposals, your restrained wording, are like holding up a ruler against a mountain flood.\n\nAnd that flood, in the countryside of the South, had already begun to rise.',
      },
      deliverGoal: 'N5 story — Revels 温和路线落到具体提案 (推黑人教育/争政府工作资格/在任命上发声不让黑人一刀切挡门外) + 说话克制不羞辱白人讲共同利益 + 好处 (不被妖魔化成报复的黑人/给温和派白人台阶) + 软肋 (太依赖对方愿讲道理/对方用拳头枪赶你时提案像尺子挡山洪) + 伏笔山洪在南方乡下涨',
      engagementHook: '我的提案、我克制的措辞，只在「对方愿意讲道理」时管用。可一旦对方只想用拳头和枪赶你走呢？讲道理这件事，遇到不讲理的人，还剩多少力量？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我在参议院待的时间很短，1871 年就离开了。可就在那短短一段日子里，我亲眼看着「纸上的权利」，怎么一寸一寸被现实抽走。\n\n白纸黑字写着：黑人有投票权（第十五条修正案），人人受法律平等保护（第十四条修正案）。\n\n可我每天读到从南方乡下传来的消息：黑人去投票，半路被人拦下来打；想登记选民的，房子被烧；带头组织黑人投票的，半夜被拖出去私刑处死。\n\n法律说你有权投票。现实里，你一走近投票站，就可能丢命。\n\n这就是「纸面权利」和「现实剥夺」之间，那条血淋淋的鸿沟。我坐在参议院，手里攥着那几条庄严的修正案，却拦不住一千英里外，一个黑人因为想投票而被打死。\n\n这个老把戏，六百多年前就有人玩过。1215 年英国的 Magna Carta（大宪章）第 39 条，写着「任何自由人」不得被任意拘押——可那时候「自由人」实际上只算贵族，底层的农奴根本不在保护范围里。普世的措辞，写给一小撮人。（你跑过大宪章那段历史就懂这个老套路。）\n\n一句权利写在纸上，跟它能不能保护到最底层那个人，从来就是两件事。',
        en: 'My time in the Senate was short; I left in 1871. But in that brief span I watched with my own eyes how "rights on paper" were drawn out of reality, inch by inch.\n\nIn black and white it was written: Black people have the vote (the Fifteenth Amendment), and all enjoy the equal protection of the laws (the Fourteenth Amendment).\n\nYet every day I read the news coming up from the southern countryside: a Black man goes to vote and is stopped and beaten on the way; one who tries to register has his house burned; one who leads the organizing of Black voters is dragged out at night and lynched.\n\nThe law says you have the right to vote. In reality, the moment you near the polls, you may lose your life.\n\nThis is the bloody gulf between "rights on paper" and "stripped in reality." I sat in the Senate, clutching those solemn amendments, and could not stop a Black man a thousand miles away from being beaten to death for wanting to vote.\n\nThis old trick was played six centuries before. In England\'s Magna Carta of 1215, Clause 39 wrote that "no free man" may be seized arbitrarily, yet "free man" then really counted only the nobles; the serfs at the bottom were not in its protection at all. Universal wording, written for a small few. (Run the magna-carta topic and you will know this old pattern.)\n\nA right written on paper, and whether it can protect the lowest person of all, have always been two different things.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens + cross-Topic — Revels 1871 短暂离开 + 亲眼看纸上权利被现实抽走 + 14th/15th 写黑人投票权+平等保护 vs 南方黑人投票被打/登记房子被烧/组织者私刑 + 「纸面权利 vs 现实剥夺」血淋淋鸿沟 + Revels 攥修正案拦不住千里外黑人因投票被打死 + 对位 Magna Carta Clause 39「任何自由人」实际只算贵族 (跨 Topic 锚) + 「权利写在纸上 vs 能否保护到最底层是两件事」',
      engagementHook: '法律说黑人有权投票，可现实里一走近投票站就可能丢命。我手攥着修正案，却拦不住千里外一个黑人因为想投票而被打死。六百年前大宪章也是：写「任何自由人」，只算贵族。一句权利写在纸上，和它能保护到最底层那个人，是同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我离开参议院后，回密西西比办教育——我去当了一所黑人大学的校长。\n\n你也许会问：你都做到参议员了，怎么又跑去管一所学校？\n\n因为我越来越明白一件事：政治上的高位，是借来的，随时会被收回。今天密西西比能选一个黑人进参议院，明天等白人旧势力夺回州政府，这扇门「啪」一下就关上了。\n\n可教育不一样。一个黑人孩子学会了认字、算账、读法律，这本事，没人能从他脑子里抢走。位子会丢，知识不会。\n\n所以我把后半辈子，押在了「让黑人识字、受教育」这件慢功夫上。我赌的是：就算这一代的政治权利被夺回去，只要黑人一代代受了教育，总有一天，他们能凭自己的力量，把权利重新拿回来。\n\n这是一个温和派最后的信念：当短期的果实被抢走，你就去种长期的根。\n\n可这条慢路，要等多久才能开花？我没能活着看到。',
        en: 'After I left the Senate I went back to Mississippi to work in education; I became the president of a college for Black students.\n\nYou might ask: you had made it to senator, why go off to run a school?\n\nBecause I came to understand one thing more and more clearly: a high political post is borrowed, and can be taken back at any time. Today Mississippi could send a Black man to the Senate; tomorrow, when the old white power retook the state government, that door would slam shut.\n\nBut education is different. A Black child who learns to read, to keep accounts, to read the law, that skill no one can seize from his mind. Posts are lost; knowledge is not.\n\nSo I staked the second half of my life on the slow work of "letting Black people read and be educated." My bet was this: even if this generation\'s political rights were taken back, so long as Black people were educated generation after generation, one day they could, by their own strength, take their rights back again.\n\nThis is a moderate\'s last conviction: when the short-term fruit is seized, you go and plant the long-term root.\n\nBut this slow road, how long before it blooms? I did not live to see it.',
      },
      deliverGoal: 'N7 story — Revels 离参议院回密西西比当黑人大学校长 + 为何弃高位管学校 (政治高位是借来的随时被收回/白人旧势力夺回州政府门啪关上) + 教育不一样 (认字算账读法律没人能从脑子抢走/位子会丢知识不会) + 押后半辈子在让黑人受教育慢功夫 + 赌就算这代权利被夺只要代代受教育总能重新拿回 + 「短期果实被抢就种长期的根」+ 没活着看到开花',
      engagementHook: '我做到了参议员，却跑去当一所学校的校长。因为我看明白：位子会丢，但学进脑子里的知识不会。「当短期的果实被抢走，就去种长期的根」——你觉得这是清醒，还是认命？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我必须诚实地告诉你：我那条温和路线，留下了一身的争议，连我自己都没法说它全对。\n\n1875 年，密西西比的局势已经很坏。白人旧势力用暴力和舞弊，正在一步步夺回州政府。就在这种时候，我做了一件让很多同胞寒心的事：我公开批评了当时主政的共和党，说他们腐败、施政不当。\n\n我的本意，是想让政治回到「干净、讲道理」的轨道上。可我没料到，我这番话，被白人旧势力拿去当了武器——你看，连黑人参议员都说我们这边腐败。\n\n结果呢？那一年的选举，白人旧势力靠暴力加上我这种「自己人拆台」，重新拿下了密西西比。黑人刚争来的政治权利，开始崩盘。\n\n我到死都在想这个问题：我那么坚持「讲道理、对事不对人」，是不是恰恰在最不能讲道理的时刻，帮了想灭掉我们的人一把？\n\n一个调停者最痛的地方，也许就在这儿：你以为你在维护原则，可在你脚下，你想保护的人，正一个个倒下去。',
        en: 'I must be honest with you: that moderate road of mine left a tangle of controversy behind, and even I cannot say it was wholly right.\n\nBy 1875 the situation in Mississippi was already bad. The old white power, with violence and fraud, was retaking the state government step by step. And in such a time I did a thing that chilled many of my own people: I publicly criticized the Republicans then in charge, calling them corrupt and badly governing.\n\nMy intent was to bring politics back onto a "clean and reasonable" track. But I did not foresee that these words of mine would be taken up by the old white power as a weapon: see, even a Black senator says their own side is corrupt.\n\nThe result? In that year\'s election, the old white power, with violence and with this kind of "one of their own pulling the house down," retook Mississippi. The political rights Black people had just won began to collapse.\n\nUntil my death I kept turning over this question: did my insistence on "reasoning, judging the deed not the person," at the very moment when reason was impossible, lend a hand to the people who meant to wipe us out?\n\nThe sharpest pain of a mediator may lie just here: you think you are upholding a principle, while beneath your feet, the people you mean to protect are falling, one by one.',
      },
      deliverGoal: 'N8 story — anti-fab? (documented controversy) Revels 温和路线留争议 + 1875 密西西比局势坏白人旧势力暴力舞弊夺回州政府 + Revels 公开批评主政共和党腐败 (本意让政治干净) + 被白人旧势力拿去当武器 (连黑人参议员都说自己人腐败) + 那年选举白人旧势力靠暴力+自己人拆台重夺密西西比黑人权利崩盘 + Revels 到死自问坚持讲道理是否帮了想灭掉我们的人 + 「调停者最痛: 你以为维护原则脚下你想保护的人在倒」',
      engagementHook: '我公开批评自己这边腐败，本想让政治变干净，结果这话被敌人当成了灭掉我们的武器。我到死都在问自己：坚持「讲道理」，是不是恰好在最不能讲道理的时刻害了同胞？你觉得，原则和现实冲突时，该让哪一个？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我不是一个人在战斗，也不是第一个尝到这种苦的人。\n\n比我更早、更有名的，是 Frederick Douglass（弗雷德里克·道格拉斯）。他从奴隶逃出来，靠自己学会读写，成了那个时代最有力量的黑人声音。他比我激烈，也比我坚持得久。可你去看他这一生：一次次满怀希望，一次次被现实泼冷水。废奴成功了，他以为天亮了；重建推进了，他以为路通了；然后 1877 年军队一撤，一切又被打回原形。（你跑过道格拉斯那段历史，会认得这条反复受挫的母题。）\n\n这就是那个时代黑人政治领袖共同的命运：他们一次次爬到高处，又一次次被反扑的潮水拍回谷底。\n\n我是参议员，Douglass 是演说家，我们走的路不一样——一个温和，一个激烈。可结局有相似的地方：我们都没能在自己活着的时候，看见那些写在纸上的权利，真正在每一个黑人身上兑现。\n\n我们这一代人做的，更像是替后人，把火种小心地护在手里，没让它彻底熄灭。',
        en: 'I did not fight alone, nor was I the first to taste this bitterness.\n\nEarlier and more famous than I was Frederick Douglass. He escaped from slavery, taught himself to read and write, and became the most powerful Black voice of the age. He was fiercer than I, and he held on longer. But look over his whole life: again and again full of hope, again and again doused with cold water by reality. Abolition succeeded and he thought dawn had come; Reconstruction advanced and he thought the road was open; then in 1877 the troops withdrew and everything was knocked back to where it began. (Run the Douglass topic and you will recognize this motif of repeated defeat.)\n\nThis was the shared fate of Black political leaders of that age: again and again they climbed to a height, and again and again the surging tide of backlash slapped them down into the valley.\n\nI was a senator, Douglass was an orator; we walked different roads, one moderate, one fierce. But our endings had something alike: neither of us, in our own lifetimes, saw the rights written on paper truly cashed in the life of every Black person.\n\nWhat our generation did was more like cupping the spark carefully in our hands for those who came after, so that it would not go fully out.',
      },
      deliverGoal: 'N9 story — Revels 不是一个人/不是第一个尝苦 + Frederick Douglass (从奴隶逃出/自学读写/最有力量黑人声音/比 Revels 激烈坚持久) + Douglass 一次次满怀希望被现实泼冷水 (废奴/重建/1877 军队撤打回原形) + 跨 Topic 锚 Douglass 反复受挫母题 (A4) + 那时代黑人领袖共同命运 (爬到高处被反扑拍回谷底) + Revels 温和 vs Douglass 激烈但结局相似 (活着没看见纸上权利兑现) + 「这代人替后人护住火种没让熄灭」',
      engagementHook: '比我更激烈、坚持更久的 Douglass，一辈子也是一次次满怀希望、一次次被现实泼冷水。我们走的路不同，结局却像：都没在活着时看见纸上的权利真正兑现。当你知道自己这辈子等不到结果，还值得去做吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n10',
      type: 'narrative',
      phase: 'reflection',
      content: {
        cn: '把镜头拉到 1877 年和它之后，看我护着的那点火种，遇上了什么。\n\n1877 年，北方和南方在桌子底下做了一笔交易（史称 1877 年妥协）：北方把最后留在南方的联邦军队撤走，重建就此结束。保护黑人权利的最后一道屏障，没了。\n\n之后几十年，南方一点一点建起一套羞辱、隔离黑人的制度，叫 Jim Crow（吉姆·克劳）：黑人和白人不能同校、不能同车、不能用同一个饮水台；想投票？设一堆识字测验、人头税，专门把黑人卡在门外。\n\n第十五条修正案明明写着「不得因肤色剥夺投票权」。可南方各州想出一百种「不提肤色」的办法，照样把黑人从投票站赶走。\n\n你看，这正是我一生都在对抗、却没能挡住的那个老问题：纸上写得再平等，没有人愿意为它撑腰，它就只是一张纸。\n\n我 1901 年去世。我没能看见我护的火种重新烧起来。它真正烧起来，要等到差不多六十年后——那时候，人们终于回头，把我们这代人写下、却被按住的那几条修正案，重新激活。但那是后人的故事了。',
        en: 'Pull the lens to 1877 and after, to see what the small spark I guarded ran into.\n\nIn 1877 North and South struck a deal under the table (known as the Compromise of 1877): the North withdrew the last federal troops still in the South, and Reconstruction ended. The last barrier protecting Black people\'s rights was gone.\n\nOver the decades that followed, the South built up, bit by bit, a system of humiliating and segregating Black people, called Jim Crow: Black and white could not share a school, share a car, share the same drinking fountain; want to vote? Set up a heap of literacy tests and poll taxes, made to bar Black people at the door.\n\nThe Fifteenth Amendment said plainly, "the vote shall not be denied on account of color." Yet the southern states devised a hundred ways that "did not mention color" and drove Black people from the polls all the same.\n\nYou see, this is exactly the old problem I fought all my life and could not block: however equally a thing is written on paper, if no one will stand behind it, it is only paper.\n\nI died in 1901. I did not see the spark I guarded blaze up again. Its true blazing would wait nearly sixty years, when at last people turned back and reactivated those few amendments our generation had written and had held down. But that is a story of those who came after.',
      },
      deliverGoal: 'N10 zoom-out + topic connection (倒数第三) — 1877 妥协北方撤走最后联邦军队重建结束/最后屏障没了 + Jim Crow (黑人白人不同校/不同车/不同饮水台 + 投票设识字测验人头税卡黑人) + 15th 明写不得因肤色剥夺投票权 vs 南方一百种「不提肤色」办法赶走黑人 + Revels 一生对抗没挡住的老问题 (没人撑腰再平等也只是一张纸) + Revels 1901 死没看火种重燃 + 真正烧起来等近六十年后重新激活修正案 (cross-topic 到 Civil Rights) + 「那是后人的故事」',
      engagementHook: '15 修正案明写「不得因肤色剥夺投票权」，可南方想出一百种「不提肤色」的办法照样赶走黑人。这正是我一生对抗却没挡住的：没人为它撑腰，再平等的纸也只是一张纸。你觉得，一条好规则被绕过，是规则写得不够死，还是另有原因？',
      expectsRealAnswer: false,
    },
    {
      id: 'hr-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是那个把门撞开的人。我是第一个坐进参议院的黑人，我用自己的一举一动证明了——黑人完全配得上这个国家最高的位子。我没有靠喊打喊杀，我靠规则、靠教育、靠为同胞争来一所学校一份工作，给后人留下了一个「这条路走得通」的活证据。撞门的人会倒下，但门一旦被撞开过一次，就永远关不严了。\n\n另一种说法：我是那个在最该战斗的时候选择讲道理的人。我太相信「对方愿意讲理」，太想证明黑人不报复、很体面，结果我替敌人说话、批评自己人，恰恰在白人旧势力反扑最凶的时候，松了我们这边的劲。温和，在一个只认拳头的时代，可能是一种昂贵的天真。\n\n这两边不是「优点加缺点」。是同一种性格的两面——那份「凡事讲道理、不愿树敌」的克制，既让我撞开了门，也让我在该筑墙的时候，没筑起墙。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the man who broke the door open. I was the first Black person to sit in the Senate, and by my every move I proved that Black people were fully fit for the highest seat in the country. I did not rely on cries for blood; I relied on rules, on education, on winning my people a school and a job, and left those who came after a living proof that "this road can be walked." The one who breaks the door may fall, but once a door has been broken open even once, it can never be shut tight again.\n\nThe other view: I was the man who chose to reason at the very moment he should have fought. I trusted too much in "the other side being willing to reason," wanted too badly to prove that Black people would not take revenge and were dignified, and so I spoke for the enemy and criticized my own, slackening our side\'s strength at the very moment the old white power surged back hardest. Moderation, in an age that knows only the fist, may be a costly naivety.\n\nThese are not "strengths and weaknesses." They are two faces of one character. That restraint of "reasoning in all things, unwilling to make enemies" let me break the door open, and it also kept me from building a wall when a wall was what was needed.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis (倒数第二) — 一种说法 (把门撞开的人/首位黑人参议员/证明黑人配最高位子/靠规则教育争学校工作/留下这条路走得通的活证据/门撞开过一次就关不严) / 另一种说法 (最该战斗时选讲道理/太信对方愿讲理/替敌人说话批评自己人/反扑最凶时松了劲/温和在只认拳头的时代是昂贵天真) / 同一种性格两面 (克制既让撞开门也让该筑墙时没筑墙) / 想 30 秒',
      engagementHook: '把门撞开的人，和最该战斗时选择讲道理的人——是同一个我，同一种性格的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'hr-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，第一个撞开参议院大门的黑人，一个在最乱的年代坚持讲道理的人，一个把后半辈子押在办教育上的校长，你会怎么评价这样一个人？\n\n他撞开了一扇没人撞开过的门，也可能在该筑墙的时候太相信讲理。他护住了一点火种，却没能在活着时看它重燃。把这些放在同一个天平上，你会怎么称他这一生？\n\n再想一步。今天你身边，有没有这样的时刻：你想为一件对的事出头，可你不确定该「讲道理、不树敌」，还是该「硬碰硬、不退让」？是温和地周旋，还是强硬地对抗？\n\n你会怎么判断，什么时候该当那个讲道理的人，什么时候，讲道理反而会害了你想保护的人？',
        en: 'Having walked my whole life, the first Black man to break open the Senate door, a man who held to reason in the most chaotic of ages, a college president who staked the second half of his life on education, how would you judge such a man?\n\nHe broke open a door no one had broken, and he may also have trusted reason too much when a wall was needed. He guarded a small spark, yet did not see it blaze up in his lifetime. Put these on the same scale. How would you weigh his whole life?\n\nThen take one more step. In your own life today, is there ever such a moment: you want to stand up for something right, but you are not sure whether to "reason and make no enemies," or to "meet force with force and not back down"? To maneuver gently, or to confront hard?\n\nHow will you judge when to be the one who reasons, and when reasoning will instead harm the very people you mean to protect?',
      },
      deliverGoal: 'N12 close (末节 evaluation + transfer) — 评价人 (首个撞开参议院门的黑人/最乱年代讲道理/押后半辈子办教育的校长 → 撞开门 vs 该筑墙时太信讲理/护火种没在活着时看它重燃/同一天平) + transfer「今天你想为对的事出头时该讲道理不树敌还是硬碰硬不退让」+ 你怎么判断何时该讲道理何时讲道理反而害了你想保护的人',
      engagementHook: '我撞开了门，也可能在该筑墙时太相信讲理。你会怎么评价这样一个人？今天你想为一件对的事出头时，你会怎么判断——什么时候该讲道理，什么时候讲道理反而会害了你想保护的人？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Freedman Sharecropper (receiving-end, composite) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var freedmanSharecropperLens = {
  id: 'freedman-sharecropper-receiving-end',
  name: 'A Freedman Sharecropper',
  nameCn: '一个获自由的黑人佃农',
  role: 'receiving-end',
  perspectiveTag: 'born-enslaved-freed-then-bound',
  icon: '🌾',
  description: {
    cn: '一个合成的人物，代表千千万万真实存在、却没留下名字的南方黑人（这一遍把那段经历集中在一个人身上，让你看得清）。他大约 1840 年生在南方一座种植园，生下来就是别人的财产。1865 年内战结束，他第一次成了自由人；1867 年，他平生第一次握住一张选票。可十年之后，他既没有自己的土地，又欠了一身永远还不完的债，孩子重新被挡在投票站外。这一遍，你从这部宪法本该保护、最后却保护不到的人这边，看自由怎么来，又怎么被一寸一寸收回去。',
    en: 'A composite person, standing for the thousands upon thousands of real southern Black people who left no name behind (this pass gathers that experience into one person so you can see it clearly). He was born around 1840 on a southern plantation, born as another man\'s property. In 1865 the war ended and for the first time he was a free man; in 1867 he held a ballot in his hand for the first time in his life. Yet ten years later he owned no land of his own, owed a debt he could never finish paying, and his children were barred from the polls once more. This pass lets you see, from the side of the people that Constitution should have protected and in the end could not, how freedom came, and how it was pulled back inch by inch.',
  },
  storyboard: [
    {
      id: 'fs-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1865 年春天，有人骑着马，进了我们干活的棉花地，大声念了一段话。我听不太懂那些字，但有一个意思，听懂了：你们，自由了。\n\n那一刻，地里一片安静。我手里还攥着没摘完的棉花。自由？我活了二十多年，生下来就是 Master（主人）账本上的一笔财产，跟骡子记在一起。我从没想过，「自由」这两个字，有一天会落到我头上。\n\n我没有名字——不是没有，是没人当回事。在账本上，我就是「一个壮年男工」。\n\n这一遍，没有我的真名，因为像我这样的人,有几百万,绝大多数连名字都没留下来。这一遍，把他们的一生，集中到一个人身上，让你看清楚。\n\n你站在我这里，看那部全国的大宪法，看它怎么说要保护我，又怎么，最后一个都没保护到。',
        en: 'In the spring of 1865, a man rode his horse into the cotton field where we worked and read out a passage aloud. I could not follow most of the words, but one meaning I caught: you are free.\n\nIn that moment the field went silent. I still held unpicked cotton in my hand. Free? I had lived over twenty years, born as a line of property in Master\'s ledger, recorded alongside the mules. I had never imagined that the word "free" would one day fall on me.\n\nI had no name, not none, but none anyone took seriously. In the ledger I was "one able-bodied male hand."\n\nThis pass carries no real name of mine, because people like me numbered in the millions, and the vast majority left no name at all. This pass gathers their lives into one person, so you can see clearly.\n\nYou stand where I stand and look at that great national Constitution: how it said it would protect me, and how, in the end, it protected not one of us.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 1865 春棉花地有人骑马念话「你们自由了」+ 地里安静手攥棉花 + 活二十多年生下来是 Master 账本财产跟骡子记一起从没想过自由落头上 + 无名字账本上是「一个壮年男工」+ composite 声明 (像他这样几百万人多数没留下名字/这一遍集中到一个人) + 这一遍从宪法说要保护却没保护到的人看',
      engagementHook: '有人骑马进棉花地，念了一段我听不太懂的话，但有个意思我听懂了：你们自由了。我活了二十多年，生下来就是账本上的财产。你能想象「自由」这两个字，第一次落到自己头上是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说自由那天之后，我面对的是什么，你才懂后来的事。\n\n我自由了。可我什么都没有。\n\n我不识字。我没有一块自己的地。我没有钱，没有工具，没有牲口。我手里有的，只有一身力气，和二十多年只会干一件事——种棉花。\n\n我脚下站着的，还是 Master 那片地。门外的世界很大，可一个不识字、没有钱、没有地的人，能走到哪儿去？\n\n北方那边，有人成立了一个机构，叫 Freedmen\'s Bureau（自由民局），帮我们这些刚获自由的人——办学校教我们认字，帮我们跟雇主签合同，分发一点口粮。那是我头一回，感觉到这个国家好像真的想拉我们一把。\n\n我心里那时候有个朴素的盼头：给我一小块地吧。哪怕很小。有了自己的地，我就能靠自己的双手，真正站起来做个人。\n\n这个盼头，后来叫「四十英亩地和一头骡子」。它差一点就成真了。',
        en: 'First, what I faced after the day of freedom, so you understand what came later.\n\nI was free. But I had nothing.\n\nI could not read. I had no land of my own. I had no money, no tools, no animals. All I held was the strength of my body and twenty-odd years of knowing how to do one thing, grow cotton.\n\nUnder my feet was still Master\'s land. The world beyond the gate was vast, but where could a man who could not read, had no money, and had no land actually go?\n\nIn the North, people set up an agency called the Freedmen\'s Bureau to help those of us just freed, founding schools to teach us to read, helping us sign contracts with employers, handing out a little food. It was the first time I felt this country might truly mean to lend us a hand.\n\nBack then I held one plain hope in my heart: give me a small plot of land. However small. With land of my own I could, by my own two hands, truly stand up and be a person.\n\nThis hope later had a name: "forty acres and a mule." It very nearly came true.',
      },
      deliverGoal: 'N2 setup — 自由后什么都没有 (不识字/没地/没钱没工具没牲口/只有力气和会种棉花) + 脚下还是 Master 的地/不识字没钱没地走不到哪 + Freedmen\'s Bureau 自由民局帮忙 (办学校教认字/帮签合同/发口粮) 头一回感觉国家想拉一把 + 朴素盼头给一小块地靠双手站起来做个人 + 「四十英亩地和一头骡子」差点成真',
      engagementHook: '我自由了，可我不识字、没地、没钱、没工具。脚下还是主人的地。「自由」如果什么都没给你，只是放你一个人站在大世界里——这还算自由吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '「四十英亩地和一头骡子」，这话不是空穴来风。\n\n内战快打完时，北方一位将军真的下过命令：把南方一些没收来的土地，分给刚获自由的黑人家庭，每家大约四十英亩，有的还配一头骡子。一时间，成千上万的黑人开始在自己分到的地上种庄稼。\n\n你能想象那是什么感觉吗？昨天你还是别人地里的一头「会干活的牲口」，今天，你脚下这块地，是你自己的。你种出来的东西，归你自己。\n\n那大概是我们离「真正的自由」最近的一次。\n\n可这事，没成。\n\n林肯死后，接任的总统约翰逊（Andrew Johnson）大笔一挥，把这些土地，又还给了原来的南方白人地主。我们刚摸到手的地，被收了回去。（他为什么这么做，你换到他那一遍，可以从他自己嘴里听。）\n\n土地一收回，我的命运基本就定了：我没有地，可我得吃饭。我只能回到那块我曾经被奴役的土地上，去给从前的主人，种地。',
        en: '"Forty acres and a mule" was no idle phrase.\n\nNear the war\'s end, a Northern general truly issued an order: take some confiscated southern land and divide it among newly freed Black families, about forty acres each, some with a mule besides. For a time, tens of thousands of Black people began to grow crops on land of their own.\n\nCan you imagine the feeling? Yesterday you were a "working animal" on another man\'s land; today the ground beneath your feet is yours. What you grow is yours.\n\nThat was perhaps the closest we ever came to "true freedom."\n\nBut it did not hold.\n\nAfter Lincoln died, the president who took over, Andrew Johnson, with a stroke of his pen returned this land to the original southern white owners. The land we had just touched was taken back. (Why he did this, switch to his pass and you can hear it from his own mouth.)\n\nOnce the land was taken back, my fate was all but sealed: I had no land, but I had to eat. I could only return to the very ground where I had been enslaved, and farm it for my former master.',
      },
      deliverGoal: 'N3 setup — 「四十英亩地和一头骡子」北方将军下命令分没收土地给黑人家庭 (每家约 40 英亩有的配骡子) + 成千上万黑人在自己地上种庄稼 + 离真正自由最近的一次 (昨天是会干活的牲口今天地是自己的) + 但没成 + Andrew Johnson 大笔一挥把土地还给南方白人地主 (桥到 Johnson lens) + 土地收回命运定 (没地得吃饭只能回被奴役的土地给从前主人种地)',
      engagementHook: '我们差一点就有了自己的地——昨天还是别人地里的牲口，今天脚下的地是自己的。可总统大笔一挥，又把地还给了原来的主人。当「自由」给了你又收回，比从来没给过，是更好还是更残忍？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1867 年，一件你做梦都不敢想的事发生了：他们说，你可以投票了。\n\n国会通过了新法律，宪法加了新修正案。你，一个三年前还是别人财产的黑人男人，现在是这个国家的公民，有投票权。\n\n投票那天，我现在都记得。我和地里一起干活的弟兄们，穿上最干净的衣服，走了很远的路，到镇上去。一路上，路边站着白人，盯着我们看，眼神像刀子。我们心里发慌，但谁也没回头。\n\n我不识字，不知道选票上写的是谁。可有人帮我念，我记住了那个为我们说话的人的名字。我把选票投进去的那一下，手是抖的。\n\n那一刻，我第一次觉得，我不再是一头牲口。我是一个，能决定这个国家往哪儿走的——人。\n\n可你心里得清楚一件事：你脚下没有地，你欠着雇你的人钱，你不识字。你这张选票，到底有多重？还是说，他们随时,能用别的办法，把它从你手里夺走？',
        en: 'Now you are me.\n\nIn 1867, a thing you would never have dared to dream happened: they said you could vote.\n\nCongress passed new laws, the Constitution added new amendments, and you, a Black man who three years before was another man\'s property, were now a citizen of this country with the right to vote.\n\nThe day of the vote, I remember it still. My brothers from the field and I put on our cleanest clothes and walked a long road into town. Along the way, white men stood by the road and stared at us, their eyes like knives. Our hearts pounded, but none of us turned back.\n\nI could not read and did not know whose names were on the ballot. But someone read them to me, and I remembered the name of the man who spoke for us. The instant I dropped my ballot in, my hand was shaking.\n\nIn that moment, for the first time, I felt I was no longer a working animal. I was a person who could help decide where this country would go.\n\nBut you must be clear about one thing: you have no land under your feet, you owe money to the man who employs you, and you cannot read. How much does this ballot of yours truly weigh? Or could they, at any time, find another way to take it from your hand?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1867 做梦不敢想的事 (你可以投票了) + 国会新法律宪法新修正案 + 三年前还是财产的黑人现在是公民有投票权 + 投票那天穿最干净衣服走很远路进镇/路边白人眼神像刀子但没回头 + 不识字有人帮念记住为我们说话的人名字/投进去手抖 + 第一次觉得不再是牲口是能决定国家往哪走的人 + 自我拷问: 没地欠债不识字这张选票多重/他们随时能用别的办法夺走吗',
      engagementHook: '投票那天，我穿上最干净的衣服，走很远的路，路边白人的眼神像刀子，可我没回头。把票投进去那一下，我手是抖的——我第一次觉得自己是个人，不是牲口。可我没地、欠债、不识字，你说，这张选票到底有多重？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '投票，是我一生的高光。可日子要怎么过下去，是另一回事。\n\n没有自己的地，我只能去给白人地主种地。我们之间定了一种新规矩，叫 sharecropping（分成租佃）：地主出地，我出力气种棉花，收成时,我们按比例分。听起来挺公平，对吧？\n\n可里头有个陷阱。我什么都没有，开春种地的种子、工具、还有一家人吃饭，全得先向地主赊。地主开一间店，种子、粮食、布，都从他那儿赊，记在一个本子上——而那个本子，是他写的，我不识字，看不懂。\n\n到了秋天，棉花收上来，卖了钱。地主一算账：你赊的种子、粮食、利息，加起来，比你这季棉花分到的钱还多。\n\n结果是：忙活一整年，我不但没攒下一分钱，反而欠了地主的债。\n\n那怎么办？欠了债不能走啊。只能留下来，明年接着种，指望明年能还清。\n\n可明年，账还是那样算。我又欠得更多了。',
        en: 'The vote was the high point of my life. But how to go on living was another matter.\n\nWith no land of my own, I could only farm for a white landowner. Between us a new arrangement was set, called sharecropping: the owner provides the land, I provide the labor to grow cotton, and at harvest we divide the crop by a share. Sounds fair, doesn\'t it?\n\nBut there was a trap inside. I had nothing, so the seed and tools to plant in spring, and food for my family, all had to be borrowed from the owner first. The owner ran a store; seed, grain, cloth, all charged there, written in a book. And that book was his writing; I could not read and could not check it.\n\nWhen autumn came, the cotton was brought in and sold for money. The owner did his sums: the seed, the grain, the interest you charged, added up, came to more than your share of this season\'s cotton.\n\nThe result: I had toiled a whole year and not only saved not a cent, but owed the owner a debt.\n\nWhat then? You cannot leave owing a debt. You can only stay, plant again next year, hoping next year you can clear it.\n\nBut next year the sums came out the same. And I owed even more.',
      },
      deliverGoal: 'N5 story — 投票是高光但日子另一回事 + 没地只能给白人地主种地 + sharecropping 分成租佃 (地主出地我出力种棉花收成按比例分/听起来公平) + 陷阱 (什么都没有/种子工具吃饭全向地主赊/地主开店记本子他写的我不识字看不懂) + 秋天卖棉花地主一算赊的+利息比分到的钱还多 + 忙一年没攒钱反欠债 + 欠债不能走只能留下明年接着种指望还清 + 明年账还那样欠更多',
      engagementHook: '地主出地，我出力，收成按比例分——听起来挺公平。可种子、吃饭全得向他赊，账本是他写的、我看不懂。一年下来，我不但没赚，反而欠了债。这种「公平」，陷阱在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得让你看清楚，我手里到底攥着什么，又是怎么一样样被掏空的。\n\n那几条全国的大修正案，白纸黑字写着我的权利：第十四条说，每个公民都受「法律的平等保护」；第十五条说，不能因为我是黑人，就剥夺我的投票权。\n\n这些字，是真的。是为我写的。\n\n可你看我手里这同一份权利，落到现实里变成了什么——\n\n说我「平等」？我欠着永远还不完的债，被一纸账本拴在地主的地上，挪不了窝。说我「有投票权」？我那张票，第一次投得手都在抖；可没几年，他们就想出各种办法，让我再也走不进投票站。\n\n同一份修正案，在写它的人那里，是「我们给了黑人平等和选票」；在我这里，是「投票的权利」一步步变成了「还不完的债」和「不敢再去的投票站」。\n\n这个把戏，六百多年前就有人玩过。1215 年英国的 Magna Carta（大宪章）第 39 条，写「任何自由人」不得被随意拘押——可那时候「自由人」实际上只算贵族，像我这样在最底层种地的人，根本不算数。话说得普世，护的却是上头那一小撮。（你跑过大宪章那段历史就懂这个老套路。）\n\n一句权利写得多漂亮，跟它有没有真的护到我，从来就是两件事。',
        en: 'I must let you see clearly what I actually held in my hands, and how it was hollowed out, one piece at a time.\n\nThose great national amendments wrote my rights in black and white: the Fourteenth said every citizen has "the equal protection of the laws"; the Fifteenth said my vote could not be denied because I was Black.\n\nThese words were real. They were written for me.\n\nBut look at what this same right became when it landed in reality.\n\nSay I was "equal"? I owed a debt I could never finish paying, tied to the owner\'s land by a sheet of accounts, unable to move. Say I "had the vote"? My ballot, the first time, I cast with a shaking hand; yet within a few years they devised ways to keep me from ever walking into the polls again.\n\nThe same amendment, to the people who wrote it, was "we gave Black people equality and the vote"; to me, it was "the right to vote" turning, step by step, into "a debt I cannot finish paying" and "polls I dare not go to."\n\nThis trick was played six centuries before. In England\'s Magna Carta of 1215, Clause 39 wrote that "no free man" may be seized arbitrarily, yet "free man" then really counted only the nobles; a man farming at the very bottom like me would not have counted at all. The words spoke of all, but what they protected was the small few at the top. (Run the magna-carta topic and you will know this old pattern.)\n\nHow finely a right is written, and whether it truly protected me, have always been two different things.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens + cross-Topic — 14th 平等保护/15th 不得因肤色剥夺投票权 (白纸黑字为我写的真权利) vs 现实掏空 (说平等却欠还不完债被账本拴在地上挪不了窝/说有投票权却没几年被各种办法挡在投票站外) + 同一份修正案两个方向 (写它的人: 给了平等和选票 / 我: 投票权变成还不完的债和不敢去的投票站) + 对位 Magna Carta Clause 39「任何自由人」只算贵族底层不算数 (跨 Topic 锚) + 「写得漂亮 vs 有没有护到我是两件事」',
      engagementHook: '修正案白纸黑字写着我「平等」、有「投票权」，是真的，是为我写的。可在现实里，「平等」变成了还不完的债，「投票权」变成了不敢再去的投票站。六百年前的大宪章也是：写「任何自由人」，只算贵族。一句权利写得多漂亮，和它有没有真的护到我，是同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能会想：欠了债，那就硬走呗，大不了去别的地方重新开始。\n\n我跟你讲为什么走不了。\n\n第一，债。我欠着地主的钱。法律帮着地主：你欠债不还，就别想离开这片地。这一条，把我牢牢钉在原地。\n\n第二，那本账。账是地主记的，我不识字。他想让我欠多少，我就欠多少。我连「我到底欠了多少」都没法自己算清，更别说证明他在骗我。\n\n第三，去哪儿？整个南方，对像我这样的黑人，都是一样的规矩。我换一个地主，换一片地，等着我的是同一套陷阱。\n\n你发现了吗？我是个「自由人」。法律上，我不再是奴隶，没有人能买卖我。\n\n可我离不开这片地，干的还是从前一样的活，住的还是从前一样的窝棚，吃的还是赊来的粮——我的身体，被一笔永远还不清的债，拴在了原来那个主人的土地上。\n\n锁链换了样子，从铁的，变成了纸上的债。可它一样，让我走不了。',
        en: 'You might think: if you owe a debt, then just leave, start over somewhere else.\n\nLet me tell you why I could not leave.\n\nFirst, the debt. I owed the owner money. The law sided with the owner: owe a debt unpaid, and do not think of leaving this land. That clause nailed me in place.\n\nSecond, the book. The accounts were the owner\'s, and I could not read. He could make me owe as much as he liked. I could not even reckon for myself how much I truly owed, let alone prove he was cheating me.\n\nThird, go where? Across the whole South, the rule for a Black man like me was the same. Change one owner, change one plot of land, and the same trap waited.\n\nDo you see it? I was a "free man." In law I was no longer a slave; no one could buy or sell me.\n\nYet I could not leave this land, did the same work as before, lived in the same shack as before, ate grain bought on credit. My body was tied, by a debt that could never be cleared, to the land of the very same master.\n\nThe chain had changed its shape, from iron to a debt on paper. But it kept me, all the same, from leaving.',
      },
      deliverGoal: 'N7 story — 为什么走不了 (债: 欠钱法律帮地主不还别想离开钉在原地 / 账: 地主记我不识字他想让我欠多少就多少连欠多少都算不清 / 去哪: 整个南方一样规矩换地主换地同套陷阱) + 我是自由人法律上不再是奴隶没人能买卖 + 但离不开地干一样的活住一样窝棚吃赊来的粮/身体被还不清的债拴在原来主人土地上 + 「锁链从铁的变成纸上的债一样让我走不了」',
      engagementHook: '我是「自由人」，法律上没人能买卖我了。可我离不开这片地，干一样的活，住一样的窝棚，被一笔永远还不清的债拴住。锁链从铁的，变成了纸上的债。这样的「自由」，和奴役差在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这种「被债拴在地上」的处境，其实在历史上一遍遍出现过——不只我，不只这里。\n\n五百多年前，欧洲闹了一场可怕的瘟疫，叫 Black Death（黑死病），一下子死了好多人，干活的人一下子变得很少。你猜活下来的地主们怎么做？他们怕农民跑掉、怕农民要高工钱，就立法把农民死死绑在土地上，不准走。瘟疫之后，本该松动的人身束缚，反而被收得更紧。（你跑过黑死病那段历史，会认得这个把人绑在土地上的套路。）\n\n你看，名字不一样——那边叫「绑在土地上的农民」，我这边叫「分成租佃的佃农」。可道理是一样的：上头的人需要你的力气，又怕你跑掉，于是想出一套规矩，让你「名义上自由」，「实际上走不了」。\n\n这让我心里堵得慌，但也让我想明白一件事：把人拴在地上，从来不是哪一个坏人一时起的坏心。它是一套制度，一套上头的人为了留住你的劳力，反复发明出来的办法。\n\n它换了又换，可总有人，要被拴在最底下。这一次，轮到了我。',
        en: 'My plight, "tied to the land by debt," has in fact appeared again and again in history, not only me, not only here.\n\nMore than five centuries ago, Europe was struck by a terrible plague called the Black Death; a great many died at once, and laborers suddenly grew scarce. Guess what the surviving landowners did? Fearing the peasants would flee or demand high wages, they passed laws binding the peasants tightly to the land, forbidding them to leave. After the plague, the bondage that should have loosened was instead drawn tighter. (Run the black-death topic and you will recognize this pattern of tying people to the land.)\n\nYou see, the names differ, theirs "peasants bound to the land," mine "sharecroppers." But the reasoning is the same: those at the top need your strength and fear you will flee, so they devise a set of rules to make you "free in name" and "unable to leave in fact."\n\nThis fills me with a choking grief, but it also made one thing clear: tying people to the land is never one bad man\'s sudden cruelty. It is a system, a method that those at the top, to keep your labor, invent over and over.\n\nIt changes and changes again, yet there is always someone who must be tied at the very bottom. This time, it fell to me.',
      },
      deliverGoal: 'N8 story cross-Topic anchor — 被债拴在地上历史一遍遍出现 + Black Death 黑死病死好多人干活的人变少/活下来地主怕农民跑怕要高工钱立法把农民绑土地上不准走/瘟疫后本该松动的束缚反收更紧 (跨 Topic 锚 black-death) + 名字不一样道理一样 (绑土地农民 vs 分成佃农: 上头需要你力气又怕你跑→名义自由实际走不了) + 把人拴地上不是坏人一时起意是制度反复发明 + 「换了又换总有人被拴在最底下这次轮到我」',
      engagementHook: '五百年前黑死病后，欧洲地主怕农民跑，立法把他们绑在土地上。名字不同——那边叫农奴，我这边叫佃农——可道理一样：上头要你的力气，又怕你跑。把人拴在地上，是哪个坏人一时起意，还是一套反复被发明出来的制度？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '最后，连我那张投票的纸，也被一点点拿走了。\n\n刚有投票权那几年，去投票就已经很危险——路上有人盯着、有人拦、有人威胁。后来更狠：组织黑人投票的人，半夜被人拖出去打、烧房子、甚至杀掉。光是「想去投票」，就可能把命搭进去。\n\n再后来，他们连枪都不太用了，换了更「干净」的办法。\n\n他们设了一道识字测验——你不识字，就不许投票。我连自己的名字都写不全，这道关，专门为我这样的人设的。他们还设了人头税——投票得先交钱。我连债都还不清，哪来的钱交税去投票？\n\n你注意到没有：这些办法，没有一个字提到「黑人」。第十五条修正案明明写着「不得因肤色剥夺投票权」——他们就不提肤色，改用「识字」「交钱」当门槛。\n\n用一道我跨不过去的门槛，把我合法地，挡在投票站外面。\n\n我那张曾经让我手发抖的选票，就这样，悄无声息地，没了。',
        en: 'In the end, even that paper ballot of mine was taken away, bit by bit.\n\nIn the first years of having the vote, going to the polls was already dangerous, men watching on the road, blocking, threatening. Later it grew crueler: those who organized Black voters were dragged out at night and beaten, their houses burned, some killed. Merely "wanting to vote" could cost your life.\n\nLater still, they hardly used guns anymore; they switched to a "cleaner" method.\n\nThey set up a literacy test, if you cannot read, you cannot vote. I could not even write out my own name in full; this gate was made for people like me. They set up a poll tax, you must pay money before you vote. I could not clear my debt; where would I find money to pay a tax to vote?\n\nDid you notice: not one of these methods mentions "Black people." The Fifteenth Amendment said plainly "the vote shall not be denied on account of color," so they did not mention color and used "literacy" and "money" as the bar instead.\n\nWith a gate I could not cross, they barred me, lawfully, from the polls.\n\nThat ballot of mine, the one that once set my hand shaking, was, just like that, silently, gone.',
      },
      deliverGoal: 'N9 story — 连投票的纸也被拿走 + 刚有投票权去投票已危险 (路上盯/拦/威胁) + 后来更狠 (组织黑人投票的人半夜被拖出去打烧房杀掉/想去投票可能搭命) + 再后来换更干净办法 (识字测验: 不识字不许投/连名字写不全专门为他设 + 人头税: 投票先交钱/债都还不清哪来钱) + 这些办法没一个字提黑人 (15th 明写不得因肤色剥夺/他们不提肤色用识字交钱当门槛) + 用跨不过的门槛合法挡在投票站外 + 「曾让手发抖的选票悄无声息没了」',
      engagementHook: '他们不用枪了，换了更「干净」的办法：识字测验、人头税——没有一个字提「黑人」，可专门挡住像我这样不识字、还不清债的人。一条法律明明写着「不得因肤色剥夺投票权」，却被这样合法地绕开。规则没被违反，结果却被彻底掉包，这算不算更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n10',
      type: 'narrative',
      phase: 'reflection',
      content: {
        cn: '把镜头拉远，看我这一辈子，正好卡在一段历史的两头。\n\n1865 年，我从奴隶变成自由人。1867 年，我第一次投票。那几年，是「自由在往外扩」的高峰——四百万人获得自由，宪法写下平等和投票权，南方甚至选出了黑人议员、黑人参议员。\n\n可到了 1877 年，北方和南方做了一笔交易（史称 1877 年妥协），把保护我们的最后一点联邦军队，从南方撤走了。重建结束了。\n\n军队一走，挡在我和那些旧势力之间的最后一道墙，就塌了。接下来几十年，南方建起一整套羞辱、隔离黑人的制度，叫 Jim Crow（吉姆·克劳）。我的孩子，长在这套制度下：不能跟白人同校、同车，投票站照样进不去。\n\n我这一生，画了一个让人心碎的圆：生为奴隶，中间短暂地做过几年「能投票的自由人」，老了，又回到一种「名义自由、实际被困」的境地。我的孩子，几乎是从我跌回的地方，重新开始。\n\n这就是为什么我说：别信「内战之后一切都向好」这种话。自由,是真的来过。可它来了，又被一只手一只手，按了回去。',
        en: 'Pull the lens back and look over my whole life, caught exactly between the two ends of a piece of history.\n\nIn 1865 I turned from slave to free man. In 1867 I voted for the first time. Those years were the peak of "freedom expanding outward", four million freed, the Constitution writing down equality and the vote, the South even electing Black legislators and a Black senator.\n\nBut by 1877, North and South struck a deal (known as the Compromise of 1877) and withdrew from the South the last federal troops that protected us. Reconstruction was over.\n\nWith the troops gone, the last wall between me and the old power collapsed. Over the decades that followed, the South built up a whole system of humiliating and segregating Black people, called Jim Crow. My children grew up under it: could not share a school or a car with whites, and still could not get into the polls.\n\nMy life drew a heartbreaking circle: born a slave, briefly a "free man who could vote" for a few middle years, and in old age back to a state of "free in name, trapped in fact." My children began again almost from the place I had fallen back to.\n\nThis is why I say: do not believe the talk that "after the war everything turned for the better." Freedom truly did come. But once it came, it was pressed back down, one hand at a time.',
      },
      deliverGoal: 'N10 zoom-out + topic connection (倒数第三) — 我这辈子卡在历史两头 + 1865 奴隶变自由人/1867 首次投票 = 自由往外扩高峰 (四百万获自由/宪法写平等投票权/南方选出黑人议员参议员) + 1877 妥协北方撤走南方最后联邦军队重建结束 + 军队走最后一道墙塌→Jim Crow (孩子不能同校同车投票站进不去) + 一生画心碎的圆 (生为奴隶中间短暂能投票的自由人老了名义自由实际被困/孩子从他跌回处重新开始) + 反 Whig「别信内战后一切向好/自由真来过又被一只手一只手按回去」',
      engagementHook: '我这一生画了一个心碎的圆：生为奴隶，中间短暂做过几年能投票的自由人，老了又回到「名义自由、实际被困」。我的孩子，几乎从我跌回的地方重新开始。「内战之后一切都向好」——这句话，错在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'fs-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那部全国的大宪法，两种说法都站得住。\n\n一种说法：它对我，从头到尾就是一句空话。它写下「平等保护」「不得因肤色剥夺投票权」，听着多堂皇。可我这一生：地被收回去，债还不清，选票被设个识字测验就拿走，孩子重新被关在投票站外。这些字，一个都没真的护到我。对像我这样的人，它写得越漂亮，越像一种嘲讽。\n\n另一种说法：它是一张暂时没法兑现的支票。这些字虽然当时没护到我，可它们被白纸黑字写进了国家的根本大法，谁也擦不掉。它们就在那儿等着。几十年后，我的孙辈、重孙辈，正是举着这同一条「平等保护」，一点一点把被夺走的权利,重新讨了回来。我这一代没等到，可那张支票,后人替我兑现了一部分。\n\n这两边不是「半空半满」。它对我是空话，对我的后人是支票——同一句话，看你站在哪一代人的位置上。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that great national Constitution. Both views stand.\n\nOne view: to me, from start to finish, it was empty words. It wrote down "equal protection" and "the vote shall not be denied on account of color," and how grand it sounds. But across my life: the land taken back, the debt never cleared, the ballot taken away by a literacy test, my children shut out of the polls once more. Not one of those words truly protected me. For a person like me, the finer it was written, the more it looked like mockery.\n\nThe other view: it was a check that could not yet be cashed. Though those words did not protect me at the time, they were written in black and white into the nation\'s foundational law, where no one could rub them out. They sat there, waiting. Decades later, my grandchildren and great-grandchildren, holding up this very same "equal protection," took back the stolen rights bit by bit. My generation did not live to see it, but later generations cashed part of that check for me.\n\nThese are not "half empty, half full." To me it was empty words; to those who came after me it was a check, the same line, depending on which generation\'s place you stand in.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis (倒数第二, gold-standard) — 一种说法 (对我从头到尾空话/写平等保护不得因肤色剥夺投票权堂皇/我一生地被收债还不清选票被识字测验拿走孩子关在投票站外/一个字没真护到我/越漂亮越像嘲讽) / 另一种说法 (暂时没法兑现的支票/字被写进根本大法谁也擦不掉等着/几十年后孙辈重孙辈举同一条平等保护把权利讨回来/我这代没等到后人兑现一部分) / 不是半空半满 (对我空话对后人支票/看站哪代人位置) / 想 30 秒',
      engagementHook: '一种说法：那部宪法对我从头到尾就是空话。另一种说法：它是一张我这代没能兑现、后人替我兑现了一部分的支票。两边都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'fs-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，生为奴隶，自由过几年，投过一次让手发抖的票，又被一笔还不完的债和一道识字测验，按回到最底下，你会怎么评价这样一个开端？\n\n一部宪法，一边对我喊「平等保护」「不得因肤色剥夺投票权」，一边眼看着我的地被收回、票被拿走、孩子被关在门外。你会说它是骗我的空话，还是一张终会兑现的支票？你怎么评？\n\n不过先记住：你这一遍，听的只是一个被重新按回底层的黑人佃农。亲手把自由往回收的总统 Andrew Johnson、走温和路线的第一位非裔参议员 Hiram Revels，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一段历史，也会看看你刚才的判断站不站得住。\n\n再想一步。今天你身边，有没有「规则上写着对你公平」和「真到关键时刻你被悄悄区别对待」差很远的地方——某条规定写得人人平等，可一道「看似中立」的门槛，专门把某些人卡在外面，而且没有一个字提到他们是谁。\n\n那时候，你能看出那道门槛背后真正挡的是谁吗？你会装作没看见，还是会像那些后来举着「平等保护」把权利重新讨回来的人一样——把那句写在纸上的话，捡起来，问一句：这句话，到底算不算数？',
        en: 'Having walked my whole life, born a slave, free for a few years, casting once a ballot that set my hand shaking, then pressed back to the very bottom by a debt I could never clear and a literacy test, how would you judge a beginning like this?\n\nA constitution that cries to me "equal protection" and "the vote shall not be denied on account of color," while it watches my land taken back, my ballot taken away, my children shut out the door. Would you call it empty words that deceived me, or a check that will one day be cashed? How do you judge it?\n\nBut first, remember: this pass, you heard only a freedman sharecropper pressed back to the bottom. Andrew Johnson, the president who pulled freedom back, and Hiram Revels, the first Black senator who walked a moderate road, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step. In your own life today, is there somewhere "the rules say you are treated fairly" and "when it really counts you are quietly treated differently" are far apart, a rule written as equal for all, while a "seemingly neutral" bar is set up to keep certain people out, and not one word names who they are?\n\nWhen that happens, can you see who that bar is really keeping out? Will you look away, or will you do what those who later raised "equal protection" to take back their rights did: pick up the words on the paper, and ask one question, does this line count, or not?',
      },
      deliverGoal: 'N12 close (末节, gold-standard evaluation + transfer) — 评价开端 (生为奴隶自由过几年投过让手发抖的票又被还不完的债和识字测验按回最底下 → 骗我的空话 vs 终会兑现的支票) + transfer「今天你身边规则上对你公平 vs 关键时刻被悄悄区别对待的地方 (一道看似中立门槛专门卡某些人没一个字提他们是谁)」+ 你能看出门槛背后真正挡的是谁吗/装没看见还是像后人举平等保护讨回权利一样把话捡起来问这句话到底算不算数',
      engagementHook: '我生为奴隶，自由过几年，投过一次让手发抖的票，又被按回最底下。你会怎么评价这样一个开端？再想一步：今天你身边，有没有一道「看似中立」的门槛，没提任何人是谁，却专门把某些人卡在外面？你能看出它真正挡的是谁吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'andrew-johnson':                       andrewJohnsonLens,
  'hiram-revels':                         hiramRevelsLens,
  'freedman-sharecropper-receiving-end':  freedmanSharecropperLens,
};

// per TOPIC_ROADMAP_G6_G12.md A6 + receiving-end 优先 pattern:
// 被解放又被收回权利一方 + N1 gold-standard hook + N6「纸面权利 vs 现实剥夺」跨 lens/Topic 对位 (Magna Carta Clause 39) + N11/N12 空话 vs 支票 closing
export var defaultLens = 'freedman-sharecropper-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'reconstruction-1877',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'andrew-johnson': 30, 'hiram-revels': 30, 'freedman-sharecropper-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, long-arc 12-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each / cross-lens micro-detail N6:「纸面权利 vs 现实剥夺」14th/15th 修正案白纸黑字写下 vs 现实被 Black Codes→sharecropping→Jim Crow 一层层剥回 (Johnson 掏空 / Revels 见证被淹没 / 佃农 投票权变成还不完的债)',
    'defaultLens: freedman-sharecropper-receiving-end — 受影响者优先 (被解放又被收回权利一方 + gold-standard N1 hook + N11/N12 空话 vs 支票)',
    'expectsRealAnswer: ONLY N11 (synthesis 倒数第二) + N12 (close 末节) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: receiving-end 是 composite (N1 显式声明像他这样几百万人多数没留名字/这一遍集中到一个人); Revels N8 批评共和党是 documented controversy',
    'cross-Topic 锚: 14th/15th 纸面权利 vs 现实→magna-carta Clause 39 (3 lens 全挂); Revels→Frederick Douglass (A4 反复受挫母题); sharecropping 债务束缚→black-death-1347 (劳动力短缺后人身束缚)',
    '反 Whig: 重建是「自由扩张然后被强行收回」最清晰反例; Johnson 主动逆转进步; 佃农 lens 1877 后倒退到接近奴役; 打破内战后一切向好线性叙事',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
