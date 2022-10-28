import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionFormModal from "../modal/question-form";
import { URL } from "../../constants/constant";
import "./question-list.css";
import Toast from "../modal/toast/toast";

let selectedQuestion = null;
let toastMessage = "";
function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [refreshToggleFlag, setRefreshToggleFlag] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(
    function () {
      axios.get(`${URL}/admin/load-questions`).then((response) => {
        setQuestions(response.data.questions);
      });
    },
    [refreshToggleFlag]
  );

  const onFormClose = () => {
    setShowQuestionForm(false);
    selectedQuestion = null;
  };

  const handleDeleteAll = () => {
    if (window.confirm("Do you really want to delete quiz")) {
      axios.delete(`${URL}/delete-all-questions`).then((response) => {
        setRefreshToggleFlag(!refreshToggleFlag);
        toastMessage = "Sucessfully All Deleted!!!";
        setShowToast(true);
      });
    }
  };
  const handleDelete = (id) => {
    axios.delete(`${URL}/delete-question/${id}`).then((response) => {
      setRefreshToggleFlag(!refreshToggleFlag);
      if (response.data === "Deleted") {
        toastMessage = "Sucessfully Deleted!!!";
      } else {
        toastMessage = "Something went wrong!!!";
      }
      setShowToast(true);
    });
  };

  const handleEdit = (index) => {
    selectedQuestion = questions[index];
    setShowQuestionForm(true);
  };

  return (
    <div className="question-list-container">
      <div className="d-flex justify-content-end mt-3 mb-1">
        {questions.length ? (
          <button className="btn btn-danger me-2" onClick={handleDeleteAll}>
            Delete All
          </button>
        ) : null}
        <button
          className="btn btn-secondary me-2"
          onClick={() => {
            setShowQuestionForm(true);
          }}
        >
          Add Question
        </button>
      </div>
      <table className="question-list-tb">
        <thead>
          <tr>
            <th>No.</th>
            <th>Question</th>
            <th>Options</th>
            <th>Answer</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, i) => {
            return (
              <tr key={i}>
                <td>
                  <span>
                    <b>{i + 1}</b>
                  </span>
                </td>
                <td>
                  <span>{q.question}</span>
                </td>
                <td>
                  {q.options.map((op, j) => (
                    <p key={j}>
                      {String.fromCharCode(65 + j)}. {op}
                    </p>
                  ))}
                </td>
                <td>
                  <span>{q.answer}</span>
                </td>
                <td>{q.img ? <img src={q.img} alt="Image" /> : null}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-secondary me-2 mb-2"
                      onClick={() => handleEdit(i)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-secondary me-2 mb-2"
                      onClick={() => handleDelete(q.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
      <QuestionFormModal
        show={showQuestionForm}
        onClose={onFormClose}
        onQuestionAdd={(toastMsg) => {
          setRefreshToggleFlag(!refreshToggleFlag);
          toastMessage = toastMsg;
          setShowToast(true);
        }}
        question={selectedQuestion}
      />
      {showToast ? (
        <Toast text={toastMessage} onClose={() => setShowToast(false)} />
      ) : null}
    </div>
  );
}

export default QuestionList;
