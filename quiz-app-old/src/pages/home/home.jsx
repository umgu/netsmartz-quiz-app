import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
import Button from "../../components/button/button";

export default function Home() {
  return (
    <div className="home_container">
      <div className="quote_container">
        <h1>Hi There! </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id</p>
        <small>
          Minus, repellat, iste facere praesentium pariatur quas facilis
          provident tempore voluptatibus accusamus ab sequi.
        </small>
      </div>
      <div className="quote_container">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/quiz/registration"
        >
          <Button placeholder={"Take a quiz"} />
        </NavLink>
      </div>
    </div>
  );
}
