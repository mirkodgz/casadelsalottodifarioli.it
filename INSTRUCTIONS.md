# Istruzioni di Deploy e Consegna

## 1. Cloudflare Pages
Per pubblicare il sito su Cloudflare Pages:

1.  Collegare il repository Git a Cloudflare Pages.
2.  **Build Settings**:
    *   **Framework**: Astro
    *   **Build command**: `npm run build`
    *   **Build output directory**: `dist`
3.  **Environment Variables**: Nessuna richiesta.

## 2. Immagini (Asset)
Il codice si aspetta che la cartella `/public/assets/` contenga le immagini con la seguente nomenclatura:

*   **Hero Home**: `foto-hero-img.jpg`
*   **Storia**: `storia-home.jpg`, `storia-full.jpg`
*   **Servizi (Carousel)**:
    *   `tende-su-misura-img-01.jpg` ... `05.jpg`
    *   `rifacimento-divani-img-01.jpg` ... `05.jpg`
    *   (ecc. per tutti i 7 servizi definiti in `src/data/services.ts`)
    *   Formati supportati: `.jpg`, `.webp`, `.avif`. Il codice cerca prima avif/webp e fa fallback su jpg.

## 3. Comandi Utili
*   `npm install`: Installa dipendenze.
*   `npm run dev`: Avvia server locale.
*   `npm run build`: Genera i file statici in `dist/`.
*   `npm run preview`: Anteprima della build.

## 4. Check SEO
*   **Sitemap**: Viene generata automaticamente in `dist/sitemap-index.xml` e `dist/sitemap-0.xml` alla build.
*   **Robots.txt**: Presente in `/public/robots.txt`.
*   **Schema.org**: Implementato in `Layout.astro` (LocalBusiness).

## 5. Struttura Cartelle
*   `src/components`: Componenti UI (Header, Footer, Carousel).
*   `src/layouts`: Layout globale (SEO, Head).
*   `src/pages`: Pagine e routing (incluso `servizi/[slug].astro`).
*   `src/data`: Dati testuali dei servizi.
*   `src/styles`: CSS globale.
*   `public/assets`: Immagini.
