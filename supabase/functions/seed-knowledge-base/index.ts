import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Knowledge base entries to seed
const knowledgeEntries = [
  // FDM & Grundlagen
  {
    title: "FDM 3D-Druck Verfahren",
    content: "FDM (Fused Deposition Modeling), auch Schmelzschichtung oder FFF genannt, ist das am weitesten verbreitete 3D-Druckverfahren. Thermoplastisches Filament wird durch eine beheizte Düse geschmolzen und schichtweise auf eine Bauplatte aufgetragen. Die Schichtadhäsion basiert auf der Interdiffusion von Polymerketten bei Temperaturen knapp über der Glasübergangstemperatur. Standard-Schichthöhen liegen zwischen 0,1-0,4mm. FDM ist ideal für Anschauungsmodelle, Architekturmodelle und Dekorationsobjekte aus Kunststoff und bietet die niedrigsten Kosten bei hoher Materialvielfalt.",
    category: "Verfahren",
    page_url: "/glossar"
  },
  {
    title: "3D-Druck Materialien - PLA",
    content: "PLA (Polylactid) ist ein biobasierter, biologisch abbaubarer Polyester aus nachwachsenden Rohstoffen wie Maisstärke. Drucktemperatur: 190-220°C, kein Heizbett zwingend erforderlich. Zugfestigkeit: 50-70 MPa, E-Modul: 3.5 GPa (steifster Standardkunststoff). Glasübergangstemperatur nur ~60°C - nicht für Außenanwendungen oder temperaturbeanspruchte Teile geeignet. Ideal für Prototypen, Anschauungsmodelle, Innenanwendungen. Preis: 20-30€/kg. Geruchsneutral, einfach zu drucken, ausgezeichnete Maßhaltigkeit.",
    category: "Materialien",
    page_url: "/ratgeber/material-guide"
  },
  {
    title: "3D-Druck Materialien - PETG",
    content: "PETG (Polyethylenterephthalat-Glycol) ist ein robuster, schlagfester Kunststoff mit hervorragenden mechanischen Eigenschaften. Drucktemperatur: 230-250°C, Heizbett 70-80°C empfohlen. Zugfestigkeit: 50-60 MPa, Bruchdehnung: 30-100% (vs. 2-5% bei PLA). Glasübergangstemperatur: 75-80°C, einsetzbar bis 70°C. UV- und chemikalienbeständig, ideal für langlebige Anschauungsmodelle und Präsentationsobjekte. Höhere Festigkeit als PLA bei guter Druckbarkeit. Neigt zu Stringing. Preis: 25-35€/kg. Perfekt für robuste Modelle, Gehäuse-Designs und transparente Schauobjekte.",
    category: "Materialien",
    page_url: "/ratgeber/material-guide"
  },
  {
    title: "3D-Druck Materialien - ASA",
    content: "ASA (Acrylnitril-Styrol-Acrylester) ist ein UV-beständiger Hochleistungskunststoff für Außenanwendungen. Drucktemperatur: 240-260°C, Heizbett 90-110°C zwingend erforderlich. Glasübergangstemperatur: 95-105°C, temperaturbeständig bis 90°C. Hervorragende UV- und Witterungsbeständigkeit - nach 1000h UV-Exposition nur 5-10% Festigkeitsverlust. Wetterbeständig, farbstabil, exzellente Chemikalienbeständigkeit gegen Säuren, Laugen, Öle. Preis: 35-50€/kg. Ideal für Außenkomponenten, Automobilteile, Gartengeräte, Drohnen-Gehäuse. Geschlossene Baukammer empfohlen.",
    category: "Materialien",
    page_url: "/ratgeber/material-guide"
  },
  {
    title: "3D-Druck Materialien - Nylon & TPU",
    content: "Nylon (Polyamid PA6/PA12) ist hochfest, abriebfest mit ausgezeichneter Schlagzähigkeit. Sehr hygroskopisch - muss vor Druck getrocknet werden. Drucktemperatur 240-280°C. Ideal für anspruchsvolle Anschauungsmodelle und hochwertige Präsentationsobjekte. PA12 weniger hygroskopisch als PA6. TPU (Thermoplastisches Polyurethan) ist flexibles, gummiartiges Filament mit hoher Elastizität. Shore-Härte 85A-95A. Erfordert niedrige Druckgeschwindigkeit (20-30mm/s) und Direct-Drive-Extruder. Anwendungen: flexible Designmodelle, Schutzhüllen, elastische Dekorationsobjekte. Drucktemperatur 210-230°C.",
    category: "Materialien",
    page_url: "/glossar"
  },
  // Technische Details
  {
    title: "3D-Drucker Komponenten - Extruder",
    content: "Der Extruder ist die zentrale Komponente eines FDM-Druckers, bestehend aus Kaltende (Cold-End) zum Filamenttransport und Heizende (Hot-End) zum Aufschmelzen. Es gibt zwei Haupttypen: Bowden-Extruder (Feeder räumlich getrennt vom Hot-End, leichter Druckkopf, höhere Geschwindigkeit, aber höhere Retraction 4-6mm) und Direct-Drive-Extruder (Feeder direkt am Hot-End, präzisere Kontrolle, niedrige Retraction 1-2mm, besser für TPU). Das Hot-End besteht aus Heatblock, Heatbreak, Düse und Heizelement mit PID-geregelter Temperaturkontrolle.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  {
    title: "3D-Druck Düsen und Auflösung",
    content: "Die Düse (Nozzle) ist das Endstück des Hot-Ends. Standarddurchmesser: 0,4mm. Verfügbar von 0,2mm (hohe Details, lange Druckzeit) bis 1,2mm (schnelle Drucke, grobe Details). Material meist Messing, für abrasive Filamente (Carbon, Metall) gehärteter Stahl oder Rubinspitze notwendig. Die Schichthöhe (Layer Height) sollte 25-75% des Düsendurchmessers betragen. Typische Werte: 0,1-0,15mm für Details, 0,2-0,3mm Standard. Niedrigere Schichthöhe = glattere Oberfläche und mehr Details, aber deutlich längere Druckzeit.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  {
    title: "Druckparameter - Infill & Perimeter",
    content: "Infill ist die innere Füllstruktur eines 3D-Drucks in Prozent (0-100%). Höherer Infill = mehr Festigkeit und Material. Typische Werte: 15-20% für Anschauungsmodelle, 30-50% für robuste Präsentationsobjekte, 100% für besonders stabile Modelle. Füllmuster (Grid, Gyroid, Honeycomb) beeinflussen Festigkeit. Perimeter sind die äußeren Wandungen, meist 2-4 Schichten. Mehr Perimeter erhöhen Festigkeit und Wandstabilität. Bei dünnen Wänden können Perimeter das gesamte Objekt ausfüllen (0% Infill sinnvoll). Optimale Balance zwischen Festigkeit, Gewicht und Druckzeit entscheidend.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  {
    title: "Supports und Überhänge",
    content: "Stützstrukturen (Supports) sind temporäre Hilfsstrukturen für Überhänge und freiliegende Bereiche. Überhänge bis 45° sind meist ohne Supports druckbar (45°-Regel). Steilere Winkel erfordern Stützstrukturen. Arten: Lineare Supports, Baum-Supports (Tree Supports). Supportmaterial kann wasserlöslich (PVA, BVOH) oder mechanisch entfernbar sein. Bridging ist das Drucken horizontaler Abschnitte zwischen zwei Stützpunkten - erfordert optimale Kühlung. Maximal 50mm überbrückbar, abhängig von Material. PLA bridgt besser als PETG.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  // Kosten & Preise
  {
    title: "3D-Druck Kosten - Faktoren",
    content: "3D-Druck Kosten setzen sich aus 4 Hauptfaktoren zusammen: 1) Volumen & Größe: Kleines Teil 5x5x5cm kostet 15-30€, großes Teil 20x20x20cm kostet 80-150€. 2) Druckzeit: Einfache Teile 2-4h, komplexe Teile 12-48h. Express-Service (24h) kostet 30% Aufpreis. 3) Material: PLA 3-5€/100g, technische Materialien wie Carbon-PETG 8-15€/100g. 4) Komplexität: Viele Stützstrukturen erhöhen Materialverbrauch um 20-40%. Nachbearbeitung kostet 15-50€. Österreichisches Premium-Filament wird verwendet.",
    category: "Preise",
    page_url: "/ratgeber/kosten-guide"
  },
  {
    title: "3D-Druck Preisbeispiele",
    content: "Konkrete Preisbeispiele: Kleines Anschauungsmodell (5x5x5cm, PLA, 3h): 18-25€. Mittleres Präsentationsmodell (10x10x8cm, PETG, 8h): 45-65€. Großes Modell (20x15x12cm, Carbon-PETG, 24h): 120-180€. Komplexes Architekturmodell (25x25x15cm, PLA weiß, 36h): 200-280€. Alle Preise inkl. Material, Druckzeit und Standardversand in Österreich. Mengenrabatte: Ab 5 Teile 10% Rabatt, ab 20 Teile 15%, ab 50 Teile 20%. Standardversand (2-3 Tage) ab 50€ kostenlos, sonst 4,90€. Express (24h) +12,90€.",
    category: "Preise",
    page_url: "/ratgeber/kosten-guide"
  },
  {
    title: "Kostenvergleich Fertigungsverfahren",
    content: "FDM 3D-Druck vs. traditionelle Fertigung: CNC-Fräsen Modell 800-2.000€, 2-4 Wochen Lieferzeit. FDM 3D-Druck Modell 50-300€, 2-5 Tage Lieferzeit. Für Anschauungsmodelle und Projektmengen unter 100 Stück ist FDM fast immer günstiger. FDM spart 50-80% bei Designmodellen gegenüber CNC-Fräsen.",
    category: "Preise",
    page_url: "/ratgeber/verfahrens-vergleich"
  },
  {
    title: "Spartipps für 3D-Druck",
    content: "6 Tipps zum Sparen: 1) Modell optimieren - unnötige Wandstärken reduzieren. 2) Richtige Auflösung wählen - nicht jedes Teil braucht 0,1mm Schichthöhe. 3) Mehrere Teile kombinieren - gleichzeitige Bestellung spart Kosten. 4) Standardmaterialien nutzen - PLA und PETG sind günstiger als Spezialmaterialien. 5) Auf Express verzichten - Standardlieferzeit spart 30% vs. 24h-Service. 6) Eigenfinish - Nachbearbeitung selbst übernehmen kann 30-50€ sparen.",
    category: "Preise",
    page_url: "/ratgeber/kosten-guide"
  },
  // Verfahrensvergleich
  {
    title: "3D-Druckverfahren Vergleich - FDM vs SLA vs SLS",
    content: "FDM: Schichthöhe 0,1-0,4mm, Genauigkeit ±0,5%, sichtbare Schichten, breite Materialauswahl, Geräte 500-5.000€, Material 20-50€/kg. Ideal für Anschauungsmodelle, Architekturmodelle, Dekorationsobjekte. SLA: Schichthöhe 0,025-0,1mm, Genauigkeit ±0,1mm, glatte Oberfläche, Photopolymere, Geräte 2.000-10.000€, Material 100-200€/L. Ideal für Details, Schmuck, feinste Miniaturmodelle. SLS: Schichthöhe 0,06-0,15mm, Genauigkeit ±0,3%, leicht körnig, keine Supports nötig, Nylon/TPU, Geräte 10.000-100.000€+, Material 60-100€/kg. Ideal für hochpräzise Anschauungsobjekte.",
    category: "Verfahren",
    page_url: "/ratgeber/verfahrens-vergleich"
  },
  {
    title: "FDM Vorteile und Anwendungen",
    content: "FDM-Vorteile: Niedrigste Kosten für Geräte und Material, breite Materialvielfalt (PLA, PETG, ASA, TPU, Composites), einfache Bedienung und Wartung, ideal für Anschauungsmodelle und Designstudien, nachhaltige Materialien verfügbar. Anwendungen: Architekturmodelle, Messemodelle, Dekorationsobjekte, Designstudien, Präsentationsmodelle. FDM ist optimal wenn Kosteneffizienz wichtig ist, große Objekte gedruckt werden, recycelbare Materialien gewünscht sind.",
    category: "Verfahren",
    page_url: "/ratgeber/verfahrens-vergleich"
  },
  {
    title: "Rapid Prototyping Grundlagen",
    content: "Rapid Prototyping ist die schnelle Herstellung von Designprototypen mittels additiver Fertigung. FDM 3D-Druck ermöglicht 85% schnellere Entwicklung als traditionelle Methoden. Vorteile: Keine Werkzeugkosten, schnelle Iterationen möglich, Designfreiheit. Typische Lieferzeit 2-5 Tage vs. 2-4 Wochen bei CNC. Express-Service liefert in 24-48h. Kostenreduktion um bis zu 75% vs. CNC bei Designmodellen. Ermöglicht frühzeitige Visualisierung und schnellere Designentscheidungen.",
    category: "Services",
    page_url: "/rapid-prototyping"
  },
  // Maschinenbau
  {
    title: "3D-Druck im Maschinenbau - Funktionsprototypen",
    content: "Funktionsprototypen ermöglichen Validierung von Designs vor Serienfertigung. Vorteile: Funktionstest unter realen Bedingungen, iterative Optimierung möglich, Kostenreduktion bis 75% vs. CNC, Lieferzeit 2-5 Tage statt 2-4 Wochen. Materialien: PA12 (Nylon) für hohe Festigkeit und Verschleißfestigkeit, Carbon-Composite für hochbelastete Strukturbauteile, PETG für chemikalienbeständige Teile. Kritische Faktoren: Schichtorientierung beachten (Z-Achse nur 50-70% der XY-Festigkeit), Wandstärke min. 2-3mm für optimale Eigenschaften, Toleranzen ±0,2-0,5mm.",
    category: "Technische Details",
    page_url: "/ratgeber/maschinenbau"
  },
  {
    title: "3D-Druck Ersatzteile & Legacy-Komponenten",
    content: "Produktion nicht mehr verfügbarer Bauteile per 3D-Druck. Vorteile: Keine Mindestbestellmengen, Reverse Engineering möglich (Vermessung defekter Teile), Lagerhaltung minimieren, On-Demand Produktion. Ideal für auslaufende Produktlinien, Oldtimer-Restaurierung, Industrieanlagen-Wartung. Materialauswahl nach Originalanforderungen: ASA für UV-Beständigkeit, PETG für chemische Beständigkeit, PA12 für mechanische Belastung. Kosteneffizienz besonders bei seltenen Teilen und kleinen Stückzahlen (<50).",
    category: "Services",
    page_url: "/ratgeber/maschinenbau"
  },
  {
    title: "Qualitätsfaktoren 3D-Druck Maschinenbau",
    content: "Kritische Qualitätsfaktoren: 1) Schichtorientierung - Anisotropie bedeutet Z-Achse nur 50-70% der XY-Festigkeit, Belastungsrichtung bei Design berücksichtigen. 2) Wandstärke - Minimum 1,2mm für strukturelle Festigkeit, optimal 2-3mm für beste mechanische Eigenschaften. 3) Toleranzen - FDM ±0,2-0,5mm je nach Bauteilgröße, Nachbearbeitung für Passungen einplanen. 4) Verzug - Thermische Kontraktion bei Abkühlung, Lösung: beheiztes Druckbett, Temperaturmanagement, optimierte Druckparameter.",
    category: "Technische Details",
    page_url: "/ratgeber/maschinenbau"
  },
  // Druckfehler
  {
    title: "Druckfehler - Warping",
    content: "Warping ist das Verziehen oder Aufwölben der Ecken während des Abkühlens durch Materialschrumpfung. Besonders bei ABS und großflächigen Teilen problematisch. Ursache: Unterschiedliche Abkühlgeschwindigkeit führt zu inneren Spannungen. Gegenmaßnahmen: Beheiztes Bett verwenden (70-110°C je nach Material), geschlossene Baukammer (konstante Umgebungstemperatur), Brim oder Raft für bessere Haftung, langsameres Abkühlen, reduzierte Teilekühlung in ersten Schichten, Haftmittel (Haarspray, Klebestick) auf Bauplatte.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  {
    title: "Druckfehler - Stringing",
    content: "Stringing ist unerwünschte Fädenbildung zwischen nicht verbundenen Druckbereichen. Entsteht wenn Material aus der Düse tropft während Verfahrbewegungen. Besonders häufig bei PETG und TPU. Lösungen: Retraction-Einstellungen optimieren (Distance 1-6mm, Speed 25-45mm/s), Drucktemperatur senken (5-10°C reduzieren), Verfahrgeschwindigkeit erhöhen (150-200mm/s), Z-Hop aktivieren, Coasting und Wipe aktivieren. Retraction bei Bowden-Extrudern höher (4-6mm) als bei Direct-Drive (1-2mm). Zu viel Retraction kann zu Verstopfungen führen.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  {
    title: "Druckfehler - Ghosting & Ringing",
    content: "Ghosting oder Ringing sind wellenförmige Artefakte parallel zu scharfen Kanten. Verursacht durch mechanische Vibrationen des Druckers bei schnellen Richtungswechseln. Das Trägheitsmoment des Druckkopfs führt zu Schwingungen im Rahmen. Lösungen: Beschleunigung reduzieren (500-1000mm/s²), Druckgeschwindigkeit senken, mechanische Stabilität erhöhen (Riemenspannung prüfen, Rahmen versteifen), Input Shaping aktivieren (Klipper Firmware), Jerk-Werte anpassen. Moderne CoreXY-Drucker mit Input Shaping erreichen 3000-10000mm/s² ohne Ghosting.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  // Kalibrierung
  {
    title: "Kalibrierung - Leveling & Z-Offset",
    content: "Bed Leveling ist die exakte Ausrichtung der Bauplatte parallel zur Düsenbewegung. Essenziell für gleichmäßige Haftung der ersten Schicht. Methoden: Manuelles Leveling mit Papiermethode (Papier zwischen Düse und Bett, leichter Widerstand), automatisches Leveling mit Sensoren (BLTouch, induktiv). Z-Offset ist der vertikale Abstand zwischen Düse und Platte im Referenzpunkt. Kritisch für Erstschichthaftung: Zu geringer Abstand = Verstopfung, zu großer = keine Haftung. Typisch -0,1 bis -0,3mm vom mechanischen Nullpunkt. Live Z-Adjust während erster Schicht empfohlen.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  {
    title: "Kalibrierung - Flow Rate & PID Tuning",
    content: "Flow Rate (Durchflussrate) ist Multiplikator für Extrusionsmenge in Prozent (normalerweise 100%). Kompensiert Filamentdurchmesser-Abweichungen. 95% Flow = 5% weniger Material, 105% = 5% mehr. Falsche Einstellung führt zu Over-Extrusion (Blobs, unsaubere Oberfläche) oder Under-Extrusion (Lücken, schwache Schichten). Kalibrierung via Flow-Cube: Neuer Multiplier = Aktueller × (Soll-Wandstärke / Ist-Wandstärke). PID Tuning kalibriert Heizungsregelung für stabiles Temperaturhalten. Nach Hardware-Änderungen notwendig. Marlin: M303 für Hot-End, M304 für Bett.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  // Nachbearbeitung
  {
    title: "Nachbearbeitung - Post-Processing",
    content: "Post-Processing umfasst alle Bearbeitungsschritte nach dem 3D-Druck: Support-Entfernung mit Zangen/Cutter, Schleifen (nass/trocken, Körnung 100-2000), Grundieren für glatte Oberfläche, Lackieren (Sprühdose oder Airbrush), chemisches Glätten (Aceton-Dampf bei ABS, Ethylacetat bei PETG), Einfügen von Gewindeeinsätzen (Heatsets mit Lötkolben), Bohren, Gewindeschneiden, Kleben mehrerer Teile (Cyanacrylat, Epoxy). Professionelles Post-Processing kann 3D-Drucke wie Spritzgussteile aussehen lassen. Zeitaufwand: 10 Min bis mehrere Stunden je nach Qualitätsanforderung.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  {
    title: "Nachbearbeitung - Annealing",
    content: "Annealing (Tempern) ist Wärmebehandlung zur Verbesserung mechanischer Eigenschaften. Das Teil wird kontrolliert erhitzt (unterhalb Schmelztemperatur) und langsam abgekühlt. Erhöht Festigkeit und Temperaturbeständigkeit um 30-50% durch Reorientierung der Polymerketten und teilweise Kristallisation. Bei PLA: 70-80°C über 2-4 Stunden, dann langsames Abkühlen (1-2°C/Min). Nachteile: Schrumpfung 1-3%, Maßänderungen, Oberflächenverfärbung möglich. Ideal für mechanisch belastete PLA-Teile. Backofen mit Temperaturregelung empfohlen.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  // Services & Lieferung
  {
    title: "Lieferzeiten & Versand Österreich",
    content: "Standardlieferzeit: 2-5 Werktage nach Freigabe. Express-Service: 24-48 Stunden Lieferzeit verfügbar (30% Aufpreis). Versandkosten innerhalb Österreichs: Standardversand ab 50€ kostenlos, unter 50€ pauschal 4,90€. Express-Versand zusätzlich 12,90€. Versand erfolgt gut verpackt mit stoßfesten Materialien. Tracking-Nummer wird automatisch verschickt. Abholung in Gunskirchen (Oberösterreich) nach Vereinbarung möglich. Lieferung österreichweit: Wien, Linz, Graz, Salzburg, Innsbruck und alle anderen Regionen. Großteile werden per Spedition versendet.",
    category: "Lieferung",
    page_url: "/ratgeber/kosten-guide"
  },
  {
    title: "Services - Probeteile & Muster",
    content: "Probeteile-Service für neue Kunden und Qualitätsprüfung. Kleine Probeteile (bis 5x5x5cm) ab 15€. Ermöglicht Materialtest, Passgenauigkeitsprüfung, Funktionsvalidierung vor Serienbestellung. Kostenloser Kostenvoranschlag innerhalb 24h nach Datei-Upload. Beratung zu Materialwahl, Ausrichtung, Wandstärken inklusive. Online-Kostenrechner verfügbar für Sofortpreise. Eigene Probeteile-Seite mit Upload-Funktion und direkter Anfrage. Ideal für Erstkunden zur Qualitätsbeurteilung. Probeteile werden mit gleicher Sorgfalt wie Serienteile produziert.",
    category: "Services",
    page_url: "/probeteile"
  },
  {
    title: "Services - Einzelanfertigungen",
    content: "Einzelanfertigungen für Spezialanwendungen, Unikate, Ersatzteile. Keine Mindestbestellmenge - auch einzelne Teile werden produziert. Kosteneffizient da keine Werkzeugkosten. Design-Support und technische Beratung inklusive. Reverse Engineering möglich: Defekte Teile vermessen und nachgebaut. CAD-Erstellung aus Skizzen oder Fotos auf Anfrage. Materialberatung je nach Anwendung. Nachbearbeitung wie Schleifen, Lackieren gegen Aufpreis möglich. Vertraulichkeit garantiert - NDAs auf Anfrage. Ideal für Prototypen, Legacy-Teile, Spezialwerkzeuge, Vorrichtungen.",
    category: "Services",
    page_url: "/einzelanfertigungen"
  },
  {
    title: "Services - Serienfertigung",
    content: "Serienfertigung für Kleinserien und mittlere Stückzahlen (5-500 Teile). Mengenrabatte: Ab 5 Teile 10%, ab 20 Teile 15%, ab 50 Teile 20%. Gleichbleibende Qualität durch optimierte Druckparameter. Wirtschaftlich bis ca. 500 Stück, darüber Spritzguss erwägen. Vorteile: Keine Werkzeugkosten, schnelle Produktionsänderungen möglich, individuelle Anpassungen in Serie machbar (Massenindividualisierung). Lieferzeit auch bei Serien nur 5-10 Tage. Ideal für Produktionsanlauf, saisonale Produkte, limitierte Editionen. Qualitätskontrolle jedes Teils.",
    category: "Services",
    page_url: "/serienfertigung"
  },
  // Software & Design
  {
    title: "Software - Slicing & G-Code",
    content: "Slicing ist die Umwandlung eines 3D-Modells (STL, OBJ, 3MF) in druckbare Schichten und G-Code. Slicer-Software (Cura, PrusaSlicer, Simplify3D, Bambu Studio) berechnet Werkzeugpfade, fügt Supports hinzu, optimiert Druckparameter. Ermöglicht Schichtvorschau und Zeitschätzung. G-Code ist maschinenlesbare Programmiersprache mit exakten Anweisungen: G0/G1 für Bewegung (X/Y/Z-Position), E für Extrusion, M104/M109 für Temperatur, M106 für Lüfter. Jede Zeile = ein Befehl. Kann manuell angepasst werden für Farbwechsel, Pause, Einsetzen von Magneten. Slicer-Profile für verschiedene Materialien verwenden.",
    category: "Technische Details",
    page_url: "/glossar"
  },
  {
    title: "Bauteiloptimierung - Design for 3D Printing",
    content: "Design-Regeln für optimalen 3D-Druck: 1) Überhänge <45° vermeiden oder minimieren. 2) Minimale Wandstärke 1,2mm, optimal 2-3mm. 3) Keine scharfen Innenecken - Radius mind. 0,5mm. 4) Brücken <50mm halten. 5) Vertikale Bohrungen >0,5mm druckbar, horizontale >2mm. 6) Gewinde ab M6 direkt druckbar, M3-M5 besser mit Einsätzen. 7) Schichtorientierung beachten - Belastung parallel zu Schichten optimal. 8) Hohlräume vorsehen für Materialeinsparung. 9) Text: mind. 1mm hoch, 0,8mm breit, erhaben besser als vertieft.",
    category: "Technische Details",
    page_url: "/glossar"
  }
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return new Response(
        JSON.stringify({ error: 'Missing required environment variables' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    console.log('Starting knowledge base seeding...');
    const results = {
      success: 0,
      errors: 0,
      details: [] as Array<{ title: string; status: string; error?: string }>
    };

    // Process entries sequentially to avoid rate limits
    for (const entry of knowledgeEntries) {
      try {
        console.log(`Processing: ${entry.title}`);
        
        // Insert directly without embeddings
        const { error } = await supabase
          .from('knowledge_base')
          .insert({
            title: entry.title,
            content: entry.content,
            category: entry.category,
            page_url: entry.page_url,
            is_active: true
          });

        if (error) throw error;

        results.success++;
        results.details.push({ title: entry.title, status: 'success' });
        console.log(`✓ Successfully inserted: ${entry.title}`);

      } catch (error) {
        results.errors++;
        results.details.push({ 
          title: entry.title, 
          status: 'error', 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
        console.error(`✗ Error inserting ${entry.title}:`, error);
      }

      // Small delay to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log(`Seeding complete. Success: ${results.success}, Errors: ${results.errors}`);

    return new Response(
      JSON.stringify({
        message: 'Knowledge base seeding completed',
        results
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in seed-knowledge-base:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
