import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Box, Sparkles, Book, Layers, Building2, Presentation, Palette, Building, Calculator } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity duration-300">
              <img 
                src="/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png" 
                alt="ekdruck e.U. - 3D-Druck Oberösterreich Logo" 
                className="h-12 md:h-16 w-auto max-w-[180px] sm:max-w-none"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={12} className="w-[520px] p-4 bg-background border border-border/50 shadow-2xl z-[110] animate-scale-in">
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {/* Linke Spalte - Services */}
                  <div className="space-y-0.5">
                    <div className="px-2 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Services</div>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/fdm-3d-druck" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Box className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">FDM 3D-Druck</div>
                          <div className="text-xs text-muted-foreground">Vielseitig & kostengünstig</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/einzelanfertigungen" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Einzelanfertigungen</div>
                          <div className="text-xs text-muted-foreground">Unikate nach Ihren Wünschen</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/rapid-prototyping" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Layers className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Designprototypen</div>
                          <div className="text-xs text-muted-foreground">Anschauungsmodelle für Präsentation</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/glossar" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Book className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">3D-Druck Glossar</div>
                          <div className="text-xs text-muted-foreground">Fachbegriffe erklärt</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/referenzen" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Referenzen & Projekte</div>
                          <div className="text-xs text-muted-foreground">Erfolgreiche Kundenprojekte</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  </div>
                  
                  {/* Rechte Spalte - Zielgruppen */}
                  <div className="space-y-0.5">
                    <div className="px-2 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Zielgruppen</div>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/architekturmodelle" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Building2 className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Architekturmodelle</div>
                          <div className="text-xs text-muted-foreground">Für Architekten & Planer</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/messemodelle" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Presentation className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Messemodelle</div>
                          <div className="text-xs text-muted-foreground">Für Events & Präsentationen</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/kunstobjekte" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Palette className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Kunstobjekte</div>
                          <div className="text-xs text-muted-foreground">Für Künstler & Kreative</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <a href="/firmenkunden" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Building className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Firmenkunden</div>
                          <div className="text-xs text-muted-foreground">B2B Projekte & Aufträge</div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/ueber-uns" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Über uns</Link>
            <Link to="/kontakt" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Kontakt</Link>
            <Button variant="hero" size="sm" className="ml-2 md:ml-4 hover:scale-105 transition-transform duration-300 text-xs md:text-base px-2 md:px-6 py-1 md:py-2" asChild>
              <Link to="/kontakt">Angebot</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in max-h-[80vh] overflow-y-auto">
            {/* Services Section */}
            <div className="mb-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 py-2">Services</div>
              <div className="grid grid-cols-2 gap-1">
                <a 
                  href="/fdm-3d-druck" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                 <Box className="h-4 w-4 text-primary flex-shrink-0" />
                   <span className="text-sm font-medium truncate">FDM 3D-Druck</span>
                 </a>
                 <a 
                   href="/einzelanfertigungen" 
                   className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                   onClick={() => setIsOpen(false)}
                 >
                   <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                   <span className="text-sm font-medium truncate">Einzelanfertigungen</span>
                 </a>
                 <a 
                   href="/rapid-prototyping" 
                   className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                   onClick={() => setIsOpen(false)}
                 >
                   <Layers className="h-4 w-4 text-primary flex-shrink-0" />
                   <span className="text-sm font-medium truncate">Designprototypen</span>
                 </a>
                 <a 
                   href="/glossar" 
                   className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                   onClick={() => setIsOpen(false)}
                 >
                   <Book className="h-4 w-4 text-primary flex-shrink-0" />
                   <span className="text-sm font-medium truncate">Glossar</span>
                 </a>
                 <a 
                   href="/referenzen" 
                   className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                   onClick={() => setIsOpen(false)}
                 >
                   <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                   <span className="text-sm font-medium truncate">Referenzen</span>
                 </a>
              </div>
            </div>

            {/* Zielgruppen Section */}
            <div className="mb-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 py-2">Zielgruppen</div>
              <div className="grid grid-cols-2 gap-1">
                <a 
                  href="/architekturmodelle" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Architektur</span>
                </a>
                <a 
                  href="/messemodelle" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Presentation className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Messe</span>
                </a>
                <a 
                  href="/kunstobjekte" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Palette className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Kunst</span>
                </a>
                <a 
                  href="/firmenkunden" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Building className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Firmenkunden</span>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t border-border/50 pt-4 space-y-2">
              <Link 
                to="/kontakt" 
                className="flex items-center gap-3 p-3 bg-primary/5 text-foreground rounded-xl hover:bg-primary/10 active:scale-[0.98] transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Calculator className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Anfrage stellen</div>
                  <div className="text-xs text-muted-foreground">Projektanfrage & Beratung</div>
                </div>
              </Link>
            </div>
            
            <Button
              variant="hero" 
              size="sm" 
              className="w-full mt-4"
              asChild
            >
              <Link to="/kontakt" onClick={() => setIsOpen(false)}>
                Angebot erhalten
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
