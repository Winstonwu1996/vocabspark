# Willow Summer Check-in

Created: 2026-05-31

## Scope

Small local-first Know U. Learning tool for Willow's 2026 China summer study plan.

- Route: `/summer-checkin`
- Date range: 2026-06-09 through 2026-07-13, 35 check-in days
- Context: arrives in China 2026-06-07 at 13:00, uses 2026-06-08 for jet lag, returns to the U.S. 2026-07-14 morning
- Math teacher plan: 3 lessons/week

## Learning Lines

- Daily math/science/logic: math teacher lesson on class days, otherwise Brilliant 3 units
- Daily English reading: at least 40 minutes in a quiet block
- Daily Vocab: 30 new words plus review
- Daily History: two-day Topic cycle. Each Topic has 3 lenses plus review/test; Day 1 = Lens 1 + Lens 2, Day 2 = Lens 3 plus review/test.
- Outdoor activity is encouraged in the overall summer plan but is not tracked as a check-in item because Willow already likes it.
- Short video cap: 40 minutes/day. Long-form video content is governed by content approval, not time approval in this check-in tool.
- Guideline copy reminds Willow to leave enough time for health checks, including teeth, vision, spine, and daily posture.
- Completion behavior: when a selected day reaches 5/5 completion, the page shows a one-time celebratory modal for that day.

## English Diagnosis

Willow's current English test level is roughly California 6th-grade average. Reading and writing are the main weak points, with vocabulary as the foundation. Story/context reading is stronger, around 7th-grade level; argument and science reading are weaker and should be deliberately tracked.

## Persistence

Current implementation stores data in browser localStorage under `knowu_willow_summer_checkin_2026_v1`, with CSV export and JSON copy backup. It intentionally avoids Supabase schema changes, auth, Stripe, and membership paths.
