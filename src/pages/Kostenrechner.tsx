import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CostCalculatorWizard from "@/components/CostCalculatorWizard";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ProductSchema from "@/components/ProductSchema";
import FAQSchema from "@/components/FAQSchema";
import AIChatWidget from "@/components/AIChatWidget";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Check, TrendingDown, Clock, Award } from "lucide-react";

const Kostenrechner = () => {
  useEffect(() => {
    document.title = "3D-Druck Preis in 30 Sek. berechnen | Sofort bestellen";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'STL hochladen → Sofort-Preis sehen → Direkt bestellen. Kein Warten auf Angebote! Express 24h möglich. → Jetzt Datei hochladen');
    }
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Konfigurator | Bestellen & Sofortpreis | ekdruck"
        description="STL hochladen, Material wählen & direkt bestellen. Sofortpreis für alle Materialien. Express in 24h. Kostenloser Versand ab 100€. Jetzt konfigurieren!"
        keywords="3d-druck online bestellen, 3d-teile drucken lassen, 3d-druck konfigurator, stl drucken lassen, 3d-druck shop österreich, 3d-druck kostenrechner, 3d-druck preis berechnen, kosten 3d-druck, fdm druck online, rapid prototyping bestellen"
        path="/kostenrechner"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Konfigurator", url: "/kostenrechner"}
      ]} />
      <ProductSchema 
        name="3D-Druck FDM Service Online"
        description="Professioneller 3D-Druck Service für Prototypen, Einzelteile und Kleinserien. Alle Materialien (PLA, PETG, ABS, Nylon PA12), Express-Service in 24-48h verfügbar. Kostenloser Versand ab 100€."
        offers={{
          priceCurrency: "EUR",
          price: "8.50",
          availability: "https://schema.org/InStock"
        }}
        category="3D Printing Service"
      />
      <FAQSchema faqs={[
        {
          question: "Wie bestelle ich 3D-Druck online?",
          answer: "Laden Sie Ihre STL-Datei hoch, wählen Sie Material und Einstellungen, sehen Sie den Sofortpreis und schließen Sie die Bestellung ab. Der gesamte Prozess dauert nur wenige Minuten."
        },
        {
          question: "Wie schnell werden meine 3D-Teile geliefert?",
          answer: "Standard-Lieferzeit beträgt 3-5 Werktage. Mit unserem Express-Service erhalten Sie Ihre Teile in 24-48 Stunden. Versand erfolgt innerhalb von 1-2 Werktagen nach Produktionsabschluss."
        },
        {
          question: "Welche Dateiformate werden für 3D-Druck akzeptiert?",
          answer: "Wir akzeptieren STL-Dateien für 3D-Druck. Diese können Sie direkt aus CAD-Programmen wie Fusion 360, SolidWorks, AutoCAD oder Blender exportieren."
        },
        {
          question: "Was kostet 3D-Druck?",
          answer: "Die Kosten beginnen ab €8,50 für kleine Teile. Der finale Preis hängt von Größe, Material, Komplexität und Stückzahl ab. Nutzen Sie unseren Kostenrechner für einen Sofortpreis."
        },
        {
          question: "Welche 3D-Druck Materialien bieten Sie an?",
          answer: "Wir bieten PLA, PETG, ABS, ASA, TPU und Hochleistungsmaterialien wie PA12 und PA6 Nylon an. Jedes Material hat unterschiedliche Eigenschaften für verschiedene Anwendungen."
        },
        {
          question: "Kann ich auch ohne CAD-Kenntnisse 3D-Teile bestellen?",
          answer: "Ja, Sie benötigen nur eine STL-Datei. Diese kann von einem Designer erstellt oder aus Online-Bibliotheken heruntergeladen werden. Alternativ unterstützen wir Sie bei der Umsetzung Ihrer Idee."
        }
      ]} />
      
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24">
          <CostCalculatorWizard />
          
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h1 className="text-4xl font-bold mb-6">3D-Druck Online Bestellen – Konfigurator & Sofortpreis</h1>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mit unserem <strong>3D-Druck Online-Konfigurator</strong> können Sie Ihre Teile in wenigen Minuten konfigurieren und direkt bestellen. 
                  Egal ob <strong>Prototypen</strong>, <strong>Einzelteile</strong> oder <strong>Kleinserien</strong> – unser Konfigurator berücksichtigt 
                  alle relevanten Faktoren wie Material, Größe, Komplexität und Druckdauer für eine präzise Preiskalkulation. Nach der Konfiguration 
                  können Sie <strong>sofort zur Kasse</strong> gehen – ohne Wartezeit auf Angebote.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wir bieten <strong>FDM 3D-Druck</strong> mit hochwertigen Materialien wie <strong>PLA</strong>, <strong>PETG</strong>, 
                  <strong>ABS</strong> und <strong>Nylon (PA12, PA6)</strong>. Wählen Sie zwischen verschiedenen Materialien, Farben und 
                  Nachbearbeitungsoptionen – der Preis wird in Echtzeit angepasst und Sie behalten die volle Kontrolle über Ihre Bestellung.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Konkrete Preisbeispiele für 3D-Druck</h2>
                <p className="text-muted-foreground mb-6">
                  Um Ihnen eine bessere Vorstellung der <strong>3D-Druck Kosten</strong> zu geben, finden Sie hier reale Beispielrechnungen 
                  aus unserem Alltag:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-bold text-lg mb-3">Kleines Prototypen-Teil (PLA)</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Größe:</span>
                        <span className="font-medium">50 × 30 × 20 mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material:</span>
                        <span className="font-medium">PLA (Standard)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Druckdauer:</span>
                        <span className="font-medium">~2 Stunden</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Komplexität:</span>
                        <span className="font-medium">Einfach</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                        <span>Preis:</span>
                        <span className="text-primary">ab €8,50</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-bold text-lg mb-3">Technisches Bauteil (PETG)</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Größe:</span>
                        <span className="font-medium">100 × 100 × 50 mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material:</span>
                        <span className="font-medium">PETG (Carbon)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Druckdauer:</span>
                        <span className="font-medium">~8 Stunden</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Komplexität:</span>
                        <span className="font-medium">Mittel</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                        <span>Preis:</span>
                        <span className="text-primary">ab €42,00</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-bold text-lg mb-3">Großes Gehäuse (ABS)</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Größe:</span>
                        <span className="font-medium">200 × 150 × 80 mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material:</span>
                        <span className="font-medium">ABS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Druckdauer:</span>
                        <span className="font-medium">~15 Stunden</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Komplexität:</span>
                        <span className="font-medium">Komplex</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                        <span>Preis:</span>
                        <span className="text-primary">ab €89,00</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-bold text-lg mb-3">Hochfestes Funktionsbauteil (Nylon PA12)</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Größe:</span>
                        <span className="font-medium">120 × 80 × 60 mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material:</span>
                        <span className="font-medium">PA12 Nylon (GF)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Druckdauer:</span>
                        <span className="font-medium">~12 Stunden</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Komplexität:</span>
                        <span className="font-medium">Komplex</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                        <span>Preis:</span>
                        <span className="text-primary">ab €135,00</span>
                      </div>
                    </div>
                  </Card>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  * Alle Preise sind Richtwerte. Für den exakten Preis laden Sie Ihre STL-Datei hoch und nutzen Sie unseren Konfigurator – Sie erhalten sofort den finalen Preis und können direkt bestellen.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Erfolgsgeschichten: So sparen unsere Kunden Kosten</h2>
                <div className="space-y-6">
                  <Card className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <TrendingDown className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Maschinenbau-Unternehmen spart 65% Prototyping-Kosten</h3>
                        <p className="text-muted-foreground mb-3">
                          Ein mittelständisches Unternehmen aus Oberösterreich benötigte für eine neue Maschinenkomponente mehrere Prototypen-Iterationen.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Traditionelle CNC-Fräsung (3 Iterationen):</span>
                            <span className="font-medium line-through">€1.850</span>
                          </div>
                          <div className="flex justify-between">
                            <span>3D-Druck bei ekdruck (3 Iterationen):</span>
                            <span className="font-medium text-primary">€650</span>
                          </div>
                          <div className="border-t pt-2 flex justify-between font-bold">
                            <span>Ersparnis:</span>
                            <span className="text-green-600">€1.200 (65%)</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                          <strong>Zusätzlicher Vorteil:</strong> Lieferzeit reduziert von 3 Wochen auf 48 Stunden pro Iteration.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Startup entwickelt Produkt 4x schneller</h3>
                        <p className="text-muted-foreground mb-3">
                          Ein Wiener Tech-Startup nutzte unseren Express-Service für schnelle Design-Iterationen während der Produktentwicklung.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Herkömmlicher Prototypenbau (6 Wochen):</span>
                            <span className="font-medium line-through">€4.200</span>
                          </div>
                          <div className="flex justify-between">
                            <span>3D-Druck Rapid Prototyping (1,5 Wochen):</span>
                            <span className="font-medium text-primary">€1.580</span>
                          </div>
                          <div className="border-t pt-2 flex justify-between font-bold">
                            <span>Ersparnis:</span>
                            <span className="text-green-600">€2.620 + 4,5 Wochen Zeit</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Kleinserie: 80% günstiger als Spritzguss</h3>
                        <p className="text-muted-foreground mb-3">
                          Ein Designer benötigte 50 Stück eines kundenspezifischen Gehäuses – zu wenig für Spritzguss, perfekt für 3D-Druck.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Spritzguss (Werkzeug + 50 Stück):</span>
                            <span className="font-medium line-through">€8.500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>3D-Druck Kleinserie (50 Stück):</span>
                            <span className="font-medium text-primary">€1.750</span>
                          </div>
                          <div className="border-t pt-2 flex justify-between font-bold">
                            <span>Ersparnis:</span>
                            <span className="text-green-600">€6.750 (79%)</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                          <strong>Break-Even:</strong> Spritzguss lohnt sich erst ab ca. 500-1000 Stück. Bei kleineren Mengen ist 3D-Druck deutlich wirtschaftlicher.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">3D-Druck vs. Traditionelle Fertigungsverfahren – Kostenvergleich</h2>
                <p className="text-muted-foreground mb-6">
                  Nicht jedes Verfahren ist für jedes Projekt optimal. Hier sehen Sie, wann sich 3D-Druck rechnet und wann 
                  andere Verfahren günstiger sind:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 border">Kriterium</th>
                        <th className="text-left p-4 border">3D-Druck (FDM)</th>
                        <th className="text-left p-4 border">CNC-Fräsen</th>
                        <th className="text-left p-4 border">Spritzguss</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border font-medium">Werkzeugkosten</td>
                        <td className="p-4 border"><span className="text-green-600 font-bold">€0</span> – Keine Werkzeuge nötig</td>
                        <td className="p-4 border"><span className="font-medium">€0-500</span> – Je nach Komplexität</td>
                        <td className="p-4 border"><span className="text-red-600 font-bold">€3.000-50.000</span> – Hohe Initialkosten</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-4 border font-medium">Stückpreis (1 Stück)</td>
                        <td className="p-4 border"><span className="text-green-600 font-bold">€10-150</span></td>
                        <td className="p-4 border"><span className="font-medium">€50-300</span></td>
                        <td className="p-4 border"><span className="text-red-600 font-bold">€3.000+</span> (inkl. Werkzeug)</td>
                      </tr>
                      <tr>
                        <td className="p-4 border font-medium">Stückpreis (100 Stück)</td>
                        <td className="p-4 border"><span className="font-medium">€8-120</span> (Mengenrabatt)</td>
                        <td className="p-4 border"><span className="font-medium">€30-200</span></td>
                        <td className="p-4 border"><span className="text-green-600 font-bold">€35-80</span> (ohne Werkzeug)</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-4 border font-medium">Stückpreis (1.000 Stück)</td>
                        <td className="p-4 border"><span className="text-red-600">€6-100</span> – Nicht optimal</td>
                        <td className="p-4 border"><span className="font-medium">€20-150</span></td>
                        <td className="p-4 border"><span className="text-green-600 font-bold">€5-15</span> – Sehr günstig</td>
                      </tr>
                      <tr>
                        <td className="p-4 border font-medium">Lieferzeit (Prototyp)</td>
                        <td className="p-4 border"><span className="text-green-600 font-bold">24-48h</span></td>
                        <td className="p-4 border"><span className="font-medium">3-7 Tage</span></td>
                        <td className="p-4 border"><span className="text-red-600 font-bold">4-8 Wochen</span></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-4 border font-medium">Designänderungen</td>
                        <td className="p-4 border"><span className="text-green-600 font-bold">Sofort & kostenlos</span></td>
                        <td className="p-4 border"><span className="font-medium">Schnell möglich</span></td>
                        <td className="p-4 border"><span className="text-red-600 font-bold">Teuer (neues Werkzeug)</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 border font-medium">Geometrische Freiheit</td>
                        <td className="p-4 border"><span className="text-green-600 font-bold">Sehr hoch</span> – Komplexe Strukturen</td>
                        <td className="p-4 border"><span className="font-medium">Mittel</span> – Begrenzt durch Werkzeugzugang</td>
                        <td className="p-4 border"><span className="font-medium">Hoch</span> – Entformungsschrägen nötig</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-4 border font-medium">Materialauswahl</td>
                        <td className="p-4 border"><span className="font-medium">Groß</span> – Viele Kunststoffe</td>
                        <td className="p-4 border"><span className="text-green-600 font-bold">Sehr groß</span> – Metall & Kunststoff</td>
                        <td className="p-4 border"><span className="font-medium">Groß</span> – Hauptsächlich Kunststoffe</td>
                      </tr>
                      <tr>
                        <td className="p-4 border font-medium">Ideal für</td>
                        <td className="p-4 border"><strong>Prototypen, Einzelteile, Kleinserien (1-500)</strong></td>
                        <td className="p-4 border"><strong>Metallteile, präzise Bauteile (1-100)</strong></td>
                        <td className="p-4 border"><strong>Großserien (500+)</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-green-50 dark:bg-green-950/20 border-green-200">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      Wann 3D-Druck wählen?
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Prototypen & Produktentwicklung</li>
                      <li>• Einzelstücke & Kleinserien (1-500)</li>
                      <li>• Komplexe Geometrien</li>
                      <li>• Schnelle Lieferung benötigt</li>
                      <li>• Häufige Designänderungen</li>
                    </ul>
                  </Card>

                  <Card className="p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-600" />
                      Wann CNC wählen?
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Metallteile erforderlich</li>
                      <li>• Sehr hohe Präzision nötig</li>
                      <li>• Glatte Oberflächen wichtig</li>
                      <li>• Kleine bis mittlere Serien (1-100)</li>
                      <li>• Hohe mechanische Belastung</li>
                    </ul>
                  </Card>

                  <Card className="p-4 bg-purple-50 dark:bg-purple-950/20 border-purple-200">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5 text-purple-600" />
                      Wann Spritzguss wählen?
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Großserien (500+ Stück)</li>
                      <li>• Niedrigster Stückpreis nötig</li>
                      <li>• Standardkunststoffe ausreichend</li>
                      <li>• Design ist finalisiert</li>
                      <li>• Längere Lieferzeit akzeptabel</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Wie funktioniert der Online-Konfigurator?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Unser <strong>Online-Konfigurator für 3D-Druck</strong> berechnet den Preis sofort und ermöglicht direkte Bestellungen. Folgende Faktoren werden berücksichtigt:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>3D-Druck Material:</strong> Von günstigem PLA bis zu technischem PA12 Nylon – verschiedene Preiskategorien</li>
                    <li><strong>Bauteilgröße:</strong> Länge, Breite und Höhe bestimmen das Volumen und damit den Materialverbrauch</li>
                    <li><strong>Komplexität & Geometrie:</strong> Einfache Formen sind günstiger als komplexe Strukturen mit Stützstrukturen</li>
                    <li><strong>Druckdauer:</strong> Optional können Sie die geschätzte Druckzeit für eine präzisere Kalkulation angeben</li>
                    <li><strong>Stückzahl:</strong> Größere Mengen können individuell kalkuliert werden</li>
                    <li><strong>Nachbearbeitung:</strong> Schleifen, Lackieren oder Premium-Finish für ein perfektes Ergebnis</li>
                    <li><strong>Express-Service:</strong> 24-Stunden Lieferung für dringende Projekte</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">3D-Druck Preise & Online Bestellen in Österreich</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Kosten für <strong>3D-Druck in Österreich</strong> hängen von verschiedenen Faktoren ab. Bei ekdruck bieten wir 
                  <strong>transparente Sofortpreise</strong> ohne versteckte Kosten. Unsere Preise richten sich nach Material, Größe, 
                  Komplexität und Druckdauer. Laden Sie Ihre STL-Datei hoch, konfigurieren Sie Ihr Teil im Online-Konfigurator und 
                  bestellen Sie direkt – der finale Preis wird sofort angezeigt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Größere Bestellmengen profitieren automatisch von attraktiven <strong>Mengenrabatten</strong> (ab 5 Stück). 
                  Ab 100€ Bestellwert ist der Versand <strong>kostenlos</strong>. Nutzen Sie den Konfigurator für Ihre individuelle Preisberechnung!
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Warum ekdruck für 3D-Druck?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2">✓ Schnelle Lieferung</h3>
                    <p className="text-muted-foreground">Express-Service innerhalb von 24h verfügbar</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">✓ Made in Austria</h3>
                    <p className="text-muted-foreground">Österreichische Produktion und Materialien</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">✓ Faire Preise</h3>
                    <p className="text-muted-foreground">Transparente Kalkulation ohne versteckte Kosten</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">✓ Hohe Qualität</h3>
                    <p className="text-muted-foreground">Professionelle FDM-Drucker und Premium-Filamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Contact />
        </div>
        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Kostenrechner;