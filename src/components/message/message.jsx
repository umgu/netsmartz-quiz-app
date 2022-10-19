import React from "react";

function Message({msg}) {
  return (
    <div
      style={{
        backgroundColor: "#CDC9F3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "black",
          fontFamily: "Courier New",
          Courier: "monospace",
          fontSize: "55px",
        }}
      >
        {msg}
      </h1>
    </div>
  );
}

export default Message;
