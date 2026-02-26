import { motion } from "framer-motion";
import { Globe, Search, Target, Facebook, Palette, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, fast-loading websites built to convert visitors into customers.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Rank higher on Google and get found by the people who matter most.",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Targeted ad campaigns that bring qualified leads straight to your door.",
  },
  {
    icon: Facebook,
    title: "Meta Ads",
    description: "Reach your ideal audience on Facebook and Instagram with precision.",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Eye-catching designs that reflect your brand and engage users.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Breathe new life into your existing site with a modern makeover.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Everything your business needs to succeed in the digital world — under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
