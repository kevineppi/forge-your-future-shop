import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient">EK-Druck</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Leistungen</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Über uns</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
            <Button variant="hero" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Angebot</Button>
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
            <a href="#portfolio" className="block text-foreground hover:text-primary transition-colors">Portfolio</a>
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