import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import ReviewsWidget from "@/components/ReviewsWidget";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SEOHead from "@/components/SEOHead";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import TrustBadges from "@/components/TrustBadges";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Index = () => {
  return <>
      <SEOHead title="3D-Druck Dienstleister Österreich | Prototypen & Serienfertigung | ekdruck" description="⚡ Ihr 3D-Druck Dienstleister aus Österreich ✓ Prototypen ab 24h ✓ Funktionsteile ✓ Serienfertigung ✓ Kostenloser Versand ab €50 ✓ 100% AT-Filament → Jetzt anfragen!" keywords="3d-druck dienstleister, 3d druck prototypen, prototypen 3d-druck, 3d-druck österreich, fdm 3d-druck, rapid prototyping österreich, 3d druck service, 3d-druck firma, dienstleistung 3d druck, prototyping service österreich" path="/" schemaType="service" preloadResources={[{
      href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
      as: "image",
      type: "image/png"
    }, {
      href: "/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
      as: "image",
      type: "image/png"
    }]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }]} />
      <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      
      {/* Advantages Section - Warum ekdruck wählen */}
      <Advantages />
      
      {/* Technology & Process Section - Enhanced with Icons */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Professioneller <span className="text-gradient">FDM 3D-Druck</span> aus Oberösterreich
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner für Innovation und Nachhaltigkeit
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Technologie Sektion */}
              <div className="gradient-card p-8 rounded-2xl border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Modernste FDM 3D-Druck Technologie</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> aus Oberösterreich setzen wir auf modernste{" "}
                  <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold">FDM (Fused Deposition Modeling)</a> Technologie. 
                  Diese additive Fertigungsmethode ermöglicht die präzise Herstellung komplexer Geometrien mit hoher Qualität.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Unser <strong className="text-primary">3D-Druck Service</strong> deckt alle Bereiche ab: von professionellem{" "}
                  <a href="/prototypen" className="text-primary hover:underline font-semibold">Prototypenbau</a> und{" "}
                  <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> über{" "}
                  <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">individuelle Einzelanfertigungen</a> bis hin zur{" "}
                  <a href="/serienfertigung" className="text-primary hover:underline font-semibold">effizienten Serienfertigung</a>. 
                  Mit Schichtauflösungen bis zu 0,1mm garantieren wir höchste Präzision.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Als österreichischer <strong className="text-primary">3D-Druck Spezialist</strong> legen wir besonderen Wert auf{" "}
                  <a href="/3d-druck-materialien" className="text-primary hover:underline font-semibold">nachhaltige Materialien</a>. 
                  Wir verwenden ausschließlich hochwertige Filamente aus österreichischer Produktion für umweltfreundlichen 3D-Druck.
                </p>
              </div>
              
              {/* Prozess Sektion */}
              <div className="gradient-card p-8 rounded-2xl border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Unser 3D-Druck Prozess</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold shadow-lg">1</div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        Anfrage & Beratung
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Kostenlose Beratung zu Material, Technologie und Machbarkeit Ihres 3D-Druck Projekts
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold shadow-lg">2</div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Angebot & Design-Optimierung
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Detailliertes Angebot mit Preis und Lieferzeit. Optimierung Ihrer CAD-Dateien für optimale Druckergebnisse
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold shadow-lg">3</div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Produktion mit FDM 3D-Druck
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Fertigung mit modernsten FDM 3D-Druckern und nachhaltigen österreichischen Materialien
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold shadow-lg">4</div>
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                        Qualitätskontrolle & Versand
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Sorgfältige Prüfung und schneller Versand österreichweit. Express-Service in 24-48h verfügbar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section - Enhanced with Icons */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Häufig gestellte <span className="text-gradient">Fragen</span> zu 3D-Druck
                </h3>
              </div>
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Was kostet 3D-Druck bei ekdruck?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten hängen von Material, Größe und Druckdauer ab. Nutzen Sie unseren{" "}
                      <a href="/kostenrechner" className="text-primary hover:underline font-semibold">Kostenrechner</a> für eine sofortige Schätzung. 
                      Kleine Prototypen ab €5, größere Projekte nach individuellem Angebot.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Wie schnell erhalte ich mein 3D-gedrucktes Teil?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Standard-Lieferung 3-5 Werktage österreichweit. Mit unserem{" "}
                      <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Express-Service</a> erhalten Sie 
                      Ihre Teile bereits in 24-48 Stunden.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Welche Dateiformate werden akzeptiert?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir akzeptieren alle gängigen CAD-Formate: STL, OBJ, STEP, IGES, 3MF und mehr. 
                      Haben Sie keine CAD-Datei? Wir erstellen diese gerne für Sie basierend auf Ihrer Idee oder Skizze.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Für welche Branchen bietet ekdruck 3D-Druck an?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Industrie & Maschinenbau, Architektur & Bau, Medizintechnik, Automotive, Design & Kunst, 
                      Bildung & Forschung, sowie viele weitere Bereiche. Jede Branche profitiert von unserer Expertise.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Warum österreichisches Filament verwenden?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Nachhaltige Produktion aus Industrieabfällen, kurze Lieferwege, hohe Qualitätsstandards und 
                      Unterstützung der lokalen Wirtschaft. Made in Austria für beste Ergebnisse.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        Bietet ekdruck auch Nachbearbeitung an?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja! Wir bieten Schleifen, Lackieren, Grundieren, Glattieren und weitere Finishing-Optionen. 
                      So erhalten Sie produktionsreife Bauteile direkt einsatzbereit.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Material & Applications Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Materialien & <span className="text-gradient">Anwendungsbereiche</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hochwertige Filamente und vielseitige Einsatzmöglichkeiten für Ihre 3D-Druck Projekte
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Materials */}
              <div className="gradient-card p-8 rounded-2xl border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Premium 3D-Druck Materialien</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-lg mb-2">PLA (Polylactic Acid)</h4>
                    <p className="text-muted-foreground text-sm">
                      Biologisch abbaubares Material aus nachwachsenden Rohstoffen. Ideal für Prototypen, 
                      Modelle und dekorative Objekte. Temperaturbeständig bis 60°C, einfach zu drucken und 
                      in vielen Farben verfügbar.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-lg mb-2">PETG (Polyethylenterephthalat)</h4>
                    <p className="text-muted-foreground text-sm">
                      Robustes und schlagfestes Material mit guter chemischer Beständigkeit. 
                      Temperaturbeständig bis 80°C, lebensmittelecht und UV-beständig. Perfekt für 
                      funktionale Bauteile und Außenanwendungen.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-lg mb-2">ABS (Acrylnitril-Butadien-Styrol)</h4>
                    <p className="text-muted-foreground text-sm">
                      Hochfestes technisches Material mit ausgezeichneter Temperaturbeständigkeit bis 100°C. 
                      Ideal für mechanisch belastbare Bauteile, Gehäuse und Automotive-Anwendungen. 
                      Nachbearbeitbar durch Schleifen und Lackieren.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-lg mb-2">TPU (Thermoplastisches Polyurethan)</h4>
                    <p className="text-muted-foreground text-sm">
                      Flexibles, elastisches Material mit hoher Abriebfestigkeit. Shore-Härte 95A, 
                      dehnbar bis 500%. Optimal für Dichtungen, Dämpfungselemente und flexible Verbindungen.
                    </p>
                  </div>
                  
                </div>
              </div>

              {/* Applications */}
              <div className="gradient-card p-8 rounded-2xl border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Vielseitige Anwendungsbereiche</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-lg mb-2">Industrie & Maschinenbau</h4>
                    <p className="text-muted-foreground text-sm">
                      Funktionsprototypen, Ersatzteile, Betriebsmittel, Vorrichtungen und Halterungen. 
                      Schnelle Iterationen für Produktentwicklung und kosteneffiziente Kleinserien.
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-lg mb-2">Architektur & Bauwesen</h4>
                    <p className="text-muted-foreground text-sm">
                      Architekturmodelle, Gebäudevisualisierungen, Prototypen für Bauelemente und 
                      Designstudien. Maßstabsgetreue Modelle für Präsentationen und Planungen.
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-lg mb-2">Bildung & Forschung</h4>
                    <p className="text-muted-foreground text-sm">
                      Lehrmittel, wissenschaftliche Modelle, Forschungsprototypen und 
                      Anschauungsobjekte für Universitäten, Schulen und Forschungseinrichtungen.
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-lg mb-2">Design & Kunst</h4>
                    <p className="text-muted-foreground text-sm">
                      Kunstobjekte, Skulpturen, Schmuck-Prototypen und individualisierte Designprodukte. 
                      Vielfältige Materialien und Farben für kreative Projekte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Standards Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Qualität & <span className="text-gradient">Standards</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Höchste Qualitätsansprüche und professionelle Fertigungsstandards für Ihre 3D-Druck Projekte
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="group bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Sorgfältige Qualitätskontrolle</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jedes Bauteil wird visuell geprüft und auf Maßhaltigkeit kontrolliert. Wir garantieren 
                  reproduzierbare Qualität durch kalibrierte Drucker und standardisierte Prozesse.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Schnelle Lieferzeiten</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Standard-Lieferung in 3-5 Werktagen österreichweit. Express-Service in 24-48 Stunden 
                  verfügbar für zeitkritische Projekte.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Nachhaltige Materialien</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir verwenden ausschließlich österreichische Filamente aus recycelten Industrieabfällen. 
                  Umweltfreundliche Produktion mit Ökostrom für eine bessere Zukunft.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Persönliche Beratung</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Von der ersten Idee bis zum fertigen Produkt: Unser Team berät Sie bei Material, 
                  Design-Optimierung und Machbarkeit Ihres Projekts.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-3xl p-10 border-2 border-primary/20 shadow-2xl">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Was macht unseren <span className="text-gradient">3D-Druck Service</span> besonders?
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Kombinieren Sie österreichische Qualität mit modernster 3D-Druck Technologie
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Präzise Fertigung</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Modernste FDM-Drucker mit Schichtauflösungen von 0,1mm bis 0,3mm. 
                          Gleichbleibende Qualität durch regelmäßige Kalibrierung und optimierte Druckprofile.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Design-Optimierung</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Wir analysieren Ihre CAD-Dateien und optimieren sie für den 3D-Druck. 
                          Kostenlose Beratung zu Wandstärken, Supportstrukturen und Druckorientierung.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Faire Preise</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Transparente Preisgestaltung ohne versteckte Kosten. Nutzen Sie unseren 
                          Kostenrechner für eine sofortige Preisindikation oder fordern Sie ein individuelles Angebot an.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Für alle Branchen</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Von Einzelpersonen bis zu Großunternehmen - wir bedienen alle Branchen. 
                          Industrie, Architektur, Medizintechnik, Design, Bildung und viele mehr.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Finishing-Optionen</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Nachbearbeitung für produktionsreife Teile: Schleifen, Grundieren, Lackieren, 
                          Glattieren mit Aceton-Dampf und weitere Veredelungsmöglichkeiten.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Komplettservice</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Sie haben keine CAD-Datei? Kein Problem! Wir erstellen 3D-Modelle nach Ihren 
                          Vorgaben, Skizzen oder Fotos. Von der Idee bis zum fertigen Produkt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />
      
      {/* Regional Services Section - New */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                3D-Druck Service in <span className="text-gradient">ganz Österreich</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Schnelle Lieferung in alle österreichischen Bundesländer und Städte. Finden Sie Ihren regionalen 3D-Druck Service.
              </p>
            </div>

            {/* Bundesländer */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Bundesländer</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <a href="/3d-druck-oberoesterreich" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Oberösterreich</h4>
                  <p className="text-sm text-muted-foreground mt-1">3D-Druck OÖ</p>
                </a>
                <a href="/3d-druck-niederoesterreich" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Niederösterreich</h4>
                  <p className="text-sm text-muted-foreground mt-1">3D-Druck NÖ</p>
                </a>
                <a href="/3d-druck-wien" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Wien</h4>
                  <p className="text-sm text-muted-foreground mt-1">3D-Druck Wien</p>
                </a>
                <a href="/3d-druck-steiermark" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Steiermark</h4>
                  <p className="text-sm text-muted-foreground mt-1">3D-Druck Stmk</p>
                </a>
                <a href="/3d-druck-salzburg" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Salzburg</h4>
                  <p className="text-sm text-muted-foreground mt-1">3D-Druck Sbg</p>
                </a>
                <a href="/3d-druck-kaernten" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Kärnten</h4>
                  <p className="text-sm text-muted-foreground mt-1">3D-Druck Ktn</p>
                </a>
                <a href="/3d-druck-vorarlberg" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Vorarlberg</h4>
                  <p className="text-sm text-muted-foreground mt-1">3D-Druck Vbg</p>
                </a>
                <a href="/3d-druck-burgenland" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Burgenland</h4>
                  <p className="text-sm text-muted-foreground mt-1">3D-Druck Bgld</p>
                </a>
              </div>
            </div>

            {/* Städte */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Wichtige Städte</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <a href="/3d-druck-wien" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Wien</h4>
                </a>
                <a href="/3d-druck-linz" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Linz</h4>
                </a>
                <a href="/3d-druck-graz" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Graz</h4>
                </a>
                <a href="/3d-druck-salzburg" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Salzburg</h4>
                </a>
                <a href="/3d-druck-innsbruck" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Innsbruck</h4>
                </a>
                <a href="/3d-druck-klagenfurt" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Klagenfurt</h4>
                </a>
                <a href="/3d-druck-villach" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Villach</h4>
                </a>
                <a href="/3d-druck-wels" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Wels</h4>
                </a>
                <a href="/3d-druck-st-poelten" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">St. Pölten</h4>
                </a>
                <a href="/3d-druck-dornbirn" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Dornbirn</h4>
                </a>
                <a href="/3d-druck-gunskirchen" className="group bg-card hover:bg-primary/10 p-4 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Gunskirchen</h4>
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Schnelle Lieferung österreichweit • Express-Service verfügbar • Persönliche Beratung
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Jetzt anfragen für Ihre Region
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section - Enhanced Visual Separation */}
      <div className="bg-gradient-to-b from-background to-muted/30">
        
        <ReviewsWidget />
      </div>
      
      {/* Trust Badges Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>
      
      {/* Contact Section */}
      <Contact />
      <Footer />
      
      {/* Sticky Elements - Quick Wins */}
      <StickyCTA />
      <ExitIntentPopup />
      </div>
    </>;
};
export default Index;