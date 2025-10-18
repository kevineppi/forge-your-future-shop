import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Box, Clock, Leaf, Sparkles, Factory, Home, TestTube, Calculator, BookOpen } from "lucide-react";

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
              <DropdownMenuContent sideOffset={12} className="w-80 p-2 bg-background border border-border/50 shadow-xl z-[110]">
                <div className="grid gap-1">
                  <DropdownMenuItem asChild className="p-0">
                    <a href="/fdm-3d-druck" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Box className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">FDM 3D-Druck</div>
                        <div className="text-sm text-muted-foreground">Vielseitig & kostengünstig</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0">
                    <a href="/rapid-prototyping" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">Rapid Prototyping</div>
                        <div className="text-sm text-muted-foreground">Prototypen in 24-48h</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0">
                    <a href="/3d-druck-materialien" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Leaf className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">Materialien</div>
                        <div className="text-sm text-muted-foreground">Nachhaltige österreichische Filamente</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0">
                    <a href="/einzelanfertigungen" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">Einzelanfertigungen</div>
                        <div className="text-sm text-muted-foreground">Unikate nach Ihren Wünschen</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0">
                    <a href="/serienfertigung" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Factory className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">Serienfertigung</div>
                        <div className="text-sm text-muted-foreground">Kleinserien 10-10.000 Stück</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0">
                    <a href="/probeteile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <TestTube className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">Kostenlose Probeteile</div>
                        <div className="text-sm text-muted-foreground">Kostenlose B2B Muster</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/ratgeber" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Ratgeber</a>
            <a href="#advantages" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Vorteile</a>
            <a href="/kostenrechner" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
              <Calculator className="w-4 h-4" />
              Kostenrechner
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Kontakt</a>
            <Button variant="hero" size="sm" className="ml-2 md:ml-4 hover:scale-105 transition-transform duration-300 text-xs md:text-base px-2 md:px-6 py-1 md:py-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Angebot</Button>
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
          <div className="md:hidden pb-4 space-y-3 animate-fade-in">
            <div className="space-y-2">
              <a 
                href="/" 
                className="flex items-center gap-3 p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-4 w-4 text-primary" />
                Startseite
              </a>
              <div className="text-sm font-semibold text-muted-foreground px-2 mb-2 mt-4">Services</div>
              <a 
                href="/fdm-3d-druck" 
                className="flex items-center gap-3 p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                <Box className="h-4 w-4 text-primary" />
                FDM 3D-Druck
              </a>
              <a 
                href="/rapid-prototyping" 
                className="flex items-center gap-3 p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                <Clock className="h-4 w-4 text-primary" />
                Rapid Prototyping
              </a>
              <a 
                href="/3d-druck-materialien" 
                className="flex items-center gap-3 p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                <Leaf className="h-4 w-4 text-primary" />
                Materialien
              </a>
              <a 
                href="/einzelanfertigungen" 
                className="flex items-center gap-3 p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles className="h-4 w-4 text-primary" />
                Einzelanfertigungen
              </a>
              <a 
                href="/serienfertigung" 
                className="flex items-center gap-3 p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                <Factory className="h-4 w-4 text-primary" />
                Serienfertigung
              </a>
              <a 
                href="/probeteile" 
                className="flex items-center gap-3 p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                onClick={() => setIsOpen(false)}
              >
                <TestTube className="h-4 w-4 text-primary" />
                Kostenlose Probeteile
              </a>
            </div>
            <div className="text-sm font-semibold text-muted-foreground px-2 mb-2 mt-4">Wissen</div>
            <a 
              href="/ratgeber" 
              className="flex items-center gap-3 p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-4 w-4 text-primary" />
              Ratgeber
            </a>
            <Button
              variant="hero" 
              size="sm" 
              className="w-full mt-4" 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Angebot erhalten
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;