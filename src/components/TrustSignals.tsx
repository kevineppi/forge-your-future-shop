import { Shield, Award, Leaf, Clock, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSignals = () => {
  const signals = [
    {
      icon: Shield,
      title: "100% Österreichisch",
      description: "Produktion & Materialien aus Österreich",
    },
    {
      icon: Leaf,
      title: "Nachhaltig",
      description: "Umweltfreundliche Materialien & kurze Transportwege",
    },
    {
      icon: Award,
      title: "Premium Qualität",
      description: "Hochwertige FDM-Drucker & zertifizierte Materialien",
    },
    {
      icon: Clock,
      title: "Express möglich",
      description: "24h-Service für eilige Projekte verfügbar",
    },
    {
      icon: MapPin,
      title: "Regional verwurzelt",
      description: "Persönlicher Service aus Oberösterreich",
    },
    {
      icon: CheckCircle,
      title: "Geprüfte Qualität",
      description: "Jedes Teil wird vor Versand kontrolliert",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum <span className="text-primary">ekdruck</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vertrauen Sie auf österreichische Qualität, Nachhaltigkeit und persönlichen Service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.map((signal, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <signal.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{signal.title}</h3>
                    <p className="text-sm text-muted-foreground">{signal.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner/Certifications Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-6">Vertrauenswürdiger Partner für:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-muted-foreground font-medium">Maschinenbau</div>
            <div className="text-muted-foreground font-medium">Prototyping</div>
            <div className="text-muted-foreground font-medium">Produktentwicklung</div>
            <div className="text-muted-foreground font-medium">Architektur</div>
            <div className="text-muted-foreground font-medium">Design</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
