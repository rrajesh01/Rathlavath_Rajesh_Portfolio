// components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Email:{" "}
        <a href="mailto:rathlavathrajesh54@gmail.com">
          rathlavathrajesh54@gmail.com
        </a>
      </p>
      <p>
        Phone: <a href="tel:+919390005286">+91 9390005286</a>
      </p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/rathlavath-rajesh-3b4015269/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/rathlavathrajesh54/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LeetCode
        </a>
        <a
          href="https://github.com/rrajesh01"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
