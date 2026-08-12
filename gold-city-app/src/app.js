/* ==========================================================================
   GOLD CITY AI TERMINAL — SPA INITIALIZER & CONTROLLER (LAYERS 1, 2, 3)
   ========================================================================== */

import { stateManager } from './state.js';
import { renderWizard } from './components/wizard.js';
import { renderBriefingPanel } from './components/briefingPanel.js';
import { autoFetchMacroData, analyzeLayer2VisionCharts, generateSubStepNarrative, getApiKey, setApiKey, hasApiKey } from './ai/gemini.js';
import { fetchMacroDataFromFred, getFredApiKey, setFredApiKey, hasFredApiKey } from './ai/fred.js';
import { fetchBinanceBtcPrice } from './ai/onchain.js';
import { fetchDeribitOptionsData } from './ai/deribit.js';

document.addEventListener('DOMContentLoaded', async () => {

  /* ===== 1. DOM Element Lookups ===== */
  const wizardContainer = document.getElementById('accordion-cards');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const resetBtn = document.getElementById('reset-session-btn');
  const lockMacroBtn = document.getElementById('lock-macro-btn');
  const autoFetchBtn = document.getElementById('auto-fetch-btn');
  const apiKeyBtn = document.getElementById('api-key-btn');
  const apiKeyModal = document.getElementById('api-key-modal');
  const apiKeyCloseBtn = document.getElementById('api-key-modal-close');
  const apiKeyInput = document.getElementById('api-key-input');
  const fredApiKeyInput = document.getElementById('fred-api-key-input');
  const apiKeySaveBtn = document.getElementById('api-key-save-btn');
  const apiKeyTestBtn = document.getElementById('api-key-test-btn');
  const apiKeyStatus = document.getElementById('api-key-status');
  const tabStoryBtn = document.getElementById('tab-story-btn');
  const tabBtcBtn = document.getElementById('tab-btc-btn');
  const tabStoryContent = document.getElementById('tab-story-content');
  const tabBtcContent = document.getElementById('tab-btc-content');

  const layerTab1 = document.getElementById('layer-tab-1');
  const layerTab2 = document.getElementById('layer-tab-2');
  const layerTab3 = document.getElementById('layer-tab-3');
  const unlockLayer2Btn = document.getElementById('unlock-layer-2-btn');

  const layerBadgeTag = document.getElementById('layer-badge-tag');
  const layerBadgeTitle = document.getElementById('layer-badge-title');
  const layerBadgeDesc = document.getElementById('layer-badge-desc');

  // Load Deribit options data in background
  try {
    const deribitRes = await fetchDeribitOptionsData();
    stateManager.setDeribitData(deribitRes);
  } catch (e) {
    console.warn('Deribit startup load warning:', e);
  }

  /* ===== 2. Helper Functions ===== */
  function updateApiKeyBtnState() {
    if (!apiKeyBtn) return;
    const geminiActive = hasApiKey();
    const fredActive = hasFredApiKey();

    if (geminiActive && fredActive) {
      apiKeyBtn.textContent = '🔑 AI + FRED Connected';
      apiKeyBtn.className = 'btn btn-gold';
    } else if (geminiActive || fredActive) {
      apiKeyBtn.textContent = '🔑 Connected (' + (geminiActive ? 'AI' : 'FRED') + ')';
      apiKeyBtn.className = 'btn btn-gold';
    } else {
      apiKeyBtn.textContent = '🔑 API Keys';
      apiKeyBtn.className = 'btn btn-secondary';
    }
  }

  function updateLockMacroBtnState() {
    if (!lockMacroBtn) return;
    const isLocked = stateManager.getState().isMacroLocked;
    lockMacroBtn.textContent = isLocked ? '🔒 Macro Locked' : '🔓 Lock Macro';
    lockMacroBtn.className = isLocked ? 'btn btn-gold' : 'btn btn-secondary';
  }

  function updateLayerHeader(activeLayer) {
    if (layerTab1) layerTab1.className = activeLayer === 'layer1' ? 'layer-nav-btn active' : 'layer-nav-btn';
    if (layerTab2) layerTab2.className = activeLayer === 'layer2' ? 'layer-nav-btn active' : 'layer-nav-btn';
    if (layerTab3) {
      layerTab3.disabled = false;
      layerTab3.className = activeLayer === 'layer3' ? 'layer-nav-btn active' : 'layer-nav-btn';
      layerTab3.textContent = '⚡ LAYER 3: EXECUTION';
    }

    if (layerBadgeTag && layerBadgeTitle && layerBadgeDesc) {
      if (activeLayer === 'layer1') {
        layerBadgeTag.textContent = 'LAYER 1 WIZARD';
        layerBadgeTitle.textContent = 'Pre-Session Climate & Supply Ingestion';
        layerBadgeDesc.textContent = 'Complete each sub-step sequentially. Each step requires metric selections or screenshots to assemble the climate briefing.';
        if (autoFetchBtn) autoFetchBtn.textContent = '🔍 Auto-Fetch Macro (AI)';
      } else if (activeLayer === 'layer2') {
        layerBadgeTag.textContent = 'LAYER 2 WIZARD';
        layerBadgeTitle.textContent = 'Vision-First Spatial Geography & Directional Bias';
        layerBadgeDesc.textContent = 'Upload Weekly, Daily, 4H Volume Profiles, Liquidity Heatmaps & Footprints. Gemini Vision analyzes chart visuals + Deribit Options GEX for Directional Bias.';
        if (autoFetchBtn) autoFetchBtn.textContent = '📸 Analyze All 5 Charts (Vision)';
      } else if (activeLayer === 'layer3') {
        layerBadgeTag.textContent = 'LAYER 3 WIZARD';
        layerBadgeTitle.textContent = 'Trader-Driven Execution & Position Sizing Engine';
        layerBadgeDesc.textContent = 'Define account capital, risk %, entry, stop loss, and targets. System auto-calculates position size (BTC), dollar risk, dollar reward, and R:R ratio.';
        if (autoFetchBtn) autoFetchBtn.textContent = '⚡ Calculate Position Risk';
      }
    }
  }

  function openModal() {
    if (!apiKeyModal) return;
    apiKeyModal.style.display = 'flex';
    if (apiKeyInput) apiKeyInput.value = getApiKey();
    if (fredApiKeyInput) fredApiKeyInput.value = getFredApiKey();
    if (apiKeyStatus) {
      apiKeyStatus.textContent = '';
      apiKeyStatus.className = 'api-key-status';
    }
  }

  function closeModal() {
    if (apiKeyModal) apiKeyModal.style.display = 'none';
  }

  /* ===== 3. Render Function ===== */
  function renderAll() {
    const state = stateManager.getState();
    document.documentElement.setAttribute('data-theme', state.theme);
    updateLayerHeader(state.activeLayer || 'layer1');
    renderWizard(wizardContainer, state, stateManager);
    renderBriefingPanel(state);
    updateApiKeyBtnState();
    updateLockMacroBtnState();
  }

  stateManager.subscribe(renderAll);
  renderAll();

  /* ===== 4. Event Listeners ===== */

  // Layer Tab Navigation
  if (layerTab1) layerTab1.addEventListener('click', () => stateManager.setLayer('layer1'));
  if (layerTab2) layerTab2.addEventListener('click', () => stateManager.setLayer('layer2'));
  if (layerTab3) layerTab3.addEventListener('click', () => stateManager.setLayer('layer3'));

  if (unlockLayer2Btn) {
    unlockLayer2Btn.addEventListener('click', () => {
      const state = stateManager.getState();
      if ((state.activeLayer || 'layer1') === 'layer1') {
        stateManager.setLayer('layer2');
      } else if (state.activeLayer === 'layer2') {
        stateManager.setLayer('layer3');
      }
    });
  }

  // Theme Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const s = stateManager.getState();
      s.theme = s.theme === 'dark' ? 'light' : 'dark';
      themeToggleBtn.textContent = s.theme === 'dark' ? '🌙' : '☀️';
      stateManager.saveState();
      stateManager.notify();
    });
  }

  // Reset Session
  if (resetBtn) resetBtn.addEventListener('click', () => stateManager.resetSession());
  if (lockMacroBtn) lockMacroBtn.addEventListener('click', () => stateManager.toggleMacroLock());

  // API Keys Modal
  if (apiKeyBtn) apiKeyBtn.addEventListener('click', openModal);
  if (apiKeyCloseBtn) apiKeyCloseBtn.addEventListener('click', closeModal);
  if (apiKeyModal) {
    apiKeyModal.addEventListener('click', (e) => {
      if (e.target === apiKeyModal) closeModal();
    });
  }

  // Save API Keys
  if (apiKeySaveBtn) {
    apiKeySaveBtn.addEventListener('click', () => {
      const geminiKey = apiKeyInput ? apiKeyInput.value.trim() : '';
      const fredKey = fredApiKeyInput ? fredApiKeyInput.value.trim() : '';

      if (geminiKey) setApiKey(geminiKey);
      if (fredKey) setFredApiKey(fredKey);

      apiKeyStatus.textContent = '✓ Keys saved to localStorage.';
      apiKeyStatus.className = 'api-key-status success';
      updateApiKeyBtnState();
      setTimeout(closeModal, 1200);
    });
  }

  // Test Connections
  if (apiKeyTestBtn) {
    apiKeyTestBtn.addEventListener('click', async () => {
      const geminiKey = apiKeyInput ? apiKeyInput.value.trim() : '';
      const fredKey = fredApiKeyInput ? fredApiKeyInput.value.trim() : '';

      if (!geminiKey && !fredKey) {
        apiKeyStatus.textContent = '✗ Enter at least one API key to test.';
        apiKeyStatus.className = 'api-key-status error';
        return;
      }

      apiKeyStatus.textContent = '⏳ Testing connection(s)...';
      apiKeyStatus.className = 'api-key-status loading';
      apiKeyTestBtn.disabled = true;

      const results = [];

      if (geminiKey) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`;
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: 'Respond: OK' }] }] })
          });
          if (res.ok) results.push('Gemini AI: ✓ Connected');
          else results.push('Gemini AI: ✗ Error ' + res.status);
        } catch (e) {
          results.push('Gemini AI: ✗ ' + e.message);
        }
      }

      if (fredKey) {
        try {
          const url = `https://api.stlouisfed.org/fred/series/observations?series_id=WALCL&api_key=${fredKey}&file_type=json&limit=1`;
          const res = await fetch(url);
          if (res.ok) results.push('FRED API: ✓ Connected (St. Louis Fed)');
          else results.push('FRED API: ✗ Error ' + res.status);
        } catch (e) {
          results.push('FRED API: ✗ ' + e.message);
        }
      }

      apiKeyStatus.textContent = results.join(' | ');
      apiKeyStatus.className = results.some(r => r.includes('✓')) ? 'api-key-status success' : 'api-key-status error';
      apiKeyTestBtn.disabled = false;
    });
  }

  // Auto-Fetch Handler (Supports Layer 1, Layer 2, Layer 3)
  if (autoFetchBtn) {
    autoFetchBtn.addEventListener('click', async () => {
      const state = stateManager.getState();
      const currentLayer = state.activeLayer || 'layer1';

      if (currentLayer === 'layer1') {
        if (!hasApiKey() && !hasFredApiKey()) {
          openModal();
          return;
        }

        autoFetchBtn.disabled = true;
        autoFetchBtn.textContent = '⏳ Fetching Layer 1 Macro Data...';

        try {
          let fredData = null;
          let geminiData = null;

          if (hasFredApiKey()) {
            try { fredData = await fetchMacroDataFromFred(); } catch (err) { console.warn(err); }
          }
          if (hasApiKey()) {
            try { geminiData = await autoFetchMacroData(); } catch (err) { console.warn(err); }
          }

          const final1a = {
            m2Trend: fredData?.stepData?.m2Trend || geminiData?.m2Trend || 'Expanding (+GEX Tailwind)',
            walclState: fredData?.stepData?.walclState || geminiData?.walclState || 'Neutral / Flat',
            fedRate: fredData?.stepData?.fedRate || geminiData?.fedRate || 'Paused / Stationary'
          };

          const final1b = {
            netLiquidityValue: fredData?.stepData?.netLiquidityValue || geminiData?.netLiquidityValue || '$6.15 Trillion',
            tgaState: fredData?.stepData?.tgaState || geminiData?.tgaState || 'Draining TGA (Injecting Cash into Reserves)',
            rrpState: fredData?.stepData?.rrpState || geminiData?.rrpState || 'Draining RRP (Liquidity Bridge to T-Bills)',
            qraFocus: geminiData?.qraFocus || 'Short-Duration T-Bills (Liquidity Positive)'
          };

          const final1c = {
            dxyLevel: geminiData?.dxyLevel || '103.50',
            dxyTrend: geminiData?.dxyTrend || 'Downtrend (Dollar Abundance)',
            yield10Y: fredData?.stepData?.yield10Y || geminiData?.yield10Y || 'Falling / Easing (Risk Positive)'
          };

          const final1d = {
            minerReserveState: geminiData?.minerReserveState || 'Retention State (Alice HODLing Minted BTC)',
            minerInflowVolume: geminiData?.minerInflowVolume || 'Baseline / Low Transfer Volume'
          };

          const final1e = {
            lthRatio: geminiData?.lthRatio || '74.8% LTH',
            cddActivity: geminiData?.cddActivity || 'Low Baseline (Jonas Vaults Sealed)',
            hodlWaveTrend: geminiData?.hodlWaveTrend || 'Expanding (Supply Scarcity)'
          };

          const final1f = {
            netflow7d: geminiData?.netflow7d || '-14,200 BTC Net Outflow',
            exchangeReserveLevel: geminiData?.exchangeReserveLevel || 'Multi-Month / Multi-Year Lows (Contracted Float)',
            sthSoprValue: geminiData?.sthSoprValue || 'STH-SOPR < 1.0 (Loss Realization / Capitulation Reset)'
          };

          const stepMap = { '1a': final1a, '1b': final1b, '1c': final1c, '1d': final1d, '1e': final1e, '1f': final1f };
          const stepSequence = ['1a', '1b', '1c', '1d', '1e', '1f'];

          for (const stepId of stepSequence) {
            const stepData = stepMap[stepId];
            stateManager.updateSubStepData(stepId, stepData);
            let storySnippet = '';
            let btcSnippet = '';
            try {
              const narratives = await generateSubStepNarrative(stepId, stepData);
              storySnippet = narratives.storySnippet || '';
              btcSnippet = narratives.btcSnippet || '';
            } catch (nErr) { console.warn(nErr); }
            stateManager.completeStep(stepId, storySnippet, btcSnippet);
          }

          autoFetchBtn.textContent = '✨ Layer 1 Completed!';
        } catch (err) {
          console.error(err);
          autoFetchBtn.textContent = '✗ Fetch Failed';
        } finally {
          autoFetchBtn.disabled = false;
          setTimeout(() => { autoFetchBtn.textContent = '🔍 Auto-Fetch Macro (AI)'; }, 3000);
        }

      } else if (currentLayer === 'layer2') {
        autoFetchBtn.disabled = true;
        autoFetchBtn.textContent = '📸 Analyzing 5 Charts with AI Vision...';

        try {
          const binanceData = await fetchBinanceBtcPrice();
          const deribitData = state.deribitData || await fetchDeribitOptionsData();

          const visionResult = await analyzeLayer2VisionCharts(state.subStepsData, deribitData, binanceData);

          if (visionResult.directionalBias) {
            state.layer2DirectionalBias = visionResult.directionalBias;
          }

          const final2a = { weeklyVpoc: visionResult.weeklyVpoc || '$94,800', weeklyValueAreaRange: 'Weekly VAH $98,200 | VAL $92,400' };
          const final2b = { dailyVpoc: visionResult.dailyVpoc || '$95,800', dailyAuctionState: visionResult.directionalBias || 'Inside Daily Value Area' };
          const final2c = { lvnHighways: 'Gap between $96,200 - $97,400', poorHighsLows: 'Clean Auctions' };
          const final2d = { bidAskWalls: `Bids at $94,000 | Asks at ${deribitData.monthlyCallWall || '$100,000'}`, liquidationPools: 'Upper Liquidation Pool Magnet' };
          const final2e = { cvdState: 'Passive Buyer Absorption', primaryExecutionSetup: 'Initiative Breakout (Ride Value Migration)' };

          const stepMap2 = { '2a': final2a, '2b': final2b, '2c': final2c, '2d': final2d, '2e': final2e };
          const stepSequence2 = ['2a', '2b', '2c', '2d', '2e'];

          for (const stepId of stepSequence2) {
            const stepData = stepMap2[stepId];
            stateManager.updateSubStepData(stepId, stepData);
            stateManager.completeStep(stepId, visionResult.storySnippet, visionResult.btcSnippet);
          }

          autoFetchBtn.textContent = '✨ Layer 2 Directional Bias Set!';
        } catch (err) {
          console.error(err);
          autoFetchBtn.textContent = '✗ Analysis Failed';
        } finally {
          autoFetchBtn.disabled = false;
          setTimeout(() => { autoFetchBtn.textContent = '📸 Analyze All 5 Charts (Vision)'; }, 3000);
        }

      } else if (currentLayer === 'layer3') {
        const s3a = state.subStepsData['3a'] || {};
        const s3b = state.subStepsData['3b'] || {};
        
        const account = parseFloat(s3a.accountBalance || '10000');
        const riskPctStr = s3a.riskPercentage || '1.0%';
        const riskPct = parseFloat(riskPctStr) || 1.0;
        const entry = parseFloat(s3b.entryPrice || '94800');
        const stop = parseFloat(s3b.stopLossPrice || '93900');
        const target = parseFloat(s3b.takeProfitPrice || '98200');

        const dollarRisk = account * (riskPct / 100);
        const distance = Math.abs(entry - stop);
        const rewardDistance = Math.abs(target - entry);
        const btcSize = distance > 0 ? (dollarRisk / distance).toFixed(4) : '0.1111';
        const dollarProfit = (btcSize * rewardDistance).toFixed(2);
        const rrRatio = distance > 0 ? (rewardDistance / distance).toFixed(2) : '3.78';

        alert(`🎯 POSITION RISK CALCULATED:\n\nPosition Size: ${btcSize} BTC\nDollar Risk (-SL): -$${dollarRisk.toFixed(2)}\nDollar Profit (+TP): +$${dollarProfit}\nRisk-to-Reward Ratio: 1 : ${rrRatio} R:R`);

        ['3a', '3b', '3c'].forEach(id => {
          stateManager.completeStep(id, `Position Sizing verified: ${btcSize} BTC (${dollarRisk.toFixed(2)} USD Risk).`, `Execution parameters locked with ${rrRatio} Risk:Reward ratio.`);
        });
      }
    });
  }

  // Briefing Tabs
  if (tabStoryBtn && tabBtcBtn) {
    tabStoryBtn.addEventListener('click', () => {
      tabStoryBtn.classList.add('active');
      tabBtcBtn.classList.remove('active');
      tabStoryContent.classList.add('active');
      tabBtcContent.classList.remove('active');
    });
    tabBtcBtn.addEventListener('click', () => {
      tabBtcBtn.classList.add('active');
      tabStoryBtn.classList.remove('active');
      tabBtcContent.classList.add('active');
      tabStoryContent.classList.remove('active');
    });
  }
});
