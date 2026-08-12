/* ==========================================================================
   STATE MANAGEMENT & ACCIDENTAL DATA LOSS PREVENTION (LOCALSTORAGE AUTO-SAVE)
   ========================================================================== */

const STORAGE_KEY = 'gold_city_layer1_state_v1';

const initialState = {
  activeLayer: 'layer1', // 'layer1', 'layer2'
  currentStepId: '1a',   // 1a..1f, 2a..2c
  completedSteps: [],
  isMacroLocked: false,
  theme: 'dark',
  subStepsData: {
    '1a': { m2Trend: '', walclState: '', fedRate: '' },
    '1b': { netLiquidityValue: '', tgaState: '', rrpState: '', qraFocus: '' },
    '1c': { yield10Y: '', dxyLevel: '', dxyTrend: '', catalysts: [] },
    '1d': { minerReserveState: '', minerInflowVolume: '' },
    '1e': { lthRatio: '', cddActivity: '', hodlWaveTrend: '' },
    '1f': { netflow7d: '', exchangeReserveLevel: '', sthSoprValue: '' },
    '2a': { weeklyVpoc: '', weeklyValueAreaRange: '' },
    '2b': { dailyVpoc: '', dailyAuctionState: '' },
    '2c': { lvnHighways: '', poorHighsLows: '' }
  },
  deribitData: {},
  layer2DirectionalBias: '',
  narrativeOutputs: {
    story: {},
    btc: {}
  },
  macroClimateStatus: 'AWAITING LAYER 1 INPUTS',
  spatialMapStatus: 'AWAITING LAYER 2 INPUTS'
};

class StateManager {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
  }

  loadState() {
    const validStepIds = ['1a', '1b', '1c', '1d', '1e', '1f', '2a', '2b', '2c'];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        
        // Filter completedSteps to only valid active steps
        const cleanCompleted = Array.isArray(parsed.completedSteps)
          ? parsed.completedSteps.filter(id => validStepIds.includes(id))
          : [];

        // Clean narrative outputs
        const cleanStory = {};
        const cleanBtc = {};
        if (parsed.narrativeOutputs) {
          if (parsed.narrativeOutputs.story) {
            Object.keys(parsed.narrativeOutputs.story).forEach(k => {
              if (validStepIds.includes(k)) cleanStory[k] = parsed.narrativeOutputs.story[k];
            });
          }
          if (parsed.narrativeOutputs.btc) {
            Object.keys(parsed.narrativeOutputs.btc).forEach(k => {
              if (validStepIds.includes(k)) cleanBtc[k] = parsed.narrativeOutputs.btc[k];
            });
          }
        }

        // Clean subStepsData
        const cleanSubSteps = { ...initialState.subStepsData };
        if (parsed.subStepsData) {
          validStepIds.forEach(k => {
            if (parsed.subStepsData[k]) {
              cleanSubSteps[k] = { ...cleanSubSteps[k], ...parsed.subStepsData[k] };
            }
          });
        }

        const activeLayer = (parsed.activeLayer === 'layer2') ? 'layer2' : 'layer1';
        let currentStepId = parsed.currentStepId || '1a';
        if (!validStepIds.includes(currentStepId)) currentStepId = activeLayer === 'layer2' ? '2a' : '1a';

        return {
          ...initialState,
          ...parsed,
          activeLayer,
          currentStepId,
          completedSteps: cleanCompleted,
          subStepsData: cleanSubSteps,
          narrativeOutputs: { story: cleanStory, btc: cleanBtc }
        };
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

  setLayer(layerId) {
    this.state.activeLayer = layerId;
    if (layerId === 'layer2' && !this.state.currentStepId.startsWith('2')) {
      this.state.currentStepId = '2a';
    } else if (layerId === 'layer1' && !this.state.currentStepId.startsWith('1')) {
      this.state.currentStepId = '1a';
    } else if (layerId === 'layer3' && !this.state.currentStepId.startsWith('3')) {
      this.state.currentStepId = '3a';
    }
    this.saveState();
    this.notify();
  }

  updateSubStepData(stepId, data) {
    this.state.subStepsData[stepId] = { ...this.state.subStepsData[stepId], ...data };
    this.saveState();
    this.notify();
  }

  setDeribitData(data) {
    this.state.deribitData = { ...this.state.deribitData, ...data };
    this.saveState();
    this.notify();
  }

  completeStep(stepId, storySnippet, btcSnippet) {
    if (!this.state.completedSteps.includes(stepId)) {
      this.state.completedSteps.push(stepId);
    }
    
    if (storySnippet) this.state.narrativeOutputs.story[stepId] = storySnippet;
    if (btcSnippet) this.state.narrativeOutputs.btc[stepId] = btcSnippet;

    // Determine next step within layer
    const layer1Sequence = ['1a', '1b', '1c', '1d', '1e', '1f'];
    const layer2Sequence = ['2a', '2b', '2c'];

    if (layer1Sequence.includes(stepId)) {
      const idx = layer1Sequence.indexOf(stepId);
      if (idx !== -1 && idx < layer1Sequence.length - 1) {
        this.state.currentStepId = layer1Sequence[idx + 1];
      }
    } else if (layer2Sequence.includes(stepId)) {
      const idx = layer2Sequence.indexOf(stepId);
      if (idx !== -1 && idx < layer2Sequence.length - 1) {
        this.state.currentStepId = layer2Sequence[idx + 1];
      }
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
    const layer1Sequence = ['1a', '1b', '1c', '1d', '1e', '1f'];
    const layer2Sequence = ['2a', '2b', '2c'];

    const stepSequence = layer1Sequence.includes(stepId) ? layer1Sequence : layer2Sequence;
    const idx = stepSequence.indexOf(stepId);
    if (idx !== -1) {
      this.state.completedSteps = this.state.completedSteps.filter(id => {
        return !stepSequence.includes(id) || stepSequence.indexOf(id) < idx;
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
