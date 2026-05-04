// ─── Crusades 1099 Lens-based Storyboard ──────────────────────
//
// Story-First Pedagogy v2 — Lens 模型（用户 2026-05-02 sign off）
// 见 docs/STORY_FIRST_PEDAGOGY.md（待 v2 update）
//
// 设计原则（用户 2026-05-02 拍板）：
//   - 1 个 Topic = 1 段历史事件 + N 个 lens（每 lens = 1 个角色视角）
//   - 用户选 1 个 lens 进入 → 一致第一人称跑完
//   - 不同 lens 看同一事件——基础事实相同——情绪 + 角度 + 局限性不同
//   - replay 价值：用户跑完 1 lens 后可以选另一个 lens 重学（DBQ 训练）
//
// MVP scope（drafting）：3 lens（Latin Crusader Roger + Byzantine + Islamic）
// 当前文件只交付 lens 1（Roger de Toulouse）——其余 2 lens 后续补
//
// 内容质量铁律：
//   - "明朝那些事儿"密度：vivid scenes + concrete dates + sensory detail
//   - anti-orientalism 硬规：Saracens 不是"野蛮"也不是"高贵蛮族"
//   - 直面屠杀：1099/07/15 后 3 天屠杀必须 from inside（理解 medieval mind）
//   - 不投射现代政治：narrative kernel §6 + §9 已经禁止
//   - 14 词文化禁用表（玉玺/龙袍/翰林/朕/卿/江山/凤冠/霞帔/一炷香/科甲/状元/榜眼/探花/金銮殿）
//   - Latin 词保留斜体（Deus vult / indulgentia / Pax Dei）
//
// 长度约束：每节点 200-280 字（CN）/ 对应 EN 版 Lexile 800-1000
//
// ─────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════
// LENS 1: Roger de Toulouse（虚构二线骑士 / 1095-1099 perpetrator-actor 视角）
// ═══════════════════════════════════════════════════
//
// 角色设定：
//   - 1095 年 21 岁，南法 Toulouse 地区一个小贵族家的二儿子
//   - 中世纪铁律：长子继承全部，二儿子自己想办法
//   - 跟随 Raymond IV（Toulouse 伯爵）出征 — 8000 人南法纵队
//   - 1099 年 25 岁，7/15 在耶路撒冷城墙下
//   - 他是"composite character"——所有事都来自 narrative kernel + 一手 chronicle
//
// 这个 lens 是 perpetrator/actor 视角（平行于 King John 暴君视角）：
// 不浪漫化十字军，但让用户从内部感受"为信仰流血"的真实驱动力 + 实施屠杀的真实性
//
var rogerToulouseStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1095 Clermont 演说',
    content: {
      cn:
        '1095 年 11 月 27 日早上，法国中部 Clermont（克莱蒙）城外。我 21 岁，跟堂兄 Bertrand 站在一片冻硬的草地上。\n\n' +
        '人群里所有人都在哈白气——大概两千人，红衣主教、贵族、几百个像我这样的骑士，还有从附近赶来看热闹的农民。我们等的人是教皇 Urban II（乌尔班二世）——53 岁，瘦，下巴尖，那天披着深紫色斗篷站到木台上。\n\n' +
        '他讲了大概 40 分钟。东方基督徒在受苦——耶路撒冷在异教徒手里——任何参战的人，"所有的罪"一次性免（这叫 *indulgentia plenaria*，全免赎罪）——死在路上的直接进天国。最后一句，他喊：*Deus vult*——上帝意旨。\n\n' +
        '我那一刻——脑子里 4 件事一起炸：\n\n' +
        '我家长兄继承所有田产；我什么都没有。我去年打猎失手射死过一个农户的儿子——心里压了一年，告解神父也压不住。东方"打下来就是你们的"——这是我这辈子第一次听到的"出路"。我妈不喜欢我去打仗——但*罪全免*这一句，连她都拦不住。\n\n' +
        '我撕下外套上一块红布，缝在胸口。Bertrand 也撕了。\n\n' +
        '我是 Roger de Toulouse。接下来 8 节，你跟我走 4 年——从这片冻草地到耶路撒冷城墙下。',
      en:
        'Morning of November 27, 1095. Clermont, central France, in a meadow frozen hard by overnight cold. I was 21. My cousin Bertrand stood next to me.\n\n' +
        'Two thousand people were breathing out white steam. Cardinals (high-ranking churchmen), bishops, nobles, a few hundred knights like me, and farmers from nearby villages who had come to watch. The man we were waiting for was Pope Urban II — fifty-three years old, thin, with a sharp chin. He stepped onto a wooden platform that morning, wrapped in a dark purple cloak.\n\n' +
        'He spoke for about forty minutes. Christians in the East were suffering. Jerusalem was in the hands of unbelievers. Anyone who joined the march would receive *indulgentia plenaria* — a full pardon for all sins, in one stroke. Anyone who died on the road would go straight to heaven. At the end, he shouted the words that would become our battle cry: *Deus vult* — God wills it.\n\n' +
        'In that one moment, four things exploded in my head:\n\n' +
        'My older brother inherits all our family land; I get nothing. Last year, hunting in the forest, my arrow killed a farmer\'s son by accident — I had carried that for a year, and confession to the priest had not lifted it. "Whatever you take in the East is yours" — the first real path I had ever been offered. My mother did not want me to leave for war — but the words *all sins forgiven* were too heavy for her to argue with.\n\n' +
        'I tore a strip of red cloth from my coat and stitched it onto my chest. Bertrand did the same.\n\n' +
        'I am Roger de Toulouse. Over the next eight sections, you will walk four years with me — from this frozen meadow all the way to the walls of Jerusalem.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我那年 21 岁，撕下红布缝胸口的那一刻，我以为自己懂了什么是信仰——你猜 4 年后我还会这么想吗？',
    expectedLength: '240-280 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§3 出身 + §4 1096 出发',
    content: {
      cn:
        '回家路上 Bertrand 一直在算账。一匹军马 = 4-5 银马克；一套二手锁子甲（chain mail，铁环织成的战衣）= 3 银马克；一柄诺曼长剑 + 一面圆盾 + 一顶带护鼻的头盔 = 2 银马克；3 个月干粮 + 路费 = 5 银马克。总共大概 15 银马克——足够买 1 公顷好地。\n\n' +
        '我家拿不出。\n\n' +
        '1096 年 1 月，我妈卖了她陪嫁的 2 块小田。我爸卖了一片橡树林（家里 80 年的）。我自己拿出了我哥结婚那年送我的那柄银柄短刀去当——典当行老板姓 Aaron，是个犹太人，给我打了 8 折。\n\n' +
        '凑齐了 14 银马克。差 1 个。Bertrand 借给我。\n\n' +
        '那年春天，南法 Toulouse 城里到处是这种场面——典当行排队、卖田告示、母亲哭、神父在街上祝福一队队骑士。一个修士告诉我们：罗马教廷规定，参加东征的人在他离家期间，他的财产由教会保护——任何敢动他家产的邻居要被绝罚。这是 *Pax Dei*（"上帝的和平"）的延伸保护条款。\n\n' +
        '1096 年 4 月 15 日，我跟 Bertrand 加入了 Raymond IV——Toulouse 伯爵，55 岁，独眼（年轻时一只眼丢在跟摩尔人的战斗里），南法最大贵族——的 8000 人纵队。\n\n' +
        '出发那天，我妈站在城门口没说话，只是把一块圣徒 St Saturnin 的指骨碎片（南法本地圣徒遗骨）塞进我胸袋。她说："带回来。或者，让你死的那个穆斯林带回来。"',
      en:
        'On the ride home, Bertrand kept doing the math. A warhorse: 4 to 5 silver marks. A used chain mail shirt (a tunic made of woven iron rings): 3 marks. A Norman longsword, a round shield, and a helmet with a nose-guard: 2 marks. Three months\' food and travel costs: 5 marks. Total: about 15 silver marks — enough to buy one hectare of good farmland.\n\n' +
        'My family did not have that kind of money.\n\n' +
        'In January 1096, my mother sold the two small fields that came with her dowry. My father sold a small oak forest the family had owned for eighty years. I took the silver-handled dagger my older brother had given me the year he married, and I pawned it. The pawnbroker, a Jewish man named Aaron, gave me eighty percent of its value.\n\n' +
        'I had fourteen marks. One short. Bertrand lent me the last one.\n\n' +
        'That spring, the city of Toulouse was full of scenes like this. Lines at pawnshops. For-sale notices on fields. Mothers weeping. Priests blessing columns of riders in the streets. A monk told us: Rome had ruled that while a man was away on this march, his property was under the protection of the Church — any neighbor who tried to seize his land could be excommunicated (cut off from the Church). It was an extension of the older *Pax Dei* — the "Peace of God" — system.\n\n' +
        'On April 15, 1096, Bertrand and I joined the column of Raymond IV — the Count of Toulouse, fifty-five years old, one-eyed (he had lost the other in a fight against the Moors as a young man), the greatest noble in southern France. Eight thousand men in his army.\n\n' +
        'On the day we left, my mother stood at the city gate and said nothing. She pushed a small bone fragment into my chest pocket — a relic of Saint Saturnin, a local saint of southern France. Then she said: "Bring it back. Or let the Muslim who kills you bring it back."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我妈那句话——你听出她在说什么了吗？我 21 岁那年没听懂。',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1096-97 Constantinople 见 Alexius',
    content: {
      cn:
        '1096 年 10 月，我们到君士坦丁堡（Constantinople，今天的 Istanbul）城外。\n\n' +
        '我从来没见过这种规模的城。城墙厚得我一辈子也没见过——三层，外加一条护城河。城里据说住 40 万人——是 Toulouse 的 30 倍。我们的 Raymond 伯爵进城去见拜占庭皇帝 Alexios I（亚历克西奥斯一世，48 岁，从政变上来的将军——他是 1095 年那封给教皇求援信的发信人）。\n\n' +
        '皇帝住的宫殿叫 Blachernae（布拉海尔奈宫），墙上嵌彩色玻璃，地上铺马赛克。我们这些骑士被带进一个大厅等。空气里飘着乳香和玫瑰水的味道。两边站着 Varangian Guard——皇帝的私人卫队，高个子金发的北欧人，他们听我们说话的法语听不懂，但他们盯着你的眼神让你不敢动。\n\n' +
        'Alexios 让我们每个领袖宣誓：所有从塞尔柱手里拿回来的、本属于拜占庭的城——比如 Antioch（安条克）、Nicaea（尼西亚）——必须还给他。Raymond 一开始不肯。Alexios 不放粮、不让过博斯普鲁斯海峡（Bosphorus，分隔欧洲和亚洲的海峡）。耗了两周，Raymond 让步——但他签字的时候脸上写着"我口头答应"4 个字。\n\n' +
        '我们几个低级骑士在边上看，第一次明白了一件事：这场仗，不是教皇说的那种"全是基督徒一起打异教徒"。基督徒之间，已经在算自己的账。\n\n' +
        '过海那天，黑色的博斯普鲁斯海水又冷又急。Bertrand 看着远处亚洲一侧，问我："那边的山，你听说过吗？"\n\n' +
        '我说："没。教皇没讲过山。"',
      en:
        'In October 1096, we reached the walls of Constantinople (the city you would today call Istanbul).\n\n' +
        'I had never seen anything on that scale. The walls were thicker than anything in my life — three layers, with a moat outside them. The city was said to hold four hundred thousand people — thirty times the size of Toulouse. Our Count Raymond went inside to meet the Byzantine Emperor, Alexios I (forty-eight years old, a general who had taken the throne in a coup — he was the man who had sent the request for help to the Pope back in early 1095).\n\n' +
        'The Emperor lived in a palace called Blachernae. Colored glass in the windows. Mosaic floors. We knights were led into a large hall to wait. The air smelled of frankincense (a tree resin burned as perfume) and rose water. Along both walls stood the Varangian Guard — the Emperor\'s personal troops, tall fair-haired warriors from northern Europe. They could not understand a word of our French, but the way their eyes followed you, you did not move.\n\n' +
        'Alexios made each of our leaders take an oath: any city taken from the Seljuks (the Turkish dynasty ruling much of Anatolia) that had originally belonged to the Empire — Antioch, Nicaea, others — must be returned to him. Raymond refused at first. Alexios shut off our food and would not let us cross the Bosphorus (the strait of water dividing Europe from Asia). After two weeks, Raymond gave way — but you could read his face when he signed: he was promising with his mouth, not with his hand.\n\n' +
        'We junior knights watched from the edge of the hall, and for the first time we understood something. This war was not what the Pope had described — Christians united against unbelievers. The Christians were already keeping accounts on each other.\n\n' +
        'The day we crossed, the Bosphorus was black, cold, and fast. Bertrand looked across to the Asian side and asked, "Those mountains over there — did anyone tell you about them?"\n\n' +
        'I said: "No. The Pope did not mention mountains."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '过海那天我们都还以为接下来是"光荣的远征"——下一节是 Antioch。8 个月。',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1097/10-1098/06 Antioch 围城',
    content: {
      cn:
        '我现在要告诉你 Antioch（安条克）那 8 个月——但讲之前我先告诉你一个数字：我们 5 万人到达 Antioch 城外是 1097 年 10 月 21 日；攻进城是 1098 年 6 月 3 日。8 个月。\n\n' +
        'Antioch 是叙利亚北部的一个城——城墙长 12 公里，高 18 米，有 400 座塔，背后还有 Mount Silpius 山做天然屏障。城里有 50 万人。我们 5 万人围着它。比例 1:10。\n\n' +
        '11 月还能撑——12 月开始没粮食。冬天，叙利亚北部的山里下雪，我们没准备过冬的衣服。我们吃马，吃驴，吃营地的狗。1 月开始吃老鼠。我学会了怎么用箭头挑老鼠的小窝。\n\n' +
        '2 月里有一夜，我跟 Bertrand 在一个空帐篷边上坐着——一个叫 Pierre 的伙计前一天饿死，我们正等他被埋——Bertrand 跟我说："Roger，你听过 Stephen of Blois 吗？"我说："就那个有 5 个城堡的法国大贵族？"他说："他昨天偷偷溜了。骑马朝西走，回家。"\n\n' +
        '一个有 5 个城堡的人都跑了。我们这些没城堡的人，凭什么撑下去？\n\n' +
        '凭"教皇说我们死了直接进天堂"这一句。说真的，那 8 个月里，*indulgentia plenaria*（罪全免）那一句话比饭还让我们能活下去。我每天念 3 遍。Bertrand 也念。\n\n' +
        '6 月 3 日晚上，我们的领袖 Bohemond（博希蒙德，意大利南部诺曼公爵的儿子）收买了城里一个亚美尼亚守卫 Firouz——半夜放绳梯——60 个先锋翻进城——3 小时后大门开。\n\n' +
        '接下来 3 天，我们屠了 Antioch 城内所有穆斯林。投降的也杀。\n\n' +
        '我那年 23 岁。我已经记不得我杀了几个。',
      en:
        'I need to tell you about the eight months at Antioch — but first one number. We arrived outside Antioch on October 21, 1097, with about fifty thousand men. We broke into the city on June 3, 1098. Eight months.\n\n' +
        'Antioch was a city in northern Syria. Its walls ran twelve kilometers, eighteen meters high, with four hundred towers, and behind the city rose Mount Silpius like a natural shield. Half a million people lived inside. Fifty thousand of us surrounded it. One to ten.\n\n' +
        'November we could still bear. December the food ran out. Winter in the mountains of northern Syria — we had no winter coats. We ate the horses. We ate the donkeys. We ate the camp dogs. By January we were eating rats. I learned to flush a rat\'s nest with the point of an arrow.\n\n' +
        'One night in February, Bertrand and I sat next to an empty tent — our friend Pierre had starved to death the day before and we were waiting for the burial — and Bertrand said: "Roger, have you heard of Stephen of Blois?" I said, "The big French noble with five castles?" He said: "He left last night. He rode west. He went home."\n\n' +
        'A man with five castles ran. What were people like us — with no castles — supposed to hold on for?\n\n' +
        'For one sentence the Pope had said: anyone who dies on this road goes straight to heaven. I am being honest with you — those eight months, the words *indulgentia plenaria* (full pardon for sins) kept us alive more than the food did. I said them three times every day. Bertrand said them too.\n\n' +
        'On the night of June 3, our leader Bohemond (the son of a Norman duke from southern Italy) bribed an Armenian guard inside the city named Firouz. At midnight Firouz lowered a rope ladder. Sixty of our front-line men climbed in. Three hours later, the gates opened from inside.\n\n' +
        'Over the next three days, we killed every Muslim still inside Antioch. Those who tried to surrender, we killed too.\n\n' +
        'I was twenty-three. I cannot remember how many I killed.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Antioch 我们以为是终点——结果是开始。下一节，Maarat。我现在还不愿意讲那一段，但我必须讲。',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1098/12 Maarat 食人事件 + 1099 路上',
    content: {
      cn:
        '我必须告诉你 Maarat（马阿拉，叙利亚一个小城，离 Antioch 南边 80 公里）那段。这一段教皇没讲过。神父也没讲过。我现在告诉你的，是写在 Raymond 伯爵自己的随军编年史里的，不是我编的。\n\n' +
        '1098 年 11 月底我们到 Maarat。围了 2 周，12 月 11 日攻破。屠完城——按 Antioch 那个流程——我们在城里坐下，发现没粮食。又没粮食。\n\n' +
        '12 月底，营地里发生了一件事。\n\n' +
        '我现在要直接说：有些十字军兵开始煮死掉的穆斯林尸体来吃。一开始是几个被推到边缘的步兵——后来更多的人参与。我们的一个修士编年史家 Fulcher of Chartres 后来在他的书里写："我们的人吃了这座城里被杀的穆斯林。"另一个跟随 Raymond 的修士 Raymond of Aguilers 写得更细——他说有人不仅吃死人尸体，还烤婴儿。\n\n' +
        '我那年 23 岁。Bertrand 跟我没有参与。但我们看见了。我们闻到了。\n\n' +
        '那天晚上 Bertrand 在帐篷外吐——他蹲在地上，肩膀抖。我问他："你还相信我们是基督徒吗？"他半天说："我相信我们*曾经是*。"\n\n' +
        '接下来从 Maarat 到耶路撒冷还有 6 个月。1099 年春天我们慢慢南下——黎巴嫩沿岸——Tripoli（的黎波里）——海法——Caesarea——Jaffa。各地阿拉伯城镇看见我们这群人——衣衫破烂，眼神空洞，带着 Maarat 那个谣言——他们直接付钱让我们绕路走。\n\n' +
        '我们一边走一边知道：我们不是教皇说的那种人了。但我们必须走完。如果不走完，那 Maarat 就只是 Maarat——走完了，Maarat 才能变成"通往耶路撒冷的路上的一个停靠点"。\n\n' +
        '1099 年 6 月 7 日，我们到耶路撒冷城外。我 25 岁。',
      en:
        'I have to tell you about Maarat (a small city in Syria, eighty kilometers south of Antioch). The Pope did not talk about this. The priests did not talk about this. What I am about to tell you is written in the army\'s own chronicle, kept by Count Raymond\'s monks. I am not making it up.\n\n' +
        'We reached Maarat at the end of November 1098. We laid siege for two weeks. On December 11 we broke in. We killed everyone in the city, the same way we had done at Antioch. Then we sat down in the dead city and discovered, again, that there was no food.\n\n' +
        'Late December, something happened in the camp.\n\n' +
        'I am going to say it plainly. Some of the foot soldiers began boiling the bodies of dead Muslims and eating them. It started with a few men who had been pushed to the edges of starvation. Then more men joined. Our chronicler Fulcher of Chartres wrote later in his book: "Our men ate the Muslims who had been killed in that city." Another monk who marched with Raymond, named Raymond of Aguilers, wrote in even harder detail — he said some men ate not only the dead but cooked infants.\n\n' +
        'I was twenty-three. Bertrand and I did not eat. But we saw. We smelled.\n\n' +
        'That night Bertrand was throwing up outside the tent. He was crouched in the dirt, his shoulders shaking. I asked him: "Do you still believe we are Christians?" After a long silence he said: "I believe we *were*."\n\n' +
        'There were six more months from Maarat to Jerusalem. In the spring of 1099 we moved slowly south — along the Lebanese coast — Tripoli — Haifa — Caesarea — Jaffa. The Arab towns we passed saw what we looked like — torn clothes, empty eyes, the Maarat rumor traveling ahead of us — and many simply paid us to go around them.\n\n' +
        'We marched, and we knew. We were not the men the Pope had described. But we had to finish. If we did not finish, then Maarat was just Maarat. If we finished, Maarat could be turned into "a stop on the road to Jerusalem."\n\n' +
        'On June 7, 1099, we reached the walls of Jerusalem. I was twenty-five.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我没办法把 Maarat 从我的人生里删掉——但我可以把"我去了耶路撒冷"放在它前面。下一节是攻城。',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1099/06-07/14 耶路撒冷围城',
    content: {
      cn:
        '耶路撒冷的城墙不像 Antioch 那么高，但 1099 年 6 月那个夏天，跟我们作对的不是城墙——是水和太阳。\n\n' +
        '6 月 7 日我们到城外。城里 1000 守军（Fatimid 王朝——埃及的什叶派——1098 年刚从塞尔柱手里抢回耶路撒冷）。城里居民大概 4 万——大多数穆斯林，加几千犹太人，几千东方基督徒（亚美尼亚教派、希腊正教派、叙利亚教派——这些教派跟拉丁教派不一样，但都是基督徒）。\n\n' +
        '6 月份耶路撒冷气温 35 度。城外没有水井——水井都在城内。我们最近的水源在 10 公里外。每天从那里拉水回来 + 攻城。每天都有十字军中暑死。我喝过自己的尿——不是一次。\n\n' +
        '7 月 8 日，我们的修士提议做一件事：所有十字军赤脚绕耶路撒冷城墙走 7 圈。这是仿《圣经》里 Joshua 绕 Jericho 走 7 圈，第 7 圈墙塌的故事。\n\n' +
        '7 月 8 日早上，6 点，我们 1.5 万人——剩下的活的——赤脚开始走。我那天脚底烫到起泡，但我没想停。我边走边念 *Pater Noster*（"我们的父"——拉丁文主祷文）。Bertrand 走在我旁边，他在哭——我没问他为什么——可能他想到 Pierre，可能想到 Maarat，可能他自己也不知道。\n\n' +
        '7 圈走完，城没塌。但那一天，我们 1.5 万人之间，重新连成了一个东西。我说不出那是什么——但我那天晚上躺下睡得着了，第一次。\n\n' +
        '我们造了 2 座攻城塔（giant wooden siege towers，木头结构高过城墙）——白天造，晚上守军用希腊火（Greek fire，一种火油武器，泼到木头上烧得灭不了）烧——我们烧了 1 座，剩 1 座。\n\n' +
        '7 月 14 日傍晚，最后那座塔被推到南墙。Godfrey of Bouillon——一个法国-德国边境的中等公爵——他自己第一个翻过城墙。Raymond 这边在西墙佯攻分散守军。我跟 Bertrand 在 Raymond 那一队。\n\n' +
        '7 月 15 日清晨，南门从城内打开。',
      en:
        'The walls of Jerusalem were not as high as Antioch\'s, but in June 1099 our enemy was not the wall. It was water, and sun.\n\n' +
        'We arrived outside the city on June 7. About a thousand defenders held it (the Fatimid dynasty — a Shia Muslim power based in Egypt — had taken Jerusalem back from the Seljuks just one year earlier in 1098). About forty thousand civilians lived inside. Mostly Muslims. A few thousand Jews. A few thousand Eastern Christians — Armenian, Greek Orthodox, Syriac (these were Christian denominations whose practices were different from ours, but they were still Christians).\n\n' +
        'In June, Jerusalem reached thirty-five degrees Celsius. There were no wells outside the walls — the wells were all inside the city. Our nearest water was ten kilometers away. Every day we hauled water from there, and every day we attacked the wall. Every day men died from heat. I drank my own urine more than once.\n\n' +
        'On July 8, our priests proposed something. Every fighter in the army would walk barefoot around the walls of Jerusalem, seven times. This was an imitation of the Old Testament story of Joshua at Jericho — seven circles of the city, and on the seventh the walls fell.\n\n' +
        'July 8, six in the morning. The fifteen thousand of us still alive started walking. The ground burned my feet into blisters but I did not stop. As I walked I whispered the *Pater Noster* — "Our Father," the central Latin prayer. Bertrand walked next to me. He was crying. I did not ask him why — it might have been Pierre, it might have been Maarat, he himself might not have known.\n\n' +
        'After seven circuits the wall did not fall. But something between the fifteen thousand of us was knit back together that morning. I cannot say what it was. I only know that for the first time in many months, I slept that night.\n\n' +
        'We built two siege towers — wooden structures taller than the wall, built to roll forward and dump our men onto the ramparts. By day we built; at night defenders used Greek fire (a burning oil that cannot be put out with water) to set them alight. We lost one. One was left.\n\n' +
        'On the evening of July 14, the last tower was pushed against the south wall. Godfrey of Bouillon — a middling duke from the French-German border — was the first man over the top. Count Raymond\'s men, my unit, attacked the western wall to draw defenders away. Bertrand was with me.\n\n' +
        'On the morning of July 15, the south gate opened from inside.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '城门开了那一刻——我跟 Bertrand 互相看了一眼。我们没有说话。下一节我必须讲那 3 天。',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§4 1099/07/15-17 + §3 普通人 cosplay 段',
    content: {
      cn:
        '7 月 15 日中午，我跟 Bertrand 翻进南门。我手里那柄诺曼长剑——我爸 1080 年代用过的那柄——已经磨过 3 次。我那天用它做的事，我用 4 年时间想过该不该写出来——但这是 lens，我必须直接告诉你，否则我就在骗你。\n\n' +
        '第一个：一个穆斯林老人，跪在 Al-Aqsa 清真寺台阶上做礼拜。我从背后劈下去。他没回头。我现在闭眼还看得见他袍子的颜色——灰白带蓝边。\n\n' +
        '第二个：一个穆斯林妇女从 Souq al-Qattanin（棉布市场）的小巷跑过——她抱着一个孩子，但我看见的是她的红头巾。我没看清楚就劈下去——孩子掉地上，没死——我再补一刀——孩子也死了。\n\n' +
        '第三个：一个 8 岁男孩——他从一个小铺角落跑出来——我以为是穆斯林——劈下去——他穿的不是穆斯林式样的袍子——后来我才意识到他可能是犹太孩子。我没给他 Christian 死法（领主在场看了一眼说"不重要"）。\n\n' +
        '我那一刻心里在想什么？我告诉你——我以为我在做对的事。我真的以为。Urban II 说所有罪都被赦免；我们走了 4 年；Pierre 死了；Bertrand 在 Maarat 哭过；耶路撒冷在我们脚下。我那一刻不觉得那个老人是个老人——我觉得他是 4 年前 Urban II 说的那个"污染圣地的异教徒"。\n\n' +
        'Bertrand 那 3 天没怎么动手。他跟在我后面。第二天晚上他坐在 Solomon 圣殿台阶上——血及马腹（这不是夸张——我们的修士 Raymond of Aguilers 后来用这 5 个字描述）——Bertrand 跟我说："Roger，我以为我们到这里之后会感觉到什么。"\n\n' +
        '我说："我也以为。"\n\n' +
        '7 月 17 日傍晚，城里大概不会再有活的穆斯林了。我们去 Synagogue（犹太会堂）——里面藏着的犹太人不愿出来——我们放火烧了——里面的人全部烧死。亚美尼亚基督徒邻居死了，因为我们的拉丁兵分不清亚美尼亚教派和穆斯林。\n\n' +
        '现代历史学家估算，那 3 天死了 3000 到 10000 人。当时我们的修士写的是"血及马腹"。Ibn al-Athir（一位 13 世纪的阿拉伯历史学家）后来记 7 万——现代学界认为偏高。但你要是问我那 3 天的耶路撒冷有多少血——3000 还是 10000 还是 70000，对一个曾经在那里的人不重要。',
      en:
        'Just past midday on July 15, Bertrand and I climbed through the south gate. The Norman longsword in my hand — my father had used it in the 1080s — had been resharpened three times. What I did with it that day, I have spent four years trying to decide whether to put into words. But this is your lens, and if I don\'t tell you, I am lying to you.\n\n' +
        'The first: an old Muslim man, kneeling on the steps of Al-Aqsa Mosque, doing his prayers. I cut him from behind. He did not turn around. I can still see the color of his robe — grey-white with a blue trim — when I close my eyes.\n\n' +
        'The second: a Muslim woman running through an alley off the Souq al-Qattanin (the cotton merchants\' market). She was carrying a child, but what my eye caught was her red headscarf. I struck before I saw the child. The child fell on the ground, alive. I cut again. Both dead.\n\n' +
        'The third: an eight-year-old boy. He ran out of the corner of a shop. I thought he was a Muslim child. The robe he wore was not Muslim cut. He may have been a Jewish boy. I did not give him a Christian death (a lord standing nearby looked over and said, "It does not matter.").\n\n' +
        'What was I thinking in that moment? I will tell you — I thought I was doing the right thing. I truly thought so. Urban II had said all sins were forgiven. We had walked for four years. Pierre was dead. Bertrand had wept at Maarat. Jerusalem was beneath our feet. In that moment, I did not see the old man as an old man. I saw what Urban II had described four years earlier: an unbeliever defiling the holy city.\n\n' +
        'Bertrand did not strike many that day. He followed me. The second evening he sat on the steps of the Temple of Solomon — blood up to a horse\'s belly, that is what our chronicler Raymond of Aguilers wrote later, and it was not just a phrase — and Bertrand said: "Roger, I thought we would feel something when we reached this place."\n\n' +
        'I said: "So did I."\n\n' +
        'By the evening of July 17, almost no Muslim was left alive in the city. We went to the synagogue — the Jews who had not surrendered had locked themselves inside — we set the wooden roof on fire. Everyone inside burned to death. The Armenian Christian neighbors of the Muslims also died, because our Latin soldiers could not tell an Armenian Christian apart from a Muslim.\n\n' +
        'Modern historians estimate that between three thousand and ten thousand people died in those three days. Our chronicler wrote "blood up to a horse\'s belly." Ibn al-Athir, an Arab historian writing more than a century later, gave seventy thousand — modern scholars consider this an overestimate. But if you ask me how much blood was in Jerusalem in those three days — three thousand or ten thousand or seventy thousand, the difference does not matter to anyone who was there.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我做了。我说不出"对不起"——因为那 3 天里我以为是对的。下一节，第 4 天清晨，我醒来。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Roger de Toulouse',
    narrativeRef: '§3 Guillaume cosplay + 余生',
    content: {
      cn:
        '7 月 18 日清晨，我跟 Bertrand 从一个空了的穆斯林香料铺出来——昨晚我们俩睡在那家铺子的地上——醒来时整个耶路撒冷异常安静。\n\n' +
        '街上的尸体已经被堆成几座小山。我们的领袖 Godfrey 那天早上一个人跪在圣墓教堂——他要求自己用一晚上守斋——他没参加昨天的抢劫。\n\n' +
        '那天 Raymond 召集南法部队——他要分赃——分耶路撒冷里的房子和店给我们这群活下来的人。我有资格分一间——3 年前我们出发时是 8000 人，现在剩大概 1500 个南法人。我在 Souq 边上分到一间小铜匠铺——前主人姓 Hassan，全家死在 7 月 16 日的屠杀中（铺子里墙上还有血迹）。\n\n' +
        '我没要那间铺子。我那天晚上对 Raymond 说："让 Bertrand 拿吧。"\n\n' +
        '其实我心里知道我为什么不要——但我没法说出口。我对自己说的是："我想回 Toulouse。"\n\n' +
        '1100 年春天我跟一队回程的法国十字军一起走。8 个月路。两次差点死——一次海难，一次塞尔柱伏击。1100 年秋我 26 岁回到 Toulouse。\n\n' +
        '我哥不在家——他正在波尔多打仗。我妈认出我哭了——我瘦了 25 斤，左手食指 1098 年在 Antioch 围城里冻坏后只剩半截，左眼上有疤。\n\n' +
        '她问我胸袋里那块圣徒指骨碎片还在吗。我说在——我从来没拿出来用过。她那一刻没说什么——但她的脸——我那天突然听懂了她 1096 年那句话："带回来。或者，让你死的那个穆斯林带回来。"\n\n' +
        '她那 4 年里，每一次想我，都是想"如果他没回来，杀他的那个人，比他活着的我更好。"——因为活着的我，已经不是 1095 年那个 21 岁的儿子。\n\n' +
        '我接下来活了 35 年。娶了 Toulouse 一个寡妇。生了 2 个孩子。我每个礼拜去教堂。我从不主动讲耶路撒冷。\n\n' +
        '但我每个礼拜晚上都做梦——梦那个老人灰白带蓝边的袍子，梦那个抱孩子的妇女红头巾，梦 8 岁那个犹太男孩从角落跑出来。\n\n' +
        '我 60 岁死那年，我孙子问我："爷爷，你这辈子最自豪的事是什么？"\n\n' +
        '我想了一会儿说："我从耶路撒冷活着回来了。"——这不是骄傲也不是后悔——是"我活着回来了"，仅此而已。',
      en:
        'On the morning of July 18, Bertrand and I came out of an empty Muslim spice shop where we had slept on the floor the night before. Jerusalem was strangely quiet.\n\n' +
        'In the streets the bodies had been piled into small mounds. That morning our leader Godfrey was kneeling alone in the Church of the Holy Sepulchre — he had asked to fast and pray through the night, and had not joined the previous day\'s looting.\n\n' +
        'That day Count Raymond gathered the southern French troops — he was distributing the city. The houses and shops of Jerusalem were to be divided among those of us who had survived. I was eligible. Eight thousand of us had left Toulouse three years earlier; about fifteen hundred of us were left now. I was given a small coppersmith\'s shop on the edge of the Souq market. Its previous owner had been a man named Hassan; his whole family had died in the killing of July 16. Blood was still on the walls of the shop.\n\n' +
        'I did not take it. That evening I told Raymond: "Let Bertrand have it."\n\n' +
        'I knew why, but I could not say it out loud. What I told myself was: "I want to go home to Toulouse."\n\n' +
        'In the spring of 1100 I traveled back with a column of returning French crusaders. The road took eight months. I almost died twice — once in a shipwreck, once in a Seljuk ambush. In autumn 1100, twenty-six years old, I came back to Toulouse.\n\n' +
        'My older brother was away — fighting in Bordeaux. My mother recognized me, and she cried. I had lost twenty-five pounds. The first finger of my left hand was a stump — frostbite at the siege of Antioch in 1098. There was a scar above my left eye.\n\n' +
        'She asked if the bone fragment of Saint Saturnin was still in my chest pocket. I said yes — I had never taken it out. She did not say anything in that moment. But her face — that day I finally understood what she had said to me back in 1096: "Bring it back. Or let the Muslim who kills you bring it back."\n\n' +
        'For four years, every time she thought of me, she had thought: if he does not return, the man who killed him is better than the man who returns. Because the man who returns is no longer the twenty-one-year-old son who left.\n\n' +
        'I lived another thirty-five years. I married a widow from Toulouse. I had two children. I went to church every week. I never spoke of Jerusalem on my own.\n\n' +
        'But every week, in my sleep, I dreamed. I dreamed the old man in the grey-white robe with blue trim. I dreamed the woman in the red headscarf with her child. I dreamed the eight-year-old Jewish boy running out from the corner of a shop.\n\n' +
        'When I was sixty, on the day I died, my grandson asked me: "Grandfather, what is the proudest thing in your life?"\n\n' +
        'I thought for a long time. Then I said: "I came back from Jerusalem alive." That was not pride. That was not regret. It was just: I came back, and that was all.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我说完了。但你不能就这样走——你必须替我看一眼，问我两个问题。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 影响 + §10 误解',
    content: {
      cn:
        '现在我们离开 Roger 的视角。回头看他经历的这 4 年，留下了什么。\n\n' +
        '十字军国家成立 4 个：Edessa（1098-1144）、Antioch（1098-1268）、Jerusalem（1099-1291）、Tripoli（1109-1289）。这 4 国在黎凡特（地中海东岸）共存了 88 到 192 年。\n\n' +
        '88 年后，1187 年，一个库尔德苏丹 Saladin 重新拿下耶路撒冷——他没屠城。但 Roger 那时已经死了 50 年。\n\n' +
        '更长的回声：欧洲人通过这 200 年接触阿拉伯保存的希腊哲学、阿拉伯医学、代数、印度数字——12 世纪意大利和西班牙开始翻译这些——经院哲学（13 世纪 Aquinas）、文艺复兴（14-15 世纪）的不少养分，是经过这条意外的"军事桥"。\n\n' +
        'Urban II 1095 年发明的 *indulgentia plenaria*（罪全免）这个概念，422 年后被一个叫 Martin Luther 的德国修士——他反对教会卖赎罪券（赎罪券概念是 Urban II 这一笔的延伸）——他于 1517 年钉了 95 条论纲在 Wittenberg 教堂门上。新教改革开始。\n\n' +
        '1095 年那个木台上的演说——那个 Roger 21 岁听到的演说——422 年后引发了西方基督教自身的内战。\n\n' +
        '这是 lens 教学的核心：Roger 1099 年觉得自己在做对的事。900 年后我们读他的故事知道他做的不是对的事。但这两件事都是真的——他真心相信，他做了，我们今天读懂了，我们没法假装他没做。\n\n' +
        '故事讲完了。下面我们换 narrator 视角，问两个真问题。',
      en:
        'We now step out of Roger\'s perspective. Looking back at the four years he just walked through, what was left behind?\n\n' +
        'Four crusader states were established. The County of Edessa (1098-1144). The Principality of Antioch (1098-1268). The Kingdom of Jerusalem (1099-1291). The County of Tripoli (1109-1289). These four states coexisted in the Levant — the eastern Mediterranean coast — for between eighty-eight and one hundred ninety-two years.\n\n' +
        'Eighty-eight years later, in 1187, a Kurdish sultan named Saladin retook Jerusalem. He did not massacre the city. But Roger had been dead for fifty years by then.\n\n' +
        'A longer echo: over those two hundred years of contact, Europeans encountered Greek philosophy preserved by Arab scholars, Arab medicine, algebra, and Indian numerals (the digits 0 through 9 we still use). In the twelfth century, Italian and Spanish translators began rendering these into Latin — and the materials of scholastic philosophy (Aquinas in the thirteenth century) and the Renaissance (fourteenth and fifteenth centuries) drew nourishment from this unexpected "military bridge."\n\n' +
        'And the *indulgentia plenaria* — the full pardon for sins that Urban II invented in 1095 — was extended into the Church\'s practice of selling indulgences for cash. Four hundred and twenty-two years later, a German monk named Martin Luther objected to the sale. On October 31, 1517, he nailed his ninety-five theses to the door of Wittenberg church. The Protestant Reformation began.\n\n' +
        'The speech Urban II gave on a wooden platform in 1095 — the speech a twenty-one-year-old Roger heard — eventually triggered, four hundred and twenty-two years later, a civil war inside Western Christianity itself.\n\n' +
        'Here is the core of lens teaching. In 1099 Roger believed he was doing the right thing. Nine hundred years later, reading his story, we know he was not. But both things are true at once — he truly believed, he truly did it, we now understand it, and we cannot pretend he did not do it.\n\n' +
        'The story is done. Now we shift into narrator voice, and ask two real questions.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '故事讲完了。现在你（扮演 Roger 走完 8 节后）回头看自己——',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§7 DBQ + §9 historiography + §10 误解',
    content: {
      cn:
        '你刚扮演了 Roger——一个真心相信自己在做"上帝的工作"的 25 岁骑士。他在耶路撒冷砍倒了一个跪着祈祷的老人，劈了一个抱孩子的妇女，杀了一个 8 岁男孩。他没有道歉——在 1099 年那 3 天里，他以为自己在做对的。\n\n' +
        '问题来了。1099 年 7 月 15-17 日发生的事——是 *God\'s war*（上帝的战争），还是 *organized murder*（有组织的屠杀）？\n\n' +
        '历史学界对此有两种真实并立的解读，都有 primary source（一手史料）支撑。\n\n' +
        '**读法 A — Riley-Smith 修正派（1980s 起，剑桥大学 Jonathan Riley-Smith 学派）**：你不能用现代世俗（secular）框架去判断中世纪人。Roger 的"信仰"不是业余爱好（hobby），是他整个世界观的基础。他卖光家产、走 4000 公里、70% 出征者死在路上——这不是"投机"——这是他真心相信赦罪。这套读法承认：1099 是 *God\'s war*，因为参与者真心如此理解；从内部判断他们是公正的。\n\n' +
        '**读法 B — 当代去神话化派（Christopher Tyerman《God\'s War》2006）**：动机的真诚不能洗白行为的性质。一个父亲真心相信自己孩子犯错该死，不能让杀孩子的事变成"教育"。Roger 真心相信，但他做的是有组织的屠杀——4 万平民里至少 3000-10000 人死，包括邻居的犹太人和亚美尼亚基督徒。"真心信"和"有组织屠杀"两件事可以同时存在，并且第二件不能被第一件抹掉。\n\n' +
        '两种读法都是站得住的——Riley-Smith 走"中世纪 mind 内部"看，Tyerman 走"行为 outcome"看。\n\n' +
        '你怎么看？1099 那 3 天，你愿意更靠近哪个读法？想 30 秒答——你的论证比结论重要。',
      en:
        'You have just played Roger — a twenty-five-year-old knight who genuinely believed he was doing God\'s work. He cut down a praying old man on the steps of a mosque. He cut down a woman carrying her child. He killed an eight-year-old boy. He did not apologize. In those three days of July 1099, he thought he was doing the right thing.\n\n' +
        'Here is the question. What happened in Jerusalem on July 15-17, 1099 — was it *God\'s war*, or was it *organized murder*?\n\n' +
        'Historians hold two genuinely opposed readings, each grounded in primary sources (original documents).\n\n' +
        '**Reading A — the Riley-Smith revisionist school (Cambridge, from the 1980s on, led by Jonathan Riley-Smith).** You cannot judge medieval people through a modern secular (non-religious) framework. Roger\'s "faith" was not a hobby — it was the foundation of his entire worldview. The fact that crusaders sold all their family land, walked four thousand kilometers, and seventy percent died on the road — this is not speculation, it is genuine belief in pardon for sins. By this reading, 1099 was *God\'s war*, because the men who fought it understood it that way; we should judge them from inside their own minds.\n\n' +
        '**Reading B — the contemporary demystifying school (Christopher Tyerman, *God\'s War*, 2006, and others).** The sincerity of the motive cannot wash the nature of the act. A father may genuinely believe his child deserves to die for a fault, but that belief does not turn the killing into "education." Roger\'s belief was real, but what he did was organized killing. Out of forty thousand civilians, at least three to ten thousand died — including the Jewish neighbors and Armenian Christian neighbors of the Muslims. Sincere belief and organized killing can both be true at the same time, and the second is not erased by the first.\n\n' +
        'Both readings stand. Riley-Smith reads from inside the medieval mind. Tyerman reads from the outcome of the action.\n\n' +
        'What do you think? On those three days in 1099, which reading do you lean toward? Take thirty seconds — your reasoning matters more than your conclusion.',
    },
    deliverGoal:
      '你刚扮演了 Roger——一个真心相信自己在做"上帝的工作"的 25 岁骑士——' +
      '他在 1099 年 7 月那 3 天里以为自己在做对的事。' +
      '但是历史学界对此有**两种真实并立**的解读：' +
      '**读法 A（Riley-Smith 修正派）**：动机真诚——不能用现代框架判断中世纪人——这是 *God\'s war*。' +
      '**读法 B（Tyerman 去神话化派）**：真诚不能洗白屠杀——3000-10000 平民死了——这是 *organized murder*。' +
      '问题来了——',
    engagementHook:
      '**你怎么看**——1099 那 3 天，是 God\'s war（信仰真心驱动）还是 organized murder（有组织屠杀）？' +
      '没有标准答案——给你的理由说服我。想 30 秒答',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 — 北宋 1099',
    content: {
      cn:
        '跳出耶路撒冷看一眼。1099 年 Roger 在屠城那一刻——同年的世界其他地方，发生了什么？\n\n' +
        '同年 1099 年，北宋哲宗末年。Roger 的 Pope Urban II 在罗马，53 岁的教皇号召 5 万欧洲人为信仰打仗。同年北宋的最大政治事件，是文官内部的"新党 vs 旧党"党争——是关于王安石变法到底好不好的辩论。一个皇权支持新党，另一个皇权之后支持旧党。没有人召集军队为信仰打仗——因为根本没有"独立宗教权威"可以召集。\n\n' +
        'Roger 那种"为信仰流血 4 年"的故事，在同代中国是不可能的——不是因为中国人没有信仰，而是因为制度不一样。\n\n' +
        '**关键洞察**：欧洲能有十字军，是因为"教皇"这个独立宗教权威有军事动员能力——他可以越过国王直接召集骑士。伊斯兰能有 *jihad*，是因为 caliph 在理论上是宗教 + 政治统一的——他召集穆斯林作战。中国不能有宗教战争，是因为皇权早已把宗教权威完全消化——佛、道的高僧都是皇帝任命的，没有任何独立宗教权威可以"召集军队"。\n\n' +
        '两条路径各自付出代价：\n\n' +
        '**欧洲路（教俗分立）的代价**：1095-1291 十字军（200 年武装朝圣）；1517-1648 宗教改革战争（百年内战 + 三十年战争死了欧洲三分之一人口）。\n\n' +
        '**中国路（皇权统摄宗教）的代价**：唐武宗 845 年灭佛（毁佛寺 4600 + 强迫还俗 26 万）；明清对民间宗教的反复查禁。当皇权认定某个宗教是威胁，没有独立权威能制衡。\n\n' +
        '不是"哪个对哪个错"——是不同地理 / 历史 / 制度组合下的不同 trade-off（取舍）。\n\n' +
        '你觉得：1099 年欧洲那种"教皇召集 5 万人为信仰打仗"的事——主要是因为基督教文化特殊？还是因为欧洲制度结构里教权和王权两个独立权威互不吃下对方？想 30 秒答。',
      en:
        'Step out of Jerusalem for a moment. While Roger was in the middle of the killing — what was happening on the other side of the world?\n\n' +
        'Same year, 1099. The reign of Emperor Zhezong of the Northern Song dynasty in China. Pope Urban II was in Rome, a fifty-three-year-old man rallying fifty thousand Europeans to fight for their faith. In Northern Song China that same year, the biggest political event was the *Xindang vs Jiudang* — the "New Party versus Old Party" — a dispute among civil officials about whether Wang Anshi\'s recent legal reforms had been a good idea or not. One emperor had backed the New Party; the next emperor backed the Old. No one called up an army to fight for faith — because there was no independent religious authority that could call one up.\n\n' +
        'A story like Roger\'s — bleeding for four years for belief — was structurally impossible in the China of that same year. Not because Chinese people had no beliefs, but because the institutional structure was different.\n\n' +
        '**The key point.** Europe could have a Crusade because the Pope, an independent religious authority, had power to mobilize an army — he could go around kings and call knights directly. Islam could have *jihad* because the caliph, in theory, was both religious and political authority in one. China could not have religious wars because imperial power had long since absorbed religious authority — senior Buddhist and Daoist clerics were appointed by the emperor, and no independent religious figure could call up troops.\n\n' +
        'Each path paid its own cost.\n\n' +
        '**The European path (separation of religious and royal power):** the Crusades, 1095-1291 (two hundred years of armed pilgrimage). The Reformation Wars, 1517-1648, in which civil wars and the Thirty Years\' War killed about a third of Central Europe.\n\n' +
        '**The Chinese path (imperial absorption of religious authority):** Emperor Wuzong of Tang, 845 CE, destroyed about 4,600 Buddhist monasteries and forced 260,000 monks to return to lay life. The Ming and Qing dynasties repeatedly persecuted folk religious movements. When the throne decided a religion was a threat, there was no independent religious authority to push back.\n\n' +
        'It is not "which path is right." It is a different trade-off under different geography, history, and institutions.\n\n' +
        'What do you think — was 1099-style holy war driven mainly by something special about Christian culture? Or by the structural fact that European religious power and royal power were two separate authorities, neither of which could fully swallow the other? Take thirty seconds.',
    },
    deliverGoal:
      '同年 1099 北宋——皇权 vs 教权这个张力**不存在**——' +
      '没有"独立宗教权威"——所以不可能有十字军式的宗教战争——' +
      '中国走的是**皇权统摄宗教**路径——代价是宗教被吸收无法保护自己（唐武宗灭佛）。' +
      '欧洲走的是**教俗分立**路径——代价是宗教冲突不受管制（200 年十字军 + 130 年宗教战争）。' +
      '——两条路径各自防止了对方的痛苦，也各自付出了对方没付出的代价',
    engagementHook:
      '**你怎么看**——1099 那种"为信仰打 4 年仗"是基督教**文化特殊**？还是欧洲**制度结构**（教权王权两个独立权威互不吃下对方）的产物？想 30 秒答',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    content: {
      cn:
        '你刚从 Roger 的内部走了一遍——他在 Clermont 撕红布的那一刻、他在 Antioch 围城吃老鼠的那个冬天、他在 Maarat 看 Bertrand 在帐篷外吐、他在耶路撒冷劈倒一个跪着祈祷的老人、他 60 年后死前对孙子说"我活着回来了"。\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你 surprise 的是什么？\n\n' +
        '是他 21 岁那年撕红布时心里的 4 件事——赎罪、土地、出路、家族荣誉——它们怎么被 1 句 *Deus vult* 一起捆住的？\n\n' +
        '是他在 Maarat 那 12 月没动手却闻到了——他知道自己已经"不是出发时那个人"了？\n\n' +
        '是他 7 月 15 日那一刻真心相信自己在做对的事——但 35 年的梦每个礼拜在告诉他不是？\n\n' +
        '还是他 60 岁死前对孙子说的那一句话——不是"骄傲"，不是"后悔"，只是"我活着回来了"？\n\n' +
        '说一句话告诉我。\n\n' +
        '然后——准备好了吗？接下来是记忆考核：拼写、定义、应用题。这是你把今天学的变成真正会用的最后一步。',
      en:
        'You have just walked through Roger from the inside — the moment in Clermont when he stitched red cloth onto his chest, the winter at Antioch when he ate rats, the December at Maarat when he watched Bertrand throwing up outside the tent, the day in Jerusalem when he cut down a praying old man, the moment sixty years later when he told his grandson, "I came back alive."\n\n' +
        'Before you move into the mastery check, one question:\n\n' +
        'What surprised you most in this lens?\n\n' +
        'Was it that the four things tangled in his head at twenty-one — pardon for sins, land, a way out, family honor — were all bundled together by one phrase, *Deus vult*?\n\n' +
        'Was it that at Maarat, even though he did not eat, he could smell — and he knew he was no longer the person who had left Toulouse?\n\n' +
        'Was it that on July 15 he genuinely believed he was doing the right thing — and yet for thirty-five years his dreams every week told him otherwise?\n\n' +
        'Or was it the line he gave his grandson before he died at sixty — not "pride," not "regret," only "I came back alive"?\n\n' +
        'Tell me in one sentence.\n\n' +
        'Then — are you ready? The mastery check is next: spelling, definitions, application questions. That is the step that turns what you experienced today into something you actually own.',
    },
    deliverGoal:
      '你扮演了 Roger 8 节——经历了他从 Clermont 到 Jerusalem 4 年——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换 lens 重玩——比如 Anna Komnene（拜占庭公主视角）或 Ali ibn Hassan（耶路撒冷穆斯林视角）——' +
      '——同一事件不同角度——会发现新东西',
    engagementHook:
      '**做 Roger 这一遍——最让你 surprise 的是什么**？是他 21 岁的 4 个动机捆在一起？是 Maarat 他没动手但被改变了？是 Jerusalem 他真心觉得对？还是 60 岁那句"我活着回来了"？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lenses + default
// ═══════════════════════════════════════════════════
export var lenses = {
  'roger-toulouse': {
    id: 'roger-toulouse',
    name: 'Roger de Toulouse',
    nameCn: '罗杰（虚构十字军骑士）',
    role: '南法 21 岁二儿子 / 1095-1099 perpetrator-actor 视角',
    description:
      '你扮演 Roger de Toulouse——一个虚构的南法二线骑士——21 岁在 Clermont 听 Urban II 演说——跟随 Raymond IV 出征——25 岁在耶路撒冷城墙下——你会经历他真心相信"为上帝流血"的 4 年 + 实施屠杀的 3 天 + 60 年余生每周做梦。',
    storyboard: rogerToulouseStoryboard,
  },
};

export var defaultLens = 'roger-toulouse';

// ─── 默认 export 兼容老 runtime（取 default lens 的 storyboard）──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'crusades-1099',
  schemaVersion: 2, // v2 = lens-based
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: {
    'roger-toulouse': 32,
  },
};
