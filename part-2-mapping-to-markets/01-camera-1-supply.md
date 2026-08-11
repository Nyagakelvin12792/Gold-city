# Camera 1 – Supply (Alice, Jonas & Liquid Float) [UNREVIEWED DRAFT]

## 1. Gold City Narrative

Every morning before stepping onto the exchange balcony, Henry looks far beyond the trading floor out into the hills and deep vaults surrounding Gold City. He is not looking at price, nor is he trying to predict direction. Henry is asking a single fundamental question: has the amount of gold available to participate in the auction materially changed?

Gold City receives gold through two distinct channels. Out in the hills, Alice operates the active mines. Her miners extract fresh gold daily and transport it toward the city. But Henry knows that production is not the same as selling. When Alice receives newly mined gold, she must decide whether to retain it in her storehouses or load it onto wagons bound for the exchange floor to cover her operating expenses (energy, machinery, labor, debt). Henry tracks Alice through three states: Production (new gold created), Retention (gold kept in inventory), and Distribution (gold moving toward exchange venues).

Deeper inside the city sits Jonas in his ancient stone vault. Jonas holds a massive portion of the city's historical gold wealth accumulated over years. The size of Jonas's vault is not what moves the market; as long as the vault doors remain sealed, that gold has zero impact on the daily auction. But when Jonas unseals a vault door and loads heavy wagons toward the exchange, previously inactive supply becomes mobile. Henry tracks Jonas through three states: Dormant (locked in deep storage), Activated (mobile on the roads), and Distributed (reaching exchange floors).

Henry combines Alice's distribution and Jonas's activation to monitor the city's Liquid Float: the portion of gold readily available for trading. If Alice distributes heavily and Jonas opens old vaults, the liquid float expands. Unless Clara and David step up their demand to absorb it, sellers face difficulty maintaining previous prices. If Alice retains inventory, Jonas keeps his vaults locked, and Clara vaults gold away, the liquid float contracts. The auction becomes hyper-sensitive, where even a modest surge in buying interest encounters thin supply and drives price rapidly higher.

---

## 2. Theory

Camera 1 measures the structural supply environment surrounding the auction. A common misconception in market analysis is equating total asset supply with immediate sell pressure. In Bitcoin, total supply is strictly capped and deterministic, but the portion of that supply actively participating in the market shifts continuously. Camera 1 isolates how supply moves from static existence into mobile availability, and ultimately onto active trading venues.

### Total Supply versus Liquid Float
The total supply of Bitcoin (approaching 21 million) includes vast amounts of coins that are effectively illiquid, lost, or held in long-term cold storage. Liquid Float refers exclusively to the percentage of supply that is readily available to satisfy incoming market demand. When coins are moved into cold storage or held by inelastic long-term accumulators, the available market float contracts. In a contracting float environment, price becomes inelastic to demand: even small surges in aggressive buying encounter scarce supply, driving rapid upward price expansion. Conversely, when coins flow out of storage onto exchange order books, liquid float expands, increasing market supply density and requiring substantial capital inflows to absorb the potential overhead sell pressure.

### The Microeconomics of Miner Supply (Alice)
Network producers operate capital-intensive infrastructure with recurring operational expenses denominated in fiat currency (power contracts, hardware procurement, facility leasing, and debt service). Newly minted Bitcoin (~450 BTC daily post-2024 halving) represents primary supply issuance. However, miners do not act as passive, automatic sellers. Miners manage inventory strategically across three distinct states:
1. **Production State**: Block rewards are minted and deposited into miner treasury addresses. Total network supply increases, but active market float remains unaffected.
2. **Retention State**: Miners hold minted coins on their balance sheets, accumulating inventory during favorable margin conditions or low difficulty regimes. Supply exists, but is withheld from active market circulation.
3. **Distribution State**: Miners transfer accumulated inventory toward exchange deposit addresses or OTC desks. This transitions supply from balance sheet inventory into potential or active market sell pressure.

Evaluating miner supply requires analyzing miner treasury balances and exchange transfer volumes relative to hash rate and mining difficulty margins. During post-halving margin squeezes or difficulty spikes, unprofitable miners may be forced into capitulatory distribution, swelling liquid float and weighing on auction stability.

### Dormant Supply Activation and UTXO Aging (Jonas)
Existing supply held by long-term holders (LTHs) represents a far larger liquidity pool than daily block issuance. Coins that remain unmoved for extended periods (typically >155 days) statistically transition into illiquid supply with a low probability of spending on any given day. Jonas represents the activation of this dormant wealth. On-chain analysis tracks this activation through the concept of Unspent Transaction Output (UTXO) age distribution and Coin Days Destroyed (CDD).

When a coin sits unmoved for 1,000 days, it accumulates 1,000 coin days. If that coin is finally transferred, those 1,000 coin days are destroyed in that transaction. A sudden spike in Coin Days Destroyed indicates that previously dormant, long-held coins have broken their immobility and become active. Jonas transitions through three distinct phases:
1. **Dormant Phase**: Long-held coins rest in cold storage. They contribute to supply scarcity and shrink the active liquid float.
2. **Activated Phase**: Dormant coins move on-chain. This alerts the observer that long-term holders are shifting inventory, though the coins have not yet executed as trades.
3. **Distributed Phase**: Activated coins arrive at exchange deposit addresses or spot liquidity pools, increasing active liquid float and creating potential market resistance.

### Supply Absorption versus Executed Selling
Supply movement to an exchange does not automatically dictate immediate price declines. An exchange inflow represents supply *availability*, not executed market selling. If institutional buyers (Clara) or aggressive speculators (David) absorb incoming supply through limit order bids or market sweeps, the auction absorbs the expanded float without breaking structural value. Camera 1 establishes the availability of supply; subsequent cameras evaluate whether that supply is absorbed or allowed to overwhelm market demand.

### Timeframe Hierarchy and Non-Predictive Bias
Camera 1 operates on a slow temporal cadence (daily, weekly, and monthly on-chain aggregations). It does not generate short-term trade triggers or 4-hour execution signals. Instead, Camera 1 establishes the structural supply bias for the Strategic Auction (Weekly Volume Profile) and Operational Campaign (Daily Volume Profile). It informs the trader whether the overarching environment favors supply scarcity (contracting float) or supply overhead (expanding float).

---

## 3. Real Market Translation

Camera 1 translates into specific on-chain and exchange supply metrics, each paired with a direct question:

- **Alice (New Supply & Miner Behavior)**:
  - *Daily BTC Mining Issuance*: How much new BTC is produced daily? (~450 BTC/day post-2024 halving).
  - *Miner Reserve Balances & Outflows*: How much inventory remains with miners, and are they moving BTC toward exchanges?

- **Jonas (Dormant & Long-Term Holder Supply)**:
  - *Long-Term Holder (LTH) vs. Short-Term Holder (STH) Supply*: How much BTC remains under long-term holder control?
  - *Coin Days Destroyed (CDD) & Adjusted CDD*: Are previously dormant coins becoming active?
  - *HODL Waves (1Y+, 3Y+, 5Y+)*: How much supply has remained inactive across different age bands?

- **Liquid Float (Exchange Availability)**:
  - *BTC Exchange Balances & Netflows*: Is readily available liquid float expanding or contracting on exchange venues?

Data sources and software: Glassnode (Supply on Exchanges, LTH Supply, Adjusted CDD), CryptoQuant (Exchange Reserve BTC, Miner Outflow), Checkonchain (HODL Waves, Realized Cap HODL Waves).

---

## 4. Litmus Test

Primary Question:
"Is supply being actively unlocked and pushed onto exchange floors, or is circulating float continuing to shrink into long-term vaults?"

Secondary Question:
"If supply is becoming available, who is absorbing it?"

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Daily to Weekly (supply structure changes over days, weeks, and months; never checked intraday).
- **The 7-Step Morning Workflow for Camera 1**:
  1. Check Alice: Has new supply issuance changed materially?
  2. Check Alice's inventory behavior: Are miners retaining or distributing?
  3. Check Jonas: Is dormant supply remaining dormant or becoming active?
  4. Check Liquid Float: Is BTC moving onto or leaving exchanges?
  5. Compare environment with baseline: Is supply availability expanding, contracting, or stable?
  6. Record conclusion (Supply Expansion, Supply Contraction, or Supply Stability).
  7. Carry conclusion forward to Camera 6 and Volume Profile auction levels.
- **Three Conclusion States**:
  - *Supply Expansion*: More supply becoming available.
  - *Supply Contraction*: Less supply readily available.
  - *Supply Stability*: No structural change in supply.
- **Primary Data Sources**: Glassnode, CryptoQuant, Checkonchain.
