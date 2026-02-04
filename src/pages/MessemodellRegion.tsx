import { Helmet } from "react-helmet";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import MesseChecklist from "@/components/landing/MesseChecklist";
import MesseCaseStudy from "@/components/landing/MesseCaseStudy";
import MesseMaterialTips from "@/components/landing/MesseMaterialTips";
import MesseValueProposition from "@/components/landing/MesseValueProposition";
import StickyCTA from "@/components/landing/StickyCTA";
import { getRegionBySlug, regionalMesseData } from "@/data/regionalMesseData";
import { getExtendedDataBySlug } from "@/data/regionalMesseExtendedData";
import { 
  Presentation, 
  Zap, 
  Clock, 
  Package, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Truck,
  Star,
  Target
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
      answer: `Standardlieferung nach ${regionData.name}: ${regionData.deliveryTime}. ${regionData.deliveryNote}. Bei dringenden Terminen ist Express-Fertigung in 24-48h möglich.`
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
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  {regionData.type === 'bundesland' ? 'Bundesland' : 'Stadt'} {regionData.name}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {regionData.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  {regionData.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link to="/kontakt">
                      Anfrage stellen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/messemodelle">Alle Infos zu Messemodellen</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Lieferzeit: {regionData.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4" />
                    Express 24h möglich
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-1">{regionData.stats.messen}</div>
                    <div className="text-sm text-primary-foreground/80">Messen beliefert</div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-2 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{regionData.stats.lieferzeit}</div>
                    <div className="text-sm text-muted-foreground">Lieferzeit</div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-2 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{regionData.stats.kunden}</div>
                    <div className="text-sm text-muted-foreground">Kunden in {regionData.name}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Selling Points - Extended Data */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  Warum ekdruck für {regionData.name}?
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {extendedData.uniqueSellingPoints.map((usp, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                        <p className="font-medium">{usp}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Messen Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Messen in {regionData.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wir beliefern Aussteller bei allen wichtigen Messen in {regionData.name}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {regionData.localMessen.map((messe, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Presentation className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{messe.name}</h3>
                        <p className="text-sm text-muted-foreground">{messe.location}</p>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full mt-2 inline-block">
                          {messe.type}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/kontakt">
                  Modell für Ihre Messe anfragen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

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

        {/* Local Advantages */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ihre Vorteile in {regionData.name}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {regionData.localAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border-2">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Truck className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lieferung nach {regionData.name}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {regionData.deliveryNote}
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <Card className="border-2">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold mb-1">Standard</div>
                    <div className="text-2xl font-bold text-primary">{regionData.deliveryTime}</div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold mb-1">Express</div>
                    <div className="text-2xl font-bold text-primary">24-48h</div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6 text-center">
                    <Package className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold mb-1">Versandkostenfrei</div>
                    <div className="text-2xl font-bold text-primary">ab €100</div>
                  </CardContent>
                </Card>
              </div>
              <Button asChild size="lg" variant="hero">
                <Link to="/kontakt">
                  Jetzt Anfrage stellen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Nearby Regions */}
        {nearbyRegions.length > 0 && (
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Auch in der Nähe
                </h2>
                <p className="text-muted-foreground">
                  Messemodelle für weitere Regionen
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {nearbyRegions.map((nearby) => (
                  <Link 
                    key={nearby.slug}
                    to={`/messemodelle/${nearby.slug}`}
                    className="group"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group-hover:scale-105">
                      <CardContent className="p-5 text-center">
                        <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {nearby.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {nearby.stats.lieferzeit} Lieferzeit
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Messemodelle für {regionData.name}?
                  </h2>
                  <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Kontaktieren Sie uns für ein unverbindliches Angebot. Express-Lieferung nach {regionData.name} in {regionData.deliveryTime}.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary" className="text-base">
                      <Link to="/kontakt">
                        Anfrage stellen
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
                      <Link to="/referenzen">
                        Referenzen ansehen
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
