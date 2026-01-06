import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace("#", ""));
      const viewportMiddle = window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section's top is above the middle of the viewport
          if (rect.top <= viewportMiddle) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 sm:bottom-8 left-0 right-0 z-50 flex justify-center px-2 sm:px-4"
    >
      <motion.div 
        className="bg-white/15 backdrop-blur-xl rounded-pill px-2 xs:px-3 sm:px-6 py-2.5 xs:py-3 sm:py-3 shadow-glass border border-white/30 w-[calc(100%-1rem)] sm:w-auto max-w-lg sm:max-w-none mx-auto"
        layout
        layoutId="bottomNav"
      >
        <ul className="flex items-center justify-between sm:justify-center gap-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            
            return (
              <li key={item.label} className="flex-1 sm:flex-none">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative w-full px-1.5 xs:px-2 sm:px-5 py-2 xs:py-2.5 sm:py-2.5 font-body text-[11px] xs:text-sm sm:text-sm font-medium transition-all duration-300 rounded-pill block whitespace-nowrap text-center ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#F38933]/40 rounded-pill border border-[#F38933]/60 backdrop-blur-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default BottomNav;
