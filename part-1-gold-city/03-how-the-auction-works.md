# Phase 3: How the Auction Works [UNREVIEWED DRAFT]

## 1. Why Exchanges Exist

Outside the heavy stone gates of the exchange, Gold City is vast, fragmented, and chaotic. Alice walks down muddy alleyways carrying heavy sacks of unrefined gold ore fresh from her mines, desperate to convert it into cash to pay her workers. Three streets over, Ben sits in his silent factory, staring at idle machinery, needing gold bars immediately to fulfill an urgent production order. Nearby, Clara holds substantial cash reserves, looking for a safe venue to steadily convert paper coins into physical gold for long-term vaulting. Meanwhile, Grace (the monetary authority) and Ivy (the Exchequer) issue paper currency and collect city levies, creating the broader financial tide under which all commerce flows. But in the crowded, unorganized streets, Alice, Ben, and Clara cannot efficiently locate one another. Time slips away, production stalls, and miners go unpaid. The city suffers from severe trade friction until the Grand Exchange opens its massive iron doors. By bringing every participant into a single brightly lit hall, the exchange solves the coincidence-of-wants problem, eliminating friction and creating a centralized arena where fair value can be negotiated in public view.

**Market Microstructure Translation:** Centralized matching engines (Binance, Coinbase, Kraken, OKX) vs. decentralized liquidity pools, spot vs. derivatives venues, liquidity consolidation solving market fragmentation and bid-ask spread inefficiency.

---

## 2. The Mechanics of the Double Auction

Henry stands on the high wooden observation gallery looking down at the exchange floor. The room hums with constant energy. On the left side of the floor stand the buyers, holding stacks of cash and shouting the highest price they are willing to pay: the bids. On the right side stand the sellers, holding bars of gold and shouting the lowest price they are willing to accept: the asks. In the center sits the auction block, where trades occur only when an aggressive buyer steps up to meet a seller's ask, or an aggressive seller steps down to hit a buyer's bid. Edward (the jewelry magnate) quietly places large block orders on the bid side for his luxury workshop, while Jonas (the vault keeper) stands near the back, observing whether gold will be deposited into deep storage or withdrawn onto the floor. It is a continuous double auction, a perpetual tug-of-war where neither side yields an inch without a fight. Henry watches as hundreds of individual negotiations happen simultaneously, creating a continuous rhythm of agreed trades.

**Market Microstructure Translation:** Limit Order Book (LOB) matching engine logic (Price-Time Priority / FIFO, Pro-Rata allocation), passive limit order queues, market orders crossing the bid-ask spread.

---

## 3. Frank and Inventory Risk

At the center of the trading floor sits Frank at his heavy mahogany booth. Frank is not a speculator betting on where price will go tomorrow; Frank is a market maker who earns his living by standing in the middle, offering to buy from sellers at a slightly lower price and sell to buyers at a slightly higher price. But Frank's position is filled with constant danger. If Alice brings an unexpected surge of mined gold or Jonas opens the vault doors to liquidate dormant coins, Frank is forced to buy bar after bar of gold, draining his cash reserves and leaving him holding a mountain of inventory in a plummeting market. If Edward or Ben arrive needing massive immediate delivery, Frank's gold bars are stripped away, leaving him short of inventory as prices surge. To survive this adverse selection, Henry watches Frank constantly adjust his quotes. When Frank gets too heavy with gold, he lowers his buy bid to discourage sellers and slashes his ask to attract buyers, frantically balancing his inventory before the market wipes him out.

**Market Microstructure Translation:** Market maker inventory control models (Ho-Stoll, Avellaneda-Stoikov), bid-ask spread capture, adverse selection risk, quote skewing based on inventory skew.

---

## 4. Why Prices Move

The floor settles into a temporary quiet on Floor 95. Frank has twenty bars of gold laid out on his counter at ninety-five cash coins each. Buyers walk past, looking but refusing to pay more. Then the heavy front doors burst open. David storms onto the floor surrounded by a crowd of leveraged speculators, energized by liquidity conditions originating from Grace and Ivy. David does not place a patient order on the left side of the room; he sprints straight to Frank's booth shouting that he will buy every bar on the counter right now, regardless of cost. In seconds, David's aggressive buying sweeps away all twenty bars. Frank's counter at Floor 95 is completely bare. David is still shouting for more gold. Because there is no gold left at Floor 95, the negotiation is violently forced up to Floor 96, where the next waiting merchant has gold listed for sale. Henry notes the essential truth of the floor: price never moves simply because people feel bullish; price moves only when aggressive market orders devour every passive limit order resting at a price level.

**Market Microstructure Translation:** Market sweeps, order book liquidity consumption, aggressive market order flow devouring passive limit order queues, order book thinness driving price movement and slippage.

---

## 5. Acceptance

After price is pushed up to Floor 100, Henry watches carefully from his gallery to see what happens next. Instead of retreating, more participants arrive at Floor 100. Ben arrives from his factory, bringing fresh cash to secure gold for production. Clara steps up to systematically accumulate spot gold at this level. Alice sends a steady stream of newly mined gold down to the floor, satisfied with the price. Jonas opens the vault doors to record incoming long-term deposits, confirming that participants consider Floor 100 a secure value store. Frank builds a permanent booth on Floor 100, laying out thick stacks of bids and asks. Hours pass, and trading volume swells. Merchants unpack crates, set up camp, and drink tea together, comfortably doing business at Floor 100 for the rest of the day. The new price level has been fully accepted by the city. Floor 100 has transformed into a bustling District, a High Volume Node where both buyers and sellers agree that fair value currently resides.

**Market Microstructure Translation:** Auction acceptance, time-at-price consolidation, High Volume Nodes (HVNs), Value Area migration, building fair value through repeated two-way trade execution.

---

## 6. Rejection

Later in the afternoon, David attempts another aggressive push. He charges up the stairwell past Floor 100, driving price up to Floor 108. But as price hits Floor 108, the room falls deathly quiet. No major participants follow David up the stairs. Ben refuses to buy gold at such inflated prices, Edward halts his block purchases, Clara sits quietly on her hands, and Jonas refuses to store gold valued at unproven levels. Frank senses the total absence of buying interest behind David and immediately pulls his bids away from Floor 108. Realizing he is standing alone on a high, deserted ledge with no one to sell to, David panics. Aggressive sellers flood in, and price snaps back down the stairwell like a stretched rubber band, falling straight back to Floor 100 in a matter of minutes. On Henry's profile board, Floor 108 shows only a long, thin streak where price briefly probed and was violently rejected. Floor 108 is a Low Volume Node, a Highway where no business could be sustained.

**Market Microstructure Translation:** Auction rejection, single prints, Low Volume Nodes (LVNs), price wicks, tail excess, failed breakouts returning to previous value areas.

---

## 7. The Architecture of the Exchange Building

Henry steps back from the gallery railing and looks at his map of the Exchange Building. The entire building is a vertical stack of floors representing price levels, connected by stairwells and halls. The crowded, noisy floors where merchants spend hours trading form the solid Districts of fair value. The empty, slippery stairwells where price moves rapidly between Districts form the Highways of rejection. By understanding how the double auction operates within this physical space, Henry no longer sees random price charts. He sees a living building populated by all ten participants (Alice, Ben, Clara, David, Edward, Frank, Grace, Ivy, Jonas, and Henry) constantly testing, accepting, and rejecting fair value across time.

**Market Microstructure Translation:** Market Profile / Volume Profile distribution architecture, value areas (VAH/VAL/VPOC), market balance vs. imbalance transitions.
