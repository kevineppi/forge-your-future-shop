import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
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
  FlaskConical, Wrench, Palette } from
"lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return <>
    <SEOHead
      title="3D-Druck Österreich | Messemodelle & Architektur | ekdruck"
      description="3D-Druck Service Österreich ★ 5.0/5 Google (28 Bewertungen). Messemodelle, Architekturmodelle & Prototypen ab €20. Express 24h."
      keywords="3d druck, 3d druck österreich, 3d drucker, 3d-druck service, messemodelle 3d-druck, architekturmodelle, 3d druck prototypen, 3d druck oberösterreich, 3d-druck dienstleister"
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
    <AggregateRatingSchema ratingValue={5.0} ratingCount={28} bestRating={5} worstRating={5} />
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


      {/* ── LEISTUNGEN — BENTO GRID ───────────────────────────────────── */}
      <section id="leistungen" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Was wir machen</p>
                <h2 className="text-4xl md:text-6xl font-black leading-[1.0] tracking-tight text-balance">
                  3D-Druck Dienstleister<br />
                  <span className="text-primary">für Profis in Österreich</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed lg:text-right text-sm">
                Spezialisiert auf Messemodelle, Architekturmodelle und Einzelanfertigungen – mit Express 24h und Angebot in 6 Stunden.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-6">
            {/* LARGE: Architekturmodelle */}
            <AnimatedSection animation="slide-up" delay={0} className="lg:col-span-3">
              <Link to="/architekturmodelle" className="group block h-full min-h-[400px]">
                <div className="h-full relative rounded-3xl border border-border bg-card overflow-hidden
                  hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]
                  transition-all duration-500 flex flex-col group-hover:-translate-y-1">
                  <div className="relative h-44 bg-muted/60 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,hsl(var(--primary)/0.04)_0px,hsl(var(--primary)/0.04)_1px,transparent_1px,transparent_28px)]" />
                    <div className="w-20 h-20 rounded-2xl bg-background border border-primary/20 flex items-center justify-center
                      group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-sm">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                    <span className="absolute top-4 right-4 text-xs font-bold bg-background border border-border px-3 py-1.5 rounded-full shadow-sm">ab €20</span>
                    <span className="absolute top-4 left-4 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1.5 rounded-full">⚡ Express 24h</span>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-black text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      Architekturmodelle 3D-Druck
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5 flex-1 text-sm">
                      Maßstabsgetreue 3D-gedruckte Architekturmodelle im Maßstab 1:50 bis 1:500 – für Wettbewerbe, Baueinreichungen und Kundenpräsentationen. ArchiCAD, Revit & SolidWorks kompatibel. Bis zu 80 % günstiger als traditioneller Modellbau.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {["1:50–1:500", "CAD-Import", "Wettbewerbsmodelle", "Express 24h"].map((t) =>
                      <span key={t} className="text-xs bg-primary/8 text-primary border border-primary/15 px-2.5 py-1 rounded-full font-medium">{t}</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                      Architekturmodelle entdecken <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Messemodelle */}
              <AnimatedSection animation="slide-up" delay={80} className="flex-1">
                <Link to="/messemodelle" className="group block h-full min-h-[190px]">
                  <div className="h-full relative rounded-3xl bg-primary overflow-hidden
                    hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]
                    transition-all duration-500 flex flex-col p-7 group-hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-black/10 pointer-events-none" />
                    <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5" />
                    <div className="relative flex items-start justify-between mb-auto">
                      <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                        <Presentation className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold bg-white/20 text-primary-foreground border border-white/25 px-3 py-1 rounded-full">ab €30</span>
                    </div>
                    <div className="relative mt-5">
                      <h3 className="font-black text-xl text-primary-foreground leading-tight mb-2">Messemodelle & Exponate</h3>
                      <p className="text-primary-foreground/75 text-sm leading-relaxed mb-4">
                        3D-Druck Messemodelle für Wien, München, Hannover. Angebot heute – Modell morgen.
                      </p>
                      <span className="flex items-center gap-1 text-primary-foreground font-bold text-sm group-hover:gap-2 transition-all">
                        Messemodelle <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Einzelanfertigungen */}
              <AnimatedSection animation="slide-up" delay={160} className="flex-1">
                <Link to="/einzelanfertigungen" className="group block h-full min-h-[190px]">
                  <div className="h-full relative rounded-3xl border border-border bg-card overflow-hidden
                    hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.12)]
                    transition-all duration-500 flex flex-col p-7 group-hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-auto">
                      <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                        <Layers className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full">ab 1 Stück</span>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-black text-xl group-hover:text-primary transition-colors leading-tight mb-2">Einzelanfertigungen</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        Unikate nach Maß – 3D-Modellierung aus Skizzen & Fotos inklusive. Keine Mindestmenge.
                      </p>
                      <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                        Mehr erfahren <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>

          {/* Secondary links */}
          <AnimatedSection animation="fade-in" delay={250}>
            <div className="flex flex-wrap gap-3 max-w-6xl mx-auto">
              {[
              { to: "/firmenkunden", icon: Users, label: "Firmenkunden & B2B", sub: "UID · NDA · Mengenrabatte" },
              { to: "/rapid-prototyping", icon: Zap, label: "Rapid Prototyping", sub: "Prototypen in 24–48h" },
              { to: "/fdm-3d-druck", icon: Award, label: "FDM Technologie", sub: "Materialien & Specs" },
              { to: "/3d-druck-materialien", icon: Layers, label: "Materialien", sub: "PLA · PETG · ABS · TPU" }].
              map(({ to, icon: Icon, label, sub }) =>
              <Link key={to} to={to}
              className="group flex items-center gap-3 bg-muted/50 hover:bg-primary/8 border border-border hover:border-primary/30 rounded-2xl px-5 py-3 transition-all duration-200 hover:-translate-y-0.5">
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

      {/* ── FÜR WEN — ZIELGRUPPEN als horizontale Zeilen ─────────────── */}
      <section id="zielgruppen" className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Ihre Branche</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-balance">
                Für wen ist ekdruck<br />
                <span className="text-primary">die richtige Wahl?</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-3">
              {[
              {
                num: "01",
                icon: Building2,
                title: "Architekten & Planer",
                headline: "Wettbewerbsmodell in 24h statt 3 Wochen",
                desc: "Maßstabsgetreue Architekturmodelle 1:50–1:500. CAD-Datei rein, fertiges Modell raus. Revit, ArchiCAD, SolidWorks – alle Formate. Für Wettbewerbe, Baueinreichungen und Kundenpräsentationen.",
                link: "/architekturmodelle",
                tags: ["1:50–1:500", "CAD-Import", "Wettbewerbsmodelle"],
                dark: false
              },
              {
                num: "02",
                icon: Presentation,
                title: "Messeaussteller",
                headline: "Exponat fehlt 3 Tage vor der Messe? Kein Problem.",
                desc: "Express-Fertigung und Lieferung in 24–48h österreichweit. Messemodelle, Produktexponate und Anschauungsobjekte bis 2m+. Wien, München, Hannover – wir liefern.",
                link: "/messemodelle",
                tags: ["Express 24h", "Bis 2m+", "Österreichweit"],
                dark: true
              },
              {
                num: "03",
                icon: FlaskConical,
                title: "Produktentwickler",
                headline: "Prototyp morgen auf dem Tisch, nicht in 3 Wochen",
                desc: "Rapid Prototyping ab €20. Funktionsmuster, Anschauungsmodelle und Iterationen in einer Woche. Keine Mindestmenge, kein Werkzeugkostenproblem.",
                link: "/rapid-prototyping",
                tags: ["Ab €20", "Keine Mindestmenge", "Iterationen"],
                dark: false
              },
              {
               num: "04",
                icon: Users,
                title: "Firmenkunden & B2B",
                headline: "Präsentationsmodelle mit UID-Rechnung und NDA",
                desc: "Professionelle B2B-Konditionen: UID-konforme Rechnungen, NDA-Vereinbarung, Mengenrabatte ab 5 Stück. Schulungsmodelle, Kundengeschenke und Messeexponate – maßgeschneidert für Unternehmen.",
                link: "/firmenkunden",
                tags: ["UID-Rechnung", "NDA", "Mengenrabatt"],
                dark: false
              }].
              map(({ num, icon: Icon, title, headline, desc, link, tags, dark }, i) =>
              <AnimatedSection key={num} animation="slide-up" delay={i * 60}>
                  <Link to={link} className="group block">
                    <div className={`rounded-2xl border p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5
                      hover:shadow-[0_12px_40px_-10px_hsl(var(--primary)/0.15)]
                      ${dark ?
                  "bg-foreground border-foreground text-background hover:border-foreground" :
                  "bg-card border-border hover:border-primary/40"}`
                  }>
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Number + Icon */}
                        <div className="flex items-center gap-4 md:w-16 shrink-0">
                          <span className={`text-4xl font-black leading-none tabular-nums
                            ${dark ? "text-background/20" : "text-primary/15"}`}>{num}</span>
                        </div>
                        {/* Icon badge */}
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0
                          ${dark ? "bg-background/15 group-hover:bg-background/25" : "bg-primary/10 group-hover:bg-primary/20"}
                          transition-colors`}>
                          <Icon className={`w-6 h-6 ${dark ? "text-background" : "text-primary"}`} />
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${dark ? "text-background/50" : "text-muted-foreground"}`}>{title}</p>
                          <h3 className={`font-black text-lg md:text-xl leading-tight mb-2 ${dark ? "text-background" : "group-hover:text-primary"} transition-colors`}>
                            {headline}
                          </h3>
                          <p className={`text-sm leading-relaxed ${dark ? "text-background/70" : "text-muted-foreground"}`}>{desc}</p>
                        </div>
                        {/* Tags + CTA */}
                        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                          <div className="flex flex-wrap gap-1.5 md:justify-end">
                            {tags.map((t) =>
                          <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap
                                ${dark ? "bg-background/15 text-background border border-background/20" : "bg-primary/8 text-primary border border-primary/15"}`}>
                                {t}
                              </span>
                          )}
                          </div>
                          <span className={`flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all
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

      {/* ── EINZIGER MID-PAGE CTA ────────────────────────────────────────
            Nur 1 klarer Handlungsaufruf in der Seitenmitte
         ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-6xl mx-auto rounded-3xl border border-primary/20 bg-primary/5 p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Ihr nächster Schritt</p>
                  <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight mb-4 text-balance">
                    Angebot in unter<br />
                    <span className="text-primary">6 Stunden</span> –<br />
                    kostenlos.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                    Beschreiben Sie uns kurz Ihr Projekt. Wir antworten schnell, unverbindlich und persönlich – kein Callcenter, kein Autoresponder.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="group rounded-2xl px-8 font-bold">
                      <Link to="/kontakt">
                        <MessageSquare className="mr-2 w-4 h-4" />
                        Jetzt anfragen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 border-primary/30 hover:bg-primary/8">
                      <a href="tel:+4367655171897">
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
                  <div key={text} className="flex items-start gap-3 bg-background rounded-2xl border border-border p-4">
                      <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-none">{text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WARUM EKDRUCK — VERGLEICH ─────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection animation="fade-in">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Warum ekdruck?</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight mb-6 text-balance">
                3D-Druck schlägt<br />traditionellen<br />
                <span className="text-primary">Modellbau.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                Wo Handmodellbau teuer, langsam und einmalig ist, liefert FDM 3D-Druck präzise, reproduzierbare Ergebnisse zu einem Bruchteil der Kosten.{" "}
                <Link to="/ratgeber/verfahrens-vergleich" className="text-primary font-bold hover:underline">Vergleich lesen →</Link>
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                { val: "bis 95%", label: "günstiger", sub: "vs. Handmodellbau" },
                { val: "24h", label: "Express", sub: "österreichweit" },
                { val: "0,1mm", label: "Präzision", sub: "Schichtauflösung" }].
                map(({ val, label, sub }) =>
                <div key={label} className="rounded-2xl border border-border bg-card p-5 text-center hover:border-primary/30 hover:shadow-sm transition-all">
                    <p className="text-3xl font-black text-primary leading-none">{val}</p>
                    <p className="text-sm font-bold mt-1">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={120} className="space-y-3">
              {[
              { icon: TrendingDown, title: "Kein Werkzeugkostenproblem", desc: "Spritzguss-Werkzeuge kosten ab €10.000. Bei ekdruck zahlen Sie nur für Ihr Modell – ab €20.", accent: false },
              { icon: Clock, title: "Schneller als jeder Handmodellbauer", desc: "Traditioneller Modellbau: 1–4 Wochen. ekdruck Express: 24–48 Stunden österreichweit.", accent: true },
              { icon: Repeat2, title: "Beliebig reproduzierbar", desc: "Jede Kopie ist digital identisch. Korrekturen kosten nur eine Dateiänderung.", accent: false },
              { icon: Leaf, title: "Made in Austria, nachhaltig", desc: "Österreichische Filamente aus Industrieabfällen. Ökostrom. CO₂-Fußabdruck 80% geringer.", accent: false }].
              map(({ icon: Icon, title, desc, accent }) =>
              <div key={title} className={`flex gap-4 p-5 rounded-2xl border transition-all duration-200
                  ${accent ?
              "bg-primary border-primary shadow-[0_4px_20px_hsl(var(--primary)/0.25)]" :
              "bg-card border-border hover:border-primary/30 hover:shadow-sm"}`
              }>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5
                    ${accent ? "bg-white/20" : "bg-primary/10"}`}>
                    <Icon className={`w-5 h-5 ${accent ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm mb-1 ${accent ? "text-primary-foreground" : ""}`}>{title}</p>
                    <p className={`text-sm leading-relaxed ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{desc}</p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>

          {/* Comparison Table */}
          <AnimatedSection animation="fade-in" delay={200} className="mt-20 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
                <div className="p-5 text-sm font-semibold text-muted-foreground">Kriterium</div>
                <div className="p-5 font-bold text-primary border-x border-border flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  ekdruck 3D-Druck
                </div>
                <div className="p-5 text-muted-foreground text-sm font-semibold text-center">Traditionell</div>
              </div>
              {[
              { label: "Kosten (Modell)", icon: TrendingDown, good: "ab €20", bad: "€200–€10.000+" },
              { label: "Lieferzeit", icon: Clock, good: "24h Express", bad: "1–4 Wochen" },
              { label: "Komplexe Geometrien", icon: Layers, good: "Unbegrenzt", bad: "Stark limitiert" },
              { label: "Wiederholbarkeit", icon: Repeat2, good: "1:1 identisch", bad: "Handarbeit variiert" },
              { label: "Gewicht", icon: Zap, good: "Bis 80% leichter", bad: "Massiv & schwer" }].
              map(({ label, icon: Icon, good, bad }) =>
              <div key={label} className="grid grid-cols-3 border-t border-border hover:bg-muted/30 transition-colors">
                  <div className="p-5 font-medium text-sm flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-primary shrink-0 opacity-60" />{label}
                  </div>
                  <div className="p-5 text-center border-x border-border bg-primary/3">
                    <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                      <Check className="w-4 h-4" />{good}
                    </span>
                  </div>
                  <div className="p-5 text-center">
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

      {/* ── QUALITÄT & FINISHING — Split-Layout ──────────────────────── */}
      <section id="qualitaet" className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Druckqualitäten: linke Leiste + rechts gestapelte Zeilen */}
            <AnimatedSection animation="fade-in" className="mb-16">
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                {/* Sticky Header */}
                <div className="lg:col-span-2 lg:sticky lg:top-8">
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Druckqualität</p>
                  <h2 className="text-3xl md:text-4xl font-black leading-[1.05] tracking-tight mb-4">
                    Welche Qualitätsstufe<br />
                    <span className="text-primary">brauche ich?</span>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Vom schnellen Erstmuster bis zum präsentationsreifen Wettbewerbsmodell – wählen Sie die passende Schichtstärke.
                  </p>
                  <div className="text-xs text-muted-foreground border border-border rounded-xl p-4 bg-muted/30">
                    <strong className="text-foreground block mb-1">Nicht sicher?</strong>
                    Wir empfehlen kostenlos die optimale Qualitätsstufe für Ihr Projekt.
                  </div>
                </div>
                {/* Quality tiers as stacked rows */}
                <div className="lg:col-span-3 space-y-3">
                  {[
                  { level: "Standard", res: "0,2 mm", desc: "Für Funktionsmuster und erste Iterationen. Sichtbare Schichtlinien – günstig und schnell.", use: "Prototypen, Erstmuster", featured: false },
                  { level: "Fine", res: "0,15 mm", desc: "Unser meistgewähltes Setting. Sehr gute Oberflächenqualität – für professionelle Präsentationen und Messemodelle.", use: "Architekturmodelle, Messe", featured: true },
                  { level: "Ultra Fine", res: "0,1 mm", desc: "Höchste Präzision. Minimalste Schichtlinien für Wettbewerbsmodelle und sichtbare Feinstrukturen.", use: "Wettbewerbe, Galerien", featured: false }].
                  map(({ level, res, desc, use, featured }) =>
                  <div key={level} className={`flex items-start gap-5 p-5 rounded-2xl border transition-all
                      ${featured ? "bg-primary/5 border-primary/25" : "bg-card border-border hover:border-primary/20"}`}>
                      <div className={`shrink-0 w-16 text-center rounded-xl border py-2.5
                        ${featured ? "bg-primary text-primary-foreground border-primary" : "bg-muted border-border"}`}>
                        <p className="text-base font-black leading-none">{res}</p>
                        <p className="text-[9px] font-semibold mt-1 opacity-60 uppercase tracking-wide">Schicht</p>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-black text-base">{level}</p>
                          {featured && <span className="text-[10px] bg-primary text-primary-foreground font-bold px-2 py-0.5 rounded-full">Beliebteste Wahl</span>}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-1">{desc}</p>
                        <p className="text-xs text-primary font-semibold">→ {use}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* Finishing: volle Breite, dunkler Hintergrund */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="rounded-2xl bg-foreground text-background p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50 mb-2">Nachbearbeitung</p>
                    <h3 className="font-black text-2xl text-background">Fertig zum Auspacken &amp; Präsentieren</h3>
                    <p className="text-background/60 text-sm mt-1">Wir liefern das Modell direkt präsentationsbereit – auf Wunsch.</p>
                  </div>
                  <Link to="/einzelanfertigungen" className="text-background font-bold text-sm border border-background/20 hover:bg-background/10 px-4 py-2 rounded-xl transition-colors flex items-center gap-1 whitespace-nowrap shrink-0">
                    Finishing anfragen <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                  { icon: ScanLine, title: "Schleifen & Glätten", desc: "Schichtlinien entfernen. Lackierfertige Oberfläche." },
                  { icon: Paintbrush, title: "Lackieren (RAL/Pantone)", desc: "Jede Farbe nach Wunsch. Matt oder glänzend." },
                  { icon: Palette, title: "Grundierung", desc: "Professionelle Vorbereitung. Poren versiegelt." },
                  { icon: Wrench, title: "Aceton-Dampfglätte", desc: "Für ABS: fast spritzgussgleiche Oberfläche." },
                  { icon: Ruler, title: "Segmentierung", desc: "Große Modelle mehrteilig, professionell verklebt." },
                  { icon: Award, title: "Qualitätsprüfung", desc: "Jedes Modell wird vor dem Versand geprüft." }].
                  map(({ icon: Icon, title, desc }) =>
                  <div key={title} className="flex gap-3 p-4 rounded-xl bg-background/8 hover:bg-background/12 border border-background/10 transition-all">
                      <div className="w-8 h-8 bg-background/15 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-background" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-background">{title}</p>
                        <p className="text-xs text-background/60 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROZESS — vertikale Zeitleiste ───────────────────────────── */}
      <section className="py-24 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
            {/* Left: header */}
            <AnimatedSection animation="fade-in" className="lg:col-span-2">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Wie es funktioniert</p>
              <h2 className="text-3xl md:text-4xl font-black leading-[1.05] tracking-tight mb-4">
                Von der Anfrage zum<br />
                <span className="text-primary">fertigen Modell</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Vier Schritte, kein Bürokratie-Chaos, keine Preisüberraschungen. Durchschnittliche Gesamtdauer: 3–5 Werktage.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 text-primary px-4 py-2.5 rounded-xl text-sm font-bold">
                <Zap className="w-4 h-4" />
                Express: auch in 24h möglich
              </div>
            </AnimatedSection>

            {/* Right: timeline */}
            <AnimatedSection animation="slide-up" delay={100} className="lg:col-span-3">
              <div className="relative">
                {/* connecting line */}
                <div className="absolute left-5 top-6 bottom-6 w-px bg-border" />
                <div className="space-y-2">
                  {[
                  { n: "01", title: "Anfrage senden", desc: "CAD-Datei oder Projektbeschreibung schicken – wir antworten mit einem Angebot in unter 6h. STL, OBJ, STEP, ArchiCAD, Revit, Fotos, Skizzen.", time: "< 6h Antwort" },
                  { n: "02", title: "Angebot & Freigabe", desc: "Transparenter Festpreis, verbindliche Lieferzeit. Datei-Optimierung kostenlos. Sie geben frei – wir starten sofort.", time: "Sofortiger Start" },
                  { n: "03", title: "FDM-Produktion", desc: "Fertigung mit österreichischem Filament. Schicht für Schicht, bis zu 0,1 mm Präzision. Auf Wunsch inklusive Nachbearbeitung.", time: "1–3 Tage" },
                  { n: "04", title: "Qualitätsprüfung & Versand", desc: "Manuelle Prüfung jedes Modells. Express-Lieferung 24–48h österreichweit, DE 2–4 Tage. Oder persönliche Abholung in Gunskirchen.", time: "Ihr Modell" }].
                  map(({ n, title, desc, time }, i) =>
                  <div key={n} className="relative flex gap-4 pl-12 py-4">
                      {/* node */}
                      <div className={`absolute left-0 top-4 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 z-10
                        ${i === 3 ? "bg-primary text-primary-foreground shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]" : "bg-background border-2 border-border text-muted-foreground"}`}>
                        {n}
                      </div>
                      <div className="flex-1 bg-background rounded-2xl border border-border p-4 hover:border-primary/25 transition-colors">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <p className="font-bold text-sm">{title}</p>
                          <span className={`text-[10px] font-bold whitespace-nowrap px-2 py-0.5 rounded-full shrink-0
                            ${i === 3 ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{time}</span>
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
      <section id="materialien" className="py-28 md:py-32 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Technologie & Materialien</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight text-balance">
                  FDM-Präzision aus<br />
                  <span className="text-primary">österreichischer<br />Produktion.</span>
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Als spezialisierter <Link to="/fdm-3d-druck" className="text-primary font-bold hover:underline">FDM-Dienstleister</Link> aus Gunskirchen (OÖ) kombinieren wir modernste Drucktechnologie mit nachhaltigen österreichischen Materialien – Schicht für Schicht, auf 0,1 mm genau.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Ausschließlich Filamente österreichischer Hersteller, aus recycelten Industrieabfällen, betrieben mit Ökostrom. CO₂-Fußabdruck bis zu 80 % geringer als Importware.
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
              { name: "TPU", badge: "Flexibel", primary: false, desc: "Elastisch für spezielle Anwendungen. Shore 95A.", props: ["Shore 95A", "500% dehnbar", "Abriebfest"] }].
              map(({ name, badge, primary, desc, props }) =>
              <div key={name} className="rounded-2xl border border-border bg-background p-6 hover:border-primary/30 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-black">{name}</p>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full
                      ${primary ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border"}`}>
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

      {/* ── GOOGLE BEWERTUNGEN ────────────────────────────────────────── */}
      <GoogleReviewsSection />

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section id="faq" className="py-28 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-in">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">FAQ</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight mb-5 text-balance">
                  Häufig gestellte<br />Fragen zum<br />
                  <span className="text-primary">3D-Druck.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  Nicht gefunden? Unser KI-Berater antwortet sofort (Button unten rechts) – oder direkt anrufen.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Ratgeber</p>
                  {[
                  { to: "/ratgeber/kosten-guide", label: "3D-Druck Kosten & Preise" },
                  { to: "/ratgeber/material-guide", label: "Materialien im Vergleich" },
                  { to: "/ratgeber/architekturmodell-guide", label: "Architekturmodell Guide" },
                  { to: "/ratgeber/messemodell-guide", label: "Messemodell Guide" },
                  { to: "/ratgeber/verfahrens-vergleich", label: "3D-Druck vs. Modellbau" }].
                  map(({ to, label }) =>
                  <Link key={to} to={to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      {label}
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-3">
              <AnimatedSection animation="slide-up" delay={100}>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                  {
                    q: "Was kostet 3D-Druck bei ekdruck?",
                    a: "Unsere Preise beginnen ab €20 pro Modell – abhängig von drei Faktoren: dem gewählten Material (PLA ab €20, PETG ab €25, ABS ab €28, TPU auf Anfrage), dem Druckvolumen in cm³ sowie der gewählten Qualitätsstufe (Standard 0,2 mm, Fine 0,15 mm oder Ultra Fine 0,1 mm). Finishing-Leistungen wie Schleifen, Grundieren oder Lackieren werden separat kalkuliert. Ab 5 gleichartigen Modellen gewähren wir automatisch Mengenrabatte. Ein transparentes, verbindliches Festpreisangebot erhalten Sie bei uns in unter 6 Stunden – ohne versteckte Kosten oder Nachkalkulationen.",
                    link: { to: "/ratgeber/kosten-guide", text: "Vollständiger Preis-Ratgeber →" }
                  },
                  {
                    q: "Wie schnell erhalte ich mein 3D-gedrucktes Modell?",
                    a: "Die Standard-Lieferzeit beträgt 3–5 Werktage österreichweit (versandkostenfrei ab €100 Bestellwert). Mit unserem Express-Service fertigen und liefern wir innerhalb von 24–48 Stunden – ideal für kurzfristige Messetermine, Wettbewerbsabgaben oder dringende Kundenpräsentationen. Nach Deutschland liefern wir in 2–4 Werktagen via DHL oder GLS. Persönliche Abholung ist ebenfalls möglich – wir befinden uns in Gunskirchen, Oberösterreich, nur 20 Minuten von Linz und gut erreichbar von Wien und Salzburg.",
                    link: null
                  },
                  {
                    q: "Welche Dateiformate werden für 3D-Druck akzeptiert?",
                    a: "Wir akzeptieren alle gängigen 3D-Formate: STL, OBJ, STEP, IGES, 3MF und STP sowie native CAD-Formate aus ArchiCAD, Revit, SolidWorks, Rhino und Autodesk Fusion 360. Haben Sie noch keine fertige CAD-Datei? Kein Problem: Im Rahmen unserer Auftragsberatung erstellen wir das 3D-Modell kostenlos nach Ihren technischen Zeichnungen, Skizzen, Fotos oder mündlicher Beschreibung. Dieser Service ist vollständig im Projektpreis enthalten – kein separates Modellierungshonorar.",
                    link: { to: "/einzelanfertigungen", text: "Zu den Einzelanfertigungen →" }
                  },
                  {
                    q: "Für welche Branchen und Anwendungen eignet sich ekdruck?",
                    a: "ekdruck ist auf vier Kernzielgruppen spezialisiert: Architekten und Planer erhalten maßstabsgetreue Architekturmodelle im Maßstab 1:50 bis 1:500 für Wettbewerbe, Baueinreichungen und Kundenpräsentationen. Messeaussteller profitieren von unserem Express-Service und erhalten Exponate und Anschauungsmodelle in 24–48 Stunden. Produktentwickler nutzen unseren Rapid-Prototyping-Service für schnelle Iterationszyklen ohne Mindestmenge. Firmenkunden erhalten B2B-konforme Leistungen: UID-Rechnung, NDA auf Wunsch, Mengenrabatte und persönliche Ansprechperson – alles aus einer Hand.",
                    link: null
                  },
                  {
                    q: "Welche Nachbearbeitungs- und Finishing-Optionen gibt es?",
                    a: "Für ein präsentationsreifes Ergebnis bieten wir ein vollständiges Finishing-Paket: Schleifen und Glätten entfernt sichtbare Schichtlinien und schafft eine lackierfertige Oberfläche. Grundierung versiegelt Poren und sorgt für gleichmäßige Farbhaftung. Lackierung erfolgt in allen RAL- und Pantone-Farbtönen, matt oder glänzend. Für ABS-Modelle bieten wir Aceton-Dampfglättung – das Ergebnis kommt spritzgussähnlicher Qualität sehr nahe. Große Modelle werden segmentiert und professionell verklebt. Jedes Modell wird vor dem Versand einer manuellen Qualitätsprüfung unterzogen.",
                    link: null
                  },
                  {
                    q: "Warum österreichisches Filament statt günstigeren Importen?",
                    a: "Qualität beginnt beim Rohmaterial. Österreichische Filamente werden aus zertifizierten, recycelten Industrieabfällen unter strengen Qualitätsstandards gefertigt und ausschließlich mit Ökostrom produziert. Der CO₂-Fußabdruck liegt damit bis zu 80 % niedriger als bei Importware aus Asien. Technisch bedeutet das: gleichmäßige Extrusionstoleranz von ±0,02 mm für konsistente Druckergebnisse, deutlich geringere Fehlerquote im Druckprozess und höhere Oberflächenqualität. Für Sie bedeutet das: Modelle, die beim ersten Versuch sitzen – kein Nachdrucken, keine Verzögerung.",
                    link: { to: "/ratgeber/material-guide", text: "Material-Guide lesen →" }
                  }].
                  map((item, i) =>
                  <AccordionItem key={i} value={`faq-${i}`}
                  className="bg-card border border-border rounded-2xl px-6 hover:border-primary/30 transition-colors data-[state=open]:border-primary/40">
                      <AccordionTrigger className="text-left font-bold hover:text-primary py-5 text-sm">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                        {item.a}{item.link && <> <Link to={item.link.to} className="text-primary font-bold hover:underline ml-1">{item.link.text} →</Link></>}
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
      <section className="py-16 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* ── REGIONALE PRÄSENZ ─────────────────────────────────────────── */}
      <section className="py-20 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection animation="fade-in" className="mb-10">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Standort & Lieferung</p>
            <h2 className="text-3xl md:text-4xl font-black leading-[1.05] mb-4 text-balance">
              3D-Druck für <span className="text-primary">ganz Österreich & Deutschland</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              Standort <strong className="text-foreground">Gunskirchen (OÖ)</strong> – 20 Min. von Linz, 1,5h von Wien & Salzburg. Express österreichweit 24–48h, Deutschland 2–4 Werktage.
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
                { name: "Villach", url: "/3d-druck-villach" }].
                map(({ name, url }) =>
                <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors font-medium">
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
                { name: "Tirol", url: "/3d-druck-innsbruck" },
                { name: "Vorarlberg", url: "/3d-druck-vorarlberg" },
                { name: "Burgenland", url: "/3d-druck-burgenland" },
                { name: "Salzburg", url: "/3d-druck-salzburg" }].
                map(({ name, url }) =>
                <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors">
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
                { name: "Augsburg", url: "/messemodelle/augsburg" },
                { name: "Ulm", url: "/messemodelle/ulm" },
                { name: "Freiburg", url: "/messemodelle/freiburg" },
                { name: "Regensburg", url: "/messemodelle/regensburg" },
                { name: "Passau", url: "/messemodelle/passau" }].
                map(({ name, url }) =>
                <Link key={url + name} to={url} onClick={() => window.scrollTo(0, 0)}
                className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors">
                    {name}
                  </Link>
                )}
              </div>
              <div className="flex items-center gap-2.5 mt-5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <span className="text-xs text-muted-foreground font-medium">28 Bewertungen · 5,0 / 5,0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINALER CTA — NUR EINMAL, GANZ AM ENDE ───────────────────────
            Einziger zweiter CTA. Klar, ruhig, ohne Druck.
         ─────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale-in">
            <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-16">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold mb-8 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Kostenlos & unverbindlich anfragen
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight mb-6 text-balance">
                    Bereit für Ihr<br />
                    <span className="text-primary">nächstes Modell?</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                    Angebot in 6 Stunden. Kostenlos. Ohne Callcenter. Direkte Ansprechperson aus Gunskirchen, Österreich.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="group rounded-2xl px-8 font-bold shadow-[0_4px_20px_hsl(var(--primary)/0.25)] hover:shadow-[0_8px_30px_hsl(var(--primary)/0.35)] transition-shadow">
                      <Link to="/kontakt">
                        Kostenloses Angebot anfragen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 hover:border-primary/40">
                      <Link to="/referenzen">Referenzen ansehen</Link>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-5">
                    ✓ Keine Mindestbestellung &nbsp;·&nbsp; ✓ Express 24h &nbsp;·&nbsp; ✓ Made in Austria
                  </p>
                </div>
                <div className="bg-muted/40 border-l border-border p-12 md:p-16 flex flex-col justify-center">
                  <div className="space-y-6">
                    {[
                    { val: "28", label: "Google Bewertungen", sub: "⭐⭐⭐⭐⭐ 5,0 / 5,0" },
                    { val: "6h", label: "Angebots-Garantie", sub: "Kostenlos & unverbindlich" },
                    { val: "24h", label: "Express-Lieferung", sub: "Österreichweit möglich" },
                    { val: "€20", label: "Preis ab", sub: "Keine Mindestbestellung" }].
                    map(({ val, label, sub }) =>
                    <div key={label} className="flex items-center gap-5">
                        <p className="text-3xl font-black text-primary w-16 shrink-0 leading-none">{val}</p>
                        <div>
                          <p className="font-bold text-sm leading-none">{label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
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
      <ExitIntentPopup />
    </div>
  </>;
};

export default Index;