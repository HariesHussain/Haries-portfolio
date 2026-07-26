import Container from "@/components/layout/Container";

const Footer = () => {
  return (
    <footer className="w-full relative z-20 flex flex-col min-w-0">
      {/* Upper Light Footer Block: 1405.19 x 374.97 with 100px 30px 60px padding matching div.framer-gxtt9u in Screenshot 3 */}
      <div
        className="w-full bg-[#F5F5F5] flex justify-center"
        style={{
          paddingTop: "100px",
          paddingBottom: "60px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Container>
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">
            {/* Left Side: Giant Display "haries®" Logo matching Screenshot 2 & 3 */}
            <div className="flex items-center">
              <h2
                className="relative font-bold text-[#0A0A0A] leading-none select-none tracking-[-0.04em] flex items-start"
                style={{
                  fontFamily: "'General Sans', 'Inter', sans-serif",
                  fontSize: "clamp(64px, 9vw, 140px)",
                  margin: 0,
                }}
              >
                haries
                <span
                  className="font-light text-[#0A0A0A] rounded-full border border-[#0A0A0A] flex items-center justify-center leading-none ml-2 mt-2"
                  style={{
                    fontSize: "clamp(16px, 2.2vw, 32px)",
                    width: "1.1em",
                    height: "1.1em",
                  }}
                >
                  ®
                </span>
              </h2>
            </div>

            {/* Right Side: 3-Column Links Grid (464.99 x 105.58 px matching div.framer-1ehd3nt in Screenshot 2 & 3) */}
            <div className="flex flex-row items-start justify-between gap-12 sm:gap-16 lg:gap-20 w-full lg:w-auto min-w-[320px] lg:min-w-[465px]">
              {/* Column 1: Home (#F9452D accent), About, Contact us matching Screenshot 2 */}
              <div className="flex flex-col gap-3.5">
                <a
                  href="/"
                  className="text-[16px] font-medium transition-colors hover:opacity-80"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#F9452D",
                  }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-[16px] font-medium text-[#0A0A0A] hover:text-[#F9452D] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-[16px] font-medium text-[#0A0A0A] hover:text-[#F9452D] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Contact us
                </a>
              </div>

              {/* Column 2: Privacy policy, Blog */}
              <div className="flex flex-col gap-3.5">
                <a
                  href="#"
                  className="text-[16px] font-medium text-[#0A0A0A] hover:text-[#F9452D] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Privacy policy
                </a>
                <a
                  href="#"
                  className="text-[16px] font-medium text-[#0A0A0A] hover:text-[#F9452D] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Blog
                </a>
              </div>

              {/* Column 3: Projects, Terms & conditions (NO 404 per user request) */}
              <div className="flex flex-col gap-3.5">
                <a
                  href="#works"
                  className="text-[16px] font-medium text-[#0A0A0A] hover:text-[#F9452D] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-[16px] font-medium text-[#0A0A0A] hover:text-[#F9452D] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Terms & conditions
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Lower Dark Copyright Bar: 64px 30px padding matching div.framer-1w6fgbs in Screenshot 2 */}
      <div
        className="w-full bg-[#0A0A0A] text-white flex justify-center"
        style={{
          paddingTop: "64px",
          paddingBottom: "64px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Container>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px]">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#FFFFFF",
                opacity: 0.8,
                margin: 0,
              }}
            >
              © 2025 haries, Inc. All rights reserved.
            </p>

            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-white hover:text-white/70 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Terms & conditions
              </a>
              <a
                href="#"
                className="text-white hover:text-white/70 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Privacy policy
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
