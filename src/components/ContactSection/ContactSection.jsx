import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../layout/Container";
import heroImg from "@/assets/images/hero/hero-image.webp";

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

const ContactSection = () => {
  const sectionRef = useRef(null);

  // Smooth continuous scroll-driven zoom animation for the crisp background image:
  // Starts at 1.0 (normal size) when section is reached and stays in view, and smoothly zooms up to 1.35 when scrolling UP out of view.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0.35, 1.0], [1.0, 1.35]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-[#0A0A0A] relative z-20 overflow-hidden flex justify-center min-w-0"
      style={{
        paddingTop: "156px",
        paddingBottom: "156px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      {/* Background Model Image with Scroll Zoom Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
        style={{ scale: imageScale }}
      >
        <img
          src={heroImg}
          alt="Contact Section Background"
          className="w-full h-full object-cover object-[20%_20%] opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/80 pointer-events-none" />
      </motion.div>

      <Container className="relative z-30">
        {/* Main Grid: Total Width 1200px x 567.49px matching div.framer-17tmo6c in Screenshot 5 */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start min-h-[567.49px] gap-8 lg:gap-16 relative z-30 opacity-100">
          {/* Left Column: Form Card Container (511.99 x 567.49 px with 48px 40px padding matching div.framer-av919) */}
          <div
            className="w-full lg:w-[511.99px] bg-white rounded-[24px] box-border shadow-2xl flex-shrink-0 relative z-30 ml-0 lg:ml-6"
            style={{
              padding: "48px 40px",
              minHeight: "567.49px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "32px",
                fontWeight: 500,
                color: "#0A0A0A",
                margin: 0,
                marginBottom: "32px",
                lineHeight: 1.25,
              }}
            >
              Have a project in mind?
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              {/* Your Name Input */}
              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#666161",
                  }}
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-[#F5F5F5] rounded-[12px] px-4 py-3.5 text-[15px] text-[#0A0A0A] placeholder-[#A3A3A3] outline-none border border-transparent focus:border-[#0A0A0A] transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Email Address Input */}
              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#666161",
                  }}
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email@gmail.com"
                  className="w-full bg-[#F5F5F5] rounded-[12px] px-4 py-3.5 text-[15px] text-[#0A0A0A] placeholder-[#A3A3A3] outline-none border border-transparent focus:border-[#0A0A0A] transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#666161",
                  }}
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Your message"
                  className="w-full bg-[#F5F5F5] rounded-[12px] px-4 py-3.5 text-[15px] text-[#0A0A0A] placeholder-[#A3A3A3] outline-none border border-transparent focus:border-[#0A0A0A] transition-all resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0A0A0A] text-white py-4 rounded-full font-medium text-[16px] transition-opacity hover:opacity-90 mt-2 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info Container (568 x 539.55 px matching div.framer-uc25o7 in Screenshot 4) */}
          <div
            className="w-full lg:w-[540px] flex flex-col justify-between box-border pt-2 relative z-30 opacity-100 pl-0 lg:pl-10"
            style={{ minHeight: "539.55px" }}
          >
            <div>
              {/* Heading: Get In Touch (85px Inter #FFFFFF matching h2.framer-text in Screenshot 4) */}
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(52px, 6.5vw, 85px)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                  margin: 0,
                  marginBottom: "48px",
                }}
              >
                Get In
                <br />
                Touch
              </h2>

              {/* Contact Details List: 36px left padding matching div.framer-1ujkyfj in Screenshot 5 */}
              <div
                className="flex flex-col gap-3"
                style={{ paddingLeft: "36px" }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  +1 (208) 555-0112
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#E0E0E0",
                    margin: 0,
                  }}
                >
                  hellonoreel.com
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#E0E0E0",
                    margin: 0,
                  }}
                >
                  demonoreel@mail.com
                </p>
              </div>
            </div>

            {/* Social Links Row: Instagram, LinkedIn, X.com - Solid White #FFFFFF text */}
            <div className="w-full border-t border-[#444444] pt-6 mt-12 flex items-center justify-between relative z-40">
              {[
                { name: "Instagram", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "X.com", url: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="text-white hover:text-white/80 transition-colors text-[16px] font-semibold flex items-center gap-1.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  {social.name} <span className="text-[14px]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
