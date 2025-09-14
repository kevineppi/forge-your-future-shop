import { useState, useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export const useSEO = (sectionId?: string): SEOData => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: "3D-Druck Salzburg & Österreich | Rapid Prototyping | ekdruck e.U.",
    description: "3D-Druck Dienstleister für Salzburg, Linz & Österreich. Rapid Prototyping, Stereolithografie, HP Multi Jet Fusion. 3D-Drucker Service für Privatpersonen.",
    keywords: "3d-druck salzburg, 3d-druck dienstleister, 3d-druck österreich, rapid prototyping österreich, 3d drucker kaufen österreich, 3d-druck firma, stereolithografie, hp multi jet fusion"
  });

  useEffect(() => {
    const seoConfigs = {
      hero: {
        title: "3D-Druck Salzburg & Österreich | Rapid Prototyping | ekdruck e.U.",
        description: "3D-Druck Dienstleister für Salzburg, Linz & Österreich. Rapid Prototyping, Stereolithografie, HP Multi Jet Fusion. 3D-Drucker Service für Privatpersonen.",
        keywords: "3d-druck salzburg, 3d-druck dienstleister, 3d-druck österreich, rapid prototyping österreich, 3d drucker kaufen österreich, 3d-druck firma, stereolithografie, hp multi jet fusion"
      },
      services: {
        title: "3D-Druck Dienstleister Salzburg | Rapid Prototyping Services",
        description: "Professionelle 3D-Druck Services: Rapid Prototyping, Stereolithografie, HP Multi Jet Fusion. 3D-Drucker Modelle erstellen für Salzburg & Österreich.",
        keywords: "3d-druck dienstleister, rapid prototyping österreich, stereolithografie, hp multi jet fusion, 3d drucker modelle erstellen, additives fertigungsverfahren, finishing druck"
      },
      advantages: {
        title: "Rapid Prototyping Verfahren Vergleich | 3D-Druck Salzburg",
        description: "Additives Fertigungsverfahren vs. traditionelle Fertigung: Rapid Prototyping Verfahren Übersicht, Finishing Druck & kosteneffiziente Prototypen.",
        keywords: "rapid prototyping verfahren vergleich, additives fertigungsverfahren, rapid prototyping verfahren übersicht, finishing druck, fertigungsverfahren finishen"
      },
      about: {
        title: "3D-Druck Firma Salzburg | ekdruck e.U. Österreich",
        description: "Führende 3D-Druck Firma für Salzburg & Österreich. Spezialist für Rapid Prototyping, 3D-Drucker Service & 3D-Druck für Privatpersonen. Qualität seit Jahren.",
        keywords: "3d-druck firma, 3d-druck salzburg, 3d-druck für privatpersonen, 3d drucker salzburg, drucker salzburg, 3d-druck shop österreich"
      },
      reviews: {
        title: "Kundenbewertungen & Erfahrungen | ekdruck e.U. 3D-Druck",
        description: "Lesen Sie echte Kundenbewertungen über unseren 3D-Druck Service. 5 Sterne Bewertungen für Qualität, Service und Zuverlässigkeit aus Oberösterreich.",
        keywords: "Kundenbewertungen, 3D-Druck Erfahrungen, Testimonials, 5 Sterne Service, Kundenzufriedenheit, zuverlässiger 3D-Druck"
      },
      contact: {
        title: "3D-Drucker kaufen Österreich | Kontakt 3D-Druck Salzburg",
        description: "3D-Drucker kaufen Österreich oder 3D-Druck Service nutzen? Kontakt für Salzburg & Österreich. Kostenlose Beratung für 3D-Druck Dienstleister Vergleich.",
        keywords: "3d drucker kaufen österreich, 3d-druck dienstleister vergleich, 3d-druck salzburg kontakt, 3d-druck shop österreich, kostenlose beratung"
      }
    };

    if (sectionId && seoConfigs[sectionId as keyof typeof seoConfigs]) {
      setSeoData(seoConfigs[sectionId as keyof typeof seoConfigs]);
    }
  }, [sectionId]);

  return seoData;
};