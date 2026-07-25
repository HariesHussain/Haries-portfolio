import Container from "../layout/Container";
import ProjectGrid from "../ProjectGrid/ProjectGrid";

const PROJECTS_DATA = [
  {
    id: "proj-1",
    number: "01",
    title: "STUDIOLINK",
    year: "2024",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=1200",
    hasLogo: "studiolink",
  },
  {
    id: "proj-2",
    number: "02",
    title: "Zentrox",
    year: "2024",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1200",
    hasLogo: "zentrox",
  },
  {
    id: "proj-3",
    number: "03",
    title: "COREHUE",
    year: "2023",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200",
    hasLogo: "corehue",
  },
  {
    id: "proj-4",
    number: "04",
    title: "Elevana",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
    hasLogo: "none",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="w-full bg-[#f5f5f5] lg:bg-white relative z-20"
      style={{ paddingTop: "90px", paddingBottom: "120px" }}
    >
      <Container>
        {/* Project Section Header — Matching div.framer-5rv09a (1200x187) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 md:mb-16 min-h-[187px]">
          {/* Left Column: Heading */}
          <div>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(48px, 6vw, 76px)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                color: "#0A0A0A",
                margin: 0,
              }}
            >
              Projects we're
              <br />
              <span style={{ fontWeight: 400, color: "#666161" }}>
                proud of
              </span>
            </h2>
          </div>

          {/* Right Column: Paragraph matching p.framer-text (298x102, 20px Inter, #666161) */}
          <div className="flex justify-start md:justify-end pt-2">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                color: "#666161",
                margin: 0,
                width: "298px",
                maxWidth: "100%",
              }}
            >
              A curated collection of projects that showcase my approach to
              design blending creativity.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <ProjectGrid projects={PROJECTS_DATA} />
      </Container>
    </section>
  );
};

export default ProjectsSection;
