// ─── history-engine: HistoryProTools (Step 10 · flag on 才懒加载挂载) ──
// history 首页的会员专属工具区:
//   - 「自动推荐」开关  (Basic+): 完成课程时是否把错词自动推进 Vocab 桥队列
//   - 「一键全推考点词」(Pro):   把全部已上线课程的必背考点词一次性推进 Vocab
//
// 隔离原则 (同 CourseGate): useUserTier → membership 全在本文件, 经
// HistoryProToolsMount 懒加载, flag off 时永不挂载 → useUserTier 永不调用 →
// 首页 bundle 无新 /api/stripe/check-subscription 请求。
//
// hooks 规则: useUserTier 在本组件顶层无条件调用。
import React, { useState } from 'react';
import { useUserTier } from '../../lib/membership';
import { getAvailableTopics } from '../../lib/history-topics';
import {
  bridgeReviewToVocab,
  getHistoryAutoRecommend,
  setHistoryAutoRecommend,
} from '../../lib/history-storage';

var card = {
  border: '1px solid #e5e7eb', borderRadius: 12, padding: '16px 18px',
  background: '#fff', marginBottom: 16,
};
var rowBetween = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 };
var labelText = { fontSize: 15, fontWeight: 600, color: '#1f2937' };
var subText = { fontSize: 12.5, color: '#6b7280', marginTop: 4, lineHeight: 1.5 };

function Toggle(props) {
  var on = props.on;
  return (
    <button
      onClick={props.onClick}
      aria-pressed={on}
      style={{
        width: 46, height: 26, borderRadius: 13, border: 'none', cursor: 'pointer',
        background: on ? '#10b981' : '#d1d5db', position: 'relative', flexShrink: 0,
        transition: 'background .15s',
      }}
    >
      <span style={{
        position: 'absolute', top: 3, left: on ? 23 : 3, width: 20, height: 20,
        borderRadius: '50%', background: '#fff', transition: 'left .15s',
        boxShadow: '0 1px 2px rgba(0,0,0,.2)',
      }} />
    </button>
  );
}

export function HistoryProTools() {
  var tierInfo = useUserTier();
  var tier = tierInfo && tierInfo.tier;
  var isActive = tierInfo && tierInfo.state === 'active';
  var isPro = tierInfo && tierInfo.isPro;

  var [autoRec, setAutoRec] = useState(function () { return getHistoryAutoRecommend(); });
  var [pushing, setPushing] = useState(false);
  var [pushResult, setPushResult] = useState(null);

  // 仅对已确认的付费 tier 显示 (basic / pro)。loading / error / free / guest → 不渲染。
  if (!isActive || (tier !== 'basic' && tier !== 'pro')) return null;

  function toggleAutoRec() {
    var next = !autoRec;
    setAutoRec(next);
    setHistoryAutoRecommend(next);
  }

  function pushAll() {
    if (pushing) return;
    setPushing(true);
    setPushResult(null);
    try {
      var topics = getAvailableTopics() || [];
      var total = 0;
      var courses = 0;
      topics.forEach(function (t) {
        if (!t || !t.mustMemorize || !Array.isArray(t.mustMemorize.vocab) || t.mustMemorize.vocab.length === 0) return;
        var res = bridgeReviewToVocab(t.mustMemorize.vocab, { topicId: t.id, priority: 'must-memorize' });
        var n = (res && res.pushed) || 0;
        if (n > 0) { total += n; courses += 1; }
      });
      setPushResult({ total: total, courses: courses });
    } catch (e) {
      setPushResult({ error: true });
    } finally {
      setPushing(false);
    }
  }

  return (
    <div style={{ marginBottom: 8 }}>
      {/* 自动推荐开关 (Basic+) */}
      <div style={card}>
        <div style={rowBetween}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={labelText}>📌 自动推荐考点词</div>
            <div style={subText}>开启后，每完成一门课，没答对的考点词会自动出现在 Vocab 的「来自 History」卡片里，等你确认是否加入背诵。</div>
          </div>
          <Toggle on={autoRec} onClick={toggleAutoRec} />
        </div>
      </div>

      {/* 一键全推 (Pro) */}
      {isPro && (
        <div style={card}>
          <div style={rowBetween}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={labelText}>⚡ 一键导入全部考点词 <span style={{ fontSize: 11, color: '#7c3aed', fontWeight: 700 }}>PRO</span></div>
              <div style={subText}>把当前已上线全部课程的必背考点词一次性推进 Vocab 桥队列（已在背的词会自动跳过）。</div>
            </div>
            <button
              onClick={pushAll}
              disabled={pushing}
              style={{
                flexShrink: 0, padding: '9px 16px', borderRadius: 9, border: 'none',
                background: pushing ? '#c4b5fd' : '#7c3aed', color: '#fff', fontWeight: 700,
                fontSize: 14, cursor: pushing ? 'default' : 'pointer',
              }}
            >
              {pushing ? '推送中…' : '一键导入'}
            </button>
          </div>
          {pushResult && (
            <div style={{ marginTop: 12, fontSize: 13.5, fontWeight: 600, color: pushResult.error ? '#dc2626' : '#059669' }}>
              {pushResult.error
                ? '导入出错了，请稍后再试。'
                : pushResult.total > 0
                  ? '已从 ' + pushResult.courses + ' 门课推送 ' + pushResult.total + ' 个新词到 Vocab — 去 Vocab 查收「来自 History」卡片。'
                  : '没有新词可推 —— 全部考点词都已在你的词单里了 👍'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HistoryProTools;
