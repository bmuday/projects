import { useState } from "react";
import Project from "../components/Project";

import demo from "../images/demo.png";
import convertisseur from "../images/convertisseur.png";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";

const Home = () => {
  const [projects] = useState([
    { title: "Demo", image: demo, url: "/demo" },
    { title: "Convertisseur", image: convertisseur, url: "/convertisseur" },
    { title: "Project1", image: project1, url: "/project1" },
    { title: "Project2", image: project2, url: "/project2" },
    { title: "Project3", image: project3, url: "/project3" },
    { title: "Project4", image: project4, url: "/project4" },
    { title: "Project5", image: project5, url: "/project5" },
  ]);
  return (
    <main>
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
        <div className="section-center">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
