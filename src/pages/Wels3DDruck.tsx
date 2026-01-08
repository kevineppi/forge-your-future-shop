import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Car, Truck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Wels3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Wels | Nur 15 Min entfernt | Same-Day möglich"
        description="Wels: Kürzester Weg zum 3D-Druck! Same-Day Abholung, Express 24h. Industriestadt vertraut auf lokal. → Jetzt Welser Sonderangebot sichern"
        keywords="3d-druck wels, 3d drucker wels, fdm druck wels, rapid prototyping wels, 3d-druck service wels, prototypen wels, schnelle lieferung wels"
        path="/3d-druck-wels"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Wels", url: "/3d-druck-wels"}
      ]} />
      <LocalBusinessSchema 
        city="Wels"
        region="Oberösterreich"
        latitude="48.1664"
        longitude="14.0220"
        deliveryTime="Same-Day"
      />
      <FAQSchema 
        city="Wels"
        faqs={[
          {
            question: "Wie schnell kann ich mein 3D-Druck-Teil in Wels erhalten?",
            answer: "Same-Day Lieferung möglich! Wir sind nur 15 Minuten von Wels entfernt. Abholung in Gunskirchen auch möglich. Express-Lieferung innerhalb weniger Stunden."
          },
          {
            question: "Ist Abholung in der Nähe von Wels möglich?",
            answer: "Ja! Sie können Ihre Teile direkt in Gunskirchen abholen – nur 15 Minuten von Wels entfernt. Nach Terminvereinbarung auch am selben Tag möglich."
          },
          {
            question: "Was kostet 3D-Druck in Wels?",
            answer: "Die Kosten hängen vom Material ab: PLA ab €1,50/Stunde, PETG ab €2,00/Stunde, ABS ab €2,50/Stunde, PA12 Nylon ab €4,50/Stunde. Nutzen Sie unseren Online-Kostenrechner für eine genaue Schätzung."
          },
          {
            question: "Welche Materialien sind verfügbar?",
            answer: "Wir bieten PLA (biobasiert), PETG (robust), ABS (hitzebeständig), PA12 Nylon (hochfest) und PA12-CF (Carbon verstärkt) – alle aus österreichischer Produktion in verschiedenen Farben."
          }
        ]}
      />
      <HowToSchema 
        name="3D-Druck bestellen in Wels"
        description="So einfach bestellen Sie professionelle 3D-Drucke in Wels bei ekdruck"
        totalTime="PT4H"
        steps={[
          {
            name: "CAD-Datei hochladen oder Anfrage senden",
            text: "Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP) per E-Mail an office@ek-druck.at oder nutzen Sie unseren Online-Kostenrechner. Telefon: +43 676 5517197"
          },
          {
            name: "Express-Angebot erhalten",
            text: "Bei dringenden Anfragen aus Wels erhalten Sie innerhalb von 2-4 Stunden ein Angebot. Standard innerhalb von 24 Stunden mit Lieferzeit und Materialempfehlung."
          },
          {
            name: "Schnelle Produktion",
            text: "Nach Ihrer Freigabe starten wir sofort mit der Produktion. Bei Express-Aufträgen aus Wels erfolgt die Fertigung prioritär."
          },
          {
            name: "Same-Day Lieferung oder Abholung",
            text: "Abholung in Gunskirchen (15 Min von Wels) oder Express-Lieferung am selben Tag. Gratis Versand ab €50."
          }
        ]}
      />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section - Enhanced with Speed Focus */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <AnimatedSection className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Car className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Nur 15 Minuten von Wels</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Schnellster 3D-Druck für <span className="text-gradient">Wels</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-foreground">Same-Day Service</strong> für die Industriestadt Wels! 
                Nur <strong className="text-foreground">15 Minuten</strong> entfernt – <strong className="text-foreground">Abholung in Gunskirchen</strong> möglich. 
                Professioneller FDM 3D-Druck mit kürzesten Lieferzeiten in ganz Oberösterreich.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Express-Angebot erhalten
                  <Zap className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
              
              {/* USPs - Speed Focused */}
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Same-Day</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Car className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">15 Min entfernt</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Factory className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Industrie-Ready</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Made in AT</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section - Enhanced with Speed */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Express-Services für <span className="text-gradient">Wels</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Schnellster 3D-Druck in Oberösterreich – perfekt für die Industriestadt Wels und dringende Projekte.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Same-Day Express</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Schnellste Lieferung in ganz OÖ! Bestellung am Morgen, Abholung am Nachmittag in Gunskirchen. 
                    Nur 15 Minuten von Wels – perfekt für dringende Projekte.
                  </p>
                  <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Industrie 3D-Druck</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    FDM 3D-Druck für Welser Industriebetriebe. Funktionsprototypen, Betriebsmittel, 
                    Ersatzteile und Vorrichtungen – robust und präzise.
                  </p>
                  <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Abholung vor Ort</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Holen Sie Ihre Teile direkt in Gunskirchen ab – nur 15 Minuten von Wels. 
                    Persönliche Übergabe und Beratung inklusive. Terminvereinbarung möglich.
                  </p>
                  <a href="/kontakt" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why ekdruck Section - Speed Focused */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Warum ekdruck der <span className="text-gradient">schnellste Partner</span> für Wels ist
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als lokaler 3D-Druck-Spezialist bieten wir Welser Unternehmen die kürzesten Lieferwege 
                  und schnellsten Reaktionszeiten in ganz Oberösterreich.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Car className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Nur 15 Minuten Entfernung</h3>
                      <p className="text-muted-foreground">Direkter Weg von Gunskirchen nach Wels – kürzeste Lieferwege in ganz OÖ. Abholung vor Ort jederzeit nach Terminvereinbarung möglich.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Same-Day Express-Service</h3>
                      <p className="text-muted-foreground">Bestellung vor 10 Uhr – Lieferung am selben Tag! Perfekt für dringende Industrieprojekte und kurzfristige Produktionsausfälle.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Industrie-Expertise Wels</h3>
                      <p className="text-muted-foreground">Spezialisiert auf technische Bauteile für Welser Industriebetriebe. Funktionsprototypen, Betriebsmittel und Ersatzteile.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Direkte Kommunikation</h3>
                      <p className="text-muted-foreground">Persönlicher Kontakt auf Deutsch, keine Callcenter. Technische Beratung von Experten für Ihre Welser Projekte.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Focus for Wels */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  3D-Druck für <span className="text-gradient">Welser Industrie</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als Industriestadt benötigt Wels zuverlässige und schnelle Lösungen für technische Bauteile – 
                  wir liefern präzise und rechtzeitig.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Factory className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Maschinenbau</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Funktionsprototypen, Ersatzteile und Vorrichtungen für Welser Maschinenbaubetriebe. 
                      Präzise und schnell.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Box className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Betriebsmittel</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Individuelle Halterungen, Werkzeuge und Vorrichtungen für die Produktion. 
                      Optimiert für Ihre Prozesse.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Architektur</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Architekturmodelle für Welser Planungsbüros und Bauvorhaben. 
                      Präsentationsreif und detailgetreu.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Truck className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Ersatzteile</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Schnelle Fertigung von Ersatzteilen bei Produktionsausfällen. 
                      Minimale Stillstandzeiten dank Express-Service.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section - Enhanced */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  <span className="text-gradient">Premium-Materialien</span> für Wels
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Wir setzen ausschließlich auf hochwertige Filamente aus österreichischer Produktion. 
                  Perfekt für technische Anwendungen in Welser Industriebetrieben.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">Bio-PLA</h3>
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold">Bio</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Österreichisches Biofilament für Prototypen und Präsentationsmodelle. 
                      100% kompostierbar, perfekt für Architekturmodelle.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Nachhaltig & Bio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Hohe Detailgenauigkeit</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">PETG Industrial</h3>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">Robust</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Chemikalienresistent und schlagfest. Ideal für funktionale Bauteile 
                      in Welser Industriebetrieben. UV-stabil für Außeneinsätze.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Industrie-geeignet</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Chemikalienbeständig</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">ABS Technical</h3>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-semibold">Hitzebeständig</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Bis 100°C hitzebeständig. Perfekt für technische Prototypen, 
                      Betriebsmittel und Gehäuse in der Welser Industrie.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Temperaturbeständig</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Mechanisch stabil</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">Carbon-Nylon</h3>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold">Premium</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Carbon-verstärkt für höchste Belastbarkeit. Ideal für 
                      hochfeste Bauteile im Maschinenbau. Leichtbau-Eigenschaften.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Extrem belastbar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>High-Performance</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="text-center mt-10">
                <a href="/3d-druck-materialien" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg">
                  Alle Materialien im Detail ansehen
                  <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Express Focus */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  <span className="text-gradient">Express-Prozess</span> für Wels
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der Anfrage bis zur Lieferung oder Abholung – unser schneller Prozess 
                  macht 3D-Druck in Wels besonders effizient.
                </p>
              </AnimatedSection>
              
              <div className="relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary"></div>
                
                <div className="space-y-8">
                  <AnimatedSection delay={0.1}>
                    <div className="flex gap-6 items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 relative z-10">
                        1
                      </div>
                      <div className="flex-1 bg-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                        <h3 className="font-bold text-xl mb-3">Express-Anfrage</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP) per E-Mail oder Telefon (+43 676 5517197). 
                          Bei Express-Anfragen aus Wels antworten wir innerhalb von 2-4 Stunden mit einem Angebot.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={0.2}>
                    <div className="flex gap-6 items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 relative z-10">
                        2
                      </div>
                      <div className="flex-1 bg-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                        <h3 className="font-bold text-xl mb-3">Sofortige Freigabe</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Nach Ihrer schnellen Freigabe starten wir umgehend mit der Produktion. 
                          Bei Express-Aufträgen aus Wels wird prioritär produziert – Same-Day Service inklusive.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={0.3}>
                    <div className="flex gap-6 items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 relative z-10">
                        3
                      </div>
                      <div className="flex-1 bg-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                        <h3 className="font-bold text-xl mb-3">Schnelle Fertigung</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Modernste FDM-Drucker arbeiten an Ihrem Projekt. Sie werden über den Fortschritt informiert 
                          und können bei Bedarf vorbeikommen – nur 15 Minuten von Wels entfernt.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={0.4}>
                    <div className="flex gap-6 items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 relative z-10">
                        4
                      </div>
                      <div className="flex-1 bg-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                        <h3 className="font-bold text-xl mb-3">Abholung oder Express-Lieferung</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Holen Sie Ihre Teile direkt in Gunskirchen ab (15 Min von Wels) oder nutzen Sie unseren 
                          Same-Day Express-Service. Gratis Versand ab €50. Tracking inklusive.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Enhanced with Accordion */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in Wels
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren Express-Service für Wels.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell kann ich mein Teil in Wels erhalten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Bei Express-Bestellungen vor 10 Uhr morgens ist Same-Day Abholung in Gunskirchen möglich – 
                      nur 15 Minuten von Wels! Alternativ bieten wir Express-Lieferung am selben Tag an. 
                      Standard-Lieferung dauert 1-2 Werktage.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Kann ich meine Teile persönlich abholen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, unbedingt! Abholung in Gunskirchen nach Terminvereinbarung. Wir sind nur 15 Minuten von Wels entfernt. 
                      Persönliche Übergabe mit technischer Beratung inklusive. Einfach anrufen: +43 676 5517197
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Materialien eignen sich für technische Bauteile?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Für Welser Industriebetriebe empfehlen wir PETG (chemikalienbeständig), ABS (hitzebeständig bis 100°C) 
                      oder Carbon-Nylon (extrem belastbar). Gerne beraten wir Sie zur optimalen Materialwahl für Ihr Projekt.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Bieten Sie Mengenrabatt für Welser Unternehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja! Ab 10 Teilen oder für wiederkehrende Bestellungen bieten wir attraktive Staffelpreise. 
                      Spezielle Konditionen für Welser Industriebetriebe mit regelmäßigem Bedarf. Sprechen Sie uns an!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Was kostet der Express-Service?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Bei Abholung in Gunskirchen fallen keine zusätzlichen Express-Kosten an! 
                      Same-Day Lieferung nach Wels: nur €5 Aufpreis. Ab €50 Bestellwert ist der Standard-Versand kostenlos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Können Sie bei Produktionsausfällen helfen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Absolut! Bei dringenden Ersatzteil-Anfragen aus Welser Betrieben reagieren wir innerhalb von 2 Stunden. 
                      Same-Day Fertigung möglich – minimale Stillstandzeiten für Ihre Produktion garantiert.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <ReviewsWidget />

        <Contact />

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Wels3DDruck;