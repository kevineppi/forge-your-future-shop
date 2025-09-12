import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, Upload } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    timeline: "",
    message: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Projekt anfragen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-Mail *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Projektart</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="prototyping">Prototyping</option>
                      <option value="kleinserie">Kleinserie</option>
                      <option value="ersatzteile">Ersatzteile</option>
                      <option value="modelle">Modelle & Figuren</option>
                      <option value="funktionsteile">Funktionsteile</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Zeitrahmen</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="express">Express (1-2 Tage)</option>
                      <option value="standard">Standard (3-5 Tage)</option>
                      <option value="economy">Economy (6-10 Tage)</option>
                      <option value="flexible">Flexibel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nachricht</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Beschreiben Sie Ihr Projekt, gewünschte Materialien, Stückzahl, Besonderheiten..."
                    className="w-full"
                  />
                </div>

                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Dateien hochladen (STL, OBJ, 3MF, STEP)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Maximale Dateigröße: 50MB
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Anfrage senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Kontaktinformationen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">E-Mail</h3>
                    <p className="text-muted-foreground">office@ekdruck.at</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <p className="text-muted-foreground">+43 (0) 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-muted-foreground">
                      ekdruck e.U.<br />
                      Musterstraße 123<br />
                      4000 Linz, Österreich
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Öffnungszeiten</h3>
                    <p className="text-muted-foreground">
                      Mo-Fr: 08:00 - 18:00<br />
                      Sa: 09:00 - 14:00<br />
                      So: Geschlossen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Schnelle Antwort garantiert</h3>
                <p className="text-sm text-muted-foreground">
                  Wir antworten innerhalb von 24 Stunden auf Ihre Anfrage und 
                  erstellen Ihnen gerne ein kostenloses und unverbindliches Angebot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;