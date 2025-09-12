import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Upload, 
  X, 
  FileText, 
  Send,
  Clock,
  CheckCircle
} from "lucide-react";

const EnhancedContact = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    projectType: ""
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file => 
      file.name.toLowerCase().match(/\.(stl|obj|3mf|ply|x3d)$/) || 
      file.type.includes('image/')
    );
    
    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      toast({
        title: "Dateien hochgeladen",
        description: `${validFiles.length} Datei(en) erfolgreich hinzugefügt`,
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter(file => 
      file.name.toLowerCase().match(/\.(stl|obj|3mf|ply|x3d)$/) || 
      file.type.includes('image/')
    );
    
    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      toast({
        title: "Dateien ausgewählt",
        description: `${validFiles.length} Datei(en) erfolgreich hinzugefügt`,
      });
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      projectType: ""
    });
    setFiles([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kostenloses <span className="text-gradient">Angebot</span> anfordern
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Senden Sie uns Ihre 3D-Datei oder beschreiben Sie Ihr Projekt. 
            Wir erstellen Ihnen ein individuelles Angebot innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Projekt-Anfrage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Unternehmen</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType">Projekt-Art</Label>
                  <Input
                    id="projectType"
                    name="projectType"
                    placeholder="z.B. Prototyp, Kleinserien, Ersatzteil..."
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Projektbeschreibung *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Beschreiben Sie Ihr Projekt: Verwendungszweck, gewünschtes Material, Stückzahl, Liefertermin..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                {/* File Upload Area */}
                <div>
                  <Label>3D-Dateien oder Bilder hochladen</Label>
                  <div
                    className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      isDragging 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground mb-2">
                      Ziehen Sie Dateien hierher oder klicken Sie zum Auswählen
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      Unterstützte Formate: STL, OBJ, 3MF, PLY, Bilder (max. 50MB)
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Dateien auswählen
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".stl,.obj,.3mf,.ply,.x3d,image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>

                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{file.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {(file.size / 1024 / 1024).toFixed(1)} MB
                            </Badge>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Kostenloses Angebot anfordern
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle>Kontakt-Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-muted-foreground">office@ek-druck.at</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+43 676 5517197</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">
                      Negrellistraße 15<br />
                      4623 Gunskirchen<br />
                      Oberösterreich
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time & Benefits */}
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle>Warum ekdruck e.U.?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">24h Antwortzeit</p>
                    <p className="text-muted-foreground text-sm">
                      Schnelle Rückmeldung zu Ihrem Projekt
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Kostenlose Beratung</p>
                    <p className="text-muted-foreground text-sm">
                      Optimierung Ihrer 3D-Designs inklusive
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Regionale Fertigung</p>
                    <p className="text-muted-foreground text-sm">
                      Kurze Lieferwege aus Oberösterreich
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Nachhaltige Materialien</p>
                    <p className="text-muted-foreground text-sm">
                      100% österreichisches Filament
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;