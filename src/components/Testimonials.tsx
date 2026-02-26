import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

const Testimonials = () => {
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

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
