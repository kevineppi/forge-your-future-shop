import { Factory, Package, TrendingUp, Clock, CheckCircle, Euro } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AIChatWidget from "@/components/AIChatWidget";

const SerienfertigungCaseStudy = () => {
  return (
    <>
      <SEOHead
        title="200 Teile: €15.000 Werkzeugkosten gespart | Case Study"
        description="Echtes Beispiel: 200 Halterungen per 3D-Druck statt Spritzguss. Ergebnis: 4 Wochen schneller, €15k gespart. → Lohnt sich das für Sie?"
        keywords="3d-druck serienfertigung, kleinserien 3d-druck, 3d-druck wirtschaftlichkeit, 3d-druck kosten pro stück, serienfertigung österreich"
        path="/ratgeber/serienfertigung-case-study"
        schemaType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ratgeber", url: "/ratgeber" },
          { name: "Serienfertigung Case Study", url: "/ratgeber/serienfertigung-case-study" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Factory className="w-4 h-4" />
                Case Study: Serienfertigung
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Kleinserien wirtschaftlich produzieren: Ab wann lohnt sich 3D-Druck?
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ein Praxisbeispiel aus Oberösterreich: 200 technische Montagehalterungen für ein österreichisches Unternehmen – wie 3D-Druck bei Kleinserien Zeit und Kosten spart.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 Min. Lesezeit
              </span>
              <span>•</span>
              <span>Januar 2025</span>
              <span>•</span>
              <span className="text-primary font-medium">Praxisbeispiel</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                "Ab welcher Stückzahl lohnt sich 3D-Druck?" – Diese Frage hören wir oft. Die Antwort: Es kommt drauf an. Bei traditioneller Fertigung wie Spritzguss entstehen hohe Werkzeugkosten (5.000€–50.000€+), die sich erst ab mehreren tausend Teilen amortisieren. Für Kleinserien von 50–500 Stück ist 3D-Druck oft die wirtschaftlichere Lösung.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                Ein echtes Beispiel aus unserer Produktion zeigt, wie sich 3D-Druck bei Kleinserien rechnet.
              </p>
            </div>

            {/* Project Overview Card */}
            <Card className="mb-12 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Projekt-Übersicht: Montagehalterungen-Serienfertigung</CardTitle>
                <CardDescription>Technische Halterungen für industrielle Anwendung</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">Anforderungen</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Stückzahl:</strong> 200 Montagehalterungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Design:</strong> Komplexe Geometrie mit integrierten Befestigungspunkten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Material:</strong> PETG für mechanische Belastbarkeit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Zeitrahmen:</strong> 2 Wochen Produktionszeit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Verwendung:</strong> Montage in Fertigungsanlagen</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">Ergebnisse</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Stückkosten:</strong> ~6,00€ pro Halterung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Gesamtpreis:</strong> ~1.200€ (inkl. Material, Druck, Nachbearbeitung)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Produktionszeit:</strong> 10 Tage (Druck + QA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Werkzeugkosten:</strong> 0€ (kein Spritzguss-Werkzeug nötig)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Designanpassungen:</strong> Kostenfrei und schnell möglich</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* Why 3D Printing Made Sense */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Warum 3D-Druck die richtige Wahl war</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Euro className="w-5 h-5 text-primary" />
                      Kostenvergleich
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-foreground mb-1">CNC-Fräsen (traditionell)</div>
                        <div className="text-muted-foreground text-sm">
                          Werkzeugbau & Setup: ~2.500€<br />
                          Produktion (200 Stück): ~4.000€<br />
                          <span className="font-semibold text-foreground">Gesamt: ~6.500€</span>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <div className="font-semibold text-primary mb-1">3D-Druck</div>
                        <div className="text-muted-foreground text-sm">
                          Setup: 0€<br />
                          Produktion (200 Stück): ~1.200€<br />
                          <span className="font-semibold text-primary">Gesamt: ~1.200€</span>
                        </div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <div className="font-bold text-primary">Ersparnis: ~5.300€ (82%)</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Zeitvergleich
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-foreground mb-1">CNC-Fräsen (traditionell)</div>
                        <div className="text-muted-foreground text-sm">
                          CAM-Programmierung: 1–2 Wochen<br />
                          Produktion: 2–3 Wochen<br />
                          <span className="font-semibold text-foreground">Gesamt: 4–5 Wochen</span>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <div className="font-semibold text-primary mb-1">3D-Druck</div>
                        <div className="text-muted-foreground text-sm">
                          Setup: 1 Tag<br />
                          Produktion: 10 Tage<br />
                          <span className="font-semibold text-primary">Gesamt: 2 Wochen</span>
                        </div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <div className="font-bold text-primary">60% schneller</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key Learnings */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Was wir gelernt haben</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Flexibilität ist ein Riesenvorteil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Während der Produktion wurden noch Designoptimierungen vorgenommen (Befestigungslöcher angepasst, Wandstärke verstärkt). Bei CNC-Fertigung hätte jede Änderung zusätzliche CAM-Programmierung und Rüstkosten verursacht. Mit 3D-Druck: einfach die Datei anpassen und weiterdrucken.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Qualität muss stimmen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Jede Halterung wurde visuell und funktional geprüft. Layer-Adhesion, Befestigungspunkte und Maßhaltigkeit waren kritisch. Von 200 Teilen waren 197 perfekt – 3 hatten minimale Abweichungen und wurden nachgedruckt. Das ist eine Ausschussquote von 1,5%, die bei Kleinserien akzeptabel ist.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Materialwahl ist entscheidend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      PETG war die optimale Materialwahl für diese mechanische Anwendung. Wichtig: Das Material muss ausreichende Festigkeit und Steifigkeit bieten. Wir haben österreichisches PETG-Filament verwendet, das hohe Qualitätsstandards erfüllt und gleichmäßige mechanische Eigenschaften garantiert.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Planung der Produktionskapazität</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Die 200 Teile wurden in Batches parallel produziert und innerhalb von 10 Tagen fertiggestellt. Die richtige Produktionsplanung war entscheidend, um den Zeitrahmen einzuhalten. Batch-Produktion ermöglicht gleichmäßige Qualität und effiziente Nachbearbeitung.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* When Does Serial Production Make Sense */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Ab welcher Stückzahl lohnt sich 3D-Druck?</h2>
              
              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Faustformel für wirtschaftliche Kleinserien</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">5–50 Stück:</strong> 3D-Druck fast immer günstiger und schneller als Alternativen
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">50–500 Stück:</strong> Sweet Spot für 3D-Druck – deutlich günstiger als Werkzeugbau
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">500–2.000 Stück:</strong> Grauzone – hängt von Teil-Komplexität und Materialanforderungen ab
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">2.000+ Stück:</strong> Spritzguss meist wirtschaftlicher (amortisierte Werkzeugkosten)
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Break-Even-Punkt:</strong> Bei diesem Projekt wäre CNC-Fräsen erst ab ~500-800 Stück wirtschaftlicher gewesen. Für 200 Stück war 3D-Druck die eindeutig bessere Wahl.
              </p>
            </div>

            {/* Additional Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Weitere Vorteile der 3D-Druck-Serienfertigung</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Kein Lagerhaltung nötig
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Nachbestellung jederzeit möglich – keine großen Mindestmengen oder Lagerkosten. Produzieren Sie on-demand, wenn Sie neue Chargen brauchen.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Designiterationen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Verbessern Sie das Design zwischen den Batches ohne zusätzliche Kosten. Kundenfeedback kann sofort in die nächste Produktion einfließen.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Skalierbare Produktion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Starten Sie mit 50 Stück, testen Sie den Markt, und skalieren Sie auf 500+ wenn die Nachfrage da ist – ohne Risiko hoher Vorabinvestitionen.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Factory className="w-5 h-5 text-primary" />
                      Lokal & Nachhaltig
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Produktion in Oberösterreich mit österreichischem Filament – kurze Lieferwege, schnelle Kommunikation, kein China-Import mit langen Wartezeiten.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Fazit: Wann macht 3D-Druck bei Serien Sinn?</h2>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">3D-Druck ist die richtige Wahl für Kleinserien, wenn:</strong>
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Die Stückzahl zwischen 5 und 500 liegt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Hohe Werkzeugkosten vermieden werden sollen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Schnelle Produktionszeiten (Wochen statt Monate) gewünscht sind</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Designflexibilität wichtig ist (Anpassungen ohne Zusatzkosten)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Individualisierung oder Varianten benötigt werden</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground mt-6">
                Dieses Projekt zeigt: Bei 200 Montagehalterungen sparten wir ~5.300€ (82%) und lieferten 60% schneller als mit traditioneller Fertigung. Für Maschinenbauer, Produktentwickler und Unternehmen mit Kleinserien-Bedarf ist 3D-Druck oft die wirtschaftlichste Lösung.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-muted/30 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Haben Sie auch ein Kleinserien-Projekt?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nutzen Sie unseren Kostenrechner für eine erste Einschätzung, oder kontaktieren Sie uns für eine detaillierte Beratung zu Ihrem Serienfertigung-Projekt.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/#contact">Projekt besprechen</a>
                </Button>
              </div>
            </div>

          </div>
        </article>

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default SerienfertigungCaseStudy;
