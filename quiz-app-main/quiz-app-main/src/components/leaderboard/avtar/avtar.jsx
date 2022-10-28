import React from "react";
import "./avtar.css";

function avtar(props) {
  return (
    <div className="avatar-container">
      <img src={props.path} alt={props.userName} />
    </div>
  );
}

export default avtar;
