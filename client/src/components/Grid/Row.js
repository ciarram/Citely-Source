import React from "react";
import Row from 'muicss/lib/react/row';

export const Row1 = ({ fluid, children }) =>
<Row className="mui-row">
  {children}
</Row>;


// export const Row = ({ fluid, children }) =>
// <div className={`row${fluid ? "-fluid" : ""}`}>
//   {children}
// </div>;