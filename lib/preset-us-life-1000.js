/* ─── Know U. Learning — 美国生活常用词汇 1000 词 ───
   面向 K-8 中国学生在美国日常生活场景中真正用到的高频词。
   18 个主题分组，每组 30-100 词，覆盖：
     家居 / 食物 / 学校 / 家庭 / 身体健康 / 情绪性格 / 交通 / 购物
     / 天气季节 / 时间日期 / 节日娱乐 / 体育 / 科技 / 沟通 / 社交
     / 数量程度 / 地点方位 / 描述形容
   选词原则：
     - 全 lowercase，单词或短词组（≤30 字符）
     - 避开太基础的 the/a/he 等纯功能词
     - 避开太学术的 cognition/empirical 等
     - 包含美式特有词（restroom/sneakers/freeway/uber/target 等）
*/

var US_LIFE_1000_RAW = [
  // ═══ 家居 / 生活基础 (100) ═══
  "home", "house", "apartment", "condo", "townhouse", "neighborhood", "yard", "garden", "lawn", "fence",
  "gate", "driveway", "garage", "porch", "deck", "patio", "attic", "basement", "hallway", "stairs",
  "bedroom", "bathroom", "kitchen", "living room", "dining room", "office", "closet", "pantry", "laundry room", "mudroom",
  "door", "window", "wall", "ceiling", "floor", "roof", "chimney", "vent",
  "bed", "pillow", "blanket", "sheet", "mattress", "comforter", "sofa", "couch", "chair", "armchair",
  "table", "desk", "dresser", "nightstand", "shelf", "bookshelf", "cabinet", "drawer", "rug", "curtain",
  "lamp", "ceiling fan", "outlet", "switch", "thermostat", "smoke detector",
  "fridge", "freezer", "oven", "stove", "microwave", "dishwasher", "washer", "dryer", "blender", "toaster",
  "coffee maker", "kettle", "vacuum", "broom", "mop", "sponge", "trash can", "recycling bin",
  "plate", "bowl", "cup", "mug", "glass", "fork", "spoon", "knife", "napkin", "paper towel",
  "pot", "pan", "lid", "spatula", "cutting board", "tupperware",
  "soap", "shampoo", "toothbrush", "toothpaste", "lotion",

  // ═══ 食物 / 餐饮 (100) ═══
  "breakfast", "lunch", "dinner", "snack", "brunch", "dessert", "appetizer", "leftovers", "meal", "recipe",
  "bread", "toast", "bagel", "pancake", "waffle", "cereal", "oatmeal", "muffin", "donut", "cupcake",
  "rice", "pasta", "noodle", "sandwich", "burger", "hotdog", "pizza", "taco", "burrito", "quesadilla",
  "sushi", "ramen", "fries", "chips", "popcorn", "pretzel", "cracker",
  "salad", "soup", "stew", "chili", "casserole",
  "egg", "chicken", "beef", "pork", "turkey", "bacon", "sausage", "fish", "shrimp", "tofu",
  "beans", "lentils", "peanut butter", "yogurt", "cheese", "cream cheese",
  "lettuce", "tomato", "cucumber", "carrot", "broccoli", "spinach", "potato", "sweet potato", "onion", "garlic",
  "pepper", "mushroom", "corn", "peas", "avocado", "celery",
  "apple", "banana", "orange", "grape", "strawberry", "blueberry", "raspberry", "watermelon", "pineapple", "mango",
  "peach", "pear", "cherry", "lemon", "lime", "kiwi",
  "water", "milk", "juice", "coffee", "tea", "soda", "lemonade", "smoothie", "hot chocolate",
  "salt", "sugar", "butter", "ketchup", "mustard", "mayo", "syrup", "honey", "jam",

  // ═══ 学校 / 学习 (80) ═══
  "school", "classroom", "teacher", "student", "principal", "librarian", "counselor", "nurse", "janitor",
  "cafeteria", "library", "gym", "playground", "locker", "restroom", "auditorium", "lab",
  "backpack", "notebook", "binder", "folder", "pencil", "pen", "eraser", "ruler", "scissors", "glue stick",
  "marker", "highlighter", "calculator", "laptop", "textbook", "planner", "agenda",
  "homework", "assignment", "project", "presentation", "essay", "report", "test", "quiz", "exam", "midterm",
  "final", "grade", "gpa", "credit", "semester", "quarter", "trimester",
  "math", "algebra", "geometry", "science", "biology", "chemistry", "physics", "earth science",
  "english", "writing", "reading", "language arts", "history", "social studies", "geography",
  "art", "music", "band", "choir", "drama", "pe", "computer science", "spanish", "french",
  "recess", "dismissal", "attendance", "absent", "tardy", "detention", "suspension", "graduation",

  // ═══ 家庭 / 关系 (50) ═══
  "family", "mom", "dad", "mother", "father", "parent", "brother", "sister", "sibling", "son",
  "daughter", "kid", "child", "twin", "only child",
  "grandma", "grandpa", "grandmother", "grandfather", "grandparent", "great-grandma", "great-grandpa",
  "aunt", "uncle", "cousin", "niece", "nephew",
  "in-law", "stepmom", "stepdad", "stepsister", "stepbrother", "half-sister", "half-brother",
  "friend", "best friend", "neighbor", "classmate", "roommate", "teammate", "coach",
  "mentor", "crush", "boyfriend", "girlfriend", "partner", "ex", "stranger", "peer", "buddy", "pal",

  // ═══ 身体 / 健康 (80) ═══
  "head", "hair", "face", "forehead", "eye", "eyebrow", "eyelash", "ear", "nose", "mouth",
  "lip", "tooth", "tongue", "chin", "cheek", "jaw", "neck",
  "shoulder", "arm", "elbow", "wrist", "hand", "finger", "thumb", "palm", "knuckle",
  "chest", "back", "stomach", "belly", "hip", "waist",
  "leg", "thigh", "knee", "ankle", "foot", "toe", "heel",
  "skin", "muscle", "bone", "blood",
  "tired", "sleepy", "energetic", "hungry", "thirsty", "full",
  "sick", "healthy", "fit", "weak", "strong", "sore", "dizzy", "nauseous",
  "headache", "stomachache", "toothache", "backache", "sore throat", "runny nose", "cough", "sneeze",
  "fever", "chills", "allergy", "rash", "bruise", "cut", "scrape", "blister",
  "doctor", "dentist", "hospital", "clinic", "pharmacy", "medicine", "prescription", "vaccine",
  "bandage", "vitamin", "checkup", "appointment", "insurance",

  // ═══ 情绪 / 性格 (60) ═══
  "happy", "glad", "joyful", "excited", "thrilled", "cheerful", "delighted",
  "proud", "confident", "calm", "peaceful", "content", "grateful", "thankful",
  "optimistic", "hopeful", "kind", "generous", "brave", "courageous",
  "sad", "upset", "down", "blue", "gloomy",
  "angry", "mad", "furious", "annoyed", "frustrated", "irritated",
  "disappointed", "worried", "anxious", "nervous", "stressed", "overwhelmed",
  "scared", "afraid", "terrified", "panicked",
  "lonely", "homesick", "jealous", "envious", "embarrassed", "ashamed", "guilty",
  "shy", "outgoing", "friendly", "mean", "nice", "polite", "rude", "honest",
  "lazy", "hardworking", "smart", "clever", "funny", "serious", "creative", "curious",
  "stubborn", "patient", "impatient", "responsible", "bossy", "picky", "easygoing", "thoughtful",

  // ═══ 交通 / 出行 (60) ═══
  "car", "suv", "truck", "van", "minivan",
  "bus", "school bus", "subway", "train", "taxi", "uber", "lyft",
  "bike", "scooter", "skateboard", "motorcycle",
  "plane", "airplane", "helicopter", "boat", "ferry", "ship",
  "road", "street", "freeway", "highway", "lane", "exit", "ramp", "intersection",
  "sidewalk", "crosswalk", "bridge", "tunnel", "parking lot", "garage", "driveway",
  "gas station", "charging station", "rest stop",
  "drive", "ride", "walk", "run", "jog",
  "take off", "land", "board", "commute", "carpool", "road trip",
  "traffic", "jam", "detour", "accident", "ticket", "license",
  "trip", "vacation", "holiday", "hotel", "motel", "airbnb", "passport", "suitcase", "luggage", "carry-on",

  // ═══ 购物 / 消费 (60) ═══
  "mall", "store", "shop", "supermarket", "grocery store", "target", "walmart", "costco", "amazon",
  "whole foods", "trader joes", "dollar store", "convenience store", "outlet",
  "clothes", "outfit", "shoes", "sneakers", "sandals", "boots", "flip flops",
  "shirt", "t-shirt", "hoodie", "sweater", "sweatshirt", "jacket", "coat", "raincoat",
  "jeans", "pants", "shorts", "skirt", "dress", "leggings",
  "socks", "underwear", "hat", "cap", "scarf", "gloves",
  "brand", "sale", "discount", "deal", "coupon", "gift card", "free", "expensive", "cheap", "affordable",
  "cart", "checkout", "cashier", "receipt", "bag", "refund", "return", "exchange", "store credit",
  "online order", "delivery", "shipping", "tracking",

  // ═══ 天气 / 季节 (30) ═══
  "weather", "temperature", "forecast",
  "sunny", "cloudy", "rainy", "snowy", "windy", "foggy",
  "hot", "cold", "warm", "cool", "freezing", "humid", "dry", "mild", "chilly",
  "rain", "snow", "sunshine", "raindrop", "snowflake", "lightning", "thunder", "hail",
  "storm", "hurricane", "tornado", "blizzard",
  "spring", "summer", "fall", "autumn", "winter",

  // ═══ 时间 / 日期 (40) ═══
  "morning", "noon", "afternoon", "evening", "night", "midnight", "dawn", "dusk", "sunrise", "sunset",
  "weekend", "weekday",
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
  "yesterday", "today", "tomorrow", "last week", "next week", "this year", "last year",

  // ═══ 节日 / 娱乐 (50) ═══
  "birthday", "christmas", "halloween", "thanksgiving", "easter", "new year", "fourth of july",
  "mothers day", "fathers day", "valentines day", "st patricks day", "hanukkah",
  "party", "sleepover", "playdate", "hangout", "picnic", "bbq", "camping", "hiking",
  "fishing", "swimming", "family reunion",
  "movie", "theater", "concert", "museum", "zoo", "aquarium", "amusement park", "theme park",
  "arcade", "bowling", "mini golf", "ice skating", "roller skating", "beach day", "pool day",
  "tiktok", "instagram", "youtube", "snapchat", "discord", "roblox", "minecraft", "fortnite",
  "anime", "k-pop", "podcast", "playlist",

  // ═══ 体育 / 运动 (40) ═══
  "basketball", "soccer", "football", "baseball", "tennis", "volleyball", "badminton", "golf",
  "hockey", "lacrosse", "ping pong",
  "swimming", "diving", "gymnastics", "dance", "ballet", "cheerleading", "track", "cross country",
  "running", "jogging", "yoga", "pilates",
  "skateboarding", "surfing", "skiing", "snowboarding", "climbing", "biking", "kayaking",
  "team", "captain", "practice", "match", "score", "win", "lose", "tie", "championship", "trophy",

  // ═══ 科技 / 数字生活 (50) ═══
  "phone", "smartphone", "computer", "laptop", "tablet", "ipad", "screen", "charger",
  "headphones", "earbuds", "airpods", "speaker", "camera", "smart watch",
  "app", "browser", "search", "google", "password", "login", "account", "profile",
  "username", "settings", "notification", "update", "install", "download",
  "text", "message", "email", "video call", "facetime", "zoom", "group chat", "voice memo",
  "post", "comment", "like", "share", "follow", "unfollow", "block", "story", "reel",
  "hashtag", "trend", "viral", "influencer",
  "scroll", "swipe", "tap", "click", "screenshot", "selfie", "filter",

  // ═══ 沟通 / 表达 (40) ═══
  "hello", "hi", "hey", "goodbye", "bye", "see you", "good night", "good morning", "good afternoon",
  "please", "thank you", "thanks", "sorry", "excuse me", "no problem", "youre welcome", "my bad",
  "yes", "no", "sure", "okay", "maybe", "definitely", "absolutely",
  "of course", "no way", "really", "exactly", "totally",
  "ask", "answer", "tell", "say", "explain", "repeat", "whisper", "shout",
  "complain", "agree", "disagree", "argue", "discuss",

  // ═══ 关系 / 社交动作 (40) ═══
  "friendship", "drama", "squad", "vibe",
  "hug", "kiss", "high five", "fist bump", "handshake", "wave", "nod",
  "smile", "frown", "laugh", "giggle", "cry", "blush",
  "love", "like", "miss", "hate", "trust", "betray",
  "support", "encourage", "comfort", "console", "defend", "protect", "help", "share",
  "compliment", "tease", "joke", "prank", "apologize", "forgive", "thank", "appreciate", "include", "ignore",

  // ═══ 数量 / 程度 (40) ═══
  "more", "less", "most", "least",
  "bigger", "smaller", "taller", "shorter", "longer", "wider", "narrower",
  "faster", "slower", "better", "worse", "best", "worst",
  "easier", "harder", "simpler", "cheaper",
  "very", "super", "really", "totally", "extremely", "fairly", "kind of", "sort of",
  "a bit", "a little", "a lot", "too much", "not enough", "plenty",
  "almost", "barely", "hardly", "nearly", "exactly",

  // ═══ 地点 / 方位 (40) ═══
  "place", "location", "address", "city", "town", "suburb", "neighborhood", "county", "state", "country",
  "downtown", "uptown",
  "park", "beach", "lake", "river", "ocean", "mountain", "forest", "desert",
  "post office", "bank", "fire station", "police station", "church",
  "here", "there", "somewhere", "everywhere", "nowhere",
  "north", "south", "east", "west",
  "left", "right", "center", "middle", "top", "bottom", "inside", "outside", "near", "far",

  // ═══ 描述形容词 (40) ═══
  "big", "small", "large", "tiny", "huge", "enormous", "massive",
  "red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "white", "gray", "brown",
  "round", "square", "oval", "rectangular",
  "soft", "hard", "smooth", "rough", "sharp", "dull", "sticky", "slippery", "fluffy",
  "clean", "dirty", "neat", "messy", "broken", "fixed", "new", "old", "fresh",
];

// 去重 + 校验长度（≤30 字符）+ 校验格式（只允许 a-z 空格连字符撇号）
var seen = new Set();
var US_LIFE_1000 = US_LIFE_1000_RAW
  .map(function(w) { return String(w).trim().toLowerCase(); })
  .filter(function(w) {
    if (!w) return false;
    if (w.length > 30) return false;
    if (!/^[a-z][a-z\s'\-]*$/.test(w)) return false;
    if (seen.has(w)) return false;
    seen.add(w);
    return true;
  })
  .join("\n");

export { US_LIFE_1000 };
export default US_LIFE_1000;
