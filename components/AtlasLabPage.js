// components/AtlasLabPage.js
//
// 页面 UI 组件 — 从 pages/atlas-lab.js 抽出。
// 由 pages/atlas-lab/[viewId].js 调用，通过 props 接收当前视图的渲染数据 + 全部 view 元数据列表。
// 切换视图通过 Next.js router (Link)，每个 view 是独立的 SSR 页面（~700KB），不再一次性加载 23MB。

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { track } from '@vercel/analytics';
import HistoricalAtlas from './HistoricalAtlas';
import CausalityPanel from './CausalityPanel';
import WorldLocator from './WorldLocator';
import CausalSummary from './CausalSummary';
import KeyFiguresRow from './KeyFiguresRow';
import { BrandNavBar } from './BrandNavBar';
import AtlasOnboarding from './AtlasOnboarding';
import MapLegend from './MapLegend';

const HC = {
  parchment:   '#f4ead0',
  parchmentLo: '#e8dcb6',
  parchmentHi: '#fbf5e0',
  ink:         '#3d2c1a',
  inkLight:    '#6b4f33',
  accent:      '#c46b30',
  accentLight: '#f0d9c0',
  border:      '#d4c098',
  text:        '#2c1d10',
  textSec:     '#6b4f33',
  card:        '#fbf5e0',
};

// 把负年份格式化成 BC YYYY，正数原样
function formatYear(y) {
  if (typeof y !== 'number') return '';
  if (y < 0) return 'BC ' + Math.abs(y);
  return String(y);
}

// atlas view id → /history 模块的 topicId（用 deepLearnUrl 提取）
function extractHistoryTopicId(deepLearnUrl) {
  if (!deepLearnUrl) return null;
  const m = deepLearnUrl.match(/topicId=([^&]+)/);
  return m ? m[1] : null;
}

export default function AtlasLabPage({
  activeViewId,
  meta,
  rendered,
  worldLocation,
  worldOverview,
  allMeta,
}) {
  const router = useRouter();

  const [layers, setLayers] = useState({ L0: true, L3: true, C: true, F: true, L4: true });
  const [lang, setLang] = useState('cn');
  const [mode, setMode] = useState('historical');
  const [selectedPin, setSelectedPin] = useState(null);
  const panelRef = useRef(null);

  // 整合 /history：读 localStorage 完成记录 + ?completed= toast
  const [completedHistoryTopics, setCompletedHistoryTopics] = useState({});  // {atlasId: true} 或 {historyTopicId: completionData}
  const [completionToast, setCompletionToast] = useState(null);  // null | { atlasId, xp }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // 读 vocabspark_v1.historyData.completedTopics
    try {
      const raw = localStorage.getItem('vocabspark_v1');
      const d = raw ? JSON.parse(raw) : null;
      const completed = (d && d.historyData && d.historyData.completedTopics) || {};
      setCompletedHistoryTopics(completed);
    } catch (_) {}
    // 检测 ?completed=<historyTopicId>（来自 /history 完成回跳）
    try {
      const p = new URLSearchParams(window.location.search);
      const completedId = p.get('completed');
      if (completedId) {
        setCompletionToast({ historyTopicId: completedId, atlasId: activeViewId, xp: 175 });
        // 清掉 URL 参数（不污染分享链接）
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, '', cleanUrl);
        // 5 秒后自动 hide
        setTimeout(() => setCompletionToast(null), 6000);
      }
    } catch (_) {}
  }, [activeViewId]);

  // 切 view 时清空选中 pin（路由变化触发）
  useEffect(() => { setSelectedPin(null); }, [activeViewId]);

  // 切 view → 上报事件（Vercel Analytics 追踪 Topic 浏览）
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try { track('atlas_view', { viewId: activeViewId, grade: meta.grade, topicTier: meta.topicTier }); } catch (_) {}
    }
  }, [activeViewId, meta.grade, meta.topicTier]);

  // 点 pin → 滚到因果面板 + 上报 ★ pin 点击事件
  useEffect(() => {
    if (selectedPin && panelRef.current) {
      requestAnimationFrame(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      // 只追踪 ★ 焦点 pin（其他 city pin 太频繁，没分析价值）
      const isStarPin = !!selectedPin.featured
        || (selectedPin.label?.cn || '').includes('★')
        || (selectedPin.label?.en || '').includes('★');
      if (isStarPin && typeof window !== 'undefined') {
        try { track('atlas_star_pin_click', { viewId: activeViewId, pinId: selectedPin.id }); } catch (_) {}
      }
    }
  }, [selectedPin, activeViewId]);

  // 当前学段从激活 view 推断
  const activeGrade = meta.grade || 7;

  // 按 grade 分组（从轻量 metadata，非 23MB 渲染数据）
  const viewsByGrade = allMeta.reduce((acc, m) => {
    const g = m.grade || 7;
    (acc[g] = acc[g] || []).push(m);
    return acc;
  }, {});
  const availableGrades = Object.keys(viewsByGrade).map(Number).sort((a, b) => a - b);
  // 当前学段的 Topic 按 year 升序排列
  const currentGradeViews = (viewsByGrade[activeGrade] || []).slice().sort((a, b) =>
    (typeof a.year === 'number' ? a.year : 0) - (typeof b.year === 'number' ? b.year : 0)
  );

  // year → topicId 映射（CausalityPanel 时间链跳转用）
  const yearToTopicId = {};
  for (const m of allMeta) {
    if (typeof m.year === 'number') yearToTopicId[m.year] = m.id;
  }
  const handleJumpToYear = (year) => {
    if (yearToTopicId[year]) {
      router.push('/atlas-lab/' + yearToTopicId[year]);
      return true;
    }
    const allYears = Object.keys(yearToTopicId).map(Number);
    const nearest = allYears.find(y => Math.abs(y - year) <= 20);
    if (nearest) {
      router.push('/atlas-lab/' + yearToTopicId[nearest]);
      return true;
    }
    return false;
  };

  const toggleLayer = (k) => {
    setLayers(l => ({ ...l, [k]: !l[k] }));
    setSelectedPin(null);
  };

  const switchGrade = (g) => {
    // 切学段 = 跳到该学段第一个 Topic（按时间序）
    const sorted = (viewsByGrade[g] || []).slice().sort((a, b) =>
      (typeof a.year === 'number' ? a.year : 0) - (typeof b.year === 'number' ? b.year : 0)
    );
    const first = sorted[0];
    if (first) router.push('/atlas-lab/' + first.id);
  };

  const GRADE_LABELS = lang === 'cn' ? {
    5: 'HSS-5 美国早期',
    6: 'HSS-6 古代世界',
    7: 'HSS-7 中世纪 + 早期现代',
    8: 'HSS-8 现代世界 + 美国 1850-1900',
  } : {
    5: 'HSS-5 Early USA',
    6: 'HSS-6 Ancient World',
    7: 'HSS-7 Medieval + Early Modern',
    8: 'HSS-8 Modern World + USA 1850-1900',
  };

  const layerDefs = lang === 'cn' ? [
    { k: 'L3', label: '政体', sub: '政治版图（国家/帝国/殖民地边界）' },
    { k: 'C',  label: '文明', sub: '文明圈层（宗教/法系跨政体覆盖）' },
    { k: 'F',  label: '山河', sub: '地理要素（河、山、长城、大运河）' },
    { k: 'L4', label: '事件', sub: '具体事件 pin' },
  ] : [
    { k: 'L3', label: 'Polities',     sub: 'Political map (nations/empires)' },
    { k: 'C',  label: 'Civilization', sub: 'Civilizational regions' },
    { k: 'F',  label: 'Geography',    sub: 'Rivers/mountains/walls' },
    { k: 'L4', label: 'Events',       sub: 'Specific event pins' },
  ];

  const T = lang === 'cn' ? {
    historical: '历史',
    modern:     '现代',
    layers:     '图层',
    extendedAp: 'AP 进阶',
    extended:   '进阶',
    standardsLabel: '对应课标：',
    starHint:   '👆 点 ★ pin 看 4D 因果坐标',
    arch:       '🏗️ 架构说明',
  } : {
    historical: 'Historical',
    modern:     'Modern',
    layers:     'Layers',
    extendedAp: 'AP+',
    extended:   'Extra',
    standardsLabel: 'Aligned to:',
    starHint:   '👆 Click ★ pin for 4D causal coordinates',
    arch:       '🏗️ Architecture notes',
  };

  return (
    <>
      <Head>
        <title>
          {(meta.title?.[lang] || meta.title?.cn) ? `${meta.title[lang] || meta.title.cn} · Atlas · Know U.` : 'Atlas Lab · Know U.'}
        </title>
        <meta
          name="description"
          content={lang === 'cn'
            ? `${meta.title?.cn || ''} · 5 层因果地图 · 看见每个历史事件的地理 / 气候 / 民生 / 制度 / 事件 4D 坐标`
            : `${meta.title?.en || ''} · 5-layer causal atlas — geography / climate / society / institutions / events`}
        />
      </Head>
      <div style={{ fontFamily: '-apple-system, "PingFang SC", system-ui, sans-serif', background: HC.parchment, minHeight: '100vh' }}>
        <AtlasOnboarding lang={lang} />
        <BrandNavBar activeTab="history" />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '8px 16px 24px' }}>

          {/* 顶部紧凑控件条 */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12,
            padding: '10px 12px', background: HC.card, borderRadius: 12,
            border: '1px solid ' + HC.border, marginBottom: 10,
            position: 'sticky', top: 6, zIndex: 20,
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
          }}>
            <div style={{ fontFamily: 'serif', fontSize: 15, fontWeight: 700, color: HC.text, letterSpacing: 1, marginRight: 4 }}>
              Atlas <span style={{ color: HC.accent }}>Lab</span>
            </div>

            {/* 学段 tab */}
            <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {availableGrades.map(g => {
                const a = g === activeGrade;
                return (
                  <button key={g} onClick={() => switchGrade(g)}
                    title={GRADE_LABELS[g]}
                    style={{
                      padding: '4px 9px', minWidth: 32,
                      background: a ? HC.ink : 'transparent',
                      color: a ? HC.parchmentHi : HC.text,
                      border: '1px solid ' + (a ? HC.ink : HC.border),
                      borderRadius: 6, fontSize: 11, fontWeight: 600,
                      cursor: 'pointer', fontFamily: 'inherit',
                    }}>
                    G{g}
                  </button>
                );
              })}
            </div>

            {/* Topic chips（按时间序）— Link 路由切换 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: '1 1 200px' }}>
              {currentGradeViews.map(m => {
                const isActive = m.id === activeViewId;
                const isAux = m.topicTier === 'supplementary';
                // tierType 决定 badge 形态：extended-ap = AP 进阶（紫色，AP 必考）；extended = 普通进阶（米色，教材延伸）
                const tierType = m.tierType || (isAux ? 'extended-ap' : null);
                const isApTier = tierType === 'extended-ap';
                const isExtTier = tierType === 'extended';
                const auxTitle = isApTier
                  ? (lang === 'cn'
                      ? 'AP 进阶 · 不在该年级 HSS 核心单元，但 AP 考试明确重点考'
                      : 'AP Extended · beyond this grade\'s HSS core, but heavily AP-tested')
                  : (lang === 'cn'
                      ? '进阶 · 教材延伸阅读，非 AP 重点'
                      : 'Extended · curriculum extension, not core AP topic');
                // 配色：AP 进阶 = 紫色（学术 / AP 主题）；普通进阶 = 棕褐（教材延伸）
                const auxAccent = isApTier ? '#a07cb8' : '#9a7e5a';
                const auxBgChip = isApTier ? '#f3edf9' : '#f0e6d2';
                const auxBgBadge = isApTier ? '#e9dff5' : '#e8dcb6';
                const auxBadgeText = isApTier ? '#6c4499' : '#6b4f33';
                return (
                  <Link key={m.id} href={'/atlas-lab/' + m.id} style={{ textDecoration: 'none' }}>
                    <span style={{
                      padding: '4px 10px',
                      background: isActive ? HC.accent : (isAux ? auxBgChip : HC.parchmentHi),
                      color: isActive ? '#fff8e8' : HC.text,
                      border: '1px solid ' + (isActive ? HC.accent : (isAux ? auxAccent : HC.border)),
                      borderStyle: isAux && !isActive ? 'dashed' : 'solid',
                      borderRadius: 999,
                      fontSize: 11, fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer', fontFamily: 'inherit',
                      display: 'inline-flex', alignItems: 'center', gap: 4,
                    }}>
                      {m.title[lang] || m.title.cn} <span style={{ opacity: 0.7, fontSize: 10 }}>{formatYear(m.year)}</span>
                      {m.deepLearnEnabled && (() => {
                        // 显示 ✓ 已通关 或 🎯 可深度学
                        const histId = m.id === 'magna-carta' ? 'magna-carta-1215'
                          : m.id === 'tang-song' ? 'tang-song-china' : null;
                        const isDone = histId && completedHistoryTopics[histId];
                        return (
                          <span
                            title={isDone
                              ? (lang === 'cn' ? '已通关 ✓' : 'Completed ✓')
                              : (lang === 'cn' ? '可深度学（14 轮苏格拉底对话 + Mastery Gate）' : 'Deep-learn available')}
                            style={{
                              fontSize: 10, lineHeight: 1,
                              color: isActive ? '#fff' : (isDone ? '#22a06b' : '#9b3030'),
                            }}
                          >{isDone ? '✓' : '🎯'}</span>
                        );
                      })()}
                      {isAux && (
                        <span title={auxTitle} style={{
                          fontSize: 9, fontWeight: 700,
                          color: isActive ? '#fff' : auxBadgeText,
                          background: isActive ? 'rgba(255,255,255,0.25)' : auxBgBadge,
                          padding: '1px 5px', borderRadius: 3,
                          letterSpacing: '0.05em',
                        }}>{isApTier ? T.extendedAp : T.extended}</span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* CN/EN 切换 — 移入 sticky chip bar 末尾，任何屏幕滚动位置都能切换 */}
            <div style={{ display: 'flex', gap: 0, alignItems: 'center', flexShrink: 0, marginLeft: 'auto' }}>
              <button onClick={() => setLang('cn')} title="切换中文" style={{
                padding: '3px 9px',
                background: lang === 'cn' ? HC.accent : 'transparent',
                color: lang === 'cn' ? '#fff8e8' : HC.text,
                border: '1px solid ' + (lang === 'cn' ? HC.accent : HC.border),
                borderRadius: '999px 0 0 999px', borderRight: 'none',
                fontSize: 11, fontWeight: lang === 'cn' ? 700 : 500,
                cursor: 'pointer', fontFamily: 'inherit',
              }}>中</button>
              <button onClick={() => setLang('en')} title="Switch to English" style={{
                padding: '3px 9px',
                background: lang === 'en' ? HC.accent : 'transparent',
                color: lang === 'en' ? '#fff8e8' : HC.text,
                border: '1px solid ' + (lang === 'en' ? HC.accent : HC.border),
                borderRadius: '0 999px 999px 0',
                fontSize: 11, fontWeight: lang === 'en' ? 700 : 500,
                cursor: 'pointer', fontFamily: 'inherit',
              }}>EN</button>
            </div>
          </div>

          {/* 控件第二行已删除：mode 浮到地图右上 / CN-EN 移到 sticky chip bar 末尾 / layers 已浮层 */}

          {/* 世界定位小地图 */}
          <WorldLocator overview={worldOverview} currentLocation={worldLocation} lang={lang} />

          {/* 标题 + 副标题 */}
          <div style={{ padding: '6px 12px 0' }}>
            <h2 style={{ fontFamily: 'serif', fontSize: 18, color: HC.text, margin: 0 }}>
              {meta.title[lang] || meta.title.cn}
              <span style={{ fontSize: 12, fontWeight: 400, color: HC.inkLight, marginLeft: 6 }}>
                · {lang === 'cn' ? meta.title.en : meta.title.cn} · {meta.subtitle?.[lang] || meta.subtitle?.cn}
              </span>
            </h2>
          </div>

          {/* 5 层因果摘要 + 人物要素 — 5 行图标 + 颜色条排版（替代之前一行 jargon 墙） */}
          <div style={{
            padding: '8px 12px',
            background: HC.parchmentHi,
            borderRadius: 8,
            border: '1px solid ' + HC.border,
            margin: '6px 0',
          }}>
            <CausalSummary text={meta.causalSummary?.[lang] || meta.causalSummary?.cn} lang={lang} />
            {meta.keyFigures && meta.keyFigures.length > 0 && (
              <KeyFiguresRow
                figures={meta.keyFigures}
                lang={lang}
                deepLearnEnabled={meta.deepLearnEnabled}
                // #2α 用户选择以某角色进入深度学：把 figure 存 localStorage + 打开 embed iframe
                // pages/history.js mount 时读 pendingRole.<topicId>，传给 buildHistorySystemPrompt
                onLaunchAsRole={(figure) => {
                  if (!meta.deepLearnUrl) return;
                  const histId = extractHistoryTopicId(meta.deepLearnUrl);
                  if (typeof window !== 'undefined' && histId) {
                    try {
                      const raw = localStorage.getItem('vocabspark_v1');
                      const d = raw ? JSON.parse(raw) : {};
                      d.pendingRole = d.pendingRole || {};
                      d.pendingRole[histId] = { figure, lang, ts: new Date().toISOString() };
                      d.updatedAt = new Date().toISOString();
                      localStorage.setItem('vocabspark_v1', JSON.stringify(d));
                    } catch (_) {}
                  }
                  // 打开 embed iframe（带 role flag 让 history 知道有 pendingRole 要读）
                  const url = (meta.deepLearnUrl || '/history') + '&embedded=1&role=1';
                  setEmbedUrl(url);
                  setLearningMode('embedded');
                }}
              />
            )}
          </div>

          {/* 课标对应 */}
          {meta.standardsAlignment && meta.standardsAlignment.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: '0 12px', marginBottom: 8 }}>
              <span style={{ fontSize: 10, color: HC.textSec, fontWeight: 600, marginRight: 2 }}>{T.standardsLabel}</span>
              {meta.standardsAlignment.map((s, i) => {
                const humanLabel = (s.label && (s.label[lang] || s.label.cn || s.label.en)) || s.code;
                // 去掉 label 开头的代码前缀（兼容 'CA-HSS-7.1' / 'CA HSS-7.1' 两种格式）
                const codePrefix = s.code.replace(/-/g, '[-\\s]');
                const cleanLabel = humanLabel.replace(new RegExp('^' + codePrefix + '\\s*'), '');
                return (
                  <span key={i} title={humanLabel} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 10, padding: '2px 8px',
                    background: HC.parchmentLo, color: HC.ink,
                    border: '1px solid ' + HC.border, borderRadius: 4,
                    cursor: 'help', maxWidth: '100%',
                  }}>
                    <span style={{ fontFamily: 'ui-monospace, monospace', fontWeight: 700 }}>{s.code}</span>
                    {cleanLabel && cleanLabel !== humanLabel && (
                      <span style={{ color: HC.textSec, fontSize: 10 }}>· {cleanLabel}</span>
                    )}
                  </span>
                );
              })}
            </div>
          )}

          {/* 持久图例 — 给 7 年级用户随时一眼能看懂的色/符号对照 */}
          <MapLegend lang={lang} />

          {/* 地图 */}
          <div style={{ background: HC.card, padding: 8, borderRadius: 12, border: '1px solid ' + HC.border, marginBottom: 10, position: 'relative' }}>
            {/* 图层浮层（左上角）— 不用上下滑屏 */}
            <div style={{
              position: 'absolute', top: 12, left: 16,
              background: 'rgba(251, 245, 224, 0.94)',
              padding: '6px 8px',
              borderRadius: 8,
              border: '1px solid ' + HC.border,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 5,
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              flexWrap: 'wrap',
              maxWidth: 'calc(100% - 32px)',
            }}>
              <span style={{ fontSize: 10, color: HC.textSec, fontWeight: 700, letterSpacing: 0.5, marginRight: 2, textTransform: 'uppercase' }}>
                {T.layers}
              </span>
              {layerDefs.map(t => (
                <button key={t.k} onClick={() => toggleLayer(t.k)} title={`${t.label} — ${t.sub}`} style={{
                  padding: '3px 8px',
                  background: layers[t.k] ? HC.accent : 'transparent',
                  color: layers[t.k] ? '#fff8e8' : HC.text,
                  border: '1px solid ' + (layers[t.k] ? HC.accent : HC.border),
                  borderRadius: 6,
                  fontSize: 10.5, fontWeight: layers[t.k] ? 700 : 500,
                  opacity: layers[t.k] ? 1 : 0.6,
                  cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'all 0.15s',
                }}>{t.label}</button>
              ))}
            </div>
            {/* 历史 / 现代 模式浮层（右上角，地图相关）*/}
            <div style={{
              position: 'absolute', top: 12, right: 16,
              background: 'rgba(251, 245, 224, 0.94)',
              padding: '4px',
              borderRadius: 999,
              border: '1px solid ' + HC.border,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 5,
              display: 'flex',
              gap: 0,
              alignItems: 'center',
            }}>
              <button onClick={() => setMode('historical')} title={T.historical + ' ' + formatYear(meta.year)} style={{
                padding: '3px 10px',
                background: mode === 'historical' ? HC.accent : 'transparent',
                color: mode === 'historical' ? '#fff8e8' : HC.text,
                border: 'none',
                borderRadius: 999,
                fontSize: 11, fontWeight: mode === 'historical' ? 700 : 500,
                cursor: 'pointer', fontFamily: 'inherit',
              }}>{T.historical} {formatYear(meta.year)}</button>
              <button onClick={() => setMode('modern')} title={T.modern} style={{
                padding: '3px 10px',
                background: mode === 'modern' ? HC.accent : 'transparent',
                color: mode === 'modern' ? '#fff8e8' : HC.text,
                border: 'none',
                borderRadius: 999,
                fontSize: 11, fontWeight: mode === 'modern' ? 700 : 500,
                cursor: 'pointer', fontFamily: 'inherit',
              }}>{T.modern}</button>
            </div>
            {/* 点 ★ pin 提示（右下角，让位 mode 切换）*/}
            <div style={{
              position: 'absolute', bottom: 14, right: 16,
              fontSize: 11, color: HC.accent, fontWeight: 600,
              background: 'rgba(244, 234, 208, 0.9)',
              padding: '4px 10px', borderRadius: 999,
              border: '1px solid ' + HC.accent,
              zIndex: 5, pointerEvents: 'none',
            }}>{T.starHint}</div>
            <HistoricalAtlas
              rendered={rendered[mode]}
              layers={layers}
              lang={lang}
              onPinClick={setSelectedPin}
              viewTitle={meta.title[lang] || meta.title.cn}
              viewDescription={meta.causalSummary?.[lang] || meta.causalSummary?.cn}
            />
          </div>

          {/* 因果坐标面板 */}
          {selectedPin && (
            <div ref={panelRef}>
              <CausalityPanel
                pin={selectedPin}
                lang={lang}
                onClose={() => setSelectedPin(null)}
                yearToTopicId={yearToTopicId}
                onJumpToYear={handleJumpToYear}
                currentTopicId={activeViewId}
              />
            </div>
          )}

          {/* 深度学入口 — 整合原 /history 14-轮苏格拉底对话产品。
              Phase 0：仅 Magna Carta + Tang/Song 有完整 conversation engine 支持，跳到 /history。
              Phase 1+ 计划：把所有 40 Topic 接入对话引擎，按钮内联 mode prop。 */}
          {meta.deepLearnEnabled && (() => {
            const histId = extractHistoryTopicId(meta.deepLearnUrl);
            const completion = histId ? completedHistoryTopics[histId] : null;
            const isDone = !!completion;
            const ctaTitle = isDone
              ? (lang === 'cn' ? '✓ 已通关 — 想再挑战？' : '✓ Completed — challenge again?')
              : (lang === 'cn' ? '想真正懂这个 Topic？' : 'Want to truly understand this Topic?');
            const ctaSub = isDone
              ? (lang === 'cn' ? '重新走一遍 14 轮对话 + Mastery Gate（XP 不会重复给）'
                              : 'Re-run 14-turn dialogue + Mastery Gate (no double XP)')
              : (lang === 'cn' ? '开始 30-45 分钟深度学：14 轮苏格拉底对话 + 5 层因果 + 必背词汇 mastery gate'
                              : '30-45 min deep dive: 14-turn Socratic dialogue + 5 layers + mastery gate');
            const bgGrad = isDone
              ? 'linear-gradient(135deg, #22a06b 0%, #1a7c52 100%)'
              : 'linear-gradient(135deg, ' + HC.accent + ' 0%, #b85a25 100%)';
            const shadow = isDone
              ? '0 4px 14px rgba(34, 160, 107, 0.3)'
              : '0 4px 14px rgba(196, 107, 48, 0.3)';
            return (
              <Link href={meta.deepLearnUrl || '/history'} style={{ textDecoration: 'none' }}>
                <div style={{
                  marginTop: 14,
                  padding: '14px 18px',
                  background: bgGrad,
                  color: '#fff8e8',
                  borderRadius: 12,
                  cursor: 'pointer',
                  boxShadow: shadow,
                  display: 'flex', alignItems: 'center', gap: 12,
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <span style={{ fontSize: 28, lineHeight: 1 }}>{isDone ? '✓' : '🎯'}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{ctaTitle}</div>
                    <div style={{ fontSize: 12, opacity: 0.92 }}>{ctaSub}</div>
                  </div>
                  <span style={{ fontSize: 22, lineHeight: 1 }}>→</span>
                </div>
              </Link>
            );
          })()}

          {/* 整合 /history：完成 Topic 后回 atlas 触发庆祝 toast */}
          {completionToast && (
            <div style={{
              position: 'fixed',
              top: 80, left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              padding: '14px 22px',
              background: 'linear-gradient(135deg, #22a06b 0%, #1a7c52 100%)',
              color: '#fff8e8',
              borderRadius: 999,
              boxShadow: '0 8px 32px rgba(34, 160, 107, 0.35)',
              display: 'flex', alignItems: 'center', gap: 10,
              animation: 'kuFadeIn 0.3s ease-out',
              fontSize: 14, fontWeight: 700,
              maxWidth: 'calc(100% - 32px)',
            }}>
              <span style={{ fontSize: 22 }}>🏆</span>
              <span>{lang === 'cn' ? `通关 +${completionToast.xp} XP！` : `Completed +${completionToast.xp} XP!`}</span>
              <button
                onClick={() => setCompletionToast(null)}
                style={{
                  background: 'transparent', border: 'none', color: '#fff8e8',
                  fontSize: 16, cursor: 'pointer', padding: 0, opacity: 0.7,
                }}
              >×</button>
            </div>
          )}

          {/* 考试要点 — 5-10 个具体名词/日期/术语，应试导向 */}
          {meta.examPoints && (meta.examPoints[lang] || meta.examPoints.cn) && (
            <details style={{
              background: HC.card, padding: '8px 12px',
              border: '1px solid ' + HC.border, borderRadius: 8,
              marginTop: 10, fontSize: 13, color: HC.text,
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: 13, color: HC.accent, listStyle: 'none' }}>
                🎯 {lang === 'cn' ? '考试要点' : 'Exam Points'} ({(meta.examPoints[lang] || meta.examPoints.cn).length})
                <span style={{ fontSize: 10, color: HC.textSec, fontWeight: 500, marginLeft: 8, fontStyle: 'italic' }}>
                  {lang === 'cn' ? '点击展开 · 具体术语 / 人名 / 日期，AP & HSS 必背' : 'Click to expand · specific terms / names / dates for AP & HSS exams'}
                </span>
              </summary>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: 22, lineHeight: 1.7, fontSize: 13 }}>
                {(meta.examPoints[lang] || meta.examPoints.cn).map((pt, i) => (
                  <li key={i} style={{ marginBottom: 3 }}>{pt}</li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>
    </>
  );
}
