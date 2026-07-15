/**
 * Navbar component — Fixed, transparent.
 *
 * From Framer AI Audit:
 * ─ Fixed at the top, full-width
 * ─ Desktop/tablet: logo + primary links + menu control
 * ─ Phone: logo + menu control (links hidden)
 * ─ Enters from 60px above, starts transparent
 * ─ Spring: stiffness 400, damping 80, mass 1
 * ─ Delayed by 2 seconds
 *
 * From Screenshot 224146.png (final state):
 * ─ "norell" logo with ® superscript, ~24px, weight 600, left-aligned
 * ─ Nav links: "About", "Works", "Contact" — ~16px, weight 500, spaced ~60-80px apart
 * ─ Hamburger button: dark near-black rounded rectangle (~48×40px), border-radius ~12px
 * ─ Three horizontal lines inside the hamburger, white, ~18px wide
 * ─ Navbar padding: ~20px vertical (total height ~80px with padding)
 * ─ Side padding matches container: 30px desktop, 20px mobile
 *
 * From Screenshot 223831.png (initial state — light bg):
 * ─ Logo and links are dark (ink color) on light background
 * ─ Hamburger button is dark with white lines
 *
 * From Screenshot 224146.png (final state — dark hero image):
 * ─ Logo and links become white on dark background
 * ─ Hamburger button stays dark with white lines
 */
import { motion } from "framer-motion";
import { navbarEntrance } from "@/animations/variants";

const Navbar = ({ isDark = false }) => {
  return (
    <motion.nav
      variants={navbarEntrance}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto w-full max-w-content px-5 md:px-[30px]">
        <div className="flex items-center justify-between py-5 md:py-6">
          {/* Logo */}
          <a
            href="/"
            className={`text-[22px] md:text-[24px] font-semibold tracking-tight transition-colors duration-500 ${
              isDark ? "text-white" : "text-ink"
            }`}
          >
            norell
            <sup className="text-[10px] md:text-[11px] font-medium -top-[10px] ml-[1px]">
              ®
            </sup>
          </a>

          {/* Desktop/Tablet Navigation Links */}
          <div
            className={`hidden md:flex items-center gap-[56px] text-[16px] font-medium transition-colors duration-500 ${
              isDark ? "text-white" : "text-ink"
            }`}
          >
            <a
              href="#about"
              className="hover:text-accent transition-colors duration-500"
            >
              About
            </a>
            <a
              href="#works"
              className="hover:text-accent transition-colors duration-500"
            >
              Works
            </a>
            <a
              href="#contact"
              className="hover:text-accent transition-colors duration-500"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="relative flex items-center justify-center w-[48px] h-[40px] bg-ink rounded-[12px] flex-shrink-0"
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span className="block w-[18px] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[18px] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[18px] h-[1.5px] bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
