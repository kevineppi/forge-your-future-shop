import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ekdruck e.U.</h3>
            <p className="text-muted-foreground mb-6">
              Spezialist für Architektur- und Messemodelle aus dem 3D-Druck.
              B2B-Service für Architekturbüros in ganz Österreich.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/ekdruck/" target="_blank" rel="noopener noreferrer" aria-label="ekdruck auf Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/3d-druck/" target="_blank" rel="noopener noreferrer" aria-label="ekdruck auf LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/architekturmodelle-abo" className="hover:text-primary transition-colors font-medium text-foreground">Flatrate für Architekturbüros</Link></li>
              <li><Link to="/kostenrechner" className="hover:text-primary transition-colors font-medium text-foreground">3D-Druck Kostenrechner</Link></li>
              <li><Link to="/firmenkunden" className="hover:text-primary transition-colors">Firmenkunden &amp; B2B</Link></li>
              <li><Link to="/architekturmodelle" className="hover:text-primary transition-colors">Architekturmodelle</Link></li>
              <li><Link to="/messemodelle" className="hover:text-primary transition-colors">Messemodelle</Link></li>
              <li><Link to="/rapid-prototyping" className="hover:text-primary transition-colors">Rapid Prototyping</Link></li>
              <li><Link to="/einzelanfertigungen" className="hover:text-primary transition-colors">Einzelanfertigungen</Link></li>
              <li><Link to="/fdm-3d-druck" className="hover:text-primary transition-colors">FDM 3D-Druck</Link></li>
            </ul>
          </div>

          {/* Top Regional Pages */}
          <div>
            <h4 className="font-semibold mb-4">3D-Druck Regionen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/3d-druck-wien" className="hover:text-primary transition-colors">3D-Druck Wien</Link></li>
              <li><Link to="/3d-druck-graz" className="hover:text-primary transition-colors">3D-Druck Graz</Link></li>
              <li><Link to="/3d-druck-linz" className="hover:text-primary transition-colors">3D-Druck Linz</Link></li>
              <li><Link to="/3d-druck-salzburg" className="hover:text-primary transition-colors">3D-Druck Salzburg</Link></li>
              <li><Link to="/3d-druck-innsbruck" className="hover:text-primary transition-colors">3D-Druck Innsbruck</Link></li>
              <li><Link to="/3d-druck-klagenfurt" className="hover:text-primary transition-colors">3D-Druck Klagenfurt</Link></li>
              <li><Link to="/referenzen" className="hover:text-primary transition-colors">Referenzen</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Wissen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/ratgeber" className="hover:text-primary transition-colors">Ratgeber</Link></li>
              <li><Link to="/ratgeber/kosten-guide" className="hover:text-primary transition-colors">3D-Druck Kosten-Guide</Link></li>
              <li><Link to="/ratgeber/material-guide" className="hover:text-primary transition-colors">Material-Guide</Link></li>
              <li><Link to="/ratgeber/architekturmodell-guide" className="hover:text-primary transition-colors">Architekturmodell-Guide</Link></li>
              <li><Link to="/ratgeber/architekturmodell-flatrate" className="hover:text-primary transition-colors">Flatrate-Guide für Büros</Link></li>
              <li><Link to="/ratgeber/messemodell-guide" className="hover:text-primary transition-colors">Messemodell-Guide</Link></li>
              <li><Link to="/glossar" className="hover:text-primary transition-colors">3D-Druck Glossar</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <a href="mailto:office@ek-druck.at" className="text-sm hover:text-primary transition-colors">office@ek-druck.at</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <a href="tel:+436765517197" className="text-sm hover:text-primary transition-colors">+43 676 5517197</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-0.5" />
                <div className="text-sm">
                  <div>Negrellistraße 15</div>
                  <div>4623 Gunskirchen</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 ekdruck e.U. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center space-x-6 mt-4 md:mt-0">
            <Link to="/impressum" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
