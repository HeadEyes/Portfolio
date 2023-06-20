import React from "react";
import NavBar from './components/NavBar.jsx'
import Presentacion from "./components/Presentacion.jsx";
import './index.css';
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Presentacion/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
