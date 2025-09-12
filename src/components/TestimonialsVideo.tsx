import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Quote, MapPin, Building } from "lucide-react";

const TestimonialsVideo = () => {
  const testimonials = [
    {
      name: "Ing. Michael Huber",
      company: "Huber Maschinenbau GmbH",
      location: "Wels, OÖ",
      rating: 5,
      text: "ekdruck e.U. hat uns bei der Entwicklung unserer neuen Maschinenserie hervorragend unterstützt. Die Prototypen waren millimetergenau und die Beratung zur Materialoptimierung war goldwert. Absolut empfehlenswert!",
      project: "Maschinenbau-Prototypen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Sarah Berger",
      company: "MedTech Solutions",
      location: "Linz, OÖ", 
      rating: 5,
      text: "Für unsere medizinischen Prototypen benötigten wir höchste Präzision und biokompatible Materialien. Das Team von ekdruck hat unsere Erwartungen übertroffen - professionell, schnell und zuverlässig.",
      project: "Medizintechnik-Prototypen",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Thomas Lechner",
      company: "Lechner Design Studio",
      location: "Salzburg",
      rating: 5,
      text: "Als Produktdesigner schätze ich die Zusammenarbeit mit ekdruck e.U. sehr. Die kurzen Lieferzeiten und die Möglichkeit, auch komplexe Geometrien zu realisieren, machen sie zu meinem bevorzugten Partner.",
      project: "Design-Prototypen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mag. Anna Steiner",
      company: "TU Graz - Institut für Maschinenbau",
      location: "Graz",
      rating: 5,
      text: "Für unsere Forschungsprojekte benötigen wir oft spezielle Bauteile in Kleinauflagen. ekdruck e.U. liefert konstant hohe Qualität und ist dabei noch regional und nachhaltig.",
      project: "Forschung & Entwicklung",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Klaus Mayr",
      company: "Mayr Automotive Parts",
      location: "Steyr, OÖ",
      rating: 5,
      text: "In der Automobilindustrie zählt jeder Tag. Der Express-Service von ekdruck hat uns schon mehrmals aus der Patsche geholfen. Qualität stimmt, Termine werden eingehalten - top!",
      project: "Automotive-Teile",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Hofer",
      company: "Hofer Architektur",
      location: "Innsbruck",
      rating: 5,
      text: "Für unsere Architekturmodelle ist ekdruck e.U. der perfekte Partner. Die Detailgenauigkeit ist beeindruckend und das nachhaltige Filament passt perfekt zu unserem umweltbewussten Ansatz.",
      project: "Architekturmodelle",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Das sagen unsere <span className="text-gradient">Kunden</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Über 500 zufriedene Kunden aus ganz Österreich vertrauen bereits auf unseren 3D-Druck Service
          </p>
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Zufriedene Kunden</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5000+</div>
            <div className="text-muted-foreground">Projekte realisiert</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">⭐ Kundenbewertung</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Weiterempfehlung</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card border-0 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="w-3 h-3" />
                      <span className="font-medium">{testimonial.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit text-xs">
                  {testimonial.project}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <div className="mt-16">
          <Card className="gradient-card border-0 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="relative bg-muted/50 rounded-lg aspect-video flex items-center justify-center mb-6">
                <Button variant="outline" size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  Video-Testimonials ansehen
                </Button>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Sehen Sie, was unsere Kunden über uns sagen
              </h3>
              <p className="text-muted-foreground">
                Erfahren Sie in kurzen Videos, warum Unternehmen aus ganz Österreich 
                auf ekdruck e.U. vertrauen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsVideo;