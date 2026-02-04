import { Helmet } from "react-helmet";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import MesseChecklist from "@/components/landing/MesseChecklist";
import MesseCaseStudy from "@/components/landing/MesseCaseStudy";
import MesseMaterialTips from "@/components/landing/MesseMaterialTips";
import MesseValueProposition from "@/components/landing/MesseValueProposition";
import StickyCTA from "@/components/landing/StickyCTA";
import SectionDivider from "@/components/landing/SectionDivider";
import PersonalDeliveryInfo from "@/components/landing/PersonalDeliveryInfo";
import FloatingShowcase from "@/components/landing/FloatingShowcase";
import { getRegionBySlug, regionalMesseData } from "@/data/regionalMesseData";
import { getExtendedDataBySlug } from "@/data/regionalMesseExtendedData";
import { 
  Zap, 
  Clock, 
  Package, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Truck,
  Sparkles,
  Star
} from "lucide-react";

const MessemodellRegion = () => {
  const { region } = useParams<{ region: string }>();
  const regionData = region ? getRegionBySlug(region) : undefined;
  const extendedData = region ? getExtendedDataBySlug(region) : undefined;

  // Redirect to main messemodelle page if region not found
  if (!regionData || !extendedData) {
    return <Navigate to="/messemodelle" replace />;
  }

  // Service Schema for rich snippets
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Messemodelle ${regionData.name}`,
    "description": regionData.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ekdruck e.U.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wegscheid 25",
        "addressLocality": "Gunskirchen",
        "postalCode": "4623",
        "addressRegion": "Oberösterreich",
        "addressCountry": "AT"
      },
      "telephone": "+43 660 9691150",
      "email": "office@ek-druck.at"
    },
    "areaServed": {
      "@type": regionData.type === 'bundesland' ? "State" : "City",
      "name": regionData.name,
      "containedInPlace": {
        "@type": "Country",
        "name": "Österreich"
      }
    },
    "serviceType": "3D-Druck Messemodelle",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Messemodelle Services",
      "itemListElement": regionData.localMessen.map((messe, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Messemodelle für ${messe.name}`,
          "description": `3D-gedruckte Präsentationsmodelle für ${messe.name} in ${messe.location}`
        }
      }))
    }
  };

  // Breadcrumb Schema
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
        "name": "Messemodelle",
        "item": "https://www.ek-druck.at/messemodelle"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": regionData.name,
        "item": `https://www.ek-druck.at/messemodelle/${regionData.slug}`
      }
    ]
  };

  const faqs = [
    {
      question: `Wie schnell können Messemodelle nach ${regionData.name} geliefert werden?`,
      answer: `Standardlieferung nach ${regionData.name}: ${regionData.deliveryTime}. ${regionData.deliveryNote}. Bei dringenden Terminen ist Express-Fertigung in 24h möglich.`
    },
    {
      question: `Welche Messen in ${regionData.name} werden beliefert?`,
      answer: `Wir beliefern alle großen Messen in ${regionData.name}, darunter ${regionData.localMessen.slice(0, 3).map(m => m.name).join(', ')}. Express-Lieferung direkt zum Messegelände ist möglich.`
    },
    {
      question: `Gibt es persönliche Abholung in ${regionData.name}?`,
      answer: regionData.slug === 'oberoesterreich' || regionData.slug === 'wels' || regionData.slug === 'linz'
        ? `Ja! Persönliche Abholung in unserem Standort in Gunskirchen (OÖ) ist möglich. ${regionData.name} ist nur wenige Minuten entfernt.`
        : `Unser Standort ist in Gunskirchen (OÖ). Für ${regionData.name} empfehlen wir unseren Express-Versand, der in ${regionData.deliveryTime} bei Ihnen ist.`
    },
    {
      question: "Welche Größen sind für Messemodelle möglich?",
      answer: "Wir fertigen Objekte von wenigen Zentimetern bis über 2 Meter. Große Objekte werden mehrteilig konstruiert und nahtlos zusammengefügt – ideal für spektakuläre Eyecatcher am Messestand."
    },
    {
      question: "Wie werden die Modelle transportiert?",
      answer: "Unsere PLA- und PETG-Objekte sind bis zu 70% leichter als Holz- oder Metallmodelle. Wir verwenden sichere Verpackung mit Versandtracking. Express-Versand ist für dringende Messetermine verfügbar."
    }
  ];

  const breadcrumbs = [
    { name: "Messemodelle", url: "/messemodelle" },
    { name: regionData.name, url: `/messemodelle/${regionData.slug}` }
  ];

  // Get nearby regions for internal linking
  const nearbyRegions = regionData.nearbyRegions
    .map(slug => regionalMesseData[slug])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{regionData.metaTitle}</title>
        <meta name="description" content={regionData.metaDescription} />
        <meta name="keywords" content={`messemodelle ${regionData.name.toLowerCase()}, 3d-druck ${regionData.name.toLowerCase()}, messebau ${regionData.name.toLowerCase()}, präsentationsmodelle ${regionData.name.toLowerCase()}, messe ${regionData.name.toLowerCase()}`} />
        <link rel="canonical" href={`https://www.ek-druck.at/messemodelle/${regionData.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={regionData.metaTitle} />
        <meta property="og:description" content={regionData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.ek-druck.at/messemodelle/${regionData.slug}`} />
        <meta property="og:locale" content="de_AT" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden min-h-[90vh] flex items-center">
          {/* Dynamic background */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-primary/5" />
          
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
              {/* Left: Content */}
              <AnimatedSection animation="fade-in" className="order-2 lg:order-1">
                {/* Location badge with animation */}
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
                  <MapPin className="w-4 h-4" />
                  {regionData.type === 'bundesland' ? 'Bundesland' : 'Stadt'} {regionData.name}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="block">Messemodelle für</span>
                  <span className="text-primary">{regionData.name}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  {regionData.heroSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" variant="hero" className="text-base group">
                    <Link to="/kontakt">
                      Anfrage stellen
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="group">
                    <Link to="/messemodelle">
                      Alle Infos
                      <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </Button>
                </div>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 chip-interactive">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{regionData.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 chip-interactive">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm">Express 24h</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-primary text-primary transition-all duration-300 hover:scale-125" 
                        style={{ transitionDelay: `${i * 50}ms` }} 
                      />
                    ))}
                    <span className="text-sm font-medium ml-2">5.0</span>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Right: Floating Showcase */}
              <div className="order-1 lg:order-2 hidden md:block">
                <FloatingShowcase 
                  regionName={regionData.name}
                  stats={regionData.stats}
                />
              </div>

              {/* Mobile Stats - Show on mobile only */}
              <div className="order-1 lg:hidden grid grid-cols-3 gap-3 mb-6">
                <div className="bg-primary text-primary-foreground rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">{regionData.stats.messen}</div>
                  <div className="text-xs text-primary-foreground/70">Messen</div>
                </div>
                <div className="bg-card border border-border/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{regionData.stats.lieferzeit}</div>
                  <div className="text-xs text-muted-foreground">Lieferung</div>
                </div>
                <div className="bg-card border border-border/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{regionData.stats.kunden}</div>
                  <div className="text-xs text-muted-foreground">Kunden</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Transition Animation */}
        <SectionDivider />

        {/* Why 3D-Druck - Value Proposition */}
        <MesseValueProposition regionName={regionData.name} />

        {/* Case Study */}
        <MesseCaseStudy 
          caseStudy={extendedData.caseStudy} 
          regionName={regionData.name} 
        />

        {/* Planning Checklist */}
        <MesseChecklist 
          regionName={regionData.name} 
          deliveryTime={regionData.deliveryTime} 
        />

        {/* Material Tips */}
        <MesseMaterialTips 
          materials={extendedData.materials} 
          regionName={regionData.name}
          industryFocus={extendedData.industryFocus}
        />

        {/* Personal Delivery Service */}
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
                  { icon: Zap, label: "Express", value: "24h", highlight: true },
                  { icon: Package, label: "Versandkostenfrei", value: "ab €100", highlight: false }
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
                  Messemodelle für weitere Regionen
                </p>
              </AnimatedSection>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {nearbyRegions.map((nearby, index) => (
                  <AnimatedSection key={nearby.slug} animation="slide-up" delay={index * 75}>
                    <Link 
                      to={`/messemodelle/${nearby.slug}`}
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
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <Card className="bg-primary text-primary-foreground border-0 overflow-hidden shadow-xl haptic-scale">
                <CardContent className="p-10 md:p-16 text-center relative">
                  {/* Subtle decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative">
                    <Sparkles className="w-10 h-10 mx-auto mb-6 opacity-80 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      Messemodelle für {regionData.name}?
                    </h2>
                    <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                      Kontaktieren Sie uns für ein unverbindliches Angebot. Express-Lieferung nach {regionData.name} in {regionData.deliveryTime}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" variant="secondary" className="text-base shadow-lg group">
                        <Link to="/kontakt">
                          Anfrage stellen
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 group">
                        <Link to="/referenzen">
                          Referenzen ansehen
                          <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={faqs} 
          title={`Häufige Fragen zu Messemodellen in ${regionData.name}`}
          subtitle={`Antworten rund um Lieferung und Service für ${regionData.name}`}
          schemaId={`messemodelle-${regionData.slug}`}
        />

        {/* Related Pages */}
        <RelatedPages currentPage={`/messemodelle/${regionData.slug}`} />
      </main>

      {/* Sticky CTA Bar */}
      <StickyCTA regionName={regionData.name} deliveryTime={regionData.deliveryTime} />

      <Footer />
    </>
  );
};

export default MessemodellRegion;
