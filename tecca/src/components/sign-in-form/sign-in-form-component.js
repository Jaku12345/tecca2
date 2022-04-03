import React from "react";
import { useState } from "react";

import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";
import "./sign-in-form-component.styles.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/features/userSlice";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const urlHistoryState = useSelector((state) => {
    return state.historyUrlSlice;
  });

  const { history } = urlHistoryState;

  const userState = useSelector((state) => {
    return state.user;
  });

  const { currentUser } = userState;

  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("ok here");
        console.log(user);
        if (user.length === 0) {
          alert("Account does not exist!");
          return;
        }
        console.log("here");
        console.log(user);
        fetch("http://localhost:3000/registerCurrentlySignedIn", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: user[0].name,
            email: user[0].email,
            ip: user[0].ip,
          }),
        }).then((response) => response.json());

        dispatch(
          setCurrentUser({
            ip: user[0].ip,
            displayName: user[0].name,
            uid: "",
          })
        );

        if (history.length === 0) {
          navigate(`/shop`);
        } else {
          navigate(`${history.slice(-2)[0]}`);
        }
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up'>
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder='E-mail'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          placeholder='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button title='Sign in' buttonType='signIn' type='submit'></Button>
          <Button title='Sign in with google' buttonType='signIn'></Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
