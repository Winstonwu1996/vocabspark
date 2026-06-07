// ─────────────────────────────────────────────────────────────────
// 殖民地美洲的成形 约 1650-1750 — Colonial America Takes Shape · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程北美/英语/大西洋世界真实术语
//   (triangular trade/Middle Passage/chattel slavery/partus sequitur ventrem/
//   Great Awakening/New Lights/Old Lights/Bacon's Rebellion/Stono/Puritan/covenant),
//   绝不用中国特定词。§8 例外 (真中国段: 康熙/海禁/白银/马尼拉大帆船/贱籍/佃农)。
// 3 lens / 11 nodes each / Rule 0 中性 (本课高敏感, 尤其严守) / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 鼓声 (the drum) — 被奴役者 Stono 起义打鼓为信号/商人在夜里听见
//   一声说不清来源的远鼓/牧师听见鼓声皱眉 (联想到大觉醒露天人群的喧嚷与不安)。
//   三视角各触一次, 不互相点破。
// §8 中国桥注入 receiving-end N9 + mediator N9 的 synthesis/zoom-out 段 (接 trade-networks)。
// anti-fab: 三主角均合成桥接人物 (narrative §3 已透明标注/无名字), 用括号短句标 史料无答案;
//   Whitefield 费城万人数字标「估算」; Franklin 人数标「他自己的估算非点数」。
// ─────────────────────────────────────────────────────────────────

export var merchantLens = {
  id: 'merchant-actor',
  name: 'The Atlantic Merchant',
  nameCn: '大西洋商人',
  role: 'perpetrator-actor',
  perspectiveTag: 'triangular-trade-profiteer',
  icon: '⚖️',
  description: {
    cn: '约 1700 到 1740 年，一个跨南北做三角贸易的英国殖民地商人，可能住在 Newport 或 Charleston，没有名字，因为他代表的是一整个阶层。他识字、会算账、上教堂，仓库里堆着朗姆酒、烟草和稻米。账本一页记着糖和朗姆酒的进出，另一页（他尽量不去多想）记着「人」的买入价和卖出价。这一遍让你坐进一个受益者的内部，看一套他以为天经地义的秩序怎么转、怎么被一条条法律越拧越紧。',
    en: 'From about 1700 to 1740, an English colonial merchant working the triangular trade across both North and South, perhaps living in Newport or Charleston, with no name, because he stands for a whole class. He can read, he keeps accounts, he goes to church, and his warehouse holds rum, tobacco, and rice. One page of his ledger tracks the sugar and rum going in and out; another page, one he tries not to dwell on, lists the buying and selling prices of "people." This pass puts you inside someone who profited, to watch how an order he thought was natural ran, and how law kept tightening it.',
  },
  storyboard: [
    {
      id: 'col-merchant-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '约 1720 年，北美大西洋岸。我站在自己的仓库门口，外面是港口，进进出出的全是我的船。\n\n空气里有糖蜜发酵的甜味，还有海风。仓库里，一桶桶朗姆酒、一捆捆烟草、一袋袋稻米堆到房梁。这片殖民地从外面看，是全世界最赚钱的地方之一，而我，是这台赚钱机器上的一个齿轮——一个跨南北做生意的大西洋商人。\n\n我不告诉你我的名字。不是我有什么好藏，是我本来就不是某一个人。我代表的是 Newport、Charleston 这些港口里几百个跟我一模一样的人。我们识字、算账、礼拜天去教堂坐前排，是体面的英国绅士。账本上，我和别人没什么不同。\n\n这一遍，你坐进我这个位置。你会看见一套我从出生起就以为天经地义的秩序——钱怎么在大西洋上转着圈流、人怎么被一条条法律变成「财产」。你会从一个受益者的内部，看清这台机器是怎么转的，又是用什么喂动的。你会发现，最可怕的，往往不是恶魔，是觉得自己很正常的人。',
        en: 'Around 1720, on North America\'s Atlantic coast. I stand at the door of my own warehouse, the harbor before me, all the ships going in and out my own.\n\nThe air carries the sweet smell of fermenting molasses, and the sea wind. From the outside this colony is one of the richest places in the world, and I am one gear in its money machine, an Atlantic merchant trading across North and South.\n\nI will not tell you my name. Not that I have anything to hide. I am simply not one man. I stand for the hundreds in ports like Newport and Charleston exactly like me. We read, we keep accounts, we go to church. We are respectable English gentlemen.\n\nThis pass puts you in my seat. You will see an order I have thought natural since the day I was born: how money flows, how people are turned, law by law, into "property." From inside one who profited, you will see how this machine runs.',
      },
      deliverGoal: 'N1 hook — 约 1720 北美大西洋岸仓库口 + 大西洋商人自我介绍 (不给名字/代表 Newport+Charleston 几百个同类/识字算账上教堂/体面英国绅士/最赚钱机器上一个齿轮) + 这一遍视角 (从受益者内部看钱怎么流/人怎么被法律变成财产/机器怎么转)',
      engagementHook: '我不是一个特别坏的人，我是一整台赚钱机器上的一个齿轮。你愿意从一个受益者的内部，看清这台机器是用什么转起来的吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我的财富是怎么转出来的。它不是一条航线，是一个圈——triangular trade（三角贸易）。\n\n我从新英格兰装一船朗姆酒，运到西非；在那儿，朗姆酒换成被掳来的人。我把人塞进船舱底层，横渡大西洋，运到加勒比和南部，卖掉，换成糖、糖蜜、烟草、稻米。再把糖蜜运回新英格兰，蒸馏成朗姆酒——光 Newport 一地就有几十家蒸馏坊昼夜不停，它被叫作「世界朗姆之都」。\n\n然后开始下一圈。每转一圈，我赚一笔；圈转得越快，我越富，整片殖民地也越富。\n\n你看清这个圈了吗？欧洲的钱、西非的人、美洲的糖——四块陆地被绑成一个三角形，谁也离不开谁。北美不在三角的边上，它就是三角的一个角。我们这些殖民地商人，是这个圈上跑得最勤、算得最精的一节。\n\n这个圈里，有一段是我账本上最不想细写的：人，被当成货物运过大西洋的那一段。它有个名字，叫 Middle Passage——中段航程。这是整个圈里最赚钱、也最不堪入目的一节。',
        en: 'First see how my wealth is turned out. It is not a shipping route. It is a circle, the triangular trade.\n\nI load a ship of rum in New England and carry it to West Africa; there the rum is traded for captured people. I pack the people into the bottom of the hold, cross the Atlantic, and sell them in the Caribbean and the South for sugar, molasses, tobacco, and rice. Then I ship the molasses back to New England to distill into rum. Newport\'s dozens of distilleries run day and night; it is called "the rum capital of the world."\n\nThen the next loop begins. Each loop earns me money.\n\nDo you see the circle? Europe\'s money, West Africa\'s people, the Americas\' sugar, four lands tied into a triangle. North America is not on a side of the triangle. It is one corner of it.\n\nIn this circle, one stretch is the one I least want to write out in my ledger: the stretch where people are treated as goods. It has a name, the Middle Passage.',
      },
      deliverGoal: 'N2 setup — triangular trade 不是航线是一个圈 (新英格兰朗姆酒→西非换掳来的人→Middle Passage 横渡→加勒比/南部换糖糖蜜烟草稻米→糖蜜回新英格兰蒸馏成朗姆酒/Newport 几十家蒸馏坊世界朗姆之都→下一圈) + 四陆地绑成三角形北美是一个角不是边 + 每转一圈赚一笔 + 引出 Middle Passage (人被当货物那一段)',
      engagementHook: '欧洲的钱、西非的人、美洲的糖，转成一个赚钱的圈。北美不在这个三角的边上——它就是其中一个角。这个圈最赚钱的一段，恰好是最不想细写的一段。',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得告诉你 Middle Passage（中段航程）是什么——虽然我尽量不去想。\n\n横渡大西洋那几个星期，被掳的人锁在船舱底层，挤得不能直腰，又病又脏。约 12% 到 15% 的人，没能活着上岸——这个数字，我们这行的人心里都有，它只是「损耗」的一部分。\n\n上岸后，他们被拍卖。买的人在账本上，把他们和牲口、农具记在同一类里。一个人，从此是一笔「财产」，不是一个人。\n\n而让这件事能光明正大做下去的，是一套制度。英国先有 mercantilism（重商主义）和 Navigation Acts（航海条例），把殖民地锁成母国的原料地。再有 Royal African Company（皇家非洲公司，1672 年）一度垄断英国贩奴。1698 年垄断被打破后，像我这样的独立商人，一窝蜂涌了进来——英国贩奴量爆炸式增长，没几十年就成了世界最大贩奴国。\n\n生意，从此更好做了，门槛更低了，谁有船有本钱都能分一杯羹。',
        en: 'I have to tell you what the Middle Passage is, though I try not to think of it.\n\nFor the weeks of crossing the Atlantic, captured people are chained in the bottom of the hold, packed too tight to straighten their backs, sick and filthy. About 12% to 15% do not survive to land. That number is in the minds of everyone in my trade. To us it is only part of "loss."\n\nAshore, they are auctioned. The buyer records them in the ledger in the same category as the livestock and the tools. A person becomes, from then on, a piece of "property," not a person.\n\nWhat lets this be done openly is a system. England first had mercantilism and the Navigation Acts, locking the colonies into being the home country\'s supply zone. Then the Royal African Company (1672) once held a monopoly on English slave trading. After that monopoly was broken around 1698, independent merchants like me flooded in. England\'s slave trading exploded, and it became the world\'s largest slave-trading nation.\n\nBusiness, from then on, got even better.',
      },
      deliverGoal: 'N3 setup — Middle Passage 是什么 (横渡几周锁船舱底层挤不能直腰又病又脏/约 12%-15% 没活着上岸/对这行只是「损耗」) + 上岸拍卖记账跟牲口农具同类「人变财产」+ 让它光明正大的制度 (mercantilism + Navigation Acts 锁殖民地为原料地 / Royal African Company 1672 一度垄断 / 1698 垄断被打破独立商人涌入英国贩奴量爆炸成世界最大贩奴国) + 生意更好做',
      engagementHook: '约 12% 到 15% 的人没能活着上岸——在我们这行，这只是「损耗」的一部分。当一套制度把残忍变成账本上一个正常的数字，它是变轻了，还是更可怕了？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你坐在账本前，蜡烛压着纸角。一页是糖和朗姆酒，干干净净的数字。另一页，记着「人」的买入价、卖出价，还有「损耗」——就是死在路上、卖不出去的那部分，跟算货船上烂掉多少糖蜜，是一个算法。\n\n你提笔的时候，第一反应不是良心，是算计：这一船人，能榨出多少糖、能撑几年、补一个新的要多少钱。这是一套精确到残忍的算术，你每天都在算。\n\n你会想说，停一下，这是人啊。可你身边几百个商人，全都这么记账。在你们的世界里，这不叫残忍，这叫「正常生意」。你交税、守法、礼拜天还去教堂坐第一排，谁都说你是个好人。\n\n这就是你最深的盲点：你太习惯把账本另一页那些人当成数字，以至于你从没认真问过一句——把一个会哭、会想家、会反抗的人，记成一头牲口的价钱，这件事本身，到底对不对？\n\n你没问，因为身边没人问，问了反而显得你不懂事、不会做生意，会被同行笑话。于是你提笔，写下了那个数字，翻到下一页，心安理得。',
        en: 'Now you are me.\n\nYou sit before the ledger. One page is sugar and rum, clean numbers. The other page lists the buying price, the selling price of "people," and the "loss."\n\nWhen you lift the pen, your first reaction is not conscience. It is calculation: how much sugar this shipload can be squeezed for, how many years they will last, what a replacement costs. This is a math so exact it is cruel.\n\nYou want to say, stop, these are people. But the hundreds of merchants around you all keep their books this way. In your world it is not called cruelty. It is called "normal business." You pay your taxes, you obey the law, and on Sunday you sit in the front pew at church.\n\nThis is your deepest blind spot: you are so used to treating the people on the other page as numbers that you never seriously ask one thing. To record a person who weeps, who misses home, who resists, at the price of a beast of burden, is that thing itself right?\n\nYou lift the pen, and you write the number down.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 账本两页 (糖朗姆酒干净数字 / 人的买入卖出价+损耗) + 提笔第一反应是算计不是良心 (榨多少糖/撑几年/补人多少钱=精确到残忍的算术) + 想说停一下但几百商人都这么记=「正常生意」(交税守法礼拜天坐第一排) + 最深盲点: 太习惯把人当数字没问过「把会哭会想家会反抗的人记成牲口价钱本身对不对」+ 提笔写下数字',
      engagementHook: '在我的世界里，把一个会哭、会想家的人记成一头牲口的价钱，不叫残忍，叫「正常生意」。当一整个社会都这么做，「正常」这两个字，是不是反而最危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能以为，奴隶制从殖民地一开始就有，天生如此。不是的。我这一代商人，亲眼看着它被一条条法律，从契约奴里一点点造出来。\n\n早年田里的主力是 indentured servant（契约奴），很多是白人——签几年工，期满能翻身，理论上还能分到地。那时候底层那条线，画的是「穷 vs 富」。\n\n转折是 1676 年的 Bacon\'s Rebellion（培根起义）。穷白人本是为了夺西边原住民的地，跟总督闹翻；一群穷白人（很多是干完契约没分到好地的前契约奴）和被奴役的黑人，顺势联起手来，烧了首府 Jamestown。\n\n穷白人和黑奴联手——这是我们这些精英最怕的画面。\n\n那以后，议会里我的同侪们想通了一件冷酷的事：与其让底层按「穷富」抱团，不如把那条线重画成「白 vs 黑」。给穷白人一点「我至少是白人、我不是最底下那个」的特权，把终身奴役全压到黑人身上。从此，底层再难联手，矛头也不再指向我们。这不是天意，是一桩精心的设计。',
        en: 'You may think slavery was there from the start of the colonies, natural by nature. It was not. My generation of merchants watched it being built, law by law, out of indentured servitude.\n\nIn the early years the main field labor was the indentured servant, many of them white. They signed on for a few years, could start over when the term ended, could in theory be granted land. Back then the line at the bottom was drawn as "poor vs rich."\n\nThe turn was Bacon\'s Rebellion in 1676. The poor whites had first fallen out with the governor over wanting to seize Native land to the west; a crowd of poor whites (many former indentured servants who never got good land) and enslaved blacks then joined hands and burned the capital, Jamestown.\n\nPoor whites and enslaved blacks united: the picture men like us feared most.\n\nAfter that, my peers in the assembly worked out a cold thing: rather than let the bottom band together by "poor or rich," better to redraw the line as "white vs black." Give poor whites a little privilege of "at least I am white," and push all the lifelong bondage onto black people. From then on, the bottom could hardly unite again. This was not fate. It was design.',
      },
      deliverGoal: 'N5 story — 奴隶制不是一开始就有是从契约奴造出来 + 早年主力 indentured servant 很多白人 (签几年期满翻身理论分地/底层线是「穷 vs 富」) + 1676 Bacon\'s Rebellion 起因 (穷白人本为夺西边原住民的地跟总督闹翻/前契约奴没分到地) + 黑奴顺势联手烧 Jamestown = 精英最怕画面 + 精英想通: 把线从「穷富」重画成「白 vs 黑」(给穷白人「至少我是白人」特权/终身奴役全压黑人/底层难再联手) + 「不是天意是设计」',
      engagementHook: '底层那条线，本来画的是「穷 vs 富」；Bacon 起义之后，我们把它重画成了「白 vs 黑」。一条分人的线，为什么、又是怎么被人为地从「阶级」改成「种族」的？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那条「白 vs 黑」的线，是用一条条法律焊死的。我活着的时候，亲眼看它一步步写成白纸黑字。\n\n1662 年，弗吉尼亚立了一条拉丁文名字的法：partus sequitur ventrem——「身份随母亲」。它把英国「身份随父亲」的老传统反过来用：孩子是奴还是自由，只看母亲。意思冷得很——奴隶主和女奴生的孩子，照样是奴隶、照样是他的财产。从这一刻起，奴役变成了会遗传的东西。\n\n1705 年，弗吉尼亚《Servants and Slaves 法案》把它写成完整法典：非基督徒外来者就是奴隶、可买卖，就算后来信了教也照样。\n\n这两条法律凑在一起，造出了 chattel slavery（动产奴隶制）——终身、可继承、按种族划定。从此，一个黑人女子的孩子，一生下来就属于我，连同他这辈子、他孩子那辈子的劳动。\n\n我得诚实：每一条这样的法律出来，我都暗暗高兴。因为它让我账本上的「财产」更稳、更便宜、永远不会像契约奴那样到期走人。法律每拧紧一格，我就睡得更安稳一点。',
        en: 'That "white vs black" line was welded shut by law after law. While I lived, I watched it written, step by step, into black and white.\n\nIn 1662 Virginia passed a law with a Latin name: partus sequitur ventrem, "status follows the womb." It flipped England\'s old tradition of "status follows the father." Whether a child is enslaved or free follows only the mother. The meaning is very cold: a child of an enslaver and an enslaved woman is still a slave, still his property. From this moment, bondage became a thing that is inherited.\n\nIn 1705 Virginia\'s act concerning Servants and Slaves wrote it into a full code: non-Christian outsiders are slaves, to be bought and sold, even if they convert later.\n\nThese two laws together built chattel slavery: lifelong, inherited, defined by race.\n\nI have to be honest: each time such a law came out, I was secretly glad. It made the "property" in my ledger steadier, cheaper, never expiring, never walking off. Each notch the law tightened, I slept a little more soundly.',
      },
      deliverGoal: 'N6 story (立法链核心) — 「白 vs 黑」线用一条条法律焊死 + 1662 partus sequitur ventrem「身份随母亲」(反过来用英国「身份随父亲」/孩子奴还是自由只看母亲/奴隶主和女奴的孩子照样是奴隶财产/奴役变成会遗传) + 1705《Servants and Slaves 法案》写成完整法典 (非基督徒外来者=奴隶可买卖信教也照样) + 两条凑成 chattel slavery (终身/可继承/按种族) + 商人诚实: 每条法律出来暗暗高兴 (财产更稳更便宜永不到期/法律每拧紧一格睡得更安稳)',
      engagementHook: '每一条把人锁得更死的法律出来，我都暗暗高兴——因为它让我的「财产」更稳、永不到期。当残忍被一条条写进法律、变得「合规」，受益的人是不是反而睡得更安稳了？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的世界不只有账本，还有教堂。这一点，你一定要看见，不然你会以为我是个没有灵魂的怪物。\n\n约 1740 年，一件大事横扫了整片殖民地——第一次大觉醒（Great Awakening）。一个英国来的巡回传教士 George Whitefield，在费城露天对着上万人讲道（这个万人数字是当时的估算）。整片殖民地像着了火。连最爱算账、不太信教的 Benjamin Franklin 都被震住——他亲口说，本想一文钱不捐，听完却把口袋里的铜板、银币、金币全掏了出去。\n\n我也去听了。我也流了泪，跪在草地上，求上帝赦免我。那一刻，我是真心相信上帝、真心觉得自己该做个好人的。\n\n这就是我最难让你看懂的地方：我礼拜天在山坡上为上帝流泪，礼拜一回到仓库，照样翻动那本记着人命价钱的账本，照样安排下一船人。\n\n虔诚是真的，贩奴也是真的。它们在我一个人身上，同时是真的，而我居然不觉得矛盾。',
        en: 'My world is not only the ledger. It is also the church. You must see this, or you will think me a monster with no soul.\n\nAround 1740, one great thing swept the whole colonies: the First Great Awakening. An itinerant preacher from England, George Whitefield, preached to tens of thousands in the open air in Philadelphia (that figure of tens of thousands is an estimate of the day). The whole colonies seemed to catch fire. Even the account-loving, not-very-religious Benjamin Franklin was stunned. He said himself that he had meant to give nothing, and ended up emptying his pockets of copper, silver, and gold.\n\nI went to hear it too. I wept too. In that moment I truly believed in God, truly felt I ought to be a good man.\n\nHere is the hardest thing for you to grasp: on Sunday I wept for God on the hillside, and on Monday, back at the warehouse, I turned, as ever, the ledger that held the prices of human lives.\n\nThe piety was real. The slave-trading was real. In one man, me, both were real at the same time.',
      },
      deliverGoal: 'N7 story (清教社会张力/大觉醒) — 我的世界不只账本还有教堂 + 约 1740 Great Awakening 横扫殖民地 (Whitefield 费城露天对上万人讲道/万人是当时估算/像着了火) + Franklin 被震住 (本想一文不捐却掏空铜银金币) + 商人也去听也流泪真心信上帝想做好人 + 最难看懂处: 礼拜天为上帝流泪礼拜一回仓库照翻人命价钱账本 + 「虔诚是真的贩奴也是真的在一个人身上同时是真的」',
      engagementHook: '礼拜天我在山坡上为上帝流泪，礼拜一回到仓库照样翻动那本记着人命价钱的账本——两件事在我身上同时是真的。一个人能不能一边真诚地虔诚，一边心安理得地作恶？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我一直以为账本另一页那些人，是不会「想要」什么的财产。1739 年 9 月那个秋夜，他们让我知道我错了，而且错得离谱。\n\n那晚我在 Charleston 城里。半夜，远处传来一阵鼓声——低、闷、一下接一下，从南边 Stono 河的方向飘过来。\n\n那鼓声让我莫名后背发凉，可我说不清为什么。我们这些人，从来没认真听过田里那一边的任何声音。我嘟囔了一句「哪来的吵闹」，翻个身，又睡了。\n\n几天后消息传来：Stono 河边，一群被奴役的人（据说多是从安哥拉、刚果来的，可能本就是士兵）拿起武器，打着鼓、举着旗，一路喊着「Liberty（自由）」，向南往西班牙控制的佛罗里达走。那里答应给逃奴自由。\n\n这是英属北美最大的一次奴隶起义，约二十人起家，一路增至几十人。\n\n那一刻我懂了，可懂得太晚：我账本上的「财产」，会拿起武器，会打鼓，会喊自由。我以为永远不会变的秩序，原来一直有人在底下，等着把它掀翻。',
        en: 'I had always thought the people on the other page of my ledger were property that could not "want" anything. On an autumn night in September 1739, they made me know I was wrong.\n\nThat night I was in the city of Charleston. At midnight, a drumbeat drifted from far off, low, muffled, one beat after another, from the direction of the Stono River to the south.\n\nThe drumming sent a cold down my back I could not explain. People like us had never truly listened to any sound from the field side. I turned over and went back to sleep.\n\nDays later the news came: by the Stono River, a group of enslaved people, said to be mostly from Angola and Kongo and perhaps soldiers in their homeland, took up weapons, beat drums, raised flags, and marched south toward Spanish-held Florida, shouting "Liberty!" Florida promised freedom to those who escaped.\n\nThis was the largest slave uprising in British North America.\n\nIn that moment I understood: the "property" in my ledger would pick up weapons and shout for freedom. The order I thought would never change, someone had wanted, all along, to overturn it.',
      },
      deliverGoal: 'N8 ANCHOR cross-lens (鼓声) — 一直以为账本上的人是不会「想要」什么的财产 + 1739.9 秋夜商人在 Charleston 半夜远处鼓声 (低闷一下接一下/Stono 河方向/后背发凉说不清为什么/没认真听过田那边声音翻身又睡) + 几天后消息: Stono 起义 (多从安哥拉刚果可能士兵/拿武器打鼓举旗喊 Liberty 向佛罗里达走/答应给逃奴自由) + 英属北美最大奴隶起义 + 商人懂了「财产会拿武器会喊自由/以为永不变的秩序有人想掀翻」。只碰鼓声从商人角度不揭另两视角',
      engagementHook: '半夜那阵从 Stono 河方向飘来的鼓声，让我后背发凉，可我翻个身又睡了——我们从没认真听过田那边的任何声音。有没有一种声音，等你听懂它的意思时，已经太晚了？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你也许以为，Stono 起义把我们吓坏了，奴隶制就松动了。恰恰相反。\n\n起义被血腥镇压。第二年，1740 年，南卡通过了 Negro Act，把控制收得更紧——限制被奴役者识字、限制聚集，连打鼓都管起来（那鼓声，是会传信号的）。我们这些主人，不但没收手，反而把锁链拧得更死。\n\n我当时甚至松了一口气：看，乱子压得住，秩序更稳了，生意可以照做。\n\n到 18 世纪中叶，这台机器转得越来越顺。三角贸易繁荣，种族奴隶制法律化，南部被奴役者从 1700 年的约 2.7 万，暴涨到 1750 年的约 24 万。整片殖民地表面上：繁荣、虔诚、自治，是一块谁都羡慕的好地方。\n\n我从没想过去问一个更根上的问题——这台让我富、让我安稳、让我「合法」的机器，到底是用谁的命喂动的？\n\n我习惯了不去想，也教会了下一代不去想，把账本一页页传下去。而这种「习惯不去想」，正是我这种人最致命、也最普通的地方——不是因为我特别坏，而是因为我特别正常。',
        en: 'You might think the Stono Rebellion so frightened us that slavery loosened. The opposite is true.\n\nThe uprising was crushed in blood. The next year, 1740, South Carolina passed the Negro Act, drawing control tighter: limiting the enslaved from learning to read, limiting their gatherings, even controlling the drums (those drums could carry signals).\n\nAt the time I even breathed easier: see, the trouble can be put down, the order is steadier now.\n\nBy the mid-1700s the machine ran ever more smoothly. The triangular trade flourished, racial slavery was written into law, and the enslaved in the South soared from about 27,000 in 1700 to about 240,000 in 1750. On the surface, the whole colonies were prosperous, pious, self-governing.\n\nI never once thought to ask the deeper question: this machine that made me rich, kept me safe, made me "lawful," what was it fed with, whose lives?\n\nI was used to not thinking of it. That, exactly, is the deadliest thing about men like me.',
      },
      deliverGoal: 'N9 story — Stono 没让奴隶制松动反而收紧 + 镇压后 1740 南卡 Negro Act 收紧 (限识字/限聚集/连打鼓都管=鼓会传信号 呼应 N8) + 商人松气以为秩序更稳 + 18 世纪中叶机器转得更顺 (三角贸易繁荣/种族奴隶制法律化/南部被奴役者 1700 约 2.7 万→1750 约 24 万) + 表面繁荣虔诚自治 + 从没问更根上问题「机器用谁的命喂动」+ 「我习惯了不去想这是我这种人最致命的地方」',
      engagementHook: '起义被镇压后，连打鼓都被立法管了起来——因为那鼓声会传信号。我松了口气，从没问过：这台让我富、让我安稳的机器，到底是用谁的命喂动的？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-merchant-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我不过是个守规矩的商人。我没发明三角贸易，也没写 partus 那条法——我出生时，这套秩序已经在那儿运转了几十年。我交税、守法、上教堂，按当时所有人都认的规矩做生意。一个随大流过日子的人，怎么能让他一个人扛起整个时代的罪？\n\n另一种说法：「随大流」「守法」「我没比别人更坏」，恰恰是这台机器最致命的零件。它能一年年消耗成千上万条人命，靠的不是几个特别坏的恶魔，而是成千上万个像我这样「正常」「体面」「礼拜天坐第一排」的人，每天安心地翻动账本。我从不亲手作恶，但我的安稳，正是建在别人的命被算成数字之上。\n\n这两边不是「他有错但情有可原」。是同一个我的两面——一个被时代裹着走的普通人，和一台靠无数普通人才转得起来的暴力机器。\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was only a businessman who followed the rules. I did not invent the triangular trade, nor write the partus law. When I was born, this order had already been running for decades. I paid my taxes, obeyed the law, went to church, did business by the rules everyone of my time accepted. How can a man who simply went with the current be made to carry the crime of a whole age?\n\nThe other view: "going with the current," "obeying the law," "I was no worse than the others," are exactly this machine\'s deadliest parts. It could consume thousands of lives, year after year, not on a few specially evil demons, but on thousands of "normal," "respectable," "front-pew on Sunday" men like me, calmly turning the ledger every day. I never did violence with my own hand, yet my ease was built on others\' lives counted as numbers.\n\nThese are not "he was wrong but understandable." They are two faces of the same me, an ordinary man carried by his age, and a machine of violence that runs only on countless ordinary men.\n\nThis is the hard problem an AP teacher has students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (守规矩的商人/没发明三角贸易没写 partus/出生时秩序已运转几十年/随大流单拎出来扛整个时代的罪太轻巧) / 另一种说法 (随大流守法没比别人更坏恰是机器最致命零件/靠成千上万正常体面礼拜天坐第一排的人安心翻账本/安稳建在别人命被算成数字上) / 同一个我两面 (被时代裹走的普通人 vs 靠无数普通人才转的暴力机器) / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '守规矩的普通商人，和暴力机器上的一颗零件——是同一个我。一个随大流、守法、礼拜天坐第一排的普通人，该不该为整个时代的罪负责？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'col-merchant-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是受益者这一边的声音。\n\n请记住：这只是一边。我讲的「正常生意」「我守法」「我也虔诚」「我没比别人更坏」，听起来甚至有点道理——这正是受益者视角最危险的地方，它能把自己讲得通。\n\n但这一遍里，有人从头到尾几乎没开口，因为我没让他开口：那个被记在我账本另一页、连名字都没留下的西非人。他横渡 Middle Passage 时在想什么？他在 Stono 河边打鼓、喊「自由」的那一夜，又是怎么想的？还有那个站在讲坛上、一边渴望大觉醒之火、一边眼看会众越来越爱钱的清教徒牧师——他会怎么看我这片「又虔诚又贩奴」的土地？等你换上他们的视角，他们会狠狠地挑战你刚才听我说的每一句。\n\n最后留一个东西给你。还记得那个秋夜，我在 Charleston 半夜听见、让我后背发凉、却又翻身睡去的那阵鼓声吗？\n\n换一个视角再走一遍，你会从打鼓那个人的手里，再听见它一次。到那时，它对你就不再是怪声了。',
        en: 'What you just heard was the voice of one side, the side that profited.\n\nRemember: it is only one side. My talk of "normal business," of "I obeyed the law," of "I was pious too," of "I was no worse than the others," can even sound a little reasonable, and that is exactly the most dangerous thing about a profiteer\'s view. It can make itself make sense.\n\nBut in this pass, someone barely spoke at all: the West African on the other page of my ledger, who left not even a name. What was he thinking as he crossed the Middle Passage? What was in his mind that night by the Stono River, beating the drum, shouting "freedom"? And the Puritan minister at the pulpit, longing for the Awakening\'s fire while watching his congregation grow ever more money-minded, how would he see my "pious yet slave-trading" land? When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing. Do you remember the drumbeat I heard at midnight in Charleston that autumn night, the one that ran cold down my back, and that I turned over and slept through?\n\nWalk this through once more from another perspective, and you will hear it again, from the hand of the one who beat it. By then it will no longer be a strange sound to you.',
      },
      deliverGoal: 'N11 close/meta — 你听的是受益者一边 (能把自己讲得通最危险) + 还没听到: 账本另一页没名字的西非人 (Middle Passage 在想什么/Stono 打鼓喊自由那夜怎么想) + 清教徒牧师 (渴望大觉醒之火/眼看会众越来越爱钱/会怎么看又虔诚又贩奴的土地) 会挑战你听的每句 + 暗示鼓声会从打鼓人手里再听见一次 (不直接解释 echo)',
      engagementHook: '受益者最危险的地方，是他能把自己讲得通，听起来还像个好人。你听完我这一边，最想去问那个没名字的西非人、那个夹在中间的清教徒牧师，一个什么样的问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var ministerLens = {
  id: 'minister-mediator',
  name: 'The Puritan Minister',
  nameCn: '清教徒牧师',
  role: 'lonely-mediator',
  perspectiveTag: 'soul-caught-in-the-middle',
  icon: '🕯️',
  description: {
    cn: '约 1730 年前后，新英格兰一个小镇的会众牧师，没有名字，因为他代表的是这一代牧师共同的处境。他的祖父辈 1630 年跟着 John Winthrop 坐 Arbella 号来，立志在荒野里建一座所有人都盯着看的「山巅之城」。三代下来，他站在讲坛上，看见的却是一座冷掉的城：年轻人忙着种地、赚钱，教会越来越空。这一遍让你站在所有人中间，看一个既渴望大觉醒之火、又害怕那火烧穿他熟悉秩序的人，怎么夹在祖辈的理想和世俗的现实之间。',
    en: 'Around 1730, a town congregation\'s minister in New England, with no name, because he stands for the shared situation of this whole generation of ministers. His grandparents came on the ship Arbella in 1630 with John Winthrop, vowing to build in the wilderness a "city upon a hill" with all eyes on it. Three generations on, he stands at the pulpit and sees instead a city gone cold: the young busy with farming and making money, the church emptier and emptier. This pass puts you in the middle of everyone, watching a man who both longs for the Awakening\'s fire and fears that fire will burn through the order he knows, caught between the ancestors\' ideal and a worldly reality.',
  },
  storyboard: [
    {
      id: 'col-minister-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '约 1730 年，新英格兰一个小镇。礼拜天早晨，我站在自己教堂的讲坛上，望着下面一排排木头长椅。\n\n空了好多。\n\n我是这个镇的会众牧师。我不告诉你我的名字，因为我不是某一个人——新英格兰这一代牧师，几乎都站在同一个尴尬的位置上，面对着同样越来越空的教堂。\n\n我的祖父辈，1630 年跟着 John Winthrop 坐 Arbella 号漂洋过海来到这里。他们立过一个滚烫的志：在这片荒野里，建一座「city upon a hill」——山巅之城，一座虔诚得让全世界都盯着看、都来效仿的样板城。\n\n可三代下来，我望着这些空长椅，心里发凉：这座城，正在一点点冷掉。年轻人宁可下地、跑生意，也不愿来听道。\n\n这一遍，你站进我这个位置——不是账本上发财的受益者，也不是田里最底层的那个人。你夹在中间：一边是祖辈那团滚烫的火，一边是越来越世俗、越来越爱钱的现实。最难的，往往就是这个夹在中间的位置。',
        en: 'Around 1730, a town in New England. On Sunday morning I stand at the pulpit of my own church, looking down at the benches.\n\nMany are empty.\n\nI am this town\'s congregation minister. I will not tell you my name, because I am not one man. This whole generation of New England ministers stands in almost the same awkward place.\n\nMy grandparents came here in 1630 on the ship Arbella with John Winthrop, crossing the ocean. They swore a burning vow: in this wilderness, to build a "city upon a hill," a model city so pious that all the world would watch it.\n\nBut three generations on, looking at these empty benches, a cold runs through me: this city is going cold.\n\nThis pass puts you in my seat, not the one who profits, not the lowest. You are caught in the middle: the ancestors\' fire on one side, and a reality growing ever more worldly and money-minded on the other.',
      },
      deliverGoal: 'N1 hook — 约 1730 新英格兰小镇礼拜天讲坛望长椅空了好多 + 牧师自我介绍 (不给名字/代表这一代牧师共同处境) + 祖父辈 1630 跟 John Winthrop 坐 Arbella 来立志建「city upon a hill」山巅之城 (虔诚到全世界盯着看的样板) + 三代下来城在冷掉 + 这一遍视角 (不是受益者不是最底层/夹在中间: 祖辈的火 vs 越来越世俗爱钱的现实)',
      engagementHook: '我祖父辈漂洋过海，是为了建一座虔诚到全世界都盯着看的城。三代之后，我望着空掉的长椅，看着这座城慢慢冷掉。你愿意站进这个夹在理想和现实之间的位置吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我为什么这么焦虑，得先懂我们这群人是靠什么活着的——covenant（圣约）。\n\n我们清教徒（Puritan）相信，我们和上帝立了一个约：我们答应活得圣洁、虔诚，上帝就庇佑我们这座城。这个约，是「山巅之城」的根。一旦我们松懈、堕落，全世界都会看见我们失败——这不只是丢脸，是背约，是辜负了祖辈拿命换来的这片立足之地。\n\n所以我祖父那一代，活得绷得很紧：盯着每个人的灵魂，盯着谁够资格当正式教友，谁的日子过得不够敬虔，谁礼拜天偷偷干了活。他们怕的，是整座城一起堕落。\n\n要当正式教友，你得能站出来，当着全会众，描述一次真切的「重生」体验——你得证明上帝的恩典真的临到过你，让你脱胎换骨。这道门，很窄，不是谁都进得去，也不是谁都愿意去敲。\n\n你现在能体会我的处境了吗？我一个人，守着一个跟上帝立的约，可约的另一头，是一群越来越进不了那道窄门、也越来越不在乎那道门的会众。约还在，可守约的人，快没了。',
        en: 'To understand why I am so anxious, you must first understand what keeps people like us alive: the covenant.\n\nWe Puritans believe we made a covenant with God: we promise to live holy and pious lives, and God watches over this city. This covenant is the root of the "city upon a hill." Once we slacken and fall, the whole world will see us fail, and that is not just shame, it is breaking the covenant.\n\nSo my grandparents\' generation lived stretched very tight: watching each person\'s soul, watching who was worthy to be a full church member.\n\nTo be a full member, you had to stand up and describe a true experience of "rebirth," to prove that God\'s grace had really come upon you. That gate was narrow.\n\nCan you feel my situation now? I keep a covenant made with God, yet on the other end of the covenant is a congregation less and less able to pass through that narrow gate.',
      },
      deliverGoal: 'N2 setup — covenant 圣约是清教徒活着的根 + Puritan 信和上帝立约 (答应活圣洁虔诚上帝庇佑城/是山巅之城的根/松懈堕落=全世界看见失败=背约) + 祖父那代绷得很紧 (盯每个人灵魂/谁够资格当正式教友) + 正式教友要能描述真切「重生」体验证明恩典临到 (门很窄) + 牧师处境: 守着跟上帝的约但会众越来越进不了那道窄门',
      engagementHook: '我们清教徒相信，自己和上帝立了一个约：我们活得圣洁，上帝就庇佑这座城。可一旦松懈，全世界都会看见我们失败。守着这样一个约过日子，是什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那道窄门，正在把我的教会榨干。我得告诉你这个数字背后的恐慌。\n\n年轻人不来了。他们忙着种地、做生意、攒钱、买地，眼睛盯着这世上的家业，不再盯着自己的灵魂。能站出来描述「重生」体验、够资格当正式教友的人，一代比一代少。受洗的孩子也越来越少，因为按老规矩，父母得先是正式教友，孩子才能受洗。\n\n眼看着教会一代就要断掉，前辈们 1662 年想出一个折中办法，叫 Halfway Covenant（半路圣约）：让那些没有完整皈依体验的人的孩子，也能受洗、算半个教友。\n\n这是妥协。说白了，是为了把人留在教堂里，把祖辈定下的、跟上帝立约的那道门槛，悄悄放低了一截，好歹让孩子们还挂在教会名下，不至于一代人就散了。\n\n可我心里清楚，这恰恰是焦虑的证据：当你不得不放低门槛，只为了让长椅别空得太难看——这座祖辈拿命建起来的「山巅之城」，是不是已经从根上松动了？我们是不是，正在亲手辜负那个约？',
        en: 'That narrow gate is wringing my church dry. I have to tell you the panic behind this.\n\nThe young no longer come. They are busy farming, doing business, saving money, buying land. Those who can stand and describe a "rebirth" experience, worthy of full membership, grow fewer with each generation. Fewer children are baptized, because by the old rule, the parents had to be full members first.\n\nSeeing the church about to break in one generation, the elders in 1662 worked out a compromise, the Halfway Covenant: the children of people without a full conversion could also be baptized and count as half-members.\n\nThis was a compromise. Plainly, it was to keep people in the church, quietly lowering the threshold a notch.\n\nBut I know in my heart this is exactly the evidence of anxiety: when you must lower the threshold of the covenant with God, only to keep the benches from looking too empty, has this "city upon a hill" not already loosened at its root?',
      },
      deliverGoal: 'N3 setup — 窄门把教会榨干 + 年轻人不来 (忙种地做生意攒钱买地/能描述「重生」够资格当正式教友的一代比一代少/受洗孩子越来越少因父母得先是正式教友) + 教会眼看一代断掉 + 1662 Halfway Covenant 半路圣约折中 (没完整皈依体验的人的孩子也能受洗算半个教友/为留人悄悄放低门槛) + 牧师心里: 这是焦虑的证据 (放低跟上帝立约的门槛只为长椅别太空/山巅之城从根上松动了?)',
      engagementHook: '为了不让长椅空得太难看，前辈们悄悄放低了跟上帝立约的门槛。可这反而是最焦虑的证据——当一座「样板城」开始降低自己的标准，它是不是已经从根上松动了？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1739、1740 年，一个英国来的巡回传教士 George Whitefield，像一阵风一样横扫殖民地。他不在教堂里讲，他在露天、在田野、在山坡上，对着成千上万人讲道，声音大得能传半里地。\n\n你也挤进过那样的人群，人挨着人，连呼吸都是热的。你亲眼看见：人们当场痛哭、颤抖、跪倒、大声呼求上帝。那种滚烫、那种你只在祖父辈口中听过的火，竟然真的回来了。\n\n你站在人群里，心里翻江倒海。一半的你在喊：这就是我等了一辈子的复兴啊！冷掉的城，要重新烧起来了！\n\n可另一半的你在发抖：这火，是从我的讲坛外面烧起来的。Whitefield 不归我管，也不归任何一个本地牧师管。他告诉每一个普通人——你不必经过我、不必经过任何牧师，你可以自己直接面对上帝。\n\n那一刻你得问自己：你到底是盼着这火，还是怕这火？它要救活你的城，可它也可能，一把烧掉你脚下站着的那个位置——那个你祖辈一代代守下来的讲坛。',
        en: 'Now you are me.\n\nIn 1739 and 1740, an itinerant preacher from England, George Whitefield, swept the colonies like a wind. He did not preach in churches. He preached in the open air, in fields, on hillsides, to thousands at once.\n\nYou too once pressed into such a crowd. You saw with your own eyes: people wept on the spot, trembled, fell to their knees, cried aloud to God. That heat, that fire your grandparents\' generation knew, had actually come back.\n\nYou stand in the crowd, your heart in turmoil. Half of you cries out: this is the revival I have waited a lifetime for! The cold city is going to burn again!\n\nBut the other half of you trembles: this fire was lit outside my pulpit. Whitefield is not under my charge, and he tells every ordinary person, you need not go through me, nor through any minister; you can face God directly, yourself.\n\nIn that moment you must ask yourself: do you long for this fire, or fear it? It would revive your city, but it might also burn away the place beneath your feet.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1739-40 Whitefield 横扫殖民地 (不在教堂在露天田野山坡对成千上万人讲道) + 你挤进人群亲见 (当场痛哭颤抖跪倒呼求上帝/祖父辈才有的火回来了) + 心里翻江倒海一半喊「等了一辈子的复兴冷城要重新烧」+ 另一半发抖「火从我讲坛外烧起/Whitefield 不归我管/告诉普通人不必经过我不必经过任何牧师可自己直接面对上帝」+ 自问: 盼这火还是怕这火 (救活城也可能烧掉你脚下位置)',
      engagementHook: '我盼了一辈子的复兴之火，真的回来了——可它是从我的讲坛外面烧起来的，还告诉每个人「你不必经过牧师」。同一团火，能救活我的城，也能烧掉我脚下的位置。你说我该盼它，还是该怕它？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '这场大觉醒（Great Awakening），最让我夜里睡不着的，是它在我同行中间，劈出了一道裂缝。\n\n我们这些牧师，几乎一夜之间，分成了两派，老朋友翻了脸。\n\n支持复兴的，被叫作 New Lights（新光派）。他们说：信仰就该是这样滚烫的、直击人心的；皈依是个人的事，人人都能自己直接面对上帝；老一套那种干巴巴、念经一样的讲道，早就该被烧掉了。\n\n反对的，被叫作 Old Lights（旧光派）。他们皱着眉说：这太煽情、太混乱了。它绕过教会、绕过受过训练的牧师，让一群情绪上头的人自以为得了恩典——这不是复兴，这是失序，是危险。\n\n1741 年，Gilbert Tennent 讲了一篇《The Danger of an Unconverted Ministry》，几乎是当面骂那些「没重生过的牧师」是瞎子领瞎子。长老会就此裂成两半。\n\n你看我多难：这两派说的，我两边都懂，因为这两股力，正在我一个人心里互相撕扯。',
        en: 'What kept me up at night about this Great Awakening was the crack it split open among my fellow ministers.\n\nWe ministers, overnight, divided into two camps.\n\nThose who backed the revival were called New Lights. They said: faith should be this hot, this straight to the heart; conversion is personal, everyone can face God directly themselves; the old dry preaching should have been burned away long ago.\n\nThose against it were called Old Lights. They frowned and said: this is too emotional, too disorderly. It goes around the church, around trained ministers, letting a crowd swept up in feeling fancy they have received grace; this is not revival, it is the breakdown of order.\n\nIn 1741, Gilbert Tennent preached "The Danger of an Unconverted Ministry," almost cursing to their faces the ministers who had "never been reborn." The Presbyterian church split in two over it.\n\nSee how hard it is for me: I understand both camps, because these two forces are tearing at each other inside one man, me.',
      },
      deliverGoal: 'N5 story (New Lights / Old Lights 分裂) — 大觉醒在同行中间劈出裂缝 + 牧师一夜分两派 + New Lights 新光派 (信仰该滚烫直击人心/皈依是个人事人人可直接面对上帝/老一套干巴讲道该烧掉) + Old Lights 旧光派 (皱眉说太煽情太混乱/绕过教会和受训牧师/情绪上头自以为得恩典/不是复兴是失序) + 1741 Gilbert Tennent《The Danger of an Unconverted Ministry》几乎当面骂没重生的牧师长老会裂两半 + 牧师两边都懂因两股力在他一人心里撕扯',
      engagementHook: '一场复兴，把我们牧师一夜劈成两派：新光派说这才是真信仰，旧光派说这是失序。最难的是，这两边的话我都懂——因为这两股力，正在我一个人心里互相撕扯。',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得让你听见这场火里，最有名的一声。\n\n1741 年，Jonathan Edwards 讲了一篇布道，叫《Sinners in the Hands of an Angry God（落在愤怒之神手中的罪人）》。他是大觉醒里最厉害的那个神学家。\n\n他说了一句让满堂会众当场痛哭、有人甚至昏过去的话，大意是：上帝把你悬在地狱火坑上，就像有人捏着一只蜘蛛、悬在火上——他随时可以松手，而你什么都做不了。\n\n你注意到了吗？他靠的根本不是讲道理，不是一条条论证。他靠的是情感的震撼——直接把恐惧、把你和上帝之间那根细得快断的线，砸到你心口上。听的人当场颤抖、痛哭、寻求皈依。\n\n这正是 New Lights 复兴的招牌，也正是 Old Lights 最反感的地方。\n\n而站在中间的我，听着会众哭成一片，心里又激动又害怕：信仰是真的被点燃了——可这把火，烧的到底是罪，还是秩序本身，还是我这种「按部就班」的牧师？我分不清。\n\n这场火虽然把我们牧师劈成两派，可它也是头一回：同一件事，同一个时候，烧遍了所有殖民地。后来有人说，这是我们这些各过各的殖民地，第一次有了一种说不清的「我们是一伙的」。',
        en: 'I have to let you hear the most famous voice in this fire.\n\nIn 1741, Jonathan Edwards, the sharpest theologian of the Great Awakening, preached a sermon called "Sinners in the Hands of an Angry God."\n\nHe said a thing that made the whole congregation weep on the spot, roughly: God holds you over the pit of hell the way someone holds a spider over a fire; he can let go at any moment.\n\nDid you notice? He did not work by reasoning at all. He worked by emotional shock, slamming fear, and the thin thread between you and God, straight onto your heart. Those who heard it trembled, wept, sought conversion on the spot.\n\nThis is the very mark of the New Lights revival, and the very thing the Old Lights hated most.\n\nAnd I, standing in the middle, hearing the congregation weep as one, was both stirred and afraid: faith truly was being lit, but this fire, was it burning sin, or order itself? I could not tell.\n\nThis fire split us ministers into two camps, yet it was also the first time one thing, at one time, swept through every colony. Later some said this was the first time these colonies, each living its own life, felt a hard-to-name "we are one."',
      },
      deliverGoal: 'N6 story (primary source §5C) — 让你听见火里最有名一声 + 1741 Jonathan Edwards 大觉醒最厉害神学家《Sinners in the Hands of an Angry God 落在愤怒之神手中的罪人》+ 让满堂当场痛哭的话大意 (上帝把你悬地狱火坑上像捏蜘蛛悬火上随时松手) + 不靠讲道理靠情感震撼 (砸恐惧+你和上帝间细线/听的人颤抖痛哭求皈依) + New Lights 招牌也是 Old Lights 最反感处 + 站中间的牧师又激动又怕 (信仰真被点燃但这火烧的是罪还是秩序本身分不清) + 大觉醒双面收尾 (虽劈成两派但也是头一回同一件事同时烧遍所有殖民地/各过各的殖民地第一次有「我们是一伙的」共同体验 = APUSH 革命远端铺垫考点)',
      engagementHook: 'Edwards 那篇最有名的布道，靠的不是讲道理，是情感的震撼——上帝随时能像松开一只蜘蛛一样松开你。会众当场哭成一片。可我分不清：这把火烧的，到底是罪，还是秩序本身？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得说一件，连我自己都不太敢往深里想的事。\n\n我守着「山巅之城」的理想——一座道德上的样板城。可你只要走出我的教堂，往港口那边看：这片土地最赚钱的生意之一，是把人蒸馏进朗姆酒、再用朗姆酒去西非换人。\n\n我的会众里，就坐着做这门生意的商人。他们礼拜天来听我讲道，流泪、奉献、看起来无比虔诚，坐在最前排；礼拜一回到仓库，照样翻动那本记着人命价钱的账本。\n\n而我，站在讲坛上，几乎从不点破这件事。他们的奉献，养着我的教堂，发着我的薪水。我的沉默，是有价钱的。\n\n这是我灵魂上最深的一道伤：我满口圣洁、满口圣约，可我守的这座「虔诚之城」，脚下踩着 Middle Passage（横渡大西洋那段死亡率极高的奴隶船航程）上死掉的人。虔诚是真的，贩奴也是真的，它们在同一片土地上、在同一批人身上，同时是真的。\n\n我不敢深想——因为我怕，一深想，我会发现我守的这座城，从地基上就是裂的，而我每个礼拜天，都在替这道裂缝，盖上一层好看的盖子。',
        en: 'I have to say a thing I myself hardly dare think through.\n\nI keep the ideal of the "city upon a hill," a moral model city. But step out of my church, look toward the harbor: one of this land\'s most profitable businesses is distilling people into rum and using rum to buy people.\n\nIn my congregation sit the very merchants who run this trade. They come on Sunday to hear me preach, weep, give offerings, look utterly pious, sitting in the front row; on Monday they go back to the warehouse and turn, as ever, the ledger that holds the prices of human lives.\n\nAnd I, at the pulpit, almost never name it.\n\nThis is the deepest wound on my soul: my mouth is full of holiness and covenant, yet this "pious city" I keep stands on the dead of the Middle Passage (the stretch of the Atlantic crossing on slave ships where the death rate was terribly high). The piety is real, the slave-trading is real, and on the same soil, both are real at once.\n\nI dare not think it through, because I fear that if I do, I will find the city I keep is cracked from the foundation up.',
      },
      deliverGoal: 'N7 story (清教社会张力核心) — 一件连自己都不敢往深想的事 + 守「山巅之城」道德样板城 + 但走出教堂往港口看: 这土地最赚钱生意之一是把人蒸馏进朗姆酒再用朗姆酒换人 + 会众里坐着做这生意的商人 (礼拜天听道流泪奉献看着虔诚/礼拜一回仓库翻人命价钱账本) + 牧师站讲坛几乎从不点破 + 灵魂最深的伤 (满口圣洁圣约/守的虔诚之城脚下踩着 Middle Passage 死掉的人/虔诚真贩奴真同一土地同时为真) + 不敢深想 (怕发现城从地基就裂的)',
      engagementHook: '我满口圣洁、满口圣约，可我守的这座「虔诚之城」，脚下踩着 Middle Passage 上死掉的人。我不敢往深里想——因为一深想，我怕会发现这座城从地基上就是裂的。',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把这件不敢深想的事，再往前推一步——因为有一晚，那座城脚下的人，自己发出了声音。\n\n1739 年 9 月，南卡 Stono 河边，一群被奴役的人起事了。他们打着鼓（你记住这个细节），举着旗，喊着「Liberty（自由）」，向南往佛罗里达走。这是英属北美最大的一次奴隶起义。\n\n那阵鼓声，我在远处也隐约听见过一回。我当时只觉得心里一沉，下意识皱了眉——我太习惯把田里那些人，当成不会说话的背景了，那鼓声落在我耳朵里，只是一种说不清的、扰乱安息日宁静的噪音，让我祷告分了神。\n\n可现在我懂了：那不是噪音，那是人在喊自由，喊着我天天挂在嘴边、却从没真给过他们的那两个字。\n\n这正是把我钉在十字架上的问题：我天天讲「神面前人人平等」，讲每个灵魂都宝贵、都值得救。可我讲坛底下那个「平等」，从来没真包括田里那些人。我嘴里的福音，和我脚下的现实，差着一整个 Middle Passage 那么远。',
        en: 'Let me push this thing I dare not think through one step further, because one night the people beneath that city sent up a voice of their own.\n\nIn September 1739, by the Stono River in South Carolina, a group of enslaved people rose up. They beat drums, mark that detail, raised flags, and shouted "Liberty," marching south toward Florida. This was the largest slave uprising in British North America.\n\nThat drumming, I too once faintly heard from far off. At the time I only felt my heart sink and instinctively frowned. I was so used to treating the people in the fields as a voiceless background that the drumming, falling on my ear, was only some unplaceable noise disturbing the order.\n\nBut now I understand: that was people crying for freedom.\n\nThis is the question that nails me to the cross: I preach every day that all are equal before God, that every soul is precious. Yet the "equal" beneath my pulpit never truly included the people in the fields. The gospel in my mouth and the reality beneath my feet are a whole Middle Passage apart.',
      },
      deliverGoal: 'N8 ANCHOR cross-lens (鼓声) — 把不敢深想的事推一步 (城脚下的人自己发声) + 1739.9 南卡 Stono 起义 (打着鼓「记住这个细节」举旗喊 Liberty 向佛罗里达/英属北美最大奴隶起义) + 牧师角度: 远处隐约听见一回当时只觉心一沉皱眉 (太习惯把田里人当不会说话的背景/鼓声落耳朵只是说不清扰乱秩序的噪音) + 现在懂了那是人在喊自由 + 钉十字架的问题 (天天讲神面前人人平等每个灵魂宝贵/但讲坛下的「平等」从没真包括田里人/嘴里福音和脚下现实差一整个 Middle Passage)。只碰鼓声从牧师角度不揭另两视角',
      engagementHook: '那阵从田那边传来的鼓声，当时只让我皱了皱眉——我太习惯把那些人当成不会说话的背景。可现在我懂了：那是人在喊自由。我嘴里的「人人平等」，和我脚下的现实，差着一整个 Middle Passage。',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图——一张我活着的时候根本看不懂的地图。\n\n就在我守着这座「山巅之城」、为冷掉的信仰发愁的同时，地球另一端的清朝，正接入同一张世界经济网，但方式完全不同。\n\n我们这边，靠掳人、靠 triangular trade（三角贸易）接入——把人本身当成贸易品。同期的中国，靠出口瓷器、丝绸、茶叶，换回白银接入——大量白银经马尼拉大帆船从美洲流进中国，它是这张全球白银网巨大的吸纳端。1684 年，康熙帝平定台湾后解除海禁，开了四地海关，欢迎外商进港做买卖。\n\n（中国那位皇帝和我，活在完全不同的世界里。我没法替他想什么，也不该说谁先进、谁落后；我只能说，我们脚下，是同一张近代早期的世界经济网，各自长出的一个角。）\n\n一个角，把白银吸进来；另一个角，把人当成货物运出去。同一张网，两个角刺眼地不一样。哪个角更靠近我天天讲的那个「神面前人人平等」？我不敢替你回答。',
        en: 'Let me step back and show you a larger map, a map I could not have read at all while I was alive.\n\nEven as I kept this "city upon a hill," fretting over a cooling faith, on the other side of the earth the Qing dynasty was plugging into the same world economy, but in an entirely different way.\n\nOn our side, we plugged in by capturing people, by the triangular trade, treating people themselves as trade goods. China in the same era plugged in by exporting porcelain, silk, and tea for silver. Great amounts of silver flowed into China from the Americas by the Manila galleons; it was a huge absorbing end of the global silver web. In 1684, after conquering Taiwan, the Kangxi emperor lifted the sea ban, opened customs in four places, and welcomed foreign merchants into port.\n\n(That Chinese emperor and I lived in entirely different worlds. I cannot speak for what he thought; I can only say that beneath our feet was the same early-modern world economy, grown into two corners.)\n\nOne corner drew silver in; the other shipped people out as goods. The same web, two corners jarringly unalike. Which corner sits closer to the "all are equal before God" I preach every day? I dare not answer that for you.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 桥, 接 trade-networks) — 退一步看更大的地图 + 牧师守城为冷信仰发愁同时清朝接入同一张世界经济网但方式完全不同 + 我们这边靠掳人靠 triangular trade 接入 (人本身当贸易品) + 同期中国靠出口瓷器丝绸茶叶换白银接入 (白银经马尼拉大帆船从美洲流入/全球白银网巨大吸纳端) + 1684 康熙平台湾后解除海禁开四地海关欢迎外商 + anti-fab/Rule0 括号 (皇帝和我活在不同世界我没法替他想只能说同一张近代早期世界经济网长出两个角) + 一个角吸白银一个角把人当货物运出去同一张网刺眼地不一样',
      engagementHook: '同一张近代早期的世界经济网，长出了两个角：地球那端的清朝靠出口瓷器丝绸、把白银吸进来；我脚下这片土地，靠把人当成货物运出去。把同一年地球两端放一起看，你看见的是差距，还是两种不同的处境？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-minister-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的一件事，是我对脚下那桩罪的「沉默」。两种说法都站得住，你来称。\n\n一种说法：别太苛责我。我只是个小镇牧师，手里只有一座讲坛、一本圣经。整片殖民地的经济都建在奴隶制上，我一个人就算在讲坛上喊破喉咙，也改不了一条法律、放不出一个被奴役的人。我守着我能守的那点圣约，已经很难了。\n\n另一种说法：恰恰是我这种人的「沉默」，给了这套制度最体面的外衣。我天天讲「人人平等」「灵魂宝贵」，却从不让这句话落到田里那些人身上。我用神的名义，给一座建在掳人之上的城，盖了一层虔诚的盖子。一个明明看见、却选择不说的人，他的安静，本身就是一种帮凶。\n\n这两边不是「他软弱但可原谅」。是同一个我的两面——一个无力的小人物，和一套靠无数「good people（好人）的沉默」才撑得住的不义。哪一面更像真实的我？也许两面都是。\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, the hardest thing to judge is my "silence" before the crime beneath my feet. Both views stand. You do the weighing.\n\nOne view: do not be too harsh on me. I was only a town minister, with a pulpit and a Bible in my hands. The whole colony\'s economy was built on slavery; even if I shouted my throat raw at the pulpit, I could not change one law or free one enslaved person. Keeping the little covenant I could keep was already hard.\n\nThe other view: it is exactly the "silence" of men like me that gave this system its most respectable coat. I preached "all are equal," "every soul precious," every day, yet never let those words land on the people in the fields. In God\'s name, I laid a lid of piety over a city built on captured people. A man who clearly sees yet chooses not to speak, his quiet is itself a kind of accomplice.\n\nThese are not "he was weak but forgivable." They are two faces of the same me, a powerless small figure, and an injustice that holds up only on the "silence of good people," beyond counting.\n\nThis is the hard problem an AP teacher has students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 牧师对脚下那桩罪的「沉默」该不该评 / 一种说法 (别太苛责/只是小镇牧师手里只有讲坛和圣经/整片经济建在奴隶制上一人喊破喉咙改不了一条法放不出一个人/守住能守的圣约已很难) / 另一种说法 (我这种人的沉默给制度最体面外衣/天天讲人人平等灵魂宝贵却从不让它落田里人身上/用神的名义给建在掳人上的城盖虔诚盖子/明明看见选择不说的安静本身是帮凶) / 同一个我两面 (无力小人物 vs 靠无数 good people 沉默才撑住的不义) / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '一个明明看见、却选择不说的人，他的沉默算不算一种帮凶？我守着我能守的那点圣约，可我从不让「人人平等」落到田里那些人身上。你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'col-minister-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是夹在中间那个人的声音。\n\n请记住：这也只是一边。我讲的「我无力」「我只是个小镇牧师」「我也很挣扎」，听起来很真诚——可越真诚，就越要小心：一个站在中间、什么都看见、却什么都没真改变的人，他的「挣扎」，会不会反而成了他不行动的借口？\n\n这一遍里，有两个人我一直没真正让他们开口。一个是坐在我会众席上、礼拜天流泪、礼拜一翻账本的那个大西洋商人——他会怎么替自己那门「正常生意」辩护？另一个，是田里那个连名字都没留下、却敢在 Stono 河边打鼓喊「自由」的西非人——他会怎么看我这座满口圣约、却把他排除在外的「山巅之城」？等你换上他们的视角，他们会狠狠地挑战我刚才说的每一句。\n\n最后，那阵让我皱眉、被我当成「噪音」、扰我祷告的鼓声——换一个视角再走一遍，你会从打鼓那个人的手里，再听见它一次。到那时，它对你就不再是噪音了，你会听出它本来的意思，也会明白我当年为什么宁愿翻身睡去，也不愿听懂。',
        en: 'What you just heard was the voice of the one caught in the middle.\n\nRemember: this too is only one side. My talk of "I was powerless," of "I was only a town minister," of "I struggled too," sounds sincere, but the more sincere, the more careful you must be: a man who stands in the middle, sees everything, yet truly changes nothing, might his "struggle" become the very excuse for his inaction?\n\nIn this pass, two people I never truly let speak. One is the Atlantic merchant in my congregation, who wept on Sunday and turned the ledger on Monday; how would he defend his "normal business"? The other is the West African in the fields, who left not even a name, yet dared by the Stono River to beat the drum and shout "freedom"; how would he see my "city upon a hill," full of covenant yet shutting him out? When you switch to their perspectives, they will challenge, hard, every sentence I just said.\n\nAnd one last thing: the drumming I frowned at, that I took for "noise," walk this through once more from another perspective, and you will hear it again, from the hand of the one who beat it. By then it will no longer be noise to you.',
      },
      deliverGoal: 'N11 close/meta — 你听的是夹在中间那个人一边 (越真诚越要小心: 站中间什么都看见却什么都没真改变的「挣扎」会不会成不行动的借口) + 还没真让开口: 会众席上的大西洋商人 (礼拜天流泪礼拜一翻账本/会怎么替「正常生意」辩护) + 田里没名字的西非人 (敢在 Stono 打鼓喊自由/会怎么看满口圣约却把他排除在外的山巅之城) 会挑战我说的每句 + 暗示鼓声会从打鼓人手里再听见一次 (不直接解释 echo)',
      engagementHook: '一个站在中间、什么都看见、却什么都没真改变的人，他的「挣扎」会不会反而成了不行动的借口？你听完我这一边，最想去问那个会众席上的商人、那个打鼓喊自由的西非人什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var enslavedLens = {
  id: 'enslaved-on-the-receiving-end',
  name: 'The Enslaved African',
  nameCn: '被奴役的非洲人',
  role: 'receiving-end',
  perspectiveTag: 'property-that-rises',
  icon: '🥁',
  description: {
    cn: '约 1700 到 1739 年，一个被掳到南卡稻田的西非人，没有名字，因为历史没有为绝大多数这样的人留下名字，而这恰恰是问题本身。他原本在西非有名字、有家、有种稻的手艺。一天他被掳走、卖上船、横渡大西洋，从此被记进账本，跟牲口、农具记在一起，是一笔「财产」，不是一个人。这一遍，你站在最底层、最没有名字的位置，亲眼看一笔「财产」怎么有一天站起来、打着鼓、喊出「自由」，也直面自由是用什么换来的。',
    en: 'From about 1700 to 1739, a West African captured to a South Carolina rice field, with no name, because history left no names for most such people, and that is exactly the point. In West Africa he had a name, a family, and a skill in growing rice. One day he was captured, sold onto a ship, and carried across the Atlantic, and from then on was written into the ledger, recorded beside the livestock and the tools, a piece of "property," not a person. This pass puts you in the lowest, most nameless position, to watch a piece of "property" one day stand up, beat the drum, and cry "freedom," and to face what freedom was bought with.',
  },
  storyboard: [
    {
      id: 'col-enslaved-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天还没亮，我已经在稻田里了，水没到小腿，泥又凉又黏，蚊子嗡嗡地咬。\n\n这是南卡的稻田。我弯着腰，插秧、引水、除草，太阳一出来就晒得人头晕——这些活儿，我比这片地上任何一个白人都懂。因为种稻这门手艺，是我从海那边的西非带来的，是我家几代人传下来的本事。\n\n我没有名字给你。不是我不肯说，是没人替我记下来。在这片土地上，像我这样的人有几十万，我们种的稻、砍的烟草，喂肥了一整片殖民地，喂富了大半个英国，可账本上只有我们的价钱，没有我们的名字。\n\n历史没给我们留下名字——你记住这一点，因为这本身，就是问题的一部分：连名字都没留下，我们差点就从故事里彻底消失了，只剩账本上一行冷冰冰的价钱，一个数字。\n\n这一遍，你站在我这儿，最底下、最没名字的这一格。你会看一件账本上的「财产」永远不该做的事：有一天，它放下手里的弯刀，直起腰，站了起来，打着鼓，喊出了那个本不属于它的词——「自由」。',
        en: 'It is not yet light, and I am already in the rice field, the water up to my shins, the mud cold and clinging.\n\nThis is a South Carolina rice field. Bent over, I plant the seedlings, channel the water, pull the weeds. These tasks I know better than any white man on this land, because the skill of growing rice is one I carried from West Africa across the sea.\n\nI have no name to give you. Not that I will not say it, but no one wrote it down for me. On this land there are hundreds of thousands of people like me. The rice we grow, the tobacco we cut, fattened a whole colony, yet the ledger holds only our prices, not our names.\n\nHistory left us no names; mark this, because it is itself part of the problem.\n\nThis pass, you stand where I stand, in the lowest, most nameless square. You will watch a thing that "property" in a ledger is never supposed to do: one day, it stood up.',
      },
      deliverGoal: 'N1 hook — 天不亮在南卡稻田 (水没小腿泥凉黏/弯腰插秧引水除草/这些活比任何白人都懂因种稻手艺是从西非带来的) + 没名字 (没人替我记下来/几十万人/种的稻砍的烟草喂肥殖民地/账本只有价钱没名字) + 历史没留名字本身是问题的一部分 (受奴役者视角核心教学点) + 这一遍从最底没名字看「财产站起来」',
      engagementHook: '账本上有我的价钱，没有我的名字——历史没给我们这些人留下名字，而这本身就是问题的一部分。你能想象「被写成一笔财产、连名字都没留下」是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么到这片稻田的，你才懂后来那一夜对我意味着什么。\n\n在西非，我有名字，有家，有种稻的手艺。一天，我被掳走，卖给沿海的奴隶贩子，锁上一条船。从此，我再没见过家里人。\n\n接下来那几个星期，叫 Middle Passage（中段航程）。我被塞在船舱底层，挤得不能直腰，又病又渴，空气臭得让人喘不过气。身边有人死了，被直接扔进海里。横渡大西洋的人，约 12% 到 15% 没能活着上岸。\n\n我活下来了。\n\n上岸后，我被拍卖，像牲口一样被人捏胳膊、看牙口。买我的人，在账本上把我和牲口、农具记在同一类里。从那一刻起，在这片土地的法律眼里，我不再是一个人，是一笔「财产」——没有契约，没有年限，没有尽头。\n\n你要先看清这个起点：我不是「来打工的」，也不是签了几年契约、期满能翻身分地的契约奴。我是被一条船、一本账，从一个有名有家的人，硬生生改写成了一件可以买卖、可以传给下一代、永远没有尽头的东西。',
        en: 'First, how I came to this rice field, so you understand what that one night later meant to me.\n\nIn West Africa I had a name, a family, a skill in growing rice. One day I was captured, sold to coastal slave traders, and chained onto a ship.\n\nThe weeks that followed are called the Middle Passage. I was packed into the bottom of the hold, too tight to straighten my back, sick and parched. People died beside me and were thrown straight into the sea. Of those who crossed the Atlantic, about 12% to 15% did not survive to land.\n\nI survived.\n\nAshore, I was auctioned. The one who bought me recorded me in the ledger in the same category as the livestock and the tools. From that moment, in the eyes of this land\'s law, I was no longer a person. I was a piece of "property," with no contract, no term, no end.\n\nYou must see this starting point clearly: I did not "come to work." I was rewritten, by a ship and a ledger, from a person into a thing.',
      },
      deliverGoal: 'N2 setup — 怎么到这片稻田 + 西非有名字有家有种稻手艺 + 一天被掳卖给沿海奴隶贩子锁上船 + Middle Passage (船舱底层挤不能直腰又病又渴/身边人死了扔进海/横渡约 12%-15% 没活着上岸) + 我活下来 + 上岸拍卖买我的人账本把我和牲口农具记同类 (法律眼里不再是人是「财产」/没契约没年限没尽头) + 起点: 不是「来打工的」是被一条船一本账从人改写成一件东西',
      engagementHook: '我不是「来打工的」。我是被一条船、一本账，从一个人，改写成了一件东西——没有契约，没有年限，没有尽头。一个人被法律变成「一件东西」，意味着失去了什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可这套制度最狠的一刀，不是砍在我身上，是砍向我还没出生的孩子。\n\n1662 年，弗吉尼亚立了一条法，拉丁文名字：partus sequitur ventrem——「身份随母亲」。它把英国「身份随父亲」的老规矩反过来用：孩子是奴还是自由，只看母亲。\n\n你品一下这一刀有多冷：奴隶主和一个被奴役女人生的孩子，照样是奴隶、照样是主人的财产。从这一刻起，奴役不再是我一个人的事——它变成了会遗传的东西，会顺着血脉，一代一代往下传。\n\n（我和我孩子的名字，史料里都没留下。能确证的，是这条法律本身——和它压在千千万万人身上的分量。）\n\n后来 1705 年弗吉尼亚又出了一部完整法典，把「非基督徒外来者就是奴隶、可买卖」彻底写死，连「信了基督教就能换自由」这条路，都给堵死了。\n\n你现在明白了吗？我身上这副枷锁，不是从天上掉下来的，也不是自古就有的。它是被人，一条法、一条法，在我活着的这一两百年里，亲手造出来的。',
        en: 'But this system\'s cruelest cut did not fall on me. It fell on my child, not yet born.\n\nIn 1662, Virginia passed a law with a Latin name: partus sequitur ventrem, "status follows the womb." It flipped England\'s old rule of "status follows the father." Whether a child is enslaved or free follows only the mother.\n\nWeigh how cold this cut is: a child of an enslaver and an enslaved woman is still a slave, still the owner\'s property. From this moment, bondage was no longer my own affair. It became a thing that is inherited, passing down the bloodline, generation after generation.\n\n(The names of me and my child, the record kept neither. What can be confirmed is this law itself, and the weight it laid on thousands upon thousands.)\n\nLater, in 1705, Virginia issued a full code, fixing it utterly: non-Christian outsiders are slaves, to be bought and sold.\n\nDo you understand now? The chain on me did not fall from the sky. It was built by people, law by law, with their own hands.',
      },
      deliverGoal: 'N3 setup (立法链, 从受奴役者角度) — 制度最狠一刀不在我身上在我没出生的孩子 + 1662 partus sequitur ventrem「身份随母亲」(反过来用英国「身份随父亲」/孩子奴还是自由只看母亲) + 多冷 (奴隶主和被奴役女人的孩子照样是奴隶财产/奴役变成会遗传顺血脉一代代传) + anti-fab 括号 (我和孩子名字史料没留/能确证的是法律本身和压在千千万万人身上的分量) + 1705 弗吉尼亚完整法典「非基督徒外来者=奴隶可买卖」写死 + 枷锁不是从天掉下来是被人一条法一条法亲手造出来',
      engagementHook: '这套制度最狠的一刀，砍向的是我还没出生的孩子：1662 年一条法律规定，奴役顺着母亲的血脉，一代一代往下传。我身上这副枷锁，不是从天上掉下来的——是被人一条法、一条法亲手造出来的。',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你别以为我心里认了「财产」这个身份。我白天是田里的「财产」，被监工的眼睛盯着、被鞭子赶着，可我心里，从来记得自己曾经是、本该是一个自由的人。\n\n有一天，一句话从主人那边的世界飘了过来。海那边的英国本土、还有殖民地里，到处在传一句话：「人人在神面前平等」「自由是天赋的」。连大觉醒那些露天布道，都在喊每个灵魂都宝贵、人人都能直接面对上帝，不必经过谁。\n\n你站在稻田里，泥水没过脚踝，这句话轰一下砸进你心里：每个灵魂都宝贵——里面，到底有没有我？\n\n他们说这话的时候，脑子里的「人」「灵魂」，根本没打算包括田里的你。在他们眼里，你还是账本上那笔财产。可话一旦说出口，就拦不住了，它漂过大海，钻进了你的耳朵。\n\n你心里那个藏了很久的念头，这一刻顶到了喉咙口：这句话不是说给我听的——可它也没说「除了田里的奴隶」。既然没说除了我，凭什么，我不能自己把它捡起来，对准那些写它的人？',
        en: 'Now you are me.\n\nDo not think I accepted the name "property" in my heart. By day I am "property" in the field, but in my heart I have always remembered that I once was, and was meant to be, a free person.\n\nOne day a sentence drifted over from the masters\' world. Across the sea in England, and in the colonies, a sentence was passing everywhere: "all are equal before God," "freedom is God-given." Even the open-air sermons of the Great Awakening cried that every soul is precious, that everyone can face God directly.\n\nYou stand in the rice field, the muddy water over your ankles, and the sentence slams into your heart: every soul is precious. Is there a place in it for me?\n\nWhen they say it, the "person," the "soul" in their minds was never meant to include you in the field. But once a sentence is said aloud, it cannot be held back.\n\nThe thought you have hidden so long rises to your throat in this moment: this sentence was not said for me. But by what right can I not pick it up for myself?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 别以为我心里认了「财产」(白天田里是财产/心里从来记得曾经是本该是自由的人) + 一句话从主人世界飘来 (英国本土+殖民地传「人人在神面前平等」「自由是天赋的」/大觉醒露天布道喊每个灵魂宝贵人人可直接面对上帝) + 站稻田泥水没脚踝这句话轰砸进心里「每个灵魂宝贵里有没有我」+ 他们说时「人/灵魂」没打算包括田里的你但话拦不住 + 念头顶喉咙口「这话不是说给我听的可凭什么我不能自己捡起来」',
      engagementHook: '大觉醒喊「每个灵魂都宝贵、人人都能直接面对上帝」——说这话的人，从没打算把它给田里的我。可它也没说「除了我」。这句不属于我的话，我敢不敢自己把它捡起来？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我不是一个人敢。而且我得告诉你一件主人永远不知道的事：我们这些人，本来就不是「乖乖认命」的。\n\n这片稻田里，很多人和我一样，生在非洲，记得被卖上船的那一天，记得海那边有过自由是什么样。我们里头，有人本来就是受过训练的士兵，打过仗、拿过武器。\n\n主人以为我们只是会干活的「财产」。他不知道，到了夜里，我们用自己带来的语言悄悄说话、传消息；他更不知道，我们当中有人，盘算的不是怎么熬过明天，是怎么一起逃、一起反抗。\n\n往南走，过了边界，是西班牙控制的佛罗里达。西班牙人和英国人作对，放出话来：逃过去的奴隶，给自由。\n\n这句话，像一颗火星掉进干草，在我们这些被奴役者中间，一传十、十传百，悄悄传开了。\n\n你想想这有多难：我们隔着一座座种植园、隔着监工的眼睛、隔着不同的非洲语言，说错一句话就可能被告发、被打死。可一个念头，还是在我们中间，一夜一夜地，悄悄长了起来——往南，去那个答应给我们自由的地方。',
        en: 'I was not the only one who dared. And I have to tell you a thing the masters never knew: we were never "meekly resigned to our fate."\n\nIn this rice field, many, like me, were born in Africa, remember the day they were sold onto a ship, remember what freedom looked like across the sea. Among us, some had been soldiers.\n\nThe master thought we were only "property" that could work. He did not know that at night we spoke quietly in the languages we brought, and passed word; and he knew still less that some among us reckoned not on how to get through tomorrow, but on how to flee together, resist together.\n\nGo south, past the border, and there was Spanish-held Florida. The Spanish had put out word: enslaved people who fled there would be given freedom.\n\nThat word spread quietly among us, the enslaved.\n\nThink how hard it was: between us stood plantation after plantation, the overseers\' eyes, different African languages. Yet a single thought grew among us, night after night: go south, to the place that promised us freedom.',
      },
      deliverGoal: 'N5 story — 不是一个人敢 + 主人永远不知道的事「我们本来就不是乖乖认命的」+ 稻田里很多人生在非洲 (记得被卖上船/记得海那边自由/有人本是士兵) + 主人以为只是会干活的财产但不知道 (夜里用带来的语言说话传消息/有人盘算的不是熬过明天是怎么一起逃一起反抗) + 往南过边界是西班牙控制的佛罗里达 (放话: 逃过去的奴隶给自由) + 这话在被奴役者中间悄悄传开 + 多难 (隔种植园/监工/不同非洲语言) 可一个念头一夜夜长起来: 往南去答应给自由的地方',
      engagementHook: '主人以为我们只是会干活的「财产」，他不知道夜里我们用自己的语言传消息、盘算着一起逃。隔着监工和不同的语言，一个念头还是在我们中间长了起来——往南，去那个答应给我们自由的地方。',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1739 年 9 月 9 日，那一天来了。我们在 Stono 河边动了手。\n\n我们当中有人拿起一面鼓，敲了起来——你记住这面鼓。鼓声是我们的话，是我们从非洲带来、主人听不懂的语言。它一声接一声，越过黑夜里的稻田，把分散在各处的人，叫到一起。\n\n我们举起旗，一路往南，朝西班牙控制的佛罗里达走——那里答应给逃过去的奴隶自由。我们嘴里喊着一个词——「Liberty」，自由。\n\n就在这一刻，你做了一件账本上的「财产」永远不该做的事——你做了一个选择。一头牲口不会选择。一笔财产不会选择。可你拿起了鼓，举起了旗，选择了往自由走，哪怕前面是死。\n\n（那一天的鼓点、那面旗、领头那个后人叫他 Jemmy 的人——史料留下的，零零碎碎，连他的名字都不确定。能确证的是：1739 年 9 月 9 日，Stono 河边，一群被奴役的人，打着鼓、喊着自由，真的站了起来。这是英属北美最大的一次奴隶起义。）',
        en: 'On September 9, 1739, the day came. By the Stono River, we made our move.\n\nSome among us took up a drum and began to beat it; mark this drum. The drumbeat is our speech, a language we carried from Africa that the masters could not understand. Beat after beat, it called the scattered people together.\n\nWe raised flags and went south, toward Florida, a word in our mouths: "Liberty," freedom.\n\nIn this very moment, you did a thing that "property" in a ledger is never supposed to do: you made a choice. A beast of burden does not choose. A piece of property does not choose. But you took up the drum, raised the flag, and chose to walk toward freedom.\n\n(The drumbeats of that day, the flag, the leader later called Jemmy, what the record left is scattered and partial. What can be confirmed is this: on September 9, 1739, by the Stono River, a group of enslaved people, beating drums and shouting for freedom, truly stood up. This was the largest slave uprising in British North America.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (鼓声) — 1739.9.9 那天来了 Stono 河边动手 + 有人拿起一面鼓敲起来「你记住这面鼓」(鼓声是我们的话/从非洲带来主人听不懂的语言/一声接一声把分散的人叫到一起) + 举旗往南朝佛罗里达喊「Liberty 自由」+ 做了财产不该做的事「你做了一个选择」(牲口/财产不会选择/你拿起鼓举起旗选择往自由走) + anti-fab 括号 (鼓点/旗/领头 Jemmy 史料零碎/能确证: 1739.9.9 Stono 一群被奴役的人打鼓喊自由站起来/英属北美最大奴隶起义)。鼓声从受奴役者手里 (打鼓的人) 这是 echo 落点',
      engagementHook: '一头牲口不会选择，一笔财产不会选择——可那一天，我拿起鼓、举起旗，选择往自由走。鼓声是我们从非洲带来、主人听不懂的话。那一刻，账本上的「财产」第一次成了一个做选择的人。这个「选择」，为什么这么重？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得对你诚实：这不是一个干净的故事。\n\n我们一路往南，烧了几户人家，也杀了人——杀了挡在我们和自由之间的白人。我们手里的东西，本是干活、砍稻的工具，那一天，它也砍了人。我没法只挑亮的那一半讲给你听。\n\n我不替这一切辩护，可我要你看清这背后是什么：是几代人被当牲口烫、卖、砍出来的怒火。先有了把人当消耗品的制度，才有了这一天连根烧回去的火。这两件事，分不开。\n\n而这场起义，没几天就被血腥镇压了。我们大多数人被杀、被抓回去，挂出来示众，吓唬其他还想动的人。\n\n更狠的在后面：第二年，1740 年，南卡通过了 Negro Act，把我们看得更死——限制识字、限制聚集，连打鼓都给禁了。\n\n他们禁鼓，是因为他们终于听懂了：那鼓声，是会传信号、会把我们连成一片的语言。他们怕的，从来不是一面鼓，是鼓声底下，那个不肯认命、随时可能再站起来的「我们」。\n\n这场起义失败了，可它把一个事实，永远留在了所有奴隶主的噩梦里。',
        en: 'I have to be honest with you: this is not a clean story.\n\nWe went south, burned some households, and killed people too, killed the whites who stood between us and freedom. The things in our hands, made for work, that day cut people too.\n\nI will not defend all of it, but I want you to see clearly what is behind it: the rage of generations burned, sold, and cut down like cattle. First came the system that treated people as things to be used up, and only then this day\'s fire that burned back to the root.\n\nAnd this uprising was crushed in blood. Most of us were killed or dragged back.\n\nThe crueler part came after: the next year, 1740, South Carolina passed the Negro Act, watching us tighter still, limiting reading, limiting gatherings, even banning the drum.\n\nThey banned the drum because they had finally understood: that drumbeat was a language that carried signals and joined us into one. What they feared was not a drum. It was the "us" beneath the drumbeat, the "us" that would not be resigned.',
      },
      deliverGoal: 'N7 story (anti-fab 诚实 + 代价) — 诚实「不是干净的故事」+ 一路往南烧几户人家也杀了人 (杀挡在我们和自由之间的白人/手里干活工具那天也砍了人) + 不辩护但要看清背后 (几代人被当牲口烫卖砍出来的怒火/先有把人当消耗品的制度才有连根烧回的火) + 起义被血腥镇压大多数被杀被抓回 + 更狠在后: 1740 南卡 Negro Act 看更死 (限识字/限聚集/连打鼓都禁) + 禁鼓因终于听懂 (鼓声是会传信号会把我们连成一片的语言/怕的不是一面鼓是鼓声底下不肯认命的「我们」呼应 N6)',
      engagementHook: '他们事后立法禁了鼓——因为他们终于听懂：那鼓声是会传信号、把我们连成一片的语言。他们怕的不是一面鼓，是鼓声底下那个不肯认命的「我们」。一场为自由的反抗，会不会注定带着血？',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '镇压之后，我得让你看清，我这一辈子最锥心的一处反讽。\n\n这片南卡的稻田，是全世界最赚钱的产业之一。它发的大财，靠的是什么？靠的正是我从西非带来的种稻和治水的手艺——什么时候放水、什么时候排水、怎么对付潮咸的低地，这些主人一窍不通。\n\n是我，教会了这片土地怎么育秧、怎么引水、怎么让稻子在湿热的低地里长成金山。我的本事，让我的主人富得流油，住上大房子。\n\n可我自己，一无所有。账本上不会写「这片稻田的财富，来自一个西非人的知识」。账本上只写：我的买入价，我的卖出价。\n\n你看清这个反讽了吗：让这台机器转得最欢的那双手，恰恰是它最看不起、记成「财产」的那双手。我的本事被吸走、变成主人的钱，连同我的名字，一起从历史里抹掉，仿佛这财富是从土里自己长出来的。\n\n所以那一天我打鼓、喊自由，不只是为了逃命。我是在说：这片土地的富，本来就有我的一份，是我一手一脚种出来的——而你们，连我的名字都不肯给我，连我是个人都不肯认。',
        en: 'After the suppression, I have to show you the most piercing irony of my whole life.\n\nThis South Carolina rice field is one of the most profitable industries in the world. What did its great wealth rest on? On the very skill of growing rice and managing water that I carried from West Africa.\n\nIt was I who taught this land how to raise seedlings, how to channel water, how to make rice grow into a mountain of gold in the hot, wet lowland. My skill made my owner rich beyond measure.\n\nYet I myself had nothing. The ledger would never write "this rice field\'s wealth came from a West African\'s knowledge." The ledger wrote only: my buying price, my selling price.\n\nDo you see the irony: the very hands that made this machine run best were the hands it most despised and recorded as "property." My contribution was drained away, and my name, with it, wiped from history.\n\nSo that day, when I beat the drum and shouted for freedom, it was not only to escape. I was saying: a share of this land\'s wealth was always mine, and you would not even give me my name.',
      },
      deliverGoal: 'N8 story (反讽核心 §3/§4) — 镇压后最锥心的反讽 + 南卡稻田全世界最赚钱产业之一发大财靠的正是我从西非带来的种稻治水手艺 + 是我教会这片土地育秧引水让稻子在湿热低地长成金山我的本事让主人富得流油 + 可我自己一无所有 (账本不会写「财富来自西非人知识」只写我的买入卖出价) + 反讽: 让机器转得最欢的手恰是它最看不起记成「财产」的手 (贡献被吸走连同名字从历史抹掉) + 那天打鼓喊自由不只为逃命是在说「这片土地的富本有我一份你们连我的名字都不肯给我」',
      engagementHook: '让这台赚钱机器转得最欢的那双手，恰恰是它最看不起、记成「财产」的那双手——南卡稻田的大财，靠的正是我从西非带来的种稻手艺。我的贡献被吸走，连名字都从历史里抹掉了。',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图——一张我活着的时候根本看不见的地图。\n\n把我运过来的那条船、那本账，不是孤立的。它是一整张近代早期世界经济网上的一段。同一时段，地球另一端的清朝，也接进了这张网，但方式完全不同。\n\n我这边的大西洋世界，是靠掳人接入的——人本身，就是货物。同期的中国，是靠出口瓷器、丝绸、茶叶，把白银吸进来接入的。大量白银经马尼拉大帆船从美洲流进中国，让它成了这张全球白银网最大的吸纳端。1684 年，康熙帝平定台湾后解除海禁，开了四地海关，让私人也能出海做买卖。\n\n（那位远方的皇帝和我，活在完全不同的世界，我没法替他想什么，也不评谁好谁坏。我只知道我脚下这一段网，是用我这样的人喂动的。）\n\n同一张网，一个角把白银吸进去，另一个角，把我这样的人当成货物运出来。账本上，白银有重量，我也有价钱——可只有我，是个会想家、会打鼓、会喊自由的「货物」。这，就是这张网最刺眼的地方。\n\n（这套「把人本身当成可买卖的货物」的逻辑，这一百年里压在像我这样的非洲人身上；它后来还会沿着同一片海洋，伸向别的大陆、别的肤色的人——这是后话。）',
        en: 'Let me step back and show you a larger map, a map I could not see at all while I was alive.\n\nThe ship that carried me, the ledger, were not isolated. They were one stretch of a whole early-modern world economy. In the same span, on the other side of the earth, the Qing dynasty plugged into this web too, but in an entirely different way.\n\nMy side, the Atlantic world, plugged in by capturing people; people themselves were the goods. China in the same era plugged in by exporting porcelain, silk, and tea, drawing silver in. Great amounts of silver flowed into China from the Americas by the Manila galleons. In 1684, after conquering Taiwan, the Kangxi emperor lifted the sea ban and opened customs in four places.\n\n(That distant emperor and I lived in entirely different worlds; I cannot speak for what he thought. I only know that the stretch of web beneath my feet was fed with people like me.)\n\nThe same web: one corner draws silver in, the other ships people like me out as goods. In the ledger, silver has weight, and I have a price too. But only I am a "good" that can beat a drum and shout for freedom.\n\n(This logic, of treating people themselves as goods to be bought and sold, lay over Africans like me through this century; later it would reach along the same oceans toward other lands, other peoples of other colors. But that is a story for another day.)',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 桥, 接 trade-networks) — 退一步看更大地图 + 运我的船和账不是孤立是近代早期世界经济网一段 + 同期清朝也接进这张网但方式完全不同 + 我这边大西洋世界靠掳人接入 (人本身就是货物) + 同期中国靠出口瓷器丝绸茶叶把白银吸进来 (白银经马尼拉大帆船从美洲流入) + 1684 康熙平台湾后解除海禁开四地海关 + anti-fab/Rule0 括号 (远方皇帝和我活在不同世界我没法替他想/只知道脚下这段网用我这样的人喂动) + 同一张网一角吸白银一角把我当货物运出来 + 「账本上白银有重量我也有价钱可只有我是会打鼓会喊自由的货物」+ 时段诚实前指括号 (把人当货物的逻辑这一百年压在非洲人身上/后来还会沿同一片海洋伸向别的大陆别的肤色的人/「这是后话」不点名后世事件 = 华裔学生 identity hook 不越界)',
      engagementHook: '同一张近代早期的世界经济网，一个角把白银吸进去，另一个角把我这样的人当成货物运出来。账本上，白银有重量，我也有价钱——可只有我，是个会打鼓、会喊自由的「货物」。',
      expectsRealAnswer: false,
    },
    {
      id: 'col-enslaved-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，回头看 Stono 河边那一天，那个我打鼓、喊自由、也杀了人的一天——有一个真问题，等你来答。\n\n我们的反抗，是用真实的暴力来的。火一旦点起，刀一旦举起，它不只落在压迫我们的人身上，也落在一些只是「站在那条线上」的普通白人身上，包括女人和孩子。\n\n一种说法：这越过了一条线。再正当的愤怒，杀到普通人头上，就给了镇压我们的人一个最好的借口——你看，他们果然是危险的，得管得更死。亮的那一半再亮，也盖不住血的那一半。\n\n另一种说法：这把账，不能先记在举刀的人头上。是先有了把人烫、卖、砍了几代的制度，才逼出了这一天的火。对一个连名字都被抹掉、几代人被当牲口买卖的人，要求他「温和地」、客客气气地争自由，公不公平？\n\n这两边都站得住，不是「一边对一边错」，也不是「各打五十大板」。这正是一所好学校里，AP 老师会反复让学生掂量、却从不替他们下结论的难题。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look back at that day by the Stono River, the day I beat the drum, shouted for freedom, and killed too. There is a real question waiting for you.\n\nOur resistance came through real violence. Once the fire is lit, once the blade is raised, it falls not only on those who oppressed us, but also on some ordinary whites who merely "stood on that line."\n\nOne view: this crossed a line. However just the rage, when the killing reaches ordinary people, it gives those who suppress us the best excuse: see, they really are dangerous. However bright the bright half, it cannot cover the half that is blood.\n\nThe other view: this bill cannot be charged first to those who raised the blade. First came the system that burned, sold, and cut people down for generations, and only that forced out this day\'s fire. To demand that a man whose very name was wiped out, whose people were treated as cattle for generations, fight for freedom "gently," is that fair?\n\nBoth sides stand.\n\nWhat do you think? Take thirty seconds, and write it down.',
      },
      deliverGoal: 'N10 synthesis — 真问题: Stono 那天打鼓喊自由也杀了人/反抗用真实暴力 (火点起刀举起不只落压迫者也落只是「站在那条线上」的普通白人) 这代价怎么看 + 一种说法 (越过一条线/杀普通人给镇压者最好借口「他们果然危险」/亮的盖不住血的) + 另一种说法 (账不能先记举刀人头上/先有把人烫卖砍几代的制度才逼出这天的火/对连名字都被抹几代被当牲口的人要求他温和争自由公平吗) + 两边都站得住 + 想 30 秒',
      engagementHook: '我们的自由，是用真实的暴力来的，Stono 那天也杀了普通人。一种说法：这越过了一条线。另一种说法：这是几代奴役逼出来的火。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'col-enslaved-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生：一个没名字的西非人，一身种稻的手艺，一句不属于我的「人人平等」，一面我亲手敲响的鼓，一次向着自由的奔走。你会怎么评价这样一个人？\n\n他们把我记成账本上的「财产」，可我用一面鼓、一声「自由」证明了：财产，会站起来。这是英属北美最大的一次奴隶起义。它被镇压了，我也没活到看见自由的那天。可那个「财产能反抗」的事实，从此再也抹不掉了。\n\n不过先记住：你这一遍，只听到了稻田里这个打鼓的人。\n\n那个账本另一页的大西洋商人，会把这一夜讲成「我的财产凭什么造反」；那个站在讲坛上、满口圣约的清教徒牧师，会把我这场起义，当成一种「扰乱秩序的噪音」。你还没听到他们的声音——换个视角再走一遍，你刚才下的判断，站不站得住？\n\n再想最后一步：今天你身边，有没有一句「写在纸上对所有人都算数」、可落到某些人头上就忽然不算数的话？那时候，你会装没听见，还是会像我一样，把那句话捡起来，对准写它的人？',
        en: 'Having walked my whole life, a nameless West African, a skill in growing rice, an "all are equal" that was never mine, a drum I beat with my own hands, a run toward freedom, how would you judge a man like this?\n\nThey recorded me as "property" in a ledger, but with a drum and a cry of "freedom" I proved: property stands up. This was the largest slave uprising in British North America. It was crushed, and I did not live to see freedom. But the fact that "property can resist" could never be wiped out again.\n\nBut first, remember: this pass, you heard only the one who beat the drum in the rice field.\n\nThe Atlantic merchant on the other page of the ledger would tell this night as "by what right does my property revolt"; the Puritan minister at the pulpit, full of covenant, would take my uprising for a kind of "noise disturbing the order." You have not yet heard their voices. Run it again through another lens, and see whether the judgment you just made still holds.\n\nThen take one last step: in your own life today, is there a sentence "written on paper to count for everyone" that suddenly stops counting once it lands on certain people? When that happens, will you pretend not to hear, or will you do what I did: pick up that sentence, and aim it back at the people who wrote it?',
      },
      deliverGoal: 'N11 close — 评价 (没名字西非人/种稻手艺/不属我的人人平等/亲手敲响的鼓/向自由奔走 → 被记成财产但用鼓和「自由」证明财产会站起来/英属北美最大奴隶起义/被镇压没活到看见自由/但「财产能反抗」事实再抹不掉) + MANDATORY 跨视角指针: ① 你只听到打鼓的人 ② 大西洋商人会讲成「我的财产凭什么造反」+ 清教徒牧师会当成「扰乱秩序的噪音」(呼应商人 N8/牧师 N8 鼓声) ③ 你还没听到他们声音换视角再走判断站不站得住 + transfer「今天身边写在纸上对所有人算数却对某些人不算数的话」+ 你会装没听见还是像我把话对准写它的人',
      engagementHook: '他们把我记成「财产」，可我用一面鼓、一声「自由」证明了：财产，会站起来。你这一遍只听到了打鼓的人——那个商人会说「我的财产凭什么造反」，那个牧师会当它是「噪音」。换个视角再走一遍，你刚才的判断站得住吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'merchant-actor':                merchantLens,
  'minister-mediator':            ministerLens,
  'enslaved-on-the-receiving-end': enslavedLens,
};

// receiving-end 优先 (黑人能动性 = AP DBQ 必考角度; 无名西非人打鼓站起来本身是 load-bearing pedagogy)
// 取自 narrative frontmatter: defaultLens: enslaved-on-the-receiving-end
export var defaultLens = 'enslaved-on-the-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'colonial-america-1650',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'merchant-actor': 30, 'minister-mediator': 30, 'enslaved-on-the-receiving-end': 32 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 鼓声 the drum (三视角各触一次不点破; echo 落点 = 受奴役者 N6 打鼓的人)',
    'defaultLens: enslaved-on-the-receiving-end (取自 narrative frontmatter) — 黑人能动性 (black agency, AP DBQ 必考) + 无名西非人打鼓站起来',
    'expectsRealAnswer: ONLY N10 (synthesis reflection) + N11 (synthesis close) per lens = true (2 per lens, 6 total)',
    'anti-fab: 三主角均合成桥接人物 (无名字, narrative §3 已透明标注); 受奴役者孩子/Jemmy 用括号短句标 史料零碎; Whitefield 万人+Franklin 人数标「估算/非点数」',
    '§8 中国桥注入 mediator N9 + receiving-end N9 (接 trade-networks: 同一张近代早期世界经济网两个角 — 大西洋掳人 vs 中国吸白银/1684 康熙开海; Rule 0 不褒贬)',
    'Rule 0 高敏感: 繁荣/虔诚/机会都真, 同时建在掳人奴隶经济上; receiving-end 全程在场不妖魔化不浪漫化不抹去; 三方均不下最终道德结论',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
