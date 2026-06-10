// ─── history-engine: ExamBankSection / AP 真题映射 + 原创仿真练习 ───────────
// 创始人需求: 真题是中国学生家长心里的闪光点。但 AP 真题是 College Board 版权——
// 本组件只做「真题事实映射」(年份/题型/主题概括 + 指向官方原题), 零原文复制;
// 仿真练习是我们自研, 与真题严格分层标注, 绝不混淆。
import React, { useState, useEffect } from 'react';
import { HC } from './theme';
import { hasExamBank, loadExamBank } from '../../lib/history-exam-bank';
import { renderInlineMd } from './inlineMd';

// College Board 官方历年真题页 (稳定 URL; 学生按年份/题型找官方原题)
var AP_CENTRAL = {
  'AP World History': 'https://apcentral.collegeboard.org/courses/ap-world-history/exam/past-exam-questions',
  'APUSH': 'https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions',
  'AP European History': 'https://apcentral.collegeboard.org/courses/ap-european-history/exam/past-exam-questions',
  'AP US Government and Politics': 'https://apcentral.collegeboard.org/courses/ap-united-states-government-and-politics/exam/past-exam-questions',
};

function PracticeCard(props) {
  var q = props.q;
  var isEn = props.isEnglish;
  var [open, setOpen] = useState(false);
  return (
    <div style={{
      background: 'white', border: '1px solid ' + HC.border, borderRadius: 10,
      padding: '12px 14px', marginBottom: 8,
    }}>
      <div style={{display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, flexWrap: 'wrap'}}>
        <span style={{
          fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4,
          background: '#eef4ee', color: '#2a7d2a', border: '1px solid #2a7d2a33',
        }}>✍️ {isEn ? 'AP-style practice (original)' : 'AP 仿真练习 · 原创'}</span>
        <span style={{fontSize: 10.5, color: HC.textSec, fontWeight: 600}}>{q.type}</span>
        {q.apSkill && <span style={{fontSize: 10, color: HC.textSec, opacity: 0.8}}>· {q.apSkill}</span>}
      </div>
      <div style={{fontSize: 13.5, color: HC.text, lineHeight: 1.6, whiteSpace: 'pre-wrap'}}>{renderInlineMd(q.stem)}</div>
      {q.modelAnswerPoints && q.modelAnswerPoints.length > 0 && (
        <div style={{marginTop: 8}}>
          <button onClick={function() { setOpen(!open); }} style={{
            border: 'none', background: 'transparent', color: HC.accent, cursor: 'pointer',
            fontSize: 12, fontWeight: 600, fontFamily: 'inherit', padding: 0,
          }}>{open ? (isEn ? '▾ Hide model points' : '▾ 收起参考答案要点') : (isEn ? '▸ Show model points' : '▸ 看参考答案要点')}</button>
          {open && (
            <ul style={{margin: '6px 0 0', paddingLeft: 18, fontSize: 12.5, color: HC.text, lineHeight: 1.6}}>
              {q.modelAnswerPoints.map(function(p, i) { return <li key={i} style={{marginBottom: 3}}>{renderInlineMd(p)}</li>; })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export function ExamBankSection(props) {
  var topicId = props.topicId;
  var isEn = !!props.isEnglish;
  // 懒加载: 选中某门时才按需 import 该门数据。loaded={id,bank} 防止 topicId 切换时闪旧数据。
  var [loaded, setLoaded] = useState(null);
  useEffect(function() {
    var alive = true;
    if (topicId && hasExamBank(topicId)) {
      loadExamBank(topicId).then(function(b) { if (alive) setLoaded({ id: topicId, bank: b }); });
    }
    return function() { alive = false; };
  }, [topicId]);

  if (!topicId || !hasExamBank(topicId)) return null;
  if (!loaded || loaded.id !== topicId || !loaded.bank) return null;
  var bank = loaded.bank;
  var refs = bank.realExamRefs || [];
  var pqs = bank.practiceQuestions || [];
  if (refs.length === 0 && pqs.length === 0) return null;

  return (
    <div style={{
      marginTop: 16, padding: '16px 18px', borderRadius: 14,
      background: HC.parchmentHi, border: '1px solid ' + HC.parchmentLo,
    }}>
      <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4}}>
        <span style={{fontSize: 20}}>🎯</span>
        <span style={{fontSize: 16, fontWeight: 700, color: HC.ink}}>
          {isEn ? 'AP Real Exam Map & Practice' : 'AP 真题对照 & 仿真练习'}
        </span>
      </div>
      <div style={{fontSize: 11.5, color: HC.textSec, lineHeight: 1.5, marginBottom: 12}}>
        {isEn
          ? 'Real exam = topics actually tested by the College Board (click to see the official question). Practice = AP-style questions we wrote, not real exam items.'
          : '「真题」= College Board 官方真实考过的考点（点链接看官方原题）；「仿真练习」= 我们按 AP 题型自研，非真题。'}
      </div>

      {refs.length > 0 && (
        <div style={{marginBottom: pqs.length > 0 ? 14 : 0}}>
          <div style={{fontSize: 12.5, fontWeight: 700, color: HC.accent, marginBottom: 7}}>
            {isEn ? '📋 These concepts have appeared on real AP exams' : '📋 这些考点，AP 真题考过'}
          </div>
          {refs.map(function(r, i) {
            var url = AP_CENTRAL[r.exam];
            return (
              <div key={i} style={{
                background: 'white', border: '1px solid #f0c04055', borderLeft: '3px solid #e0a020',
                borderRadius: '0 8px 8px 0', padding: '9px 12px', marginBottom: 7,
              }}>
                <div style={{display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 3}}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4,
                    background: '#fff4d6', color: '#a06800', border: '1px solid #e0a02055',
                  }}>📋 {isEn ? 'REAL EXAM' : '真题'} · {r.year}</span>
                  <span style={{fontSize: 11, color: HC.textSec, fontWeight: 600}}>{r.exam} {r.type}</span>
                  {r.confidence === 'medium' && (
                    <span style={{fontSize: 10, color: HC.textSec, opacity: 0.7}}>{isEn ? '· related' : '· 相关'}</span>
                  )}
                </div>
                <div style={{fontSize: 13, color: HC.text, lineHeight: 1.6}}>{renderInlineMd(r.theme)}</div>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block', marginTop: 5, fontSize: 11.5, color: HC.accent, fontWeight: 600, textDecoration: 'none',
                  }}>{isEn ? 'See the official question on College Board →' : '到 College Board 官方看原题 →'}</a>
                )}
              </div>
            );
          })}
        </div>
      )}

      {pqs.length > 0 && (
        <div>
          <div style={{fontSize: 12.5, fontWeight: 700, color: '#2a7d2a', marginBottom: 7}}>
            {isEn ? '✍️ AP-style practice (written by us)' : '✍️ AP 仿真练习（我们原创）'}
          </div>
          {pqs.map(function(q, i) { return <PracticeCard key={i} q={q} isEnglish={isEn} />; })}
        </div>
      )}
    </div>
  );
}
