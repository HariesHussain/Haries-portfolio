import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectGrid = ({ projects }) => {
  if (!projects || projects.length < 4) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Row 1: Left 708px, Right 476px */}
      <div className="w-full flex flex-col lg:flex-row gap-4 h-auto lg:h-[561px]">
        <div className="w-full lg:w-[708px] h-[380px] sm:h-[480px] lg:h-[561px] flex-shrink-0">
          <ProjectCard project={projects[0]} />
        </div>
        <div className="w-full lg:w-[476px] h-[380px] sm:h-[480px] lg:h-[561px] flex-shrink-0">
          <ProjectCard project={projects[1]} />
        </div>
      </div>

      {/* Row 2: Left 476px, Right 708px */}
      <div className="w-full flex flex-col lg:flex-row gap-4 h-auto lg:h-[561px]">
        <div className="w-full lg:w-[476px] h-[380px] sm:h-[480px] lg:h-[561px] flex-shrink-0">
          <ProjectCard project={projects[2]} />
        </div>
        <div className="w-full lg:w-[708px] h-[380px] sm:h-[480px] lg:h-[561px] flex-shrink-0">
          <ProjectCard project={projects[3]} />
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
