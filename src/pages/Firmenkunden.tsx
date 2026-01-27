import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Building, 
  FileText, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  ShieldCheck,
  Handshake,
  Receipt,
  Truck
} from "lucide-react";

const Firmenkunden = () => {
  const benefits = [
    {
      icon: Receipt,
      title: "Einfache Rechnungsstellung",
      description: "Ordentliche Rechnungen mit ausgewiesener MwSt. für Ihre Buchhaltung"
    },
    {
      icon: Clock,
      title: "Zuverlässige Lieferzeiten",
      description: "Verbindliche Termine, die zu Ihren Projektplänen passen"
    },
    {
      icon: Handshake,
      title: "Persönlicher Ansprechpartner",
      description: "Direkte Kommunikation ohne Warteschleifen oder Tickets"
    },
    {
      icon: ShieldCheck,
      title: "Gleichbleibende Qualität",
      description: "Konsistente Ergebnisse bei wiederkehrenden Aufträgen"
    }
  ];

  const services = [
    {
      title: "Architektur & Planung",
      description: "Präsentationsmodelle, Wettbewerbsmodelle und Konzeptstudien für Architekturbüros",
      link: "/architekturmodelle",
      icon: Building
    },
    {
      title: "Messebau & Events",
      description: "Produktmodelle, Dekorationsobjekte und Präsentationselemente für Messen",
      link: "/messemodelle",
      icon: Users
    },
    {
      title: "Agenturen & Design",
      description: "Prototypen für Produktpräsentationen, Mockups und Kundenvorführungen",
      link: "/einzelanfertigungen",
      icon: FileText
    },
    {
      title: "Bildung & Forschung",
      description: "Anschauungsmodelle für Schulen, Universitäten und Forschungseinrichtungen",
      link: "/einzelanfertigungen",
      icon: ShieldCheck
    }
  ];

  const process = [
    { step: "1", title: "Anfrage senden", description: "Beschreiben Sie Ihr Projekt und laden Sie Ihre 3D-Dateien hoch" },
    { step: "2", title: "Angebot erhalten", description: "Wir kalkulieren und senden Ihnen ein transparentes Angebot" },
    { step: "3", title: "Auftrag bestätigen", description: "Bei Einverständnis starten wir sofort mit der Umsetzung" },
    { step: "4", title: "Lieferung & Rechnung", description: "Pünktliche Lieferung mit ordentlicher Rechnung" }
  ];

  const testimonials = [
    {
      quote: "Zuverlässiger Partner für unsere Architekturmodelle. Die Qualität ist konstant hervorragend.",
      author: "Architekturbüro",
      location: "Oberösterreich"
    },
    {
      quote: "Auch bei kurzfristigen Messeterminen können wir uns auf ekdruck verlassen.",
      author: "Messebau-Unternehmen",
      location: "Wien"
    }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck für Firmenkunden | B2B Projekte & Aufträge | ekdruck.at</title>
        <meta name="description" content="Zuverlässiger 3D-Druck Partner für Unternehmen. Ordentliche Rechnungsstellung, persönliche Betreuung und gleichbleibende Qualität für Ihre Projekte." />
        <meta name="keywords" content="3D-Druck B2B, Firmenkunden, Geschäftskunden, Projektaufträge, Rechnungsstellung, Unternehmen 3D-Druck" />
        <link rel="canonical" href="https://ek-druck.at/firmenkunden" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building className="w-4 h-4" />
                  Für Unternehmen
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Ihr Partner für<br />
                  <span className="text-primary">professionelle Projekte</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Von der ersten Anfrage bis zur Lieferung – wir verstehen die 
                  Anforderungen von Geschäftskunden. Ordentliche Rechnungen, 
                  verbindliche Termine und gleichbleibende Qualität.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/3d-druck-bestellen">
                      Projekt starten
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/kontakt">Beratungsgespräch</Link>
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
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <Handshake className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vorteile für Firmenkunden</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Was uns von anderen Anbietern unterscheidet
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

        {/* Services by Industry */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Branchen die wir bedienen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Spezialisierte Lösungen für verschiedene Anforderungen
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link to={service.link}>
                            Mehr erfahren <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
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
              <h2 className="text-3xl font-bold mb-4">So funktioniert die Zusammenarbeit</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ein einfacher und transparenter Prozess
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Was unsere Kunden sagen</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div className="text-sm">
                      <span className="font-semibold">{testimonial.author}</span>
                      <span className="text-muted-foreground"> · {testimonial.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für Ihr Projekt?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Starten Sie jetzt mit Ihrem ersten Auftrag oder kontaktieren 
              Sie uns für ein persönliches Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/3d-druck-bestellen">
                  <Truck className="mr-2 w-5 h-5" />
                  Auftrag starten
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/kontakt">Beratung anfragen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Firmenkunden;