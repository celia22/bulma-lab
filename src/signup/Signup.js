import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import "../navbar/Navbar.css";
import "bulma/css/bulma.css";
import "../formfield/FormField.css";
import "./signup.css";

const Signup = () => {
  return (
    <div className="Signup_container">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" />

      <div className="signup_buttons_container">
        <CoolButton className="signup_button_submit" isSmall isSuccess>
          Submit
        </CoolButton>
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Don't Submit
        </CoolButton>
      </div>
    </div>
  );
};

export default Signup;
