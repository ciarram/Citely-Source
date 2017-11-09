import React from "react";
import Panel from 'muicss/lib/react/panel';

export const ListItem = props => (
  <Panel>
  {props.children}
  </Panel>
  
  // <li className="list-group-item">
    // {props.children}
  // </li>
);
