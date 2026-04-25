/* ─── Know U. Learning — 自定义确认弹窗 ───
   替代 native confirm()，避免移动浏览器弹窗拦截导致的静默失败。

   用法：
     var ok = await confirmAsync({ title:"...", body:"...", variant:"danger" });
     if (!ok) return;

   variant: "default" (橘色 OK) | "danger" (红色危险) | "primary" (蓝绿色普通)
*/
import { C, FONT, FONT_DISPLAY } from '../lib/theme';

export var ConfirmModal = function(props) {
  var title = props.title || "确认";
  var body = props.body || "";
  var confirmText = props.confirmText || "确认";
  var cancelText = props.cancelText || "取消";
  var variant = props.variant || "default";
  var onConfirm = props.onConfirm;
  var onCancel = props.onCancel;

  // 配色：危险红 / 普通橘 / 主蓝
  var palette = {
    danger:  { bg: C.red,    bgHover: "#c93030", emoji: "⚠️" },
    primary: { bg: C.teal,   bgHover: "#2a7a72", emoji: "✓" },
    default: { bg: C.accent, bgHover: "#a8541f", emoji: "" },
  };
  var p = palette[variant] || palette.default;

  return (
    <div
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        fontFamily: FONT,
        animation: "fadeIn 0.2s ease-out",
      }}
      onClick={onCancel}
    >
      <div
        onClick={function(e){ e.stopPropagation(); }}
        style={{
          background: C.card,
          borderRadius: 16,
          maxWidth: 380, width: "100%",
          padding: "22px 22px 18px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          border: "1px solid " + C.border,
          animation: "modalPop 0.22s ease-out",
        }}
      >
        {/* 标题 */}
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
          {p.emoji && <span style={{ fontSize: 22 }}>{p.emoji}</span>}
          <h3 style={{
            fontSize: 17, fontWeight: 800,
            margin: 0, color: C.text,
            fontFamily: FONT_DISPLAY,
            letterSpacing: "-0.01em",
            flex: 1,
          }}>{title}</h3>
        </div>
        {/* 内容 */}
        {body && (
          <div style={{
            fontSize: 14, lineHeight: 1.7, color: C.textSec,
            whiteSpace: "pre-wrap", marginBottom: 18,
          }}>{body}</div>
        )}
        {/* 按钮组 */}
        <div style={{ display:"flex", gap:10, justifyContent:"flex-end" }}>
          <button
            onClick={onCancel}
            style={{
              flex: "0 0 auto",
              padding: "10px 18px",
              background: "transparent",
              color: C.textSec,
              border: "1.5px solid " + C.border,
              borderRadius: 10,
              fontSize: 14, fontWeight: 600,
              fontFamily: FONT,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >{cancelText}</button>
          <button
            onClick={onConfirm}
            autoFocus
            style={{
              flex: "0 0 auto",
              padding: "10px 20px",
              background: p.bg,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              fontSize: 14, fontWeight: 700,
              fontFamily: FONT,
              cursor: "pointer",
              boxShadow: "0 4px 12px " + p.bg + "55",
              transition: "all 0.15s",
            }}
            onMouseEnter={function(e){ e.currentTarget.style.background = p.bgHover; }}
            onMouseLeave={function(e){ e.currentTarget.style.background = p.bg; }}
          >{confirmText}</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
