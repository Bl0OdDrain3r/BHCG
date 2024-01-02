import React from "react";
import consulting_logo from "./images/Logo2-removebg-preview.png";
import PM_logo from "./images/PM_Logo-removebg-preview.png";
function About(){
    return(
     <div  className="about ">
         <h2 className="about_heading">About Us </h2>
         <div className="about_content">
         <img className = "about_Con_img about_img " src={consulting_logo} alt="consulting_logo" />
         <img className = "about_PM_img about_img" src={PM_logo} alt="PM_logo" />
         <div className="about_text"><p >BITS Hyderabad Consulting Group is a House of Consulting and PM enthusiasts. We are passionate students looking to work together with people and achieve several milestones. The group aims to advance the foundation of consulting and product on campus and provides several avenues of interaction among students, professionals, faculty, and alumni through organized activities that enhance the management consulting and product culture outside the classroom environment.
The group comprises of talented students aiming to make a mark on businesses and products on a large scale!</p>
</div>
         </div>
     </div>
    );
}
export default About;