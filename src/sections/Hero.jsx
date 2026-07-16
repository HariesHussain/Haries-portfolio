/**
 * Hero / Opening Section
 *
 * Animation architecture (from reference video):
 *
 * PHASE 0 (T=0–850ms): Paper-colored grid mask covers viewport.
 *   Image is loaded but hidden behind the grid cells.
 *   No navbar, no text overlays visible.
 *
 * PHASE 1 (T=850ms–~1750ms): Grid cells open center→outward
 *   via clip-path shrink (handled by HeroReveal component).
 *   Text overlays (tagline, "haries", ®) begin fading in
 *   as the center cells open (~300ms after grid starts).
 *
 * PHASE 2 (T=~1750ms): Grid fully open, removed from DOM.
 *   onComplete fires — all content now visible.
 *
 * Navbar: separate entrance at T=1900ms (see Navbar.jsx).
 *
 * Parallax: image moves at slightly different scroll rate
 *   (useScroll + useTransform).
 */

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroReveal from "@/components/HeroReveal/HeroReveal";
import {
  INITIAL_DELAY_MS,
  CELL_OPEN_DURATION_MS,
  STAGGER_RING_INTERVAL_MS,
} from "@/components/HeroReveal/constants";

import heroImage from "@/assets/images/hero/hero-image.webp";

// ─── Animation timings (synced with grid reveal) ────────────────────

// Text overlay starts appearing ~300ms after grid begins opening
const TEXT_DELAY_S = (INITIAL_DELAY_MS + 300) / 1000;
const TEXT_CHILD_STAGGER_S = 0.12;
const TEXT_CHILD_DURATION_S = 0.7;
const TEXT_EASING = [0.25, 0.1, 0.25, 1];

// Bottom info bar transitions from ink → white as image reveals
const INFO_BAR_DELAY_S = (INITIAL_DELAY_MS + 200) / 1000;

// ─── Variants ───────────────────────────────────────────────────────

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: TEXT_CHILD_STAGGER_S,
      delayChildren: TEXT_DELAY_S,
    },
  },
};

const textChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TEXT_CHILD_DURATION_S,
      ease: TEXT_EASING,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: TEXT_DELAY_S - 0.1,
      ease: TEXT_EASING,
    },
  },
};

const infoBarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: INFO_BAR_DELAY_S,
      ease: "easeOut",
    },
  },
};

// ─── Component ──────────────────────────────────────────────────────

const Hero = () => {
  const [gridDone, setGridDone] = useState(false);
  const sectionRef = useRef(null);

  // Parallax scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-paper"
    >
      {/* ── Hero Background Image ──
          Always rendered — visibility controlled by the grid mask above.
          No opacity animation needed; the grid cells handle the reveal. */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
      >
        {heroImage ? (
          <img
            src={heroImage}
            alt="Creative studio editorial portrait"
            className="w-full h-[110%] object-cover object-[center_20%]"
          />
        ) : (
          <div className="w-full h-[110%] bg-gradient-to-br from-[rgb(25,25,30)] via-[rgb(35,30,28)] to-[rgb(20,20,25)]" />
        )}
      </motion.div>

      {/* ── Dark overlay gradient for text legibility ──
          Fades in as the grid cells open */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
        <div className="absolute top-0 left-0 w-[60%] h-[50%] bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* ── Grid Cell Wipe Reveal ──
          6×4 grid of paper-colored cells that open center→outward.
          Sits above the image (z-30) and masks it during initial state.
          Removes itself from DOM once all cells are open. */}
      <HeroReveal onComplete={() => setGridDone(true)} />

      {/* ── Hero Content Overlay (text elements) ──
          Staggers in while grid cells are opening */}
      <motion.div
        className="absolute inset-0 z-20"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative mx-auto w-full max-w-content px-5 md:px-[30px] h-full">
          {/* Tagline — top-left, below navbar area */}
          <motion.p
            variants={textChildVariants}
            className="absolute top-[100px] md:top-[120px] lg:top-[120px] left-5 md:left-[30px] text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[1.55] max-w-[180px] md:max-w-[200px] lg:max-w-[220px]"
          >
            Creating Visual
            <br />
            Narratives that Speak
            <br />
            to the Heart of Brands
          </motion.p>

          {/* ® Symbol — right side, ~55% down */}
          <motion.span
            variants={textChildVariants}
            className="absolute text-white font-light select-none
              right-5 bottom-[calc(30%+60px)] text-[32px]
              md:right-[30px] md:bottom-auto md:top-[52%] md:text-[50px]
              lg:top-[50%] lg:text-[64px]"
          >
            ®
          </motion.span>

          {/* Large "haries" display text — lower portion of hero */}
          <motion.h1
            variants={textChildVariants}
            className="absolute bottom-[65px] md:bottom-[75px] lg:bottom-[85px] left-5 md:left-[30px] right-5 md:right-[30px] text-white font-semibold leading-[0.85] tracking-[-0.04em] select-none"
            style={{
              fontSize: "clamp(60px, 17.5vw, 240px)",
            }}
          >
            haries
          </motion.h1>
        </div>
      </motion.div>

      {/* ── Bottom Information Bar ──
          Fades in during the reveal — starts dark, but always white
          since image is always behind (grid handles the masking) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        variants={infoBarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto w-full max-w-content px-5 md:px-[30px]">
          {/* Desktop / Tablet — horizontal row */}
          <div className="hidden md:flex items-center justify-between py-5 lg:py-6 text-[14px] font-medium text-white">
            <span>Available For Work</span>
            <span className="flex items-center gap-3">
              <span>In.</span>
              <span>Tw.</span>
              <span>Fc.</span>
            </span>
            <span className="flex items-center gap-1.5">
              Scroll To View More
              <svg
                className="w-3.5 h-3.5 mt-0.5"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1V13M7 13L1 7M7 13L13 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>©2025</span>
          </div>

          {/* Mobile — stacked vertically, center-aligned */}
          <div className="flex md:hidden flex-col items-center gap-2 py-4 text-[13px] font-medium text-white">
            <span>Available For Work</span>
            <span className="flex items-center gap-2.5">
              <span>In.</span>
              <span>Tw.</span>
              <span>Fc.</span>
            </span>
            <span>©2025</span>
            <span className="flex items-center gap-1.5">
              Scroll To View More
              <svg
                className="w-3 h-3 mt-0.5"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1V13M7 13L1 7M7 13L13 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
