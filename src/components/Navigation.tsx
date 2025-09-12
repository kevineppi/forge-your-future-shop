import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Erfolgreich abgemeldet",
        description: "Sie wurden erfolgreich abgemeldet.",
      });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Fehler beim Abmelden.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity duration-300">
              <img 
                src="/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png" 
                alt="ekdruck e.U. - 3D-Druck Oberösterreich Logo" 
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Leistungen</a>
            <a href="#advantages" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Vorteile</a>
            <a href="#cost-calculator" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Preisrechner</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Über uns</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Kontakt</a>
            
            {user ? (
              <div className="flex items-center space-x-4 ml-4">
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Admin
                    </Button>
                  </Link>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {user.email}
                </div>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Abmelden
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 ml-4">
                <Link to="/auth">
                  <Button variant="outline" size="sm">
                    Anmelden
                  </Button>
                </Link>
                <Button variant="hero" size="lg" className="hover:scale-105 transition-transform duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Angebot erhalten
                </Button>
              </div>
            )}
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
          <div className="md:hidden pb-4 space-y-4 animate-fade-in">
            <a href="#services" className="block text-foreground hover:text-primary transition-colors">Leistungen</a>
            <a href="#advantages" className="block text-foreground hover:text-primary transition-colors">Vorteile</a>
            <a href="#cost-calculator" className="block text-foreground hover:text-primary transition-colors">Preisrechner</a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">Über uns</a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Kontakt</a>
            
            {user ? (
              <div className="space-y-3 pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {user.email}
                </div>
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Admin Dashboard
                    </Button>
                  </Link>
                )}
                <Button variant="outline" size="sm" className="w-full flex items-center gap-2" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4" />
                  Abmelden
                </Button>
              </div>
            ) : (
              <div className="space-y-3 pt-2 border-t border-border">
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="w-full">
                    Anmelden
                  </Button>
                </Link>
                <Button variant="hero" size="sm" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Angebot erhalten
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;