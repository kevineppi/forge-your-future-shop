import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsWidget = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">5.0</span>
          </div>
          <p className="text-muted-foreground">Basierend auf 21 verifizierten Kundenbewertungen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="gradient-card border-0 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-3 italic">"Hervorragende Qualität und superschnelle Lieferung. Werden wir definitiv wieder beauftragen!"</p>
              <p className="text-xs text-muted-foreground font-medium">— Michael K., Wien</p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-3 italic">"Perfekte Prototypen für unsere Produktentwicklung. Nachhaltige Materialien aus Österreich!"</p>
              <p className="text-xs text-muted-foreground font-medium">— Lisa S., Linz</p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-3 italic">"Kompetente Beratung und faire Preise. Top 3D-Druck Service in Österreich!"</p>
              <p className="text-xs text-muted-foreground font-medium">— Thomas B., Graz</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/maps/place/ekdruck+e.U.+%7C+3D-Druck/@48.1295256,13.9462736,17z/data=!4m8!3m7!1s0x4773f3f9134767df:0x738fc33072668317!8m2!3d48.129522!4d13.9488485!9m1!1b1!16s%2Fg%2F11vztpkz0f?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Alle Bewertungen auf Google ansehen →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsWidget;