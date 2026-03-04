import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import { ArrowRight, CheckCircle, Clock, Building2, Ruler, ChevronRight } from "lucide-react";

const ArchitekturmodellGuide = () => {
  const faqs = [
    {
      question: "Was kostet ein 3D-gedrucktes Architekturmodell?",
      answer: "Einfache Studienmodelle starten ab ca. €20–50. Präsentationsmodelle im Maßstab 1:100 kosten typischerweise €80–200. Städtebauliche Modelle mit mehreren Gebäuden €300–800+. Der genaue Preis hängt von Größe, Detailgrad und Material ab."
    },
    {
      question: "Welcher Maßstab eignet sich am besten?",
      answer: "1:50 für detaillierte Innenraumdarstellungen und Einzelräume. 1:100 für Gesamtgebäude und Kundenpräsentationen – das universell beliebteste Format. 1:200 bis 1:500 für städtebauliche Quartiersentwicklungen. Wir beraten Sie gerne zum optimalen Maßstab."
    },
    {
      question: "Wie exportiere ich mein CAD-Modell für den 3D-Druck?",
      answer: "Aus ArchiCAD: Datei → Speichern unter → STL. Aus Revit: Add-Ins oder manuell via IFC-Konvertierung. Aus SketchUp: Datei → Exportieren → 3D-Modell → STL. Aus Rhino: Datei → Export selected → STL. Bei Problemen helfen wir gerne."
    },
    {
      question: "Wie lange dauert die Fertigung eines Architekturmodells?",
      answer: "Standard-Lieferzeit: 3–5 Werktage. Express für Wettbewerbsabgaben: 24–48h (50% Aufpreis). Große Städtebaumodelle mit vielen Gebäuden: 7–10 Tage. Wir empfehlen 2 Wochen Puffer für entspannte Planung."
    },
    {
      question: "Sind auch transparente Glaselemente möglich?",
      answer: "Ja – mit PETG Transparent können Glasfassaden, Fenster und Atrien halbtransparent dargestellt werden. Das Material eignet sich auch für Dachöffnungen und Lichthöfe. Kombination mit weißem PLA für Gebäudekörper ergibt ein professionelles Gesamtbild."
    }
  ];

  const masstabsGuide = [
    { scale: "1:20", use: "Innenraum-Detail", example: "Einzelner Raum, Treppe, Fassadenausschnitt", size: "Für ein Einfamilienhaus: 50×40cm" },
    { scale: "1:50", use: "Innenarchitektur", example: "Wohnung, Einzelgeschoss", size: "Für ein Einfamilienhaus: 20×16cm" },
    { scale: "1:100", use: "Gebäudepräsentation", example: "Gesamtgebäude, Haupt-Präsentationsformat", size: "Für ein Einfamilienhaus: 10×8cm" },
    { scale: "1:200", use: "Quartier / Städtebau", example: "Mehrere Gebäude, Umgebung", size: "Für ein Einfamilienhaus: 5×4cm" },
    { scale: "1:500", use: "Städtebau / Masterplan", example: "Ganzes Quartier, Stadtentwicklung", size: "Für ein Einfamilienhaus: 2×1,6cm" },
  ];

  return (
    <>
      <Helmet>
        <title>Architekturmodelle 3D-Druck: Maßstäbe, Kosten & Export 2025 | ekdruck</title>
        <meta name="description" content="Architekturmodell im 3D-Druck: Welcher Maßstab? Was kostet es? Wie exportiere ich aus ArchiCAD, Revit & SketchUp? → Kompletter Guide für Architekten 2025" />
        <meta name="keywords" content="architekturmodell 3d-druck guide, architekturmodell maßstab, architekturmodell kosten, architekturmodell cad export, architekt 3d-modell österreich" />
        <link rel="canonical" href="https://www.ek-druck.at/ratgeber/architekturmodell-guide" />
        <meta property="og:title" content="Architekturmodelle 3D-Druck: Maßstäbe, Kosten & Export Guide" />
        <meta property="og:description" content="Der komplette Guide für Architekten: Welcher Maßstab, welche Kosten, welcher CAD-Export? Alles erklärt mit echten Beispielen." />
        <meta property="og:type" content="article" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Ratgeber", url: "/ratgeber" },
        { name: "Architekturmodell Guide", url: "/ratgeber/architekturmodell-guide" }
      ]} />

      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-28 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/ratgeber" className="hover:text-primary transition-colors">Ratgeber</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Architekturmodell Guide</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              12 Min. Lesezeit · Oktober 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Architekturmodelle 3D-Druck:<br />
              <span className="text-primary">Maßstäbe, Kosten & CAD-Export</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Der komplette Guide für Architekten und Planer: Welcher Maßstab für welchen Zweck? 
              Was kostet ein Präsentationsmodell? Wie exportiere ich aus ArchiCAD, Revit und SketchUp?
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  Kostenloses Angebot in 6h
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/architekturmodelle">Architekturmodelle ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl space-y-16">

            {/* Maßstab Guide */}
            <section>
              <h2 className="text-3xl font-bold mb-2">Der Maßstabs-Guide für Architekten</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Die Wahl des richtigen Maßstabs ist entscheidend für Kosten, Detailgrad und Wirkung. Diese Übersicht hilft bei der Entscheidung:
              </p>
              <Card className="overflow-hidden mb-6">
                <div className="bg-muted/50 grid grid-cols-4 p-4 font-semibold text-sm border-b border-border">
                  <div>Maßstab</div>
                  <div>Verwendung</div>
                  <div className="hidden md:block">Beispiel</div>
                  <div className="text-primary">Modellgröße</div>
                </div>
                {masstabsGuide.map((item, i) => (
                  <div key={i} className={`grid grid-cols-4 p-4 items-center ${i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                    <div className="font-bold text-primary">{item.scale}</div>
                    <div className="text-sm font-medium">{item.use}</div>
                    <div className="hidden md:block text-xs text-muted-foreground">{item.example}</div>
                    <div className="text-xs text-muted-foreground">{item.size}</div>
                  </div>
                ))}
              </Card>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Empfehlung:</strong> Für die meisten Kundenpräsentationen ist <strong className="text-foreground">1:100</strong> das ideale Format – 
                  groß genug für Details, klein genug um transportabel zu bleiben. 
                  Für Wettbewerbe oft 1:200 um die Umgebung einbeziehen zu können.
                </p>
              </div>
            </section>

            {/* Kosten */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Kosten: Was kostet ein Architekturmodell?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { type: "Studienmodell", desc: "Einfaches Konzeptmodell, weiß, ohne Umgebung", price: "Ab €20–50", scale: "1:200 bis 1:100" },
                  { type: "Präsentationsmodell", desc: "Detailliert, farbig, mit Umgebungsdarstellung", price: "€80–250", scale: "1:100" },
                  { type: "Wettbewerbsmodell", desc: "Hochwertig, mehrere Gebäude, Außenanlage", price: "€150–500", scale: "1:200 bis 1:100" },
                  { type: "Städtebauliches Modell", desc: "Ganzes Quartier, modularer Aufbau", price: "€300–1.000+", scale: "1:500 bis 1:200" },
                ].map((item, i) => (
                  <Card key={i} className="border-2 hover:border-primary/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="font-bold mb-1">{item.type}</div>
                      <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-primary font-semibold text-sm">{item.price}</span>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{item.scale}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Alle Preise ohne Mehrwertsteuer, für österreichische Adressen. 
                Exaktes Angebot basierend auf Ihrer Datei:{" "}
                <Link to="/kontakt" className="text-primary hover:underline font-medium">Jetzt kostenlos anfragen →</Link>
              </p>
            </section>

            {/* CAD Export */}
            <section>
              <h2 className="text-3xl font-bold mb-6">CAD-Export: Schritt-für-Schritt Anleitung</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Wir verarbeiten STL, OBJ und 3MF Dateien. So exportieren Sie aus den gängigsten Programmen:
              </p>
              <div className="space-y-4">
                {[
                  {
                    prog: "ArchiCAD",
                    steps: ["Datei → Speichern unter → Format: STL", "Maßstab 1:1 (original), Genauigkeit: Fein", "Datei einsenden – fertig!"]
                  },
                  {
                    prog: "Revit",
                    steps: ["Add-Ins → Export → STL (oder STL Exporter Plugin)", "Alternativ: IFC exportieren, wir konvertieren", "Bei Problemen: CAD-Service auf Anfrage"]
                  },
                  {
                    prog: "SketchUp",
                    steps: ["Datei → Exportieren → 3D-Modell → STL", "Plugin 'SketchUp STL' aus dem Extension Warehouse", "Maßeinheit auf Millimeter setzen vor Export"]
                  },
                  {
                    prog: "Rhino",
                    steps: ["Datei → Export Selected → STL", "Render-Polygonnetz verwenden für gute Qualität", "Toleranz: 0.01mm für präzise Ergebnisse"]
                  },
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="font-bold">{item.prog}</span>
                      </div>
                      <ol className="space-y-1">
                        {item.steps.map((step, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{j+1}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-4 bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Kein 3D-Modell vorhanden?</strong> Wir erstellen das 3D-Modell basierend auf Grundrissen, 
                  Ansichten oder Fotos. Zusatzkosten auf Anfrage.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Häufige Fragen</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Bereit für Ihr Architekturmodell?</h2>
              <p className="text-muted-foreground mb-6">
                Kostenlose Beratung · Angebot in 6h · 80% günstiger als traditioneller Modellbau
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/kontakt">
                    Kostenloses Angebot anfragen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/architekturmodelle">Alle Architekturmodell-Infos</Link>
                </Button>
              </div>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Weitere Ratgeber</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Messemodell Guide", link: "/ratgeber/messemodell-guide", desc: "Kosten, Timing & Tipps für Messeaussteller" },
                  { title: "Material-Guide", link: "/ratgeber/material-guide", desc: "PLA vs. PETG – welches Material wofür?" },
                  { title: "Kosten-Guide", link: "/ratgeber/kosten-guide", desc: "3D-Druck Preise in Österreich erklärt" },
                ].map((r, i) => (
                  <Link key={i} to={r.link} className="block border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-sm transition-all group">
                    <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{r.title}</div>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default ArchitekturmodellGuide;
