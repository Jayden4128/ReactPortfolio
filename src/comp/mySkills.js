import React from "react";
import "../comp/skillSet.css";
import Image1 from "../comp/imgs/image1.webp";
import Image2 from "../comp/imgs/skill2.png";
import Image3 from "../comp/imgs/skill3.png";
import Image4 from "../comp/imgs/skill4.png";
import Image5 from "../comp/imgs/skill5.png";
export const SkillSet = () => {
  return (
    <div className="allCard">
      <h1 className="titleBox" id="skillsTitleBox"> <span> Skills </span></h1>
    <div className="skillBoxes">
     <img src={Image1} className="skillImage"/>
      <h2 className="cardTitle">HTML 80%</h2>
      <p className="cardText">Format text, add graphics, create links, input forms, frames and tables, etc.</p>
      
      

    </div>
    <div className="skillBoxes">
      <img src={Image2}className="skillImage" />
      <h2 className="cardTitle">JS 85%</h2>
      <p className="cardText">Dynamically update content, control multimedia, animate images.</p>
    </div>

    <div className="skillBoxes">
      <img src={Image3} className="skillImage" />
      <h2 className="cardTitle">CSS 90%</h2>
      <p className="cardText">Define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
    </div>
    <div className="skillBoxes">
      <img src={Image5} className="skillImage" />
      <h2 className="cardTitle">C++ 85%</h2>
      <p className="cardText">Able to use data fields, unique attributes and incorporate data structures to create applications.</p>
    </div>
    <div className="skillBoxes">
      <img src={Image4} className="skillImage" />
      <h2 className="cardTitle">Python 70%</h2>
      <p className="cardText">Able to build websites, software, automate tasks, and analyze data while using the necessary tools given by Python.</p>
    </div>
    </div>
  );
};
