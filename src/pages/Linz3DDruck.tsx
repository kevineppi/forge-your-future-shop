import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ServiceSchema from "@/components/ServiceSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Palette, FlaskConical } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const Linz3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Linz | FDM 3D-Druck Service | ekdruck e.U."
        description="Nur 30km von Linz! Same-Day Abholung in Gunskirchen möglich. Express-Lieferung 24h nach Linz. Regional aus OÖ – Ihr lokaler 3D-Druck Partner wartet auf Sie!"
        keywords="3d-druck linz, 3d drucker linz, fdm druck linz, rapid prototyping linz, 3d-druck oberösterreich, prototypen linz"
        path="/3d-druck-linz"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Linz", url: "/3d-druck-linz"}
      ]} />
      <ServiceSchema 
        serviceName="Rapid Prototyping 24h Express-Service Linz"
        description="Professioneller Rapid Prototyping Service für Linz mit FDM 3D-Druck. Express-Fertigung in 24-48h mit Lieferung nach Linz oder Same-Day Abholung in Gunskirchen (30km). Ideal für Start-ups, Industrie und Forschung."
        serviceType="Service"
        offers={{
          price: "50.00",
          priceCurrency: "EUR",
          description: "Rapid Prototyping ab €50, Express-Service nach Linz verfügbar"
        }}
        areaServed={["Linz", "Gunskirchen", "Oberösterreich"]}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      
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
                <span className="text-primary font-semibold">Linz & Oberösterreich</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service in <span className="text-gradient">Linz</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ihr lokaler Partner für professionellen FDM 3D-Druck in <strong className="text-foreground">Linz</strong> und ganz Oberösterreich. 
                Schnelle Lieferung innerhalb 24h nach <strong className="text-foreground">Linz</strong>, <strong className="text-foreground">Abholung</strong> in Gunskirchen (30km) möglich. Nachhaltige österreichische Materialien und persönliche Beratung für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Prototypen</a> und Serienteile.
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
                  <span className="font-semibold text-sm">24h Express</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Nachhaltig</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Made in Austria</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Top Qualität</span>
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
                Unsere <span className="text-gradient">Services in Linz</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von schnellem <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> bis zur Serienfertigung – wir bieten professionelle 3D-Druck-Lösungen für Ihr Projekt in Linz.
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
                    Professioneller FDM 3D-Druck für Prototypen, Einzelteile und Kleinserien. 
                    Schichtauflösung bis 0,1mm für höchste Präzision in Linz.
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
                  <h3 className="text-2xl font-bold mb-4">Express Service 24h</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Benötigen Sie Ihr Teil schnell? Wir liefern innerhalb von 24 Stunden in ganz Linz. 
                    Perfekt für dringende Projekte und Deadlines.
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
                    Wir verwenden ausschließlich hochwertige Filamente aus österreichischer Produktion. 
                    PLA, PETG, ABS, Nylon – alle aus nachhaltiger Herstellung.
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
                  Warum ekdruck für <span className="text-gradient">3D-Druck in Linz</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist aus Oberösterreich bieten wir Ihnen lokale Expertise, 
                  schnelle Lieferzeiten und persönliche Betreuung für Ihr Projekt in Linz.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Schnelle Lieferung nach Linz</h3>
                      <p className="text-muted-foreground">Express-Versand innerhalb von 24h direkt zu Ihnen nach Linz. Standard-Lieferung in 2-3 Werktagen österreichweit.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lokaler österreichischer Anbieter</h3>
                      <p className="text-muted-foreground">Keine langen Lieferwege aus dem Ausland. Direkt aus Oberösterreich mit kurzen Kommunikationswegen und persönlichem Kontakt.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Persönliche Beratung auf Deutsch</h3>
                      <p className="text-muted-foreground">Kompetente Unterstützung bei der Material- und Verfahrenswahl. Wir optimieren Ihre CAD-Dateien für beste Druckergebnisse.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Faire Preise & transparente Kosten</h3>
                      <p className="text-muted-foreground">Nutzen Sie unseren Kostenrechner für eine sofortige Preisschätzung. Keine versteckten Kosten, faire Konditionen.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Rapid Prototyping Section - SEO-Optimiert für Linz */}
        <section id="rapid-prototyping-linz" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-primary font-semibold">Express-Service für Linz</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-gradient">Rapid Prototyping Linz</span> – Prototypen in 24h
                  </h2>
                  <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-lg">
                    <strong className="text-foreground">Professionelle 3D-Druck Prototypen für Linz</strong> in Rekordzeit: 
                    Von der CAD-Datei zum fertigen Funktionsprototyp in 24-48h. Express-Lieferung nach Linz oder Same-Day 
                    Abholung in Gunskirchen (30km). Ideal für <strong className="text-foreground">Produktentwicklung</strong>, 
                    <strong className="text-foreground"> Start-ups</strong> und <strong className="text-foreground">Forschung</strong> in Oberösterreich.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" className="group" asChild>
                      <a href="/rapid-prototyping">
                        Umfassender Rapid Prototyping Guide
                        <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Prototyp für Linz anfragen
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Key Stats für Rapid Prototyping Linz */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="text-center p-6 bg-gradient-card rounded-xl border">
                  <div className="text-4xl font-bold text-primary mb-2">24-48h</div>
                  <p className="text-sm text-muted-foreground">Lieferung nach Linz</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-xl border">
                  <div className="text-4xl font-bold text-primary mb-2">ab €50</div>
                  <p className="text-sm text-muted-foreground">Prototypen-Kosten</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-xl border">
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <p className="text-sm text-muted-foreground">Schneller als CNC</p>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-xl border">
                  <div className="text-4xl font-bold text-primary mb-2">30km</div>
                  <p className="text-sm text-muted-foreground">Von Linz entfernt</p>
                </div>
              </div>

              {/* Was ist Rapid Prototyping? - SEO Content */}
              <AnimatedSection delay={0.1}>
                <div className="prose prose-lg max-w-none mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Was ist Rapid Prototyping in Linz?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Rapid Prototyping</strong> bezeichnet die <strong className="text-foreground">schnelle Herstellung 
                    von Prototypen</strong> mittels <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold">FDM 3D-Druck</a>. 
                    In Linz profitieren innovative Unternehmen, Start-ups aus der Tabakfabrik und Forschungseinrichtungen wie die JKU 
                    von dieser Technologie. Im Gegensatz zu traditionellen Fertigungsverfahren wie CNC-Fräsen oder Spritzguss 
                    ermöglicht <strong className="text-foreground">3D-Druck Prototyping</strong> die Herstellung komplexer Geometrien 
                    in Stunden statt Wochen – ohne teure Werkzeugkosten.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Als regionaler <strong className="text-foreground">3D-Druck Dienstleister in Oberösterreich</strong> bieten wir 
                    Linzer Unternehmen schnelle Lieferzeiten, persönliche Beratung und österreichische Materialqualität. 
                    Egal ob Sie einen <strong className="text-foreground">Funktionsprototyp</strong> für ein neues Produkt, 
                    ein <strong className="text-foreground">Architekturmodell</strong> oder einen 
                    <strong className="text-foreground"> Designprototyp</strong> benötigen – wir fertigen Ihre Teile in 24-48h.
                  </p>
                </div>
              </AnimatedSection>

              {/* Preisvergleich Rapid Prototyping vs Traditionell */}
              <AnimatedSection delay={0.2}>
                <div className="mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Kostenvergleich: Rapid Prototyping vs. Traditionelle Fertigung
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-card rounded-xl overflow-hidden border">
                      <thead className="bg-primary/5">
                        <tr>
                          <th className="p-4 text-left font-bold">Verfahren</th>
                          <th className="p-4 text-left font-bold">Lieferzeit Linz</th>
                          <th className="p-4 text-left font-bold">Kosten (Beispiel)</th>
                          <th className="p-4 text-left font-bold">Werkzeugkosten</th>
                          <th className="p-4 text-left font-bold">Iterationen</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-muted/30">
                          <td className="p-4"><strong className="text-primary">FDM Rapid Prototyping</strong></td>
                          <td className="p-4">24-48h</td>
                          <td className="p-4">€50-300</td>
                          <td className="p-4 text-green-600 font-semibold">€0</td>
                          <td className="p-4">Unbegrenzt</td>
                        </tr>
                        <tr className="hover:bg-muted/30">
                          <td className="p-4">CNC-Fräsen</td>
                          <td className="p-4">1-2 Wochen</td>
                          <td className="p-4">€300-1500</td>
                          <td className="p-4">€200-800</td>
                          <td className="p-4">Limitiert</td>
                        </tr>
                        <tr className="hover:bg-muted/30">
                          <td className="p-4">Spritzguss</td>
                          <td className="p-4">4-8 Wochen</td>
                          <td className="p-4">€2-5 pro Teil*</td>
                          <td className="p-4 text-red-600 font-semibold">€5.000-50.000</td>
                          <td className="p-4">Sehr limitiert</td>
                        </tr>
                        <tr className="hover:bg-muted/30">
                          <td className="p-4">Vakuumguss</td>
                          <td className="p-4">2-3 Wochen</td>
                          <td className="p-4">€150-600</td>
                          <td className="p-4">€800-2000</td>
                          <td className="p-4">Limitiert</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      *Bei Spritzguss werden Werkzeugkosten erst ab ca. 500-1000 Stück amortisiert. 
                      Für <strong className="text-foreground">Prototypen in Linz</strong> ist 3D-Druck daher deutlich wirtschaftlicher.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Materialauswahl für Prototypen */}
              <AnimatedSection delay={0.3}>
                <div className="mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Materialien für Ihre Prototypen in Linz
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                      <div className="text-primary font-bold text-xl mb-2">PLA</div>
                      <div className="text-sm text-muted-foreground mb-3">Biokunststoff</div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Ideal für <strong>Konzeptmodelle</strong>, Designstudien und Präsentationsprototypen. 
                        Nachhaltig, kostengünstig.
                      </p>
                      <div className="text-primary text-sm font-semibold">ab €50</div>
                    </div>
                    
                    <div className="bg-gradient-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                      <div className="text-primary font-bold text-xl mb-2">PETG</div>
                      <div className="text-sm text-muted-foreground mb-3">Technisches Filament</div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Perfekt für <strong>Funktionsprototypen</strong> mit mechanischer Belastung. 
                        Schlagfest, chemikalienbeständig.
                      </p>
                      <div className="text-primary text-sm font-semibold">ab €80</div>
                    </div>
                    
                    <div className="bg-gradient-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                      <div className="text-primary font-bold text-xl mb-2">ABS</div>
                      <div className="text-sm text-muted-foreground mb-3">Industriestandard</div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Für <strong>hitzebeständige Prototypen</strong> bis 85°C. Ideal für 
                        Automotive-Teile, Gehäuse, Halterungen.
                      </p>
                      <div className="text-primary text-sm font-semibold">ab €90</div>
                    </div>
                    
                    <div className="bg-gradient-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                      <div className="text-primary font-bold text-xl mb-2">Nylon</div>
                      <div className="text-sm text-muted-foreground mb-3">High-Performance</div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Maximum an Festigkeit und Flexibilität. Für <strong>finale Validierung</strong> 
                        vor Serienfertigung.
                      </p>
                      <div className="text-primary text-sm font-semibold">ab €150</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <a href="/3d-druck-materialien" className="text-primary hover:underline font-semibold inline-flex items-center gap-2">
                      Alle Materialien im Detail
                      <TrendingUp className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Rapid Prototyping Prozess */}
              <AnimatedSection delay={0.4}>
                <div className="mb-12 bg-muted/30 p-8 rounded-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Ihr Weg zum Prototyp in Linz – In 4 Schritten
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                        1
                      </div>
                      <h4 className="font-bold mb-2">CAD-Upload</h4>
                      <p className="text-sm text-muted-foreground">
                        Laden Sie Ihre STL, STEP oder OBJ-Datei hoch. Keine CAD-Datei? Wir erstellen sie für Sie.
                      </p>
                      <div className="text-xs text-primary mt-2">≈ 5 Minuten</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                        2
                      </div>
                      <h4 className="font-bold mb-2">Angebot erhalten</h4>
                      <p className="text-sm text-muted-foreground">
                        Sofortiges Angebot mit Preis und Lieferzeit. Kostenlose Beratung zur Materialwahl inklusive.
                      </p>
                      <div className="text-xs text-primary mt-2">≈ 2 Stunden</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                        3
                      </div>
                      <h4 className="font-bold mb-2">3D-Druck</h4>
                      <p className="text-sm text-muted-foreground">
                        Professionelle Fertigung mit Qualitätskontrolle. Live-Updates zum Druckfortschritt.
                      </p>
                      <div className="text-xs text-primary mt-2">8-24 Stunden</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                        4
                      </div>
                      <h4 className="font-bold mb-2">Lieferung/Abholung</h4>
                      <p className="text-sm text-muted-foreground">
                        Express-Lieferung nach Linz oder Same-Day Abholung in Gunskirchen (30km).
                      </p>
                      <div className="text-xs text-primary mt-2">24-48 Stunden</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Anwendungsfälle für Linzer Unternehmen */}
              <AnimatedSection delay={0.5}>
                <div className="mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Rapid Prototyping Anwendungen für Linz
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/30 transition-all">
                      <Building2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Produktentwicklung & Start-ups Linz</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Perfekt für die innovative Start-up-Szene in der <strong>Tabakfabrik Linz</strong>, 
                          Tech-Center und Co-Working Spaces. Validieren Sie Ihre Produktidee schnell und kostengünstig:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Consumer Product Prototypen (Gadgets, Haushaltsgeräte)</li>
                          <li>• IoT-Gehäuse und Elektronikgehäuse</li>
                          <li>• Designstudien für Investor-Pitches</li>
                          <li>• MVP (Minimum Viable Product) Entwicklung</li>
                        </ul>
                        <div className="mt-3">
                          <span className="text-primary font-semibold text-sm">Zeitersparnis: 85% vs. traditionelle Fertigung</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/30 transition-all">
                      <Factory className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Industrie & Maschinenbau Linz</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Unterstützung für die starke <strong>Linzer Industrielandschaft</strong>. 
                          Funktionsprototypen für Maschinenbau, Automotive und produzierende Unternehmen:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Maschinenteile und Baugruppen-Prototypen</li>
                          <li>• Vorrichtungen und Betriebsmittel (Jigs & Fixtures)</li>
                          <li>• Gehäuse für Steuerungen und Elektronik</li>
                          <li>• Ersatzteile für Altmaschinen</li>
                        </ul>
                        <div className="mt-3">
                          <span className="text-primary font-semibold text-sm">Kostenreduktion: 70% vs. CNC-Fräsen</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/30 transition-all">
                      <FlaskConical className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Forschung & Universität Linz</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Spezielle Services für <strong>JKU Linz</strong>, <strong>FH Oberösterreich</strong> 
                          und Forschungseinrichtungen in Linz:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Wissenschaftliche Modelle und Anschauungsobjekte</li>
                          <li>• Testaufbauten für Experimente</li>
                          <li>• Forschungsprototypen mit kurzen Iterationszyklen</li>
                          <li>• Anatomische Modelle (Medizintechnik)</li>
                        </ul>
                        <div className="mt-3">
                          <span className="text-primary font-semibold text-sm">Spezialkonditionen für Universitäten</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/30 transition-all">
                      <Palette className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Design & Architektur Linz</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Für kreative Professionals, Architekturbüros und Designer in Linz:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Architekturmodelle und Gebäudemodelle</li>
                          <li>• Designstudien und Formfindung</li>
                          <li>• Präsentationsmodelle für Kunden</li>
                          <li>• Kunstobjekte und Skulpturen</li>
                        </ul>
                        <div className="mt-3">
                          <span className="text-primary font-semibold text-sm">Detailauflösung bis 0,1mm Schichthöhe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* ROI-Beispiel */}
              <AnimatedSection delay={0.6}>
                <div className="bg-gradient-card p-8 rounded-2xl mb-12 border-2 border-primary/20">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Praxis-Beispiel: ROI von Rapid Prototyping in Linz
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-red-600">❌ Ohne Rapid Prototyping</h4>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>CNC-Werkzeugkosten:</span>
                          <span className="font-semibold">€800</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Erster Prototyp (CNC):</span>
                          <span className="font-semibold">€500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>3 Iterationen (je €500):</span>
                          <span className="font-semibold">€1.500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Zeit (4 Wochen):</span>
                          <span className="font-semibold">Opportunitätskosten</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between font-bold text-foreground text-lg">
                          <span>Gesamtkosten:</span>
                          <span className="text-red-600">€2.800+</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-green-600">✓ Mit Rapid Prototyping Linz</h4>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Werkzeugkosten:</span>
                          <span className="font-semibold text-green-600">€0</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Erster Prototyp (FDM):</span>
                          <span className="font-semibold">€150</span>
                        </div>
                        <div className="flex justify-between">
                          <span>3 Iterationen (je €150):</span>
                          <span className="font-semibold">€450</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Zeit (1 Woche):</span>
                          <span className="font-semibold text-green-600">75% schneller</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between font-bold text-foreground text-lg">
                          <span>Gesamtkosten:</span>
                          <span className="text-green-600">€600</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-lg font-bold text-primary">
                      Ersparnis: €2.200 (78%) und 3 Wochen Zeitgewinn
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Reale Zahlen basierend auf einem typischen Linzer Industrieprojekt
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* FAQ für Rapid Prototyping in Linz */}
              <AnimatedSection delay={0.7}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Häufige Fragen zu Rapid Prototyping in Linz
                  </h3>
                  <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left font-semibold">
                        Wie schnell erhalte ich meinen Prototyp in Linz?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Mit unserem <strong>Express-Service</strong> können wir <strong>Prototypen innerhalb von 24-48 Stunden nach Linz liefern</strong>. 
                        Alternativ bieten wir <strong>Same-Day Abholung</strong> in Gunskirchen (nur 30km von Linz) an. 
                        Standard-Lieferungen dauern 3-5 Werktage. Für besonders dringende Projekte sprechen Sie uns auf 
                        Sonderlösungen an – wir haben bereits <strong>Nachtschichten</strong> für wichtige Linzer Projekte eingelegt.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left font-semibold">
                        Was kostet ein 3D-Druck Prototyp für mein Linzer Projekt?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <strong>Einfache Prototypen starten ab €50</strong>. Die genauen Kosten hängen von <strong>Größe, Material, Druckdauer 
                        und Komplexität</strong> ab. Ein typischer Funktionsprototyp (ca. 100cm³ in PETG) kostet etwa €150-250. 
                        Nutzen Sie unseren <a href="/kostenrechner" className="text-primary hover:underline font-semibold">Kostenrechner</a> für 
                        eine sofortige Schätzung oder kontaktieren Sie uns für ein individuelles Angebot. 
                        Für <strong>Linzer Start-ups und Universitäten</strong> bieten wir Sonderkonditionen.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left font-semibold">
                        Welche Materialien eignen sich für Prototypen in Linz?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Die Materialwahl hängt vom Einsatzzweck ab:<br/><br/>
                        • <strong>PLA</strong> (ab €50): Ideal für <strong>Konzeptmodelle, Designstudien</strong> und Präsentationsprototypen. 
                        Biokunststoff, kostengünstig.<br/>
                        • <strong>PETG</strong> (ab €80): Perfekt für <strong>Funktionstests</strong> mit mechanischer Belastung. Schlagfest, chemikalienbeständig.<br/>
                        • <strong>ABS</strong> (ab €90): Für <strong>hitzebeständige Prototypen</strong> bis 85°C. Automotive, Gehäuse.<br/>
                        • <strong>Nylon/PA</strong> (ab €150): Maximum an Festigkeit. Für <strong>finale Validierung</strong> vor Serienfertigung.<br/><br/>
                        Alle Materialien stammen aus <strong>österreichischer Produktion</strong>. Wir beraten Sie kostenlos zur optimalen Materialwahl.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left font-semibold">
                        Kann ich mehrere Iterationen meines Prototyps anfertigen lassen?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Ja, <strong>unbegrenzt</strong>! Das ist der große Vorteil von <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>. 
                        Im Gegensatz zu traditionellen Verfahren (CNC, Spritzguss) gibt es <strong>keine Werkzeugkosten</strong>. 
                        Sie können Ihr Design beliebig oft optimieren und testen. Jede Iteration kann innerhalb von <strong>24-48h nach Linz geliefert</strong> werden. 
                        Viele unserer Linzer Kunden durchlaufen 3-5 Iterationen, bevor sie zur <a href="/serienfertigung" className="text-primary hover:underline font-semibold">Serienfertigung</a> übergehen.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left font-semibold">
                        Benötige ich eine fertige CAD-Datei für meinen Prototyp?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <strong>Idealerweise ja</strong> – wir akzeptieren STL, OBJ, STEP, IGES und weitere Formate. 
                        Falls Sie <strong>keine CAD-Datei haben</strong>, bieten wir mehrere Lösungen:<br/><br/>
                        • <strong>CAD-Erstellung nach Skizze</strong>: Schicken Sie uns Ihre handgezeichnete Skizze oder Fotos – wir erstellen die CAD-Datei.<br/>
                        • <strong>3D-Scanning</strong>: Für Reverse Engineering existierender Teile.<br/>
                        • <strong>Design-Beratung</strong>: Kostenlose Optimierung Ihrer Datei für 3D-Druck (z.B. Wandstärken, Stützstrukturen).<br/><br/>
                        Unser Team in Oberösterreich unterstützt Sie während des gesamten Prozesses.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-left font-semibold">
                        Unterstützen Sie Linzer Start-ups, Universitäten und Forschung?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <strong>Ja, definitiv!</strong> Wir fördern aktiv die <strong>innovative Linzer Szene</strong>:<br/><br/>
                        • <strong>Start-up Konditionen</strong>: Spezielle Preise für Gründer aus der Tabakfabrik, Tech-Center und Inkubatoren.<br/>
                        • <strong>Universitäts-Rabatte</strong>: Sonderkonditionen für JKU Linz, FH Oberösterreich und andere Bildungseinrichtungen.<br/>
                        • <strong>Forschungsprojekte</strong>: Flexible Zahlungsmodalitäten und Mengenrabatte für wissenschaftliche Projekte.<br/>
                        • <strong>Beratung</strong>: Kostenlose technische Beratung für innovative Projekte in Linz.<br/><br/>
                        Kontaktieren Sie uns für maßgeschneiderte Lösungen für Ihr Linzer Projekt.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-left font-semibold">
                        Ist Rapid Prototyping auch für Kleinserien geeignet?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <strong>Ja, perfekt für Kleinserien von 1-100 Stück!</strong> FDM 3D-Druck ist besonders wirtschaftlich 
                        für <strong>Kleinserien</strong>, da keine Werkzeugkosten anfallen. Ideal für:<br/><br/>
                        • <strong>Pre-Launch Serien</strong>: Testen Sie den Markt mit 10-50 Einheiten vor der Großserie.<br/>
                        • <strong>Limitierte Editionen</strong>: Exklusive Produkte ohne Mindestabnahme.<br/>
                        • <strong>Ersatzteile</strong>: On-Demand Produktion nur wenn benötigt.<br/>
                        • <strong>B2B-Speziallösungen</strong>: Individuelle Anpassungen für einzelne Kunden.<br/><br/>
                        Ab ca. 100-500 Stück lohnt sich der Übergang zur <a href="/serienfertigung" className="text-primary hover:underline font-semibold">industriellen Serienfertigung</a>. 
                        Wir beraten Sie gerne zur optimalen Fertigungsstrategie für Ihr Linzer Projekt.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AnimatedSection>

              {/* CTA Section */}
              <AnimatedSection delay={0.8}>
                <div className="mt-12 text-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 rounded-2xl border-2 border-primary/20">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Bereit für Ihren Prototyp in Linz?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Starten Sie jetzt mit Ihrem <strong className="text-foreground">Rapid Prototyping Projekt</strong> in Linz. 
                    Express-Lieferung in 24-48h, ab €50, kostenlose Designberatung inklusive.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Jetzt Prototyp anfragen
                      <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/kostenrechner">Kosten berechnen</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/rapid-prototyping">Zum Rapid Prototyping Guide</a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technology Deep Dive Section - NEW */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Professioneller <span className="text-gradient">FDM 3D-Druck</span> für Linz
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner in Oberösterreich.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <AnimatedSection delay={0.1}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                      bildet die Grundlage unseres Services in Linz. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
                      Material schichtweise aufgetragen, um präzise dreidimensionale Objekte zu erstellen.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> in Oberösterreich setzen wir 
                      auf modernste FDM-Technologie mit Schichtauflösungen bis zu 0,1mm. Diese Präzision ermöglicht die Herstellung 
                      komplexer Geometrien, die mit traditionellen Fertigungsmethoden nur schwer oder gar nicht realisierbar wären.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Ob für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, 
                      <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold"> individuelle Einzelanfertigungen</a> oder 
                      <a href="/serienfertigung" className="text-primary hover:underline font-semibold"> Kleinserien</a> – FDM 3D-Druck 
                      bietet maximale Flexibilität für Ihre Projekte in Linz.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für Linzer Unternehmen</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Kosteneffizienz</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Keine teuren Werkzeuge oder Formen notwendig. Ideal für Prototypen und Kleinserien – 
                            deutlich günstiger als traditionelle Fertigungsverfahren.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Schnelle Iteration</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Von der Idee zum fertigen Prototyp in 24-48 Stunden. Perfekt für agile Entwicklungsprozesse 
                            in Start-ups und Forschungseinrichtungen in Linz.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Designfreiheit</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Komplexe Geometrien, Hinterschneidungen und organische Formen – mit 3D-Druck sind 
                            nahezu keine Grenzen gesetzt.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Nachhaltigkeit</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Materialeffizienz durch additive Fertigung. Wir verwenden ausschließlich hochwertige 
                            Filamente aus österreichischer Produktion – Made in Austria für Linz.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              {/* Industry Stats/Facts */}
              <AnimatedSection delay={0.3}>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">0,1mm</div>
                    <p className="text-sm text-muted-foreground">Minimale Schichtauflösung</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">24h</div>
                    <p className="text-sm text-muted-foreground">Express-Lieferung nach Linz</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Österreichische Materialien</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">350mm³</div>
                    <p className="text-sm text-muted-foreground">Max. Druckvolumen</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Linz-Specific Industry Section - NEW */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  3D-Druck für die <span className="text-gradient">Linzer Wirtschaft</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Linz ist ein bedeutender Industriestandort in Österreich. Als lokaler 3D-Druck Dienstleister 
                  unterstützen wir die innovative Wirtschaft der Landeshauptstadt.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <Factory className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Industrie & Produktion</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Linz ist ein bedeutender Industriestandort in Österreich. 
                      Unser <strong className="text-primary">3D-Druck Service</strong> unterstützt produzierende Unternehmen mit:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Funktionsprototypen für neue Produktentwicklungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Ersatzteile und Komponenten on-demand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Vorrichtungen und Betriebsmittel für die Produktion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kleinserien für Spezialprojekte</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <FlaskConical className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Forschung & Innovation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Als Universitäts- und Forschungsstandort profitiert Linz von innovativen 3D-Druck-Lösungen. 
                      Wir bieten spezialisierte Services für:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Wissenschaftliche Modelle und Anschauungsobjekte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Forschungsprototypen mit kurzen Iterationszyklen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Spezialanfertigungen für Laborausstattung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Bildungsmaterialien für Lehre und Ausbildung</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-12 rounded-2xl border">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Start-up Hotspot</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    Die Start-up-Szene in Österreich wächst rasant. Innovationszentren, Tech-Hubs und Gründer-Initiativen 
                    machen unser Land zum idealen Standort für innovative Unternehmen. Als lokaler 
                    <strong className="text-primary"> 3D-Druck Dienstleister</strong> bieten wir Start-ups besondere Vorteile:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Schnelle Prototypen</h4>
                        <p className="text-sm text-muted-foreground">MVP in 48 Stunden – perfekt für Pitch und Investorengespräche</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Skalierbare Produktion</h4>
                        <p className="text-sm text-muted-foreground">Von Einzelstück bis Kleinserie – wir wachsen mit Ihnen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Persönliche Beratung</h4>
                        <p className="text-sm text-muted-foreground">Wir helfen bei Design-Optimierung und Materialwahl</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Anwendungsbereiche für <span className="text-gradient">3D-Druck in Linz</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der Industrie über Architektur bis zur Forschung – 3D-Druck bietet vielseitige Möglichkeiten 
                  für Unternehmen und Privatpersonen in Linz und Oberösterreich.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Factory className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Industrie & Maschinenbau</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Funktionale Prototypen, Ersatzteile, Vorrichtungen und Betriebsmittel für Linzer Industrieunternehmen. 
                      Optimiert für voestalpine, Engel, Rosenbauer und weitere.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Architektur & Bau</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Architekturmodelle, Designstudien und Präsentationsmodelle für Linzer Architekten und Planer. 
                      Perfekt für Kundenpräsentationen und Wettbewerbe.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Palette className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Design & Kunst</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kunstobjekte, Designprototypen und individuelle Einzelstücke für Linzer Kreativschaffende. 
                      Von der Idee zum fertigen Objekt.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <FlaskConical className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Forschung & Entwicklung</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rapid Prototyping für JKU, FH Oberösterreich, Forschungseinrichtungen und Start-ups in Linz. 
                      Schnelle Iteration für Innovation.
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
                  <span className="text-gradient">Materialien</span> für Ihr Projekt in Linz
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Wir setzen ausschließlich auf hochwertige Filamente aus österreichischer Produktion. 
                  Nachhaltig, qualitativ und perfekt für Ihre Anforderungen.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">PLA</h3>
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold">Bio</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Nachhaltiger Biokunststoff, ideal für Prototypen, Designmodelle und Visualisierungen. 
                      100% biologisch abbaubar.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Umweltfreundlich</span>
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
                      <h3 className="font-bold text-xl">PETG</h3>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">Robust</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Schlagfest und chemikalienbeständig. Perfekt für funktionale Bauteile und Endverbrauchsteile mit hoher Belastung.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Hohe Festigkeit</span>
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
                      <h3 className="font-bold text-xl">ABS</h3>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-semibold">Technisch</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Hitzebeständig bis 100°C. Ideal für technische Anwendungen, Industriekomponenten und Gehäuse.
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
                      <h3 className="font-bold text-xl">PA12 Nylon</h3>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold">Premium</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Höchste Festigkeit und Flexibilität. Für anspruchsvolle mechanische Anwendungen und Sonderanfertigungen.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Extrem belastbar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Flexibel & stark</span>
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
                  So einfach geht <span className="text-gradient">3D-Druck in Linz</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der ersten Anfrage bis zur Lieferung – unser transparenter Prozess macht 3D-Druck einfach und planbar.
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
                          Online-Kostenrechner für eine erste Schätzung. Wir prüfen Ihre Datei auf Druckbarkeit und 
                          optimieren sie bei Bedarf kostenlos.
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
                          Materialempfehlung. Bei komplexen Projekten beraten wir Sie persönlich zur optimalen Umsetzung.
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
                          Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck auf unseren modernsten FDM-Druckern. 
                          Sie werden über den Fortschritt informiert und können bei größeren Projekten Zwischenstände anfordern.
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
                        <h3 className="font-bold text-xl mb-3">Qualitätsprüfung & Lieferung</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Jedes Teil wird sorgfältig geprüft und nachbearbeitet. Express-Versand innerhalb von 24-48h direkt 
                          zu Ihnen nach Linz. Standard-Lieferung österreichweit in 2-3 Werktagen. Tracking-Nummer inklusive.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Sustainability Section - NEW */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Qualität & <span className="text-gradient">Nachhaltigkeit</span> aus Österreich
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck Dienstleister setzen wir auf höchste Qualitätsstandards 
                  und nachhaltige Produktion – für Linz und ganz Oberösterreich.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Qualitätssicherung</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Jedes <strong className="text-primary">3D-gedruckte Teil</strong> durchläuft bei uns eine mehrstufige 
                      Qualitätskontrolle, bevor es zu Ihnen nach Linz geliefert wird:
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
                        <span><strong>Finish-Kontrolle:</strong> Visuelle und dimensionale Prüfung des fertigen Bauteils</span>
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
                      in Linz setzen wir auf ökologische Verantwortung:
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
                        <span><strong>Lokale Produktion:</strong> Fertigung in Oberösterreich reduziert CO₂-Emissionen</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-10 rounded-2xl border">
                  <h3 className="text-2xl font-bold mb-4 text-center">Made in Austria – Für Linz</h3>
                  <p className="text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                    Als österreichischer <strong className="text-primary">3D-Druck Dienstleister</strong> sind wir stolz darauf, 
                    ausschließlich mit Partnern aus Österreich zusammenzuarbeiten. Unsere Filamente stammen von führenden 
                    österreichischen Herstellern, die höchste Qualitätsstandards erfüllen und nachhaltig produzieren. 
                    Diese Partnerschaft garantiert konstante Materialqualität, kurze Lieferwege und die Unterstützung 
                    der heimischen Wirtschaft. Für unsere Kunden in Linz bedeutet das: verlässliche Qualität, 
                    schnelle Verfügbarkeit und ein gutes Gefühl beim Einkauf lokaler Produkte.
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
                  Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in Linz
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren 3D-Druck Service in Linz.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell kann ich mein 3D-Druck-Teil in Linz erhalten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach Linz. Standard-Lieferungen dauern 2-3 Werktage. 
                      Für besonders dringende Projekte können wir auch Same-Day-Delivery innerhalb von Linz anbieten – kontaktieren Sie uns direkt.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Dateiformate werden akzeptiert?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir akzeptieren alle gängigen CAD-Formate: STL, OBJ, STEP, IGES, 3MF und viele mehr. Bei Fragen zu Ihrem Format 
                      kontaktieren Sie uns gerne. Wir können auch aus 2D-Zeichnungen oder Skizzen 3D-Modelle erstellen.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie werden die Kosten für 3D-Druck in Linz berechnet?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren{" "}
                      <a href="/kostenrechner" className="text-primary hover:underline font-semibold">Online-Kostenrechner</a> für eine 
                      sofortige Schätzung. Kleine Teile starten bereits ab €5, größere Projekte nach individuellem Angebot.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Bieten Sie auch Nachbearbeitung an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir bieten professionelle Nachbearbeitung: Schleifen, Lackieren, Grundieren, Glattieren und weitere 
                      Finishing-Optionen für Ihre 3D-gedruckten Teile in Linz. So erhalten Sie produktionsreife Bauteile direkt einsatzbereit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Kann ich mein Teil vor Ort in Linz abholen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Abholung nach Terminvereinbarung ist möglich. Kontaktieren Sie uns, um einen Abholtermin in Oberösterreich zu vereinbaren. 
                      So sparen Sie Versandkosten und erhalten Ihr Teil noch schneller.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Größe können die 3D-Drucke maximal haben?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Unser Druckvolumen beträgt bis zu 350 x 350 x 350 mm. Größere Teile können wir in Segmenten drucken und 
                      anschließend professionell montieren. Kontaktieren Sie uns für spezielle Anforderungen.
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

export default Linz3DDruck;
