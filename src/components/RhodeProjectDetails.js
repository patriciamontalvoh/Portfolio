import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';
import { NavLink } from 'react-router-dom'; 

const sentences = [
"Conducted an initial analysis to define UX objectives and researched how other governments and businesses organize their information. This phase laid the groundwork for a user-first design approach and ensured compliance with ADA guidelines.", 
"Began with speed sketches to quickly ideate possible layouts, followed by developing detailed wireframes for various devices. This process helped visualize the potential user interface and facilitated early discussions on layout and navigation.", 
"Created a comprehensive style guide to ensure a consistent aesthetic across the entire website. This guide covered everything from typography and color schemes to UI elements and layout principles.", 
"Developed high-fidelity mockups for desktop, tablet, and phone using tools like Figma. These mockups represented the envisioned end product, providing a clear and detailed preview of the new design.",
"Translated the high-fidelity mockups into actual code, using HTML and CSS to build a responsive and interactive website. This phase focused on implementing the design with technical precision and functionality. Furthermore, conducted user testing to gather feedback, identify areas for improvement and refine the redesigned webpage. "  ];
  
  const images = [
    "/images/ReDe01.png",
    "/images/ReDe02.png",
    "/images/ReDe03.png",
    "/images/ReDe04.png",
    "/images/ReDe05.png",

  ];

  const buttonDescription = [
    "Analysis, and Initial Sketching",
    "Further Sketching and Wireframing", 
    "Style Guide Development",
    "High Fidelity Mockups", 
    "Coding, Testing and Iteration"
  ];

  const imageFooter = [
    "Inital sketches",
    "Low-fidelity wireframes: desktop, tablet and mobile version",
    "Final style guide",
    "High-fidelity wireframes: desktop, tablet and mobile version",
    "Coding process",
  ];

  const buttonLabels = ['PHASE 01', 'PHASE 02', 'PHASE 03', 'PHASE 04', 'PHASE 05']; 


function ZestProjectDetails() {
    const [activeIndex, setActiveIndex] = useState(0); 
  

    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
          setActiveIndex((prevIndex) => (prevIndex < sentences.length - 1 ? prevIndex + 1 : prevIndex));
        } else if (event.key === "ArrowLeft") {
          setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        }
      };

      useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
        }, []);
      
    const displayContent = (index) => {
            setActiveIndex(index); 
          };


  return (
    <div style={{}}>
    <div> <NavLink to="/projects" className="return-button">Return</NavLink></div>
    <div className="project-name">
    <p> Portfolio: <strong>Patricia Montalvo Hernandez</strong>  </p>
    </div>
            
              <p class="main-title"> Responsive Redesign</p>
              <p class="main-subtitle"> Rhode Island Department of Health Home Page Redesign: Streamlining Public Health Information.</p>
      <img src="/images/ReDe005.png" alt="Redesign: Rhode Island Department of Health Home page" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
     
      <section class="details">
            <div class="info-block">
                <p><strong>Project</strong></p>
                <div class="info-line"></div>
                <p>2024 Responsive redesign project for UX/UI course (CSCI1300 / Brown University).</p>
                <p>Duration: 2 weeks</p>
            </div>
            <div class="info-block">
                <p><strong>Team</strong></p>
                <div class="info-line"></div>
                <p>Individual project.</p>
            </div>
            <div class="info-block">
            <p><strong>Personal Role</strong></p>
                <div class="info-line"></div>
                <p>Full development.</p>
            </div>
            <div class="info-block">
            <p><strong>Methodologies</strong></p>
                <div class="info-line"></div>
                <p>Research and analysis, design thinking, user centered design, coding, prototyping and testing.</p>
            </div>
            <div class="info-block">
            <p><strong>Software Used</strong></p>
                <div class="info-line"></div>
                <p>Figma, GitHub, WAVE, Visual Studio..</p>
            </div>
        </section>

<div class="black-section"> 
<div class="black-section-content"> 
<p class="section-title"><strong> Overview</strong> </p>
<div class="title-line"> </div> 
<section class="details">
<div class="info-block">
<p class="white-title"><em>A responsive redesign focused on <strong>accessibility, visual clarity, and user navigation </strong>  for the Rhode Island Department of Health’s homepage. This project addressed the cluttered layout and information hierarchy of the original site. </em></p>
</div>
<div class="info-block">
<p class="white-title"><strong> Objective </strong> </p>
<div class="info-line"></div>
<p> To transform the homepage into a <strong> user-friendly platform </strong>, prioritizing straightforward navigation and easy access to health resources.</p>
</div>
<div class="info-block">
<p class="white-title"> <strong> Challenge </strong> </p> 
<div class="info-line"></div>
<p> To improve the <strong>content and structure </strong>of the webpage, currently lacking clear order or an accessible design, impeding user engagement and efficiency for unfamiliar users.</p>
</div>
<div class="info-block-wide">
<p class="white-title"> <strong>Development</strong> </p> 
<div class="info-line"></div>
<p>The development phase for the Rhode Island Department of Health website focused on a user-first UX strategy, creating a modern interface for easy navigation and clear information access. Adhering to ADA compliance, the site was made <strong>accessible for all users</strong>. It was also <strong>responsively designed for seamless cross-device use</strong>. The development involved researching how other governments and businesses layout their information, creating initial sketching layouts, creating a style guide, developing varied mockups, and refining the design through user feedback.</p>
</div>
</section>
</div> 
</div> 


<p class="section-title"> Part 1: <strong> Process </strong> </p>
<div class="title-line"> </div> 

<div className="container">
<div className="buttonContainer">
{buttonLabels.map((label,index) => (
          <button key={index} className={`choice-button ${index === activeIndex ? 'active' : ''}`} onClick={() => displayContent(index)}>
              <p>  <strong> {label} </strong></p>
            <div class="info-line"></div>
            <p class="button-description">{buttonDescription[index]}</p>
          </button>
        ))}
        </div>
      {activeIndex !== -1 && (<>
          <p id="textDisplay" class="button-description-02">{sentences[activeIndex]}</p>
          <img id="imageDisplay" src={images[activeIndex]} alt={`Display for Button ${activeIndex + 1}`} style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
          <p id="textDisplay" class="button-description-03">{imageFooter[activeIndex]}</p>
        </>
      )}
    </div>


<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  

<p class="section-title"> Part 2: <strong> The solution in more depth</strong> </p>
<div class="title-line"> </div> 
<p class="solution-subtitle"> Enhancing Information access and cross-device compatibility: "Rhode Island Department of Health: Streamlining Public Health Information.”</p>
<img src="/images/ReDee.png" alt=" Rhode Island Department of Health Redesign Solution" style={{ width: '100%', height: 'auto', paddingTop: '5%', backgroundColor: '#e9e8e8', marginBottom: '-5px' }} />
<section class="details-four">
<div class="info-block-four">
<p><strong> Key features </strong> </p>
<div class="info-line"></div>
<p class="small-text"> •  Enhanced <strong> navigation structure</strong>   and accessibility features. </p>
<p class="small-text"> •  Aesthetically pleasing and <strong> functional design </strong>   improvements. </p>
<p class="small-text"> •  Mobile-<strong>responsive </strong> layout for cross-device compatibility. </p>
</div>
<div class="info-block-four">
<p> <strong> Goals Adchieved </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • Streamlined <strong> user pathways</strong> to health information and resources. </p>
<p class="small-text"> • Improved <strong>   interaction</strong> and efficiency. </p>
<p class="small-text"> • Adchieved <strong>   cross-device compatibility</strong> mantaining structure and efficiency </p>
</div>
<div class="info-block-four">
<p> <strong>Impacts and Benefits </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • <strong>   Public Health Communication: </strong>   Facilitated easier access to critical health updates and resources. </p>
<p class="small-text"> • <strong>   Community Engagement: </strong>   Empowered Rhode Island residents with a more accessible and user- friendly resource. </p>
</div>
<div class="info-block-four">
<p> <strong>Future Opportunities </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • Potential for actual <strong>   implementation. </strong>   </p>
<p class="small-text"> •  <strong>   Integration </strong>   with additional health tools and databases for a more comprehensive user experience. </p>
<p class="small-text"> • Utilization of <strong> data analytics </strong>   to further enhance the user journey based on interaction patterns. </p>
</div>
</section>

<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  
<p class="section-title"> Part 3: <strong> Key learnings </strong> </p>
<div class="title-line"> </div> 
<section class="details">
<div class="info-block">
<p><strong> 01. </strong> </p>
<div class="info-line"></div>
<p><strong>Accessibility is crucial </strong> for inclusive design. </p>
</div>
<div class="info-block">
<p><strong> 02. </strong> </p>
<div class="info-line"></div>
<p><strong>User feedback</strong>  is a key guiding tool, critical for iterative design improvements.</p>
</div>
<div class="info-block">
<p> <strong> 03. </strong> </p> 
<div class="info-line"></div>
<p> Not all feedback is <strong>good or effective</strong>  feedback.  Moreover, <strong>understanding your audience is key. </strong> </p>
</div>
<div class="info-block">
<p> <strong>04.</strong> </p> 
<div class="info-line"></div>
<p> <strong>Responsive design</strong>  enhances adaptability and efficiency across different devices. </p>
</div>
<div class="info-block">
<p> <strong>05.</strong> </p> 
<div class="info-line"></div>
<p> <strong>Clear information hierarchy</strong> improves navigation and user efficiency. </p>
</div>
</section>

<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  
<p class="section-title"> Part 4: <strong> Additional information </strong> </p>
<div class="title-line"> </div> 
<section class="details-plus">
<div class="info-block-plus">
<a href="https://patriciamontalvoh.github.io/Responsive-redesign-/" class="link-text">Redesgined interface</a>
</div>
<div class="info-block-plus">
<a href="https://www.figma.com/file/2B5A6zJn2K3ogOoGjdKjbF/Responsive-Redesign?type=design&node-id=0%3A1&mode=design&t=0plXp6LUi8R5sP22-1" class="link-text">Figma files</a>
</div>
<div class="info-block-plus">
<a href="https://github.com/patriciamontalvoh/Responsive-redesign-" class="link-text">Github files</a>
</div>
    </section>

<div class="w"> </div>  

<div class="footer"> 
<p class="section-text-white"> Iterative design assignment CSCI1300 <strong> Patricia Montalvo Hernandez </strong> </p>
</div>  

</div>

  );
}

export default ZestProjectDetails;

