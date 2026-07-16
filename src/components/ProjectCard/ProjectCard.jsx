import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import HoverArrow from "../HoverArrow/HoverArrow";

const renderLogo = (type) => {
  if (type === "studiolink") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-white mr-3 inline-block align-middle md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]">
        <path d="M17 7H11V9H17C18.66 9 20 10.34 20 12C20 13.66 18.66 15 17 15H11V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z" />
        <path d="M7 15H13V13H7C5.34 13 4 11.66 4 10C4 8.34 5.34 7 7 7H13V5H7C4.24 5 2 7.24 2 10C2 12.76 4.24 15 7 15Z" />
      </svg>
    );
  }
  if (type === "zentrox") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" className="text-white mr-3 inline-block align-middle md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2V5M12 19V22M2 12H5M19 12H22M5 5l3 3M16 16l3 3M19 5l-3 3M5 19l3-3" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "corehue") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg" className="text-white mr-3 inline-block align-middle md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]">
        <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return null;
};

const ProjectCard = ({ project, isLarge }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking cursor positioning
  const springX = useSpring(mouseX, { stiffness: 180, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const cardRevealVariants = {
    hidden: { opacity: 0, y: 55, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="group relative overflow-hidden rounded-[20px] bg-paper select-none cursor-pointer w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* 1. Project Image (Zoom, Blur, and Darken on Hover) */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden rounded-[20px] z-0"
        animate={{
          scale: isHovered ? 1.05 : 1.0,
          filter: isHovered ? "blur(3px) brightness(0.7)" : "blur(0px) brightness(1.0)",
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-[20px] pointer-events-none"
          loading="lazy"
        />
      </motion.div>

      {/* 2. Cursor-Following Hover Arrow */}
      <motion.div
        className="absolute pointer-events-none z-30"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <HoverArrow />
      </motion.div>

      {/* 3. Card Metadata overlays */}
      <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
        
        {/* Top bar: Number (Left) & Year (Right) */}
        <div className="flex justify-between items-center text-white font-medium text-[13px] tracking-widest uppercase opacity-90">
          <span>{project.number}</span>
          <span>{project.year}</span>
        </div>

        {/* Center: Large Project Title + Logo */}
        <div className="flex-grow flex items-center justify-center">
          <motion.h3
            className="text-white font-semibold tracking-tight text-center select-none flex items-center justify-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(24px, 3.5vw, 36px)",
            }}
            animate={{
              scale: isHovered ? 0.95 : 1.0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          >
            {renderLogo(project.hasLogo)}
            <span className="align-middle inline-block">{project.title}</span>
          </motion.h3>
        </div>

        {/* Bottom space remains empty as per reference layout */}
        <div className="h-[20px]" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
