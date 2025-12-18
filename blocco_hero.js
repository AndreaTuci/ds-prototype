// Schema dati per blocco Hero
const heroSchema = {
  variant: "string (hero | hero--compact | hero--reverse | hero--featured)",
  eyebrow: "string",
  title: "string",
  lead: "string",
  cta: {
    primary: { text: "string", href: "string" },
    secondary: { text: "string", href: "string" }
  },
  kpis: [
    { value: "string", label: "string" }
  ],
  media: "string",
  badge: "string (opzionale, solo featured)"
};

// Dati di esempio per le varianti Hero
const heroData = [
  {
    id: "hero-standard",
    variant: "hero",
    eyebrow: "Nuovo",
    title: "Prodotto X — creato per andare veloce",
    lead: "Soluzione semplice per risolvere un problema complesso. Inizia subito con la prova gratuita e scopri i vantaggi in pochi minuti.",
    cta: {
      primary: { text: "Provalo ora", href: "#" },
      secondary: { text: "Caratteristiche", href: "#" }
    },
    kpis: [
      { value: "99%", label: "Soddisfazione" },
      { value: "2k+", label: "Clienti" }
    ],
    media: "MEDIA"
  },
  {
    id: "hero-compact",
    variant: "hero hero--compact hero--reverse",
    eyebrow: "Promo",
    title: "Prodotto — versione compatta",
    lead: "Messaggio ridotto per catturare l'attenzione in layout denso.",
    cta: {
      primary: { text: "Scopri", href: "#" }
    },
    media: "IMG"
  },
  {
    id: "hero-featured",
    variant: "hero hero--featured",
    badge: "Top Rated",
    eyebrow: "",
    title: "Edizione Premium — per chi vuole il massimo",
    lead: "Pacchetto completo con supporto, aggiornamenti e risorse premium incluse. Provalo senza rischi.",
    cta: {
      primary: { text: "Acquista", href: "#" },
      secondary: { text: "Prova gratuita", href: "#" }
    },
    media: "PREMIUM"
  }
];

// Genera template HTML con variabili in formato {data.prop}
function getHeroTemplate(data) {
  const hasKpis = data.kpis && data.kpis.length > 0;
  const hasBadge = data.badge;
  
  let template = `<header class="${data.variant}" role="region" aria-label="Hero">
  <div class="hero__left">`;
  
  if (hasBadge) {
    template += `
    <div class="badge">{data.badge}</div>`;
  }
  
  if (data.eyebrow) {
    template += `
    <div class="hero__eyebrow">{data.eyebrow}</div>`;
  }
  
  template += `
    <h2 class="hero__title">{data.title}</h2>`;
  
  if (data.lead) {
    template += `
    <p class="hero__lead">{data.lead}</p>`;
  }
  
  template += `

    <div class="hero__cta-group">
      <a class="btn" href="{data.cta.primary.href}" aria-label="{data.cta.primary.text}">{data.cta.primary.text}</a>`;
  
  if (data.cta.secondary) {
    template += `
      <a class="btn btn--muted" href="{data.cta.secondary.href}" aria-label="{data.cta.secondary.text}">{data.cta.secondary.text}</a>`;
  }
  
  template += `
    </div>`;
  
  if (hasKpis) {
    template += `

    <div class="hero__kpis">`;
    data.kpis.forEach(() => {
      template += `
      <div><strong>{kpi.value}</strong> {kpi.label}</div>`;
    });
    template += `
    </div>`;
  }
  
  template += `
  </div>

  <div class="hero__media" aria-hidden="true">{data.media}</div>
</header>`;
  
  return template;
}

// Funzione di rendering
function renderHero(data) {
  const hasKpis = data.kpis && data.kpis.length > 0;
  const hasBadge = data.badge;
  
  return `
    <button class="copy-html-btn" onclick="copyHeroHTML(event, '${data.id}')" title="Copy HTML Template" aria-label="Copy HTML">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
      <span class="copy-tooltip">Copied!</span>
    </button>
    <header class="${data.variant}" role="region" aria-label="Hero ${data.id}">
      <div class="hero__left">
        ${hasBadge ? `<div class="badge">${data.badge}</div>` : ''}
        ${data.eyebrow ? `<div class="hero__eyebrow">${data.eyebrow}</div>` : ''}
        <h2 class="hero__title">${data.title}</h2>
        ${data.lead ? `<p class="hero__lead">${data.lead}</p>` : ''}

        <div class="hero__cta-group">
          <a class="btn" href="${data.cta.primary.href}" aria-label="${data.cta.primary.text}">${data.cta.primary.text}</a>
          ${data.cta.secondary ? `<a class="btn btn--muted" href="${data.cta.secondary.href}" aria-label="${data.cta.secondary.text}">${data.cta.secondary.text}</a>` : ''}
        </div>

        ${hasKpis ? `
        <div class="hero__kpis">
          ${data.kpis.map(kpi => `<div><strong>${kpi.value}</strong> ${kpi.label}</div>`).join('')}
        </div>
        ` : ''}
      </div>

      <div class="hero__media" aria-hidden="true">${data.media}</div>
    </header>
  `;
}

// Copia HTML template
function copyHeroHTML(evt, heroId) {
  const data = heroData.find(h => h.id === heroId);
  if (!data) return;
  
  const template = getHeroTemplate(data);
  const btn = evt.currentTarget;
  const tooltip = btn.querySelector('.copy-tooltip');
  
  navigator.clipboard.writeText(template).then(() => {
    btn.classList.add('copied');
    tooltip.classList.add('show');
    
    setTimeout(() => {
      btn.classList.remove('copied');
      tooltip.classList.remove('show');
    }, 1500);
  });
}

// Rendering di tutti i blocchi Hero
function renderAllHeros() {
  const containers = document.querySelectorAll('[data-hero-id]');
  
  containers.forEach(container => {
    const heroId = container.getAttribute('data-hero-id');
    const data = heroData.find(h => h.id === heroId);
    
    if (data) {
      container.innerHTML = renderHero(data);
    }
  });
}

// Gestione editor con live update
function initEditor() {
  const editorData = document.getElementById('editor-data');
  const editorSchema = document.getElementById('editor-schema');
  const errorBox = document.getElementById('editor-error');
  const copyDataBtn = document.getElementById('copy-data');
  const copySchemaBtn = document.getElementById('copy-schema');
  
  if (editorData) {
    editorData.value = JSON.stringify(heroData, null, 2);
    
    // Live update mentre scrivi
    let timeout;
    editorData.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        try {
          const newData = JSON.parse(editorData.value);
          
          // Valida che sia un array
          if (!Array.isArray(newData)) {
            throw new Error('Data must be an array');
          }
          
          // Aggiorna i dati globali
          heroData.length = 0;
          heroData.push(...newData);
          
          // Re-render tutti i blocchi
          renderAllHeros();
          
          // Nascondi errori
          if (errorBox) {
            errorBox.classList.remove('show');
          }
          
        } catch (error) {
          // Mostra errore
          if (errorBox) {
            errorBox.textContent = `Error: ${error.message}`;
            errorBox.classList.add('show');
          }
        }
      }, 500); // Debounce 500ms
    });
  }
  
  if (editorSchema) {
    editorSchema.textContent = JSON.stringify(heroSchema, null, 2);
  }

  // Copy buttons
  if (copyDataBtn) {
    copyDataBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(editorData.value).then(() => {
        copyDataBtn.textContent = '✓ Copied!';
        copyDataBtn.classList.add('copied');
        setTimeout(() => {
          copyDataBtn.textContent = '📋 Copy';
          copyDataBtn.classList.remove('copied');
        }, 2000);
      });
    });
  }

  if (copySchemaBtn) {
    copySchemaBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(editorSchema.textContent).then(() => {
        copySchemaBtn.textContent = '✓ Copied!';
        copySchemaBtn.classList.add('copied');
        setTimeout(() => {
          copySchemaBtn.textContent = '📋 Copy';
          copySchemaBtn.classList.remove('copied');
        }, 2000);
      });
    });
  }
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
  renderAllHeros();
  initEditor();
});
