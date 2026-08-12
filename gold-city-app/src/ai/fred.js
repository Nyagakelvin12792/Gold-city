/* ==========================================================================
   FRED API CLIENT (FEDERAL RESERVE ECONOMIC DATA)
   ========================================================================== */

const FRED_STORAGE_KEY = 'gold_city_fred_api_key';
const FRED_BASE_URL = 'https://api.stlouisfed.org/fred/series/observations';

export function getFredApiKey() {
  return localStorage.getItem(FRED_STORAGE_KEY) || '';
}

export function setFredApiKey(key) {
  localStorage.setItem(FRED_STORAGE_KEY, key.trim());
}

export function hasFredApiKey() {
  return getFredApiKey().length > 10;
}

/**
 * Fetches latest observations for a FRED series.
 * @param {string} seriesId - e.g. 'WALCL', 'WTREGEN', 'RRPONTSYD', 'M2SL', 'FEDFUNDS', 'DGS10'
 * @param {number} limit - Number of recent observations to fetch (default: 5)
 */
export async function fetchFredSeries(seriesId, limit = 5) {
  const apiKey = getFredApiKey();
  if (!apiKey) throw new Error('FRED API Key is not set.');

  const url = `${FRED_BASE_URL}?series_id=${seriesId}&api_key=${apiKey}&file_type=json&sort_order=desc&limit=${limit}`;

  const res = await fetch(url);
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`FRED API Error (${seriesId}) ${res.status}: ${errText}`);
  }

  const data = await res.json();
  const obs = data.observations || [];
  
  // Filter out invalid/missing observations (FRED uses '.' for missing values)
  const validObs = obs.filter(o => o.value !== '.').map(o => ({
    date: o.date,
    value: parseFloat(o.value)
  }));

  return validObs;
}

/**
 * Calculates Net Fed Liquidity and analyzes macro trends directly from FRED API.
 * Formula: Net Liquidity = WALCL - WTREGEN - RRPONTSYD
 * Returns populated object for Steps 1A, 1B, 1C.
 */
export async function fetchMacroDataFromFred() {
  if (!hasFredApiKey()) {
    throw new Error('FRED API Key required.');
  }

  // Fetch all key macro series concurrently
  const [walcl, tga, rrp, m2, fedfunds, yield10y] = await Promise.all([
    fetchFredSeries('WALCL', 5),       // Fed Assets (Millions of USD)
    fetchFredSeries('WTREGEN', 5),     // TGA Balance (Millions of USD)
    fetchFredSeries('RRPONTSYD', 5),   // Reverse Repo (Billions of USD or Millions depending on FRED spec)
    fetchFredSeries('WM2NS', 5),       // M2 Money Supply (Billions of USD)
    fetchFredSeries('FEDFUNDS', 5),    // Effective Fed Funds Rate (%)
    fetchFredSeries('DGS10', 5)        // 10-Year Treasury Yield (%)
  ]);

  // 1. Calculate Net Liquidity
  // WALCL is in Millions, WTREGEN is in Millions, RRPONTSYD is in Billions (so multiply RRP by 1000 to get Millions)
  const latestWalcl = walcl[0]?.value || 0;
  const latestTga = tga[0]?.value || 0;
  // FRED RRPONTSYD is given in Billions of USD
  const latestRrpBillions = rrp[0]?.value || 0;
  const latestRrpMillions = latestRrpBillions * 1000;

  const netLiquidityMillions = latestWalcl - latestTga - latestRrpMillions;
  const netLiquidityTrillions = (netLiquidityMillions / 1000000).toFixed(2);

  // Compare with previous observations to determine trend/slope
  const prevWalcl = walcl[1]?.value || latestWalcl;
  const walclState = latestWalcl > prevWalcl ? 'Expanding (QE / Liquidity Injection)' 
                   : latestWalcl < prevWalcl ? 'Contracting (QT)' 
                   : 'Neutral / Flat';

  const prevTga = tga[1]?.value || latestTga;
  const tgaState = latestTga < prevTga ? 'Draining TGA (Injecting Cash into Reserves)' 
                 : latestTga > prevTga ? 'Rebuilding TGA (Draining Cash)' 
                 : 'Stable';

  const prevRrp = rrp[1]?.value || latestRrpBillions;
  const rrpState = latestRrpBillions < prevRrp ? 'Draining RRP (Liquidity Bridge to T-Bills)' 
                 : latestRrpBillions > prevRrp ? 'Building RRP' 
                 : 'Stable';

  const prevM2 = m2[1]?.value || m2[0]?.value;
  const m2Trend = m2[0]?.value > prevM2 ? 'Expanding (+GEX Tailwind)' 
                : m2[0]?.value < prevM2 ? 'Contracting (-GEX Headwind)' 
                : 'Neutral / Flat';

  const latestFedRate = fedfunds[0]?.value || 5.25;
  const prevFedRate = fedfunds[1]?.value || latestFedRate;
  const fedRateState = latestFedRate < prevFedRate ? 'Easing / Cutting Cycle' 
                     : latestFedRate > prevFedRate ? 'Hiking / Tightening Cycle' 
                     : 'Paused / Stationary';

  const latest10Y = yield10y[0]?.value || 4.25;
  const prev10Y = yield10y[1]?.value || latest10Y;
  const yield10YState = latest10Y < prev10Y ? 'Falling / Easing (Risk Positive)' 
                      : latest10Y > prev10Y ? 'Spiking / Surging (Tightening Headwind)' 
                      : 'Flat';

  return {
    raw: {
      walcl: latestWalcl,
      tga: latestTga,
      rrp: latestRrpBillions,
      netLiquidityTrillions,
      fedRate: latestFedRate,
      yield10Y: latest10Y
    },
    stepData: {
      m2Trend,
      walclState,
      fedRate: fedRateState,
      netLiquidityValue: `$${netLiquidityTrillions} Trillion`,
      tgaState,
      rrpState,
      yield10Y: yield10YState
    }
  };
}
