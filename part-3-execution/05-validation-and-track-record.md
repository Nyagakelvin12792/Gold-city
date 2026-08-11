# Phase 5: Validation Framework & Empirical Track Record [UNREVIEWED DRAFT]

## 1. Gold City Narrative

In Gold City, there is a clear distinction between trading rumors and verified truth. Every day, merchants on the exchange floor gossip about new "secret patterns" or "guaranteed strategies." Henry ignores the gossip. He steps into the city archives with his ledger.

Before Henry commits a single coin of real treasury capital to a trade setup, he tests the setup against years of historical city market archives. He requires every setup to pass a rigorous empirical trial. If a setup proves profitable over hundreds of historical auctions, Henry stamps it as a **Verified Trade (`[VALIDATED - BACKTESTED]`)**. If a setup has not yet completed its historical trial in the archives, Henry labels it as an **Unproven Idea (`[HYPOTHESIS - NOT YET BACKTESTED]`)** and cuts his risk sizing in half. If a setup fails the trial, Henry stamps it **Rejected (`[REJECTED - FAILED BACKTEST]`)** and burnishes it out of his playbook.

By maintaining his Ledger of Verified Truth, Henry ensures that his trading decisions are anchored in empirical statistical fact rather than wishful thinking.

---

## 2. Theory

The SVAF Validation Framework eliminates subjective guesswork by enforcing a strict empirical promotion pipeline for all trading setups. In financial markets, cognitive biases (such as recency bias, confirmation bias, and selective memory) lead traders to believe unproven setups work far better than they actually do.

### The Status-Tag Lifecycle
To enforce institutional discipline, every setup in the SVAF framework follows a strict four-stage promotional lifecycle:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. NARRATIVE HYPOTHESIS                                     │
│ - Defined in Gold City terms & 6-camera criteria             │
│ - Tagged: [HYPOTHESIS - NOT YET BACKTESTED]                 │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 2. PYTHON BACKTESTING ENGINE (SVAF Core)                    │
│ - Historical tick/order flow data ingested                  │
│ - 6-camera parameters backtested across 3+ years of BTC data│
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 3. STATISTICAL VALIDATION GATE                              │
│ - Sample size N >= 100 trades                               │
│ - Profit Factor >= 1.5                                      │
│ - Expectancy > 0                                            │
└──────────────────────────────┬──────────────────────────────┘
                               │
 ┌─────────────────────────────┴─────────────────────────────┐
 │                                                           │
 ▼                                                           ▼
┌──────────────────────────────┐            ┌──────────────────────────────┐
│ 4A. PROMOTION                │            │ 4B. REJECTION                │
│ - Tagged:                    │            │ - Tagged:                    │
│   [VALIDATED - BACKTESTED]   │            │   [REJECTED - FAILED BACKTEST] │
└──────────────────────────────┘            └──────────────────────────────┘
```

### Statistical Gate Criteria
A setup cannot be promoted to `[VALIDATED - BACKTESTED]` unless it meets three non-negotiable statistical standards in backtesting:
1. **Sample Size (N >= 100):** Must execute over at least 100 historical trade instances across varying volatility regimes to ensure statistical significance.
2. **Profit Factor (PF >= 1.5):** Total gross profits divided by total gross losses must exceed 1.50 across the backtest period.
3. **Positive Mathematical Expectancy (E > 0):** Must demonstrate positive net dollar return per dollar risked after accounting for slippage and exchange fees.

If a setup achieves a Profit Factor below 1.30 or negative expectancy, it is tagged `[REJECTED - FAILED BACKTEST]` and removed from active trading.

---

## 3. Real Market Translation

Phase 5 translates the validation pipeline into programmatic Python scripts, historical order book data feeds, and an active Status-Tag Reference Table.

### The SVAF Python Backtesting Core
The separate SVAF Python backtesting engine ingests high-frequency tick data, order book depth logs, footprint volume delta, and options GEX series to simulate the 6-camera alignment rules programmatically.

### Mathematical Performance Formulas

$$\text{Profit Factor (PF)} = \frac{\sum \text{Gross Winning Trades (\$)}}{\sum \text{Gross Losing Trades (\$)}}$$

$$\text{Expectancy (E)} = (\text{Win Rate \%} \times \text{Average Win \$}) - (\text{Loss Rate \%} \times \text{Average Loss \$})$$

### Official Status-Tag Reference Table

The table below maintains the real-time empirical validation status for all five Phase 2 setups:

| Setup Name | Current Status | Backtest Sample (N) | Win Rate % | Profit Factor | Expectancy ($/R) | Last Audited |
|---|---|---|---|---|---|---|
| **Setup 1: Initiative Highway Breakout** | `[HYPOTHESIS - NOT YET BACKTESTED]` | 0 | N/A | N/A | N/A | 2026-08-11 |
| **Setup 2: Failed Migration Snapback** | `[HYPOTHESIS - NOT YET BACKTESTED]` | 0 | N/A | N/A | N/A | 2026-08-11 |
| **Setup 3: Responsive Value Area Rotation** | `[HYPOTHESIS - NOT YET BACKTESTED]` | 0 | N/A | N/A | N/A | 2026-08-11 |
| **Setup 4: Options Volatility Pin** | `[HYPOTHESIS - NOT YET BACKTESTED]` | 0 | N/A | N/A | N/A | 2026-08-11 |
| **Setup 5: Macro Supply-Squeeze Expansion** | `[HYPOTHESIS - NOT YET BACKTESTED]` | 0 | N/A | N/A | N/A | 2026-08-11 |

---

## 4. Litmus Test

The Litmus Test serves as Henry's empirical audit before taking any setup.

### The Core Question
"Does this setup carry an empirical `[VALIDATED]` status tag, or am I trading an unproven hypothesis with reduced risk sizing?"

### Henry's Step-by-Step Diagnostic Process

1. **Checking Setup Validation Status:**
   - *Henry's Question:* "Is this setup tagged `[VALIDATED]` with backtested statistics, or `[HYPOTHESIS]`?"
   - *Gold City Narrative:* Henry inspects his archive ledger. If the setup is an unproven rumor (`[HYPOTHESIS]`), he cuts his risk size in half.

2. **Verifying Backtest Statistics:**
   - *Henry's Question:* "Has the setup demonstrated a Profit Factor >= 1.5 over at least 100 historical trades?"
   - *Gold City Narrative:* Henry checks the sample size in the archives to ensure the win rate is not a temporary lucky streak.

3. **Enforcing Playbook Governance:**
   - *Henry's Question:* "Has this setup been rejected (`[REJECTED - FAILED BACKTEST]`) by the Python engine?"
   - *Gold City Narrative:* If the setup failed the historical trial, Henry refuses to trade it under any circumstances.

### Common Trader Mistake
*The Retail Mistake:* Claiming a trade setup has an "80% win rate" based on three good trades last week without running a multi-year historical backtest.
*Henry's Rule:* Never state a win rate, profit factor, or edge without an empirical `[VALIDATED - BACKTESTED]` status tag backing it.

### Empirical Validation Governance Matrix

| Status Tag | Empirical Condition | Risk Sizing Rule | Operational Action |
|---|---|---|---|
| `[HYPOTHESIS - NOT YET BACKTESTED]` | Setup defined in narrative; backtest pending. | Reduce risk by 50% (0.5% - 1.0% max risk). | Permitted for trading with reduced sizing; queue for Python backtest. |
| `[VALIDATED - BACKTESTED]` | N >= 100 trades, PF >= 1.50, E > 0. | Full risk sizing (1.0% - 2.0% max risk). | Fully approved for active trading in live campaigns. |
| `[REJECTED - FAILED BACKTEST]` | PF < 1.30 or negative expectancy. | ZERO risk permitted (0% equity). | Strictly forbidden from live trading; archive in research logs. |

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Audited quarterly or immediately upon completion of Python backtesting runs.
- **Primary Data Sources**:
  - SVAF Python Backtesting Engine Repository (`svaf-core/backtests/`)
  - Historical BTC Tick & Order Flow Data Archives (Kaggle, Tardis.dev, CryptoDataDownload)
