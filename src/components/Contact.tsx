import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Upload
} from "lucide-react";

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

  return (
    <section id="contact" className="py-24">
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
                <p className="text-muted-foreground mb-2">info@ek-druck.at</p>
                <p className="text-muted-foreground">angebot@ek-druck.at</p>
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
                <p className="text-muted-foreground mb-2">+43 (0) 7XXX XXX-XXX</p>
                <p className="text-sm text-muted-foreground">Mo-Fr 9:00-18:00 Uhr</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Besuchen Sie uns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Musterstraße 123</p>
                <p className="text-muted-foreground mb-2">4020 Linz, Oberösterreich</p>
                <p className="text-sm text-muted-foreground">Nach Terminvereinbarung</p>
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
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samstag</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sonntag</span>
                  <span className="font-medium">Geschlossen</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Ihr individuelles Angebot</CardTitle>
                <p className="text-muted-foreground">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden mit einem detaillierten Angebot.
                </p>
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
                        className="w-full p-3 border border-input rounded-md bg-background"
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
                        className="w-full p-3 border border-input rounded-md bg-background"
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
                    <Button variant="outline">
                      Dateien wählen
                    </Button>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Angebot anfordern
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;