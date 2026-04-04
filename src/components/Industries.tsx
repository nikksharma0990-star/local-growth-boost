import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&q=80",
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&q=80",
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&q=80",
  },
  {
    name: "Restaurants & Food",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&q=80",
  },
  {
    name: "Retail & E-Commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop&q=80",
  },
  {
    name: "Fitness & Wellness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&q=80",
  },
];

const Industries = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Industries</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3">
            Industries We've <span className="gradient-text">Served</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            From local shops to growing startups, we deliver results across diverse sectors.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {industries.map((item) => (
                <div
                  key={item.name}
                  className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] min-w-0 pl-4"
                >
                  <div className="glass-card neon-border overflow-hidden group cursor-grab active:cursor-grabbing">
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-center font-bold text-foreground py-4 text-lg group-hover:text-primary transition-colors duration-300">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
