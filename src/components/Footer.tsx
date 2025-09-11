import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">3D Forge</h3>
            <p className="text-muted-foreground mb-6">
              Transforming digital designs into physical reality with precision, 
              speed, and innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Rapid Prototyping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Manufacturing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Express Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Industrial Parts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Maintenance & Repair</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Design Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Material Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">File Preparation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">hello@3dforge.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-0.5" />
                <div className="text-sm">
                  <div>123 Innovation Drive</div>
                  <div>Tech City, TC 12345</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 3D Forge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;