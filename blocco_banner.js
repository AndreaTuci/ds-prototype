// Schema dati per blocco Banner
const bannerSchema = {
  variant: "string (banner | banner--compact | banner--reverse | banner--featured)",
  eyebrow: "string",
  title: "string",
  desc: "string",
  price: "string",
  cta: { text: "string", href: "string" },
  media: "string",
  badge: "string (opzionale, solo featured)",
  overlayPrice: "string (opzionale, solo featured)"
};

// Dati di esempio per le varianti Banner
const bannerData = [
  {
    id: "banner-standard",
    variant: "banner",
    eyebrow: "Novità",
    title: "Nome prodotto — versione base",
    desc: "Descrizione sintetica del prodotto: caratteristica principale in una frase chiara che inviti all'azione.",
    price: "€79,00",
    cta: { text: "Acquista ora", href: "#" },
    media: "IMG"
  },
  {
    id: "banner-compact",
    variant: "banner banner--compact banner--reverse",
    eyebrow: "Offerta",
    title: "Prodotto — compatto",
    desc: "Versione con meno testo per layout più denso.",
    price: "€69,00",
    cta: { text: "Scopri", href: "#" },
    media: "PROD"
  },
  {
    id: "banner-featured",
    variant: "banner banner--featured",
    badge: "BEST SELLER",
    eyebrow: "Scelto per te",
    title: "Prodotto Premium — edizione speciale",
    desc: "Descrizione leggermente più lunga che mette in risalto funzionalità avanzate, garanzia e vantaggi.",
    price: "€129,00",
    cta: { text: "Vedi prodotto", href: "#" },
    media: "FEATURED",
    overlayPrice: "-20% €103,20"
  }
];

// Funzione di rendering
function renderBanner(data) {
  const hasBadge = data.badge;
  const hasOverlay = data.overlayPrice;
  
  return `
    <div class="${data.variant}" role="region" aria-label="Banner ${data.id}">
      <div class="banner__content">
        ${hasBadge ? `<span class="badge">${data.badge}</span>` : ''}
        ${data.eyebrow ? `<div class="banner__eyebrow">${data.eyebrow}</div>` : ''}

        <h2 class="banner__title">${data.title}</h2>
        ${data.desc ? `<p class="banner__desc">${data.desc}</p>` : ''}

        <div class="banner__meta">
          <div class="banner__price">${data.price}</div>
          <a class="btn" href="${data.cta.href}" aria-label="${data.cta.text}">${data.cta.text}</a>
        </div>
      </div>

      <div class="banner__media" aria-hidden="true">
        ${data.media}
        ${hasOverlay ? `<div class="overlay-price" aria-hidden="true">${data.overlayPrice}</div>` : ''}
      </div>
    </div>
  `;
}

// Rendering di tutti i blocchi Banner
function renderAllBanners() {
  const containers = document.querySelectorAll('[data-banner-id]');
  
  containers.forEach(container => {
    const bannerId = container.getAttribute('data-banner-id');
    const data = bannerData.find(b => b.id === bannerId);
    
    if (data) {
      container.innerHTML = renderBanner(data);
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
    editorData.value = JSON.stringify(bannerData, null, 2);
    
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
          bannerData.length = 0;
          bannerData.push(...newData);
          
          // Re-render tutti i blocchi
          renderAllBanners();
          
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
    editorSchema.textContent = JSON.stringify(bannerSchema, null, 2);
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
  renderAllBanners();
  initEditor();
});
