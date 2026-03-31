import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PRICING_CONFIG } from "@/data/pricingConfig";
import type { CalculatorInput, PriceBreakdown } from "@/lib/priceCalculator";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Send, X } from "lucide-react";

interface Props {
  calculatorInput: CalculatorInput;
  priceBreakdown: PriceBreakdown;
  onClose: () => void;
}

const InquiryForm = ({ calculatorInput, priceBreakdown, onClose }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const configSummary = `Verfahren: ${calculatorInput.process}, Material: ${calculatorInput.materialKey}, Schichtdicke: ${calculatorInput.layerHeight} mm, Wandstärke: ${calculatorInput.wallThickness} mm, Stückzahl: ${calculatorInput.quantity}, Richtpreis netto: ${priceBreakdown.netTotal.toFixed(2)} €, Richtpreis brutto: ${priceBreakdown.grossTotal.toFixed(2)} €`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Bitte füllen Sie Name und E-Mail aus.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setIsSubmitting(true);
    try {
      const fullMessage = `[Kostenrechner-Anfrage]\n\n${configSummary}\n\n${company ? `Firma: ${company}\n` : ""}${phone ? `Telefon: ${phone}\n` : ""}\n${message || "(Keine zusätzliche Nachricht)"}`;

      const { error } = await supabase.from("contact_inquiries").insert({
        name: name.trim().slice(0, 100),
        email: email.trim().slice(0, 255),
        message: fullMessage.slice(0, 2000),
        project_type: "Kostenrechner-Anfrage",
      });

      if (error) throw error;

      toast.success("Ihre Anfrage wurde erfolgreich gesendet! Wir melden uns zeitnah.");
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setMessage("");
      onClose();
    } catch {
      toast.error("Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-primary/30 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Unverbindliche Anfrage</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Auf Basis Ihrer Konfiguration können Sie jetzt eine unverbindliche Anfrage senden.
        </p>
      </CardHeader>
      <CardContent>
        {/* Config-Zusammenfassung */}
        <div className="bg-muted/40 rounded-lg p-3 mb-6 text-xs text-muted-foreground space-y-0.5">
          <p className="font-semibold text-foreground text-sm mb-1">Ihre Konfiguration</p>
          <p>Verfahren: {calculatorInput.process} · Material: {calculatorInput.materialKey}</p>
          <p>Schichtdicke: {calculatorInput.layerHeight} mm · Wandstärke: {calculatorInput.wallThickness} mm</p>
          <p>Stückzahl: {calculatorInput.quantity} · Richtpreis: {priceBreakdown.grossTotal.toFixed(2).replace(".", ",")} € brutto</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="inq-name">Name *</Label>
              <Input
                id="inq-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                placeholder="Max Mustermann"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inq-email">E-Mail *</Label>
              <Input
                id="inq-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                placeholder="max@firma.at"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="inq-company">Firma (optional)</Label>
              <Input
                id="inq-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                maxLength={100}
                placeholder="Musterfirma GmbH"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inq-phone">Telefon (optional)</Label>
              <Input
                id="inq-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={30}
                placeholder="+43 664 123 4567"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="inq-message">Nachricht (optional)</Label>
            <Textarea
              id="inq-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              placeholder="Besondere Anforderungen, gewünschte Toleranzen, Nachbearbeitung…"
              rows={3}
            />
          </div>
          <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Wird gesendet…" : "Anfrage senden"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Durch das Absenden kommt kein Vertragsabschluss zustande.
            Sie erhalten ein individuelles Angebot nach technischer Prüfung.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default InquiryForm;
