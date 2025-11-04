import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface StickyCTAProps {
  text?: string;
  buttonText?: string;
  onClick?: () => void;
}

const StickyCTA = ({ text, buttonText, onClick }: StickyCTAProps = {}) => {
  const defaultScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = onClick || defaultScrollToContact;

  return (
    <Button
      onClick={handleClick}
      className="hidden md:flex fixed bottom-6 right-6 z-50 shadow-2xl rounded-full h-16 px-6 text-base font-semibold"
      variant="hero"
      size="lg"
    >
      <MessageCircle className="w-5 h-5" />
      {buttonText || text || "Kostenloses Angebot"}
    </Button>
  );
};

export default StickyCTA;
