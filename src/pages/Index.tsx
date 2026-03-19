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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Building2, Presentation, Palette, Users,
  Check, X, MapPin, Clock, Repeat2, Layers,
  TrendingDown, ArrowRight, Zap, Leaf, Star
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
    <AggregateRatingSchema
      ratingValue={5.0}
      ratingCount={28}
      bestRating={5}
      worstRating={5}
    />
    <FAQSchema
      faqs={[
        {
          question: "Was kostet 3D-Druck bei ekdruck?",
          answer: "Unsere Preise starten ab €20 pro Modell. Die genauen Kosten hängen von drei Faktoren ab: Material (PLA, PETG, ABS oder TPU), Druckvolumen und gewählter Qualitätsstufe. Express-Service ist gegen einen Aufpreis jederzeit buchbar. Mengenrabatte gewähren wir ab 5 Einheiten. Ein transparentes, individuelles Angebot erhalten Sie bei uns in unter 6 Stunden."
        },
        {
          question: "Wie schnell erhalte ich mein 3D-gedrucktes Teil?",
          answer: "Standard-Lieferung beträgt 3–5 Werktage österreichweit, inklusive versandkostenfreier Lieferung ab €100 Bestellwert. Mit unserem Express-Service fertigen und liefern wir bereits in 24–48 Stunden – ideal für kurzfristige Messe-Deadlines oder Wettbewerbsabgaben. Nach Deutschland liefern wir in 2–4 Werktagen via DHL oder GLS."
        },
        {
          question: "Welche Dateiformate werden akzeptiert?",
          answer: "Wir akzeptieren alle gängigen 3D-Formate: STL, OBJ, STEP, IGES, 3MF, STP sowie native CAD-Formate aus ArchiCAD, Revit, SolidWorks und Fusion 360. Keine CAD-Datei vorhanden? Kein Problem – wir erstellen das 3D-Modell nach Ihren Skizzen, Fotos oder technischen Zeichnungen kostenlos im Rahmen der Auftragsberatung."
        },
        {
          question: "Für welche Branchen und Anwendungsfälle ist ekdruck geeignet?",
          answer: "Unsere Kernzielgruppen sind Architekten und Planer (maßstabsgetreue Architekturmodelle 1:50–1:500), Messeaussteller (Exponate und Anschauungsmodelle für Messen), Künstler und Galerien (Skulpturen und Dekorationsobjekte) sowie Firmenkunden (Präsentationsmodelle, Schulungsmodelle, Messe-Exponate). Wir fertigen ausschließlich Anschauungsmodelle zu Präsentationszwecken – keine Funktionsteile oder sicherheitsrelevante Bauteile."
        },
        {
          question: "Warum österreichisches Filament statt günstigeren Importen?",
          answer: "Österreichische Filamente werden aus recycelten Industrieabfällen unter strengen Qualitätsstandards gefertigt, betrieben mit Ökostrom und geprüft auf gleichmäßige Extrusionsqualität. Das bedeutet konsistente Druckergebnisse, geringere Fehlerquote, und ein CO₂-Fußabdruck um bis zu 80 % niedriger als bei Importware aus Asien. Kurzlieferwege bedeuten auch, dass wir schneller auf Sonderwünsche reagieren können."
        },
        {
          question: "Welche Nachbearbeitungs- und Finishing-Optionen gibt es?",
          answer: "ekdruck bietet ein breites Spektrum an Nachbearbeitung: Schleifen und Glätten für glatte Oberflächen, Grundieren als Vorbereitung für Lackierung, Lackieren in RAL-Farben oder Sonderfarben, Aceton-Dampf-Glättung für ABS-Modelle sowie Klebeverbindungen für Segmentmodelle. So erhalten Sie ein Endprodukt, das direkt präsentationsbereit ist – ohne zusätzliche Schritte auf Ihrer Seite."
        }
      ]}
    />
    <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* ── SEKTION 1: ZIELGRUPPEN BENTO ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-3 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
              Unsere Leistungen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professioneller 3D-Druck <span className="text-gradient">für jeden Bedarf</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Von Architekturmodellen für Wettbewerbe bis zu Express-Messemodellen für morgen früh – wir liefern pünktlich, präzise, made in Austria.
            </p>
          </div>

          {/* Bento grid: 2 wide + 2 narrow on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 max-w-6xl mx-auto">

            {/* Architektur — wide */}
            <Link to="/architekturmodelle" className="group lg:col-span-5">
              <div className="h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" />
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Architekturmodelle</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Maßstabsgetreue Modelle im Maßstab 1:50 bis 1:500 für Wettbewerbe, Baugenehmigungen und Kundenpräsentationen. Kompatibel mit ArchiCAD, Revit und allen CAD-Formaten. Präzision bis 0,1 mm.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Maßstab 1:50–1:500", "CAD-kompatibel", "Hochdetailliert"].map(t => (
                    <span key={t} className="text-xs bg-primary/8 text-primary px-2.5 py-1 rounded-full border border-primary/15">{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Messemodelle — wide */}
            <Link to="/messemodelle" className="group lg:col-span-7">
              <div className="h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" />
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Presentation className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full">Express 24h</span>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Messemodelle & Exponate</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Express-Fertigung in 24–48 Stunden für Wien Messe, Salzburg, Graz und alle großen Messeplätze. Leichtbau spart Transportkosten. Große Objekte bis 2 m+ durch Segment-Montage realisierbar.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[["24h", "Express"], ["2m+", "Objektgröße"], ["bis 90%", "Kostenersparnis"]].map(([val, label]) => (
                    <div key={label} className="bg-muted/40 rounded-xl p-3 text-center">
                      <p className="font-bold text-primary text-base">{val}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Einzelanfertigungen */}
            <Link to="/einzelanfertigungen" className="group lg:col-span-4">
              <div className="h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" />
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Einzelanfertigungen</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Unikate nach Maß – vom CAD-Entwurf bis zum fertigen Teil. Für Prototypen, Ersatzteile, Geschenke und individuelle Sonderwünsche. Ab 1 Stück.
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Firmenkunden */}
            <Link to="/firmenkunden" className="group lg:col-span-4">
              <div className="h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" />
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Firmenkunden & B2B</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Rechnung mit UID, NDA auf Anfrage, Mengenrabatte ab 10 Einheiten. Zuverlässiger Partner für Architektur-, Messe- und Präsentationsmodelle.
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Rapid Prototyping */}
            <Link to="/rapid-prototyping" className="group lg:col-span-4">
              <div className="h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" />
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Rapid Prototyping</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Funktionsprototypen und Anschauungsmodelle für Produktentwickler. Iterieren Sie schnell, günstig und präzise – ab 1 Stück.
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── SEKTION 2: REFERENZEN ────────────────────────────────────────── */}
      <ReferencesTeaser />

      {/* ── SEKTION 3: WARUM EKDRUCK — Zahlen + Vergleich ───────────────── */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-4 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
                  Warum ekdruck?
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                  3D-Druck schlägt traditionellen Modellbau in jedem Kriterium
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Wo herkömmlicher Handmodellbau teuer, langsam und einmalig ist, liefert FDM 3D-Druck reproduzierbare Ergebnisse zu einem Bruchteil der Kosten.
                  <Link to="/ratgeber/verfahrens-vergleich" className="text-primary font-semibold hover:underline ml-1">Alle Verfahren im Vergleich →</Link>
                </p>
                {/* Stat pills */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: "bis 95%", label: "Kostenersparnis" },
                    { val: "24h", label: "Express möglich" },
                    { val: "0,1 mm", label: "Präzision" },
                  ].map(({ val, label }) => (
                    <div key={label} className="bg-muted/50 border border-border rounded-xl p-4 text-center">
                      <p className="text-xl font-bold text-primary">{val}</p>
                      <p className="text-xs text-muted-foreground mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantage pillars */}
              <div className="space-y-4">
                {[
                  { icon: TrendingDown, title: "Kein Werkzeugkostenproblem", desc: "Spritzguss-Werkzeuge kosten ab €10.000. Bei ekdruck zahlen Sie nur für Ihr Modell – ab €20." },
                  { icon: Clock, title: "Schneller als jeder Handmodellbauer", desc: "Traditioneller Modellbau: 1–4 Wochen. ekdruck Express: 24–48 Stunden österreichweit." },
                  { icon: Repeat2, title: "Beliebig reproduzierbar", desc: "Jede Kopie ist digital identisch. Korrekturen kosten nur eine Dateiänderung, keine Neuanfertigung." },
                  { icon: Leaf, title: "Made in Austria, nachhaltig", desc: "Österreichische Filamente aus Industrieabfällen. Ökostrom. Kurze Transportwege. Echte Nachhaltigkeit." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/2 transition-all">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">{title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison table */}
            <div className="rounded-2xl border border-border overflow-hidden bg-card">
              <div className="grid grid-cols-3 bg-muted/60 text-sm font-semibold">
                <div className="p-4 text-muted-foreground">Kriterium</div>
                <div className="p-4 text-primary border-x border-border text-center">ekdruck 3D-Druck</div>
                <div className="p-4 text-muted-foreground text-center">Traditionell</div>
              </div>
              {[
                { label: "Kosten (Modell)", icon: TrendingDown, good: "ab €20", bad: "€200–€10.000+" },
                { label: "Lieferzeit", icon: Clock, good: "24h Express", bad: "1–4 Wochen" },
                { label: "Komplexe Geometrien", icon: Layers, good: "Unbegrenzt", bad: "Stark limitiert" },
                { label: "Wiederholbarkeit", icon: Repeat2, good: "1:1 identisch", bad: "Handarbeit variiert" },
                { label: "Gewicht", icon: Zap, good: "Bis 80% leichter", bad: "Massiv & schwer" },
              ].map(({ label, icon: Icon, good, bad }) => (
                <div key={label} className="grid grid-cols-3 border-t border-border hover:bg-muted/20 transition-colors">
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
          </div>
        </div>
      </section>

      {/* ── SEKTION 4: PROZESS — horizontal timeline ─────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-3 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
              So funktioniert's
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Von der Anfrage zum <span className="text-gradient">fertigen Modell</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0 max-w-5xl mx-auto relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border z-0" />
            {[
              { n: "01", title: "Anfrage senden", desc: "CAD-Datei hochladen oder Idee beschreiben. Angebot erhalten Sie in unter 6 Stunden." },
              { n: "02", title: "Angebot & Freigabe", desc: "Transparenter Preis, realistische Lieferzeit. Wir optimieren Ihre Datei kostenlos." },
              { n: "03", title: "FDM-Fertigung", desc: "Produktion mit modernsten Druckern, österreichischem Filament und Ökostrom." },
              { n: "04", title: "QC & Versand", desc: "Sorgfältige Sichtprüfung. Express-Lieferung österreichweit in 24–48h." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative z-10 flex flex-col items-center text-center px-6">
                <div className="w-20 h-20 bg-background border-2 border-primary/30 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                  <span className="text-2xl font-bold text-primary">{n}</span>
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/kontakt">Jetzt anfragen — Angebot in 6h</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SEKTION 5: EXPERTISE & TECHNOLOGIE ───────────────────────────── */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-14">
              <p className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-3 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
                Technologie & Materialien
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FDM 3D-Druck: Präzision aus <span className="text-gradient">österreichischer Produktion</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Als spezialisierter <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold">FDM-Dienstleister</a> aus Gunskirchen (OÖ) kombinieren wir modernste Fertigungstechnologie mit nachhaltigen österreichischen Materialien – für Ergebnisse, die handwerklichen Modellbau in Präzision, Geschwindigkeit und Kosteneffizienz übertreffen.
              </p>
            </div>

            {/* Asymmetric layout: Text left, Material cards right */}
            <div className="grid lg:grid-cols-5 gap-10 items-start mb-12">

              {/* Left: Technology text block */}
              <div className="lg:col-span-2 space-y-5">
                <div>
                  <h3 className="font-bold text-lg mb-2">Was ist FDM-Technologie?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    FDM (Fused Deposition Modeling) ist das führende additive Fertigungsverfahren für Anschauungsmodelle und Präsentationsobjekte. Schicht für Schicht wird hochpräzise Kunststoff-Filament aufgetragen – mit Auflösungen bis 0,1 mm. Das Ergebnis: komplexe Geometrien, die mit Fräsen oder Handmodellbau nicht realisierbar wären. Kein Materialverschnitt, kein teures Werkzeug, keine Mindestmengen.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Nachhaltigkeit durch kurze Wege</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Wir beziehen ausschließlich Filamente österreichischer Hersteller, produziert aus recycelten Industrieabfällen und betrieben mit Ökostrom. Kurze Lieferwege reduzieren den CO₂-Fußabdruck gegenüber Importen aus Asien um bis zu 80 %. Additive Fertigung erzeugt grundsätzlich keinen Verschnitt – es wird nur gedruckt, was tatsächlich benötigt wird. Nachhaltigkeit ist bei ekdruck kein Marketing-Versprechen, sondern integraler Teil jedes Auftrags.
                  </p>
                </div>
                <a href="/3d-druck-materialien" className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline">
                  Alle Materialien & Spezifikationen <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right: Material cards grid */}
              <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                {[
                  {
                    name: "PLA",
                    full: "Polylactic Acid",
                    badge: "Bestseller",
                    color: "bg-primary/8 border-primary/20",
                    desc: "Biologisch abbaubar, aus nachwachsenden Rohstoffen. Ideal für Architekturmodelle und Präsentationsobjekte. Schichtauflösung bis 0,1 mm, 20+ Farben verfügbar.",
                    props: ["60°C temp.-beständig", "Biologisch abbaubar", "Hochdetailliert"],
                  },
                  {
                    name: "PETG",
                    full: "Polyethylenterephthalat",
                    badge: "Outdoor",
                    color: "bg-muted/50 border-border",
                    desc: "UV-beständig und langlebig – perfekt für Außen-Exponate und Messemodelle, die Transportbelastungen standhalten müssen.",
                    props: ["80°C temp.-beständig", "UV-beständig", "Schlagfest"],
                  },
                  {
                    name: "ABS",
                    full: "Acrylnitril-Butadien-Styrol",
                    badge: "Robust",
                    color: "bg-muted/50 border-border",
                    desc: "Hochwertiger Industriestandard für robuste Modelle. Nachbearbeitbar durch Schleifen, Grundieren und Lackieren – für optisch perfekte Exponate.",
                    props: ["100°C temp.-beständig", "Lackierbar", "Schleifbar"],
                  },
                  {
                    name: "TPU",
                    full: "Thermoplastisches Polyurethan",
                    badge: "Flexibel",
                    color: "bg-muted/50 border-border",
                    desc: "Elastisches, gummimähnliches Material für spezielle Anwendungen. Shore-Härte 95A, Dehnung bis 500 %. Für Dichtungen, flexible Verbindungselemente und haptische Modelle.",
                    props: ["Shore 95A", "500% dehnbar", "Abriebfest"],
                  },
                ].map(({ name, full, badge, color, desc, props }) => (
                  <div key={name} className={`rounded-xl border p-5 ${color}`}>
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
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SEKTION 6: FAQ ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-3 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Häufig gestellte <span className="text-gradient">Fragen</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="faq-0" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  Was kostet 3D-Druck bei ekdruck?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Unsere Preise starten ab €20 pro Modell. Die genauen Kosten hängen von drei Faktoren ab: Material (PLA, PETG, ABS oder TPU), Druckvolumen und gewählter Qualitätsstufe. Express-Service ist gegen einen Aufpreis jederzeit buchbar. Mengenrabatte gewähren wir ab 5 Einheiten. Ein transparentes, individuelles Angebot erhalten Sie bei uns in unter 6 Stunden. Alle Details im <Link to="/ratgeber/kosten-guide" className="text-primary hover:underline font-semibold">Preis-Ratgeber</Link>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-1" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  Wie schnell erhalte ich mein 3D-gedrucktes Teil?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Standard-Lieferung beträgt 3–5 Werktage österreichweit, inklusive versandkostenfreier Lieferung ab €100 Bestellwert. Mit unserem <Link to="/rapid-prototyping" className="text-primary hover:underline font-semibold">Express-Service</Link> fertigen und liefern wir bereits in 24–48 Stunden – ideal für kurzfristige Messe-Deadlines oder Wettbewerbsabgaben. Nach Deutschland liefern wir in 2–4 Werktagen via DHL oder GLS.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  Welche Dateiformate werden akzeptiert?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Wir akzeptieren alle gängigen 3D-Formate: STL, OBJ, STEP, IGES, 3MF, STP sowie native CAD-Formate aus ArchiCAD, Revit, SolidWorks und Fusion 360. Keine CAD-Datei vorhanden? Kein Problem – wir erstellen das 3D-Modell nach Ihren Skizzen, Fotos oder technischen Zeichnungen. Mehr zu unserem <Link to="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Modellierungsservice</Link>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  Für welche Branchen und Anwendungsfälle ist ekdruck geeignet?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Unsere Kernzielgruppen sind Architekten und Planer (maßstabsgetreue Architekturmodelle 1:50–1:500), Messeaussteller (Exponate und Anschauungsmodelle für Messen), Künstler und Galerien (Skulpturen und Kunstobjekte) sowie Firmenkunden und Industriebetriebe (Prototypen, Ersatzteile, Schulungsmodelle). Wir fertigen ausschließlich Anschauungsmodelle – keine Funktionsteile oder sicherheitsrelevante Bauteile. Details zu den <Link to="/3d-druck-materialien" className="text-primary hover:underline font-semibold">Materialien und Anwendungen</Link>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  Warum österreichisches Filament statt günstigeren Importen?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Österreichische Filamente werden aus recycelten Industrieabfällen unter strengen Qualitätsstandards gefertigt, betrieben mit Ökostrom und geprüft auf gleichmäßige Extrusionsqualität. Das bedeutet für Sie: konsistente Druckergebnisse, geringere Fehlerquote, und ein CO₂-Fußabdruck um bis zu 80 % niedriger als bei Importware aus Asien. Kurzlieferwege bedeuten auch, dass wir schneller reagieren können. Alles zum Thema im <Link to="/ratgeber/material-guide" className="text-primary hover:underline font-semibold">Material-Guide</Link>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  Welche Nachbearbeitungs- und Finishing-Optionen gibt es?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  Ja – ekdruck bietet ein breites Spektrum an Nachbearbeitung: Schleifen und Glätten für glatte Oberflächen, Grundieren als Vorbereitung für Lackierung, Lackieren in RAL-Farben oder Sonderfarben, Aceton-Dampf-Glättung für ABS-Modelle sowie Klebeverbindungen für Segmentmodelle. So erhalten Sie ein Endprodukt, das direkt präsentationsbereit ist. Details zu allen Optionen unter <Link to="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Einzelanfertigungen</Link>.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-6 p-5 bg-primary/5 border border-primary/15 rounded-xl text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Noch Fragen?</span>{" "}
                Unser <span className="text-primary font-semibold">🤖 KI-Berater</span> antwortet sofort – Button unten rechts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEKTION 6: ÜBER UNS ──────────────────────────────────────────── */}
      <About />

      {/* ── SEKTION 7: GOOGLE BEWERTUNGEN ────────────────────────────────── */}
      <GoogleReviewsSection />

      {/* ── SEKTION 8: TRUST + REGIONALE PRÄSENZ ────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Text + CTA */}
            <div>
              <p className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-4 bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
                <MapPin className="w-3.5 h-3.5" /> Standort & Lieferung
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Regionaler Partner für <span className="text-gradient">Österreich & Deutschland</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Unser Standort in <strong className="text-foreground">Gunskirchen (OÖ)</strong> liegt zentral: 20 min von Linz, 1,5h von Wien, 1,5h von Salzburg, 2h von Graz. Österreichweit Express in 24–48h, nach Deutschland in 2–4 Werktagen via DHL/GLS. Persönliche Abholung nach Vereinbarung möglich.
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

            {/* Germany links + Bundesländer */}
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

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <Contact />
      <Footer />
      <ExitIntentPopup />
    </div>
  </>;
};

export default Index;
