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

Camera 1 translates the physical narrative of Gold City into on-chain data metrics, public blockchain ledgers, and exchange inventory tracking tools. Because Bitcoin operates on a transparent, public ledger, every movement of supply from miners or dormant vaults can be observed before it executes on the trading floor.

### Metric Category 1: Alice (Miner Production, Reserves & Issuance)
Alice represents network miners. On-chain data isolates miner wallets to evaluate whether new supply is being retained in reserves or dispatched to market venues:
- **Daily BTC Mining Issuance (~450 BTC/day post-2024 halving)**: The baseline rate of newly created Bitcoin. This metric sets the constant, predictable inflow of new supply entering miner balances.
- **Miner Reserve Balances**: The total volume of BTC held in known miner addresses. Rising miner reserves indicate that Alice is in a Retention State, withholding new supply from active markets. Declining reserves indicate that Alice is in a Distribution State.
- **Miner Exchange Inflow Volume**: The specific volume of BTC transferred directly from miner wallets to exchange deposit addresses. Spikes in miner inflows signal immediate potential sell-side pressure as Alice moves gold onto the floor to cover fiat operating expenses.

### Metric Category 2: Jonas (Dormant & Long-Term Holder Supply)
Jonas represents dormant wealth locked in long-term cold storage. On-chain analysis measures the age and movement of existing UTXOs to determine when Jonas's vault doors open:
- **Long-Term Holder (LTH) vs. Short-Term Holder (STH) Supply Ratio**: Tracks coins held for more than 155 days (LTH) versus less than 155 days (STH). A rising LTH supply ratio confirms that coins are aging and locking into storage, shrinking market float. A declining LTH ratio confirms that Jonas is distributing inventory into active circulation.
- **Coin Days Destroyed (CDD) and Adjusted CDD**: When a coin sits unmoved for 100 days and is spent, 100 coin days are destroyed. High CDD spikes confirm that long-dormant coins (Jonas) have moved on-chain, shifting from a Dormant State to an Activated State.
- **HODL Waves (Supply Last Active 1Y+, 3Y+, 5Y+)**: Visual bands showing the percentage of total Bitcoin supply that has remained unmoved over specific time horizons. Expanding 1Y+ and 3Y+ bands indicate structural supply tightness.

### Metric Category 3: Liquid Float (Exchange Reserves & Netflows)
Liquid Float represents the immediate supply available across spot and derivative trading venues:
- **Total BTC Balance on Exchanges**: The aggregate volume of Bitcoin held in exchange cold and hot wallets. Contracting exchange reserves confirm that liquid float is shrinking as buyers (Clara) withdraw coins into self-custody. Expanding exchange reserves confirm that liquid float is expanding, increasing market vulnerability to selling.
- **Exchange Net Position Change**: The 30-day net change in exchange balances, isolating whether Bitcoin is accumulating on exchanges (supply expansion) or being withdrawn (supply contraction).

### Software, Platforms & Tooling Matrix
To track Camera 1 data in real time, Henry utilizes specialized on-chain analytics platforms:
- **Glassnode**: Provides high-resolution metrics for *Supply on Exchanges*, *Long-Term Holder Supply*, *Adjusted CDD*, and *Miner Reserve Balances*.
- **CryptoQuant**: Offers real-time tracking of *Miner Exchange Outflow*, *Exchange Reserve Balances*, and *Exchange Netflows*.
- **Checkonchain**: Used for long-term structural charting of *HODL Waves*, *Realized Cap HODL Waves*, and *Unspent Supply Age Distribution*.

---

## 4. Litmus Test

When Henry looks at Camera 1 every morning, he is not trying to guess today's price movement. He is inspecting the supply pipelines coming down from the hills and out of the deep vaults. Henry uses this Litmus Test to determine whether the supply background is structurally tight or overcrowded with potential gold.

### The Core Question
"Has the amount of gold available to participate in the auction materially changed?"

### Henry's Step-by-Step Diagnostic Process

1. **Checking Alice's Mines (New Supply Issuance vs. Retention):**
   - *Henry's Question:* "Is Alice holding onto her newly mined gold, or is she sending heavy supply wagons to the exchange to cover operational expenses?"
   - *Gold City Narrative:* Alice's miners dig up ~450 BTC every day. If her business is healthy, she holds the gold in her storehouses. But if energy costs rise or margins shrink, she sends wagons down to the exchange to sell.
   - *Real Market Diagnostic:* Henry checks Miner Reserve Balances and Miner Exchange Inflows. Rising reserves mean Alice is retaining coins. High inflows to exchange deposit addresses mean Alice is distributing.
   - *Why This Matters:* Baseline mining production is continuous, but active miner selling is variable. Distinguishing retention from distribution reveals whether new supply is hitting the market floor.

2. **Checking Jonas's Ancient Vaults (Dormant Supply Activation):**
   - *Henry's Question:* "Are Jonas's ancient vault doors staying sealed, or are heavy gold wagons leaving the vaults toward the city?"
   - *Gold City Narrative:* Jonas holds massive historical gold wealth accumulated over years. As long as his vault doors stay locked, that gold has zero effect on daily trading. But when Jonas opens a vault door, previously inactive wealth becomes mobile.
   - *Real Market Diagnostic:* Henry checks Coin Days Destroyed (CDD) and Long-Term Holder (LTH) supply metrics. A spike in CDD confirms that coins unmoved for years are shifting on-chain.
   - *Why This Matters:* Long-term holders control far more Bitcoin than daily miners produce. When Jonas activates dormant supply, large potential overhead resistance enters the market environment.

3. **Evaluating the Exchange Gates (Liquid Float Expansion vs. Contraction):**
   - *Henry's Question:* "Is the total pool of gold sitting on the exchange floors growing larger or shrinking into long-term storage?"
   - *Gold City Narrative:* If Alice ships heavy inventory and Jonas opens vaults while buyers stay passive, gold piles up at the exchange gates (expanding float). If buyers like Clara purchase gold and lock it away in cold storage, gold at the exchange gates disappears (contracting float).
   - *Real Market Diagnostic:* Henry checks Total BTC Exchange Balances and 30-day Exchange Net Position Change.
   - *Why This Matters:* In a contracting float environment, price becomes inelastic: even modest buying demand drives rapid upward movement because available supply is thin. In an expanding float environment, rallies encounter heavy overhead friction.

### Common Trader Mistake
*The Retail Mistake:* Seeing a daily miner transfer on Twitter and immediately placing a short trade expecting price to crash in the next 5 minutes.
*Henry's Rule:* Supply metrics move slowly over days, weeks, and months. Never use Camera 1 for intraday trade timing. Use Camera 1 to establish the structural supply environment, then let the auction cameras dictate execution.

### Henry's Scenario & Practical Bias Guide

| What Henry Sees | Gold City Narrative | What It Means for the Market | Henry's Practical Action Guide |
|---|---|---|---|
| **Scenario 1: Supply Expansion** | Alice sends heavy miner reserve wagons to market; Jonas opens old vaults (high CDD); Exchange reserves rising. | Available Liquid Float is expanding. Overhead supply density is high across venues. | **Overhead Supply Bias.** Long breakouts require overwhelming spot demand (Clara/David); rallies into resistance face higher probability of passive absorption and fading. |
| **Scenario 2: Supply Contraction** | Alice holds minted gold in treasury; Jonas vaults stay locked; Clara purchases gold and removes it (Exchange reserves falling). | Available Liquid Float is shrinking into deep storage. Market supply is structurally tight. | **Supply Scarcity Bias.** Auction is hyper-sensitive to buying demand; value dips into support attract strong responsive buying; breakouts encounter thinner resistance. |
| **Scenario 3: Supply Stability** | Alice distributes at normal baseline rates; Jonas remains quiet; Exchange balances flat. | Baseline supply environment. No structural supply shift occurring. | **Neutral Supply Bias.** Defer purely to higher timeframe Volume Profile auction boundaries and lower timeframe order flow cameras. |

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Daily to Weekly (supply structure changes over days, weeks, and months; never checked intraday).
- **Primary Data Sources**:
  - Glassnode (Supply on Exchanges, LTH Supply, Adjusted CDD)
  - CryptoQuant (Exchange Reserve BTC, Miner Outflow)
  - Checkonchain (HODL Waves, Realized Cap HODL Waves)
