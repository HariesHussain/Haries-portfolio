import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import SocialBar from "@/components/SocialBar/SocialBar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";

function App() {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(800);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight);
      const handleResize = () => setViewportHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
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
          style={{ y: whiteSectionY }} 
          className="relative z-10 bg-white"
        >
          <SocialBar />
          <ProjectsSection />
          <TestimonialsSection />
        </motion.div>
      </main>
    </>
  );
}

export default App;
