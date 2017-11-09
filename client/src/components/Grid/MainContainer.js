import React from "react";
import Container from 'muicss/lib/react/container';
import "./Grid.css";

export const MainContainer = ({ fluid, children }) =>
<Container fluid={true} className = "background">
  {children}
</Container>
