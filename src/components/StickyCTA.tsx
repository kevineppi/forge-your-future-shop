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
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 shadow-2xl rounded-full h-12 md:h-16 px-4 md:px-6 text-sm md:text-base font-semibold"
      variant="hero"
      size="lg"
    >
      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
      Kostenloses Angebot
    </Button>
  );
};

export default StickyCTA;
