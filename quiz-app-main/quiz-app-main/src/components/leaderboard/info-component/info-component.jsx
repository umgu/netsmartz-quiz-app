import React from "react";
import "./info-component.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function InfoComponent(props) {
  return (
    <Tippy content={`Name: ${props.userName}\nTime Taken: ${props.time}`}>
      <div className={props.className}>
        <p className={props.classNameSpan}>{props.userName}</p>
        <small className={props.classNameSmall}>
          {props.points} {"point"}
        </small>
      </div>
    </Tippy>
  );
}

export default InfoComponent;
