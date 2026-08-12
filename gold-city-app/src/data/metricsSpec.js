/* ==========================================================================
   100% COMPLETE SVAF LAYER 1, LAYER 2 & LAYER 3 METRICS SPECIFICATION
   ========================================================================== */

export const METRICS_SPEC = {
  /* ==========================================================================
     LAYER 1: PRE-SESSION CLIMATE & SUPPLY INGESTION (CAMERAS 6 & 1)
     ========================================================================== */
  '1a': {
    id: '1a',
    title: 'STEP 1A: CAMERA 6A — GRACE (MONETARY POLICY & M2)',
    camera: 'Camera 6 (Weather)',
    character: 'Grace (Monetary Authority)',
    tooltip: 'Grace controls monetary water valves. Sloping UPWARD = Expanding Liquidity (+GEX Tailwind). Sloping DOWNWARD = Contracting Liquidity.',
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
    tooltip: 'Net Liquidity = FRED:WALCL - WTREGEN - RRPONTSYD. TGA Draining = Spending cash into reserves (Bullish). RRP Draining = Liquidity bridge to T-Bills.',
    metrics: [
      {
        id: 'netLiquidityValue',
        label: 'Net Fed Liquidity Formula (FRED:WALCL-WTREGEN-RRPONTSYD)',
        type: 'text',
        placeholder: 'e.g. $6.15 Trillion',
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
    tooltip: 'DXY measures global dollar shortage. Declining DXY = Dollar abundance. Spiking 10Y Yields above 4.5% = Tightening credit headwind.',
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
    tooltip: 'Alice operates active gold mines. Upward miner balances = Retention State (Miners HODLing). Downward drops = Distribution State.',
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
    tooltip: 'Jonas holds ancient wealth. Quiet CDD baseline = Jonas Vaults Sealed (Illiquid). Large vertical CDD spikes = Old coins activated on-chain.',
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
    tooltip: 'Liquid float is active exchange inventory. Negative netflows = Coins moving to cold storage. STH-SOPR < 1.0 = Capitulation flush.',
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
     LAYER 2: VISION-FIRST SPATIAL GEOGRAPHY & AUCTION MAPPING (SVAF HIERARCHY)
     ========================================================================== */
  '2a': {
    id: '2a',
    title: 'STEP 2A: STRATEGIC AUCTION — WEEKLY CANDLE CHART VOLUME PROFILE',
    camera: 'Camera 3 (Strategic Geography)',
    character: 'Frank (District Surveyor & Volume Mapper)',
    tooltip: 'SVAF Tier 1 Zoom Level: Upload your Weekly Candle Chart Volume Profile screenshot to map macro fair value districts (Weekly VPOC, VAH, VAL).',
    metrics: [
      {
        id: 'weeklyVpoc',
        label: 'Weekly Strategic VPOC ($)',
        type: 'text',
        placeholder: 'e.g. $94,800 (Auto-read by Gemini Vision)',
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT',
        sourceLabel: 'TradingView: Weekly Volume Profile ↗'
      },
      {
        id: 'weeklyValueAreaRange',
        label: 'Weekly Value Area Range (Weekly VAH - VAL)',
        type: 'text',
        placeholder: 'e.g. Weekly VAH $98,200 | Weekly VAL $92,400',
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT',
        sourceLabel: 'TradingView: Weekly Range ↗'
      }
    ]
  },
  '2b': {
    id: '2b',
    title: 'STEP 2B: OPERATIONAL CAMPAIGN — DAILY CANDLE CHART VOLUME PROFILE',
    camera: 'Camera 3 (Operational Campaign)',
    character: 'Frank (Daily District Inspector)',
    tooltip: 'SVAF Tier 2 Zoom Level: Upload your Daily Candle Chart Volume Profile screenshot to track day-to-day Value Area Migration vs Balanced Rotation.',
    metrics: [
      {
        id: 'dailyVpoc',
        label: 'Daily Operational VPOC ($)',
        type: 'text',
        placeholder: 'e.g. $95,800 (Auto-read by Gemini Vision)',
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT',
        sourceLabel: 'TradingView: Daily Volume Profile ↗'
      },
      {
        id: 'dailyAuctionState',
        label: 'Daily Value Area Migration State',
        type: 'select',
        options: ['Inside Daily Value Area (Balanced Rotation)', 'Above Daily VAH (Bullish Value Migration Initiative)', 'Below Daily VAL (Bearish Value Migration Initiative)', 'Failing Breakout (Reentry / Snapping Back)'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT',
        sourceLabel: 'TradingView: Daily Auction State ↗'
      }
    ]
  },
  '2c': {
    id: '2c',
    title: 'STEP 2C: INTRADAY MICROSTRUCTURE — 4-HOUR CANDLE CHART PROFILE',
    camera: 'Camera 3 (Intraday Acceleration)',
    character: 'Frank (Highway Surveyor)',
    tooltip: 'SVAF Tier 3 Zoom Level: Upload your 4-Hour Candle Chart Volume Profile screenshot to locate Low Volume Node (LVN) highways and Poor Highs/Lows.',
    metrics: [
      {
        id: 'lvnHighways',
        label: '4H Low Volume Node (LVN) Highway Gaps',
        type: 'text',
        placeholder: 'e.g. Gap between $96,200 - $97,400',
        tradingViewUrl: 'https://exocharts.com/',
        sourceLabel: 'Exocharts: 4H Profile LVN Gaps ↗'
      },
      {
        id: 'poorHighsLows',
        label: 'Poor Highs / Poor Lows (Incomplete Auctions)',
        type: 'select',
        options: ['Clean Auctions (Proper Tailed Rejections)', 'Poor High Present (Unrepaired Buying Auction Top)', 'Poor Low Present (Unrepaired Selling Auction Bottom)'],
        tradingViewUrl: 'https://exocharts.com/',
        sourceLabel: 'Exocharts: Market Profile TPO ↗'
      }
    ]
  },
  '2d': {
    id: '2d',
    title: 'STEP 2D: ORDER BOOK DEPTH & LIQUIDITY HEATMAP (7D TO 30D)',
    camera: 'Camera 4 (DOM Waiting Merchants)',
    character: 'Resting Order Book & Liquidation Pools',
    tooltip: 'Upload your 7-Day to 30-Day Liquidity Heatmap screenshot to map major DOM bid/ask walls and high-density leverage liquidation magnets.',
    metrics: [
      {
        id: 'bidAskWalls',
        label: 'Dominant DOM Order Book Walls (Bids & Asks)',
        type: 'text',
        placeholder: 'e.g. Heavy Bids at $94,000 | Heavy Asks at $98,500',
        tradingViewUrl: 'https://www.coinglass.com/pro/orderbook/BTC',
        sourceLabel: 'Coinglass: Order Book Depth ↗'
      },
      {
        id: 'liquidationPools',
        label: 'Primary Leverage Liquidation Pool Magnets',
        type: 'select',
        options: ['Upper Liquidation Pool Magnet (Short Squeeze Target Above)', 'Lower Liquidation Pool Magnet (Long Liquidation Target Below)', 'Balanced Liquidity Pools (Equal Both Sides)'],
        tradingViewUrl: 'https://www.coinglass.com/LiquidationData',
        sourceLabel: 'Coinglass: Liquidation Heatmap ↗'
      }
    ]
  },
  '2e': {
    id: '2e',
    title: 'STEP 2E: FOOTPRINT & CVD ORDER FLOW DELTA CHART',
    camera: 'Camera 2 & 5 (Aggression & Hedging)',
    character: 'Market Floor Merchants & Delta Absorption',
    tooltip: 'Upload your Footprint or CVD Delta chart screenshot to verify passive buyer/seller absorption and aggressive market order surges.',
    metrics: [
      {
        id: 'cvdState',
        label: 'Cumulative Volume Delta (CVD) Order Flow Pressure',
        type: 'select',
        options: ['Passive Buyer Absorption (Price Rising / CVD Down)', 'Aggressive Market Buying (Price Up / CVD Up)', 'Passive Seller Absorption (Price Falling / CVD Up)', 'Aggressive Market Selling (Price Down / CVD Down)'],
        tradingViewUrl: 'https://www.coinglass.com/CumulativeVolumeDelta',
        sourceLabel: 'Coinglass: CVD Delta ↗'
      },
      {
        id: 'primaryExecutionSetup',
        label: 'Primary Execution Playbook Scenario',
        type: 'select',
        options: ['Responsive Trade (Fade VAL/VAH Back to VPOC)', 'Initiative Breakout (Ride Value Migration Across LVN)', 'Liquidation Sweep & Reversal (Fade Stop-Run Into Key Wall)'],
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT',
        sourceLabel: 'TradingView: Execution Playbook ↗'
      }
    ]
  },

  /* ==========================================================================
     LAYER 3: TRADER-DRIVEN EXECUTION & POSITION SIZING ENGINE
     ========================================================================== */
  '3a': {
    id: '3a',
    title: 'STEP 3A: POSITION SIZING & CAPITAL RISK BUDGET',
    camera: 'Execution Engine',
    character: 'Henry (Trading Desk Commander)',
    tooltip: 'Define your account capital and risk budget per trade. The terminal calculates exact position sizing and maximum loss allowance.',
    metrics: [
      {
        id: 'accountBalance',
        label: 'Total Account Capital ($)',
        type: 'text',
        placeholder: 'e.g. $10,000',
        tradingViewUrl: '#',
        sourceLabel: 'Trading Account Balance'
      },
      {
        id: 'riskPercentage',
        label: 'Risk Budget Per Trade (%)',
        type: 'select',
        options: ['0.5% (Conservative Risk)', '1.0% (Standard SVAF Risk)', '1.5% (High Conviction Risk)', '2.0% (Maximum Cap Risk)'],
        tradingViewUrl: '#',
        sourceLabel: 'Risk Governance Rule'
      }
    ]
  },
  '3b': {
    id: '3b',
    title: 'STEP 3B: TRADE PARAMETERS & RISK:REWARD CALCULATOR',
    camera: 'Execution Engine',
    character: 'Henry (Order Calculation)',
    tooltip: 'Set your Entry Price, Structural Stop Loss, and Primary Take Profit target. The system auto-calculates position size (BTC) and R:R ratio.',
    metrics: [
      {
        id: 'entryPrice',
        label: 'Planned Entry Price ($)',
        type: 'text',
        placeholder: 'e.g. $94,800',
        tradingViewUrl: '#',
        sourceLabel: 'Entry Level'
      },
      {
        id: 'stopLossPrice',
        label: 'Structural Invalidation Stop Loss ($)',
        type: 'text',
        placeholder: 'e.g. $93,900 (Below LVN/VAL)',
        tradingViewUrl: '#',
        sourceLabel: 'Stop Loss'
      },
      {
        id: 'takeProfitPrice',
        label: 'Primary Target Take Profit ($)',
        type: 'text',
        placeholder: 'e.g. $98,200 (At VAH/Call Wall)',
        tradingViewUrl: '#',
        sourceLabel: 'Target Level'
      }
    ]
  },
  '3c': {
    id: '3c',
    title: 'STEP 3C: PRE-FLIGHT CHECKLIST & SIGNAL WEBHOOK PAYLOAD',
    camera: 'Execution Engine',
    character: 'Henry (Final Execution Flight Check)',
    tooltip: 'Verify all alignment rules before order submission. Optionally copy the automated JSON payload for exchange / OctoBot execution.',
    metrics: [
      {
        id: 'executionOrderType',
        label: 'Order Type Selection',
        type: 'select',
        options: ['Limit Order at Structural Retest (VAL/VPOC)', 'Market Order on Confirmed Breakout Acceptance', 'Stop-Limit Order above LVN Highway'],
        tradingViewUrl: '#',
        sourceLabel: 'Order Type'
      }
    ]
  }
};
