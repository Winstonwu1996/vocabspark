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
        'Antioch 是叙利亚北部的一个城——城墙长 12 公里，高 18 米，有 400 座塔，背后还有 Mount Silpius 山做天然屏障。城里大约 4-8 万人。我们 5 万人围着它，但城太大，围不严。\n\n' +
        '11 月还能撑——12 月开始没粮食。冬天，叙利亚北部的山里下雪，我们没准备过冬的衣服。我们吃马，吃驴，吃营地的狗。1 月开始吃老鼠。我学会了怎么用箭头挑老鼠的小窝。\n\n' +
        '2 月里有一夜，我跟 Bertrand 在一个空帐篷边上坐着——一个叫 Pierre 的伙计前一天饿死，我们正等他被埋——Bertrand 跟我说："Roger，你听过 Stephen of Blois 吗？"我说："就那个有 5 个城堡的法国大贵族？"他说："他昨天偷偷溜了。骑马朝西走，回家。"\n\n' +
        '一个有 5 个城堡的人都跑了。我们这些没城堡的人，凭什么撑下去？\n\n' +
        '凭"教皇说我们死了直接进天堂"这一句。说真的，那 8 个月里，*indulgentia plenaria*（罪全免）那一句话比饭还让我们能活下去。我每天念 3 遍。Bertrand 也念。\n\n' +
        '6 月 3 日晚上，我们的领袖 Bohemond（博希蒙德，意大利南部诺曼公爵的儿子）收买了城里一个亚美尼亚守卫 Firouz——半夜放绳梯——60 个先锋翻进城——3 小时后大门开。\n\n' +
        '接下来 3 天，我们屠了 Antioch 城内所有穆斯林。投降的也杀。\n\n' +
        '我那年 23 岁。我已经记不得我杀了几个。',
      en:
        'I need to tell you about the eight months at Antioch — but first one number. We arrived outside Antioch on October 21, 1097, with about fifty thousand men. We broke into the city on June 3, 1098. Eight months.\n\n' +
        'Antioch was a city in northern Syria. Its walls ran twelve kilometers, eighteen meters high, with four hundred towers, and behind the city rose Mount Silpius like a natural shield. About forty to eighty thousand people lived inside. Fifty thousand of us surrounded it — but the city was so large we could not seal it tight.\n\n' +
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
        '6 月 7 日我们到城外。城里 1000 守军（Fatimid 王朝——埃及的什叶派——1098 年刚从塞尔柱手里抢回耶路撒冷）。城里居民大概 4 万——大多数穆斯林，加几千犹太人，几千东方基督徒（亚美尼亚正教、希腊正教派、叙利亚教派——这些教派跟拉丁教派不一样，但都是基督徒）。\n\n' +
        '6 月份耶路撒冷气温 35 度。城外没有水井——水井都在城内。我们最近的水源在 10 公里外。每天从那里拉水回来 + 攻城。每天都有十字军中暑死。我喝过自己的尿——不是一次。\n\n' +
        '7 月 8 日，我们的修士提议做一件事：所有十字军赤脚绕耶路撒冷城墙走 7 圈。这是仿《圣经》里 Joshua 绕 Jericho 走 7 圈，第 7 圈墙塌的故事。\n\n' +
        '7 月 8 日早上，6 点，我们 1.5 万人——剩下的活的——赤脚开始走。我那天脚底烫到起泡，但我没想停。我边走边念 *Pater Noster*（"我们的父"——拉丁文主祷文）。Bertrand 走在我旁边，他在哭——我没问他为什么——可能他想到 Pierre，可能想到 Maarat，可能他自己也不知道。\n\n' +
        '7 圈走完，城没塌。但那一天，我们 1.5 万人之间，重新连成了一个东西。我说不出那是什么——但我那天晚上躺下睡得着了，第一次。\n\n' +
        '我们造了 2 座攻城塔（giant wooden siege towers，木头结构高过城墙）——白天造，晚上守军用希腊火（Greek fire，一种火油武器，泼到木头上烧得灭不了）烧——我们烧了 1 座，剩 1 座。\n\n' +
        '7 月 14 日傍晚，最后那座塔被推到南墙。Godfrey of Bouillon——一个法国-德国边境的中等公爵——他自己第一个翻过城墙。Raymond 这边在西墙佯攻分散守军。我跟 Bertrand 在 Raymond 那一队。\n\n' +
        '7 月 15 日清晨，南门从城内打开。',
      en:
        'The walls of Jerusalem were not as high as Antioch\'s, but in June 1099 our enemy was not the wall. It was water, and sun.\n\n' +
        'We arrived outside the city on June 7. About a thousand defenders held it (the Fatimid dynasty — a Shia Muslim power based in Egypt — had taken Jerusalem back from the Seljuks just one year earlier in 1098). About forty thousand civilians lived inside. Mostly Muslims. A few thousand Jews. A few thousand Eastern Christians — Armenian, Greek Orthodox, Syriac (these were branches of Christianity whose practices were different from ours, but they were still Christians).\n\n' +
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
        '7 月 17 日傍晚，城里大概不会再有活的穆斯林了。我们去 Synagogue（犹太会堂）——里面藏着的犹太人不愿出来——我们放火烧了——里面的人全部烧死。亚美尼亚基督徒邻居死了，因为我们的拉丁兵分不清亚美尼亚正教和穆斯林。\n\n' +
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
        '**一种说法 — Riley-Smith 修正派（1980s 起，剑桥大学 Jonathan Riley-Smith 学派）**：你不能用现代世俗（secular）框架去判断中世纪人。Roger 的"信仰"不是业余爱好（hobby），是他整个世界观的基础。他卖光家产、走 4000 公里、70% 出征者死在路上——这不是"投机"——这是他真心相信赦罪。这套说法的核心：理解 medieval mind 之前，简单的"野蛮 vs 文明"二元判断是不公正的——参与者真心如此理解，*God\'s war* 是他们 1099 年的真实经验。\n\n' +
        '**另一种说法 — 现代道德底线读法（modern critical reading）**：动机的真诚不能洗白行为的性质。一个父亲真心相信自己孩子犯错该死，不能让杀孩子的事变成"教育"。Roger 真心相信，但他做的是有组织的屠杀——4 万平民里至少 3000-10000 人死，包括邻居的犹太人和亚美尼亚基督徒。"真心信"和"有组织屠杀"两件事可以同时存在，并且第二件不能被第一件抹掉。注：Christopher Tyerman《God\'s War》（2006）实际是综合派——他既承认动机真诚也批评结果——这里把对立 sharpened 是为了让你思辨，不是把他当某一边的代言人。\n\n' +
        '两边都站得住——Riley-Smith 派走"中世纪 mind 内部"看，现代道德底线读法走"行为 outcome"看。\n\n' +
        '你怎么看？1099 那 3 天，你愿意更靠近哪个读法？想 30 秒。',
      en:
        'You have just played Roger — a twenty-five-year-old knight who genuinely believed he was doing God\'s work. He cut down a praying old man on the steps of a mosque. He cut down a woman carrying her child. He killed an eight-year-old boy. He did not apologize. In those three days of July 1099, he thought he was doing the right thing.\n\n' +
        'Here is the question. What happened in Jerusalem on July 15-17, 1099 — was it *God\'s war*, or was it *organized murder*?\n\n' +
        'Historians hold two genuinely opposed readings, each grounded in primary sources (original documents).\n\n' +
        '**Reading A — the Riley-Smith revisionist school (Cambridge, from the 1980s on, led by Jonathan Riley-Smith).** You cannot judge medieval people through a modern secular (non-religious) framework. Roger\'s "faith" was not a hobby — it was the foundation of his entire worldview. The fact that crusaders sold all their family land, walked four thousand kilometers, and seventy percent died on the road — this is not speculation, it is genuine belief in pardon for sins. By this reading, 1099 was *God\'s war*, because the men who fought it understood it that way; we should judge them from inside their own minds.\n\n' +
        '**Reading B — the modern moral-line reading (modern critical scholarship).** The sincerity of the motive cannot wash the nature of the act. A father may genuinely believe his child deserves to die for a fault, but that belief does not turn the killing into "education." Roger\'s belief was real, but what he did was organized killing. Out of forty thousand civilians, at least three to ten thousand died — including the Jewish neighbors and Armenian Christian neighbors of the Muslims. Sincere belief and organized killing can both be true at the same time, and the second is not erased by the first. *Note: Christopher Tyerman\'s* God\'s War *(2006) is actually a synthesizing work — he holds both the sincerity of motive and the criticism of outcome together. The opposition is sharpened here for the lens to make you think, not to make Tyerman the spokesperson for one side.*\n\n' +
        'Both sides stand. The Riley-Smith reading enters the medieval mind from inside. The modern moral-line reading judges from the outcome of the action.\n\n' +
        'What do you think? On those three days in 1099, which reading do you lean toward? Take thirty seconds — your reasoning matters more than your conclusion.',
    },
    deliverGoal:
      '你刚扮演了 Roger——一个真心相信自己在做"上帝的工作"的 25 岁骑士——' +
      '他在 1099 年 7 月那 3 天里以为自己在做对的事。' +
      '但是历史学界对此有**两种真实并立**的解读：' +
      '**一种说法（Riley-Smith 修正派）**：动机真诚——不能用现代框架判断中世纪人——这是 *God\'s war*。' +
      '**另一种说法（现代道德底线读法）**：真诚不能洗白屠杀——3000-10000 平民死了——这是 *organized murder*。' +
      '问题来了——',
    engagementHook:
      '**你怎么看**——1099 那 3 天，是 God\'s war（信仰真心驱动）还是 organized murder（有组织屠杀）？' +
      '没有标准答案——给你的理由说服我。想 30 秒',
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
        '你觉得：1099 年欧洲那种"教皇召集 5 万人为信仰打仗"的事——主要是因为基督教文化特殊？还是因为欧洲制度结构里教权和王权两个独立权威互不吃下对方？想 30 秒。',
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
      '**你怎么看**——1099 那种"为信仰打 4 年仗"是基督教**文化特殊**？还是欧洲**制度结构**（教权王权两个独立权威互不吃下对方）的产物？想 30 秒',
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
// LENS 3: Aisha bint Yusuf（耶路撒冷 12 岁穆斯林女孩 / 受害方视角）
// ═══════════════════════════════════════════════════
//
// 角色设定：
//   - 1099 年 12 岁，住耶路撒冷 Souq al-Qattanin（棉布市场）边巷
//   - 父亲 Yusuf ibn Ahmad 中等棉布商人，识字
//   - 母亲 Layla，弟弟 Hasan 6 岁
//   - Aisha 自己识字，帮父亲数布，最爱后院无花果树
//   - 邻居：亚美尼亚基督徒铁匠 Sarkis 一家，11 岁儿子 Hovsep
//   - 姨妈 Khadija 抱 1 岁女儿被劈死——红头巾是 Aisha 织的
//   - 1099/07/14 城破——躲地窖——父亲被杀
//   - 1099/07/22 母亲带她跟 Hasan 逃 Ascalon 投奔姨姑
//   - 1187 Saladin 重夺耶路撒冷不屠城——但她家没回去
//
// lens 关键张力（对位 Tom 的 "invisible common person who was there but excluded"）：
//   - Aisha 是 Roger Node 7 屠杀的接受端
//   - Khadija 红头巾 echo Roger Node 7 那个红头巾——但不直白说，让用户自己 connect
//   - 12 岁——跟 Willow（用户女儿）同龄——有意的代入设计
//
// anti-orientalism 硬规：Aisha 不是"东方神秘女孩"——她爱无花果树、跟邻居小女孩玩、识字、抱怨——
// 一个 12 岁普通女孩，会让 Willow 觉得"这就是我"
//
// anti-victim-only 硬规：前几节点写她作为 12 岁活人——好奇、调皮、爱、抱怨——
// 不要从一开始预告悲剧
//
// 现代政治硬禁：1948/1967/现代以巴问题不存在——这是 11 世纪——让它在 11 世纪
//
var aishaJerusalemStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§3 耶路撒冷居民视角 + §4 1099/06 围城前',
    content: {
      cn:
        '1099 年 6 月 6 日，星期二早上。\n\n' +
        '我叫 Aisha bint Yusuf——意思是"Yusuf 的女儿 Aisha"。我 12 岁。\n\n' +
        '我家住耶路撒冷 Souq al-Qattanin（棉布市场）边上的小巷——后院有一棵无花果树，今年的果子还没熟，绿绿的小球挂在叶子下面。我每天早上是被 Al-Aqsa 那边宣礼塔的 *adhan*（叫拜声）叫醒的——一个声音从城南飘过来，绕过 Souq 的房顶，落在我枕头上。\n\n' +
        '我爸是 Yusuf ibn Ahmad，棉布商人——铺子在 Souq 后排第三家，门口挂着两卷靛蓝色和一卷红色的布。他识字，懂阿拉伯语写法，还能读一点波斯语。我也识字——是我妈 Layla 教的。我下午在铺子里帮我爸数布——一卷算一码——我数得比他快。\n\n' +
        '我弟弟 Hasan 6 岁——他什么都不算，他只追院子里的猫。\n\n' +
        '6 月 6 日那天傍晚——我爸从城门那边回来——脸色不一样。他坐在院子石凳上没说话。我端水给他，他喝了一口才开口：\n\n' +
        '"Frangi 来了。"（Frangi——阿拉伯人对法兰克人的称呼，泛指来自西欧的基督徒。）\n\n' +
        '我问："Frangi 是什么？"\n\n' +
        '我爸没回答。他只是看了一眼无花果树。我那时候不知道——但我后来想起来，那是我最后一次看见他坐在石凳上不皱眉。',
      en:
        'Tuesday morning, June 6, 1099.\n\n' +
        'My name is Aisha bint Yusuf — that means "Aisha, daughter of Yusuf" in Arabic. I am twelve years old.\n\n' +
        'My family lives in a small alley off the Souq al-Qattanin (the Souq, the Arab marketplace, and *al-Qattanin* means "the cotton merchants"). Behind our house there is a fig tree. The fruit is not ripe yet — only small green balls hanging under the leaves. Every morning I wake to the *adhan* (the Muslim call to prayer, sung from the top of a tower) — a voice drifting from the south, over the rooftops of the Souq, landing on my pillow.\n\n' +
        'My *baba* (father in Arabic) is Yusuf ibn Ahmad. He is a cotton merchant. His shop is third in the back row of the Souq — two rolls of indigo blue cloth and one of red hanging by the door. He can read Arabic well, and a little Persian. I can read too — my *ummi* (mother) Layla taught me. In the afternoons I count cloth in the shop — one roll, one yard. I count faster than my *baba*.\n\n' +
        'My little brother Hasan, six years old, counts nothing. He chases the cats in the courtyard.\n\n' +
        'On the evening of June 6, my *baba* came back from the city gate. His face was different. He sat on the stone bench in the courtyard and did not speak. I brought him water. He drank a sip and then said:\n\n' +
        '"The *Frangi* are coming." (*Frangi* — the Arabic name for the Franks, the Christians from Western Europe.)\n\n' +
        'I asked, "Baba, what is a *Frangi*?"\n\n' +
        'He did not answer. He only looked at the fig tree. I did not know it then — but later I would remember: that was the last evening I saw him sitting on the bench without a frown on his face.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁——我问"Frangi 是什么"——我爸没回答——你猜接下来 6 周我会知道什么',
    expectedLength: '220-260 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§3 耶路撒冷日常 + §2 1099 多教派共存',
    content: {
      cn:
        '在我告诉你 Frangi 是什么之前——我先告诉你我的世界长什么样。\n\n' +
        '我们 Souq al-Qattanin 这条巷里——左边一户是亚美尼亚基督徒铁匠 Sarkis 家——他儿子 Hovsep 11 岁——比我小 1 岁——但因为他是男孩，有时候他骑墙头看我跟邻居小女孩 Maryam 玩——他爱装哥哥的样子但其实他怕老鼠。Sarkis 在自家炉子上打铁——叮叮叮——我从小就听这个声音长大，跟 *adhan* 一样自然。\n\n' +
        '右边是犹太人 Yakov 一家——卖橄榄油——Yakov 的女儿 Esther 9 岁——我们一起在小巷踢沙子。\n\n' +
        '我妈说，我们这条巷三个家——穆斯林、亚美尼亚正教基督徒、犹太人——三家在这里住了 80 年——我爷爷的爷爷就跟 Sarkis 的爷爷的爷爷一起喝过茶。\n\n' +
        '1098 年我 11 岁生日那年——我妈教我织一条红头巾——给我姨妈 Khadija 当 1099 年 3 月她 28 岁的生日礼物。我织了 4 个月——线脚不齐——但 Khadija 姨妈拿到的时候，她笑着把头巾绕在头上转了一圈说："Aisha 我侄女，你织的——这是我这辈子收到的最好的礼物。"\n\n' +
        '她那天抱着我 1 岁的小表妹 Fatima——Fatima 在她怀里抓她的红头巾——口水流到红线上——Khadija 笑着没擦。\n\n' +
        '6 月 7 日 *adhan* 之后——我跟 Maryam 在无花果树下——我跟她说："我爸说 Frangi 来了，但他不告诉我 Frangi 是什么。"Maryam 12 岁，她耸耸肩说："换一拨兵。去年（1098）刚换过——埃及的 Fatimid 把塞尔柱赶出去——城里热闹一礼拜，然后什么都一样。"\n\n' +
        '我那天点头——我相信她。',
      en:
        'Before I tell you what *Frangi* are, let me show you what my world looked like.\n\n' +
        'In our alley off the Souq al-Qattanin — to the left lives Sarkis, an Armenian Christian blacksmith. His son Hovsep is eleven, one year younger than me. Because he is a boy, he sometimes climbs the wall to watch me play with my neighbor Maryam. He likes to act like an older brother, but really he is afraid of mice. Sarkis hammers iron on his forge — *clang clang clang* — I have grown up with that sound the way I have grown up with *adhan*.\n\n' +
        'To the right lives Yakov, a Jewish family — they sell olive oil. Yakov\'s daughter Esther is nine. We kick sand together in the alley.\n\n' +
        'My *ummi* says, our three houses on this alley — Muslim, Armenian Christian, Jewish — have been here for eighty years. My great-grandfather drank tea with Sarkis\'s great-grandfather.\n\n' +
        'For my eleventh birthday in 1098, my *ummi* taught me how to weave a red headscarf — a gift for my *khala* (aunt) Khadija for her twenty-eighth birthday in March 1099. I worked on it for four months. The stitching was uneven. But when Khadija received it, she laughed, wrapped it around her head, spun once, and said: "Aisha, my niece — this is the best gift I have ever received in my life."\n\n' +
        'That day she was holding my one-year-old cousin Fatima. Fatima grabbed at the red headscarf in her *ummi*\'s hands. Drool ran down the red yarn. Khadija laughed and did not wipe it off.\n\n' +
        'On June 7, after *adhan*, I sat under the fig tree with Maryam. I told her: "My *baba* said the *Frangi* are coming, but he will not tell me what they are." Maryam, twelve, shrugged and said: "Just another batch of soldiers. Last year (1098) the Egyptian Fatimids pushed the Seljuks out — the city was loud for a week, and then everything went back to normal."\n\n' +
        'I nodded that day. I believed her.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁的世界——红头巾 + 无花果树 + 邻居小女孩——你想象一下，6 周后这一切要改变',
    expectedLength: '240-280 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/06-07 围城 5 周 + Fatimid 防守',
    content: {
      cn:
        '6 月 7 日——Frangi 真的来了。我那天下午爬上 Souq 的房顶——跟 Hovsep 一起——他比我先爬上去——他指着城外说："看。"\n\n' +
        '城墙外是黄黄的丘陵——Judean 山地——平时没有人——那天上面铺满了灰白色的人和马。我数过——从北到南——我数到 800 就数不下去了——后面还有一片。Hovsep 说："上千。可能两千。"\n\n' +
        '我后来才知道是 1.5 万。\n\n' +
        '城里有 Fatimid 王朝（埃及的什叶派穆斯林——1098 年从塞尔柱手里抢回耶路撒冷的）的 1000 守军。城里居民大概 4 万——多数穆斯林，几千犹太人，几千东方基督徒。我们家是穆斯林——Sarkis 家是亚美尼亚正教基督徒——我们这一巷三家住了 80 年了。\n\n' +
        '6 月底开始没水。我们城里的水井都还有水——但守军把它们封住分配——一家一天只能取两罐。我跟我妈每天早晨去 Souq 北口的那个井排队——队伍 80 个人——我跟 Hovsep 一家也排——我跟他在队里聊天——他说他爸开始打武器了。\n\n' +
        '7 月 8 日早上——我从院子里听见一个奇怪的声音从城外飘进来——一群男人在念什么——不是阿拉伯语——也不是希腊语（我以前听过希腊正教派那边唱诗）——是另一种发硬的话。我跑去问我爸——他从铺子里出来——脸色发白——他说："Frangi 在念他们的祷告。他们赤脚绕城走。"\n\n' +
        '我说："Baba——他们也信主？"\n\n' +
        '我爸没回答。他坐下，闭上眼睛。\n\n' +
        '我那天 12 岁——我真的不懂——为什么有人念祷告，同时来杀人？我反复想这个问题——我那年没想明白——我后来 30 岁也没想明白。',
      en:
        'June 7 — the *Frangi* really came. That afternoon I climbed onto the roof of the Souq with Hovsep. He climbed up first and pointed: "Look."\n\n' +
        'Beyond the walls were the yellow hills — the Judean hills — usually empty. That day they were covered with grey-white men and horses. I counted from north to south. I reached eight hundred and could not count further — there was still more behind. Hovsep said: "A thousand. Maybe two thousand."\n\n' +
        'Later I learned it was fifteen thousand.\n\n' +
        'The city had one thousand Fatimid soldiers (the Fatimids were the Shia Muslim dynasty from Egypt — they had pushed the Seljuks out of Jerusalem just one year earlier, in 1098). Inside the walls lived about forty thousand people — mostly Muslims, a few thousand Jews, a few thousand Eastern Christians. We were Muslim. Sarkis\'s family was Armenian Christian. The three houses on our alley had stood there for eighty years.\n\n' +
        'By the end of June there was no water outside. The wells inside the city still had water, but the soldiers sealed them and rationed — two jars per family per day. Every morning my *ummi* and I went to the well at the north end of the Souq and waited in line. Eighty people. Hovsep\'s family waited too. I talked with him in line — he said his *baba* had begun forging weapons.\n\n' +
        'On the morning of July 8, I heard a strange sound drift in from outside the walls — a group of men chanting something. Not Arabic. Not Greek (I had heard the Greek Orthodox sing before). It was a different language, harder. I ran to ask my *baba*. He came out of the shop with a pale face. He said: "The *Frangi* are saying their prayers. They are walking around the walls barefoot."\n\n' +
        'I said: "*Baba* — they pray to God too?"\n\n' +
        'My *baba* did not answer. He sat down and closed his eyes.\n\n' +
        'I was twelve. I really did not understand. How can someone say prayers and at the same time come to kill us? I turned that question over and over. I did not figure it out at twelve. I did not figure it out at thirty either.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁问出那一句"他们也信主？"——我爸没回答——你 12 岁的时候问过类似问题吗',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/08 Pater Noster + 守军视角',
    content: {
      cn:
        '7 月 8 日下午我又爬上 Souq 房顶——这次不是 Hovsep 拉我——是我自己想看。\n\n' +
        '城外那群人——一万多——赤脚——一圈一圈绕着我们的城墙走。Judean 7 月地面 35 度——他们脚底起泡——我从房顶上看不见血但我能想象。他们一边走一边念——*Pater noster, qui es in caelis*——我后来 20 岁那年遇到一个会拉丁语的修道士才知道这是"我们的父，在天上的——"\n\n' +
        '我那天下午想起一件事——我们 *Surah Al-Fatiha*（古兰经第 1 章——7 句话——开篇）的第一句也是说"赞美归主——众世界的主"——他们的祷告也是赞美主。\n\n' +
        '同一个主？\n\n' +
        '不同的主？\n\n' +
        '我下不来房顶——我一直坐到天黑——*adhan* 响的时候我才回家。\n\n' +
        '7 月 10 日开始我们城内守军用 Greek fire（希腊火——一种火油武器，泼到木头上烧得灭不了——拜占庭技术，Fatimid 王朝学来的）烧 Frangi 造的攻城塔。第一座塔烧成了。城外烧黑的木头堆了一夜。\n\n' +
        '7 月 13 日——他们造起第二座。\n\n' +
        '7 月 14 日傍晚——我跟 Hasan 在院子。无花果树的果子开始变紫——熟了——我摘了一个给他——他咬了一口红汁流出来。\n\n' +
        '突然——城南那边一声巨响——城墙塌了一段。我爸冲进院子——他抓住我妈的手——他第一次对我妈用我从没见过的语气："Layla——把孩子带到地窖。现在。"\n\n' +
        '我妈愣了 1 秒——然后她抱起 Hasan——她一只手抓我——把我们拽进铺子。\n\n' +
        '我爸没下来。他要看店。',
      en:
        'On the afternoon of July 8 I climbed onto the Souq roof again. This time Hovsep did not pull me up. I climbed alone. I wanted to see.\n\n' +
        'Outside the walls — more than ten thousand men — barefoot — walking circle after circle around our city. The ground in Judean July is thirty-five degrees Celsius. Their feet must have blistered. From the roof I could not see blood but I could imagine. As they walked they chanted — *Pater noster, qui es in caelis* — twenty years later I would meet a monk who knew Latin and learn that this meant "Our Father, who art in heaven."\n\n' +
        'That afternoon something occurred to me. The first line of *Surah Al-Fatiha* — the opening chapter of the *Quran* (the holy book of Islam), seven verses — also says *al-hamdu lillahi rabbil alameen*, "praise be to the Lord of all the worlds." Their prayer also praised the Lord.\n\n' +
        'The same Lord?\n\n' +
        'A different Lord?\n\n' +
        'I could not climb down. I sat there until dark. I came home only when *adhan* sounded.\n\n' +
        'Starting July 10, our defenders used Greek fire (a burning oil weapon — it cannot be put out with water — a Byzantine technology that the Fatimids had learned) to set fire to the wooden siege towers the *Frangi* had built. The first tower burned to ash. Black charred wood smoldered outside the walls all night.\n\n' +
        'July 13 — they built a second tower.\n\n' +
        'July 14, evening — I sat in the courtyard with Hasan. The figs on our tree had started to turn purple — ripening. I picked one and gave it to him. He bit into it and red juice ran down his chin.\n\n' +
        'Then — a huge sound from the south wall. A section had collapsed. My *baba* burst into the courtyard, grabbed my *ummi*\'s hand, and used a tone I had never heard from him: "Layla — take the children to the storage cellar. Now."\n\n' +
        'My *ummi* froze for one second. Then she scooped up Hasan, grabbed me, and pulled us into the shop.\n\n' +
        'My *baba* did not come down. He stayed to watch over the shop.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁——我看到 Frangi 也念祷告——我糊涂了——你接下来 3 天，我要进地窖——',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/14 夜 + 地窖躲藏',
    content: {
      cn:
        '我家铺子的地窖是储布的——一个 2 米深的地下室——盖板是木头的——上面盖一层棉布看不出来。平时我跟 Hasan 在里面捉迷藏。\n\n' +
        '7 月 14 日傍晚我跟我妈、Hasan 三个人挤进去。地窖里堆着 30 多卷棉布——我爸春天从大马士革进的货——我们三个钻进棉布堆里。\n\n' +
        '盖板合上之前——我爸把头探进来——他对我妈说了一句什么——我没听清——只听见最后一个词是"Aisha"——然后盖板合上了。我后来想了一辈子——他那一句到底说的是什么。\n\n' +
        '楼上——我爸的脚步声——他在搬什么——可能他想堵住门——可能他在收钱——可能他只是想让自己有事做。\n\n' +
        'Hasan 6 岁——他在棉布堆里抓我妈的衣袖——他的眼睛在地窖里发亮——我能看见。\n\n' +
        '过了多久——我不知道——可能 2 小时——可能 4 小时——楼上传来一个陌生的声音。\n\n' +
        '不是阿拉伯语。不是希腊语。是那种发硬的话——*Pater Noster* 那种话。\n\n' +
        '我爸的声音——他在说什么——慢——他可能在解释——他可能在跟人讨价还价——我那一刻 12 岁——我以为他在让对方拿铺子里的布走。\n\n' +
        '然后——一个声音——我没法形容——是一个人喉咙里发出"咕"的声音——不长——半秒——然后没了。\n\n' +
        '楼上一片静。\n\n' +
        '我妈一只手堵住 Hasan 的嘴——另一只手抓我的手——她的手在抖——她没出声——她也没哭。\n\n' +
        '我那一刻——我以为我爸跟那个人达成了协议——我以为他坐下来在数钱——\n\n' +
        '——我那一刻还不知道——已经发生了什么。',
      en:
        'The cellar in my *baba*\'s shop was for storing cloth — a small underground room about two meters deep, with a wooden lid covered by a layer of cotton so it could not be seen from above. In ordinary times I played hide-and-seek with Hasan down there.\n\n' +
        'On the evening of July 14, the three of us — me, my *ummi*, Hasan — squeezed in. The cellar held thirty-some rolls of cotton cloth my *baba* had bought from Damascus that spring. We burrowed into the cloth pile.\n\n' +
        'Before the lid came down — my *baba* pushed his head through and said something to my *ummi*. I could not catch all of it. The last word I heard was "Aisha." Then the lid closed. I have spent the rest of my life wondering what that one sentence was.\n\n' +
        'Above us — my *baba*\'s footsteps. He was moving something. Maybe trying to block the door. Maybe gathering coins. Maybe just trying to keep himself busy.\n\n' +
        'Hasan, six, clutched my *ummi*\'s sleeve. His eyes were bright in the dark. I could see them.\n\n' +
        'I do not know how long passed — two hours, four hours — and then a strange voice came from upstairs.\n\n' +
        'Not Arabic. Not Greek. The hard language. The *Pater Noster* language.\n\n' +
        'My *baba*\'s voice — slow — he might have been explaining something — he might have been bargaining — I was twelve and I thought he was telling the person to take the cloth and leave.\n\n' +
        'Then — a sound — I cannot describe it — a "huh" from inside someone\'s throat — half a second — and then it was gone.\n\n' +
        'Silence upstairs.\n\n' +
        'My *ummi* clamped one hand over Hasan\'s mouth and gripped my hand with the other. Her hand was shaking. She did not make a sound. She did not cry.\n\n' +
        'In that moment, I thought my *baba* had reached an agreement with the man. I thought he had sat down to count the money.\n\n' +
        'I did not know yet — what had already happened.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 12 岁躲在棉布堆里——我以为我爸在讨价还价——我不知道——你听见那一声"咕"了吗',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/15-17 屠城 3 天 + 地窖煎熬',
    content: {
      cn:
        '7 月 15 日早上——光从盖板缝里漏进来一点点——我才知道是天亮了。我们 3 个还在棉布堆里。\n\n' +
        '我妈跟我说——用气声——"念 *Surah Al-Fatiha*——别出声——念。"\n\n' +
        '我闭眼念第一句——*Bismi-llāhi r-raḥmāni r-raḥīm*——奉至仁至慈的主之名——\n\n' +
        '念到第三句的时候——楼上来了脚步声。\n\n' +
        '不是我爸的步——重——靴子——三个人——他们说着 *Pater Noster* 那种话——他们在翻东西——他们撞翻一只箱子——然后又一只——他们走出去。\n\n' +
        '我屏住呼吸念完 7 句。\n\n' +
        '然后我从头再念。\n\n' +
        '7 月 15 日下午——脚步又来——这次只有 1 个——他翻棉布——离我们头顶 50 厘米——我能听见棉布卷被推开的声音——他翻了 3 卷——我心里念的是"主啊别让他翻第 4 卷"——他翻第 4 卷的时候——突然外面有人喊他——他放下手走了。\n\n' +
        '我那 7 句念了几遍——我数不清——可能 30 遍——可能 50 遍。\n\n' +
        '7 月 16 日——一整天——楼上没有声音。\n\n' +
        '7 月 17 日早上——又来一波脚步——这次他们没翻棉布——他们只是走过——靴子上有什么湿的拖痕——我从棉布缝里看不见但我闻到——是铁味——是血。\n\n' +
        'Hasan 哭了一次——我妈用棉布堵他嘴——他咬住没出声——他 6 岁——他咬棉布的时候眼泪从他眼角流到我手上——温的。\n\n' +
        '7 月 17 日傍晚——我妈在我耳朵边说："明天早上听不见声音，我们出去。"',
      en:
        'July 15, morning — a thin line of light came through a crack in the lid. That was how I knew it was day. The three of us were still in the cotton.\n\n' +
        'My *ummi* whispered to me: "Recite *Surah Al-Fatiha*. Silent. In your head."\n\n' +
        'I closed my eyes and recited the first verse — *Bismi-llāhi r-raḥmāni r-raḥīm* — "In the name of God, the most gracious, the most merciful" —\n\n' +
        'On the third verse — footsteps came.\n\n' +
        'Not my *baba*\'s steps. Heavy. Boots. Three men. They were speaking the *Pater Noster* language. They were going through the shop, knocking things over — a chest, then another. They walked out.\n\n' +
        'I held my breath and finished the seven verses.\n\n' +
        'Then I started again from the beginning.\n\n' +
        'July 15, afternoon — footsteps again. This time only one man. He moved the cotton rolls. Fifty centimeters above our heads — I could hear each roll being shoved aside. He shifted three rolls. I prayed in my head — "God, do not let him touch the fourth" — when he reached the fourth, someone shouted from outside. He put it down and left.\n\n' +
        'How many times did I recite the seven verses? I lost count. Maybe thirty. Maybe fifty.\n\n' +
        'July 16 — the whole day, no sound from above.\n\n' +
        'July 17, morning — another set of boots. They did not move the cotton this time. They just walked through. Their boots dragged something wet. I could not see it through the cloth, but I could smell it. Iron. Blood.\n\n' +
        'Hasan cried once. My *ummi* pushed cotton into his mouth. He bit it and made no sound. He was six. As he bit the cotton, tears ran down his cheek onto my hand — warm.\n\n' +
        'On the evening of July 17, my *ummi* whispered into my ear: "Tomorrow morning, if there is no sound — we go out."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我念了 30 遍 *Surah Al-Fatiha*——我妈堵 Hasan 的嘴——明天我们要爬出来——',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/18 第 4 天 + 父亲尸体',
    content: {
      cn:
        '7 月 18 日清晨——*adhan* 没响。\n\n' +
        '我那时候才 12 岁——我每天早上是被 *adhan* 叫醒的——12 年了——它没响——我一开始以为是我聋了。\n\n' +
        '我妈推开盖板——光涌进来——我眼睛不适应——我从棉布堆里爬出来——铺子里——\n\n' +
        '我第一眼看见的是——\n\n' +
        '我爸的尸体——在棉布堆旁边——脸朝下——他的背后被劈开——一道很长的口子——从左肩到右腰——血已经干了变黑——但我看见的不是那个——\n\n' +
        '我看见的是——他左手还握着一卷红布——\n\n' +
        '——那卷红布是我去年帮他从大马士革进货那批里——我喜欢颜色——我说："Baba 这卷留着——以后我嫁人当嫁衣。"——他笑了——他说"留着"——然后他把这一卷搁在铺子最里面架子上——\n\n' +
        '——他临死那一刻抓的是这一卷。\n\n' +
        '我没哭。我那一刻 12 岁——我没哭——我只是站着——我妈跪下——她也没哭——她已经没声音了。\n\n' +
        'Hasan 6 岁——他爬到我爸身上——他不肯起来——他抓我爸的胳膊——他想叫"Baba"但他叫不出来——他衣袖上溅了血——是我爸的——\n\n' +
        '过了多久我不知道——我妈站起来——她轻轻把 Hasan 抱开——她说："Aisha——我们必须走。城里还有兵。"\n\n' +
        '我那一刻第一次问出一个问题——"姨妈呢——Khadija 姨妈呢——Fatima 表妹呢？"\n\n' +
        '我妈没回答。\n\n' +
        '我们走出铺子——Souq 里——我从那一刻开始——再也不是那个 12 岁的女孩。',
      en:
        'July 18, dawn — there was no *adhan*.\n\n' +
        'I was twelve. Every morning of my life — twelve years — *adhan* had woken me. It did not sound. At first I thought I had gone deaf.\n\n' +
        'My *ummi* pushed the lid open. Light flooded in. My eyes did not adjust at first. I climbed out of the cotton. In the shop —\n\n' +
        'The first thing I saw was —\n\n' +
        'My *baba*\'s body. Beside the cotton pile. Face down. His back was cut open — one long wound — from left shoulder to right hip. The blood had dried black. But what I saw was not the wound —\n\n' +
        'What I saw was — his left hand still gripped a roll of red cloth.\n\n' +
        'That roll of red — last year when I helped him sort the Damascus shipment, I had liked the color. I had said: "Baba — keep this one. When I get married, I want it for my wedding dress." He had laughed and said "I will keep it." Then he placed that one roll on the highest shelf at the back of the shop.\n\n' +
        'In his last moment — that was the roll he had grabbed.\n\n' +
        'I did not cry. I was twelve and I did not cry. I just stood. My *ummi* knelt down. She did not cry either. Her voice was already gone.\n\n' +
        'Hasan, six, climbed onto my *baba*\'s body and would not get off. He grabbed my *baba*\'s arm. He tried to call "Baba" but could not get the word out. His sleeve was spattered with blood — my *baba*\'s blood.\n\n' +
        'How long passed? I do not know. My *ummi* stood, lifted Hasan gently away, and said: "Aisha — we must go. There are still soldiers in the city."\n\n' +
        'I asked my first question — "*Ummi* — what about *khala* Khadija? What about cousin Fatima?"\n\n' +
        'My *ummi* did not answer.\n\n' +
        'We walked out of the shop. Into the Souq. From that moment on — I was no longer the twelve-year-old girl I had been the morning before.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我爸临死抓的是我未来婚嫁那卷红布——我没哭——我妈说我们必须走——',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 街上场景 + Hovsep + Khadija 红头巾',
    content: {
      cn:
        'Souq 里——\n\n' +
        '我不能描写得很细——我那一刻 12 岁——我看见的也不是细节——我看见的是地上——一片接一片——人——有的是我认识的——有的不是。\n\n' +
        '左边铁匠铺——Sarkis 一家四口——Sarkis、他老婆、Hovsep 11 岁、Hovsep 妹妹 8 岁——都倒在自家炉子边——Hovsep 嘴半张——他临死那刻可能想喊"我们是基督徒——亚美尼亚正教"——但 Frangi 兵没听过这个区分——他们只看你的衣服——亚美尼亚正教的袍子跟穆斯林的袍子在他们眼里一样——他们没分。\n\n' +
        '我那一刻——我对"基督徒"这个词的理解永远变了——\n\n' +
        '——3 个礼拜前我跟 Hovsep 在 Souq 房顶看 Frangi——他指着说"看"——他比我先看见 Frangi——他不知道他自己看见的是杀他的人——\n\n' +
        '——杀他的人也是基督徒——\n\n' +
        '——基督徒杀基督徒——同一个词——两个意思——我从那天起——再也不相信"我们和他们"是稳定的边界。\n\n' +
        '我们走到 Souq al-Qattanin 入口——一棵无花果树（不是我家那棵——是 Souq 入口那棵公用的）——树下——\n\n' +
        '我妈停下——她突然跪下——\n\n' +
        '——Khadija 姨妈——她被劈死在树下——她怀里抱的 Fatima 1 岁——也死了——Khadija 是想从市场逃出去的那个早上——她绕道经过 Souq——\n\n' +
        '我看见了——\n\n' +
        '——她头上还戴着那条红头巾——我去年织的那条——线脚不齐的那条——\n\n' +
        '——红头巾上现在多了一片更深的红——是她自己的血——\n\n' +
        '——我妈抱住 Khadija——她终于发出了第一个声音——不是哭——是一个我不认识的声音。\n\n' +
        '我那一刻 12 岁——我站在我妈和我姨妈中间——我才意识到——\n\n' +
        '——杀 Khadija 的那个人——可能就是 7 月 14 日翻进我家铺子杀我爸那批人里的——某一个——他可能从这棵树下走过的时候——只看到了一条红头巾——他没看到我的姨妈——他没看到 Fatima 表妹——他没看到这条头巾是我去年织的——\n\n' +
        '——但我看到了。',
      en:
        'In the Souq —\n\n' +
        'I cannot describe it in detail. I was twelve. What I saw was not detail. What I saw was the ground — patch after patch — people — some I knew, some I did not.\n\n' +
        'The blacksmith\'s on the left — Sarkis\'s family of four — Sarkis, his wife, Hovsep at eleven, Hovsep\'s eight-year-old sister — all lying around the forge. Hovsep\'s mouth was half-open. In his last moment he might have tried to shout, "We are Christians — Armenian Christians." But the *Frangi* soldiers had never heard of that distinction. They looked only at clothing. To them, an Armenian Christian robe and a Muslim robe looked the same. They did not separate.\n\n' +
        'In that moment my understanding of the word "Christian" changed forever —\n\n' +
        'Three weeks earlier, Hovsep and I had stood on the Souq roof watching the *Frangi*. He had pointed first and said "Look." He did not know — he was looking at the people who would kill him —\n\n' +
        'And those people were also Christians.\n\n' +
        'Christians killing Christians. Same word. Two meanings. From that day on, I never again believed "us and them" was a stable boundary.\n\n' +
        'We reached the entrance of the Souq al-Qattanin. There was a fig tree there — not the one in our courtyard, the public one at the market entrance. Under the tree —\n\n' +
        'My *ummi* stopped. She suddenly knelt.\n\n' +
        '*Khala* Khadija. She had been cut down beneath the tree. Fatima, one year old, in her arms — also dead. Khadija had tried to escape the market that morning. Her path took her past this tree —\n\n' +
        'I saw —\n\n' +
        'She still had the red headscarf on her head. The one I had woven last year. The one with the uneven stitches.\n\n' +
        'There was a deeper red on the red — her own blood.\n\n' +
        'My *ummi* held Khadija and finally let out a sound. Not a cry. A sound I did not recognize.\n\n' +
        'I was twelve. I stood between my *ummi* and my *khala*. And I understood —\n\n' +
        'The man who killed Khadija — he might have been one of the men who climbed into my *baba*\'s shop on July 14. When he passed under this tree, he saw only a red headscarf. He did not see my *khala*. He did not see my cousin Fatima. He did not see that this headscarf was something I had woven last year.\n\n' +
        'But I saw it.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Hovsep 11 岁——基督徒杀基督徒——我姨妈红头巾上的那一片更深的红——',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'Aisha bint Yusuf',
    narrativeRef: '§4 1099/07/22 分赃 + 逃 Ascalon',
    content: {
      cn:
        '7 月 22 日——我们在 Souq 边巷蜷了 4 天——靠地窖里剩的水跟一点干馕。\n\n' +
        '那天 Frangi 头领（我后来知道是 Raymond——南法那个独眼伯爵——给南法部队分赃）的人来——他们挨家敲门——他们要分耶路撒冷里活下来的房子和店——给那群 Frangi 兵——\n\n' +
        '我们那条巷的房子也分。\n\n' +
        '一个 Frangi 兵——大概 25 岁——胸口缝着一块红布的十字架——他打开我家铺子的门——他看见了我爸的尸体——他没说什么——他指着我妈跟我跟 Hasan——他比手势——"出去——这个铺子——是我的了。"\n\n' +
        '他没杀我们。\n\n' +
        '——为什么？\n\n' +
        '——因为分给他的是铺子，不是命。\n\n' +
        '——也因为屠城已经过了 7 天——他们的领袖已经下令"够了"。\n\n' +
        '——也因为——也许——他这一刻看着我妈、看着 Hasan、看着我——他突然意识到了什么——\n\n' +
        '——但我没问他。我那一刻 12 岁——我只想我妈赶紧带我跟 Hasan 出门。\n\n' +
        '我们带的全部——一只装水的羊皮袋、一块干馕、我爸放在床头那本《古兰经》第 2 章的节录（他自己抄的）——还有我胸前那条没织完的、本来要给 Maryam 当 13 岁生日礼物的小蓝头巾。\n\n' +
        '我妈说："去 Ascalon——你 Auntie Hadeel 在那儿——3 天路。"\n\n' +
        '我们走出耶路撒冷东门——回头看一眼——\n\n' +
        '——城墙后面冒着黑烟——是他们烧 Synagogue（犹太会堂）那一波——里面 Yakov 一家也死了——但我那一刻不知道——\n\n' +
        '——Souq 里的无花果树——我家院子那棵——还在那里——我没回去摘最后一颗果子——\n\n' +
        '——我也再没机会回去了。\n\n' +
        '3 天后我们到 Ascalon——Auntie Hadeel 看见我妈跟 Hasan 跟我——她跪下——她哭——她哭了一整夜。我妈那一夜没哭——她已经没那个能力了。',
      en:
        'July 22 — we had been hiding in a side alley for four days, surviving on water from the cellar and a little dry bread.\n\n' +
        'That day Count Raymond\'s men (the one-eyed southern French count, distributing the spoils to his troops) came through. They knocked on every door. They were dividing the surviving houses and shops of Jerusalem among the *Frangi* soldiers.\n\n' +
        'Our alley was on the list.\n\n' +
        'A *Frangi* soldier — about twenty-five — with a red cloth cross stitched onto his chest — opened the door of my *baba*\'s shop. He saw my *baba*\'s body. He did not say anything. He pointed at my *ummi*, at me, at Hasan. He gestured: "Out. This shop — is mine now."\n\n' +
        'He did not kill us.\n\n' +
        'Why?\n\n' +
        'Because what was given to him was the shop, not our lives.\n\n' +
        'Because seven days had passed since the killing began, and their leaders had ordered "enough."\n\n' +
        'And maybe — maybe — in that moment, looking at my *ummi*, at Hasan, at me, something occurred to him —\n\n' +
        'But I did not ask. I was twelve. I only wanted my *ummi* to take me and Hasan out the door.\n\n' +
        'What we carried — one waterskin, a piece of dry bread, my *baba*\'s hand-copied excerpt from Surah Al-Baqarah (the second chapter of the *Quran*) that he kept by his bed — and the small blue headscarf I had been weaving for Maryam\'s thirteenth birthday, never finished.\n\n' +
        'My *ummi* said: "Ascalon. Aunt Hadeel is there. Three days\' walk."\n\n' +
        'We walked out of Jerusalem\'s east gate. I looked back once.\n\n' +
        'Black smoke rose from inside the walls — they were burning the synagogue with the Jews still inside. Yakov\'s family was in there too. I did not know that yet.\n\n' +
        'The fig tree in our courtyard was still standing. I had not picked the last fig.\n\n' +
        'I would never have the chance again.\n\n' +
        'Three days later we reached Ascalon (a port city on the Mediterranean coast, still under Fatimid Muslim control). Aunt Hadeel saw the three of us, knelt, and cried — she cried all night. My *ummi* did not cry that night. She no longer had it in her.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我们逃出耶路撒冷东门——回头看一眼——黑烟——我再也没回去——',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§7 DBQ + §10 误解 + §6 长尾',
    content: {
      cn:
        '你刚扮演了 Aisha——12 岁——你跟她躲在地窖、念了 30 遍 *Surah Al-Fatiha*、爬出去看见父亲尸体、看见姨妈红头巾、跟妈妈跟弟弟逃到 Ascalon。\n\n' +
        '现在我们暂停一下——回头看 1099 年 7 月 15-17 日那 3 天——对 12 岁的 Aisha——它到底是什么？\n\n' +
        '历史学家在这里有两种真实并立的看法——\n\n' +
        '**一种说法——这是"她个人的灾难"**：从 Aisha 的内部看——她爸死了、姨妈死了、邻居 Hovsep 死了——一个家被毁——一个 12 岁的童年被切断——她从此每周做梦——她的人生从这 3 天开始变成"幸存者的人生"。这是属于她的悲剧——具体到一卷红布、一条头巾、一棵无花果树——历史学家用 *micro-history*（微观史学）的方法记录这种个人创伤。\n\n' +
        '**另一种说法——这是"文明的撕裂"**：从外面看——1099 年 7 月那 3 天——拉丁基督教第一次撕开了东方基督教 + 穆斯林之间脆弱的共存——80 年来在 Souq al-Qattanin 这条巷里同住的三家——穆斯林（Aisha）+ 亚美尼亚正教基督徒（Hovsep）+ 犹太人（Yakov）——一夜之间成了"不同阵营"——而拉丁兵分不清——他们一律杀。这一波撕裂是**后面 200 年地中海东岸暴力的种子**——历史学家用 *longue durée*（长时段）方法看这种结构性后果。\n\n' +
        '两边都有真证据——\n\n' +
        '——Aisha 自己的视角只能感受到 (A)——她不知道 (B) 是什么意思——\n' +
        '——但历史学家从 900 年后看，能看到 (B) 的轮廓——\n' +
        '——可历史学家自己没经历过 (A)——\n\n' +
        '哪一个更"真"？或者两边都真——但你自己读到 Aisha 这一遍，更靠近哪一种感受？想 30 秒。',
      en:
        'You have just played Aisha — twelve years old. You hid with her in the cellar, recited *Surah Al-Fatiha* thirty times, climbed out to find your father\'s body, saw your aunt\'s red headscarf under the fig tree, and walked with your mother and brother to Ascalon.\n\n' +
        'Now let us pause — and look back at those three days, July 15 to 17, 1099. For twelve-year-old Aisha — what was it?\n\n' +
        'Historians hold two genuinely opposed readings, both grounded in evidence —\n\n' +
        '**Reading A — it was "her personal catastrophe."** From Aisha\'s inside view: her father was killed; her aunt was killed; her neighbor Hovsep was killed. One family was destroyed. One twelve-year-old childhood was cut. From that week on, she would dream every Friday night for the rest of her life. Her life became, from that point, "a survivor\'s life." This was her tragedy — specific to one roll of red cloth, one headscarf, one fig tree. Historians using *micro-history* methods study exactly this kind of individual trauma.\n\n' +
        '**Reading B — it was "civilizational rupture."** From the outside: in those three days of July 1099, Latin Christianity tore open for the first time the fragile coexistence between Eastern Christians and Muslims. The three houses on the Souq al-Qattanin alley — Muslim (Aisha) + Armenian Christian (Hovsep) + Jewish (Yakov) — had lived side by side for eighty years. Overnight, in Latin eyes, they became "different sides," and Latin soldiers could not tell them apart, so all three were killed. That rupture became the seed of two hundred years of violence along the eastern Mediterranean. Historians using *longue durée* methods (long-term structural history) see this structural aftermath.\n\n' +
        'Both readings have real evidence.\n\n' +
        'Aisha herself can feel only (A). She does not know what (B) is.\n' +
        'But historians 900 years later, looking from outside, can see the shape of (B).\n' +
        'And those historians never lived through (A).\n\n' +
        'Which is more "true"? Or are they both true — and which one feels closer to you, after walking through Aisha\'s lens? Take thirty seconds.',
    },
    deliverGoal:
      '你刚扮演了 Aisha——12 岁——经历了她家被毁、父亲死、姨妈死、Hovsep 死——' +
      '历史学家对这 3 天有**两种真实并立**的解读：' +
      '**一种说法（micro-history 个人灾难）**：一个家被毁——一个 12 岁童年被切断——这是 Aisha 自己感受到的。' +
      '**另一种说法（longue durée 文明撕裂）**：拉丁基督教第一次撕开东方基督教 + 穆斯林共存——后面 200 年暴力的种子。' +
      'Aisha 自己只感受得到 A——历史学家从外面看到 B——哪一个更"真"？',
    engagementHook:
      '**你怎么看**——1099 那 3 天，是 Aisha 的**个人灾难**（一个家被毁），还是**文明撕裂**（80 年共存被一夜撕开 → 后面 200 年的种子）？或者两边都真——你更靠近哪一边？想 30 秒',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§4 1187 Saladin 重夺耶路撒冷 + Aisha 一家不回去',
    content: {
      cn:
        '现在跳到 88 年后。\n\n' +
        '1187 年 10 月 2 日——一个库尔德人苏丹 Saladin（萨拉丁，56 岁）从十字军手里**重新夺回**耶路撒冷——\n\n' +
        '他**没屠城**——他让基督徒付赎金离开——8000-15000 个付不起赎金的人变奴隶——但他**没像 1099 那样杀光**——他做了 3 件事：把孤儿和老弱免费放走、给富人家眷打折赎金、保护基督徒朝圣权——这是他作为政治家的关键决定。\n\n' +
        'Aisha 那一年如果还活着——她 100 岁——按 11 世纪人均寿命，她活到 100 不可能——她其实在 1140 年代就在 Ascalon 死了——但她的孙女 Yasmin 那年 17 岁——\n\n' +
        'Yasmin 的爸爸（Aisha 的儿子 Hasan 长大后的儿子——也叫 Hasan，11 世纪阿拉伯家庭习惯）告诉她："你曾祖母小时候，在那座城里。"\n\n' +
        '——Yasmin 没去过耶路撒冷——\n' +
        '——Yasmin 1187 年 10 月听说 Saladin 重夺了——耶路撒冷又是穆斯林的了——\n' +
        '——但她家——没回去——\n\n' +
        '——为什么？\n\n' +
        '历史学界对"创伤一家为什么不回故土"有 3 种不同的解释——\n\n' +
        '**(A) 物理回不去**：家被毁了——铺子被那个 Frangi 兵占了 88 年（多次易主）——亲人埋在 Souq 底下——回去重建要钱要时间——他们已经在 Ascalon 扎根 3 代——不可能拔起来。\n\n' +
        '**(B) 心理回不去**：耶路撒冷不再是 Aisha 12 岁那个有无花果树的地方了——回去看到的只是创伤的现场——回去等于让 Yasmin 站在曾祖父被劈死的那块地上——Aisha 临死前嘱咐她儿子 Hasan："不要回。让你的孩子记得我，但不要让他们站在那里。"\n\n' +
        '**(C) 历史回不去**：1187 不是 1099 之前——88 年里 Souq al-Qattanin 那条巷子早换了 5 茬居民——Sarkis 一家死了——Yakov 一家死了——Yasmin 17 岁就算回去，那条巷里再没一个她曾祖母认识的人——再没一个会笑着喊"Hassan akhi"去逗 6 岁那个小弟弟的邻居——Saladin 重夺只能让"地"回到穆斯林手里——但回不到那个"巷"里。\n\n' +
        '哪一种"回不去"是最深的？想 30 秒。',
      en:
        'Now jump forward 88 years.\n\n' +
        'On October 2, 1187, a Kurdish sultan named Saladin (Salah ad-Din, age 56) **retook** Jerusalem from the Crusaders.\n\n' +
        'He **did not massacre the city**. He let Christians leave on payment of ransom. About eight to fifteen thousand who could not pay became slaves — but he did not kill them all the way the *Frangi* had in 1099. He did three things: he released orphans, the elderly, and the weak for free; he discounted ransom for noble women; and he protected the Christian right of pilgrimage. This was his crucial political decision.\n\n' +
        'If Aisha had been alive in 1187, she would have been 100. Realistically, by 11th-century life expectancy, she would not have lived that long. In our story she died in Ascalon in the 1140s. But her granddaughter Yasmin was 17.\n\n' +
        'Yasmin\'s father (the son of Aisha\'s son Hasan — also named Hasan, following 11th-century Arab naming custom) told her: "Your great-grandmother lived in that city when she was a child."\n\n' +
        'Yasmin had never been to Jerusalem.\n' +
        'In October 1187 Yasmin heard the news — Saladin had retaken Jerusalem. The city was Muslim again.\n' +
        'But her family did not go back.\n\n' +
        'Why?\n\n' +
        'Historians offer three different explanations for "why a traumatized family does not return to its homeland" —\n\n' +
        '**(A) They cannot return physically.** The home was destroyed. The shop had been held by that one *Frangi* soldier — and changed hands many times over 88 years. Family members were buried under the Souq. Rebuilding would cost money and time. They had been rooted in Ascalon for three generations now — they could not be pulled up.\n\n' +
        '**(B) They cannot return psychologically.** Jerusalem is no longer the place with a fig tree from twelve-year-old Aisha\'s memory. To return is to face the scene of the trauma. To return is to make Yasmin stand on the spot where her great-grandfather was cut down. On her deathbed, Aisha had told her son Hasan: "Do not return. Let your children remember me, but do not let them stand there."\n\n' +
        '**(C) They cannot return historically.** 1187 is not the year before 1099. In those 88 years, the alley of Souq al-Qattanin had changed inhabitants five times. Sarkis\'s family had died. Yakov\'s family had died. Even if Yasmin at seventeen had returned, there was no one left in that alley her great-grandmother had known — no one left to laugh and call out "Hassan akhi" to tease the six-year-old little brother. Saladin\'s retaking could put the *land* back in Muslim hands. But it could not put the *alley* back the way it was.\n\n' +
        'Which kind of "cannot return" is the deepest? Take thirty seconds.',
    },
    deliverGoal:
      '88 年后 Saladin 重夺耶路撒冷——没屠城——但 Aisha 一家**没回去**——' +
      '为什么？历史学家有 3 种解释：' +
      '**(A) 物理回不去**——家毁了，亲人埋了，已在 Ascalon 扎根 3 代。' +
      '**(B) 心理回不去**——耶路撒冷不再是无花果树那个地方——回去等于站在创伤现场。' +
      '**(C) 历史回不去**——88 年间"三家共住"的那个世界本身已经死了——地能回，巷回不去。' +
      '——哪一种"回不去"最深？',
    engagementHook:
      '**你怎么看**——Aisha 一家 88 年后没回耶路撒冷——是物理（家毁了）、心理（创伤）、还是历史（那个世界本身死了）回不去最深？想 30 秒',
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
        '你刚从 Aisha 12 岁的内部走了一遍——\n\n' +
        '她在无花果树下问她爸"Frangi 是什么"那一刻——\n' +
        '她在 Souq 房顶问"他们也信主？"那一刻——\n' +
        '她在地窖里念第 30 遍 *Surah Al-Fatiha* 那一刻——\n' +
        '她爬出地窖看见父亲手里那卷红布的那一刻——\n' +
        '她在 Souq 入口看见姨妈头上那条她去年织的红头巾的那一刻——\n' +
        '她妈带她跟 Hasan 走出耶路撒冷东门、回头看一眼黑烟那一刻——\n' +
        '她孙女 Yasmin 17 岁那年没回耶路撒冷那一刻——\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你停下来的瞬间是什么？\n\n' +
        '一句话告诉我就行。\n\n' +
        '——\n\n' +
        '另外——你或许已经发现了——你这一遍跟 Roger（lens 1）那一遍是**同一件事的两面**——Roger 在他的第 7 节里看到的"红头巾"——那个名字叫 Khadija——那条头巾是 Aisha 织的——你这一遍知道了她有名字、有故事、有家人——\n\n' +
        '——这就是 lens 教学的全部意义——\n\n' +
        '——同一段历史——从两个人内部走过——会发现：他们俩的世界从来没真正"理解"对方——但你（800 年后的读者）现在两边都进过去了——你可以知道他们俩都不知道的事——\n\n' +
        '准备好了吗？接下来是记忆考核：拼写、定义、应用题。这是你把今天经历的，变成你真正会用的——最后一步。',
      en:
        'You have just walked through Aisha\'s inside, at twelve —\n\n' +
        'The moment she asked her *baba*, "What is a *Frangi*?" under the fig tree.\n' +
        'The moment on the Souq roof when she asked, "*Baba* — they pray to God too?"\n' +
        'The moment in the cellar when she recited *Surah Al-Fatiha* for the thirtieth time.\n' +
        'The moment she climbed out and saw her father\'s left hand still gripping the roll of red cloth.\n' +
        'The moment she saw her aunt\'s red headscarf — the one she had woven last year — under the fig tree at the Souq entrance.\n' +
        'The moment she walked out the east gate with her mother and brother and looked back once, at the black smoke.\n' +
        'The moment her granddaughter Yasmin, 88 years later at 17, did not return to Jerusalem.\n\n' +
        'Before you move into the mastery check, one question:\n\n' +
        'What was the moment in this lens that made you pause?\n\n' +
        'One line is enough.\n\n' +
        '—\n\n' +
        'One more thing — you may have noticed already — this lens is **the other side of the same event** as Roger\'s (lens 1). The "red headscarf" that Roger saw in his Section 7 — that woman had a name. Khadija. That headscarf was woven by Aisha. In this lens you learned she had a name, a story, a family.\n\n' +
        'That is the whole point of lens teaching.\n\n' +
        'The same history — walked through from the inside of two different people — and you discover: their two worlds never truly "understood" each other. But you, the reader 900 years later, have now been inside both. You can know things that neither of them knew.\n\n' +
        'Are you ready? The mastery check is next: spelling, definitions, application questions. This is the step that turns what you experienced today into something you actually own.',
    },
    deliverGoal:
      '你扮演了 Aisha 9 节——经历了她从围城前的 12 岁、到地窖 3 天、到逃 Ascalon——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换 lens 重玩——比如 Roger（南法骑士施害方视角）或 Alexios（拜占庭皇帝外部旁观）——' +
      '——同一事件不同角度——会发现新东西——' +
      'Aisha 这一遍特别让你看到：**Roger 看到的"红头巾"——是有名字的人——Khadija——一条红头巾两个 lens 完成对位**',
    engagementHook:
      '**这次扮演里——哪个瞬间最让你停了一下**？是 12 岁问"他们也信主？"那一刻？是地窖念 30 遍 *Surah Al-Fatiha* 那一刻？是父亲手里那卷红布？是姨妈那条红头巾？还是 88 年后她孙女不回去？一句话告诉我',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 3: Alexios I Komnenos（拜占庭皇帝 / 1094-1118 mediator 视角）
// ═══════════════════════════════════════════════════
//
// 角色设定：
//   - 1056 生于君士坦丁堡 Komnenos 家族（拜占庭老牌军事贵族）
//   - 1071 Manzikert 大败时他 23 岁——亲眼见皇帝 Romanos IV 被俘
//   - 1081 年 24 岁政变上位——接手帝国残骸 14 年五路苦战
//   - 1094 年 38 岁——给 Urban II 写求救信要"几千专业雇佣兵"
//   - 1096 年来的是 10 万乱军——他在君士坦丁堡蹲点把他们一拨拨送走
//   - 1097 Nicaea 偷偷接收城——逼 Bohemond 当面宣誓
//   - 1098 Antioch 8 月围城他没亲赴援军——这成了他被骂 900 年的"道德污点"
//   - 1099/07 Jerusalem 屠杀传到——他沉默两天——他知道东方基督徒也死在屠刀下
//   - 1118 年 8 月 15 日死，62 岁——Anna 在《Alexiad》写下父亲临终
//   - 1204 年——他的曾孙时代——第 4 次十字军反攻陷君士坦丁堡——他写信引来的力量最终毁了他的城
//
// 这个 lens 是 "skilled insider trapped by larger forces" 视角（平行于 Stephen Langton 的 "lonely middle"）：
// 不浪漫化拜占庭权术，但让用户感受 — 一流的政治家、伟大的复兴者，
// 同时也是历史最大反讽的源头：他写的那封信，引来了 200 年后毁掉自己城市的力量
//
var alexiosStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Alexios — 1095 年那封信',
    content: {
      cn:
        '1094 年 12 月一个夜里，君士坦丁堡 Blachernae 宫书房。我 38 岁。\n\n' +
        '窗外是博斯普鲁斯海峡的黑水。书房里点 4 盏油灯——光照在我面前一张白羊皮纸上。我手里那支羽毛笔——天鹅羽，蘸的是从 Tyre 城运来的紫墨——一笔下去，要写给 1500 公里外罗马的教皇 Urban II。\n\n' +
        '我开头三行是这样的：来自上帝任命的罗马人皇帝（这是我们对自己的称呼——我们是真正东罗马的延续）——给罗马教皇——基督在东方的兄弟们正在受苦。\n\n' +
        '然后我写了我真正想要的：**3 千个专业兵**。我付钱。一年期。任务是帮我从塞尔柱手里收复小亚细亚——那是我的农田、我的兵源地、我从小长大的地方。\n\n' +
        '我特别在第 4 段写了一句：**只要专业军人**——*milites*——不要平民，不要修士，不要朝圣的农民。\n\n' +
        '我那一刻以为自己在做一件聪明事。我用别人的力量解决我自己的问题——这是高级政治家的算盘。\n\n' +
        '我那一刻不知道——8 个月后这封信被 Urban II 念给 Clermont 城外两千人听的时候，"3 千专业军"会变成"全欧洲的基督徒都来"。\n\n' +
        '我是 Alexios I Komnenos，拜占庭皇帝。接下来 12 节，你跟我走 24 年——从这盏油灯下的夜里，到我 1118 年闭眼的那一刻——再到我闭眼之后 86 年发生的事。',
      en:
        'A night in December 1094, in the study of the Blachernae Palace at Constantinople. I was thirty-eight.\n\n' +
        'Outside the window, the Bosphorus ran black. Four oil lamps burned on the desk. Their light fell on a sheet of white parchment. The quill in my hand was a swan feather, the ink purple, brought up by ship from the Phoenician coast. One stroke of that pen, and the letter would travel fifteen hundred kilometers to Pope Urban II in Rome.\n\n' +
        'My first three lines: From the Emperor of the Romans appointed by God (this is what we called ourselves — we are the true continuation of the Eastern Roman Empire) — to the Bishop of Rome — the brothers of Christ in the East are suffering.\n\n' +
        'Then I wrote what I actually wanted: **three thousand professional soldiers**. I would pay them. A one-year term. The task was to help me retake parts of Asia Minor (modern Turkey) from the Seljuk Turks — Asia Minor is where my farmland is, where my soldiers come from, where I grew up.\n\n' +
        'In the fourth paragraph I wrote one sentence very carefully: **professional men of arms only** — *milites* in the old Latin word. No civilians. No monks. No farmer-pilgrims.\n\n' +
        'In that moment I thought I was doing something clever. I was using another man\'s strength to solve my own problem — that is what a senior political mind does.\n\n' +
        'In that moment I did not know — eight months later, when Urban II read this letter aloud to two thousand people in a meadow outside Clermont, "three thousand professionals" would become "every Christian in Europe, come east."\n\n' +
        'I am Alexios I Komnenos, the Byzantine emperor. Over the next twelve sections you will walk with me for twenty-four years — from this lamplit desk to the day I closed my eyes in 1118 — and then to what happened eighty-six years after I closed them.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我以为我在用别人的力量解决我自己的问题——你猜 4 年后我还会这么想吗？',
    expectedLength: '260-280 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Alexios — 出身 + 1071 Manzikert + 1081 政变',
    content: {
      cn:
        '我得告诉你我是怎么到 38 岁还坐在这盏油灯下的。\n\n' +
        '1056 年我生在君士坦丁堡——Komnenos 家族——拜占庭老牌军事贵族（不是那种皇室继承——是那种"一代代打仗换上来"的家族）。我爸 John Komnenos 是将军；我妈 Anna Dalassene 是——我老实说——比我爸更精明的政治家。我从小学的不是诗，是：怎么读地形、怎么算兵粮、怎么看一个人在你面前撒不撒谎。\n\n' +
        '我 14 岁那年——1071 年 8 月 26 日——拜占庭最黑的一天。\n\n' +
        '皇帝 Romanos IV Diogenes 带 4 万军在小亚细亚东部 Manzikert（今天土耳其东部凡湖附近）跟塞尔柱苏丹 Alp Arslan 决战。我没去——我太小——但我哥 Isaac 在阵中。\n\n' +
        '战败的消息 9 月初到君士坦丁堡。皇帝**被俘**——拜占庭**第一次**在罗马 1500 年里皇帝当着外族被俘——4 万军溃散——小亚细亚 80% 一夜之间没了——那是我们的粮仓、我们的兵源、我们的精神中心（那里有 Nicaea，第一次基督教大公会议的地方）。\n\n' +
        '我 14 岁——一夜之间懂了一件事：帝国是会死的。它不是一座永远的山，它是一根绷紧的绳——你松一刻就断。\n\n' +
        '接下来 10 年我在军中爬。1081 年我 24 岁——皇帝 Nikephoros III 老态无能——5 个邻国（塞尔柱、诺曼、佩切涅格、保加利亚、阿拉伯）轮着打我们——我妈把家族所有筹码押上——我率军围君士坦丁堡 4 天——攻进城——逼 Nikephoros 退位当修士。\n\n' +
        '4 月 4 日我在 Hagia Sophia（圣索菲亚大教堂）加冕——24 岁——披紫色袍（紫是拜占庭皇室专属颜色，从罗马时代传下来）——头戴金冠——脚下是一个看上去要死的帝国。\n\n' +
        '接下来 14 年——我从 24 打到 38——五路敌人轮着收拾——我活下来了——但我懂了一件事：我这个位置，永远在走钢丝。',
      en:
        'I have to tell you how I got to be thirty-eight, sitting under that oil lamp.\n\n' +
        'I was born in 1056 in Constantinople, into the Komnenos family — old Byzantine military nobility (not a royal house, but the kind of family that climbs by fighting, generation after generation). My father John was a general. My mother Anna Dalassene was — I will say it honestly — a sharper political mind than my father. What I grew up learning was not poetry. It was: how to read terrain, how to calculate grain for soldiers, and how to tell when someone in front of you is lying.\n\n' +
        'When I was fourteen — August 26, 1071 — the worst day in Byzantine history happened.\n\n' +
        'Emperor Romanos IV Diogenes led forty thousand men against the Seljuk sultan Alp Arslan at a town called Manzikert in eastern Anatolia (near Lake Van in today\'s eastern Turkey). I was not there — I was too young — but my older brother Isaac fought in the line.\n\n' +
        'The news reached Constantinople in early September. The emperor had been **captured**. For the first time in fifteen hundred years of Roman history, an emperor was taken alive by a foreign power. Forty thousand men shattered. Eighty percent of Asia Minor lost in one night — that was our grain, our soldiers, our spiritual center (Nicaea, where the First Council of the Church had met in 325, was in Asia Minor).\n\n' +
        'I was fourteen, and overnight I understood one thing. Empires can die. An empire is not an eternal mountain. It is a rope pulled tight. Slack it for one moment, and it snaps.\n\n' +
        'For the next ten years I climbed through the army. In 1081 I was twenty-four. Emperor Nikephoros III was old and useless. Five neighbors — Seljuk Turks, Normans from southern Italy, Pecheneg nomads on the Danube, Bulgars, Arab raiders — were taking turns at us. My mother put every chip the family had on the table. I led an army around Constantinople for four days, broke in, and forced Nikephoros to step down to a monastery.\n\n' +
        'On April 4, 1081, I was crowned in *Hagia Sophia* (the Church of Holy Wisdom). I was twenty-four. I wore a purple robe (purple was reserved for Byzantine royalty, a color carried down from Roman tradition). I wore the gold diadem. Beneath my feet was an empire that looked finished.\n\n' +
        'For the next fourteen years — twenty-four to thirty-eight — I fought five enemies in rotation. I lived. But I learned one thing: my chair was a tightrope. Always.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '14 年我学会了走钢丝——下一节，1095 年那 10 万人来了。我的钢丝绳粗细要变了。',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§4 1096 People\'s Crusade + Civetot',
    content: {
      cn:
        '我那封信 1095 年 3 月到罗马。8 个月后 Urban II 在 Clermont 演说。这些事我都不知道——拜占庭和拉丁世界中间隔着两个月的传递。\n\n' +
        '我**第一次知道事情走样**——1096 年 5 月底——一个拜占庭驿站官从巴尔干赶回来报：有一群人正穿过匈牙利，往君士坦丁堡走。**3 万人**。其中**3000 个是骑兵——剩下 27000 个是步行的农民、妇女、孩子**。带头的是一个法国修士，**Peter the Hermit**——隐士彼得——50 多岁，骑一头驴，蓬头垢面，但他能站着讲话让 3 万人哭。\n\n' +
        '我那一刻坐在 Blachernae 宫——把驿官报告读了三遍——然后我在屋里走了 20 分钟没说话。\n\n' +
        '我要的是 3000 专业军——来的是 3 万半饥半疯的人。\n\n' +
        '我做了三件事。\n\n' +
        '第一：派 600 拜占庭骑兵在路上接他们——不是欢迎，是**护送**——一边给食物一边盯着他们不要抢拜占庭村庄（他们已经在贝尔格莱德附近抢过两个村庄、烧过一个城镇 Niš）。\n\n' +
        '第二：8 月 1 日他们到君士坦丁堡城外——我**不让他们进城**——只在城墙外搭了营地——我亲自接见 Peter the Hermit 一次（在 Blachernae 一个偏厅，**我没披紫袍**，故意降一档礼仪，让他知道他不是国家级使节）——给他粮食给他建议："等贵族军到再过海。"\n\n' +
        '第三：他不听。8 月 6 日他坚持要过博斯普鲁斯——我没办法，我也不能扣留 3 万基督徒朝圣者——我**用船把他们渡到亚洲一侧**——给地图——告诉他们："沿岸走，不要进内陆。"\n\n' +
        '他们没听。10 月 21 日 Civetot——离海岸 60 公里的内陆——塞尔柱苏丹 Kilij Arslan 的骑兵伏击他们——**3 万人里 27000 死**——剩下 3000 退回海岸——Peter the Hermit 那时正好被叫回君士坦丁堡补给——**他活下来了**。\n\n' +
        '我那天接到塞尔柱送来的信，里头讽刺得很整齐："你的基督徒朋友们躺在 Civetot 平原上——你要派人收尸吗？"\n\n' +
        '我那一刻想的是——**这只是第一波。第二波明年春天来——是 5 万贵族军。**',
      en:
        'My letter reached Rome in March 1095. Eight months later Urban II preached at Clermont. None of that did I see in real time — between Byzantium and the Latin world there was always a two-month delay.\n\n' +
        'I first learned things had gone sideways at the end of May 1096. A Byzantine post-rider rode in from the Balkans with a report: a group of people was crossing Hungary, walking toward Constantinople. **Thirty thousand of them.** About three thousand were mounted soldiers. The other twenty-seven thousand were farmers on foot — women, children. The man leading them was a French monk in his fifties named **Peter the Hermit** — wild-haired, riding a donkey, but able to stand and speak in a way that made thirty thousand people weep.\n\n' +
        'I sat in the Blachernae Palace and read that report three times. Then I paced in the room for twenty minutes without speaking.\n\n' +
        'I had asked for three thousand professionals. What was coming was thirty thousand half-starved, half-mad civilians.\n\n' +
        'I did three things.\n\n' +
        'First: I sent six hundred Byzantine cavalry to meet them on the road. Not as a welcome — as an **escort**. They handed out food while watching to make sure the marchers did not loot Byzantine villages (the marchers had already burned a town called Niš and looted two villages near Belgrade).\n\n' +
        'Second: on August 1, the marchers reached the walls of Constantinople. I did not let them inside the city. They camped outside the walls. I received Peter the Hermit once, in a side hall of the Blachernae — I deliberately did **not** wear the purple robe; I dropped one level of protocol, so he would know he was not a head-of-state ambassador. I gave him food. I gave him advice: "Wait. The noble army is coming. Cross with them."\n\n' +
        'Third: he did not wait. On August 6 he insisted on crossing the Bosphorus. I could not stop him — I cannot detain thirty thousand Christian pilgrims — so I gave them ships to cross to the Asian side, gave them maps, and told them: "Stay near the coast. Do not go inland."\n\n' +
        'They did not listen. On October 21, at a place called Civetot, sixty kilometers inland, the Seljuk sultan Kilij Arslan ambushed them with cavalry. **Twenty-seven thousand of the thirty thousand died.** Three thousand fell back to the coast. Peter the Hermit happened to be back in Constantinople asking for supplies that day. He lived.\n\n' +
        'That afternoon a letter arrived from the Seljuks. The tone was polite, but the words were cruel: "Your Christian friends are lying on the plain at Civetot. Would you like to send men to collect the bodies?"\n\n' +
        'What I thought in that moment: this is only the first wave. The second wave comes next spring. Fifty thousand noble warriors.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Civetot 那 27000 人——大半是农民妇女和孩子——他们死的时候我离他们 80 公里。下一节，第二波来了。',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Bohemond + §4 1096 秋-1097 春 Princes\' Crusade',
    content: {
      cn:
        '1096 年 11 月到 1097 年 4 月——这 6 个月是我一辈子做政治家最累的几个月。\n\n' +
        '8 路贵族军前后到君士坦丁堡。我得**一个一个**接见、一个一个谈判、一个一个逼宣誓——任何收复的旧拜占庭领土必须还给我。\n\n' +
        'Hugh of Vermandois——法王 Philip 的亲弟弟——11 月先到——1000 人——容易：他海上遇风暴丢了大部分人和钱，到我面前已经是落汤鸡，给他换了袍子住了几天，宣誓——签字。\n\n' +
        'Godfrey of Bouillon——4 万人——12 月到——驻在城墙外金角湾对岸——他不肯宣誓，说"我对的只是上帝"——我下令封锁他的食物供应——4 月他撑不住——宣誓——签字。\n\n' +
        'Raymond IV of Toulouse——8000 南法军——独眼老贵族 55 岁——4 月底到——他比 Godfrey 更难——他坚持自己的版本誓言（"友谊和荣誉"——不是"封建臣服"）——耗了两周——我让步收他这版——签字。\n\n' +
        '但是有一个人我从一开始就特别**怕看见**——\n\n' +
        '**Bohemond of Taranto**——意大利南部诺曼公爵的儿子——43 岁（1054 年生）——他爸 Robert Guiscard **15 年前**（1081 年）在巴尔干 Dyrrachium 战役**亲手打败过我**——俘虏了我几十员大将——我一辈子记得 Bohemond 那张脸——他爸那年没杀他要他在前面带骑兵——他亲手刺过我两个亲信。\n\n' +
        '4 月初他来了——1500 人——我让他**驻城外**（不让进城）——派人送来 Cosmidion 修道院作住所（这是高规格但不进皇宫的级别）——我亲自接见。\n\n' +
        '我披紫袍——坐在金质 *throne*（我们叫 *Solomon\'s Throne* — 仿《圣经》所罗门王的座位——两边铜狮子电动会吼，技工技术 11 世纪只有拜占庭做得到）——Varangian 卫队（我私人卫队，金发北欧人，他们听不懂希腊语和拉丁语，但他们的眼神让你说话不敢花哨）——左右各 12 人。\n\n' +
        'Bohemond 进来——单膝下跪——他**装出来的恭顺**比真恭顺还熟练——我知道他在装——他知道我知道他在装——他知道我知道他知道我知道——但他还是下跪了——他是来要东西的。\n\n' +
        '我让他宣誓——他举右手——念完所有句子——签字——按我的指环印——红蜡封印（金属或蜡封印模——我的印章是双头鹰加十字）。\n\n' +
        '他抬头那一刻——他看我，我看他——我们两个人都知道：这个誓他迟早要违。但今天，他要这扇门开。我要他过海。我们两个一起演完这场戏。\n\n' +
        '我那天晚上对我母亲 Anna Dalassene 说："我把这只狼送过海了。希望塞尔柱比我先咬到他。"',
      en:
        'November 1096 to April 1097 — these were the six most exhausting months I ever spent as a politician.\n\n' +
        'Eight separate noble armies arrived at Constantinople in waves. I had to receive each one, negotiate with each one, and force each one to swear: any old Byzantine territory you reconquer, you give back to me.\n\n' +
        'Hugh of Vermandois — the brother of King Philip of France — came first in November. A thousand men. Easy. He had hit a storm at sea and lost most of his men and money. He arrived dripping. I gave him dry clothes, a few days of hospitality, and the oath. Done.\n\n' +
        'Godfrey of Bouillon — forty thousand men — arrived in December. He camped across the Golden Horn from the city walls. He refused to swear; he said, "I bow only to God." I ordered his food supply cut. By April he could not hold out. He swore. Done.\n\n' +
        'Raymond IV of Toulouse — eight thousand southern French — fifty-five, one-eyed, an old noble — arrived late April. Harder than Godfrey. He insisted on his own version of the oath: "friendship and honor," not "feudal submission." Two weeks of negotiation. I conceded the wording. He signed.\n\n' +
        'But there was one man I had been dreading from the moment I first heard the names of the leaders.\n\n' +
        '**Bohemond of Taranto.** Son of a Norman duke from southern Italy. Forty-three years old (born 1054). His father Robert Guiscard, fifteen years earlier in 1081, had personally defeated me at the Battle of Dyrrachium in the Balkans, captured several of my senior officers, and made me run. I have never forgotten Bohemond\'s face. His father had put him in the front cavalry that day. He had personally killed two of my friends.\n\n' +
        'In early April he arrived. Fifteen hundred men. I lodged him **outside** the city walls, in a monastery called Cosmidion (high-status accommodation, but not inside the palace). I received him in person.\n\n' +
        'I wore the purple robe. I sat on the gold *throne* — we called it the Throne of Solomon, modeled on the biblical king — bronze lions on either side that mechanically roared (eleventh-century engineering only Constantinople could build). My Varangian Guard — my personal troops, fair-haired Northmen, who could not understand a word of Greek or Latin but whose eyes made you speak carefully — twelve on each side.\n\n' +
        'Bohemond came in. He went down on one knee. **The fake humility was practiced more carefully than real humility would have been.** I knew he was acting. He knew I knew. He knew that I knew that he knew. And yet he went down on the knee. Because he wanted something from me. He wanted that door across the Bosphorus open.\n\n' +
        'I had him swear. He raised his right hand, recited the words, signed, and pressed my ring into red wax (a metal or wax seal — mine was a double-headed eagle with a cross).\n\n' +
        'He looked up. I looked at him. We both knew, in that moment, that he would break this oath someday. But today, he needed the door open. I needed him across the water. We performed the scene together.\n\n' +
        'That evening I told my mother Anna Dalassene: "I have sent that wolf across the sea. I hope the Seljuks bite him before he bites me."',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Bohemond 单膝跪在我面前那一刻——我们两个人都在演戏。下一节是 Nicaea——我演得最好的一次。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§4 1097/05-06 Nicaea 围城',
    content: {
      cn:
        '1097 年 5 月——十字军已经过海——5 万人围在 Nicaea 城外——\n\n' +
        '*Nicaea*（今天土耳其的 İznik）这座城对我意味什么——我得说清楚：\n\n' +
        '它是 325 年第一次基督教普世大公会议的地方——三位一体教义在那里定下来。它是 4 个世纪拜占庭的旧都之一。1071 Manzikert 大败后塞尔柱占了它——把它改成 Rum 苏丹国都。**26 年来我们没拿回来过**。\n\n' +
        '现在十字军在城外——城墙长 5 公里、有 240 座塔、北边贴着一个大湖（Ascanian 湖——这意味着围城**只能围三面**——湖面没法封锁，城里粮食可以从湖上船运进来）。\n\n' +
        '我做了一件十字军不知道的事。\n\n' +
        '5 月底我派了一个特使——**Manuel Boutoumites**，我的海军大将——他乘小船从湖面进 Nicaea 城——直接见塞尔柱守城官 Kilij Arslan 的母亲（这位苏丹本人正在小亚细亚东部跟另一个突厥派打仗，没在城里）——\n\n' +
        '我让 Manuel 传一句话：\n\n' +
        '"投降给我（拜占庭）——你们活、你们的家产保留、你们离城是用礼仪护送出去。投降给十字军——他们会按他们路上的方式做（其实那时还没发生 Antioch 屠城，但十字军在路上已经做过几次小屠杀，名声已经传到城里了）——*没有人活着*。"\n\n' +
        '**Kilij Arslan 的母亲选择了第一个**。\n\n' +
        '6 月 19 日清晨——十字军天亮以为今天能爬墙——他们抬头一看——\n\n' +
        '**Nicaea 城墙上挂着拜占庭的双头鹰旗**。\n\n' +
        '不是十字军的旗。\n\n' +
        '城已经在我手里了。\n\n' +
        '十字军那一天的脸——尤其是 Bohemond——我事后听 Manuel 描述——"愤怒、震惊、被骗——但又不能发作"——他们围 5 周城；我**用一封信 + 一艘船 + 几句话**拿了城。\n\n' +
        '我做的是按拜占庭传统——**没屠城**——城里塞尔柱守军和家属被礼仪送出（5000 人换了身衣服，给一笔安顿金，送往内陆）——城内基督徒（拜占庭旧居民）解放——清真寺重新做回教堂——这套"良序接管"流程，拜占庭做了 700 年。\n\n' +
        '我那天在君士坦丁堡 Blachernae 里庆祝——但我心里很清楚——\n\n' +
        '十字军之间已经有人开始跟 Bohemond 交头接耳——"Alexios 偷了我们的 Nicaea。下一个城他还要偷。"\n\n' +
        '我赢了第一城——我也开了我跟他们的**第一道裂痕**。',
      en:
        'May 1097. The crusaders had crossed the sea. Fifty thousand of them now sat outside the walls of Nicaea.\n\n' +
        'Let me explain what *Nicaea* (today the Turkish town of İznik) meant to me. In 325 the First Council of the Christian Church had met there — the doctrine of the Trinity was fixed there. For four centuries it had been one of the older Byzantine capitals. After Manzikert in 1071, the Seljuks took it and made it the capital of their Rum Sultanate. **For twenty-six years we had not got it back.**\n\n' +
        'Now the crusaders were outside — walls five kilometers long, two hundred forty towers, and on the north side it sat against a large lake (Lake Ascania — meaning the city could only be besieged on three sides; the lake stayed open and food could come into the city by boat).\n\n' +
        'I did one thing the crusaders did not know about.\n\n' +
        'In late May I sent a special envoy — **Manuel Boutoumites**, my grand admiral. He took a small boat across the lake into Nicaea and went directly to the mother of the Seljuk sultan (Sultan Kilij Arslan himself was off in eastern Anatolia fighting another Turkish faction, not in the city).\n\n' +
        'Manuel carried one message from me:\n\n' +
        '"Surrender to me (Byzantium) — and you live. Your property is kept. Your people leave the city under formal escort. Surrender to the crusaders — and they will do what they did at the small towns on the way (Antioch had not happened yet, but the crusaders had already conducted small massacres and the news had reached the city). *No one walks out alive*."\n\n' +
        '**The sultan\'s mother chose option one.**\n\n' +
        'On the morning of June 19 — the crusaders woke up thinking they would scale the walls that day. They looked up.\n\n' +
        'The Byzantine **double-headed eagle banner** was already flying from the towers of Nicaea.\n\n' +
        'Not a crusader banner.\n\n' +
        'The city was already mine.\n\n' +
        'The faces of the crusaders that day — especially Bohemond — Manuel described to me afterward: "fury, shock, the look of being cheated — but unable to react publicly." They had besieged the city for five weeks. **I took it with one letter, one boat, and a few sentences.**\n\n' +
        'What I did followed Byzantine tradition — **no massacre**. The Seljuk garrison and their families were marched out under formal escort (five thousand of them, given new clothes and a small settlement payment, sent inland). Byzantine Christians who had lived under Seljuk rule were freed. The mosque was reconverted into a church. This was the "orderly transfer" procedure, run by Byzantium for seven centuries.\n\n' +
        'I celebrated in the Blachernae Palace that evening. But I was very clear about what had also happened.\n\n' +
        'Among the crusaders, men were already murmuring with Bohemond: "Alexios stole our Nicaea. He will steal the next city too."\n\n' +
        'I had won the first city. I had also opened my **first crack** with these men.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我赢了 Nicaea——但我也开了第一道裂痕。下一节，Antioch——8 个月——这道裂痕变成深渊。',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§4 1097/10-1098/06 Antioch 围城 + Stephen of Blois 叛逃',
    content: {
      cn:
        '1097 年 7 月十字军过 Anatolia 内陆——Dorylaeum 战役（他们险胜塞尔柱）——1097 年 10 月 21 日他们到 Antioch 城外。我那时知道他们到了——但接下来 8 个月我没去。\n\n' +
        '我得告诉你为什么——这是我一辈子被骂得最多的一个决定，900 年来史家每个版本都批评我——但我必须给你看我那一刻看到的。\n\n' +
        '十字军围 Antioch 8 个月——冬天 + 没粮食 + 死亡率 25%（5 万人死了 1.2-1.5 万）——他们从 1097 年 11 月开始派信使到我这里要援军。\n\n' +
        '我做了什么：派少量物资 + 派 600 拜占庭顾问（含工程兵和翻译）— 但**我没亲征**。\n\n' +
        '为什么？\n\n' +
        '第一：1097-98 那个冬天我自己北边，**佩切涅格游牧族在多瑙河重新威胁巴尔干**——我不能把君士坦丁堡的卫队抽空去叙利亚。\n\n' +
        '第二：拜占庭传统不打孤注一掷的赌——我们打慢仗、稳仗、政治仗。\n\n' +
        '第三——这第三个原因是我心里最清楚的——**他们围 Antioch 死人越多，我越好谈判**。十字军越虚弱，他们越会把收复的城还给我。我不是希望他们死——但我也没急着救他们。\n\n' +
        '然后 1098 年 6 月初——发生了一件改变我决定的事。\n\n' +
        '**Stephen of Blois**——一个法国大贵族（5 个城堡，是 William the Conqueror 的女婿）——他在 Antioch 围城 8 个月没撑住——6 月 2 日深夜他**偷偷逃出营地**——往西走——\n\n' +
        '6 月底他到我在小亚细亚东部 Philomelium 的临时大营——那时候我自己**正带 2 万军往 Antioch 走**（我终于决定派援军了）——\n\n' +
        'Stephen 见我——脸色发白——满身泥——他说："陛下——Antioch 完了——所有人都死了——昨晚十字军主营地里说塞尔柱苏丹 Kerbogha 带 7 万援军围他们——他们撑不到一周。"\n\n' +
        '我那一刻——你必须理解我那一刻在想什么——我有 2 万军，离 Antioch 还有 600 公里——如果 Stephen 说的是真的——我去了 = 我也死——我去不到也救不到——拜占庭损失 2 万兵 + 君士坦丁堡空虚 + 北边佩切涅格趁机南下——帝国可能直接亡。\n\n' +
        '我下了命令——**我们撤回君士坦丁堡**。\n\n' +
        '我那天晚上没睡着。\n\n' +
        '4 天后真相到——Antioch **6 月 3 日已经被十字军攻下**（Bohemond 收买内应 Firouz 翻墙）——Stephen 不知道——他逃的时候 Antioch 还在围着。我做的决定基于他给我的信息——但那个信息已经过时了。\n\n' +
        '十字军从此**永远不原谅我**。Bohemond 后来违誓占 Antioch 时直接说："Alexios 没派援军——他抛弃了我们——所以我没有义务还城给他。"\n\n' +
        '我那一年损失的不是 Antioch——是我跟拉丁人之间所有的信任。',
      en:
        'In July 1097 the crusaders crossed inland Anatolia, won the Battle of Dorylaeum narrowly against the Seljuks, and on October 21, 1097, reached the walls of Antioch. I knew they had arrived. For the next eight months I did not go.\n\n' +
        'I have to tell you why. This is the one decision I have been criticized for the most. For nine hundred years every version of the chronicles has called this my failure. But you have to see what I saw in that moment.\n\n' +
        'The crusaders besieged Antioch for eight months. Winter, no food, twenty-five percent dead (twelve to fifteen thousand of fifty thousand). From November 1097 onward they sent messengers to me asking for relief.\n\n' +
        'What I did: I sent some supplies and six hundred Byzantine advisors (engineers and translators). I did **not** lead an army to them.\n\n' +
        'Why?\n\n' +
        'First: that same winter, the Pecheneg nomads on the Danube were threatening the Balkans again. I could not strip the Constantinople garrison and send it to Syria.\n\n' +
        'Second: Byzantine tradition is not to gamble everything on one push. We fight slow wars, steady wars, political wars.\n\n' +
        'Third — and this third reason is the one I knew most clearly inside myself — **the more crusaders died at Antioch, the better my bargaining position**. The weaker they got, the more cities they would return to me. I did not want them to die. But I did not rush to save them either.\n\n' +
        'Then in early June 1098, something happened that changed my decision.\n\n' +
        '**Stephen of Blois** — a major French noble (five castles, married to William the Conqueror\'s daughter) — could not hold out through eight months of siege. On the night of June 2 he secretly slipped out of the camp and rode west.\n\n' +
        'Late June he reached my temporary headquarters at Philomelium, in eastern Anatolia. By then **I was finally on the road with twenty thousand soldiers, marching toward Antioch**.\n\n' +
        'Stephen came before me, pale, covered in mud. He said: "My emperor — Antioch is finished. They are all dead. Last night the camp was saying the Seljuk sultan Kerbogha is bringing seventy thousand reinforcements. The crusaders cannot last a week."\n\n' +
        'You have to understand what I was thinking in that moment. I had twenty thousand men. I was six hundred kilometers from Antioch. If Stephen was telling the truth, then arriving meant dying with them — saving no one, losing twenty thousand Byzantine soldiers, leaving Constantinople empty, and letting the Pechenegs come south. The empire might fall.\n\n' +
        'I gave the order. **We turn around. Back to Constantinople.**\n\n' +
        'I did not sleep that night.\n\n' +
        'Four days later the truth arrived. Antioch had **already been taken by the crusaders on June 3** (Bohemond had bribed an inside guard named Firouz, who lowered a rope ladder over the wall). Stephen had not known — when he fled, the siege was still going. My decision had been made on his information. But his information was already out of date.\n\n' +
        'The crusaders never forgave me. Years later, when Bohemond broke his oath and seized Antioch, his exact words were: "Alexios sent no reinforcements. He abandoned us. So I am released from my oath."\n\n' +
        'What I lost that year was not Antioch. It was every drop of trust between me and the Latins.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我没亲征——4 天后我才知道 Antioch 已经攻下——但我跟拉丁人的信任永远没了。下一节，Bohemond 把这道伤口变成了一把刀。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Bohemond — Antioch 公国 + 1108 Treaty of Devol',
    content: {
      cn:
        '1098 年 6 月 4 日 Antioch 落给十字军——他们立刻屠城（3 天）——然后他们开始内讧。\n\n' +
        '**Bohemond 占了城堡——自封 "Prince of Antioch"——直接违誓**。\n\n' +
        'Raymond IV 在另一头反对："这违反我们 1097 年在君士坦丁堡的誓言——城应该还给 Alexios。"\n\n' +
        'Bohemond 公开回答："**Alexios 没派援军——他抛弃了我们——所以我们对他没有义务**。"\n\n' +
        '消息 1098 年 7 月底到我这里。\n\n' +
        '我面对的是政治家最难的两难——\n\n' +
        '**选项 A**：撕破脸——派军去打 Bohemond——夺回 Antioch——但这意味着拜占庭和拉丁人公开开战——其他十字军会跟 Bohemond 站一起——塞尔柱看戏——我可能丢更多。\n\n' +
        '**选项 B**：忍——名义上不承认 Antioch 公国——但实际上让它存在——保留十字军继续往南打塞尔柱（耶路撒冷）的可能——同时长远布局，等 Bohemond 自己出错。\n\n' +
        '我选 B。\n\n' +
        '我那年没有公开发声明——没有派军——没有跟其他十字军翻脸——我做了一件拜占庭人最擅长的事——**我等**。\n\n' +
        '接下来 10 年我做了什么：\n\n' +
        '1. 跟 Raymond IV（他没占 Antioch，他从头到尾跟 Bohemond 不对付）保持关系——后来支持他打下 Tripoli（1109）成立 Tripoli 县——这是我跟拉丁人关系的"备用通道"。\n\n' +
        '2. 跟法蒂玛王朝（开罗的什叶穆斯林）做生意——拜占庭一直跟开罗有贸易——这告诉拉丁人："我有别的选项。"\n\n' +
        '3. 在巴尔干慢慢加固——准备 Bohemond 万一反过来打我（他会的）。\n\n' +
        '1107 年——Bohemond 53 岁——他干了一件**疯事**：他从意大利南部出发——率军直接打拜占庭本土——他要做他爸 1081 年没做完的事——拿下君士坦丁堡。\n\n' +
        '我等了 10 年——这一刻我等的就是这个。\n\n' +
        '我把他围在 Dyrrachium（27 年前他爸打败我的同一个城）——他没法补给——1108 年他签了 **Treaty of Devol（迭沃尔条约）**——\n\n' +
        '条约内容：Bohemond **正式承认自己是拜占庭皇帝的封建附庸**——Antioch 是**封地不是私产**——Bohemond 死后由拜占庭决定继承——他要每年报告——他承认 1098 年违誓。\n\n' +
        '这是他 27 年第一次低头。\n\n' +
        '我那天在条约上加我的双头鹰印章——红蜡——压下去——我心里没欢喜——只是平静——他终于在我手里——但我也老了——我 52 岁了——我那张脸已经不是 1097 年看他装恭顺时那张了——\n\n' +
        '历史的反讽：1108 年我赢了 Bohemond——但 Antioch 公国还在——他侄子 Tancred 接管——继续是个独立的拉丁公国——我赢了人，但没拿回城。\n\n' +
        '**1111 年他 57 岁死在意大利南部——一个叫 Canosa 的小城——离他的 Antioch 1500 公里——他没见过他打下的城最后一眼**。',
      en:
        'June 4, 1098. Antioch fell to the crusaders. They massacred the city for three days. Then they started fighting each other.\n\n' +
        '**Bohemond seized the citadel and named himself "Prince of Antioch." A direct breaking of the oath.**\n\n' +
        'Raymond IV opposed him publicly: "This violates the oath we swore to Alexios in Constantinople. The city must be returned."\n\n' +
        'Bohemond\'s answer, in public: "**Alexios sent no reinforcements. He abandoned us. We owe him nothing.**"\n\n' +
        'The news reached me in late July 1098.\n\n' +
        'What I faced was the hardest political bind a ruler ever hits.\n\n' +
        '**Option A:** Tear the relationship open. Send an army. Take Antioch back from Bohemond. But this means Byzantium and the Latins are now openly at war. The other crusader leaders will side with Bohemond. The Seljuks watch and gain. I may lose much more than I take.\n\n' +
        '**Option B:** Endure. Officially refuse to recognize the Principality of Antioch — but in practice let it exist. Keep the crusaders moving south to fight the Seljuks (and Jerusalem). Quietly position myself for the long game. Wait for Bohemond to make his own mistake.\n\n' +
        'I chose B.\n\n' +
        'That year I issued no public statement, sent no army, did not break with the other crusader leaders. I did the thing Byzantines do best — **I waited.**\n\n' +
        'Over the next ten years:\n\n' +
        '1. I kept good relations with Raymond IV (who had never sided with Bohemond and had refused any share of the Antioch grab). I later helped him take Tripoli in 1109, which became the County of Tripoli — my back channel to the Latin world.\n\n' +
        '2. I traded with the Fatimid Caliphate (the Shia Muslims in Cairo). Byzantium had always traded with Cairo. This told the Latins: I have other options.\n\n' +
        '3. I slowly fortified the Balkans, preparing for the day Bohemond would come back at me (he would).\n\n' +
        'In 1107 — Bohemond was now fifty-three — he did something **wild**. He set out from southern Italy with an army and marched directly against Byzantium itself. He wanted to finish what his father had failed to finish in 1081 — to take Constantinople.\n\n' +
        'I had waited ten years. This was what I had been waiting for.\n\n' +
        'I trapped him at Dyrrachium (the same city where his father had defeated me twenty-seven years earlier). He could not resupply. In 1108 he signed the **Treaty of Devol**.\n\n' +
        'Its terms: Bohemond **formally accepted he was a feudal vassal of the Byzantine emperor**. Antioch was **a fief, not private property**. After his death, Byzantium would decide succession. He had to report annually. He acknowledged that he had broken the 1097 oath.\n\n' +
        'For the first time in twenty-seven years, his head went down.\n\n' +
        'That day I pressed the double-headed eagle into red wax on the treaty. I felt no joy. Only calm. He was finally in my hand. But I was also fifty-two now. The face I wore that day was not the face I had worn in 1097 watching him fake humility on his knee.\n\n' +
        'And the irony: I won Bohemond in 1108, but the Principality of Antioch still existed. His nephew Tancred took over. The city stayed Latin. **I won the man, but I did not get the city back.**\n\n' +
        'In 1111, Bohemond died at fifty-seven, in a small Italian town called Canosa, fifteen hundred kilometers from his Antioch. He never saw his city again.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我等了 10 年——我赢了 Bohemond——但 Antioch 还在拉丁人手里。下一节，1099 年 7 月——耶路撒冷的消息传到。',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§4 1099/07 Jerusalem 屠杀 + §6 影响（东方基督徒被错杀）',
    content: {
      cn:
        '1099 年 8 月 28 日傍晚——我在 Blachernae 宫——一个驿马信使从叙利亚海岸赶到——\n\n' +
        '他递给我一卷羊皮纸——拜占庭驻 Latakia 港（叙利亚北部我们还控制的港口）总督的报告——\n\n' +
        '我读完——我没说话——\n\n' +
        '7 月 15 日十字军攻陷耶路撒冷——接下来 3 天他们屠了城——城里 4 万平民——估计 1 万到 2 万人死——所有穆斯林——所有犹太人（被赶进 Synagogue 烧了）——还有——\n\n' +
        '——还有亚美尼亚基督徒和叙利亚基督徒（雅各派）——\n\n' +
        '**他们错杀了**。\n\n' +
        '拉丁兵分不清亚美尼亚正教和穆斯林——他们看不懂希腊语——他们看一眼黑头发深皮肤的人就劈下去——耶路撒冷的东方基督徒——是**我管辖下**的牧民——他们一直在拜占庭东方教会传统下生活——他们死在所谓"拯救基督教兄弟"的拉丁人剑下——\n\n' +
        '我把报告放在桌上。\n\n' +
        '我没有说话——这一点我必须告诉你——我**沉默了两天**。\n\n' +
        '第二天我宫廷里的人开始问："陛下——你要发布声明吗？要谴责吗？要召大主教 Nicholas 来共商吗？"\n\n' +
        '我没回答。\n\n' +
        '我那两天在 Blachernae 一个人坐着——窗外是博斯普鲁斯——我面前一杯水——我没喝。\n\n' +
        '我那两天心里反复转的话——我没写下来，也没说出口——但这个 lens 让你听见一个皇帝沉默时脑子里在转什么——\n\n' +
        '**"我把他们引进东方——他们干了我永远不会干的事——我的东方基督徒兄弟也死在他们的剑下——但我没有公开谴责。我必须问自己为什么。"**\n\n' +
        '我没有公开谴责的原因——你必须懂这一点——是政治：\n\n' +
        '1. 公开谴责 = 拜占庭和耶路撒冷新成立的十字军国家公开决裂 = 拉丁人会改跟塞尔柱苏丹谈判（"敌人的敌人是朋友"）= 我西边第二个永久敌人形成。\n\n' +
        '2. 拉丁人占了耶路撒冷意外有用——他们牵制了塞尔柱南线 = 我可以集中精力收复小亚细亚北线（我的真正目标）。\n\n' +
        '3. 我已经失去了 Antioch——我不能也失去耶路撒冷的政治杠杆——只要我表面上还跟他们是"基督徒兄弟"，我就还在桌子上。\n\n' +
        '我那一刻——我的政治家自我对我的人性自我说："你必须沉默。"\n\n' +
        '我的人性自我对我的政治家自我说："你今天的沉默——50 年后会怎么被记住？"\n\n' +
        '我那天没有答案——我今天也没有。\n\n' +
        '8 月底我私下对我女儿 Anna（那年 15 岁——她 1083 年 12 月生，长大后会用 30 年时间写下《Alexiad》15 卷——今天我们读到的拜占庭最详尽的史料）说了一句话。我不知道她那天有没有真的记下来。但我那一刻对她说的，是这一句——\n\n' +
        '"**这些拉丁人——他们的剑、他们的火、他们的屠城——这不是基督——这是我们用基督的名字喂大的某种东西——而且我打开了门**。"',
      en:
        'August 28, 1099, late afternoon. I was in the Blachernae Palace. A courier rode in from the Syrian coast.\n\n' +
        'He handed me a parchment scroll — the report of the Byzantine governor of Latakia (a port in northern Syria still under our control).\n\n' +
        'I read it. I said nothing.\n\n' +
        'On July 15 the crusaders had taken Jerusalem. Over the next three days they had massacred the city. Of forty thousand inhabitants, perhaps ten to twenty thousand died. Every Muslim. Every Jew (driven into the synagogue and burned alive). And —\n\n' +
        '— and the Armenian Christians and Syriac Christians (the Jacobite community).\n\n' +
        '**They were killed by mistake.**\n\n' +
        'The Latin soldiers could not tell an Armenian Christian apart from a Muslim. They could not read Greek. They saw a dark-haired, dark-skinned person and cut. The Eastern Christians of Jerusalem — these were **my flock**, in the Byzantine Eastern Christian tradition — they died under the swords of Latins who said they had come to save Christian brothers.\n\n' +
        'I placed the report on the desk.\n\n' +
        'I said nothing. You have to know this. **I was silent for two days.**\n\n' +
        'On the second day my court began to ask: "My emperor — do you wish to issue a statement? A condemnation? Should we summon Patriarch Nicholas?"\n\n' +
        'I did not answer.\n\n' +
        'For two days I sat alone in the Blachernae. The Bosphorus ran outside. A cup of water sat in front of me, untouched.\n\n' +
        'What turned in my mind during those two days — I did not write it down, and I did not say it aloud. But this lens lets you hear what an emperor was thinking inside his silence —\n\n' +
        '**"I brought them into the East. They did what I would never do. My own Eastern Christian brothers died under their swords. And I did not condemn it openly. I must ask myself why."**\n\n' +
        'The reason I did not condemn publicly — you have to understand — was political.\n\n' +
        '1. Public condemnation = open break between Byzantium and the new Latin states in Jerusalem = the Latins will turn instead and negotiate with the Seljuk sultans ("the enemy of my enemy is my friend") = I have a second permanent enemy on my western frontier.\n\n' +
        '2. The Latins holding Jerusalem was, accidentally, useful — they pinned the Seljuks on a southern front, which let me focus on retaking northern Asia Minor (my actual target).\n\n' +
        '3. I had already lost Antioch. I could not also lose my political leverage in Jerusalem. As long as I publicly stayed inside the "Christian brothers" frame, I was still at the table.\n\n' +
        'In that moment — my politician self said to my human self: "You must be silent."\n\n' +
        'My human self said to my politician self: "How will your silence today be remembered fifty years from now?"\n\n' +
        'I did not have the answer that day. I do not have it now either.\n\n' +
        'In late August, I said one thing privately to my daughter Anna (fifteen years old — born December 1083; she would later spend thirty years writing the fifteen-book *Alexiad*, the most detailed Byzantine historical source we still have). I do not know whether she wrote that day\'s line down. But what I said to her that day was this —\n\n' +
        '**"These Latins — their swords, their fire, their massacre — this is not Christ. This is something we have raised under Christ\'s name. And I opened the door."**',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我沉默了两天——这两天我可能背叛了我自己。下一节，我老了——1118 年的临终。',
    expectedLength: '340-380 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'Alexios I Komnenos',
    narrativeRef: '§3 Anna Komnene + §6 长尾 1204',
    content: {
      cn:
        '1118 年 8 月 15 日——我 62 岁——在君士坦丁堡 Mangana 宫——病重。\n\n' +
        '我已经在床上躺了三周——胃部肿瘤——希腊医生（Demetrios）跟阿拉伯医生（Ibn al-Tilmidh，从巴格达来的客座，这年代拜占庭和巴格达的医学界还互相往来）一起来过我床边——他们都知道治不了。\n\n' +
        '我女儿 Anna 34 岁（再过几个月才满 35）——她从早上起一直坐在我床边——她手里拿着记录本（她从 15 岁那年开始记我说的话——她是我所有孩子里读书最多的——她知道父亲做的事——比我知道她还多）。\n\n' +
        '我妻子 Irene 站在床尾——她在跟 Anna 私下密谋——她想让 Anna 的丈夫 Bryennios 上位——绕过我们儿子 John II——我知道她在密谋——但我已经没力气干涉了。\n\n' +
        '我看着 Anna——我说了几句话——\n\n' +
        '我具体说了什么，《Alexiad》没有完整记下来（Anna 第 15 卷开头写的是我跟 Bohemond 后期的政治角力总结，不是我临终的话）。这一段是 lens 让你听见——一个皇帝最后那几分钟脑子里到底在转什么——\n\n' +
        '"**Anna——37 年我做了我能做的所有事——这个帝国比 1081 年我接手时强了——但你父亲心里有一件事没解决——我 1094 年那封信——我以为我用别人的力量解决了我的问题——其实我打开了一扇门——这扇门我闭眼那一刻还没关上——你母亲也好、你弟弟 John 也好、你也好——你们都关不上——**\n\n' +
        '**——我不知道这扇门以后会通向哪里。我只是隐隐感觉，它不是我以为我打开的那种门。我把这件事留给你——不是让你解决——是让你继续看着，把你看到的写下来。**"\n\n' +
        '8 月 15 日傍晚——我闭眼——\n\n' +
        '我儿子 John II 那时已经抢先冲进皇宫戴上金冠加冕了——他是新皇帝——\n\n' +
        '我 Komnenos 王朝接下来又活了 100 年——\n\n' +
        '——但我那扇门——\n\n' +
        '现在是 narrator 在告诉你接下来的事。Alexios 1118 年闭眼。86 年后——1204 年 4 月 13 日——第 4 次十字军（本来去打埃及，途中没钱付威尼斯人船费，威尼斯人怂恿他们改路打君士坦丁堡）——攻陷了 Alexios 的城——\n\n' +
        '十字军在君士坦丁堡 3 天——抢、烧、屠（虽然规模比 1099 耶路撒冷小，但同样是基督徒打基督徒）——他们抢光了 Hagia Sophia 大教堂里的金器——拜占庭史家 Niketas Choniates 在《Historia》里写到拉丁兵冲进 Kecharitomene 修道院（也就是 Anna Komnene 后来写完《Alexiad》那一座）强奸修女（没有具体数字）——他们把君士坦丁堡的青铜马（来自古希腊）拆下来运回威尼斯（今天还在威尼斯圣马可大教堂的屋顶上）——\n\n' +
        '拜占庭从此**永远没真正恢复过**。1261 年虽然拜占庭人重新拿回君士坦丁堡——但帝国已经是个空壳——又活了 192 年——1453 年终于被奥斯曼土耳其人灭——\n\n' +
        '**Alexios 1094 年那封信——召来的力量，108 年后开始毁他的城，359 年后帝国彻底亡。**\n\n' +
        'Alexios 临终前隐隐感觉那扇门不是他以为的那种门。后来 86 年，他开始得到证据——只是他来不及亲眼看到了。',
      en:
        'August 15, 1118. I was sixty-two. In the Mangana Palace at Constantinople. Very ill.\n\n' +
        'I had been in bed for three weeks. A stomach tumor. A Greek doctor named Demetrios and an Arab doctor named Ibn al-Tilmidh, visiting from Baghdad (in this period the Byzantine and Baghdad medical worlds still spoke to each other), had both stood at my bedside. They both knew it could not be cured.\n\n' +
        'My daughter Anna was thirty-four (her birthday was still a few months away). She had been sitting beside the bed since morning. She held her notebook (she had begun, at fifteen, to write down what I said. She had read more than any of my children. She knew what her father had done — better than I knew her).\n\n' +
        'My wife Irene stood at the foot of the bed. She and Anna were quietly plotting to put Anna\'s husband Bryennios on the throne, bypassing our son John II. I knew. I was too weak to stop them.\n\n' +
        'I looked at Anna. I said a few sentences.\n\n' +
        'What I actually said, the *Alexiad* does not preserve in full (book 15 opens with the political summary of my long contest with Bohemond, not with the words I gave at the end). What follows is what this lens lets you hear — what was turning inside an emperor in his final minutes:\n\n' +
        '"**Anna — for thirty-seven years I did everything I could do. The empire is stronger now than when I took it in 1081. But your father has one thing not settled inside himself. The letter I sent in 1094 — I thought I had used another man\'s strength to solve my problem. In truth I opened a door. The door is still open at the moment my eyes close. Your mother cannot close it. Your brother John cannot close it. You cannot close it.**\n\n' +
        '**I do not know where this door will lead. I only sense, dimly, that it is not the door I thought I had opened. I leave this matter with you — not to solve, but to keep watching. Write down what you see.**"\n\n' +
        'On the evening of August 15, my eyes closed.\n\n' +
        'My son John II had already rushed into the palace and crowned himself before anyone else moved. He was now emperor.\n\n' +
        'My Komnenos dynasty would last another hundred years.\n\n' +
        'But my door —\n\n' +
        'Now the narrator tells you what came next. Alexios closed his eyes in 1118. **Eighty-six years later, on April 13, 1204**, the Fourth Crusade — originally aimed at Egypt, but unable to pay its Venetian boat fare, redirected by the Venetians to Constantinople instead — broke through the walls of Alexios\'s city.\n\n' +
        'The crusaders held the city for three days. They looted, burned, and killed (smaller in scale than 1099 Jerusalem, but again Christians killing Christians). They stripped the gold vessels of *Hagia Sophia*. The Byzantine historian Niketas Choniates, in his *Historia*, recorded Latin soldiers breaking into the Kecharitomene monastery (the very monastery where Anna Komnene would later write the *Alexiad*) and raping nuns there — he did not give a specific number. They removed the bronze horses of Constantinople (originally Greek antiquities) and shipped them back to Venice — where they still stand today on the roof of St. Mark\'s Basilica.\n\n' +
        'Byzantium **never truly recovered**. In 1261 the Byzantines retook the city, but the empire was now a hollow shell. It lasted another 192 years. In 1453 it fell to the Ottoman Turks for the last time.\n\n' +
        '**The army Alexios called for in 1094 began destroying his city 108 years later. The empire was completely gone in 359 years.**\n\n' +
        'Alexios sensed, on his deathbed, that the door he had opened was not the door he had thought. Eighty-six years later the evidence arrived — but not in time for him to see it.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Alexios 临终的预感对了——下一节，narrator 提两个真问题。',
    expectedLength: '340-380 字',
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
        '你刚扮演了 Alexios——一个 38 岁写信求兵 + 62 岁闭眼时已经预感到自己引来的力量会毁这座城的拜占庭皇帝。\n\n' +
        '问题来了。Alexios 1094 年那封信——是**高超的政治智慧**（用别人的力量解决自己的问题）还是**历史最大的判断失误**（开了一扇关不上的门）？\n\n' +
        '历史学界对 Alexios 这封信的评价**两极分化**——都有真证据。\n\n' +
        '**一种说法 — 拜占庭学派 / Anna Komnene 传统（《Alexiad》12 世纪 + 现代 Byzantine studies 多数派）**：Alexios 那一刻面对的现实：塞尔柱占了 80% 小亚细亚——拜占庭兵不够——求外援是合理的——结果他**实际拿回了 Nicaea + 部分 Anatolia + 维持了帝国 100 年**——他**做对了**。1204 年是后人（包括他孙子 Manuel I 跟威尼斯吵架的那些事）累积的错——不能赖在他 1094 那封信头上。这是政治家**正确的近期决策被遥远的不可控未来污染**——但他**1094 年那一刻**做的是**对的**。\n\n' +
        '**另一种说法 — 结构性批判读法（例如 Peter Frankopan《The First Crusade: The Call from the East》2012 这一脉重新审视东西方制度差距的当代研究）**：Alexios 是个一流的近期政治家——但他**忽略了制度的不对称性**——他求的是"拜占庭传统 = 几千雇佣兵"——他没意识到"拉丁世界传统 = 教皇可以越过国王召集 10 万人"——他不懂西方那个体系——他用拜占庭逻辑去拉一根西方的绳，绳子是他不熟悉的——这种**对外部体系结构的误判** = 政治家的判断失误。1204 不是巧合——是 1094 的种子按拉丁教权-王权那套机制长出来的果。Alexios 那封信不是"高招"——是"误以为自己懂西方"的写照。\n\n' +
        '两边都站得住——一种说法 走"近期可控范围内决策正确"看，另一种说法 走"对外部体系结构判断"看。\n\n' +
        '你怎么看？Alexios 1094 那封信——更靠近一种说法（高超政治智慧）还是另一种说法（历史最大判断失误）？想 30 秒。',
      en:
        'You have just played Alexios — a thirty-eight-year-old emperor who wrote a letter asking for soldiers, and who at sixty-two closed his eyes already feeling that the force he had called would, one day, destroy his city.\n\n' +
        'Here is the question. Alexios\'s 1094 letter — was it **high political intelligence** (using another man\'s strength to solve his own problem) or **the largest misjudgment in history** (opening a door that could not be closed)?\n\n' +
        'Historians are split on this letter, with real evidence on both sides.\n\n' +
        '**Reading A — the Byzantinist tradition (the *Alexiad* in the 12th century, and most modern Byzantine studies):** Alexios faced a real problem in 1094. The Seljuks held eighty percent of Asia Minor. Byzantium did not have enough troops. Asking for help abroad was rational. And he **did** retake Nicaea, parts of Anatolia, and gave the empire another hundred years of life. He **made the right call**. The 1204 disaster came from later mistakes (including his grandson Manuel I\'s quarrels with Venice). You cannot blame the 1094 letter for what happened in 1204. This is the case of **a politician making a correct short-range decision being polluted by a distant, uncontrollable future** — but in 1094, in that moment, his choice was right.\n\n' +
        '**Reading B — the structural-critical reading (e.g. Peter Frankopan, *The First Crusade: The Call from the East*, 2012, and similar contemporary work re-examining the institutional gap between East and West):** Alexios was a first-class short-range politician. But he **failed to read the asymmetry of institutions**. He requested help on Byzantine terms — "a few thousand mercenaries." He did not realize that the Latin tradition, where the pope could go around kings and mobilize 100,000 men, was a different machine entirely. He did not understand the Western system. He pulled on a Western rope using Byzantine logic, not knowing what was tied to the other end. **This kind of misjudgment of an external system\'s structure is exactly a political failure.** 1204 was not a coincidence. It was the seed of 1094 growing through the mechanics of Latin church-state politics. Alexios\'s letter was not a brilliant move — it was the portrait of a man who thought he understood the West, and did not.\n\n' +
        'Both readings stand. Reading A judges from inside short-range control. Reading B judges from the structural mismatch between two civilizations.\n\n' +
        'What do you think? Was the 1094 letter closer to Reading A (high political intelligence) or Reading B (largest misjudgment in history)? Take thirty seconds.',
    },
    deliverGoal:
      '你扮演了 Alexios 8 节——一个写信求兵 + 闭眼时已经感觉到自己引来力量会毁城的皇帝。' +
      '历史学界对那封 1094 年信**两极分化**：' +
      '**一种说法（Byzantinist 传统）**：近期决策正确——他实际拿回 Nicaea + 维持帝国 100 年——1204 不能赖在他头上。' +
      '**另一种说法（结构性批判派）**：他不懂西方教权-王权那套——拉了一根他不熟悉的绳——这是政治家结构性误判。' +
      '——你怎么看，Alexios 那封信是高智慧还是大失误？',
    engagementHook:
      '**你怎么看**——Alexios 1094 那封信，是高超政治智慧还是历史最大判断失误？没有标准答案——给你的理由说服我。想 30 秒',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§7 DBQ moral crucible + §9 historiography + §10 误解',
    content: {
      cn:
        '第二个真问题——这一个跨越 11 世纪——延伸到任何时代的政治家。\n\n' +
        '1099 年 7 月底——耶路撒冷屠杀消息传到 Alexios——他**沉默了两天**——然后**没公开谴责**。他知道这些"基督徒兄弟"屠了穆斯林、犹太人——还**错杀了拜占庭管辖下的东方基督徒**——但他**没说话**。这一段是 lens 让你听见——一个皇帝沉默时反复转的话——他没写下来，也没说出口——但他自己知道："我把他们引进东方——他们干了我永远不会干的事——但我没有公开谴责。"\n\n' +
        '问题来了。Alexios 1099 年的沉默——是**政治家的隐忍**（不能撕破脸否则塞尔柱反扑 / 拉丁人转投敌方）还是**道德上的同谋**（他知道但他没说，他用自己的沉默换帝国的杠杆）？\n\n' +
        '这个问题超出 11 世纪——它是任何时代的政治家在"维护合作 vs 公开谴责盟友暴行"之间的两难——\n\n' +
        '**一种说法 — 政治现实主义（Byzantine Realpolitik 学派 / Henry Kissinger 风格的国际关系阅读）**：政治家不是道德家——他的责任是国家生存——Alexios 沉默换来的是：① 拜占庭和拉丁国家不公开决裂 ② 塞尔柱被牵制在南线 ③ 他可以集中精力收复北线小亚细亚——**这三件 + 一句"我反对"——你选哪个？**——选了"我反对"——你 8 个月后丢君士坦丁堡——你子孙后代连写《Alexiad》的机会都没有。沉默是**对帝国负责**。\n\n' +
        '**另一种说法 — 道德底线派（现代人权传统 / Hannah Arendt "the banality of evil" 框架反向阅读）**：政治家**永远不能用"国家利益"洗白沉默**。沉默 = 默许 = 同谋。Alexios 自己心里清楚"他们干了我永远不会干的事"——他自己知道这是错的——但他选了不说——这不是"政治智慧"——是**用自己的沉默向暴行换政治资本**。如果他公开谴责——可能损失 10% 政治杠杆——但他保留了一件政治家最难保留的东西——**自己的人格**。50 年后写他历史的人——会写"沉默的皇帝"——这个名字比"Antioch 的得失"重得多。\n\n' +
        '两边都站得住——一种说法 是**国家责任**优先，另一种说法 是**人性底线**优先。\n\n' +
        '你怎么看？Alexios 那两天的沉默——更靠近一种说法（政治家的隐忍）还是另一种说法（道德上的同谋）？想 30 秒。\n\n' +
        '注：这个问题没有"中国 vs 西方"的对照——因为它是**任何时代任何制度下政治家都要面对的真两难**——你今天看任何当代领袖在"盟友暴行"前的沉默——同一个张力。',
      en:
        'A second real question. This one moves beyond the eleventh century, into any time a political leader has stood at this same crossroad.\n\n' +
        'Late July 1099. The news of the Jerusalem massacre reaches Alexios. He is silent for two days. He does not condemn. He knows these "Christian brothers" massacred Muslims, Jews — and **also killed Eastern Christians under his own jurisdiction by mistake**. But he says nothing publicly. This passage is what the lens lets you hear — what was turning inside the emperor in those two days, never written, never spoken aloud, but known to himself: "I brought them into the East. They did what I would never do. And I did not condemn it."\n\n' +
        'Here is the question. Alexios\'s 1099 silence — was it **political endurance** (he could not break the relationship without a Seljuk counter-strike or Latins switching sides), or was it **moral complicity** (he knew, and he traded his own silence for imperial leverage)?\n\n' +
        'This question moves out of the eleventh century. It applies to every era, every ruler standing between "preserving an alliance" and "publicly condemning an ally\'s atrocity."\n\n' +
        '**Reading A — political realism (the Byzantine Realpolitik school / a Henry-Kissinger-style international relations reading):** A statesman is not a moralist. His duty is the survival of his state. Alexios\'s silence bought: (1) no open break between Byzantium and the new Latin states; (2) the Seljuks pinned on a southern front; (3) the focus to retake northern Asia Minor. **Those three things, or one sentence of "I disapprove" — which would you choose?** If you choose "I disapprove" and you lose Constantinople eight months later, your descendants do not even get the chance to write the *Alexiad*. Silence is **responsibility to the state**.\n\n' +
        '**Reading B — the moral-line school (modern human rights tradition / Hannah Arendt\'s "banality of evil" read in reverse):** A statesman can never wash away silence with "state interest." Silence equals consent equals complicity. Alexios himself knew internally — "they did what I would never do." He knew it was wrong. He chose not to say so. This is not "political wisdom." This is **trading silence for political capital**. If he had publicly condemned, perhaps he would have lost ten percent of his leverage. But he would have kept the one thing a statesman finds hardest to keep — **his own conscience**. Fifty years later, the people writing his history would call him "the silent emperor" — and that label weighs more than the gain or loss of Antioch.\n\n' +
        'Both readings stand. Reading A puts state responsibility first. Reading B puts the human moral floor first.\n\n' +
        'What do you think? Was Alexios\'s two-day silence closer to Reading A (political endurance) or Reading B (moral complicity)? Take thirty seconds.\n\n' +
        'Note: this question does **not** come with a "China vs. West" comparison, because it is **a real bind every era and every system of government produces**. Watch any modern leader stand silent in front of an ally\'s atrocity, and you are watching the same tension.',
    },
    deliverGoal:
      'Alexios 1099 屠杀消息传到——他沉默了两天——没公开谴责——' +
      '**一种说法（政治现实主义）**：他责任是国家生存——沉默换来 3 件实质好处 vs 一句"我反对"——选哪个？' +
      '**另一种说法（道德底线派）**：他自己心里清楚是错的——选了不说 = 同谋——他用沉默换政治资本——50 年后历史会记住"沉默的皇帝"。' +
      '——这个问题超出 11 世纪——任何时代任何政治家在"盟友暴行"前都要回答',
    engagementHook:
      '**你怎么看**——Alexios 那两天沉默，是政治家的隐忍还是道德上的同谋？想 30 秒',
    expectedLength: '220-260 字 + 真问题',
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
        '你刚从 Alexios 的内部走了一遍——他 14 岁那年 Manzikert 大败的消息到君士坦丁堡——他 24 岁政变上位面对一个看似要死的帝国——他 38 岁在 Blachernae 油灯下写那封信——他 41 岁看着 Bohemond 单膝下跪装恭顺——他 41 岁那年 Nicaea 5 月偷偷开城给他——他 41-42 岁选择不亲赴 Antioch 援军——他 43 岁两天沉默接受耶路撒冷屠杀消息——他 52 岁让 Bohemond 在 Devol 条约上低头——他 62 岁临终对 Anna 说"我开了一扇关不上的门"——然后 86 年后那扇门反过来吃掉他的城。\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你停一下的是什么？\n\n' +
        '是 Bohemond 单膝跪在他面前那一刻——两个人都在演戏——两个人都知道对方在演？\n\n' +
        '是 Nicaea 5 月 19 日清晨——城墙上挂的不是十字军旗而是双头鹰——他**用一封信 + 一艘船**赢了一场十字军围 5 周的城？\n\n' +
        '是 Antioch 那 8 个月他选择不亲征——心里那第三个理由："他们越虚弱我越好谈判"？\n\n' +
        '是 1099 年 7 月底耶路撒冷屠杀消息到——他**沉默两天**——他自己心里清楚"他们干了我永远不会干的事"但他没公开谴责？\n\n' +
        '还是 1118 年临终——他对 Anna 说"这扇门我闭眼那一刻还没关上"——86 年后这扇门真反过来吃了他的城？\n\n' +
        '说一句话告诉我。\n\n' +
        '然后——你可以选：(1) 进 mastery 通关；或者 (2) 换 lens 重玩——同一个 1099，不同视角——可能是 Roger（你已经走过的拉丁骑士），可能是 Aisha（耶路撒冷穆斯林女孩）。同一事件不同角度——会发现新东西。',
      en:
        'You have just walked Alexios from the inside — the news of Manzikert reaching Constantinople when he was fourteen; the coup at twenty-four facing an empire that looked finished; the lamplit letter at thirty-eight; Bohemond going down on one knee at forty-one with both of them performing; the Byzantine eagle on the walls of Nicaea before sunrise on May 19, 1097; the choice at forty-one to not march to Antioch in person; the two days of silence at forty-three when the Jerusalem news arrived; Bohemond\'s head finally lowered at the Treaty of Devol when Alexios was fifty-two; the deathbed sentence to Anna at sixty-two — "I opened a door that I cannot close before my eyes close" — and then, eighty-six years later, that door coming back to eat his city.\n\n' +
        'Before you move into the mastery check, one question:\n\n' +
        'What made you pause most in this lens?\n\n' +
        'Was it Bohemond on one knee in front of him — both men acting — both men knowing the other was acting?\n\n' +
        'Was it the morning of May 19 at Nicaea — the Byzantine eagle on the walls instead of a crusader banner — Alexios winning a five-week siege with **one letter and one boat**?\n\n' +
        'Was it the eight months at Antioch when he chose not to march — and the third reason inside his head: "the weaker they get, the better my position"?\n\n' +
        'Was it the late July of 1099, the silence of two days — the line he knew but never said: "they did what I would never do" — but he did not say it publicly?\n\n' +
        'Or was it the deathbed line to Anna in 1118 — "the door is still open at the moment my eyes close" — and then eighty-six years later that door truly came back and ate his city?\n\n' +
        'Tell me in one sentence.\n\n' +
        'Then — you can choose: (1) go into mastery, or (2) switch lens and replay — same 1099, different angle. You have already walked Roger (the Latin knight) or could try Aisha (the Muslim girl in Jerusalem). Same event, different angle, new things to see.',
    },
    deliverGoal:
      '你扮演了 Alexios 9 节——从 14 岁 Manzikert 到 62 岁临终——再到 86 年后他的城被反过来吃掉——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换 lens 重玩——比如 Roger（你刚走过的拉丁骑士）或 Aisha（耶路撒冷穆斯林女孩）——' +
      '同一事件不同角度——会发现新东西',
    engagementHook:
      '**Alexios 这一遍——最让你停一下的是什么**？是 Bohemond 单膝下跪两人都在演？是 Nicaea 一封信赢一场城？是 Antioch 没亲征那第三个理由？是 1099 沉默两天？还是临终那扇门 86 年后真吃了他的城？说一句话',
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
  'aisha-jerusalem': {
    id: 'aisha-jerusalem',
    name: 'Aisha bint Yusuf',
    nameCn: 'Aisha（虚构耶路撒冷穆斯林女孩）',
    role: '12 岁穆斯林女孩 / 棉布商 Yusuf 的女儿 / 1099 受害方视角',
    description:
      '你扮演 Aisha bint Yusuf——一个虚构的 12 岁耶路撒冷穆斯林女孩——围城前一天还在无花果树下跟邻居小女孩玩——城破后躲地窖 3 天——爬出来看见父亲尸体——和母亲带 6 岁弟弟逃到 Ascalon——你会经历屠城从受害方内部看是什么——以及 Roger 那条"红头巾"的另一面。',
    storyboard: aishaJerusalemStoryboard,
  },
  'alexios': {
    id: 'alexios',
    name: 'Alexios I Komnenos',
    nameCn: '阿莱克修斯一世（拜占庭皇帝）',
    role: '拜占庭皇帝 / 1094-1118 mediator-insider 视角 / 24 年帝国走钢丝',
    description:
      '你扮演 Alexios I Komnenos——1056 生君士坦丁堡老牌军事贵族——24 岁政变上位接手要死的帝国——38 岁写信向 Urban II 求 3000 兵——结果来了 10 万乱军——你会经历他逼 Bohemond 装恭顺、用一封信赢 Nicaea、Antioch 没亲征、1099 屠杀消息后两天沉默、62 岁临终对女儿 Anna 说"我开了一扇关不上的门"——然后 86 年后这扇门反过来吃他的城。',
    storyboard: alexiosStoryboard,
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
    'aisha-jerusalem': 32,
    'alexios': 32,
  },
};
