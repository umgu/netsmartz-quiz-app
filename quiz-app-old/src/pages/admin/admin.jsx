import React from "react";
import QuestionList from "../../components/question-list/question-list";
import Login from "../../components/registration/login";
import "./admin.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminAuth } from "../../redux/actions";
import { useDispatch } from "react-redux";

function Admin() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(adminAuth(false));
  };

  return (
    <>
      <div className="admin-container">
        {authState.isAuthenticate?<div className="d-flex justify-content-end w-100 p-2">
          <Link to="/admin">
            <button onClick={handleLogout}>Logout</button>
          </Link>
        </div>: null}
        {authState.isAuthenticate ? <QuestionList /> : <Login />}
      </div>
    </>
  );
}

export default Admin;
