import React from "react";
import Panel from 'muicss/lib/react/panel';
import "./List.css";

export const ListItem = props => (
  <Panel className = "projectpanel">
  {props.children}
  </Panel>
  
  // <li className="list-group-item">
    // {props.children}
  // </li>
);
