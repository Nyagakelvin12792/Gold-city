# Phase 3: Entry Triggers, Structural Invalidation, Sizing & Trade Management [UNREVIEWED DRAFT]

## 1. Gold City Narrative

Once Henry's six top-down cameras identify an aligned auction setup, he does not sprint onto the exchange floor throwing gold coins around. Reaching a key price floor is merely a hypothesis. Before placing a single coin on the counter, Henry waits for the floor merchants to confirm that active business is taking place.

Henry stands at Frank's counter and observes the immediate interaction. He watches whether Ben and Clara's real cash is aggressively clearing out Frank's gold offers, or if Frank is standing behind a massive limit wall, quietly absorbing David's credit rush under the table. 

Only when the floor interaction confirms his camera hypothesis does Henry calculate his trade size. He looks at the exact floor where his Gold City story would be proven false (his structural invalidation). He calculates his position size backward from that invalidation floor so that no single trade, no matter how wild the market becomes, ever risks more than a strict 1% to 2% of his total treasury.

---

## 2. Theory

Phase 3 transitions analysis into execution. A common failure mode among retail traders is treating a price level as an automatic entry trigger (e.g. "Price touched VAH, so I must sell"). In Auction Market Theory, a price level represents a potential negotiation location, but order flow provides the proof.

### The Theory of Micro-Confirmation
Reaching a structural volume node (HVN/LVN) or Value Area boundary (VAH/VAL) represents a market hypothesis. Micro-confirmation requires observing aggressive order flow interact with passive limit liquidity at that boundary. If aggressive market orders hit the level and encounter no passive resistance, price glides through. If aggressive orders hit the level and get devoured by passive limit orders without moving price, passive absorption is confirmed.

### Structural Invalidation versus Arbitrary Stops
Invalidation in SVAF is strictly structural, never an arbitrary point percentage, dollar distance, or random trailing stop:
- **Arbitrary Stop (Flawed):** Placing a stop 1% or $500 away from entry because "that is what I am comfortable losing." Market makers regularly hunt these arbitrary levels.
- **Structural Invalidation (Correct):** Placing a stop 1 to 2 ticks beyond the exact structural price level where your auction narrative is proven false (e.g., 1 tick behind Frank's passive limit absorption wall, or 1 tick back inside a broken Value Area). If price prints and accepts volume beyond that structural level, the Gold City story was wrong. You exit immediately.

### Fixed-Risk Variable Distance Position Sizing
Position sizing is calculated backward from your pre-defined risk amount (1% to 2% of portfolio equity) and your structural invalidation distance. Leverage is a tool to optimize margin efficiency, never to increase dollar risk. When structural invalidation is close (tight absorption wall), position size expands proportionately. When structural invalidation is far (wide LVN highway), position size shrinks automatically. In both cases, maximum dollar loss remains identical.

---

## 3. Real Market Translation

Phase 3 translates Henry's execution rules into footprint chart order flow arrays, limit order book depth trackers, and exact mathematical position sizing formulas.

### Metric Category 1: Micro-Entry Triggers
Henry requires at least one of three micro-confirmation triggers on lower-timeframe footprint and DOM charts before entering:
1. **Stacked Footprint Imbalances (3:1 Diagonal Ratio):** Three or more consecutive price ticks showing a 300%+ diagonal buy or sell volume imbalance on a 5m/15m footprint chart, confirming aggressive initiative conviction.
2. **Passive DOM Absorption & Iceberg Reloads:** High aggressive market order volume hitting a DOM level while limit order queue size remains constant (iceberg reload) and footprint Delta halts, confirming passive limit absorption.
3. **Cumulative Volume Delta (CVD) Divergence:** CVD making a lower low while price makes a higher low (bullish absorption), or CVD making a higher high while price fails to advance (bearish absorption).

### Metric Category 2: Structural Invalidation Placement
- **For Long Entries:** Placed 1 to 2 ticks below the lowest price tick of the passive absorption wall or 1 tick below the Value Area Low (VAL) boundary.
- **For Short Entries:** Placed 1 to 2 ticks above the highest price tick of the passive absorption wall or 1 tick above the Value Area High (VAH) boundary.

### Metric Category 3: Position Sizing & Perpetual Futures Math
Position size is calculated using the universal risk equation:

$$\text{Position Size (in BTC)} = \frac{\text{Account Capital in USD} \times \text{Risk Percentage}}{\text{Entry Price} - \text{Invalidation Price}}$$

For USD-margined Perpetual Futures contracts:

$$\text{Contract Size (in USD)} = \text{Position Size (in BTC)} \times \text{Entry Price}$$

### Metric Category 4: Trade Management & Scale-Out Rules
1. **Target 1 (Partial Take Profit - 50% Position):** Executed when price reaches the Session Volume Point of Control (VPOC - Town Center). Immediately move stop loss to entry price (breakeven), eliminating all dollar risk.
2. **Target 2 (Runner - 50% Position):** Held for the opposite Value Area boundary (VAL to VAH) or full LVN highway expansion.
3. **Volume-Based Trailing Stop:** Trail the remaining stop loss behind newly developing 4H Session VPOC nodes or Anchored VWAP (AVWAP) as value migrates.

---

## 4. Litmus Test

The Litmus Test serves as Henry's final execution checklist before placing a trade.

### The Core Question
"Has order flow confirmed my entry trigger at a structural level, and is my position size calculated backward from structural invalidation?"

### Henry's Step-by-Step Diagnostic Process

1. **Verifying Location & Trigger:**
   - *Henry's Question:* "Is price at a pre-mapped Volume Profile floor, and has footprint delta or DOM absorption confirmed entry?"
   - *Gold City Narrative:* Henry stands at Frank's counter. He does not buy until he sees Frank's limit orders absorb the crowd or Ben's spot cash sweep through the door.

2. **Calculating Structural Invalidation:**
   - *Henry's Question:* "Where is the exact price tick where my Gold City narrative is proven false?"
   - *Gold City Narrative:* Henry locates the wall. If price breaks through Frank's table, the story is dead. Stop is placed 1 tick behind the wall.

3. **Calculating Exact Risk Size:**
   - *Henry's Question:* "How many BTC contracts can I buy so that hitting my structural stop loses exactly 1% of my treasury?"
   - *Gold City Narrative:* Henry counts his coins. Wide distance means smaller position; tight distance means larger position. Total dollar risk stays identical.

### Common Trader Mistake
*The Retail Mistake:* Entering a trade with maximum leverage and setting a tight 10-pip arbitrary stop loss because "that's all I want to lose," getting stopped out by random noise seconds before price moves in the intended direction.
*Henry's Rule:* Stop loss belongs where structure invalidates the trade, not where your emotions feel comfortable. Calculate position size from the stop distance, never the stop distance from position size.

### Henry's Execution & Risk Matrix

| Execution Step | Practical Rule | Gold City Meaning | Operational Action |
|---|---|---|---|
| **Step 1: Micro Confirmation** | Wait for 3:1 stacked imbalance or DOM absorption. | Wait for merchants to show their hand at the counter. | Do not enter on price touch alone. Require order flow proof. |
| **Step 2: Invalidation Floor** | Place stop 1-2 ticks behind passive limit wall. | Identify where the city narrative breaks down. | Purely structural. Never use arbitrary dollar stops. |
| **Step 3: Position Sizing** | Risk capped at 1-2% equity. Size = Risk / Stop Distance. | Count total treasury risk before placing coins. | Shrink size for wide stops; expand size for tight stops. |
| **Step 4: Scale-Out Exit** | Close 50% at VPOC; move stop to breakeven. | Lock in gold at the Town Center to eliminate risk. | Target 1 = VPOC; Target 2 = Opposite Value Area wall. |

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Sub-second real-time tracking during active order execution; 5m/15m candle footprint closes for confirmation.
- **Primary Data Sources**:
  - Exocharts & Sierra Chart (Footprint 3:1 Imbalances & Delta Divergence)
  - Bookmap & MobChart (DOM Limit Absorption & Iceberg Reloads)
  - Coinglass & Velo Data (Position Sizing & Liquidation Distance)
