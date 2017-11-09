import React from "react";
import Container from 'muicss/lib/react/container';

export const Container1 = ({ fluid, children }) =>
<div className="mui-container-fluid">
  {children}
</div>;

// export const Container = ({ fluid, children }) =>
// <div className={`container${fluid ? "-fluid" : ""}`}>
//   {children}
// </div>;