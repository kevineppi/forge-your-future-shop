import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ekdruck e.U.</h3>
            <p className="text-muted-foreground mb-6">
              Hochwertiger 3D-Druck für maßgeschneiderte Prototypen, Kleinserien und 
              individuelle Fertigungslösungen aus Oberösterreich. Nachhaltig und regional.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Einzelanfertigungen</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Nachhaltige Inneneinrichtung</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Serienfertigung</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Express-Service</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Technischer Entwurf</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Beratung</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Materialien</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">Österreichisches Filament</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">PLA & PLA+</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">PETG</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">ABS</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Flexible Materialien</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Alle Farben</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">office@ek-druck.at</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">+43 676 5517197</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-0.5" />
                <div className="text-sm">
                  <div>Negrellistraße 15
4623 Gunskirchen
Oberösterreidch</div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ekdruck e.U. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;