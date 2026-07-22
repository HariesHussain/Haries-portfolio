import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectGrid = ({ projects }) => {
  if (!projects || projects.length < 4) return null;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-[clamp(14px,2.5vw,24px)]">
      {/* Card 1: STUDIOLINK (Landscape - Left Wide) */}
      <div className="col-span-1 lg:col-span-7 h-[clamp(300px,55vw,450px)]">
        <ProjectCard project={projects[0]} isLarge={true} />
      </div>

      {/* Card 2: Zentrox (Portrait - Right Narrow) */}
      <div className="col-span-1 lg:col-span-5 h-[clamp(300px,55vw,620px)]">
        <ProjectCard project={projects[1]} isLarge={false} />
      </div>

      {/* Card 3: COREHUE (Portrait - Left Narrow) */}
      <div className="col-span-1 lg:col-span-5 h-[clamp(300px,55vw,620px)] lg:-mt-[clamp(100px,15vw,170px)]">
        <ProjectCard project={projects[2]} isLarge={false} />
      </div>

      {/* Card 4: Elevana (Landscape - Right Wide) */}
      <div className="col-span-1 lg:col-span-7 h-[clamp(300px,55vw,450px)]">
        <ProjectCard project={projects[3]} isLarge={true} />
      </div>
    </div>
  );
};

export default ProjectGrid;
