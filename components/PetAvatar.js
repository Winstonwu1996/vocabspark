/* ─── Know U. Learning — 宠物 SVG 头像系统 ───
   4 个进化阶段（kitten/cat/tiger/lion）× 6 种心情 × 8 件可装备配饰
   全 SVG 矢量绘制，主题色统一，可缩放至任意尺寸
*/

/* ─── 4 个种类的色彩主题 ─── */
var SPECIES_THEME = {
  kitten: { body: "#ffd9b8", innerEar: "#ffb6b9", nose: "#ff8a95", stripe: null,      mane: null,      blush: "#ffc4b0", line: "#5a3826" },
  cat:    { body: "#f8a55c", innerEar: "#ff8d8d", nose: "#5a3826", stripe: "#d97e3a", mane: null,      blush: "#ff9b8a", line: "#3a2814" },
  tiger:  { body: "#fdb849", innerEar: "#ff6b6b", nose: "#3a2814", stripe: "#3a2814", mane: null,      blush: "#ff8a9b", line: "#3a2814" },
  lion:   { body: "#f4a72b", innerEar: "#e88a85", nose: "#3a2814", stripe: null,      mane: "#c4751b", blush: "#ff9b85", line: "#3a2814" },
};

/* ─── mood label ↔ key 映射 ─── */
export var moodFromLabel = function(label) {
  if (!label) return "neutral";
  if (label === "开心") return "happy";
  if (label === "饿了") return "hungry";
  if (label === "难过") return "sad";
  if (label === "庆祝" || label === "celebrate") return "celebrate";
  if (label === "还没醒来") return "sleeping";
  return "neutral";
};

/* ─── 配饰商店目录 ─── 男女均衡 + 中性 */
export var ACCESSORY_CATALOG = [
  // 头饰（hat 槽位）
  { id: "bow",        name: "蝴蝶结",   slot: "hat",   price: 50,  gender: "f", desc: "可爱粉色蝴蝶结" },
  { id: "cap",        name: "棒球帽",   slot: "hat",   price: 50,  gender: "m", desc: "潮酷棒球帽" },
  { id: "crown",      name: "皇冠",     slot: "hat",   price: 100, gender: "n", desc: "尊贵金色皇冠" },
  { id: "flower",     name: "小花",     slot: "hat",   price: 60,  gender: "f", desc: "梦幻粉色小花" },
  // 脸饰（face 槽位）
  { id: "sunglasses", name: "墨镜",     slot: "face",  price: 80,  gender: "m", desc: "酷炫黑色墨镜" },
  // 翅膀（wings 槽位）
  { id: "rainbow",    name: "彩虹翅膀", slot: "wings", price: 150, gender: "f", desc: "梦幻彩虹翅膀" },
  { id: "dragon",     name: "龙翅膀",   slot: "wings", price: 200, gender: "m", desc: "霸气黑龙翅膀" },
  { id: "fire",       name: "火焰翅膀", slot: "wings", price: 180, gender: "n", desc: "炽热火焰翅膀" },
];

export var getAccessory = function(id) {
  for (var i = 0; i < ACCESSORY_CATALOG.length; i++) {
    if (ACCESSORY_CATALOG[i].id === id) return ACCESSORY_CATALOG[i];
  }
  return null;
};

/* ─── 单件配饰 SVG 渲染 ─── */
var renderAccessory = function(id, line) {
  if (id === "bow") return (
    <g key="bow" transform="translate(50 22)">
      <path d="M 0 0 L -11 -7 L -11 7 Z" fill="#ff6b9d" stroke={line} strokeWidth="0.8" />
      <path d="M 0 0 L 11 -7 L 11 7 Z" fill="#ff6b9d" stroke={line} strokeWidth="0.8" />
      <circle cx="0" cy="0" r="3.5" fill="#ff4d7d" stroke={line} strokeWidth="0.8" />
      <ellipse cx="-5" cy="-2" rx="2" ry="0.8" fill="#fff" opacity="0.5" />
      <ellipse cx="5" cy="-2" rx="2" ry="0.8" fill="#fff" opacity="0.5" />
    </g>
  );
  if (id === "cap") return (
    <g key="cap">
      <path d="M 26 28 Q 50 6 74 28 L 74 33 L 26 33 Z" fill="#3066be" stroke={line} strokeWidth="0.8" />
      <path d="M 26 33 L 80 33 L 78 39 Q 50 44 30 39 Z" fill="#3066be" stroke={line} strokeWidth="0.8" />
      <circle cx="50" cy="22" r="2.2" fill="#fff" stroke={line} strokeWidth="0.5" />
      <text x="50" y="25" textAnchor="middle" fontSize="5" fontWeight="800" fill="#3066be">U</text>
    </g>
  );
  if (id === "crown") return (
    <g key="crown">
      <path d="M 28 24 L 32 14 L 38 22 L 50 10 L 62 22 L 68 14 L 72 24 L 72 30 L 28 30 Z" fill="#ffd700" stroke={line} strokeWidth="1" strokeLinejoin="round" />
      <circle cx="38" cy="24" r="1.5" fill="#ff6b6b" />
      <circle cx="50" cy="24" r="2" fill="#7c3aed" />
      <circle cx="62" cy="24" r="1.5" fill="#22a06b" />
      <line x1="32" y1="28" x2="68" y2="28" stroke={line} strokeWidth="0.6" opacity="0.5" />
    </g>
  );
  if (id === "flower") return (
    <g key="flower" transform="translate(82 28)">
      <circle cx="0" cy="-4.5" r="3.2" fill="#ffb3d9" stroke={line} strokeWidth="0.4" />
      <circle cx="4.5" cy="0" r="3.2" fill="#ffb3d9" stroke={line} strokeWidth="0.4" />
      <circle cx="0" cy="4.5" r="3.2" fill="#ffb3d9" stroke={line} strokeWidth="0.4" />
      <circle cx="-4.5" cy="0" r="3.2" fill="#ffb3d9" stroke={line} strokeWidth="0.4" />
      <circle cx="0" cy="0" r="2" fill="#ffd700" stroke={line} strokeWidth="0.4" />
    </g>
  );
  if (id === "sunglasses") return (
    <g key="sunglasses" stroke={line} strokeWidth="0.8">
      <ellipse cx="40" cy="51" rx="7" ry="5" fill="#1a1a2e" />
      <ellipse cx="60" cy="51" rx="7" ry="5" fill="#1a1a2e" />
      <line x1="47" y1="51" x2="53" y2="51" strokeWidth="1.2" />
      <ellipse cx="37" cy="49" rx="2.2" ry="1" fill="#fff" opacity="0.4" />
      <ellipse cx="57" cy="49" rx="2.2" ry="1" fill="#fff" opacity="0.4" />
    </g>
  );
  if (id === "rainbow") return (
    <g key="rainbow">
      <defs>
        <linearGradient id="rainbowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="25%" stopColor="#ffd93d" />
          <stop offset="50%" stopColor="#6bcb77" />
          <stop offset="75%" stopColor="#4d96ff" />
          <stop offset="100%" stopColor="#c46bf0" />
        </linearGradient>
      </defs>
      <ellipse cx="14" cy="55" rx="14" ry="22" fill="url(#rainbowGrad)" stroke={line} strokeWidth="0.6" opacity="0.92" transform="rotate(-18 14 55)" />
      <ellipse cx="86" cy="55" rx="14" ry="22" fill="url(#rainbowGrad)" stroke={line} strokeWidth="0.6" opacity="0.92" transform="rotate(18 86 55) scale(-1 1) translate(-172 0)" />
    </g>
  );
  if (id === "dragon") return (
    <g key="dragon">
      <path d="M 22 50 L 4 30 L 10 38 L 2 32 L 8 46 L -2 42 L 8 56 L 0 58 L 14 62 L 6 66 L 20 66 L 16 72 L 24 70 L 24 60 Z" fill="#3a2447" stroke={line} strokeWidth="0.8" strokeLinejoin="round" />
      <path d="M 78 50 L 96 30 L 90 38 L 98 32 L 92 46 L 102 42 L 92 56 L 100 58 L 86 62 L 94 66 L 80 66 L 84 72 L 76 70 L 76 60 Z" fill="#3a2447" stroke={line} strokeWidth="0.8" strokeLinejoin="round" />
      {/* 翅膀脉络 */}
      <line x1="22" y1="52" x2="6" y2="38" stroke="#1a0f2a" strokeWidth="0.5" opacity="0.6" />
      <line x1="22" y1="58" x2="4" y2="56" stroke="#1a0f2a" strokeWidth="0.5" opacity="0.6" />
      <line x1="78" y1="52" x2="94" y2="38" stroke="#1a0f2a" strokeWidth="0.5" opacity="0.6" />
      <line x1="78" y1="58" x2="96" y2="56" stroke="#1a0f2a" strokeWidth="0.5" opacity="0.6" />
    </g>
  );
  if (id === "fire") return (
    <g key="fire">
      <defs>
        <linearGradient id="fireGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff3d00" />
          <stop offset="40%" stopColor="#ff9500" />
          <stop offset="100%" stopColor="#ffd900" />
        </linearGradient>
      </defs>
      <path d="M 22 48 Q 0 50 6 28 Q 12 38 12 48 Q 6 48 4 60 Q 14 54 16 66 Q 22 58 22 48 Z" fill="url(#fireGrad)" stroke="#cc3300" strokeWidth="0.6" />
      <path d="M 78 48 Q 100 50 94 28 Q 88 38 88 48 Q 94 48 96 60 Q 86 54 84 66 Q 78 58 78 48 Z" fill="url(#fireGrad)" stroke="#cc3300" strokeWidth="0.6" />
      {/* 内层小火苗 */}
      <path d="M 14 48 Q 6 48 10 38 Q 14 42 16 48 Z" fill="#ffeb3b" opacity="0.7" />
      <path d="M 86 48 Q 94 48 90 38 Q 86 42 84 48 Z" fill="#ffeb3b" opacity="0.7" />
    </g>
  );
  return null;
};

/* ─── 主组件 ─── */
export var PetAvatar = function(props) {
  var species = props.species || "kitten";
  var mood = props.mood || "neutral";
  var size = props.size || 80;
  var animate = props.animate !== false;
  var accessories = props.accessories || {}; // { hat?, face?, wings? }
  var t = SPECIES_THEME[species] || SPECIES_THEME.kitten;

  var anim = "none";
  if (animate) {
    if (mood === "celebrate") anim = "petWiggle 0.8s ease-in-out infinite";
    else if (mood === "happy") anim = "petBounce 2s ease-in-out infinite";
    else if (mood === "hungry") anim = "petShake 1.2s ease-in-out infinite";
    else if (mood === "sad") anim = "petWobble 3s ease-in-out infinite";
  }

  return (
    <div style={{ width: size, height: size, display: "inline-block", position: "relative", animation: anim }}>
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: "block", overflow: "visible" }}>
        {/* ─── 翅膀（最底层背景） ─── */}
        {accessories.wings && renderAccessory(accessories.wings, t.line)}

        {/* ─── 鬃毛（仅 lion） ─── */}
        {t.mane && (
          <g>
            <circle cx="50" cy="55" r="42" fill={t.mane} />
            {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map(function(deg, i) {
              var rad = (deg * Math.PI) / 180;
              var cx = 50 + 42 * Math.cos(rad);
              var cy = 55 + 42 * Math.sin(rad);
              return <circle key={i} cx={cx} cy={cy} r="6" fill={t.mane} />;
            })}
          </g>
        )}

        {/* ─── 头部主体 ─── */}
        <circle cx="50" cy="55" r="30" fill={t.body} />

        {/* ─── 耳朵 ─── */}
        <path d={"M " + (mood === "sad" ? "26 46 L 30 30 L 38 42" : "25 40 L 30 22 L 38 38") + " Z"} fill={t.body} stroke={t.line} strokeWidth="0.5" />
        <path d={"M " + (mood === "sad" ? "74 46 L 70 30 L 62 42" : "75 40 L 70 22 L 62 38") + " Z"} fill={t.body} stroke={t.line} strokeWidth="0.5" />
        <path d={"M " + (mood === "sad" ? "28 44 L 30 33 L 35 40" : "27 38 L 30 26 L 35 36") + " Z"} fill={t.innerEar} />
        <path d={"M " + (mood === "sad" ? "72 44 L 70 33 L 65 40" : "73 38 L 70 26 L 65 36") + " Z"} fill={t.innerEar} />

        {/* ─── 老虎条纹 ─── */}
        {species === "tiger" && (
          <g stroke={t.stripe} strokeWidth="1.6" fill="none" strokeLinecap="round">
            <path d="M 25 50 Q 28 54 25 58" />
            <path d="M 75 50 Q 72 54 75 58" />
            <path d="M 50 28 L 47 35" />
            <path d="M 50 28 L 53 35" />
            <path d="M 28 70 Q 33 72 31 76" />
            <path d="M 72 70 Q 67 72 69 76" />
          </g>
        )}

        {/* ─── 中猫的浅色斑点 ─── */}
        {species === "cat" && t.stripe && (
          <g fill={t.stripe} opacity="0.5">
            <ellipse cx="30" cy="62" rx="3" ry="1.5" />
            <ellipse cx="70" cy="62" rx="3" ry="1.5" />
            <ellipse cx="50" cy="32" rx="4" ry="1.5" />
          </g>
        )}

        {/* ═══ 心情：celebrate ═══ */}
        {mood === "celebrate" && (
          <g>
            <Star cx={38} cy={50} size={5} fill="#ffd700" />
            <Star cx={62} cy={50} size={5} fill="#ffd700" />
            <path d="M 40 60 Q 50 72 60 60 Z" fill="#ff6b6b" stroke={t.line} strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M 40 60 Q 50 64 60 60" fill="#fff" />
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            <ellipse cx="30" cy="60" rx="4" ry="2.5" fill={t.blush} opacity="0.65" />
            <ellipse cx="70" cy="60" rx="4" ry="2.5" fill={t.blush} opacity="0.65" />
            <Star cx={14} cy={20} size={3.5} fill="#ffc107" />
            <Star cx={86} cy={22} size={3} fill="#ffc107" />
            <Star cx={20} cy={88} size={3} fill="#ffc107" />
            <Star cx={82} cy={86} size={3.5} fill="#ffc107" />
          </g>
        )}

        {/* ═══ 心情：happy ═══ */}
        {mood === "happy" && (
          <g>
            <path d="M 35 50 Q 40 46 45 50" stroke={t.line} strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 55 50 Q 60 46 65 50" stroke={t.line} strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            <path d="M 44 62 Q 47 66 50 62 Q 53 66 56 62" stroke={t.line} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="30" cy="60" rx="4.5" ry="3" fill={t.blush} opacity="0.7" />
            <ellipse cx="70" cy="60" rx="4.5" ry="3" fill={t.blush} opacity="0.7" />
            <Heart cx={88} cy={28} size={5} />
          </g>
        )}

        {/* ═══ 心情：neutral ═══ */}
        {mood === "neutral" && (
          <g>
            <circle cx="40" cy="51" r="2.5" fill={t.line} />
            <circle cx="60" cy="51" r="2.5" fill={t.line} />
            <circle cx="40.8" cy="50" r="0.8" fill="#fff" />
            <circle cx="60.8" cy="50" r="0.8" fill="#fff" />
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            <path d="M 44 64 Q 50 66 56 64" stroke={t.line} strokeWidth="1.4" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* ═══ 心情：hungry ═══ */}
        {mood === "hungry" && (
          <g>
            <circle cx="40" cy="51" r="3.5" fill="#fff" stroke={t.line} strokeWidth="1.2" />
            <circle cx="40" cy="51" r="2.2" fill={t.line} />
            <circle cx="40.8" cy="50" r="0.7" fill="#fff" />
            <circle cx="60" cy="51" r="3.5" fill="#fff" stroke={t.line} strokeWidth="1.2" />
            <circle cx="60" cy="51" r="2.2" fill={t.line} />
            <circle cx="60.8" cy="50" r="0.7" fill="#fff" />
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            <ellipse cx="50" cy="65" rx="4" ry="3.5" fill="#ff6b6b" stroke={t.line} strokeWidth="1.2" />
            <ellipse cx="50" cy="67" rx="2.5" ry="1.8" fill="#ff8fa3" />
            <ellipse cx="56" cy="72" rx="1.2" ry="2" fill="#7dd3fc" opacity="0.85">
              <animate attributeName="cy" values="70;76;70" dur="1.5s" repeatCount="indefinite" />
            </ellipse>
            <g transform="translate(82 60)">
              <ellipse cx="0" cy="0" rx="6" ry="3" fill="#d4a373" stroke={t.line} strokeWidth="0.8" />
              <circle cx="-5" cy="-2" r="2" fill="#d4a373" stroke={t.line} strokeWidth="0.6" />
              <circle cx="-5" cy="2" r="2" fill="#d4a373" stroke={t.line} strokeWidth="0.6" />
              <circle cx="5" cy="-2" r="2" fill="#d4a373" stroke={t.line} strokeWidth="0.6" />
              <circle cx="5" cy="2" r="2" fill="#d4a373" stroke={t.line} strokeWidth="0.6" />
            </g>
          </g>
        )}

        {/* ═══ 心情：sad ═══ */}
        {mood === "sad" && (
          <g>
            <path d="M 35 53 Q 40 56 45 53" stroke={t.line} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <path d="M 55 53 Q 60 56 65 53" stroke={t.line} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <path d="M 47 58 Q 50 60 53 58 Q 50 62 47 58 Z" fill={t.nose} />
            <path d="M 43 68 Q 47 64 50 68 Q 53 64 57 68" stroke={t.line} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 33 56 Q 30 64 32 68 Q 35 71 37 68 Q 39 64 33 56 Z" fill="#7dd3fc" stroke="#5d9cec" strokeWidth="0.8">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M 67 56 Q 64 64 66 68 Q 69 71 71 68 Q 73 64 67 56 Z" fill="#7dd3fc" stroke="#5d9cec" strokeWidth="0.8">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </path>
          </g>
        )}

        {/* ═══ 心情：sleeping ═══ */}
        {mood === "sleeping" && (
          <g>
            <path d="M 35 51 Q 40 54 45 51" stroke={t.line} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <path d="M 55 51 Q 60 54 65 51" stroke={t.line} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            <path d="M 47 64 Q 50 66 53 64" stroke={t.line} strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <text x="78" y="32" fontSize="9" fill={t.line} fontWeight="700" fontStyle="italic">z</text>
            <text x="84" y="26" fontSize="7" fill={t.line} fontWeight="700" fontStyle="italic">z</text>
            <text x="89" y="20" fontSize="5" fill={t.line} fontWeight="700" fontStyle="italic">z</text>
          </g>
        )}

        {/* ─── 头饰（盖在头顶） ─── */}
        {accessories.hat && renderAccessory(accessories.hat, t.line)}

        {/* ─── 脸饰（盖在眼睛上，最高层） ─── */}
        {accessories.face && renderAccessory(accessories.face, t.line)}
      </svg>
    </div>
  );
};

/* ─── 辅助：星星 ─── */
var Star = function(props) {
  var cx = props.cx, cy = props.cy, size = props.size || 5, fill = props.fill || "#ffd700";
  var pts = [];
  for (var i = 0; i < 10; i++) {
    var r = i % 2 === 0 ? size : size * 0.4;
    var a = (i * 36 - 90) * Math.PI / 180;
    pts.push((cx + r * Math.cos(a)).toFixed(1) + "," + (cy + r * Math.sin(a)).toFixed(1));
  }
  return <polygon points={pts.join(" ")} fill={fill} stroke="#e6a700" strokeWidth="0.5" />;
};

/* ─── 辅助：爱心 ─── */
var Heart = function(props) {
  var cx = props.cx, cy = props.cy, size = props.size || 5;
  var s = size;
  return (
    <path
      d={"M " + cx + " " + (cy + s * 0.3) +
         " C " + (cx - s) + " " + (cy - s * 0.5) + ", " + (cx - s) + " " + (cy - s) + ", " + cx + " " + (cy - s * 0.4) +
         " C " + (cx + s) + " " + (cy - s) + ", " + (cx + s) + " " + (cy - s * 0.5) + ", " + cx + " " + (cy + s * 0.3) + " Z"}
      fill="#ff6b6b"
      stroke="#e53e3e"
      strokeWidth="0.5"
    >
      <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
    </path>
  );
};

export default PetAvatar;
