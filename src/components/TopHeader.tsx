import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assests/logo.png";

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
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">

            <img
                src={logo}
                alt="AKCT Logo"
                className="w-15 h-12 sm:w-18 sm:h-15 object-contain"
                />

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
