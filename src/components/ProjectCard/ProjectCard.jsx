import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverArrow from "../HoverArrow/HoverArrow";

const ProjectCard = ({ project, isLarge }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Stagger reveal animation for the card itself on mount
  const cardRevealVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <motion.div
      variants={cardRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative overflow-hidden rounded-[16px] bg-paper select-none cursor-pointer`}
      style={{
        height: "561px",
        width: "100%", // Controlled by ProjectGrid flex/grid items
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Project Image (Zoom & Blur on hover) */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden rounded-[16px] z-0"
        animate={{
          scale: isHovered ? 1.07 : 1.0,
          filter: isHovered ? "blur(4px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 1, 0.5, 1], // Smooth premium ease-out
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-[16px] pointer-events-none"
          loading="lazy"
        />
      </motion.div>

      {/* 2. Dark Overlay (Fades in) */}
      <motion.div
        className="absolute inset-0 bg-black/25 z-10 pointer-events-none rounded-[16px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* 3. Card Metadata & Typography */}
      <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
        
        {/* Top bar: Number & Year */}
        <div className="flex justify-between items-center text-white font-medium text-[13px] tracking-widest uppercase opacity-80">
          <span>{project.number}</span>
          <span>{project.year}</span>
        </div>

        {/* Center: Large Project Title (Logo behavior, shrinks on hover) */}
        <div className="flex-grow flex items-center justify-center">
          <motion.h3
            className="text-white font-black tracking-[-0.03em] leading-none text-center select-none"
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontSize: "clamp(32px, 5vw, 64px)",
            }}
            animate={{
              scale: isHovered ? 0.88 : 1.0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          >
            {project.title}
          </motion.h3>
        </div>

        {/* Bottom bar: Category & HoverArrow */}
        <div className="flex justify-between items-end">
          {/* Category Details */}
          <div className="flex flex-col gap-1 text-white">
            <span className="text-[12px] uppercase tracking-widest opacity-60 font-medium">
              Category
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              {project.type}
            </span>
          </div>

          {/* Interactive Arrow Button (framer-motion animated) */}
          <div className="relative w-[54px] h-[54px] overflow-visible">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 15 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                  className="absolute bottom-0 right-0"
                >
                  <HoverArrow />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
