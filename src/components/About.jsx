// components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="profile-container">
        <p>
          Aspiring <strong>Software Developer</strong> skilled in
          <strong>
            {" "}
            Java, Spring Boot, React.js, MySQL, and Cloud Technologies
          </strong>
          . Passionate about building scalable and user-friendly applications.
        </p>
      </div>
    </section>
  );
};

export default About;
