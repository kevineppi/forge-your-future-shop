import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
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
  Filter,
  Loader2,
  ImageIcon
} from "lucide-react";

interface ProjectReference {
  id: string;
  title: string;
  description: string | null;
  industry: string;
  material: string;
  color: string | null;
  print_time_hours: number | null;
  weight_grams: number | null;
  dimensions: string | null;
  quantity: number | null;
  delivery_days: number | null;
  image_url: string | null;
  customer_quote: string | null;
  customer_name: string | null;
  highlights: string[] | null;
  is_featured: boolean | null;
}

interface Category {
  id: string;
  name: string;
  type: string;
}

const Referenzen = () => {
  const [projects, setProjects] = useState<ProjectReference[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectReference | null>(null);
  const [filterIndustry, setFilterIndustry] = useState("Alle");
  const [filterMaterial, setFilterMaterial] = useState("Alle");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch references
        const { data: refsData, error: refsError } = await supabase
          .from('references')
          .select('*')
          .eq('is_active', true)
          .order('sort_order', { ascending: true });

        if (refsError) throw refsError;
        setProjects(refsData || []);

        // Fetch categories
        const { data: catsData, error: catsError } = await supabase
          .from('reference_categories')
          .select('*')
          .eq('is_active', true)
          .order('sort_order', { ascending: true });

        if (catsError) throw catsError;
        setCategories(catsData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const industryCategories = ["Alle", ...categories.filter(c => c.type === 'industry').map(c => c.name)];
  const materialCategories = ["Alle", ...categories.filter(c => c.type === 'material').map(c => c.name)];

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
                {industryCategories.slice(0, 6).map(industry => (
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
                {materialCategories.slice(0, 5).map(material => (
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
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {projects.length === 0 ? "Noch keine Referenzen" : "Keine Treffer"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {projects.length === 0 
                    ? "Referenzen werden bald hinzugefügt." 
                    : "Keine Projekte mit diesen Filterkriterien gefunden."}
                </p>
                {projects.length > 0 && (
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setFilterIndustry("Alle");
                      setFilterMaterial("Alle");
                    }}
                  >
                    Filter zurücksetzen
                  </Button>
                )}
              </div>
            ) : (
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
                      {project.image_url ? (
                        <img 
                          src={project.image_url} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="w-12 h-12 text-muted-foreground" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick Stats Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center justify-between text-sm">
                          {project.print_time_hours && (
                            <Badge variant="secondary" className="bg-background/90">
                              <Clock className="w-3 h-3 mr-1" />
                              {project.print_time_hours}h
                            </Badge>
                          )}
                          {project.weight_grams && (
                            <Badge variant="secondary" className="bg-background/90">
                              <Scale className="w-3 h-3 mr-1" />
                              {project.weight_grams}g
                            </Badge>
                          )}
                          {project.delivery_days && (
                            <Badge variant="secondary" className="bg-background/90">
                              <Zap className="w-3 h-3 mr-1" />
                              {project.delivery_days}d
                            </Badge>
                          )}
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
                      {project.highlights && project.highlights.length > 0 && (
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
              <div className="relative aspect-square lg:aspect-auto bg-muted min-h-[300px]">
                {selectedProject.image_url ? (
                  <img 
                    src={selectedProject.image_url} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-muted-foreground" />
                  </div>
                )}
                
                {/* Navigation Arrows */}
                {filteredProjects.length > 1 && (
                  <>
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
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Counter */}
                {filteredProjects.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm">
                    {currentIndex + 1} / {filteredProjects.length}
                  </div>
                )}
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
                      {selectedProject.color && (
                        <p className="text-sm text-muted-foreground">{selectedProject.color}</p>
                      )}
                    </div>
                    {selectedProject.dimensions && (
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                          <Box className="w-4 h-4" />
                          Abmessungen
                        </div>
                        <p className="font-semibold">{selectedProject.dimensions}</p>
                      </div>
                    )}
                    {selectedProject.print_time_hours && (
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                          <Clock className="w-4 h-4" />
                          Druckzeit
                        </div>
                        <p className="font-semibold">{selectedProject.print_time_hours} Stunden</p>
                      </div>
                    )}
                    {selectedProject.weight_grams && (
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                          <Scale className="w-4 h-4" />
                          Gewicht
                        </div>
                        <p className="font-semibold">{selectedProject.weight_grams} Gramm</p>
                      </div>
                    )}
                    {selectedProject.quantity && (
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                          <Box className="w-4 h-4" />
                          Stückzahl
                        </div>
                        <p className="font-semibold">{selectedProject.quantity} Stück</p>
                      </div>
                    )}
                    {selectedProject.delivery_days && (
                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 text-primary text-sm mb-1">
                          <Zap className="w-4 h-4" />
                          Lieferzeit
                        </div>
                        <p className="font-semibold text-primary">{selectedProject.delivery_days} Tage</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
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
                {selectedProject.customer_quote && (
                  <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                    <p className="italic text-foreground mb-3">
                      "{selectedProject.customer_quote}"
                    </p>
                    {selectedProject.customer_name && (
                      <p className="text-sm text-muted-foreground">
                        — {selectedProject.customer_name}
                      </p>
                    )}
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
