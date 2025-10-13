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
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  useEffect(() => {
    // Update document title for main page - SEO optimized with target keywords
    document.title = "3D-Druck Service aus Österreich | Nachhaltiger FDM 3D-Druck | ekdruck e.U.";
  }, []);

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
      
      {/* Additional Content Section - Technology & Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Professioneller <span className="text-gradient">FDM 3D-Druck</span> aus Oberösterreich
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Modernste FDM 3D-Druck Technologie</h3>
                <p className="text-muted-foreground mb-4">
                  Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> aus Oberösterreich setzen wir auf modernste{" "}
                  <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold">FDM (Fused Deposition Modeling)</a> Technologie. 
                  Diese additive Fertigungsmethode ermöglicht die präzise Herstellung komplexer Geometrien mit hoher Qualität.
                </p>
                <p className="text-muted-foreground mb-4">
                  Unser <strong className="text-primary">3D-Druck Service</strong> deckt alle Bereiche ab: von schnellem{" "}
                  <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> über{" "}
                  <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">individuelle Einzelanfertigungen</a> bis hin zur{" "}
                  <a href="/serienfertigung" className="text-primary hover:underline font-semibold">effizienten Serienfertigung</a>. 
                  Mit Schichtauflösungen bis zu 0,1mm garantieren wir höchste Präzision.
                </p>
                <p className="text-muted-foreground">
                  Als österreichischer <strong className="text-primary">3D-Druck Spezialist</strong> legen wir besonderen Wert auf{" "}
                  <a href="/3d-druck-materialien" className="text-primary hover:underline font-semibold">nachhaltige Materialien</a>. 
                  Wir verwenden ausschließlich hochwertige Filamente aus österreichischer Produktion für umweltfreundlichen 3D-Druck.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Unser 3D-Druck Prozess</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h4 className="font-bold mb-2">Anfrage & Beratung</h4>
                      <p className="text-sm text-muted-foreground">
                        Kostenlose Beratung zu Material, Technologie und Machbarkeit Ihres 3D-Druck Projekts
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h4 className="font-bold mb-2">Angebot & Design-Optimierung</h4>
                      <p className="text-sm text-muted-foreground">
                        Detailliertes Angebot mit Preis und Lieferzeit. Optimierung Ihrer CAD-Dateien für optimale Druckergebnisse
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h4 className="font-bold mb-2">Produktion mit FDM 3D-Druck</h4>
                      <p className="text-sm text-muted-foreground">
                        Fertigung mit modernsten FDM 3D-Druckern und nachhaltigen österreichischen Materialien
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">4</div>
                    <div>
                      <h4 className="font-bold mb-2">Qualitätskontrolle & Versand</h4>
                      <p className="text-sm text-muted-foreground">
                        Sorgfältige Prüfung und schneller Versand österreichweit. Express-Service in 24-48h verfügbar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Häufig gestellte <span className="text-gradient">Fragen</span> zu 3D-Druck
              </h3>
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Was kostet 3D-Druck bei ekdruck?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten hängen von Material, Größe und Druckdauer ab. Nutzen Sie unseren{" "}
                      <a href="/kostenrechner" className="text-primary hover:underline font-semibold">Kostenrechner</a> für eine sofortige Schätzung. 
                      Kleine Prototypen ab €5, größere Projekte nach individuellem Angebot.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell erhalte ich mein 3D-gedrucktes Teil?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Standard-Lieferung 3-5 Werktage österreichweit. Mit unserem{" "}
                      <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Express-Service</a> erhalten Sie 
                      Ihre Teile bereits in 24-48 Stunden.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Dateiformate werden akzeptiert?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir akzeptieren alle gängigen CAD-Formate: STL, OBJ, STEP, IGES, 3MF und mehr. 
                      Haben Sie keine CAD-Datei? Wir erstellen diese gerne für Sie basierend auf Ihrer Idee oder Skizze.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Für welche Branchen bietet ekdruck 3D-Druck an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Industrie & Maschinenbau, Architektur & Bau, Medizintechnik, Automotive, Design & Kunst, 
                      Bildung & Forschung, sowie viele weitere Bereiche. Jede Branche profitiert von unserer Expertise.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Warum österreichisches Filament verwenden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Nachhaltige Produktion aus Industrieabfällen, kurze Lieferwege, hohe Qualitätsstandards und 
                      Unterstützung der lokalen Wirtschaft. Made in Austria für beste Ergebnisse.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Bietet ekdruck auch Nachbearbeitung an?
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
      
      <Advantages />
      <Reviews />
      <About />
      <ReviewsWidget />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Index;
