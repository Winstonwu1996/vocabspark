// ─── Pre-Columbian Americas 1000-1532 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 前哥伦布美洲 · Pre-Columbian Americas 1000-1532
// HSS-7.7 · AP World 1.4 (Americas civilizations + 1492 contact)
//
// 3 lens 设计 (per Sarah Chen audit + 王老师 curriculum sequence):
//   - pachacuti-inca      (perpetrator-actor / empire-builder) — c.1418-1472 Tawantinsuyu 建立者
//   - malintzin-mediator  (lonely-mediator / Nahua-translator) — c.1500-1529 三语 broker
//   - ix-mutal-weaver     (receiving-end / fictional-composite) — c.1480-1545 Postclassic Maya 织者
//
// 跨 lens micro-detail (per Sarah Chen audit):
//   锁定 #1 1521.11: Pachacuti mummy N11 / Malintzin 1521.8.13 N9 / Ix Mutal 1521.11 N7
//   锁定 #2 1518-1520 天花: Malintzin N4 / Ix Mutal N6
//
// 来源: Rostworowski 1999 / Hemming 1970 / Julien 2000 / Rowe 1946 / MacQuarrie 2007
//       D'Altroy 2002 / Townsend 2006 / Schroeder 2005 / Clendinnen 1991
//       Cook 1998 / Restall 2003 / Sharer 2006 / Rice 2004
//
// schemaVersion: 2 · defaultLens: ix-mutal-weaver

export var pachacutiLens = {
  id: 'pachacuti-inca',
  name: 'Pachacuti Inca Yupanqui',
  nameCn: '帕查库特克·印加·尤潘基',
  role: 'perpetrator-actor',
  roleDescription: 'empire-builder / system-hardener',
  description: 'Sapa Inca who transformed Cusco into Tawantinsuyu; born c.1418, reigned 1438-1472',
  descriptionCn: '将库斯科变成塔万廷苏尤的印加皇帝，生于约 1418 年，在位 1438-1472 年，共 34 年',
  storyboard: [
  {
    id: 'N1',
    title: {
      cn: '次子，不被看好',
      en: 'The Second Son, the Overlooked One',
    },
    setting: {
      time: 'c.1418',
      place: 'Cusco',
      cn: '约 1418 年，Cusco',
      en: 'c.1418, Cusco',
    },
    content: {
      cn: `我叫 Cusi Yupanqui。生在 Cusco——那时还是一座被山包围的小城，不是帝国，不是传说，只是安第斯山脉里几十个城邦里一个说得过去的。

我父亲是第 8 任 Sapa Inca，名叫 Viracocha。"Sapa Inca"——"唯一的王"——这个头衔听着很威严，但那时候我们管的地方，骑马一天就能绕完。

我不是嫡子。父亲看中的继承人是我哥哥 Inca Urco——他好看，他话多，他出现在父亲左右。我？我在旁边，没人注意。

Andean 文化里有个字叫 ayllu，扩展亲属社区，几十到几百户人家共享土地和祖先。我的 ayllu 当然是王室，但王室里的权力也是一棵树——阳光只照最中间那根枝。我不是那根枝。

十几岁的我，看着父亲处理政务，看着哥哥站在父亲右手边，看着 Cusco 城里的百姓朝他们鞠躬。我没有鞠躬——我在学。

权力是怎么运作的？靠的不是你能干什么，靠的是别人以为你能干什么。父亲选了哥哥，不因为哥哥真的比我强——而是因为哥哥先被看见。

这一课，我记了很久。后来我改变整个大陆的时候，还是从这里出发的。`,
      en: `My name was Cusi Yupanqui. I was born in Cusco — not yet an empire, not yet a legend, just one city-state among dozens tucked in the Andes, manageable enough that a man on foot could walk its borders in a day.

My father was the 8th Sapa Inca, Viracocha. "Sapa Inca" — "Unique King" — a title that sounded weighty. But the kingdom it named was modest.

I was not the chosen heir. My father favored my older brother, Inca Urco — he stood at my father's right hand, visible, selected. I stood to one side. No one particularly noticed me.

Andean society is built on the ayllu, the extended kin community of dozens to hundreds of households sharing land and a common ancestor. My ayllu was the royal household itself — but even inside a royal family, power is a tree. Sunlight only reaches the central branch. I was not that branch.

In my early years I watched my father govern, watched my brother stand beside him, watched Cusco's people bow. I did not bow. I watched and learned.

Power works not by what you can actually do — but by what others believe you can do. My father chose my brother not because my brother was truly more capable, but because my brother was seen first.

I kept that lesson for a long time. When I later reshaped an entire continent, I started from exactly this place.`,
    },
    deliverGoal: 'N1 hook — c.1418 出生次子背景 + Viracocha 第 8 任 Sapa Inca + 嫡子制度 + ayllu 亲属社区 + 「不被选中的人怎么看权力运作」内核',
    engagementHook: '我不是嫡子，不被父亲看好——但我在旁边观察权力怎么运作。你见过谁明明很有能力，却因为「不被看见」而被忽视？最后怎么了？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N2',
    title: {
      cn: '父亲转身的那一刻',
      en: 'The Moment My Father Turned Away',
    },
    setting: {
      time: '1438 春，Chanca 军逼近 Cusco 前夕',
      place: 'Cusco 城内',
      cn: '1438 年春，Cusco 城内',
      en: 'Spring 1438, Cusco',
    },
    content: {
      cn: `Chanca 人从西北来了。

Chanca 是 Andean 山地的强部族，一直想吞掉 Cusco。那年春天，他们的大军逼近城郊——数量比我们的守备多，士气比我们高。

我父亲 Viracocha 在大殿里做了一个决定：撤。

他带上我哥哥 Inca Urco，带上王室大部分人，撤到东北山上的要塞 Caquia Xaquixaguana。撤退时他没有回头。

Cusco 城里留下了什么？几百个不肯走的人，一批不知道逃去哪里的平民，还有我——次子，不是嫡子，父亲没有带走的那个。

我不是被忘了。我是被放弃了。

父亲转身的那一刻，我站在 Cusco 的石路上，看着他的背影消失进山。那一刻我想：如果 Cusco 今天亡了，亡在谁手里？亡在嫡子跑路的父亲手里。

但 Cusco 没有亡。因为我留下来了。

被遗弃创造了空间。父亲不在，哥哥不在，王室的权威拿走了——但权威的空缺，是召唤另一个人的时刻。

我开始召集人。我去找西南的 Quechua 部，去找南边的 Cana 部——「Chanca 要来灭我们，你们跑了也一样完蛋，不如一起守。」他们来了。`,
      en: `The Chanca came from the northwest.

The Chanca were a powerful Andean highland people, long eyeing Cusco. That spring their army closed on the city's outskirts — larger than our garrison, with better morale.

My father Viracocha made a decision in the great hall: he would withdraw.

He took my brother Inca Urco, took most of the royal household, and retreated to the fortress of Caquia Xaquixaguana in the hills to the northeast. He did not look back.

What stayed behind in Cusco? A few hundred people who would not flee, some ordinary citizens with nowhere to go, and me — the second son, not chosen, not taken.

I was not forgotten. I was left.

My father turned. His figure disappeared into the hills. I stood on Cusco's stone road and thought: if Cusco falls today, it falls under a father who ran with his chosen heir.

But Cusco did not fall. Because I stayed.

Abandonment makes a vacancy. When a father leaves and a brother leaves and royal authority is removed — the gap left behind summons whoever remains.

I began to gather people. I went to the Quechua to the southwest, to the Cana in the south. "The Chanca will destroy us — and if Cusco falls, you fall next. Better to stand together." They came.`,
    },
    deliverGoal: 'N2 1438 Chanca 大军逼近 + Viracocha 携嫡子 Inca Urco 出逃 + Cusi Yupanqui 留守 + 召集 Quechua + Cana 两部族 + 权力空缺如何召唤另一个人',
    engagementHook: '父亲带哥哥逃走，把我留在城里。如果你是我，你第一个念头是什么——逃？守？还是别的？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N3',
    title: {
      cn: '血原反败为胜，改名「时间转折者」',
      en: 'Reversal on the Plain of Blood — I Rename Myself',
    },
    setting: {
      time: '1438，Yahuarpampa「血原」',
      place: 'Cusco 城外平原',
      cn: '1438 年，Yahuarpampa，Cusco 城外',
      en: '1438, Yahuarpampa, outside Cusco',
    },
    content: {
      cn: `Yahuarpampa——Quechua 语，「yahuar」= 血，「pampa」= 平原。血原。这个名字是真实的——这块地已经见过血了，很快还要见更多。

1438 年，我和凑来的 Quechua + Cana 联军，在城外迎击 Chanca 大军。

我们打赢了。Chanca 撤退。

这不是神话。反败为胜是真的节点——1438 Yahuarpampa 大战是 Inca 历史的核心事实。但要 careful framing：后来的王朝叙事（Pedro Sarmiento de Gamboa 1572《Historia índica》）加了一段细节——「战斗到一半，平原上的石头变成了战士，pururaucas 加入了我们」。石头变战士是后来史学家写的，是 Inca 王朝的 PR 操作。Julien 2000 说得很清楚：框架是真，细节是神话化处理。

打完仗，我做的第一件事不是庆祝。是改名。

Cusi Yupanqui——这个名字是次子的名字，是父亲没带走的那个孩子的名字。我不要这个名字了。

新名字：**Pachacuti**。Quechua 语，「pacha」= 时间 / 大地，「kuti」= 翻转。合在一起：时间转折者，大地震荡者。

胜利者做的第一件事，是重新讲自己的故事。

我改名——我宣布自己是第 9 任 Sapa Inca——我的父亲在山上，哥哥在山上，王位空在 Cusco。我拿走了它。

Genghis Khan 1206 年在 Onon 河源头被尊号「成吉思汗」——然后花十年重建了草原政治地图。我 1438 年在 Cusco 改名 Pachacuti——然后花三十四年重建了整个南美洲。两个人，两个大陆，同一个动作：先给自己命名，再去建造命名承诺的东西。`,
      en: `Yahuarpampa — Quechua: *yahuar* = blood, *pampa* = plain. Plain of Blood. The name was already real — this ground had seen blood. It was about to see more.

In 1438, the combined Quechua and Cana forces I had gathered faced the Chanca army outside Cusco.

We won. The Chanca retreated.

This is not myth. The 1438 Yahuarpampa battle is solid Inca history. But careful framing is needed: later dynastic narratives (Pedro Sarmiento de Gamboa, *Historia índica*, 1572) added a detail — mid-battle, the stones on the plain turned into warriors, *pururaucas*, joining our side. Stones turning into warriors is dynastic PR, added by later historians. The core event is real; the dramatic details are mythologized.

After the battle I did not celebrate. I changed my name.

Cusi Yupanqui — the name of a second son, the child a father did not take. I did not want that name.

New name: **Pachacuti**. Quechua: *pacha* = time / earth, *kuti* = overturn. Together: Overturner of Time, Earth-Shaker.

The first thing victors do is retell their own story.

I renamed myself — declared myself the 9th Sapa Inca — my father was on a hill, my brother was on a hill, and the throne sat empty in Cusco. I took it.

Genghis Khan received his title on the Onon River in 1206 and then spent years rebuilding the steppe's political map. I renamed myself Pachacuti in Cusco in 1438 and spent 34 years rebuilding an entire continent. Two men, two continents, the same move: name yourself first, then build what the name promises.`,
    },
    deliverGoal: 'N3 1438 Yahuarpampa 反败为胜 + careful framing「石头变战士」是后世 PR + 改名 Pachacuti 「时间转折者」+ 自立第 9 任 Sapa Inca + cross-Topic Genghis Khan 1206 对照',
    engagementHook: '打赢之后，我做的第一件事是改名——不是宴庆，不是追击，而是先给自己起一个新名字。你觉得为什么这一步最重要？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N4',
    title: {
      cn: '美洲豹形 Cusco：城市设计就是政治宣言',
      en: 'Cusco as Puma: City Design Is Political Statement',
    },
    setting: {
      time: '1438-1445，Cusco 重建期',
      place: 'Cusco 城心',
      cn: '1438-1445 年，Cusco 城心',
      en: '1438-1445, Cusco city center',
    },
    content: {
      cn: `一座城市怎么被人记住？靠它的形状。

我拿下王位之后，第一件事不是扩张。是重建 Cusco。

旧 Cusco 是一座自然生长的山地小城——房子沿沟谷堆，路随地形弯，没有计划，没有图纸。我要改。

我走到城心，叫来工匠和贵族，指着四周山脉说：这座城要重新规划。形状：美洲豹（puma）。城北高地的要塞 Saqsaywaman 是豹头——那里的 zigzag 巨石城墙就是豹的利齿，石块重达 100 到 200 吨，拼接精度到刀片插不进去，全靠精准切割，不用砂浆。城心是豹的心、豹的腹——那里建 Coricancha，太阳神 Inti 的神殿。

这不是审美决定，是政治宣言。

美洲豹在 Andean 文化里是力量、王权、山脉的象征。Cusco 是美洲豹的身体——住在这里的人，每天都活在一个关于王权的隐喻里。

Coricancha——Quechua 语「Quri Kancha」= 黄金围院——内墙镀金板，庭院里有真人大小的金制玉米秆、金制羊驼（西班牙人 1533 年来，全融了拿走）。太阳节的时候，Inti 的金像摆在神殿正中，正午阳光从特定角度射进来，整个殿堂燃起金光。

我站在那里主持第一次仪式。我知道这是 PR。我也开始感觉到某种比 PR 更重的东西——或许真的是 Inti 在看。

一个统治者能说什么？「我建了一座神殿，神住在里面，我是神的儿子，所以你们要听我的。」

如果你把神殿建得足够金光闪闪，足够让人喘不过气，这句话会被相信很多很多年。`,
      en: `How does a city get remembered? By its shape.

The first thing I did after securing the throne was not expand. It was rebuild Cusco.

The old Cusco was a natural mountain settlement — houses stacked along ravines, roads bending with terrain, unplanned. I would change that.

I walked to the city center, summoned architects and nobles, and pointed at the surrounding ridgelines. This city would be redesigned. The shape: a puma.

The fortress on the high ground to the north — Saqsaywaman — was the puma's head, and its zigzag megalithic walls were the puma's teeth, using stones of 100 to 200 tons, fitted to razor-blade precision without any mortar. The city center was the puma's heart and belly — where I ordered Coricancha built, the temple of the sun god Inti.

This was not an aesthetic decision. It was a political statement.

In Andean culture, the puma means power, royalty, and the mountains. Cusco as puma body — the people who lived here spent every day inside a metaphor about kingship.

Coricancha — Quechua *Quri Kancha*, "Golden Enclosure" — walls plated in gold, courtyards holding life-sized maize stalks and llamas cast in gold (the Spanish came in 1533 and melted everything). During the sun festival, the gold image of Inti sat in the temple's center; at noon the light entered at a precise angle and the entire hall blazed.

I stood there and presided over the first ceremony. I knew this was PR. I also felt something heavier than PR starting to form — perhaps Inti really was watching.

A ruler can say: "I built a temple, a god lives inside, I am the god's son, so obey me." If you build the temple gold and overwhelming enough, that sentence will be believed for a very long time.`,
    },
    deliverGoal: 'N4 1438-1445 Cusco 重建 + puma 形设计 + Saqsaywaman 巨石城墙 100-200 吨 + Coricancha 黄金神殿 + 太阳节首次主持 + 「城市设计就是政治宣言」',
    engagementHook: '我把整座城设计成美洲豹的形状——人们每天走在豹身上，住在豹的肚子里。你觉得用建筑改变人的思维方式，今天还有人这么做吗？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N5',
    title: {
      cn: 'mit\'a 令：工，不是税',
      en: 'The mit\'a Order: Labor, Not Tax',
    },
    setting: {
      time: '约 1445 年',
      place: 'Cusco，帝国行政中心',
      cn: '约 1445 年，Cusco',
      en: 'c.1445, Cusco',
    },
    content: {
      cn: `帝国要运转，靠什么？

不是钱——Tawantinsuyu 没有通货货币。不是市场——整个安第斯世界没有我们发明的市场经济。

靠的是人的身体和时间。

我颁布 mit'a 令。Quechua 语「mit'a」= 轮班。规则很简单：帝国每一个成年男性，每年欠帝国九十天劳役。不是税，是工。名义上「轮」——你今年服役，明年换别人，大家都摊得到。帝国会供你服役期间的吃喝。

有一天，一份用 quipu（绳结）写成的通告，被带到了 Cusco 城南一个 ayllu 的长老手里。那个长老叫什么名字——我不知道，从 Cusco 下令，我从来不知道具体的名字。但我知道那份通告上的绳结写的是：今年，你们 ayllu 有十八个成年男性欠帝国劳役，指派去修 Saqsaywaman 北段城墙，出发时间：下下月初一。

长老拿着 quipu 站在族里，把这件事告诉族人。

有人问：去多久？九十天。能不去吗？不能。家里的田谁种？帝国说——余下的族人一起，帝国的仓库也会给补贴。

这就是制度怎么从纸——或者说从绳结——落到一个家庭的方式。

我颁布 mit'a，我相信这是公平的——大家都摊，没有钱的交换，只有劳动的交换。我建的路、我建的神殿、我建的仓库，都靠这个系统撑着。

但九十天在矿里挖银的人，死亡率很高。我没有在矿里待过九十天。`,
      en: `What keeps an empire running?

Not money — Tawantinsuyu had no currency. Not markets — the Andean world had no market economy of the kind we might recognize.

It ran on human bodies and human time.

I issued the mit'a order. Quechua *mit'a* = turn, rotation. The rule was simple: every adult male subject owed the empire ninety days of labor per year. Not tax — work. Nominally "rotational" — you serve this year, someone else next year, everyone takes turns. The empire would feed and house you during your service period.

One day a quipu — a knotted cord message — was carried to a village elder of an ayllu south of Cusco. The elder's name I never knew. From Cusco I gave orders and I never knew the specific names. But I know what the knots said: this year, eighteen adult men from your ayllu owe labor to the empire. Assigned to the northern wall section of Saqsaywaman. Departure date: the first day of the month after next.

The elder stood among his people holding the quipu and read them the news.

Someone asked: how long? Ninety days. Can we refuse? No. Who farms our fields? The empire said — the rest of the community together, and the state granaries would supplement.

That is how policy moves from cord knots to a family's kitchen table.

I issued the mit'a because I believed it was fair — everyone shares the burden, no money changes hands, only labor. My roads, my temples, my granaries all rested on this system.

But the people assigned to ninety days underground in the silver mines had high mortality rates. I had never spent ninety days in a mine.`,
    },
    deliverGoal: 'N5 约 1445 mit\'a 令颁布 + 九十天劳役制度 + quipu 通告落到 ayllu 长老手里的具体瞬间 + 「制度怎么从绳结落到一个家庭」+ 反 Whig 矿里死亡率高',
    engagementHook: '我说 mit\'a 是公平的——「大家都轮」。但在矿里干活的人死亡率比修路的高很多。「轮流分担」等于「公平」吗？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N6',
    title: {
      cn: 'mitmaq：Cusco 的决定，1500 公里外的感觉',
      en: 'mitmaq: Decision in Cusco, Felt 1500 km Away',
    },
    setting: {
      time: '约 1450 年，第一次大规模 mitmaq 迁徙',
      place: 'Cusco（决策中心）↔ Collasuyu 南部（迁徙目的地）',
      cn: '约 1450 年，Cusco ↔ 帝国南部',
      en: 'c.1450, Cusco and the empire\'s southern reaches',
    },
    content: {
      cn: `帝国扩张到一个新地方之后，最大的问题不是打赢——是打赢之后怎么让那里不再反叛。

我想出来的答案叫 mitmaq（Quechua「移植者」）。规则：征服一个区域后，把那里不服从的 ayllu 整族迁走，搬到帝国另一头。再把老实的、对帝国忠心的 ayllu 从别处搬过来，填进那片空出来的土地。

这在政治上很有效。被迁走的部族，离开了自己的山、自己的祖坟，到了陌生的地方——他们没有根基，没有盟友，没有逃跑的方向。新迁来的 ayllu，在异乡，唯一能靠的是帝国。

1450 年前后，有一个 ayllu——我不知道他们的名字——从帝国南部被迁出，目的地是 1500 公里外的北方新征服区。他们的长老在离开前，站在族里的 huaca（圣地）前，转身最后看一眼祖坟所在的山。

Andean 文化里，祖先不只是记忆——他们活在土地的 huaca 里，活在山里，活在家族埋骨的那一块地里。离开那块地，不只是搬家，是把祖先留在身后，带不走。

这一切，我坐在 Cusco 的时候，看不见。我的决定是政治上的，是行政上的，是用 quipu 绳结在地图上的一个移位。

我看见的是：「那个地区稳定了。」

我看不见的是：一个老人最后一眼回头，看着他们家族三代人埋骨的山，然后被迫转过来，向北走。

Mary Doyle 1988 年和 Carolyn Dean 2010 年的研究都强调：mitmaq 的代价不只是地理上的迁徙，是一种地理与精神的双重切断。这个代价，Cusco 的账本上没有记录。`,
      en: `After conquering a new territory, the biggest problem was not winning the battle — it was preventing the people there from rebelling once the army left.

My answer was mitmaq — Quechua for "transplanted people." The rule: after conquest, uproot unruly ayllu communities entirely and resettle them at the empire's opposite end. Bring in loyal ayllu from elsewhere to fill the land they left behind.

Politically, it worked. The displaced communities arrived somewhere without roots, without local allies, without any direction to flee. The newly planted ayllu, living as strangers in unfamiliar land, had only the empire to depend on.

Around 1450, one ayllu — I do not know their name — was relocated from the empire's south, destination 1,500 km away in newly conquered territory to the north. Their elder, before leaving, stood before his community's huaca (sacred ground) and turned for a last look at the mountain where his ancestors were buried.

In Andean culture, ancestors are not simply memories — they live in the land's huaca, in the mountains, in the earth where the family's bones are laid. To leave that land is not just to move. It is to leave the ancestors behind, untransportable.

None of this was visible to me in Cusco. My decision was political, administrative — a notation in quipu knots on an administrative map.

What I saw: "That region is now stable."

What I did not see: an old man taking a last look at the mountain where three generations of his family were buried, then turning away and walking north.

Mary Doyle (1988) and Carolyn Dean (*Inka Bodies and the Body of Christ*, 2010) both emphasize: the cost of mitmaq was not only geographic displacement but a double severance — geographic and spiritual at once. That cost does not appear in Cusco's administrative records.`,
    },
    deliverGoal: 'N6 约 1450 mitmaq 强制迁徙制度 + 「不老实部落整族迁走」的政治逻辑 + 被迁 ayllu 长老回头看祖坟的瞬间 + Cusco 看不见的 1500 公里外的感觉 + Doyle/Dean 双重切断 + 反 Whig',
    engagementHook: '从 Cusco 下令迁走一个 ayllu，我看见的是「那个地区稳定了」。被迁走的人看见的是离开祖坟的山。同一个决定，两种完全不同的感受。你认为哪一种才算是真实发生了的事？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N7',
    title: {
      cn: '我是 Inti 之子——PR 还是信仰？',
      en: 'Son of the Sun — PR or Belief?',
    },
    setting: {
      time: '约 1455 年，Inti Raymi（太阳节）',
      place: 'Coricancha 太阳神殿，Cusco',
      cn: '约 1455 年，Coricancha，Cusco',
      en: 'c.1455, Coricancha, Cusco',
    },
    content: {
      cn: `Inti Raymi——太阳节，Quechua 历中最重要的节日，冬至前后，庆祝太阳的回归。

我在 Coricancha 主持了第一次以 Sapa Inca 身份举行的完整太阳节仪式。

金色的神殿内墙。Inti 的金像在正中。午时，光从特定角度入射，整个殿堂全部点燃。

我宣布：Sapa Inca 是 Inti 在地上的代理——「Intip Churin」，太阳之子。反抗 Sapa Inca，等于反抗太阳本身。

这是我设计的。这是政治工程。我知道。

但站在那个光里太久，你会开始分不清楚。

权力怎么慢慢相信自己的故事？不是一夜之间。是每次仪式你主持它，每次臣民在你面前跪下，每次日出日落你的名字被附在太阳的名字旁边——慢慢地，边界模糊了。

我最初设计太阳国教，是因为它有用：反我就是反神，没有人敢。Catherine Julien 2000 和 Mary Doyle 1988 都指出，Pachacuti 的国教化在他死后三代才真正渗透进整个帝国——太阳崇拜不是一夜铺开的。这很重要：它提醒我，我建的东西比我自己更慢。

但那一天，在 Coricancha 的金光里，我第一次在仪式上感觉到自己可能真的是光的一部分——或者，也许是那种感觉对帝国有用，我就允许自己感觉到它。

到了这个程度，分不清楚的，不只是我。是所有在那个光里站过的人。`,
      en: `Inti Raymi — the sun festival, the most important ceremony in the Quechua calendar, held around the winter solstice to celebrate the sun's return.

I presided over the first complete Inti Raymi as Sapa Inca at Coricancha.

Gold-plated inner walls. The gold image of Inti at center. Noon light entering at a calculated angle, igniting the whole hall.

I declared: the Sapa Inca is Inti's earthly viceroy — *Intip Churin*, Son of the Sun. To oppose the Sapa Inca is to oppose the sun itself.

I designed this. I knew it was political engineering.

But stand in that light long enough and the line starts to blur.

How does power slowly come to believe its own story? Not overnight. It is every ceremony you preside over, every kneeling subject before you, every sunrise and sunset where your name is attached to the sun's name — slowly, the boundary dissolves.

I built the sun religion initially because it was useful: oppose me and you oppose god, no one dares. Catherine Julien (2000) and Mary Doyle (1988) both note that Pachacuti's religious centralization took three generations after his death to fully penetrate the entire empire — the sun cult did not spread overnight. That is important: it reminds me that what I built moved slower than I did.

But that day, in Coricancha's gold light, I felt for the first time in a ceremony that I might genuinely be part of the light — or perhaps that feeling was useful for the empire, and so I allowed myself to feel it.

At that level, the one who cannot tell the difference is not just me. It is everyone who has ever stood in that light.`,
    },
    deliverGoal: 'N7 约 1455 国教化 + Inti Raymi 太阳节首次完整主持 + 「Intip Churin 太阳之子」宣言 + 国教化渗透需三代（Julien 2000 + Doyle 1988）+ 「权力怎么慢慢相信自己的故事」',
    engagementHook: '我设计了「Sapa Inca 是太阳之子」这个说法，因为这让人不敢反我。但在仪式里待得太久，我开始真的有点相信了。你有没有见过有人说着说着，把自己都骗进去了？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N8',
    title: {
      cn: 'quipu：不是文字，是另一种范式',
      en: 'quipu: Not a Writing Substitute, a Different Paradigm',
    },
    setting: {
      time: '约 1460 年',
      place: 'Coricancha，第一次帝国清册 quipu 制成',
      cn: '约 1460 年，Coricancha，Cusco',
      en: 'c.1460, Coricancha, Cusco',
    },
    content: {
      cn: `帝国铺到了南边的 Titicaca 湖区，北边到了今天厄瓜多尔南部，西边到了太平洋海岸。管多大的地方就需要多精确的账本。

但 Tawantinsuyu 没有文字。没有字母，没有字符，没有象形文字。

我们有 quipu。

Quechua 语「khipu」= 结。一根主绳，下面挂几十到几百根支绳，每根支绳上打不同位置、不同类型的结。位置编码十进位数字——个位、十位、百位、千位。颜色和结型编码类别——玉米、土豆、战士、户口。

约 1460 年，Coricancha 里，第一次完整的帝国清册 quipu 在我面前被打结完成：某村产玉米多少，户口多少，适龄男子多少，今年欠 mit'a 人数多少。一套绳结，就是一个省的账簿。

一个 camayoc（quipu 专家）用手指在绳结上划过，报给我数字。这套系统管理着几百万人的帝国。

要 careful framing：quipu 不是「文字的替代品」——这个说法把问题说反了。quipu 是完全不同的信息技术范式：它极擅长记数字和行政记录；它能不能记叙事和历史，学界至今还在争论，没有破译。

同时，在 Mali 帝国（西非 600-1591），商人的女儿 Aisha 在 Timbuktu 用阿拉伯字母记账。1413 年她的账簿里有文字，有故事，有旅行记录。

两种工具，两种范式，两个帝国，差不多同一个时代。哪一种「更高级」？这个问题问错了——两种工具解决的问题不完全一样，两条路都走得通。`,
      en: `The empire now reached Lake Titicaca in the south, southern Ecuador in the north, and the Pacific coast to the west. The larger the territory, the more precise the records needed.

But Tawantinsuyu had no writing. No alphabet, no glyphs, no pictographs.

We had quipu.

Quechua *khipu* = knot. A primary cord with dozens to hundreds of pendant cords, each knotted at different positions in different types. Position encoded base-10 digits — ones, tens, hundreds, thousands. Color and knot type encoded category — maize, potatoes, warriors, households.

Around 1460, in Coricancha, the first complete imperial census quipu was knotted before me: how much maize each village produced, how many households, how many adult men, how many mit'a laborers owed this year. One set of cords — one province's full ledger.

A camayoc, a quipu specialist, ran fingers across the knots and read me the numbers. This system administered an empire of millions.

Careful framing is needed: quipu is not a "writing substitute" — that framing inverts the problem. Quipu was an entirely different information-technology paradigm: exceptionally suited to numbers and administrative records; whether it could encode narrative and history is still debated by scholars, and it remains undeciphered.

Meanwhile, in the Mali Empire (West Africa, 600-1591), a merchant's daughter named Aisha was keeping ledgers in Arabic script in Timbuktu. In 1413 her records held text, stories, travel notes.

Two tools, two paradigms, two empires, roughly the same era. Which one was "more advanced"? That question is wrong — the two tools solved somewhat different problems, and both paths worked.`,
    },
    deliverGoal: 'N8 约 1460 帝国清册 quipu 完成 + quipu 技术原理（十进位 + 颜色分类）+ Urton 2003 「不是文字替代是不同范式」+ cross-Topic Mali Aisha 1413 阿拉伯字母对照 + 「行政技术决定帝国规模」',
    engagementHook: 'quipu 用绳结管理几百万人的帝国，阿拉伯字母管理 Mali 的商贸——两种技术，问题不同，工具不同。你觉得「谁更先进」这个问题，本身有没有问题？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N9',
    title: {
      cn: 'Qhapaq Ñan：没有马，但我们有腿和山',
      en: 'Qhapaq Ñan: No Horses, but We Had Legs and Mountains',
    },
    setting: {
      time: '约 1465 年，路网主干完成',
      place: 'Andes 山脉，跨越 4000 公里',
      cn: '约 1465 年，Andes 山脉',
      en: 'c.1465, the Andes',
    },
    content: {
      cn: `一个帝国有多大，取决于消息能走多快。

Tawantinsuyu 最远的省份，在厄瓜多尔北部，在智利中部，在玻利维亚高原——从 Cusco 出发，直线距离超过 2000 公里。消息怎么传？军队怎么调动？粮食怎么运？

我建了路。

Quechua 语「Qhapaq Ñan」= 王道。从 Cusco 出发，向四个 suyu 延伸的石砌道路。到我和 Topa Inca 建完的时候，总长约 40,000 公里——跨过 Andes 山脉（海拔 4,000 到 5,000 米），跨过 Atacama 沙漠（世界最干的地方），沿 Amazon 河西缘延伸。

路上每隔 1.5 到 3 公里有一个 tambo，驿站，站着 chasqui——训练有素的跑步信使。每个 chasqui 跑约 2 公里，把 quipu 或口信传给下一个，接力。一天，消息跑 250 到 400 公里。

没有马。这一点要 careful framing：美洲大陆在 1492 年之前没有马（马是欧洲人带来的）——也没有牛、没有驴，没有大型驯化哺乳动物。Jared Diamond 在 1997 年《枪炮、病菌与钢铁》里把这归因于大陆生物地理——美洲大型哺乳动物在远古已经灭绝，不是 Inca 人不聪明，是大陆条件不同。但用 Diamond 的框架要谨慎：他是宏观叙事，具体的工程决策仍然是人做的。

Mongol 帝国（1206-1368）的 Yam 驿站，25 到 50 公里一站，骑马接力，一天也传约 300 公里。两套系统，接近同等速度——一套靠马，一套靠人腿和 4,000 米山路。

不同的工具，同等的效率。不同的大陆条件，同等的帝国逻辑。

2014 年，UNESCO 把 Qhapaq Ñan 列入世界文化遗产，涉及阿根廷、玻利维亚、智利、哥伦比亚、厄瓜多尔、秘鲁六国。我建的路，560 年后还在被人走。`,
      en: `An empire is only as large as the speed at which news can travel.

Tawantinsuyu's farthest provinces — northern Ecuador, central Chile, the Bolivian altiplano — lay more than 2,000 km from Cusco in straight lines. How would messages travel? How would armies be deployed? How would grain be moved?

I built roads.

Quechua *Qhapaq Ñan* = Royal Road. Stone-paved routes radiating from Cusco into the four suyu. By the time Topa Inca and I finished, the total length was roughly 40,000 km — crossing the Andes (4,000 to 5,000 m elevation), the Atacama desert (the driest place on Earth), and the western edge of the Amazon.

Every 1.5 to 3 km along the road sat a tambo, a way station, staffed by chasqui — trained running messengers. Each chasqui ran about 2 km, passed the quipu or verbal message to the next, and the relay continued. Result: 250 to 400 km per day.

No horses. Careful framing: the Americas had no horses before 1492 (Europeans brought them) — no cattle, no donkeys, no large domesticable mammals. The continental biogeography explains this — the Americas' large mammals went extinct in deep prehistory, not because Inca people were less capable, but because the continent's conditions differed. The specific engineering decisions, however, remained human choices.

The Mongol Empire's (1206-1368) Yam relay system sat stations 25 to 50 km apart, horse-relay, also covering roughly 300 km per day. Two systems, nearly equal speed — one using horses, one using human legs and 4,000-m mountain trails.

Different tools, equivalent efficiency. Different continental conditions, equivalent imperial logic.

In 2014, UNESCO inscribed Qhapaq Ñan as a World Heritage Site, spanning Argentina, Bolivia, Chile, Colombia, Ecuador, and Peru. The roads I built are still walked 560 years later.`,
    },
    deliverGoal: 'N9 约 1465 Qhapaq Ñan 路网主干完成 + 40,000 公里 + chasqui 信使 250-400 公里/天 + cross-Topic Mongol Yam 对照 + Diamond 1997 大陆生物地理 careful framing + UNESCO 2014 世遗',
    engagementHook: '没有马，靠人腿在 4,000 米山路上接力，一天传 250-400 公里——跟蒙古帝国骑马驿站的速度差不多。你觉得「有马」和「没马」这件事，是文明高低的体现，还是地理条件不同？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N10',
    title: {
      cn: 'panaca 木乃伊制度：死人怎么继续治国',
      en: 'panaca Mummy Rule: How the Dead Keep Governing',
    },
    setting: {
      time: '约 1470 年',
      place: 'Cusco，王宫，Pachacuti 与 Topa Inca 对话',
      cn: '约 1470 年，Cusco 王宫',
      en: 'c.1470, Cusco palace',
    },
    content: {
      cn: `我快死了。不是字面意义上的今天——而是开始能感受到时间的边界了。

我把 Topa Inca 叫到跟前。他是我选定的继承人——不是嫡长子，是我看中的能继续扩张帝国的儿子。

我告诉他一件他即将在我死后才真正明白的事。

「我死后，」我说，「我的财产是我的。我的 panaca——我的王室家族——会继续管理我的封地，供奉我的木乃伊。我的田地还是我的田地。你不能碰。」

Topa Inca 看着我。

「那我的财产从哪里来？」他问。

「你要去打新地方，」我说。「你父亲的东西不会留给你——你要自己征服。」

这就是 panaca 制度。

我死后，我的身体不会埋进墓里。它会被木乃伊化，保存在 Cusco，由我的 panaca 永远供奉。我会有自己的房子，自己的仆人（yanakuna 继续服务），自己的土地（生前封地继续是「我的」）。重大节日，我的木乃伊会被抬出来，跟活着的 Sapa Inca 并排坐在一起。

这不是迷信。这是宪政结构。Maria Rostworowski 在 1999 年《History of the Inca Realm》里把这一点说得很清楚：每一任 Sapa Inca 死后木乃伊化，财产被 panaca 永久锁定——新任 Sapa Inca 上台时，前任的财产他一分不能动，因为前任「还在」。所以新任只能往外打新地，凑自己的财产。

这是 Tawantinsuyu 为什么不停扩张的制度动因。不是每一任 Sapa Inca 都有征服的欲望——是制度迫使他必须征服。

我设计了一个让我死后继续有影响力的机制。我也设计了一个让帝国必须不停生长才不死的机制。

两件事是同一件事。`,
      en: `I was not dying today — but I could feel the edge of time.

I summoned Topa Inca. He was the son I had chosen to succeed me — not the eldest legitimate heir, but the one I judged capable of continuing the empire's expansion.

I told him something he would not fully understand until after my death.

"When I die," I said, "my estate remains mine. My panaca — my royal household lineage — will maintain my mummy and manage my lands. My fields stay my fields. You cannot touch them."

Topa Inca looked at me.

"Then where does my wealth come from?" he asked.

"You go and conquer new land," I said. "Your father's holdings will not be handed to you — you must win your own."

This is the panaca system.

After my death my body will not be buried. It will be mummified, preserved in Cusco, perpetually venerated by my panaca. I will have my own house, my own servants (yanakuna continuing in service), my own estates (my living-era lands remaining "mine"). At major festivals my mummy will be carried out to sit alongside living Sapa Inca in ceremony.

This is not superstition. It is constitutional structure: every Sapa Inca on death is mummified and their wealth permanently locked to their panaca — the successor cannot touch the predecessor's estates, because the predecessor "remains." So the new ruler must conquer fresh territory to build his own wealth.

This is the structural driver of Tawantinsuyu's perpetual expansion. Not every Sapa Inca necessarily wanted conquest — the institution compelled it.

I designed a mechanism that kept me influential after death. I also designed a mechanism that required the empire to keep growing or die.

Those two things are the same thing.`,
    },
    deliverGoal: 'N10 约 1470 panaca 木乃伊制度 + Pachacuti 与 Topa Inca 对话 + 「死人财产不能给继承人」→ 帝国永远扩张的制度动因 + Rostworowski 1999 + 「死人怎么继续治国」',
    engagementHook: '我建了一个制度，让我死后财产还是我的——但这个制度同时迫使我儿子必须去打新地方。你觉得这是聪明的设计，还是一个会把帝国逼死的陷阱？',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N11',
    title: {
      cn: '共治，然后终于死——他没法预见微生物',
      en: 'Co-reign, Then Death — He Could Not Foresee Microbes',
    },
    setting: {
      time: '1471-1472 年，Pachacuti 老年，与 Topa Inca 共治',
      place: 'Cusco',
      cn: '1471-1472 年，Cusco',
      en: '1471-1472, Cusco',
    },
    content: {
      cn: `1471 年，我把权力移交给 Topa Inca，但还活着。我们共治了一年多。

他已经在北方打到了今天厄瓜多尔的 Quito，父亲在世时就跑那么远了。现在他准备继续往南——到智利中部的 Maule 河。我知道他会打赢，就像我当初知道自己会打赢一样。

帝国在 1471 年有多大？从 Colombia 南部到 Chile 中部，从太平洋海岸到 Amazon 雨林边缘。估算人口 Rowe 1946 说约 600 万，D'Altroy 2002 修订为可能 900 万到 1400 万——学界数字差距很大，因为没有文字，人口只能从 quipu + 考古推算，都有误差。

我在 1472 年死了。在位 34 年。

反讽：我把这片大陆上最大的政体建起来了，花了 34 年，从一个小城的次子走到这里。但我死后 60 年，这个帝国被 168 个人终结了。

168 个 Francisco Pizarro 的兵——加上他们带来的，我看不见的、没有名字的东西：天花病毒。

1524-1527 年，天花先于 Pizarro 本人到达安第斯——欧洲人从 1518 年起就在 Caribbean 和大陆沿岸传播天花（Cook 1998），病毒比军队走得更快。天花在 1527 年前后杀死了我的继承人 Huayna Capac 和他的指定继承人——皇位争议随之爆发，Atahualpa 和 Huáscar 两兄弟内战，Inca 帝国在 Pizarro 到达前就已经在内战中撕裂。

我的 mummy 还在 Cusco。

1521 年 11 月，北方传来消息——Tenochtitlán，那个大湖上的城，8 月陷落了。西班牙人打下了 Aztec。我的 mummy 在 Cusco，我什么都不知道——但那个消息如果传到了，也没有人会把它跟我联系起来，更没有人知道这意味着什么。

我建了一个制度体：mit'a、mitmaq、panaca、Qhapaq Ñan、quipu、Coricancha。每一个都很有效，每一个都需要帝国继续运转才能维持。

但我没有设计对抗微生物的制度。没有人设计过。`,
      en: `In 1471 I transferred power to Topa Inca but remained alive. We co-ruled for a little over a year.

He had already pushed north to Quito in today's Ecuador during my reign. Now he was ready to push south to the Maule River in central Chile. I knew he would win, the same way I once knew I would win.

How large was the empire in 1471? From southern Colombia to central Chile, from the Pacific coast to the edge of the Amazon. Population estimates range widely: Rowe (1946) suggested about 6 million; D'Altroy (2002) revised this upward to possibly 9 to 14 million — the gap exists because without writing, population can only be inferred from quipu records and archaeology, both with wide margins.

I died in 1472. 34 years on the throne.

The irony: I built the largest polity on this continent, 34 years from a second son in a small city to this. But 60 years after my death, this empire was ended by 168 men.

168 soldiers under Francisco Pizarro — plus something they brought that I could not see, that had no name I would recognize: smallpox.

Between 1524 and 1527, smallpox reached the Andes before Pizarro himself — spreading since 1518 (Cook 1998) along Caribbean and mainland coasts. The virus spread faster than armies. By around 1527 it had killed my successor Huayna Capac and his designated heir — succession collapsed into civil war between brothers Atahualpa and Huáscar. The empire was already tearing itself apart when Pizarro arrived.

My mummy was still in Cusco.

In November 1521, news came from the north — Tenochtitlán, the great city on the lake, had fallen in August. The Spanish had defeated the Aztec. My mummy sat in Cusco, knowing nothing. Even if the news had reached someone, no one would have connected it to what was coming for us, and no one would have known what it meant.

I built a system of institutions: mit'a, mitmaq, panaca, Qhapaq Ñan, quipu, Coricancha. Every one was effective. Every one depended on the empire continuing to function.

But I had not designed an institution to resist microbes. No one had.`,
    },
    deliverGoal: 'N11 1471-1472 共治 + 1472 死在位 34 年 + 反讽（168 人 + 天花 60 年后终结帝国）+ 天花 1524-1527 先于 Pizarro 到达 + Rowe 1946 vs D\'Altroy 2002 人口估算 + 1521.11 Tenochtitlán 跨 lens 时刻 + 「institution-builder 的盲点」',
    engagementHook: '我建了那么多制度——mit\'a、mitmaq、panaca、Qhapaq Ñan——每一个都很有效，但我没有设计对抗微生物的制度。先在心里想想你怎么看，下一节我会正式问你。',
    expectsRealAnswer: false,
    nodeType: 'perpetrator-actor',
  },

  {
    id: 'N12',
    title: {
      cn: '1472 死后 → 1532 木乃伊还在 Cusco，Atahualpa 走进伏击',
      en: '1472 Death → 1532: My Mummy Still in Cusco, Atahualpa Walks into the Trap',
    },
    setting: {
      time: '1472 死后 → 1532 年 11 月 16 日，Cajamarca',
      place: 'Cusco（mummy）↔ Cajamarca（Atahualpa 被俘）',
      cn: '1472-1532，Cusco ↔ Cajamarca',
      en: '1472-1532, Cusco and Cajamarca',
    },
    content: {
      cn: `我死了。1472 年。

木乃伊工匠处理了我的身体。我的 panaca 把我安置在 Cusco 城里一栋房子里。我的田地还是我的，我的仆人还在服务，我的财产不属于 Topa Inca。

每年大典，他们把我抬出来，和活着的 Sapa Inca 并排坐在广场上。我参加了 Inti Raymi，参加了战功庆典，参加了所有我活着时主持过的仪式。我死了，但我还在治国。

这是 Catherine Julien 2000 和 Carolyn Dean 2010 都强调的认知：Inca 帝国不是「死的过去」，是「死人还在治国的现在」。1532 年西班牙人 Pizarro 到 Cusco 时，Tawantinsuyu 的 11 任 Sapa Inca 木乃伊全部还在（Pizarro 后来下令毁掉，1559 年）。

1532 年 11 月 16 日，Cajamarca。

我的曾孙 Atahualpa——他赢了内战，刚打败弟弟 Huáscar，是新 Sapa Inca——走进了 Francisco Pizarro 的广场。

Pizarro 带了 168 个人：62 骑兵，106 步兵，外加铁炮。Atahualpa 带了估计 6,000 到 8,000 人的随扈。

但他们没有带全副武装——这是面见外国来客的礼仪场合，不是战场。Atahualpa 知道西班牙人人少，他没有理由害怕。

Pizarro 预设了伏击。

那一天结束的时候：Atahualpa 被俘，随扈几千人被杀，没有一个西班牙人死亡。

我怎么理解这件事？

不能简单地说 Atahualpa 愚蠢——他的判断在他自己的规则体系里是合理的。不能简单地说 Pizarro 聪明——他胜利的最大原因不是战术，是天花已经把帝国打烂了，是内战已经撕裂了指挥链。Matthew Restall 2003《Seven Myths of the Spanish Conquest》说得对：把这段历史讲成「168 人征服了 600 万人」是 myth，真实的是：一个因天花和内战而内部崩解的帝国，碰上了枪、马、钢和外交操作的组合。

反 Whig：我不是英雄，不是恶霸。

我是一个用 34 年，在安第斯山脉上改写了 4,000 公里大陆政治地图的人。我建了 Qhapaq Ñan，建了 Coricancha，建了 panaca，建了 mit'a，建了一套靠绳结管理几百万人的行政体系。

我的成功和我的失败，来自同一个地方：我把帝国的逻辑建得太好了。扩张是结构强迫的，不停扩张需要不停消耗人。mitmaq 切断了被迁徙族群的根。mit'a 矿里死的人，名字从未进过 Cusco 的账本。panaca 制度让死人继续锁着财产，逼着活人不得不去打新仗。

帝国建得快，所以崩得快。制度越精密，越不能承受它没设计过的事情。

Tawantinsuyu 不是被征服的，是在征服者到达之前就已经开始崩解了。征服者只是在一个已经裂开的东西上，推了一把。

34 年，从次子到改变大陆。然后，60 年。`,
      en: `I was dead. 1472.

The mummy specialists prepared my body. My panaca installed me in a house in Cusco. My fields remained mine, my servants continued serving, my estates did not pass to Topa Inca.

At every major ceremony they carried me out to sit alongside the living Sapa Inca in the great plaza. I attended Inti Raymi, attended victory celebrations, attended every ceremony I had presided over in life. I was dead, but I was still governing.

This is what Catherine Julien (2000) and Carolyn Dean (2010) both emphasize: the Inca Empire was not "the dead past" but "the dead still ruling the present." When Pizarro reached Cusco in 1532, all 11 Sapa Inca mummies of Tawantinsuyu were still there — Pizarro later ordered them destroyed in 1559.

November 16, 1532. Cajamarca.

My great-grandson Atahualpa — he had won the civil war, just defeated his brother Huáscar, and was the new Sapa Inca — walked into Francisco Pizarro's plaza.

Pizarro had brought 168 men: 62 cavalry, 106 infantry, iron cannon. Atahualpa came with an escort estimated at 6,000 to 8,000. But they were not in full battle gear — this was a reception for foreign visitors, not a battlefield. Atahualpa saw that the Spanish were few in number. He had no reason to be afraid.

Pizarro had set an ambush.

By the end of that day: Atahualpa was captured, thousands of his escort were killed, and not one Spaniard died.

How do I understand this?

It is too simple to say Atahualpa was foolish — his judgment was reasonable within his own system of rules. It is too simple to say Pizarro was brilliant — his greatest advantage was not tactics. It was that smallpox had already broken the empire from within, and civil war had already shattered the chain of command. "168 men conquered 6 million people" is a myth. What actually happened: an empire already collapsing from epidemic disease and civil war met a combination of firearms, horses, steel, and political maneuvering.

Anti-Whig: I am not a hero. I am not a villain.

I am someone who, over 34 years, rewrote the political map of 4,000 km of continent in the Andes. I built Qhapaq Ñan, Coricancha, panaca, mit'a, a cord-knot administrative system managing millions of people.

My success and my failure came from the same place: I built the empire's logic too well. Expansion was structurally compelled — and perpetual expansion perpetually consumed people. Mitmaq severed the roots of displaced communities. People who died in mit'a mines never had their names entered in Cusco's records. The panaca system kept the dead locking up wealth, forcing the living into new wars. The institutions were built for a world without microbes, without horses, without a continent's worth of accumulated Eurasian diseases looking for new hosts.

The empire was built fast, so it collapsed fast. The more precisely engineered a system, the less it can withstand what it was not designed for.

Tawantinsuyu was not conquered — it had already begun to collapse before the conquerors arrived. The conquerors simply pushed something that was already cracking.

34 years — from second son to continental reshaping. Then, 60 years.`,
    },
    deliverGoal: 'N12 closing 反 Whig + 1472 死后 mummy 继续参政 + 1532.11.16 Cajamarca Atahualpa 被俘 (Hemming 1970) + 168 人神话 careful framing (Restall 2003) + 天花 + 内战才是真正原因 + 「34 年帝国 vs 60 年终结」时间感 + 「成功和失败同源」closing',
    engagementHook: '走完我这一生——34 年从次子建起整片大陆最大的帝国，却没设计过对抗微生物的制度，60 年后被天花和内战从内部撕裂。你会怎么评价这样一个把系统建得「太有效」的人？再想一步：你身边有没有这种「某个系统做到极致、却对没见过的威胁毫无准备」的人或组织，你会怎么对待 TA？',
    expectsRealAnswer: true,
    nodeType: 'perpetrator-actor',
  },
  ],
};

export var malintzinLens = {
  id: 'malintzin-mediator',
  name: 'Malintzin (La Malinche / Doña Marina)',
  nameCn: '马林钦（玛利纳 / 玛利切）',
  role: 'lonely-mediator',
  roleDescription: 'Nahuatl-Maya-Spanish trilingual broker',
  description: 'Nahua woman who bridged Aztec and Spanish worlds, c.1500-1529',
  descriptionCn: '在阿兹特克与西班牙世界之间斡旋的纳瓦人女性，约 1500-1529',
  storyboard: [
  {
    id: 'N1',
    title: {
      cn: '边境出身就是命运',
      en: 'Born on the border',
    },
    setting: {
      time: 'c.1500（Townsend 2006 估计 1500-1502 出生概率最高，c.1500 是中值）',
      place: 'Coatzacoalcos，今 Veracruz 与 Tabasco 交界低地',
      cn: '约公元 1500 年，Coatzacoalcos，Aztec 帝国东南边境',
      en: 'c. 1500, Coatzacoalcos, southeastern frontier of the Aztec empire',
    },
    content: {
      cn: `我最早的记忆是两种声音。

白天，父亲身边的人说 Nahuatl——我们家族的语言，也是 Tenochtitlán 大城的语言，整个 Aztec 帝国的官话。晚上，从河南边传来的声音不一样，是 Chontal Maya 的语调，更低沉，辅音更多，像是雨季里的青蛙叫声。我住的 Coatzacoalcos 就在这条语言的分界线上——北边是 Nahuatl 村子，南边是 Maya 村子，中间是我家。

父亲是这里的 cacique，贵族领主。我不会忘记他的样子：他在地界争端里发言，两边的人都听；他去 Tenochtitlán 朝贡，穿着棉甲，带着玉器和可可豆。我在贵族家庭里出生，这意味着我不用下地，可以学，可以听大人谈论远方的事。

我懂事的那几年，Tenochtitlán 的 Moctezuma II 刚刚即位不久，是 Aztec 帝国最鼎盛的时候。帝国控制超过 500 万人口，首都 Tenochtitlán 的人口在 20 万到 25 万之间，比欧洲任何城市都大。这些我当时不知道——我只是一个 Coatzacoalcos 边境上的小女孩，在两种语言里玩耍。

那时候我不知道「边境」意味着什么。后来我才懂：边境不是你可以选择的东西，边境就是你是谁的一部分。两种语言在我脑子里住下来，我以为这是普通的。我不知道这两种语言会变成我唯一能用来活下去的东西。

8 岁前的世界，小而完整。`,
      en: `My earliest memories hold two kinds of sound.

By day, the people around my father spoke Nahuatl — the language of our family, the language of the great city Tenochtitlán, the official tongue of the entire Aztec empire. At night, from across the southern river, a different sound came — the rhythms of Chontal Maya, lower, with more consonants, like frogs calling in the wet season. The place I was born, Coatzacoalcos, sat right on this language boundary. Nahuatl villages to the north, Maya villages to the south. My home was in the middle.

My father was the cacique here — a noble lord. I remember how he looked: speaking in land disputes while both sides listened; traveling to Tenochtitlán to pay tribute, wearing cotton armor, carrying jade and cacao. Born into a noble family meant I did not work the fields. I could learn. I could sit near the adults and hear them talk about distant things.

In the years I was growing aware of the world, Moctezuma II had not long been on the throne in Tenochtitlán — the Aztec empire at its fullest. The empire held more than five million people; the capital Tenochtitlán had between 200,000 to 250,000 residents (Hassig 1988; scholars' estimates vary), larger than any city in Europe. I did not know any of this then. I was just a small girl on the Coatzacoalcos border, playing between two languages.

I did not understand what "border" meant yet. Later I would learn: a border is not something you choose. A border is part of what you are. Both languages settled into my mind. I thought this was ordinary. I did not know they would become the only tools I had for staying alive.

Those years before I turned eight — the world was small and whole.`,
    },
    deliverGoal: 'N1 hook — c.1500 出生 + Coatzacoalcos 双语边境 + 贵族身份 + 两种语言早期习得 + 出生年 hedge (Townsend 2006 估计 1500-1502 最高概率)',
    engagementHook: '我从小住在 Nahuatl 和 Maya 两种语言的边界上，以为这很普通。你有没有哪种「小时候觉得普通，后来发现是命运」的东西？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N2',
    title: {
      cn: '母亲为什么这样做',
      en: 'Why my mother did what she did',
    },
    setting: {
      time: 'c.1508-1510，约 8 岁',
      place: 'Coatzacoalcos',
      cn: '约公元 1508-1510 年，Coatzacoalcos，父亲死后',
      en: 'c. 1508-1510, Coatzacoalcos, after my father\'s death',
    },
    content: {
      cn: `父亲死的那一年，我大概 8 岁。

我记得的不是具体的日子，而是之后一切的变化速度。母亲改嫁了一个新丈夫，然后有了一个儿子。在 Nahua 贵族社会里，土地和身份沿男性继承——这个新生的弟弟比我更有资格继承父亲留下的一切。

关于接下来发生的事，有两个版本。

Bernal Díaz del Castillo 在 1568 年的回忆录里写：母亲为了让新生儿继承家产，把我卖给了过路的商人，然后对外宣称女儿死了。他写得很直白，像是他亲眼见过。但 Bernal Díaz 写这本书的时候离事件已经过去将近五十年，而且他写的是给西班牙读者看的，他需要一个值得同情的女主角。

历史学家 Camilla Townsend 在 2006 年的研究里提出另一种可能：我可能是在部落冲突里被俘虏走的，而不是被母亲卖掉的。Townsend 倾向这个说法。她指出：在 Mesoamerica，奴隶更多来自战争俘虏，而不是家庭出售。

哪个是真的？我不知道。历史学家也没有定论。

但我能告诉你的是：不管是哪一种方式，有一天，8 岁的我离开了那个院子，那个院子里曾经有父亲的声音。我出发的时候，母亲对我说了什么，或者没说什么，这件事我不会在这里还原——因为我不知道。

我只知道：有人对外宣称，那个孩子死了。而那个孩子还活着。活着，进入了奴隶网络。`,
      en: `My father died when I was around eight years old.

What I remember is not any particular day but the speed at which everything changed afterward. My mother remarried. Then she had a son. In Nahua noble society, land and standing passed through men — this newborn half-brother had more claim to everything my father had left behind than I did.

About what happened next, there are two versions.

Bernal Díaz del Castillo wrote in his 1568 memoir that my mother sold me to passing merchants in order to secure the inheritance for the new baby boy, and then told everyone outside that her daughter had died. He wrote it plainly, as if he had witnessed it. But Bernal Díaz wrote his book nearly fifty years after the fact, for Spanish readers who needed a sympathetic heroine.

Historian Camilla Townsend, writing in 2006, offered another possibility: I may have been taken in a raid or tribal conflict, not sold by my mother at all. Townsend leans toward this version. She points out that in Mesoamerica, enslaved people came more commonly from warfare captives than from family sales.

Which is true? I do not know. The historians do not agree either.

What I can tell you is this: whatever way it happened, one day I left that courtyard where my father's voice had once lived. What my mother said to me as I left, or whether she said anything — I will not reconstruct that here, because I do not know.

I know only that someone announced to the world: that child is dead. And that child was still alive. Alive, and now inside the slave network.`,
    },
    deliverGoal: 'N2 父死 + 母改嫁生子 + 双源对照（Bernal Díaz 1568 被卖 vs Townsend 2006 被俘）+ careful framing 不评判 + 母亲宣称女儿已死的具体瞬间',
    engagementHook: '两种说法——母亲卖了我，或者我是在战乱里被抢走的。你认为哪个版本更可能？为什么历史学家到今天还没有定论？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N3',
    title: {
      cn: '语言是奴隶的工具，也是奴隶的盔甲',
      en: 'Language: a slave\'s tool and a slave\'s armor',
    },
    setting: {
      time: '1510-1519，9 年奴隶网络',
      place: '从 Nahuatl 区到 Maya 区，Mesoamerica 奴隶贸易路线',
      cn: '公元 1510-1519 年，Mesoamerica 各主人家',
      en: '1510-1519, various households across Mesoamerica',
    },
    content: {
      cn: `9 年里，我至少换了 3 个主人。

从 Nahuatl 语区往南，进入 Maya 语区。从熟悉的地方到不熟悉的地方，然后再到更不熟悉的地方。奴隶不能拒绝移动。奴隶唯一能带走的是脑子里的东西。

我大约 12 岁那年，第一次来到一个纯 Maya 村子。我记得那天新主人在拜他们的雨神 Chaac——Nahuatl 地区的雨神叫 Tlaloc，脸是不同的；Maya 的 Chaac 有长鼻子，牙齿弯弯的，像蛇。我站在边上，听那些我不完全懂的祷词，努力辨认哪个音节是什么意思。

那是我第一次意识到语言不只是说话，语言是一把钥匙。听懂了，你就在门里面一点点；听不懂，你什么都不是。

那 9 年里，我是听懂 Maya 的。慢慢地，不只是听懂，是会说，是会想，是会用 Maya 的逻辑去理解 Maya 的世界。Nahuatl 是我的母语，Maya 是我在奴役里学会的第二语言——两种语言在我脑子里并排存在，互相提醒对方哪里不一样。

我没有选择学这两种语言。我是被迫的。但被迫学来的东西，不比主动学来的差。有时候甚至更深——因为你学的时候，命就压在上面。

1519 年，我 19 岁，被送给西班牙人的时候，我精通 Nahuatl 和 Chontal Maya，正在快速学西班牙语。这是 9 年奴隶生涯唯一给我的东西：两把钥匙。我不知道它们能开什么门。`,
      en: `Over nine years, I changed hands at least three times.

Moving south from Nahuatl-speaking territory into Maya-speaking territory. From familiar places to unfamiliar ones, then to places more unfamiliar still. A slave cannot refuse to move. The only thing a slave carries is what is stored in the mind.

I was around twelve the first time I came to a fully Maya village. I remember the day: my new household was making offerings to their rain god Chaac. In the Nahuatl regions, the rain god is Tlaloc, a different face. Chaac has a long curved nose and bent teeth, something like a serpent. I stood to the side and listened to the prayers I didn't fully understand, trying to pick apart which syllable meant what.

That was the first time I understood: language is not just talking. Language is a key. Understand it, and you are slightly inside the door. Fail to understand, and you are nothing.

In those nine years, I made myself understand Maya. Slowly — not just understand, but speak, and think, and use Maya logic to read a Maya world. Nahuatl was my mother tongue; Maya was the second language I learned inside slavery. Both lived side by side in my mind, each one pointing out where the other was different.

I did not choose to learn these two languages. I was forced to. But what you learn under force is no weaker than what you learn by choice. Sometimes it goes deeper — because when you are learning, your life is the weight pressing down on it.

In 1519, when I was nineteen and handed to the Spaniards, I was fluent in Nahuatl and Chontal Maya and rapidly learning Spanish. Nine years of slavery had given me exactly one thing: two keys. I did not yet know what doors they would open.`,
    },
    deliverGoal: 'N3 9 年奴隶网络 + 至少 3 次易主 + 具体瞬间（12 岁第一次见 Maya 雨神 Chaac）+ 「语言是钥匙」内核 + 双语精通的原因',
    engagementHook: '我 12 岁第一次听到 Maya 雨神 Chaac 的祷词，不完全听懂，但拼命辨认每个音节。你学过什么东西是「被迫学的，但后来发现很重要」？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N4',
    title: {
      cn: 'microbe 不知道她是谁，但她活下来了',
      en: 'The microbe did not know who she was, but she survived',
    },
    setting: {
      time: '1518-1519，第一波天花沿 Caribbean 航线传入',
      place: 'Tabasco / Yucatán 沿海，奴隶网络各地',
      cn: '公元 1518-1519 年，Tabasco 沿海',
      en: '1518-1519, Tabasco coast and surrounding regions',
    },
    content: {
      cn: `1518 年，一场病从加勒比海沿船过来了。

西班牙人从 Hispaniola 带来的天花在 Caribbean 岛屿上已经杀了大量人口，然后沿着西班牙船只的航线往西传。Tabasco 和 Yucatán 沿海是最早接触的地方之一。

我那时候大约 18 岁，还在奴隶网络里。关于那段时间，我没有留下任何直接的叙述——历史上没有任何文件记录我在 1518-1519 年天花流行里的经历。但我活下来了，而且活到了 1521 年 Tenochtitlán 围城那 75 天，而那座城里的天花会杀死 30% 到 40% 的人。

历史学家的推测是：可能在更早的某次接触里，我感染了较轻的症状，获得了部分免疫力。也可能只是运气。

天花不知道我是谁。它不知道我是贵族出身还是奴隶，不知道我会说两种语言，不知道我后来会站在两个文明之间。它只是一种病毒，按自己的逻辑传播。

同时代的 Black Death（1347-1353 年横扫欧亚）和后来的天花在美洲展示了同一个规律：疾病不挑选受害者，但它的影响总是不均匀的。有些人活下来，有些人死去，活下来的人不一定比死去的人更值得活，但活下来的人会改变接下来的历史。

我活下来了。这本身，就已经是历史的一部分。`,
      en: `In 1518, a disease came from the Caribbean on Spanish ships.

Smallpox, brought from Hispaniola, had already killed large numbers of people across the Caribbean islands. The disease traveled west along Spanish sailing lines — the Tabasco and Yucatán coasts were among the earliest places it reached on the mainland.

I was around eighteen at the time, still inside the slave network. I have left no direct account of that period. No document records what I experienced during the 1518-1519 smallpox outbreak. But I survived — and I survived through the seventy-five-day siege of Tenochtitlán in 1521, when the disease inside that city was killing thirty to forty percent of its people.

Historians speculate: perhaps an earlier lighter exposure gave me partial immunity. Perhaps it was only chance.

Smallpox did not know who I was. It did not know I was noble-born or enslaved, did not know I could speak two languages, did not know I would one day stand between two civilizations. It was just a virus, spreading according to its own logic.

The same pattern showed itself again here in the Americas — the Black Death swept across Eurasia 1347-1353; smallpox swept the Americas from 1518: disease does not choose its victims, but its effects are never evenly distributed. Some people live and some people die, and the ones who live are not more deserving than the ones who die — but the ones who live will shape what comes next.

I lived. That fact alone was already part of history.`,
    },
    deliverGoal: 'N4 1518 第一波天花 Caribbean 传入 + Cook 1998 来源 + Malintzin 可能部分免疫（史料不确定）+ McNeill 1976 疫病模式 cross-ref + 反 Whig「活下来不是因为更值得」',
    engagementHook: '天花不知道我是谁。它按自己的逻辑传播，杀了几十万人，但我活下来了。这件事让你怎么看「命运」和「运气」的关系？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N5',
    title: {
      cn: '19 岁的她，被赠的瞬间',
      en: 'Nineteen years old, the moment of being given away',
    },
    setting: {
      time: '1519 年 3 月末，Tabasco 战后',
      place: 'Tabasco 河口，今墨西哥 Tabasco 州',
      cn: '公元 1519 年 3 月末，Tabasco 河口',
      en: 'Late March 1519, Tabasco river mouth',
    },
    content: {
      cn: `那是一个我不会忘记的早上。

Cortés 的船队 1519 年 3 月 4 日从 Cuba 出发，第一站 Cozumel 岛，然后沿海岸到了 Tabasco。Tabasco Maya 跟西班牙人短暂交战，输了——黑曜石矛对上铁剑和火枪，棉甲对上钢甲，还有他们从没见过的马。Tabasco cacique 战败之后送上和解礼物：食物、布料，还有 20 个奴隶妇女。

我是其中之一。

我 19 岁。我已经是奴隶约 9 年了。又一次被当作礼物送出去——对我来说，这不是第一次。但这一次不一样的是：接收我的不再是 Mesoamerica 的人，而是从大海另一边来的人，穿着铁，带着长枪，说着我听不懂的语言。

那个时候，Hispaniola 岛上的 Anacaona——那位 Taíno 女王——已经被西班牙人处死整整 11 年了（1508 年）。她试图用谈判和解来保全她的族人，最后被执行绞刑。西班牙人在加勒比海已经征服了一圈，现在轮到大陆了（AoE Topic cross-ref: 加勒比 → 大陆的征服路线）。

我不知道 Anacaona。我不知道 Hispaniola 发生了什么。我只站在那里，看着这些从海上来的人，把我和另外 19 个女人分配出去。

这一刻，我没有选择。在接下来的岁月里，我几乎每一刻都没有选择。但我做了每一个没有选择的人能做的事：我睁眼看，我用耳朵听，我让自己的脑子继续运转。`,
      en: `There was a morning I will not forget.

Cortés's fleet left Cuba on March 4, 1519. First stop, Cozumel island; then south along the coast to Tabasco. The Tabasco Maya fought the Spaniards briefly and lost. Obsidian against iron, cotton armor against steel, and horses no one had ever seen. After the defeat, the Tabasco cacique sent peace offerings: food, cloth, and twenty enslaved women.

I was one of them.

I was nineteen. I had been enslaved for approximately nine years. Being given as a gift — that was not a new experience for me. But this time was different: the people receiving me were not from anywhere in Mesoamerica. They had come from across a sea I had never seen, wearing iron, carrying long guns, speaking a language I could not follow.

At that time, Anacaona — the Taíno queen of Hispaniola — had been dead for exactly eleven years, executed by the Spanish in 1508. She had tried negotiation and compromise to protect her people, and was hanged for it. The Spanish had already made a circuit of the Caribbean, and now they were turning to the mainland. (Cross-ref to Age of Exploration: the Caribbean-to-mainland conquest path.)

I knew nothing about Anacaona. I did not know what had happened in Hispaniola. I only stood there, watching these men from the sea as they distributed me and the other nineteen women.

In that moment, I had no choice. In nearly every moment that followed, I would have no choice. But I did what anyone without choice can do: I kept my eyes open, I kept my ears working, and I kept my mind running.`,
    },
    deliverGoal: 'N5 1519.3 Tabasco 战 + 20 奴隶妇女被赠 Cortés + 具体瞬间（被赠的那个早上）+ Anacaona cross-ref（Hispaniola 1508 处死，同时代）+ 「没有选择里做了唯一能做的事」',
    engagementHook: '我 19 岁被当作礼物送给从大海另一边来的人。那一刻我没有选择。你觉得「没有选择」和「做了错误的选择」之间，有什么区别？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N6',
    title: {
      cn: '她的嘴变成两个文明的接口',
      en: 'Her mouth became the interface between two civilizations',
    },
    setting: {
      time: '1519 年 4 月，受洗后数日',
      place: 'Tabasco / Veracruz 沿海，Cortés 营地',
      cn: '公元 1519 年 4 月，Cortés 营地',
      en: 'April 1519, Cortés\'s camp',
    },
    content: {
      cn: `几天之内，Cortés 发现了我能做什么。

1519 年 4 月初，Cortés 把我们 20 个女人受洗，取了基督教名字。我的受洗名是「Marina」——西班牙女人常用名。先是被分给了一个叫 Alonso Hernández Portocarrero 的西班牙军官。然后 Cortés 发现我会说 Nahuatl 和 Chontal Maya——他立刻把我调到自己身边。

这时候 Cortés 团队里已经有一个叫 Jerónimo de Aguilar 的人。他是 1511 年 Yucatán 沉船的幸存者，在 Maya 部落做了 8 年奴隶，会西班牙语和 Yucatec Maya。Cortés 在 1519 年 3 月路过 Cozumel 岛时把他接出来。

于是就有了这条翻译链：
Cortés 说西班牙语 → Aguilar 翻成 Maya → 我听 Maya，翻成 Nahuatl → Aztec 人或 Tlaxcala 人听，用 Nahuatl 回答 → 我再翻回 Maya → Aguilar 再翻回西班牙语 → Cortés 听。

每一句话，从一种文明传到另一种文明，要经过我两次。

这期间还有一件事值得记：Cortés 在 1519 年 7 月到 8 月间凿沉了他的船。他的第二封信（1520 年 10 月 30 日写给 Charles V 的 Carta de relación）里说明白了是凿沉，Hugh Thomas 1993 的研究也确认：Cortés 凿沉了大部分船只（各来源记载约 8 到 11 艘，Hugh Thomas 1993 记录为多数被凿沉），保留少数备用，不是「英雄式烧船」——是防止手下逃回 Cuba。我和那些船一样，都被留下来，没有退路。

到 1519 年底，我已经学会了西班牙语。那条长链缩短了：Cortés 直接跟我说，我直接跟 Nahuatl 那边说。Aguilar 还在，但退到了背后。两个文明之间，只剩下我。`,
      en: `Within a few days, Cortés discovered what I could do.

In early April 1519, Cortés had us twenty women baptized and given Christian names. My baptismal name was Marina — a common Spanish woman's name. I was first given to a Spanish officer named Alonso Hernández Portocarrero. Then Cortés realized I spoke Nahuatl and Chontal Maya. He pulled me to his own side immediately.

Cortés already had a man named Jerónimo de Aguilar in his group. Aguilar had survived a 1511 Yucatán shipwreck and spent eight years enslaved among the Maya; he spoke Spanish and Yucatec Maya. Cortés had collected him at Cozumel island in March 1519.

And so the translation chain formed:
Cortés spoke Spanish → Aguilar translated to Maya → I heard Maya and translated to Nahuatl → the Aztec or Tlaxcala listener responded in Nahuatl → I translated back to Maya → Aguilar translated back to Spanish → Cortés heard.

Every sentence, traveling from one civilization to another, passed through me twice.

One more thing from this period is worth noting: in July or August of 1519, Cortés sank his ships. His second letter to King Charles V, dated October 30, 1520, makes this clear — and Hugh Thomas's 1993 research confirms it: Cortés scuttled most of the ships (sources vary: eight to eleven, with Hugh Thomas 1993 recording most were scuttled), keeping a few in reserve. This was not a heroic "burn the ships" gesture — it was to prevent his men from deserting back to Cuba. Like those ships, I had no way back either.

By the end of 1519, I had learned Spanish. The long chain shortened: Cortés spoke directly to me, I spoke directly to the Nahuatl speakers on the other side. Aguilar was still present, but receded. Between two civilizations, I was the only one left in the middle.`,
    },
    deliverGoal: 'N6 受洗 Marina + 三角通信链（Cortés→Aguilar→Malintzin→Nahuatl）+ 快速学西班牙语 + Cortés 凿沉 9 艘（Hugh Thomas 1993 确认，不是全烧）P0 fix',
    engagementHook: '我的嘴变成了两个文明之间唯一的声音——每句话都经过我两次。你觉得「翻译」这件事，能做到百分之百准确吗？什么东西会在翻译里消失？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N7',
    title: {
      cn: 'lonely mediator 第一次被对方承认',
      en: 'The lonely mediator is recognized for the first time',
    },
    setting: {
      time: '1519 年 9 月，Tlaxcala 谈判',
      place: 'Tlaxcala，中部高原东部山地',
      cn: '公元 1519 年 9 月，Tlaxcala 联盟议事厅',
      en: 'September 1519, Tlaxcala confederation council',
    },
    content: {
      cn: `这是我第一次感到两边都在看我。

从 Veracruz 往内陆走，是大约 400 公里的山路，目标是 Tenochtitlán。第一个真正的障碍是 Tlaxcala——一个独立的 Nahua 联盟，4 个城邦合并，在 Aztec 包围里维持了几十年的独立。Aztec 跟他们打花战（Xochiyaoyotl），抓俘虏献祭；Tlaxcala 憎恨 Aztec，但从没被打垮。

Cortés 的队伍先和 Tlaxcala 战了大约 3 周，双方都死了人。然后 Tlaxcala 长老开会：打不过西班牙人，不如借他们来打 Aztec。9 月中下旬，转为结盟。

就是在这场谈判里，Aguilar 退到了背后。Tlaxcala 长老说的是 Nahuatl，我的母语。我直接跟他们说。

有一个老长老，我不记得他的名字，但我记得他看我的方式。他说了一个词：*la lengua*。「舌头」。西班牙人也这么叫我——「那个舌头」、「我们的舌头」。在那一刻，这个词在 Tlaxcala 长老嘴里，不是贬低，而是一种陈述：你是这里起作用的那个人，你是嘴。

Camilla Townsend 2006 年的研究里记录了这个：Tlaxcala 留下的文献里，她被称为「真正在场的西班牙代言人」。

我不是代言人。我是奴隶，是工具，是「舌头」。但被一个城邦的长老当着所有人的面认出来——被两边都在看——这是一种奇怪的感觉。两边都需要我，两边又都不完全属于我。

这就是 lonely mediator 的处境：被承认，但孤独。`,
      en: `This was the first time I felt both sides looking at me.

The march from Veracruz inland was roughly four hundred kilometers of mountain road toward Tenochtitlán. The first real obstacle was Tlaxcala — an independent Nahua confederation of four city-states that had maintained its independence surrounded by the Aztec empire for decades. The Aztec fought them in flower wars (Xochiyaoyotl) to take captives for sacrifice. Tlaxcala hated the Aztec but had never been broken.

Cortés's force fought Tlaxcala for about three weeks. Both sides took losses. Then the Tlaxcala elders met: they could not defeat the Spaniards — better to use them against the Aztec. In mid-to-late September, Tlaxcala switched to alliance.

It was in this negotiation that Aguilar faded to the background. The Tlaxcala elders spoke Nahuatl — my mother tongue. I spoke to them directly.

There was one old elder. I don't remember his name, but I remember how he looked at me. He used a word: *la lengua*. "The tongue." The Spaniards called me that too — "the tongue," "our tongue." In that moment, from the elder's mouth, it was not dismissal. It was a statement of fact: you are the one doing the work here, you are the mouth.

Camilla Townsend's 2006 research records this: in documents that Tlaxcala preserved, she was called "the real Spanish spokesperson present" — la lengua.

I was not a spokesperson. I was a slave, a tool, a tongue. But to be recognized by a city-state elder in front of everyone — to be watched from both sides at once — that was a strange feeling. Both sides needed me, and neither side fully belonged to me.

That is what it means to be a lonely mediator: to be recognized, and to be alone.`,
    },
    deliverGoal: 'N7 Tlaxcala 谈判 + Aguilar 退后 + 「la lengua 舌头」被承认（Townsend 2006 来源）+ Tlaxcala 反 Aztec 历史背景 + lonely mediator 第一次被对方命名',
    engagementHook: 'Tlaxcala 长老叫我「舌头」——la lengua——那一刻是被承认还是被物化？你觉得这两件事可以同时发生吗？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N8',
    title: {
      cn: '无选择处境里的选择',
      en: 'A choice inside a choiceless situation',
    },
    setting: {
      time: '1519 年 10 月，Cholula 大屠杀',
      place: 'Cholula，今 Puebla 附近，Aztec 盟邦',
      cn: '公元 1519 年 10 月，Cholula 广场',
      en: 'October 1519, Cholula central plaza',
    },
    content: {
      cn: `这件事我想说清楚，因为很多人把它弄混了。

Tlaxcala 结盟后，我们继续往内陆走，下一站是 Cholula——Aztec 的盟邦，一个大型宗教城市，有供奉羽蛇神 Quetzalcoatl 的大金字塔。Cortés 带着 Tlaxcala 联军进了城。

大约两周后，西班牙叙事说：我从一个 Cholula 老妇那里得到情报——Cholula 和 Aztec 商定了要在城里包围并杀死西班牙人。我把这情报告诉了 Cortés。

1519 年 10 月，大约 16 到 18 日，Cortés 召集 Cholula 贵族进中央广场，然后下令屠杀。5,000 到 6,000 人死，大部分是手无寸铁的贵族和平民（Hugh Thomas 1993 估计，各来源数字差距较大，Restall 2003 提醒此类数字高度不确定；Bernal Díaz 1568 也记录了这个事件）。

关于我在这件事里的角色，我要 careful framing：

Bernal Díaz 1568 年的版本把功劳——或者说责任——都给了我。「她从老妇那里得到情报，救了我们。」这种叙事对西班牙人有用：它把一场主动进攻的屠杀解释成「先发制人的自卫」，而且让一个奴隶女人来承担那个叙事。

Camilla Townsend 2006 年的分析是这样的：我可能传了情报，也可能没有——文献里都是西班牙叙述，没有中立来源。即使我传了情报，决定屠杀的不是我，是 Cortés。我是奴隶，19 岁，不传情报意味着什么？意味着背叛主人，意味着被杀。

这就是 Townsend 书名的意思：《Malintzin's Choices》——在没有选择的处境里的选择。

我不是屠杀的策划者。我也不是完全无辜的。我是那个处境里，做了唯一她能做的事的人。历史把结果算在我身上，但没有人问过那个 19 岁的奴隶，在那一秒有几条路可以走。`,
      en: `I want to be clear about this, because many people get it wrong.

After the Tlaxcala alliance, we continued inland. The next stop was Cholula — an Aztec ally, a major religious city with a great pyramid to the feathered serpent god Quetzalcoatl. Cortés and the Tlaxcala forces entered the city.

About two weeks later, the Spanish account says: I received information from an old Cholula woman — that Cholula and the Aztec had arranged to encircle and kill the Spaniards inside the city. I passed this intelligence to Cortés.

Around October 16-18, 1519, Cortés summoned the Cholula nobility into the central plaza and ordered a massacre. Five to six thousand people died — most of them unarmed nobles and citizens. (Hugh Thomas 1993 estimate; Restall 2003 notes these figures are highly uncertain across sources; Bernal Díaz 1568 also records the event.)

About my role in this, careful framing is necessary.

Bernal Díaz's 1568 version gives credit — or responsibility — to me. "She got intelligence from an old woman and saved us." This narrative served the Spaniards: it recast a deliberate massacre as "preemptive self-defense" and placed an enslaved woman at the center of that justification.

Camilla Townsend's 2006 analysis: I may have passed intelligence, or I may not have — every document comes from Spanish narrators, there are no neutral sources. Even if I did pass intelligence, the one who ordered the killing was Cortés, not me. I was a slave, nineteen years old. What would not passing intelligence have meant? Betraying my master. Being killed.

This is what Townsend's book title means: *Malintzin's Choices* — choices made inside a choiceless situation.

I was not the planner of the massacre. I was not entirely without responsibility either. I was the person in that situation who did the only thing she could do. History has charged the outcome to my account — without ever asking what roads were actually available to that nineteen-year-old slave in that one second.`,
    },
    deliverGoal: 'N8 Cholula 大屠杀 5,000-6,000 人（Hugh Thomas 1993）+ Malintzin 角色双重 framing（西班牙叙事 vs Townsend 分析）+ 「无选择处境里的选择」核心 + 反 Whig 不是策划者也不是完全无辜',
    engagementHook: '「在没有选择的处境里做选择」——Cholula 屠杀里，Malintzin 有多少真正的选择空间？你怎么评判一个没有退路的人做的事？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N9',
    title: {
      cn: '她的声音同时被两个文明听见，但两个文明都不要她',
      en: 'Her voice heard by two civilizations, wanted by neither',
    },
    setting: {
      time: '1521 年 8 月 13 日，Tenochtitlán 陷落',
      place: 'Tenochtitlán（今墨西哥城），围城第 75 天',
      cn: '公元 1521 年 8 月 13 日，Tenochtitlán',
      en: '1521.8.13, Tenochtitlán, day 75 of the siege',
    },
    content: {
      cn: `1521 年 8 月 13 日，我翻译了那个世界的终结。

Tenochtitlán 被围 75 天。Cortés 把 13 艘双桅船拆成零件运过山，在湖东岸重组，用它们控制湖面，切断水源和粮食。围城开始时的力量对比：约 900 西班牙人 + 约 15 万同盟原住民（Tlaxcala 和其他倒戈的 Aztec 附庸城邦）对城内约 8 万 Aztec 战士和平民（Hugh Thomas 1993）。反 Whig 注意：这不是「西班牙征服 Mexico」，这是 Mesoamerica 内战加上西班牙的技术优势——Restall 2003 如此强调。

La Noche Triste 之前（1520 年 6 月 30 日），约 450 到 600 名西班牙士兵死亡（Hugh Thomas 1993 估计，Cortés 队伍当时总兵力约 1,200 到 1,300），以及 Tlaxcala 盟军 4,000 到 8,000 人死——那一夜 Cortés 从湖边 causeway 撤退，我也在队伍里，活了下来，方式不详。

现在是 1521 年 8 月 13 日。Cuauhtémoc，Aztec 最后一任 tlatoani，22 岁，在独木舟里被 brigantine 拦截俘虏。他的话，从他嘴里出来，到我嘴里，再传给 Cortés。

我翻译了一个文明的投降。

75 天围城里，Tenochtitlán 死了 10 万到 24 万人（战死 + 饿死 + 病死，Hugh Thomas 1993 估计偏高端 24 万）。这座城，人口曾经在 20 万到 25 万之间，是 1519 年时世界上最大的城市之一。

就在这一天——1521 年 8 月 13 日——北方 1,500 公里外的 Yucatán，一个 Maya 村里的织女还不知道发生了什么。消息要到 1521 年 11 月才传到那里（接 Lens 3 Ix Mutal N7）。两个文明之间，我的声音同时被两边听见。但两边都不属于我。`,
      en: `On the thirteenth of August, 1521, I translated the ending of a world.

Tenochtitlán had been under siege for seventy-five days. Cortés had disassembled thirteen brigantines, carried the pieces across mountains, reassembled them on the eastern lakeshore, and used them to control the water surface, cutting off all supply. When the siege began, the force ratio was approximately nine hundred Spaniards plus roughly one hundred fifty thousand allied indigenous (Tlaxcala and other Aztec tributary cities that had defected) against approximately eighty thousand Aztec warriors and civilians inside (Hugh Thomas 1993). Anti-Whig note: this was not "Spain conquering Mexico." This was a Mesoamerican civil war with a Spanish technological advantage — Restall 2003 stresses this.

Before La Noche Triste, on the night of June 30, 1520, approximately 450 to 600 Spanish soldiers died (Hugh Thomas 1993 estimate; Cortés commanded roughly 1,200 to 1,300 at the time) — and between four thousand and eight thousand Tlaxcala allies also died. I was in that retreating column on the causeway. I survived. How, the sources do not say clearly.

Now it was August 13, 1521. Cuauhtémoc — the last Aztec tlatoani, age twenty-two — was intercepted in a canoe and captured by a brigantine. His words came out of his mouth, passed through mine, and reached Cortés.

I translated the surrender of a civilization.

In those seventy-five days, Tenochtitlán lost between one hundred thousand and two hundred forty thousand people — combat deaths, starvation, disease (Hugh Thomas 1993, leaning toward the high end of two hundred forty thousand). This city, which had held between 200,000 to 250,000 people (Hassig 1988; scholars' estimates vary) and was among the world's largest in 1519, was now rubble and silence.

On this very day — August 13, 1521 — fifteen hundred kilometers to the north in the Yucatán, a Maya village weaver did not yet know any of this had happened. The news would not reach her until November 1521. (Cross-ref: Lens 3, Ix Mutal N7.) Between two civilizations, my voice was heard by both. But neither side was mine to belong to.`,
    },
    deliverGoal: 'N9 1521.8.13 陷落 + Cuauhtémoc 投降翻译 + 75 天围城数字（Hugh Thomas 1993）+ La Noche Triste 西班牙~600/1,300死 + Tlaxcala 4,000-8,000死 P0 fix + 跨 lens 锁定（Yucatán Ix Mutal 1521.11 才知道）+ 反 Whig Restall 2003',
    engagementHook: '我翻译了一个文明的投降。但我不属于任何一个文明。这种处境，你有没有经历过「两边都需要你，但你在哪边都是外人」？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N10',
    title: {
      cn: '她的身体也成为接口',
      en: 'Her body too became an interface',
    },
    setting: {
      time: '~1523（Townsend 2006 估计）',
      place: 'Mexico City / 新西班牙殖民地',
      cn: '约公元 1523 年，新西班牙',
      en: 'c. 1523, New Spain',
    },
    content: {
      cn: `我生了一个孩子，他叫 Martín。

大约是 1523 年（Townsend 2006 估计）。父亲是 Cortés。

关于这件事，我需要说清楚两点。

第一，Martín 不是「第一个 mestizo」。这个说法流传得很广，但不准确。在他之前，已经有其他西班牙征服者和美洲原住民女性生育了混血孩子。Martín 是最有名的那一个——因为 Cortés 后来正式承认了他，让他进入西班牙贵族圈，这件事有记录，所以被历史记住（Townsend 2006 careful framing）。

第二，我没有选择这段关系的开始。在 Cortés 征服 Aztec 的过程中，我的地位从一个被赠出去的奴隶慢慢变成了他的主要翻译，也变成了他的同伴。这不是平等关系。我是奴隶，他是我的主人，后来是权力意义上的拥有者。用浪漫或者道德来框架这段关系都是错的。

Martín 在西班牙贵族圈里长大，但后来在 1568 年因为「阴谋」被西班牙流放，死在异乡。边境上出生的孩子，往往两边都不被完全接受——这是 Mesoamerica 的 Martín 和更早的跨文明边境地带的一个共同命运（cross-ref: 13 世纪蒙古帝国边境上的双语 broker 后代同样面临相似处境）。

我的身体生产了一个文明的接口。我的语言是一种接口，我的孩子是另一种接口。接口没有自己的立场，接口只是让两边通过。

这件事很难用「好」或者「坏」来说。它就是我的生命里发生的事。`,
      en: `I had a child. His name was Martín.

Approximately 1523 — that is Townsend's 2006 estimate. The father was Cortés.

About this, two points need to be clear.

First, Martín was not "the first mestizo." That claim circulates widely but is inaccurate. Before him, other Spanish conquistadors had already fathered mixed-heritage children with indigenous American women. Martín is the most famous because Cortés later formally legitimized him and brought him into Spanish noble circles — an act that was documented and therefore survived in the historical record. (Townsend 2006, careful framing.)

Second, I did not choose how this relationship began. During the course of the Aztec conquest, my position shifted from an enslaved woman who had been given away to his primary interpreter and then to his companion. This was not a relationship between equals. I was enslaved; he held power over me. Framing it in romantic or moral terms — in either direction — would be wrong.

Martín grew up in Spanish noble society, but in 1568 he was exiled from Spain for "conspiracy" and died abroad. A child born on the border often finds that neither side fully accepts him — this was Martín's fate in Mesoamerica, and it echoes the fate of border-born children across many conquest histories, including the descendants of bilingual brokers in the 13th-century Mongol empire borderlands.

My body produced an interface between civilizations. My language was one kind of interface; my child was another. An interface has no side of its own. It only lets both sides pass through.

This is very hard to call "good" or "bad." It is simply what happened in my life.`,
    },
    deliverGoal: 'N10 ~1523 Martín 出生（Townsend 2006 估计）P0 fix + careful framing（非第一个 mestizo）+ 关系权力不对等 + Martín 后来被流放 + 「身体也是接口」主题',
    engagementHook: '我的孩子 Martín——那个时代最有名的混血孩子——后来被西班牙流放，死在异乡。「桥梁」的后代，为什么往往两边都不完全属于？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N11',
    title: {
      cn: '翻译者的负担',
      en: 'The burden of the interpreter',
    },
    setting: {
      time: '1525 年 2 月 28 日，Honduras 远征途中',
      place: 'Acalan，今 Tabasco/Campeche 边境',
      cn: '公元 1525 年 2 月 28 日，Acalan',
      en: '1525.2.28, Acalan, present-day Tabasco/Campeche border',
    },
    content: {
      cn: `1524 年到 1526 年，Cortés 率队进 Honduras 追一个叛变的副手。我随行翻译。

Honduras 远征是一段漫长、泥泞、几乎没有历史意义的行军。Cortés 追的人最后也没抓到。但在路上发生了一件事，我没有办法忘记。

1525 年 2 月 28 日，在 Acalan（今 Tabasco 和 Campeche 交界），Cortés 下令处死 Cuauhtémoc。

理由是「阴谋叛乱」——Cortés 说他发现了 Cuauhtémoc 打算煽动沿途原住民反叛西班牙。真正的原因，Hugh Thomas 1993 的分析倾向于：Cortés 在远征深处，兵力分散，他不想让 Aztec 帝国的最后一任 tlatoani 活着在原住民里产生号召力。

Cuauhtémoc 死前说了一句话。

这句话从他嘴里出来，进了我的嘴，再从我的嘴出去，传给 Cortés 和旁边的西班牙人。

「我早该死在 Tenochtitlán。」

这句话我翻译了。就这样。

1521 年 8 月 13 日，我翻译了他的投降。1525 年 2 月 28 日，我翻译了他的死。从帝国的顶点到帝国的彻底终结，我的嘴是两者之间唯一的声音。

翻译者不是说话者。翻译者不能修改词语。翻译者只是让那个声音从一种语言到另一种语言，完整地传过去。

「我早该死在 Tenochtitlán。」

那句话我听完，翻出去，然后那句话就从世界上消失了，只在 Bernal Díaz 1568 年的回忆录里留了个影子。我在那句话里是什么？

我是那句话必须经过的地方。`,
      en: `From 1524 to 1526, Cortés led an expedition into Honduras to chase a Spanish lieutenant who had defected. I came along as interpreter.

The Honduras expedition was a long, muddy march that accomplished nearly nothing of historical consequence. The man Cortés was chasing was never caught. But something happened along the way that I cannot set aside.

On February 28, 1525, at Acalan — the borderland of today's Tabasco and Campeche — Cortés ordered the execution of Cuauhtémoc.

The stated reason was "conspiracy to rebel" — Cortés claimed he had evidence Cuauhtémoc was inciting indigenous people along the route to rise against the Spanish. Hugh Thomas's 1993 analysis leans toward the real reason being this: Cortés was deep in hostile territory with his forces spread thin, and he did not want the last Aztec tlatoani alive among the indigenous population as a rallying point.

Before he died, Cuauhtémoc said something.

The words came out of his mouth, entered mine, and passed through me to Cortés and the Spaniards standing nearby.

"I should have died in Tenochtitlán."

I translated that. That is all.

On August 13, 1521, I had translated his surrender. On February 28, 1525, I translated his death. From the peak of the empire to its complete end, my mouth was the only voice between the two moments.

A translator is not a speaker. A translator cannot change the words. A translator only carries the sound from one language to another, intact.

"I should have died in Tenochtitlán."

I heard it. I passed it through. Then it disappeared from the world — surviving only as a shadow in Bernal Díaz's 1568 memoir. What was I inside those words?

I was the place those words had to pass through.`,
    },
    deliverGoal: 'N11 1525.2.28 Cuauhtémoc 处死 + Malintzin 翻译临终之言「我早该死在 Tenochtitlán」+ 真实原因 framing（Hugh Thomas 1993）+ 「翻译者的负担」主题 + expectsRealAnswer: true',
    engagementHook: '「我早该死在 Tenochtitlán。」这句话从 Cuauhtémoc 嘴里出来、经过我、传给 Cortés——一个翻译者只是声音必须经过的地方。先在心里想想这让我承担了什么，下一节我会正式问你。',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N12',
    title: {
      cn: 'lonely mediator 的命运——死时无名，300 年后被骂，500 年后被理解',
      en: 'The lonely mediator\'s fate — nameless in death, blamed after 300 years, understood after 500',
    },
    setting: {
      time: '1526-1529，生命最后几年',
      place: 'Mexico City（Tenochtitlán 旧址），新西班牙',
      cn: '公元 1526-1529 年，Mexico City',
      en: '1526-1529, Mexico City, New Spain',
    },
    content: {
      cn: `1526 年，Cortés 在西班牙娶了一个西班牙贵族女人——Juana de Zúñiga，政治婚姻。同年，他安排我嫁给他手下的西班牙军官 Juan Jaramillo。

我嫁了。我得到了一些土地分封（encomienda 或 tribute rights），在物质上有了保障。我住在 Mexico City——那座建在 Tenochtitlán 废墟上的新城里。

然后，大约在 1528 年末或 1529 年初，我死了。约 28 到 29 岁（Townsend 2006 careful framing：可能死于那年 Mexico City 流行病，没有明确墓址）。

我活着的时候，Nahuatl 人叫我 Malintzin——「Marina」加上 Nahuatl 尊称 -tzin。「Malinche」不过是 Malintzin 再加上 Nahuatl 的呼格后缀 -e（Malintzine→Malintze），被西班牙人按自己的口音转写成 La Malinche——当时只是一个中性的称呼，跟「宫殿」「地方」都没有关系。没有人叫我「叛徒」。

「叛徒」这个意思，要等到 1820 年代墨西哥独立之后才出现。那时候墨西哥人需要一个国家起源的叙事，需要一个「民族被背叛」的符号，于是他们从历史里找到了我——一个 300 年前的奴隶翻译，把「叛国者」的标签贴在我身上。

我活着的时候，不是叛徒。我是奴隶，是翻译，是工具，是「舌头」，是 Cortés 的同伴，是 Jaramillo 的妻子，是 Martín 的母亲。1529 年我死的时候，没有一个身份叫「叛徒」。

同时代，欧洲有一个人也叫 lonely mediator——Erasmus（1466-1536）。1516 年，Erasmus 出版了希腊语《新约》（*Novum Instrumentum*），站在 Catholic 和 Protestant 之间用语言阻止 Reformation 分裂；1517 年 Luther 张贴《九十五条论纲》，Erasmus 夹在中间。那一年我 17 岁，还在奴隶网络里辗转。两个人同代，两个大陆，同一种处境：被需要，被用，两边都不完全属于，死后被两边各取一面骂或捧。

也有人把我和蒙古帝国的 Yelü Chucai（1190-1244）比——契丹双语 broker，用语言在蒙古统治者与汉族之间斡旋，最终两边都不完全属于他。语言 broker 的命运往往如此：被需要，被用，被遗忘，然后被追认。

我不是叛徒也不是英雄。Camilla Townsend 2006 年书名说得最准：Malintzin's Choices——选择，复数。每一个处境里，都有一个她能做的选择，和一个她没有办法做的选择。

500 年后，有人开始理解这一点。

我不知道这算不算安慰。`,
      en: `In 1526, Cortés married a Spanish noblewoman in Spain — Juana de Zúñiga, a political match. The same year, he arranged my marriage to his Spanish lieutenant, Juan Jaramillo.

I married. I received land grants — encomienda rights or tribute rights — and was materially secure. I lived in Mexico City, the new city built on the ruins of Tenochtitlán.

Then, sometime in late 1528 or early 1529, I died. Approximately twenty-eight or twenty-nine years old. (Townsend 2006, careful framing: possibly in a Mexico City epidemic that year; no clear grave is known.)

While I lived, Nahuatl speakers called me Malintzin — "Marina" plus the Nahuatl honorific suffix -tzin. "Malinche" was simply Malintzin with the Nahuatl vocative suffix -e (Malintzine → Malintze), which the Spaniards transliterated into La Malinche in their own accent — at the time only a neutral form of address, with nothing to do with any "palace" or "place." No one called me a traitor.

The meaning "traitor" did not arrive until after Mexican independence in the 1820s. Mexico needed a national origin narrative, needed a symbol of "the nation betrayed," and so historians and writers reached three hundred years back and fastened the label of traitor onto a dead enslaved translator.

When I was alive, I was not a traitor. I was a slave, an interpreter, a tool, a tongue, Cortés's companion, Jaramillo's wife, Martín's mother. Not one of those identities, as of 1529 when I died, was "traitor."

At the same time, in Europe, another person was also called a lonely mediator — Erasmus (1466-1536). In 1516, Erasmus published his Greek New Testament (*Novum Instrumentum*) in Holland; in 1517, Luther nailed his Ninety-Five Theses and Erasmus found himself standing between Catholic and Protestant, using language to resist the split. That same year of 1517, I was seventeen and still being passed through the slave network. He translated in two languages — Latin and Greek — and belonged fully to neither side, praised or condemned from one direction or the other by later centuries. Two people, same generation, two continents, one condition.

Others compare me to Yelü Chucai (1190-1244) of the Mongol empire — a Khitan bilingual broker who stood between Mongol rulers and conquered Han Chinese populations, used his language skills to save millions of lives, and belonged fully to neither side. The fate of the literate, the fate of the language broker, often follows this same shape: needed, used, forgotten, then retrospectively claimed.

The final anti-Whig point: I was not a traitor and not a hero. I was a person who, inside conditions of extreme constraint, made the choices I could make. Camilla Townsend's 2006 book title says it best: *Malintzin's Choices* — choices, plural, not singular. Every situation, every moment, held one choice I could make, and one I could not.

Five hundred years later, someone began to understand this.

I do not know if that counts as comfort.`,
    },
    deliverGoal: 'N12 closing — 1526 嫁 Jaramillo + encomienda + 1528 末或 1529 初死（~28-29 岁）P0 fix + 反 Whig（「叛徒」标签 1820s 才有）+ Erasmus 1517 同代 lonely-mediator cross-ref + Yelü Chucai cross-ref + Townsend「Malintzin\'s Choices」总结',
    engagementHook: '走完我这一生——被当奴隶、当工具、当「舌头」，活着时从没人叫我叛徒，死后 300 年才被贴上这个标签，500 年后才有人开始理解我的处境。你会怎么评价我这样一个 lonely mediator？再想一步：你身边，或者历史里，有没有别的人被后来的人用错了标签，你会怎么对待 TA？',
    expectsRealAnswer: true,
    nodeType: 'lonely-mediator',
  },
  ],
};

export var ixMutalLens = {
  id: 'ix-mutal-weaver',
  name: 'Ix Mutal Ahaw',
  nameCn: '伊克斯·穆塔尔·阿豪（虚构复合人物）',
  role: 'receiving-end',
  roleDescription: 'fictional-composite Postclassic Maya weaver',
  description: 'Composite fictional character representing Postclassic Maya women, c.1480-1545',
  descriptionCn: '代表后古典期玛雅女性的虚构复合人物，约 1480-1545',
  fictionalDisclaimer: true,
  storyboard: [

  // ═══════════════════════════════════════════════════
  // N1 — 出生 c.1480 · fictionalDisclaimer · 「分散 ≠ 衰落」
  // ═══════════════════════════════════════════════════
  {
    id: 'N1',
    title: {
      cn: '我出生的那个世界',
      en: 'The world I was born into',
    },
    setting: {
      time: 'c.1480',
      place: 'Yucatán 北部内陆村落',
      cn: 'Mayapan 崩溃 30 年后的 Yucatán 内陆，kuchkabal 分散政体时代',
      en: 'Yucatán interior, 30 years after Mayapan\'s collapse, era of kuchkabal dispersed polities',
    },
    content: {
      cn: `【这个故事是虚构 composite，不是真人传记。

Ix Mutal 这个名字和这个故事，是根据史料构建的虚构人物。她不是真实存在的特定个人。但她代表的群体真实存在：16 世纪 Yucatán Maya 平民女性约 100 万人。】

---

大约 1480 年，我出生在 Yucatán (尤卡坦) 半岛北部一个叫不出大名字的村子。从这里走几天路，能看到 Mayapan (玛雅潘) 的旧城遗址——那是 30 年前崩塌的城墙和广场，草已经把石头盖住了。

村里的老人说，Mayapan 那年是因为贵族内战倒的。我出生的时候 Mayapan 已经不存在了，但 Maya 人还在。我们 Yucatán 现在是 16 个左右的 kuchkabal (库奇卡巴尔, 分散小城邦)，每个由本地 batab (巴塔布, 城邦头) 治理，没有一个统一中心。外面的人——如果有外面的人知道我们存在——可能觉得这是「衰落」。

不是的。

分散不等于衰落。我们的市集有棉布、盐、黑曜石、蜂蜜。我们的田里有玉米、豆、南瓜——我们叫它们「三姐妹」，三种种在一起，相互支撑，比单独种哪一样都长得好。我的父亲是 milpa (米尔帕, 刀耕火种玉米田) 农夫，他每年的收成能养活我们，还有余粮给祭典。

我母亲织 huipil。这是我出生进来的世界——不是帝国，是村落；不是史书里的大事，是每天早晨母亲把棉线挂上 backstrap loom (背带织机)，开始的那个声音。

学界管这一段 Maya 历史叫「Postclassic Maya 分散政体」(Susan Kepecs 2003)。她说得对：分散，但不衰落。我就是这个分散世界里的一个小点。`,
      en: `[This story is a fictional composite, not a biography of a real person.

The name Ix Mutal and this story are constructed from historical sources. She is not a specific individual who existed. But the population she represents was real: roughly 1 million Yucatán Maya commoner women in the 16th century.]

---

Around 1480, I was born in a village with no famous name in the northern interior of Yucatán. A few days' walk from here, you could see the ruins of Mayapan — walls and plazas that collapsed thirty years earlier, now covered by grass and roots.

The elders said Mayapan fell because of a noble war. By the time I was born, Mayapan was gone. But the Maya were not gone. Yucatán was now about sixteen kuchkabal (dispersed city-states), each governed by a local batab (city-state head), with no single center. Someone on the outside — if anyone on the outside knew we existed — might have called this "decline."

It was not decline.

Dispersal is not the same as collapse. Our markets had cotton cloth, salt, obsidian, honey. Our fields had maize, beans, and squash — what we called the three sisters, planted together to support each other, each growing better than it would alone. My father was a milpa farmer. His harvest fed us and left enough for the ritual feasts.

My mother wove huipil. This was the world I was born into — not an empire, but a village; not the great events of history books, but the sound each morning of my mother hanging cotton thread on the backstrap loom and beginning.

Scholars call this period "Postclassic Maya dispersed polities" (Susan Kepecs 2003). She is right: dispersed, but not in decline. I am one small point in that dispersed world.`,
    },
    deliverGoal: 'N1 — fictionalDisclaimer + c.1480 出生 + Mayapan 崩 30 年后分散政体 + 「分散 ≠ 衰落」反 Whig anchor + 父 milpa 母织 huipil setup; 史料来源: Cook 1998 / Roys 1957 / Edmonson 1986 / Diego de Landa 1566; 虚构 composite 写法参见 VocabSpark Byzantine Topic Anna the Iconographer',
    engagementHook: '「分散 ≠ 衰落」——你身边有没有什么东西，看起来「散了」，其实还活着？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    fictionalDisclaimer: true,
  },

  // ═══════════════════════════════════════════════════
  // N2 — c.1487, 7 岁 · 开始学织 huipil · 「布是文字」
  // ═══════════════════════════════════════════════════
  {
    id: 'N2',
    title: {
      cn: '布是文字',
      en: 'Cloth is writing',
    },
    setting: {
      time: 'c.1487，7 岁',
      place: 'Yucatán 北部内陆村落，家中织机旁',
      cn: '母亲手把手教织 backstrap loom，纹样是玉米神、Chaac 雨神、双头蛇',
      en: 'Mother teaching backstrap loom by hand, patterns of maize god, Chaac rain deity, double-headed serpent',
    },
    content: {
      cn: `7 岁那年，母亲把我拉到她的 backstrap loom (背带织机) 旁边，说：「该学了。」

背带织机不复杂——一头挂在树上或柱子上，另一头的腰带套住织者的腰，靠身体向后倾斜控制经线的松紧。但学起来并不容易。我头几次把经线缠乱，母亲没骂我，只是重新理顺，说：「再来。」

我学的第一个图案是玉米神——K'awil (卡威尔)——的侧脸轮廓。玉米神的形象在我们 Maya 人的 huipil 上出现了几百年，从古典期 (250-900 CE) 到今天。母亲告诉我：「这不是装饰，这是文字。」

我那时候不懂她的意思。我以为她是说图案「像」文字，后来才明白，她是字面意思——布上的纹样是记录，是叙事，是身份的外壳。

在 huipil 上，我们有玉米神、有 Chaac (恰克, 雨神)——他管雨，管收成，是 Maya 农民最怕也最需要的神——还有双头蛇，象征天地之间的连接。没有统一的「写法」，每个地区的妇女都有自己的一套。但如果你会读这些图案，你就知道一件 huipil 是哪个村子的，哪个家族的，为什么场合织的。

父亲在田里工作。母亲在 huipil 里记录。

Diego de Landa 主教 1562 年在 Maní 一口气烧掉了约 27 部 Maya 抄本（今天只剩 4 部存世）和数千件圣物——他烧不掉的，是每一件 huipil 上的纹样，是每一个母亲教女儿的动作。

我 12 岁之前，学会了独立织一件完整的婚礼 huipil。`,
      en: `When I was 7, my mother pulled me beside her backstrap loom and said: "Time to learn."

The backstrap loom is not complicated. One end hangs from a tree or post; the other end has a strap around the weaver's waist, and you control the warp tension by leaning back. But it is not easy to learn. My first tries tangled the warp threads into a mess. My mother did not scold me. She just sorted them out and said: "Again."

The first pattern I learned was the profile of K'awil (the maize god). His image had been appearing on Maya huipil for centuries, from the Classic period (250-900 CE) forward. My mother told me: "This is not decoration. This is writing."

I did not understand her then. I thought she meant the patterns "look like" writing. Later I understood she was being literal — the patterns on cloth are records, narratives, the outer skin of identity.

On the huipil we have K'awil, we have Chaac (the rain deity who controls harvests, the god Maya farmers both feared and depended on), and we have the double-headed serpent, representing the connection between sky and earth. There is no single "standard" rendering. Each village's women have their own system. But if you can read the patterns, you know which village made a huipil, which family, for which occasion.

My father recorded in the milpa field. My mother recorded in the huipil.

Bishop Diego de Landa burned around 27 Maya codices (only 4 survive today) and thousands of sacred objects at Maní in 1562. What he could not burn was the patterns on every huipil, or the movement each mother taught her daughter.

Before I was 12, I could weave a complete wedding huipil on my own.`,
    },
    deliverGoal: 'N2 — 7 岁学 backstrap loom + 玉米神 / Chaac / 双头蛇纹样 + 「布是文字」核心命题 + Diego de Landa 1562 烧稿对照',
    engagementHook: '「布是文字」——你身边有没有什么不是文字，但却在「记录」的东西？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N3 — c.1492, 12 岁 · 第一件完整婚礼 huipil · 两个世界的同步
  // ═══════════════════════════════════════════════════
  {
    id: 'N3',
    title: {
      cn: '同一年，两个世界',
      en: 'The same year, two worlds',
    },
    setting: {
      time: 'c.1492，12 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '织出第一件完整婚礼 huipil，同年 Columbus 在 Hispaniola 登陆',
      en: 'First complete wedding huipil completed; same year Columbus lands in Hispaniola',
    },
    content: {
      cn: `大约 1492 年，我 12 岁，织出了第一件完整的婚礼 huipil。

这件 huipil 要穿好几个月——从下聘那天起，新娘家的女性轮流织，主要图案由母亲或祖母决定，但每个人都会加上一段自己的纹样。我加的是 Chaac 的雨点纹——我那年雨季特别顺，觉得是雨神保佑，想把这个记下来。

同一年——1492 年——大西洋彼岸，一个叫 Columbus (哥伦布) 的人从西班牙出发，在一个他以为是亚洲、其实是加勒比海的小岛登陆，把那里叫做 Hispaniola (希斯帕尼奥拉)。

我不知道这件事。

这就是这一节要说的事——不是「世界相遇」，是「两个世界在同一年各自做自己的事，其中一个不知道另一个存在」。

Columbus 那年在海上写航海日志，我在村子里织婚礼 huipil。他找的是黄金和香料贸易路线；我织进布里的是 Chaac 的雨点，是我那年觉得值得记录的事。

他不知道我在。我不知道他在。

但 25 年后，他那一边的东西会沿着船传到我的海岸——先是新面孔，然后是新的病，然后是从未见过的船。到那时候，我已经 37 岁了。

现在是 1492 年。我 12 岁。我刚完成了第一件婚礼 huipil，手指还酸着。`,
      en: `Around 1492, when I was 12, I finished my first complete wedding huipil.

A wedding huipil takes months. From the day of betrothal, the women of the bride's family weave in rotation. The main patterns are decided by the mother or grandmother, but each woman adds her own section. I added a rain-dot pattern for Chaac — that rainy season had been especially good, and I thought it was the rain deity's blessing, so I wanted to record it.

That same year — 1492 — across the Atlantic Ocean, a man named Columbus sailed from Spain and landed on a small island he believed was Asia but was actually in the Caribbean. He called it Hispaniola.

I did not know this.

That is the point of this node — not "worlds meeting," but "two worlds doing their own things in the same year, while one does not know the other exists."

Columbus was at sea that year, writing in a ship's journal. I was in my village, weaving a wedding huipil. He was searching for gold and spice trade routes; what I was weaving into cloth was Chaac's rain dots, the thing I felt worth recording that year.

He did not know I was here. I did not know he was there.

But twenty-five years later, what came from his side of the ocean would travel along ships to my coast — first new faces, then new sickness, then ships no one here had ever seen. By then I would be 37.

Right now it is 1492. I am 12. I just finished my first wedding huipil, and my fingers still ache.`,
    },
    deliverGoal: 'N3 — 12 岁第一件婚礼 huipil + 1492 Columbus 登陆 Hispaniola 同年 + 「两个世界同步，one 不知 other」反 discovery myth',
    engagementHook: '「两个世界同步，互不知道」——你能想到今天还有哪两个世界是这样的关系吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N4 — c.1495-1500, 15-20 岁 · 婚姻 · chilam 祭司的 katun 预言
  // ═══════════════════════════════════════════════════
  {
    id: 'N4',
    title: {
      cn: '祭司说：这个 katun 会有外来者',
      en: 'The priest says: this katun will bring outsiders',
    },
    setting: {
      time: 'c.1495-1500，15-20 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '婚，生第一个孩子；村里 chilam 祭司讲 katun 20 年周期预言',
      en: 'Marriage and first child; village chilam priest recites katun 20-year-cycle prophecy',
    },
    content: {
      cn: `大约 15 岁，我嫁给一个同村的男人。他叫什么名字我就不在这里说了——因为我的名字也没有传下来，他的就更没有了。他是个小商人，走村串户卖棉布和盐，有时候走到海边。我们结婚，我生了第一个孩子，是个男孩。

那几年，村里的 chilam (奇拉姆, Maya 祭司-预言者) 是一个白发老人。他不管农业，不管打仗——他管的是时间。

Maya 人用 katun (卡顿) 计时。一个 katun 是 20 年。老 chilam 会念每一个 katun 的「命」——哪个 katun 有旱灾，哪个有疾病，哪个有「外来的 bearded 人从海上来」。

这里需要仔细说一件事：这些预言文本，是 1540 到 1600 年之间用拉丁字母写下来的——也就是在西班牙人已经来了之后才被记录。Matthew Restall 的《Seven Myths of the Spanish Conquest》(2003 Oxford) 提醒：不要把它们读成「Maya 人预知了西班牙人来」——有很大成分是事后合理化 (retrospective rationalization)，把已经发生的事套进旧预言框架。

但 katun 周期论本身是真的——Maya 人确实有这套 20 年为一周期的历史哲学，会用它解释当下（Restall 2003）。

我小时候听老 chilam 念。我不全懂，但我记得那个意象：「外来 bearded 人」，从海上来，在某个 katun 降临。

我那时候 15 到 20 岁，刚结婚，刚有孩子。我记下了这个意象，但我不懂它是什么意思。

我以为那是很久以后的事。`,
      en: `Around the age of 15, I married a man from the same village. I will not give his name here — since my own name did not survive, his certainly did not. He was a small trader who traveled between villages selling cotton cloth and salt, sometimes reaching the coast. We married, and I gave birth to our first child, a boy.

Around those years, the chilam (Maya priest-prophet) in our village was an old man with white hair. He did not manage farming or warfare — he managed time.

The Maya count time in katun (20-year cycles). The old chilam would recite the "nature" of each katun — which brings drought, which brings disease, which brings "bearded outsiders arriving from the sea."

One thing must be said carefully here: these prophetic texts were written down in Latin letters between 1540 and 1600, after the Spanish had already arrived. Matthew Restall's Seven Myths of the Spanish Conquest (Oxford 2003) warns against reading them as "Maya people foresaw the Spanish coming" — much of it is retrospective rationalization, fitting events that already happened into old prophetic frameworks.

But the katun-cycle worldview itself was real — the Maya genuinely had this philosophy of history built around 20-year periods, and used it to interpret the present (Restall 2003).

As a child I heard the old chilam recite. I did not understand all of it, but I held onto one image: "bearded outsiders," coming from the sea, arriving in some katun.

I was 15 to 20, newly married, newly a mother. I stored the image without knowing what it meant.

I thought it was a very long time away.`,
    },
    deliverGoal: 'N4 — 婚 + 第一个孩子 + chilam 祭司 katun 预言 + careful framing (Restall 2003 事后合理化警告) + katun 传统是真的',
    engagementHook: '「事后合理化」——你有没有做过一件事，事后给它编了一个「早就预料到了」的故事？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N5 — 1517.2, 37 岁 · Hernández de Córdoba · 「第一次接触，Maya 赢」
  // ═══════════════════════════════════════════════════
  {
    id: 'N5',
    title: {
      cn: '从未见过的船，但我们赢了',
      en: 'Ships never seen before — but we won',
    },
    setting: {
      time: '1517 年 2 月，37 岁',
      place: 'Yucatán 北部，Cape Catoche 沿海到内陆村落',
      cn: 'Hernández de Córdoba 3 艘船到 Cape Catoche；Maya 击退，Hernández 死于伤',
      en: 'Hernández de Córdoba\'s three ships reach Cape Catoche; Maya repel them, Hernández dies of wounds',
    },
    content: {
      cn: `1517 年 2 月，消息从海边传来：有人看到了从未见过的船。

不是沿海贸易的独木舟，不是我们熟悉的任何船型。三艘大得不像话的船，从东边海上来，在 Cape Catoche (卡托切角) 北岸附近停下来。从船上下来的人：皮肤浅，脸上有厚毛，穿着像乌龟壳一样硬的东西，说我们谁都听不懂的语言。

沿海的 Maya 人不知道该怎么对待他们。先试着接触，发现来者不善——于是打。

Maya 人用弓箭和投石弹，把那个叫 Hernández de Córdoba (埃尔南德斯·德·科尔多瓦) 的船长打成重伤，西班牙人撤回船上，回了 Cuba (古巴)，Hernández 几周后死于伤口。

第一次接触，Maya 「赢」了。

消息传到我们村的时候，已经是几周后。村里人你一句我一句地说：「从未见过的船。」「皮肤浅的人。」「穿着像铁一样的东西。」「我们把他们打跑了。」

我那年 37 岁，三个孩子，丈夫刚从海边回来，也带了同样的消息。我记住了那个形象——「从未见过的船」。

我想到小时候老 chilam 说的话：「外来 bearded 人，从海上来。」

但我们打跑他们了。所以，也许不是那个 katun。

我继续织 huipil。`,
      en: `In February 1517, news came from the coast: people had seen ships no one had ever seen before.

Not the trading canoes of the coast, not any familiar hull shape. Three enormous ships from the east, stopping near the north shore at Cape Catoche. The people who came off them had pale skin, thick hair on their faces, wore something as hard as turtle shells, and spoke a language no one recognized.

The coastal Maya did not know how to treat them. They tried an approach first, found the newcomers hostile — so they fought.

Maya fighters used bows and sling-stones. They wounded the captain, a man named Hernández de Córdoba, badly enough that the Spanish retreated to their ships and sailed back to Cuba. Hernández died of his wounds a few weeks later.

The first contact: the Maya "won."

By the time the news reached our village, it had traveled several weeks. People talked over each other: "Ships no one has ever seen." "Men with pale skin." "Wearing something like iron." "We drove them off."

I was 37 that year, with three children. My husband had just come back from the coast carrying the same news. I kept the image in my mind — "ships no one had ever seen."

I thought of what the old chilam used to say: "Bearded outsiders, coming from the sea."

But we had driven them off. So maybe this was not that katun yet.

I kept weaving.`,
    },
    deliverGoal: 'N5 — 1517.2 Hernández de Córdoba 3 艘船 Cape Catoche + Maya 击退 Hernández 死 + receiving-end 视角：消息口耳相传 + 「Maya 赢了」的暂时性安慰',
    engagementHook: '「我们赢了，所以也许不是那个 katun」——你有没有过这种把坏消息往后推的时刻？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N6 — 1518-1520, 38-40 岁 · 第一波天花 · Black Death cross-ref
  // ═══════════════════════════════════════════════════
  {
    id: 'N6',
    title: {
      cn: '这病只杀我们',
      en: 'This sickness only kills us',
    },
    setting: {
      time: '1518-1520，38-40 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '第一波天花从 Hispaniola / Cuba 沿船传到 Yucatán 海岸，再到内陆',
      en: 'First smallpox wave carries from Hispaniola/Cuba along ships to Yucatán coast, then inland',
    },
    content: {
      cn: `1518 年起，另一种东西随船传来了——我们没有名字叫它，因为我们从未见过它。

后来我知道汉语管它叫「天花」。那时候我们只知道：人开始发高烧，皮肤上长出脓包，一个接一个死。

我的两个孩子死了。大儿子先死，烧了三天，第四天早上没了。小女儿两周后死，脸上的疹子密得没有空隙。

邻村——我们往西走半天路的那个——空了一半。一个秋天，800 个人的村落能剩多少？我不知道确切数字，但我知道我走过去找人借农具，叫了三声没人应。

1518 到 1600 年间，美洲原住民因欧亚病原体死亡率 80 到 95%。

我那时候不知道数字，但我看出了一件事：这病只杀我们，不杀 bearded 人。

同一批病——1347 年从中亚传到欧洲的黑死病 (Black Death，参见 VocabSpark Black Death Topic)——1518 年从 Hispaniola 传到 Maya 海岸。规律完全一样：新病原，加上一个从未接触过、完全没有免疫的人群，加上高密度接触——死亡率高得让人说不出话。Black Death 杀了欧洲 25 到 50%；天花在美洲的死亡率是 80 到 95%。差别是：欧洲人有时间建立部分免疫；我们同时遭遇几十种新病原，没有任何缓冲。

我丈夫生病，高烧一周，活下来了。我和我的一个女儿也活下来了，我到现在不明白为什么。

我埋了我的两个孩子。那年我 38 到 40 岁。`,
      en: `From 1518, something else traveled along the ships — something we had no name for, because we had never seen it before.

Later I learned the word: smallpox. At the time all we knew was this: people began burning with fever, pustules rose across their skin, and they died one after another.

Two of my children died. My older son went first — three days of fever, gone by the fourth morning. My younger daughter followed two weeks later, her face covered in rashes so dense there was no open skin between them.

The village half a day's walk west of us — it went half-empty. In one autumn season, how many people could a village of 800 have left? I do not know the exact count, but I know I walked there to borrow a tool and called out three times with no answer.

Between 1518 and 1600, indigenous Americans died of Eurasian pathogens at rates of 80 to 95 percent.

I did not know numbers then. But I saw one thing clearly: this sickness only kills us. Not the bearded ones.

The same class of disease — the Black Death (黑死病) that moved from Central Asia to Europe in 1347 (see VocabSpark Black Death Topic) — moved from Hispaniola to the Maya coast in 1518. The pattern is identical: a new pathogen, a population with zero immunity, high-density contact — mortality rates too large to speak aloud. Black Death killed 25 to 50 percent of Europe. Smallpox killed 80 to 95 percent of us. The difference: European survivors had time to build partial immunity; we faced dozens of new pathogens at once, with no buffer at all.

My husband got sick. He burned for a week and survived. My one remaining daughter and I survived too. I still do not understand why.

I buried two of my children. I was 38 to 40 years old.`,
    },
    deliverGoal: 'N6 — 1518-1520 第一波天花 + 两个孩子死 + Cook 1998 死亡率 80-95% + 跨 Topic ⭐ McNeill 1976 Black Death 同 pattern + 「只杀我们」receiving-end 观察',
    engagementHook: '「这病只杀我们」——一个 38 岁的人，怎么理解一件她完全没有语言框架去解释的事？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N7 — 1521.11, 41 岁 · 跨 lens 锁定 #1 · Tenochtitlán 陷落
  // ═══════════════════════════════════════════════════
  {
    id: 'N7',
    title: {
      cn: '1521 年 11 月，消息到了我们村',
      en: 'November 1521, the news reaches our village',
    },
    setting: {
      time: '1521 年 11 月，41 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '沿海贸易商带来 Tenochtitlán 8 月陷落消息；跨 lens 锁定 #1 接 Malintzin (Lens 2) N9',
      en: 'Coastal traders bring news of Tenochtitlán\'s August fall; cross-lens lock #1 connecting Malintzin (Lens 2) N9',
    },
    content: {
      cn: `1521 年 8 月 13 日，在距我们 1500 公里外的 Tenochtitlán (特诺奇蒂特兰，一座建在湖中央岛上的大城)，Aztec (阿兹特克) 最后一位王 Cuauhtémoc (夸乌特莫克) 被一个叫 Cortés (科尔特斯) 的 bearded 人抓住。

那天，城里有一个叫 Malintzin (玛琳茨恩) 的 Maya 女人——她是 Cortés 的翻译，她站在 Cortés 旁边，把 Cuauhtémoc 的话翻成西班牙语。

就是那一天，就是那一刻：Malintzin 在 Tenochtitlán 翻译 Cuauhtémoc 的投降。1500 公里外，我在 Yucatán 内陆的村子里——什么都不知道。

11 月，消息沿着 Yucatán 海岸的贸易网络传来。我丈夫那年在海边做生意，跟着消息回来了。他站在门口，说：「北边有一座大湖中间的城，叫 Mexica 人的城。bearded 人把它烧了，把湖水染红了，把城里的王抓了。」

村里长老听完，没有立刻说话。沉默了很久。然后说：「准备粮食。」

我丈夫说——那天晚上，我们在家里——「白胡须的人会再来。不是会不会，是什么时候。」

我那年 41 岁。我有一个还活着的女儿。我的两个孩子已经埋了。我丈夫说「不是会不会，是什么时候」的时候，我没有说话。

我去把手上的 huipil 经线拢紧了一下，继续织。`,
      en: `On August 13, 1521, 1,500 kilometers from where I stood, in the city of Tenochtitlán built on an island in the middle of a lake, the last Aztec king, Cuauhtémoc, was seized by a bearded man named Cortés.

That day, inside the city, there was a Maya woman named Malintzin — Cortés's translator — standing beside him, turning Cuauhtémoc's words into Spanish.

That exact day, that exact moment: Malintzin in Tenochtitlán translating Cuauhtémoc's surrender. 1,500 kilometers away, I was in our Yucatán village — knowing nothing.

In November, news traveled along the Yucatán coastal trading networks. My husband had been on the coast doing business; he came home with the news. He stood at the door and said: "There was a great city on a lake to the north, the city of the Mexica people. The bearded ones burned it, turned the lake red, and seized the king."

The village elders heard it out, said nothing for a long time. Then: "Store food."

That night at home, my husband said: "The white-bearded ones will come back. Not whether — when."

I was 41 that year. I had one surviving daughter. Two of my children were already in the ground. When my husband said "not whether, when," I did not speak.

I gathered the warp threads of the huipil in my hands and kept weaving.`,
    },
    deliverGoal: 'N7 — 跨 lens 锁定 #1: 1521.8.13 Malintzin 翻译 Cuauhtémoc 投降同一天 + 1500km 外 Ix Mutal 什么都不知道 + 11 月消息才到 + 「不是会不会，是什么时候」',
    engagementHook: '「不是会不会，是什么时候」——你有没有经历过一个你知道要来、但不知道何时到来的改变？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N8 — 1527, 47 岁 · Montejo 第一次远征 · huipil 作为抵抗载体
  // ═══════════════════════════════════════════════════
  {
    id: 'N8',
    title: {
      cn: '布上的星历，是我们的记录',
      en: 'The star-calendar on cloth is our record',
    },
    setting: {
      time: '1527 年，47 岁',
      place: 'Yucatán 北部内陆村落，难民涌入',
      cn: 'Montejo 第一次远征到北岸（失败）；难民从北边涌来；Ix Mutal 织 huipil 给难民',
      en: 'Montejo\'s first expedition reaches north coast (fails); refugees stream south; Ix Mutal weaves huipil for refugees',
    },
    content: {
      cn: `1527 年，Francisco de Montejo (蒙特霍) 带着西班牙征服许可登陆 Yucatán 北岸——他想做对 Aztec 和 Inca 做过的事。

他没做到。Yucatán 不是 Tenochtitlán，没有一个可以拿下就全盘崩塌的中心首都。Yucatán 是 16 个分散的 kuchkabal (Roys 1957)，你打下一个，还有 15 个，而且没有黄金诱惑，没有好水，热带病到处是。Montejo 1535 年彻底放弃——这一次，我们又「赢了」。

但难民开始从北边往南涌。

我们村里来了 30 个人，带着伤，带着病，带着只有棉布遮身的孩子。粮食立刻吃紧。

我开始织 huipil 给难民。

不是因为怜悯——是因为我爷爷教过我一句话：「衣服上的图案是文字。我们没纸，但我们有布。布会被穿，被传，被记住。」

我织进那批 huipil 的图案，是我们村的 Postclassic Maya 星历纹样——哪个方向是金星 (Venus) 的升起位置，哪个月份属于 Chaac 的雨，哪个纹样代表某年某地的玉米丰收。这些不是装饰，是我们的历法。

我不知道这些 huipil 后来去了哪里。但我知道一件事——17 世纪到 20 世纪 Maya 抵抗运动里，这些纹样反复出现 (Cook 1998)。2025 年 Yucatán 的妇女在市集卖的 huipil，上面还有这些纹样。

布活过了 Montejo。`,
      en: `In 1527, Francisco de Montejo landed on the northern Yucatán coast with Spanish authorization to conquer — intending to do to Yucatán what had been done to the Aztec and Inca.

He did not succeed. Yucatán was not Tenochtitlán. There was no single capital whose fall would collapse everything. Yucatán was sixteen dispersed kuchkabal (Roys 1957). You took one; fifteen remained, and there was no gold to motivate anyone, no reliable water, and tropical disease everywhere. Montejo gave up entirely in 1535. This time we had "won" again.

But refugees began moving south from the north.

Our village received thirty people — wounded, sick, with children covered only by cloth strips. Food became tight immediately.

I started weaving huipil for the refugees.

Not out of pity — because my grandfather had taught me something: "The patterns on clothes are writing. We have no paper, but we have cloth. Cloth gets worn, passed on, remembered."

The patterns I wove into that batch of huipil were our village's Postclassic Maya star-calendar marks — which direction marks Venus rising, which month belongs to Chaac's rain, which pattern records a good maize harvest in a particular year and place. These were not decoration. They were our calendar.

I do not know where those huipil went afterward. But I know one thing — from the 17th through the 20th centuries, these patterns kept appearing in Maya resistance movements (Cook 1998). The huipil sold in Yucatán markets today still carry them.

The cloth outlasted Montejo.`,
    },
    deliverGoal: 'N8 — 1527 Montejo 第一次远征失败 + 难民 30 人 + 织 huipil 给难民 + Postclassic 星历纹样 + 17-20 世纪 Maya 抵抗运动里反复出现 + 「布活过了 Montejo」',
    engagementHook: '「布活过了 Montejo」——你能想到有什么平凡的东西，比「大事件」活得更久？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N9 — 1530s, 50-55 岁 · 第二波天花 + 麻疹 · 记忆断链
  // ═══════════════════════════════════════════════════
  {
    id: 'N9',
    title: {
      cn: '老人几乎全没了',
      en: 'Almost all the elders were gone',
    },
    setting: {
      time: '1530 年代，50-55 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '第二波天花 + 麻疹叠加；村 800 人 → 150 人；丈夫 1533 死于麻疹；老人几乎全没',
      en: 'Second wave: smallpox plus measles; village 800 → 150; husband dies of measles 1533; almost all elders gone',
    },
    content: {
      cn: `1530 年代，第二波来了。

这次是天花和麻疹一起——两种病叠着走，像两把刀同时砍。

我们村 1500 年前后大约有 800 人。1540 年前后，我估计剩了 150 人。这个数字是 Noble David Cook (1998) 在考古遗址分析中估算出来的同类村落数据，我自己当然没数过——我只是看到空了的家，数了数还在的人。

80% 死亡。

我丈夫 1533 年死于麻疹。他发烧三天，第四天早上安静地走了。我那年 53 岁，只剩一个女儿。

但最让我觉得害怕的，不是死亡本身——是老人全没了。

我们村的老人是什么？他们是历法。他们记得哪一年的 katun 节点发生了什么，记得家族系谱，记得 chilam 祭司世代口传的星历和仪式。他们的脑子里装着的，就是还没来得及写下来的 Chilam Balam。

老人一旦死了，那些记忆就没有了。

一代人的记忆，10 年里断了链。

这就是殖民接触真正的破坏——不只是人死了，是人死之前脑子里那些没法写在石头上的知识一起消失了。Diego de Landa 1562 年烧手稿；但这里，1533 到 1540 年代，无声的火，一个老人一个老人地把我们的记忆带走了。

我活下来，是因为部分人有部分免疫——学界后来才弄清楚为什么。我那时候只知道我活下来了，而我的丈夫没有。`,
      en: `In the 1530s, the second wave came.

This time smallpox and measles together — two diseases running side by side, like two blades cutting at once.

Our village had perhaps 800 people around 1500. By around 1540, I estimate about 150 remained. This figure is drawn from Noble David Cook's (1998) analysis of comparable village-level archaeological sites; I did not count myself — I only saw the empty houses and counted the faces still present.

Eighty percent dead.

My husband died of measles in 1533. Three days of fever, then gone quietly by the fourth morning. I was 53. I had one daughter left.

But what frightened me most was not death itself — it was that almost all the elders were gone.

What were our village elders? They were the calendar. They remembered which katun period had brought which events. They held the family genealogies, the chilam's generations of oral star-charts and ritual sequences. What was inside their minds was the Chilam Balam that had not yet been written down.

Once the elders died, that knowledge died with them.

A generation's memory, broken in ten years.

This is the true damage of colonial contact — not only that people died, but that the knowledge in their minds, the kind that cannot be carved in stone, vanished with them. Diego de Landa burned manuscripts in 1562; but here, in the 1530s and 1540s, a silent fire took our memory one elder at a time.

I survived because some people carry partial immunity — scholars only figured out why later. At the time all I knew was that I had survived, and my husband had not.`,
    },
    deliverGoal: 'N9 — 1530s 第二波天花 + 麻疹 + 村 800→150 人 80% 死亡 + 丈夫 1533 死 + 「老人几乎全没」= 记忆断链 + Cook 1998',
    engagementHook: '「脑子里的东西，比写在石头上的更难传下去」——你能想到什么知识是只能靠人传的吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N10 — 1542, 62 岁 · Mérida 立基 · encomienda · 双重生活
  // ═══════════════════════════════════════════════════
  {
    id: 'N10',
    title: {
      cn: '我学了几个西班牙词，但我只跟孙女说 Maya 语',
      en: 'I learned a few Spanish words, but I only spoke Maya with my granddaughter',
    },
    setting: {
      time: '1542 年，62 岁',
      place: 'Yucatán 北部内陆村落，划入 encomienda 系统',
      cn: 'Mérida 立基，村落划入 encomienda；encomendero 派人收贡赋；Ix Mutal 表面服从，内部传承',
      en: 'Mérida founded, village assigned to encomienda; encomendero\'s agent collects tribute; Ix Mutal outward compliance, inward transmission',
    },
    content: {
      cn: `1542 年，Francisco de Montejo el Mozo (小蒙特霍，他父亲的儿子) 在 Maya Tihó 城的旧址建起了 Mérida (今天 Yucatán 州首府)。我们村被划入 encomienda (恩科米达, 西班牙殖民土地制度) 系统。

encomienda 是这样运作的：一个 encomendero (领主) 在 Mérida 拿到文件，说他「负责」我们村的 Maya 人的宗教教化和管理——换取的是，我们每年要缴纳贡赋。那个领主我从来没见过，但他每年派一个人来，说几个词，列清单，然后收走：玉米、棉布、蜂蜜、火鸡。

我那年 62 岁，按 Postclassic Maya 平民女性的平均寿命算，我早就超出预期了。

我学了几个 Spanish (西班牙语) 词——señor (大人), tributo (贡赋), Dios (上帝)——够应付来收贡赋的人就行了。当着他们的面，我叫「señor」，我数好了玉米和棉布，我低着头。

但他们走了之后，我只跟我女儿和孙女说 Yucatec Maya (尤卡坦玛雅语)。

我织 huipil 的时候讲老故事——Chaac 的雨，玉米神 K'awil 的诞生，katun 周期里哪些年份什么事情发生。孙女坐在旁边看着我的手，学着纹样，听着故事。

这就是我 1542 年之后的生活：表面上纳贡，内部传承。两种语言，两套规则，两个世界，在我一个人身上同时运转。

这不是抵抗——这是活着。`,
      en: `In 1542, Francisco de Montejo el Mozo (the Younger, son of the previous Montejo) founded Mérida on the ruins of the Maya city of Tihó. Our village was assigned to the encomienda system.

Encomienda worked like this: an encomendero (lord) received documents in Mérida stating he was "responsible" for the religious instruction and administration of our village's Maya people — in exchange for which we owed annual tribute. I never saw that lord. But each year he sent someone who spoke a few words, made a list, and collected: maize, cotton cloth, honey, turkeys.

I was 62 that year. By the average life expectancy of a Postclassic Maya commoner woman, I had already outlasted expectations.

I learned a few Spanish words — señor (lord), tributo (tribute), Dios (God) — just enough to get through the tribute-collector's visit. In front of them, I said "señor," I counted out the maize and cloth, I kept my eyes down.

But when they left, I only spoke Yucatec Maya with my daughter and granddaughter.

Weaving huipil, I told the old stories — Chaac's rain, the birth of the maize god K'awil, which years in the katun cycle brought what events. My granddaughter sat beside me watching my hands, learning the patterns, listening to the stories.

This was my life after 1542: tribute outwardly, transmission inwardly. Two languages, two sets of rules, two worlds running simultaneously in one person.

This was not resistance. This was living.`,
    },
    deliverGoal: 'N10 — 1542 Mérida 立基 + 村划入 encomienda + encomendero 贡赋系统 + 学几个 Spanish 词 + 「只跟孙女说 Maya 语」+ 双重生活 = 「活着不是抵抗，是生存方式」',
    engagementHook: '「两种语言，两套规则，在同一个人身上同时运转」——你有没有过这种双重生活的感觉？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N11 — 1545, 65 岁 · 死 · 无名 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    id: 'N11',
    title: {
      cn: '印第安女性，老，死于咳嗽',
      en: 'Indian woman, old, died of cough',
    },
    setting: {
      time: '1545 年，65 岁',
      place: 'Yucatán 北部内陆村落 / Mérida 教区档案',
      cn: 'Ix Mutal 死；Mérida 教区档案一行记录；无名',
      en: 'Ix Mutal dies; one line in the Mérida parish registry; no name',
    },
    content: {
      cn: `1545 年，我死了。65 岁，冬天，咳嗽了很久，然后不咳了。

Mérida 教区档案里有一行：「印第安女性，老，死于咳嗽。」

没有名字。

这不是疏忽——是制度。殖民档案记 encomendero 的名字，记神父的名字，记军官的名字，记「印第安女性」的数量，但不记她们的名字。她们是贡赋清单里的人头数，不是有名字的个人。

我的名字叫 Ix Mutal Ahaw——但这个名字是现代学者根据 Yucatán 地名和 Maya 女性命名传统给我取的（这是虚构 composite 的一部分，Edmonson 1986 的翻译给了我们一个框架）。没有档案记它。

我死的时候，我女儿在旁边。我孙女在旁边。我的 huipil 在旁边——最后一件没织完的，经线还挂在 backstrap loom 上。

学界把这种模式叫做「institutional survival, personal erasure」——机构活了，个人的故事消失了（参见 VocabSpark Scientific Revolution Topic 的 Maria Kirch：天文机构传下来了，她的名字没传下来）。

我的情况是：Maya 语言活了。huipil 的纹样活了。Chilam Balam 的口传记忆，部分通过我女儿、孙女、曾孙女传了下去，17 世纪被人用拉丁字母写进文本。

我的名字没传下来。

---

在我死后，你（读这段文字的 7 年级学生）看到的是什么？

你觉得一个人没有名字，是否意味着她「不重要」？为什么？`,
      en: `In 1545, I died. I was 65. Winter. A long cough, then it stopped.

The Mérida parish registry contains one line: "Indian woman, old, died of cough."

No name.

This was not an oversight — it was the system. Colonial records kept the encomendero's name, the priest's name, the officer's name. They kept the count of "Indian women." They did not keep the women's names. The women were headcounts on tribute lists, not individuals with names.

My name is Ix Mutal Ahaw — but this name was given to me by modern scholars drawing on Yucatán place-names and Maya women's naming traditions (this is part of the fictional composite; Edmonson 1986's translations give us a framework). No archive recorded it.

When I died, my daughter was beside me. My granddaughter was beside me. My huipil was beside me — the last one, unfinished, warp threads still hanging on the backstrap loom.

Scholars call this pattern "institutional survival, personal erasure" — the institution survived, the individual story vanished. (See VocabSpark Scientific Revolution Topic's Maria Kirch: the astronomical institution was transmitted; her name was not.)

In my case: the Maya language survived. The huipil patterns survived. The oral memory of Chilam Balam, part of it passed through my daughter, granddaughter, great-granddaughter, and in the 17th century someone wrote it into texts using the Latin alphabet.

My name was not passed down.

---

After my death, what do you (the 7th-grade reader of this passage) see?

Do you think a person without a name is therefore "unimportant"? Why or why not?`,
    },
    deliverGoal: 'N11 — 1545 死，65 岁 + 教区档案「印第安女性，老，死于咳嗽」无名 + 制度性抹除 + Maria Kirch cross-ref + 「机构活了，个人消失了」+ 反思问题',
    engagementHook: '我死时档案里只有一行「印第安女性，老，死于咳嗽」——机构活了，我的名字消失了。先在心里想想「无名是不是等于不重要」，下一节我会正式问你。',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N12 — 1545 → 21c · Closing · 「我没有名字，但我有声音」
  // ═══════════════════════════════════════════════════
  {
    id: 'N12',
    title: {
      cn: '我没有名字，但我有声音',
      en: 'I have no name, but I have a voice',
    },
    setting: {
      time: '1545 → 21 世纪',
      place: 'Yucatán → 现代 / 你现在坐着的地方',
      cn: '从 Ix Mutal 之死，经孙女、曾孙女、17 世纪 Chilam Balam 文本、Edmonson 1986，到 21 世纪 7 年级课堂',
      en: 'From Ix Mutal\'s death, through granddaughter, great-granddaughter, 17c Chilam Balam texts, Edmonson 1986, to 21c Grade 7 classroom',
    },
    content: {
      cn: `我死于 1545 年。我的名字不在任何档案里。

但我孙女教她的孙女织 huipil。

5 个世纪后，21 世纪的 Yucatán，约 150 万人说 Yucatec Maya 语，Yucatán 妇女在市集上卖的 huipil，上面的星历纹样是我这一代织进去的（Edmonson 1986）。Itzá Maya——那个住在 Lake Petén 中央岛屿上的 Maya 城邦——撑到了 1697 年 3 月 13 日，才被 Martín de Ursúa 攻破。

算一下：Aztec 1521 年陷落，Inca 1533 年陷落，Itzá 1697 年陷落——Maya 城邦比 Aztec 多抵抗了 176 年。1697 年是什么时候？Newton 的《Principia》已经出版 10 年，中国康熙帝在位，北美 13 殖民地已经成形。Maya 不是第一个衰落的，Maya 是抵抗最久的。

这是反 Whig (反胜利者叙事) 最重要的那一条：「Maya 文明」没有消失。它变形了，它被压缩了，它的名字被从档案里抹掉了——但它没有消失。它在布的纹样里，在 Yucatec Maya 语的句子里，在 Chilam Balam 的某一段话里。

Munro Edmonson 1986 年出版《Heaven Born Merida and Its Destiny: The Book of Chilam Balam of Chumayel》(University of Texas Press)。他在引言里说：「这些文本不是 Maya 精英的史诗，是村落的集体记忆——哪个老妇女讲的哪一句，我们不知道，但她们的句子在文本里。」

你在 7 年级课堂上读 Edmonson 翻译的句子时，你听到的不是「一个文明」。你听到的是一个 65 岁的老妇女在 1540 年代某个夜里，一边织 huipil，一边跟孙女说的话。

她不知道她的话会传 5 个世纪。她只知道她的孙女在旁边，在听。

比较一下：Sorghaghtani Beki（索尔哈克塔尼·别吉）是 13 世纪 Mongol 帝国里一个让四个儿子都当上可汗的女人，她的名字写进了 Marco Polo 的游记——她「留名了」。Maria Kirch 是 18 世纪柏林天文台的实际天文学家，发现了一颗彗星，档案里只写了她丈夫的名字——她「无名了」。Ix Mutal 连 Maria Kirch 那样的「我发现了但功劳算别人的」都没有——她的整个生命在档案里就是一行数字。

但 Sorghaghtani 的名字留在了书里；Ix Mutal 的声音留在了布里和口传里。500 年后，哪个更难被抹掉？

我没有名字。

但我有声音。

---

你现在读完了这 12 节 Ix Mutal 的故事。她是一个虚构 composite——但她代表的 100 万 Maya 平民女性是真实的。

你觉得：历史里「有名字的人」和「没有名字的人」，哪一类更多？他们各自留下了什么？`,
      en: `I died in 1545. My name is in no archive.

But my granddaughter taught her granddaughter to weave huipil.

Five centuries later, in the 21st century, about 1.5 million people in Yucatán speak Yucatec Maya. The huipil sold in Yucatán markets still carry the star-calendar patterns my generation wove in (Edmonson 1986). The Itzá Maya — the city-state on an island in Lake Petén — held out until March 13, 1697, when Martín de Ursúa's combined force broke through.

Think about the numbers: the Aztec fell in 1521, the Inca fell in 1533, the Itzá fell in 1697 — Maya city-states resisted 176 years longer than the Aztec. What was 1697? Newton's Principia had been published ten years earlier; the Kangxi Emperor was on the Chinese throne; the thirteen North American colonies were already mature. The Maya were not the first to decline. They were the last to resist.

This is the most important anti-Whig point: "Maya civilization" did not disappear. It was transformed, compressed, had its names removed from archives — but it did not vanish. It lives in cloth patterns, in Yucatec Maya sentences, in a passage of the Chilam Balam.

Munro Edmonson published Heaven Born Merida and Its Destiny: The Book of Chilam Balam of Chumayel (University of Texas Press) in 1986. In his introduction he writes: "These texts are not the epics of a Maya elite; they are the collective memory of villages — we do not know which old woman said which sentence, but their sentences are in the text."

When you, in a 7th-grade classroom, read a sentence translated by Edmonson, what you hear is not "a civilization." You hear what a 65-year-old woman said to her granddaughter on some night in the 1540s, while weaving a huipil.

She did not know her words would travel five centuries. She only knew her granddaughter was beside her, listening.

Consider the comparison: Sorghaghtani Beki was a 13th-century Mongol woman whose four sons each became a khan; Marco Polo wrote her name into his travels — she "has a name." Maria Kirch was an 18th-century Berlin astronomer who discovered a comet and was recorded in the archive only under her husband's name — she was "nameless." Ix Mutal did not even have a "I discovered it but the credit goes to someone else" situation — her entire life in the colonial archive is one row of numbers.

But Sorghaghtani's name lives in books; Ix Mutal's voice lives in cloth and oral tradition. Five hundred years later, which is harder to erase?

I have no name.

But I have a voice.

---

You have just read all twelve nodes of Ix Mutal's story. She is a fictional composite — but the one million Maya commoner women she represents were real.

What do you think: in history, which group is larger — people with names, or people without names? What did each group leave behind?`,
    },
    deliverGoal: 'N12 closing — 孙女教孙女 huipil + 21c 150万 Maya speaker + Itzá 1697 (176年) 反 Whig + Edmonson 1986 Chilam Balam 口传 + Sorghaghtani / Maria Kirch 跨文明对比 + 「我没有名字，但我有声音」',
    engagementHook: '走完我这一生——我没有名字，但我的声音留在了 huipil 的纹样和口传记忆里，5 个世纪后被你读到。你会怎么评价一个「无名却有声」的人是否重要？再想一步：历史里「有名字的人」和「没有名字的人」哪一类更多，他们各自留下了什么，你会更想记住谁？',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
  },

  ],
};

export var lenses = {
  'pachacuti-inca': pachacutiLens,
  'malintzin-mediator': malintzinLens,
  'ix-mutal-weaver': ixMutalLens,
};

export var defaultLens = 'ix-mutal-weaver';

export default lenses[defaultLens].storyboard;

export var meta = {
  topicId: 'pre-columbian',
  schemaVersion: 2,
  defaultLens: defaultLens,
  lensCount: 3,
  nodesPerLens: 12,
  timeRange: '1000-1532',
  region: 'Americas',
  standards: ['HSS-7.7', 'AP World 1.4'],
};
