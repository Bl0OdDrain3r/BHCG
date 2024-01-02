import React from "react";
import linkedin from "./images/linkedin.png"
import facebook from "./images/facebook.png";
import mail from "./images/email.png";
import insta from "./images/instagram.png";

function footer(){
    return (
        <div className="footer">
            <div className="socials">
            <form action="mailto:bhcg@hyderabad.bits-pilani.ac.in"><a type="submit"><img src={mail} className="socials_img" alt="mail image" /></a></form> 
            <a href="https://www.linkedin.com/company/bits-hyderabad-consulting-group/"><img src={linkedin} className="socials_img" alt="linkedin image" /></a>
            <a href="https://www.instagram.com/the_bhcg/?igshid=ZDdkNTZiNTM%3D"><img src={insta} className="socials_img" alt="insta image" /></a>
            <a href="https://www.facebook.com/TheBHCG/"><img src={facebook} className="socials_img" alt="facebook image" /></a>
            </div>
        </div>
    );

}
export default footer;