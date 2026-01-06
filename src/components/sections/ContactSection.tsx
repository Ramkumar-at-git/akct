import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionBlurOverlay from "@/components/SectionBlurOverlay";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact.akct@gmail.com",
    href: "mailto:contact.akct@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "70109 18591",
    href: "tel:+917010918591",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Porur - Kattupakkam",
    href: "https://maps.app.goo.gl/xQQecpkV1KcAo81U6",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <SectionBlurOverlay>
      <section id="contact" className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 pb-28 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6"
            >
              <span className="text-hero-gradient">Let's Build Your Digital Growth Story</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-xs sm:text-base md:text-lg text-white max-w-2xl mx-auto px-2"
            >
              Have a project in mind or looking to grow your brand online? Get in touch with us and let's create impactful digital solutions together.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20"
            >
              <h3 className="font-heading text-base sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-foreground">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 mb-1 sm:mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 mb-1 sm:mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 text-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 mb-1 sm:mb-2 block">
                    Company (optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="bg-background/50 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 mb-1 sm:mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    className="bg-background/50 resize-none text-xs sm:text-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="hero"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto text-xs sm:text-sm md:text-base"
                >
                  {isSubmitting ? "Sending..." : "Start Your Project"}
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </Button>
                <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 mt-2 sm:mt-3">
                  We typically respond within 24 hours.
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:pl-4"
            >
              <h3 className="font-heading text-base sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === "Location" ? "_blank" : undefined}
                    rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/60">{info.label}</p>
                      <p className="font-body text-xs sm:text-sm md:text-base text-foreground font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.139063896046!2d80.15234231482243!3d13.034619090818693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261b0e4e4e6e9%3A0x1f0f0c6c9f5a4a2c!2sPorur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionBlurOverlay>
  );
};

export default ContactSection;
