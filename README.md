# SVAF / Gold City — Auction Market Theory Trading Framework

Welcome to **SVAF (State, Value, Auction, Flow)** and **Gold City**, a living curriculum and trading framework for Bitcoin.

This framework teaches continuous double auction market theory through a mental model—a fictional city named **Gold City**—where every buyer, seller, and market maker is a named participant. Every narrative concept in Gold City maps directly onto real, trackable Bitcoin market data and translates into precise trade execution criteria.

---

## 🏛️ Mental Model: The Participant Roster

We reason from **participant motivations**, never from price action alone.

| Participant | Role in Gold City | Bitcoin Market Equivalent |
|---|---|---|
| **Alice** | The Gold Miner | Miners, issuance, newly available supply |
| **Ben** | The Electronics Factory Owner | Real-world commercial buyers, utility demand |
| **Clara** | Inherited Wealth | Passive accumulation, ETF investors, corporate treasuries |
| **David** | The Speculator | Perpetual futures traders, leveraged speculators (OI, Funding) |
| **Edward** | The Jewelry Magnate | Whales, OTC buyers, large institutional block orders |
| **Frank** | The Merchant | Market Makers, liquidity providers resting on order book floors |
| **Grace** | The Monetary Authority | Central Banks (Fed Funds rate, central bank balance sheets) |
| **Ivy** | The Exchequer | Treasury (TGA, bond issuance, yield reactions) |
| **Jonas** | The Vault Keeper | Long-term holders, dormant coins (CDD, HODL waves) |
| **Henry** | The Exchange Owner | **You, the Trader** (observing through 6 camera feeds) |

---

## 🗺️ Geography Reference (Atlas)

- **City**: The entire Bitcoin market
- **District**: High Volume Node (HVN) zone / Fair Value area
- **Highway**: Low Volume Node (LVN) / Low liquidity fast-crossing space
- **Building**: Exchange venue (Binance, Coinbase, Kraken, OKX)
- **Floor**: A specific price level on the order book
- **Zoom Level**: Timeframe (Weekly = City overview, Daily = District, 4H = Inside a building)

For full details, see [`atlas/geography-quick-reference.md`](atlas/geography-quick-reference.md).

---

## 📸 Henry's Six Cameras

Henry observes Gold City through six dedicated camera feeds:

1. **Camera 1 — Supply**: Mining issuance, exchange reserves, long-term holder movement.
2. **Camera 2 — Aggression**: Market order flow sweeps, Cumulative Volume Delta (CVD).
3. **Camera 3 — Business**: Volume Profile distributions, VPOC, Value Area High/Low.
4. **Camera 4 — Waiting Merchants**: Depth of Market (DOM), resting limit orders.
5. **Camera 5 — Merchant Behavior**: Options Gamma Exposure (GEX), market maker hedging, pins.
6. **Camera 6 — Weather**: Global M2 liquidity, Treasury operations, macroeconomic environment.

---

## 📖 Curriculum Map & Navigation

### [Part I — Gold City (Pure Narrative)](part-1-gold-city/)
*The mental model and auction theory in pure city terms.*
- [`01-core-law-and-participants.md`](part-1-gold-city/01-core-law-and-participants.md) — The Core Law & Participant Roster
- [`02-the-city-geography.md`](part-1-gold-city/02-the-city-geography.md) — Districts, Highways, Buildings, and Floors
- [`03-how-the-auction-works.md`](part-1-gold-city/03-how-the-auction-works.md) — Exchange Mechanics, Frank's Inventory, Acceptance vs Rejection
- [`04-the-living-auction.md`](part-1-gold-city/04-the-living-auction.md) — Balance, Imbalance, Rotation, Migration, Exhaustion, Failure
- [`05-henrys-six-cameras.md`](part-1-gold-city/05-henrys-six-cameras.md) — Introduction to the 6 Surveillance Cameras

### [Part II — Mapping Gold City to Real Markets](part-2-mapping-to-markets/)
*Translating each camera feed into real-world market data.*
- [`01-camera-1-supply.md`](part-2-mapping-to-markets/01-camera-1-supply.md) — Supply & Issuance Metrics
- [`02-camera-6-weather.md`](part-2-mapping-to-markets/02-camera-6-weather.md) — Global Liquidity & Macro Weather
- [`03-camera-3-volume-profile.md`](part-2-mapping-to-markets/03-camera-3-volume-profile.md) — Volume Profile & Positioning Rules
- [`04-camera-2-aggression.md`](part-2-mapping-to-markets/04-camera-2-aggression.md) — Order Flow Aggression & CVD
- [`05-camera-4-dom-waiting-merchants.md`](part-2-mapping-to-markets/05-camera-4-dom-waiting-merchants.md) — DOM & Order Book Depth
- [`06-camera-5-merchant-behavior.md`](part-2-mapping-to-markets/06-camera-5-merchant-behavior.md) — Options Gamma & Market Maker Inventory

### [Part III — Execution: From Narrative to Trade](part-3-execution/)
*Synthesizing cameras into actionable trade setups and risk management.*
- [`01-reading-all-six-together.md`](part-3-execution/01-reading-all-six-together.md) — The Alignment Matrix & Decision Funnel
- [`02-recurring-conditions.md`](part-3-execution/02-recurring-conditions.md) — Recurring Setups & Status-Tag System
- [`03-entry-invalidation-sizing.md`](part-3-execution/03-entry-invalidation-sizing.md) — Entry Triggers, Structural Invalidation, Sizing
- [`04-risk-management.md`](part-3-execution/04-risk-management.md) — Portfolio Risk Management Framework
- [`05-validation-and-track-record.md`](part-3-execution/05-validation-and-track-record.md) — Empirical Backtesting & Setup Validation

---

## 📜 Core Non-Negotiable Rules

1. **Participant-First Reasoning**: Never reason from price alone. Always ask what participants are trying to accomplish.
2. **Narrative First**: Every chapter starts with the Gold City story before introducing market mechanics.
3. **No Directional Forecasting**: We describe the current auction state and fair value; we never predict future price.
4. **Profile Anchoring Rule**: Anchored Volume Profiles anchor only to genuine auction state transitions (e.g. migration completed/failed), never to arbitrary swing highs or lows.
5. **No Em Dashes**: Avoid em dashes in all documentation.
6. **Validation Status Tags**: Recurring setups carry `[HYPOTHESIS — NOT YET BACKTESTED]` until empirical backtest data is supplied.
