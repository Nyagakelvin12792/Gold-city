# Camera 4 – Waiting Merchants (DOM & Order Book Depth) [UNREVIEWED DRAFT]

## 1. Gold City Narrative

Camera 4 looks directly at the exchange floor around the current negotiation. While Camera 3 tells Henry where participants have already conducted business, Camera 4 tells Henry where participants are currently waiting to conduct business. Frank is responsible for most of the visible waiting liquidity: he places gold for sale on the floors above the active trading price, and he places cash bids on the floors below it. These orders sit quietly, waiting for another participant to initiate a trade against them.

Henry watches these waiting merchants because the next negotiation often develops around areas where meaningful liquidity is already positioned. Suppose Gold City is currently trading on Floor 90. Frank has 500 gold coins offered on Floor 92, 1,000 gold coins offered on Floor 95, 200 cash coins bidding on Floor 89, and 2,000 cash coins bidding on Floor 87. Henry does not immediately conclude that Floor 95 is support or Floor 87 is resistance. Those traditional labels do not belong in SVAF. 

Instead, Henry records that Frank has displayed liquidity at these specific prices. Then he systematically asks: Which liquidity is closest? Which liquidity appears committed? Which liquidity is large? Which liquidity is likely to become the next active negotiation? That is the essence of Camera 4.

---

## 2. Theory

Camera 4 evaluates the real-time structure of passive resting liquidity surrounding current market price. While market orders represent aggressive flow, limit orders represent passive liquidity. The Depth of Market (DOM) visualizes the Central Limit Order Book (CLOB), displaying displayed limit bids and limit asks arranged by price tick.

### Present Waiting Liquidity versus Historical Business
Camera 4 isolates present displayed willingness. It does not observe completed business (which belongs to Camera 3) nor does it track historical order book changes through time (which belongs to Camera 5):
- **Camera 3 (Business)**: Where did participants conduct business? (Historical Volume Profile)
- **Camera 4 (Waiting Merchants)**: Where are participants waiting right now? (Present DOM Snapshot)
- **Camera 5 (Merchant Behavior)**: How has that waiting behavior changed through time? (Historical Heat Map)

### Bids and Asks Mechanics
Limit orders sit in dual queues surrounding active price, expressing willingness to transact under current conditions:
- **Bids (Passive Demand)**: Cash sitting below current trading price. A bid represents displayed willingness to buy if an aggressive seller hits the bid quote. Henry records that buying liquidity is waiting below, but does not assume price will automatically bounce.
- **Asks (Passive Supply)**: Gold offered above current trading price. An ask represents displayed willingness to sell if an aggressive buyer hits the ask quote. Henry records that selling liquidity is waiting above, but does not assume price will automatically reverse.

### Liquidity Density: Thick versus Thin Order Books
Not every price floor contains equal liquidity density. Varying density influences the amount of friction or speed an auction encounters:
- **Thick Liquidity (Crowded Book)**: Price levels containing large quantities of displayed limit orders. A thick book resembles a crowded negotiation area that requires substantial aggressive market order volume to devour.
- **Thin Liquidity (Sparse Book)**: Price levels containing sparse displayed limit orders. If aggressive participation begins, price moves through thin levels quickly because there is little displayed liquidity waiting to oppose the move.

### The SVAF Proximity Hierarchy
A foundational law of SVAF analysis is the Proximity Hierarchy, preventing observers from getting distracted by distant order book noise:
1. **Proximity**: Liquidity closest to current market price receives primary attention. The nearest order book level is the immediate potential negotiation. Distant liquidity, regardless of raw size, remains secondary until price approaches.
2. **Commitment**: Evaluates whether displayed limit orders remain visible and persistent as price approaches, demonstrating genuine intent rather than temporary placement.
3. **Size**: The total volume of resting limit orders. Size is secondary to proximity and commitment because large displayed orders can easily be pulled or spoofed.

### Liquidity Walls and Negotiation Zones
A large concentration of displayed liquidity is often called a wall. In SVAF, a wall is never treated as an automatic barrier or support/resistance level. Instead, a liquidity cluster is treated as a potential negotiation zone. Henry observes how the market interacts with the wall through three primary execution states:
- **Consumption**: Aggressive market orders trade against and deplete the displayed limit orders (e.g., volume decreases from 2,000 to 0 through actual execution).
- **Pulling**: Displayed limit orders are cancelled and removed before price arrives, without corresponding trade executions.
- **Replenishment**: Limit orders are repeatedly reloaded at the same level as aggressive orders devour them (bridging Camera 4 to Camera 5).

### Higher Timeframe Destinations as Hypotheses
When higher timeframe analysis (Weekly strategic, Daily operational, 4H tactical) identifies a target business district, Camera 4 observes the resting liquidity along the path. A higher timeframe destination remains a hypothesis; lower timeframe negotiations observed through Camera 4 determine whether participants actually reach that destination.

### Inter-Camera Relationships
- **Camera 3 (Volume Profile)**: Identifies where business occurred (HVNs/LVNs); Camera 4 shows where liquidity is waiting relative to those zones.
- **Camera 2 (Aggression)**: Identifies who is crossing the spread; Camera 4 shows what those aggressive orders are encountering on the book.
- **Camera 5 (Merchant Behavior)**: Camera 4 provides the instantaneous snapshot; Camera 5 provides the behavioral history over time.

### Multi-Exchange, Asset Type and Liquidation Nuances
- **Spot versus Perpetual Futures LOBs**: Spot liquidity represents participants trading actual Bitcoin (Ben/Clara); perpetual futures liquidity represents derivative contracts (David). Large perpetual order books do not automatically reflect the same participant motivations as spot books.
- **Aggregated Order Books**: Bitcoin trades across multiple exchange venues (Binance, Coinbase, Bybit, OKX). Henry verifies whether his DOM view represents a single exchange or an aggregated multi-venue order book.
- **Liquidation Clusters**: Forced liquidation levels represent locations where leveraged positions are algorithmically liquidated, distinct from discretionary limit order queues.

### Liquidity Friction versus Liquidity Magnets
Displayed liquidity can act as friction (slowing price progression as aggressive orders devour dense queues) or as an attractor (drawing price toward dense liquidity zones when aggressive participants seek execution depth).

---

## 3. Real Market Translation

Camera 4 translates directly into live Depth of Market (DOM) ladders and order book depth analytics:

- **Order Book Depth (±1% & ±2% Depth)**: Aggregated USD and BTC resting limit order volume across major spot and perpetual futures exchanges.
- **Depth of Market (DOM) Ladders**: Real-time order book displays showing bids, asks, and order queue sizes per price tick.
- **Liquidation Heatmap Clusters**: Estimated resting stop-loss and forced liquidation price levels on perpetual futures venues.
- **Spot vs. Perp Order Book Split**: Separating spot order book depth (Binance, Coinbase) from perpetual futures depth (Binance, Bybit, OKX).

Data sources and software: Coinglass (Orderbook Depth, Liquidation Heatmaps), Bookmap / MobChart (Real-time DOM ladders), TRDR (Aggregated Order Book Depth).

---

## 4. Litmus Test

Primary Question:
"Where are participants currently willing to trade, and what happens when the auction reaches them?"

Secondary Question:
"Which displayed liquidity is closest to the active auction, and is it demonstrating persistent commitment?"

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Real-time (sub-second tick level updates). Checked during active trade execution and management at key auction boundaries.

- **The Complete 11-Step Camera 4 Workflow**:
  1. Identify current market price.
  2. Identify the nearest meaningful liquidity above price.
  3. Identify the nearest meaningful liquidity below price.
  4. Evaluate proximity (closest liquidity receives first priority).
  5. Check whether liquidity appears persistent.
  6. Evaluate size (secondary to proximity and commitment).
  7. Check market type (Spot vs. Perpetual Futures).
  8. Watch Camera 2: Who is aggressively crossing the spread?
  9. Watch liquidity interaction: Is liquidity being consumed, remaining, or pulled?
  10. Move to Camera 5: How has Frank behaved around that liquidity through time?
  11. Return to auction narrative: Does the interaction support or challenge the interpretation?

- **Henry's Camera 4 Notebook Format**:
  - Current price: ______
  - Nearest liquidity above & distance: ______
  - Commitment & Size: ______
  - Nearest liquidity below & distance: ______
  - Commitment & Size: ______
  - Current aggression: ______
  - Liquidity response: Consumed / Remaining / Pulled / Replenished
  - Next negotiation: ______
  - Camera 4 conclusion: "Participants are currently waiting around ______."

- **What Camera 4 Tells vs. Does Not Tell Henry**:
  - *Tells*: Where participants display willingness, nearest liquidity locations, order book density (thick vs. thin), large displayed clusters, immediate next negotiation zone.
  - *Does NOT tell*: Guaranteed price direction, whether a wall will hold, whether orders will remain or replenish, or whether displayed size equals long-term value.

- **The Permanent Camera 4 Rules**:
  1. Never treat the DOM as a prediction tool.
  2. Never treat a large order as an automatic barrier.
  3. Never ignore proximity.
  4. Never ignore commitment.
  5. Never evaluate size alone.
  6. Never interpret displayed liquidity without watching actual interaction.

- **Primary Data Sources**: Coinglass, Bookmap, MobChart, TRDR.
