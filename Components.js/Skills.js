import React, { useEffect, useState } from "react";
import blog from "../images/blog.png";

import projectsData from "../projects.json";
import DisplayProjects from "./DisplayProjects";

function Skills() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  });

  function handleReactClick() {
    console.log("This is react");
    const filterByProject = projects
      .filter((data) => data.project !== "React")
      .map((project) => (
        <idv>
          <DisplayProjects project={project} />
        </idv>
      ));
    setProjects(filterByProject);
    console.log(projects);
  }

  function handleCssClick() {
    console.log("This is css");
    const filterByProject = projects
      .filter((data) => data.project !== "Responsive")
      .map((project) => (
        <idv>
          <DisplayProjects project={project} />
        </idv>
      ));
    setProjects(filterByProject);
    console.log(projects);
  }

  function handleVanillaClick() {
    console.log("This is vanilla the apps");
    const filterByProject = projects
      .filter((data) => data.project !== "Vanilla")
      .map((project) => (
        <idv>
          <DisplayProjects project={project} />
        </idv>
      ));
    setProjects(filterByProject);
    console.log(projects);
  }

  function handleAllProjects() {
    console.log("These are all of the projects");
    const allProjects = projects.map(project => <div><DisplayProjects project={project} /></div>)
    setProjects(allProjects);
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
          <img src={blog} />
        </div>
      </article>

      <article className="skills__main">
        <header className="skills__main-heading">
          <h4>Projects (3)</h4>
        </header>
        <div className="skills__main-buttons">
          <button onClick={handleReactClick}>React</button>
          <button onClick={handleVanillaClick}>Vanilla</button>
          <button onClick={handleCssClick}>Responsive</button>
          <button onClick={handleAllProjects}>All</button>
        </div>
      </article>
    </div>
  );
}

export default Skills;
