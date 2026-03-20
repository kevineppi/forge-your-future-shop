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
  MessageSquare, Phone, ChevronRight, Package,
  Shield, Award, CheckCircle2
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
      { question: "Für welche Branchen und Anwendungsfälle ist ekdruck geeignet?", answer: "Unsere Kernzielgruppen sind Architekten und Planer (maßstabsgetreue Architekturmodelle 1:50–1:500), Messeaussteller (Exponate und Anschauungsmodelle für Messen), Künstler und Galerien (Skulpturen und Dekorationsobjekte) sowie Firmenkunden (Präsentationsmodelle, Schulungsmodelle, Messe-Exponate). Wir fertigen ausschließlich Anschauungsmodelle zu Präsentationszwecken – keine Funktionsteile oder sicherheitsrelevante Bauteile." },
      { question: "Warum österreichisches Filament statt günstigeren Importen?", answer: "Österreichische Filamente werden aus recycelten Industrieabfällen unter strengen Qualitätsstandards gefertigt, betrieben mit Ökostrom und geprüft auf gleichmäßige Extrusionsqualität. Das bedeutet konsistente Druckergebnisse, geringere Fehlerquote, und ein CO₂-Fußabdruck um bis zu 80 % niedriger als bei Importware aus Asien." },
      { question: "Welche Nachbearbeitungs- und Finishing-Optionen gibt es?", answer: "ekdruck bietet ein breites Spektrum an Nachbearbeitung: Schleifen und Glätten für glatte Oberflächen, Grundieren als Vorbereitung für Lackierung, Lackieren in RAL-Farben oder Sonderfarben, Aceton-Dampf-Glättung für ABS-Modelle sowie Klebeverbindungen für Segmentmodelle. So erhalten Sie ein Endprodukt, das direkt präsentationsbereit ist." },
    ]} />
    <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* ─── TRUST BAR ────────────────────────────────────────────────────
          SEO: Establishes local signals + rating directly below fold
      ─────────────────────────────────────────────────────────────────── */}
      <div className="border-y border-border bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center divide-x divide-border">
            {[
              { icon: Star, text: "5,0 Google", sub: "28 Bewertungen" },
              { icon: Zap, text: "Express 24h", sub: "Lieferung" },
              { icon: MapPin, text: "Made in Austria", sub: "Gunskirchen, OÖ" },
              { icon: Clock, text: "Angebot in 6h", sub: "Kostenlos" },
              { icon: Package, text: "Versandkostenfrei", sub: "ab €100" },
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

      {/* ─── LEISTUNGEN ───────────────────────────────────────────────────
          H2: Keyword "3D-Druck Messemodelle Architekturmodelle Österreich"
          SEO: Bento-Grid mit 3 Haupt-Keywords als separate H3-Überschriften
      ─────────────────────────────────────────────────────────────────── */}
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

          {/* Asymmetric Bento Grid */}
          <div className="grid lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-6">

            {/* LARGE CARD: Architekturmodelle */}
            <AnimatedSection animation="slide-up" delay={0} className="lg:col-span-3">
              <Link to="/architekturmodelle" className="group block h-full min-h-[400px]">
                <div className="h-full relative rounded-3xl border border-border bg-card overflow-hidden
                  hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]
                  transition-all duration-500 flex flex-col">
                  {/* Decorative pattern header */}
                  <div className="relative h-44 bg-muted/60 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,hsl(var(--primary)/0.04)_0px,hsl(var(--primary)/0.04)_1px,transparent_1px,transparent_28px)]" />
                    <div className="w-20 h-20 rounded-2xl bg-background border border-primary/20 flex items-center justify-center
                      group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-sm">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                    <span className="absolute top-4 right-4 text-xs font-bold bg-background border border-border px-3 py-1.5 rounded-full shadow-sm">
                      ab €20
                    </span>
                    <span className="absolute top-4 left-4 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1.5 rounded-full">
                      ⚡ Express 24h
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-black text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      Architekturmodelle 3D-Druck
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5 flex-1 text-sm">
                      Maßstabsgetreue 3D-gedruckte Architekturmodelle im Maßstab 1:50 bis 1:500 – für Architektur-Wettbewerbe, Baueinreichungen und Kundenpräsentationen. ArchiCAD, Revit & SolidWorks kompatibel. Bis zu 80 % günstiger als traditioneller Modellbau.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {["1:50–1:500", "CAD-Import", "Wettbewerbsmodelle", "Express 24h"].map(t => (
                        <span key={t} className="text-xs bg-primary/8 text-primary border border-primary/15 px-2.5 py-1 rounded-full font-medium">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {["80% günstiger", "3–5 Werktage", "24h möglich"].map(t => (
                          <span key={t} className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-primary shrink-0" />{t}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all whitespace-nowrap">
                        Mehr erfahren <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* RIGHT COLUMN */}
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
                      <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center
                        group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                        <Presentation className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold bg-white/20 text-primary-foreground border border-white/25 px-3 py-1 rounded-full">
                        ab €30
                      </span>
                    </div>
                    <div className="relative mt-5">
                      <h3 className="font-black text-xl text-primary-foreground leading-tight mb-2">
                        Messemodelle & Exponate
                      </h3>
                      <p className="text-primary-foreground/75 text-sm leading-relaxed mb-4">
                        3D-Druck Messemodelle für Wien, München, Hannover & alle großen Messen. Express: Angebot heute – Modell morgen.
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
                      <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center
                        group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                        <Layers className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full">
                        ab 1 Stück
                      </span>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-black text-xl group-hover:text-primary transition-colors leading-tight mb-2">
                        Einzelanfertigungen
                      </h3>
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

          {/* Secondary service links */}
          <AnimatedSection animation="fade-in" delay={250}>
            <div className="flex flex-wrap gap-3 max-w-6xl mx-auto">
              {[
                { to: "/firmenkunden", icon: Users, label: "Firmenkunden & B2B", sub: "UID · NDA · Mengenrabatte" },
                { to: "/rapid-prototyping", icon: Zap, label: "Rapid Prototyping", sub: "Prototypen in 24–48h" },
                { to: "/fdm-3d-druck", icon: Award, label: "FDM Technologie", sub: "Materialien & Specs" },
                { to: "/3d-druck-materialien", icon: Layers, label: "Materialien", sub: "PLA · PETG · ABS · TPU" },
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

      {/* ─── REFERENZEN ───────────────────────────────────────────────── */}
      <ReferencesTeaser />

      {/* ─── MID-FUNNEL CTA — CLEAN CARD ──────────────────────────────────
          SEO: Conversion element, "Angebot in 6 Stunden" Keyword
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-6xl mx-auto rounded-3xl border border-primary/20 bg-primary/5 p-10 md:p-16">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Ihr nächster Schritt</p>
                  <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight mb-5 text-balance">
                    Angebot in unter<br />
                    <span className="text-primary">6 Stunden</span> –<br />
                    kostenlos.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base mb-8">
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
                    { icon: Check, text: "Persönliche Beratung", sub: "Kein Callcenter – direkte Ansprechperson" },
                    { icon: Check, text: "Express 24h verfügbar", sub: "Für kurzfristige Messe-Deadlines" },
                    { icon: Check, text: "Kostenlose Datei-Optimierung", sub: "STL, OBJ, STEP, ArchiCAD, Revit" },
                  ].map(({ icon: Icon, text, sub }) => (
                    <div key={text} className="flex items-start gap-3 bg-background rounded-2xl border border-border p-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{text}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WARUM EKDRUCK ────────────────────────────────────────────────
          H2: "3D-Druck schlägt traditionellen Modellbau"
          SEO: Comparison keywords + stat snippets for featured snippets
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

            <AnimatedSection animation="fade-in">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Warum ekdruck?</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight mb-6 text-balance">
                3D-Druck schlägt<br />traditionellen<br />
                <span className="text-primary">Modellbau.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wo Handmodellbau teuer, langsam und einmalig ist, liefert FDM 3D-Druck präzise, reproduzierbare Ergebnisse zu einem Bruchteil der Kosten.{" "}
                <Link to="/ratgeber/verfahrens-vergleich" className="text-primary font-bold hover:underline">Vergleich lesen →</Link>
              </p>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[
                  { val: "bis 95%", label: "günstiger", sub: "vs. Handmodellbau" },
                  { val: "24h", label: "Express", sub: "österreichweit" },
                  { val: "0,1mm", label: "Präzision", sub: "Schichtauflösung" },
                ].map(({ val, label, sub }) => (
                  <div key={label} className="rounded-2xl border border-border bg-card p-5 text-center hover:border-primary/30 hover:shadow-sm transition-all">
                    <p className="text-3xl font-black text-primary leading-none">{val}</p>
                    <p className="text-sm font-bold mt-1">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="group rounded-2xl px-8 font-bold">
                <Link to="/kontakt">
                  Kostenloses Angebot anfragen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </AnimatedSection>

            {/* Advantage cards */}
            <AnimatedSection animation="slide-up" delay={120} className="space-y-3">
              {[
                { icon: TrendingDown, title: "Kein Werkzeugkostenproblem", desc: "Spritzguss-Werkzeuge kosten ab €10.000. Bei ekdruck zahlen Sie nur für Ihr Modell – ab €20.", accent: false },
                { icon: Clock, title: "Schneller als jeder Handmodellbauer", desc: "Traditioneller Modellbau: 1–4 Wochen. ekdruck Express: 24–48 Stunden österreichweit.", accent: true },
                { icon: Repeat2, title: "Beliebig reproduzierbar", desc: "Jede Kopie ist digital identisch. Korrekturen kosten nur eine Dateiänderung.", accent: false },
                { icon: Leaf, title: "Made in Austria, nachhaltig", desc: "Österreichische Filamente aus Industrieabfällen. Ökostrom. CO₂-Fußabdruck 80% geringer.", accent: false },
              ].map(({ icon: Icon, title, desc, accent }) => (
                <div key={title} className={`flex gap-4 p-5 rounded-2xl border transition-all duration-200
                  ${accent
                    ? "bg-primary border-primary text-primary-foreground shadow-[0_4px_20px_hsl(var(--primary)/0.25)]"
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
                { label: "Kosten (Modell)", icon: TrendingDown, good: "ab €20", bad: "€200–€10.000+" },
                { label: "Lieferzeit", icon: Clock, good: "24h Express", bad: "1–4 Wochen" },
                { label: "Komplexe Geometrien", icon: Layers, good: "Unbegrenzt", bad: "Stark limitiert" },
                { label: "Wiederholbarkeit", icon: Repeat2, good: "1:1 identisch", bad: "Handarbeit variiert" },
                { label: "Gewicht", icon: Zap, good: "Bis 80% leichter", bad: "Massiv & schwer" },
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

      {/* ─── PROZESS ──────────────────────────────────────────────────────
          H2: "Von der Anfrage zum fertigen 3D-Druck Modell"
          SEO: How-to content → targets "3D-Druck beauftragen" queries
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-6xl mx-auto">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Wie es funktioniert</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-balance">
                  Von der Anfrage zum<br />
                  <span className="text-primary">fertigen 3D-Druck Modell</span>
                </h2>
              </div>
              <div className="md:text-right">
                <p className="text-muted-foreground text-sm max-w-xs md:ml-auto mb-4">Vier Schritte – von der Idee bis zur Lieferung.</p>
                <Button asChild size="default" className="rounded-2xl group font-bold">
                  <Link to="/kontakt">
                    Jetzt starten
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { n: "01", title: "Anfrage senden", desc: "CAD-Datei oder Idee beschreiben – Angebot in unter 6h. STL, OBJ, STEP, ArchiCAD, Revit akzeptiert.", highlight: false },
              { n: "02", title: "Angebot & Freigabe", desc: "Transparenter Festpreis, verbindliche Lieferzeit. Kostenlose Datei-Optimierung inklusive.", highlight: false },
              { n: "03", title: "FDM-Fertigung", desc: "Produktion mit modernsten Druckern & österreichischem Premium-Filament auf 0,1 mm genau.", highlight: false },
              { n: "04", title: "QC & Versand", desc: "Sorgfältige Qualitätsprüfung. Express-Lieferung österreichweit in 24–48h, Deutschland 2–4 Tage.", highlight: true },
            ].map(({ n, title, desc, highlight }, i) => (
              <AnimatedSection key={n} animation="slide-up" delay={i * 80}>
                <div className={`rounded-3xl border p-7 h-full flex flex-col transition-all duration-200 hover:shadow-sm
                  ${highlight
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-background border-border hover:border-primary/30"
                  }`}>
                  <span className={`text-5xl font-black leading-none mb-6 block
                    ${highlight ? "text-primary-foreground/25" : "text-primary/15"}`}>{n}</span>
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
          <AnimatedSection animation="fade-in" delay={400} className="text-center mt-8">
            <p className="text-xs text-muted-foreground">
              Kostenlos & unverbindlich · Kein Callcenter ·{" "}
              <Link to="/ratgeber/prototyping-guide" className="text-primary font-semibold hover:underline">Wie 3D-Druck beauftragen? →</Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── MATERIALIEN ──────────────────────────────────────────────────
          H2: "FDM-Präzision aus österreichischer Produktion"
          SEO: Targets "3D Druck Material PLA PETG ABS Österreich" queries
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-32 bg-background border-t border-border/50">
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
                  Wir beziehen ausschließlich Filamente österreichischer Hersteller, aus recycelten Industrieabfällen, betrieben mit Ökostrom. CO₂-Fußabdruck bis zu 80 % geringer als Importware aus Asien.
                </p>
                <Link to="/3d-druck-materialien" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  Alle Materialien & Specs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "PLA", badge: "Bestseller", badgePrimary: true, desc: "Biologisch abbaubar. Ideal für Architektur- & Präsentationsmodelle.", props: ["Biologisch abbaubar", "0,1 mm Auflösung", "20+ Farben"] },
                { name: "PETG", badge: "Outdoor", badgePrimary: false, desc: "UV-beständig und langlebig – für Außen-Exponate.", props: ["UV-beständig", "80°C beständig", "Schlagfest"] },
                { name: "ABS", badge: "Robust", badgePrimary: false, desc: "Industriestandard. Schleifbar, lackierbar, hochwertig.", props: ["100°C beständig", "Lackierbar", "Schleifbar"] },
                { name: "TPU", badge: "Flexibel", badgePrimary: false, desc: "Elastisch für spezielle Anwendungen. Shore 95A.", props: ["Shore 95A", "500% dehnbar", "Abriebfest"] },
              ].map(({ name, badge, badgePrimary, desc, props }) => (
                <div key={name} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-black">{name}</p>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full
                      ${badgePrimary ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border"}`}>
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

      {/* ─── GOOGLE BEWERTUNGEN ───────────────────────────────────────── */}
      <GoogleReviewsSection />

      {/* ─── FAQ ──────────────────────────────────────────────────────────
          H2: "Häufig gestellte Fragen zum 3D-Druck"
          SEO: FAQSchema → Rich Snippets, covers long-tail questions
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-in">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">FAQ</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight mb-5 text-balance">
                  Häufig gestellte<br />Fragen zum<br />
                  <span className="text-primary">3D-Druck.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  Nicht gefunden was Sie suchen? Unser KI-Berater antwortet sofort – Button unten rechts. Oder direkt anfragen.
                </p>
                <Button asChild className="rounded-2xl group font-bold">
                  <Link to="/kontakt">
                    Direkt anfragen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {/* Quick links to ratgeber */}
                <div className="mt-8 space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Ratgeber</p>
                  {[
                    { to: "/ratgeber/kosten-guide", label: "3D-Druck Kosten & Preise" },
                    { to: "/ratgeber/material-guide", label: "Materialien im Vergleich" },
                    { to: "/ratgeber/architekturmodell-guide", label: "Architekturmodell Guide" },
                    { to: "/ratgeber/messemodell-guide", label: "Messemodell Guide" },
                  ].map(({ to, label }) => (
                    <Link key={to} to={to}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
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
                    { q: "Was kostet 3D-Druck bei ekdruck?", a: "Unsere Preise starten ab €20 pro Modell. Kosten hängen von Material, Druckvolumen und Qualitätsstufe ab. Mengenrabatte ab 5 Einheiten. Angebot in unter 6 Stunden.", link: { to: "/ratgeber/kosten-guide", text: "Preis-Ratgeber lesen" } },
                    { q: "Wie schnell erhalte ich mein 3D-gedrucktes Modell?", a: "Standard: 3–5 Werktage österreichweit, versandkostenfrei ab €100. Express-Service: 24–48 Stunden – ideal für kurzfristige Messe-Deadlines. Deutschland 2–4 Werktage via DHL/GLS.", link: null },
                    { q: "Welche Dateiformate werden für den 3D-Druck akzeptiert?", a: "STL, OBJ, STEP, IGES, 3MF sowie native CAD-Formate (ArchiCAD, Revit, SolidWorks, Fusion 360). Keine CAD-Datei? Wir erstellen das Modell kostenlos nach Skizzen oder Fotos.", link: { to: "/einzelanfertigungen", text: "Einzelanfertigungen" } },
                    { q: "Für welche Branchen eignet sich 3D-Druck bei ekdruck?", a: "Architekten & Planer (Architekturmodelle 1:50–1:500), Messeaussteller (Messemodelle Express 24h), Firmenkunden (B2B, NDA, Mengenrabatte). Ausschließlich Anschauungsmodelle – keine Funktionsteile.", link: null },
                    { q: "Warum österreichisches Filament statt Importware?", a: "Österreichische Filamente aus recycelten Industrieabfällen, mit Ökostrom produziert. CO₂-Fußabdruck 80% geringer als Importware aus Asien. Gleichmäßige Extrusionsqualität für konsistente Druckergebnisse.", link: { to: "/ratgeber/material-guide", text: "Material-Guide" } },
                    { q: "Welche Nachbearbeitung ist beim 3D-Druck möglich?", a: "Schleifen, Grundieren, Lackieren in RAL-Farben, Aceton-Dampf-Glättung (ABS), Klebeverbindungen für Segmentmodelle. Fertig für Ihren Präsentationstag.", link: null },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}
                      className="bg-background border border-border rounded-2xl px-6 hover:border-primary/30 transition-colors data-[state=open]:border-primary/40">
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

      {/* ─── ÜBER UNS + TRUST ─────────────────────────────────────────── */}
      <About />

      <section className="py-16 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* ─── REGIONALE PRÄSENZ ────────────────────────────────────────────
          SEO: Internal linking to 100+ regional pages, Local SEO signals
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection animation="fade-in" className="mb-10">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Standort & Lieferung</p>
            <h2 className="text-3xl md:text-4xl font-black leading-[1.05] mb-4 text-balance">
              3D-Druck Dienstleister für{" "}
              <span className="text-primary">ganz Österreich & Deutschland</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              Unser Standort in <strong className="text-foreground">Gunskirchen (Oberösterreich)</strong> liegt zentral: 20 Minuten von Linz, 1,5 Stunden von Wien & Salzburg. 3D-Druck Lieferung österreichweit in 24–48h (Express), nach Deutschland in 2–4 Werktagen via DHL/GLS – versandkostenfrei ab €100.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Städte */}
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">🏙️ Städte & Regionen</h3>
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
                ].map(({ name, url }) => (
                  <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors font-medium">
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            {/* Bundesländer */}
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
                  { name: "Salzburg", url: "/3d-druck-salzburg" },
                ].map(({ name, url }) => (
                  <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors">
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            {/* Deutschland */}
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
                  { name: "Passau", url: "/messemodelle/passau" },
                ].map(({ name, url }) => (
                  <Link key={url + name} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors">
                    {name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium">28 Google Bewertungen · 5,0 / 5,0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA — CLEAN CARD, KEIN DUNKLER BANNER ─────────────────
          Matches the warm aesthetic throughout the page
      ─────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale-in">
            <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">
                {/* Left: main message */}
                <div className="p-12 md:p-16">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold mb-8 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Kostenlos & unverbindlich anfragen
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight mb-6 text-balance">
                    Bereit für Ihr<br />
                    <span className="text-primary">nächstes Modell?</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Angebot in 6 Stunden. Kostenlos. Ohne Callcenter. Kein Autoresponder – direkte Ansprechperson aus Gunskirchen, Österreich.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="group rounded-2xl px-8 font-bold shadow-[0_4px_20px_hsl(var(--primary)/0.25)] hover:shadow-[0_8px_30px_hsl(var(--primary)/0.35)] transition-shadow">
                      <Link to="/kontakt">
                        Kostenloses Angebot anfragen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 hover:border-primary/40">
                      <Link to="/referenzen">
                        Referenzen ansehen
                      </Link>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-5">
                    ✓ Keine Mindestbestellung &nbsp;·&nbsp; ✓ Express 24h &nbsp;·&nbsp; ✓ Made in Austria
                  </p>
                </div>
                {/* Right: stats / proof */}
                <div className="bg-muted/40 border-l border-border p-12 md:p-16 flex flex-col justify-center">
                  <div className="space-y-6">
                    {[
                      { val: "28", label: "Google Bewertungen", sub: "⭐⭐⭐⭐⭐ 5,0 / 5,0" },
                      { val: "6h", label: "Angebots-Garantie", sub: "Kostenlos & unverbindlich" },
                      { val: "24h", label: "Express-Lieferung", sub: "Österreichweit möglich" },
                      { val: "€20", label: "Preis ab", sub: "Keine Mindestbestellung" },
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
                      ekdruck e.U. · Gunskirchen, Oberösterreich · Spezialist für{" "}
                      <Link to="/messemodelle" className="text-primary font-semibold hover:underline">3D-Druck Messemodelle</Link>,{" "}
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
