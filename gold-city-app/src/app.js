/* ==========================================================================
   GOLD CITY AI TERMINAL — SPA INITIALIZER & CONTROLLER
   ========================================================================== */

import { stateManager } from './state.js';
import { renderWizard } from './components/wizard.js';
import { renderBriefingPanel } from './components/briefingPanel.js';
import { autoFetchMacroData } from './ai/gemini.js';

document.addEventListener('DOMContentLoaded', () => {
  const wizardContainer = document.getElementById('accordion-cards');

  // Initial Render
  function renderAll() {
    const state = stateManager.getState();
    document.documentElement.setAttribute('data-theme', state.theme);
    renderWizard(wizardContainer, state, stateManager);
    renderBriefingPanel(state);
  }

  // Subscribe state changes to re-render UI
  stateManager.subscribe(renderAll);
  renderAll();

  // Header Button: Theme Toggle
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

  // Header Button: Reset Session
  const resetBtn = document.getElementById('reset-session-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      stateManager.resetSession();
    });
  }

  // Header Button: Lock Macro State
  const lockMacroBtn = document.getElementById('lock-macro-btn');
  if (lockMacroBtn) {
    lockMacroBtn.addEventListener('click', () => {
      stateManager.toggleMacroLock();
      const isLocked = stateManager.getState().isMacroLocked;
      lockMacroBtn.textContent = isLocked ? '🔒 Macro State Locked' : '🔓 Lock Macro State';
      lockMacroBtn.className = isLocked ? 'btn btn-gold' : 'btn btn-secondary';
    });
  }

  // Header Button: Auto-Fetch Macro Data via AI
  const autoFetchBtn = document.getElementById('auto-fetch-btn');
  if (autoFetchBtn) {
    autoFetchBtn.addEventListener('click', async () => {
      autoFetchBtn.disabled = true;
      autoFetchBtn.textContent = '⏳ AI Researching...';

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

      autoFetchBtn.disabled = false;
      autoFetchBtn.textContent = '✨ AI Auto-Fetch Complete';
      setTimeout(() => { autoFetchBtn.textContent = '🔍 Auto-Fetch Macro (AI)'; }, 3000);
    });
  }

  // Briefing Tabs Toggle
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
