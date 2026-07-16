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
import logoImage from "@/assets/images/hero/logo.png";

const Navbar = () => {
  return (
    <motion.nav
      variants={navbarEntrance}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-paper"
    >
      <div className="mx-auto w-full max-w-content px-6 md:px-[40px] lg:px-[60px]">
        <div className="flex items-center justify-between py-4 md:py-5 lg:py-[22px]">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center"
          >
            <img 
              src={logoImage} 
              alt="Haries Logo" 
              className="h-[24px] md:h-[28px] lg:h-[32px] w-auto" 
            />
          </a>

          {/* Desktop/Tablet Navigation Links */}
          <div className="hidden md:flex items-center gap-[60px] lg:gap-[80px] text-[14px] md:text-[15px] font-medium text-ink tracking-tight">
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
            className="relative flex items-center justify-center w-[54px] h-[38px] md:w-[64px] md:h-[44px] lg:w-[76px] lg:h-[50px] bg-ink rounded-[10px] lg:rounded-[12px] flex-shrink-0"
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-[4px] lg:gap-[5px]">
              <span className="block w-[18px] lg:w-[22px] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[18px] lg:w-[22px] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[18px] lg:w-[22px] h-[1.5px] bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
