import React from 'react';
import ProjectData from "../assets/project-data.json";
import ProjectItem from "./ProjectItem";
import './ProjectDetails.css';


ProjectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function Projects() {
  return (
    <div>
    <div className="project-name">
    <p> Portfolio: <strong>Patricia Montalvo Hernandez</strong>  </p>
    </div>
      <h1>Projects</h1>
      <div class="title-line"> </div>
      <div className="projects-container">
      {ProjectData.map((item) => ( 
            <ProjectItem
            key={item.id}
            id={item.id}
            mainImage={item.mainImage}
            title={item.title}
            description={item.description}
            year={item.year}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;