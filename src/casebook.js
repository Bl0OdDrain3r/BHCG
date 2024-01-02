import React from "react";
import casebk from "./images/casebook_ss.jpg";
import cb from "./file/BHCG_Casebook_2022.pdf";
function casebook(){
    return (
        <div className="cb">
         <div className="cb_heading">
            <h2>Casebook</h2>
            </div>
            <div className="cb_content"> 
            <div ><img className="cb_img" src={casebk} alt="casebook image" /></div>
            <div className="cb_btn"><a class="btn btn-primary" href={cb} download={cb} role="button">Download</a></div>
         </div> 
        </div>
    );
}
export default casebook;