import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Shield, Award, Zap, CheckCircle } from "lucide-react";

const Reviews = () => {
  // Echte Kundenbewertungen
  const reviews = [
    {
      id: 1,
      name: "Hannah E.",
      rating: 5,
      text: "Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen..",
      date: "vor 2 Wochen",
      verified: true
    },
    {
      id: 2,
      name: "Simone G.",
      rating: 5,
      text: "Anwortet schnell👌 Preis- Leistung extrem fair Empfehlenswert!",
      date: "vor 1 Monat",
      verified: true
    },
    {
      id: 3,
      name: "Klaus F.",
      rating: 5,
      text: "Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war, was für meine Anwendung nicht relevant gewesen wäre. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.",
      date: "vor 3 Wochen",
      verified: true
    },
    {
      id: 4,
      name: "Silvio T.",
      rating: 5,
      text: "Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Kann ich nur weiterempfehlen! Sehr gerne wieder. Preis Leistung ist einfach Super. Sehr gerne wieder",
      date: "vor 1 Woche",
      verified: true
    }
  ];

  const trustIndicators = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ISO 9001 Zertifiziert",
      description: "Qualitätsmanagement nach internationalen Standards"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "5 Jahre Erfahrung",
      description: "Bewährte Expertise in der additiven Fertigung"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "24h Express Service",
      description: "Schnelle Umsetzung für eilige Projekte"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "100% Zufriedenheitsgarantie",
      description: "Ihre Zufriedenheit ist unser Anspruch"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Warum <span className="text-gradient">EK-Druck</span> vertrauen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Unsere Kunden schätzen unsere Zuverlässigkeit, Qualität und den persönlichen Service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trustIndicators.map((indicator, index) => (
              <Card key={index} className="gradient-card border-0 hover:shadow-card transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {indicator.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{indicator.title}</h3>
                  <p className="text-sm text-muted-foreground">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Das sagen unsere <span className="text-gradient">Kunden</span>
          </h3>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold ml-2">4.9</span>
            <span className="text-muted-foreground ml-2">aus 23 Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={review.id} className="gradient-card border-0 hover:shadow-card transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.15}s`}}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      {review.verified && (
                        <div className="flex items-center gap-1 text-xs text-green-600">
                          <CheckCircle className="w-3 h-3" />
                          Verifiziert
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="gradient-card border-0 max-w-2xl mx-auto animate-scale-in">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-4">Werden Sie unser nächster zufriedener Kunde!</h4>
              <p className="text-muted-foreground mb-6">
                Starten Sie noch heute Ihr 3D-Druck Projekt und erleben Sie unseren erstklassigen Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                >
                  Jetzt Projekt starten
                </a>
                <a 
                  href="tel:+436765517197" 
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105"
                >
                  Anrufen: +43 676 5517197
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;