import React from "react";

export const Article = ({ fluid, children }) =>
  <div className={`article${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;