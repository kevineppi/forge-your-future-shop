import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Upload, File, X, Loader2 } from "lucide-react";

interface FileUploadProps {
  onProjectUploaded: () => void;
}

export const FileUpload = ({ onProjectUploaded }: FileUploadProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      const isValidType = file.name.toLowerCase().endsWith('.stl') || 
                         file.name.toLowerCase().endsWith('.3mf');
      const isValidSize = file.size <= 50 * 1024 * 1024; // 50MB limit
      
      if (!isValidType) {
        toast({
          title: "Ungültiger Dateityp",
          description: "Nur STL- und 3MF-Dateien sind erlaubt.",
          variant: "destructive",
        });
      }
      
      if (!isValidSize) {
        toast({
          title: "Datei zu groß",
          description: "Die maximale Dateigröße beträgt 50MB.",
          variant: "destructive",
        });
      }
      
      return isValidType && isValidSize;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/octet-stream': ['.stl'],
      'application/vnd.ms-package.3dmanufacturing-3dmodel+xml': ['.3mf']
    },
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const uploadProject = async () => {
    if (!user || uploadedFiles.length === 0 || !projectName.trim()) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle erforderlichen Felder aus.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const file = uploadedFiles[0]; // Use first file for now
      const fileName = `${user.id}/${Date.now()}_${file.name}`;
      
      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('project-files')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('project-files')
        .getPublicUrl(fileName);

      // Create project record
      const { error: insertError } = await supabase
        .from('projects')
        .insert({
          user_id: user.id,
          name: projectName,
          description: description || null,
          file_url: publicUrl,
          file_name: file.name,
          file_size: file.size,
          status: 'uploaded'
        });

      if (insertError) throw insertError;

      // Reset form
      setUploadedFiles([]);
      setProjectName("");
      setDescription("");
      onProjectUploaded();

      toast({
        title: "Projekt erstellt",
        description: "Ihr Projekt wurde erfolgreich hochgeladen und wird analysiert.",
      });
    } catch (error: any) {
      toast({
        title: "Upload-Fehler",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Project Details */}
      <div className="grid gap-4">
        <div>
          <Label htmlFor="projectName">Projektname *</Label>
          <Input
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Mein 3D-Projekt"
          />
        </div>
        <div>
          <Label htmlFor="description">Beschreibung (optional)</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Details zu Ihrem Projekt..."
            rows={3}
          />
        </div>
      </div>

      {/* File Drop Zone */}
      <Card>
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-primary bg-primary/5'
                : 'border-muted-foreground/25 hover:border-primary/50'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
            {isDragActive ? (
              <p className="text-lg">Datei hier ablegen...</p>
            ) : (
              <div>
                <p className="text-lg mb-2">
                  STL- oder 3MF-Datei hier ablegen oder klicken zum Auswählen
                </p>
                <p className="text-sm text-muted-foreground">
                  Maximale Größe: 50MB
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <Label>Hochgeladene Dateien:</Label>
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-muted rounded-lg"
            >
              <div className="flex items-center gap-2">
                <File className="h-4 w-4" />
                <span className="text-sm">{file.name}</span>
                <span className="text-xs text-muted-foreground">
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      <Button
        onClick={uploadProject}
        disabled={loading || uploadedFiles.length === 0 || !projectName.trim()}
        className="w-full"
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Projekt hochladen
      </Button>
    </div>
  );
};