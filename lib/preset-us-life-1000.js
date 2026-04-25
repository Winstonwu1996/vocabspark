/* ─── Know U. Learning — 中国人到美国生活常用词汇 1000 词 ───
   定位：中国人（学生/成人）刚到美国会"听不懂、查不到、用不出"的词。
   不收录 CEFR A1-A2 太基础的词（apple/water/mom 等），也不收录太学术的词。

   16 个主题：
     租房住宿 / 车出行 / 医疗保险 / 银行财务 / 学校教育 / 餐饮就餐
     购物退换 / 工作职场 / 政府文件 / 节日文化 / 社交关系 / 健身健康
     科技账户 / 天气季节 / 行政流程动词 / 情绪心理
*/

var US_LIFE_1000_RAW = [
  // ═══ 租房 / 住宿 (70) ═══
  "rent", "lease", "sublet", "month-to-month", "yearly lease", "deposit", "security deposit", "application fee",
  "credit check", "broker fee", "first and last", "utilities", "electricity bill", "water bill", "gas bill",
  "internet bill", "cable bill", "wifi router", "hoa", "homeowners association", "mortgage", "refinance",
  "escrow", "down payment", "closing cost", "property tax", "real estate agent", "realtor", "landlord", "tenant",
  "eviction", "renters insurance", "homeowners insurance", "condo", "townhouse", "single family", "apartment complex",
  "high-rise", "studio", "one-bedroom", "two-bedroom", "three-bedroom", "master bedroom", "guest room", "walk-in closet",
  "hardwood floor", "granite counter", "stainless steel appliance", "central ac", "fireplace", "in-unit laundry",
  "garbage disposal", "assigned parking", "covered parking", "fenced yard", "pet friendly", "pet deposit", "smoke-free",
  "no pets allowed", "gated community", "subdivision", "cul-de-sac", "school district", "walkable", "commute time",
  "suburbia", "urban", "rural", "zip code", "move-in date", "move-out inspection", "wear and tear",

  // ═══ 车 / 出行 (70) ═══
  "drivers license", "learners permit", "state id", "real id", "dmv", "registration", "smog check", "emissions test",
  "license plate", "vehicle title", "vin", "auto loan", "monthly payment", "down payment", "trade-in", "test drive",
  "dealership", "certified pre-owned", "blue book value", "depreciation", "lemon law", "warranty", "extended warranty",
  "auto insurance", "liability", "comprehensive", "collision", "uninsured motorist", "deductible", "claim", "accident report",
  "fender bender", "totaled", "body shop", "mechanic", "oil change", "tune up", "alignment", "brake pad", "transmission",
  "check engine light", "jump start", "dead battery", "flat tire", "spare tire", "roadside assistance", "aaa",
  "gas station", "premium gas", "regular gas", "diesel", "electric vehicle", "ev charger", "tesla", "hybrid",
  "freeway", "interstate", "hov lane", "carpool lane", "toll road", "ezpass", "fastrak", "rush hour", "gridlock",
  "parking meter", "metered parking", "valet parking", "permit parking", "parking ticket", "tow truck", "impound",

  // ═══ 医疗 / 保险 (70) ═══
  "health insurance", "dental insurance", "vision insurance", "life insurance", "disability insurance",
  "hmo", "ppo", "hsa", "fsa", "copay", "deductible", "premium", "out-of-pocket maximum", "in-network", "out-of-network",
  "prior authorization", "explanation of benefits", "eob", "claim form", "open enrollment", "qualifying event",
  "primary care physician", "pcp", "specialist", "referral", "annual physical", "blood work", "x-ray", "ultrasound",
  "mri", "ct scan", "lab results", "biopsy", "vaccine", "booster shot", "flu shot", "covid test", "rapid test",
  "pcr test", "telehealth", "video visit", "urgent care", "emergency room", "er visit", "ambulance",
  "prescription", "refill", "generic", "brand name", "pharmacy", "walgreens", "cvs", "drug interaction",
  "side effect", "dosage", "over the counter", "otc",
  "pediatrician", "ob-gyn", "dermatologist", "orthodontist", "allergist", "cardiologist",
  "root canal", "filling", "crown", "wisdom tooth", "teeth cleaning", "x-rays", "braces", "retainer",
  "contact lens", "prescription glasses", "eye exam", "lasik",

  // ═══ 银行 / 财务 / 税 (70) ═══
  "checking account", "savings account", "money market", "cd", "certificate of deposit", "credit union",
  "atm", "debit card", "credit card", "secured credit card", "credit score", "fico", "credit limit", "credit utilization",
  "credit history", "credit report", "balance", "statement", "minimum payment", "due date", "grace period",
  "interest rate", "apr", "annual fee", "late fee", "overdraft fee", "overdraft protection", "insufficient funds",
  "wire transfer", "ach", "direct deposit", "paycheck", "payroll", "w-2", "1099", "1040",
  "tax return", "tax refund", "tax deduction", "standard deduction", "itemized deduction", "tax credit",
  "irs", "federal tax", "state tax", "sales tax", "property tax", "estate tax", "capital gains tax",
  "withholding", "estimated tax", "audit", "extension",
  "401k", "ira", "roth ira", "retirement account", "vesting schedule", "employer match", "rollover",
  "social security", "medicare", "ssn", "ein", "taxpayer id", "tin",
  "stock", "bond", "etf", "mutual fund", "dividend", "capital gain", "cost basis",
  "checking number", "routing number", "wire fee",

  // ═══ 学校 / 教育 (70) ═══
  "public school", "private school", "magnet school", "charter school", "parochial school", "homeschool",
  "online school", "boarding school", "elementary school", "middle school", "junior high", "high school",
  "college", "university", "community college", "ivy league", "state school", "liberal arts",
  "in-state tuition", "out-of-state tuition", "international student", "fafsa", "financial aid", "scholarship",
  "grant", "student loan", "work study", "federal aid",
  "semester", "quarter", "trimester", "credit hour", "weighted gpa", "unweighted gpa", "transcript", "diploma",
  "syllabus", "rubric", "common core", "standardized test", "ap class", "honors class", "ib program",
  "ssat", "isee", "psat", "sat", "sat subject test", "act", "ap exam", "subject test",
  "gre", "gmat", "lsat", "mcat", "toefl", "ielts", "duolingo english test",
  "common app", "personal statement", "supplement essay", "early decision", "early action", "regular decision",
  "deferral", "waitlist", "rejection", "acceptance", "decision day",
  "parent-teacher conference", "back to school night", "iep", "504 plan", "gifted program", "tracking",
  "principal", "vice principal", "dean", "counselor", "registrar",

  // ═══ 餐饮 / 外出就餐 (60) ═══
  "diner", "deli", "food truck", "fast casual", "fine dining", "hole in the wall",
  "brunch", "happy hour", "all you can eat", "byob", "drive-thru", "takeout", "dine-in", "to-go",
  "delivery", "doordash", "uber eats", "grubhub", "postmates", "instacart", "amazon fresh",
  "host", "hostess", "server", "bartender", "busser", "sommelier",
  "reservation", "walk-in", "wait time", "wait list", "table for two", "booth", "bar seat", "patio seating",
  "outdoor dining", "private room",
  "menu", "appetizer", "entree", "main course", "side dish", "soup of the day", "daily special",
  "vegetarian", "vegan", "pescatarian", "gluten-free", "dairy-free", "nut allergy", "lactose intolerant",
  "spicy", "medium rare", "medium well", "well done", "rare",
  "free refill", "bottomless mimosa", "doggy bag", "to-go box", "leftovers", "check please", "split the check",
  "separate checks", "tip", "gratuity", "service charge", "auto-gratuity",

  // ═══ 购物 / 退换 (50) ═══
  "target", "walmart", "costco", "sams club", "bjs", "trader joes", "whole foods", "safeway", "kroger",
  "publix", "wegmans", "aldi", "h mart", "ranch 99", "asian market",
  "dollar store", "ross", "marshalls", "tj maxx", "nordstrom", "macys", "jcpenney", "kohls",
  "ikea", "home depot", "lowes", "best buy", "amazon", "ebay", "etsy", "shein", "temu",
  "return policy", "refund", "exchange", "store credit", "gift receipt", "gift card", "no receipt return",
  "restocking fee", "final sale", "clearance", "outlet", "doorbuster",
  "black friday", "cyber monday", "prime day", "flash sale", "lightning deal",
  "free shipping", "expedited shipping", "signature required", "tracking number", "porch pirate",

  // ═══ 工作 / 职场 (50) ═══
  "full-time", "part-time", "contractor", "freelance", "gig worker", "intern", "co-op",
  "employer", "supervisor", "team lead", "hr", "human resources", "recruiter", "headhunter", "hiring manager",
  "resume", "cv", "cover letter", "references", "linkedin profile", "portfolio", "networking event",
  "phone screen", "on-site interview", "panel interview", "case interview", "behavioral interview",
  "offer letter", "negotiation", "base salary", "bonus", "commission", "equity", "stock option", "rsu",
  "vesting cliff", "401k match", "benefits package",
  "pto", "paid time off", "vacation days", "sick leave", "personal day", "maternity leave", "paternity leave",
  "fmla", "bereavement leave", "leave of absence",
  "performance review", "raise", "promotion", "demotion", "layoff", "severance package", "unemployment benefits",
  "side hustle", "remote work", "hybrid", "in-office", "wfh",

  // ═══ 政府 / 文件 (40) ═══
  "social security card", "passport", "us passport", "passport renewal", "tourist visa", "student visa", "f-1",
  "h-1b", "l-1", "green card", "permanent resident", "naturalization", "citizenship test", "swearing in",
  "real id", "tsa precheck", "global entry", "nexus",
  "voter registration", "voter id", "absentee ballot", "mail-in ballot", "early voting", "polling place",
  "primary election", "midterm election", "general election", "ballot measure", "proposition",
  "jury duty", "jury summons", "court date", "traffic court", "small claims",
  "irs notice", "audit", "tax extension", "amended return", "tax court", "irs payment plan",
  "census form", "selective service", "absentee parent",

  // ═══ 节日 / 文化 (40) ═══
  "thanksgiving turkey", "stuffing", "cranberry sauce", "pumpkin pie", "pecan pie", "macys parade",
  "black friday", "cyber monday", "small business saturday",
  "christmas tree", "ornament", "mistletoe", "eggnog", "secret santa", "white elephant", "ugly sweater",
  "hanukkah", "menorah", "kwanzaa",
  "new years eve", "ball drop", "times square", "resolution",
  "valentines day", "st patricks day", "easter egg hunt", "passover", "ramadan",
  "memorial day", "fourth of july", "fireworks", "labor day", "columbus day", "veterans day",
  "halloween costume", "trick or treat", "jack-o-lantern", "haunted house",
  "super bowl sunday", "march madness", "world series", "mardi gras",

  // ═══ 社交 / 关系 (60) ═══
  "best friend", "close friend", "acquaintance", "colleague", "coworker",
  "soccer mom", "tiger mom", "helicopter parent", "stay at home mom", "stay at home dad", "working mom",
  "single parent", "blended family", "step family", "in-laws",
  "neighbor", "nextdoor app", "block party", "neighborhood association",
  "playdate", "carpool", "carpool karaoke", "school pickup", "school dropoff",
  "sleepover", "slumber party", "house party", "kegger", "rager",
  "baby shower", "gender reveal", "bridal shower", "bachelor party", "bachelorette party",
  "wedding", "wedding registry", "rsvp", "plus one", "destination wedding", "elope",
  "anniversary", "honeymoon", "mother in law", "father in law",
  "housewarming", "potluck", "bring a dish", "byob",
  "small talk", "icebreaker", "elevator pitch", "ghosting", "blocked", "unfollow",
  "drama", "beef", "bff", "frenemy",
  "ghosted", "left on read",

  // ═══ 健身 / 健康 (40) ═══
  "planet fitness", "la fitness", "equinox", "ymca", "soulcycle", "peloton", "crossfit", "orangetheory",
  "yoga studio", "pilates reformer", "barre class", "hiit class", "spin class", "boot camp",
  "personal trainer", "group class", "drop-in", "day pass", "annual membership",
  "treadmill", "elliptical", "stair master", "rowing machine", "stationary bike",
  "free weights", "kettlebell", "dumbbell", "barbell", "deadlift", "squat", "bench press",
  "macros", "intermittent fasting", "keto", "paleo", "vegan diet", "whole 30",
  "fitbit", "apple watch", "step count", "calorie tracker",

  // ═══ 科技 / 数字 (40) ═══
  "iphone", "android", "samsung", "pixel",
  "lightning cable", "usb-c", "wireless charging", "magsafe", "airpods", "bluetooth speaker",
  "wifi password", "guest wifi", "hotspot", "vpn",
  "two-factor authentication", "2fa", "biometric", "face id", "touch id", "passcode",
  "screen time", "do not disturb", "silent mode", "airdrop",
  "app store", "google play", "in-app purchase", "subscription", "free trial", "auto-renew", "cancel anytime",
  "netflix", "hulu", "disney plus", "hbo max", "apple tv", "spotify premium", "apple music",
  "podcast app", "amazon prime", "prime video",

  // ═══ 天气 / 自然 (30) ═══
  "weather forecast", "weather app", "hurricane warning", "tornado warning", "earthquake",
  "heat wave", "cold front", "polar vortex", "blizzard", "snowstorm", "ice storm", "freezing rain",
  "wind chill", "heat index", "humidity", "dew point", "uv index",
  "allergy season", "pollen count", "wildfire season", "smoke advisory", "air quality", "aqi",
  "daylight saving", "fall back", "spring forward",
  "indian summer", "monsoon season", "fall foliage", "leaf peeping",

  // ═══ 行政流程动词 (50) ═══
  "schedule", "reschedule", "cancel", "confirm", "follow up", "loop in",
  "check in", "check out", "sign up", "sign in", "log in", "log out", "opt in", "opt out",
  "subscribe", "unsubscribe", "register", "fill out", "submit", "approve", "deny", "accept", "decline",
  "postpone", "delay", "expedite", "escalate",
  "dispute", "file a claim", "file a complaint", "file a report", "file taxes", "file an appeal",
  "request a refund", "request a return", "request a replacement",
  "troubleshoot", "contact support", "customer service", "tech support",
  "on hold", "transferred to", "supervisor please",
  "leave a review", "give feedback", "recommend", "refer a friend",
  "ship", "track", "deliver", "return to sender",

  // ═══ 情绪 / 心理 / 个人成长 (40) ═══
  "stressed out", "overwhelmed", "anxious", "burnt out", "exhausted", "drained", "fed up",
  "frustrated", "annoyed", "irritated", "disappointed", "hurt", "lonely", "homesick", "nostalgic",
  "depressed", "down", "melancholy",
  "content", "fulfilled", "grateful", "blessed", "humble",
  "optimistic", "hopeful", "motivated", "inspired", "energized", "refreshed",
  "self-care", "mental health", "therapy", "therapist", "counseling",
  "boundaries", "red flag", "green flag", "toxic", "gaslighting",
  "growth mindset", "comfort zone", "imposter syndrome", "midlife crisis",

  // ═══ 美式餐饮细节 (40) ═══
  "bagel", "lox", "schmear", "bagel sandwich", "breakfast burrito", "hashbrown", "biscuits and gravy",
  "pancake stack", "waffle house", "ihop", "denny's", "cracker barrel",
  "philly cheesesteak", "po' boy", "hoagie", "sub sandwich", "deli sandwich", "blt", "club sandwich",
  "pulled pork", "brisket", "bbq ribs", "buffalo wings", "boneless wings", "nachos", "loaded fries",
  "mac and cheese", "fried chicken", "chicken tenders",
  "burrito bowl", "rice bowl", "poke bowl", "acai bowl", "smoothie bowl",
  "cobb salad", "caesar salad", "kale salad", "ranch dressing", "blue cheese dressing",

  // ═══ 美式咖啡 / 饮品 (25) ═══
  "latte", "cappuccino", "espresso", "americano", "cold brew", "iced coffee", "drip coffee",
  "frappuccino", "macchiato", "matcha latte", "chai latte",
  "oat milk", "almond milk", "soy milk", "coconut milk", "lactose-free", "sugar-free", "decaf",
  "extra shot", "to-go cup", "reusable cup", "tumbler",
  "happy hour drinks", "craft beer", "cocktail",

  // ═══ 美式连锁 / 品牌 (35) ═══
  "in n out", "chipotle", "panda express", "panera", "chick-fil-a", "dunkin", "starbucks",
  "mcdonalds", "burger king", "taco bell", "wendys", "popeyes", "kfc", "raising canes",
  "five guys", "shake shack", "jersey mikes", "jimmy johns", "subway", "domino's", "papa johns",
  "lululemon", "athleta", "patagonia", "north face", "uggs", "crocs", "hoka",
  "allbirds", "vans", "nike", "adidas", "new balance", "under armour", "champion",

  // ═══ 美式日用品 (35) ═══
  "ziplock bag", "saran wrap", "aluminum foil", "parchment paper", "dish soap",
  "laundry detergent", "fabric softener", "dryer sheet", "bleach",
  "antibacterial wipes", "hand sanitizer", "kleenex", "q-tip", "band-aid", "neosporin",
  "ibuprofen", "tylenol", "advil", "aleve", "allegra", "claritin", "benadryl", "melatonin",
  "vitamin d", "fish oil", "probiotics", "tums", "pepto bismol",
  "thermostat", "smoke detector", "carbon monoxide detector", "water heater",
  "hvac", "heat pump", "garbage disposal",

  // ═══ 共享经济 / 出行 (15) ═══
  "uber pool", "lyft line", "airbnb", "vrbo", "getaround", "turo", "zipcar",
  "lime scooter", "bird scooter", "citi bike", "ride share", "rideshare driver",
  "surge pricing", "wait time", "drop-off",

  // ═══ 宠物 (15) ═══
  "dog park", "dog walker", "doggy daycare", "pet sitter", "vet", "vet bill", "pet insurance",
  "kibble", "treats", "leash", "harness", "microchip", "neuter", "spay", "adoption",

  // ═══ 买房 / 物业 (15) ═══
  "open house", "listing", "mls", "offer", "counteroffer", "contingency", "home inspection",
  "appraisal", "title insurance", "fixer-upper", "move-in ready", "school zone", "comp",
  "fsbo", "as is",

  // ═══ 邮政 / 快递 (15) ═══
  "usps", "fedex", "ups", "dhl", "priority mail", "ground shipping", "overnight",
  "signature on delivery", "hold for pickup", "po box", "package theft", "ring camera",
  "doorbell camera", "porch pirate", "amazon locker",
];

// 去重 + 长度校验（≤30 字符）+ 字符集校验（lowercase/空格/连字符/撇号）
var seen = new Set();
var US_LIFE_1000 = US_LIFE_1000_RAW
  .map(function(w) { return String(w).trim().toLowerCase(); })
  .filter(function(w) {
    if (!w) return false;
    if (w.length > 30) return false;
    if (!/^[a-z][a-z\s'\-0-9]*$/.test(w)) return false;
    if (seen.has(w)) return false;
    seen.add(w);
    return true;
  })
  .join("\n");

export { US_LIFE_1000 };
export default US_LIFE_1000;
