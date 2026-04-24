/* ─── Know U. Learning — 宠物 SVG 头像系统 ───
   4 个进化阶段（kitten/cat/tiger/lion）× 5 种心情（celebrate/happy/neutral/hungry/sad）
   全 SVG 矢量绘制，主题色统一，可缩放至任意尺寸
*/

/* ─── 4 个种类的色彩主题 ─── */
var SPECIES_THEME = {
  kitten: { body: "#ffd9b8", innerEar: "#ffb6b9", nose: "#ff8a95", stripe: null,      mane: null,      blush: "#ffc4b0", line: "#5a3826" },
  cat:    { body: "#f8a55c", innerEar: "#ff8d8d", nose: "#5a3826", stripe: "#d97e3a", mane: null,      blush: "#ff9b8a", line: "#3a2814" },
  tiger:  { body: "#fdb849", innerEar: "#ff6b6b", nose: "#3a2814", stripe: "#3a2814", mane: null,      blush: "#ff8a9b", line: "#3a2814" },
  lion:   { body: "#f4a72b", innerEar: "#e88a85", nose: "#3a2814", stripe: null,      mane: "#c4751b", blush: "#ff9b85", line: "#3a2814" },
};

/* ─── mood label ↔ key 映射（兼容 getPetMood 返回的中文 label） ─── */
export var moodFromLabel = function(label) {
  if (!label) return "neutral";
  if (label === "开心") return "happy";
  if (label === "饿了") return "hungry";
  if (label === "难过") return "sad";
  if (label === "庆祝" || label === "celebrate") return "celebrate";
  if (label === "还没醒来") return "sleeping";
  return "neutral";
};

/* ─── 主组件 ─── */
export var PetAvatar = function(props) {
  var species = props.species || "kitten";
  var mood = props.mood || "neutral";
  var size = props.size || 80;
  var animate = props.animate !== false; // 默认带动画
  var t = SPECIES_THEME[species] || SPECIES_THEME.kitten;

  // 根据 mood 决定动画
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
        {/* ─── 鬃毛（仅 lion） ─── */}
        {t.mane && (
          <g>
            <circle cx="50" cy="55" r="42" fill={t.mane} />
            {/* 鬃毛尖角点缀 */}
            {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map(function(deg, i) {
              var rad = (deg * Math.PI) / 180;
              var cx = 50 + 42 * Math.cos(rad);
              var cy = 55 + 42 * Math.sin(rad);
              return <circle key={i} cx={cx} cy={cy} r="6" fill={t.mane} />;
            })}
          </g>
        )}

        {/* ─── 头部主体（圆头） ─── */}
        <circle cx="50" cy="55" r="30" fill={t.body} />

        {/* ─── 耳朵 ─── */}
        <path d={"M " + (mood === "sad" ? "26 46 L 30 30 L 38 42" : "25 40 L 30 22 L 38 38") + " Z"} fill={t.body} stroke={t.line} strokeWidth="0.5" />
        <path d={"M " + (mood === "sad" ? "74 46 L 70 30 L 62 42" : "75 40 L 70 22 L 62 38") + " Z"} fill={t.body} stroke={t.line} strokeWidth="0.5" />
        {/* 内耳（粉） */}
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

        {/* ═══ 心情：celebrate（学习好开心，星星眼大笑） ═══ */}
        {mood === "celebrate" && (
          <g>
            {/* 星星眼 */}
            <Star cx={38} cy={50} size={5} fill="#ffd700" />
            <Star cx={62} cy={50} size={5} fill="#ffd700" />
            {/* 大笑嘴 */}
            <path d="M 40 60 Q 50 72 60 60 Z" fill="#ff6b6b" stroke={t.line} strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M 40 60 Q 50 64 60 60" fill="#fff" />
            {/* 鼻子 */}
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            {/* 腮红 */}
            <ellipse cx="30" cy="60" rx="4" ry="2.5" fill={t.blush} opacity="0.65" />
            <ellipse cx="70" cy="60" rx="4" ry="2.5" fill={t.blush} opacity="0.65" />
            {/* 飘动星星 */}
            <Star cx={14} cy={20} size={3.5} fill="#ffc107" />
            <Star cx={86} cy={22} size={3} fill="#ffc107" />
            <Star cx={20} cy={88} size={3} fill="#ffc107" />
            <Star cx={82} cy={86} size={3.5} fill="#ffc107" />
          </g>
        )}

        {/* ═══ 心情：happy（开心，闭眼笑 + 腮红 + 爱心） ═══ */}
        {mood === "happy" && (
          <g>
            {/* 闭眼笑 ⌒⌒ */}
            <path d="M 35 50 Q 40 46 45 50" stroke={t.line} strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 55 50 Q 60 46 65 50" stroke={t.line} strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* 鼻子 */}
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            {/* ω 嘴 */}
            <path d="M 44 62 Q 47 66 50 62 Q 53 66 56 62" stroke={t.line} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* 腮红 */}
            <ellipse cx="30" cy="60" rx="4.5" ry="3" fill={t.blush} opacity="0.7" />
            <ellipse cx="70" cy="60" rx="4.5" ry="3" fill={t.blush} opacity="0.7" />
            {/* 爱心 */}
            <Heart cx={88} cy={28} size={5} />
          </g>
        )}

        {/* ═══ 心情：neutral（一般） ═══ */}
        {mood === "neutral" && (
          <g>
            {/* 圆点眼 */}
            <circle cx="40" cy="51" r="2.5" fill={t.line} />
            <circle cx="60" cy="51" r="2.5" fill={t.line} />
            <circle cx="40.8" cy="50" r="0.8" fill="#fff" />
            <circle cx="60.8" cy="50" r="0.8" fill="#fff" />
            {/* 鼻子 */}
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            {/* 一字嘴 */}
            <path d="M 44 64 Q 50 66 56 64" stroke={t.line} strokeWidth="1.4" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* ═══ 心情：hungry（饿了，圆睁眼 + 张嘴 + 食物） ═══ */}
        {mood === "hungry" && (
          <g>
            {/* 圆睁眼（瞳孔放大） */}
            <circle cx="40" cy="51" r="3.5" fill="#fff" stroke={t.line} strokeWidth="1.2" />
            <circle cx="40" cy="51" r="2.2" fill={t.line} />
            <circle cx="40.8" cy="50" r="0.7" fill="#fff" />
            <circle cx="60" cy="51" r="3.5" fill="#fff" stroke={t.line} strokeWidth="1.2" />
            <circle cx="60" cy="51" r="2.2" fill={t.line} />
            <circle cx="60.8" cy="50" r="0.7" fill="#fff" />
            {/* 鼻子 */}
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            {/* 张开嘴（O 形） */}
            <ellipse cx="50" cy="65" rx="4" ry="3.5" fill="#ff6b6b" stroke={t.line} strokeWidth="1.2" />
            {/* 舌头 */}
            <ellipse cx="50" cy="67" rx="2.5" ry="1.8" fill="#ff8fa3" />
            {/* 口水滴 */}
            <ellipse cx="56" cy="72" rx="1.2" ry="2" fill="#7dd3fc" opacity="0.85">
              <animate attributeName="cy" values="70;76;70" dur="1.5s" repeatCount="indefinite" />
            </ellipse>
            {/* 旁边肉骨头 emoji（用 SVG 简化） */}
            <g transform="translate(82 60)">
              <ellipse cx="0" cy="0" rx="6" ry="3" fill="#d4a373" stroke={t.line} strokeWidth="0.8" />
              <circle cx="-5" cy="-2" r="2" fill="#d4a373" stroke={t.line} strokeWidth="0.6" />
              <circle cx="-5" cy="2" r="2" fill="#d4a373" stroke={t.line} strokeWidth="0.6" />
              <circle cx="5" cy="-2" r="2" fill="#d4a373" stroke={t.line} strokeWidth="0.6" />
              <circle cx="5" cy="2" r="2" fill="#d4a373" stroke={t.line} strokeWidth="0.6" />
            </g>
          </g>
        )}

        {/* ═══ 心情：sad（难过，闭眼+大泪+耷拉嘴） ═══ */}
        {mood === "sad" && (
          <g>
            {/* 闭眼（向下弯） */}
            <path d="M 35 53 Q 40 56 45 53" stroke={t.line} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <path d="M 55 53 Q 60 56 65 53" stroke={t.line} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            {/* 鼻子 */}
            <path d="M 47 58 Q 50 60 53 58 Q 50 62 47 58 Z" fill={t.nose} />
            {/* 倒 ω 嘴 */}
            <path d="M 43 68 Q 47 64 50 68 Q 53 64 57 68" stroke={t.line} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            {/* 大泪滴 */}
            <path d="M 33 56 Q 30 64 32 68 Q 35 71 37 68 Q 39 64 33 56 Z" fill="#7dd3fc" stroke="#5d9cec" strokeWidth="0.8">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M 67 56 Q 64 64 66 68 Q 69 71 71 68 Q 73 64 67 56 Z" fill="#7dd3fc" stroke="#5d9cec" strokeWidth="0.8">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </path>
          </g>
        )}

        {/* ═══ 心情：sleeping（还没醒来） ═══ */}
        {mood === "sleeping" && (
          <g>
            {/* 闭眼 z z */}
            <path d="M 35 51 Q 40 54 45 51" stroke={t.line} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <path d="M 55 51 Q 60 54 65 51" stroke={t.line} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <path d="M 47 56 Q 50 58 53 56 Q 50 60 47 56 Z" fill={t.nose} />
            <path d="M 47 64 Q 50 66 53 64" stroke={t.line} strokeWidth="1.4" fill="none" strokeLinecap="round" />
            {/* zzz */}
            <text x="78" y="32" fontSize="9" fill={t.line} fontWeight="700" fontStyle="italic">z</text>
            <text x="84" y="26" fontSize="7" fill={t.line} fontWeight="700" fontStyle="italic">z</text>
            <text x="89" y="20" fontSize="5" fill={t.line} fontWeight="700" fontStyle="italic">z</text>
          </g>
        )}
      </svg>
    </div>
  );
};

/* ─── 辅助：星星形状 ─── */
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
