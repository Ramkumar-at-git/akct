import { motion } from "framer-motion";
import { Search, MessageSquare, TrendingUp, Shield } from "lucide-react";
import SectionBlurOverlay from "@/components/SectionBlurOverlay";

const values = [
  {
    icon: Search,
    title: "We work with focus",
    description: "Only one brand per category. No competition. Full commitment."
  },
  {
    icon: MessageSquare,
    title: "We tell real stories",
    description: "Your process, experience, and values — not random trends."
  },
  {
    icon: TrendingUp,
    title: "We think like customers",
    description: "Content is created based on what people want to know before they decide."
  },
  {
    icon: Shield,
    title: "We aim for conversations",
    description: "Not just likes or views, but real enquiries and trust."
  }
];

const AboutSection = () => {
  return (
    <SectionBlurOverlay>
      <section id="about" className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
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
              <span className="text-hero-gradient">About Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-xs sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto px-2 leading-relaxed"
            >
              AKCT Digital Marketing is built for businesses that want clarity, not confusion.
            </motion.p>
          </div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 mb-8 sm:mb-12 md:mb-16"
          >
            <p className="font-body text-xs sm:text-sm md:text-base text-white/90 leading-relaxed mb-4">
              We don't post content just to stay active. We first understand your business, your customers, and the questions people ask before choosing you. Then we create content that answers those questions and builds trust over time.
            </p>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
              To give our best, we work in a <span className="text-primary font-semibold">category-exclusive model</span> — partnering with only one brand per industry.
            </p>
          </motion.div>

          {/* Values */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-hero-gradient"
            >
              Why AKCT
            </motion.h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <value.icon className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4" />
                  <h4 className="font-heading text-xs sm:text-sm md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-foreground">{value.title}</h4>
                  <p className="font-body text-white/70 text-[10px] sm:text-xs md:text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/30"
            >
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-primary">
                Our Mission
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                To help businesses grow by creating clear, honest social media content that builds trust and brings the right customers closer to them.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20"
            >
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
                Our Vision
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                To build brands that people recognise, trust, and choose — by focusing on meaningful stories instead of noise and shortcuts.
              </p>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center mt-8 sm:mt-12 md:mt-16"
          >
            <p className="font-heading text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-hero-gradient">
              AKCT Digital Marketing — One brand. One category. Full focus.
            </p>
          </motion.div>
        </div>
      </section>
    </SectionBlurOverlay>
  );
};

export default AboutSection;
