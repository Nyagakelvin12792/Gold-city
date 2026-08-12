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
    '1e': 'Step 1E: Camera 1F Jonas (Dormant Vaults & CDD). Metrics: LTH Supply Ratio, Coin Days Destroyed activity, HODL Waves trend.',
    '1f': 'Step 1F: Camera 1C Liquid Float & STH-SOPR. Metrics: 7-day exchange netflow, exchange reserve level, STH-SOPR value.',
    '2a': 'Step 2A: Tier 1 Strategic Auction (Weekly Volume Profile). Metrics: Weekly VPOC, Weekly Value Area High/Low boundaries (VAH/VAL). Character: Frank (District Surveyor).',
    '2b': 'Step 2B: Tier 2 Operational Campaign (Daily Volume Profile). Metrics: Daily VPOC, Daily Value Area Migration State (Initiative vs Responsive Rotation). Character: Frank (Daily Inspector).',
    '2c': 'Step 2C: Tier 3 Intraday Microstructure (4H Volume Profile). Metrics: Low Volume Node (LVN) Highways, Poor Highs / Poor Lows. Character: Frank (Highway Surveyor).'
  };

  const inputSummary = Object.entries(stepData)
    .filter(([k]) => !k.startsWith('image_'))
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

  const isLayer2 = stepId.startsWith('2');

  const prompt = `You are the Gold City AI Terminal narrative engine. You produce TWO distinct, highly tailored narratives for each sub-step:

1. **Gold City Story**: A metaphorical narrative using Gold City characters. ${isLayer2 ? 'Frank is the District Surveyor and Volume Mapper who inspects market district boundaries, Town Center VPOC, and Low Volume Node highways.' : 'Grace manages monetary water valves. Ivy manages treasury vaults. Alice runs gold mines. Jonas guards subterranean vaults.'} Use vivid, concise narrative prose without em dashes.
2. **Real BTC Analysis**: ${isLayer2 ? 'A strict Single Volume Analysis Framework (SVAF) institutional market brief. Use exact Volume Profile terminology: Tier 1 Strategic VPOC, Tier 2 Operational Value Area, Initiative Migration, Responsive Rotation, Low Volume Nodes (LVN), Single Print Tails, Poor Highs/Lows.' : 'A factual institutional-grade market brief using exact metric names (M2, WALCL, TGA, RRP, DXY, DGS10, CDD, SOPR).'}

Current step: ${stepDescriptions[stepId] || stepId}
User inputs:
${inputSummary}

${imageParts.length > 0 ? 'The user has uploaded chart screenshot(s). Analyze the chart images visually to extract specific Volume Profile levels (VPOC, VAH, VAL, LVN gaps) and incorporate them directly into both narratives.' : ''}

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

/* ---------- Auto-Fetch Layer 2 Data via Google Search Grounding ---------- */

export async function autoFetchLayer2Data(currentBtcPriceStr) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return getFallbackLayer2Data(currentBtcPriceStr);
  }

  const prompt = `You are a professional Bitcoin volume profile and market structure analyst for the Gold City trading terminal. 
Research the CURRENT Bitcoin session Volume Profile levels, Open Interest, and Cumulative Volume Delta (CVD) state. 
Current BTC Price: ${currentBtcPriceStr || 'around market price'}.

Return ONLY a valid JSON object with these exact keys and values chosen strictly from the allowed options:

{
  "currentBtcPrice": "${currentBtcPriceStr || '$96,450'}",
  "vpocLevel": string like "$95,800",
  "valueAreaHighLow": string like "VAH $97,200 | VAL $94,600",
  "auctionState": one of ["Inside Value Area (Balanced Rotation Between VAH & VAL)", "Above VAH (Bullish Value Migration Initiative)", "Below VAL (Bearish Value Migration Initiative)", "Failing Breakout (Reentry / Snapping Back Into District)"],
  "cvdState": one of ["Passive Buyer Absorption (Price Rising / CVD Down)", "Aggressive Market Buying (Price Up / CVD Up)", "Passive Seller Absorption (Price Falling / CVD Up)", "Aggressive Market Selling (Price Down / CVD Down)"],
  "openInterestTrend": one of ["OI Compression (Leverage Coiling at Range Highs/Lows)", "OI Expansion (Aggressive Trend Continuation)", "OI Liquidation Flush (Long/Short Squeeze Completed)"],
  "bidAskWalls": string like "Bids at $94,000 (1,200 BTC) | Asks at $98,500 (1,500 BTC)",
  "primaryExecutionSetup": one of ["Responsive Trade (Fade VAL/VAH Back to VPOC)", "Initiative Breakout (Ride Value Migration Across LVN)", "Liquidation Sweep & Reversal (Fade Stop-Run Into Key Wall)"]
}

Search for: BTC volume point of control VPOC price today, BTC Value Area High VAH Value Area Low VAL today, BTC Open Interest trend, BTC CVD delta trend, and BTC orderbook bid ask liquidity walls. Return ONLY the JSON, no markdown fences, no explanation.`;

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
    console.warn('Layer 2 auto-fetch search failed, using fallback:', err);
    return getFallbackLayer2Data(currentBtcPriceStr);
  }
}

export function getFallbackLayer2Data(currentPriceStr = '') {
  return {
    weeklyVpoc: '',
    weeklyValueAreaRange: '',
    dailyVpoc: '',
    dailyAuctionState: 'Inside Daily Value Area (Balanced Rotation)',
    lvnHighways: '',
    poorHighsLows: 'Clean Auctions (Proper Tailed Rejections)'
  };
}

/**
 * Multimodal Vision Analysis Engine for Layer 2 (SVAF-Guided):
 * Analyzes uploaded chart screenshots — 2A (Weekly VP), 2B (Daily VP), 2C (4H VP) —
 * following the Single Volume Analysis Framework (SVAF) top-down hierarchy.
 * Returns per-step narratives for 2a, 2b, 2c AND a final SVAF directional bias conclusion.
 */
export async function analyzeLayer2VisionCharts(subStepsDataMap, deribitData, binanceData) {
  const apiKey = getApiKey();

  // Collect uploaded chart screenshots per step, preserving which step each image belongs to
  const imageParts2a = [];
  const imageParts2b = [];
  const imageParts2c = [];

  const collectImages = (stepId, bucket) => {
    const data = subStepsDataMap[stepId] || {};
    Object.keys(data).forEach(k => {
      if (k.startsWith('image_') && data[k] && data[k].startsWith('data:image')) {
        const [header, base64] = data[k].split(',');
        const mimeMatch = header.match(/data:(image\/\w+);/);
        const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
        bucket.push({ inline_data: { mime_type: mimeType, data: base64 } });
      }
    });
  };
  collectImages('2a', imageParts2a);
  collectImages('2b', imageParts2b);
  collectImages('2c', imageParts2c);

  const allImageParts = [...imageParts2a, ...imageParts2b, ...imageParts2c];

  const deribitSummary = deribitData?.monthlyCallWall ? `
Options Derivatives Context (Programmatically Fetched from Deribit):
- BTC Spot Price: ${binanceData?.lastPrice || deribitData?.underlyingPrice || 'N/A'}
- Monthly Call Wall (dealer hedging ceiling): ${deribitData.monthlyCallWall}
- Monthly Put Wall (dealer hedging floor): ${deribitData.monthlyPutWall}
- Zero-Gamma Flip Level (vol regime boundary): ${deribitData.zeroGammaFlip}
- Put/Call OI Ratio: ${deribitData.putCallRatio}
Note: Above the Gamma Flip = dealers are long gamma (suppresses vol). Below = dealers short gamma (amplifies moves).` : '';

  // No images uploaded — return no-data state, do not fabricate
  if (!apiKey || allImageParts.length === 0) {
    const noDataMsg = 'No chart uploaded yet. Upload the screenshot to generate a real reading.';
    return {
      directionalBias: 'AWAITING CHART UPLOADS',
      finalBiasNarrative: noDataMsg,
      '2a': { story: noDataMsg, btc: noDataMsg },
      '2b': { story: noDataMsg, btc: noDataMsg },
      '2c': { story: noDataMsg, btc: noDataMsg }
    };
  }

  const imageCountHint = `(${imageParts2a.length} Weekly VP image(s), ${imageParts2b.length} Daily VP image(s), ${imageParts2c.length} 4H VP image(s) uploaded)`;

  const prompt = `You are the Lead Market Structure and Auction Analyst for the Gold City trading terminal, applying the Single Volume Analysis Framework (SVAF).

The trader has uploaded ${allImageParts.length} chart screenshot(s) ${imageCountHint}:
- TIER 1 STRATEGIC: Weekly Volume Profile (top of SVAF hierarchy — defines the macro district)
- TIER 2 OPERATIONAL: Daily Volume Profile (defines the current campaign direction)
- TIER 3 INTRADAY: 4-Hour Volume Profile (identifies LVN highways and intraday entry zones)

${deribitSummary}

SVAF ANALYSIS RULES (STRICT):
1. Start at Weekly VP (Tier 1). Identify: Weekly VPOC (Town Center), Weekly VAH, Weekly VAL, and whether price is INSIDE or OUTSIDE the weekly value area. This defines the macro district.
2. Move to Daily VP (Tier 2). Identify: Daily VPOC, Daily VAH, Daily VAL. Determine if the daily campaign shows INITIATIVE (value migrating away from weekly VPOC) or RESPONSIVE (rotating back toward weekly VPOC). The daily auction direction must confirm or deny the weekly bias.
3. Move to 4H VP (Tier 3). Identify: LVN Highway gaps, Poor Highs (unfinished auction above), Poor Lows (unfinished auction below). These reveal where price can move with minimal friction.
4. ONLY read levels visible in the uploaded images. Do NOT fabricate or hallucinate specific price numbers if you cannot clearly read them. Use descriptive language like "above the visible VPOC" instead.
5. Combine all three tiers to determine the DEFINITIVE DIRECTIONAL BIAS.

Gold City narrative vocabulary: Frank is the District Surveyor who maps the Exchange Building. VPOC = Town Center (most business done here). VAH = Upper District Wall. VAL = Lower District Wall. LVN = Empty Highway (frictionless travel corridor). Poor High = Unfinished Roof (overhead work to be done). Poor Low = Cracked Foundation (underside work to be done). Initiative = merchants packing up and migrating to a new district. Responsive = merchants rotating back to fair value anchor.

Return ONLY a valid JSON object with EXACTLY these keys — no markdown fences, no explanation:
{
  "directionalBias": one of ["BULLISH VALUE MIGRATION INITIATIVE", "BEARISH VALUE MIGRATION INITIATIVE", "BALANCED ROTATION IN VALUE AREA"],
  "finalBiasNarrative": "2-3 sentence SVAF conclusion explaining the bias across all three tiers",
  "2a": {
    "weeklyVpoc": "Weekly VPOC level read from chart, or 'not visible' if unclear",
    "weeklyVah": "Weekly VAH level or 'not visible'",
    "weeklyVal": "Weekly VAL level or 'not visible'",
    "weeklyAuctionState": "e.g. 'Price inside Weekly Value Area — balanced rotation' or 'Price above Weekly VAH — initiative breakout attempt'",
    "story": "Frank Tier 1 Strategic Survey Gold City narrative paragraph (2-3 sentences)",
    "btc": "SVAF Tier 1 institutional brief paragraph (2-3 sentences) using exact VP terminology"
  },
  "2b": {
    "dailyVpoc": "Daily VPOC level read from chart, or 'not visible' if unclear",
    "dailyVah": "Daily VAH level or 'not visible'",
    "dailyVal": "Daily VAL level or 'not visible'",
    "dailyAuctionState": "e.g. 'Daily campaign initiating value migration above weekly VPOC' or 'Daily responsive rotation back to weekly VPOC'",
    "story": "Frank Tier 2 Operational Campaign Gold City narrative paragraph (2-3 sentences)",
    "btc": "SVAF Tier 2 institutional brief paragraph (2-3 sentences)"
  },
  "2c": {
    "lvnHighways": "LVN price zones read from 4H chart, or 'not visible' if unclear",
    "poorHighsLows": "e.g. 'Poor High visible above at [level]' or 'Clean tailed rejection — no overhead unfinished work'",
    "intraday4hState": "e.g. 'LVN highway above current price — frictionless upside corridor available' or 'Poor Low below — downside magnet for price cleanup'",
    "story": "Frank Tier 3 Intraday 4H Highway Inspection Gold City narrative paragraph (2-3 sentences)",
    "btc": "SVAF Tier 3 institutional brief paragraph (2-3 sentences)"
  }
}`;

  try {
    const parts = [{ text: prompt }, ...allImageParts];
    const text = await callGemini(
      [{ role: 'user', parts }],
      [],
      apiKey
    );

    const jsonStr = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    const parsed = JSON.parse(jsonStr);
    return parsed;
  } catch (err) {
    console.warn('Vision chart analysis warning:', err.message);
    // Return honest no-read state — do not invent numbers
    return {
      directionalBias: 'ANALYSIS INCOMPLETE',
      finalBiasNarrative: 'Vision analysis encountered an error reading the uploaded charts. Please ensure chart images are clear and retry.',
      '2a': {
        weeklyVpoc: 'not visible',
        story: 'Frank attempted to survey the Weekly District but the chart image could not be read clearly. Re-upload a clearer screenshot.',
        btc: 'Weekly Volume Profile could not be parsed from the uploaded image. No fabricated levels will be reported.'
      },
      '2b': {
        dailyVpoc: 'not visible',
        story: 'Frank could not map the Daily Campaign. Re-upload the daily volume profile screenshot.',
        btc: 'Daily Volume Profile analysis incomplete. Upload a clear daily session profile.'
      },
      '2c': {
        lvnHighways: 'not visible',
        story: 'Frank could not identify the 4H Highway corridors. Re-upload the 4-hour profile.',
        btc: '4-Hour LVN and Poor High/Low analysis incomplete. Upload a clear 4H profile.'
      }
    };
  }
}

/* ---------- Fallback Data (No API Key) ---------- */

function getFallbackMacroData() {
  return {
    m2Trend: 'Expanding (+GEX Tailwind)',
    walclState: 'Neutral / Flat',
    fedRate: 'Paused / Stationary',
    netLiquidityValue: '$6.15 Trillion',
    tgaState: 'Draining TGA (Injecting Cash into Reserves)',
    rrpState: 'Draining RRP (Liquidity Bridge to T-Bills)',
    qraFocus: 'Short-Duration T-Bills (Liquidity Positive)',
    dxyLevel: '103.50',
    dxyTrend: 'Downtrend (Dollar Abundance)',
    yield10Y: 'Falling / Easing (Risk Positive)',
    minerReserveState: 'Retention State (Alice HODLing Minted BTC)',
    minerInflowVolume: 'Baseline / Low Transfer Volume',
    lthRatio: '74.8% LTH',
    cddActivity: 'Low Baseline (Jonas Vaults Sealed)',
    hodlWaveTrend: 'Expanding (Supply Scarcity)',
    netflow7d: '-14,200 BTC Net Outflow',
    exchangeReserveLevel: 'Multi-Month / Multi-Year Lows (Contracted Float)',
    sthSoprValue: 'STH-SOPR < 1.0 (Loss Realization / Capitulation Reset)'
  };
}

function getFallbackNarrative(stepId, stepData) {
  const storyMap = {
    '1a': `Grace is opening the monetary water valves in the high towers (${stepData.m2Trend || 'M2 Expanding'}). As central bank assets (${stepData.walclState || 'WALCL Expanding'}) flood into merchants' accounts, monetary liquidity begins rising across the city.`,
    '1b': `Down in the treasury, Ivy's checking account (${stepData.tgaState || 'TGA Draining'}) is spending gold directly into public bank reserves, while funds drain out of reverse repo facilities (${stepData.rrpState || 'RRP Draining'}) into short-duration bills, creating a stealth liquidity surge.`,
    '1c': `Atmospheric conditions show the US Dollar Index (${stepData.dxyLevel || '103.5'} / ${stepData.dxyTrend || 'Downtrend'}) breaking down into dollar abundance, while 10-Year yields (${stepData.yield10Y || 'Easing'}) relax, confirming a warm climate for asset expansion.`,
    '1d': `High in the surrounding mountains, Alice's miners (${stepData.minerReserveState || 'Retention State'}) are storing their daily harvest (~450 BTC/day) in private balance sheet inventory, withholding gold from exchange floor wagons.`,
    '1e': `Deep inside the city, Jonas keeps his ancient subterranean vaults double-locked (${stepData.cddActivity || 'Low Baseline CDD'}). Long-term wealth (${stepData.lthRatio || '74.8% LTH'}) remains immobile in storage, restricting active market float.`,
    '1f': `On the central exchange floor, liquid float is severely contracted (${stepData.exchangeReserveLevel || 'Multi-Year Lows'}). 7-day netflows show net outflows (${stepData.netflow7d || '-14,200 BTC'}), while STH-SOPR (${stepData.sthSoprValue || '0.995'}) confirms a clean capitulation reset.`,
    '2a': `Frank's spatial survey maps the Strategic District boundaries across the Weekly Volume Profile. Weekly VPOC (${stepData.weeklyVpoc || 'read from Weekly chart'}) acts as the central fair value anchor, with value area boundaries defined by ${stepData.weeklyValueAreaRange || 'Weekly VAH and VAL'}.`,
    '2b': `Moving to the Daily Operational Campaign, Frank tracks day-to-day value migration. Daily VPOC sits at ${stepData.dailyVpoc || 'the daily volume peak'}, with auction state currently reflecting ${stepData.dailyAuctionState || 'Daily Value Area Rotation'}.`,
    '2c': `Zooming into intraday 4-Hour roads, Frank identifies Low Volume Node highways (${stepData.lvnHighways || 'LVN gaps'}) where price moves with low friction. Auction inspection confirms ${stepData.poorHighsLows || 'Clean Tailed Rejections'}.`
  };

  const btcMap = {
    '1a': `Global M2 Money Supply is ${stepData.m2Trend || 'expanding'} with Fed Total Assets (WALCL) ${stepData.walclState || 'stabilizing'}. Central bank policy rates remain in a ${stepData.fedRate || 'neutral/easing'} stance, supporting fiat debasement dynamics.`,
    '1b': `Net Fed Liquidity (WALCL - WTREGEN - RRPONTSYD) reads ${stepData.netLiquidityValue || 'expanding'}. TGA drawdown (${stepData.tgaState || 'Draining'}) is actively injecting reserves into commercial banks, while RRP drainage offsets QT drag.`,
    '1c': `The US Dollar Index (DXY) is trading at ${stepData.dxyLevel || '103.50'} in a ${stepData.dxyTrend || '4H Downtrend'}. Benchmark 10Y Yields (DGS10) are ${stepData.yield10Y || 'easing'}, creating favorable financial conditions.`,
    '1d': `Network producers are in a ${stepData.minerReserveState || 'Retention State'}, holding block rewards on balance sheets with baseline exchange inflow volume (${stepData.minerInflowVolume || 'Low'}). Primary issuance remains ~450 BTC/day.`,
    '1e': `UTXO age distribution shows Long-Term Holder Supply (>155d) at ${stepData.lthRatio || '74.8%'}. Coin Days Destroyed (CDD) shows a ${stepData.cddActivity || 'low baseline'}, confirming zero old-coin distribution.`,
    '1f': `Exchange liquid float is severely contracted at ${stepData.exchangeReserveLevel || 'Multi-Year Lows'}. 7-day netflows read ${stepData.netflow7d || '-14,200 BTC'}, and STH-SOPR stands at ${stepData.sthSoprValue || '0.995 (Capitulation Reset)'}.`,
    '2a': `Weekly Volume Profile analysis establishes Tier 1 Strategic VPOC at ${stepData.weeklyVpoc || 'the primary high-volume node'} within ${stepData.weeklyValueAreaRange || 'Weekly VAH and VAL'}. Market structure reflects multi-week fair value acceptance and macro district positioning.`,
    '2b': `Tier 2 Operational Volume Profile establishes Daily VPOC at ${stepData.dailyVpoc || 'current session point of control'}. Auction mechanics confirm ${stepData.dailyAuctionState || 'Daily Value Area Rotation'}, determining whether merchants are initiating value migration or rotating inside established range boundaries.`,
    '2c': `Tier 3 Intraday 4-Hour Profile highlights Low Volume Node (LVN) liquidity gaps at ${stepData.lvnHighways || 'thin volume nodes'}. Auction structure indicates ${stepData.poorHighsLows || 'Clean Tailed Rejections'}, confirming whether intraday auctions are complete or leaving unrepaired poor highs/lows.`
  };

  return {
    storySnippet: storyMap[stepId] || 'Step completed.',
    btcSnippet: btcMap[stepId] || 'Metric verified.'
  };
}
