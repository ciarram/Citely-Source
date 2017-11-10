import React from "react";
import Input from 'muicss/lib/react/input';
import "./Login.css";

export const InputLogin = props => (
  <div>
    <Input className="form-login"  {...props} floatingLabel={true} />
  </div>
)