import React, { Fragment } from "react";
import { useState } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignInForm from "../../components/sign-in-form/sign-in-form-component";

import "./authentication-component.styles.scss";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const defaultSelection = {
  selection: "log-in",
};

function Authentication() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(defaultSelection);

  const userState = useSelector((state) => {
    return state.user;
  });

  const { currentUser } = userState;

  if (currentUser.displayName !== "") {
    navigate("/");
  }

  return (
    <div className='auth'>
      <div className='options'>
        <p
          className={`option ${
            selection.selection === "log-in" ? "selected" : ""
          }`}
          onClick={() => setSelection({ selection: "log-in" })}>
          Login
        </p>
        <p
          className={`option ${
            selection.selection === "register" ? "selected" : ""
          }`}
          onClick={() => setSelection({ selection: "register" })}>
          Register
        </p>
      </div>
      <div
        className='form-container'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {selection.selection === "log-in" ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export default Authentication;
