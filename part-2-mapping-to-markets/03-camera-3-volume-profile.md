# Camera 3 — Business (Volume Profile & Auction Zones)

## 1. Gold City Narrative

Camera 3 overlooks the entire floor network of Gold City's exchange buildings. It does not track who is shouting or running; instead, it records where actual contracts were signed and gold exchanged hands.

Henry uses Camera 3 to identify the city's **Districts** (High Volume Nodes, where buyers and sellers comfortably spend days trading) and **Highways** (Low Volume Nodes, empty stretches of road where price moves rapidly because nobody wants to pause and do business there).

When trade consolidates on a single floor for a long time, that floor becomes the **Town Center** (Volume Point of Control, VPOC). Surrounding it is the **Market District** (Value Area, VAH to VAL). When merchants try to push price out of the district onto the highway, Henry watches to see if the city accepts the new district or snaps back home.

---

## 2. Theory

Volume Profile displays the distribution of executed volume across price levels over a specified timeframe.
- **Volume Point of Control (VPOC)**: The price level with the highest total executed volume, representing maximum market consensus and fair value.
- **Value Area (VA)**: The price range encompassing 68% (one standard deviation) of total traded volume, bounded by Value Area High (VAH) and Value Area Low (VAL).
- **High Volume Nodes (HVNs)**: Heavy volume clusters representing fair value acceptance and consolidation.
- **Low Volume Nodes (LVNs)**: Volume gaps representing unfair value rejection and rapid price movement.

### Profile Anchoring Rule
Volume Profiles must be anchored **only** to genuine auction state transitions (such as a completed value migration, a failed breakout, or a major macro event). Anchoring to arbitrary swing highs or lows is strictly prohibited.

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
