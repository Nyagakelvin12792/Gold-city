# AGENTS.md — SVAF / Gold City Project Brief

This file is the authoritative context for any agent working on this repo. Read this before writing or editing any content.

## What this project is
A living, GitHub-based curriculum and trading framework for Bitcoin, teaching auction market theory through a fictional city ("Gold City") with named participants, then mapping every concept directly onto real BTC market data, then formalizing it into actual trade entry criteria. Intended future forms: a PDF, a website, or a product where a user inputs current market values and a narrative is generated automatically.

## Non-negotiable rules
- **Participant-first reasoning.** Never reason from price alone. Always ask what participants are trying to accomplish.
- **Gold City narrative always comes first**, before market mechanics, in every chapter.
- **Never forecast or predict direction.** The framework only describes what stage of the auction is occurring, where fair value is, and what participants are attempting.
- **Profile anchoring rule:** Volume/Market Profiles anchor only to genuine auction state transitions (e.g. migration completing or failing). Never to an arbitrary swing high or low.
- **No em dashes**, anywhere, in any content this repo contains.
- **No fake precision.** Every recurring setup in Part III Phase 2 carries a status tag, "hypothesis, not yet backtested" by default. Only update it to "validated" with real statistics from the separate SVAF Python backtesting project. Never state a setup's win rate or reliability without a tag backing it.

## Repo structure
```
SVAF/
  README.md                          human-facing map
  AGENTS.md                          this file
  part-1-gold-city/                  pure narrative + theory, no real markets
  part-2-mapping-to-markets/         each camera translated to real data
  part-3-execution/                  narrative to trade, risk, validation
  atlas/                             geography quick-reference
  assets/                            images/screenshots per chapter, added over time
```

## The chapter template
Every chapter in Part II and Part III follows this exact shape, in this order:
1. **Gold City narrative** — the story, in city terms only
2. **Theory** — the underlying market microstructure concept
3. **Real market translation** — named, trackable data series (tickers, on-chain metrics, specific tools)
4. **Litmus test** — one sentence, the question the trader actually asks each morning
5. **Update frequency / data source** — how often this signal actually changes, and where to check it

## The participant roster (permanent, never rename)
Alice (miner/issuance), Ben (real-world demand), Clara (passive/ETF accumulation), David (leveraged speculator), Edward (large block/whale demand), Frank (market maker, one per price level), Grace (monetary authority/central bank), Ivy (fiscal/Treasury), Jonas (dormant long-term holder), Henry (the trader, the user).

## The geography (permanent)
City → District (HVN zone) → Highway (LVN) → Building (a real exchange venue: Binance, Coinbase, Kraken, OKX) → Floor (a price level). Timeframe (weekly/daily/4H) is a zoom level on Henry's cameras, never a location.

## Current build status
- **Part I (Gold City):** complete, all 5 phases
- **Atlas:** complete
- **Part II Phase 1 (Camera 1, Supply):** complete
- **Part II Phase 2 (Camera 6, Weather):** complete
- **Part II Phase 3 (Camera 3, Business/Volume Profile):** partial, positioning rules done, full narrative+litmus pass still needed
- **Part II Phase 4 (Camera 2, Aggression):** stub only
- **Part II Phase 5 (Camera 4, Waiting Merchants/DOM):** stub only, user has prior study notes to incorporate
- **Part II Phase 6 (Camera 5, Merchant Behavior):** gamma exposure sub-layer complete, heatmaps/icebergs/spoofing still stub
- **Part III (all 5 phases, Execution):** complete, including Risk Management and the Validation status-tag system
- Files for the complete sections do not yet exist in this repo and need to be written from the content specified in this brief plus the user's own expansion during study.

## How to work on this
- Never remove or contradict content marked complete without flagging it to the user first.
- When expanding a stub, follow the chapter template exactly, do not skip the Gold City narrative step even if it feels redundant.
- When adding illustrations or diagrams, tie them to a specific chapter's assets subfolder, keep filenames matching the chapter name.
- The user is actively studying Cameras 2, 4, and 5 (non-gamma) as this repo is being built. Expect these sections to be filled in gradually, in conversation with the user, not generated wholesale in one pass.
- Keep language plain and low-jargon wherever the user's own conversation history (outside this repo) shows a preference for it, particularly in Part II chapters explaining data concepts.
