import React from "react";
import "../comp/project.css";
import Image1 from "../comp/imgs/pject1.PNG";
import Image2 from "../comp/imgs/pject2.PNG";
import Image3 from "../comp/imgs/pject3.PNG"; 
import Image4 from "../comp/imgs/pject4.PNG";

export const MyProjects = () => {
  return (
    <div>
        <h1 className="projectTitle" id="projectTitleBox"> <span>  Projects  </span></h1>
        <h2 href = "" className="pjectTitle"> Visual Sorter 
        <br></br>
        <a className= "linkStuff" href="https://github.com/Jayden4128/VisualSorter"> Link to project </a>
        </h2>
        <p className="description"> Used a pixel game library to visualize the insertion sort algorithm. </p>
        <img src={Image4} className="pjectImage"/>
        <h2 className="pjectTitle"> Matter JS
        <br></br>
        <a className= "linkStuff" href="https://github.com/Jayden4128/Java-Script-Matter-JS"> Link to project </a>
        </h2>
        <p className="description"> Made many different visual projects using the library MatterJS </p>
        <img src={Image2} className="pjectImage"/>
        <h2 className="pjectTitle"> Hangman 
        <br></br>
        <a className= "linkStuff" href="https://github.com/Jayden4128/Hangman"> Link to project </a>
        </h2>
        <p className="description"> Created a terminal version of Hangman that looks through a dictionary and picks a word.</p>
        <img src={Image3} className="pjectImage"/>
        <h2 className="pjectTitle"> Quiz App 
        <br></br>
        <a className= "linkStuff" href="https://github.com/Lillianh3195/CSPC-349-Quiz-App"> Link to project </a>
        </h2>
        <p className="description"> Created a website quiz that asks questions and you have to answer before the asteroid hits the ship. </p>
        <img src={Image1} className="pjectImage"/>
    </div>
  );
};
