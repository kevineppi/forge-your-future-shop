import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface RegionalCoverageProps {
  serviceName: string;
  description?: string;
}

const RegionalCoverage = ({ serviceName, description }: RegionalCoverageProps) => {
  const regions = [
    { name: "Wien", url: "/3d-druck-wien" },
    { name: "Oberösterreich", url: "/3d-druck-oberoesterreich" },
    { name: "Niederösterreich", url: "/3d-druck-niederoesterreich" },
    { name: "Steiermark", url: "/3d-druck-steiermark" },
    { name: "Salzburg", url: "/3d-druck-salzburg" },
    { name: "Kärnten", url: "/3d-druck-kaernten" },
    { name: "Tirol", url: "/3d-druck-innsbruck" },
    { name: "Vorarlberg", url: "/3d-druck-vorarlberg" },
  ];

  const cities = [
    { name: "Linz", url: "/3d-druck-linz" },
    { name: "Graz", url: "/3d-druck-graz" },
    { name: "Salzburg Stadt", url: "/3d-druck-salzburg" },
    { name: "Innsbruck", url: "/3d-druck-innsbruck" },
    { name: "Klagenfurt", url: "/3d-druck-klagenfurt" },
    { name: "Wels", url: "/3d-druck-wels" },
    { name: "St. Pölten", url: "/3d-druck-st-poelten" },
    { name: "Dornbirn", url: "/3d-druck-dornbirn" },
  ];

  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Versand in ganz Österreich</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {serviceName} in ganz Österreich
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description || `Von unserem Standort in Gunskirchen (Oberösterreich) liefern wir ${serviceName} in alle Bundesländer. Standardversand in 3-5 Werktagen, Express in 24-48h.`}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Bundesländer</h3>
            <div className="flex flex-wrap gap-2">
              {regions.map((region, index) => (
                <Link 
                  key={index} 
                  to={region.url}
                  className="bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {region.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Städte</h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, index) => (
                <Link 
                  key={index} 
                  to={city.url}
                  className="bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-muted/30 rounded-xl max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">Standort Gunskirchen, OÖ:</strong> Zentraler Standort für schnelle Lieferung nach Wien (2h Fahrt), 
            Linz (20min), Salzburg (1h), Graz (2h) und in die gesamte DACH-Region. 
            Persönliche Abholung nach Vereinbarung möglich.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegionalCoverage;
