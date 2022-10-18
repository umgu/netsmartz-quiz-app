import React, { useEffect } from "react";
import Question from "../../components/question/question";
import { URL } from "../../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/actions";
import axios from "axios";
import "./quiz.css";

const Quiz = () => {
  const state = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${URL}/admin/load-questions`).then((response) => {
      dispatch(loadData(response.data));
    });
  }, []);

  return (
    state.questionList.length && (
      <div className="quiz-container">
        <h1>Quiz</h1>
        <div className="d-flex justify-content-end w-100 ">
          <div className="d-flex flex-wrap">
            <p className="me-4">Total time: 60 min</p>
          </div>
        </div>
        <div className="question-container">
          <Question
            question={state.questionList[state.current_question_number - 1]}
            state={state}
            key={state.questionList[state.current_question_number - 1].id}
            startTime={Date.now()}
          />
        </div>
      </div>
    )
  );
};

export default Quiz;
