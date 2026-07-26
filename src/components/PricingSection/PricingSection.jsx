import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("per_project"); // "per_project" or "monthly"

  return (
    <section
      id="pricing"
      className="w-full bg-white relative z-20 flex justify-center min-w-0"
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
          className="w-full flex flex-col items-center min-h-[1100px]"
        >
          {/* Section Heading: Let's find the right fit (85px Inter #0A0A0A matching h2.framer-text) */}
          <motion.div variants={itemVariants} className="w-full text-center mb-10">
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(52px, 7vw, 85px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#0A0A0A",
                margin: 0,
                minHeight: "93.5px",
              }}
            >
              Let's find the right fit
            </h2>
          </motion.div>

          {/* Billing Cycle Toggle Pills: Per project / Monthly */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-[#F5F5F5] p-1.5 rounded-full inline-flex items-center gap-1">
              <button
                onClick={() => setBillingCycle("per_project")}
                className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                  billingCycle === "per_project"
                    ? "bg-white text-[#0A0A0A] shadow-sm"
                    : "text-[#666161] hover:text-[#0A0A0A]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Per project
              </button>
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-white text-[#0A0A0A] shadow-sm"
                    : "text-[#666161] hover:text-[#0A0A0A]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Monthly
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards Grid: 1200x788.58 matching div.framer-eg3ina */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-4 min-h-[559.89px]">
            {/* CARD 1: Basic Plan ($799 /Per Project) - 592x559.89, 56px padding matching div.framer-XwAKP */}
            <motion.div
              variants={itemVariants}
              className="w-full lg:w-[592px] bg-[#F5F5F5] rounded-[24px] flex flex-col justify-between box-border"
              style={{
                padding: "56px",
                minHeight: "559.89px",
              }}
            >
              <div>
                {/* Price & Plan Pill Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-1">
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(54px, 6vw, 85px)",
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        color: "#0A0A0A",
                      }}
                    >
                      {billingCycle === "per_project" ? "$799" : "$699"}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#666161",
                      }}
                    >
                      {billingCycle === "per_project" ? "/Per Project" : "/month"}
                    </span>
                  </div>

                  <span
                    className="bg-[#0A0A0A] text-white px-5 py-2.5 rounded-full text-[14px] font-medium flex-shrink-0"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Basic Plan
                  </span>
                </div>

                {/* Subtitle Description */}
                <p
                  className="mt-6 mb-8"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.45,
                    color: "#666161",
                    margin: 0,
                    marginTop: "24px",
                    marginBottom: "32px",
                  }}
                >
                  For small business or startups building their first digital presence.
                </p>

                {/* CTA Button: Get in touch */}
                <button
                  className="w-full bg-[#0A0A0A] text-white py-4 rounded-full font-medium text-[16px] transition-opacity hover:opacity-90 mb-10"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Get in touch
                </button>

                {/* Feature Bullet Points */}
                <div className="flex flex-col gap-4">
                  {[
                    "2 revisions per page",
                    "Standard delivery time",
                    "Basic SEO setup",
                    "Email support",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full border border-[#0A0A0A] flex items-center justify-center text-[12px] font-bold text-[#0A0A0A] flex-shrink-0 leading-none">
                        +
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "#0A0A0A",
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Pro Plan ($3999 /month) - 592x559.89, 56px padding matching div.framer-XwAKP */}
            <motion.div
              variants={itemVariants}
              className="w-full lg:w-[592px] bg-[#F5F5F5] rounded-[24px] flex flex-col justify-between box-border"
              style={{
                padding: "56px",
                minHeight: "559.89px",
              }}
            >
              <div>
                {/* Price & Plan Pill Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-1">
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(54px, 6vw, 85px)",
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        color: "#0A0A0A",
                      }}
                    >
                      {billingCycle === "per_project" ? "$3999" : "$3499"}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#666161",
                      }}
                    >
                      {billingCycle === "per_project" ? "/month" : "/month"}
                    </span>
                  </div>

                  <span
                    className="bg-[#F9452D] text-white px-5 py-2.5 rounded-full text-[14px] font-medium flex-shrink-0"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Pro Plan
                  </span>
                </div>

                {/* Subtitle Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.45,
                    color: "#666161",
                    margin: 0,
                    marginTop: "24px",
                    marginBottom: "32px",
                  }}
                >
                  For established brands looking for a fully tailored experience.
                </p>

                {/* CTA Button: Get in touch */}
                <button
                  className="w-full bg-[#0A0A0A] text-white py-4 rounded-full font-medium text-[16px] transition-opacity hover:opacity-90 mb-10"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Get in touch
                </button>

                {/* Feature Bullet Points matching Screenshot 5 */}
                <div className="flex flex-col gap-4">
                  {[
                    "Custom blog design + setup",
                    "Monthly analytics",
                    "E commerce functionality",
                    "Priority support for 6 month",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full border border-[#0A0A0A] flex items-center justify-center text-[12px] font-bold text-[#0A0A0A] flex-shrink-0 leading-none">
                        +
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "#0A0A0A",
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PricingSection;
