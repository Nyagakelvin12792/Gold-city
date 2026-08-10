# Phase 5: Validation Framework & Empirical Track Record

To eliminate guesswork and subjective bias, SVAF enforces an empirical validation pipeline connecting narrative setups to programmatic backtests.

---

## 1. The Validation Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│ 1. NARRATIVE HYPOTHESIS                                     │
│ - Setup defined in Gold City terms & 6-camera criteria       │
│ - Tagged: [HYPOTHESIS — NOT YET BACKTESTED]                 │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 2. PYTHON BACKTESTING ENGINE (SVAF Core)                    │
│ - Historical tick/order flow data ingested                  │
│ - Camera parameters backtested across 3+ years of data       │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 3. STATISTICAL VALIDATION GATE                              │
│ - Sample size N >= 100 trades                               │
│ - Profit Factor >= 1.5                                      │
│ - Expectancy > 0                                            │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 4. STATUS TAG PROMOTION                                     │
│ - Tag updated to: [VALIDATED — BACKTESTED]                  │
│ - Empirical win rate, drawdown, and expectancy logged       │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Status Tag Reference Table

| Setup Name | Current Status | Backtest Sample (N) | Win Rate % | Profit Factor | Last Updated |
|---|---|---|---|---|---|
| Failed Migration Snapback | `[HYPOTHESIS — NOT YET BACKTESTED]` | 0 | N/A | N/A | 2026-08-11 |
| Initiative Highway Breakout | `[HYPOTHESIS — NOT YET BACKTESTED]` | 0 | N/A | N/A | 2026-08-11 |
| Responsive Value Area Rotation | `[HYPOTHESIS — NOT YET BACKTESTED]` | 0 | N/A | N/A | 2026-08-11 |

---

## 3. Maintenance Rules

- When the Python backtesting script evaluates a setup, update the table above with exact sample sizes, win rates, and profit factors.
- If a setup fails the validation gate (Profit Factor < 1.3 or negative expectancy), tag it `[REJECTED — FAILED BACKTEST]` and log the reasons in `assets/backtests/`.
