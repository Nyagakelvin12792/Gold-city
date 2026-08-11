# Camera 2 – Aggression (Order Flow & CVD)

## 1. Gold City Narrative
Most of what happens on the exchange floor is quiet and patient. Merchants sit at their booths with gold laid out, waiting for someone to agree their price is fair. Nobody's in a hurry. But every so often, someone comes through the doors who isn't willing to wait at all.

David is the one Henry sees doing this most often, and in the biggest bursts. David doesn't own gold, and he doesn't need it the way Ben does for his factory or Edward does for his jewelry business. David borrows against gold he doesn't have, and when he thinks the price is about to move, he doesn't place a patient order and hope someone meets it, he storms straight up to Frank's booth and takes whatever's sitting there, at whatever price it costs, just to be in before everyone else catches on. Because he's often doing this with borrowed size, when David moves, he tends to move in a crowd, one aggressive rush followed by another, not a single trade.

Ben and Edward can behave this way too, but for a completely different reason. When Ben's factory genuinely runs low on gold mid-production, or when Edward has a client waiting on a large jewelry order, they don't have the luxury of patience either. They'll pay up and take Frank's offer immediately, same behavior as David on the surface, but driven by real, physical need rather than a bet on where price is headed next.

Henry's job on this camera is to watch these rushes and ask one question, over and over: when someone comes storming through the doors buying aggressively, is Frank actually running out of gold to sell them, meaning price genuinely has to move, or is Frank quietly absorbing every bit of it without his booth ever looking short?

## 2. Theory
Every trade on the floor is either aggressive or passive. A passive order is Frank sitting still, quoting a price and waiting for someone to come to him. An aggressive order is someone refusing to wait, crossing straight to Frank's price and taking it immediately.

Henry keeps a running tally of this called Cumulative Volume Delta, or CVD. Every aggressive buy adds to the tally, every aggressive sell subtracts from it.

Two situations come up again and again, and they're mirror images of each other:

**Absorption Divergence**: price makes a new high, but CVD is declining. Aggressive buying is happening, but it's being quietly absorbed by passive sellers, price isn't actually being driven up by real conviction.

**Exhaustion Divergence**: CVD makes a new high, but price fails to follow. Aggressive buying is happening in size, but it's running out of steam, no follow-through.

## 3. Real Market Translation
Henry's CVD reading needs to be split in two, since David's aggression and Ben or Clara's aggression look different once separated. Spot CVD, aggregated across Binance, Coinbase, and Kraken, captures real buying and selling of actual Bitcoin. Perpetual futures CVD, aggregated across Binance, Bybit, and OKX, captures David's leveraged world.

Alongside CVD, Henry watches Open Interest, the total count of active leveraged contracts still open. Rising price, rising CVD, and rising Open Interest together confirm genuinely new leveraged positions opening, not existing ones being shuffled. Funding rates tell Henry what it currently costs David to hold his position overnight. Liquidation volume matters separately, since a liquidation is David being forced out, not choosing to sell.

Data sources: Coinglass (open interest, funding rates, liquidations), Exocharts (CVD, footprint charts, delta divergence).

## 4. Litmus Test
Who is actually crossing the spread and forcing a trade right now, and is that aggression genuinely moving price, or is it quietly being absorbed by everyone sitting patiently behind it?

## 5. Update Frequency & Data Source
Real-time, tick by tick. Checked only during active trade timing and management, not part of the daily morning routine the way Weather and Supply are.
