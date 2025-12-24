export interface ServiceData {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  fullDescription: string; // HTML allowed
  features: string[];
  faq: { question: string; answer: string }[];
  imageCount?: number;
}

export const services: ServiceData[] = [
  {
    id: 'tende-su-misura',
    title: 'Tende su Misura',
    metaTitle: 'Tende su Misura a Castellanza e Varese | Casa del Salotto',
    metaDescription: 'Produzione artigianale di tende per interni classiche e moderne a Castellanza. Tessuti pregiati, confezione sartoriale e montaggio incluso.',
    shortDescription: 'Realizziamo tende da interni su misura per ogni ambiente. Dal sopralluogo alla scelta dei tessuti, fino alla confezione artigianale e al montaggio a casa vostra.',
    fullDescription: `
      <p>Alla <strong>Casa del Salotto di Farioli</strong>, la realizzazione di <strong>tende su misura</strong> è un'arte che tramandiamo da anni. Crediamo che la tenda non sia un semplice accessorio, ma l'elemento che veste la casa, regolando la luce e garantendo la giusta privacy.</p>
      <p>Il nostro laboratorio artigianale a <strong>Castellanza (VA)</strong> offre una consulenza complata: veniamo da voi per un sopralluogo gratuito, rileviamo le misure con precisione e vi guidiamo nella scelta tra centinaia di tessuti delle migliori marche italiane ed estere.</p>
      <h3>Stili e Tipologie</h3>
      <p>Realizziamo ogni tipo di tendaggio:</p>
      <ul>
        <li><strong>Tende classiche arricciate</strong>: ideali per soggiorni eleganti e camere da letto.</li>
        <li><strong>Tende a pacchetto</strong>: pratiche, moderne e salvaspazio.</li>
        <li><strong>Pannelli giapponesi</strong>: per ambienti minimali e grandi vetrate.</li>
        <li><strong>Mantovane e drappeggi</strong>: per chi ama lo stile classico e barocco.</li>
      </ul>
      <p>Ogni tenda viene confezionata nei nostri laboratori con cura sartoriale, controllando ogni cucitura e finitura. Infine, il nostro personale specializzato si occupa dell'installazione, garantendo un risultato perfetto.</p>
    `,
    features: ['Sopralluogo gratuito', 'Ampia scelta tessuti', 'Confezione sartoriale interna', 'Montaggio e binari su misura', 'Lavaggio e manutenzione'],
    faq: [
      { question: 'Effettuate sopralluoghi a domicilio?', answer: 'Sì, effettuiamo sopralluoghi gratuiti a Castellanza e in tutta la provincia di Varese per prendere le misure e valutare la luce degli ambienti.' },
      { question: 'Fornite anche i binari o bastoni?', answer: 'Certamente. Forniamo e installiamo scorritenda, bastoni decorativi, binari tecnici e sistemi motorizzati delle migliori marche.' }
    ],
    imageCount: 8
  },
  {
    id: 'rifacimento-divani',
    title: 'Rifacimento Divani',
    metaTitle: 'Rifacimento Divani e Poltrone a Castellanza | Tappezzeria Varese',
    metaDescription: 'Dai nuova vita al tuo vecchio divano. Rifacimento imbottiture e rivestimenti divani, poltrone e sedie a Castellanza (VA). Artigiani esperti.',
    shortDescription: 'Ridiamo vita ai vostri divani e poltrone preferiti. Rifacimento completo di imbottiture e rivestimenti con tessuti antimacchia, pelli e velluti di alta qualità.',
    fullDescription: `
      <p>Il vostro divano ha una struttura solida ma il tessuto è rovinato o l'imbottitura ha ceduto? Il <strong>rifacimento divani</strong> è la specialità della Casa del Salotto. Non gettate via un mobile di qualità: noi possiamo riportarlo al suo antico splendore, spesso rendendolo migliore del nuovo.</p>
      <p>Nel nostro laboratorio di <strong>Castellanza</strong>, smontiamo completamente il vostro divano o la vostra poltrona, controlliamo e rinforziamo i fusti in legno, sostituiamo le cinghie e rifacciamo le imbottiture utilizzando poliuretani indeformabili di varie densità o piuma d'oca, a seconda del comfort desiderato.</p>
      <h3>Perché rifoderare?</h3>
      <p>Rifoderare conviene quando la struttura è di qualità. Potrete personalizzare il vostro divano scegliendo tra migliaia di tessuti moderni, antimacchia, idrorepellenti o pelli naturali, adattandolo perfettamente al nuovo stile della vostra casa.</p>
    `,
    features: ['Sostituzione imbottiture', 'Rinforzo fusti', 'Rivestimenti sfoderabili', 'Tessuti antimacchia e Pelle', 'Ritiro e consegna inclusi'],
    faq: [
      { question: 'Conviene rifare un vecchio divano?', answer: 'Se la struttura è in legno massello o di buona qualità, rifarlo è spesso più conveniente ed ecologico che acquistarne uno nuovo di bassa qualità.' },
      { question: 'Avete tessuti lavabili?', answer: 'Sì, disponiamo di una vasta gamma di tessuti tecnici antimacchia, idrorepellenti e lavabili in lavatrice, ideali per chi ha animali o bambini.' }
    ],
    imageCount: 3
  },
  {
    id: 'tappezzeria',
    title: 'Lavori di Tappezzeria',
    metaTitle: 'Tappezzeria Artigianale Castellanza | Sedie, Testate e Pareti',
    metaDescription: 'Tappezziere esperto a Castellanza. Rivestimento sedie, testate letto, pareti tesate in stoffa. Lavorazioni classiche e moderne per Varese e provincia.',
    shortDescription: 'Maestri tappezzieri per ogni esigenza: rivestimento sedie, poltroncine, testate letto, pouf e pareti tesate in stoffa. Lavorazioni capitonné e classiche.',
    fullDescription: `
      <p>L'arte della <strong>tappezzeria</strong> richiede pazienza, esperienza e manualità. Alla Casa del Salotto siamo orgogliosi di mantenere vive tecniche tradizionali. Eseguiamo lavori di tappezzeria su qualsiasi complemento d'arredo.</p>
      <p>Dalle <strong>sedie antiche</strong> con lavorazione a molle e crine vegetale, alle sedie moderne di design. Realizziamo lavorazioni complesse come il <strong>capitonné</strong> per testate letto o divani Chesterfield.</p>
      <h3>Tappezzeria Murale</h3>
      <p>Siamo specializzati anche nella posa di <strong>tessuti a parete</strong> (pareti tesate), una soluzione elegante che migliora l'isolamento acustico e termico della stanza, donando un fascino unico agli ambienti.</p>
    `,
    features: ['Rivestimento sedie e poltroncine', 'Testate letto su misura', 'Lavorazione Capitonné', 'Pareti tesate in stoffa', 'Restauro imbottiti antichi'],
    faq: [
      { question: 'Restaurate anche sedie antiche?', answer: 'Sì, eseguiamo il restauro conservativo di sedie d’epoca, ripristinando l’imbottitura tradizionale con molle, cinghie di juta e crine.' },
      { question: 'Quanto costa rivestire una sedia?', answer: 'Il costo varia in base al tipo di sedia e al tessuto scelto. Inviateci una foto su WhatsApp per un preventivo rapido.' }
    ],
    imageCount: 3
  },
  {
    id: 'materassi',
    title: 'Materassi e Reti',
    metaTitle: 'Materassi su Misura Castellanza | Lattice, Memory, Molle',
    metaDescription: 'Vendita materassi di alta qualità a Castellanza. Memory foam, lattice, molle insacchettate e reti ortopediche. Dormire bene su misura.',
    shortDescription: 'Il riposo è salute. Proponiamo materassi di alta qualità: memory foam, lattice naturali, molle insacchettate e reti ortopediche, anche su misura.',
    fullDescription: `
      <p>Dormire bene è fondamentale per la salute. Per questo selezioniamo e realizziamo <strong>materassi</strong> di altissima qualità. Non siamo un semplice negozio, ma consulenti del riposo. Vi aiutiamo a scegliere il supporto più adatto alla vostra conformazione fisica e alle vostre abitudini di sonno.</p>
      <p>La nostra gamma include:</p>
      <ul>
        <li><strong>Materassi in Memory Foam</strong>: per chi cerca accoglienza e riduzione dei punti di pressione.</li>
        <li><strong>Materassi a Molle Insacchettate</strong>: per chi preferisce un sostegno più tradizionale ma indipendente ed ergonomico.</li>
        <li><strong>Materassi in Lattice</strong>: naturali, traspiranti e anallergici.</li>
      </ul>
      <p>Realizziamo anche <strong>materassi su misura</strong> per letti antichi, camper o barche, e forniamo reti a doghe fisse o motorizzate.</p>
    `,
    features: ['Materassi su misura', 'Reti a doghe motorizzate', 'Cuscini in memory e lattice', 'Dispositivi Medici detraibili', 'Consegna e ritiro usato'],
    faq: [
      { question: 'Fate materassi di misure particolari?', answer: 'Sì, possiamo realizzare materassi di qualsiasi forma e dimensione, anche fuori standard per letti antichi o barche.' },
      { question: 'Ritirate il vecchio materasso?', answer: 'Sì, offriamo il servizio di consegna al piano e smaltimento del vecchio materasso.' }
    ],
    imageCount: 3
  },
  {
    id: 'complementi-letto',
    title: 'Complementi Letto',
    metaTitle: 'Complementi Letto e Biancheria su Misura | Castellanza',
    metaDescription: 'Piumini, lenzuola, copriletti e trapunte su misura a Castellanza. Biancheria per la casa di lusso e corredi personalizzati.',
    shortDescription: 'Vestiamo il vostro letto con eleganza. Piumini d’oca, trapunte, copriletti, lenzuola e biancheria su misura con tessuti pregiati.',
    fullDescription: `
      <p>Un bel letto non è fatto solo dal materasso. I <strong>complementi letto</strong> sono l'anima della camera. Nel nostro laboratorio confezioniamo <strong>trapunte</strong>, copriletti e piumini su misura, coordinati con le tende o con lo stile della stanza.</p>
      <p>Selezioniamo <strong>piumini d'oca</strong> vergine di varie grammature per ogni stagione, e realizziamo sacchi copripiumino e lenzuola con cotoni percalle, rasi e lino di altissima qualità.</p>
    `,
    features: ['Trapunte invernali ed estive', 'Piumini d’oca', 'Lenzuola su misura', 'Cuscini d’arredo', 'Coordinati letto-tenda'],
    faq: [
      { question: 'Posso scegliere il tessuto per il copriletto?', answer: 'Assolutamente sì. Abbiamo un vasto campionario di tessuti e potrete abbinare il copriletto alle tende o alla testata del letto.' }
    ],
    imageCount: 3
  },
  {
    id: 'tessuti',
    title: 'Tessuti d\'Arredamento',
    metaTitle: 'Tessuti d\'Arredamento Varese | Vendita Tessuti a Metraggio',
    metaDescription: 'Ampia selezione di tessuti per arredamento a Castellanza. Velluti, lini, sete, tessuti antimacchia. Le migliori marche per la tua casa.',
    shortDescription: 'Un vasto assortimento di tessuti per arredamento delle migliori marche. Velluti, lini, sete, damaschi e tessuti tecnici antimacchia.',
    fullDescription: `
      <p>Il tessuto è la materia prima del nostro lavoro. Per questo offriamo una selezione curata di <strong>tessuti d'arredamento</strong> a Castellanza. Collaboriamo con le migliori editorie tessili italiane ed europee per offrirvi collezioni sempre aggiornate.</p>
      <p>Troverete:</p>
      <ul>
        <li>Velluti resistenti e morbidi.</li>
        <li>Lini naturali e freschi.</li>
        <li>Tessuti ignifughi per contract e hotel.</li>
        <li>Pelli e ecopelli di alta gamma.</li>
      </ul>
      <p>Siamo a disposizione per consigliarvi l'abbinamento cromatico perfetto per il vostro ambiente.</p>
    `,
    features: ['Vendita a metraggio', 'Tessuti classici e moderni', 'Tessuti outdoor', 'Consulenza cromatica', 'Campionari a domicilio'],
    faq: [
      { question: 'Vendete anche solo il tessuto?', answer: 'Sì, vendiamo tessuti a metraggio per chi desidera realizzare i propri lavori o per altre esigenze.' }
    ],
    imageCount: 3
  },
  {
    id: 'mobili',
    title: 'Mobili Imbottiti',
    metaTitle: 'Mobili Imbottiti e Letti Tessili a Castellanza',
    metaDescription: 'Produzione letti tessili, pouf, panchette e poltrone su misura. Mobili imbottiti artigianali a Castellanza (VA).',
    shortDescription: 'Progettiamo e realizziamo letti tessili con contenitore, pouf, panchette e poltroncine. Pezzi unici costruiti sulle vostre esigenze.',
    fullDescription: `
      <p>Oltre al rifacimento, ci occupiamo della <strong>produzione di nuovi mobili imbottiti</strong>. Il nostro fiore all'occhiello sono i <strong>letti tessili</strong>, realizzabili con o senza box contenitore, completamente sfoderabili e personalizzabili nella testata e nel giroletto.</p>
      <p>Realizziamo anche pouf, panchette fondoletto e poltroncine da camera, creando pezzi unici che si integrano perfettamente nel vostro arredamento.</p>
    `,
    features: ['Letti con contenitore', 'Letti su misura', 'Pouf e panchette', 'Progettazione personalizzata', 'Strutture in legno massello'],
    faq: [
      { question: 'I letti sono smontabili?', answer: 'Sì, i nostri letti sono progettati per essere facilmente trasportabili e smontabili, anche in spazi ristretti.' }
    ],
    imageCount: 3
  }
];
