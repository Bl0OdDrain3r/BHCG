import React from "react";
import fundsvita from "./images/fundsvita_logo-200h-removebg-preview.png";
import rizee from "./images/download.png";
import ace from "./images/https___media.insider.in_image_upload_c_crop,g_custom_v1589202017_ditsxhdqvj1lkctlifov.jpg";
function Project(){
    return(
        <div className="project">
        <h2 className="project_heading">Our Projects</h2>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item" data-bs-interval="3000">
      <img src={fundsvita} class="d-block " alt="fundsvita image"/>
    </div>
    <div class="carousel-item active" data-bs-interval="3000">
      <img src={rizee} class="d-block " alt="rizee image"/>
    </div>
    <div class="carousel-item " data-bs-interval="3000">
      <img src={ace} class="d-block " alt="ace of pubs image"/>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
}
export default Project;