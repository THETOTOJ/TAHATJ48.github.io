import React from "react";
import "./school.css";
import Separator from "../../common/separator";
import {SchoolData} from "../../data/school";
import SchoolCard from "./school-card";
function School() {
  const data = SchoolData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">{"< Formations />"}</label>
      <div className="work-list">
        {data.map((item) => {
          return <SchoolCard item={item} />;
        })}
      </div>
    </div>
  );  
}

export default School;