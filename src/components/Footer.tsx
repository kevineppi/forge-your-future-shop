import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ekdruck e.U.</h3>
            <p className="text-muted-foreground mb-6">
              Hochwertiger 3D-Druck für Modellbau, Dekoration und 
              individuelle Geschenke aus Oberösterreich. Nachhaltig und regional.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/ekdruck/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/fdm-3d-druck" className="hover:text-primary transition-colors">FDM 3D-Druck</a></li>
              <li><a href="/3d-druck-materialien" className="hover:text-primary transition-colors">3D-Druck Materialien</a></li>
              <li><a href="/einzelanfertigungen" className="hover:text-primary transition-colors">Einzelanfertigungen</a></li>
              <li><a href="/kontakt" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Target Groups */}
          <div>
            <h4 className="font-semibold mb-4">Zielgruppen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/architekturmodelle" className="hover:text-primary transition-colors">Architekturmodelle</a></li>
              <li><a href="/messemodelle" className="hover:text-primary transition-colors">Messemodelle</a></li>
              <li><a href="/kunstobjekte" className="hover:text-primary transition-colors">Kunstobjekte</a></li>
              <li><a href="/firmenkunden" className="hover:text-primary transition-colors">Firmenkunden</a></li>
              <li><a href="/referenzen" className="hover:text-primary transition-colors">Referenzen</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Wissen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/ratgeber" className="hover:text-primary transition-colors">Ratgeber</a></li>
              <li><a href="/ratgeber/kosten-guide" className="hover:text-primary transition-colors">Kosten-Guide</a></li>
              <li><a href="/ratgeber/material-guide" className="hover:text-primary transition-colors">Material-Guide</a></li>
              <li><a href="/glossar" className="hover:text-primary transition-colors">3D-Druck Glossar</a></li>
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
                  <div>Negrellistraße 15</div>
                  <div>4623 Gunskirchen</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Messemodelle Regional - Wichtigste SEO-Seiten */}
        <div className="mt-12 pt-8 border-t border-border">
          <h4 className="font-semibold mb-4">Messemodelle in Österreich</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm text-muted-foreground">
            <a href="/messemodelle/wien" className="hover:text-primary transition-colors">Wien</a>
            <a href="/messemodelle/oberoesterreich" className="hover:text-primary transition-colors">Oberösterreich</a>
            <a href="/messemodelle/niederoesterreich" className="hover:text-primary transition-colors">Niederösterreich</a>
            <a href="/messemodelle/steiermark" className="hover:text-primary transition-colors">Steiermark</a>
            <a href="/messemodelle/salzburg" className="hover:text-primary transition-colors">Salzburg</a>
            <a href="/messemodelle/kaernten" className="hover:text-primary transition-colors">Kärnten</a>
            <a href="/messemodelle/tirol" className="hover:text-primary transition-colors">Tirol</a>
            <a href="/messemodelle/vorarlberg" className="hover:text-primary transition-colors">Vorarlberg</a>
            <a href="/messemodelle/burgenland" className="hover:text-primary transition-colors">Burgenland</a>
            <a href="/messemodelle/linz" className="hover:text-primary transition-colors">Linz</a>
            <a href="/messemodelle/graz" className="hover:text-primary transition-colors">Graz</a>
            <a href="/messemodelle/innsbruck" className="hover:text-primary transition-colors">Innsbruck</a>
            <a href="/messemodelle/klagenfurt" className="hover:text-primary transition-colors">Klagenfurt</a>
            <a href="/messemodelle/villach" className="hover:text-primary transition-colors">Villach</a>
            <a href="/messemodelle/wels" className="hover:text-primary transition-colors">Wels</a>
            <a href="/messemodelle/st-poelten" className="hover:text-primary transition-colors">St. Pölten</a>
            <a href="/messemodelle/dornbirn" className="hover:text-primary transition-colors">Dornbirn</a>
            <a href="/messemodelle/gunskirchen" className="hover:text-primary transition-colors">Gunskirchen</a>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ekdruck e.U. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;