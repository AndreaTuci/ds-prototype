// Theme Switcher
// Gestisce il cambio di tema tra: soft (pastello), brutal (neo-brutalista), neutral (base)

const THEMES = {
  SOFT: 'theme-soft',
  BRUTAL: 'theme-brutal',
  NEUTRAL: 'theme-neutral'
};

const STORAGE_KEY = 'ds-theme';

// Applica il tema al body
function applyTheme(theme) {
  document.body.classList.remove(THEMES.SOFT, THEMES.BRUTAL, THEMES.NEUTRAL);
  if (theme && theme !== THEMES.NEUTRAL) {
    document.body.classList.add(theme);
  }
  localStorage.setItem(STORAGE_KEY, theme);
}

// Recupera il tema salvato
function getSavedTheme() {
  return localStorage.getItem(STORAGE_KEY) || THEMES.NEUTRAL;
}

// Render del theme switcher
function renderThemeSwitcher() {
  const switcher = document.createElement('div');
  switcher.className = 'theme-switcher';
  switcher.setAttribute('aria-label', 'Selettore tema');
  
  switcher.innerHTML = `
    <button class="theme-dot theme-dot--soft" data-theme="${THEMES.SOFT}" title="Tema Soft"></button>
    <button class="theme-dot theme-dot--brutal" data-theme="${THEMES.BRUTAL}" title="Tema Brutal"></button>
    <button class="theme-dot theme-dot--neutral" data-theme="${THEMES.NEUTRAL}" title="Tema Neutral"></button>
  `;
  
  document.body.appendChild(switcher);
  
  // Event listeners
  switcher.querySelectorAll('.theme-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const theme = dot.dataset.theme;
      applyTheme(theme);
      updateActiveDot(theme);
    });
  });
  
  // Imposta lo stato attivo iniziale
  updateActiveDot(getSavedTheme());
}

// Aggiorna lo stato attivo del pallino
function updateActiveDot(theme) {
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.toggle('is-active', dot.dataset.theme === theme);
  });
}

// Inizializza il theme switcher
function initThemeSwitcher() {
  // Applica il tema salvato
  const savedTheme = getSavedTheme();
  applyTheme(savedTheme);
  
  // Render dei controlli
  renderThemeSwitcher();
}

// Auto-init quando il DOM è pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeSwitcher);
} else {
  initThemeSwitcher();
}
