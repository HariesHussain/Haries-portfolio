import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectGrid = ({ projects }) => {
  // Chunk projects into rows of 2 for alternating sizes
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <div className="w-full flex flex-col gap-[16px] md:gap-[24px] lg:gap-[32px]">
      {rows.map((row, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;

        return (
          <div
            key={rowIndex}
            className="w-full flex flex-col md:flex-row gap-[16px] lg:gap-[16px]"
          >
            {row.map((project, cardIndex) => {
              // Determine if this card is large or small
              // Row 0: Large, Small
              // Row 1: Small, Large
              // Row 2: Large, Small
              // ...
              const isLarge = isEvenRow ? cardIndex === 0 : cardIndex === 1;

              return (
                <div
                  key={project.id}
                  className={`w-full ${
                    isLarge 
                      ? "md:w-[58%] lg:w-[708px] flex-shrink-0" 
                      : "md:w-[42%] lg:w-[476px] flex-grow"
                  }`}
                >
                  <ProjectCard project={project} isLarge={isLarge} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGrid;
