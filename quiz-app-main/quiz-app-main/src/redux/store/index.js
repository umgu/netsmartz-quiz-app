import { combineReducers, createStore } from "redux";
import { quizReducer, authReducer } from "../reducers";

const reducer = combineReducers({
  quiz: quizReducer,
  auth: authReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;
