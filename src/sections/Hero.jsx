/**
 * Hero / Opening Section
 *
 * ═══════════════════════════════════════════════════════════════════════
 * REVERSE ENGINEERING — MEASUREMENTS
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Source: Screenshot 223831.png (initial state) + Screenshot 224146.png (final state)
 * Cross-referenced with Framer AI Audit lines 482–493 and PROJECT_BIBLE lines 310–321
 *
 * ── OVERALL ──
 * Height: 100vh (full viewport)
 * Width: 100vw (full width)
 * Background: rgb(245, 245, 245) — soft gray "paper" color
 * Overflow: hidden (image extends to 110% height for parallax)
 *
 * ── NAVBAR ──
 * Height: ~72–80px total (py ~20-24px)
 * Position: fixed, z-index 50
 * Logo "norell®": 22–24px, font-weight 600, ® as superscript ~10-11px
 * Nav links: 16px, font-weight 500, gap ~56px between links
 * Hamburger: 48×40px, border-radius 12px, bg ink, 3 white lines 18px wide 1.5px thick gap 5px
 * Container: max-width 1200px, px 30px desktop / 20px mobile
 *
 * ── HERO IMAGE (Final State — Screenshot 224146.png) ──
 * Position: absolute, fills the entire hero viewport
 * Object-fit: cover
 * Object-position: center top (face/head area visible)
 * The image extends to ~110% height for parallax scrolling headroom
 * Background image: dark editorial portrait, moody lighting
 * Scale: starts at 1.1, settles to 1.0 during reveal
 *
 * ── LARGE "norell" TYPOGRAPHY ──
 * Position: bottom area of hero, overlaying the image
 * Text: "norell" in lowercase
 * Desktop: ~144px font-size (based on Display heading spec)
 *   — BUT from the screenshot it spans nearly the full 1200px width
 *   — The letters are extremely wide/stretched, likely ~250-280px tall
 *   — This suggests it may be even larger, around 200-250px with tight tracking
 *   — From the screenshot analysis: the text fills ~85% of the viewport width
 *   — Estimated: font-size ~220px on desktop, ~140px tablet, ~72px phone
 * Font-weight: 600
 * Letter-spacing: very tight, approximately -8px to -10px desktop
 * Color: white
 * Line-height: 0.85 (the text sits tight, no extra space)
 * Position from bottom: approximately 80-100px above the bottom info bar
 * The text is left-aligned within the container
 *
 * ── ® SYMBOL (Large, separate from logo) ──
 * Position: upper-right area of the hero image
 * Desktop: ~60-70px, positioned near right edge of container, about 60% from top
 * Tablet: ~50px, similar positioning, bottom-right of image
 * Phone: ~36px
 * Color: white
 * Font-weight: 400-500
 *
 * ── TAGLINE ──
 * Text: "Creating Visual Narratives that Speak to the Heart of Brands"
 * Position: upper-left area overlaying the hero image
 * Desktop: ~20px font-size, font-weight 500, white
 * Width: approximately 200-240px (narrow column, 4 lines)
 * Top position: approximately 140-160px from top of hero viewport
 * Left: aligned with container left edge (30px from viewport edge)
 * Tablet: similar position, ~18px
 * Phone: similar text, slightly smaller ~16px, positioned top-left
 *
 * ── BOTTOM INFORMATION BAR ──
 * Position: absolute bottom of hero viewport
 * Padding: ~20-24px bottom, aligned within the container
 * Layout: horizontal row with items distributed across full width
 * Items (left to right):
 *   1. "Available For Work" — left-aligned
 *   2. "In,  Tw,  Fc" — center-left area (~25% from left)
 *   3. "Scroll To View More ↓" — center-right area (~55% from left)
 *   4. "©2025" — right-aligned
 * Font: 14px, font-weight 500, Inter
 * Color: ink (initial state) → white (final state, when image is behind)
 * Spacing between items: justify-between across the full container
 *
 * Desktop: all 4 items in one horizontal row
 * Tablet: all 4 items in one horizontal row (slightly tighter)
 * Phone: items stack vertically, center-aligned
 *   Order: "Available For Work", "In, Tw, Fc", "©2025", "Scroll To View More ↓"
 *
 * ═══════════════════════════════════════════════════════════════════════
 * ANIMATION SEQUENCE
 * ═══════════════════════════════════════════════════════════════════════
 *
 * From Framer AI Audit lines 748–763 (Preloader) and 482–493 (Opening):
 *
 * The opening is a full-height visual cover with a preloader sequence.
 * The preloader has 6 sequential variants, each using 1s tween + 0.5s delay.
 *
 * Simplified recreation for React:
 *
 * PHASE 1 — INITIAL STATE (T=0)
 * ─ Trigger: page load
 * ─ Visible: soft gray background, bottom info bar (dark text)
 * ─ Hidden: hero image, "norell" text, tagline, ® symbol
 * ─ Navbar: hidden (it has its own 2s delayed entrance)
 *
 * PHASE 2 — IMAGE REVEAL (T ≈ 2.5s)
 * ─ Trigger: timed delay after mount
 * ─ Hero image:
 *     Initial: opacity 0, scale 1.1
 *     Final: opacity 1, scale 1.0
 *     Duration: 1.2s
 *     Ease: cubic-bezier(0.25, 0.1, 0.25, 1) — smooth cinematic
 *     Transform-origin: center center
 * ─ Bottom info bar text: transitions from ink → white over 0.6s
 *
 * PHASE 3 — TEXT REVEAL (T ≈ 3.0s, staggered)
 * ─ Trigger: after image reveal begins (0.3s delay after image starts)
 * ─ Tagline text:
 *     Initial: opacity 0, y 40
 *     Final: opacity 1, y 0
 *     Duration: 0.8s
 *     Ease: cubic-bezier(0.25, 0.1, 0.25, 1)
 *     Delay: 0s (first child)
 * ─ "norell" display text:
 *     Initial: opacity 0, y 40
 *     Final: opacity 1, y 0
 *     Duration: 0.8s
 *     Ease: same
 *     Delay: 0.15s (second child)
 * ─ ® symbol:
 *     Initial: opacity 0, y 40
 *     Final: opacity 1, y 0
 *     Duration: 0.8s
 *     Ease: same
 *     Delay: 0.30s (third child)
 *
 * PHASE 4 — FINAL STATE
 * ─ Everything visible, parallax active on scroll
 * ─ Parallax: outer area speed 60, background image speed 110
 *   (implemented via useScroll + useTransform)
 *
 * LAYER ORDER (z-index):
 * 1. Hero image (z-0)
 * 2. Dark overlay gradient for text legibility (z-10)
 * 3. Tagline text (z-20)
 * 4. "norell" display text (z-20)
 * 5. ® symbol (z-20)
 * 6. Bottom info bar (z-20)
 * 7. Navbar (z-50, managed separately)
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WHAT CANNOT BE MEASURED DIRECTLY
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 1. Exact preloader variant timing — the audit describes 6 variants
 *    with 0.05–0.15s between them plus 1s tween + 0.5s built-in delay.
 *    I recreate this as a single smooth sequence rather than 6 discrete steps.
 *
 * 2. Exact "norell" font size — the text spans nearly the full viewport width.
 *    From the screenshot, the height of the lowercase letters is approximately
 *    40-45% of the viewport height, placed in the lower third. I estimate
 *    font-size ~clamp(72px, 18vw, 250px) to achieve this visual result.
 *
 * 3. Exact gradient overlay opacity — the image needs some darkening at bottom
 *    for the info bar and at top-left for the tagline. Estimated from screenshot
 *    contrast: a subtle gradient from rgba(0,0,0,0.3) to transparent.
 *
 * 4. Parallax exact pixel offset — "speed 60" and "speed 110" are Framer
 *    Smooth Scroll plugin values, not direct pixel amounts. Approximated with
 *    useTransform producing -5% to 5% vertical movement.
 */

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  heroImageReveal,
  heroTextContainer,
  heroTextChild,
} from "@/animations/variants";

// ┌──────────────────────────────────────────────────────────────────┐
// │ TODO: Hero Image                                               │
// │                                                                │
// │ File: src/assets/images/hero/hero-image.webp                   │
// │ Format: WebP (preferred) or JPG                                │
// │ Resolution: 2400 × 1600px (landscape 3:2)                     │
// │ Content: Dark editorial portrait, moody lighting,              │
// │          person photographed from chest up                     │
// │                                                                │
// │ Once you have the image, uncomment the import below            │
// │ and remove the heroImage = null line.                          │
// └──────────────────────────────────────────────────────────────────┘

// Uncomment when image is available:
import heroImage from "@/assets/images/hero/hero-image.webp";

// Remove this line when image is available:


const Hero = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);

  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image parallax: moves slightly slower than scroll (depth effect)
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Trigger the reveal sequence after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-paper"
    >
      {/* ── Hero Background Image ── */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={heroImageReveal}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        style={{ y: imageY, scale: imageScale }}
      >
        {heroImage ? (
          <img
            src={heroImage}
            alt="Creative studio editorial portrait"
            className="w-full h-[110%] object-cover object-[center_20%]"
          />
        ) : (
          /* Fallback: dark gradient simulating the hero image area */
          <div className="w-full h-[110%] bg-gradient-to-br from-[rgb(25,25,30)] via-[rgb(35,30,28)] to-[rgb(20,20,25)]" />
        )}
      </motion.div>

      {/* ── Dark overlay gradient for text legibility ── */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealed ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Bottom gradient for info bar legibility */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
        {/* Top-left gradient for tagline legibility */}
        <div className="absolute top-0 left-0 w-[60%] h-[50%] bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
        {/* General subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* ── Hero Content Overlay (text elements) ── */}
      <motion.div
        className="absolute inset-0 z-20"
        variants={heroTextContainer}
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
      >
        <div className="relative mx-auto w-full max-w-content px-5 md:px-[30px] h-full">
          {/* Tagline — top-left, positioned just below navbar area */}
          <motion.p
            variants={heroTextChild}
            className="absolute top-[100px] md:top-[120px] lg:top-[120px] left-5 md:left-[30px] text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[1.55] max-w-[180px] md:max-w-[200px] lg:max-w-[220px]"
          >
            Creating Visual
            <br />
            Narratives that Speak
            <br />
            to the Heart of Brands
          </motion.p>

          {/* ® Symbol — desktop: upper-right area ~55% down
              tablet: bottom-right above "haries" text
              phone: right side, above "haries" */}
          <motion.span
            variants={heroTextChild}
            className="absolute text-white font-light select-none
              right-5 bottom-[calc(30%+60px)] text-[32px]
              md:right-[30px] md:bottom-auto md:top-[52%] md:text-[50px]
              lg:top-[50%] lg:text-[64px]"
          >
            ®
          </motion.span>

          {/* Large "haries" display text — lower portion of hero
              Desktop: ~220px, fills ~85% container width
              Tablet: ~120px
              Phone: ~60px
              The text sits above the bottom info bar with ~80-90px clearance */}
          <motion.h1
            variants={heroTextChild}
            className="absolute bottom-[65px] md:bottom-[75px] lg:bottom-[85px] left-5 md:left-[30px] right-5 md:right-[30px] text-white font-semibold leading-[0.85] tracking-[-0.04em] select-none"
            style={{
              fontSize: "clamp(60px, 17.5vw, 240px)",
            }}
          >
            haries
          </motion.h1>
        </div>
      </motion.div>

      {/* ── Bottom Information Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto w-full max-w-content px-5 md:px-[30px]">
          {/* Desktop / Tablet — horizontal row */}
          <div
            className="hidden md:flex items-center justify-between py-5 lg:py-6 text-[14px] font-medium text-white"
          >
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
          <div
            className="flex md:hidden flex-col items-center gap-2 py-4 text-[13px] font-medium text-white"
          >
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
      </div>
    </section>
  );
};

export default Hero;
