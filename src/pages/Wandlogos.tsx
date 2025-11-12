import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Type, Ruler, Layers, Sparkles, Check, ArrowRight } from "lucide-react";
import { Logo3DPreview } from "@/components/Logo3DPreview";
import wandlogosHero from "@/assets/fokuskonzept-wandlogo.jpg";
import wandlogosShowcase from "@/assets/wandlogos-showcase.jpg";

const Wandlogos = () => {
  const [inputType, setInputType] = useState<"photo" | "text" | null>(null);
  const [logoText, setLogoText] = useState("Text");
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
        <div className="container px-4 max-w-7xl mx-auto">
          {/* Calculator Content - Side by Side */}
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-6">
            {/* Left: 3D Preview Card */}
            <Card className="p-0 border overflow-hidden shadow-lg">
              <Logo3DPreview
                text={logoText}
                width={width[0]}
                height={height[0]}
                depth={depth[0]}
                material={selectedMaterial}
                font={selectedFont}
              />
            </Card>

            {/* Right: Configuration Sidebar */}
            <Card className="p-6 border shadow-lg bg-background">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">3D Wandlogo Konfigurator</h2>
                <Badge className="bg-primary text-primary-foreground rounded-full px-4 py-1">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              </div>

              <div className="space-y-6">
                {/* Step 1: Choose Input Type */}
                {!inputType && (
                  <div>
                    <Label className="font-bold text-lg mb-4 block">Wie möchten Sie Ihr Logo gestalten?</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Card 
                        className="p-6 cursor-pointer hover:border-primary hover:shadow-lg transition-all"
                        onClick={() => setInputType("photo")}
                      >
                        <Upload className="w-12 h-12 text-primary mx-auto mb-3" />
                        <p className="text-center font-semibold">Foto hochladen</p>
                        <p className="text-xs text-muted-foreground text-center mt-1">
                          Logo oder Grafik
                        </p>
                      </Card>
                      <Card 
                        className="p-6 cursor-pointer hover:border-primary hover:shadow-lg transition-all"
                        onClick={() => setInputType("text")}
                      >
                        <Type className="w-12 h-12 text-primary mx-auto mb-3" />
                        <p className="text-center font-semibold">Text eingeben</p>
                        <p className="text-xs text-muted-foreground text-center mt-1">
                          Firmenname oder Schriftzug
                        </p>
                      </Card>
                    </div>
                  </div>
                )}

                {/* Grafikupload - only if photo selected */}
                {inputType === "photo" && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Label className="font-bold text-base">Grafikupload</Label>
                        <Badge variant="outline" className="text-xs">
                          ?
                        </Badge>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setInputType(null)}
                      >
                        Ändern
                      </Button>
                    </div>
                    <div className="p-6 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5 text-center cursor-pointer hover:bg-primary/10 transition-colors">
                      <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-foreground">
                        Klicke oder nutze Drag & Drop, um deine Grafik hochzuladen
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PNG, SVG, JPG bis 10MB
                      </p>
                    </div>
                  </div>
                )}

                {/* Text Input - only if text selected */}
                {inputType === "text" && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Label className="font-bold text-base">Ihr Text</Label>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setInputType(null)}
                      >
                        Ändern
                      </Button>
                    </div>
                    <Input
                      value={logoText}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        setLogoText(newValue === "" ? "Text" : newValue);
                      }}
                      placeholder="Text"
                      className="text-base"
                      maxLength={20}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Max. 20 Zeichen
                    </p>
                  </div>
                )}

                {/* Aufstellort - only show if input type is selected */}
                {inputType && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Label className="font-bold text-base">Aufstellort</Label>
                      <span className="text-sm text-muted-foreground">(optional)</span>
                      <Badge variant="outline" className="text-xs">
                        ?
                      </Badge>
                    </div>
                    <div className="p-6 border-2 border-dashed border-muted rounded-lg bg-muted/30 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-foreground">
                        Klicke oder nutze Drag & Drop, um deinen Aufstellort hochzuladen
                      </p>
                    </div>
                  </div>
                )}

                {/* Breite und Farben - only show if input type is selected */}
                {inputType && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Label className="font-bold text-base">Breite</Label>
                        <Badge variant="outline" className="text-xs">
                          ?
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={width[0]}
                          onChange={(e) => setWidth([Math.min(parseInt(e.target.value) || 100, 200)])}
                          className="text-base"
                          min={10}
                          max={200}
                        />
                        <span className="text-sm font-medium">cm</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Label className="font-bold text-base">Farben</Label>
                        <Badge variant="outline" className="text-xs">
                          ?
                        </Badge>
                      </div>
                      <Button variant="outline" className="w-full text-sm">
                        Farben nach Grafik
                      </Button>
                    </div>
                  </div>
                )}

                {/* Höhe und Tiefe - only show if input type is selected */}
                {inputType && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="font-bold text-base mb-3 block">Höhe</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={height[0]}
                            onChange={(e) => setHeight([parseInt(e.target.value) || 20])}
                            className="text-base"
                            min={5}
                            max={100}
                          />
                          <span className="text-sm font-medium">cm</span>
                        </div>
                      </div>

                      <div>
                        <Label className="font-bold text-base mb-3 block">Tiefe</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={depth[0]}
                            onChange={(e) => setDepth([parseFloat(e.target.value) || 3])}
                            className="text-base"
                            min={1}
                            max={10}
                            step={0.5}
                          />
                          <span className="text-sm font-medium">cm</span>
                        </div>
                      </div>
                    </div>

                    {/* Material */}
                    <div>
                      <Label className="font-bold text-base mb-3 block">Material</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {materials.map((material) => (
                          <Button
                            key={material.id}
                            variant={selectedMaterial === material.id ? "default" : "outline"}
                            className="text-sm"
                            onClick={() => setSelectedMaterial(material.id)}
                          >
                            {material.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Price Display */}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-muted-foreground">Geschätzter Preis:</span>
                        <span className="text-2xl font-bold text-primary">€{calculatePrice()}</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button className="w-full py-6 text-base font-semibold">
                      <ArrowRight className="mr-2 w-5 h-5" />
                      Anfrage abschließen
                    </Button>
                  </>
                )}
              </div>
            </Card>
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
