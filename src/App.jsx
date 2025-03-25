// App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
