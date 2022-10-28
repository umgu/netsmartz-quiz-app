import React, { useState } from "react";
import QuestionList from "../../components/question-list/question-list";
import Login from "../../components/registration/login";
import "./admin.css";
import { useSelector } from "react-redux";
import { URL } from "../../constants/constant";
import { Link } from "react-router-dom";
import { adminAuth } from "../../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import Toast from "../../components/modal/toast/toast";

let toastMessage = "";
function Admin() {
  const [showToast, setShowToast] = useState(false);
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(adminAuth(false));
  };

  const handleClearLeaderboard = () => {
    if (window.confirm("Do you really want to clear leaderboard")) {
      axios.delete(`${URL}/delete-leaderboard`).then((response) => {
        toastMessage = "Sucessfully cleared leaderboard!!!";
        setShowToast(true);
      });
    }
  };

  return (
    <>
      <div className="admin-container">
        {authState.isAuthenticate ? (
          <div className="d-flex flex-wrap justify-content-end w-100 p-2">
            <Link to="/admin">
              <button onClick={handleClearLeaderboard} className="ms-2">
                Clear Leaderboard
              </button>
            </Link>
            <Link to="/admin">
              <button onClick={handleLogout} className="ms-2">
                Logout
              </button>
            </Link>
          </div>
        ) : null}
        {authState.isAuthenticate ? (
          <QuestionList />
        ) : (
          <div className="d-flex justify-content-center align-items-center h-100">
            <Login />
          </div>
        )}
      </div>
      {showToast ? (
        <Toast text={toastMessage} onClose={() => setShowToast(false)} />
      ) : null}
    </>
  );
}

export default Admin;
