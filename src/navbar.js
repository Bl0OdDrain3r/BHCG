import React from "react";
import logo from "./images/Logo2.jpg";
import Project from "./Projects";
function nav(){
    return(
       <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <a class="navbar-brand"  href="#"><a class="navbar-brand" href="#">
      <img class = "logo" src={logo} alt="BHCG logo" />
    </a></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="items" class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end nav-underline">
              <li class="nav-item">
                <a class="nav-link "  href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Blogs">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/Projects" >Our Projects</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/Others" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Others
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/Casebud">Find Your Casebud</a></li>
                  <li><a class="dropdown-item" href="/Casebook">Casebook</a></li>
                  <li><a class="dropdown-item" href="/Team">Our Team</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default nav;