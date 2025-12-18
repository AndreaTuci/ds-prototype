// Schema dati per blocco Content
const contentSchema = {
  variant: "string (content | content--two-col | content--four-col | content--icon | content--horizontal | content--featured)",
  eyebrow: "string (opzionale)",
  title: "string",
  subtitle: "string (opzionale)",
  items: [
    {
      icon: "string (opzionale, emoji o testo)",
      title: "string",
      description: "string",
      link: { text: "string", href: "string (opzionale)" }
    }
  ]
};

// Dati di esempio per le varianti Content
const contentData = [
  {
    id: "content-standard",
    variant: "content",
    eyebrow: "Caratteristiche",
    title: "Tutto ciò di cui hai bisogno",
    subtitle: "Soluzione completa con strumenti potenti per far crescere il tuo business",
    items: [
      {
        title: "Velocità estrema",
        description: "Performance ottimizzate per garantire tempi di risposta istantanei e un'esperienza fluida.",
        link: { text: "Scopri di più →", href: "#" }
      },
      {
        title: "Sicurezza garantita",
        description: "Crittografia end-to-end e conformità agli standard internazionali per proteggere i tuoi dati.",
        link: { text: "Scopri di più →", href: "#" }
      },
      {
        title: "Analytics avanzate",
        description: "Dashboard intuitive e report dettagliati per monitorare ogni aspetto del tuo progetto.",
        link: { text: "Scopri di più →", href: "#" }
      }
    ]
  },
  {
    id: "content-two-col",
    variant: "content content--two-col",
    title: "Due colonne per contenuti estesi",
    subtitle: "Layout ottimale per descrizioni più dettagliate e approfondite",
    items: [
      {
        title: "Focus sul risultato",
        description: "Strumenti progettati per aiutarti a raggiungere i tuoi obiettivi in modo efficiente. Monitoraggio KPI in tempo reale e suggerimenti intelligenti per ottimizzare le performance.",
        link: { text: "Leggi case study →", href: "#" }
      },
      {
        title: "Scalabilità senza limiti",
        description: "Infrastruttura cloud che cresce insieme al tuo business. Gestisci migliaia di utenti senza preoccuparti delle prestazioni o dei downtime.",
        link: { text: "Vedi prezzi →", href: "#" }
      }
    ]
  },
  {
    id: "content-four-col",
    variant: "content content--four-col",
    eyebrow: "Funzionalità",
    title: "Piattaforma all-in-one",
    items: [
      {
        title: "Chat in tempo reale",
        description: "Comunicazione istantanea con il tuo team ovunque tu sia.",
        link: { text: "Prova →", href: "#" }
      },
      {
        title: "Storage illimitato",
        description: "Archivia tutti i tuoi file senza preoccupazioni di spazio.",
        link: { text: "Prova →", href: "#" }
      },
      {
        title: "Integrazioni",
        description: "Connetti i tuoi strumenti preferiti in pochi click.",
        link: { text: "Prova →", href: "#" }
      },
      {
        title: "Personalizzazione",
        description: "Adatta la piattaforma al tuo brand e workflow.",
        link: { text: "Prova →", href: "#" }
      }
    ]
  },
  {
    id: "content-icon",
    variant: "content content--icon",
    eyebrow: "Vantaggi",
    title: "Perché sceglierci",
    subtitle: "I motivi per cui migliaia di aziende si affidano a noi",
    items: [
      {
        title: "Facilità d'uso",
        description: "Interfaccia intuitiva che non richiede formazione. Inizia a lavorare immediatamente.",
        link: { text: "Inizia →", href: "#" }
      },
      {
        title: "Supporto 24/7",
        description: "Team dedicato sempre disponibile per risolvere ogni tuo dubbio o problema.",
        link: { text: "Contattaci →", href: "#" }
      },
      {
        title: "ROI garantito",
        description: "Migliora l'efficienza del 40% e riduci i costi operativi significativamente.",
        link: { text: "Calcola →", href: "#" }
      }
    ]
  },
  {
    id: "content-horizontal",
    variant: "content content--horizontal",
    title: "Layout orizzontale per storie",
    subtitle: "Perfetto per case study, testimonianze e contenuti narrativi",
    items: [
      {
        title: "Fase di scoperta",
        description: "Analizziamo insieme le tue esigenze e obiettivi di business. Il nostro team di esperti ti guida nella definizione della strategia più adatta per raggiungere i tuoi traguardi. Workshop dedicati e sessioni one-to-one per massimizzare il valore.",
        link: { text: "Scopri il processo →", href: "#" }
      },
      {
        title: "Implementazione rapida",
        description: "Setup completo in pochi giorni con il supporto del nostro team tecnico. Migrazione dati assistita, formazione personalizzata e documentazione dettagliata per garantire una transizione fluida e senza interruzioni.",
        link: { text: "Richiedi demo →", href: "#" }
      }
    ]
  },
  {
    id: "content-soft",
    variant: "content",
    eyebrow: "Natural Beauty",
    title: "Rituale di bellezza quotidiano",
    subtitle: "Prodotti delicati che nutrono la tua pelle ogni giorno",
    items: [
      {
        media: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
        title: "Siero viso illuminante",
        description: "Formula leggera con vitamina C e acido ialuronico per una pelle radiosa e idratata.",
        link: { text: "Scopri →", href: "#" }
      },
      {
        media: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&q=80",
        title: "Crema nutriente notte",
        description: "Texture ricca con oli naturali che rigenerano la pelle durante il riposo.",
        link: { text: "Scopri →", href: "#" }
      },
      {
        media: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
        title: "Maschera purificante",
        description: "Argilla verde e estratti botanici per una pulizia profonda e delicata.",
        link: { text: "Scopri →", href: "#" }
      }
    ]
  },
  {
    id: "content-brutal",
    variant: "content content--four-col",
    eyebrow: "Greatest Hits",
    title: "Discografia leggendaria",
    items: [
      {
        media: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
        title: "Thunder Road",
        description: "L'album che ha definito un'era. Riff potenti e testi che parlano al cuore.",
        link: { text: "Ascolta →", href: "#" }
      },
      {
        media: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
        title: "Electric Storm",
        description: "Il tour mondiale sold-out. Energia pura che spacca i palchi.",
        link: { text: "Ascolta →", href: "#" }
      },
      {
        media: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
        title: "Rebel Hearts",
        description: "Il comeback epico. Suoni vintage con un twist moderno devastante.",
        link: { text: "Ascolta →", href: "#" }
      },
      {
        media: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80",
        title: "Live & Loud",
        description: "Triplo LP dal vivo. L'esperienza del concerto a casa tua.",
        link: { text: "Ascolta →", href: "#" }
      }
    ]
  }
];

// Genera template HTML con variabili in formato {data.prop}
function getContentTemplate(data) {
  let template = `<section class="${data.variant}" role="region" aria-label="Content section">`;
  
  if (data.eyebrow || data.title || data.subtitle) {
    template += `
  <div class="content__header">`;
    
    if (data.eyebrow) {
      template += `
    <div class="content__eyebrow">{data.eyebrow}</div>`;
    }
    
    if (data.title) {
      template += `
    <h2 class="content__title">{data.title}</h2>`;
    }
    
    if (data.subtitle) {
      template += `
    <p class="content__subtitle">{data.subtitle}</p>`;
    }
    
    template += `
  </div>`;
  }
  
  template += `

  <div class="content__grid">`;
  
  data.items.forEach((item) => {
    template += `
    <div class="content__item">`;
    
    if (item.media) {
      template += `
      <div class="content__item-media"><img src="{item.media}" alt="{item.title}" loading="lazy"></div>`;
    } else if (data.variant.includes('icon') && item.icon) {
      template += `
      <div class="content__item-icon">{item.icon}</div>`;
    } else {
      template += `
      <div class="content__item-media">Media</div>`;
    }
    
    if (data.variant.includes('horizontal')) {
      template += `
      <div class="content__item-content">
        <h3 class="content__item-title">{item.title}</h3>
        <p class="content__item-desc">{item.description}</p>
        <a class="content__item-link" href="{item.link.href}">{item.link.text}</a>
      </div>`;
    } else {
      template += `
      <h3 class="content__item-title">{item.title}</h3>
      <p class="content__item-desc">{item.description}</p>
      <a class="content__item-link" href="{item.link.href}">{item.link.text}</a>`;
    }
    
    template += `
    </div>`;
  });
  
  template += `
  </div>
</section>`;
  
  return template;
}

// Funzione di rendering
function renderContent(data) {
  const hasIcon = data.variant.includes('icon');
  const isHorizontal = data.variant.includes('horizontal');
  
  let itemsHtml = data.items.map(item => {
    let html = `<div class="content__item">`;
    
    if (item.media) {
      html += `<div class="content__item-media"><img src="${item.media}" alt="${item.title}" loading="lazy"></div>`;
    } else if (hasIcon && item.icon) {
      html += `<div class="content__item-icon">${item.icon}</div>`;
    } else {
      html += `<div class="content__item-media">Media</div>`;
    }
    
    if (isHorizontal) {
      html += `
      <div class="content__item-content">
        <h3 class="content__item-title">${item.title}</h3>
        <p class="content__item-desc">${item.description}</p>
        ${item.link ? `<a class="content__item-link" href="${item.link.href}">${item.link.text}</a>` : ''}
      </div>`;
    } else {
      html += `
      <h3 class="content__item-title">${item.title}</h3>
      <p class="content__item-desc">${item.description}</p>
      ${item.link ? `<a class="content__item-link" href="${item.link.href}">${item.link.text}</a>` : ''}`;
    }
    
    html += `</div>`;
    return html;
  }).join('');
  
  return `
    <button class="copy-html-btn" onclick="copyContentHTML(event, '${data.id}')" title="Copy HTML Template" aria-label="Copy HTML">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
      <span class="copy-tooltip">Copied!</span>
    </button>
    <section class="${data.variant}" role="region" aria-label="Content ${data.id}">
      ${data.eyebrow || data.title || data.subtitle ? `
      <div class="content__header">
        ${data.eyebrow ? `<div class="content__eyebrow">${data.eyebrow}</div>` : ''}
        ${data.title ? `<h2 class="content__title">${data.title}</h2>` : ''}
        ${data.subtitle ? `<p class="content__subtitle">${data.subtitle}</p>` : ''}
      </div>` : ''}

      <div class="content__grid">
        ${itemsHtml}
      </div>
    </section>
  `;
}

// Copia HTML template
function copyContentHTML(evt, contentId) {
  const data = contentData.find(c => c.id === contentId);
  if (!data) return;
  
  const template = getContentTemplate(data);
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

// Rendering di tutti i blocchi Content
function renderAllContents() {
  const containers = document.querySelectorAll('[data-content-id]');
  
  containers.forEach(container => {
    const contentId = container.getAttribute('data-content-id');
    const data = contentData.find(c => c.id === contentId);
    
    if (data) {
      container.innerHTML = renderContent(data);
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
    editorData.value = JSON.stringify(contentData, null, 2);
    
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
          contentData.length = 0;
          contentData.push(...newData);
          
          // Re-render tutti i blocchi
          renderAllContents();
          
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
    editorSchema.textContent = JSON.stringify(contentSchema, null, 2);
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
  renderAllContents();
  initEditor();
});
