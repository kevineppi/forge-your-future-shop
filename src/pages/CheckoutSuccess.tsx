import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, Package } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [orderNumber, setOrderNumber] = useState("");
  const [error, setError] = useState(false);
  const sessionId = searchParams.get("session_id");

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
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gradient-to-b from-background to-secondary/10">
        <Card className="max-w-2xl w-full mx-4">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <CardTitle className="text-3xl mb-2">Zahlung erfolgreich!</CardTitle>
            <CardDescription className="text-base">
              Vielen Dank für Ihre Bestellung
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-secondary/50 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Bestellnummer</p>
              <p className="text-2xl font-bold text-primary">{orderNumber}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Zahlung bestätigt</p>
                  <p className="text-sm text-muted-foreground">
                    Ihre Zahlung wurde erfolgreich verarbeitet
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Bestellung gespeichert</p>
                  <p className="text-sm text-muted-foreground">
                    Sie können Ihre Bestellung jederzeit in Ihrem Konto einsehen
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Bestätigung per E-Mail</p>
                  <p className="text-sm text-muted-foreground">
                    Sie erhalten in Kürze eine Bestätigung per E-Mail
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button 
                onClick={() => navigate("/meine-bestellungen")} 
                className="w-full"
                size="lg"
              >
                <Package className="w-4 h-4 mr-2" />
                Meine Bestellungen ansehen
              </Button>
              <Button 
                onClick={() => navigate("/")} 
                variant="outline"
                className="w-full"
                size="lg"
              >
                Zurück zur Startseite
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutSuccess;
