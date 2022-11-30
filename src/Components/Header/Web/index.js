import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a className="section" href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>{"< Projets />"}
        </a>
    </div>
    <div className="web-option">
        <a className="section" href="#skills">
        <i class="fi-rr-laptop option-icon"></i>{"< Compétences />"}
        </a>
    </div>
    <div className="web-option">
        <a className="section" href="#school">
        <i class="fi-rr-briefcase option-icon"></i>{"< Formations />"}
        </a>
    </div>
    <div className="web-option">
        <a className="section" href="#work">
        <i class="fi-rr-briefcase option-icon"></i>{"< Expériences />"}
        </a>
    </div>
    <div className="web-option section">
         <a href={require("../../../assets/cv.pdf")} download="CV TAHA TAHIRI JOTEY">

        <i class="fi-rr-briefcase option-icon"></i>{"< CV />"}
        </a>
    </div>
  </div>;
}

export default Web;