import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Tag, Mail } from "lucide-react";

const BlogSidebar = () => {
  const popularTags = [
    "FDM 3D-Druck", "Rapid Prototyping", "Materialien", "PLA", "PETG", "ABS",
    "Finishing", "Nachbearbeitung", "Innovation", "Trends", "Tutorial", "Guide"
  ];

  const recentPosts = [
    {
      title: "Die Zukunft des 3D-Drucks: Neue Materialien 2024",
      date: "15. Jan 2024"
    },
    {
      title: "Kosten sparen mit intelligentem 3D-Druck Design",
      date: "12. Jan 2024"
    },
    {
      title: "5 häufige FDM 3D-Druck Fehler vermeiden",
      date: "8. Jan 2024"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Blog durchsuchen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input 
              placeholder="Suchbegriff eingeben..." 
              className="flex-1"
            />
            <Button size="icon" variant="secondary">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="shadow-card gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Bleiben Sie auf dem Laufenden über die neuesten 3D-Druck Trends und erhalten Sie exklusive Tipps direkt in Ihr Postfach.
          </p>
          <div className="space-y-2">
            <Input placeholder="Ihre E-Mail Adresse" />
            <Button className="w-full" variant="cta">
              Anmelden
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Beliebte Themen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(tag => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Neueste Artikel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                <h4 className="text-sm font-medium hover:text-primary cursor-pointer transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {post.date}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Card */}
      <Card className="shadow-card gradient-primary text-primary-foreground">
        <CardContent className="p-6">
          <h3 className="font-bold mb-2">Haben Sie Fragen?</h3>
          <p className="text-sm mb-4 text-primary-foreground/90">
            Unsere 3D-Druck Experten beraten Sie gerne persönlich zu Ihrem Projekt.
          </p>
          <Button variant="secondary" className="w-full">
            Kontakt aufnehmen
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;