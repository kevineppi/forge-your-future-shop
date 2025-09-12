import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png" 
              alt="EK-Druck Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium">Leistungen</a>
            <a href="#advantages" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium">Vorteile</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium">Über uns</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium">Kontakt</a>
            <Button variant="hero" size="lg" className="ml-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Angebot erhalten</Button>
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
          <div className="md:hidden pb-4 space-y-4">
            <a href="#services" className="block text-foreground hover:text-primary transition-colors">Leistungen</a>
            <a href="#advantages" className="block text-foreground hover:text-primary transition-colors">Vorteile</a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">Über uns</a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Kontakt</a>
            <Button variant="hero" size="sm" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Angebot</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;