import React from "react";

import "./form-input-component.styles.scss";

function FormInput({ ...otherProps }) {
  return (
    <div>
      <input className='form-input' {...otherProps} />
    </div>
  );
}

export default FormInput;
