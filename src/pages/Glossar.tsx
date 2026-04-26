import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, ArrowRight } from "lucide-react";
import StickyCTA from "@/components/landing/StickyCTA";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  relatedLinks?: Array<{ label: string; href: string }>;
}

const glossaryTerms: GlossaryTerm[] = [
  // ── VERFAHREN ──────────────────────────────────────────────────────────────
  {
    term: "Additive Fertigung",
    category: "Verfahren",
    definition: "Oberbegriff für alle Fertigungsverfahren, bei denen Material schichtweise aufgetragen wird, um ein dreidimensionales Objekt zu erzeugen. Im Gegensatz zu subtraktiven Verfahren (wie CNC-Fräsen) wird Material hinzugefügt statt abgetragen. Umfasst Technologien wie FDM, SLA, SLS und weitere 3D-Druckverfahren.",
    relatedLinks: [{ label: "FDM 3D-Druck Service", href: "/fdm-druck" }]
  },
  {
    term: "FDM (Fused Deposition Modeling)",
    category: "Verfahren",
    definition: "Auch Schmelzschichtung oder Fused Filament Fabrication (FFF) genannt. Das am weitesten verbreitete 3D-Druckverfahren, bei dem thermoplastisches Filament durch eine beheizte Düse geschmolzen und schichtweise auf eine Bauplatte aufgetragen wird. Ideal für Prototypen, Modelle und Anschauungsobjekte aus Kunststoff.",
    relatedLinks: [{ label: "FDM 3D-Druck Service", href: "/fdm-druck" }, { label: "Prototypen", href: "/prototypen" }]
  },
  {
    term: "SLA (Stereolithografie)",
    category: "Verfahren",
    definition: "Lichtbasiertes 3D-Druckverfahren, das flüssiges Kunstharz (Resin) mittels UV-Laser oder LCD-Display schichtweise aushärtet. Ergibt glattere Oberflächen und feinere Details als FDM, ist aber teurer und benötigt aufwändige Nachbearbeitung (Waschen, Nachhärten). Ideal für Schmuck, Dentalmodelle und hochdetaillierte Miniaturmodelle.",
    relatedLinks: [{ label: "FDM vs. andere Verfahren", href: "/fdm-druck" }]
  },
  {
    term: "SLS (Selektives Lasersintern)",
    category: "Verfahren",
    definition: "Pulverbasiertes Verfahren, bei dem ein Laserstrahl Kunststoff- oder Metallpulver selektiv verschmilzt. Keine Stützstrukturen nötig, da unverarbeitetes Pulver als Stütze dient. Sehr robuste Bauteile mit isotropen Eigenschaften. Hauptsächlich in der Industrie für hochpräzise Anschauungsmodelle genutzt. Kosten deutlich höher als FDM.",
    relatedLinks: [{ label: "Prototypen & Serien", href: "/prototypen" }]
  },
  {
    term: "Rapid Prototyping",
    category: "Verfahren",
    definition: "Schnelle Herstellung physischer Anschauungsmodelle oder Designprototypen direkt aus CAD-Daten. Ziel ist die möglichst schnelle Visualisierung von Design und Formgebung. 3D-Druck (FDM, SLA, SLS) ist die dominierende Rapid-Prototyping-Technologie. Reduziert Entwicklungszeit um 50–90 % gegenüber traditionellen Verfahren.",
    relatedLinks: [{ label: "Prototypen Service", href: "/prototypen" }]
  },
  {
    term: "Rapid Manufacturing",
    category: "Verfahren",
    definition: "Einsatz von Additive-Manufacturing-Technologien für individuelle Anfertigungen ohne Werkzeugkosten. Ermöglicht maßgefertigte Anschauungsmodelle ab Stückzahl 1, individualisierte Präsentationsobjekte und bedarfsorientierte Fertigung. Besonders attraktiv für Architekturmodelle, Messeexponate und Dekorationsobjekte.",
    relatedLinks: [{ label: "Einzelanfertigungen", href: "/einzelanfertigungen" }, { label: "Firmenkunden", href: "/firmenkunden" }]
  },

  // ── MODELLBAU ─────────────────────────────────────────────────────────────
  {
    term: "Architekturmodell",
    category: "Modellbau",
    definition: "Maßstabsgetreues physisches Modell eines Gebäudes oder einer städtebaulichen Anlage. Dient der Visualisierung für Bauherren, Planungsbehörden, Investoren und Wettbewerbe. Maßstäbe typischerweise 1:50 bis 1:500. 3D-Druck ermöglicht präzise Umsetzung aus ArchiCAD-, Revit- oder SketchUp-Daten in wenigen Tagen.",
    relatedLinks: [{ label: "Architekturmodelle", href: "/architekturmodelle" }]
  },
  {
    term: "Messemodell",
    category: "Modellbau",
    definition: "Verkleinertes Modell eines Produkts, einer Maschine, eines Gebäudes oder einer Anlage für den Einsatz auf Messen und Ausstellungen. Soll Aufmerksamkeit erregen und komplexe Produkte anschaulich erklären. 3D-Druck bietet kurze Vorlaufzeiten (Express in 24–48h), individuelle Farben und reproduzierbare Qualität.",
    relatedLinks: [{ label: "Messemodelle", href: "/messemodelle" }]
  },
  {
    term: "Maßstab (Scale)",
    category: "Modellbau",
    definition: "Verhältnis zwischen Modellgröße und Originalgröße. Typische Architekturmaßstäbe: 1:50 (Innenausbau), 1:100 (Gebäude), 1:200 (Blockbebauung), 1:500 (Stadtquartier), 1:1000 (Stadtplanung). FDM-Druck ermöglicht Maßstäbe bis ca. 1:20 mit guter Detailtreue. Bei sehr kleinen Maßstäben (1:500+) SLA für feinere Strukturen empfohlen.",
    relatedLinks: [{ label: "Architekturmodelle", href: "/architekturmodelle" }, { label: "Ratgeber: Architekturmodelle", href: "/ratgeber/architekturmodell-guide" }]
  },
  {
    term: "Anschauungsmodell",
    category: "Modellbau",
    definition: "3D-gedrucktes Modell, das primär der visuellen und haptischen Präsentation dient – nicht als funktionaler Prototyp. Typisch für Architektur, Stadtplanung, Industrie-Präsentationen und Produktdesign. Kann farbig, mehrfarbig oder mit verschiedenen Materialien gestaltet werden. Wichtiges Kommunikationsmittel gegenüber Kunden und Stakeholdern.",
    relatedLinks: [{ label: "Architekturmodelle", href: "/architekturmodelle" }, { label: "Messemodelle", href: "/messemodelle" }]
  },
  {
    term: "Designprototyp",
    category: "Modellbau",
    definition: "Anschauungsmodell, das primär der visuellen Präsentation dient. Kann bewegliche Elemente zur Demonstration enthalten. Typisch für Architektur, Stadtplanung, Industrie-Präsentationen und Produktdesign. Wichtiges Kommunikationsmittel gegenüber Kunden und Stakeholdern.",
    relatedLinks: [{ label: "Prototypen", href: "/prototypen" }]
  },
  {
    term: "Sichtmodell (Appearance Model)",
    category: "Modellbau",
    definition: "Prototyp, der ausschließlich das spätere Aussehen eines Produkts zeigt, ohne funktionale Eigenschaften. Oberfläche geschliffen, grundiert und lackiert. Typisch in der Konsumgüterentwicklung und für Präsentationen. FDM + Post-Processing kann täuschend echte Sichtmodelle produzieren.",
    relatedLinks: [{ label: "Einzelanfertigungen", href: "/einzelanfertigungen" }]
  },
  {
    term: "Topographiemodell",
    category: "Modellbau",
    definition: "Dreidimensionales Geländemodell aus Höhenlinien- oder DEM-Daten (Digital Elevation Model). Wird für Stadt- und Regionalplanung, Präsentationen, Museen und Geo-Visualisierungen eingesetzt. Aus GIS-Daten (QGIS, ESRI) können STL-Dateien generiert werden. FDM-Druck in verschiedenen Maßstäben (1:1000–1:25000) möglich.",
    relatedLinks: [{ label: "Architekturmodelle", href: "/architekturmodelle" }]
  },
  {
    term: "Dekorationsobjekt",
    category: "Modellbau",
    definition: "3D-gedruckter Gegenstand primär für dekorative Zwecke – Skulpturen, Wohnaccessoires, Figuren, Vasen, Wanddekoration. Breite Materialwahl (PLA, PETG, Holzfilament, Marmorfilament). Schicht­linien können als Designmerkmal eingesetzt oder durch Nachbearbeitung kaschiert werden.",
    relatedLinks: [{ label: "Kunstobjekte & Dekoration", href: "/kunstobjekte" }, { label: "Modellbau & Dekoration", href: "/modellbau-dekoration" }]
  },
  {
    term: "Kunstobjekt",
    category: "Modellbau",
    definition: "Individuell gestaltetes oder künstlerisch interpretiertes Druckobjekt. 3D-Druck ermöglicht Geometrien, die mit traditionellen Handwerkstechniken unmöglich wären – Gitterstrukturen, organische Formen, verschlungene Topologien. Kombination mit klassischen Handwerkstechniken (Bemalung, Vergoldung) üblich.",
    relatedLinks: [{ label: "Kunstobjekte", href: "/kunstobjekte" }]
  },

  // ── CAD & DATEIFORMAT ─────────────────────────────────────────────────────
  {
    term: "STL (Standard Tessellation Language)",
    category: "Dateiformat",
    definition: "Das Standard-Austauschformat für 3D-Druckdaten. Beschreibt die Oberfläche eines Körpers durch Dreiecke (Tessellation). ASCII oder Binärformat. Enthält keine Farb-, Material- oder Skalierungsinformationen. Vor dem Druck im Slicer skalieren, ausrichten und slicen. Maximale Dateigröße empfohlen: <50 MB für einfacheres Handling.",
    relatedLinks: [{ label: "Anfrage stellen", href: "/kontakt" }]
  },
  {
    term: "OBJ (Wavefront Object)",
    category: "Dateiformat",
    definition: "3D-Dateiformat, das neben Geometrie auch Farb- und Texturinformationen speichern kann. Gut geeignet für mehrfarbige Modelle. Wird von den meisten Slicern unterstützt. Besteht oft aus zwei Dateien: .obj (Geometrie) und .mtl (Materialdefinition). Polygonanzahl wie bei STL ausschlaggebend für Detailgrad.",
    relatedLinks: [{ label: "Anfrage stellen", href: "/kontakt" }]
  },
  {
    term: "3MF (3D Manufacturing Format)",
    category: "Dateiformat",
    definition: "Modernes, standardisiertes Austauschformat für den 3D-Druck, entwickelt als STL-Nachfolger. Enthält Geometrie, Farben, Materialzuweisungen, Druckparameter und Metadaten in einer ZIP-Datei. Deutlich effizienter als STL. Von Prusa, Bambu Lab, Microsoft 3D Builder und modernen Slicern unterstützt. Empfohlen für farbige und mehrkomponentige Modelle.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "ArchiCAD Export",
    category: "Dateiformat",
    definition: "ArchiCAD (Graphisoft) ermöglicht STL-Export über 'Datei → Speichern unter → STL'. Wichtig: Maßstab auf 1:1 belassen, alle sichtbaren Ebenen exportieren, Modell auf Ursprung setzen. Bei komplexen Modellen Elementgruppen separat exportieren. IFC-Import in Mesh-Tools als Alternative.",
    relatedLinks: [{ label: "Architekturmodelle", href: "/architekturmodelle" }, { label: "Ratgeber Architekturmodelle", href: "/ratgeber/architekturmodell-guide" }]
  },
  {
    term: "Revit Export (Autodesk)",
    category: "Dateiformat",
    definition: "Revit-Modelle werden über 'Exportieren → CAD-Formate → STL' oder über den kostenlosen Autodesk Print Studio Exporter in druckfähige Dateien umgewandelt. Wichtig: Nur relevante Bauteile sichtbar lassen, Mesh-Qualität auf 'Fein' stellen, Einheiten prüfen. Alternativ über IFC → Blender → STL.",
    relatedLinks: [{ label: "Architekturmodelle", href: "/architekturmodelle" }]
  },
  {
    term: "SketchUp Export",
    category: "Dateiformat",
    definition: "SketchUp-Modelle als STL über den kostenlosen STL-Exporter (Extension Warehouse) ausgeben. Vor Export: Modell auf 'Volumenköper' prüfen (Entity Info → Solid), Maßeinheiten kontrollieren, alle unnötigen Gruppen löschen. SketchUp Pro bietet direkten STL-Export ohne Plugin.",
    relatedLinks: [{ label: "Architekturmodelle", href: "/architekturmodelle" }]
  },

  // ── MATERIAL ──────────────────────────────────────────────────────────────
  {
    term: "Filament",
    category: "Material",
    definition: "Das Rohmaterial für FDM-3D-Drucker in Form eines kontinuierlichen Kunststoffdrahts, meist auf Spulen aufgewickelt. Standarddurchmesser sind 1,75 mm oder 2,85 mm. Erhältlich in verschiedenen Materialien wie PLA, PETG, ABS, TPU und technischen Hochleistungskunststoffen.",
    relatedLinks: [{ label: "Materialien Übersicht", href: "/materialien" }]
  },
  {
    term: "PLA (Polylactid)",
    category: "Material",
    definition: "Biologisch abbaubarer Thermoplast aus nachwachsenden Rohstoffen (Maisstärke). Ideal für Einsteiger: niedrige Drucktemperatur (190–220 °C), kein Heizbett zwingend nötig, geringe Verzugsneigung. Begrenzte Temperaturbeständigkeit (~60 °C), nicht für Außenanwendungen oder mechanisch belastete Bauteile geeignet. Beliebtestes Material für Architekturmodelle und Dekorationsobjekte.",
    relatedLinks: [{ label: "Materialien", href: "/materialien" }, { label: "Architekturmodelle", href: "/architekturmodelle" }]
  },
  {
    term: "PETG (Polyethylenterephthalat-Glykol)",
    category: "Material",
    definition: "Robuster, schlagfester Kunststoff mit hervorragenden mechanischen Eigenschaften. Drucktemperatur 230–250 °C, Heizbett 70–80 °C empfohlen. UV- und chemikalienbeständig, lebensmittelecht, ideal für langlebige Modelle und Prototypen. Höhere Festigkeit als PLA bei guter Druckbarkeit. Neigt zu Stringing (Fädenbildung).",
    relatedLinks: [{ label: "Materialien", href: "/materialien" }, { label: "Prototypen", href: "/prototypen" }]
  },
  {
    term: "ABS (Acrylnitril-Butadien-Styrol)",
    category: "Material",
    definition: "Technischer Thermoplast mit hoher Schlagzähigkeit und Temperaturbeständigkeit bis 100 °C. Drucktemperatur 240–260 °C, Heizbett 90–110 °C zwingend erforderlich. Starke Neigung zu Warping, erfordert geschlossene Baukammer. Typisches Lego-Material. Bei Verarbeitung entstehen Dämpfe (gute Belüftung nötig).",
    relatedLinks: [{ label: "Materialien", href: "/materialien" }]
  },
  {
    term: "ASA (Acrylnitril-Styrol-Acrylester)",
    category: "Material",
    definition: "UV-beständige Alternative zu ABS, speziell für Außenanwendungen entwickelt. Wetterbeständig, farbstabil auch bei Sonneneinstrahlung, temperaturbeständig bis 95 °C. Druckparameter ähnlich ABS. Ideal für Outdoor-Modelle, Gartendekor und witterungsbeständige Präsentationsobjekte. Geringere Dämpfentwicklung als ABS.",
    relatedLinks: [{ label: "Materialien", href: "/materialien" }]
  },
  {
    term: "TPU (Thermoplastisches Polyurethan)",
    category: "Material",
    definition: "Flexibles, gummiartiges Filament mit hoher Elastizität und Verschleißfestigkeit. Shore-Härte typisch 85A–95A. Erfordert niedrige Druckgeschwindigkeit (20–30 mm/s) und Direct-Drive-Extruder. Anwendungen: flexible Designmodelle, Schutzhüllen, elastische Dekorationsobjekte. Drucktemperatur 210–230 °C.",
    relatedLinks: [{ label: "Einzelanfertigungen", href: "/einzelanfertigungen" }]
  },
  {
    term: "Nylon (Polyamid PA6/PA12)",
    category: "Material",
    definition: "Hochfestes, abriebfestes technisches Material mit ausgezeichneter Schlagzähigkeit. Sehr hygroskopisch (wasseranziehend) – muss vor Druck getrocknet werden. Drucktemperatur 240–280 °C, Heizbett 70–90 °C. Ideal für anspruchsvolle Anschauungsmodelle und hochwertige Präsentationsobjekte. PA12 weniger hygroskopisch als PA6.",
    relatedLinks: [{ label: "Materialien", href: "/materialien" }]
  },
  {
    term: "Österreichisches Filament",
    category: "Material",
    definition: "Hochwertige Filamente, die in Österreich produziert oder von österreichischen Händlern bezogen werden. Vorteile: kürzere Lieferwege (CO₂-Reduktion), gleichbleibende Qualitätsstandards, schnelle Verfügbarkeit bei Nachbestellungen. ekdruck verwendet bevorzugt österreichisches PLA und PETG für nachhaltigere Produktionsketten.",
    relatedLinks: [{ label: "Über ekdruck", href: "/#about" }, { label: "Materialien", href: "/materialien" }]
  },

  // ── DRUCKPARAMETER ────────────────────────────────────────────────────────
  {
    term: "Layer Height (Schichthöhe)",
    category: "Druckparameter",
    definition: "Die Dicke jeder einzelnen gedruckten Schicht, üblicherweise 0,1 mm bis 0,3 mm. Niedrigere Werte (0,1–0,15 mm) ergeben glattere Oberflächen und feinere Details, erhöhen aber die Druckzeit. Höhere Werte (0,2–0,3 mm) drucken schneller, sind aber weniger detailliert. Sollte 25–75 % des Düsendurchmessers betragen.",
    relatedLinks: [{ label: "FDM Verfahren", href: "/fdm-druck" }]
  },
  {
    term: "Infill (Füllung)",
    category: "Druckparameter",
    definition: "Die innere Struktur eines 3D-Drucks, angegeben in Prozent (0–100 %). Höherer Infill bedeutet mehr Material und Festigkeit, aber längere Druckzeit. Typische Werte: 15–20 % für Anschauungsmodelle, 30–50 % für robuste Präsentationsobjekte, 100 % für besonders stabile Modelle. Verschiedene Füllmuster (Grid, Gyroid, Honeycomb) beeinflussen Festigkeit und Materialverbrauch.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Perimeter (Außenkontur)",
    category: "Druckparameter",
    definition: "Die äußeren Wandungen eines 3D-Drucks. Anzahl der Perimeter (meist 2–4) bestimmt die Wandstärke und Stabilität. Mehr Perimeter erhöhen Festigkeit und Wasserdichtigkeit, verbrauchen aber mehr Material. Bei dünnen Wänden können Perimeter das gesamte Bauteil ausfüllen (0 % Infill sinnvoll).",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Retraction (Rückzug)",
    category: "Druckparameter",
    definition: "Das kurzzeitige Zurückziehen des Filaments im Extruder während Verfahrbewegungen, um Stringing zu verhindern. Einstellungen: Retraction Distance (1–6 mm) und Retraction Speed (25–45 mm/s). Bei Bowden-Extrudern höhere Werte nötig als bei Direct-Drive. Zu viel Retraction kann zu Verstopfungen führen.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Supports (Stützstrukturen)",
    category: "Druckparameter",
    definition: "Temporäre Hilfsstrukturen, die Überhänge und freiliegende Bereiche während des Drucks stützen. Werden nach dem Druck entfernt. Arten: Lineare Supports, Baum-Supports (Tree Supports). Überhänge über 45° benötigen meist Supports. Supportmaterial kann wasserlöslich (PVA, BVOH) oder mechanisch entfernbar sein.",
    relatedLinks: [{ label: "Prototypen", href: "/prototypen" }]
  },
  {
    term: "Print Speed (Druckgeschwindigkeit)",
    category: "Druckparameter",
    definition: "Die Geschwindigkeit, mit der der Druckkopf beim Extrudieren verfährt, in mm/s. Typische Werte: 40–60 mm/s für PLA, 30–50 mm/s für PETG/ABS, 20–30 mm/s für TPU. Besteht aus mehreren Sub-Geschwindigkeiten: Außenwand (langsamer für Qualität), Innenwand, Infill (schneller), erste Schicht (langsam für Haftung).",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Layer Height adaptive (Variable Schichthöhe)",
    category: "Druckparameter",
    definition: "Automatische Anpassung der Layer Height basierend auf Modellgeometrie. Flache Bereiche mit hohen Schichten (schnell), Details und Kurven mit niedrigen Schichten (präzise). Reduziert Druckzeit bei gleichbleibender Qualität an kritischen Stellen. PrusaSlicer und Cura unterstützen diese Funktion nativ.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Vase Mode / Spiralize",
    category: "Druckparameter",
    definition: "Spezieller Druckmodus für einwandige, hohle Objekte ohne Schichtwechsel. Düse fährt kontinuierlich spiralförmig nach oben. Vorteile: Keine sichtbare Naht, sehr schnell, wasserdicht. Einschränkungen: Nur einfache, geschlossene Geometrien. Ideal für Vasen, Becher, Lampenschirme und Dekorationsobjekte.",
    relatedLinks: [{ label: "Kunstobjekte", href: "/kunstobjekte" }]
  },
  {
    term: "Ironing",
    category: "Druckparameter",
    definition: "Nachbearbeitungsfunktion im Slicer, die oberste Schicht glättet. Hot-End fährt mit wenig/keiner Extrusion über die Top-Schicht und 'bügelt' Material glatt durch Hitze und Druck. Erzeugt glänzende, nahezu schichtlinienfreie Oberflächen. Verlängert Druckzeit um 10–30 %. Besonders effektiv bei PLA und PETG.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },

  // ── NACHBEARBEITUNG ────────────────────────────────────────────────────────
  {
    term: "Post-Processing (Nachbearbeitung)",
    category: "Nachbearbeitung",
    definition: "Alle Bearbeitungsschritte nach dem 3D-Druck zur Verbesserung von Optik oder Haptik. Umfasst: Support-Entfernung, Schleifen, Grundieren, Lackieren, chemisches Glätten (Aceton-Dampf bei ABS), Kleben mehrerer Teile. Professionelles Post-Processing verwandelt 3D-Drucke in hochwertige Präsentationsmodelle.",
    relatedLinks: [{ label: "Einzelanfertigungen", href: "/einzelanfertigungen" }]
  },
  {
    term: "Grundierung (Primer)",
    category: "Nachbearbeitung",
    definition: "Erste Lackschicht auf gedruckten Teilen, die Schichtlinien füllt, Haftung für Decklack verbessert und Oberflächen egalisiert. Für Modellbau empfohlen: grauer Sprühprimer (Vallejo, Tamiya, Mr. Surfacer). Nach Primer: Schleifen mit 400–600er Körnung für optimale Oberfläche vor Endlackierung.",
    relatedLinks: [{ label: "Messemodelle", href: "/messemodelle" }, { label: "Architekturmodelle", href: "/architekturmodelle" }]
  },
  {
    term: "Lackierung",
    category: "Nachbearbeitung",
    definition: "Oberflächenveredelung durch Sprühlack, Airbrush oder Pinsel. Professionelle Ergebnisse mit Acryl- oder Nitrolacken. Für Architektur- und Messemodelle oft RAL-Farben gefordert. Klarlack als abschließender Schutzlack in matt, seidenmatt oder hochglanz. Mehrschichtiger Lackaufbau (Primer → Grundfarbe → Decklack → Klarlack) für maximale Haltbarkeit.",
    relatedLinks: [{ label: "Messemodelle", href: "/messemodelle" }, { label: "Architekturmodelle", href: "/architekturmodelle" }]
  },
  {
    term: "Annealing (Tempern)",
    category: "Nachbearbeitung",
    definition: "Wärmebehandlung eines gedruckten Teils zur Verbesserung mechanischer Eigenschaften. Das Teil wird kontrolliert erhitzt (unterhalb Schmelztemperatur) und langsam abgekühlt. Erhöht Festigkeit und Temperaturbeständigkeit um 30–50 %. Besonders wirksam bei PLA: Annealing bei 70–80 °C über mehrere Stunden. Kann zu Schrumpfung (1–3 %) führen.",
    relatedLinks: [{ label: "Prototypen", href: "/prototypen" }]
  },

  // ── HARDWARE ──────────────────────────────────────────────────────────────
  {
    term: "Extruder",
    category: "Hardware",
    definition: "Die zentrale Komponente eines FDM-Druckers, bestehend aus Kaltende (Cold-End) zum Filamenttransport und Heizende (Hot-End) zum Aufschmelzen. Der Extruder zieht das Filament ein, schmilzt es und presst es durch die Düse auf die Bauplatte. Unterscheidung zwischen Bowden- und Direct-Drive-Extrudern.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Düse (Nozzle)",
    category: "Hardware",
    definition: "Das Endstück des Hot-Ends, durch das das geschmolzene Filament gepresst wird. Standarddurchmesser ist 0,4 mm, verfügbar von 0,2 mm (hohe Details) bis 1,2 mm (schnelle Drucke). Material meist Messing, für abrasive Filamente gehärteter Stahl oder Rubinspitze notwendig.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Bowden Extruder",
    category: "Hardware",
    definition: "Extruder-System, bei dem der Filamentantrieb (Feeder) räumlich vom Hot-End getrennt ist. Filament wird durch ein PTFE-Rohr zur Düse transportiert. Vorteile: Leichterer Druckkopf, höhere Geschwindigkeiten. Nachteile: Höhere Retraction-Distanzen nötig, schlechter für flexible Materialien.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Direct Drive Extruder",
    category: "Hardware",
    definition: "Extruder-System, bei dem der Filamentantrieb direkt am Hot-End montiert ist. Vorteile: Präzisere Extrusionskontrolle, niedrige Retraction (1–2 mm), besser für flexible Materialien (TPU). Nachteile: Höhere bewegte Masse begrenzt Beschleunigung und Geschwindigkeit.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },

  // ── DRUCKFEHLER ────────────────────────────────────────────────────────────
  {
    term: "Warping",
    category: "Druckfehler",
    definition: "Das Verziehen oder Aufwölben der Ecken eines Druckteils während des Abkühlens, verursacht durch Materialschrumpfung. Besonders bei ABS und großflächigen Teilen problematisch. Gegenmaßnahmen: beheiztes Bett, geschlossene Baukammer, Brim/Raft verwenden, langsameres Abkühlen.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Stringing (Fädenbildung)",
    category: "Druckfehler",
    definition: "Unerwünschte dünne Kunststofffäden zwischen nicht verbundenen Druckbereichen. Entsteht, wenn Material aus der Düse tropft während des Verfahrwegs. Lösungen: Retraction-Einstellungen optimieren, Drucktemperatur senken, Verfahrgeschwindigkeit erhöhen. Besonders bei PETG und TPU häufig.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Ghosting / Ringing",
    category: "Druckfehler",
    definition: "Wellenförmige Artefakte oder Echo-Muster parallel zu scharfen Kanten. Verursacht durch mechanische Vibrationen des Druckers bei schnellen Richtungswechseln. Lösungen: Beschleunigung reduzieren, Druckgeschwindigkeit senken, Input Shaping aktivieren.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Elephant's Foot",
    category: "Druckfehler",
    definition: "Aufweitung der ersten Schichten am Bauteilfuß. Entsteht, wenn die erste Schicht zu stark ans Bett gedrückt wird oder das Heizbett zu heiß ist. Lösungen: Z-Offset erhöhen (0,02–0,05 mm), Betttemperatur nach 1–2 Schichten reduzieren.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },

  // ── SOFTWARE ──────────────────────────────────────────────────────────────
  {
    term: "Slicing (Slicen)",
    category: "Software",
    definition: "Der Prozess der Umwandlung eines 3D-Modells (STL, OBJ) in druckbare Schichten und G-Code-Anweisungen. Slicer-Software (Cura, PrusaSlicer, Simplify3D) berechnet Werkzeugpfade, fügt Supports hinzu und optimiert Druckparameter. Ermöglicht Vorschau der Schichten und Zeitschätzung vor dem Druck.",
    relatedLinks: [{ label: "Anfrage stellen", href: "/kontakt" }]
  },
  {
    term: "G-Code",
    category: "Software",
    definition: "Maschinenlesbare Programmiersprache, die dem 3D-Drucker exakte Bewegungsanweisungen gibt. Jede Zeile enthält Befehle für Position (X/Y/Z), Extrusionsmenge (E), Temperatur, Geschwindigkeit. Wird vom Slicer generiert und kann manuell für spezielle Funktionen (Farbwechsel, Pause) angepasst werden.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Firmware",
    category: "Software",
    definition: "Basissoftware des 3D-Druckers, interpretiert G-Code und steuert Hardware. Hauptoptionen: Marlin (am weitesten verbreitet), Klipper (Raspberry Pi-basiert, höchste Performance, Input Shaping), RepRapFirmware. Firmware-Updates ermöglichen neue Features (Mesh Bed Leveling, Linear Advance).",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },

  // ── KALIBRIERUNG ──────────────────────────────────────────────────────────
  {
    term: "Leveling (Bett-Nivellierung)",
    category: "Kalibrierung",
    definition: "Der Prozess, bei dem die Bauplatte exakt parallel zur Bewegungsebene der Düse ausgerichtet wird. Essenziell für gleichmäßige Haftung der ersten Schicht. Unterscheidung zwischen manuellem Leveling und automatischem Leveling mittels Sensoren (BLTouch, induktiv).",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Input Shaping",
    category: "Kalibrierung",
    definition: "Fortschrittliche Firmware-Funktion (Klipper) zur Kompensation mechanischer Resonanzen. Misst Eigenschwingungen via Beschleunigungssensor und generiert Gegenschwingungen, die Ghosting/Ringing eliminieren. Ermöglicht deutlich höhere Beschleunigungen (5.000–15.000 mm/s²) ohne Qualitätsverlust.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Mesh Bed Leveling (ABL)",
    category: "Kalibrierung",
    definition: "Automatisches Vermessen der Bettoberfläche in einem Raster (z.B. 5×5 Punkte). Erstellt Höhenkarte der Unebenheiten und kompensiert während des Drucks durch Z-Achsenanpassung in Echtzeit. Arten: BLTouch/CR-Touch, induktiv (Metall-Betten), kapazitiv (alle Oberflächen).",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },

  // ── HAFTUNGSHILFE ─────────────────────────────────────────────────────────
  {
    term: "Brim",
    category: "Haftungshilfe",
    definition: "Einschichtige Erweiterung um die Basis des Druckteils zur Vergrößerung der Haftfläche. Reduziert Warping bei Ecken, verbessert Haftung bei kleinen Bauteilen. Leicht entfernbar nach dem Druck. Typisch 5–15 mm breit. Weniger Material als Raft, aber effektiv gegen Ablösen.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },
  {
    term: "Raft",
    category: "Haftungshilfe",
    definition: "Mehrschichtige Basisplattform unter dem Druckteil, die vor dem eigentlichen Objekt gedruckt wird. Bietet maximale Haftung auf schwierigen Oberflächen. Erhöht Materialverbrauch und Druckzeit deutlich. Hinterlässt raue Unterseite am Bauteil. Hauptsächlich bei ABS oder unebenen Betten eingesetzt.",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },

  // ── KONSTRUKTION ──────────────────────────────────────────────────────────
  {
    term: "Overhang (Überhang)",
    category: "Konstruktion",
    definition: "Ein Bereich des Modells, der über den darunter liegenden Schichten hinausragt. Überhänge bis 45° sind meist ohne Supports druckbar (45°-Regel). Steilere Winkel erfordern Stützstrukturen. Brücken zwischen zwei Stützpunkten sind bis ca. 50 mm ohne Supports möglich.",
    relatedLinks: [{ label: "Prototypen", href: "/prototypen" }]
  },
  {
    term: "Bridging",
    category: "Konstruktion",
    definition: "Das Drucken horizontaler Abschnitte zwischen zwei Stützpunkten ohne darunterliegende Schichten. Erfolgreiche Brücken erfordern optimale Lüfterkühlung und angepasste Druckgeschwindigkeit. Maximal überbrückbare Distanz abhängig von Material (PLA besser als PETG).",
    relatedLinks: [{ label: "FDM 3D-Druck", href: "/fdm-druck" }]
  },

  // ── GESCHÄFTLICH / SERVICE ────────────────────────────────────────────────
  {
    term: "Express-Service (24–48h)",
    category: "Service",
    definition: "Priorisierte Auftragsabwicklung mit Lieferung innerhalb von 24 oder 48 Stunden nach Auftragsbestätigung. Besonders wichtig für Messetermine, Pitches und Wettbewerbsabgaben. ekdruck bietet Express-Service österreichweit. Aufpreis je nach Komplexität und Umfang.",
    relatedLinks: [{ label: "Anfrage stellen", href: "/kontakt" }, { label: "Messemodelle", href: "/messemodelle" }]
  },
  {
    term: "Einzelanfertigung (Custom Print)",
    category: "Service",
    definition: "Produktion eines einzigartigen, individuell geplanten Druckobjekts ohne Serienbezug. Umfasst Kundenberatung, ggf. CAD-Anpassung, Materialwahl, Druck und Post-Processing. Preisgestaltung nach Zeitaufwand und Material. Ideal für Unikate, Geschenke, Kunstobjekte und spezielle Prototypen.",
    relatedLinks: [{ label: "Einzelanfertigungen", href: "/einzelanfertigungen" }]
  },
  {
    term: "Kostenkalkulation 3D-Druck",
    category: "Service",
    definition: "Der Preis eines 3D-Drucks ergibt sich aus: Materialkosten (Volumen × Materialdichte × Preis/kg), Druckzeit × Maschinenstundensatz, Rüst- und Nachbearbeitungszeit, Post-Processing. Bei ekdruck ab ca. €5 für einfache Teile. Kostenloser Online-Preisrechner oder persönliche Beratung für Großprojekte.",
    relatedLinks: [{ label: "Ratgeber: Kosten", href: "/ratgeber/kosten-guide" }, { label: "Anfrage stellen", href: "/kontakt" }]
  },
  {
    term: "Toleranz & Maßhaltigkeit",
    category: "Service",
    definition: "FDM-Druck erreicht typischerweise ±0,2 mm dimensionale Toleranz. Einflussfaktoren: Materialschwund beim Abkühlen (PLA: ~0,3 %, ABS: ~1–2 %), Kalibrierungsqualität, Düsendurchmesser. Für Passungen und funktionale Bauteile Toleranzen einplanen. Bei engeren Anforderungen SLA oder SLS erwägen.",
    relatedLinks: [{ label: "Prototypen", href: "/prototypen" }, { label: "Firmenkunden", href: "/firmenkunden" }]
  },
  {
    term: "Lieferzeit",
    category: "Service",
    definition: "Zeitraum von Auftragsbestätigung bis Versand. Standard bei ekdruck: 3–5 Werktage. Express: 24–48h. Abhängig von Druckzeit, Komplexität und Auftragslage. Versand österreichweit per Post Austria oder DPD. Persönliche Abholung in Gunskirchen (OÖ) nach Absprache möglich.",
    relatedLinks: [{ label: "Kontakt", href: "/kontakt" }, { label: "Anfrage stellen", href: "/kontakt" }]
  },
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
        title="3D-Druck Glossar: 70+ Fachbegriffe einfach erklärt [2026]"
        description="FDM, Infill, Layer Height, Warping – was heißt das? 70+ 3D-Druck Begriffe verständlich erklärt. Das Nachschlagewerk für Einsteiger & Profis → Jetzt nachschlagen"
        keywords="3d-druck glossar, 3d-druck fachbegriffe, fdm begriffe, architekturmodell maßstab, messemodell 3d-druck, additive fertigung lexikon, infill, layer height, warping, stringing, slicing"
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

              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                3D-Druck <span className="text-gradient">Glossar</span>
              </h1>

              <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                70+ wichtige Fachbegriffe rund um FDM 3D-Druck, Architekturmodelle, Messemodelle und additive Fertigung –
                von Grundlagen bis Advanced Topics verständlich erklärt.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Begriff suchen (z.B. Architekturmodell, Infill, Warping...)"
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

              <div className="grid gap-4 md:gap-6">
                {filteredTerms.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3 md:pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                        <CardTitle className="text-lg sm:text-xl md:text-2xl break-words">{item.term}</CardTitle>
                        <Badge variant="secondary" className="self-start sm:self-auto shrink-0">{item.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm sm:text-base leading-relaxed text-foreground mb-3">
                        {item.definition}
                      </CardDescription>
                      {item.relatedLinks && item.relatedLinks.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.relatedLinks.map((link, li) => (
                            <Link
                              key={li}
                              to={link.href}
                              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 border border-primary/20 hover:border-primary/50 rounded-full px-3 py-1 bg-primary/5 hover:bg-primary/10 transition-all"
                            >
                              <ArrowRight className="w-3 h-3" />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
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

        {/* Service Links Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Direkt zu unseren <span className="text-gradient">Services</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Wenden Sie Ihr neues Wissen an – hier geht es zu den passenden Leistungen:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { label: "FDM 3D-Druck", href: "/fdm-druck", desc: "Unser Hauptverfahren" },
                  { label: "Prototypen", href: "/prototypen", desc: "Rapid Prototyping" },
                  { label: "Architekturmodelle", href: "/architekturmodelle", desc: "Maßstabsgetreu" },
                  { label: "Messemodelle", href: "/messemodelle", desc: "Express in 24–48h" },
                  { label: "Materialien", href: "/materialien", desc: "PLA, PETG & mehr" },
                  { label: "Einzelanfertigungen", href: "/einzelanfertigungen", desc: "Individuelle Unikate" },
                ].map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                    className="group flex flex-col items-center p-4 bg-background rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">{s.label}</span>
                    <span className="text-xs text-muted-foreground mt-1">{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
                Über dieses <span className="text-gradient">Glossar</span>
              </h2>
              <div className="max-w-none text-muted-foreground text-sm md:text-base">
                <p className="mb-3 md:mb-4 leading-relaxed">
                  Dieses 3D-Druck Glossar wurde speziell für die <strong className="text-foreground">additive Fertigung mit FDM-Technologie</strong> erstellt
                  und basiert auf jahrelanger praktischer Erfahrung. Die Definitionen orientieren sich
                  an fachspezifischen Quellen aus der 3D-Druck-Community, Foren und Herstellerdokumentation.
                </p>
                <p className="mb-3 md:mb-4 leading-relaxed">
                  Alle Begriffe sind <strong className="text-foreground">praxisnah erklärt</strong> und berücksichtigen die spezifischen Anforderungen
                  der modernen additiven Fertigung – von technischen Druckparametern bis hin zu anwendungsspezifischen Begriffen für
                  <strong className="text-foreground"> Architekturmodelle, Messemodelle und Prototypen</strong>.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Noch Fragen zu einem Begriff?</strong> Unser Team steht Ihnen gerne für eine kostenlose
                  Beratung zur Verfügung. Wir erklären Ihnen alle technischen Aspekte verständlich und helfen Ihnen, die richtige Lösung
                  für Ihr 3D-Druck-Projekt zu finden.
                </p>
              </div>
              <div className="mt-8 text-center">
                <Button asChild size="lg">
                  <Link to="/kontakt" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    Kostenlose Beratung anfragen <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <StickyCTA context="3D-Druck Glossar" />
        <Footer />
      </div>
    </>
  );
};

export default Glossar;
