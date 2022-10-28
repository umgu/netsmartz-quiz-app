import React from "react";
import "./message.css";

function Message({msg}) {
  return (
    <div className="message-container">
      <h1>
        {msg}
      </h1>
    </div>
  );
}

export default Message;
