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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Service aus Österreich | Nachhaltiger FDM 3D-Druck | ekdruck e.U."
        description="3D-Druck Service für ganz Österreich ✓ FDM 3D-Druck ✓ Rapid Prototyping ✓ Nachhaltiger 3D-Druck Service ✓ 3D Druck Oberösterreich ✓ Express Service"
        keywords="3d-druck österreich, 3d-druck dienstleister, fdm 3d-druck, rapid prototyping österreich, 3d drucker kaufen österreich, 3d-druck firma, etikettendrucker österreich, 3d-druck shop österreich, dienstleistung 3d druck, 3d-druck für privatpersonen, additives fertigungsverfahren, finishing druck, 3d drucker modelle erstellen, rapid prototyping verfahren"
        path="/"
        schemaType="service"
        preloadResources={[
          {href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", as: "image", type: "image/png"},
          {href: "/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png", as: "image", type: "image/png"}
        ]}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"}
      ]} />
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
                  Unser <strong className="text-primary">3D-Druck Service</strong> deckt alle Bereiche ab: von schnellem{" "}
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
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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
      
      {/* About Section */}
      <About />
      
      {/* Reviews Section - Enhanced Visual Separation */}
      <div className="bg-gradient-to-b from-background to-muted/30">
        <Reviews />
        <ReviewsWidget />
      </div>
      
      {/* Contact Section */}
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Index;
