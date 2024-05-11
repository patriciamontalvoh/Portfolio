import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectItem.css';

function ProjectItem(props) {
const {id,title,year,mainImage,description} = props;

function findLink(id) {
  switch (id) {
      case 1:
          return 'ZestProjectDetails';
      case 2:
          return 'DevProjectDetails';
      case 3:
          return 'RhodeProjectDetails';
      default:
          return ''; 
  }
}
const link = findLink(id);

  return (
    <Link to={`/projects/${link}`}>
    <div className="project-item">
    <div className="project-image-wrapper">
      <img src={mainImage} alt={title} className="project-image" />
      <div className="project-hover">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-hover-top">
      <p>{year}</p>
      </div>
    </div>
</div>
</Link>
  );
}

export default ProjectItem;