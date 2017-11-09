import React from "react";
import Button from 'muicss/lib/react/button';
import "./Register.css";

export const SignupBtn = props =>
  <Button {...props} className = "signupbutton" >
    {props.children}
  </Button>;
