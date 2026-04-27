#!/usr/bin/env node
/**
 * Atlas renderer smoke + contract tests
 *
 * 不依赖外部测试框架 — node 内置 + assert。
 * 跑：node scripts/test-atlas-renderer.mjs
 *
 * 覆盖：
 *   1. renderView() 对每个 view × historical/modern 都不抛错
 *   2. 输出 props shape 完整（viewBox / landPath / pins / personalMarkers 等）
 *   3. 所有 view 必填字段齐全（防止运行时 null reference）
 *   4. CCW/densify 多边形几何 sanity（输出仍闭合 / 顶点数合理）
 */

import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const { ALL_VIEWS } = await import(path.join(ROOT, 'lib/atlas-views.js'));
const { renderView, renderWorldOverview, projectViewToWorld } = await import(path.join(ROOT, 'lib/atlas-renderer.js'));

let pass = 0, fail = 0;
const failures = [];

function test(name, fn) {
  try {
    fn();
    pass++;
  } catch (e) {
    fail++;
    failures.push({ name, error: e.message });
  }
}

// ── 1. renderWorldOverview() smoke
test('renderWorldOverview returns serializable props', () => {
  const wo = renderWorldOverview();
  assert.ok(wo, 'world overview is null');
  assert.ok(typeof wo.viewBox === 'string', 'viewBox not string');
  assert.ok(typeof wo.landPath === 'string', 'landPath not string');
  assert.ok(Array.isArray(wo.homePoint), 'homePoint not array');
  assert.ok(Array.isArray(wo.nowPoint), 'nowPoint not array');
  // 必须 JSON 可序列化（Next.js getStaticProps 强校验）
  JSON.stringify(wo);
});

// ── 2. 32 个 view × 2 mode 全部 renderView() 不抛
for (const v of ALL_VIEWS) {
  test(`renderView(${v.id}, historical) — no throw + valid shape`, () => {
    const r = renderView(v, 'historical');
    assert.ok(r, 'renderView returned falsy');
    assert.ok(r.viewBox, 'no viewBox');
    assert.ok(r.landPath, 'no landPath');
    assert.ok(Array.isArray(r.politicalPaths), 'politicalPaths not array');
    assert.ok(Array.isArray(r.pins), 'pins not array');
    // P0-9 后：cameraConfig 取代 personalMarkers（personal 投影改客户端做）
    assert.ok(r.cameraConfig && Array.isArray(r.cameraConfig.center), 'cameraConfig missing or invalid');
    JSON.stringify(r); // 必须 JSON 可序列化
  });
  test(`renderView(${v.id}, modern) — no throw`, () => {
    const r = renderView(v, 'modern');
    assert.ok(r, 'renderView returned falsy');
    JSON.stringify(r);
  });
}

// ── 3. projectViewToWorld 不抛
for (const v of ALL_VIEWS) {
  test(`projectViewToWorld(${v.id})`, () => {
    const wl = projectViewToWorld(v);
    assert.ok(wl, 'world location null');
    assert.ok(Array.isArray(wl.centerXY), 'centerXY not array');
  });
}

// ── 4. View shape contract
const REQUIRED = ['id', 'grade', 'topicTier', 'camera', 'title', 'subtitle', 'causalSummary', 'layers'];
for (const v of ALL_VIEWS) {
  test(`view shape: ${v.id}`, () => {
    for (const k of REQUIRED) {
      assert.ok(v[k] !== undefined && v[k] !== null, `missing field: ${k}`);
    }
    assert.ok(v.title.cn && v.title.en, 'title not bilingual');
    assert.ok(v.subtitle.cn && v.subtitle.en, 'subtitle not bilingual');
    assert.ok(v.causalSummary.cn && v.causalSummary.en, 'causalSummary not bilingual');
    assert.ok(['core', 'supplementary'].includes(v.topicTier), `bad topicTier: ${v.topicTier}`);
    assert.ok([5, 6, 7, 8].includes(v.grade), `bad grade: ${v.grade}`);
    assert.ok(Array.isArray(v.camera.center) && v.camera.center.length === 2, 'camera.center invalid');
    if (v.examPoints) {
      assert.ok(Array.isArray(v.examPoints.cn), 'examPoints.cn not array');
      assert.ok(Array.isArray(v.examPoints.en), 'examPoints.en not array');
      assert.equal(v.examPoints.cn.length, v.examPoints.en.length, 'examPoints cn/en length mismatch');
    }
  });
}

// ── 5. ID uniqueness
test('all view ids unique', () => {
  const ids = ALL_VIEWS.map(v => v.id);
  assert.equal(new Set(ids).size, ids.length, 'duplicate view id detected');
});

// ── 报告 ──
console.log(`\n══════════════════════════════════════════════════`);
console.log(`Tests: ${pass} pass · ${fail} fail`);
if (fail > 0) {
  console.log(`\nFailures:`);
  for (const f of failures.slice(0, 20)) {
    console.log(`  ✗ ${f.name}`);
    console.log(`    → ${f.error}`);
  }
  if (failures.length > 20) console.log(`  ... +${failures.length - 20} more`);
  process.exit(1);
}
console.log('✅ All tests passed');
