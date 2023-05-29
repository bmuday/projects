import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./elements/Home";
import Demo from "./elements/Demo";
import Convertisseur from "./elements/Convertisseur";
import Project1 from "./elements/Project1";
import Project2 from "./elements/Project2";
import Project3 from "./elements/Project3";
import Project4 from "./elements/Project4";
import Project5 from "./elements/Project5";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="demo" element={<Demo />} />
        <Route path="convertisseur" element={<Convertisseur />} />
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
        <Route path="project3" element={<Project3 />} />
        <Route path="project4" element={<Project4 />} />
        <Route path="project5" element={<Project5 />} />
      </Routes>
    </Router>
  );
};

export default App;
