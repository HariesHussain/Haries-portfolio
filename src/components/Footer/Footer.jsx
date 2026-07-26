import Container from "@/components/layout/Container";
import logoImage from "@/assets/images/hero/logo.png";

const Footer = () => {
  return (
    <footer className="w-full relative z-20 flex flex-col min-w-0">
      {/* Upper Light Footer Block: 1405.19 x 374.97 with 100px 30px 60px padding matching div.framer-gxtt9u in Screenshot 2 */}
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
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            {/* Left Side: HARIES Logo from Navbar */}
            <a href="/" className="flex items-center">
              <img
                src={logoImage}
                alt="HARIES Logo"
                className="h-[clamp(70px,10vw,120px)] w-auto object-contain"
              />
            </a>

            {/* Right Side: 3-Column Links Grid (464.99 x 105.58 px matching div.framer-1ehd3nt in Screenshot 3 & 4) */}
            <div className="flex flex-wrap items-start gap-12 sm:gap-16 lg:gap-20 max-w-[465px]">
              {/* Column 1: Home (#F9452D accent), About, Contact us matching Screenshot 4 & 5 */}
              <div className="flex flex-col gap-3 min-w-[82px]">
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
              <div className="flex flex-col gap-3">
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

              {/* Column 3: Projects, Terms & conditions, 404 */}
              <div className="flex flex-col gap-3">
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
                <a
                  href="#"
                  className="text-[16px] font-medium text-[#0A0A0A] hover:text-[#F9452D] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  404
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Lower Dark Copyright Bar: #0A0A0A matching Screenshot 1 */}
      <div
        className="w-full bg-[#0A0A0A] text-white flex justify-center"
        style={{
          paddingTop: "32px",
          paddingBottom: "32px",
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
