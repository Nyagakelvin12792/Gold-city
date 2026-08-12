/* ==========================================================================
   100% COMPLETE SVAF LAYER 1 METRICS SPECIFICATION & DIRECT TRADINGVIEW LINKS
   ========================================================================== */

export const METRICS_SPEC = {
  '1a': {
    id: '1a',
    title: 'STEP 1A: CAMERA 6A — GRACE (MONETARY POLICY & M2)',
    camera: 'Camera 6 (Weather)',
    character: 'Grace (Monetary Authority)',
    tooltip: 'Grace controls monetary water valves. Click the blue link buttons above each metric to open TradingView charts. Sloping UPWARD = Expanding Liquidity (+GEX Tailwind). Sloping DOWNWARD = Contracting Liquidity.',
    metrics: [
      {
        id: 'm2Trend',
        label: 'Global M2 Money Supply Trend',
        type: 'select',
        options: ['Expanding (+GEX Tailwind)', 'Contracting (-GEX Headwind)', 'Neutral / Flat'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=FRED%3AM2SL',
        sourceLabel: 'TradingView: FRED:M2SL ↗'
      },
      {
        id: 'walclState',
        label: 'Federal Reserve Assets (WALCL Balance)',
        type: 'select',
        options: ['Expanding (QE / Liquidity Injection)', 'Contracting (QT)', 'Neutral / Flat'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=FRED%3AWALCL',
        sourceLabel: 'TradingView: FRED:WALCL ↗'
      },
      {
        id: 'fedRate',
        label: 'Fed Funds Policy Rate Target Cycle',
        type: 'select',
        options: ['Easing / Cutting Cycle', 'Paused / Stationary', 'Hiking / Tightening Cycle'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=FRED%3AFEDFUNDS',
        sourceLabel: 'TradingView: FRED:FEDFUNDS ↗'
      }
    ]
  },
  '1b': {
    id: '1b',
    title: 'STEP 1B: CAMERA 6B — IVY (FISCAL POLICY & NET LIQUIDITY)',
    camera: 'Camera 6 (Weather)',
    character: 'Ivy (Exchequer & Fiscal Treasury)',
    tooltip: 'Ivy manages city bonds & treasury reserves. HOW TO INTERPRET STEP 1B: 1) Click Net Liquidity link: line sloping UP = Bullish. 2) Click TGA link: line sloping DOWN = Government spending cash into reserves (Bullish). 3) Click RRP link: line sloping DOWN = Money moving into T-Bills (Bullish).',
    metrics: [
      {
        id: 'netLiquidityValue',
        label: 'Net Fed Liquidity Formula (FRED:WALCL-WTREGEN-RRPONTSYD)',
        type: 'text',
        placeholder: 'e.g. $6.12 Trillion',
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=FRED%3AWALCL-FRED%3AWTREGEN-FRED%3ARRPONTSYD',
        sourceLabel: 'TradingView: FRED:WALCL-WTREGEN-RRPONTSYD ↗'
      },
      {
        id: 'tgaState',
        label: 'Treasury General Account (TGA Balance)',
        type: 'select',
        options: ['Draining TGA (Injecting Cash into Reserves)', 'Rebuilding TGA (Draining Cash)', 'Stable'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=FRED%3AWTREGEN',
        sourceLabel: 'TradingView: FRED:WTREGEN ↗'
      },
      {
        id: 'rrpState',
        label: 'Reverse Repo Facility (RRP Balance)',
        type: 'select',
        options: ['Draining RRP (Liquidity Bridge to T-Bills)', 'Building RRP', 'Stable'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=FRED%3ARRPONTSYD',
        sourceLabel: 'TradingView: FRED:RRPONTSYD ↗'
      },
      {
        id: 'qraFocus',
        label: 'Quarterly Refunding Announcement (QRA)',
        type: 'select',
        options: ['Short-Duration T-Bills (Liquidity Positive)', 'Long-Duration Coupons (Liquidity Negative)', 'Neutral Mix'],
        tradingViewUrl: 'https://home.treasury.gov/policy-issues/financing-the-government/quarterly-refunding',
        sourceLabel: 'US Treasury Official QRA Page ↗'
      }
    ]
  },
  '1c': {
    id: '1c',
    title: 'STEP 1C: CAMERA 6C — BOND YIELDS, DXY & CATALYSTS',
    camera: 'Camera 6 (Weather)',
    character: 'Grace & Ivy (Atmospheric Conditions)',
    tooltip: 'DXY measures global dollar shortage. A declining DXY below 4H key support confirms dollar abundance (Bullish BTC). Rapid 10Y Yield spikes above 4.5% tighten credit conditions.',
    metrics: [
      {
        id: 'dxyLevel',
        label: 'US Dollar Index (DXY) Current Price & Trend',
        type: 'text',
        placeholder: 'e.g. 103.50',
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=TVC%3ADXY',
        sourceLabel: 'TradingView: TVC:DXY ↗'
      },
      {
        id: 'dxyTrend',
        label: 'DXY 4-Hour Trend Direction',
        type: 'select',
        options: ['Downtrend (Dollar Abundance)', 'Uptrend (Dollar Shortage)', 'Sideways Consolidation'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=TVC%3ADXY',
        sourceLabel: 'TradingView: TVC:DXY ↗'
      },
      {
        id: 'yield10Y',
        label: '10-Year US Treasury Yield (DGS10)',
        type: 'select',
        options: ['Falling / Easing (Risk Positive)', 'Spiking / Surging (Tightening Headwind)', 'Flat'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=FRED%3ADGS10',
        sourceLabel: 'TradingView: FRED:DGS10 ↗'
      }
    ]
  },
  '1d': {
    id: '1d',
    title: 'STEP 1D: CAMERA 1A — ALICE (MINER ISSUANCE & RESERVES)',
    camera: 'Camera 1 (Supply)',
    character: 'Alice (Gold Mines)',
    tooltip: 'Alice operates active gold mines. Upward sloping miner balances = Retention State (Miners HODLing = Supply Scarcity). Downward drops = Distribution State (Miners selling to pay operational costs). Baseline issuance = ~450 BTC/day.',
    metrics: [
      {
        id: 'minerReserveState',
        label: 'Alice Miner Treasury Inventory State',
        type: 'select',
        options: ['Retention State (Alice HODLing Minted BTC)', 'Distribution State (Alice Selling to Cover Costs)'],
        tradingViewUrl: 'https://studio.glassnode.com/metrics?m=miners.Balance',
        sourceLabel: 'Glassnode: Miner Reserves Balance ↗'
      },
      {
        id: 'minerInflowVolume',
        label: 'Miner-to-Exchange Inflow Volume',
        type: 'select',
        options: ['Baseline / Low Transfer Volume', 'Spike / Capitulation Selling Inflows'],
        tradingViewUrl: 'https://cryptoquant.com/asset/btc/chart/miner-flows',
        sourceLabel: 'CryptoQuant: Miner Exchange Flows ↗'
      }
    ]
  },
  '1e': {
    id: '1e',
    title: 'STEP 1E: CAMERA 1B — JONAS (DORMANT VAULTS & CDD)',
    camera: 'Camera 1 (Supply)',
    character: 'Jonas (Ancient Vaults)',
    tooltip: 'Jonas holds ancient wealth. Quiet low CDD baseline = Jonas Vaults Sealed (Illiquid). Large vertical CDD spikes = Old dormant coins activated and moving on-chain toward exchanges.',
    metrics: [
      {
        id: 'lthRatio',
        label: 'Long-Term Holder Supply Ratio (>155 Days)',
        type: 'text',
        placeholder: 'e.g. 74.8% LTH',
        tradingViewUrl: 'https://studio.glassnode.com/metrics?m=supply.LthSthRatio',
        sourceLabel: 'Glassnode: LTH Supply Ratio (>155d) ↗'
      },
      {
        id: 'cddActivity',
        label: 'Coin Days Destroyed (CDD) Activity',
        type: 'select',
        options: ['Low Baseline (Jonas Vaults Sealed)', 'Massive CDD Spike (Dormant Supply Activated)'],
        tradingViewUrl: 'https://studio.glassnode.com/metrics?m=indicators.Cdd',
        sourceLabel: 'Glassnode: Coin Days Destroyed (CDD) ↗'
      },
      {
        id: 'hodlWaveTrend',
        label: '1Y+ / 3Y+ HODL Waves Band Trend',
        type: 'select',
        options: ['Expanding (Supply Scarcity)', 'Contracting (Supply Unlocking)'],
        tradingViewUrl: 'https://studio.glassnode.com/metrics?m=supply.HodlWaves',
        sourceLabel: 'Glassnode: 1Y+ HODL Waves ↗'
      }
    ]
  },
  '1f': {
    id: '1f',
    title: 'STEP 1F: CAMERA 1C — LIQUID FLOAT & STH-SOPR',
    camera: 'Camera 1 (Supply)',
    character: 'Exchange Floor & Liquid Float',
    tooltip: 'Liquid float is active exchange inventory. Negative netflows (e.g. -14k BTC) = Coins moving into cold storage. STH-SOPR < 1.0 = Short-term buyers selling at a loss (Capitulation flush completed).',
    metrics: [
      {
        id: 'netflow7d',
        label: '7-Day Exchange Netflow Volume',
        type: 'text',
        placeholder: 'e.g. -14,200 BTC Net Outflow',
        tradingViewUrl: 'https://www.coinglass.com/Balance',
        sourceLabel: 'Coinglass: All Exchange BTC Balances ↗'
      },
      {
        id: 'exchangeReserveLevel',
        label: 'Exchange Total BTC Reserve Level',
        type: 'select',
        options: ['Multi-Month / Multi-Year Lows (Contracted Float)', 'Swelling Exchange Balances (Expanding Float)'],
        tradingViewUrl: 'https://www.coinglass.com/Balance',
        sourceLabel: 'Coinglass: Exchange Reserves ↗'
      },
      {
        id: 'sthSoprValue',
        label: 'Short-Term Holder SOPR (STH-SOPR)',
        type: 'select',
        options: ['STH-SOPR < 1.0 (Loss Realization / Capitulation Reset)', 'STH-SOPR > 1.0 (Profit Taking)', 'STH-SOPR = 1.0 (Neutral Baseline)'],
        tradingViewUrl: 'https://studio.glassnode.com/metrics?m=indicators.SoprSth',
        sourceLabel: 'Glassnode: STH-SOPR Ratio ↗'
      }
    ]
  },

  /* ==========================================================================
     LAYER 2: SPATIAL GEOGRAPHY & AUCTION MAPPING (CAMERAS 3, 2, 4, 5)
     ========================================================================== */
  '2a': {
    id: '2a',
    title: 'STEP 2A: CAMERA 3 — FRANK (VOLUME PROFILE & AUCTION ZONES)',
    camera: 'Camera 3 (Business & Profile)',
    character: 'Frank (District Surveyor & Volume Mapper)',
    tooltip: 'Frank maps the city floor plan. 1) VPOC = Town Center (highest volume level). 2) VAH/VAL = District boundaries (68% Value Area). 3) Inside VAH-VAL = Balanced rotation. 4) Crossing LVN = Value migration across empty highways.',
    metrics: [
      {
        id: 'currentBtcPrice',
        label: 'Current Bitcoin Spot Price ($)',
        type: 'text',
        placeholder: 'e.g. $96,450',
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT',
        sourceLabel: 'TradingView: BINANCE:BTCUSDT ↗'
      },
      {
        id: 'vpocLevel',
        label: 'Volume Point of Control (VPOC / Town Center)',
        type: 'text',
        placeholder: 'e.g. $95,800',
        tradingViewUrl: 'https://exocharts.com/',
        sourceLabel: 'Exocharts: Session VPOC ↗'
      },
      {
        id: 'valueAreaHighLow',
        label: 'Value Area Boundaries (VAH - VAL Range)',
        type: 'text',
        placeholder: 'e.g. VAH $97,200 | VAL $94,600',
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT',
        sourceLabel: 'TradingView: Session Profile ↗'
      },
      {
        id: 'auctionState',
        label: 'Auction Balance vs Value Migration State',
        type: 'select',
        options: ['Inside Value Area (Balanced Rotation Between VAH & VAL)', 'Above VAH (Bullish Value Migration Initiative)', 'Below VAL (Bearish Value Migration Initiative)', 'Failing Breakout (Reentry / Snapping Back Into District)'],
        tradingViewUrl: 'https://exocharts.com/',
        sourceLabel: 'Exocharts: Value Migration ↗'
      }
    ]
  },
  '2b': {
    id: '2b',
    title: 'STEP 2B: CAMERA 2 — AGGRESSION & ORDER FLOW (CVD & OPEN INTEREST)',
    camera: 'Camera 2 (Aggression)',
    character: 'Market Floor Merchants & Order Flow',
    tooltip: 'Camera 2 tracks shouting & momentum. Rising price + Falling CVD = Passive Buyer Absorption (Strong institutional accumulators taking market sells). Rising OI + Flat Price = Coiled Spring before a major breakout cascade.',
    metrics: [
      {
        id: 'cvdState',
        label: 'Cumulative Volume Delta (CVD) Market Pressure',
        type: 'select',
        options: ['Passive Buyer Absorption (Price Rising / CVD Down)', 'Aggressive Market Buying (Price Up / CVD Up)', 'Passive Seller Absorption (Price Falling / CVD Up)', 'Aggressive Market Selling (Price Down / CVD Down)'],
        tradingViewUrl: 'https://www.coinglass.com/CumulativeVolumeDelta',
        sourceLabel: 'Coinglass: Aggregated BTC CVD ↗'
      },
      {
        id: 'openInterestTrend',
        label: 'Open Interest (OI) & Leverage Positioning',
        type: 'select',
        options: ['OI Compression (Leverage Coiling at Range Highs/Lows)', 'OI Expansion (Aggressive Trend Continuation)', 'OI Liquidation Flush (Long/Short Squeeze Completed)'],
        tradingViewUrl: 'https://www.coinglass.com/BitcoinOpenInterest',
        sourceLabel: 'Coinglass: Open Interest Chart ↗'
      }
    ]
  },
  '2c': {
    id: '2c',
    title: 'STEP 2C: CAMERA 4 & 5 — DOM WAITING MERCHANTS & EXECUTION SCENARIO',
    camera: 'Camera 4 & 5 (DOM & Execution Context)',
    character: 'Merchant Order Books & Trade Setup',
    tooltip: 'Camera 4 maps resting limit orders on the DOM. Camera 5 identifies the trade scenario: Responsive Fade (buying VAL / selling VAH), Initiative Breakout (riding LVN across highway), or Liquidation Sweep.',
    metrics: [
      {
        id: 'bidAskWalls',
        label: 'Dominant DOM Order Book Walls (Bids & Asks)',
        type: 'text',
        placeholder: 'e.g. Bids at $94,000 (1,200 BTC) | Asks at $98,500 (1,500 BTC)',
        tradingViewUrl: 'https://www.coinglass.com/pro/orderbook/BTC',
        sourceLabel: 'Coinglass: Orderbook Liquidity Depth ↗'
      },
      {
        id: 'primaryExecutionSetup',
        label: 'Primary Execution Scenario Setup',
        type: 'select',
        options: ['Responsive Trade (Fade VAL/VAH Back to VPOC)', 'Initiative Breakout (Ride Value Migration Across LVN)', 'Liquidation Sweep & Reversal (Fade Stop-Run Into Key Wall)'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT',
        sourceLabel: 'TradingView: Execution Setup ↗'
      }
    ]
  }
};
