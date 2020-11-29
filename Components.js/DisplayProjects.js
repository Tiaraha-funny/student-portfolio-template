import React from "react";

function DisplayProjects({ project }) {
  return (
    <div>
      <article key={project.id} className="skills__projects">
        <div className="feature">
          <img src={project.img} />
        </div>
        <div className="feature__description">
          <header>
            <p> #{project.project}</p>
            <h3>{project.title}</h3>
          </header>
          <p>{project.description}</p>
          <div className="feature__links">
            <a href="responsive-news-site/webroot/index.html">
              <button className="feature__links--demo">Demo</button>
            </a>
            <a href={project.code}>
              <button className="feature__links--code">Code</button>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default DisplayProjects;
