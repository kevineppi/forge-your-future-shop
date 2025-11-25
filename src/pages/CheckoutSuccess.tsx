import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSchema from "@/components/FAQSchema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Loader2, Package, Mail, Truck, Factory, CheckCheck, Clock, HelpCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [orderNumber, setOrderNumber] = useState("");
  const [error, setError] = useState(false);
  const sessionId = searchParams.get("session_id");

  const faqs = [
    {
      question: "Wie lange dauert die Produktion meiner Teile?",
      answer: "Standard-Bestellungen werden innerhalb von 5-7 Werktagen produziert und versandt. Mit unserem Express-Service (24-48 Stunden) erhalten Sie Ihre Teile deutlich schneller."
    },
    {
      question: "Kann ich meine Bestellung noch ändern?",
      answer: "Kleinere Änderungen sind innerhalb der ersten 24 Stunden nach Bestellung möglich. Kontaktieren Sie uns bitte umgehend per E-Mail oder WhatsApp mit Ihrer Bestellnummer."
    },
    {
      question: "Wie wird meine Bestellung versendet?",
      answer: "Wir versenden alle Bestellungen versichert mit DHL oder Post AT. Bei Bestellungen über 100€ ist der Versand kostenlos. Sie erhalten eine Tracking-Nummer per E-Mail."
    },
    {
      question: "Erhalte ich eine Rechnung für meine Bestellung?",
      answer: "Ja, eine detaillierte Rechnung wird automatisch per E-Mail versendet und ist auch in Ihrem Bestellbereich einsehbar."
    },
    {
      question: "Was passiert, wenn ich mit den Teilen nicht zufrieden bin?",
      answer: "Ihre Zufriedenheit ist uns wichtig. Bei Qualitätsproblemen oder Abweichungen von der Spezifikation kontaktieren Sie uns bitte innerhalb von 14 Tagen. Wir finden gemeinsam eine Lösung."
    },
    {
      question: "Kann ich mehrere Bestellungen kombinieren lassen?",
      answer: "Ja, wenn Sie mehrere Bestellungen kurz nacheinander aufgeben, können wir diese oft kombinieren und gemeinsam versenden. Kontaktieren Sie uns mit Ihren Bestellnummern."
    }
  ];

  useEffect(() => {
    const verifyAndCreateOrder = async () => {
      if (!sessionId) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        console.log("Verifying payment for session:", sessionId);
        
        const { data, error } = await supabase.functions.invoke("verify-payment", {
          body: { sessionId },
        });

        if (error) throw error;

        console.log("Payment verified:", data);
        setOrderNumber(data.orderNumber);
        toast.success("Bestellung erfolgreich erstellt!");
      } catch (err) {
        console.error("Error verifying payment:", err);
        setError(true);
        toast.error("Fehler beim Erstellen der Bestellung");
      } finally {
        setLoading(false);
      }
    };

    verifyAndCreateOrder();
  }, [sessionId]);

  if (loading) {
    return (
      <>
        <SEOHead
          title="Zahlung wird verarbeitet | ekdruck"
          description="Ihre Zahlung wird gerade verarbeitet. Bitte warten Sie einen Moment."
          path="/checkout-success"
        />
        <Navigation />
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="pt-6 text-center">
              <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
              <p className="text-lg font-medium">Zahlung wird verarbeitet...</p>
              <p className="text-sm text-muted-foreground mt-2">
                Bitte warten Sie einen Moment
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <SEOHead
          title="Fehler bei der Bestellung | ekdruck"
          description="Es gab ein Problem beim Erstellen Ihrer Bestellung."
          path="/checkout-success"
        />
        <Navigation />
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
          <Card className="max-w-md w-full mx-4 border-destructive">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="text-lg font-medium mb-2">Fehler bei der Bestellung</p>
              <p className="text-sm text-muted-foreground mb-4">
                Es gab ein Problem beim Erstellen Ihrer Bestellung. Bitte kontaktieren Sie uns.
              </p>
              <Button onClick={() => navigate("/kostenrechner")} variant="outline">
                Zurück zum Kostenrechner
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Bestellung erfolgreich bestätigt | 3D-Druck ekdruck"
        description="Vielen Dank für Ihre Bestellung bei ekdruck. Ihre 3D-Druck Teile werden nun produziert. Kostenloser Versand ab 100€."
        keywords="3d-druck bestellung, bestellbestätigung, fdm 3d-druck österreich, 3d-druck lieferzeit"
        path="/checkout-success"
        schemaType="service"
      />
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-background via-background to-secondary/10">
        <div className="container mx-auto px-4">
          {/* Hero Section - Bestellbestätigung */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center animate-in zoom-in duration-500">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <CardTitle className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Bestellung erfolgreich!
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Vielen Dank für Ihr Vertrauen in ekdruck
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Ihre Bestellnummer</p>
                  <p className="text-2xl md:text-3xl font-bold text-primary tracking-wide">{orderNumber}</p>
                  <p className="text-xs text-muted-foreground mt-2">Bitte bewahren Sie diese Nummer auf</p>
                </div>

                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Zahlung bestätigt</p>
                      <p className="text-sm text-muted-foreground">
                        Ihre Zahlung wurde erfolgreich verarbeitet
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5">
                    <Mail className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">E-Mail Bestätigung versendet</p>
                      <p className="text-sm text-muted-foreground">
                        Sie erhalten alle Details und die Rechnung per E-Mail
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5">
                    <Package className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Produktion wird vorbereitet</p>
                      <p className="text-sm text-muted-foreground">
                        Wir beginnen umgehend mit der Fertigung Ihrer Teile
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => navigate("/meine-bestellungen")} 
                    className="flex-1"
                    size="lg"
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Meine Bestellungen
                  </Button>
                  <Button 
                    onClick={() => navigate("/")} 
                    variant="outline"
                    className="flex-1"
                    size="lg"
                  >
                    Zur Startseite
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline - Nächste Schritte */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Die nächsten Schritte
            </h2>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-[23px] top-[40px] bottom-[40px] w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted hidden md:block" />
                  
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="relative flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        <CheckCheck className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-lg mb-1">Bestellung eingegangen</h3>
                        <p className="text-sm text-muted-foreground mb-2">Soeben abgeschlossen</p>
                        <p className="text-sm">
                          Ihre Bestellung wurde erfolgreich aufgenommen und befindet sich bereits in unserem System.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-primary-foreground font-bold">
                        <Factory className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-lg mb-1">Produktion startet</h3>
                        <p className="text-sm text-muted-foreground mb-2">Innerhalb von 24 Stunden</p>
                        <p className="text-sm">
                          Wir bereiten Ihre 3D-Modelle für den Druck vor und starten die Fertigung. Bei Express-Service bereits innerhalb weniger Stunden.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-lg mb-1">Qualitätskontrolle & Finishing</h3>
                        <p className="text-sm text-muted-foreground mb-2">Nach Druckabschluss</p>
                        <p className="text-sm">
                          Jedes Teil wird geprüft, gereinigt und falls gewählt mit Nachbearbeitung versehen (Glätten, Färben, etc.).
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-primary-foreground font-bold">
                        <Truck className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-lg mb-1">Versand & Lieferung</h3>
                        <p className="text-sm text-muted-foreground mb-2">Nach 5-7 Werktagen (Standard)</p>
                        <p className="text-sm">
                          Ihre Teile werden sicher verpackt und versichert versendet. Sie erhalten eine Tracking-Nummer per E-Mail.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-foreground font-bold">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-lg mb-1">Teile erhalten</h3>
                        <p className="text-sm text-muted-foreground mb-2">Nach 7-10 Werktagen</p>
                        <p className="text-sm">
                          Ihre 3D-gedruckten Teile kommen bei Ihnen an. Bei Fragen oder Problemen stehen wir jederzeit zur Verfügung.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Häufige Fragen nach der Bestellung
              </h2>
              <p className="text-muted-foreground">
                Alles, was Sie über den weiteren Ablauf wissen müssen
              </p>
            </div>

            <Card>
              <CardContent className="p-4 md:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Kontakt CTA */}
            <div className="mt-8 text-center p-6 rounded-lg bg-secondary/50 border">
              <h3 className="font-bold text-lg mb-2">Noch Fragen?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Unser Team steht Ihnen jederzeit zur Verfügung
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" onClick={() => window.location.href = 'mailto:kontakt@ek-druck.at'}>
                  <Mail className="w-4 h-4 mr-2" />
                  E-Mail schreiben
                </Button>
                <Button variant="outline" onClick={() => window.open('https://wa.me/436765517197', '_blank')}>
                  📱 WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutSuccess;
