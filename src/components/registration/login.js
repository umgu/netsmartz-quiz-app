import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { URL } from "../../constants/constant";
import { adminAuth } from "../../redux/actions";
import Button from "../button/button";

function Login() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (userName && password) {
      axios({
        method: "post",
        data: { userName, password },
        url: `${URL}/admin/login`,
      }).then((response) => {
        if (response.data === "Success") {
          dispatch(adminAuth(true));
        } else {
        }
      });
    } else {
      alert("Enter valid detail!!!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="form d-flex flex-column">
        <h3 className="d-flex justify-content-center align-items-center p-2">
          Login
        </h3>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className="form-control mb-2"
          placeholder="User Name"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control mb-2"
          placeholder="Password"
        />
        <div className="d-flex justify-content-center align-items-center p-2">
          <Button event={handleSubmit} placeholder={"Login"} />
        </div>
      </div>
    </div>
  );
}

export default Login;
