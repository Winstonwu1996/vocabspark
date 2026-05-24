// ─── Hamilton vs Jefferson · The First Party System 1790s (Story-First v2) ───
//
// Topic: 建国财政与第一次党争 · Hamilton vs Jefferson — The First Party System 1790s
// HSS-8.3 · APUSH Period 3 (Washington's Cabinet / 弹性条款) · AP US Gov (federalism, implied powers)
//
// qaTemplate: simple-binary → 9 nodes / lens (corrected shorter format)
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md A2 + Sarah Chen audit):
//   - hamilton          (perpetrator-actor) — 1755/57-1804 私生子移民→首任财长 / 国家银行 + 承债 / 反奴隶制却为蓄奴妻家管奴隶交易 / 死于决斗
//   - banneker          (lonely-mediator) — 1731-1806 自由黑人天文学家 + 测绘师 / 1791 写信质问 Jefferson 自由话语与蓄奴现实的矛盾
//   - whiskey-farmer    (receiving-end / composite, 明标合成) — c.1760-1820 宾州西部威士忌酒农 / Whiskey Rebellion 1794 被联邦军镇压的边疆小农
//
// 跨 lens micro-detail (cross-topic anchor, N6):
//   1790 承债案 (assumption) + 1791 国家银行 + 1791 消费税 + 1794 Whiskey Rebellion 是同一条因果链 —
//   Hamilton 的国家信用体系要钱 → 消费税 → 边疆酒农反抗 → 联邦军 13,000 镇压。
//   3 lens 三视角同一根链：Hamilton (设计者) / Banneker (自由话语裂缝旁观者) / 酒农 (链条末端承受者)。
//
// defaultLens = 'whiskey-farmer' (per receiving-end 优先 pattern: 边疆小农 + 链条末端 + 同代裂缝 closing)
//
// 反 Whig: 不浪漫化 Hamilton「移民英雄」(Broadway 叙事) / 不浪漫化 Jefferson「民主之父」;
//   用 Banneker 的信让两人都接受质询。才华、理想、伪善同体。
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N8 synthesis + N9 close only true)
//
// 4-agent review (pending: 7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)

export var hamiltonLens = {
  id: 'hamilton',
  icon: '💰',
  name: { cn: 'Alexander Hamilton', en: 'Alexander Hamilton' },
  role: {
    cn: '建国财政设计者 · 系统构建同体',
    en: 'architect of the new nation\'s finances',
  },
  description: {
    cn: '加勒比海一个小岛上的私生子，13 岁当账房学徒，靠一封信被人凑钱送去美洲读书。后来成为美国第一任财政部长，用承担各州债务、建国家银行、收消费税三步把一个破产的新国家焊出信用。他公开反对奴隶制，却替蓄奴的妻家管过奴隶买卖账目。1804 年死在一场决斗里，对手是当时的副总统。',
    en: 'He was born out of wedlock on a small Caribbean island, became a counting-house clerk at 13, and was sent to America to study after townsmen pooled money on the strength of one letter he wrote. He became the first U.S. Treasury Secretary and welded credit into a bankrupt new nation through three moves: assuming state debts, building a national bank, and taxing whiskey. He spoke against slavery, yet kept the accounts for his slaveholding in-laws\' slave dealings. In 1804 he died in a duel with the sitting vice president.',
  },
  storyboard: [
    {
      id: 'ham-n1',
      type: 'narrative',
      content: {
        cn: '1755 年（也有人说 1757，我自己也没把出生年份记牢）我生在加勒比海一个叫 Nevis 的小岛上。\n\n我父母没结婚——这在 18 世纪的英属西印度群岛是一辈子撕不掉的标签。岛上教堂学校不收我，因为我是「私生子」。\n\n11 岁那年父亲走了，再没回来。13 岁母亲发高烧死在我旁边的床上，我自己也烧得快死，活下来了。\n\n14 岁我在 St. Croix 岛一家货栈做账房学徒——一个人管整间货栈的进出账：糖、朗姆酒、奴隶。对，奴隶也是货栈账本上的一行数字。我每天看着船把人当货卸下来——这件事后来一直压在我心里。\n\n14 岁的我——一个没爹没妈、岛上学校都不收的账房小子。没人会赌我能活过 30 岁。',
        en: 'In 1755 (some say 1757; I never kept my own birth year straight either) I was born on a small Caribbean island called Nevis.\n\nMy parents were not married — in the 18th-century British West Indies that was a label you could never scrape off. The island church school would not take me, because I was "illegitimate."\n\nAt 11 my father left and never came back. At 13 my mother died of a high fever in the bed beside me; I was burning up too, near death, and I lived.\n\nAt 14 I clerked in a trading house on St. Croix — keeping the whole firm\'s books alone: sugar, rum, slaves. Yes, slaves were a line of numbers in that ledger too. Every day I watched ships unload people like cargo. That stayed pressed against me for the rest of my life.\n\nAt 14 I was a clerk with no father, no mother, turned away by the island school. No one would have bet I\'d live past 30.',
      },
      deliverGoal: 'N1 hook — 1755/57 Nevis 私生子 + 11 父走 13 母死 + 14 货栈账房 (糖/朗姆/奴隶) + 「奴隶是账本一行数字」埋反奴伏笔 + 没人赌他活过 30',
      engagementHook: '14 岁的我每天在账本上把人当货物记一行数字。一个从小看着这个长大的人，后来会变成什么样？你猜。',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n2',
      type: 'narrative',
      content: {
        cn: '1772 年我 17 岁。\n\n那年 8 月一场飓风扫平了 St. Croix。我写了一封信描述那场风灾——写得太好，岛上一位牧师把它登在报纸上。\n\n岛上几个有钱商人读了那封信，做了一个决定：凑钱把这个货栈小子送去北美洲读书。\n\n我一辈子的命运拐弯，就在这一封信。不是出身，不是关系——是一封写在飓风夜里的信。\n\n1773 年我到纽约，进 King\'s College（今天的哥伦比亚大学）。1775 年北美十三个殖民地跟英国开打——独立战争。我 20 岁丢下学业去当兵。\n\n打了几年仗，我当上华盛顿（George Washington，独立战争大陆军总司令）的副官——帮他写信、管文书、出主意。一个加勒比私生子，站到了未来美国第一任总统身边。\n\n17 岁靠一封信离岛——20 岁靠一场仗近权力中心。我学到一件事：在这个新世界，出身不能决定你，本事可以。这个信念后来变成我整套财政设计的底色。',
        en: 'In 1772 I was 17.\n\nThat August a hurricane flattened St. Croix. I wrote a letter describing the storm — written so well that an island minister printed it in the newspaper.\n\nSome wealthy island merchants read that letter and made a decision: pool money to send this counting-house boy to North America to study.\n\nMy whole life turned on that one letter. Not birth, not connections — a letter written on a hurricane night.\n\nIn 1773 I reached New York and entered King\'s College (today\'s Columbia University). In 1775 the thirteen colonies went to war with Britain — the Revolution. At 20 I dropped my studies to soldier.\n\nAfter some years of fighting I became aide-de-camp to George Washington, commander of the Continental Army — drafting his letters, running his papers, offering counsel. A Caribbean bastard, standing beside the man who would be America\'s first president.\n\nAt 17 a letter got me off the island. At 20 a war got me near power. I learned one thing: in this new world, birth need not decide you; ability can. That belief became the undertone of my entire financial design.',
      },
      deliverGoal: 'N2 setup — 1772 飓风信改命 + 1773 King\'s College + 1775 独立战争弃学从军 + 当上 Washington 副官 + 「出身不能决定你本事可以」内核 (后来财政设计底色)',
      engagementHook: '改变我一生的不是出身、不是关系，是一封写在飓风夜里的信。你身上有没有哪件「不起眼的小事」其实改了你的方向？',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n3',
      type: 'narrative',
      content: {
        cn: '1783 年战争打赢了——但赢来的是一个破产的国家。\n\n你要先懂一件事：13 个州为了打英国，到处借钱。向法国借、向荷兰银行借、向自己国内的商人借。仗打完，债堆成山——各州欠的 + 邦联政府欠的，加起来天文数字。新国家的国债在欧洲市场上只值面值的几分之一——因为没人相信美国还得起。\n\n1787 年费城制宪，定下一部新宪法（这一段你换个视角能从制宪会议内部看）。1789 年华盛顿当上第一任总统，把我叫去做财政部长——美国历史上第一个。我 32 岁。\n\n我接手的是什么？一个连利息都付不出的政府。海关收不上钱，没有统一货币，没有银行，没有信用。\n\n欧洲人等着看笑话：一群殖民地农民,打赢了仗,治不了国。\n\n32 岁的我坐在这个烂摊子前面，脑子里只有一个问题：一个破产的新国家，怎么从零造出「信用」这两个字？',
        en: 'In 1783 the war was won — but what we won was a bankrupt country.\n\nUnderstand this first: the 13 states had borrowed everywhere to fight Britain. From France, from Dutch banks, from their own merchants. When the fighting stopped, the debt was a mountain — what the states owed plus what the confederation government owed, an astronomical sum. American bonds traded in Europe at a fraction of face value, because no one believed America could repay.\n\nIn 1787 Philadelphia produced a new Constitution (you can see that convention from the inside through another view). In 1789 Washington became the first president and called me to be Treasury Secretary — the first in American history. I was 32.\n\nWhat did I inherit? A government that could not even pay its interest. Customs collected nothing, no common currency, no bank, no credit.\n\nEuropeans waited to laugh: a crowd of colonial farmers won a war and cannot run a state.\n\nAt 32 I sat before that wreck with one question in my head: how does a bankrupt new nation build the word "credit" out of nothing?',
      },
      deliverGoal: 'N3 setup — 1783 战胜但破产 (各州+邦联巨债, 国债欧洲市场打折) + 1787 制宪 (桥制宪 lens) + 1789 Washington 任 Hamilton 首任财长 32 岁 + 核心难题: 破产新国怎么造信用',
      engagementHook: '欧洲人等着看笑话:一群农民打赢了仗、治不了国。如果是你接手一个连利息都付不出的政府,你第一步会做什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n4',
      type: 'narrative',
      content: {
        cn: '1790 年——我交出《公共信用报告》（Report on Public Credit）——这是我一生最关键的一仗。\n\n核心是一招狠棋：联邦政府把各州欠的债全部承担过来（assumption，承债）。\n\n你想想这有多反直觉。已经还清债的州（比如弗吉尼亚）凭什么帮还没还清的州（比如马萨诸塞）擦屁股？Jefferson 那一派气炸了——他们说我这是逼诚实的人替不诚实的人买单。\n\n但我看的是另一层：债主是谁？是手里攥着各州债券的商人、银行家、有钱人。如果联邦把所有债揽过来、并且认账还钱——这些有钱人的钱包就从此跟联邦政府绑在一起。他们会盼着联邦强大——因为联邦强,他们手里的债券才值钱。\n\n这不是单纯的还债。这是用债把全国最有钱的一群人焊到新政府身上。\n\n1790 年那个夏天,我跟 Jefferson、Madison 在一顿晚饭上做了交易:你们投票支持我的承债案,我支持把首都迁到南方的波托马克河边(就是今天的华盛顿特区)。一顿饭定了美国财政的走向,也定了首都在哪。\n\n这就是我:我不靠道德说服人,我靠利益重新排线。',
        en: 'In 1790 I delivered the Report on Public Credit — the most important fight of my life.\n\nThe core was a hard move: the federal government would assume all the states\' debts.\n\nThink how counterintuitive that is. Why should a state that had already paid off its debt (say Virginia) help cover one that had not (say Massachusetts)? Jefferson\'s faction exploded — they said I was forcing honest men to pay for dishonest ones.\n\nBut I was looking one layer deeper: who were the creditors? Merchants, bankers, the wealthy, holding state bonds. If the federal government took on every debt and honored it, those wealthy purses would be bound to the federal government from then on. They would wish the union strong — because only a strong union made their bonds worth holding.\n\nThis was not simple debt repayment. It was using debt to weld the richest people in the country onto the new government.\n\nThat summer of 1790 I cut a deal with Jefferson and Madison over one dinner: you vote for my assumption plan, I back moving the capital south to the Potomac (today\'s Washington, D.C.). One dinner set the course of American finance and where the capital would sit.\n\nThat is me: I do not persuade people with morality. I rewire the incentives.',
      },
      deliverGoal: 'N4 personal peak — 1790《公共信用报告》承债案 (assumption) + 反直觉 (还清债的州帮没还的) + Jefferson 派炸锅 + 真逻辑「用债把有钱人焊到联邦身上」+ 1790 晚餐交易 (承债换首都迁波托马克) + 「我靠利益重新排线不靠道德」',
      engagementHook: '我用一顿晚饭把美国首都定在了哪、把财政走向定了下来。「靠利益重新排线」跟「靠道德说服人」——你更服哪一种?为什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n5',
      type: 'narrative',
      content: {
        cn: '1791 年——承债之后我走第二步:建国家银行(First Bank of the United States,美国第一银行)。\n\n一个由联邦特许、政府跟私人股东合资的中央银行:发行统一纸币、保管政府的钱、给商业放贷。今天每个国家都有央行,但 1791 年这是新东西,而且宪法里根本没写「联邦可以建银行」这一条。\n\nJefferson 抓住这一点反对:宪法没明说的权力,联邦就不能用(strict construction,严格解释宪法)。\n\n我反驳:宪法第一条给了国会「制定一切必要而适当的法律」的权力(necessary and proper clause,即「弹性条款」)。建银行是管理国家财政「必要而适当」的手段,所以联邦有这个隐含权力(implied powers)。这叫 loose construction(宽松解释宪法)。\n\n这一场「严格 vs 宽松」的争论,表面是要不要建一个银行,底下却是一个会吵两百年的问题:联邦政府的权力,到底只限于宪法白纸黑字写出来的,还是可以从「必要而适当」里长出来的?\n\nWashington 犹豫了,他让 Jefferson 跟我各写一份意见书。最后他签了我这边。1791 年国家银行成立。\n\n我赢了这一仗,却也亲手给美国政治劈出一道两百年的裂缝:你站联邦权,还是州权?',
        en: 'In 1791 — after assumption — I made the second move: build a national bank (the First Bank of the United States).\n\nA central bank, federally chartered, jointly owned by government and private shareholders: issuing a common paper currency, holding the government\'s money, lending to commerce. Every country has a central bank today — but in 1791 this was new, and the Constitution said nothing about the federal government building a bank.\n\nJefferson seized on exactly that to oppose it: a power the Constitution does not spell out, the federal government may not use (strict construction).\n\nI answered: Article I gives Congress the power to make "all laws necessary and proper" (the necessary and proper clause). A bank is a necessary and proper means of managing national finance, so the federal government has this implied power. That is loose construction.\n\nThis fight over "strict versus loose" — on the surface, whether to build one bank — underneath was a question that would argue for two hundred years: is federal power limited to what the Constitution states in black and white, or can it grow out of "necessary and proper"?\n\nWashington hesitated. He had Jefferson and me each write him an opinion. In the end he signed with my side. In 1791 the national bank was founded.\n\nI won that fight. But I also split a two-hundred-year crack into American politics with my own hand: are you on the side of federal power, or states\' rights?',
      },
      deliverGoal: 'N5 story — 1791 国家银行 + 宪法没写「建银行」+ strict vs loose construction + necessary and proper / implied powers (AP US Gov 考点) + Washington 让两人写意见书最后签 Hamilton + 「劈出两百年裂缝: 联邦权 vs 州权」',
      engagementHook: '宪法没写「联邦可以建银行」——我说「必要而适当」就够了,Jefferson 说没明写就不行。同一部宪法两种读法,你会站哪一边?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n6',
      type: 'narrative',
      content: {
        cn: '⭐ 现在把整条链摆出来——这一段你换两个视角能从另外两头看见同一根链。\n\n国家银行要运转、承债揽来的债要还利息——这一切都要一样东西:钱。联邦政府的钱从哪来?\n\n1791 年我推了一项消费税(excise tax):对国内蒸馏的威士忌征税。这是新政府第一个对「自己国内产品」征的税。\n\n我为什么挑威士忌?因为它好收、来源集中、而且我赌大城市的人不会太疼。但我赌错了一群人——宾夕法尼亚西部边疆的酒农。\n\n对边疆小农来说,威士忌不是奢侈品,是货币。山路烂,一车谷子运过山卖不划算,蒸成威士忌一桶就抵几车谷子,还能当钱使、当工钱发。我这一税,等于直接掏他们的口袋。\n\n1794 年夏天,宾州西部炸了——酒农抗税、烧税官的房子、约 7,000 人在 Braddock\'s Field 集结。这就是 Whiskey Rebellion(威士忌暴动)。\n\nWashington 跟我的反应是:征召约 13,000 民兵——比独立战争里好几场仗的兵都多——Washington 亲自骑马领队出征(美国历史上唯一一次在任总统亲自带兵)。\n\n这就是我那套财政系统的另一头:为了让有钱的债主相信政府收得上税、还得起债,我得让边疆的穷酒农看见,政府收不上税时会派军队来。\n\n承债、银行、消费税、13,000 大军,是同一根因果链。信用从来不是免费的。',
        en: '⭐ Now lay the whole chain out — through two other views you can see this same chain from its other ends.\n\nThe national bank had to run; the assumed debts had to be paid interest. All of it needed one thing: money. Where would the federal government\'s money come from?\n\nIn 1791 I pushed an excise tax: a tax on whiskey distilled at home. It was the new government\'s first tax on a product made inside the country.\n\nWhy whiskey? Because it was easy to collect, concentrated at the source, and I bet city people would not feel it much. But I bet wrong on one group — the frontier farmers of western Pennsylvania.\n\nTo a frontier farmer, whiskey was not a luxury; it was money. The mountain roads were bad. Hauling a wagon of grain over the ridge to sell did not pay, but distilled into whiskey one barrel was worth several wagons of grain — and it spent like cash, paid like wages. My tax reached straight into their pockets.\n\nIn the summer of 1794 western Pennsylvania blew up — farmers refused the tax, burned a tax collector\'s house, and about 7,000 gathered at Braddock\'s Field. This was the Whiskey Rebellion.\n\nWashington and I answered by calling up about 13,000 militia — more men than several battles of the Revolution — and Washington personally rode at their head (the only time in U.S. history a sitting president led troops in the field).\n\nThat is the other end of my financial system: to make wealthy creditors believe this government could collect taxes and repay debt, I had to make the poor frontier distillers see that when this government cannot collect, it sends an army.\n\nAssumption, the bank, the excise tax, 13,000 troops — one causal chain. Credit was never free.',
      },
      deliverGoal: 'N6 ⭐ anchor / cross-lens micro-detail — 整条链摆出: 银行/承债要钱 → 1791 消费税 (威士忌) → 边疆酒农 (威士忌=货币) → 1794 Whiskey Rebellion 7,000 Braddock\'s Field → 13,000 民兵 Washington 亲领 (唯一一次在任总统带兵) → 「信用从来不是免费的」/ 桥另两 lens',
      engagementHook: '为了让有钱的债主相信政府还得起债,我派 13,000 大军去对付一群穷酒农。这是「立国威」还是「拿穷人立威给富人看」?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n7',
      type: 'narrative',
      content: {
        cn: '退一步,看我这套东西到底留下了什么。\n\n我搭起来的不只是几个机构——是一个国家的金融底盘:联邦承债建立了国家信用、国家银行给了统一货币和借贷、消费税给了稳定税源。20 年内,美国国债从「没人要」变成欧洲市场上抢手的资产。一个破产的农业国,有了能借钱、能扩张、能工业化的金融骨架。\n\n这套骨架后来一直在长。19 世纪美国修铁路、办工厂、变成工业巨人——底下就是「国家信用 + 银行体系」这块地基(这一条你跑工业革命那个主题会再撞见)。今天美国国债是全世界的「无风险资产」,源头在我 1790 那份报告。\n\n但同一套骨架也定了另一件事。我把钱、银行、债券绑成了权力的核心——谁离这套系统近,谁就有钱有势。Jefferson 那派看得很清楚:这会长出一个被金融和北方城市主导的美国,而种地的、欠债的、住边疆的人,会被甩在后面。\n\n这就是美国第一次党争的真正赌注:不是「要不要一个银行」,是「这个国家以谁为中心」。是商人和城市,还是农民和土地。是强联邦,还是强州权。\n\n我赢了银行,赢了承债,赢了那场镇压。但 1800 年大选,Jefferson 赢了总统。两套关于「美国该是什么」的想象,从我这里正式分成两条路。',
        en: 'Step back and look at what this machine of mine actually left behind.\n\nI built more than a few institutions — I built a nation\'s financial floor: federal assumption established national credit, the national bank gave a common currency and lending, the excise tax gave a steady source of revenue. Within 20 years, American bonds went from "no one wanted them" to a sought-after asset in European markets. A bankrupt farming country now had the financial skeleton to borrow, expand, and industrialize.\n\nThat skeleton kept growing. In the 19th century America built railroads, raised factories, became an industrial giant — and beneath it all sat this foundation of "national credit plus a banking system" (you\'ll meet this again in the Industrial Revolution topic). Today U.S. debt is the world\'s "risk-free asset" — the source is my 1790 report.\n\nBut the same skeleton settled something else too. I bound money, banks, and bonds into the core of power — whoever sat near that system held wealth and influence. Jefferson\'s faction saw it clearly: this would grow an America led by finance and northern cities, while farmers, debtors, and frontier people got left behind.\n\nThat was the real stake of America\'s first party split: not "should there be a bank," but "whom is this country centered on." Merchants and cities, or farmers and land. A strong union, or strong states\' rights.\n\nI won the bank, won assumption, won that suppression. But in the 1800 election, Jefferson won the presidency. Two visions of "what America should be" split, from me, into two formal roads.',
      },
      deliverGoal: 'N7 zoom-out + topic connection — 留下的: 国家信用+银行+税源 = 金融底盘 (国债 20 年内变抢手资产) → 19c 铁路工厂工业巨人 (桥 industrial-revolution) + 今天国债=无风险资产 / 但同一骨架定了「以谁为中心」: 商人城市 vs 农民土地 / 强联邦 vs 州权 = 第一次党争真赌注 / 1800 Jefferson 赢总统',
      engagementHook: '第一次党争的真赌注不是「要不要一个银行」,是「这个国家以谁为中心」——商人和城市,还是农民和土地。两百年后的今天,这个问题解决了吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n8',
      type: 'synthesis',
      content: {
        cn: '我 1804 年死在一场决斗里——对手是当时的副总统 Aaron Burr——49 岁,在新泽西河边中枪,第二天死。一辈子就这么结了。\n\n该怎么评价我这个人?两边都站得住。\n\n一种说法:我是建国天才。一个加勒比私生子,白手起家,给一个破产的国家造出整套金融骨架,让它能借钱、能长大、最后成为世界强国。出身不能决定人、本事可以——我自己就是活证据。\n\n另一种说法:我把权力焊在了金钱和富人那一边。承债让债主发财、银行让金融坐大、消费税掏边疆穷人的口袋、13,000 大军替富人立威。而我这个公开说反对奴隶制的人,转头替蓄奴的妻家管奴隶买卖的账目——我也没干净。我造的不是「人人的信用」,是「有钱人的信用」。\n\n两种说法都站得住。一个人可以同时是白手起家的天才,和把系统焊向富人一边的设计者——这两件事不矛盾,是同一个我。\n\n你怎么看?想 30 秒,写下来。',
        en: 'I died in a duel in 1804 — my opponent the sitting vice president, Aaron Burr — at 49, shot on a New Jersey riverbank, dead the next day. That was the whole life.\n\nHow should you weigh this man? Both sides stand.\n\nOne view — I was a founding genius. A Caribbean bastard with nothing, who built a bankrupt nation an entire financial skeleton so it could borrow, grow, and finally become a world power. Birth need not decide a man; ability can — I was the living proof.\n\nThe other view — I welded power onto the side of money and the rich. Assumption made creditors wealthy, the bank let finance grow huge, the excise tax reached into poor frontier pockets, 13,000 troops made a show of force for the wealthy. And I, the man who said openly that he opposed slavery, turned around and kept the accounts for his slaveholding in-laws\' slave dealings — I was not clean either. What I built was not "everyone\'s credit." It was "the rich man\'s credit."\n\nBoth views stand. A person can be at once a self-made genius and the designer who welded the system toward the rich — these do not contradict; they are the same me.\n\nWhat do you think? Take thirty seconds and write it down.',
      },
      deliverGoal: 'N8 synthesis — 1804 决斗死 (Burr) 49 岁 + 一种说法 (建国天才白手起家造金融骨架) / 另一种说法 (把权力焊向金钱富人 + 反奴隶却管妻家奴隶交易) / 两边都站得住同一个人 / 想 30 秒',
      engagementHook: '一个白手起家的天才,和一个把系统焊向富人一边的设计者——可以是同一个人。你的 30 秒过去了,你怎么看?',
      expectsRealAnswer: true,
    },
    {
      id: 'ham-n9',
      type: 'synthesis',
      content: {
        cn: '走完我这一生——从 Nevis 岛上一个没人赌他活过 30 的私生子,到给一个国家造出金融骨架、又把这骨架焊向富人一边的财长——你会怎么评价这样一个开端?\n\n21 世纪有一出百老汇音乐剧把我唱成「移民英雄」,挤满了剧院。但你已经看过另一头了:1794 年那 13,000 大军踩过的边疆酒农、账本上被当成数字的奴隶——他们没有歌。被唱进歌里的人和被踩在脚下的人,是同一套系统造出来的。\n\n再想一步:今天你身边——你的城市、你的国家——有没有这样一套系统?它高效、它让一个地方强大起来,但它的好处往下流的时候,总是先到离钱最近的那群人,边上的人被甩在后面。\n\n你能叫出一个这样的系统吗?如果你站在被甩在后面那群人里,你会怎么做?',
        en: 'Walk the whole of my life — from a bastard on Nevis no one bet would live past 30, to a Treasury Secretary who built a nation a financial skeleton and then welded that skeleton toward the rich — how would you judge such a beginning?\n\nIn the 21st century a Broadway musical sings me as an "immigrant hero," and it packs the theaters. But you have already seen the other end: the frontier distillers those 13,000 troops marched over in 1794, the enslaved people counted as numbers in a ledger — they have no song. The people sung into the song and the people stepped on underfoot were made by the same system.\n\nTake one more step. Today, around you — your city, your country — is there a system like this? Efficient, lifting one place into strength, but when its benefits flow down they always reach the people nearest the money first, and the people at the edge get left behind.\n\nCan you name one such system? And if you stood among the people left behind, what would you do?',
      },
      deliverGoal: 'N9 closing meta — 评价开端 (Nevis 私生子→造骨架又焊向富人) + 百老汇「移民英雄」叙事 vs 被踩的酒农/奴隶没有歌 (反 Whig 钉死) + today you 迁移: 你身边有没有「好处先到离钱最近的人、边上人被甩」的系统? 你能叫出一个吗? 你会怎么做?',
      engagementHook: '被唱进歌里的人和被踩在脚下的人,是同一套系统造出来的。今天你身边那套「好处先到离钱最近的人」的系统,你能叫出它的名字吗?如果你站在被甩下的那群人里,你会怎么做?',
      expectsRealAnswer: true,
    },
  ],
};

export var bannekerLens = {
  id: 'banneker',
  icon: '🔭',
  name: { cn: 'Benjamin Banneker', en: 'Benjamin Banneker' },
  role: {
    cn: '自由黑人天文学家 · 孤独的质问者',
    en: 'free Black astronomer who asked the question',
  },
  description: {
    cn: '马里兰一个自由黑人农民,自学天文和数学,造过一座全木齿轮的钟,走了几十年。1791 年他参与了新首都的边界测绘,又算出整年的日月星辰位置出了一本年历。同年他把年历手抄一份寄给国务卿 Thomas Jefferson,附一封信:你写「人人生而平等」,你自己却蓄着六百个奴隶,这两件事怎么并存?他要的不是恩赐,是把这个矛盾摆到写字的人面前。',
    en: 'A free Black farmer in Maryland, self-taught in astronomy and mathematics, who built a clock of all-wooden gears that ran for decades. In 1791 he helped survey the boundary of the new capital, and he calculated a full year of sun, moon, and star positions into an almanac. That same year he hand-copied the almanac and mailed it to Secretary of State Thomas Jefferson, with a letter: you wrote "all men are created equal," yet you yourself hold six hundred enslaved people — how do these two things stand together? He asked for no favor. He set the contradiction in front of the man who wrote the words.',
  },
  storyboard: [
    {
      id: 'ban-n1',
      type: 'narrative',
      content: {
        cn: '1731 年我生在马里兰殖民地——Baltimore 郡乡下——一个自由黑人农民的家。\n\n「自由黑人」这四个字,你得先掂量掂量。1731 年的北美,黑人几乎等于奴隶。我家不一样:我外婆是从英国来的白人契约女佣,刑满后买了块地、买了一个非洲来的奴隶、把他放自由、嫁给他。我妈是他们的女儿,我爸也是个被放自由的非洲人。所以我一出生就是自由身——一个在奴隶制汪洋里的小岛。\n\n但「自由」不等于「平等」。我能拥有自己的地,但我不能投票、上不了正经学校、走在路上随时可能被人当成逃奴抓走。\n\n我小时候只上过一阵子贵格会(Quaker,基督教一个反对奴隶制的教派)办的小学校,识了字、学了点算术。剩下的全靠自己。\n\n1731 年的我——一个在马里兰乡下种烟草的自由黑人小孩。自由,但被一道看不见的线圈在外面。这道线后来成了我一生想问清楚的事。',
        en: 'In 1731 I was born in the Maryland colony — the countryside of Baltimore County — into a family of free Black farmers.\n\nWhen you hear "free Black," stop a moment. In 1731 North America, Black almost meant enslaved. My family was different: my grandmother was a white indentured servant from England who, after her term, bought land, bought an African man, freed him, and married him. My mother was their daughter; my father too was a freed African. So I was born free — a small island in an ocean of slavery.\n\nBut "free" did not mean "equal." I could own my own land, but I could not vote, could not enter a proper school, and walking the road I could be seized at any time as a runaway slave.\n\nAs a boy I had only a short stretch of schooling at a small Quaker school (a Christian group that opposed slavery), where I learned to read and a little arithmetic. The rest I taught myself.\n\nIn 1731 I was a free Black child growing tobacco in the Maryland countryside. Free, but ringed outside by an invisible line. That line became the thing I spent my life trying to ask about clearly.',
      },
      deliverGoal: 'N1 hook — 1731 马里兰自由黑人家庭 (外婆白人契约佣→买地买奴放自由嫁他, 罕见出身) + 自由≠平等 (不能投票/上学/随时被当逃奴) + Quaker 小学校识字 + 「一道看不见的线圈在外面」一生想问清的事',
      engagementHook: '我生下来是自由身,但不能投票、不能上正经学校、走路随时可能被当逃奴抓。「自由」和「平等」——你觉得是一回事吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ban-n2',
      type: 'narrative',
      content: {
        cn: '1753 年我 22 岁——做了一件让附近所有人记住我的事:我造了一座钟。\n\n起因小得可笑:有人借给我看一只怀表。我把它拆开、研究每一个齿轮怎么咬合,然后还回去。接着我用木头,一刀一刀刻出整套齿轮,装成一座能报时的座钟。\n\n你想想这有多难。1753 年的马里兰乡下没有机械课本、没有零件店、没有老师。我没见过完整的钟,只摸过一只怀表。我靠的是把那只表在脑子里拆解、再用数学算出每个木齿轮要多少齿、转多快。\n\n这座木钟走了几十年。附近的白人农民会专门跑来看「那个黑人造的会走的钟」。\n\n造钟这件事让我明白一件关于自己的事:我的脑子,跟任何人的脑子一样,能算、能造、能琢磨出别人琢磨不出的东西。当时很多白人坚信黑人天生头脑低人一等——我这座木钟,是我对那个说法的第一个反驳,不用一个字。\n\n22 岁的我——一个用脑子和小刀,反驳了「黑人天生愚笨」的人。',
        en: 'In 1753 I was 22 — and did the thing that made everyone nearby remember me: I built a clock.\n\nThe trigger was almost laughable: someone lent me a pocket watch to look at. I took it apart, studied how each gear meshed, and returned it. Then I carved a whole set of gears out of wood, cut by cut, and assembled them into a striking clock.\n\nThink how hard that was. The Maryland countryside in 1753 had no mechanics textbook, no parts shop, no teacher. I had never seen a whole clock, only handled one pocket watch. I relied on taking that watch apart in my head, then using mathematics to work out how many teeth each wooden gear needed and how fast it should turn.\n\nThat wooden clock ran for decades. White farmers nearby would come specially to see "the clock the Black man built that actually runs."\n\nBuilding it taught me something about myself: my mind, like any other mind, can calculate, can make, can work out what others cannot. Many white people then firmly believed Black people were born intellectually lower — my wooden clock was my first rebuttal to that claim, without a single word.\n\nAt 22 I was a man who, with his mind and a small knife, rebutted "Black people are born dull."',
      },
      deliverGoal: 'N2 setup — 1753 22 岁造全木齿轮钟 (借看怀表→拆解→脑中数学算齿数) + 没课本没零件没老师 + 走几十年白人专程来看 + 「我的脑子跟任何人一样」+ 不用一字反驳「黑人天生愚笨」(钉死天文学家不是被恩赐的黑人)',
      engagementHook: '我没见过整座钟,只摸过一只怀表,就用木头和小刀刻出一座走了几十年的钟。当年很多人坚信黑人天生笨——你觉得一件作品能反驳一种偏见吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ban-n3',
      type: 'narrative',
      content: {
        cn: '1788 年我 57 岁——晚年了——才真正一头扎进我这辈子最爱的东西:天文。\n\n邻居 George Ellicott(一个贵格会磨坊主家族的人)借给我望远镜、星表和几本天文书。我没上过大学,就靠这几本书,把数学一路自学到能算天体运动。\n\n我开始干一件极硬的活:计算 ephemeris(星历表)——预测整整一年里,每一天太阳、月亮、行星、亮星会出现在天上哪个位置,还有日食月食在什么时刻发生。这要海量的球面三角和反复演算,算错一个数,后面整年全错。\n\n这种表是干嘛用的?农民靠它知道什么时候播种、潮水什么时候涨、晚上怎么辨方向。它是当时最实用的科学。\n\n我算的不是给自己看——是要出版成 almanac(年历),一种当时家家户户都买的实用历书。一个没上过学的、快 60 岁的黑人农民,要出一本全是数学的科学书。\n\n这件事我心里清楚:它不只是一本历书。它是一份证据。',
        en: 'In 1788 I was 57 — late in life — before I truly threw myself into what I loved most: astronomy.\n\nMy neighbor George Ellicott (from a Quaker milling family) lent me a telescope, star tables, and several astronomy books. I had never been to college; on those few books alone I taught myself mathematics all the way up to computing the motion of the heavens.\n\nI began a brutally hard task: calculating an ephemeris — predicting, for every single day of a whole year, where the sun, moon, planets, and bright stars would appear in the sky, and at what moments eclipses would fall. It takes enormous spherical trigonometry and endless re-computation; one wrong number and the rest of the year is wrong.\n\nWhat is such a table for? Farmers used it to know when to plant, when the tides rose, how to find direction at night. It was the most practical science of the day.\n\nI was not calculating it for myself — it was to be published as an almanac, a practical yearbook nearly every household bought. An unschooled Black farmer, nearly 60, was going to publish a science book that was nothing but mathematics.\n\nI knew this in my heart: it was not only a yearbook. It was evidence.',
      },
      deliverGoal: 'N3 setup — 1788 57 岁扎进天文 (Ellicott 借望远镜星表书) + 自学数学到算天体 + ephemeris 星历表 (整年日月行星位置+日月食, 极硬球面三角) + 农民播种潮汐辨向用 + 要出版 almanac + 「不只是历书,是一份证据」',
      engagementHook: '一个没上过大学、快 60 岁的黑人农民,靠借来的几本书自学到能算整年的日月星辰。我说这本历书「不只是历书,是一份证据」——你觉得我想拿它证明什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'ban-n4',
      type: 'narrative',
      content: {
        cn: '1791 年我 60 岁——人生最关键的一年——发生了两件大事,一件让我被看见,一件让我开口。\n\n第一件:这一年开头几个月,我被请去给新首都的边界测绘当助手。新国家要在波托马克河边建一座全新的都城(就是后来的华盛顿特区)。测绘队需要一个会用天文仪器观测的人——我去了,在队里做天文观测、帮着定基准点(后来我离了队,回去赶我的年历和农活)。一个黑人,在为这个写着「人人生而平等」的国家丈量首都边界的队伍里,出了一份力。\n\n第二件:我的年历算完了,正在排印。但我没有就这么把它印出来——我决定干一件大事。\n\n我把整本年历——四十多页全是天文数据——一个字一个字、一个数一个数,亲手重新誊抄一遍。然后我提笔,给国务卿 Thomas Jefferson 写了一封信,把手抄的年历附在信里。\n\nJefferson 是谁?他是《独立宣言》的执笔人——「人人生而平等」这六个字就是他写的。他也是当时美国最有名的「黑人天生低人一等」论的散布者之一——他在自己的书里白纸黑字写过这话。\n\n60 岁的我,坐在油灯下抄完最后一页,把信封好。我要做的事是:把一份黑人的数学证据,和一个最尖锐的问题,一起送到那个写下「平等」却蓄着奴隶的人手里。',
        en: 'In 1791 I was 60 — the most decisive year of my life — and two large things happened, one that let me be seen, one that let me speak.\n\nThe first: for the opening months of that year I was asked to assist in surveying the boundary of the new capital. The new nation would build a brand-new capital city on the Potomac (what became Washington, D.C.). The survey team needed someone who could make astronomical observations with the instruments — I went, working in the team on observations and helping fix the base points (I later left the team to get back to my almanac and my farm). A Black man, lending a hand in the team that measured the boundary of the capital of a nation that wrote "all men are created equal."\n\nThe second: my almanac was finished and at the printer. But I did not simply let it print — I decided on something larger.\n\nI took the whole almanac — over forty pages of nothing but astronomical data — and copied it again by hand, every word, every number. Then I took up my pen and wrote a letter to Secretary of State Thomas Jefferson, enclosing the hand-copied almanac.\n\nWho was Jefferson? He was the author of the Declaration of Independence — the six words "all men are created equal" were his. He was also one of the most famous spreaders of the claim that Black people were born inferior — he had written it plainly in his own book.\n\nAt 60, by lamplight, I copied the last page and sealed the letter. What I meant to do was this: send a Black man\'s mathematical evidence, and the sharpest possible question, into the hands of the man who wrote "equality" yet held slaves.',
      },
      deliverGoal: 'N4 personal peak — 1791 60 岁两件事: ① 年初几个月当助手参与新首都 (波托马克/华盛顿特区) 边界测绘 (在队里做天文观测帮定基准点/后离队赶年历农活/黑人在丈量「平等」之国首都的队伍里出一份力) ② 亲手重抄整本年历寄给 Jefferson + 附信 / Jefferson = 《独立宣言》执笔「人人生而平等」+ 又是「黑人天生低劣」论散布者 (书里写过) / 「把数学证据和最尖锐的问题送到那个人手里」',
      engagementHook: '我在测绘队里出过力,帮一个写着「人人生而平等」的国家丈量它的首都边界——而我自己不能投票。这种「为一个不算你平等的国家出力」的滋味,你能想象吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ban-n5',
      type: 'narrative',
      content: {
        cn: '1791 年 8 月 19 日——我的信寄出去了。我得让你听见我在信里说了什么。\n\n我没有骂他,也没有求他。我做的是把他自己的话,摆回他自己面前。\n\n我先提醒他:你们当年在英国统治下,把自己的处境叫作「奴役」,你们为了挣脱它打了一场仗,还写下「人人生而平等」「拥有自由的不可剥夺的权利」。\n\n然后我问:你们一边说这些话,一边把我的同胞按在比你们当年抱怨的、还要重得多的奴役底下。你心里清楚上帝待万人如一——你怎么能一边相信这个,一边还把人当作财产扣着?\n\n我话说得很客气,但底下那把刀很硬:你不是不懂平等——你是写下了平等、自己却不照做。\n\n我随信附上我亲手抄的年历——意思不用挑明:这本全是数学的书,出自一个你说「天生低劣」的种族之手。证据就在你手上,你自己掂量。\n\n寄出这封信,我不抱什么幻想。我知道一个国务卿不会因为一封信就放掉他的奴隶。但我要的不是他回不回——我要的是:这个矛盾,从此被人当面、白纸黑字地,摆到了写它的人桌上。',
        en: 'On August 19, 1791 — my letter went out. You need to hear what I said inside it.\n\nI did not curse him, and I did not beg him. What I did was set his own words back in front of his own face.\n\nFirst I reminded him: under British rule you called your own situation "slavery," you fought a war to break free of it, and you wrote "all men are created equal" and "an unalienable right to liberty."\n\nThen I asked: while you say these things, you hold my people under a slavery far heavier than the one you once complained of. You know in your heart that God made all people alike — how can you believe that and at the same time keep human beings as property?\n\nI spoke very politely, but the blade underneath was hard: it is not that you do not understand equality — you wrote equality down and then did not live by it.\n\nI enclosed the almanac I had copied by hand — the meaning needed no spelling out: this book of pure mathematics came from the hands of a race you called "born inferior." The evidence is in your hands; weigh it yourself.\n\nMailing that letter, I held no illusions. I knew a Secretary of State would not free his slaves over one letter. But what I wanted was not his reply — what I wanted was this: that the contradiction, from now on, was set in black and white, to his face, on the desk of the man who wrote it.',
      },
      deliverGoal: 'N5 story — 1791.8.19 信寄出 + 信内容 (不骂不求, 把他自己的话摆回面前): 你们把自己处境叫「奴役」打仗挣脱写「人人生而平等」, 却把我同胞按在更重的奴役下 / 客气但刀硬「你写下平等自己却不照做」+ 附手抄年历=证据 / 「我要的不是回不回, 是矛盾被当面摆到桌上」',
      engagementHook: '我没骂他、没求他——我只是把他自己写的「人人生而平等」摆回他面前。如果你要质问一个有权力的人,你会选「指着鼻子骂」还是「用他自己的话」?',
      expectsRealAnswer: false,
    },
    {
      id: 'ban-n6',
      type: 'narrative',
      content: {
        cn: '⭐ Jefferson 回信了——这一段,你要把我放进一整条同时代的裂缝里看。\n\n1791 年 8 月 30 日,他回了一封短信。他谢我寄来年历,说他「比谁都更希望」看到证据证明黑人的才智不输白人,还说他把我的年历转寄给了巴黎的一位科学家朋友(Condorcet,法国数学家),好让全世界看见。\n\n听起来很客气。但你细看:他全程没碰我那把刀。我问的是「你写平等却蓄奴,怎么并存」——他一个字没回。他只夸了我的年历,把它当成一件「有意思的标本」,绕开了那个真问题。\n\n更刺人的是后来:Jefferson 在私人信件里说,他怀疑我的年历是白人邻居帮我算的——他宁可怀疑,也不肯相信一个黑人真能算天。\n\n这就是同代的裂缝,而且不止我一个人站在裂缝边上。同一个 1791 年的美国:Hamilton 那套财政系统正在把权力焊给富人和城市,边疆酒农正在被消费税掏空口袋,而我们这些黑人——自由的、被奴役的——被整个「人人生而平等」的国家,留在了那句话的外面。\n\n承债、银行、消费税、自由的话语——这些 1790 年代的大事,听起来各管各的。但它们底下是同一个问题:这个新国家,到底把谁算进「人人」里。',
        en: '⭐ Jefferson replied — and here you must set me inside a whole fault line of my own time.\n\nOn August 30, 1791, he sent a short reply. He thanked me for the almanac, said he wished "more than anyone" to see proof that Black minds were no less than white, and said he had forwarded my almanac to a scientist friend in Paris (Condorcet, a French mathematician) so the world might see.\n\nIt sounds courteous. But look closely: he never once touched my blade. I had asked, "you wrote equality yet hold slaves — how do these stand together?" He answered not a word of it. He only praised the almanac, treated it as an "interesting specimen," and went around the real question.\n\nMore cutting still came later: in a private letter Jefferson said he suspected a white neighbor had done the calculations for me — he would rather doubt than believe a Black man could truly compute the heavens.\n\nThis is the fault line of my time, and I was not the only one standing at its edge. The same America of 1791: Hamilton\'s financial system was welding power to the rich and the cities, frontier distillers were being emptied of their pockets by the excise tax, and we Black people — free and enslaved — were left outside the words of a whole nation built on "all men are created equal."\n\nAssumption, the bank, the excise tax, the language of liberty — these great events of the 1790s sound like separate things. But beneath them is one question: whom does this new nation count inside "all men"?',
      },
      deliverGoal: 'N6 ⭐ anchor / cross-lens micro-detail — Jefferson 1791.8.30 回信 (谢年历+转寄 Condorcet) 但绕开真问题 (没碰「写平等却蓄奴」) + 私信怀疑白人邻居代算 / 同代裂缝: 同一 1791 — Hamilton 焊权给富人城市 / 酒农被消费税掏空 / 黑人被留在「人人」之外 → 同一个问题「谁算进人人里」/ 桥另两 lens',
      engagementHook: '我问「你写平等却蓄奴怎么并存」,他一个字没回,只夸我的年历是「有意思的标本」。绕开真问题的客气,你遇到过吗?它比直接拒绝更伤,还是更轻?',
      expectsRealAnswer: false,
    },
    {
      id: 'ban-n7',
      type: 'narrative',
      content: {
        cn: '退一步,看我那封信到底动了什么。\n\n短期看,它没救出一个奴隶,也没让 Jefferson 改一个字。但有件事我没料到:有个费城的出版商把我的信和 Jefferson 的回信印成一本小册子,到处传。一个自由黑人,用最有礼貌的语气,把美国最有名的开国者将了一军——这本小册子在刚冒头的废奴圈子里传开了。我的信,成了一份武器。\n\n中长期看,我这封信开了一种打法。它不靠暴力、不靠哀求——它靠把对方自己的原则,摆回对方面前,逼他要么照做、要么承认自己虚伪。后来一代又一代黑人抗争者用的就是这一招:你们说「人人生而平等」?好,那就把我也算进「人人」里。\n\n这条线一直往后长。半个多世纪后逃奴出身的废奴演说家、再后来 20 世纪的民权运动——核心打法都是同一个:不是要一套新原则,是逼这个国家兑现它自己早就写下的原则(这条线你跑奴隶制与废奴、跑民权运动那些主题会一路撞见)。\n\n这就是我留下的东西:我没改变 Jefferson。但我把一个问题钉进了美国的账本——而且让它再也擦不掉:你写下的「人人」,到底算不算我们?',
        en: 'Step back and look at what my letter actually moved.\n\nIn the short term it freed no slave and changed not a word of Jefferson\'s. But one thing I did not foresee: a Philadelphia publisher printed my letter and Jefferson\'s reply as a pamphlet and spread it. A free Black man, in the most courteous tone, had checkmated America\'s most famous founder — and the pamphlet ran through the nascent abolitionist circles. My letter became a weapon.\n\nIn the longer term, my letter opened a way of fighting. Not by violence, not by pleading — but by setting the other side\'s own principle back in front of them, forcing them to either live by it or admit their own hypocrisy. Generation after generation of Black fighters would use exactly this move: you say "all men are created equal"? Good — then count me inside "all men."\n\nThat line kept growing. Half a century later a runaway-turned-abolitionist orator; later still the 20th-century civil rights movement — the core move was the same: not to demand a new principle, but to force this country to honor the principle it had already written (you\'ll meet this line again in the slavery-and-abolition and civil-rights topics).\n\nThat is what I left behind. I did not change Jefferson. But I drove a question into America\'s ledger — and made it impossible to erase: the "all men" you wrote down — does it count us, or not?',
      },
      deliverGoal: 'N7 zoom-out + topic connection — 短期: 没救奴隶但费城出版商印成小册子传遍废奴圈 = 武器 / 中长期: 开了一种打法 (用对方自己的原则逼他兑现, 不要新原则要兑现旧原则) → 半世纪后逃奴废奴演说家 + 20c 民权运动同一打法 (桥 slavery-abolition + civil-rights) / 「把一个擦不掉的问题钉进美国账本: 人人算不算我们」',
      engagementHook: '我的打法不是要一套新原则,是逼这个国家兑现它自己早写下的原则——「你说人人平等?那就把我也算进人人里」。两百年后,你觉得这个国家把每个人都算进去了吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ban-n8',
      type: 'synthesis',
      content: {
        cn: '我 1806 年死,75 岁,死在我自己的农场上。下葬那天,我那座走了几十年的木钟,还有我大半生的论文笔记,在一场烧掉我木屋的大火里全没了。我留下来的,主要是那几本年历和那封信。\n\n该怎么看我这一辈子?两边都站得住。\n\n一种说法:我赢了。我用一座木钟、几本年历、一封信,在一个坚信「黑人天生低劣」的时代,留下了一个谁也驳不倒的反证。我把一个问题钉进了美国的良心,两百年都没拔出来。一个自学的黑人农民,做成了这件事。\n\n另一种说法:我输了。Jefferson 没放一个奴隶,他绕开了我的问题,私下还怀疑我是冒名顶替。我活着的时候,没看见任何一个我同胞因为我的信而自由。我的房子和大半生的心血,最后烧成了灰。一个人单枪匹马对一整套制度,这套制度纹丝没动。\n\n两种说法都站得住。一个人可以同时赢了道理、输了当下——把一颗种子埋进一片自己看不到它发芽的土里。\n\n你怎么看?想 30 秒,写下来。',
        en: 'I died in 1806, at 75, on my own farm. On the day I was buried, the wooden clock that had run for decades, and the papers and notebooks of most of my life, were all lost in a fire that burned down my cabin. What I left behind is mainly those few almanacs and that one letter.\n\nHow should you see this life? Both sides stand.\n\nOne view — I won. With a wooden clock, a few almanacs, and one letter, in an age that firmly believed "Black people are born inferior," I left a counter-proof no one could refute. I drove a question into America\'s conscience that two hundred years has not pulled out. A self-taught Black farmer did that.\n\nThe other view — I lost. Jefferson freed not one slave, went around my question, and privately suspected I was an impostor. In my lifetime I saw not one of my people made free because of my letter. My house and most of my life\'s work burned to ash. One man, alone, against a whole system — and the system did not move an inch.\n\nBoth views stand. A person can win the argument and lose the present moment at once — bury a seed in soil where he will never see it sprout.\n\nWhat do you think? Take thirty seconds and write it down.',
      },
      deliverGoal: 'N8 synthesis — 1806 死 75 岁 + 下葬日大火烧毁木钟和大半生笔记 / 一种说法 (赢了: 木钟年历信留下驳不倒的反证, 把问题钉进美国良心 200 年) / 另一种说法 (输了: Jefferson 没放奴隶绕开问题私下怀疑, 活着没见同胞因信自由, 制度纹丝不动) / 两边都站得住同一个人 / 想 30 秒',
      engagementHook: '我可能同时赢了道理、输了当下——把一颗种子埋进了我自己看不到它发芽的土里。你的 30 秒过去了,你觉得我是赢了还是输了?',
      expectsRealAnswer: true,
    },
    {
      id: 'ban-n9',
      type: 'synthesis',
      content: {
        cn: '走完我这一生——从马里兰乡下一个被一道看不见的线圈在外面的自由黑人小孩,到一个把「你写下的平等算不算我」这个问题钉进国家良心、却看不到自己赢的人——你会怎么评价这样一个开端?\n\n我没有军队、没有财政部、没有票。我手里只有一座木钟、一本数学书、一封信。但我做的事跟 Hamilton 在另一头做的事一样硬:他用钱重排了一个国家的权力,我用一个问题重排了一个国家的良心。我们都没活着看到结果。\n\n再想一步:今天你身边——你的学校、你的城市、你的国家——是不是也挂着一些「人人都该如何如何」的漂亮原则?平等、公正、机会人人有份。它们写在墙上、写在文件里。但你睁眼看一看:这些原则,有没有把某一群人,悄悄留在了「人人」的外面?\n\n那群人是谁?如果你看见了这条裂缝,你会像我一样,把那个问题摆到写规则的人面前吗?你会怎么问?',
        en: 'Walk the whole of my life — from a free Black child in the Maryland countryside, ringed outside by an invisible line, to a man who drove the question "does the equality you wrote down count me?" into a nation\'s conscience, yet never saw himself win — how would you judge such a beginning?\n\nI had no army, no treasury, no vote. All I held was a wooden clock, a book of mathematics, and a letter. But what I did was as hard as what Hamilton did at the other end: he rewired a nation\'s power with money; I rewired a nation\'s conscience with a question. Neither of us lived to see the result.\n\nTake one more step. Today, around you — your school, your city, your country — are there beautiful principles too, "everyone deserves such and such"? Equality, fairness, opportunity for all. They are written on the wall, written in the documents. But open your eyes and look: have these principles quietly left some group of people outside of "everyone"?\n\nWho is that group? If you see this fault line, would you do as I did and set the question in front of the people who write the rules? How would you ask it?',
      },
      deliverGoal: 'N9 closing meta — 评价开端 (被线圈在外的自由黑人小孩→把问题钉进国家良心却看不到自己赢) + 与 Hamilton 对位 (他用钱重排权力, 我用问题重排良心, 都没活着看结果) (反 Whig: 不浪漫化建国凯歌) + today you 迁移: 你身边的漂亮原则有没有悄悄把某群人留在「人人」之外? 那群人是谁? 你会像我一样把问题摆到写规则的人面前吗? 怎么问?',
      engagementHook: '他用钱重排了一个国家的权力,我用一个问题重排了一个国家的良心——我们都没活着看到结果。今天你身边那些写在墙上的漂亮原则,有没有悄悄把某群人留在「人人」之外?那群人是谁?',
      expectsRealAnswer: true,
    },
  ],
};

export var whiskeyFarmerLens = {
  id: 'whiskey-farmer',
  icon: '🌾',
  name: { cn: '宾州西部的威士忌酒农(合成角色)', en: 'A western Pennsylvania whiskey farmer (composite)' },
  role: {
    cn: '边疆小农 · 站在政策链条的末端',
    en: 'a frontier farmer at the end of the policy chain',
  },
  description: {
    cn: '这是一个合成角色,代表 1794 年宾夕法尼亚西部成千上万被卷进 Whiskey Rebellion(威士忌暴动)的边疆酒农,具体的名字和家是叙事性补充,但他经历的每一件事都来自真实的历史记录。他在阿勒格尼山以西种谷子,谷子运不出山,只好蒸成威士忌——那是他的钱、他的工钱、他的命脉。新政府收了他的威士忌税,他抗,然后联邦的一万三千大军开过来了。这一遍你站在政策链条最末端的人这里看 1790 年代——不是从写报告的人那边看,是从被报告砸到的人这边看。',
    en: 'This is a composite figure standing for the thousands of frontier distillers in western Pennsylvania swept into the Whiskey Rebellion of 1794. His specific name and home are narrative additions, but everything he lives through comes from the real historical record. He grows grain west of the Allegheny Mountains; the grain cannot be hauled out over the mountains, so he distills it into whiskey — his money, his wages, his lifeline. The new government taxed his whiskey, he resisted, and then the federal government\'s thirteen thousand troops came over the ridge. This time you stand where the person at the very end of the policy chain stands, and you look at the 1790s — not from the side that wrote the report, but from the side the report landed on.',
  },
  storyboard: [
    {
      id: 'whf-n1',
      type: 'narrative',
      content: {
        cn: '(我是一个合成角色——名字和家是叙事性补充,但我经历的每一件事都来自真实历史记录。)\n\n我叫 Tom——你就这么叫我。1790 年代,我住在宾夕法尼亚西部,阿勒格尼山(Allegheny Mountains)以西的一片林子边上。\n\n你得先弄明白「西部」在那时候是什么意思。今天你说宾州西部很近,但 1790 年代,我跟东边费城那些有钱人之间,隔着一整道山。没有像样的路,只有泥泞的山道。从我这儿运东西去费城卖,要走两个多礼拜,翻好几座岭。\n\n我家有块地,种黑麦、玉米。问题是:谷子运不出去。一匹马一次驮不了几袋谷子,翻山的工夫和草料钱,比谷子本身还贵。一车谷子辛辛苦苦运到东边,卖的钱还不够路上花的。\n\n1790 年代的我——一个在山那边种地的边疆农民。我有粮食,但我穷,因为我离市场太远。这道山,后来决定了我的整个命运。',
        en: '(I am a composite figure — my name and home are narrative additions, but everything I live through comes from the real historical record.)\n\nMy name is Tom — just call me that. In the 1790s I lived in western Pennsylvania, at the edge of a forest west of the Allegheny Mountains.\n\nYou have to understand first what "the west" meant back then. Today you\'d say western Pennsylvania is close, but in the 1790s, between me and the wealthy men in Philadelphia to the east lay a whole range of mountains. No real roads, only muddy mountain tracks. To haul goods from here to sell in Philadelphia took more than two weeks, over several ridges.\n\nMy family had a piece of land, growing rye and corn. The trouble was: the grain couldn\'t get out. A horse could carry only a few sacks at a time, and the time and feed to cross the mountains cost more than the grain itself. A wagon of grain hauled all the way east sold for less than the trip had cost.\n\nIn the 1790s I was a frontier farmer working land on the far side of the mountains. I had food, but I was poor, because I was too far from any market. That range of mountains would, in the end, decide my whole fate.',
      },
      deliverGoal: 'N1 hook — composite 显式声明 (名字家是叙事补充, 经历来自真实记录) + Tom 宾州西部 Allegheny 以西 + 「西部」=隔一整道山没路 + 谷子运不出去 (运费比谷子贵) + 「有粮但穷因为离市场太远」+ 这道山决定命运',
      engagementHook: '我有满仓的粮食,却很穷——因为我和市场之间隔着一整道翻不过去的山。「明明有东西、却换不成钱」,这种困境你能想象吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'whf-n2',
      type: 'narrative',
      content: {
        cn: '那道山解不开的难题,我们边疆人早就有了办法:把谷子蒸成威士忌。\n\n道理很简单。一整车黑麦翻不过山,但把这车黑麦蒸成酒,装成一两桶威士忌,一匹马就驮走了——而且越放越值钱,不会烂。等于把笨重的谷子,浓缩成了能翻山的财富。\n\n但威士忌对我们的意义,远不止「方便运」。\n\n在我们这种边疆地方,现钱少得可怜。东边的硬币流不到山这边来。所以威士忌成了我们的钱。我请邻居帮我收割,工钱用威士忌付。我去铁匠那儿打一把锄头,拿威士忌换。教堂的牧师、过路的商人,大家都收威士忌。它就是我们这片地方的通货。\n\n几乎家家都有个小蒸馏锅。这不是「酗酒」,也不是什么大买卖——这是我们在一个没有现钱、没有道路的地方,自己造出来的一套经济。\n\n1790 年代的我——种谷子的农民,也是个酿酒的。威士忌是我的劳力变成的钱。你记住这一点:对东边城里人,威士忌是杯中物;对我,它是我全部的现金。',
        en: 'That unsolvable mountain problem — we frontier people had long since found the answer: distill the grain into whiskey.\n\nThe logic is simple. A whole wagon of rye can\'t cross the mountains, but distill that wagon into liquor, pack it into a barrel or two, and one horse carries it off — and it only grows more valuable with age, it won\'t rot. You\'ve concentrated heavy grain into wealth that can cross a ridge.\n\nBut whiskey meant far more to us than "easy to haul."\n\nIn a frontier place like ours, hard cash was painfully scarce. The coins of the east never flowed over to our side of the mountains. So whiskey became our money. I\'d hire a neighbor to help with the harvest and pay the wages in whiskey. I\'d go to the blacksmith for a hoe and trade whiskey for it. The church minister, passing merchants — everyone took whiskey. It was the currency of our whole region.\n\nNearly every household had a small still. This was not "drunkenness," nor some great business — it was an economy we built for ourselves in a place with no cash and no roads.\n\nIn the 1790s I was a grain farmer and also a distiller. Whiskey was my labor turned into money. Remember this: to the city people of the east, whiskey was a drink; to me, it was all of my cash.',
      },
      deliverGoal: 'N2 setup — 威士忌解山的难题 (谷子蒸酒一匹马驮走+越放越值钱) + 远不止方便运: 边疆没现钱→威士忌=货币 (付工钱/换锄头/牧师商人都收) + 家家有蒸馏锅不是酗酒是自造经济 + 「对城里人是杯中物对我是全部现金」(钉死链条末端视角)',
      engagementHook: '在我们这片没有现钱的地方,威士忌就是钱——付工钱、换工具、买东西全靠它。一样东西在一个地方是「酒」、在另一个地方是「钱」——你身边有没有这种「换个地方意义就变了」的东西?',
      expectsRealAnswer: false,
    },
    {
      id: 'whf-n3',
      type: 'narrative',
      content: {
        cn: '1791 年,一个坏消息翻过山,传到我们这儿:新政府要对威士忌收税了。\n\n你得先懂这税从哪来。新国家打完独立战争,欠了一屁股债。东边那位财政部长(Hamilton,这个人你换个视角能从他那头看)想了个办法还债:对国内蒸的威士忌征税(消费税)。这是新政府第一次对自己国内的东西收税。\n\n这税落到我头上,是什么感觉?\n\n第一,它收的不是我喝的酒,是我酿出来当钱用的酒——等于直接对我的现金征税。东边城里有钱人,这税对他们是九牛一毛;对我,这是从我本就不多的活路里硬抠一块。\n\n第二,更气人的是规矩。税要用硬币交——可我们山这边压根没有硬币!这税摆明了是按东边的世界设计的,根本没把我们这种没现钱的地方算进去。\n\n第三,谁犯了这税,要被传去几百里外东边的联邦法庭受审——丢下农活、翻山、走好几个礼拜。这一趟下来,人就毁了。\n\n1791 年的我,坐在自家门槛上,心里那股火慢慢烧起来:我们当年跟英国打,不就是为了反抗「凭什么远方一个我们够不着的政府,要从我们口袋里掏钱」吗?现在我们自己的政府,在干一模一样的事。',
        en: 'In 1791, bad news came over the mountains to us: the new government was going to tax whiskey.\n\nFirst you need to know where the tax came from. The new nation, having fought its war of independence, was buried in debt. The Treasury Secretary in the east (Hamilton — you can see him from his own end through another view) found a way to pay it down: tax whiskey distilled at home (an excise tax). It was the first time the new government taxed something made inside the country.\n\nWhat did that tax feel like, landing on me?\n\nFirst, it taxed not the liquor I drank but the liquor I distilled to use as money — a tax straight on my cash. To the wealthy of the eastern cities the tax was a trifle; to me it was prying a piece out of a living that was already thin.\n\nSecond, and more galling, were the rules. The tax had to be paid in coin — and on our side of the mountains there was no coin at all! The tax was plainly designed for the eastern world, and never counted a cashless place like ours in.\n\nThird, anyone who broke the tax law had to be hauled to a federal court hundreds of miles east to stand trial — drop the farm work, cross the mountains, travel for weeks. A trip like that ruined a man.\n\nIn 1791 I sat on my own doorstep, the anger slowly catching fire: hadn\'t we fought Britain precisely to resist "why should a faraway government we can\'t reach pry money from our pockets"? Now our own government was doing the very same thing.',
      },
      deliverGoal: 'N3 setup — 1791 消费税坏消息翻过山 + 税从哪来 (新国欠债, Hamilton 想办法还债→威士忌税, 桥 Hamilton lens) + 落到 Tom 头上三重不公: ① 税的是当钱用的酒=直接征现金 (城里人无感) ② 要硬币交但山这边没硬币 ③ 犯税要押几百里外东边联邦法庭 / 「跟英国打不就是反抗远方政府掏我们口袋, 现在自己政府在干一样的事」',
      engagementHook: '这税要用硬币交——可我们山这边根本没有硬币。一条规矩,明摆着没把我们这种人算进去。你被一条「根本没考虑你处境」的规矩坑过吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'whf-n4',
      type: 'narrative',
      content: {
        cn: '1794 年夏天——憋了三年的火,烧起来了。\n\n这三年,我们不是没试过别的办法。我们开会、写请愿书、托人捎话去东边,说这税收不上、这规矩不公。没人听。税官照样翻山过来,挨家挨户登记我们的蒸馏锅、催我们交钱。\n\n那年 7 月,事情爆了。一个税官带人来抓欠税的邻居,双方动了枪,有人死了。这下整片山都炸了。我们这些酒农,你拉我、我拉你,聚到一处叫 Braddock\'s Field 的地方——大概七千人。\n\n七千人是什么概念?那是把我们整片边疆能拿枪的男人几乎都叫来了。我也在里头。我们里面有人喊着要打去东边、有人只想吓唬一下税官、有人甚至说要让西部从这个国家独立出去。说实话,我们自己心里也乱:我们到底是想要个公道,还是要造反?\n\n但有一件事我们是齐心的:我们不是暴民。我们大多数人,十几年前刚刚为了「反抗不公的税」跟英国干过一场。我们以为我们做的,跟当年的「自由之子」是一回事。\n\n1794 年夏天,我站在七千人里,手里攥着枪。我以为我在为我们这种人争一个活路。我没料到——东边那位财长,正等着我们这么干。',
        en: 'The summer of 1794 — three years of pent-up fire caught at last.\n\nThose three years, it wasn\'t that we hadn\'t tried other ways. We held meetings, wrote petitions, sent word east that the tax couldn\'t be collected and the rules were unjust. No one listened. The tax men kept crossing the mountains, going house to house registering our stills, pressing us to pay.\n\nThat July it broke open. A tax officer brought men to seize a neighbor who owed the tax; guns were drawn, someone died. The whole mountain country erupted. We distillers pulled one another along to a place called Braddock\'s Field — about seven thousand of us.\n\nWhat does seven thousand mean? It meant nearly every man on our frontier who could carry a gun was called in. I was among them. Some shouted to march east, some only wanted to scare the tax men, some even said the west should break away from this country and go independent. Honestly, we were confused in our own hearts too: did we want justice, or were we rebelling?\n\nBut on one thing we were of one mind: we were not a mob. Most of us had fought Britain only a dozen years before, precisely over "resisting an unjust tax." We thought what we were doing was the same thing the Sons of Liberty had done.\n\nIn the summer of 1794 I stood among seven thousand, a gun in my hands. I thought I was fighting for a living for people like us. I did not foresee — the Treasury Secretary in the east was waiting for exactly this.',
      },
      deliverGoal: 'N4 personal peak — 1794 夏火烧起来 + 三年先试和平 (开会请愿捎话, 没人听, 税官照样翻山登记蒸馏锅) + 7 月税官抓欠税邻居动枪死人→整片山炸 + 7,000 人聚 Braddock\'s Field (几乎全边疆能拿枪的男人) + 内部乱 (打东边/吓税官/西部独立, 要公道还是造反) + 「我们不是暴民, 以为跟自由之子一回事」+ 「没料到东边财长正等着我们这么干」',
      engagementHook: '我们大多数人十几年前刚为了「反抗不公的税」跟英国打过——我们以为这次做的是一回事。同样是抗税,凭什么一次叫「自由之子」、一次叫「叛乱」?',
      expectsRealAnswer: false,
    },
    {
      id: 'whf-n5',
      type: 'narrative',
      content: {
        cn: '我们以为会来谈判的。结果翻过山来的,是一支军队。\n\n1794 年秋天,总统华盛顿(George Washington)和那位财长 Hamilton,征召了大约一万三千民兵——一万三千。你掂量掂量这个数:这比独立战争里好几场仗的兵都多。为了对付我们这些拿着枪的农民,他们出动了一支比当年打英国还大的军队。\n\n更狠的是,华盛顿亲自骑马领着这支军队出征——美国历史上,在任总统亲自带兵,就这一回。\n\n大军压过山来的时候,我们这七千人,散了。没有打。我们里面没几个真想跟正规军开战的;一看这阵仗,人就回家了。带头的几个跑了。\n\n联邦军进了我们的村子,挨家搜。他们抓了一些人,大冷天里把抓来的人押着,往东边几百里外的费城走,在街上游行示众。最后约二十个人被押去受审,两个被判了叛国罪——后来华盛顿把他们赦免了。\n\n你看明白这是怎么回事了吗?真正的目的从来不是抓我们这几个人,也不是真要打一仗。是要让所有人看见:这个新政府,要是收不上税,它会派一万三千大军翻过山来。\n\n我没被抓。我回了我的农场。但我心里清楚:有些东西,变了。',
        en: 'We thought negotiators would come. What came over the mountains was an army.\n\nIn the autumn of 1794, President George Washington and the Treasury Secretary Hamilton called up about thirteen thousand militia — thirteen thousand. Weigh that number: more men than several battles of the Revolution. To deal with us, gun-carrying farmers, they fielded an army larger than the one that had fought Britain.\n\nHarder still: Washington personally rode at the head of that army — in all of American history, the only time a sitting president led troops in the field.\n\nWhen the army pressed over the mountains, we seven thousand scattered. There was no battle. Few of us had ever truly wanted to fight regular troops; one look at that force and men went home. The ringleaders fled.\n\nThe federal troops entered our villages and searched house to house. They arrested some men, marched the captives in the bitter cold hundreds of miles east to Philadelphia, paraded them through the streets. In the end about twenty were hauled off to trial, two were convicted of treason — and Washington later pardoned them.\n\nDo you see now what this was? The real aim was never to catch the few of us, nor truly to fight a battle. It was to make everyone see: if this new government cannot collect its tax, it will send thirteen thousand troops over the mountains.\n\nI was not arrested. I went back to my farm. But I knew in my heart: something had changed.',
      },
      deliverGoal: 'N5 story — 以为来谈判结果来军队 + 1794 秋 Washington+Hamilton 征 ~13,000 民兵 (比独立战争好几场仗多) + Washington 亲自带兵 (唯一一次在任总统领兵) + 大军压来 7,000 人散了无交战 (没人真想跟正规军打, 带头跑) + 联邦军搜村抓人押费城游行 + ~20 受审 2 判叛国后被赦 + 「真正目的是立威给所有人看: 收不上税就派一万三千大军翻过山」',
      engagementHook: '为了对付一群拿枪的农民,他们派来一支比当年打英国还大的军队——但真正的目的不是抓我们,是立威给所有人看。用大炮打蚊子,有时候打的根本不是蚊子。你看懂这一招了吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'whf-n6',
      type: 'narrative',
      content: {
        cn: '⭐ 现在我让你看清楚:压到我身上这一万三千大军,跟一根更长的链子,是连在一起的——这一遍你换两个视角能从这根链子的另两头看见同一件事。\n\n往上捋:新政府欠债→财长 Hamilton 要还债,得有稳定的钱→他想了承担各州债务、建国家银行、收消费税三步→银行要运转、债主要拿利息,都要钱→威士忌税就是那笔钱→而我,就是站在这根链子最末端的人。\n\n东边写报告的人,要让有钱的债主相信「这个政府收得上税、还得起债」。怎么证明?最直接的办法,就是当一群穷酒农抗税的时候,派军队过来,让所有人看见:这个政府动得了真格。\n\n所以这一万三千大军,表面是来抓我们,骨子里是演给那些有钱债主看的——你们的钱稳了,这政府罩得住。\n\n而同一个 1790 年代,还有一群人比我更彻底地站在「人人」的外面:被当成财产的奴隶、写信质问开国者却被绕开的自由黑人(这一头你换个视角能听见)。我至少还能拿起枪、还能算作「人民」的一部分;他们连这个都没有。\n\n承债、银行、消费税、压向我的大军、被排在「人人」外的黑人——听起来是五件不相干的事。其实是一件:这个新国家在搭它的骨架,而搭骨架的代价,总是先压到离权力最远的人身上。',
        en: '⭐ Now let me show you clearly: the thirteen thousand troops bearing down on me are joined to a longer chain — and through two other views, this time, you can see the same thing from the chain\'s other ends.\n\nTrace it upward: the new government was in debt → Treasury Secretary Hamilton needed steady money to pay it → he devised three steps, assuming state debts, building a national bank, taxing whiskey → the bank had to run and creditors had to draw interest, and all of it needed money → the whiskey tax was that money → and I was the man standing at the very end of this chain.\n\nThe report-writers in the east needed wealthy creditors to believe "this government can collect its taxes and repay its debts." How to prove it? The most direct way: when a crowd of poor distillers resisted the tax, send an army, and let everyone see that this government means business.\n\nSo those thirteen thousand troops, on the surface coming to arrest us, were at heart a performance for the wealthy creditors — your money is safe, this government can hold the line.\n\nAnd in that same 1790s, another group stood even more wholly outside of "all men" than I did: people held as property, and a free Black man who wrote to question a founder and was simply gone around (you can hear that end through another view). I could at least pick up a gun, could still count as part of "the people"; they did not even have that.\n\nAssumption, the bank, the excise tax, the army bearing down on me, the Black people shut outside of "all men" — they sound like five unrelated things. They are really one: this new nation was building its skeleton, and the cost of building it always pressed first onto the people farthest from power.',
      },
      deliverGoal: 'N6 ⭐ anchor / cross-lens micro-detail — 往上捋整条链: 新国欠债→Hamilton 还债要稳定钱→承债+银行+消费税三步→银行运转债主利息要钱→威士忌税=那笔钱→Tom 站链子最末端 / 大军表面抓我们骨子里演给有钱债主看 (你们钱稳了) / 同代另一头: 被当财产的奴隶+被绕开的自由黑人比我更在「人人」外 (桥 Banneker) / 「五件事其实是一件: 搭骨架代价总先压到离权力最远的人」',
      engagementHook: '压到我身上的一万三千大军,真正是演给东边那些有钱债主看的:「你们的钱稳了」。一件事表面对付的是 A、骨子里是做给 B 看——这种「醉翁之意不在酒」,你在生活里见过吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'whf-n7',
      type: 'narrative',
      content: {
        cn: '退一步,看这件事到底改了什么。\n\n短期看,新政府赢得干净利落。税,继续收。它向全国、也向欧洲那些债主证明了:这个政府不是邦联那个软脚虾了,它能对自己境内的人动用武力,它收得上税。它的信用,就是这么用我们这种人立起来的。\n\n但你换个角度看,我们也不算全输。我们这种边疆人,从此记住了一件事:东边那个政府,跟我们不是一条心。它服务的是商人、债主、城里人,不是我们这些种地的、住山那边的。这股气,没散。\n\n这股气,后来变成了一种力量。十几年后,一个打着「普通人对抗东部精英」旗号的人当上了总统(这条线你跑杰克逊那个主题会接上)——他的票,很多就来自我们这种被甩在后面、咽不下这口气的边疆人。我们这次输了枪,但我们这种人的怨气,后来重塑了整个美国政治。\n\n这就是这件事真正的长尾:它不只是「一次抗税被镇压」。它是美国的一道裂缝第一次裂开见血——东边 vs 西边,城市 vs 乡村,精英 vs 普通人。这道裂缝,两百多年了,今天还在那儿。',
        en: 'Step back and look at what this actually changed.\n\nIn the short term, the new government won cleanly. The tax kept being collected. It proved to the whole country, and to those creditors in Europe, that this government was no longer the weakling confederation — it could use force on people within its own borders, it could collect its taxes. Its credit was raised, just so, on the backs of people like us.\n\nBut look from another angle, and we didn\'t entirely lose. We frontier people remembered one thing from then on: that government in the east was not of one mind with us. It served merchants, creditors, city folk — not us who farmed, who lived on the far side of the mountains. That resentment did not disperse.\n\nThat resentment later became a force. A dozen-some years on, a man who carried the banner of "the common people against the eastern elite" became president (you\'ll meet this line in the Jackson topic) — and many of his votes came from frontier people like us, left behind and unable to swallow it. We lost the guns this time, but the grievance of people like us went on to reshape all of American politics.\n\nThat is the real long tail of this thing: it was not merely "a tax revolt put down." It was an American fault line splitting open and drawing blood for the first time — east versus west, city versus country, elite versus common people. That fault line, over two hundred years, is still there today.',
      },
      deliverGoal: 'N7 zoom-out + topic connection — 短期: 新政府赢, 税继续收, 向全国和欧洲债主证明能动武能收税 (信用用我们立起来) / 另一角度没全输: 边疆人记住「东边政府不跟我们一条心, 服务商人债主城里人」怨气没散 → 十几年后打「普通人对抗东部精英」旗号的人当总统 (桥 jackson-indian-removal) 票来自被甩下的边疆人 / 长尾: 美国一道裂缝第一次见血 (东 vs 西/城 vs 乡/精英 vs 普通人) 今天还在',
      engagementHook: '我们这次输了枪,但我们这种「被甩在后面、咽不下这口气」的怨气,十几年后把一个人送上了总统位子。一群人当下输了,他们的怒火却重塑了整个国家——这种事,你觉得是好是坏?',
      expectsRealAnswer: false,
    },
    {
      id: 'whf-n8',
      type: 'synthesis',
      content: {
        cn: '我活到老,死在我自己的农场上,跟成千上万跟我一样的边疆酒农一样,没有名字留在任何史书里。该怎么评 1794 年压到我们头上的这件事?两边都站得住。\n\n一种说法:政府做对了。一个新国家,要是连税都收不上、谁不爽就抄家伙造反,它撑不了几年就散了。1794 年这一下,立住了「联邦的法律,所有人都得守」这条规矩——没有这条,后来就没有一个能维系两百年的美国。代价是压了我们一把,但它换来的是一个国家。\n\n另一种说法:政府欺负了最弱的一群人。它没去碰东边那些钻空子的有钱人,专挑我们这些没现钱、没门路、住在山那头的穷农民开刀。它用一万三千大军,替有钱的债主立了一回威。说着「人人生而平等」的国家,第一次对自己人动武,动的就是最够不着权力的那群人。\n\n两种说法都站得住。一个政府可以同时在「立国之本」和「欺负弱者」——立规矩这件事本身是对的,挑谁来立规矩,可以是不公的。这两件事不矛盾,是同一件事的两面。\n\n你怎么看?想 30 秒,写下来。',
        en: 'I lived to old age and died on my own farm, and like the thousands of frontier distillers just like me, left no name in any history book. How should you weigh the thing that came down on us in 1794? Both sides stand.\n\nOne view — the government did right. A new nation that cannot even collect a tax, where anyone displeased grabs a weapon and rebels, would fall apart within a few years. That stroke in 1794 established the rule that "federal law, everyone must obey" — without it, there would have been no America to hold together for two hundred years. The cost was pressing on us once, but what it bought was a country.\n\nThe other view — the government bullied the weakest. It never touched the wealthy in the east who worked their loopholes; it picked precisely us, the poor farmers with no cash, no connections, living on the far side of the mountains. It used thirteen thousand troops to make a show of force for wealthy creditors. A nation saying "all men are created equal" used force on its own people for the first time — on the very group farthest from power.\n\nBoth views stand. A government can at once be "laying a nation\'s foundation" and "bullying the weak" — setting the rule is itself right; choosing whom to set it on can be unjust. These do not contradict; they are two faces of one thing.\n\nWhat do you think? Take thirty seconds and write it down.',
      },
      deliverGoal: 'N8 synthesis — Tom 老死农场无名 + 一种说法 (政府做对: 新国必须能收税立威「联邦法律所有人守」否则散了, 代价压一把换来一个国家) / 另一种说法 (欺负最弱: 不碰东边有钱人专挑没现钱没门路的穷农民, 13,000 大军替债主立威, 说人人平等却对最够不着权力的人动武) / 两边都站得住同一件事两面 / 想 30 秒',
      engagementHook: '立规矩这件事本身是对的,但挑「最弱的那群人」来立这个规矩,可以是不公的——这两件事是同一件事的两面。你的 30 秒过去了,你怎么看?',
      expectsRealAnswer: true,
    },
    {
      id: 'whf-n9',
      type: 'synthesis',
      content: {
        cn: '走完我这一生——从一个有粮却穷、靠酿酒当钱使的边疆农民,到 1794 年站在七千人里、最后被一万三千大军压回家、连名字都没留下的人——你会怎么评价这样一个开端?\n\n这个国家后来写了很多关于自己的歌:开国元勋的智慧、宪法的伟大、自由的胜利。但你已经站在我这头看过了。那些歌里,没有我们这种人。给一个国家造信用的代价,先压到了我们——离钱最远、离权力最远的那群人——身上。被写进歌里的人,和被压在底下的人,是同一套系统造出来的。\n\n不过先记住:你这一遍,听的只是政策链条末端的一个边疆酒农。设计这套财政的财长 Hamilton、写信质问开国者的自由黑人 Banneker,各有各的说法,换个视角再走一遍,你会听见他们怎么讲这同一段历史,也会看看你刚才的判断站不站得住。\n\n再想一步:今天你身边——你的城市、你的国家——也总有些「为了大局、为了发展、为了规矩」要做的事。这些事可能真的是对的。但你睁眼看一看:它的代价,是不是又一次,先压到了最没声音、最够不着权力的那群人身上?\n\n那群人是谁?如果有一天,扛代价的那群人里有你,你会像我一样举起枪、然后被压回家、连名字都不剩吗——还是你会想出别的办法?',
        en: 'Walk the whole of my life — from a frontier farmer with grain but no money, who used distilled liquor as cash, to a man who in 1794 stood among seven thousand, was pressed back home by thirteen thousand troops, and left not even a name — how would you judge such a beginning?\n\nThis country later wrote many songs about itself: the wisdom of its founders, the greatness of its Constitution, the triumph of liberty. But you have stood at my end and looked. In those songs, there are no people like us. The cost of building a nation\'s credit pressed first onto us — the people farthest from money, farthest from power. The people sung into the songs and the people pressed down underneath were made by the same system.\n\nBut first, remember: this pass, you heard only a frontier distiller at the end of the policy chain. Hamilton, the Treasury Secretary who designed those finances, and Banneker, the free Black man who wrote to question a founder, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nTake one more step. Today, around you — your city, your country — there are always things that must be done "for the greater good, for development, for the rule." These things may truly be right. But open your eyes and look: does the cost, once again, press first onto the group with the least voice, the least reach to power?\n\nWho is that group? And if one day you are among the ones bearing the cost, will you do as I did — raise a gun, be pressed back home, and not even a name left — or will you think of another way?',
      },
      deliverGoal: 'N9 closing meta — 评价开端 (有粮却穷的边疆酒农→站 7,000 人里→被 13,000 大军压回家无名) + 反 Whig 钉死: 国家的歌 (元勋智慧/宪法伟大/自由胜利) 里没有我们这种人, 造信用代价先压到离钱离权力最远的人, 被唱进歌的人和被压底下的人是同一系统造的 + today you 迁移: 你身边「为大局/发展/规矩」要做的事 (可能真对) 代价是不是又先压到最没声音的人? 那群人是谁? 如果有天扛代价的人里有你, 你会举枪被压回家无名, 还是想出别的办法?',
      engagementHook: '这个国家给自己写了很多歌——元勋的智慧、自由的胜利——但那些歌里没有我们这种人。如果有一天,扛代价的那群人里有你,你会像我一样举起枪、然后被压回家、连名字都不剩吗,还是你会想出别的办法?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'hamilton': hamiltonLens,
  'banneker': bannekerLens,
  'whiskey-farmer': whiskeyFarmerLens,
};

export var defaultLens = 'whiskey-farmer';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'hamilton-jefferson-1790s',
  schemaVersion: 2,
  defaultLens: defaultLens,
  lensCount: 3,
  qaTemplate: 'simple-binary',
  nodesPerLens: 9,
  status: 'base-content',
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, corrected 9-node format)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens combined / cross-lens micro-detail (N6): 承债 + 国家银行 + 消费税 + Whiskey Rebellion 1794 是同一条因果链 — Hamilton (设计者) / Banneker (自由话语裂缝旁观者) / 酒农 (链条末端承受者)',
    'defaultLens: whiskey-farmer — receiving-end 优先 (边疆小农 + 政策链条末端 + composite 明标合成)',
    '反 Whig: 不浪漫化 Hamilton「移民英雄」(Broadway) / 不浪漫化 Jefferson「民主之父」/ Banneker 信让两人都接受质询 / 才华理想伪善同体',
    'anti-fab: whiskey-farmer 显式 composite (N1 括号声明 + lens card description); Hamilton 1755/57-1804 / Banneker 1731-1806 / Whiskey Rebellion 1794 / Banneker 信 1791.8.19 Jefferson 回 1791.8.30',
    'expectsRealAnswer: 每 lens 仅 N8 synthesis + N9 close = true (2/lens); mid-lens retrieval gate 运行时注入, 未作者化',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
