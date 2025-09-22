import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Users } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 bg-card/20 backdrop-blur-sm border-primary/20">
          <BookOpen className="w-4 h-4 mr-2" />
          3D-Druck Expertenwissen
        </Badge>
        
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-foreground">
          3D-Druck Blog
          <span className="block text-3xl lg:text-5xl mt-2 text-primary-glow">
            Wissen, das bewegt
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Entdecken Sie die neuesten Trends, Tipps und Technologien im 3D-Druck. 
          Von FDM-Verfahren bis Rapid Prototyping - hier finden Sie Expertenwissen aus erster Hand.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">50+ Artikel</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Aktuelle Trends</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Expertenratgeber</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;