// Extended data for regional Architekturmodell pages
import { CaseStudyData } from "@/components/landing/MesseCaseStudy";
import { MaterialRecommendation } from "@/components/landing/MesseMaterialTips";

export interface RegionalArchitekturExtendedData {
  caseStudy: CaseStudyData;
  materials: MaterialRecommendation[];
  industryFocus: string;
  uniqueSellingPoints: string[];
}

const defaultCaseStudy: CaseStudyData = {
  title: "Wettbewerbsmodell für Architekturbüro",
  industry: "Architektur",
  challenge: "Ein Architekturbüro benötigte ein maßstabsgetreues Modell im Maßstab 1:100 für einen Architekturwettbewerb. Die komplexe Fassadenstruktur und filigrane Details mussten präzise wiedergegeben werden.",
  solution: "Wir fertigten das Gebäudemodell in feiner Auflösung (0.1mm) aus weißem PLA. Die Fassadenelemente wurden separat gedruckt, Fenster aus transparentem PETG ergänzt. Die modulare Bauweise ermöglichte den Blick ins Innere.",
  result: "Das Modell überzeugte die Jury durch Detailgenauigkeit und professionelle Verarbeitung. Das Architekturbüro gewann den Wettbewerb und setzt seither auf 3D-gedruckte Modelle.",
  specs: {
    size: "40 x 30 x 25 cm",
    material: "PLA weiß + PETG transparent",
    time: "5 Werktage"
  },
  quote: "Die Qualität hat uns und die Jury begeistert. 3D-Druck ist für unsere Wettbewerbe jetzt Standard."
};

const defaultMaterials: MaterialRecommendation[] = [
  {
    name: "PLA Premium Weiß",
    description: "Der Klassiker für Architekturmodelle. Saubere, matte Oberfläche ideal für Studien- und Wettbewerbsmodelle.",
    bestFor: ["Studienmodelle", "Wettbewerbsmodelle", "Clean Design"],
    icon: "palette"
  },
  {
    name: "PETG Transparent",
    description: "Für Glasflächen und Fassadenelemente. Halbtransparent für moderne Architektur mit großen Glasfronten.",
    bestFor: ["Glasfassaden", "Fensterelemente", "Moderne Architektur"],
    icon: "shield"
  },
  {
    name: "PLA Leichtbau",
    description: "Optimiert für großformatige Modelle. Minimales Gewicht bei maximaler Stabilität – ideal für Transport.",
    bestFor: ["Großmodelle", "Städtebaumodelle", "Transportoptimiert"],
    icon: "feather"
  }
];

export const regionalArchitekturExtendedData: Record<string, RegionalArchitekturExtendedData> = {
  'wien': {
    caseStudy: {
      title: "Wettbewerbsmodell für Wiener Stadtentwicklungsprojekt",
      industry: "Stadtplanung & Architektur",
      challenge: "Ein renommiertes Wiener Architekturbüro benötigte ein detailliertes Modell im Maßstab 1:200 für einen städtebaulichen Wettbewerb. Das Ensemble aus mehreren Gebäuden musste die Umgebungsbebauung einbeziehen.",
      solution: "Wir fertigten ein modulares Stadtmodell mit abnehmbaren Gebäudeteilen. Die Bestandsbebauung wurde in Grau, der Neubau in Weiß realisiert. Transparente PETG-Elemente zeigten die Glasfassaden.",
      result: "Das Modell wurde zum Herzstück der Wettbewerbspräsentation. Die Jury lobte die Klarheit der räumlichen Darstellung. Das Büro erreichte den 2. Platz.",
      specs: {
        size: "80 x 60 x 30 cm",
        material: "PLA weiß/grau + PETG transparent",
        time: "7 Werktage"
      },
      quote: "Die modulare Bauweise war genial – wir konnten verschiedene Varianten direkt in der Präsentation zeigen."
    },
    materials: [
      {
        name: "PLA Premium Weiß",
        description: "Perfekt für Wiener Architektur. Saubere Oberflächen für elegante Stadtmodelle und Wettbewerbsmodelle.",
        bestFor: ["Wettbewerbsmodelle", "Stadtmodelle", "Präsentationsmodelle"],
        icon: "palette"
      },
      {
        name: "PETG Transparent",
        description: "Für Glasfassaden moderner Wiener Architektur. Klare Optik für Büro- und Wohnbauten.",
        bestFor: ["Glasfassaden", "Moderne Architektur", "Bürogebäude"],
        icon: "shield"
      },
      {
        name: "PLA Grau",
        description: "Ideal für Bestandsbebauung und Umgebungsmodelle. Kontrastreiche Darstellung in Stadtmodellen.",
        bestFor: ["Umgebungsmodelle", "Bestandsgebäude", "Kontextmodelle"],
        icon: "feather"
      }
    ],
    industryFocus: "Stadtplanung & Architektur in Wien",
    uniqueSellingPoints: [
      "Erfahrung mit Wiener Architekturbüros",
      "Modulare Stadtmodelle für Wettbewerbe",
      "Express für Wettbewerbstermine"
    ]
  },

  'oberoesterreich': {
    caseStudy: {
      title: "Industriegebäude-Modell für OÖ Unternehmen",
      industry: "Industrie & Gewerbe",
      challenge: "Ein oberösterreichisches Unternehmen plante einen Neubau seiner Produktionshalle und benötigte ein Präsentationsmodell für die Gemeinderatssitzung.",
      solution: "Wir fertigten ein detailliertes Modell im Maßstab 1:100 mit aufklappbarem Dach zur Visualisierung der Innenraumgestaltung. Die Umgebung wurde als Geländemodell ergänzt.",
      result: "Same-Day-Lieferung nach Wels. Das Modell überzeugte den Gemeinderat. Die Baugenehmigung wurde in Rekordzeit erteilt.",
      specs: {
        size: "60 x 40 x 20 cm",
        material: "PLA weiß + Geländemodell",
        time: "4 Werktage + Same-Day Lieferung"
      },
      quote: "Dank der persönlichen Abholung in Gunskirchen hatten wir das Modell rechtzeitig zur Sitzung. Baugenehmigung erhalten!"
    },
    materials: defaultMaterials,
    industryFocus: "Industrie- & Gewerbebau in Oberösterreich",
    uniqueSellingPoints: [
      "Lokaler Hersteller – nur 10 Minuten zur Abholung",
      "Same-Day-Service für dringende Präsentationen",
      "Erfahrung mit Industriebauten"
    ]
  },

  'steiermark': {
    caseStudy: {
      title: "Wohnbauprojekt-Modell für Grazer Architekturbüro",
      industry: "Wohnbau",
      challenge: "Ein Grazer Architekturbüro benötigte Modelle dreier Wohnbauvarianten für eine Investorenpräsentation. Die Varianten mussten vergleichbar und professionell dargestellt werden.",
      solution: "Wir fertigten drei Modelle im gleichen Maßstab (1:100) mit identischer Umgebungsdarstellung. Unterschiedliche Farbakzente machten die Varianten auf den ersten Blick unterscheidbar.",
      result: "Die parallele Darstellung überzeugte die Investoren. Variante B wurde gewählt, das Projekt mit 45 Wohneinheiten realisiert.",
      specs: {
        size: "3x 35 x 25 x 20 cm",
        material: "PLA weiß + farbige Akzente",
        time: "6 Werktage"
      },
      quote: "Drei Varianten parallel zu vergleichen war der Schlüssel. So eine schnelle Umsetzung wäre im Modellbau unmöglich."
    },
    materials: defaultMaterials,
    industryFocus: "Wohnbau & Architektur in der Steiermark",
    uniqueSellingPoints: [
      "Express-Lieferung nach Graz",
      "Parallele Variantenmodelle möglich",
      "TU Graz Kooperationserfahrung"
    ]
  },

  'salzburg': {
    caseStudy: {
      title: "Sanierungsmodell für Salzburger Altstadt",
      industry: "Denkmalpflege & Sanierung",
      challenge: "Ein Salzburger Architekturbüro plante die Sanierung eines denkmalgeschützten Gebäudes in der UNESCO-Altstadt. Das Modell musste den Bestand und die geplanten Änderungen zeigen.",
      solution: "Wir erstellten ein zweiteiliges Modell: den Bestand in grauem PLA und die geplante Sanierung als weißen Overlay. Beide Teile konnten übereinandergelegt werden.",
      result: "Das Modell überzeugte die Denkmalschutzbehörde. Die Sanierungsgenehmigung wurde erteilt.",
      specs: {
        size: "45 x 35 x 40 cm",
        material: "PLA grau + weiß (zweiteilig)",
        time: "6 Werktage"
      },
      quote: "Bestand und Planung übereinander zu legen war brillant. Die Behörde war sofort überzeugt."
    },
    materials: [
      {
        name: "PLA Premium Weiß",
        description: "Für Neubauten und Sanierungskonzepte. Klare Formensprache für Salzburger Architektur.",
        bestFor: ["Sanierungsmodelle", "Neubaupläne", "Präsentationsmodelle"],
        icon: "palette"
      },
      {
        name: "PLA Grau",
        description: "Für Bestandsgebäude und historische Kontextmodelle. Authentische Darstellung.",
        bestFor: ["Bestandsaufnahme", "Historische Gebäude", "Kontextmodelle"],
        icon: "shield"
      },
      {
        name: "PETG Transparent",
        description: "Für moderne Ergänzungen und Glaselemente in historischem Kontext.",
        bestFor: ["Glasanbauten", "Moderne Eingriffe", "Dachverglasungen"],
        icon: "feather"
      }
    ],
    industryFocus: "Sanierung & Denkmalpflege in Salzburg",
    uniqueSellingPoints: [
      "Erfahrung mit denkmalgeschützten Gebäuden",
      "Bestand-/Neubau-Overlay-Technik",
      "Schnelle Lieferung über A1"
    ]
  },

  'kaernten': {
    caseStudy: {
      title: "Holzbau-Architekturmodell für Kärntner Planer",
      industry: "Holzbau & Architektur",
      challenge: "Ein Kärntner Architekturbüro plante ein innovatives Holzhaus und benötigte ein Modell, das die Holzkonstruktion authentisch darstellt.",
      solution: "Wir verwendeten holzfarbenes PLA mit sichtbarer Maserung. Das Modell zeigte die Konstruktion als Schnittmodell mit freiliegender Holzstruktur.",
      result: "Der Bauherr war begeistert von der authentischen Darstellung. Das Haus wurde wie geplant realisiert.",
      specs: {
        size: "50 x 40 x 30 cm",
        material: "PLA Holzoptik + weiß",
        time: "5 Werktage"
      },
      quote: "Die Holzoptik war erstaunlich authentisch. Unser Bauherr konnte sich das Haus perfekt vorstellen."
    },
    materials: [
      {
        name: "PLA Holzoptik",
        description: "Authentische Holzmaserung für Kärntner Holzbau-Architektur. Naturnahes Erscheinungsbild.",
        bestFor: ["Holzhäuser", "Alpine Architektur", "Holzkonstruktionen"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Holzbau & alpine Architektur in Kärnten",
    uniqueSellingPoints: [
      "Holzoptik-Materialien für authentische Modelle",
      "Erfahrung mit alpiner Architektur",
      "Schnittmodelle für Konstruktionsdarstellungen"
    ]
  },

  'tirol': {
    caseStudy: {
      title: "Bergstation-Architekturmodell für Tiroler Seilbahnprojekt",
      industry: "Infrastruktur & alpine Architektur",
      challenge: "Ein Innsbrucker Architekturbüro entwarf eine neue Bergstation und brauchte ein topografisches Modell mit integriertem Gebäude für die Genehmigungspräsentation.",
      solution: "Basierend auf Höhendaten erstellten wir ein maßstabsgetreues Geländemodell mit integrierter Bergstation. Das Gebäude war abnehmbar, um die Geländeintegration zu zeigen.",
      result: "Das Modell war entscheidend für die Baugenehmigung. Die Behörde konnte die Landschaftsintegration sofort nachvollziehen.",
      specs: {
        size: "100 x 70 x 35 cm",
        material: "PLA weiß/grau + Geländemodell",
        time: "8 Werktage"
      },
      quote: "Ohne das Geländemodell hätte die Behörde die Landschaftsintegration nie so schnell verstanden."
    },
    materials: [
      {
        name: "PLA Alpine Weiß",
        description: "Perfekt für Bergarchitektur und alpine Geländemodelle. Authentische Darstellung.",
        bestFor: ["Bergstationen", "Geländemodelle", "Alpine Architektur"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Alpine Architektur & Infrastruktur in Tirol",
    uniqueSellingPoints: [
      "Topografische Geländemodelle aus Höhendaten",
      "Erfahrung mit Bergstationen",
      "Robuster Alpentransport"
    ]
  },

  'vorarlberg': {
    caseStudy: {
      title: "Holzbau-Wettbewerbsmodell für Vorarlberger Architekten",
      industry: "Baukultur Vorarlberg",
      challenge: "Ein Vorarlberger Architekturbüro – bekannt für die regionale Baukultur – benötigte ein Wettbewerbsmodell, das die innovative Holzkonstruktion eines öffentlichen Gebäudes zeigt.",
      solution: "Wir druckten ein Modell im Maßstab 1:50 mit sichtbarer Konstruktion. Die Holzelemente in Holzoptik-PLA, die Glasfassade in transparentem PETG.",
      result: "Das Modell gewann den 1. Platz im Wettbewerb. Die Jury hob die Qualität der Modelldarstellung hervor.",
      specs: {
        size: "55 x 40 x 30 cm",
        material: "PLA Holzoptik + PETG transparent",
        time: "5 Werktage"
      },
      quote: "Die Kombination aus Holzoptik und Transparenz hat die Jury überzeugt. Wettbewerb gewonnen!"
    },
    materials: [
      {
        name: "PLA Holzoptik",
        description: "Für Vorarlberger Baukultur. Authentische Darstellung der regionalen Holzbauarchitektur.",
        bestFor: ["Holzkonstruktionen", "Vorarlberger Baukultur", "Öffentliche Gebäude"],
        icon: "palette"
      },
      {
        name: "PETG Transparent",
        description: "Für großflächige Glasfassaden der modernen Vorarlberger Architektur.",
        bestFor: ["Glasfassaden", "Lichtdurchflutete Räume", "Moderne Architektur"],
        icon: "shield"
      },
      {
        name: "PLA Matt Schwarz",
        description: "Für kontraststarke Wettbewerbsmodelle. Edle Optik für Präsentationen.",
        bestFor: ["Wettbewerbsmodelle", "Kontrastmodelle", "Designarchitektur"],
        icon: "feather"
      }
    ],
    industryFocus: "Baukultur & Holzbau in Vorarlberg",
    uniqueSellingPoints: [
      "Erfahrung mit Vorarlberger Baukultur",
      "Holzoptik-Materialien verfügbar",
      "Grenznahe Lieferung CH/DE"
    ]
  },

  'niederoesterreich': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Gemeindezentrum-Modell für NÖ Architektenwettbewerb",
      industry: "Kommunalbau"
    },
    materials: defaultMaterials,
    industryFocus: "Kommunalbau & Wohnbau in Niederösterreich",
    uniqueSellingPoints: [
      "Zentrale Lage zwischen Wien und Linz",
      "Erfahrung mit Gemeinde-Projekten",
      "Flexible Lieferoptionen"
    ]
  },

  'burgenland': {
    caseStudy: {
      title: "Weingut-Architekturmodell für burgenländischen Investor",
      industry: "Wein & Architektur",
      challenge: "Ein burgenländisches Weingut plante einen architektonisch anspruchsvollen Neubau für Verkostungsräume und benötigte ein Modell für die Investorenpräsentation.",
      solution: "Wir fertigten ein Modell im Maßstab 1:50 mit Weinberglandschaft. Das Gebäude wurde in weißem PLA, die umliegenden Weinberge stilisiert in Grün dargestellt.",
      result: "Das Modell überzeugte zwei Investoren. Der Bau konnte planmäßig starten.",
      specs: {
        size: "70 x 50 x 25 cm",
        material: "PLA weiß + Landschaftselemente",
        time: "6 Werktage"
      },
      quote: "Mit dem Modell konnten wir die Vision greifbar machen. Die Investoren sagten sofort zu."
    },
    materials: defaultMaterials,
    industryFocus: "Weingut-Architektur & Tourismus im Burgenland",
    uniqueSellingPoints: [
      "Erfahrung mit Weingut-Architektur",
      "Landschaftsmodelle möglich",
      "Schnelle Lieferung über Wien"
    ]
  },

  'linz': {
    caseStudy: {
      title: "Stadtentwicklungs-Modell für Linzer Architekturbüro",
      industry: "Stadtplanung",
      challenge: "Ein Linzer Büro benötigte ein Quartiers-Modell im Maßstab 1:500 für eine Bürgerbeteiligung. Das Modell musste verschiedene Bauphasen zeigbar machen.",
      solution: "Wir fertigten ein modulares Modell mit herausnehmbaren Bauphasen. Jede Phase war farblich codiert – Same-Day-Lieferung nach Linz.",
      result: "Das interaktive Modell ermöglichte konstruktive Bürgerbeteiligung. Das Projekt wurde ohne Einsprüche genehmigt.",
      specs: {
        size: "90 x 70 x 20 cm",
        material: "PLA mehrfarbig, modular",
        time: "5 Werktage + Same-Day"
      },
      quote: "Die Bürger konnten die Entwicklung Schritt für Schritt nachvollziehen. Keine Einsprüche – ein Novum!"
    },
    materials: defaultMaterials,
    industryFocus: "Stadtplanung & Kreativwirtschaft in Linz",
    uniqueSellingPoints: [
      "Nur 20 Minuten entfernt",
      "Same-Day-Delivery nach Linz",
      "Modulare Modelle für Bürgerbeteiligung"
    ]
  },

  'wels': {
    caseStudy: {
      title: "Gewerbepark-Modell für Welser Entwickler",
      industry: "Gewerbebau",
      challenge: "Ein Welser Projektentwickler benötigte ein Modell eines geplanten Gewerbeparks für die Vermarktung an potenzielle Mieter.",
      solution: "Wir erstellten ein maßstabsgetreues Modell mit beschrifteten Parzellen. Persönliche Abholung in Gunskirchen.",
      result: "80% der Flächen waren noch vor Baubeginn vermietet.",
      specs: {
        size: "50 x 40 x 15 cm",
        material: "PLA weiß + beschriftete Parzellen",
        time: "3 Werktage"
      },
      quote: "Persönliche Abholung in 10 Minuten – und das Modell hat sich sofort bezahlt gemacht."
    },
    materials: defaultMaterials,
    industryFocus: "Gewerbebau & Entwicklung in Wels",
    uniqueSellingPoints: [
      "Direkter Nachbar – 10 Minuten",
      "Persönliche Abholung möglich",
      "Last-Minute-Service"
    ]
  },

  'graz': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Architektur & Stadtplanung in Graz",
    uniqueSellingPoints: [
      "Express-Lieferung nach Graz",
      "TU Graz Kooperationserfahrung",
      "Flexible Terminplanung"
    ]
  },

  'klagenfurt': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Holzbau-Architekturmodell für Klagenfurter Projekt",
      industry: "Holzbau & Architektur"
    },
    materials: [
      {
        name: "PLA Holzoptik",
        description: "Authentische Holzmaserung für Kärntner Holzbau-Architektur.",
        bestFor: ["Holzkonstruktionen", "Alpine Architektur", "Holzhäuser"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Holzbau & Architektur in Klagenfurt",
    uniqueSellingPoints: [
      "Holzoptik-Materialien verfügbar",
      "Erfahrung mit Kärntner Architekten",
      "Express für Wettbewerbe"
    ]
  },

  'villach': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Architektur & Tourismus in Villach",
    uniqueSellingPoints: [
      "Zuverlässige Lieferung nach Villach",
      "Tourismus-Architektur Kompetenz",
      "Flexible Lieferzeiten"
    ]
  },

  'st-poelten': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Architektur & Verwaltungsbau in St. Pölten",
    uniqueSellingPoints: [
      "Schnelle Lieferung über A1",
      "Erfahrung mit öffentlichen Bauten",
      "Zentrale Lage für ganz NÖ"
    ]
  },

  'innsbruck': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Alpines Architekturmodell für Innsbrucker Büro",
      industry: "Alpine Architektur"
    },
    materials: [
      {
        name: "PLA Alpine Weiß",
        description: "Perfekt für Bergarchitektur und Geländemodelle.",
        bestFor: ["Bergstationen", "Geländemodelle", "Alpine Projekte"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Alpine Architektur & Infrastruktur in Innsbruck",
    uniqueSellingPoints: [
      "Topografische Geländemodelle",
      "Erfahrung mit Bergarchitektur",
      "Robuster Alpentransport"
    ]
  },

  'dornbirn': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Baukultur-Modell für Dornbirner Architekturbüro",
      industry: "Baukultur Vorarlberg"
    },
    materials: [
      {
        name: "PLA Design Matt",
        description: "Edle matte Oberfläche für Vorarlberger Architekturmodelle.",
        bestFor: ["Baukultur-Projekte", "Wettbewerbsmodelle", "Design-Architektur"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Baukultur & Design-Architektur in Dornbirn",
    uniqueSellingPoints: [
      "Erfahrung mit Vorarlberger Baukultur",
      "Design-Kompetenz",
      "Grenznahe Lieferung CH/DE"
    ]
  }
};

export const getArchitekturExtendedDataBySlug = (slug: string): RegionalArchitekturExtendedData => {
  return regionalArchitekturExtendedData[slug] || {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Architekturmodelle",
    uniqueSellingPoints: [
      "Professionelle 3D-gedruckte Architekturmodelle",
      "Express-Lieferung möglich",
      "Persönliche Beratung"
    ]
  };
};
