import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Building2, FileUp, AlertCircle, CheckCircle2, Package } from "lucide-react";

const formSchema = z.object({
  companyName: z.string().min(2, "Firmenname muss mindestens 2 Zeichen lang sein").max(100),
  contactPerson: z.string().min(2, "Ansprechpartner muss mindestens 2 Zeichen lang sein").max(100),
  email: z.string().email("Ungültige E-Mail-Adresse").max(255),
  phone: z.string().min(5, "Telefonnummer muss mindestens 5 Zeichen lang sein").max(30),
  plannedQuantity: z.string().min(1, "Geplante Stückzahl ist erforderlich"),
  projectDescription: z.string().min(10, "Projektbeschreibung muss mindestens 10 Zeichen lang sein").max(1000),
  timeline: z.string().min(1, "Zeitrahmen ist erforderlich"),
  material: z.string().min(1, "Materialwunsch ist erforderlich"),
});

type FormData = z.infer<typeof formSchema>;

const Probeteile = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      plannedQuantity: "",
      projectDescription: "",
      timeline: "",
      material: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      const validFiles = selectedFiles.filter(file => {
        const isValidType = file.name.toLowerCase().match(/\.(stl|obj|3mf|step|stp|iges|igs)$/);
        const isValidSize = file.size <= 50 * 1024 * 1024; // 50MB limit
        return isValidType && isValidSize;
      });

      if (validFiles.length !== selectedFiles.length) {
        toast({
          title: "Ungültige Dateien",
          description: "Nur STL, OBJ, 3MF, STEP und IGES Dateien bis 50MB sind erlaubt.",
          variant: "destructive",
        });
      }

      setFiles(validFiles);
    }
  };

  const uploadFiles = async () => {
    const uploadedUrls: string[] = [];
    
    for (const file of files) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `probeteile/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('project-files')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error(`Fehler beim Hochladen der Datei ${file.name}`);
      }

      uploadedUrls.push(filePath);
    }

    return uploadedUrls;
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      let fileUrls: string[] = [];
      
      if (files.length > 0) {
        fileUrls = await uploadFiles();
      }

      const { error } = await supabase
        .from('sample_requests')
        .insert({
          company_name: data.companyName,
          contact_person: data.contactPerson,
          email: data.email,
          phone: data.phone,
          planned_quantity: data.plannedQuantity,
          project_description: data.projectDescription,
          timeline: data.timeline,
          material: data.material,
          file_urls: fileUrls,
        });

      if (error) {
        console.error('Database error:', error);
        throw new Error('Fehler beim Speichern der Anfrage');
      }

      toast({
        title: "Anfrage erfolgreich gesendet!",
        description: "Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
      });

      form.reset();
      setFiles([]);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Fehler beim Senden",
        description: error.message || "Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Kostenlose Probeteile für B2B Serienfertigung - 3D-Druck Österreich"
        description="Fordern Sie kostenlose Probeteile für Ihre Serienfertigung an. Professioneller B2B 3D-Druck Service in Österreich für größere Produktionsvolumen."
        keywords="probeteile 3d-druck, b2b 3d-druck österreich, serienfertigung probedruck, kostenlose muster 3d-druck"
        path="/probeteile"
        schemaType="service"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navigation />
        
        <main className="container mx-auto px-4 pt-24 pb-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Nur für B2B-Anfragen
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Kostenlose Probeteile für die Serienfertigung
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Überzeugen Sie sich von unserer Qualität mit einem kostenlosen Probedruck für Ihr Serienprojekt. 
              Nur für Unternehmen mit geplanten Produktionsvolumen ab 10 Stück.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardHeader>
                <Package className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Kostenlos für B2B</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ein kostenloses Probeteil pro Unternehmen bis 50g Material oder 25cm³ Volumen.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Qualitätsgarantie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hochwertige FDM-Technologie mit österreichischen Materialien für optimale Ergebnisse.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Nur Serienfertigung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ausschließlich zur Beurteilung der Serienfertigung - keine Einzelanfertigungen.</p>
              </CardContent>
            </Card>
          </div>

          {/* Form Section */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Probeteile-Anfrage</CardTitle>
              <CardDescription>
                Füllen Sie das Formular aus, um Ihr kostenloses Probeteil anzufordern. 
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Firmenname *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihre Firma GmbH" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactPerson"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ansprechpartner *</FormLabel>
                          <FormControl>
                            <Input placeholder="Max Mustermann" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-Mail-Adresse *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="kontakt@ihrefirma.at" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefonnummer *</FormLabel>
                          <FormControl>
                            <Input placeholder="+43 123 456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="plannedQuantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Geplante Stückzahl (Serie) *</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange}>
                              <SelectTrigger>
                                <SelectValue placeholder="Stückzahl wählen" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="10-50">10-50 Stück</SelectItem>
                                <SelectItem value="50-100">50-100 Stück</SelectItem>
                                <SelectItem value="100-500">100-500 Stück</SelectItem>
                                <SelectItem value="500-1000">500-1000 Stück</SelectItem>
                                <SelectItem value="1000+">1000+ Stück</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zeitrahmen für Serie *</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange}>
                              <SelectTrigger>
                                <SelectValue placeholder="Zeitrahmen wählen" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sofort">Sofort</SelectItem>
                                <SelectItem value="1-3-monate">1-3 Monate</SelectItem>
                                <SelectItem value="3-6-monate">3-6 Monate</SelectItem>
                                <SelectItem value="6-12-monate">6-12 Monate</SelectItem>
                                <SelectItem value="12+-monate">12+ Monate</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="material"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gewünschtes Material *</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger>
                              <SelectValue placeholder="Material auswählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pla">PLA (Standard)</SelectItem>
                              <SelectItem value="petg">PETG (Robust)</SelectItem>
                              <SelectItem value="abs">ABS (Hitzebeständig)</SelectItem>
                              <SelectItem value="tpu">TPU (Flexibel)</SelectItem>
                              <SelectItem value="andere">Andere Materialien</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Projektbeschreibung *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beschreiben Sie Ihr Projekt und die Anforderungen an das Bauteil..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* File Upload */}
                  <div className="space-y-4">
                    <Label>3D-Dateien hochladen</Label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/30 rounded-lg cursor-pointer hover:bg-primary/5 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FileUp className="w-8 h-8 text-primary mb-2" />
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Klicken Sie zum Hochladen</span> oder ziehen Sie Dateien hierher
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            STL, OBJ, 3MF, STEP, IGES (max. 50MB pro Datei)
                          </p>
                        </div>
                        <input
                          type="file"
                          multiple
                          accept=".stl,.obj,.3mf,.step,.stp,.iges,.igs"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {files.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Ausgewählte Dateien:</p>
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Important Notice */}
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium text-amber-800 dark:text-amber-200 mb-2">
                          Wichtige Hinweise:
                        </p>
                        <ul className="text-amber-700 dark:text-amber-300 space-y-1">
                          <li>• Nur ein kostenloses Probeteil pro Unternehmen</li>
                          <li>• Maximales Materialvolumen: 50g oder 25cm³</li>
                          <li>• Ausschließlich für geplante Serienfertigungen ab 10 Stück</li>
                          <li>• Keine Einzelanfertigungen oder Privatpersonen</li>
                          <li>• Lieferzeit: 3-5 Werktage nach Bestätigung</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wird gesendet..." : "Probeteile-Anfrage senden"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Probeteile;