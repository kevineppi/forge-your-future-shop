import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AIChatWidget from "@/components/AIChatWidget";
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
  material: z.string().min(1, "Materialwunsch ist erforderlich")
});
type FormData = z.infer<typeof formSchema>;
const Probeteile = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
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
      material: ""
    }
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
          variant: "destructive"
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
      const {
        error: uploadError
      } = await supabase.storage.from('project-files').upload(filePath, file);
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
      const {
        error
      } = await supabase.from('sample_requests' as any).insert({
        company_name: data.companyName,
        contact_person: data.contactPerson,
        email: data.email,
        phone: data.phone,
        planned_quantity: data.plannedQuantity,
        project_description: data.projectDescription,
        timeline: data.timeline,
        material: data.material,
        file_urls: fileUrls
      });
      if (error) {
        console.error('Database error:', error);
        throw new Error('Fehler beim Speichern der Anfrage');
      }
      toast({
        title: "Anfrage erfolgreich gesendet!",
        description: "Wir werden uns innerhalb von 6 Stunden bei Ihnen melden."
      });
      form.reset();
      setFiles([]);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Fehler beim Senden",
        description: error.message || "Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <>
        <SEOHead 
          title="GRATIS Probeteil für B2B ab 50 Stück | ekdruck e.U."
          description="Risikofrei testen vor Serienfertigung: 1 kostenloses Probeteil (max. 20cm) für B2B-Kunden. Qualität, Maßhaltigkeit & Material prüfen. Antwort in 6h – jetzt anfragen!" 
          keywords="kostenlose probeteile 3d-druck, b2b 3d-druck, serienfertigung probedruck, gratis probeteil"
        path="/probeteile" 
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "Probeteile", url: "/probeteile"}
      ]} />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navigation />
        
        <main className="container mx-auto px-4 pt-24 pb-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Nur für B2B-Anfragen
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-relaxed py-2">
              <span className="text-gradient">GRATIS 3D-Druck Probeteil</span> für B2B Serienfertigung
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              <strong className="text-foreground">Kostenloser Qualitätstest</strong> vor Serienauftrag ab 50 Stück. 
              Professioneller B2B Service für österreichische Unternehmen - 100% unverbindlich.
            </p>
            <div className="max-w-4xl mx-auto text-left mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Warum kostenlose Probeteile?</h2>
                  <p className="text-muted-foreground mb-4">
                    Bevor Sie sich für eine 3D-Druck Serienfertigung entscheiden, möchten Sie sicherstellen, 
                    dass Qualität, Maßhaltigkeit und Materialauswahl Ihren Anforderungen entsprechen. 
                    Unser kostenloses Probeteil-Service ermöglicht es Ihnen, unsere FDM-Druckqualität 
                    ohne Risiko zu bewerten.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Qualitätsprüfung vor Serienauftrag</li>
                    <li>• Materialtest für Ihre Anwendung</li>
                    <li>• Maßhaltigkeit und Oberflächenqualität prüfen</li>
                    <li>• Funktionstest des Bauteils</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Für welche Unternehmen?</h2>
                  <p className="text-muted-foreground mb-4">
                    Unser B2B Probeteile-Service richtet sich an österreichische und deutsche Unternehmen, 
                    die eine 3D-Druck Serienfertigung planen. Ideal für Maschinenbau und Produktentwicklung.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Produktentwicklung und Prototyping</li>
                    <li>• Ersatzteilproduktion in Serie</li>
                    <li>• Kleinserien für Maschinenbau</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Kostenlos für B2B Kunden</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ein kostenloses 3D-Druck Probeteil pro Unternehmen mit bis zu 20cm Seitenlänge. 
                  Perfekt für die Bewertung unserer Serienfertigung-Qualität.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Österreichische Qualität</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hochpräzise FDM 3D-Druck Technologie mit hochwertigen Materialien. 
                  Lokale Produktion in Oberösterreich für kurze Lieferzeiten.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">B2B Serienfertigung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ausschließlich für Unternehmen mit geplanter 3D-Druck Serienfertigung ab 50 Stück. 
                  Für kleinere Mengen nutzen Sie bitte unser normales Bestellformular mit entsprechender Anmerkung.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info Section */}
          <div className="bg-secondary/20 rounded-lg p-8 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">Ihr Weg zur professionellen 3D-Druck Serienfertigung</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">1</div>
                  <h3 className="font-semibold">Anfrage senden</h3>
                  <p className="text-sm text-muted-foreground">Formular ausfüllen und 3D-Dateien hochladen</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">2</div>
                  <h3 className="font-semibold">Qualifikation</h3>
                  <p className="text-sm text-muted-foreground">Prüfung Ihrer B2B Anfrage und Serienpotential</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">3</div>
                  <h3 className="font-semibold">Probedruck</h3>
                  <p className="text-sm text-muted-foreground">Kostenloser FDM 3D-Druck Ihres Bauteils</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">4</div>
                  <h3 className="font-semibold">Serienfertigung</h3>
                  <p className="text-sm text-muted-foreground">Angebot für Ihre 3D-Druck Serienfertigung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Probeteile-Anfrage</CardTitle>
              <CardDescription>
                Füllen Sie das Formular aus, um Ihr kostenloses Probeteil anzufordern. 
                Wir melden uns innerhalb von 6 Stunden bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="companyName" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Firmenname *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihre Firma GmbH" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="contactPerson" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Ansprechpartner *</FormLabel>
                          <FormControl>
                            <Input placeholder="Max Mustermann" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>E-Mail-Adresse *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="kontakt@ihrefirma.at" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Telefonnummer *</FormLabel>
                          <FormControl>
                            <Input placeholder="+43 123 456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="plannedQuantity" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Geplante Stückzahl (Serie) *</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange}>
                              <SelectTrigger>
                                <SelectValue placeholder="Stückzahl wählen" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="50-100">50-100 Stück</SelectItem>
                                <SelectItem value="100-500">100-500 Stück</SelectItem>
                                <SelectItem value="500-1000">500-1000 Stück</SelectItem>
                                <SelectItem value="1000+">1000+ Stück</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="timeline" render={({
                    field
                  }) => <FormItem>
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
                        </FormItem>} />
                  </div>

                  <FormField control={form.control} name="material" render={({
                  field
                }) => <FormItem>
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
                      </FormItem>} />

                  <FormField control={form.control} name="projectDescription" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Projektbeschreibung *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Beschreiben Sie Ihr Projekt und die Anforderungen an das Bauteil..." className="min-h-[100px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

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
                        <input type="file" multiple accept=".stl,.obj,.3mf,.step,.stp,.iges,.igs" onChange={handleFileChange} className="hidden" />
                      </label>
                    </div>
                    {files.length > 0 && <div className="space-y-2">
                        <p className="text-sm font-medium">Ausgewählte Dateien:</p>
                        {files.map((file, index) => <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </div>)}
                      </div>}
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
                          <li>• Nur ein kostenloses 3D-Druck Probeteil pro Unternehmen</li>
                          <li>• Maximale Seitenlänge: bis zu 20cm</li>
                          <li>• Ausschließlich für geplante B2B Serienfertigungen ab 50 Stück</li>
                          <li>• Keine Einzelanfertigungen, Prototypen oder Privatpersonen</li>
                          <li>• Lieferzeit: 3-5 Werktage nach Qualifikation und Bestätigung</li>
                          <li>• Verfügbare Materialien: PLA, PETG, ABS, ASA, TPU</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Wird gesendet..." : "Probeteile-Anfrage senden"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </main>

        <AIChatWidget />
        <Footer />
      </div>
    </>;
  };
export default Probeteile;