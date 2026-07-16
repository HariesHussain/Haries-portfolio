/**
 * HeroReveal — Grid-cell wipe reveal component.
 *
 * Architecture:
 * A CSS Grid of paper-colored cells sits ABOVE the hero image.
 * On trigger, each cell's clip-path shrinks from inset(0) → inset(50% 0),
 * effectively collapsing the cell vertically and revealing the image behind.
 * Cells open from center outward using a radial stagger pattern.
 *
 * Animation phases (from reference video):
 * T=0–850ms:     Static paper grid (initial stillness)
 * T=850–1800ms:  Cells open center→outward (~400ms per cell, 90ms stagger)
 * T=1800ms+:     Grid removed, onComplete callback fires
 */

import { useState, useEffect, useMemo, memo } from "react";
import { motion } from "framer-motion";
import {
  GRID_COLS,
  GRID_ROWS,
  INITIAL_DELAY_MS,
  CELL_OPEN_DURATION_MS,
  CELL_EASING,
} from "./constants";
import { computeCellDelays } from "./helpers";
import "./HeroReveal.css";

// ─── Cell variant: paper-colored mask that shrinks to nothing ────────
const cellVariants = {
  // Fully covering — cell is opaque paper rectangle
  closed: {
    clipPath: "inset(0% 0% 0% 0%)",
  },
  // Fully open — cell has collapsed vertically to zero height
  open: {
    clipPath: "inset(50% 0% 50% 0%)",
  },
};

// ─── Single grid cell (memoized to prevent re-renders) ──────────────
const GridCell = memo(function GridCell({ delay }) {
  return (
    <motion.div
      className="hero-reveal-cell"
      variants={cellVariants}
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

// ─── Main component ─────────────────────────────────────────────────
function HeroReveal({ onComplete }) {
  const [isTriggered, setIsTriggered] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Compute cell delays once
  const cells = useMemo(() => computeCellDelays(), []);

  // Find the maximum delay to know when the last cell finishes
  const maxDelay = useMemo(
    () => Math.max(...cells.map((c) => c.delay)),
    [cells]
  );

  // Phase 0 → Phase 1 transition: trigger after initial stillness
  useEffect(() => {
    const triggerTimer = setTimeout(() => {
      setIsTriggered(true);
    }, INITIAL_DELAY_MS);

    return () => clearTimeout(triggerTimer);
  }, []);

  // Cleanup: remove grid after all cells have finished opening
  useEffect(() => {
    if (!isTriggered) return;

    const totalDuration = maxDelay + CELL_OPEN_DURATION_MS / 1000;
    const cleanupTimer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, totalDuration * 1000 + 100); // +100ms buffer

    return () => clearTimeout(cleanupTimer);
  }, [isTriggered, maxDelay, onComplete]);

  // After grid is done, remove from DOM
  if (isDone) return null;

  return (
    <div
      className="hero-reveal-grid"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
      }}
    >
      {isTriggered
        ? cells.map(({ row, col, delay }) => (
            <GridCell
              key={`${row}-${col}`}
              delay={delay}
            />
          ))
        : /* Before trigger: render static paper cells (no animation) */
          cells.map(({ row, col }) => (
            <div key={`${row}-${col}`} className="hero-reveal-cell" />
          ))}
    </div>
  );
}

export default memo(HeroReveal);
