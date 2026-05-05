# Audio Setup — VibeVoice 一键朗读

把 lens EN content 批量预生成 MP3，集成到对话 UI 的 🔊 按钮。

## 一次性环境配置（约 30 分钟）

### 1. 装 VibeVoice（Microsoft 开源 TTS）

```bash
# 在你 home 目录里
cd ~/dev   # 没有就先 mkdir -p ~/dev && cd ~/dev
git clone https://github.com/microsoft/VibeVoice.git
cd VibeVoice
pip install -e .[streamingtts]
```

预计装 PyTorch + Transformers + 一些音频依赖，~3-5 GB 磁盘。

如果想装到别的位置，设环境变量：
```bash
export VIBEVOICE_PATH=~/somewhere/VibeVoice
```

### 2. 验证 VibeVoice 自身能跑

```bash
cd ~/dev/VibeVoice
python demo/realtime_model_inference_from_file.py \
  --model_path microsoft/VibeVoice-Realtime-0.5B \
  --txt_path demo/text_examples/1p_vibevoice.txt \
  --speaker_name Carter \
  --output_dir /tmp/vv-test
ls /tmp/vv-test/  # 应该看到 .wav 文件
```

第一次跑会下载 ~1GB 模型（HuggingFace cache 到 `~/.cache/huggingface/`），之后就快了。

**Apple Silicon (M1/M2/M3)**：自动用 MPS 加速，每节点约 30-90 秒。
**Linux + NVIDIA GPU**：自动用 CUDA，每节点约 5-15 秒。
**CPU only**：可跑但慢，每节点 2-5 分钟。

## 跑批生成

### 试跑（仅 Black Death Agnolo 12 nodes）

```bash
cd ~/projects/vocabspark
node scripts/generate-audio.mjs --topic black-death-1347 --lens agnolo-siena
```

时间预估：M1/M2 约 10-15 分钟。

输出：`public/audio/black-death-1347/agnolo-siena/n1.mp3` ~ `n12.mp3`

### Dry-run（看会生成什么但不真做）

```bash
node scripts/generate-audio.mjs --dry-run
```

### 单节点重跑

```bash
node scripts/generate-audio.mjs --topic black-death-1347 --lens agnolo-siena --node 5
```

### 跑所有 Topic 全 lens

```bash
node scripts/generate-audio.mjs
```

时间预估：3 Topics × 9 lenses × 12 nodes = 108 个节点。M1/M2 约 1.5-2 小时。

## 验证 UI 集成

```bash
# 启动 dev server
npm run dev

# 浏览器开
http://localhost:3000/history?topicId=black-death-1347

# 选 Agnolo lens → 进对话 → 默认 EN → AI 气泡下面应有 🔊 朗读 按钮
```

**只显示条件**：
1. EN mode（默认就是）
2. AI 条目是 prewritten（lens 12 nodes 全部）
3. `/audio/{topic}/{lens}/n{N}.mp3` 文件存在

如果文件不存在按钮就不显示——所以批量生成完才能看到所有按钮。

## 切换/调整音色

`lib/audio/voice-map.json` 是配置文件。改完哪个角色就 重新跑这个角色对应 lens 的脚本：

```bash
# 改了 Devorah 的 voice → 重生成 Devorah 12 nodes
rm -rf public/audio/black-death-1347/devorah-strasbourg/
node scripts/generate-audio.mjs --topic black-death-1347 --lens devorah-strasbourg
```

## 部署（Vercel / Next.js）

`public/audio/` 默认作为静态资产部署。
- 总体积 ~50-100 MB（3 Topics × 9 lenses × 12 nodes × ~30 秒 × 320kbps MP3）
- Vercel 静态文件免费 quota 内
- 如果未来规模上来，可以推到 Cloudflare R2（免费 10GB 储存）+ 在 AudioPlayer 改 src 指向 CDN

## 故障排查

### "VibeVoice exited code 1"
- 先单独跑 `python demo/realtime_model_inference_from_file.py ...` 看具体报错
- 常见：PyTorch 版本不匹配 / HuggingFace 下载失败（重试）

### "no EN content, skip"
- 这个 lens node 没有 `content.en`——属于设计预期，跳过即可

### 按钮在 UI 不显示
- DevTools Network 看 `/audio/.../n1.mp3` 是否 200
- 检查 voice-map.json + 文件名约定 `n{N}.mp3`
- 如果是 404，重跑 generate-audio.mjs

### M1/M2 报内存不足
- 关其他大型应用（VS Code 多窗口 / Chrome 大量 tab）
- 或改用 CPU 模式（慢但稳）

## 机制约束（per NEW_TOPIC_CHECKLIST Phase 6 ship）

每次新 Topic ship 前必须：
1. 在 `lib/audio/voice-map.json` 加新角色 → voice 映射
2. 跑 `node scripts/generate-audio.mjs --topic <new-topic-id>` 一次性生成
3. commit `public/audio/<new-topic-id>/` 进 git

不允许 Topic 上线但音频缺失——UI 会自动隐藏按钮，但这是 silent 降级，违反"机制完整"原则。
