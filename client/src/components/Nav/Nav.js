import React from "react";
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import Appbar from 'muicss/lib/react/appbar';
// import Tabs from 'muicss/lib/react/tabs';
// import Tab from 'muicss/lib/react/tab';
import "./Nav.css";

export const NavBar = (props) => (
  <Appbar className = "nav">
    <Dropdown color="primary" label="Dropdown">
      <DropdownItem link="/home">Home</DropdownItem>
      <DropdownItem link="/projects">Projects</DropdownItem>
      <DropdownItem link="/register">Register</DropdownItem>
      <DropdownItem link="/logout">Logout</DropdownItem>
    </Dropdown>
  </Appbar>

/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */
/* <a className="navbar-brand" href="/home">Project Name</a> */
/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"> */
  // <span className="navbar-toggler-icon"></span>
// </button>
/* <div className="collapse navbar-collapse" id="navbarText"> */
  // <ul className="navbar-nav mr-auto">
    // <li className="nav-item">
      // <a className="nav-link" href="/home">Home</a>
    // </li>
    // <li className="nav-item">
      // <a className="nav-link" href="/projects">Projects</a>
    // </li>
    // <li className="nav-item">
      // <a className="nav-link" href="/register">Register</a>
    // </li>
    // <li className="nav-item">
      // <a className="nav-link" href="/logout">Logout</a>
    // </li>
  // </ul>
  // <span className="navbar-text"></span>
// </div>
// </nav> 
);