import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Stack from "./Stacks/Stack";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/stack" element={<Stack />} />
    </Routes>
  );
};

export default Pages;
