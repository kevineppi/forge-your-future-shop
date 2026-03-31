// Extended data for regional 3D-Druck pages
// Unique case studies, material recommendations, and industry focus per region
// WKO-KONFORM: Nur Anschauungsmodelle, Designstudien, Präsentationsmodelle
// KEINE Funktionsteile, Serienfertigung, Medizintechnik, Maschinenbau

import { CaseStudyData } from "@/components/landing/MesseCaseStudy";
import { MaterialRecommendation } from "@/components/landing/MesseMaterialTips";

export interface RegionalDruckExtendedData {
  caseStudy: CaseStudyData;
  materials: MaterialRecommendation[];
  industryFocus: string;
  uniqueSellingPoints: string[];
}

const defaultMaterials: MaterialRecommendation[] = [
  {
    name: "PLA+",
    description: "Vielseitig, umweltfreundlich und präzise. Der Allrounder für Designstudien, Präsentationsmodelle und Anschauungsobjekte mit ausgezeichneter Oberflächenqualität.",
    bestFor: ["Designstudien", "Präsentationsmodelle", "Anschauungsobjekte"],
    icon: "palette"
  },
  {
    name: "PETG",
    description: "Schlagzäh, chemisch beständig und transparent verfügbar. Ideal für robuste Schaumodelle und Konzeptdarstellungen.",
    bestFor: ["Robuste Modelle", "Outdoor-Schaumodelle", "Transparente Objekte"],
    icon: "shield"
  },
  {
    name: "ASA",
    description: "UV-beständig und witterungsfest. Perfekt für Modelle, die dauerhaft im Außenbereich ausgestellt werden.",
    bestFor: ["Außen-Ausstellung", "UV-beständige Modelle", "Langlebige Schauobjekte"],
    icon: "feather"
  }
];

export const regionalDruckExtendedData: Record<string, RegionalDruckExtendedData> = {
  'wien': {
    caseStudy: {
      title: "Pitch-Modell für Wiener Startup",
      industry: "Startups & Kreativwirtschaft",
      challenge: "Ein Wiener Startup benötigte innerhalb von 48 Stunden drei Gehäuse-Designstudien für einen Investoren-Pitch. Die Modelle mussten professionell aussehen und die Produktidee greifbar machen.",
      solution: "Wir fertigten drei Designvarianten in unterschiedlichen Proportionen aus weißem PLA+ mit feiner 0.12mm Auflösung. Jede Variante zeigte einen anderen Designansatz. Alle drei Modelle waren innerhalb von 36 Stunden fertig.",
      result: "Das Startup überzeugte die Investoren mit greifbaren Modellen statt nur Bildschirmpräsentationen. Die physischen Modelle machten den Unterschied im Pitch.",
      specs: {
        size: "3x 12 x 8 x 4 cm",
        material: "PLA+ weiß, 0.12mm",
        time: "36 Stunden Express"
      },
      quote: "Drei Designvarianten in 36 Stunden – das hat den Investoren gezeigt, wie durchdacht unser Produkt ist."
    },
    materials: [
      {
        name: "PLA+ Premium",
        description: "Glatte Oberflächen für professionelle Präsentationen. Ideal für Startup-Pitches und Investorenmodelle in der Wiener Tech-Szene.",
        bestFor: ["Pitch-Modelle", "Designstudien", "Konzeptvisualisierungen"],
        icon: "palette"
      },
      {
        name: "PETG Transparent",
        description: "Teiltransparent für Schaumodelle, bei denen das Innere sichtbar sein soll. Robust und langlebig.",
        bestFor: ["Transparente Schaumodelle", "Displayobjekte", "Konzeptmodelle"],
        icon: "shield"
      },
      {
        name: "TPU Flexibel",
        description: "Elastisches Material für flexible Designstudien. Perfekt für Modelle, die Biegsamkeit demonstrieren sollen.",
        bestFor: ["Flexible Designstudien", "Ergonomie-Modelle", "Konzeptmuster"],
        icon: "feather"
      }
    ],
    industryFocus: "Startups & Kreativwirtschaft in Wien",
    uniqueSellingPoints: [
      "Express-Modelle für Wiener Startups",
      "Erfahrung mit Investoren-Pitch-Modellen",
      "Vielfältige Materialien für Designstudien"
    ]
  },

  'linz': {
    caseStudy: {
      title: "Schnittmodell für Linzer Präsentation",
      industry: "Industriepräsentation",
      challenge: "Ein Linzer Unternehmen brauchte für eine interne Schulung ein Schnittmodell, das den Aufbau eines Produktes zeigt. Das Modell musste anschaulich und farblich differenziert sein.",
      solution: "Wir erstellten ein mehrfarbiges Schnittmodell aus PLA+ in vier Farben. Jede Schicht wurde farblich codiert, damit der Aufbau auf einen Blick verständlich wird. Same-Day-Abholung in Gunskirchen.",
      result: "Die Schulungsteilnehmer verstanden den Produktaufbau deutlich schneller als mit Bildmaterial. Das Modell wird seitdem bei jeder Einschulung eingesetzt.",
      specs: {
        size: "20 x 15 x 10 cm",
        material: "PLA+ vierfarbig",
        time: "Same Day – Abholung in Gunskirchen"
      },
      quote: "Ein Bild sagt mehr als tausend Worte – ein Modell zum Anfassen sagt noch mehr."
    },
    materials: [
      {
        name: "PLA+ Präzision",
        description: "Für maßhaltige Modelle mit sauberer Oberfläche. ±0.2mm Toleranz.",
        bestFor: ["Schnittmodelle", "Schulungsmodelle", "Präsentationsobjekte"],
        icon: "palette"
      },
      {
        name: "ASA Outdoor",
        description: "UV- und witterungsbeständig. Für Modelle, die im Freien oder in rauen Umgebungen ausgestellt werden.",
        bestFor: ["Outdoor-Schaumodelle", "Dauerausstellungen", "Wetterfeste Objekte"],
        icon: "feather"
      }
    ],
    industryFocus: "Industriepräsentation in Linz",
    uniqueSellingPoints: [
      "Nur 20 Minuten von Linz – Same-Day-Abholung",
      "Erfahrung mit Schulungs- und Anschauungsmodellen",
      "Express-Service für dringende Präsentationen"
    ]
  },

  'graz': {
    caseStudy: {
      title: "Designstudie für steirisches Technologieunternehmen",
      industry: "Produktdesign & Konzeptentwicklung",
      challenge: "Ein steirisches Technologieunternehmen entwickelte ein neues Produktdesign und benötigte 50 Gehäuse-Designstudien für interne Bewertungsrunden. Die Modelle mussten maßgenau und professionell sein.",
      solution: "Wir fertigten 50 Designstudien aus schwarzem ASA mit fein aufgelösten Details. Die Oberflächen wurden nachbearbeitet für ein hochwertiges Erscheinungsbild.",
      result: "Die Bewertungsrunden verliefen deutlich effizienter mit physischen Modellen. Der Kunde spart Zeit in der Designentscheidung, weil alle Beteiligten das Objekt anfassen können.",
      specs: {
        size: "50x 6 x 4 x 3 cm",
        material: "ASA schwarz, nachbearbeitet",
        time: "5 Werktage"
      },
      quote: "Physische Modelle beschleunigen Designentscheidungen enorm – jeder kann das Objekt drehen und bewerten."
    },
    materials: [
      {
        name: "ASA Premium",
        description: "UV-beständig, witterungsfest, hochwertige Oberfläche. Ideal für Designmodelle, die langlebig sein sollen.",
        bestFor: ["Designstudien", "Konzeptmodelle", "Outdoor-Schaumodelle"],
        icon: "shield"
      },
      {
        name: "PETG Transparent",
        description: "Für Sichtmodelle und transparente Konzeptdarstellungen. Zeigt innere Strukturen.",
        bestFor: ["Sichtmodelle", "Konzeptvisualisierungen", "Transparente Objekte"],
        icon: "palette"
      },
      {
        name: "PLA+ Rapid",
        description: "Für schnelle Designvalidierung und Formchecks. Günstig und präzise.",
        bestFor: ["Schnelle Iterationen", "Formstudien", "Designvalidierung"],
        icon: "feather"
      }
    ],
    industryFocus: "Produktdesign & Technologie in Graz",
    uniqueSellingPoints: [
      "ASA-Expertise für hochwertige Designmodelle",
      "Projektmengen ab 10 Stück mit Mengenrabatt",
      "Express-Lieferung über A9 nach Graz"
    ]
  },

  'salzburg': {
    caseStudy: {
      title: "Displayhalter-Serie für Salzburger Hotellerie",
      industry: "Tourismus & Hotellerie",
      challenge: "Eine Salzburger Hotelkette suchte individuelle Displayhalter für Tablets an der Rezeption. Die Halterungen sollten zum CI des Hotels passen und in 15 Filialen identisch eingesetzt werden.",
      solution: "Wir entwickelten einen maßgeschneiderten Tablethalter mit integriertem Kabelmanagement und Logo-Prägung. 30 Stück in der Corporate-Farbe des Hotels aus PETG gefertigt.",
      result: "Alle 15 Filialen wurden einheitlich ausgestattet. Die Gäste nutzen die Check-in-Terminals intuitiv. Nachbestellungen erfolgen per E-Mail in 3 Werktagen.",
      specs: {
        size: "30x 25 x 18 x 12 cm",
        material: "PETG in Sonderfarbe",
        time: "5 Werktage"
      },
      quote: "Endlich Halterungen, die zu unserem Design passen. Die Gäste nutzen die Terminals jetzt viel häufiger."
    },
    materials: defaultMaterials,
    industryFocus: "Tourismus & Gastronomie in Salzburg",
    uniqueSellingPoints: [
      "Erfahrung mit Hotelausstattung und Tourismusbedarf",
      "Sonderfarben und Logo-Integration möglich",
      "Schnelle Nachbestellungen für Filialkonzepte"
    ]
  },

  'innsbruck': {
    caseStudy: {
      title: "Anschauungsmodell für Innsbrucker Forschungsprojekt",
      industry: "Forschung & Bildung",
      challenge: "Ein Forschungsteam der Universität Innsbruck benötigte ein detailliertes Anschauungsmodell für eine Konferenzpräsentation. Das Modell sollte komplexe Strukturen verständlich darstellen.",
      solution: "Wir erstellten ein mehrteiliges Modell mit abnehmbaren Schichten aus PETG. Farbcodierte Bereiche machten die verschiedenen Strukturen sofort erkennbar. Versand über Nacht nach Innsbruck.",
      result: "Die Konferenzpräsentation war ein Erfolg. Das Publikum konnte die Strukturen am Modell nachvollziehen. Das Team bestellt seitdem regelmäßig Modelle für Vorträge.",
      specs: {
        size: "Mehrteilig, ø 15 cm",
        material: "PETG mehrfarbig",
        time: "48 Stunden inkl. Versand"
      },
      quote: "Das Modell hat unsere Präsentation auf ein ganz anderes Niveau gehoben. Die Zuhörer konnten alles sofort nachvollziehen."
    },
    materials: [
      {
        name: "PETG Transparent",
        description: "Teiltransparent und robust. Für Schaumodelle, bei denen innere Strukturen sichtbar sein sollen.",
        bestFor: ["Forschungsmodelle", "Schaumodelle", "Konferenz-Präsentationen"],
        icon: "shield"
      },
      {
        name: "PLA+ Bio",
        description: "Biobasiert und umweltfreundlich. Für Anschauungsmodelle, Lehrmittel und Dekoration.",
        bestFor: ["Anschauungsmodelle", "Bildungsmodelle", "Dekoration"],
        icon: "palette"
      },
      {
        name: "TPU Shore 95A",
        description: "Flexibel und elastisch. Für Designstudien, die Flexibilität demonstrieren sollen.",
        bestFor: ["Flexible Modelle", "Ergonomie-Studien", "Konzeptmuster"],
        icon: "feather"
      }
    ],
    industryFocus: "Forschung & Sportartikel-Design in Innsbruck",
    uniqueSellingPoints: [
      "Erfahrung mit Universitäts- und Forschungsmodellen",
      "48h-Turnaround für Konferenz-Modelle",
      "Robuster Alpentransport inklusive"
    ]
  },

  'klagenfurt': {
    caseStudy: {
      title: "IoT-Gehäusemodell für Klagenfurter IT-Unternehmen",
      industry: "IT & Produktdesign",
      challenge: "Ein Klagenfurter IoT-Spezialist benötigte 30 Gehäuse-Designstudien für Smart-City-Sensoren. Die Modelle sollten verschiedene Designvarianten zeigen und für Kundenpräsentationen eingesetzt werden.",
      solution: "Wir fertigten die Designstudien aus UV-beständigem ASA in drei Designvarianten à 10 Stück. Jede Variante unterschied sich in Form und Proportionen.",
      result: "Der Kunde konnte seinen Auftraggebern verschiedene Designoptionen physisch präsentieren. Die bevorzugte Variante wurde deutlich schneller identifiziert als bei reinen Bildschirmpräsentationen.",
      specs: {
        size: "30x 10 x 8 x 5 cm",
        material: "ASA weiß, UV-beständig",
        time: "7 Werktage"
      },
      quote: "Drei Designvarianten zum Anfassen – das hat die Entscheidung unserer Auftraggeber enorm beschleunigt."
    },
    materials: [
      {
        name: "ASA Signal-Weiß",
        description: "UV-beständig und langlebig. Optimal für Designmodelle, die bei Kundenpräsentationen im Freien gezeigt werden.",
        bestFor: ["Designmodelle", "Outdoor-Präsentationen", "Konzeptmodelle"],
        icon: "shield"
      },
      ...defaultMaterials.slice(0, 2)
    ],
    industryFocus: "IT & Elektronik-Design in Klagenfurt",
    uniqueSellingPoints: [
      "ASA-Expertise für wetterfeste Designmodelle",
      "Erfahrung mit Designstudien-Serien",
      "Mehrere Varianten parallel möglich"
    ]
  },

  'villach': {
    caseStudy: {
      title: "Konzeptmodell für Villacher Technologieunternehmen",
      industry: "Technologie & Elektronik-Design",
      challenge: "Ein Elektronikunternehmen in Villach brauchte Konzeptmodelle für eine neue Produktlinie. Die Modelle sollten bei internen Designreviews eingesetzt werden und verschiedene Formfaktoren zeigen.",
      solution: "Wir druckten 10 Konzeptmodelle in verschiedenen Formfaktoren aus PLA+ mit hoher Oberflächenqualität. Passstifte und Designdetails wurden mit 0.12mm Auflösung präzise dargestellt.",
      result: "Das Designreview verlief deutlich produktiver mit physischen Modellen. Proportionen und Ergonomie konnten direkt bewertet werden statt nur am Bildschirm.",
      specs: {
        size: "10x 15 x 10 x 3 cm",
        material: "PLA+ weiß, 0.12mm",
        time: "5 Werktage"
      },
      quote: "Physische Konzeptmodelle machen Designreviews 10x produktiver. Am Bildschirm sieht alles anders aus als in der Hand."
    },
    materials: defaultMaterials,
    industryFocus: "Technologie & Elektronik-Design in Villach",
    uniqueSellingPoints: [
      "Maßhaltige Konzeptmodelle mit hoher Oberflächenqualität",
      "Verschiedene Designvarianten parallel möglich",
      "Erfahrung mit Technologieunternehmen"
    ]
  },

  'wels': {
    caseStudy: {
      title: "Displayobjekte für Welser Lebensmittelbetrieb",
      industry: "Lebensmittel & Präsentation",
      challenge: "Ein Lebensmittelbetrieb in Wels brauchte maßgeschneiderte Displayhalter für die Produktpräsentation auf Fachmessen und im Showroom.",
      solution: "Wir konstruierten die Displayhalter nach Maß und druckten sie aus PETG in der Corporate-Farbe. Persönliche Abholung in Gunskirchen – der Kunde sah die Teile noch am selben Tag.",
      result: "Die Displays werden auf jeder Messe eingesetzt und machen die Produkte deutlich ansprechender. Für jedes neue Produkt werden passende Halter nachbestellt.",
      specs: {
        size: "8x diverse Größen",
        material: "PETG in Sonderfarbe",
        time: "Same Day – Abholung Gunskirchen"
      },
      quote: "Same-Day Abholung direkt nebenan. So muss Service sein."
    },
    materials: [
      {
        name: "PETG Sonderfarbe",
        description: "In Corporate-Farben verfügbar. Für Displayobjekte und Präsentationshalter mit Markenidentität.",
        bestFor: ["Displayhalter", "Präsentationsobjekte", "Corporate-Design"],
        icon: "shield"
      },
      ...defaultMaterials.slice(0, 2)
    ],
    industryFocus: "Lebensmittel & Präsentation in Wels",
    uniqueSellingPoints: [
      "Nur 10 Minuten zur Abholung",
      "Sonderfarben für Corporate-Design verfügbar",
      "Same-Day-Fertigung für Welser Betriebe"
    ]
  },

  'st-poelten': {
    caseStudy: {
      title: "Studiomodelle für FH St. Pölten Medienprojekt",
      industry: "Medientechnik & Bildung",
      challenge: "Studierende der FH St. Pölten benötigten individuelle Modelle für ein experimentelles Filmprojekt – Requisiten und Set-Dekorationen, die es in keinem Laden gibt.",
      solution: "Wir druckten modulare Requisiten und Dekorationsobjekte aus PETG in verschiedenen Farben. Die Teile waren in 3 Tagen fertig und über A1 in St. Pölten.",
      result: "Das Filmprojekt gewann einen Nachwuchspreis. Die FH bestellt seitdem regelmäßig Modelle und Requisiten für Medienprojekte.",
      specs: {
        size: "5x diverse Objekte",
        material: "PETG mehrfarbig",
        time: "3 Werktage"
      },
      quote: "Ohne die maßgeschneiderten Requisiten wäre das Set-Design nicht möglich gewesen."
    },
    materials: defaultMaterials,
    industryFocus: "Medientechnik & Bildung in St. Pölten",
    uniqueSellingPoints: [
      "Erfahrung mit Bildungs- und Kreativprojekten",
      "Schnelle Lieferung über A1",
      "Studentenfreundliche Preise ab €20"
    ]
  },

  'dornbirn': {
    caseStudy: {
      title: "Vorabmodell für Vorarlberger Kunststoffdesigner",
      industry: "Kunststoffdesign",
      challenge: "Ein Vorarlberger Designer wollte ein neues Formteil vor der Produktion validieren. Ein Fehler im Design wäre teuer – deshalb sollte vorab ein maßstabsgetreues Modell geprüft werden.",
      solution: "Wir druckten das Designmodell in Originalgröße aus PLA+ und später aus PETG für eine robustere Variante. Drei Iterationen in 10 Tagen – jede Änderung visuell geprüft, bevor die Produktion startet.",
      result: "Die dritte Iteration war perfekt. Der Designer konnte seinem Kunden das finale Design als greifbares Modell zeigen. Die Entscheidung fiel sofort.",
      specs: {
        size: "3 Iterationen, je 15 x 10 x 5 cm",
        material: "PLA+ und PETG",
        time: "3x 3 Werktage"
      },
      quote: "Drei Designiterationen für €200 – das Ergebnis war perfekt und der Kunde sofort überzeugt."
    },
    materials: [
      {
        name: "PLA+ Dimensionsstabil",
        description: "Maßhaltig und verzugsarm. Perfekt für Designstudien und Vorabmodelle.",
        bestFor: ["Vorabmodelle", "Designvalidierung", "Formchecks"],
        icon: "palette"
      },
      {
        name: "PETG Robust",
        description: "Für robuste Modelle und Präsentationsstücke, die häufig angefasst werden.",
        bestFor: ["Robuste Modelle", "Kundenpräsentationen", "Dauerhafte Ausstellung"],
        icon: "shield"
      },
      {
        name: "ASA für Outdoor-Ausstellung",
        description: "UV-beständig und witterungsfest. Wenn das Modell dauerhaft im Freien steht.",
        bestFor: ["Outdoor-Modelle", "Dauerausstellungen", "Wetterfeste Objekte"],
        icon: "feather"
      }
    ],
    industryFocus: "Kunststoffdesign & Textil in Dornbirn",
    uniqueSellingPoints: [
      "Vorabmodelle sparen teure Designfehler",
      "Drei Iterationen in unter zwei Wochen",
      "Erfahrung mit Vorarlberger Designkunden"
    ]
  },

  'gunskirchen': {
    caseStudy: {
      title: "Displayobjekte für lokalen Handwerksbetrieb",
      industry: "Handwerk & Gewerbe",
      challenge: "Ein Handwerksbetrieb in Gunskirchen suchte maßgeschneiderte Displayobjekte für seine Ausstellungsräume. Standardlösungen passten nicht zum Sortiment.",
      solution: "Der Inhaber kam persönlich vorbei, wir besprachen die Anforderungen direkt am Bildschirm, modellierten gemeinsam und druckten die ersten Muster – alles in einem Vormittag.",
      result: "20 individuelle Displayobjekte, jedes perfekt an das jeweilige Produkt angepasst. Der Kunde kommt seitdem mit jeder neuen Anforderung vorbei und bekommt die Lösung am selben Tag.",
      specs: {
        size: "20x individuelle Objekte",
        material: "PETG schwarz",
        time: "Same Day – gemeinsam vor Ort entwickelt"
      },
      quote: "Einfach vorbeikommen, gemeinsam designen, mitnehmen. So stelle ich mir Service vor."
    },
    materials: defaultMaterials,
    industryFocus: "Direkt vom Hersteller in Gunskirchen",
    uniqueSellingPoints: [
      "Gemeinsame Entwicklung vor Ort möglich",
      "Qualitätsprüfung persönlich vor Abholung",
      "Same-Day: morgens bestellt, mittags fertig"
    ]
  },

  'oberoesterreich': {
    caseStudy: {
      title: "Präsentationsmodelle für OÖ Industrieunternehmen",
      industry: "Industriepräsentation",
      challenge: "Ein oberösterreichisches Industrieunternehmen benötigte 40 Präsentationsmodelle für eine Kundenveranstaltung. Die Modelle sollten das Produktdesign visualisieren und als Give-aways dienen.",
      solution: "Wir druckten 40 maßstabsgetreue Präsentationsmodelle aus PLA+ mit hochwertiger Oberflächenqualität. Persönliche Abholung in Gunskirchen.",
      result: "Die Veranstaltung war ein Erfolg. Die Kunden waren beeindruckt von den greifbaren Modellen. Das Unternehmen bestellt seitdem für jede Kundenveranstaltung individuelle Modelle.",
      specs: {
        size: "40x 12 x 10 x 8 cm",
        material: "PLA+ weiß, nachbearbeitet",
        time: "7 Werktage + Abholung"
      },
      quote: "Greifbare Modelle überzeugen Kunden mehr als jede Powerpoint-Präsentation."
    },
    materials: defaultMaterials,
    industryFocus: "Industriepräsentation in Oberösterreich",
    uniqueSellingPoints: [
      "Lokaler Hersteller – Abholung am selben Tag",
      "Erfahrung mit Präsentationsmodellen in Projektmengen",
      "Hochwertige Oberflächen für Kundenpräsentationen"
    ]
  },

  'niederoesterreich': {
    caseStudy: {
      title: "Displayobjekte für niederösterreichischen Winzer",
      industry: "Weinbau & Präsentation",
      challenge: "Ein Winzer in der Wachau brauchte individuelle Displayobjekte für die Weinpräsentation im Verkostungsraum und auf Weinmessen. Standard-Displays passten nicht zum Markenimage.",
      solution: "Wir fertigten maßgeschneiderte Flaschenhalter und Displayobjekte aus PETG in der Markenfarbe des Weinguts. Logo-Integration und individuelle Formgebung inklusive.",
      result: "Die Displays werden auf jeder Weinmesse eingesetzt und im Verkostungsraum dauerhaft ausgestellt. Besucher kommentieren regelmäßig das einzigartige Design.",
      specs: {
        size: "15x diverse Display-Objekte",
        material: "PETG in Sonderfarbe",
        time: "5 Werktage"
      },
      quote: "Endlich Displays, die zu unserem Weingut passen. Unsere Gäste sind begeistert."
    },
    materials: defaultMaterials,
    industryFocus: "Weinbau & KMU in Niederösterreich",
    uniqueSellingPoints: [
      "Individuelle Displayobjekte mit Logo-Integration",
      "Zentrale Lage zwischen Wien und Linz",
      "Erfahrung mit Landwirtschaft und Weinbau"
    ]
  },

  'steiermark': {
    caseStudy: {
      title: "Konzeptmodelle für steirisches Green-Tech-Unternehmen",
      industry: "Umwelttechnologie & Design",
      challenge: "Ein steirisches Cleantech-Startup entwickelte ein neues Filtersystem und brauchte 25 unterschiedliche Gehäuse-Designstudien für interne Bewertungsrunden.",
      solution: "Wir druckten 25 Designstudien mit unterschiedlichen Formfaktoren aus transparentem PETG, damit das Designkonzept von allen Seiten bewertet werden konnte.",
      result: "Die optimale Designform wurde in 3 Wochen gefunden. Das Startup erhielt daraufhin eine Förderung der FFG – auch weil die physischen Modelle die Jury überzeugten.",
      specs: {
        size: "25 Varianten, je 8 x 8 x 12 cm",
        material: "PETG transparent",
        time: "3 Wochen iterativ"
      },
      quote: "25 Designvarianten in 3 Wochen bewerten – mit physischen Modellen geht das unglaublich effizient."
    },
    materials: [
      {
        name: "PETG Transparent",
        description: "Für transparente Designstudien und Konzeptmodelle. Klar und robust.",
        bestFor: ["Transparente Modelle", "Designstudien", "Konzeptvisualisierungen"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Green Tech & Design in der Steiermark",
    uniqueSellingPoints: [
      "Transparente Designmodelle für Konzeptbewertung",
      "Iterative Designstudien für Forschungsprojekte",
      "Express-Lieferung über A9"
    ]
  },

  'kaernten': {
    caseStudy: {
      title: "Präsentationsmodelle für Kärntner Elektrounternehmen",
      industry: "Elektrotechnik & Präsentation",
      challenge: "Ein Kärntner Elektrounternehmen brauchte individuelle Präsentationsmodelle für eine Kundenveranstaltung. Jedes Modell sollte eine andere Produktvariante darstellen.",
      solution: "Wir fertigten die Modelle nach Designvorgaben aus PLA+ in drei Farben. 15 verschiedene Modelle in einer Woche – jedes mit individuellen Details.",
      result: "Die Kundenveranstaltung war ein voller Erfolg. Die Kunden konnten alle Produktvarianten physisch vergleichen und Bestellungen wurden direkt vor Ort aufgenommen.",
      specs: {
        size: "15x 20 x 15 x 5 cm",
        material: "PLA+ dreifarbig",
        time: "5 Werktage"
      },
      quote: "15 verschiedene Modelle in einer Woche – und jedes sieht professionell aus."
    },
    materials: defaultMaterials,
    industryFocus: "Elektrotechnik & Präsentation in Kärnten",
    uniqueSellingPoints: [
      "Individuelle Modellserien für Kundenpräsentationen",
      "Mehrfarbige Modelle für Produktvergleiche",
      "Zuverlässiger Versand über A10"
    ]
  },

  'vorarlberg': {
    caseStudy: {
      title: "Beschlag-Designstudie für Vorarlberger Möbelhersteller",
      industry: "Möbel- & Beschlagdesign",
      challenge: "Ein Vorarlberger Möbelhersteller entwickelte einen neuartigen Beschlag. Vor der teuren Produktion sollte das Design mit 3D-gedruckten Modellen validiert werden.",
      solution: "Wir druckten 5 Iterationen des Beschlagmodells aus PLA+ für die Formvalidierung und anschließend 3 Versionen aus PETG als robustere Anschauungsmodelle. Insgesamt 8 Iterationen in 3 Wochen.",
      result: "Die finale Designversion überzeugte den Kunden sofort. Die Entscheidung zur Produktion fiel innerhalb eines Tages – dank der greifbaren Modelle.",
      specs: {
        size: "8 Iterationen, je 6 x 4 x 2 cm",
        material: "PLA+ und PETG",
        time: "3 Wochen iterativ"
      },
      quote: "8 Designiterationen für unter €500 – und das finale Modell hat den Kunden sofort überzeugt."
    },
    materials: [
      {
        name: "PLA+ Formcheck",
        description: "Für schnelle visuelle und dimensionale Validierung. Ideal für Möbelbeschlag-Designstudien.",
        bestFor: ["Beschlag-Designstudien", "Formstudien", "Konzeptmuster"],
        icon: "palette"
      },
      {
        name: "PETG Präsentationsmodell",
        description: "Robust für Kundenpräsentationen und Dauereinsatz in Showrooms.",
        bestFor: ["Showroom-Modelle", "Kundenpräsentationen", "Langzeitausstellung"],
        icon: "shield"
      },
      {
        name: "ASA Outdoor-Modell",
        description: "Für Designmodelle, die im Freien ausgestellt werden sollen.",
        bestFor: ["Outdoor-Modelle", "Dauerausstellungen", "Wetterfeste Präsentation"],
        icon: "feather"
      }
    ],
    industryFocus: "Möbel- & Beschlagdesign in Vorarlberg",
    uniqueSellingPoints: [
      "Designstudien-Workflow für Möbelhersteller",
      "8 Iterationen in 3 Wochen machbar",
      "Grenznahe Lieferung auch nach CH und Süddeutschland"
    ]
  },

  'burgenland': {
    caseStudy: {
      title: "Konzeptmodell für burgenländischen Photovoltaik-Betrieb",
      industry: "Erneuerbare Energie & Visualisierung",
      challenge: "Ein burgenländischer PV-Installateur brauchte ein Konzeptmodell einer Solaranlage für Kundenpräsentationen. Potenzielle Kunden sollten sehen, wie die Anlage auf ihrem Dach aussehen würde.",
      solution: "Wir konstruierten ein maßstabsgetreues Dachmodell mit aufgesetzten PV-Modulen aus ASA. Das Modell zeigt die Anordnung und Proportionen der geplanten Anlage.",
      result: "Die Abschlussrate bei Kundengesprächen stieg deutlich. Kunden verstehen mit dem Modell sofort, wie die Anlage aussehen wird.",
      specs: {
        size: "30 x 20 x 10 cm",
        material: "ASA schwarz/silber",
        time: "4 Werktage"
      },
      quote: "Seit wir das Modell bei Kundenterminen dabeihaben, entscheiden sich mehr Kunden für eine Anlage."
    },
    materials: defaultMaterials,
    industryFocus: "Erneuerbare Energie & Agrar im Burgenland",
    uniqueSellingPoints: [
      "Konzeptmodelle für Kundenpräsentationen",
      "Erfahrung mit Visualisierung von Energieanlagen",
      "Schnelle Lieferung über Wien/A4"
    ]
  },
};

export const getDruckExtendedDataBySlug = (slug: string): RegionalDruckExtendedData => {
  return regionalDruckExtendedData[slug] || {
    caseStudy: {
      title: "Designmodell für lokales Unternehmen",
      industry: "Diverse Branchen",
      challenge: "Ein regionaler Betrieb benötigte kurzfristig ein Anschauungsmodell für eine Kundenpräsentation.",
      solution: "Wir erstellten ein maßstabsgetreues Modell in passendem Material. Lieferung erfolgte innerhalb weniger Tage.",
      result: "Die Präsentation war ein Erfolg und der Betrieb bestellt seitdem regelmäßig Modelle für Kundentermine.",
      specs: {
        size: "Individuell",
        material: "PLA+ / PETG",
        time: "3-5 Werktage"
      },
      quote: "Schnell, unkompliziert und genau passend – so muss 3D-Druck sein."
    },
    materials: defaultMaterials,
    industryFocus: "Allgemeiner 3D-Druck Service",
    uniqueSellingPoints: [
      "Professioneller FDM 3D-Druck",
      "Express-Fertigung möglich",
      "Persönliche Beratung"
    ]
  };
};
