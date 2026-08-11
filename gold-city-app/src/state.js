/* ==========================================================================
   STATE MANAGEMENT & ACCIDENTAL DATA LOSS PREVENTION (LOCALSTORAGE AUTO-SAVE)
   ========================================================================== */

const STORAGE_KEY = 'gold_city_layer1_state_v1';

const initialState = {
  currentStepId: '1a', // 1a, 1b, 1c, 1d, 1e, 1f
  completedSteps: [],  // ['1a', '1b', ...]
  isMacroLocked: false, // True if user locked Camera 6 macro climate for multi-day use
  theme: 'dark',
  subStepsData: {
    '1a': { m2Trend: '', walclState: '', fedRate: '' },
    '1b': { netLiquidityValue: '', tgaState: '', rrpState: '', qraFocus: '' },
    '1c': { yield10Y: '', dxyLevel: '', dxyTrend: '', catalysts: [] },
    '1d': { minerReserveState: '', minerInflowVolume: '' },
    '1e': { lthRatio: '', cddActivity: '', hodlWaveTrend: '' },
    '1f': { netflow7d: '', exchangeReserveLevel: '', sthSoprValue: '' }
  },
  narrativeOutputs: {
    story: {},
    btc: {}
  },
  macroClimateStatus: 'AWAITING LAYER 1 INPUTS' // EXPANSION TAILWIND | CONTRACTING HEADWIND | NEUTRAL
};

class StateManager {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load saved state from localStorage:', e);
    }
    return JSON.parse(JSON.stringify(initialState));
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save state to localStorage:', e);
    }
  }

  getState() {
    return this.state;
  }

  updateSubStepData(stepId, data) {
    this.state.subStepsData[stepId] = { ...this.state.subStepsData[stepId], ...data };
    this.saveState();
    this.notify();
  }

  completeStep(stepId, storySnippet, btcSnippet) {
    if (!this.state.completedSteps.includes(stepId)) {
      this.state.completedSteps.push(stepId);
    }
    
    this.state.narrativeOutputs.story[stepId] = storySnippet;
    this.state.narrativeOutputs.btc[stepId] = btcSnippet;

    // Determine next step
    const stepSequence = ['1a', '1b', '1c', '1d', '1e', '1f'];
    const idx = stepSequence.indexOf(stepId);
    if (idx !== -1 && idx < stepSequence.length - 1) {
      this.state.currentStepId = stepSequence[idx + 1];
    }

    this.updateMacroClimateStatus();
    this.saveState();
    this.notify();
  }

  toggleMacroLock() {
    this.state.isMacroLocked = !this.state.isMacroLocked;
    this.saveState();
    this.notify();
  }

  editStep(stepId) {
    this.state.currentStepId = stepId;
    const stepSequence = ['1a', '1b', '1c', '1d', '1e', '1f'];
    const idx = stepSequence.indexOf(stepId);
    if (idx !== -1) {
      this.state.completedSteps = this.state.completedSteps.filter(id => {
        return stepSequence.indexOf(id) < idx;
      });
      for (let i = idx; i < stepSequence.length; i++) {
        delete this.state.narrativeOutputs.story[stepSequence[i]];
        delete this.state.narrativeOutputs.btc[stepSequence[i]];
      }
    }
    this.updateMacroClimateStatus();
    this.saveState();
    this.notify();
  }

  updateMacroClimateStatus() {
    const data1a = this.state.subStepsData['1a'];
    const data1b = this.state.subStepsData['1b'];
    const data1c = this.state.subStepsData['1c'];

    if (data1a.m2Trend === 'Expanding (+GEX Tailwind)' && data1b.tgaState.includes('Draining TGA')) {
      this.state.macroClimateStatus = 'EXPANSION TAILWIND (HIGH WEIGHT)';
    } else if (data1a.m2Trend === 'Contracting (-GEX Headwind)' || data1c.dxyTrend === 'Uptrend (Dollar Shortage)') {
      this.state.macroClimateStatus = 'CONTRACTING HEADWIND';
    } else if (this.state.completedSteps.length >= 3) {
      this.state.macroClimateStatus = 'NEUTRAL / QUIET MACRO (LOW WEIGHT)';
    }
  }

  resetSession() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    this.state = JSON.parse(JSON.stringify(initialState));
    this.saveState();
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }
}

export const stateManager = new StateManager();
