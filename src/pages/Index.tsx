import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import StickyCTA from "@/components/landing/StickyCTA";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
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
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Building2, Presentation, Users,
  Check, X, Clock, Repeat2, Layers,
  TrendingDown, ArrowRight, Zap, Leaf, Star,
  ChevronRight, Phone, MessageSquare,
  Shield, Award, Paintbrush, ScanLine, Ruler,
  FlaskConical, Wrench, Calculator, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return <>
    <SEOHead
      title="3D-Druck Service Österreich ★ ab €20 | Express 24h | ekdruck.at"
      description="3D-Druck Österreich ✓ 5.0/5 Google (31 Bewertungen) ✓ Messemodelle, Architekturmodelle & Prototypen ab €20 ✓ Express 24h ✓ Angebot in 6h ✓ FDM aus Gunskirchen → Jetzt anfragen"
      keywords="3d druck österreich, 3d-druck service, messemodelle 3d-druck, architekturmodelle 3d-druck, 3d druck prototypen, 3d druck oberösterreich, 3d-druck dienstleister, fdm 3d-druck, 3d druck kosten, 3d druck express"
      path="/"
    />
    <OrganizationSchema />
    <StructuredData type="organization" />
    <StructuredData type="service" />
    <AggregateRatingSchema ratingValue={5.0} ratingCount={31} bestRating={5} worstRating={5} />
    <FAQSchema faqs={[
      { question: "Was kostet 3D-Druck bei ekdruck?", answer: "Ab €20 pro Modell. Der Preis hängt von Material, Volumen und Qualitätsstufe ab. Festpreisangebot in unter 6 Stunden." },
      { question: "Wie schnell erhalte ich mein 3D-Modell?", answer: "Standard: 3–5 Werktage. Express: 24–48 Stunden. Versandkostenfrei ab €100." },
      { question: "Welche Dateiformate werden akzeptiert?", answer: "STL, OBJ, STEP, 3MF, ArchiCAD, Revit, SolidWorks. Keine Datei? Wir modellieren kostenlos nach Skizze." },
      { question: "Für welche Branchen eignet sich ekdruck?", answer: "Architekten, Messeaussteller, Produktentwickler und Firmenkunden mit B2B-Konditionen." },
      { question: "Warum österreichisches Filament?", answer: "Recycelte Industrieabfälle, Ökostrom, 80% weniger CO₂. Extrusionstoleranz ±0,02 mm." },
      { question: "Welche Nachbearbeitungs-Optionen gibt es?", answer: "Schleifen, Grundierung, Lackierung RAL/Pantone, Aceton-Dampfglättung, Segmentierung." },
    ]} />
    <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* ══════════════════════════════════════════════════════
          MARQUEE TRUST BAR — full-width dark strip
         ══════════════════════════════════════════════════════ */}
      <section className="py-6 bg-foreground border-b border-background/10" aria-label="Vertrauenssignale">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              { icon: Star, text: "5,0 / 5,0 (31 Reviews)", highlight: true },
              { icon: Zap, text: "Express 24h" },
              { icon: Clock, text: "Angebot in 6h" },
              { icon: MapPin, text: "Made in Austria" },
              { icon: Leaf, text: "Nachhaltiges Filament" },
            ].map(({ icon: Icon, text, highlight }) => (
              <div key={text} className="flex items-center gap-2 text-xs font-semibold">
                <Icon className={`w-4 h-4 ${highlight ? "text-amber-400" : "text-primary"}`} />
                <span className="text-background/70">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LEISTUNGEN — Magazine-style alternating layout
         ══════════════════════════════════════════════════════ */}
      <section id="leistungen" className="py-32 bg-background relative" aria-label="3D-Druck Leistungen">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="max-w-6xl mx-auto mb-20">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Unsere Leistungen</p>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.0] tracking-[-0.04em]">
              Was wir für<br />Sie drucken<span className="text-primary">.</span>
            </h2>
          </AnimatedSection>

          {/* Service 1: Architekturmodelle - full-width split */}
          <AnimatedSection animation="slide-up" className="max-w-6xl mx-auto mb-6">
            <Link to="/architekturmodelle" className="group block">
              <div className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 group-hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary/[0.06] via-muted/40 to-muted/20 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-8 right-8 w-[200px] h-[200px] rounded-full border border-primary/10 pointer-events-none" />
                  <div className="absolute bottom-8 left-8 w-[120px] h-[120px] rounded-full bg-primary/[0.04] blur-[40px] pointer-events-none" />
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs font-bold bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-3 py-1 rounded-full">Express 24h</span>
                      <span className="text-xs font-bold glass px-3 py-1 rounded-full">ab €20</span>
                    </div>
                  </div>
                </div>
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                    Architektur­modelle
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Maßstabsgetreue 3D-gedruckte Modelle 1:50 bis 1:500 für Wettbewerbe, Baueinreichungen und Kundenpräsentationen. Kompatibel mit ArchiCAD, Revit & SolidWorks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["1:50–1:500", "CAD-Import", "Wettbewerbsmodelle"].map(t =>
                      <span key={t} className="text-xs bg-primary/6 text-primary px-3 py-1.5 rounded-full font-medium">{t}</span>
                    )}
                  </div>
                  <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                    Architekturmodelle entdecken <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Service 2+3: Side by side */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6">
            <AnimatedSection animation="slide-up" delay={100}>
              <Link to="/messemodelle" className="group block h-full">
                <div className="h-full rounded-[2rem] bg-gradient-to-br from-primary via-primary to-primary-glow p-10 md:p-12 text-primary-foreground relative overflow-hidden
                  hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)] transition-all duration-500 group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Presentation className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold bg-white/15 border border-white/20 px-3 py-1 rounded-full inline-block mb-4">ab €30</span>
                    <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">Messemodelle & Exponate</h3>
                    <p className="text-primary-foreground/70 leading-relaxed mb-6 text-sm">
                      Express-Fertigung für Wien, München, Hannover. Angebot heute – Modell morgen. Bis 2m+.
                    </p>
                    <span className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all">
                      Messemodelle <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <Link to="/einzelanfertigungen" className="group block h-full">
                <div className="h-full rounded-[2rem] bg-foreground p-10 md:p-12 relative overflow-hidden
                  hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.4)] transition-all duration-500 group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-primary/10 pointer-events-none" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-bold bg-primary/20 text-primary border border-primary/20 px-3 py-1 rounded-full inline-block mb-4">ab 1 Stück</span>
                    <h3 className="text-2xl md:text-3xl font-black text-background mb-3 tracking-tight">Einzelanfertigungen & Unikate</h3>
                    <p className="text-background/60 leading-relaxed mb-6 text-sm">
                      Maßgefertigt nach Ihren Vorgaben – aus Skizzen, Fotos oder CAD. Keine Mindestmenge.
                    </p>
                    <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                      Einzelanfertigungen <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>

          {/* Quick service links - pill row */}
          <AnimatedSection animation="fade-in" delay={250} className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {[
                { to: "/firmenkunden", icon: Users, label: "Firmenkunden & B2B" },
                { to: "/rapid-prototyping", icon: Zap, label: "Rapid Prototyping" },
                { to: "/fdm-3d-druck", icon: Award, label: "FDM Technologie" },
                { to: "/3d-druck-materialien", icon: Layers, label: "Materialien" },
                { to: "/kostenrechner", icon: Calculator, label: "Kostenrechner" },
              ].map(({ to, icon: Icon, label }) =>
                <Link key={to} to={to}
                  className="group flex items-center gap-2 bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 text-sm font-medium">
                  <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="group-hover:text-primary transition-colors">{label}</span>
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          KOSTENRECHNER CTA — editorial highlight
         ══════════════════════════════════════════════════════ */}
      <section className="py-0 relative" aria-label="3D-Druck Kostenrechner">
        <AnimatedSection animation="fade-in">
          <Link to="/kostenrechner" className="group block">
            <div className="bg-muted/50 border-y border-border/50 hover:bg-muted/70 transition-all duration-500">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto py-14 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-black text-2xl md:text-3xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                      Was kostet Ihr 3D-Modell?
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      STL hochladen → Material wählen → Richtpreis erhalten. Kostenlos und unverbindlich.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all shrink-0">
                    Kostenrechner öffnen <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 SCHRITTE — dark section
         ══════════════════════════════════════════════════════ */}
      <ThreeStepProcess />

      {/* ══════════════════════════════════════════════════════
          ZIELGRUPPEN — Horizontal cards
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-background relative" aria-label="Zielgruppen">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Ihre Branche</p>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.0] tracking-[-0.04em]">
                Für wen ist ekdruck<br />
                die richtige Wahl<span className="text-primary">?</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: Building2, title: "Architekten & Planer",
                  headline: "Wettbewerbsmodell in 24h statt 3 Wochen",
                  desc: "Maßstabsgetreue Modelle 1:50–1:500. ArchiCAD, Revit & SolidWorks kompatibel.",
                  link: "/architekturmodelle", tags: ["1:50–1:500", "CAD-Import", "Express"],
                },
                {
                  icon: Presentation, title: "Messeaussteller",
                  headline: "3 Tage vor der Messe? Kein Problem.",
                  desc: "Express 24–48h österreichweit. Modelle & Exponate bis 2m+.",
                  link: "/messemodelle", tags: ["Express 24h", "Bis 2m+"],
                },
                {
                  icon: FlaskConical, title: "Produktentwickler",
                  headline: "Prototyp morgen, nicht in 3 Wochen",
                  desc: "Rapid Prototyping ab €20. Keine Mindestmenge.",
                  link: "/rapid-prototyping", tags: ["Ab €20", "Iterationen"],
                },
                {
                  icon: Users, title: "Firmenkunden & B2B",
                  headline: "UID-Rechnung, NDA, Mengenrabatt",
                  desc: "Professionelle B2B-Konditionen ab 5 Stück.",
                  link: "/firmenkunden", tags: ["UID", "NDA", "Rabatte"],
                },
              ].map(({ icon: Icon, title, headline, desc, link, tags }, i) =>
                <AnimatedSection key={title} animation="slide-up" delay={i * 80}>
                  <Link to={link} className="group block h-full">
                    <div className="h-full rounded-[1.5rem] bg-card border border-border/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/20">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{title}</p>
                          <h3 className="font-black text-lg leading-tight mb-2 tracking-tight group-hover:text-primary transition-colors">{headline}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {tags.map(t => <span key={t} className="text-xs bg-primary/6 text-primary px-2.5 py-1 rounded-full font-medium">{t}</span>)}
                          </div>
                          <span className="flex items-center gap-1.5 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                            Mehr erfahren <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          REFERENZEN
         ══════════════════════════════════════════════════════ */}
      <ReferencesTeaser />

      {/* ══════════════════════════════════════════════════════
          WARUM EKDRUCK — Big stat + comparison
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-background relative" aria-label="Vorteile 3D-Druck">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Big stat headline */}
            <AnimatedSection animation="fade-in" className="mb-20">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Warum ekdruck?</p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { val: "95%", label: "günstiger als Handmodellbau" },
                  { val: "24h", label: "Express österreichweit" },
                  { val: "0,1mm", label: "Schichtauflösung" },
                ].map(({ val, label }) =>
                  <div key={val} className="text-center md:text-left">
                    <p className="text-6xl md:text-7xl font-black text-primary leading-none tracking-tighter">{val}</p>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>
                  </div>
                )}
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em]">
                3D-Druck schlägt traditionellen Modellbau<span className="text-primary">.</span>
              </h2>
            </AnimatedSection>

            {/* Advantages */}
            <AnimatedSection animation="slide-up" delay={100} className="grid md:grid-cols-2 gap-4 mb-16">
              {[
                { icon: TrendingDown, title: "Keine Werkzeugkosten", desc: "Spritzguss ab €10.000. Bei ekdruck ab €20.", accent: false },
                { icon: Clock, title: "10x schneller", desc: "Handmodellbau: 1–4 Wochen. ekdruck Express: 24h.", accent: true },
                { icon: Repeat2, title: "Digital reproduzierbar", desc: "Jede Kopie identisch. Korrekturen = Dateiänderung.", accent: false },
                { icon: Leaf, title: "Nachhaltig aus Österreich", desc: "Filament aus Industrieabfällen, 80% weniger CO₂.", accent: false },
              ].map(({ icon: Icon, title, desc, accent }) =>
                <div key={title} className={`flex gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5
                  ${accent ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/25" : "bg-card border border-border/50 hover:shadow-card-hover hover:border-primary/20"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${accent ? "bg-white/15" : "bg-primary/10"}`}>
                    <Icon className={`w-5 h-5 ${accent ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm mb-1 tracking-tight ${accent ? "" : ""}`}>{title}</p>
                    <p className={`text-sm leading-relaxed ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{desc}</p>
                  </div>
                </div>
              )}
            </AnimatedSection>

            {/* Comparison table */}
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="rounded-[1.5rem] overflow-hidden bg-card border border-border/50 shadow-card">
                <div className="grid grid-cols-3 bg-foreground">
                  <div className="p-5 text-sm font-semibold text-background/50">Kriterium</div>
                  <div className="p-5 font-bold text-primary flex items-center justify-center gap-2 text-sm border-x border-background/10">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> ekdruck
                  </div>
                  <div className="p-5 text-background/50 text-sm font-semibold text-center">Traditionell</div>
                </div>
                {[
                  { label: "Kosten", good: "ab €20", bad: "€200–€10.000+" },
                  { label: "Lieferzeit", good: "24h Express", bad: "1–4 Wochen" },
                  { label: "Geometrien", good: "Unbegrenzt", bad: "Stark limitiert" },
                  { label: "Reproduzierbarkeit", good: "1:1 identisch", bad: "Variiert" },
                ].map(({ label, good, bad }) =>
                  <div key={label} className="grid grid-cols-3 border-t border-border/50 hover:bg-muted/30 transition-colors">
                    <div className="p-5 font-medium text-sm">{label}</div>
                    <div className="p-5 text-center border-x border-border/30 bg-primary/[0.02]">
                      <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                        <Check className="w-4 h-4" />{good}
                      </span>
                    </div>
                    <div className="p-5 text-center">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                        <X className="w-4 h-4 text-destructive/50" />{bad}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MATERIALIEN
         ══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-muted/30 relative" aria-label="3D-Druck Materialien">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <div className="grid md:grid-cols-2 gap-12 items-end">
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Materialien</p>
                  <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em]">
                    FDM-Präzision,<br />
                    <span className="text-primary">made in Austria.</span>
                  </h2>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Ausschließlich österreichische Filamente aus recycelten Industrieabfällen. Ökostrom-Produktion, 80% weniger CO₂.
                  </p>
                  <Link to="/3d-druck-materialien" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                    Alle Materialien <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "PLA", badge: "Bestseller", primary: true, desc: "Biologisch abbaubar. Ideal für Architektur & Präsentation.", props: ["Biologisch abbaubar", "0,1 mm Auflösung", "20+ Farben"] },
                { name: "PETG", badge: "Outdoor", primary: false, desc: "UV-beständig und langlebig – für Außen-Exponate.", props: ["UV-beständig", "80°C beständig", "Schlagfest"] },
                { name: "ABS", badge: "Robust", primary: false, desc: "Industriestandard. Schleifbar und lackierbar.", props: ["100°C beständig", "Lackierbar", "Schleifbar"] },
                { name: "TPU", badge: "Flexibel", primary: false, desc: "Elastisch für spezielle Anwendungen.", props: ["Shore 95A", "500% dehnbar", "Abriebfest"] },
              ].map(({ name, badge, primary, desc, props }) =>
                <div key={name} className="rounded-2xl bg-card border border-border/50 p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-black tracking-tight">{name}</p>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${primary ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="space-y-1.5">
                    {props.map(p =>
                      <div key={p} className="flex items-center gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{p}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GOOGLE BEWERTUNGEN
         ══════════════════════════════════════════════════════ */}
      <GoogleReviewsSection />

      {/* ══════════════════════════════════════════════════════
          FAQ — Editorial split
         ══════════════════════════════════════════════════════ */}
      <section id="faq" className="py-28 bg-background relative" aria-label="Häufige Fragen zum 3D-Druck">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-in">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">FAQ</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em] mb-5">
                  Häufige Fragen<br />zum 3D-Druck<span className="text-primary">.</span>
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Nicht gefunden? Rufen Sie uns an.
                </p>
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Ratgeber</p>
                  {[
                    { to: "/ratgeber/kosten-guide", label: "Kosten & Preise" },
                    { to: "/ratgeber/material-guide", label: "Materialien" },
                    { to: "/ratgeber/architekturmodell-guide", label: "Architekturmodell" },
                    { to: "/ratgeber/messemodell-guide", label: "Messemodell" },
                    { to: "/ratgeber/verfahrens-vergleich", label: "3D-Druck vs. Modellbau" },
                  ].map(({ to, label }) =>
                    <Link key={to} to={to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" /> {label}
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-3">
              <AnimatedSection animation="slide-up" delay={100}>
                <Accordion type="single" collapsible className="space-y-2.5">
                  {[
                    { q: "Was kostet 3D-Druck bei ekdruck?", a: "Ab €20 pro Modell. Preis hängt von Material, Volumen und Qualitätsstufe ab. Festpreis in unter 6h.", link: { to: "/ratgeber/kosten-guide", text: "Preis-Ratgeber →" } },
                    { q: "Wie schnell bekomme ich mein Modell?", a: "Standard: 3–5 Werktage (versandkostenfrei ab €100). Express: 24–48h.", link: null },
                    { q: "Welche Dateiformate?", a: "STL, OBJ, STEP, 3MF, ArchiCAD, Revit, SolidWorks, Rhino, Fusion 360. Oder wir modellieren nach Skizze – kostenlos.", link: null },
                    { q: "Für welche Branchen?", a: "Architekten (1:50–1:500), Messeaussteller (Express 24h), Produktentwickler, Firmenkunden (UID, NDA, Rabatte).", link: null },
                    { q: "Welche Nachbearbeitung?", a: "Schleifen, Grundierung, Lackierung RAL/Pantone, Aceton-Dampfglättung, Segmentierung. Manuelle QA.", link: null },
                    { q: "Warum österreichisches Filament?", a: "Recycelte Industrieabfälle, Ökostrom. 80% weniger CO₂. Toleranz ±0,02 mm.", link: { to: "/ratgeber/material-guide", text: "Material-Guide →" } },
                  ].map((item, i) =>
                    <AccordionItem key={i} value={`faq-${i}`}
                      className="bg-card border border-border/50 rounded-2xl px-6 hover:border-primary/20 transition-all data-[state=open]:shadow-card data-[state=open]:border-primary/20">
                      <AccordionTrigger className="text-left font-bold hover:text-primary py-5 text-sm tracking-tight">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                        {item.a}{item.link && <> <Link to={item.link.to} className="text-primary font-bold hover:underline ml-1">{item.link.text}</Link></>}
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRUST
         ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-muted/30" aria-label="Vertrauen">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          REGIONALE LINKS
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background relative" aria-label="3D-Druck Standorte">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection animation="fade-in" className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] mb-3">
              3D-Druck für <span className="text-primary">ganz Österreich & Deutschland</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Standort Gunskirchen (OÖ) – Express österreichweit 24–48h, Deutschland 2–4 Tage.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "🏙️ Städte", links: [
                { n: "Wien", u: "/3d-druck-wien" }, { n: "Linz", u: "/3d-druck-linz" }, { n: "Graz", u: "/3d-druck-graz" },
                { n: "Salzburg", u: "/3d-druck-salzburg" }, { n: "Innsbruck", u: "/3d-druck-innsbruck" }, { n: "Klagenfurt", u: "/3d-druck-klagenfurt" },
                { n: "Wels", u: "/3d-druck-wels" }, { n: "St. Pölten", u: "/3d-druck-st-poelten" },
              ]},
              { title: "🇦🇹 Bundesländer", links: [
                { n: "Oberösterreich", u: "/3d-druck-oberoesterreich" }, { n: "Niederösterreich", u: "/3d-druck-niederoesterreich" },
                { n: "Steiermark", u: "/3d-druck-steiermark" }, { n: "Kärnten", u: "/3d-druck-kaernten" },
                { n: "Vorarlberg", u: "/3d-druck-vorarlberg" }, { n: "Burgenland", u: "/3d-druck-burgenland" },
              ]},
              { title: "🇩🇪 Deutschland", links: [
                { n: "München", u: "/messemodelle/muenchen" }, { n: "Stuttgart", u: "/messemodelle/stuttgart" },
                { n: "Nürnberg", u: "/messemodelle/nuernberg" }, { n: "Passau", u: "/messemodelle/passau" },
              ]},
            ].map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {links.map(({ n, u }) =>
                    <Link key={u} to={u} onClick={() => window.scrollTo(0, 0)}
                      className="bg-card border border-border/50 hover:border-primary/30 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-all duration-200 font-medium hover:-translate-y-0.5">
                      {n}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINALER CTA — Dark cinematic
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-foreground relative overflow-hidden" aria-label="Jetzt anfragen">
        {/* Geometric decoration */}
        <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full border border-primary/10 pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-[250px] h-[250px] rounded-full bg-primary/[0.04] blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="scale-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-bold mb-10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Kostenlos & unverbindlich
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-background leading-[0.95] tracking-[-0.04em] mb-6">
                Bereit für Ihr<br />nächstes Modell<span className="text-primary">?</span>
              </h2>
              <p className="text-background/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Angebot in 6 Stunden. Direkte Ansprechperson aus Gunskirchen. Kein Callcenter.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <Button asChild size="lg" variant="cta" className="group rounded-2xl px-12 py-7 text-base shadow-[0_8px_40px_hsl(var(--primary)/0.4)]">
                  <Link to="/kontakt">
                    Kostenloses Angebot
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="rounded-2xl px-8 py-7 text-base bg-background/10 border border-background/20 text-background hover:bg-background/20 font-semibold">
                  <Link to="/kostenrechner">
                    <Calculator className="mr-2 w-4 h-4" /> Preis berechnen
                  </Link>
                </Button>
              </div>
              <p className="text-background/30 text-xs">
                ✓ Keine Mindestbestellung · ✓ Express 24h · ✓ Made in Austria
              </p>

              {/* Stats row */}
              <div className="flex items-center justify-center gap-10 mt-14 pt-10 border-t border-background/10">
                {[
                  { val: "31", label: "Google Reviews" },
                  { val: "6h", label: "Angebots-Garantie" },
                  { val: "24h", label: "Express" },
                  { val: "€20", label: "ab Preis" },
                ].map(({ val, label }) =>
                  <div key={label} className="text-center">
                    <p className="text-3xl font-black text-primary leading-none tracking-tight">{val}</p>
                    <p className="text-[11px] text-background/40 mt-1.5 font-semibold uppercase tracking-wider">{label}</p>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </div>
  </>;
};

export default Index;
