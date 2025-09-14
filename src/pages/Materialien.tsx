import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Shield, Thermometer, Recycle, CheckCircle, Star, ArrowRight } from "lucide-react";

const Materialien = () => {
  return (
    <>
      <SEOHead 
        title="3D-Druck Materialien Österreich | PLA PETG ABS | ekdruck e.U."
        description="Hochwertige 3D-Druck Materialien für FDM: PLA, PETG, ABS & mehr. Österreichische Filamente aus recycelten Industrieabfällen. Nachhaltig & regional!"
        keywords="3d-druck materialien österreich, pla filament, petg filament, abs filament, österreichisches filament, nachhaltiges filament"
        path="/3d-druck-materialien"
      />
      <StructuredData type="service" />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Österreichische Premium-Filamente</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text-white">
                3D-Druck Materialien
                <span className="block text-2xl lg:text-3xl mt-2 opacity-90">Nachhaltig. Regional. Hochwertig.</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Premium 3D-Druck Materialien aus österreichischer Produktion. Hergestellt aus recycelten 
                Industrieabfällen für höchste Qualität und Nachhaltigkeit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Material-Beratung <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Alle Materialien ansehen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Warum österreichische Filamente */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Warum österreichische Filamente?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Kurze Transportwege, hohe Qualitätsstandards und Nachhaltigkeit durch Recycling-Innovation
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Nachhaltig</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Hergestellt aus recycelten österreichischen Industrieabfällen für eine positive CO₂-Bilanz.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Qualitätsgarantie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Österreichische Fertigungsstandards garantieren konstante Qualität und Zuverlässigkeit.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Recycle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Regional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Kurze Transportwege reduzieren den ökologischen Fußabdruck und stärken die lokale Wirtschaft.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Geprüft</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Alle Materialien werden in unserer Werkstatt getestet und für optimal befunden.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Material Kategorien */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Unsere Material-Auswahl</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Für jede Anwendung das passende Material - von einfachen Prototypen bis zu technischen Funktionsteilen
                </p>
              </div>

              <Tabs defaultValue="standard" className="w-full">
                <TabsList className="grid w-full md:w-auto md:mx-auto grid-cols-3 mb-8">
                  <TabsTrigger value="standard">Standard Materialien</TabsTrigger>
                  <TabsTrigger value="technical">Technische Materialien</TabsTrigger>
                  <TabsTrigger value="special">Spezial Materialien</TabsTrigger>
                </TabsList>

                <TabsContent value="standard" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">PLA (Polylactide)</CardTitle>
                          <Badge><Star className="h-3 w-3 mr-1" />Bestseller</Badge>
                        </div>
                        <CardDescription>Der Allrounder für Einsteiger und Profis</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Drucktemperatur</div>
                              <div className="text-primary">190-220°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Bett-Temperatur</div>
                              <div className="text-primary">0-60°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Biologisch abbaubar</li>
                            <li>• Einfach zu drucken</li>
                            <li>• Hohe Detailgenauigkeit</li>
                            <li>• Geruchsarm</li>
                            <li>• 20+ Farben verfügbar</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Prototypen, Designmodelle, Schmuck
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">PLA+ (Enhanced)</CardTitle>
                          <Badge variant="secondary">Verbessert</Badge>
                        </div>
                        <CardDescription>Verstärktes PLA für höhere Festigkeit</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Drucktemperatur</div>
                              <div className="text-primary">200-230°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Bett-Temperatur</div>
                              <div className="text-primary">0-60°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 30% höhere Festigkeit</li>
                            <li>• Reduzierte Verformung</li>
                            <li>• Glänzende Oberfläche</li>
                            <li>• Gute Schichtenhaftung</li>
                            <li>• Alle Standard-Farben</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Funktionsteile, Mechanik, Werkzeuge
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">PETG</CardTitle>
                          <Badge variant="outline">Transparent</Badge>
                        </div>
                        <CardDescription>Glasklare Transparenz und Chemikalienbeständigkeit</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Drucktemperatur</div>
                              <div className="text-primary">230-250°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Bett-Temperatur</div>
                              <div className="text-primary">70-80°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Lebensmittelecht</li>
                            <li>• Kristallklar oder gefärbt</li>
                            <li>• Chemikalienbeständig</li>
                            <li>• Schlagzäh</li>
                            <li>• Recycelbar</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Behälter, Linsen, medizinische Teile
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="technical" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">ABS</CardTitle>
                          <Badge variant="outline">Industrial</Badge>
                        </div>
                        <CardDescription>Robust und hitzebeständig für technische Anwendungen</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Drucktemperatur</div>
                              <div className="text-primary">240-260°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Bett-Temperatur</div>
                              <div className="text-primary">80-100°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Hitzebeständig bis 80°C</li>
                            <li>• Schlagfest und zäh</li>
                            <li>• Aceton-glättbar</li>
                            <li>• Langzeitstabil</li>
                            <li>• Industriestandard</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Gehäuse, Automotive, Elektronik
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">ASA</CardTitle>
                          <Badge variant="secondary">UV-stabil</Badge>
                        </div>
                        <CardDescription>ABS mit UV-Beständigkeit für Außenanwendungen</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Drucktemperatur</div>
                              <div className="text-primary">240-260°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Bett-Temperatur</div>
                              <div className="text-primary">80-100°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• UV-beständig</li>
                            <li>• Witterungsbeständig</li>
                            <li>• Chemikalienresistent</li>
                            <li>• Hohe Festigkeit</li>
                            <li>• Outdoor-geeignet</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Außenteile, KFZ-Zubehör, Garten
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">PC (Polycarbonat)</CardTitle>
                          <Badge>High-Tech</Badge>
                        </div>
                        <CardDescription>Höchste Festigkeit und Temperaturbeständigkeit</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Drucktemperatur</div>
                              <div className="text-primary">270-310°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Bett-Temperatur</div>
                              <div className="text-primary">90-110°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Hitzebeständig bis 140°C</li>
                            <li>• Extrem schlagfest</li>
                            <li>• Transparent möglich</li>
                            <li>• Flammhemmend</li>
                            <li>• Ingenieurskunststoff</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Luftfahrt, Medizintechnik, Schutzausrüstung
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="special" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">TPU (Flexibel)</CardTitle>
                          <Badge variant="secondary">Flexibel</Badge>
                        </div>
                        <CardDescription>Gummiartige Flexibilität für elastische Bauteile</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Shore-Härte</div>
                              <div className="text-primary">85A - 95A</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Dehnung</div>
                              <div className="text-primary">300-600%</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Gummiartige Eigenschaften</li>
                            <li>• Abriebfest</li>
                            <li>• Chemikalienbeständig</li>
                            <li>• Dauerelastisch</li>
                            <li>• Verschiedene Härtegrade</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Dichtungen, Handyhüllen, Schuhe
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">Wood-Fill</CardTitle>
                          <Badge variant="outline">Natürlich</Badge>
                        </div>
                        <CardDescription>PLA mit echten Holzfasern für natürliche Optik</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Holzanteil</div>
                              <div className="text-primary">20-40%</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Holzarten</div>
                              <div className="text-primary">Buche, Kork</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Echter Holzgeruch</li>
                            <li>• Schleif- und lackierbar</li>
                            <li>• Temperaturabhängige Farbe</li>
                            <li>• Nachhaltig</li>
                            <li>• Vintage-Optik möglich</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Dekoration, Möbel, Kunstwerke
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">Carbon Fiber</CardTitle>
                          <Badge>Premium</Badge>
                        </div>
                        <CardDescription>Kohlefaser-verstärkt für maximale Festigkeit</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Carbon-Anteil</div>
                              <div className="text-primary">15-20%</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium">Festigkeit</div>
                              <div className="text-primary">+300%</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Extrem leicht und fest</li>
                            <li>• Carbon-Optik</li>
                            <li>• Leitfähig</li>
                            <li>• Verschleißfest</li>
                            <li>• Premium-Finish</li>
                          </ul>
                          <div className="text-sm">
                            <span className="font-medium">Ideal für:</span> Drohnen, Racing-Teile, High-End Prototypen
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Farbauswahl */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Große Farbauswahl</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Über 50 verschiedene Farben und Oberflächenfinishes für Ihre individuellen Anforderungen
                </p>
              </div>

              <div className="bg-gradient-card p-8 rounded-2xl">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="bg-gradient-primary w-16 h-16 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-semibold mb-2">Standard-Farben</h4>
                    <p className="text-sm text-muted-foreground">20+ Grundfarben immer verfügbar</p>
                  </div>
                  <div>
                    <div className="bg-gradient-to-br from-yellow-400 to-red-500 w-16 h-16 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-semibold mb-2">Metallic-Farben</h4>
                    <p className="text-sm text-muted-foreground">Gold, Silber, Kupfer, Bronze</p>
                  </div>
                  <div>
                    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 w-16 h-16 rounded-full mx-auto mb-4 opacity-70"></div>
                    <h4 className="font-semibold mb-2">Transparent</h4>
                    <p className="text-sm text-muted-foreground">Klar, getönt, transluzent</p>
                  </div>
                  <div>
                    <div className="bg-gradient-to-br from-green-400 to-blue-500 w-16 h-16 rounded-full mx-auto mb-4 animate-pulse"></div>
                    <h4 className="font-semibold mb-2">Spezial-Effekte</h4>
                    <p className="text-sm text-muted-foreground">Glow-in-Dark, Color-Change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Unsicher welches Material?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Unsere Experten beraten Sie kostenlos bei der Auswahl des optimalen Materials 
                für Ihre spezifische Anwendung. Kontaktieren Sie uns für eine individuelle Beratung!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Kostenlose Material-Beratung
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Materialprobe anfordern
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Materialien;