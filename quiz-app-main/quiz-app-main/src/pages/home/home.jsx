import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
import Button from "../../components/button/button";

export default function Home() {
  return (
    <div className="home-container">
      <div className="quote-container">
        <h1>Hi There! </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita quisquam, fugit quia reprehenderit quasi minus et vel eum eveniet accusantium saepe facilis similique esse libero ipsam, perspiciatis ipsa porro?</p>
        <small>
          Minus, repellat, iste facere praesentium pariatur quas facilis
          provident tempore voluptatibus accusamus ab sequi.
        </small>
      </div>
      <div className="quote-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/quiz"
        >
          <Button placeholder={"Take a quiz"} />
        </NavLink>
      </div>
    </div>
  );
}
