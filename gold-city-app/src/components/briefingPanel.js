/* ==========================================================================
   LIVE ASSEMBLING DUAL NARRATIVE BRIEFING PANEL COMPONENT
   ========================================================================== */

export function renderBriefingPanel(state) {
  const storyContainer = document.getElementById('tab-story-content');
  const btcContainer = document.getElementById('tab-btc-content');
  const badgeElement = document.getElementById('macro-status-badge');

  if (!storyContainer || !btcContainer) return;

  const activeLayer = state.activeLayer || 'layer1';
  const prefix = activeLayer === 'layer2' ? '2' : '1';

  const storyOutputs = state.narrativeOutputs.story;
  const btcOutputs = state.narrativeOutputs.btc;

  const completedKeys = Object.keys(storyOutputs).filter(k => k.startsWith(prefix));
  const validKeys = completedKeys.filter(k => storyOutputs[k] && storyOutputs[k].trim() !== '');

  if (validKeys.length === 0) {
    if (activeLayer === 'layer1') {
      storyContainer.innerHTML = '<p class="placeholder-text">Complete Sub-Step 1A (Grace: M2) to begin assembling the Gold City climate narrative...</p>';
      btcContainer.innerHTML = '<p class="placeholder-text">Complete Sub-Step 1A to begin assembling institutional BTC market metrics...</p>';
    } else {
      storyContainer.innerHTML = '<p class="placeholder-text">Complete Sub-Step 2A (Frank: Volume Profile) to map Frank\'s Gold City market district...</p>';
      btcContainer.innerHTML = '<p class="placeholder-text">Complete Sub-Step 2A to calculate VPOC, VAH, VAL, and order flow metrics...</p>';
    }
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
    if (activeLayer === 'layer1') {
      badgeElement.textContent = state.macroClimateStatus;
      if (state.macroClimateStatus.includes('EXPANSION')) {
        badgeElement.className = 'badge badge-emerald';
      } else if (state.macroClimateStatus.includes('CONTRACTING')) {
        badgeElement.className = 'badge badge-gold';
      } else {
        badgeElement.className = 'badge badge-neutral';
      }
    } else if (activeLayer === 'layer2') {
      badgeElement.textContent = state.layer2DirectionalBias || 'BULLISH VALUE MIGRATION INITIATIVE';
      badgeElement.className = 'badge badge-emerald';
    } else {
      badgeElement.textContent = 'TRADER EXECUTION & RISK READY';
      badgeElement.className = 'badge badge-gold';
    }
  }

  // Enable/Disable Unlock Layer Button
  const unlockBtn = document.getElementById('unlock-layer-2-btn');
  if (unlockBtn) {
    if (activeLayer === 'layer1') {
      const l1Done = ['1a', '1b', '1c', '1d', '1e', '1f'].every(k => state.completedSteps.includes(k));
      if (l1Done) {
        unlockBtn.disabled = false;
        unlockBtn.innerHTML = '✨ Layer 1 Complete! Click to Proceed to Layer 2 (Auction & DOM) ➔';
        unlockBtn.className = 'btn btn-gold btn-full';
      } else {
        unlockBtn.disabled = true;
        const count = ['1a', '1b', '1c', '1d', '1e', '1f'].filter(k => state.completedSteps.includes(k)).length;
        unlockBtn.innerHTML = `🔒 Complete All 6 Steps (${count}/6) to Unlock Layer 2`;
        unlockBtn.className = 'btn btn-secondary btn-full';
      }
    } else if (activeLayer === 'layer2') {
      const l2Done = ['2a', '2b', '2c'].every(k => state.completedSteps.includes(k));
      if (l2Done) {
        unlockBtn.disabled = false;
        unlockBtn.innerHTML = '⚡ Layer 2 Complete! Click to Open Layer 3 Execution Calculator ➔';
        unlockBtn.className = 'btn btn-gold btn-full';
      } else {
        unlockBtn.disabled = true;
        const count = ['2a', '2b', '2c'].filter(k => state.completedSteps.includes(k)).length;
        unlockBtn.innerHTML = `🔒 Complete All 3 Profile Dropzones (${count}/3) to Unlock Execution Plan`;
        unlockBtn.className = 'btn btn-secondary btn-full';
      }
    } else {
      unlockBtn.disabled = false;
      unlockBtn.innerHTML = '✨ Position Sizing & Execution Matrix Ready';
      unlockBtn.className = 'btn btn-gold btn-full';
    }
  }
}
