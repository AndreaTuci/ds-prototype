// Dati per l'header (comune a tutti i file)
const headerData = {
  brand: "DS Priority Guide",
  badge: "v0.0.1",
  links: [
    { text: "Home", href: "index.html" },
    { text: "ATF", href: "blocco_atf.html" },
    { text: "Hero", href: "blocco_hero.html" },
    { text: "Banner", href: "blocco_banner.html" },
    { text: "Card", href: "blocco_card.html" },
    { text: "Content", href: "blocco_content.html" },
    { text: "Docs", href: "docs.html" }
  ],
  variants: [
    { value: "header", label: "Standard" },
    { value: "header header--compact", label: "Compact" },
    { value: "header header--featured", label: "Featured" }
  ]
};

// Recupera variante salvata o usa default
function getHeaderVariant() {
  return localStorage.getItem('headerVariant') || 'header';
}

// Salva variante selezionata
function setHeaderVariant(variant) {
  localStorage.setItem('headerVariant', variant);
}

// Determina pagina attiva
function getActivePage() {
  const path = window.location.pathname;
  if (path.includes('blocco_atf')) return 'blocco_atf.html';
  if (path.includes('blocco_hero')) return 'blocco_hero.html';
  if (path.includes('blocco_banner')) return 'blocco_banner.html';
  if (path.includes('blocco_card')) return 'blocco_card.html';
  if (path.includes('docs')) return 'docs.html';
  if (path.includes('index') || path === '/' || path.endsWith('/')) return 'index.html';
  return '';
}

// Rendering dell'header
function renderHeader() {
  const currentVariant = getHeaderVariant();
  const activePage = getActivePage();
  
  const linksHtml = headerData.links.map(link => {
    const isActive = link.href === activePage ? 'active' : '';
    return `<li><a href="${link.href}" class="header__nav-link ${isActive}">${link.text}</a></li>`;
  }).join('');
  
  const variantsHtml = headerData.variants.map(variant => {
    const selected = variant.value === currentVariant ? 'selected' : '';
    return `<option value="${variant.value}" ${selected}>${variant.label}</option>`;
  }).join('');
  
  return `
    <header class="${currentVariant}">
      <div class="header__container">
        <a href="blocco_hero.html" class="header__brand">
          ${headerData.brand}
          <span class="header__badge">${headerData.badge}</span>
        </a>
        
        <nav class="header__nav">
          <ul class="header__nav-list">
            ${linksHtml}
          </ul>
        </nav>
        
        <div class="header__controls">
          <label class="header__variant-label" for="header-variant-select">Header:</label>
          <select id="header-variant-select" class="header__variant-select">
            ${variantsHtml}
          </select>
        </div>
      </div>
    </header>
  `;
}

// Inizializzazione header
function initHeader() {
  const headerContainer = document.getElementById('header-root');
  
  if (headerContainer) {
    headerContainer.innerHTML = renderHeader();
    
    // Gestisci cambio variante
    const select = document.getElementById('header-variant-select');
    if (select) {
      select.addEventListener('change', (e) => {
        const newVariant = e.target.value;
        setHeaderVariant(newVariant);
        
        // Re-render header
        headerContainer.innerHTML = renderHeader();
        
        // Ri-aggiungi listener (perché abbiamo ricreato il select)
        initHeader();
      });
    }
  }
}

// Auto-init quando il DOM è pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeader);
} else {
  initHeader();
}
