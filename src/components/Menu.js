import React from "react";
import "./Menu.css";
import combo from "../images/combo.png";
import soup from "../images/soup.jpg";
import sandwich from "../images/sandwich.jpg";
import naan from "../images/naan.jpg";
import pasta from "../images/pasta.jpg";
import bonda from "../images/bonda.jpg";
import aloo from "../images/aloo.jpg";
import north from "../images/north_indian_thali.jpg";
import jalapeno from "../images/jalapeno_nuggets.jpg";
import mojito from "../images/mojito.jpg";
import shakes from "../images/shakes.jpg";
import juice from "../images/juice.jpg";
function Menu() {
  return (
    <div>
      <h1 style={{ "font-family": "cursive", color: "#4e347d" }}>
        Check out our Exciting Items!!!
      </h1>
      <center>
        <h4 style={{ "font-family": "cursive", color: "#4e347d" }}>
          We serve all food varities from Indian to Western!
        </h4>
      </center>
      <div className="row">
        <div className="column">
          <img src={soup} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Hot tasty soup
            </p>
          </center>
        </div>
        <div className="column">
          <img src={bonda} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Potato Bonda
            </p>
          </center>
        </div>
        <div className="column">
          <img src={aloo} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Aloo65
            </p>
          </center>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="column">
          <img src={naan} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Spicy Naan
            </p>
          </center>
        </div>
        <div className="column">
          <img src={combo} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              South Indian special Combo
            </p>
          </center>
        </div>
        <div className="column">
          <img src={north} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              North Indian thali
            </p>
          </center>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="column">
          <img src={pasta} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Veg Pasta
            </p>
          </center>
        </div>
        <div className="column">
          <img src={jalapeno} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Jalapeno Nuggets
            </p>
          </center>
        </div>
        <div className="column">
          <img src={sandwich} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Zucchini Grilled Cheese Sandwich
            </p>
          </center>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="column">
          <img src={juice} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Fruit Juice(Variety)
            </p>
          </center>
        </div>
        <div className="column">
          <img src={shakes} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Milkshakes(Variety)
            </p>
          </center>
        </div>
        <div className="column">
          <img src={mojito} style={{ position: "relative", height: "8cm" }} />
          <center>
            <p
              style={{
                color: "#2b0a7f",
                "font-family": "cursive",
                "font-size": "20px",
              }}
            >
              Mojito
            </p>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Menu;
