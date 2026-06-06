// ─────────────────────────────────────────────────────────────────
// 亚洲的帝国主义 1839 — Imperialism in Asia · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 写中国段落用中文真实术语
//   (清/道光/林则徐/虎门/广州/十三行/治外法权/南京条约/圆明园),
//   写印度/英国段落用当地与英方真实术语 (sepoy/EIC/Raj/Mughal/zamindar/Bengal),
//   绝不把中国词套到印度段落上。
// 3 lens / 11 nodes each / Rule 0 中性 (侵略不义与后果复杂两面同体) /
//   expectsRealAnswer 仅 N10 + N11。
// 跨 lens micro-detail: 一只「鸦片箱」(chest of opium) —
//   英国商人眼里=最赚钱、最见不得光的筹码 / 林则徐眼里=要当众销毁的毒物 /
//   承受方眼里=一头是孟加拉农民被逼种出来的、另一头是烟馆里吸进去家破人亡的东西。
//   三视角各触一次,不互相点破。
// §9 中国桥 (家里的语言 vs 学校的语言 / 中日同冲击不同回应) 注入
//   receiving-end + 林则徐 的 synthesis 节点。
// ─────────────────────────────────────────────────────────────────

export var britishLens = {
  id: 'british-actor',
  name: 'The British Trader',
  nameCn: '英国商人',
  role: 'perpetrator-actor',
  perspectiveTag: 'free-trade-empire',
  icon: '\u{1F1EC}\u{1F1E7}',
  description: {
    cn: '1839 年广州城外的一个英国商人，替一家在华做生意的英国商行办事，背后站着刚完成工业革命、要市场要原料的大英帝国。他没有名字，因为他代表的是一整套「自由贸易」的逻辑。他喝着中国茶，账本上记着从印度运来、走私进中国的鸦片箱。他不觉得自己在贩毒，他觉得自己在「按文明的规矩做生意」，只是中国人不肯开门。这一遍让你从施压方内部，看一个帝国怎么用「自由贸易」四个字，把一桩卖毒品的生意讲成天经地义。',
    en: 'A British trader outside Canton in 1839, working for a British firm doing business in China, with the newly industrialized British Empire behind him, hungry for markets and raw materials. He has no name, because he stands for a whole logic of "free trade." He drinks Chinese tea and keeps a ledger of opium chests shipped from India and smuggled into China. He does not feel he is dealing drugs; he feels he is "doing business by the rules of civilization," and that the Chinese simply will not open the door. This pass lets you stand inside the pressing side and watch an empire turn a drug-selling business into something self-evidently right, using four words: free trade.',
  },
  storyboard: [
    {
      id: 'asian-imperialism-brit-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1839 年，中国南方，广州城外的珠江边。我站在商馆的窗口，手里一杯热茶——中国茶，全英国都在喝的那种。\n\n我是个英国商人，替一家在华做生意的商行办事。我不告诉你名字，因为我背后站着的，是一整个刚刚靠蒸汽和钢铁武装起来的大英帝国，和它一套叫「自由贸易」的逻辑。我，只是这套逻辑伸进中国的一根手指。\n\n我们爱喝中国茶，白银就哗哗流进中国，我们受不了这个亏。于是我们找到了一样东西——能反过来把白银抽回来的东西。它就堆在我的货栈里。\n\n这一遍，你坐进我这个位置。你会听见我把一桩生意讲得理直气壮、文明体面。你也会慢慢看清，这桩生意到底是什么，以及它最后引来了什么。',
        en: 'In 1839, southern China, by the Pearl River outside the city of Canton (today\'s Guangzhou). I stand at the window of the trading house, a cup of hot tea in my hand, Chinese tea, the kind all of England drinks.\n\nI am a British trader, working for a firm doing business in China. I will not tell you my name, because behind me stands a whole British Empire, newly armed with steam and steel, and a logic of theirs called "free trade." I am only one finger of that logic, reaching into China.\n\nWe love Chinese tea, so silver pours into China, and we cannot bear the loss. So we found a thing, a thing that pulls the silver back the other way. It sits stacked in my warehouse.\n\nThis pass puts you in my seat. You will hear me speak of a business with a clear conscience, as something civilized and respectable. You will also come, slowly, to see clearly what that business really is, and what it finally brought down on everyone.',
      },
      deliverGoal: 'N1 hook — 1839 广州珠江边英国商人自我介绍 (不给名字/代表整套大英帝国 + 自由贸易逻辑/喝中国茶) + 白银因茶流入中国受不了 → 找到反向抽白银的东西堆在货栈 + 这一遍视角 (听他理直气壮讲生意/慢慢看清这生意是什么引来什么)',
      engagementHook: '我背后是一整个帝国和它「自由贸易」的逻辑。我会把一桩生意讲得文明又体面——你愿意先听我讲，再自己判断它到底是什么吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲清我为什么非做这桩生意不可。\n\n问题出在一片叶子上。我们英国人疯狂爱喝茶，可茶只有中国产。我们买茶，要付白银。年复一年，英国的白银像开了闸一样往中国流，朝廷的账上越来越难看。\n\n更气人的是规矩：在广州，我们这些西方商人只能经这一个口岸、只能跟官方特许的「十三行」(唯一获准跟外国人做买卖的一批中国商行)做买卖。想多开几个港口?不行。想见官?不行。我们被关在珠江边一小片商馆里，像被施舍的客人。\n\n在我们眼里,这哪是做生意,这是被一个自大的帝国摆布。它自称「天朝上国」,什么都不缺,赏脸让我们买点茶。\n\n所以我们要的，从来不是中国的土地。我们要的是一样东西：按我们的规矩，自由地做生意的权利。为了这个权利，我们找到了那件能反转白银的货。',
        en: 'First, let me make clear why I have to do this business.\n\nThe trouble lies in a single leaf. We English love tea madly, and tea grows only in China. To buy tea, we pay silver. Year after year, England\'s silver floods into China as if a gate were opened, and the books at home look worse and worse.\n\nWhat angers me more is the rules. At Canton, we Western traders may use only this one port, and may deal only with the officially licensed Chinese merchant guild called the "Thirteen Hongs" (the only firms allowed to trade with foreigners). Want more ports open? No. Want to see an official? No. We are penned into a small strip of trading houses by the Pearl River, like guests being given charity.\n\nIn our eyes, this is not doing business; this is being toyed with by an arrogant empire. It calls itself the "Celestial Empire," lacking nothing, graciously letting us buy a little tea.\n\nSo what we want has never been China\'s land. We want one thing: the right to trade freely, by our rules. For that right, we found the cargo that could reverse the flow of silver.',
      },
      deliverGoal: 'N2 setup — 为何非做不可: 茶只中国产/买茶付白银/白银哗哗流入中国账难看 + 广州体制规矩 (只一口岸/只跟十三行做/想多开港见官都不行/被关商馆像施舍的客) + 英人觉得被自大帝国摆布 (天朝上国赏脸让买茶) + 要的不是土地是「按我们规矩自由做生意的权利」→ 找到反转白银的货',
      engagementHook: '我们要的从来不是中国的土地,是「自由做生意的权利」——但只能按我们的规矩。当一个人说「我只是要公平交易」时,这话里藏着谁的规矩?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那件货，叫鸦片。\n\n它是一种毒品，吸上就戒不掉。可它正好是我们要的解药——能把流进中国的白银，再抽回来。\n\n这条链子设计得很「聪明」:我们的东印度公司(EIC)在印度的孟加拉(Bengal),逼着当地农民大片种鸦片;鸦片加工成烟土,走私进中国,换回白银;白银再拿去买茶。一个三角转起来,白银的亏,反转成了赚。\n\n你注意到那个词了吗——「走私」。这就是关键:鸦片在中国是禁的。清朝早就下令不许进口。所以我们干的,从一开始就是违法的买卖。\n\n可我从不这么想。我心里的账是这样的:我又没逼着哪个中国人去吸。是他们自己要买。我只是个商人,我供货,他们有需求,银货两讫,公平交易——只不过这门「生意」的货,是毒品;这门生意的规矩,是我们用炮舰撑着的。',
        en: 'That cargo is called opium.\n\nIt is a drug; once you take it, you cannot quit. But it is exactly the cure we wanted: it pulls the silver flowing into China back out again.\n\nThe chain is designed very "cleverly": our East India Company (EIC), in Bengal in India, forces local farmers to grow opium across vast fields; the opium is processed into a paste, smuggled into China, exchanged for silver; the silver then buys tea. A triangle turns, and the loss of silver flips into profit.\n\nDid you notice that word, "smuggled"? That is the key: opium is banned in China. The Qing court long ago ordered it not be imported. So what we do is, from the very start, an illegal trade.\n\nBut I never think of it that way. The ledger in my heart runs like this: I did not force any Chinese to smoke. They want to buy it themselves. I am only a merchant; I supply, they demand, goods for silver, a fair trade. Only, the cargo of this "business" is a drug, and the rules of this business are propped up by our gunboats.',
      },
      deliverGoal: 'N3 setup — 那件货=鸦片 (毒品戒不掉但正好抽回白银) + 三角链 (EIC 在 Bengal 逼农民种鸦片→走私进中国换白银→白银买茶/亏反转成赚) + 关键词「走私」(鸦片在中国是禁的/从头违法) + 商人自辩账 (我没逼谁吸/他们自己要买/我只供货公平交易) + 戳穿: 货是毒品/规矩靠炮舰撑',
      engagementHook: '「我又没逼谁吸,是他们自己要买」——我用这句话让自己心安。一个卖毒品的人,用「公平交易」四个字,真能把自己择干净吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1839 年春天,坏消息来了。清朝皇帝道光,派了一个叫林则徐的钦差大臣南下广州,动真格禁烟了。\n\n他一到,就把我们这些外国商人围在商馆里,断水断粮,逼我们交出全部鸦片。我货栈里那些鸦片箱——你跟着我走到这一步,得知道那是什么:那是我整年的利润,是公司压在中国的全部本钱。\n\n你坐在被围的商馆里,第一反应不是羞愧,是愤怒。你心里想的是:他凭什么?这是「我的财产」!他不经审判、不讲规矩,直接抢走商人的货,这在我们看来,简直是野蛮。\n\n你看出这里的拧巴了吗:你卖的是违禁的毒品,可一旦它被没收,你立刻搬出「私有财产神圣不可侵犯」「自由贸易」这些最体面的大词。\n\n违法的是你的货,你却觉得受委屈的是自己。这一刻,你站哪边?',
        en: 'Now you are me.\n\nIn the spring of 1839, bad news came. The Qing emperor Daoguang sent a high commissioner named Lin Zexu south to Canton, in earnest, to ban opium.\n\nThe moment he arrived, he hemmed us foreign traders into our houses, cut off water and food, and forced us to hand over all the opium. Those opium chests in my warehouse, having followed me this far, you must know what they are: they are my whole year\'s profit, the entire capital the company has staked on China.\n\nYou sit in the surrounded trading house, and your first reaction is not shame. It is fury. What runs in your mind is: by what right? This is "my property"! He seizes a merchant\'s goods without trial, without rules, and to us this is simply barbaric.\n\nDo you see the contradiction here? You sell a banned drug, yet the moment it is confiscated, you reach at once for the most respectable grand words: "private property is sacred and inviolable," "free trade."\n\nThe thing that broke the law was your cargo, yet the one you feel was wronged is yourself. In this moment, which side are you on?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1839 春道光派林则徐南下广州动真格禁烟 + 围困商馆断水粮逼交全部鸦片 + 鸦片箱 = 整年利润+公司全部本钱 (跨 lens 锚第一触) + 第一反应不是羞愧是愤怒 (凭什么/这是我的财产/不审判不讲规矩抢货=野蛮) + 拧巴: 卖违禁毒品却搬出私有财产神圣/自由贸易 + 违法的是货却觉得自己委屈',
      engagementHook: '我卖的是违禁毒品,可它一被没收,我立刻喊「私有财产神圣不可侵犯」。一个人做着违法的事,却觉得自己最委屈——你身边见过这种理直气壮吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '林则徐做的事,比没收更狠。\n\n1839 年初夏,他把缴来的两万多箱鸦片,运到虎门海边,挖了大池子,掺进石灰和盐,当着所有人的面,把烟土全部销毁,化进大海。前后二十多天。这就是「虎门销烟」。\n\n他还干了一件让我们哭笑不得的事:他提笔给我们英国的维多利亚女王写了一封公开信。信里讲的是道理——你们英国自己禁鸦片,可见你们清楚它害人;既然害人,凭什么运来毒害我们中国人?\n\n说实话,这封信讲的道理,我心里没法反驳。\n\n(这封信到底有没有真送到女王手里,至今都说不准——可这反而更说明问题:在我们这套逻辑里,他的道理连被听见的资格都没有。)\n\n但我们的回应是什么?我们根本没把这封信当回事,没给任何回应。一个清朝官员,想用「讲道理」「讲道德」来跟一个工业帝国谈判——他不懂,我们这套逻辑里,道理是次要的,实力才是硬通货。\n\n他赢了道义。可道义,在炮舰面前,值几个钱?',
        en: 'What Lin Zexu did was harsher than confiscation.\n\nIn the early summer of 1839 he had the more than twenty thousand chests of opium taken to the seaside at Humen (Hu-men), dug great pools, mixed in lime and salt, and before everyone\'s eyes destroyed all the paste, dissolving it into the sea. It took over twenty days. This is the "Destruction of Opium at Humen."\n\nHe also did a thing that left us caught between laughter and disbelief: he wrote an open letter to our Queen Victoria. In it he reasoned: you English ban opium at home, so you clearly know it harms people; since it harms people, by what right do you ship it to poison us Chinese?\n\nTo be honest, the reasoning in that letter, I cannot refute it in my heart.\n\n(Whether that letter ever truly reached the Queen\'s own hands, no one can say to this day, and that itself makes the point even sharper: in our logic, his reasoning was not even granted the right to be heard.)\n\nBut what was our response? We gave it no answer at all, took it not seriously in the least. A Qing official, trying to negotiate with an industrial empire by "reasoning" and "morals," did not understand: in our logic, reason is secondary; strength is the hard currency.\n\nHe won the moral argument. But morals, before gunboats, are worth how much?',
      },
      deliverGoal: 'N5 story — 虎门销烟 1839 春 (两万多箱运虎门/掺石灰盐当众销毁化进海/二十多天) + 林则徐致维多利亚女王公开信 (道理: 你们自己禁鸦片可见知道害人凭什么运来毒害中国) + 商人承认心里无法反驳这道理 + 但英方根本没当回事 (清官想用讲道理/道德跟工业帝国谈不懂我们这套实力才是硬通货) + 「他赢了道义可道义在炮舰前值几个钱」',
      engagementHook: '林则徐写信问我们:你们自己禁的东西,凭什么卖来害我们?这道理我反驳不了——可我们根本没当回事。当一方只讲道理、另一方只信实力,会发生什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '鸦片被销毁,在英国国内成了开战的借口。\n\n议会里吵过——有人说,为了卖鸦片去打仗,这是国家的耻辱。但反对的声音输了。商人的财产「被毁」、贸易「受阻」,被包装成了出兵的理由。1839 到 1842,第一次鸦片战争打响。\n\n你跟着我看清这一战的实质:这是一个工业帝国,为了维护卖鸦片和强行通商的权利,而发动的战争。不是为了正义,不是为了文明——尽管我们嘴上全这么说。\n\n战场上几乎没有悬念。我们的蒸汽炮舰能逆风逆流、想停哪儿停哪儿;清朝的旧式水师和岸边炮台,在我们的连发火力面前,像纸糊的一样。\n\n这就是工业革命真正的意思:它不只造出了便宜的布和茶杯,它还造出了一种碾压式的、不对等的暴力。坐在我这边,赢得轻松。可你也该问一句:赢一场为卖毒品而打的仗,光荣在哪儿?',
        en: 'The destruction of the opium became, inside England, the pretext for war.\n\nParliament argued over it. Some said that to wage war for the sake of selling opium was a national disgrace. But the opposing voices lost. The "destruction" of merchants\' property and the "obstruction" of trade were packaged as grounds for sending troops. From 1839 to 1842, the First Opium War broke out.\n\nFollow me and see this war\'s true nature clearly: it is an industrial empire waging war to preserve the right to sell opium and to force trade open. Not for justice, not for civilization, though our mouths said all of that.\n\nOn the battlefield there was almost no suspense. Our steam gunboats could move against wind and current and stop wherever they pleased; the Qing\'s old-style navy and shore forts, before our rapid fire, were like paper.\n\nThis is what the Industrial Revolution really means: it made not only cheap cloth and teacups, but also a crushing, unequal violence. From my side, the winning came easy. But you should ask one thing too: where is the glory in winning a war fought to sell a drug?',
      },
      deliverGoal: 'N6 story — 销烟成开战借口 + 议会吵过 (有人说为卖鸦片打仗是国耻但反对声输了) + 商人财产被毁/贸易受阻包装成出兵理由 + 1839-42 第一次鸦片战争 + 实质: 工业帝国为维护卖鸦片+强行通商的权利而战 (不是正义不是文明尽管嘴上都这么说) + 战场无悬念 (蒸汽炮舰逆风逆流 vs 清旧水师岸炮像纸糊) + 工业革命=碾压式不对等暴力 + 自问「赢一场为卖毒品的仗光荣在哪」',
      engagementHook: '议会里有人说:为卖鸦片去打仗,是国家的耻辱。可这声音输了。赢一场为卖毒品而打的仗,光荣在哪儿?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '打赢之后,真正高明的一手才登场——不是占领土,是签条约。\n\n1842 年,清朝被迫签下《南京条约》:赔我们 2100 万银元、开广州厦门福州宁波上海五个口岸通商、把香港岛割给英国。这是中国第一个「不平等条约」。\n\n但赔款割地都还是表面。真正狠的,是后面一层层叠上去的三件套:\n\n治外法权——我们英国人在中国犯了法,不归中国法律管,归我们自己管;\n协定关税——中国连自己收多少关税都做不了主,得跟我们商量定;\n最惠国待遇——别的国家从中国拿到任何好处,我们英国自动也有一份。\n\n你品出这套设计的精髓了吗:我们几乎不占中国一寸土地,却把它的主权一层层剥掉。它名义上还是个独立国家,实际上,做生意的规矩、收税的权力、管自己人的法律,都被我们攥在手里。\n\n这就是「自由贸易帝国主义」——不插旗子,也能让你乖乖按我的规矩来。',
        en: 'After the win, the truly masterful move took the stage, not seizing land, but signing a treaty.\n\nIn 1842 the Qing was forced to sign the Treaty of Nanking: pay us 21 million silver dollars, open five ports for trade (Canton, Amoy, Foochow, Ningpo, Shanghai), and cede Hong Kong Island to Britain. This is China\'s first "unequal treaty."\n\nBut the indemnity (this huge payment for losing the war) and the ceded land are still only the surface. The truly harsh part is the three-piece set stacked on afterward, layer by layer:\n\nExtraterritoriality: when we English break the law in China, we answer not to Chinese law, but to our own;\nAgreed tariffs: China cannot even decide how much customs duty to charge, but must settle it with us;\nMost-favored-nation: any benefit another country gets from China, we English automatically get a share of too.\n\nDo you taste the essence of this design? We seize almost not an inch of China\'s land, yet we peel away its sovereignty layer by layer. In name it is still an independent country; in fact, the rules of trade, the power to tax, and the laws governing its own people are all held in our hands.\n\nThis is "the imperialism of free trade": plant no flag, and still make you obediently come by my rules.',
      },
      deliverGoal: 'N7 story — 高明一手不是占领土是签条约 + 1842《南京条约》(赔 2100 万银元/开五口广州厦门福州宁波上海/割香港岛) = 第一个不平等条约 + 赔款割地是表面真正狠是三件套 (治外法权: 英人在华犯法不归中国管 / 协定关税: 中国不能自定税率 / 最惠国: 别国所得英国自动均沾) + 精髓: 几乎不占一寸土却把主权一层层剥掉/名义独立实际规矩税权法律都攥在手 + 「自由贸易帝国主义」不插旗也让你按我规矩来',
      engagementHook: '我们几乎不占中国一寸土地,却把它的主权一层层剥掉。「不占领土也能控制一个国家」——这种帝国主义,是不是比直接抢更难看清?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把同一套手法,带你看另一个舞台——印度。同一个帝国,在那里换了一副面孔。\n\n在中国,我们用「自由贸易」隔空榨,不插旗。在印度,我们干脆从一家公司,变成了一个政府。\n\n早在 1757 年的普拉西战役,我们的东印度公司就靠本地盟友和印度土兵(sepoy),拿下了孟加拉。此后一百年,一家公司——不是国家——靠着 sepoy 和本地王公、地主(zamindar)的合作,统治了印度的大半。\n\n这里有个最该被记住的事实:几千个英国人,凭什么管得住上亿印度人?靠的不是英国军队,是印度人自己。征服印度的主力,是领我们军饷的印度土兵——是印度人在打印度人。\n\n你看,帝国主义最不愿被讲、却最关键的一层,是本地的合作者。没有他们,我们一天都转不起来。\n\n中国和印度,是同一个工业帝国的两副面孔:一副叫「自由贸易」,一副叫「公司变王朝」。',
        en: 'Let me take the same method and show you another stage: India. The same empire wears a different face there.\n\nIn China, we squeeze from a distance through "free trade," planting no flag. In India, we went straight from being a company to being a government.\n\nAs early as the Battle of Plassey in 1757, our East India Company took Bengal with the help of local allies and Indian soldiers (sepoys). For the hundred years after, a company, not a state, ruled most of India through the sepoys and the cooperation of local princes and landlords (zamindars).\n\nHere is the fact that most deserves remembering: by what means do a few thousand Englishmen control hundreds of millions of Indians? Not by the British army, but by Indians themselves. The main force that conquered India was Indian soldiers drawing our pay; it was Indians fighting Indians.\n\nYou see, the layer of imperialism least willing to be told, yet most crucial, is the local collaborators. Without them, we could not run for a single day.\n\nChina and India are two faces of one industrial empire: one called "free trade," the other called "company turned dynasty."',
      },
      deliverGoal: 'N8 story (印度平行展开) — 同套手法换一副面孔: 中国不插旗隔空榨/印度从公司变政府 + 1757 普拉西战役 EIC 靠本地盟友+sepoy 拿下孟加拉 + 百年一家公司 (非国家) 靠 sepoy+王公地主 zamindar 合作统治印度大半 + 关键事实: 几千英国人管上亿印度人靠的是印度人自己 (征服主力是领英军饷的 sepoy/印度人打印度人) + 最不愿被讲却最关键的一层=本地合作者 + 中印=同帝国两副面孔 (自由贸易/公司变王朝)',
      engagementHook: '几千个英国人统治上亿印度人,靠的不是英国军队,是印度人自己——征服印度的主力是印度土兵。如果没有本地人合作,帝国一天都转不起来,这说明了什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们这套规矩,后来还在升级。\n\n1856 到 1860,我们(拉上法国)又借口要更多通商权利,打了第二次鸦片战争。1860 年,英法联军一路打进北京。按我们的说法,是因为谈判使团人员被清朝扣押、虐杀,我们的统帅额尔金(英军主帅)才下令:烧掉、洗劫圆明园。那座中国皇帝的园林,大火烧了三天三夜。(——记住,这「报复」的理由,是我们这一方的说法。)\n\n我得诚实告诉你:这件事,直到今天,都是中国人心里的一道伤。在中国的讲法里,「火烧圆明园」四个字,是国耻的象征。\n\n印度那边也在 1858 年翻篇:1857 年印度大起义被血腥镇压后,英国议会撤销了东印度公司,把印度从「公司」直接收归英国王室直辖——这就是 British Raj,英属印度。我们终于撕掉了「公司」的伪装,直接当起了统治者。\n\n到这儿,你已经看完了我这一面的全部手法。圆明园的火,是我下令烧的。可这火在另一些人心里烧成了什么,我从没真正在意过。',
        en: 'Our rules kept upgrading afterward.\n\nFrom 1856 to 1860, we (bringing France along) used the pretext of wanting more trade rights and fought the Second Opium War. In 1860, the Anglo-French forces fought all the way into Beijing. By our account, it was because members of our negotiating mission had been seized and tortured to death by the Qing that our commander, Lord Elgin (the British general in charge), gave the order: burn and loot the Yuanmingyuan. That garden of the Chinese emperor burned for three days and three nights. (Remember: this reason for "retaliation" is our side\'s telling.)\n\nI have to be honest with you: this thing, to this day, is a wound in the hearts of the Chinese. In the Chinese telling, the four words "the burning of the Yuanmingyuan" are a symbol of national humiliation.\n\nIndia turned a page in 1858 too: after the great Indian uprising of 1857 was bloodily suppressed, the British Parliament abolished the East India Company and took India from a "company" directly into the British Crown\'s rule, the British Raj. We finally tore off the disguise of a "company" and became rulers outright.\n\nBy now you have seen the whole of my methods, from my side. The fire at the Yuanmingyuan, I gave the order to light it. But what that fire became in other people\'s hearts, I never truly cared.',
      },
      deliverGoal: 'N9 story — 规矩升级 + 1856-60 第二次鸦片战争 (拉上法国借口要更多通商权利) + 1860 英法联军打进北京/谈判使团被扣押虐杀/额尔金下令焚掠圆明园 (烧三天三夜) + 商人诚实: 这是中国人心里的伤/中国讲法「火烧圆明园」=国耻象征 + 印度 1858: 1857 起义被镇压后议会撤 EIC 印度归英王室直辖 = British Raj 撕掉公司伪装直接统治 + 「火是我下令烧的但这火在别人心里烧成什么我从没在意过」',
      engagementHook: '圆明园的火,是我下令烧的。可这把火在中国人心里烧成了「国耻」——这件事,我当年从没真正在意过。施害的人不在意的东西,承受的人会记多久?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-brit-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一面,该怎么评我?两种说法都站得住,你来称。\n\n一种说法:我不过是顺应时代的商人。我没发明鸦片贸易,我来的时候它已经在那儿。是中国有需求,是市场有规律,是我的国家要扩张——我只是这台大机器上一颗尽职的螺丝。把一个时代的罪,堆到我一个普通商人头上,太轻巧了。\n\n另一种说法:正是千千万万个像我这样「只是顺应时代」「只是公平交易」的体面商人,才让这台机器转得起来。一个帝国为卖毒品而开战,靠的不是几个恶魔,而是无数个我——每天安心翻账本、把「卖鸦片」讲成「自由贸易」的人。我从没亲手害死谁,可我的体面,正建在烟馆里那些人的命、和孟加拉田里那些人的苦之上。\n\n这两边不是「他有错但情有可原」。是同一个我的两面:一个被时代裹着走的普通人,和一台靠无数普通人才转得动的暴力机器。\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked through my side, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was only a merchant going with the times. I did not invent the opium trade; it was already there when I came. China had the demand, the market had its laws, my country wanted to expand. I was only one dutiful screw in a great machine. To heap the crime of an age onto one ordinary merchant is too easy.\n\nThe other view: it is precisely thousands upon thousands of respectable merchants like me, "only going with the times," "only trading fairly," who let the machine run. An empire waging war to sell a drug runs not on a few demons, but on countless men like me, calmly turning the ledger every day, calling "selling opium" by the name "free trade." I never killed anyone with my own hand, yet my respectability is built squarely on the lives of those in the opium dens and the suffering of those in the fields of Bengal.\n\nThese are not "he was wrong but understandable." They are two faces of the same me: an ordinary man carried along by his age, and a machine of violence that runs only on countless ordinary men.\n\nThis is a hard problem an AP teacher will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (顺应时代的商人/没发明鸦片贸易/中国有需求市场有规律国家要扩张/我只是螺丝/堆到普通商人头上太轻巧) / 另一种说法 (千万个体面商人才让机器转/帝国为卖毒品开战靠的不是恶魔是无数个我/把卖鸦片讲成自由贸易/我的体面建在烟馆人命+孟加拉田里苦之上) / 同一个我两面 / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '「我只是顺应时代的一颗螺丝」,和「正是无数个我让这台机器转起来」——是同一个我。一个随大流、做着合规生意的普通人,该不该为整个时代的罪负责?你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'asian-imperialism-brit-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的,是施压方这一边的声音。\n\n请记住:这只是一边。我把「自由贸易」「私有财产」「公平交易」这些大词讲得理直气壮,甚至有点像那么回事——这正是施压方视角最危险的地方,它能把卖毒品讲得文明体面、把自己讲得通。\n\n但这一遍里,有几群人始终没真正开口。林则徐——那个写信给我们女王、赢了道义却输了战争、最后被自己皇帝当替罪羊流放的人,他会怎么讲这场战争?还有那些我账本上只是数字的人:烟馆里吸到家破人亡的中国人、被我们逼着在孟加拉种鸦片的农民——他们会怎么讲我口中这桩「公平交易」?等你换上他们的视角,他们会狠狠挑战你刚才听我说的每一句。\n\n最后留一样东西给你。还记得我货栈里那些鸦片箱吗——我眼里它们是利润、是「我的财产」。换个视角再走一遍,你会从另一个人那里,再看见同一只箱子。到那时,你会看清它一头连着谁的田,另一头连着谁的命。',
        en: 'What you just heard was the voice of one side, the pressing side.\n\nRemember: it is only one side. I spoke the grand words "free trade," "private property," "fair trade" with a clear conscience, and it even sounded a bit like it held up. That is exactly the most dangerous thing about the pressing side\'s view: it can make selling a drug sound civilized and respectable, and make itself make sense.\n\nBut in this pass, several groups of people never truly spoke. Lin Zexu, the man who wrote to our Queen, won the moral argument yet lost the war, and was at last made a scapegoat by his own emperor and exiled, how would he tell this war? And those who were only numbers in my ledger: the Chinese in the opium dens ruined unto the breaking of their families, the farmers we forced to grow opium in Bengal, how would they tell this "fair trade" of mine? When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nOne last thing to leave with you. Remember the opium chests in my warehouse, in my eyes profit, "my property"? Walk this through once more from another perspective, and you will see the same chest again, from someone else. By then you will see clearly: one end of it joins to whose field, and the other end to whose life.',
      },
      deliverGoal: 'N11 close/meta — 你听的是施压方一边 (能把卖毒品讲得文明体面/把自己讲得通最危险) + 还没听到: 林则徐 (写信给女王赢道义输战争被自己皇帝当替罪羊流放/会怎么讲这场战争) + 账本上只是数字的人 (烟馆里家破人亡的中国人/被逼在孟加拉种鸦片的农民/会怎么讲这桩公平交易) 会挑战你每句 + 暗示鸦片箱会从另一视角再看见 (一头连谁的田一头连谁的命/不直接揭破)',
      engagementHook: '施压方最危险的地方,是它能把卖毒品讲得文明体面。你听完我这一边,最想去问林则徐、问烟馆里的人、问孟加拉种鸦片的农民什么问题?',
      expectsRealAnswer: true,
    },
  ],
};

export var linzexuLens = {
  id: 'linzexu-mediator',
  name: 'Lin Zexu',
  nameCn: '林则徐',
  role: 'lonely-mediator',
  perspectiveTag: 'caught-between-two-worlds',
  icon: '\u{1F58B}\u{FE0F}',
  description: {
    cn: '1785 年生于福建侯官(今福州),清朝出了名的清官能吏。1838 年,道光皇帝任命他为钦差大臣,南下广州禁烟。他是当时最早睁眼看世界的中国官员之一，派人翻译西方报纸、给英国女王写公开信讲道理。可他卡在两个世界中间:身后是一个自认「天朝上国」、看不清对手的旧帝国,面前是一个用蒸汽和钢铁武装起来的工业强权。这一遍让你站在一个正直、聪明、尽责的人的位置,看他怎么做对了一件道义上几乎无可指摘的事,却输掉了整盘棋,还成了替罪羊。',
    en: 'Born in 1785 in Houguan, Fujian (today\'s Fuzhou), a famously upright and able Qing official. In 1838 the Daoguang Emperor appointed him high commissioner and sent him south to Canton to ban opium. He was among the first Chinese officials of his time to open his eyes to the world, having Western newspapers translated and writing an open letter of reason to the British Queen. Yet he was caught between two worlds: behind him an old empire that thought itself the "Celestial Empire" and could not see its opponent clearly; before him an industrial power armed with steam and steel. This pass puts you in the seat of an upright, intelligent, dutiful man, watching how he did right a thing all but morally unimpeachable, yet lost the whole game and was made a scapegoat.',
  },
  storyboard: [
    {
      id: 'asian-imperialism-lin-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我做对了一件事。然后我输掉了整盘棋。\n\n1839 年,我站在广州虎门的海边,看着两万多箱鸦片,在掺了石灰的大池子里化进大海。我是林则徐,清朝的钦差大臣,皇帝亲派我来,堵死一桩正在毒害千万中国人、也正在把国家白银抽干的生意。\n\n那一刻,我以为我赢了。我做的事,在道理上挑不出错:禁一桩害人的毒品,这有什么错?\n\n可三年后,我成了一个戴罪流放新疆的人。我禁的烟没禁住,我守的国打输了,我这个尽了责的钦差,成了替整个朝廷背锅的那一个。\n\n这一遍,你坐进我这个位置。你会站在两个世界的夹缝里:身后是看不清对手的旧帝国,面前是用钢铁说话的工业强权。你会亲手做一件「对的事」,然后看着它,把你带进万劫不复。',
        en: 'I did one thing right. Then I lost the whole game.\n\nIn 1839 I stood by the sea at Humen near Canton, watching more than twenty thousand chests of opium dissolve into the ocean in great pools mixed with lime. I am Lin Zexu, high commissioner of the Qing, sent here by the emperor himself to seal off a business that was poisoning millions of Chinese and draining the nation\'s silver dry.\n\nIn that moment, I thought I had won. What I did, no one could fault in reason: to ban a harmful drug, what is wrong with that?\n\nYet three years later, I was a condemned man exiled to Xinjiang. The opium I banned was not stopped; the country I guarded lost the war; I, the commissioner who did his duty, became the one who carried the blame for the whole court.\n\nThis pass puts you in my seat. You will stand in the crack between two worlds: behind you an old empire that cannot see its opponent, before you an industrial power that speaks with steel. You will do, with your own hands, a "right thing," and then watch it carry you into ruin beyond return.',
      },
      deliverGoal: 'N1 hook — 「我做对了一件事然后输掉整盘棋」+ 1839 虎门海边看两万多箱鸦片化进海/自我介绍 (林则徐/清朝钦差/皇帝亲派堵死毒害千万人抽干白银的生意) + 那刻以为赢 (禁害人毒品道理挑不出错) + 三年后戴罪流放新疆 (烟没禁住国打输尽责钦差成替罪羊) + 这一遍视角 (两个世界夹缝/做对的事却带进万劫不复)',
      engagementHook: '我做了一件道理上挑不出错的事——禁毒。可它最后把我送上了流放路。一个人「做对了事」却「输掉了一切」,错在他,还是错在他看不清的时代?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲清我接的是个什么烂摊子,你才懂我为什么非动手不可。\n\n那时候,鸦片已经像瘟疫一样,从沿海蔓延到内地。从官员到士兵到平民,吸食的人数以百万计。一个吸上瘾的人,先是变懒、变废,然后典当、卖地、卖儿女,最后家破人亡。一支抽鸦片的军队,是打不了仗的。\n\n更要命的是钱。买鸦片要付白银,千万人吸,白银就成河地往外流。国库一天天空,这不是哪一家的事,是整个国家在失血。\n\n道光皇帝下了决心:严禁。他在满朝大臣里挑中了我,因为我清廉、能干、做事认真。1838 年,他任命我为钦差大臣,给了我很大的权,让我南下广州,把这个口子彻底堵死。\n\n我去的时候,心里是有底气的。我代表的是天朝的法度,我要禁的是一桩明明白白害人的东西。我没想到,我面对的,根本不是一桩「生意」那么简单。',
        en: 'First let me make clear what mess I took over, so you understand why I had to act.\n\nBy then, opium had spread like a plague from the coast into the interior. From officials to soldiers to common folk, smokers numbered in the millions. A man hooked on it grows lazy, then useless, then pawns his goods, sells his land, sells his children, and at last his family is broken. An army that smokes opium cannot fight a war.\n\nMore deadly still was the money. Buying opium meant paying silver, and with millions smoking, silver flowed out like a river. The treasury emptied day by day. This was no one household\'s affair; it was the whole nation bleeding.\n\nThe Daoguang Emperor resolved: a strict ban. Among all the court\'s ministers he chose me, because I was clean, able, and earnest in my work. In 1838 he appointed me high commissioner, gave me great authority, and sent me south to Canton to seal this breach for good.\n\nWhen I went, I had confidence in my heart. I represented the law of the Celestial court, and what I would ban was a thing plainly harmful. I did not foresee that what I faced was not as simple as a mere "business."',
      },
      deliverGoal: 'N2 setup — 接的烂摊子: 鸦片像瘟疫从沿海到内地 (官员士兵平民吸食数以百万/上瘾→变废→典当卖地卖儿女→家破人亡/抽鸦片的军队打不了仗) + 钱: 买鸦片付白银千万人吸白银成河外流/国库空=整个国家失血 + 道光决心严禁挑中林 (清廉能干认真) 1838 任钦差给大权南下广州彻底堵 + 去时有底气 (代表天朝法度禁明明白白害人的东西) + 没想到面对的不止是「生意」',
      engagementHook: '一支抽鸦片的军队打不了仗,一个抽鸦片的国家在失血——这是我接手的烂摊子。面对一桩明明白白害人的生意,你会不会也觉得「禁它」天经地义?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我和当时大多数清朝官员不一样的地方,在于:我想搞清楚,我面对的「夷人」到底是什么来路。\n\n大多数同僚的态度是:这些外人是来朝贡、做点小买卖的化外蛮夷,赏他们口饭吃就是,何必费心了解?「天朝上国,无所不有」——这八个字,是我们整个朝廷看世界的方式。\n\n我不信这套。我到广州后,做了一件别的官员不屑做的事:我组织人手,翻译西方的报纸、书籍、地理资料,想弄明白英国在哪儿、有多大、靠什么吃饭。我是当时极少数,主动去「看世界」的中国官员之一。\n\n但你要看清我的局限。我睁开了眼,可我看的方向、用的尺子,还是旧的。我以为对面是讲道理的「商人」,是可以用道德、用天朝法度去说服、去管束的对象。\n\n我看见了世界的一角,却还没看懂:对面那个东西,已经完全不是同一个等级的对手了。',
        en: 'Where I differed from most Qing officials of the time was this: I wanted to find out what these "barbarians" before me really were.\n\nThe attitude of most colleagues was: these outsiders come to pay tribute and do a little trade, savages beyond the pale; toss them a meal and be done, why trouble to understand them? "The Celestial Empire possesses all things in abundance," those words were how our whole court saw the world.\n\nI did not believe that. After reaching Canton, I did a thing other officials thought beneath them: I organized people to translate Western newspapers, books, and geographies, trying to understand where England was, how large, and what it lived on. I was among the very few Chinese officials of the time who went, of his own will, to "look at the world."\n\nBut you must see my limit clearly. I opened my eyes, yet the direction I looked and the ruler I used were still the old ones. I thought the other side were reasonable "merchants," objects to be persuaded and disciplined by morals and by the Celestial law.\n\nI saw a corner of the world, yet I had not yet understood: the thing across from me was no longer an opponent of the same order at all.',
      },
      deliverGoal: 'N3 setup — 林与多数清官不同: 想搞清「夷人」什么来路 + 多数同僚态度 (外人来朝贡做小买卖的化外蛮夷赏饭即可/「天朝上国无所不有」=整个朝廷看世界的方式) + 林不信组织翻译西方报纸书地理 (弄明白英国在哪多大靠什么吃饭/极少数主动看世界的中国官) + 但局限: 睁了眼方向和尺子还是旧的 (以为对面是讲道理的商人/可用道德+天朝法度说服管束) + 看见世界一角却没懂对面已不是同一等级对手',
      engagementHook: '我比同僚强的地方,是我真去翻译西方资料、想看懂对手;我的盲点是,我还在用旧尺子量一个全新的对手。「睁开了眼」和「看懂了」,是一回事吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1839 年春,你在广州动手了。你把外国商人围在商馆里,断水断粮,逼他们交出全部鸦片。两万多箱,缴上来了。\n\n你做了一个干净利落的决定:不是偷偷处理,是当众销毁。1839 年初夏,你在虎门海边挖了大池子,把烟土掺上石灰和盐,化进大海。前后二十多天。你要让所有人——中国人、外国人——都看清楚:天朝禁烟,动真格的。\n\n你还做了一件别人没想到的事。你提笔给英国的维多利亚女王写了一封公开信。你跟她讲道理:你们英国自己国内禁鸦片,可见你们清楚它害人;既然知道害人,凭什么把它运来毒害我们中国人?请你查禁,断了这门生意。\n\n(这封信到底有没有真送到女王手里,后世都说不准。可你写它的时候,心里是真诚的:你相信「道理」是讲得通的,相信对面也是讲道理的人。)\n\n停一下,问自己:你这封讲道理的信,是你最大的清白,还是你最深的天真?',
        en: 'Now you are me.\n\nIn the spring of 1839, you acted at Canton. You hemmed the foreign traders into their houses, cut off water and food, and forced them to hand over all the opium. More than twenty thousand chests came in.\n\nYou made a clean, decisive choice: not to dispose of it in secret, but to destroy it in public. In the early summer of 1839, by the sea at Humen you dug great pools, mixed the paste with lime and salt, and dissolved it into the ocean. It took over twenty days. You meant for everyone, Chinese and foreign alike, to see clearly: the Celestial court bans opium, and means it.\n\nYou also did a thing others did not think of. You took up your brush and wrote an open letter to Britain\'s Queen Victoria. You reasoned with her: you English ban opium at home, so you clearly know it harms people; since you know it harms, by what right do you ship it to poison us Chinese? Please ban it and cut off this trade.\n\n(Whether that letter ever truly reached the Queen\'s own hands, later ages cannot say for sure. Yet when you wrote it, your heart was sincere: you believed "reason" could be reasoned through, believed the other side were also people of reason.)\n\nStop and ask yourself: this letter of reason, is it your greatest innocence, or your deepest naivety?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1839 春广州动手 (围商馆断水粮逼交全部鸦片/两万多箱缴上来) + 干净利落决定不偷偷处理是当众销毁 (虎门挖大池掺石灰盐化进海/二十多天/要中外都看清天朝动真格) + 跨 lens 锚: 同一批鸦片箱 (英国商人眼里是利润这里是要当众销毁的毒物) + 提笔写维多利亚女王公开信讲道理 (你们自己禁可见知道害人凭什么运来毒害我们/请查禁) + 写时真诚相信道理讲得通对面也讲道理 + 自问「这封信是最大的清白还是最深的天真」',
      engagementHook: '我提笔给英国女王写信,真诚地跟她讲道理:你自己禁的东西,凭什么卖来害我?这封信,是我最大的清白,还是我最深的天真?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回答我那封信的,不是另一封信。是炮舰。\n\n1839 年,英国以「商人财产被毁、贸易受阻」为由,派来了战舰。第一次鸦片战争开打了。\n\n我以为这会是一场可以靠谋略、靠地利、靠人心打的仗。我加固虎门炮台,整顿水师,做了我所知的一切准备。\n\n可仗一打起来,我才看见那道我之前没看懂的鸿沟。\n\n英国的蒸汽炮舰,能逆着风、逆着水,想停哪儿停哪儿,沿着海岸想打哪个城就打哪个城。我们的水师是旧式帆船,我们的炮台是固定的死靶子。他们的火力又快又远,我们的兵再勇敢,也够不着对方。\n\n这不是勇气的差距,是两个时代的差距。我面对的不是「来做生意的商人」,是一个刚刚用工业革命武装到牙齿的怪物。\n\n我那封讲道理的信,没换来一封回信。在这种对手面前,道义,一钱不值。',
        en: 'What answered that letter of mine was not another letter. It was gunboats.\n\nIn 1839, on the grounds that "merchants\' property was destroyed and trade obstructed," Britain sent warships. The First Opium War began.\n\nI had thought this would be a war fought by strategy, by the lay of the land, by the will of the people. I reinforced the forts at Humen, put the navy in order, made every preparation I knew.\n\nBut once the fighting began, I saw the gulf I had not understood before.\n\nBritain\'s steam gunboats could move against wind and current, stop wherever they pleased, and strike whichever coastal city they chose. Our navy was old-style sailing junks; our forts were fixed, dead targets. Their fire was fast and far; however brave our soldiers, they could not reach the enemy.\n\nThis was not a gap of courage. It was a gap of two ages. What I faced was not "merchants come to trade," but a monster newly armed to the teeth by the Industrial Revolution.\n\nThat letter of reason I wrote, they gave it no answer. Before an opponent like this, morals are worth not a single coin.',
      },
      deliverGoal: 'N5 story — 回答信的不是信是炮舰 + 1839 英以商人财产被毁/贸易受阻为由派战舰第一次鸦片战争开打 + 林以为靠谋略地利人心 (加固虎门炮台整顿水师做尽准备) + 仗一打看见之前没懂的鸿沟 (蒸汽炮舰逆风逆水想打哪城打哪城/我们旧式帆船+固定炮台死靶/他们火力快远兵再勇够不着) + 不是勇气差距是两个时代差距/对面是工业革命武装到牙齿的怪物 + 讲道理的信他们看都没看/道义一钱不值',
      engagementHook: '我以为这是一场能靠谋略和勇气打的仗。可对面的蒸汽炮舰想打哪座城就打哪座城——我才看清,这不是勇气的差距,是两个时代的差距。',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '仗打输了,要有人背锅。那个人是我。\n\n清军节节败退,沿海一个个城失守。朝廷里,那些当初主张「天朝无敌、夷人不足惧」的人,反过来把战败的责任全推给我——说是我在广州处置失当、惹恼了英国人,才招来这场祸。\n\n道光皇帝,那个当初亲口命我禁烟、给我大权的皇帝,翻脸了。1840 年,我被革职。后来,我被流放到遥远的新疆伊犁。\n\n你品一品这个滋味:我做的事,正是皇帝让我做的;我禁的烟,正是害国害民的毒;我尽的责,在道义上挑不出一点错。可我成了那个被全朝廷抛出去顶罪的人。\n\n（我后来在去新疆的路上写下「苟利国家生死以,岂因祸福避趋之」——意思是,只要对国家有利,生死都可以不顾,哪能因为是祸是福就躲开或扑上去。这是我真实留下的句子。）\n\n你说,该认这个命吗?',
        en: 'The war was lost, and someone had to take the blame. That someone was me.\n\nThe Qing forces fell back step by step; one coastal city after another fell. In the court, those who had once argued that "the Celestial Empire is invincible, the barbarians not worth fearing" now turned and pushed the whole responsibility for defeat onto me, saying it was my mishandling at Canton, my angering of the English, that called down this disaster.\n\nThe Daoguang Emperor, the very emperor who had ordered me to ban opium and given me great power, turned his face. In 1840 I was dismissed. Later I was exiled to far-off Yili in Xinjiang.\n\nTaste this for a moment: what I did was exactly what the emperor told me to do; the opium I banned was exactly the poison harming the nation and the people; the duty I fulfilled cannot be faulted by a hair in reason. Yet I became the one the whole court threw out to bear the guilt.\n\n(On the road to Xinjiang I later wrote: "If it benefits the country, I will give my life; how could I avoid it for fear, or rush to it for gain?" This is a line I truly left behind.)\n\nTell me, should one accept such a fate?',
      },
      deliverGoal: 'N6 ANCHOR/turning — 仗输了要人背锅那人是林 + 清军节节败退沿海城失守 + 当初主张天朝无敌的人反把战败责任全推给林 (说他在广州处置失当惹恼英国招祸) + 道光翻脸 1840 革职后流放新疆伊犁 + 滋味: 做的是皇帝让做的/禁的是害国毒/尽的责道义挑不出错/却被全朝廷抛出顶罪 + anti-fab 标注真实诗句「苟利国家生死以岂因祸福避趋之」(括号标这是真实留下的句子) + 「该认这个命吗」',
      engagementHook: '我做的事是皇帝让我做的,我禁的是害国的毒,我尽的责挑不出错——可我成了被整个朝廷抛出去顶罪的人。一个做对了事的人当了替罪羊,你替他不平吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我倒下了,可那台机器没停。我没看到的后面,更黑。\n\n1842 年,清朝被迫签下《南京条约》:赔款 2100 万银元、开五口通商、把香港岛割给英国。这是第一个「不平等条约」。\n\n但真正阴险的,是后面一层层叠上去的东西。英国人不满足于赔款割地,他们要的是一套制度:治外法权——他们的人在中国犯法,中国管不了;协定关税——中国连自己收多少税都做不了主;最惠国待遇——一个国家占了便宜,所有列强自动均沾。\n\n你看明白这套设计的可怕了吗:他们几乎没占中国的领土,却把中国的主权,一片一片剥走了。中国名义上还是个独立国家,可它做生意的规矩、收税的权、管自己人的法,都不再由自己说了算。\n\n我当年禁的是「烟」。可烟的后面,是这样一整套要把整个国家攥在手里的机器。我那时候,连这台机器长什么样,都还没看清。',
        en: 'I fell, but the machine did not stop. What lay behind, where I could not see, was darker.\n\nIn 1842 the Qing was forced to sign the Treaty of Nanking: an indemnity (a huge payment for losing the war) of 21 million silver dollars, five ports opened to trade, Hong Kong Island ceded to Britain. This was the first "unequal treaty."\n\nBut the truly sinister part was what was stacked on afterward, layer by layer. The English were not content with indemnity and land; what they wanted was a system: extraterritoriality, where their people who break the law in China are beyond China\'s reach; agreed tariffs, where China cannot even decide how much to tax; most-favored-nation, where any benefit one country seizes, all the powers automatically share.\n\nDo you see the dread of this design? They seized almost no Chinese territory, yet they peeled away China\'s sovereignty, piece by piece. In name China was still an independent country, yet the rules of its trade, the power to tax, the laws governing its own people, were no longer its own to decide.\n\nWhat I banned back then was "opium." But behind the opium stood a whole machine meant to grip the entire nation. Back then I had not even seen clearly what that machine looked like.',
      },
      deliverGoal: 'N7 story (林倒下后机器没停) — 1842《南京条约》(赔 2100 万银元/开五口/割香港岛) = 第一个不平等条约 + 真正阴险是后面叠上去的: 三件套 (治外法权: 英人在华犯法中国管不了 / 协定关税: 中国不能自定税率 / 最惠国: 一国占便宜列强均沾) + 可怕设计: 几乎没占领土却把主权一片片剥走/名义独立但贸易规矩税权法律都不再自己说了算 + 「我禁的是烟可烟后面是这样一整套攥住整个国家的机器/我那时连机器长啥样都没看清」',
      engagementHook: '我当年禁的是「烟」。可烟的后面,是一整套要把整个国家攥在手里的机器——他们几乎不占领土,却把主权一片片剥走。这种「不占领的控制」,你之前想到过吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步,给你看一张更大的图——同一个帝国,在另一个地方,用了另一种手法。\n\n那个地方叫印度。在我禁烟的同一个时代,英国早已在印度,做了一件在中国还没做的事:它不只是隔空控制,它直接当了统治者。\n\n而且最让人想不通的是方式。英国不是靠运来一支英国大军征服印度的。它靠的是印度人——领英国军饷的印度土兵(sepoy),和愿意合作的印度王公、地主。几千个英国人,靠着这些本地合作者,管住了上亿印度人。\n\n这一层,和我们中国的处境,照出了同一个真相:帝国主义从来不只是「外人单方面打进来」。在中国,鸦片能流进千家万户,靠的是一长串中国走私贩、行商、地方官的默许和参与。在印度,英国能站住脚,靠的是印度人替它打仗、替它收税。\n\n我禁得了洋人的烟,却禁不了我们自己人里,那些和这台机器合作的人。这是比炮舰更难对付的东西。',
        en: 'Let me step back and show you a larger picture: the same empire, in another place, using another method.\n\nThat place is India. In the very age I was banning opium, Britain had long done in India a thing it had not yet done in China: it not only controlled from a distance, it became the ruler outright.\n\nAnd the most baffling thing is the manner. Britain did not conquer India by shipping over a great British army. It relied on Indians: Indian soldiers (sepoys) drawing British pay, and the Indian princes and landlords willing to collaborate. A few thousand Englishmen, leaning on these local collaborators, held down hundreds of millions of Indians.\n\nThis layer, set beside our Chinese situation, reflects the same truth: imperialism is never only "outsiders breaking in from one side." In China, opium could flow into thousands of homes only through a long chain of Chinese smugglers, merchants, and local officials who looked away and took part. In India, Britain could keep its footing only because Indians fought its wars and collected its taxes.\n\nI could ban the foreigners\' opium, yet I could not ban those among our own people who collaborated with this machine. This is a thing harder to deal with than gunboats.',
      },
      deliverGoal: 'N8 story (印度对照) — 同帝国另一地另一手法: 印度 + 在林禁烟同时代英国早在印度做了在中国还没做的事 (不只隔空控制直接当统治者) + 想不通的方式: 不靠运来英国大军/靠印度人 (领英军饷的 sepoy + 愿合作的王公地主)/几千英国人靠本地合作者管住上亿印度人 + 照出同一真相: 帝国主义不只是外人单方面打进来 (中国: 鸦片流进千家靠一串中国走私贩行商地方官默许参与 / 印度: 英国站住脚靠印度人替它打仗收税) + 「我禁得了洋人的烟禁不了自己人里和机器合作的人/比炮舰更难对付」',
      engagementHook: '我禁得了洋人的烟,却禁不了我们自己人里、那些替这台机器办事的人。在印度也一样——几千英国人靠印度人管住上亿印度人。帝国主义最难对付的,会不会恰恰是「自己人」?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '有一幕,我没能亲眼看到——我死于 1850 年。可后世的历史学家,总爱把我和一个邻居放在一起问。让我用「后来人会怎么讲」的口气,替你转述。\n\n东边的邻居日本,在我死后没几年,也几乎被一模一样的炮舰逼到了门口——1853 年,美国的「黑船」开进江户湾,逼日本开国。日本面对的冲击,和我们当年几乎一样。\n\n可后来人会发现:日本的回应,和我们截然不同。\n\n它没有像我们这样,一边自称天朝、一边一败再败。1868 年,日本搞了明治维新——自上而下、彻底地学西方,几十年里把整个国家改造了一遍。后来它跻身列强,甚至在 1894 年的甲午战争里,反过来打败了我曾效力的那个清朝。\n\n同样被炮舰逼到门口,一个转身成了「列强」,一个继续沉沦。这是为什么?\n\n后来人不该把它归结成「日本人比中国人强」。差别在更深的地方:政治结构、改革的彻底程度、既得利益挡不挡得住。不是输在血脉,是输在那套我一辈子身处其中、却没能撼动分毫的旧体制。',
        en: 'There is one scene I did not live to see with my own eyes, for I died in 1850. Yet the historians who came after love to set me beside one neighbor and ask the question. Let me relay it to you in the voice of "how later people would tell it."\n\nOur eastern neighbor Japan, only a few years after my death, was also forced to the door by almost the very same gunboats. In 1853 America\'s "Black Ships" sailed into Edo Bay and forced Japan to open. The shock Japan faced was almost the same as ours back then.\n\nYet later people would find that Japan\'s response was utterly different from ours.\n\nIt did not, as we did, call itself a Celestial court while losing battle after battle. In 1868 Japan carried out the Meiji Restoration, learning from the West thoroughly and from the top down, remaking the whole country within a few decades. Later it joined the ranks of the great powers, and in the Sino-Japanese War of 1894 even turned and defeated the very Qing court I had served.\n\nForced to the door by the same gunboats, one turned and became a "great power," the other sank on. Why?\n\nLater people should not reduce this to "the Japanese are stronger than the Chinese." The difference lies deeper: political structure, how thorough the reform, whether vested interests could be overcome. It was not lost by blood. It was lost by that old system I dwelt in my whole life, yet could not shift by a hair.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国桥 (§8 中日强对照) — 林没亲眼看到对照最扎心一幕 + 林死于 1850 之后日本几乎被一样炮舰逼到门口 (1853 美国黑船开进江户湾逼日本开国/冲击和中国当年几乎一样) + 日本回应截然不同 (没像中国一边自称天朝一边一败再败/1868 明治维新自上而下彻底学西方几十年改造国家/跻身列强/1894 甲午反过来打败清朝) + 同被炮舰逼门一个成列强一个沉沦为什么 + Rule 0: 不能归结成日本人比中国人强/差别在政治结构+改革彻底程度+既得利益 + 「不是输在血脉是输在我身处其中却撼动不了的旧体制」',
      engagementHook: '同样被炮舰逼到门口,日本转身成了列强,中国继续沉沦。这不是「民族高下」——是政治结构和改革彻底程度的差别。把中日放一起看,你看见的是差距,还是两种不同的选择?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-lin-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,该怎么评我?两种说法都站得住,你来称。\n\n一种说法:我是个被时代辜负的悲剧英雄。我做的事道义无可指摘——禁一桩毒害千万人的毒品;我是当时最早睁眼看世界的官员之一;我清廉、尽责、忠诚。错的不是我,是那个看不清世界、不肯改革、最后还把我当替罪羊的旧帝国。把战败的账记到我头上,是对一个尽了全力的人最大的不公。\n\n另一种说法:我也是那个旧体制的一部分。我睁了眼,却没真正看懂对手;我用旧的道德、旧的天朝逻辑去应对一个全新的世界;我加固炮台、写信讲理,却没能、也没敢去撼动那套让中国一败再败的根本制度。一个再正直、再能干的人,如果只在旧框架里尽责,会不会反而延缓了真正该来的变革?\n\n这两边不是「他是英雄」对「他有错」。是同一个我的两面:一个做对了事的好人,和一个被困在旧体制里、连自己都救不出来的人。\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked through my life, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I am a tragic hero failed by his age. What I did was morally unimpeachable, banning a drug that poisoned millions; I was among the first officials of my time to open my eyes to the world; I was clean, dutiful, loyal. The fault is not mine, but that old empire\'s, which could not see the world clearly, would not reform, and in the end made me a scapegoat. To put the bill of defeat on my head is the greatest injustice to a man who gave his all.\n\nThe other view: I too was part of that old system. I opened my eyes, yet did not truly understand the opponent; I met a wholly new world with old morals and the old Celestial logic; I reinforced forts and wrote letters of reason, yet could not, and dared not, shift the root system that made China lose again and again. An upright, able man who only does his duty within an old frame, might he not in fact have delayed the change that truly needed to come?\n\nThese are not "he is a hero" against "he was wrong." They are two faces of the same me: a good man who did right, and a man trapped in an old system, unable to save even himself.\n\nThis is a hard problem an AP teacher will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (被时代辜负的悲剧英雄/道义无可指摘禁毒害千万人的毒/最早睁眼看世界之一/清廉尽责忠诚/错的是旧帝国把他当替罪羊/记账到他头上最大不公) / 另一种说法 (他也是旧体制一部分/睁了眼没真懂对手/用旧道德旧天朝逻辑应对全新世界/没敢撼动让中国一败再败的根本制度/只在旧框架尽责会不会延缓真正变革) / 同一个我两面 / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '一个被时代辜负的悲剧英雄,还是一个困在旧体制里、连自己都救不出来的好人?——这是同一个我。一个正直能干却只在旧框架里尽责的人,该被同情,还是该被追问?你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'asian-imperialism-lin-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的,是夹在两个世界中间那个人的声音。\n\n请记住:这也只是一边。我是个尽了责、又输了的人,我的故事很容易让你只剩下同情和不平——可同情会让你看不见我也是那个旧体制的一部分。\n\n这一遍里,还有别的声音你没真正听到。那个英国商人——他会把这场战争讲成「自由贸易」「文明对野蛮」,把烧圆明园讲成「合理的报复」。还有最该被听见、却最没声音的两群人:广州烟馆里吸到家破人亡的中国人、被英国逼着在孟加拉种鸦片的农民。我替道光禁烟,可这台机器两头的燃料,是他们。换上他们的视角,他们会问出我答不上来的问题。\n\n还有一件事,值得你带回自己的生活。你家里的长辈,讲这段历史,可能用「虎门销烟」「割让香港」「百年屈辱」;你学校的课本,讲的可能是「unequal treaties」「free trade」。这是同一段史实的两套话:家里的痛让你记住代价,学校的结构让你看清机制——可家里容易只剩仇恨,学校容易把代价算没了。别急着选一套,它们各抓住真相的一面,也各有盲点。\n\n最后,还记得那两万多箱、被我倒进大海的鸦片吗?换个视角再走一遍,你会从另一个人那里,再看见同一只箱子——看清它一头连着谁的田,另一头连着谁的命。',
        en: 'What you just heard was the voice of the man caught between two worlds.\n\nRemember: this too is only one side. I am a man who did his duty and still lost, and my story can easily leave you with nothing but sympathy and indignation, yet sympathy will keep you from seeing that I too was part of that old system.\n\nIn this pass there are other voices you did not truly hear. The British trader, he would tell this war as "free trade," "civilization against barbarism," and tell the burning of the Yuanmingyuan as "reasonable retaliation." And the two groups who most deserve to be heard yet have the least voice: the Chinese in the opium dens ruined unto the breaking of their families, and the farmers Britain forced to grow opium in Bengal. I banned opium for Daoguang, yet the fuel at both ends of this machine was them. Switch to their perspectives, and they will ask the questions I cannot answer.\n\nAnd one more thing, worth carrying back into your own life. Your elders at home may tell this history with "the destruction of opium at Humen," "the cession of Hong Kong," "the Century of Humiliation"; your school textbook may tell it with "unequal treaties," "treaty ports," "free trade." These two tongues tell the same history, only standing in different places, carrying different feelings. The pain at home makes you remember the cost; the structure at school lets you see the mechanism, yet a telling at home can shrink to pure grievance, and analysis at school can subtract the cost away. Next time you hear these two tellings clash, do not rush to choose one. Each grasps one face of the truth, and each has its own blind spot.\n\nLastly, remember the more than twenty thousand chests of opium I poured into the sea? Walk this through once more from another perspective, and you will see the same chest again, from someone else, and see clearly: one end of it joins to whose field, the other end to whose life.',
      },
      deliverGoal: 'N11 close/meta — 你听的是夹在两世界中间的人 (尽责又输了易只剩同情不平/但同情会让你看不见我也是旧体制一部分) + 还没听到: 英国商人 (会讲成自由贸易/文明对野蛮/烧圆明园讲成合理报复) + 最该被听见却最没声音两群人 (烟馆家破人亡的中国人/被逼在孟加拉种鸦片的农民/机器两头燃料是他们/会问我答不上的问题) + §9 中国桥 transfer (家里长辈: 虎门销烟/割让香港/百年屈辱 vs 学校课本: unequal treaties/treaty ports/free trade/同一史实不同位置不同情绪/别急着选一套/各抓真相一面) + 暗示鸦片箱会从另一视角再看见 (一头连谁的田一头连谁的命/不直接揭破)',
      engagementHook: '我的故事容易让你只剩同情——可同情会让你看不见,我也是那个旧体制的一部分。你家里讲「百年屈辱」,学校讲「unequal treaties」,你听完我这一遍,会怎么把这两套话接起来?',
      expectsRealAnswer: true,
    },
  ],
};

export var receivingEndLens = {
  id: 'receiving-end-canton-india',
  name: 'Two Ends of the Machine',
  nameCn: '机器的两头',
  role: 'receiving-end',
  perspectiveTag: 'opium-den-and-bengal-field',
  icon: '\u{1F342}',
  description: {
    cn: '这一遍串起一台机器的两头,两个连名字都没留下的人。一头,是广州一座鸦片烟馆里的中国人，本来是个挑夫或伙计,被烟枪一口一口拖进家破人亡。另一头,是印度孟加拉一个被东印度公司逼着种鸦片的农民，在本该种粮的地里种罂粟,收成全部低价卖给公司,运去毒害海那边的人。他们没有名字,因为历史几乎没为他们留下名字,而这恰恰是问题本身。这一遍,你站在最底层、最没有权力的位置,看「鸦片战争」这四个字背后,被同一台机器从两头碾过的、最不该被忘记的人。',
    en: 'This pass joins the two ends of one machine, two people who left not even a name. At one end, a Chinese man in an opium den in Canton, once a porter or a shop-hand, dragged pipe by pipe into the breaking of his family. At the other, a farmer in Bengal in India, forced by the East India Company to grow opium, planting poppy in fields meant for grain, the whole harvest sold cheap to the company and shipped to poison people across the sea. They have no names, because history left them almost none, and that is exactly the point. This pass puts you in the lowest, most powerless position, to see, behind the four words "Opium War," the people who should least be forgotten, crushed at both ends by the same machine.',
  },
  storyboard: [
    {
      id: 'asian-imperialism-recv-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '历史书会告诉你「鸦片战争」死了多少人、签了什么条约。它几乎不会告诉你我们是谁。\n\n因为我们,连名字都没留下。\n\n我是这台机器的两头。一头,是广州一座烟馆里的我——本来是个挑夫,后来被一根烟枪,一口一口地拖进了万劫不复。另一头,是印度孟加拉一块田里的我——被一家公司逼着,在本该种粮食的地里种罂粟,种出毒害海那边人的东西。\n\n我们俩,隔着一整片海洋,从不认识。可我们被同一台机器,从两头碾过。\n\n那些打仗的、签约的、写信讲道理的大人物,你都听过了。这一遍,你站到最底下来,站到我们这两个没名字的人这儿来。\n\n你会看清「鸦片战争」这四个字底下,到底压着什么。',
        en: 'The history books will tell you how many died in the "Opium War" and what treaties were signed. They will hardly tell you who we were.\n\nBecause we left not even a name.\n\nI am the two ends of this machine. At one end, I am in an opium den in Canton, once a porter, later dragged pipe by pipe into ruin beyond return. At the other end, I am in a field in Bengal in India, forced by a company to plant poppy in soil meant for grain, growing the thing that poisons people across the sea.\n\nThe two of us, an entire ocean apart, never knew each other. Yet we were crushed by the same machine, from both ends.\n\nThe great men who fought, signed treaties, wrote letters of reason, you have heard them all. This pass, you come down to the very bottom, come to where we stand, the two of us with no name.\n\nYou will see clearly what is pressed beneath the four words "Opium War."',
      },
      deliverGoal: 'N1 hook — 历史书告诉你死多少人签什么条约几乎不告诉你我们是谁 (连名字都没留下) + 我是机器两头 (一头广州烟馆里的我本是挑夫被烟枪一口一口拖进万劫不复 / 另一头印度孟加拉田里的我被公司逼在该种粮的地种罂粟种出毒害海那边人的东西) + 隔一整片海洋从不认识却被同一台机器从两头碾过 + 大人物你都听过了这一遍站到最底下没名字的我们这儿 + 看清「鸦片战争」四个字底下压着什么',
      engagementHook: '历史书会告诉你死了多少人、签了什么条约,却几乎不告诉你「我们是谁」——因为我们连名字都没留下。一段历史,如果只记得大人物,会漏掉谁?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清这台机器是怎么转的,你才懂我们为什么是它的燃料。\n\n这台机器,有个干净的名字,叫「三角贸易」。\n\n英国人爱喝中国茶,买茶要付白银,白银哗哗流进中国。英国受不了这个亏,于是想了个办法:让印度种鸦片,走私进中国换白银,白银再拿去买茶。一个三角转起来,英国的亏,反转成了赚。\n\n你听这个说法,是不是觉得挺「聪明」、挺干净?茶、银、鸦片,绕个圈,账就平了。\n\n可这套干净的算术里,有两个被算进去、却从不被当人看的东西:一个,是被逼着种罂粟的印度农民——也就是我。另一个,是吸鸦片吸到死的中国人——也是我。\n\n在英国商人的账本上,我们俩都只是数字:一边是「原料产量」,一边是「市场需求」。这一遍,我要让你看见,这两个「数字」,各自是一条什么样的命。',
        en: 'First see clearly how this machine turns, so you understand why we are its fuel.\n\nThe machine has a clean name: the "triangular trade."\n\nThe English love Chinese tea; to buy tea they pay silver, and silver floods into China. England cannot bear the loss, so it devised a way: have India grow opium, smuggle it into China for silver, and use the silver to buy tea. A triangle turns, and England\'s loss flips into profit.\n\nHearing it put this way, does it not sound rather "clever," rather clean? Tea, silver, opium, go around a loop, and the books balance.\n\nBut in this clean arithmetic there are two things counted in, yet never treated as people: one, the Indian farmer forced to plant poppy, that is me. The other, the Chinese smoking opium unto death, that is also me.\n\nIn the British trader\'s ledger, the two of us are only numbers: on one side "raw output," on the other "market demand." This pass, I will let you see what kind of life each of these two "numbers" really is.',
      },
      deliverGoal: 'N2 setup — 看清机器怎么转才懂我们为何是燃料 + 干净的名字「三角贸易」(英人爱中国茶买茶付白银流入中国/受不了亏→让印度种鸦片走私进中国换白银/白银买茶/亏反转成赚) + 这说法听着聪明干净 (茶银鸦片绕圈账就平) + 但算术里两个被算进却不当人看的: 被逼种罂粟的印度农民=我 / 吸鸦片吸到死的中国人=我 + 商人账本上我俩只是数字 (一边原料产量一边市场需求) + 这一遍让你看见这两个数字各是什么命',
      engagementHook: '茶、银、鸦片绕个圈,账就平了——这套「三角贸易」听起来又聪明又干净。可这干净的算术里,有两个被当成「数字」的人。当残忍被算得很干净时,它是不是反而更容易被忽略?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲我在印度这一头的命。\n\n我是孟加拉的一个农民。我家世世代代,在这块地上种粮食——稻子、豆子,种出来,一家人能吃饱。\n\n后来,东印度公司来了。它不直接抢我的地,它用一种更绑得死的办法:预付款和契约。它先塞给我一笔钱,逼我签下字据,从此我这块地,只能种罂粟,收成全部低价卖给它,价钱由它说了算。\n\n你想想这有多荒唐:我种出来的东西,我自己不能吃、不能用。罂粟不能当饭。它被公司收走,加工成烟土,装上船,运去毒害海那边、我一辈子见不到的中国人。\n\n更要命的是,粮田变成了罂粟田。遇上荒年,地里没粮,公司的契约还压在身上——人,就活活饿死。\n\n（我没有名字。孟加拉成千上万的农民都过着这样的日子,可历史没替我们任何一个人留下名字。）',
        en: 'First let me tell of my life at the India end.\n\nI am a farmer in Bengal. My family, for generations, has grown grain on this land, rice and beans, grown so the family can eat its fill.\n\nThen the East India Company came. It did not seize my land outright; it used a method that bound me tighter: advance payment and contract. It first pressed a sum of money on me, forced me to sign the bond, and from then on this land of mine could grow only poppy, the whole harvest sold cheap to the company, the price set by the company alone.\n\nThink how absurd this is: what I grow, I myself cannot eat, cannot use. Poppy cannot be a meal. It is taken by the company, processed into paste, loaded on ships, carried away to poison the Chinese across the sea, people I will never see in my life.\n\nWorse still, grain fields became poppy fields. When a lean year comes, there is no grain in the ground, yet the company\'s contract still presses on me, and a man starves to death alive.\n\n(I have no name. Thousands upon thousands of farmers in Bengal lived days like this, yet history left a name for not one of us.)',
      },
      deliverGoal: 'N3 setup (印度这头) — 我是孟加拉农民世代种粮 (稻豆/一家吃饱) + 东印度公司来了不直接抢地用更绑死的办法 (预付款+契约/先塞钱逼签字据/从此只能种罂粟/收成全部低价卖给它价钱它说了算) + 荒唐: 种出来自己不能吃 (罂粟不能当饭/被公司加工成烟土装船运去毒害海那边一辈子见不到的中国人) + 更要命: 粮田变罂粟田荒年地里没粮契约还压身上活活饿死 + anti-fab 括号 (我没名字/成千上万孟加拉农民都这样历史没留下任何一个名字)',
      engagementHook: '我被逼着在该种粮食的地里种罂粟,种出来的东西我自己不能吃、不能用——它要运去毒害海那边我一辈子见不到的人。当你被迫生产「伤害别人的东西」,你还是你自己吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我——机器的另一头,广州一座烟馆里的中国人。\n\n你本来不是这样的。你本来是个挑夫,或是个铺子里的伙计,起早贪黑,日子苦,可还撑得住。\n\n第一口烟,是别人递给你的。他说,抽一口,解乏,不累了。\n\n你信了。那一口下去,油灯把烟枪烤出焦甜的烟气,吸进胸口的那一刻——奇了,一整天的疲惫、肩上的酸、心里的苦,全都散了。你飘了起来。\n\n你以为你找到了一个喘口气的地方。\n\n你不知道的是:从这一口开始,那台你看不见的机器,已经把你算成了它账本上的一个数字——「市场需求」。你以为是你在抽烟,其实,是那台横跨印度、中国、英国的机器,开始一口一口地,抽你。\n\n停一下,问自己:那递到你嘴边的「解乏」,到底是谁的好意,又是谁的生意?',
        en: 'Now you are me, the other end of the machine, a Chinese man in an opium den in Canton.\n\nYou were not always like this. You were once a porter, or a hand in a shop, up before dawn and toiling late, a hard life, but you could still bear it.\n\nThe first pipe was handed to you by someone. He said, take a draw, it eases the weariness, you won\'t feel tired.\n\nYou believed him. That draw went down, the oil lamp baked a sweet, scorched smoke from the pipe, and the moment it entered your chest, strange, a whole day\'s weariness, the ache in your shoulders, the bitterness in your heart, all of it scattered. You floated up.\n\nYou thought you had found a place to catch your breath.\n\nWhat you did not know: from this one pipe on, that machine you cannot see had already counted you as a number in its ledger, "market demand." You thought you were smoking the opium. In truth, it was that machine, spanning India, China, and England, that had begun, pipe by pipe, to smoke you.\n\nStop and ask yourself: that "easing of weariness" handed to your lips, whose kindness was it really, and whose business?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak (中国这头烟馆) — 你本来不是这样 (挑夫或铺子伙计/起早贪黑日子苦还撑得住) + 第一口烟别人递的 (说抽一口解乏不累) + 你信了那口下去 (油灯烤出焦甜烟气吸进胸口那刻一整天疲惫肩酸心苦全散了/你飘起来/以为找到喘口气的地方) + 你不知道: 从这口起那台看不见的机器已把你算成账本数字「市场需求」/你以为你在抽烟其实是横跨印中英的机器一口一口抽你 + 自问「递到嘴边的解乏是谁的好意又是谁的生意」',
      engagementHook: '你以为是你在抽烟,其实是那台横跨印度、中国、英国的机器,开始一口一口地抽你。那递到你嘴边的「解乏」,到底是谁的好意,又是谁的生意?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '接着,瘾来了。\n\n一开始是解乏,后来是离不开。不抽,浑身骨头像被人拆开,流泪流涕,坐立不安。你必须再抽,只为了能像个正常人一样活着。\n\n钱不够了。先是花光积蓄,然后典当——衣服、家什、能换钱的都拿去当了。再然后,卖地。最后,卖儿女。\n\n我得对你诚实:这一步步往下掉,不全是那个英国商人一只手推的。把烟土铺到我嘴边的,是一长串中国人——走私的贩子、放账的商人、给洋行办事的买办(中间人)、睁一只眼闭一只眼的地方官。没有他们,洋人的烟根本进不了内地。\n\n这是这件事最难看清、也最诚实的一层:害我的,有海那边的帝国,也有我身边、跟我同文同种的人。一台压榨人的机器,从来不是只靠「外人」转动的。\n\n可不管是谁的手,落到最底下、把命赔进去的,是我。',
        en: 'Then the craving came.\n\nAt first it was easing weariness; later it was being unable to do without. Skip it, and your bones feel as if pulled apart, eyes and nose streaming, unable to sit or stand. You must smoke again, only to live like a normal person.\n\nThe money ran short. First the savings spent, then pawning, clothes, household things, anything that could fetch money, taken to be pawned. Then, selling the land. At last, selling the children.\n\nI must be honest with you: this step-by-step fall was not pushed by the British trader\'s one hand alone. Those who laid the opium paste to my lips were a long chain of Chinese, smuggling peddlers, money-lending merchants, the compradors (middlemen) who handled business for the foreign firms, local officials who looked the other way. Without them, the foreigner\'s opium could never have reached the interior.\n\nThis is the layer hardest to see clearly, and the most honest: those who harmed me included the empire across the sea, and also people beside me, of my own language and kind. A machine that squeezes people never turns on "outsiders" alone.\n\nYet whoever\'s hand it was, the one who fell to the very bottom and paid with his life was me.',
      },
      deliverGoal: 'N5 story — 瘾来了 (一开始解乏后来离不开/不抽骨头像被拆开流泪流涕坐立不安/必须再抽只为像正常人活) + 钱不够 (花光积蓄→典当衣物家什→卖地→卖儿女) + anti-fab 诚实: 往下掉不全是英国商人一只手推的 (把烟土铺到嘴边的是一长串中国人: 走私贩子/放账商人/睁眼闭眼地方官/没他们洋烟进不了内地) + 最难看清也最诚实一层: 害我的有海那边帝国也有同文同种的人/压榨人的机器从来不只靠外人转 + 「不管谁的手落到最底下赔命的是我」',
      engagementHook: '害我的,有海那边的帝国,也有我身边、跟我同文同种的人——没有他们,洋人的烟根本进不了内地。一台压榨人的机器,从来不是只靠「外人」转动的。这话,你认吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1839 年,机器的两头,同时发生了一件大事——虽然我们两个都没真正看见。\n\n在广州的虎门海边,一个叫林则徐的大官,把缴来的两万多箱鸦片,当众倒进掺了石灰的大池子,化进了大海。\n\n我要你看清那两万多只箱子,到底是什么。\n\n那不只是「财产」,不只是英国商人账本上的「利润」。打开任何一只箱子——那里面装的烟土,一头,是孟加拉的我,在该种粮的地里,弯着腰种了一整季的罂粟;另一头,是广州的我,在烟馆里,用一条命、一个家,一口一口换来的瘾。\n\n同一只箱子,一头连着印度一块荒了的粮田,一头连着中国一个散了的家。\n\n林则徐把它们倒进海里的时候,他想堵的是毒,是国家的失血。这是对的事。可你站在我们这两头看:那海里化掉的,从来不只是「英国人的货」——那是两群没名字的人,被同一台机器榨干之后,剩下的残骸。',
        en: 'In 1839, at both ends of the machine, a great thing happened at once, though neither of us truly saw it.\n\nBy the sea at Humen near Canton, a high official named Lin Zexu poured the more than twenty thousand seized chests of opium, in public, into great pools mixed with lime, and dissolved them into the ocean.\n\nI want you to see clearly what those more than twenty thousand chests really were.\n\nThey were not only "property," not only "profit" in a British trader\'s ledger. Open any one chest, and the opium paste inside it: at one end, it is me in Bengal, bent over a whole season planting poppy in soil meant for grain; at the other end, it is me in Canton, in the den, a craving bought pipe by pipe with a life and a family.\n\nThe same chest, one end joined to a ruined grain field in India, the other to a broken home in China.\n\nWhen Lin Zexu poured them into the sea, what he meant to seal off was poison, the nation\'s bleeding. This was a right thing. Yet stand where the two of us stand: what dissolved in that sea was never only "the Englishman\'s goods." It was the dregs left behind by two groups of nameless people, after the same machine had squeezed them dry.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (鸦片箱第三触/承受方揭破完整含义) — 1839 机器两头同时发生大事虽我俩都没真正看见 + 虎门林则徐把两万多箱鸦片当众倒进掺石灰大池化进海 + 要你看清那两万多箱到底是什么: 不只是财产/不只是商人账本上利润/打开任一箱里面烟土一头是孟加拉的我弯腰种一整季罂粟另一头是广州的我用一条命一个家一口口换来的瘾 + 同一只箱子一头连印度荒了的粮田一头连中国散了的家 + 林倒进海想堵毒+国家失血是对的事但站我们两头看: 海里化掉的从来不只是英国人的货是两群没名字的人被同一台机器榨干后留下的渣',
      engagementHook: '打开任何一只鸦片箱:一头是孟加拉的我弯腰种了一季的罂粟,另一头是广州的我用一条命换来的瘾。同一只箱子,一头连着印度一块荒了的粮田,一头连着中国一个散了的家。你之前看那场战争,看见过这只箱子里装的是什么吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '林则徐倒掉那批烟,没能救下我们任何一个。\n\n烟一被销毁,英国就用炮舰打了回来。第一次鸦片战争(1839-1842),清朝输了。然后是 1842 年的《南京条约》——赔款、开五口、割香港。\n\n你以为打完这一仗,毒就断了?恰恰相反。条约让通商的口子开得更大,鸦片流进来更顺了。1856 到 1860,英国又打了第二次鸦片战争,1860 年烧了圆明园。一仗接一仗,中国越输越多。\n\n这些「大事」,在历史书上是条约的名字、城市的名字、皇帝的名字。\n\n可在我这儿,它们什么都没改变。林则徐倒烟之前,我在烟馆里;他倒完、打完、签完之后,我还在烟馆里——而且烟更多、更便宜了。我那个卖了地、卖了孩子的家,没有任何一个条约提到过。\n\n大人物的胜负,从我头顶上飞过去。落到地上、压在我身上的,只有那杆永远不肯放过我的烟枪。',
        en: 'Lin Zexu pouring out that opium saved not one of us.\n\nThe moment the opium was destroyed, Britain struck back with gunboats. The First Opium War (1839-1842), the Qing lost. Then came the Treaty of Nanking in 1842, an indemnity (a huge payment for losing the war), five ports opened, Hong Kong ceded.\n\nYou think that once this war was fought, the poison was cut off? Quite the opposite. The treaty opened the gates of trade wider, and opium flowed in more smoothly. From 1856 to 1860, Britain fought the Second Opium War, and in 1860 burned the Yuanmingyuan. War after war, China lost more and more.\n\nThese "great events," in the history books, are the names of treaties, the names of cities, the names of emperors.\n\nYet for me, they changed nothing. Before Lin Zexu poured out the opium, I was in the den; after he poured it, fought it, signed it all, I was still in the den, and the opium was more plentiful, cheaper. My home, with its sold land and sold children, was mentioned in not a single treaty.\n\nThe victories and defeats of great men flew over my head. What fell to the ground and pressed on me was only that opium pipe that would never let me go.',
      },
      deliverGoal: 'N7 story — 林倒烟没救下我们任何一个 + 烟被销毁英国用炮舰打回来 + 第一次鸦片战争 1839-42 清输 + 1842《南京条约》(赔款开五口割香港) + 你以为打完毒就断了恰恰相反 (条约让通商口开更大鸦片流进更顺/1856-60 第二次鸦片战争/1860 烧圆明园/一仗接一仗越输越多) + 这些大事在历史书是条约名城市名皇帝名 + 但在我这儿什么都没改变 (倒烟前我在烟馆/倒完打完签完后我还在烟馆而且烟更多更便宜/卖了地卖了孩子的家没任何条约提到) + 大人物胜负从我头顶飞过落到我身上的只有那杆不放过我的烟枪',
      engagementHook: '林则徐倒烟之前,我在烟馆里;他倒完、打完、签完之后,我还在烟馆里——而且烟更多、更便宜了。大人物的胜负从我头顶飞过,落到我身上的,只有那杆烟枪。历史记住了条约,记住我了吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在回到我在印度这一头。种鸦片的我,从没能翻身。但这台机器在印度还压着另一群人——他们做了一件烟馆里的我、田里的我都没机会做的事:反抗。\n\n先说清楚:种鸦片的农民,和替公司扛枪的印度兵(sepoy),是同一台机器在印度榨出的两种人,不是同一个人。我在孟加拉的粮田里弯腰种罂粟;他们在恒河平原一带领着英国军饷打仗。\n\n这台机器,正是靠印度人自己撑起来的。几千个英国人管不了上亿印度人,靠的就是这些 sepoy,和愿意合作的王公、地主。\n\n可被依赖的人,也可能是掀翻它的人。\n\n1857 年,导火索是英国发的新子弹——据传涂了猪油和牛油,装弹要用牙咬开,同时冒犯了视猪为不洁的穆斯林、和视牛为神圣的印度教徒。士兵相信,这是英国在故意羞辱信仰。\n\n（要说清楚:涂油子弹只是导火索。真正点着的,是兼并、是税地剥夺、是长年歧视——积压太久的火。)\n\n那一年,被英国最依赖的那群 sepoy,把枪口掉转了过来。这是 1857 年印度大起义。扛枪的那群印度人,第一次,不再只是被碾的一头。',
        en: 'Now back to my end in India. I, the one who grew the poppy, never rose again. But this machine in India pressed down on another group of people too, and they did a thing neither the den-bound me nor the field-bound me ever had the chance to do: they rose up.\n\nLet me be clear first: the farmer who grew the opium and the Indian soldier (sepoy) who carried a gun for the company are two kinds of people the same machine squeezed out of India, not one and the same person. I bent over poppy in a Bengal grain field; they drew British pay and fought across the Gangetic plain.\n\nThis machine was held up by Indians themselves. A few thousand Englishmen could not hold down hundreds of millions of Indians; they leaned on these sepoys, and on the princes and landlords willing to collaborate.\n\nBut the people it depended on could also be the ones to overturn it.\n\nIn 1857, the spark was a new cartridge the British issued, said to be greased with pig fat and cow fat, the loading of which meant biting it open with the teeth, offending at once the Muslims, who hold the pig unclean, and the Hindus, who hold the cow sacred. The soldiers believed Britain was deliberately insulting their faith.\n\n(To be clear: the greased cartridge was only the spark. What truly caught fire was annexation, the stripping of land and taxes, years of contempt, a fire long pent up.)\n\nThat year, the very sepoys Britain most depended on turned their guns around. This is the great Indian uprising of 1857. The Indians who carried the guns, for the first time, were no longer only the end being crushed.',
      },
      deliverGoal: 'N8 story (印度这头的「后来」/反抗) — 我也有后来且做了烟馆里的我没机会做的事=反抗 + 机器在印度靠印度人自己撑 (几千英国人管不了上亿印度人/靠领英军饷 sepoy+愿合作王公地主/我们很多人替它打仗收税种鸦片) + 被依赖的人也可能掀翻它 + 1857 导火索新子弹据传涂猪油牛油咬开同时冒犯穆斯林(猪不洁)+印度教徒(牛神圣)/士兵信英国故意羞辱信仰 + anti-fab 括号: 涂油子弹只是导火索不是根本原因 (真正点着是兼并+税地剥夺+长年歧视积压太久的火) + 那年最被依赖的印度兵把枪口掉转=1857 印度大起义 + 我这个被算成原料产量的人第一次不再只是被碾的那头',
      engagementHook: '被这台机器最依赖的那群印度兵,1857 年把枪口掉转了过来。一台机器最依赖的那层人,会不会恰恰也是能掀翻它的人?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可我得对你诚实:反抗了,不等于赢了。\n\n1857 年的印度大起义,被英国血腥镇压下去,双方都有屠杀。起义军推举出来的、印度旧王朝(莫卧儿)那位年迈的末代皇帝,被废黜、流放缅甸,客死他乡——存在几百年的莫卧儿王朝,就此终结。\n\n镇压之后,英国反而把绳子收得更紧。1858 年,它撤销了东印度公司,把印度从「一家公司管」,直接收归英国王室直辖。这就是 British Raj,英属印度。从「被一家公司榨」,变成了「被一个王国直接统治」。\n\n两头一起看:广州烟馆里的我,等不到任何人来救;扛枪的那群印度人,拼死反抗了一场,换来的是更紧的枷锁。\n\n这就是「receiving-end」——承受的那一端——最沉的真相:我们既不是历史书里的主角,有时,连反抗都改变不了结局。\n\n（这里值得你多想一层:同样被这台机器碾,有人反抗（1857 起义）、有人合作（替公司扛枪的 sepoy、办事的买办、印度王公）、有人想改良自救——同一个被殖民的社会,为什么会同时长出这三种人?这是 AP 阅卷最看重的「同社会内部分化」。）\n\n可有一件事,谁也夺不走:我们真实地活过、苦过、挣扎过。哪怕没人记下我们的名字。',
        en: 'But I must be honest with you: to have risen up is not to have won.\n\nThe great Indian uprising of 1857 was bloodily put down by Britain, with massacres on both sides. The aged last emperor of India\'s old Mughal dynasty, raised up by the rebels, was deposed and exiled to Burma, dying far from home, and the Mughal dynasty, which had stood for centuries, ended there.\n\nAfter the suppression, Britain instead pulled the rope tighter. In 1858 it abolished the East India Company and took India from "a company\'s rule" directly into the British Crown\'s rule. This is the British Raj. India went from "squeezed by a company" to "ruled directly by a kingdom."\n\nLook at both ends together: I in the Canton den waited for no one to come and save me; the Indians who carried the guns rose up in a fight to the death, and got for it a tighter chain.\n\nThis is the heaviest truth of the "receiving-end": we are not the protagonists in the history books, and at times, even rising up cannot change the ending.\n\n(Here is a layer worth thinking on: crushed by the same machine, some resisted (the 1857 uprising), some collaborated (the gun-carrying sepoy, the comprador who handled business for the foreign firms, the Indian princes), and some sought reform to save themselves. Why does one colonized society grow all three kinds of people at once? This "division inside one society" is what AP graders prize most.)\n\nYet one thing no one can take away: we truly lived, suffered, and struggled. Even if no one wrote down our names.',
      },
      deliverGoal: 'N9 zoom-out — 诚实: 反抗不等于赢 + 1857 印度大起义被英国血腥镇压双方都有屠杀 + 起义军推举的年迈末代莫卧儿皇帝被废黜流放缅甸客死他乡/存在几百年的莫卧儿王朝终结 + 镇压后英国反而收紧 (1858 撤销东印度公司/印度从一家公司管直接收归英王室直辖=British Raj/我从被公司榨变成被王国直接统治) + 两头一起看 (广州烟馆的我等不到人救/孟加拉田的我拼死反抗换来更紧枷锁) + receiving-end 最沉真相: 我们既不是主角有时连反抗都改变不了结局 + 但谁也夺不走: 我们真实活过苦过挣扎过哪怕没人记下名字',
      engagementHook: '广州烟馆里的我,等不到任何人来救;孟加拉田里的我,拼死反抗了一场,换来的是更紧的枷锁。承受的那一端,最沉的真相是:有时连反抗都改变不了结局。可有一件事谁也夺不走——你猜是什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'asian-imperialism-recv-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我们这两头的命,有一个真问题,等你来答——它没有标准答案,两边都站得住。\n\n英属印度,后来确实修了铁路、电报,统一了行政和英语;通商口岸,后来也成了中国最早接触现代世界的窗口。有人因此说:帝国主义虽然残忍,可它「客观上」带来了现代化,功过要一起算。\n\n一种说法:这话有它的道理。历史不是非黑即白,铁路是真的,统一行政是真的,这些后来都留下了。只算侵略、不算这些,是不是把历史看简单了?\n\n另一种说法:这话最危险的地方,是它替施害者说话。对孟加拉田里饿死的我、对广州烟馆里家破人亡的我——「客观上带来现代化」这句话,有任何意义吗?何况印度还有去工业化、财富外流、周期性大饥荒。用「铁路」去抵「饥荒」,这账,凭什么这么算?\n\n关键在 Rule 0:侵略的不义,和后果的复杂,可以同时为真——一个是道义判断,一个是结构分析,不在同一层,不能互相抵消。\n\n你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked the lives at our two ends, there is a real question waiting for you, with no standard answer; both sides stand.\n\nThe British Raj did, later, build railways and the telegraph, and unified the administration and the English language; the treaty ports, later, became China\'s earliest windows onto the modern world. Some therefore say: imperialism was cruel, yet it "objectively" brought modernization, and the merits and faults must be reckoned together.\n\nOne view: there is reason in this. History is not black and white. The railways were real, the unified administration was real, and these remained afterward. To count only the invasion and not these, is that not seeing history too simply?\n\nThe other view: the most dangerous thing about this saying is that it speaks for the perpetrator. To me, starved in a Bengal field, to me, my family broken in a Canton den, does "it objectively brought modernization" carry any meaning at all? Besides, India also had deindustrialization (its own crafts and workshops wiped out), the drain of wealth (money flowing out to Britain), periodic great famines. To set "railways" against "famine," by what right is the account reckoned this way?\n\nThe key is Rule 0: the injustice of the invasion and the complexity of its consequences can both be true at once, one a moral judgment, one a structural analysis, not on the same plane, and they cannot cancel each other out.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (核心 Rule 0 难题) — 真问题: 英属印度后来修铁路电报统一行政英语/通商口岸成中国最早接触现代世界窗口/有人说帝国主义虽残忍客观上带来现代化功过一起算 + 一种说法 (有道理/历史非黑即白铁路真统一行政真都留下了/只算侵略不算这些是不是把历史看简单了) + 另一种说法 (最危险是替施害者说话/对饿死的我家破的我现代化有任何意义吗/印度还有去工业化财富外流大饥荒/用铁路抵饥荒凭什么这么算) + 关键 Rule 0: 侵略不义+后果复杂同时为真 (一个道义判断一个结构分析不在同层不能互相抵消) + 想 30 秒两边都站得住',
      engagementHook: '帝国主义修了铁路、也造了饥荒。一种说法:功过要一起算。另一种说法:用「铁路」去抵「饥荒」,是在替施害者说话。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'asian-imperialism-recv-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的,是这台机器最底下、两头被碾的人的声音。\n\n请记住:这也只是一边。我们的苦是真的,可只听见苦,你会以为这段历史只有「受害者和坏人」两层。它没那么简单。\n\n你还没真正听到另外两个人。那个英国商人——他会把这一切讲成「自由贸易」「公平交易」,他真的相信自己只是个守规矩的生意人。还有林则徐——他禁烟有理、赢了道义却输了战争、最后被自己的皇帝流放。他想救的,正是烟馆里的我;可他也救不了我。换上他们的视角,你会听到完全不同的讲法——别急着否定,试着同时握住。\n\n这里有一件事,要特别交给华裔的你。你家里的长辈,讲这段历史,可能满是「虎门销烟」「割让香港」「百年屈辱」的情感;你学校的课本,讲的可能是冷静的「unequal treaties」「free trade」。这两套话,不是真假之争——它们讲的是同一段史实,一套带着切肤的痛,一套带着结构的冷。真正难的本事,是同时握住这两者:家里的痛让你记住代价(冷静的分析容易把代价算没了),学校的结构让你看清机制(只剩仇恨的叙事容易看不清机制)。两套话各有它抓住的真,也各有它看不见的盲点。\n\n最后想一想:今天的世界里,还有没有这样一台机器——把某些没名字的人,从两头当成燃料?你愿不愿意,做那个把他们的名字找回来的人?',
        en: 'What you just heard was the voice of the people at the very bottom of this machine, crushed at both ends.\n\nRemember: this too is only one side. Our suffering is real, yet if you hear only the suffering, you will think this history has just two layers, "victims and villains." It is not that simple.\n\nYou have not yet truly heard the other two. The British trader, he would tell all of this as "free trade," "fair trade," and he truly believes he is only a rule-abiding businessman. And Lin Zexu, who banned opium with reason, won the moral argument yet lost the war, and was at last exiled by his own emperor. The one he wanted to save was me, in the den; yet he could not save me either. Switch to their perspectives, and you will hear an entirely different telling. Do not rush to reject it; try to hold both at once.\n\nHere is one thing to hand especially to you, if you are of Chinese heritage. Your elders at home may tell this history full of the feeling of "the destruction of opium at Humen," "the cession of Hong Kong," "the Century of Humiliation"; your school textbook may tell it with the cool "unequal treaties," "free trade." These two tongues are not a quarrel of true against false. They tell the same history, one carrying a pain close to the skin, one carrying the cool of structure. The truly hard skill is to hold both at once: the pain at home makes you remember the cost (cool analysis can quietly subtract the cost away), and the structure at school lets you see the mechanism (a telling of pure grievance can miss the mechanism). Each tongue grasps a truth, and each has its own blind spot.\n\nLastly, think on this: in today\'s world, is there still a machine like this, taking certain nameless people and using them as fuel from both ends? Would you be willing to be the one who brings their names back?',
      },
      deliverGoal: 'N11 close/meta — 你听的是机器最底下两头被碾的人 (苦是真的但只听苦会以为只有受害者和坏人两层没那么简单) + 还没真正听到另两个: 英国商人 (会讲成自由贸易/公平交易/真信自己只是守规矩生意人) + 林则徐 (禁烟有理赢道义输战争被自己皇帝流放/想救的正是烟馆里的我却也救不了我) 换视角会听到完全不同讲法别急着否定试着同时握住 + §9 中国桥 transfer 特别交给华裔的你 (家里长辈: 虎门销烟/割让香港/百年屈辱满是情感 vs 学校课本: 冷静 unequal treaties/free trade/不是真假之争同一史实一套切肤痛一套结构冷/真正难的本事是同时握住两者) + transfer「今天世界还有没有这样一台机器把没名字的人从两头当燃料/你愿不愿做把他们名字找回来的人」',
      engagementHook: '我们的苦是真的——可只听见苦,你会以为这段历史只有「受害者和坏人」。换上英国商人、林则徐的视角,你会听到完全不同的讲法。今天的世界里,还有没有一台这样的机器,把没名字的人从两头当成燃料?',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'british-actor':                britishLens,
  'linzexu-mediator':             linzexuLens,
  'receiving-end-canton-india':   receivingEndLens,
};

// receiving-end 优先 (被殖民者能动性+代价 = AP DBQ 必考; 无名承受者两头碾本身是 load-bearing pedagogy)
export var defaultLens = 'receiving-end-canton-india';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'asian-imperialism-1839',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'british-actor': 28, 'linzexu-mediator': 30, 'receiving-end-canton-india': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 一只鸦片箱 (三视角各触一次不点破; 承受方 N6 揭破完整含义=一头连孟加拉粮田一头连中国散了的家)',
    'defaultLens: receiving-end-canton-india — 被殖民者能动性+代价 (AP DBQ 必考) + 无名承受者两头碾',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'Rule 0 高敏感: 侵略不义 (为卖毒品开战) 与后果复杂 (铁路/英语 vs 饥荒/去工业化) 两面同体, N10 receiving-end 显式标注不在同一层不能互相抵消',
    'anti-fab: 林则徐「苟利国家生死以」真实诗句标注; 孟加拉农民/烟馆中国人无名用括号短句标 (史料无名)',
    '§9 中国桥: receiving-end N11 + linzexu N9/N11 注入 (家里语言 vs 学校语言 / 中日同冲击不同回应)',
    'Cultural ban: 中国段用中文术语 (清/道光/林则徐/虎门/治外法权), 印度段用 sepoy/EIC/Raj/Mughal/zamindar/Bengal, 不混用',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
