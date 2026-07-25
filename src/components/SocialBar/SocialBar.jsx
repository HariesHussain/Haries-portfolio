import { motion } from "framer-motion";

import Container from "../layout/Container";

const SocialBar = () => {
  return (
    <div className="w-full bg-[#f5f5f5] lg:bg-white border-y border-[#666161]/15 h-[56px] flex items-center select-none z-30 relative">
      <Container className="flex items-center justify-between text-[14px] font-medium text-[#0a0a0a] tracking-tight">
        
        {/* Available For Work Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available For Work</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 md:gap-6 text-[#0a0a0a]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            In,
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            Tw,
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            Fc
          </a>
        </div>

        {/* Scroll Prompt (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-1.5 text-[#666161] font-normal">
          <span>Scroll To View More</span>
          <span className="animate-bounce">↓</span>
        </div>

        {/* Copyright */}
        <div className="text-[#666161] font-normal">
          @2025
        </div>

      </Container>
    </div>
  );
};

export default SocialBar;
