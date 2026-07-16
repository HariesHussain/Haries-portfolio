import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import SocialBar from "@/components/SocialBar/SocialBar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialBar />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
