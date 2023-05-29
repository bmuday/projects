import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { title, image, url } = project;
  return (
    <Link to={url} className="project-link">
      <p>{title}</p>
      <div className="img-container">
        <img src={image} alt={title} className="img" />
      </div>
    </Link>
  );
};

export default Project;
