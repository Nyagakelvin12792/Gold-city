/* ==========================================================================
   GEMINI AI ENGINE CLIENT (LIVE API: VISION + SEARCH GROUNDING + NARRATIVE)
   ========================================================================== */

const GEMINI_MODEL = 'gemini-2.0-flash';
const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const API_KEY_STORAGE = 'gold_city_gemini_api_key';

/* ---------- API Key Management ---------- */

export function getApiKey() {
  return localStorage.getItem(API_KEY_STORAGE) || '';
}

export function setApiKey(key) {
  localStorage.setItem(API_KEY_STORAGE, key.trim());
}

export function hasApiKey() {
  return getApiKey().length > 10;
}

/* ---------- Core Gemini Call ---------- */

async function callGemini(contents, tools, apiKey) {
  const url = `${API_BASE}/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const body = { contents };
  if (tools && tools.length > 0) {
    body.tools = tools;
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API Error ${res.status}: ${errText}`);
  }

  const data = await res.json();
  
  // Extract text from response candidates
  const candidate = data.candidates?.[0];
  if (!candidate) throw new Error('No response from Gemini');

  const parts = candidate.content?.parts || [];
  const textParts = parts.filter(p => p.text).map(p => p.text);
  return textParts.join('\n');
}

/* ---------- Auto-Fetch All Layer 1 Data via Google Search Grounding ---------- */

export async function autoFetchMacroData() {
  const apiKey = getApiKey();
  if (!apiKey) {
    return getFallbackMacroData();
  }

  const prompt = `You are an institutional macro and Bitcoin on-chain research assistant for the Gold City trading terminal. 
Using real-time web search, research current macro conditions AND Bitcoin on-chain metrics. 
Return ONLY a valid JSON object with these exact keys and values chosen strictly from the allowed options:

{
  "m2Trend": one of ["Expanding (+GEX Tailwind)", "Contracting (-GEX Headwind)", "Neutral / Flat"],
  "walclState": one of ["Expanding (QE / Liquidity Injection)", "Contracting (QT)", "Neutral / Flat"],
  "fedRate": one of ["Easing / Cutting Cycle", "Paused / Stationary", "Hiking / Tightening Cycle"],
  "netLiquidityValue": string like "$6.15 Trillion",
  "tgaState": one of ["Draining TGA (Injecting Cash into Reserves)", "Rebuilding TGA (Draining Cash)", "Stable"],
  "rrpState": one of ["Draining RRP (Liquidity Bridge to T-Bills)", "Building RRP", "Stable"],
  "qraFocus": one of ["Short-Duration T-Bills (Liquidity Positive)", "Long-Duration Coupons (Liquidity Negative)", "Neutral Mix"],
  "dxyLevel": string of current DXY price like "103.50",
  "dxyTrend": one of ["Downtrend (Dollar Abundance)", "Uptrend (Dollar Shortage)", "Sideways Consolidation"],
  "yield10Y": one of ["Falling / Easing (Risk Positive)", "Spiking / Surging (Tightening Headwind)", "Flat"],

  "minerReserveState": one of ["Retention State (Alice HODLing Minted BTC)", "Distribution State (Alice Selling to Cover Costs)"],
  "minerInflowVolume": one of ["Baseline / Low Transfer Volume", "Spike / Capitulation Selling Inflows"],
  
  "lthRatio": string of current LTH supply percentage like "74.8% LTH",
  "cddActivity": one of ["Low Baseline (Jonas Vaults Sealed)", "Massive CDD Spike (Dormant Supply Activated)"],
  "hodlWaveTrend": one of ["Expanding (Supply Scarcity)", "Contracting (Supply Unlocking)"],

  "netflow7d": string of 7-day exchange netflow like "-14,200 BTC Net Outflow",
  "exchangeReserveLevel": one of ["Multi-Month / Multi-Year Lows (Contracted Float)", "Swelling Exchange Balances (Expanding Float)"],
  "sthSoprValue": one of ["STH-SOPR < 1.0 (Loss Realization / Capitulation Reset)", "STH-SOPR > 1.0 (Profit Taking)", "STH-SOPR = 1.0 (Neutral Baseline)"]
}

Search for: FRED M2SL, FRED WALCL, Federal Funds Rate, TGA balance, Reverse Repo balance, Treasury QRA, DXY index, 10Y Yield, Bitcoin miner reserve trend, BTC Long Term Holder supply ratio, Coin Days Destroyed (CDD) activity, BTC 7-day exchange netflows, BTC exchange reserve levels, and Bitcoin STH-SOPR value. Return ONLY the JSON, no markdown fences, no explanation.`;

  try {
    const text = await callGemini(
      [{ role: 'user', parts: [{ text: prompt }] }],
      [{ googleSearch: {} }],
      apiKey
    );

    const jsonStr = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    const parsed = JSON.parse(jsonStr);
    return parsed;
  } catch (err) {
    console.warn('Google Search Grounding fetch failed or unsupported key, using fallback:', err);
    return getFallbackMacroData();
  }
}

/* ---------- Sub-Step Narrative Generation (with optional Vision) ---------- */

export async function generateSubStepNarrative(stepId, stepData) {
  const apiKey = getApiKey();

  // Collect any uploaded images for this step
  const imageKeys = Object.keys(stepData).filter(k => k.startsWith('image_'));
  const imageParts = [];
  for (const key of imageKeys) {
    const dataUrl = stepData[key];
    if (dataUrl && dataUrl.startsWith('data:image')) {
      const [header, base64] = dataUrl.split(',');
      const mimeMatch = header.match(/data:(image\/\w+);/);
      const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
      imageParts.push({
        inline_data: { mime_type: mimeType, data: base64 }
      });
    }
  }

  if (!apiKey) {
    return getFallbackNarrative(stepId, stepData);
  }

  const stepDescriptions = {
    '1a': 'Step 1A: Camera 6A Grace (Monetary Policy & M2). Metrics: Global M2 trend, WALCL balance, Fed Funds Rate cycle.',
    '1b': 'Step 1B: Camera 6B Ivy (Fiscal Policy & Net Liquidity). Metrics: Net Fed Liquidity formula, TGA balance, RRP balance, QRA composition.',
    '1c': 'Step 1C: Camera 6C Bond Yields, DXY & Catalysts. Metrics: DXY level and trend, 10-Year Treasury Yield.',
    '1d': 'Step 1D: Camera 1A Alice (Miner Issuance & Reserves). Metrics: Miner reserve state, miner-to-exchange inflow volume.',
    '1e': 'Step 1E: Camera 1B Jonas (Dormant Vaults & CDD). Metrics: LTH Supply Ratio, Coin Days Destroyed activity, HODL Waves trend.',
    '1f': 'Step 1F: Camera 1C Liquid Float & STH-SOPR. Metrics: 7-day exchange netflow, exchange reserve level, STH-SOPR value.'
  };

  const inputSummary = Object.entries(stepData)
    .filter(([k]) => !k.startsWith('image_'))
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  const prompt = `You are the Gold City AI Terminal narrative engine. You produce TWO narratives for each sub-step:

1. **Gold City Story**: A metaphorical narrative using Gold City characters. Grace manages monetary water valves. Ivy manages the treasury vault. Alice runs gold mines. Jonas guards ancient dormant vaults. Use vivid but concise language. No em dashes.
2. **Real BTC Analysis**: A factual institutional-grade market brief using the actual metric names (M2, WALCL, TGA, RRP, DXY, DGS10, CDD, SOPR, etc).

Current step: ${stepDescriptions[stepId] || stepId}
User inputs:
${inputSummary}

${imageParts.length > 0 ? 'The user has also uploaded chart screenshot(s). Analyze the chart images to validate the selected inputs and add any visual observations to both narratives.' : ''}

Return ONLY a valid JSON object with these exact keys:
{
  "storySnippet": "Gold City narrative paragraph (2-4 sentences)",
  "btcSnippet": "Real BTC analysis paragraph (2-4 sentences)"
}

No markdown fences. No explanation. Just the JSON.`;

  try {
    const parts = [{ text: prompt }, ...imageParts];
    const text = await callGemini(
      [{ role: 'user', parts }],
      [],
      apiKey
    );

    let storySnippet = '';
    let btcSnippet = '';

    try {
      const jsonStr = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      const parsed = JSON.parse(jsonStr);
      storySnippet = parsed.storySnippet || parsed.story || parsed.goldCityStory || '';
      btcSnippet = parsed.btcSnippet || parsed.btc || parsed.realBtcAnalysis || '';
    } catch (pErr) {
      // Fallback text parsing if Gemini responded with plain text paragraphs
      const paragraphs = text.split('\n\n').filter(p => p.trim());
      if (paragraphs.length >= 2) {
        storySnippet = paragraphs[0].trim();
        btcSnippet = paragraphs[1].trim();
      } else {
        storySnippet = text.trim();
        btcSnippet = text.trim();
      }
    }

    const fallback = getFallbackNarrative(stepId, stepData);
    return {
      storySnippet: (storySnippet && storySnippet.length > 10) ? storySnippet : fallback.storySnippet,
      btcSnippet: (btcSnippet && btcSnippet.length > 10) ? btcSnippet : fallback.btcSnippet
    };
  } catch (err) {
    console.error('Narrative generation failed, using fallback:', err);
    return getFallbackNarrative(stepId, stepData);
  }
}

/* ---------- Fallback Data (No API Key) ---------- */

function getFallbackMacroData() {
  return {
    m2Trend: 'Expanding (+GEX Tailwind)',
    walclState: 'Neutral / Flat',
    fedRate: 'Paused / Stationary',
    netLiquidityValue: '$6.15 Trillion (fallback estimate)',
    tgaState: 'Draining TGA (Injecting Cash into Reserves)',
    rrpState: 'Draining RRP (Liquidity Bridge to T-Bills)',
    qraFocus: 'Short-Duration T-Bills (Liquidity Positive)',
    dxyLevel: '103.20',
    dxyTrend: 'Downtrend (Dollar Abundance)',
    yield10Y: 'Falling / Easing (Risk Positive)'
  };
}

function getFallbackNarrative(stepId, stepData) {
  const storyMap = {
    '1a': `Grace is opening the monetary water valves in the high towers (${stepData.m2Trend || 'M2 Expanding'}). As central bank assets (${stepData.walclState || 'WALCL Expanding'}) flood into merchants' accounts, monetary liquidity begins rising across the city.`,
    '1b': `Down in the treasury, Ivy's checking account (${stepData.tgaState || 'TGA Draining'}) is spending gold directly into public bank reserves, while funds drain out of reverse repo facilities (${stepData.rrpState || 'RRP Draining'}) into short-duration bills, creating a stealth liquidity surge.`,
    '1c': `Atmospheric conditions show the US Dollar Index (${stepData.dxyLevel || '103.5'} / ${stepData.dxyTrend || 'Downtrend'}) breaking down into dollar abundance, while 10-Year yields (${stepData.yield10Y || 'Easing'}) relax, confirming a warm climate for asset expansion.`,
    '1d': `High in the surrounding mountains, Alice's miners (${stepData.minerReserveState || 'Retention State'}) are storing their daily harvest (~450 BTC/day) in private balance sheet inventory, withholding gold from exchange floor wagons.`,
    '1e': `Deep inside the city, Jonas keeps his ancient subterranean vaults double-locked (${stepData.cddActivity || 'Low Baseline CDD'}). Long-term wealth (${stepData.lthRatio || '74.8% LTH'}) remains immobile in storage, restricting active market float.`,
    '1f': `On the central exchange floor, liquid float is severely contracted (${stepData.exchangeReserveLevel || 'Multi-Year Lows'}). 7-day netflows show net outflows (${stepData.netflow7d || '-14,200 BTC'}), while STH-SOPR (${stepData.sthSoprValue || '0.995'}) confirms a clean capitulation reset.`
  };

  const btcMap = {
    '1a': `Global M2 Money Supply is ${stepData.m2Trend || 'expanding'} with Fed Total Assets (WALCL) ${stepData.walclState || 'stabilizing'}. Central bank policy rates remain in a ${stepData.fedRate || 'neutral/easing'} stance, supporting fiat debasement dynamics.`,
    '1b': `Net Fed Liquidity (WALCL - WTREGEN - RRPONTSYD) reads ${stepData.netLiquidityValue || 'expanding'}. TGA drawdown (${stepData.tgaState || 'Draining'}) is actively injecting reserves into commercial banks, while RRP drainage offsets QT drag.`,
    '1c': `The US Dollar Index (DXY) is trading at ${stepData.dxyLevel || '103.50'} in a ${stepData.dxyTrend || '4H Downtrend'}. Benchmark 10Y Yields (DGS10) are ${stepData.yield10Y || 'easing'}, creating favorable financial conditions.`,
    '1d': `Network producers are in a ${stepData.minerReserveState || 'Retention State'}, holding block rewards on balance sheets with baseline exchange inflow volume (${stepData.minerInflowVolume || 'Low'}). Primary issuance remains ~450 BTC/day.`,
    '1e': `UTXO age distribution shows Long-Term Holder Supply (>155d) at ${stepData.lthRatio || '74.8%'}. Coin Days Destroyed (CDD) shows a ${stepData.cddActivity || 'low baseline'}, confirming zero old-coin distribution.`,
    '1f': `Exchange liquid float is severely contracted at ${stepData.exchangeReserveLevel || 'Multi-Year Lows'}. 7-day netflows read ${stepData.netflow7d || '-14,200 BTC'}, and STH-SOPR stands at ${stepData.sthSoprValue || '0.995 (Capitulation Reset)'}.`
  };

  return {
    storySnippet: storyMap[stepId] || 'Step completed.',
    btcSnippet: btcMap[stepId] || 'Metric verified.'
  };
}
