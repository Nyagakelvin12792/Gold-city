# Phase 2: Recurring Conditions & Setup Definitions [UNREVIEWED DRAFT]

In SVAF, we do not trade geometric chart patterns, candle shapes, or lagging indicators. We trade **recurring auction conditions** where participant incentives align to create predictable structural market behavior.

When Henry sits down at his console, he is not guessing what pattern might form next. He is hunting for five specific, recurring situations in Gold City where buyer and seller behavior creates a high-probability trade opportunity.

---

> [!IMPORTANT]
> **The SVAF Empirical Status-Tag System**
> To eliminate guesswork and subjective claims, every setup defined in this framework carries an explicit status tag:
> - `[HYPOTHESIS - NOT YET BACKTESTED]`: Default tag for all setups until empirical backtesting is completed.
> - `[VALIDATED - BACKTESTED]`: Applied only when verified against empirical statistics from the separate SVAF Python backtesting engine.
> - `[REJECTED - FAILED BACKTEST]`: Applied if backtesting reveals a profit factor below 1.3 or negative expectancy.
> Never claim a win rate or statistical edge without a `[VALIDATED]` tag backing it.

---

## Setup 1: The Highway Sprint (Initiative Value Migration)
**Status**: `[HYPOTHESIS - NOT YET BACKTESTED]`

### 1. Gold City Narrative
Ben (the factory owner) and Clara (the long-term accumulator) walk onto the exchange floor with heavy chests of real cash. Ben's factory needs gold immediately to fulfill commercial contracts. Finding limited gold offered on the current floor, Ben and Clara pay up, devouring Frank's small inventory.

Finding no passive opposition ahead, Ben and Clara drive price out of the crowded Market District onto an empty Highway (Low Volume Node). Frank, seeing real cash hitting the floor, pulls his ask quotes higher and steps back. Aggressive buyers sprint across the highway toward the next city district without encountering friction.

### 2. Core Auction Ideology (The Epiphany)
*Why does this setup happen?* 
A market remains stuck in balance only as long as passive limit orders match aggressive buying power. When genuine spot accumulation (Ben and Clara) arrives during an expanding macro liquidity regime, passive sell orders are overwhelmed. As price leaves fair value and enters an empty Low Volume Node (LVN), there are no historical trades or passive limit orders to slow price down. Combined with Negative Gamma (-GEX), market makers are forced to buy alongside momentum to hedge their options risk, turning a minor breakout into an explosive, rapid highway sprint.

### 3. Henry's 6-Camera Diagnostic Checklist
Before Henry classifies a move as a true Highway Sprint, he ticks off all six cameras top-down:
- **Camera 6 (Weather):** Global M2 expanding, TGA balance falling (fiscal injection), DXY weak or falling.
- **Camera 1 (Supply):** Exchange BTC reserves declining; Alice (miners) retaining coins; Jonas's vaults locked.
- **Camera 3 (Profile):** Price breaks outside Value Area High (VAH) into an empty Low Volume Node (LVN) highway.
- **Camera 5 (Gamma):** Price crosses above the Zero-Gamma Flip level into Negative Gamma (-GEX) territory.
- **Camera 4 (DOM):** Displayed limit ask depth ahead is paper-thin; ask orders pulling ahead of price.
- **Camera 2 (Aggression):** Spot CVD exploding upward alongside rising Open Interest, confirming real spot buying.

### 4. Henry's Operational Playbook
- **Trade Bias:** Long / Trend Continuation.
- **Entry Trigger:** Price consolidates above VAH on 15m timeframe + Spot CVD leading Perp CVD.
- **Structural Invalidation:** 1 tick back inside the broken Value Area High (VAH). If price re-enters the old district, the breakout hypothesis is false. Exit immediately.
- **Target Destinations:**
  - *Target 1:* Volume Point of Control (VPOC) of the next higher High Volume Node (HVN) district.
  - *Target 2:* Value Area High (VAH) of the higher HVN district.

---

## Setup 2: The Brick Wall Rejection (Failed Migration Snapback)
**Status**: `[HYPOTHESIS — NOT YET BACKTESTED]`

### 1. Gold City Narrative
David (the speculator) storms onto the exchange floor shouting buy orders, bringing a noisy crowd of leveraged traders behind him. David does not have real cash; he is borrowing credit to bet on price. He attempts to force price out of the Market District onto the highway.

However, behind the counter sits Frank, standing in front of a massive, hidden storehouse of gold. As David's crowd buys aggressively, Frank quietly restocks his counter under the table, absorbing every buy order without his booth ever running short. David's crowd expends all their borrowed credit against Frank's brick wall. Realizing they cannot push price higher, panic sets in. Lenders demand their credit back, forcing long liquidations, and price snaps violently back across the entire district to the central Town Center.

### 2. Core Auction Ideology (The Epiphany)
*Why does this setup happen?* 
Aggressive market orders alone cannot move price if a large passive limit trader (or market maker) is willing to absorb that volume. When speculative buyers (David) chase a breakout using leveraged futures without spot backing, they hit a wall of passive limit sell orders. High buying volume produces zero price progress (**Absorption Divergence**). Once aggressive buyers exhaust their buying power, market makers and responsive sellers push price back into the range, triggering a cascading long liquidation squeeze back to fair value.

### 3. Henry's 6-Camera Diagnostic Checklist
- **Camera 6 (Weather):** Tightening or neutral macro liquidity; 10Y yields surging or DXY pumping.
- **Camera 1 (Supply):** Moderate exchange BTC inflows; miner or dormant holder distribution.
- **Camera 3 (Profile):** Price pokes above VAH (or below VAL) into an LVN, but fails to build new volume or shift the VPOC.
- **Camera 5 (Gamma):** Price trading inside a Positive Gamma (+GEX) regime or hitting a massive Call Wall pin.
- **Camera 4 (DOM):** Large, persistent limit ask wall visible on Bookmap at the extension high, devouring market orders.
- **Camera 2 (Aggression):** Perpetual Futures CVD surging while Spot CVD lags or falls (**Absorption Divergence**).

### 4. Henry's Operational Playbook
- **Trade Bias:** Short / Mean Reversion (Reversal back to fair value).
- **Entry Trigger:** CVD forms a clear Absorption Divergence at VAH + 5m footprint shows passive sell absorption.
- **Structural Invalidation:** 1 tick above the absorption wall high. If price devours Frank's wall and prints above it, exit immediately.
- **Target Destinations:**
  - *Target 1:* Session Volume Point of Control (VPOC - Town Center).
  - *Target 2:* Value Area Low (VAL - Southern District Border).

---

## Setup 3: The Town Square Fair (Responsive Value Area Rotation)
**Status**: `[HYPOTHESIS — NOT YET BACKTESTED]`

### 1. Gold City Narrative
The sun rises over a quiet, peaceful Gold City. There are no major announcements from Grace or Ivy, and supply wagons from the hills are moving at normal baseline rates. The merchants gather in the central Market District for a day of routine, two-way trading.

When price drifts down to the southern district gate (VAL), buyers step in, declaring gold is cheap and bidding it back toward the Town Center (VPOC). When price drifts up to the northern district gate (VAH), sellers step in, declaring gold is expensive and offering it back down. Price rotates comfortably back and forth inside the district like a pendulum.

### 2. Core Auction Ideology (The Epiphany)
*Why does this setup happen?* 
When a market is in two-sided balance (equilibrium), participants agree on fair value. Neither buyers nor sellers possess the aggressive initiative required to stage a breakout. In this balanced state, price distribution forms a bell curve. Price moving to the extremes of the Value Area represents temporary unfair value, prompting responsive traders to buy low (at VAL) and sell high (at VAH), rotating price back to the central Volume Point of Control (VPOC).

### 3. Henry's 6-Camera Diagnostic Checklist
- **Camera 6 (Weather):** Neutral macro environment; no scheduled rate decisions or Treasury cash drains.
- **Camera 1 (Supply):** On-chain supply metrics flat; balanced exchange netflows.
- **Camera 3 (Profile):** Symmetrical, well-developed bell-curve Session Volume Profile enclosed between VAH and VAL.
- **Camera 5 (Gamma):** High Positive Gamma (+GEX) cluster pinning price between strike boundaries.
- **Camera 4 (DOM):** Heavy limit bid walls stacked at VAL and heavy limit ask walls stacked at VAH.
- **Camera 2 (Aggression):** Low overall CVD volume; CVD turns positive at VAL and negative at VAH.

### 4. Henry's Operational Playbook
- **Trade Bias:** Range Rotation (Buy at VAL, Short at VAH).
- **Entry Trigger:** Price touches VAL (or VAH) + CVD delta flips positive (or negative) on 5m footprint.
- **Structural Invalidation:** 1 tick outside the Value Area boundary (beyond VAL for longs, beyond VAH for shorts).
- **Target Destinations:**
  - *Target 1:* Session VPOC (Town Center - take 50% partial profit).
  - *Target 2:* Opposite Value Area Boundary (VAH for longs, VAL for shorts).

---

## Setup 4: Frank's Magnet Pin (Options Settlement Pin)
**Status**: `[HYPOTHESIS — NOT YET BACKTESTED]`

### 1. Gold City Narrative
As the monthly settlement date for options contracts approaches, Frank (the market maker) finds himself holding massive options positions across the city. To protect his business, Frank must keep his net risk exposure perfectly balanced.

Every time price attempts to rally away from Frank's largest options desk strike, Frank's mandatory risk rules force him to sell gold into the rally. Every time price dips away from the strike, his rules force him to buy gold on the dip. Frank acts like a giant magnetic weight, trapping price in a tight circle around the options desk until settlement passes.

### 2. Core Auction Ideology (The Epiphany)
*Why does this setup happen?* 
Options market makers maintain delta-neutral portfolios by dynamically hedging their positions in the spot and futures markets. When open interest is heavily concentrated at a specific options strike price during a Positive Gamma (+GEX) regime, market maker hedging creates counter-cyclical flow: selling as price rises above the strike, and buying as price falls below it. This mechanical hedging suppresses market volatility and exerts a strong magnetic pull ("pin") toward the strike as options expiration approaches.

### 3. Henry's 6-Camera Diagnostic Checklist
- **Camera 6 (Weather):** Neutral to calm macro background heading into monthly options expiry.
- **Camera 1 (Supply):** Stable supply environment; no unexpected exchange inflows.
- **Camera 3 (Profile):** Price consolidating tightly around a dominant High Volume Node (HVN).
- **Camera 5 (Gamma):** Massive call/put Open Interest cluster at a specific strike price + high Positive Net GEX.
- **Camera 4 (DOM):** Symmetrical limit order queues stacked closely on both sides of the pin strike.
- **Camera 2 (Aggression):** CVD oscillating tightly around zero; lack of directional order flow conviction.

### 4. Henry's Operational Playbook
- **Trade Bias:** Volatility Compression / Pinning (Fade deviations from the pin strike).
- **Entry Trigger:** Price strays 1-2% away from the Max Pain / High GEX strike into +GEX + order flow momentum slows.
- **Structural Invalidation:** Price breaches the Zero-Gamma Flip level. If price flips into -GEX, the pin fails and volatility expands. Exit immediately.
- **Target Destinations:**
  - *Primary Target:* The Max Pain / High GEX Pin Strike Price.

---

## Setup 5: The Supply Drought Surge (Macro Supply Squeeze)
**Status**: `[HYPOTHESIS — NOT YET BACKTESTED]`

### 1. Gold City Narrative
High in the mountains, Alice's miners store their gold in balance sheet vaults, refusing to send supply wagons down to the city. Deep underground, Jonas keeps his ancient vault doors double-locked. Meanwhile, down in the city, Grace turns on the monetary water valves, flooding merchants with fresh cash, and institutional buyers (Clara) arrive with continuous daily purchasing mandates.

When buyers enter the exchange buildings, they find the storehouses almost completely bare. Because there is virtually no gold available for sale, even small purchasing orders force merchants to jump several floors higher just to find a single coin for sale. The auction ascends rapidly in a structural supply drought.

### 2. Core Auction Ideology (The Epiphany)
*Why does this setup happen?* 
Price is a mechanism to allocate scarce resources. When Long-Term Holders (Jonas) and network miners (Alice) lock up supply while central banks expand broad money (Grace) and institutional allocators (Clara) execute continuous spot accumulation, the available Liquid Float on exchanges shrinks to historic lows. In a supply-drained market, order book depth becomes thin. The market becomes hyper-inelastic to demand: even moderate spot buying clears out thin ask queues, causing price to jump rapidly across multiple profile levels.

### 3. Henry's 6-Camera Diagnostic Checklist
- **Camera 6 (Weather):** Global M2 expanding strongly; central bank policy rate easing; DXY weakening.
- **Camera 1 (Supply):** Exchange BTC reserves hitting multi-month/multi-year lows; LTH supply rising; CDD low.
- **Camera 3 (Profile):** Daily and Weekly VPOCs migrating steadily higher; price building higher HVN bases.
- **Camera 5 (Gamma):** Negative Gamma (-GEX) regimes on breakouts, accelerating upward momentum.
- **Camera 4 (DOM):** Persistent spot bid depth supporting price dips; thin ask depth above.
- **Camera 2 (Aggression):** Consistent, steady Spot CVD accumulation (Clara) leading the market higher over days and weeks.

### 4. Henry's Operational Playbook
- **Trade Bias:** Macro Long / Structural Trend Accumulation.
- **Entry Trigger:** Pullback into the developing Daily Volume Point of Control (VPOC) or 4H Value Area Low (VAL) + Spot CVD absorption.
- **Structural Invalidation:** Daily close below the previous week's Value Area Low (VAL) or sudden spike in Exchange BTC Inflows (Jonas unsealing vaults).
- **Target Destinations:**
  - *Target 1:* Upper boundary of the weekly expanding Value Area.
  - *Target 2:* Major macro High Volume Node targets from Composite Volume Profile.
