import React, { useEffect, useState } from "react";
import blog from "../images/blog.png";

import projectsData from "../projects.json";
import DisplayProjects from "./DisplayProjects";

function Skills() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  function handleAllProjects() {
    console.log("These are all of the projects");
    setProjects(projectsData);
  }

  function handleReactClick() {
    console.log("This is react");
    const filterReactByProject = projects.filter(
      (data) => data.project === "React"
    );
    console.log([...filterReactByProject]);
    setProjects(filterReactByProject);
  }

  function handleCssClick() {
    console.log("This is css");
    const filterResponsiveByProject = projects.filter(
      (data) => data.project === "Responsive"
    );
    console.log([...filterResponsiveByProject]);
    setProjects([...filterResponsiveByProject]);
  }

  function handleVanillaClick() {
    console.log("This is vanilla the apps");
    const filterVanillaByProject = projects.filter(
      (data) => data.project === "Vanilla"
    );
    console.log([...filterVanillaByProject]);
    setProjects([...filterVanillaByProject]);
  }

  function handleHtmlClick() {
    const filterHtmlByProject = projects.filter(
      (data) => data.project === "Html"
    );
    console.log([...filterHtmlByProject]);
    setProjects([...filterHtmlByProject]);
  }

  return (
    <div className="skills">
      <article className="skills__info">
        <header>
          <h4>Front-end</h4>
        </header>
        <nav className="skills__navigation">
          <ul className="skills__navigation--lists">
            <li className="skills__navigation--lists--items">
              <label htmlFor="html">Html</label>
              <progress id="hmtl" value="90" max="100"></progress>
            </li>
            <li className="skills__navigation--lists--items">
              <label htmlFor="css">Css</label>
              <progress id="css" value="60" max="100"></progress>
            </li>
            <li className="skills__navigation--lists--items">
              <label htmlFor="react">React</label>
              <progress id="react" value="40" max="100"></progress>
            </li>
            <li className="skills__navigation--lists--items">
              <label htmlFor="vanilla javascript">vanilla</label>
              <progress id="vanilla" value="32" max="100"></progress>
            </li>
          </ul>
        </nav>

        <div className="skills__design"></div>
      </article>

      <article>
        <header>
          <h4>Blogs (1)</h4>
        </header>
      </article>

      <article className="blog">
        <div className="blog__description">
          <p>Blog</p>
          <h3>My wonderful towm</h3>
          <p>
            In this blog, I tell more about a towm where I am belong to. It
            describes the form of this towm and the culture that people most
            live in everyday life
          </p>
          <a href="https://real-blog-about-vavatenina.netlify.app/">Live app</a>
        </div>
        <div className="features">
          <a href="https://real-blog-about-vavatenina.netlify.app/">
            <img src={blog} />
          </a>
        </div>
      </article>

      <article className="skills__main">
        <header className="skills__main-heading">
          <h4>Projects (3)</h4>
        </header>
        <div className="skills__main-buttons">
          <button onClick={handleAllProjects}>All</button>
          <button onClick={handleReactClick}>React</button>
          <button onClick={handleVanillaClick}>Vanilla</button>
          <button onClick={handleCssClick}>Responsive</button>
          <button onClick={handleHtmlClick}>Html</button>
        </div>
        <DisplayProjects projects={projects} />
      </article>
    </div>
  );
}

export default Skills;
