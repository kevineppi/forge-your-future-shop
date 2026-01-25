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
import { Box, Clock, MapPin, Phone, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, GraduationCap, Wine } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Burgenland3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Burgenland | Express 24-48h | Gratis ab €50"
        description="Burgenland: Eisenstadt, Neusiedl, Oberwart – Express 24-48h! Von Weinbau bis Industrie. Versandkostenfrei ab 100€. → Jetzt anfragen"
        keywords="3d-druck burgenland, 3d druck eisenstadt, fdm 3d-druck burgenland, rapid prototyping burgenland"
        path="/3d-druck-burgenland"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Burgenland", url: "/3d-druck-burgenland"}
      ]} />
      <LocalBusinessSchema 
        city="Eisenstadt"
        region="Burgenland"
        latitude="47.8468"
        longitude="16.5272"
        deliveryTime="24-48h"
      />
      <FAQSchema 
        city="Burgenland"
        faqs={[
          {
            question: "Wie schnell erfolgt die Lieferung ins Burgenland?",
            answer: "Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Eisenstadt und in das gesamte Burgenland. Standard-Lieferungen dauern 2-3 Werktage. Kostenloser Versand ab €50."
          },
          {
            question: "Welche Materialien verwenden Sie für 3D-Druck im Burgenland?",
            answer: "Wir bieten PLA (biobasiert), PETG (robust), ABS (hitzebeständig), PA12 Nylon und Carbon-Nylon aus österreichischer Produktion in verschiedenen Farben."
          },
          {
            question: "Was kostet 3D-Druck im Burgenland?",
            answer: "PLA ab €1,50/Stunde, PETG ab €2,00/Stunde, ABS ab €2,50/Stunde, PA12 Nylon ab €4,50/Stunde. Nutzen Sie unseren Online-Kostenrechner für eine genaue Schätzung."
          },
          {
            question: "Welche Dateiformate werden akzeptiert?",
            answer: "Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate. Bei Fragen kontaktieren Sie uns unter +43 676 5517197."
          }
        ]}
      />
      <HowToSchema 
        name="3D-Druck bestellen im Burgenland"
        description="So einfach bestellen Sie professionelle 3D-Drucke im Burgenland bei ekdruck"
        totalTime="PT48H"
        steps={[
          {
            name: "CAD-Datei hochladen oder Anfrage senden",
            text: "Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP) per E-Mail an office@ek-druck.at oder nutzen Sie unseren Online-Kostenrechner. Telefon: +43 676 5517197"
          },
          {
            name: "Kostenloses Angebot erhalten",
            text: "Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit und Materialempfehlung für Ihr Projekt im Burgenland."
          },
          {
            name: "Auftrag bestätigen",
            text: "Nach Ihrer Freigabe starten wir sofort mit der Produktion. Bei Express-Bestellungen erfolgt der Versand prioritär ins Burgenland."
          },
          {
            name: "Lieferung ins Burgenland erhalten",
            text: "Ihr fertiges Teil wird sicher verpackt per Post nach Eisenstadt, Neusiedl oder Oberwart geliefert. Express 24-48h oder Standard 2-3 Werktage. Gratis Versand ab €50."
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
                <span className="text-primary font-semibold">Burgenland – Österreichs Osten</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service für <span className="text-gradient">Burgenland</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Professioneller FDM 3D-Druck für <strong className="text-foreground">Eisenstadt</strong>, 
                Neusiedl am See, Oberwart und ganz Burgenland. 
                Express-Lieferung in <strong className="text-foreground">24-48h</strong>, 
                nachhaltige Materialien aus Österreich.
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
                  <Wine className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Regional</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Nachhaltig</span>
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
                Unsere <span className="text-gradient">Services</span> für Burgenland
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> bis 
                zur Serienfertigung – professionelle 3D-Druck-Lösungen für Eisenstadt, Neusiedl und Oberwart.
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
                    Hochwertige Bauteile mit modernster FDM-Technologie für Prototypen und Serienteile 
                    im Burgenland. Präzise und zuverlässig.
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
                  <h3 className="text-2xl font-bold mb-4">Express 24-48h</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Schnelle Fertigung in 24-48h für dringende Projekte ins Burgenland. 
                    Perfekt für kurzfristige Produktionsanforderungen.
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
                    Hochwertige Filamente aus österreichischer Produktion für umweltbewussten 
                    3D-Druck im Burgenland.
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
                  Warum ekdruck für <span className="text-gradient">3D-Druck im Burgenland</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist bieten wir Burgenländer Unternehmen 
                  und Privatpersonen lokale Expertise und schnelle Lieferzeiten.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Express nach Burgenland</h3>
                      <p className="text-muted-foreground">24-48h Lieferung nach Eisenstadt, Neusiedl am See und Oberwart. Gratis Versand ab €50.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Österreichische Qualität</h3>
                      <p className="text-muted-foreground">Hochwertige Materialien aus regionaler Produktion. Made in Austria für höchste Ansprüche.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Direkte Kommunikation</h3>
                      <p className="text-muted-foreground">Persönlicher Kontakt auf Deutsch, keine Callcenter. Technische Beratung für Ihre Projekte im Burgenland.</p>
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
                      <p className="text-muted-foreground">Unverbindliche CAD-Analyse und Machbarkeitsprüfung. Keine versteckten Kosten.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Anwendungsbereiche für <span className="text-gradient">3D-Druck im Burgenland</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von Industrie über Landwirtschaft bis zu Architektur – 
                  3D-Druck Lösungen für die vielfältigen Branchen im Burgenland.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Factory className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Modellbau</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Architekturmodelle, Präsentationsmodelle und individuelle Objekte für Burgenlands Kreative.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Wine className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Weinwirtschaft</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Spezielle Werkzeuge und Halterungen für Weinproduktion und Kellerwirtschaft im Burgenland.
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
                      Architekturmodelle für Planungsbüros in Eisenstadt und Umgebung. Präsentationsreif.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Bildung & Forschung</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rapid Prototyping für Bildungseinrichtungen und Forschungsprojekte im Burgenland.
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
                  <span className="text-gradient">Premium-Materialien</span> für Burgenland
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hochwertige Filamente aus österreichischer Produktion für jeden Anwendungsfall.
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
                      100% kompostierbar.
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
                      Chemikalienresistent und schlagfest. Ideal für funktionale Bauteile.
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
                      Bis 100°C hitzebeständig. Perfekt für technische Prototypen und Gehäuse.
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
                      Carbon-verstärkt für höchste Belastbarkeit. Leichtbau-Eigenschaften.
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

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  <span className="text-gradient">Einfacher Prozess</span> für Burgenland
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der Anfrage bis zur Lieferung – unser effizienter Prozess für Ihr 3D-Druck-Projekt.
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
                          Senden Sie uns Ihre CAD-Datei per E-Mail oder nutzen Sie unseren Online-Kostenrechner. 
                          Telefon: +43 676 5517197
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
                        <h3 className="font-bold text-xl mb-3">Angebot erhalten</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis und Lieferzeit 
                          für Ihr Projekt im Burgenland.
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
                        <h3 className="font-bold text-xl mb-3">Produktion</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck. 
                          Sie werden über den Fortschritt informiert.
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
                        <h3 className="font-bold text-xl mb-3">Lieferung ins Burgenland</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Express-Versand in 24-48h nach Eisenstadt, Neusiedl oder Oberwart. 
                          Gratis Versand ab €50. Tracking inklusive.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck im Burgenland
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren Service im Burgenland.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell erfolgt die Lieferung ins Burgenland?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Eisenstadt und ganz Burgenland. 
                      Standard-Lieferungen dauern 2-3 Werktage. Kostenloser Versand ab €50 Bestellwert.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Materialien verwenden Sie?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir bieten PLA (biobasiert), PETG (robust), ABS (hitzebeständig), PA12 Nylon und Carbon-Nylon 
                      aus österreichischer Produktion. Alle Materialien sind für verschiedene Anwendungen optimiert.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Was kostet 3D-Druck im Burgenland?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      PLA ab €1,50/Stunde, PETG ab €2,00/Stunde, ABS ab €2,50/Stunde, PA12 Nylon ab €4,50/Stunde. 
                      Nutzen Sie unseren Online-Kostenrechner für eine genaue Schätzung Ihres Projekts.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Dateiformate werden akzeptiert?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate. 
                      Bei Fragen zu Ihrem Format kontaktieren Sie uns unter +43 676 5517197.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Bieten Sie auch Nachbearbeitung an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja! Wir bieten Schleifen, Lackieren, Glattieren und weitere Finishing-Optionen für 
                      das perfekte Endergebnis Ihres 3D-Drucks.
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

export default Burgenland3DDruck;
