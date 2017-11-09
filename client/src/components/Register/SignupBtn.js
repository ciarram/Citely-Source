import React from "react";
import Button from 'muicss/lib/react/button';

export const SignupBtn = props =>
  <Button {...props} color="accent">
    {props.children}
  </Button>;
