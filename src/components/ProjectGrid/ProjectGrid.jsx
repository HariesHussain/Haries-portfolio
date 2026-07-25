import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectGrid = ({ projects }) => {
  if (!projects || projects.length < 4) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Row 1: Ratio 708px : 476px (1.487 : 1) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.487fr_1fr] gap-4 h-auto lg:h-[561px]">
        <div className="w-full h-[380px] sm:h-[480px] lg:h-[561px]">
          <ProjectCard project={projects[0]} />
        </div>
        <div className="w-full h-[380px] sm:h-[480px] lg:h-[561px]">
          <ProjectCard project={projects[1]} />
        </div>
      </div>

      {/* Row 2: Ratio 476px : 708px (1 : 1.487) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.487fr] gap-4 h-auto lg:h-[561px]">
        <div className="w-full h-[380px] sm:h-[480px] lg:h-[561px]">
          <ProjectCard project={projects[2]} />
        </div>
        <div className="w-full h-[380px] sm:h-[480px] lg:h-[561px]">
          <ProjectCard project={projects[3]} />
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
