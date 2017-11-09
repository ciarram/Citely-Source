import React from "react";
import Col from 'muicss/lib/react/col';

export const Column = ({children }) =>
<Col md="4">
  {children}
</Col>;



// export const Col = ({ size, children }) =>
// <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
//   {children}
// </div>;