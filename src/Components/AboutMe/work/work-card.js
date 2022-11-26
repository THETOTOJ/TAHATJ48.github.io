import React from "react";
import "./work-card.css";
function WorkCard ({ item }) {
  return (
    <div className="work-card">
      <div>        
      <img src={item.companyLogo}  className="work-logo" />
      </div>   
      <div className="work-info">
        <label className="company">{item.designation} | {item.company} | {item.date}</label>
        <p className="work-desc">{item.work}</p>
        
      </div>
    </div>
  );

}

export default WorkCard;