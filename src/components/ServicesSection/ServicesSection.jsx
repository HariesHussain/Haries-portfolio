import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../layout/Container";

const SERVICES_DATA = [
  {
    id: "01",
    number: "(01)",
    title: "Branding",
    label: "Branding",
    description:
      "Strong branding sets you apart in a crowded market and turns first impressions into lasting loyalty.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    number: "(02)",
    title: "Development",
    label: "Development",
    description:
      "Building high-performance, responsive web applications with modern technology stacks and clean code.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    number: "(03)",
    title: "Motion",
    label: "Motion",
    description:
      "Crafting fluid micro-animations and dynamic visual narratives that captivate and delight users.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "04",
    number: "(04)",
    title: "Design",
    label: "Design",
    description:
      "User-centered UI/UX design creating intuitive, accessible, and delightful digital product experiences.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section
      id="services"
      className="w-full bg-[#0A0A0A] text-white relative z-20 flex justify-center min-w-0"
      style={{
        paddingTop: "156px",
        paddingBottom: "156px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full flex flex-col lg:flex-row justify-between items-start"
          style={{ gap: "238px", minHeight: "550.21px" }}
        >
          {/* Left Column: Interactive Services Accordion (655px width matching devtools spec) */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col justify-between"
            style={{ width: "655px", maxWidth: "100%", minHeight: "550.21px" }}
          >
            {SERVICES_DATA.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group cursor-pointer border-b border-[#666161]/30 transition-colors duration-300 select-none flex items-center justify-between"
                  style={{
                    paddingTop: "28px",
                    paddingBottom: "28px",
                    minHeight: "137.5px",
                    boxSizing: "border-box",
                  }}
                >
                  <div className="flex items-start gap-2">
                    {/* Service Title */}
                    <h3
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-white font-bold"
                          : "text-[#404040] hover:text-[#707070] font-bold"
                      }`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(44px, 5.5vw, 68px)",
                        lineHeight: 1.05,
                        letterSpacing: "-0.035em",
                        margin: 0,
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Superscript Number aligned beside title top */}
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "32px",
                        fontWeight: 400,
                        lineHeight: 1,
                        color: isActive ? "#F9452D" : "#404040",
                        transform: "translateY(-4px)",
                        display: "inline-block",
                        transition: "color 300ms ease",
                      }}
                    >
                      {service.number}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Feature Preview Card with Reel Scroll Animation */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col flex-shrink-0 min-w-0"
            style={{ width: "307px", maxWidth: "100%", minHeight: "462.2px" }}
          >
            {/* Reel Scroll Image Container */}
            <div
              className="relative rounded-[16px] overflow-hidden bg-[#1a1a1a] flex-shrink-0"
              style={{ width: "307px", maxWidth: "100%", height: "263px" }}
            >
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover rounded-[16px] absolute inset-0"
                  initial={{ y: "100%", opacity: 0.6 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0.6 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
            </div>

            {/* Reel Scroll Text Container */}
            <div
              className="relative overflow-hidden"
              style={{
                marginTop: "28px",
                width: "307px",
                maxWidth: "100%",
                minHeight: "171.2px",
              }}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeService.id}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col"
                >
                  {/* Category Tag */}
                  <div style={{ minHeight: "27.2px", display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#666161",
                        margin: 0,
                      }}
                    >
                      {activeService.label}
                    </span>
                  </div>

                  {/* Paragraph Text */}
                  <p
                    style={{
                      marginTop: "8px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {activeService.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesSection;
