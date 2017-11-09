import React from "react";
import Input from 'muicss/lib/react/input';

export const InputLogin = props => (
  <div>
    <Input className="form-control"  {...props} floatingLabel={true} />
  </div>
)