// Pre-Columbian T5 — Lens 1: Pachacuti Inca Yupanqui
// perpetrator-actor | empire-builder | Tawantinsuyu 1438-1472
//
// Topic: Pre-Columbian Americas 1000-1532
// pre-Pachacuti 共 8 任 Sapa Inca，Pachacuti 是第 9 任
// 在位 1438-1472，其中 1471-1472 与 Topa Inca 共治，单独执政 33 年，总在位 34 年
//
// 来源: Rostworowski 1999 / Hemming 1970 / Julien 2000 / Rowe 1946 / MacQuarrie 2007
//       D'Altroy 2002 / Mary Doyle 1988 / Carolyn Dean 2010 / Gary Urton 2003
//       Pedro Sarmiento de Gamboa 1572 / Inca Garcilaso de la Vega 1609
//
// 跨 lens micro-detail:
//   N9: Qhapaq Ñan ↔ Mongol Yam 驿站 (cross-Topic Genghis Khan)
//   N8: quipu ↔ Mali Aisha 1413 阿拉伯字母 (cross-Topic)
//   N11: 1521.11 Tenochtitlán 陷落 cross-lens 时刻
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N11+N12 only true)
// em-dash 规范: 单段最多 3 个

export var lensId = 'pachacuti-inca';
export var lensName = 'Pachacuti Inca Yupanqui';
export var lensNameCn = '帕恰库提·印加·尤潘基';
export var lensRole = 'perpetrator-actor';
export var lensDescription = 'Tawantinsuyu 的建立者，1438-1472 把 Cusco 小国变成南美最大帝国';

export var storyboard = [
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

这不是神话。反败为胜是真的节点——学者 Catherine Julien 在 2000 年《Reading Inca History》里确认，1438 Yahuarpampa 大战是 Inca 历史的核心事实。但要 careful framing：后来的王朝叙事（Pedro Sarmiento de Gamboa 1572《Historia índica》）加了一段细节——「战斗到一半，平原上的石头变成了战士，pururaucas 加入了我们」。石头变战士是后来史学家写的，是 Inca 王朝的 PR 操作。Julien 2000 说得很清楚：框架是真，细节是神话化处理。

打完仗，我做的第一件事不是庆祝。是改名。

Cusi Yupanqui——这个名字是次子的名字，是父亲没带走的那个孩子的名字。我不要这个名字了。

新名字：**Pachacuti**。Quechua 语，「pacha」= 时间 / 大地，「kuti」= 翻转。合在一起：时间转折者，大地震荡者。

胜利者做的第一件事，是重新讲自己的故事。

我改名——我宣布自己是第 9 任 Sapa Inca——我的父亲在山上，哥哥在山上，王位空在 Cusco。我拿走了它。

Genghis Khan 1206 年在 Onon 河源头被尊号「成吉思汗」——然后花十年重建了草原政治地图。我 1438 年在 Cusco 改名 Pachacuti——然后花三十四年重建了整个南美洲。两个人，两个大陆，同一个动作：先给自己命名，再去建造命名承诺的东西。`,
      en: `Yahuarpampa — Quechua: *yahuar* = blood, *pampa* = plain. Plain of Blood. The name was already real — this ground had seen blood. It was about to see more.

In 1438, the combined Quechua and Cana forces I had gathered faced the Chanca army outside Cusco.

We won. The Chanca retreated.

This is not myth. The reversal is a real historical node — scholar Catherine Julien, in *Reading Inca History* (2000), confirms that the 1438 Yahuarpampa battle is solid Inca history. But careful framing is needed: later dynastic narratives (Pedro Sarmiento de Gamboa, *Historia índica*, 1572) added a detail — mid-battle, the stones on the plain turned into warriors, *pururaucas*, joining our side. Stones turning into warriors is dynastic PR, added by later historians. Julien 2000 is direct: frame is real, the dramatic details are mythologized.

After the battle I did not celebrate. I changed my name.

Cusi Yupanqui — the name of a second son, the child a father did not take. I did not want that name.

New name: **Pachacuti**. Quechua: *pacha* = time / earth, *kuti* = overturn. Together: Time-Turner, Earth-Shaker.

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

我走到城心，叫来工匠和贵族，指着四周山脉说：这座城要重新规划。形状：美洲豹（puma）。城心是豹头——那里建 Coricancha，太阳神 Inti 的神殿。向北伸出的山脊是豹背——那里建 Saqsaywaman 要塞，zigzag 巨石城墙，石块重达 100 到 200 吨，拼接精度到刀片插不进去，全靠精准切割，不用砂浆。

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

The city center — the puma's head — was where I ordered Coricancha built, the temple of the sun god Inti. The ridge stretching north was the puma's spine — where Saqsaywaman fortress would rise, its zigzag megalithic walls using stones of 100 to 200 tons, fitted to razor-blade precision without any mortar.

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

要 careful framing：quipu 不是「文字的替代品」——这个说法把问题说反了。Gary Urton 在 2003 年《Signs of the Inka Khipu》里论证，quipu 是完全不同的信息技术范式：它极擅长记数字和行政记录；它能不能记叙事和历史，学界至今还在争论，没有破译。

同时，在 Mali 帝国（西非 600-1591），商人的女儿 Aisha 在 Timbuktu 用阿拉伯字母记账。1413 年她的账簿里有文字，有故事，有旅行记录。

两种工具，两种范式，两个帝国，差不多同一个时代。哪一种「更高级」？这个问题问错了——两种工具解决的问题不完全一样，两条路都走得通。`,
      en: `The empire now reached Lake Titicaca in the south, southern Ecuador in the north, and the Pacific coast to the west. The larger the territory, the more precise the records needed.

But Tawantinsuyu had no writing. No alphabet, no glyphs, no pictographs.

We had quipu.

Quechua *khipu* = knot. A primary cord with dozens to hundreds of pendant cords, each knotted at different positions in different types. Position encoded base-10 digits — ones, tens, hundreds, thousands. Color and knot type encoded category — maize, potatoes, warriors, households.

Around 1460, in Coricancha, the first complete imperial census quipu was knotted before me: how much maize each village produced, how many households, how many adult men, how many mit'a laborers owed this year. One set of cords — one province's full ledger.

A camayoc, a quipu specialist, ran fingers across the knots and read me the numbers. This system administered an empire of millions.

Careful framing is needed: quipu is not a "writing substitute" — that framing inverts the problem. Gary Urton, in *Signs of the Inka Khipu* (2003), argues quipu was an entirely different information-technology paradigm: exceptionally suited to numbers and administrative records; whether it could encode narrative and history is still debated by scholars, and it remains undeciphered.

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

No horses. Careful framing: the Americas had no horses before 1492 (Europeans brought them) — no cattle, no donkeys, no large domesticable mammals. Jared Diamond, in *Guns, Germs, and Steel* (1997), traces this to continental biogeography — the Americas' large mammals went extinct in deep prehistory, not because Inca people were less capable, but because the continent's conditions differed. But Diamond's framework requires caution: it is a macro-narrative, and the specific engineering decisions remained human choices.

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

This is not superstition. It is constitutional structure. Maria Rostworowski, in *History of the Inca Realm* (1999), makes the point clearly: every Sapa Inca on death is mummified and their wealth permanently locked to their panaca — the successor cannot touch the predecessor's estates, because the predecessor "remains." So the new ruler must conquer fresh territory to build his own wealth.

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

1524-1527 年，天花先于 Pizarro 本人到达安第斯——欧洲人从 1492 年起就在 Caribbean 传播，病毒比军队走得更快。天花在 1527 年前后杀死了我的继承人 Huayna Capac 和他的指定继承人——皇位争议随之爆发，Atahualpa 和 Huáscar 两兄弟内战，Inca 帝国在 Pizarro 到达前就已经在内战中撕裂。

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

Between 1524 and 1527, smallpox reached the Andes before Pizarro himself. The virus spread faster than armies. By around 1527 it had killed my successor Huayna Capac and his designated heir — succession collapsed into civil war between brothers Atahualpa and Huáscar. The empire was already tearing itself apart when Pizarro arrived.

My mummy was still in Cusco.

In November 1521, news came from the north — Tenochtitlán, the great city on the lake, had fallen in August. The Spanish had defeated the Aztec. My mummy sat in Cusco, knowing nothing. Even if the news had reached someone, no one would have connected it to what was coming for us, and no one would have known what it meant.

I built a system of institutions: mit'a, mitmaq, panaca, Qhapaq Ñan, quipu, Coricancha. Every one was effective. Every one depended on the empire continuing to function.

But I had not designed an institution to resist microbes. No one had.`,
    },
    deliverGoal: 'N11 1471-1472 共治 + 1472 死在位 34 年 + 反讽（168 人 + 天花 60 年后终结帝国）+ 天花 1524-1527 先于 Pizarro 到达 + Rowe 1946 vs D'Altroy 2002 人口估算 + 1521.11 Tenochtitlán 跨 lens 时刻 + 「institution-builder 的盲点」',
    engagementHook: '我建了那么多制度——mit\'a、mitmaq、panaca、Qhapaq Ñan——每一个在它的时代都很有效。但我没有设计对抗微生物的制度。你觉得一个制度再强大，能不能预见并对抗它自己没见过的威胁？',
    expectsRealAnswer: true,
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

那一天结束的时候：Atahualpa 被俘，随扈几千人被杀，没有一个西班牙人死亡（John Hemming 1970《The Conquest of the Incas》记录此役）。

我怎么理解这件事？

不能简单地说 Atahualpa 愚蠢——他的判断在他自己的规则体系里是合理的。不能简单地说 Pizarro 聪明——他胜利的最大原因不是战术，是天花已经把帝国打烂了，是内战已经撕裂了指挥链。Matthew Restall 2003《Seven Myths of the Spanish Conquest》说得对：把这段历史讲成「168 人征服了 600 万人」是 myth，真实的是：一个因天花和内战而内部崩解的帝国，碰上了枪、马、钢和外交操作的组合。

反 Whig：我不是英雄，不是恶霸。

我是一个用 34 年，在安第斯山脉上改写了 4,000 公里大陆政治地图的人。我建了 Qhapaq Ñan，建了 Coricancha，建了 panaca，建了 mit'a，建了一套靠绳结管理几百万人的行政体系。

我的成功和我的失败，来自同一个地方：我把帝国的逻辑建得太好了。扩张是结构强迫的，不停扩张需要不停消耗人。mitmaq 切断了被迁徙族群的根。mit'a 矿里死的人，名字从未进过 Cusco 的账本。panaca 制度让死人继续锁着财产，逼着活人不得不去打新仗。

帝国建得快，所以崩得快。制度越精密，越不能承受它没设计过的事情。

Hemming 1970 在《The Conquest of the Incas》结尾说了一句我一直记着的话：Tawantinsuyu 不是被征服的，是在征服者到达之前就已经开始崩解了。征服者只是在一个已经裂开的东西上，推了一把。

34 年，从次子到改变大陆。然后，60 年。`,
      en: `I was dead. 1472.

The mummy specialists prepared my body. My panaca installed me in a house in Cusco. My fields remained mine, my servants continued serving, my estates did not pass to Topa Inca.

At every major ceremony they carried me out to sit alongside the living Sapa Inca in the great plaza. I attended Inti Raymi, attended victory celebrations, attended every ceremony I had presided over in life. I was dead, but I was still governing.

This is what Catherine Julien (2000) and Carolyn Dean (2010) both emphasize: the Inca Empire was not "the dead past" but "the dead still ruling the present." When Pizarro reached Cusco in 1532, all 11 Sapa Inca mummies of Tawantinsuyu were still there — Pizarro later ordered them destroyed in 1559.

November 16, 1532. Cajamarca.

My great-grandson Atahualpa — he had won the civil war, just defeated his brother Huáscar, and was the new Sapa Inca — walked into Francisco Pizarro's plaza.

Pizarro had brought 168 men: 62 cavalry, 106 infantry, iron cannon. Atahualpa came with an escort estimated at 6,000 to 8,000. But they were not in full battle gear — this was a reception for foreign visitors, not a battlefield. Atahualpa saw that the Spanish were few in number. He had no reason to be afraid.

Pizarro had set an ambush.

By the end of that day: Atahualpa was captured, thousands of his escort were killed, and not one Spaniard died. (John Hemming, *The Conquest of the Incas*, 1970, records this engagement.)

How do I understand this?

It is too simple to say Atahualpa was foolish — his judgment was reasonable within his own system of rules. It is too simple to say Pizarro was brilliant — his greatest advantage was not tactics. It was that smallpox had already broken the empire from within, and civil war had already shattered the chain of command. Matthew Restall, in *Seven Myths of the Spanish Conquest* (2003), is right: "168 men conquered 6 million people" is a myth. What actually happened: an empire already collapsing from epidemic disease and civil war met a combination of firearms, horses, steel, and political maneuvering.

Anti-Whig: I am not a hero. I am not a villain.

I am someone who, over 34 years, rewrote the political map of 4,000 km of continent in the Andes. I built Qhapaq Ñan, Coricancha, panaca, mit'a, a cord-knot administrative system managing millions of people.

My success and my failure came from the same place: I built the empire's logic too well. Expansion was structurally compelled — and perpetual expansion perpetually consumed people. Mitmaq severed the roots of displaced communities. People who died in mit'a mines never had their names entered in Cusco's records. The panaca system kept the dead locking up wealth, forcing the living into new wars. The institutions were built for a world without microbes, without horses, without a continent's worth of accumulated Eurasian diseases looking for new hosts.

The empire was built fast, so it collapsed fast. The more precisely engineered a system, the less it can withstand what it was not designed for.

Hemming, at the close of *The Conquest of the Incas* (1970), wrote something I find myself returning to: Tawantinsuyu was not conquered — it had already begun to collapse before the conquerors arrived. The conquerors simply pushed something that was already cracking.

34 years — from second son to continental reshaping. Then, 60 years.`,
    },
    deliverGoal: 'N12 closing 反 Whig + 1472 死后 mummy 继续参政 + 1532.11.16 Cajamarca Atahualpa 被俘 (Hemming 1970) + 168 人神话 careful framing (Restall 2003) + 天花 + 内战才是真正原因 + 「34 年帝国 vs 60 年终结」时间感 + 「成功和失败同源」closing',
    engagementHook: '我把帝国的逻辑建得太好，所以碰到没设计过的事情（天花、内战）就全面崩塌。你觉得一个系统「太有效」，本身会不会成为它的弱点？',
    expectsRealAnswer: true,
    nodeType: 'perpetrator-actor',
  },
];
