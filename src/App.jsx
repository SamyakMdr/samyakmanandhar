import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Intro from "./components/Intro";
import { Skills } from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <Navbar />
        <Intro />
        <Skills />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
