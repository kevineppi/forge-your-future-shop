import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import RegionalCoverage from "@/components/landing/RegionalCoverage";
import KeywordRichContent from "@/components/landing/KeywordRichContent";
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
  Truck,
  Target,
  BarChart3,
  Briefcase,
  GraduationCap
} from "lucide-react";

const Firmenkunden = () => {
  const stats = [
    { value: "100+", label: "Firmenkunden", description: "Vertrauen uns bereits" },
    { value: "5.0", label: "Google Rating", description: "Höchste Zufriedenheit" },
    { value: "24h", label: "Express möglich", description: "Bei dringenden Projekten" },
    { value: "100%", label: "Termintreue", description: "Zuverlässige Lieferung" }
  ];

  const benefits = [
    {
      icon: Receipt,
      title: "Ordentliche Rechnungsstellung",
      description: "Professionelle Rechnungen mit ausgewiesener MwSt. (20%) für Ihre Buchhaltung. Zahlung auf Rechnung für Stammkunden möglich."
    },
    {
      icon: Clock,
      title: "Zuverlässige Lieferzeiten",
      description: "Verbindliche Termine, die zu Ihren Projektplänen passen. Express in 24-48h bei dringenden Anforderungen."
    },
    {
      icon: Handshake,
      title: "Persönlicher Ansprechpartner",
      description: "Direkte Kommunikation per E-Mail und Telefon – ohne Warteschleifen, Tickets oder Chatbots. Schnelle Antworten garantiert."
    },
    {
      icon: ShieldCheck,
      title: "Gleichbleibende Qualität",
      description: "Konsistente Ergebnisse bei wiederkehrenden Aufträgen. Dokumentierte Prozesse und Qualitätskontrolle bei jedem Auftrag."
    }
  ];

  const industries = [
    {
      title: "Architektur & Planung",
      description: "Präsentationsmodelle, Wettbewerbsmodelle und Konzeptstudien für Architekturbüros und Planungsbüros.",
      link: "/architekturmodelle",
      icon: Building,
      stats: "Bis 80% günstiger als Handmodelle"
    },
    {
      title: "Messebau & Events",
      description: "Produktmodelle, Dekorationsobjekte und Präsentationselemente für Messebauer und Eventfirmen.",
      link: "/messemodelle",
      icon: Users,
      stats: "Express 24h verfügbar"
    },
    {
      title: "Agenturen & Design",
      description: "Modelle für Produktpräsentationen, Mockups und Kundenvorführungen. Ideal für Werbe- und Designagenturen.",
      link: "/einzelanfertigungen",
      icon: Target,
      stats: "Über 20 Farben & Materialien"
    },
    {
      title: "Bildung & Forschung",
      description: "Anschauungsmodelle für Schulen, Universitäten und Forschungseinrichtungen. Didaktische Modelle und Demonstrationsobjekte.",
      link: "/einzelanfertigungen",
      icon: GraduationCap,
      stats: "Mengenrabatte ab 10 Stück"
    }
  ];

  const process = [
    { step: "1", title: "Anfrage senden", description: "Beschreiben Sie Ihr Projekt und laden Sie Ihre 3D-Dateien hoch oder nutzen Sie unseren Online-Konfigurator.", icon: FileText },
    { step: "2", title: "Angebot erhalten", description: "Sie erhalten sofort einen Preis im Konfigurator oder ein individuelles Angebot innerhalb von 24h.", icon: BarChart3 },
    { step: "3", title: "Auftrag bestätigen", description: "Bei Einverständnis starten wir sofort mit der Umsetzung. Zahlung per Rechnung für Stammkunden.", icon: Briefcase },
    { step: "4", title: "Lieferung & Rechnung", description: "Pünktliche Lieferung mit ordentlicher Rechnung inkl. ausgewiesener MwSt.", icon: Truck }
  ];

  const testimonials = [
    {
      quote: "Zuverlässiger Partner für unsere Architekturmodelle. Die Qualität ist konstant hervorragend und die Lieferung immer pünktlich.",
      author: "Architekturbüro",
      location: "Oberösterreich",
      rating: 5
    },
    {
      quote: "Auch bei kurzfristigen Messeterminen können wir uns auf ekdruck verlassen. Der Express-Service hat uns schon mehrfach gerettet.",
      author: "Messebau-Unternehmen",
      location: "Wien",
      rating: 5
    },
    {
      quote: "Einfache Abwicklung und faire Preise. Die Rechnungsstellung ist vorbildlich – genau was wir als Unternehmen brauchen.",
      author: "Werbeagentur",
      location: "Salzburg",
      rating: 5
    }
  ];

  const advantages = [
    { title: "Keine Mindestbestellmenge", desc: "Auch Einzelstücke ohne Aufpreis" },
    { title: "Mengenrabatte", desc: "Ab 10 Stück attraktive Staffelpreise" },
    { title: "Sammelrechnungen", desc: "Monatliche Abrechnung für Stammkunden" },
    { title: "Rahmenverträge", desc: "Individuelle Konditionen auf Anfrage" },
    { title: "Vertraulichkeit", desc: "NDA auf Wunsch verfügbar" },
    { title: "Schnelle Reaktion", desc: "Antwort innerhalb von 24h garantiert" }
  ];

  const faqs = [
    {
      question: "Wie erfolgt die Rechnungsstellung für Firmenkunden?",
      answer: "Sie erhalten eine ordentliche Rechnung mit ausgewiesener MwSt. (20%) für Ihre Buchhaltung. Stammkunden können auch auf Rechnung mit Zahlungsziel bestellen. Sammelrechnungen am Monatsende sind ebenfalls möglich."
    },
    {
      question: "Gibt es Mengenrabatte für Unternehmen?",
      answer: "Ja, ab 10 identischen Teilen bieten wir attraktive Staffelpreise. Bei regelmäßigen Aufträgen sind individuelle Rahmenverträge mit besonderen Konditionen möglich. Sprechen Sie uns für ein individuelles Angebot an."
    },
    {
      question: "Wie werden vertrauliche Projekte geschützt?",
      answer: "Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung (NDA). Alle Projektdaten werden vertraulich behandelt und nach Abschluss des Auftrags gelöscht."
    },
    {
      question: "Wie schnell erhalte ich eine Antwort auf Anfragen?",
      answer: "Wir garantieren eine Rückmeldung innerhalb von 24 Stunden an Werktagen. Bei dringenden Projekten erreichen Sie uns auch telefonisch für sofortige Beratung."
    },
    {
      question: "Welche Branchen bedienen Sie als B2B-Partner?",
      answer: "Wir arbeiten mit Architekturbüros, Messebauern, Werbeagenturen, Designbüros, Bildungseinrichtungen und vielen weiteren Branchen. Für jede Branche haben wir spezialisierte Lösungen."
    },
    {
      question: "Kann ich einen persönlichen Ansprechpartner bekommen?",
      answer: "Ja, für Firmenkunden gibt es direkte Kommunikation per E-Mail und Telefon – ohne Warteschleifen oder Chatbots. Sie erhalten persönliche Beratung und schnelle Antworten auf Ihre Fragen."
    }
  ];

  const keywordContent = {
    title: "Warum Unternehmen uns als Partner wählen",
    intro: "Von Architekturbüros in Wien über Messebauer in Salzburg bis zu Agenturen in Graz – Unternehmen in ganz Österreich vertrauen auf ekdruck als zuverlässigen 3D-Druck Partner. Wir verstehen die Anforderungen von Geschäftskunden: Termintreue, Qualitätskonstanz und professionelle Abwicklung.",
    blocks: [
      {
        title: "Planbare Kosten",
        content: "Unser Online-Konfigurator liefert sofortige, verbindliche Preise. Keine Wartezeit auf Angebote, keine versteckten Kosten. Sie wissen genau, was Sie bekommen und was es kostet – ideal für Ihre Budgetplanung und Kalkulation."
      },
      {
        title: "Skalierbare Kapazität",
        content: "Egal ob ein Einzelstück oder 100 identische Teile – wir skalieren mit Ihren Anforderungen. Moderne Druckfarm ermöglicht parallele Fertigung mehrerer Aufträge ohne Qualitätsverlust."
      },
      {
        title: "Dokumentation",
        content: "Für jeden Auftrag erhalten Sie eine ordentliche Rechnung mit ausgewiesener MwSt. für Ihre Buchhaltung. Auf Wunsch liefern wir Materialzertifikate und Projektdokumentation."
      },
      {
        title: "Langfristige Partnerschaft",
        content: "Stammkunden profitieren von Rahmenverträgen, Mengenrabatten und bevorzugter Bearbeitung. Wir investieren in langfristige Geschäftsbeziehungen und wachsen mit den Anforderungen unserer Partner."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Zielgruppen", url: "#" },
    { name: "Firmenkunden", url: "/firmenkunden" }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck für Firmenkunden | B2B Projekte & Aufträge | ekdruck.at</title>
        <meta name="description" content="Zuverlässiger 3D-Druck Partner für Unternehmen in Österreich. Ordentliche Rechnungsstellung mit MwSt., persönliche Betreuung und gleichbleibende Qualität." />
        <meta name="keywords" content="3D-Druck B2B, Firmenkunden, Geschäftskunden, Projektaufträge, Rechnungsstellung, Unternehmen 3D-Druck Österreich" />
        <link rel="canonical" href="https://ek-druck.at/firmenkunden" />
      </Helmet>

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building className="w-4 h-4" />
                  Für Unternehmen
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Ihr Partner für<br />
                  <span className="text-primary">professionelle Projekte</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Von der ersten Anfrage bis zur Lieferung – wir verstehen die 
                  Anforderungen von Geschäftskunden. Ordentliche Rechnungen mit MwSt., 
                  verbindliche Termine und gleichbleibende Qualität.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link to="/3d-druck-bestellen">
                      Projekt starten
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="#contact">Beratungsgespräch</a>
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

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vorteile für Firmenkunden</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Was uns als B2B-Partner auszeichnet
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

        {/* Industries */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Branchen die wir bedienen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Spezialisierte Lösungen für verschiedene Anforderungen
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <industry.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                        <p className="text-muted-foreground mb-3">{industry.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                            {industry.stats}
                          </span>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link to={industry.link}>
                              Mehr erfahren <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">So funktioniert die Zusammenarbeit</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ein einfacher und transparenter Prozess
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                  )}
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
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

        {/* Advantages Grid */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">B2B-Konditionen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Faire Bedingungen für professionelle Zusammenarbeit
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {advantages.map((adv, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{adv.title}</h3>
                        <p className="text-sm text-muted-foreground">{adv.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden sagen</h2>
              <p className="text-muted-foreground">Echte Bewertungen von Geschäftskunden</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
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

        {/* Keyword Rich Content */}
        <KeywordRichContent 
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
          ctaText="B2B-Projekt starten"
        />

        {/* Regional Coverage */}
        <RegionalCoverage 
          serviceName="3D-Druck für Unternehmen"
          description="Wir arbeiten mit Unternehmen in ganz Österreich zusammen. Von Kleinbetrieben bis zu Konzernen – professionelle Abwicklung und zuverlässige Lieferung."
        />

        {/* FAQ Section */}
        <FAQSection 
          faqs={faqs} 
          title="Häufige Fragen für Firmenkunden"
          subtitle="Antworten auf die wichtigsten Fragen zur B2B-Zusammenarbeit"
          schemaId="firmenkunden"
        />

        {/* Related Pages */}
        <RelatedPages currentPage="/firmenkunden" />
      </main>

      <Footer />
    </>
  );
};

export default Firmenkunden;
