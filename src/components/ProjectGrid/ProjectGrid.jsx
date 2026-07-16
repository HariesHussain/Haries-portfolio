import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectGrid = ({ projects }) => {
  if (!projects || projects.length < 4) return null;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-[16px] md:gap-[24px]">
      {/* Card 1: STUDIOLINK (Landscape - Left Wide) */}
      <div className="col-span-12 md:col-span-7 h-[350px] md:h-[450px]">
        <ProjectCard project={projects[0]} isLarge={true} />
      </div>

      {/* Card 2: Zentrox (Portrait - Right Narrow) */}
      <div className="col-span-12 md:col-span-5 h-[480px] md:h-[620px]">
        <ProjectCard project={projects[1]} isLarge={false} />
      </div>

      {/* Card 3: COREHUE (Portrait - Left Narrow) */}
      <div className="col-span-12 md:col-span-5 h-[480px] md:h-[620px] md:-mt-[170px] lg:-mt-[170px]">
        <ProjectCard project={projects[2]} isLarge={false} />
      </div>

      {/* Card 4: Elevana (Landscape - Right Wide) */}
      <div className="col-span-12 md:col-span-7 h-[350px] md:h-[450px]">
        <ProjectCard project={projects[3]} isLarge={true} />
      </div>
    </div>
  );
};

export default ProjectGrid;
