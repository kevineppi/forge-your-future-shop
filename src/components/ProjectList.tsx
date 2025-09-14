import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/pages/Dashboard";
import { Download, CreditCard, Eye, Calendar, HardDrive } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProjectListProps {
  projects: Project[];
  onProjectUpdate: () => void;
}

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  uploaded: { label: "Hochgeladen", variant: "outline" },
  analyzing: { label: "Wird analysiert", variant: "secondary" },
  quote_ready: { label: "Angebot bereit", variant: "default" },
  quote_sent: { label: "Angebot gesendet", variant: "default" },
  paid: { label: "Bezahlt", variant: "default" },
  in_production: { label: "In Produktion", variant: "secondary" },
  completed: { label: "Abgeschlossen", variant: "default" },
  cancelled: { label: "Storniert", variant: "destructive" },
};

export const ProjectList = ({ projects, onProjectUpdate }: ProjectListProps) => {
  const { toast } = useToast();

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatPrice = (price?: number) => {
    if (!price) return "Noch nicht berechnet";
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const handleDownloadQuote = (quoteUrl: string, projectName: string) => {
    const link = document.createElement("a");
    link.href = quoteUrl;
    link.download = `Angebot_${projectName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePayment = async (project: Project) => {
    // TODO: Implement Stripe payment
    toast({
      title: "Payment-Feature",
      description: "Die Bezahlfunktion wird bald implementiert.",
    });
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-muted-foreground mb-4">
          <HardDrive className="h-12 w-12 mx-auto mb-2" />
          <p className="text-lg">Noch keine Projekte</p>
          <p className="text-sm">Laden Sie Ihre erste STL- oder 3MF-Datei hoch</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{project.name}</CardTitle>
                {project.description && (
                  <CardDescription className="mt-1">
                    {project.description}
                  </CardDescription>
                )}
              </div>
              <Badge
                variant={statusLabels[project.status]?.variant || "outline"}
              >
                {statusLabels[project.status]?.label || project.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(project.created_at).toLocaleDateString("de-DE")}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <HardDrive className="h-4 w-4" />
                {formatFileSize(project.file_size)}
              </div>
              {project.volume_cm3 && (
                <div className="text-sm text-muted-foreground">
                  Volumen: {project.volume_cm3} cm³
                </div>
              )}
              {project.material && (
                <div className="text-sm text-muted-foreground">
                  Material: {project.material}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {project.estimated_price && (
                <div>
                  <span className="text-sm font-medium">Geschätzter Preis: </span>
                  <span className="text-sm">{formatPrice(project.estimated_price)}</span>
                </div>
              )}
              {project.final_price && (
                <div>
                  <span className="text-sm font-medium">Finaler Preis: </span>
                  <span className="text-sm font-semibold">{formatPrice(project.final_price)}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Details
              </Button>
              
              {project.quote_file_url && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownloadQuote(project.quote_file_url!, project.name)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Angebot herunterladen
                </Button>
              )}
              
              {project.status === "quote_sent" && project.final_price && (
                <Button
                  size="sm"
                  onClick={() => handlePayment(project)}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Jetzt bezahlen ({formatPrice(project.final_price)})
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};