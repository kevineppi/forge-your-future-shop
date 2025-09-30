import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'faq' | 'breadcrumb';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const getStructuredData = () => {
      switch (type) {
        case 'organization':
          return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ekdruck e.U.",
            "description": "Professioneller 3D-Druck Service für Linz und Oberösterreich. Einzelanfertigungen, Prototypen und Serienfertigung mit österreichischem Filament.",
            "url": "https://www.ek-druck.at",
            "telephone": "+43 676 5517197",
            "email": "office@ek-druck.at",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Negrellistraße 15",
              "addressLocality": "Gunskirchen",
              "addressRegion": "Oberösterreich",
              "postalCode": "4623",
              "addressCountry": "AT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.135",
              "longitude": "13.975"
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "areaServed": [
              "Oberösterreich",
              "Linz",
              "Wels",
              "Linz",
              "Österreich"
            ],
            "keywords": "3D-Druck, Prototyping, Einzelanfertigungen, Serienfertigung, nachhaltiger 3D-Druck, österreichisches Filament",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "21"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Hannah E."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen..",
                "datePublished": "2025-01-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Simone G."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Anwortet schnell👌 Preis- Leistung extrem fair Empfehlenswert!",
                "datePublished": "2025-01-10"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Klaus F."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war, was für meine Anwendung nicht relevant gewesen wäre. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.",
                "datePublished": "2025-01-12"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Silvio T."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Kann ich nur weiterempfehlen! Sehr gerne wieder. Preis Leistung ist einfach Super. Sehr gerne wieder",
                "datePublished": "2025-01-18"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Ing. Rocco Skombor BSc"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Alles hat wunderbar geklappt. Kundenservice sehr professionell. Kann ich weiter empfehlen!",
                "datePublished": "2024-12-20"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Christian Steller"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Ich bin absolut begeistert von ekDruck! Die Qualität ist erstklassig, jedes Detail wird sehr präzise und sauber umgesetzt. Die Kommunikation war von Anfang an ausgesprochen freundlich und professionell.",
                "datePublished": "2024-12-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sadin Ramic"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Kompetent und motiviert! Falls man in Richtung 3D Druck etwas braucht, ist man bei Kevin gut aufgehoben!",
                "datePublished": "2024-12-10"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Gertude Emirich"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Persönlich, sehr kompetente Beratung. Individuelle Dekoantikel in verschiedenen Ausführungen und nach Wunsch - sehr empfehlenswert! Gerne wieder!",
                "datePublished": "2024-12-05"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Georg Obereder"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Tolle Produkte Made in Austria, wo nix unmöglich ist!",
                "datePublished": "2024-11-28"
              }
            ]
          };
        
        case 'service':
          return {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "3D-Druck Service Oberösterreich",
            "description": "Professionelle 3D-Druck Dienstleistungen: FDM 3D-Druck, Rapid Prototyping, Einzelanfertigungen, Serienfertigung und nachhaltige Materialien aus Oberösterreich.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ekdruck e.U.",
              "url": "https://www.ek-druck.at",
              "telephone": "+43 676 5517197",
              "email": "office@ek-druck.at",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Negrellistraße 15",
                "addressLocality": "Gunskirchen",
                "addressRegion": "Oberösterreich",
                "postalCode": "4623",
                "addressCountry": "AT"
              }
            },
            "areaServed": [
              {
                "@type": "Place",
                "name": "Oberösterreich"
              },
              {
                "@type": "Place", 
                "name": "Linz"
              },
              {
                "@type": "Place",
                "name": "Wels"
              },
              {
                "@type": "Place",
                "name": "Österreich"
              }
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.ek-druck.at",
              "servicePhone": "+43 676 5517197"
            },
            "serviceType": "3D-Druck, Rapid Prototyping, FDM, Additive Fertigung, Prototypenerstellung",
            "category": "Manufacturing, 3D Printing, Prototyping, Custom Manufacturing",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceRange": "€€",
              "priceCurrency": "EUR"
            }
          };
        
        case 'faq':
          return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was kostet 3D-Druck in Oberösterreich?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Kosten für 3D-Druck hängen von Material, Größe und Komplexität ab. Kontaktieren Sie uns für ein kostenloses Angebot. Prototypen beginnen bereits ab €50."
                }
              },
              {
                "@type": "Question", 
                "name": "Welche Materialien verwenden Sie für 3D-Druck?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wir verwenden ausschließlich österreichisches Filament aus Industrieabfällen: PLA, PLA+, PETG, ABS und flexible Materialien in allen Farben."
                }
              },
              {
                "@type": "Question",
                "name": "Wie schnell ist die Lieferung von 3D-Druck Teilen?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Standard-Lieferzeit beträgt 3-5 Tage. Express-Service (24-48h) ist verfügbar. Lieferung in ganz Oberösterreich."
                }
              },
              {
                "@type": "Question",
                "name": "Bieten Sie auch CAD-Design und Konstruktion an?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, wir bieten professionelle 3D-Modellierung, CAD-Konstruktion und technische Zeichnungen für Ihre individuellen Projekte an."
                }
              }
            ]
          };
        
        case 'breadcrumb':
          return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ek-druck.at"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "3D-Druck Services",
                "item": "https://www.ek-druck.at/#services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Über uns",
                "item": "https://www.ek-druck.at/#about"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Kontakt",
                "item": "https://www.ek-druck.at/#contact"
              }
            ]
          };
        
        default:
          return null;
      }
    };

    const structuredData = getStructuredData();
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      script.id = `structured-data-${type}`;
      
      // Remove existing script if it exists
      const existing = document.getElementById(`structured-data-${type}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
      
      return () => {
        const scriptToRemove = document.getElementById(`structured-data-${type}`);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [type, data]);

  return null;
};

export default StructuredData;