import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-extrabold">
              NS<span className="text-accent">44</span>
            </Link>
            <p className="text-primary-foreground/60 mt-4 leading-relaxed">
              Helping local businesses and startups build a powerful online presence with affordable, results-driven digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Services", "About", "Testimonials", "Contact"].map((label) => (
                <Link
                  key={label}
                  to={label === "Contact" ? "/contact" : label === "Home" ? "/" : `/#${label.toLowerCase()}`}
                  className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={16} /> +1 (234) 567-890
              </a>
              <a href="mailto:hello@ns44.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={16} /> hello@ns44.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" /> 123 Business Avenue, Downtown District
              </div>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} NS44. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
