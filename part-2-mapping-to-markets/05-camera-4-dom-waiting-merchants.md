# Camera 4 — Waiting Merchants (DOM & Order Book Depth)

## 1. Gold City Narrative

Camera 4 looks directly at the floor ledgers inside each exchange building. It does not look at trades happening in the moment; it looks at **Frank's waiting quotes**—the stacks of gold and cash resting passively on every floor, waiting for someone to trade against them.

On floor 95, Frank has 500 gold coins offered for sale. On floor 90, Frank has 1,000 cash coins ready to buy gold. These stacks represent the **resting liquidity** of the city.

Henry uses Camera 4 to see where the physical roadblocks and cushion zones lie. If floor 92 has almost no waiting quotes (a thin order book), an aggressive buyer will slice straight through it to floor 95. If floor 95 is stacked with massive resting sell quotes, aggressive buyers will collide with a brick wall.

---

## 2. Theory

The Depth of Market (DOM) displays resting limit bids and asks at price levels around current market price.
- **Limit Order Book (LOB)**:
  - *Bids*: Limit buy orders below current price (support / passive demand).
  - *Asks*: Limit sell orders above current price (resistance / passive supply).
- **Liquidity Density**:
  - High-density liquidity pools act as price attractors (magnets) or friction barriers (walls).
  - Thin order book zones facilitate fast, slippery price slippage (gaps / LVNs).
- **Liquidation Cascades**: Pools of resting stop orders and forced liquidation triggers.

---

## 3. Real Market Translation

Camera 4 translates into order book depth & heatmap tools:

- **Order Book Depth (±1%, ±2% Depth)**: Aggregated USD liquidity on bids and asks.
- **Liquidation Heatmaps**: Visual distribution of estimated liquidation price clusters.
- **Depth of Market (DOM) Visualizers**: Real-time limit order book ladders across major spot and perp exchanges.

---

## 4. Litmus Test

"Where are the thickest walls of resting merchants waiting on the order book, and is price being drawn toward them like a magnet or blocked by them?"

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Real-Time (sub-second order book updates).
- **Primary Data Sources**:
  - Coinglass (`Liquidation Heatmap`, `Orderbook Depth`)
  - Bookmap / MobChart (`DOM Heatmap`, `Resting Limit Orders`)
  - TRDR (`Aggregated Order Book Depth`)
