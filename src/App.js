import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./pages/home/home";
import RegistrationForm from "./components/registration/registration-form";
import Quiz from "./pages/quiz/quiz";
import { useSelector } from "react-redux";
import LeaderBoard from "./pages/leaderboard/LeaderBoard";
import HelpCenter from "./pages/HelpCenter/helpCenter";
import Admin from "./pages/admin/admin";
import Login from "./components/registration/login";
import "./style.css";

function App() {
  const quizState = useSelector((state) => state.quiz);

  return (
    <div className="main-container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/quiz/registration"
          element={<RegistrationForm type="registration" />}
        />
        <Route
          exact
          path="/quiz/start"
          element={
            quizState.detail ? <Quiz /> : <Navigate to="/quiz/registration" />
          }
        />
        <Route exact path="/leaderboard" element={<LeaderBoard />} />
        <Route exact path="/helpCenter" element={<HelpCenter />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
