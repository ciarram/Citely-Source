import React from "react";
import Appbar from 'muicss/lib/react/appbar';


export const NavBar = (props) => (
    <Appbar>
      <table width="100%">
         <tbody>
             <td className="mui--appbar-height" >
               <a href="/home">Home</a>
             </td>
             <td className="mui--appbar-height">
               <a href="/projects">Projects</a>
             </td>
             <td className="mui--appbar-height">
               <a href="/register">Register</a>
             </td>
             <td className="mui--appbar-height">
               <a href="/logout">Logout</a>
             </td>
         </tbody>
       </table>
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