import React from "react";
import Container from 'muicss/lib/react/container';

export const OutlineContainer = ({ fluid, children }) =>
<Container fluid={true} className = "outlineform">
  {children}
</Container>