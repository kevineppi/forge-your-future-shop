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
  Check, X, MapPin, Clock, Repeat2, Layers,
  TrendingDown, ArrowRight, Zap, Leaf, Star,
  ChevronRight, Package, Phone, MessageSquare,
  Shield, Award, Paintbrush, ScanLine, Ruler,
  FlaskConical, Wrench, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return <>
    <SEOHead
      title="3D-Druck Service Österreich ★ ab €20 | Express 24h | ekdruck.at"
      description="3D-Druck Österreich ✓ 5.0/5 Google (31 Bewertungen) ✓ Messemodelle, Architekturmodelle & Prototypen ab €20 ✓ Express 24h ✓ Angebot in 6h ✓ FDM-Druck aus Gunskirchen → Jetzt anfragen"
      keywords="3d druck österreich, 3d-druck service, messemodelle 3d-druck, architekturmodelle 3d-druck, 3d druck prototypen, 3d druck oberösterreich, 3d-druck dienstleister, fdm 3d-druck, 3d druck kosten, 3d druck express"
      path="/"
      preloadResources={[{
        href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
        as: "image",
        type: "image/png"
      }]} />
    
    <OrganizationSchema />
    <StructuredData type="organization" />
    <StructuredData type="service" />
    <AggregateRatingSchema ratingValue={5.0} ratingCount={31} bestRating={5} worstRating={5} />
    <FAQSchema faqs={[
      { question: "Was kostet 3D-Druck bei ekdruck?", answer: "Unsere Preise beginnen ab €20 pro Modell – abhängig von Material (PLA, PETG, ABS oder TPU), Druckvolumen und Qualitätsstufe (Standard 0,2 mm, Fine 0,15 mm, Ultra Fine 0,1 mm). Mengenrabatte ab 5 Einheiten. Ein transparentes Festpreisangebot erhalten Sie in unter 6 Stunden." },
      { question: "Wie schnell erhalte ich mein 3D-gedrucktes Modell?", answer: "Standard: 3–5 Werktage österreichweit, versandkostenfrei ab €100. Express-Service: 24–48 Stunden – ideal für kurzfristige Messetermine oder Wettbewerbsabgaben." },
      { question: "Welche Dateiformate werden für 3D-Druck akzeptiert?", answer: "Alle gängigen 3D-Formate: STL, OBJ, STEP, IGES, 3MF sowie ArchiCAD, Revit, SolidWorks, Rhino und Fusion 360. Keine CAD-Datei? Wir erstellen das 3D-Modell kostenlos nach Skizzen, Fotos oder technischen Zeichnungen." },
      { question: "Für welche Branchen eignet sich ekdruck?", answer: "ekdruck ist spezialisiert auf: Architekten (Modelle 1:50–1:500), Messeaussteller (Express 24–48h), Produktentwickler (Rapid Prototyping, keine Mindestmenge) und Firmenkunden (UID-Rechnung, NDA, Mengenrabatte)." },
      { question: "Warum österreichisches Filament?", answer: "Österreichische Filamente aus recycelten Industrieabfällen, mit Ökostrom gefertigt. CO₂-Fußabdruck bis zu 80% geringer als Importware. Extrusionstoleranz ±0,02 mm für konsistente Druckergebnisse." },
      { question: "Welche Nachbearbeitungs-Optionen gibt es?", answer: "Schleifen und Glätten, Grundierung, Lackierung in RAL/Pantone, Aceton-Dampfglättung für ABS, Segmentierung und Klebeverbindungen. Manuelle Qualitätsprüfung vor jedem Versand." }
    ]} />
    <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <section className="py-8 bg-muted/30 border-y border-border/30" aria-label="Vertrauenssignale">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}</div>
              <span className="font-bold text-foreground">5,0</span>
              <span className="text-xs">(31 Google Bewertungen)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <Zap className="w-4 h-4 text-primary" /> Express in 24h
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <Clock className="w-4 h-4 text-primary" /> Angebot in 6h
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <MapPin className="w-4 h-4 text-primary" /> Made in Austria
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <Leaf className="w-4 h-4 text-primary" /> Nachhaltiges Filament
            </div>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN — PREMIUM BENTO GRID ──────────────────── */}
      <section id="leistungen" className="py-28 bg-background relative overflow-hidden" aria-label="3D-Druck Leistungen">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-in" className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Unsere Leistungen</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.0] tracking-[-0.03em]">
                  Professioneller 3D-Druck<br />
                  <span className="text-gradient">für Ihre Branche</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed lg:text-right text-sm">
                Messemodelle, Architekturmodelle und Einzelanfertigungen – ab €20, Express in 24h.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-5 max-w-6xl mx-auto mb-6">
            {/* LARGE: Architekturmodelle */}
            <AnimatedSection animation="slide-up" delay={0} className="lg:col-span-3">
              <Link to="/architekturmodelle" className="group block h-full min-h-[380px]">
                <div className="h-full relative rounded-[2rem] bg-card overflow-hidden shadow-card
                  hover:shadow-card-hover transition-all duration-500 flex flex-col group-hover:-translate-y-1.5 gradient-border">
                  <div className="relative h-44 bg-gradient-to-br from-muted/60 to-muted/30 overflow-hidden flex items-center justify-center">
                    <div className="w-20 h-20 rounded-3xl glass-strong flex items-center justify-center
                      group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                    <span className="absolute top-4 right-4 text-xs font-bold glass-strong px-3 py-1.5 rounded-full shadow-sm">ab €20</span>
                    <span className="absolute top-4 left-4 text-xs font-bold bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-3 py-1.5 rounded-full shadow-lg shadow-primary/20">⚡ Express 24h</span>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-black text-2xl mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight">
                      Architekturmodelle 3D-Druck
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5 flex-1 text-sm">
                      Maßstabsgetreue Modelle 1:50 bis 1:500 für Wettbewerbe, Baueinreichungen und Kundenpräsentationen. ArchiCAD & Revit kompatibel.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {["1:50–1:500", "CAD-Import", "Wettbewerbe"].map((t) =>
                        <span key={t} className="text-xs glass px-3 py-1.5 rounded-full font-medium text-primary">{t}</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1.5 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                      Architekturmodelle entdecken <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Messemodelle */}
              <AnimatedSection animation="slide-up" delay={100} className="flex-1">
                <Link to="/messemodelle" className="group block h-full min-h-[180px]">
                  <div className="h-full relative rounded-[2rem] bg-gradient-to-br from-primary via-primary to-primary-glow overflow-hidden
                    hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]
                    transition-all duration-500 flex flex-col p-7 group-hover:-translate-y-1.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
                    <div className="relative flex items-start justify-between mb-auto">
                      <div className="w-11 h-11 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/25 transition-all duration-300 shadow-lg">
                        <Presentation className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold bg-white/15 backdrop-blur-sm text-primary-foreground border border-white/20 px-3 py-1.5 rounded-full">ab €30</span>
                    </div>
                    <div className="relative mt-5">
                      <h3 className="font-black text-lg text-primary-foreground leading-tight mb-2 tracking-tight">Messemodelle & Exponate</h3>
                      <p className="text-primary-foreground/75 text-sm leading-relaxed mb-3">
                        3D-Druck Messemodelle für Wien, München, Hannover. Angebot heute – Modell morgen.
                      </p>
                      <span className="flex items-center gap-1.5 text-primary-foreground font-bold text-sm group-hover:gap-3 transition-all">
                        Messemodelle <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Einzelanfertigungen */}
              <AnimatedSection animation="slide-up" delay={200} className="flex-1">
                <Link to="/einzelanfertigungen" className="group block h-full min-h-[180px]">
                  <div className="h-full relative rounded-[2rem] bg-foreground overflow-hidden
                    hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.5)]
                    transition-all duration-500 flex flex-col p-7 group-hover:-translate-y-1.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 pointer-events-none" />
                    <div className="relative flex items-start justify-between mb-auto">
                      <div className="w-11 h-11 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-primary/35 transition-all duration-300">
                        <Wrench className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold bg-primary/25 text-primary-foreground border border-primary/30 px-3 py-1.5 rounded-full">ab 1 Stück</span>
                    </div>
                    <div className="relative mt-5">
                      <h3 className="font-black text-lg text-primary-foreground leading-tight mb-2 tracking-tight">Einzelanfertigungen & Unikate</h3>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed mb-3">
                        Maßgefertigte 3D-Modelle nach Ihren Vorgaben – aus Skizzen, Fotos oder CAD.
                      </p>
                      <span className="flex items-center gap-1.5 text-primary-foreground font-bold text-sm group-hover:gap-3 transition-all">
                        Einzelanfertigungen <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>

          {/* Quick links */}
          <AnimatedSection animation="fade-in" delay={250}>
            <div className="flex flex-wrap gap-2.5 max-w-6xl mx-auto">
              {[
                { to: "/firmenkunden", icon: Users, label: "Firmenkunden & B2B" },
                { to: "/rapid-prototyping", icon: Zap, label: "Rapid Prototyping" },
                { to: "/fdm-3d-druck", icon: Award, label: "FDM Technologie" },
                { to: "/3d-druck-materialien", icon: Layers, label: "Materialien" },
                { to: "/kostenrechner", icon: Calculator, label: "Kostenrechner" },
              ].map(({ to, icon: Icon, label }) =>
                <Link key={to} to={to}
                  className="group flex items-center gap-2 glass hover:bg-primary/5 hover:border-primary/25 rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 text-sm font-medium">
                  <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="group-hover:text-primary transition-colors">{label}</span>
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── KOSTENRECHNER CTA ────────────────────────────────── */}
      <section className="py-20 bg-muted/30 relative" aria-label="3D-Druck Kostenrechner">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up">
            <Link to="/kostenrechner" className="group block max-w-5xl mx-auto">
              <div className="relative rounded-[2rem] overflow-hidden glass-strong shadow-card
                hover:shadow-premium transition-all duration-500 p-10 md:p-12 group-hover:-translate-y-1 gradient-border">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/[0.06] blur-2xl group-hover:bg-primary/[0.1] transition-colors" />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <Calculator className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-black text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors tracking-tight mb-2">
                      Was kostet Ihr 3D-Modell?
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                      STL hochladen, Material wählen, Richtpreis erhalten – unverbindlich und kostenlos. Jede Anfrage wird persönlich geprüft.
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    Jetzt berechnen <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative flex flex-wrap gap-x-6 gap-y-2 mt-6 pt-5 border-t border-border/30 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> 8 FDM-Materialien</span>
                  <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Echtzeit-Preisindikation</span>
                  <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> 3D-Vorschau im Browser</span>
                  <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Angebot in 6 Stunden</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3 SCHRITTE ──────────────────────────────────────── */}
      <ThreeStepProcess />

      {/* ── ZIELGRUPPEN ──────────────────────────────────────── */}
      <section id="zielgruppen" className="py-28 bg-muted/30 relative overflow-hidden" aria-label="Zielgruppen für 3D-Druck">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Ihre Branche</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em]">
                3D-Druck für <span className="text-gradient">jede Anforderung</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-3">
              {[
                {
                  num: "01", icon: Building2, title: "Architekten & Planer",
                  headline: "Wettbewerbsmodell in 24h statt 3 Wochen",
                  desc: "Maßstabsgetreue Architekturmodelle 1:50–1:500. CAD-Datei rein, fertiges Modell raus.",
                  link: "/architekturmodelle",
                  tags: ["1:50–1:500", "CAD-Import", "Express 24h"],
                  dark: false
                },
                {
                  num: "02", icon: Presentation, title: "Messeaussteller",
                  headline: "Exponat fehlt 3 Tage vor der Messe? Kein Problem.",
                  desc: "Express-Fertigung und Lieferung in 24–48h. Messemodelle, Exponate bis 2m+.",
                  link: "/messemodelle",
                  tags: ["Express 24h", "Bis 2m+", "Österreichweit"],
                  dark: true
                },
                {
                  num: "03", icon: FlaskConical, title: "Produktentwickler",
                  headline: "Prototyp morgen auf dem Tisch, nicht in 3 Wochen",
                  desc: "Rapid Prototyping ab €20. Anschauungsmodelle und Iterationen ohne Mindestmenge.",
                  link: "/rapid-prototyping",
                  tags: ["Ab €20", "Keine Mindestmenge", "Iterationen"],
                  dark: false
                },
                {
                  num: "04", icon: Users, title: "Firmenkunden & B2B",
                  headline: "Präsentationsmodelle mit UID-Rechnung und NDA",
                  desc: "Professionelle B2B-Konditionen: UID-Rechnung, NDA, Mengenrabatte ab 5 Stück.",
                  link: "/firmenkunden",
                  tags: ["UID-Rechnung", "NDA", "Mengenrabatt"],
                  dark: false
                },
              ].map(({ num, icon: Icon, title, headline, desc, link, tags, dark }, i) =>
                <AnimatedSection key={num} animation="slide-up" delay={i * 60}>
                  <Link to={link} className="group block">
                    <div className={`rounded-[1.5rem] p-6 md:p-8 transition-all duration-500 hover:-translate-y-1
                      hover:shadow-card-hover
                      ${dark ? "bg-foreground text-background shadow-lg" : "bg-card shadow-card hover:border-primary/30 border border-border/50"}`}>
                      <div className="flex flex-col md:flex-row md:items-center gap-5">
                        <span className={`text-4xl font-black leading-none tabular-nums shrink-0
                          ${dark ? "text-background/10" : "text-primary/10"}`}>{num}</span>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                          ${dark ? "bg-background/10" : "bg-primary/8"} group-hover:scale-105 transition-transform`}>
                          <Icon className={`w-6 h-6 ${dark ? "text-background" : "text-primary"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${dark ? "text-background/40" : "text-muted-foreground"}`}>{title}</p>
                          <h3 className={`font-black text-lg md:text-xl leading-tight mb-1.5 tracking-tight ${dark ? "text-background" : "group-hover:text-primary"} transition-colors`}>
                            {headline}
                          </h3>
                          <p className={`text-sm leading-relaxed ${dark ? "text-background/65" : "text-muted-foreground"}`}>{desc}</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                          <div className="flex flex-wrap gap-1.5">
                            {tags.map((t) =>
                              <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap
                                ${dark ? "bg-background/10 text-background/80" : "bg-primary/6 text-primary"}`}>{t}</span>
                            )}
                          </div>
                          <span className={`flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all
                            ${dark ? "text-background" : "text-primary"}`}>
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

      {/* ── REFERENZEN ───────────────────────────────────────── */}
      <ReferencesTeaser />

      {/* ── WARUM EKDRUCK — VERGLEICH ────────────────────────── */}
      <section className="py-28 bg-background relative overflow-hidden" aria-label="Vorteile von 3D-Druck gegenüber traditionellem Modellbau">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection animation="fade-in">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Warum ekdruck?</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em] mb-6">
                3D-Druck schlägt<br />traditionellen<br />
                <span className="text-gradient">Modellbau.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                FDM 3D-Druck liefert präzise, reproduzierbare Ergebnisse zu einem Bruchteil der Kosten.{" "}
                <Link to="/ratgeber/verfahrens-vergleich" className="text-primary font-bold hover:underline">Vergleich lesen →</Link>
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "95%", label: "günstiger", sub: "vs. Handmodellbau" },
                  { val: "24h", label: "Express", sub: "österreichweit" },
                  { val: "0,1mm", label: "Präzision", sub: "Schichtauflösung" },
                ].map(({ val, label, sub }) =>
                  <div key={label} className="rounded-2xl glass-strong p-5 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                    <p className="text-2xl font-black text-primary leading-none tracking-tight">{val}</p>
                    <p className="text-sm font-bold mt-1.5">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100} className="space-y-3">
              {[
                { icon: TrendingDown, title: "Keine Werkzeugkosten", desc: "Spritzguss ab €10.000. Bei ekdruck zahlen Sie nur für Ihr Modell – ab €20.", accent: false },
                { icon: Clock, title: "Schneller als Handmodellbau", desc: "Traditionell: 1–4 Wochen. ekdruck Express: 24–48h österreichweit.", accent: true },
                { icon: Repeat2, title: "Digital reproduzierbar", desc: "Jede Kopie ist identisch. Korrekturen kosten nur eine Dateiänderung.", accent: false },
                { icon: Leaf, title: "Made in Austria, nachhaltig", desc: "Österreichisches Filament aus Industrieabfällen. 80% weniger CO₂.", accent: false },
              ].map(({ icon: Icon, title, desc, accent }) =>
                <div key={title} className={`flex gap-4 p-5 rounded-2xl transition-all duration-300
                  ${accent ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/25" : "glass-strong hover:shadow-card-hover hover:-translate-y-0.5"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                    ${accent ? "bg-white/15" : "bg-primary/10"}`}>
                    <Icon className={`w-5 h-5 ${accent ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm mb-1 tracking-tight ${accent ? "text-primary-foreground" : ""}`}>{title}</p>
                    <p className={`text-sm leading-relaxed ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{desc}</p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>

          {/* Comparison Table */}
          <AnimatedSection animation="fade-in" delay={200} className="mt-16 max-w-5xl mx-auto">
            <div className="rounded-[1.5rem] overflow-hidden glass-strong shadow-card">
              <div className="grid grid-cols-3 bg-muted/30 border-b border-border/50">
                <div className="p-5 text-sm font-semibold text-muted-foreground">Kriterium</div>
                <div className="p-5 font-bold text-primary border-x border-border/30 flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  ekdruck 3D-Druck
                </div>
                <div className="p-5 text-muted-foreground text-sm font-semibold text-center">Traditionell</div>
              </div>
              {[
                { label: "Kosten", good: "ab €20", bad: "€200–€10.000+" },
                { label: "Lieferzeit", good: "24h Express", bad: "1–4 Wochen" },
                { label: "Komplexe Geometrien", good: "Unbegrenzt", bad: "Stark limitiert" },
                { label: "Wiederholbarkeit", good: "1:1 identisch", bad: "Handarbeit variiert" },
              ].map(({ label, good, bad }) =>
                <div key={label} className="grid grid-cols-3 border-t border-border/30 hover:bg-muted/20 transition-colors">
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
      </section>

      {/* ── MATERIALIEN ──────────────────────────────────────── */}
      <section id="materialien" className="py-28 bg-muted/30 relative overflow-hidden" aria-label="3D-Druck Materialien">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="grid md:grid-cols-2 gap-12 items-center mb-14">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Materialien</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em]">
                  FDM-Präzision aus<br />
                  <span className="text-gradient">Österreich.</span>
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  Als <Link to="/fdm-3d-druck" className="text-primary font-bold hover:underline">FDM-Spezialist</Link> aus Gunskirchen (OÖ) verwenden wir ausschließlich österreichische Filamente aus Industrieabfällen. CO₂-Fußabdruck 80% geringer als Importware.
                </p>
                <Link to="/3d-druck-materialien" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  Alle Materialien & Specs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "PLA", badge: "Bestseller", primary: true, desc: "Biologisch abbaubar. Ideal für Architektur- & Präsentationsmodelle.", props: ["Biologisch abbaubar", "0,1 mm Auflösung", "20+ Farben"] },
                { name: "PETG", badge: "Outdoor", primary: false, desc: "UV-beständig und langlebig – für Außen-Exponate.", props: ["UV-beständig", "80°C beständig", "Schlagfest"] },
                { name: "ABS", badge: "Robust", primary: false, desc: "Industriestandard. Schleifbar, lackierbar, hochwertig.", props: ["100°C beständig", "Lackierbar", "Schleifbar"] },
                { name: "TPU", badge: "Flexibel", primary: false, desc: "Elastisch für spezielle Anwendungen.", props: ["Shore 95A", "500% dehnbar", "Abriebfest"] },
              ].map(({ name, badge, primary, desc, props }) =>
                <div key={name} className="rounded-2xl glass-strong p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-black tracking-tight">{name}</p>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full
                      ${primary ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground" : "bg-muted/60 text-muted-foreground"}`}>
                      {badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="space-y-1.5">
                    {props.map((p) =>
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

      {/* ── GOOGLE BEWERTUNGEN ────────────────────────────────── */}
      <GoogleReviewsSection />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="py-28 bg-background relative" aria-label="Häufige Fragen zum 3D-Druck">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-in">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">FAQ</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em] mb-5">
                  Häufige Fragen<br />zum <span className="text-gradient">3D-Druck.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  Nicht gefunden? Rufen Sie uns direkt an – wir helfen sofort.
                </p>
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Ratgeber</p>
                  {[
                    { to: "/ratgeber/kosten-guide", label: "3D-Druck Kosten & Preise" },
                    { to: "/ratgeber/material-guide", label: "Materialien im Vergleich" },
                    { to: "/ratgeber/architekturmodell-guide", label: "Architekturmodell Guide" },
                    { to: "/ratgeber/messemodell-guide", label: "Messemodell Guide" },
                    { to: "/ratgeber/verfahrens-vergleich", label: "3D-Druck vs. Modellbau" },
                  ].map(({ to, label }) =>
                    <Link key={to} to={to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      {label}
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-3">
              <AnimatedSection animation="slide-up" delay={100}>
                <Accordion type="single" collapsible className="space-y-2.5">
                  {[
                    {
                      q: "Was kostet 3D-Druck bei ekdruck?",
                      a: "Ab €20 pro Modell. Der Preis hängt von Material (PLA ab €20, PETG ab €25, ABS ab €28), Volumen und Qualitätsstufe ab. Mengenrabatte ab 5 Stück. Festpreisangebot in unter 6 Stunden.",
                      link: { to: "/ratgeber/kosten-guide", text: "Preis-Ratgeber →" }
                    },
                    {
                      q: "Wie schnell bekomme ich mein Modell?",
                      a: "Standard: 3–5 Werktage österreichweit (versandkostenfrei ab €100). Express: 24–48 Stunden – ideal für Messetermine oder Wettbewerbsabgaben.",
                      link: null
                    },
                    {
                      q: "Welche Dateiformate werden akzeptiert?",
                      a: "STL, OBJ, STEP, IGES, 3MF sowie ArchiCAD, Revit, SolidWorks, Rhino und Fusion 360. Keine Datei? Wir erstellen das 3D-Modell kostenlos nach Skizzen oder Fotos.",
                      link: { to: "/einzelanfertigungen", text: "Einzelanfertigungen →" }
                    },
                    {
                      q: "Für welche Branchen eignet sich ekdruck?",
                      a: "Architekten (1:50–1:500), Messeaussteller (Express 24–48h), Produktentwickler (keine Mindestmenge) und Firmenkunden (UID-Rechnung, NDA, Mengenrabatte).",
                      link: null
                    },
                    {
                      q: "Welche Nachbearbeitungs-Optionen gibt es?",
                      a: "Schleifen, Grundierung, Lackierung in RAL/Pantone, Aceton-Dampfglättung, Segmentierung. Jedes Modell wird vor Versand manuell geprüft.",
                      link: null
                    },
                    {
                      q: "Warum österreichisches Filament?",
                      a: "Recycelte Industrieabfälle, Ökostrom-Fertigung. CO₂-Fußabdruck 80% geringer. Extrusionstoleranz ±0,02 mm für konsistente Qualität.",
                      link: { to: "/ratgeber/material-guide", text: "Material-Guide →" }
                    },
                  ].map((item, i) =>
                    <AccordionItem key={i} value={`faq-${i}`}
                      className="glass-strong rounded-2xl px-6 hover:shadow-sm transition-all data-[state=open]:shadow-card data-[state=open]:ring-1 data-[state=open]:ring-primary/15">
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

      {/* ── TRUST BADGES ─────────────────────────────────────── */}
      <section className="py-16 bg-muted/30 relative" aria-label="Vertrauen und Qualitätsmerkmale">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* ── REGIONALE PRÄSENZ ────────────────────────────────── */}
      <section className="py-20 bg-background relative" aria-label="3D-Druck Standorte in Österreich und Deutschland">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection animation="fade-in" className="mb-10">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3">Standort & Lieferung</p>
            <h2 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-[-0.03em] mb-4">
              3D-Druck für <span className="text-gradient">ganz Österreich & Deutschland</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              Standort <strong className="text-foreground">Gunskirchen (OÖ)</strong> – Express österreichweit 24–48h, Deutschland 2–4 Tage.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">🏙️ Städte</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Wien", url: "/3d-druck-wien" },
                  { name: "Linz", url: "/3d-druck-linz" },
                  { name: "Graz", url: "/3d-druck-graz" },
                  { name: "Salzburg", url: "/3d-druck-salzburg" },
                  { name: "Innsbruck", url: "/3d-druck-innsbruck" },
                  { name: "Klagenfurt", url: "/3d-druck-klagenfurt" },
                  { name: "Wels", url: "/3d-druck-wels" },
                  { name: "St. Pölten", url: "/3d-druck-st-poelten" },
                  { name: "Dornbirn", url: "/3d-druck-dornbirn" },
                  { name: "Villach", url: "/3d-druck-villach" },
                ].map(({ name, url }) =>
                  <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="glass hover:bg-primary/5 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-all duration-200 font-medium hover:-translate-y-0.5">
                    {name}
                  </Link>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">🇦🇹 Bundesländer</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Oberösterreich", url: "/3d-druck-oberoesterreich" },
                  { name: "Niederösterreich", url: "/3d-druck-niederoesterreich" },
                  { name: "Steiermark", url: "/3d-druck-steiermark" },
                  { name: "Kärnten", url: "/3d-druck-kaernten" },
                  { name: "Vorarlberg", url: "/3d-druck-vorarlberg" },
                  { name: "Burgenland", url: "/3d-druck-burgenland" },
                ].map(({ name, url }) =>
                  <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="glass hover:bg-primary/5 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5">
                    {name}
                  </Link>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">🇩🇪 Deutschland</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "München", url: "/messemodelle/muenchen" },
                  { name: "Stuttgart", url: "/messemodelle/stuttgart" },
                  { name: "Nürnberg", url: "/messemodelle/nuernberg" },
                  { name: "Passau", url: "/messemodelle/passau" },
                ].map(({ name, url }) =>
                  <Link key={url + name} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="glass hover:bg-primary/5 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5">
                    {name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINALER CTA ─────────────────────────────────────── */}
      <section className="py-28 bg-muted/30 relative" aria-label="Jetzt 3D-Druck Angebot anfordern">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale-in">
            <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden glass-strong shadow-premium">
              <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-16 relative">
                  <div className="absolute -top-16 -left-16 w-[250px] h-[250px] rounded-full bg-primary/[0.05] blur-[60px] pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2.5 glass text-primary px-4 py-2 rounded-full text-xs font-bold mb-8 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Kostenlos & unverbindlich
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em] mb-6">
                      Bereit für Ihr<br />
                      <span className="text-gradient">nächstes Modell?</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm max-w-md">
                      Angebot in 6 Stunden. Direkte Ansprechperson aus Gunskirchen, Österreich. Kein Callcenter.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" variant="cta" className="group rounded-2xl px-10 py-7 font-bold shadow-[0_8px_40px_hsl(var(--primary)/0.3)] text-base">
                        <Link to="/kontakt">
                          Kostenloses Angebot
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="cta-outline" className="rounded-2xl px-8 py-7">
                        <Link to="/kostenrechner">
                          <Calculator className="mr-2 w-4 h-4" />
                          Preis berechnen
                        </Link>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-5">
                      ✓ Keine Mindestbestellung · ✓ Express 24h · ✓ Made in Austria
                    </p>
                  </div>
                </div>
                <div className="bg-muted/20 border-l border-border/30 p-12 md:p-16 flex flex-col justify-center">
                  <div className="space-y-6">
                    {[
                      { val: "31", label: "Google Bewertungen", sub: "⭐⭐⭐⭐⭐ 5,0 / 5,0" },
                      { val: "6h", label: "Angebots-Garantie", sub: "Kostenlos & unverbindlich" },
                      { val: "24h", label: "Express-Lieferung", sub: "Österreichweit möglich" },
                      { val: "€20", label: "Preis ab", sub: "Keine Mindestbestellung" },
                    ].map(({ val, label, sub }) =>
                      <div key={label} className="flex items-center gap-5">
                        <p className="text-3xl font-black text-primary w-16 shrink-0 leading-none tracking-tight">{val}</p>
                        <div>
                          <p className="font-bold text-sm leading-none tracking-tight">{label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ekdruck e.U. · Gunskirchen, OÖ · Spezialist für{" "}
                      <Link to="/messemodelle" className="text-primary font-semibold hover:underline">Messemodelle</Link>,{" "}
                      <Link to="/architekturmodelle" className="text-primary font-semibold hover:underline">Architekturmodelle</Link> &{" "}
                      <Link to="/einzelanfertigungen" className="text-primary font-semibold hover:underline">Einzelanfertigungen</Link>
                    </p>
                  </div>
                </div>
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
