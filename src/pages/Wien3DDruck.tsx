import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Palette, FlaskConical, GraduationCap, Lightbulb } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const Wien3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Wien | FDM 3D-Druck Service | ekdruck e.U."
        description="Wiener Start-ups & TU-Projekte vertrauen uns: 24h Express-Lieferung direkt in alle 23 Bezirke. Heute bestellen, morgen testen! Innovation Hub Partner in Wien."
        keywords="3d-druck wien, 3d drucker wien, fdm druck wien, rapid prototyping wien, 3d-druck service wien, prototypen wien"
        path="/3d-druck-wien"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Wien", url: "/3d-druck-wien"}
      ]} />
      <LocalBusinessSchema 
        city="Wien"
        region="Wien"
        latitude="48.2082"
        longitude="16.3738"
        deliveryTime="24-48h"
      />
      <FAQSchema 
        city="Wien"
        faqs={[
          {
            question: "Wie schnell kann ich mein 3D-Druck-Teil in Wien erhalten?",
            answer: "Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach Wien. Standard-Lieferungen dauern 2-3 Werktage. Kostenloser Versand ab €50 Bestellwert."
          },
          {
            question: "Was kostet 3D-Druck in Wien?",
            answer: "Die Kosten hängen vom Material ab: PLA ab €1,50/Stunde, PETG ab €2,00/Stunde, ABS ab €2,50/Stunde, PA12 Nylon ab €4,50/Stunde. Nutzen Sie unseren Online-Kostenrechner für eine genaue Schätzung."
          },
          {
            question: "Welche Dateiformate werden für 3D-Druck in Wien akzeptiert?",
            answer: "Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns unter +43 676 5517197."
          },
          {
            question: "Bieten Sie auch Nachbearbeitung für 3D-Drucke in Wien an?",
            answer: "Ja, wir bieten professionelle Nachbearbeitung: Schleifen, Lackieren, Polieren und weitere Finishing-Optionen für Ihre 3D-gedruckten Teile in Wien."
          },
          {
            question: "Welche Materialien sind für 3D-Druck in Wien verfügbar?",
            answer: "Wir verwenden ausschließlich österreichisches Premium-Filament: PLA (biobasiert), PETG (robust), ABS (hitzebeständig), PA12 Nylon (hochfest) und PA12-CF (Carbon verstärkt). Alle Materialien in verschiedenen Farben verfügbar."
          }
        ]}
      />
      <HowToSchema 
        name="3D-Druck bestellen in Wien"
        description="So einfach bestellen Sie professionelle 3D-Drucke in Wien bei ekdruck"
        totalTime="PT24H"
        steps={[
          {
            name: "CAD-Datei hochladen oder Anfrage senden",
            text: "Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP) per E-Mail an office@ek-druck.at oder nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung. Telefon: +43 676 5517197"
          },
          {
            name: "Kostenloses Angebot erhalten",
            text: "Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit und Materialempfehlung für Ihr 3D-Druck Projekt in Wien."
          },
          {
            name: "Auftrag bestätigen",
            text: "Nach Ihrer Freigabe starten wir sofort mit der Produktion. Bei Express-Bestellungen erfolgt der Versand am nächsten Werktag nach Wien."
          },
          {
            name: "Lieferung nach Wien erhalten",
            text: "Ihr fertiges 3D-Druck-Teil wird sicher verpackt per Post direkt zu Ihnen nach Wien geliefert. Express 24h oder Standard 2-3 Werktage. Kostenloser Versand ab €50."
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
                <span className="text-primary font-semibold">Wien – Österreichs Hauptstadt</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service in <span className="text-gradient">Wien</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Professioneller FDM 3D-Druck für <strong className="text-foreground">Wien</strong> und alle 23 Bezirke. 
                Express-Lieferung in <strong className="text-foreground">24h</strong>, perfekt für Start-ups, TU Wien, Universitäten und Innovation Hubs. 
                Österreichische Qualität für Ihre Projekte in der Hauptstadt.
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
                  <span className="font-semibold text-sm">24h Wien</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">TU-Partner</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Innovation Hub</span>
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
                Unsere <span className="text-gradient">Services in Wien</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> für 
                Start-ups bis zu Forschungsprojekten der TU Wien – professionelle 3D-Druck-Lösungen für die Hauptstadt.
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
                    Hochauflösende 3D-Drucke für Wiener Start-ups, Forschung und Produktentwicklung. 
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
                  <h3 className="text-2xl font-bold mb-4">Stadtlieferung 24h</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Eilig? Wir liefern Ihre Bauteile innerhalb eines Tages direkt in die Wiener Bezirke. 
                    Perfekt für dringende Deadlines und Präsentationen.
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
                    PLA, PETG, ABS, Carbon-Nylon für anspruchsvolle Wiener Projekte und <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>.
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
                  Warum ekdruck für <span className="text-gradient">3D-Druck in Wien</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist bieten wir Wiener Unternehmen, Start-ups und 
                  Universitäten lokale Expertise und schnelle Lieferzeiten in alle 23 Bezirke.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Wiener Innovationshub</h3>
                      <p className="text-muted-foreground">Perfekt angebunden für TU Wien, Universitäten, Innovation Labs und Wiener Start-up-Szene – vom 1. bis 23. Bezirk.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Expressversand Innenstadt</h3>
                      <p className="text-muted-foreground">24h-Lieferung in alle Wiener Bezirke – vom 1. Bezirk bis Floridsdorf. Gratis Versand ab €50 Bestellwert.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Technische Expertise</h3>
                      <p className="text-muted-foreground">Spezialisiert auf komplexe Geometrien für Wiener Ingenieurbüros, CAD-Optimierung und DfAM-Prinzipien inklusive.</p>
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
                      <p className="text-muted-foreground">Unverbindliche CAD-Analyse und Machbarkeitsprüfung für Ihr Wien-Projekt. Keine versteckten Kosten.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Deep Dive Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Professioneller <span className="text-gradient">FDM 3D-Druck</span> für Wien
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner für die Hauptstadt.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <AnimatedSection delay={0.1}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                      bildet die Grundlage unseres Services für Wien. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
                      Material schichtweise aufgetragen, um präzise dreidimensionale Objekte zu erstellen.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> setzen wir 
                      auf modernste FDM-Technologie mit Schichtauflösungen bis zu 0,1mm. Diese Präzision ermöglicht die Herstellung 
                      komplexer Geometrien für Wiener Start-ups, TU Wien Projekte und Innovation Labs.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Ob für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, 
                      <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold"> individuelle Einzelanfertigungen</a> oder 
                      <a href="/serienfertigung" className="text-primary hover:underline font-semibold"> Kleinserien</a> – FDM 3D-Druck 
                      bietet maximale Flexibilität für Ihre Projekte in Wien.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für Wiener Unternehmen</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Kosteneffizienz</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Keine teuren Werkzeuge oder Formen notwendig. Ideal für MVP-Entwicklung und 
                            Start-up Prototypen – deutlich günstiger als traditionelle Fertigungsverfahren.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Schnelle Iteration</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Von der Idee zum fertigen Prototyp in 24-48 Stunden. Perfekt für agile Entwicklungsprozesse 
                            in Wiener Start-ups, Forschungseinrichtungen und TU Wien Projekten.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Designfreiheit</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Komplexe Geometrien, Hinterschneidungen und organische Formen – mit 3D-Druck sind 
                            nahezu keine Grenzen gesetzt für Ihr Wiener Innovation-Projekt.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Lokale Verfügbarkeit</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Express-Lieferung in alle Wiener Bezirke innerhalb von 24h. Perfekt für 
                            dringende Präsentationen und Investoren-Meetings in der Hauptstadt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section - Vienna Specific */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Anwendungsbereiche für <span className="text-gradient">3D-Druck in Wien</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von Universitätsforschung über Start-up MVPs bis zu Kunst und Kultur – 
                  3D-Druck Lösungen für die vielfältige Wiener Innovationslandschaft.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Universitäten & Forschung</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Versuchsaufbauten und Studienmodelle für TU Wien, BOKU, Universität Wien und Medizinische Universität. 
                      Forschung made easy.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Lightbulb className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Start-up Szene</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      MVP-Prototypen für Wiener Gründerzentren, Inkubatoren und Tech-Start-ups. 
                      Vom Innovation Hub zum Markt.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Palette className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Kunst & Kultur</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kunstinstallationen, Theaterrequisiten und Ausstellungsobjekte für Wiener Kultureinrichtungen. 
                      Kreativität ohne Grenzen.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <FlaskConical className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Medizintechnik</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Anatomische Modelle, Orthesen-Prototypen und medizinische Lehrmittel für Wiener Kliniken. 
                      Präzision für die Medizin.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section - Enhanced */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  <span className="text-gradient">Materialien</span> für Ihr Projekt in Wien
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Wir setzen ausschließlich auf hochwertige Filamente aus österreichischer Produktion. 
                  Nachhaltig, qualitativ und perfekt für Wiener Anforderungen.
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
                      Österreichisches Biofilament für umweltbewusste Wiener Projekte. 
                      100% kompostierbar, perfekt für Ausstellungen und Präsentationen.
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
                      Chemikalienresistent für Labore, UV-stabil für Außeneinsätze. 
                      Medizin-konform verfügbar für Wiener Kliniken und Forschung.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Labor-geeignet</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Witterungsbeständig</span>
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
                      Bis 100°C hitzebeständig. Ideal für Wiener Industrie, Maschinenbau und 
                      technische Prototypen. Flame-Retardant möglich.
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
                      Carbon-verstärkt für Wiener High-Tech Projekte. Leichtbau mit 
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  So einfach geht <span className="text-gradient">3D-Druck in Wien</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der ersten Anfrage bis zur Lieferung in alle 23 Wiener Bezirke – 
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
                          Materialempfehlung. Bei Start-up Projekten oder TU Wien Forschung beraten wir Sie persönlich.
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
                          Sie werden über den Fortschritt informiert – perfekt für Ihre Wiener Präsentationen und Deadlines.
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
                        <h3 className="font-bold text-xl mb-3">Lieferung nach Wien</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Jedes Teil wird sorgfältig geprüft. Express-Versand innerhalb von 24h in alle Wiener Bezirke. 
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

        {/* Quality & Sustainability Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Qualität & <span className="text-gradient">Nachhaltigkeit</span> für Wien
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck Dienstleister setzen wir auf höchste Qualitätsstandards 
                  und nachhaltige Produktion – für Wien und ganz Österreich.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Qualitätssicherung</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Jedes <strong className="text-primary">3D-gedruckte Teil</strong> durchläuft bei uns eine mehrstufige 
                      Qualitätskontrolle, bevor es zu Ihnen nach Wien geliefert wird:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Design-Analyse:</strong> Prüfung und Optimierung Ihrer CAD-Datei vor dem Druck</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Material-Kontrolle:</strong> Nur zertifizierte Filamente aus österreichischer Produktion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Druck-Überwachung:</strong> Kontinuierliche Kontrolle während des gesamten Druckprozesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Finish-Kontrolle:</strong> Visuelle und dimensionale Prüfung für Wiener Standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Dokumentation:</strong> Lückenlose Nachverfolgbarkeit aller Produktionsschritte</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                    <Leaf className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Nachhaltiger 3D-Druck</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Umweltbewusstsein ist uns wichtig. Als <strong className="text-primary">nachhaltiger 3D-Druck Service</strong> 
                      für Wien setzen wir auf ökologische Verantwortung:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Regionale Materialien:</strong> Filamente aus österreichischer Herstellung – kurze Transportwege</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Recycling-Materialien:</strong> PLA aus nachwachsenden Rohstoffen und Industrieabfällen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Materialeffizienz:</strong> Additive Fertigung minimiert Abfall gegenüber spanenden Verfahren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Energieoptimierung:</strong> Moderne Drucker mit effizienter Energienutzung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Lokale Produktion:</strong> Fertigung in Österreich reduziert CO₂-Emissionen nach Wien</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-10 rounded-2xl border">
                  <h3 className="text-2xl font-bold mb-4 text-center">Made in Austria – Für Wien</h3>
                  <p className="text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                    Als österreichischer <strong className="text-primary">3D-Druck Dienstleister</strong> sind wir stolz darauf, 
                    ausschließlich mit Partnern aus Österreich zusammenzuarbeiten. Unsere Filamente stammen von führenden 
                    österreichischen Herstellern. Für unsere Kunden in Wien bedeutet das: verlässliche Qualität, 
                    schnelle Express-Lieferung in alle 23 Bezirke und die Unterstützung heimischer Wirtschaft.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section - Enhanced with Accordion */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in Wien
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren 3D-Druck Service in Wien.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Liefern Sie in alle Wiener Bezirke?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir beliefern alle 23 Wiener Bezirke per Express in 24h. Vom 1. Bezirk bis Liesing, von Döbling bis Floridsdorf. 
                      Gratis Versand ab €50 Bestellwert.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Kann ich CAD-Dateien direkt von der TU Wien schicken?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Natürlich! Wir arbeiten mit Studenten und Forschungsgruppen zusammen. STEP, IGES, Parasolid – alle Formate werden 
                      unterstützt. Spezielle Konditionen für TU Wien Projekte auf Anfrage.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Gibt es Mengenrabatt für Wiener Start-ups?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja! Ab 10 Teilen oder für wiederkehrende Bestellungen aus dem Innovation Hub bieten wir attraktive Staffelpreise an. 
                      Spezielle Start-up Pakete für MVP-Entwicklung verfügbar – kontaktieren Sie uns!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Nachbearbeitung ist in Wien möglich?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Von Vapor-Smoothing über Lackierung bis zu manueller Hochglanz-Politur. Perfekt für Wiener Messen, 
                      Investoren-Präsentationen und Ausstellungen. Finishing auf Industrieniveau.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell erhalte ich ein Angebot für mein Wiener Projekt?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot inkl. Materialempfehlung. 
                      Für Express-Anfragen oder dringende Start-up MVPs auch schneller – einfach anrufen: +43 676 5517197
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Unterstützen Sie auch bei der CAD-Erstellung?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir können aus 2D-Zeichnungen, Skizzen oder physischen Objekten 3D-Modelle erstellen. 
                      Ideal für Wiener Start-ups ohne CAD-Kenntnisse oder Retrofit-Projekte. Partnernetzwerk für komplexe CAD-Arbeiten verfügbar.
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

export default Wien3DDruck;
