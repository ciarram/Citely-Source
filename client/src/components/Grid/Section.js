import React from "react";

export const Section = ({ fluid, children }) =>
  <div className={`section${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;