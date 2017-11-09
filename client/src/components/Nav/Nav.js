import React from "react";
import { Nav } from 'react-materialize';
export const NavBar = (props) => 
<nav>
    <div className="nav-wrapper indigo darken-4">
      <a href="/home" className="brand-logo">PaperHelper</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/home">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </nav>

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="/home">Project Name</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a className="nav-link" href="/home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/projects">Projects</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/register">Register</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/logout">Logout</a>
    </li>
  </ul>
  <span className="navbar-text"></span>
</div>
</nav> */}