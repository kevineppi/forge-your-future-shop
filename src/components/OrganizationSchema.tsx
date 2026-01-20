import { useEffect } from 'react';

const OrganizationSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "EK-Druck - 3D-Druck Österreich",
      "alternateName": "EK-Druck",
      "url": "https://www.ek-druck.at",
      "logo": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
      "description": "Professioneller 3D-Druck Service in Österreich. FDM-Druck für Modellbau, Dekoration und Geschenke mit schneller Lieferung.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AT",
        "addressRegion": "Oberösterreich"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.2082,
        "longitude": 14.2860
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Österreich"
        },
        {
          "@type": "State",
          "name": "Wien"
        },
        {
          "@type": "State",
          "name": "Niederösterreich"
        },
        {
          "@type": "State",
          "name": "Oberösterreich"
        },
        {
          "@type": "State",
          "name": "Steiermark"
        },
        {
          "@type": "State",
          "name": "Salzburg"
        },
        {
          "@type": "State",
          "name": "Tirol"
        },
        {
          "@type": "State",
          "name": "Kärnten"
        },
        {
          "@type": "State",
          "name": "Vorarlberg"
        },
        {
          "@type": "State",
          "name": "Burgenland"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["German", "English"],
        "email": "office@ek-druck.at"
      },
      "sameAs": [
        "https://www.ek-druck.at"
      ],
      "foundingDate": "2020",
      "knowsAbout": [
        "3D-Druck",
        "FDM-Druck",
        "Modellbau",
        "Architekturmodelle",
        "Dekoration",
        "PLA",
        "PETG",
        "ABS",
        "TPU"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "3D-Druck Dienstleistungen",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "FDM 3D-Druck",
              "description": "Fused Deposition Modeling für Modellbau und Dekoration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Architekturmodelle",
              "description": "Präzise 3D-gedruckte Architekturmodelle und Designstudien"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dekoration & Geschenke",
              "description": "Individuelle Dekoartikel und personalisierte Geschenke"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Einzelanfertigungen",
              "description": "Individuelle 3D-Druck Einzelteile nach Maß"
            }
          }
        ]
      }
    };

    const scriptId = 'organization-schema';
    
    // Remove existing schema to prevent duplicates
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = scriptId;
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default OrganizationSchema;