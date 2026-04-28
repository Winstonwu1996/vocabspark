// ─── History Narratives Loader ─────────────────────────────────────
//
// 读取 lib/history-narratives/{topicId}.md 文件，分离 frontmatter 和正文。
// 客户端 / 服务端通用（Node fs + 浏览器 fetch 两种环境）。
//
// 使用：
//   const { metadata, body } = await loadNarrative('magna-carta-1215');
//   metadata.textbookAnchor.page  → 213
//   body                          → 完整 markdown 文本（无 frontmatter）
//
// 设计：
//   - frontmatter 解析做得简单（不引 yaml lib），按 vocabspark 项目 narrative
//     约定的有限子集解析就够
//   - body 原样返回 markdown，不渲染——会被直接塞进 DeepSeek system prompt
//

import fs from 'node:fs';
import path from 'node:path';

// ── 路径常量 ──
var NARRATIVE_DIR = path.resolve(
  // 在 Next.js Pages 环境下 process.cwd() 是项目根
  // 在 scripts/ 环境下也以项目根为基准
  process.cwd(),
  'lib/history-narratives'
);

// ── frontmatter 解析（极简版，仅支持本项目用到的子集）──
// 支持：string / number / boolean / nested object / array of strings / multi-line string
//
// 关键改进：empty-value key（`foo:` 不带 inline value）的实际类型（object vs array）
// 在看到第一个子项时才决定 — 先不 push stack，等下一行揭晓。
var parseFrontmatter = function(text) {
  var lines = text.split('\n');
  var result = {};
  // stack 项：{ obj, indent, parent, key, isArrayContainer }
  // parent + key 用于在确认是 array 时把 parent[key] 从 {} 改成 []
  var stack = [{ obj: result, indent: -1, parent: null, key: null }];

  // pendingKey: 已声明但还没决定类型的 key
  // 等下一行（更深 indent）来决定是 array / object / 没有子项（保持空字符串）
  var pendingKey = null;       // { parent, key, indent }

  var resolvePending = function(nextLineIsArrayItem) {
    if (!pendingKey) return null;
    var pk = pendingKey;
    pendingKey = null;
    if (nextLineIsArrayItem) {
      pk.parent[pk.key] = [];
      return pk;  // caller pushes array container onto stack if needed
    } else {
      pk.parent[pk.key] = {};
      stack.push({ obj: pk.parent[pk.key], indent: pk.indent, parent: pk.parent, key: pk.key });
      return pk;
    }
  };

  var flushPendingAsEmpty = function() {
    if (!pendingKey) return;
    pendingKey.parent[pendingKey.key] = '';
    pendingKey = null;
  };

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) continue;

    var indent = line.match(/^\s*/)[0].length;
    var trimmed = line.trim();
    var isArrayItem = trimmed.startsWith('- ');

    // 处理 pendingKey：当前行 indent 比 pendingKey.indent 深 → 揭晓类型
    if (pendingKey && indent > pendingKey.indent) {
      resolvePending(isArrayItem);
    } else if (pendingKey && indent <= pendingKey.indent) {
      flushPendingAsEmpty();
    }

    // 弹栈到正确的父级
    while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
      stack.pop();
    }
    var parent = stack[stack.length - 1].obj;

    // array item: "  - value"
    if (isArrayItem) {
      var val = trimmed.slice(2).trim();
      // 当前 parent 应该是数组（如果上面 resolvePending(true) 已设置）
      // 或者 parent 本身就是 array
      if (Array.isArray(parent)) {
        parent.push(stripQuotes(val));
      } else {
        // parent 是 object — 找最近一个 array 字段
        var keys = Object.keys(parent);
        var lastKey = keys[keys.length - 1];
        if (Array.isArray(parent[lastKey])) {
          parent[lastKey].push(stripQuotes(val));
        }
      }
      continue;
    }

    // key: value 或 key:
    var colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;
    var key = trimmed.slice(0, colonIdx).trim();
    var rawValue = trimmed.slice(colonIdx + 1).trim();

    if (rawValue === '|') {
      // multi-line string
      var lines2 = [];
      var j = i + 1;
      var minSubIndent = Infinity;
      while (j < lines.length) {
        var subLine = lines[j];
        if (subLine.trim() === '') { lines2.push(''); j++; continue; }
        var subIndent = subLine.match(/^\s*/)[0].length;
        if (subIndent <= indent) break;
        minSubIndent = Math.min(minSubIndent, subIndent);
        lines2.push(subLine);
        j++;
      }
      parent[key] = lines2.map(function(l) {
        return l.length >= minSubIndent ? l.slice(minSubIndent) : l;
      }).join('\n').trim();
      i = j - 1;
    } else if (rawValue === '') {
      // 类型未定 — 等下一行
      pendingKey = { parent: parent, key: key, indent: indent };
    } else {
      // inline value
      parent[key] = parseValue(rawValue);
    }
  }

  // 文件结束时若还有 pending — flush
  flushPendingAsEmpty();

  return result;
};

var stripQuotes = function(s) {
  if (!s) return s;
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
};

var parseValue = function(s) {
  s = s.trim();
  // inline object: { cn: "...", en: "..." }
  if (s.startsWith('{') && s.endsWith('}')) {
    var inner = s.slice(1, -1).trim();
    var obj = {};
    // 简化：只支持 key: "string-value" 的 inline pair，逗号分隔
    var pairs = splitInlinePairs(inner);
    pairs.forEach(function(p) {
      var ci = p.indexOf(':');
      if (ci === -1) return;
      var k = p.slice(0, ci).trim();
      var v = p.slice(ci + 1).trim();
      obj[k] = stripQuotes(v);
    });
    return obj;
  }
  // boolean
  if (s === 'true') return true;
  if (s === 'false') return false;
  // number
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  // string with quotes
  return stripQuotes(s);
};

// 拆分 "k1: v1, k2: v2" 但尊重引号内的逗号
var splitInlinePairs = function(s) {
  var pairs = [];
  var depth = 0, inStr = false, strCh = null, start = 0;
  for (var i = 0; i < s.length; i++) {
    var ch = s[i];
    if (inStr) {
      if (ch === strCh && s[i-1] !== '\\') { inStr = false; strCh = null; }
      continue;
    }
    if (ch === '"' || ch === "'") { inStr = true; strCh = ch; continue; }
    if (ch === '{' || ch === '[') depth++;
    if (ch === '}' || ch === ']') depth--;
    if (ch === ',' && depth === 0) {
      pairs.push(s.slice(start, i).trim());
      start = i + 1;
    }
  }
  if (start < s.length) pairs.push(s.slice(start).trim());
  return pairs;
};

// ── 主 API：loadNarrative(topicId) ──
export var loadNarrative = function(topicId) {
  if (!topicId) throw new Error('topicId required');
  var filePath = path.join(NARRATIVE_DIR, topicId + '.md');
  if (!fs.existsSync(filePath)) {
    throw new Error('Narrative file not found: ' + filePath);
  }
  var raw = fs.readFileSync(filePath, 'utf-8');
  return parseRawNarrative(raw);
};

// ── 服务端 API：纯字符串解析（给 SSR / API route 用）──
export var parseRawNarrative = function(raw) {
  // 切分 frontmatter 与 body
  var fmStart = raw.indexOf('---');
  if (fmStart !== 0) {
    return { metadata: {}, body: raw };
  }
  var fmEnd = raw.indexOf('\n---', 3);
  if (fmEnd === -1) {
    return { metadata: {}, body: raw };
  }
  var fmContent = raw.slice(3, fmEnd).trim();
  var body = raw.slice(fmEnd + 4).trim();
  var metadata = parseFrontmatter(fmContent);
  return { metadata: metadata, body: body };
};

// ── 检查 narrative 是否存在（Topic 数据可以用这个判断走新还是旧路径）──
export var hasNarrative = function(topicId) {
  var filePath = path.join(NARRATIVE_DIR, topicId + '.md');
  return fs.existsSync(filePath);
};

// ── 列出所有可用 narrative ──
export var listNarratives = function() {
  if (!fs.existsSync(NARRATIVE_DIR)) return [];
  return fs.readdirSync(NARRATIVE_DIR)
    .filter(function(f) { return f.endsWith('.md') && f !== 'README.md'; })
    .map(function(f) { return f.replace('.md', ''); });
};
