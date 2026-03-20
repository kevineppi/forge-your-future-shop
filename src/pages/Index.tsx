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
  FlaskConical, Wrench, Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return <>
    <SEOHead
      title="3D-Druck Messemodelle & Architekturmodelle | Express 24h | ekdruck.at"
      description="★ 5/5 Google | Professionelle 3D-gedruckte Messemodelle & Architekturmodelle ab €20. Angebot in 6h, Express 24h ✓ Made in Austria. Jetzt kostenlos anfragen!"
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
    <AggregateRatingSchema ratingValue={5.0} ratingCount={28} bestRating={5} worstRating={5} />
    <FAQSchema faqs={[
      { question: "Was kostet 3D-Druck bei ekdruck?", answer: "Unsere Preise starten ab €20 pro Modell. Die genauen Kosten hängen von drei Faktoren ab: Material (PLA, PETG, ABS oder TPU), Druckvolumen und gewählter Qualitätsstufe. Express-Service ist gegen einen Aufpreis jederzeit buchbar. Mengenrabatte gewähren wir ab 5 Einheiten. Ein transparentes, individuelles Angebot erhalten Sie bei uns in unter 6 Stunden." },
      { question: "Wie schnell erhalte ich mein 3D-gedrucktes Teil?", answer: "Standard-Lieferung beträgt 3–5 Werktage österreichweit, inklusive versandkostenfreier Lieferung ab €100 Bestellwert. Mit unserem Express-Service fertigen und liefern wir bereits in 24–48 Stunden – ideal für kurzfristige Messe-Deadlines oder Wettbewerbsabgaben. Nach Deutschland liefern wir in 2–4 Werktagen via DHL oder GLS." },
      { question: "Welche Dateiformate werden akzeptiert?", answer: "Wir akzeptieren alle gängigen 3D-Formate: STL, OBJ, STEP, IGES, 3MF, STP sowie native CAD-Formate aus ArchiCAD, Revit, SolidWorks und Fusion 360. Keine CAD-Datei vorhanden? Kein Problem – wir erstellen das 3D-Modell nach Ihren Skizzen, Fotos oder technischen Zeichnungen kostenlos im Rahmen der Auftragsberatung." },
      { question: "Für welche Branchen und Anwendungsfälle ist ekdruck geeignet?", answer: "Unsere Kernzielgruppen sind Architekten und Planer (maßstabsgetreue Architekturmodelle 1:50–1:500), Messeaussteller (Exponate und Anschauungsmodelle für Messen), Künstler und Galerien (Skulpturen und Dekorationsobjekte) sowie Firmenkunden (Präsentationsmodelle, Schulungsmodelle, Messe-Exponate)." },
      { question: "Warum österreichisches Filament statt günstigeren Importen?", answer: "Österreichische Filamente werden aus recycelten Industrieabfällen unter strengen Qualitätsstandards gefertigt, betrieben mit Ökostrom und geprüft auf gleichmäßige Extrusionsqualität. Das bedeutet konsistente Druckergebnisse, geringere Fehlerquote, und ein CO₂-Fußabdruck um bis zu 80 % niedriger als bei Importware aus Asien." },
      { question: "Welche Nachbearbeitungs- und Finishing-Optionen gibt es?", answer: "ekdruck bietet ein breites Spektrum an Nachbearbeitung: Schleifen und Glätten für glatte Oberflächen, Grundieren als Vorbereitung für Lackierung, Lackieren in RAL-Farben oder Sonderfarben, Aceton-Dampf-Glättung für ABS-Modelle sowie Klebeverbindungen für Segmentmodelle." },
    ]} />
    <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <div className="border-y border-border bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center divide-x divide-border">
            {[
              { icon: Star,    text: "5,0 Google",       sub: "28 Bewertungen" },
              { icon: Zap,     text: "Express 24h",      sub: "Lieferung" },
              { icon: MapPin,  text: "Made in Austria",  sub: "Gunskirchen, OÖ" },
              { icon: Clock,   text: "Angebot in 6h",    sub: "Kostenlos" },
              { icon: Package, text: "Versandkostenfrei",sub: "ab €100" },
            ].map(({ icon: Icon, text, sub }, i) => (
              <div key={i} className="flex items-center gap-2.5 px-6 py-4 first:pl-0 last:pr-0">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">{text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LEISTUNGEN — BENTO GRID ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
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
                      {["1:50–1:500", "CAD-Import", "Wettbewerbsmodelle", "Express 24h"].map(t => (
                        <span key={t} className="text-xs bg-primary/8 text-primary border border-primary/15 px-2.5 py-1 rounded-full font-medium">{t}</span>
                      ))}
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
                { to: "/firmenkunden",        icon: Users,    label: "Firmenkunden & B2B",  sub: "UID · NDA · Mengenrabatte" },
                { to: "/rapid-prototyping",   icon: Zap,      label: "Rapid Prototyping",   sub: "Prototypen in 24–48h" },
                { to: "/fdm-3d-druck",        icon: Award,    label: "FDM Technologie",     sub: "Materialien & Specs" },
                { to: "/3d-druck-materialien",icon: Layers,   label: "Materialien",         sub: "PLA · PETG · ABS · TPU" },
              ].map(({ to, icon: Icon, label, sub }) => (
                <Link key={to} to={to}
                  className="group flex items-center gap-3 bg-muted/50 hover:bg-primary/8 border border-border hover:border-primary/30 rounded-2xl px-5 py-3 transition-all duration-200 hover:-translate-y-0.5">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-bold group-hover:text-primary transition-colors leading-none">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all ml-auto" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FÜR WEN IST EKDRUCK? — ZIELGRUPPEN ───────────────────────────
          Neue Sektion: Kunden sehen sich sofort wieder → Engagement ↑
          SEO: "3D-Druck Architekt", "Messestand 3D-Druck", "Prototyp 3D"
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="mb-14">
            <div className="max-w-6xl mx-auto">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Für wen?</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-balance">
                Wer bestellt bei ekdruck?
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
                Vier Berufsgruppen – ein gemeinsamer Nenner: professionelle Ergebnisse, schnell und bezahlbar.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Architekten & Planer",
                link: "/architekturmodelle",
                problem: "Deadlines für Wettbewerbe sind brutal. Der Modellbauer braucht 3 Wochen.",
                solution: "Wettbewerbsmodelle in 24–72h. CAD-Datei rein – fertiges Modell raus.",
                tags: ["1:50–1:500", "Wettbewerbe", "Baueinreichung"],
                accent: false,
              },
              {
                icon: Presentation,
                title: "Messeaussteller",
                link: "/messemodelle",
                problem: "Die Messe beginnt in 3 Tagen. Das Exponat fehlt noch.",
                solution: "Express-Fertigung & Lieferung innerhalb von 24–48h. Österreichweit.",
                tags: ["Express 24h", "Bis 2m+", "Messen & Events"],
                accent: true,
              },
              {
                icon: FlaskConical,
                title: "Produktentwickler",
                link: "/rapid-prototyping",
                problem: "Für jeden Prototypen-Zyklus wochenlang warten und tausende Euro ausgeben.",
                solution: "Rapid Prototyping ab €20. Mehrere Iterationen in einer Woche möglich.",
                tags: ["Rapid Prototyping", "Funktionsmuster", "Iterationen"],
                accent: false,
              },
              {
                icon: Users,
                title: "Firmenkunden & B2B",
                link: "/firmenkunden",
                problem: "Präsentationsmodelle für Kunden, Schulungen und Messen in Serienqualität.",
                solution: "B2B-Konditionen, UID-Rechnung, NDA-Vereinbarung, Mengenrabatte ab 5 Stück.",
                tags: ["B2B Rechnung", "NDA", "Mengenrabatt"],
                accent: false,
              },
            ].map(({ icon: Icon, title, link, problem, solution, tags, accent }) => (
              <AnimatedSection key={title} animation="slide-up" delay={0}>
                <Link to={link} className="group block h-full">
                  <div className={`h-full rounded-3xl border p-7 flex flex-col transition-all duration-300
                    hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.18)]
                    ${accent
                      ? "bg-primary border-primary text-primary-foreground"
                      : "bg-background border-border hover:border-primary/40"
                    }`}>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6
                      ${accent ? "bg-white/20" : "bg-primary/10 group-hover:bg-primary/20"} transition-colors`}>
                      <Icon className={`w-6 h-6 ${accent ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <h3 className={`font-black text-lg mb-3 leading-tight ${accent ? "text-primary-foreground" : "group-hover:text-primary"} transition-colors`}>
                      {title}
                    </h3>
                    {/* Problem */}
                    <div className={`text-xs mb-3 p-3 rounded-xl italic leading-relaxed
                      ${accent ? "bg-black/10 text-primary-foreground/70" : "bg-muted/60 text-muted-foreground"}`}>
                      „{problem}"
                    </div>
                    {/* Solution */}
                    <p className={`text-sm leading-relaxed mb-5 flex-1 ${accent ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                      <strong className={accent ? "text-primary-foreground" : "text-foreground"}>ekdruck: </strong>
                      {solution}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tags.map(t => (
                        <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium
                          ${accent ? "bg-white/15 text-primary-foreground border border-white/20" : "bg-primary/8 text-primary border border-primary/15"}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className={`flex items-center gap-1 font-bold text-sm group-hover:gap-2 transition-all
                      ${accent ? "text-primary-foreground" : "text-primary"}`}>
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
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
                    { icon: Check, text: "Keine versteckten Kosten",    sub: "Transparentes Festpreisangebot" },
                    { icon: Check, text: "Persönliche Beratung",        sub: "Direkte Ansprechperson – kein Callcenter" },
                    { icon: Check, text: "Express 24h verfügbar",       sub: "Für kurzfristige Messe-Deadlines" },
                    { icon: Check, text: "Kostenlose Datei-Optimierung",sub: "STL, OBJ, STEP, ArchiCAD, Revit" },
                  ].map(({ icon: Icon, text, sub }) => (
                    <div key={text} className="flex items-start gap-3 bg-background rounded-2xl border border-border p-4">
                      <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-none">{text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                      </div>
                    </div>
                  ))}
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
                  { val: "bis 95%", label: "günstiger",  sub: "vs. Handmodellbau" },
                  { val: "24h",     label: "Express",    sub: "österreichweit" },
                  { val: "0,1mm",   label: "Präzision",  sub: "Schichtauflösung" },
                ].map(({ val, label, sub }) => (
                  <div key={label} className="rounded-2xl border border-border bg-card p-5 text-center hover:border-primary/30 hover:shadow-sm transition-all">
                    <p className="text-3xl font-black text-primary leading-none">{val}</p>
                    <p className="text-sm font-bold mt-1">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={120} className="space-y-3">
              {[
                { icon: TrendingDown, title: "Kein Werkzeugkostenproblem",        desc: "Spritzguss-Werkzeuge kosten ab €10.000. Bei ekdruck zahlen Sie nur für Ihr Modell – ab €20.",       accent: false },
                { icon: Clock,        title: "Schneller als jeder Handmodellbauer",desc: "Traditioneller Modellbau: 1–4 Wochen. ekdruck Express: 24–48 Stunden österreichweit.",              accent: true  },
                { icon: Repeat2,      title: "Beliebig reproduzierbar",            desc: "Jede Kopie ist digital identisch. Korrekturen kosten nur eine Dateiänderung.",                        accent: false },
                { icon: Leaf,         title: "Made in Austria, nachhaltig",        desc: "Österreichische Filamente aus Industrieabfällen. Ökostrom. CO₂-Fußabdruck 80% geringer.",            accent: false },
              ].map(({ icon: Icon, title, desc, accent }) => (
                <div key={title} className={`flex gap-4 p-5 rounded-2xl border transition-all duration-200
                  ${accent
                    ? "bg-primary border-primary shadow-[0_4px_20px_hsl(var(--primary)/0.25)]"
                    : "bg-card border-border hover:border-primary/30 hover:shadow-sm"
                  }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5
                    ${accent ? "bg-white/20" : "bg-primary/10"}`}>
                    <Icon className={`w-5 h-5 ${accent ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm mb-1 ${accent ? "text-primary-foreground" : ""}`}>{title}</p>
                    <p className={`text-sm leading-relaxed ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{desc}</p>
                  </div>
                </div>
              ))}
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
                { label: "Kosten (Modell)",       icon: TrendingDown, good: "ab €20",          bad: "€200–€10.000+" },
                { label: "Lieferzeit",            icon: Clock,        good: "24h Express",     bad: "1–4 Wochen"    },
                { label: "Komplexe Geometrien",   icon: Layers,       good: "Unbegrenzt",      bad: "Stark limitiert"},
                { label: "Wiederholbarkeit",      icon: Repeat2,      good: "1:1 identisch",   bad: "Handarbeit variiert"},
                { label: "Gewicht",               icon: Zap,          good: "Bis 80% leichter",bad: "Massiv & schwer"},
              ].map(({ label, icon: Icon, good, bad }) => (
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
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUALITÄT & FINISHING — NEU ────────────────────────────────────
          Was erhalte ich genau? Kunden wollen das sehen, bevor sie kaufen.
          SEO: "3D Druck Oberfläche", "3D Druck Nachbearbeitung", "Lackieren"
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Qualität & Finishing</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-balance mb-4">
                Was erhalte ich<br />
                <span className="text-primary">am Ende wirklich?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                Vom Rohmodell bis zur präsentationsreifen Oberfläche – wir bieten jede Qualitätsstufe. Sehen Sie, was möglich ist.
              </p>
            </AnimatedSection>

            {/* Druckqualitäten */}
            <AnimatedSection animation="slide-up" delay={0} className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  level: "Standard",
                  res: "0,2 mm",
                  desc: "Solide Qualität für Funktionsmuster und erste Prototypen-Iterationen. Sichtbare Schichtlinien – ideal wenn es schnell und günstig sein muss.",
                  use: "Prototypen, Erstmuster",
                  price: "Günstigste Option",
                  featured: false,
                },
                {
                  level: "Fine",
                  res: "0,15 mm",
                  desc: "Unser meistgewähltes Setting. Sehr gute Oberflächenqualität, kaum sichtbare Schichten – für professionelle Präsentationen und Messemodelle.",
                  use: "Architekturmodelle, Messe",
                  price: "Beliebteste Wahl",
                  featured: true,
                },
                {
                  level: "Ultra Fine",
                  res: "0,1 mm",
                  desc: "Höchste Präzision. Minimalste Schichtlinien, maximales Detail – für hochwertige Präsentationsmodelle und sichtbare Feinstrukturen.",
                  use: "Wettbewerbsmodelle, Galerien",
                  price: "Premium Qualität",
                  featured: false,
                },
              ].map(({ level, res, desc, use, price, featured }) => (
                <div key={level} className={`rounded-3xl border p-7 flex flex-col transition-all hover:shadow-sm
                  ${featured ? "bg-primary/8 border-primary/30" : "bg-background border-border hover:border-primary/25"}`}>
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="font-black text-xl">{level}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{price}</p>
                    </div>
                    <div className={`text-center px-3 py-2 rounded-xl border
                      ${featured ? "bg-primary text-primary-foreground border-primary" : "bg-muted border-border"}`}>
                      <p className="text-lg font-black leading-none">{res}</p>
                      <p className="text-[10px] font-semibold mt-0.5 opacity-70">Schicht</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <ScanLine className="w-3.5 h-3.5 shrink-0" />
                    Ideal für: {use}
                  </div>
                </div>
              ))}
            </AnimatedSection>

            {/* Finishing-Optionen */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <h3 className="font-black text-xl mb-1">Nachbearbeitung & Finishing</h3>
                    <p className="text-muted-foreground text-sm">Auf Wunsch liefern wir das Modell direkt präsentationsbereit.</p>
                  </div>
                  <Link to="/einzelanfertigungen" className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                    Finishing anfragen <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: ScanLine, title: "Schleifen & Glätten",      desc: "Schichtlinien entfernen. Glatte, lackierfertige Oberfläche." },
                    { icon: Paintbrush, title: "Lackieren (RAL/Pantone)", desc: "Jede Farbe nach Wunsch. Mattes oder glänzendes Finish." },
                    { icon: Palette,   title: "Grundierung",             desc: "Professionelle Vorbereitung für Lackierung. Poren versiegelt." },
                    { icon: Wrench,    title: "Aceton-Dampfglätte",       desc: "Für ABS: chemisch glatte Oberfläche, fast spritzgussgleich." },
                    { icon: Ruler,     title: "Segmentierung",           desc: "Große Modelle mehrteilig gedruckt, professionell verklebt." },
                    { icon: Award,     title: "Qualitätsprüfung",        desc: "Jedes Modell wird vor dem Versand manuell geprüft." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-3 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:border-primary/25 hover:bg-primary/4 transition-all">
                      <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROZESS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="mb-14">
            <div className="max-w-6xl mx-auto">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Wie es funktioniert</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-balance">
                Von der Anfrage zum<br />
                <span className="text-primary">fertigen 3D-Druck Modell</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-sm max-w-lg leading-relaxed">
                Vier Schritte. Kein Bürokratie-Chaos, keine Überraschungen beim Preis.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { n: "01", title: "Anfrage senden",     desc: "CAD-Datei oder Projektbeschreibung – Angebot in unter 6h. STL, OBJ, STEP, ArchiCAD, Revit.", highlight: false },
              { n: "02", title: "Angebot & Freigabe", desc: "Transparenter Festpreis, verbindliche Lieferzeit. Datei-Optimierung kostenlos.",                highlight: false },
              { n: "03", title: "FDM-Fertigung",      desc: "Produktion mit österreichischem Premium-Filament. Präzision bis 0,1 mm.",                       highlight: false },
              { n: "04", title: "QC & Versand",       desc: "Manuelle Qualitätsprüfung. Express-Lieferung österreichweit 24–48h, DE 2–4 Tage.",              highlight: true  },
            ].map(({ n, title, desc, highlight }, i) => (
              <AnimatedSection key={n} animation="slide-up" delay={i * 80}>
                <div className={`rounded-3xl border p-7 h-full flex flex-col transition-all hover:shadow-sm
                  ${highlight ? "bg-primary border-primary" : "bg-card border-border hover:border-primary/30"}`}>
                  <span className={`text-5xl font-black leading-none mb-6 block
                    ${highlight ? "text-primary-foreground/20" : "text-primary/12"}`}>{n}</span>
                  <h3 className={`font-bold text-base mb-2 ${highlight ? "text-primary-foreground" : ""}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed flex-1 ${highlight ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{desc}</p>
                  {highlight && (
                    <div className="mt-5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-xs text-primary-foreground/80 font-semibold">Fertig – Modell in Händen</span>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALIEN ───────────────────────────────────────────────── */}
      <section className="py-28 md:py-32 bg-muted/40 border-t border-border/50">
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
                { name: "PLA",  badge: "Bestseller", primary: true,  desc: "Biologisch abbaubar. Ideal für Architektur- & Präsentationsmodelle.", props: ["Biologisch abbaubar","0,1 mm Auflösung","20+ Farben"] },
                { name: "PETG", badge: "Outdoor",    primary: false, desc: "UV-beständig und langlebig – für Außen-Exponate.",                     props: ["UV-beständig","80°C beständig","Schlagfest"]          },
                { name: "ABS",  badge: "Robust",     primary: false, desc: "Industriestandard. Schleifbar, lackierbar, hochwertig.",                props: ["100°C beständig","Lackierbar","Schleifbar"]           },
                { name: "TPU",  badge: "Flexibel",   primary: false, desc: "Elastisch für spezielle Anwendungen. Shore 95A.",                       props: ["Shore 95A","500% dehnbar","Abriebfest"]               },
              ].map(({ name, badge, primary, desc, props }) => (
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
                    {props.map(p => (
                      <div key={p} className="flex items-center gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── GOOGLE BEWERTUNGEN ────────────────────────────────────────── */}
      <GoogleReviewsSection />

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-background border-t border-border/50">
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
                    { to: "/ratgeber/kosten-guide",         label: "3D-Druck Kosten & Preise" },
                    { to: "/ratgeber/material-guide",       label: "Materialien im Vergleich" },
                    { to: "/ratgeber/architekturmodell-guide", label: "Architekturmodell Guide" },
                    { to: "/ratgeber/messemodell-guide",    label: "Messemodell Guide" },
                    { to: "/ratgeber/verfahrens-vergleich", label: "3D-Druck vs. Modellbau" },
                  ].map(({ to, label }) => (
                    <Link key={to} to={to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      {label}
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-3">
              <AnimatedSection animation="slide-up" delay={100}>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    { q: "Was kostet 3D-Druck bei ekdruck?",                      a: "Preise starten ab €20 pro Modell. Kosten hängen von Material, Druckvolumen und Qualitätsstufe ab. Mengenrabatte ab 5 Einheiten. Angebot in unter 6 Stunden.", link: { to: "/ratgeber/kosten-guide", text: "Preis-Ratgeber" } },
                    { q: "Wie schnell erhalte ich mein 3D-gedrucktes Modell?",    a: "Standard: 3–5 Werktage österreichweit, versandkostenfrei ab €100. Express-Service: 24–48 Stunden – ideal für Messe-Deadlines. Deutschland 2–4 Werktage.", link: null },
                    { q: "Welche Dateiformate werden für 3D-Druck akzeptiert?",   a: "STL, OBJ, STEP, IGES, 3MF sowie ArchiCAD, Revit, SolidWorks, Fusion 360. Keine CAD-Datei? Wir erstellen das Modell kostenlos nach Skizzen oder Fotos.", link: { to: "/einzelanfertigungen", text: "Einzelanfertigungen" } },
                    { q: "Für welche Branchen eignet sich 3D-Druck bei ekdruck?", a: "Architekten (1:50–1:500 Modelle), Messeaussteller (Express 24h), Produktentwickler (Rapid Prototyping), Firmenkunden (B2B, NDA, Mengenrabatte). Nur Anschauungsmodelle.", link: null },
                    { q: "Welche Nachbearbeitung ist beim 3D-Druck möglich?",     a: "Schleifen, Grundieren, Lackieren (RAL), Aceton-Dampf-Glättung (ABS), Segmentierung und Klebeverbindungen für große Modelle. Direkter Versand präsentationsbereit.", link: null },
                    { q: "Warum österreichisches Filament statt Importware?",     a: "Aus recycelten Industrieabfällen, mit Ökostrom. CO₂-Fußabdruck 80% geringer. Gleichmäßige Extrusionsqualität für konsistente Ergebnisse.", link: { to: "/ratgeber/material-guide", text: "Material-Guide" } },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}
                      className="bg-card border border-border rounded-2xl px-6 hover:border-primary/30 transition-colors data-[state=open]:border-primary/40">
                      <AccordionTrigger className="text-left font-bold hover:text-primary py-5 text-sm">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                        {item.a}{item.link && <> <Link to={item.link.to} className="text-primary font-bold hover:underline ml-1">{item.link.text} →</Link></>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
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
                  { name: "Wien",       url: "/3d-druck-wien"        },
                  { name: "Linz",       url: "/3d-druck-linz"        },
                  { name: "Graz",       url: "/3d-druck-graz"        },
                  { name: "Salzburg",   url: "/3d-druck-salzburg"    },
                  { name: "Innsbruck",  url: "/3d-druck-innsbruck"   },
                  { name: "Klagenfurt", url: "/3d-druck-klagenfurt"  },
                  { name: "Wels",       url: "/3d-druck-wels"        },
                  { name: "St. Pölten", url: "/3d-druck-st-poelten"  },
                  { name: "Dornbirn",   url: "/3d-druck-dornbirn"    },
                  { name: "Villach",    url: "/3d-druck-villach"     },
                ].map(({ name, url }) => (
                  <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors font-medium">
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">🇦🇹 Bundesländer</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Oberösterreich",   url: "/3d-druck-oberoesterreich"  },
                  { name: "Niederösterreich", url: "/3d-druck-niederoesterreich"},
                  { name: "Steiermark",       url: "/3d-druck-steiermark"       },
                  { name: "Kärnten",          url: "/3d-druck-kaernten"         },
                  { name: "Tirol",            url: "/3d-druck-innsbruck"        },
                  { name: "Vorarlberg",       url: "/3d-druck-vorarlberg"       },
                  { name: "Burgenland",       url: "/3d-druck-burgenland"       },
                  { name: "Salzburg",         url: "/3d-druck-salzburg"         },
                ].map(({ name, url }) => (
                  <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors">
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">🇩🇪 Deutschland</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "München",    url: "/messemodelle/muenchen"    },
                  { name: "Stuttgart",  url: "/messemodelle/stuttgart"   },
                  { name: "Nürnberg",   url: "/messemodelle/nuernberg"   },
                  { name: "Augsburg",   url: "/messemodelle/augsburg"    },
                  { name: "Ulm",        url: "/messemodelle/ulm"         },
                  { name: "Freiburg",   url: "/messemodelle/freiburg"    },
                  { name: "Regensburg", url: "/messemodelle/regensburg"  },
                  { name: "Passau",     url: "/messemodelle/passau"      },
                ].map(({ name, url }) => (
                  <Link key={url + name} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors">
                    {name}
                  </Link>
                ))}
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
                      { val: "28",  label: "Google Bewertungen",  sub: "⭐⭐⭐⭐⭐ 5,0 / 5,0"       },
                      { val: "6h",  label: "Angebots-Garantie",   sub: "Kostenlos & unverbindlich" },
                      { val: "24h", label: "Express-Lieferung",   sub: "Österreichweit möglich"    },
                      { val: "€20", label: "Preis ab",            sub: "Keine Mindestbestellung"   },
                    ].map(({ val, label, sub }) => (
                      <div key={label} className="flex items-center gap-5">
                        <p className="text-3xl font-black text-primary w-16 shrink-0 leading-none">{val}</p>
                        <div>
                          <p className="font-bold text-sm leading-none">{label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                        </div>
                      </div>
                    ))}
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
