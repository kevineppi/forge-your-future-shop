import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "436765517197"; // Format: country code + number without +
  const message = encodeURIComponent("Hallo! Ich interessiere mich für Ihren 3D-Druck Service.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="WhatsApp Kontakt"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] group-hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg whitespace-nowrap">
          <p className="text-sm font-medium">Schnelle Hilfe per WhatsApp</p>
        </div>
      </div>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </a>
  );
};

export default WhatsAppButton;
