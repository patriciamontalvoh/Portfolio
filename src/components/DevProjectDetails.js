import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';
import { NavLink } from 'react-router-dom'; 

const sentences = [
"Selected and analyzed three different online art marketplaces, paying close attention to their aggregator functions, their filtering functions, their sorting functions, and their overall design.", 
"Utilized design thinking and user-centered design methodologies to create initial design layout and identify key needed functionalities.",
"Deepened into the layout and design using Figma, paying attention to the previously defined functionalities, design and structuring. ",
"Developed the frontend using React, paying attention to the previously defined functionalities, design and structuring. "
];
  
  const images = [
    "/images/ArtPhase01.png",
    "/images/ArtPhase02.png",
    "/images/ArtPhase03.png",
    "/images/ArtPhase04.png",
  ];

  const buttonDescription = [
    "Competitive Analysis",
    "Functionality assesment",
    "Design and layout ideation", 
    "App development and implementation",
  ];

  const imageFooter = [
    "Analyzing competitors",
    "Final features selection",
    "Design process",
    "Final app development",
  ];

  const buttonLabels = ['PHASE 01', 'PHASE 02', 'PHASE 03', 'PHASE 04']; 


function DevProjectDetails() {
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
            
              <p class="main-title"> Development: Online art platform </p>
              <p class="main-subtitle"> Full development of an online art platform to discover, sort and filter artworks.</p>
              <img src="/images/Development.jpg" alt="Development: Online art platform" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
     
      <section class="details">
            <div class="info-block">
                <p><strong>Project</strong></p>
                <div class="info-line"></div>
                <p>2024 Development project for UX/UI course (CSCI1300 / Brown University). Duration of 3 weeks.</p>
            </div>
            <div class="info-block">
                <p><strong>Team</strong></p>
                <div class="info-line"></div>
                <p>Individual project</p>
            </div>
            <div class="info-block">
            <p><strong>Personal Role</strong></p>
                <div class="info-line"></div>
                <p>Full development</p>
            </div>
            <div class="info-block">
            <p><strong>Methodologies</strong></p>
                <div class="info-line"></div>
                <p>Market research, design thinking, concept ideation, programming, refinement.</p>
            </div>
            <div class="info-block">
            <p><strong>Software Used</strong></p>
                <div class="info-line"></div>
                <p>Figma, Github, React, Vercel.</p>
            </div>
        </section>

<div class="black-section"> 
<div class="black-section-content"> 
<p class="section-title"><strong> Overview</strong> </p>
<div class="title-line"> </div> 
<section class="details">
<div class="info-block">
<p class="white-title"><em>Development of an intuitive online art platform, enabling users to <strong>discover, filter, and sort</strong>various artworks efficiently. </em> </p>
</div>
<div class="info-block">
<p class="white-title"><strong> Objective </strong> </p>
<div class="info-line"></div>
<p> To create a user-friendly digital platform that simplifies the <strong>discovery and management</strong> of artworks through effective sorting, filtering, and aggregating functionalities.</p>
</div>
<div class="info-block">
<p class="white-title"> <strong> Challenge </strong> </p> 
<div class="info-line"></div>
<p> To design an aggregator interface that seamlessly integrates comprehensive <strong>filter and sort capabilities </strong>while maintaining a clean and appealing aesthetic.</p>
</div>
<div class="info-block-wide">
<p class="white-title"> <strong>Development</strong> </p> 
<div class="info-line"></div>
<p>Through this assignment, a functional aggregator interface was created using React. The interface created consists of an <strong>online art platform</strong>, where users can <strong>discover, filter and sort</strong> different types of paintings. To begin the assignment, a <strong> competitive analysis </strong> between competitor companies was conducted in order to analyze strengths and weaknesses in their design elements. From said analysis, the design factors to implement where decided and integrated into the designed interface. <strong> The final front end development offers an intuitive user experience with a responsive navigation and a clear layout to emphasizes the artwork.</strong> </p>
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
                        <img src="/images/ArtesitoProcess.png" alt="Generic view" style={{ width: '100%', height: 'auto' }} />
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
<p class="solution-subtitle"> Enhancing Art Discovery: "An online art platform to discover, sort and filter artworks” <a href="https://dev-sand-tau.vercel.app" class="link-text"> Explore App</a></p>
<img src="/images/ArtMain.png" alt="Art Project Solution" style={{ width: '100%', height: 'auto', paddingTop: '5%', backgroundColor: '#e9e8e8', marginBottom: '-5px' }} />
<section class="details-four">
<div class="info-block-four">
<p><strong> Key features </strong> </p>
<div class="info-line"></div>
<p class="small-text"> •  <strong>Dynamic filtering </strong> by medium, material, and author.</p>
<p class="small-text"> • <strong>Sorting functionalities  </strong>by price and size.</p>
<p class="small-text"> • <strong>Wishlist and Cart management </strong>for user preferences. </p>
<p class="small-text"> • <strong>Feedback notifications. </strong> </p>
</div>
<div class="info-block-four">
<p> <strong> Goals Adchieved </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • Established an <strong>efficient and aesthetically pleasing</strong> platform that enhances user interaction and satisfaction.</p>
<p class="small-text"> • Implemented comprehensive features that <strong>surpass competitor offerings</strong> in terms of usability and functionality.</p>
</div>
<div class="info-block-four">
<p> <strong>Impacts and Benefits </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • Improved<strong> user engagement and satisfaction</strong> by facilitating easier access to desired artworks.</p>
<p class="small-text"> • Enhanced <strong>operational efficiency </strong>through an intuitive interface that reduces search and transaction times.</p>
</div>
<div class="info-block-four">
<p> <strong>Future Opportunities </strong> </p> 
<div class="info-line"></div>
<p class="small-text"> • Complete <strong> development </strong> of the marketplace. </p>
<p class="small-text"> • User feature  <strong> personalization </strong></p>
<p class="small-text"> • <strong>Recommendations </strong> based on user’s previous interaction. </p>
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
<p> The need for a <strong>balanced approach </strong> to design and functionality to ensure both aesthetic appeal and practical usability. </p>
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
<p> Features must make sense <strong>individually and integrated </strong>with other complementary features </p>
</div>
</section>


<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  
<p class="section-title"> Part 4: <strong> Additional information </strong> </p>
<div class="title-line"> </div> 
<section class="details-plus">
<div class="info-block-plus">
<a href="https://github.com/patriciamontalvoh/dev" class="link-text">Github repository</a>
</div>
<div class="info-block-plus">
<a href="https://dev-sand-tau.vercel.app" class="link-text">Explore App</a>
</div>
<div class="info-block-plus">
<a href="https://patriciamontalvoh.github.io/development-handin-webpage/" class="link-text">Full project details</a>
</div>
    </section>

<div class="w"> </div>  

<div class="footer"> 
<p class="section-text-white"> Iterative design assignment CSCI1300 <strong> Patricia Montalvo Hernandez </strong> </p>
</div>  

</div>

  );
}

export default DevProjectDetails;

