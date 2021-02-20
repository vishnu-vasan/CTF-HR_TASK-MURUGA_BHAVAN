import React from "react";
import "../App.css";
import "./HeroSection.css";
function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <h1
          style={{ color: "bisque", "font-size": "50px", "margin-top": "6cm" }}
        >
          Welcome To Hotel Muruga Bhavan
        </h1>
        <h1
          style={{
            color: "bisque",
            "font-size": "50px",
          }}
        >
          Droolworthy Delicious Delights
        </h1>
        <h3 style={{ color: "bisque", "font-size": "30px" }}>
          What are you waiting for?
        </h3>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default HeroSection;
