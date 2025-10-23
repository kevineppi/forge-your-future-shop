import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "436765517197";
  const message = encodeURIComponent("Hallo ekdruck! Ich interessiere mich für 3D-Druck und hätte gerne weitere Informationen.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50"
    >
      <Button
        className="shadow-2xl rounded-full h-16 w-16 bg-[#25D366] hover:bg-[#20BD5A] text-white animate-bounce hover:animate-none"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
