import React from "react";
import "./Nav.css";

export const NavBar = (props) => (
 
 <nav className="navbar navbar-expand-lg navbar-light"> 
    <a className="navbar-brand" href="/home">Citely Source</a> 
       <a className="nav-link" href="/home">Home</a>
       <a className="nav-link" href="/projects">Projects</a>
       <a className="nav-link" href="/register">Register</a>
       <a className="nav-link" href="/logout">Logout</a>
 </nav> 
);