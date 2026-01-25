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
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, GraduationCap, Lightbulb } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StPoelten3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck St. Pölten & NÖ | Express 24-48h | Ab €15"
        description="Niederösterreich: Bildung, Verwaltung, Industrie – alle setzen auf 3D-Druck! Express nach St. Pölten. → Jetzt NÖ-Angebot anfragen"
        keywords="3d-druck st pölten, 3d drucker st pölten, fdm druck st pölten, rapid prototyping niederösterreich, 3d-druck service st pölten, prototypen niederösterreich"
        path="/3d-druck-st-poelten"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck St. Pölten", url: "/3d-druck-st-poelten"}
      ]} />
      <LocalBusinessSchema 
        city="St. Pölten"
        region="Niederösterreich"
        latitude="48.2053"
        longitude="15.6261"
        deliveryTime="24-48h"
      />
      <FAQSchema 
        city="St. Pölten"
        faqs={[
          {
            question: "Wie schnell kann ich mein 3D-Druck-Teil in St. Pölten erhalten?",
            answer: "Express-Service innerhalb von 24-48 Stunden nach St. Pölten und ganz Niederösterreich. Standard-Lieferung dauert 2-3 Werktage. Kostenloser Versand ab €50 Bestellwert."
          },
          {
            question: "Was kostet 3D-Druck in St. Pölten?",
            answer: "Die Kosten hängen vom Material ab: PLA ab €1,50/Stunde, PETG ab €2,00/Stunde, ABS ab €2,50/Stunde, PA12 Nylon ab €4,50/Stunde. Nutzen Sie unseren Online-Kostenrechner für eine genaue Schätzung."
          },
          {
            question: "Welche Dateiformate werden für 3D-Druck in St. Pölten akzeptiert?",
            answer: "Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns unter +43 676 5517197."
          },
          {
            question: "Welche Materialien sind für 3D-Druck in St. Pölten verfügbar?",
            answer: "Wir verwenden ausschließlich österreichisches Premium-Filament: PLA (biobasiert), PETG (robust), ABS (hitzebeständig), PA12 Nylon (hochfest) und PA12-CF (Carbon verstärkt). Alle Materialien in verschiedenen Farben verfügbar."
          }
        ]}
      />
      <HowToSchema 
        name="3D-Druck bestellen in St. Pölten"
        description="So einfach bestellen Sie professionelle 3D-Drucke in St. Pölten bei ekdruck"
        totalTime="PT48H"
        steps={[
          {
            name: "CAD-Datei hochladen oder Anfrage senden",
            text: "Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP) per E-Mail an office@ek-druck.at oder nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung. Telefon: +43 676 5517197"
          },
          {
            name: "Kostenloses Angebot erhalten",
            text: "Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit und Materialempfehlung für Ihr 3D-Druck Projekt in St. Pölten."
          },
          {
            name: "Auftrag bestätigen",
            text: "Nach Ihrer Freigabe starten wir sofort mit der Produktion. Bei Express-Bestellungen erfolgt der Versand prioritär nach St. Pölten."
          },
          {
            name: "Lieferung nach St. Pölten erhalten",
            text: "Ihr fertiges 3D-Druck-Teil wird sicher verpackt per Post direkt zu Ihnen nach St. Pölten geliefert. Express 24-48h oder Standard 2-3 Werktage. Kostenloser Versand ab €50."
          }
        ]}
      />
      
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
                <span className="text-primary font-semibold">St. Pölten – Niederösterreichs Hauptstadt</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service in <span className="text-gradient">St. Pölten</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Professioneller FDM 3D-Druck für <strong className="text-foreground">St. Pölten</strong> und ganz Niederösterreich. 
                Express-Lieferung in <strong className="text-foreground">24-48h</strong>, perfekt für Verwaltung, FH St. Pölten, 
                Bildungseinrichtungen und Innovation. Österreichische Qualität für die Landeshauptstadt.
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
                  <span className="font-semibold text-sm">24-48h Express</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">FH-Partner</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Verwaltung</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Made in AT</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section - Enhanced */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Unsere <span className="text-gradient">Services in St. Pölten</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> für 
                Verwaltungsprojekte bis zu Bildungsmodellen für FH St. Pölten – professionelle 3D-Druck-Lösungen für die Landeshauptstadt.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Präzisions-Prototyping</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Hochauflösende 3D-Drucke für St. Pöltner Verwaltung, FH-Projekte und Produktentwicklung. 
                    Schichtauflösung bis 0,1mm für perfekte Prototypen.
                  </p>
                  <a href="/prototypen" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
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
                  <h3 className="text-2xl font-bold mb-4">Express 24-48h</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Eilig? Wir liefern Ihre Bauteile innerhalb von 24-48 Stunden nach St. Pölten. 
                    Perfekt für dringende Verwaltungsprojekte und Präsentationen.
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
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Premium-Filamente</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Österreichische Bio-Filamente und technische Hochleistungskunststoffe. 
                    PLA, PETG, ABS, Carbon-Nylon für anspruchsvolle Projekte in St. Pölten.
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

        {/* Why ekdruck Section - Enhanced */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Warum ekdruck für <span className="text-gradient">3D-Druck in St. Pölten</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist bieten wir St. Pöltner Einrichtungen, 
                  Verwaltung und Bildungsinstitutionen lokale Expertise und schnelle Lieferzeiten.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Partner für Bildung & Innovation</h3>
                      <p className="text-muted-foreground">Spezialisiert auf FH St. Pölten, Schulen und Bildungseinrichtungen – vom Prototyp bis zum Forschungsprojekt.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Schnelle Lieferung nach NÖ</h3>
                      <p className="text-muted-foreground">24-48h Express-Lieferung nach St. Pölten und ganz Niederösterreich. Gratis Versand ab €50 Bestellwert.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Verwaltungs-Expertise</h3>
                      <p className="text-muted-foreground">Erfahrung mit öffentlichen Einrichtungen und Verwaltungsprojekten. Präsentationsmodelle und Anschauungsobjekte.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Kostenlose Erstberatung</h3>
                      <p className="text-muted-foreground">Unverbindliche CAD-Analyse und Machbarkeitsprüfung für Ihr St. Pölten-Projekt. Keine versteckten Kosten.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section - St. Pölten Specific */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Anwendungsbereiche für <span className="text-gradient">3D-Druck in St. Pölten</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von Verwaltungsprojekten über FH-Forschung bis zu Bildungsmodellen – 
                  3D-Druck Lösungen für die vielfältige St. Pöltner Landschaft.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Bildung & Forschung</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Studienmodelle und Forschungsprojekte für FH St. Pölten, Schulen und Bildungseinrichtungen. 
                      Lehrmittel und Anschauungsobjekte.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Verwaltung & Behörden</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Präsentationsmodelle, Stadtplanungsmodelle und Anschauungsobjekte für 
                      öffentliche Einrichtungen und Behörden.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Factory className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Modellbau & Dekoration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Architekturmodelle und Dekorationsobjekte für St. Pöltner Kreative. 
                      Schnelle Lösungen für lokale Projekte.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Lightbulb className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Innovation & Start-ups</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      MVP-Prototypen für St. Pöltner Start-ups und Gründerzentren. 
                      Vom Innovation Hub zum Markt.
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
                  <span className="text-gradient">Materialien</span> für St. Pölten
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Wir setzen ausschließlich auf hochwertige Filamente aus österreichischer Produktion. 
                  Nachhaltig, qualitativ und perfekt für St. Pöltner Anforderungen.
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
                      Österreichisches Biofilament für umweltbewusste St. Pöltner Projekte. 
                      100% kompostierbar, perfekt für Bildungsmodelle und Präsentationen.
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
                      <h3 className="font-bold text-xl">PETG Engineering</h3>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">Robust</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Chemikalienresistent und UV-stabil. Ideal für funktionale Bauteile 
                      und Außenanwendungen in St. Pölten. Robust und langlebig.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Wetterfest</span>
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
                      <h3 className="font-bold text-xl">ABS Industrial</h3>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-semibold">Technisch</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Bis 100°C hitzebeständig. Ideal für technische Prototypen, 
                      Gehäuse und funktionale Bauteile in St. Pöltner Projekten.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Temperaturbeständig</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Industriequalität</span>
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
                      Carbon-verstärkt für St. Pöltner High-Tech Projekte. Leichtbau mit 
                      Metallersatz-Eigenschaften für anspruchsvolle Anwendungen.
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

        {/* Process Section - Enhanced */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  So einfach geht <span className="text-gradient">3D-Druck in St. Pölten</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der ersten Anfrage bis zur Lieferung nach St. Pölten – 
                  unser transparenter Prozess macht 3D-Druck einfach und planbar.
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
                        <h3 className="font-bold text-xl mb-3">Anfrage senden</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP, etc.) per E-Mail oder nutzen Sie unseren 
                          Online-Kostenrechner. Wir prüfen Ihre Datei auf Druckbarkeit und optimieren sie bei Bedarf kostenlos.
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
                        <h3 className="font-bold text-xl mb-3">Angebot & Beratung</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit und 
                          Materialempfehlung. Bei FH-Projekten oder Verwaltungsaufträgen beraten wir Sie persönlich.
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
                        <h3 className="font-bold text-xl mb-3">Produktion startet</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck auf modernsten FDM-Druckern. 
                          Sie werden über den Fortschritt informiert – perfekt für Ihre St. Pöltner Präsentationen und Deadlines.
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
                        <h3 className="font-bold text-xl mb-3">Lieferung nach St. Pölten</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Jedes Teil wird sorgfältig geprüft. Express-Versand innerhalb von 24-48h nach St. Pölten. 
                          Gratis Versand ab €50. Tracking-Nummer inklusive.
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
                  Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in St. Pölten
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren 3D-Druck Service in St. Pölten.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell erfolgt die Lieferung nach St. Pölten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Express-Service innerhalb von 24-48 Stunden nach St. Pölten und ganz Niederösterreich. 
                      Standard-Lieferungen dauern 2-3 Werktage. Gratis Versand ab €50 Bestellwert.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Arbeiten Sie mit der FH St. Pölten zusammen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja! Wir unterstützen FH-Projekte und Studenten mit speziellen Konditionen. 
                      STEP, IGES, Parasolid – alle CAD-Formate werden unterstützt. Kontaktieren Sie uns für FH-Projekte!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Bieten Sie Rabatte für öffentliche Einrichtungen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja! Bildungseinrichtungen, Schulen und öffentliche Verwaltung erhalten spezielle Konditionen. 
                      Ab 10 Teilen oder für wiederkehrende Bestellungen bieten wir attraktive Staffelpreise an.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Materialien eignen sich für Präsentationsmodelle?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Für Präsentationsmodelle empfehlen wir Bio-PLA in verschiedenen Farben. 
                      Hohe Detailgenauigkeit, perfekte Oberfläche und umweltfreundlich – ideal für Verwaltungsprojekte und Ausstellungen.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell erhalte ich ein Angebot für mein St. Pöltner Projekt?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot inkl. Materialempfehlung. 
                      Für dringende Anfragen oder FH-Projekte auch schneller – einfach anrufen: +43 676 5517197
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Können Sie bei CAD-Modellierung helfen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir können aus 2D-Zeichnungen, Skizzen oder physischen Objekten 3D-Modelle erstellen. 
                      Ideal für Verwaltungsprojekte ohne CAD-Kenntnisse. Partnernetzwerk für komplexe CAD-Arbeiten verfügbar.
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

export default StPoelten3DDruck;