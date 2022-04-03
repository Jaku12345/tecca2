import React from "react";
import Spinner from "../spinner/spinner.component";

import "./button-component.styles.scss";

const BUTTON_TYPE_CLASSES = {
  signIn: "sign-in",
};

const Button = ({ title, buttonType, margin, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      style={{ marginRight: `${margin}` }}
      {...otherProps}>
      {isLoading ? <Spinner /> : <p>{title}</p>}
    </button>
  );
};

export default Button;
