import React from 'react';
import './ProjectDetails.css';
import { NavLink } from 'react-router-dom'; 

function Home() {
  return (
    <div>
           <div className="project-name">
    <p> Portfolio: <strong>Patricia Montalvo Hernandez</strong>  </p>
    </div>
      <h1>Patricia Montalvo Hernandez</h1>
      <div class="title-line"> </div>
      <div class="description"> <strong>UX/UI Designer </strong> Specializing in Digital Transformation and Interface Enhancement: </div>
      <div class="description-italic"><strong>"Creating Intuitive, Inclusive and Impactful Digital Experiences."</strong> </div>
      <NavLink to="/projects" className="link-text">Explore Projects</NavLink>
</div>
  );
}

export default Home;