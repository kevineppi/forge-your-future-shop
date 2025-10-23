import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const glossaryTerms = [
  {
    term: "Additive Fertigung",
    category: "Verfahren",
    definition: "Oberbegriff für alle Fertigungsverfahren, bei denen Material schichtweise aufgetragen wird, um ein dreidimensionales Objekt zu erzeugen. Im Gegensatz zu subtraktiven Verfahren (wie CNC-Fräsen) wird Material hinzugefügt statt abgetragen. Umfasst Technologien wie FDM, SLA, SLS und weitere 3D-Druckverfahren."
  },
  {
    term: "FDM (Fused Deposition Modeling)",
    category: "Verfahren",
    definition: "Auch Schmelzschichtung oder Fused Filament Fabrication (FFF) genannt. Das am weitesten verbreitete 3D-Druckverfahren, bei dem thermoplastisches Filament durch eine beheizte Düse geschmolzen und schichtweise auf eine Bauplatte aufgetragen wird. Ideal für Prototypen und Funktionsteile aus Kunststoff."
  },
  {
    term: "Filament",
    category: "Material",
    definition: "Das Rohmaterial für FDM-3D-Drucker in Form eines kontinuierlichen Kunststoffdrahts, meist auf Spulen aufgewickelt. Standarddurchmesser sind 1,75mm oder 2,85mm. Erhältlich in verschiedenen Materialien wie PLA, PETG, ABS, TPU und technischen Hochleistungskunststoffen."
  },
  {
    term: "Extruder",
    category: "Hardware",
    definition: "Die zentrale Komponente eines FDM-Druckers, bestehend aus Kaltende (Cold-End) zum Filamenttransport und Heizende (Hot-End) zum Aufschmelzen. Der Extruder zieht das Filament ein, schmilzt es und presst es durch die Düse auf die Bauplatte. Unterscheidung zwischen Bowden- und Direct-Drive-Extrudern."
  },
  {
    term: "Hot-End",
    category: "Hardware",
    definition: "Der beheizte Teil des Extruders, der das Filament aufschmilzt. Besteht aus Heatblock (Heizblock), Heatbreak (thermische Trennung), Düse und Heizelement. Die Temperaturregelung ist kritisch für die Druckqualität und variiert je nach Material zwischen 180°C (PLA) und 280°C+ (PC, Nylon)."
  },
  {
    term: "Düse (Nozzle)",
    category: "Hardware",
    definition: "Das Endstück des Hot-Ends, durch das das geschmolzene Filament gepresst wird. Standarddurchmesser ist 0,4mm, verfügbar von 0,2mm (hohe Details) bis 1,2mm (schnelle Drucke). Material meist Messing, für abrasive Filamente gehärteter Stahl oder Rubinspitze notwendig."
  },
  {
    term: "Bauplatte (Build Plate)",
    category: "Hardware",
    definition: "Die Plattform, auf der das 3D-Objekt gedruckt wird. Kann beheizt oder unbeheizt sein. Beheizte Bauplatten (40-110°C) verbessern die Haftung und reduzieren Warping. Oberflächen: Glas, PEI-Beschichtung, Federstahl, Garolite oder spezielle Druckoberflächen."
  },
  {
    term: "Leveling (Bett-Nivellierung)",
    category: "Kalibrierung",
    definition: "Der Prozess, bei dem die Bauplatte exakt parallel zur Bewegungsebene der Düse ausgerichtet wird. Essenziell für gleichmäßige Haftung der ersten Schicht. Unterscheidung zwischen manuellem Leveling (Papiermethode) und automatischem Leveling mittels Sensoren (BLTouch, induktiv)."
  },
  {
    term: "Z-Offset",
    category: "Kalibrierung",
    definition: "Der vertikale Abstand zwischen der Düsenspitze und der Bauplatte im Referenzpunkt. Kritische Einstellung für die Erstschichthaftung. Zu geringer Abstand führt zu Verstopfung, zu großer zu schlechter Haftung. Typischerweise -0,1 bis -0,3mm vom mechanischen Nullpunkt."
  },
  {
    term: "PLA (Polylactid)",
    category: "Material",
    definition: "Biologisch abbaubarer Thermoplast aus nachwachsenden Rohstoffen (Maisstärke). Ideal für Einsteiger: niedrige Drucktemperatur (190-220°C), kein Heizbett zwingend nötig, geringe Verzugsneigung. Begrenzte Temperaturbeständigkeit (~60°C), nicht für Außenanwendungen oder mechanisch belastete Bauteile geeignet."
  },
  {
    term: "PETG (Polyethylenterephthalat-Glykol)",
    category: "Material",
    definition: "Robuster, schlagfester Kunststoff mit hervorragenden mechanischen Eigenschaften. Drucktemperatur 230-250°C, Heizbett 70-80°C empfohlen. UV- und chemikalienbeständig, lebensmittelecht, ideal für Funktionsteile. Höhere Festigkeit als PLA bei guter Druckbarkeit. Neigt zu Stringing (Fädenbildung)."
  },
  {
    term: "ABS (Acrylnitril-Butadien-Styrol)",
    category: "Material",
    definition: "Technischer Thermoplast mit hoher Schlagzähigkeit und Temperaturbeständigkeit bis 100°C. Drucktemperatur 240-260°C, Heizbett 90-110°C zwingend erforderlich. Starke Neigung zu Warping, erfordert geschlossene Baukammer. Typisches Lego-Material. Bei Verarbeitung entstehen Dämpfe (gute Belüftung nötig)."
  },
  {
    term: "ASA (Acrylnitril-Styrol-Acrylester)",
    category: "Material",
    definition: "UV-beständige Alternative zu ABS, speziell für Außenanwendungen entwickelt. Wetterbeständig, farbstabil auch bei Sonneneinstrahlung, temperaturbeständig bis 95°C. Druckparameter ähnlich ABS. Ideal für Gehäuse, Automobilteile und Gartenbauanwendungen. Geringere Dämpfentwicklung als ABS."
  },
  {
    term: "TPU (Thermoplastisches Polyurethan)",
    category: "Material",
    definition: "Flexibles, gummiartiges Filament mit hoher Elastizität und Verschleißfestigkeit. Shore-Härte typisch 85A-95A. Erfordert niedrige Druckgeschwindigkeit (20-30mm/s) und Direct-Drive-Extruder. Anwendungen: Dichtungen, Schläuche, Stoßdämpfer, Schutzhüllen. Drucktemperatur 210-230°C."
  },
  {
    term: "Nylon (Polyamid PA6/PA12)",
    category: "Material",
    definition: "Hochfestes, abriebfestes technisches Material mit ausgezeichneter Schlagzähigkeit. Sehr hygroskopisch (wasseranziehend) - muss vor Druck getrocknet werden. Drucktemperatur 240-280°C, Heizbett 70-90°C. Ideal für mechanisch belastete Funktionsteile, Zahnräder, Lager. PA12 weniger hygroskopisch als PA6."
  },
  {
    term: "Layer Height (Schichthöhe)",
    category: "Druckparameter",
    definition: "Die Dicke jeder einzelnen gedruckten Schicht, üblicherweise 0,1mm bis 0,3mm. Niedrigere Werte (0,1-0,15mm) ergeben glattere Oberflächen und feinere Details, erhöhen aber die Druckzeit. Höhere Werte (0,2-0,3mm) drucken schneller, sind aber weniger detailliert. Sollte 25-75% des Düsendurchmessers betragen."
  },
  {
    term: "Infill (Füllung)",
    category: "Druckparameter",
    definition: "Die innere Struktur eines 3D-Drucks, angegeben in Prozent (0-100%). Höherer Infill bedeutet mehr Material und Festigkeit, aber längere Druckzeit. Typische Werte: 15-20% für Prototypen, 30-50% für funktionale Teile, 100% für mechanisch kritische Bauteile. Verschiedene Füllmuster (Grid, Gyroid, Honeycomb) beeinflussen Festigkeit und Materialverbrauch."
  },
  {
    term: "Perimeter (Außenkontur)",
    category: "Druckparameter",
    definition: "Die äußeren Wandungen eines 3D-Drucks. Anzahl der Perimeter (meist 2-4) bestimmt die Wandstärke und Stabilität. Mehr Perimeter erhöhen Festigkeit und Wasserdichtigkeit, verbrauchen aber mehr Material. Bei dünnen Wänden können Perimeter das gesamte Bauteil ausfüllen (0% Infill sinnvoll)."
  },
  {
    term: "Warping",
    category: "Druckfehler",
    definition: "Das Verziehen oder Aufwölben der Ecken eines Druckteils während des Abkühlens, verursacht durch Materialschrumpfung. Besonders bei ABS und großflächigen Teilen problematisch. Gegenmaßnahmen: beheiztes Bett, geschlossene Baukammer, Brim/Raft verwenden, langsameres Abkühlen, geringere Teilekühlung."
  },
  {
    term: "Stringing (Fädenbildung)",
    category: "Druckfehler",
    definition: "Unerwünschte dünne Kunststofffäden zwischen nicht verbundenen Druckbereichen. Entsteht, wenn Material aus der Düse tropft während des Verfahrwegs. Lösungen: Retraction-Einstellungen optimieren, Drucktemperatur senken, Verfahrgeschwindigkeit erhöhen. Besonders bei PETG und TPU häufig."
  },
  {
    term: "Retraction (Rückzug)",
    category: "Druckparameter",
    definition: "Das kurzzeitige Zurückziehen des Filaments im Extruder während Verfahrbewegungen, um Stringing zu verhindern. Einstellungen: Retraction Distance (1-6mm) und Retraction Speed (25-45mm/s). Bei Bowden-Extrudern höhere Werte nötig als bei Direct-Drive. Zu viel Retraction kann zu Verstopfungen führen."
  },
  {
    term: "Supports (Stützstrukturen)",
    category: "Druckparameter",
    definition: "Temporäre Hilfsstrukturen, die Überhänge und freiliegende Bereiche während des Drucks stützen. Werden nach dem Druck entfernt. Arten: Lineare Supports, Baum-Supports (Tree Supports). Überhänge über 45° benötigen meist Supports. Supportmaterial kann wasserlöslich (PVA, BVOH) oder mechanisch entfernbar sein."
  },
  {
    term: "Overhang (Überhang)",
    category: "Konstruktion",
    definition: "Ein Bereich des Modells, der über den darunter liegenden Schichten hinausragt. Überhänge bis 45° sind meist ohne Supports druckbar (45°-Regel). Steilere Winkel erfordern Stützstrukturen. Brücken (Bridge) zwischen zwei Stützpunkten sind bis ca. 50mm ohne Supports möglich, abhängig von Material und Kühlung."
  },
  {
    term: "Bridging",
    category: "Konstruktion",
    definition: "Das Drucken horizontaler Abschnitte zwischen zwei Stützpunkten ohne darunterliegende Schichten. Erfolgreiche Brücken erfordern optimale Lüfterkühlung, um das Filament schnell zu verfestigen, und angepasste Druckgeschwindigkeit. Maximal überbrückbare Distanz abhängig von Material (PLA besser als PETG)."
  },
  {
    term: "Slicing (Slicen)",
    category: "Software",
    definition: "Der Prozess der Umwandlung eines 3D-Modells (STL, OBJ) in druckbare Schichten und G-Code-Anweisungen. Slicer-Software (Cura, PrusaSlicer, Simplify3D) berechnet Werkzeugpfade, fügt Supports hinzu und optimiert Druckparameter. Ermöglicht Vorschau der Schichten und Zeitschätzung vor dem Druck."
  },
  {
    term: "G-Code",
    category: "Software",
    definition: "Maschinenlesbare Programmiersprache, die dem 3D-Drucker exakte Bewegungsanweisungen gibt. Jede Zeile enthält Befehle für Position (X/Y/Z), Extrusionsmenge (E), Temperatur, Geschwindigkeit. Wird vom Slicer generiert. Kann manuell angepasst werden für spezielle Funktionen (z.B. Farbwechsel, Pause)."
  },
  {
    term: "Brim",
    category: "Haftungshilfe",
    definition: "Einschichtige Erweiterung um die Basis des Druckteils zur Vergrößerung der Haftfläche. Reduziert Warping bei Ecken, verbessert Haftung bei kleinen Bauteilen. Leicht entfernbar nach dem Druck. Typisch 5-15mm breit. Weniger Material als Raft, aber effektiv gegen Ablösen."
  },
  {
    term: "Raft",
    category: "Haftungshilfe",
    definition: "Mehrschichtige Basisplattform unter dem Druckteil, die vor dem eigentlichen Objekt gedruckt wird. Bietet maximale Haftung auf schwierigen Oberflächen, gleicht unebene Bauplatten aus. Erhöht Materialverbrauch und Druckzeit deutlich. Hinterlässt raue Unterseite am Bauteil. Hauptsächlich bei ABS oder unebenen Betten eingesetzt."
  },
  {
    term: "Annealing (Tempern)",
    category: "Nachbearbeitung",
    definition: "Wärmebehandlung eines gedruckten Teils zur Verbesserung mechanischer Eigenschaften. Das Teil wird kontrolliert erhitzt (unterhalb Schmelztemperatur) und langsam abgekühlt. Erhöht Festigkeit und Temperaturbeständigkeit um 30-50%. Besonders wirksam bei PLA: Annealing bei 70-80°C über mehrere Stunden. Kann zu Schrumpfung (1-3%) führen."
  },
  {
    term: "Post-Processing (Nachbearbeitung)",
    category: "Nachbearbeitung",
    definition: "Alle Bearbeitungsschritte nach dem 3D-Druck zur Verbesserung von Optik oder Funktion. Umfasst: Support-Entfernung, Schleifen, Grundieren, Lackieren, chemisches Glätten (Aceton-Dampf bei ABS, Ethylacetat bei PETG), Einfügen von Gewindeeinsätzen, Bohren, Kleben mehrerer Teile. Professionelles Post-Processing kann 3D-Drucke wie Spritzgussteile aussehen lassen."
  }
];

const Glossar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(glossaryTerms.map(t => t.category)));

  return (
    <>
      <SEOHead
        title="3D-Druck Glossar | Fachbegriffe & Definitionen | ekdruck"
        description="Umfassendes 3D-Druck Glossar mit 30+ Fachbegriffen: FDM, Filament, Slicing, Retraction, Warping und mehr. Verständlich erklärt für Einsteiger und Profis."
        keywords="3d-druck glossar, 3d-druck fachbegriffe, fdm begriffe, additive fertigung lexikon, 3d-druck definitionen, slicing, retraction, filament"
        path="/glossar"
        schemaType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "3D-Druck Glossar", url: "/glossar" }
        ]}
      />

      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-lg px-6 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Fachwissen 3D-Druck
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                3D-Druck <span className="text-gradient">Glossar</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Alle wichtigen Fachbegriffe rund um FDM 3D-Druck, additive Fertigung und Rapid Prototyping - 
                verständlich erklärt für Einsteiger und Profis.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Begriff suchen (z.B. Retraction, Warping, Infill...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-6 text-lg"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <Badge
                    key={cat}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSearchTerm(cat)}
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  {filteredTerms.length} von {glossaryTerms.length} Begriffen
                  {searchTerm && ` für "${searchTerm}"`}
                </p>
              </div>

              <div className="grid gap-6">
                {filteredTerms.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-2xl">{item.term}</CardTitle>
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-foreground">
                        {item.definition}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}

                {filteredTerms.length === 0 && (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground text-lg">
                        Keine Begriffe gefunden für "{searchTerm}". Versuchen Sie einen anderen Suchbegriff.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Über dieses <span className="text-gradient">Glossar</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4 leading-relaxed">
                  Dieses 3D-Druck Glossar wurde speziell für die <strong className="text-foreground">additive Fertigung mit FDM-Technologie</strong> erstellt 
                  und basiert auf jahrelanger praktischer Erfahrung im Prototypenbau und der Serienfertigung. Die Definitionen orientieren sich 
                  an fachspezifischen Quellen aus der 3D-Druck-Community, technischen Foren und Herstellerdokumentation.
                </p>
                <p className="mb-4 leading-relaxed">
                  Alle Begriffe sind <strong className="text-foreground">praxisnah erklärt</strong> und berücksichtigen die spezifischen Anforderungen 
                  der modernen additiven Fertigung. Das Glossar wird regelmäßig aktualisiert, um neue Entwicklungen und Technologien zu berücksichtigen.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Noch Fragen zu einem Begriff?</strong> Unser Team steht Ihnen gerne für eine kostenlose 
                  Beratung zur Verfügung. Wir erklären Ihnen alle technischen Aspekte verständlich und helfen Ihnen, die richtige Lösung 
                  für Ihr 3D-Druck-Projekt zu finden.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Glossar;
