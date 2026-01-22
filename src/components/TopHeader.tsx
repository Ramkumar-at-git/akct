import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const TopHeader = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 lg:hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-heading text-primary-foreground font-bold text-sm sm:text-base">A</span>
          </div>
          <span className="font-heading font-bold text-foreground text-sm sm:text-base hidden sm:block">AKCT</span>
        </a>

        {/* Contact Button */}
        <Button 
          onClick={scrollToContact}
          variant="hero" 
          size="sm"
          className="text-xs sm:text-sm px-3 sm:px-5 py-2"
        >
          Contact Us
        </Button>
      </div>
    </motion.header>
  );
};

export default TopHeader;
