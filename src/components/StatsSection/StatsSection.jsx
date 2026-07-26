import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../layout/Container";

const STATS_DATA = [
  {
    id: 1,
    value: 120,
    suffix: "+",
    label: "Brands empowered with strategic design",
  },
  {
    id: 2,
    value: 75,
    suffix: "%",
    label: "Average increase in user engagement",
  },
  {
    id: 3,
    value: 8,
    suffix: "+",
    label: "Years of industry experience",
  },
  {
    id: 4,
    value: 99,
    suffix: "%",
    label: "Project delivery satisfaction",
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
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const AnimatedNumber = ({ value, suffix = "", duration = 1.8 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  useEffect(() => {
    if (isInView) {
      setCount(0);
      let startTimestamp = null;
      let animationFrameId;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // Smooth easeOutCubic curve
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeProgress * value));

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(animationFrameId);
    } else {
      setCount(0);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section
      id="stats"
      className="w-full bg-[#F5F5F5] relative z-20 flex justify-center min-w-0"
      style={{
        paddingTop: "0px",
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
          viewport={{ once: false, amount: 0.2 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-[60px] justify-between"
          style={{ minHeight: "163.9px" }}
        >
          {STATS_DATA.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col justify-start"
            >
              {/* Stat Number: 85px Inter #0A0A0A matching DevTools h1 spec */}
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(54px, 6vw, 85px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  color: "#0A0A0A",
                  margin: 0,
                  minHeight: "93.5px",
                }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>

              {/* Stat Label: 16px Inter #666161 matching DevTools p.framer-text spec */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: "#666161",
                  margin: 0,
                  marginTop: "16px",
                  width: "205px",
                  maxWidth: "100%",
                  minHeight: "54.4px",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default StatsSection;
