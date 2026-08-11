# Phase 4: Risk Management & Portfolio Governance [UNREVIEWED DRAFT]

## 1. Gold City Narrative

Henry knows that even the most brilliant trader in Gold City can have three bad days in a row. A sudden central bank statement from Grace or a sudden unsealing of ancient vaults by Jonas can shift the weather overnight. Survival in Gold City does not depend on being right on every single trade; it depends on protecting the treasury reserves so that Henry is always standing on the balcony for tomorrow's auction.

Henry treats his gold treasury like a fortress. He sets strict rules for his vault doors. He never allows more than 3% of his total treasury to leave the fortress on any single day. If three trades fail in a row, Henry locks the vault doors, steps away from the balcony, and takes a mandatory 24-hour cooling period to re-examine his camera feeds.

By enforcing rigid portfolio governance, Henry ensures that a string of bad trades is nothing more than a minor scratch on his fortress armor. He stays in business through every economic winter, ready to profit when full camera alignment returns.

---

## 2. Theory

Risk management is the mathematical foundation of long-term trading survival. In market auction theory, unexpected liquidity shocks and volatility regime shifts are statistical inevitabilities. Risk management transforms trading from a high-stakes gamble into a regulated portfolio management system.

### Drawdown Circuit Breakers & Portfolio Governance
A circuit breaker is a non-negotiable threshold that automatically alters trading behavior to protect capital during adverse performance periods:
- **Daily Loss Cap (3% of Total Equity):** Prevents emotional revenge trading during turbulent market sessions. Hitting the daily cap forces an immediate trading halt for the remainder of the session.
- **Maximum Drawdown Cutoff (10% Peak-to-Trough Drawdown):** If total portfolio equity drops 10% from its historical peak, risk sizing across all setups is immediately cut in half (from 1-2% risk per trade down to 0.5-1% risk per trade) until peak equity is recovered.
- **Max Concurrent Open Exposure (4% Total Open Risk):** Caps aggregate risk across multiple active positions, ensuring that simultaneous market shocks cannot breach account survival limits.

### Leverage Optimization & Liquidation Safety
A frequent misconception in derivative trading is confusing leverage with risk. Leverage dictates margin collateral requirements, not dollar risk:
- **Variable Distance Risk Sizing:** Dollar risk remains strictly capped at 1% to 2% of portfolio equity regardless of whether leverage is set to 2x, 5x, or 10x.
- **The 30% Liquidation Buffer Rule:** For perpetual futures entries, position liquidation prices must remain at least 30% away from current market entry price. This guarantees that short-term volatility wicks or order book sweeps cannot trigger an exchange forced liquidation before structural invalidation is reached.

### Psychological Cool-Off Discipline
Human psychology deteriorates rapidly during consecutive losses, encouraging emotional over-leveraging and rule violations:
- **The Three-Loss Rule:** Three consecutive losing trades trigger a mandatory 24-hour cool-off period. Trading is suspended while the trader reviews trade logs to determine if a market regime shift has occurred (e.g. transitioning from +GEX pinning to -GEX volatility expansion).

---

## 3. Real Market Translation

Phase 3 translates portfolio governance rules into concrete equations, account parameters, and execution log tracking tools.

### Metric Category 1: Portfolio Governance Parameters
- **Maximum Risk Per Trade:** 1.0% to 2.0% of total portfolio equity.
- **Daily Portfolio Loss Limit:** 3.0% of total portfolio equity (session trading halted upon breach).
- **Maximum Peak-to-Trough Drawdown Cutoff:** 10.0% of peak equity (triggers 50% risk sizing reduction).
- **Maximum Concurrent Open Risk:** 4.0% total open equity at risk.

### Metric Category 2: Perpetual Liquidation Buffer Math
To ensure liquidation price remains at least 30% away from entry price:

$$\text{Minimum Margin Distance} = \text{Entry Price} \times 0.30$$

- **For Long Positions:** $\text{Liquidation Price} \le \text{Entry Price} \times 0.70$
- **For Short Positions:** $\text{Liquidation Price} \ge \text{Entry Price} \times 1.30$

If position leverage results in a liquidation price closer than 30% to entry price, leverage must be reduced or additional margin collateral deposited.

### Metric Category 3: The Execution & Audit Log
Every trade executed in the SVAF framework must be logged with the exact 6-camera alignment state at entry:
- Date & Timestamp (UTC)
- Setup Name (e.g. *Initiative Highway Breakout*)
- Status Tag (*[HYPOTHESIS - NOT YET BACKTESTED]* or *[VALIDATED - BACKTESTED]*)
- 6-Camera Alignment Checklist (Cams 6, 1, 3, 5, 4, 2)
- Entry Price, Invalidation Price, Target 1, Target 2
- Position Size (BTC & USD) & Risk % (1-2%)
- Outcome & Post-Trade Notes

---

## 4. Litmus Test

The Litmus Test serves as Henry's risk audit before placing any new trade.

### The Core Question
"Are my capital reserves protected by strict risk limits and circuit breakers before taking another trade?"

### Henry's Step-by-Step Diagnostic Process

1. **Checking Account Status:**
   - *Henry's Question:* "Has today's total loss reached 3%, or has portfolio equity dropped 10% from peak?"
   - *Gold City Narrative:* Henry checks his fortress gates. If 3% of gold was lost today, the gates lock immediately. No exceptions.

2. **Checking Concurrent Exposure & Liquidation Safety:**
   - *Henry's Question:* "Will adding this trade breach my 4% max open risk limit, and is my liquidation price at least 30% away from entry?"
   - *Gold City Narrative:* Henry counts his open wagons. He ensures no market storm can wipe out his vault before his structural stop is hit.

3. **Checking Psychological Discipline:**
   - *Henry's Question:* "Have I suffered three consecutive losses without a 24-hour cool-off period?"
   - *Gold City Narrative:* If three trades fail in a row, Henry steps off the balcony to clear his head and audit his camera feeds.

### Common Trader Mistake
*The Retail Mistake:* Taking revenge trades after a loss, doubling leverage to "get money back quickly," and blowing up an entire trading account in a single session.
*Henry's Rule:* Accept losses as a routine cost of business. Respect the circuit breakers and let the mathematical law of risk management preserve your capital for the next high-probability setup.

### Henry's Risk Governance Matrix

| Risk Guard | Operational Threshold | Gold City Meaning | Required Action |
|---|---|---|---|
| **Daily Loss Limit** | 3.0% of total equity lost in 24 hours. | Daily gold loss limit reached at fortress. | Immediately halt all trading for remainder of session. |
| **Drawdown Cutoff** | 10.0% peak-to-trough equity drop. | Fortress reserves breached. | Cut risk sizing by 50% across all setups until peak equity restored. |
| **Max Open Exposure** | 4.0% total open portfolio risk. | Maximum open wagons on the road. | Reject new trade entries until existing positions close or hit T1. |
| **Three-Loss Cool-off** | 3 consecutive losing trades. | Trader fatigue / regime shift. | Mandatory 24-hour trading pause to audit camera alignment logs. |

---

## 5. Update Frequency & Data Source

- **Update Frequency**: Checked after every closed trade; audited daily prior to session opening.
- **Primary Data Sources**:
  - Exchange Account Equity & Margin Dashboard (Binance, Bybit, OKX)
  - SVAF Trade Execution Log & Risk Spreadsheet
