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
  Sparkles
} from "lucide-react";

const Messemodelle = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Express-Fertigung",
      description: "Schnelle Lieferung auch bei kurzfristigen Messeterminen – Express in 24-48h"
    },
    {
      icon: Scale,
      title: "Jede Größe möglich",
      description: "Von kleinen Produktmodellen bis zu beeindruckenden Eyecatcher-Objekten"
    },
    {
      icon: Sparkles,
      title: "Hochwertige Optik",
      description: "Professionelle Oberflächen für anspruchsvolle Präsentationen"
    },
    {
      icon: Package,
      title: "Transportsicher",
      description: "Leichte und robuste Objekte, ideal für den Messetransport"
    }
  ];

  const useCases = [
    {
      title: "Produktmodelle",
      description: "Überdimensionale Produktdarstellungen als Blickfang am Messestand",
      details: ["Maßstab frei wählbar", "Originalgetreue Details", "Auffällige Präsentation"]
    },
    {
      title: "Demonstrationsobjekte",
      description: "Schnittmodelle und Funktionsdarstellungen für technische Erklärungen",
      details: ["Transparente Materialien", "Mehrteilige Modelle", "Austauschbare Komponenten"]
    },
    {
      title: "Marken-Dekorationen",
      description: "Individuelle 3D-Logos und Markenelemente für Ihren Stand",
      details: ["Corporate Design Farben", "Große Formate", "Leicht zu montieren"]
    },
    {
      title: "Architektur-Visualisierungen",
      description: "Immobilienprojekte und Standort-Modelle greifbar machen",
      details: ["Maßstabsgetreu", "Hochwertige Oberflächen", "Modularer Aufbau"]
    }
  ];

  const timeline = [
    { days: "1-2 Tage", type: "Express", description: "Für dringende Messetermine" },
    { days: "3-5 Tage", type: "Standard", description: "Optimales Preis-Leistungs-Verhältnis" },
    { days: "5-10 Tage", type: "Großprojekte", description: "Umfangreiche Messeinstallationen" }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck Messemodelle | Präsentationsobjekte für Events | ekdruck.at</title>
        <meta name="description" content="Beeindruckende 3D-gedruckte Messemodelle und Präsentationsobjekte. Express-Fertigung für kurzfristige Termine. Produktmodelle, Dekorationsobjekte und mehr." />
        <meta name="keywords" content="Messemodell 3D-Druck, Präsentationsmodell, Messebau, Event Dekoration, Produktmodell, Demonstrationsobjekt, Express Messemodell" />
        <link rel="canonical" href="https://ek-druck.at/messemodelle" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Presentation className="w-4 h-4" />
                  Für Messebau & Events
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Messemodelle die<br />
                  <span className="text-primary">Aufmerksamkeit gewinnen</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Beeindrucken Sie Messebesucher mit individuellen 3D-Objekten. 
                  Von Produktmodellen bis zu spektakulären Dekorationselementen – 
                  auch bei kurzfristigen Terminen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/3d-druck-bestellen">
                      Jetzt Modell bestellen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/referenzen">Beispiele ansehen</Link>
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
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <Presentation className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perfekt für den Messeauftritt</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wir verstehen die Anforderungen im Messebau
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Lieferzeiten für Messen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Auch bei kurzfristigen Terminen sind wir Ihr Partner
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <Card key={index} className={index === 0 ? "border-primary border-2" : ""}>
                  <CardContent className="p-6 text-center">
                    {index === 0 && (
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        Empfohlen bei Zeitdruck
                      </span>
                    )}
                    <div className="text-3xl font-bold text-primary mb-2">{item.days}</div>
                    <h3 className="font-semibold mb-1">{item.type}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Anwendungsbereiche</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vielfältige Einsatzmöglichkeiten für Ihren Messeauftritt
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
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

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Messe steht bevor?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Kontaktieren Sie uns für Express-Anfragen oder laden Sie Ihre 
              3D-Datei direkt hoch für einen sofortigen Preis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/3d-druck-bestellen">
                  Jetzt Preis berechnen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/kontakt">Express-Anfrage stellen</Link>
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