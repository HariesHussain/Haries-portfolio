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
      <div className="mx-auto w-full max-w-content px-[clamp(16px,4vw,60px)]">
        <div className="flex items-center justify-between py-[clamp(14px,2vw,22px)]">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center"
          >
            <img 
              src={logoImage} 
              alt="Haries Logo" 
              className="h-[clamp(40px,6vw,72px)] w-auto" 
            />
          </a>

          {/* Desktop/Tablet Navigation Links */}
          <div className="hidden md:flex items-center gap-[clamp(60px,8vw,110px)] text-[clamp(13px,2vw,15px)] font-medium text-ink tracking-tight">
            <a
              href="#about"
              className="hover:text-accent transition-colors duration-400"
            >
              About
            </a>
            <a
              href="#works"
              className="hover:text-accent transition-colors duration-400"
            >
              Works
            </a>
            <a
              href="#contact"
              className="hover:text-accent transition-colors duration-400"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="relative flex items-center justify-center w-[clamp(42px,7vw,66px)] h-[clamp(30px,5vw,42px)] bg-ink rounded-[clamp(6px,1vw,10px)] flex-shrink-0 ml-[clamp(30px,5vw,60px)]"
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-[clamp(3px,0.5vw,5px)]">
              <span className="block w-[clamp(14px,2.5vw,20px)] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[clamp(14px,2.5vw,20px)] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[clamp(14px,2.5vw,20px)] h-[1.5px] bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
