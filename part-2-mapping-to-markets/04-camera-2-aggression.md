# Camera 2 – Aggression (Order Flow & CVD) [UNREVIEWED DRAFT]

## 1. Gold City Narrative

Most of what happens on the exchange floor is quiet and patient. Merchants sit at their booths with gold laid out, waiting for someone to agree their price is fair. Nobody's in a hurry. But every so often, someone comes through the doors who isn't willing to wait at all.

David is the one Henry sees doing this most often, and in the biggest bursts. David doesn't own gold, and he doesn't need it the way Ben does for his factory or Edward does for his jewelry business. David borrows against gold he doesn't have, and when he thinks the price is about to move, he doesn't place a patient order and hope someone meets it, he storms straight up to Frank's booth and takes whatever's sitting there, at whatever price it costs, just to be in before everyone else catches on. Because he's often doing this with borrowed size, when David moves, he tends to move in a crowd, one aggressive rush followed by another, not a single trade.

Ben and Edward can behave this way too, but for a completely different reason. When Ben's factory genuinely runs low on gold mid-production, or when Edward has a client waiting on a large jewelry order, they don't have the luxury of patience either. They'll pay up and take Frank's offer immediately, same behavior as David on the surface, but driven by real, physical need rather than a bet on where price is headed next.

Henry's job on this camera is to watch these rushes and ask one question, over and over: when someone comes storming through the doors buying aggressively, is Frank actually running out of gold to sell them, meaning price genuinely has to move, or is Frank quietly absorbing every bit of it without his booth ever looking short?

---

## 2. Theory

Camera 2 measures order flow aggression and market order delta across active trading venues. In a central limit order book, trades occur when aggressive market orders cross the bid-ask spread to execute immediately against passive limit orders. Aggressive market buyers hit the ask quote, while aggressive market sellers hit the bid quote. Camera 2 isolates this aggressive order flow to evaluate whether buyers or sellers are driving the auction momentum.

### Cumulative Volume Delta (CVD) Dynamics
Cumulative Volume Delta (CVD) is the running cumulative total of aggressive buy volume minus aggressive sell volume over a given timeframe. When market buy volume exceeds market sell volume, CVD rises; when market sell volume exceeds market buy volume, CVD falls. However, analyzing aggregated CVD alone is insufficient. Henry separates Spot CVD from Perpetual Futures CVD:
- **Spot CVD (Coinbase, Binance Spot, Kraken)**: Captures un-leveraged market order executions representing physical asset demand from Ben, Clara, or institutional allocators.
- **Perpetual Futures CVD (Binance Perps, Bybit, OKX)**: Captures leveraged market order aggression from David and speculative trading crowds.

### Open Interest (OI), Funding Rates, and Liquidations
To evaluate the quality of aggressive order flow, CVD must be analyzed alongside Open Interest (OI) and derivatives positioning mechanics:
- **Open Interest Co-movement**: Open Interest represents the total count of outstanding, un-settled perpetual futures contracts. Rising price accompanied by rising CVD and rising Open Interest confirms that aggressive buyers are actively opening new leveraged long positions. Conversely, rising price with falling Open Interest indicates that the upward move is being driven by short covering (shorts buying back to close) rather than fresh long aggression.
- **Funding Rates**: The periodic interest rate paid between long and short perpetual contract holders. High positive funding rates indicate heavy long positioning leverage, increasing the vulnerability of the market to a long liquidation cascade.
- **Liquidation Volume**: Forced market order executions triggered when leveraged positions hit maintenance margin thresholds. Liquidations represent non-discretionary market orders that accelerate price movement through cascading order book sweeps.

### The Two Delta Divergence Patterns
When aggressive order flow interacts with passive limit order depth, two distinct divergence patterns emerge:

**Absorption Divergence**: This occurs when price makes a new high while CVD is declining (or price makes a new low while CVD is rising). In an Absorption Divergence, aggressive buyers are actively crossing the spread, but their volume is being quietly absorbed by large passive limit sell orders sitting on the book. Because the passive limit orders absorb the aggressive volume without running out of inventory, price fails to progress higher. Absorption Divergence signals that passive liquidity is controlling the auction and a reversal is imminent.

**Exhaustion Divergence**: This occurs when CVD makes a strong new high while price fails to make a corresponding higher high (or CVD makes a new low while price refuses to fall). In an Exhaustion Divergence, aggressive buyers expend massive market order volume, but run completely out of follow-through momentum as they hit passive order book resistance. Exhaustion Divergence reveals that aggressive initiators have exhausted their capital, leaving the auction vulnerable to a rapid counter-rotation.

---

## 3. Real Market Translation

Henry's CVD reading needs to be split in two, since David's aggression and Ben or Clara's aggression look different once separated. Spot CVD, aggregated across Binance, Coinbase, and Kraken, captures real buying and selling of actual Bitcoin. Perpetual futures CVD, aggregated across Binance, Bybit, and OKX, captures David's leveraged world.

Alongside CVD, Henry watches Open Interest, the total count of active leveraged contracts still open. Rising price, rising CVD, and rising Open Interest together confirm genuinely new leveraged positions opening, not existing ones being shuffled. Funding rates tell Henry what it currently costs David to hold his position overnight. Liquidation volume matters separately, since a liquidation is David being forced out, not choosing to sell.

Data sources: Coinglass (open interest, funding rates, liquidations), Exocharts (CVD, footprint charts, delta divergence).

---

## 4. Litmus Test

Who is actually crossing the spread and forcing a trade right now, and is that aggression genuinely moving price, or is it quietly being absorbed by everyone sitting patiently behind it?

---

## 5. Update Frequency & Data Source

Real-time, tick by tick. Checked only during active trade timing and management, not part of the daily morning routine the way Weather and Supply are.
