import React from "react";
import "./project.css";
import ProjectCards from "./ProjectCards";
import image1 from "../Utils/ytcolne.png";
import image2 from "../Utils/BSS.png";
const Projects = () => {
  return (
    <div className="main-div">
      <div className="main-headind">
        <h2>
          {" "}
          My recent <sapn style={{ color: "#c95df3" }}>Work</sapn>
        </h2>
        <p style={{ fontSize: "large", fontWeight: "bold" }}>
          Here are some projects{" "}
        </p>
      </div>
      <div className="card-div">
        <ProjectCards
          Image={image1}
          Imgname={"Youtube Clone project"}
          Name={"YouTube Clone"}
          Para={
            "This YouTube Clone Application based on ReactJS with Material UI 5"
          }
          GitHubLink={"https://github.com/Abdul-Moiz03/Yotube-Clone"}
        />
        <ProjectCards
          Image={image2}
          Imgname={"Bike Selling Store"}
          Name={"Bike Selling Store"}
          Para={
            "This Bike Selling Store Application based on HTML | CSS | Bootstrap | JavaScript | Php | MySql"
          }
          GitHubLink={"https://github.com/Abdul-Moiz03/bike-semester-"}
        />
        <ProjectCards
          Image={image2}
          Imgname={"Bike Selling Store"}
          Name={"Rapid NED Facilitator"}
          Para={
            "This Rapid NED Facilitator Application based on MERN Stack Technology with Fb Authentication"
          }
          GitHubLink={"https://github.com/Abdul-Moiz03/bike-semester-"}
        />
      </div>
    </div>
  );
};

export default Projects;
