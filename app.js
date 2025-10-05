import React from "react";
import Header from "header.js";
import About from "about.js";
import Skills from "skills.js";
import Projects from "projects.js";
import Contact from "contact.js";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
