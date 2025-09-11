import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Zap, 
  Target,
  CheckCircle 
} from "lucide-react";

const About = () => {
  const capabilities = [
    "FDM (Fused Deposition Modeling)",
    "SLA (Stereolithography)",
    "SLS (Selective Laser Sintering)",
    "Multi-Material Printing",
    "Large Format Printing (up to 400mm³)",
    "High-Resolution Fine Detail"
  ];

  const materials = [
    "PLA & PLA+",
    "PETG",
    "ABS",
    "TPU (Flexible)",
    "Carbon Fiber Composites",
    "Wood-filled Filaments",
    "Metal-filled Filaments",
    "Biocompatible Resins",
    "Castable Resins",
    "Engineering Plastics"
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every print meets exact specifications with tolerances as tight as ±0.1mm"
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast turnaround times without compromising on quality or attention to detail"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients from initial concept through final delivery"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality results on every project"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">3D Forge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 5 years of experience in additive manufacturing, we're passionate about 
            transforming digital designs into physical reality with precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019, 3D Forge began as a vision to democratize manufacturing through 
                accessible, high-quality 3D printing services. What started in a small workshop 
                has grown into a full-service additive manufacturing facility.
              </p>
              <p>
                Today, we serve clients ranging from individual inventors and small startups to 
                Fortune 500 companies, helping them bring innovative products to market faster 
                and more cost-effectively than traditional manufacturing methods.
              </p>
              <p>
                Our state-of-the-art facility houses the latest in 3D printing technology, 
                operated by skilled technicians who understand both the art and science of 
                additive manufacturing.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities and Materials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="gradient-card border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                Printing Capabilities
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-secondary" />
                Available Materials
              </h3>
              <div className="flex flex-wrap gap-2">
                {materials.map((material, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {material}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;