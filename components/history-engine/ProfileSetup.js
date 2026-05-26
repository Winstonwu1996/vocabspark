// ─── history-engine: ProfileSetup（首次画像设置）─────────────────────
// 从 pages/history.js 抽出，供历史首页 (pages/history/index.js) 与单课页
// (pages/history/[topicId].js) 共用。props: vocabProfile, parsedFields, onSave。
// 安全：只存 localStorage（onSave 落 saveHistoryProfile），不收敏感信息、不建账号。
import React, { useState, useEffect } from 'react';
import { FONT_DISPLAY, S } from '../../lib/theme';
import { inferCurriculum } from '../../lib/curriculum-data';
import { HC } from './theme';

export function ProfileSetup(props) {
  var vocabProfile = props.vocabProfile || "";
  var parsedFields = props.parsedFields || {};
  var [step, setStep] = useState(vocabProfile ? "choose" : "fill");

  var [name, setName] = useState(parsedFields.userName || "");
  var [age, setAge] = useState(parsedFields.userAge || 13);
  var [grade, setGrade] = useState(7);
  var [city, setCity] = useState("");
  var [fromCity, setFromCity] = useState(parsedFields.userPriorCity && parsedFields.userPriorCity !== "中国" ? parsedFields.userPriorCity : "");
  var [schoolName, setSchoolName] = useState("");
  var [schoolType, setSchoolType] = useState("public");
  var [interest, setInterest] = useState("");
  var [parentWord, setParentWord] = useState("爸妈");
  var [previewCurriculum, setPreviewCurriculum] = useState(null);

  // 实时预览课程推断
  useEffect(function() {
    if (city && grade) {
      setPreviewCurriculum(inferCurriculum({ city: city, schoolType: schoolType, grade: grade }));
    } else {
      setPreviewCurriculum(null);
    }
  }, [city, schoolType, grade]);

  var importFromVocab = function() {
    // O4：优先用从 profile 解析出的 city；只有完全没解析到才回退到"待用户填"
    var detectedCity = parsedFields.userCity || "";
    if (!detectedCity && !window.confirm("从 Vocab 画像没解析到具体城市 — 默认按 Irvine 推断课程。要继续还是手动填？\n\n确定 = 用 Irvine 默认\n取消 = 手动填")) {
      setStep("fill");
      return;
    }
    var profile = {
      name: parsedFields.userName || "",
      age: parsedFields.userAge || 13,
      grade: 7,
      city: detectedCity || "Irvine",
      schoolName: parsedFields.userSchool || "",
      schoolType: "public",
      interest: parsedFields.userInterest || "",
      parentWord: parsedFields.userParentWord || "爸妈",
      sourceFromVocab: true,
    };
    props.onSave(profile);
  };

  var saveManual = function() {
    if (!name.trim() || !city.trim()) {
      alert("请填名字 + 现在的城市");
      return;
    }
    props.onSave({
      name: name.trim(),
      age: parseInt(age) || 13,
      grade: parseInt(grade) || 7,
      city: city.trim(),
      fromCity: fromCity.trim(),  // #1：家乡城市，可空（默认按 "中国" 处理）
      schoolName: schoolName.trim(),
      schoolType: schoolType,
      interest: interest.trim(),
      parentWord: parentWord || "爸妈",
    });
  };

  // 5-5 R2: 稍后再说 — 用 placeholder profile 跳过 setup, 不阻塞学习
  var saveSkipped = function() {
    props.onSave({
      name: "你",
      age: 13,
      grade: 7,
      city: "Irvine",
      fromCity: "中国",
      schoolName: "",
      schoolType: "public",
      interest: "",
      parentWord: "爸妈",
      placeholder: true,  // AI prompt 见到 placeholder=true 跳过个性化字段
    });
  };

  return (
    <div style={{padding: "16px 0"}}>
      <div style={{
        background: HC.parchmentHi,
        border: "1px solid " + HC.parchmentLo,
        borderRadius: 16,
        padding: 20,
        marginBottom: 14
      }}>
        <h2 style={{margin: "0 0 6px", fontFamily: FONT_DISPLAY, fontSize: 20, color: HC.ink}}>
          👋 第一次来 — 先认识一下
        </h2>
        <p style={{margin: "0 0 16px", fontSize: 13.5, color: HC.text, lineHeight: 1.5}}>
          AI 用<strong>你的名字</strong>跟你说话，用<strong>你学校的实情</strong>讲历史。给我们 30 秒，准确度差很大。
        </p>

        {/* ── Tab 切换 ── */}
        {vocabProfile && step === "choose" && (
          <div style={{
            display: "grid", gap: 10, marginBottom: 16
          }}>
            <button
              onClick={importFromVocab}
              style={{
                padding: "14px 16px",
                background: HC.accent,
                color: "#fff8e8",
                border: "none",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              📥 从 Vocab 模块的画像导入<br/>
              <span style={{fontSize: 11, opacity: 0.85, fontWeight: 400}}>识别到: {parsedFields.userName || "你"} · {parsedFields.userAge}岁 · {parsedFields.userSchool}</span>
            </button>
            <button
              onClick={function() { setStep("fill"); }}
              style={{
                padding: "12px 16px",
                background: HC.card,
                color: HC.ink,
                border: "1px solid " + HC.border,
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              ✏️ 我自己手动填（更准确）
            </button>
          </div>
        )}

        {step === "fill" && (
          <div style={{display: "flex", flexDirection: "column", gap: 12}}>
            <Field label="名字 *" required>
              <input value={name} onChange={function(e){setName(e.target.value);}} placeholder="如 Willow" style={S.input} />
            </Field>

            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10}}>
              <Field label="年级">
                <select value={grade} onChange={function(e){setGrade(e.target.value); setAge(5 + parseInt(e.target.value));}} style={S.input}>
                  <option value={6}>6 年级</option>
                  <option value={7}>7 年级</option>
                  <option value={8}>8 年级</option>
                  <option value={9}>9 年级</option>
                </select>
              </Field>
              <Field label="年龄">
                <input type="number" value={age} onChange={function(e){setAge(e.target.value);}} style={S.input} />
              </Field>
            </div>

            <Field label="所在城市 *" required hint="如 Irvine / Cupertino / Bellevue / Boston">
              <input value={city} onChange={function(e){setCity(e.target.value);}} placeholder="Irvine" style={S.input} />
            </Field>

            <Field label="来美国之前的家乡（选填）" hint="如 上海 / 北京 / 深圳 / 成都 — 让 AI 用你的家乡当历史锚点">
              <input value={fromCity} onChange={function(e){setFromCity(e.target.value);}} placeholder="上海" style={S.input} />
            </Field>

            <Field label="学校类型">
              <div style={{display: "flex", gap: 6, flexWrap: "wrap"}}>
                {[
                  { v: "public",        l: "🏫 公立" },
                  { v: "private",       l: "🎓 私立" },
                  { v: "international", l: "🌍 国际学校" },
                  { v: "homeschool",    l: "🏠 在家学" },
                ].map(function(opt) {
                  var active = schoolType === opt.v;
                  return (
                    <button key={opt.v} onClick={function(){setSchoolType(opt.v);}} style={{
                      padding: "8px 14px",
                      background: active ? HC.accent : HC.card,
                      color: active ? "#fff8e8" : HC.text,
                      border: "1px solid " + (active ? HC.accent : HC.border),
                      borderRadius: 999, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}>{opt.l}</button>
                  );
                })}
              </div>
            </Field>

            <Field label="学校名（选填）" hint="如 XX Middle School / 你的初中名字">
              <input value={schoolName} onChange={function(e){setSchoolName(e.target.value);}} placeholder="" style={S.input} />
            </Field>

            <Field label="兴趣（选填）" hint="AI 会用来打类比，但不会硬塞">
              <input value={interest} onChange={function(e){setInterest(e.target.value);}} placeholder="如 K-pop / 王者荣耀 / 篮球" style={S.input} />
            </Field>

            <Field label="家长称呼（选填）">
              <div style={{display: "flex", gap: 6}}>
                {["爸妈", "妈妈", "爸爸", "外公", "奶奶"].map(function(p) {
                  var active = parentWord === p;
                  return (
                    <button key={p} onClick={function(){setParentWord(p);}} style={{
                      padding: "6px 12px",
                      background: active ? HC.teal : HC.card,
                      color: active ? "#fff" : HC.text,
                      border: "1px solid " + (active ? HC.teal : HC.border),
                      borderRadius: 999, fontSize: 12, cursor: "pointer", fontFamily: "inherit"
                    }}>{p}</button>
                  );
                })}
              </div>
            </Field>

            {/* ── 课程推断实时预览 ── */}
            {previewCurriculum && (
              <div style={{
                marginTop: 8,
                padding: "12px 14px",
                background: HC.tealLight,
                borderRadius: 10,
                fontSize: 12.5,
                color: HC.text,
                lineHeight: 1.5,
                borderLeft: "3px solid " + HC.teal,
              }}>
                <div style={{fontWeight: 700, color: HC.teal, marginBottom: 4}}>
                  🎯 推断你的课程: <span style={{
                    fontSize: 10, marginLeft: 6, padding: "1px 6px",
                    background: previewCurriculum.confidence === "high" ? HC.green :
                               previewCurriculum.confidence === "medium" ? HC.gold : HC.textSec,
                    color: "#fff", borderRadius: 999,
                  }}>{previewCurriculum.confidence === "high" ? "✓ 已对齐" : previewCurriculum.confidence === "medium" ? "大致符合" : "通用版（具体看学校）"}</span>
                </div>
                <div><strong>{previewCurriculum.name}</strong></div>
                <div style={{fontSize: 11.5, marginTop: 4, opacity: 0.9}}>{previewCurriculum.framework}</div>
                {previewCurriculum.gradeTextbook && <div style={{fontSize: 11, marginTop: 4, opacity: 0.8}}>📚 {previewCurriculum.gradeTextbook}</div>}
                {previewCurriculum.magnaCartaQuarter && <div style={{fontSize: 11, marginTop: 2, opacity: 0.8}}>📅 Magna Carta 通常: {previewCurriculum.magnaCartaQuarter}</div>}
                {previewCurriculum.note && <div style={{fontSize: 11, marginTop: 6, opacity: 0.75, fontStyle: "italic"}}>{previewCurriculum.note}</div>}
              </div>
            )}

            <div style={{display: "flex", gap: 8, marginTop: 6}}>
              {vocabProfile && (
                <button onClick={function() { setStep("choose"); }} style={{
                  padding: "10px 16px", background: "transparent", color: HC.textSec,
                  border: "1px solid " + HC.border, borderRadius: 999, fontSize: 13, cursor: "pointer", fontFamily: "inherit"
                }}>← 用 Vocab 画像</button>
              )}
              <button onClick={saveManual} disabled={!name.trim() || !city.trim()} style={{
                flex: 1,
                padding: "12px 20px",
                background: HC.accent,
                color: "#fff8e8",
                border: "none",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                opacity: (!name.trim() || !city.trim()) ? 0.5 : 1,
              }}>开始学习 →</button>
            </div>
            {/* 5-5 R2: 稍后再说 — 不阻塞,用 placeholder profile 直接进 */}
            <div style={{
              marginTop: 12, textAlign: "center",
            }}>
              <button onClick={saveSkipped} style={{
                background: "transparent",
                border: "none",
                color: HC.textSec,
                fontSize: 12,
                cursor: "pointer",
                fontFamily: "inherit",
                textDecoration: "underline",
                opacity: 0.85,
                padding: 4,
              }}>稍后再填,先开始学 →</button>
              <div style={{
                fontSize: 10.5, color: HC.textSec,
                fontStyle: "italic", marginTop: 2, opacity: 0.7,
              }}>
                AI 会用通用方式跟你聊,随时可以回来填画像让 AI 用你名字 / 学校讲
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── 表单 Field 包装 ─────────────────────────────────────────────
export function Field(props) {
  return (
    <div>
      <div style={{fontSize: 12, fontWeight: 600, color: HC.ink, marginBottom: 4}}>
        {props.label}
      </div>
      {props.children}
      {props.hint && <div style={{fontSize: 11, color: HC.textSec, marginTop: 3, opacity: 0.8}}>{props.hint}</div>}
    </div>
  );
}
