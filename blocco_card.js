// Schema dati per blocco Card
const cardSchema = {
  variant: "string (cards | cards--compact | cards--reverse | cards--featured)",
  items: [
    {
      media: "string",
      title: "string",
      desc: "string",
      meta: "string",
      cta: { text: "string", href: "string" },
      badge: "string (opzionale, solo featured)"
    }
  ]
};

// Dati di esempio per le varianti Card
const cardData = [
  {
    id: "cards-standard",
    variant: "cards",
    items: [
      {
        media: "IMAGE",
        title: "Titolo della card",
        desc: "Breve descrizione che spiega il contenuto. Mantieni il testo conciso e leggibile.",
        meta: "Autore · 2 min",
        cta: { text: "Apri", href: "#" }
      },
      {
        media: "IMG",
        title: "Seconda card",
        desc: "Un'altra descrizione: informazioni essenziali qui.",
        meta: "Categoria · 5 min",
        cta: { text: "Apri", href: "#" }
      }
    ]
  },
  {
    id: "cards-compact",
    variant: "cards cards--compact cards--reverse",
    items: [
      {
        media: "IMG",
        title: "Card compatta",
        desc: "Riduce spazi e mostra immagine affiancata. Su mobile torna colonna.",
        meta: "Tag · 10 min",
        cta: { text: "Vedi", href: "#" }
      },
      {
        media: "IMG",
        title: "Compatta — seconda",
        desc: "Layout alternato semplicemente aggiungendo classi sul container.",
        meta: "Tag · 12 min",
        cta: { text: "Vedi", href: "#" }
      }
    ]
  },
  {
    id: "cards-featured",
    variant: "cards cards--featured",
    items: [
      {
        media: "FEATURED",
        badge: "NOVITÀ",
        title: "Card Featured",
        desc: "Questa variante mostra elementi extra (badge, meta estesa) e dimensioni maggiori.",
        meta: "Autore · 7 ottobre 2025",
        cta: { text: "Scopri", href: "#" }
      },
      {
        media: "LARGE",
        badge: "TOP",
        title: "Featured — seconda",
        desc: "Meta visibile e un look più curato; il codice base rimane invariato.",
        meta: "Categoria · 5 min",
        cta: { text: "Scopri", href: "#" }
      }
    ]
  }
];

// Genera template HTML con variabili in formato {data.prop}
function getCardsTemplate(data) {
  let template = `<div class="${data.variant}" role="list">`;
  
  data.items.forEach((item) => {
    const hasBadge = item.badge;
    
    template += `
  <article class="card" role="listitem">
    <div class="card__media">{item.media}</div>
    <div class="card__body">`;
    
    if (hasBadge) {
      template += `
      <span class="badge">{item.badge}</span>`;
    }
    
    template += `
      <h3 class="card__title">{item.title}</h3>
      <p class="card__desc">{item.desc}</p>
      <div class="card__meta">
        <span>{item.meta}</span>
        <a class="btn" href="{item.cta.href}">{item.cta.text}</a>
      </div>
    </div>
  </article>`;
  });
  
  template += `
</div>`;
  
  return template;
}

// Funzione di rendering
function renderCards(data) {
  const cardsHtml = data.items.map(item => {
    const hasBadge = item.badge;
    
    return `
      <article class="card" role="listitem">
        <div class="card__media">${item.media}</div>
        <div class="card__body">
          ${hasBadge ? `<span class="badge">${item.badge}</span>` : ''}
          <h3 class="card__title">${item.title}</h3>
          <p class="card__desc">${item.desc}</p>
          <div class="card__meta">
            <span>${item.meta}</span>
            <a class="btn" href="${item.cta.href}">${item.cta.text}</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
  
  return `
    <button class="copy-html-btn" onclick="copyCardsHTML(event, '${data.id}')" title="Copy HTML Template" aria-label="Copy HTML">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
      <span class="copy-tooltip">Copied!</span>
    </button>
    <div class="${data.variant}" role="list">
      ${cardsHtml}
    </div>
  `;
}

// Copia HTML template
function copyCardsHTML(evt, cardsId) {
  const data = cardData.find(c => c.id === cardsId);
  if (!data) return;
  
  const template = getCardsTemplate(data);
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

// Rendering di tutti i blocchi Card
function renderAllCards() {
  const containers = document.querySelectorAll('[data-cards-id]');
  
  containers.forEach(container => {
    const cardsId = container.getAttribute('data-cards-id');
    const data = cardData.find(c => c.id === cardsId);
    
    if (data) {
      container.innerHTML = renderCards(data);
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
    editorData.value = JSON.stringify(cardData, null, 2);
    
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
          cardData.length = 0;
          cardData.push(...newData);
          
          // Re-render tutti i blocchi
          renderAllCards();
          
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
    editorSchema.textContent = JSON.stringify(cardSchema, null, 2);
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
  renderAllCards();
  initEditor();
});
