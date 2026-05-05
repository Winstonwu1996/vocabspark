#!/usr/bin/env node
/**
 * Generate-Audio: 批量为 lens storyboard 的 EN content 生成 TTS 音频文件
 *
 * 用法：
 *   node scripts/generate-audio.mjs                     # 全部 Topic × lens × node
 *   node scripts/generate-audio.mjs --topic black-death-1347
 *   node scripts/generate-audio.mjs --topic black-death-1347 --lens agnolo-siena
 *   node scripts/generate-audio.mjs --topic black-death-1347 --lens agnolo-siena --node 1
 *   node scripts/generate-audio.mjs --dry-run            # 仅显示计划，不生成
 *
 * 输出：public/audio/{topic}/{lens}/n{N}.wav  (VibeVoice 原生输出 24kHz mono WAV)
 *
 * 前置（本机）：
 *   git clone https://github.com/microsoft/VibeVoice.git ~/dev/VibeVoice
 *   cd ~/dev/VibeVoice && pip install -e .[streamingtts]
 *   或设环境变量 VIBEVOICE_PATH 指向 VibeVoice repo
 *
 * 跨阶段执行模式：
 *   本脚本先生成 .txt 输入文件 + 调用 VibeVoice Python 脚本（subprocess）
 *   每节点：cn_text.txt → call VibeVoice → save MP3
 *
 * Phase 1.3 当前：仅 Black Death Agnolo lens 12 nodes 试跑
 */

import { promises as fs } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

var __dirname = dirname(fileURLToPath(import.meta.url));
var REPO_ROOT = join(__dirname, '..');
var AUDIO_DIR = join(REPO_ROOT, 'public', 'audio');

// ─── CLI 参数 ──
var args = process.argv.slice(2);
var DRY_RUN = args.includes('--dry-run');
var TOPIC_FILTER = args.includes('--topic') ? args[args.indexOf('--topic') + 1] : null;
var LENS_FILTER = args.includes('--lens') ? args[args.indexOf('--lens') + 1] : null;
var NODE_FILTER = args.includes('--node') ? Number(args[args.indexOf('--node') + 1]) : null;

var VIBEVOICE_PATH = process.env.VIBEVOICE_PATH || join(process.env.HOME, 'dev', 'VibeVoice');

// ─── 加载 voice-map + storyboard ──

async function loadJSON(path) {
  var raw = await fs.readFile(path, 'utf-8');
  return JSON.parse(raw);
}

async function loadStoryboardModule(topicId) {
  // 动态 import lens 文件
  var modPath = join(REPO_ROOT, 'lib', 'history-storyboards', topicId + '.js');
  return import('file://' + modPath);
}

// ─── voice 选择 ──

function pickVoice(voiceMap, topicId, lensId, cosplay) {
  var topicMap = voiceMap[topicId];
  if (!topicMap) return voiceMap._global_default || 'en-Davis_man';

  var lensMap = topicMap[lensId];
  if (lensMap && cosplay && lensMap[cosplay]) {
    return lensMap[cosplay].voice;
  }
  // narrator
  if (cosplay === 'narrator') {
    return topicMap._narrator || voiceMap._global_default || 'en-Davis_man';
  }
  // 没匹配 — 用全局 default
  return voiceMap._global_default || 'en-Davis_man';
}

// ─── 调 VibeVoice Python 脚本 ──

async function runVibeVoice(text, voiceName, outputDir, outputBaseName) {
  var tmpTxtPath = join(outputDir, '.tmp_' + outputBaseName + '.txt');
  var vibeOutput = join(outputDir, '.tmp_' + outputBaseName + '_generated.wav');
  var finalOutput = join(outputDir, outputBaseName + '.wav');

  await fs.writeFile(tmpTxtPath, text, 'utf-8');

  // 优先用 venv python（VIBEVOICE_PATH/.venv/bin/python），fallback 系统 python
  var venvPython = join(VIBEVOICE_PATH, '.venv', 'bin', 'python');
  var pythonExec = 'python';
  try {
    await fs.access(venvPython);
    pythonExec = venvPython;
  } catch (e) { /* 用系统 python */ }

  return new Promise(function (resolve, reject) {
    var pyScript = join(VIBEVOICE_PATH, 'demo', 'realtime_model_inference_from_file.py');
    var pyArgs = [
      pyScript,
      '--model_path', 'microsoft/VibeVoice-Realtime-0.5B',
      '--txt_path', tmpTxtPath,
      '--speaker_name', voiceName.replace('en-', '').split('_')[0],
      '--output_dir', outputDir
    ];

    var proc = spawn(pythonExec, pyArgs, {
      cwd: VIBEVOICE_PATH,
      stdio: ['inherit', 'pipe', 'pipe']
    });

    proc.stdout.on('data', function (data) {
      var s = data.toString();
      if (s.indexOf('Saved') >= 0 || s.indexOf('Error') >= 0 || s.indexOf('Generated') >= 0) {
        process.stdout.write(s);
      }
    });
    proc.stderr.on('data', function (data) {
      var s = data.toString();
      // 过滤进度条 spam
      if (s.indexOf('it/s') < 0 && s.indexOf('it]') < 0) {
        process.stderr.write(s);
      }
    });

    proc.on('close', function (code) {
      fs.unlink(tmpTxtPath).catch(function () {});
      if (code !== 0) {
        reject(new Error('VibeVoice exited code ' + code));
        return;
      }
      // rename .tmp_n5_generated.wav → n5.wav，再用 ffmpeg 转 MP3 (-10x size)
      fs.rename(vibeOutput, finalOutput).then(function () {
        var mp3Output = finalOutput.replace(/\.wav$/, '.mp3');
        var ffmpeg = spawn('ffmpeg', [
          '-y', '-i', finalOutput,
          '-codec:a', 'libmp3lame', '-qscale:a', '4',  // VBR ~128kbps,够语音质量
          mp3Output
        ], { stdio: ['ignore', 'ignore', 'ignore'] });
        ffmpeg.on('close', function (ffCode) {
          if (ffCode === 0) {
            // 转换成功,删 WAV 节省空间(可选——保留 WAV 备份的话注释掉下面这行)
            fs.unlink(finalOutput).catch(function () {});
          }
          resolve();
        });
        ffmpeg.on('error', function () { resolve(); });  // ffmpeg 失败不致命,WAV 还在
      }).catch(function (err) {
        reject(new Error('rename failed: ' + err.message));
      });
    });

    proc.on('error', function (err) {
      reject(err);
    });
  });
}

// ─── 主流程 ──

async function main() {
  console.log('🎙️  Generate-Audio v1');
  console.log('    VibeVoice path:', VIBEVOICE_PATH);
  console.log('    Audio output:', AUDIO_DIR);
  console.log('    Filters: topic=' + (TOPIC_FILTER || 'ALL') + ' lens=' + (LENS_FILTER || 'ALL') + ' node=' + (NODE_FILTER || 'ALL'));
  console.log('    Mode:', DRY_RUN ? 'DRY-RUN' : 'GENERATE');
  console.log('');

  var voiceMap = await loadJSON(join(REPO_ROOT, 'lib', 'audio', 'voice-map.json'));

  // 列出待处理 Topic
  var allTopics = ['magna-carta-1215', 'crusades-1099', 'black-death-1347'];
  var topics = TOPIC_FILTER ? [TOPIC_FILTER] : allTopics;

  var totalGen = 0;
  var totalSkip = 0;

  for (var ti = 0; ti < topics.length; ti++) {
    var topicId = topics[ti];
    var mod;
    try {
      mod = await loadStoryboardModule(topicId);
    } catch (e) {
      console.warn('  ⚠️  跳过 ' + topicId + '（无法加载 storyboard）：' + e.message);
      continue;
    }

    var lenses = mod.lenses;
    if (!lenses) {
      console.warn('  ⚠️  ' + topicId + ' 无 lenses export');
      continue;
    }

    var lensIds = Object.keys(lenses);
    if (LENS_FILTER) {
      lensIds = lensIds.filter(function (l) { return l === LENS_FILTER; });
    }

    for (var li = 0; li < lensIds.length; li++) {
      var lensId = lensIds[li];
      var lens = lenses[lensId];
      var nodes = lens.storyboard;

      console.log('\n📂 ' + topicId + ' / ' + lensId + '（' + nodes.length + ' nodes）');

      var lensOutputDir = join(AUDIO_DIR, topicId, lensId);
      if (!DRY_RUN) {
        await fs.mkdir(lensOutputDir, { recursive: true });
      }

      for (var ni = 0; ni < nodes.length; ni++) {
        var node = nodes[ni];
        if (NODE_FILTER && node.id !== NODE_FILTER) continue;

        var enText = node.content && node.content.en;
        if (!enText) {
          console.log('  [n' + node.id + '] ⚠️  no EN content, skip');
          continue;
        }

        var voiceName = pickVoice(voiceMap, topicId, lensId, node.cosplay);
        var outputMP3 = join(lensOutputDir, 'n' + node.id + '.mp3');
        var outputWAV = join(lensOutputDir, 'n' + node.id + '.wav');  // legacy fallback

        // 已存在 .mp3 或 .wav 则 skip（除非 NODE_FILTER 强制）
        var existsMP3 = false, existsWAV = false;
        try { await fs.access(outputMP3); existsMP3 = true; } catch (e) {}
        try { await fs.access(outputWAV); existsWAV = true; } catch (e) {}
        if ((existsMP3 || existsWAV) && !NODE_FILTER) {
          console.log('  [n' + node.id + '] ✅ 已存在 → skip');
          totalSkip++;
          continue;
        }

        console.log('  [n' + node.id + '] phase=' + node.phase + ' cosplay=' + (node.cosplay || '-') + ' voice=' + voiceName + ' chars=' + enText.length);

        if (DRY_RUN) {
          console.log('    [DRY-RUN] would generate → ' + outputMP3);
          continue;
        }

        try {
          await runVibeVoice(enText, voiceName, lensOutputDir, 'n' + node.id);
          totalGen++;
          console.log('    ✅ ' + outputMP3);
        } catch (e) {
          console.error('    ❌ ' + e.message);
        }
      }
    }
  }

  console.log('\n📊 完成: ' + totalGen + ' 生成 | ' + totalSkip + ' 跳过');
}

main().catch(function (e) {
  console.error(e);
  process.exit(1);
});
