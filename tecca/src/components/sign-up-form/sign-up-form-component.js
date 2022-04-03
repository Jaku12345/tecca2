import React from "react";
import { useState } from "react";
import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";
import "./sign-up-form-component.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/features/userSlice";

import { useNavigate } from "react-router";
import { async } from "@firebase/util";

const defaultFormFieds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFieds);
  const { displayName, email, password, confirmPassword } = formFields;

  const urlHistoryState = useSelector((state) => {
    return state.historyUrlSlice;
  });

  const userState = useSelector((state) => {
    return state.user;
  });

  const { currentUser } = userState;

  const { history } = urlHistoryState;

  const resetFormFields = () => {
    setFormFields(defaultFormFieds);
  };

  const handleSubmit = async (event) => {
    let emailAlreadyInUse = false;
    let userNamelAlreadyInUse = false;

    event.preventDefault();
    console.log("NAME IS:", displayName);
    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    fetch("http://localhost:3000/getUserData")
      .then((response) => response.json())
      .then((users) => {
        return users.find((user) => {
          if (user.email === email) {
            emailAlreadyInUse = true;
            return user;
          } else if (user.name === displayName) {
            userNamelAlreadyInUse = true;
            return user;
          } else {
            return false;
          }
        });
      })
      .then((foundSame) => {
        if (foundSame !== undefined) {
          if (userNamelAlreadyInUse) {
            alert("This userName is already taken!");
          } else {
            alert("This email is already taken!");
          }
          return;
        } else {
          console.log(" i should never see this");
          console.log("user already exsists value", foundSame);
          fetch("http://localhost:3000/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password,
              displayName: displayName,
              ip: currentUser.ip,
            }),
          })
            .then((response) => response.json())
            .then((user) => {
              console.log(user);
              if (user.id) {
                dispatch(
                  setCurrentUser({ displayName, ip: currentUser.ip, uid: "" })
                );
                if (history.length === 0) {
                  navigate(`/shop`);
                } else {
                  navigate(`${history.slice(-2)[0]}`);
                }
              } else {
                alert("error registering an account");
              }
            });

          fetch("http://localhost:3000/registerCurrentlySignedIn", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              displayName: displayName,
              ip: currentUser.ip,
            }),
          })
            .then((response) => response.json())
            .then((user) => {
              console.log(user);
              if (user.id) {
                dispatch(
                  setCurrentUser({ displayName, ip: currentUser.ip, uid: "" })
                );

                if (history.length === 0) {
                  navigate(`/shop`);
                } else {
                  navigate(`${history.slice(-2)[0]}`);
                }
              } else {
                alert("error registering an account");
              }
            });
        }
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <p>Register</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder='Display name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          placeholder='Confirm password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button title='Sign up' buttonType='signIn' type='submit'></Button>
      </form>
    </div>
  );
}

export default SignUpForm;
