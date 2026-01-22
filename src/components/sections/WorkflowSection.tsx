import { motion } from "framer-motion";
import { 
  Search, 
  PenTool, 
  User,
  Calendar,
  BarChart3,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBlurOverlay from "@/components/SectionBlurOverlay";

const workflowSteps = [
  {
    step: 1,
    icon: Search,
    title: "Discovery & Strategy",
    description: "Understanding your business and customer intent",
    color: "from-orange-500 to-amber-500",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Content Creation",
    description: "Intent-based reels and posts that build trust",
    color: "from-amber-500 to-yellow-500",
  },
  {
    step: 3,
    icon: User,
    title: "Personal Branding",
    description: "Positioning founders as industry experts",
    color: "from-yellow-500 to-lime-500",
  },
  {
    step: 4,
    icon: Calendar,
    title: "Social Media Management",
    description: "Structured growth, not random posting",
    color: "from-lime-500 to-green-500",
  },
  {
    step: 5,
    icon: BarChart3,
    title: "Reporting & Insights",
    description: "Measurable clarity, not vanity metrics",
    color: "from-green-500 to-emerald-500",
  },
];

const WorkflowSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionBlurOverlay>
      <section id="services" className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6"
            >
              <span className="text-hero-gradient">Our Workflow</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-xs sm:text-base md:text-lg text-white max-w-2xl mx-auto px-2"
            >
              A proven step-by-step process designed to transform your brand's digital presence
            </motion.p>
          </div>

          {/* Innovative Timeline Design */}
          <div className="relative mb-10 sm:mb-14 md:mb-20">
            {/* Vertical connecting line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 transform -translate-x-1/2" />

            {/* Workflow Steps */}
            <div className="space-y-6 sm:space-y-8 md:space-y-0">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative md:flex md:items-center md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-primary/40 transition-all duration-500 overflow-hidden"
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Step badge */}
                      <div className={`inline-flex items-center gap-2 mb-3 sm:mb-4 ${index % 2 === 0 ? 'md:float-right md:ml-3' : 'md:float-left md:mr-3'}`}>
                        <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                          <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                            <span className="font-heading text-[10px] sm:text-xs font-bold text-white">{step.step}</span>
                          </div>
                        </div>
                      </div>

                      <div className={`${index % 2 === 0 ? 'md:clear-right' : 'md:clear-left'}`}>
                        <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="font-body text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot - hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-primary/20"
          >
            <h3 className="font-heading text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
              Ready to start your journey?
            </h3>
            <p className="font-body text-xs sm:text-sm md:text-base text-white mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto">
              Let's discuss how our workflow can transform your brand into a trusted industry leader.
            </p>
            <Button onClick={scrollToContact} variant="hero" size="hero" className="text-xs sm:text-sm md:text-base">
              Book Discovery Call
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </SectionBlurOverlay>
  );
};

export default WorkflowSection;
