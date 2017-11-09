import React from "react";
import Button from 'muicss/lib/react/button';
import "./Login.css";

export const LoginBtn = props =>
  <Button {...props} className="loginbutton">
    {props.children}
  </Button>;
