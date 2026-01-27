import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Layers, 
  Clock, 
  Ruler, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  Palette,
  Eye,
  TrendingUp,
  Award,
  Zap,
  Target,
  Users
} from "lucide-react";

const Architekturmodelle = () => {
  const stats = [
    { value: "80%", label: "Kosteneinsparung", description: "vs. handgefertigte Modelle" },
    { value: "3-5", label: "Werktage", description: "Standard-Lieferzeit" },
    { value: "0.1mm", label: "Präzision", description: "Schichtauflösung" },
    { value: "100+", label: "Projekte", description: "für Architekten realisiert" }
  ];

  const benefits = [
    {
      icon: Layers,
      title: "Maßstabsgetreue Präzision",
      description: "Detailgetreue Umsetzung komplexer Gebäudestrukturen in Maßstäben von 1:50 bis 1:500. Selbst filigrane Strukturen wie Treppen, Geländer und Fassadendetails werden exakt reproduziert."
    },
    {
      icon: Clock,
      title: "Schnelle Umsetzung",
      description: "Von der 3D-Datei zum fertigen Modell in 3-5 Werktagen. Express-Service in 24-48h für dringende Wettbewerbsabgaben möglich."
    },
    {
      icon: Palette,
      title: "Vielfältige Oberflächen",
      description: "Weiße Studienmodelle für klare Formensprache, farbige Präsentationsmodelle oder transparente PETG-Elemente für Glasflächen und Fassaden."
    },
    {
      icon: Ruler,
      title: "Flexible Größen",
      description: "Modelle von wenigen Zentimetern bis zu großformatigen Präsentationsobjekten. Mehrteilige Konstruktion für Modelle über 30cm möglich."
    }
  ];

  const useCases = [
    {
      title: "Wettbewerbsmodelle",
      description: "Überzeugende Präsentation Ihrer Entwürfe bei Architekturwettbewerben. Laut Formlabs spielen physische Modelle trotz digitaler Tools eine entscheidende Rolle bei der Visualisierung.",
      details: ["Schnelle Umsetzung für Deadlines", "Hochwertige matte Oberflächen", "Mehrere Varianten zum Vergleich"],
      highlight: "Ideal für Jurys"
    },
    {
      title: "Kundenpräsentationen",
      description: "Beeindrucken Sie Bauherren mit greifbaren Modellen Ihrer Planung. Studien zeigen: Haptische Modelle erhöhen die Entscheidungsbereitschaft um bis zu 40%.",
      details: ["Maßstabsgetreu und detailliert", "Professionelles Erscheinungsbild", "Einfache Erklärung komplexer Entwürfe"],
      highlight: "Höhere Abschlussquote"
    },
    {
      title: "Studienmodelle",
      description: "Schnelle Konzeptmodelle für die Entwurfsphase. Iterieren Sie Ihre Designs kostengünstig und testen Sie Varianten physisch.",
      details: ["Ab €20 pro Modell", "Schnelle Iteration", "Verschiedene Maßstäbe"],
      highlight: "Kosteneffizient"
    },
    {
      title: "Städtebauliche Modelle",
      description: "Quartiere und städtebauliche Zusammenhänge visualisieren. Modularer Aufbau ermöglicht flexible Erweiterungen und Umgebungsdarstellungen.",
      details: ["Modularer Aufbau möglich", "Große Formate bis 50cm+", "Umgebungsmodellierung inklusive"],
      highlight: "Für Gemeinden & Investoren"
    }
  ];

  const comparisonData = [
    { feature: "Kosten", traditional: "€500-2.000+", threeDPrint: "Ab €20-200", winner: "3d" },
    { feature: "Lieferzeit", traditional: "2-4 Wochen", threeDPrint: "3-5 Werktage", winner: "3d" },
    { feature: "Änderungen", traditional: "Komplett neu", threeDPrint: "Schnelle Iteration", winner: "3d" },
    { feature: "Reproduktion", traditional: "Aufwändig", threeDPrint: "Identische Kopien", winner: "3d" },
    { feature: "Detailgenauigkeit", traditional: "Handwerklich begrenzt", threeDPrint: "0.1mm Präzision", winner: "3d" }
  ];

  const materials = [
    { name: "PLA Weiß", use: "Studienmodelle, saubere Oberflächen", popular: true },
    { name: "PLA Grau", use: "Betonstruktur, Rohbau-Optik", popular: false },
    { name: "PETG Transparent", use: "Glasflächen, Fassadenelemente", popular: true },
    { name: "Holz-Filament", use: "Natürliche Holzoptik", popular: false }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck Architekturmodelle | 80% günstiger als handgefertigt | ekdruck.at</title>
        <meta name="description" content="Präzise 3D-gedruckte Architekturmodelle für Wettbewerbe, Kundenpräsentationen und Studien. Bis zu 80% günstiger als traditioneller Modellbau. Ab €20, Express 24h." />
        <meta name="keywords" content="Architekturmodell 3D-Druck, Architekturmodelle drucken lassen, Wettbewerbsmodell, Präsentationsmodell, Gebäudemodell, Architektur Modellbau Österreich" />
        <link rel="canonical" href="https://ek-druck.at/architekturmodelle" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Für Architekten & Planer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Architekturmodelle<br />
                  <span className="text-primary">bis zu 80% günstiger</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Verwandeln Sie Ihre CAD-Entwürfe in beeindruckende physische Modelle. 
                  Schneller und kostengünstiger als traditioneller Modellbau – ohne Kompromisse bei der Qualität.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link to="/3d-druck-bestellen">
                      Jetzt Preis berechnen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/referenzen">Beispiele ansehen</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0 Google</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Made in Austria
                  </div>
                </div>
              </div>
              
              {/* Stats Grid instead of placeholder */}
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

        {/* Market Context */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">€101 Mrd.</div>
                <div className="text-sm text-muted-foreground">3D-Druck Markt bis 2032</div>
              </div>
              <div className="hidden md:block h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary">23,4%</div>
                <div className="text-sm text-muted-foreground">Jährliches Wachstum</div>
              </div>
              <div className="hidden md:block h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary">€4 Mrd.+</div>
                <div className="text-sm text-muted-foreground">Quartalsumsatz Q3/2025</div>
              </div>
              <div className="hidden md:block h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary">41%</div>
                <div className="text-sm text-muted-foreground">Marktanteil Nordamerika</div>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Quelle: Fortune Business Insights, 3druck.com – Marktdaten 2024/2025
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum 3D-Druck für Architekturmodelle?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Schneller, präziser und flexibler als traditioneller Modellbau – mit Kostenvorteilen von bis zu 80%
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

        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">3D-Druck vs. Traditioneller Modellbau</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ein direkter Vergleich zeigt die Vorteile des 3D-Drucks
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-3 bg-muted/50 p-4 font-semibold text-sm">
                  <div>Kriterium</div>
                  <div className="text-center">Traditionell</div>
                  <div className="text-center text-primary">3D-Druck</div>
                </div>
                {comparisonData.map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 p-4 items-center ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                    <div className="font-medium">{row.feature}</div>
                    <div className="text-center text-muted-foreground text-sm">{row.traditional}</div>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        <CheckCircle className="w-3 h-3" />
                        {row.threeDPrint}
                      </span>
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Anwendungsbereiche</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der Konzeptskizze bis zum finalen Präsentationsmodell
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold">{useCase.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {useCase.highlight}
                      </span>
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

        {/* Materials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Empfohlene Materialien</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Für jede Anwendung das passende Material
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <Card key={index} className={`relative overflow-hidden ${material.popular ? 'border-primary border-2' : ''}`}>
                  {material.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl-lg font-medium">
                      Beliebt
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">{material.name}</h3>
                    <p className="text-sm text-muted-foreground">{material.use}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">So einfach geht's</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                In nur 3 Schritten zu Ihrem Architekturmodell
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Datei hochladen", description: "Laden Sie Ihre STL, OBJ oder 3MF Datei in unseren Konfigurator", icon: Zap },
                { step: "2", title: "Konfigurieren", description: "Wählen Sie Material, Farbe und Qualität – Preis sofort sichtbar", icon: Target },
                { step: "3", title: "Bestellen & Erhalten", description: "Bezahlen Sie online und erhalten Sie Ihr Modell in 3-5 Werktagen", icon: Award }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-sm text-primary font-bold mb-2">Schritt {item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Architekturmodelle;
