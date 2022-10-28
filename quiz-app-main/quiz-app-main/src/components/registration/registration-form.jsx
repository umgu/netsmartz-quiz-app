import * as React from "react";
import "./registration-form.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserDetails } from "../../redux/actions";
import Button from "../button/button";

export default function RegistrationForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  const handleSubmit = (event) => {
    if (firstName && lastName && gender) {
      dispatch(saveUserDetails({ firstName, lastName, gender }));
      navigate("/quiz");
    } else {
      alert("Enter valid detail!!!");
    }
  };

  return (
    <div className="form-container">
      <div className="form-div form d-flex flex-column p-5">
        <h3 className="d-flex justify-content-center align-items-center p-2">
          Registration
        </h3>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          className="form-control mb-2"
          placeholder="First name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          className="form-control mb-2"
          placeholder="Last name"
        />
        <div className="d-flex justify-content-between align-items-center p-2 radio-btns">
          <div className="me-2">
            <input
              onChange={(e) => setGender(e.target.value)}
              className="form-check-input me-1"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="male"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="me-2">
            <input
              onChange={(e) => setGender(e.target.value)}
              className="form-check-input me-1"
              type="radio"
              name="flexRadioDefault"
              value="female"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center p-2">
          <Button event={handleSubmit} placeholder={"Start Quiz"} />
        </div>
      </div>
    </div>
  );
}
