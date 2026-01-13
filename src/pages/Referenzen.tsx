import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  Clock, 
  Scale, 
  Layers, 
  Box, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Factory,
  Zap,
  CheckCircle2,
  Filter
} from "lucide-react";

interface ProjectReference {
  id: string;
  title: string;
  description: string;
  industry: string;
  material: string;
  color: string;
  printTimeHours: number;
  weightGrams: number;
  dimensions: string;
  quantity: number;
  deliveryDays: number;
  imageUrl: string;
  customerQuote?: string;
  customerName?: string;
  highlights?: string[];
}

// Placeholder projects - will be replaced with real photos
const projects: ProjectReference[] = [
  {
    id: "1",
    title: "Prototyp Gehäuse Steuerungsmodul",
    description: "Funktionsprototyp für ein industrielles Steuerungsmodul mit präzisen Passungen für Elektronik-Komponenten.",
    industry: "Maschinenbau",
    material: "PETG",
    color: "Anthrazit",
    printTimeHours: 8.5,
    weightGrams: 145,
    dimensions: "120 × 80 × 45 mm",
    quantity: 3,
    deliveryDays: 2,
    imageUrl: "/placeholder.svg",
    customerQuote: "Perfekte Passgenauigkeit, wie aus dem CAD. Wir konnten sofort mit dem Testing starten.",
    customerName: "Ing. M. Huber, Maschinenbau GmbH",
    highlights: ["Präzise Toleranzen ±0.2mm", "Hitzebeständig bis 80°C", "3 Iterationen in 1 Woche"]
  },
  {
    id: "2",
    title: "Kleinserie Montageclips",
    description: "50 Stück Montageclips für Kabelführung in Schaltschränken. Hohe Wiederholgenauigkeit über die gesamte Serie.",
    industry: "Elektrotechnik",
    material: "PA12 Nylon",
    color: "Schwarz",
    printTimeHours: 24,
    weightGrams: 12,
    dimensions: "35 × 20 × 15 mm",
    quantity: 50,
    deliveryDays: 4,
    imageUrl: "/placeholder.svg",
    customerQuote: "Spritzguss hätte 8 Wochen gedauert. Mit ekdruck hatten wir die Teile in 4 Tagen.",
    customerName: "Elektro Müller KG",
    highlights: ["50 identische Teile", "Werkzeugkosten gespart", "UV-beständig"]
  },
  {
    id: "3",
    title: "Design-Prototyp Lampenhalterung",
    description: "Designstudie für eine moderne Wandlampen-Halterung mit organischen Formen und optimierter Struktur.",
    industry: "Interior Design",
    material: "PLA",
    color: "Weiß matt",
    printTimeHours: 6,
    weightGrams: 85,
    dimensions: "150 × 100 × 60 mm",
    quantity: 1,
    deliveryDays: 1,
    imageUrl: "/placeholder.svg",
    highlights: ["Organisches Design", "Leichtbau-Struktur", "Express-Lieferung"]
  },
  {
    id: "4",
    title: "Ersatzteil Ventilhalterung",
    description: "Reverse-Engineering eines nicht mehr verfügbaren Ersatzteils für eine Produktionsanlage aus den 90ern.",
    industry: "Instandhaltung",
    material: "ABS",
    color: "Rot (Sicherheitsfarbe)",
    printTimeHours: 4.5,
    weightGrams: 68,
    dimensions: "80 × 60 × 40 mm",
    quantity: 2,
    deliveryDays: 1,
    imageUrl: "/placeholder.svg",
    customerQuote: "Das Teil gibt es seit 20 Jahren nicht mehr zu kaufen. ekdruck hat es innerhalb von 48h nachproduziert.",
    customerName: "Produktionsleiter, Lebensmittelbetrieb",
    highlights: ["Reverse Engineering", "Maschinenstillstand vermieden", "24h Express"]
  },
  {
    id: "5",
    title: "Medizintechnik Prototyp",
    description: "Gehäuse für ein medizinisches Handgerät zur Evaluierung der Ergonomie vor der Serienproduktion.",
    industry: "Medizintechnik",
    material: "PETG",
    color: "Weiß",
    printTimeHours: 12,
    weightGrams: 120,
    dimensions: "180 × 50 × 35 mm",
    quantity: 5,
    deliveryDays: 3,
    imageUrl: "/placeholder.svg",
    highlights: ["Ergonomie-Test", "Lebensmittelecht", "Glatte Oberfläche"]
  },
  {
    id: "6",
    title: "Robotergreifer Prototyp",
    description: "Funktionaler Greifer-Prototyp für einen Cobot mit integrierten Vakuumkanälen.",
    industry: "Automatisierung",
    material: "PA6 Nylon GF",
    color: "Grau",
    printTimeHours: 18,
    weightGrams: 210,
    dimensions: "140 × 90 × 70 mm",
    quantity: 1,
    deliveryDays: 3,
    imageUrl: "/placeholder.svg",
    customerQuote: "Die integrierten Luftkanäle funktionieren einwandfrei. Beeindruckende Qualität!",
    customerName: "Robotics Startup Wien",
    highlights: ["Integrierte Kanäle", "Glasfaserverstärkt", "Hochfest"]
  }
];

const industries = ["Alle", "Maschinenbau", "Elektrotechnik", "Interior Design", "Instandhaltung", "Medizintechnik", "Automatisierung"];
const materials = ["Alle", "PLA", "PETG", "ABS", "PA12 Nylon", "PA6 Nylon GF", "TPU"];

const Referenzen = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectReference | null>(null);
  const [filterIndustry, setFilterIndustry] = useState("Alle");
  const [filterMaterial, setFilterMaterial] = useState("Alle");

  const filteredProjects = projects.filter(project => {
    const matchesIndustry = filterIndustry === "Alle" || project.industry === filterIndustry;
    const matchesMaterial = filterMaterial === "Alle" || project.material.includes(filterMaterial.replace(" Nylon", "").replace(" GF", ""));
    return matchesIndustry && matchesMaterial;
  });

  const currentIndex = selectedProject ? filteredProjects.findIndex(p => p.id === selectedProject.id) : -1;

  const navigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
      : (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <>
      <SEOHead 
        title="3D-Druck Referenzen & Projekte | ekdruck Österreich"
        description="Entdecken Sie unsere 3D-Druck Projekte: Prototypen, Kleinserien & Ersatzteile. Mit technischen Daten, Druckzeiten & Kundenfeedback. Made in Austria."
        keywords="3d-druck referenzen, 3d-druck projekte, 3d-druck beispiele, prototypen österreich, kleinserien 3d-druck"
        path="/referenzen"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Referenzen", url: "/referenzen" }
      ]} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
                Über 500+ erfolgreiche Projekte
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unsere <span className="text-gradient">Referenzen</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Von Prototypen bis Kleinserien – entdecken Sie ausgewählte Projekte mit 
                technischen Details, Druckzeiten und Kundenfeedback.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  100% Made in Austria
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Express ab 24h
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  ★ 5/5 Google
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-y border-border/50 bg-muted/30 sticky top-20 z-40 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground mr-2">Branche:</span>
                {industries.map(industry => (
                  <Button
                    key={industry}
                    variant={filterIndustry === industry ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterIndustry(industry)}
                    className="text-xs"
                  >
                    {industry}
                  </Button>
                ))}
              </div>

              <div className="w-px h-6 bg-border hidden md:block" />

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground mr-2">Material:</span>
                {materials.slice(0, 5).map(material => (
                  <Button
                    key={material}
                    variant={filterMaterial === material ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterMaterial(material)}
                    className="text-xs"
                  >
                    {material}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="secondary" className="bg-background/90">
                          <Clock className="w-3 h-3 mr-1" />
                          {project.printTimeHours}h
                        </Badge>
                        <Badge variant="secondary" className="bg-background/90">
                          <Scale className="w-3 h-3 mr-1" />
                          {project.weightGrams}g
                        </Badge>
                        <Badge variant="secondary" className="bg-background/90">
                          <Zap className="w-3 h-3 mr-1" />
                          {project.deliveryDays}d
                        </Badge>
                      </div>
                    </div>

                    {/* Industry Badge */}
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {project.industry}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Technical Data Grid */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Layers className="w-4 h-4 text-primary" />
                        <span>{project.material}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Box className="w-4 h-4 text-primary" />
                        <span>{project.quantity}x</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Keine Projekte mit diesen Filterkriterien gefunden.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setFilterIndustry("Alle");
                    setFilterMaterial("Alle");
                  }}
                >
                  Filter zurücksetzen
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ihr Projekt könnte das nächste sein
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Laden Sie Ihre STL-Datei hoch und erhalten Sie sofort einen Preis. 
                Von der Idee zum fertigen Teil in 24-48 Stunden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="/kostenrechner">
                    Jetzt Projekt starten
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    Beratung anfordern
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative aspect-square lg:aspect-auto bg-muted">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm">
                  {currentIndex + 1} / {filteredProjects.length}
                </div>
              </div>

              {/* Details Side */}
              <div className="p-8 space-y-6 overflow-y-auto max-h-[80vh]">
                <div>
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {selectedProject.industry}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Factory className="w-5 h-5 text-primary" />
                    Technische Daten
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Layers className="w-4 h-4" />
                        Material
                      </div>
                      <p className="font-semibold">{selectedProject.material}</p>
                      <p className="text-sm text-muted-foreground">{selectedProject.color}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Box className="w-4 h-4" />
                        Abmessungen
                      </div>
                      <p className="font-semibold">{selectedProject.dimensions}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Clock className="w-4 h-4" />
                        Druckzeit
                      </div>
                      <p className="font-semibold">{selectedProject.printTimeHours} Stunden</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Scale className="w-4 h-4" />
                        Gewicht
                      </div>
                      <p className="font-semibold">{selectedProject.weightGrams} Gramm</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Box className="w-4 h-4" />
                        Stückzahl
                      </div>
                      <p className="font-semibold">{selectedProject.quantity} Stück</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 text-primary text-sm mb-1">
                        <Zap className="w-4 h-4" />
                        Lieferzeit
                      </div>
                      <p className="font-semibold text-primary">{selectedProject.deliveryDays} Tage</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                {selectedProject.highlights && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Customer Quote */}
                {selectedProject.customerQuote && (
                  <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                    <p className="italic text-foreground mb-3">
                      "{selectedProject.customerQuote}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — {selectedProject.customerName}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="pt-4 border-t">
                  <Button variant="cta" size="lg" className="w-full" asChild>
                    <a href="/kostenrechner">
                      Ähnliches Projekt starten
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Referenzen;
