import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CostCalculatorWizard from "@/components/CostCalculatorWizard";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ProductSchema from "@/components/ProductSchema";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";
import AIChatWidget from "@/components/AIChatWidget";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Check, TrendingDown, Clock, Award, Upload, Settings, CreditCard, Truck, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Kostenrechner = () => {
  // SEO Title & Description - konsistent mit SEOHead
  const seoTitle = "3D-Druck Preis sofort berechnen | Ab 20€ | ekdruck.at";
  const seoDescription = "STL hochladen → Sofort Preis sehen → Direkt bestellen. Kein Warten! ✓ Express 24h ✓ Ab 20€ ✓ Kostenloser Versand ab 100€. Jetzt konfigurieren!";
  
  useEffect(() => {
    document.title = seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seoDescription);
    }
  }, []);

  return (
    <>
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        keywords="3d-druck kosten, 3d-druck preis berechnen, 3d-druck kostenrechner, stl drucken lassen preis, 3d-druck online bestellen, 3d-teile drucken lassen kosten, 3d-druck österreich preise, fdm druck kosten, rapid prototyping kosten, 3d-druck konfigurator"
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
          price: "20.00",
          availability: "https://schema.org/InStock"
        }}
        category="3D Printing Service"
      />
      <HowToSchema
        name="3D-Druck online bestellen - Schritt für Schritt"
        description="So bestellen Sie 3D-gedruckte Teile bei ekdruck: STL-Datei hochladen, Material wählen, Sofortpreis erhalten und direkt bestellen."
        totalTime="PT5M"
        steps={[
          {
            name: "STL-Datei hochladen",
            text: "Laden Sie Ihre 3D-Datei im STL-Format hoch. Der Konfigurator analysiert automatisch Volumen, Größe und Druckzeit Ihres Modells."
          },
          {
            name: "Material und Einstellungen wählen",
            text: "Wählen Sie das passende Material (PLA, PETG, ABS, Nylon), Farbe, Fülldichte und Qualität. Der Preis wird in Echtzeit aktualisiert."
          },
          {
            name: "Sofortpreis erhalten",
            text: "Sie sehen sofort den finalen Preis - keine Wartezeit auf Angebote. Bei Fragen steht unser KI-Assistent zur Verfügung."
          },
          {
            name: "Zur Kasse und bestellen",
            text: "Geben Sie Ihre Lieferadresse ein und schließen Sie die Bestellung ab. Express-Lieferung in 24-48h möglich."
          }
        ]}
      />
      <FAQSchema faqs={[
        {
          question: "Was kostet 3D-Druck pro Stück?",
          answer: "3D-Druck kostet ab 20€ pro Stück für kleine Teile in PLA. Der Preis hängt von Größe, Material und Komplexität ab. Technische Teile in PETG kosten ab 42€, große Gehäuse in ABS ab 89€, Hochleistungsteile in Nylon PA12 ab 135€."
        },
        {
          question: "Wie berechne ich die 3D-Druck Kosten?",
          answer: "Laden Sie Ihre STL-Datei in unseren Kostenrechner hoch. Der Preis wird sofort berechnet basierend auf: Materialverbrauch, Druckzeit, gewähltes Material (PLA, PETG, ABS, Nylon), Komplexität und Stückzahl. Keine Wartezeit auf Angebote."
        },
        {
          question: "Wie schnell werden meine 3D-Teile geliefert?",
          answer: "Standard-Lieferzeit beträgt 3-5 Werktage. Mit Express-Service erhalten Sie Ihre Teile in 24-48 Stunden. Kostenloser Versand ab 100€ Bestellwert in ganz Österreich."
        },
        {
          question: "Ist 3D-Druck günstiger als CNC-Fräsen?",
          answer: "Ja, für Prototypen und Kleinserien (1-500 Stück) ist 3D-Druck bis zu 65% günstiger als CNC-Fräsen. Keine Werkzeugkosten, schnellere Lieferung (24h vs. 3+ Wochen), kostenlose Designänderungen."
        },
        {
          question: "Ab welcher Stückzahl lohnt sich Spritzguss statt 3D-Druck?",
          answer: "Spritzguss lohnt sich erst ab ca. 500-1000 Stück aufgrund der hohen Werkzeugkosten (3.000-50.000€). Für Kleinserien unter 500 Stück ist 3D-Druck bis zu 80% günstiger."
        },
        {
          question: "Welche 3D-Druck Materialien bieten Sie an?",
          answer: "Wir bieten PLA (ab 0,08€/cm³), PETG (ab 0,12€/cm³), ABS, ASA, TPU flexibel und Hochleistungsmaterialien wie PA12 Nylon (ab 0,25€/cm³). Jedes Material hat spezifische Eigenschaften für verschiedene Anwendungen."
        },
        {
          question: "Wie bestelle ich 3D-Druck online?",
          answer: "1. STL-Datei hochladen, 2. Material und Farbe wählen, 3. Sofortpreis sehen, 4. Direkt zur Kasse. Der gesamte Prozess dauert nur 2-3 Minuten. Keine Registrierung erforderlich."
        },
        {
          question: "Gibt es Mengenrabatte für 3D-Druck?",
          answer: "Ja, ab 5 Stück erhalten Sie automatisch Mengenrabatt. Bei 10+ Stück bis zu 15% Rabatt, bei 50+ Stück bis zu 25% Rabatt. Größere Serien auf Anfrage."
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
                        <span className="text-primary">ab €20,00</span>
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

              {/* Sichtbares FAQ-Akkordeon */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold">
                    Häufig gestellte <span className="text-primary">Fragen</span> zum 3D-Druck Preis
                  </h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Was kostet 3D-Druck pro Stück?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      3D-Druck kostet ab 20€ pro Stück für kleine Teile in PLA. Der Preis hängt von Größe, Material und Komplexität ab. 
                      Technische Teile in PETG kosten ab 42€, große Gehäuse in ABS ab 89€, Hochleistungsteile in Nylon PA12 ab 135€.
                      <Link to="/3d-druck-materialien" className="text-primary hover:underline font-semibold ml-1">
                        → Alle Materialien ansehen
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie berechne ich die 3D-Druck Kosten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Laden Sie Ihre STL-Datei in unseren Kostenrechner oben hoch. Der Preis wird sofort berechnet basierend auf: 
                      Materialverbrauch, Druckzeit, gewähltes Material (PLA, PETG, ABS, Nylon), Komplexität und Stückzahl. 
                      Keine Wartezeit auf Angebote.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Ist 3D-Druck günstiger als CNC-Fräsen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, für Prototypen und Kleinserien (1-500 Stück) ist 3D-Druck bis zu 65% günstiger als CNC-Fräsen. 
                      Keine Werkzeugkosten, schnellere Lieferung (24h vs. 3+ Wochen), kostenlose Designänderungen.
                      <Link to="/rapid-prototyping" className="text-primary hover:underline font-semibold ml-1">
                        → Mehr zu Rapid Prototyping
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Ab welcher Stückzahl lohnt sich Spritzguss?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Spritzguss lohnt sich erst ab ca. 500-1000 Stück aufgrund der hohen Werkzeugkosten (3.000-50.000€). 
                      Für Kleinserien unter 500 Stück ist 3D-Druck bis zu 80% günstiger.
                      <Link to="/serienfertigung" className="text-primary hover:underline font-semibold ml-1">
                        → Mehr zur Serienfertigung
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell werden 3D-Teile geliefert?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Standard-Lieferzeit beträgt 3-5 Werktage. Mit Express-Service erhalten Sie Ihre Teile in 24-48 Stunden. 
                      Kostenloser Versand ab 100€ Bestellwert in ganz Österreich.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-background/80 border rounded-xl px-6 hover:border-primary/30 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Gibt es Mengenrabatte?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, ab 5 Stück erhalten Sie automatisch Mengenrabatt. Bei 10+ Stück bis zu 15% Rabatt, 
                      bei 50+ Stück bis zu 25% Rabatt. Größere Serien auf Anfrage.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Interne Verlinkung Section */}
              <div className="bg-muted/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Weiterführende Informationen</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/3d-druck-materialien" className="group">
                    <Card className="p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Material-Ratgeber</h3>
                      <p className="text-sm text-muted-foreground">PLA vs PETG vs ABS - welches Material für Ihr Projekt?</p>
                    </Card>
                  </Link>
                  <Link to="/rapid-prototyping" className="group">
                    <Card className="p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Rapid Prototyping</h3>
                      <p className="text-sm text-muted-foreground">Schnelle Prototypen in 24-48h für Ihre Produktentwicklung</p>
                    </Card>
                  </Link>
                  <Link to="/serienfertigung" className="group">
                    <Card className="p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Serienfertigung</h3>
                      <p className="text-sm text-muted-foreground">Kleinserien & Produktionsläufe wirtschaftlich umsetzen</p>
                    </Card>
                  </Link>
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