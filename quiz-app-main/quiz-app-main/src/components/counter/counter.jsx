import React, { useEffect, useState } from "react";
import "./counter.css";

function Counter({ onTimeout, time }) {
  const [count, setCount] = useState(time);

  const progressStyle = {
    background: `conic-gradient(#d9d9d9 ${(time - count) * 36}deg, #ff8fa2 ${(time - count) * 36
      }deg)`,
  };

  useEffect(() => {
    if (count === 0) {
      onTimeout();
    }
    else {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }, [count]);

  return (
    <div className="progress-container" style={progressStyle}>
      <div className="value-container">
        {count ? count : <span style={{ fontSize: "11px" }}>Time up!</span>}
      </div>
    </div>
  );
}

export default Counter;
