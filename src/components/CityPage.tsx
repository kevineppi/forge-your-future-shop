import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Palette, FlaskConical } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

interface CityPageProps {
  cityName: string;
  region?: string;
  title: string;
  description: string;
  keywords: string;
  path: string;
  latitude: number;
  longitude: number;
  specificContent?: {
    industryTitle?: string;
    industryDescription?: string;
    startupSection?: boolean;
  };
}

const CityPage = ({ 
  cityName, 
  region, 
  title, 
  description, 
  keywords, 
  path, 
  latitude, 
  longitude,
  specificContent 
}: CityPageProps) => {
  return (
    <>
      <SEOHead 
        title={title}
        description={description}
        keywords={keywords}
        path={path}
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: `3D-Druck ${cityName}`, url: path}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `ekdruck e.U. - 3D-Druck ${cityName}`,
          "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
          "@id": "https://www.ek-druck.at",
          "url": `https://www.ek-druck.at${path}`,
          "telephone": "+436765517197",
          "email": "office@ekdruck.at",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            ...(region && { "addressRegion": region }),
            "addressCountry": "AT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": latitude,
            "longitude": longitude
          },
          "areaServed": [
            { "@type": "City", "name": cityName },
            ...(region ? [{ "@type": "State", "name": region }] : [])
          ],
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
              "name": `Wie schnell kann ich mein 3D-Druck-Teil in ${cityName} erhalten?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach ${cityName}. Standard-Lieferungen dauern 2-3 Werktage.`
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
              "name": `Wie werden die Kosten für 3D-Druck in ${cityName} berechnet?`,
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
                "text": `Ja, wir bieten Schleifen, Lackieren und weitere Finishing-Optionen für Ihre 3D-gedruckten Teile in ${cityName} an.`
              }
            }
          ]
        })}
      </script>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section - Enhanced */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <AnimatedSection className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">{cityName}{region && ` & ${region}`}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service in <span className="text-gradient">{cityName}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ihr lokaler Partner für professionellen FDM 3D-Druck in {cityName}. Schnelle Lieferung innerhalb 24h, 
                nachhaltige österreichische Materialien und persönliche Beratung für Ihr Projekt.
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
                Unsere <span className="text-gradient">Services in {cityName}</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von schnellem Prototyping bis zur Serienfertigung – wir bieten professionelle 3D-Druck-Lösungen für Ihr Projekt in {cityName}.
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
                    Schichtauflösung bis 0,1mm für höchste Präzision in {cityName}.
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
                    Benötigen Sie Ihr Teil schnell? Wir liefern innerhalb von 24 Stunden in ganz {cityName}. 
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

        {/* Industry Focus Section */}
        {specificContent?.industryTitle && specificContent?.industryDescription && (
          <section className="py-20 bg-secondary/5">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                  3D-Druck für <span className="text-gradient">{specificContent.industryTitle}</span> in {cityName}
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  {specificContent.industryDescription}
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <AnimatedSection delay={0.1}>
                  <div className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                    <Factory className="w-10 h-10 text-primary" />
                    <div>
                      <h4 className="text-xl font-semibold">Automobilindustrie</h4>
                      <p className="text-muted-foreground">
                        Leichtbaukomponenten, Prototypen und Werkzeuge für die Automobilproduktion in {cityName}.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                    <Building2 className="w-10 h-10 text-primary" />
                    <div>
                      <h4 className="text-xl font-semibold">Architektur</h4>
                      <p className="text-muted-foreground">
                        Modelle, Prototypen und individualisierte Bauteile für Architekten und Bauunternehmen in {cityName}.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                    <Palette className="w-10 h-10 text-primary" />
                    <div>
                      <h4 className="text-xl font-semibold">Design & Kunst</h4>
                      <p className="text-muted-foreground">
                        Individuelle Designobjekte, Kunstwerke und Kleinserien für Künstler und Designer in {cityName}.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                    <FlaskConical className="w-10 h-10 text-primary" />
                    <div>
                      <h4 className="text-xl font-semibold">Medizintechnik</h4>
                      <p className="text-muted-foreground">
                        Prothesen, Modelle und individualisierte Instrumente für medizinische Anwendungen in {cityName}.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )}

        {/* Startup Section (Conditional) */}
        {specificContent?.startupSection && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                  3D-Druck für Startups in <span className="text-gradient">{cityName}</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Wir unterstützen Startups in {cityName} mit schnellen Prototypen, Kleinserien und individuellen Lösungen.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <AnimatedSection delay={0.1}>
                  <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                    <h3 className="text-2xl font-bold mb-4">Schnelle Prototypen</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Verwirklichen Sie Ihre Ideen in kürzester Zeit mit unseren schnellen Prototyping-Services in {cityName}.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="/rapid-prototyping">Jetzt Prototyp anfragen</a>
                    </Button>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                    <h3 className="text-2xl font-bold mb-4">Kleinserien</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Produzieren Sie Kleinserien kostengünstig und flexibel mit unserem 3D-Druck-Service in {cityName}.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="/serienfertigung">Jetzt Kleinserie starten</a>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Häufig gestellte Fragen zum 3D-Druck in <span className="text-gradient">{cityName}</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Antworten auf die wichtigsten Fragen rund um 3D-Druck-Services in {cityName}.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <Accordion type="single" collapsible className="max-w-4xl mx-auto">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Wie schnell erhalte ich mein 3D-Druck-Teil in {cityName}?</AccordionTrigger>
                  <AccordionContent>
                    Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach {cityName}. Standard-Lieferungen dauern 2-3 Werktage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Welche Dateiformate werden akzeptiert?</AccordionTrigger>
                  <AccordionContent>
                    Wir akzeptieren STL, OBJ, STEP und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns gerne.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Wie werden die Kosten für 3D-Druck in {cityName} berechnet?</AccordionTrigger>
                  <AccordionContent>
                    Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Bieten Sie auch Nachbearbeitung an?</AccordionTrigger>
                  <AccordionContent>
                    Ja, wir bieten Schleifen, Lackieren und weitere Finishing-Optionen für Ihre 3D-gedruckten Teile in {cityName} an.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        <ReviewsWidget />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default CityPage;
