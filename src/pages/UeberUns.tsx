import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Printer,
  Leaf,
  Award,
  MapPin,
  Phone,
  Mail,
  Shield,
  Users,
  Zap,
  Clock,
  CheckCircle2,
  Building2,
  Star,
  Package,
} from "lucide-react";

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Über uns – ekdruck e.U. | 3D-Druck Experte aus Gunskirchen, OÖ"
        description="Lernen Sie ekdruck e.U. kennen: WKO-gewerbeberechtigt, 10+ FDM-Drucker, österreichisches Filament. Ihr regionaler 3D-Druck Partner seit 2020 – Angebot in 6h, Express in 24-48h."
        keywords="ekdruck über uns, 3D-Druck Gunskirchen, ekdruck e.U., 3D-Druck Firma Österreich, WKO Gewerbeberechtigung 3D-Druck"
        path="/ueber-uns"
        schemaType="service"
      />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 text-xs font-semibold tracking-wider uppercase">
                Seit 2020 · Gunskirchen, Oberösterreich
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Über <span className="text-gradient">ekdruck e.U.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ihr regionaler 3D-Druck Spezialist für Architekturmodelle, Messemodelle und individuelle Einzelanfertigungen – 
                handwerklich präzise, nachhaltig und zuverlässig aus dem Herzen Oberösterreichs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Kennzahlen */}
        <section className="py-12 border-y border-border/50 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { value: "10+", label: "FDM-Drucker", icon: Printer },
                { value: "2024", label: "Firmengründung", icon: Award },
                { value: "6h", label: "Angebot-Garantie", icon: Zap },
                { value: "100+", label: "Kundenprojekte", icon: Users },
              ].map(({ value, label, icon: Icon }) => (
                <AnimatedSection key={label} animation="fade-in">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">{value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Gründergeschichte */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="slide-up">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge variant="outline" className="mb-4 text-xs">Unsere Geschichte</Badge>
                    <h2 className="text-3xl font-bold mb-6">Von der Idee zum spezialisierten 3D-Druck Betrieb</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        ekdruck e.U. entstand 2020 aus einer einfachen Überzeugung: Hochwertige 3D-gedruckte Modelle 
                        sollten für Architekten, Messe-Aussteller und kreative Köpfe in Österreich zugänglich sein – 
                        ohne lange Wartezeiten, ohne versteckte Kosten.
                      </p>
                      <p>
                        Was als Einzelunternehmen in Gunskirchen, Oberösterreich begann, ist heute ein spezialisierter 
                        FDM-Druckbetrieb mit über 10 Druckern, der Kunden österreichweit und in Deutschland betreut. 
                        Der Fokus liegt auf Anschauungsmodellen – von präzisen Architekturmodellen bis zu 
                        maßgefertigten Messeexponaten.
                      </p>
                      <p>
                        Unser Anspruch: Jedes Projekt bekommt persönliche Betreuung, transparente Preise und 
                        ein verbindliches Angebot innerhalb von 6 Stunden.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { year: "2020", text: "Gründung in Gunskirchen, erste FDM-Drucker in Betrieb" },
                      { year: "2021", text: "Spezialisierung auf Architektur- und Messemodelle" },
                      { year: "2022", text: "Erweiterung auf 5+ Drucker, erste Firmenkunden-Projekte" },
                      { year: "2023", text: "10+ Drucker, Lieferungen nach Deutschland & österreichweit" },
                      { year: "2024", text: "Express-Service 24-48h etabliert, 100+ abgeschlossene Projekte" },
                    ].map(({ year, text }) => (
                      <div key={year} className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="text-primary font-bold text-sm min-w-[40px]">{year}</div>
                        <div className="text-sm text-muted-foreground">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* WKO Gewerbeberechtigung – Trust Signal */}
        <section className="py-16 md:py-20 bg-card/50 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-10">
                <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-wider">
                  <Shield className="w-3 h-3 mr-1" /> Rechtliche Grundlage
                </Badge>
                <h2 className="text-3xl font-bold mb-4">WKO-Gewerbeberechtigung</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  ekdruck e.U. ist ein eingetragenes österreichisches Einzelunternehmen mit offizieller Gewerbeberechtigung.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-background border border-border/60 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Gewerbeberechtigung (WKO)</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Gewerbe:</strong> Erzeugung von Architekturmodellen sowie Modellen 
                        für Gebrauchsgegenstände aller Art, sofern diese lediglich Anschauungszwecken dienen.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Gemäß Gewerbeordnung (GewO) der Wirtschaftskammer Österreich (WKO)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-background border border-border/60 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Unternehmensform</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li><span className="text-foreground font-medium">Firma:</span> ekdruck e.U.</li>
                        <li><span className="text-foreground font-medium">Rechtsform:</span> Einzelunternehmen (e.U.)</li>
                        <li><span className="text-foreground font-medium">Land:</span> Österreich</li>
                        <li><span className="text-foreground font-medium">Kammer:</span> WKO Oberösterreich</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maschinenpark */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="slide-up" className="text-center mb-12">
                <Badge variant="outline" className="mb-4 text-xs">Technik & Kapazität</Badge>
                <h2 className="text-3xl font-bold mb-4">Unser Maschinenpark</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Über 10 professionelle FDM-Drucker garantieren kurze Lieferzeiten und 
                  parallele Produktion auch bei größeren Aufträgen.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    icon: Printer,
                    title: "10+ FDM-Drucker",
                    description: "Professionelle FDM-Drucker für Serienproduktion und Einzelstücke. Parallelbetrieb ermöglicht Express-Lieferung in 24-48h.",
                  },
                  {
                    icon: Package,
                    title: "Großes Bauvolumen",
                    description: "Druckbetten bis 350×350mm ermöglichen großformatige Modelle ohne Teilung. Ideal für Architektur- und Messemodelle.",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Produktionskapazität",
                    description: "Automatisierter Druckbetrieb rund um die Uhr sichert kurze Durchlaufzeiten und zuverlässige Termintreue.",
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>

              {/* Materialien */}
              <AnimatedSection animation="fade-in">
                <div className="p-6 rounded-2xl bg-card border border-border/60">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    Verarbeitete Materialien
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { material: "PLA", note: "Standardmaterial, biologisch abbaubar" },
                      { material: "PETG", note: "Lebensmittelecht, flexibel" },
                      { material: "ASA", note: "UV-beständig, Außeneinsatz" },
                      { material: "TPU", note: "Flexibel, stoßdämpfend" },
                      { material: "PLA Silk", note: "Seidiger Glanz, Dekor" },
                      { material: "Wood-Fill PLA", note: "Holzoptik für Dekoration" },
                      { material: "Marble PLA", note: "Marmor-Optik" },
                      { material: "Metal-Fill", note: "Metallic-Optik, Gewicht" },
                    ].map(({ material, note }) => (
                      <div key={material} className="flex flex-col gap-0.5 p-3 rounded-lg bg-background border border-border/40">
                        <span className="font-semibold text-sm text-primary">{material}</span>
                        <span className="text-xs text-muted-foreground">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Nachhaltigkeit */}
        <section className="py-16 md:py-20 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="slide-up">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-wider">
                      <Leaf className="w-3 h-3 mr-1" /> Nachhaltigkeit
                    </Badge>
                    <h2 className="text-3xl font-bold mb-5">Regional & nachhaltig produziert</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Nachhaltigkeit ist kein Marketingbegriff für uns – es ist eine bewusste Entscheidung, 
                      die sich durch alle Produktionsschritte zieht.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Österreichisches PLA-Filament aus regionaler Produktion",
                        "PLA ist biologisch abbaubar und auf Maisstärkebasis",
                        "Kurze Transportwege durch lokale Fertigung in OÖ",
                        "Kein Overproduktion: Auf-Bestellung-Produktion minimiert Verschwendung",
                        "Materialreste werden sortenrein recycelt",
                        "Energieeffiziente Produktion durch moderne Drucktechnologie",
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Leaf, label: "Bio-PLA", sublabel: "Österreichisches Filament" },
                      { icon: MapPin, label: "Regional", sublabel: "Produktion in OÖ" },
                      { icon: Package, label: "Zero-Waste", sublabel: "Auf-Bestellung-Fertigung" },
                      { icon: Zap, label: "Energieeffizient", sublabel: "Moderne FDM-Technologie" },
                    ].map(({ icon: Icon, label, sublabel }) => (
                      <div key={label} className="p-5 rounded-2xl bg-background border border-primary/20 text-center">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="font-semibold text-sm">{label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{sublabel}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* E-E-A-T: Expertise & Vertrauen */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-12">
                <Badge variant="outline" className="mb-4 text-xs">Warum ekdruck</Badge>
                <h2 className="text-3xl font-bold mb-4">Expertise & Vertrauen</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    icon: Star,
                    title: "5-Sterne Bewertungen",
                    description: "Über 21 verifizierte Google-Bewertungen von echten Kunden. Transparenz und Qualität stehen für uns an erster Stelle.",
                  },
                  {
                    icon: Zap,
                    title: "Angebot in 6 Stunden",
                    description: "Verbindliche Angebote innerhalb von 6 Stunden nach Anfrage – kein wochenlanges Warten, kein Preisrätselraten.",
                  },
                  {
                    icon: Award,
                    title: "Spezialisierung statt Masse",
                    description: "Kein allgemeiner 3D-Druck-Shop – wir sind Experten für Anschauungsmodelle, Architektur- und Messemodelle.",
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>

              {/* NAP Daten – strukturiert für Local SEO */}
              <AnimatedSection animation="fade-in">
                <div className="p-8 rounded-2xl bg-card border border-border/60" itemScope itemType="https://schema.org/LocalBusiness">
                  <h3 className="font-semibold mb-6 text-lg" itemProp="name">ekdruck e.U. – Kontakt & Standort</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Adresse</div>
                        <address className="not-italic text-sm text-foreground leading-relaxed" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                          <span itemProp="streetAddress">Negrellistraße 15</span><br />
                          <span itemProp="postalCode">4623</span> <span itemProp="addressLocality">Gunskirchen</span><br />
                          <span itemProp="addressRegion">Oberösterreich</span>, <span itemProp="addressCountry">Österreich</span>
                        </address>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Telefon</div>
                        <a href="tel:+436765517197" className="text-sm font-medium hover:text-primary transition-colors" itemProp="telephone">
                          +43 676 5517197
                        </a>
                        <div className="text-xs text-muted-foreground mt-1">Mo–Fr, 8:00–18:00 Uhr</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">E-Mail</div>
                        <a href="mailto:office@ek-druck.at" className="text-sm font-medium hover:text-primary transition-colors" itemProp="email">
                          office@ek-druck.at
                        </a>
                        <div className="text-xs text-muted-foreground mt-1">Angebot in 6 Stunden</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection animation="fade-in" className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Bereit für Ihr Projekt?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Schildern Sie uns Ihr Vorhaben – wir melden uns innerhalb von 6 Stunden mit einem verbindlichen Angebot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/kontakt">Kostenloses Angebot anfordern</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/referenzen">Unsere Referenzen ansehen</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default UeberUns;
