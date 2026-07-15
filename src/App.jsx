import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";

function App() {
  // Track whether the hero image has been revealed
  // so the navbar can switch to light text mode
  const [heroRevealed, setHeroRevealed] = useState(false);

  useEffect(() => {
    // Sync with hero reveal timing (2.5s delay + a little buffer)
    const timer = setTimeout(() => {
      setHeroRevealed(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar isDark={heroRevealed} />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
