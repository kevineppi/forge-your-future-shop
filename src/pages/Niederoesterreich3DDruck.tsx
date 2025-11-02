import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const Niederoesterreich3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Niederösterreich | FDM 3D-Druck Service | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Niederösterreich | FDM 3D-Druck Service | ekdruck e.U."
        description="FDM 3D-Druck Service für St. Pölten, Wiener Neustadt & ganz NÖ. Rapid Prototyping, Express-Service, nachhaltige Materialien aus AT. Jetzt anfragen!"
        keywords="3d-druck niederösterreich, 3d druck st pölten, fdm 3d-druck niederösterreich, rapid prototyping niederösterreich"
        path="/3d-druck-niederoesterreich"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Niederösterreich", url: "/3d-druck-niederoesterreich"}
      ]} />
      <StructuredData type="service" />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                3D-Druck Service Niederösterreich
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Professioneller FDM 3D-Druck für St. Pölten, Wiener Neustadt, Krems und ganz Niederösterreich. Schnelle Lieferung, nachhaltige Materialien aus Österreich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Services für Niederösterreich</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Bauteile mit modernster FDM-Technologie für Prototypen und Serienteile.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/fdm-3d-druck">Mehr erfahren →</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Express Service</h3>
                <p className="text-muted-foreground mb-4">
                  Schnelle Fertigung in 24-48h für dringende Projekte und Prototypen.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/rapid-prototyping">Mehr erfahren →</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Nachhaltige Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Filamente aus österreichischer Produktion für umweltbewussten 3D-Druck.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/3d-druck-materialien">Mehr erfahren →</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* City Links */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">3D-Druck Service in Niederösterreich</h2>
            <p className="text-center text-muted-foreground mb-8">
              Wir liefern schnell und zuverlässig in alle niederösterreichischen Städte
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="/3d-druck-st-poelten">3D-Druck St. Pölten</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Warum ekdruck für Niederösterreich?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Schnelle Lieferung</h3>
                  <p className="text-muted-foreground">Express-Versand nach St. Pölten und ganz Niederösterreich</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Österreichische Qualität</h3>
                  <p className="text-muted-foreground">Hochwertige Materialien aus regionaler Produktion</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Individuelle Beratung</h3>
                  <p className="text-muted-foreground">Persönlicher Support für Ihr 3D-Druck-Projekt</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Faire Preise</h3>
                  <p className="text-muted-foreground">Transparente Kalkulation ohne versteckte Kosten</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Kundenstimmen aus Niederösterreich</h2>
            <ReviewsWidget />
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Jetzt 3D-Druck Service in Niederösterreich nutzen</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+436641337778" className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                +43 664 1337778
              </a>
              <a href="mailto:office@ek-druck.at" className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                office@ek-druck.at
              </a>
            </div>
            <Button size="lg" onClick={() => window.location.href = '/#contact'}>
              Kontaktformular
            </Button>
          </div>
        </section>

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Niederoesterreich3DDruck;