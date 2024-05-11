import React from 'react';
import './ProjectDetails.css';

function CV() {
  return (
    <div>
      <h1>Curriculum Vitae</h1>
      <div class="title-line"> </div>
      <p>Click <a href="/CV : Patricia Montalvo Hernandez.pdf" class="link-text" download="Patricia_Montalvo_Hernandez_CV.pdf"> here</a> to download CV</p>
      <img src="/images/CV : Patricia Montalvo Hernandez.jpg" alt="CV: Patricia Montalvo Hernandez" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />

    </div>
  );
}

export default CV;
