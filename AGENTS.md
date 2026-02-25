# AGENTS.md — Curator Cards AI Instructions

## Objective
Generate and revise three museum-label-style Curator Cards on design history:
1) Bauhaus (1919–1933)
2) Swiss Style / International Typographic Style (1950s–1970s)
3) Reaction movement: New Wave Typography (1970s–1980s)

## Output Constraints (Non-Negotiable)
- Each card body paragraph is 80–120 words.
- Use domain vocabulary only; avoid vague adjectives like "innovative" or "cool."
- Include exactly 5 vocabulary tags per card.
- Include 2 real source links per card (museum, archive, or credited design source).
- Include this sentence format: "Not to be confused with ___ because ___."
- Include this sentence format: "I verified this by checking ___."
- If unsure, return VERIFY instead of guessing.

## Style Rules
- Tone: precise, educational, museum-label quality.
- Prioritize factual clarity over hype.
- Keep chronology explicit.
- Do not invent quotes, dates, or named people.

## Workflow Rules
1. Explore: generate concept maps and vocabulary lists.
2. Pin: keep only high-confidence items in CURATOR_NOTES.md.
3. Promote: use pinned vocabulary as hard constraints in drafting.
4. Critique: run one Named Expert Critique lens.
5. Verify: log at least one claim per card in CLAIMS.md.

## Required Vocabulary Bank
| Term | Working Definition |
|---|---|
| Vorkurs | Bauhaus preliminary foundation course |
| form follows function | Design decisions should serve use and purpose |
| geometric abstraction | Reducing forms to essential geometry |
| modular grid | Repeatable structural layout framework |
| sans-serif typography | Type without finishing strokes |
| objective typography | Neutral communication with minimal expression |
| asymmetric composition | Balanced layout without mirror symmetry |
| flush-left ragged-right | Left-aligned text with uneven right edge |
| International Typographic Style | Swiss-led postwar systemized typography |
| Akzidenz-Grotesk | Early sans-serif typeface used in Swiss design |
| Helvetica | Neutral sans-serif linked to Swiss design systems |
| figure-ground | Relationship between form and background |
| deconstructed grid | Deliberate disruption of rigid grid order |
| layered typography | Overlapping type and visual planes |
| Basel School | Key site for New Wave experimentation |
| postmodern design | Reaction against strict modernist neutrality |
| experimental composition | Rule-stretching but intentional layout |

## Prohibited Output Patterns
- No fake expert quotes.
- No unsourced claims stated as facts.
- No replacing domain terms with generic mood words.
