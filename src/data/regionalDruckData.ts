// Regional data for 3D-Druck landing pages
// Focus: General 3D-Druck services (Verfahren, Materialien, breite Anwendungen)
// DIFFERENZIERT von Messemodellen (Events) und Architekturmodellen (Architekten)

export interface RegionalDruckData {
  slug: string;
  name: string;
  type: 'bundesland' | 'stadt' | 'standort';
  title: string;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  deliveryTime: string;
  deliveryNote: string;
  localIndustries: {
    name: string;
    sector: string;
    application: string;
  }[];
  localAdvantages: string[];
  nearbyRegions: string[];
  stats: {
    projekte: string;
    lieferzeit: string;
    materialien: string;
  };
}

export const regionalDruckData: Record<string, RegionalDruckData> = {
  'wien': {
    slug: 'wien',
    name: 'Wien',
    type: 'stadt',
    title: '3D-Druck Service Wien',
    h1Title: '3D-Druck Wien – Prototypen, Modelle & Einzelteile',
    metaTitle: '3D-Druck Wien | Prototypen ab €20 ✓ Express 24h | ekdruck',
    metaDescription: '3D-Druck Service für Wien: Prototypen, Gehäuse, Designstudien & Einzelteile aus PLA, PETG & ASA. Angebot in 6h, Lieferung in 5-7 Tagen. Jetzt anfragen!',
    heroSubtitle: 'Von der Idee zum fertigen Bauteil – wir drucken Ihre Prototypen, Gehäuse und Designobjekte für Wiener Unternehmen, Startups und Kreativagenturen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand direkt nach Wien, Express über Nacht möglich',
    localIndustries: [
      { name: 'Startup-Prototypen', sector: 'Tech & Innovation', application: 'Funktionsmuster, MVP-Gehäuse, Pitch-Modelle für Investoren' },
      { name: 'Medizintechnik-Modelle', sector: 'Life Sciences', application: 'Anatomische Anschauungsmodelle, Gerätegehäuse, Schulungsmodelle' },
      { name: 'Design & Kreativwirtschaft', sector: 'Kreativbranche', application: 'Designstudien, Produktmockups, Verpackungsprototypen' },
      { name: 'Universitäts- & FH-Projekte', sector: 'Bildung & Forschung', application: 'Studienarbeiten, Forschungsmodelle, Lehrmittel' },
    ],
    localAdvantages: [
      'Express-Versand nach Wien über Nacht',
      'Erfahrung mit Wiener Startups und Kreativagenturen',
      'Persönliche Übergabe in Wien auf Anfrage',
      'Prototypen für Investoren-Pitches in 24h',
    ],
    nearbyRegions: ['niederoesterreich', 'burgenland'],
    stats: { projekte: '200+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'linz': {
    slug: 'linz',
    name: 'Linz',
    type: 'stadt',
    title: '3D-Druck Service Linz',
    h1Title: '3D-Druck Linz – Same-Day vom Nachbarn',
    metaTitle: '3D-Druck Linz | Same-Day ab Gunskirchen ✓ | ekdruck',
    metaDescription: '3D-Druck in Linz: Nur 20 Min entfernt. Prototypen, Industrieteile & Designmodelle. Same-Day-Abholung möglich. PLA, PETG, ASA – jetzt anfragen!',
    heroSubtitle: 'Ihr 3D-Druck-Partner direkt vor der Haustür. Nur 20 Minuten von Linz entfernt – Same-Day-Service für Prototypen, Industriemodelle und kreative Projekte.',
    deliveryTime: 'Same Day',
    deliveryNote: 'Nur 20 Minuten von unserem Standort in Gunskirchen',
    localIndustries: [
      { name: 'Industrieprototypen', sector: 'Stahl- & Metallindustrie', application: 'Gehäuse, Abdeckungen, Halterungen für Industrieanlagen' },
      { name: 'Kreativwirtschaft', sector: 'Ars Electronica / Tabakfabrik', application: 'Installationen, Kunstobjekte, Event-Dekorationen' },
      { name: 'Maschinenbau-Visualisierung', sector: 'Produktion & Fertigung', application: 'Schnittmodelle, Schulungsmodelle, Ersatzteile-Muster' },
      { name: 'Bildung & Forschung', sector: 'JKU / FH OÖ', application: 'Labormodelle, Studienarbeiten, Funktionsmuster' },
    ],
    localAdvantages: [
      'Nur 20 Minuten Entfernung – persönliche Übergabe',
      'Same-Day-Delivery für dringende Projekte',
      'Erfahrung mit Linzer Industrieunternehmen',
      'Unkomplizierte Abholung in Gunskirchen',
    ],
    nearbyRegions: ['oberoesterreich', 'wels'],
    stats: { projekte: '150+', lieferzeit: 'Same Day', materialien: '8+' },
  },

  'graz': {
    slug: 'graz',
    name: 'Graz',
    type: 'stadt',
    title: '3D-Druck Service Graz',
    h1Title: '3D-Druck Graz – Prototypen für Automotive & Technik',
    metaTitle: '3D-Druck Graz | Automotive-Prototypen ✓ Ab €20 | ekdruck',
    metaDescription: '3D-Druck für Graz: Prototypen für Automotive, Elektronik & Maschinenbau-Visualisierung. Express über A9. Angebot in 6h – jetzt anfragen!',
    heroSubtitle: 'Professioneller 3D-Druck für die steirische Innovationshauptstadt. Prototypen und Funktionsmuster für Automotive-Zulieferer, Elektronikfirmen und technische Büros.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express-Versand über A9 Pyhrnautobahn',
    localIndustries: [
      { name: 'Automotive-Prototypen', sector: 'Fahrzeugindustrie', application: 'Interieur-Mockups, Halterungen, Designstudien für Fahrzeugteile' },
      { name: 'Elektronik-Gehäuse', sector: 'Halbleiter & Elektronik', application: 'Sensorgehäuse, Platinen-Einhausungen, Testvorrichtungen' },
      { name: 'Universitäts-Forschung', sector: 'TU Graz / FH Joanneum', application: 'Forschungsmodelle, Robotik-Teile, Sensorhalterungen' },
      { name: 'Green Tech', sector: 'Umwelttechnologie', application: 'Prototypen für Energietechnik, Sensorik, Messtechnikgehäuse' },
    ],
    localAdvantages: [
      'Express-Lieferung über A9 nach Graz',
      'Erfahrung mit steirischen Technologieunternehmen',
      'Prototypen für Automotive-Zulieferer',
      'Flexible Fertigung ab Stückzahl 1',
    ],
    nearbyRegions: ['steiermark', 'kaernten'],
    stats: { projekte: '100+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'salzburg': {
    slug: 'salzburg',
    name: 'Salzburg',
    type: 'stadt',
    title: '3D-Druck Service Salzburg',
    h1Title: '3D-Druck Salzburg – Präzision über die Westautobahn',
    metaTitle: '3D-Druck Salzburg | Schnell über A1 ✓ Ab €20 | ekdruck',
    metaDescription: '3D-Druck Service für Salzburg: Prototypen, Gehäuse & Designmodelle. Schnelle A1-Lieferung aus OÖ. PLA, PETG, ASA. Angebot in 6h!',
    heroSubtitle: 'Maßgefertigte 3D-Druckteile für Salzburger Unternehmen – von Prototypen über Designstudien bis zu funktionalen Einzelteilen. Schnelle Lieferung über die Westautobahn.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1 Westautobahn',
    localIndustries: [
      { name: 'Tourismus-Equipment', sector: 'Hotellerie & Gastronomie', application: 'Displayhalter, Dekorationsobjekte, Modelle für Hotelkonzepte' },
      { name: 'Lebensmitteltechnik', sector: 'Food & Beverage', application: 'Maschinenteile-Muster, Verpackungsprototypen, Dosierhilfen' },
      { name: 'Kulturwirtschaft', sector: 'Festspiele & Events', application: 'Bühnenmodelle, Requisiten-Prototypen, Designobjekte' },
      { name: 'Sportartikel', sector: 'Outdoor & Sport', application: 'Ergonomie-Prototypen, Halterungen, Zubehör-Muster' },
    ],
    localAdvantages: [
      'Kurze Lieferwege über A1 Westautobahn',
      'Erfahrung mit Salzburger Tourismus- und Kulturbranche',
      'Express für kurzfristige Projektanfragen',
      'Individuelle Beratung für Erstprojekte',
    ],
    nearbyRegions: ['oberoesterreich', 'tirol'],
    stats: { projekte: '80+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'innsbruck': {
    slug: 'innsbruck',
    name: 'Innsbruck',
    type: 'stadt',
    title: '3D-Druck Service Innsbruck',
    h1Title: '3D-Druck Innsbruck – Medizintechnik & Alpine Innovation',
    metaTitle: '3D-Druck Innsbruck | Medizintechnik & Sport ✓ | ekdruck',
    metaDescription: '3D-Druck für Innsbruck: Prototypen für Medizintechnik, Sportartikel & alpine Technik. Robuster Versand. Angebot in 6h – jetzt anfragen!',
    heroSubtitle: 'Professioneller 3D-Druck für Innsbrucker Unternehmen und Forschungseinrichtungen. Spezialisiert auf Prototypen für Medizintechnik, Sportgeräte und alpine Innovationen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A13 mit robuster Verpackung',
    localIndustries: [
      { name: 'Medizintechnik', sector: 'Life Sciences', application: 'Gerätegehäuse, anatomische Modelle, Instrumenten-Prototypen' },
      { name: 'Sportartikel-Entwicklung', sector: 'Outdoor & Wintersport', application: 'Bindungs-Prototypen, Helmteile-Muster, ergonomische Griffe' },
      { name: 'Alpine Technik', sector: 'Seilbahn & Infrastruktur', application: 'Gehäuse für Sensorik, Halterungen, Abdeckungen' },
      { name: 'Universität Innsbruck', sector: 'Forschung', application: 'Laborgeräte-Teile, Experimentalaufbauten, Studienmodelle' },
    ],
    localAdvantages: [
      'Erfahrung mit Medizintechnik-Prototypen',
      'Robuste Verpackung für Alpentransport',
      'Express-Option für Forschungsprojekte',
      'Partnerschaft mit Tiroler Innovationsbetrieben',
    ],
    nearbyRegions: ['tirol', 'salzburg', 'vorarlberg'],
    stats: { projekte: '60+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'klagenfurt': {
    slug: 'klagenfurt',
    name: 'Klagenfurt',
    type: 'stadt',
    title: '3D-Druck Service Klagenfurt',
    h1Title: '3D-Druck Klagenfurt – Elektronik & IT-Prototypen',
    metaTitle: '3D-Druck Klagenfurt | Elektronik-Gehäuse ✓ | ekdruck',
    metaDescription: '3D-Druck für Klagenfurt: Gehäuse, Prototypen & Einzelteile für Elektronik, IT und Holzindustrie. Express über A10. Ab €20 – jetzt anfragen!',
    heroSubtitle: 'Professioneller 3D-Druck für Klagenfurter Betriebe. Elektronik-Gehäuse, IT-Hardware-Prototypen und individuelle Bauteile für die Kärntner Wirtschaft.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10 Tauernautobahn',
    localIndustries: [
      { name: 'Elektronik & Halbleiter', sector: 'Mikroelektronik', application: 'Sensorgehäuse, Kühlkörper-Prototypen, Testvorrichtungen' },
      { name: 'IT & Software', sector: 'Informationstechnologie', application: 'Hardware-Gehäuse, IoT-Prototypen, Server-Halterungen' },
      { name: 'Holzverarbeitung', sector: 'Holzindustrie', application: 'Verbindungselemente-Muster, Werkzeughalterungen, Prototypen' },
      { name: 'Universität Klagenfurt', sector: 'Forschung & Lehre', application: 'Labormodelle, Robotik-Teile, Studienarbeiten' },
    ],
    localAdvantages: [
      'Erfahrung mit Elektronik-Gehäusen und IoT-Prototypen',
      'Zuverlässiger Versand über Tauernautobahn',
      'Express-Option für dringende Entwicklungsprojekte',
      'Materialvielfalt für unterschiedliche Anforderungen',
    ],
    nearbyRegions: ['kaernten', 'villach', 'steiermark'],
    stats: { projekte: '40+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'villach': {
    slug: 'villach',
    name: 'Villach',
    type: 'stadt',
    title: '3D-Druck Service Villach',
    h1Title: '3D-Druck Villach – Prototypen für den Technologiepark',
    metaTitle: '3D-Druck Villach | Technologie-Prototypen ✓ | ekdruck',
    metaDescription: '3D-Druck für Villach: Prototypen für Elektronik, Sensorik & Technologieunternehmen. Lieferung über A10/A2. Ab €20 – jetzt anfragen!',
    heroSubtitle: 'Maßgefertigte 3D-Druckteile für Villacher Technologieunternehmen. Elektronik-Prototypen, Sensorgehäuse und individuelle Bauteile aus dem FDM-Verfahren.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A2',
    localIndustries: [
      { name: 'Halbleitertechnik', sector: 'Mikroelektronik', application: 'Testgehäuse, Wafer-Halterungen, Prototypen für Chipverpackung' },
      { name: 'Sensorik', sector: 'Messtechnik', application: 'Sensorgehäuse, Kalibriervorrichtungen, Halterungen' },
      { name: 'Tourismus-Technik', sector: 'Thermalbäder & Hotels', application: 'Geräteabdeckungen, Displayhalter, Zubehörteile' },
      { name: 'Gewerbe & Handwerk', sector: 'Lokales Gewerbe', application: 'Werkzeughalterungen, Ersatzteile-Muster, Vorrichtungen' },
    ],
    localAdvantages: [
      'Erfahrung mit Technologiepark-Unternehmen',
      'Schnelle Prototypen für Entwicklungszyklen',
      'Robuster Versand über A10',
      'Individuelle Materialberatung',
    ],
    nearbyRegions: ['kaernten', 'klagenfurt'],
    stats: { projekte: '25+', lieferzeit: '5-7 Tage', materialien: '6+' },
  },

  'wels': {
    slug: 'wels',
    name: 'Wels',
    type: 'stadt',
    title: '3D-Druck Service Wels',
    h1Title: '3D-Druck Wels – Ihr Nachbar für schnelle Prototypen',
    metaTitle: '3D-Druck Wels | 10 Min Abholung ✓ Ab €20 | ekdruck',
    metaDescription: '3D-Druck direkt neben Wels: Persönliche Abholung in 10 Min. Prototypen, Gehäuse & Einzelteile. Same-Day möglich – jetzt anfragen!',
    heroSubtitle: 'Ihr direkter Nachbar für professionellen 3D-Druck. Persönliche Abholung in Gunskirchen – nur 10 Minuten von Wels entfernt. Same-Day-Service für dringende Projekte.',
    deliveryTime: 'Sofort',
    deliveryNote: 'Persönliche Abholung in Gunskirchen – nur 10 Minuten',
    localIndustries: [
      { name: 'Agrartechnik', sector: 'Landmaschinenbau', application: 'Ersatzteile-Muster, Halterungen, Prototypen für Anbaugeräte' },
      { name: 'Elektrotechnik', sector: 'Schaltanlagen & Steuerung', application: 'Gehäuse, Kabelführungen, Abdeckungen, Adapterteile' },
      { name: 'Lebensmittelindustrie', sector: 'Food Processing', application: 'Dosierhilfen, Transporthalterungen, Maschinenteile-Prototypen' },
      { name: 'Handwerk & Gewerbe', sector: 'Lokales Gewerbe', application: 'Werkzeughalterungen, Schablonen, Vorrichtungen, Ersatzteile' },
    ],
    localAdvantages: [
      'Nur 10 Minuten zur Abholung in Gunskirchen',
      'Same-Day-Fertigung für dringende Teile',
      'Persönliche Beratung vor Ort möglich',
      'Langjährige Erfahrung mit Welser Unternehmen',
    ],
    nearbyRegions: ['oberoesterreich', 'linz'],
    stats: { projekte: '120+', lieferzeit: 'Sofort', materialien: '8+' },
  },

  'st-poelten': {
    slug: 'st-poelten',
    name: 'St. Pölten',
    type: 'stadt',
    title: '3D-Druck Service St. Pölten',
    h1Title: '3D-Druck St. Pölten – Prototypen & Modelle für NÖ',
    metaTitle: '3D-Druck St. Pölten | Schnell über A1 ✓ | ekdruck',
    metaDescription: '3D-Druck für St. Pölten: Prototypen, Gehäuse & Einzelteile für Gewerbe, FH-Projekte & Verwaltung. A1-Lieferung. Ab €20 – jetzt anfragen!',
    heroSubtitle: 'Professioneller 3D-Druck für die niederösterreichische Landeshauptstadt. Prototypen und Einzelteile für Gewerbe, Bildungseinrichtungen und öffentliche Projekte.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1 Westautobahn',
    localIndustries: [
      { name: 'FH & Bildungsprojekte', sector: 'Fachhochschule St. Pölten', application: 'Studienmodelle, Laborteile, Medientechnik-Prototypen' },
      { name: 'Verwaltung & öffentliche Hand', sector: 'Landesregierung NÖ', application: 'Präsentationsmodelle, Anschauungsobjekte, Schulungshilfen' },
      { name: 'Lokales Gewerbe', sector: 'Handwerk & KMU', application: 'Werkzeughalterungen, Ersatzteile-Muster, Vorrichtungen' },
      { name: 'Medientechnik', sector: 'Kreativwirtschaft', application: 'Kamerahalterungen, Equipment-Gehäuse, Studiomodelle' },
    ],
    localAdvantages: [
      'Schnelle Lieferung über A1 Westautobahn',
      'Erfahrung mit öffentlichen Projekten und Bildungseinrichtungen',
      'Zentrale Lage für ganz Niederösterreich',
      'Express-Option für dringende Abgaben',
    ],
    nearbyRegions: ['niederoesterreich', 'wien'],
    stats: { projekte: '35+', lieferzeit: '5-7 Tage', materialien: '6+' },
  },

  'dornbirn': {
    slug: 'dornbirn',
    name: 'Dornbirn',
    type: 'stadt',
    title: '3D-Druck Service Dornbirn',
    h1Title: '3D-Druck Dornbirn – Präzision für Vorarlberger Industrie',
    metaTitle: '3D-Druck Dornbirn | Industrie & Design ✓ | ekdruck',
    metaDescription: '3D-Druck für Dornbirn: Prototypen für Textil-, Kunststoff- & Lichttechnik. Design-Kompetenz fürs Ländle. Angebot in 6h – jetzt anfragen!',
    heroSubtitle: 'Hochpräzise 3D-Druckteile für Vorarlberger Unternehmen. Prototypen für Textiltechnik, Kunststoffverarbeitung und Lichttechnik – Qualität, die zum Ländle passt.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A14 Rheintal Autobahn',
    localIndustries: [
      { name: 'Textiltechnik', sector: 'Textil & Bekleidung', application: 'Webmaschinenteile-Muster, Garnführungen, Prototypen für Textilmaschinen' },
      { name: 'Kunststoffverarbeitung', sector: 'Kunststofftechnik', application: 'Formteile-Prototypen, Werkzeugmuster, Spritzguss-Vorabmodelle' },
      { name: 'Lichttechnik', sector: 'Beleuchtung & Elektrik', application: 'Leuchtengehäuse, Reflektorformen, LED-Halterungen' },
      { name: 'Beschläge & Möbeltechnik', sector: 'Möbelindustrie', application: 'Beschlagprototypen, Scharniermodelle, Funktionsmuster' },
    ],
    localAdvantages: [
      'Erfahrung mit Vorarlberger Industrieunternehmen',
      'Grenznahe Lieferung auch nach CH und Süddeutschland',
      'Design-Kompetenz für anspruchsvolle Oberflächen',
      'Express-Option für Entwicklungsprojekte',
    ],
    nearbyRegions: ['vorarlberg'],
    stats: { projekte: '30+', lieferzeit: '5-7 Tage', materialien: '6+' },
  },

  'gunskirchen': {
    slug: 'gunskirchen',
    name: 'Gunskirchen',
    type: 'standort',
    title: '3D-Druck Gunskirchen – Unser Standort',
    h1Title: '3D-Druck Gunskirchen – Direkt vom Hersteller',
    metaTitle: '3D-Druck Gunskirchen | Abholung sofort ✓ | ekdruck',
    metaDescription: 'ekdruck in Gunskirchen: 3D-Druck direkt vom Hersteller. Persönliche Abholung, Same-Day-Service, alle Materialien. Kein Versandrisiko – jetzt anfragen!',
    heroSubtitle: 'Hier werden Ihre Teile gedruckt. Besuchen Sie uns in Gunskirchen – persönliche Abholung, Beratung vor Ort und Same-Day-Service ohne Umwege.',
    deliveryTime: 'Sofort',
    deliveryNote: 'Persönliche Abholung direkt am Produktionsstandort',
    localIndustries: [
      { name: 'Direktabholung', sector: 'Lokale Unternehmen', application: 'Kein Versandrisiko, persönliche Qualitätsprüfung vor Ort' },
      { name: 'Beratung vor Ort', sector: 'Alle Branchen', application: 'Materialwahl, Konstruktionsberatung, gemeinsame Designoptimierung' },
      { name: 'Eilaufträge', sector: 'Express-Service', application: 'Vom Dateiupload zum fertigen Teil am selben Tag' },
      { name: 'Serienfertigung', sector: 'Kleinserien 10-100 Stück', application: 'Gleichbleibende Qualität, persönliche Abnahme jeder Charge' },
    ],
    localAdvantages: [
      'Persönliche Abholung direkt am Standort',
      'Same-Day-Service – morgens bestellt, abends fertig',
      'Qualitätsprüfung gemeinsam vor Ort',
      'Kein Versandrisiko, keine Wartezeit',
    ],
    nearbyRegions: ['wels', 'linz', 'oberoesterreich'],
    stats: { projekte: '500+', lieferzeit: 'Sofort', materialien: '10+' },
  },

  // BUNDESLÄNDER
  'oberoesterreich': {
    slug: 'oberoesterreich',
    name: 'Oberösterreich',
    type: 'bundesland',
    title: '3D-Druck Oberösterreich',
    h1Title: '3D-Druck Oberösterreich – Lokale Fertigung in Gunskirchen',
    metaTitle: '3D-Druck OÖ | Lokale Fertigung ✓ Abholung möglich | ekdruck',
    metaDescription: '3D-Druck aus Oberösterreich: Lokale Fertigung in Gunskirchen. Prototypen, Gehäuse & Einzelteile für OÖ-Betriebe. Same-Day möglich – jetzt anfragen!',
    heroSubtitle: 'Ihr lokaler 3D-Druck-Partner in Oberösterreich. Persönliche Abholung in Gunskirchen oder Express-Lieferung in den gesamten Zentralraum – vom Prototyp bis zur Kleinserie.',
    deliveryTime: 'Sofort / Abholung',
    deliveryNote: 'Lokale Fertigung – persönliche Abholung in Gunskirchen möglich',
    localIndustries: [
      { name: 'Automobilzulieferer', sector: 'Fahrzeugindustrie', application: 'Designstudien, Halterungen, Interieur-Prototypen' },
      { name: 'Maschinenbau-Modelle', sector: 'Industrieregion OÖ', application: 'Schnittmodelle, Schulungsobjekte, Ersatzteile-Muster' },
      { name: 'Kunststofftechnik', sector: 'Kunststoffcluster OÖ', application: 'Spritzguss-Vorabmodelle, Werkzeugmuster, Formteil-Prototypen' },
      { name: 'Lebensmitteltechnik', sector: 'Agrar & Food', application: 'Dosierhilfen, Maschinenteile-Prototypen, Verpackungsmuster' },
    ],
    localAdvantages: [
      'Lokaler Hersteller – kürzeste Wege in ganz OÖ',
      'Persönliche Abholung in Gunskirchen',
      'Same-Day für dringende Entwicklungsprojekte',
      'Erfahrung mit OÖ Industrieunternehmen',
    ],
    nearbyRegions: ['niederoesterreich', 'salzburg', 'linz', 'wels'],
    stats: { projekte: '300+', lieferzeit: 'Sofort', materialien: '10+' },
  },

  'niederoesterreich': {
    slug: 'niederoesterreich',
    name: 'Niederösterreich',
    type: 'bundesland',
    title: '3D-Druck Niederösterreich',
    h1Title: '3D-Druck Niederösterreich – Vom Waldviertel bis zum Wiener Umland',
    metaTitle: '3D-Druck NÖ | A1-Express aus OÖ ✓ Ab €20 | ekdruck',
    metaDescription: '3D-Druck für Niederösterreich: Prototypen & Einzelteile für KMU, Gewerbe & Landwirtschaft. Schnelle A1-Lieferung. Angebot in 6h – jetzt anfragen!',
    heroSubtitle: 'Professioneller 3D-Druck für das größte Bundesland. Prototypen und Einzelteile für KMU, Gewerbebetriebe und landwirtschaftliche Innovatoren in ganz Niederösterreich.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1/S33',
    localIndustries: [
      { name: 'KMU & Gewerbe', sector: 'Handwerk & Kleinbetriebe', application: 'Werkzeughalterungen, Schablonen, Einzelteile nach Maß' },
      { name: 'Agrartechnik', sector: 'Landwirtschaft', application: 'Adapter, Dosierhilfen, Prototypen für Spezialgeräte' },
      { name: 'Wiener Speckgürtel', sector: 'Technologiebetriebe', application: 'Gehäuse, Prototypen, Designstudien' },
      { name: 'Weinbau-Zubehör', sector: 'Weinwirtschaft', application: 'Spezialteile, Halterungen, individuelle Etikettiervorrichtungen' },
    ],
    localAdvantages: [
      'Zentrale Lage zwischen Wien und Linz',
      'Schnelle Lieferung in alle NÖ-Regionen',
      'Erfahrung mit Kleinbetrieben und Landwirtschaft',
      'Flexible Stückzahlen ab 1 Teil',
    ],
    nearbyRegions: ['wien', 'oberoesterreich', 'st-poelten'],
    stats: { projekte: '60+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'steiermark': {
    slug: 'steiermark',
    name: 'Steiermark',
    type: 'bundesland',
    title: '3D-Druck Steiermark',
    h1Title: '3D-Druck Steiermark – Automotive & Green Tech Prototypen',
    metaTitle: '3D-Druck Steiermark | Automotive-Cluster ✓ | ekdruck',
    metaDescription: '3D-Druck für die Steiermark: Prototypen für Automotive, Green Tech & Maschinenbau. Express über A9. Angebot in 6h – jetzt anfragen!',
    heroSubtitle: 'Hochwertige 3D-Druckteile für das Grüne Herz Österreichs. Prototypen und Funktionsmuster für den steirischen Automotive-Cluster, Green-Tech-Betriebe und technische Büros.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express nach Graz über A9 Pyhrnautobahn',
    localIndustries: [
      { name: 'Automotive-Cluster', sector: 'Fahrzeugindustrie', application: 'Interieur-Mockups, Kabelhalterungen, Designstudien für Zulieferer' },
      { name: 'Green Tech Valley', sector: 'Umwelttechnologie', application: 'Sensorgehäuse, Prototypen für Energiesysteme, Messtechnik' },
      { name: 'Maschinenbau-Modelle', sector: 'Anlagenbau', application: 'Schnittmodelle, Demonstrationsmodelle, Schulungsobjekte' },
      { name: 'Universitäten & FH', sector: 'TU Graz / FH Joanneum', application: 'Forschungsprototypen, Robotikteile, Laborgeräte' },
    ],
    localAdvantages: [
      'Express-Lieferung über A9 in die Steiermark',
      'Erfahrung mit Automotive-Zulieferern',
      'Prototypen für Green-Tech-Innovationen',
      'Flexible Fertigung für Forschungsprojekte',
    ],
    nearbyRegions: ['kaernten', 'burgenland', 'graz'],
    stats: { projekte: '80+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'kaernten': {
    slug: 'kaernten',
    name: 'Kärnten',
    type: 'bundesland',
    title: '3D-Druck Kärnten',
    h1Title: '3D-Druck Kärnten – Elektronik, Holz & Innovation',
    metaTitle: '3D-Druck Kärnten | Elektronik & Holz ✓ Ab €20 | ekdruck',
    metaDescription: '3D-Druck für Kärnten: Prototypen für Elektronik, Holzindustrie & Tourismustechnik. Express über A10. Angebot in 6h – jetzt anfragen!',
    heroSubtitle: 'Professioneller 3D-Druck für Kärntner Unternehmen. Elektronik-Gehäuse, Industrieprototypen und individuelle Bauteile – zuverlässig über die Tauernautobahn.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10 Tauernautobahn',
    localIndustries: [
      { name: 'Mikroelektronik', sector: 'Halbleiter & Chips', application: 'Testgehäuse, Wafer-Halterungen, Sensorik-Prototypen' },
      { name: 'Holzindustrie', sector: 'Holzverarbeitung', application: 'Verbindungselement-Muster, Vorrichtungen, Werkzeughalter' },
      { name: 'Tourismus-Zubehör', sector: 'Hotellerie & Therme', application: 'Displayhalter, Dekorationsteile, Geräteabdeckungen' },
      { name: 'IT & Software', sector: 'Technologieregion', application: 'Hardware-Prototypen, IoT-Gehäuse, Embedded-Systems-Cases' },
    ],
    localAdvantages: [
      'Zuverlässiger Versand über Tauernautobahn',
      'Erfahrung mit Elektronik- und Holzindustrie',
      'Express-Option für Entwicklungssprints',
      'Robuste Verpackung für Alpentransport',
    ],
    nearbyRegions: ['steiermark', 'klagenfurt', 'villach'],
    stats: { projekte: '50+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'vorarlberg': {
    slug: 'vorarlberg',
    name: 'Vorarlberg',
    type: 'bundesland',
    title: '3D-Druck Vorarlberg',
    h1Title: '3D-Druck Vorarlberg – Präzision für das Ländle',
    metaTitle: '3D-Druck Vorarlberg | Textil & Kunststoff ✓ | ekdruck',
    metaDescription: '3D-Druck für Vorarlberg: Prototypen für Textiltechnik, Kunststoff, Lichttechnik & Beschläge. Auch CH/DE-nah. Angebot in 6h – jetzt anfragen!',
    heroSubtitle: 'Hochpräzise 3D-Druckteile für Vorarlberger Unternehmen. Prototypen und Funktionsmuster für Textiltechnik, Kunststoffverarbeitung und die exportstarke Industrie im Ländle.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A14 Rheintal',
    localIndustries: [
      { name: 'Textiltechnik', sector: 'Textilmaschinen', application: 'Garnführungen, Webmaschinenteile-Muster, Spulenhalter-Prototypen' },
      { name: 'Kunststoffverarbeitung', sector: 'Kunststoffindustrie', application: 'Spritzguss-Vorabmodelle, Werkzeugmuster, Prototypen' },
      { name: 'Beleuchtungstechnik', sector: 'Lichttechnik', application: 'Leuchtengehäuse, Reflektorformen, LED-Kühlkörper-Muster' },
      { name: 'Beschlagtechnik', sector: 'Möbel & Bau', application: 'Scharnierprototypen, Beschlagmuster, Funktionsmodelle' },
    ],
    localAdvantages: [
      'Erfahrung mit Vorarlberger Exportindustrie',
      'Grenznahe Lieferung auch nach CH und Süddeutschland',
      'Design-Qualität für anspruchsvolle Industriekunden',
      'Express-Option für Entwicklungssprints',
    ],
    nearbyRegions: ['dornbirn'],
    stats: { projekte: '40+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'burgenland': {
    slug: 'burgenland',
    name: 'Burgenland',
    type: 'bundesland',
    title: '3D-Druck Burgenland',
    h1Title: '3D-Druck Burgenland – Prototypen & Einzelteile',
    metaTitle: '3D-Druck Burgenland | Lieferung via Wien ✓ | ekdruck',
    metaDescription: '3D-Druck fürs Burgenland: Prototypen für Agrartech, Weinbau-Zubehör & erneuerbare Energie. Lieferung über Wien/A4. Ab €20 – jetzt anfragen!',
    heroSubtitle: 'Professioneller 3D-Druck für das östlichste Bundesland. Prototypen und Einzelteile für Agrar-Innovatoren, Weinbautechnik und Betriebe im Bereich erneuerbare Energie.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über Wien/A4',
    localIndustries: [
      { name: 'Agrartechnik', sector: 'Landwirtschaft', application: 'Spezialadapter, Dosierhilfen, Prototypen für Erntetechnik' },
      { name: 'Weinbau-Zubehör', sector: 'Weinwirtschaft', application: 'Etikettiervorrichtungen, Spezialhalterungen, Kellerei-Prototypen' },
      { name: 'Erneuerbare Energie', sector: 'Photovoltaik & Wind', application: 'Montagehalterungen, Kabelführungs-Prototypen, Gehäuse' },
      { name: 'Tourismus-Ausstattung', sector: 'Neusiedlersee-Region', application: 'Displayhalter, Infotafeln-Prototypen, Souvenirobjekte' },
    ],
    localAdvantages: [
      'Schnelle Lieferung über Wien/A4',
      'Erfahrung mit landwirtschaftlichen Innovationsprojekten',
      'Flexible Fertigung ab Stückzahl 1',
      'Individuelle Beratung für Erstprojekte',
    ],
    nearbyRegions: ['wien', 'niederoesterreich', 'steiermark'],
    stats: { projekte: '20+', lieferzeit: '5-7 Tage', materialien: '6+' },
  },
};

// Helpers
export const getAllDruckRegions = (): RegionalDruckData[] => Object.values(regionalDruckData);
export const getDruckRegionBySlug = (slug: string): RegionalDruckData | undefined => regionalDruckData[slug];
