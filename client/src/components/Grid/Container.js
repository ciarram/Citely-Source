import React from "react";

export const Container = ({ fluid, children }) =>
  <div className="container">
    {children}
  </div>;

// export const Container = ({ fluid, children }) =>
// <div className={`container${fluid ? "-fluid" : ""}`}>
//   {children}
// </div>;