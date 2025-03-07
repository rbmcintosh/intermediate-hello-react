import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";
import ReactPlayer from 'react-player'; 
import Resume from './Resume';


function HomePage() {
  return ( 
    <div id="homepage">
      <nav className="navbar navbar-expand-lg navbar-light my-bg-light">
        <Link className="my-navbar-brand" to="/">
          <Animated animationIn="bounceInLeft"><img id="my-logo" src="http://www.newdesignfile.com/postpic/2010/05/green-home-icon_337211.png" alt="Home" /></Animated>
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div className="collapse my-navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="my-nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item active">
            <Link className="my-nav-link" to="/resume">Résumé<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="my-nav-link" to="/gallery">Design Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
    {/* <div className="homepage-hero-module">
            <div className="video-container">
                <div className="filter"></div>
                <video autoPlay loop className="fillWidth">
                  <source src="../video/Black_Keys.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                  <source src="../video/Black_Keys.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                  <source src="../video/Black_Keys.ogv" type="video/ogv" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                <div className="poster hidden">
                    <img src="../images/Black_Keys.jpg" alt=""/>
                </div>
            </div>
        </div> */}
        
    <div class="container">
      <iframe src="https://player.vimeo.com/video/82063750?autoplay=1&loop=1&controls=0" alt="https://i.pinimg.com/originals/74/93/2e/74932ee00de8ae426662ff36fe8fb06f.png?autoplay=1&loop=1&controls=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
    </div> 
    <div className="text center">
      <Animated animationIn="lightSpeedIn">
        <h1 className="">Ryan McIntosh<br></br></h1>
        <p>Web and Graphic Designer</p>
        <div id="social">
          <a href="https://www.linkedin.com/in/ryan-mcintosh-5089639/" className="my_media">  
            <SocialIcon network="linkedin" className="sm" />
            <p className="hidden_text">LinkedIn</p>
          </a> 
          <a href="https://soundcloud.com/rbmcintosh" className="my_media">
            <SocialIcon network="soundcloud" className="sm" />
            <p className="hidden_text">Soundcloud</p>
          </a>   
          <a href="https://www.facebook.com/ryan.mcintosh.7524" className="my_media">
            <SocialIcon network="facebook" className="sm" />
            <p className="hidden_text">Facebook</p>
          </a> 
          <a href="https://github.com/rbmcintosh" className="my_media">
            <SocialIcon network="github" className="sm" />
            <p className="hidden_text">Github</p>
          </a> 
          <a href="https://www.instagram.com/ryan_b_mcintosh/" className="my_media">
            <SocialIcon network="instagram" className="sm" />
            <p className="hidden_text">Instagram</p>
          </a> 
        </div>
      </Animated>
    </div>
    <div id="footer">
      <div className="hp-one-third">
        <h3 id="ci">Contact Information:</h3>
        <p5 className="info">Email - ryanbmcintosh@gmail.com</p5>
        <p5 className="info">Phone - (832)814-3305</p5>
        <p5 className="info">LinkedIn - www.linkedin.com/in/ryan-mcintosh-5089639</p5>
      </div>
      <div className="hp-two-thirds">
        <div className="skillset">
          <img src="" />
        </div>
        <div className="skillset">
          <img src="" />
        </div>
        <div className="skillset">
          <img src="" />
        </div>
        <div className="skillset">
          <img src="" />
        </div> 
        <div className="skillset"> 
          <img src="" />
        </div>
      </div>
    </div>
  </div> 
  );
}

export default HomePage;