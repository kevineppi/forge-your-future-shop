import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import GoogleReviews from "@/components/GoogleReviews";
import WeeklyProductionCounter from "@/components/WeeklyProductionCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Shield, Zap, CheckCircle2, Package, TrendingUp, Users } from "lucide-react";
const Prototypen = () => {
  return <>
      <SEOHead title="3D-Druck Prototypen ab €5 | 24h Express | 100+ Projekte | ekdruck" description="⚡ Funktionsprototypen in 24-48h ✓ Ab €5 ✓ 0,1mm Präzision ✓ Gratis Beratung ✓ 100% AT-Produktion → Jetzt kostenlos Angebot anfordern!" keywords="3d druck prototypen, prototypen 3d-druck, 3d-druck prototypen österreich, funktionsprototypen, prototyping service, designprototypen" path="/prototypen" schemaType="service" />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "3D-Druck Prototypen",
      url: "/prototypen"
    }]} />
      <StructuredData type="service" />

      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-lg px-6 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Professioneller Prototypenbau
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                3D-Druck <span className="text-gradient">Prototypen ab €5</span> aus Österreich
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
                <strong className="text-primary">Funktionsprototypen, Designmuster, Konzeptmodelle</strong> - Lieferung in 24-48 Stunden. 
                Professionelle 3D-Druck Prototypen mit österreichischen Premium-Materialien.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Jetzt Prototyp anfragen
                  <ArrowRight className="ml-2" />
                </Button>
                <Button variant="secondary" size="lg" onClick={() => window.location.href = '/kostenrechner'}>
                  Kosten berechnen
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge variant="secondary" className="px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  100+ erfolgreiche Projekte
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  5.0/5 Google Bewertungen
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  100% AT-Produktion
                </Badge>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24-48h</div>
                  <div className="text-sm text-muted-foreground">Express-Lieferung</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Ab €5</div>
                  <div className="text-sm text-muted-foreground">Kleine Prototypen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">AT-Produktion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0,1mm</div>
                  <div className="text-sm text-muted-foreground">Präzision</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Google Reviews - Social Proof */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Was unsere Kunden <span className="text-gradient">sagen</span>
              </h2>
              <WeeklyProductionCounter />
            </div>
            <div className="animate-fade-in">
              <GoogleReviews />
            </div>
          </div>
        </section>

        {/* Prototypen Arten */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Welchen <span className="text-gradient">Prototyp</span> benötigen Sie?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Von Designmustern bis zu voll funktionsfähigen Testprototypen - wir fertigen jeden Prototyp nach Ihren Anforderungen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="gradient-card hover-scale animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Funktionsprototypen</CardTitle>
                  <CardDescription>Voll funktionsfähige Testmodelle</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Mechanische Funktionstests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Passung & Montageprüfung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Belastungstests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Hochfeste Materialien (PA12, PETG)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card hover-scale border-primary shadow-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CardHeader>
                  <Badge className="w-fit mb-2">Beliebt</Badge>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Designprototypen</CardTitle>
                  <CardDescription>Visualisierung & Präsentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Produktpräsentationen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Kundenfreigaben</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Design-Validierung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Hochwertige Oberflächenqualität</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Konzeptmodelle</CardTitle>
                  <CardDescription>Schnelle Iteration & Entwicklung</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Schnelle Designiterationen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Formstudien</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Größenvergleiche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Kosteneffiziente Fertigung</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vorteile Section - Reduced to 2 Cards */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover-scale animate-fade-in backdrop-blur-sm bg-card/95">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Schnelle Lieferung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    <strong className="text-primary">Express-Service in 24-48h</strong>. Standard-Prototypen innerhalb von 3-5 Werktagen.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale animate-fade-in backdrop-blur-sm bg-card/95" style={{animationDelay: '0.1s'}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Faire Preise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    Transparente Kalkulation ohne versteckte Kosten. <strong className="text-primary">Kleine Prototypen ab €5</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Materialien - Reduced to 2 Materials */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gradient">Materialien</span> für Prototypen
                </h2>
                <p className="text-xl text-muted-foreground">
                  Hochwertige, österreichische Filamente für optimale Qualität.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="hover:border-primary/50 transition-all hover-scale animate-fade-in">
                  <CardHeader>
                    <CardTitle>PLA - Designprototypen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Ideal für Designmuster und Präsentationsmodelle. Nachhaltig und kostengünstig mit bester Oberflächenqualität.
                    </p>
                    <Badge variant="secondary">Nachhaltig</Badge>
                    <Badge variant="secondary" className="ml-2">Beste Oberfläche</Badge>
                  </CardContent>
                </Card>

                <Card className="hover:border-primary/50 transition-all hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <CardHeader>
                    <CardTitle>PETG - Funktionsprototypen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Robust und schlagfest. Perfekt für funktionale Testteile mit mechanischer Belastung und UV-Beständigkeit.
                    </p>
                    <Badge variant="secondary">Robust</Badge>
                    <Badge variant="secondary" className="ml-2">UV-beständig</Badge>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button variant="outline" onClick={() => window.location.href = '/materialien'}>
                  Alle Materialien ansehen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Von der Idee zum <span className="text-gradient">Prototyp</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  In 4 einfachen Schritten zu Ihrem fertigen 3D-Druck Prototyp
                </p>
              </div>

              <div className="space-y-8">
                {[{
                step: "1",
                title: "Anfrage senden",
                desc: "Senden Sie uns Ihre CAD-Datei oder Idee. Wir beraten Sie kostenlos zu Material und Machbarkeit."
              }, {
                step: "2",
                title: "Angebot erhalten",
                desc: "Sie erhalten ein transparentes Angebot mit Preis und Lieferzeit. Inklusive Design-Optimierungsvorschlägen."
              }, {
                step: "3",
                title: "Fertigung",
                desc: "Nach Ihrer Freigabe produzieren wir Ihren Prototyp mit modernster FDM 3D-Druck Technologie."
              }, {
                step: "4",
                title: "Lieferung",
                desc: "Ihr Prototyp wird sorgfältig geprüft und sicher verpackt österreichweit versendet."
              }].map((item, index) => <div key={index} className="flex gap-6 items-start animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg hover-scale">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-lg">{item.desc}</p>
                    </div>
                  </div>)}
              </div>

              <div className="mt-12 text-center">
                <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Jetzt Prototyp anfragen
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <ReviewsWidget />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Häufige <span className="text-gradient">Fragen</span> zu 3D-Druck Prototypen
              </h2>
              
              <div className="space-y-6">
                {[{
                q: "Was kostet ein 3D-Druck Prototyp?",
                a: "Die Kosten hängen von Größe, Material und Komplexität ab. Kleine Prototypen starten ab €5. Nutzen Sie unseren kostenlosen Kostenrechner für eine sofortige Schätzung oder fordern Sie ein individuelles Angebot an."
              }, {
                q: "Wie schnell kann ich meinen Prototyp erhalten?",
                a: "Standard-Lieferung innerhalb von 3-5 Werktagen. Mit unserem Express-Service erhalten Sie Ihren Prototyp bereits in 24-48 Stunden."
              }, {
                q: "Welches Material eignet sich für meinen Prototyp?",
                a: "Das hängt vom Verwendungszweck ab: PLA für Designmuster, PETG für funktionale Tests, ABS für hitzebeständige Teile und PA12 Nylon für höchste Belastbarkeit. Wir beraten Sie gerne kostenlos."
              }, {
                q: "Kann ich auch ohne CAD-Datei einen Prototyp anfragen?",
                a: "Ja! Senden Sie uns einfach Ihre Idee, Skizze oder Fotos. Wir erstellen die CAD-Datei für Sie oder helfen Ihnen bei der Optimierung bestehender Dateien."
              }, {
                q: "Bieten Sie auch Nachbearbeitung an?",
                a: "Ja, wir bieten verschiedene Nachbearbeitungsoptionen wie Glätten, Grundieren oder Lackieren an. Sprechen Sie uns einfach darauf an."
              }].map((faq, index) => <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        

        <Contact />
        <Footer />
      </div>
    </>;
};
export default Prototypen;