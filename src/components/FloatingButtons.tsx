import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="tel:+1234567890"
        className="w-14 h-14 rounded-full bg-cta text-cta-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
