import { motion } from "framer-motion";
import { 
  Megaphone, 
  Search, 
  PenTool, 
  BarChart3, 
  Globe, 
  Mail,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBlurOverlay from "@/components/SectionBlurOverlay";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions designed to increase visibility, engagement, and conversions across multiple online platforms.",
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "Building strong brand identities that communicate purpose, consistency, and trust across all customer touchpoints.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance, user-focused websites and landing pages optimized for speed, usability, and conversions.",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "ROI-focused campaigns using paid advertising, analytics, and optimization to generate qualified leads and scalable growth.",
  },
  {
    icon: Search,
    title: "Analytics & Strategy",
    description: "Data-backed insights and growth strategies to continuously optimize performance and maximize results.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Personalized email campaigns that nurture leads, drive conversions, and build lasting customer relationships.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionBlurOverlay>
      <section id="services" className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
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
              <span className="text-hero-gradient">Our Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-xs sm:text-base md:text-lg text-white max-w-2xl mx-auto px-2"
            >
              Comprehensive digital marketing solutions tailored to elevate your brand 
              and drive measurable growth.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 hover:bg-white/8 transition-all duration-300 hover:shadow-float"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2 md:mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="font-heading text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
              Ready to grow your business?
            </h3>
            <p className="font-body text-xs sm:text-sm md:text-base text-white mb-4 sm:mb-6 md:mb-8">
              Let's discuss how we can help you achieve your digital marketing goals.
            </p>
            <Button onClick={scrollToContact} variant="hero" size="hero" className="text-xs sm:text-sm md:text-base">
              Get in Touch
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </SectionBlurOverlay>
  );
};

export default ServicesSection;
