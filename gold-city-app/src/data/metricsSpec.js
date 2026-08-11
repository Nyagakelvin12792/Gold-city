/* ==========================================================================
   100% COMPLETE SVAF LAYER 1 METRICS SPECIFICATION & DIRECT TRADINGVIEW LINKS
   ========================================================================== */

export const METRICS_SPEC = {
  '1a': {
    id: '1a',
    title: 'STEP 1A: CAMERA 6A — GRACE (MONETARY POLICY & M2)',
    camera: 'Camera 6 (Weather)',
    character: 'Grace (Monetary Authority)',
    tooltip: 'Grace controls the monetary water valves. Search FRED:M2SL (Broad Money Supply) and FRED:WALCL (Fed Assets) on TradingView. Look at the 30d and YoY slope: Upward sloping line = Liquidity Expansion (+GEX Tailwind).',
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
    tooltip: 'Ivy manages city bonds and treasury cash. Use TradingView Net Liquidity formula: FRED:WALCL - FRED:WTREGEN - FRED:RRPONTSYD. Downward TGA slope = cash injected into bank reserves (Bullish).',
    metrics: [
      {
        id: 'netLiquidityValue',
        label: 'Net Fed Liquidity Formula (FRED:WALCL-WTREGEN-RRPONTSYD)',
        type: 'text',
        placeholder: 'e.g. $6.12 Trillion',
        tradingViewUrl: 'https://www.tradingview.com/chart/?symbol=FRED%3AWALCL-FRED%3AWTREGEN-FRED%3ARRPONTSYD',
        sourceLabel: 'TradingView Net Liquidity Formula ↗'
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
        sourceLabel: 'US Treasury QRA Announcements ↗'
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
  }
};
