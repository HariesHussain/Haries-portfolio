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
    <section className="w-full bg-white pt-[32px] md:pt-[48px] lg:pt-[60px] pb-[100px] md:pb-[130px] lg:pb-[156px] relative z-20">
      <Container>
        {/* Project Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-[80px] mb-[60px] md:mb-[80px] lg:mb-[90px]">
          <div className="max-w-[700px]">
            <h2 className="text-ink font-semibold tracking-[-1px] md:tracking-[-2px] lg:tracking-[-3px] leading-[1.05] text-[38px] md:text-[56px] lg:text-[85px] font-sans">
              Projects we're<br />
              <span className="text-muted font-light opacity-80" style={{ fontWeight: 300 }}>proud of</span>
            </h2>
          </div>
          <div className="max-w-[280px] md:pb-2">
            <p className="text-muted text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] font-medium tracking-tight">
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
