import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, Send, Upload, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            project_type: formData.project,
            timeline: formData.timeline,
            message: formData.message,
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

      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns innerhalb von 12 Stunden bei Ihnen.",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
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
            Nehmen Sie <span className="text-gradient">Kontakt</span> auf
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
                    Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 12 Stunden 
                    mit einem detaillierten Angebot bei Ihnen.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Neue Anfrage senden
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="gradient-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Ihr individuelles Angebot</CardTitle>
                  <p className="text-muted-foreground">Füllen Sie das Formular aus und wir melden uns innerhalb von 12 Stunden mit einem detaillierten Angebot.</p>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Projekt-Art</label>
                        <select 
                          name="project" 
                          value={formData.project} 
                          onChange={handleInputChange} 
                          className="w-full p-3 border border-input rounded-md bg-background disabled:opacity-50"
                          disabled={isSubmitting}
                        >
                          <option value="">Projekt-Art wählen</option>
                          <option value="einzelanfertigung">Einzelanfertigung</option>
                          <option value="serienfertigung">Serienfertigung</option>
                          <option value="inneneinrichtung">Inneneinrichtung</option>
                          <option value="beratung">Beratung & Design</option>
                          <option value="sonstiges">Sonstiges</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Zeitrahmen</label>
                        <select 
                          name="timeline" 
                          value={formData.timeline} 
                          onChange={handleInputChange} 
                          className="w-full p-3 border border-input rounded-md bg-background disabled:opacity-50"
                          disabled={isSubmitting}
                        >
                          <option value="">Zeitrahmen wählen</option>
                          <option value="express">Express (24-48 Stunden)</option>
                          <option value="standard">Standard (3-5 Tage)</option>
                          <option value="extended">Erweitert (1-2 Wochen)</option>
                          <option value="flexibel">Flexibel</option>
                        </select>
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

                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">
                        Laden Sie Ihre 3D-Dateien hoch (STL, OBJ, 3MF)
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Max. Dateigröße: 50MB. Mehrere Dateien möglich.
                      </p>
                      <Button variant="outline" type="button" disabled={isSubmitting}>
                        Dateien wählen
                      </Button>
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
      </div>
    </section>;
};
export default Contact;