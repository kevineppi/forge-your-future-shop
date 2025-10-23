import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const StickyCTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 shadow-2xl animate-pulse hover:animate-none rounded-full h-16 px-6 text-base font-semibold"
      variant="hero"
      size="lg"
    >
      <MessageCircle className="w-5 h-5" />
      Kostenloses Angebot
    </Button>
  );
};

export default StickyCTA;
