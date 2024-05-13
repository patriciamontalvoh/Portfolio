import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import CV from './components/CV';
import ZestProjectDetails from './components/ZestProjectDetails'; 
import DevProjectDetails from './components/DevProjectDetails'; 
import RhodeProjectDetails from './components/RhodeProjectDetails'; 
import './App.css';
import ProjectData from "./assets/project-data.json";

ProjectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {

  return (

    <Router>
      <div>
        <nav className="navbar">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          <NavLink to="/cv" className={({ isActive }) => isActive ? "active" : ""}>CV</NavLink>
        </nav>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects/ZestProjectDetails" element={<ZestProjectDetails />} />
        <Route path="/projects/DevProjectDetails" element={<DevProjectDetails />} />
        <Route path="/projects/RhodeProjectDetails" element={<RhodeProjectDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
