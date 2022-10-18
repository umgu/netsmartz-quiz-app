import React, { useEffect } from "react";
import "./infocontainer.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function Infocontainer(props) {
  return (
    <div className={props.className}>
      <Tippy content={props.userName}>
        <p className={props.classNameSpan}>{props.userName}</p>
      </Tippy>
      <Tippy content={`time taken ${props.time}`}>
        <small className={props.classNameSmall}>
          {props.points} {"point"}
        </small>
      </Tippy>
    </div>
  );
}

export default Infocontainer;
