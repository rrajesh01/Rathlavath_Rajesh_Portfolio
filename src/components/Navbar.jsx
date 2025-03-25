// components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rathlavath Rajesh</h1>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#hobbies">Hobbies</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
