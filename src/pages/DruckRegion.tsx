import SEOHead from "@/components/SEOHead";
import InlineSchema from "@/components/InlineSchema";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import DruckChecklist from "@/components/landing/DruckChecklist";
import DruckValueProposition from "@/components/landing/DruckValueProposition";
import MesseCaseStudy from "@/components/landing/MesseCaseStudy";
import MesseMaterialTips from "@/components/landing/MesseMaterialTips";
import StickyCTA from "@/components/landing/StickyCTA";
import SectionDivider from "@/components/landing/SectionDivider";
import CrossLinkSection from "@/components/landing/CrossLinkSection";
import CTASection from "@/components/landing/CTASection";
import RegionalUniqueContent from "@/components/landing/RegionalUniqueContent";
import { getDruckRegionBySlug, regionalDruckData } from "@/data/regionalDruckData";
import { getDruckExtendedDataBySlug } from "@/data/regionalDruckExtendedData";
import {
  Printer,
  Clock,
  Package,
  CheckCircle,
  ArrowRight,
  MapPin,
  Truck,
  Star,
  Cpu
} from "lucide-react";

interface DruckRegionProps {
  region: string;
}

const DruckRegion = ({ region }: DruckRegionProps) => {
  const regionData = getDruckRegionBySlug(region);
  const extendedData = getDruckExtendedDataBySlug(region);

  if (!regionData) {
    return null;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `3D-Druck ${regionData.name}`,
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
      "containedInPlace": { "@type": "Country", "name": "Österreich" }
    },
    "serviceType": "FDM 3D-Druck Service",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR" }
    }
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ekdruck e.U.",
    "description": `3D-Druck Service für ${regionData.name} – Designstudien, Präsentationsmodelle, Einzelstücke`,
    "url": `https://www.ek-druck.at/3d-druck-${regionData.slug}`,
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ek-druck.at/" },
      { "@type": "ListItem", "position": 2, "name": "FDM 3D-Druck", "item": "https://www.ek-druck.at/fdm-3d-druck" },
      { "@type": "ListItem", "position": 3, "name": regionData.name, "item": `https://www.ek-druck.at/3d-druck-${regionData.slug}` }
    ]
  };

  const fallbackFaqs = [
    {
      question: `Was kostet 3D-Druck in ${regionData.name}?`,
      answer: `Die Kosten hängen von Größe, Material und Komplexität ab. Kleine Modelle (z.B. Designstudien, Präsentationsobjekte) starten ab ca. €20. Modelle im Bereich 10-20cm kosten typischerweise €30-80. Ab 10 Stück erhalten Sie Mengenrabatt. Lieferung nach ${regionData.name}: ${regionData.deliveryTime}. Kostenloses Angebot innerhalb von 6 Stunden.`
    },
    {
      question: `Welche Materialien sind für 3D-Druck in ${regionData.name} verfügbar?`,
      answer: `Wir drucken in PLA+ (Allrounder, umweltfreundlich), PETG (robust, chemisch beständig), ASA (UV-beständig, wetterfest) und TPU (flexibel, elastisch). Alle Materialien in verschiedenen Farben. Für spezielle Anforderungen beraten wir kostenlos.`
    },
    {
      question: `Wie schnell kann nach ${regionData.name} geliefert werden?`,
      answer: `Standardlieferung: ${regionData.deliveryTime}. ${regionData.deliveryNote}. Express-Fertigung in 24h ist für dringende Projekte möglich (Aufpreis 50%). Tracking-Nummer per E-Mail nach Versand.`
    },
    {
      question: `Welche Dateiformate werden akzeptiert?`,
      answer: `STL, OBJ, 3MF und STEP-Dateien. Auch native CAD-Formate auf Anfrage. Falls Sie kein 3D-Modell haben: Wir modellieren nach Zeichnung, Skizze oder Beschreibung – fragen Sie einfach an.`
    },
    {
      question: `Gibt es Mengenrabatt für Projektmengen aus ${regionData.name}?`,
      answer: `Ja – ab 10 Stück erhalten Sie automatisch 10% Rabatt, ab 50 Stück 15% und ab 100 Stück individuellen Projektpreis. Die Qualität bleibt bei jeder Stückzahl identisch. Ideal für Präsentationsmodelle und Konzeptstudien.`
    },
    {
      question: `Kann ich mein Modell persönlich abholen?`,
      answer: regionData.slug === 'gunskirchen' || regionData.slug === 'wels' || regionData.slug === 'linz' || regionData.slug === 'oberoesterreich'
        ? `Ja! Persönliche Abholung in unserem Standort in Gunskirchen (OÖ) ist jederzeit möglich. ${regionData.name} ist nur wenige Minuten entfernt.`
        : `Unser Standort ist in Gunskirchen (OÖ). Für ${regionData.name} empfehlen wir unseren Express-Versand mit Tracking. Bei großen Projekten ist persönliche Lieferung nach Absprache möglich.`
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const breadcrumbs = [
    { name: "FDM 3D-Druck", url: "/fdm-3d-druck" },
    { name: regionData.name, url: `/3d-druck-${regionData.slug}` }
  ];

  return (
    <>
      <SEOHead
        title={regionData.metaTitle}
        description={regionData.metaDescription}
        keywords={`3d druck ${regionData.name.toLowerCase()}, 3d-druck service ${regionData.name.toLowerCase()}, prototypen ${regionData.name.toLowerCase()}, fdm druck ${regionData.name.toLowerCase()}, 3d drucken ${regionData.name.toLowerCase()}`}
        path={`/3d-druck-${regionData.slug}`}
      />
      <InlineSchema id={`druck-service-${regionData.slug}`} schema={serviceSchema} />
      <InlineSchema id={`druck-breadcrumb-${regionData.slug}`} schema={breadcrumbSchema} />
      <InlineSchema id={`druck-faq-${regionData.slug}`} schema={faqSchema} />
      <InlineSchema id={`druck-rating-${regionData.slug}`} schema={aggregateRatingSchema} />

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-muted/20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4" />

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
                  <MapPin className="w-4 h-4" />
                  {regionData.type === 'standort' ? 'Unser Standort' : regionData.type === 'bundesland' ? 'Bundesland' : 'Stadt'} {regionData.name}
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
                      Jetzt anfragen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="group">
                    <Link to="/fdm-3d-druck">
                      FDM-Verfahren im Detail
                      <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-border/50">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{regionData.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                    <Printer className="w-4 h-4 text-primary" />
                    <span className="text-sm">Ab €20</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <span className="text-sm font-medium ml-1">5.0</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200} className="grid grid-cols-2 gap-4">
                <Card className="col-span-2 bg-primary text-primary-foreground border-0 shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <CardContent className="p-8 text-center relative">
                    <Cpu className="w-8 h-8 mx-auto mb-3 opacity-80" />
                    <div className="text-5xl font-bold mb-2">{regionData.stats.projekte}</div>
                    <div className="text-primary-foreground/80">Projekte realisiert</div>
                  </CardContent>
                </Card>
                <Card className="border border-border/50 shadow-md bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{regionData.stats.lieferzeit}</div>
                    <div className="text-sm text-muted-foreground">Lieferzeit</div>
                  </CardContent>
                </Card>
                <Card className="border border-border/50 shadow-md bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{regionData.stats.materialien}</div>
                    <div className="text-sm text-muted-foreground">Materialien</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <SectionDivider />
        <DruckValueProposition regionName={regionData.name} />

        <MesseCaseStudy caseStudy={extendedData.caseStudy} regionName={regionData.name} />
        <DruckChecklist regionName={regionData.name} deliveryTime={regionData.deliveryTime} />

        <MesseMaterialTips
          materials={extendedData.materials}
          regionName={regionData.name}
          industryFocus={extendedData.industryFocus}
        />

        {/* Local Industries */}
        <section className="py-20 md:py-28 bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
                <Cpu className="w-4 h-4 text-primary" />
                Regionale Anwendungen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">3D-Druck Anwendungen in {regionData.name}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">So nutzen Unternehmen in {regionData.name} unseren 3D-Druck Service</p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {regionData.localIndustries.map((industry, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 80}>
                  <Card className="border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Printer className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">{industry.name}</h3>
                          <span className="text-xs text-primary font-medium">{industry.sector}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{industry.application}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Content */}
        <RegionalUniqueContent
          regionName={regionData.name}
          regionSlug={regionData.slug}
          deliveryTime={regionData.deliveryTime}
          type="druck"
        />

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
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Ihre Vorteile in {regionData.name}</h2>
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

        {/* Cross-Links to Messe & Architektur */}
        <CrossLinkSection regionName={regionData.name} regionSlug={regionData.slug} currentType="druck" />

        <FAQSection faqs={faqs} schemaId={regionData.name} />

        <CTASection
          headline={`3D-Druck Projekt in ${regionData.name} starten`}
          subline="Senden Sie uns Ihre CAD-Datei oder beschreiben Sie Ihr Vorhaben. Kostenloses Angebot innerhalb von 6 Stunden – persönlich und unverbindlich."
          ctaLabel="Jetzt kostenlos anfragen"
          ctaHref="/kontakt"
          secondaryLabel="Alle Materialien ansehen"
          secondaryHref="/3d-druck-materialien"
        />

        {/* Related pages */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
              <span className="text-sm text-muted-foreground mr-2 py-2">Weitere Regionen:</span>
              {Object.values(regionalDruckData)
                .filter(r => r.slug !== regionData.slug)
                .slice(0, 12)
                .map(r => (
                  <Link
                    key={r.slug}
                    to={`/3d-druck-${r.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border/60 hover:border-primary/40 hover:text-primary text-sm font-medium transition-all"
                  >
                    <MapPin className="w-3 h-3" />
                    {r.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA regionName={regionData.name} deliveryTime={regionData.deliveryTime} />
    </>
  );
};

export default DruckRegion;
