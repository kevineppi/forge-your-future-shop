import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: string;
  schemaType?: 'service' | 'article' | 'product';
  breadcrumbs?: Array<{name: string, url: string}>;
  preloadResources?: Array<{href: string, as: string, type?: string}>;
}

const SEOHead = ({ 
  title = "3D-Druck für Modellbau & Dekoration | Anschauungsmodelle | ekdruck.at",
  description = "Architekturmodelle, Dekorationsobjekte und Kunstgegenstände aus Oberösterreich. Nachhaltiger FDM-Druck mit österreichischem Filament. Express 24h.",
  keywords = "3d-druck modellbau, architekturmodelle 3d-druck, dekoration 3d-druck, anschauungsmodelle, messemodelle, kunstobjekte 3d-druck",
  path = "",
  image = "",
  type = "website",
  schemaType,
  breadcrumbs = [],
  preloadResources = []
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Add meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', 'ekdruck e.U.');
    
    // Add meta robots with enhanced directives
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Add meta viewport (ensure it exists)
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0');
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://www.ek-druck.at${path}`;
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = fullUrl;
      document.head.appendChild(newCanonical);
    }

    // Add/update hreflang tags for DACH market
    const hreflangMap: Record<string, string> = {
      'de-AT': fullUrl,
      'de-DE': fullUrl,
      'de': fullUrl,
      'x-default': fullUrl
    };
    Object.entries(hreflangMap).forEach(([lang, url]) => {
      let hreflang = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!hreflang) {
        hreflang = document.createElement('link');
        hreflang.setAttribute('rel', 'alternate');
        hreflang.setAttribute('hreflang', lang);
        document.head.appendChild(hreflang);
      }
      hreflang.setAttribute('href', url);
    });
    
    // Update Open Graph tags with enhanced properties
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://www.ek-druck.at${path}`);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    // Update OG Image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    // Update OG Type
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }
    
    // Update Twitter Image
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }
    
    // Add preload resources for performance
    preloadResources.forEach((resource) => {
      const existingPreload = document.querySelector(`link[rel="preload"][href="${resource.href}"]`);
      if (!existingPreload) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = resource.href;
        preloadLink.as = resource.as;
        if (resource.type) {
          preloadLink.type = resource.type;
        }
        document.head.appendChild(preloadLink);
      }
    });
    
    // Add individual Schema.org structured data only if schemaType is explicitly provided
    if (schemaType) {
      const schemaId = `schema-${schemaType}-${path.replace(/\//g, '-') || 'home'}`;
      let existingSchema = document.querySelector(`script[data-schema-id="${schemaId}"]`);
      
      if (existingSchema) {
        existingSchema.remove();
      }
      
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema-id', schemaId);
      schemaScript.textContent = JSON.stringify(getSchemaData(schemaType, path, title, description, breadcrumbs));
      document.head.appendChild(schemaScript);
    }
    
    // Cleanup function
    return () => {
      preloadResources.forEach((resource) => {
        const preloadLink = document.querySelector(`link[rel="preload"][href="${resource.href}"]`);
        if (preloadLink) {
          preloadLink.remove();
        }
      });
      
      if (schemaType) {
        const schemaId = `schema-${schemaType}-${path.replace(/\//g, '-') || 'home'}`;
        const schemaToRemove = document.querySelector(`script[data-schema-id="${schemaId}"]`);
        if (schemaToRemove) {
          schemaToRemove.remove();
        }
      }
    };
  }, [title, description, keywords, path, image, type, schemaType, breadcrumbs, preloadResources]);

  const getSchemaData = (schemaType: string, path: string, title: string, description: string, breadcrumbs: Array<{name: string, url: string}>) => {
    const baseSchema = {
      "@context": "https://schema.org",
      "url": `https://www.ek-druck.at${path}`,
      "name": title,
      "description": description,
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
      }
    };

    switch (schemaType) {
      case 'service':
        return {
          ...baseSchema,
          "@type": "Service",
          "serviceType": "3D-Druck Service",
          "areaServed": {
            "@type": "Country",
            "name": "Austria"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "3D-Druck Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "FDM 3D-Druck",
                  "description": "Professioneller FDM 3D-Druck Service für Dekoration, Modellbau und individuelle Unikate"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Rapid Prototyping",
                  "description": "Schnelle Prototypenerstellung in 24-48 Stunden"
                }
              }
            ]
          }
        };
      
      case 'article':
        return {
          ...baseSchema,
          "@type": "Article",
          "headline": title,
          "author": {
            "@type": "Organization",
            "name": "ekdruck e.U."
          },
          "publisher": {
            "@type": "Organization",
            "name": "ekdruck e.U.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png"
            }
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString()
        };
      
      case 'product':
        return {
          ...baseSchema,
          "@type": "Product",
          "image": "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
          "brand": {
            "@type": "Brand",
            "name": "ekdruck e.U."
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "ekdruck e.U."
          },
          "offers": {
            "@type": "Offer",
            "url": `https://www.ek-druck.at${path}`,
            "priceCurrency": "EUR",
            "price": "1.50",
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "ekdruck e.U."
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "30"
          }
        };
      
      default:
        return baseSchema;
    }
  };

  return null;
};

export default SEOHead;