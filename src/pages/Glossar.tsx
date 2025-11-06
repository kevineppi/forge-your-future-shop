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
  },
  {
    term: "Ghosting / Ringing",
    category: "Druckfehler",
    definition: "Wellenförmige Artefakte oder Echo-Muster, die parallel zu scharfen Kanten auftreten. Verursacht durch mechanische Vibrationen des Druckers bei schnellen Richtungswechseln. Das Trägheitsmoment des Druckkopfs führt zu Schwingungen im Rahmen. Lösungen: Beschleunigung reduzieren, Druckgeschwindigkeit senken, mechanische Stabilität erhöhen (Riemenspannung, Rahmenversteifungen), Input Shaping aktivieren."
  },
  {
    term: "Elephant's Foot",
    category: "Druckfehler",
    definition: "Aufweitung der ersten Schichten am Bauteilfuß, wodurch der Grundriss größer als gewollt wird. Entsteht, wenn die erste Schicht zu stark ans Bett gedrückt wird oder das Heizbett zu heiß ist und untere Schichten erweicht. Lösungen: Z-Offset erhöhen (0,02-0,05mm), Betttemperatur nach 1-2 Schichten reduzieren, Brim statt Raft verwenden, erste Schicht langsamer drucken."
  },
  {
    term: "Zits and Blobs",
    category: "Druckfehler",
    definition: "Kleine Kunststoffhügel oder Unreinheiten auf der Oberfläche, oft an der Stelle, wo eine neue Schicht beginnt (Seam). Entstehen durch Materialaustritt beim Stopp/Start des Extruders oder inkonsistenten Materialfluss. Lösungen: Retraction optimieren, Seam-Position anpassen (auf Ecken legen oder zufällig verteilen), Coasting aktivieren, Drucktemperatur senken, Wiping aktivieren."
  },
  {
    term: "Bowden Extruder",
    category: "Hardware",
    definition: "Extruder-System, bei dem der Filamentantrieb (Feeder) räumlich vom Hot-End getrennt ist. Filament wird durch ein PTFE-Rohr (Bowden Tube) zur Düse transportiert. Vorteile: Leichterer Druckkopf ermöglicht höhere Geschwindigkeiten, weniger bewegte Masse. Nachteile: Höhere Retraction-Distanzen nötig (4-6mm), weniger direkte Kontrolle über Extrusion, schlechter für flexible Materialien."
  },
  {
    term: "Direct Drive Extruder",
    category: "Hardware",
    definition: "Extruder-System, bei dem der Filamentantrieb direkt am Hot-End montiert ist. Filament hat minimalen Abstand zwischen Antrieb und Düse. Vorteile: Präzisere Extrusionskontrolle, niedrige Retraction (1-2mm), besser für flexible Materialien (TPU). Nachteile: Höhere bewegte Masse begrenzt Beschleunigung und Geschwindigkeit, komplexere Kabelführung."
  },
  {
    term: "Acceleration (Beschleunigung)",
    category: "Druckparameter",
    definition: "Die Rate, mit der der Druckkopf seine Geschwindigkeit ändert, gemessen in mm/s². Höhere Werte ermöglichen schnellere Drucke, verursachen aber mehr Vibrationen (Ghosting). Typische Werte: 500-1000mm/s² für Standard-Drucker, 3000-10000mm/s² für moderne CoreXY-Drucker mit Input Shaping. Separate Einstellungen für Druck (Print), Verfahren (Travel), Retraktion und erste Schicht üblich."
  },
  {
    term: "Jerk",
    category: "Druckparameter",
    definition: "Die instantane Geschwindigkeitsänderung, die der Drucker ohne Beschleunigungsrampe ausführen darf, gemessen in mm/s. Reduziert Vibrationen an Ecken, kann aber zu mechanischem Verschleiß führen. In Marlin/Repetier-Firmware: typisch 5-20mm/s. Moderne Firmware (Klipper) verwendet Junction Deviation statt Jerk. Zu niedrige Werte verursachen abgerundete Ecken, zu hohe führen zu Ghosting."
  },
  {
    term: "Print Speed (Druckgeschwindigkeit)",
    category: "Druckparameter",
    definition: "Die Geschwindigkeit, mit der der Druckkopf beim Extrudieren verfährt, in mm/s. Typische Werte: 40-60mm/s für PLA, 30-50mm/s für PETG/ABS, 20-30mm/s für TPU. Besteht aus mehreren Sub-Geschwindigkeiten: Außenwand (langsamer für Qualität), Innenwand, Infill (schneller), erste Schicht (langsam für Haftung). Höhere Geschwindigkeit = kürzere Druckzeit, aber mögliche Qualitätseinbußen."
  },
  {
    term: "Travel Speed (Verfahrgeschwindigkeit)",
    category: "Druckparameter",
    definition: "Die Geschwindigkeit für Bewegungen ohne Extrusion zwischen verschiedenen Druckbereichen. Kann deutlich höher sein als Print Speed (100-200mm/s) ohne Qualitätsverlust. Höhere Travel Speed reduziert Stringing-Risiko (Material hat weniger Zeit zum Tropfen), kann aber bei zu hohen Werten zu Riemenschlag und mechanischen Problemen führen."
  },
  {
    term: "Cooling Fan (Teilekühlung)",
    category: "Hardware",
    definition: "Lüfter zur Kühlung der frisch gedruckten Schichten. Kritisch für Überhänge und Brücken - kühlt das Filament schnell ab, bevor es absackt. PLA benötigt 100% Kühlung, PETG 30-50%, ABS meist 0-20% (Warping-Gefahr). Layer-Fan sollte erst ab 2.-3. Schicht aktiviert werden. Moderne Drucker nutzen Radiallüfter mit gezielter Luftführung aus mehreren Richtungen."
  },
  {
    term: "Flow Rate (Durchflussrate)",
    category: "Druckparameter",
    definition: "Multiplikator für die Extrusionsmenge, angegeben in Prozent (normalerweise 100%). Kompensiert Abweichungen im Filamentdurchmesser oder in der Extruder-Kalibrierung. 95% Flow = 5% weniger Material, 105% = 5% mehr. Falsche Flow-Einstellung führt zu Over-Extrusion (zu viel = Blobs, unsaubere Oberfläche) oder Under-Extrusion (zu wenig = Lücken, schwache Schichten). Kalibrierung via Flow-Cube empfohlen."
  },
  {
    term: "Extrusion Multiplier",
    category: "Kalibrierung",
    definition: "Synonym für Flow Rate. Wichtiger Kalibrierungsparameter zur Feinabstimmung der Materialzufuhr. Wird durch Drucken eines kalibrierten Würfels oder Hohlwand-Tests ermittelt. Formel: Neuer Multiplier = Aktueller Multiplier × (Soll-Wandstärke / Ist-Wandstärke). Material-spezifisch: Jedes Filament kann leicht unterschiedliche Werte benötigen (±3-5%)."
  },
  {
    term: "PID Tuning",
    category: "Kalibrierung",
    definition: "Automatischer Kalibrierungsprozess für die Heizungsregelung (Hot-End und Heizbett). PID-Regler (Proportional-Integral-Derivative) passt Heizleistung dynamisch an, um Zieltemperatur präzise zu halten. Notwendig nach Hardware-Änderungen (neue Düse, Heizbett) oder bei Temperaturschwankungen. Kommando in Marlin: M303 für Hot-End, M304 für Bett. Ergebnis: Optimierte P-, I- und D-Werte für stabiles Heizen."
  },
  {
    term: "Input Shaping",
    category: "Kalibrierung",
    definition: "Fortschrittliche Firmware-Funktion (Klipper) zur Kompensation mechanischer Resonanzen. Misst Eigenschwingungen des Druckers via Beschleunigungssensor und generiert Gegenschwingungen, die Ghosting/Ringing eliminieren. Ermöglicht deutlich höhere Beschleunigungen (5000-15000mm/s²) ohne Qualitätsverlust. Verschiedene Algorithmen: ZV, MZV, EI, 2HUMP_EI. Revolutioniert schnelles Drucken bei höchster Qualität."
  },
  {
    term: "Coasting",
    category: "Druckparameter",
    definition: "Technik zur Vermeidung von Blobs am Schichtende. Stoppt die Extrusion kurz vor dem Endpunkt (0,1-0,5mm), nutzt Restdruck im Hot-End zum Weiterfließen. Reduziert Material-Austreten beim Stopp, vermindert Seam-Sichtbarkeit. Zu viel Coasting führt zu Under-Extrusion an Endpunkten. Alternative/Ergänzung zu Retraction. Nicht in allen Slicern verfügbar (Simplify3D, Cura)."
  },
  {
    term: "Seam Position (Nahtstelle)",
    category: "Druckparameter",
    definition: "Der Punkt, an dem jede Schicht beginnt und endet. Sichtbar als vertikale Linie (Z-Seam). Platzierungsstrategien: User Specified (feste Position, z.B. Rückseite), Sharpest Corner (auf scharfsten Ecken verstecken), Random (zufällig verteilt für gleichmäßige Oberfläche), Aligned (vertikal ausgerichtet). Optimierung durch Coasting, Retraction und Wipe-Einstellungen. Bei organischen Formen oft Random bevorzugt."
  },
  {
    term: "Vase Mode / Spiralize",
    category: "Druckparameter",
    definition: "Spezieller Druckmodus für einwandige, hohle Objekte ohne Schichtwechsel. Düse fährt kontinuierlich spiralförmig nach oben, Z-Achse bewegt sich kontinuierlich während einer Schicht. Vorteile: Keine sichtbare Naht, sehr schnell, wasserdicht, dekorativ. Einschränkungen: Nur einfache, geschlossene Geometrien, keine Überhänge/Brücken möglich, nur eine Perimeter, kein Infill/Top. Ideal für Vasen, Becher, Lampenschirme."
  },
  {
    term: "Ironing",
    category: "Druckparameter",
    definition: "Nachbearbeitungsfunktion im Slicer, die oberste Schicht glättet. Hot-End fährt mit wenig/keiner Extrusion über die Top-Schicht und 'bügelt' Material glatt durch Hitze und Druck. Erzeugt glänzende, nahezu schichtlinienfreie Oberflächen. Verlängert Druckzeit um 10-30%. Parameter: Ironing-Durchfluss (5-15%), Geschwindigkeit (langsam, ~20mm/s), Linienabstand (0,1-0,15mm). Besonders effektiv bei PLA und PETG."
  },
  {
    term: "Adaptive Layers (Variable Schichthöhe)",
    category: "Druckparameter",
    definition: "Automatische Anpassung der Layer Height basierend auf Modellgeometrie. Flache Bereiche mit hohen Schichten (schnell), Details und Kurven mit niedrigen Schichten (präzise). Reduziert Druckzeit bei gleichbleibender Qualität an kritischen Stellen. Slicer analysiert Oberflächenwinkel und passt zwischen Min/Max-Werten an (z.B. 0,1-0,3mm). PrusaSlicer und Cura unterstützen diese Funktion nativ."
  },
  {
    term: "Minimum Layer Time",
    category: "Druckparameter",
    definition: "Mindestzeit pro Schicht (typisch 5-20 Sekunden). Verhindert, dass kleine Schichten zu schnell gedruckt werden und Material nicht ausreichend kühlt. Wenn Schicht schneller als Minimum-Zeit druckbar wäre, reduziert Slicer automatisch Geschwindigkeit oder fügt Wartezeit ein. Besonders wichtig bei kleinen Türmchen, Buchstaben, Figuren. Zu kurze Layer Time führt zu Schmelzen/Verformen vorheriger Schichten."
  },
  {
    term: "Maximum Volumetric Speed",
    category: "Druckparameter",
    definition: "Maximale Materialmenge, die pro Sekunde geschmolzen und extrudiert werden kann, in mm³/s. Physikalische Grenze des Hot-Ends, abhängig von Heizleistung, Düsengröße und Material. Typisch: 10-15mm³/s bei Standard-Hot-Ends, bis 30mm³/s bei High-Flow-Hot-Ends (z.B. E3D Volcano). Formel: mm³/s = Geschwindigkeit × Layer Height × Linienbreite. Limitiert effektive Druckgeschwindigkeit."
  },
  {
    term: "Heat Creep",
    category: "Druckfehler",
    definition: "Unerwünschtes Aufschmelzen von Filament im Cold-End oberhalb des Hot-Ends. Verursacht durch unzureichende Kühlung oder defekte Kühlkörper/Lüfter. Führt zu Verstopfungen, inkonsistenter Extrusion, Klicken des Extruders. Symptome verschlimmern sich bei höheren Temperaturen oder längeren Druckjobs. Lösungen: Hotend-Lüfter prüfen, Heatbreak ersetzen, PTFE-Tube kontrollieren, bei PLA Druckpausen einlegen."
  },
  {
    term: "Cold-End",
    category: "Hardware",
    definition: "Der obere, ungeheizte Teil des Extruders mit Kühlkörper und Lüfter. Hält Filament fest und kühl bis zum Heatbreak. Enthält den Antriebsmechanismus (bei Direct Drive) oder die Bowden-Kupplung. Kühlkörper mit Rippen und aktiver Lüftung verhindert Heat Creep. Material meist Aluminium für gute Wärmeableitung. Wichtig für zuverlässige Langzeitdrucke und temperaturkritische Materialien."
  },
  {
    term: "Heatbreak",
    category: "Hardware",
    definition: "Thermische Barriere zwischen Cold-End und Hot-End. Schlankes Rohr mit minimaler Kontaktfläche zur Wärmedämmung, meist aus Edelstahl oder Titan (schlechte Wärmeleiter). Innenloch nur etwas größer als Filamentdurchmesser. Kritische Komponente für saubere thermische Trennung. All-Metal-Heatbreaks (kein PTFE) erlauben Hochtemperatur-Materialien >250°C. Bi-Metall-Designs (Kupfer+Titan) optimieren Wärmeleitung und -trennung."
  },
  {
    term: "PTFE Tube (Bowden Tube)",
    category: "Hardware",
    definition: "Teflon-Schlauch zur Führung des Filaments. Bei Bowden-Extrudern: Leitet Filament vom Feeder zum Hot-End. Im Hot-End: Als Liner zur Filamentführung (bis ~250°C, darüber All-Metal). PTFE hat extrem niedrige Reibung, verschleißt aber bei hohen Temperaturen. Innendurchmesser kritisch: 2mm für 1,75mm Filament, 3mm für 2,85mm. Qualität variiert stark - Capricorn-PTFE gilt als Standard für höhere Temperaturen (bis 260°C)."
  },
  {
    term: "Stepper Motor (Schrittmotor)",
    category: "Hardware",
    definition: "Elektromagnete, die den 3D-Drucker präzise bewegen. NEMA17 (42×42mm) am häufigsten für X/Y/Z und Extruder. Dreht in kleinen Schritten (1,8° = 200 Steps/Rotation Standard). Mit Microstepping (16×, 32×, 256×) bis zu 51.200 Mikroschritte/Rotation möglich. Höheres Drehmoment (N·cm) = mehr Kraft. Treiber (TMC2208, TMC2209) regeln Strom und ermöglichen Silent-Mode. Überhitzung führt zu Schrittverlust."
  },
  {
    term: "Belt Tension (Riemenspannung)",
    category: "Kalibrierung",
    definition: "Spannung der Zahnriemen (GT2) für X/Y-Achsen. Kritisch für Präzision und Druckqualität. Zu locker: Schrittverlust, ungenaue Maße, verschobene Schichten, Ghosting. Zu straff: Erhöhter Verschleiß, Lagerbelastung, Motorüberhitzung. Prüfung: Riemen sollte gespannt sein, aber mit Finger seitlich 5-10mm auslenkbar. Sound-Test: Anschlagen des Riemens sollte tiefen, gleichmäßigen Ton ergeben. Regelmäßige Nachspannung nötig (Dehnung über Zeit)."
  },
  {
    term: "Firmware",
    category: "Software",
    definition: "Basissoftware des 3D-Druckers, interpretiert G-Code und steuert Hardware. Hauptoptionen: Marlin (am weitesten verbreitet, gut dokumentiert, für 8/32-bit), Klipper (Raspberry Pi-basiert, höchste Performance, Input Shaping), RepRapFirmware (Duet-Boards, webbasiert), RRF/Smoothieware (32-bit). Firmware-Updates ermöglichen neue Features (Mesh Bed Leveling, Linear Advance). Konfiguration via Configuration.h (Marlin) oder printer.cfg (Klipper)."
  },
  {
    term: "Fuzzy Skin",
    category: "Druckparameter",
    definition: "Oberflächen-Effekt, der glatte Außenwände durch zufällige Mikroabweichungen aufraut. Erzeugt griffige, texturierte Oberfläche ähnlich feinem Sandpapier oder Gummi. Slicer verschiebt Außenperimeter zufällig um 0,1-0,4mm. Nützlich für Griffe, ergonomische Teile, Spielzeug. Verbirgt auch Druckfehler und Schichtlinien. Erhöht Druckzeit leicht (5-15%). Parameter: Dicke und Punktdichte der Textur. In Cura, PrusaSlicer, SuperSlicer verfügbar."
  },
  {
    term: "Mesh Bed Leveling (ABL)",
    category: "Kalibrierung",
    definition: "Automatisches oder manuelles Vermessen der Bettoberfläche in einem Raster (z.B. 5×5 Punkte). Erstellt Höhenkarte der Unebenheiten. Software kompensiert während des Drucks durch Z-Achsenanpassung in Echtzeit. Arten: Manuell (Papiermethode an mehreren Punkten), BLTouch/CR-Touch (mechanischer Sensor), induktiv (nur Metall-Betten), Kapazitiv (alle Oberflächen). Ersetzt nicht perfektes Leveling, kompensiert nur Restabweichungen (±0,3mm)."
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
        title="3D-Druck Glossar | 60+ Fachbegriffe & Definitionen | ekdruck e.U."
        description="Verstehen Sie Ihren 3D-Drucker endlich richtig: 60+ Begriffe von FDM bis Input Shaping verständlich erklärt. Schluss mit Fachjargon – jetzt nachschlagen!"
        keywords="3d-druck glossar, 3d-druck fachbegriffe, fdm begriffe, additive fertigung lexikon, ghosting, ringing, pressure advance, input shaping, klipper, marlin"
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
                60+ wichtige Fachbegriffe rund um FDM 3D-Druck, additive Fertigung und Rapid Prototyping - 
                von Grundlagen bis Advanced Topics verständlich erklärt.
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
                      <CardDescription className="text-sm sm:text-base leading-relaxed text-foreground">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
                Über dieses <span className="text-gradient">Glossar</span>
              </h2>
              <div className="max-w-none text-muted-foreground text-sm md:text-base">
                <p className="mb-3 md:mb-4 leading-relaxed">
                  Dieses 3D-Druck Glossar wurde speziell für die <strong className="text-foreground">additive Fertigung mit FDM-Technologie</strong> erstellt 
                  und basiert auf jahrelanger praktischer Erfahrung im Prototypenbau und der Serienfertigung. Die Definitionen orientieren sich 
                  an fachspezifischen Quellen aus der 3D-Druck-Community, technischen Foren und Herstellerdokumentation.
                </p>
                <p className="mb-3 md:mb-4 leading-relaxed">
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
