import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Home from "./pages/home/home";
import QuizComponent from "./pages/quiz-component/quiz-component.jsx";
import LeaderBoard from "./pages/leaderboard/leaderboard";
import HelpCenter from "./pages/help-center/help-center";
import Admin from "./pages/admin/admin";
import "./style.css";

function App() {

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizComponent />} />
          <Route exact path="/leaderboard" element={<LeaderBoard />} />
          <Route exact path="/helpCenter" element={<HelpCenter />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
