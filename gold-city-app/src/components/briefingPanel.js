/* ==========================================================================
   LIVE ASSEMBLING DUAL NARRATIVE BRIEFING PANEL COMPONENT
   ========================================================================== */

export function renderBriefingPanel(state) {
  const storyContainer = document.getElementById('tab-story-content');
  const btcContainer = document.getElementById('tab-btc-content');
  const badgeElement = document.getElementById('macro-status-badge');

  if (!storyContainer || !btcContainer) return;

  const storyOutputs = state.narrativeOutputs.story;
  const btcOutputs = state.narrativeOutputs.btc;

  const completedKeys = Object.keys(storyOutputs);
  const validKeys = completedKeys.filter(k => storyOutputs[k] && storyOutputs[k].trim() !== '');

  if (validKeys.length === 0) {
    storyContainer.innerHTML = '<p class="placeholder-text">Complete Sub-Step 1A (Grace: M2) to begin assembling the Gold City climate narrative...</p>';
    btcContainer.innerHTML = '<p class="placeholder-text">Complete Sub-Step 1A to begin assembling institutional BTC market metrics...</p>';
  } else {
    // Render Story snippets with Step Badges
    storyContainer.innerHTML = validKeys.map(key => `
      <div class="narrative-paragraph">
        <strong style="color:var(--gold-primary); font-size:11px; display:block; margin-bottom:4px;">[SUB-STEP ${key.toUpperCase()}]</strong>
        ${storyOutputs[key]}
      </div>
    `).join('');

    // Render BTC Market snippets with Step Badges
    btcContainer.innerHTML = validKeys.map(key => `
      <div class="narrative-paragraph">
        <strong style="color:var(--emerald-primary); font-size:11px; display:block; margin-bottom:4px;">[INSTITUTIONAL METRIC ${key.toUpperCase()}]</strong>
        ${btcOutputs[key] || storyOutputs[key]}
      </div>
    `).join('');
  }

  // Update Status Badge
  if (badgeElement) {
    badgeElement.textContent = state.macroClimateStatus;
    if (state.macroClimateStatus.includes('EXPANSION')) {
      badgeElement.className = 'badge badge-emerald';
    } else if (state.macroClimateStatus.includes('CONTRACTING')) {
      badgeElement.className = 'badge badge-gold';
    } else {
      badgeElement.className = 'badge badge-neutral';
    }
  }

  // Enable/Disable Unlock Layer 2 Button
  const unlockBtn = document.getElementById('unlock-layer-2-btn');
  if (unlockBtn) {
    if (state.completedSteps.length >= 6) {
      unlockBtn.disabled = false;
      unlockBtn.innerHTML = '✨ Layer 1 Complete! Click to Proceed to Layer 2 (Volume Profile) ➔';
      unlockBtn.className = 'btn btn-gold btn-full';
    } else {
      unlockBtn.disabled = true;
      unlockBtn.innerHTML = `🔒 Complete All 6 Steps (${state.completedSteps.length}/6) to Unlock Layer 2`;
      unlockBtn.className = 'btn btn-secondary btn-full';
    }
  }
}
