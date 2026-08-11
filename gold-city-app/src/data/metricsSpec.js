/* ==========================================================================
   100% COMPLETE SVAF LAYER 1 METRICS SPECIFICATION & DIRECT SOURCE LINKS
   ========================================================================== */

export const METRICS_SPEC = {
  '1a': {
    id: '1a',
    title: 'STEP 1A: CAMERA 6A — GRACE (MONETARY POLICY & M2)',
    camera: 'Camera 6 (Weather)',
    character: 'Grace (Monetary Authority)',
    sourceTabs: [
      { name: 'FRED: M2SL', url: 'https://fred.stlouisfed.org/series/M2SL' },
      { name: 'FRED: WALCL', url: 'https://fred.stlouisfed.org/series/WALCL' },
      { name: 'TradingView M2', url: 'https://www.tradingview.com/symbols/FRED-M2SL/' }
    ],
    tooltip: 'Grace controls the monetary water valves. Search FRED:M2SL (Broad Money Supply) and FRED:WALCL (Fed Assets). Look at the 30d and YoY slope: Upward sloping line = Liquidity Expansion (+GEX Tailwind).',
    fields: [
      {
        id: 'm2Trend',
        label: 'Global M2 Money Supply Trend',
        type: 'select',
        options: ['Expanding (+GEX Tailwind)', 'Contracting (-GEX Headwind)', 'Neutral / Flat']
      },
      {
        id: 'walclState',
        label: 'Federal Reserve Assets (WALCL Balance)',
        type: 'select',
        options: ['Expanding (QE / Liquidity Injection)', 'Contracting (QT)', 'Neutral / Flat']
      },
      {
        id: 'fedRate',
        label: 'Fed Funds Policy Rate Target Cycle',
        type: 'select',
        options: ['Easing / Cutting Cycle', 'Paused / Stationary', 'Hiking / Tightening Cycle']
      }
    ]
  },
  '1b': {
    id: '1b',
    title: 'STEP 1B: CAMERA 6B — IVY (FISCAL POLICY & NET LIQUIDITY)',
    camera: 'Camera 6 (Weather)',
    character: 'Ivy (Exchequer & Fiscal Treasury)',
    sourceTabs: [
      { name: 'FRED: WTREGEN (TGA)', url: 'https://fred.stlouisfed.org/series/WTREGEN' },
      { name: 'FRED: RRPONTSYD', url: 'https://fred.stlouisfed.org/series/RRPONTSYD' },
      { name: 'TradingView Net Liquidity Formula', url: 'https://www.tradingview.com/chart/?symbol=FRED%3AWALCL-FRED%3AWTREGEN-FRED%3ARRPONTSYD' }
    ],
    tooltip: 'Ivy manages city bonds and treasury cash. Open TradingView formula: FRED:WALCL - FRED:WTREGEN - FRED:RRPONTSYD. Downward TGA slope = cash injected into bank reserves (Bullish). Downward RRP slope = cash flowing into T-bills.',
    fields: [
      {
        id: 'netLiquidityValue',
        label: 'Net Fed Liquidity ($ Trillions) [Optional]',
        type: 'text',
        placeholder: 'e.g. $6.12 Trillion'
      },
      {
        id: 'tgaState',
        label: 'Treasury General Account (TGA Balance)',
        type: 'select',
        options: ['Draining TGA (Injecting Cash into Reserves)', 'Rebuilding TGA (Draining Cash)', 'Stable']
      },
      {
        id: 'rrpState',
        label: 'Reverse Repo Facility (RRP Balance)',
        type: 'select',
        options: ['Draining RRP (Liquidity Bridge to T-Bills)', 'Building RRP', 'Stable']
      },
      {
        id: 'qraFocus',
        label: 'Quarterly Refunding Announcement (QRA)',
        type: 'select',
        options: ['Short-Duration T-Bills (Liquidity Positive)', 'Long-Duration Coupons (Liquidity Negative)', 'Neutral Mix']
      }
    ]
  },
  '1c': {
    id: '1c',
    title: 'STEP 1C: CAMERA 6C — BOND YIELDS, DXY & CATALYSTS',
    camera: 'Camera 6 (Weather)',
    character: 'Grace & Ivy (Atmospheric Conditions)',
    sourceTabs: [
      { name: 'TradingView: DXY', url: 'https://www.tradingview.com/symbols/TVC-DXY/' },
      { name: 'FRED: DGS10 (10Y Yield)', url: 'https://fred.stlouisfed.org/series/DGS10' },
      { name: 'ForexFactory Calendar', url: 'https://www.forexfactory.com/calendar' }
    ],
    tooltip: 'DXY measures global dollar shortage. A declining DXY below 4H key support confirms dollar abundance (Bullish BTC). Rapid 10Y Yield spikes above 4.5% tighten credit conditions.',
    fields: [
      {
        id: 'dxyLevel',
        label: 'US Dollar Index (DXY) Current Price',
        type: 'text',
        placeholder: 'e.g. 103.50'
      },
      {
        id: 'dxyTrend',
        label: 'DXY 4-Hour Trend Direction',
        type: 'select',
        options: ['Downtrend (Dollar Abundance)', 'Uptrend (Dollar Shortage)', 'Sideways Consolidation']
      },
      {
        id: 'yield10Y',
        label: '10-Year US Treasury Yield (DGS10)',
        type: 'select',
        options: ['Falling / Easing (Risk Positive)', 'Spiking / Surging (Tightening Headwind)', 'Flat']
      }
    ]
  },
  '1d': {
    id: '1d',
    title: 'STEP 1D: CAMERA 1A — ALICE (MINER ISSUANCE & RESERVES)',
    camera: 'Camera 1 (Supply)',
    character: 'Alice (Gold Mines)',
    sourceTabs: [
      { name: 'Glassnode: Miner Reserves', url: 'https://studio.glassnode.com/metrics?m=miners.Balance' },
      { name: 'CryptoQuant: Miner Flows', url: 'https://cryptoquant.com/asset/btc/chart/miner-flows' }
    ],
    tooltip: 'Alice operates active gold mines. Upward sloping miner balances = Retention State (Miners HODLing = Supply Scarcity). Downward drops = Distribution State (Miners selling to pay operational costs). Baseline issuance = ~450 BTC/day.',
    fields: [
      {
        id: 'minerReserveState',
        label: 'Alice Miner Treasury Inventory State',
        type: 'select',
        options: ['Retention State (Alice HODLing Minted BTC)', 'Distribution State (Alice Selling to Cover Costs)']
      },
      {
        id: 'minerInflowVolume',
        label: 'Miner-to-Exchange Inflow Volume',
        type: 'select',
        options: ['Baseline / Low Transfer Volume', 'Spike / Capitulation Selling Inflows']
      }
    ]
  },
  '1e': {
    id: '1e',
    title: 'STEP 1E: CAMERA 1B — JONAS (DORMANT VAULTS & CDD)',
    camera: 'Camera 1 (Supply)',
    character: 'Jonas (Ancient Vaults)',
    sourceTabs: [
      { name: 'Glassnode: LTH Supply Ratio', url: 'https://studio.glassnode.com/metrics?m=supply.LthSthRatio' },
      { name: 'Glassnode: CDD Spike', url: 'https://studio.glassnode.com/metrics?m=indicators.Cdd' }
    ],
    tooltip: 'Jonas holds ancient wealth. Quiet low CDD baseline = Jonas Vaults Sealed (Illiquid). Large vertical CDD spikes = Old dormant coins activated and moving on-chain toward exchanges.',
    fields: [
      {
        id: 'lthRatio',
        label: 'Long-Term Holder Supply Ratio (>155 Days)',
        type: 'text',
        placeholder: 'e.g. 74.8% LTH'
      },
      {
        id: 'cddActivity',
        label: 'Coin Days Destroyed (CDD) Activity',
        type: 'select',
        options: ['Low Baseline (Jonas Vaults Sealed)', 'Massive CDD Spike (Dormant Supply Activated)']
      },
      {
        id: 'hodlWaveTrend',
        label: '1Y+ / 3Y+ HODL Waves Band Trend',
        type: 'select',
        options: ['Expanding (Supply Scarcity)', 'Contracting (Supply Unlocking)']
      }
    ]
  },
  '1f': {
    id: '1f',
    title: 'STEP 1F: CAMERA 1C — LIQUID FLOAT & STH-SOPR',
    camera: 'Camera 1 (Supply)',
    character: 'Exchange Floor & Liquid Float',
    sourceTabs: [
      { name: 'Coinglass: Exchange Balances', url: 'https://www.coinglass.com/Balance' },
      { name: 'Glassnode: STH-SOPR', url: 'https://studio.glassnode.com/metrics?m=indicators.SoprSth' }
    ],
    tooltip: 'Liquid float is active exchange inventory. Negative netflows (e.g. -14k BTC) = Coins moving into cold storage. STH-SOPR < 1.0 = Short-term buyers selling at a loss (Capitulation flush completed).',
    fields: [
      {
        id: 'netflow7d',
        label: '7-Day Exchange Netflow Volume',
        type: 'text',
        placeholder: 'e.g. -14,200 BTC Net Outflow'
      },
      {
        id: 'exchangeReserveLevel',
        label: 'Exchange Total BTC Reserve Level',
        type: 'select',
        options: ['Multi-Month / Multi-Year Lows (Contracted Float)', 'Swelling Exchange Balances (Expanding Float)']
      },
      {
        id: 'sthSoprValue',
        label: 'Short-Term Holder SOPR (STH-SOPR)',
        type: 'select',
        options: ['STH-SOPR < 1.0 (Loss Realization / Capitulation Reset)', 'STH-SOPR > 1.0 (Profit Taking)', 'STH-SOPR = 1.0 (Neutral Baseline)']
      }
    ]
  }
};
