import React from "react";

import img from "./images/DSC_2664.JPG"
function Home(){
 return (
    <div className="home "> 
     <div className="home_head">
     <h1> THE BITS HYDERABAD CONSULTING GROUP</h1>
     </div>
     <img className="home_img" src={img} alt="impage" />
   </div>
 );

}
export default Home;