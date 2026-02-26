import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-accent-foreground mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-lg mx-auto mb-8">
            Let's build something amazing together. Get a free consultation and see how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 shadow-xl"
            >
              <Link to="/contact">
                Let's Talk <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 text-base">
                <Phone className="mr-2" size={18} /> Call Now
              </Button>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 text-base">
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
