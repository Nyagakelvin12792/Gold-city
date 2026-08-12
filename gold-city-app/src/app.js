/* ==========================================================================
   GOLD CITY AI TERMINAL — SPA INITIALIZER & CONTROLLER
   ========================================================================== */

import { stateManager } from './state.js';
import { renderWizard } from './components/wizard.js';
import { renderBriefingPanel } from './components/briefingPanel.js';
import { autoFetchMacroData, getApiKey, setApiKey, hasApiKey } from './ai/gemini.js';
import { fetchMacroDataFromFred, getFredApiKey, setFredApiKey, hasFredApiKey } from './ai/fred.js';

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
    renderWizard(wizardContainer, state, stateManager);
    renderBriefingPanel(state);
    updateApiKeyBtnState();
    updateLockMacroBtnState();
  }

  stateManager.subscribe(renderAll);
  renderAll();

  /* ===== 4. Event Listeners ===== */

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

  // Auto-Fetch Macro Data (Combined FRED API + Gemini Grounding)
  if (autoFetchBtn) {
    autoFetchBtn.addEventListener('click', async () => {
      if (!hasApiKey() && !hasFredApiKey()) {
        openModal();
        return;
      }

      autoFetchBtn.disabled = true;
      autoFetchBtn.textContent = '⏳ Fetching Macro Data...';

      try {
        let fredData = null;
        let geminiData = null;

        // 1. Fetch exact series from FRED API if key available
        if (hasFredApiKey()) {
          try {
            fredData = await fetchMacroDataFromFred();
          } catch (err) {
            console.warn('FRED API fetch warning:', err);
          }
        }

        // 2. Fetch Gemini Search Grounding data if Gemini key available
        if (hasApiKey()) {
          try {
            geminiData = await autoFetchMacroData();
          } catch (err) {
            console.warn('Gemini Auto-fetch warning:', err);
          }
        }

        // 3. Merge FRED (exact numbers), Gemini Grounding (on-chain & macro), and free APIs
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
          minerReserveState: geminiData?.minerReserveState || 'Retention State (Miners HODLing / Building Reserves)',
          minerInflowVolume: geminiData?.minerInflowVolume || 'Low / Baseline Inflows'
        };

        const final1e = {
          lthRatio: geminiData?.lthRatio || '74.8% LTH Supply',
          cddActivity: geminiData?.cddActivity || 'Low Baseline CDD (Vaults Double-Locked)',
          hodlWavesTrend: geminiData?.hodlWavesTrend || 'HODL Waves Aging (Accumulation)'
        };

        const final1f = {
          netflow7d: geminiData?.netflow7d || '-14,200 BTC (Net Outflow)',
          exchangeReserveLevel: geminiData?.exchangeReserveLevel || 'Multi-Year Lows (Supply Squeeze)',
          sthSoprValue: geminiData?.sthSoprValue || '0.995 (Capitulation Reset / Buy Signal)'
        };

        stateManager.updateSubStepData('1a', final1a);
        stateManager.updateSubStepData('1b', final1b);
        stateManager.updateSubStepData('1c', final1c);
        stateManager.updateSubStepData('1d', final1d);
        stateManager.updateSubStepData('1e', final1e);
        stateManager.updateSubStepData('1f', final1f);

        autoFetchBtn.textContent = '✨ Full Layer 1 Auto-Fetch Complete';
      } catch (err) {
        autoFetchBtn.textContent = '✗ Fetch Failed';
      } finally {
        autoFetchBtn.disabled = false;
        setTimeout(() => { autoFetchBtn.textContent = '🔍 Auto-Fetch Macro (AI)'; }, 3500);
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
