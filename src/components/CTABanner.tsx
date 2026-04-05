import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, hsl(265 90% 20%), hsl(265 70% 12%), hsl(170 50% 10%))'
      }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Ready to <span className="gradient-text">Grow Your Business</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
            Let's build something amazing together. Get a free consultation and see how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-primary/50 hover:scale-105"
            >
              <Link to="/contact">
                Let's Talk <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/50 text-base transition-all duration-300 hover:scale-105">
                <Phone className="mr-2" size={18} /> Call Now
              </Button>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-card hover:border-accent/50 text-base transition-all duration-300 hover:scale-105">
                <MessageCircle className="mr-2" size={18} /> WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
