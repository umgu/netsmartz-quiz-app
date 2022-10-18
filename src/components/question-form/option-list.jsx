import React, { useEffect, useState } from "react";

function OptionList({
  options,
  addOption,
  removeOption,
  setCorrectAnswer,
  ans,
}) {
  const [answer, setAnswer] = useState(ans ? ans : "");
  const [option, setOption] = useState("");

  useEffect(() => {
    setCorrectAnswer(answer);
  }, [answer]);

  const handleDeleteOption = (index, op) => {
    if (answer === op) {
      alert(
        "You can delete the answer.\n If you want to delete option which si set as answer right now, you have to set another correct answer before"
      );
    } else {
      removeOption(index);
    }
  };

  return (
    <div className="options-container">
      <input
        type="text"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      />
      <button
        type="button"
        onClick={(e) => {
          let flag = true;
          options.forEach((element) => {
            if (element === option) {
              flag = false;
            }
          });
          if (flag && option) {
            addOption(option);
          }
          setOption("");
        }}
      >
        +
      </button>
      <div className="options-list">
        {options.map((op, index) => (
          <div key={index}>
            <button
              onClick={() => {
                handleDeleteOption(index, op);
              }}
            >
              -
            </button>{" "}
            {op}
            <input
              className="me-0"
              name="option-radio"
              type="radio"
              onChange={(e) => {
                setAnswer(op);
              }}
              checked={op === answer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionList;
