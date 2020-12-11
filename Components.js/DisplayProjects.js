import React from "react";

function DisplayProjects({ projects }) {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <article className="skills__projects">
              <div className="feature">
                <a href={project.app}>
                  <img src={project.img} />
                </a>
              </div>
              <div className="feature__description">
                <header>
                  <p> #{project.project}</p>
                  <h3>{project.title}</h3>
                </header>
                <p>{project.description}</p>
                <div className="feature__links">
                  <a href={project.app}>
                    <button className="feature__links--demo">App</button>
                  </a>
                  <a href={project.code}>
                    <button className="feature__links--code">Code</button>
                  </a>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayProjects;
