/* ─── Know U. Learning — History 会员升级弹窗 (Step 6) ───
 *
 * 规划: docs/HISTORY_MEMBERSHIP_PLAN.md v1.2 §7 (三维对照表) + §8 (锁课 UI)
 *
 * 触发场景 (caller 传 reason 决定文案):
 *   - 'locked-course'  点了超出 tier 的锁课 (dismissable)
 *   - 'lens-quota'     当天视角配额用完 (dismissable)
 *   - 'sidekick-quota' 当天 Sidekick 配额用完 (dismissable)
 *   - 'tier-lost'      active → 降级 (退费/过期), non-dismissable (规划 §7)
 *
 * 纯展示组件: 不查 tier / 不碰 sync / 不接路由跳转逻辑 (除 /plan 链接)。
 * 课程数用 caller 传入的 getAccessibleTopicCounts 真值, 不在组件里硬编码。
 *
 * Step 6: 纯组件, 不接任何 history 路由, 0 runtime 风险。Step 4 才把它接进
 * CourseBrowser / 单课 mount / LensSelector。
 */
import { C, FONT, FONT_DISPLAY } from '../../lib/theme';

// 三维对照表的列定义 (v1.2 §7 文案模板)
// counts 由 caller 传入 (getAccessibleTopicCounts 真值), 缺省用规划锁定的 51 门数字兜底
var DEFAULT_COUNTS = { guest: 1, free: 8, basic: 41, pro: 51 };

var TIER_LABEL = {
  guest: { name: '游客', price: '' },
  free:  { name: 'Free', price: '免费' },
  basic: { name: 'Basic', price: '$20/月' },
  pro:   { name: 'Pro', price: '$50/月' },
};

// reason → 顶部标题 + 副文案
function headerFor(reason, requiredTier) {
  var tierName = (TIER_LABEL[requiredTier] || {}).name || 'Basic';
  switch (reason) {
    case 'lens-quota':
      return {
        emoji: '🎯',
        title: '今天的视角配额用完了',
        sub: '升级解锁无限视角 — 想学多少角度都行',
      };
    case 'sidekick-quota':
      return {
        emoji: '💬',
        title: '今天问小 U 的次数用完了',
        sub: '升级解锁无限追问 — 随时问小 U',
      };
    case 'tier-lost':
      return {
        emoji: '⏳',
        title: '订阅已结束',
        sub: '之前学过的内容仍可查看,想继续学新内容请重新订阅',
      };
    case 'locked-course':
    default:
      return {
        emoji: '🔒',
        title: '这门课需要 ' + tierName,
        sub: '解锁后立刻开始学习',
      };
  }
}

// 三维对照表行: [标签, guest, free, basic, pro]
function buildMatrix(counts) {
  var c = counts || DEFAULT_COUNTS;
  return [
    { label: '可学课程', guest: String(c.guest), free: String(c.free), basic: String(c.basic), pro: String(c.pro) },
    { label: '每日视角', guest: '1', free: '3', basic: '无限', pro: '无限' },
    { label: '每日问小 U', guest: '5', free: '20', basic: '无限', pro: '无限' },
    { label: '跨设备同步', guest: '✗', free: '✓', basic: '✓', pro: '✓' },
    { label: '考点词进 Vocab', guest: '✗', free: '✗', basic: '✓', pro: '✓ 全套' },
    { label: 'AP / HS 课', guest: '✗', free: '✗', basic: '✗', pro: '✓' },
  ];
}

/**
 * UpgradeModal
 * @param {object} props
 *   - reason: 'locked-course' | 'lens-quota' | 'sidekick-quota' | 'tier-lost'
 *   - requiredTier: 'basic' | 'pro' (locked-course 时高亮目标列)
 *   - counts: { guest, free, basic, pro } 来自 getAccessibleTopicCounts (可选, 缺省兜底)
 *   - onClose: () => void   dismissable 时的关闭回调
 *   - onUpgrade: (tier) => void  点升级按钮 (caller 负责跳 /plan)
 *   - onPreview: () => void  可选 — 「先看 1 分钟预告」(locked-course 时显示)
 */
export var UpgradeModal = function (props) {
  var reason = props.reason || 'locked-course';
  var requiredTier = props.requiredTier || 'basic';
  var counts = props.counts;
  var onClose = props.onClose || function () {};
  var onUpgrade = props.onUpgrade || function () {};
  var onPreview = props.onPreview;

  var dismissable = reason !== 'tier-lost';
  var h = headerFor(reason, requiredTier);
  var matrix = buildMatrix(counts);

  // 高亮列: locked-course 高亮 requiredTier; 配额类高亮 basic (最低无限档); tier-lost 高亮 pro
  var highlightCol = reason === 'tier-lost' ? 'pro'
    : (reason === 'locked-course' ? requiredTier : 'basic');

  var cols = ['guest', 'free', 'basic', 'pro'];

  function cellStyle(col, isHeader) {
    var isHi = col === highlightCol;
    return {
      padding: isHeader ? '8px 6px' : '7px 6px',
      textAlign: 'center',
      fontSize: isHeader ? 12 : 13,
      fontWeight: isHi ? 800 : (isHeader ? 700 : 500),
      color: isHi ? C.accent : (isHeader ? C.text : C.textSec),
      background: isHi ? 'rgba(196,107,48,0.08)' : 'transparent',
      borderRadius: isHi ? 6 : 0,
    };
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
        zIndex: 2100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16, fontFamily: FONT,
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={dismissable ? onClose : undefined}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={h.title}
        onClick={function (e) { e.stopPropagation(); }}
        style={{
          background: C.card,
          borderRadius: 16,
          maxWidth: 'min(440px, calc(100vw - 24px))', width: '100%',
          boxSizing: 'border-box',
          padding: '22px 22px 18px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
          border: '1px solid ' + C.border,
          animation: 'modalPop 0.22s ease-out',
        }}
      >
        {/* 标题 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 24, lineHeight: 1 }}>{h.emoji}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.text, fontFamily: FONT_DISPLAY }}>
              {h.title}
            </div>
            <div style={{ fontSize: 13, color: C.textSec, marginTop: 3, lineHeight: 1.4 }}>
              {h.sub}
            </div>
          </div>
          {dismissable && (
            <button
              onClick={onClose}
              aria-label="关闭"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 20, color: C.textSec, lineHeight: 1, padding: 2,
              }}
            >✕</button>
          )}
        </div>

        {/* 三维对照表 */}
        <div style={{
          marginTop: 14, marginBottom: 16,
          border: '1px solid ' + C.border, borderRadius: 10, overflowX: 'auto', overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid ' + C.border }}>
                <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: C.text }}></th>
                {cols.map(function (col) {
                  var t = TIER_LABEL[col];
                  return (
                    <th key={col} style={cellStyle(col, true)}>
                      <div>{t.name}</div>
                      {t.price && <div style={{ fontSize: 10, fontWeight: 600, color: C.textSec, marginTop: 1 }}>{t.price}</div>}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {matrix.map(function (row, i) {
                return (
                  <tr key={row.label} style={{ borderTop: i === 0 ? 'none' : '1px solid ' + C.border }}>
                    <td style={{ padding: '7px 6px', fontSize: 12, fontWeight: 600, color: C.text, whiteSpace: 'nowrap' }}>{row.label}</td>
                    {cols.map(function (col) {
                      return <td key={col} style={cellStyle(col, false)}>{row[col]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 行动按钮 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button
            onClick={function () { onUpgrade(requiredTier); }}
            style={{
              width: '100%', padding: '12px', borderRadius: 10, border: 'none',
              background: C.accent, color: '#fff', fontSize: 15, fontWeight: 800,
              cursor: 'pointer', fontFamily: FONT,
            }}
          >
            {reason === 'tier-lost' ? '重新订阅 Pro' : '升级 ' + ((TIER_LABEL[requiredTier] || {}).name || 'Basic')}
          </button>

          {/* locked-course: 「先看 1 分钟预告」次级行动 (规划 §7, 不把用户引回选课页) */}
          {reason === 'locked-course' && typeof onPreview === 'function' && (
            <button
              onClick={onPreview}
              style={{
                width: '100%', padding: '10px', borderRadius: 10,
                border: '1px solid ' + C.border, background: 'transparent',
                color: C.text, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: FONT,
              }}
            >
              👀 先看 1 分钟课程预告
            </button>
          )}

          {/* dismissable: 关闭 / tier-lost: 回目录 */}
          {dismissable ? (
            <button
              onClick={onClose}
              style={{
                width: '100%', padding: '8px', borderRadius: 10, border: 'none',
                background: 'transparent', color: C.textSec, fontSize: 13, cursor: 'pointer', fontFamily: FONT,
              }}
            >
              {reason === 'lens-quota' || reason === 'sidekick-quota' ? '明天 0 点重置 · 先去别处看看' : '先看看其它课'}
            </button>
          ) : (
            <button
              onClick={onClose}
              style={{
                width: '100%', padding: '8px', borderRadius: 10, border: 'none',
                background: 'transparent', color: C.textSec, fontSize: 13, cursor: 'pointer', fontFamily: FONT,
              }}
            >
              先回到目录
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
