import React from "react";

export const Row = ({ fluid, children }) =>
  <div className="row">
    {children}
  </div>;

// export const Row = ({ fluid, children }) =>
// <div className={`row${fluid ? "-fluid" : ""}`}>
//   {children}
// </div>;