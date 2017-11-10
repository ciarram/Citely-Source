import React from "react";
import Container from 'muicss/lib/react/container';

export const BookContainer = ({ fluid, children }) =>
<Container fluid={true} className = "bookform mui--pull-left">
  {children}
</Container>