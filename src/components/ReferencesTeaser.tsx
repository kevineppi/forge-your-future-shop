import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Box } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Reference {
  id: string;
  title: string;
  material: string;
  quantity: number | null;
  industry: string;
  image_url: string | null;
}

const ReferencesTeaser = () => {
  const { data: references, isLoading } = useQuery({
    queryKey: ['references-teaser'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('references')
        .select('id, title, material, quantity, industry, image_url')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(4);
      
      if (error) throw error;
      return data as Reference[];
    }
  });

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aktuelle <span className="text-gradient">Referenzen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Erfolgreiche Kundenprojekte aus verschiedenen Branchen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-10">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="aspect-square w-full" />
                <CardContent className="p-3">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-1/2" />
                </CardContent>
              </Card>
            ))
          ) : references && references.length > 0 ? (
            references.map((ref) => (
              <a 
                key={ref.id} 
                href="/referenzen" 
                className="group"
              >
                <Card className="overflow-hidden hover:border-primary/50 transition-all hover:scale-[1.02] h-full">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    {ref.image_url ? (
                      <img 
                        src={ref.image_url} 
                        alt={ref.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <Box className="w-12 h-12 text-primary/30" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3 md:p-4">
                    <p className="font-semibold text-sm md:text-base line-clamp-1 mb-2 group-hover:text-primary transition-colors">
                      {ref.title}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded px-2 py-1">
                        <Layers className="w-3 h-3 text-primary shrink-0" />
                        <span className="truncate">{ref.material}</span>
                      </div>
                      {ref.quantity && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded px-2 py-1">
                          <Box className="w-3 h-3 text-primary shrink-0" />
                          <span>{ref.quantity}x</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Noch keine Referenzen vorhanden
            </div>
          )}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.location.href = '/referenzen'}
          >
            Alle Referenzen ansehen
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferencesTeaser;
