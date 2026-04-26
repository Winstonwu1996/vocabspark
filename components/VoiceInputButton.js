/* ─── Know U. Learning — Voice Input Button ─────────────────────────
 *
 * 移动端 + 桌面端语音转文字。
 * 用 Web Speech API（Chrome/Safari 都支持，免费）。
 *
 * 用法：
 *   <VoiceInputButton onTranscript={text => setInputText(text)} lang="auto" />
 */
import { useEffect, useRef, useState } from 'react';
import { C } from '../lib/theme';

export function VoiceInputButton(props) {
  var [supported, setSupported] = useState(false);
  var [recording, setRecording] = useState(false);
  var [statusMsg, setStatusMsg] = useState(""); // 用户可见的状态反馈
  var recogRef = useRef(null);

  useEffect(function() {
    if (typeof window === "undefined") return;
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    setSupported(!!SR);
    if (!SR) {
      console.warn("[VoiceInput] SpeechRecognition NOT supported in this browser");
    } else {
      console.info("[VoiceInput] SpeechRecognition available");
    }
  }, []);

  var start = function() {
    if (typeof window === "undefined") return;
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      setStatusMsg("浏览器不支持");
      console.warn("[VoiceInput] SR not available at click time");
      return;
    }
    console.info("[VoiceInput] Starting recognition...");
    setStatusMsg("请允许麦克风...");

    var r;
    try {
      r = new SR();
    } catch (e) {
      console.error("[VoiceInput] failed to construct SR:", e);
      setStatusMsg("浏览器错误");
      setTimeout(function(){ setStatusMsg(""); }, 2500);
      return;
    }

    r.continuous = false; // 改 false — Chrome/Safari 兼容性更好
    r.interimResults = true;
    r.lang = props.lang === "auto" ? "zh-CN" : (props.lang || "zh-CN");
    var finalTranscript = "";

    r.onstart = function() {
      console.info("[VoiceInput] onstart");
      setRecording(true);
      setStatusMsg("");
    };
    r.onresult = function(e) {
      var newFinal = "";
      var newInterim = "";
      for (var i = e.resultIndex; i < e.results.length; i++) {
        var t = e.results[i][0].transcript;
        if (e.results[i].isFinal) newFinal += t;
        else newInterim += t;
      }
      console.info("[VoiceInput] result", { final: newFinal, interim: newInterim });
      if (newFinal) {
        finalTranscript += newFinal;
        if (props.onTranscript) props.onTranscript(finalTranscript, "final");
      }
      if (props.onTranscript && newInterim) {
        props.onTranscript(finalTranscript + newInterim, "interim");
      }
    };
    r.onerror = function(e) {
      console.warn("[VoiceInput] onerror:", e.error, e);
      setRecording(false);
      var msg = "失败：" + e.error;
      if (e.error === "not-allowed") msg = "拒绝了麦克风权限";
      else if (e.error === "no-speech") msg = "没听到声音";
      else if (e.error === "network") msg = "网络问题";
      setStatusMsg(msg);
      setTimeout(function(){ setStatusMsg(""); }, 3000);
    };
    r.onend = function() {
      console.info("[VoiceInput] onend (final =", finalTranscript, ")");
      setRecording(false);
      if (finalTranscript && props.onTranscript) {
        props.onTranscript(finalTranscript, "final");
      }
      // 如果一开始就 onend 但 finalTranscript 空，可能权限拒绝
      if (!finalTranscript && !statusMsg) {
        setStatusMsg("没识别到");
        setTimeout(function(){ setStatusMsg(""); }, 2000);
      }
    };
    try {
      r.start();
      recogRef.current = r;
      console.info("[VoiceInput] r.start() called");
    } catch (e) {
      console.error("[VoiceInput] start() throw:", e);
      setRecording(false);
      setStatusMsg("启动失败");
      setTimeout(function(){ setStatusMsg(""); }, 2500);
    }
  };

  var stop = function() {
    console.info("[VoiceInput] manual stop");
    if (recogRef.current) {
      try { recogRef.current.stop(); } catch (e) {}
    }
    setRecording(false);
  };

  if (!supported) return null;

  return (
    <span style={{position: "relative", display: "inline-block"}}>
      <button
        type="button"
        onClick={recording ? stop : start}
        title={recording ? "再点停录" : "点击说话"}
        style={Object.assign({
          background: recording ? "#e53e3e" : (C.tealLight),
          color: recording ? "#fff" : C.text,
          border: "none",
          borderRadius: "50%",
          width: props.size || 36,
          height: props.size || 36,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          flexShrink: 0,
          boxShadow: recording ? "0 0 0 3px rgba(229,62,62,0.18)" : "none",
          animation: recording ? "voicePulse 1.2s infinite" : "none",
          fontFamily: "inherit",
          padding: 0,
        }, props.style || {})}
      >
        {recording ? "🎙️" : "🎤"}
      </button>
      {/* 状态浮泡 */}
      {statusMsg && (
        <div style={{
          position: "absolute",
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: 4,
          padding: "4px 10px",
          background: "rgba(44,36,32,0.92)",
          color: "#fff8e8",
          borderRadius: 6,
          fontSize: 11,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 100,
        }}>{statusMsg}</div>
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes voicePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      ` }} />
    </span>
  );
}
