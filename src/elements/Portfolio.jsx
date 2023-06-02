import "../styles/portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <main id="main">
      <header>
        <img src="" alt="" />
        <h2>Seb Kay</h2>
        <nav>
          <ul>
            <li>
              <Link to="/portfolio">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <article className="description">
          <h3>Hi, I'm Seb</h3>
          <p>
            I'm a web developer from Southampton, UK. Currently lead developer
            at a local agency, Fhoke. In my spare time I enjoy DIY, gaming and
            building my own projects. My preferred tools are PHP, Laravel and
            Vue.js.
          </p>
          <p>I'm on GitHub, Twitter and Instagram.</p>
        </article>
      </section>
      <footer>
        <p>© 2023 Seb Kay.</p>
        <p>Built with React.</p>
      </footer>
    </main>
  );
};

export default Portfolio;
