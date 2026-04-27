# Schema: Events

Each `events/{id}.json` represents a discrete historical event.

```jsonc
{
  "id": "magna-carta-1215",
  "wikidataId": "Q133539",

  "name": {
    "en": "Magna Carta (signing at Runnymede)",
    "cn": "大宪章签订",
    "alternates": ["Great Charter of 1215", "Charter of Liberties"]
  },

  "date": "1215-06-15",              // single date OR range below
  "dateRange": null,                  // {start: "...", end: "..."} for multi-day
  "approximateDate": false,            // true if "circa"

  "place": {
    "id": "runnymede",                // KB places ref
    "lon": -0.5642,
    "lat": 51.4444
  },

  "civilization": "medieval-england",
  "topicsAppearing": ["magna-carta", "us-constitution"],

  "actors": ["king-john", "stephen-langton", "rebel-barons-1215"],

  "duration": "1 day signing; year-long crisis 1214-1216",

  "consequences": [                    // causal chain — what this event led to
    {
      "id": "annulment-by-pope-1215",
      "delay": "70 days",
      "actor": "pope-innocent-iii"
    },
    {
      "id": "reissue-1216",
      "delay": "10 months",
      "actor": "henry-iii"
    },
    {
      "id": "habeas-corpus-act-1679",
      "delay": "464 years",
      "note": "Concept evolved over centuries — habeas corpus is NOT in 1215 document"
    }
  ],

  "summary": {
    "en": "On 15 June 1215, King John affixed his seal to a charter of 63 clauses presented by rebel barons at Runnymede. The document constrained royal authority by codifying baronial privileges and limited due process protections. Pope Innocent III annulled it 10 weeks later. The 1225 reissue under Henry III became the canonical version.",
    "cn": "1215 年 6 月 15 日，约翰国王在 Runnymede 草场被反叛贵族强迫盖印一份 63 条的特许状。该文件规范贵族特权 + 限定王权 + 给一些 due process 保护。教皇 Innocent III 7 月就废除了它。1225 年亨利三世重新颁布的版本才成为后世引用的版本。"
  },

  "commonMisconceptions": [
    {
      "claim": "Pope Innocent III supported the signing",
      "correction": "Pope annulled it on 24 August 1215 in the bull Etsi karissimus, calling it 'shameful and demeaning'. The barons rejected the annulment, leading to the First Barons' War.",
      "severity": "high"
    },
    {
      "claim": "Magna Carta established habeas corpus",
      "correction": "Habeas corpus as a procedural mechanism crystallized in the Habeas Corpus Act 1679. Magna Carta Clause 39 is an EARLIER ANCESTOR that the later term draws on, but conflating them is anachronistic.",
      "severity": "high"
    },
    {
      "claim": "Magna Carta protected ordinary people",
      "correction": "Of 63 clauses, only 1-2 reference 'free men' broadly; most protect baronial-class privileges. Universal applicability is a 17th-century re-reading. Period peasants experienced raised taxes after the barons won.",
      "severity": "medium"
    }
  ],

  "neutralityNotes": "Avoid 'birth of democracy' or 'first step toward modern liberty' framing — these are post-hoc readings. Frame as: an elite-class compromise that, *centuries later*, was selectively re-interpreted as a foundation for broader rights. Compare structurally to contemporaneous Chinese institutional reforms (Wang Anshi 1069 reforms, Sima Guang's conservative response 1085) which addressed analogous problems (royal power vs. elite checks) with different solutions.",

  "sources": [
    "https://www.wikidata.org/wiki/Q133539",
    "https://www.bl.uk/magna-carta/articles/magna-carta-an-introduction"
  ]
}
```

## Validation rules

- `consequences[].delay` must be human-readable + match KB events if `id` provided
- `commonMisconceptions` mandatory for any event with `severity: high` known issues
- `neutralityNotes` mandatory for any event in 高中 / AP coverage
