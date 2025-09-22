import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from "lucide-react";

// Mock blog post data - In a real app, this would come from an API/CMS
const blogPost = {
  id: 1,
  title: "FDM 3D-Druck Material Guide 2024: PLA vs. PETG vs. ABS",
  excerpt: "Ein umfassender Vergleich der beliebtesten FDM 3D-Druck Materialien. Erfahren Sie, welches Material für Ihr Projekt am besten geeignet ist und wie Sie optimale Druckergebnisse erzielen.",
  content: `
    <h2>Die wichtigsten FDM 3D-Druck Materialien im Überblick</h2>
    
    <p>Bei der Auswahl des richtigen Materials für Ihr FDM 3D-Druck Projekt spielen verschiedene Faktoren eine entscheidende Rolle. In diesem umfassenden Guide vergleichen wir die drei beliebtesten Materialien: PLA, PETG und ABS.</p>
    
    <h3>PLA (Polylactic Acid) - Der Allrounder</h3>
    
    <p><strong>PLA</strong> ist das am häufigsten verwendete Material im FDM 3D-Druck und besonders für Einsteiger geeignet. Es handelt sich um einen biobasierten Kunststoff, der aus erneuerbaren Rohstoffen wie Maisstärke hergestellt wird.</p>
    
    <h4>Vorteile von PLA:</h4>
    <ul>
      <li>Einfache Verarbeitung bei niedrigen Temperaturen (190-220°C)</li>
      <li>Minimales Warping (Verziehen)</li>
      <li>Geringer Geruch beim Drucken</li>
      <li>Glänzende, glatte Oberfläche</li>
      <li>Breite Farbauswahl verfügbar</li>
      <li>Biologisch abbaubar</li>
    </ul>
    
    <h4>Nachteile von PLA:</h4>
    <ul>
      <li>Geringe Hitzebeständigkeit (60°C)</li>
      <li>Spröde bei mechanischer Belastung</li>
      <li>Nicht für Außenanwendungen geeignet</li>
    </ul>
    
    <h3>PETG (Polyethylene Terephthalate Glycol) - Der Kompromiss</h3>
    
    <p><strong>PETG</strong> kombiniert die einfache Verarbeitung von PLA mit der Robustheit von ABS. Es ist chemisch beständig, transparent und recycelbar.</p>
    
    <h4>Vorteile von PETG:</h4>
    <ul>
      <li>Hohe Schlagzähigkeit und Flexibilität</li>
      <li>Chemische Beständigkeit</li>
      <li>Transparent druckbar</li>
      <li>Lebensmittelecht (FDA-zugelassen)</li>
      <li>Gute Schichthaftung</li>
      <li>Recycelbar</li>
    </ul>
    
    <h4>Druckeinstellungen für PETG:</h4>
    <ul>
      <li>Drucktemperatur: 220-250°C</li>
      <li>Betttemperatur: 70-80°C</li>
      <li>Druckgeschwindigkeit: 30-60 mm/s</li>
    </ul>
    
    <h3>ABS (Acrylonitrile Butadiene Styrene) - Der Robuste</h3>
    
    <p><strong>ABS</strong> ist ein technischer Kunststoff, der sich durch hohe Festigkeit und Temperaturbeständigkeit auszeichnet. Es wird häufig in der Automobilindustrie und für funktionale Prototypen verwendet.</p>
    
    <h4>Vorteile von ABS:</h4>
    <ul>
      <li>Hohe Festigkeit und Zähigkeit</li>
      <li>Hitzebeständigkeit bis 100°C</li>
      <li>Gute chemische Beständigkeit</li>
      <li>Nachbearbeitbar mit Aceton</li>
      <li>Langlebig und UV-beständig</li>
    </ul>
    
    <h4>Herausforderungen bei ABS:</h4>
    <ul>
      <li>Neigung zum Warping</li>
      <li>Höhere Drucktemperaturen erforderlich</li>
      <li>Geruchsentwicklung beim Drucken</li>
      <li>Beheiztes Druckbett notwendig</li>
    </ul>
    
    <h2>Materialauswahl: Welches Material für welchen Zweck?</h2>
    
    <h3>PLA eignet sich für:</h3>
    <ul>
      <li>Prototypen und Modelle</li>
      <li>Dekorative Objekte</li>
      <li>Spielzeug und Gadgets</li>
      <li>Erste 3D-Druck Projekte</li>
    </ul>
    
    <h3>PETG ist ideal für:</h3>
    <ul>
      <li>Mechanische Bauteile</li>
      <li>Behälter und Verschlüsse</li>
      <li>Transparente Objekte</li>
      <li>Medizinische Anwendungen</li>
    </ul>
    
    <h3>ABS verwenden Sie für:</h3>
    <ul>
      <li>Funktionale Prototypen</li>
      <li>Automobilteile</li>
      <li>Gehäuse und Verkleidungen</li>
      <li>Werkzeuge und Vorrichtungen</li>
    </ul>
    
    <h2>Tipps für optimale Druckergebnisse</h2>
    
    <p>Unabhängig vom gewählten Material sind einige grundlegende Prinzipien für erfolgreichen FDM 3D-Druck wichtig:</p>
    
    <ol>
      <li><strong>Kalibrierung:</strong> Eine präzise Bett-Nivellierung ist entscheidend</li>
      <li><strong>Temperaturmanagement:</strong> Verwenden Sie die empfohlenen Temperaturen</li>
      <li><strong>Druckgeschwindigkeit:</strong> Langsameres Drucken führt oft zu besseren Ergebnissen</li>
      <li><strong>Belüftung:</strong> Besonders bei ABS für Sicherheit und Qualität wichtig</li>
      <li><strong>Lagerung:</strong> Halten Sie Filamente trocken und staubfrei</li>
    </ol>
    
    <h2>Fazit: Die richtige Materialwahl treffen</h2>
    
    <p>Die Wahl des richtigen 3D-Druck Materials hängt stark von Ihrem spezifischen Anwendungsfall ab. PLA ist der perfekte Einstieg, PETG bietet einen guten Kompromiss aus Verarbeitbarkeit und Eigenschaften, während ABS für anspruchsvolle technische Anwendungen die beste Wahl darstellt.</p>
    
    <p>Bei <strong>ekdruck e.U.</strong> beraten wir Sie gerne bei der Materialauswahl für Ihr individuelles 3D-Druck Projekt. Kontaktieren Sie uns für eine persönliche Beratung und profitieren Sie von unserer langjährigen Erfahrung im professionellen FDM 3D-Druck.</p>
  `,
  category: "Materialien",
  author: "Thomas Ecker",
  date: "2024-01-15",
  readTime: "8 Min",
  image: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
  tags: ["FDM", "Materialien", "PLA", "PETG", "ABS", "3D-Druck Guide"]
};

const BlogPost = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = `${blogPost.title} | ekdruck e.U. Blog`;
  }, []);

  return (
    <>
      <SEOHead 
        title={`${blogPost.title} | ekdruck e.U. Blog`}
        description={blogPost.excerpt}
        keywords={blogPost.tags.join(", ")}
        path={`/blog/${id}`}
        type="article"
        image={blogPost.image}
      />
      <StructuredData type="article" data={blogPost} />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Header */}
        <header className="relative py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{blogPost.category}</Badge>
                {blogPost.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPost.date).toLocaleDateString('de-DE', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPost.readTime} Lesezeit
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="secondary" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Teilen
                </Button>
                <Button variant="outline" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Lesezeichen
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-card">
                <img 
                  src={blogPost.image} 
                  alt={blogPost.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
              
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              <Separator className="my-8" />
              
              {/* Author Box */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{blogPost.author}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Geschäftsführer bei ekdruck e.U.
                      </p>
                      <p className="text-sm">
                        Mit über 10 Jahren Erfahrung im 3D-Druck ist Thomas Experte für FDM-Verfahren 
                        und berät Kunden österreichweit bei ihren 3D-Druck Projekten.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Table of Contents */}
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Inhaltsverzeichnis</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#overview" className="block text-muted-foreground hover:text-primary transition-colors">
                        Die wichtigsten FDM Materialien
                      </a>
                      <a href="#pla" className="block text-muted-foreground hover:text-primary transition-colors">
                        PLA - Der Allrounder
                      </a>
                      <a href="#petg" className="block text-muted-foreground hover:text-primary transition-colors">
                        PETG - Der Kompromiss
                      </a>
                      <a href="#abs" className="block text-muted-foreground hover:text-primary transition-colors">
                        ABS - Der Robuste
                      </a>
                      <a href="#selection" className="block text-muted-foreground hover:text-primary transition-colors">
                        Materialauswahl-Guide
                      </a>
                      <a href="#tips" className="block text-muted-foreground hover:text-primary transition-colors">
                        Tipps für optimale Ergebnisse
                      </a>
                    </nav>
                  </CardContent>
                </Card>
                
                {/* CTA */}
                <Card className="shadow-card gradient-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2">Ihr 3D-Druck Projekt</h3>
                    <p className="text-sm mb-4 text-primary-foreground/90">
                      Benötigen Sie professionellen 3D-Druck Service? Wir beraten Sie gerne bei der Materialauswahl.
                    </p>
                    <Button variant="secondary" className="w-full">
                      Angebot anfordern
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;