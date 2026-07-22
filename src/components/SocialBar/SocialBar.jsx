import { motion } from "framer-motion";

const SocialBar = () => {
  return (
    <div className="w-full bg-white border-b border-line h-[56px] flex items-center select-none z-30 relative">
      <div className="mx-auto w-full max-w-content px-[clamp(16px,4vw,48px)] flex items-center justify-between text-[14px] font-medium text-ink tracking-tight">
        
        {/* Available For Work Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available For Work</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-[24px] md:gap-[32px]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-500"
          >
            In.
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-500"
          >
            Tw.
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-500"
          >
            Fc.
          </a>
        </div>

        {/* Scroll Prompt (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-1 text-muted font-normal">
          <span>Scroll To View More</span>
          <span className="animate-bounce">↓</span>
        </div>

        {/* Copyright */}
        <div className="text-muted font-normal">
          ©2026
        </div>

      </div>
    </div>
  );
};

export default SocialBar;
