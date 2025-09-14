import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileUpload } from "@/components/FileUpload";
import { ProjectList } from "@/components/ProjectList";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Upload, FolderOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface Project {
  id: string;
  name: string;
  description?: string;
  file_url: string;
  file_name: string;
  file_size: number;
  volume_cm3?: number;
  material?: string;
  complexity_level: number;
  estimated_price?: number;
  final_price?: number;
  quote_file_url?: string;
  status: string;
  payment_intent_id?: string;
  created_at: string;
  updated_at: string;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    fetchProjects();
  }, [user, navigate]);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: "Projekte konnten nicht geladen werden.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: "Abmeldung fehlgeschlagen.",
        variant: "destructive",
      });
    }
  };

  const handleProjectUploaded = () => {
    fetchProjects();
    toast({
      title: "Projekt hochgeladen",
      description: "Ihr Projekt wird analysiert...",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Lade Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">3D-Druck Dashboard</h1>
            <p className="text-muted-foreground">Willkommen, {user?.email}</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Abmelden
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Neues Projekt hochladen
              </CardTitle>
              <CardDescription>
                Laden Sie eine STL- oder 3MF-Datei hoch für ein Angebot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUpload onProjectUploaded={handleProjectUploaded} />
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="h-5 w-5" />
                Meine Projekte
                <Badge variant="secondary">{projects.length}</Badge>
              </CardTitle>
              <CardDescription>
                Übersicht über alle Ihre 3D-Druck-Projekte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectList projects={projects} onProjectUpdate={fetchProjects} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;