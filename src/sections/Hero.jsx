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
} from "@/components/HeroReveal/constants";

import heroImage from "@/assets/images/hero/hero-image.webp";

// ─── Animation timings (synced with grid reveal) ────────────────────

// Text overlay starts appearing ~300ms after grid begins opening
const TEXT_DELAY_S = (INITIAL_DELAY_MS + 300) / 1000;
const TEXT_CHILD_STAGGER_S = 0.12;
const TEXT_CHILD_DURATION_S = 0.7;
const TEXT_EASING = [0.25, 0.1, 0.25, 1];



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
            className="w-full h-[110%] object-cover object-[center_10%] md:object-[center_12%]"
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
            className="absolute top-[20vh] md:top-[25vh] lg:top-[25vh] left-6 md:left-[40px] lg:left-[60px] text-white text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[1.5] max-w-[200px] md:max-w-[240px] lg:max-w-[280px]"
          >
            Creating Visual
            <br />
            Narratives that Speak
            <br />
            to the Heart of Brands
          </motion.p>

          {/* Large "haries" display text — centered, bottom-anchored */}
          <motion.div
            variants={textChildVariants}
            className="absolute bottom-0 left-0 right-0 w-full flex justify-center items-end select-none pb-2 md:pb-4 lg:pb-6"
          >
            <h1
              className="relative text-white font-extrabold leading-[1.1] tracking-[-0.05em]"
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: "clamp(80px, 24vw, 380px)",
              }}
            >
              haries
              <sup
                className="font-light relative"
                style={{
                  fontSize: "clamp(30px, 6vw, 90px)",
                  top: "-0.55em",
                  marginLeft: "0.02em",
                }}
              >
                ®
              </sup>
            </h1>
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default Hero;
