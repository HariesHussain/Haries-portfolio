/**
 * Motion variants for the Norell portfolio.
 * All values derived from the Framer AI Audit document.
 *
 * Core reveal: opacity 0→1, y 60→0, spring 400/80/1
 * Navbar entrance: opacity 0→1, y -60→0, spring 400/80, delay 2s
 * Preloader sequence: 6 variant stages, tween 1s, delay 0.5s
 */

// ─── Core reveal (used across most sections) ───
export const rise = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 80,
      mass: 1,
    },
  },
};

// ─── Navbar entrance ───
export const navbarEntrance = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 80,
      mass: 1,
      delay: 1.9,
    },
  },
};

// ─── Slide from left (section heading split reveal) ───
export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 80,
      mass: 1,
    },
  },
};

// ─── Slide from right ───
export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 80,
      mass: 1,
      delay: 0.2,
    },
  },
};

// ─── Card scale reveal ───
export const cardScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  },
};

// ─── Hero image reveal ───
export const heroImageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Hero text reveal (staggered children) ───
export const heroTextContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const heroTextChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Fade in (generic) ───
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ─── Stagger container ───
export const staggerContainer = (staggerDelay = 0.2) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// ─── Button hover ───
export const buttonHover = {
  rest: {
    backgroundColor: "rgb(10 10 10)",
    color: "rgb(255 255 255)",
    transition: { type: "spring", duration: 0.4 },
  },
  hover: {
    backgroundColor: "rgb(249 69 45)",
    color: "rgb(255 255 255)",
    transition: { type: "spring", duration: 0.4 },
  },
};
