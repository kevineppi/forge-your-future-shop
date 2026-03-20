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

    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 1: SOCIAL PROOF TICKER — unmittelbar nach Hero
          Ziel: Vertrauen in Sekunden aufbauen, Bounce verhindern
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            {[
              { icon: Star, text: "5,0 / 5 – 28 Google Bewertungen" },
              { icon: Zap, text: "Express 24h Lieferung" },
              { icon: MapPin, text: "Made in Austria" },
              { icon: Shield, text: "Angebot in 6 Stunden" },
              { icon: Package, text: "Versandkostenfrei ab €100" },
            ].map(({ icon: Icon, text }, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 opacity-90">
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 2: LEISTUNGEN — welches Problem lösen wir?
          Ziel: Nutzer erkennt sich & klickt auf seine Kategorie
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-4 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              Spezialisiert auf 3 Kernbereiche
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
              Für welches Projekt<br className="hidden sm:block" /> suchen Sie einen Partner?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Klicken Sie auf Ihren Anwendungsfall – wir zeigen Ihnen genau, was wir für Sie tun können.
            </p>
          </AnimatedSection>

          {/* 3 prominent service cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">

            {/* Architektur */}
            <AnimatedSection animation="slide-up" delay={0}>
              <Link to="/architekturmodelle" className="group block h-full">
                <div className="h-full relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.2)] transition-all duration-500 hover:-translate-y-1.5">
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-bold bg-muted text-muted-foreground px-2.5 py-1 rounded-full">ab €20</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      Architekturmodelle
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Maßstabsgetreue Modelle 1:50–1:500. Wettbewerbe, Baueinreichungen, Kundenpräsentationen. ArchiCAD & Revit-kompatibel.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {["80% günstiger als Modellbauer", "Lieferung in 3–5 Werktagen", "Express 24h möglich"].map(t => (
                        <li key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                      Jetzt entdecken <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Messemodelle — highlighted */}
            <AnimatedSection animation="slide-up" delay={100}>
              <Link to="/messemodelle" className="group block h-full">
                <div className="h-full relative rounded-2xl bg-primary text-primary-foreground overflow-hidden hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)] transition-all duration-500 hover:-translate-y-1.5">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                  <div className="p-7 relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                        <Presentation className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold bg-white/20 text-primary-foreground px-2.5 py-1 rounded-full border border-white/20">
                        ⚡ Express 24h
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 leading-tight">
                      Messemodelle & Exponate
                    </h3>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                      Express-Fertigung für Wien Messe, Hannover, München & alle großen Messeplätze. Bis 2m+ Größe. Angebot heute – Modell morgen.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {["ab €30 pro Exponat", "Termintreue garantiert", "Bis 2m+ Objektgröße"].map(t => (
                        <li key={t} className="flex items-center gap-2 text-xs text-primary-foreground/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-primary-foreground text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                      Jetzt entdecken <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Einzelanfertigungen */}
            <AnimatedSection animation="slide-up" delay={200}>
              <Link to="/einzelanfertigungen" className="group block h-full">
                <div className="h-full relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.2)] transition-all duration-500 hover:-translate-y-1.5">
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Layers className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-bold bg-muted text-muted-foreground px-2.5 py-1 rounded-full">ab 1 Stück</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      Einzelanfertigungen
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Unikate nach Maß – vom ersten Entwurf bis zum fertigen Modell. Modellierung aus Skizzen, Fotos oder Zeichnungen inklusive.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {["3D-Modellierung inklusive", "Keine Mindestmenge", "Rapid Prototyping möglich"].map(t => (
                        <li key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                      Jetzt entdecken <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>

          {/* Also Firmenkunden & Rapid Prototyping as slim secondary links */}
          <AnimatedSection animation="fade-in" delay={300}>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {[
                { to: "/firmenkunden", icon: Users, label: "Firmenkunden & B2B", sub: "UID, NDA, Mengenrabatte" },
                { to: "/rapid-prototyping", icon: Zap, label: "Rapid Prototyping", sub: "Prototypen in 24–48h" },
                { to: "/fdm-3d-druck", icon: Award, label: "FDM 3D-Druck", sub: "Technologie & Materialien" },
              ].map(({ to, icon: Icon, label, sub }) => (
                <Link key={to} to={to}
                  className="group flex items-center gap-3 bg-muted/60 hover:bg-primary/8 border border-border hover:border-primary/30 rounded-xl px-5 py-3.5 transition-all duration-200">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all ml-1" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 3: REFERENZEN — Beweis, dass es funktioniert
      ═══════════════════════════════════════════════════════ */}
      <ReferencesTeaser />

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 4: MID-FUNNEL CTA — starke Einladung
          Ziel: Wer noch zögert, wird jetzt angesprochen
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Layered background depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground/70 text-xs uppercase tracking-widest font-semibold mb-4">Ihr nächster Schritt</p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Angebot in unter<br />
              <span className="text-white">6 Stunden</span> – kostenlos.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Beschreiben Sie uns kurz Ihr Projekt. Wir antworten schnell, unverbindlich und persönlich – kein Callcenter, kein Autoresponder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-base font-bold px-8 py-6 shadow-lg group">
                <Link to="/kontakt">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Jetzt anfragen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-primary-foreground hover:bg-white/10 text-base px-8 py-6">
                <a href="tel:+4367655171897">
                  <Phone className="mr-2 w-5 h-5" />
                  +43 676 5517197
                </a>
              </Button>
            </div>
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
              {["✓ Keine versteckten Kosten", "✓ Persönliche Beratung", "✓ Express 24h verfügbar"].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 5: WARUM EKDRUCK — Differenzierung
          Ziel: Letzte Einwände ausräumen
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <AnimatedSection animation="fade-in">
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-5 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
                  Warum ekdruck?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  3D-Druck schlägt traditionellen Modellbau<br className="hidden lg:block" />
                  <span className="text-gradient"> in jedem Kriterium</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Wo herkömmlicher Handmodellbau teuer, langsam und einmalig ist, liefert FDM 3D-Druck reproduzierbare Ergebnisse zu einem Bruchteil der Kosten.{" "}
                  <Link to="/ratgeber/verfahrens-vergleich" className="text-primary font-semibold hover:underline">Verfahrensvergleich →</Link>
                </p>
                {/* Stat pills */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { val: "bis 95%", label: "Kostenersparnis" },
                    { val: "24h", label: "Express möglich" },
                    { val: "0,1 mm", label: "Präzision" },
                  ].map(({ val, label }) => (
                    <div key={label} className="bg-background border border-border rounded-2xl p-4 text-center shadow-sm">
                      <p className="text-2xl font-bold text-primary">{val}</p>
                      <p className="text-xs text-muted-foreground mt-1">{label}</p>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Kostenloses Angebot anfragen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedSection>

              {/* Advantage pillars */}
              <AnimatedSection animation="slide-up" delay={150} className="space-y-4">
                {[
                  { icon: TrendingDown, title: "Kein Werkzeugkostenproblem", desc: "Spritzguss-Werkzeuge kosten ab €10.000. Bei ekdruck zahlen Sie nur für Ihr Modell – ab €20." },
                  { icon: Clock, title: "Schneller als jeder Handmodellbauer", desc: "Traditioneller Modellbau: 1–4 Wochen. ekdruck Express: 24–48 Stunden österreichweit." },
                  { icon: Repeat2, title: "Beliebig reproduzierbar", desc: "Jede Kopie ist digital identisch. Korrekturen kosten nur eine Dateiänderung, keine Neuanfertigung." },
                  { icon: Leaf, title: "Made in Austria, nachhaltig", desc: "Österreichische Filamente aus Industrieabfällen. Ökostrom. Kurze Transportwege." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/2 hover:shadow-md transition-all duration-200 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">{title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </div>

            {/* Visual comparison table */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                <div className="grid grid-cols-3 bg-muted/60 text-sm font-semibold">
                  <div className="p-4 text-muted-foreground">Kriterium</div>
                  <div className="p-4 text-primary border-x border-border text-center flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    ekdruck 3D-Druck
                  </div>
                  <div className="p-4 text-muted-foreground text-center">Traditionell</div>
                </div>
                {[
                  { label: "Kosten (Modell)", icon: TrendingDown, good: "ab €20", bad: "€200–€10.000+" },
                  { label: "Lieferzeit", icon: Clock, good: "24h Express", bad: "1–4 Wochen" },
                  { label: "Komplexe Geometrien", icon: Layers, good: "Unbegrenzt", bad: "Stark limitiert" },
                  { label: "Wiederholbarkeit", icon: Repeat2, good: "1:1 identisch", bad: "Handarbeit variiert" },
                  { label: "Gewicht", icon: Zap, good: "Bis 80% leichter", bad: "Massiv & schwer" },
                ].map(({ label, icon: Icon, good, bad }) => (
                  <div key={label} className="grid grid-cols-3 border-t border-border hover:bg-primary/2 transition-colors">
                    <div className="p-4 font-medium text-sm flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary shrink-0" />{label}
                    </div>
                    <div className="p-4 text-center border-x border-border">
                      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                        <Check className="w-4 h-4" />{good}
                      </span>
                    </div>
                    <div className="p-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                        <X className="w-4 h-4 text-destructive/60 shrink-0" />{bad}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 6: PROZESS — wie läuft es ab?
          Ziel: Hürde „Wie funktioniert das?" nehmen
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--primary)/0.06),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-in" className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-4 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
              So funktioniert's
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Von der Anfrage zum <span className="text-gradient">fertigen Modell</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Vier Schritte – und Sie halten Ihr Modell in den Händen.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
            {[
              { n: "01", title: "Anfrage senden", desc: "CAD-Datei oder Idee beschreiben – Angebot in unter 6h.", cta: null },
              { n: "02", title: "Angebot & Freigabe", desc: "Transparenter Preis, Lieferzeit. Wir optimieren die Datei kostenlos.", cta: null },
              { n: "03", title: "FDM-Fertigung", desc: "Produktion mit modernsten Druckern & österreichischem Filament.", cta: null },
              { n: "04", title: "QC & Versand", desc: "Sorgfältige Qualitätsprüfung. Express-Lieferung in 24–48h.", cta: null },
            ].map(({ n, title, desc }, i) => (
              <AnimatedSection key={n} animation="slide-up" delay={i * 80} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-card border-2 border-primary/25 rounded-2xl flex items-center justify-center mb-5 shadow-[0_4px_20px_hsl(var(--primary)/0.12)] group-hover:border-primary/50">
                  <span className="text-2xl font-bold text-primary">{n}</span>
                </div>
                <h3 className="font-bold mb-2 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in" delay={400} className="text-center mt-12">
            <Button asChild size="lg" className="group px-8">
              <Link to="/kontakt">
                Jetzt starten – Angebot in 6h
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">Kostenlos & unverbindlich · Kein Callcenter</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 7: MATERIALIEN — Expertise zeigen
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-4 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
                Technologie & Materialien
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FDM 3D-Druck: Präzision aus <span className="text-gradient">österreichischer Produktion</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Als spezialisierter <Link to="/fdm-3d-druck" className="text-primary hover:underline font-semibold">FDM-Dienstleister</Link> aus Gunskirchen (OÖ) kombinieren wir Technologie mit nachhaltigen österreichischen Materialien.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
              <AnimatedSection animation="fade-in" className="lg:col-span-2 space-y-5">
                <div>
                  <h3 className="font-bold text-lg mb-2">Was ist FDM-Technologie?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    FDM (Fused Deposition Modeling) ist das führende additive Fertigungsverfahren für Anschauungsmodelle. Schicht für Schicht wird hochpräzise Kunststoff-Filament aufgetragen – mit Auflösungen bis 0,1 mm. Komplexe Geometrien, kein Materialverschnitt, keine Mindestmengen.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Nachhaltigkeit durch kurze Wege</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Wir beziehen ausschließlich Filamente österreichischer Hersteller, produziert aus recycelten Industrieabfällen und betrieben mit Ökostrom. CO₂-Fußabdruck bis zu 80 % geringer als Importware aus Asien.
                  </p>
                </div>
                <Link to="/3d-druck-materialien" className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline">
                  Alle Materialien & Spezifikationen <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={100} className="lg:col-span-3 grid grid-cols-2 gap-4">
                {[
                  { name: "PLA", full: "Polylactic Acid", badge: "Bestseller", desc: "Biologisch abbaubar. Ideal für Architektur- & Präsentationsmodelle. 20+ Farben, 0,1 mm Auflösung.", props: ["60°C temp.-beständig", "Biologisch abbaubar", "Hochdetailliert"], highlight: true },
                  { name: "PETG", full: "Polyethylenterephthalat", badge: "Outdoor", desc: "UV-beständig und langlebig – perfekt für Außen-Exponate und Messemodelle.", props: ["80°C temp.-beständig", "UV-beständig", "Schlagfest"], highlight: false },
                  { name: "ABS", full: "Acrylnitril-Butadien-Styrol", badge: "Robust", desc: "Hochwertiger Industriestandard. Nachbearbeitbar durch Schleifen, Grundieren, Lackieren.", props: ["100°C temp.-beständig", "Lackierbar", "Schleifbar"], highlight: false },
                  { name: "TPU", full: "Thermoplastisches Polyurethan", badge: "Flexibel", desc: "Elastisch für spezielle Anwendungen. Shore 95A, bis 500% Dehnung.", props: ["Shore 95A", "500% dehnbar", "Abriebfest"], highlight: false },
                ].map(({ name, full, badge, desc, props, highlight }) => (
                  <div key={name} className={`rounded-xl border p-5 ${highlight ? "bg-primary/8 border-primary/20" : "bg-card border-border"} hover:shadow-sm transition-shadow`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold text-base">{name}</p>
                        <p className="text-xs text-muted-foreground">{full}</p>
                      </div>
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">{badge}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{desc}</p>
                    <div className="space-y-1">
                      {props.map(p => (
                        <div key={p} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary shrink-0" />{p}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 8: GOOGLE BEWERTUNGEN — Social Proof
      ═══════════════════════════════════════════════════════ */}
      <GoogleReviewsSection />

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 9: FAQ — letzte Fragen beantworten
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-4 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Häufig gestellte <span className="text-gradient">Fragen</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="faq-0" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">Was kostet 3D-Druck bei ekdruck?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    Unsere Preise starten ab €20 pro Modell. Die Kosten hängen von Material, Druckvolumen und Qualitätsstufe ab. Express-Service buchbar, Mengenrabatte ab 5 Einheiten. Angebot in unter 6 Stunden. Details im <Link to="/ratgeber/kosten-guide" className="text-primary hover:underline font-semibold">Preis-Ratgeber</Link>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-1" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">Wie schnell erhalte ich mein 3D-gedrucktes Teil?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    Standard: 3–5 Werktage österreichweit, versandkostenfrei ab €100. <Link to="/rapid-prototyping" className="text-primary hover:underline font-semibold">Express-Service</Link>: 24–48 Stunden. Nach Deutschland 2–4 Werktage via DHL/GLS.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">Welche Dateiformate werden akzeptiert?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    STL, OBJ, STEP, IGES, 3MF sowie native CAD-Formate (ArchiCAD, Revit, SolidWorks, Fusion 360). Keine CAD-Datei? Wir erstellen das Modell nach Skizzen oder Fotos. Mehr unter <Link to="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Einzelanfertigungen</Link>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">Für welche Branchen ist ekdruck geeignet?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    Architekten (<Link to="/architekturmodelle" className="text-primary hover:underline font-semibold">Architekturmodelle</Link> 1:50–1:500), Messeaussteller (<Link to="/messemodelle" className="text-primary hover:underline font-semibold">Messemodelle</Link> Express 24h), Firmenkunden (B2B, NDA, Mengenrabatte). Nur Anschauungsmodelle – keine Funktionsteile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">Warum österreichisches Filament?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    Aus recycelten Industrieabfällen, Ökostrom, gleichmäßige Extrusionsqualität. CO₂-Fußabdruck 80% geringer als Importware aus Asien. Details im <Link to="/ratgeber/material-guide" className="text-primary hover:underline font-semibold">Material-Guide</Link>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">Welche Nachbearbeitungs-Optionen gibt es?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    Schleifen, Grundieren, Lackieren in RAL-Farben, Aceton-Dampf-Glättung (ABS), Klebeverbindungen für Segmentmodelle. Alle Optionen unter <Link to="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Einzelanfertigungen</Link>.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-6 p-5 bg-primary/5 border border-primary/15 rounded-xl text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Noch Fragen?</span>{" "}
                  Unser <span className="text-primary font-semibold">🤖 KI-Berater</span> antwortet sofort – Button unten rechts. Oder direkt{" "}
                  <Link to="/kontakt" className="text-primary font-semibold hover:underline">anfragen →</Link>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 10: ÜBER UNS + TRUST
      ═══════════════════════════════════════════════════════ */}
      <About />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FUNNEL STUFE 11: REGIONALE PRÄSENZ
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-4 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
                <MapPin className="w-3.5 h-3.5" /> Standort & Lieferung
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Regionaler Partner für <span className="text-gradient">Österreich & Deutschland</span>
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
              <Button asChild>
                <Link to="/kontakt">Anfrage stellen</Link>
              </Button>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">🇦🇹 Bundesländer</h3>
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
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">🇩🇪 Deutschland</h3>
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

      {/* ═══════════════════════════════════════════════════════
          FINALER FUNNEL CTA — unmittelbar vor Footer
          Letzter Touchpoint – niemand soll die Seite verlassen ohne CTA gesehen zu haben
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,hsl(var(--primary)/0.05),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="scale-in" className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Jetzt anfragen – Angebot heute
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Bereit für Ihr<br />nächstes Modell?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Angebot in 6 Stunden. Kostenlos. Ohne Callcenter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="group px-8 py-6 text-base font-bold shadow-[0_8px_30px_hsl(var(--primary)/0.25)] hover:shadow-[0_12px_40px_hsl(var(--primary)/0.35)] transition-shadow">
                <Link to="/kontakt">
                  Kostenloses Angebot anfragen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 text-base">
                <Link to="/referenzen">
                  Referenzen ansehen
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
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
