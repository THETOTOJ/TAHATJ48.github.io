import React from "react";
import "./school-card.css";
function SchoolCard ({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo}  className="work-logo" />
      
      <div className="work-info">
        <label className="company-name">{item.Diploma} | {item.date}</label>
        <label className="work-desc">{item.School}</label>
      </div>
    </div>
  );
}

export default SchoolCard;