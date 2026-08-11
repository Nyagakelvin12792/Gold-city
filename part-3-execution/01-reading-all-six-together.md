# Phase 1: Reading All Six Cameras Together (The Alignment Matrix & Decision Funnel) [UNREVIEWED DRAFT]

## 1. Gold City Narrative

Every morning at sunrise, long before the first merchant shouts across the trading floor, Henry steps out onto his balcony high above the Gold City central square. Before him sits a custom six-monitor console, each screen displaying a dedicated live feed from one of the city's key observational posts.

For a long time, retail traders in Gold City made a fatal mistake: they stared at a single window, usually Camera 2 right at the floor entrance, watching people sprint back and forth with gold coins. When someone ran through the door buying aggressively, retail traders panicked and bought too. They never looked up at the sky to see if a storm was brewing, nor did they check if the storehouses were overflowing with gold. They were driving a wagon at full speed while staring only at the wheels, completely blind to the road ahead.

Henry built his six-monitor console to cure this blindness. He learned that a single camera gives a snapshot, but six cameras together reveal the living auction story. A market is not a random chaos of price ticks; it is an integrated ecosystem where macro water levels, supply availability, structural district geography, market maker inventory risk, and active floor aggression all tell one single unified story.

When Henry sits down with his morning coffee, he follows a strict **Top-Down Gaze**. He never starts bottom-up from intraday order flow. He sweeps his eyes across his monitors in top-down sequence:

First, he looks high above the city skyline at **Camera 6 (Weather)**. He asks whether Grace is opening the water valves to expand money supply, or if Ivy is running bond auctions that drain cash out of the city streets.

Second, he looks down the mountain roads at **Camera 1 (Supply)**. He checks whether Alice's miners are retaining newly minted gold in inventory, and whether Jonas's ancient vault doors remain sealed.

Third, he looks across the city floorplan at **Camera 3 (Business)**. He maps the city's bustling Market Districts (High Volume Nodes) and empty Highways (Low Volume Nodes) to see if price is rotating inside fair value or attempting a value migration.

Fourth, he looks inside **Camera 5 (Merchant Behavior)**. He inspects Frank's risk hedging desk to see if Frank is operating in Positive Gamma (+GEX, acting as a shock absorber that pins price in place) or Negative Gamma (-GEX, acting like gasoline poured onto an active breakout).

Fifth, he looks down at the exchange counters on **Camera 4 (Waiting Merchants)**. He checks where Frank's passive gold offers and cash bids are waiting closest to active price, applying the Proximity Hierarchy to spot nearby negotiation zones.

Sixth, he looks right at the entrance doors on **Camera 2 (Aggression)**. Only now does he watch who is sprinting through the doors, comparing Spot CVD (Ben and Clara's real cash purchases) against Perpetual Futures CVD (David's borrowed credit).

When Henry completes this top-down sweep, the entire city layout snaps into clarity. He does not guess where price is going. He simply observes which auction scenario is playing out and acts with calm, quiet conviction.

---

## 2. Theory

Reading six camera feeds simultaneously introduces the risk of decision paralysis (analysis paralysis). When six data feeds update in real time, waiting for 100% perfect alignment across all six feeds causes a trader to freeze and miss valid opportunities. SVAF solves this through two fundamental organizational frameworks: the **Decision Funnel** and the **Time-Cadence Rule**.

### The Epiphany of the Integrated Ecosystem
The central epiphany of SVAF auction theory is that no single metric carries predictive power in isolation. An aggressive market order surge on Camera 2 is neither inherently bullish nor bearish. If that surge occurs during an expanding macro weather regime (Camera 6) inside an empty highway (Camera 3), it triggers a massive trend expansion. But if that exact same buying surge hits a passive limit absorption wall (Camera 4) inside a Positive Gamma pinning regime (Camera 5), it triggers an immediate, violent reversal. The meaning of an order flow event is determined entirely by the structural environment in which it occurs.

### The Top-Down Decision Funnel
The Decision Funnel organizes information into three distinct functional tiers, preventing lower-timeframe noise from overriding higher-timeframe reality:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. ENVIRONMENT TIER (Cameras 6 & 1: Weather & Supply)       │
│ - Sets the Macro Background & Playbook Type                 │
│ - Question: Is liquidity expanding or contracting?          │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 2. LOCATION TIER (Camera 3: Volume Profile & Auction Zones) │
│ - Sets the Structural Map & Key Floors                      │
│ - Question: Are we in a District (HVN) or Highway (LVN)?    │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 3. EXECUTION & VETO TIER (Cameras 5, 4, 2: Order Flow)      │
│ - Sets the Trade Trigger or Hard Veto                       │
│ - Question: Is passive absorption or aggression happening?  │
└─────────────────────────────────────────────────────────────┘
```

### The Anti-Paralysis Priority Rules
When cameras present conflicting signals, Henry applies three non-negotiable priority rules to resolve ambiguity instantly:

1. **Environment Trumps Microstructure**: Macro liquidity (Camera 6) and Liquid Float (Camera 1) determine whether you play an aggressive trend-following playbook or a cautious mean-reversion playbook. Environment cameras **never** trigger trades directly; they dictate which setups are permitted.
2. **Location Dictates Relevance**: Order flow metrics (Cameras 2, 4, 5) are evaluated **only** when price reaches a pre-mapped District boundary (VAH/VAL) or Highway (LVN) from Camera 3. If price is floating in the middle of a range, order flow noise is ignored.
3. **Passive Veto Power**: Aggressive order flow (Camera 2) cannot force price through a persistent passive absorption wall (Cameras 4 & 5). When aggressive buying encounters passive limit replenishment, passive liquidity holds veto power over the breakout.

### The Time-Cadence Rule (Preventing Screen Overload)
To prevent multi-screen panic, Henry never watches all six monitors at once. He divides his workflow into three separate time routines:
- **Morning Coffee Routine (Daily/Weekly):** Check Camera 6 (Weather) and Camera 1 (Supply). Record the environment in your notebook and close those tabs for the rest of the day.
- **Pre-Session Mapping (Per 4H Session):** Check Camera 3 (Volume Profile) and Camera 5 (Gamma Flip level). Mark your key floors on your chart and minimize those windows.
- **Active Trade Execution (Live Session):** When price arrives at one of your pre-mapped floors, focus **exclusively** on Camera 4 (DOM) and Camera 2 (CVD/Footprint) for execution triggers and vetoes.

---

## 3. Real Market Translation

Camera integration translates Gold City's physical geography into a structured multi-platform analytical workflow using specialized data series.

### Metric Alignment Matrix
When the six camera feeds interact, they establish three primary market alignment regimes:

| Camera Feed | Full Initiative Alignment | Full Bearish Alignment | Rangebound Rotation Alignment |
|---|---|---|---|
| **Camera 6 (Weather)** | M2 expanding, TGA draining, DXY dropping | M2 shrinking, rates rising, DXY pumping | Macro neutral, ranging liquidity |
| **Camera 1 (Supply)** | Exchange BTC dropping, LTH holding | Exchange inflows surging, CDD spiking | Supply flat, neutral exchange flows |
| **Camera 3 (Profile)** | Price above VAH, migrating to new HVN | Price below VAL, migrating down HVN | Rotating inside Value Area (VAH to VAL) |
| **Camera 5 (Gamma)** | -Gamma short squeeze potential above Flip | -Gamma long liquidation cascade below Flip | +Gamma pinning price near VPOC |
| **Camera 4 (DOM)** | Thin ask depth above, heavy bid walls below | Heavy ask walls above, thin bid depth below | Heavy bid AND ask walls clamping price |
| **Camera 2 (Aggression)** | Spot CVD surging, OI expanding organically | Aggressive spot selling, CVD breakdown | CVD divergence / absorption at bounds |

### Worked Real-Market Scenarios

#### Scenario A: The Highway Breakout (Initiative Value Migration)
- **Environment (Cams 6 & 1):** Global M2 expanding, US Dollar Index (DXY) falling, exchange BTC reserves at multi-month lows (Alice retaining).
- **Location (Cam 3):** Price consolidates at Value Area High (VAH) and pushes out onto an empty Low Volume Node (LVN) highway.
- **Gamma & DOM (Cams 5 & 4):** Price crosses above the Zero-Gamma Flip level into -GEX territory (volatility expansion). Displayed limit ask depth ahead is paper-thin.
- **Aggression (Cam 2):** Spot CVD explodes upward alongside expanding Open Interest, confirming Ben and Clara are aggressively buying physical Bitcoin.
- **Synthesis & Action:** Full Initiative Alignment. Henry deploys **Setup 2: Initiative Highway Breakout** (Phase 2), looking to buy pullbacks to the broken VAH floor.

#### Scenario B: The Failed Migration Snapback (Passive Absorption Reversal)
- **Environment (Cams 6 & 1):** Macro liquidity tightening (10Y yields surging), moderate exchange BTC inflows.
- **Location (Cam 3):** Price pokes above VAH into an LVN highway but fails to consolidate volume or build a new VPOC.
- **Gamma & DOM (Cams 5 & 4):** High Positive Gamma (+GEX) pin resting just below VAH. A massive passive limit ask wall on Bookmap absorbs buyers.
- **Aggression (Cam 2):** Perpetual CVD (David) surges while Spot CVD remains flat. High buying volume produces no price progression (Absorption Divergence).
- **Synthesis & Action:** Passive Veto Alignment. Henry deploys **Setup 1: Failed Migration Snapback** (Phase 2), entering short to target a rotation back to central VPOC and VAL.

#### Scenario C: The District Pin (Responsive Rotation)
- **Environment (Cams 6 & 1):** Neutral macro environment; flat exchange reserves.
- **Location (Cam 3):** Price enclosed between VAH and VAL; VPOC central and well-developed.
- **Gamma & DOM (Cams 5 & 4):** Deep +GEX regime with large call/put open interest clusters clamping price. Heavy bid depth at VAL and heavy ask depth at VAH.
- **Aggression (Cam 2):** Low overall CVD volume; delta turns positive at VAL and negative at VAH.
- **Synthesis & Action:** Rotation Alignment. Henry deploys **Setup 3: Responsive Value Area Rotation** (Phase 2), fading VAH down to VPOC and buying VAL up to VPOC.

---

## 4. Litmus Test

When Henry sits down at his console, he uses this Litmus Test to synthesize all six cameras into a single operational dialogue, eliminating second-guessing and decision paralysis.

### The Core Question
"Does my top-down camera sequence reveal a unified auction story, or am I forcing a trade into conflicting signals?"

### Henry's Step-by-Step Diagnostic Process

1. **Checking the Environment (Cams 6 & 1):**
   - *Henry's Question:* "Is macro liquidity expanding or contracting, and is available supply tight or overcrowded?"
   - *Gold City Narrative:* Henry looks up at the sky and out at the mountain roads. If Grace is opening water valves and Alice is holding gold in her mines, the environment is warm and clear.
   - *Real Market Diagnostic:* Check Global M2, TGA balance (`WTREGEN`), DXY, and Exchange BTC Reserves.
   - *Why This Matters:* Establishes whether today's playbook permits aggressive trend-following or requires cautious range-fading.

2. **Checking the Location (Cam 3):**
   - *Henry's Question:* "Is price sitting at a pre-mapped District boundary (VAH/VAL) or crossing an empty Highway (LVN)?"
   - *Gold City Narrative:* Henry checks his floorplan map. If merchants are trading in the middle of a crowded district, no trade is needed. If price reaches the city boundary or enters an empty alleyway, an auction event is occurring.
   - *Real Market Diagnostic:* Locate price relative to Session Volume Profile (SVP) VAH, VAL, VPOC, and LVNs.
   - *Why This Matters:* Orders executed in middle of fair value carry poor risk-reward. Only trade at profile boundaries.

3. **Checking the Veto & Trigger (Cams 5, 4, 2):**
   - *Henry's Question:* "As price arrives at the floor, is Spot CVD leading the move, and is Frank absorbing or stepping back?"
   - *Gold City Narrative:* Henry looks down at the counter and entrance doors. If David sprints in with borrowed credit but Frank quietly restocks his table with endless gold (absorption), Henry cancels the long trade.
   - *Real Market Diagnostic:* Check Spot vs Perp CVD, Open Interest, Bookmap DOM depth, and Net GEX.
   - *Why This Matters:* Aggressive market orders cannot overcome passive limit absorption walls. Passive liquidity holds final veto power.

### Common Trader Mistake
*The Retail Mistake:* Seeing a 1-minute CVD buying spike and immediately jumping into a long trade, completely blind to the fact that price is trading straight into a massive +GEX pin and passive limit sell wall.
*Henry's Rule:* Never trade bottom-up. Always run the top-down funnel: Environment → Location → Trigger/Veto.

### Henry's Scenario & Practical Bias Guide

| What Henry Sees | Gold City Narrative | What It Means for the Market | Henry's Practical Action Guide |
|---|---|---|---|
| **Full Initiative Alignment** | Weather expanding; supply tight; price breaking VAH into -GEX; Spot CVD surging. | Strong initiative value migration. Market is establishing a new District. | **Deploy Setup 2 (Initiative Breakout).** Buy pullbacks to broken value; hold for next higher HVN district. |
| **Absorption / Rejection Alignment** | Weather tight; price poking VAH into +GEX pin; passive sell wall devouring David's perp rush. | Unfair value rejection. Passive sellers are absorbing aggressive buyers. | **Deploy Setup 1 (Failed Migration Snapback).** Short the failed high; target central VPOC and VAL. |
| **Balanced Rotation Alignment** | Macro neutral; price enclosed between VAH and VAL; deep +GEX; heavy bids at VAL, asks at VAH. | Two-way fair value consensus. Market is rotating in place. | **Deploy Setup 3 (Value Area Rotation).** Fade range extremes back toward central VPOC. |

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Broken into three operational cadences:
  - *Daily / Weekly:* Cameras 6 & 1 (Macro & Supply background).
  - *Per 4H Session:* Cameras 3 & 5 (Profile boundaries & Gamma Flip).
  - *Live Trade Execution:* Cameras 4 & 2 (DOM depth & CVD/Footprint triggers).
- **Primary Data Sources**:
  - FRED & TradingView (`WALCL`, `WTREGEN`, `FEDFUNDS`, `DGS10`, `DXY`)
  - Glassnode & CryptoQuant (Exchange BTC Reserves, LTH Supply, CDD)
  - Exocharts & Sierra Chart (TPO, Session Volume Profiles, Footprint Delta)
  - Amberdata & Genesis Volatility (Net GEX, Zero Gamma Flip)
  - Coinglass, Bookmap & TRDR (Order Book Depth, Liquidation Heatmaps, Spot vs Perp CVD)
