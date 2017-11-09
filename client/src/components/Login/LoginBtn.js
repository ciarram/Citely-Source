import React from "react";
import Button from 'muicss/lib/react/button';

export const LoginBtn = props =>
  <Button {...props} color="accent">
    {props.children}
  </Button>;
