import React from 'react';
import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";

function Resume(props) {
  return (
    <div id="resume_div">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="my-navbar-brand" to="/">
        <Animated animationIn="bounceInLeft"><img id="my-logo" src="http://www.pvhc.net/img144/mxucxzruwiwrnmmzlxxl.png" alt="Home" /></Animated>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 
        <div className="collapse my-navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="my-nav-link" to="/resume">Résumé<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="my-nav-link" to="/projects">Web Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="my-nav-link" to="/gallery">Design Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <iframe src="https://player.vimeo.com/video/82063750?autoplay=true&loop=1&controls=1" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
      </div>
      <div id="img-wrapper-2">
        <img id="resume-logo" src="https://www.trendinginfo.net/wp-content/uploads/2016/12/resume-writing-tips.png" />
      </div> 
      <div id="section">
        <h2 id="section-title">Profile</h2><br></br>
        <ul>
          <li>Junior web developer and graduate student offering a strong foundation in software engineering and programming principles across multiple platforms.</li>
          <li>Experienced in object-oriented programming, developing, testing and debugging code, designing interfaces, and administering systems and networks.</li>
          <li>Ability to quickly learn and master new technologies. Successful working in both team and self-directed settings.</li>
        </ul>
      </div>
      <div id="section">
        <h2 id="section-title">Employment</h2>
      </div>
      <div id="section">
        <h2 id="section-title">Education</h2>
      </div>
      <div id="section">
        <h2 id="section-title">Courses</h2>
      </div>
      <div id="section">
        <h2 id="section-title">Skills</h2>
      </div>
    </div>
  );
}

export default Resume;