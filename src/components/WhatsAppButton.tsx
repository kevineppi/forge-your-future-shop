import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "436765517197";
  const message = encodeURIComponent("Hallo ekdruck! Ich interessiere mich für 3D-Druck und hätte gerne weitere Informationen.");
  
  // Use direct web.whatsapp.com URL as fallback
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Try to open WhatsApp with the web interface
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  };

  return (
    <a
      href={`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50"
    >
      <Button
        className="shadow-2xl rounded-full h-16 w-16 bg-[#25D366] hover:bg-[#20BD5A] text-white"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
