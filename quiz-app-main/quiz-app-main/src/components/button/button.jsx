import React from "react";
import "./button.css";

function Button(props) {
  return (
    <button onClick={props.event} type="button" className="quiz-button">
      {props.placeholder}{" "}
    </button>
  );
}

export default Button;
