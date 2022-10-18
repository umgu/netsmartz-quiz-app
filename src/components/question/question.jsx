import { useState } from "react";
import { useDispatch } from "react-redux";
import Counter from "../counter/counter";
import "./question.css";
import {
  saveAndNextQuestion,
  skipQuestion,
  saveAndSubmit,
} from "../../redux/actions";
import MyVerticallyCenteredModal from "../modal/success-modal";
import { TIME_PER_QUESTION } from "../../constants/constant";
import { URL } from "../../constants/constant";
import axios from "axios";

function Question({ question, state, startTime }) {
  const [answer, setAnswer] = useState("");
  const [isTimeup, setIsTimeup] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const onClickNextBtn = (ev) => {
    dispatch(
      saveAndNextQuestion({
        question,
        ans: answer,
        timeTaken: isTimeup ? TIME_PER_QUESTION : Date.now() - startTime,
      })
    );
  };

  const onClickSubmit = () => {
    dispatch(
      saveAndSubmit({
        question,
        ans: answer,
        timeTaken: Date.now() - startTime,
      })
    );
    const result = {
      detail: state.detail,
      questions: state.questionList.map((q) => {
        delete q.img;
        return q;
      }),
    };
    axios.post(`${URL}/submit-result`, result).then((response) => {
      if (response.status === 200) {
        setShowModal(true);
      } else {
        console.log("Some Error Occured");
      }
    });
    console.log(result);
  };

  const onClickSkipBtn = (ev) => {
    dispatch(
      skipQuestion({ question, ans: "", timeTaken: Date.now() - startTime })
    );
  };

  const onClickResetBtn = (ev) => {
    setAnswer("");
  };

  const onAnswerClick = (ev, selected_answer) => {
    setAnswer(selected_answer);
  };

  const onTimeout = () => {
    setIsTimeup(true);
  };

  return !showModal ? (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="timer-wrapper mb-2">
              <Counter
                onTimeout={onTimeout}
                key={question.id}
                time={TIME_PER_QUESTION}
              />
            </div>
            <span
              style={{
                textAlign: "left",
                letterSpacing: "1.12px",
                color: "#858494",
              }}
            >
              QUESTION {state.current_question_number} of{" "}
              {state.total_question_number}
            </span>
            <div className="question-wrapper mt-3">
              <p className="question-text">{question.question}</p>
              <div className="answer-wrapper">
                {question.options.map((ans, index) => {
                  return (
                    <div
                      className={`answer-text ms-2 mb-1 ${
                        answer === ans ? "clicked" : ""
                      }`}
                      style={{ pointerEvents: isTimeup ? "none" : "initial" }}
                      key={index}
                      onClick={(ev) => {
                        onAnswerClick(ev, ans);
                      }}
                    >
                      <p className="m-0 p-0">
                        <b>{String.fromCharCode(65 + index)}</b>.{" "}
                        <span>{ans}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {question.img && (
            <div className="col">
              <div className="question-image h-100">
                <img
                  src={question.img}
                  alt="image loading..."
                  className="w-100 h-100"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="action-btn-container d-flex justify-content-end">
        {answer && !isTimeup ? (
          <button
            type="button"
            className="btn btn-danger n_btn me-4 btn-sm"
            onClick={onClickResetBtn}
          >
            Reset
          </button>
        ) : null}
        {!isTimeup &&
        !(state.current_question_number === state.total_question_number) ? (
          <button
            type="button"
            className="btn btn-secondary n_btn me-4 btn-sm"
            onClick={onClickSkipBtn}
          >
            Skip
          </button>
        ) : null}
        {!(state.current_question_number === state.total_question_number) &&
        (answer || isTimeup) ? (
          <button
            type="button"
            className="btn btn-primary n_btn btn-sm"
            onClick={onClickNextBtn}
          >
            Next
          </button>
        ) : null}
        {state.current_question_number === state.total_question_number ? (
          <button
            type="button"
            className="btn btn-primary n_btn btn-sm"
            onClick={onClickSubmit}
          >
            Submit
          </button>
        ) : null}
      </div>
    </>
  ) : (
    <MyVerticallyCenteredModal show={showModal} />
  );
}

export default Question;
