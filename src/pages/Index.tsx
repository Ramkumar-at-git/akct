import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import Scene3D from "@/components/Scene3D";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BlogsSection from "@/components/sections/BlogsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AKCT Digital Marketing | Premium Digital Growth Agency</title>
        <meta 
          name="description" 
          content="AKCT Digital Marketing transforms brands through strategic digital growth, innovative branding, and high-performance marketing that drives measurable results." 
        />
      </Helmet>
      
      <div className="relative min-h-screen gradient-radial noise-overlay overflow-x-hidden">
        <TopHeader />
        <BottomNav />
        
        {/* 3D Scene Background */}
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
        
        {/* All Sections */}
        <div className="relative z-10">
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <BlogsSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Index;
