import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';
import { NavLink } from 'react-router-dom'; 

const sentences = [
    "Analyzed the project brief, clarified questions with one of Zest founders, and assessed the current user experience.",
    "Conducted thorough market research and competitor analysis to benchmark current shopping cart functionalities and sketched 12 initial designs based on these insights.",
    "Developed the first set of wireframes to visualize the shopping cart solution, followed by collecting and analyzing 10+ user interactions and feedback.",
    "Updated wireframes incorporating user feedback and proceeded to high fidelity prototyping to mirror the actual user interface more closely.",
    "Gathered feedback from both the founders and users to polish the final iteration of the shopping cart, ensuring it met all end-user needs and business objectives."
  ];
  
  const images = [
    "/images/ZestPhase01.png",
    "/images/ZestPhase02.png",
    "/images/ZestPhase03.png",
    "/images/ZestPhase04.png",
    "/images/ZestPhase05.png",
  ];

  const buttonDescription = [
    "Understanding and deepening into the problem.",
    "Market research, competitor analysis and initial sketching.",
    "First Iteration Wireframing and feedback analysis.",
    "Wireframe update and high-fidelity prototyping.",
    "Founders and user’s feedback and final iteration."
  ];

  const imageFooter = [
    "Understanding the problem.",
    "Initial sketching (personal sketches)",
    "First Iteration Wireframing",
    "Explored iterations",
    "Final iteration."
  ];

  const buttonLabels = ['PHASE 01', 'PHASE 02', 'PHASE 03', 'PHASE 04', 'PHASE 05']; 


function ZestProjectDetails() {
    const [activeIndex, setActiveIndex] = useState(-1); 

    const toggleContent = (index) => {
      setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
  };

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
            
        <p class="main-title"> Zest Cart Upgrade</p>
      <p class="main-subtitle"> Enhancing e-commerce with advanced shopping cart capabilities for corporate gifting.</p>
      <img src="/images/ZestSCart.jpg" alt="Zest Cart Upgrade" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
     
      <section class="details">
            <div class="info-block">
                <p><strong>Project</strong></p>
                <div class="info-line"></div>
                <p>2024 Iterative design project for UX/UI course (CSCI1300 / Brown University). </p>
                <p>Duration of 3 weeks.</p>
            </div>
            <div class="info-block">
                <p><strong>Team</strong></p>
                <div class="info-line"></div>
                <p>Teamwork</p>
                <p>Teammates: Teammates: Rahul Dey, Vishak Vinod, Dalton Simonson.</p>
            </div>
            <div class="info-block">
            <p><strong>Personal Role</strong></p>
                <div class="info-line"></div>
                <p>Research and analysis, insight gathering, ideation, conceptualization,desktop prototype development</p>
            </div>
            <div class="info-block">
            <p><strong>Methodologies</strong></p>
                <div class="info-line"></div>
                <p>Market research, design thinking, personas development, concept ideation, iteration and refinement.</p>
            </div>
            <div class="info-block">
            <p><strong>Software Used</strong></p>
                <div class="info-line"></div>
                <p>Figma, Microsoft Office, Google forms, Github.</p>
            </div>
        </section>

<div class="black-section"> 
<div class="black-section-content"> 
<p class="section-title"><strong> Overview</strong> </p>
<div class="title-line"> </div> 
<section class="details">
<div class="info-block">
<p class="white-title"><em>Zest is a <strong>corporate gifting intermediary </strong> that connects brands to corporate gifters in streamlined and intuitive fashion. Zest approached our team with a <strong>feature request to add a shopping cart to their existing UI </strong> consistent with their style and practices. </em> </p>
</div>
<div class="info-block">
<p class="white-title"><strong> Objective </strong> </p>
<div class="info-line"></div>
<p> To enhance the Zest e-commerce platform by implementing a <strong>shopping cart feature </strong>that supports complex gift orders, thereby improving the user experience and driving sales efficiency.</p>
</div>
<div class="info-block">
<p class="white-title"> <strong> Challenge </strong> </p> 
<div class="info-line"></div>
<p> To solve the <strong> limitation </strong>of the existing system, which did not support the selection of <strong>multiple quantities </strong>or different items for a single recipient, potentially leading to a loss in sales and a degraded customer experience.</p>
</div>
<div class="info-block-wide">
<p class="white-title"> <strong>Development</strong> </p> 
<div class="info-line"></div>
<p> The development phase started with a thorough <strong>analysis </strong>of user interactions and collaboration with brand partners to <strong>pinpoint key issues</strong>. Insights informed the strategy for creating <strong>low, mid, and high-fidelity prototypes</strong>, which were refined through user testing to align with Zest’s UI and enhance functionality. Feedback led to additional features, like a calculator, and further refinements for a smoother interface flow.</p> 
</div>
</section>
</div> 
</div> 


<p class="section-title"> Part 1: <strong> Process </strong> </p>
<div class="title-line"> </div> 

<div className="container">
<div className="buttonContainer">
{buttonLabels.map((label,index) => (
              <button key={index} className={`choice-button ${index === activeIndex ? 'active' : ''}`}
              onClick={() => toggleContent(index)}>
             <p>  <strong> {label} </strong></p>
            <div class="info-line"></div>
            <p class="button-description">{buttonDescription[index]}</p>
          </button>
        ))}
        </div>
        {activeIndex === -1 ? (
                    <div>
                        <p class="section-text-blue"><em>Please <strong>select a phase </strong>to see detailed information.</em></p>
                        <img src="/images/ZestitoProcess.png" alt="Generic view" style={{ width: '100%', height: 'auto' }} />
                        <p id="textDisplay" class="button-description-03">Process overview</p>
                    </div>
                ) : (
                  <div>
                <p id="textDisplay" class="button-description-02"> <strong>Overview:</strong> {sentences[activeIndex]}</p>
          <img id="imageDisplay" src={images[activeIndex]} alt={`Display for Button ${activeIndex + 1}`} style={{ width: '100%', height: 'auto', marginTop: '-10px', marginBottom: '10px' }} />
          <p id="textDisplay" class="button-description-03">{imageFooter[activeIndex]}</p>
          </div>
      )}
    </div>


<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  

<p class="section-title"> Part 2: <strong> The solution in more depth</strong> </p>
<div class="title-line"> </div> 
<p class="solution-subtitle"> Enhancing Corporate Gifting with the Zest Cart Upgrade: “A simplified and efficient shopping experience”<a href="https://drive.google.com/file/d/12sguNCpjhfnFr4RQ9Ozm3fFqI3ayHMzG/view" class="link-text"> Explore the Final Proposal</a></p>
<img src="/images/ZestFinalSolution.png" alt="Zest Project Solution" style={{ width: '100%', height: 'auto', paddingTop: '5%', backgroundColor: '#e9e8e8', marginBottom: '-5px' }} />
<section class="details-four">
<div class="info-block-four">
<p><strong> Key features </strong> </p>
<div class="info-line"></div>
<p class="small-text"> • An <strong>intuitive </strong>interface for multi-product selection.</p>
<p class="small-text"> • <strong>Real time updates </strong>updates and edits within the cart with scalable design.</p>
<p class="small-text"> • Added <strong>calculator feature </strong>to show estimated total prices (dependent on the final number of recipients).</p>
</div>
<div class="info-block-four">
<p> <strong> Goals Adchieved </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • <strong>Simplified </strong>the gifting process.</p>
<p class="small-text"> • Minimized checkout time, leading to <strong>increased user satisfaction. </strong></p>
<p class="small-text"> • Potentially <strong>strengthened </strong>corporate client relations through improved order accuracy and simplicity.</p>
</div>
<div class="info-block-four">
<p> <strong>Impacts and Benefits </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • <strong>Sales: </strong>Goal of increasing average order size and reducing checkout drop-off rates.</p>
<p class="small-text"> • <strong>User Experience: </strong>Streamlined gift selection and customization.</p>
<p class="small-text"> • <strong>Brand loyalty: </strong>Enhanced brand image through a seamless experience.</p>
</div>
<div class="info-block-four">
<p> <strong>Future Opportunities </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • <strong>Full development </strong> and integration.</p>
<p class="small-text"> • Development of<strong> Al-driven recommendations </strong>to assist in gift selection.</p>
<p class="small-text"> • Integration with <strong>CRM systems </strong>for better customer management.</p>
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
<p> Understanding <strong>user needs and expectations</strong> is crucial for effective design.</p>
</div>
<div class="info-block">
<p><strong> 02. </strong> </p>
<div class="info-line"></div>
<p> <strong>Benchmarking </strong>against competitors can inspire unique and innovative features.</p>
</div>
<div class="info-block">
<p> <strong> 03. </strong> </p> 
<div class="info-line"></div>
<p> <strong>Continuous refinement </strong>through iterative prototyping ensures alignment with user feedback and client expectations. </p>
</div>
<div class="info-block">
<p> <strong>04.</strong> </p> 
<div class="info-line"></div>
<p> Adaptability in design and implementation is key to overcoming challenges and provide <strong>flexibility.</strong> </p>
</div>
<div class="info-block">
<p> <strong>05.</strong> </p> 
<div class="info-line"></div>
<p> <strong>Effective teamwork </strong>enhances problem-solving and enriches project outcomes.</p>
</div>
</section>


<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  
<p class="section-title"> Part 4: <strong> Additional information </strong> </p>
<div class="title-line"> </div> 
<section class="details-plus">
<div class="info-block-plus">
<a href="https://docs.google.com/document/d/1Dj5ZDDq45nDrfSIMZ9qxGWVoxQSS7CbXL693ZJhV7Gc/edit#heading=h.4053qytzk2ya" class="link-text">Project brief</a>
</div>
<div class="info-block-plus">
<a href="https://www.figma.com/file/dv0fTh4bglFFsblnP0DNj0/Zest-UI-Brown-(Copy)?type=design&mode=design" class="link-text">Figma File</a>
</div>
<div class="info-block-plus">
<a href="https://dalton-simonson.github.io/Iterative-Design/" class="link-text">Development</a>
</div>
<div class="info-block-plus">
<a href="https://www.loom.com/share/05e094eb541342379bbc3914c3d7b5ac?sid=2a354ba9-fde4-4458-9826-c239f950958c" class="link-text">First proposal</a>
</div>
<div class="info-block-plus">
<a href="https://www.loom.com/share/fb6e45f7504d4538b25070ce2a7c22c0?sid=0e3a703a-38d0-4ea9-8190-45c34ce4342e%20" class="link-text">Second proposal</a>
</div>
<div class="info-block-plus">
    <a href="https://drive.google.com/file/d/12sguNCpjhfnFr4RQ9Ozm3fFqI3ayHMzG/view" class="link-text">Final proposal</a>
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

