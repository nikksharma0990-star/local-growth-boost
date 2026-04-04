import { motion } from "framer-motion";
import { Globe, Search, Target, Facebook, Palette, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, fast-loading websites built to convert visitors into customers.",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Rank higher on Google and get found by the people who matter most.",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Targeted ad campaigns that bring qualified leads straight to your door.",
    gradient: "from-cta/20 to-primary/10",
  },
  {
    icon: Facebook,
    title: "Meta Ads",
    description: "Reach your ideal audience on Facebook and Instagram with precision.",
    gradient: "from-primary/20 to-cta/10",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Eye-catching designs that reflect your brand and engage users.",
    gradient: "from-accent/20 to-cta/10",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Breathe new life into your existing site with a modern makeover.",
    gradient: "from-cta/20 to-accent/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3">
            Our <span className="gradient-text">Services</span>
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
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card neon-border p-8 group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-primary group-hover:text-accent transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
