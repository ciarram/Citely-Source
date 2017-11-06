import React from "react";

export const SubmitBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn">
    {props.children}
  </button>;