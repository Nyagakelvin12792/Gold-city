# Phase 3: Entry, Invalidation, Sizing & Trade Management

Once an auction condition aligns across Henry's six cameras, execution requires strict rules for entry, structural invalidation, and position sizing.

---

## 1. Entry Triggers

We never enter a trade simply because price reaches a level. We enter when **order flow confirms that passive absorption or aggressive initiative is occurring**.

### Micro-Entry Triggers
1. **Delta Divergence Confirmation**: CVD forms a clear divergence against price at a key Profile structural boundary (VAH/VAL/LVN).
2. **DOM Absorption Signal**: A massive limit order wall on Camera 4 absorbs aggressive market orders without allowing price to print past it.
3. **Footprint Imbalance Flip**: Diagonal buying/selling imbalance (3:1 ratio) on 5m/15m footprint chart confirms responsive or initiative flip.

---

## 2. Structural Invalidation

Invalidation in SVAF is **purely structural**, never an arbitrary point percentage or random dollar distance.

- **For Long Trades**: Invalidation is set below the structural High Volume Node (HVN) floor or beneath the passive absorption wall where the auction hypothesis breaks down.
- **For Short Trades**: Invalidation is set above the structural HVN ceiling or beyond the failed migration high.

If price prints and accepts volume beyond your structural invalidation level, **the Gold City story was wrong**. Exit immediately. Do not hold and hope.

---

## 3. Position Sizing Rules

Position size is calculated backward from your predefined risk amount and the structural invalidation distance:

$$\text{Position Size (BTC)} = \frac{\text{Account Capital} \times \text{Risk \%}}{\text{Entry Price} - \text{Invalidation Price}}$$

### Rules:
- **Maximum Risk Per Trade**: Standard risk is 1.0% to 2.0% of total portfolio equity.
- **Leverage Ceiling**: Leverage is used strictly to optimize capital efficiency, never to increase dollar risk beyond the 1-2% risk cap.
- **Variable Distance Sizing**: If invalidation is far away (wide LVN highway), position size shrinks automatically; if invalidation is tight (sharp absorption floor), position size expands proportionately while dollar risk remains identical.

---

## 4. Trade Management & Exits

1. **Target 1 (Partial Take Profit)**: Scalp 50% of the position at the Volume Point of Control (VPOC) to bring trade risk to zero.
2. **Target 2 (Runner)**: Hold remaining 50% for the opposite Value Area boundary (VAL to VAH) or full LVN highway expansion.
3. **Trailing Stop**: Trail stop loss behind developing 4H VPOC nodes as value migrates.
