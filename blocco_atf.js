// Schema dati per blocco ATF
const atfSchema = {
  variant: "string (atf | atf--compact | atf--left | atf--dark | atf--light)",
  eyebrow: "string (opzionale)",
  badge: "string (opzionale)",
  title: "string",
  subtitle: "string",
  description: "string (opzionale)",
  cta: {
    primary: { text: "string", href: "string" },
    secondary: { text: "string", href: "string (opzionale)" },
    tertiary: { text: "string", href: "string (opzionale)" }
  },
  features: [
    { value: "string", label: "string" }
  ],
  background: "string (URL immagine full-width)"
};

// Dati di esempio per le varianti ATF
const atfData = [
  {
    id: "atf-standard",
    variant: "atf",
    eyebrow: "Nuova Generazione",
    badge: "Launch 2025",
    title: "Il futuro inizia qui",
    subtitle: "La soluzione definitiva per trasformare il tuo business",
    description: "Potenzia la tua produttività con strumenti all'avanguardia, integrazione perfetta e supporto dedicato. Unisciti a migliaia di clienti soddisfatti.",
    cta: {
      primary: { text: "Inizia gratis", href: "#" },
      secondary: { text: "Guarda demo", href: "#" },
      tertiary: { text: "Scopri di più →", href: "#" }
    },
    features: [
      { value: "10M+", label: "Utenti attivi" },
      { value: "99.9%", label: "Uptime" },
      { value: "24/7", label: "Supporto" }
    ]
  },
  {
    id: "atf-compact",
    variant: "atf atf--compact",
    eyebrow: "Edizione Pro",
    title: "Massima potenza, minimo sforzo",
    subtitle: "Tutto ciò che ti serve per crescere velocemente",
    cta: {
      primary: { text: "Prova ora", href: "#" },
      secondary: { text: "Contattaci", href: "#" }
    }
  },
  {
    id: "atf-left",
    variant: "atf atf--left",
    badge: "Best Seller",
    eyebrow: "Premium",
    title: "Esperienza senza compromessi",
    subtitle: "Progettato per chi non accetta limiti",
    description: "Funzionalità avanzate, prestazioni elevate e un'interfaccia che ti fa risparmiare tempo ogni giorno.",
    cta: {
      primary: { text: "Acquista ora", href: "#" },
      secondary: { text: "Vedi prezzi", href: "#" }
    },
    features: [
      { value: "300+", label: "Integrazioni" },
      { value: "5⭐", label: "Rating" }
    ]
  },
  {
    id: "atf-dark",
    variant: "atf atf--dark",
    badge: "Esclusivo",
    eyebrow: "Enterprise",
    title: "La scelta delle aziende leader",
    subtitle: "Sicurezza, scalabilità e performance ai massimi livelli",
    description: "Piattaforma enterprise-grade con conformità completa, SLA garantiti e supporto dedicato per la tua organizzazione.",
    cta: {
      primary: { text: "Richiedi demo", href: "#" },
      secondary: { text: "Parla con Sales", href: "#" }
    },
    features: [
      { value: "500+", label: "Aziende" },
      { value: "ISO27001", label: "Certificato" },
      { value: "99.99%", label: "SLA" }
    ]
  },
  {
    id: "atf-light",
    variant: "atf atf--light",
    eyebrow: "Lancio Speciale",
    title: "Un prodotto che cambia le regole del gioco",
    subtitle: "Unisciti alla rivoluzione e ottieni accesso esclusivo in anteprima",
    description: "Disponibile solo per i primi 1000 utenti. Non perdere l'occasione di far parte della community di innovatori.",
    cta: {
      primary: { text: "Accesso anticipato", href: "#" },
      secondary: { text: "Guarda video", href: "#" }
    },
    features: [
      { value: "50%", label: "Sconto lancio" },
      { value: "3 mesi", label: "Gratis" }
    ]
  },
  {
    id: "atf-soft",
    variant: "atf",
    eyebrow: "Bellezza Naturale",
    badge: "Bio & Vegan",
    title: "La tua pelle merita il meglio",
    subtitle: "Cosmetici naturali che rispettano la tua bellezza autentica",
    description: "Ingredienti biologici certificati, formulazioni delicate e sostenibilità in ogni prodotto. La natura al servizio della tua skincare routine.",
    cta: {
      primary: { text: "Scopri la linea", href: "#" },
      secondary: { text: "Shop online", href: "#" },
      tertiary: { text: "Leggi di più →", href: "#" }
    },
    features: [
      { value: "100%", label: "Naturale" },
      { value: "0%", label: "Parabeni" },
      { value: "Cruelty", label: "Free" }
    ]
  },
  {
    id: "atf-brutal",
    variant: "atf atf--dark",
    badge: "Live Tour 2025",
    eyebrow: "Rock Legends",
    title: "Turn it up to eleven",
    subtitle: "L'energia del rock che scuote le fondamenta",
    description: "50 anni di storia, 30 album, milioni di fan. La leggenda continua con un tour mondiale esplosivo che farà tremare gli stadi.",
    cta: {
      primary: { text: "Biglietti", href: "#" },
      secondary: { text: "Date tour", href: "#" },
      tertiary: { text: "Ascolta ora →", href: "#" }
    },
    features: [
      { value: "50+", label: "Date" },
      { value: "12", label: "Paesi" },
      { value: "500K", label: "Fans" }
    ]
  }
];

// Genera template HTML con variabili in formato {data.prop}
function getAtfTemplate(data) {
  const hasFeatures = data.features && data.features.length > 0;
  const hasBadge = data.badge;
  const hasDescription = data.description;
  
  const bgStyle = data.background ? ` style="background-image: url('${data.background}')"` : '';
  let template = `<section class="${data.variant}" role="region" aria-label="Above the fold"${bgStyle}>
  <div class="atf__content">`;
  
  if (hasBadge) {
    template += `
    <div class="atf__badge">{data.badge}</div>`;
  }
  
  if (data.eyebrow) {
    template += `
    <div class="atf__eyebrow">{data.eyebrow}</div>`;
  }
  
  template += `
    <h1 class="atf__title">{data.title}</h1>
    <p class="atf__subtitle">{data.subtitle}</p>`;
  
  if (hasDescription) {
    template += `
    <p class="atf__description">{data.description}</p>`;
  }
  
  template += `

    <div class="atf__cta-group">
      <a class="btn" href="{data.cta.primary.href}" aria-label="{data.cta.primary.text}">{data.cta.primary.text}</a>`;
  
  if (data.cta.secondary) {
    template += `
      <a class="btn btn--muted" href="{data.cta.secondary.href}" aria-label="{data.cta.secondary.text}">{data.cta.secondary.text}</a>`;
  }
  
  if (data.cta.tertiary) {
    template += `
      <a class="btn btn--muted" href="{data.cta.tertiary.href}" aria-label="{data.cta.tertiary.text}">{data.cta.tertiary.text}</a>`;
  }
  
  template += `
    </div>`;
  
  if (hasFeatures) {
    template += `

    <div class="atf__features">`;
    data.features.forEach(() => {
      template += `
      <div class="atf__feature">
        <div class="atf__feature-value">{feature.value}</div>
        <div class="atf__feature-label">{feature.label}</div>
      </div>`;
    });
    template += `
    </div>`;
  }
  
  template += `
  </div>
</section>`;
  
  return template;
}

// Funzione di rendering
function renderAtf(data) {
  const hasFeatures = data.features && data.features.length > 0;
  const hasBadge = data.badge;
  const hasDescription = data.description;
  
  return `
    <button class="copy-html-btn" onclick="copyAtfHTML(event, '${data.id}')" title="Copy HTML Template" aria-label="Copy HTML">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
      <span class="copy-tooltip">Copied!</span>
    </button>
    <section class="${data.variant}" role="region" aria-label="Above the fold ${data.id}">
      <div class="atf__content">
        ${hasBadge ? `<div class="atf__badge">${data.badge}</div>` : ''}
        ${data.eyebrow ? `<div class="atf__eyebrow">${data.eyebrow}</div>` : ''}
        <h1 class="atf__title">${data.title}</h1>
        <p class="atf__subtitle">${data.subtitle}</p>
        ${hasDescription ? `<p class="atf__description">${data.description}</p>` : ''}

        <div class="atf__cta-group">
          <a class="btn" href="${data.cta.primary.href}" aria-label="${data.cta.primary.text}">${data.cta.primary.text}</a>
          ${data.cta.secondary ? `<a class="btn btn--muted" href="${data.cta.secondary.href}" aria-label="${data.cta.secondary.text}">${data.cta.secondary.text}</a>` : ''}
          ${data.cta.tertiary ? `<a class="btn btn--muted" href="${data.cta.tertiary.href}" aria-label="${data.cta.tertiary.text}">${data.cta.tertiary.text}</a>` : ''}
        </div>

        ${hasFeatures ? `
        <div class="atf__features">
          ${data.features.map(feature => `
          <div class="atf__feature">
            <div class="atf__feature-value">${feature.value}</div>
            <div class="atf__feature-label">${feature.label}</div>
          </div>`).join('')}
        </div>
        ` : ''}
      </div>
    </section>
  `;
}

// Copia HTML template
function copyAtfHTML(evt, atfId) {
  const data = atfData.find(a => a.id === atfId);
  if (!data) return;
  
  const template = getAtfTemplate(data);
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

// Rendering di tutti i blocchi ATF
function renderAllAtfs() {
  const containers = document.querySelectorAll('[data-atf-id]');
  
  containers.forEach(container => {
    const atfId = container.getAttribute('data-atf-id');
    const data = atfData.find(a => a.id === atfId);
    
    if (data) {
      container.innerHTML = renderAtf(data);
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
    editorData.value = JSON.stringify(atfData, null, 2);
    
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
          atfData.length = 0;
          atfData.push(...newData);
          
          // Re-render tutti i blocchi
          renderAllAtfs();
          
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
    editorSchema.textContent = JSON.stringify(atfSchema, null, 2);
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
  renderAllAtfs();
  initEditor();
});
