import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="container-narrow flex justify-between items-center">
          <span className="hidden sm:inline">Empowering local businesses online</span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-md"
            : "bg-card"
        }`}
      >
        <div className="container-narrow flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-2xl font-extrabold text-primary">
            NS<span className="text-accent">44</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href.startsWith("/#") && location.pathname === "/" ? "/" : link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 shadow-lg shadow-cta/20">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium py-2 text-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 mt-2">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
