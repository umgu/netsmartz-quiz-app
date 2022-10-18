import React from "react";
import "./avtar.css";

function avtar(props) {
  return (
    <div className="avatar_container1">
      <img src={props.path} alt={props.userName} />
    </div>
  );
}

export default avtar;
