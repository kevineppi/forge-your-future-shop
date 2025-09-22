import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'faq' | 'breadcrumb' | 'blog' | 'article';
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
              "reviewCount": "20"
            }
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

        case 'blog':
          return {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "3D-Druck Blog | ekdruck e.U.",
            "description": "Expertenwissen, Tipps und Trends rund um 3D-Druck, FDM-Verfahren und Rapid Prototyping aus Österreich.",
            "url": "https://www.ek-druck.at/blog",
            "author": {
              "@type": "Organization",
              "name": "ekdruck e.U.",
              "url": "https://www.ek-druck.at"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ekdruck e.U.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ek-druck.at/logo.png"
              }
            }
          };

        case 'article':
          if (data) {
            return {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": data.title,
              "description": data.excerpt,
              "image": `https://www.ek-druck.at${data.image}`,
              "datePublished": data.date,
              "dateModified": data.date,
              "author": {
                "@type": "Person",
                "name": data.author,
                "jobTitle": "3D-Druck Experte"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ekdruck e.U.",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.ek-druck.at/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.ek-druck.at/blog/${data.id}`
              },
              "keywords": data.tags.join(", "),
              "wordCount": data.content ? data.content.split(' ').length : 800
            };
          }
          return null;
        
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