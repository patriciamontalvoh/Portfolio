import React from 'react';
import './ProjectDetails.css';

function DevProjectDetails() {
  return (
<div style={{}}>

<div class="section-line"> </div> 
      <p class="main-title"> Development: Online art platform</p>
      <p class="main-subtitle"> Full development of an online art platform to discover, sort and filter artworks.</p>
      <img src="/images/Development.jpg" alt="Zest Cart Upgrade" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
     
      <section class="details">
            <div class="info-block">
                <p><strong>Project</strong></p>
                <div class="info-line"></div>
                <p>2021 Philips Service Design Challenge</p>
                <p>Duration: 9 months</p>
            </div>
            <div class="info-block">
                <p><strong>Team</strong></p>
                <div class="info-line"></div>
                <p>Teamwork</p>
                <p>Teammates: Mariana Benitez, Dassin Ngopsi, Josep Villanueva</p>
            </div>
            <div class="info-block">
            <p><strong>Personal Role</strong></p>
                <div class="info-line"></div>
                <p>Investigation, conceptualization, prototyping and mobile app development.</p>
            </div>
            <div class="info-block">
            <p><strong>Methodologies</strong></p>
                <div class="info-line"></div>
                <p>Research and analysis, design thinking, user-centered design, reverse logistics, prototyping and testing.</p>
            </div>
            <div class="info-block">
            <p><strong>Software Used</strong></p>
                <div class="info-line"></div>
                <p>Miro, Figma, Keysthot 9, Photoshop, InDesign and Illustrator.</p>
            </div>
        </section>
      
<div class="section-line"> </div> 
<p class="section-title"><strong> Overview</strong> </p>
<div class="title-line"> </div>
<p class="section-text"> Through this assignment, a functional aggregator interface was created using React. The interface created consists of an <strong> online art platform</strong>, were users can <strong> discover, filter and sort </strong> different types of paintings. To begin the assignment, a <strong> competitive analysis </strong> between competitor companies was conducted in order to analyze strengths and weaknesses in their design elements. From said analysis, the design factors to implement where decided and integrated into the designed interface. <strong> The final front end development offers an intuitive user experience with a responsive navigation and a clear layout to emphasizes the artwork. </strong> </p>

<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  
<p class="section-title"> Part 1: <strong> Competitive Analysis </strong> </p>
<div class="title-line"> </div> 
<p class="section-text"> In order to conduct the competitive analysis, <strong>three different online art marketplaces </strong> were selected and analyzed, paying close attention to their aggregator functions, their filtering functions, their sorting functions, and their overall design. The interfaces analyzed were: <strong> Artsy, Saatchi art and Singulart.</strong>  The table below contains a summary of the analysis. </p>
<div class="f"> </div>  
<div class="f"> </div>  
<p class="section-subtitle"> <strong> Comparison Chart: </strong> </p>  

<table>
  <tr>
    <th> </th>
    <th>Artsy  <a href="https://www.singulart.com/en/" class="link-text">Link</a></th>
    <th>Saatchi art     <a href="https://www.saatchiart.com" class="link-text">Link</a> </th>
    <th>Singulart     <a href="https://www.singulart.com/en/" class="link-text">Link</a>
    </th>
  </tr>
  <tr>
    <td class="factor"><strong>Design</strong></td>
    <td class="good"><strong> Good: </strong> User-friendly, aesthetically pleasing.</td>
    <td class="poor"><strong>Poor:</strong>  Slightly cluttered.</td>
    <td class="bad"><strong>Bad:</strong> Cluttered.</td>
  </tr>
  <tr>
   <td class="factor"> <strong>Information</strong></td>
    <td class="good"> <strong> Good: </strong> Basic, with more details when entered art.</td>
    <td class="good"> <strong>Good: </strong> Basic, with more details when entered art.</td>
    <td class="poor"><strong>Poor:</strong> Slightly unorganized, lacking structure.</td>
  </tr>
  <tr>
    <td class="factor"><strong>Filters</strong></td>
    <td class="good"><strong> Good: </strong> Comprehensive filters </td>
    <td class="good"><strong> Good: </strong>Comprehensive filters </td>
    <td class="good"><strong> Good: </strong> Comprehensive filters</td>
  </tr>
  <tr>
    <td class="factor"><strong>Sorting</strong></td>
    <td class="good"><strong> Good: </strong> Comprehensive sorting.</td>
    <td class="poor"><strong>Poor:</strong>  Limited to date and price.</td>
    <td class="poor"><strong>Poor:</strong> Limited to date and price.</td>
  </tr>
  <tr>
    <td class="factor"><strong>Review aggregations</strong></td>
    <td class="good"><strong> Good: </strong> Add to sub-list option.</td>
    <td class="poor"><strong>Poor:</strong>  Limited accessibility.</td>
    <td class="poor"><strong>Poor:</strong>  Limited accessibility.</td>
  </tr>
  <tr>
    <td class="factor"><strong>Remove aggregations</strong></td>
    <td class="poor"><strong>Poor:</strong>  Limited accessibility.</td>
    <td class="poor"><strong>Poor:</strong>  Limited accessibility.</td>
    <td class="bad"><strong>Bad:</strong>  Limited accessibility.</td>
  </tr>
  <tr>
    <td class="factor"><strong>Feedback received</strong></td>
    <td class="poor"><strong>Poor:</strong>  Limited feedback.</td>
    <td class="poor"><strong>Poor:</strong> Limited feedback.</td>
    <td class="poor"><strong>Poor:</strong> Limited feedback.</td>
  </tr>
  <tr>
    <td class="factor"><strong>Related sort and filter</strong></td>
    <td class="good"><strong> Good: </strong> Accessible and compatible.</td>
    <td class="good"><strong> Good: </strong> Accessible and compatible.</td>
    <td class="good"><strong> Good: </strong> Accessible and compatible.</td>
  </tr>
  <tr>
    <td class="factor"><strong>Move from Wishlist to Cart</strong></td>
    <td class="poor"><strong>Poor:</strong>  Slightly hidden.</td>
    <td class="poor"><strong>Poor:</strong>  Slightly hidden.</td>
    <td class="poor"><strong>Poor:</strong>  Slightly hidden.</td>
  </tr>
  <tr>
    <td class="factor"><strong>Move from Cart to Wishlist</strong></td>
    <td class="bad"><strong>Bad:</strong>  No option.</td>
    <td class="poor"><strong>Poor:</strong>  Limited accessibility.</td>
    <td class="bad"><strong>Bad:</strong>  No option.</td>
  </tr>
</table>
<div class="f"> </div>  
<div class="f"> </div>  

<p class="section-subtitle"> <strong>Insights:   </strong>  </p>
<div class="f"> </div>  
  <div class="horizontal-container-insight">
    <div class="horizontal-box-insight">
<p class="section-text-blue"> <strong> • Most successful factors:    </strong>  </p>
<div class="extra-margin-container">
  <div class="f"> </div>  
  <p class="section-text"> o Receiving <strong> continuous feedback </strong> from interaction is needed for the user to know and <strong> remember their previous decisions and selections.</strong>  </p>
  <div class="f"> </div>  
  <p class="section-text"> o <strong> Clear and organized </strong> designs are not only aesthetically pleasing, but also enhance the <strong>  user experience and efficiency. </strong> </p>
  <div class="f"> </div>  
  <p class="section-text"> o Having a <strong>clear accessibility to buttons </strong> (such as filters and sorting labels) improves the user experience in comparison to those more <strong>“hidden”. </strong> </p>
</div>  
</div>  
<div class="horizontal-box-insight">
<p class="section-text-blue"> <strong> • Least successful factors:   </strong>  </p>
<div class="extra-margin-container-insight">
  <div class="f"> </div>  
  <p class="section-text"> o Too much <strong>unneeded information displayed </strong>(could lead to an inefficient user navigation).   </p>
<div class="f"> </div>  
<p class="section-text"> o <strong>Limited access </strong> to moving or removing aggregated items (not providing a user-centric design).  </p>
<div class="f"> </div>  
<p class="section-text"> o <strong>Lacking a consistent structure </strong> (again, could lead to an inefficient or not intuitive user navigation).   </p>

</div>  
</div>  
</div>  

<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  
<p class="section-title"> Part 2: <strong> Functionality </strong> </p>
<div class="title-line"> </div> 
<p class="section-subtitle"> <strong>Theme:   </strong> Online art platform  </p>
<div class="f"> </div>  
<p class="section-text"> <strong>Intention:    </strong> Intuitive and easy way to <strong>discover, filter and sort </strong>different types of paintings. Additionally, paintings can be added, moved and removed from the user's Cart and Wishlist.  </p>
<div class="f"> </div>   
<p class="section-subtitle"> <strong>Incorporated features:  </strong>  </p>
<div class="f"> </div>  
<div class="extra-margin-container">
<p class="section-text"> <strong>•	Filtering categories </strong> <em>(which can be added simultaneously): </em> </p>
<div class="m"> </div> 
<div class="extra-margin-container">
<p class="section-text"> o	By medium <span class="section-text-blue">  <em>(Oil / Acrylic / Pencil) </em> </span></p>
<p class="section-text"> o	By material <span class="section-text-blue"> <em>(Canvas / Board / Paper) </em> </span></p>
<p class="section-text"> o	By author  <span class="section-text-blue"> <em>(Miriam Dema / Bea Aigualbella / Klas Ernflo / Marcos Isomat / Naoki Kawano) </em></span> </p>
</div> 
<div class="f"> </div>  
<p class="section-text"> <strong>•	Sorting categories  </strong> <em>(which cannot be added simultaneously, if one is applied the other one cannot be):   </em> </p>
<div class="m"> </div> 
<div class="extra-margin-container">
<p class="section-text"> o	By price  <span class="section-text-blue">  <em>(High to Low / Low to High) </em></span> </p>
<p class="section-text"> o	By size <span class="section-text-blue">  <em>(Large to Small / Small to Large) </em> </span></p>
</div> 
<div class="f"> </div>  
<p class="section-text"> <strong>•	Aggregators </strong> </p>
<div class="m"> </div>  
<div class="extra-margin-container">
<p class="section-text"> o Cart Items <span class="section-text-blue">  <em> (Add to Cart / Remove from Cart / Move from Wishlist to Cart)</em> </span></p>
<p class="section-text"> o Wishlist Items <span class="section-text-blue">  <em> (Add to Wishlist / Remove from Wishlist / Move from Cart to Wishlist)</em> </span></p>
<p class="section-text"> o Removals <span class="section-text-blue">  <em>(Clear all (filters and sorting) / Clear Cart / Clear Wishlist)</em> </span></p>

  </div>
  <div class="f"> </div>  

<p class="section-text"> <strong>•	Notifications and labels to keep track of status </strong> </p>
<div class="m"> </div>  

</div>  

<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  
<p class="section-title"> Part 3: <strong> Implementation </strong> </p>
<div class="title-line"> </div> 


<p class="section-subtitle"> <strong>Final interface created: </strong> </p>
<div class="m"> </div>  
<img class="imageItem" alt="Item 1" src="/images/final-interface.png"/>
<div class="f"> </div>  


<p class="section-subtitle"> <strong>Displayed items: </strong> </p>
<div class="m"> </div>  
<img class="imageItem" alt="Displayed Items" src="/images/displayed-items.png"/>

<div class="f"> </div>  

<p class="section-subtitle"> <strong>Individual items: </strong> </p>
<div class="m"> </div>  

<div class="horizontal-container">
  <div class="horizontal-box">
    <img class="imageItem-02" alt="Item 1" src="/images/cart-01.png"/>
    </div>
    <div class="horizontal-box">
      <img class="imageItem-02" alt="Item 2" src="/images/cart-02.png"/>
    </div>
    <div class="horizontal-box">
      <img class="imageItem-02" alt="Item 3" src="/images/cart-03.png"/>
    </div>
    <div class="horizontal-box">
      <img class="imageItem-02" alt="Item 4" src="/images/cart-04.png"/>
    </div>
    <div class="horizontal-box">
      <img class="imageItem-02" alt="Item 5" src="/images/cart-05.png"/>
    </div>
    <div class="horizontal-box">
      <img class="imageItem-02" alt="Item 6" src="/images/cart-06.png"/>
    </div>
    </div>

<div class="horizontal-container-02">
  <div class="horizontal-box-02">
      <p class="section-text"> Standard visualization </p>
    </div>
    <div class="horizontal-box-02">
      <p class="section-text"> Hover visualization, with more information displayed and options to aggregate item </p>
    </div>
    <div class="horizontal-box-02">
      <p class="section-text"> Add to Cart option</p>
    </div>
    <div class="horizontal-box-02">
      <p class="section-text"> Add to Wishlist option </p>
    </div>
    <div class="horizontal-box-02">
      <p class="section-text"> When in Wishlist, the item can be moved to the cart or removed from Wishlist <em>(no option to be in both)</em> </p>
    </div>
    <div class="horizontal-box-02">
      <p class="section-text"> When in Cart, the item can be moved to the Wishlist or removed from Cart <em>(no option to be in both)</em> </p>
    </div>
    </div>

<div class="f"> </div>  

<p class="section-subtitle"> <strong>Filters and sorting: </strong> </p>
<div class="m"> </div>  

<div class="horizontal-container">
  <div class="horizontal-box">
    <img class="imageItem-02" alt="Item 1" src="/images/original.png"/>
    </div>
    <div class="horizontal-box">
      <img class="imageItem-02" alt="Item 2" src="/images/filtered.png"/>
    </div>
    </div>

<div class="horizontal-container-02">
  <div class="horizontal-box-02">
      <p class="section-text"> Original interface </p>
    </div>
    <div class="horizontal-box-02">
      <p class="section-text"> Filtered interface </p>
      <p class="section-text-blue">  <em> by medium and author</em> </p>
    </div>
    </div>

    <div class="m"> </div>  

    <div class="horizontal-container">
        <div class="horizontal-box">
          <img class="imageItem-02" alt="Item 3" src="/images/sorted.png"/>
        </div>
        <div class="horizontal-box">
          <img class="imageItem-02" alt="Item 4" src="/images/filtered-sorted.png"/>
        </div>
        </div>
  
    <div class="horizontal-container-02">
        <div class="horizontal-box-02">
          <p class="section-text"> Sorted interface</p>
          <p class="section-text-blue">  <em> by size: Small to large</em> </p>
        </div>
        <div class="horizontal-box-02">
          <p class="section-text"> Filtered and sorted interface</p>
          <p class="section-text-blue">  <em> filtered by medium and author, sorted by size </em> </p>
        </div>
        </div>

        <div class="m"> </div>  

        <div class="horizontal-container">
            <div class="horizontal-box">
              <img class="imageItem-02" alt="Item 5" src="/images/no-results.png"/>
            </div>
            <div class="horizontal-box">
            </div>
            </div>
      
        <div class="horizontal-container-02">
            <div class="horizontal-box-02">
              <p class="section-text"> Filtered and found no results </p>
            </div>
            <div class="horizontal-box-02">
            </div>
            </div>

<div class="f"> </div>  

<p class="section-subtitle"> <strong>Notifications: </strong> </p>
<div class="m"> </div>  

<div class="horizontal-container">
  <div class="horizontal-box">
    <img class="imageItem-02" alt="Item 1" src="/images/add-to-wishlist.png"/>
    </div>
    <div class="horizontal-box">
      <img class="imageItem-02" alt="Item 2" src="/images/add-to-cart.png"/>
    </div>
    </div>

<div class="horizontal-container-02">
  <div class="horizontal-box-02">
      <p class="section-text"> Added to Wishlist </p>
    </div>
    <div class="horizontal-box-02">
      <p class="section-text"> Added to Cart </p>
    </div>
    </div>

    <div class="m"> </div>  

    <div class="horizontal-container">
        <div class="horizontal-box">
          <img class="imageItem-02" alt="Item 3" src="/images/remove-from-cart.png"/>
        </div>
        <div class="horizontal-box">
          <img class="imageItem-02" alt="Item 4" src="/images/clear-all.png"/>
        </div>
        </div>
  
    <div class="horizontal-container-02">
        <div class="horizontal-box-02">
          <p class="section-text"> Removed from Cart</p>
        </div>
        <div class="horizontal-box-02">
          <p class="section-text"> Removed all filters and sorting</p>
        </div>
        </div>

<div class="f"> </div>  

<div class="f"> </div>  
<div class="section-line"> </div> 
<div class="f"> </div>  
<p class="section-title"> Part 4: <strong> Links </strong> </p>
<div class="title-line"> </div> 
<div class="vertical-container"> 
<a href="https://github.com/patriciamontalvoh/dev" class="link-text">Github repository</a>
<a href="https://dev-sand-tau.vercel.app" class="link-text">Vercel</a>
</div> 

<div class="w"> </div>  

<div class="footer"> 
<p class="section-text-white"> Development assignment CSCI1300 <strong> Patricia Montalvo Hernandez </strong> </p>
</div>  
    </div>
  );
}

export default DevProjectDetails;
