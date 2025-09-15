import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  const phoneNumber = "4367655117197"; // Without + and spaces
  const message = "Hallo! Ich interessiere mich für Ihre 3D-Druck Services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label="WhatsApp Chat"
    >
      <MessageCircle size={24} />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        WhatsApp Chat
        <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppChat;