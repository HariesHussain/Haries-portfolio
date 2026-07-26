import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../layout/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const AboutSection = () => {
  const sectionRef = useRef(null);

  // Smooth scroll-driven zoom out from 688.8x534.79 (1.4 scale) down to 492x381.99 (1.0 scale)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1.0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-[#F5F5F5] relative z-20 flex justify-center min-w-0"
      style={{
        paddingTop: "156px",
        paddingBottom: "80px",
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
          className="w-full flex flex-col min-h-[980px]"
        >
          {/* Header Block: Category Tag + Heading Paragraph */}
          <motion.div variants={itemVariants} className="w-full mb-16 lg:mb-24">
            {/* Category Badge: + About us (16px Inter, #0A0A0A) */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-5 h-5 rounded-full border border-[#0A0A0A] flex items-center justify-center text-[13px] font-bold text-[#0A0A0A] leading-none">
                +
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#0A0A0A",
                  margin: 0,
                }}
              >
                About us
              </span>
            </div>

            {/* Heading Paragraph: 420x100.81, 24px Inter, #0A0A0A */}
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(20px, 2.5vw, 24px)",
                fontWeight: 500,
                lineHeight: 1.45,
                color: "#0A0A0A",
                margin: 0,
                width: "420px",
                maxWidth: "100%",
              }}
            >
              A creative agency is a company that provides specialized services to help businesses build and promote.
            </h2>
          </motion.div>

          {/* Media & Content Row: Image (492x381.99) + Paragraph Block */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Column: Image Box (492x381.99 px) with Scroll-Driven Zoom Out from 688.8x534.79 (1.4 scale) */}
            <motion.div
              variants={itemVariants}
              className="rounded-[16px] overflow-hidden flex-shrink-0 bg-[#e5e5e5]"
              style={{
                width: "492px",
                maxWidth: "100%",
                height: "381.99px",
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000"
                alt="Model portrait"
                className="w-full h-full object-cover rounded-[16px]"
                loading="lazy"
                style={{ scale: imageScale }}
              />
            </motion.div>

            {/* Right Column: Paragraph Text */}
            <motion.div
              variants={itemVariants}
              className="w-full lg:w-[480px] flex flex-col justify-center min-w-0"
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: "#0A0A0A",
                  margin: 0,
                }}
              >
                We turn ideas into visuals that speak with purpose. We're here to bring your vision to life.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
