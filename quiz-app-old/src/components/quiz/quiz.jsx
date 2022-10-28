import Question from "../../components/question/question";
import { useSelector } from "react-redux";
import "./quiz.css";

const Quiz = () => {
  const quizState = useSelector((state) => state.quiz);
  return (
    quizState.questionList.length && (
      <div className="quiz-container">
        <h1>Quiz</h1>
        <div className="d-flex justify-content-end w-100 ">
          <div className="d-flex flex-wrap">
            <p className="me-4">Total time: 60 min</p>
          </div>
        </div>
        <div className="question-container">
          <Question
            question={quizState.questionList[quizState.current_question_number - 1]}
            state={quizState}
            key={quizState.questionList[quizState.current_question_number - 1].id}
            startTime={Date.now()}
          />
        </div>
      </div>
    )
  );
};

export default Quiz;
