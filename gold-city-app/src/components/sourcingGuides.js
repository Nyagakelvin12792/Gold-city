/* ==========================================================================
   SOURCING GUIDES & DIRECT DATA TAB COMPONENT
   ========================================================================== */

export function renderSourceTabs(sourceTabs) {
  if (!sourceTabs || !sourceTabs.length) return '';

  const tabsHtml = sourceTabs.map(tab => `
    <a href="${tab.url}" target="_blank" rel="noopener noreferrer" class="source-tab-link" title="Open ${tab.name} in a new tab">
      <span>🌐</span> ${tab.name} ↗
    </a>
  `).join('');

  return `
    <div class="source-tabs">
      ${tabsHtml}
    </div>
  `;
}

export function renderTooltipCard(tooltipText) {
  if (!tooltipText) return '';

  return `
    <div class="tooltip-card">
      <strong>💡 Where to Find & What to Look For:</strong> ${tooltipText}
    </div>
  `;
}
