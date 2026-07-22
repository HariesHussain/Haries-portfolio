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
    <section className="w-full bg-white relative z-20" style={{ paddingTop: '130px', paddingBottom: 'clamp(80px, 10vw, 156px)' }}>
      <Container>
        {/* Project Section Header — CSS Grid: 65% / 35% */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 mb-[110px]">
          {/* Left Column: Heading */}
          <div>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(68px, 6vw, 78px)',
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
                color: '#1A1A1A',
                margin: 0,
              }}
            >
              Projects we're<br />
              <span style={{ fontWeight: 300, color: '#666161' }}>proud of</span>
            </h2>
          </div>

          {/* Right Column: Paragraph — aligned to upper right corner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              paddingTop: '8px',
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: 1.55,
                letterSpacing: '-0.01em',
                color: '#666161',
                margin: 0,
                maxWidth: '300px',
              }}
            >
              A curated collection of projects that showcase my approach to design blending creativity.
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
