// components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>E-Commerce Product Management Backend</strong> - Spring
          Boot-based backend with REST APIs and MySQL.
          <p>
            <a
              href="https://github.com/rrajesh01/-E-Commerce-Product-Management-Backend-Spring-Boot-Project-"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </li>
        <li>
          <strong>React Calculator App</strong> - A simple calculator using
          React.js and Vite.
          <p>
            <a
              href="https://github.com/rrajesh01/React-Calculator-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
