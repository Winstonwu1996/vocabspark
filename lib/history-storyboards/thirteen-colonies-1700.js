// ─── Thirteen Colonies c.1700 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 北美十三殖民地 约 1700 · The Thirteen Colonies c.1700
// HSS-5.3 / HSS-5.4 · APUSH Period 2 (1607-1754)
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 8/12 条):
//   - colonial-elite                  (perpetrator-power) — 弗吉尼亚烟草种植园主 / 兼治安官 (合成人物, 史料依据)
//   - indentured-servant              (lonely-mediator)   — 从英国来的契约奴 (合成人物); 卡在「契约奴→终身奴隶」拐弯
//   - enslaved-african-receiving-end  (receiving-end)     — 南卡稻米种植园上的被奴役西非人 (合成人物); Middle Passage
//
// 跨 lens micro-detail (N6 anchor):
//   「机会 / opportunity」一个词三个意思 — 同一片殖民地, 三层人各自的「机会」:
//   - elite N6: 把契约奴转成终身奴隶 = 精英眼里的「划算」「秩序」 (Bacon's Rebellion 1676 后立法分而治之)
//   - servant N6: 干完契约分到地翻身 = 契约奴眼里的「机会」, 但脚底那条线被画成「种族」
//   - enslaved N6: 没有契约、没有年限、没有尽头 = 最底层眼里根本没有「机会」, 只有他带来的种稻知识让别人致富
//
// 跨 Topic 锚:
//   - chattel slavery 种族奴隶制根基 → civil-war-1861 / slavery-abolition-1850 (这机制最终烧向内战)
//   - 重商主义 / Navigation Acts 母国管制 → 几十年后激起殖民地不满 (独立战争, 不在本 Topic)
//   - Middle Passage / 跨大西洋奴隶贸易 → age-of-exploration-1492 (Columbian Exchange 之后)
//
// defaultLens = 'enslaved-african-receiving-end' (受影响者优先 pattern: 最底层 + 殖民繁荣建在谁身上的追问)
//
// STRUCTURE SPEC:
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach ~550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false (6 total)
//
// AVOID overlap: 殖民地社会本身 (约 1700), NOT 独立战争 (1775+) / NOT 制宪 (1787)
// per AUTHORING_PIPELINE.md 12 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: 殖民地精英 (perpetrator-power) — 弗吉尼亚烟草种植园主
// ═══════════════════════════════════════════════════════════════════════

export var colonialEliteLens = {
  id: 'colonial-elite',
  name: 'Virginia Planter',
  nameCn: '弗吉尼亚种植园主',
  role: 'perpetrator-power',
  perspectiveTag: 'land-and-labor-owner',
  icon: '🎩',
  description: {
    cn: '他是约 1700 年弗吉尼亚一个沿河有几千英亩烟草地的种植园主（一个合成人物，把那一代赢家拼成一个人），鞋底沾着红黏土，刚走进议会大厅。这一遍让你跟他一起坐到议员席上，看一个又是老板又是立法者的人，怎么手里捏着一张能把底层穷白人和黑奴永远劈开的法案。',
    en: 'He is a Virginia planter around 1700, with thousands of acres of tobacco along the river, red clay on his boots, walking into the assembly chamber (a composite, gathering one generation of winners into one man). This pass sits you beside him on the burgess bench, watching a man who is both boss and lawmaker hold a bill that can split poor whites from enslaved blacks for good.',
  },
  storyboard: [
    {
      id: 'ce-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '约 1700 年,弗吉尼亚。天刚亮,我骑马出门巡田。鞋底踩进红黏土里,湿的。空气里全是烟草叶子的味道——我闻一口就知道,这批叶子晾到几分熟了。\n\n我是这一带的种植园主。沿着河,我家有几千英亩地,全种烟草。我祖父当年是坐契约奴的船来的——白干几年,换一张过大西洋的船票。干满了,分到一小块地。三代下来,我家成了这片土地上有头有脸的人。\n\n这片地,人人都说是「机会之地」。穷人来了能翻身,这话不假——我家就是活证据。\n\n这一遍,你坐进我的位置。你会看见这片繁荣是真的。你也会看见,它是建在什么上面的。',
        en: 'Around 1700, Virginia. The light has just come up, and I ride out to inspect the fields. My boots press into the red clay, still wet. The air is full of the smell of tobacco leaves, and one breath tells me how far this batch has cured.\n\nI am a planter in these parts. Along the river my family holds thousands of acres, all in tobacco. My grandfather came over as an indentured servant, working for years for nothing in exchange for passage across the Atlantic. When his term was done, he was given a small plot. Three generations on, my family became people of standing on this land.\n\nEveryone calls this a land of opportunity. The poor can rise here, and that is not a lie. My own family is living proof.\n\nThis pass puts you in my seat. You will see that the prosperity is real. You will also see what it is built upon.',
      },
      deliverGoal: 'N1 hook — 约 1700 弗吉尼亚清晨巡田 (红黏土/烟草味/几分熟) + 种植园主自我介绍 (祖父契约奴出身→分地→三代攒成几千英亩) + 「机会之地」自家是活证据 + 这一遍视角设定 (繁荣是真的, 也看它建在什么上)',
      engagementHook: '人人都说这是「机会之地」,我家就是活证据。可一片地能让一些人翻身,会不会正因为它压着另一些人?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲清楚我的生意。\n\n我种烟草。烟草是 cash crop(经济作物)——不是自己吃,是装上船卖去英国换钱的。整片南部殖民地都靠这个:弗吉尼亚和马里兰种烟草,再往南的南卡种稻米(rice)。\n\n种烟草最要命的一件事是:它累、它吃人手。一大片地,需要海量的劳力,日复一日地除草、采叶、晾制。雇人?雇不起。烟草价钱压得越来越低,我付不起工钱。\n\n所以我要的劳力,得便宜,最好不要工钱。\n\n这就是整个南部的逻辑:气候湿热、土地广,适合大种植园;大种植园要海量廉价劳力;于是「谁来干这些活、用什么身份干」,成了这片土地最核心的问题。\n\n我不是坏人。我只是要把产业经营下去。可你记住这条逻辑——它后面会把人逼到很黑的地方。',
        en: 'First, let me make my business clear.\n\nI grow tobacco. Tobacco is a cash crop, not something you eat yourself but something you load onto ships and sell to England for money. The whole southern colonies run on this. Virginia and Maryland grow tobacco; farther south, the Carolinas grow rice.\n\nThe deadly thing about tobacco is this: it is brutal, and it devours hands. A great field needs a vast amount of labor, day after day, weeding, picking leaves, curing them. Hire workers? I cannot afford to. The price of tobacco keeps being driven down, and I cannot pay wages.\n\nSo the labor I need must be cheap, and best of all, unpaid.\n\nThis is the logic of the entire South: a hot, humid climate and wide land suit large plantations; large plantations need vast cheap labor; and so "who does this work, and under what status" became the most central question on this land.\n\nI am not an evil man. I am only trying to keep my estate running. But remember this logic. Further on, it drives people to a very dark place.',
      },
      deliverGoal: 'N2 setup — 烟草是 cash crop (卖英国换钱) + 南部经济结构 (VA/MD 烟草 / 南卡稻米) + 烟草吃人手要海量廉价劳力 + 雇不起付不起工钱 → 「谁来干活、什么身份干」是核心问题 + 「我不是坏人只是要经营产业」伏笔黑暗',
      engagementHook: '我要的劳力,得便宜,最好不要工钱——这是一桩生意的逻辑。当「省成本」遇上「活人」,这条逻辑会把人带到哪里?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我家的劳力,一开始靠的是契约奴(indentured servant)。\n\n这套制度是这样:英国有的是穷人——没地、没活路、欠债、坐过牢。我们这边缺人手。于是有人跟他们签合同:你白干 5 到 7 年,我管你饭、管你住,还给你一张过大西洋的船票;到期了,我发你一身衣服、几样工具,有时一小块地。\n\n这叫 freedom dues(自由补偿)。我祖父当年就是这么过来的。\n\n听起来像个公平的买卖,对吧?穷人换一个翻身的机会。\n\n可你站在我这个位置算账就会发现一个问题:契约奴会到期。干满几年,他就自由了,他要地、要往上爬,甚至反过来跟我抢生意。我辛辛苦苦把他养熟了,他一转身就走了。\n\n对一个要把产业越做越大的人来说,「会到期的劳力」是个麻烦。我开始想:有没有一种劳力,永远不会到期?',
        en: 'My family\'s labor, at first, came from indentured servants.\n\nThe system worked like this: England had no shortage of the poor, with no land, no living, in debt, or out of jail. We were short of hands. So someone would sign a contract with them: you work for nothing for five to seven years, I feed and house you and give you passage across the Atlantic; when your term ends, I give you a set of clothes, some tools, sometimes a small plot of land.\n\nThis is called freedom dues. My own grandfather came over exactly this way.\n\nSounds like a fair bargain, doesn\'t it? The poor trade for a chance to rise.\n\nBut stand in my seat and do the arithmetic, and you find a problem: an indentured servant\'s term ends. Once the years are served, he is free, he wants land, he wants to climb, he may even turn around and compete with me for business. I worked hard to train him, and then he walks away.\n\nFor a man who wants to grow his estate larger and larger, "labor that ends" is a nuisance. I began to wonder: is there a kind of labor that never ends?',
      },
      deliverGoal: 'N3 setup — 契约奴制度 (英国穷人白干 5-7 年换船票+管吃住, 到期 freedom dues 衣服工具地) + 祖父这么来的 + 听起来公平 + 但精英算账: 契约奴会到期、要地、来抢生意 → 「有没有永远不会到期的劳力」',
      engagementHook: '契约奴会到期、会要地、会来跟我抢生意——对一个想做大的人,「会到期的劳力」是麻烦。你听出我这句「永远不会到期的劳力」要把人推向哪了吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你坐在弗吉尼亚议会(House of Burgesses)里。你既是种植园主,又是立法者——你不仅经营产业,你还能投票改法律。\n\n你手里有一个真实的恐慌记忆:1676 年的 Bacon\'s Rebellion(培根起义)。那年,一群穷白人——很多是干完契约却没分到好地的前契约奴——和一群被奴役的黑人,联手造反,烧了首府詹姆斯敦。\n\n穷白人和黑奴联手。这是你和你那些种植园主同侪,最怕看见的画面。因为底层人一旦不分肤色地团结起来,你们这些上层就压不住了。\n\n现在你要做决定。你手里有立法权。你可以选择:要么改善穷人的处境,让大家都有奔头;要么——把底层劈开,让穷白人和黑奴永远不可能再站到一起。\n\n哪条路对你的产业、对「秩序」更稳?你会怎么投这一票?',
        en: 'Now you are me.\n\nYou sit in the Virginia assembly, the House of Burgesses. You are both a planter and a lawmaker. You not only run an estate, you can vote to change the law.\n\nYou carry a real memory of panic: Bacon\'s Rebellion of 1676. That year a crowd of poor whites, many of them former indentured servants who had served their terms but received no good land, joined with a crowd of enslaved blacks, rose in revolt, and burned the capital, Jamestown.\n\nPoor whites and enslaved blacks, together. This is the sight you and your fellow planters fear most. Because once the people at the bottom unite without regard to skin color, you at the top can no longer hold them down.\n\nNow you must decide. You hold the power to make law. You can choose: either improve the lot of the poor so everyone has something to hope for, or split the bottom apart, so poor whites and enslaved blacks can never stand together again.\n\nWhich road is steadier for your estate, for "order"? How will you cast this vote?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — House of Burgesses 既种植园主又立法者 + 1676 Bacon\'s Rebellion 穷白人(前契约奴)+黑奴联手烧詹姆斯敦 + 精英最怕底层不分肤色团结 + 立法权抉择: 改善穷人处境 vs 劈开底层 (穷白人 vs 黑奴) + 你怎么投',
      engagementHook: '穷白人和黑奴曾经联手反抗——你手里有立法权,可以让大家都有奔头,也可以把底层劈成「白 vs 黑」让他们再不能联手。你会投哪一票?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我和议会里的同侪,选了劈开底层这条路。\n\n我们没有改善穷人的处境。我们做的是:用一连串法律,把「白人穷人」和「黑人」硬分成两类人。\n\n给穷白人一点点特权——哪怕你穷,你也是「白的」,你能拥有枪、能作证、将来或许能有自己的地。这点甜头,足够让穷白人觉得自己跟黑奴不是一路人。\n\n同时,把所有终身的、不见底的奴役,全压到黑人身上:你是黑的,你就是奴隶,而且终身,而且你的孩子生下来也是奴隶。\n\n这套操作有个名字,后世叫它「分而治之」。我们没有消灭底层的不满,我们只是给它划了一道线——一道按肤色划的线。线这边的人,再也不会跟线那边的人联手了。\n\n我投这些票的时候,没觉得自己在做一件历史性的坏事。我只觉得:这样,产业稳了,秩序保住了。',
        en: 'My fellows in the assembly and I chose the road of splitting the bottom apart.\n\nWe did not improve the lot of the poor. What we did was use a string of laws to force "poor whites" and "blacks" into two separate kinds of people.\n\nWe gave poor whites a little privilege. However poor you are, you are still "white," you may own a gun, you may give testimony, you may one day hold land of your own. That small sweetener was enough to make poor whites feel they were not the same as enslaved blacks.\n\nAt the same time, we pressed all the lifelong, bottomless servitude onto blacks: you are black, so you are a slave, and for life, and your children are born slaves too.\n\nThis maneuver has a name; later ages call it divide and rule. We did not remove the discontent at the bottom. We only drew a line through it, a line drawn by skin color. The people on this side of the line would never again join hands with the people on that side.\n\nWhen I cast these votes, I did not feel I was doing a historic evil. I only felt: this way, the estate is steady and order is kept.',
      },
      deliverGoal: 'N5 story — 选劈开底层: 一连串法律把白穷人 vs 黑人硬分两类 + 给穷白人一点特权 (白的/能有枪/能作证/将来或有地) + 把终身可继承奴役全压黑人身上 + 「分而治之」按肤色划线 + 精英自觉只是「保产业保秩序」不觉得在做历史性坏事',
      engagementHook: '我们没消灭底层的不满,只给它按肤色划了一道线——线这边再不会跟线那边联手。我投票时只觉得「产业稳了」。一个人做下大坏事,会不会正因为他只看见眼前的「稳」?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '到这一步,我嘴里的那个词——「机会」——你该听出它的真意思了。\n\n对我,「机会」就是:更多的地,更多的劳力,更划算的生意。把契约奴换成终身奴隶,对我是天大的「机会」——不要工钱,永远不走,孩子也归我。这笔账,太划算了。\n\n可同一个词,到了别人嘴里,完全是另一回事。\n\n那个签了契约、白干几年想翻身的人(你换到契约奴那一遍会遇到他/她),他的「机会」是:熬到期,分到地,当个自耕农。可我们这套按肤色划的线,正一点点把他脚底下那条「能翻身」的路,改写成「看你是什么肤色」。\n\n还有最底下那个被我买来的人(你换到被奴役者那一遍会遇到他),他根本没有「机会」这个词——没有契约,没有年限,没有尽头。讽刺的是,我南边那些种稻发大财的同行,靠的正是从西非掳来的人带来的种稻手艺。他的知识让主人致富,他自己一无所有。\n\n同一片殖民地,同一个「机会」——我在顶上数钱,他在底下数年头(他连年头都没有)。同一个词,三个意思。',
        en: 'By this point, that word in my mouth, "opportunity," you should hear what it really means.\n\nFor me, "opportunity" is: more land, more labor, a better bargain. Swapping indentured servants for lifelong slaves was, for me, an enormous "opportunity," no wages, never leaving, the children mine as well. That ledger was simply too good.\n\nBut the same word, in another mouth, is an entirely different thing.\n\nThe person who signed a contract and works for years for nothing, hoping to rise (you will meet him or her when you switch to the indentured servant\'s pass), his "opportunity" is: survive to the end of the term, get a plot, become a freeholder. But this line we drew by skin color is slowly rewriting the road under his feet from "you can rise" into "it depends on your color."\n\nAnd the man at the very bottom whom I bought (you will meet him when you switch to the enslaved person\'s pass) has no such word as "opportunity" at all, no contract, no term, no end. The irony is that my neighbors to the south, growing rich on rice, owe it to the rice-growing skill that people seized from West Africa brought with them. His knowledge made the master rich; he himself had nothing.\n\nThe same colony, the same "opportunity." I count money at the top; he counts years at the bottom (he has not even years). One word, three meanings.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 「机会」一个词三个意思: 精英=更多地/劳力/把契约奴换终身奴隶最划算 / 契约奴=熬到期分地翻身但被肤色线改写 / 被奴役者=根本没有「机会」无契约无年限无尽头 + 南卡稻米靠西非种稻知识 + 桥到另两 lens',
      engagementHook: '同一个「机会」——我在顶上数钱,他在底下连年头都没得数。一个词在三层人嘴里是三件事。你身边有没有一个「人人都说好」的东西,对不同的人意思完全相反?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得讲一件我们这片土地很少有人愿意细说的事:这些地,是从哪来的。\n\n我家几千英亩烟草地,往西边一直推。可那片地不是「空的」。山那边、河那头,本来住着原住民。\n\n你也许听过一种说法:殖民者来到一片「空地」,先到先得。这话不对。那片地一点都不空——是被清空的。\n\n往北,在新英格兰,1675 到 1676 年打过一场惨仗:原住民领袖 Metacom(英国人叫他 King Philip)联合好几个部落,反抗殖民者一步步往他们土地上挤。打了一年多,原住民惨败——被大批杀掉、卖为奴隶、赶离世代居住的土地。\n\n我们南边没那么大的仗,但路数一样:用条约、用枪、用酒、用病,一块一块把原住民往西边推,腾出地来,种我的烟草。\n\n所以你看,我的「机会之地」,是两头来的:地,从原住民手里;劳力,从非洲。两样我都不是「买」来的——我是拿来的。',
        en: 'I must speak of something few on this land care to dwell on: where these fields came from.\n\nMy family\'s thousands of acres of tobacco push steadily westward. But that land was not "empty." Beyond the hills, across the river, native peoples had lived there.\n\nYou may have heard it said: the settlers came to an "empty land," first come first served. That is not true. The land was not empty at all. It was emptied.\n\nTo the north, in New England, a brutal war was fought from 1675 to 1676: the native leader Metacom, whom the English called King Philip, united several peoples to resist the settlers pressing step by step onto their land. After more than a year, the native side was crushed, killed in great numbers, sold into slavery, driven from the land they had lived on for generations.\n\nWe in the south had no war so large, but the method was the same: by treaty, by gun, by liquor, by disease, we pushed the native peoples westward plot by plot, clearing the ground to grow my tobacco.\n\nSo you see, my "land of opportunity" came from two directions: the land, from native hands; the labor, from Africa. Neither did I "buy." I took.',
      },
      deliverGoal: 'N7 story — 地从哪来: 几千英亩往西推 + 「空地先到先得」是错的, 地是被清空的 + King Philip\'s War / Metacom 1675-76 新英格兰原住民反抗惨败 (杀/卖为奴/驱离) + 南部用条约/枪/酒/病一块块推走原住民 + 「机会之地」地从原住民/劳力从非洲, 都不是买是拿',
      engagementHook: '都说殖民者来到一片「空地」先到先得——可那地不是空的,是被清空的。我的「机会之地」,地从原住民手里,劳力从非洲身上,两样都不是买的,是拿的。你怎么看「先到先得」这四个字?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别以为我这片殖民地能自己说了算。我头上还压着一个英国。\n\n英国对我们这些殖民地,有一套规矩,叫 mercantilism(重商主义)。意思是:殖民地是给母国服务的——你给我供原料,你买我的成品,你不许跟别国做生意。\n\n落到纸上,是一连串 Navigation Acts(航海条例)。规定我的烟草只能用英国船运、主要卖给英国。我赚的钱,有一大块是给英国赚的。\n\n说实话,这让我憋屈。我辛苦种的烟草,卖给谁、用谁的船,我自己说了不算。\n\n不过这是后话——这股憋屈,几十年后才会真的发酵成大事。我活着这会儿(约 1700 年),我还远没到要跟母国翻脸的地步。我顾着的,是眼前这片地、这些劳力、这桩生意。\n\n我跟你说这个,只是让你看清楚:连我这个「赢家」,头上也有一道天花板。这片殖民地的每一层,都被压在另一层底下。',
        en: 'Do not imagine my colony decides its own affairs. There is still an England pressing down on me.\n\nEngland had a set of rules for us colonies, called mercantilism. It meant: the colony serves the mother country, you supply me raw materials, you buy my finished goods, you may not trade with other nations.\n\nOn paper, this was a string of Navigation Acts. They ruled that my tobacco could only be carried in English ships and sold mainly to England. A large share of what I earned, I earned for England.\n\nHonestly, this galled me. The tobacco I labored to grow, whom I sold it to and whose ships I used, was not mine to decide.\n\nBut that is for later. This resentment would only ferment into something large decades on. In my own lifetime, around 1700, I was nowhere near falling out with the mother country. What I attended to was the land before me, this labor, this business.\n\nI tell you this only so you see clearly: even I, a "winner," have a ceiling over my head. Every layer of this colony is pressed beneath another.',
      },
      deliverGoal: 'N8 story — mercantilism (殖民地给母国供原料/买成品/不许跟别国做生意) + Navigation Acts (烟草只能英国船/主要卖英国) + 精英也憋屈 + 但明确「这是后话, 约 1700 还远没到跟母国翻脸」(AVOID 独立战争 overlap) + 连赢家头上也有天花板/每层压在另一层下',
      engagementHook: '连我这个「赢家」,头上也有英国这道天花板——我的烟草卖给谁,我自己说了不算。一个压着别人的人,自己也被更上面的人压着。这片地是不是一层压一层?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我这一辈,往后拉几十年,你会看见我做的事结出了什么果。\n\n我和我那一代议会里的人,用法律把奴役按肤色钉死。约 1700 年,这片土地上被奴役的人还只有约 2.7 万。到 1750 年,涨到约 24 万——几乎全在南部,几乎全是黑人。我们当年那道「按肤色划的线」,长成了整个南部经济的地基。\n\n这地基,不会轻易拆。它太赚钱了。它绑住了太多人的身家。它后来一路烧——烧到 19 世纪,变成一场为「人到底算不算人」打的内战,几十万人死在里面。\n\n我活着的时候,只觉得自己在管好产业。我没看见——或者说,我不想看见——我亲手投下的那些票,是在给一百多年后的一场血,埋下引线。\n\n一个人做的事,后果常常不在他自己这一辈结账。账,留给了后人。',
        en: 'Pull the lens from my generation forward a few decades, and you will see what my deeds bore as fruit.\n\nMy generation in the assembly nailed servitude down by skin color in law. Around 1700, the enslaved on this land numbered only about 27,000. By 1750 it had risen to about 240,000, nearly all in the South, nearly all black. That line we drew by color grew into the very foundation of the entire southern economy.\n\nThis foundation does not come apart easily. It was too profitable. It bound up too many fortunes. Later it burned all the way, into the nineteenth century, into a civil war fought over whether a person counts as a person, in which hundreds of thousands died.\n\nIn my lifetime, I only felt I was managing my estate well. I did not see, or rather did not wish to see, that the votes I cast with my own hand were laying a fuse for a sea of blood a century and more later.\n\nThe consequences of what a man does often do not come due in his own lifetime. The bill is left to those who come after.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 用法律按肤色钉死奴役 + 被奴役人口 1700 约 2.7 万 → 1750 约 24 万 (几乎全南部全黑人) + 「按肤色划的线」成南部经济地基 → 跨 Topic 锚 civil-war (一路烧向内战几十万人死) + 「我只觉得管好产业, 没看见投票在埋引线」+ 账留给后人',
      engagementHook: '约 1700 被奴役的人约 2.7 万,1750 涨到约 24 万——我那道按肤色划的线,长成了整个南部的地基,一百多年后烧成一场内战。我做的事,账却留给了后人。你怎么看这种「我这辈子没结的账」?',
      expectsRealAnswer: false,
    },
    {
      id: 'ce-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我,两种说法都站得住。\n\n一种说法:我是个尽责的建设者。我从祖父留下的一小块地,经营出一片几千英亩的庄园。我喂活了一大家子人和一片土地上的活计。我守法、上教堂、坐在议会里为这片殖民地的「秩序」尽力。在「机会之地」里,我就是那个抓住机会、把家业做大的成功者。\n\n另一种说法:我是制度性压迫的设计者。同一双手,既经营产业,也投票把「奴隶」按肤色钉死、终身、连孩子也算进去。我的繁荣,地是从原住民手里夺的,劳力是从非洲掳的。我亲手把会翻身的契约奴制,改写成了不见底的种族奴隶制。我所谓的「秩序」,是建在别人不能动弹之上的。\n\n这两边不是「优点加缺点」。是同一套经营逻辑的两面——同一份精明,同一个我。\n\n你怎么看?想 30 秒,写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a dutiful builder. From the small plot my grandfather left, I built an estate of thousands of acres. I fed a large household and the livelihoods of a whole stretch of land. I obeyed the law, went to church, and sat in the assembly working for the "order" of this colony. In a "land of opportunity," I was the one who seized the opportunity and made the family great.\n\nThe other view: I was the architect of institutional oppression. The same hands that ran the estate also voted to nail "slave" down by skin color, for life, with the children counted in too. My prosperity took its land from native hands and its labor from Africa by force. With my own hand I rewrote indenture, from which one could rise, into a bottomless racial slavery. The "order" I speak of was built on others being unable to move.\n\nThese are not "strengths and weaknesses." They are two faces of one logic of management, the same shrewdness, the same me.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (尽责的建设者/小地到几千英亩/喂活一家子/守法上教堂为秩序尽力/机会之地的成功者) / 另一种说法 (制度性压迫设计者/投票把奴隶按肤色钉死/地夺自原住民劳力掳自非洲/把契约奴改写成种族奴隶制) / 同一套逻辑两面 / 想 30 秒',
      engagementHook: '尽责的建设者,和制度性压迫的设计者——是同一个我,同一份精明的两面。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'ce-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,你会怎么评价这样一片「机会之地」?\n\n一片土地,一边真的让穷人翻身(我家就是),一边把另一些人钉成不见底的财产、把原住民赶离世代的土地。这两件事不是分开的两片殖民地,是同一片殖民地的同一面。把它们放在同一个天平上,你怎么称?\n\n不过先记住:你这一遍,只听到了我这个赢家的说法。那个白干几年想翻身、却看着脚底的线被改成肤色的契约奴,那个被掳过大西洋、连「机会」都不属于他的被奴役者——他们各有各的说法。换个视角再走一遍,你会听见他们怎么讲同一片土地,也会看看你刚才的判断站不站得住。\n\n再想一步:今天你身边,有没有一种「大家都说很好、很有机会」的东西——一所学校、一个游戏、一个群——可它的「好」,其实是建在某些人吃亏、被排除的基础上?\n\n那时候,你会只顾着自己抓住「机会」,还是会去看一眼:这机会,是谁在替你付的账?',
        en: 'Having walked my whole life, how would you judge a "land of opportunity" like this?\n\nA land that on one side truly lets the poor rise (my own family did) and on the other nails some people down as bottomless property and drives the native peoples from land held for generations. These are not two separate colonies. They are one face of the same colony. Put them on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard only my case, the winner\'s. The indentured servant who worked years for nothing hoping to rise, only to watch the line under his feet be redrawn into color, and the enslaved person dragged across the Atlantic, for whom even "opportunity" did not belong, each has his own case. Run it again through another lens and you will hear how they tell the same land, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there something "everyone says is good, full of opportunity," a school, a game, a group, whose "good" is in fact built on some people losing out, being shut out?\n\nWhen that happens, will you only mind seizing the "opportunity" for yourself, or will you look once at who is paying the bill for it on your behalf?',
      },
      deliverGoal: 'N11 close — 评价「机会之地」(真让穷人翻身 vs 把人钉成财产/赶走原住民, 同一片殖民地同一面) + 跨视角指针 ①只听到赢家一边 ②契约奴/被奴役者各有说法换视角再走 + transfer「今天你身边大家说好但建在某些人吃亏上的东西」+ 你只顾抓机会还是看谁替你付账',
      engagementHook: '一片地,一边真让穷人翻身,一边把人钉成财产、赶走原住民,装在同一片殖民地里。你会怎么评价这样的「机会之地」?今天你身边那个「大家都说好」的东西,是谁在替你付账?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: 契约奴 / 拼搏的小农 (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var indenturedServantLens = {
  id: 'indentured-servant',
  name: 'Indentured Servant',
  nameCn: '契约奴',
  role: 'lonely-mediator',
  perspectiveTag: 'between-freedom-and-bondage',
  icon: '⚖️',
  description: {
    cn: '她是一个从英格兰按手印签下卖身合同、刚在弗吉尼亚烟草田里磨破手的姑娘（一个合成人物，把无数没留下名字的契约奴合成一个人）。这一遍让你跟她一起数着日子熬，看脚下那条「熬到期就能翻身」的路，怎么被一道道法律悄悄改写成「看你是什么肤色」。',
    en: 'She is an English girl who pressed her mark to a contract selling years of her body, hands now blistered in a Virginia tobacco field (a composite, gathering countless unnamed indentured servants into one person). This pass counts the days down with her, watching the road of "serve out your term and rise" be quietly rewritten, law by law, into "it depends on your color."',
  },
  storyboard: [
    {
      id: 'is-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我手上全是水泡,磨破了又长。这是烟草田的活给我的。\n\n约 1690 年代,我从英格兰上了岸,到了弗吉尼亚。在英国,我是个没地、没活路的穷姑娘。有人给我一张合同:签几年,白干,不给工钱,管你饭、管你住;到期发你一身衣服、几样工具,运气好有一小块地。我按了手印,换来一张过大西洋的船票。\n\n我叫不上自己是什么身份。我不是自由人——这几年我归主人管,他能买卖我、打我、延我的年限。可我也不是那种终身的奴隶——我有年限,熬到头,我就自由了。\n\n我卡在中间。一头是自由,一头是奴役,我在那条线上走。\n\n这一遍,你站在我这里。你会看见:这条线,后来是怎么被人挪动的——挪到了我的脚底下。',
        en: 'My hands are all blisters, broken open and grown back. This is what the tobacco fields gave me.\n\nIn the 1690s I came ashore in Virginia, from England. There I was a poor girl with no land and no living. Someone gave me a contract: sign for years, work for nothing, no wages, food and lodging provided; at term\'s end, a set of clothes, some tools, with luck a small plot. I pressed my mark to it, in exchange for passage across the Atlantic.\n\nI cannot name what I am. I am not a free person, for these years I belong to the master, who can sell me, beat me, extend my term. But I am not a slave for life either, I have a term, and when I reach its end, I am free.\n\nI am caught in the middle. Freedom on one side, bondage on the other, and I walk that line between them.\n\nThis pass, you stand where I stand. You will see how that line was later moved, moved to right under my feet.',
      },
      deliverGoal: 'N1 hook — 手上水泡/烟草田 + 约 1690s 上岸弗吉尼亚 + 英国没地穷姑娘 + 契约 (签几年白干换船票, 到期衣服工具有时地) + 卡中间 (不是自由人主人能买卖打延年限/也不是终身奴隶有年限熬到头自由) + 这一遍看「线怎么被挪到脚底下」',
      engagementHook: '我不是自由人,也不是终身奴隶——我卡在两者中间那条线上。一个「介于两者之间」的人,处境会比两头都更难,还是更有指望?',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我怎么会签那张卖身几年的合同。\n\n在英国,我什么都没有。没有地,没有活路。城里人挤人,乡下没我的份。听说大西洋那头有片新地方,缺人手,只要你肯卖几年的力气,就能去。\n\n对一个一无所有的人,这是一根稻草。我抓住了。\n\n签合同的人跟我说:几年,一晃就过去了。熬过去,你就是自由人,你能分到地,你能在那片新土地上重新做人。\n\n我信了。我也只能信。留在英国,我这辈子就是个看不见明天的穷人;去那边,至少有个盼头——几年以后的盼头。\n\n船票不要钱,可代价是:这几年,我的人身,归别人。\n\n你说我傻吗?换作你,一无所有,有人给你一张「卖几年身、换一个未来」的票,你签不签?',
        en: 'First, how I came to sign that contract selling myself for years.\n\nIn England I had nothing. No land, no living. The cities were packed shoulder to shoulder, and the countryside had no place for me. They said across the Atlantic there was a new land, short of hands, and if you would sell a few years of your strength, you could go.\n\nFor someone who had nothing, this was a straw. I grabbed it.\n\nThe man with the contract told me: a few years, and they will pass in a blink. Get through them, and you are a free person, you can be given land, you can start your life over on that new land.\n\nI believed it. I had no choice but to believe it. Stay in England, and I am a pauper with no tomorrow my whole life; go over there, and at least there is something to hope for, a hope a few years off.\n\nThe passage cost no money, but the price was this: for these years, my person belongs to another.\n\nDo you call me a fool? In my place, with nothing, if someone handed you a ticket of "sell a few years, get a future," would you sign?',
      },
      deliverGoal: 'N2 setup — 为何签卖身合同 (英国一无所有/没地没活路) + 大西洋那头缺人手卖几年力气就能去 + 「几年一晃就过去, 熬过你就自由能分地重新做人」+ 信了也只能信 (留英国看不见明天/去那边有盼头) + 船票不要钱代价是几年人身归别人',
      engagementHook: '一无所有的我,有人给我一张「卖几年身、换一个未来」的票。我签了。换作你,你签不签?',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '上岸以后,跟合同上说的不一样。\n\n船上就够呛了——挤、脏、病,有人没熬到岸。上了岸,我被带到种植园,开始干烟草的活。\n\n烟草这东西,吃人。一天到晚弯着腰,除草、捉虫、采叶、晾制。手上的水泡破了又起。夏天湿热得喘不过气。很多跟我一起上岸的契约奴,根本没活到合同到期就累死、病死了。\n\n这几年里,我在法律上还算个「人」——可这「人」是打折的。主人不高兴,能打我;他缺钱,能把我的合同卖给别人,我连去哪都说了不算;我要是想逃、或者怀了孩子,他能合法地延长我的年限。\n\n我每天数着日子过。还有几年。还有几年。\n\n那块到期分给我的地,那身衣服,那几样工具——freedom dues,自由补偿——是我熬下去的唯一理由。\n\n可我那时候还不知道:有人正在动手,要改一改「到期之后」的规矩。',
        en: 'After landing, things were not as the contract said.\n\nThe ship alone was grim, packed, filthy, sick, some who did not last to shore. Ashore, I was taken to a plantation and set to tobacco work.\n\nTobacco devours people. All day bent over, weeding, picking off bugs, plucking leaves, curing them. The blisters on my hands broke and rose again. The summer was humid enough to choke. Many who landed alongside me died of overwork or sickness before their terms were ever up.\n\nIn these years I still counted, in law, as a "person," but a person at a discount. Displease the master and he could beat me; short of money, he could sell my contract to another and I had no say where I went; should I try to flee, or fall pregnant, he could lawfully extend my term.\n\nI counted the days. A few more years. A few more years.\n\nThat plot to be given me at term\'s end, that set of clothes, those few tools, the freedom dues, were the only reason I held on.\n\nBut I did not yet know: someone was at work, changing the rules of "after the term is up."',
      },
      deliverGoal: 'N3 setup — 上岸跟合同不一样 + 船上挤脏病有人没熬到岸 + 烟草吃人 (弯腰除草采叶晾制/水泡/湿热/很多契约奴没活到到期累死病死) + 法律上「人」但打折 (能被打/合同被卖/逃或怀孕能合法延年限) + 数着日子熬 + freedom dues 是唯一理由 + 伏笔有人在改「到期之后」规矩',
      engagementHook: '这几年我法律上还算个「人」——可是个打折的「人」:能被打、能被卖、逃跑或怀孕能被合法延长年限。一个「打折的人」,到底算人还是不算?',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你熬。你数着日子,盼着到期那天。在你心里,有一条清清楚楚的路:熬满几年→拿到 freedom dues→分到一小块地→自己当自耕农→将来或许也能像那些种植园主一样,把日子越过越大。\n\n这条路不是空想。你身边真有人走通了——比你早来的契约奴,有人熬出头,分了地,成了有头有脸的自耕农。种植园主里,好些人的祖上就是契约奴。\n\n这就是为什么大家管这叫「机会之地」。底层真的有一条往上爬的路。\n\n可你最近隐隐觉得不对劲。你听说,那些和你一起干活、皮肤是黑色的人,他们的处境跟你越来越不一样了——他们的「到期」,好像被取消了;他们的孩子,生下来就归主人。\n\n你心里冒出一个问题,你不敢深想:那条「熬到期就能翻身」的路,对所有人都还算数吗?还是说,它正在悄悄变成——「看你是什么肤色」?',
        en: 'Now you are me.\n\nYou endure. You count the days, longing for the day your term ends. In your heart there is a clear road: serve out the years, get the freedom dues, be given a small plot, become a freeholder yourself, and one day perhaps, like those planters, make your life larger and larger.\n\nThis road is not a fantasy. People around you have truly walked it, indentured servants who came before you, some served out their terms, got land, became freeholders of standing. Among the planters, many had ancestors who were indentured servants.\n\nThis is why everyone calls it a land of opportunity. At the bottom there is truly a road upward.\n\nBut lately you sense something is wrong. You hear that those who work beside you, whose skin is black, find their situation growing more and more different from yours. Their "term," it seems, is being canceled; their children are born belonging to the master.\n\nA question rises in you that you dare not think through: that road of "serve out the term and rise," does it still hold for everyone? Or is it quietly becoming "it depends on your color"?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 熬+数日子 + 清楚的路 (熬满→freedom dues→分地→自耕农→将来或许做大) + 不是空想 (早来的契约奴走通了/种植园主祖上是契约奴) → 「机会之地」底层真有上升路 + 隐隐不对劲 (黑皮肤同伴处境越来越不同/到期被取消/孩子生下归主人) + 不敢深想的问题: 这条路对所有人还算数吗还是变成看肤色',
      engagementHook: '我盼着熬到期翻身,这条路真有人走通过。可我隐隐发现:跟我一起干活的黑人,他们的「到期」好像被取消了。同一条上升的路,正在变成「看你是什么肤色」——你敢往下想吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我那个不敢深想的问题,有一个源头,在我上岸之前就埋下了。\n\n1676 年,弗吉尼亚出过一件大事:Bacon\'s Rebellion(培根起义)。一群穷白人——很多是干完契约却没分到好地、一肚子火的前契约奴——和一群被奴役的黑人,联手造反,烧了首府詹姆斯敦。\n\n你听清这个组合:穷白人 + 黑奴,联手。底层不分肤色,站到了一起。\n\n这下,种植园主们吓坏了。底层一旦团结,上层就压不住。\n\n他们想出的对策,不是改善我们这些底层人的日子,而是:把我们劈开。\n\n他们用法律,一道一道,把「白人穷人」和「黑人」分成两类。给我这样的穷白人一点点甜头——你穷归穷,你好歹是「白的」,你能有枪、能作证、将来能有地。同时,把那种终身的、传给孩子的奴役,全压到黑人头上。\n\n我那条「熬到期翻身」的路,保住了一点点——代价是,我脚底下那条线,从「穷 vs 富」,被人重新画成了「白 vs 黑」。',
        en: 'That question I dared not think through has a source, buried before I ever landed.\n\nIn 1676, something great happened in Virginia: Bacon\'s Rebellion. A crowd of poor whites, many of them former indentured servants who had served their terms but got no good land and were full of fury, joined with a crowd of enslaved blacks, rose in revolt, and burned the capital, Jamestown.\n\nHear the combination clearly: poor whites plus enslaved blacks, together. The bottom, regardless of color, stood as one.\n\nAt this the planters were terrified. Once the bottom unites, the top cannot hold them down.\n\nThe answer they devised was not to better the lot of us at the bottom, but to split us apart.\n\nWith laws, one after another, they sorted "poor whites" and "blacks" into two kinds. They gave a poor white like me a small sweetener, poor you may be, but at least you are "white," you may own a gun, give testimony, one day hold land. At the same time, they pressed all the lifelong servitude, passed down to the children, onto blacks.\n\nMy road of "serve out the term and rise" was kept, a little, and the price was that the line under my feet was redrawn, from "poor versus rich" into "white versus black."',
      },
      deliverGoal: 'N5 story — 1676 Bacon\'s Rebellion 穷白人(前契约奴满肚火)+黑奴联手烧詹姆斯敦 + 底层不分肤色站一起 + 精英吓坏 + 对策不是改善底层而是劈开 + 一道道法律分白穷人 vs 黑人 + 给穷白人甜头(白的/有枪/能作证/将来有地) + 终身可继承奴役全压黑人 + 「我的翻身路保住一点, 代价是脚底线从穷vs富被重画成白vs黑」',
      engagementHook: '穷白人和黑奴曾经联手反抗。精英怕了,就用法律把我们劈成「白 vs 黑」——给我一点甜头,把终身奴役全压给黑人。我保住了一点翻身的路,代价是脚底那条线被重画了。这点「甜头」,你会接吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '到这一步,我才真正懂了「机会」这个词,有多滑。\n\n对我,「机会」一度是实实在在的:熬到期,分到地,翻身。我脚下确实有一条往上的路。\n\n可这条路保住的方式,很脏。它不是因为这片土地对穷人格外仁慈,才给我留了路;是因为种植园主(你换到他那一遍能听见他怎么算这笔账)需要把我和黑人分开——他们留我一条路,是为了让我心甘情愿站到那条肤色线的「这一边」,再不去跟黑人联手。\n\n我的「机会」,是用别人「没有机会」换来的。\n\n那个被掳过大西洋的人(你换到他那一遍会遇到他),他没有契约,没有年限,没有尽头。他的孩子生下来就是奴隶。我熬几年能走出去的门,对他是一堵墙。\n\n同一片殖民地,同一个「机会」——种植园主拿它数钱,我拿它换一条窄路,而他,根本分不到这个词。一个词,三个意思。我站在中间,看得最清楚,也最难受:我的那条窄路,是踩着他的没路,才铺出来的。',
        en: 'Only at this point did I truly understand how slippery the word "opportunity" is.\n\nFor me, "opportunity" was once solid: serve out the term, get land, rise. Under my feet there truly was a road upward.\n\nBut the way that road was kept is filthy. It was not that this land was specially kind to the poor and so left me a road; it was that the planters (you can hear how they reckon this ledger when you switch to their pass) needed to separate me from the blacks. They left me a road so that I would willingly take "this side" of the color line and never again join hands with the blacks.\n\nMy "opportunity" was bought with others having no opportunity.\n\nThe man dragged across the Atlantic (you will meet him when you switch to his pass) has no contract, no term, no end. His children are born slaves. The door I can walk out of after a few years is, for him, a wall.\n\nThe same colony, the same "opportunity." The planter counts money with it, I trade it for a narrow road, and he gets no share of the word at all. One word, three meanings. I stand in the middle, seeing it clearest and feeling it worst: my narrow road was paved only by standing on his having no road.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 「机会」一个词三个意思从 mediator 视角看最清: 精英=数钱 / 契约奴=换一条窄路 / 被奴役者=根本分不到这个词 + 我的「机会」用别人「没有机会」换来 (精英需要把我跟黑人分开/留我一条路让我站肤色线这边) + 我能走出的门对他是墙 + 桥到另两 lens + 站中间看最清最难受',
      engagementHook: '同一个「机会」:种植园主拿它数钱,我拿它换一条窄路,他根本分不到这个词。我站在中间最难受——我那条窄路,是踩着他没有路铺出来的。一个人的「机会」用另一个人的「没机会」换来,这还算「机会」吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得说说那道甜头,是怎么把我变成「帮凶」的。\n\n精英给我的那点特权——我是「白的」,我能有枪,我能作证——听起来是好事,对吧?可它有个看不见的钩子。\n\n它让我觉得:我跟黑人不是一路人。我们俩都在底层挨累,可那条肤色线让我相信,我比他高一等,我跟上面的白人种植园主才是「自己人」。\n\n于是,我不再想跟黑人联手了。当主人需要有人帮着看管、追逃奴、作证,我这样的穷白人,有时候就成了那只手。\n\n我没多少东西,可我有「白」这一样。精英只花了这么一点点成本,就买断了我的忠诚,也买断了底层再一次联手的可能。\n\n这是我这个「中间人」最不愿承认的事:我一边是被压的人,一边又被那道甜头收编,成了帮着压别人的人。\n\n我恨上面那些种植园主。可那道肤色线,我自己,也站了上去。',
        en: 'I must tell how that sweetener turned me into an accomplice.\n\nThe little privilege the elite gave me, that I am "white," that I may own a gun, that I may give testimony, sounds like a good thing, doesn\'t it? But it has a hidden hook.\n\nIt made me feel: I am not the same kind as the blacks. We both toil at the bottom, but that color line made me believe I was a rank above him, that I and the white planters above were the real "our own people."\n\nAnd so I no longer wished to join hands with the blacks. When the master needed someone to help watch over them, chase down runaways, give testimony, a poor white like me sometimes became that hand.\n\nI had little, but I had "white." For only this small cost, the elite bought my loyalty, and bought out the chance of the bottom ever uniting again.\n\nThis is the thing I, the "man in the middle," am least willing to admit: I was at once one of the oppressed and, won over by that sweetener, one who helped oppress another.\n\nI hated the planters above me. Yet that color line, I too, stepped onto it.',
      },
      deliverGoal: 'N7 story — 甜头怎么把契约奴变帮凶 + 特权(白的/有枪/能作证)有看不见的钩子 + 让我觉得跟黑人不是一路/我高一等/跟白种植园主才是自己人 + 不再想联手 + 穷白人成看管/追逃奴/作证的手 + 精英花一点成本买断忠诚+买断底层联手可能 + 中间人最不愿承认: 既是被压的也是帮着压别人的 + 「我恨种植园主, 可肤色线我自己也站了上去」',
      engagementHook: '精英只花「你是白的」这一点点成本,就买断了我的忠诚,让我去帮着看管、追逃奴。我恨上面的种植园主,可那道肤色线,我自己也站了上去。被压的人转身去压更底下的人——你怎么看这种事?',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别忘了,我熬契约的这片殖民地,也不是铁板一块。它有三块,三个样子。\n\n我在的弗吉尼亚,属于南部:大种植园,种烟草、稻米,最吃廉价劳力,所以契约奴和奴隶最多,那道肤色线也划得最狠。\n\n往北,中部殖民地(纽约、宾州那一带)不一样。那里地肥,人种小麦、玉米,是「面包篮」。人也最杂:宾州有 Quaker(贵格会),纽约有荷兰人后裔,各种教派、各国移民混居。那是三块里最宽容、最多元的一块。\n\n再往北,新英格兰:土薄、冬长,养不起大种植园。人靠小农场、捕鱼、造船、海运过日子,围着镇子和教会转,清教徒当家。\n\n同一面英国国旗下,三块地长成三种人——因为地理不一样,经济就不一样,人怎么活、用什么劳力,就全不一样。\n\n我有时会想:要是当年我上的不是弗吉尼亚的船,是宾州的呢?那道把我和黑人劈开的肤色线,会不会就没那么狠?同一个我,落在不同的地方,命会很不一样。',
        en: 'Do not forget, the colony where I served my indenture was not one solid block. It had three parts, three faces.\n\nMy Virginia belongs to the South: large plantations growing tobacco and rice, hungriest for cheap labor, and so with the most indentured servants and slaves, and the color line drawn the hardest.\n\nTo the north, the Middle colonies (around New York and Pennsylvania) are different. The land is rich, people grow wheat and corn, it is the breadbasket. The people are the most mixed too: Pennsylvania has Quakers, New York has the descendants of the Dutch, all manner of sects and migrants from many lands living side by side. It is the most tolerant, most diverse of the three.\n\nFarther north, New England: thin soil, long winters, unable to support large plantations. People live by small farms, fishing, shipbuilding, shipping, turning around the town and the church, with the Puritans in charge.\n\nUnder the same English flag, the three lands grew into three kinds of people, because the geography differed, so the economy differed, and so how people lived and what labor they used differed entirely.\n\nSometimes I think: had I boarded not the Virginia ship but the Pennsylvania one, would that color line splitting me from the blacks have been less harsh? The same me, landing in a different place, would have a very different fate.',
      },
      deliverGoal: 'N8 story — 殖民地不是铁板一块, 三大区 (3-region 教学核心) + 南部(VA 大种植园/烟草稻米/最吃廉价劳力/契约奴奴隶最多/肤色线最狠) + 中部(纽约宾州/面包篮小麦玉米/最杂: Quaker荷兰后裔多教派/最宽容多元) + 新英格兰(土薄冬长/小农捕鱼造船海运/镇与教会/清教徒) + 「地理不同→经济不同→怎么活用什么劳力不同」+ 同一个我落不同地方命不同',
      engagementHook: '同一面国旗下,新英格兰、中部、南部长成三种人——地理不同,经济就不同,人怎么活、用什么劳力就全不同。要是我当年上的是宾州的船而不是弗吉尼亚的,我的命会不会很不一样?',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头往后拉,看看我这一代契约奴,后来怎么了。\n\n像我这样的人,是一道正在关上的门。\n\n17 世纪上半叶,种植园缺人,契约奴是主力,有人熬出头真的翻了身。可越往后,种植园主越算明白:契约奴会到期、会要地、会跟你争;不如直接买终身奴隶——不要工钱,永远不走,孩子也归你。\n\n于是从我这一代往后,契约奴越来越少,被奴役的非洲人越来越多。约 1700 年这片地上被奴役的人约 2.7 万,到 1750 年涨到约 24 万。我们契约奴这条「会翻身的底层路」,慢慢被「不见底的终身奴隶」取代了。\n\n我这一代,是个转折点上的人。我们这些白契约奴,有的熬出头,被收编进了「白人」这一边——代价是,我们脚下那道线,被永久地焊死成了「种族」。\n\n我留下的不是一座丰碑。我留下的是一个证据:一条原本按「穷富」分的线,是怎么在我这一代人手里,被一点一点改成按「肤色」分的。',
        en: 'Pull the lens forward, and see what became of my generation of indentured servants.\n\nPeople like me were a door swinging shut.\n\nIn the first half of the 1600s, plantations were short of hands, indentured servants were the mainstay, and some served out their terms and truly rose. But further on, the planters reckoned it clearly: an indentured servant\'s term ends, he wants land, he competes with you; better to buy a slave for life, no wages, never leaving, the children yours too.\n\nSo from my generation on, indentured servants grew fewer and the enslaved Africans grew more. Around 1700 the enslaved on this land numbered about 27,000; by 1750 it had risen to about 240,000. Our indentured servants\' "rising road at the bottom" was slowly replaced by "bottomless slavery for life."\n\nMy generation stood on a turning point. We white indentured servants, some served out our terms and were absorbed into "the whites," and the price was that the line under our feet was welded permanently into "race."\n\nWhat I leave behind is not a monument. What I leave is a piece of evidence: how a line once drawn by "poor and rich" was, in the hands of my generation, changed bit by bit into one drawn by "color."',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 契约奴是正关上的门 + 17 世纪上半叶契约奴主力有人翻身 + 但精英算明白契约奴会到期要地不如买终身奴隶 → 契约奴渐少被奴役非洲人渐多 + 1700 约 2.7 万→1750 约 24 万 + 「会翻身的底层路」被「不见底终身奴隶」取代 (indenture→slavery shift 核心) + 白契约奴有的被收编进白人代价是脚下线焊成种族 + 「我留下的不是丰碑是一个证据: 穷富线怎么被改成肤色线」',
      engagementHook: '我这一代契约奴,是一道正在关上的门——种植园主算明白:不如直接买终身奴隶。我们这条「会翻身的底层路」,被「不见底的终身奴隶」取代了。我留下的不是丰碑,是一个证据:一条「穷富」的线,怎么被改成了「肤色」的线。',
      expectsRealAnswer: false,
    },
    {
      id: 'is-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我,两种说法都站得住。\n\n一种说法:我是个值得同情的拼搏者。我一无所有,卖了几年身,横渡大洋,在烟草田里把手磨烂,只为一个翻身的盼头。我是被压在底下的人,被主人买卖、挨打、累到几乎活不下来。我没害过谁,我只是想活出个人样。\n\n另一种说法:我是那道肤色线的同谋。我接了精英给的那点甜头——「你是白的」——就心安理得地站到了线的这一边,不再跟黑人联手,有时还帮着看管、追逃奴。我的那条窄路,是踩着比我更底下的人没有路,才铺出来的。我恨上面的种植园主,可我自己,也踩了下面的人一脚。\n\n这两边不是「可怜加可恨」。是同一个处境的两面——一个夹在中间的人,既是被压的,又被收编成了帮着压人的。\n\n你怎么看?想 30 秒,写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a striver who deserves sympathy. I had nothing, sold a few years of myself, crossed the ocean, wore my hands raw in the tobacco fields, all for one hope of rising. I was a person pressed at the bottom, bought and sold by a master, beaten, worked nearly to death. I harmed no one; I only wanted to live as a human being.\n\nThe other view: I was an accomplice to that color line. I took the small sweetener the elite gave, "you are white," and with an easy conscience stepped onto this side of the line, no longer joining hands with the blacks, sometimes even helping to watch over them and chase down runaways. My narrow road was paved only by standing on people lower than me having no road. I hated the planters above, yet I too put my foot on the people below.\n\nThese are not "pitiable and hateful." They are two faces of one situation, a person caught in the middle, at once oppressed and won over into helping oppress.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (值得同情的拼搏者/一无所有卖身横渡大洋手磨烂只为翻身/被压被买卖挨打/没害过谁) / 另一种说法 (肤色线的同谋/接了「你是白的」甜头站到线这边不再联手有时帮看管追逃奴/窄路踩着更底下人没路铺成) / 同一处境两面 (夹中间既被压又被收编帮压人) / 想 30 秒',
      engagementHook: '值得同情的拼搏者,和肤色线的同谋——是同一个夹在中间的我,同一个处境的两面。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'is-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个一无所有的穷姑娘,一张卖身几年的合同,一双磨烂的手,一条越走越窄的翻身路,一道焊在我脚下的肤色线——你会怎么评价这样一个夹在中间的人?\n\n我是被压的,我也帮着压了人。我接了那点甜头,就把和我同样苦的人,留在了线的那一边。这两件事不是分开的,是同一个我。你会同情我多一点,还是责备我多一点?你怎么评?\n\n不过先记住:你这一遍,只听到了我这个夹在中间的人的说法。那个在顶上设计这道线、靠它发财的种植园主,那个被这道线钉死在最底层、连「机会」都没有的被奴役者——他们各有各的说法。换个视角再走一遍,你会听见他们怎么讲同一道线,也会看看你刚才的判断站不站得住。\n\n再想一步:今天你身边,有没有这样的时刻——你自己也被欺负、被排挤,可有人递给你一点小小的「特殊待遇」,只要你肯转身去跟另一个更弱的人划清界限?\n\n那时候,你会接那点甜头,站到「这一边」吗?还是会想起:那个被你划到「那一边」的人,本来跟你是一伙的?',
        en: 'Having walked my whole life, a poor girl with nothing, a contract selling a few years of myself, a pair of hands worn raw, a rising road that narrowed and narrowed, a color line welded under my feet, how would you judge a person caught in the middle like this?\n\nI was oppressed, and I helped oppress. I took the little sweetener and left people as bitter off as me on the other side of the line. These are not two separate things; they are the same me. Will you pity me more, or blame me more? How do you judge?\n\nBut first, remember: this pass, you heard only the case of me, the one caught in the middle. The planter who designed this line at the top and grew rich on it, and the enslaved person nailed by this line to the very bottom, for whom there was not even "opportunity," each has his own case. Run it again through another lens and you will hear how they tell the same line, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there such a moment, when you yourself are bullied, pushed out, and someone hands you a small "special treatment," if only you will turn and draw a line against someone weaker still?\n\nWhen that happens, will you take the sweetener and step onto "this side"? Or will you remember: the person you drew onto "that side" was, all along, on the same side as you?',
      },
      deliverGoal: 'N11 close — 评价夹中间的人 (穷姑娘/卖身合同/磨烂的手/越走越窄的路/焊在脚下的肤色线 → 被压也帮着压人) + 跨视角指针 ①只听到夹中间一边 ②种植园主/被奴役者各有说法换视角再走 + transfer「今天你被欺负时有人给你点特殊待遇要你跟更弱的人划清界限」+ 你接甜头站这边还是想起那人本来跟你一伙',
      engagementHook: '我是被压的,也帮着压了人——同一个夹在中间的我。你会同情多一点还是责备多一点?再想一步:今天有人递给你一点「特殊待遇」,只要你肯跟一个更弱的人划清界限——你会接吗?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 被奴役的非洲人 (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var enslavedAfricanLens = {
  id: 'enslaved-african-receiving-end',
  name: 'Enslaved African',
  nameCn: '被奴役的非洲人',
  role: 'receiving-end',
  perspectiveTag: 'bottom-of-the-prosperity',
  icon: '⛓️',
  description: {
    cn: '他是一个从西非被掳上船、横渡大西洋、在南卡稻米田里站到泥水齐腰的人（一个合成人物，让无数被算成「财产」的人有一个能说话的我）。这一遍让你跟他一起站在水里，听岸上的人说「机会」「自由」「翻身」，听清楚每一个好词里都没有他。',
    en: 'He is a man dragged onto a ship from West Africa, carried across the Atlantic, standing waist-deep in the mud of a South Carolina rice field (a composite, lending an "I" to the countless people written down as "property"). This pass stands you in the water with him, listening to those on the bank say "opportunity," "freedom," "rise," and hearing clearly that no good word is meant for him.',
  },
  storyboard: [
    {
      id: 'ea-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我有过一个名字。在西非我那个村子里,大人这样叫我,孩子这样叫我。我有家,有手艺——我会种稻,会看水。\n\n后来,这些都被人拿走了。\n\n一天,我被掳走,卖给沿海的奴隶贩子,锁进一条船的底舱,横渡大西洋。上了岸,我被拍卖。买我的人在一本账本上,把我记下来——不是记成一个人,是记成一笔财产,跟牲口、农具列在一起。\n\n我现在在南卡罗来纳一片稻米种植园上。我没有契约,没有年限,没有尽头。我的孩子,生下来就跟我一样。\n\n这片土地,人人都叫它「机会之地」。\n\n这一遍,你站在我这里看这四个字。不是从在顶上数钱的人那边看,不是从那个夹在中间、还能熬到头的人那边看——是从最底下,从这个词根本没打算算上的人这边看。',
        en: 'I once had a name. In my village in West Africa, the grown ones called me by it, the children called me by it. I had a family, a craft, I could grow rice and read water.\n\nLater, all of this was taken from me.\n\nOne day I was seized, sold to slavers on the coast, locked into the hold of a ship, carried across the Atlantic. Ashore, I was sold at auction. The one who bought me wrote me down in a ledger, not as a person, but as a piece of property, listed alongside the livestock and the tools.\n\nI am now on a rice plantation in South Carolina. I have no contract, no term, no end. My children are born the same as me.\n\nEveryone calls this land a land of opportunity.\n\nThis pass, you stand where I stand and look at those words. Not from the side of the one counting money at the top, not from the side of the one caught in the middle who can still reach the end of his term, but from the very bottom, from the side of the one this word never planned to count in.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 西非有名字/家/种稻看水手艺 + 都被拿走 + 被掳/卖给沿海贩子/锁船底舱/横渡大西洋 + 拍卖+账本记成财产跟牲口农具列一起 + 南卡稻米种植园/无契约无年限无尽头/孩子生下来一样 + 「机会之地」从最底下/这词没打算算上的人这边看',
      engagementHook: '我有过一个名字,有家,有种稻的手艺——后来都被拿走了。在账本上,我不是人,是一笔财产,跟牲口列在一起。你怎么想象「被写成一笔财产」是什么感觉?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说那条船,那段路。你得知道我是怎么到这片土地上的。\n\n那段横渡大西洋的航程,有个名字:Middle Passage(中段航程)。\n\n我们被锁在船的底舱。舱太矮,直不起腰。一个挨一个躺着,几个星期不见天日。又闷又热,空气是臭的。人病倒,拉痢疾、发高烧。死了的人,被解开锁链,扔进海里。\n\n上船时多少人,下船时少了很多。这条路上死的人,多到没人数得清——大概每六到七个里,就有一个没活着到岸。\n\n我活了下来。我不知道这算运气还是不算。\n\n我跟你说这些,不是为了吓你。是因为这段路,在那些「机会之地」的故事里,几乎从来没人讲。船一靠岸,故事就从「拍卖」开始讲——好像我们是凭空出现在这片土地上的货物。\n\n可我们不是货物。我们每一个,都是从一条这样的船的底舱里,活着爬出来的人。',
        en: 'First, that ship, that crossing. You must know how I came to this land.\n\nThe voyage across the Atlantic has a name: the Middle Passage.\n\nWe were locked in the hold of the ship. The hold was too low to straighten our backs. We lay one against another, weeks without seeing the sky. Stifling, hot, the air foul. People fell sick, dysentery, high fever. The dead were unchained and thrown into the sea.\n\nHow many boarded, how many fewer came off. The dead on this crossing were too many to count, perhaps about one in every six or seven did not reach the shore alive.\n\nI survived. I do not know whether to call it luck or not.\n\nI tell you this not to frighten you. It is because this crossing, in the stories of the "land of opportunity," is almost never told. The moment the ship lands, the story begins at "the auction," as if we appeared on this land out of nowhere, as goods.\n\nBut we were not goods. Every one of us was a person who climbed out alive from the hold of a ship like this.',
      },
      deliverGoal: 'N2 setup — Middle Passage 命名 + 锁船底舱(太矮直不起腰/一个挨一个/几星期不见天日/闷热臭) + 病(痢疾高烧)/死者解锁扔海 + 死亡率(约每六到七个有一个没活着到岸/约 15%) + 我活下来不知算不算运气 + 「机会之地」故事几乎从不讲这段/船一靠岸就从拍卖讲起好像我们凭空出现的货物 + 「我们不是货物, 是从船底舱活着爬出的人」',
      engagementHook: '「机会之地」的故事,船一靠岸就从「拍卖」讲起,好像我们是凭空出现的货物。可那段叫 Middle Passage 的航程,每六到七个人里就有一个没活着到岸。为什么这段路几乎没人讲?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '说说我每天的日子。\n\n我在南卡的稻米田里干活。稻米是这片地的大财。种稻不像种烟草——它要把田淹成水塘,要会修堤、引水、放水,水深差一指都不行。这是门精细的手艺。\n\n这门手艺,主人不会。\n\n会的人,是我们——从西非来的人。我老家就是种稻的地方,我从小看着大人怎么治水、怎么育苗。我把这套知识,带过了大西洋。\n\n南卡的稻米能堆成财富,很大一部分,靠的正是我们带来的本事。\n\n你听出这里头的荒唐了吗?主人买我,是因为我「值钱」——可我值钱,正是因为我会一样他不会的真本事。我用我的脑子、我的手,替他把这片水田变成金子。\n\n可账本上,我还是一笔财产。我创造的财富,一分不归我。我会的越多,他赚的越多,我自己,还是那笔跟牲口列在一起的财产。',
        en: 'Let me speak of my daily life.\n\nI work in the rice fields of South Carolina. Rice is the great wealth of this land. Growing rice is not like growing tobacco, you must flood the field into a pond, you must know how to build dikes, channel water, drain it, with the depth not off by a finger\'s width. It is a fine craft.\n\nThis craft, the master does not have.\n\nThe ones who have it are us, the people from West Africa. My homeland was a land of rice; from childhood I watched the grown ones manage water, raise seedlings. I carried this knowledge across the Atlantic.\n\nThat South Carolina\'s rice could be piled into wealth rested, in large part, on the skill we brought.\n\nDo you hear the absurdity in it? The master bought me because I was "worth money," and I was worth money precisely because I had a real skill he did not. With my mind and my hands, I turned this watery field into gold for him.\n\nYet in the ledger I am still a piece of property. The wealth I create, not a coin of it is mine. The more I know, the more he earns, and I myself am still that property listed alongside the livestock.',
      },
      deliverGoal: 'N3 setup — 南卡稻米田 + 稻米是大财 + 种稻精细手艺(淹田/修堤引水放水/水深差一指不行) + 主人不会 + 会的是西非来的人(老家种稻/从小看大人治水育苗/把知识带过大西洋) + 南卡稻米财富很大部分靠我们带来的本事 + 荒唐: 主人买我因我值钱/我值钱正因我会他不会的真本事 + 账本上还是财产/创造的财富一分不归我',
      engagementHook: '南卡的稻米能堆成财富,靠的正是我们从西非带来的种稻手艺——一样主人不会的真本事。我用脑子和手替他把水田变成金子,可账本上我还是一笔财产,一分钱不归我。你怎么看这种荒唐?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你站在稻米田的水里,太阳毒,腿上沾着泥。你听见远处岸上的人在说话——种植园主们、商人们、来做客的体面人。他们说的词,你慢慢也听懂了。\n\n他们说「机会」。他们说「自由」。他们说这片土地多好,穷人来了能翻身,几年就能有自己的地。\n\n你站在水里听着。你脑子里轰一下:\n\n他们说的「所有这些好」,里面,有没有你?\n\n你想清楚了:没有。\n\n那个夹在中间的契约奴,熬几年能走出去。那个种植园主,本来就在顶上。可你——你没有契约,没有年限,没有尽头。你的孩子,生下来就跟你一样。他们说的每一个好词,「机会」「自由」「翻身」,都不是说给你听的。\n\n这一刻你得想:当一片土地的「美好」,是踩着你才成立的——你该怎么看它?你心里,要不要也信一信那句「机会之地」?',
        en: 'Now you are me.\n\nYou stand in the water of the rice field, the sun fierce, mud on your legs. You hear people talking on the bank in the distance, planters, merchants, respectable guests come to visit. The words they use, little by little you have come to understand them.\n\nThey say "opportunity." They say "freedom." They say how good this land is, the poor can rise here, in a few years can have land of their own.\n\nYou stand in the water and listen. Something goes off in your head:\n\nAll this good they speak of, is there a place in it for you?\n\nYou think it through: no.\n\nThe indentured servant caught in the middle can walk out after a few years. The planter was at the top to begin with. But you, you have no contract, no term, no end. Your children are born the same as you. Every good word they speak, "opportunity," "freedom," "rising," none of it is spoken for you.\n\nHere you must think: when a land\'s "goodness" stands only by standing on you, how should you see it? And in your own heart, should you, too, believe a little in that "land of opportunity"?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 站稻田水里(太阳毒/腿沾泥) + 听岸上人说话(种植园主/商人/体面客人) + 听懂他们的词「机会」「自由」「穷人来了能翻身」+ 脑子轰一下「这些好里有没有你」+ 想清楚: 没有 (契约奴能走出去/种植园主本在顶上/你无契约无年限无尽头孩子生下来一样) + 每个好词都不是说给你听的 + 抉择: 一片土地的美好踩着你才成立你该怎么看/要不要也信一信「机会之地」',
      engagementHook: '我站在水里,听岸上的人说「机会」「自由」「穷人能翻身」——可这些好词,没有一个是说给我听的。当一片土地的「美好」是踩着你才成立的,你该怎么看它?你会不会也忍不住信一信?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得讲讲我为什么会沦到这一步——这不是我一个人的倒霉,这是一整套机器。\n\n这套机器叫跨大西洋奴隶贸易。它转一圈,是这样:欧洲的船,装着布、枪、酒,开到西非海岸,换走像我这样的人;再把我们装上船,横渡大西洋(就是那段 Middle Passage),运到加勒比和北美的种植园;在这里,我们的劳动产出糖、烟草、稻米;这些东西再运回欧洲,变成钱。\n\n一圈下来,每个环节都有人赚钱:西非沿海的贩子、船主、种植园主、欧洲的商人。\n\n只有一样东西,在这圈里不被当人:我们。我们是这套机器的燃料。\n\n你明白了吗?我不是「不小心」掉进奴役的。是有一整套精密的生意,需要源源不断的不要钱、不会走的劳动力——而我,正好被这套机器,从我的村子里,掏了出来。\n\n我的苦,不是命。是有人精心设计、靠它发财的一套制度。',
        en: 'I must tell why I fell to this, this was not my misfortune alone, it was a whole machine.\n\nThis machine is the transatlantic slave trade. One turn of it goes like this: European ships, loaded with cloth, guns, liquor, sail to the West African coast and trade for people like me; then load us onto ships, cross the Atlantic (that very Middle Passage), and carry us to the plantations of the Caribbean and North America; here our labor yields sugar, tobacco, rice; these are shipped back to Europe and turned into money.\n\nOne full turn, and at every link someone makes money, the slavers on the West African coast, the shipowners, the planters, the merchants of Europe.\n\nOnly one thing in this circle is not treated as human: us. We are the fuel of this machine.\n\nDo you understand? I did not "accidentally" fall into bondage. There was a whole precise business that needed an endless supply of labor that cost nothing and would not leave, and I was simply scooped by this machine out of my village.\n\nMy suffering is not fate. It is an institution someone designed with care and grew rich upon.',
      },
      deliverGoal: 'N5 story — 跨大西洋奴隶贸易整套机器/三角贸易 (欧洲船装布枪酒到西非换人→Middle Passage 运加勒比北美种植园→劳动产糖烟草稻米→运回欧洲变钱) + 每环节有人赚(西非贩子/船主/种植园主/欧洲商人) + 唯一不被当人的是我们/我们是机器的燃料 + 「不是不小心掉进奴役, 是一整套精密生意需要不要钱不会走的劳动力把我从村里掏出来」+ 我的苦不是命是有人设计靠它发财的制度',
      engagementHook: '我不是「不小心」掉进奴役的。是有一整套精密的生意——跨大西洋奴隶贸易——需要源源不断不要钱、不会走的劳动力,把我从村子里掏了出来。我的苦不是命,是一套有人精心设计、靠它发财的制度。这个区别,要紧吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在,你站在我这最底下,该看清那个词了——「机会」。\n\n你跑别的视角,听过这个词的另外两个意思。在那个种植园主嘴里,「机会」是更多的地、更多的劳力、把契约奴换成终身奴隶的好买卖(你换到他那一遍,能听见他怎么数这笔账)。在那个夹中间的契约奴嘴里,「机会」是熬几年、分块地、翻个身的窄路(你换到他那一遍,能听见他怎么用别人没有的路,换自己一条路)。\n\n到了我这里,这个词没有了。\n\n没有契约,我熬不到头;没有年限,我等不到尽头;我的孩子,生下来就接着干。「机会」这个词,从我身上滑过去,一点都沾不上。\n\n更扎心的是:我会种稻,我把西非的本事带过来,我亲手替这片土地造出了财富。可这财富越多,我越值钱;我越值钱,我越走不掉。我创造的「机会」,全长在了别人身上。\n\n同一个词,三个人,三个意思——他在顶上用它数钱,他在中间用它换路,而我,是被这个词踩在最底下,替上面两个人,把这个词撑起来的那个人。',
        en: 'Now, standing where I stand at the very bottom, you should see that word clearly, "opportunity."\n\nIn other passes you have heard the word\'s other two meanings. In the planter\'s mouth, "opportunity" is more land, more labor, the good bargain of swapping indentured servants for slaves for life (switch to his pass and hear how he counts that ledger). In the mouth of the indentured servant caught in the middle, "opportunity" is the narrow road of serving a few years, getting a plot, rising (switch to his pass and hear how he trades a road others do not have for one of his own).\n\nWith me, the word is gone.\n\nNo contract, so I cannot serve to the end; no term, so I cannot wait out an end; my children are born straight into the work. The word "opportunity" slides off me, never sticking at all.\n\nWhat stings more: I can grow rice, I carried the skill of West Africa over, I made wealth for this land with my own hands. Yet the more wealth, the more I am worth; the more I am worth, the less I can leave. The "opportunity" I create grows entirely on other people.\n\nThe same word, three people, three meanings, he uses it to count money at the top, he uses it to trade for a road in the middle, and I am the one trodden under this word at the very bottom, holding it up for the two above.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (gold-standard) — 「机会」一个词三个意思在最底层归零: 精英=数钱 / 契约奴=换路 / 我=这词没有了 (无契约熬不到头/无年限等不到尽头/孩子生下接着干) + 桥到另两 lens (听他们怎么数账/换路) + 更扎心: 我会种稻造出财富/财富越多我越值钱越走不掉/我创造的机会全长在别人身上 + 我是被这词踩在最底下替上面两人撑起它的人',
      engagementHook: '同一个「机会」:他在顶上用它数钱,他在中间用它换路,而我,是被这个词踩在最底下、替上面两个人把它撑起来的那个人。我创造的「机会」,全长在了别人身上。一个词怎么会有三个相反的意思?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我不是没想过反抗。我们也不是从来没动过手。\n\n就说一次:1676 年弗吉尼亚那场 Bacon\'s Rebellion(培根起义)。那一回,穷白人和我们这些被奴役的黑人,联手反了,烧了首府。底层人不分肤色,站到了一起——那一刻,上面的人是真的怕了。\n\n可你猜后来怎么样?\n\n上面的人没有改善我们的日子。他们做的是,用一道道法律,把穷白人和我们劈开。给穷白人一点甜头——「你是白的」,让他们觉得自己跟我们不是一路人,从此再不跟我们联手。\n\n那道线一画下去,我们这些最底下的人,就更孤立了。本来可能跟我们一起反抗的穷白人,被收编到了「白人」那一边,有的反过来帮主人看管我们、追我们里头逃跑的人。\n\n我看得很清楚:他们怕的,从来不是我一个人反抗。他们怕的,是底层联手。所以他们花最小的代价,把会跟我联手的人,买走了。\n\n我被钉在最底下,不只是因为我被锁着——是因为本该跟我站一起的人,被一道肤色线,劝走了。',
        en: 'It is not that I never thought of resisting. Nor that we never acted.\n\nTake one time: Bacon\'s Rebellion in Virginia, 1676. That once, poor whites and we enslaved blacks rose together and burned the capital. The people at the bottom, regardless of color, stood as one, and in that moment the people above were truly afraid.\n\nBut do you know what came after?\n\nThe people above did not better our lives. What they did was, with law after law, to split the poor whites from us. They gave the poor whites a sweetener, "you are white," to make them feel they were not the same kind as us, and never again to join hands with us.\n\nOnce that line was drawn, we at the very bottom were more isolated. The poor whites who might have risen with us were absorbed onto "the white" side, and some turned to help the master watch over us and chase down those of us who fled.\n\nI see it clearly: what they feared was never my resisting alone. What they feared was the bottom uniting. So at the smallest cost, they bought away the people who would have joined hands with me.\n\nI am nailed to the very bottom not only because I am chained, but because the people who should have stood with me were, by a line of color, talked away.',
      },
      deliverGoal: 'N7 story — 想过反抗也动过手 + 1676 Bacon\'s Rebellion 穷白人+被奴役黑人联手烧首府/底层不分肤色站一起/上面真怕了 + 但上面不改善而是用法律劈开 + 给穷白人甜头(你是白的)让他们觉得跟我们不一路再不联手 + 那道线一画我们更孤立/穷白人被收编反过来帮看管追逃 + 「他们怕的不是我一人反抗是底层联手/花最小代价买走会跟我联手的人」+ 我被钉最底下不只因被锁是因该跟我站一起的人被肤色线劝走',
      engagementHook: '1676 年穷白人和我们曾经联手烧了首府——上面真的怕了。可他们怕的从来不是我一个人反抗,是底层联手。所以他们花最小的代价,用一道肤色线,把本该跟我站一起的人劝走了。你怎么看这一招?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看见,我不是一个人,也不是一个特例。我是几十万。\n\n约 1700 年,这片殖民地上被奴役的人,大概 2.7 万。到 1750 年,涨到约 24 万——几乎全在南部,几乎全是像我这样从非洲来的、或我们在这里生的孩子。\n\n二十多万人。每一个,都有过一个名字,一个家,一段被掳走的路。可历史记下了几个?几乎一个都没有。\n\n会读书写字的人,不是我们。给这片土地写历史的人,是岸上那些数钱的人。在他们的账本和故事里,我们是「劳动力」,是「资产」,是一个数字。我们的名字、我们的话、我们怎么想、怎么疼,几乎全没留下。\n\n你现在能「听见」我说话,是因为这一遍,有人特意把我放回了故事中央。可真实的历史里,我们这二十多万人,大多数连一行字都没留下。\n\n所以你听我说话的时候,请记住:我替的,不只是我自己。我身后,还站着成千上万个,连名字都没能留下来的人。',
        en: 'I want you to see that I am not one person, nor an exception. I am hundreds of thousands.\n\nAround 1700, the enslaved on this colony numbered about 27,000. By 1750 it had risen to about 240,000, nearly all in the South, nearly all people from Africa like me, or the children we bore here.\n\nMore than two hundred thousand people. Every one had a name, a family, a road of being seized. Yet how many did history record? Almost none.\n\nThe ones who could read and write were not us. The ones who wrote this land\'s history were those on the bank counting money. In their ledgers and their stories, we are "labor," "assets," a number. Our names, our words, how we thought, how we hurt, are almost all unrecorded.\n\nThat you can "hear" me speak now is because, in this pass, someone deliberately put me back at the center of the story. But in the real history, most of us, those more than two hundred thousand, left not a single line.\n\nSo when you hear me speak, remember: I stand for more than myself. Behind me stand tens of thousands more who could not even leave a name.',
      },
      deliverGoal: 'N8 story — 我不是一个人是几十万 + 被奴役人口 1700 约 2.7 万→1750 约 24 万 (几乎全南部/几乎全非洲来或这里生的孩子) + 二十多万人每个有名字家被掳的路/历史记下几个几乎没有 + 会读写的不是我们/写历史的是岸上数钱的人/在账本故事里我们是劳动力资产数字 + 名字话想法疼几乎全没留 + 你能听见我是这一遍特意把我放回中央/真实历史大多数没留一行字 + 「我替的不只我自己, 身后还站着连名字都没留下的人」',
      engagementHook: '约 1700 我们约 2.7 万,1750 涨到约 24 万——可历史记下了几个名字?几乎一个都没有。写历史的,是岸上数钱的人。在他们的故事里,我们是「劳动力」、是数字。那些连名字都没留下的人,就等于没存在过吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我大概看不到头了。可这套把我钉在最底下的东西,后来怎么样了,你该知道。\n\n我和我身后那二十多万人撑起来的这套种族奴隶制,没有停。它太赚钱了,它绑住了太多人的身家。它一代一代往下传,越长越大。\n\n它撑着南部的棉花、烟草、稻米,撑起一整个南方的财富。可它也埋着一根越烧越短的引线。一边是越来越多被锁着的人,一边是嘴上喊着「自由」「平等」的国家——这两样,迟早撞在一起。\n\n一百多年后,这根引线烧到了头:一场为「人到底算不算人」打的内战,几十万人死在里头。再后来,奴隶制才终于被废掉,法律上才写下「人人平等」。\n\n我没等到那一天。但我想让你记住:把我钉在「机会之地」最底下的那道线,不是凭空消失的。它是后人流了很多血、用了很长很长的时间,才一点一点拆掉的——而且,有些没拆干净。',
        en: 'I will likely not see the end. But what became of this thing that nailed me to the very bottom, you should know.\n\nThe racial slavery that I and the two hundred thousand behind me held up did not stop. It was too profitable, it bound up too many fortunes. It passed down generation after generation, growing larger.\n\nIt held up the South\'s cotton, tobacco, rice, held up the wealth of a whole South. But it also buried a fuse that burned ever shorter. On one side, more and more people in chains; on the other, a nation crying "freedom" and "equality" with its mouth, these two were bound, sooner or later, to collide.\n\nA century and more later, that fuse burned to its end: a civil war fought over whether a person counts as a person, in which hundreds of thousands died. Only later still was slavery at last abolished, and "all are equal" written into the law.\n\nI did not live to that day. But I want you to remember: the line that nailed me to the bottom of the "land of opportunity" did not vanish on its own. Later generations bled a great deal, and took a very, very long time, to take it apart bit by bit, and some of it was never fully taken apart.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 我看不到头但这套钉我最底下的东西没停 + 种族奴隶制太赚钱绑太多身家一代代传越长越大 + 撑起南部棉花烟草稻米/整个南方财富 + 但埋着越烧越短的引线 (越来越多被锁的人 vs 嘴喊自由平等的国家迟早撞) + 一百多年后内战(人算不算人/几十万人死)→废奴/法律写人人平等 + 跨 Topic 锚 civil-war/slavery-abolition + 我没等到那天 + 「钉我的那道线不是凭空消失, 后人流很多血用很长时间才拆掉, 有些没拆干净」',
      engagementHook: '把我钉在「机会之地」最底下的那道线,不是凭空消失的——后人流了很多血、用了很长很长的时间,才一点一点拆掉,而且有些没拆干净。一道线画下去很快,拆掉为什么这么难?',
      expectsRealAnswer: false,
    },
    {
      id: 'ea-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,再看那句「机会之地」,两种说法都站得住。\n\n一种说法:那是一句彻头彻尾的谎。这片土地的人喊「机会」「自由」「穷人能翻身」,可同一口气,把像我这样的几十万人,掳过大西洋、记成财产、钉死在最底层,连孩子都生下来就是奴隶。最赚钱的烟草和稻米,靠的正是最不自由的人。对我们,这片地从来就没打算给一丝「机会」。它的繁荣,是我们的命堆出来的。\n\n另一种说法:它是一片真实的「机会之地」——只不过,那机会是建在我们身上的,不是给我们的。穷契约奴在这里真能翻身,种植园主真能发家,这片殖民地真的繁荣了起来——而这一切之所以可能,正是因为有我们这样不要工钱、永远不走的人,在最底下撑着。我们不是这「机会」之外的人,我们是这「机会」的地基。\n\n两种说法都站得住。它既是一句谎,也是一座建在我们身上的真实繁荣。\n\n你怎么看?想 30 秒,写下来。',
        en: 'Having walked my whole life, look again at those words, "land of opportunity." Both views stand.\n\nOne view: it was a lie through and through. The people of this land cried "opportunity," "freedom," "the poor can rise," and in the same breath dragged hundreds of thousands like me across the Atlantic, recorded us as property, nailed us to the very bottom, our children born slaves too. The most profitable tobacco and rice rested on the least free people. For us, this land never meant to give a shred of "opportunity." Its prosperity was piled up out of our lives.\n\nThe other view: it was a real "land of opportunity," only the opportunity was built on us, not given to us. The poor indentured servant truly could rise here, the planter truly could grow rich, this colony truly did prosper, and all of it was possible precisely because there were people like us, who took no wages and never left, holding it up from the very bottom. We are not the people outside this "opportunity." We are its foundation.\n\nBoth views stand. It was a lie, and it was a real prosperity built on us.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (彻头彻尾的谎/喊机会自由翻身同口气把几十万人掳过大洋记成财产钉最底层孩子生下是奴隶/最赚钱的烟草稻米靠最不自由的人/繁荣是我们命堆的) / 另一种说法 (真实的机会之地但机会建在我们身上不是给我们/契约奴真能翻身种植园主真发家殖民地真繁荣/因为有我们不要工钱不走的人在底下撑/我们是这机会的地基) / 两种都站得住 / 想 30 秒',
      engagementHook: '一种说法:「机会之地」是句彻头彻尾的谎。另一种说法:它是真的——只不过那机会是建在我们身上、不是给我们的,我们是它的地基。两种说法都站得住,你的 30 秒到了,你怎么看?',
      expectsRealAnswer: true,
    },
    {
      id: 'ea-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个有过名字、有过家、有过手艺的人,一段叫 Middle Passage 的航程,一本把我记成财产的账本,一片我亲手种出却一分不归我的稻田——你会怎么评价这样一片「机会之地」?\n\n它一边喊着「穷人来了能翻身」,一边把我和我身后几十万人,钉死在它繁荣的最底下。你会说它是一句谎,还是说它是一座真实的、却建在我们身上的繁荣?你怎么评?\n\n不过先记住:你这一遍,只听到了被这片土地踩在最底下的人。那个在顶上设计这一切、靠它发财的种植园主,那个夹在中间、被一点甜头收编的契约奴——他们各有各的说法,各有各的算盘。换个视角再走一遍,你会听见他们怎么为自己辩护,也会看看你刚才的判断,站不站得住。\n\n再想一步:今天你身边,有没有一种「大家都说很好」的东西——一所学校、一支队伍、一个群——它的「好」「热闹」「机会」,其实是踩着某些被排在外面、被当成「不算数」的人,才撑起来的?\n\n那时候,你会只顾着享受那份「好」,装作没看见底下的人;还是会像今天你听我说话这样,特意去问一句:这份繁荣,到底是谁的命撑起来的?',
        en: 'Having walked my whole life, a person who once had a name, a family, a craft, a voyage called the Middle Passage, a ledger that recorded me as property, a rice field I grew with my own hands and from which not a coin was mine, how would you judge a "land of opportunity" like this?\n\nIt cried "the poor can rise here" while nailing me and the hundreds of thousands behind me to the very bottom of its prosperity. Would you call it a lie, or a real prosperity that was nonetheless built on us? How do you judge it?\n\nBut first, remember: this pass, you heard only the person trodden at the very bottom of this land. The planter who designed it all at the top and grew rich on it, and the indentured servant caught in the middle, won over by a little sweetener, each has his own case, his own reckoning. Run it again through another lens and you will hear how they defend themselves, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there something "everyone says is good," a school, a team, a group, whose "good," "buzz," "opportunity" is in fact held up by standing on certain people who are shut outside, treated as "not counting"?\n\nWhen that happens, will you only enjoy that "good" and pretend not to see the people below, or will you do what you did today in hearing me out, and deliberately ask: this prosperity, whose lives is it really built on?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价「机会之地」(有过名字家手艺/Middle Passage/记成财产的账本/种出却一分不归的稻田 → 谎 vs 真实却建在我们身上的繁荣) + 跨视角指针 ①只听到最底层一边 ②种植园主/契约奴各有说法各有算盘换视角再走 + transfer「今天你身边大家说好但踩着被排在外面当不算数的人撑起来的东西」+ 你只顾享受装没看见还是像今天听我这样问一句这繁荣谁的命撑起的',
      engagementHook: '走完我这一生,你会怎么评价这样一片「机会之地」?再想一步:今天你身边那个「大家都说很好」的东西,它的「好」是不是踩着某些被当成「不算数」的人撑起来的?那时候,你会装作没看见,还是会问一句:这份繁荣,到底是谁的命撑起来的?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'colonial-elite':                  colonialEliteLens,
  'indentured-servant':              indenturedServantLens,
  'enslaved-african-receiving-end':  enslavedAfricanLens,
};

// receiving-end 优先 pattern:
// 最底层 + 殖民繁荣建在谁身上的追问 + N1 gold-standard hook + N6「机会」一词三义跨 lens 对位 + N10/N11 谎 vs 建在我们身上的真实繁荣 closing
export var defaultLens = 'enslaved-african-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'thirteen-colonies-1700',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'colonial-elite': 30, 'indentured-servant': 28, 'enslaved-african-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-25',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「机会 / opportunity」一个词三个意思 (精英=更多地劳力/契约奴=换一条窄路/被奴役者=根本分不到这个词)',
    'defaultLens: enslaved-african-receiving-end — 受影响者优先 (殖民繁荣最底层 + gold-standard N1 hook + N10/N11 谎 vs 建在我们身上的真实繁荣)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 三主角是叙事性合成人物 (lens description + N3 elite/servant 括号短句标注); 史料确证的是这三类群体的真实处境 (种植园主/契约奴/Middle Passage 被奴役者)',
    '3-region 教学核心: 新英格兰(镇/教会/小农/捕鱼造船海运/清教徒) / 中部(面包篮/小麦玉米/Quaker荷兰后裔/最多元宽容) / 南部(种植园/烟草稻米/最吃廉价劳力/肤色线最狠) — servant N8 主讲',
    'indenture→slavery shift: 1676 Bacon\'s Rebellion 催化精英分而治之立法 → 契约奴渐少被奴役非洲人渐多 (1700 约 2.7 万→1750 约 24 万) — 三 lens 各从一面讲',
    'AVOID overlap: 殖民地社会本身 (约 1700, 独立战争前 75 年); elite N8 明确「重商主义憋屈是后话, 约 1700 远没到跟母国翻脸」不碰独立战争; 不碰制宪 1787',
    'cross-Topic 锚: chattel slavery 根基→civil-war/slavery-abolition; Middle Passage→age-of-exploration; mercantilism→(独立战争, 不在本 Topic)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
