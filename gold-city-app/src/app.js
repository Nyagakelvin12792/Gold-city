/* ==========================================================================
   GOLD CITY AI TERMINAL — SPA INITIALIZER & CONTROLLER
   ========================================================================== */

import { stateManager } from './state.js';
import { renderWizard } from './components/wizard.js';
import { renderBriefingPanel } from './components/briefingPanel.js';
import { autoFetchMacroData, getApiKey, setApiKey, hasApiKey } from './ai/gemini.js';

document.addEventListener('DOMContentLoaded', () => {
  const wizardContainer = document.getElementById('accordion-cards');

  // Initial Render
  function renderAll() {
    const state = stateManager.getState();
    document.documentElement.setAttribute('data-theme', state.theme);
    renderWizard(wizardContainer, state, stateManager);
    renderBriefingPanel(state);
    updateApiKeyBtnState();
    updateLockMacroBtnState();
  }

  // Subscribe state changes to re-render UI
  stateManager.subscribe(renderAll);
  renderAll();

  /* ---------- Header: Theme Toggle ---------- */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentState = stateManager.getState();
      const newTheme = currentState.theme === 'dark' ? 'light' : 'dark';
      currentState.theme = newTheme;
      themeToggleBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
      stateManager.saveState();
      stateManager.notify();
    });
  }

  /* ---------- Header: Reset Session ---------- */
  const resetBtn = document.getElementById('reset-session-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      stateManager.resetSession();
    });
  }

  /* ---------- Header: Lock Macro State ---------- */
  const lockMacroBtn = document.getElementById('lock-macro-btn');
  function updateLockMacroBtnState() {
    if (!lockMacroBtn) return;
    const isLocked = stateManager.getState().isMacroLocked;
    lockMacroBtn.textContent = isLocked ? '🔒 Macro Locked' : '🔓 Lock Macro';
    lockMacroBtn.className = isLocked ? 'btn btn-gold' : 'btn btn-secondary';
  }
  if (lockMacroBtn) {
    lockMacroBtn.addEventListener('click', () => {
      stateManager.toggleMacroLock();
    });
  }

  /* ---------- Header: API Key Button & Modal ---------- */
  const apiKeyBtn = document.getElementById('api-key-btn');
  const apiKeyModal = document.getElementById('api-key-modal');
  const apiKeyCloseBtn = document.getElementById('api-key-modal-close');
  const apiKeyInput = document.getElementById('api-key-input');
  const apiKeySaveBtn = document.getElementById('api-key-save-btn');
  const apiKeyTestBtn = document.getElementById('api-key-test-btn');
  const apiKeyStatus = document.getElementById('api-key-status');

  function updateApiKeyBtnState() {
    if (!apiKeyBtn) return;
    if (hasApiKey()) {
      apiKeyBtn.textContent = '🔑 AI Connected';
      apiKeyBtn.className = 'btn btn-gold';
    } else {
      apiKeyBtn.textContent = '🔑 API Key';
      apiKeyBtn.className = 'btn btn-secondary';
    }
  }

  function openModal() {
    if (apiKeyModal) {
      apiKeyModal.style.display = 'flex';
      if (apiKeyInput) {
        apiKeyInput.value = getApiKey();
        apiKeyInput.focus();
      }
      if (apiKeyStatus) {
        apiKeyStatus.textContent = '';
        apiKeyStatus.className = 'api-key-status';
      }
    }
  }

  function closeModal() {
    if (apiKeyModal) {
      apiKeyModal.style.display = 'none';
    }
  }

  if (apiKeyBtn) apiKeyBtn.addEventListener('click', openModal);
  if (apiKeyCloseBtn) apiKeyCloseBtn.addEventListener('click', closeModal);
  if (apiKeyModal) {
    apiKeyModal.addEventListener('click', (e) => {
      if (e.target === apiKeyModal) closeModal();
    });
  }

  if (apiKeySaveBtn) {
    apiKeySaveBtn.addEventListener('click', () => {
      const key = apiKeyInput ? apiKeyInput.value.trim() : '';
      if (key.length < 10) {
        apiKeyStatus.textContent = '✗ Key too short. Paste your full Gemini API key.';
        apiKeyStatus.className = 'api-key-status error';
        return;
      }
      setApiKey(key);
      apiKeyStatus.textContent = '✓ API Key saved to localStorage.';
      apiKeyStatus.className = 'api-key-status success';
      updateApiKeyBtnState();
      setTimeout(closeModal, 1200);
    });
  }

  if (apiKeyTestBtn) {
    apiKeyTestBtn.addEventListener('click', async () => {
      const key = apiKeyInput ? apiKeyInput.value.trim() : '';
      if (key.length < 10) {
        apiKeyStatus.textContent = '✗ Enter a valid key first.';
        apiKeyStatus.className = 'api-key-status error';
        return;
      }

      apiKeyStatus.textContent = '⏳ Testing connection to Gemini API...';
      apiKeyStatus.className = 'api-key-status loading';
      apiKeyTestBtn.disabled = true;

      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: 'Respond with exactly: GOLD CITY CONNECTED' }] }]
          })
        });

        if (res.ok) {
          const data = await res.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
          apiKeyStatus.textContent = `✓ Connection successful! Model responded: "${text.trim().substring(0, 50)}"`;
          apiKeyStatus.className = 'api-key-status success';
        } else {
          const errText = await res.text();
          apiKeyStatus.textContent = `✗ API Error ${res.status}: ${errText.substring(0, 120)}`;
          apiKeyStatus.className = 'api-key-status error';
        }
      } catch (err) {
        apiKeyStatus.textContent = `✗ Network error: ${err.message}`;
        apiKeyStatus.className = 'api-key-status error';
      } finally {
        apiKeyTestBtn.disabled = false;
      }
    });
  }

  /* ---------- Header: Auto-Fetch Macro Data via AI ---------- */
  const autoFetchBtn = document.getElementById('auto-fetch-btn');
  if (autoFetchBtn) {
    autoFetchBtn.addEventListener('click', async () => {
      if (!hasApiKey()) {
        openModal();
        return;
      }

      autoFetchBtn.disabled = true;
      autoFetchBtn.textContent = '⏳ AI Researching...';

      try {
        const macroData = await autoFetchMacroData();

        stateManager.updateSubStepData('1a', {
          m2Trend: macroData.m2Trend,
          walclState: macroData.walclState,
          fedRate: macroData.fedRate
        });

        stateManager.updateSubStepData('1b', {
          netLiquidityValue: macroData.netLiquidityValue,
          tgaState: macroData.tgaState,
          rrpState: macroData.rrpState,
          qraFocus: macroData.qraFocus
        });

        stateManager.updateSubStepData('1c', {
          dxyLevel: macroData.dxyLevel,
          dxyTrend: macroData.dxyTrend,
          yield10Y: macroData.yield10Y
        });

        autoFetchBtn.textContent = '✨ AI Auto-Fetch Complete';
        setTimeout(() => { autoFetchBtn.textContent = '🔍 Auto-Fetch Macro (AI)'; }, 3000);
      } catch (err) {
        autoFetchBtn.textContent = '✗ Fetch Failed';
        setTimeout(() => { autoFetchBtn.textContent = '🔍 Auto-Fetch Macro (AI)'; }, 3000);
      } finally {
        autoFetchBtn.disabled = false;
      }
    });
  }

  /* ---------- Briefing Tabs Toggle ---------- */
  const tabStoryBtn = document.getElementById('tab-story-btn');
  const tabBtcBtn = document.getElementById('tab-btc-btn');
  const tabStoryContent = document.getElementById('tab-story-content');
  const tabBtcContent = document.getElementById('tab-btc-content');

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
