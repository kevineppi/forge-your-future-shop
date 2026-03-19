import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import OrganizationSchema from "@/components/OrganizationSchema";
import FAQSchema from "@/components/FAQSchema";
import AggregateRatingSchema from "@/components/AggregateRatingSchema";
import SEOHead from "@/components/SEOHead";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import TrustBadges from "@/components/TrustBadges";
import ReferencesTeaser from "@/components/ReferencesTeaser";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Building2, Presentation, Palette, Users, Check, X, MapPin, TrendingDown, Clock, Repeat2, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <>
      <SEOHead 
        title="3D-Druck Messemodelle & Architekturmodelle | Express 24h | ekdruck.at" 
        description="★ 5/5 Google | Professionelle 3D-gedruckte Messemodelle & Architekturmodelle. Ab €20, Angebot in 6h, versandkostenfrei ab €100. Express 24h ✓ Made in Austria → Jetzt anfragen" 
        keywords="messemodelle 3d-druck, architekturmodelle 3d-druck, 3d druck österreich, messemodell express, architekturmodell kaufen, 3d-druck dienstleister österreich" 
        path="/"
        preloadResources={[{
          href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
          as: "image",
          type: "image/png"
        }, {
          href: "/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
          as: "image",
          type: "image/png"
        }]} 
      />
      <OrganizationSchema />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <AggregateRatingSchema 
        ratingValue={5.0}
        ratingCount={28}
        bestRating={5}
        worstRating={5}
      />
      <FAQSchema 
        faqs={[
          {
            question: "Was kostet 3D-Druck bei ekdruck?",
            answer: "Die Kosten hängen von Material, Größe und Druckdauer ab. Nutzen Sie unseren Kostenrechner für eine sofortige Schätzung. 3D-Druck ab €20, Express-Service und Mengenrabatte verfügbar."
          },
          {
            question: "Wie schnell erhalte ich mein 3D-gedrucktes Teil?",
            answer: "Standard-Lieferung 3-5 Werktage österreichweit. Mit unserem Express-Service erhalten Sie Ihre Teile bereits in 24-48 Stunden."
          },
          {
            question: "Welche Dateiformate werden akzeptiert?",
            answer: "Wir akzeptieren alle gängigen CAD-Formate: STL, OBJ, STEP, IGES, 3MF und mehr. Haben Sie keine CAD-Datei? Wir erstellen diese gerne für Sie basierend auf Ihrer Idee oder Skizze."
          },
          {
            question: "Für welche Bereiche bietet ekdruck 3D-Druck an?",
            answer: "Modellbau & Architektur, Dekoration & Wohnaccessoires, Geschenke & Personalisierung, Design & Kunst sowie Hobby & Kreativprojekte. Wir realisieren Ihre individuellen Ideen."
          },
          {
            question: "Warum österreichisches Filament verwenden?",
            answer: "Nachhaltige Produktion aus Industrieabfällen, kurze Lieferwege, hohe Qualitätsstandards und Unterstützung der lokalen Wirtschaft. Made in Austria für beste Ergebnisse."
          },
          {
            question: "Welche Garantie bietet ekdruck auf 3D-gedruckte Teile?",
            answer: "Wir garantieren höchste Qualität durch sorgfältige Prüfung jedes Bauteils vor dem Versand. Bei Qualitätsmängeln bieten wir kostenlose Nachbesserung oder Ersatzlieferung innerhalb von 30 Tagen."
          }
        ]}
      />
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
      
      {/* References Teaser - Aktuelle Projekte */}
      <ReferencesTeaser />
      
      {/* Technology & Process Section - Enhanced with Icons */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-4xl md:text-5xl font-bold mb-4">
                Professioneller <span className="text-gradient">FDM 3D-Druck</span> aus Oberösterreich
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner für Innovation und Nachhaltigkeit. 
                Entdecken Sie unsere <a href="/ratgeber" className="text-primary hover:underline font-semibold">Ratgeber</a> für detaillierte Informationen.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Technologie Sektion */}
              <div className="gradient-card p-8 rounded-2xl border-2 border-primary/10">
                 <div className="mb-6">
                   <p className="text-lg font-semibold text-primary mb-3">Modernste FDM Technologie</p>
                  </div>
                 <p className="text-muted-foreground mb-4 leading-relaxed">
                   Als Dienstleister aus Oberösterreich setzen wir auf modernste{" "}
                   <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold">FDM (Fused Deposition Modeling)</a> Technologie.
                   Diese additive Fertigungsmethode ermöglicht die präzise Herstellung komplexer Geometrien mit außergewöhnlich hoher Qualität.
                 </p>
                 <p className="text-muted-foreground mb-4 leading-relaxed">
                 Unser Service deckt alle Bereiche ab: von{" "}
                 <a href="/3d-druck-materialien" className="text-primary hover:underline font-semibold">verschiedenen Materialien</a> über{" "}
                 <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">individuelle Einzelteile</a> bis zu{" "}
                 personalisierten Geschenken und Dekoartikeln.
                 </p>
                 <p className="text-muted-foreground leading-relaxed">
                   Mit Schichtauflösungen bis 0,1mm garantieren wir höchste Präzision. Wir verwenden ausschließlich{" "}
                 <a href="/3d-druck-materialien" className="text-primary hover:underline font-semibold">hochwertige Materialien aus Österreich</a>.
                 Das bedeutet kurze Transportwege und umweltfreundliche Produktion.
                 </p>
              </div>
              
              {/* Prozess Sektion */}
              <div className="gradient-card p-8 rounded-2xl border-2 border-primary/10">
                 <div className="mb-6">
                   <p className="text-lg font-semibold text-primary mb-3">Unser Ablauf</p>
                  </div>
                 <div className="space-y-6">
                   <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold shadow-lg">1</div>
                      <div>
                        <p className="font-semibold mb-2">Anfrage & Beratung</p>
                        <p className="text-sm text-muted-foreground">
                          Kostenlose Beratung zu Material, Technologie und Machbarkeit. Wir finden die beste Lösung für Ihr Projekt.
                        </p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold shadow-lg">2</div>
                      <div>
                        <p className="font-semibold mb-2">Angebot & Design-Optimierung</p>
                        <p className="text-sm text-muted-foreground">
                          Detailliertes Angebot mit transparentem Preis und realistischer Lieferzeit. Wir optimieren Ihre CAD-Dateien für beste Druckergebnisse.
                        </p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold shadow-lg">3</div>
                      <div>
                        <p className="font-semibold mb-2">Produktion mit FDM-Technologie</p>
                        <p className="text-sm text-muted-foreground">
                          Fertigung mit modernsten FDM-Druckern und nachhaltigen österreichischen Materialien. Höchste Qualität bei minimaler Umweltbelastung.
                        </p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold shadow-lg">4</div>
                      <div>
                        <p className="font-semibold mb-2">Qualitätskontrolle & Versand</p>
                        <p className="text-sm text-muted-foreground">
                          Sorgfältige Prüfung jedes Objekts vor dem Versand. Express-Service liefert in 24-48 Stunden österreichweit.
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
                  <p className="text-3xl md:text-4xl font-bold">
                    Häufig gestellte <span className="text-gradient">Fragen</span>
                  </p>
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
                      Die Kosten hängen von Material, Größe und Druckdauer ab. Kontaktieren Sie uns für ein individuelles Angebot. 
                      3D-Druck ab €20, Express-Service und Mengenrabatte verfügbar.
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
                     <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Express-Fertigung</a> erhalten Sie 
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
                     Mehr zu unserem <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">individuellen Fertigungsservice</a>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Für welche Bereiche bietet ekdruck 3D-Druck an?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                     Modellbau & Architektur, Dekoration & Wohnaccessoires, Geschenke & Personalisierung, Design & Kunst 
                     sowie Hobby & Kreativprojekte. Wir realisieren Ihre individuellen Ideen. 
                     Entdecken Sie unseren <a href="/ratgeber/material-guide" className="text-primary hover:underline font-semibold">Material-Guide</a>.
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
                     Entdecken Sie unseren <a href="/ratgeber/material-guide" className="text-primary hover:underline font-semibold">Materialien-Ratgeber</a>.
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
                     So erhalten Sie optisch perfekte Objekte direkt einsatzbereit. 
                     Mehr zu unseren <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Einzelanfertigungen</a>.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* KI Chat Hinweis */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-primary/10 text-center">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Noch Fragen? 🤖 Unser KI-Berater antwortet sofort!</span>
                    <br />
                    <span className="text-xs">→ Roboter-Button unten rechts anklicken</span>
                  </p>
                </div>
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
                 <div className="mb-6">
                   <p className="text-lg font-semibold text-primary mb-3">Premium Materialien</p>
                 </div>
                 <div className="space-y-6">
                   <div className="border-l-4 border-primary pl-4">
                     <p className="font-semibold mb-2">PLA (Polylactic Acid)</p>
                     <p className="text-muted-foreground text-sm">
                       Biologisch abbaubares Material aus nachwachsenden Rohstoffen. Ideal für Prototypen und Modelle.
                       Temperaturbeständig bis 60°C. In vielen Farben verfügbar.
                     </p>
                   </div>
                   <div className="border-l-4 border-primary pl-4">
                     <p className="font-semibold mb-2">PETG (Polyethylenterephthalat)</p>
                     <p className="text-muted-foreground text-sm">
                       Robustes Material mit guter chemischer Beständigkeit. Temperaturbeständig bis 80°C.
                       UV-beständig und langlebig. Perfekt für Außendekoration und Modellbau.
                     </p>
                   </div>
                   <div className="border-l-4 border-primary pl-4">
                     <p className="font-semibold mb-2">ABS (Acrylnitril-Butadien-Styrol)</p>
                     <p className="text-muted-foreground text-sm">
                       Hochwertiges Material. Temperaturbeständigkeit bis 100°C.
                       Ideal für robuste Modelle und Dekoration. Nachbearbeitbar durch Schleifen und Lackieren.
                     </p>
                   </div>
                   <div className="border-l-4 border-primary pl-4">
                     <p className="font-semibold mb-2">TPU (Thermoplastisches Polyurethan)</p>
                     <p className="text-muted-foreground text-sm">
                       Flexibles Material mit hoher Abriebfestigkeit. Shore-Härte 95A, dehnbar bis 500%.
                       Optimal für Dichtungen und flexible Verbindungen.
                     </p>
                   </div>
                   
                 </div>
              </div>

              {/* Applications */}
              <div className="gradient-card p-8 rounded-2xl border-2 border-primary/10">
                 <div className="mb-6">
                   <p className="text-lg font-semibold text-primary mb-3">Anwendungsbereiche</p>
                 </div>
                 <div className="space-y-6">
                   <div className="border-l-4 border-secondary pl-4">
                     <p className="font-semibold mb-2">Modellbau & Architektur</p>
                     <p className="text-muted-foreground text-sm">
                       Architekturmodelle, Miniaturmodelle und Dioramen.
                       Maßstabsgetreue Präsentationsmodelle für jeden Anlass.
                     </p>
                   </div>
                   <div className="border-l-4 border-secondary pl-4">
                     <p className="font-semibold mb-2">Dekoration & Wohnaccessoires</p>
                     <p className="text-muted-foreground text-sm">
                       Vasen, Lampen, Deko-Objekte und Wohnaccessoires.
                       Individuelle Designs in allen Farben und Größen.
                     </p>
                   </div>
                   <div className="border-l-4 border-secondary pl-4">
                     <p className="font-semibold mb-2">Geschenke & Personalisierung</p>
                     <p className="text-muted-foreground text-sm">
                       Personalisierte Geschenke, Figuren und Namensschilder.
                       Einzigartige Unikate für besondere Anlässe.
                     </p>
                   </div>
                   <div className="border-l-4 border-secondary pl-4">
                     <p className="font-semibold mb-2">Kunst & Design</p>
                     <p className="text-muted-foreground text-sm">
                       Kunstobjekte, Skulpturen und Design-Studien.
                       Kreative Projekte in höchster Qualität.
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
                <p className="font-semibold mb-3">Sorgfältige Qualitätskontrolle</p>
                 <p className="text-muted-foreground leading-relaxed">
                   Jedes Objekt wird visuell geprüft und auf Maßhaltigkeit kontrolliert.
                   Gleichbleibende Qualität durch kalibrierte Drucker.
                 </p>
              </div>

              <div className="group bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                 <p className="font-semibold mb-3">Schnelle Lieferzeiten</p>
                 <p className="text-muted-foreground leading-relaxed">
                   Standard in 3-5 Werktagen österreichweit. Express-Service in 24-48 Stunden verfügbar.
                 </p>
              </div>

              <div className="group bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                 <p className="font-semibold mb-3">Nachhaltige Materialien</p>
                 <p className="text-muted-foreground leading-relaxed">
                   Ausschließlich österreichische Filamente aus recycelten Industrieabfällen.
                   Umweltfreundliche Produktion mit Ökostrom.
                 </p>
              </div>

              <div className="group bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                 <p className="font-semibold mb-3">Persönliche Beratung</p>
                 <p className="text-muted-foreground leading-relaxed">
                   Von der Idee bis zum Produkt. Beratung zu Material, Design und Machbarkeit.
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
                         <p className="font-semibold mb-2">Präzise Fertigung</p>
                         <p className="text-muted-foreground text-sm leading-relaxed">
                           FDM-Drucker mit Schichtauflösungen von 0,1mm bis 0,3mm.
                           Gleichbleibende Qualität durch regelmäßige Kalibrierung.
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
                         <p className="font-semibold mb-2">Design-Optimierung</p>
                         <p className="text-muted-foreground text-sm leading-relaxed">
                           Analyse und Optimierung Ihrer CAD-Dateien.
                           Kostenlose Beratung zu Wandstärken und Druckorientierung.
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
                         <p className="font-semibold mb-2">Faire Preise</p>
                         <p className="text-muted-foreground text-sm leading-relaxed">
                           Transparente Preisgestaltung ohne versteckte Kosten. Kontaktieren Sie uns für ein individuelles Angebot. 
                           Mehr dazu im <a href="/ratgeber/kosten-guide" className="text-primary hover:underline font-semibold">Preis-Ratgeber</a>.
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
                        <p className="font-semibold mb-2">Für jeden Kunden</p>
                         <p className="text-muted-foreground text-sm leading-relaxed">
                           Von Privatpersonen bis zu Firmenkunden - wir bedienen alle Bereiche. 
                           Architektur, Design, Kunst, Bildung und viele mehr. 
                           Vergleichen Sie <a href="/ratgeber/verfahrens-vergleich" className="text-primary hover:underline font-semibold">verschiedene Druckverfahren</a>.
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
                        <p className="font-semibold mb-2">Finishing-Optionen</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Nachbearbeitung für perfekte Objekte: Schleifen, Grundieren, Lackieren, 
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
                        <p className="font-semibold mb-2">Komplettservice</p>
                         <p className="text-muted-foreground text-sm leading-relaxed">
                           Sie haben keine CAD-Datei? Kein Problem! Wir erstellen 3D-Modelle nach Ihren 
                           Vorgaben, Skizzen oder Fotos. Von der Idee bis zum fertigen Produkt. 
                           Siehe unsere <a href="/probeteile" className="text-primary hover:underline font-semibold">Testdruck-Möglichkeiten</a>.
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

      {/* Sektion B – Warum 3D-Druck vs. traditioneller Modellbau */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                <TrendingDown className="w-4 h-4" /> Vergleich
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Warum 3D-Druck statt <span className="text-gradient">traditionellem Modellbau?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Wo herkömmlicher Handmodellbau an seine Grenzen stößt, liefert FDM 3D-Druck messbare Vorteile – in Zeit, Kosten und Präzision.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-border mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-4 font-semibold text-muted-foreground">Kriterium</th>
                    <th className="text-center p-4 font-bold text-primary">ekdruck 3D-Druck</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">Traditioneller Modellbau</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium flex items-center gap-2"><TrendingDown className="w-4 h-4 text-primary shrink-0" /> Kosten ab</td>
                    <td className="p-4 text-center font-bold text-primary">ab €20 / Modell</td>
                    <td className="p-4 text-center text-muted-foreground">€200–€2.000+</td>
                  </tr>
                  <tr className="border-t border-border hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /> Lieferzeit</td>
                    <td className="p-4 text-center font-bold text-primary">24–48h Express möglich</td>
                    <td className="p-4 text-center text-muted-foreground">1–4 Wochen</td>
                  </tr>
                  <tr className="border-t border-border hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium flex items-center gap-2"><Layers className="w-4 h-4 text-primary shrink-0" /> Geometrie-Komplexität</td>
                    <td className="p-4 text-center font-bold text-primary">
                      <span className="inline-flex items-center gap-1"><Check className="w-4 h-4 text-accent" /> Unbegrenzt</span>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <span className="inline-flex items-center justify-center gap-1"><X className="w-4 h-4 text-destructive" /> Stark limitiert</span>
                    </td>
                  </tr>
                  <tr className="border-t border-border hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium flex items-center gap-2"><Repeat2 className="w-4 h-4 text-primary shrink-0" /> Wiederholbarkeit</td>
                    <td className="p-4 text-center font-bold text-primary">
                      <span className="inline-flex items-center gap-1"><Check className="w-4 h-4 text-accent" /> 1:1 identische Kopien</span>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <span className="inline-flex items-center justify-center gap-1"><X className="w-4 h-4 text-destructive" /> Handarbeit variiert</span>
                    </td>
                  </tr>
                  <tr className="border-t border-border hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium flex items-center gap-2"><Layers className="w-4 h-4 text-primary shrink-0" /> Gewicht</td>
                    <td className="p-4 text-center font-bold text-primary">Bis zu 80% leichter (Waben-Infill)</td>
                    <td className="p-4 text-center text-muted-foreground">Massiv &amp; schwer</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Body text */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/30 rounded-2xl p-7">
                <h3 className="font-bold text-lg mb-3">Kosteneffizienz durch additive Fertigung</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Traditioneller Modellbau erfordert Handarbeit, teure Werkzeuge und viel Material-Verschnitt. FDM 3D-Druck ist ein additives Verfahren: Es wird nur das Material aufgetragen, das tatsächlich gebraucht wird – kein Abfall, kein Werkzeugverschleiß. Das Ergebnis sind erheblich niedrigere Stückkosten, insbesondere bei kleinen Serien und Einzelstücken ab 1 Stück. Für Architekten und Messeaussteller bedeutet das: Mehr Budget für Design statt Fertigung.
                </p>
              </div>
              <div className="bg-muted/30 rounded-2xl p-7">
                <h3 className="font-bold text-lg mb-3">Schnelligkeit &amp; Reproduzierbarkeit entscheiden</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Bei Messe-Deadlines oder Wettbewerbsabgaben zählt jede Stunde. Mit unserem Express-Service liefern wir österreichweit in 24–48 Stunden. Gleichzeitig sichert die digitale CAD-Basis, dass jedes Modell – egal ob erstes oder fünfzigstes Exemplar – exakt identisch ist. Korrekturen am Modell kosten keine Neuanfertigung, sondern nur eine Datei-Änderung und einen neuen Druckauftrag. Vergleichen Sie alle Druckverfahren in unserem <Link to="/ratgeber/verfahrens-vergleich" className="text-primary hover:underline font-semibold">Verfahrens-Vergleich Ratgeber</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Sektion A – Zielgruppen-Hub */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              <Users className="w-4 h-4" /> Für wen ist ekdruck?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              3D-Druck für jede <span className="text-gradient">Branche & Zielgruppe</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ob Architekt, Messeaussteller, Künstler oder Firmenkunde – unsere FDM-Drucklösungen sind auf Ihre spezifischen Anforderungen zugeschnitten.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Architekten */}
            <Link to="/architekturmodelle" className="group">
              <Card className="h-full hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-7 flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">Architekten & Planer</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    Maßstabsgetreue Architekturmodelle im Maßstab 1:50 bis 1:500 für Wettbewerbe, Baugenehmigungen und Kundenpräsentationen. Kompatibel mit ArchiCAD, Revit und allen gängigen CAD-Formaten. Präzision bis 0,1 mm, Express-Fertigung für Wettbewerbs-Deadlines.
                  </p>
                  <span className="mt-5 text-primary text-sm font-semibold group-hover:underline inline-flex items-center gap-1">
                    Zu Architekturmodellen →
                  </span>
                </CardContent>
              </Card>
            </Link>
            {/* Messeaussteller */}
            <Link to="/messemodelle" className="group">
              <Card className="h-full hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-7 flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Presentation className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">Messeaussteller</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    Express-Fertigung in 24–48 Stunden für Wien Messe, Messezentrum Salzburg, Messe Graz und alle großen österreichischen Messeplätze. Leichtbau durch FDM-Technologie spart Transportkosten. Große Objekte bis 2 m+ durch Segment-Montage realisierbar.
                  </p>
                  <span className="mt-5 text-primary text-sm font-semibold group-hover:underline inline-flex items-center gap-1">
                    Zu Messemodellen →
                  </span>
                </CardContent>
              </Card>
            </Link>
            {/* Künstler */}
            <Link to="/kunstobjekte" className="group">
              <Card className="h-full hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-7 flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">Künstler & Kreative</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    Komplexe organische Formen und Skulpturen, die mit traditionellen Methoden unmöglich wären. Spezialfilamente wie Holz-Filament, Marmor-Look und Metallic-Optik für einzigartige Kunstobjekte. Ideal für Galerien, Installationen und exklusive Kunsteditionen.
                  </p>
                  <span className="mt-5 text-primary text-sm font-semibold group-hover:underline inline-flex items-center gap-1">
                    Zu Kunstobjekten →
                  </span>
                </CardContent>
              </Card>
            </Link>
            {/* Firmenkunden */}
            <Link to="/firmenkunden" className="group">
              <Card className="h-full hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-7 flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">Firmenkunden & B2B</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    Professionelle B2B-Abwicklung mit Rechnung und UID-Nummer. NDA auf Anfrage, Mengenrabatte ab 10 Einheiten, dedizierter Ansprechpartner. Serienfertigung von Prototypen, Messedisplays, Industriemodellen und Ersatzteilen – zuverlässig und termintreu.
                  </p>
                  <span className="mt-5 text-primary text-sm font-semibold group-hover:underline inline-flex items-center gap-1">
                    Zu Firmenkunden →
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviewsSection />
      
      {/* Trust Badges Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>
      
      {/* Contact Section */}
      {/* Sektion C – Regionaler Partner für ganz Österreich & Deutschland */}
      <section className="py-20 md:py-28 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4" /> Regionaler Partner
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                3D-Druck-Partner für ganz <span className="text-gradient">Österreich & Deutschland</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Unser Produktionsstandort in Gunskirchen (Oberösterreich) liegt zentral in der DACH-Region: nur 20 Minuten von Linz, 1,5 Stunden von Wien, rund 2 Stunden von Graz und Salzburg entfernt. Österreichweit versenden wir per Express in 24–48 Stunden, nach Deutschland in 2–4 Werktagen. Persönliche Abholung vor Ort ist nach Vereinbarung jederzeit möglich. Egal ob kleines Architekturmodell oder großes Messeexponat – wir liefern pünktlich und sicher an.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Austria */}
              <div className="bg-card rounded-2xl border border-border p-7">
                <h3 className="font-bold mb-5 flex items-center gap-2">
                  <span className="text-xl">🇦🇹</span> Bundesländer Österreich
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Wien", url: "/3d-druck-wien" },
                    { name: "Oberösterreich", url: "/3d-druck-oberoesterreich" },
                    { name: "Niederösterreich", url: "/3d-druck-niederoesterreich" },
                    { name: "Steiermark", url: "/3d-druck-steiermark" },
                    { name: "Salzburg", url: "/3d-druck-salzburg" },
                    { name: "Tirol", url: "/3d-druck-innsbruck" },
                    { name: "Kärnten", url: "/3d-druck-kaernten" },
                    { name: "Vorarlberg", url: "/3d-druck-vorarlberg" },
                    { name: "Burgenland", url: "/3d-druck-burgenland" },
                  ].map((r) => (
                    <Link key={r.url} to={r.url} onClick={() => window.scrollTo(0, 0)}
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors font-medium">
                      {r.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    { name: "Linz", url: "/3d-druck-linz" },
                    { name: "Graz", url: "/3d-druck-graz" },
                    { name: "Innsbruck", url: "/3d-druck-innsbruck" },
                    { name: "Klagenfurt", url: "/3d-druck-klagenfurt" },
                    { name: "Wels", url: "/3d-druck-wels" },
                    { name: "St. Pölten", url: "/3d-druck-st-poelten" },
                    { name: "Dornbirn", url: "/3d-druck-dornbirn" },
                    { name: "Villach", url: "/3d-druck-villach" },
                    { name: "Gunskirchen", url: "/3d-druck-gunskirchen" },
                  ].map((c) => (
                    <Link key={c.url} to={c.url} onClick={() => window.scrollTo(0, 0)}
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors">
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Germany */}
              <div className="bg-card rounded-2xl border border-border p-7">
                <h3 className="font-bold mb-5 flex items-center gap-2">
                  <span className="text-xl">🇩🇪</span> Regionen Deutschland
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Bayern", url: "/messemodelle/muenchen" },
                    { name: "Baden-Württemberg", url: "/messemodelle/stuttgart" },
                    { name: "München", url: "/messemodelle/muenchen" },
                    { name: "Stuttgart", url: "/messemodelle/stuttgart" },
                    { name: "Nürnberg", url: "/messemodelle/nuernberg" },
                    { name: "Augsburg", url: "/messemodelle/augsburg" },
                    { name: "Ulm", url: "/messemodelle/ulm" },
                    { name: "Freiburg", url: "/messemodelle/freiburg" },
                    { name: "Regensburg", url: "/messemodelle/regensburg" },
                    { name: "Passau", url: "/messemodelle/passau" },
                  ].map((r) => (
                    <Link key={r.url + r.name} to={r.url} onClick={() => window.scrollTo(0, 0)}
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors font-medium">
                      {r.name}
                    </Link>
                  ))}
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                  Lieferung nach Deutschland in 2–4 Werktagen via DHL/GLS. Zuverlässige Zustellung für Messeauftritte auf der IAA, Bauma, denkmal, und weitere Fachmessen – auch kurzfristig buchbar.
                </p>
              </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-7 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-5">
                <strong className="text-foreground">Standort Gunskirchen, OÖ:</strong> Zentraler Knotenpunkt für schnelle Lieferung nach Wien (1,5h), Linz (20min), Salzburg (1,5h), Graz (2h) und in die gesamte DACH-Region. Express-Versand österreichweit in 24–48h, persönliche Abholung jederzeit nach Vereinbarung.
              </p>
              <Button asChild size="lg">
                <Link to="/kontakt">Anfrage stellen – Angebot in 6h</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      
      {/* Sticky Elements - Quick Wins */}
      <ExitIntentPopup />
      
      </div>
    </>;
};
export default Index;