// Regional data for Messemodell landing pages
// Each region has unique trade fairs, delivery info, and local context

export interface RegionalMesseData {
  slug: string;
  name: string;
  type: 'bundesland' | 'stadt';
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  deliveryTime: string;
  deliveryNote: string;
  localMessen: {
    name: string;
    location: string;
    type: string;
  }[];
  localAdvantages: string[];
  nearbyRegions: string[];
  stats: {
    messen: string;
    lieferzeit: string;
    kunden: string;
  };
}

export const regionalMesseData: Record<string, RegionalMesseData> = {
  // BUNDESLÄNDER
  'wien': {
    slug: 'wien',
    name: 'Wien',
    type: 'bundesland',
    title: 'Messemodelle für Wien',
    metaTitle: '3D-Druck Messemodelle Wien | Messebau Wien | ekdruck.at',
    metaDescription: 'Professionelle 3D-gedruckte Messemodelle für Wien. Lieferung in 5-7 Tagen. Ideal für Reed Messe Wien, FERIEN-MESSE, BAUEN & WOHNEN und mehr.',
    heroSubtitle: 'Ihr Partner für beeindruckende Messemodelle in der Bundeshauptstadt. Zuverlässige Lieferung nach Wien in 5-7 Werktagen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand direkt zur Messe Wien möglich',
    localMessen: [
      { name: 'FERIEN-MESSE Wien', location: 'Reed Messe Wien', type: 'Touristik' },
      { name: 'BAUEN & WOHNEN', location: 'Reed Messe Wien', type: 'Bau' },
      { name: 'Vienna Autoshow', location: 'Reed Messe Wien', type: 'Automobil' },
      { name: 'GEWINN Messe', location: 'Reed Messe Wien', type: 'Finanzen' },
      { name: 'Salon Österreich', location: 'Marx Halle', type: 'Kunst' },
    ],
    localAdvantages: [
      'Direkte Lieferung zur Reed Messe Wien',
      'Express-Service für kurzfristige Messetermine',
      'Persönliche Übergabe in Wien möglich',
      'Erfahrung mit Wiener Messebauern',
    ],
    nearbyRegions: ['niederoesterreich', 'burgenland'],
    stats: { messen: '50+', lieferzeit: '5-7 Tage', kunden: '30+' },
  },

  'niederoesterreich': {
    slug: 'niederoesterreich',
    name: 'Niederösterreich',
    type: 'bundesland',
    title: 'Messemodelle für Niederösterreich',
    metaTitle: '3D-Druck Messemodelle Niederösterreich | Express | St. Pölten, Krems | ekdruck.at',
    metaDescription: 'Messemodelle und Präsentationsobjekte für Niederösterreich. Lieferung nach St. Pölten, Krems, Wiener Neustadt. Express-Service verfügbar.',
    heroSubtitle: 'Professionelle Messemodelle für das größte Bundesland. Schnelle Lieferung in alle Regionen Niederösterreichs.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1/S33',
    localMessen: [
      { name: 'Wieselburger Messe', location: 'Wieselburg', type: 'Landwirtschaft' },
      { name: 'AB HOF Messe', location: 'Wieselburg', type: 'Direktvermarktung' },
      { name: 'Waldviertler Jobmesse', location: 'Zwettl', type: 'Karriere' },
      { name: 'Bau & Energie Messe', location: 'Wieselburg', type: 'Bau' },
    ],
    localAdvantages: [
      'Zentrale Lage zwischen Wien und Linz',
      'Kurze Lieferwege ins Mostviertel',
      'Erfahrung mit Agrar-Messen',
      'Flexible Lieferoptionen',
    ],
    nearbyRegions: ['wien', 'oberoesterreich', 'st-poelten'],
    stats: { messen: '20+', lieferzeit: '5-7 Tage', kunden: '15+' },
  },

  'oberoesterreich': {
    slug: 'oberoesterreich',
    name: 'Oberösterreich',
    type: 'bundesland',
    title: 'Messemodelle für Oberösterreich',
    metaTitle: '3D-Druck Messemodelle Oberösterreich | Lokaler Hersteller | Wels, Linz | ekdruck.at',
    metaDescription: 'Messemodelle direkt aus Oberösterreich. Lokale Fertigung in Gunskirchen. Persönliche Abholung möglich. Ideal für Welser Messe und Linzer Events.',
    heroSubtitle: 'Ihr lokaler Partner in Oberösterreich. Persönliche Abholung in Gunskirchen oder Express-Lieferung zu allen OÖ-Messen.',
    deliveryTime: 'Sofort / Abholung',
    deliveryNote: 'Lokale Fertigung – persönliche Abholung in Gunskirchen möglich',
    localMessen: [
      { name: 'Welser Messe', location: 'Wels', type: 'Allgemein' },
      { name: 'AGRARIA', location: 'Wels', type: 'Landwirtschaft' },
      { name: 'Power-Days', location: 'Wels', type: 'Elektrotechnik' },
      { name: 'Internationale Holzmesse', location: 'Klagenfurt', type: 'Holz' },
      { name: 'WEBCHANCE', location: 'Ried', type: 'Digital' },
    ],
    localAdvantages: [
      'Lokaler Hersteller – kürzeste Wege',
      'Persönliche Abholung in Gunskirchen',
      'Langjährige Erfahrung mit Welser Messe',
      'Same-Day-Service für dringende Projekte',
    ],
    nearbyRegions: ['niederoesterreich', 'salzburg', 'linz', 'wels'],
    stats: { messen: '30+', lieferzeit: 'Sofort', kunden: '40+' },
  },

  'steiermark': {
    slug: 'steiermark',
    name: 'Steiermark',
    type: 'bundesland',
    title: 'Messemodelle für die Steiermark',
    metaTitle: '3D-Druck Messemodelle Steiermark | Express Graz | Häuslbauermesse | ekdruck.at',
    metaDescription: 'Professionelle Messemodelle für die Steiermark. Express-Lieferung nach Graz. Ideal für Grazer Herbstmesse, Häuslbauermesse und Industriemessen.',
    heroSubtitle: 'Hochwertige Messemodelle für das Grüne Herz Österreichs. Express-Lieferung nach Graz und in alle steirischen Regionen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express nach Graz über A9',
    localMessen: [
      { name: 'Grazer Herbstmesse', location: 'Messe Graz', type: 'Allgemein' },
      { name: 'Häuslbauermesse', location: 'Messe Graz', type: 'Bau' },
      { name: 'Freizeit Messe Graz', location: 'Messe Graz', type: 'Freizeit' },
      { name: 'BeSt³ Graz', location: 'Messe Graz', type: 'Bildung' },
    ],
    localAdvantages: [
      'Erfahrung mit Grazer Messen',
      'Express-Lieferung zur Messe Graz',
      'Industrie-Kompetenz für steirische Unternehmen',
      'Flexible Terminplanung',
    ],
    nearbyRegions: ['kaernten', 'burgenland', 'graz'],
    stats: { messen: '25+', lieferzeit: '5-7 Tage', kunden: '20+' },
  },

  'kaernten': {
    slug: 'kaernten',
    name: 'Kärnten',
    type: 'bundesland',
    title: 'Messemodelle für Kärnten',
    metaTitle: '3D-Druck Messemodelle Kärnten | Klagenfurt, Villach | Holzmesse | ekdruck.at',
    metaDescription: 'Messemodelle für Kärnten. Lieferung nach Klagenfurt und Villach. Spezialist für Internationale Holzmesse und Kärntner Messen.',
    heroSubtitle: 'Ihr Partner für Messemodelle im sonnigen Süden. Zuverlässige Lieferung nach Klagenfurt, Villach und ganz Kärnten.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10 Tauernautobahn',
    localMessen: [
      { name: 'Internationale Holzmesse', location: 'Klagenfurt', type: 'Holz' },
      { name: 'Kärntner Baumesse', location: 'Klagenfurt', type: 'Bau' },
      { name: 'Klagenfurter Herbstmesse', location: 'Klagenfurt', type: 'Allgemein' },
      { name: 'Villacher Kirchtag', location: 'Villach', type: 'Tradition' },
    ],
    localAdvantages: [
      'Spezialist für Holzmesse-Modelle',
      'Erfahrung mit alpiner Logistik',
      'Express-Option für dringende Termine',
      'Flexible Lieferzeiten',
    ],
    nearbyRegions: ['steiermark', 'tirol', 'klagenfurt', 'villach'],
    stats: { messen: '15+', lieferzeit: '5-7 Tage', kunden: '10+' },
  },

  'salzburg': {
    slug: 'salzburg',
    name: 'Salzburg',
    type: 'bundesland',
    title: 'Messemodelle für Salzburg',
    metaTitle: '3D-Druck Messemodelle Salzburg | AutoSalon, Baumesse | Express | ekdruck.at',
    metaDescription: 'Professionelle Messemodelle für Salzburg. Express-Lieferung zum Messezentrum Salzburg. Ideal für AutoSalon, Bauen+Wohnen und Kongressmessen.',
    heroSubtitle: 'Hochwertige Messemodelle für die Mozartstadt und das Salzburger Land. Schnelle Lieferung über die Westautobahn.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1 Westautobahn',
    localMessen: [
      { name: 'AutoSalon Salzburg', location: 'Messezentrum Salzburg', type: 'Automobil' },
      { name: 'Bauen+Wohnen Salzburg', location: 'Messezentrum Salzburg', type: 'Bau' },
      { name: 'Alles für den Gast', location: 'Messezentrum Salzburg', type: 'Gastronomie' },
      { name: 'Art & Antique', location: 'Residenz Salzburg', type: 'Kunst' },
    ],
    localAdvantages: [
      'Kurze Lieferwege über A1',
      'Erfahrung mit Salzburger Messen',
      'Ideal für Tourismus- und Gastro-Messen',
      'Express-Service verfügbar',
    ],
    nearbyRegions: ['oberoesterreich', 'tirol', 'kaernten'],
    stats: { messen: '20+', lieferzeit: '5-7 Tage', kunden: '15+' },
  },

  'tirol': {
    slug: 'tirol',
    name: 'Tirol',
    type: 'bundesland',
    title: 'Messemodelle für Tirol',
    metaTitle: '3D-Druck Messemodelle Tirol | Innsbruck Messe | Express | ekdruck.at',
    metaDescription: 'Messemodelle für Tirol. Express-Lieferung nach Innsbruck. Spezialist für Wintersport-, Tourismus- und Baumessen in den Alpen.',
    heroSubtitle: 'Professionelle Messemodelle für das Herz der Alpen. Zuverlässige Lieferung nach Innsbruck und in alle Tiroler Regionen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A13',
    localMessen: [
      { name: 'Innsbrucker Herbstmesse', location: 'Messe Innsbruck', type: 'Allgemein' },
      { name: 'Interalpin', location: 'Messe Innsbruck', type: 'Wintersport' },
      { name: 'Tiroler Baumesse', location: 'Messe Innsbruck', type: 'Bau' },
      { name: 'FAFGA alpine superior', location: 'Messe Innsbruck', type: 'Gastronomie' },
    ],
    localAdvantages: [
      'Erfahrung mit alpinen Messen',
      'Spezialist für Tourismus-Modelle',
      'Express-Option verfügbar',
      'Robuste Verpackung für Alpentransport',
    ],
    nearbyRegions: ['salzburg', 'vorarlberg', 'innsbruck'],
    stats: { messen: '15+', lieferzeit: '5-7 Tage', kunden: '10+' },
  },

  'vorarlberg': {
    slug: 'vorarlberg',
    name: 'Vorarlberg',
    type: 'bundesland',
    title: 'Messemodelle für Vorarlberg',
    metaTitle: '3D-Druck Messemodelle Vorarlberg | Dornbirner Messe | Express | ekdruck.at',
    metaDescription: 'Professionelle Messemodelle für Vorarlberg. Lieferung nach Dornbirn, Bregenz, Feldkirch. Ideal für die Dornbirner Messe und regionale Events.',
    heroSubtitle: 'Hochwertige Messemodelle für das Ländle. Zuverlässige Lieferung nach Dornbirn, Bregenz und ganz Vorarlberg.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A14 Rheintal',
    localMessen: [
      { name: 'Dornbirner Herbstmesse', location: 'Messe Dornbirn', type: 'Allgemein' },
      { name: 'SCHAU! Messe', location: 'Messe Dornbirn', type: 'Lifestyle' },
      { name: 'Gustav', location: 'Messe Dornbirn', type: 'Design' },
      { name: 'i - die Messe', location: 'Messe Dornbirn', type: 'Freizeit' },
    ],
    localAdvantages: [
      'Erfahrung mit Dornbirner Messe',
      'Schweiz- und Deutschland-nah',
      'Design-Kompetenz für kreative Projekte',
      'Express-Option verfügbar',
    ],
    nearbyRegions: ['tirol', 'dornbirn'],
    stats: { messen: '10+', lieferzeit: '5-7 Tage', kunden: '8+' },
  },

  'burgenland': {
    slug: 'burgenland',
    name: 'Burgenland',
    type: 'bundesland',
    title: 'Messemodelle für das Burgenland',
    metaTitle: '3D-Druck Messemodelle Burgenland | Eisenstadt, Oberwart | Express | ekdruck.at',
    metaDescription: 'Messemodelle für das Burgenland. Lieferung nach Eisenstadt, Oberwart, Neusiedl am See. Ideal für Wein-, Tourismus- und Regionalmessen.',
    heroSubtitle: 'Professionelle Messemodelle für das östlichste Bundesland. Schnelle Lieferung über Wien ins gesamte Burgenland.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über Wien/A4',
    localMessen: [
      { name: 'Inform Oberwart', location: 'Oberwart', type: 'Allgemein' },
      { name: 'Weinmessen', location: 'Diverse', type: 'Wein' },
      { name: 'Neusiedler See Tourismus', location: 'Neusiedl', type: 'Tourismus' },
    ],
    localAdvantages: [
      'Kurze Wege über Wien',
      'Erfahrung mit Wein- und Tourismusmessen',
      'Flexible Lieferoptionen',
      'Regionale Expertise',
    ],
    nearbyRegions: ['wien', 'niederoesterreich', 'steiermark'],
    stats: { messen: '10+', lieferzeit: '5-7 Tage', kunden: '5+' },
  },

  // HAUPTSTÄDTE (zusätzlich zu den Bundesländern)
  'linz': {
    slug: 'linz',
    name: 'Linz',
    type: 'stadt',
    title: 'Messemodelle für Linz',
    metaTitle: '3D-Druck Messemodelle Linz | Design Center, Tabakfabrik | Express | ekdruck.at',
    metaDescription: 'Messemodelle für Linz und Umgebung. Express-Lieferung zum Design Center und zur Tabakfabrik. Lokaler Partner aus Oberösterreich.',
    heroSubtitle: 'Ihr lokaler Partner für Messemodelle in der Stahlstadt. Kurze Wege, schnelle Lieferung, persönlicher Service.',
    deliveryTime: 'Same Day',
    deliveryNote: 'Nur 20 Minuten von unserem Standort',
    localMessen: [
      { name: 'Design Center Events', location: 'Design Center Linz', type: 'Design' },
      { name: 'Tabakfabrik Events', location: 'Tabakfabrik Linz', type: 'Kreativ' },
      { name: 'Ars Electronica', location: 'Ars Electronica Center', type: 'Technologie' },
      { name: 'LENTOS Events', location: 'LENTOS Kunstmuseum', type: 'Kunst' },
    ],
    localAdvantages: [
      'Nur 20 Minuten Entfernung',
      'Same-Day-Delivery möglich',
      'Persönliche Übergabe in Linz',
      'Erfahrung mit Linzer Kreativszene',
    ],
    nearbyRegions: ['oberoesterreich', 'wels'],
    stats: { messen: '15+', lieferzeit: 'Same Day', kunden: '25+' },
  },

  'wels': {
    slug: 'wels',
    name: 'Wels',
    type: 'stadt',
    title: 'Messemodelle für Wels',
    metaTitle: '3D-Druck Messemodelle Wels | Welser Messe, AGRARIA | Lokaler Partner | ekdruck.at',
    metaDescription: 'Messemodelle direkt für die Welser Messe. Lokaler Hersteller aus Gunskirchen. Persönliche Abholung oder Express-Lieferung.',
    heroSubtitle: 'Direkt vor Ort – Ihr lokaler Partner für die Welser Messe. Persönliche Abholung oder Express-Lieferung zum Messegelände.',
    deliveryTime: 'Sofort',
    deliveryNote: 'Persönliche Abholung in Gunskirchen – nur 10 Minuten zur Messe Wels',
    localMessen: [
      { name: 'Welser Messe', location: 'Messe Wels', type: 'Allgemein' },
      { name: 'AGRARIA', location: 'Messe Wels', type: 'Landwirtschaft' },
      { name: 'Power-Days', location: 'Messe Wels', type: 'Elektrotechnik' },
      { name: 'FISCH&FEINES', location: 'Messe Wels', type: 'Kulinarik' },
    ],
    localAdvantages: [
      'Nur 10 Minuten zur Messe Wels',
      'Persönliche Abholung möglich',
      'Langjährige Erfahrung mit Welser Messe',
      'Last-Minute-Service für dringende Projekte',
    ],
    nearbyRegions: ['oberoesterreich', 'linz'],
    stats: { messen: '20+', lieferzeit: 'Sofort', kunden: '30+' },
  },

  'graz': {
    slug: 'graz',
    name: 'Graz',
    type: 'stadt',
    title: 'Messemodelle für Graz',
    metaTitle: '3D-Druck Messemodelle Graz | Messe Graz, Herbstmesse | Express | ekdruck.at',
    metaDescription: 'Professionelle Messemodelle für Graz. Express-Lieferung zur Messe Graz. Ideal für Herbstmesse, Häuslbauermesse und Grazer Events.',
    heroSubtitle: 'Hochwertige Messemodelle für die steirische Landeshauptstadt. Express-Lieferung direkt zur Messe Graz.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express-Versand über A9 Pyhrnautobahn',
    localMessen: [
      { name: 'Grazer Herbstmesse', location: 'Messe Graz', type: 'Allgemein' },
      { name: 'Häuslbauermesse', location: 'Messe Graz', type: 'Bau' },
      { name: 'Grazer Frühjahrsmesse', location: 'Messe Graz', type: 'Allgemein' },
      { name: 'BeSt³ Graz', location: 'Messe Graz', type: 'Bildung' },
    ],
    localAdvantages: [
      'Express-Lieferung zur Messe Graz',
      'Erfahrung mit steirischen Messen',
      'Flexible Terminplanung',
      'Persönlicher Ansprechpartner',
    ],
    nearbyRegions: ['steiermark', 'kaernten'],
    stats: { messen: '20+', lieferzeit: '5-7 Tage', kunden: '15+' },
  },

  'klagenfurt': {
    slug: 'klagenfurt',
    name: 'Klagenfurt',
    type: 'stadt',
    title: 'Messemodelle für Klagenfurt',
    metaTitle: '3D-Druck Messemodelle Klagenfurt | Holzmesse, Kärntner Messen | ekdruck.at',
    metaDescription: 'Messemodelle für Klagenfurt. Spezialist für die Internationale Holzmesse. Express-Lieferung nach Kärnten.',
    heroSubtitle: 'Professionelle Messemodelle für die Kärntner Landeshauptstadt. Spezialist für Holzmesse und regionale Events.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10 Tauernautobahn',
    localMessen: [
      { name: 'Internationale Holzmesse', location: 'Klagenfurt', type: 'Holz' },
      { name: 'Kärntner Baumesse', location: 'Klagenfurt', type: 'Bau' },
      { name: 'Klagenfurter Herbstmesse', location: 'Klagenfurt', type: 'Allgemein' },
    ],
    localAdvantages: [
      'Spezialist für Holzmesse-Modelle',
      'Express-Option für dringende Termine',
      'Erfahrung mit Kärntner Ausstellern',
      'Zuverlässige Alpen-Logistik',
    ],
    nearbyRegions: ['kaernten', 'villach', 'steiermark'],
    stats: { messen: '10+', lieferzeit: '5-7 Tage', kunden: '8+' },
  },

  'villach': {
    slug: 'villach',
    name: 'Villach',
    type: 'stadt',
    title: 'Messemodelle für Villach',
    metaTitle: '3D-Druck Messemodelle Villach | Events, Kirchtag | Express Kärnten | ekdruck.at',
    metaDescription: 'Messemodelle für Villach und Umgebung. Express-Lieferung nach Kärnten. Ideal für Events und regionale Präsentationen.',
    heroSubtitle: 'Professionelle Messemodelle für die Draustadt. Zuverlässige Lieferung für Events und Präsentationen in Villach.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A2',
    localMessen: [
      { name: 'Villacher Kirchtag', location: 'Villach', type: 'Tradition' },
      { name: 'Regionale Gewerbeausstellungen', location: 'Villach', type: 'Gewerbe' },
      { name: 'Tourismusmessen', location: 'Region', type: 'Tourismus' },
    ],
    localAdvantages: [
      'Gute Anbindung über A10',
      'Erfahrung mit Kärntner Events',
      'Tourismus-Kompetenz',
      'Flexible Lieferzeiten',
    ],
    nearbyRegions: ['kaernten', 'klagenfurt', 'tirol'],
    stats: { messen: '8+', lieferzeit: '5-7 Tage', kunden: '5+' },
  },

  'st-poelten': {
    slug: 'st-poelten',
    name: 'St. Pölten',
    type: 'stadt',
    title: 'Messemodelle für St. Pölten',
    metaTitle: '3D-Druck Messemodelle St. Pölten | NÖ Events | Express | ekdruck.at',
    metaDescription: 'Messemodelle für St. Pölten und Niederösterreich. Express-Lieferung in die NÖ Landeshauptstadt. Ideal für regionale Events.',
    heroSubtitle: 'Professionelle Messemodelle für die niederösterreichische Landeshauptstadt. Schnelle Lieferung über A1.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1 Westautobahn',
    localMessen: [
      { name: 'VAZ St. Pölten Events', location: 'VAZ St. Pölten', type: 'Events' },
      { name: 'Regionale Fachmessen', location: 'St. Pölten', type: 'Diverse' },
      { name: 'Wirtschaftskammer Events', location: 'St. Pölten', type: 'Wirtschaft' },
    ],
    localAdvantages: [
      'Schnelle Lieferung über A1',
      'Zentrale Lage in NÖ',
      'Flexible Terminplanung',
      'Express-Option verfügbar',
    ],
    nearbyRegions: ['niederoesterreich', 'wien'],
    stats: { messen: '10+', lieferzeit: '5-7 Tage', kunden: '8+' },
  },

  'innsbruck': {
    slug: 'innsbruck',
    name: 'Innsbruck',
    type: 'stadt',
    title: 'Messemodelle für Innsbruck',
    metaTitle: '3D-Druck Messemodelle Innsbruck | Messe Innsbruck, Interalpin | ekdruck.at',
    metaDescription: 'Professionelle Messemodelle für Innsbruck. Ideal für Messe Innsbruck, Interalpin und alpine Events. Express-Lieferung nach Tirol.',
    heroSubtitle: 'Hochwertige Messemodelle für die Tiroler Landeshauptstadt. Spezialist für alpine Messen und Wintersport-Events.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A13 Brennerautobahn',
    localMessen: [
      { name: 'Innsbrucker Herbstmesse', location: 'Messe Innsbruck', type: 'Allgemein' },
      { name: 'Interalpin', location: 'Messe Innsbruck', type: 'Wintersport' },
      { name: 'Tiroler Baumesse', location: 'Messe Innsbruck', type: 'Bau' },
      { name: 'FAFGA alpine superior', location: 'Messe Innsbruck', type: 'Gastronomie' },
    ],
    localAdvantages: [
      'Spezialist für alpine Messen',
      'Interalpin-Erfahrung',
      'Robuste Verpackung für Alpentransport',
      'Express-Option verfügbar',
    ],
    nearbyRegions: ['tirol', 'salzburg', 'vorarlberg'],
    stats: { messen: '15+', lieferzeit: '5-7 Tage', kunden: '10+' },
  },

  'dornbirn': {
    slug: 'dornbirn',
    name: 'Dornbirn',
    type: 'stadt',
    title: 'Messemodelle für Dornbirn',
    metaTitle: '3D-Druck Messemodelle Dornbirn | Dornbirner Messe, Gustav | ekdruck.at',
    metaDescription: 'Messemodelle für Dornbirn und Vorarlberg. Spezialist für Dornbirner Messe und Design-Events. Express-Lieferung ins Ländle.',
    heroSubtitle: 'Professionelle Messemodelle für die Messestadt im Ländle. Erfahrung mit Dornbirner Messe und Design-Events.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A14 Rheintal Autobahn',
    localMessen: [
      { name: 'Dornbirner Herbstmesse', location: 'Messe Dornbirn', type: 'Allgemein' },
      { name: 'SCHAU! Messe', location: 'Messe Dornbirn', type: 'Lifestyle' },
      { name: 'Gustav', location: 'Messe Dornbirn', type: 'Design' },
      { name: 'i - die Messe', location: 'Messe Dornbirn', type: 'Freizeit' },
    ],
    localAdvantages: [
      'Erfahrung mit Dornbirner Messe',
      'Design-Kompetenz für Gustav-Aussteller',
      'Nähe zu Schweiz und Deutschland',
      'Express-Option verfügbar',
    ],
    nearbyRegions: ['vorarlberg', 'tirol'],
    stats: { messen: '10+', lieferzeit: '5-7 Tage', kunden: '8+' },
  },
};

// Helper to get all regions as array
export const getAllRegions = (): RegionalMesseData[] => Object.values(regionalMesseData);

// Helper to get bundesländer only
export const getBundeslaender = (): RegionalMesseData[] => 
  getAllRegions().filter(r => r.type === 'bundesland');

// Helper to get cities only
export const getStaedte = (): RegionalMesseData[] => 
  getAllRegions().filter(r => r.type === 'stadt');

// Helper to get region by slug
export const getRegionBySlug = (slug: string): RegionalMesseData | undefined => 
  regionalMesseData[slug];
