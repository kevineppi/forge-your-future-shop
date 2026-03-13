import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Layers, Zap, Award } from "lucide-react";

interface RegionalUniqueContentProps {
  regionName: string;
  regionSlug: string;
  deliveryTime: string;
  type: 'messe' | 'architektur';
  localMessen?: { name: string; location: string; type: string }[];
  isGerman?: boolean;
}

const RegionalUniqueContent = ({
  regionName,
  regionSlug,
  deliveryTime,
  type,
  localMessen = [],
  isGerman = false,
}: RegionalUniqueContentProps) => {
  const countryText = isGerman ? "Deutschland" : "Österreich";
  const countryPrep = isGerman ? "in Deutschland" : "in Österreich";

  if (type === 'messe') {
    const topMessen = localMessen.slice(0, 3);
    return (
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  3D-Messemodelle für {regionName} – Was Sie wissen sollten
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-foreground space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  Der Messestandort {regionName} zählt zu den wichtigen Messeplätzen {countryPrep}. Unternehmen, die auf Fachmessen in {regionName} ausstellen, stehen vor einer zentralen Frage: Wie präsentiert man komplexe Produkte oder Gebäudeprojekte auf engem Raum so, dass Messebesucher sofort verstehen, worum es geht? Die Antwort lautet: mit einem professionellen 3D-gedruckten Messemodell von ekdruck e.U.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Wir produzieren Messemodelle nach Maß – von kleinen Produktmodellen im Tischformat bis zu spektakulären Exponaten mit über einem Meter Kantenlänge. Jedes Modell wird individuell nach Ihren CAD-Daten oder Zeichnungen gefertigt, sodass die Genauigkeit stimmt. Die Lieferung nach {regionName} erfolgt in der Regel innerhalb von {deliveryTime}. Für kurzfristige Messetermine bieten wir Express-Fertigung in 24 Stunden an.
                </p>

                {topMessen.length > 0 && (
                  <p className="text-muted-foreground leading-relaxed">
                    In {regionName} finden regelmäßig bedeutende Fachveranstaltungen statt – darunter{' '}
                    {topMessen.map((m, i) => (
                      <span key={i}>
                        <strong>{m.name}</strong> ({m.type}){i < topMessen.length - 2 ? ', ' : i === topMessen.length - 2 ? ' und ' : ''}
                      </span>
                    ))}
                    . Für all diese Messen liefern wir termingerecht und direkt zum Messegelände.
                  </p>
                )}

                <p className="text-muted-foreground leading-relaxed">
                  Unsere Messemodelle werden aus hochwertigen Materialien wie PLA+, PETG und ASA im FDM-Verfahren gedruckt. Das Ergebnis: leichte, robuste und detailgetreue Modelle, die den Transportbelastungen standhalten und am Messestand professionell wirken. Auf Wunsch lackieren und nachbearbeiten wir die Objekte – für ein messeoptimiertes Finish. Kunden aus {regionName} schätzen besonders die kurzen Reaktionszeiten und die persönliche Betreuung durch unser Team.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
                  {[
                    { icon: Zap, title: "Express 24h", desc: `Für dringende Messetermine in ${regionName}` },
                    { icon: Layers, title: "Alle Materialien", desc: "PLA+, PETG, ASA – je nach Anforderung" },
                    { icon: Award, title: "Maßgefertigt", desc: "Aus Ihren CAD-Daten, STL oder OBJ-Dateien" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/40">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Der Bestellprozess ist einfach: Sie senden uns Ihre Dateien (STL, OBJ oder CAD-Daten), wir erstellen binnen 6 Stunden ein unverbindliches Angebot. Nach Freigabe beginnen wir sofort mit der Produktion. Der Versand nach {regionName} erfolgt mit Track & Trace – Sie wissen immer, wo Ihr Modell gerade ist. Bei Bestellungen ab €100 entfallen die Versandkosten.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  }

  // Architektur version
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                3D-Architekturmodelle für {regionName} – Alles auf einen Blick
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-foreground space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Architekten und Planungsbüros in {regionName} stehen oft vor der Herausforderung, komplexe Bauprojekte anschaulich zu präsentieren. Ein maßstabsgetreues 3D-gedrucktes Architekturmodell löst dieses Problem: Es vermittelt Bauherren, Investoren und Genehmigungsbehörden auf einen Blick, wie das Objekt später aussehen wird – besser als jeder Grundriss oder jede Visualisierung am Bildschirm es könnte.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                ekdruck e.U. fertigt Architekturmodelle in allen gängigen Maßstäben – von 1:500 für städtebauliche Übersichten bis 1:50 für detaillierte Innenraumdarstellungen. Wir verarbeiten STL-, OBJ- und 3MF-Dateien, die direkt aus ArchiCAD, Autodesk Revit, SketchUp, Rhino oder anderen CAD-Programmen exportiert werden können. Die Lieferung nach {regionName} erfolgt in {deliveryTime}, für Wettbewerbsabgaben ist auch Express-Fertigung in 24 Stunden möglich.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Die Vorteile des 3D-Drucks gegenüber klassischem Modellbau aus Holz oder Pappe liegen auf der Hand: präzisere Geometrien, reproduzierbare Qualität, einfache Nachbestellung einzelner Teile und – bei komplexen Formen – deutlich niedrigere Kosten. Für Architekturbüros in {regionName} bedeutet das: professionelle Modelle für Präsentationen, Baugenehmigungen oder Wettbewerbe, ohne wochenlange Vorlaufzeit.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
                {[
                  { icon: Zap, title: "Express 24h", desc: `Für Wettbewerbs-Deadlines in ${regionName}` },
                  { icon: Layers, title: "Alle Maßstäbe", desc: "1:50 bis 1:500, individuell nach Bedarf" },
                  { icon: Award, title: "CAD-kompatibel", desc: "ArchiCAD, Revit, SketchUp, Rhino, u.v.m." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/40">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Unsere Architekturmodelle werden je nach Anforderung aus PLA+ (weiß, grau oder farbig), transparentem PETG für Glasflächen oder robustem ASA für Außenmodelle gedruckt. Auf Wunsch schleifen und lackieren wir die Modelle für eine perfekte Oberflächenqualität. Kunden aus {regionName} erhalten ein unverbindliches Angebot innerhalb von 6 Stunden nach Dateieinsendung. Bei Bestellungen ab €100 ist der Versand nach {regionName} kostenfrei.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Überzeugen Sie sich selbst: Viele Architekturbüros {countryPrep} vertrauen auf unsere Modelle für Ausstellungen, Bauherren-Präsentationen und Genehmigungsverfahren. Kontaktieren Sie uns – wir beraten Sie gerne zur optimalen Lösung für Ihr Projekt in {regionName}.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default RegionalUniqueContent;
