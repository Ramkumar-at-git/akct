import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBlurOverlay from "@/components/SectionBlurOverlay";

const blogs = [
  {
    title: "Digital Marketing Trends Shaping 2025",
    excerpt: "Stay ahead of the curve with emerging trends that are reshaping the digital landscape.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Digital Marketing"
  },
  {
    title: "Building a Brand That Stands Out",
    excerpt: "Discover the key elements that make a brand memorable and how to implement them effectively.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: "Branding & Design"
  },
  {
    title: "Growth Strategies for Scaling Startups",
    excerpt: "Proven frameworks and tactics to accelerate your startup's growth trajectory.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Growth Strategies"
  },
  {
    title: "E-commerce Success: A Case Study",
    excerpt: "How we helped an e-commerce brand achieve 300% growth in 6 months.",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    category: "Case Studies"
  },
  {
    title: "The Future of Performance Marketing",
    excerpt: "Understanding shifts in paid advertising and how to adapt your strategy.",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    category: "Industry Trends"
  },
  {
    title: "Data-Driven Decision Making",
    excerpt: "How to leverage analytics for smarter marketing investments and better ROI.",
    date: "Nov 15, 2024",
    readTime: "10 min read",
    category: "Growth Strategies"
  }
];

const BlogsSection = () => {
  return (
    <SectionBlurOverlay>
      <section id="blogs" className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
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
              <span className="text-hero-gradient">Our Blog</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-xs sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto px-2"
            >
              Insights, strategies, and trends from the world of digital marketing, branding, and business growth.
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div className="h-20 sm:h-32 md:h-40 lg:h-48 bg-white/5" />
                
                <div className="p-3 sm:p-4 md:p-6">
                  <span className="inline-block px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs font-medium bg-primary/20 text-primary rounded-full mb-2 sm:mb-3 md:mb-4">
                    {blog.category}
                  </span>
                  
                  <h3 className="font-heading text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] md:text-xs text-white/60">
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Calendar className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Clock className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="heroOutline" size="heroSm" className="text-xs sm:text-sm">
              Load More
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </SectionBlurOverlay>
  );
};

export default BlogsSection;
