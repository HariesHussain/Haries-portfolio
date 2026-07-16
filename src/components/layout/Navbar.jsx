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
      <div className="mx-auto w-full max-w-content px-6 md:px-[40px] lg:px-[60px]">
        <div className="flex items-center justify-between py-6 md:py-8 lg:py-10">
          {/* Logo */}
          <a
            href="/"
            className="text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-[-0.04em] text-ink flex items-start"
          >
            haries
            <sup className="text-[12px] md:text-[16px] lg:text-[18px] font-semibold mt-[6px] md:mt-[8px] ml-[2px]">
              ®
            </sup>
          </a>

          {/* Desktop/Tablet Navigation Links */}
          <div className="hidden md:flex items-center gap-[60px] lg:gap-[80px] text-[16px] lg:text-[17px] font-medium text-ink">
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
            className="relative flex items-center justify-center w-[64px] h-[48px] md:w-[76px] md:h-[54px] lg:w-[86px] lg:h-[60px] bg-ink rounded-[14px] lg:rounded-[18px] flex-shrink-0"
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-[5px] lg:gap-[6px]">
              <span className="block w-[22px] lg:w-[26px] h-[2px] bg-white rounded-full" />
              <span className="block w-[22px] lg:w-[26px] h-[2px] bg-white rounded-full" />
              <span className="block w-[22px] lg:w-[26px] h-[2px] bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
