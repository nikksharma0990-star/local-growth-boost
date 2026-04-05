import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(265 90% 60% / 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, hsl(170 85% 50% / 0.08), transparent), radial-gradient(ellipse 50% 30% at 10% 80%, hsl(340 90% 58% / 0.08), transparent)'
        }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [5, -15, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-56 h-56 rounded-full bg-accent/10 blur-[80px]"
      />

      <div className="container-narrow relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-6 border border-primary/25 backdrop-blur-sm">
              <Sparkles size={14} className="text-accent" />
              Your Digital Growth Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6"
          >
            <span className="text-foreground">Empowering Local</span>
            <br />
            <span className="text-foreground">Businesses </span>
            <span className="gradient-text">Online</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg"
          >
            We help startups and local businesses thrive with stunning websites,
            smart SEO, and results-driven advertising — all at prices that make sense.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 text-base px-8 transition-all duration-300 hover:shadow-primary/50 hover:scale-105"
            >
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>

            <a href="tel:+1234567890">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/50 text-base transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2" size={18} /> Call Us
              </Button>
            </a>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-card hover:border-accent/50 text-base transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="mr-2" size={18} /> WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
