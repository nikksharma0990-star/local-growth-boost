import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="section-padding bg-background min-h-screen">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Have a project in mind? We'd love to hear about it. Drop us a message or give us a call.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 (234) 567-890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Service</label>
                <Select value={form.service} onValueChange={(value) => setForm({ ...form, service: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website-designing">Website Designing</SelectItem>
                    <SelectItem value="website-development">Website Development</SelectItem>
                    <SelectItem value="google-meta-ads">Google/Meta Ads</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-cta text-cta-foreground hover:bg-cta/90 shadow-lg shadow-cta/20">
                <Send className="mr-2" size={18} /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "+1 (234) 567-890", href: "tel:+1234567890" },
                  { icon: Mail, label: "hello@ns44.com", href: "mailto:hello@ns44.com" },
                  { icon: MessageCircle, label: "WhatsApp Chat", href: "https://wa.me/1234567890" },
                  { icon: MapPin, label: "123 Business Avenue, Downtown District" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-accent" size={20} />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-accent transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-foreground/80">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card overflow-hidden">
              <iframe
                title="NS44 Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4!3d37.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzQ4LjAiTiAxMjLCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
