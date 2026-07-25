import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectGrid = ({ projects }) => {
  if (!projects || projects.length < 4) return null;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {projects.map((project) => (
        <div key={project.id} className="w-full h-[460px] sm:h-[500px] md:h-[560px]">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
