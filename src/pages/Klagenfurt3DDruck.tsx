import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import AIChatWidget from "@/components/AIChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Upload, Search, Printer, Truck, Star } from "lucide-react";

const Klagenfurt3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Klagenfurt & Kärnten | ekdruck"
        description="FDM 3D-Druck am Wörthersee – schneller Versand nach Klagenfurt & Kärnten. Technische Beratung inklusive. Prototypen für Industrie & Handwerk!"
        keywords="3d-druck klagenfurt, 3d drucker klagenfurt, fdm druck klagenfurt, rapid prototyping kärnten, 3d-druck service klagenfurt, prototypen klagenfurt"
        path="/3d-druck-klagenfurt"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Klagenfurt", url: "/3d-druck-klagenfurt"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Klagenfurt am Wörthersee</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                3D-Druck Service in <span className="text-gradient">Klagenfurt</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professioneller FDM 3D-Druck für <strong className="text-foreground">Klagenfurt</strong> und ganz Kärnten. 
                Schnelle Lieferung nach <strong className="text-foreground">Klagenfurt</strong>, nachhaltige Materialien und faire Preise für Ihre Projekte am Wörthersee.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot erhalten
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Unsere <span className="text-gradient">Services in Klagenfurt</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="gradient-card p-6 rounded-xl">
                <Box className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Professioneller FDM 3D-Druck für Prototypen, Einzelteile und Kleinserien in Klagenfurt und Kärnten.
                </p>
                <a href="/fdm-3d-druck" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Express Service</h3>
                <p className="text-muted-foreground mb-4">
                  24-48h Lieferung nach Klagenfurt und Umgebung für dringende Projekte.
                </p>
                <a href="/rapid-prototyping" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Filamente aus österreichischer Produktion für beste Qualität.
                </p>
                <a href="/3d-druck-materialien" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                <span className="text-gradient">3D-Druck Anwendungen</span> in Klagenfurt
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏭 Industrie & Fertigung</h3>
                  <p className="text-muted-foreground">Funktionsprototypen und Ersatzteile für Kärntner Industriebetriebe</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏗️ Architektur</h3>
                  <p className="text-muted-foreground">Architekturmodelle und Visualisierungen für Klagenfurter Planungsbüros</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🎓 Bildung & Forschung</h3>
                  <p className="text-muted-foreground">Unterstützung für Universität Klagenfurt und Forschungseinrichtungen</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🎨 Design & Kunst</h3>
                  <p className="text-muted-foreground">Individuelle Kunstobjekte und Designprototypen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Warum ekdruck für <span className="text-gradient">Klagenfurt</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Schnelle Lieferung nach Kärnten</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h nach Klagenfurt und Umgebung</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Österreichischer Anbieter</h3>
                    <p className="text-muted-foreground">Keine langen Lieferwege - direkt aus Österreich</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Persönliche Beratung</h3>
                    <p className="text-muted-foreground">Kompetente Unterstützung bei Material- und Verfahrenswahl</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Transparente Preise</h3>
                    <p className="text-muted-foreground">Nutzen Sie unseren Kostenrechner für eine sofortige Schätzung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-center">
                So einfach geht <span className="text-gradient">3D-Druck</span> in Klagenfurt
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von der Idee bis zum fertigen Teil in nur 4 einfachen Schritten
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <h3 className="font-bold text-lg mb-2">Datei hochladen</h3>
                  <p className="text-muted-foreground text-sm">
                    STL, OBJ oder STEP - Ihre 3D-Datei einfach hochladen
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <h3 className="font-bold text-lg mb-2">Angebot erhalten</h3>
                  <p className="text-muted-foreground text-sm">
                    Innerhalb von 24h erhalten Sie ein detailliertes Angebot
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale">
                    <Printer className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <h3 className="font-bold text-lg mb-2">Produktion</h3>
                  <p className="text-muted-foreground text-sm">
                    Professioneller Druck mit modernster FDM-Technologie
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <h3 className="font-bold text-lg mb-2">Schnelle Lieferung</h3>
                  <p className="text-muted-foreground text-sm">
                    Express nach Klagenfurt in 24-48h möglich
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-center">
                Premium <span className="text-gradient">Materialien</span> für Klagenfurt
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Hochwertige Filamente aus österreichischer Produktion für beste Qualität
              </p>
              
              <Tabs defaultValue="standard" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 mb-8 h-auto p-2">
                  <TabsTrigger value="standard" className="text-sm px-4 py-3">
                    Standard Materialien
                  </TabsTrigger>
                  <TabsTrigger value="technical" className="text-sm px-4 py-3">
                    Technische Materialien
                  </TabsTrigger>
                  <TabsTrigger value="special" className="text-sm px-4 py-3">
                    Spezielle Materialien
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="standard" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">PLA</CardTitle>
                          <Badge><Star className="h-3 w-3 mr-1" />Bestseller</Badge>
                        </div>
                        <CardDescription>Biokunststoff für Prototypen</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">190-220°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Bett-Temp.</div>
                              <div className="text-primary font-semibold">0-60°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Biologisch abbaubar</li>
                            <li>• Hohe Detailgenauigkeit</li>
                            <li>• 20+ Farben verfügbar</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">PETG</CardTitle>
                          <Badge variant="outline">Robust</Badge>
                        </div>
                        <CardDescription>Schlagfest & transparent</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">230-250°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Bett-Temp.</div>
                              <div className="text-primary font-semibold">70-80°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Lebensmittelecht</li>
                            <li>• Chemikalienbeständig</li>
                            <li>• Kristallklar möglich</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">PLA+</CardTitle>
                          <Badge variant="secondary">Verstärkt</Badge>
                        </div>
                        <CardDescription>Enhanced PLA mit mehr Festigkeit</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">200-230°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Bett-Temp.</div>
                              <div className="text-primary font-semibold">0-60°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 30% höhere Festigkeit</li>
                            <li>• Reduzierte Verformung</li>
                            <li>• Glänzende Oberfläche</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="technical" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">ABS</CardTitle>
                          <Badge variant="outline">Industrial</Badge>
                        </div>
                        <CardDescription>Hitzebeständig & robust</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">240-260°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Bett-Temp.</div>
                              <div className="text-primary font-semibold">80-100°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Hitzebeständig bis 80°C</li>
                            <li>• Schlagfest und zäh</li>
                            <li>• Aceton-glättbar</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">ASA</CardTitle>
                          <Badge variant="secondary">UV-stabil</Badge>
                        </div>
                        <CardDescription>Für Außenanwendungen</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">240-260°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Bett-Temp.</div>
                              <div className="text-primary font-semibold">80-100°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• UV-beständig</li>
                            <li>• Witterungsbeständig</li>
                            <li>• Chemikalienresistent</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">PA12 Nylon</CardTitle>
                          <Badge>Premium</Badge>
                        </div>
                        <CardDescription>Höchste Festigkeit</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">240-260°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Bett-Temp.</div>
                              <div className="text-primary font-semibold">80-90°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Extrem belastbar</li>
                            <li>• Flexibel & zäh</li>
                            <li>• Verschleißfest</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="special" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">TPU</CardTitle>
                          <Badge variant="outline">Flexibel</Badge>
                        </div>
                        <CardDescription>Gummiartiges Material</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">220-240°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Shore-Härte</div>
                              <div className="text-primary font-semibold">85A-95A</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Elastisch & flexibel</li>
                            <li>• Abriebfest</li>
                            <li>• Dämpfende Eigenschaften</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">Carbon-PLA</CardTitle>
                          <Badge variant="secondary">Premium</Badge>
                        </div>
                        <CardDescription>Mit Karbonfasern verstärkt</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">200-220°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Bett-Temp.</div>
                              <div className="text-primary font-semibold">50-70°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Höhere Steifigkeit</li>
                            <li>• Matt-schwarze Optik</li>
                            <li>• Geringeres Gewicht</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">Wood-PLA</CardTitle>
                          <Badge>Holzoptik</Badge>
                        </div>
                        <CardDescription>Mit echten Holzfasern</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Drucktemp.</div>
                              <div className="text-primary font-semibold">190-220°C</div>
                            </div>
                            <div className="bg-muted/50 p-2 rounded">
                              <div className="font-medium text-xs">Bett-Temp.</div>
                              <div className="text-primary font-semibold">0-60°C</div>
                            </div>
                          </div>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Natürliche Holzoptik</li>
                            <li>• Angenehmer Geruch</li>
                            <li>• Nachschleifbar</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Alle Materialien aus nachhaltiger österreichischer Produktion
                </p>
                <Button variant="outline" asChild>
                  <a href="/3d-druck-materialien">Alle Materialien ansehen →</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Häufig gestellte <span className="text-gradient">Fragen</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie schnell erhalte ich mein 3D-Druck-Teil in Klagenfurt?</h3>
                  <p className="text-muted-foreground">Express-Service innerhalb von 24-48 Stunden. Standard-Lieferungen dauern 2-3 Werktage.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Welche Dateiformate werden akzeptiert?</h3>
                  <p className="text-muted-foreground">Wir akzeptieren STL, OBJ, STEP und viele weitere CAD-Formate.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie werden die Kosten berechnet?</h3>
                  <p className="text-muted-foreground">Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Kostenrechner.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReviewsWidget />

        {/* Contact CTA */}
        <section id="contact" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in Klagenfurt
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Kontaktieren Sie uns noch heute für ein kostenloses Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+436765517197" className="text-lg hover:text-primary transition-colors">
                    +43 676 5517197
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:office@ekdruck.at" className="text-lg hover:text-primary transition-colors">
                    office@ekdruck.at
                  </a>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="/#contact">Kontaktformular</a>
              </Button>
            </div>
          </div>
        </section>

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Klagenfurt3DDruck;