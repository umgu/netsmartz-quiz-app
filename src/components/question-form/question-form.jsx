import React, { useState } from "react";
import OptionList from "./option-list";
import "./question-form.css";
import { URL } from "../../constants/constant";
import axios from "axios";

function QuestionForm(props) {
  const [question, setQuestion] = useState(
    props.question ? props.question.question : ""
  );
  const [options, setOptions] = useState(
    props.question ? props.question.options : []
  );
  const [answer, setAnswer] = useState(
    props.question ? props.question.answer : ""
  );

  const addOption = (option) => {
    setOptions([...options, option]);
  };

  const removeOption = (optionIndex) => {
    if (options[optionIndex] === answer) {
      setAnswer("");
    }
    setOptions(options.filter((op, index) => optionIndex !== index));
  };

  const setCorrectAnswer = (correctAnswer) => {
    setAnswer(correctAnswer);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!question) {
      alert("Please enter question");
    } else if (options.length < 2) {
      alert("Please enter options\n Note: Minimum 2 options are required!!!");
    } else if (!answer) {
      alert("Please select the correct answer");
    } else if (props.question) {
      const fd = new FormData(ev.target);
      fd.set("options", JSON.stringify(options));
      fd.set("answer", answer);
      axios
        .put(`${URL}/update-question/${props.question.id}`, fd)
        .then((response) => {
          props.onQuestionAdd();
          props.onClose();
        });
    } else {
      const fd = new FormData(ev.target);
      fd.set("options", JSON.stringify(options));
      fd.set("answer", answer);
      axios({
        method: "post",
        url: `${URL}/upload-question`,
        data: fd,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        props.onQuestionAdd();
        props.onClose();
      });
    }
  };
  return (
    <form onSubmit={(ev) => handleSubmit(ev)} className="question-form">
      <table className="question-form-tb" cellPadding="4px">
        <thead></thead>
        <tbody>
          <tr>
            <th>Question: </th>
            <td>
              <textarea
                className="text-area"
                name="question"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>Options: </th>
            <td>
              <OptionList
                options={options}
                addOption={addOption}
                removeOption={removeOption}
                setCorrectAnswer={setCorrectAnswer}
                ans={answer}
              />
            </td>
          </tr>
          <tr>
            <th>Image: </th>
            <td>
              <input
                id="img"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                name="image"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td>
              <button
                className="btn btn-secondary h-25 me-2"
                type="button"
                onClick={() => {
                  props.onClose();
                }}
              >
                Cancel
              </button>
              <button className="btn btn-primary h-25" type="submit">
                {props.question ? "Update" : "Add"}
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export default QuestionForm;
