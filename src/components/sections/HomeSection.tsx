import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomeSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-24 pb-20">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-3 xs:mb-4 sm:mb-6"
        >
          <span className="text-hero-gradient">AKCT Digital</span>
          <br />
          <span className="text-hero-gradient">Marketing</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-body text-xs xs:text-sm sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-5 xs:mb-6 sm:mb-10 leading-relaxed px-2"
        >
          AKCT Digital Marketing helps businesses build authority and generate quality enquiries through intent-driven social media strategies. Our approach is rooted in discovery, customer search behavior, and strategic content planning — not trends or guesswork.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex justify-center items-center"
        >
          <Button onClick={scrollToContact} variant="hero" size="hero" className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
            Book Discovery Call
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-border/50"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
              {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Clients Worldwide" },
              { value: "98%", label: "Client Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-base xs:text-lg sm:text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="font-body text-[10px] xs:text-xs sm:text-sm text-white/70 mt-0.5 xs:mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
