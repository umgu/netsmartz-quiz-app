import {
  LOAD_DATA,
  SAVE_AND_NEXT_QUESTION,
  SKIP_QUESTION,
  SAVE_AND_SUBMIT,
  SAVE_USER_DETAIL,
  ADMIN_AUTH,
} from "../action-types";

const initialState = {
  questionList: [],
  current_question_number: 0,
  total_question_number: 0,
  detail: undefined,
};

export const quizReducer = (state = initialState, action) => {
  function saveAnswer() {
    state.questionList[state.current_question_number - 1].answer =
      action.data.ans;
    state.questionList[state.current_question_number - 1].timeTaken =
      action.data.timeTaken;
  }
  switch (action.type) {
    case SKIP_QUESTION:
      saveAnswer();
      return {
        ...state,
        current_question_number: state.current_question_number + 1,
      };
    case SAVE_AND_NEXT_QUESTION:
      saveAnswer();
      return {
        ...state,
        current_question_number: state.current_question_number + 1,
      };
    case SAVE_AND_SUBMIT:
      saveAnswer();
      return {
        ...state,
      };

    case LOAD_DATA:
      return {
        ...state,
        questionList: action.data.questions,
        current_question_number: 1,
        total_question_number: action.data.questions.length,
      };
    case SAVE_USER_DETAIL:
      return {
        ...state,
        detail: action.detail,
      };

    default:
      return state;
  }
};

const authInitialState = {
  isAuthenticate: false,
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case ADMIN_AUTH:
      return { ...state, isAuthenticate: action.status };

    default:
      return state;
  }
};
