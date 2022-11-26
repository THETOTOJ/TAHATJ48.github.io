import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          
        <span className="info-name">Taha Tahiri Jotey</span>.
         <br /> Je suis un <span className="info-name">Développeur Web</span>. J'ai toujours été passionné par le digital et mes compétences en développement me permettent enfin d'intéragir avec ce monde fascinant.
        
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding2.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;