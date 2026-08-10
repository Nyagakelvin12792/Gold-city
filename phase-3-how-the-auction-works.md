# Phase 3: How the Auction Works

## Why Exchanges Exist
Alice mines gold but doesn't know where to sell it. Ben needs gold for his factory but doesn't know where to buy it. Without a meeting point, this is friction and missed business. The exchange exists to solve this coincidence-of-wants problem.

**Market translation:** order matching engines, spot vs. derivatives exchanges, centralized vs. decentralized liquidity venues.

## The Auction Mechanics
The floor runs on a continuous double auction: buyers and sellers submit prices, Frank matches them.

**Market translation:** matching engine logic (FIFO, Pro-Rata), limit order queues, crossing the spread.

## Frank and Inventory
Frank sets up his booth with limited gold and cash. He manages his inventory carefully, adjusting his quotes to avoid getting wiped out by one-sided flow.

**Market translation:** market maker inventory risk, bid-ask spread mechanics, adverse selection, quote skewing.

## Why Prices Move
Price only moves when someone's aggressive buying eats through all of Frank's resting gold quotes at a price level.

**Market translation:** market sweeps, volume clearing limit orders, order book thinness.

## Acceptance
Merchants repeatedly doing business at a new price level over time, confirming it as fair value.

**Market translation:** High Volume Nodes (HVNs), consolidating price action, value area migration.

## Rejection
A quick probe to a price where nobody's willing to trade, snapping back immediately.

**Market translation:** wicks, single prints, Low Volume Nodes (LVNs), failed breakouts.

## The Exchange Building
The floor plan of the exchange, mapping order flow and value across space. Fully formalized in Phase 2 (The City Geography).
