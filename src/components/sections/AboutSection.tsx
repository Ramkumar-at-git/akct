import { motion } from "framer-motion";
import { Users, Target, Award, Zap } from "lucide-react";
import SectionBlurOverlay from "@/components/SectionBlurOverlay";

const values = [
  {
    icon: Target,
    title: "Strategy-First",
    description: "Data-driven decision making with a strategy-first approach to every project."
  },
  {
    icon: Users,
    title: "Transparent",
    description: "Transparent communication and proven results across industries."
  },
  {
    icon: Award,
    title: "Creative Excellence",
    description: "Perfect balance of creative storytelling and performance marketing."
  },
  {
    icon: Zap,
    title: "Results-Driven",
    description: "Technology-driven solutions that accelerate growth and engagement."
  }
];

const team = [
  { name: "Alex Chen", role: "Founder & CEO", delay: 0 },
  { name: "Sarah Miller", role: "Creative Director", delay: 0.1 },
  { name: "David Park", role: "Strategy Lead", delay: 0.2 },
  { name: "Emma Wilson", role: "Marketing Head", delay: 0.3 },
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
              className="font-body text-xs sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto px-2"
            >
              AKCT Digital Marketing is a results-driven digital agency specializing in brand growth, online visibility, and performance marketing.
            </motion.p>
          </div>

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

          {/* Team */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-hero-gradient"
            >
              Meet the Team
            </motion.h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: member.delay }}
                  className="text-center"
                >
                  <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20" />
                  <h4 className="font-heading text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground">{member.name}</h4>
                  <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="max-w-3xl mx-auto text-center px-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-hero-gradient"
            >
              Our Vision & Mission
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed mb-3 sm:mb-4"
            >
              To become a trusted digital growth partner for brands worldwide by delivering innovative, scalable, and measurable marketing solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed"
            >
              Our mission is to empower brands through strategic digital marketing, creative storytelling, and technology-driven solutions that accelerate growth and engagement.
            </motion.p>
          </div>
        </div>
      </section>
    </SectionBlurOverlay>
  );
};

export default AboutSection;
