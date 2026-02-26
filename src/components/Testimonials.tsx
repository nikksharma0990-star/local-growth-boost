import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Owner, Bloom Boutique",
    quote: "NS44 completely transformed our online presence. Our website traffic doubled in just three months, and we're getting more walk-in customers than ever!",
    stars: 5,
  },
  {
    name: "Rajesh Patel",
    role: "Founder, QuickFix Services",
    quote: "Their Google Ads campaign was a game-changer. We went from zero online leads to 50+ quality inquiries a month. Incredible ROI!",
    stars: 5,
  },
  {
    name: "Anita Desai",
    role: "CEO, GreenLeaf Café",
    quote: "The team at NS44 is professional, responsive, and truly understands small business needs. Our new website looks amazing and loads so fast.",
    stars: 5,
  },
  {
    name: "Vikram Singh",
    role: "Director, BuildRight Construction",
    quote: "We were skeptical about digital marketing, but NS44 proved us wrong. Our Meta Ads campaign brought in projects worth 10x our investment.",
    stars: 5,
  },
];

const TestimonialCard = ({ t, i }: { t: typeof testimonials[0]; i: number }) => (
  <motion.div
    key={t.name}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    className="glass-card p-8 relative"
  >
    <Quote className="text-accent/20 absolute top-6 right-6" size={40} />
    <div className="flex gap-1 mb-4">
      {Array.from({ length: t.stars }).map((_, j) => (
        <Star key={j} className="text-cta fill-cta" size={18} />
      ))}
    </div>
    <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
    <div>
      <p className="font-bold text-foreground">{t.name}</p>
      <p className="text-muted-foreground text-sm">{t.role}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3">
            What Our Clients Say
          </h2>
        </motion.div>

        {isMobile ? (
          <div>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((t, i) => (
                  <div key={t.name} className="flex-[0_0_100%] min-w-0 px-2">
                    <TestimonialCard t={t} i={0} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === selectedIndex ? "bg-accent" : "bg-accent/30"
                  }`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} i={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
