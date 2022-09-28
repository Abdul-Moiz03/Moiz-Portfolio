import React from "react";
import TypeWritter from "./TypeWritter";
import "./Displaypage.css";
import image1 from "./Utils/home-main.svg";
import Button from "@mui/material/Button";
import Projects from "./Projects";
const Displaypage = () => {
  return (
    <>
      <div className="main-feed">
        <div className="name-div">
          <h1 className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading">
            I'M
            <strong className="main-name"> Abdul Moiz </strong>
          </h1>
          <div className="typewriter-container heading">
            {" "}
            <TypeWritter />
          </div>
          <Button
            className="heading"
            variant="outlined"
            color="inherit"
            size="large"
            border="sloid"
            sx={{
              color: " #c95df3",
              ml: "100pt",
              fontFamily: "Raleway",
              fontSize: "16",
              fontWeight: "bold",
            }}
          >
            Know More
          </Button>
        </div>

        <div className="main-homeicon">
          <img
            src={image1}
            alt="home pic"
            className="img-fluid"
            style={{
              maxHeight: "500px",
              paddingRight: "100px",
            }}
          />
        </div>
      </div>
      <Projects></Projects>
    </>
  );
};

export default Displaypage;
