import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

function Navbar(props) {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light my-bg-light">
        <a className="navbar-brand" href="#"><img id="logo" src="" alt="logo here" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="my-nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="my-nav-link" to="/projects">Web Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="my-nav-link" to="/gallery">Photoshop Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;



  