import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Presentation, 
  Zap, 
  Clock, 
  Package, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  Scale,
  Sparkles,
  Eye,
  Truck,
  Award,
  Target,
  TrendingUp,
  Calendar
} from "lucide-react";

const Messemodelle = () => {
  const stats = [
    { value: "24h", label: "Express", description: "Schnellste Lieferzeit" },
    { value: "2m+", label: "Maximalgröße", description: "Für Eyecatcher-Objekte" },
    { value: "50+", label: "Messen", description: "Bereits beliefert" },
    { value: "100%", label: "Termintreue", description: "Zuverlässige Lieferung" }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Express-Fertigung 24-48h",
      description: "Auch bei kurzfristigen Messeterminen liefern wir pünktlich. Unser Express-Service garantiert Lieferung innerhalb von 24-48 Stunden nach Auftragsbestätigung."
    },
    {
      icon: Scale,
      title: "Jede Größe möglich",
      description: "Von kleinen Produktmodellen (ab 5cm) bis zu beeindruckenden Eyecatcher-Objekten über 2 Meter. Mehrteilige Konstruktion für XXL-Formate."
    },
    {
      icon: Sparkles,
      title: "Hochwertige Optik",
      description: "Professionelle Oberflächen für anspruchsvolle Präsentationen. Nachbearbeitung wie Schleifen, Lackieren oder Beschriften auf Anfrage."
    },
    {
      icon: Package,
      title: "Transportsicher",
      description: "Leichte PLA- und PETG-Objekte sind ideal für den Messetransport. Bis zu 70% leichter als vergleichbare Holz- oder Metallmodelle."
    }
  ];

  const useCases = [
    {
      title: "Überdimensionale Produktmodelle",
      description: "Vergrößerte Darstellungen Ihrer Produkte als Blickfang am Messestand. Perfekt für technische Produkte, Medizintechnik oder Konsumgüter.",
      details: ["Maßstab frei wählbar (z.B. 10:1)", "Originalgetreue Details", "Bis zu 2m Größe"],
      icon: Target,
      highlight: "Maximale Aufmerksamkeit"
    },
    {
      title: "Schnittmodelle & Cutaways",
      description: "Zeigen Sie das Innenleben Ihrer Produkte. Schnittmodelle und Funktionsdarstellungen für technische Erklärungen und Schulungen.",
      details: ["Transparente Materialien möglich", "Mehrteilige Modelle", "Austauschbare Komponenten"],
      icon: Eye,
      highlight: "Technische Präsentation"
    },
    {
      title: "3D-Logos & Markenelemente",
      description: "Individuelle 3D-Logos, Schriftzüge und Markenelemente für Ihren Messestand. Corporate Design in allen Farben umsetzbar.",
      details: ["Exakte Farbmatchung", "Große Formate bis 1m+", "Leichte Montage"],
      icon: Award,
      highlight: "Branding auf höchstem Niveau"
    },
    {
      title: "Architektur & Immobilien",
      description: "Immobilienprojekte und Standort-Modelle für Immobilienmessen und Investorenpräsentationen. Maßstabsgetreue Visualisierung.",
      details: ["Maßstäbe 1:50 bis 1:500", "Umgebungsdarstellung", "Modularer Aufbau"],
      icon: Presentation,
      highlight: "Für Immobilienmessen"
    }
  ];

  const timeline = [
    { days: "24-48h", type: "Express", description: "Für dringende Messetermine", price: "+50% Aufpreis", recommended: true },
    { days: "3-5 Tage", type: "Standard", description: "Optimales Preis-Leistungs-Verhältnis", price: "Normalpreis", recommended: false },
    { days: "5-10 Tage", type: "Großprojekte", description: "Umfangreiche Messeinstallationen", price: "Nach Vereinbarung", recommended: false }
  ];

  const messeTypen = [
    { name: "Industriemessen", examples: "Hannover Messe, EMO, LIGNA" },
    { name: "Baumessen", examples: "BAU München, Bauen & Wohnen" },
    { name: "Medizintechnik", examples: "MEDICA, Compamed" },
    { name: "Konsumgüter", examples: "Ambiente, IFA" },
    { name: "Automobilmessen", examples: "IAA, Auto Zürich" },
    { name: "Immobilien", examples: "Expo Real, Immobilienmessen" }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck Messemodelle | Express 24h | Produktmodelle für Events | ekdruck.at</title>
        <meta name="description" content="Beeindruckende 3D-gedruckte Messemodelle und Präsentationsobjekte. Express-Fertigung in 24-48h für kurzfristige Termine. Produktmodelle bis 2m Größe." />
        <meta name="keywords" content="Messemodell 3D-Druck, Präsentationsmodell, Messebau, Event Dekoration, Produktmodell, Express Messemodell, Messestand Objekte" />
        <link rel="canonical" href="https://ek-druck.at/messemodelle" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Presentation className="w-4 h-4" />
                  Für Messebau & Events
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Messemodelle<br />
                  <span className="text-primary">die Aufmerksamkeit gewinnen</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Beeindrucken Sie Messebesucher mit individuellen 3D-Objekten. 
                  Von Produktmodellen bis zu spektakulären Eyecatcher-Elementen – 
                  Express in 24h auch bei kurzfristigen Terminen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link to="/3d-druck-bestellen">
                      Jetzt Preis berechnen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/referenzen">Projekte ansehen</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Express 24h möglich</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Made in Austria
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className={`${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-card'} border-0 shadow-lg hover:shadow-xl transition-shadow`}>
                    <CardContent className="p-6">
                      <div className={`text-3xl md:text-4xl font-bold mb-1 ${index === 0 ? '' : 'text-primary'}`}>
                        {stat.value}
                      </div>
                      <div className={`font-semibold mb-1 ${index === 0 ? 'text-primary-foreground/90' : ''}`}>
                        {stat.label}
                      </div>
                      <div className={`text-sm ${index === 0 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Messe-Typen Banner */}
        <section className="py-8 bg-muted/30 border-y border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-4">Wir liefern für alle großen Messetypen</p>
            <div className="flex flex-wrap justify-center gap-4">
              {messeTypen.map((messe, index) => (
                <div key={index} className="bg-background px-4 py-2 rounded-full border border-border text-sm">
                  <span className="font-medium">{messe.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfekt für den Messeauftritt</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Wir verstehen die besonderen Anforderungen im Messebau
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lieferzeiten für Messen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Auch bei kurzfristigen Terminen sind wir Ihr zuverlässiger Partner
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <Card key={index} className={`relative overflow-hidden ${item.recommended ? "border-primary border-2 shadow-lg" : ""}`}>
                  {item.recommended && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 text-center">
                      ⚡ Für dringende Projekte
                    </div>
                  )}
                  <CardContent className={`p-6 text-center ${item.recommended ? 'pt-10' : ''}`}>
                    <div className="text-4xl font-bold text-primary mb-2">{item.days}</div>
                    <h3 className="font-bold text-lg mb-1">{item.type}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full">{item.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Anwendungsbereiche</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vielfältige Einsatzmöglichkeiten für Ihren Messeauftritt
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-xl font-bold">{useCase.title}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium whitespace-nowrap">
                            {useCase.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Messe-Checkliste</h2>
                <p className="text-muted-foreground">So planen Sie Ihr Messeprojekt optimal</p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {[
                      { time: "4 Wochen vorher", task: "3D-Dateien vorbereiten oder erstellen lassen" },
                      { time: "3 Wochen vorher", task: "Material und Farbe auswählen, Angebot einholen" },
                      { time: "2 Wochen vorher", task: "Auftrag bestätigen (Standardlieferung)" },
                      { time: "1 Woche vorher", task: "Express-Bestellung bei kurzfristigen Änderungen" },
                      { time: "2-3 Tage vorher", task: "Lieferung erhalten, Qualitätskontrolle" },
                      { time: "Messetag", task: "Beeindrucken Sie Ihre Besucher!" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-32 shrink-0">
                          <span className="text-sm font-bold text-primary">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span>{item.task}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Messe steht bevor?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
              Kontaktieren Sie uns für Express-Anfragen oder laden Sie Ihre 
              3D-Datei direkt hoch für einen sofortigen Preis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/3d-druck-bestellen">
                  <Truck className="mr-2 w-5 h-5" />
                  Jetzt Preis berechnen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#contact">Express-Anfrage stellen</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Messemodelle;
