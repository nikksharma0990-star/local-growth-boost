import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300"
        aria-label="WhatsApp"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      >
        <MessageCircle size={24} />
      </motion.a>
      <motion.a
        href="tel:+1234567890"
        className="w-14 h-14 rounded-full bg-cta text-cta-foreground flex items-center justify-center shadow-lg shadow-cta/30 hover:shadow-cta/50 transition-all duration-300"
        aria-label="Call Us"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
