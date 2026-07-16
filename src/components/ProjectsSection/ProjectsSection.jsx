import Container from "../layout/Container";
import ProjectGrid from "../ProjectGrid/ProjectGrid";

const PROJECTS_DATA = [
  {
    id: "proj-1",
    number: "01",
    title: "APEX STUDIO",
    year: "2024",
    type: "Brand Identity / Web",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "proj-2",
    number: "02",
    title: "NOVA PLATFORM",
    year: "2024",
    type: "Product Design / UX",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "proj-3",
    number: "03",
    title: "AETHER JOURNAL",
    year: "2023",
    type: "Editorial Design / Print",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "proj-4",
    number: "04",
    title: "ECLIPSE MOBILE",
    year: "2024",
    type: "Mobile Experience / App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "proj-5",
    number: "05",
    title: "CORTEX STUDIO",
    year: "2024",
    type: "Interactive Web / Dev",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "proj-6",
    number: "06",
    title: "VORTEX BRANDING",
    year: "2023",
    type: "Creative Studio / Art",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "proj-7",
    number: "07",
    title: "QUANTUM INTERFACE",
    year: "2024",
    type: "Visual Design / Web3",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "proj-8",
    number: "08",
    title: "ZENITH GALLERY",
    year: "2023",
    type: "Exhibition / Spatial",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=1200",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full bg-white pt-[80px] md:pt-[110px] lg:pt-[130px] pb-[100px] md:pb-[130px] lg:pb-[156px] relative z-20">
      <Container>
        {/* Project Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-[80px] mb-[60px] md:mb-[80px] lg:mb-[100px]">
          <div className="max-w-[700px]">
            <h2 className="text-ink font-semibold tracking-[-1px] md:tracking-[-2px] leading-[1.1] text-[38px] md:text-[56px] lg:text-[85px] font-sans">
              Projects we're<br />
              <span className="text-muted font-light opacity-80" style={{ fontWeight: 300 }}>proud of</span>
            </h2>
          </div>
          <div className="max-w-[298px] md:pb-2">
            <p className="text-muted text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] font-medium tracking-tight">
              We partner with forward-thinking brands to craft digital experiences that are visually stunning, functionally intuitive, and built to scale.
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
