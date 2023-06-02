import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    { id: "1", name: "Javascript", description: "Coding", source: "" },
    { id: "2", name: "React", description: "Developing", source: "" },
    { id: "3", name: "Node", description: "Starting", source: "" },
  ];
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Projects;
