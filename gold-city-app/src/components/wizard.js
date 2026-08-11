/* ==========================================================================
   SEQUENTIAL STEP-DOWN WIZARD COMPONENT
   ========================================================================== */

import { METRICS_SPEC } from '../data/metricsSpec.js';
import { renderSourceTabs, renderTooltipCard } from './sourcingGuides.js';
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
    const isLocked = !isCompleted && !isActive;

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
      // Active Expanded Card Render
      const fieldsHtml = spec.fields.map(field => {
        const value = currentData[field.id] || '';
        if (field.type === 'select') {
          const optionsHtml = field.options.map(opt => 
            `<option value="${opt}" ${value === opt ? 'selected' : ''}>${opt}</option>`
          ).join('');
          return `
            <div class="form-field">
              <label for="${field.id}">${field.label}</label>
              <select class="form-select" id="${field.id}" data-field-id="${field.id}">
                <option value="">-- Select ${field.label} --</option>
                ${optionsHtml}
              </select>
            </div>
          `;
        } else {
          return `
            <div class="form-field">
              <label for="${field.id}">${field.label}</label>
              <input type="text" class="form-input" id="${field.id}" data-field-id="${field.id}" placeholder="${field.placeholder || ''}" value="${value}">
            </div>
          `;
        }
      }).join('');

      return `
        <div class="step-card active" id="card-${stepId}">
          <div class="step-card-header">
            <div class="step-title-group">
              <span class="badge badge-gold">ACTIVE STEP</span>
              <h3>${spec.title}</h3>
            </div>
          </div>

          ${renderSourceTabs(spec.sourceTabs)}
          ${renderTooltipCard(spec.tooltip)}

          <div class="dual-input-grid">
            <!-- Left Column: Dropzone -->
            <div class="dropzone" id="dropzone-${stepId}" data-dropzone-step="${stepId}">
              <div class="dropzone-icon">📸</div>
              <div class="dropzone-text">
                <strong>Drag & Drop Chart Screenshot</strong><br>or click to upload (.png, .jpg)
              </div>
              <input type="file" id="file-input-${stepId}" accept="image/*" style="display: none;">
              ${currentData.image ? `<img src="${currentData.image}" class="image-preview" alt="Preview">` : ''}
            </div>

            <!-- Right Column: Fields & Action -->
            <div class="fields-group">
              ${fieldsHtml}
              <button class="btn btn-gold btn-full validate-btn" id="validate-btn-${stepId}" data-validate-step="${stepId}">
                ⚡ VALIDATE & UNLOCK NEXT STEP ➔
              </button>
            </div>
          </div>
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

  // Dropzone File Uploads
  const dropzone = container.querySelector(`#dropzone-${currentStepId}`);
  const fileInput = container.querySelector(`#file-input-${currentStepId}`);

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
        handleImageFile(e.dataTransfer.files[0], currentStepId, stateManager);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length) {
        handleImageFile(e.target.files[0], currentStepId, stateManager);
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
      const { storySnippet, btcSnippet } = await generateSubStepNarrative(currentStepId, currentData, currentData.image);

      stateManager.completeStep(currentStepId, storySnippet, btcSnippet);
    });
  }
}

function handleImageFile(file, stepId, stateManager) {
  const reader = new FileReader();
  reader.onload = (e) => {
    stateManager.updateSubStepData(stepId, { image: e.target.result });
  };
  reader.readAsDataURL(file);
}
