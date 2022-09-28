import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TypeWritter = () => {
  return (
    <div>
      <TypeWriterEffect
        textStyle={{
          fontfamily: "Raleway",
          color: "#c95df3",
          fontWeight: "20px",
          fontSize: "1.5em",
          lineHeight: "1.8",
        }}
        startDelay={1000}
        cursorColor="#c95df3"
        multiText={["Front-End Developer", "MERN Stack Developer"]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
    </div>
  );
};

export default TypeWritter;
