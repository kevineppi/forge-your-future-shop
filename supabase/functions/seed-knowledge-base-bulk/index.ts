import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing Supabase configuration');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const knowledgeBaseEntries = [
      {
        title: '3D-Druck Materialien - ABS',
        content: 'ABS (Acrylnitril-Butadien-Styrol) ist ein robuster technischer Kunststoff mit hoher Schlagfestigkeit und ausgezeichneter mechanischer Belastbarkeit. Drucktemperatur: 230-250°C, Heizbett 90-110°C zwingend erforderlich. Glasübergangstemperatur: 95-105°C, temperaturbeständig bis 95°C. Gute chemische Beständigkeit gegen Säuren, Laugen und Lösungsmittel. Geschlossene Baukammer notwendig zur Vermeidung von Warping. Preis: 28€/kg. Ideal für technische Bauteile, Gehäuse, Werkzeuge, funktionale Prototypen und mechanisch belastete Teile. Nachbearbeitung durch Aceton-Dampfglättung möglich für hochglänzende Oberflächen.',
        category: 'Materialien',
        page_url: '/materialien'
      },
      {
        title: '3D-Druck Materialien - PA12 & PA12-CF',
        content: 'PA12 (Polyamid 12) ist ein hochfester technischer Kunststoff mit hervorragender Verschleißfestigkeit und Schlagzähigkeit. Drucktemperatur 240-280°C, Heizbett 80-100°C. Weniger hygroskopisch als PA6 - geringerer Trocknungsbedarf. Ausgezeichnete chemische Beständigkeit gegen Öle, Fette, Kraftstoffe. Ideal für Zahnräder, Lager, Verschleißteile, Automobilkomponenten. Preis: 56€/kg. PA12-CF (Carbon-verstärkt) bietet zusätzlich extreme Steifigkeit und Festigkeit durch Carbonfaser-Anteil. Höhere Temperaturbeständigkeit, geringere Wärmeausdehnung. Perfekt für hochbelastete Strukturteile, Luftfahrt, Rennsport. Preis: 56€/kg.',
        category: 'Materialien',
        page_url: '/materialien'
      },
      {
        title: '3D-Druck Materialien - PA6',
        content: 'PA6 (Polyamid 6, Nylon 6) ist ein hochfester Konstruktionskunststoff mit ausgezeichneter mechanischer Belastbarkeit. Drucktemperatur 250-280°C, Heizbett 80-100°C erforderlich. Sehr hygroskopisch - muss vor Druck 4-8h bei 80°C getrocknet werden. Hohe Zugfestigkeit 80-90 MPa, ausgezeichnete Abriebfestigkeit. Chemikalienbeständig gegen Öle, Fette, Kohlenwasserstoffe. Preis: 56€/kg. Anwendungen: Verschleißteile, Lager, Zahnräder, Buchsen, technische Funktionsteile unter hoher mechanischer Beanspruchung.',
        category: 'Materialien',
        page_url: '/materialien'
      },
      {
        title: 'Kontakt & Standort - ekdruck 3D-Druck Service',
        content: 'ekdruck 3D-Druck Service mit Sitz in Gunskirchen, Oberösterreich. Adresse: Hauptstraße 123, 4623 Gunskirchen. Erreichbarkeit: Montag bis Freitag 8:00-18:00 Uhr. Schnelle Antwortzeiten, persönliche Beratung. Anfragen können über das Kontaktformular gestellt werden. Upload-Möglichkeit für 3D-Dateien direkt im Formular. Kostenlose Erstberatung und Angebotserstellung innerhalb 24h. Abholung vor Ort nach Vereinbarung möglich.',
        category: 'Unternehmen',
        page_url: '/'
      },
      {
        title: 'Rapid Prototyping - Schnelle Prototypenentwicklung',
        content: 'Rapid Prototyping ermöglicht schnelle Entwicklung von Prototypen ohne Werkzeugbau. Vorteile: Iterations-Geschwindigkeit - mehrere Design-Varianten in Tagen statt Wochen. Kosteneffizienz - keine Werkzeugkosten, nur Material- und Druckkosten. Funktionsvalidierung vor Serienproduktion. Designfreiheit ohne Fertigungsbeschränkungen. Typischer Ablauf: CAD-Modell Upload → Technische Prüfung → Angebot innerhalb 24h → Produktion 2-5 Tage → Versand. Ideal für: Produktentwicklung, Designstudien, Funktionstests, Investoren-Präsentationen, Marktforschung.',
        category: 'Services',
        page_url: '/rapid-prototyping'
      },
      {
        title: 'Serienfertigung - 3D-Druck in Serie',
        content: 'Serienfertigung per 3D-Druck für kleine bis mittlere Stückzahlen (10-10.000 Stück). Vorteile gegenüber Spritzguss: Keine Werkzeugkosten (spart 5.000-50.000€). Schnellere Markteinführung. Design-Änderungen jederzeit möglich. Wirtschaftlich bis ca. 10.000 Stück je nach Bauteil. On-Demand-Produktion ohne Lagerkosten. Anwendungen: Ersatzteilproduktion, Kleinserien für Nischenprodukte, individualisierte Produkte, Bridge-Production zwischen Prototyp und Großserie. Qualitätskontrolle jedes Teils. Reproduzierbare Ergebnisse durch standardisierte Prozesse.',
        category: 'Services',
        page_url: '/serienfertigung'
      },
      {
        title: 'Prototypen - Funktionsprototypen & Designmodelle',
        content: 'Prototypenbau für Produktentwicklung und Designvalidierung. Funktionsprototypen: Voll funktionsfähige Modelle zur technischen Erprobung. Getestet unter realen Bedingungen. Materialauswahl nach Anforderung (Temperatur, Festigkeit, Chemikalienbeständigkeit). Designmodelle: Visuell hochwertige Modelle für Präsentationen. Oberflächenveredelung möglich (Schleifen, Lackieren, Beschichten). Fotorealistische Qualität auf Wunsch. Typische Anwendungen: Investor-Pitches, Messen, Crowdfunding-Kampagnen, Usability-Tests, Marktforschung. Schnelle Iteration möglich - mehrere Versionen in kurzer Zeit.',
        category: 'Services',
        page_url: '/prototypen'
      },
      {
        title: 'FDM 3D-Druck Verfahren - Technologie & Vorteile',
        content: 'FDM (Fused Deposition Modeling) ist das verbreitetste 3D-Druckverfahren. Funktionsweise: Thermoplastisches Filament wird aufgeschmolzen und schichtweise aufgetragen. Schichthöhe 0,1-0,3mm typisch. Vorteile: Kosteneffizient, große Materialauswahl (PLA, PETG, ABS, ASA, PA6, PA12, TPU), mechanisch belastbare Teile, große Bauvolumina möglich (bis 400x400x400mm), einfache Nachbearbeitung. Einschränkungen: Sichtbare Schichtlinien, Anisotropie (unterschiedliche Festigkeit je nach Orientierung), Überhänge benötigen Support-Strukturen. Optimale Anwendungen: Funktionsteile, Gehäuse, Halterungen, Werkzeuge, technische Prototypen.',
        category: 'Verfahren',
        page_url: '/fdm-druck'
      },
      {
        title: 'Kostenrechner - 3D-Druck Preise kalkulieren',
        content: 'Online-Kostenrechner für sofortige Preiskalkulation. Parameter: Bauteilgröße (Länge × Breite × Höhe in cm), Material (PLA, PETG, ABS, ASA, PA6, PA12, TPU), Komplexität (einfach, mittel, komplex), Express-Fertigung. Berechnung: Volumen in cm³ × Dichte × Materialpreis + Maschinenkosten + Setup. Beispiele: 10×10×5cm PETG Standard: 40-55€. 25×25×10cm PA12 Standard: 180-220€. Kleine Teile <5cm: ab 15€. Express-Zuschlag: +30-50%. Präzise Angebote nach Datei-Upload innerhalb 24h. Mengenrabatte ab 10 Stück verfügbar.',
        category: 'Preise',
        page_url: '/kostenrechner'
      },
      {
        title: 'Regionale Verfügbarkeit - 3D-Druck in ganz Österreich',
        content: 'Österreichweiter 3D-Druck Service von ekdruck. Hauptsitz in Gunskirchen, Oberösterreich. Lieferung in alle Bundesländer: Wien, Niederösterreich, Oberösterreich, Steiermark, Kärnten, Salzburg, Tirol, Vorarlberg, Burgenland. Wichtige Städte: Wien, Graz, Linz, Salzburg, Innsbruck, Klagenfurt, Villach, Wels, St. Pölten, Dornbirn. Standardversand 2-5 Werktage, Express 24-48h möglich. Versandkostenfrei ab 50€ innerhalb Österreichs. Persönliche Abholung in Gunskirchen nach Vereinbarung. Lokale Beratung und Support für österreichische Kunden.',
        category: 'Services',
        page_url: '/wien-3d-druck'
      },
      {
        title: 'Materialberatung - Richtige Materialwahl für jede Anwendung',
        content: 'Professionelle Materialberatung basierend auf Anwendungsfall. Kriterien: Mechanische Belastung (Zugfestigkeit, Schlagzähigkeit), Temperaturbeständigkeit (Einsatztemperatur, Glasübergangstemperatur), Umgebungsbedingungen (UV, Feuchtigkeit, Chemikalien), Oberflächenqualität, Budget. PLA: Prototypen, Anschauungsmodelle, Innenanwendungen. PETG: Funktionsteile, mechanisch belastet, gute Allrounder. ABS: Technische Bauteile, mittlere Temperaturen. ASA: Außenanwendungen, UV-Beständigkeit. PA6/PA12: Verschleißteile, höchste mechanische Anforderungen. TPU: Flexible Teile, Dichtungen. Persönliche Beratung kostenlos.',
        category: 'Services',
        page_url: '/ratgeber/material-guide'
      },
      {
        title: 'Qualitätssicherung - Präzision und Reproduzierbarkeit',
        content: 'Strenge Qualitätskontrolle für konsistente Ergebnisse. Prozesse: Regelmäßige Drucker-Kalibrierung (wöchentlich), Filament-Trocknung bei hygroskopischen Materialien, Erstmuster-Prüfung vor Serienproduktion, Maßkontrolle kritischer Dimensionen, Sichtkontrolle auf Oberflächenfehler, Dokumentation aller Parameter. Toleranzen: Dimensionale Genauigkeit ±0,2mm bei optimalen Bedingungen, Wiederholgenauigkeit ±0,1mm. Zertifizierung: Qualitätsstandards nach DIN EN ISO. Rückverfolgbarkeit durch Chargen-Dokumentation. Reklamationsquote <1%.',
        category: 'Technische Details',
        page_url: '/ratgeber'
      },
      {
        title: 'Dateiformat & CAD - Anforderungen für 3D-Druck',
        content: 'Unterstützte Dateiformate: STL (Standard), OBJ, 3MF (empfohlen - enthält Farbinformationen), STEP (für CAD-Bearbeitung). STL-Anforderungen: Manifold (wasserdicht), keine Löcher oder überlappende Flächen, korrekte Normalenvektoren. Empfohlene Auflösung: 0,01-0,1mm je nach Bauteilgröße. CAD-Programme: Fusion 360, SolidWorks, Inventor, FreeCAD, Tinkercad, Blender. Export-Einstellungen: Hohe Auflösung für organische Formen, mittlere für technische Teile. Datei-Upload über Website möglich. Technische Prüfung und Reparatur inkludiert.',
        category: 'Technische Details',
        page_url: '/ratgeber'
      },
      {
        title: 'Nachbearbeitung - Oberflächenveredelung und Finishing',
        content: 'Professionelle Nachbearbeitung für hochwertige Oberflächen. Services: Support-Entfernung (manuell oder löslich), Schleifen (Körnung 100-2000), Grundieren für perfekte Lackierung, Lackieren (matt, glänzend, metallic), Chemisches Glätten (Aceton für ABS, spiegelglatte Oberfläche), Heatset-Einsätze für Metallgewinde, Kleben mehrteiliger Konstruktionen, Gewindeschneiden. Preise: Basis-Finishing ab 10€, Premium-Finishing ab 30€, Lackierung ab 25€. Zeitaufwand: 1-3 Werktage zusätzlich. Fotorealistische Qualität möglich für Präsentationsmodelle.',
        category: 'Services',
        page_url: '/ratgeber'
      },
      {
        title: 'Express-Service - 24-48h Lieferung',
        content: 'Express-Fertigung für dringende Projekte. Produktionszeit: 24-48 Stunden von Auftragsbestätigung bis Versand. Voraussetzungen: Bauteilgröße max. 20×20×20cm, Standard-Materialien (PLA, PETG, ABS, ASA), unkomplizierte Geometrie. Aufpreis: +30-50% auf Standardpreis je nach Bauteil. Prozess: Priorisierte Produktion, parallele Fertigung bei Mehrfachteilen, Express-Versand inklusive. Verfügbarkeit: Montag-Freitag, Auftragseingang bis 14:00 Uhr. Ideal für: Eilige Prototypen, Ersatzteile, Messe-Vorbereitungen, Last-Minute-Präsentationen.',
        category: 'Services',
        page_url: '/ratgeber'
      }
    ];

    console.log(`Inserting ${knowledgeBaseEntries.length} knowledge base entries...`);

    const { data, error } = await supabase
      .from('knowledge_base')
      .insert(knowledgeBaseEntries)
      .select();

    if (error) {
      console.error('Error inserting knowledge base entries:', error);
      throw error;
    }

    console.log(`Successfully inserted ${data?.length || 0} entries`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        count: data?.length || 0,
        message: 'Knowledge base entries added successfully' 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in seed-knowledge-base-bulk:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
