// ─── history-engine: CourseBrowser / 51 门选课器 ─────────────────────
// 三种 Mode（中国家长付费决策心理 → 优先按学校年级；AP 决战家长走第二 Mode；脉络给深度型）：
//   📚 学校年级    G5 / G6 / G7 / G8 / HS（CA HSS 主对齐，默认 G7 = 内容最强 + 新移民痛点)
//   🎯 AP 考试    AP World U1-U9 / APUSH P1-P9
//   🗺 历史脉络   5 时代桶 + thematic（原 ThroughLineMap）
//
// 同时导出 ThroughLineMap（向后兼容：单课页底部"换一课"折叠区仍用这个名字）。
//
// props: topic（当前课，可空）, onSwitch(topicId), defaultMode?（缺省 'grade'）
import React, { useState, useEffect } from 'react';
import { FONT_DISPLAY } from '../../lib/theme';
import { THROUGH_LINES, TOPIC_REGISTRY, getTopic } from '../../lib/history-topics';
import {
  COURSE_GRADE_MAP, GRADE_META, AP_WORLD_META, APUSH_META,
  getGradeTags,
} from '../../lib/history-grade-map';
import { HC } from './theme';
// Step 4a: paywall flag。⚠️ P0-1 (Codex): 这里**绝不** import membership / useUserTier /
// UpgradeModal — 保证 flag off 时不新增 paywall/membership 引入的任何 runtime:
// 不新增 Supabase auth 初始化、不触发 useUserTier、不调 /api/stripe/check-subscription。
// (注: /history 基线已通过 BrandNavBar → UserCenter 静态 import supabase, 那是既有
//  baseline, 非本次引入; Step 4a 的目标是「不新增 paywall runtime」而非「/history 全局无 supabase」。)
// canAccessTopic / getTopicAccessTier 来自 history-tiers (纯模块, 无 supabase, 安全)。
// paywall wrapper (含 useUserTier) 走本地 loader + import() 懒加载, flag off 时 import() 永不触发。
import { ENABLE_HISTORY_PAYWALL } from '../../lib/history-paywall-flag';
import { canAccessTopic, getTopicAccessTier } from '../../lib/history-tiers';
// 入课路径徽章: 有 atlas view 的课点了先到地图 (/atlas-lab), 否则直达单课页 —— 让用户点之前心里有数。
// (findViewIdByTopicId 是纯配置查找, 无 supabase/membership, 不破坏 flag-off bundle 隔离)
import { findViewIdByTopicId } from '../../lib/atlas-views';

// flag on 时的本地 loader (R2-2 Codex minor): 不用 next/dynamic 的 ssr:false (会让选课区
// SSR + 首屏 client render 短暂空白), 改为先渲染 CourseBrowserBase 不锁版, mount 后
// 懒加载 paywall wrapper, 到位再替换 → flag-on 首屏无空白, 锁标随后补上 (浏览乐观,
// 真 gate 在进课时 Step 4b)。flag off 时此 loader 永不渲染 → import() 永不触发,
// membership/supabase 不进 flag-off bundle (P0-1 隔离不变)。
function CourseBrowserPaywallLoader(props) {
  var [Paywall, setPaywall] = useState(null);
  useEffect(function () {
    var mounted = true;
    import('./CourseBrowserPaywall').then(function (m) {
      if (mounted) setPaywall(function () { return m.CourseBrowserPaywall; });
    }).catch(function () { /* 懒块加载失败 → 维持不锁的 Base, 不崩 */ });
    return function () { mounted = false; };
  }, []);
  // 懒块到位前: 先渲染不锁版 CourseBrowserBase (无空白, props 完整传入)
  if (!Paywall) return <CourseBrowserBase {...props} />;
  return <Paywall {...props} />;
}

var MODE_STORAGE_KEY = 'history-course-browser-mode';

// 课程进度从 localStorage 读取（兼容旧 ThroughLineMap）
function useTopicProgress() {
  var [progress, setProgress] = useState({});
  useEffect(function() {
    if (typeof window === 'undefined') return;
    try {
      var raw = localStorage.getItem('vocabspark_v1');
      var d = raw ? JSON.parse(raw) : null;
      setProgress((d && d.historyData && d.historyData.completedTopics) || {});
    } catch (e) {}
  }, []);
  return progress;
}

// 单张课卡渲染（grade / AP / 脉络三个 Mode 共用）
// Step 4a 可选 paywall props (不传 = 原行为逐字不变):
//   locked       — 此课超出用户 tier (flag on 才会算出 true)
//   lockTier     — 此课所需 tier ('basic' | 'pro'), 锁标右下角显示
//   onLockedClick(topicId) — 点锁课时调 (弹 UpgradeModal), 不走 onSwitch
function CourseCard(opts) {
  var t = opts.topic;
  var done = opts.done;
  var isCurrent = opts.isCurrent;
  var clickable = opts.clickable;
  var onSwitch = opts.onSwitch;
  var leftColor = opts.leftColor || HC.accent;
  var locked = opts.locked; // Step 4a: 仅 flag on + 超 tier 时为 true
  var lockTier = opts.lockTier;
  var onLockedClick = opts.onLockedClick;
  var tags = getGradeTags(t.id);
  var hasMap = !!findViewIdByTopicId(t.id); // 该课是否走 atlas 地图入口
  // 锁课点击走升级弹窗; 否则原 onSwitch 逻辑
  var handleClick = locked
    ? function() { if (onLockedClick) onLockedClick(t.id); }
    : (clickable ? function() { onSwitch(t.id); } : undefined);
  return (
    <div
      onClick={handleClick}
      style={{
        flex: '1 1 220px', minWidth: 200,
        padding: '10px 12px',
        background: done ? 'rgba(34,160,107,0.08)' : (isCurrent ? HC.parchmentHi : HC.parchmentLo),
        borderTop: '1px solid ' + (done ? HC.green : (isCurrent ? leftColor : HC.border)),
        borderRight: '1px solid ' + (done ? HC.green : (isCurrent ? leftColor : HC.border)),
        borderBottom: '1px solid ' + (done ? HC.green : (isCurrent ? leftColor : HC.border)),
        borderLeft: '3px solid ' + (locked ? HC.border : leftColor),
        borderRadius: 8, fontSize: 12, color: HC.text,
        cursor: (locked || clickable) ? 'pointer' : 'default', transition: 'all 0.15s',
        opacity: locked ? 0.62 : 1,
      }}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3}}>
        <strong style={{fontSize: 13, color: HC.ink}}>{t.title.cn}</strong>
        {locked ? <span style={{fontSize: 13}} title={'需要 ' + tierName(lockTier)}>🔒</span> :
         done ? <span style={{color: HC.green, fontSize: 14}}>✓</span> :
         isCurrent ? <span style={{
           fontSize: 9, padding: '1px 6px', background: leftColor, color: '#fff',
           borderRadius: 999, fontWeight: 700, letterSpacing: 1,
         }}>当前</span> : null}
      </div>
      <div style={{fontSize: 11, opacity: 0.78, lineHeight: 1.4}}>
        {t.title.en} · {t.year}
      </div>
      {/* 入课路径徽章 + 双标签 chip:含地图/直接学 · G7 + AP U1 + APUSH P3 */}
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 5}}>
        <span style={chipStyle(hasMap ? HC.teal : HC.accent)}
          title={hasMap ? '点开先看主题地图，再进入这一课' : '点开直接开始学这一课'}>
          {hasMap ? '🗺 含地图' : '📖 直接学'}
        </span>
        {tags.grade && <span style={chipStyle(HC.teal)}>{tags.grade}</span>}
        {tags.apWorld && <span style={chipStyle(HC.accent)}>AP World {tags.apWorld}</span>}
        {tags.apush && <span style={chipStyle(HC.accent)}>APUSH {tags.apush}</span>}
      </div>
      {done && done.xpEarned ? (
        <div style={{fontSize: 10, color: HC.gold, fontWeight: 600, marginTop: 3}}>
          ⚡ {done.xpEarned} XP · {new Date(done.completedAt).toLocaleDateString('zh-CN')}
        </div>
      ) : null}
      {locked ? (
        <div style={{fontSize: 10, color: HC.textSec, fontWeight: 600, marginTop: 3}}>
          🔒 {tierName(lockTier)} 解锁
        </div>
      ) : clickable && !done ? (
        <div style={{fontSize: 10, color: HC.accent, fontWeight: 600, marginTop: 3}}>
          → 点击进入这一课
        </div>
      ) : null}
    </div>
  );
}

function chipStyle(color) {
  return {
    fontSize: 10, padding: '1px 6px',
    background: 'rgba(0,0,0,0.04)',
    color: color, borderRadius: 4, fontWeight: 600,
    border: '1px solid ' + color + '33',
  };
}

function tierName(tier) {
  if (tier === 'pro') return 'Pro';
  if (tier === 'free') return 'Free';
  return 'Basic';
}

// Step 4a: 给 CourseCard 算锁标 props (userTier 缺省 = base path / loading → 不锁)。
// 返回空对象时 CourseCard 行为逐字不变。
function lockPropsFor(topicId, userTier, onLockedClick) {
  if (!userTier) return {};                              // base 路径 / tier loading → 不锁
  if (canAccessTopic(topicId, userTier)) return {};      // 可学 → 不锁
  return { locked: true, lockTier: getTopicAccessTier(topicId), onLockedClick: onLockedClick };
}

// ─── Mode 1:按学校年级 ────────────────────────────────────────────────
function GradeView(props) {
  var registry = TOPIC_REGISTRY || [];
  var topicProgress = props.topicProgress;
  // G5 美国早期史: 交叉挂现成早期美国史课 (tags.g5), 这些课同时仍在 G7/G8。空年级 tab 自动不渲染。
  var grades = ['G5', 'G6', 'G7', 'G8', 'HS'];
  // 默认 tab:冷启动 G7（内容最强 + 新移民最痛）
  var [activeGrade, setActiveGrade] = useState('G7');

  // 按 grade 分桶
  var byGrade = {};
  registry.forEach(function(reg) {
    if (!reg.available) return;
    var tags = getGradeTags(reg.id);
    var t = getTopic(reg.id);
    if (!t) return;
    var g = tags.grade || 'HS';
    (byGrade[g] = byGrade[g] || []).push({ topic: t, registry: reg });
    // 交叉挂 G5 (一门课可同时属本年级 + G5 早期美国史)
    if (tags.g5 && g !== 'G5') (byGrade['G5'] = byGrade['G5'] || []).push({ topic: t, registry: reg });
  });

  // 按 year 排序课
  Object.keys(byGrade).forEach(function(g) {
    byGrade[g].sort(function(a, b) {
      var ya = parseInt((a.topic.year || '').toString().replace(/[^-\d]/g, '')) || 0;
      var yb = parseInt((b.topic.year || '').toString().replace(/[^-\d]/g, '')) || 0;
      return ya - yb;
    });
  });

  var items = byGrade[activeGrade] || [];

  return (
    <div>
      {/* 二级 tab:G6 / G7 / G8 / HS,带课程数 */}
      <div style={{display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap'}}>
        {grades.map(function(g) {
          var active = g === activeGrade;
          var count = (byGrade[g] || []).length;
          if (count === 0) return null;
          var meta = GRADE_META[g] || { cn: g };
          return (
            <button key={g} onClick={function() { setActiveGrade(g); }} style={{
              padding: '7px 13px',
              background: active ? HC.teal : HC.card,
              color: active ? '#fff' : HC.text,
              border: '1px solid ' + (active ? HC.teal : HC.border),
              borderRadius: 999, fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              {meta.cn} <span style={{opacity: 0.75, fontSize: 11}}>({count})</span>
            </button>
          );
        })}
      </div>
      <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
        {items.map(function(item) {
          var t = item.topic;
          var done = topicProgress[t.id];
          var isCurrent = props.topic && t.id === props.topic.id;
          return (
            <CourseCard key={t.id} topic={t} done={done} isCurrent={isCurrent}
              clickable={!isCurrent && props.onSwitch} onSwitch={props.onSwitch}
              leftColor={HC.teal}
              {...lockPropsFor(t.id, props.userTier, props.onLockedClick)} />
          );
        })}
      </div>
    </div>
  );
}

// ─── Mode 2:按 AP 考试 ─────────────────────────────────────────────────
function ApView(props) {
  var registry = TOPIC_REGISTRY || [];
  var topicProgress = props.topicProgress;
  var [examType, setExamType] = useState('apworld'); // apworld | apush

  var meta = examType === 'apworld' ? AP_WORLD_META : APUSH_META;
  var unitKeys = Object.keys(meta);

  // 按 AP unit/period 分桶
  var byUnit = {};
  registry.forEach(function(reg) {
    if (!reg.available) return;
    var tags = getGradeTags(reg.id);
    var unit = examType === 'apworld' ? tags.apWorld : tags.apush;
    if (!unit) return;
    byUnit[unit] = byUnit[unit] || [];
    var t = getTopic(reg.id);
    if (t) byUnit[unit].push({ topic: t, registry: reg });
  });

  return (
    <div>
      {/* 考试类型切换 */}
      <div style={{display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap'}}>
        {[
          { v: 'apworld', label: 'AP World History', count: registry.filter(function(r) { return r.available && getGradeTags(r.id).apWorld; }).length },
          { v: 'apush', label: 'APUSH', count: registry.filter(function(r) { return r.available && getGradeTags(r.id).apush; }).length },
        ].map(function(opt) {
          var active = opt.v === examType;
          return (
            <button key={opt.v} onClick={function() { setExamType(opt.v); }} style={{
              padding: '7px 14px',
              background: active ? HC.accent : HC.card,
              color: active ? '#fff8e8' : HC.text,
              border: '1px solid ' + (active ? HC.accent : HC.border),
              borderRadius: 999, fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'inherit',
            }}>{opt.label} <span style={{opacity: 0.78, fontSize: 11}}>({opt.count})</span></button>
          );
        })}
      </div>

      {/* 按 unit 分组渲染 */}
      {unitKeys.map(function(u) {
        var courses = byUnit[u] || [];
        if (courses.length === 0) return null;
        var unitMeta = meta[u];
        return (
          <div key={u} style={{marginBottom: 14}}>
            <div style={{
              fontSize: 11.5, fontWeight: 700, color: HC.accent,
              letterSpacing: 0.6, marginBottom: 6,
            }}>{unitMeta.cn}</div>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              {courses.map(function(item) {
                var t = item.topic;
                var done = topicProgress[t.id];
                var isCurrent = props.topic && t.id === props.topic.id;
                return (
                  <CourseCard key={t.id} topic={t} done={done} isCurrent={isCurrent}
                    clickable={!isCurrent && props.onSwitch} onSwitch={props.onSwitch}
                    leftColor={HC.accent}
                    {...lockPropsFor(t.id, props.userTier, props.onLockedClick)} />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Mode 3:按历史脉络（原 ThroughLineMap 逻辑） ──────────────────────
function ThroughLineView(props) {
  var registry = TOPIC_REGISTRY || [];
  var topicProgress = props.topicProgress;

  var byThroughLine = {};
  registry.forEach(function(reg) {
    var t = getTopic(reg.id);
    var line = (t && t.throughLine) || reg.throughLine || (t ? 'future' : null);
    if (!t || !line) {
      byThroughLine['future'] = byThroughLine['future'] || [];
      byThroughLine['future'].push(Object.assign({}, reg, { future: true }));
    } else {
      byThroughLine[line] = byThroughLine[line] || [];
      byThroughLine[line].push({ topic: t, registry: reg });
    }
  });

  return (
    <div>
      {Object.keys(byThroughLine).filter(function(k) { return k !== 'future'; }).map(function(lineId) {
        var line = THROUGH_LINES[lineId] || { cn: lineId, color: HC.teal };
        var topicsInLine = byThroughLine[lineId];
        return (
          <div key={lineId} style={{marginBottom: 14}}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: 11, fontWeight: 700,
              color: line.color, letterSpacing: 1, marginBottom: 6,
            }}>
              <span style={{display: 'inline-block', width: 14, height: 3, background: line.color, borderRadius: 2}}/>
              {line.cn} 主线
            </div>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
              {topicsInLine.map(function(item) {
                var t = item.topic;
                var done = topicProgress[t.id];
                var isCurrent = props.topic && t.id === props.topic.id;
                return (
                  <CourseCard key={t.id} topic={t} done={done} isCurrent={isCurrent}
                    clickable={!isCurrent && props.onSwitch} onSwitch={props.onSwitch}
                    leftColor={line.color}
                    {...lockPropsFor(t.id, props.userTier, props.onLockedClick)} />
                );
              })}
            </div>
          </div>
        );
      })}
      {byThroughLine.future && byThroughLine.future.length > 0 && (
        <div style={{
          marginTop: 8, padding: '8px 10px',
          background: 'rgba(0,0,0,0.03)', borderRadius: 6,
          fontSize: 11, color: HC.textSec,
        }}>
          🔒 即将上线：
          {byThroughLine.future.map(function(f, i) {
            return <span key={i} style={{
              display: 'inline-block', padding: '2px 8px', margin: '2px 4px',
              background: HC.parchmentLo, borderRadius: 999, fontSize: 10.5, opacity: 0.75,
            }}>{f.note || f.id}</span>;
          })}
        </div>
      )}
    </div>
  );
}

// ─── 主组件:CourseBrowser (flag gate) ────────────────────────────────
// Step 4a: flag off → CourseBrowserBase 原行为逐字不变 (不调 useUserTier, 0 网络调用);
//          flag on  → CourseBrowserPaywall (锁标 + UpgradeModal)。
// flag 是 env 常量, session 内不变 → 分支稳定, 不违反 hooks 规则。
export function CourseBrowser(props) {
  if (!ENABLE_HISTORY_PAYWALL) return <CourseBrowserBase {...props} />;
  // flag on: loader 先渲染 Base 不锁版, mount 后懒加载 paywall wrapper 替换 (无首屏空白)
  return <CourseBrowserPaywallLoader {...props} />;
}

// ─── CourseBrowserBase: 原 CourseBrowser 实现 (paywall props 全可选) ───
// export 供 CourseBrowserPaywall.js 包装 (flag on 路径)。
export function CourseBrowserBase(props) {
  var topicProgress = useTopicProgress();
  // Mode 状态:从 localStorage 读;冷启动 'grade'(按学校年级 → 默认 G7)
  var [mode, setMode] = useState(function() {
    if (typeof window === 'undefined') return 'grade';
    try {
      var saved = localStorage.getItem(MODE_STORAGE_KEY);
      return saved || 'grade';
    } catch (e) { return 'grade'; }
  });

  // 但首屏(server + client 第一次 render)必须一致 → 用 hydrated gate(SSR safety)
  var [hydrated, setHydrated] = useState(false);
  useEffect(function() { setHydrated(true); }, []);
  var effectiveMode = hydrated ? mode : 'grade'; // SSR + 首屏始终 'grade'

  var saveMode = function(m) {
    setMode(m);
    if (typeof window !== 'undefined') {
      try { localStorage.setItem(MODE_STORAGE_KEY, m); } catch (e) {}
    }
  };

  var registry = TOPIC_REGISTRY || [];
  var completedCount = Object.keys(topicProgress).length;
  var totalAvailable = registry.filter(function(t) { return t.available; }).length;
  var totalXp = Object.values(topicProgress).reduce(function(sum, t) { return sum + (t.xpEarned || 0); }, 0);

  var MODES = [
    { v: 'grade',      icon: '📚', label: '按学校年级' },
    { v: 'ap',         icon: '🎯', label: '按 AP 考试' },
    { v: 'throughline',icon: '🗺',  label: '按历史脉络' },
  ];

  return (
    <div style={{
      marginBottom: 14,
      padding: '14px 16px',
      background: HC.card,
      borderRadius: 14,
      border: '1px solid ' + HC.border,
    }}>
      {/* 顶部:标题 + 已学统计 */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 10, flexWrap: 'wrap', gap: 8,
      }}>
        <h3 style={{margin: 0, fontFamily: FONT_DISPLAY, fontSize: 15, color: HC.ink}}>
          📜 51 门课怎么选
        </h3>
        <div style={{display: 'flex', gap: 10, fontSize: 11, color: HC.textSec}}>
          <span>✅ 已学 {completedCount}/{totalAvailable}</span>
          {totalXp > 0 && <span style={{color: HC.gold, fontWeight: 600}}>⚡ {totalXp} XP 累计</span>}
        </div>
      </div>

      {/* Mode 切换:📚 学校年级 / 🎯 AP / 🗺 脉络 */}
      <div style={{display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap'}}>
        {MODES.map(function(m) {
          var active = m.v === effectiveMode;
          return (
            <button key={m.v} onClick={function() { saveMode(m.v); }} style={{
              flex: '1 1 auto',
              padding: '10px 14px',
              background: active ? HC.ink : HC.parchmentLo,
              color: active ? '#fff8e8' : HC.text,
              border: '1px solid ' + (active ? HC.ink : HC.border),
              borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
            }}>
              <span style={{fontSize: 15, marginRight: 4}}>{m.icon}</span>
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Mode 内容 (userTier/onLockedClick 缺省 = 不锁, base 路径行为不变) */}
      {effectiveMode === 'grade' && (
        <GradeView topic={props.topic} onSwitch={props.onSwitch} topicProgress={topicProgress}
          userTier={props.userTier} onLockedClick={props.onLockedClick} />
      )}
      {effectiveMode === 'ap' && (
        <ApView topic={props.topic} onSwitch={props.onSwitch} topicProgress={topicProgress}
          userTier={props.userTier} onLockedClick={props.onLockedClick} />
      )}
      {effectiveMode === 'throughline' && (
        <ThroughLineView topic={props.topic} onSwitch={props.onSwitch} topicProgress={topicProgress}
          userTier={props.userTier} onLockedClick={props.onLockedClick} />
      )}
    </div>
  );
}

// 向后兼容：单课页底部"换一课"折叠区仍 import ThroughLineMap，给一个 alias
// (内部直接渲染 throughline mode 以保持原行为)
export function ThroughLineMap(props) {
  var topicProgress = useTopicProgress();
  var registry = TOPIC_REGISTRY || [];
  var completedCount = Object.keys(topicProgress).length;
  var totalAvailable = registry.filter(function(t) { return t.available; }).length;
  var totalXp = Object.values(topicProgress).reduce(function(sum, t) { return sum + (t.xpEarned || 0); }, 0);

  return (
    <div style={{
      marginBottom: 14,
      padding: '14px 16px',
      background: HC.card,
      borderRadius: 14,
      border: '1px solid ' + HC.border,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 12, flexWrap: 'wrap', gap: 8,
      }}>
        <h3 style={{margin: 0, fontFamily: FONT_DISPLAY, fontSize: 15, color: HC.ink}}>
          📜 通史脉络
        </h3>
        <div style={{display: 'flex', gap: 10, fontSize: 11, color: HC.textSec}}>
          <span>✅ 已学 {completedCount}/{totalAvailable}</span>
          {totalXp > 0 && <span style={{color: HC.gold, fontWeight: 600}}>⚡ {totalXp} XP 累计</span>}
        </div>
      </div>
      <ThroughLineView topic={props.topic} onSwitch={props.onSwitch} topicProgress={topicProgress} />
    </div>
  );
}
