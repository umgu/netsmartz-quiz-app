import React, { useEffect, useState } from "react";
import "./leaderboard.css";
import Avtar from "../../components/leaderboard/avtar/avtar";
import InfoComponent from "../../components/leaderboard//info-component/info-component";
import Trapezoid from "../../components/leaderboard//trapezoid/trapezoid";
import { URL } from "../../constants/constant";
import axios from "axios";
import Message from "../../components/message/message";

const Leaderboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/leaderboard`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);

  function timeTaken(msecs) {
    var sec = ((msecs / 1000));
    var hrs = Math.floor(sec / 3600);
    var mins = Math.floor((sec % 3600) / 60);
    var seconds = Math.floor(sec % 60);

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (seconds < 10 ? "0" : "");
    ret += "" + seconds;
    return ret;
  }

  const rankDataLeft = user.slice(0, 3);
  const rankDataRight = [...user];

  return (
    <>
      {user.length ? (
        <div className="leaderboard-container">
          <div className="leaderboard-container-left">
            {rankDataLeft.map((val, key) => {
              let position = "rank_position";
              let trapezoid = "";
              switch (key) {
                case 0:
                  position += " first";
                  trapezoid = "trapezoid1";
                  break;
                case 1:
                  position += " second";
                  trapezoid = "trapezoid2";
                  break;
                case 2:
                  position += " third";
                  trapezoid = "trapezoid3";
                  break;
                default:
              }

              return (
                <div key={key} className={position}>
                  <div className="d-flex flex-column align-items-center">
                    <Avtar
                      path={require(`../../static/avtar/${
                        val.gender === "male"
                          ? "businessman-vector-icon.jpg"
                          : "female-avatar-vector-icon.jpg"
                      }`)}
                      userName={val.userName}
                    />
                    <InfoComponent
                      className={"info-container-left"}
                      userName={val.firstName + " " + val.lastName}
                      points={val.points}
                      time={timeTaken(val.time)}
                    />
                    <Trapezoid className={`${trapezoid}`} keys={key + 1} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="leaderboard-container-right">
            {rankDataRight.map((val, key) => {
              return (
                <div key={key} className="user-cart">
                  <span>{key + 1}</span>
                  <Avtar
                    path={require(`../../static/avtar/${
                      val.gender === "male"
                        ? "businessman-vector-icon.jpg"
                        : "female-avatar-vector-icon.jpg"
                    }`)}
                    userName={val.userName}
                  />
                  <InfoComponent
                    className={"info-container-right"}
                    userName={val.firstName + " " + val.lastName}
                    points={val.points}
                    time={timeTaken(val.time)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Message msg="No leaderboard!!!" />
      )}
    </>
  );
};

export default Leaderboard;
