import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  Globe, 
  Recycle, 
  Users, 
  Clock, 
  Target,
  Palette,
  Settings,
  MapPin,
  Award
} from "lucide-react";

const ContentSection = () => {
  const regions = [
    "3D-Druck Wien", "3D-Druck Salzburg", "3D-Druck Linz", "3D-Druck Graz", 
    "3D-Druck Innsbruck", "3D-Druck Klagenfurt", "3D-Druck Bregenz"
  ];

  const technologies = [
    "FDM 3D-Druck Verfahren", "Rapid Prototyping Verfahren", "Additives Fertigungsverfahren",
    "Multi Jet Fusion", "3D-Druck CAD", "Finishing Druck", "3D-Druck Bilder"
  ];

  const applications = [
    "3D-Druck für Privatpersonen", "Firmen 3D-Druck", "Industrieller 3D-Druck",
    "Medizinischer 3D-Druck", "Architektur Modelle", "Automotive Prototyping"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">3D-Druck Dienstleister Österreich</span> - Umfassende Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Als führender <strong className="text-primary">3D-Druck Dienstleister in Österreich</strong> bieten wir umfassende Lösungen 
            für <strong className="text-primary">FDM 3D-Druck</strong>, <strong className="text-primary">Rapid Prototyping</strong> und 
            <strong className="text-primary">additive Fertigung</strong>. Unser <strong className="text-primary">3D-Druckservice Online</strong> 
            erreicht ganz Österreich mit nachhaltigen, innovativen Fertigungslösungen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Regional Coverage */}
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <MapPin className="mr-3 h-6 w-6 text-primary" />
                3D-Druck Service Österreichweit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Unser <strong className="text-primary">3D-Druck Service</strong> ist in allen österreichischen Bundesländern verfügbar. 
                Von <strong className="text-primary">3D-Druck Wien</strong> bis <strong className="text-primary">3D-Druck Salzburg</strong> - 
                wir liefern qualitativ hochwertige Ergebnisse österreichweit.
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((region, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {region}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Settings className="mr-3 h-6 w-6 text-primary" />
                3D-Druck Technologien & Verfahren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Modernste <strong className="text-primary">FDM 3D-Druck Verfahren</strong> und 
                <strong className="text-primary">Rapid Prototyping Verfahren</strong> für optimale Ergebnisse. 
                Unsere <strong className="text-primary">3D-Druckerei</strong> nutzt fortschrittliche Technologien 
                für präzise Fertigung.
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Applications */}
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Target className="mr-3 h-6 w-6 text-primary" />
                Anwendungsbereiche & Zielgruppen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Von <strong className="text-primary">3D-Druck für Privatpersonen</strong> bis zu 
                <strong className="text-primary">Firmen 3D-Druck</strong> - unser Service deckt alle Bereiche ab. 
                Professionelle Lösungen für Industrie, Medizin und private Projekte.
              </p>
              <div className="flex flex-wrap gap-2">
                {applications.map((app, index) => (
                  <Badge key={index} variant="default" className="text-xs">
                    {app}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <Factory className="mr-3 h-8 w-8 text-primary" />
              3D-Druck Dienstleister Vergleich - Warum ekdruck e.U.?
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Als spezialisierter <strong className="text-primary">3D-Druck Dienstleister in Österreich</strong> unterscheiden wir uns 
                durch nachhaltige Produktion und regionale Nähe. Unser <strong className="text-primary">FDM 3D-Druck Service</strong> 
                nutzt ausschließlich österreichisches Filament aus Industrieabfällen, was uns von anderen 
                <strong className="text-primary">3D-Druck Firmen</strong> unterscheidet.
              </p>
              <p>
                Während viele <strong className="text-primary">3D-Druck Shops in Österreich</strong> importierte Materialien verwenden, 
                setzen wir auf lokale Nachhaltigkeit. Unser <strong className="text-primary">3D-Druckservice Online</strong> ermöglicht 
                einfache Bestellung und transparente Preisgestaltung für <strong className="text-primary">3D-Druck Salzburg</strong>, 
                Wien und alle anderen Bundesländer.
              </p>
              <p>
                Der Vorteil unseres <strong className="text-primary">Rapid Prototyping Services</strong>: Express-Fertigung in 24-48h, 
                persönliche Beratung und millimetergenaue Präzision. Besonders für 
                <strong className="text-primary">Firmen 3D-Druck</strong> bieten wir maßgeschneiderte Lösungen und langfristige Partnerschaften.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <Recycle className="mr-3 h-8 w-8 text-primary" />
              Nachhaltiger 3D-Druck - Österreichische Innovation
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Unser nachhaltiger Ansatz macht uns zu einem einzigartigen <strong className="text-primary">3D-Druck Dienstleister</strong>. 
                Das von uns verwendete österreichische Filament wird aus Industrieabfällen hergestellt und reduziert den 
                ökologischen Fußabdruck erheblich. Dies ist besonders wichtig für umweltbewusste Kunden und 
                <strong className="text-primary">Firmen 3D-Druck</strong> Projekte.
              </p>
              <p>
                Unser <strong className="text-primary">FDM 3D-Druck Verfahren</strong> ermöglicht präzise Fertigung bei gleichzeitig 
                nachhaltiger Produktion. Im Vergleich zu traditionellen Fertigungsverfahren reduziert 
                <strong className="text-primary">additives Fertigungsverfahren</strong> Materialverschwendung um bis zu 90%.
              </p>
              <p>
                Für <strong className="text-primary">3D-Druck für Privatpersonen</strong> bedeutet dies hochwertige Qualität bei 
                gutem Gewissen. Unser <strong className="text-primary">3D-Druck Shop Österreich</strong> bietet transparente 
                Informationen über Materialherkunft und Umweltauswirkungen aller Projekte.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ihr Partner für professionellen 3D-Druck in Österreich
            </h3>
            <p className="text-muted-foreground mb-6">
              Entdecken Sie die Möglichkeiten moderner additiver Fertigung mit unserem nachhaltigen 
              <strong className="text-primary">3D-Druck Service</strong>. Von der ersten Idee bis zum fertigen Produkt - 
              wir begleiten Sie bei jedem Schritt.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Jetzt kostenlose Beratung vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;