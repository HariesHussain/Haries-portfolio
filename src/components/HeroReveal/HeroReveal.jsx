import { useState, useEffect, useMemo, memo } from "react";
import { motion } from "framer-motion";
import {
  INITIAL_DELAY_MS,
  CELL_OPEN_DURATION_MS,
  STAGGER_INTERVAL_MS,
  CELL_EASING,
  COLS
} from "./constants";
import "./HeroReveal.css";

// Top panels shrink upwards
const topPanelVariants = {
  closed: { clipPath: "inset(0% 0% 0% 0%)" },
  open: { clipPath: "inset(0% 0% 100% 0%)" }
};

// Bottom panels shrink downwards
const bottomPanelVariants = {
  closed: { clipPath: "inset(0% 0% 0% 0%)" },
  open: { clipPath: "inset(100% 0% 0% 0%)" }
};

const Panel = memo(function Panel({ isTop, delay }) {
  return (
    <motion.div
      className={`hero-reveal-panel ${isTop ? "panel-top" : "panel-bottom"}`}
      variants={isTop ? topPanelVariants : bottomPanelVariants}
      initial="closed"
      animate="open"
      transition={{
        duration: CELL_OPEN_DURATION_MS / 1000,
        delay: delay,
        ease: CELL_EASING,
      }}
    />
  );
});

function HeroReveal({ onComplete }) {
  const [isTriggered, setIsTriggered] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const panels = useMemo(() => {
    const centerCol = (COLS - 1) / 2; // 2.5 for 6 cols
    const result = [];
    let maxDelay = 0;
    
    for (let col = 0; col < COLS; col++) {
      // Distance from center: col 2,3 = 0.5 | col 1,4 = 1.5 | col 0,5 = 2.5
      const dist = Math.abs(col - centerCol);
      // Normalize so center cols have delay order 0
      const delayOrder = dist - 0.5;
      const delay = delayOrder * (STAGGER_INTERVAL_MS / 1000);
      
      if (delay > maxDelay) maxDelay = delay;
      
      // Top panel for this column
      result.push({ id: `top-${col}`, isTop: true, delay });
    }
    
    // Bottom panels (same delays as top panels for the same column)
    for (let col = 0; col < COLS; col++) {
      const dist = Math.abs(col - centerCol);
      const delayOrder = dist - 0.5;
      const delay = delayOrder * (STAGGER_INTERVAL_MS / 1000);
      
      result.push({ id: `bottom-${col}`, isTop: false, delay });
    }
    
    return { list: result, maxDelay };
  }, []);

  useEffect(() => {
    const triggerTimer = setTimeout(() => {
      setIsTriggered(true);
    }, INITIAL_DELAY_MS);

    return () => clearTimeout(triggerTimer);
  }, []);

  useEffect(() => {
    if (!isTriggered) return;

    const totalDuration = panels.maxDelay + CELL_OPEN_DURATION_MS / 1000;
    const cleanupTimer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, totalDuration * 1000 + 100); 

    return () => clearTimeout(cleanupTimer);
  }, [isTriggered, panels.maxDelay, onComplete]);

  if (isDone) return null;

  return (
    <div className="hero-reveal-grid">
      {isTriggered
        ? panels.list.map((panel) => (
            <Panel key={panel.id} isTop={panel.isTop} delay={panel.delay} />
          ))
        : panels.list.map((panel) => (
            <div 
              key={panel.id} 
              className={`hero-reveal-panel ${panel.isTop ? "panel-top" : "panel-bottom"}`} 
            />
          ))}
    </div>
  );
}

export default memo(HeroReveal);
