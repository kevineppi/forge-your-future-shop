import { pricingConfig } from "@/data/pricingConfig";
import { Badge } from "@/components/ui/badge";

interface MaterialInfo {
  key: string;
  label: string;
  use: string;
  pros: string;
  temp: string;
  highlight?: boolean;
}

const materials: MaterialInfo[] = [
  { key: "PLA", label: "PLA", use: "Anschauungsmodelle, Designstudien, Architekturmodelle", pros: "Günstig, leicht zu drucken, gute Oberfläche", temp: "bis 60°C", highlight: true },
  { key: "PLA+", label: "PLA+", use: "Robustere Präsentationsmodelle", pros: "Höhere Schlagfestigkeit als PLA", temp: "bis 65°C" },
  { key: "PETG", label: "PETG", use: "Messemodelle, Außenbereich-Exponate", pros: "UV-beständig, chemisch resistent", temp: "bis 80°C" },
  { key: "ABS", label: "ABS", use: "Ausstellungsobjekte mit Nachbearbeitung", pros: "Glätt- und lackierbar, stabil", temp: "bis 100°C" },
  { key: "ASA", label: "ASA", use: "Outdoor-Exponate, Modelle für den Außenbereich", pros: "UV- und witterungsbeständig", temp: "bis 100°C" },
  { key: "TPU", label: "TPU (flexibel)", use: "Flexible Designmodelle, haptische Muster", pros: "Gummiartig, biegsam, stoßfest", temp: "bis 80°C" },
  { key: "PA6-CF", label: "PA6-CF (Carbon)", use: "Leichtbau-Anschauungsmodelle mit Premium-Optik", pros: "Extrem leicht und steif, Carbon-Look", temp: "bis 150°C" },
  { key: "PC", label: "Polycarbonat", use: "Transparente Anschauungsmodelle", pros: "Transparent, hitzebeständig", temp: "bis 130°C" },
];

const MaterialComparisonTable = () => (
  <section className="py-16 md:py-24 bg-muted/20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
        Materialvergleich für Anschauungsmodelle
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
        Wir drucken mit 8 verschiedenen FDM-Materialien – jedes mit eigenen Stärken.
        Welches Material für Ihr Modell optimal ist, besprechen wir gerne persönlich.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground">Material</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground hidden md:table-cell">Einsatzgebiet</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Vorteile</th>
              <th className="text-right py-3 px-4 font-semibold text-foreground">Preis/kg</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((m) => (
              <tr key={m.key} className={`border-b border-border/50 hover:bg-muted/40 transition-colors ${m.highlight ? 'bg-primary/5' : ''}`}>
                <td className="py-3 px-4">
                  <span className="font-semibold text-foreground">{m.label}</span>
                  {m.highlight && <Badge className="ml-2 text-[10px]" variant="secondary">Beliebt</Badge>}
                  <p className="text-xs text-muted-foreground mt-0.5 md:hidden">{m.use}</p>
                </td>
                <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">{m.use}</td>
                <td className="py-3 px-4 text-muted-foreground">{m.pros}</td>
                <td className="py-3 px-4 text-right font-semibold text-foreground whitespace-nowrap">
                  €{pricingConfig.pricePerKg[m.key]}/kg
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-6">
        Alle Materialpreise sind Richtwerte. Die Materialempfehlung wird nach persönlicher Prüfung Ihres Modells individuell besprochen.
      </p>
    </div>
  </section>
);

export default MaterialComparisonTable;
