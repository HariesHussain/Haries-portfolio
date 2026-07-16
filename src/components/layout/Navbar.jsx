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
        <div className="flex items-center justify-between py-2 md:py-2.5 lg:py-[10px]">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center"
            style={{ marginLeft: "2cm" }}
          >
            <img 
              src={logoImage} 
              alt="Haries Logo" 
              className="h-[48px] md:h-[60px] lg:h-[72px] w-auto" 
            />
          </a>

          {/* Desktop/Tablet Navigation Links */}
          <div className="hidden md:flex items-center gap-[80px] lg:gap-[110px] text-[14px] md:text-[15px] font-medium text-ink tracking-tight">
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
            className="relative flex items-center justify-center w-[46px] h-[32px] md:w-[56px] md:h-[38px] lg:w-[66px] lg:h-[42px] bg-ink rounded-[8px] lg:rounded-[10px] flex-shrink-0 ml-[40px] lg:ml-[60px]"
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-[4px] lg:gap-[5px]">
              <span className="block w-[16px] lg:w-[20px] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[16px] lg:w-[20px] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[16px] lg:w-[20px] h-[1.5px] bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
