import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="container-narrow relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 border border-accent/30">
              Your Digital Growth Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6"
          >
            Empowering Local
            <br />
            Businesses{" "}
            <span className="text-accent">Online</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg"
          >
            We help startups and local businesses thrive with stunning websites,
            smart SEO, and results-driven advertising — all at prices that make sense.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-cta text-cta-foreground hover:bg-cta/90 shadow-xl shadow-cta/30 text-base px-8"
            >
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>

            <a href="tel:+1234567890">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
              >
                <Phone className="mr-2" size={18} /> Call Us
              </Button>
            </a>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
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
