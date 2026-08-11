# Camera 3 – Business (Volume Profile & Auction Zones) [UNREVIEWED DRAFT]

## 1. Gold City Narrative

Camera 3 overlooks the entire floor network of Gold City's exchange buildings. It does not track who is shouting or running; instead, it records where actual contracts were signed and gold exchanged hands.

Henry uses Camera 3 to identify the city's **Districts** (High Volume Nodes, where buyers and sellers comfortably spend days trading) and **Highways** (Low Volume Nodes, empty stretches of road where price moves rapidly because nobody wants to pause and do business there).

When trade consolidates on a single floor for a long time, that floor becomes the **Town Center** (Volume Point of Control, VPOC). Surrounding it is the **Market District** (Value Area, VAH to VAL). When merchants try to push price out of the district onto the highway, Henry watches to see if the city accepts the new district or snaps back home.

---

## 2. Theory

Camera 3 measures where physical market business has occurred across space (price levels) rather than time (timeframes). Traditional candlestick charts plot price movement over fixed intervals of time (15 minutes, 4 hours, 1 day), obscuring where actual volume was executed. Volume Profile transforms market data by organizing total executed contracts vertically by price level, creating a structural map of fair value consensus, balance, and imbalance.

### High Volume Nodes (HVNs) and Fair Value Consensus
When price enters a zone where both buyers and sellers consider the exchange rate fair, trade occurs repeatedly in volume. This two-way auction consolidation builds a High Volume Node (HVN). In Gold City terms, an HVN represents a bustling District. High Volume Nodes act as structural market anchors. Because significant commercial and speculative business took place at these levels, price exhibits heavy friction when re-entering an HVN, causing directional momentum to slow down and transition into multi-sided rotation.

### The Value Area and Volume Point of Control (VPOC)
Statistical distribution theory organizes the Volume Profile into a bell-curve model of fair value:
- **Volume Point of Control (VPOC)**: The exact price tick where the absolute highest volume of contracts was executed during the profile period. It represents the ultimate epicenter of fair value consensus (the Town Center).
- **Value Area (VA)**: The range of prices surrounding the VPOC that encompasses 68% (one standard deviation) of total executed volume. It is bounded by the **Value Area High (VAH)** at the upper ceiling and the **Value Area Low (VAL)** at the lower floor. Inside the Value Area, market participants perceive price as fair, and trade rotates comfortably between boundaries.

### Low Volume Nodes (LVNs) and Unfair Value Efficiency
Low Volume Nodes (LVNs) are price levels where very few contracts were executed. An LVN is created when price moves rapidly through a price zone, driven by aggressive initiative flow encountering thin passive liquidity. In Gold City terms, an LVN represents a slippery Highway or empty stairwell. Because little business was negotiated across an LVN, the market perceives it as unfair value. When price returns to an LVN in future sessions, it typically glides through rapidly without pausing, or gets violently rejected at the boundary.

### Auction Balance versus Value Migration
The relationship between price and the Volume Profile defines the two core states of market auction theory:
- **Balance (Rotation)**: Price remains enclosed within an established Value Area. Buyers step in near VAL and sellers step in near VAH, rotating price back toward the VPOC. No structural value shift is occurring.
- **Imbalance (Value Migration)**: Initiative participants push price out of an established Value Area, crossing an LVN highway to seek a new price territory. If the market consolidates at the new level and builds a new HVN, Value Area Migration has occurred. If the market fails to build volume and snaps back into the old Value Area, the breakout has failed.

### The Profile Anchoring Rule
A fundamental rule of SVAF Volume Profile theory is that profiles must be anchored exclusively to genuine auction state transitions. An anchored profile measures the distribution of volume from the exact moment an auction regime shifted (such as a completed value migration, a range breakout confirmation, or a major structural catalyst). Anchoring profiles to arbitrary swing highs or swing lows distorts the true distribution of market consensus and is strictly prohibited.

---

## 3. Real Market Translation

Camera 3 translates into Volume Profile analysis tools:

- **Session Volume Profile (SVP)**: Daily auction boundaries (00:00 UTC).
- **Composite Volume Profile (CVP)**: Multi-week or multi-month structural profile.
- **Anchored Volume Profile (AVP)**: Profiles anchored to key auction transition candles (e.g. ETF launch date, major liquidation event, range breakout confirmation).
- **Anchored VWAP (AVWAP)**: Volume-weighted average price anchored to the same auction state transition events.

---

## 4. Litmus Test

"Is today's auction rotating comfortably inside yesterday's established district, or is it attempting a value migration across the highway into a new district?"

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Daily per session, updated in real time as volume accumulates across price levels.
- **Primary Data Sources**:
  - Exocharts (TPO & Volume Profile distributions)
  - TradingView (Fixed Range Volume Profile `FRVP`, Anchored VWAP `AVWAP`)
  - Sierra Chart / Bookmap
