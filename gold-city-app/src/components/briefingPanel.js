/* ==========================================================================
   LIVE ASSEMBLING DUAL NARRATIVE BRIEFING PANEL COMPONENT
   ========================================================================== */

export function renderBriefingPanel(state) {
  const storyContainer = document.getElementById('tab-story-content');
  const btcContainer = document.getElementById('tab-btc-content');
  const badgeElement = document.getElementById('macro-status-badge');
  const briefingTitle = document.getElementById('briefing-card-title');

  if (!storyContainer || !btcContainer) return;

  const activeLayer = state.activeLayer || 'layer1';
  const prefix = activeLayer === 'layer2' ? '2' : '1';

  if (briefingTitle) {
    briefingTitle.textContent = activeLayer === 'layer2' 
      ? 'MASTER LAYER 2 SPATIAL AUCTION BRIEFING' 
      : 'MASTER LAYER 1 CLIMATE BRIEFING';
  }

  const storyOutputs = state.narrativeOutputs.story;
  const btcOutputs = state.narrativeOutputs.btc;

  const completedKeys = Object.keys(storyOutputs).filter(k => k.startsWith(prefix));
  const validKeys = completedKeys.filter(k => storyOutputs[k] && storyOutputs[k].trim() !== '');

  if (activeLayer === 'layer2') {
    // ---- Layer 2: Final Bias Block first, then per-tier readings ----
    const bias = state.layer2DirectionalBias || '';
    const finalNarrative = state.layer2FinalNarrative || '';

    const biasColor = bias.includes('BULLISH') ? 'var(--emerald-primary)' :
                      bias.includes('BEARISH') ? '#f04' :
                      'var(--gold-primary)';

    const tierLabels = { '2a': 'TIER 1 — WEEKLY VP (STRATEGIC DISTRICT)', '2b': 'TIER 2 — DAILY VP (OPERATIONAL CAMPAIGN)', '2c': 'TIER 3 — 4H VP (INTRADAY HIGHWAYS)' };

    if (validKeys.length === 0 && !bias) {
      storyContainer.innerHTML = '<p class="placeholder-text">Upload Weekly, Daily, and 4H Volume Profile screenshots, then click "Analyze 3 Profiles" to generate your SVAF-guided directional bias narrative.</p>';
      btcContainer.innerHTML = '<p class="placeholder-text">SVAF Tier 1 (Weekly), Tier 2 (Daily), and Tier 3 (4H) institutional readings will appear here after analysis.</p>';
    } else {
      // Story Tab: Final Bias conclusion + per-tier Gold City narratives
      const finalBiasBlock = bias ? `
        <div class="narrative-paragraph" style="border-left: 3px solid ${biasColor}; background: rgba(255,255,255,0.03); padding: 12px 14px; margin-bottom: 16px;">
          <strong style="color:${biasColor}; font-size:12px; display:block; margin-bottom:6px; letter-spacing:1px;">◉ SVAF DIRECTIONAL BIAS — ${bias}</strong>
          ${finalNarrative || 'Analysis complete. See tier-by-tier readings below.'}
        </div>` : '';

      const tierStoryBlocks = validKeys.map(key => {
        const tierLabel = tierLabels[key] || `TIER ${key.toUpperCase()}`;
        return `<div class="narrative-paragraph">
          <strong style="color:var(--gold-primary); font-size:11px; display:block; margin-bottom:4px;">[${tierLabel}]</strong>
          ${storyOutputs[key]}
        </div>`;
      }).join('');

      storyContainer.innerHTML = finalBiasBlock + tierStoryBlocks;

      // BTC Tab: Final Bias conclusion + per-tier institutional readings
      const btcFinalBlock = bias ? `
        <div class="narrative-paragraph" style="border-left: 3px solid ${biasColor}; background: rgba(255,255,255,0.03); padding: 12px 14px; margin-bottom: 16px;">
          <strong style="color:${biasColor}; font-size:12px; display:block; margin-bottom:6px; letter-spacing:1px;">◉ SVAF DIRECTIONAL VERDICT — ${bias}</strong>
          ${finalNarrative || 'See institutional tier readings below.'}
        </div>` : '';

      const tierBtcBlocks = validKeys.map(key => {
        const tierLabel = tierLabels[key] || `TIER ${key.toUpperCase()}`;
        return `<div class="narrative-paragraph">
          <strong style="color:var(--emerald-primary); font-size:11px; display:block; margin-bottom:4px;">[${tierLabel}]</strong>
          ${btcOutputs[key] || storyOutputs[key]}
        </div>`;
      }).join('');

      btcContainer.innerHTML = btcFinalBlock + tierBtcBlocks;
    }

  } else {
    // ---- Layer 1: Existing behavior unchanged ----
    if (validKeys.length === 0) {
      storyContainer.innerHTML = '<p class="placeholder-text">Complete Sub-Step 1A (Grace: M2) to begin assembling the Gold City climate narrative...</p>';
      btcContainer.innerHTML = '<p class="placeholder-text">Complete Sub-Step 1A to begin assembling institutional BTC market metrics...</p>';
    } else {
      storyContainer.innerHTML = validKeys.map(key => `
        <div class="narrative-paragraph">
          <strong style="color:var(--gold-primary); font-size:11px; display:block; margin-bottom:4px;">[SUB-STEP ${key.toUpperCase()}]</strong>
          ${storyOutputs[key]}
        </div>
      `).join('');

      btcContainer.innerHTML = validKeys.map(key => `
        <div class="narrative-paragraph">
          <strong style="color:var(--emerald-primary); font-size:11px; display:block; margin-bottom:4px;">[INSTITUTIONAL METRIC ${key.toUpperCase()}]</strong>
          ${btcOutputs[key] || storyOutputs[key]}
        </div>
      `).join('');
    }
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
    } else {
      badgeElement.textContent = state.layer2DirectionalBias || 'AUCTION ROTATION IN VALUE AREA';
      badgeElement.className = 'badge badge-emerald';
    }
  }

  // Enable/Disable Unlock Layer Button
  const unlockBtn = document.getElementById('unlock-layer-2-btn');
  if (unlockBtn) {
    if (activeLayer === 'layer1') {
      const l1Done = ['1a', '1b', '1c', '1d', '1e', '1f'].every(k => state.completedSteps.includes(k));
      if (l1Done) {
        unlockBtn.disabled = false;
        unlockBtn.innerHTML = '✨ Layer 1 Complete! Click to Proceed to Layer 2 (Spatial Auction Mapping) ➔';
        unlockBtn.className = 'btn btn-gold btn-full';
      } else {
        unlockBtn.disabled = true;
        const count = ['1a', '1b', '1c', '1d', '1e', '1f'].filter(k => state.completedSteps.includes(k)).length;
        unlockBtn.innerHTML = `🔒 Complete All 6 Steps (${count}/6) to Unlock Layer 2`;
        unlockBtn.className = 'btn btn-secondary btn-full';
      }
    } else {
      const l2Done = ['2a', '2b', '2c'].every(k => state.completedSteps.includes(k));
      if (l2Done) {
        unlockBtn.disabled = false;
        unlockBtn.innerHTML = '✨ Layer 2 Complete — Spatial Auction & Directional Bias Mapped!';
        unlockBtn.className = 'btn btn-gold btn-full';
      } else {
        unlockBtn.disabled = true;
        const count = ['2a', '2b', '2c'].filter(k => state.completedSteps.includes(k)).length;
        unlockBtn.innerHTML = `🔒 Complete All 3 Profile Dropzones (${count}/3) to Finalize Mapping`;
        unlockBtn.className = 'btn btn-secondary btn-full';
      }
    }
  }
}
