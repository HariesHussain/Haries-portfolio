import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import SocialBar from "@/components/SocialBar/SocialBar";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import StatsSection from "@/components/StatsSection/StatsSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

function App() {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(800);

  useEffect(() => {
    // Initialize Lenis smooth scroll engine for luxury weighted inertia scrolling
    const lenis = new Lenis({
      duration: 1.6,
      lerp: 0.05,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight);
      const handleResize = () => setViewportHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    }
  }, []);

  // Increase the scroll range by 1.6x, requiring 1.6 * viewportHeight scroll distance
  const transitionDistance = viewportHeight * 1.6;
  const maxTranslation = viewportHeight * 0.6; // Pushes the section down to slow its rise

  const whiteSectionY = useTransform(
    scrollY,
    [0, transitionDistance],
    [0, maxTranslation]
  );

  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <motion.div 
          style={{ y: whiteSectionY, willChange: "transform", transform: "translateZ(0)" }} 
          className="relative z-10 bg-white"
        >
          <SocialBar />
          <ProjectsSection />
          <TestimonialsSection />
          <ServicesSection />
          <AboutSection />
          <StatsSection />
          <PricingSection />
          <ContactSection />
          <Footer />
        </motion.div>
      </main>
    </>
  );
}

export default App;
