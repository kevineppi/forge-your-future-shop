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
import { Box, Clock, MapPin, Phone, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Microscope, Palette } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Steiermark3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Steiermark | Green Tech | Express 24-48h"
        description="Grünes Herz + Green Tech: Nachhaltige 3D-Fertigung für Graz & Leoben. Automotive-Cluster vertraut uns! → Jetzt Steiermark-Express starten"
        keywords="3d-druck steiermark, 3d druck graz, fdm 3d-druck steiermark, rapid prototyping steiermark"
        path="/3d-druck-steiermark"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Steiermark", url: "/3d-druck-steiermark"}
      ]} />
      <LocalBusinessSchema 
        city="Graz"
        region="Steiermark"
        latitude="47.0707"
        longitude="15.4395"
        deliveryTime="24-48h"
      />
      <FAQSchema 
        city="Steiermark"
        faqs={[
          {
            question: "Wie schnell erfolgt die Lieferung in die Steiermark?",
            answer: "Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Graz und in die gesamte Steiermark. Standard-Lieferungen dauern 2-3 Werktage. Kostenloser Versand ab €50."
          },
          {
            question: "Welche 3D-Druck Materialien bieten Sie an?",
            answer: "Wir bieten PLA (biobasiert), PETG (robust), ABS (hitzebeständig), PA12 Nylon und Carbon-Nylon aus österreichischer Produktion in verschiedenen Farben."
          },
          {
            question: "Was kostet 3D-Druck in der Steiermark?",
            answer: "PLA ab €1,50/Stunde, PETG ab €2,00/Stunde, ABS ab €2,50/Stunde, PA12 Nylon ab €4,50/Stunde. Nutzen Sie unseren Online-Kostenrechner für eine genaue Schätzung."
          },
          {
            question: "Arbeiten Sie mit Grazer Universitäten zusammen?",
            answer: "Ja, wir unterstützen Forschungsprojekte und Studierende der TU Graz und anderer Bildungseinrichtungen mit schnellem und qualitativ hochwertigem 3D-Druck."
          }
        ]}
      />
      <HowToSchema 
        name="3D-Druck bestellen in der Steiermark"
        description="So einfach bestellen Sie professionelle 3D-Drucke in der Steiermark bei ekdruck"
        totalTime="PT48H"
        steps={[
          {
            name: "CAD-Datei hochladen oder Anfrage senden",
            text: "Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP) per E-Mail an office@ek-druck.at oder nutzen Sie unseren Online-Kostenrechner. Telefon: +43 676 5517197"
          },
          {
            name: "Kostenloses Angebot erhalten",
            text: "Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit und Materialempfehlung für Ihr Projekt in der Steiermark."
          },
          {
            name: "Auftrag bestätigen",
            text: "Nach Ihrer Freigabe starten wir sofort mit der Produktion. Bei Express-Bestellungen erfolgt der Versand prioritär nach Graz."
          },
          {
            name: "Lieferung in die Steiermark erhalten",
            text: "Ihr fertiges Teil wird sicher verpackt per Post nach Graz, Leoben oder Kapfenberg geliefert. Express 24-48h oder Standard 2-3 Werktage. Gratis Versand ab €50."
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
                <span className="text-primary font-semibold">Steiermark – Grünes Herz Österreichs</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service für <span className="text-gradient">Steiermark</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Professioneller FDM 3D-Druck für <strong className="text-foreground">Graz</strong>, Leoben, 
                Kapfenberg und die gesamte Steiermark. Express-Lieferung in <strong className="text-foreground">24-48h</strong>, 
                perfekt für TU Graz, Industrie und Design. Österreichische Qualität für innovative Projekte.
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
                  <Microscope className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">TU Graz Partner</span>
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

        {/* Services Section - Enhanced */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Unsere <span className="text-gradient">Services</span> für die Steiermark
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> für 
                TU Graz bis zur Serienfertigung – professionelle 3D-Druck-Lösungen für Graz und ganz Steiermark.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Industrie 3D-Druck</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    FDM 3D-Druck für steirische Industriebetriebe. Funktionsprototypen, 
                    Betriebsmittel und Ersatzteile – robust und präzise.
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
                    Schnelle Fertigung in 24-48h nach Graz und ganz Steiermark. 
                    Perfekt für dringende Projekte und Forschung.
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
                    <Microscope className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Forschung & Entwicklung</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Rapid Prototyping für TU Graz, Universitäten und Forschungseinrichtungen. 
                    Wissenschaftspartner für innovative Projekte.
                  </p>
                  <a href="/prototypen" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
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
                  Warum ekdruck für <span className="text-gradient">3D-Druck in der Steiermark</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist bieten wir Grazer Unternehmen, 
                  TU Graz und Designern lokale Expertise und schnelle Lieferzeiten.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Express nach Graz</h3>
                      <p className="text-muted-foreground">24-48h Lieferung nach Graz und ganz Steiermark. Gratis Versand ab €50 Bestellwert.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">TU Graz Partner</h3>
                      <p className="text-muted-foreground">Erfahrung mit Forschungsprojekten und Studienprojekten. Wissenschaftspartner für innovative Vorhaben.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Industrie-Expertise</h3>
                      <p className="text-muted-foreground">Spezialisiert auf technische Bauteile für steirische Industriebetriebe. Funktionale Lösungen.</p>
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
                      <p className="text-muted-foreground">Unverbindliche CAD-Analyse und Machbarkeitsprüfung für Ihre Steiermark-Projekte.</p>
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
                  Anwendungsbereiche für <span className="text-gradient">3D-Druck in der Steiermark</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von Industrie über Forschung bis zu Architektur – 
                  3D-Druck Lösungen für die innovative Steiermark.
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
                      Funktionsprototypen, Ersatzteile und Vorrichtungen für steirische Maschinenbaubetriebe.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Microscope className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Forschung</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rapid Prototyping für TU Graz, Universitäten und Forschungseinrichtungen der Steiermark.
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
                      Architekturmodelle für Grazer Planungsbüros und Bauvorhaben. Präsentationsreif.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Palette className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Design & Kunst</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kunstobjekte und Designprototypen für Grazer Kreativschaffende und Studios.
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
                  <span className="text-gradient">Premium-Materialien</span> für die Steiermark
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
                  <span className="text-gradient">Einfacher Prozess</span> für die Steiermark
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
                          für Ihr Projekt in der Steiermark.
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
                        <h3 className="font-bold text-xl mb-3">Lieferung in die Steiermark</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Express-Versand in 24-48h nach Graz, Leoben oder Kapfenberg. 
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
                  Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in der Steiermark
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren Service für Graz und die Steiermark.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell erfolgt die Lieferung in die Steiermark?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Graz und in die gesamte Steiermark. 
                      Standard-Lieferungen dauern 2-3 Werktage. Kostenloser Versand ab €50 Bestellwert.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Arbeiten Sie mit der TU Graz zusammen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir unterstützen Forschungsprojekte und Studierende der TU Graz mit schnellem und 
                      qualitativ hochwertigem 3D-Druck. Spezielle Konditionen für Bildungseinrichtungen verfügbar.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Materialien eignen sich für technische Bauteile?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Für steirische Industriebetriebe empfehlen wir PETG (chemikalienbeständig), 
                      ABS (hitzebeständig bis 100°C) oder Carbon-Nylon (extrem belastbar). 
                      Gerne beraten wir Sie zur optimalen Materialwahl.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Was kostet 3D-Druck in der Steiermark?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      PLA ab €1,50/Stunde, PETG ab €2,00/Stunde, ABS ab €2,50/Stunde, PA12 Nylon ab €4,50/Stunde. 
                      Nutzen Sie unseren Online-Kostenrechner für eine genaue Schätzung.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Bieten Sie Mengenrabatt an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja! Ab 10 Teilen oder für wiederkehrende Bestellungen bieten wir attraktive Staffelpreise. 
                      Spezielle Konditionen für Grazer und steirische Unternehmen mit regelmäßigem Bedarf.
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

export default Steiermark3DDruck;
