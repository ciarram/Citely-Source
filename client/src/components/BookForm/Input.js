import React from "react";
import Input from 'muicss/lib/react/input';

export const BookInput = props => (
  <div>
    <Input className="form-control"  {...props} floatingLabel={true} />
  </div>

/* <div className="form-group"> */
  // <input className="form-control" {...props} />
// </div>
);
