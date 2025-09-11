import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Wrench, 
  Palette, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Rapid Prototyping",
      description: "Turn your concepts into physical prototypes in just 24-48 hours. Perfect for product development and testing.",
      features: ["FDM & SLA printing", "Multiple material options", "Design optimization", "Quick turnaround"]
    },
    {
      icon: Wrench,
      title: "Custom Manufacturing",
      description: "Small to medium batch production runs with consistent quality and precision engineering.",
      features: ["Production-grade materials", "Quality assurance", "Scalable solutions", "Cost optimization"]
    },
    {
      icon: Palette,
      title: "Design Services",
      description: "Professional 3D modeling and design optimization services to bring your vision to life.",
      features: ["CAD modeling", "Design for manufacturing", "File preparation", "Technical consultation"]
    },
    {
      icon: Zap,
      title: "Express Service",
      description: "Need it fast? Our express service delivers high-quality prints in 12-24 hours.",
      features: ["Rush processing", "Priority queue", "24/7 production", "Same-day pickup"]
    },
    {
      icon: Shield,
      title: "Industrial Parts",
      description: "Durable, functional parts for industrial applications with engineering-grade materials.",
      features: ["High-strength materials", "Precision tolerance", "Functional testing", "Certification support"]
    },
    {
      icon: Clock,
      title: "Maintenance & Repair",
      description: "Bring new life to broken parts or create replacement components that are no longer available.",
      features: ["Reverse engineering", "Part recreation", "Material matching", "Durability testing"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From rapid prototyping to full production runs, we offer comprehensive 3D printing solutions 
            for every need and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 gradient-card border-0">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;