import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import StickyCTA from "@/components/landing/StickyCTA";
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
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Building2, Presentation, Users,
  Check, X, MapPin, Clock, Repeat2, Layers,
  TrendingDown, ArrowRight, Zap, Leaf, Star,
  ChevronRight, Package, Phone, MessageSquare,
  Shield, Award, Paintbrush, ScanLine, Ruler,
  FlaskConical, Wrench, Palette, Calculator } from
"lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return <>
    <SEOHead
      title="3D-Druck Österreich ★ ab €20 | Express 24h | ekdruck.at"
      description="3D-Druck Service Österreich ✓ 5.0/5 Google (31 Bewertungen) ✓ Messemodelle, Architekturmodelle & Prototypen ab €20 ✓ Express in 24h ✓ Angebot in 6h → Jetzt anfragen"
      keywords="3d druck österreich, 3d-druck service, messemodelle 3d-druck, architekturmodelle 3d-druck, 3d druck prototypen, 3d druck oberösterreich, 3d-druck dienstleister, fdm 3d-druck"
      path="/"
      preloadResources={[{
        href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
        as: "image",
        type: "image/png"
      }, {
        href: "/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
        as: "image",
        type: "image/png"
      }]} />
    
    <OrganizationSchema />
    <StructuredData type="organization" />
    <StructuredData type="service" />
    <AggregateRatingSchema ratingValue={5.0} ratingCount={31} bestRating={5} worstRating={5} />
    <FAQSchema faqs={[
    { question: "Was kostet 3D-Druck bei ekdruck?", answer: "Unsere Preise beginnen ab €20 pro Modell – abhängig von Material (PLA, PETG, ABS oder TPU), Druckvolumen und Qualitätsstufe (Standard 0,2 mm, Fine 0,15 mm, Ultra Fine 0,1 mm). Mengenrabatte ab 5 Einheiten. Ein transparentes Festpreisangebot erhalten Sie in unter 6 Stunden." },
    { question: "Wie schnell erhalte ich mein 3D-gedrucktes Modell?", answer: "Standard: 3–5 Werktage österreichweit, versandkostenfrei ab €100. Express-Service: 24–48 Stunden – ideal für kurzfristige Messetermine oder Wettbewerbsabgaben. Deutschland 2–4 Werktage via DHL oder GLS. Persönliche Abholung in Gunskirchen (OÖ) möglich." },
    { question: "Welche Dateiformate werden für 3D-Druck akzeptiert?", answer: "Alle gängigen 3D-Formate: STL, OBJ, STEP, IGES, 3MF sowie ArchiCAD, Revit, SolidWorks, Rhino und Fusion 360. Keine CAD-Datei? Wir erstellen das 3D-Modell kostenlos nach Skizzen, Fotos oder technischen Zeichnungen – vollständig im Projektpreis enthalten." },
    { question: "Für welche Branchen und Anwendungen eignet sich ekdruck?", answer: "ekdruck ist spezialisiert auf: Architekten (Modelle 1:50–1:500), Messeaussteller (Express 24–48h), Produktentwickler (Rapid Prototyping, keine Mindestmenge) und Firmenkunden (UID-Rechnung, NDA, Mengenrabatte, Schulungsmodelle, Präsentationsmodelle)." },
    { question: "Warum österreichisches Filament statt günstigeren Importen?", answer: "Österreichische Filamente aus recycelten Industrieabfällen, mit Ökostrom gefertigt. CO₂-Fußabdruck bis zu 80 % geringer als Importware. Extrusionstoleranz ±0,02 mm für konsistente Druckergebnisse, geringere Fehlerquote und höhere Oberflächenqualität." },
    { question: "Welche Nachbearbeitungs- und Finishing-Optionen gibt es?", answer: "Schleifen und Glätten (lackierfertige Oberfläche), Grundierung (Porenverschluss), Lackierung in RAL/Pantone (matt oder glänzend), Aceton-Dampfglättung für ABS (spritzgussähnliche Qualität), Segmentierung und Klebeverbindungen. Manuelle Qualitätsprüfung vor jedem Versand." }]
    } />
    <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* ── LEISTUNGEN — PREMIUM BENTO GRID ─────────────────────────── */}
      <section id="leistungen" className="py-32 bg-background relative overflow-hidden">
        {/* Ambient decoration */}
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-in" className="mb-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Was wir machen</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-[-0.03em]">
                  3D-Druck für<br />
                  <span className="text-gradient">Profis in Österreich</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed lg:text-right text-sm">
                Spezialisiert auf Messemodelle, Architekturmodelle und Einzelanfertigungen – mit Express 24h und Angebot in 6 Stunden.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-5 max-w-6xl mx-auto mb-8">
            {/* LARGE: Architekturmodelle */}
            <AnimatedSection animation="slide-up" delay={0} className="lg:col-span-3">
              <Link to="/architekturmodelle" className="group block h-full min-h-[420px]">
                <div className="h-full relative rounded-[2rem] bg-card overflow-hidden shadow-card
                  hover:shadow-card-hover transition-all duration-500 flex flex-col group-hover:-translate-y-1.5 gradient-border">
                  <div className="relative h-48 bg-gradient-to-br from-muted/60 to-muted/30 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,hsl(var(--primary)/0.03)_0px,hsl(var(--primary)/0.03)_1px,transparent_1px,transparent_32px)]" />
                    <div className="w-24 h-24 rounded-3xl glass-strong flex items-center justify-center
                      group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Building2 className="w-12 h-12 text-primary" />
                    </div>
                    <span className="absolute top-5 right-5 text-xs font-bold glass-strong px-4 py-2 rounded-full shadow-sm">ab €20</span>
                    <span className="absolute top-5 left-5 text-xs font-bold bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-2 rounded-full shadow-lg shadow-primary/20">⚡ Express 24h</span>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col flex-1">
                    <h3 className="font-black text-2xl lg:text-3xl mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight">
                      Architekturmodelle 3D-Druck
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm">
                      Maßstabsgetreue 3D-gedruckte Architekturmodelle im Maßstab 1:50 bis 1:500 – für Wettbewerbe, Baueinreichungen und Kundenpräsentationen. ArchiCAD, Revit & SolidWorks kompatibel.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["1:50–1:500", "CAD-Import", "Wettbewerbsmodelle", "Express 24h"].map((t) =>
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
                <Link to="/messemodelle" className="group block h-full min-h-[200px]">
                  <div className="h-full relative rounded-[2rem] bg-gradient-to-br from-primary via-primary to-primary-glow overflow-hidden
                    hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]
                    transition-all duration-500 flex flex-col p-8 group-hover:-translate-y-1.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 blur-lg" />
                    <div className="relative flex items-start justify-between mb-auto">
                      <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/25 group-hover:scale-105 transition-all duration-300 shadow-lg">
                        <Presentation className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold bg-white/15 backdrop-blur-sm text-primary-foreground border border-white/20 px-3 py-1.5 rounded-full">ab €30</span>
                    </div>
                    <div className="relative mt-6">
                      <h3 className="font-black text-xl text-primary-foreground leading-tight mb-2 tracking-tight">Messemodelle & Exponate</h3>
                      <p className="text-primary-foreground/75 text-sm leading-relaxed mb-4">
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
                <Link to="/einzelanfertigungen" className="group block h-full min-h-[200px]">
                  <div className="h-full relative rounded-[2rem] bg-foreground overflow-hidden
                    hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.5)]
                    transition-all duration-500 flex flex-col p-8 group-hover:-translate-y-1.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 pointer-events-none" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/10 blur-lg" />
                    <div className="relative flex items-start justify-between mb-auto">
                      <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-primary/35 group-hover:scale-105 transition-all duration-300">
                        <Wrench className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold bg-primary/25 text-primary-foreground border border-primary/30 px-3 py-1.5 rounded-full">ab 1 Stück</span>
                    </div>
                    <div className="relative mt-6">
                      <h3 className="font-black text-xl text-primary-foreground leading-tight mb-2 tracking-tight">Einzelanfertigungen & Unikate</h3>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                        Maßgefertigte 3D-Modelle nach Ihren Vorgaben – aus Skizzen, Fotos oder CAD. Keine Mindestmenge.
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

          {/* Secondary links */}
          <AnimatedSection animation="fade-in" delay={300}>
            <div className="flex flex-wrap gap-3 max-w-6xl mx-auto">
              {[
              { to: "/firmenkunden", icon: Users, label: "Firmenkunden & B2B", sub: "UID · NDA · Mengenrabatte" },
              { to: "/rapid-prototyping", icon: Zap, label: "Rapid Prototyping", sub: "Prototypen in 24–48h" },
              { to: "/fdm-3d-druck", icon: Award, label: "FDM Technologie", sub: "Materialien & Specs" },
              { to: "/3d-druck-materialien", icon: Layers, label: "Materialien", sub: "PLA · PETG · ABS · TPU" }].
              map(({ to, icon: Icon, label, sub }) =>
              <Link key={to} to={to}
              className="group flex items-center gap-3 glass hover:bg-primary/5 hover:border-primary/25 rounded-2xl px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-bold group-hover:text-primary transition-colors leading-none">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all ml-auto" />
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3 SCHRITTE — CONVERSION SECTION ─────────────────────────────── */}
      <ThreeStepProcess />

      {/* ── KOSTENRECHNER CTA ─────────────────────────────── */}
      <section className="py-20 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up">
            <Link to="/kostenrechner" className="group block max-w-6xl mx-auto">
              <div className="relative rounded-[2rem] overflow-hidden glass-strong shadow-card
                hover:shadow-premium transition-all duration-500 p-10 md:p-14 group-hover:-translate-y-1 gradient-border">
                {/* Accent decoration */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/[0.06] blur-2xl group-hover:bg-primary/[0.1] transition-colors" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-accent/[0.06] blur-xl" />

                <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <Calculator className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-black text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors tracking-tight">
                        Was kostet Ihr 3D-Modell?
                      </h3>
                      <span className="text-xs font-bold glass text-primary px-3 py-1.5 rounded-full hidden sm:inline-block">
                        Richtpreis in Sekunden
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                      STL hochladen, Material wählen, Richtpreis erhalten – unverbindlich und kostenlos.
                      Jede Anfrage wird persönlich geprüft.
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    Kostenrechner öffnen <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Trust line */}
                <div className="relative flex flex-wrap gap-x-6 gap-y-2 mt-8 pt-5 border-t border-border/30 text-xs text-muted-foreground">
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

      {/* ── FÜR WEN — ZIELGRUPPEN ─────────────── */}
      <section id="zielgruppen" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-20">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Ihre Branche</p>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.0] tracking-[-0.03em]">
                Für wen ist ekdruck<br />
                <span className="text-gradient">die richtige Wahl?</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {[
              {
                num: "01",
                icon: Building2,
                title: "Architekten & Planer",
                headline: "Wettbewerbsmodell in 24h statt 3 Wochen",
                desc: "Maßstabsgetreue Architekturmodelle 1:50–1:500. CAD-Datei rein, fertiges Modell raus. Revit, ArchiCAD, SolidWorks – alle Formate.",
                link: "/architekturmodelle",
                tags: ["1:50–1:500", "CAD-Import", "Wettbewerbsmodelle"],
                dark: false
              },
              {
                num: "02",
                icon: Presentation,
                title: "Messeaussteller",
                headline: "Exponat fehlt 3 Tage vor der Messe? Kein Problem.",
                desc: "Express-Fertigung und Lieferung in 24–48h österreichweit. Messemodelle, Produktexponate und Anschauungsobjekte bis 2m+.",
                link: "/messemodelle",
                tags: ["Express 24h", "Bis 2m+", "Österreichweit"],
                dark: true
              },
              {
                num: "03",
                icon: Wrench,
                title: "Einzelanfertigungen & Sonderprojekte",
                headline: "Ihr Unikat – maßgefertigt, ab 1 Stück",
                desc: "Individuelle 3D-Modelle nach Ihren Vorgaben: aus Skizzen, Fotos oder CAD-Dateien. Keine Mindestmenge, keine Werkzeugkosten.",
                link: "/einzelanfertigungen",
                tags: ["Ab 1 Stück", "3D-Modellierung inkl.", "Unikate"],
                dark: true
              },
              {
                num: "04",
                icon: FlaskConical,
                title: "Produktentwickler",
                headline: "Prototyp morgen auf dem Tisch, nicht in 3 Wochen",
                desc: "Rapid Prototyping ab €20. Funktionsmuster, Anschauungsmodelle und Iterationen in einer Woche. Keine Mindestmenge.",
                link: "/rapid-prototyping",
                tags: ["Ab €20", "Keine Mindestmenge", "Iterationen"],
                dark: false
              },
              {
               num: "05",
                icon: Users,
                title: "Firmenkunden & B2B",
                headline: "Präsentationsmodelle mit UID-Rechnung und NDA",
                desc: "Professionelle B2B-Konditionen: UID-konforme Rechnungen, NDA-Vereinbarung, Mengenrabatte ab 5 Stück.",
                link: "/firmenkunden",
                tags: ["UID-Rechnung", "NDA", "Mengenrabatt"],
                dark: false
              }].
              map(({ num, icon: Icon, title, headline, desc, link, tags, dark }, i) =>
              <AnimatedSection key={num} animation="slide-up" delay={i * 80}>
                  <Link to={link} className="group block">
                    <div className={`rounded-[1.5rem] p-7 md:p-9 transition-all duration-500 hover:-translate-y-1
                      hover:shadow-card-hover
                      ${dark ?
                  "bg-foreground text-background shadow-lg" :
                  "bg-card shadow-card hover:border-primary/30 border border-border/50"}`
                  }>
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Number */}
                        <div className="flex items-center gap-4 md:w-16 shrink-0">
                          <span className={`text-5xl font-black leading-none tabular-nums
                            ${dark ? "text-background/10" : "text-primary/10"}`}>{num}</span>
                        </div>
                        {/* Icon badge */}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0
                          ${dark ? "bg-background/10 backdrop-blur-sm" : "bg-primary/8"}
                          group-hover:scale-105 transition-all duration-300`}>
                          <Icon className={`w-7 h-7 ${dark ? "text-background" : "text-primary"}`} />
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${dark ? "text-background/40" : "text-muted-foreground"}`}>{title}</p>
                          <h3 className={`font-black text-xl md:text-2xl leading-tight mb-2 tracking-tight ${dark ? "text-background" : "group-hover:text-primary"} transition-colors`}>
                            {headline}
                          </h3>
                          <p className={`text-sm leading-relaxed ${dark ? "text-background/65" : "text-muted-foreground"}`}>{desc}</p>
                        </div>
                        {/* Tags + CTA */}
                        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                          <div className="flex flex-wrap gap-1.5 md:justify-end">
                            {tags.map((t) =>
                          <span key={t} className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap
                                ${dark ? "bg-background/10 text-background/80 border border-background/15" : "bg-primary/6 text-primary border border-primary/12"}`}>
                                {t}
                              </span>
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

      {/* ── REFERENZEN ────────────────────────────────────────────────── */}
      <ReferencesTeaser />

      {/* ── MID-PAGE CTA ──────────────────────────────────────── */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-6xl mx-auto rounded-[2rem] relative overflow-hidden shadow-premium">
              {/* Premium mesh gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-background to-accent/[0.04]" />
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-accent/[0.06] blur-[60px] pointer-events-none" />

              <div className="relative p-12 md:p-16 border border-primary/10 rounded-[2rem]">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-5">Ihr nächster Schritt</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.0] tracking-[-0.03em] mb-5">
                      Angebot in unter<br />
                      <span className="text-gradient">6 Stunden</span> –<br />
                      kostenlos.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-10 max-w-md">
                      Beschreiben Sie uns kurz Ihr Projekt. Wir antworten schnell, unverbindlich und persönlich – kein Callcenter, kein Autoresponder.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" variant="cta" className="group rounded-2xl px-10 py-7 font-bold shadow-[0_8px_40px_hsl(var(--primary)/0.3)] text-base">
                        <Link to="/kontakt">
                          <MessageSquare className="mr-2 w-5 h-5" />
                          Jetzt anfragen
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="cta-outline" className="rounded-2xl px-8 py-7">
                        <a href="tel:+436765517197">
                          <Phone className="mr-2 w-4 h-4" />
                          +43 676 5517197
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                    { icon: Check, text: "Keine versteckten Kosten", sub: "Transparentes Festpreisangebot" },
                    { icon: Check, text: "Persönliche Beratung", sub: "Direkte Ansprechperson – kein Callcenter" },
                    { icon: Check, text: "Express 24h verfügbar", sub: "Für kurzfristige Messe-Deadlines" },
                    { icon: Check, text: "Kostenlose Datei-Optimierung", sub: "STL, OBJ, STEP, ArchiCAD, Revit" }].
                    map(({ icon: Icon, text, sub }) =>
                    <div key={text} className="flex items-start gap-4 glass-strong rounded-2xl p-5 hover:shadow-sm transition-all">
                        <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold leading-none">{text}</p>
                          <p className="text-xs text-muted-foreground mt-1.5">{sub}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WARUM EKDRUCK — VERGLEICH ─────────────────────────────────── */}
      <section className="py-36 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
            <AnimatedSection animation="fade-in">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-5">Warum ekdruck?</p>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.0] tracking-[-0.03em] mb-8">
                3D-Druck schlägt<br />traditionellen<br />
                <span className="text-gradient">Modellbau.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
                Wo Handmodellbau teuer, langsam und einmalig ist, liefert FDM 3D-Druck präzise, reproduzierbare Ergebnisse zu einem Bruchteil der Kosten.{" "}
                <Link to="/ratgeber/verfahrens-vergleich" className="text-primary font-bold hover:underline">Vergleich lesen →</Link>
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                { val: "bis 95%", label: "günstiger", sub: "vs. Handmodellbau" },
                { val: "24h", label: "Express", sub: "österreichweit" },
                { val: "0,1mm", label: "Präzision", sub: "Schichtauflösung" }].
                map(({ val, label, sub }) =>
                <div key={label} className="rounded-2xl glass-strong p-6 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                    <p className="text-3xl font-black text-primary leading-none tracking-tight">{val}</p>
                    <p className="text-sm font-bold mt-2">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={150} className="space-y-4">
              {[
              { icon: TrendingDown, title: "Kein Werkzeugkostenproblem", desc: "Spritzguss-Werkzeuge kosten ab €10.000. Bei ekdruck zahlen Sie nur für Ihr Modell – ab €20.", accent: false },
              { icon: Clock, title: "Schneller als jeder Handmodellbauer", desc: "Traditioneller Modellbau: 1–4 Wochen. ekdruck Express: 24–48 Stunden österreichweit.", accent: true },
              { icon: Repeat2, title: "Beliebig reproduzierbar", desc: "Jede Kopie ist digital identisch. Korrekturen kosten nur eine Dateiänderung.", accent: false },
              { icon: Leaf, title: "Made in Austria, nachhaltig", desc: "Österreichische Filamente aus Industrieabfällen. Ökostrom. CO₂-Fußabdruck 80% geringer.", accent: false }].
              map(({ icon: Icon, title, desc, accent }) =>
              <div key={title} className={`flex gap-5 p-6 rounded-2xl transition-all duration-300
                  ${accent ?
              "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/25" :
              "glass-strong hover:shadow-card-hover hover:-translate-y-0.5"}`
              }>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                    ${accent ? "bg-white/15 backdrop-blur-sm" : "bg-primary/10"}`}>
                    <Icon className={`w-6 h-6 ${accent ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <p className={`font-bold text-base mb-1.5 tracking-tight ${accent ? "text-primary-foreground" : ""}`}>{title}</p>
                    <p className={`text-sm leading-relaxed ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{desc}</p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>

          {/* Comparison Table */}
          <AnimatedSection animation="fade-in" delay={250} className="mt-24 max-w-6xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden glass-strong shadow-card">
              <div className="grid grid-cols-3 bg-muted/30 border-b border-border/50">
                <div className="p-6 text-sm font-semibold text-muted-foreground">Kriterium</div>
                <div className="p-6 font-bold text-primary border-x border-border/30 flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  ekdruck 3D-Druck
                </div>
                <div className="p-6 text-muted-foreground text-sm font-semibold text-center">Traditionell</div>
              </div>
              {[
              { label: "Kosten (Modell)", icon: TrendingDown, good: "ab €20", bad: "€200–€10.000+" },
              { label: "Lieferzeit", icon: Clock, good: "24h Express", bad: "1–4 Wochen" },
              { label: "Komplexe Geometrien", icon: Layers, good: "Unbegrenzt", bad: "Stark limitiert" },
              { label: "Wiederholbarkeit", icon: Repeat2, good: "1:1 identisch", bad: "Handarbeit variiert" },
              { label: "Gewicht", icon: Zap, good: "Bis 80% leichter", bad: "Massiv & schwer" }].
              map(({ label, icon: Icon, good, bad }) =>
              <div key={label} className="grid grid-cols-3 border-t border-border/30 hover:bg-muted/20 transition-colors">
                  <div className="p-6 font-medium text-sm flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-primary shrink-0 opacity-60" />{label}
                  </div>
                  <div className="p-6 text-center border-x border-border/30 bg-primary/[0.02]">
                    <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                      <Check className="w-4 h-4" />{good}
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                      <X className="w-4 h-4 text-destructive/50 shrink-0" />{bad}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUALITÄT & FINISHING ──────────────────────── */}
      <section id="qualitaet" className="py-32 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-20">
              <div className="grid lg:grid-cols-5 gap-16 items-start">
                <div className="lg:col-span-2 lg:sticky lg:top-8">
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Druckqualität</p>
                  <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em] mb-5">
                    Welche Qualitätsstufe<br />
                    <span className="text-gradient">brauche ich?</span>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Vom schnellen Erstmuster bis zum präsentationsreifen Wettbewerbsmodell – wählen Sie die passende Schichtstärke.
                  </p>
                  <div className="text-xs text-muted-foreground glass-strong rounded-2xl p-5">
                    <strong className="text-foreground block mb-1">Nicht sicher?</strong>
                    Wir empfehlen kostenlos die optimale Qualitätsstufe für Ihr Projekt.
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  {[
                  { level: "Standard", res: "0,2 mm", desc: "Für Funktionsmuster und erste Iterationen. Sichtbare Schichtlinien – günstig und schnell.", use: "Prototypen, Erstmuster", featured: false },
                  { level: "Fine", res: "0,15 mm", desc: "Unser meistgewähltes Setting. Sehr gute Oberflächenqualität – für professionelle Präsentationen.", use: "Architekturmodelle, Messe", featured: true },
                  { level: "Ultra Fine", res: "0,1 mm", desc: "Höchste Präzision. Minimalste Schichtlinien für Wettbewerbsmodelle und sichtbare Feinstrukturen.", use: "Wettbewerbe, Galerien", featured: false }].
                  map(({ level, res, desc, use, featured }) =>
                  <div key={level} className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-300
                      ${featured ? "glass-strong ring-1 ring-primary/20 shadow-premium" : "glass hover:shadow-card-hover hover:-translate-y-0.5"}`}>
                      <div className={`shrink-0 w-18 text-center rounded-2xl border py-3 px-3
                        ${featured ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground border-primary shadow-lg shadow-primary/20" : "bg-muted/50 border-border"}`}>
                        <p className="text-lg font-black leading-none">{res}</p>
                        <p className="text-[9px] font-semibold mt-1 opacity-60 uppercase tracking-wide">Schicht</p>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <p className="font-black text-lg tracking-tight">{level}</p>
                          {featured && <span className="text-[10px] bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-bold px-3 py-0.5 rounded-full shadow-sm">Beliebteste Wahl</span>}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-1.5">{desc}</p>
                        <p className="text-xs text-primary font-semibold">→ {use}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* Finishing */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-14 shadow-xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-10">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-40 mb-3">Nachbearbeitung</p>
                      <h3 className="font-black text-3xl text-background tracking-tight">Fertig zum Auspacken &amp; Präsentieren</h3>
                      <p className="text-background/50 text-sm mt-2">Wir liefern das Modell direkt präsentationsbereit – auf Wunsch.</p>
                    </div>
                    <Link to="/einzelanfertigungen" className="text-background font-bold text-sm border border-background/15 hover:bg-background/10 px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0">
                      Finishing anfragen <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                    { icon: ScanLine, title: "Schleifen & Glätten", desc: "Schichtlinien entfernen. Lackierfertige Oberfläche." },
                    { icon: Paintbrush, title: "Lackieren (RAL/Pantone)", desc: "Jede Farbe nach Wunsch. Matt oder glänzend." },
                    { icon: Palette, title: "Grundierung", desc: "Professionelle Vorbereitung. Poren versiegelt." },
                    { icon: Wrench, title: "Aceton-Dampfglätte", desc: "Für ABS: fast spritzgussgleiche Oberfläche." },
                    { icon: Ruler, title: "Segmentierung", desc: "Große Modelle mehrteilig, professionell verklebt." },
                    { icon: Award, title: "Qualitätsprüfung", desc: "Jedes Modell wird vor dem Versand geprüft." }].
                    map(({ icon: Icon, title, desc }) =>
                    <div key={title} className="flex gap-4 p-5 rounded-2xl bg-background/[0.06] hover:bg-background/[0.1] border border-background/[0.08] transition-all duration-300">
                        <div className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-background/80" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-background tracking-tight">{title}</p>
                          <p className="text-xs text-background/50 mt-1 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROZESS — vertikale Zeitleiste ───────────────────────────── */}
      <section className="py-32 bg-muted/30 relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-20 items-start">
            <AnimatedSection animation="fade-in" className="lg:col-span-2">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Wie es funktioniert</p>
              <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em] mb-5">
                Von der Anfrage zum<br />
                <span className="text-gradient">fertigen Modell</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Vier Schritte, kein Bürokratie-Chaos, keine Preisüberraschungen. Durchschnittliche Gesamtdauer: 3–5 Werktage.
              </p>
              <div className="inline-flex items-center gap-2 glass text-primary px-5 py-3 rounded-2xl text-sm font-bold shadow-sm">
                <Zap className="w-4 h-4" />
                Express: auch in 24h möglich
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100} className="lg:col-span-3">
              <div className="relative">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-border via-primary/20 to-border" />
                <div className="space-y-3">
                  {[
                  { n: "01", title: "Anfrage senden", desc: "CAD-Datei oder Projektbeschreibung schicken – wir antworten mit einem Angebot in unter 6h.", time: "< 6h Antwort" },
                  { n: "02", title: "Angebot & Freigabe", desc: "Transparenter Festpreis, verbindliche Lieferzeit. Datei-Optimierung kostenlos. Sie geben frei – wir starten sofort.", time: "Sofortiger Start" },
                  { n: "03", title: "FDM-Produktion", desc: "Fertigung mit österreichischem Filament. Schicht für Schicht, bis zu 0,1 mm Präzision.", time: "1–3 Tage" },
                  { n: "04", title: "Qualitätsprüfung & Versand", desc: "Manuelle Prüfung jedes Modells. Express 24–48h österreichweit, DE 2–4 Tage.", time: "Ihr Modell" }].
                  map(({ n, title, desc, time }, i) =>
                  <div key={n} className="relative flex gap-4 pl-12 py-4">
                      <div className={`absolute left-0 top-4 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 z-10
                        ${i === 3 ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/30" : "glass-strong text-muted-foreground"}`}>
                        {n}
                      </div>
                      <div className="flex-1 glass-strong rounded-2xl p-5 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                        <div className="flex items-start justify-between gap-3 mb-1.5">
                          <p className="font-bold text-sm tracking-tight">{title}</p>
                          <span className={`text-[10px] font-bold whitespace-nowrap px-3 py-1 rounded-full shrink-0
                            ${i === 3 ? "bg-primary/10 text-primary" : "bg-muted/60 text-muted-foreground"}`}>{time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MATERIALIEN ───────────────────────────────────────────────── */}
      <section id="materialien" className="py-36 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Technologie & Materialien</p>
                <h2 className="text-4xl md:text-6xl font-black leading-[1.0] tracking-[-0.03em]">
                  FDM-Präzision aus<br />
                  <span className="text-gradient">österreichischer<br />Produktion.</span>
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Als spezialisierter <Link to="/fdm-3d-druck" className="text-primary font-bold hover:underline">FDM-Dienstleister</Link> aus Gunskirchen (OÖ) kombinieren wir modernste Drucktechnologie mit nachhaltigen österreichischen Materialien.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Ausschließlich Filamente österreichischer Hersteller, aus recycelten Industrieabfällen, betrieben mit Ökostrom. CO₂-Fußabdruck bis zu 80 % geringer als Importware.
                </p>
                <Link to="/3d-druck-materialien" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  Alle Materialien & Specs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
              { name: "PLA", badge: "Bestseller", primary: true, desc: "Biologisch abbaubar. Ideal für Architektur- & Präsentationsmodelle.", props: ["Biologisch abbaubar", "0,1 mm Auflösung", "20+ Farben"] },
              { name: "PETG", badge: "Outdoor", primary: false, desc: "UV-beständig und langlebig – für Außen-Exponate.", props: ["UV-beständig", "80°C beständig", "Schlagfest"] },
              { name: "ABS", badge: "Robust", primary: false, desc: "Industriestandard. Schleifbar, lackierbar, hochwertig.", props: ["100°C beständig", "Lackierbar", "Schleifbar"] },
              { name: "TPU", badge: "Flexibel", primary: false, desc: "Elastisch für spezielle Anwendungen. Shore 95A.", props: ["Shore 95A", "500% dehnbar", "Abriebfest"] }].
              map(({ name, badge, primary, desc, props }) =>
              <div key={name} className="rounded-2xl glass-strong p-7 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-3xl font-black tracking-tight">{name}</p>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full
                      ${primary ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-sm" : "bg-muted/60 text-muted-foreground"}`}>
                      {badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="space-y-2">
                    {props.map((p) =>
                  <div key={p} className="flex items-center gap-2.5 text-xs">
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

      {/* ── GOOGLE BEWERTUNGEN ────────────────────────────────────────── */}
      <GoogleReviewsSection />

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section id="faq" className="py-36 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-20 items-start">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-in">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-5">FAQ</p>
                <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-[-0.03em] mb-6">
                  Häufig gestellte<br />Fragen zum<br />
                  <span className="text-gradient">3D-Druck.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                  Nicht gefunden? Rufen Sie uns direkt an – wir helfen sofort.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Ratgeber</p>
                  {[
                  { to: "/ratgeber/kosten-guide", label: "3D-Druck Kosten & Preise" },
                  { to: "/ratgeber/material-guide", label: "Materialien im Vergleich" },
                  { to: "/ratgeber/architekturmodell-guide", label: "Architekturmodell Guide" },
                  { to: "/ratgeber/messemodell-guide", label: "Messemodell Guide" },
                  { to: "/ratgeber/verfahrens-vergleich", label: "3D-Druck vs. Modellbau" }].
                  map(({ to, label }) =>
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
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                  {
                    q: "Was kostet 3D-Druck bei ekdruck?",
                    a: "Unsere Preise beginnen ab €20 pro Modell – abhängig von drei Faktoren: dem gewählten Material (PLA ab €20, PETG ab €25, ABS ab €28, TPU auf Anfrage), dem Druckvolumen in cm³ sowie der gewählten Qualitätsstufe (Standard 0,2 mm, Fine 0,15 mm oder Ultra Fine 0,1 mm). Finishing-Leistungen wie Schleifen, Grundieren oder Lackieren werden separat kalkuliert. Ab 5 gleichartigen Modellen gewähren wir automatisch Mengenrabatte. Ein transparentes, verbindliches Festpreisangebot erhalten Sie bei uns in unter 6 Stunden – ohne versteckte Kosten oder Nachkalkulationen.",
                    link: { to: "/ratgeber/kosten-guide", text: "Vollständiger Preis-Ratgeber →" }
                  },
                  {
                    q: "Wie schnell erhalte ich mein 3D-gedrucktes Modell?",
                    a: "Die Standard-Lieferzeit beträgt 3–5 Werktage österreichweit (versandkostenfrei ab €100 Bestellwert). Mit unserem Express-Service fertigen und liefern wir innerhalb von 24–48 Stunden.",
                    link: null
                  },
                  {
                    q: "Welche Dateiformate werden für 3D-Druck akzeptiert?",
                    a: "Wir akzeptieren alle gängigen 3D-Formate: STL, OBJ, STEP, IGES, 3MF und STP sowie native CAD-Formate aus ArchiCAD, Revit, SolidWorks, Rhino und Autodesk Fusion 360. Haben Sie noch keine fertige CAD-Datei? Kein Problem: Im Rahmen unserer Auftragsberatung erstellen wir das 3D-Modell kostenlos.",
                    link: { to: "/einzelanfertigungen", text: "Zu den Einzelanfertigungen →" }
                  },
                  {
                    q: "Für welche Branchen und Anwendungen eignet sich ekdruck?",
                    a: "ekdruck ist auf vier Kernzielgruppen spezialisiert: Architekten (1:50–1:500), Messeaussteller (Express 24–48h), Produktentwickler (Rapid Prototyping) und Firmenkunden (UID-Rechnung, NDA, Mengenrabatte).",
                    link: null
                  },
                  {
                    q: "Welche Nachbearbeitungs- und Finishing-Optionen gibt es?",
                    a: "Schleifen und Glätten, Grundierung, Lackierung in RAL/Pantone, Aceton-Dampfglättung für ABS, Segmentierung großer Modelle. Jedes Modell wird vor Versand manuell geprüft.",
                    link: null
                  },
                  {
                    q: "Warum österreichisches Filament statt günstigeren Importen?",
                    a: "Österreichische Filamente aus recycelten Industrieabfällen, mit Ökostrom gefertigt. CO₂-Fußabdruck bis zu 80 % geringer. Extrusionstoleranz ±0,02 mm für konsistente Druckergebnisse.",
                    link: { to: "/ratgeber/material-guide", text: "Material-Guide lesen →" }
                  }].
                  map((item, i) =>
                  <AccordionItem key={i} value={`faq-${i}`}
                  className="glass-strong rounded-2xl px-7 hover:shadow-sm transition-all data-[state=open]:shadow-card data-[state=open]:ring-1 data-[state=open]:ring-primary/15">
                      <AccordionTrigger className="text-left font-bold hover:text-primary py-6 text-sm tracking-tight">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-sm">
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

      {/* ── ÜBER UNS + TRUST ──────────────────────────────────────────── */}
      <About />
      <section className="py-20 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* ── REGIONALE PRÄSENZ ─────────────────────────────────────────── */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection animation="fade-in" className="mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Standort & Lieferung</p>
            <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em] mb-5">
              3D-Druck für <span className="text-gradient">ganz Österreich & Deutschland</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              Standort <strong className="text-foreground">Gunskirchen (OÖ)</strong> – 20 Min. von Linz, 1,5h von Wien & Salzburg. Express österreichweit 24–48h.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">🏙️ Städte</h3>
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
                { name: "Villach", url: "/3d-druck-villach" }].
                map(({ name, url }) =>
                <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                className="glass hover:bg-primary/5 hover:text-primary px-4 py-2 rounded-full text-sm transition-all duration-200 font-medium hover:-translate-y-0.5">
                    {name}
                  </Link>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">🇦🇹 Bundesländer</h3>
              <div className="flex flex-wrap gap-2">
                {[
                { name: "Oberösterreich", url: "/3d-druck-oberoesterreich" },
                { name: "Niederösterreich", url: "/3d-druck-niederoesterreich" },
                { name: "Steiermark", url: "/3d-druck-steiermark" },
                { name: "Kärnten", url: "/3d-druck-kaernten" },
                { name: "Tirol", url: "/3d-druck-innsbruck" },
                { name: "Vorarlberg", url: "/3d-druck-vorarlberg" },
                { name: "Burgenland", url: "/3d-druck-burgenland" },
                { name: "Salzburg", url: "/3d-druck-salzburg" }].
                map(({ name, url }) =>
                <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                className="glass hover:bg-primary/5 hover:text-primary px-4 py-2 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5">
                    {name}
                  </Link>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">🇩🇪 Deutschland</h3>
              <div className="flex flex-wrap gap-2">
                {[
                { name: "München", url: "/messemodelle/muenchen" },
                { name: "Stuttgart", url: "/messemodelle/stuttgart" },
                { name: "Nürnberg", url: "/messemodelle/nuernberg" },
                { name: "Augsburg", url: "/messemodelle/augsburg" },
                { name: "Ulm", url: "/messemodelle/ulm" },
                { name: "Freiburg", url: "/messemodelle/freiburg" },
                { name: "Regensburg", url: "/messemodelle/regensburg" },
                { name: "Passau", url: "/messemodelle/passau" }].
                map(({ name, url }) =>
                <Link key={url + name} to={url} onClick={() => window.scrollTo(0, 0)}
                className="glass hover:bg-primary/5 hover:text-primary px-4 py-2 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5">
                    {name}
                  </Link>
                )}
              </div>
              <div className="flex items-center gap-2.5 mt-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-xs text-muted-foreground font-medium">31 Bewertungen · 5,0 / 5,0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINALER CTA ───────────────────────────────────── */}
      <section className="py-32 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale-in">
            <div className="max-w-6xl mx-auto rounded-[2rem] overflow-hidden glass-strong shadow-premium">
              <div className="grid md:grid-cols-2">
                <div className="p-14 md:p-20 relative">
                  <div className="absolute -top-16 -left-16 w-[250px] h-[250px] rounded-full bg-primary/[0.05] blur-[60px] pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2.5 glass text-primary px-5 py-2.5 rounded-full text-xs font-bold mb-10 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Kostenlos & unverbindlich anfragen
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.0] tracking-[-0.03em] mb-8">
                      Bereit für Ihr<br />
                      <span className="text-gradient">nächstes Modell?</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-10 text-sm max-w-md">
                      Angebot in 6 Stunden. Kostenlos. Ohne Callcenter. Direkte Ansprechperson aus Gunskirchen, Österreich.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" variant="cta" className="group rounded-2xl px-10 py-7 font-bold shadow-[0_8px_40px_hsl(var(--primary)/0.3)] text-base">
                        <Link to="/kontakt">
                          Kostenloses Angebot anfragen
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="cta-outline" className="rounded-2xl px-8 py-7">
                        <Link to="/referenzen">Referenzen ansehen</Link>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-6">
                      ✓ Keine Mindestbestellung &nbsp;·&nbsp; ✓ Express 24h &nbsp;·&nbsp; ✓ Made in Austria
                    </p>
                  </div>
                </div>
                <div className="bg-muted/20 border-l border-border/30 p-14 md:p-20 flex flex-col justify-center">
                  <div className="space-y-8">
                    {[
                    { val: "31", label: "Google Bewertungen", sub: "⭐⭐⭐⭐⭐ 5,0 / 5,0" },
                    { val: "6h", label: "Angebots-Garantie", sub: "Kostenlos & unverbindlich" },
                    { val: "24h", label: "Express-Lieferung", sub: "Österreichweit möglich" },
                    { val: "€20", label: "Preis ab", sub: "Keine Mindestbestellung" }].
                    map(({ val, label, sub }) =>
                    <div key={label} className="flex items-center gap-6">
                        <p className="text-4xl font-black text-primary w-20 shrink-0 leading-none tracking-tight">{val}</p>
                        <div>
                          <p className="font-bold text-sm leading-none tracking-tight">{label}</p>
                          <p className="text-xs text-muted-foreground mt-1.5">{sub}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-10 pt-8 border-t border-border/30">
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

      <Contact />
      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </div>
  </>;
};

export default Index;
