# Camera 5 — Merchant Behavior (Gamma Exposure & Market Maker Inventory)

## 1. Gold City Narrative

Camera 5 is Henry's secret weapon. It does not record simple buying or selling. It records **Frank's internal inventory adjustments and hedging obligations**.

Frank is not a gambler; he is a risk manager. When Frank sells complex option contracts to traders across the city, he takes on risk. To protect himself from losing his shirt if price explodes up or down, Frank is mathematically forced to buy or sell spot gold on the exchange floors.

When Frank is in **Positive Gamma territory**, he acts like a shock absorber: he buys when price dips and sells when price rallies, pinning the floor in place. When Frank is in **Negative Gamma territory**, he acts like gasoline on a fire: he is forced to buy into rallies and sell into crashes, accelerating volatility.

Henry also uses Camera 5 to spot Frank's trickery: **Iceberg orders** (hiding 90% of a order under the table) and **Spoofing** (placing huge fake stacks of gold on a floor to scare traders, then pulling them away right before price arrives).

---

## 2. Theory

Market makers (MMs) provide liquidity in spot, futures, and options markets while hedging their directional risk.
- **Gamma Exposure (GEX)**:
  - *Long/Positive Gamma (+GEX)*: MMs hedge by trading counter to price movement (buying dips, selling rallies). Suppresses volatility and pins price near high open interest strikes.
  - *Short/Negative Gamma (-GEX)*: MMs hedge by trading in the same direction as price movement (selling dips, buying rallies). Amplifies volatility and drives rapid price expansions.
- **Vanna & Charm Shifts**: Expiry decay and implied volatility changes that force continuous MM spot hedging.
- **Market Microstructure Tactics**:
  - *Icebergs*: Hidden limit orders that refresh as traded.
  - *Spoofing*: Flash orders placed and canceled to manipulate order book perception.

---

## 3. Real Market Translation

Camera 5 translates into derivatives & microstructure analytics:

- **Net Gamma Exposure (GEX)**: Total market maker gamma across strike prices.
- **Zero Gamma Level (Flip Level)**: The price threshold separating +GEX (dampened volatility) from -GEX (amplified volatility).
- **Options Max Pain & Pin Strikes**: Key strike levels with dense Open Interest attracting price toward expiration dates.
- **Implied Volatility (IV) Surface**: Deribit IV skew and term structure.
- **Iceberg & Spoof Detection**: Historical DOM footprint tools tracking limit order cancellations vs executions.

---

## 4. Litmus Test

"Is Frank's inventory hedging acting as a shock absorber pinning price, or is he in negative gamma where his forced hedging will fuel a fast volatility expansion?"

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Daily (Options Open Interest recalculations) to Intra-session.
- **Primary Data Sources**:
  - Amberdata / Genesis Volatility (`Net GEX`, `Gamma Flip`, `Vanna/Charm`)
  - Laevitas / Coinglass (`Deribit Options OI`, `Max Pain`, `Options Skew`)
  - Bookmap (`Iceberg Tracker`, `Cancellation Heatmaps`)
