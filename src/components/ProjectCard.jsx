const ProjectCard = ({ project }) => {
  return (
    <div>
      <img src={project.source} alt={project.name} />
      <p>{project.name}</p>
    </div>
  );
};

export default ProjectCard;
