# History Knowledge Base

Authoritative facts repository for the History module. All Topic content (`ai_seed`,
`mustMemorize`, `primarySources`, `keyFigures`) must be cross-checkable against this KB.

## Why this exists

History content is fact-dependent: dates, names, attributions, primary source authenticity.
Sarah Chen's 2026-04 audit caught multiple factual errors in just 2 Topics:
- "habeas corpus" listed as 1215 vocab (term first appears 1679)
- "Charlemagne 不识字" (myth — Einhard's *Vita Karoli* says he could read)
- "Tang Code Preface" labeled as primary source but actually editorial paraphrase
- Pope Innocent III "sided with king at signing" (he annulled it Aug 24, 1215, AFTER)

Scaled to 38 Topics × 14 turns × ~100 facts/Topic = 5000+ factual claims.
Without infrastructure, factual drift is inevitable.

## Architecture

```
data/history-knowledge-base/
├── people/             # 历史人物 (King John, Wang Anshi, ...)
├── events/             # 历史事件 (Magna Carta signing, An Lushan rebellion, ...)
├── places/             # 地点 + 坐标 (Runnymede, Chang'an, ...)
├── primary-sources/    # 一手史料 (Clause 39 Latin + BL English + simplified)
├── concepts/           # 抽象概念 (rule of law, due process, mandate of heaven)
└── README.md           # this file
```

Each entity is a JSON file (people/events/places/concepts) or markdown with
frontmatter (primary-sources). All have a `wikidataId` for cross-reference.

## Authoritative source priority

1. **Wikidata** (Q-id mandatory) — structural facts: dates, places, biographical
2. **Primary source URLs** (BL.uk, ctext.org, gutenberg.org) — actual document texts
3. **Curated overrides** — when scholarly consensus contradicts Wikidata or when
   we want to flag misconceptions
4. **Editorial notes** — bias warnings, common misconceptions, neutrality framing

## Tooling

- `scripts/fetch-wikidata-batch.mjs` — bulk-fetch entities from Wikidata, write JSON files
- `scripts/fact-check-topic.mjs` — scan a Topic file, validate dates/names/attributions vs KB
- `scripts/kb-graph-consistency.mjs` — find contradictions across Topics referencing same entity

## Workflow

When authoring a new Topic:

1. **Identify entities first** — list all people / events / places the Topic touches
2. **Run `fetch-wikidata-batch.mjs`** to populate KB for any missing entities
3. **Augment manually** — add `commonMisconceptions`, `neutralityNotes`, `bias warnings`
4. **Author Topic data** — `ai_seed` / `mustMemorize` / etc.
5. **Run `fact-check-topic.mjs`** — must pass before commit
6. **Run Sarah Chen reviewer agent** — pedagogy / neutrality (KB doesn't catch framing)
7. **Commit**

## Schema

See `schema-people.md`, `schema-events.md`, etc. for per-type JSON Schema.

## Civilization neutrality

Every entity file should have:
- Roles framed structurally (not "good king" / "bad king" — context-specific challenges)
- `neutralityNotes` field flagging common biases when this entity is referenced
- No teleological framing ("led to modern X" — we don't pre-judge causation)

This is the same discipline as Sarah Chen's Rule 0:
> Different civilizations' institutions are adaptive solutions to specific
> geographic / climatic / religious / scale constraints, not stages on a
> progress ladder.

## Update cadence

- Wikidata fetched on Topic authoring (not runtime — too slow / external dep)
- Annual full re-fetch via `fetch-wikidata-batch.mjs` to pick up Wikidata edits
- Primary source URLs verified for 200 OK in CI
