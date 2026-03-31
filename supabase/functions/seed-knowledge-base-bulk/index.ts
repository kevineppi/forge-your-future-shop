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
      // Materialien mit exakten Preisen
      {
        title: '3D-Druck Material ABS - Preis und Eigenschaften',
        content: 'ABS (Acrylnitril-Butadien-Styrol) ist ein robuster Kunststoff. Preis: €2,50-3,00 pro Stunde Druckzeit oder ca. €28/kg Filament. Eigenschaften: Hitzebeständig bis 90-95°C, hohe Schlagfestigkeit, glatte Oberfläche durch Acetonglättung. Drucktemperatur 230-250°C, Heizbett 90-110°C erforderlich. Ideal für: Präsentationsgehäuse, Designstudien, robuste Modelle. Verfügbar in allen Standardfarben. Lieferzeit: 2-3 Werktage Standard, Express 24h möglich (+50% Aufpreis). Chemikalienbeständig gegen Säuren und Laugen.',
        category: 'Materialien',
        page_url: '/3d-druck-materialien'
      },
      {
        title: 'PA12 Nylon 3D-Druck - Premium Material mit Preisen',
        content: 'PA12 Nylon (Polyamid 12) ist das Premium-Material für höchste Ansprüche. Preis: €4,50-5,50 pro Stunde Druckzeit oder ca. €56/kg. Eigenschaften: Sehr hohe Festigkeit und Zähigkeit, chemikalienbeständig, verschleißfest. Drucktemperatur 240-280°C. Ideal für: anspruchsvolle Anschauungsmodelle, hochwertige Präsentationsobjekte, robuste Designstudien. Weniger hygroskopisch als PA6. Verfügbar in Natur und Schwarz. Lieferzeit: 3-5 Werktage.',
        category: 'Materialien',
        page_url: '/3d-druck-materialien'
      },
      {
        title: 'PA12-CF Carbon 3D-Druck - Hochfestes Material Preis',
        content: 'PA12-CF ist PA12 Nylon verstärkt mit Carbonfasern für maximale Festigkeit. Preis: €6,00-7,00 pro Stunde Druckzeit oder ca. €56/kg. Eigenschaften: Extrem steif und fest, geringes Gewicht, sehr gute Wärmeformbeständigkeit bis 120°C, elektrisch leitfähig. Carbonfaser-Anteil erhöht Steifigkeit um 300%. Ideal für: Strukturbauteile, Werkzeuge, Vorrichtungen, Luft- und Raumfahrtanwendungen, Motorsport, Drohnen. Matt-schwarze Carbon-Optik. Lieferzeit: 3-5 Werktage.',
        category: 'Materialien',
        page_url: '/3d-druck-materialien'
      },
      {
        title: 'PA6 Nylon 3D-Druck - Robustes Industriematerial Preis',
        content: 'PA6 Nylon (Polyamid 6) für anspruchsvolle Anwendungen. Preis: €4,00-5,00 pro Stunde Druckzeit oder ca. €56/kg. Eigenschaften: Höhere Festigkeit als PA12, bessere Temperaturbeständigkeit bis 120°C, gute chemische Beständigkeit, verschleißfest. Sehr hygroskopisch - muss vor Druck 4-8h bei 80°C getrocknet werden. Zugfestigkeit 80-90 MPa. Ideal für: Premium-Präsentationsmodelle, hochwertige Anschauungsobjekte, robuste Designstudien. Verfügbar in Natur. Lieferzeit: 3-5 Werktage.',
        category: 'Materialien',
        page_url: '/3d-druck-materialien'
      },
      {
        title: 'PLA 3D-Druck Material - Preis und Anwendung',
        content: 'PLA (Polylactid) ist das beliebteste 3D-Druck Material. Preis: €1,50-2,00 pro Stunde Druckzeit. Eigenschaften: Biobasiert aus Maisstärke, einfach zu drucken, glatte Oberfläche, geringe Schrumpfung. Drucktemperatur 190-220°C, Heizbett optional 50-60°C. Temperaturbeständigkeit bis 60°C. Ideal für: Prototypen, Anschauungsmodelle, Designstudien, Architekturmodelle, nicht-funktionale Teile. Verfügbar in über 20 Farben. Lieferzeit: 1-3 Werktage, Express 24h möglich. Nachhaltig und umweltfreundlich.',
        category: 'Materialien',
        page_url: '/3d-druck-materialien'
      },
      {
        title: 'PETG 3D-Druck Material - Preis und Eigenschaften',
        content: 'PETG (Polyethylenterephthalat Glycol) ist der beste Allrounder. Preis: €2,00-2,50 pro Stunde Druckzeit. Eigenschaften: Schlagfest, chemikalienbeständig, UV-beständig, glasklare Varianten möglich. Drucktemperatur 220-250°C, Heizbett 70-80°C. Temperaturbeständigkeit bis 75°C. Ideal für: robuste Anschauungsmodelle, Outdoor-Modelle, transparente Schauobjekte. Sehr gute Schichthaftung. Verfügbar in vielen Farben. Lieferzeit: 2-3 Werktage.',
        category: 'Materialien',
        page_url: '/3d-druck-materialien'
      },
      
      // Regionale Verfügbarkeit mit detaillierten Infos
      {
        title: '3D-Druck Wien - Schnelle Lieferung 24-48h mit Preisen',
        content: 'Professioneller 3D-Druck Service für Wien mit Express-Lieferung. Standort: Gunskirchen, OÖ. Koordinaten: 48.2082°N, 16.3738°E. Lieferzeit nach Wien: Standard 2-3 Werktage, Express 24-48h. Material-Preise: PLA ab €1,50/h, PETG ab €2,00/h, ABS ab €2,50/h, PA12 ab €4,50/h, PA12-CF ab €6,00/h, PA6 ab €4,00/h. Kostenloser Versand ab €50. Lokale Abholung möglich. Kontakt: +43 676 5517197, office@ek-druck.at. Referenzprojekte Wien: Architekturmodelle TU Wien, Prototypen für Wiener Start-ups, Ersatzteile Wiener Industriebetriebe. Spezialgebiet: Medizintechnik-Prototypen, Design-Modelle.',
        category: 'Regional',
        page_url: '/3d-druck-wien'
      },
      {
        title: '3D-Druck Graz - Service für Steiermark mit Preisen',
        content: '3D-Druck Dienstleister für Graz und Steiermark. Koordinaten: 47.0707°N, 15.4395°E. Lieferzeit nach Graz: Standard 2-3 Werktage, Express 24-48h. Material-Preise wie Wien. Besondere Expertise: Maschinenbauteile, Industrieprototypen für Automotive-Cluster Steiermark. Referenzen Graz: TU Graz Forschungsprojekte, Automobilzulieferer-Prototypen (AVL, Magna), Medizintechnik-Bauteile MedUni Graz. Versandkosten: Kostenlos ab €50. Kontakt: +43 676 5517197. Services: CAD-Konstruktion, Rapid Prototyping, Serienfertigung.',
        category: 'Regional',
        page_url: '/3d-druck-graz'
      },
      {
        title: '3D-Druck Linz - Lokaler Service Oberösterreich Preise',
        content: '3D-Druck Service für Linz und Oberösterreich. Als lokaler Anbieter aus Gunskirchen (15km von Linz) besonders schnelle Lieferung. Koordinaten: 48.3069°N, 14.2858°E. Lieferzeit Linz: Express 24h, Standard 1-2 Werktage. Persönliche Abholung in Gunskirchen möglich. Alle Materialien auf Lager. Preise: PLA €1,50/h, PETG €2,00/h, ABS €2,50/h, PA12 €4,50/h. Spezialgebiet: Industrielle Funktionsprototypen für Linzer Maschinenbau, Betriebsmittel, Vorrichtungen. Referenzen: voestalpine Prototypen, JKU Linz Forschungsprojekte, Linzer Industrie. Kostenlose Erstberatung vor Ort.',
        category: 'Regional',
        page_url: '/3d-druck-linz'
      },
      {
        title: '3D-Druck Salzburg - Schneller Service mit Preisen',
        content: '3D-Druck für Salzburg Stadt und Land. Koordinaten: 47.8095°N, 13.0550°E. Lieferzeit: Standard 2-3 Werktage, Express 24-48h. Material-Preise: Alle Materialien verfügbar zu Standard-Preisen. Anwendungen Salzburg: Architekturmodelle für Salzburger Planungsbüros, Designprototypen für Kreativwirtschaft, Industrieteile. Services: Nachhaltige Materialien aus Österreich, persönliche Beratung, faire Preisgestaltung. Kontakt: +43 676 5517197, office@ek-druck.at. Versand kostenlos ab €50. Referenzen: Universität Salzburg, Salzburger Industrie.',
        category: 'Regional',
        page_url: '/3d-druck-salzburg'
      },
      {
        title: '3D-Druck Innsbruck - Tirol Service mit Preisen',
        content: 'Professioneller 3D-Druck Service für Innsbruck und Tirol. Koordinaten: 47.2692°N, 11.4041°E. Lieferzeit: Standard 2-4 Werktage, Express 24-48h. Material-Preise: Alle FDM-Materialien verfügbar. Spezialität: Alpine Anwendungen, Outdoor-Bauteile mit UV-beständigen Materialien, winterfeste Compounds für Sportgeräte. Referenzen Tirol: Universität Innsbruck, Tiroler Maschinenbau, Sportgerätehersteller (Ski, Snowboard-Teile). Kostenloser Versand ab €50. Material-Expertise: ASA für UV-Beständigkeit, kältefeste PA-Compounds.',
        category: 'Regional',
        page_url: '/3d-druck-innsbruck'
      },
      {
        title: '3D-Druck Klagenfurt - Kärnten Service Preise',
        content: '3D-Druck Dienstleistungen für Klagenfurt und Kärnten. Koordinaten: 46.6244°N, 14.3050°E. Lieferzeit: Standard 3-4 Werktage, Express 48h. Material-Preise: Alle Materialien verfügbar. Anwendungen: Maschinenbau, Prototypenbau, Architektur, Design. Referenzen Kärnten: Alpen-Adria-Universität Forschung, Kärntner Industrie (Infineon Prototypen), Holzbau-Modelle. Kontakt: +43 676 5517197. Versand kostenlos ab €50. Services: Konstruktionsunterstützung, Materialberatung, Nachbearbeitung (Schleifen, Lackieren).',
        category: 'Regional',
        page_url: '/3d-druck-klagenfurt'
      },
      {
        title: '3D-Druck Villach - Kärnten Süd Service',
        content: '3D-Druck Service für Villach und Südkärnten. Koordinaten: 46.6167°N, 13.8500°E. Lieferzeit: 3-4 Werktage, Express 48h möglich. Alle Materialien verfügbar. Anwendungen: Elektronik-Prototypen (Infineon Villach), Maschinenbau, Automotive-Teile. Preise: Standard-Tarife, Mengenrabatt ab 10 Stück. Versand kostenlos ab €50. Kontakt: +43 676 5517197.',
        category: 'Regional',
        page_url: '/3d-druck-villach'
      },
      {
        title: '3D-Druck Wels - Oberösterreich Nähe',
        content: '3D-Druck Service für Wels (10km von Gunskirchen). Koordinaten: 48.1667°N, 14.0333°E. Lieferzeit: Express 24h, Standard 1 Werktag. Persönliche Abholung möglich. Alle Materialien. Preise: PLA €1,50/h, PETG €2,00/h, PA12 €4,50/h. Spezialgebiet: Messebau-Modelle (Welser Messe), Industrie-Prototypen. Referenzen: Welser Profile, TGW Logistics. Kostenlose Beratung vor Ort.',
        category: 'Regional',
        page_url: '/3d-druck-wels'
      },
      {
        title: '3D-Druck St. Pölten - Niederösterreich Service',
        content: '3D-Druck für St. Pölten und Niederösterreich. Koordinaten: 48.2000°N, 15.6333°E. Lieferzeit: Standard 2-3 Werktage, Express 24-48h. Alle Materialien verfügbar. Anwendungen: Architektur-Modelle, Prototypen für NÖ Betriebe. Preise: Standard-Tarife. Versand kostenlos ab €50. Referenzen: FH St. Pölten Projekte. Kontakt: +43 676 5517197.',
        category: 'Regional',
        page_url: '/3d-druck-stpoelten'
      },
      {
        title: '3D-Druck Dornbirn - Vorarlberg Service',
        content: '3D-Druck für Dornbirn und Vorarlberg. Koordinaten: 47.4167°N, 9.7500°E. Lieferzeit: Standard 3-4 Werktage, Express 48h. Alle Materialien. Anwendungen: Textil-Industrie Prototypen, Maschinenbau. Preise: Standard-Tarife. Versand kostenlos ab €50. Referenzen: Vorarlberger Textilindustrie, FH Vorarlberg.',
        category: 'Regional',
        page_url: '/3d-druck-dornbirn'
      },
      
      // Services mit detaillierten Preisen
      {
        title: 'FDM 3D-Druck Service - Preise und Leistungen Detail',
        content: 'Professioneller FDM 3D-Druck Service. Preise nach Material und Stunde: PLA €1,50-2,00/h, PETG €2,00-2,50/h, ABS €2,50-3,00/h, PA12 €4,50-5,50/h, PA12-CF €6,00-7,00/h, PA6 €4,00-5,00/h, TPU €3,00-4,00/h. Druckvolumen: Bis 350x350x350mm. Schichtstärken: 0,1mm (fein, +20%), 0,2mm (standard), 0,3mm (schnell, -15%). Lieferzeit: Standard 3-5 Tage, Express 24-48h (+50%). Kostenloser Versand ab €50. Nachbearbeitung: Schleifen ab €10, Lackieren ab €25, Polieren ab €15.',
        category: 'Services',
        page_url: '/fdm-3d-druck'
      },
      {
        title: 'Rapid Prototyping - Express 3D-Druck 24h mit Preis',
        content: 'Express Rapid Prototyping mit 24h Lieferung. Preis: Regulärer Materialpreis + 50% Express-Aufschlag. Beispiel: PLA-Teil 100cm³ Standard €25 → Express €37,50. Verfügbar für: PLA, PETG, ABS (Standard-Farben). Max. Baugröße Express: 200x200x200mm. Prozess: Anfrage bis 10:00 Uhr = Versand nächster Tag. Ideal für: Dringende Prototypen, Präsentationen, Eilaufträge. Verfügbarkeit: Mo-Fr. Kontakt: +43 676 5517197. Mindestbestellwert Express: €100. Beispielpreise: Kleinteil <50cm³ €50, Mittelteil <200cm³ €120.',
        category: 'Services',
        page_url: '/rapid-prototyping'
      },
      {
        title: '3D-Druck Einzelanfertigungen - Individuelle Teile Preis',
        content: 'Individuelle 3D-Druck Einzelanfertigungen. Preise: Basis-Materialpreis + Konstruktion €60/h bei Bedarf. Services: CAD-Konstruktion, 3D-Modellierung, Optimierung, technische Zeichnungen. Anwendungen: Ersatzteile (alte Maschinen, Oldtimer), Sonderanfertigungen, Unikate, Kunstobjekte. Materialauswahl: Alle verfügbar. Lieferzeit: 5-10 Tage inkl. Konstruktion. Erstberatung kostenlos. Beispielprojekte: Restaurierung Maschinenteil €180, individuelles Gehäuse €250, Spezialwerkzeug €320.',
        category: 'Services',
        page_url: '/einzelanfertigungen'
      },
      {
        title: '3D-Druck Serienfertigung - Kleinserien Mengenrabatte',
        content: 'Serienfertigung mit FDM 3D-Druck. Mengenrabatte: 10-49 Stück -10%, 50-99 Stück -20%, 100-499 Stück -30%, ab 500 Stück individuelle Preise. Wirtschaftlich für 10-500 Stück. Anwendungen: Ersatzteilserien, Vorserien, Funktionsbauteile, Zubehör. Qualitätssicherung: Erstmusterprüfung, Maßprüfung, Dokumentation. Materialien: PETG, ABS, PA12 bevorzugt. Beispiel: 50 Teile je 100cm³ PETG: Einzelpreis €35 → Serienpreis €28 (gesamt €1.400). Lieferzeit: Nach Absprache. Kostenlose Machbarkeitsprüfung.',
        category: 'Services',
        page_url: '/serienfertigung'
      },
      {
        title: 'Kostenrechner 3D-Druck - Preisberechnung Faktoren',
        content: 'Online-Kostenrechner für 3D-Druck Preise. Faktoren: Material (€1,50-7,00/h), Druckzeit (von Größe/Schichtstärke abhängig), Nachbearbeitung (optional). Rechner unter /kostenrechner. Beispielpreise: Kleinteil 50x50x50mm PLA €15-25, Mittelteil 150x150x100mm PETG €80-120, Großteil 250x250x200mm PA12 €300-450. Spartipps: Größere Schichtstärke -15%, einfache Geometrie, Standardmaterialien, längere Lieferzeit. Angebot anfordern für exakte Preise: office@ek-druck.at oder +43 676 5517197.',
        category: 'Information',
        page_url: '/kostenrechner'
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
