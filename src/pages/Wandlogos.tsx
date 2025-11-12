import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Upload, Type, Ruler, Layers, Sparkles, Check, ArrowRight } from "lucide-react";
import wandlogosHero from "@/assets/fokuskonzept-wandlogo.jpg";
import wandlogosShowcase from "@/assets/wandlogos-showcase.jpg";

const Wandlogos = () => {
  const [width, setWidth] = useState([100]);
  const [height, setHeight] = useState([20]);
  const [depth, setDepth] = useState([3]);
  const [selectedFont, setSelectedFont] = useState("modern");
  const [selectedMaterial, setSelectedMaterial] = useState("pla");

  const fonts = [
    { id: "modern", name: "Modern Sans", preview: "AaBbCc", style: "font-sans font-bold" },
    { id: "elegant", name: "Elegant Serif", preview: "AaBbCc", style: "font-serif font-semibold" },
    { id: "bold", name: "Bold Impact", preview: "AaBbCc", style: "font-sans font-black tracking-tight" },
    { id: "script", name: "Script Style", preview: "AaBbCc", style: "font-serif italic" },
  ];

  const materials = [
    { id: "pla", name: "PLA Standard", price: 45, finish: "Matt" },
    { id: "petg", name: "PETG Premium", price: 65, finish: "Glänzend" },
    { id: "abs", name: "ABS Industrial", price: 75, finish: "Matt" },
    { id: "wood", name: "Wood-Fill", price: 95, finish: "Holzoptik" },
  ];

  const features = [
    "Individuelle Schriftzüge & Logos",
    "Materialstärke bis 10cm",
    "Wetterbeständige Materialien",
    "Professionelle Montage-Hilfe",
    "Express-Fertigung verfügbar",
    "Freie Farbwahl möglich",
  ];

  const examples = [
    { title: "Firmenlogo", size: "150x40cm", material: "PETG", price: "€289" },
    { title: "Wandschriftzug", size: "200x30cm", material: "PLA", price: "€195" },
    { title: "3D Buchstaben", size: "80x60cm", material: "ABS", price: "€349" },
  ];

  const calculatePrice = () => {
    const volume = (width[0] * height[0] * depth[0]) / 1000;
    const materialCost = materials.find(m => m.id === selectedMaterial)?.price || 45;
    const basePrice = volume * materialCost;
    const setupFee = 50;
    return Math.round(basePrice + setupFee);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background/80" />
        <img 
          src={wandlogosHero} 
          alt="3D Wandlogos - Professionelle dimensionale Buchstaben und Firmenlogos" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          style={{ objectPosition: "50% 45%", transform: "scale(1.3)" }}
        />
        <div className="container relative z-10 text-center px-4 py-20">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary/90 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium 3D Wandlogos & Dimensional-Buchstaben
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-white animate-fade-in">
            3D Wandlogos
            <br />
            <span className="text-primary">für Ihr Unternehmen</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Professionelle 3D Wandlogos, dimensionale Schriftzüge und Firmenbuchstaben. 
            Hochwertige Wandbeschriftung für eindrucksvolle Unternehmensauftritte.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8">
              Jetzt kalkulieren
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Beispiele ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Live Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-base px-4 py-2">3D Wandlogo Kalkulator</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ihr 3D Wandlogo <span className="text-primary">in Echtzeit kalkuliert</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Konfigurieren Sie Ihre dimensionalen Buchstaben und erhalten Sie sofort den Preis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Configuration Panel */}
            <Card className="p-8 shadow-glow border-2 hover:shadow-primary transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Konfiguration
              </h3>

              {/* Upload Section */}
              <div className="mb-8 p-6 border-2 border-dashed border-primary/30 rounded-lg hover:border-primary/60 transition-all cursor-pointer bg-primary/5 hover:bg-primary/10">
                <div className="text-center">
                  <Upload className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="font-semibold mb-1">Logo hochladen</p>
                  <p className="text-sm text-muted-foreground">PNG, SVG, JPG bis 10MB</p>
                  <Button variant="outline" className="mt-4">
                    Datei wählen
                  </Button>
                </div>
              </div>

              <div className="text-center mb-8 text-muted-foreground font-medium">
                — ODER —
              </div>

              {/* Font Selection */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Type className="w-5 h-5 text-primary" />
                  Schriftart wählen
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {fonts.map((font) => (
                    <Card
                      key={font.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                        selectedFont === font.id
                          ? "border-2 border-primary shadow-primary"
                          : "border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedFont(font.id)}
                    >
                      <div className={`text-3xl mb-2 ${font.style}`}>{font.preview}</div>
                      <div className="text-sm font-medium">{font.name}</div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="space-y-6 mb-8">
                <div>
                  <label className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 font-semibold">
                      <Ruler className="w-5 h-5 text-primary" />
                      Breite: {width[0]} cm
                    </span>
                  </label>
                  <Slider
                    value={width}
                    onValueChange={setWidth}
                    min={10}
                    max={300}
                    step={5}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>10cm</span>
                    <span>300cm</span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 font-semibold">
                      <Ruler className="w-5 h-5 text-primary" />
                      Höhe: {height[0]} cm
                    </span>
                  </label>
                  <Slider
                    value={height}
                    onValueChange={setHeight}
                    min={5}
                    max={100}
                    step={5}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5cm</span>
                    <span>100cm</span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 font-semibold">
                      <Layers className="w-5 h-5 text-primary" />
                      Tiefe: {depth[0]} cm
                    </span>
                  </label>
                  <Slider
                    value={depth}
                    onValueChange={setDepth}
                    min={1}
                    max={10}
                    step={0.5}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1cm</span>
                    <span>10cm</span>
                  </div>
                </div>
              </div>

              {/* Material Selection */}
              <div className="mb-6">
                <label className="text-lg font-semibold mb-4 block">Material</label>
                <div className="grid gap-3">
                  {materials.map((material) => (
                    <Card
                      key={material.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                        selectedMaterial === material.id
                          ? "border-2 border-primary shadow-primary bg-primary/5"
                          : "border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedMaterial(material.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">{material.name}</div>
                          <div className="text-sm text-muted-foreground">{material.finish}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">€{material.price}</div>
                          <div className="text-xs text-muted-foreground">pro dm³</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>

            {/* Price Display Panel */}
            <div className="space-y-6">
              <Card className="p-8 shadow-card border-2 bg-gradient-to-br from-primary/10 via-background to-accent/10 sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Ihr Angebot</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Abmessungen</span>
                    <span className="font-semibold">{width[0]} × {height[0]} × {depth[0]} cm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-semibold">
                      {materials.find(m => m.id === selectedMaterial)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Schriftart</span>
                    <span className="font-semibold">
                      {fonts.find(f => f.id === selectedFont)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Setup-Gebühr</span>
                    <span className="font-semibold">€50</span>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-primary/20 rounded-lg border-2 border-primary">
                  <div className="text-sm text-muted-foreground mb-2">Geschätzter Preis</div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    €{calculatePrice()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    inkl. Material, Fertigung & Setup
                  </div>
                </div>

                <Button size="lg" className="w-full text-lg mb-4">
                  Angebot anfordern
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg">
                  Beratung vereinbaren
                </Button>

                <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                  <p className="text-sm text-center text-muted-foreground">
                    ✨ Kostenlose Designberatung inklusive
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Warum unsere <span className="text-primary">3D Wandlogos</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-semibold text-lg">{feature}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-base px-4 py-2">3D Wandlogo Projekte</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Realisierte <span className="text-primary">3D Wandlogos</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {examples.map((example, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img src={wandlogosShowcase} alt={example.title} className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{example.size}</span>
                    <span>{example.material}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{example.price}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              Alle Referenzen ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container px-4">
          <Card className="max-w-4xl mx-auto p-12 shadow-glow text-center">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit für Ihr <span className="text-primary">3D Wandlogo</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihr dimensionales Logo realisieren. 
              Kostenlose Beratung und unverbindliches Angebot für Ihr 3D Wandlogo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Jetzt Projekt starten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                +43 123 456 789
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wandlogos;
