import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./elements/Home";
import Demo from "./elements/Demo";
import Convertisseur from "./elements/Convertisseur";
import Quiz from "./elements/Quiz";
import Portfolio from "./elements/Portfolio";

import Project1 from "./elements/Project1";
import Project2 from "./elements/Project2";
import Project3 from "./elements/Project3";
import Project4 from "./elements/Project4";
import Project5 from "./elements/Project5";
import Project9 from "./elements/Project9";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Recipes from "./elements/Recipes";
import RecipeDetails from "./components/RecipeDetails";

import { useParams } from "react-router-dom";

const App = () => {
  const recipes = [
    {
      id: 1,
      name: "Buttermilk Pancakes",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      image_url:
        "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
      price: 15.99,
    },
    {
      id: 2,
      name: "Buttermilk Pancakes",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      image_url:
        "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
      price: 15.99,
    },
    {
      id: 3,
      name: "Buttermilk Pancakes",
      description:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      image_url:
        "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
      price: 15.99,
    },
  ];

  let { id } = useParams();
  console.log("id", id);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="demo" element={<Demo />} />
        <Route path="convertisseur" element={<Convertisseur />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="recipes" element={<Recipes recipes={recipes} />}>
          <Route
            path=":id"
            element={<RecipeDetails recipes={recipes} id={id} />}
          />
        </Route>

        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
        <Route path="project3" element={<Project3 />} />
        <Route path="project4" element={<Project4 />} />
        <Route path="project5" element={<Project5 />} />
        <Route path="project9" element={<Project9 />} />
      </Routes>
    </Router>
  );
};

export default App;
