import React from "react";
import '../style/App.css';
import {Link} from "react-router-dom";
import Img_1 from '../images/gasmask.jpg';
import Img_2 from '../images/nightmare_barbie.jpg';
import Img_3 from '../images/It.jpg';
import Img_4 from '../images/portfolio_1.jpg';
import Img_5 from '../images/fogle.jpg';
import Img_6 from '../images/foot_2.jpg';
import Img_7 from '../images/EQUALMAN.jpg';
import Img_8 from '../images/erik_colorbooks.jpg';
import Img_9 from '../images/sphere_practice.png';
import Img_10 from '../images/bubb_logo.jpg';
import Img_11 from '../images/ASU_mockup.jpg';
import Img_12 from '../images/debabyjesus_2.jpg';
import Img_13 from '../images/Baby Jesus.jpg';
import Img_14 from '../images/B.png';
import Img_15 from '../images/M.jpg';
import Img_16 from '../images/paisley.jpg';
import Img_17 from '../images/Shadow.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import {Animated} from "react-animated-css";



class Gallery extends React.Component {
  render() {
    return (
      <div id="gallery">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="my-navbar-brand" to="/">
            <Animated animationIn="bounceInLeft"><img id="my-logo" src="http://www.pvhc.net/img144/mxucxzruwiwrnmmzlxxl.png" alt="Home" /></Animated>
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
        <div class="container">
          <iframe src="https://player.vimeo.com/video/82063750?autoplay=true&loop=1&controls=1" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
        </div>
        {/* <div id="my_carousel">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src={Img_1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={Img_2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={Img_3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={Img_4} alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={Img_5} alt="Fourth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          </div>
        </div>  */}
        <div id="img-wrapper">
          <img id="ps-logo" src="https://s-media-cache-ak0.pinimg.com/originals/3a/95/ed/3a95ed4894f7e20a138d812e940adbbc.png" />
          <img id="ps-logo" src="http://icons.veryicon.com/png/Application/Custom%20Round%20Yosemite/Adobe%20Illustrator.png" />
        </div> 
        <section className="ps" >
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <img className="photoshop_img" src={Img_1} alt="" />
            <img className="photoshop_img" src={Img_2} alt="" />
            <img className="photoshop_img" src={Img_3} alt="" />
            <img className="photoshop_img" src={Img_4} alt="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <img className="photoshop_img" src={Img_5} alt="" />
            <img className="photoshop_img" src={Img_6} alt="" />
            <img className="photoshop_img" src={Img_7} alt="" />
            <img className="photoshop_img" src={Img_8} alt="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <img className="photoshop_img" src={Img_14} alt="" />
            <img className="photoshop_img" src={Img_10} alt="" />
            <img className="photoshop_img" src={Img_11} alt="" />
            <img className="photoshop_img" src={Img_12} alt="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <img className="photoshop_img" src={Img_13} alt="" />
            <img className="photoshop_img" src={Img_15} alt="" />
            <img className="photoshop_img" src={Img_16} alt="" />
            <img className="photoshop_img" src={Img_17} alt="" />
          </div>
        </section>
      <div>
        <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>
      </div>
      </div>
    );
  }
}

export default Gallery;
