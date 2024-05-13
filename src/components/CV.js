import React from 'react';
import './ProjectDetails.css';


function CV() {
  return (
    <div>
         <div className="project-name">
    <p> Portfolio: <strong>Patricia Montalvo Hernandez</strong>  </p>
    </div>

      <h1>Curriculum Vitae</h1>
      <div class="title-line"> </div>
      <p>Click <a href="/CV : Patricia Montalvo Hernandez.pdf" class="link-text" download="Patricia_Montalvo_Hernandez_CV.pdf"> here</a> to download CV</p>
      <img class="document" src="/images/CV : Patricia Montalvo Hernandez.jpg" alt="CV: Patricia Montalvo Hernandez" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
     </div>
  );
}

export default CV;
