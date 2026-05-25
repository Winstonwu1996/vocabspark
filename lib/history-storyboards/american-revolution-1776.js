// ─── American Revolution 1776 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 美国独立革命 · The American Revolution 1775-1783 + Declaration of Independence 1776
// HSS-5.5 · APUSH Period 3 (1754-1800)
//
// 这个 Topic 讲的是 1775-83 的革命 + 1776 独立宣言 (Jefferson 写的「人人生而平等」),
// 不是 1787 制宪 (那是 sibling Topic constitutional-convention-1787). 避免重叠:
//   - constitutional-convention = 1787 宪法内部博弈 (Great Compromise / 3/5 / Madison / Sherman)
//   - 本 Topic = 1775-83 革命 / 1776 独立宣言 / 「人人生而平等」对谁不算 / Dunmore 宣言
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 8/12 条):
//   - jefferson                       (perpetrator-actor) — Thomas Jefferson 1743-1826 写「人人生而平等」却终身蓄奴
//   - loyalist                        (lonely-mediator)   — 一个效忠英王的殖民地保皇派/中立者, 输掉一切, 历史遗忘的约 1/3
//   - enslaved-person-receiving-end   (receiving-end, DEFAULT) — 一个被奴役者, 听写宣言的人喊「人人平等」, 很多人借 Dunmore 宣言投奔英军
//
// 跨 lens micro-detail (N6 anchor):
//   「自由 / liberty」一句话两个方向 — 同一场为「自由」打的革命, 喊得最响的人手里攥着别人的人身自由:
//   - Jefferson 在费城写「人人生而平等」, 同一时间他名下约 200 个被奴役者没有任何自由
//   - 被奴役者 lens: 殖民者喊「自由」要脱离英国; 而通往自由的门, 1775 年 11 月由英国总督 Dunmore 打开 (投英军即获自由)
//   一场为「自由」打的革命 — 谁的自由? 同一个词, 两个方向
//
// 跨 Topic 锚:
//   - Jefferson 读 Locke 天赋人权/同意而治 → enlightenment Topic
//   - 「人人生而平等」对谁不算 (被奴役者/女性/原住民) → constitutional-convention 1787 (3/5 妥协是这部宣言理想的下一章背叛)
//   - 大多数原住民盟约英国 (殖民者=抢地威胁) → 北美原住民土地议题
//
// defaultLens = 'enslaved-person-receiving-end' (受影响者优先 pattern:
//   被「人人平等」明文排除的一方 + Dunmore 宣言投英军求自由 + 一句「自由」跨 lens 对位)
//
// STRUCTURE SPEC (mirror constitutional-convention-1787 gold-standard):
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach ~550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true (2 per lens, 6 total); all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//   - default-lens N10+N11 必含跨视角指针 (① 只听一边 ② Jefferson/Loyalist 会挑战, 换视角再走一遍) + transfer
//
// FACTUAL stance (per task brief):
//   - 「1/3 Patriot / 1/3 Loyalist / 1/3 neutral」是 John Adams 的粗略 ESTIMATE, 标注为有争议的估计, 不是精确数字
//   - Lord Dunmore\'s Proclamation 1775 年 11 月 (向投奔英军的被奴役者提供自由) → 数以万计逃向英军防线
//   - 「人人生而平等」明文之外: 被奴役者 / 女性 / 原住民
//   - 大多数原住民部族选择站英国一边 (殖民者是抢地的威胁)
//   - 无伪造引文
//
// per AUTHORING_PIPELINE.md 12 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句 /
//   第 11 条 嵌套引号用「」+ escape apostrophe / 第 8I.1 no *italic* / 第 8K no English「lens」in CN)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Thomas Jefferson (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var jeffersonLens = {
  id: 'jefferson',
  name: 'Thomas Jefferson',
  nameCn: '托马斯·杰斐逊',
  role: 'perpetrator-actor',
  perspectiveTag: 'declaration-author',
  icon: '📜',
  description: {
    cn: '弗吉尼亚人，1743 年生，33 岁那年被推去起草一份文件，于是写下了那句后来传遍全世界的话：「人人生而平等」。他读遍启蒙思想，文笔是同代人里最好的，一支笔就给一场革命定了调。同一个他，住在 Monticello 庄园，名下有约 200 个被奴役者，他写「人人平等」的那几天，伺候他的人没有一个是自由的。这一遍让你从执笔人内部，看一句关于自由的话，怎么从一个亲手剥夺别人自由的人笔下写出来。',
    en: 'A Virginian, born 1743, who at thirty-three was pushed to draft a document and so wrote the line that would travel the whole world: "all men are created equal." He had read the Enlightenment through, wrote the best prose of his generation, and set the tone of a revolution with a single pen. The same man lived at Monticello, a plantation where about two hundred people were enslaved, and in the very days he wrote "all men are equal," not one of the people who waited on him was free. This pass lets you watch, from inside the author, how a sentence about liberty came from the pen of a man who took the liberty of others.',
  },
  storyboard: [
    {
      id: 'jef-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1776 年 6 月，费城。我 33 岁，在一间租来的二楼房间里，连写了大概十七天。\n\n我手里这份草稿，开头有一句话，后来传遍了全世界：「人人生而平等，造物主赋予他们若干不可剥夺的权利，其中包括生命、自由和追求幸福。」\n\n我是 Thomas Jefferson（托马斯·杰斐逊），弗吉尼亚来的。屋里有人比我会演讲，有人比我会算账。可起草这份文件的活，落在了我头上，因为他们说：你笔头最好。\n\n这一遍，你坐进我这个位置。你要写的不是一封信，是一个新国家对全世界的宣告：我们为什么有权脱离英国，自己立国。\n\n但你要一边写，一边记住一件事：写下「人人平等」这几个字的那只手，回到弗吉尼亚的家里，名下有约 200 个不自由的人。',
        en: 'June 1776, Philadelphia. I was thirty-three, in a rented room on the second floor, and I wrote for some seventeen days.\n\nThe draft in my hand opens with a line that would travel the whole world: "all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."\n\nI am Thomas Jefferson, from Virginia. There were men in that room who spoke better than I did, men who counted figures better. But the task of drafting fell to me, because they said: your pen is the best.\n\nThis pass puts you in my seat. What you are writing is not a letter. It is a new nation\'s declaration to the whole world: why we have the right to break from Britain and found our own country.\n\nBut as you write, remember one thing. The same hand that set down "all men are equal," back home in Virginia, held about two hundred people who were not free.',
      },
      deliverGoal: 'N1 hook — 1776.6 费城 33 岁起草 17 天 + 独立宣言开篇「人人生而平等/生命自由追求幸福」+ Jefferson 自我介绍 (笔头最好被推去起草) + 这一遍视角设定 + 反讽: 写「人人平等」的手名下约 200 个不自由的人',
      engagementHook: '写下「人人平等」的那只手，名下有约 200 个不自由的人。一个人能一边真心相信一句话，一边亲手违背它吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们为什么要闹独立。\n\n我们这 13 个殖民地，原本是英国的。打完一场跟法国的大仗（1763 年结束），英国欠了一屁股债，就回头找我们要钱：印花税、茶税，一样接一样地加。\n\n我们火了，喊出一句口号：「无代表，不纳税」（no taxation without representation）。意思是：你英国议会里没有我们的代表，凭什么张口就向我们收税？\n\n1773 年，波士顿一群人冲上英国商船，把整船的茶叶倒进了海里，这就是波士顿倾茶事件（Boston Tea Party）。英国震怒，1774 年通过一串严厉的惩罚法令，我们叫它「不可容忍法令」（Intolerable Acts）：关闭波士顿港、收紧自治。\n\n到这一步，事情已经压不住了。一边是「你没权管我们」，一边是「敢不服就治你」。火药味，越来越浓。',
        en: 'First, why we sought independence.\n\nThese thirteen colonies were Britain\'s. After a great war with France (ended 1763), Britain was buried in debt and turned to us for money: a stamp tax, a tea tax, one after another.\n\nWe were furious, and raised a cry: "no taxation without representation." Meaning: there is no representative of ours in your Parliament, so by what right do you simply open your mouth and tax us?\n\nIn 1773 a crowd in Boston boarded British ships and dumped whole cargoes of tea into the sea. This was the Boston Tea Party. Britain raged, and in 1774 passed a string of harsh punishments we called the Intolerable Acts: closing Boston\'s port, tightening its self-rule.\n\nBy this point the thing could no longer be held down. On one side, "you have no right to govern us." On the other, "defy us and we will discipline you." The smell of gunpowder grew thicker.',
      },
      deliverGoal: 'N2 setup — 革命起因 (法国战争后英国负债 → 印花税 Stamp Act/茶税) + 「无代表不纳税」+ 1773 Boston Tea Party + 1774 Intolerable/Coercive Acts (关波士顿港) → 火药味渐浓',
      engagementHook: '「你没我们的代表，凭什么收我们的税」——你觉得「同意」是收税的必要前提吗？没经你同意拿走的东西，算抢吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我那句「人人生而平等」，不是我凭空想出来的。\n\n会议前那些年，我把启蒙时代的书读了又读。最影响我的是一个英国人 Locke（洛克），他写过一套想法，我反复琢磨：人天生就有一些权利，谁也夺不走；政府的权力来自被统治者的同意；如果政府背叛了人民，人民有权推翻它。\n\n这套思路，从启蒙的书本，要被我搬进一份真正的建国宣言里。（你要是跑过 enlightenment 那个 Topic，会认得 Locke 这个名字。）\n\n1776 年 6 月，大陆会议派了五个人组成起草委员会，其中有 Franklin（富兰克林）和 Adams（亚当斯）。但他们把笔交给了我。Adams 后来说：你写，因为你写得比我们都好，而且我招人恨，你不招人恨。\n\n于是我把 Locke 那套「天赋人权 + 同意而治 + 反抗暴政」的逻辑，浓缩成了开头那几句话。我没站起来念，我只是写。',
        en: 'My line "all men are created equal" did not come from nowhere.\n\nIn the years before, I read the books of the Enlightenment over and over. The man who shaped me most was an Englishman, Locke, who wrote a set of ideas I turned over and over: people are born with certain rights no one can take away; a government\'s power comes from the consent of the governed; and if a government betrays its people, the people have the right to overthrow it.\n\nThis line of thought, from the books of the Enlightenment, I was about to carry into a real founding declaration. (If you have run the enlightenment topic, you will recognize the name Locke.)\n\nIn June 1776 the Continental Congress named a committee of five to draft it, among them Franklin and Adams. But they put the pen in my hand. Adams said later: you write it, because you write better than the rest of us, and because I am hated and you are not.\n\nSo I pressed Locke\'s logic of natural rights, consent of the governed, and the right to resist tyranny into the opening lines. I did not stand to read them. I only wrote.',
      },
      deliverGoal: 'N3 setup — Jefferson 读启蒙 + Locke 天赋人权/同意而治/反抗暴政 (跨 enlightenment Topic 锚) + 1776.6 五人起草委员会 (Franklin/Adams) 把笔交给 Jefferson (Adams: 你写得最好且不招人恨) + 把 Locke 逻辑浓缩成开篇',
      engagementHook: '我把一个英国人书里的想法，写进了脱离英国的宣言。你读过的哪句话，可能将来真的改变你做的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你坐在桌前，要写「人人生而平等」。可你心里清楚一件别扭的事：你回弗吉尼亚的家，Monticello 庄园里，约 200 个被奴役的人，正替你种地、做饭、带孩子。他们一个都不自由。\n\n你其实在草稿里写过一段，狠狠骂英王把奴隶贸易强加给殖民地。可这段话，南方那几个蓄奴州的代表死活不让留，南卡和佐治亚直接说：删掉，不然我们不签。\n\n你怎么办？\n\n你可以坚持留着那段，赌一把——但很可能整份宣言因为南方不签而流产，独立这件事就泡汤了。你也可以删掉它，保住宣言，但代价是：你亲手把奴隶制这个最大的矛盾，从这份「人人平等」的文件里抹掉，假装它不存在。\n\n这一刻你得想：你要的「人人平等」，是真的指所有人，还是只指像你这样的人？这两件事，在你身上，分得清吗？',
        en: 'Now you are me.\n\nYou sit at the desk to write "all men are created equal." But you know an awkward thing in your heart: back home in Virginia, at Monticello, about two hundred enslaved people are tilling your fields, cooking your food, raising your children. Not one of them is free.\n\nYou had in fact written a passage in the draft, fiercely condemning the king for forcing the slave trade on the colonies. But the delegates of the slave states would not allow it to stand. South Carolina and Georgia said plainly: strike it, or we do not sign.\n\nWhat do you do?\n\nYou could insist on keeping the passage and gamble. But the whole declaration might then die because the South refuses, and independence collapses with it. Or you could cut it, save the declaration, at this price: you yourself erase slavery, the largest contradiction, from this document of "all men are equal," and pretend it is not there.\n\nHere you must ask: is your "all men are equal" really all men, or only men like you? On you, can those two things even be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Monticello 约 200 被奴役者伺候他写「人人平等」+ 草稿骂英王奴隶贸易段被南方 (南卡/佐治亚) 逼删否则不签 + 抉择 (坚持留赌宣言流产 vs 删保宣言但抹掉奴隶制矛盾) + 自我拷问: 「人人平等」真指所有人还是只指像你这样的人',
      engagementHook: '南方说：删掉骂奴隶制那段，不然不签。你删，宣言保住了，但你亲手把最大的矛盾抹掉了。为了一个「好结果」，你愿意删掉自己真心写下的话吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我删了那段。\n\n1776 年 7 月 4 日，大陆会议正式通过了独立宣言。那段骂奴隶贸易的话，不在最终版里。为了让所有殖民地都签字，那个最该被写进去的矛盾，被我们一起绕开了。\n\n但你别以为这只是一纸声明。同一时间，仗已经打起来了。\n\n早在 1775 年 4 月，马萨诸塞的 Lexington（莱克星顿）和 Concord（康科德），英军和殖民地民兵就开了第一枪。后来有人把那一枪叫「响彻世界的一枪」。等我在费城写宣言的时候，外面的战争已经打了一年多。\n\n所以这份宣言不是空谈。它是一份「我们已经动手了，现在告诉全世界我们为什么动手」的文件。\n\n写完它，我没有松一口气。我知道，签了字，就再没有退路了——签字的每个人，在英国眼里都是叛国者，输了是要上绞架的。',
        en: 'I cut the passage.\n\nOn 4 July 1776 the Continental Congress formally adopted the Declaration of Independence. The lines condemning the slave trade were not in the final text. To get every colony to sign, the contradiction that most belonged in it was, by all of us together, worked around.\n\nBut do not imagine this was only a paper statement. By then the war was already on.\n\nBack in April 1775, at Lexington and Concord in Massachusetts, British troops and colonial militia had fired the first shots. Someone later called it "the shot heard round the world." By the time I was writing in Philadelphia, the war outside had been going for over a year.\n\nSo this declaration was no idle talk. It was a document that said: we have already taken up arms, and now we tell the whole world why.\n\nWhen I finished it, I did not breathe easy. I knew that once we signed, there was no road back. In Britain\'s eyes, every man who signed was a traitor, and losing meant the gallows.',
      },
      deliverGoal: 'N5 story — Jefferson 删了奴隶贸易段 + 1776.7.4 大陆会议通过独立宣言 (那矛盾被绕开) + 仗已开打: 1775.4 Lexington/Concord 第一枪「响彻世界的一枪」+ 宣言不是空谈是「已动手告诉世界为何动手」+ 签字即叛国输了上绞架',
      engagementHook: '签字的每个人，在英国眼里都是叛国者，输了要上绞架。你会为一个还没赢的理想，把自己的命押上去吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我写「人人生而平等」要脱离英国争自由的时候，有一件事我宁愿你不知道，但你必须知道。\n\n就在我动笔前半年，1775 年 11 月，英国派驻弗吉尼亚的总督 Dunmore（邓莫尔勋爵）发了一份宣言：任何属于反叛者的被奴役者，只要逃出来、加入英军，就给他自由。\n\n你听清楚这是什么意思。我们这些殖民者，正举着「自由」的旗子要脱离英国。可对我庄园里那些被奴役的人来说，通往自由的那扇门，不是我打开的，是英国人打开的。\n\n后来整场战争里，数以万计的被奴役者冒死逃向英军防线，去换那一纸自由。其中可能就有从我 Monticello 跑出去的人。\n\n同一个词——「自由」。我在费城用它来反抗英国；我庄园里的人，用它来反抗我，投奔我正在反抗的那个英国。\n\n一场为「自由」打的革命。可你得问一句：谁的自由？',
        en: 'When I wrote "all men are created equal" to break from Britain and win freedom, there is one thing I would rather you did not know, but you must.\n\nHalf a year before I took up the pen, in November 1775, Britain\'s royal governor of Virginia, Lord Dunmore, issued a proclamation: any enslaved person belonging to a rebel who fled and joined the British army would be given his freedom.\n\nHear clearly what this means. We colonists were raising the banner of "liberty" to break from Britain. But for the enslaved people on my plantation, the door to freedom was not opened by me. It was opened by the British.\n\nAcross the whole war that followed, tens of thousands of enslaved people fled at the risk of death toward British lines, to trade for that scrap of freedom. Among them may have been people who ran from my own Monticello.\n\nThe same word, "liberty." In Philadelphia I used it to resist Britain; the people on my plantation used it to resist me, and ran to the very Britain I was resisting.\n\nA revolution fought for "liberty." But you have to ask: whose liberty?',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Lord Dunmore\'s Proclamation 1775.11 (投英军的被奴役者获自由) + 反讽: 通往自由的门是英国人打开的不是 Jefferson + 战争中数以万计被奴役者逃向英军 (可能含 Monticello 的人) + 跨 lens 对位 (同一个「自由」: 殖民者反抗英国 vs 被奴役者用它反抗主人投奔英国) + 「一场为自由打的革命: 谁的自由?」',
      engagementHook: '我用「自由」反抗英国；我庄园里的人用「自由」反抗我，投奔我正在反抗的英国。同一个词，怎么会有两个相反的方向？',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那句「人人生而平等」，当时到底指谁？我得诚实跟你算这笔账。\n\n它没指被奴役者。全美约五分之一的人口当时是被奴役的，他们不在「人人」里。\n\n它没指女性。我的朋友 Adams 的妻子 Abigail，曾写信叫她丈夫「别忘了女士们」。结果呢？新国家的政治权利，没有女性的份。\n\n它也没指原住民。我们殖民者一路往西抢他们的土地。整场革命里，大多数原住民部族反而选择站在英国一边——因为对他们来说，真正抢地的威胁，是我们这些殖民者，不是远在伦敦的国王。\n\n它甚至没指所有白人男性——很多没有财产的穷白人，当时也没有投票权。\n\n所以我写下的「人人」，实际范围窄得多：有产的白人男性。\n\n你看，一句话可以写得无比响亮，同时把绝大多数活生生的人，悄悄关在门外。',
        en: 'That line, "all men are created equal," whom did it actually mean at the time? Let me reckon this honestly with you.\n\nIt did not mean the enslaved. About a fifth of the country\'s people were enslaved then, and they were not in "all men."\n\nIt did not mean women. My friend Adams\'s wife, Abigail, once wrote urging her husband to "remember the ladies." And what came of it? The new nation\'s political rights held no place for women.\n\nIt did not mean the Native nations. We colonists pushed west, seizing their land all the way. Across the whole revolution, most Native nations chose Britain\'s side instead, because to them the real land-grabbing threat was us, the colonists, not a king far off in London.\n\nIt did not even mean all white men. Many poor white men with no property had no vote at the time.\n\nSo the "all men" I wrote was in truth far narrower: propertied white men.\n\nYou see, a line can be written to ring out grandly, and at the same time quietly shut the vast majority of living people outside the door.',
      },
      deliverGoal: 'N7 story — 「人人生而平等」明文之外: 被奴役者 (约 1/5 人口) + 女性 (Abigail Adams「remember the ladies」无政治权利) + 原住民 (殖民者西进抢地/大多数部族站英国因殖民者才是抢地威胁) + 无产白人男性无投票权 + 实际窄到有产白人男性 + 「一句话响亮却把绝大多数人关门外」',
      engagementHook: '「人人」实际只指有产白人男性，把约五分之一被奴役的人、所有女性、所有原住民都关在门外。一句话写得越响亮，是不是越容易让人忽略它把谁排除了？',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回到战场。光有一份漂亮的宣言，赢不了战争。\n\n开头几年，我们打得很惨。英军是当时世界最强的军队，我们这边是临时凑起来的民兵和大陆军，缺枪、缺钱、缺粮。1777-78 年那个冬天，华盛顿（Washington）的军队在 Valley Forge（福吉谷）扎营，冻死饿死了几千人。\n\n转机是 1777 年的 Saratoga（萨拉托加）大捷。我们打赢这一仗后，法国看到了希望，1778 年正式跟我们结盟——出钱、出兵、出舰队。这一下，局势翻了。\n\n1781 年，决战在弗吉尼亚的 Yorktown（约克镇）。华盛顿的大陆军加上法国的陆军和舰队，把英军主力围死，英军投降。\n\n这一仗基本定了胜局。又谈了两年，1783 年签了《巴黎和约》（Treaty of Paris），英国正式承认美国独立。\n\n一份我写的宣言，加上一场打了八年的仗，加上法国的援手，才换来了「独立」两个字。',
        en: 'Back to the battlefield. A handsome declaration alone wins no war.\n\nFor the first years we fought badly. The British army was the strongest in the world then; our side was militia and a Continental Army thrown together, short of guns, money, and food. In the winter of 1777 to 1778, Washington\'s army camped at Valley Forge, and thousands froze or starved to death.\n\nThe turn came with the great victory at Saratoga in 1777. After we won there, France saw a chance and, in 1778, formally allied with us, sending money, troops, and a fleet. With that, the tide shifted.\n\nIn 1781 the decisive battle came at Yorktown in Virginia. Washington\'s Continental Army, joined by French land forces and fleet, pinned the main British army and forced its surrender.\n\nThat battle all but settled it. Two more years of talks, and in 1783 the Treaty of Paris was signed, and Britain formally recognized American independence.\n\nA declaration I wrote, plus a war of eight years, plus France\'s helping hand, bought the two words: independence.',
      },
      deliverGoal: 'N8 story — 战争实况 (英军最强/这边临时民兵缺枪钱粮) + 1777-78 Valley Forge 冬营冻饿死几千 + 1777 Saratoga 大捷 → 1778 法国结盟 (出钱兵舰队) 翻局 + 1781 Yorktown 决战 (华盛顿+法军围降英军) + 1783 Treaty of Paris 英承认独立 + 「宣言+八年仗+法国援手才换来独立」',
      engagementHook: '没有法国出钱出兵，这场仗很可能赢不了。一个国家的「独立」，靠的是自己的理想，还是别国的算计?',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我那句话，后来去了很远的地方，远到我自己都没想到。\n\n它没有停在 1776 年。它成了一颗种子。\n\n几十年后，废奴运动的人，举着我写的「人人生而平等」，去反对奴隶制——反对我自己一辈子都在做的事。再后来，争取女性投票权的人、争取黑人民权的人，都回到这句话上：你们建国时说「人人平等」，那就请兑现它。\n\n1863 年，林肯（Lincoln）在葛底斯堡演说里，开口第一句就引我这份宣言：「八十七年前，我们的先辈……主张人人生而平等。」他用我的话，去打一场我没敢打的仗：废除奴隶制。\n\n这就是文字奇怪的地方。我写它的时候，把它的范围划得很窄。可一旦写在纸上，它就不再只属于我了。后人可以把它撑大，大到连我本人都被它审判。\n\n（这句话怎样在 1787 年的宪法里又被打了折扣，你可以去 constitutional-convention 那个 Topic 接着看。）',
        en: 'My line went very far, farther than I myself imagined.\n\nIt did not stop in 1776. It became a seed.\n\nDecades later, people in the movement to abolish slavery held up my "all men are created equal" to fight slavery, the very thing I did all my life. Later still, those fighting for women\'s vote, and for Black civil rights, all came back to this line: you said "all men are equal" at your founding, so now make good on it.\n\nIn 1863, Lincoln, in the Gettysburg Address, opened his first sentence by quoting this declaration: "Four score and seven years ago our fathers... dedicated to the proposition that all men are created equal." He used my words to fight a war I had not dared to fight: the abolition of slavery.\n\nThis is the strange thing about words. When I wrote it, I drew its bounds narrow. But once it is on paper, it no longer belongs to me alone. Later generations can stretch it wide, wide enough to put even me on trial.\n\n(How this line was discounted again in the Constitution of 1787, you can go on to see in the constitutional-convention topic.)',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 「人人生而平等」成种子 + 废奴运动/女性投票/黑人民权都回到这句话「请兑现它」+ 1863 Lincoln 葛底斯堡演说引宣言打一场 Jefferson 没敢打的仗 (废奴) + 「文字一旦写下不再只属于我后人撑大到审判我本人」+ 跨 Topic 锚 (1787 宪法又打折扣 → constitutional-convention)',
      engagementHook: '我把这句话的范围划得很窄，后人却把它撑大，大到连我本人都被它审判。一句话写下后，它该听写它的人的，还是听用它的人的?',
      expectsRealAnswer: false,
    },
    {
      id: 'jef-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是自由的执笔人。我把启蒙思想里最好的东西，浓缩成一句改变了世界的话。这句「人人生而平等」，后来成了废奴、女权、民权一次次回去汲取力量的源头。一份文件能影响两百多年、能跨过大洋点燃别国的革命，这是真正的功业。没有我那支笔，这场革命可能没有灵魂。\n\n另一种说法：我是言行最分裂的伪善者。同一双手，写下「人人生而平等」，也一辈子靠约 200 个被奴役者养着。我删掉了草稿里骂奴隶制那段，我明知道这句话把五分之一的人关在门外，我还是写了，还是签了，还是回家继续蓄奴到死。我写的不是「人人平等」，是「像我这样的人才算人」。\n\n这两边不是「优点加缺点」。是同一句话的两面——同一个理想，同一个我。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the author of liberty. I pressed the best of Enlightenment thought into a line that changed the world. This "all men are created equal" became the source that abolition, women\'s rights, and civil rights returned to, again and again, to draw their strength. A document that could shape more than two centuries, and reach across an ocean to light revolutions in other lands, is a true achievement. Without my pen, this revolution might have had no soul.\n\nThe other view: I was the most divided of hypocrites in word and deed. The same hands that wrote "all men are created equal" lived a whole life off about two hundred enslaved people. I cut the passage condemning slavery from my draft. I knew the line shut out a fifth of the people, and I wrote it anyway, signed it anyway, and went home to keep enslaving people until I died. What I wrote was not "all men are equal," but "only men like me count as men."\n\nThese are not "strengths and weaknesses." They are two faces of the same line, the same ideal, the same me.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (自由的执笔人/启蒙浓缩成改变世界的话/废奴女权民权汲取源头/没他笔革命没灵魂) / 另一种说法 (言行最分裂的伪善者/同手写平等又终身蓄奴约 200 人/删骂奴隶制段/明知排除五分之一仍写仍签仍回家蓄奴到死/写的是「只有像我这样的人才算人」) / 同一句话两面 / 想 30 秒',
      engagementHook: '自由的执笔人，和言行最分裂的伪善者——是同一个我。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'jef-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个开端？\n\n一场为「自由」打的革命，喊出了人类历史上最响亮的一句平等宣言；而写下它、喊得最响的人，手里攥着约 200 个人的人身自由，直到死都没放手。这句话和这桩事，不是两份分开的文件，是同一个人的同一辈子。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有人把一句很漂亮的话挂在嘴边——「我们一视同仁」「这里人人平等」——可他自己的做法，跟这句话差得很远？也许是某个大人，也许是某条规则，也许就是你自己有时候。\n\n那时候，你会怎么做？你会因为他言行不一，就把那句漂亮话也一起扔掉吗？还是会像后来那些人一样，把他亲口说过的话，捡起来，对准他本人，说一句：那就请你兑现它？',
        en: 'Having walked my whole life, how would you judge a beginning like this?\n\nA revolution fought for "liberty," which raised the grandest declaration of equality in human history; and the man who wrote it, who cried it loudest, held the bodily freedom of about two hundred people in his hands and never let go until he died. The line and the deed are not two separate documents. They are one man\'s one life. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there someone who keeps a fine line on their lips, "we treat everyone the same," "here all are equal," while their own conduct is far from it? Maybe some grown-up, maybe some rule, maybe even yourself at times.\n\nWhen that happens, what will you do? Because they fall short, will you throw out the fine words too? Or will you do what those later people did, pick up the very words they spoke, aim them back at the speaker, and say: then make good on it?',
      },
      deliverGoal: 'N11 close — 评价开端 (最响亮平等宣言 vs 写它的人攥约 200 人自由到死同一天平) + transfer「今天你身边把漂亮话挂嘴边却言行不一的人 (一视同仁/人人平等)」+ 你会因言行不一就扔掉漂亮话还是像后人把他说过的话对准他本人「请兑现它」',
      engagementHook: '一边是人类历史上最响亮的平等宣言，一边是写它的人攥着约 200 人的自由到死。装在同一个人的同一辈子里，你会怎么评价这样一个开端？今天你身边那个「说一套做一套」的人，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: A Colonial Loyalist (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var loyalistLens = {
  id: 'loyalist',
  name: 'A Colonial Loyalist',
  nameCn: '一个保皇派殖民者',
  role: 'lonely-mediator',
  perspectiveTag: 'forgotten-third',
  icon: '⚖️',
  description: {
    cn: '一个普通的殖民地居民，世代住在这片土地上，把自己看作英国人。当邻居们越来越激进、要跟英国彻底决裂时，他没跟上去。他不是英国派来的官，也不是恶人，他只是真心相信：闹翻不如谈，分裂不如修补，留在帝国里更安稳。结果这场革命赢了，输的不止英国，还有他这样的人。这一遍让你站在一个被两边夹击、最后输掉一切、又被历史几乎抹掉的人这里，看一场胜利者书写的革命。',
    en: 'An ordinary colonial resident, whose family had lived on this land for generations, who saw himself as British. When his neighbors grew ever more radical and pushed for a clean break with Britain, he did not follow. He was no official sent from England, and no villain. He simply, sincerely believed: better to talk than to quarrel, to mend than to split, to stay within the empire and be safe. The revolution won, and the losers were not only Britain but people like him. This pass puts you with someone caught between two sides, who lost everything, and whom history all but erased, looking at a revolution written by its victors.',
  },
  storyboard: [
    {
      id: 'loy-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '你在历史课本里大概没怎么见过我这种人。这很正常，赢的人才写历史。\n\n我是一个殖民地的普通人。我家在这片土地上住了三代，我从小到大，都把自己当英国人。英王是我的国王，英国是我的祖国，这对我来说天经地义。\n\n可到了 1770 年代中期，我身边的人变了。他们越来越激进，开口闭口「自由」「独立」，说要跟英国彻底决裂。\n\n我没跟上去。不是因为我怕，也不是因为我是坏人。是因为我真心觉得：跟自己的祖国闹到拔刀相向，是疯了。有矛盾，坐下来谈，不行吗？\n\n后来历史给我们这种人起了个名字：Loyalist（保皇派），或者 Tory（托利党人）。\n\n这一遍，你站在我这里。你不是英雄，也不是反派。你只是一个，在所有人都往一个方向跑的时候，没跟着跑的人。',
        en: 'You have probably not seen many people like me in the history books. That is normal. The winners write history.\n\nI am an ordinary colonist. My family had lived on this land for three generations, and all my life I took myself for an Englishman. The king was my king, England my homeland; to me this was simply the way of things.\n\nBut by the mid-1770s, the people around me changed. They grew ever more radical, "liberty" and "independence" on every tongue, talking of a clean break with Britain.\n\nI did not follow. Not from fear, and not because I was a bad man. It was because I sincerely felt that to quarrel with your own homeland to the point of drawn swords was madness. If there are grievances, sit down and talk. Is that not possible?\n\nLater, history gave people like me a name: Loyalist, or Tory.\n\nThis pass puts you where I stand. You are no hero, and no villain. You are only someone who, when everyone ran one way, did not run with them.',
      },
      deliverGoal: 'N1 hook — 「赢的人写历史」+ Loyalist 自我介绍 (殖民地普通人/家住三代/自认英国人) + 1770s 中期身边人变激进喊自由独立 + 他没跟 (不是怕不是坏人是真觉得跟祖国拔刀相向是疯了) + Loyalist/Tory 名字 + 这一遍视角 (所有人往一个方向跑时没跟的人)',
      engagementHook: '所有人都往一个方向跑，我没跟。当身边人都坚信一件事，你敢做那个说「等一下，我不确定」的人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说一个被忘掉的事实，你才懂我不是个怪胎。\n\n后来有位国父 John Adams（约翰·亚当斯）粗略估过：当时殖民地的人，大概三分之一支持独立，三分之一像我一样效忠英国，还有三分之一谁也不站，只想过日子。\n\n（你得知道，这个「三三三」只是 Adams 的一个粗估，不是精确统计。后来的历史学家争论过真实比例，有人说保皇派没那么多。但有一点没争议：支持革命的，远不是「全体人民」，反对和中立的人，加起来是一大片。）\n\n换句话说：不是「全美国人民一条心反抗暴政」。是一群殖民者，跟另一群殖民者，为了「要不要独立」吵翻了、打起来了。这更像一场内战，邻居打邻居，兄弟反目。\n\n我，就是那「三分之一」里的一个。我不是异类。我只是后来输了的那一边。',
        en: 'First, a forgotten fact, so you understand I was no freak.\n\nA founding father, John Adams, later made a rough estimate: of the colonists at the time, about a third backed independence, a third stayed loyal to Britain as I did, and a third stood with no one, wanting only to live their lives.\n\n(You should know this "thirds" is only Adams\'s rough guess, not a precise count. Later historians have argued over the true proportions, and some say the Loyalists were fewer. But one thing is not in dispute: those who backed the revolution were far from "the whole people," and the opposed and the neutral, taken together, were a vast share.)\n\nIn other words: it was not "the whole American people of one heart against tyranny." It was one set of colonists, against another set of colonists, falling out and coming to blows over whether to be independent. It was more like a civil war, neighbor fighting neighbor, brother turning on brother.\n\nI was one of that "third." I was no outsider. I was only the side that lost.',
      },
      deliverGoal: 'N2 setup — John Adams 粗估 1/3 Patriot / 1/3 Loyalist / 1/3 neutral + anti-fab 括号短句明确标注「三三三是 Adams 粗估非精确统计/后来历史学家争论真实比例/但反对中立加起来一大片没争议」+ 不是全体人民反暴政是殖民者打殖民者 → 更像内战邻居打邻居 + 「我是输了的那边不是异类」',
      engagementHook: '革命不是「全体人民一条心」，是殖民者打殖民者，更像一场内战——而支持独立的可能只有约三分之一。「人民选择了独立」这句话，准确吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我为什么不肯跟着闹独立？我把我的道理说给你听。\n\n第一，我觉得跟英国谈，比跟英国打，划算得多。英国有当时世界最强的军队和海军。一群临时凑起来的民兵，去硬碰它，多半要输——输了，是要流很多血的。\n\n第二，留在英帝国里，对做生意的人来说，是有实打实好处的：受英国海军保护，进英国的大市场。脱离了，这些都没了。\n\n第三，也是我最担心的：那些喊「自由」喊得最凶的人，真夺了权，就一定比英王更讲理、更自由吗？我看未必。革命常常是，赶走一个统治者，换上另一批，有时候后来的更狠。\n\n你看出来了吗？我不是不爱这片土地。我爱。正因为爱，我才怕——怕一场仗打下来，把好好的家园打烂，最后什么也没换来。\n\n谈，修补，留在桌子上：这是我相信的路。',
        en: 'Why would I not join the cry for independence? Let me give you my reasons.\n\nFirst, I thought talking with Britain was far better business than fighting it. Britain had the strongest army and navy in the world. Militia thrown together, going head to head with that, would most likely lose, and losing meant much blood.\n\nSecond, staying within the British empire brought solid benefits to a man of trade: the protection of the British navy, access to Britain\'s great markets. Break away, and all of that was gone.\n\nThird, and this was my deepest worry: would the men who cried "liberty" loudest, once they seized power, truly be more reasonable, more free, than the king? I doubted it. Revolutions often drive out one ruler only to set up another, and sometimes the new one is harsher.\n\nDo you see? It was not that I did not love this land. I did. It was because I loved it that I was afraid, afraid that a war would smash a good home to pieces and, in the end, win nothing.\n\nTalk, mend, stay at the table: that was the road I believed in.',
      },
      deliverGoal: 'N3 setup — Loyalist 三条道理 (① 谈比打划算/英军最强硬碰多半输流血 ② 留帝国有实利/海军保护+大市场 ③ 怕喊自由最凶的人夺权后未必更讲理/革命常换一批更狠的统治者) + 「正因为爱这片土地才怕打烂家园换不来什么」+ 「谈/修补/留桌上是我信的路」',
      engagementHook: '我怕的是：喊「自由」喊得最凶的人夺了权，未必比国王更讲理。你觉得「推翻坏的」就一定换来「更好的」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1776 年，独立宣言出来了。你的镇子，几乎一夜之间分成了两半。\n\n支持独立的邻居们，组织起了民兵和「安全委员会」。他们开始挨家挨户地问：你站哪边？\n\n问到你了。你心里清楚自己的立场：你不想独立。可你也清楚，说出来是什么后果。\n\n说真话——「我效忠英王」——你会立刻成为镇上的公敌。轻则被骂作叛徒、被抄家、被孤立；重则被拖去游街、被涂上滚烫的柏油再粘满羽毛（tarring and feathering），那是会要命的私刑。\n\n说假话——昧着良心喊「独立万岁」——你保住了眼前，可你背叛了自己真心相信的东西。\n\n或者沉默——什么也不表态——可在那个年头，沉默本身就被当成不忠。\n\n你怎么选？说真话、说假话，还是沉默？每一条，都有代价。',
        en: 'Now you are me.\n\nIn 1776 the Declaration came out. Your town split in two almost overnight.\n\nThe neighbors who backed independence organized militias and "committees of safety." They began going house to house, asking: which side are you on?\n\nThey come to you. You know your own stand: you do not want independence. But you also know what saying so will cost.\n\nTell the truth, "I am loyal to the king," and you become the town\'s public enemy at once. At the least, called a traitor, your house ransacked, you shunned; at the worst, dragged through the streets, coated in scalding tar and stuck all over with feathers, a mob justice that could kill.\n\nTell a lie, cry "long live independence" against your conscience, and you save the moment but betray what you truly believe.\n\nOr stay silent, take no side at all. But in those years, silence itself was taken for disloyalty.\n\nWhich do you choose? Truth, a lie, or silence? Each one carries a price.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1776 宣言后镇子一夜分两半 + Patriot 邻居组民兵/安全委员会挨家问「你站哪边」+ 问到你 + 三条路三种代价 (说真话成公敌被抄家/tarring and feathering 私刑 vs 说假话保眼前背叛信念 vs 沉默被当不忠) + 你怎么选',
      engagementHook: '说真话被当叛徒抄家私刑，说假话背叛自己,沉默也算不忠。三条路都有代价——你会选哪条?',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了不说假话。我没大声反对独立，但我也不肯昧着良心喊口号。\n\n这在那个年头，已经够我倒霉了。\n\n革命一打起来，我们这些被认定「不忠」的人，日子就到头了。各州通过法律，没收保皇派的财产、土地、房子。我家几代人攒下的东西，被「合法」地拿走，分给了支持革命的人。\n\n我想过当那个「居中调停」的人。我去劝那些激进的邻居：咱们能不能别打了，坐下来跟英国谈？\n\n结果两头不讨好。在独立派眼里，我是「英国的走狗」；可在真正的英国官员眼里，我又只是个不够铁杆、靠不住的殖民地土人。\n\n这就是我们这种人的处境：你想当那个「让大家别撕破脸」的人，可一旦两边都红了眼，中间地带就消失了。站中间的人，被两边一起踩。\n\n夹在中间最难。不是因为你没立场，是因为你的立场，两边都不要。',
        en: 'I chose not to lie. I did not loudly oppose independence, but neither would I shout slogans against my conscience.\n\nIn those years, that alone was enough to doom me.\n\nOnce the war was on, those of us judged "disloyal" were finished. The states passed laws to confiscate Loyalists\' property, land, and houses. What my family had saved over generations was "lawfully" taken and handed to those who backed the revolution.\n\nI tried to be the one in the middle. I went to my radical neighbors and urged them: can we stop fighting, sit down, and talk with Britain?\n\nIt pleased no one. In the eyes of the independence men I was "Britain\'s lapdog"; in the eyes of the real British officials I was only a colonial native, not staunch enough, not to be relied on.\n\nThis is the place people like me stood: you want to be the one who keeps everyone from a final break, but once both sides see red, the middle ground vanishes. The one standing in the middle is trampled by both.\n\nThe middle is the hardest place. Not because you have no position, but because your position is wanted by neither side.',
      },
      deliverGoal: 'N5 story — Loyalist 不说假话 + 革命中「不忠」者日子到头 (各州立法没收保皇派财产土地分给 Patriot) + 想当调停者去劝激进邻居跟英国谈 + 两头不讨好 (独立派眼里英国走狗/英国官员眼里不够铁杆靠不住殖民地土人) + 「两边红眼中间地带消失/站中间被两边踩」+ 「立场两边都不要」',
      engagementHook: '我想当那个「让大家别撕破脸」的人,结果两边都把我当敌人。当所有人都站队,「中间」这个位置还存在吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得跟你说一件事——它让我对「这场革命到底为了谁的自由」彻底糊涂了。\n\n1775 年 11 月，英国派驻弗吉尼亚的总督 Dunmore（邓莫尔勋爵）发了一份宣言：凡是反叛者名下的被奴役者，只要逃出来加入英军，就能获得自由。\n\n你想想这有多讽刺。我那些喊「自由」喊得最响的独立派邻居，很多人自己就蓄奴。而真正给被奴役者开出「自由」这张支票的，是他们要反抗的那个英国。\n\n后来，数以万计的被奴役者冒死投奔英军这边。对他们来说，「保皇」不是因为爱英王，是因为英国那边，有他们唯一够得着的一线自由。\n\n所以你看，「保皇」这一边，从来不是铁板一块。有我这种舍不得跟祖国决裂的老派人，也有为了挣脱锁链、把希望押在英军身上的被奴役者。\n\n同一个词——「自由」。独立派用它脱离英国；被奴役者用它脱离独立派。我夹在最中间，两个「自由」都不完全属于我。\n\n（被奴役者那一边的「自由」是什么滋味，你换到他们那一遍，会亲眼看见。）',
        en: 'I must tell you a thing that left me wholly confused about whose liberty this revolution was for.\n\nIn November 1775, Britain\'s royal governor of Virginia, Lord Dunmore, issued a proclamation: any enslaved person belonging to a rebel who fled and joined the British army would be granted freedom.\n\nThink how bitter the irony. Many of my independence neighbors who cried "liberty" loudest were themselves slaveholders. And the one who actually wrote the check of "freedom" to the enslaved was the very Britain they meant to resist.\n\nLater, tens of thousands of enslaved people fled at the risk of death to the British side. For them, to side with the king was not love of the king. It was that on Britain\'s side lay the one thread of freedom within their reach.\n\nSo you see, the "Loyalist" side was never one solid block. There were old-fashioned men like me, unwilling to break with the homeland, and there were enslaved people staking their hope on the British army to throw off their chains.\n\nThe same word, "liberty." The independence men used it to break from Britain; the enslaved used it to break from the independence men. I stood square in the middle, and neither "liberty" wholly belonged to me.\n\n(What that freedom tasted like on the enslaved people\'s side, you will see for yourself when you switch to their pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Lord Dunmore\'s Proclamation 1775.11 (投英军被奴役者获自由) + 讽刺: 喊自由最响的独立派邻居很多自己蓄奴/真给被奴役者开自由支票的是他们要反抗的英国 + 数万被奴役者冒死投英军 (保皇非爱英王是唯一够得着的一线自由) + 「保皇方不是铁板一块: 老派人 vs 押希望在英军的被奴役者」+ 跨 lens 对位 (同一个「自由」: 独立派脱离英国 vs 被奴役者脱离独立派/Loyalist 夹中间) + 桥到 enslaved lens',
      engagementHook: '喊「自由」最响的独立派邻居,很多自己就蓄奴;而真给被奴役者开「自由」支票的,是他们要反抗的英国。同一个「自由」,怎么会站到了相反的阵营?',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1781 年 Yorktown（约克镇）一役，英军主力投降。我心里那点「也许还能谈回去」的指望，彻底碎了。\n\n仗输了。对我们保皇派来说，输的不只是一场战争，是整个未来。\n\n1783 年《巴黎和约》签订，英国承认美国独立。和约里有一条，说新政府「应当」归还没收保皇派的财产。可这只是一句空话，各州根本不执行。我家被拿走的东西，再也没还回来。\n\n留下，意味着在一个把你当过叛徒的国家里，低头过下半辈子。\n\n于是，我们当中有六万到十万人，选择了离开——这是个估计数，但规模是惊人的。我们抛下房子、土地、祖坟，坐船去了加拿大，去了英国，去了加勒比。一辈子的根，连根拔起。\n\n而那些投奔英军的被奴役者里，有一批人，英国履行了承诺，把他们撤到了加拿大新斯科舍（Nova Scotia），还有人后来去了非洲的塞拉利昂。我们这些「失败者」，各自漂向了世界不同的角落。',
        en: 'In 1781, at Yorktown, the main British army surrendered. The faint hope in me that we might yet talk our way back was shattered for good.\n\nThe war was lost. For us Loyalists, what was lost was not only a war. It was the whole future.\n\nIn 1783 the Treaty of Paris was signed and Britain recognized American independence. One clause said the new government "should" return confiscated Loyalist property. But it was only empty words; the states simply did not carry it out. What was taken from my family was never returned.\n\nTo stay meant bowing my head for the rest of my life in a country that had branded me a traitor.\n\nAnd so, sixty to a hundred thousand of us chose to leave. The figure is an estimate, but the scale was staggering. We abandoned houses, land, and the graves of our fathers, and took ship for Canada, for Britain, for the Caribbean. A lifetime\'s roots, torn out whole.\n\nAnd among the enslaved who had fled to the British, a number were kept faith with: Britain evacuated them to Nova Scotia in Canada, and some later went on to Sierra Leone in Africa. We "losers" drifted off, each to a different corner of the world.',
      },
      deliverGoal: 'N7 story — 1781 Yorktown 英军主力投降「谈回去」指望碎 + 1783 Treaty of Paris 归还保皇派财产条款是空话各州不执行 + 留下=在当你叛徒的国家低头过下半辈子 + 6 万到 10 万 (估计数) Loyalist 离开 (抛房子土地祖坟去加拿大/英国/加勒比) + 投英军被奴役者中一批被英国撤到 Nova Scotia/后到 Sierra Leone + 「失败者各漂向世界不同角落」',
      engagementHook: '六万到十万人抛下房子、土地、祖坟,连根拔起漂向别的大陆——只因为他们站错了「赢的那一边」。输掉的一方,该不该被这样彻底抹掉?',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我走了以后，慢慢明白了一件最难咽下去的事：我不只是输了，我还被「消失」了。\n\n胜利者写历史。在他们写的故事里，这场革命是「全体美国人民，众志成城，反抗暴君英王」。\n\n这个故事里，没有我的位置。\n\n它不会告诉你：当年有差不多三分之一的殖民者，根本不想独立。它不会告诉你：很多家庭因为站边不同，父子反目、兄弟成仇。它不会告诉你：有六万到十万人，因为输了，被赶出了这个国家。\n\n这些都被一句「人民选择了自由」轻轻盖过去了。\n\n你得明白一件事：历史里那个「全体人民」，往往是后来胜利者拼出来的。真实的当年，从来没有「全体一条心」。有支持的，有反对的，有中立的，有像我这样，真心想修补、却被两边一起碾碎的。\n\n输家不会写回忆录。就算写了，也没人愿意读。所以你在课本里看不见我们。不是我们不存在，是我们被赢家的笔，悄悄擦掉了。',
        en: 'After I left, I came slowly to understand the hardest thing to swallow: I had not only lost, I had been "disappeared."\n\nThe victors write history. In the story they wrote, this revolution was "the whole American people, of one will, rising against the tyrant king."\n\nIn that story there is no place for me.\n\nIt will not tell you that nearly a third of the colonists did not want independence at all. It will not tell you that many families fell out over which side to take, father against son, brother against brother. It will not tell you that sixty to a hundred thousand people, because they lost, were driven out of this country.\n\nAll of it is lightly covered over by the line "the people chose freedom."\n\nYou must understand one thing: that "whole people" in history is often pieced together later by the victors. The real time had no "all of one heart." There were the for, the against, the neutral, and those like me who sincerely wished to mend and were ground to pieces by both sides.\n\nThe losers do not write memoirs. And if they did, no one would care to read them. So you do not see us in the textbooks. It is not that we did not exist. It is that we were quietly rubbed out by the winners\' pen.',
      },
      deliverGoal: 'N8 story — Loyalist 走后明白「不只输了还被消失」+ 胜利者写历史 (故事=全体美国人民众志成城反暴君/没他位置) + 这故事不告诉你的 (约 1/3 不想独立/家庭父子兄弟反目/6-10 万被赶出) 被「人民选择了自由」盖过 + 「历史里全体人民是胜利者后来拼出来的/真实当年从无全体一条心」+ 「输家不写回忆录/被赢家的笔擦掉」',
      engagementHook: '课本里写「全体人民选择了自由」,可那个「全体人民」是赢家后来拼出来的。当历史只剩赢家的版本,我们怎么知道少了谁的声音?',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这辈子的结局，是在异乡。可我想留给你一个，比我个人命运更大的问题。\n\n那些撤到加拿大的保皇派，后来在那片土地上重新扎了根。今天加拿大那种「不闹革命、靠谈判一点点走向独立」的政治传统，有一部分，就来自我们这些不肯跟英国决裂的人。同一个英帝国，北边的殖民地走了一条完全不同的路：不流血，慢慢谈。\n\n你看出来了吗？「跟英国彻底决裂」不是唯一的活法。隔壁加拿大证明了：还有另一条路，可以走通。\n\n我不是说独立错了。美国独立确实开创了一个新国家，影响了全世界。我只是想让你知道：历史不是「只有一条正确的路，其他都是错的」。\n\n在每一个被后人讲成「理所当然」的转折点上，当年其实都站着一群人，认真地、真诚地，相信另一条路。他们后来输了，所以他们的路，被讲成了「错的」。\n\n可输了，不等于当初就一定错。',
        en: 'My life ended in a foreign land. But I want to leave you a question larger than my own fate.\n\nThe Loyalists who were evacuated to Canada later put down roots in that land. Today Canada\'s political tradition, of reaching independence not by revolution but by negotiation, step by step, comes in part from us, the people who would not break with Britain. Out of the same British empire, the colonies to the north took a wholly different road: no bloodshed, slow talk.\n\nDo you see? "A clean break with Britain" was not the only way to live. Canada next door proved another road could be walked.\n\nI do not say independence was wrong. American independence did found a new nation and shaped the whole world. I only want you to know: history is not "only one correct road, and all others wrong."\n\nAt every turning point that later generations tell as "a matter of course," there in fact stood a group of people who earnestly, sincerely believed in another road. They lost in the end, and so their road was told as "the wrong one."\n\nBut to lose is not the same as to have been wrong from the start.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Loyalist 异乡结局 + 撤加拿大的保皇派扎根 → 加拿大「不革命靠谈判渐进独立」传统部分来自他们 (同一英帝国北边走不流血慢谈的不同路) + 「彻底决裂不是唯一活法/加拿大证明另一条路走得通」+ 「不是独立错了但历史不是只有一条正确的路」+ 「每个被讲成理所当然的转折点都站着真诚信另一条路的人/输了被讲成错的」+ 「输了不等于当初就错」',
      engagementHook: '隔壁加拿大没流血、靠谈判慢慢走向独立——证明「彻底决裂」不是唯一的活法。一段历史「赢了」,就一定证明它当初是「对的」吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'loy-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是阻挡历史的人，站错了边。一场伟大的革命要诞生，我却拖后腿，想拉着大家留在旧帝国里。结果证明，独立带来了一个影响世界两百多年的新国家。我反对的那件事，是对的。我输了，输得不冤。\n\n另一种说法：我是被胜利者抹掉的那一方，一个有良心的异见者。我不是坏人，我真心怕一场仗打烂家园、怕新主人比旧国王更狠。我想用谈判代替流血，这本身没有错。历史只记住了赢家的版本，把我们这约三分之一的人，连同我们的家、我们的路、我们的理由，一起从故事里删掉了。我的失败，不证明我的担忧是错的。\n\n这两边不是「对错分明」。是同一段历史的两面——有人赢得了一个国家，也有人输掉了全部，还被抹去了名字。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the man who stood in history\'s way, on the wrong side. A great revolution was to be born, and I dragged my feet, trying to hold everyone inside the old empire. It turned out that independence brought forth a new nation that shaped the world for over two centuries. The thing I opposed was right. I lost, and I deserved to lose.\n\nThe other view: I was the side the victors erased, a dissenter with a conscience. I was no villain. I truly feared a war would smash our homes, feared the new masters would be harsher than the old king. I wished to put negotiation in the place of bloodshed, and there was nothing wrong in that. History kept only the winners\' version, and deleted us, that near-third of the people, along with our homes, our road, and our reasons, from the story. My defeat does not prove my fears were wrong.\n\nThese are not "right and wrong, clear-cut." They are two faces of one history. Some won a nation, and some lost everything and had their names rubbed out as well.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (阻挡历史站错边/拖后腿想留旧帝国/独立证明对的/输得不冤) / 另一种说法 (被胜利者抹掉的有良心异见者/不是坏人真怕打烂家园+新主人更狠/想谈判代替流血没错/历史只记赢家版本删掉约 1/3 人/失败不证明担忧错) / 同一段历史两面 (有人赢国家有人输全部还被抹名) / 想 30 秒',
      engagementHook: '站错边的人,和被胜利者抹掉的异见者——是同一个我。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'loy-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个普通人，在所有人都往一个方向跑的时候，没跟着跑；他真心相信谈判好过流血、修补好过决裂，结果输掉了财产、家园、祖坟，还被胜利者从历史里抹掉。他是个站错边的绊脚石，还是一个该被听见的异见者？你怎么评？\n\n再想一步。今天你身边，有没有这样的时候：一群人都认定了一件事、都往一个方向冲，而你心里其实有点不一样的想法——但你怕被孤立，怕被当成「那个不合群的人」，就把话咽了回去？\n\n那时候，你会怎么做？你会为了不被孤立，跟着喊大家都在喊的口号吗？还是会留住自己那点不一样，哪怕代价是，你成了人群里那个没跟着跑的人？\n\n还有一件事别忘了：下次你读到一段「全体人民众志成城」的历史，记得多问一句——那个「全体」里，到底是不是真的有所有人？有没有谁，被悄悄留在了门外？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nAn ordinary man who, when everyone ran one way, did not run with them; who sincerely believed talk was better than blood, mending better than breaking, and who lost his property, his home, the graves of his fathers, and was rubbed out of history by the victors. Was he a stumbling block on the wrong side, or a dissenter who deserved to be heard? How do you judge it?\n\nThen take one more step. In your own life today, is there ever such a time: a crowd has fixed on one thing and rushes one way, and you in fact hold a slightly different thought inside, but you fear being shut out, fear being taken for "the one who does not fit in," and so you swallow your words?\n\nWhen that happens, what will you do? To avoid being shut out, will you shout the slogan everyone is shouting? Or will you keep your own small difference, even at the price of becoming the one in the crowd who did not run with them?\n\nAnd one thing more, do not forget: next time you read a history of "the whole people, of one will," remember to ask one more question, was there really everyone in that "whole"? Was anyone quietly left outside the door?',
      },
      deliverGoal: 'N11 close — 评价一个人 (所有人往一个方向跑时没跟/信谈判好过流血/输掉财产家园祖坟被抹掉 → 站错边绊脚石 vs 该被听见的异见者) + transfer「今天你身边一群人都往一个方向冲而你心里不一样却怕被孤立咽回话」+ 你会跟着喊大家都喊的口号还是留住不一样哪怕成没跟着跑的人 + 「下次读全体人民众志成城多问一句那全体里真有所有人吗/谁被留门外」',
      engagementHook: '他没跟着人群跑,输掉一切还被历史抹去。你会怎么评价这样一个人?今天那个「大家都往一个方向冲」的时刻,你会跟着喊,还是留住自己那点不一样?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: An Enslaved Person (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var enslavedPersonLens = {
  id: 'enslaved-person-receiving-end',
  name: 'An Enslaved Person',
  nameCn: '一个被奴役的人',
  role: 'receiving-end',
  perspectiveTag: 'whose-liberty',
  icon: '⛓️',
  description: {
    cn: '一个被奴役的人，活在一场所有人都在喊「自由」的革命里。喊得最响的那些主人，名下就有像他这样的人。1775 年冬天，一个消息传进奴隶的屋子：英国总督说，逃去英军那边，就给你自由。一边是写「人人平等」却把你当财产的主人，一边是你要反抗、却向你伸出手的敌人。这一遍，你站在那场革命本来没打算解放的人这里，去掂量一个词——自由——对你到底意味着什么。',
    en: 'An enslaved person, alive inside a revolution where everyone is crying "liberty." The masters who cried it loudest held people like him as property. In the winter of 1775 a word reached the slave quarters: the British governor said, flee to the British side and you will be given your freedom. On one hand, a master who wrote "all men are equal" yet held you as property; on the other, an enemy you were meant to resist, holding out a hand. This pass puts you with the people that revolution never planned to free, weighing what one word, liberty, truly means to you.',
  },
  storyboard: [
    {
      id: 'ens-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '整个 1776 年，我身边的人都在说同一个词。\n\n自由。自由。自由。\n\n他们说，英王对他们太狠了，管得太死了，所以他们要起来反抗，要做自由的人。\n\n说这些话的，是我的主人，和他那些来做客的朋友。我端着盘子，站在他们桌边，一个字一个字听进去。\n\n他们口口声声的「自由」，听起来那么神圣、那么值得拼命。\n\n可我心里冒出一个他们从没想过的问题：你们喊自由喊得这么响——那我呢？我站在你们身边，给你们端茶倒水，我连自己的身体都不属于我。你们要的「自由」里，有没有我这一份？\n\n这一遍，你站在我这里。不是从写「人人平等」的那只手那边看，是从那句话本来没打算算进去的人这边看。',
        en: 'All through 1776, the people around me were saying the same word.\n\nLiberty. Liberty. Liberty.\n\nThey said the king was too harsh with them, ruled them too tightly, and so they would rise and resist, and be free men.\n\nThe ones saying it were my master, and the friends who came to visit. I stood by their table with a tray, taking it in word by word.\n\nThe "liberty" forever on their lips sounded so holy, so worth dying for.\n\nBut a question rose in me that they had never once thought of: you cry liberty so loud, and what about me? I stand at your side, pour your tea, and I do not even own my own body. In the "liberty" you want, is there any share for me?\n\nThis pass puts you where I stand. Not from the side of the hand that wrote "all men are equal," but from the side of the people that line never planned to count in.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 1776 身边人都喊「自由」+ 主人和来客说英王太狠要反抗做自由人 + 被奴役者端盘子站桌边字字听进 + 「自由」听起来神圣值得拼命 + 冒出问题: 你们喊自由这么响那我呢/连身体都不属于我/你们的自由里有没有我这份 + 这一遍从那句话没打算算进去的人看',
      engagementHook: '他们喊「自由」喊得那么响,可我连自己的身体都不属于我。你能想象「听别人为自由拼命,而你自己不算在内」是什么滋味吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子，你才懂后来那个选择对我意味着什么。\n\n我属于一个种植园主。在他家的账本上，我不是一个人，是一笔财产，跟牲口、农具记在一起。我没有姓，没有工钱，没有「不去」的权利。天不亮就下地，天黑了还在干。我的孩子，生下来就是主人的财产，主人随时可以把他们卖掉，卖到我永远见不到的地方。\n\n我不识字。可我有耳朵。这些年，主人和客人在饭桌上谈的，全是「权利」「自由」「人不该被人统治」。那时候正闹着要跟英国分家。\n\n你想想这有多奇怪：一群自己手里攥着几十、上百个奴隶的人，坐在一起，慷慨激昂地谈论「被奴役是多么不可忍受」。\n\n他们说的「奴役」，是指英王收他们的税。\n\n而我身上这副真正的枷锁，他们端着酒杯，看都不看一眼。',
        en: 'First, let me tell you my daily life, so you understand what that later choice meant to me.\n\nI belonged to a plantation owner. In his ledger I was not a person but property, set down with the livestock and the tools. I had no surname, no wages, no right to refuse. Into the fields before dawn, still working after dark. My children, born into it, were the master\'s property, and he could sell them at any time, to a place I would never see again.\n\nI could not read. But I had ears. For years, what the master and his guests talked of at the table was all "rights," "liberty," "no man should be ruled by another." It was the time of the quarrel over splitting from Britain.\n\nThink how strange it was: a group of men each holding dozens, even hundreds, of slaves, sitting together, talking with high passion of "how unbearable it is to be enslaved."\n\nThe "enslavement" they meant was the king taxing them.\n\nAnd this real chain on my body, they raised their wine cups and did not give it a single glance.',
      },
      deliverGoal: 'N2 setup — 被奴役者每天日子 (属种植园主/账本上是财产跟牲口农具记一起/无姓无工钱无拒绝权/天不亮下地/孩子生来是主人财产可被卖走) + 不识字但有耳朵 + 主人客人谈权利自由「人不该被人统治」闹分家 + 「攥着上百奴隶的人慷慨谈被奴役多不可忍/他们的奴役指英王收税」+ 「我身上真枷锁他们看都不看」',
      engagementHook: '攥着上百个奴隶的人,慷慨激昂地谈「被奴役多么不可忍受」——他们说的「奴役」是英王收税,而我身上真正的枷锁,他们看都不看。这种对比,你怎么想?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '你别以为我们被奴役的人，就只会低头认命。\n\n我们一直在反抗，只是用你在课本里看不到的方式。\n\n有人干活故意磨洋工，有人把农具「不小心」弄坏，有人装病。这些都是反抗，是在主人看不见的地方，一点一点偷回一点点属于自己的东西。\n\n胆子大的，跑。往北跑，往沼泽里跑，往森林里跑。被抓回来，是往死里打，可还是有人一次次地跑。\n\n也有人攒着更大的念头。就在 1776 年前后，有人在悄悄传一个想法：这帮白人主人，自己正忙着跟英国打仗呢。他们后院起火，顾不过来。这会不会，正是我们的机会？\n\n我心里那个念头，藏了很久。它不是「认命」，是「等」。等一个缝隙，一个能让我从「财产」变回「人」的缝隙。\n\n我还不知道，这个缝隙，很快就要从一个我做梦都想不到的方向，裂开了。',
        en: 'Do not imagine that we, the enslaved, only bowed our heads and accepted our lot.\n\nWe resisted all along, only in ways you do not see in the textbooks.\n\nSome worked slow on purpose; some "accidentally" broke the tools; some feigned sickness. These were resistance, stealing back, little by little, in the places the master could not see, a little of what was our own.\n\nThe bolder ones ran. North, into the swamps, into the forests. Caught and dragged back, they were beaten near to death, and still some ran, again and again.\n\nAnd some held a larger thought. Right around 1776, a notion passed quietly: these white masters are busy fighting Britain themselves. Their own backyard is on fire; they cannot watch everything. Might this be exactly our chance?\n\nThe thought I held was hidden a long time. It was not "accept your lot." It was "wait." Wait for a crack, a crack that could turn me from "property" back into a "person."\n\nI did not yet know that crack was about to open, very soon, from a direction I could never have dreamed.',
      },
      deliverGoal: 'N3 setup — 被奴役者不只低头认命/一直反抗只是课本看不到的方式 (磨洋工/弄坏农具/装病=偷回属于自己的/胆大的跑往北沼泽森林/抓回往死打仍一次次跑) + 1776 前后悄悄传的念头 (白人主人忙着跟英国打仗后院起火顾不过来/这是不是我们的机会) + 「我的念头藏很久不是认命是等一个能从财产变回人的缝隙」+ 伏笔缝隙将从想不到的方向裂开',
      engagementHook: '主人们忙着跟英国打仗,后院起火——这会不会正是我们的机会?当压迫你的人自己陷入麻烦,你会等一个缝隙,还是不敢动?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1775 年冬天，一个消息，像火一样在奴隶的屋子之间悄悄传开。\n\n英国派驻弗吉尼亚的总督 Dunmore（邓莫尔勋爵）发了一份宣言：凡是反叛者名下的被奴役者，只要逃出来、加入英军这一边，就给你自由。\n\n你站在那儿，心脏狂跳。自由。这两个字，头一回不是主人嘴里那种空话，是冲着你来的、一张真的支票。\n\n可你立刻明白，这一步有多险。\n\n投奔英军，你得先逃出种植园——被抓回来，是当众毒打，甚至处死。路上有追兵、有猎奴犬。就算你跑到了英军那边，他们会不会真的兑现承诺？还是把你当炮灰、当苦力？谁也不敢保证。\n\n而且，给你「自由」的，是你主人正在拼死反抗的那个英国。你要伸手去抓自由，就得站到「敌人」那一边。\n\n你怎么选？留下，继续当一辈子的财产；还是赌上命，逃向那个开出自由支票的敌人？',
        en: 'Now you are me.\n\nIn the winter of 1775 a word passed quietly, like fire, from one slave quarter to the next.\n\nBritain\'s royal governor of Virginia, Lord Dunmore, had issued a proclamation: any enslaved person belonging to a rebel who fled and joined the British side would be given his freedom.\n\nYou stand there, your heart pounding. Freedom. For the first time those words are not the master\'s empty talk, but a real check, made out to you.\n\nBut you see at once how dangerous the step is.\n\nTo reach the British you must first flee the plantation, and caught and dragged back means a public beating, even death. On the road there are pursuers and slave-hunting dogs. And even if you reach the British, will they truly keep the promise? Or use you as cannon fodder, as labor? No one can swear to it.\n\nAnd the one offering you "freedom" is the very Britain your master is fighting to the death to resist. To reach out for freedom, you must stand on the "enemy\'s" side.\n\nWhich do you choose? Stay, and be property your whole life; or stake your life and flee to the enemy who wrote the check of freedom?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1775 冬 Dunmore 宣言像火在奴隶屋子间传 (投反叛者名下被奴役者逃出加入英军即获自由) + 头一回「自由」不是空话是冲你来的真支票 + 险 (逃出种植园被抓回毒打甚至处死/追兵猎奴犬/英军未必兑现可能当炮灰苦力) + 给你自由的是主人拼死反抗的英国/要抓自由得站敌人那边 + 你怎么选 (留下当一辈子财产 vs 赌命逃向开自由支票的敌人)',
      engagementHook: '给你「自由」的,是你主人正拼死反抗的敌人。要抓住自由,你就得站到「敌人」那一边。这一步,你敢不敢赌上命去迈?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我跑了。还有成千上万的人，做了和我一样的选择。\n\n这不是个别人的一时冲动。整场革命打下来，逃向英军这边的被奴役者，数以万计——这是历史学家从各种记录里估出来的，具体数字今天也说不准，但规模大到改变了战争。\n\n你想想这个画面：一群高喊「自由」、要脱离英国的奴隶主，他们的奴隶，正成群结队地、用脚投票，逃向英国那一边。\n\n这是对「人人生而平等」最响亮的一记耳光。因为最该相信这句话的人——被奴役者——用行动告诉所有人：你们说的那个「自由」，我们看得很清楚，它从一开始就没打算给我们。所以我们去别处找。\n\n有人成功了，加入了英军，有的组成了「埃塞俄比亚军团」，军服上绣着一句话：「奴隶得自由」（Liberty to Slaves）。\n\n你看，同样四个字「自由」，我主人绣在反抗英国的旗子上，我把它绣在投奔英国的军服上。一个词，两个相反的方向。',
        en: 'I ran. And tens of thousands more made the same choice I did.\n\nThis was no single man\'s passing impulse. Across the whole revolution, the enslaved who fled to the British side numbered in the tens of thousands. Historians estimate it from scattered records, and the exact figure cannot be told for certain even today, but the scale was large enough to change the war.\n\nPicture it: a set of slaveholders crying "liberty," bent on breaking from Britain, while their slaves, in droves, voted with their feet and fled to Britain\'s side.\n\nIt was the loudest slap in the face that "all men are created equal" could receive. Because the people who most should have believed that line, the enslaved, told everyone by their action: that "liberty" of yours, we see it clearly, it never meant to be given to us. So we go elsewhere to find it.\n\nSome succeeded and joined the British, and a number formed the "Ethiopian Regiment," with a line stitched on their uniforms: "Liberty to Slaves."\n\nYou see, the same word, "liberty." My master stitched it on the banner of resistance to Britain; I stitched it on the uniform of flight to Britain. One word, two opposite directions.',
      },
      deliverGoal: 'N5 story — 被奴役者跑/成千上万人同样选择 + 数以万计逃向英军 (历史学家从记录估出/具体数字说不准但规模大到改变战争) + 画面: 喊自由要脱英的奴隶主/他们的奴隶成群用脚投票逃向英国 + 「对人人平等最响亮的耳光: 最该信这句话的人用行动说那自由从没打算给我们去别处找」+ Ethiopian Regiment 军服绣「Liberty to Slaves 奴隶得自由」+ 同样「自由」主人绣反抗旗子/我绣投奔军服 一词两个相反方向',
      engagementHook: '奴隶主把「自由」绣在反抗英国的旗子上,我们把「自由」绣在投奔英国的军服上。同一个词,我们用它走向了相反的方向——你觉得哪一边更配得上这个词?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，把镜头转回费城那间屋子。\n\n1776 年夏天，一个叫 Jefferson（杰斐逊）的人，正在那儿写独立宣言。他写下了那句话：「人人生而平等。」\n\n你知道这个人是谁吗？他自己的庄园里，有约 200 个被奴役的人。他写「人人平等」的时候，伺候他的，没有一个是自由的。\n\n他甚至在草稿里写过一段，骂英王把奴隶贸易强加给殖民地。可南方那些蓄奴的代表不答应，他就把那段删了。\n\n你听清楚这意味着什么：那句「人人生而平等」，从落笔的第一刻起，就不包括我。写它的人，亲手把我们从这句话里删掉了。\n\n同一个词——「自由」「平等」。他在费城用它来争取脱离英国；而我，用我的脚、我冒死的逃亡，去够另一个方向的它。\n\n这就是为什么我说：你要从「这句话本来没打算算进去的人」这边，看这场革命。\n\n（这句话的执笔人，自己怎么想、怎么为自己辩护，你换到他那一遍，会亲耳听见。）',
        en: 'Now turn the lens back to that room in Philadelphia.\n\nIn the summer of 1776 a man named Jefferson was there, writing the Declaration of Independence. He set down the line: "all men are created equal."\n\nDo you know who this man was? On his own plantation were about two hundred enslaved people. When he wrote "all men are equal," not one of those who waited on him was free.\n\nHe had even written a passage in his draft condemning the king for forcing the slave trade on the colonies. But the slaveholding delegates of the South would not allow it, and so he cut it.\n\nHear clearly what this means: that line, "all men are created equal," from the first stroke of the pen, did not include me. The man who wrote it cut us out of the line with his own hand.\n\nThe same word, "liberty," "equality." In Philadelphia he used it to win a break from Britain; and I, with my feet, with my flight at the risk of death, reached for it in the other direction.\n\nThis is why I say: look at this revolution from the side of the people this line never planned to count in.\n\n(How the author of the line thought, and how he defended himself, you will hear for yourself when you switch to his pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 镜头转回费城 1776 夏 Jefferson 写独立宣言「人人生而平等」+ 他庄园约 200 被奴役者/写时伺候他的没一个自由 + 草稿骂英王奴隶贸易段被南方逼删 + 「那句话从落笔第一刻就不包括我/写它的人亲手删掉我们」+ 跨 lens 对位 (同一个「自由/平等」: 他在费城争脱英 vs 我用脚冒死逃亡够另一方向的它) + 桥到 jefferson lens (执笔人怎么辩护)',
      engagementHook: '写「人人生而平等」的人,庄园里有约 200 个被奴役的人,还亲手删掉了草稿里骂奴隶制那段。那句话从落笔第一刻,就没打算包括我。你怎么看待一句「把作者自己都打脸」的话?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实告诉你结局，它不像电影那样痛快。\n\n投奔英军的我们，命运五花八门。英国并不是真心要解放奴隶，它只是想用「给奴隶自由」这一招，去削弱反叛的殖民者——这是一步军事棋，不是一份善心。\n\n我们当中，有人在军营里死于疾病（那几年天花横行，营地里成片地死）。有人被英军当苦力使唤。还有人，在战争混乱中，被英国人转手又卖回了奴隶制——给了自由，又夺走。\n\n但也有人，英国守住了承诺。1783 年英国战败撤退时，带走了一批获得自由的黑人，把他们撤到了加拿大的新斯科舍（Nova Scotia）。后来其中一些人，又远渡重洋，去了非洲的塞拉利昂（Sierra Leone），在那里建起自己的社区。\n\n你看，我赌的这一把，有人赢了，有人输得很惨。\n\n但请你记住一件事：无论结局如何，我们用行动证明了一件事——我们从来不是被动等着别人来「解放」的财产。一有缝隙，我们自己就去够那个词：自由。',
        en: 'I must tell you the ending honestly; it is not as satisfying as a film.\n\nFor those of us who fled to the British, the fates were of every kind. Britain did not truly mean to free the slaves. It only used the move of "freedom to slaves" to weaken the rebel colonists, a piece in a military game, not an act of mercy.\n\nAmong us, some died of disease in the camps (smallpox raged those years, and they died in swathes). Some were worked as laborers by the British. And some, in the chaos of war, were sold by the British back into slavery, given freedom and then robbed of it.\n\nBut for some, Britain kept its word. When Britain lost and withdrew in 1783, it took away a body of freed Black people and evacuated them to Nova Scotia in Canada. Later some of them crossed the ocean again to Sierra Leone in Africa, and built their own community there.\n\nYou see, the gamble I made, some won it, and some lost it bitterly.\n\nBut remember one thing: whatever the ending, by our action we proved one thing, we were never property waiting passively to be "freed" by others. The moment there was a crack, we ourselves reached for the word: liberty.',
      },
      deliverGoal: 'N7 story — 投英军结局不痛快 (英国非真心解放/「给奴隶自由」是削弱反叛殖民者的军事棋非善心) + 命运五花八门 (军营天花成片死/被当苦力/混乱中被英国转手卖回奴隶制 给了又夺) + 但有人英国守诺 1783 战败撤退带走获自由黑人到 Nova Scotia/后渡海到 Sierra Leone 建社区 + 「我赌的这把有人赢有人输惨」+ 「无论结局我们证明: 从不是被动等解放的财产/一有缝隙自己去够自由」',
      engagementHook: '英国给我们「自由」,不是出于善心,是一步削弱敌人的军事棋。当「解放」只是别人手里的一枚棋子,这份自由,还算自由吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '革命赢了。美国独立了。可对我们被奴役的人来说，这场「自由的革命」，到底带来了什么？\n\n答案很苦：几乎什么都没变。\n\n1783 年战争结束，新生的美国，奴隶制原封不动。北方一些州后来陆续开始废奴，可南方的种植园经济，反而越做越大。那句写在宣言里的「人人生而平等」，墨迹未干，而几十万被奴役的人，继续在棉花田、烟草田里，从天黑干到天亮。\n\n更狠的是：1787 年，这群独立的人坐下来写宪法的时候，把我们这样的人，算成了 3/5 个人——用来给蓄奴州多分政治权重。\n\n你听清楚这个数字：3/5 个人。\n\n一场打着「自由」「平等」旗号的革命，胜利之后，转头把我们写成了「五分之三个人」。\n\n（这笔 3/5 的账是怎么算出来的，你可以去 constitutional-convention 那个 Topic 接着看。）\n\n我们用脚投票、用命去赌的那个「自由」，这个新国家，一点也没打算分给我们。',
        en: 'The revolution won. America was independent. But for us, the enslaved, what did this "revolution of liberty" actually bring?\n\nThe answer is bitter: almost nothing changed.\n\nWhen the war ended in 1783, in the newborn United States slavery stood untouched. Some Northern states later began, one by one, to abolish it, but the plantation economy of the South only grew larger. That line written in the Declaration, "all men are created equal," its ink not yet dry, while hundreds of thousands of enslaved people went on, in the cotton and tobacco fields, working from dark to dawn.\n\nHarsher still: in 1787, when this band of independent men sat down to write a constitution, they counted people like us as three-fifths of a person, to give the slave states more political weight.\n\nHear that number clearly: three-fifths of a person.\n\nA revolution under the banner of "liberty" and "equality," once it won, turned around and wrote us down as "three-fifths of a person."\n\n(How that three-fifths was reckoned, you can go on to see in the constitutional-convention topic.)\n\nThat "liberty" we voted for with our feet and gambled our lives on, this new country had no intention at all of sharing with us.',
      },
      deliverGoal: 'N8 story — 革命赢美国独立但对被奴役者几乎什么都没变 + 1783 战争结束奴隶制原封不动/北方一些州陆续废奴但南方种植园越做越大/「人人生而平等」墨迹未干几十万人继续田里从黑干到亮 + 1787 宪法把我们算 3/5 给蓄奴州多分权重 + 「3/5 个人」+ 跨 Topic 锚 (3/5 怎么算 → constitutional-convention) + 「我们用脚用命赌的自由新国家一点没打算分给我们」',
      engagementHook: '一场打着「自由平等」旗号的革命,赢了之后,转头把我们写成「五分之三个人」。胜利的果实,为什么独独不分给最该得到自由的人?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '但我想告诉你，故事没有停在 3/5 那里。\n\n那句「人人生而平等」，虽然写它的人没打算把我们算进去，可它一旦被白纸黑字写下来，就不再只属于他了。\n\n它成了一颗种子。\n\n几十年后，反对奴隶制的人，举着这句话去攻打奴隶制本身。被奴役者、自由黑人、废奴主义者，一次次回到这句话上，对这个国家说：你建国时说「人人生而平等」——那就请你兑现，把「人人」里的我们，也算进去。\n\n1863 年，内战打到一半，林肯（Lincoln）发布解放宣言；后来宪法加上新的修正案，正式废除奴隶制，写明「法律面前人人平等」。\n\n你看出来了吗？从 1776 年那句空头支票，到这个国家真把我们算成「人」，中间隔着将近 90 年，和一场死了几十万人的内战。\n\n一句话写在纸上很快。让它对我这样的人也算数，要流很多很多的血，要很长很长的时间。',
        en: 'But I want to tell you, the story did not stop at three-fifths.\n\nThat line, "all men are created equal," though the man who wrote it never meant to count us in, once it was set down in black and white, no longer belonged to him alone.\n\nIt became a seed.\n\nDecades later, those who opposed slavery held up this line to attack slavery itself. The enslaved, free Black people, abolitionists, came back to it again and again, telling this country: you said "all men are created equal" at your founding, so make good on it, and count us, too, into the "all."\n\nIn 1863, halfway through the Civil War, Lincoln issued the Emancipation Proclamation; later the Constitution added new amendments, formally abolishing slavery and writing in plainly "equal protection of the laws."\n\nDo you see it? From that empty check of 1776 to the day this country truly counted us as "persons," there lay nearly 90 years, and a civil war in which hundreds of thousands died.\n\nWriting a line on paper is quick. Making it count for people like me takes a very, very great deal of blood, and a very, very long time.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 故事没停在 3/5 + 「人人生而平等」写它的人没打算算我们进去但一旦写下不再只属于他 → 成种子 + 几十年后反奴隶制的人举这句话攻打奴隶制 (被奴役者/自由黑人/废奴主义者回到这句话「请兑现把我们算进人人」) + 1863 Lincoln 解放宣言 + 内战后修正案 (废奴/equal protection) + 「从 1776 空头支票到真把我们算成人隔近 90 年+死几十万的内战」+ 「一句话写下很快让它对我这样的人也算数要流很多血很长时间」',
      engagementHook: '从 1776 那句空头支票,到这个国家真把我们算成「人」,隔着近 90 年和一场死了几十万人的内战。一句话写下很快,让它对每个人都算数,为什么这么难?',
      expectsRealAnswer: false,
    },
    {
      id: 'ens-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那场被叫做「自由革命」的革命，两种说法都站得住。\n\n一种说法：它从头到尾就是个谎。它打着「人人生而平等」的旗号，喊得最响的人自己蓄奴。它没解放我们，反而在 1787 年把我们算成 3/5 个人。给我们开「自由」支票的，不是它，是它要反抗的英国。对我这样的人，这场革命从一开始就没打算把我们算进去。它的「自由」，是主人们的自由。\n\n另一种说法：它是一张当时没兑现、却终将被讨回的支票。它写下的「人人生而平等」，在 1776 年对我是空话——可这句空话被白纸黑字写下了。我们抓住它，后人靠它废了奴隶制、靠它写进「法律面前人人平等」。它当时没给我们的东西，我们一代代，用它自己的话，一点一点讨了回来。\n\n两种说法都站得住。它既是主人们的谎，也是我们后来讨债的凭据。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the revolution men call a "revolution of liberty." Both views stand.\n\nOne view: it was a lie from beginning to end. It marched under the banner of "all men are created equal," and the men who cried it loudest held slaves themselves. It did not free us; instead, in 1787, it counted us as three-fifths of a person. The one who wrote us the check of "freedom" was not it, but the Britain it meant to resist. For people like me, this revolution never planned to count us in from the start. Its "liberty" was the masters\' liberty.\n\nThe other view: it was a check uncashed at the time, yet one that would in the end be called in. The "all men are created equal" it set down was, in 1776, empty words to me, but those empty words were set down in black and white. We seized them, and later generations used them to abolish slavery, used them to write in "equal protection of the laws." What it did not give us then, we, generation by generation, called back in, bit by bit, with its own words.\n\nBoth views stand. It was the masters\' lie, and it was the note we later used to collect the debt.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (从头到尾是谎/打人人平等旗号喊最响的自己蓄奴/没解放还 1787 算 3/5/开自由支票的是它要反抗的英国/从没打算把我们算进/它的自由是主人们的自由) / 另一种说法 (当时没兑现却终将讨回的支票/1776 对我是空话但被白纸黑字写下/我们抓住后人靠它废奴写进 equal protection/用它自己的话一点点讨回来) / 两种都站得住 既是主人的谎也是讨债凭据 / 想 30 秒',
      engagementHook: '一种说法:它从头到尾是个谎。另一种说法:它是一张终将被讨回的支票。两种说法都站得住,你的 30 秒到了,你怎么看?',
      expectsRealAnswer: true,
    },
    {
      id: 'ens-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一笔账本上的财产，一个端着盘子听别人谈自由的人，一个在 1775 年冬天赌上命逃向敌人的人，一个用脚去够「自由」这个词的人——你会怎么评价这样一场革命？\n\n一场打着「人人平等」旗号的革命，转头把我这样的人算成 3/5。你会说它是个谎，还是说它是一张终将兑现的支票？你怎么评？\n\n不过先记住：你这一遍，听的只是被这场革命挡在门外的人。真正写下「人人平等」的 Jefferson、那个不肯跟英国决裂、最后也输掉一切的保皇派——他们各有各的说法。换个视角再走一遍，你会听见他们怎么为自己辩护，也会看看你刚才的判断，站不站得住。\n\n再想一步：今天你身边，有没有「嘴上说的」和「真实做的」差很远的地方——有人把「我们一视同仁」挂在嘴边，可有些人就是被区别对待；某条规定听上去对所有人都公平，落到某些人头上，味道就全变了。\n\n那时候，你会怎么做？你会像那些喊着自由却看不见我枷锁的人一样，假装没看见？还是会像我一样——把那句写在纸上的漂亮话，捡起来，对准说它的人，问一句：那，我呢？',
        en: 'Having walked my whole life, a piece of property in a ledger, one who carried a tray and listened to others talk of liberty, one who in the winter of 1775 staked his life and fled to the enemy, one who reached with his feet for the word "liberty," how would you judge a revolution like this?\n\nA revolution under the banner of "all men are equal," which turned around and counted people like me as three-fifths. Would you call it a lie, or a check that will one day be cashed? How do you judge it?\n\nBut first, remember: this pass, you heard only the person the revolution shut out. The man who actually wrote "all men are equal," Jefferson, and the Loyalist who would not break with Britain and in the end lost everything too, each has his own case. Run it again through another lens, and you will hear how they defend themselves, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there somewhere what is "said" and what is "done" are far apart, someone with "we treat everyone the same" on their lips while some are plainly treated differently, a rule that sounds fair to all until it lands on certain people and the taste changes entirely?\n\nWhen that happens, what will you do? Will you, like those who cried liberty yet could not see my chains, pretend not to see? Or will you do what I did, pick up the fine words on the paper, aim them back at the one who spoke them, and ask: and what about me?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价革命 (账本财产/端盘子听人谈自由/1775 冬赌命逃向敌人/用脚够自由 → 谎 vs 终将兑现的支票) + 跨视角指针 (你只听被挡门外的人/Jefferson+Loyalist 各有说法/换视角再走一遍看判断站不站得住) + transfer「今天你身边嘴上说的 vs 真实做的差很远 (一视同仁却被区别对待/规定听上去公平落到某些人头上味道变)」+ 你会像喊自由却看不见我枷锁的人假装没看见还是像我把漂亮话对准说它的人问「那我呢」',
      engagementHook: '走完我这一生,你会怎么评价这样一场革命?再想一步:今天你身边,有没有「嘴上说的」和「真实做的」差很远的地方?那时候,你会假装没看见,还是会像我一样,把那句漂亮话对准说它的人,问一句——那,我呢?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'jefferson':                       jeffersonLens,
  'loyalist':                        loyalistLens,
  'enslaved-person-receiving-end':   enslavedPersonLens,
};

// defaultLens = enslaved-person-receiving-end (受影响者优先 pattern):
// 被「人人生而平等」明文排除的一方 + Dunmore 宣言投英军求自由 + 一句「自由 / liberty」跨 lens 对位 (谁的自由)。
// 学生先验大概率是「美国革命 = 为自由而战的光荣建国」(celebratory) — 故默认进受影响者视角挑战这个先验:
// 一场为「自由」打的革命, 谁的自由? 喊得最响的人手里攥着别人的人身自由。
// ens-n10/n11 含 default-lens-stands-alone 跨视角指针 (你只听一边/Jefferson+Loyalist 会挑战/换视角再走一遍) + transfer.
export var defaultLens = 'enslaved-person-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'american-revolution-1776',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'jefferson': 30, 'loyalist': 28, 'enslaved-person-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-25',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「自由 / liberty」一句话两个方向 (Jefferson 在费城写「人人平等」却终身蓄奴 vs 被奴役者借 Dunmore 宣言投英军求自由 / Loyalist 夹中间两个自由都不属于他)',
    'defaultLens: enslaved-person-receiving-end — 受影响者优先 (被「人人平等」明文排除的一方 + Dunmore 宣言 + gold-standard N1 hook + N10/N11 谎 vs 支票 + 跨视角指针挑战 celebratory 先验)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 「1/3 Patriot / 1/3 Loyalist / 1/3 neutral」是 John Adams 粗估 (loy-n2 用括号短句标注非精确统计/历史学家争论真实比例); 逃英军被奴役者数以万计是历史学家估计 (ens-n5 标注具体数字说不准); Loyalist 离美 6-10 万是估计数',
    'cross-Topic 锚: Jefferson→Locke/enlightenment; 「人人平等」打折扣 + 3/5 妥协→constitutional-convention-1787; 原住民站英国→土地议题',
    '与 constitutional-convention-1787 不重叠: 那是 1787 宪法内部博弈 (Great Compromise/Madison/Sherman/Mum Bett); 本 Topic = 1775-83 革命/1776 独立宣言/Dunmore 宣言/「人人平等」对谁不算; 3/5 妥协在本 Topic 仅作 ens-n8 后果一笔带过 + 跨 Topic 指针, 不展开博弈',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
