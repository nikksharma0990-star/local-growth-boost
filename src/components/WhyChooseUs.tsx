import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Shield, Users, Zap, Award } from "lucide-react";

const stats = [
  { label: "Years Experience", value: 7, suffix: "+", icon: Award },
  { label: "Happy Clients", value: 1000, suffix: "+", icon: Users },
  { label: "Projects Delivered", value: 2000, suffix: "+", icon: Zap },
  { label: "Satisfaction Rate", value: 99, suffix: "%", icon: Shield },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold gradient-text">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why NS44</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3">
            Your Neighborhood <span className="gradient-text">Digital Partner</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            We're a local agency that genuinely cares about helping businesses in our community grow.
            Affordable, transparent, and results-driven.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center glass-card p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="text-primary" size={28} />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
