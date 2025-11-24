import { Calculator } from "lucide-react";
import { Button } from "./ui/button";

const StickyCTA = () => {
  const handleClick = () => {
    window.location.href = '/kostenrechner';
  };

  return (
    <Button
      onClick={handleClick}
      className="hidden md:flex fixed bottom-6 right-6 z-50 shadow-2xl rounded-full h-16 px-6 text-base font-semibold"
      variant="hero"
      size="lg"
    >
      <Calculator className="w-5 h-5 mr-2" />
      Direkt bestellen
    </Button>
  );
};

export default StickyCTA;
