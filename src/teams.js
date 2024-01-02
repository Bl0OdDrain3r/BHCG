import React from "react";
import Consulting_logo from "./images/Logo.jpg";
import PM_logo from "./images/PM logo 2.jpeg";
function teams(){
    return(
<div className="team">
    <div className="team_heading">
     <h2>Our Teams</h2>
     </div>
    <div className="team_content"> 
     <div class="card">
        <img src={Consulting_logo} class="card-img-top" alt="Consulting_logo" />
        <div class="card-body">
           <h5 class="card-title">Consultants</h5>
           {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>
        <div class="card">
        <img src={PM_logo} class="card-img-top" alt="PM_logo" />
        <div class="card-body">
           <h5 class="card-title">Product Managers</h5>
           {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        </div> 
        <div class="card">
        <img src={PM_logo} class="card-img-top" alt="Associates image" />
        <div class="card-body">
           <h5 class="card-title">Associates</h5>
           {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
     </div>
  </div>
 </div>
    );
}
export default teams;