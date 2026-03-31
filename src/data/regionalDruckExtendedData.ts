// Extended data for regional 3D-Druck pages
// Unique case studies, material recommendations, and industry focus per region
// DIFFERENZIERT von Messe (Events) und Architektur (Wettbewerbe/Bauherren)

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
    description: "Vielseitig, umweltfreundlich und präzise. Der Allrounder für Prototypen, Gehäuse und Designmodelle mit ausgezeichneter Oberflächenqualität.",
    bestFor: ["Prototypen", "Gehäuse", "Designstudien"],
    icon: "palette"
  },
  {
    name: "PETG",
    description: "Schlagzäh, chemisch beständig und lebensmittelecht. Ideal für funktionale Teile, die mechanisch belastet werden.",
    bestFor: ["Funktionsteile", "Outdoor-Einsatz", "Mechanische Belastung"],
    icon: "shield"
  },
  {
    name: "ASA",
    description: "UV-beständig und witterungsfest. Perfekt für Teile, die dauerhaft im Außenbereich eingesetzt werden.",
    bestFor: ["Außenanwendungen", "UV-Exposition", "Langlebige Teile"],
    icon: "feather"
  }
];

export const regionalDruckExtendedData: Record<string, RegionalDruckExtendedData> = {
  'wien': {
    caseStudy: {
      title: "Gehäuseprototyp für Wiener MedTech-Startup",
      industry: "Medizintechnik & Startups",
      challenge: "Ein Wiener Startup entwickelte ein tragbares Diagnosegerät und benötigte innerhalb von 48 Stunden drei Gehäusevarianten für einen Investoren-Pitch. Die Gehäuse mussten ergonomisch, passgenau für die Elektronik und professionell aussehend sein.",
      solution: "Wir fertigten drei Varianten in unterschiedlichen Größen aus weißem PLA+ mit feiner 0.12mm Auflösung. Jedes Gehäuse wurde so konstruiert, dass die Platine exakt einrastet. Alle drei Varianten waren innerhalb von 36 Stunden fertig.",
      result: "Das Startup sicherte sich eine Seed-Finanzierung. Die Investoren waren beeindruckt, dass bereits funktionierende Prototypen vorlagen. Seitdem bestellt das Unternehmen regelmäßig Iterationen bei uns.",
      specs: {
        size: "3x 12 x 8 x 4 cm",
        material: "PLA+ weiß, 0.12mm",
        time: "36 Stunden Express"
      },
      quote: "Drei Gehäusevarianten in 36 Stunden – das hat den Investoren gezeigt, wie schnell wir iterieren können."
    },
    materials: [
      {
        name: "PLA+ Premium",
        description: "Glatte Oberflächen für professionelle Präsentationen. Ideal für Startup-Pitches und Investorenmodelle in der Wiener Tech-Szene.",
        bestFor: ["Pitch-Prototypen", "Gehäuse", "Designstudien"],
        icon: "palette"
      },
      {
        name: "PETG Medizingrad",
        description: "Chemisch beständig und autoklavierbar. Für MedTech-Prototypen und labornahe Anwendungen.",
        bestFor: ["Medizintechnik", "Laborgeräte", "Lebensmitteltechnik"],
        icon: "shield"
      },
      {
        name: "TPU Flexibel",
        description: "Elastisches Material für Dichtungen, Griffe und stoßdämpfende Elemente. Perfekt für Wearable-Prototypen.",
        bestFor: ["Dichtungen", "Ergonomische Griffe", "Stoßdämpfer"],
        icon: "feather"
      }
    ],
    industryFocus: "Startups & Medizintechnik in Wien",
    uniqueSellingPoints: [
      "Express-Prototypen für Wiener Startups",
      "Erfahrung mit Investoren-Pitch-Modellen",
      "MedTech-taugliche Materialien verfügbar"
    ]
  },

  'linz': {
    caseStudy: {
      title: "Industriehalterung für Linzer Produktionsbetrieb",
      industry: "Industrieproduktion",
      challenge: "Ein Linzer Industriebetrieb benötigte dringend Ersatz-Halterungen für eine Produktionslinie. Die Originalteile waren nicht mehr lieferbar, und jeder Tag Stillstand kostete tausende Euro.",
      solution: "Wir digitalisierten die defekte Halterung, erstellten eine optimierte CAD-Datei und druckten 20 Stück aus schlagzähem PETG. Same-Day-Abholung in Gunskirchen – der Kunde war um 14 Uhr da und die Teile montiert.",
      result: "Die Produktionslinie lief noch am selben Tag weiter. Die 3D-gedruckten Halterungen erwiesen sich als langlebiger als die Originale. Der Betrieb bestellt seitdem alle Sonderteile bei uns.",
      specs: {
        size: "20x 8 x 6 x 3 cm",
        material: "PETG schwarz, verstärkt",
        time: "Same Day – Abholung in Gunskirchen"
      },
      quote: "Um 9 Uhr angerufen, um 14 Uhr abgeholt, um 15 Uhr montiert. Das nenne ich Service."
    },
    materials: [
      {
        name: "PETG Industrial",
        description: "Schlagzäh und temperaturbeständig bis 80°C. Der Standard für funktionale Industrieteile und Maschinenkomponenten.",
        bestFor: ["Ersatzteile", "Halterungen", "Maschinenteile"],
        icon: "shield"
      },
      {
        name: "PLA+ Präzision",
        description: "Für maßhaltige Prototypen und Lehren. ±0.2mm Toleranz bei sauberer Oberfläche.",
        bestFor: ["Lehren", "Schablonen", "Passproben"],
        icon: "palette"
      },
      {
        name: "ASA Outdoor",
        description: "UV- und witterungsbeständig. Für Teile, die im Freien oder in rauen Umgebungen eingesetzt werden.",
        bestFor: ["Outdoor-Gehäuse", "Abdeckungen", "Schutzteile"],
        icon: "feather"
      }
    ],
    industryFocus: "Industrie & Produktion in Linz",
    uniqueSellingPoints: [
      "Nur 20 Minuten von Linz – Same-Day-Abholung",
      "Erfahrung mit industriellen Ersatzteilen",
      "Notfall-Service für Produktionsausfälle"
    ]
  },

  'graz': {
    caseStudy: {
      title: "Sensorgehäuse für steirischen Automotive-Zulieferer",
      industry: "Automotive & Sensorik",
      challenge: "Ein steirischer Automotive-Zulieferer entwickelte einen neuen Ultraschallsensor und benötigte 50 Testgehäuse für Feldversuche. Die Gehäuse mussten wasserdicht, UV-beständig und maßgenau sein.",
      solution: "Wir fertigten 50 Gehäuse aus schwarzem ASA mit integrierten Dichtungsrillen. Jedes Gehäuse wurde mit IP65-tauglichen Aussparungen versehen. Die Kleinserie war in 5 Werktagen druckfertig.",
      result: "Alle 50 Gehäuse bestanden den Feldtest. Der Kunde spart jetzt 60% gegenüber Spritzguss-Werkzeugen für die Vorserie und kann Design-Iterationen in Tagen statt Monaten umsetzen.",
      specs: {
        size: "50x 6 x 4 x 3 cm",
        material: "ASA schwarz, UV-beständig",
        time: "5 Werktage"
      },
      quote: "60% Kostenersparnis gegenüber Spritzguss – und wir können jetzt in Tagen statt Monaten iterieren."
    },
    materials: [
      {
        name: "ASA Automotive",
        description: "UV-beständig, witterungsfest, temperaturbeständig bis 100°C. Der Industriestandard für Outdoor-Anwendungen im Automotive-Bereich.",
        bestFor: ["Sensorgehäuse", "Fahrzeugkomponenten", "Outdoor-Teile"],
        icon: "shield"
      },
      {
        name: "PETG Transparent",
        description: "Für Sichtfenster, Abdeckungen und optische Anwendungen. Gute chemische Beständigkeit.",
        bestFor: ["Sichtfenster", "Abdeckungen", "Prototypen mit Sichtkontrolle"],
        icon: "palette"
      },
      {
        name: "PLA+ Rapid",
        description: "Für schnelle Designvalidierung und Form-Fit-Checks. Günstig und präzise.",
        bestFor: ["Schnelle Iterationen", "Form-Checks", "Designvalidierung"],
        icon: "feather"
      }
    ],
    industryFocus: "Automotive & Green Tech in Graz",
    uniqueSellingPoints: [
      "ASA-Expertise für Automotive-Anwendungen",
      "Kleinserienfertigung ab 10 Stück",
      "Express-Lieferung über A9 nach Graz"
    ]
  },

  'salzburg': {
    caseStudy: {
      title: "Displayhalter-Serie für Salzburger Hotellerie",
      industry: "Tourismus & Hotellerie",
      challenge: "Eine Salzburger Hotelkette suchte individuelle Displayhalter für Tablets an der Rezeption. Die Halterungen sollten zum CI des Hotels passen, robust sein und in 15 Filialen identisch eingesetzt werden.",
      solution: "Wir entwickelten einen maßgeschneiderten Tablethalter mit integriertem Kabelmanagement und Logo-Gravur. 30 Stück in der Corporate-Farbe des Hotels aus PETG gefertigt.",
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
      title: "Prothesen-Adapter für Innsbrucker Medizintechnik",
      industry: "Medizintechnik & Rehabilitation",
      challenge: "Eine Innsbrucker Orthopädiewerkstatt benötigte patientenspezifische Adapter zwischen Prothesenschäften und Standardkomponenten. Jeder Adapter ist ein Unikat, das in 48h verfügbar sein muss.",
      solution: "Wir etablierten einen Workflow: Der Orthopäde sendet den 3D-Scan des Schafts, wir modellieren den Adapter und drucken in PETG Medical Grade. Versand über Nacht nach Innsbruck.",
      result: "Die Werkstatt betreut jetzt 40% mehr Patienten, weil die Wartezeit auf Adapter von 3 Wochen auf 2 Tage gesunken ist. Über 100 individuelle Adapter wurden bisher gefertigt.",
      specs: {
        size: "Je individuell, ø 8-12 cm",
        material: "PETG Medical Grade",
        time: "48 Stunden inkl. Versand"
      },
      quote: "Unsere Patienten warten jetzt 2 Tage statt 3 Wochen. Das ist ein Quantensprung in der Versorgung."
    },
    materials: [
      {
        name: "PETG Medical",
        description: "Autoklavierbar, chemisch beständig und hautverträglich. Für medizinnahe Anwendungen und Rehabilitationstechnik.",
        bestFor: ["Medizinische Hilfsmittel", "Orthopädie-Adapter", "Laborgeräte"],
        icon: "shield"
      },
      {
        name: "PLA+ Bio",
        description: "Biobasiert und kompostierbar. Für Modelle, Anschauungsobjekte und nicht-funktionale Prototypen.",
        bestFor: ["Anschauungsmodelle", "Bildungsmodelle", "Dekoration"],
        icon: "palette"
      },
      {
        name: "TPU Shore 95A",
        description: "Flexibel und stoßdämpfend. Für Griffe, Polsterungen und adaptive Komponenten.",
        bestFor: ["Griffe", "Polster", "Adaptive Teile"],
        icon: "feather"
      }
    ],
    industryFocus: "Medizintechnik & Sportartikel in Innsbruck",
    uniqueSellingPoints: [
      "Erfahrung mit medizinischen Individualteilen",
      "48h-Turnaround für patientenspezifische Bauteile",
      "Robuster Alpentransport inklusive"
    ]
  },

  'klagenfurt': {
    caseStudy: {
      title: "IoT-Sensorgehäuse für Klagenfurter IT-Unternehmen",
      industry: "IT & Sensorik",
      challenge: "Ein Klagenfurter IoT-Spezialist entwickelte Umweltsensoren für Smart-City-Anwendungen. Für den Pilotversuch wurden 30 wetterfeste Gehäuse mit Antennenöffnung und Kabelzugang benötigt.",
      solution: "Wir fertigten die Gehäuse aus UV-beständigem ASA mit integrierten Snap-fit-Verschlüssen und Kabeldurchführungen. Die Wandstärke wurde für optimale Funkdurchlässigkeit angepasst.",
      result: "Der Pilotversuch lief 6 Monate ohne Gehäuseausfall. Der Kunde hat die Serie auf 200 Stück erweitert – weiterhin im 3D-Druck, weil sich Spritzguss erst ab 1.000 Stück rechnet.",
      specs: {
        size: "30x 10 x 8 x 5 cm",
        material: "ASA weiß, UV-beständig",
        time: "7 Werktage"
      },
      quote: "Die Gehäuse haben 6 Monate Outdoor-Einsatz ohne Vergilbung überstanden. ASA ist genau das richtige Material."
    },
    materials: [
      {
        name: "ASA Signal-Weiß",
        description: "UV-beständig und funkdurchlässig. Optimal für Outdoor-Elektronikgehäuse und IoT-Anwendungen.",
        bestFor: ["IoT-Gehäuse", "Sensorboxen", "Outdoor-Elektronik"],
        icon: "shield"
      },
      ...defaultMaterials.slice(0, 2)
    ],
    industryFocus: "IT & Elektronik in Klagenfurt",
    uniqueSellingPoints: [
      "ASA-Expertise für wetterfeste Gehäuse",
      "Erfahrung mit IoT-Kleinserien",
      "Snap-fit und Funktionsdesign inklusive"
    ]
  },

  'villach': {
    caseStudy: {
      title: "Testvorrichtung für Villacher Halbleiterfertigung",
      industry: "Halbleiter & Elektronik",
      challenge: "Ein Elektronikunternehmen in Villach benötigte Testvorrichtungen (Jigs) zum Halten von Leiterplatten während der Qualitätskontrolle. Die Vorrichtungen mussten antistatisch und maßhaltig sein.",
      solution: "Wir druckten die Jigs aus PLA+ mit ESD-Beschichtung. Passstifte und Anschlagflächen wurden mit ±0.1mm Toleranz gefertigt. 10 Vorrichtungen für verschiedene Platinenformate.",
      result: "Die QC-Prüfung wurde 3x schneller, weil das manuelle Ausrichten entfiel. Der Kunde hat inzwischen 40 verschiedene Jigs für unterschiedliche Produkte bestellt.",
      specs: {
        size: "10x 15 x 10 x 3 cm",
        material: "PLA+ mit ESD-Beschichtung",
        time: "5 Werktage"
      },
      quote: "Die Testvorrichtungen haben unsere Qualitätskontrolle revolutioniert. Jetzt dauert die Prüfung ein Drittel der Zeit."
    },
    materials: defaultMaterials,
    industryFocus: "Halbleitertechnik & Elektronik in Villach",
    uniqueSellingPoints: [
      "Maßhaltige Testvorrichtungen mit ±0.1mm Toleranz",
      "ESD-sichere Beschichtungen verfügbar",
      "Erfahrung mit Elektronik-Fertigungshilfsmittel"
    ]
  },

  'wels': {
    caseStudy: {
      title: "Dosierhilfe für Welser Lebensmittelbetrieb",
      industry: "Lebensmittelproduktion",
      challenge: "Ein Lebensmittelbetrieb in Wels brauchte maßgeschneiderte Dosierhilfen für eine Abfüllanlage. Die Standardteile passten nicht zu den neuen Gebindegrößen – und der Lieferant hatte 12 Wochen Lieferzeit.",
      solution: "Wir konstruierten die Dosierhilfen nach Maß und druckten sie aus lebensmittelechtem PETG. Persönliche Abholung in Gunskirchen – der Kunde testete die Teile noch am selben Nachmittag.",
      result: "Die Abfüllanlage läuft seit 8 Monaten störungsfrei mit unseren Teilen. Für jede neue Gebindegröße fertigen wir in 2 Tagen passende Dosierhilfen.",
      specs: {
        size: "8x diverse Größen",
        material: "PETG lebensmittelecht",
        time: "Same Day – Abholung Gunskirchen"
      },
      quote: "12 Wochen Lieferzeit beim Originallieferanten vs. Same-Day bei ekdruck. Die Wahl war einfach."
    },
    materials: [
      {
        name: "PETG Food-Safe",
        description: "Lebensmittelecht nach EU-Verordnung. Für Teile mit Lebensmittelkontakt in der Verarbeitung.",
        bestFor: ["Dosierhilfen", "Trichter", "Abfüllteile"],
        icon: "shield"
      },
      ...defaultMaterials.slice(0, 2)
    ],
    industryFocus: "Lebensmittel & Agrartechnik in Wels",
    uniqueSellingPoints: [
      "Nur 10 Minuten zur Abholung",
      "Lebensmittelechte Materialien verfügbar",
      "Same-Day-Fertigung für Welser Betriebe"
    ]
  },

  'st-poelten': {
    caseStudy: {
      title: "Kamerahalterung für FH St. Pölten Medienprojekt",
      industry: "Medientechnik & Bildung",
      challenge: "Studierende der FH St. Pölten benötigten individuelle Kamerahalterungen für ein experimentelles Filmformat. Standard-Rigs waren nicht flexibel genug für die ungewöhnlichen Kamerawinkel.",
      solution: "Wir druckten modulare Halterungsarme aus PETG mit Klemmverbindungen für Standard-15mm-Rohre. Die Teile waren in 3 Tagen fertig und über A1 in St. Pölten.",
      result: "Das Filmprojekt gewann einen Nachwuchspreis. Die FH bestellt seitdem regelmäßig Spezialteile für Medientechnik-Projekte.",
      specs: {
        size: "5x diverse Halterungen",
        material: "PETG schwarz, verstärkt",
        time: "3 Werktage"
      },
      quote: "Ohne die maßgeschneiderten Halterungen wäre der Kamerawinkel für unser Projekt nicht möglich gewesen."
    },
    materials: defaultMaterials,
    industryFocus: "Medientechnik & Bildung in St. Pölten",
    uniqueSellingPoints: [
      "Erfahrung mit Bildungs- und Forschungsprojekten",
      "Schnelle Lieferung über A1",
      "Studentenfreundliche Preise ab €20"
    ]
  },

  'dornbirn': {
    caseStudy: {
      title: "Spritzguss-Vorabmodell für Vorarlberger Kunststoffverarbeiter",
      industry: "Kunststofftechnik",
      challenge: "Ein Vorarlberger Kunststoffverarbeiter wollte ein neues Formteil vor dem teuren Werkzeugbau validieren. Der Spritzguss-Werkzeugkosten: €25.000. Ein Fehler im Design wäre fatal.",
      solution: "Wir druckten das Formteil in Originalgröße aus PLA+ und später aus PETG für Funktionstests. Drei Iterationen in 10 Tagen – jede Änderung validiert, bevor das Werkzeug bestellt wurde.",
      result: "Die dritte Iteration war perfekt. Das Spritzguss-Werkzeug wurde ohne Nacharbeit gebaut. Geschätzte Ersparnis: €8.000 an Werkzeugkorrekturen.",
      specs: {
        size: "3 Iterationen, je 15 x 10 x 5 cm",
        material: "PLA+ und PETG",
        time: "3x 3 Werktage"
      },
      quote: "Drei Iterationen für €200 statt €25.000 Werkzeugkorrektur. Der 3D-Druck hat sich hundertfach bezahlt gemacht."
    },
    materials: [
      {
        name: "PLA+ Dimensionsstabil",
        description: "Maßhaltig und verzugsarm. Perfekt für Spritzguss-Vorabmodelle und Form-Fit-Checks.",
        bestFor: ["Vorabmodelle", "Spritzguss-Validierung", "Formchecks"],
        icon: "palette"
      },
      {
        name: "PETG Funktional",
        description: "Für mechanische Tests und Belastungsprüfungen des Designs vor dem Werkzeugbau.",
        bestFor: ["Funktionstests", "Belastungsprüfungen", "Material-Simulation"],
        icon: "shield"
      },
      {
        name: "ASA für Endanwendung",
        description: "Wenn das 3D-Druckteil die Vorserie ersetzt. UV-beständig und witterungsfest.",
        bestFor: ["Vorserien", "Outdoor-Teile", "Endanwendungen"],
        icon: "feather"
      }
    ],
    industryFocus: "Kunststofftechnik & Textil in Dornbirn",
    uniqueSellingPoints: [
      "Spritzguss-Vorabvalidierung spart tausende Euro",
      "Drei Iterationen in unter zwei Wochen",
      "Erfahrung mit Vorarlberger Industriekunden"
    ]
  },

  'gunskirchen': {
    caseStudy: {
      title: "Werkzeughalterungen für lokalen Handwerksbetrieb",
      industry: "Handwerk & Gewerbe",
      challenge: "Ein Handwerksbetrieb in Gunskirchen suchte maßgeschneiderte Werkzeughalterungen für seine Werkstattwand. Standardlösungen passten nicht zu den Spezialwerkzeugen, und der Betrieb wollte die Halterungen selbst testen.",
      solution: "Der Inhaber kam persönlich vorbei, wir besprachen die Anforderungen direkt am Bildschirm, modellierten gemeinsam und druckten die ersten Muster – alles in einem Vormittag.",
      result: "20 individuelle Halterungen, jede perfekt an das jeweilige Werkzeug angepasst. Der Kunde kommt seitdem mit jedem neuen Werkzeug vorbei und bekommt die passende Halterung am selben Tag.",
      specs: {
        size: "20x individuelle Halterungen",
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
      title: "Vorrichtungsserie für OÖ Automobilzulieferer",
      industry: "Automobilzulieferer",
      challenge: "Ein oberösterreichischer Automobilzulieferer benötigte 40 Montagevorrichtungen für eine neue Produktlinie. Die konventionellen Aluminium-Vorrichtungen hätten 8 Wochen Lieferzeit und €15.000 gekostet.",
      solution: "Wir druckten 40 Vorrichtungen aus verstärktem PETG mit eingepressten Messinginserts. Die Vorrichtungen halten über 10.000 Montagezyklen und kosten ein Fünftel der Alu-Alternative.",
      result: "Die Produktionslinie startete 6 Wochen früher als geplant. Die Vorrichtungen sind nach 8 Monaten im Dauereinsatz noch in einwandfreiem Zustand.",
      specs: {
        size: "40x 12 x 10 x 8 cm",
        material: "PETG verstärkt + Messinginserts",
        time: "7 Werktage + Abholung"
      },
      quote: "80% günstiger als Alu, 6 Wochen schneller – und nach 8 Monaten noch wie neu. Der 3D-Druck hat sich bewährt."
    },
    materials: defaultMaterials,
    industryFocus: "Industrie & Automobil in Oberösterreich",
    uniqueSellingPoints: [
      "Lokaler Hersteller – Abholung am selben Tag",
      "Erfahrung mit Industrievorrichtungen",
      "Messinginserts und Verbundkonstruktionen"
    ]
  },

  'niederoesterreich': {
    caseStudy: {
      title: "Spezialadapter für niederösterreichischen Winzer",
      industry: "Weinbau & Agrartechnik",
      challenge: "Ein Winzer in der Wachau brauchte Adapter zwischen alten und neuen Schlauchverbindungen in seiner Kellerei. Die Originalteile waren seit Jahren nicht mehr verfügbar, und die provisorischen Lösungen leckten.",
      solution: "Wir fertigten die Adapter aus lebensmittelechtem PETG nach Maß. Dichtungsrillen und Gewinde wurden direkt mitgedruckt – passgenau für beide Schlauchsysteme.",
      result: "Kein Tropfen mehr daneben. Der Winzer hat inzwischen 5 verschiedene Adaptertypen bestellt und damit seine gesamte Kellerei-Verrohrung vereinheitlicht.",
      specs: {
        size: "15x diverse Adapter",
        material: "PETG lebensmittelecht",
        time: "5 Werktage"
      },
      quote: "Seit 3 Jahren suche ich diese Adapter. In einer Woche war das Problem gelöst, das mich jahrelang genervt hat."
    },
    materials: defaultMaterials,
    industryFocus: "Weinbau & KMU in Niederösterreich",
    uniqueSellingPoints: [
      "Lebensmittelechte Adapter und Verbindungsteile",
      "Zentrale Lage zwischen Wien und Linz",
      "Erfahrung mit Landwirtschaft und Weinbau"
    ]
  },

  'steiermark': {
    caseStudy: {
      title: "Prototypenserie für steirisches Green-Tech-Unternehmen",
      industry: "Umwelttechnologie",
      challenge: "Ein steirisches Cleantech-Startup entwickelte ein Filtersystem für Mikroplastik und brauchte 25 unterschiedliche Gehäusevarianten für Strömungstests.",
      solution: "Wir druckten 25 Gehäusevarianten mit unterschiedlichen Einlass-Geometrien aus transparentem PETG, damit der Wasserfluss visuell beurteilt werden konnte.",
      result: "Die optimale Geometrie wurde in 3 Wochen gefunden – statt 6 Monaten mit konventionellem Werkzeugbau. Das Startup erhielt daraufhin eine Förderung der FFG.",
      specs: {
        size: "25 Varianten, je 8 x 8 x 12 cm",
        material: "PETG transparent",
        time: "3 Wochen iterativ"
      },
      quote: "25 Varianten in 3 Wochen testen – mit Spritzguss hätte allein das erste Werkzeug 6 Monate gedauert."
    },
    materials: [
      {
        name: "PETG Transparent",
        description: "Für Strömungsvisualisierung und optische Kontrolle. Klar und chemisch beständig.",
        bestFor: ["Strömungstests", "Sichtkontrolle", "Laborprototypen"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Green Tech & Automotive in der Steiermark",
    uniqueSellingPoints: [
      "Transparente Prototypen für Strömungsvisualisierung",
      "Iterative Kleinserien für Forschungsprojekte",
      "Express-Lieferung über A9"
    ]
  },

  'kaernten': {
    caseStudy: {
      title: "Kabeldurchführungsplatte für Kärntner Schaltanlagenbauer",
      industry: "Elektrotechnik",
      challenge: "Ein Kärntner Schaltanlagenbauer brauchte individuelle Kabeldurchführungsplatten für Sonderanlagen. Jede Platte hat ein anderes Lochbild – Standardteile passen nie.",
      solution: "Wir fertigten die Durchführungsplatten nach Lochbild-Zeichnung aus schwer entflammbarem PLA+ mit M16- bis M32-Aussparungen. 15 verschiedene Konfigurationen in einer Woche.",
      result: "Die Montagezeit pro Schaltschrank sank um 2 Stunden, weil das mühsame Bohren und Entgraten entfiel. Der Kunde bestellt jetzt jede Sonderkonfiguration digital.",
      specs: {
        size: "15x 20 x 15 x 1.5 cm",
        material: "PLA+ schwer entflammbar",
        time: "5 Werktage"
      },
      quote: "Jedes Lochbild ist anders – und jetzt bestelle ich einfach digital statt stundenlang zu bohren."
    },
    materials: defaultMaterials,
    industryFocus: "Elektrotechnik & Holzindustrie in Kärnten",
    uniqueSellingPoints: [
      "Individuelle Kabeldurchführungen nach Lochbild",
      "Erfahrung mit Schaltanlagen-Zubehör",
      "Zuverlässiger Versand über A10"
    ]
  },

  'vorarlberg': {
    caseStudy: {
      title: "Beschlag-Prototyp für Vorarlberger Möbelhersteller",
      industry: "Möbel- & Beschlagtechnik",
      challenge: "Ein Vorarlberger Möbelhersteller entwickelte einen neuartigen Soft-Close-Beschlag. Vor der teuren Werkzeugfertigung sollte die Mechanik mit 3D-gedruckten Prototypen validiert werden.",
      solution: "Wir druckten 5 Iterationen des Beschlaggehäuses aus PLA+ für die Formvalidierung und anschließend 3 Versionen aus PETG für den Belastungstest. Insgesamt 8 Iterationen in 3 Wochen.",
      result: "Die finale Version funktionierte im Dauertest einwandfrei. Das Spritzguss-Werkzeug wurde auf Basis des 3D-Druck-Prototyps gefertigt – ohne eine einzige Korrektur.",
      specs: {
        size: "8 Iterationen, je 6 x 4 x 2 cm",
        material: "PLA+ und PETG",
        time: "3 Wochen iterativ"
      },
      quote: "8 Iterationen für unter €500 – das Spritzguss-Werkzeug saß beim ersten Versuch perfekt."
    },
    materials: [
      {
        name: "PLA+ Formcheck",
        description: "Für schnelle visuelle und dimensionale Validierung. Ideal für Möbelbeschlag-Prototypen.",
        bestFor: ["Beschlagprototypen", "Scharniere", "Funktionsmuster"],
        icon: "palette"
      },
      {
        name: "PETG Belastungstest",
        description: "Für mechanische Dauerprüfung unter realen Bedingungen. Reproduziert Spritzguss-Eigenschaften näherungsweise.",
        bestFor: ["Dauertests", "Mechanische Prüfung", "Spritzguss-Simulation"],
        icon: "shield"
      },
      {
        name: "ASA Endfertigung",
        description: "Für Teile, die direkt als Endprodukt oder in Kleinserie eingesetzt werden.",
        bestFor: ["Kleinserien", "Endprodukte", "Langzeit-Einsatz"],
        icon: "feather"
      }
    ],
    industryFocus: "Möbel- & Beschlagtechnik in Vorarlberg",
    uniqueSellingPoints: [
      "Prototypen-Workflow für Beschlaghersteller",
      "8 Iterationen in 3 Wochen machbar",
      "Grenznahe Lieferung auch nach CH und Süddeutschland"
    ]
  },

  'burgenland': {
    caseStudy: {
      title: "Montagehalterung für burgenländischen Photovoltaik-Betrieb",
      industry: "Erneuerbare Energie",
      challenge: "Ein burgenländischer PV-Installateur brauchte Spezialhalterungen für eine ungewöhnliche Dachkonstruktion. Standardhalterungen passten nicht, und der Auftrag hatte eine knappe Deadline.",
      solution: "Wir konstruierten die Halterungen nach Fotos und Maßen, druckten sie aus UV-beständigem ASA und versendeten über Wien/A4. Von der Anfrage bis zur Lieferung vergingen 4 Tage.",
      result: "Die PV-Anlage wurde termingerecht installiert. Der Installateur nutzt den Service jetzt für jede nicht-standardmäßige Dachsituation.",
      specs: {
        size: "12x 15 x 8 x 5 cm",
        material: "ASA schwarz, UV-beständig",
        time: "4 Werktage"
      },
      quote: "Jedes Dach ist anders. Mit 3D-gedruckten Halterungen lösen wir jetzt jede Sondersituation in Tagen."
    },
    materials: defaultMaterials,
    industryFocus: "Erneuerbare Energie & Agrar im Burgenland",
    uniqueSellingPoints: [
      "ASA-Halterungen für Outdoor-Montage",
      "Erfahrung mit Sonderkonstruktionen für PV",
      "Schnelle Lieferung über Wien/A4"
    ]
  },
};

export const getDruckExtendedDataBySlug = (slug: string): RegionalDruckExtendedData => {
  return regionalDruckExtendedData[slug] || {
    caseStudy: {
      title: "Prototyp für lokales Unternehmen",
      industry: "Diverse Branchen",
      challenge: "Ein regionaler Betrieb benötigte kurzfristig Ersatzteile, die nicht mehr lieferbar waren.",
      solution: "Wir digitalisierten das Teil und druckten es in passendem Material nach. Lieferung erfolgte innerhalb weniger Tage.",
      result: "Der Betrieb konnte seinen Betrieb ohne Unterbrechung fortsetzen und bestellt seitdem regelmäßig.",
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
