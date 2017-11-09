import React from "react";
import Container from 'muicss/lib/react/container';

export const FormContainer = ({ fluid, children }) =>
<Container fluid={true} className = "backgroundcolor">
  {children}
</Container>