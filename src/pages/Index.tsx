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
  Sparkles, Shield, Award, CheckCircle2
} from "lucide-react";
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

      {/* ─── TRUST BAR ────────────────────────────────────────────────── */}
      <div className="border-y border-border bg-muted/40">
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
                  <p className="text-sm font-semibold leading-none">{text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SERVICES: ASYMMETRIC EDITORIAL GRID ────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Was wir machen</p>
                <h2 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-tight text-balance">
                  Für welches<br />Projekt können<br />
                  <span className="text-primary">wir helfen?</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xs leading-relaxed lg:text-right">
                Spezialisiert auf drei Kernbereiche – alle mit einem Ziel: Ihr Modell pünktlich und in bester Qualität.
              </p>
            </div>
          </AnimatedSection>

          {/* Asymmetric bento: 1 large left + 2 stacked right */}
          <div className="grid lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-6">

            {/* LARGE: Architektur */}
            <AnimatedSection animation="slide-up" delay={0} className="lg:col-span-3">
              <Link to="/architekturmodelle" className="group block h-full min-h-[420px]">
                <div className="h-full relative rounded-3xl border border-border bg-card overflow-hidden hover:border-primary/40
                  hover:shadow-[0_32px_80px_-20px_hsl(var(--primary)/0.18)] transition-all duration-500 flex flex-col">
                  {/* Visual header strip */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,hsl(var(--primary)/0.03)_0px,hsl(var(--primary)/0.03)_1px,transparent_1px,transparent_24px)]" />
                    <div className="w-24 h-24 rounded-3xl bg-primary/12 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_8px_32px_hsl(var(--primary)/0.15)]">
                      <Building2 className="w-12 h-12 text-primary" />
                    </div>
                    <span className="absolute top-4 right-4 text-xs font-bold bg-background border border-border px-3 py-1.5 rounded-full shadow-sm">ab €20</span>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      Architekturmodelle
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      Maßstabsgetreue Modelle 1:50–1:500 für Wettbewerbe, Baueinreichungen und Kundenpräsentationen. ArchiCAD & Revit-kompatibel. 80% günstiger als traditioneller Modellbau.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {["24h Express", "1:50–1:500", "CAD-Import"].map(t => (
                          <span key={t} className="text-xs bg-primary/8 text-primary border border-primary/15 px-2.5 py-1 rounded-full font-medium">{t}</span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        Entdecken <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* RIGHT COLUMN: Messemodelle + Einzelanfertigungen */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {/* Messemodelle — DARK PRIMARY */}
              <AnimatedSection animation="slide-up" delay={80} className="flex-1">
                <Link to="/messemodelle" className="group block h-full min-h-[200px]">
                  <div className="h-full relative rounded-3xl bg-primary overflow-hidden
                    hover:shadow-[0_32px_80px_-20px_hsl(var(--primary)/0.55)] transition-all duration-500 flex flex-col p-7">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-black/15 pointer-events-none" />
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/6" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-black/10 blur-xl" />
                    <div className="relative flex items-start justify-between mb-auto">
                      <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                        <Presentation className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold bg-white/20 text-primary-foreground border border-white/25 px-3 py-1 rounded-full">⚡ Express 24h</span>
                    </div>
                    <div className="relative mt-6">
                      <h3 className="font-bold text-xl text-primary-foreground leading-tight mb-2">Messemodelle & Exponate</h3>
                      <p className="text-primary-foreground/75 text-sm leading-relaxed mb-4">
                        Für Wien, München, Hannover & alle großen Messeplätze. Angebot heute – Modell morgen.
                      </p>
                      <span className="flex items-center gap-1 text-primary-foreground font-semibold text-sm group-hover:gap-2 transition-all">
                        Messemodelle <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Einzelanfertigungen */}
              <AnimatedSection animation="slide-up" delay={160} className="flex-1">
                <Link to="/einzelanfertigungen" className="group block h-full min-h-[200px]">
                  <div className="h-full relative rounded-3xl border border-border bg-card overflow-hidden
                    hover:border-primary/40 hover:shadow-[0_32px_80px_-20px_hsl(var(--primary)/0.15)] transition-all duration-500 flex flex-col p-7">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/4 rounded-full blur-3xl" />
                    <div className="flex items-start justify-between mb-auto relative">
                      <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                        <Layers className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full">ab 1 Stück</span>
                    </div>
                    <div className="mt-6 relative">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors leading-tight mb-2">Einzelanfertigungen</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        Unikate nach Maß. 3D-Modellierung aus Skizzen inklusive. Keine Mindestmenge.
                      </p>
                      <span className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        Mehr erfahren <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>

          {/* Secondary nav pills */}
          <AnimatedSection animation="fade-in" delay={250}>
            <div className="flex flex-wrap gap-3 max-w-6xl mx-auto">
              {[
                { to: "/firmenkunden", icon: Users, label: "Firmenkunden & B2B", sub: "UID · NDA · Mengenrabatte" },
                { to: "/rapid-prototyping", icon: Zap, label: "Rapid Prototyping", sub: "Prototypen in 24–48h" },
                { to: "/fdm-3d-druck", icon: Award, label: "FDM Technologie", sub: "Materialien & Specs" },
                { to: "/3d-druck-materialien", icon: Layers, label: "Materialien", sub: "PLA · PETG · ABS · TPU" },
              ].map(({ to, icon: Icon, label, sub }) => (
                <Link key={to} to={to}
                  className="group flex items-center gap-3 bg-muted/50 hover:bg-primary/8 border border-border hover:border-primary/30 rounded-2xl px-5 py-3 transition-all duration-200">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors leading-none">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all ml-auto" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── REFERENZEN ─────────────────────────────────────────────── */}
      <ReferencesTeaser />

      {/* ─── MID-FUNNEL CTA — FULL DARK EDITORIAL ────────────────────── */}
      <section className="py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_30%_50%,hsl(var(--primary-glow)/0.4),transparent)] pointer-events-none" />
        {/* Large typographic background number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black text-white/4 leading-none select-none pointer-events-none pr-8 hidden xl:block">6h</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="text-primary-foreground/60 text-xs font-bold uppercase tracking-[0.25em] mb-6">Ihr nächster Schritt</p>
              <h2 className="text-5xl md:text-7xl font-black text-primary-foreground leading-[0.95] tracking-tight mb-8 text-balance">
                Angebot in unter<br />
                <span className="text-white">6 Stunden</span> –<br />
                kostenlos.
              </h2>
              <p className="text-primary-foreground/70 text-xl max-w-lg mb-12 leading-relaxed">
                Beschreiben Sie uns kurz Ihr Projekt. Wir antworten schnell, unverbindlich und persönlich – kein Callcenter, kein Autoresponder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/92 text-base font-bold px-10 py-7 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] group">
                  <Link to="/kontakt">
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Jetzt anfragen
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10 text-base px-10 py-7 rounded-2xl">
                  <a href="tel:+4367655171897">
                    <Phone className="mr-2 w-5 h-5" />
                    +43 676 5517197
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-primary-foreground/55">
                {["✓ Keine versteckten Kosten", "✓ Persönliche Beratung", "✓ Express 24h verfügbar"].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── WHY EKDRUCK — SPLIT LAYOUT WITH STAT CARDS ────────────── */}
      <section className="py-28 md:py-36 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

            {/* Left: headline + stats */}
            <AnimatedSection animation="fade-in">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Warum ekdruck?</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight mb-8 text-balance">
                3D-Druck schlägt<br />traditionellen<br />
                <span className="text-primary">Modellbau.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Wo Handmodellbau teuer, langsam und einmalig ist, liefert FDM präzise, reproduzierbare Ergebnisse zu einem Bruchteil der Kosten.{" "}
                <Link to="/ratgeber/verfahrens-vergleich" className="text-primary font-semibold hover:underline">Vergleich lesen →</Link>
              </p>

              {/* Big stat cards */}
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[
                  { val: "bis 95%", label: "günstiger", sub: "vs. Handmodellbau" },
                  { val: "24h", label: "Express", sub: "österreichweit" },
                  { val: "0,1mm", label: "Präzision", sub: "Schichtauflösung" },
                ].map(({ val, label, sub }) => (
                  <div key={label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                    <p className="text-3xl font-black text-primary leading-none">{val}</p>
                    <p className="text-sm font-bold mt-1">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="group rounded-2xl px-8">
                <Link to="/kontakt">
                  Kostenloses Angebot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </AnimatedSection>

            {/* Right: advantage list */}
            <AnimatedSection animation="slide-up" delay={120} className="space-y-3">
              {[
                { icon: TrendingDown, title: "Kein Werkzeugkostenproblem", desc: "Spritzguss-Werkzeuge kosten ab €10.000. Bei ekdruck zahlen Sie nur für Ihr Modell – ab €20.", accent: false },
                { icon: Clock, title: "Schneller als jeder Handmodellbauer", desc: "Traditioneller Modellbau: 1–4 Wochen. ekdruck Express: 24–48 Stunden österreichweit.", accent: true },
                { icon: Repeat2, title: "Beliebig reproduzierbar", desc: "Jede Kopie ist digital identisch. Korrekturen kosten nur eine Dateiänderung.", accent: false },
                { icon: Leaf, title: "Made in Austria, nachhaltig", desc: "Österreichische Filamente aus Industrieabfällen. Ökostrom. CO₂-Fußabdruck 80% geringer.", accent: false },
              ].map(({ icon: Icon, title, desc, accent }, i) => (
                <AnimatedSection key={title} animation="slide-up" delay={i * 60}>
                  <div className={`flex gap-5 p-6 rounded-2xl border transition-all duration-200 group cursor-default
                    ${accent
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_8px_32px_hsl(var(--primary)/0.25)]"
                      : "bg-card border-border hover:border-primary/30 hover:shadow-md"
                    }`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5
                      ${accent ? "bg-white/20" : "bg-primary/10 group-hover:bg-primary/20"} transition-colors`}>
                      <Icon className={`w-5 h-5 ${accent ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <div>
                      <p className={`font-bold text-base mb-1 ${accent ? "text-primary-foreground" : ""}`}>{title}</p>
                      <p className={`text-sm leading-relaxed ${accent ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </AnimatedSection>
          </div>

          {/* Comparison table — full width below */}
          <AnimatedSection animation="fade-in" delay={200} className="mt-20 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-border overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-muted/60 border-b border-border">
                <div className="p-5 text-sm font-semibold text-muted-foreground">Kriterium</div>
                <div className="p-5 text-primary font-bold border-x border-border flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  ekdruck 3D-Druck
                </div>
                <div className="p-5 text-muted-foreground text-sm font-semibold text-center">Traditionell</div>
              </div>
              {[
                { label: "Kosten", icon: TrendingDown, good: "ab €20", bad: "€200–€10.000+" },
                { label: "Lieferzeit", icon: Clock, good: "24h Express", bad: "1–4 Wochen" },
                { label: "Komplexe Geometrien", icon: Layers, good: "Unbegrenzt", bad: "Stark limitiert" },
                { label: "Wiederholbarkeit", icon: Repeat2, good: "1:1 identisch", bad: "Handarbeit variiert" },
                { label: "Gewicht", icon: Zap, good: "Bis 80% leichter", bad: "Massiv & schwer" },
              ].map(({ label, icon: Icon, good, bad }) => (
                <div key={label} className="grid grid-cols-3 border-t border-border hover:bg-primary/2 transition-colors group">
                  <div className="p-5 font-medium text-sm flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-primary shrink-0 opacity-70" />{label}
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

      {/* ─── PROCESS — HORIZONTAL NUMBERED STEPS ────────────────────── */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,hsl(var(--primary)/0.2),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-in" className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Wie es funktioniert</p>
                <h2 className="text-4xl md:text-5xl font-black text-background leading-[1.05] tracking-tight">
                  Von der Anfrage<br />zum fertigen Modell
                </h2>
              </div>
              <Button asChild size="lg" className="self-start md:self-end bg-white text-foreground hover:bg-white/90 font-bold rounded-2xl group">
                <Link to="/kontakt">
                  Jetzt starten
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl">
            {[
              { n: "01", title: "Anfrage", desc: "CAD-Datei oder Idee beschreiben – Angebot in unter 6h.", color: "bg-background/10" },
              { n: "02", title: "Angebot & Freigabe", desc: "Transparenter Preis, Lieferzeit. Dateioptimierung kostenlos.", color: "bg-background/10" },
              { n: "03", title: "FDM-Fertigung", desc: "Produktion mit österreichischem Premium-Filament.", color: "bg-background/10" },
              { n: "04", title: "QC & Versand", desc: "Qualitätsprüfung. Express-Lieferung in 24–48h.", color: "bg-primary/20" },
            ].map(({ n, title, desc, color }, i) => (
              <AnimatedSection key={n} animation="slide-up" delay={i * 80}>
                <div className={`${color} border border-background/10 rounded-3xl p-7 h-full flex flex-col`}>
                  <span className="text-6xl font-black text-background/20 leading-none mb-6 block">{n}</span>
                  <h3 className="font-bold text-background text-lg mb-2">{title}</h3>
                  <p className="text-background/60 text-sm leading-relaxed flex-1">{desc}</p>
                  {i === 3 && (
                    <div className="mt-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs text-primary font-semibold">Fertig!</span>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MATERIALIEN — COMPACT GRID ──────────────────────────────── */}
      <section className="py-24 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Technologie & Materialien</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-balance">
                  FDM-Präzision aus<br />
                  <span className="text-primary">österreichischer<br />Produktion.</span>
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Als spezialisierter <Link to="/fdm-3d-druck" className="text-primary font-semibold hover:underline">FDM-Dienstleister</Link> aus Gunskirchen (OÖ) kombinieren wir modernste Drucktechnologie mit nachhaltigen österreichischen Materialien – Schicht für Schicht, auf 0,1 mm genau.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wir beziehen ausschließlich Filamente österreichischer Hersteller, aus recycelten Industrieabfällen, betrieben mit Ökostrom. CO₂-Fußabdruck bis zu 80 % geringer als Importware.
                </p>
                <Link to="/3d-druck-materialien" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  Alle Materialien & Specs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "PLA", badge: "Bestseller", desc: "Biologisch abbaubar. Ideal für Architektur- & Präsentationsmodelle.", props: ["Biologisch abbaubar", "0,1 mm Auflösung", "20+ Farben"], featured: true },
                { name: "PETG", badge: "Outdoor", desc: "UV-beständig und langlebig – für Außen-Exponate.", props: ["UV-beständig", "80°C beständig", "Schlagfest"], featured: false },
                { name: "ABS", badge: "Robust", desc: "Industriestandard. Schleifbar, lackierbar, hochwertig.", props: ["100°C beständig", "Lackierbar", "Schleifbar"], featured: false },
                { name: "TPU", badge: "Flexibel", desc: "Elastisch für spezielle Anwendungen. Shore 95A.", props: ["Shore 95A", "500% dehnbar", "Abriebfest"], featured: false },
              ].map(({ name, badge, desc, props, featured }) => (
                <div key={name} className={`rounded-2xl border p-6 transition-all hover:shadow-md
                  ${featured ? "bg-primary/8 border-primary/25" : "bg-background border-border hover:border-primary/25"}`}>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-black">{name}</p>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full
                      ${featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary border border-primary/20"}`}>
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

      {/* ─── GOOGLE REVIEWS ─────────────────────────────────────────── */}
      <GoogleReviewsSection />

      {/* ─── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">

            {/* Left sticky heading */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-in">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">FAQ</p>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight mb-6 text-balance">
                  Häufig<br />gestellte<br />
                  <span className="text-primary">Fragen.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nicht gefunden was Sie suchen? Unser KI-Berater antwortet sofort oder fragen Sie direkt an.
                </p>
                <Button asChild className="rounded-2xl group">
                  <Link to="/kontakt">
                    Direkt anfragen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-3">
              <AnimatedSection animation="slide-up" delay={100}>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    { q: "Was kostet 3D-Druck bei ekdruck?", a: "Unsere Preise starten ab €20 pro Modell. Kosten hängen von Material, Druckvolumen und Qualitätsstufe ab. Mengenrabatte ab 5 Einheiten. Angebot in unter 6 Stunden. Details im ", link: { to: "/ratgeber/kosten-guide", text: "Preis-Ratgeber" } },
                    { q: "Wie schnell erhalte ich mein Modell?", a: "Standard: 3–5 Werktage österreichweit, versandkostenfrei ab €100. Express: 24–48 Stunden. Deutschland 2–4 Werktage via DHL/GLS.", link: null },
                    { q: "Welche Dateiformate werden akzeptiert?", a: "STL, OBJ, STEP, IGES, 3MF, native CAD-Formate (ArchiCAD, Revit, SolidWorks, Fusion 360). Keine CAD-Datei? Wir erstellen das Modell nach Skizzen oder Fotos.", link: null },
                    { q: "Für welche Branchen ist ekdruck geeignet?", a: "Architekten (Modelle 1:50–1:500), Messeaussteller (Express 24h), Firmenkunden (B2B, NDA, Mengenrabatte). Nur Anschauungsmodelle – keine Funktionsteile.", link: null },
                    { q: "Warum österreichisches Filament?", a: "Aus recycelten Industrieabfällen, Ökostrom, gleichmäßige Extrusionsqualität. CO₂-Fußabdruck 80% geringer als Importware aus Asien.", link: null },
                    { q: "Welche Nachbearbeitungs-Optionen gibt es?", a: "Schleifen, Grundieren, Lackieren (RAL), Aceton-Dampf-Glättung (ABS), Klebeverbindungen für Segmentmodelle.", link: null },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}
                      className="bg-card border border-border rounded-2xl px-6 hover:border-primary/30 transition-colors data-[state=open]:border-primary/40">
                      <AccordionTrigger className="text-left font-semibold hover:text-primary py-5 text-sm">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                        {item.a}{item.link && <> <Link to={item.link.to} className="text-primary font-semibold hover:underline">{item.link.text}</Link>.</>}
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

      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* ─── REGIONALE PRÄSENZ ─────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Standort & Lieferung</p>
              <h2 className="text-3xl md:text-4xl font-black leading-[1.05] mb-5 text-balance">
                Regionaler Partner für<br />
                <span className="text-primary">Österreich & Deutschland</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Unser Standort in <strong className="text-foreground">Gunskirchen (OÖ)</strong> liegt zentral: 20 min von Linz, 1,5h von Wien & Salzburg. Österreichweit Express in 24–48h, Deutschland in 2–4 Werktagen via DHL/GLS.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
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
                ].map(({ name, url }) => (
                  <Link key={url} to={url} onClick={() => window.scrollTo(0, 0)}
                    className="bg-background border border-border hover:border-primary/40 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors font-medium">
                    {name}
                  </Link>
                ))}
              </div>
              <Button asChild className="rounded-2xl">
                <Link to="/kontakt">Anfrage stellen</Link>
              </Button>
            </div>
            <div className="space-y-6">
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
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">28 Google Bewertungen · 5,0 / 5,0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA — MAXIMUM IMPACT ──────────────────────────────── */}
      <section className="py-32 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,hsl(var(--primary)/0.25),transparent)] pointer-events-none" />
        {/* Decorative giant text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="text-[18rem] font-black text-background/3 leading-none whitespace-nowrap">ekdruck</span>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection animation="scale-in">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Jetzt anfragen – Angebot heute
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-background leading-[0.95] tracking-tight mb-8 text-balance">
              Bereit für Ihr<br />
              <span className="text-primary">nächstes Modell?</span>
            </h2>
            <p className="text-background/60 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
              Angebot in 6 Stunden. Kostenlos. Ohne Callcenter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 text-base font-black px-12 py-7 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] group">
                <Link to="/kontakt">
                  Kostenloses Angebot anfragen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/25 text-background hover:bg-background/10 text-base px-10 py-7 rounded-2xl">
                <Link to="/referenzen">
                  Referenzen ansehen
                </Link>
              </Button>
            </div>
            <p className="text-background/35 text-xs tracking-wide">
              ✓ Keine Mindestbestellung &nbsp;·&nbsp; ✓ Express 24h verfügbar &nbsp;·&nbsp; ✓ Made in Austria
            </p>
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
