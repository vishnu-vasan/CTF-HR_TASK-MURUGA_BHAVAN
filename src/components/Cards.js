import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import logo from "../images/restaurant_log.png";
function Cards() {
  return (
    <div className="cards">
      <h1>Our Legacy!!</h1>
      <p
        style={{
          "text-align": "center",
          "font-size": "20px",
          color: "#d2691e",
        }}
      >
        Hotel Muruga Bhavan is the largest South Indian restaurant chain in the
        world, founded in 1981 with 5,000 capital in Chennai, Tamil Nadu, India.
        They have 33 locations in India (24 in Chennai) and 77 across 22
        countries in Southeast Asia, Australia, New Zealand, the Middle East,
        Europe, and North America.
      </p>
      <br></br>
      <br></br>
      <p
        style={{
          "text-align": "center",
          "font-size": "20px",
          color: "#d2691e",
        }}
      >
        By the 1990s, Hotel Muruga Bhavan chain spread throughout neighbourhoods
        in Chennai. In 2000, Muruga Bhavan opened its first branch outside
        India, opening a franchise in Dubai, with a large number of Indian
        expatriates. It eventually expanded to Paris, Frankfurt, London, New
        York City, Dallas, Toronto, Stockholm, Doha, and Auckland. While the
        restaurants was gained popularity among non-Indians, they mostly target
        the South Asian expatriate population. Our hotels are sometimes referred
        to as "canteen-like joints that are strictly aimed at Indian expatriates
        missing a taste of home". Muruga Bhavan sends workers from India and
        America to work in their foreign branches. The overseas outlets are run
        by franchisees.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={logo}
              text="Navigate to Menu"
              label="Items"
              path="/menu"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
