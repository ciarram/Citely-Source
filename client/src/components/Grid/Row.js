import React from "react";
import Row from 'muicss/lib/react/row';

export const Row1 = ({ fluid, children }) =>
<div className="mui-row">
  {children}
</div>;


// export const Row = ({ fluid, children }) =>
// <div className={`row${fluid ? "-fluid" : ""}`}>
//   {children}
// </div>;