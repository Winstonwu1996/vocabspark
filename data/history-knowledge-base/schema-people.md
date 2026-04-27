# Schema: People

Each `people/{id}.json` file represents a historical person.

## Required fields

```jsonc
{
  "id": "king-john",                 // kebab-case; matches filename
  "wikidataId": "Q129324",           // mandatory; for cross-reference

  "name": {
    "en": "John, King of England",
    "cn": "约翰国王",
    "alternates": ["John Lackland", "约翰一世"]  // for fact-check fuzzy matching
  },

  "lifespan": {
    "birth": "1166-12-24",           // ISO 8601, '?' if unknown
    "death": "1216-10-19"
  },

  "civilization": "medieval-england", // matches civs profile in lib/civilizations
  "topicsAppearing": ["magna-carta"]  // back-references to atlas Topic ids
}
```

## Optional fields (fill if relevant)

```jsonc
{
  "roles": [
    {
      "title": "King of England",
      "from": "1199-04-06",
      "to": "1216-10-19",
      "predecessor": "richard-i",   // KB ref
      "successor": "henry-iii"      // KB ref
    }
  ],

  "keyEvents": [                    // events this person is causally linked to
    "magna-carta-1215",
    "loss-of-normandy-1204"
  ],

  "primarySourceQuotes": [           // direct quotes from primary docs
    {
      "text": "Nullus liber homo capiatur...",
      "context": "Magna Carta Clause 39, signed by John 1215-06-15",
      "url": "https://www.bl.uk/magna-carta/...",
      "language": "latin"
    }
  ],

  "commonMisconceptions": [          // ⚡ critical for fact-check
    {
      "claim": "King John was a tyrant who hated his people",
      "correction": "Modern historians frame his policies as rational responses to constraints (loss of French territory, papal interdict, financial pressures). His unpopularity was real but reductive 'tyrant' framing oversimplifies.",
      "severity": "medium"           // low / medium / high
    }
  ],

  "neutralityNotes": "Avoid 'tyrant' framing. Avoid casting Magna Carta as 'liberation' — barons were also self-interested elites. Note that contemporary Chinese reformers (Wang Anshi, Sima Guang) faced analogous court politics.",

  "biographicalSummary": {
    "en": "1-2 sentence neutral summary in English",
    "cn": "中文 1-2 句中性总结"
  },

  "sources": [                       // ⚡ all factual claims must trace to URLs
    "https://www.wikidata.org/wiki/Q129324",
    "https://www.britishmuseum.org/collection/term/BIOG34772"
  ]
}
```

## Validation rules

- `wikidataId` must match `Q\d+` pattern
- `lifespan.birth` and `lifespan.death`: ISO date or `?`
- `civilization` must exist in `lib/atlas-views.js` registered profiles
- `topicsAppearing` must reference existing atlas view ids
- `keyEvents` and `roles.predecessor`/`successor` must reference KB entity ids
- `sources` must be valid URLs (CI lints HTTP 200 annually)
- `commonMisconceptions` strongly recommended for any high-school covered figure

## Example: King John

See `people/king-john.json`.
