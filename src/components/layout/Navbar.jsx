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
import Container from "@/components/layout/Container";

const Navbar = () => {
  return (
    <motion.nav
      variants={navbarEntrance}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5]"
    >
      <Container>
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center"
          >
            <img 
              src={logoImage} 
              alt="HARIES Logo" 
              className="h-[clamp(40px,6vw,72px)] w-auto" 
            />
          </a>

          {/* Desktop/Tablet Navigation Links */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16 text-[15px] font-medium text-[#0a0a0a]">
            <a
              href="#about"
              className="hover:text-accent transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#works"
              className="hover:text-accent transition-colors duration-300"
            >
              Works
            </a>
            <a
              href="#contact"
              className="hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="flex flex-col items-center justify-center gap-[5px] w-[56px] h-[40px] bg-[#0a0a0a] rounded-[10px] flex-shrink-0 transition-opacity hover:opacity-90"
            aria-label="Open menu"
          >
            <span className="w-5 h-[1.8px] bg-white rounded-full block" />
            <span className="w-5 h-[1.8px] bg-white rounded-full block" />
            <span className="w-5 h-[1.8px] bg-white rounded-full block" />
          </button>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
