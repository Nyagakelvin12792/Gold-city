# Camera 2 — Aggression (Order Flow & CVD)

## 1. Gold City Narrative

Camera 2 zooms in on the doors of the exchange floor to observe the arrival of active buyers and sellers. It does not record resting quotes; it records the individuals who sprint through the doors shouting "I'll take it now at whatever price!"

**David** (the leveraged speculator) often rushes through the doors in large groups, using borrowed credit to aggressively buy up floors. **Ben** (the factory owner) or **Edward** (the jewelry magnate) may also enter aggressively when urgent inventory is needed.

Henry uses Camera 2 to see whether aggressive buyers are overpowering Frank's sell offers or whether aggressive sellers are smashing down through Frank's buy bids. When David rushes in with aggressive buying but price fails to move up, Henry knows Frank's passive wall is absorbing David's aggressive flow.

---

## 2. Theory

Market orders represent aggressive order flow—traders willing to pay the bid-ask spread to secure immediate execution.
- **Cumulative Volume Delta (CVD)**: The running total of market buy volume minus market sell volume.
- **Delta Divergence**:
  - *Bullish Absorption*: Aggressive selling (CVD making lower lows) while price makes higher lows → Passive limit buyers absorbing aggressive sellers.
  - *Bearish Absorption*: Aggressive buying (CVD making higher highs) while price fails to make higher highs → Passive limit sellers absorbing aggressive buyers.
- **Open Interest (OI) Co-movement**: Differentiates spot-driven organic demand (Ben/Clara) from leverage-driven speculative rushes (David).

---

## 3. Real Market Translation

Camera 2 translates into real-time order flow metrics:

- **Cumulative Volume Delta (CVD)**:
  - Spot CVD (Binance, Coinbase, Kraken spot aggregated)
  - Perpetual Futures CVD (Binance, Bybit, OKX perps aggregated)
- **Open Interest (OI)**: Total active perpetual futures contracts (in BTC & USD terms).
- **Funding Rates & Predicted Funding**: Cost of holding leveraged long/short positions.
- **Aggressive Liquidation Volume**: Forced market order liquidations across major exchanges.

---

## 4. Litmus Test

"Who is aggressively crossing the spread right now—speculators or spot buyers—and is their aggression producing price movement or being absorbed by passive liquidity?"

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Intraday to Real-Time (tick level to 5m/4H aggregates).
- **Primary Data Sources**:
  - Coinglass (`Aggregated CVD`, `Open Interest`, `Funding Rates`, `Liquidations`)
  - Exocharts (`Delta Profile`, `Footprint Charts`, `CVD Divergence`)
  - Velo Data / MobChart
