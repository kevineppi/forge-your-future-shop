import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Aerospace Component",
      category: "industrial",
      material: "Titanium Alloy",
      image: "/placeholder.svg",
      description: "High-precision aerospace component with complex internal geometry."
    },
    {
      id: 2,
      title: "Medical Device Prototype",
      category: "medical",
      material: "Biocompatible Resin",
      image: "/placeholder.svg",
      description: "FDA-compliant medical device prototype for surgical applications."
    },
    {
      id: 3,
      title: "Automotive Tool",
      category: "automotive",
      material: "Carbon Fiber PETG",
      image: "/placeholder.svg",
      description: "Custom automotive assembly tool for manufacturing line."
    },
    {
      id: 4,
      title: "Architectural Model",
      category: "architecture",
      material: "PLA+",
      image: "/placeholder.svg",
      description: "Detailed architectural scale model for client presentation."
    },
    {
      id: 5,
      title: "Consumer Product",
      category: "consumer",
      material: "PETG",
      image: "/placeholder.svg",
      description: "Consumer electronics housing with integrated cable management."
    },
    {
      id: 6,
      title: "Jewelry Design",
      category: "jewelry",
      material: "Castable Resin",
      image: "/placeholder.svg",
      description: "Intricate jewelry design with fine detail and smooth finish."
    }
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "industrial", label: "Industrial" },
    { value: "medical", label: "Medical" },
    { value: "automotive", label: "Automotive" },
    { value: "architecture", label: "Architecture" },
    { value: "consumer", label: "Consumer" },
    { value: "jewelry", label: "Jewelry" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our diverse range of 3D printing projects across multiple industries and applications.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className="mb-2"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-card transition-all duration-300 overflow-hidden gradient-card border-0">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {project.material}
                  </span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                    View Details →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;