// Extended data for regional Messemodell pages
// Case studies, material recommendations, and industry focus per region

import { CaseStudyData } from "@/components/landing/MesseCaseStudy";
import { MaterialRecommendation } from "@/components/landing/MesseMaterialTips";

export interface RegionalExtendedData {
  caseStudy: CaseStudyData;
  materials: MaterialRecommendation[];
  industryFocus: string;
  uniqueSellingPoints: string[];
}

// Default case study for regions without specific data
const defaultCaseStudy: CaseStudyData = {
  title: "Eyecatcher-Modell für Fachmesse",
  industry: "Messebau",
  challenge: "Ein Aussteller benötigte ein beeindruckendes Präsentationsmodell für seinen Messestand. Das Modell musste leicht transportierbar, aber dennoch robust und detailreich sein.",
  solution: "Wir fertigten ein mehrteiliges Modell aus hochwertigem PETG. Die modulare Konstruktion ermöglichte einfachen Transport, während die Oberflächenbehandlung eine professionelle Optik garantierte.",
  result: "Das Modell wurde zum Blickfang am Stand. Der Kunde berichtete von deutlich mehr Standbesuchern und qualitativ besseren Gesprächen mit potenziellen Kunden.",
  specs: {
    size: "80 x 60 x 40 cm",
    material: "PETG weiß, lackiert",
    time: "5 Werktage"
  },
  quote: "Das Modell war der absolute Eyecatcher an unserem Stand. So viele Besucher wie dieses Jahr hatten wir noch nie!"
};

// Default materials
const defaultMaterials: MaterialRecommendation[] = [
  {
    name: "PLA Premium",
    description: "Der Allrounder für Messemodelle. Hervorragende Oberflächenqualität, einfach zu lackieren und umweltfreundlich.",
    bestFor: ["Architekturmodelle", "Designobjekte", "Detailreiche Präsentationen"],
    icon: "palette"
  },
  {
    name: "PETG",
    description: "Robust und widerstandsfähig. Ideal für Modelle, die häufig transportiert oder angefasst werden.",
    bestFor: ["Interaktive Exponate", "Outdoor-Modelle", "Langlebige Präsentationsobjekte"],
    icon: "shield"
  },
  {
    name: "PLA Leichtbau",
    description: "Optimiert für minimales Gewicht bei maximaler Stabilität. Perfekt für große Objekte und einfachen Transport.",
    bestFor: ["Großformatige Modelle", "Häufiger Transport", "Messemodelle über 50cm"],
    icon: "feather"
  }
];

export const regionalExtendedData: Record<string, RegionalExtendedData> = {
  'wien': {
    caseStudy: {
      title: "Architekturmodell für BAUEN & WOHNEN Wien",
      industry: "Architektur & Bau",
      challenge: "Ein Wiener Architekturbüro benötigte ein detailreiches Gebäudemodell im Maßstab 1:100 für die BAUEN & WOHNEN Messe. Das Modell musste abnehmbare Etagen haben, um den Innenbereich zu zeigen.",
      solution: "Wir konstruierten ein mehrstöckiges Modell mit abnehmbaren Etagen. Jedes Stockwerk wurde einzeln gedruckt und perfekt aufeinander abgestimmt. Die Fassade erhielt eine detaillierte Fensterstruktur.",
      result: "Der Messestand wurde zum Publikumsmagnet. Das interaktive Element der abnehmbaren Etagen führte zu intensiven Gesprächen mit potenziellen Bauherren.",
      specs: {
        size: "50 x 40 x 35 cm",
        material: "PLA weiß, Fenster transparent",
        time: "7 Werktage"
      },
      quote: "Die Qualität hat uns und unsere Messebesucher begeistert. Das Modell hat unseren Stand definitiv aufgewertet."
    },
    materials: [
      {
        name: "PLA Premium Weiß",
        description: "Perfekt für Architekturmodelle. Saubere Oberflächen, ideal für minimalistische Designs typisch für Wiener Architektur.",
        bestFor: ["Architekturmodelle", "Gebäudeansichten", "Clean Design"],
        icon: "palette"
      },
      {
        name: "PETG Transparent",
        description: "Für Glasfassaden und Fensterelemente. Klare Optik für moderne Architekturvisualisierungen.",
        bestFor: ["Fassadenelemente", "Glasdächer", "Moderne Architektur"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für großformatige Modelle, die nach Wien transportiert werden müssen. Minimales Gewicht, maximale Wirkung.",
        bestFor: ["Großmodelle", "Stadtansichten", "Gebäudekomplexe"],
        icon: "feather"
      }
    ],
    industryFocus: "Architektur & Immobilien in Wien",
    uniqueSellingPoints: [
      "Spezialisiert auf Architekturmodelle für Wiener Architekturbüros",
      "Express-Lieferung direkt zur Reed Messe Wien",
      "Erfahrung mit BAUEN & WOHNEN Ausstellern"
    ]
  },

  'oberoesterreich': {
    caseStudy: {
      title: "Produktpräsentation für die Welser Messe",
      industry: "Präsentation & Anschauung",
      challenge: "Ein oberösterreichisches Unternehmen benötigte ein überdimensionales Schnittmodell eines Produkts für die Welser Messe. Das Modell sollte die inneren Komponenten sichtbar machen.",
      solution: "Wir fertigten ein 60cm großes Schnittmodell mit herausnehmbaren Elementen. Die farbige Kennzeichnung der Komponenten ermöglichte eine klare Visualisierung. Die Fertigung erfolgte in nur 3 Tagen durch unsere lokale Nähe.",
      result: "Same-Day-Lieferung zur Messe Wels. Das interaktive Modell generierte hohes Interesse und ermöglichte anschauliche Erklärungen am Stand.",
      specs: {
        size: "60 x 45 x 45 cm",
        material: "PLA mehrfarbig",
        time: "3 Werktage + Same-Day Lieferung"
      },
      quote: "Als lokaler Partner war ekdruck unschlagbar. Abholung in Gunskirchen, und 30 Minuten später stand das Modell am Messestand in Wels."
    },
    materials: defaultMaterials,
    industryFocus: "Präsentationsmodelle für oberösterreichische Unternehmen",
    uniqueSellingPoints: [
      "Lokaler Hersteller – nur 10 Minuten zur Messe Wels",
      "Persönliche Abholung in Gunskirchen möglich",
      "Same-Day-Service für Last-Minute-Projekte"
    ]
  },

  'steiermark': {
    caseStudy: {
      title: "Demonstrationsmodell für Häuslbauermesse Graz",
      industry: "Bau & Handwerk",
      challenge: "Ein steirisches Bauunternehmen wollte auf der Häuslbauermesse ein anschauliches Modell präsentieren, das die Bauweise eines energieeffizienten Hauses zeigt.",
      solution: "Wir erstellten ein aufklappbares Hausmodell im Maßstab 1:50, das die verschiedenen Dämmschichten und Konstruktionselemente zeigt. Farbcodierte Elemente machten die Bauweise für Laien verständlich.",
      result: "Das Modell wurde zum Gesprächsstarter für komplexe Beratungen. Viele Interessenten fotografierten das Modell für spätere Referenz.",
      specs: {
        size: "70 x 50 x 40 cm",
        material: "PLA mehrfarbig + transparente Elemente",
        time: "6 Werktage"
      },
      quote: "Endlich konnten wir unseren Kunden zeigen, was sich hinter den Wänden verbirgt. Das Modell hat komplizierte Dinge einfach gemacht."
    },
    materials: [
      {
        name: "PLA Mehrfarbig",
        description: "Ideal für farbcodierte Schnittmodelle. Unterschiedliche Farben für verschiedene Materialschichten.",
        bestFor: ["Schnittmodelle", "Lehrmodelle", "Materialvisualisierung"],
        icon: "palette"
      },
      {
        name: "PETG Robust",
        description: "Für interaktive Modelle, die häufig angefasst werden. Kratzfest und langlebig.",
        bestFor: ["Hands-on Exponate", "Demonstrationsmodelle", "Interaktive Präsentationen"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für große Architekturmodelle. Einfacher Transport zur Messe Graz.",
        bestFor: ["Gebäudemodelle", "Hausmodelle", "Großprojekte"],
        icon: "feather"
      }
    ],
    industryFocus: "Bau & Architektur in der Steiermark",
    uniqueSellingPoints: [
      "Erfahrung mit Häuslbauermesse-Ausstellern",
      "Express-Lieferung zur Messe Graz",
      "Spezialist für aufklappbare Schnittmodelle"
    ]
  },

  'salzburg': {
    caseStudy: {
      title: "Designmodell für Art & Antique Salzburg",
      industry: "Kunst & Design",
      challenge: "Eine Salzburger Galerie benötigte ein hochdetailliertes Modell einer geplanten Skulptur für die Art & Antique. Das Modell sollte die Oberflächentextur des finalen Kunstwerks authentisch wiedergeben.",
      solution: "Wir druckten das Modell in feiner Auflösung (0.1mm Schichthöhe) und veredelten es mit einer speziellen Oberflächenbehandlung, die die geplante Bronze-Patina simulierte.",
      result: "Das Modell wurde zum Verkaufsargument für das 50.000€ Kunstwerk. Mehrere Sammler zeigten Interesse nach Betrachtung des Modells.",
      specs: {
        size: "35 x 25 x 60 cm",
        material: "PLA, patiniert",
        time: "5 Werktage"
      },
      quote: "Die Detailtreue war beeindruckend. Unsere Kunden konnten sich das finale Werk perfekt vorstellen."
    },
    materials: [
      {
        name: "PLA Fine Detail",
        description: "Ultrafeine Auflösung für kunstvolle Details. Perfekt für Skulptur-Vorschauen und Designmodelle.",
        bestFor: ["Skulpturmodelle", "Kunstobjekte", "Detailmodelle"],
        icon: "palette"
      },
      {
        name: "PLA mit Spezialfinish",
        description: "Verschiedene Oberflächenveredelungen möglich: Bronze, Marmor, Holz-Optik.",
        bestFor: ["Kunstgalerien", "Hochwertige Präsentationen", "Luxusprodukte"],
        icon: "shield"
      },
      {
        name: "PETG Kristallklar",
        description: "Für transparente Kunstobjekte und Designstücke. Glasklare Optik.",
        bestFor: ["Glas-Imitate", "Transparente Kunst", "Lichtinstallationen"],
        icon: "feather"
      }
    ],
    industryFocus: "Kunst, Kultur & Tourismus in Salzburg",
    uniqueSellingPoints: [
      "Erfahrung mit Salzburger Galerien und Museen",
      "Spezialfinishes für hochwertige Kunstmodelle",
      "Schnelle Lieferung über A1 Westautobahn"
    ]
  },

  'kaernten': {
    caseStudy: {
      title: "Holzstruktur-Modell für Internationale Holzmesse",
      industry: "Holz & Forstwirtschaft",
      challenge: "Ein Kärntner Holzbauunternehmen wollte ein innovatives Holzbausystem auf der Internationalen Holzmesse in Klagenfurt präsentieren. Das Modell sollte die Holzstruktur authentisch wiedergeben.",
      solution: "Wir verwendeten spezielles holzfarbenes PLA mit sichtbarer Maserungsstruktur. Das modulare System wurde maßstabsgetreu nachgebaut, sodass die Verbindungstechnik demonstriert werden konnte.",
      result: "Das Modell überzeugte Architekten und Bauherren von der innovativen Bauweise. Mehrere Großaufträge folgten nach der Messe.",
      specs: {
        size: "100 x 80 x 60 cm",
        material: "PLA Holzoptik",
        time: "8 Werktage"
      },
      quote: "Perfekt für die Holzmesse! Das Material sah täuschend echt aus und die Besucher waren begeistert vom modularen Konzept."
    },
    materials: [
      {
        name: "PLA Holzoptik",
        description: "Authentische Holzmaserung für Holzbau-Modelle. Ideal für die Internationale Holzmesse.",
        bestFor: ["Holzkonstruktionen", "Möbeldesign", "Holzarchitektur"],
        icon: "palette"
      },
      {
        name: "PETG Natur",
        description: "Natürliche Materialoptik. Robust und wetterfest für Outdoor-Präsentationen.",
        bestFor: ["Outdoor-Modelle", "Alpenhütten", "Naturprojekte"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für große Konstruktionsmodelle. Leicht zu transportieren über die Tauernautobahn.",
        bestFor: ["Großbauprojekte", "Gebäudekomplexe", "Dachkonstruktionen"],
        icon: "feather"
      }
    ],
    industryFocus: "Holzbau & Forstwirtschaft in Kärnten",
    uniqueSellingPoints: [
      "Spezialist für Holzmesse-Modelle",
      "Authentische Holzoptik-Materialien",
      "Erfahrung mit alpiner Logistik"
    ]
  },

  'tirol': {
    caseStudy: {
      title: "Skigebiet-Modell für Interalpin Innsbruck",
      industry: "Tourismus & Wintersport",
      challenge: "Ein Tiroler Seilbahnunternehmen benötigte ein topografisches Modell eines geplanten Skigebietsausbaus für die Interalpin-Messe. Die Geländeform und Lifttrassen mussten exakt dargestellt werden.",
      solution: "Basierend auf Höhendaten erstellten wir ein maßstabsgetreues Geländemodell mit markierten Pistenflächen und integrierten Seilbahntrassen. Abnehmbareabnehmbare Seilbahnstützen zeigten die Details.",
      result: "Das Modell wurde zentral am Stand positioniert und ermöglichte Investorengespräche auf einer ganz neuen Ebene. Das Projekt erhielt grünes Licht.",
      specs: {
        size: "120 x 90 x 30 cm",
        material: "PLA weiß + farbige Akzente",
        time: "10 Werktage"
      },
      quote: "Die Investoren konnten das Projekt endlich greifen. Das Modell war entscheidend für die Projektgenehmigung."
    },
    materials: [
      {
        name: "PLA Schnee-Weiß",
        description: "Perfekt für Gebirgsmodelle und Skigebiet-Visualisierungen. Authentische Schneeoptik.",
        bestFor: ["Topografie-Modelle", "Skigebiete", "Berglandschaften"],
        icon: "palette"
      },
      {
        name: "PETG Frost-Optik",
        description: "Halbtransparent für Eis- und Gletschereffekte. Robust für den Transport ins Gebirge.",
        bestFor: ["Gletschermodelle", "Eisstrukturen", "Alpine Objekte"],
        icon: "shield"
      },
      {
        name: "PLA Ultra-Leicht",
        description: "Für große Geländemodelle. Minimales Gewicht für den Transport nach Tirol.",
        bestFor: ["Großflächige Topografie", "Panorama-Modelle", "Regionsdarstellungen"],
        icon: "feather"
      }
    ],
    industryFocus: "Tourismus & Wintersport in Tirol",
    uniqueSellingPoints: [
      "Spezialist für Interalpin-Aussteller",
      "Erfahrung mit topografischen Geländemodellen",
      "Robuste Verpackung für Alpentransport"
    ]
  },

  'vorarlberg': {
    caseStudy: {
      title: "Design-Möbelmodell für Gustav Dornbirn",
      industry: "Design & Lifestyle",
      challenge: "Ein Vorarlberger Möbeldesigner wollte auf der Gustav-Messe ein neuartiges Möbelkonzept präsentieren, bevor die Produktion anlief. Die organischen Formen waren mit traditionellem Modellbau nicht umsetzbar.",
      solution: "Wir druckten ein maßstabsgetreues Modell (1:5) der organisch geformten Sitzgruppe. Die fließenden Linien wurden durch optimierte Druckausrichtung perfekt wiedergegeben.",
      result: "Das Design gewann den Gustav Design Award. Mehrere Möbelhäuser zeigten Kaufinteresse noch vor Produktionsstart.",
      specs: {
        size: "40 x 35 x 20 cm",
        material: "PLA matt schwarz",
        time: "4 Werktage"
      },
      quote: "Ohne 3D-Druck hätten wir das organische Design niemals so überzeugend präsentieren können. Der Award war das Ergebnis!"
    },
    materials: [
      {
        name: "PLA Premium Matt",
        description: "Edle matte Oberfläche für Design-Präsentationen. Perfekt für die Gustav-Messe.",
        bestFor: ["Möbeldesign", "Produktdesign", "Lifestyle-Objekte"],
        icon: "palette"
      },
      {
        name: "PETG Hochglanz",
        description: "Glänzende Oberfläche für moderne Designkonzepte. Kratzfest und langlebig.",
        bestFor: ["Hochglanz-Design", "Premium-Produkte", "Showpieces"],
        icon: "shield"
      },
      {
        name: "PLA Organisch",
        description: "Optimiert für fließende, organische Formen. Minimale Nachbearbeitung.",
        bestFor: ["Organische Designs", "Ergonomische Formen", "Skulpturale Möbel"],
        icon: "feather"
      }
    ],
    industryFocus: "Design & Lifestyle im Ländle",
    uniqueSellingPoints: [
      "Partner für Gustav Design-Aussteller",
      "Erfahrung mit organischen Designformen",
      "Grenznahe Lieferung nach CH/DE möglich"
    ]
  },

  'niederoesterreich': {
    caseStudy: {
      title: "Agrar-Demonstrationsmodell für AB HOF Messe",
      industry: "Landwirtschaft & Direktvermarktung",
      challenge: "Ein niederösterreichischer Agrarbetrieb wollte auf der AB HOF Messe ein neuartiges Verarbeitungskonzept für Direktvermarkter präsentieren.",
      solution: "Wir erstellten ein anschauliches Demonstrationsmodell mit beweglichen Elementen, das den Verarbeitungsprozess visualisiert. Farbcodierte Bereiche zeigten die verschiedenen Prozessschritte.",
      result: "Das interaktive Modell war der Hauptanziehungspunkt am Stand. Zahlreiche Direktvermarkter zeigten Interesse an dem Konzept.",
      specs: {
        size: "55 x 40 x 30 cm",
        material: "PETG robust + bewegliche Teile",
        time: "6 Werktage"
      },
      quote: "Endlich konnten wir zeigen, wie einfach unser System funktioniert. Das bewegliche Modell hat alles verständlich gemacht."
    },
    materials: defaultMaterials,
    industryFocus: "Landwirtschaft & Regionalmessen in NÖ",
    uniqueSellingPoints: [
      "Erfahrung mit Wieselburger Messe und AB HOF",
      "Zentrale Lage zwischen Wien und Linz",
      "Funktionsmodelle mit beweglichen Teilen"
    ]
  },

  'burgenland': {
    caseStudy: {
      title: "Weingut-Modell für Weinmesse",
      industry: "Wein & Tourismus",
      challenge: "Ein burgenländisches Weingut plante einen Neubau des Verkostungsraums und wollte das Konzept potenziellen Investoren auf einer Weinmesse präsentieren.",
      solution: "Wir fertigten ein detailliertes Architekturmodell des geplanten Weingut-Neubaus. Die umliegenden Weinberge wurden stilisiert dargestellt, um das Ensemble zu zeigen.",
      result: "Das Modell überzeugte zwei Investoren, die sich am Projekt beteiligten. Der Bau konnte früher als geplant beginnen.",
      specs: {
        size: "70 x 50 x 25 cm",
        material: "PLA weiß + Landschaftselemente",
        time: "7 Werktage"
      },
      quote: "Mit dem Modell konnten wir unsere Vision greifbar machen. Die Investoren waren sofort überzeugt."
    },
    materials: defaultMaterials,
    industryFocus: "Wein & Tourismus im Burgenland",
    uniqueSellingPoints: [
      "Erfahrung mit Wein- und Tourismusmessen",
      "Schnelle Lieferung über Wien/A4",
      "Architekturmodelle für Weingüter"
    ]
  },

  // Stadt-spezifische Daten
  'linz': {
    caseStudy: {
      title: "Kreativ-Installation für Tabakfabrik Linz",
      industry: "Kreativwirtschaft",
      challenge: "Ein Linzer Kreativstudio benötigte ein großformatiges Modell für eine Installation in der Tabakfabrik. Die geometrisch komplexe Form war mit herkömmlichen Methoden nicht realisierbar.",
      solution: "Wir druckten das Modell in Segmenten und fügten es nahtlos zusammen. Die innere Wabenstruktur reduzierte das Gewicht um 70% bei voller Stabilität.",
      result: "Die Installation wurde zum Publikumsliebling des Events. Das Studio erhielt mehrere Folgeaufträge für ähnliche Projekte.",
      specs: {
        size: "150 x 100 x 80 cm",
        material: "PLA weiß, mehrteilig",
        time: "5 Werktage + Same-Day Lieferung"
      },
      quote: "Die Nähe zu ekdruck war ein Riesenvorteil. Wir konnten das Modell selbst abholen und sofort einsetzen."
    },
    materials: defaultMaterials,
    industryFocus: "Kreativwirtschaft & Design in Linz",
    uniqueSellingPoints: [
      "Nur 20 Minuten von Linz entfernt",
      "Same-Day-Delivery nach Linz",
      "Partner für Tabakfabrik und Design Center Events"
    ]
  },

  'wels': {
    caseStudy: {
      title: "Landmaschinen-Demonstrationsmodell für AGRARIA",
      industry: "Landwirtschaft",
      challenge: "Ein Aussteller auf der AGRARIA Wels benötigte ein maßstabsgetreues Demonstrationsmodell einer neuen Landmaschine. Das Modell sollte funktionale Details zeigen.",
      solution: "Wir fertigten ein detailliertes Modell im Maßstab 1:10 mit beweglichen Elementen. Die Konstruktion ermöglichte das Öffnen wichtiger Komponenten zur Erklärung.",
      result: "Das Modell war leichter und detaillierter als vergleichbare Metallmodelle. Der Kunde setzte es auch nach der Messe für Kundenbesuche ein.",
      specs: {
        size: "45 x 25 x 20 cm",
        material: "PETG robust + bewegliche Teile",
        time: "4 Werktage"
      },
      quote: "Persönliche Abholung in Gunskirchen – und 10 Minuten später stand das Modell auf unserem Stand in Wels!"
    },
    materials: defaultMaterials,
    industryFocus: "Messen in Wels",
    uniqueSellingPoints: [
      "Direkter Nachbar der Messe Wels",
      "Persönliche Abholung möglich",
      "Last-Minute-Service für AGRARIA und Welser Messe"
    ]
  },

  'graz': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Bau & Veranstaltungen in Graz",
    uniqueSellingPoints: [
      "Express-Lieferung zur Messe Graz",
      "Erfahrung mit Häuslbauermesse",
      "Flexible Terminplanung"
    ]
  },

  'klagenfurt': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Holzkonstruktions-Modell für Holzmesse Klagenfurt",
      industry: "Holzbau"
    },
    materials: [
      {
        name: "PLA Holzoptik",
        description: "Authentische Holzmaserung für Holzbau-Modelle. Perfekt für die Holzmesse.",
        bestFor: ["Holzkonstruktionen", "Möbeldesign", "Alpine Architektur"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Holzbau & Kärntner Messen",
    uniqueSellingPoints: [
      "Spezialist für Internationale Holzmesse",
      "Holzoptik-Materialien verfügbar",
      "Erfahrung mit Kärntner Ausstellern"
    ]
  },

  'villach': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Regionale Events in Villach",
    uniqueSellingPoints: [
      "Zuverlässige Lieferung nach Villach",
      "Tourismus-Kompetenz für regionale Events",
      "Flexible Lieferzeiten"
    ]
  },

  'st-poelten': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Wirtschaft & Events in St. Pölten",
    uniqueSellingPoints: [
      "Schnelle Lieferung über A1",
      "Partner für VAZ St. Pölten Events",
      "Zentrale Lage für ganz NÖ"
    ]
  },

  'innsbruck': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Bergstation-Modell für Interalpin",
      industry: "Tourismus & Seilbahnen"
    },
    materials: [
      {
        name: "PLA Alpine Weiß",
        description: "Perfekt für Bergmodelle und alpine Architektur. Authentische Schneeoptik.",
        bestFor: ["Bergstationen", "Skigebiet-Modelle", "Alpine Projekte"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Wintersport & alpine Messen in Innsbruck",
    uniqueSellingPoints: [
      "Spezialist für Interalpin-Aussteller",
      "Erfahrung mit alpinen Geländemodellen",
      "Robuste Verpackung für Alpentransport"
    ]
  },

  'dornbirn': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Design-Objekt für Gustav Messe",
      industry: "Design & Lifestyle"
    },
    materials: [
      {
        name: "PLA Design Matt",
        description: "Edle matte Oberfläche für Designobjekte. Perfekt für Gustav-Aussteller.",
        bestFor: ["Designmöbel", "Produktpräsentationen", "Lifestyle-Objekte"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Design & Messen in Dornbirn",
    uniqueSellingPoints: [
      "Partner für Gustav Design-Messe",
      "Design-Kompetenz für kreative Projekte",
      "Grenznahe Lieferung CH/DE"
    ]
  }
};

// Helper to get extended data by slug with fallback
export const getExtendedDataBySlug = (slug: string): RegionalExtendedData => {
  return regionalExtendedData[slug] || {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Messemodelle",
    uniqueSellingPoints: [
      "Professionelle 3D-gedruckte Messemodelle",
      "Express-Lieferung möglich",
      "Persönliche Beratung"
    ]
  };
};
