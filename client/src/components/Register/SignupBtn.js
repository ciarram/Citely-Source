import React from "react";

export const SignupBtn = props =>
  <button {...props} className="btn btn-success">
    {props.children}
  </button>;
