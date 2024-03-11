import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input(props) {

  return (
    <div className="input-field">
      <FontAwesomeIcon className="input-icon" icon={props.icon} />
      <input
        type={props.type}
        className={props.class}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
}

export default Input;