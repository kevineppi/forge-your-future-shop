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
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Palette, Scissors, Lightbulb, GraduationCap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Dornbirn3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Dornbirn & Vorarlberg | Express 24-48h | Ab €15"
        description="Ländle-Innovation: Textil, Design, Industrie – alles per 3D-Druck! Express nach Dornbirn, Bregenz, Feldkirch. → Jetzt Vorarlberg-Express nutzen"
        keywords="3d-druck dornbirn, 3d drucker dornbirn, fdm druck dornbirn, rapid prototyping vorarlberg, 3d-druck service dornbirn, prototypen vorarlberg"
        path="/3d-druck-dornbirn"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Dornbirn", url: "/3d-druck-dornbirn"}
      ]} />
      <LocalBusinessSchema 
        city="Dornbirn"
        region="Vorarlberg"
        latitude="47.4124"
        longitude="9.7437"
        deliveryTime="24-48h"
      />
      <FAQSchema 
        city="Dornbirn"
        faqs={[
          {
            question: "Wie schnell kann ich mein 3D-Druck-Teil in Dornbirn erhalten?",
            answer: "Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Dornbirn und ganz Vorarlberg. Standard-Lieferungen dauern 2-3 Werktage. Kostenloser Versand ab €50 Bestellwert."
          },
          {
            question: "Was kostet 3D-Druck in Dornbirn?",
            answer: "Die Kosten hängen vom Material ab: PLA ab €1,50/Stunde, PETG ab €2,00/Stunde, ABS ab €2,50/Stunde, PA12 Nylon ab €4,50/Stunde. Nutzen Sie unseren Online-Kostenrechner für eine genaue Schätzung."
          },
          {
            question: "Welche Dateiformate werden für 3D-Druck in Dornbirn akzeptiert?",
            answer: "Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns unter +43 676 5517197."
          },
          {
            question: "Arbeiten Sie mit der Textilindustrie in Vorarlberg zusammen?",
            answer: "Ja! Wir haben Erfahrung mit Projekten für Vorarlbergs Textilindustrie – von Halterungen über Werkzeuge bis zu Prototypen für textile Anwendungen. Spezielle Lösungen für Ihre Branche."
          }
        ]}
      />
      <HowToSchema 
        name="3D-Druck bestellen in Dornbirn"
        description="So einfach bestellen Sie professionelle 3D-Drucke in Dornbirn bei ekdruck"
        totalTime="PT48H"
        steps={[
          {
            name: "CAD-Datei hochladen oder Anfrage senden",
            text: "Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP) per E-Mail an office@ek-druck.at oder nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung. Telefon: +43 676 5517197"
          },
          {
            name: "Kostenloses Angebot erhalten",
            text: "Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit und Materialempfehlung für Ihr 3D-Druck Projekt in Dornbirn."
          },
          {
            name: "Auftrag bestätigen",
            text: "Nach Ihrer Freigabe starten wir sofort mit der Produktion. Bei Express-Bestellungen erfolgt der Versand prioritär nach Dornbirn und Vorarlberg."
          },
          {
            name: "Lieferung nach Dornbirn erhalten",
            text: "Ihr fertiges 3D-Druck-Teil wird sicher verpackt per Post direkt zu Ihnen nach Dornbirn geliefert. Express 24-48h oder Standard 2-3 Werktage. Kostenloser Versand ab €50."
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
                <span className="text-primary font-semibold">Dornbirn – Vorarlbergs Innovationszentrum</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service in <span className="text-gradient">Dornbirn</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Professioneller FDM 3D-Druck für <strong className="text-foreground">Dornbirn</strong> und ganz Vorarlberg. 
                Express-Lieferung in <strong className="text-foreground">24-48h</strong>, perfekt für Textilindustrie, Design, 
                FH Vorarlberg und kreative Projekte. Österreichische Qualität für innovative Köpfe.
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
                  <Scissors className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Textil-Partner</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Palette className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Design-Ready</span>
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
                Unsere <span className="text-gradient">Services in Dornbirn</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> für 
                Vorarlberger Textilindustrie bis zu Design-Prototypen – professionelle 3D-Druck-Lösungen für innovative Projekte.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Design-Prototyping</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Hochauflösende 3D-Drucke für Dornbirner Design-Studios und kreative Projekte. 
                    Schichtauflösung bis 0,1mm für perfekte Designmodelle und Präsentationsobjekte.
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
                    Eilig? Wir liefern Ihre Bauteile innerhalb von 24-48 Stunden nach Dornbirn. 
                    Perfekt für dringende Design-Präsentationen und Projektdeadlines.
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
                    <Scissors className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Textil-Expertise</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Spezialisiert auf Werkzeuge, Halterungen und Prototypen für Vorarlbergs Textilindustrie. 
                    Funktionale Bauteile für textile Produktion und Innovation.
                  </p>
                  <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
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
                  Warum ekdruck für <span className="text-gradient">3D-Druck in Dornbirn</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist bieten wir Dornbirner Unternehmen, 
                  Textilindustrie und Designern lokale Expertise und schnelle Lieferzeiten nach Vorarlberg.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Scissors className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Textil-Industrie Partner</h3>
                      <p className="text-muted-foreground">Spezialisiert auf Vorarlbergs Textilindustrie – von Produktionswerkzeugen bis zu innovativen Halterungen und Prototypen.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Express nach Vorarlberg</h3>
                      <p className="text-muted-foreground">24-48h Express-Lieferung nach Dornbirn und ganz Vorarlberg. Gratis Versand ab €50 Bestellwert.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Design-Kompetenz</h3>
                      <p className="text-muted-foreground">Erfahrung mit Design-Projekten und kreativen Prototypen. Von Konzept bis zum fertigen Modell – präsentationsreif.</p>
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
                      <p className="text-muted-foreground">Unverbindliche CAD-Analyse und Machbarkeitsprüfung für Ihr Dornbirn-Projekt. Keine versteckten Kosten.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section - Dornbirn/Vorarlberg Specific */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Anwendungsbereiche für <span className="text-gradient">3D-Druck in Dornbirn</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von Textilindustrie über Design-Studios bis zu FH-Projekten – 
                  3D-Druck Lösungen für Vorarlbergs vielfältige Innovationslandschaft.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Scissors className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Textilindustrie</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Spezielle Werkzeuge, Halterungen und Prototypen für Vorarlbergs Textilindustrie. 
                      Funktionale Lösungen für Produktion.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Palette className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Design & Kreativität</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Designmodelle, Kunstobjekte und kreative Prototypen für Dornbirner Design-Studios. 
                      Von der Idee zum Objekt.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">FH Vorarlberg</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Studienmodelle und Forschungsprojekte für FH Vorarlberg Campus Dornbirn. 
                      Unterstützung für studentische Projekte.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Factory className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Modellbau & Dekoration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Architekturmodelle, Dekorationsobjekte und individuelle Unikate für Dornbirner Kreative. 
                      Detailreich und präzise.
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
                  <span className="text-gradient">Materialien</span> für Dornbirn
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Wir setzen ausschließlich auf hochwertige Filamente aus österreichischer Produktion. 
                  Nachhaltig, qualitativ und perfekt für Vorarlberger Anforderungen.
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
                      Österreichisches Biofilament für umweltbewusste Dornbirner Projekte. 
                      100% kompostierbar, perfekt für Designmodelle und Prototypen.
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
                      in der Textilindustrie. UV-stabil für Außeneinsätze.
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
                      Werkzeuge und Gehäuse in Dornbirner Betrieben.
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
                      Carbon-verstärkt für Vorarlberger High-Tech Projekte. Leichtbau mit 
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
                  So einfach geht <span className="text-gradient">3D-Druck in Dornbirn</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der ersten Anfrage bis zur Lieferung nach Dornbirn – 
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
                          Materialempfehlung. Bei Textil- oder Design-Projekten beraten wir Sie persönlich.
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
                          Sie werden über den Fortschritt informiert – perfekt für Ihre Dornbirner Präsentationen und Deadlines.
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
                        <h3 className="font-bold text-xl mb-3">Lieferung nach Dornbirn</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Jedes Teil wird sorgfältig geprüft. Express-Versand innerhalb von 24-48h nach Dornbirn und ganz Vorarlberg. 
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
                  Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in Dornbirn
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren 3D-Druck Service in Dornbirn.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell kann ich mein 3D-Druck-Teil in Dornbirn erhalten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Dornbirn und ganz Vorarlberg. 
                      Standard-Lieferungen dauern 2-3 Werktage. Gratis Versand ab €50 Bestellwert.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Arbeiten Sie mit der Textilindustrie in Vorarlberg zusammen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja! Wir haben Erfahrung mit Projekten für Vorarlbergs Textilindustrie – von Halterungen über Werkzeuge 
                      bis zu Prototypen für textile Anwendungen. Spezielle Lösungen für Ihre Branche. Kontaktieren Sie uns!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Materialien eignen sich für Designmodelle?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Für Designmodelle empfehlen wir Bio-PLA in verschiedenen Farben. 
                      Hohe Detailgenauigkeit, perfekte Oberfläche und umweltfreundlich – ideal für Präsentationen und Ausstellungen.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Bieten Sie Rabatte für FH-Studenten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja! Studenten der FH Vorarlberg erhalten spezielle Konditionen für Studien- und Abschlussprojekte. 
                      Sprechen Sie uns an für studentenfreundliche Preise und Beratung.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Können Sie bei der Nachbearbeitung helfen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir bieten professionelle Nachbearbeitung: Schleifen, Lackieren, Grundieren, Glattieren und weitere 
                      Finishing-Optionen für Ihre 3D-gedruckten Teile. Perfekt für Präsentationen und Designmodelle.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie werden die Kosten für 3D-Druck in Dornbirn berechnet?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren{" "}
                      <a href="/kostenrechner" className="text-primary hover:underline font-semibold">Online-Kostenrechner</a> für eine 
                      sofortige Schätzung. Kleine Teile starten bereits ab €5.
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

export default Dornbirn3DDruck;