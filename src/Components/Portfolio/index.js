import React from "react";
import "./portfolio.css";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/Index";
function Home() {
  return ( 
  <div className="home">
    <div>
        <Header />
    </div>
    <div>
        <AboutMe />
    </div>
  </div>
  );
}

export default Home;