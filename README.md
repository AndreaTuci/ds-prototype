# Design System — Priority Guide

Sistema di componenti minimalista per rappresentare la struttura logica dei blocchi in un approccio content-first. Lo stile visivo viene volutamente ridotto al minimo per concentrarsi sulla gerarchia dell'informazione e sulla priorità dei contenuti.

## Filosofia

- **Content-first**: la struttura dei contenuti ha priorità sullo stile
- **Priority guide**: rappresenta gerarchie e priorità, non design finale
- **Minimalismo**: scala di grigi, padding minimi, angoli squadrati, zero decorazioni
- **Modularità**: le varianti si ottengono aggiungendo classi CSS, senza modificare il markup

## Struttura del Sistema

```
ds_styles.css          → CSS centralizzato con tutti gli stili
blocco_hero.html       → Blocco Hero (header con CTA prominente)
blocco_banner.html     → Blocco Banner (prodotto/offerta con media)
blocco_card.html       → Blocco Card (griglia di contenuti)
```

## Blocchi Disponibili

### 1. Hero
Blocco principale per header, landing page, chiamate all'azione prominenti.

**Struttura:**
- `hero__left` → contenuto testuale (eyebrow, title, lead, CTA)
- `hero__media` → area media/immagine
- `hero__kpis` → metriche/statistiche (opzionale)

**Varianti:**
- `.hero` — standard (2 colonne: contenuto + media 400px)
- `.hero--compact` — versione ridotta (media 260px, lead nascosto)
- `.hero--reverse` — inverte posizione contenuto/media
- `.hero--featured` — enfatizzata (media 480px, border doppio, badge)

### 2. Banner
Blocco per promozioni, prodotti, annunci con CTA.

**Struttura:**
- `banner__content` → testo (eyebrow, title, desc, price, CTA)
- `banner__media` → area media/immagine
- `overlay-price` → prezzo sovrapposto (visibile solo in featured)

**Varianti:**
- `.banner` — standard (2 colonne: contenuto + media 280px)
- `.banner--compact` — versione ridotta (media 140px, desc nascosta)
- `.banner--reverse` — inverte posizione contenuto/media
- `.banner--featured` — enfatizzata (media 340px, border doppio, badge, overlay)

### 3. Card
Blocco per griglie di contenuti (articoli, prodotti, anteprime).

**Struttura:**
- `card__media` → area media/immagine
- `card__body` → contenuto (title, desc, meta, CTA)
- `badge` → etichetta (visibile solo in featured)

**Varianti:**
- `.cards` — standard (griglia responsive, card verticali)
- `.cards--compact` — card orizzontali compatte
- `.cards--reverse` — inverte media e contenuto (card orizzontali invertite)
- `.cards--featured` — card più grandi con badge visibili

## Come Usare le Varianti

### Logica delle Varianti

Le varianti **non richiedono modifiche al markup delle card individuali**. Si applicano al container aggiungendo classi CSS:

```html
<!-- Standard -->
<div class="hero">...</div>

<!-- Compact -->
<div class="hero hero--compact">...</div>

<!-- Reverse (scambia posizione elementi) -->
<div class="hero hero--reverse">...</div>

<!-- Combinazioni -->
<div class="hero hero--compact hero--reverse">...</div>

<!-- Featured -->
<div class="hero hero--featured">...</div>
```

### Effort delle Varianti

Ogni variante richiede circa **1/3 dello sforzo** del blocco base:

- **Base**: definisce tutta la struttura, layout, elementi
- **Variante**: modifica solo `grid-template-columns`, dimensioni, visibilità di alcuni elementi

Esempio CSS della logica varianti:

```css
/* Base: tutto il lavoro principale */
.hero {
  display: grid;
  grid-template-columns: 1fr 400px;
  /* ...tutti gli altri stili... */
}

/* Variante: solo override minimi */
.hero--compact {
  grid-template-columns: 1fr 260px;
  padding: var(--spacing-lg);
}

.hero--compact .hero__lead {
  display: none;
}
```

## Sistema di Token CSS

```css
/* Colori (scala di grigi) */
--gray-50 a --gray-900

/* Spaziature */
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 16px
--spacing-xl: 20px
--spacing-2xl: 24px
```

## Elementi Comuni

### Bottoni
```html
<a class="btn" href="#">Azione primaria</a>
<a class="btn btn--muted" href="#">Azione secondaria</a>
```

### Badge
```html
<span class="badge">NOVITÀ</span>
```

### Overlay Price
```html
<div class="overlay-price">€99,00</div>
<!-- Visibile solo in .banner--featured -->
```

## Responsive

Tutti i blocchi sono responsive. Su mobile (`max-width: 768px`):
- Layout a colonna singola
- Card compact/reverse tornano verticali
- Dimensioni media ottimizzate per mobile

## Best Practices

1. **Non aggiungere stili inline** — usa le classi CSS esistenti
2. **Non modificare markup per varianti** — aggiungi classi al container
3. **Mantieni gerarchia contenuti** — eyebrow → title → description → CTA
4. **Placeholder media** — usa testo semplice come "IMG" o "MEDIA"
5. **Accessibilità** — mantieni role, aria-label, aria-labelledby

## Estendere il Sistema

Per aggiungere nuove varianti:

1. Identifica il blocco base
2. Crea classe `.blocco--nomevariante`
3. Override solo le proprietà necessarie (max 5-6 regole CSS)
4. Mantieni effort ~1/3 del blocco base

```css
/* Nuova variante minimal */
.hero--minimal {
  grid-template-columns: 1fr;  /* override 1 */
  padding: var(--spacing-md);  /* override 2 */
}

.hero--minimal .hero__media {
  display: none;  /* override 3 */
}
```

## Note di Implementazione

- Il sistema è **agnostic rispetto al framework**: HTML/CSS puro
- **Nessuna dipendenza JS** per funzionalità base
- Pronto per integrazione in progetti React, Vue, Svelte, ecc.
- Gli stili possono essere portati in CSS Modules, Styled Components, Tailwind, ecc.

---

**Versione:** 0.0.1  
**Data:** Dicembre 2025  
**Licenza:** Uso interno
