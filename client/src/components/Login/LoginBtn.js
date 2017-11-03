import React from "react";

export const LoginBtn = props =>
  <button {...props} className="btn btn-success">
    {props.children}
  </button>;
