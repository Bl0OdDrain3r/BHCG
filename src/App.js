import React from "react";
import Navbar from "./navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Casebook from "./casebook";
import Teams from "./teams";
import Footer from "./footer";
function App() {
  return (
  <div>
     <Navbar />
     <Home />
     <About />
     <Projects />
     <Casebook />
     <Teams />
     <Footer />
   </div>
  );
}

export default App;
