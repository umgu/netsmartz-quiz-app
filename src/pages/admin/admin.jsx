import React from "react";
import QuestionList from "../../components/question-list/question-list";
import Login from "../../components/registration/login";
import "./admin.css";
import { useSelector } from "react-redux";

function Admin() {
  const authState = useSelector((state) => state.auth);
  return (
    <div className="admin-container d-flex justify-content-center align-items-center">
      {authState.isAuthenticate ? <QuestionList /> : <Login />}
    </div>
  );
}

export default Admin;
