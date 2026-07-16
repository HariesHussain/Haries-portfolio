/**
 * Navbar component — Fixed with paper background.
 *
 * From reference screenshot:
 * ─ Solid paper (rgb(245,245,245)) background strip at top
 * ─ "haries®" logo left, dark text
 * ─ "Services", "Works", "Contact" links centered, dark text
 * ─ Dark hamburger button on the right
 * ─ Text stays dark at all times (paper bg is always behind)
 * ─ Enters from 60px above, delayed by 2 seconds
 * ─ Spring: stiffness 400, damping 80, mass 1
 */
import { motion } from "framer-motion";
import { navbarEntrance } from "@/animations/variants";

const Navbar = () => {
  return (
    <motion.nav
      variants={navbarEntrance}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-paper"
    >
      <div className="mx-auto w-full max-w-content px-5 md:px-[30px]">
        <div className="flex items-center justify-between py-5 md:py-6">
          {/* Logo */}
          <a
            href="/"
            className="text-[22px] md:text-[24px] font-semibold tracking-tight text-ink"
          >
            haries
            <sup className="text-[10px] md:text-[11px] font-medium -top-[10px] ml-[1px]">
              ®
            </sup>
          </a>

          {/* Desktop/Tablet Navigation Links */}
          <div className="hidden md:flex items-center gap-[56px] text-[16px] font-medium text-ink">
            <a
              href="#services"
              className="hover:text-accent transition-colors duration-500"
            >
              Services
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
