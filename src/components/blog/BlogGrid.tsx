import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock blog data - In a real app, this would come from an API/CMS
const blogPosts = [
  {
    id: 1,
    title: "FDM 3D-Druck Material Guide 2024: PLA vs. PETG vs. ABS",
    excerpt: "Ein umfassender Vergleich der beliebtesten FDM 3D-Druck Materialien. Erfahren Sie, welches Material für Ihr Projekt am besten geeignet ist und wie Sie optimale Druckergebnisse erzielen.",
    category: "Materialien",
    author: "Thomas Ecker",
    date: "2024-01-15",
    readTime: "8 Min",
    image: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
    featured: true,
    tags: ["FDM", "Materialien", "PLA", "PETG", "ABS"]
  },
  {
    id: 2,
    title: "Rapid Prototyping: Von der Idee zum fertigen Prototyp in 24h",
    excerpt: "Entdecken Sie, wie Rapid Prototyping Ihren Entwicklungsprozess revolutioniert. Mit modernen FDM 3D-Druckern können Prototypen in Rekordzeit erstellt werden.",
    category: "Prototyping",
    author: "Thomas Ecker",
    date: "2024-01-10",
    readTime: "6 Min",
    image: "/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
    featured: false,
    tags: ["Rapid Prototyping", "Innovation", "Entwicklung"]
  },
  {
    id: 3,
    title: "3D-Druck Nachbearbeitung: Finishing-Techniken für perfekte Oberflächen",
    excerpt: "Professionelle Finishing-Techniken für 3D-gedruckte Bauteile. Von Schleifen über Lackieren bis hin zu chemischen Glättungsverfahren.",
    category: "Finishing",
    author: "Thomas Ecker",
    date: "2024-01-05",
    readTime: "10 Min",
    image: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
    featured: false,
    tags: ["Finishing", "Nachbearbeitung", "Qualität"]
  }
];

const BlogGrid = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      {featuredPost && (
        <Card className="overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
            <CardContent className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  {featuredPost.tags.slice(0, 2).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString('de-DE')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button className="group/btn">
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      )}

      {/* Regular Articles Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {regularPosts.map(post => (
          <Card key={post.id} className="overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 group cursor-pointer">
            <Link to={`/blog/${post.id}`} className="block">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('de-DE')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;