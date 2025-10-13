// This is a template component that will be used by all city pages
// It contains the full structure from Linz3DDruck.tsx

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Palette, FlaskConical } from "lucide-react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

interface CityTemplateProps {
  city: string;
  region?: string;
  path: string;
  lat: number;
  lng: number;
  description: string;
  pageTitle?: string;
  seoKeywords?: string;
}

export const CityTemplate = ({
  city,
  region,
  path,
  lat,
  lng,
  description,
  pageTitle,
  seoKeywords
}: CityTemplateProps) => {
  const title = pageTitle || `3D Druck ${city} – Prototypen & Fertigung | ek-druck`;
  const keywords = seoKeywords || `3d-druck ${city.toLowerCase()}, 3d drucker ${city.toLowerCase()}, fdm druck ${city.toLowerCase()}, rapid prototyping ${city.toLowerCase()}, ${region ? `3d-druck ${region.toLowerCase()}, ` : ''}prototypen ${city.toLowerCase()}`;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <SEOHead 
        title={title}
        description={`Professioneller 3D Druck in ${city}. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!`}
        keywords={keywords}
        path={path}
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: `3D-Druck ${city}`, url: path}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `ekdruck e.U. - 3D-Druck ${city}`,
          "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
          "@id": "https://www.ek-druck.at",
          "url": `https://www.ek-druck.at${path}`,
          "telephone": "+436765517197",
          "email": "office@ekdruck.at",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            ...(region && { "addressRegion": region }),
            "addressCountry": "AT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": lat,
            "longitude": lng
          },
          "areaServed": region ? [
            { "@type": "City", "name": city },
            { "@type": "State", "name": region }
          ] : { "@type": "City", "name": city },
          "priceRange": "€€",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47"
          }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `Wie schnell kann ich mein 3D-Druck-Teil in ${city} erhalten?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach ${city}. Standard-Lieferungen dauern 2-3 Werktage.`
              }
            },
            {
              "@type": "Question",
              "name": "Welche Dateiformate werden akzeptiert?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wir akzeptieren STL, OBJ, STEP und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns gerne."
              }
            },
            {
              "@type": "Question",
              "name": `Wie werden die Kosten für 3D-Druck in ${city} berechnet?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung."
              }
            },
            {
              "@type": "Question",
              "name": "Bieten Sie auch Nachbearbeitung an?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Ja, wir bieten Schleifen, Lackieren und weitere Finishing-Optionen für Ihre 3D-gedruckten Teile in ${city} an.`
              }
            }
          ]
        })}
      </script>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section - Enhanced */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <AnimatedSection className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">{city}{region && ` & ${region}`}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service in <span className="text-gradient">{city}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot erhalten
                  <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
              
              {/* USPs */}
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">24h Express</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Nachhaltig</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Made in Austria</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Top Qualität</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Unsere <span className="text-gradient">Services in {city}</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von schnellem Prototyping bis zur Serienfertigung – wir bieten professionelle 3D-Druck-Lösungen für Ihr Projekt in {city}.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Box className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">FDM 3D-Druck</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professioneller FDM 3D-Druck für Prototypen, Einzelteile und Kleinserien. 
                    Schichtauflösung bis 0,1mm für höchste Präzision in {city}.
                  </p>
                  <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Express Service 24h</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Benötigen Sie Ihr Teil schnell? Wir liefern innerhalb von 24 Stunden in ganz {city}. 
                    Perfekt für dringende Projekte und Deadlines.
                  </p>
                  <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nachhaltige Materialien</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Wir verwenden ausschließlich hochwertige Filamente aus österreichischer Produktion. 
                    PLA, PETG, ABS, Nylon – alle aus nachhaltiger Herstellung.
                  </p>
                  <a href="/3d-druck-materialien" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why ekdruck Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Warum ekdruck für <span className="text-gradient">3D-Druck in {city}</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist aus Oberösterreich bieten wir Ihnen lokale Expertise, 
                  schnelle Lieferzeiten und persönliche Betreuung für Ihr Projekt in {city}.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Schnelle Lieferung nach {city}</h3>
                      <p className="text-muted-foreground">Express-Versand innerhalb von 24h direkt zu Ihnen nach {city}. Standard-Lieferung in 2-3 Werktagen österreichweit.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lokaler österreichischer Anbieter</h3>
                      <p className="text-muted-foreground">Keine langen Lieferwege aus dem Ausland. Direkt aus Oberösterreich mit kurzen Kommunikationswegen und persönlichem Kontakt.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Persönliche Beratung auf Deutsch</h3>
                      <p className="text-muted-foreground">Kompetente Unterstützung bei der Material- und Verfahrenswahl. Wir optimieren Ihre CAD-Dateien für beste Druckergebnisse.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Faire Preise & transparente Kosten</h3>
                      <p className="text-muted-foreground">Nutzen Sie unseren Kostenrechner für eine sofortige Preisschätzung. Keine versteckten Kosten, faire Konditionen.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <ReviewsWidget />

        {/* CTA Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in {city}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Kontaktieren Sie uns noch heute für ein kostenloses Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+436765517197" className="text-lg hover:text-primary transition-colors">
                    +43 676 5517197
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:office@ekdruck.at" className="text-lg hover:text-primary transition-colors">
                    office@ekdruck.at
                  </a>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="/#contact">Kontaktformular</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        <Footer />
      </div>
    </>
  );
};
