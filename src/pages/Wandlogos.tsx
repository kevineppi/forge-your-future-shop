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
  const [currentStep, setCurrentStep] = useState(1);
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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background/80" />
        <img 
          src={wandlogosHero} 
          alt="3D Wandlogos - Professionelle dimensionale Buchstaben und Firmenlogos" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          style={{ objectPosition: "50% 45%", transform: "scale(1.3)" }}
        />
        <div className="container relative z-10 text-center px-4 py-12">
          <Badge className="mb-4 text-base px-4 py-2 bg-primary/90 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium 3D Wandlogos
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-white animate-fade-in">
            3D Wandlogos für Ihr Unternehmen
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto animate-fade-in">
            Professionelle 3D Wandlogos und dimensionale Schriftzüge
          </p>
        </div>
      </section>

      {/* Compact Step-by-Step Calculator */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 max-w-6xl mx-auto">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep === step
                      ? "bg-primary text-primary-foreground"
                      : currentStep > step
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      currentStep > step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Calculator Content */}
          <Card className="p-6 border">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step Content */}
              <div className="lg:col-span-2">
                {/* Step 1: Upload or Font */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Schritt 1: Logo oder Schriftart</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border-2 border-dashed rounded-lg hover:border-primary/60 transition-all cursor-pointer bg-muted/30">
                        <div className="text-center">
                          <Upload className="w-10 h-10 text-primary mx-auto mb-2" />
                          <p className="font-semibold text-sm mb-1">Logo hochladen</p>
                          <p className="text-xs text-muted-foreground">PNG, SVG, JPG</p>
                        </div>
                      </div>
                      {fonts.map((font) => (
                        <div
                          key={font.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedFont === font.id
                              ? "border-primary bg-primary/5"
                              : "hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedFont(font.id)}
                        >
                          <div className={`text-2xl mb-1 ${font.style}`}>{font.preview}</div>
                          <div className="text-sm font-medium">{font.name}</div>
                        </div>
                      ))}
                    </div>
                    <Button onClick={() => setCurrentStep(2)} className="w-full">
                      Weiter <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Dimensions */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Schritt 2: Abmessungen festlegen</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="flex items-center justify-between mb-2 text-sm font-medium">
                          <span className="flex items-center gap-2">
                            <Ruler className="w-4 h-4 text-primary" />
                            Breite: {width[0]} cm
                          </span>
                        </label>
                        <Slider value={width} onValueChange={setWidth} min={10} max={300} step={5} />
                      </div>
                      <div>
                        <label className="flex items-center justify-between mb-2 text-sm font-medium">
                          <span className="flex items-center gap-2">
                            <Ruler className="w-4 h-4 text-primary" />
                            Höhe: {height[0]} cm
                          </span>
                        </label>
                        <Slider value={height} onValueChange={setHeight} min={5} max={100} step={5} />
                      </div>
                      <div>
                        <label className="flex items-center justify-between mb-2 text-sm font-medium">
                          <span className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-primary" />
                            Tiefe: {depth[0]} cm
                          </span>
                        </label>
                        <Slider value={depth} onValueChange={setDepth} min={1} max={10} step={0.5} />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                        Zurück
                      </Button>
                      <Button onClick={() => setCurrentStep(3)} className="flex-1">
                        Weiter <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Material */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Schritt 3: Material wählen</h3>
                    <div className="grid gap-3">
                      {materials.map((material) => (
                        <div
                          key={material.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedMaterial === material.id
                              ? "border-primary bg-primary/5"
                              : "hover:border-primary/50"
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
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                        Zurück
                      </Button>
                      <Button onClick={() => setCurrentStep(4)} className="flex-1">
                        Weiter <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Summary */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Schritt 4: Zusammenfassung</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Schriftart</span>
                        <span className="font-medium">{fonts.find(f => f.id === selectedFont)?.name}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Abmessungen</span>
                        <span className="font-medium">{width[0]} × {height[0]} × {depth[0]} cm</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Material</span>
                        <span className="font-medium">{materials.find(m => m.id === selectedMaterial)?.name}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setCurrentStep(3)} className="flex-1">
                        Zurück
                      </Button>
                      <Button className="flex-1">
                        Angebot anfordern <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Sidebar */}
              <div className="lg:border-l lg:pl-8">
                <div className="sticky top-6">
                  <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Ihr Preis</h4>
                  <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-xs text-muted-foreground mb-1">Geschätzter Preis</div>
                    <div className="text-3xl font-bold text-primary">€{calculatePrice()}</div>
                    <div className="text-xs text-muted-foreground mt-1">inkl. Material & Setup</div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Größe:</span>
                      <span className="font-medium">{width[0]}×{height[0]}cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium">{materials.find(m => m.id === selectedMaterial)?.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
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
