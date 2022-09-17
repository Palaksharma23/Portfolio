import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Journey from "./Journey/Journey";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
