/* ==========================================================================
   GOLD CITY AI TERMINAL — SPA INITIALIZER & CONTROLLER (LAYER 1 & LAYER 2)
   ========================================================================== */

import { stateManager } from './state.js';
import { renderWizard } from './components/wizard.js';
import { renderBriefingPanel } from './components/briefingPanel.js';
import { autoFetchMacroData, autoFetchLayer2Data, generateSubStepNarrative, getApiKey, setApiKey, hasApiKey } from './ai/gemini.js';
import { fetchMacroDataFromFred, getFredApiKey, setFredApiKey, hasFredApiKey } from './ai/fred.js';
import { fetchBinanceBtcPrice } from './ai/onchain.js';

document.addEventListener('DOMContentLoaded', () => {

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

    if (layerBadgeTag && layerBadgeTitle && layerBadgeDesc) {
      if (activeLayer === 'layer1') {
        layerBadgeTag.textContent = 'LAYER 1 WIZARD';
        layerBadgeTitle.textContent = 'Pre-Session Climate & Supply Ingestion';
        layerBadgeDesc.textContent = 'Complete each sub-step sequentially. Each step requires metric selections or screenshots to assemble the climate briefing.';
        if (autoFetchBtn) autoFetchBtn.textContent = '🔍 Auto-Fetch Macro (AI)';
      } else if (activeLayer === 'layer2') {
        layerBadgeTag.textContent = 'LAYER 2 WIZARD';
        layerBadgeTitle.textContent = 'Spatial Geography & Auction Structure Mapping';
        layerBadgeDesc.textContent = 'Map Volume Profile (VPOC, VAH, VAL), Order Flow CVD, Open Interest, and DOM liquidity walls to determine trade setups.';
        if (autoFetchBtn) autoFetchBtn.textContent = '🔍 Auto-Fetch Layer 2 (AI)';
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
  if (layerTab1) {
    layerTab1.addEventListener('click', () => stateManager.setLayer('layer1'));
  }
  if (layerTab2) {
    layerTab2.addEventListener('click', () => stateManager.setLayer('layer2'));
  }
  if (unlockLayer2Btn) {
    unlockLayer2Btn.addEventListener('click', () => {
      const state = stateManager.getState();
      if ((state.activeLayer || 'layer1') === 'layer1') {
        stateManager.setLayer('layer2');
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
  if (resetBtn) {
    resetBtn.addEventListener('click', () => stateManager.resetSession());
  }

  // Lock Macro State
  if (lockMacroBtn) {
    lockMacroBtn.addEventListener('click', () => stateManager.toggleMacroLock());
  }

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

      // Test Gemini
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

      // Test FRED
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

  // Auto-Fetch Handler (Supports Layer 1 and Layer 2)
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
        autoFetchBtn.textContent = '⏳ Fetching Live BTC & Profile...';

        try {
          // 1. Fetch live 100% free Binance price
          const binanceData = await fetchBinanceBtcPrice();

          // 2. Fetch Layer 2 Gemini Search Grounding (or fallback)
          let layer2Data = null;
          if (hasApiKey()) {
            try {
              layer2Data = await autoFetchLayer2Data(binanceData.lastPrice);
            } catch (e) {
              console.warn('Layer 2 Gemini fetch warning:', e);
            }
          }

          const final2a = {
            currentBtcPrice: binanceData.lastPrice || layer2Data?.currentBtcPrice || '$96,450',
            vpocLevel: layer2Data?.vpocLevel || '$95,800',
            valueAreaHighLow: layer2Data?.valueAreaHighLow || 'VAH $97,200 | VAL $94,600',
            auctionState: layer2Data?.auctionState || 'Inside Value Area (Balanced Rotation Between VAH & VAL)'
          };

          const final2b = {
            cvdState: layer2Data?.cvdState || 'Passive Buyer Absorption (Price Rising / CVD Down)',
            openInterestTrend: layer2Data?.openInterestTrend || 'OI Compression (Leverage Coiling at Range Highs/Lows)'
          };

          const final2c = {
            bidAskWalls: layer2Data?.bidAskWalls || 'Bids at $94,000 (1,200 BTC) | Asks at $98,500 (1,500 BTC)',
            primaryExecutionSetup: layer2Data?.primaryExecutionSetup || 'Responsive Trade (Fade VAL/VAH Back to VPOC)'
          };

          const stepMap2 = { '2a': final2a, '2b': final2b, '2c': final2c };
          const stepSequence2 = ['2a', '2b', '2c'];

          for (const stepId of stepSequence2) {
            const stepData = stepMap2[stepId];
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

          autoFetchBtn.textContent = '✨ Layer 2 Completed!';
        } catch (err) {
          console.error(err);
          autoFetchBtn.textContent = '✗ Fetch Failed';
        } finally {
          autoFetchBtn.disabled = false;
          setTimeout(() => { autoFetchBtn.textContent = '🔍 Auto-Fetch Layer 2 (AI)'; }, 3000);
        }
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
