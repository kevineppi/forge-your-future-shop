import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import ArchitekturChecklist from "@/components/landing/ArchitekturChecklist";
import MesseCaseStudy from "@/components/landing/MesseCaseStudy";
import MesseMaterialTips from "@/components/landing/MesseMaterialTips";
import ArchitekturValueProposition from "@/components/landing/ArchitekturValueProposition";
import StickyCTA from "@/components/landing/StickyCTA";
import SectionDivider from "@/components/landing/SectionDivider";
import PersonalDeliveryInfo from "@/components/landing/PersonalDeliveryInfo";
import LocalMessenSection from "@/components/landing/LocalMessenSection";
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import RegionalUniqueContent from "@/components/landing/RegionalUniqueContent";
import { getArchitekturRegionBySlug, regionalArchitekturData } from "@/data/regionalArchitekturData";
import { getArchitekturExtendedDataBySlug } from "@/data/regionalArchitekturExtendedData";
import { getGermanArchitekturBySlug, germanArchitekturData } from "@/data/germanArchitekturData";
import { getGermanArchitekturExtendedBySlug } from "@/data/germanArchitekturExtendedData";
import CTASection from "@/components/landing/CTASection";
import { 
  Building2, 
  Clock, 
  Layers, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Truck,
  Star
} from "lucide-react";

const ArchitekturmodellRegion = () => {
  const { region } = useParams<{ region: string }>();
  const atRegion = region ? getArchitekturRegionBySlug(region) : undefined;
  const deRegion = region ? getGermanArchitekturBySlug(region) : undefined;
  const regionData = atRegion || deRegion;
  const isGerman = !!deRegion && !atRegion;
  const extendedData = region ? (isGerman ? getGermanArchitekturExtendedBySlug(region) : getArchitekturExtendedDataBySlug(region)) : undefined;

  if (!regionData || !extendedData) {
    return <Navigate to="/architekturmodelle" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Architekturmodelle ${regionData.name}`,
    "description": regionData.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ekdruck e.U.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Negrellistraße 15",
        "addressLocality": "Gunskirchen",
        "postalCode": "4623",
        "addressRegion": "Oberösterreich",
        "addressCountry": "AT"
      },
      "telephone": "+43 676 5517197",
      "email": "office@ek-druck.at"
    },
    "areaServed": {
      "@type": regionData.type === 'bundesland' ? "State" : "City",
      "name": regionData.name,
      "containedInPlace": {
        "@type": "Country",
        "name": isGerman ? "Deutschland" : "Österreich"
      }
    },
    "serviceType": "3D-Druck Architekturmodelle",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ek-druck.at/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Architekturmodelle",
        "item": "https://www.ek-druck.at/architekturmodelle"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": regionData.name,
        "item": `https://www.ek-druck.at/architekturmodelle/${regionData.slug}`
      }
    ]
  };

  const faqs = [
    {
      question: `Was kostet ein 3D-gedrucktes Architekturmodell in ${regionData.name}?`,
      answer: `Die Kosten hängen von Größe, Maßstab und Detailgrad ab. Einfache Studienmodelle (Baukörperstudie) starten ab ca. €20, Präsentationsmodelle im Maßstab 1:100 liegen typischerweise zwischen €80–200, Wettbewerbsmodelle mit Umgebung €150–500. Lieferung nach ${regionData.name}: ${regionData.deliveryTime}. Kostenloses Angebot erhalten Sie innerhalb von 6 Stunden.`
    },
    {
      question: `Wie schnell können Architekturmodelle nach ${regionData.name} geliefert werden?`,
      answer: `Standardlieferung nach ${regionData.name}: ${regionData.deliveryTime}. ${regionData.deliveryNote}. Express-Fertigung in 24h ist für Wettbewerbstermine möglich (50% Aufpreis). Wir empfehlen 7 Tage Vorlauf für entspannte Planung ohne Aufpreis.`
    },
    {
      question: `Welche CAD-Programme werden für Architekturmodelle in ${regionData.name} unterstützt?`,
      answer: `Wir verarbeiten STL-, OBJ- und 3MF-Dateien aus allen gängigen Architektursoftware-Programmen: ArchiCAD, Autodesk Revit, SketchUp, Rhino und Vectorworks. Bei Problemen mit dem Export helfen wir kostenlos. Auch native Dateiformate nehmen wir auf Anfrage entgegen und konvertieren für Sie.`
    },
    {
      question: `Welcher Maßstab eignet sich für Architekturmodelle in ${regionData.name}?`,
      answer: `1:100 ist das beliebteste Format für Bauherren-Präsentationen und Einzelgebäude. 1:200 eignet sich für Wettbewerbe mit Umgebungsdarstellung. 1:500 für städtebauliche Studien und Quartiersentwicklungen. Für detaillierte Schnittmodelle 1:50. Wir beraten Sie gerne zur optimalen Wahl für Ihr konkretes Projekt.`
    },
    {
      question: "Können transparente Glasfassaden und Fensterflächen dargestellt werden?",
      answer: "Ja – mit PETG Transparent drucken wir Glasflächen, Fensterbänder und Glasdächer halbtransparent. Diese Elemente werden typischerweise separat gedruckt und eingesetzt. Besonders wirkungsvoll bei modernen Gebäuden mit großen Glasfronten – z.B. Bürogebäude, Kulturbau oder Wintergärten."
    },
    {
      question: `Wie bereite ich meine CAD-Datei für ein Architekturmodell in ${regionData.name} vor?`,
      answer: `Exportieren Sie Ihr Modell als STL-Datei in Millimeter. Wichtig: Das Modell sollte 'wasserdicht' sein (keine offenen Flächen). Details unter 0.8mm bitte leicht aufdicken. Glaselemente als separate STL exportieren. Angebot erhalten Sie innerhalb von 6 Stunden – wir prüfen Ihre Datei kostenlos.`
    },
    {
      question: "Kann ich mehrere Entwurfsvarianten gleichzeitig bestellen?",
      answer: `Ja – das ist einer der größten Vorteile des 3D-Drucks. Mehrere Varianten parallel drucken kostet ca. 20% mehr als ein Modell, ermöglicht aber direkten Vergleich beim Bauherrn oder bei der Jury. Besonders für Wettbewerbe in ${regionData.name} empfohlen: Zwei Varianten geben der Jury eine echte Entscheidungsgrundlage.`
    },
  ];

  // FAQPage Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // AggregateRating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ekdruck e.U.",
    "description": `3D-Druck Architekturmodelle für ${regionData.name} – präzise, maßstabsgetreu, Express-Lieferung möglich`,
    "url": `https://www.ek-druck.at/architekturmodelle/${regionData.slug}`,
    "telephone": "+43 676 5517197",
    "email": "office@ek-druck.at",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Negrellistraße 15",
      "addressLocality": "Gunskirchen",
      "postalCode": "4623",
      "addressRegion": "Oberösterreich",
      "addressCountry": "AT"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "31",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbs = [
    { name: "Architekturmodelle", url: "/architekturmodelle" },
    { name: regionData.name, url: `/architekturmodelle/${regionData.slug}` }
  ];

  const nearbyRegions = regionData.nearbyRegions
    .map(slug => regionalArchitekturData[slug] || germanArchitekturData[slug])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{regionData.metaTitle}</title>
        <meta name="description" content={regionData.metaDescription} />
        <meta name="keywords" content={`architekturmodelle ${regionData.name.toLowerCase()}, 3d-druck architekturmodell ${regionData.name.toLowerCase()}, wettbewerbsmodell ${regionData.name.toLowerCase()}, architekturmodell drucken ${regionData.name.toLowerCase()}, architekturmodelle deutschland`} />
        <link rel="canonical" href={`https://www.ek-druck.at/architekturmodelle/${regionData.slug}`} />
        
        <link rel="alternate" hrefLang="de-AT" href={`https://www.ek-druck.at/architekturmodelle/${regionData.slug}`} />
        <link rel="alternate" hrefLang="de-DE" href={`https://www.ek-druck.at/architekturmodelle/${regionData.slug}`} />
        <link rel="alternate" hrefLang="de" href={`https://www.ek-druck.at/architekturmodelle/${regionData.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://www.ek-druck.at/architekturmodelle/${regionData.slug}`} />
        
        <meta property="og:title" content={regionData.metaTitle} />
        <meta property="og:description" content={regionData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.ek-druck.at/architekturmodelle/${regionData.slug}`} />
        <meta property="og:locale" content="de_AT" />
        <meta property="og:locale:alternate" content="de_DE" />
        
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(aggregateRatingSchema)}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-muted/20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4" />
          <div className="absolute top-20 left-10 w-20 h-20 border border-primary/5 rounded-full" />
          <div className="absolute bottom-32 right-20 w-14 h-14 border border-primary/10 rounded-full" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
                  <MapPin className="w-4 h-4" />
                  {regionData.type === 'bundesland' ? 'Bundesland' : 'Stadt'} {regionData.name}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  {regionData.h1Title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                  {regionData.heroSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link to="/kontakt">
                      Anfrage stellen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="group">
                    <Link to="/architekturmodelle">
                      Alle Infos
                      <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-border/50">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 chip-interactive">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{regionData.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 chip-interactive">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">Ab €20</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary transition-transform duration-200 hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                    <span className="text-sm font-medium ml-1">5.0</span>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-up" delay={200} className="grid grid-cols-2 gap-4">
                <Card className="col-span-2 bg-primary text-primary-foreground border-0 shadow-lg overflow-hidden relative haptic-scale cursor-default">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <CardContent className="p-8 text-center relative">
                    <Building2 className="w-8 h-8 mx-auto mb-3 opacity-80" />
                    <div className="text-5xl font-bold mb-2">{regionData.stats.projekte}</div>
                    <div className="text-primary-foreground/80">Architekturmodelle realisiert</div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50 shadow-md bg-card haptic-scale cursor-default">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{regionData.stats.lieferzeit}</div>
                    <div className="text-sm text-muted-foreground">Lieferzeit</div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50 shadow-md bg-card haptic-scale cursor-default">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{regionData.stats.kunden}</div>
                    <div className="text-sm text-muted-foreground">Kunden in {regionData.name}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <SectionDivider />

        <ArchitekturValueProposition regionName={regionData.name} />

        <MesseCaseStudy 
          caseStudy={extendedData.caseStudy} 
          regionName={regionData.name} 
        />

        <ArchitekturChecklist 
          regionName={regionData.name} 
          deliveryTime={regionData.deliveryTime} 
        />

        <MesseMaterialTips 
          materials={extendedData.materials} 
          regionName={regionData.name}
          industryFocus={extendedData.industryFocus}
        />

        {/* Unique regional text content – prevents thin content / not indexed */}
        <RegionalUniqueContent
          regionName={regionData.name}
          regionSlug={regionData.slug}
          deliveryTime={regionData.deliveryTime}
          type="architektur"
          isGerman={isGerman}
        />

        <PersonalDeliveryInfo regionName={regionData.name} />

        {/* Local Advantages */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Regionale Vorteile
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ihre Vorteile in {regionData.name}
                </h2>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-5">
                {regionData.localAdvantages.map((advantage, index) => (
                  <AnimatedSection key={index} animation="slide-up" delay={index * 75}>
                    <div className="group flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-medium pt-2">{advantage}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto px-4 relative">
            <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto text-center">
              <div className="w-18 h-18 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg p-4">
                <Truck className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lieferung nach {regionData.name}
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                {regionData.deliveryNote}
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Clock, label: "Standard", value: regionData.deliveryTime, highlight: false },
                  { icon: Layers, label: "Express", value: "24h", highlight: true },
                  { icon: Truck, label: "Versandkostenfrei", value: "ab €100", highlight: false }
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="scale-in" delay={200 + index * 100}>
                    <Card className={`border border-border/50 shadow-md overflow-hidden ${item.highlight ? 'ring-1 ring-primary' : ''}`}>
                      {item.highlight && (
                        <div className="bg-primary text-primary-foreground text-xs font-bold py-1 text-center">
                          EMPFOHLEN
                        </div>
                      )}
                      <CardContent className="p-8 text-center bg-card">
                        <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                          item.highlight ? 'bg-primary/15' : 'bg-muted/50'
                        }`}>
                          <item.icon className={`w-7 h-7 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                        <div className={`text-3xl font-bold ${item.highlight ? 'text-primary' : ''}`}>{item.value}</div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
              
              <Button asChild size="lg" className="shadow-lg">
                <Link to="/kontakt">
                  Jetzt Anfrage stellen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Nearby Regions */}
        {nearbyRegions.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in" className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Auch in der Nähe
                </h2>
                <p className="text-muted-foreground">
                  Architekturmodelle für weitere Regionen
                </p>
              </AnimatedSection>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {nearbyRegions.map((nearby, index) => (
                  <AnimatedSection key={nearby.slug} animation="slide-up" delay={index * 75}>
                    <Link 
                      to={`/architekturmodelle/${nearby.slug}`}
                      className="group block"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <Card className="border border-border/50 shadow-sm card-interactive overflow-hidden">
                        <div className="h-1 bg-primary/20 group-hover:bg-primary transition-all duration-300 group-hover:h-1.5" />
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div className="font-bold text-lg group-hover:text-primary transition-colors mb-1">
                            {nearby.name}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                            <Clock className="w-3 h-3" />
                            {nearby.stats.lieferzeit}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection
          headline={`Architekturmodell für ${regionData.name} – Angebot in 6h`}
          subline={`Schicken Sie uns Ihre CAD-Datei oder beschreiben Sie Ihr Projekt. Wir antworten persönlich mit einem verbindlichen Angebot. Express-Lieferung nach ${regionData.name} in ${regionData.deliveryTime}.`}
          ctaLabel="Jetzt kostenlos anfragen"
          ctaHref="/kontakt"
          secondaryLabel="Referenzen ansehen"
          secondaryHref="/referenzen"
          badge={`Service für ${regionData.name}`}
          urgencyText={`⚡ Express 24h für Wettbewerbstermine · Lieferung nach ${regionData.name}: ${regionData.deliveryTime}`}
        />

        <FAQSection 
          faqs={faqs} 
          title={`Häufige Fragen zu Architekturmodellen in ${regionData.name}`}
          subtitle={`Antworten rund um Lieferung und Service für ${regionData.name}`}
          schemaId={`architekturmodelle-${regionData.slug}`}
        />

        {/* All Regions - Full internal linking */}
        <AllRegionsLinks currentSlug={regionData.slug} type="architektur" />

        <RelatedPages currentPage={`/architekturmodelle/${regionData.slug}`} />
      </main>

      <StickyCTA regionName={regionData.name} deliveryTime={regionData.deliveryTime} />

      <Footer />
    </>
  );
};

export default ArchitekturmodellRegion;
