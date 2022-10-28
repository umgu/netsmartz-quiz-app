import React from "react";
import "./button.css";

function button(props) {
  return (
    <button onClick={props.event} type="button" className="quiz_button">
      {props.placeholder}{" "}
    </button>
  );
}

export default button;
