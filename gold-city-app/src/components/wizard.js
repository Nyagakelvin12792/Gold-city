/* ==========================================================================
   SEQUENTIAL STEP-DOWN WIZARD COMPONENT (PER-METRIC DROPZONES & DIRECT LINKS)
   ========================================================================== */

import { METRICS_SPEC } from '../data/metricsSpec.js';
import { renderTooltipCard } from './sourcingGuides.js';
import { generateSubStepNarrative } from '../ai/gemini.js';

export function renderWizard(container, state, stateManager) {
  if (!container) return;

  const stepSequence = ['1a', '1b', '1c', '1d', '1e', '1f'];
  
  // Render Progress Stepper Pills
  stepSequence.forEach(stepId => {
    const pill = document.getElementById(`pill-${stepId}`);
    if (pill) {
      if (state.completedSteps.includes(stepId)) {
        pill.className = 'step-pill completed';
        pill.innerHTML = `✓ ${stepId.toUpperCase()}`;
      } else if (stepId === state.currentStepId) {
        pill.className = 'step-pill active';
        pill.innerHTML = `▶ ${stepId.toUpperCase()}`;
      } else {
        pill.className = 'step-pill locked';
        pill.innerHTML = `🔒 ${stepId.toUpperCase()}`;
      }
    }
  });

  // Render Accordion Cards
  const cardsHtml = stepSequence.map(stepId => {
    const spec = METRICS_SPEC[stepId];
    const isCompleted = state.completedSteps.includes(stepId);
    const isActive = stepId === state.currentStepId;

    const currentData = state.subStepsData[stepId] || {};

    if (isCompleted) {
      // Completed Summary Chip Render
      return `
        <div class="step-card completed" id="card-${stepId}">
          <div class="step-card-header">
            <div class="step-title-group">
              <span class="badge badge-emerald">✓ COMPLETED</span>
              <h3>${spec.title}</h3>
            </div>
            <button class="btn btn-secondary btn-edit" data-edit-step="${stepId}">✏️ Edit</button>
          </div>
          <div class="completed-summary-content">
            <p class="summary-text">${state.narrativeOutputs.story[stepId] || 'Step verified.'}</p>
          </div>
        </div>
      `;
    }

    if (isActive) {
      // Active Expanded Card Render — Per-Metric Blocks
      const metricBlocksHtml = spec.metrics.map(metric => {
        const value = currentData[metric.id] || '';
        const metricImage = currentData[`image_${metric.id}`] || null;

        let inputControlHtml = '';
        if (metric.type === 'select') {
          const optionsHtml = metric.options.map(opt => 
            `<option value="${opt}" ${value === opt ? 'selected' : ''}>${opt}</option>`
          ).join('');
          inputControlHtml = `
            <div class="form-field">
              <label for="${metric.id}">${metric.label}</label>
              <select class="form-select" id="${metric.id}" data-field-id="${metric.id}">
                <option value="">-- Select ${metric.label} --</option>
                ${optionsHtml}
              </select>
            </div>
          `;
        } else {
          inputControlHtml = `
            <div class="form-field">
              <label for="${metric.id}">${metric.label}</label>
              <input type="text" class="form-input" id="${metric.id}" data-field-id="${metric.id}" placeholder="${metric.placeholder || ''}" value="${value}">
            </div>
          `;
        }

        return `
          <div class="metric-block-card">
            <div class="metric-header">
              <span class="metric-label-title">${metric.label}</span>
              <a href="${metric.tradingViewUrl}" target="_blank" rel="noopener noreferrer" class="source-tab-link" title="Open ${metric.sourceLabel} in new tab">
                🌐 ${metric.sourceLabel}
              </a>
            </div>

            <div class="dual-input-grid">
              <!-- Dedicated Dropzone for this Metric -->
              <div class="dropzone" id="dropzone-${stepId}-${metric.id}" data-metric-id="${metric.id}">
                <div class="dropzone-icon">📸</div>
                <div class="dropzone-text">
                  <strong>Drop ${metric.label} Chart Screenshot</strong><br>or click to upload (.png, .jpg)
                </div>
                <input type="file" id="file-input-${stepId}-${metric.id}" accept="image/*" style="display: none;">
                ${metricImage ? `<img src="${metricImage}" class="image-preview" alt="Preview">` : ''}
              </div>

              <!-- Value Selector / Input -->
              <div class="fields-group">
                ${inputControlHtml}
              </div>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="step-card active" id="card-${stepId}">
          <div class="step-card-header">
            <div class="step-title-group">
              <span class="badge badge-gold">ACTIVE STEP</span>
              <h3>${spec.title}</h3>
            </div>
          </div>

          ${renderTooltipCard(spec.tooltip)}

          <div class="metrics-list-container">
            ${metricBlocksHtml}
          </div>

          <button class="btn btn-gold btn-full validate-btn" id="validate-btn-${stepId}" data-validate-step="${stepId}">
            ⚡ VALIDATE & UNLOCK NEXT STEP ➔
          </button>
        </div>
      `;
    }

    // Locked Card Render
    return `
      <div class="step-card locked" id="card-${stepId}">
        <div class="step-card-header">
          <div class="step-title-group">
            <span class="badge badge-neutral">🔒 LOCKED</span>
            <h3>${spec.title}</h3>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = cardsHtml;

  // Attach Event Handlers
  attachWizardEventHandlers(container, stateManager);
}

function attachWizardEventHandlers(container, stateManager) {
  const state = stateManager.getState();
  const currentStepId = state.currentStepId;
  const stepSequence = ['1a', '1b', '1c', '1d', '1e', '1f'];
  const spec = METRICS_SPEC[currentStepId];

  // Edit Step Buttons & Completed Pills Click
  container.querySelectorAll('[data-edit-step]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const stepId = e.currentTarget.dataset.editStep;
      stateManager.editStep(stepId);
    });
  });

  // Allow clicking on completed stepper pills to edit
  stepSequence.forEach(stepId => {
    const pill = document.getElementById(`pill-${stepId}`);
    if (pill && state.completedSteps.includes(stepId)) {
      pill.style.cursor = 'pointer';
      pill.onclick = () => stateManager.editStep(stepId);
    }
  });

  // Per-Metric Dropzone File Uploads & Click Handlers
  if (spec && spec.metrics) {
    spec.metrics.forEach(metric => {
      const dropzone = container.querySelector(`#dropzone-${currentStepId}-${metric.id}`);
      const fileInput = container.querySelector(`#file-input-${currentStepId}-${metric.id}`);

      if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.classList.add('drag-over');
        });
        dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.classList.remove('drag-over');
          if (e.dataTransfer.files.length) {
            handleMetricImageFile(e.dataTransfer.files[0], currentStepId, metric.id, stateManager);
          }
        });

        fileInput.addEventListener('change', (e) => {
          if (e.target.files.length) {
            handleMetricImageFile(e.target.files[0], currentStepId, metric.id, stateManager);
          }
        });
      }
    });
  }

  // Field Inputs Change Handlers
  container.querySelectorAll('[data-field-id]').forEach(input => {
    input.addEventListener('change', (e) => {
      const fieldId = e.target.dataset.fieldId;
      const val = e.target.value;
      stateManager.updateSubStepData(currentStepId, { [fieldId]: val });
    });
  });

  // Validate & Complete Button
  const validateBtn = container.querySelector(`#validate-btn-${currentStepId}`);
  if (validateBtn) {
    validateBtn.addEventListener('click', async () => {
      validateBtn.disabled = true;
      validateBtn.textContent = '⏳ AI Engine Verifying...';

      const currentData = stateManager.getState().subStepsData[currentStepId];
      const { storySnippet, btcSnippet } = await generateSubStepNarrative(currentStepId, currentData);

      stateManager.completeStep(currentStepId, storySnippet, btcSnippet);
    });
  }
}

function handleMetricImageFile(file, stepId, metricId, stateManager) {
  const reader = new FileReader();
  reader.onload = (e) => {
    stateManager.updateSubStepData(stepId, { [`image_${metricId}`]: e.target.result });
  };
  reader.readAsDataURL(file);
}
