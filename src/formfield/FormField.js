import React from "react";
import "bulma/css/bulma.css";

const FormField = (props) => {
  return (
    <div className="field">
      <form>
        <div className="form_container">
          <label className="Label">{props.label}</label>
          <input
            className="input"
            type={props.input}
            placeholder={props.placeholder}
          />
        </div>
      </form>
    </div>
  );
};

export default FormField;
