import Container from "../layout/Container";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#F5F5F5] relative z-20 flex justify-center min-w-0"
      style={{
        paddingTop: "130px",
        paddingBottom: "156px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Container>
        {/* Main Container: 1200x712 matching div.framer-xomfmy */}
        <div className="w-full flex flex-col lg:min-h-[712px]">
          {/* Header Container: 1200x187 matching div.framer-suj1lv */}
          <div className="w-full min-h-[187px] mb-10 lg:mb-[80px]">
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(52px, 7vw, 85px)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              Journeys that
              <br />
              <span style={{ fontWeight: 400, color: "#666161" }}>
                Inspire us
              </span>
            </h2>
          </div>

          {/* Image & Quote Row: 1200x445 matching div.framer-1as142a */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:gap-[108px] h-auto lg:h-[445px]">
            {/* Left Column Image: 392x445 matching img devtools spec */}
            <div className="w-full lg:w-[392px] h-[350px] sm:h-[400px] lg:h-[445px] flex-shrink-0 rounded-[16px] overflow-hidden mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Ralph Edwards portrait"
                className="w-full h-full object-cover rounded-[16px]"
                loading="lazy"
              />
            </div>

            {/* Right Column Content: 700px width, 343.39px height matching div.framer-hqsl70 */}
            <div className="w-full lg:w-[700px] min-h-[343.39px] flex flex-col justify-between pt-1 min-w-0">
              {/* Quote Heading: 36px Inter #0A0A0A matching h4.framer-text */}
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: "-0.02em",
                  color: "#0A0A0A",
                  margin: 0,
                }}
              >
                “Norell completely transformed our brand. From logo to messaging,
                everything finally feels aligned and professional. We've seen a
                noticeable increase.
              </h3>

              {/* Author Information at bottom of 343.39px container */}
              <div className="pt-8 lg:pt-12">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#0A0A0A",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  Ralph Edwards
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#666161",
                    margin: 0,
                    marginTop: "4px",
                    lineHeight: 1.4,
                  }}
                >
                  Project manager and founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
