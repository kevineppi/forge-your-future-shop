import { useState, useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export const useSEO = (sectionId?: string): SEOData => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: "3D-Druck Service Linz | ekdruck e.U. Oberösterreich",
    description: "Professioneller 3D-Druck Service für Linz und Oberösterreich. Einzelanfertigungen, Prototypen & Serienfertigung mit österreichischem Filament. Kostenlose Beratung!",
    keywords: "3D-Druck Linz, 3D-Druck Oberösterreich, 3D-Druck Wels, Prototyping, Einzelanfertigungen, Serienfertigung, nachhaltiger 3D-Druck, regional"
  });

  useEffect(() => {
    const seoConfigs = {
      hero: {
        title: "3D-Druck Service Linz | ekdruck e.U. Oberösterreich",
        description: "Professioneller 3D-Druck Service für Linz und Oberösterreich. Einzelanfertigungen, Prototypen & Serienfertigung mit österreichischem Filament. Kostenlose Beratung!",
        keywords: "3D-Druck Linz, 3D-Druck Oberösterreich, 3D-Druck Wels, Prototyping, Einzelanfertigungen, Serienfertigung, nachhaltiger 3D-Druck, regional"
      },
      services: {
        title: "3D-Druck Leistungen & Services | ekdruck e.U. Oberösterreich",
        description: "Umfassende 3D-Druck Services: Einzelanfertigungen, Serienfertigung, Inneneinrichtung, Planung & Konstruktion. Regionale Fertigung für Linz und Oberösterreich.",
        keywords: "3D-Druck Services, Einzelanfertigungen, Serienfertigung, 3D-Modellierung, CAD-Konstruktion, nachhaltige Inneneinrichtung, technischer Entwurf"
      },
      advantages: {
        title: "Vorteile 3D-Druck vs. traditionelle Fertigung | ekdruck e.U.",
        description: "Entdecken Sie die Vorteile des 3D-Drucks: Schnelle Prototypen, kosteneffiziente Kleinserien, komplexe Geometrien und nachhaltige Produktion in Oberösterreich.",
        keywords: "3D-Druck Vorteile, Prototypenerstellung, Kleinserien, additive Fertigung, Kostenvergleich, nachhaltige Produktion, komplexe Geometrien"
      },
      about: {
        title: "Über ekdruck e.U. | 3D-Druck Spezialist aus Oberösterreich",
        description: "Lernen Sie ekdruck e.U. kennen - Ihr regionaler 3D-Druck Partner für Linz und Oberösterreich. Nachhaltigkeit, Qualität und persönliche Beratung seit Jahren.",
        keywords: "ekdruck e.U., 3D-Druck Unternehmen, Linz, Oberösterreich, nachhaltige Fertigung, österreichisches Filament, Qualität, Kundennähe"
      },
      reviews: {
        title: "Kundenbewertungen & Erfahrungen | ekdruck e.U. 3D-Druck",
        description: "Lesen Sie echte Kundenbewertungen über unseren 3D-Druck Service. 5 Sterne Bewertungen für Qualität, Service und Zuverlässigkeit aus Oberösterreich.",
        keywords: "Kundenbewertungen, 3D-Druck Erfahrungen, Testimonials, 5 Sterne Service, Kundenzufriedenheit, zuverlässiger 3D-Druck"
      },
      contact: {
        title: "Kontakt & Angebot | 3D-Druck Service ekdruck e.U. OÖ",
        description: "Kontaktieren Sie ekdruck e.U. für Ihr 3D-Druck Projekt. Kostenlose Beratung und individuelles Angebot für Linz und Oberösterreich. Jetzt anfragen!",
        keywords: "3D-Druck Kontakt, Angebot 3D-Druck, kostenlose Beratung, 3D-Druck Anfrage, Linz, Oberösterreich, individuelles Angebot"
      }
    };

    if (sectionId && seoConfigs[sectionId as keyof typeof seoConfigs]) {
      setSeoData(seoConfigs[sectionId as keyof typeof seoConfigs]);
    }
  }, [sectionId]);

  return seoData;
};