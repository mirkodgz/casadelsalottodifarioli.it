# GO LIVE CHECKLIST - Casa del Salotto di Farioli
**Data:** 24 Dicembre 2025
**Dominio:** [https://casadelsalottodifarioli.it](https://casadelsalottodifarioli.it)
**Stack:** Astro + Cloudflare Pages

---

## 1. Configurazione Cloudflare Pages (Deploy)

Segui questi passaggi esatti per mettere online il sito.

1.  **Accedi a Cloudflare Dashboard**: Vai su [dash.cloudflare.com](https://dash.cloudflare.com).
2.  **Workers & Pages** -> **Create Application** -> **Connect to Git**.
3.  Seleziona il repository (GitHub/GitLab) contenente questo progetto.
4.  **Configura Build Settings**:
    *   **Framework Preset:** `Astro` (Selezionalo dalla lista, compilerà i campi automaticamente).
    *   **Build command:** `npm run build`
    *   **Build output directory:** `dist`
    *   **Node.js Version:** Imposta una variabile d'ambiente se necessario, ma di solito default va bene (18/20). Se richiesto, usa `NODE_VERSION` = `20`.
5.  **Clicca "Save and Deploy"**.

### Verifica Post-Deploy
- [ ] Il sito carica in HTTPS?
- [ ] `https://casadelsalottodifarioli.it/sitemap-index.xml` (o `/sitemap-0.xml`) è accessibile?
- [ ] `https://casadelsalottodifarioli.it/robots.txt` è accessibile?

---

## 2. Indicizzazione Google (SEO)

**NON usare Google Analytics.** Usa solo **Google Search Console (GSC)**.

1.  Vai su [Google Search Console](https://search.google.com/search-console).
2.  **Aggiungi proprietà**: Inserisci il dominio `casadelsalottodifarioli.it`.
3.  **Verifica**: Se usi Cloudflare per i DNS, la verifica DNS è automatica o richiede di aggiungere un record TXT. Se usi solo Pages, potresti dover caricare un file HTML (mettilo in `public/` e fai push) o usare il metodo Tag HTML in `src/layouts/Layout.astro`. *Consiglio: Verifica via DNS.*
4.  **Invia Sitemap**:
    *   Nel menu a sinistra, clicca su **Sitemap**.
    *   Inserisci l'URL: `https://casadelsalottodifarioli.it/sitemap-index.xml`
    *   Clicca "Invia". Dovresti vedere "Successo".

---

## 3. Checklist SEO On-Page

Tutte le pagine sono state ottimizzate con focus locale "Castellanza" e "Varese".

### Home (`/`)
- [x] **Title:** Casa del Salotto di Farioli | Tende e Divani su Misura a Castellanza
- [x] **Desc:** Artigiani a Castellanza da oltre 40 anni. Tende su misura, rifacimento divani...
- [x] **H1:** Produzione artigianale di tende per interno, divani e letti su misura (Dimensione 2.2rem)

### Servizi (Dinamici)
Verificati in `src/data/services.ts`. Esempi:
- [x] **Tende:** Tende su Misura a Castellanza e Varese | Casa del Salotto
- [x] **Divani:** Rifacimento Divani e Poltrone a Castellanza | Tappezzeria Varese
- [x] **Materassi:** Materassi su Misura Castellanza | Lattice, Memory, Molle

### Pagine Istituzionali
- [x] **Storia:** La Nostra Storia | Casa del Salotto di Farioli - Artigiani dal 19xx
- [x] **Contatti:** Contatti e Preventivi | Casa del Salotto di Farioli

---

## 4. Dati Strutturati (Schema.org)

Implementati in `src/layouts/Layout.astro`.
- [x] **LocalBusiness**:
    - Nome: Casa del Salotto di Farioli
    - Indirizzo: Piazza Castegnate 1, Castellanza (VA)
    - Telefono: +39 380 310 4932
    - Mappa: Link a Google Maps
    - PriceRange: €€
    - AreaServed: Castellanza, Varese, Provincia
- [x] **BreadcrumbList**: Generati automaticamente per ogni pagina.

---

## 5. Performance & Quality Check

- [x] **Immagini**: Usiamo formato JPG/WebP. Carousel carica `eager` per LCP, resto pagina nativo.
- [x] **Font**: Inter (Google Fonts) con `preconnect`.
- [x] **Mobile Friendly**: Layout responsive testato (Grid/Flexbox).
- [x] **Link Interni**:
    - Footer ha tutti i link servizi.
    - Sidebar nei servizi linka agli altri servizi.
    - CTA portano a Contatti.
- [x] **404**: Astro genera una pagina 404 di default, ma se vuoi puoi crearne una personalizzata in `src/pages/404.astro`. (Opzionale).

---

## 6. Manutenzione Futura

Essendo un sito statico (SSG), non richiede aggiornamenti di sicurezza plugin/database.
- **Per modificare un testo:** Edita i file in `src/pages` o `src/data`.
- **Per aggiungere foto:** Metti i file in `public/assets` e fai push. Cloudflare ricostruisce da solo in ~1 minuto.

**IL SITO È PRONTO PER IL LANCIO.** 🚀
