import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, Send, Upload, CheckCircle, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import SocialShare from "./SocialShare";
import GoogleMaps from "./GoogleMaps";
import GoogleReviews from "./GoogleReviews";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name darf maximal 100 Zeichen lang sein"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
  project: z.string().max(100).optional(),
  timeline: z.string().max(100).optional(),
  message: z.string().trim().max(2000, "Nachricht darf maximal 2000 Zeichen lang sein").optional()
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    timeline: "",
    message: ""
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = file.type.includes('model') || 
                         file.name.toLowerCase().endsWith('.stl') ||
                         file.name.toLowerCase().endsWith('.obj') ||
                         file.name.toLowerCase().endsWith('.3mf') ||
                         file.type.includes('pdf') ||
                         file.type.includes('image');
      const isValidSize = file.size <= 50 * 1024 * 1024; // 50MB
      
      if (!isValidType) {
        toast({
          title: "Ungültiger Dateityp",
          description: `${file.name} ist kein unterstützter Dateityp.`,
          variant: "destructive",
        });
        return false;
      }
      
      if (!isValidSize) {
        toast({
          title: "Datei zu groß",
          description: `${file.name} ist größer als 50MB.`,
          variant: "destructive",
        });
        return false;
      }
      
      return true;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const uploadFiles = async (files: File[]): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    
    // Extract last name from form data
    const lastName = formData.name.trim().split(' ').pop() || 'Unbekannt';
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExt = file.name.split('.').pop();
      const fileNumber = files.length > 1 ? `-${i + 1}` : '';
      const fileName = `${lastName}${fileNumber}.${fileExt}`;
      const filePath = `contact-files/${Date.now()}-${fileName}`;
      
      setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
      
      try {
        const { error } = await supabase.storage
          .from('contact-files')
          .upload(filePath, file);

        if (error) throw error;
        
        uploadedUrls.push(filePath);
        setUploadProgress(prev => ({ ...prev, [file.name]: 100 }));
      } catch (error) {
        console.error('Upload error:', error);
        throw new Error(`Fehler beim Hochladen von ${file.name}`);
      }
    }
    
    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with zod schema
    const validationResult = contactSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Fehler",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let fileUrls: string[] = [];
      
      // Upload files if any
      if (uploadedFiles.length > 0) {
        fileUrls = await uploadFiles(uploadedFiles);
      }

      const validatedData = validationResult.data;
      
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
            project_type: validatedData.project || null,
            timeline: validatedData.timeline || null,
            message: validatedData.message || null,
            file_urls: fileUrls.length > 0 ? fileUrls : null,
            status: 'new'
          }
        ]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        project: "",
        timeline: "",
        message: ""
      });
      setUploadedFiles([]);
      setUploadProgress({});

      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns innerhalb von 6 Stunden bei Ihnen.",
      });

    } catch (error) {
      toast({
        title: "Fehler",
        description: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Kontakt</span> für Ihr 3D-Druck Projekt
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bereit für Ihr 3D-Druck Projekt? Kontaktieren Sie uns für eine kostenlose Beratung 
            und ein individuelles Angebot aus Oberösterreich.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  E-Mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">office@ek-druck.at</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  Anrufen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">+43 676 5517197</p>
                <p className="text-sm text-muted-foreground">Mo-Fr 8:00-17:00 Uhr</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="text-muted-foreground not-italic">
                  ekdruck e.U.<br />
                  Negrellistraße 15<br />
                  4623 Gunskirchen<br />
                  Oberösterreich
                </address>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Montag - Freitag</span>
                  <span className="font-medium">8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samstag</span>
                  <span className="font-medium">Nach Vereinbarung</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sonntag</span>
                  <span className="font-medium">Geschlossen</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {isSubmitted ? (
              <Card className="gradient-card border-0 text-center p-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">Vielen Dank!</h3>
                  <p className="text-muted-foreground max-w-md">
                    Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 6 Stunden 
                    mit einem detaillierten Angebot bei Ihnen.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setUploadedFiles([]);
                    }}
                    className="mt-4"
                  >
                    Neue Anfrage senden
                  </Button>
                  
                  <div className="mt-6 pt-6 border-t border-border/20">
                    <SocialShare 
                      title="3D-Druck Service aus Österreich | ekdruck e.U."
                      description="Professioneller 3D-Druck Dienstleister für ganz Österreich mit nachhaltigen Materialien"
                      className="justify-center"
                    />
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="gradient-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Ihr individuelles Angebot</CardTitle>
                  <p className="text-muted-foreground">Füllen Sie das Formular aus und wir melden uns innerhalb von 6 Stunden mit einem detaillierten Angebot.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          placeholder="Ihr vollständiger Name" 
                          required 
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">E-Mail *</label>
                        <Input 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          placeholder="ihre@email.at" 
                          required 
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Projekt-Details</label>
                      <Textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        placeholder="Erzählen Sie uns von Ihrem Projekt: Materialien, Stückzahl, besondere Anforderungen..." 
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="border-2 border-dashed border-border rounded-lg p-6">
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
                        <div className="space-y-2 mb-6">
                          <p className="text-sm font-medium">
                            3D-Dateien hochladen (optional)
                          </p>
                          <p className="text-xs text-muted-foreground">
                            STL, OBJ, 3MF, PDF, Bilder - Max. 50MB pro Datei
                          </p>
                        </div>
                        <input
                          type="file"
                          multiple
                          accept=".stl,.obj,.3mf,.pdf,image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                          disabled={isSubmitting}
                        />
                        <label htmlFor="file-upload">
                          <Button variant="outline" type="button" disabled={isSubmitting} asChild>
                            <span className="cursor-pointer">Dateien wählen</span>
                          </Button>
                        </label>
                      </div>
                      
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <p className="text-sm font-medium">Ausgewählte Dateien:</p>
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-muted/50 p-2 rounded">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm truncate max-w-48">{file.name}</span>
                                <span className="text-xs text-muted-foreground">
                                  ({(file.size / 1024 / 1024).toFixed(1)} MB)
                                </span>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                                disabled={isSubmitting}
                                className="h-6 w-6 p-0"
                              >
                                ✕
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Angebot anfordern
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Google Maps und Reviews Section */}
        <div className="mt-16 space-y-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              Unser <span className="text-gradient">Standort</span>
            </h3>
            <GoogleMaps />
          </div>

          <GoogleReviews />
        </div>
      </div>
    </section>;
};
export default Contact;