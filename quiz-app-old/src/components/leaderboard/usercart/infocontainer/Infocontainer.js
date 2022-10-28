import React, { useEffect } from "react";
import "./infocontainer.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function Infocontainer(props) {
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

export default Infocontainer;
